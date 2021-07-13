/** ===========================================================================
 * export to packageGlobal
 */
p_listenResizeEvent = function( callback ){
    Event_resizeEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @type {Array<Function>} */
var Event_resizeEventCallbacks = [];
/** @type {Function|null} */
var Event_tempOnResize         = window.onresize;
var Event_resizeTimerID;

/**
 * @param {Event=} e
 * @return {*}
 */
onresize = function( e ){
    var ret;

    if( Event_tempOnResize ) ret = Event_tempOnResize( e );
    
    if( !Event_init ){
        Event_resetTimer();
    };

    return ret;
};

function Event_resetTimer(){
    if( Event_resizeTimerID ){
        p_clearTimer( Event_resizeTimerID );
        Event_resizeTimerID = p_setTimer( Event_resizeEventLazyCallback );
    };
};

function Event_resizeEventLazyCallback(){
    Event_resizeTimerID = 0;
    Event_dispatch( Event_resizeEventCallbacks );
};

p_listenUnloadEvent(
    function(){
        if( Event_resizeTimerID ) clearTimeout( Event_resizeTimerID );
        onresize = Event_tempOnResize = p_emptyFunction;
    }
);