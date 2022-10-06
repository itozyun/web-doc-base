/**
 * 『Webフォントがブラウザで有効か？きっちり調べる』に掲載のフォローチャートを参照すること
 *   https://outcloud.blogspot.com/2018/02/IsWebfontEffective.html
 */

/** ===========================================================================
 * export to packageGlobal
 */

/**
 * @param {!function(number):void} onCompleteHandler
 * @param {string} targetWebFontName
 * @param {!Object.<string,string>=} opt_embededWebFonts
 * @param {string=} opt_testIdAndClassName
 * @param {string=} opt_ligatureTestString
 * @param {string=} opt_ligatureTestChar
 * @param {number=} opt_intervalTime
 */
p_webFontTest = function( onCompleteHandler, targetWebFontName, opt_embededWebFonts, opt_testIdAndClassName, opt_ligatureTestString, opt_ligatureTestChar, opt_intervalTime ){
    webFontTest_onCompleteHandler  = onCompleteHandler;
    webFontTest_targetWebFontName  = targetWebFontName;
    webFontTest_embededWebFonts    = opt_embededWebFonts;
    webFontTest_testIdAndClassName = opt_testIdAndClassName;
    webFontTest_ligatureTestString       = opt_ligatureTestString;
    webFontTest_ligatureTestChar   = opt_ligatureTestChar;
    webFontTest_intervalTime       = opt_intervalTime || webFontTest_LOADED_EMBEDED_WEBFONT;

    if( DEFINE_WEB_DOC_BASE__DEBUG && 1 <= DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE ){
        webFontTest_targetWebFontName = webFontTest_PREFIX + webFontTest_targetWebFontName;
        Debug.log( '[webFontTest] WEBFONT_DEBUG_MODE : ' + DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE );
    };

    if( webFontTest_UNAVAILABLE_DUE_TO_BLOCKLIST ){
        Debug.log( '[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : false' );
        p_setTimer( webFontTest_testWebFontComplete, 0 );
    } else {
        Debug.log( '[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : true' );

        if( document.fonts && !( p_WebKit < 603 ) ){
            Debug.log( '[webFontTest] Use Native font loader.' );
            webFontTest_testByNativeFontLoaderAPI( webFontTest_targetWebFontName );
        } else {
            Debug.log( '[webFontTest] No native font loader.' );
            webFontTest_repeatToMesureWebFont( true );
        };
    };
};

/** ===========================================================================
 *  private
 */

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
var webFontTest_UNAVAILABLE_DUE_TO_BLOCKLIST = // Unavailable due to block list
    p_WebKit < 525 || // Safari <3.1
    p_Presto < 10  || // block NDS, NDSi
    p_Gecko && !p_FirefoxGte35 || // Gecko <1.9.1 p_CSSOM_insertRuleToStyleSheet( styleSheet, '@font-face', {} ) でエラー
    p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP          ) < 2.2 ||
    p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_UCWEB         ) ||
    p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) < 10 ||
    p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_MeeGo ) ||
    p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_WebOS ) ||
    p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_N3DS  );

// Data URI スキームをサポートするが Web フォントには使えない環境
var webFontTest_NO_SUPPORT_DATA_URI_FONT = p_Trident < 9 || p_Chromium < 2 ||
                                           p_Presto  < 12; // Windows Opera 12.18 で確認
var webFontTest_PREFIX                   = DEFINE_WEB_DOC_BASE__DEBUG && ( 'bad_' + ( new Date - 0 ) + '_' );
var webFontTest_LOADED_EMBEDED_WEBFONT   = 5000;
var webFontTest_INTERVAL_EMBEDED_WEBFONT = 100;
var webFontTest_TEST_STRING              = 'mmmmmmmmmmlli';
// http://defghi1977-onblog.blogspot.jp/2013/02/canvasweb.html
// ※なお，webkitでは代替フォントとしてmonospaceを使うと上手く行きませんでした．
var webFontTest_BASE_FONT                = [ /*'monospace',*/ 'sans-serif', 'serif' ]; // monospace は Chrome で具合が悪い
var webFontTest_QUEUE                    = !webFontTest_UNAVAILABLE_DUE_TO_BLOCKLIST && [];

var webFontTest_onCompleteHandler,
    webFontTest_targetWebFontName,
    webFontTest_embededWebFonts,
    webFontTest_testIdAndClassName,
    webFontTest_ligatureTestString,
    webFontTest_ligatureTestChar,
    webFontTest_intervalTime,
    webFontTest_startTime,
    webFontTest_isTestDataURIWebFontPhase,
    webFontTest_elmSpan, webFontTest_elmDiv,
    webFontTest_styleSheetDataURIWebFont,
    webFontTest_defaultWidth;

    function webFontTest_testWebFontComplete( result ){
        webFontTest_onCompleteHandler( result );
        if( webFontTest_styleSheetDataURIWebFont && !result ){
            if( p_CSSOM_createStyleSheet ){
                p_CSSOM_deleteStyleSheet( webFontTest_styleSheetDataURIWebFont );
            } else {
                p_DOM_remove( webFontTest_styleSheetDataURIWebFont );
            };
        };
        webFontTest_onCompleteHandler = webFontTest_targetWebFontName =
        webFontTest_embededWebFonts = webFontTest_testIdAndClassName =
        webFontTest_ligatureTestString = webFontTest_ligatureTestChar =
        webFontTest_isTestDataURIWebFontPhase = webFontTest_elmSpan = webFontTest_elmDiv =
        webFontTest_defaultWidth = webFontTest_styleSheetDataURIWebFont = undefined;
        // TODO webFontTest_QUEUE
    };

