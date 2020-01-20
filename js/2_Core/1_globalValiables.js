var g_emptyFunction       = new Function(),
    g_onreachEndCallbacks = [],

    g_w3cDOM  = !!document.getElementsByTagName,
    g_body    = document.body,
    g_html, g_head,
    g_ELEMENT_MAIN_ID = 'jsMain',
    g_elmMain,

    g_Trident      = ua[ 'Trident' ] || ua[ 'TridentMobile' ],
    g_Tasman       = ua[ 'Tasman' ],
    g_EdgeHTML     = ua[ 'EdgeHTML' ] || ua[ 'EdgeMobile' ],
    g_Presto       = ua[ 'Presto' ] || ua[ 'PrestoMobile' ],
    g_Gecko        = ua[ 'Gecko' ],
    g_Goanna       = ua[ 'Goanna' ],
    g_SafariMobile = ua[ 'SafariMobile' ] || ua[ 'iOSWebView' ],
    g_ServerSideRendering = ua[ 'OperaMini' ] && ua[ 'UCWEB' ],

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

    g_scripts = document.scripts,
    g_cssName = ( g_Tasman ? 'ie5mac' :
                  g_Trident < 5.5 ? 'ie5win' :
                  g_Trident < 6   ? 'ie55' :
                  g_Trident < 10  ? 'ie' + ( g_Trident | 0 ) :
                  'modern'
                ) + '.css',
    g_assetUrl, g_assetDir, g_isMobile;

var g_Type_notUndefined;

var g_DebugLogger = { log : function(){} };

var g_Timer_set, g_Timer_clear;

    g_assetDir = g_scripts[ g_scripts.length - 1 ].src.split( '/' );
    --g_assetDir.length;
    g_assetUrl = g_assetDir.join( '/' ); // "http://127.0.0.1:8020/public"
    
    if( 0 <= 'http: https:'.indexOf( g_assetDir[ 0 ] ) ){
        g_assetDir.splice( 0, 3 );
    };
    g_assetDir = g_assetDir.join( '/' ); // "public"