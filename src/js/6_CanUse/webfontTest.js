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

// Data URI スキームをサポートするが Web フォントには使えない環境
var TEST_WEBFONT_NO_SUPPORT_DATA_URI_FONT = p_Trident < 9 || p_Chromium < 2 ||
                                            p_Presto  < 12; // Windows Opera 12.18 で確認
var TEST_WEBFONT_PREFIX                   = DEFINE_WEB_DOC_BASE__DEBUG && ( 'bad_' + ( new Date - 0 ) + '_' );
var TEST_WEBFONT_LOADED_EMBEDED_WEBFONT   = 5000;
var TEST_WEBFONT_INTERVAL_EMBEDED_WEBFONT = 100;
var TEST_WEBFONT_TEST_STRING              = 'mmmmmmmmmmlli';
    // http://defghi1977-onblog.blogspot.jp/2013/02/canvasweb.html
    // ※なお，webkitでは代替フォントとしてmonospaceを使うと上手く行きませんでした．
var TEST_WEBFONT_BASE_FONT                = [/*'monospace',*/ 'sans-serif', 'serif']; // monospace は Chrome で具合が悪い

var webFontTest_maybeCanUseWebFont;

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
/** @type {!Function|undefined} */
var webFontTest_testMaybeCanUseWebFont = function(){
    var blocklist =
            p_WebKit < 525 || // Safari <3.1
            p_Gecko && !p_FirefoxGte35 || // Gecko <1.9.1 p_CSSOM_insertRuleToStyleSheet( styleSheet, '@font-face', {} ) でエラー
            p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP          ) < 2.2 ||
            p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_UCWEB         ) ||
            p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) < 10 ||
            p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_MeeGo ) ||
            p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_WebOS ) ||
            p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_NDS   ) ||
            p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_NDSi  ) ||
            p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_N3DS  ),
            /* ua[ 'MeeGo' ] || ua[ 'AOSP' ] < 2.2 || ua[ 'WebOS' ] || ua[ 'UCWEB' ] ||
            ( ua[ 'TridentMobile' ] < 10 ) || // p_Tasman ||
            ua[ 'NDS' ] || ua[ 'NDSi' ] || ua[ 'N3DS' ], */
        styleSheet, ruleIndex, cssText, result;

    if( blocklist ){
        return false;
    } else if( p_CSSOM_FAIL_TO_INSERT_FONTFACE_RULE ){
        return true;
    };

    if( p_CSSOM_canuse === 2 ){ // CSSStyleSheet であること!
        styleSheet = p_CSSOM_createStyleSheet();
        ruleIndex  = p_CSSOM_insertRuleToStyleSheet( styleSheet, '@font-face', { 'font-family' : '"font"', src : 'url("https://")' } );
        cssText    = styleSheet.cssText || ( styleSheet.cssRules && styleSheet.cssRules[ ruleIndex ] && styleSheet.cssRules[ ruleIndex ].cssText ) || '';
        result     = cssText.match( 'src' ) && cssText.match( '@font-face' );
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            Debug.log( '[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: ' + cssText );
            Debug.log( '[webFontTest] webFontTest_testMaybeCanUseWebFont() length: ' + ( p_Trident < 9 ? styleSheet.rules : styleSheet.cssRules ).length );
            Debug.log( '[webFontTest] webFontTest_testMaybeCanUseWebFont() src: ' + p_CSSOM_getRawValueOfRule( styleSheet, ruleIndex, 'src' ) );
        };
        p_CSSOM_deleteStyleSheet( styleSheet );
    };

    webFontTest_testMaybeCanUseWebFont = undefined;

    return webFontTest_maybeCanUseWebFont = !!result;
};

/** ===========================================================================
 * export to packageGlobal
 */
