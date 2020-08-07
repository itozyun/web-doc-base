var DOM_EVENTS = {};

function DOM_eventAdd( elm, type, callback, option ){
    if( g_Trident < 5 || g_Tasman ){
        elm[ 'on' + type ] = DOM_dispatch;
        var hash = { elm : elm, cb : callback };

        if( DOM_EVENTS[ type ] ){
            DOM_EVENTS[ type ][ DOM_EVENTS[ type ].length ] = hash;
        } else {
            DOM_EVENTS[ type ] = [ hash ];
        };
    } else if( g_Trident < 9 ){
        elm.attachEvent( 'on' + type, callback );
    } else {
        elm.addEventListener( type, callback,
            option ? ( g_passiveSupported ? option : option.capture ) : false );
    };
};

function DOM_dispatch(){
    var e    = event,
        type = e.type,
        ary  = DOM_EVENTS[ type ],
        elm  = this,
        i    = -1, hash;
    
    while( hash = ary[ ++i ] ){
        if( hash.elm === elm ){
            hash.cb(  );
        };
    };
};