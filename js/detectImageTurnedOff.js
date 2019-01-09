/**
 */
g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
function(){
    "use strict";

    var imgs = document.images,
        i    = imgs.length,
        img;

    function disabledActionRun( result ){
        var parent = DOM_getParentElement( img );
    
        if( !DOM_hasClassName( parent, 'aBodyRoot' ) ){
            DOM_addClassName( parent, result ? 'img-loaded' : 'img-disabled' );
        } else {
            result || DOM_getAttribute( img, 'alt' ) || DOM_setStyle( img, 'display', 'none' );
        };
    };

    if( i ){
        for( ; i; ){
            img = imgs[ --i ];
            if( ua[ 'IE' ] < 9 ){// other
                disabledActionRun( img.complete );
            } else {
                disabledActionRun( img.naturalWidth );
            };
        };
    };
};