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

        var imgs = document.images,
            i    = imgs.length,
            img, result;

        for( ; i; ){
            img    = imgs[ --i ];
            result = g_Trident < 9 ? img.complete : img.naturalWidth;
    
            Event_dispatch( Event_imagereadyCallbacks, { img : img, imgEnabled : result } );

            g_imageEnabled = g_imageEnabled || !!result;
        };
    }
);