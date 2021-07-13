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

/** ===========================================================================
 * export to packageGlobal
 */
p_webFontTest = function( _callback, targetWebFontName, embededWebFonts, testIdAndClassName, opt_ligTest, opt_ligTestChar, opt_testInterval ){
    var INTERVAL = 5000,
        INTERVAL_EMBEDED_WEBFONT = 100,
        TEST_STRING = 'mmmmmmmmmmlli',

        // http://defghi1977-onblog.blogspot.jp/2013/02/canvasweb.html
        // ※なお，webkitでは代替フォントとしてmonospaceを使うと上手く行きませんでした．
        BASE_FONTS = [/*'monospace',*/ 'sans-serif', 'serif']; // monospace は Chrome で具合が悪い

    var testInterval = opt_testInterval || INTERVAL,
        startTime, canDataUri,
        elmSpan, elmDiv, defaultWidth, result;

    function callback( result ){
        _callback( result );
        _callback = elmSpan = elmDiv = defaultWidth = null;
    };

    if( WEB_DOC_BASE_DEFINE_DEBUG && 1 <= WEB_DOC_BASE_DEFINE_WEBFONT_DEBUG_MODE ){
        targetWebFontName = WEBFONT_TEST_PREFIX + targetWebFontName;
        Debug.log( '[webFontTest] WEBFONT_DEBUG_MODE : ' + WEB_DOC_BASE_DEFINE_WEBFONT_DEBUG_MODE );
    };

    if( maybeCanWebFont() ){
        Debug.log( '[webFontTest] maybeCanWebFont() : true' );

        if( document.fonts && !( p_WebKit < 603 ) ){
            Debug.log( '[webFontTest] Use Native font loader.' );
            testByNativeFontLoaderAPI();
        } else {
            Debug.log( '[webFontTest] No native font loader.' );
            testWebFont( true );
        };
    } else {
        Debug.log( '[webFontTest] maybeCanWebFont() : false' );
        p_setTimer( callback, 0 );
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
        var blocklist =
                ua[ 'MeeGo' ] || ua[ 'AOSP' ] < 2.2 || ua[ 'WebOS' ] || ua[ 'UCWEB' ] ||
                ( ua[ 'TridentMobile' ] < 10 ) || // p_Tasman ||
                ua[ 'NDS' ] || ua[ 'NDSi' ] || ua[ 'N3DS' ],
            style, sheet, cssText, v, result;
    
        if( blocklist ){
            return false;
        } else if( p_Trident < 6 ){
            return true;
        };
        style   = p_DOM_insertStyleElement(
            p_head, 0, '@font-face{font-family:"font";src:url("https://")}'
        );
        sheet   = p_CSSOM_getStyleSheet( style );
        cssText = sheet ? ((v = p_CSSOM_getCssRules( sheet )) && (v = v[0]) ? v.cssText : sheet.cssText || '') : '';
        result  = 0 < cssText.indexOf('src') && cssText.indexOf('@font-face') === 0;
        p_DOM_remove( style );
        return result;
    };

/**
 * https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 */
    function testByNativeFontLoaderAPI(){
        var font = '1.6em "' + targetWebFontName + '"';

        Debug.log( '[webFontTest] testByNativeFontLoaderAPI start.' );

        document.fonts.load( font ).then(
            function( fonts ){
                if( WEB_DOC_BASE_DEFINE_DEBUG ){
                    Debug.log( '[webFontTest] fonts.check() : ' + check() + ', fonts.length : ' + fonts.length );
                };
                if( mesureWebFont( targetWebFontName ) ){
                    p_setTimer( callback, result );
                } else {
                    Debug.log( '[webFontTest] mesureWebFont() : false' );
                    // Firefox 72 では、このタイミングで判定に失敗する模様
                    // testInterval = INTERVAL_EMBEDED_WEBFONT; 100ms でもフォントの判定に失敗する。
                    testWebFont( true );
                };
            },
            function( reason ){
                Debug.log( '[webFontTest] fonts.load() rejected! ' + reason );
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
        if( document.hidden || document[ 'msHidden' ] || document[ 'mozHidden' ] || document[ 'webkitHidden' ] ){
            resetTime();
            return false;
        };
        return ms < new Date - startTime;
    };
    
    function testWebFont( isStart ){
        if( isStart ){
            Debug.log( '[webFontTest] testWebFont start.' );
            resetTime();
        };

        if( mesureWebFont( targetWebFontName ) ){
            Debug.log( '[webFontTest] testWebFont mesurement success : ' + result );
            callback( result );
        } else if( checkTime( testInterval ) ){
            Debug.log( '[webFontTest] testWebFont timeout!' );
            if( canDataUri ){
                callback( 0 );
            } else if( p_Trident < 9 ){
                p_setTimer( callback, 0 );
            } else {
                dataUriTest( testDataUriComplete );
            };
        } else {
            p_setTimer( testWebFont );
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

        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.

        // create a SPAN in the document to get the width of the text we use to test
        elmSpan = p_DOM_insertElement(
            p_body, 'span',
            {
                'aria-hidden' : 'true',
                style         : {
                    position   : 'absolute',
                    top        : 0,
                    left       : 0,
                    visibility : 'hidden',
                    //we test using 72px font size, we may use any size. I guess larger the better.
                    fontSize   : '72px'
                }
            },
        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
            TEST_STRING
        );
        defaultWidth = {};
    
        while( font = BASE_FONTS[ ++i ] ) {
            //get the default width for the three base fonts
            p_DOM_setStyle( elmSpan, 'fontFamily', font );
            defaultWidth[ font ] = elmSpan.offsetWidth; //width for the default font
            //defaultHeight[ font ] = elmSpan.offsetHeight; //height for the defualt font
        };
    };

    function mesureWebFont( testFontName ){
        var detected = 0, i = -1, font, w, canLig = 0;

        !defaultWidth && preMesure();

        if( p_Trident < 5 ){
            if( !elmSpan ){
                elmSpan = p_DOM_insertElement(
                    p_body, 'span',
                    {
                        style         : {
                            position   : 'absolute',
                            top        : 0,
                            left       : 0,
                            visibility : 'hidden',
                            fontSize   : '72px'
                        }
                    },
                    TEST_STRING
                );
            };
        } else {
            p_body.appendChild( elmSpan );
        };

        while( font = BASE_FONTS[ ++i ] ) {
            // name of the font along with the base font for fallback.
            p_DOM_setStyle( elmSpan, 'fontFamily', '"' + testFontName + '",' + font );
            if( elmSpan.offsetWidth !== defaultWidth[ font ] /* || elmSpan.offsetHeight !== defaultHeight[ font ] */){
                detected = 1;
                break;  
            };
        };
        if( !p_Trident && detected && opt_ligTest ){ // IE5 でエラーが発生
            elmSpan.innerHTML = opt_ligTest;
            w = elmSpan.offsetWidth;
            elmSpan.innerHTML = opt_ligTestChar;
            canLig = w === elmSpan.offsetWidth ? 1 : 0;
            elmSpan.innerHTML = TEST_STRING;
        };
        p_DOM_remove( elmSpan );
        if( p_Trident < 5 ){
            elmSpan = null;
        };
        return ( result = detected + canLig );
    };

    function testDataUriComplete( _canDataUri ){
        Debug.log( '[webFontTest] testDataUriComplete : ' + _canDataUri );
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
                Debug.log( '[webFontTest] success! ' + k );
                elmDiv = p_DOM_insertElement(
                    p_body, 'div',
                    {
                        'aria-hidden' : 'true',
                        className     : testIdAndClassName,
                        id            : testIdAndClassName
                    }
                );
                p_CSSOM_addImport( embededWebFonts[ k ] );
                p_setTimer( testImportedCssReady, true );
            } else if( checkTime( INTERVAL_EMBEDED_WEBFONT ) ){
                Debug.log( '[webFontTest] timeout! ' + k );
                delete embededWebFonts[ k ];
                p_setTimer( testDataUriWebFont, true );
            } else {
                p_setTimer( testDataUriWebFont );
            };
            return;
        };

        callback( 0 );
    };

    function testImportedCssReady( isStart ){
        if( isStart ){
            if( WEB_DOC_BASE_DEFINE_DEBUG ){
                Debug.log( '[webFontTest] testImportedCssReady start!' );
                if( WEB_DOC_BASE_DEFINE_WEBFONT_DEBUG_MODE < 2 ){
                    targetWebFontName = targetWebFontName.replace( WEBFONT_TEST_PREFIX, '' );
                };
                Debug.log( '[webFontTest] targetWebFontName : ' + targetWebFontName );
            };
            resetTime();
        };

        if( 1 < elmDiv.offsetWidth ){
            Debug.log( '[webFontTest] testImportedCssReady ended.' );
            p_DOM_remove( elmDiv );
            testInterval = INTERVAL_EMBEDED_WEBFONT;
            p_setTimer( testWebFont, true );
        } else if( checkTime( testInterval ) ){
            Debug.log( '[webFontTest] testImportedCssReady timeout!' );
            p_DOM_remove( elmDiv );
            callback( 0 );
        } else {
            p_setTimer( testImportedCssReady );
        };
    };
};