/** ===========================================================================
 * export to packageGlobal
 */
p_listenResizeEvent = function( callback ){
    Event_resizeEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @type {!Array.<!Function>} */
var Event_resizeEventCallbacks = [];
var Event_resizeTimerID;

p_addEventListener( window, 'resize', Event_resizeEventHandler );

/**
 * @param {!Event=} e
 */
function Event_resizeEventHandler( e ){
    if( !p_loadEventCallbacks ){
        Event_resetTimer();
    };
};

function Event_resetTimer(){
    if( Event_resizeTimerID ){
        p_clearTimer( Event_resizeTimerID );
        Event_resizeTimerID = p_setTimer( Event_resizeEventLazyCallback );
    };
};

function Event_resizeEventLazyCallback(){
    Event_resizeTimerID = 0;
    m_dispatchEvent( Event_resizeEventCallbacks );
};

p_listenUnloadEvent(
    function(){
        if( Event_resizeTimerID ) clearTimeout( Event_resizeTimerID );
        p_removeEventListener( window, 'resize', Event_resizeEventHandler );
    }
);