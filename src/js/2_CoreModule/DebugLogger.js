if( WEB_DOC_BASE_DEFINE_DEBUG ){
    /**
     * @param {string} text
     */
    Debug.log = function( text ){
        _Debug_logsBeforeLoad.push( text );
    };
};