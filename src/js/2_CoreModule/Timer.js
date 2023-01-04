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
/** @type {!Array.<!Object>} */
var TIMER_LISTENERS = [];
var TIMER_INTERVAL = 16,
    timerUID = 0,
    timerClearID;

/** @type {!Function|string} */
var Timer_on = function(){
    var cb, i = 0, t = p_getTimestamp();

    while( i < TIMER_LISTENERS.length ){
        if( t < TIMER_LISTENERS[ 0 ].t ){
            ++i;
            continue;
        };
        cb = TIMER_LISTENERS.splice( i, 1 )[ 0 ];
        cb.f( cb.p );
    };

    if( TIMER_LISTENERS.length ){
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
 * @param {!function(*=)} callback
 * @param {*=} opt_param
 * @param {number=} opt_intervalMs
 * @return {number}
 */
function Timer_set( callback, opt_param, opt_intervalMs ){
    if( !TIMER_LISTENERS.length ){
        timerClearID = setTimeout( Timer_on, TIMER_INTERVAL );
    };
    TIMER_LISTENERS.push( {
        f    : callback,
        p    : opt_param,
        _uid : ++timerUID,
        t    : p_getTimestamp() + ( TIMER_INTERVAL < opt_intervalMs ? opt_intervalMs : TIMER_INTERVAL )
    } );

    return timerUID;
};

/**
 * @param {number} uid
 * @return {number}
 */
function Timer_clear( uid ){
    var i = TIMER_LISTENERS.length, cb;

    while( cb = TIMER_LISTENERS[ --i ] ){
        if( cb._uid === uid ){
            TIMER_LISTENERS.splice( i, 1 );
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