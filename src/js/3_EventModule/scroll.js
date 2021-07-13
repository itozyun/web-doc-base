/** ===========================================================================
 * export to packageGlobal
 */
p_listenScrollEvent = function( callback ){
    Event_scrollEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @type {Array<Function>} */
var Event_scrollEventCallbacks = [];

/** @type {Function|null} */
var Event_tempOnScroll         = window.onscroll;
var Event_lastScrollY          = 0;

/**
 * @param {Event=} e
 * @return {*}
 */
onscroll = function( e ){
    var ret;

    if( Event_tempOnScroll ) ret = Event_tempOnScroll( e );

    if( !Event_init ){
        Event_dispatch( Event_scrollEventCallbacks );
    };
    return ret;
};

if( p_Gecko < 1 || ( 1.2 <= p_Gecko && p_Gecko < 1.8 ) || p_Presto <= 7.2 ){
    p_setLoopTimer(
        function(){
            var scrollY = window.scrollY || p_body.scrollTop;

            if( Event_lastScrollY !== scrollY ){
                // Gecko 0.9.4.1 scroll event 無し!
                // document.title = window.pageYOffset || p_body.scrollTop || 'scroll';
                Event_lastScrollY = scrollY;
                onscroll();
            };
        }
    );
};

p_listenUnloadEvent(
    function(){
        onscroll = Event_tempOnScroll = p_emptyFunction;
    }
);