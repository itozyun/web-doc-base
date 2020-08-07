var Event_unloadEventCallbacks = [],
    Event_tempOnLoad        = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
    Event_tempOnUnload      = window.onunload;

/**
 * @type {?function(!Event)|null}
 */
var Event_init = function( e ){
    var ret;

    if( Event_tempOnLoad ) ret = Event_tempOnLoad( e );

    Event_dispatch( g_Event_loadEventCallbacks, e );
    onload = g_emptyFunction;
    g_Event_loadEventCallbacks = Event_init = Event_tempOnLoad = onload = null;

    return ret;
};

/**
 * @type {?function(!Event)|null}
 */
var Event_kill = function( e ){
    var ret;

    if( Event_tempOnUnload ) ret = Event_tempOnUnload( e );

    Event_dispatch( Event_unloadEventCallbacks, e );

    onunload = g_emptyFunction;
    return ret;
};

onload   = Event_init;
onunload = Event_kill;

g_Event_listenLoadEvent = function( callback ){
    g_Event_loadEventCallbacks.push( callback );
};
g_Event_listenUnloadEvent = function( callback ){
    Event_unloadEventCallbacks.push( callback );
};