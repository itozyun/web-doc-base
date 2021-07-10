/** ===========================================================================
 * export to packageGlobal
 */

// DOM Lv2 Event
p_DOM_addEventListener    = DOM_addEventListener;
p_DOM_removeEventListener = DOM_removeEventListener;

/** ===========================================================================
 * private
 */
var DOM_EVENT_LISTENERS = {};

function DOM_addEventListener( eventTarget, type, callback, option ){
    if( p_Trident < 5 || p_Tasman ){
        eventTarget[ 'on' + type ] = _DOM_dispatch;
        var hash = { eventTarget : eventTarget, cb : callback };

        if( DOM_EVENT_LISTENERS[ type ] ){
            DOM_EVENT_LISTENERS[ type ].push( hash );
        } else {
            DOM_EVENT_LISTENERS[ type ] = [ hash ];
        };
    } else if( p_Trident < 9 ){
        eventTarget.attachEvent( 'on' + type, callback );
    } else {
        eventTarget.addEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
    };
};

function DOM_removeEventListener( eventTarget, type, callback, option ){
    if( p_Trident < 5 || p_Tasman ){
        var eventListners = DOM_EVENT_LISTENERS[ type ],
            i = eventListners.length, hash, skip;

        while( hash = eventListners[ --i ] ){
            if( hash.eventTarget === eventTarget ){
                if( hash.cb === callback ){
                    eventListners.splice( i, 1 );
                } else {
                    skip = true;
                };
            };
        };
        if( !skip ){
            eventTarget[ 'on' + type ] = p_emptyFunction;
        };
    } else if( p_Trident < 9 ){
        eventTarget.detachEvent( 'on' + type, callback );
    } else {
        eventTarget.removeEventListener( type, callback,
            option ? ( p_passiveSupported ? option : option.capture ) : false );
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
                hash.cb( e );
            };
        };
    };