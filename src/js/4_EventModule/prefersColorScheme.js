/** ===========================================================================
 * export to packageGlobal
 */
p_listenPrefersColorSchemeChange = function( callback ){
    if( Event_prefersColorSchemeChangeEventCallbacks ){
        Event_prefersColorSchemeChangeEventCallbacks.push( callback );
    };
};

/** ===========================================================================
 * private
 */
/** @type {Array<Function>|undefined} */
var Event_prefersColorSchemeChangeEventCallbacks = []; 

if( m_matchMedia && ( m_matchMedia( '(prefers-color-scheme:light)' ).matches || m_matchMedia( '(prefers-color-scheme:dark)' ).matches ) ){
    m_initMediaQueryList( '(prefers-color-scheme:dark)',
        function( mediaQueryList ){
            Debug.log( '(prefers-color-scheme:dark):' + mediaQueryList.matches );
            m_lazyDispatchEvent( /** @type {Array<Function>} */ (Event_prefersColorSchemeChangeEventCallbacks), mediaQueryList.matches );
        }
    );
} else {
    Event_prefersColorSchemeChangeEventCallbacks = undefined;
};