/** ===========================================================================
 * export to packageGlobal
 */
p_listenLoadEvent = function( callback ){
    if( DEFINE_WEB_DOC_BASE__DEBUG && !p_loadEventCallbacks ){
        alert( 'Load event has already been dispatched!' );
        return;
    };
    p_loadEventCallbacks.push( callback );
};
p_listenUnloadEvent = function( callback ){
    if( Event_unloadEventCallbacks ){
        Event_unloadEventCallbacks.push( callback );
    };
};

/** ===========================================================================
 * private
 */
/** @type {!function(!Event=)|undefined} */
var Event_onload = function( e ){
    p_removeEventListener( window, 'load', /** @type {!function(!Event)} */ (Event_onload) );
    Event_onload = undefined;

    m_dispatchEvent( /** @type {TypedefCallbackList} */ (p_loadEventCallbacks), e, true );
    p_loadEventCallbacks = undefined;
    if( !DEFINE_WEB_DOC_BASE__DEBUG ){
        p_listenLoadEvent = undefined;
    };
};

/** @type {!function(*=)|undefined} */
var Event_onloadFallbackForLegacySafari;

/** @type {TypedefCallbackList|undefined} */
var Event_unloadEventCallbacks = [];

// Re: onLoad doesn't work with Safari?
//   https://web.archive.org/web/20050418235512/http://lists.apple.com/archives/web-dev/2003/Oct/msg00036.html
if( p_WebKit <= 419.3 ){ // Safari 2-
    Event_onloadFallbackForLegacySafari = function(){
            if( Event_onloadFallbackForLegacySafari ){
                var readyState = document.readyState;

                if( readyState === 'loaded' || readyState === 'complete' ){
                    Event_onloadFallbackForLegacySafari = undefined;
                    Event_onload();
                } else {
                    p_setTimer( /** @type {!function(*=)} */ (Event_onloadFallbackForLegacySafari) );
                };
            };
        };
    p_setTimer( /** @type {!function(*=)} */ (Event_onloadFallbackForLegacySafari) );
} else {
    p_addEventListener( window, 'load', /** @type {!function(!Event)} */ (Event_onload) );
};

// https://web.archive.org/web/20180328040501/http://oogatta.hatenadiary.jp/entry/20121228/1356696182
//   bfcache について覚えて帰ってもらいます。（転載）
// IE と Firefox <1.5(Gecko <1.8) だけ unload でイベントリスナを削除する
// Gecko 0.8.1 以下は unload でブラウザがクラッシュする https://twitter.com/itozyun/status/1516964450083160064
if( p_Trident || 0.9 <= p_Gecko && p_Gecko < 1.8 ){
    p_addEventListener( window, 'unload', function( e ){
        m_dispatchEvent( /** @type {TypedefCallbackList} */ (Event_unloadEventCallbacks), e, true );
    } );
} else {
    Event_unloadEventCallbacks = undefined;
};