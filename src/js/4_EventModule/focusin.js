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
        p_addEventListener( elm, 'DOMFocusIn', callback, false );
        return;
    } else if( FocusinEvent_USE_POLYFILL_FOR_IE_LTE_55 ){
        if( !FocusinEvent_watchActiveElementTimerID ){
            FocusinEvent_watchActiveElementTimerID = p_setLoopTimer( FocusinEvent_watchActiveElement );
        };
    } else if( FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ){
        p_addEventListener( document, 'focus', FocusinEvent_onfocus, true );
    } else { // Gecko <=0.9.4 は回想の離れた要素にフォーカスしない!
        p_addEventListener( document, 'focus', FocusinEvent_onfocus, { capture : true, passive : false } );
    };

    for( var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; ++i ){
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
        for( var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; ++i ){
            if( pairs[ i ] === elm && pairs[ i + 1 ] === callback ){
                pairs.splice( i, 2 );
                if( !pairs.length ){
                    if( FocusinEvent_USE_POLYFILL_FOR_IE_LTE_55 ){
                        FocusinEvent_watchActiveElementTimerID = p_clearLoopTimer( FocusinEvent_watchActiveElementTimerID );
                    } else if( FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ){
                            // Opera 7.x は階層の離れた要素にフォーカスしない!
                        p_removeEventListener( document, 'focus', FocusinEvent_onfocus, true );
                    } else { // Gecko <=0.9.4 は階層の離れた要素にフォーカスしない!
                        p_removeEventListener( document, 'focus', FocusinEvent_onfocus, { capture : true, passive : false } );
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
var FocusinEvent_USE_FOCUSIN                         = 6 <= p_Trident || p_EdgeHTML || 11.6 <= p_Presto || 52 <= p_Gecko || 15 <= p_Chromium || 534 <= p_WebKit || 5 <= p_SafariMobile;

var FocusinEvent_USE_DOMFOCUSIN                      = 8 <= p_Presto || p_Chromium || p_WebKit;

var FocusinEvent_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN = p_Gecko < 52 || p_Goanna;

var FocusinEvent_USE_POLYFILL_FOR_OPERA_7            = p_Presto < 8;

var FocusinEvent_USE_POLYFILL_FOR_IE_LTE_55          = p_Trident < 6;

/** @type {!Array.<!Element|!function(!Event):void>|undefined} */
var FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS;

if( FocusinEvent_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN || FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ){
    FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS = [];
    /**
     * @param {!Event} e
     */
    var FocusinEvent_onfocus = function( e ){
        var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS,
            elmFocused = FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ? document.activeElement : e.target,
            elmTarget;

        if( FocusinEvent_USE_POLYFILL_FOR_OPERA_7 ){
            e = /** @type {!Event} */ ({
                type   : 'focusin',
                target : elmFocused
                // TODO: e.preventDefault(), e.stopPropagation();
            });
            // e.target = elmFocused; // error!
        };

        for( var i = 0, l = pairs.length; i < l; ++i ){
            elmTarget = pairs[ i ];
            if( elmTarget === elmFocused || p_DOM_contains( /** @type {!Element} */ (elmTarget), /** @type {!Element} */ (elmFocused) ) ){
                pairs[ i + 1 ].call( elmTarget, /** @type {!Event} */ (e) );
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

        window.onerror = FocusinEvent_watchActiveElementErrorHandler;

        var activeElement = document.activeElement; // activeElement を触るとエラーが起る事がある. ie4 では try~catch が使えない為、onerror を使う

        if( FocusinEvent_currentActiveElement !== activeElement ){
            FocusinEvent_currentActiveElement = activeElement;
            var pairs = FocusinEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS,
                elmTarget;

            for( var i = 0, l = pairs.length; i < l; ++i ){
                elmTarget = pairs[ i ];
                if( elmTarget === activeElement || p_DOM_contains( /** @type {!Element} */ (elmTarget), /** @type {!Element} */ (activeElement) ) ){
                    pairs[ i + 1 ].apply( elmTarget, [ /** @type {!Event} */ ({ target : activeElement }) ] ); // TODO dummy event
                };
            };
        };
        window.onerror = /** @type {!Function} */ (FocusinEvent_memoryErrorHandler);
        FocusinEvent_memoryErrorHandler = undefined;
    };

    var FocusinEvent_watchActiveElementErrorHandler = function(){
        Debug.log( 'error!' );
        window.onerror = /** @type {!Function} */ (FocusinEvent_memoryErrorHandler);
        FocusinEvent_memoryErrorHandler = FocusinEvent_currentActiveElement = undefined;
        return true;
    };
};
