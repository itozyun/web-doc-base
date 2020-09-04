/** ===========================================================================
 * export to packageGlobal
 */
g_listenPrintEvent = function( callback ){
    Event_printEventCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_printEventCallbacks = [];

// https://developer.mozilla.org/ja/docs/Web/API/WindowEventHandlers/onbeforeprint
if( window.onbeforeprint ){
    onbeforeprint = function(){
        Event_dispatch( Event_printEventCallbacks, true );
    };
    onafterprint  = function(){
        Event_dispatch( Event_printEventCallbacks, false );
    };
    g_listenUnloadEvent(
        function(){
            onbeforeprint = onafterprint = g_emptyFunction;
        }
    );
} else if( Event_matchMedia ){
    Event_matchMedia( 'print' ).addListener(
        function( mediaQueryList ){
            Event_dispatch( Event_printEventCallbacks, mediaQueryList.matches );
        }
    );
} else {
    g_printEventDisabled = true;
};