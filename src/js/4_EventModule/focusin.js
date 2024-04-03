/** ===========================================================================
 * export to packageGlobal
 * 
 * @param {!Element} elm
 * @param {!function(!Event):void} callback
 */
p_listenFocusinEvent = function( elm, callback ){
    if( FocusinEvent_USE_FOCUSIN ){
        p_addEventListener( elm, 'focusin', callback );
        return;
    } else if( FocusinEvent_USE_DOMFOCUSIN ){
        p_addEventListener( elm, 'DOMFocusIn', callback );
        return;
    } else if( FocusinEvent_USE_POLYFILL_FOR_IE_LTE_55 ){
        if( !FocusinEvent_watchActiveElementTimerID ){
            // エラーを想定するので、p_setLoopTimer を使わない! TODO setError
            FocusinEvent_watchActiveElementTimerID = setInterval( FocusinEvent_watchActiveElement, 333 );
        };
    } else if( FocusinEvent_USE_POLYFILL_FOR_OPERA_7 || FocusinEvent_USE_FOCUS_CAPTURE_PHASE ){
        p_addEventListener( document, 'focus', FocusinEvent_onfocus, true );
    } else {
        return;
    };

    for( var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; i += 2 ){
        if( pairs[ i ] === elm && pairs[ i + 1 ] === callback ){
            return;
        };
    };
    pairs.push( elm, callback );
};

/**
 * @param {!Element} elm
 * @param {!function(!Event):void} callback
 */
p_unlistenFocusinEvent = function( elm, callback ){
    if( FocusinEvent_USE_FOCUSIN ){
        p_addEventListener( elm, 'focusin', callback );
        return;
    } else if( FocusinEvent_USE_DOMFOCUSIN ){
        p_addEventListener( elm, 'DOMFocusIn', callback, false );
        return;
    } else {
        for( var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; i += 2 ){
            if( pairs[ i ] === elm && pairs[ i + 1 ] === callback ){
                pairs.splice( i, 2 );
                if( !pairs.length ){
                    if( FocusinEvent_USE_POLYFILL_FOR_IE_LTE_55 ){
                        FocusinEvent_watchActiveElementTimerID = p_clearLoopTimer( FocusinEvent_watchActiveElementTimerID );
                    } else if( FocusinEvent_USE_POLYFILL_FOR_OPERA_7 || FocusinEvent_USE_FOCUS_CAPTURE_PHASE ){
                        p_removeEventListener( document, 'focus', FocusinEvent_onfocus, true );
                    };
                };
                break;
            };
        };
    };
};

/** ===========================================================================
 * private
 */
// https://caniuse.com/?search=focusin
// https://github.com/mdn/browser-compat-data/blob/d22e1912155eb29056d254213b1fddbd7fc05391/api/Element.json#L3622
var FocusinEvent_USE_FOCUSIN                = 6 <= p_Trident || p_EdgeHTML || 52 <= p_Gecko || 15 <= p_Chromium || 534 <= p_WebKit /** Safari 5.1+ */ || 5 <= p_SafariMobile ||
                                              p_ChromeWebView || 4 <= p_AOSP || 4 <= p_Samsung ||
                                              11.6 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Presto   ) || 12 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_PrestoMobile );

var FocusinEvent_USE_DOMFOCUSIN             = 8 <= p_Presto || p_Chromium || p_AOSP || p_Samsung || p_WebKit || p_SafariMobile;

var FocusinEvent_USE_POLYFILL_FOR_OPERA_7   = p_Presto < 8;

var FocusinEvent_USE_POLYFILL_FOR_IE_LTE_55 = p_Trident < 6;

var FocusinEvent_USE_FOCUS_CAPTURE_PHASE    = p_Gecko < 52 || p_Goanna;

/**
 * [2n+0] !Element currentTarget
 * [2n+1] calback
 * @type {!Array.<!Element|!function(this:Element, !Event):void>|undefined} */
var FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS;

