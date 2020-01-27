var LOOP_TIMERS = [],
    LOOP_TIMER_INTERVAL = 999,
    loopTimerUID = 0,
    loopTimerClearID;

function LoopTimer_on(){
    var cb, i = 0;

    for( ; i < LOOP_TIMERS.length; ++i ){
        cb = LOOP_TIMERS[ i ];
        cb.f();
    };
};

if( g_Trident < 5 || g_Tasman ){
    window[ '_wdb_onlooptimer' ] = LoopTimer_on;
    LoopTimer_on = '_wdb_onlooptimer()';
};

function LoopTimer_set( callback ){
    if( !LOOP_TIMERS.length ){
        loopTimerClearID = setInterval( LoopTimer_on, LOOP_TIMER_INTERVAL );
    };
    LOOP_TIMERS.push( {
        f   : callback,
        uid : ++loopTimerUID
    } );

    return loopTimerUID;
};

function LoopTimer_clear( uid ){
    var i = LOOP_TIMERS.length, cb;

    while( cb = LOOP_TIMERS[ --i ] ){
        if( cb.uid === uid ){
            LOOP_TIMERS.splice( i, 1 );
            if( !LOOP_TIMERS[ 0 ] ){
                LoopTimer_remove();
            };
            break;
        };
    };
    return 0;
};

function LoopTimer_reset(){
    if( loopTimerClearID ){
        LoopTimer_remove();
        loopTimerClearID = setInterval( LoopTimer_on, LOOP_TIMER_INTERVAL );
    };
};

function LoopTimer_remove(){
    if( loopTimerClearID ){
        loopTimerClearID = clearInterval( loopTimerClearID );
    };
};

g_LoopTimer_set   = LoopTimer_set;
g_LoopTimer_clear = LoopTimer_clear;

g_onreachEndCallbacks.push(
    function(){
        if( g_SafariMobile ){
            g_Event_listenScrollEvent( LoopTimer_reset );
        };
        g_Event_listenUnloadEvent( LoopTimer_remove );
    }
);