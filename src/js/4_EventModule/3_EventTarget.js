/** ===========================================================================
 * export to packageGlobal
 */

// DOM Lv2 Event
p_addEventListener    = EventTraget_addEventListener;
p_removeEventListener = EventTraget_removeEventListener;

/** ===========================================================================
 * private
 */

// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
var EventTarget_passiveSupported = !p_Trident && !p_Tasman && (new Function(
        'try{' +
            'var r,o=Object.defineProperty({},"passive",{' +
                'get:function(){r=!0}' +
            '});' +
            'addEventListener("t",o,o);' +
            'removeEventListener("t",o,o);' +
            'return r' +
        '}catch(e){}'
    ))();

/** @const {!Object<string, !Array.<!EventTarget|!function(this:EventTarget, !Event):void|boolean>>} */
var EventTarget_ALL_TRIO        = {};
var EventTarget_USE_ATTACH       = false; // 5 <= p_Trident && p_Trident < 9
var EventTarget_PATCH_OLD_WEBKIT = p_WebKit < 525.13; // Safari <3
var EventTarget_USE_STANDERD     = !EventTarget_PATCH_OLD_WEBKIT && !p_Tasman && p_body.addEventListener;
var EventTarget_busy             = 0;
var EventTarget_LAZY_REMOVALS    = [];
var EventTarget_safariPreventDefault;

/** 1.
 * @param {!EventTarget} eventTarget
 * @param {string} type
 * @param {!function(this:EventTarget, !Event):void} listener
 * @param {!AddEventListenerOptions|boolean=} options
 */
function EventTraget_addEventListener( eventTarget, type, listener, options ){
    if( EventTarget_USE_STANDERD ){
        eventTarget.addEventListener(
            type, listener,
            options ? ( EventTarget_passiveSupported ? options : ( options.capture || options === true ) ) : false
        );
    } else {
        var trioList   = EventTarget_ALL_TRIO[ type ],
            useCapture = !!options === options ? options : options ? !!options.capture : false,
            onType     = 'on' + type,
            i, l, tempCallback;

        if( trioList ){
            for( i = 0, l = trioList.length; i < l; i += 3 ){
                if( trioList[ i ] === eventTarget && trioList[ i + 1 ] === listener && trioList[ i + 2 ] === useCapture ){
                    return;
                };
            };
            trioList.push( eventTarget, listener, useCapture );
        } else {
            trioList = EventTarget_ALL_TRIO[ type ] = [ eventTarget, listener, useCapture ];
        };

        if( EventTarget_USE_ATTACH ){
            eventTarget.attachEvent( onType, EventTraget_dispatchProxy ); // TODO 2度呼ばれた場合?
        } else {
            // DOM0 で追加されていた listener を trioList に加える
            // 実際には js-inline の onload コールバックを EventTarget_ALL_TRIO 配下に移す
            tempCallback = eventTarget[ onType ];
            if( tempCallback !== EventTraget_dispatchProxy ){
                if( typeof tempCallback === 'function' ){
                    trioList.unshift( eventTarget, tempCallback, false );
                };
                eventTarget[ onType ] = EventTraget_dispatchProxy;
            };
        };
    };
};

/** 2.
 * @param {!EventTarget} eventTarget
 * @param {string} type
 * @param {!function(this:EventTarget, !Event):void} listener
 * @param {!AddEventListenerOptions|boolean=} options
 */
