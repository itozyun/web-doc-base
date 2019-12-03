var g_loadEventCallbacks   = [],
    g_unloadEventCallbacks = [],
    g_resizeEventCallbacks = [],
    g_scrollEventCallbacks = [],

    g_disabledImages = [],
    g_emptyFunction  = new Function(),

    g_scripts  = document.scripts,
    g_assetUrl,
    g_isMobile,

    g_w3cDOM  = !!document.getElementsByTagName,
    g_body    = document.body,
    g_html, g_head,
    
    g_ELEMENT_MAIN_ID = 'jsMain',
    g_elmMain,

    g_Trident  = ua[ 'Trident' ] || ua[ 'TridentMobile' ],
    g_Tasman   = ua[ 'Tasman' ],
    g_EdgeHTML = ua[ 'EdgeHTML' ] || ua[ 'EdgeMobile' ],
    g_Presto   = ua[ 'Presto' ] || ua[ 'PrestoMobile' ],
    g_Gecko    = ua[ 'Gecko' ],
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
    ))();