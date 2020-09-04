g_listenImageReady(
    function( result ){
        "use strict";

        var imgElement = result.img,
            imgReady   = result.imgReady,
            parent     = DOM_getParentElement( imgElement );

        if( !DOM_hasClassName( parent, 'aBodyRoot' ) ){
            DOM_addClassName( parent, imgReady ? 'img-loaded' : 'img-disabled' );
        } else if( !imgReady && !DOM_getAttribute( imgElement, 'alt' ) ){
            DOM_setStyle( imgElement, 'display', 'none' );
        };
    }
);