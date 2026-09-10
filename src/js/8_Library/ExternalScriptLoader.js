/** ===========================================================================
 * export to packageGlobal
 */
p_canUseJSONPOnlyInIframe = p_Gecko && ua.conpare( p_engineVersion, '0.9' ) <= 0; // Gecko ~0.9

p_canUseDynamicExternalScript = !( p_Presto < 7.2 || p_canUseJSONPOnlyInIframe ); // Gecko 0.9.1+, Opera 7.2+, Other Browsers

/**
 * @param {string} url
 * @param {boolean} opt_async */
p_loadExternalScript = function( url, opt_async ){
    if( ExternalScriptLoader_useDocumentWrite ){ 
        if( DEFINE_WEB_DOC_BASE__DEBUG && !p_loadEventCallbacks ){
            Debug.error( '[DynamicScvriptLoader] Document already loaded! ' + url );
        } else {
            document.write( '<script src="' + url + '"><' + '/script>' );
        };
    } else if( !p_loadEventCallbacks && !ExternalScriptLoader_URL_LIST.length ){
        ExternalScriptLoader_load( url, opt_async );
    } else {
        ExternalScriptLoader_URL_LIST.push( url, opt_async );
    };
};

/** @param {string} url */
p_setExternalScriptIsLoaded = function( url ){
    if( ExternalScriptLoader_useDocumentWrite ){
        Debug.log( '[DynamicScvriptLoader] ' + url + ' loaded.' );
    } else if( !DEFINE_WEB_DOC_BASE__DEBUG || url === ExternalScriptLoader_loadingScriptURL ){
        ExternalScriptLoader_load( ExternalScriptLoader_URL_LIST.shift(), ExternalScriptLoader_URL_LIST.shift() );
    } else {
        Debug.error( url + ' <> ' + ExternalScriptLoader_loadingScriptURL );
    };
};

/** ===========================================================================
 * private
 */
var ExternalScriptLoader_useDocumentWrite     = !p_canUseDynamicExternalScript;
var ExternalScriptLoader_useRewriteSourceHack = p_canUseDynamicExternalScript && p_Presto < 7.5;
var ExternalScriptLoader_loadingScriptURL;
var ExternalScriptLoader_URL_LIST;

if( !ExternalScriptLoader_useDocumentWrite ){
    ExternalScriptLoader_URL_LIST = [];

    if( ExternalScriptLoader_useRewriteSourceHack ){
        p_noRemoveScriptTag = true;
    };

    p_listenLoadEvent(
        function(){
            ExternalScriptLoader_load( ExternalScriptLoader_URL_LIST.shift(), ExternalScriptLoader_URL_LIST.shift() );
        }
    );

    var ExternalScriptLoader_load = function( url, opt_async ){
        ExternalScriptLoader_loadingScriptURL = url;
    
        if( url ){
            if( ExternalScriptLoader_useRewriteSourceHack ){
                p_scripts[ 0 ].src = url;
            } else {
                p_DOM_insertElement( p_head, 'script', { src : url, async : !!opt_async } );
            };
        };
    };
};