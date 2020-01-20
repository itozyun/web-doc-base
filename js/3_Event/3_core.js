var Event_loadEventCallbacks   = [],
    Event_unloadEventCallbacks = [],
    Event_tempOnLoad        = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
    Event_tempOnUnload      = window.onunload;

/**
 * @type {?function(!Event)|null}
 */
var Event_init = function( e ){
    var i = 0, l = Event_loadEventCallbacks.length, ret;

    if( Event_tempOnLoad ) ret = Event_tempOnLoad( e );

    for( ; i < l; ++i ){
        Event_loadEventCallbacks[ i ]( e );
    };
    onload = g_emptyFunction;
    Event_loadEventCallbacks = Event_init = Event_tempOnLoad = onload = null;

    return ret;
};

/**
 * @type {?function(!Event)|null}
 */
var Event_kill = function( e ){
    var i = 0, l = Event_unloadEventCallbacks.length, ret;

    if( Event_tempOnUnload ) ret = Event_tempOnUnload( e );

    for( ; i < l; ++i ){
        Event_unloadEventCallbacks[ i ]();
    };

    onscroll = onresize = onunload = g_emptyFunction;
    onscroll = onresize = onunload = null;

    return ret;
};

onload   = Event_init;
onunload = Event_kill;

g_Event_listenLoadEvent = function( callback ){
    Event_loadEventCallbacks.push( callback );
};
g_Event_listenUnloadEvent = function( callback ){
    Event_unloadEventCallbacks.push( callback );
};