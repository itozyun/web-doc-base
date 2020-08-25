var DebugLogger_elm,
    DebugLogger_logsBeforeLoad = [];

if( WEB_DOC_BASE_DEFINE_DEBUG ){
    g_onreachEndCallbacks.push(
        function(){
            g_listenLoadEvent(function(){
                if( WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID ){
                    DebugLogger_elm = DOM_getElementById( WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID );
                    if( !DebugLogger_elm ){
                        alert( '#' + WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID + ' not found!' );
                    };
                };
                if( DebugLogger_elm ){
                    g_DebugLogger.log = function( text ){
                        DOM_createThenAdd( DebugLogger_elm, 'P', null, null, text );
                    };
                } else if( window.console ){
                    g_DebugLogger.log = console.log;
                };

                while( DebugLogger_logsBeforeLoad.length ){
                    g_DebugLogger.log( DebugLogger_logsBeforeLoad.shift() );
                };
            });
        }
    );
    g_DebugLogger.log = function( text ){
        DebugLogger_logsBeforeLoad.push( text );
    };
};