function EventTraget_removeEventListener( eventTarget, type, listener, options ){
    if( EventTarget_USE_STANDERD ){
        eventTarget.removeEventListener(
            type, listener,
            options ? ( EventTarget_passiveSupported ? options : ( options.capture || options === true ) ) : false
        );
    } else {
        var trioList   = EventTarget_ALL_TRIO[ type ],
            useCapture = !!options === options ? options : options ? !!options.capture : false,
            onType     = 'on' + type,
            i, l, skipRemoveListener;

        if( trioList ){
            if( EventTarget_busy ){
                EventTarget_LAZY_REMOVALS.push( eventTarget, type, listener, options );
            } else {
                for( i = 0, l = trioList.length; i < l; i += 3 ){
                    if( trioList[ i ] === eventTarget ){
                        if( trioList[ i + 1 ] === listener && trioList[ i + 2 ] === useCapture ){
                            trioList.splice( i, 3 );
                        } else {
                            skipRemoveListener = true;
                        };
                    };
                };
                if( !skipRemoveListener ){
                    if( EventTarget_USE_ATTACH ){
                        eventTarget.detachEvent( onType, EventTraget_dispatchProxy );
                    } else {
                        if( p_Trident ){
                            eventTarget[ onType ] = p_emptyFunction;
                            eventTarget[ onType ] = null; // undefined だと error https://twitter.com/itozyun/status/1501010455007207424
                        } else {
                            delete eventTarget[ onType ];
                        };
                    };
                };
            };
        };
    };
};

/**
 * @this {!EventTarget} = event.currentTarget
 * @param {!Event|void} _e
 */
    function EventTraget_dispatchProxy( _e ){
        var e             = _e || event,
            type          = e.type,
            trioList      = EventTarget_ALL_TRIO[ type ],
            onType        = 'on' + type,
            currentTarget = this,
            i = 0,
            l = trioList.length,
            eventTarget, stopPropagation, listener, lazyRemovals;

        ++EventTarget_busy;

        if( p_Trident < 5 ){
            e = /** @type {!Event} */ ({
                type           : event.type,
                target         : event.srcElement,
             // currentTarget  : currentTarget,
                preventDefault : function(){
                    event.returnValue = false;
                },
                stopPropagation : function(){
                    event.cancelBubble = true;
                }
            });
        } else if( p_Trident ){
            e.target = e.srcElement;
            // e.currentTarget = currentTarget;
            e.preventDefault = function(){
                e.returnValue = false;
            };
            e.stopPropagation = function(){
                e.cancelBubble = true;
            };
        } else if( EventTarget_PATCH_OLD_WEBKIT ){
            e._stopPropagation = e.stopPropagation;
            e.stopPropagation = function(){
                stopPropagation = true;
            };
        };

        for( ; i < l; i += 2 ){
            eventTarget = trioList[ i ];
            if( eventTarget === currentTarget ){
                listener = /** @type {!function(this:EventTarget, !Event):void} */ (trioList[ i + 1 ]);
                if( p_Trident < 5.5 ){ // .apply の polyfill が低速かつ、プロパティを追加するため、こちらを使用する
                    eventTarget[ onType ] = listener;
                    eventTarget[ onType ]( e );
                    eventTarget[ onType ] = EventTraget_dispatchProxy;
                } else {
                    listener.call( eventTarget, e );
                };
            } else if( p_Presto < 7.2 && currentTarget === document && eventTarget === window ){
                /** @type {!function(this:EventTarget, !Event):void} */ (trioList[ i + 1 ]).call( eventTarget, e );
            };
        };

        if( p_Trident ){
            e.preventDefault = e.stopPropagation = p_emptyFunction;
            e.preventDefault = e.stopPropagation = undefined;
            return e.returnValue;
        } else if( EventTarget_PATCH_OLD_WEBKIT ){
            if( e.defaultPrevented ){
                if( e.type === 'click' && e.target.tagName === 'A' && e.target.getAttribute( 'href' ) ){
                    EventTarget_safariPreventDefault = true;
                };
            };
            if( stopPropagation && !EventTarget_safariPreventDefault ){
                e._stopPropagation();
            };
            e._stopPropagation = e.stopPropagation = undefined;
        };

        --EventTarget_busy;
        if( EventTarget_busy === 0 ){
            lazyRemovals = EventTarget_LAZY_REMOVALS;
            while( lazyRemovals.length ){
                EventTraget_removeEventListener( lazyRemovals.shift(), lazyRemovals.shift(), lazyRemovals.shift(), lazyRemovals.shift() );
            };
        };
    };

if( EventTarget_PATCH_OLD_WEBKIT ){
    p_html.addEventListener( 'click',
        function( e ){
            if( EventTarget_safariPreventDefault ){
                EventTarget_safariPreventDefault = false;
                e.preventDefault();
                return false;
            };
        }
    );
};