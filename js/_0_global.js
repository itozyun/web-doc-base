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
    
    g_ELEMENT_MAIN_ID = 'jsMain', g_elmMain;