p_webFontTest = function( onCompleteHandler, targetWebFontName, embededWebFonts, testIdAndClassName, opt_ligTest, opt_ligTestChar, opt_intervalTime ){
    var intervalTime = opt_intervalTime || TEST_WEBFONT_LOADED_EMBEDED_WEBFONT,
        startTime, canUseDataURI,
        elmSpan, elmDiv, defaultWidth, result, styleSheetDataURIWebFont;

    function callback( result ){
        onCompleteHandler( result );
        if( styleSheetDataURIWebFont && !result ){
            p_CSSOM_deleteStyleSheet( styleSheetDataURIWebFont );
        };
        onCompleteHandler = elmSpan = elmDiv = defaultWidth = styleSheetDataURIWebFont = undefined;
    };

    if( DEFINE_WEB_DOC_BASE__DEBUG && 1 <= DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE ){
        targetWebFontName = TEST_WEBFONT_PREFIX + targetWebFontName;
        Debug.log( '[webFontTest] WEBFONT_DEBUG_MODE : ' + DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE );
    };

    if( webFontTest_testMaybeCanUseWebFont || webFontTest_maybeCanUseWebFont ){
        if( webFontTest_maybeCanUseWebFont || webFontTest_testMaybeCanUseWebFont() ){
            Debug.log( '[webFontTest] webFontTest_testMaybeCanUseWebFont() : true' );

            if( document.fonts && !( p_WebKit < 603 ) ){
                Debug.log( '[webFontTest] Use Native font loader.' );
                testByNativeFontLoaderAPI();
            } else {
                Debug.log( '[webFontTest] No native font loader.' );
                testWebFont( true );
            };
        } else {
            Debug.log( '[webFontTest] webFontTest_testMaybeCanUseWebFont() : false' );
            p_setTimer( callback, 0 );
        };
    } else {
        Debug.log( '[webFontTest] webFontTest_maybeCanUseWebFont : false' );
        p_setTimer( callback, 0 );
    };

/**
 * https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 */
    function testByNativeFontLoaderAPI(){
        var font = '1.6em "' + targetWebFontName + '"';

        Debug.log( '[webFontTest] testByNativeFontLoaderAPI start.' );

        document.fonts.load( font ).then(
            function( fonts ){
                if( DEFINE_WEB_DOC_BASE__DEBUG ){
                    Debug.log( '[webFontTest] fonts.check() : ' + check() + ', fonts.length : ' + fonts.length );
                };
                if( mesureWebFont( targetWebFontName ) ){
                    p_setTimer( callback, result );
                } else {
                    Debug.log( '[webFontTest] mesureWebFont() : false' );
                    // Firefox 72 では、このタイミングで判定に失敗する模様
                    // intervalTime = TEST_WEBFONT_INTERVAL_EMBEDED_WEBFONT; 100ms でもフォントの判定に失敗する。
                    testWebFont( true );
                };
            },
            function( reason ){
                Debug.log( '[webFontTest] fonts.load() rejected! ' + reason );
                p_dataUriTest( onTestDataURIComplete );
            }
        );

        function check(){
            return document.fonts.check( font, 'i' );
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
        } else if( checkTime( intervalTime ) ){
            Debug.log( '[webFontTest] testWebFont timeout!' );
            if( canUseDataURI ){
                callback( 0 );
            } else if( TEST_WEBFONT_NO_SUPPORT_DATA_URI_FONT ){
                p_setTimer( callback, 0 );
            } else {
                p_dataUriTest( onTestDataURIComplete );
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
            TEST_WEBFONT_TEST_STRING
        );
        defaultWidth = {};
    
        while( font = TEST_WEBFONT_BASE_FONT[ ++i ] ) {
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
                    TEST_WEBFONT_TEST_STRING
                );
            };
        } else {
            p_body.appendChild( elmSpan );
        };

        while( font = TEST_WEBFONT_BASE_FONT[ ++i ] ) {
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
            elmSpan.innerHTML = TEST_WEBFONT_TEST_STRING;
        };
        p_DOM_remove( elmSpan );
        if( p_Trident < 5 ){
            elmSpan = undefined;
        };
        return ( result = detected + canLig );
    };

    function onTestDataURIComplete( result ){
        Debug.log( '[webFontTest] onTestDataURIComplete : ' + result );
        if( canUseDataURI = result ){
            testDataURIWebFont( true );
        } else {
            callback( 0 );
        };
    };
    
    function testDataURIWebFont( isStart ){
        var embededWebFontName;
        
        if( isStart ) resetTime();

        for( embededWebFontName in embededWebFonts ){
            if( mesureWebFont( embededWebFontName ) ){
                Debug.log( '[webFontTest] success! ' + embededWebFontName );
                elmDiv = p_DOM_insertElement(
                    p_body, 'div',
                    {
                        'aria-hidden' : 'true',
                        className     : testIdAndClassName,
                        id            : testIdAndClassName
                    }
                );
                // TOOD <link> にする
                styleSheetDataURIWebFont = p_CSSOM_createStyleSheet();
                p_CSSOM_insertRuleToStyleSheet( styleSheetDataURIWebFont, '@import', embededWebFonts[ embededWebFontName ] );
                p_setTimer( testImportedCssReady, true );
            } else if( checkTime( TEST_WEBFONT_INTERVAL_EMBEDED_WEBFONT ) ){
                Debug.log( '[webFontTest] timeout! ' + embededWebFontName );
                delete embededWebFonts[ embededWebFontName ];
                p_setTimer( testDataURIWebFont, true );
            } else {
                p_setTimer( testDataURIWebFont );
            };
            return;
        };

        callback( 0 );
    };

    function testImportedCssReady( isStart ){
        if( isStart ){
            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[webFontTest] testImportedCssReady start!' );
                if( DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE < 2 ){
                    targetWebFontName = targetWebFontName.replace( TEST_WEBFONT_PREFIX, '' );
                };
                Debug.log( '[webFontTest] targetWebFontName : ' + targetWebFontName );
            };
            resetTime();
        };

        if( 1 < elmDiv.offsetWidth ){
            Debug.log( '[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=' + elmDiv.offsetWidth );
            p_DOM_remove( elmDiv );
            intervalTime = TEST_WEBFONT_INTERVAL_EMBEDED_WEBFONT;
            p_setTimer( testWebFont, true );
        } else if( checkTime( intervalTime ) ){
            /**
             * offsetWidth = 9 にならない問題
             *  1. Windows Safari 3.2.3   WebKit 525.29 で必要. Windows Safari 4.0.5 WebKit 531 でこの処理は不要.
             *  2. Windows Chrome 1.0.154 WebKit 525.19 でも発生したが TEST_WEBFONT_NO_SUPPORT_DATA_URI_FONT の為
             *     ここには至らない. Windows Iron 2.0.168 Webkit 530.4 でこの処理は不要.
             */
            if( p_WebKit < 528 ){
                Debug.log( '[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=' + elmDiv.offsetWidth );
                p_DOM_remove( elmDiv );
                intervalTime = TEST_WEBFONT_INTERVAL_EMBEDED_WEBFONT;
                p_setTimer( testWebFont, true );
            } else {
                Debug.log( '[webFontTest] testImportedCssReady timeout!' );
                p_DOM_remove( elmDiv );
                callback( 0 );
            };
        } else {
            p_setTimer( testImportedCssReady );
        };
    };
};