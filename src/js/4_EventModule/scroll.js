/** ===========================================================================
 * export to packageGlobal
 */
p_listenScrollEvent = function( callback ){
    Event_scrollEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @type {!Array.<!Function>} */
var  Event_scrollEventCallbacks = [];
/** @type {number} */
var  Event_lastScrollY          = 0;
/** @type {boolean} */
var Event_NO_SCROLL_EVENT       = p_Gecko < 1 || ( 1.2 <= p_Gecko && p_Gecko < 1.8 ) || p_Presto <= 7.2;

/**
 * @param {Event=} e
 */
function Event_scrollEventHandler( e ){
    if( !p_loadEventCallbacks ){
        m_dispatchEvent( Event_scrollEventCallbacks, e );
    };
};

if( Event_NO_SCROLL_EVENT ){
    p_setLoopTimer(
        function(){
            var scrollY = window.scrollY || p_body.scrollTop;

            if( Event_lastScrollY !== scrollY ){
                // Gecko 0.9.4.1 scroll event 無し!
                // document.title = window.pageYOffset || p_body.scrollTop || 'scroll';
                Event_lastScrollY = scrollY;
                Event_scrollEventHandler();
            };
        }
    );
} else {
    p_addEventListener( window, 'scroll', Event_scrollEventHandler );
};

p_listenUnloadEvent(
    function(){
        if( !Event_NO_SCROLL_EVENT ){
            p_removeEventListener( window, 'scroll', Event_scrollEventHandler );
        };
    }
);