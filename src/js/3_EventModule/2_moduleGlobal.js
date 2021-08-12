var Event_matchMedia    = window.matchMedia,
    Event_lazyCallbacks = [],
    Event_loaded,
    Event_elmTest;

/**
 * @param {Array.<Function>} callbackList
 * @param {*=} param
 */
function Event_dispatch( callbackList, param ){
    for( var i = 0; i < callbackList.length; ++i ){ // callbackList は callback 中にも追加される
        if( callbackList[ i ]( param ) === true ){ // true が戻された場合、
            callbackList.splice( i, 1 );
            --i;
        };
    };
};

// onload 後にタイマーを挟んで dispatch する
/**
 * @param {Array.<Function>} callbackList
 * @param {*=} param
 */
function Event_lazyDispatch( callbackList, param ){
    if( Event_loaded && !Event_lazyCallbacks.length ){
        p_setTimer( _Event_lazyDispatch );
    };
    Event_lazyCallbacks.push( callbackList, param );
};

    function _Event_lazyDispatch(){
        var lazyCallbacks = Event_lazyCallbacks,
            callbackList;

        Event_lazyCallbacks = []; // lazyDispatch 中の lazyDispatch は新しい配列に追加される

        while( callbackList = lazyCallbacks.shift() ){
            Event_dispatch( callbackList, lazyCallbacks.shift() );
        };
    };

// p_listenLoadEvent が存在しない為、配列を触る
p_loadEventCallbacks.push(
    function(){
        // Create a test div
        Event_elmTest = p_DOM_insertElement(
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
            Event_loaded = true;
            if( Event_lazyCallbacks.length ){
                p_setTimer( _Event_lazyDispatch );
            };
        } );
    }
);