p_listenImageReady(
    function( result ){
        var imgElement = result.img,
            imgReady   = result.imgReady,
            parent     = p_DOM_getParentNode( imgElement );

        if( !p_DOM_hasClassName( parent, 'aBodyRoot' ) ){
            p_DOM_addClassName( parent, imgReady ? DEFINE_WEB_DOC_BASE__CLASSNAME_IMG_LOADED : DEFINE_WEB_DOC_BASE__CLASSNAME_IMG_DISABLED );
        } else if( !imgReady && !p_DOM_getAttribute( imgElement, 'alt' ) ){
            p_DOM_setStyle( imgElement, 'display', 'none' );
        };
    }
);