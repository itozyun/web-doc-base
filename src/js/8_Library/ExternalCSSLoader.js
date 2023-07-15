/** ===========================================================================
 * export to packageGlobal
 */

/**
 * 
 * @param {string} url 
 * @param {!function(boolean)} onCompleteCallback
 * @param {string} testIdAndClassName
 * @param {!HTMLLinkElement=} opt_elmLink 
 */
p_loadExternalCSS = function( url, onCompleteCallback, testIdAndClassName, opt_elmLink ){
    var elmLink = opt_elmLink || p_DOM_insertElement(
            p_head, 'link',
            {
                type  : 'text/css',
                rel   : 'stylesheet'
            }
        ),
        widthBeforeCSSLoaded;

    if( ExternalCSSLoader_mesure ){
        ExternalCSSLoader_elmTest = p_DOM_getElementById( testIdAndClassName );
        
        if( !ExternalCSSLoader_elmTest ){
            ExternalCSSLoader_elmTest = p_DOM_insertElement(
                    p_body, 'div',
                    {
                        'aria-hidden' : 'true',
                        className     : testIdAndClassName
                    }
                );
        } else {
            p_DOM_removeAttribute( ExternalCSSLoader_elmTest, 'id' );
        };
        widthBeforeCSSLoaded = ExternalCSSLoader_elmTest.offsetWidth;
        Debug.log( '[CSS Loader] widthBeforeCSSLoaded = ' + widthBeforeCSSLoaded );
        p_DOM_setAttribute( ExternalCSSLoader_elmTest, 'id', testIdAndClassName );
    };

    ExternalCSSLoader_main( elmLink, url, onCompleteCallback, widthBeforeCSSLoaded );
    return elmLink;
};

/** ===========================================================================
 * private
 */
var ExternalCSSLoader_INTERVAL_TIME = 999;

var ExternalCSSLoader_UNSUPPORTED                           = p_Gecko && ua.conpare( p_engineVersion, '0.9.1' ) < 0;
var ExternalCSSLoader_USE_ONLOAD_THEN_MESURE                = 11 <= p_Trident ||
                                                              p_EdgeHTML ||
                                                              ( 9 <= p_Presto && p_Presto < 9.5 );
var ExternalCSSLoader_USE_ONREADYSTATECHANGE_THEN_MESURE    = p_Trident < 11;
var ExternalCSSLoader_USE_ADDEVENTLISTENER_LOAD_THEN_MESURE = 7.2 <= p_Presto && p_Presto < 7.5;
var ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE          = ( p_Gecko < 26 && !ExternalCSSLoader_UNSUPPORTED ) || // 26 は暫定
                                                              p_Chromium < 19 ||
                                                              p_AOSP < 4.3 || // 多分
                                                              p_Samsung < 2 || // 暫定
                                                              p_WebKit < 536 || // Safari 6未満
                                                              p_SafariMobile < 6 ||
                                                              ( 7 <= p_Presto && p_Presto < 9 && !ExternalCSSLoader_USE_ADDEVENTLISTENER_LOAD_THEN_MESURE );
var ExternalCSSLoader_GODD                                  = !ExternalCSSLoader_UNSUPPORTED &&
                                                              !ExternalCSSLoader_USE_ONLOAD_THEN_MESURE &&
                                                              !ExternalCSSLoader_USE_ONREADYSTATECHANGE_THEN_MESURE &&
                                                              !ExternalCSSLoader_USE_ADDEVENTLISTENER_LOAD_THEN_MESURE &&
                                                              !ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE;

var ExternalCSSLoader_elmTest;

/**
 * @type {function(!HTMLLinkElement, string, !function(boolean), number=)}
 */
var ExternalCSSLoader_main =
    ExternalCSSLoader_GODD ?
        function( elmLink, url, onCompleteCallback, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] onload + onerror' );

            elmLink.onload  = onSuccess;
            elmLink.onerror = onError;
            elmLink.href    = url;

            function onSuccess(){
                onCompleteCallback( true );
                elmLink.onload = elmLink.onerror = null;
            };
            function onError(){
                onCompleteCallback( false );
                elmLink.onload = elmLink.onerror = null;
            };
        } :
    ExternalCSSLoader_USE_ONLOAD_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] onload + mesure' );

            elmLink.onload  = onComplete;
            elmLink.href    = url;

            function onComplete(){
                !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( ExternalCSSLoader_elmTest );
                elmLink.onload = ExternalCSSLoader_elmTest = null;
                onCompleteCallback( /** @type {!function(number):boolean} */ (ExternalCSSLoader_mesure)( /** @type {number} */ (widthBeforeCSSLoaded) ) );
            };
        } :
    ExternalCSSLoader_USE_ONREADYSTATECHANGE_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] onreadystatechange + onerror' );

            elmLink.onreadystatechange = function onReadyStateChange(){
                if( elmLink.readyState === 'complete' ){
                    elmLink.onReadyStateChange = p_emptyFunction;
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( ExternalCSSLoader_elmTest );
                    ExternalCSSLoader_elmTest = null;
                    onCompleteCallback( /** @type {!function(number):boolean} */ (ExternalCSSLoader_mesure)( /** @type {number} */ (widthBeforeCSSLoaded) ) );
                };
            };
            elmLink.href = url;
        } :
    ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE || ExternalCSSLoader_USE_ADDEVENTLISTENER_LOAD_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, widthBeforeCSSLoaded ){
            var img = new Image, limit;

            if( ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE ){
                Debug.log( '[CSS Loader] img.onerror + mesure' );
                img.onerror = onComplete;
            } else {
                Debug.log( '[CSS Loader] img.addEventListener("load") + mesure' );
                img.addEventListener( 'load', onComplete, false );
            };

            img.src = url;

            function onComplete(){
                limit = p_getTimestamp() + ExternalCSSLoader_INTERVAL_TIME;
                p_setTimer( onTimer, 0, 99 );
                if( ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE ){
                    img.onerror = null;
                } else {
                    img.removeEventListener( 'load', onComplete, false );
                };
                img = null;
                elmLink.href = url;
            };

            function onTimer(){
                if( /** @type {!function(number):boolean} */ (ExternalCSSLoader_mesure)( /** @type {number} */ (widthBeforeCSSLoaded) ) ){
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( ExternalCSSLoader_elmTest );
                    ExternalCSSLoader_elmTest = null;
                    onCompleteCallback( true );
                } else if( p_getTimestamp() < limit ){
                    p_setTimer( onTimer, 0, 99 );
                } else {
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( ExternalCSSLoader_elmTest );
                    ExternalCSSLoader_elmTest = null;
                    onCompleteCallback( false );
                };
            };
        } :
        function( elmLink, url, onCompleteCallback, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] UNSUPPORTED' );

            p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), false );
        };

/** @type {function(number):boolean|boolean} */
var ExternalCSSLoader_mesure = !ExternalCSSLoader_GODD && !ExternalCSSLoader_UNSUPPORTED &&
        function( widthBeforeCSSLoaded ){

            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[CSS Loader] ExternalCSSLoader_elmTest.offsetWidth = ' + ExternalCSSLoader_elmTest.offsetWidth );
            };
            return ExternalCSSLoader_elmTest.offsetWidth !== widthBeforeCSSLoaded;
        };
