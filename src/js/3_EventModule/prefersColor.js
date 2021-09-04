/** ===========================================================================
 * export to packageGlobal
 */
p_listenPrefersColorChange = function( callback ){
    Event_prefersColorChangeEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @type {Array<Function>} */
var Event_prefersColorChangeEventCallbacks = []; 

if( m_matchMedia ){
    m_matchMedia( 'only screen and (prefers-color-scheme:dark)' ).addListener(
        function( mediaQueryList ){
            m_lazyDispatchEvent( Event_prefersColorChangeEventCallbacks, mediaQueryList.matches );
        }
    );
};