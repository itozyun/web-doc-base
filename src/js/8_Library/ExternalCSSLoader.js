/** ===========================================================================
 * export to packageGlobal
 */

/**
 * 完全に状況を掌握した CSS の遅延読み込みの実現
 * @see https://outcloud.blogspot.com/2023/07/check-css-ready.html
 * 
 * @param {string} url 
 * @param {!function(boolean)} onCompleteCallback
 * @param {string} testIdAndClassName
 * @param {!HTMLLinkElement=} opt_elmLink 
 * @param {number=} opt_intervalTime
 * @return {!HTMLLinkElement|void}
 */
p_loadExternalCSS = function( url, onCompleteCallback, testIdAndClassName, opt_elmLink, opt_intervalTime ){
    if( ExternalCSSLoader_UNSUPPORTED ){
        Debug.log( '[CSS Loader] UNSUPPORTED' );

        p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), false );
        return;
    };

    var elmLink, elmTest, widthBeforeCSSLoaded;

    if( opt_elmLink ){
        // https://github.com/itozyun/web-doc-base/issues/37
        if( p_Chromium && opt_elmLink.href ){
            elmLink = opt_elmLink.cloneNode();
            opt_elmLink.parentNode.insertBefore( elmLink, opt_elmLink );
            p_DOM_remove( opt_elmLink );
        } else {
            elmLink = opt_elmLink;
        };
    } else {
        elmLink = p_DOM_insertElement(
                p_head, 'link',
                {
                    type  : 'text/css',
                    rel   : 'stylesheet'
                }
            );
    };

    if( !ExternalCSSLoader_GODD ){
        elmTest = /** @type {!HTMLDivElement|undefined} */ (p_DOM_getElementById( testIdAndClassName ));

        if( !elmTest ){
            elmTest = /** @type {!HTMLDivElement} */ (p_DOM_insertElement(
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

    /** @type {function(!HTMLLinkElement, string, !function(boolean), !HTMLDivElement=, number=, number=)} */
    (ExternalCSSLoader_main)( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded, opt_intervalTime || ExternalCSSLoader_LOAD_ERROR_LIMIT );
    return elmLink;
};

/** ===========================================================================
 * private
 */
var ExternalCSSLoader_INTERVAL_TIME = 999;

var ExternalCSSLoader_LOAD_ERROR_LIMIT = 5000;

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
 * @type {function(!HTMLLinkElement, string, !function(boolean), !HTMLDivElement=, number=, number=)|undefined}
 */
var ExternalCSSLoader_main =
    ExternalCSSLoader_GODD ?
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded, intervalTime ){
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
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded, intervalTime ){
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
                elmLink.onload = null;
                elmTest = undefined;
            };
        } :
    ExternalCSSLoader_USE_ONREADYSTATECHANGE_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded, intervalTime ){
            Debug.log( '[CSS Loader] onreadystatechange + onerror' );

            elmLink.onreadystatechange = function(){
                if( elmLink.readyState === 'loaded' || elmLink.readyState === 'complete' ){
                    p_setTimer( /** @type {function(*=)} */ (onCompleteCallback),
                        /** @type {!function(!HTMLDivElement, number):boolean} */ (ExternalCSSLoader_mesure)(
                            /** @type {!HTMLDivElement} */ (elmTest),
                            /** @type {number}          */ (widthBeforeCSSLoaded)
                        )
                    );
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( /** @type {!HTMLElement} */ (elmTest) );
                    elmTest = undefined;
                    elmLink.onreadystatechange = p_emptyFunction;
                };
            };
            elmLink.href = url;
        } :
    ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE || ExternalCSSLoader_USE_ADDEVENTLISTENER_LOAD_THEN_MESURE ?
        function( elmLink, url, onCompleteCallback, elmTest, widthBeforeCSSLoaded, intervalTime ){
            var img = new Image,
                timerID = p_setTimer( /** @type {function(*=)} */ (onComplete), 0, intervalTime ), // (A) Chrome 2 で onComplete に入らなかった為に設置。常に止まる訳ではない
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
                    p_setTimer( loopForMeasurement, 0, 99 );
    
                    if( ExternalCSSLoader_USE_IMAGEONERROR_THEN_MESURE ){
                        img.onerror = null;
                    } else {
                        img.removeEventListener( 'load', onComplete, false );
                    };
                    img = undefined;
                };
            };

            function loopForMeasurement(){
                if( /** @type {!function(!HTMLDivElement, number):boolean} */ (ExternalCSSLoader_mesure)( /** @type {!HTMLDivElement} */ (elmTest), /** @type {number} */ (widthBeforeCSSLoaded) ) ){
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( /** @type {!HTMLElement} */ (elmTest) );
                    p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), true );
                    elmTest = onCompleteCallback = undefined;
                } else if( p_getTimestamp() < limit ){
                    p_setTimer( loopForMeasurement, 0, 99 );
                } else {
                    !DEFINE_WEB_DOC_BASE__DEBUG && p_DOM_remove( /** @type {!HTMLElement} */ (elmTest) );
                    p_setTimer( /** @type {function(*=)} */ (onCompleteCallback), false );
                    elmTest = onCompleteCallback = undefined;
                };
            };
        } : undefined;

/** @type {function(!HTMLDivElement, number):boolean|boolean} */
var ExternalCSSLoader_mesure = !ExternalCSSLoader_GODD && !ExternalCSSLoader_UNSUPPORTED &&
        function( elmTest, widthBeforeCSSLoaded ){

            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[CSS Loader] elmTest.offsetWidth = ' + elmTest.offsetWidth );
            };
            return elmTest.offsetWidth !== widthBeforeCSSLoaded;
        };
