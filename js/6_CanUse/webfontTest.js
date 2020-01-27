/**
 * 1. @font-face のチェック
 * 2. 計測してチェック 5000ms
 * 3. Data URI の可否をチェック
 * 4. Data URI の WebFont を計測してチェック 500ms
 * 5. Data URI で WebFont を埋め込んだ css の読み込み -> 計測してチェック 5000ms
 * 
 * [Test @font-face]no-----+
 *   |                     |
 * [Test WebFont]no-+      |
 *   |              |      |
 *   |  [Test DataURI]no-+ |
 *   |              |    | |
 *   |  [Test CSSFont]no-+ |
 *   |              |    | |
 *   v              v    | |
 * WebFont is available. v v
 *           Image fallback.
 */

var WEBFONT_TEST_PREFIX = 'bad_' + ( new Date() - 0 ) + '_';

function webFontTest( callback, targetWebFontName, embededWebFonts, testIdAndClassName, opt_ligTest, opt_testInterval ){
    var INTERVAL = 5000,
        INTERVAL_EMBEDED_WEBFONT = 100,
        TEST_STRING = 'mmmmmmmmmmlli';

    var testInterval = opt_testInterval || INTERVAL,
        startTime, canDataUri,
        span, div, baseFonts, defaultWidth, result;

    if( DEFINE_DEBUG && 1 <= DEFINE_WEBFONT_DEBUG_MODE ){
        targetWebFontName = WEBFONT_TEST_PREFIX + targetWebFontName;
        g_DebugLogger.log( '[webFontTest] WEBFONT_DEBUG_MODE : ' + DEFINE_WEBFONT_DEBUG_MODE );
    };

    if( maybeCanWebFont() ){
        g_DebugLogger.log( '[webFontTest] maybeCanWebFont() : true' );

        if( document.fonts && !( g_WebKit < 603 ) ){
            g_DebugLogger.log( '[webFontTest] Use Native font loader.' );
            testByNativeFontLoaderAPI();
        } else {
            g_DebugLogger.log( '[webFontTest] No native font loader.' );
            testWebFont( true );
        };
    } else {
        g_DebugLogger.log( '[webFontTest] maybeCanWebFont() : false' );
        g_Timer_set( callback, 0 );
    };

/**================================================================
 *  https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/fontface.js
 *  http://www.webapps-online.com/online-tools/user-agent-strings/dv/browser135552/nokia-browser
 * 
 *  http://blog.kaelig.fr/post/33373448491/testing-font-face-support-on-mobile-and-tablet
 *   Some browsers declare they support @font-face but don’t display the glyphs correctly… 
 *    Symbian 10 - Nokia Browser 8.3.1.4
 *    Android 2.1 - stock browser
 *    Android 2.1 - Dolphin
 *    WebOS 2 - stock browser
 *    WebOS 3 - stock browser
 *    Android 4 - UCBrowser
 *    Windows Phone 7 - IE9
 */
    function maybeCanWebFont(){
        var blacklist =
                ua[ 'MeeGo' ] || ua[ 'AOSP' ] < 2.2 || ua[ 'WebOS' ] || ua[ 'UCWEB' ] ||
                ( ua[ 'TridentMobile' ] < 10 ) || // g_Tasman ||
                ua[ 'NDS' ] || ua[ 'NDSi' ] || ua[ 'N3DS' ],
            style, sheet, cssText, v, result;
    
        if( blacklist ){
            return false;
        } else if( g_Trident < 6 ){
            return true;
        };
        style   = DOM_createThenAdd(
            g_head, 'style', 0, 0, '@font-face{font-family:"font";src:url("https://")}'
        );
        sheet   = style.sheet || style.styleSheet;
        cssText = sheet ? ((v = sheet.cssRules) && (v = v[0]) ? v.cssText : sheet.cssText || '') : '';
        result  = 0 < cssText.indexOf('src') && cssText.indexOf('@font-face') === 0;
        DOM_remove( style );
        return result;
    };

/**
 * https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 */
    function testByNativeFontLoaderAPI(){
        var font = '1.6em "' + targetWebFontName + '"';

        g_DebugLogger.log( '[webFontTest] testByNativeFontLoaderAPI start.' );

        document.fonts.load( font ).then(
            function( fonts ){
                g_DebugLogger.log( '[webFontTest] fonts.check() : ' + check() + ', fonts.length : ' + fonts.length );
                if( mesureWebFont( targetWebFontName ) ){
                    g_Timer_set( callback, result );
                } else {
                    g_DebugLogger.log( '[webFontTest] mesureWebFont() : false' );
                    dataUriTest( testDataUriComplete );
                };
            },
            function( reason ){
                g_DebugLogger.log( '[webFontTest] fonts.load() rejected! ' + reason );
                dataUriTest( testDataUriComplete );
            }
        );

        function check(){
            return document.fonts[ 'check' ]( font, 'i' );
        };
    };

    function resetTime(){
        return startTime = new Date - 0;
    };
    
    function checkTime( ms ){
        // https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
        // hidden の場合は時間切れをスキップする。未検証…
        if( document.hidden || document[ 'msHidden' ] || document[ 'mozHidden' ] || document[ 'webkitHidden' ] ) return false;
        return ms < new Date - startTime;
    };
    
    function testWebFont( isStart ){
        if( isStart ){
            g_DebugLogger.log( '[webFontTest] testWebFont start.' );
            resetTime();
        };

        if( mesureWebFont( targetWebFontName ) ){
            g_DebugLogger.log( '[webFontTest] testWebFont mesurement success : ' + result );
            callback( result );
        } else if( checkTime( testInterval ) ){
            g_DebugLogger.log( '[webFontTest] testWebFont timeout!' );
            if( canDataUri ){
                callback( 0 );
            } else if( g_Trident < 9 ){
                g_Timer_set( callback, 0 );
            } else {
                dataUriTest( testDataUriComplete );
            };
        } else {
            g_Timer_set( testWebFont );
        };
    };

/**================================================================
 * Original Code:
 * 
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.3 (24 Mar 2012)
 */
    function preMesure(){
        var i = -1, font;

        preMesure = null;

        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.

        // http://defghi1977-onblog.blogspot.jp/2013/02/canvasweb.html
        // ※なお，webkitでは代替フォントとしてmonospaceを使うと上手く行きませんでした．
        baseFonts = [/*'monospace',*/ 'sans-serif', 'serif']; // monospace は Chrome で具合が悪い

        // create a SPAN in the document to get the width of the text we use to test
        span = DOM_createThenAdd(
            g_body, 'span',
            {
                'aria-hidden' : 'true'
            },
            {
                position   : 'absolute',
                top        : 0,
                left       : 0,
                visibility : 'hidden',
                //we test using 72px font size, we may use any size. I guess larger the better.
                fontSize   : '72px'
            },
        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
            TEST_STRING
        );
        defaultWidth = {};
    
        while( font = baseFonts[ ++i ] ) {
            //get the default width for the three base fonts
            DOM_setStyle( span, 'fontFamily', font );
            defaultWidth[ font ] = span.offsetWidth; //width for the default font
            //defaultHeight[ font ] = span.offsetHeight; //height for the defualt font
        };
    };

    function mesureWebFont( testFontName ){
        var detected = 0, i = -1, font, chr, w, canLig = 0;

        preMesure && preMesure();

        DOM_appendChild( g_body, span );
        while( font = baseFonts[ ++i ] ) {
            // name of the font along with the base font for fallback.
            DOM_setStyle( span, 'fontFamily', '"' + testFontName + '",' + font );
            if( span.offsetWidth !== defaultWidth[ font ] /* || span.offsetHeight !== defaultHeight[ font ] */){
                detected = 1;
                break;  
            };
        };
        if( detected && opt_ligTest ){
            for( chr in opt_ligTest ){
                span.innerHTML = chr;
                w = span.offsetWidth;
                span.innerHTML = opt_ligTest[ chr ];
                canLig = w === span.offsetWidth ? 1 : 0;
                span.innerHTML = TEST_STRING;
                if( !canLig ) break;
            };
        };
        DOM_remove( span );
        return ( result = detected + canLig );
    };

    function testDataUriComplete( _canDataUri ){
        g_DebugLogger.log( '[webFontTest] testDataUriComplete : ' + _canDataUri );
        if( canDataUri = _canDataUri ){
            testDataUriWebFont( true );
        } else {
            callback( 0 );
        };
    };
    
    function testDataUriWebFont( isStart ){
        var k;
        
        if( isStart ) resetTime();

        for( k in embededWebFonts ){
            if( mesureWebFont( k ) ){
                g_DebugLogger.log( '[webFontTest] success! ' + k );
                div = DOM_createThenAdd(
                    g_body, 'div',
                    {
                        'aria-hidden' : 'true',
                        className     : testIdAndClassName,
                        id            : testIdAndClassName
                    }
                );
                CSSOM_addImport( embededWebFonts[ k ] );
                g_Timer_set( testImportedCssReady, true );
            } else if( checkTime( INTERVAL_EMBEDED_WEBFONT ) ){
                g_DebugLogger.log( '[webFontTest] timeout! ' + k );
                delete embededWebFonts[ k ];
                g_Timer_set( testDataUriWebFont, true );
            } else {
                g_Timer_set( testDataUriWebFont );
            };
            return;
        };

        callback( 0 );
    };

    function testImportedCssReady( isStart ){
        if( isStart ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[webFontTest] testImportedCssReady start!' );
                if( DEFINE_WEBFONT_DEBUG_MODE < 2 ){
                    targetWebFontName = targetWebFontName.replace( WEBFONT_TEST_PREFIX, '' );
                };
                g_DebugLogger.log( '[webFontTest] targetWebFontName : ' + targetWebFontName );
            };
            resetTime();
        };

        if( 1 < div.offsetWidth ){
            g_DebugLogger.log( '[webFontTest] testImportedCssReady ended.' );
            DOM_remove( div );
            testInterval = INTERVAL_EMBEDED_WEBFONT;
            g_Timer_set( testWebFont, true );
        } else if( checkTime( testInterval ) ){
            g_DebugLogger.log( '[webFontTest] testImportedCssReady timeout!' );
            DOM_remove( div );
            callback( 0 );
        } else {
            g_Timer_set( testImportedCssReady );
        };
    };
};

g_webFontTest = webFontTest;