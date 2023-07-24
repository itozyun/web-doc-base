/**
 *  1. WebFont
 *     1. 合字
 *  2. SVG でフォールバック?
 */
p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( !cssAvailability ) return;

        p_webFontTest(
            /** @type {!function(number):void} */ (VectorIcon_onTestComplete), // 1.
            COMMON_WEBFONT__FONT_NAME, // 2.
            [
                webFontTest_IS_WOFF2, p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/woff2.css',
                webFontTest_IS_WOFF , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/woff.css',
                webFontTest_IS_OTF  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/otf.css',
                webFontTest_IS_TTF  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/ttf.css',
            // webFontTest_IS_EOT  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/eot.css',
                webFontTest_IS_SVG  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/svg.css'
            ],
            COMMON_WEBFONT__TEST_ID_AND_CLASSNAME, // 4.
            m_LIGATURE_FOR_TEST, m_TO_CHAR_FOR_TEST//, 5. 6.
            // 5000 7. test interval ms
        );

        VectorIcon_onTestComplete = undefined;

        return true;
    }
);

var VectorIcon_CANUSE_SVGTINY = 8 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Presto ) && p_Presto < 9;

var VectorIcon_CANUSE_SVG =
    9 <= p_Trident   ||
    p_EdgeHTML       ||
    1.8 <= p_Gecko   || // Gecko 1.8+
    8 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Presto       ) ||
    9 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_PrestoMobile ) || // Opera 8+, Mobile Opera 9+
    3 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP         ) || // AOSP 3+
    p_Goanna         ||
    p_isChromiumBase ||
    // https://en.wikipedia.org/wiki/Scalable_Vector_Graphics
    // > Native browser support
    // > Browsers based on WebKit (such as Apple's Safari, Google Chrome, and The Omni Group's OmniWeb) have had incomplete support for the SVG 1.1 Full specification since 2006.
    // https://en.wikipedia.org/wiki/Safari_version_history#Safari_1
    ( 312.6 <= p_WebKit && p_WebKit <= 312.7 ) || // Safari 1.3.2(January 11, 2006)~1.3.3
    419.3 <= p_WebKit ||                          // Safari 2.0.4(January 10, 2006)
    p_SafariMobile;

/** @type {!function(number):void|undefined} */
var VectorIcon_onTestComplete = function( webFontTestResult ){
    // webFontTestResult === 0 : no webfont
    // webFontTestResult === 1 : webfont ready
    // webFontTestResult === 2 : webfont ready + ligature support
    if( webFontTestResult !== webFontTest_RESULT_LIGATURE ){
        Debug.log( '[VectorIcon] ' + webFontTestResult );
        var elmIcons = p_DOM_getElementsByClassNameFromDocument( COMMON_VECTOR_ICON__CLASSNAME ),
            i = 0, l = elmIcons.length, elmIcon, content, chr; 

        if( l ){
            if( webFontTestResult === webFontTest_RESULT_AVAILABLE ){
                for( ; i < l; ++i ){
                    elmIcon = elmIcons[ i ];
                    content = p_DOM_getInnerHTML( elmIcon );
                    if( chr = m_LIGATURE_TO_CHAR[ content ] ){
                        elmIcon.innerHTML = chr;
                    };
                };
            } else { // webFontTest_RESULT_NONE
                if( VectorIcon_CANUSE_SVG && !VectorIcon_CANUSE_SVGTINY ){
                    window[ COMMON_VECTOR_ICON__SVG_FALLBACK_CALLBACK_NAME ] = function(){
                        p_setExternalScriptIsLoaded( p_assetUrl + COMMON_ASSET_DIR_TO_JS_DIR + '/' + COMMON_VECTOR_ICON__SVG_FALLBACK_FILE_STEM + '.js' );

                        return [ m_LIGATURE_TO_CHAR, elmIcons, p_DOM_insertElement, VectorIcon_CANUSE_SVGTINY ];
                    };
                    p_loadExternalScript( p_assetUrl + COMMON_ASSET_DIR_TO_JS_DIR + '/' + COMMON_VECTOR_ICON__SVG_FALLBACK_FILE_STEM + '.js' );
                };
            };
        };
    };
};
