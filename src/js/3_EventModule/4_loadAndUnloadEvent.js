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

var Event_init;

// Re: onLoad doesn't work with Safari?
// http://lists.apple.com/archives/web-dev/2003/Oct/msg00036.html
if( p_WebKit <= 419.3 ){ // Safari 2-
    p_setTimer( _Event_onloadDoesnotWorkSafari );
} else {
    p_addEventListener( window, 'load', Event_init );
};
    function _Event_onloadDoesnotWorkSafari(){
        if( Event_init ){
            var readyState = document.readyState;

            if( readyState === 'loaded' || readyState === 'complete' ){
                Event_init();
            } else {
                p_setTimer( _Event_onloadDoesnotWorkSafari );
            };
        };
    };

/** @type {Function|null} */
onload = Event_init = function Event_init( e ){
    var ret;

    p_removeEventListener( window, 'load', Event_init );
    Event_init = null;

    if( Event_tempOnLoad ) ret = Event_tempOnLoad( e );

    Event_dispatch( p_loadEventCallbacks, e );

    p_loadEventCallbacks.length = 0; // 複数回呼ばれる!

    return ret;
};

/** @type {Function|null} */
onunload = Event_kill;

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