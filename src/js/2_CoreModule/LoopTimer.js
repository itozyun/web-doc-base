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
/** @type {Array<Object>} */
var LOOP_LISTENERS = [];

var LOOP_INTERVAL = 500,
    loopTimerUID = 0,
    loopTimerClearID;

/** @type {Function|string} */
var LoopTimer_on = function(){
    var cb, i = 0;

    for( ; i < LOOP_LISTENERS.length; ++i ){
        cb = LOOP_LISTENERS[ i ];
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
    if( !LOOP_LISTENERS.length ){
        loopTimerClearID = setInterval( LoopTimer_on, LOOP_INTERVAL );
    };
    LOOP_LISTENERS.push( {
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
    var i = LOOP_LISTENERS.length, cb;

    while( cb = LOOP_LISTENERS[ --i ] ){
        if( cb._uid === uid ){
            LOOP_LISTENERS.splice( i, 1 );
            if( !LOOP_LISTENERS[ 0 ] ){
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
        loopTimerClearID = setInterval( LoopTimer_on, LOOP_INTERVAL );
    };
};

function LoopTimer_remove(){
    if( loopTimerClearID ){
        loopTimerClearID = clearInterval( loopTimerClearID );
    };
};