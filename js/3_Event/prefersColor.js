var Event_prefersColorChangeEventCallbacks = []; 

if( Event_matchMedia ){
    Event_matchMedia( 'only screen and (prefers-color-scheme: dark)' ).addListener(
        function( mediaQueryList ){
            Event_dispatch( Event_prefersColorChangeEventCallbacks, mediaQueryList.matches );
        }
    );
};

g_Event_listenPrefersColorChange = function( callback ){
    Event_prefersColorChangeEventCallbacks.push( callback );
};