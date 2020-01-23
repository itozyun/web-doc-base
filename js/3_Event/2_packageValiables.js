var Event_matchMedia = window.matchMedia,
    Event_elmTest;

function Event_dispatch( callbackList, param ){
    var i = 0, l = callbackList.length;

    for( ; i < l; ++i ){
        callbackList[ i ]( param );
    };
};

g_Event_loadEventCallbacks.push(
    function (){
        //Create a test div
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
                visibility : 'hidden',
                color      : '#123456'
            }
        );
    }
);