/**
 * @param {number|string} targetEngine 
 * @returns {number|boolean|undefined}
 */
function p_getEngineVersionOf( targetEngine ){
    var engine = ua[ WHAT_BROWSER_AM_I__INDEX_ENGINE ];

    if( engine === targetEngine ){
        if( p_engineVersion === p_engineVersion + '' ){
            return parseFloat( p_engineVersion );
        } else {
            return p_engineVersion;
        };
    };
};

/**
 * @param {number|string} targetPlatform 
 * @returns {number|boolean|undefined}
 */
function p_getPlatformVersionOf( targetPlatform ){
    var platform = ua[ WHAT_BROWSER_AM_I__INDEX_PLATFORM ],
        version  = ua[ WHAT_BROWSER_AM_I__INDEX_PLATFORM_VERSION ];

    if( platform === targetPlatform ){
        if( version === version + '' ){
            return parseFloat( version );
        } else {
            return version;
        };
    };
};

var p_emptyFunction  = emptyFunction, // || new Function(),
    p_body           = document.body,
    p_style          = p_body.style,

    p_html, p_head, p_elmMain,

    p_engineVersion  = ua[ WHAT_BROWSER_AM_I__INDEX_ENGINE_VERSION ],

    p_Trident        = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident  ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ),
    p_Tasman         = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Tasman   ),
    p_EdgeHTML       = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_EdgeHTML ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_EdgeMobile ),
    p_Presto         = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Presto   ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_PrestoMobile ),
    p_Gecko          = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Gecko    ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Fennec ),
    p_FirefoxGte35   = p_Gecko && 0 <= ua.conpare( p_engineVersion, '1.9.1' ),
    p_Goanna         = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Goanna ),
    p_WebKit         = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_WebKit ),
    p_SafariMobile   = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_SafariMobile  ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_iOSWebView ),
    p_cloudRendering = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_OperaMini     ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_UCWEB ),
    p_Chromium       = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Chromium      ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_ChromiumMobile ),
    p_isChromiumBase = p_Chromium                                                      ||
                       p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_ChromeWebView ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP ) ||
                       p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Samsung       ), // KaiOS, Silk ?
    p_ChromiumEdge   = p_Chromium && parseFloat( navigator.userAgent.split( 'Edg/' )[ 1 ] ), // brand が無いので
    p_IEVersion      = parseFloat( navigator.appVersion.split( 'Trident/' )[ 1 ] ) + 4, // brand が無いので
    p_Windows        = p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_Win16 ) || p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_Win32 ) ||
                       p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_Win64 ),

// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
    p_passiveSupported = !p_Trident && !p_Tasman && (new Function(
        'try{' +
            'var r,o=Object.defineProperty({},"passive",{' +
                'get:function(){r=!0}' +
            '});' +
            'addEventListener("t",o,o);' +
            'removeEventListener("t",o,o);' +
            'return r' +
        '}catch(e){}'
    ))(),

    p_jsGte15 = p_Trident < 5.5,

    p_cssName = ( p_Tasman        ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_MACIE5 :
                  p_Trident < 5.5 ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE5 :
                  p_Trident < 6   ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_IE55 :
                  p_Trident < 10  ? 'ie'  + ( p_Trident | 0 ) :
                  p_Presto  < 7.2 ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_OPERA70 :
                  p_Presto  < 8   ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_OPERA72 :
                  p_Presto  < 9.5 ? 'opr' + ( p_Presto  | 0 ) :
                    ( p_Gecko && !p_FirefoxGte35 ) ?
                      ( 1.4 <= p_Gecko ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO19 :
                        1.3 <= p_Gecko ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO13 :
                        1   <= p_Gecko ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO12 :
                        0.9 <= p_Gecko ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO09 :
                        0.8 <= p_Gecko ? DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO08 :
                                         DEFINE_WEB_DOC_BASE__CSS_FILENAME_GECKO07
                    ) :
                                         DEFINE_WEB_DOC_BASE__CSS_FILENAME_MODERN
                ) + '.css',
    p_isSecure = location.href.indexOf( 'https' ) === 0,

    p_scripts, p_assetUrl,
    p_cssDir = DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_CSS_DIR ?  DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_CSS_DIR + '/': '',
    p_isMobile, p_screenModeDir = '',
    p_useMobile = // p_Gecko < 0.9 ||
                  p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_NDS    ) || p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_NDSi   ) ||
                  p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_N3DS   ) || p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_New3DS ) ||
                  p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_PSP    ) || p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_PSPGo  ) ||
                  p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_PSVita ),
    
    p_iefilterEnabled,
    p_imageEnabled,
    p_cssGeneratedContentGrade,
    p_dataURITestResult = ( p_Trident < 8 || p_Presto < 7.2 ) ? false : undefined,

    p_cssTransformName =
        p_notUndefined( p_style[ 'transform'         ] ) ? 'transform' : 
        p_notUndefined( p_style[ '-o-transform'      ] ) ? '-o-transform' : 
        p_notUndefined( p_style[ '-ms-transform'     ] ) ? '-ms-transform' : 
        p_notUndefined( p_style[ 'MozTransform'      ] ) ? '-moz-transform' : 
        p_notUndefined( p_style[ '-webkit-transform' ] ) ? '-webkit-transform' : '';

/** @typedef {!function(*=):(boolean|undefined)} */
var TypedefCallback;

/** @typedef {!Array.<!TypedefCallback>} */
var TypedefCallbackList;

/** @type {TypedefCallbackList|undefined}  */
var p_loadEventCallbacks = []; // nodeCleaner もアクセスするので packageGlobal に公開する

/** @const {TypedefCallbackList}  */
var p_cssAvailabilityCallbacks = [];

/** @type {TypedefCallbackList|undefined}  */
var p_forcedColorsChangeCallbacks = [];

var p_dataURITest,
    p_imageTest,
    p_webFontTest;

var p_CSSOM_getStyleSheetElementList,
    p_CSSOM_createStyleSheet,
    p_CSSOM_deleteStyleSheet,
    p_CSSOM_insertRuleToStyleSheet,
    p_CSSOM_deleteRuleFromStyleSheet,
    p_CSSOM_setStyleOfRule,
    p_CSSOM_getRawValueOfRule,
    p_CSSOM_getIndexOfRule,
    p_CSSOM_getLastIndexOfRule;

var p_noRemoveScriptTag,
    p_canUseDynamicExternalScript,
    p_canUseJSONPOnlyInIframe,
    p_loadExternalScript,
    p_setExternalScriptIsLoaded;

function p_notUndefined( val ){
    return val !== undefined;
};