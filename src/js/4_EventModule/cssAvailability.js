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
    var _cssAvailability = m_elmTest.offsetWidth === 9;
    
    if( p_cssAvailability !== _cssAvailability ){
        m_lazyDispatchEvent( Event_cssAvailabilityCallbacks, p_cssAvailability = _cssAvailability );
        Debug.log( 'p_cssAvailability:' + p_cssAvailability );
    };
};

p_listenLoadEvent(
    function(){
        Event_cssAvailability_check();
        p_setLoopTimer( Event_cssAvailability_check );
    }
);