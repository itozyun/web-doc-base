/** ===========================================================================
 * export to packageGlobal
 */
g_listenCssAvailabilityChange = function( callback ){
    Event_cssAvailabilityCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_cssAvailabilityCallbacks = []; 

function Event_cssAvailability_check(){
    var _cssAvailability = Event_elmTest.offsetWidth === 9;
    
    if( g_cssAvailability !== _cssAvailability ){
        Event_lazyDispatch( Event_cssAvailabilityCallbacks, g_cssAvailability = _cssAvailability );
    };
};

g_listenLoadEvent(
    function(){
        Event_cssAvailability_check();
        g_setLoopTimer( Event_cssAvailability_check );
    }
);