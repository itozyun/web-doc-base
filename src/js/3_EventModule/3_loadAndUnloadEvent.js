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
/** @type {Array<Function>} */
var Event_unloadEventCallbacks = [];
/** @type {Function|null} */
var Event_tempOnLoad           = window.onload; // window. を付けないと Win XP + Opera10.10 でエラーに
/** @type {Function|null} */
var Event_tempOnUnload         = window.onunload;

/** @type {Function|null} */
onload   = Event_init;
/** @type {Function|null} */
onunload = Event_kill;

/**
 * @param {Event=} e
 * @return {*}
 */
function Event_init( e ){
    var ret;

    if( Event_tempOnLoad ) ret = Event_tempOnLoad( e );

    Event_dispatch( p_loadEventCallbacks, e );
    onload = p_emptyFunction;
    p_loadEventCallbacks = Event_init = Event_tempOnLoad = onload = null;

    return ret;
};

// Re: onLoad doesn't work with Safari?
// http://lists.apple.com/archives/web-dev/2003/Oct/msg00036.html
if( p_WebKit <= 419.3 ){ // Safari 2-
    p_setTimer( _Event_onloadDoesnotWorkSafari );
};
    function _Event_onloadDoesnotWorkSafari(){
        if( Event_init ){
            if( document.readyState === 'loaded' || document.readyState === 'complete' ){
                Event_init();
            } else {
                p_setTimer( _Event_onloadDoesnotWorkSafari );
            };
        };
    };

/**
 * @param {Event=} e
 * @return {*}
 */
function Event_kill( e ){
    var ret;

    if( Event_tempOnUnload ) ret = Event_tempOnUnload( e );

    Event_dispatch( Event_unloadEventCallbacks, e );

    onunload = p_emptyFunction;
    return ret;
};