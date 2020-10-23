var g_emptyFunction       = emptyFunction, // || new Function(),
    g_onreachEndCallbacks = [],

    g_w3cDOM  = !!document.getElementsByTagName,
    g_body    = document.body,
    g_style   = g_body.style,

    g_html, g_head, g_elmMain,

    g_Trident      = ua[ 'Trident' ] || ua[ 'TridentMobile' ],
    g_Tasman       = ua[ 'Tasman' ],
    g_EdgeHTML     = ua[ 'EdgeHTML' ] || ua[ 'EdgeMobile' ],
    g_Presto       = ua[ 'Presto' ] || ua[ 'PrestoMobile' ],
    g_Gecko        = ua[ 'Gecko' ],
    g_Goanna       = ua[ 'Goanna' ],
    g_WebKit       = ua[ 'WebKit' ],
    g_SafariMobile = ua[ 'SafariMobile' ] || ua[ 'iOSWebView' ],
    g_ServerSideRendering = ua[ 'OperaMini' ] && ua[ 'UCWEB' ],
    g_Windows      = ua[ 'Win32' ] || ua[ 'Win64' ],
    g_ChromiumEdge = parseFloat( navigator.userAgent.split( 'Edg/' )[ 1 ] ), // brand が無いので
    g_IEVersion    = parseFloat( navigator.appVersion.split( 'Trident/' )[ 1 ] ) + 4,

// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
    g_passiveSupported = !g_Trident && !g_Tasman && (new Function(
        'try{' +
            'var r,o=Object.defineProperty({},"passive",{' +
                'get:function(){r=!0}' +
            '});' +
            'addEventListener("t",o,o);' +
            'removeEventListener("t",o,o);' +
            'return r' +
        '}catch(e){}'
    ))(),

    g_jsGte15 = g_Trident < 5.5,

    g_scripts = document.scripts || DOM_getElementsByTagName( 'script' ), // for NN9
    g_cssName = ( g_Tasman ? 'ie5mac' :
                  g_Trident < 5.5 ? 'ie5win' :
                  g_Trident < 6   ? 'ie55' :
                  g_Trident < 10  ? 'ie' + ( g_Trident | 0 ) :
                  'modern'
                ) + '.css',
    g_isSecure = location.href.indexOf( 'https' ) === 0,
    g_assetUrl, g_isMobile,

    g_DebugLogger = { log : function(){} },

    g_setTimer    , g_clearTimer,
    g_setLoopTimer, g_clearLoopTimer,
    
    g_listenLoadEvent,
    g_listenUnloadEvent,
    g_listenResizeEvent,
    g_listenScrollEvent,
    g_listenPrintEvent,
    g_listenCssAvailabilityChange,
    g_listenImageReady,
    g_listenPrefersColorChange,
    g_listenHighContrustModeChange,

    // nodeCleaner もアクセスするので packageGlobal に公開する
    g_loadEventCallbacks = [],

    g_cssAvailability,
    g_highContrastModeState = 0,
    g_printEventDisabled,
    
    g_iefilterEnabled,
    g_imageEnabled,
    g_generatedContentEnabled,

    g_cssTransformName =
        g_notUndefined( g_style[ 'transform' ] ) ? 'transform' : 
        g_notUndefined( g_style[ '-o-transform' ] ) ? '-o-transform' : 
        g_notUndefined( g_style[ '-ms-transform' ] ) ? '-ms-transform' : 
        g_notUndefined( g_style[ '-moz-transform' ] ) ? '-moz-transform' : 
        g_notUndefined( g_style[ '-webkit-transform' ] ) ? '-webkit-transform' : '',
    
    g_dataUriTest,
    g_imageTest,
    g_webFontTest;

function g_notUndefined( val ){
    return val !== undefined;
};

    g_assetUrl = g_scripts[ g_scripts.length - 1 ].src.split( '/' ); // IE7- では要素に書いてある内容. それ以外は absolute URL.
    --g_assetUrl.length;
    g_assetUrl = g_assetUrl.join( '/' ); // "http://127.0.0.1:8020/public/"

    if( g_assetUrl ){
        g_assetUrl += '/'; // '.' -> './'
    // } else {
        // g_assetUrl = './';
    };