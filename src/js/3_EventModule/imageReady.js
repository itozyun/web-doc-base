/** ===========================================================================
 * export to packageGlobal
 */
p_listenImageReady = function( callback ){
    Event_imagereadyCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_imagereadyCallbacks = [];

p_listenLoadEvent(
    function(){
        "use strict";

        var imgs = document.images || p_DOM_getElementsByTagNameFromDocument( 'img' ), // for NN9 ??,
            i    = imgs.length,
            img, result;

        function testForPresto( result ){
            Event_dispatch( Event_imagereadyCallbacks, { img : imgs[ i ], imgReady : result } );
            if( i ){
                p_imageTest( testForPresto, imgs[ --i ].src );
            };
        };

        if( 9 <= p_Presto && p_Presto < 12 ){
            i && p_imageTest( testForPresto, imgs[ --i ].src );
        } else {
            for( ; i; ){
                img    = imgs[ --i ];
                result = p_Trident < 9 ? img.complete : 0 <= img.naturalWidth ? img.naturalWidth : img.width;
                p_imageEnabled = p_imageEnabled || !!result;
                Event_lazyDispatch( Event_imagereadyCallbacks, { img : img, imgReady : result } );
            };
        };
    }
);