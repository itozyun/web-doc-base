var Event_matchMedia = window.matchMedia;

function Event_dispatch( callbackList, param ){
    var i = 0, l = callbackList.length;

    for( ; i < l; ++i ){
        callbackList[ i ]( param );
    };
};