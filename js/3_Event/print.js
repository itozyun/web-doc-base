var Event_printEventCallbacks = [];

// https://developer.mozilla.org/ja/docs/Web/API/WindowEventHandlers/onbeforeprint
if( window.onbeforeprint ){
    onbeforeprint = Event_onBeforePrint;
    onafterprint  = Event_onAfterPrint;
} else if( Event_matchMedia ){
    Event_matchMedia( 'print' ).addListener(
        function( mediaQueryList ){
            Event_dispatch( Event_printEventCallbacks, mediaQueryList.matches );
        }
    );
};

function Event_onBeforePrint(){
    Event_dispatch( Event_printEventCallbacks, true );
};

function Event_onAfterPrint(){
    Event_dispatch( Event_printEventCallbacks, false );
};

g_Event_listenPrintEvent = function( callback ){
    Event_printEventCallbacks.push( callback );
};