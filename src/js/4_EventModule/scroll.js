/** ===========================================================================
 * export to packageGlobal
 */
p_listenScrollEvent = function( callback ){
    Event_scrollEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @const {!TypedefCallbackList} */
var  Event_scrollEventCallbacks = [];

/** @type {boolean} */
var Event_NO_SCROLL_EVENT = p_Gecko < 1 || ( 1.2 <= p_Gecko && p_Gecko < 1.8 ) || p_Presto <= 7.2;
/** @type {number} */
var  Event_lastScrollY;

/**
 * @param {!Event=} e
 */
function Event_scrollEventHandler( e ){
    if( !p_loadEventCallbacks ){
        m_dispatchEvent( Event_scrollEventCallbacks, e );
    };
};

if( Event_NO_SCROLL_EVENT ){
    p_setLoopTimer(
        function(){
            var scrollY = window.pageYOffset;

            if( Event_lastScrollY !== scrollY ){
                // document.title = scrollY;
                Event_lastScrollY = scrollY;
                Event_scrollEventHandler(
                    /** @type {!Event} */ ({
                        type            : 'scroll',
                        cancelable      : false,
                        stopPropagation : p_emptyFunction,
                        preventDefault  : p_emptyFunction
                    })
                );
            };
        }
    );
} else {
    p_addEventListener( window, 'scroll', Event_scrollEventHandler, { passive : true } );
};

p_listenUnloadEvent(
    function(){
        if( !Event_NO_SCROLL_EVENT ){
            p_removeEventListener( window, 'scroll', Event_scrollEventHandler, { passive : true } );
        };
    }
);