if( FocusinEvent_USE_FOCUS_CAPTURE_PHASE || FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ){
    FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS = [];
    /**
     * @param {!Event} e
     */
    var FocusinEvent_onfocus = function( e ){
        var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS,
            elmFocused = /** @type {!Element} */ (FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ? document.activeElement : e.target),
            i = 0, l = pairs.length, elmCurrentTarget, originalEvent;

        if( FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ){
            originalEvent = e;
            e = /** @type {!Event} */ ({
                type            : 'focusin',
                target          : elmFocused,
                cancelable      : true,
                preventDefault  : function(){ originalEvent.preventDefault();  },
                stopPropagation : function(){ originalEvent.stopPropagation(); }
            });
            // e.target = elmFocused; // EventObject の書き換えは error!
        };

        for( ; i < l; i += 2 ){
            elmCurrentTarget = /** @type {!Element} */ (pairs[ i ]);
            if( elmCurrentTarget === elmFocused || p_DOM_contains( elmCurrentTarget, elmFocused ) ){
                /** @type {!function(this:Element, !Event):void} */ (pairs[ i + 1 ]).call( elmCurrentTarget, /** @type {!Event} */ (e) );
            };
        };
    };
} else if( FocusinEvent_USE_POLYFILL_FOR_IE_LTE_55 ){
    /** ===========================================================================
     * for IE <=5.5
     */
    FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS = [];

    var FocusinEvent_watchActiveElementTimerID;
    var FocusinEvent_currentActiveElement;
    var FocusinEvent_memoryErrorHandler;

    var FocusinEvent_watchActiveElement = function(){
        FocusinEvent_memoryErrorHandler = window.onerror;

        // 他の frame にフォーカスが移っている時に activeElement を触るとエラーが起る. ie4 では try~catch が使えない為、onerror を使う
        window.onerror = FocusinEvent_watchActiveElementErrorHandler;

        var activeElement = /** @type {!Element} */ (document.activeElement);

        if( FocusinEvent_currentActiveElement !== activeElement ){
            FocusinEvent_currentActiveElement = activeElement;
            var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS,
                i = 0, l = pairs.length, elmCurrentTarget, tempCallback;

            for( ; i < l; i += 2 ){
                elmCurrentTarget = /** @type {!Element} */ (pairs[ i ]);
                if( elmCurrentTarget === activeElement || p_DOM_contains( elmCurrentTarget, activeElement ) ){
                    tempCallback = elmCurrentTarget.onmousemove;
                    // .apply の polyfill が低速かつプロパティの追加で汚すので、型が分かっている場合は既知の onXX 属性を使用する
                    // 但し、コールバック内で click(), focus() が呼ばれる可能性があるため onclick, onfocus は避ける
                    elmCurrentTarget.onmousemove = /** @type {!function(this:Element, !Event):void} */ (pairs[ i + 1 ]);
                    elmCurrentTarget.onmousemove(
                        /** @type {!Event} */ ({
                            type            : 'focusin',
                            target          : activeElement,
                         // currentTarget   : elmCurrentTarget,
                            preventDefault  : p_emptyFunction,
                            stopPropagation : p_emptyFunction
                        })
                    );
                    if( tempCallback ){
                        elmCurrentTarget.onmousemove = tempCallback;
                    } else {
                        elmCurrentTarget.onmousemove = p_emptyFunction;
                        elmCurrentTarget.onmousemove = null; // undefined だと多分 error https://twitter.com/itozyun/status/1501010455007207424
                    };
                };
            };
        };
        window.onerror = /** @type {!Function} */ (FocusinEvent_memoryErrorHandler);
        FocusinEvent_memoryErrorHandler = undefined;
    };

    if( p_Trident < 5 ){
        _wdb_watchactiveelm = FocusinEvent_watchActiveElement;
        FocusinEvent_watchActiveElement = '_wdb_watchactiveelm()';
    };

    var FocusinEvent_watchActiveElementErrorHandler = function(){
        Debug.log( 'error!' );
        window.onerror = /** @type {!Function} */ (FocusinEvent_memoryErrorHandler);
        FocusinEvent_memoryErrorHandler = FocusinEvent_currentActiveElement = undefined;
        return true;
    };
};
