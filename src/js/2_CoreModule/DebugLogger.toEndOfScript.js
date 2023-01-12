if( DEFINE_WEB_DOC_BASE__DEBUG ){
    p_listenLoadEvent(
        function(){
            var DebugLogger_elm;

            if( DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID ){
                DebugLogger_elm = p_DOM_getElementById( DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID );
                if( !DebugLogger_elm ){
                    alert( '#' + DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID + ' not found!' );
                };
            } else {
                alert( 'No DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID !' );
            };

            if( DebugLogger_elm ){
                Debug.log = function( text ){
                    p_DOM_insertElement( DebugLogger_elm, 'DIV', undefined, text );
                };
                Debug.error = function( text ){
                    p_DOM_insertElement( DebugLogger_elm, 'DIV', { style : { color : 'red' } }, text );
                };
                window.onerror = function( a, b, c ){
                    Debug.error( a+ ', ' + b + ', ' + c );
                    return true;
                };
            } else if( window.console ){
                Debug.log = console.log;
                Debug.error = console.error;
            } else if( p_Presto ){
                Debug.log = p_emptyFunction;
                // http://help.dottoro.com/ljnillej.php
                Debug.error = opera.postError;
            } else {
                Debug.log = Debug.error = p_emptyFunction;
            };

            while( _p_Debug_logsBeforeLoad.length ){
                Debug.log( _p_Debug_logsBeforeLoad.shift() );
            };
            while( _p_Debug_errorsBeforeLoad.length ){
                Debug.error( _p_Debug_errorsBeforeLoad.shift() );
            };
            _p_Debug_logsBeforeLoad = _p_Debug_errorsBeforeLoad = undefined;
        }
    );
};