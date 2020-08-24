/**
 */
g_listenImageReady(
    function( result ){
        "use strict";

        var img = result.img,
            imgEnabled = result.imgEnabled,
            parent = DOM_getParentElement( img );

        if( !DOM_hasClassName( parent, 'aBodyRoot' ) ){
            DOM_addClassName( parent, imgEnabled ? 'img-loaded' : 'img-disabled' );
        } else {
            imgEnabled || DOM_getAttribute( img, 'alt' ) || DOM_setStyle( img, 'display', 'none' );
        };
    }
);