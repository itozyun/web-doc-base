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

// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
    g_passiveSupported = !ua[ 'Trident' ] && !ua[ 'TridentMobile' ] && !ua[ 'Tasman' ] && (new Function(
        'try{' +
            'var r,o=Object.defineProperty({},"passive",{' +
                'get:function(){r=!0}' +
            '});' +
            'addEventListener("t",o,o);' +
            'removeEventListener("t",o,o);' +
            'return r' +
        '}catch(e){}'
    ))();