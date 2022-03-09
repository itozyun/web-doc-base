p_listenImageReady(
    function( result ){
        var imgElement    = result.img,
            imgReady      = result.imgReady,
            parent        = p_DOM_getParentNode( imgElement ),
            directlyUnder = p_DOM_hasClassName( parent, DEFINE_WEB_DOC_BASE__CLASSNAME_ABODY_ROOT );

        // /img-loaded を親に追加する、但し aRootBody は除く
        if( !directlyUnder && imgReady ){
            p_DOM_addClassName( parent, DEFINE_WEB_DOC_BASE__CLASSNAME_IMG_LOADED );
        } else if( !imgReady && !p_DOM_getAttribute( imgElement, 'alt' ) ){
        // alt の無い画像を非表示に
            p_DOM_setStyle( imgElement, 'display', 'none' );
        };
    }
);