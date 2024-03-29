/** ===========================================================================
 * module global
 */

/** @type {!function(string):MediaQueryList|undefined} */
var m_matchMedia = window.matchMedia;
/** @type {!Element|undefined} */
var m_elmTest;

/** @type {!Function|undefined} */
var m_initMediaQueryList = function( media, listener ){
    p_listenCssAvailabilityChange(
        function(){
            var mediaQueryList = m_matchMedia( media );

            listener( mediaQueryList );
            mediaQueryList.addListener( listener );
            return true;
        }
    );
};

/**
 * @param {TypedefCallbackList} callbackList
 * @param {*=} param
 * @param {boolean=} deleteCallbackList
 */
function m_dispatchEvent( callbackList, param, deleteCallbackList ){
    for( var i = 0; i < callbackList.length; ++i ){ // callbackList は callback 中にも追加される
        if( callbackList[ i ]( param ) === true ){ // true が戻された場合、
            callbackList.splice( i, 1 );
            --i;
        };
    };
    if( deleteCallbackList ){
        callbackList.length = 0;
    };
};

/** onload 後にタイマーを挟んで dispatch する
 * 
 * @param {TypedefCallbackList} callbackList
 * @param {*=} param
 * @param {boolean=} deleteCallbackList
 */
function m_lazyDispatchEvent( callbackList, param, deleteCallbackList ){
    if( !p_loadEventCallbacks && !Event_lazyCallbacks.length ){
        p_setTimer( _m_lazyDispatchEvent );
    };
    Event_lazyCallbacks.push( callbackList, param, deleteCallbackList );
};

/** ===========================================================================
 * private
 */
var Event_lazyCallbacks = [];

function _m_lazyDispatchEvent(){
    var lazyCallbacks = Event_lazyCallbacks,
        callbackList;

    Event_lazyCallbacks = []; // lazyDispatch 中の lazyDispatch は新しい配列に追加される

    while( callbackList = lazyCallbacks.shift() ){
        m_dispatchEvent( callbackList, lazyCallbacks.shift(), lazyCallbacks.shift() );
    };
};

// p_listenLoadEvent が存在しない為、配列を触る
p_loadEventCallbacks.push(
    function(){
        m_initMediaQueryList = undefined;

        // Create a test div
        m_elmTest = p_DOM_insertElement(
            p_body,
            'div',
            {
                'aria-hidden' : 'true',
                style         : {
                    position   : 'absolute',
                    top        : 0,
                    left       : 0,
                    width      : '9px',
                    height     : '9px',
                    visibility : 'hidden'
                }
            }
        );

        p_listenLoadEvent( function(){
            if( Event_lazyCallbacks.length ){
                p_setTimer( _m_lazyDispatchEvent );
            };
        } );
    }
);