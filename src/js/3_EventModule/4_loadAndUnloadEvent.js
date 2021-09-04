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
 * export to moduleGlobal
 */
m_initEventHandler = function( e ){
    p_removeEventListener( window, 'load', m_initEventHandler );
    m_initEventHandler = null;

    m_dispatchEvent( p_loadEventCallbacks, e );
};

/** ===========================================================================
 * private
 */
/** @type {Array<Function>} */
var Event_unloadEventCallbacks = [];

// Re: onLoad doesn't work with Safari?
// http://lists.apple.com/archives/web-dev/2003/Oct/msg00036.html
if( p_WebKit <= 419.3 ){ // Safari 2-
    p_setTimer( _Event_onloadDoesnotWorkSafari );
} else {
    p_addEventListener( window, 'load', m_initEventHandler );
};
    function _Event_onloadDoesnotWorkSafari(){
        if( m_initEventHandler ){
            var readyState = document.readyState;

            if( readyState === 'loaded' || readyState === 'complete' ){
                m_initEventHandler();
            } else {
                p_setTimer( _Event_onloadDoesnotWorkSafari );
            };
        };
    };

p_addEventListener( window, 'unload', Event_unloadEventHandler );

/**
 * @param {Event=} e
 * @return {*}
 */
function Event_unloadEventHandler( e ){
    m_dispatchEvent( Event_unloadEventCallbacks, e );
};