/** ===========================================================================
 * export to packageGlobal
 * 
 * @param {!Element} elm
 * @param {!function(!Event):void} callback
 */
p_listenDOMFocusInEvent = function( elm, callback ){
    if( DOMFocusIn_USE_FOCUSIN ){
        p_addEventListener( elm, 'focusin', callback );
        return;
    } else if( DOMFocusIn_USE_DOMFOCUSIN ){
        p_addEventListener( elm, 'DOMFocusIn', callback, false );
        return;
    } else if( DOMFocusIn_USE_POLYFILL_FOR_IE_LTE_55 ){
        if( !DOMFocusIn_watchActiveElementTimerID ){
            DOMFocusIn_watchActiveElementTimerID = p_setLoopTimer( DOMFocusIn_watchActiveElement );
        };
    } else if( DOMFocusIn_USE_POLYFILL_FOR_OPERA_7 ){
        p_addEventListener( document, 'focus', DOMFocusIn_onfocus, true );
    } else { // Gecko <=0.9.4 は回想の離れた要素にフォーカスしない!
        p_addEventListener( document, 'focus', DOMFocusIn_onfocus, { capture : true, passive : false } );
    };

    for( var pairs = DOMFocusIn_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; ++i ){
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
p_unlistenDOMFocusInEvent = function( elm, callback ){
    if( DOMFocusIn_USE_FOCUSIN ){
        p_addEventListener( elm, 'focusin', callback );
        return;
    } else if( DOMFocusIn_USE_DOMFOCUSIN ){
        p_addEventListener( elm, 'DOMFocusIn', callback, false );
        return;
    } else {
        for( var pairs = DOMFocusIn_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; ++i ){
            if( pairs[ i ] === elm && pairs[ i + 1 ] === callback ){
                pairs.splice( i, 2 );
                if( !pairs.length ){
                    if( DOMFocusIn_USE_POLYFILL_FOR_IE_LTE_55 ){
                        DOMFocusIn_watchActiveElementTimerID = p_clearLoopTimer( DOMFocusIn_watchActiveElementTimerID );
                    } else if( DOMFocusIn_USE_POLYFILL_FOR_OPERA_7 ){
                            // Opera 7.x は階層の離れた要素にフォーカスしない!
                        p_removeEventListener( document, 'focus', DOMFocusIn_onfocus, true );
                    } else { // Gecko <=0.9.4 は階層の離れた要素にフォーカスしない!
                        p_removeEventListener( document, 'focus', DOMFocusIn_onfocus, { capture : true, passive : false } );
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
var DOMFocusIn_USE_FOCUSIN                         = 6 <= p_Trident || p_EdgeHTML || 11.6 <= p_Presto || 52 <= p_Gecko || 15 <= p_Chromium || 534 <= p_WebKit || 5 <= p_SafariMobile;

var DOMFocusIn_USE_DOMFOCUSIN                      = 8 <= p_Presto || p_Chromium || p_WebKit;

var DOMFocusIn_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN = p_Gecko < 52 || p_Goanna;

var DOMFocusIn_USE_POLYFILL_FOR_OPERA_7            = p_Presto < 8;

var DOMFocusIn_USE_POLYFILL_FOR_IE_LTE_55          = p_Trident < 6;

/** @type {!Array.<!Element|!function(!Event):void>|undefined} */
var DOMFocusIn_TARGET_ELEMENT_AND_CALLBACK_PIARS;

if( DOMFocusIn_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN || DOMFocusIn_USE_POLYFILL_FOR_OPERA_7 ){
    DOMFocusIn_TARGET_ELEMENT_AND_CALLBACK_PIARS = [];
    /**
     * @param {!Event} e
     */
    var DOMFocusIn_onfocus = function( e ){
        var pairs = DOMFocusIn_TARGET_ELEMENT_AND_CALLBACK_PIARS,
            elmFocused = DOMFocusIn_USE_POLYFILL_FOR_OPERA_7 ? document.activeElement : e.target,
            elmTarget;

        if( DOMFocusIn_USE_POLYFILL_FOR_OPERA_7 ){
            e = {
                type   : 'focusin',
                target : elmFocused
            };
            // e.target = elmFocused;
        };

        for( var i = 0, l = pairs.length; i < l; ++i ){
            elmTarget = pairs[ i ];
            if( p_DOM_contains( /** @type {!Element} */ (elmTarget), /** @type {!Element} */ (elmFocused) ) ){
                pairs[ i + 1 ].call( elmTarget, e );
            };
        };
    };
} else if( DOMFocusIn_USE_POLYFILL_FOR_IE_LTE_55 ){
    /** ===========================================================================
     * for IE <=5.5
     */
    DOMFocusIn_TARGET_ELEMENT_AND_CALLBACK_PIARS = [];

    var DOMFocusIn_watchActiveElementTimerID;
    var DOMFocusIn_currentActiveElement;
    var DOMFocusIn_memoryErrorHandler;

    var DOMFocusIn_watchActiveElement = function(){
        DOMFocusIn_memoryErrorHandler = window.onerror;

        window.onerror = DOMFocusIn_watchActiveElementErrorHandler;

        var activeElement = document.activeElement; // activeElement を触るとエラーが起る事がある. ie4 では try~catch が使えない為、onerror を使う

        if( DOMFocusIn_currentActiveElement !== activeElement ){
            DOMFocusIn_currentActiveElement = activeElement;
            var pairs = DOMFocusIn_TARGET_ELEMENT_AND_CALLBACK_PIARS,
                elmTarget;

            for( var i = 0, l = pairs.length; i < l; ++i ){
                elmTarget = pairs[ i ];
                if( p_DOM_contains( /** @type {!Element} */ (elmTarget), /** @type {!Element} */ (activeElement) ) ){
                    pairs[ i + 1 ].apply( elmTarget, [ /** @type {!Event} */ ({ target : activeElement }) ] );
                };
            };
        };
        window.onerror = /** @type {!Function} */ (DOMFocusIn_memoryErrorHandler);
        DOMFocusIn_memoryErrorHandler = undefined;
    };

    var DOMFocusIn_watchActiveElementErrorHandler = function(){
        Debug.log( 'error!' );
        window.onerror = /** @type {!Function} */ (DOMFocusIn_memoryErrorHandler);
        DOMFocusIn_memoryErrorHandler = DOMFocusIn_currentActiveElement = undefined;
        return true;
    };
};
