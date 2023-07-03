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
 * @param {string=} opt_testString
 */
p_webFontTest = function( onCompleteHandler, targetWebFontName, opt_embededWebFonts, opt_testIdAndClassName, opt_ligatureTestString, opt_ligatureTestChar, opt_intervalTime, opt_testString ){
    webFontTest_onCompleteHandler  = onCompleteHandler;
    webFontTest_targetWebFontName  = targetWebFontName;
    webFontTest_embededWebFonts    = opt_embededWebFonts;
    webFontTest_testIdAndClassName = opt_testIdAndClassName;
    webFontTest_ligatureTestString = opt_ligatureTestString;
    webFontTest_ligatureTestChar   = opt_ligatureTestChar;
    webFontTest_intervalTime       = opt_intervalTime || webFontTest_INTERVAL_LOADING_WEBFONT;
    webFontTest_testString         = opt_testString || webFontTest_TEST_STRING;

    if( DEFINE_WEB_DOC_BASE__DEBUG && 1 <= DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE ){
        webFontTest_targetWebFontName = webFontTest_PREFIX + webFontTest_targetWebFontName;
        Debug.log( '[webFontTest] WEBFONT_DEBUG_MODE : ' + DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE );
    };
    Debug.log( '[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : ' + !!p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST );
    if( p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST ){
        p_setTimer( webFontTest_testWebFontComplete, 0 );
    } else {
        /**
         * @see https://github.com/bramstein/fontfaceobserver/blob/39f19c41830eac7726e08b09f60d2aa2b74dc38b/src/observer.js#L122
         *   Observer.hasSafari10Bug
         */
        if( document.fonts && !( p_WebKit < 603 || p_SafariMobile < 11 ) ){
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

// Data URI スキームをサポートするが Web フォントには使えない環境
var webFontTest_NO_SUPPORT_DATA_URI_FONT = p_Trident < 9 || p_Chromium < 2 ||
                                           p_Presto  < 12; // Windows Opera 12.18 で確認
var webFontTest_PREFIX                   = DEFINE_WEB_DOC_BASE__DEBUG && ( 'bad_' + p_getTimestamp() + '_' );
var webFontTest_INTERVAL_LOADING_WEBFONT = 5000;
var webFontTest_INTERVAL_EMBEDED_WEBFONT = 500;
var webFontTest_TEST_STRING              = 'mmmmmmmmmmlliiiiiiiii';
/**
 * https://github.com/bramstein/fontfaceobserver/blob/39f19c41830eac7726e08b09f60d2aa2b74dc38b/src/observer.js#L93
 *   Observer.hasWebKitFallbackBug
 */
var webFontTest_HAS_WEBKIT_FALLBACK_BUG  = /* p_Chromium < 21 || */
                                           p_SafariMobile < 7 ||
                                           p_WebKit && ua.conpare( p_engineVersion, '536.11' ) <= 0;

if( !p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST ){
    webFontTest_HAS_WEBKIT_FALLBACK_BUG && p_Chromium     && Debug.log( '[webFontTest] hasWebKitFallbackBug : p_Chromium='     + p_Chromium );
    webFontTest_HAS_WEBKIT_FALLBACK_BUG && p_SafariMobile && Debug.log( '[webFontTest] hasWebKitFallbackBug : p_SafariMobile=' + p_SafariMobile );
    webFontTest_HAS_WEBKIT_FALLBACK_BUG && p_WebKit       && Debug.log( '[webFontTest] hasWebKitFallbackBug : p_WebKit='       + p_WebKit );
};

var webFontTest_BASE_FONT_LIST           = p_Chromium ? [ 'sans-serif', 'serif' ] : [ 'monospace', 'sans-serif', 'serif' ];
var webFontTest_QUEUE                    = !p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST && [];

var webFontTest_onCompleteHandler,
    webFontTest_targetWebFontName,
    webFontTest_embededWebFonts,
    webFontTest_testIdAndClassName,
    webFontTest_ligatureTestString,
    webFontTest_ligatureTestChar,
    webFontTest_intervalTime,
    webFontTest_testString,
    webFontTest_startTime,
    webFontTest_isTestDataURIWebFontPhase,
    webFontTest_elmSpan, webFontTest_elmDiv,
    webFontTest_styleSheetDataURIWebFont,
    webFontTest_defaultWidthList;

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
        webFontTest_defaultWidthList = webFontTest_styleSheetDataURIWebFont = undefined;
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
        return webFontTest_startTime = p_getTimestamp();
    };
    
    function webFontTest_checkTime( ms ){
        // https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
        // hidden の場合は時間切れをスキップする。未検証…
        if( document.hidden || document[ 'msHidden' ] || document[ 'mozHidden' ] || document[ 'webkitHidden' ] ){
            webFontTest_resetTime();
            return false;
        };
        return ms < p_getTimestamp() - webFontTest_startTime;
    };
    
    function webFontTest_repeatToMesureWebFont( isStart ){
        var result;

        if( isStart ){
            Debug.log( '[webFontTest] testWebFont start.' );
            webFontTest_resetTime();
        };

        if( result = webFontTest_mesureWebFont( webFontTest_targetWebFontName, webFontTest_intervalTime ) ){
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
            p_body,
            'span',
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
            webFontTest_testString
        );
        webFontTest_defaultWidthList = [];
    
        while( font = webFontTest_BASE_FONT_LIST[ ++i ] ) {
            //get the default width for the three base fonts
            p_DOM_setStyle( webFontTest_elmSpan, 'fontFamily', font );
            webFontTest_defaultWidthList[ i ] = webFontTest_elmSpan.offsetWidth; //width for the default font
            Debug.log( '[webFontTest] ' + font + '=' + webFontTest_defaultWidthList[ i ] );
            //defaultHeight[ font ] = webFontTest_elmSpan.offsetHeight; //height for the defualt font
        };
    };

    function webFontTest_mesureWebFont( testFontName, opt_intervalTime ){
        var available = 0, i = -1, font, width, canLigature = 0,
            widthListForWebKitFallbackBug = webFontTest_HAS_WEBKIT_FALLBACK_BUG && [];

        !webFontTest_defaultWidthList && webFontTest_preMesure();

        if( p_Trident < 5 ){
            if( !webFontTest_elmSpan ){
                webFontTest_elmSpan = p_DOM_insertElement(
                    p_body,
                    'div',
                    {
                        // 'aria-hidden' : 'true', ie4 用なので不要
                        style         : {
                            position   : 'absolute',
                            top        : 0,
                            left       : 0,
                            visibility : 'hidden',
                            fontSize   : '72px'
                        }
                    },
                    webFontTest_testString
                );
            };
        } else {
            p_body.appendChild( webFontTest_elmSpan );
        };

        while( font = webFontTest_BASE_FONT_LIST[ ++i ] ){
            // name of the font along with the base font for fallback.
            p_DOM_setStyle( webFontTest_elmSpan, 'fontFamily', '"' + testFontName + '",' + font );
            width = webFontTest_elmSpan.offsetWidth;
            if( widthListForWebKitFallbackBug ){
                widthListForWebKitFallbackBug[ i ] = width;
            } else {
                // Debug.log( '[webFontTest] ' + testFontName + ',' + font + '=' + width );
                if( width !== webFontTest_defaultWidthList[ i ] ){
                    available = 1;
                    break;
                };
            };
        };

        /**
         * https://github.com/bramstein/fontfaceobserver/blob/39f19c41830eac7726e08b09f60d2aa2b74dc38b/src/observer.js#L275
         * 
         * メトリック互換フォントが検出された場合、幅のいずれかは-1です。 
         * これは、メトリック互換フォントではスクロールイベントが発生しないためです。
         * この問題を回避するために、少なくとも2つの幅が同じであれば、
         * フォントが読み込まれたと見なすことにします。幅が3つあるため、これでも誤検出を防ぐことができます。
         * 
         * ケース
         * 1) フォントのロード：a、b、c の両方が呼び出され、同じ値を持っている。
         * 2) フォントの読み込みに失敗した場合：リサイズコールバックが呼ばれず、タイムアウトが発生する。
         * 3) WebKit のバグ：a、b、c の両方が呼び出され、同じ値を持ちますが、その値は最後の手段のフォントの1つと等しいので、
         *    これを無視して、新しい値が得られるまで待ち続けます。新しい値（またはタイムアウト）を取得するまで待ち続ける。
         */
        if( widthListForWebKitFallbackBug ){
            if( width === widthListForWebKitFallbackBug[ 0 ] && width === widthListForWebKitFallbackBug[ 1 ] ){
                Debug.log( '[webFontTest] Hit... : width=' + width );

                // すべての値が同じなので、ブラウザはウェブフォントを読み込んでいる可能性が高いです。
                // ただし、ブラウザに WebKit フォールバックバグがある場合は、すべての値が last resort fonts のいずれかに設定されているかどうかを確認する必要があります。
                available = 1;
                i = -1;
                while( width = webFontTest_defaultWidthList[ ++i ] ){
                    if( width === widthListForWebKitFallbackBug[ 0 ] && width === widthListForWebKitFallbackBug[ 1 ] && width === widthListForWebKitFallbackBug[ 2 ] ){
                        // 取得した幅は last resort fonts のひとつと一致しているので、last resort fonts を扱っていると仮定しましょう。
                        Debug.log( '[webFontTest] Failed! : font[' + i + ']=' + webFontTest_BASE_FONT_LIST[ i ] );
                        available = 0;
                        break;
                    };
                };
            };
        };

        if( !p_Trident && available && webFontTest_ligatureTestString ){ // IE5 でエラーが発生 TODO カタログで枝掃いをする
            webFontTest_elmSpan.textContent = webFontTest_ligatureTestString;
            width = webFontTest_elmSpan.offsetWidth;
            webFontTest_elmSpan.textContent = webFontTest_ligatureTestChar;
            canLigature = width === webFontTest_elmSpan.offsetWidth ? 1 : 0;
            webFontTest_elmSpan.textContent = webFontTest_testString;
        };
        p_DOM_remove( webFontTest_elmSpan );
        if( p_Trident < 5 ){
            webFontTest_elmSpan = undefined;
        };
        if( opt_intervalTime && DEFINE_WEB_DOC_BASE__DEBUG ){
            if( available || webFontTest_checkTime( opt_intervalTime ) ){
                if( !widthListForWebKitFallbackBug ){
                    Debug.log( '[webFontTest] ' + testFontName + ', ' + font + '=' + width );
                };
            };
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
                if( webFontTest_mesureWebFont( embededWebFontName, webFontTest_INTERVAL_EMBEDED_WEBFONT ) ){
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
            if( p_WebKit < 528 || p_SafariMobile < 4 ){
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