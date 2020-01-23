var Event_printEventCallbacks = [];

// https://developer.mozilla.org/ja/docs/Web/API/WindowEventHandlers/onbeforeprint
if( window.onbeforeprint ){
    onbeforeprint = function(){
        Event_dispatch( Event_printEventCallbacks, true );
    };
    onafterprint  = function(){
        Event_dispatch( Event_printEventCallbacks, false );
    };
    g_Event_listenUnloadEvent(
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
};

g_Event_listenPrintEvent = function( callback ){
    Event_printEventCallbacks.push( callback );
};