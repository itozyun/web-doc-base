/**
 * 『アイコンの為に Web フォント、合字を深堀してフォールバックを検討する』に掲載のフォローチャートを参照すること
 *   https://outcloud.blogspot.com/2023/10/webfont.html
 */

/** ===========================================================================
 * export to packageGlobal
 */

/**
 * @param {!function(number):void} onCompleteHandler
 * @param {string} targetWebFontName
 * @param {!Array.<number|string>=} opt_fontTypeAndFontCSSURIPairs
 * @param {string=} opt_testIdAndClassName
 * @param {string=} opt_ligatureTestString
 * @param {string=} opt_ligatureTestChar
 * @param {number=} opt_intervalTime
 */
p_webFontTest = function( onCompleteHandler, targetWebFontName, opt_fontTypeAndFontCSSURIPairs, opt_testIdAndClassName, opt_ligatureTestString, opt_ligatureTestChar, opt_intervalTime ){
    webFontTest_onCompleteHandler  = onCompleteHandler;
    webFontTest_targetWebFontName  = targetWebFontName;
    webFontTest_fontTypeAndFontCSSURIPairs = opt_fontTypeAndFontCSSURIPairs;
    webFontTest_testIdAndClassName = opt_testIdAndClassName;
    webFontTest_ligatureTestString = opt_ligatureTestString;
    webFontTest_ligatureTestChar   = opt_ligatureTestChar;
    webFontTest_intervalTime       = opt_intervalTime || webFontTest_INTERVAL_LOADING_WEBFONT;

    if( DEFINE_WEB_DOC_BASE__DEBUG && 1 <= DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE ){
        webFontTest_targetWebFontName = webFontTest_PREFIX + webFontTest_targetWebFontName;
        Debug.log( '[webFontTest] WEBFONT_DEBUG_MODE : ' + DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE );
    };
    Debug.log( '[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : ' + !!p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST );
    if( p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_OperaMini ) ){
        p_setTimer( /** @type {function(*=)} */ (webFontTest_testWebFontComplete), webFontTest_RESULT_AVAILABLE );
    } else if( p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST ){
        p_setTimer( /** @type {function(*=)} */ (webFontTest_testWebFontComplete), webFontTest_RESULT_NONE );
    } else {
        /**
         * @see https://github.com/bramstein/fontfaceobserver/blob/39f19c41830eac7726e08b09f60d2aa2b74dc38b/src/observer.js#L122
         *   Observer.hasSafari10Bug
         */
        if( document.fonts && !( p_WebKit < 603 || p_SafariMobile < 11 ) ){
            Debug.log( '[webFontTest] Use Native font loader.' );
            webFontTest_testByNativeFontLoaderAPI( /** @type {string} */ (webFontTest_targetWebFontName) );
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
var webFontTest_NO_SUPPORT_DATA_URI_FONT = p_Trident < 9;
// SVG の Data URI 化に制限あり。src:url() に #id が必要の為
var webFontTest_SVG_FONT_HAS_LIMITATION  = p_Chromium < 6     ||
                                           p_Presto           ||
                                           p_WebKit < 530     || // Safari ~3
                                           p_SafariMobile < 5 || // iOS Safari 3~4?
                                           p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_PS3 ); // PS3 4.10~, WebKit 531
var webFontTest_PREFIX                   = DEFINE_WEB_DOC_BASE__DEBUG && ( 'bad_' + p_getTimestamp() + '_' );
var webFontTest_INTERVAL_LOADING_WEBFONT = 5000;
var webFontTest_INTERVAL_EMBEDED_WEBFONT = 500;
var webFontTest_TEST_STRING              = 'mmmmmmmmmmlliiiiiiiii';
/**
 * https://github.com/bramstein/fontfaceobserver/blob/39f19c41830eac7726e08b09f60d2aa2b74dc38b/src/observer.js#L93
 *   Observer.hasWebKitFallbackBug
 */
var webFontTest_HAS_WEBKIT_FALLBACK_BUG  = ( 9 <= p_Chromium && p_Chromium < 18 ) || // Chrome 9~17
                                           p_AOSP < 3 ||
                                           p_SafariMobile < 7 ||
                                           p_WebKit && ua.conpare( p_engineVersion, '536.11' ) <= 0; // Safari <7
var webFontTest_BASE_FONT_LIST           = [ 'monospace', 'sans-serif', 'serif' ];

if( !p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST ){
    webFontTest_HAS_WEBKIT_FALLBACK_BUG && p_Chromium     && Debug.log( '[webFontTest] hasWebKitFallbackBug : p_Chromium='     + p_Chromium );
    webFontTest_HAS_WEBKIT_FALLBACK_BUG && p_SafariMobile && Debug.log( '[webFontTest] hasWebKitFallbackBug : p_SafariMobile=' + p_SafariMobile );
    webFontTest_HAS_WEBKIT_FALLBACK_BUG && p_WebKit       && Debug.log( '[webFontTest] hasWebKitFallbackBug : p_WebKit='       + p_WebKit );
    webFontTest_HAS_WEBKIT_FALLBACK_BUG && p_AOSP         && Debug.log( '[webFontTest] hasWebKitFallbackBug : p_AOSP='         + p_AOSP );
};

var webFontTest_CANUSE_WOFF2             = 14  <= p_EdgeHTML || 36 <= p_Chromium || 39 <= p_Gecko ||
                                           602 <= p_WebKit && p_MacOS && 0 <= ua.conpare( '10.12', p_MacOS ) || // Safari 10+ & Mac OS Sierra(10.12)+
                                           10  <= p_SafariMobile;
var webFontTest_CANUSE_WOFF              = 6 <= p_Chromium ||
                                           p_Gecko && 0 <= ua.conpare( p_engineVersion, '1.9.2' ) || // Gecko 1.9.2+
                                           533  <= p_WebKit || // Safari 5.0+
                                           5    <= p_SafariMobile ||
                                           4.4  <= p_AOSP ||
                                           11.5 <= p_Presto ||
                                           p_EdgeHTML ||
                                           9  <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident ) ||
                                           10 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile );
                                           // TODO Blackberry Browser 7+
