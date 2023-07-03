/**
 *  1. WebFont
 *     1. 合字
 *  2. SVG でフォールバック?
 */
p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( !cssAvailability ) return;

        var cssIconFontSet = {};

        if( p_Trident ){
            cssIconFontSet[ DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME + '_canEOT'   ] = p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_ICONFONT_DIR + '/eot.css';
        };
        cssIconFontSet[ DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME + '_canWOFF2' ] = p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_ICONFONT_DIR + '/woff2.css';
        cssIconFontSet[ DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME + '_canWOFF'  ] = p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_ICONFONT_DIR + '/woff.css';
        cssIconFontSet[ DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME + '_canTTF'   ] = p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_ICONFONT_DIR + '/ttf.css';
        cssIconFontSet[ DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME + '_canOTF'   ] = p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_ICONFONT_DIR + '/otf.css';
        cssIconFontSet[ DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME + '_canSVG'   ] = p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_ICONFONT_DIR + '/svg.css';

        p_webFontTest(
            VectorIcon_onTestComplete, // 1.
            DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME, // 2.
            cssIconFontSet, // 3.
            DEFINE_WEB_DOC_BASE__VECTOR_ICON_NAME + '-testCssReady', // 4.
            'twitter', '🐤', // 5. 6.
            5000// , // 7. test interval ms
            // ' m mmmmmmmmml l i'
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

function VectorIcon_onTestComplete( webFontTestResult ){
    var VectorIcon_LIG_TO_EMOJI = { /*
        'cog'      : '⚙',
        'share'    : '',
        'pen'      : '🖊',
        'library'  : '🏛',
        'home'     : '🏠',
        'flag'     : '🏳',
        'label'    : '🏷',
        'user'     : '👤',
        'bubble'   : '💬',
        'database' : '💽',
        'calender' : '📅',
        'RSS'      : '📻',
        'link'     : '🔗', */

        'Twitter'  : '🕊',
        'YouTube'  : '📺',
        'Github'   : '',

        'Chrome'   : '',
        'IE'       : '',
        'Edge'     : '',
        'Opera'    : '',
        'Browser'  : '🌐',
        'Firefox'  : '🦊',
        'Safari'   : '🧭',
        'Samsung'  : '🪐',
        'Netscape' : '',

        'Linux'    : '🐧',
        'Appleinc' : '🍎',
        'Android'  : '🤖',
        'Windows'  : '🪟'
    };

    // webFontTestResult === 0 : no webfont
    // webFontTestResult === 1 : webfont ready
    // webFontTestResult === 2 : webfont ready + ligature support
    if( webFontTestResult !== 2 ){
        var elmIcons = p_DOM_getElementsByClassNameFromDocument( DEFINE_WEB_DOC_BASE__VECTOR_ICON_CLASSNAME ),
            i = 0, l = elmIcons.length, elmIcon, content, emoji; 

        if( l ){
            if( webFontTestResult === 1 ){
                for( ; i < l; ++i ){
                    elmIcon = elmIcons[ i ];
                    content = p_DOM_getInnerHTML( elmIcon );
                    if( emoji = VectorIcon_LIG_TO_EMOJI[ content ] ){
                        elmIcon.innerHTML = emoji;
                    };
                };
            } else {
                if( VectorIcon_CANUSE_SVG && !VectorIcon_CANUSE_SVGTINY ){
                    window[ 'VectorIconCompat' ] = function(){
                        p_setExternalScriptIsLoaded( p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__VECTOR_ICON_COMPAT_FILENAME );

                        return [ VectorIcon_LIG_TO_EMOJI, elmIcons, p_DOM_insertElement, VectorIcon_CANUSE_SVGTINY ];
                    };
                    p_loadExternalScript( p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__VECTOR_ICON_COMPAT_FILENAME );
                };
            };
        };
    };
};