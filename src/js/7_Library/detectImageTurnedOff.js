p_listenImageReady(
    function( result ){
        "use strict";

        var imgElement = result.img,
            imgReady   = result.imgReady,
            parent     = p_DOM_getParentNode( imgElement );

        if( !p_DOM_hasClassName( parent, 'aBodyRoot' ) ){
            p_DOM_addClassName( parent, imgReady ? 'img-loaded' : 'img-disabled' );
        } else if( !imgReady && !p_DOM_getAttribute( imgElement, 'alt' ) ){
            p_DOM_setStyle( imgElement, 'display', 'none' );
        };
    }
);