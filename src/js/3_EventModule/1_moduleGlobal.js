var Event_matchMedia    = window.matchMedia,
    Event_lazyCallbacks = [],
    Event_loaded,
    Event_elmTest;

function Event_dispatch( callbackList, param ){
    for( var i = 0; i < callbackList.length; ++i ){ // callbackList は callback 中にも追加される
        callbackList[ i ]( param );
    };
};

// onload 後にタイマーを挟んで dispatch する
function Event_lazyDispatch( callbackList, param ){
    if( Event_loaded && !Event_lazyCallbacks.length ){
        g_setTimer( _Event_lazyDispatch );
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

// g_listenLoadEvent が存在しない為、配列を触る
g_loadEventCallbacks.push(
    function (){
        // Create a test div
        Event_elmTest = DOM_createThenAdd(
            g_body,
            'div',
            {
                'aria-hidden' : 'true'
            },
            {
                position   : 'absolute',
                top        : 0,
                left       : 0,
                width      : '9px',
                height     : '9px',
                visibility : 'hidden'
            }
        );

        g_listenLoadEvent( function(){
            Event_loaded = true;
            if( Event_lazyCallbacks.length ){
                g_setTimer( _Event_lazyDispatch );
            };
        } );
    }
);