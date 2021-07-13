/** ===========================================================================
 * export to packageGlobal
 */

// DOM Lv2 Event
p_DOM_addEventListener    = DOM_addEventListener;
p_DOM_removeEventListener = DOM_removeEventListener;

/** ===========================================================================
 * private
 */
/** @type {Object<string, Object>} */
var DOM_EVENT_LISTENERS    = {};

var DOM_EVENT_USE_ATTACH   = 5 <= p_Trident && p_Trident < 9,
    DOM_EVENT_USE_STANDERD = !p_Tasman && window.addEventListener;

/** 1.
 * @param {EventTarget} eventTarget
 * @param {string} type
 * @param {Function} callback
 * @param {Object|boolean=} option
 */
function DOM_addEventListener( eventTarget, type, callback, option ){
    if( DOM_EVENT_USE_ATTACH ){
        eventTarget.attachEvent( 'on' + type, callback );
    } else if( DOM_EVENT_USE_STANDERD ){
        eventTarget.addEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
    } else {
        var hash = { eventTarget : eventTarget, callback : callback },
            eventListners = DOM_EVENT_LISTENERS[ type ],
            i = eventListners.length, _hash;

        if( eventListners ){
            while( _hash = eventListners[ --i ] ){
                if( _hash.eventTarget === eventTarget && _hash.callback === callback ){
                    return;
                };
            };
            DOM_EVENT_LISTENERS[ type ].push( hash );
        } else {
            DOM_EVENT_LISTENERS[ type ] = [ hash ];
        };
        eventTarget[ 'on' + type ] = _DOM_dispatch;
    };
};

/** 2.
 * @param {EventTarget} eventTarget
 * @param {string} type
 * @param {Function} callback
 * @param {Object|boolean=} option
 */
function DOM_removeEventListener( eventTarget, type, callback, option ){
    if( DOM_EVENT_USE_ATTACH ){
        eventTarget.detachEvent( 'on' + type, callback );
    } else if( DOM_EVENT_USE_STANDERD ){
        eventTarget.removeEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
    } else {
        var eventListners = DOM_EVENT_LISTENERS[ type ],
            i = eventListners.length, hash, skip;

        while( hash = eventListners[ --i ] ){
            if( hash.eventTarget === eventTarget ){
                if( hash.callback === callback ){
                    eventListners.splice( i, 1 );
                } else {
                    skip = true;
                };
            };
        };
        if( !skip ){
            eventTarget[ 'on' + type ] = p_emptyFunction;
        };
    };
};

    function _DOM_dispatch(){
        var e             = event,
            type          = e.type,
            eventListners = DOM_EVENT_LISTENERS[ type ],
            eventTarget   = this,
            i             = -1, hash;
        
        while( hash = eventListners[ ++i ] ){
            if( hash.eventTarget === eventTarget ){
                hash.callback( e );
            };
        };
    };