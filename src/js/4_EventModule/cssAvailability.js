/** ===========================================================================
 * export to packageGlobal
 */
p_listenCssAvailabilityChange = function( callback ){
    p_cssAvailabilityCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
function Event_cssAvailability_check(){
    var _cssAvailability = m_elmTest.offsetWidth === 9;
    
    if( p_cssAvailability !== _cssAvailability ){
        m_lazyDispatchEvent( p_cssAvailabilityCallbacks, p_cssAvailability = _cssAvailability );
        Debug.log( 'p_cssAvailability:' + p_cssAvailability );
    };
};

p_listenLoadEvent(
    function(){
        Event_cssAvailability_check();
        p_setLoopTimer( Event_cssAvailability_check );
    }
);