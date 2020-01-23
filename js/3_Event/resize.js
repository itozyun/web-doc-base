var Event_resizeEventCallbacks = [],
    Event_tempOnResize         = window.onresize,
    Event_resizeTimerID;

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
        g_Timer_clear( Event_resizeTimerID );
        Event_resizeTimerID = g_Timer_set( Event_resizeEventLazyCallback );
    };
};

function Event_resizeEventLazyCallback(){
    Event_resizeTimerID = 0;
    Event_dispatch( Event_resizeEventCallbacks );
};

g_Event_listenUnloadEvent(
    function(){
        if( Event_resizeTimerID ) clearTimeout( Event_resizeTimerID );
        onresize = Event_tempOnResize = g_emptyFunction;
    }
);

g_Event_listenResizeEvent = function( callback ){
    Event_resizeEventCallbacks.push( callback );
};