/** ===========================================================================
 * export to packageGlobal
 */
g_listenScrollEvent = function( callback ){
    Event_scrollEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_scrollEventCallbacks = [],
    Event_tempOnScroll         = window.onscroll;

onscroll = function( e ){
    var ret;

    if( Event_tempOnScroll ) ret = Event_tempOnScroll( e );

    if( !Event_init ){
        Event_dispatch( Event_scrollEventCallbacks );
    };
    return ret;
};

g_listenUnloadEvent(
    function(){
        onscroll = Event_tempOnScroll = g_emptyFunction;
    }
);