var p_setTimer    , p_clearTimer,
    p_setLoopTimer, p_clearLoopTimer,

    _p_Debug_logsBeforeLoad = [],
    _p_Debug_errorsBeforeLoad = [],

    _p_LoopTimer_reset, _p_LoopTimer_remove,
    _p_Timer_reset, _p_Timer_remove;

var p_getTimestamp = Date.now || function(){
    return + new Date;
};

function p_getViewPortWidth(){
    return p_Trident < 11
               ? p_html.offsetWidth
               : window.innerWidth;
};

function p_getViewPortHeight(){
    return p_Trident < 11
               ? p_html.offsetHeight
               : window.innerHeight; // Trident 11, Gecko 0.6, Opera 7.03, Safari 3.1, Chrome 1
};

function p_getDocumentWidth(){
    return p_Gecko || p_Presto
               ? p_html.offsetWidth
               : p_body.scrolWidth;
};

function p_getDocumentHeight(){
    return p_Gecko || p_Presto
               ? p_html.offsetHeight // Gecko 0.6(scrollHeight が居ない!), Opera 7.03
               : p_body.scrolHeight; // IE<=5.5 は html 不可, Safari 3.1
};

function p_getDocumentScrollX(){
    return p_Trident < 6
               ? p_body.scrollLeft : // IE <=5.5
           p_Trident
               ? p_html.scrollLeft   // IE6+
               : window.pageXOffset; // Gecko 0.6, Opera 7.03, Safari 3.1
};

function p_getDocumentScrollY(){
    return p_Trident < 6
               ? p_body.scrollTop :  // IE <=5.5
           p_Trident
               ? p_html.scrollTop    // IE6+
               : window.pageYOffset; // Gecko 0.6, Opera 7.03, Safari 3.1
};