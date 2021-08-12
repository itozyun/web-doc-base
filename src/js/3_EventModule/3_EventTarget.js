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
var EVENT_TARGET_LISTENERS    = {};

var EVENT_TARGET_USE_ATTACH   = 5 <= p_Trident && p_Trident < 9,
    EVENT_TARGET_USE_STANDERD = !p_Tasman && window.addEventListener;

/** 1.
 * @param {EventTarget} eventTarget
 * @param {string} type
 * @param {Function} callback
 * @param {Object|boolean=} option
 */
function EventTraget_addEventListener( eventTarget, type, callback, option ){
    if( EVENT_TARGET_USE_ATTACH ){
        eventTarget.attachEvent( 'on' + type, callback );
    } else if( EVENT_TARGET_USE_STANDERD ){
        eventTarget.addEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
    } else {
        var listener = { eventTarget : eventTarget, callback : callback },
            eventListners = EVENT_TARGET_LISTENERS[ type ],
            i = eventListners.length, _listener;

        if( eventListners ){
            while( _listener = eventListners[ --i ] ){
                if( _listener.eventTarget === eventTarget && _listener.callback === callback ){
                    return;
                };
            };
            EVENT_TARGET_LISTENERS[ type ].push( listener );
        } else {
            EVENT_TARGET_LISTENERS[ type ] = [ listener ];
        };
        eventTarget[ 'on' + type ] = EventTraget_DOM0_dispatch;
    };
};

/** 2.
 * @param {EventTarget} eventTarget
 * @param {string} type
 * @param {Function} callback
 * @param {Object|boolean=} option
 */
function EventTraget_removeEventListener( eventTarget, type, callback, option ){
    var onType = 'on' + type;

    if( EVENT_TARGET_USE_ATTACH ){
        eventTarget.detachEvent( onType, callback );
    } else if( EVENT_TARGET_USE_STANDERD ){
        eventTarget.removeEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
    } else {
        var eventListners = EVENT_TARGET_LISTENERS[ type ],
            i = eventListners.length, listener, skip;

        while( listener = eventListners[ --i ] ){
            if( listener.eventTarget === eventTarget ){
                if( listener.callback === callback ){
                    eventListners.splice( i, 1 );
                } else {
                    skip = true;
                };
            };
        };
        if( !skip ){
            eventTarget[ onType ] = p_emptyFunction;
            eventTarget[ onType ] = null;
        };
    };
};

    function EventTraget_DOM0_dispatch( _e ){
        var e             = _e || event,
            type          = e.type,
            eventListners = EVENT_TARGET_LISTENERS[ type ],
            eventTarget   = this,
            i             = -1, listener;
        
        while( listener = eventListners[ ++i ] ){
            if( listener.eventTarget === eventTarget ){
                eventTarget.__callback__ = listener.callback;
                eventTarget.__callback__( e );
                eventTarget.__callback__ = p_emptyFunction;
                eventTarget.__callback__ = null;
            };
        };
    };