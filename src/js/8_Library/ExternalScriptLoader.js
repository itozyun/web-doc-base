/** ===========================================================================
 * export to packageGlobal
 */
p_canUseJSONPOnlyInIframe = p_Gecko && ua.conpare( p_engineVersion, '0.9' ) <= 0; // Gecko ~0.9

p_canUseDynamicExternalScript = !( p_Presto < 7.2 || p_canUseJSONPOnlyInIframe ); // Gecko 0.9.1+, Opera 7.2+, Other Browsers

/** @param {string} url */
p_loadExternalScript = function( url ){
    if( ExternalScriptLoader_useDocumentWrite ){
        if( !ExternalScriptLoader_loaded ){
            document.write( '<script src="' + url + '"><' + '/script>' );
        } else if( DEFINE_WEB_DOC_BASE__DEBUG ){
            Debug.error( '[DynamicScvriptLoader] Document already loaded! ' + url );
        };
    } else if( ExternalScriptLoader_loaded && !ExternalScriptLoader_URL_LIST.length ){
        ExternalScriptLoader_load( url );
    } else {
        ExternalScriptLoader_URL_LIST.push( url );
    };
};

/** @param {string} url */
p_setExternalScriptIsLoaded = function( url ){
    if( ExternalScriptLoader_useDocumentWrite ){
        Debug.log( '[DynamicScvriptLoader] ' + url + ' loaded.' );
    } else if( !DEFINE_WEB_DOC_BASE__DEBUG || url === ExternalScriptLoader_loadingScriptURL ){
        ExternalScriptLoader_load( ExternalScriptLoader_URL_LIST.shift() );
    } else {
        Debug.error( url + ' <> ' + ExternalScriptLoader_loadingScriptURL );
    };
};

/** ===========================================================================
 * private
 */
var ExternalScriptLoader_useDocumentWrite     = !p_canUseDynamicExternalScript;
var ExternalScriptLoader_useRewriteSourceHack = p_canUseDynamicExternalScript && p_Presto < 7.5;
var ExternalScriptLoader_loaded;
var ExternalScriptLoader_loadingScriptURL;
var ExternalScriptLoader_URL_LIST;

if( ExternalScriptLoader_useDocumentWrite ){
    p_listenLoadEvent(
        function(){
            ExternalScriptLoader_loaded = true;
        }
    );
} else {
    p_canUseDynamicExternalScript = true;
    ExternalScriptLoader_URL_LIST = [];

    if( ExternalScriptLoader_useRewriteSourceHack ){
        p_noRemoveScriptTag = true;
    };

    p_listenLoadEvent(
        function(){
            ExternalScriptLoader_loaded = true;
    
            ExternalScriptLoader_load( ExternalScriptLoader_URL_LIST.shift() );
        }
    );

    var ExternalScriptLoader_load = function( url ){
        ExternalScriptLoader_loadingScriptURL = url;
    
        if( url ){
            if( ExternalScriptLoader_useRewriteSourceHack ){
                p_scripts[ 0 ].src = url;
            } else {
                p_DOM_insertElement( p_head, 'script', { src : url } );
            };
        };
    };
};