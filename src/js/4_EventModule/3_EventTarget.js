/** ===========================================================================
 * export to packageGlobal
 */

// DOM Lv2 Event
p_addEventListener    = EventTraget_addEventListener;
p_removeEventListener = EventTraget_removeEventListener;

/** ===========================================================================
 * private
 */
/** @type {Object<string, Object>} */
var EventTarget_LISTENERS        = {};
var EventTarget_USE_ATTACH       = false; // 5 <= p_Trident && p_Trident < 9,
var EventTarget_PATCH_OLD_WEBKIT = p_WebKit < 525.13; // Safari <3
var EventTarget_USE_STANDERD     = !EventTarget_PATCH_OLD_WEBKIT && !p_Tasman && window.addEventListener;
var EventTarget_safariPreventDefault;

/** 1.
 * @param {EventTarget} eventTarget
 * @param {string} type
 * @param {Function} callback
 * @param {Object|boolean=} option
 */
function EventTraget_addEventListener( eventTarget, type, callback, option ){
    if( EventTarget_USE_STANDERD ){
        eventTarget.addEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
    } else {
        var listener      = { eventTarget : eventTarget, callback : callback },
            eventListners = EventTarget_LISTENERS[ type ],
            onType        = 'on' + type,
            i, _listener, tempCallback;

        if( eventListners ){
            i = eventListners.length;
            while( _listener = eventListners[ --i ] ){
                if( _listener.eventTarget === eventTarget && _listener.callback === callback ){
                    return;
                };
            };
            EventTarget_LISTENERS[ type ].push( listener );
        } else {
            EventTarget_LISTENERS[ type ] = eventListners = [ listener ];

            if( !EventTarget_USE_ATTACH ){
                // DOM0 で追加されていた callback を listener に加える
                // 実際には js-inline の onload コールバックを EventTarget_LISTENERS 配下に移す
                tempCallback = eventTarget[ onType ];
                if( typeof tempCallback === 'function' && tempCallback !== EventTraget_dispatchProxy ){
                    eventListners.unshift( { eventTarget : eventTarget, callback : tempCallback } );
                };
            };
        };

        if( EventTarget_USE_ATTACH ){
            eventTarget.attachEvent( onType, EventTraget_dispatchProxy ); // TODO 2度呼ばれた場合?
        } else {
            eventTarget[ onType ] = EventTraget_dispatchProxy;
        };
    };
};

/** 2.
 * @param {EventTarget} eventTarget
 * @param {string} type
 * @param {Function} callback
 * @param {Object|boolean=} option
 */
function EventTraget_removeEventListener( eventTarget, type, callback, option ){
    if( EventTarget_USE_STANDERD ){
        eventTarget.removeEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
    } else {
        var eventListners = EventTarget_LISTENERS[ type ],
            onType        = 'on' + type,
            i, listener, skipRemoveListener;

        if( eventListners ){
            i = eventListners.length;
            while( listener = eventListners[ --i ] ){
                if( listener.eventTarget === eventTarget ){
                    if( listener.callback === callback ){
                        eventListners.splice( i, 1 );
                    } else {
                        skipRemoveListener = true;
                    };
                };
            };
            if( !skipRemoveListener ){
                if( EventTarget_USE_ATTACH ){
                    eventTarget.detachEvent( onType, EventTraget_dispatchProxy );
                } else {
                    eventTarget[ onType ] = p_emptyFunction;
                    eventTarget[ onType ] = undefined;
                };
            };
        };
    };
};

    function EventTraget_dispatchProxy( _e ){
        var e             = _e || event,
            type          = e.type,
            eventListners = EventTarget_LISTENERS[ type ],
            eventTarget   = this,
            i             = -1,
            listener, stopPropagation;
        
        if( p_Trident ){
            e.preventDefault = function(){
                e.returnValue = false;
            };
            e.stopPropagation = function(){
                e.cancelBubble = true;
            };
        } else if( EventTarget_PATCH_OLD_WEBKIT ){
            e._stopPropagation = e.stopPropagation;
            e.stopPropagation = function(){
                stopPropagation = true;
            };
        };

        while( listener = eventListners[ ++i ] ){
            if( listener.eventTarget === eventTarget ){
                eventTarget.__handleEvent__ = listener.callback;
                eventTarget.__handleEvent__( e );
                eventTarget.__handleEvent__ = p_emptyFunction;
                eventTarget.__handleEvent__ = undefined;
            } else if( p_Presto < 7.2 && eventTarget === document && listener.eventTarget === window ){
                window.__handleEvent__ = listener.callback;
                window.__handleEvent__( e );
                delete window.__handleEvent__;
            };
        };

        if( p_Trident ){
            e.preventDefault = e.stopPropagation = undefined;
            return e.returnValue;
        } else if( EventTarget_PATCH_OLD_WEBKIT ){
            if( e.defaultPrevented ){
                if( e.type === 'click' && e.target.tagName === 'A' ){
                    EventTarget_safariPreventDefault = true;
                };
            };
            if( stopPropagation && !EventTarget_safariPreventDefault ){
                e._stopPropagation();
            };
            e._stopPropagation = e.stopPropagation = undefined;
        };
    };

if( EventTarget_PATCH_OLD_WEBKIT ){
    p_html.addEventListener( 'click',
        function( e ){
            if( EventTarget_safariPreventDefault ){
                EventTarget_safariPreventDefault = false;
                e.preventDefault();
                return false;
            };
        }
    );
};