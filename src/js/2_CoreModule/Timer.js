/** ===========================================================================
 * export to packageGlobal
 */
p_setTimer   = Timer_set;
p_clearTimer = Timer_clear;

_p_Timer_reset = Timer_reset;
_p_Timer_remove = Timer_remove;
/** ===========================================================================
 * private
 */
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

if( p_Trident < 5 || p_Tasman ){
    window[ '_wdb_ontimer' ] = Timer_on;
    Timer_on = '_wdb_ontimer()';
};

/**
 * @param {Function} callback
 * @param {*=} opt_param
 * @param {number=} opt_intervalMs
 * @return {number}
 */
function Timer_set( callback, opt_param, opt_intervalMs ){
    if( !TIMERS.length ){
        timerClearID = setTimeout( Timer_on, TIMER_INTERVAL );
    };
    TIMERS.push( {
        f    : callback,
        p    : opt_param,
        _uid : ++timerUID,
        t    : ( new Date - 0 ) + ( TIMER_INTERVAL < opt_intervalMs ? opt_intervalMs : TIMER_INTERVAL )
    } );

    return timerUID;
};

/**
 * @param {number} uid
 * @return {number}
 */
function Timer_clear( uid ){
    var i = TIMERS.length, cb;

    while( cb = TIMERS[ --i ] ){
        if( cb._uid === uid ){
            TIMERS.splice( i, 1 );
            break;
        };
    };
    return 0;
};

function Timer_reset(){
    if( timerClearID ){
        Timer_remove();
        timerClearID = setTimeout( Timer_on, TIMER_INTERVAL );
    };
};

function Timer_remove(){
    if( timerClearID ){
        timerClearID = clearTimeout( timerClearID );
    };
};