"use strict";

var Util_tempOnLoad   = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
    Util_tempOnUnload = window.onunload,
    Util_tempOnScroll = window.onscroll,
    Util_tempOnResize = window.onresize,
    Util_resizeTimerID;

onload   = Util_init;
onunload = Util_kill;

function Util_init( e ){
    var i = 0, l = g_loadEventCallbacks.length, ret;

    if( Util_tempOnLoad ) ret = Util_tempOnLoad( e );
    Util_tempOnLoad = null;

    if( onload === Util_init ){
        onload = g_emptyFunction;
        onload = null;
    };

    for( ; i < l; ++i ){
        g_loadEventCallbacks[ i ]( e );
    };
    g_loadEventCallbacks = Util_init = null;

    return ret;
};

onscroll = function( e ){
    var i = 0, l = g_scrollEventCallbacks.length, ret;

    if( Util_tempOnScroll ) ret = Util_tempOnScroll( e );

    if( !Util_init ){
        for( ; i < l; ++i ){
            g_scrollEventCallbacks[ i ]();
        };
    };

    if( ua[ 'SafariMobile' ] || ua[ 'iOSWebView' ] ){
        if( Util_resizeTimerID ){
            clearTimeout( Util_resizeTimerID );
            Util_resizeTimerID = setTimeout( Util_resizeEventLazyCallback, 100 );
        };
    };
    return ret;
};

onresize = function( e ){
    var ret;

    if( Util_tempOnResize ) ret = Util_tempOnResize( e );
    
    if( !Util_init ){
        if( Util_resizeTimerID ) clearTimeout( Util_resizeTimerID );
        Util_resizeTimerID = setTimeout( Util_resizeEventLazyCallback, 100 );
    };

    return ret;
};

function Util_resizeEventLazyCallback(){
    var i = Util_resizeTimerID = 0, l = g_resizeEventCallbacks.length;

    for( ; i < l; ++i ){
        g_resizeEventCallbacks[ i ]();
    };
};

function Util_kill( e ){
    var i = 0, l = g_unloadEventCallbacks.length, ret;

    if( Util_tempOnUnload ) ret = Util_tempOnUnload( e );
    Util_tempOnUnload = null;

    if( onunload === Util_kill ){
        onunload = g_emptyFunction;
        onunload = null;
    };

    if( Util_resizeTimerID ) clearTimeout( Util_resizeTimerID );

    for( ; i < l; ++i ){
        g_unloadEventCallbacks[ i ]();
    };

    onscroll = onresize = g_emptyFunction;
    onscroll = onresize = Util_tempOnUnload = Util_tempOnScroll = Util_tempOnResize = Util_kill = g_unloadEventCallbacks = null;

    return ret;
};