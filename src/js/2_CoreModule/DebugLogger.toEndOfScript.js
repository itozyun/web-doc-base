if( WEB_DOC_BASE_DEFINE_DEBUG ){
    p_listenLoadEvent(function(){
        var DebugLogger_elm;

        if( WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID ){
            DebugLogger_elm = p_DOM_getElementById( WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID );
            if( !DebugLogger_elm ){
                alert( '#' + WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID + ' not found!' );
            };
        };
        if( DebugLogger_elm ){
            Debug.log = function( text ){
                p_DOM_insertElement( DebugLogger_elm, 'P', null, text );
            };
        } else if( window.console ){
            Debug.log = console.log;
        };

        while( _p_Debug_logsBeforeLoad.length ){
            Debug.log( _p_Debug_logsBeforeLoad.shift() );
        };
    });
};