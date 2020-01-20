var TIMERS = [],
    TIMER_INTERVAL = 64,
    timerUID = 0,
    timerClearID;

function Timer_on(){
    var cb, i = 0, t = ( new Date - 0 );

    while( i < TIMERS.length ){
        if( t < TIMERS[ 0 ].t ){
            ++i;
            continue;
        };
        cb = TIMERS.splice( i, 1 )[ 0 ];
        cb.f( cb.p );
    };

    if( TIMERS.length ){
        timerClearID = setTimeout( Timer_on, TIMER_INTERVAL );
    } else {
        timerClearID = 0;
    };
};

if( g_Trident < 5 || g_Tasman ){
    window[ '_wdb_ontimer' ] = Timer_on;
    Timer_on = '_wdb_ontimer()';
};

function Timer_set( callback, opt_param, opt_intervalMs ){
    if( !TIMERS.length ){
        timerClearID = setTimeout( Timer_on, TIMER_INTERVAL );
    };
    TIMERS.push( {
        f : callback,
        p : opt_param,
        uid : ++timerUID,
        t : ( new Date - 0 ) + ( TIMER_INTERVAL < opt_intervalMs ? opt_intervalMs : TIMER_INTERVAL )
    } );

    return timerUID;
};

function Timer_clear( uid ){
    var i = TIMERS.length, cb;

    while( cb = TIMERS[ --i ] ){
        if( cb.uid === uid ){
            TIMERS.splice( i, 1 );
            break;
        };
    };
    return 0;
};

function Timer_reset(){
    if( timerClearID ){
        clearTimeout( timerClearID );
        timerClearID = setTimeout( Timer_on, TIMER_INTERVAL );
    };
};

g_Timer_set   = Timer_set;
g_Timer_clear = Timer_clear;

if( g_SafariMobile ){
    g_onreachEndCallbacks.push(
        function(){
            g_Event_listenScrollEvent( Timer_reset );
        }
    );
};