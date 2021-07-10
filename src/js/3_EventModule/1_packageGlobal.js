var p_listenLoadEvent,
    p_listenUnloadEvent,
    p_listenResizeEvent,
    p_listenScrollEvent,
    p_listenPrintEvent,
    p_listenCssAvailabilityChange,
    p_listenImageReady,
    p_listenPrefersColorChange,
    p_listenHighContrustModeChange,

    // nodeCleaner もアクセスするので packageGlobal に公開する
    p_loadEventCallbacks = [],

    p_cssAvailability,
    p_highContrastModeState = 0,
    p_printEventDisabled;