if( 
    (
        !p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Gecko ) &&
        !p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident ) &&
        !p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile )
    ) ||
    1 <= p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Gecko ) ||
    5.5 <= ( p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident ) || p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) )
){
    p_listenLoadEvent(
        function(){
            if( p_cssAvailability ){
                prettyPrint();
                return true;
            };
        }
    );
};