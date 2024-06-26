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
    p_ChromeWebView  = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_ChromeWebView ),
    p_AOSP           = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP          ),
    p_Samsung        = p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Samsung       ),
    p_isChromiumBase = p_Chromium || p_ChromeWebView || p_AOSP || p_Samsung, // KaiOS, Silk ?
    p_ChromiumEdge   = p_Chromium && parseFloat( navigator.userAgent.split( 'Edg/' )[ 1 ] ), // brand が無いので
    p_IEVersion      = parseFloat( navigator.appVersion.split( 'Trident/' )[ 1 ] ) + 4, // brand が無いので
    p_Windows        = p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_Win16 ) ||
                       p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_Win32 ) ||
                       p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_Win64 ),
    p_MacOS          = p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_MacPPC   ) ||
                       p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_Mac68K   ) ||
                       p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_MacIntel ) ||
                       p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_MacM1    ),
    p_GoogleBot      = 0 <= navigator.userAgent.indexOf( 'Googlebot/' ),

    p_GeckoLt09 = p_Gecko < 0.9,
    p_jsGte15   = p_Trident < 5.5,

    p_cssName = ( p_Tasman        ? COMMON_CSS_FILE_STEM__MACIE5 :
                  p_Trident < 5.5 ? COMMON_CSS_FILE_STEM__IE5 :
                  p_Trident < 6   ? COMMON_CSS_FILE_STEM__IE55 :
                  p_Trident < 10  ? 'ie'  + ( p_Trident | 0 ) :
                  p_Presto  < 7.2 ? COMMON_CSS_FILE_STEM__OPERA70 :
                  p_Presto  < 8   ? COMMON_CSS_FILE_STEM__OPERA72 :
                  p_Presto  < 9.5 ? 'opr' + ( p_Presto  | 0 ) :
                    ( p_Gecko && !p_FirefoxGte35 ) ?
                      ( 1.4 <= p_Gecko ? COMMON_CSS_FILE_STEM__GECKO19 :
                        1.3 <= p_Gecko ? COMMON_CSS_FILE_STEM__GECKO13 :
                        1   <= p_Gecko ? COMMON_CSS_FILE_STEM__GECKO12 :
                        !p_GeckoLt09   ? COMMON_CSS_FILE_STEM__GECKO09 :
                        0.8 <= p_Gecko ? COMMON_CSS_FILE_STEM__GECKO08 :
                                         COMMON_CSS_FILE_STEM__GECKO07
                    ) :
                                         COMMON_CSS_FILE_STEM__MODERN
                ) + '.css',
    p_isSecure = location.href.indexOf( 'https' ) === 0,

    p_scripts, p_assetUrl,
    p_cssDir = COMMON_ASSET_DIR_TO_CSS_DIR ? COMMON_ASSET_DIR_TO_CSS_DIR + '/' : '',
    p_isMobile, p_screenModeDir = '',
    p_useMobile = p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_NDS    ) || p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_NDSi   ) ||
                  p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_N3DS   ) || p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_New3DS ) ||
                  p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_PSP    ) ||
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
    p_loadExternalCSS,
    p_loadExternalScript,
    p_setExternalScriptIsLoaded,
    p_usePatchOfTabFocusForGeckoLte094 = false;

function p_notUndefined( val ){
    return val !== undefined;
};

function p_toCamelCase( str ){
    var cache = p_toCamelCase._CACHE || ( p_toCamelCase._CACHE = {} ),
        cameled = cache[ str ];

    if( cameled ){
        return cameled;
    };

    var parts = str.split( '-' ),
        i     = parts.length,
        part;

    if( i < 2 ){
        return str;
    };
    while( 1 < i ){
        part = parts[ --i ];
        parts[ i ] = part.charAt( 0 ).toUpperCase() + part.substr( 1 );
    };
    return cache[ str ] = parts.join( '' );
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
var p_FONTFACE_UNAVAILABLE_DUE_TO_BLOCKLIST = // Unavailable due to block list
        p_WebKit       < 525 || // Safari <3.1
        p_SafariMobile < 3.1 ||
        p_AOSP         < 2.2 ||
        p_Presto       < 10  || // block NDS, NDSi
        p_Gecko && !p_FirefoxGte35 || // Gecko <1.9.1 p_CSSOM_insertRuleToStyleSheet( styleSheet, '@font-face', {} ) でエラー
        p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_UCWEB         ) ||
        p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) < 10 ||
        p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_MeeGo ) ||
        p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_WebOS ) ||
        p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_N3DS  );