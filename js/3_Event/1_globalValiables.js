
var g_Event_listenLoadEvent,
    g_Event_listenUnloadEvent,
    g_Event_listenResizeEvent,
    g_Event_listenScrollEvent,
    g_Event_listenPrintEvent,

    g_Event_listenCssAvailability,
    g_Event_listenImageReady,

    g_Event_listenPrefersColorChange,
    g_Event_listenHighContrustModeChange,

    // nodeCleaner もアクセスするので global に公開する
    g_Event_loadEventCallbacks = [],

    g_Event_cssAvailability,
    g_Event_highContrustModeState = 0;