/** ===========================================================================
 * export to packageGlobal
 */
p_listenLoadEvent = function( callback ){
    p_loadEventCallbacks.push( callback );
};
p_listenUnloadEvent = function( callback ){
    Event_unloadEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_unloadEventCallbacks = [],
    Event_tempOnLoad        = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
    Event_tempOnUnload      = window.onunload;

onload   = Event_init;
onunload = Event_kill;

/**
 * @type {?function(!Event)|null}
 */
function Event_init( e ){
    var ret;

    if( Event_tempOnLoad ) ret = Event_tempOnLoad( e );

    Event_dispatch( p_loadEventCallbacks, e );
    onload = p_emptyFunction;
    p_loadEventCallbacks = Event_init = Event_tempOnLoad = onload = null;

    return ret;
};

/**
 * @type {?function(!Event)|null}
 */
function Event_kill( e ){
    var ret;

    if( Event_tempOnUnload ) ret = Event_tempOnUnload( e );

    Event_dispatch( Event_unloadEventCallbacks, e );

    onunload = p_emptyFunction;
    return ret;
};