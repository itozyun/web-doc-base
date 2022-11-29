var p_addEventListener,
    p_removeEventListener,

    p_listenLoadEvent,
    p_listenUnloadEvent,
    p_listenResizeEvent,
    p_listenScrollEvent,
    p_listenPrintEvent,
    p_listenCssAvailabilityChange,
    p_listenImageReady,
    p_listenPrefersColorSchemeChange,
    p_listenForcedColorsChange,

    p_listenFocusinEvent,
    p_unlistenFocusinEvent,
    p_listenWheelEvent,
    p_unlistenWheelEvent,

    p_cssAvailability, // TODO AuthorCSS ?
    p_forcedColorsState,
    p_canuseNativeForcedColors,
    p_printEventDisabled;