/** ===========================================================================
 * export to packageGlobal
 */
g_listenImageReady = function( callback ){
    Event_imagereadyCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
var Event_imagereadyCallbacks = [];

g_listenLoadEvent(
    function(){
        "use strict";

        var imgs = document.images || DOM_getElementsByTagName( 'img' ), // for NN9 ??,
            i    = imgs.length,
            img, result;

        for( ; i; ){
            img    = imgs[ --i ];
            result = g_Trident < 9 ? img.complete : 0 <= img.naturalWidth ? img.naturalWidth : img.width;
            g_imageEnabled = g_imageEnabled || !!result;
            Event_lazyDispatch( Event_imagereadyCallbacks, { img : img, imgReady : result } );
        };
    }
);