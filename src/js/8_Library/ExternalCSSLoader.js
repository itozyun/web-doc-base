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
        elmTest, widthBeforeCSSLoaded;

    if( ExternalCSSLoader_mesure ){
        elmTest = /** @type {!HTMLDivElement|undefined} */ (p_DOM_getElementById( testIdAndClassName ));
        
        if( !elmTest ){
            elmTest = /** @type {!HTMLDivElement|undefined} */ (p_DOM_insertElement(
                    p_body, 'div',
                    {
                        'aria-hidden' : 'true',
                        className     : testIdAndClassName
                    }
                ));
        } else {
            p_DOM_removeAttribute( elmTest, 'id' );
        };
        widthBeforeCSSLoaded = elmTest.offsetWidth;
        Debug.log( '[CSS Loader] widthBeforeCSSLoaded = ' + widthBeforeCSSLoaded );
        p_DOM_setAttribute( elmTest, 'id', testIdAndClassName );
    };

    ExternalCSSLoader_main( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded );
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
var ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE          = ( p_Gecko < 9 && !ExternalCSSLoader_UNSUPPORTED ) ||
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

/**
 * @type {function(!HTMLLinkElement, string, !function(boolean), !HTMLDivElement=, number=)}
 */
var ExternalCSSLoader_main =
    ExternalCSSLoader_GODD ?
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] onload + onerror' );

            elmLink.onload  = onSuccess;
            elmLink.onerror = onError;
            elmLink.href    = url;

            function onSuccess(){
                elmLink.onload = elmLink.onerror = null;
                p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), true );
            };
            function onError(){
                elmLink.onload = elmLink.onerror = null;
                p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), false );
            };
        } :
    ExternalCSSLoader_USE_ONLOAD_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] onload + mesure' );

            elmLink.onload = onComplete;
            elmLink.href   = url;

            function onComplete(){
                p_setTimer( /** @type {function(*=)} */ (onCompleteCallback),
                    /** @type {!function(!HTMLDivElement, number):boolean} */ (ExternalCSSLoader_mesure)(
                        /** @type {!HTMLDivElement} */ (elmTest),
                        /** @type {number}          */ (widthBeforeCSSLoaded)
                    )
                );
                !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( /** @type {!HTMLElement} */ (elmTest) );
                elmLink.onload = elmTest = null;
            };
        } :
    ExternalCSSLoader_USE_ONREADYSTATECHANGE_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] onreadystatechange + onerror' );

            elmLink.onreadystatechange = function onReadyStateChange(){
                if( elmLink.readyState === 'complete' ){
                    p_setTimer( /** @type {function(*=)} */ (onCompleteCallback),
                        /** @type {!function(!HTMLDivElement, number):boolean} */ (ExternalCSSLoader_mesure)(
                            /** @type {!HTMLDivElement} */ (elmTest),
                            /** @type {number}          */ (widthBeforeCSSLoaded)
                        )
                    );
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( /** @type {!HTMLElement} */ (elmTest) );
                    elmTest = null;
                    elmLink.onReadyStateChange = p_emptyFunction;
                };
            };
            elmLink.href = url;
        } :
    ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE || ExternalCSSLoader_USE_ADDEVENTLISTENER_LOAD_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded ){
            var img = new Image,
                timerID = p_setTimer( /** @type {function(*=)} */ (onComplete), 0, 5000 ), // (A) Chrome 2 で onComplete に入らなかった為に設置。常に止まる訳ではない
                limit;

            if( ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE ){
                Debug.log( '[CSS Loader] img.onerror + mesure' );
                img.onerror = onComplete;
            } else {
                Debug.log( '[CSS Loader] img.addEventListener("load") + mesure' );
                img.addEventListener( 'load', onComplete, false );
            };

            img.src = elmLink.href = url;

            function onComplete(){
                if( img ){ // (A)
                    timerID = p_clearTimer( timerID );

                    Debug.log( '[CSS Loader] onComplete' );
    
                    limit = p_getTimestamp() + ExternalCSSLoader_INTERVAL_TIME;
                    p_setTimer( onTimer, 0, 99 );
    
                    if( ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE ){
                        img.onerror = null;
                    } else {
                        img.removeEventListener( 'load', onComplete, false );
                    };
                    img = null;
                };
            };

            function onTimer(){
                if( /** @type {!function(!HTMLDivElement, number):boolean} */ (ExternalCSSLoader_mesure)( /** @type {!HTMLDivElement} */ (elmTest), /** @type {number} */ (widthBeforeCSSLoaded) ) ){
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( /** @type {!HTMLElement} */ (elmTest) );
                    elmTest = null;
                    p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), true );
                } else if( p_getTimestamp() < limit ){
                    p_setTimer( onTimer, 0, 99 );
                } else {
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( /** @type {!HTMLElement} */ (elmTest) );
                    elmTest = null;
                    p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), false );
                };
            };
        } :
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded ){
            Debug.log( '[CSS Loader] UNSUPPORTED' );

            p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), false );
        };

/** @type {function(!HTMLDivElement, number):boolean|boolean} */
var ExternalCSSLoader_mesure = !ExternalCSSLoader_GODD && !ExternalCSSLoader_UNSUPPORTED &&
        function( elmTest, widthBeforeCSSLoaded ){

            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[CSS Loader] elmTest.offsetWidth = ' + elmTest.offsetWidth );
            };
            return elmTest.offsetWidth !== widthBeforeCSSLoaded;
        };
