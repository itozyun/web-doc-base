//;(function( ua ){
    var iOS  = ua[ 'iOS' ],
        AOSP = ua[ 'AOSP' ],
        meta;

    if( iOS < 6 ){
        meta = 'minimum-scale=1,';
        if( iOS < 5 ){
            meta += 'maximum-scale=1';
            // document.documentElement.className += ' iOS5-';
        } else {
            meta += 'initial-scale=1';
        };
    } else if( AOSP ){
        meta = 'width=device-width,target-densitydpi=medium-dpi,';
        if( AOSP < 3 ){
            meta += 'user-scalable=no';
        } else {
            meta += 'initial-scale=1,minimum-scale=1';
        };
    };

    if( meta ) document.write( '<meta name="viewport" content="' + meta + '">' );

//})( window[ 'ua' ] );