/**
 * https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 */
    function webFontTest_testByNativeFontLoaderAPI( targetWebFontName ){
        var font = '1.6em "' + targetWebFontName + '"';

        Debug.log( '[webFontTest] testByNativeFontLoaderAPI start.' );

        document.fonts.load( font ).then(
            function( fonts ){
                var result;

                if( DEFINE_WEB_DOC_BASE__DEBUG ){
                    Debug.log( '[webFontTest] fonts.check() : ' + document.fonts.check( font, 'i' ) + ', fonts.length : ' + fonts.length );
                };
                if( result = webFontTest_mesureWebFont( webFontTest_targetWebFontName ) ){
                    p_setTimer( webFontTest_testWebFontComplete, result );
                } else {
                    Debug.log( '[webFontTest] mesureWebFont() : false' );
                    // Firefox 72 では、このタイミングで判定に失敗する模様
                    // webFontTest_intervalTime = webFontTest_INTERVAL_EMBEDED_WEBFONT; 100ms でもフォントの判定に失敗する。
                    webFontTest_repeatToMesureWebFont( true );
                };
            },
            function( reason ){
                Debug.log( '[webFontTest] fonts.load() rejected! ' + reason );
                webFontTest_testDataURIOrSkipTest();
            }
        );
    };

    function webFontTest_resetTime(){
        return webFontTest_startTime = new Date - 0;
    };
    
    function webFontTest_checkTime( ms ){
        // https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
        // hidden の場合は時間切れをスキップする。未検証…
        if( document.hidden || document[ 'msHidden' ] || document[ 'mozHidden' ] || document[ 'webkitHidden' ] ){
            webFontTest_resetTime();
            return false;
        };
        return ms < new Date - webFontTest_startTime;
    };
    
    function webFontTest_repeatToMesureWebFont( isStart ){
        var result;

        if( isStart ){
            Debug.log( '[webFontTest] testWebFont start.' );
            webFontTest_resetTime();
        };

        if( result = webFontTest_mesureWebFont( webFontTest_targetWebFontName ) ){
            Debug.log( '[webFontTest] testWebFont mesurement success : ' + result );
            webFontTest_testWebFontComplete( result );
        } else if( webFontTest_checkTime( webFontTest_intervalTime ) ){
            Debug.log( '[webFontTest] testWebFont timeout!' );
            if( webFontTest_isTestDataURIWebFontPhase || webFontTest_NO_SUPPORT_DATA_URI_FONT ){
                webFontTest_testWebFontComplete( 0 );
            } else {
                webFontTest_testDataURIOrSkipTest();
            };
        } else {
            p_setTimer( webFontTest_repeatToMesureWebFont );
        };
    };

    function webFontTest_testDataURIOrSkipTest(){
        p_notUndefined( p_dataURITestResult ) ? webFontTest_onTestDataURIComplete( p_dataURITestResult ) : p_dataURITest( webFontTest_onTestDataURIComplete );
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
    function webFontTest_preMesure(){
        var i = -1, font;

        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.

        // create a SPAN in the document to get the width of the text we use to test
        webFontTest_elmSpan = p_DOM_insertElement(
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
            webFontTest_TEST_STRING
        );
        webFontTest_defaultWidth = {};
    
        while( font = webFontTest_BASE_FONT[ ++i ] ) {
            //get the default width for the three base fonts
            p_DOM_setStyle( webFontTest_elmSpan, 'fontFamily', font );
            webFontTest_defaultWidth[ font ] = webFontTest_elmSpan.offsetWidth; //width for the default font
            //defaultHeight[ font ] = webFontTest_elmSpan.offsetHeight; //height for the defualt font
        };
    };

    function webFontTest_mesureWebFont( testFontName ){
        var available = 0, i = -1, font, w, canLigature = 0;

        !webFontTest_defaultWidth && webFontTest_preMesure();

        if( p_Trident < 5 ){
            if( !webFontTest_elmSpan ){
                webFontTest_elmSpan = p_DOM_insertElement(
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
                    webFontTest_TEST_STRING
                );
            };
        } else {
            p_body.appendChild( webFontTest_elmSpan );
        };

        while( font = webFontTest_BASE_FONT[ ++i ] ) {
            // name of the font along with the base font for fallback.
            p_DOM_setStyle( webFontTest_elmSpan, 'fontFamily', '"' + testFontName + '",' + font );
            if( webFontTest_elmSpan.offsetWidth !== webFontTest_defaultWidth[ font ] /* || webFontTest_elmSpan.offsetHeight !== defaultHeight[ font ] */){
                available = 1;
                break;  
            };
        };
        if( !p_Trident && available && webFontTest_ligatureTestString ){ // IE5 でエラーが発生 TODO カタログで枝掃いをする
            webFontTest_elmSpan.innerHTML = webFontTest_ligatureTestString;
            w = webFontTest_elmSpan.offsetWidth;
            webFontTest_elmSpan.innerHTML = webFontTest_ligatureTestChar;
            canLigature = w === webFontTest_elmSpan.offsetWidth ? 1 : 0;
            webFontTest_elmSpan.innerHTML = webFontTest_TEST_STRING;
        };
        p_DOM_remove( webFontTest_elmSpan );
        if( p_Trident < 5 ){
            webFontTest_elmSpan = undefined;
        };
        return available + canLigature;
    };

    function webFontTest_onTestDataURIComplete( result ){
        Debug.log( '[webFontTest] onTestDataURIComplete : ' + result );
        if( result ){
            webFontTest_isTestDataURIWebFontPhase = true;
            webFontTest_repeatToMesureDataURIWebFont( true );
        } else {
            webFontTest_testWebFontComplete( 0 );
        };
    };
    
    function webFontTest_repeatToMesureDataURIWebFont( isStart ){
        var embededWebFontName;
        
        if( webFontTest_embededWebFonts ){
            if( isStart ) webFontTest_resetTime();

            for( embededWebFontName in webFontTest_embededWebFonts ){
                if( webFontTest_mesureWebFont( embededWebFontName ) ){
                    Debug.log( '[webFontTest] success! ' + embededWebFontName );
                    webFontTest_elmDiv = p_DOM_insertElement(
                        p_body, 'div',
                        {
                            'aria-hidden' : 'true',
                            className     : webFontTest_testIdAndClassName,
                            id            : webFontTest_testIdAndClassName
                        }
                    );

                    if( p_CSSOM_createStyleSheet ){
                        webFontTest_styleSheetDataURIWebFont = p_CSSOM_createStyleSheet();
                        p_CSSOM_insertRuleToStyleSheet( webFontTest_styleSheetDataURIWebFont, '@import', webFontTest_embededWebFonts[ embededWebFontName ] );
                    } else {
                        webFontTest_styleSheetDataURIWebFont = p_DOM_insertElement(
                            p_head, 'link',
                            {
                                type : 'text/css',
                                rel  : 'stylesheet',
                                href : webFontTest_embededWebFonts[ embededWebFontName ]
                            }
                        );
                    };
                    p_setTimer( webFontTest_testImportedCssReady, true );
                } else if( webFontTest_checkTime( webFontTest_INTERVAL_EMBEDED_WEBFONT ) ){
                    Debug.log( '[webFontTest] timeout! ' + embededWebFontName );
                    delete webFontTest_embededWebFonts[ embededWebFontName ];
                    p_setTimer( webFontTest_repeatToMesureDataURIWebFont, true );
                } else {
                    p_setTimer( webFontTest_repeatToMesureDataURIWebFont );
                };
                return;
            };
        };
        webFontTest_testWebFontComplete( 0 );
    };

    function webFontTest_testImportedCssReady( isStart ){
        if( isStart ){
            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[webFontTest] testImportedCssReady start!' );
                if( DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE < 2 ){
                    webFontTest_targetWebFontName = webFontTest_targetWebFontName.replace( webFontTest_PREFIX, '' );
                };
                Debug.log( '[webFontTest] targetWebFontName : ' + webFontTest_targetWebFontName );
            };
            webFontTest_resetTime();
        };

        if( 1 < webFontTest_elmDiv.offsetWidth ){
            Debug.log( '[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=' + webFontTest_elmDiv.offsetWidth );
            p_DOM_remove( webFontTest_elmDiv );
            webFontTest_intervalTime = webFontTest_INTERVAL_EMBEDED_WEBFONT;
            p_setTimer( webFontTest_repeatToMesureWebFont, true );
        } else if( webFontTest_checkTime( webFontTest_intervalTime ) ){
            /**
             * offsetWidth = 9 にならない問題
             *  1. Windows Safari 3.2.3   WebKit 525.29 で必要. Windows Safari 4.0.5 WebKit 531 でこの処理は不要.
             *  2. Windows Chrome 1.0.154 WebKit 525.19 でも発生したが webFontTest_NO_SUPPORT_DATA_URI_FONT の為
             *     ここには至らない. Windows Iron 2.0.168 Webkit 530.4 でこの処理は不要.
             */
            if( p_WebKit < 528 ){
                Debug.log( '[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=' + webFontTest_elmDiv.offsetWidth );
                p_DOM_remove( webFontTest_elmDiv );
                webFontTest_intervalTime = webFontTest_INTERVAL_EMBEDED_WEBFONT;
                p_setTimer( webFontTest_repeatToMesureWebFont, true );
            } else {
                Debug.log( '[webFontTest] testImportedCssReady timeout!' );
                p_DOM_remove( webFontTest_elmDiv );
                webFontTest_testWebFontComplete( 0 );
            };
        } else {
            p_setTimer( webFontTest_testImportedCssReady );
        };
    };