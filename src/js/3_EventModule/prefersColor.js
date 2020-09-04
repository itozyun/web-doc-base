/** ===========================================================================
 * export to packageGlobal
 */
g_listenPrefersColorChange = function( callback ){
    Event_prefersColorChangeEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_prefersColorChangeEventCallbacks = []; 

if( Event_matchMedia ){
    Event_matchMedia( 'only screen and (prefers-color-scheme: dark)' ).addListener(
        function( mediaQueryList ){
            Event_lazyDispatch( Event_prefersColorChangeEventCallbacks, mediaQueryList.matches );
        }
    );
};