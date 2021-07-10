/** ===========================================================================
 * export to packageGlobal
 */
p_setLoopTimer   = LoopTimer_set;
p_clearLoopTimer = LoopTimer_clear;

_p_LoopTimer_reset  = LoopTimer_reset;
_p_LoopTimer_remove = LoopTimer_remove;
/** ===========================================================================
 * private
 */
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

if( p_Trident < 5 || p_Tasman ){
    window[ '_wdb_onlooptimer' ] = LoopTimer_on;
    LoopTimer_on = '_wdb_onlooptimer()';
};

/**
 * @param {Function} callback
 * @return {number}
 */
function LoopTimer_set( callback ){
    if( !LOOP_TIMERS.length ){
        loopTimerClearID = setInterval( LoopTimer_on, LOOP_TIMER_INTERVAL );
    };
    LOOP_TIMERS.push( {
        f    : callback,
        _uid : ++loopTimerUID
    } );

    return loopTimerUID;
};

/**
 * @param {number} uid
 * @return {number}
 */
function LoopTimer_clear( uid ){
    var i = LOOP_TIMERS.length, cb;

    while( cb = LOOP_TIMERS[ --i ] ){
        if( cb._uid === uid ){
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