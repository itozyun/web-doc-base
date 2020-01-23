var Event_cssAvailabilityCallbacks = [],
    Event_cssAvailability; 

function Event_cssAvailability_check(){
    var _cssAvailability = Event_elmTest.offsetWidth === 9;
    
    if( Event_cssAvailability !== _cssAvailability ){
        Event_dispatch( Event_cssAvailabilityCallbacks, Event_cssAvailability = _cssAvailability );
    };
};

g_Event_listenLoadEvent(
    function(){
        Event_cssAvailability_check();
        g_LoopTimer_set( Event_cssAvailability_check );
    }
);

g_Event_listenCssAvailability = function( callback ){
    Event_cssAvailabilityCallbacks.push( callback );
};