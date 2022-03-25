if( DEFINE_WEB_DOC_BASE__DEBUG ){
    /**
     * @param {string} text
     */
    Debug.log = function( text ){
        _p_Debug_logsBeforeLoad.push( text );
    };
    /**
     * @param {string} text
     */
    Debug.error = function( text ){
        _p_Debug_errorsBeforeLoad.push( text );
    };
};