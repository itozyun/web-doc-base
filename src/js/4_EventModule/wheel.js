// https://developer.mozilla.org/ja/docs/DOM/DOM_event_reference/mousewheel
// TODO axis
// https://w3g.jp/blog/tools/wheelevent_crossbrowser
// ホイール系イベント2014年版クロスブラウザ

/** ===========================================================================
 * export to packageGlobal
 * 
 * @param {!Element} elm
 * @param {!function(!Event):void} callback
 */
 p_listenWheelEvent = function( elm, callback ){
    if( WheelEvent_USE_WHEEL ){
        p_addEventListener( elm, 'wheel', callback, { passive : false } );
    } else if( WheelEvent_USE_MOUSEWHEEL ){
        p_addEventListener( elm, 'mousewheel', callback, false );
    } else if( WheelEvent_USE_MOZMOUSEPIXELSCROLL ){
        p_addEventListener( elm, 'MozMousePixelScroll', callback, false );
    } else if( WheelEvent_USE_DOMMOUSESCROLL ){
        for( var pairs = WheelEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; ++i ){
            if( pairs[ i ] === elm && pairs[ i + 1 ] === callback ){
                return;
            };
        };
        if( !pairs.length ){
            p_addEventListener( document, 'DOMMouseScroll', WheelEvent_onDOMMouseScroll, false );
        };
        pairs.push( elm, callback );
    };
};

/**
 * @param {!Element} elm
 * @param {!function(!Event):void} callback
 */
p_unlistenWheelEvent = function( elm, callback ){
    if( WheelEvent_USE_WHEEL ){
        p_removeEventListener( elm, 'wheel', callback, { passive : false } );
    } else if( WheelEvent_USE_MOUSEWHEEL ){
        p_removeEventListener( elm, 'mousewheel', callback, false );
    } else if( WheelEvent_USE_MOZMOUSEPIXELSCROLL ){
        p_removeEventListener( elm, 'MozMousePixelScroll', callback, false );
    } else if( WheelEvent_USE_DOMMOUSESCROLL ){
        for( var pairs = WheelEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS, i = 0, l = pairs.length; i < l; ++i ){
            if( pairs[ i ] === elm && pairs[ i + 1 ] === callback ){
                pairs.splice( i, 2 );
                if( !pairs.length ){
                    p_removeEventListener( document, 'DOMMouseScroll', WheelEvent_onDOMMouseScroll, false );
                };
                break;
            };
        };
    };
};

/** ===========================================================================
 * private
 */
// https://github.com/mdn/browser-compat-data/blob/d22e1912155eb29056d254213b1fddbd7fc05391/api/Element.json#L9209
var WheelEvent_USE_WHEEL               = 9 <= p_Trident || p_EdgeHTML || 17 <= p_Gecko || p_Goanna || 31 <= p_Chromium || 537.7 <= p_WebKit /* Safari 7+ */;

// https://github.com/mdn/browser-compat-data/blob/d22e1912155eb29056d254213b1fddbd7fc05391/api/Element.json#L5746
var WheelEvent_USE_MOUSEWHEEL          = 6 <= p_Trident || p_EdgeHTML || 9 <= p_Presto || p_Chromium || 522 <= p_WebKit /* Safari 3+ */ || p_SafariMobile;

// https://github.com/mdn/browser-compat-data/blob/d22e1912155eb29056d254213b1fddbd7fc05391/api/Element.json#L120
var WheelEvent_USE_MOZMOUSEPIXELSCROLL = p_FirefoxGte35;

// https://github.com/mdn/browser-compat-data/blob/d22e1912155eb29056d254213b1fddbd7fc05391/api/Element.json#L86
var WheelEvent_USE_DOMMOUSESCROLL      = p_Gecko && 0 <= ua.conpare( p_engineVersion, '0.9.7' ) && !p_FirefoxGte35;

if( WheelEvent_USE_DOMMOUSESCROLL ){
    var WheelEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS = [];
    /**
     * @param {!Event=} e
     */
    var WheelEvent_onDOMMouseScroll = function( e ){
        var pairs     = WheelEvent_TARGET_ELEMENT_AND_CALLBACK_PIARS,
            elmTarget = e.target,
            elmCurrentTarget;

        for( var i = 0, l = pairs.length; i < l; ++i ){
            elmCurrentTarget = pairs[ i ];
            if( p_DOM_contains( /** @type {!Element} */ (elmCurrentTarget), /** @type {!Element} */ (elmTarget) ) ){
                pairs[ i + 1 ].call( elmCurrentTarget, e );
            };
        };
    };
};
