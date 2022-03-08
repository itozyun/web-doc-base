/** ===========================================================================
 * export to packageGlobal
 */
p_listenPrintEvent = function( callback ){
    if( !p_printEventDisabled ){
        Event_printEventCallbacks.push( callback );
    };
};

/** ===========================================================================
 * private
 */
/** @type {Array<Function>} */
var Event_printEventCallbacks = [];

// https://developer.mozilla.org/ja/docs/Web/API/WindowEventHandlers/onbeforeprint
if( window.onbeforeprint ){
    onbeforeprint = function(){
        m_dispatchEvent( Event_printEventCallbacks, true );
    };
    onafterprint  = function(){
        m_dispatchEvent( Event_printEventCallbacks, false );
    };
    p_listenUnloadEvent(
        function(){
            onbeforeprint = onafterprint = p_emptyFunction;
        }
    );
} else if( m_matchMedia ){
    m_matchMedia( 'print' ).addListener(
        function( mediaQueryList ){
            m_dispatchEvent( Event_printEventCallbacks, mediaQueryList.matches );
        }
    );
} else {
    p_printEventDisabled = true;
};