var webFontTest_CANUSE_TTF               = 2 <= p_Chromium ||
                                           p_FirefoxGte35 ||
                                           525  <= p_WebKit || // Safari 3.1+
                                           4    <= p_SafariMobile ||
                                           2.2  <= p_AOSP ||
                                           10.1 <= p_Presto ||
                                           p_EdgeHTML ||
                                           9  <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident ) ||
                                           10 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile );
                                           // TODO Blackberry Browser 7+
var webFontTest_CANUSE_OTF               = webFontTest_CANUSE_TTF;
var webFontTest_CANUSE_SVG               = 5.1 <= p_Windows && p_Windows <= 5.2 && p_Chromium < 40 || // XP   : Chrome ~39, https://caniuse.com/?search=SVG%20font
                                           6   <= p_Windows && p_Windows <  6.1 && p_Chromium < 51 || // Vista: Chrome ~50    Chrome 38 and newer support SVG fonts
                                           p_Chromium < 37 ||                                         // Other: Chrome ~36    only on Windows Vista and XP.
                                           525  <= p_WebKit || // Safari 3.1+
                                           3.1  <= p_SafariMobile ||
                                           3    <= p_AOSP ||
                                           11.5 <= p_Presto;
                                           // TODO Blackberry Browser 7+
var webFontTest_CANUSE_EOT               = 4  <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident ) ||
                                           10 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile );

var webFontTest_QUEUE                    = !p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST && [];

var webFontTest_onCompleteHandler,
    webFontTest_targetWebFontName,
    webFontTest_fontTypeAndFontCSSURIPairs,
    webFontTest_testIdAndClassName,
    webFontTest_ligatureTestString,
    webFontTest_ligatureTestChar,
    webFontTest_intervalTime,
    webFontTest_startTime,
    webFontTest_isMeasuringCSSFonts,
    webFontTest_elmSpan,
    webFontTest_elmLink,
    webFontTest_defaultWidthList;

    /**
     * ブラウザが font type をサポートするか?
     * 関数は Font CSS 専用で Raw Font より制限が多い! 
     * @param {number} fontType 
     * @return {boolean} 
     */
    function webFontTest_isSupportedFontTypeAtFontCSS( fontType ){
        switch( fontType ){
            case webFontTest_IS_WOFF2 :
                return webFontTest_CANUSE_WOFF2;
            case webFontTest_IS_WOFF :
                return !!webFontTest_CANUSE_WOFF;
            case webFontTest_IS_TTF :
                return !!webFontTest_CANUSE_TTF;
            case webFontTest_IS_OTF :
                return !!webFontTest_CANUSE_OTF;
            case webFontTest_IS_EOT :
                return webFontTest_CANUSE_EOT;
            case webFontTest_IS_SVG :
                return webFontTest_CANUSE_SVG && !webFontTest_SVG_FONT_HAS_LIMITATION;
            case webFontTest_IS_SVGZ :                      
        };
        return false;
    };

    /**
     * @param {number} result 
     */
    function webFontTest_testWebFontComplete( result ){
        webFontTest_onCompleteHandler( result );
        if( webFontTest_elmLink && !result ){
            p_DOM_remove( webFontTest_elmLink );
        };
        webFontTest_onCompleteHandler = webFontTest_targetWebFontName =
        webFontTest_fontTypeAndFontCSSURIPairs = webFontTest_testIdAndClassName =
        webFontTest_ligatureTestString = webFontTest_ligatureTestChar =
        webFontTest_isMeasuringCSSFonts =
        webFontTest_elmSpan = webFontTest_elmLink =
        webFontTest_defaultWidthList = undefined;
        // TODO webFontTest_QUEUE
    };

