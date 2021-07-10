/** ===========================================================================
 * export to packageGlobal
 */
p_listenCssAvailabilityChange = function( callback ){
    Event_cssAvailabilityCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_cssAvailabilityCallbacks = []; 

function Event_cssAvailability_check(){
    var _cssAvailability = Event_elmTest.offsetWidth === 9;
    
    if( p_cssAvailability !== _cssAvailability ){
        Event_lazyDispatch( Event_cssAvailabilityCallbacks, p_cssAvailability = _cssAvailability );
    };
};

p_listenLoadEvent(
    function(){
        Event_cssAvailability_check();
        p_setLoopTimer( Event_cssAvailability_check );
    }
);