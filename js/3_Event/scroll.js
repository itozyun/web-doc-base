var Event_scrollEventCallbacks = [],
    Event_tempOnScroll     = window.onscroll;

onscroll = function( e ){
    var ret;

    if( Event_tempOnScroll ) ret = Event_tempOnScroll( e );

    if( !Event_init ){
        Event_dispatch( Event_scrollEventCallbacks );
    };
    return ret;
};

g_Event_listenScrollEvent = function( callback ){
    Event_scrollEventCallbacks.push( callback );
};