/**
 * 参考
 *   https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 * 
 * document.fonts を使った Web font の適用の確認
 * 
 * @param {string} targetWebFontName 
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
                if( result = webFontTest_mesureWebFont( /** @type {string} */ (webFontTest_targetWebFontName) ) ){
                    p_setTimer( /** @type {function(*=)} */ (webFontTest_testWebFontComplete), result );
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

    /**
     * 
     * @param {number} ms 
     * @return {boolean}
     */
    function webFontTest_checkTime( ms ){
        // https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
        // hidden の場合は時間切れをスキップする。未検証…
        if( document.hidden || document[ 'msHidden' ] || document[ 'mozHidden' ] || document[ 'webkitHidden' ] ){
            webFontTest_resetTime();
            return false;
        };
        return ms < p_getTimestamp() - webFontTest_startTime;
    };

    /**
     * 
     * @param {boolean=} isStart 
     */
    function webFontTest_repeatToMesureWebFont( isStart ){
        var result;

        if( isStart ){
            Debug.log( '[webFontTest] testWebFont start.' );
            webFontTest_resetTime();
        };

        if( result = webFontTest_mesureWebFont( /** @type {string} */ (webFontTest_targetWebFontName), webFontTest_intervalTime ) ){
            Debug.log( '[webFontTest] testWebFont mesurement success : ' + result );
            webFontTest_testWebFontComplete( result );
        } else if( webFontTest_checkTime( webFontTest_intervalTime ) ){
            Debug.log( '[webFontTest] testWebFont timeout!' );
            if( webFontTest_isMeasuringCSSFonts ){
                webFontTest_repeatToTestDataURIedCSSWebFont();
            } else if( webFontTest_NO_SUPPORT_DATA_URI_FONT ){
                webFontTest_testWebFontComplete( webFontTest_RESULT_NONE );
            } else {
                webFontTest_testDataURIOrSkipTest();
            };
        } else {
            p_setTimer( /** @type {function(*=)} */ (webFontTest_repeatToMesureWebFont) );
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
            webFontTest_TEST_STRING
        );
        webFontTest_defaultWidthList = [];
    
        while( font = webFontTest_BASE_FONT_LIST[ ++i ] ) {
            //get the default width for the three base fonts
            p_DOM_setStyle( webFontTest_elmSpan, 'fontFamily', font );
            webFontTest_defaultWidthList[ i ] = webFontTest_elmSpan.offsetWidth; //width for the default font
            // Debug.log( '[webFontTest] ' + font + '=' + webFontTest_defaultWidthList[ i ] );
            //defaultHeight[ font ] = webFontTest_elmSpan.offsetHeight; //height for the defualt font
        };

        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            Debug.log( '[webFontTest] default width ' + webFontTest_defaultWidthList.join( ', ' ) );
        };
    };

    /**
     * 
     * @param {string} testFontName 
     * @param {number=} opt_intervalTime 
     * @return {number}
     */
    function webFontTest_mesureWebFont( testFontName, opt_intervalTime ){
        var result = webFontTest_RESULT_NONE,
            i = -1, font, width,
            widthList = ( webFontTest_HAS_WEBKIT_FALLBACK_BUG || DEFINE_WEB_DOC_BASE__DEBUG ) && [];

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
                    webFontTest_TEST_STRING
                );
            };
        } else {
            p_body.appendChild( webFontTest_elmSpan );
        };

        while( font = webFontTest_BASE_FONT_LIST[ ++i ] ){
            // name of the font along with the base font for fallback.
            p_DOM_setStyle( webFontTest_elmSpan, 'fontFamily', '"' + testFontName + '",' + font );
            width = webFontTest_elmSpan.offsetWidth;
            if( webFontTest_HAS_WEBKIT_FALLBACK_BUG ){
                widthList[ i ] = width;
            } else {
                // Debug.log( '[webFontTest] ' + testFontName + ',' + font + '=' + width );
                if( DEFINE_WEB_DOC_BASE__DEBUG ){
                    widthList[ i ] = width;
                };
                if( width !== webFontTest_defaultWidthList[ i ] ){
                    result = webFontTest_RESULT_AVAILABLE;
                    if( !DEFINE_WEB_DOC_BASE__DEBUG ){
                        break;
                    };
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
         * 3) WebKit のバグ：a、b、c の両方が呼び出され、同じ値を持ちますが、その値はラストリゾートフォントの1つと等しいので、
         *    これを無視して、新しい値が得られるまで待ち続けます。新しい値（またはタイムアウト）を取得するまで待ち続ける。
         */
        if( webFontTest_HAS_WEBKIT_FALLBACK_BUG ){
            if( width /** widthList[2] */ === widthList[ 0 ] && width === widthList[ 1 ] ){
                Debug.log( '[webFontTest] Hit... : width=' + width );

                // すべての値が同じなので、ブラウザはウェブフォントを読み込んでいる可能性が高いです。
                // ただし、ブラウザに WebKit フォールバックバグがある場合は、すべての値が last resort fonts のいずれかに設定されているかどうかを確認する必要があります。
                result = webFontTest_RESULT_AVAILABLE;
                i = -1;
                while( 0 <= ( width = webFontTest_defaultWidthList[ ++i ] ) ){
                    if( width === widthList[ 0 ] && width === widthList[ 1 ] && width === widthList[ 2 ] ){
                        // 取得した幅は last resort fonts のひとつと一致しているので、last resort fonts を扱っていると仮定しましょう。
                        Debug.log( '[webFontTest] Failed! : font[' + i + ']=' + webFontTest_BASE_FONT_LIST[ i ] );
                        result = webFontTest_RESULT_NONE;
                        break;
                    };
                };
            };
        };

        if( !p_Trident && result && webFontTest_ligatureTestString ){ // IE5 でエラーが発生 TODO カタログで枝掃いをする
            webFontTest_elmSpan.textContent = webFontTest_ligatureTestString;
            width = webFontTest_elmSpan.offsetWidth;
            webFontTest_elmSpan.textContent = webFontTest_ligatureTestChar;
            result = width === webFontTest_elmSpan.offsetWidth ? webFontTest_RESULT_LIGATURE : webFontTest_RESULT_AVAILABLE;
            webFontTest_elmSpan.textContent = webFontTest_TEST_STRING;
        };
        p_DOM_remove( webFontTest_elmSpan );
        if( p_Trident < 5 ){
            webFontTest_elmSpan = undefined;
        };
        if( opt_intervalTime && DEFINE_WEB_DOC_BASE__DEBUG ){
            if( result || webFontTest_checkTime( opt_intervalTime ) ){
                Debug.log( '[webFontTest] ' + testFontName + ' ' + widthList.join( ', ' ) );
            };
        };
        return result;
    };

    /**
     * @param {boolean} result 
     */
    function webFontTest_onTestDataURIComplete( result ){
        Debug.log( '[webFontTest] onTestDataURIComplete : ' + result );
        if( result ){
            webFontTest_isMeasuringCSSFonts = true;
            webFontTest_intervalTime = webFontTest_INTERVAL_EMBEDED_WEBFONT;
            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!' );
                if( DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE < 2 ){
                    webFontTest_targetWebFontName = webFontTest_targetWebFontName.replace( webFontTest_PREFIX, '' );
                };
            };
            webFontTest_repeatToTestDataURIedCSSWebFont();
        } else {
            webFontTest_testWebFontComplete( webFontTest_RESULT_NONE );
        };
    };

    function webFontTest_repeatToTestDataURIedCSSWebFont(){
        if( webFontTest_fontTypeAndFontCSSURIPairs ){
            while( webFontTest_fontTypeAndFontCSSURIPairs.length ){
                var fontType   = /** @type {number} */ (webFontTest_fontTypeAndFontCSSURIPairs.shift());
                var fontCSSURL = /** @type {string} */ (webFontTest_fontTypeAndFontCSSURIPairs.shift());

                if( webFontTest_isSupportedFontTypeAtFontCSS( fontType ) ){
                    Debug.log( '[webFontTest] maybe can use! ' + fontCSSURL );
                    webFontTest_elmLink = p_loadExternalCSS( fontCSSURL, webFontTest_onLoadFontCSSComplete, /** @type {string} */ (webFontTest_testIdAndClassName), webFontTest_elmLink );
                    return;
                };
            };
        };
        webFontTest_testWebFontComplete( webFontTest_RESULT_NONE );
    };

    /**
     * @param {boolean} result 
     */
    function webFontTest_onLoadFontCSSComplete( result ){
        if( result ){
            webFontTest_repeatToMesureWebFont( true );
        } else {
            webFontTest_repeatToTestDataURIedCSSWebFont();
        };
    };