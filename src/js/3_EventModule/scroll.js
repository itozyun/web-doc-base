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
    Event_tempOnScroll         = window.onscroll,
    Event_lastScrollY          = 0;

onscroll = function( e ){
    var ret;

    if( Event_tempOnScroll ) ret = Event_tempOnScroll( e );

    if( !Event_init ){
        Event_dispatch( Event_scrollEventCallbacks );
    };
    return ret;
};

if( g_Gecko < 1 || ( 1.2 <= g_Gecko && g_Gecko < 1.8 ) || g_Presto <= 7.2 ){
    LoopTimer_set(
        function(){
            var scrollY = window.scrollY || g_body.scrollTop;

            if( Event_lastScrollY !== scrollY ){
                // Gecko 0.9.4.1 scroll event 無し!
                // document.title = window.pageYOffset || g_body.scrollTop || 'scroll';
                Event_lastScrollY = scrollY;
                onscroll();
            };
        }
    );
};

g_listenUnloadEvent(
    function(){
        onscroll = Event_tempOnScroll = g_emptyFunction;
    }
);