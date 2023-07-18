p_listenImageReady(
    /** @type {TypedefCallback} */
    (function( result ){
        var imgElement    = result.img,
            imgReady      = result.imgReady,
            parent        = p_DOM_getParentNode( imgElement ),
            directlyUnder = p_DOM_hasClassName( parent, COMMON_CLASSNAME_ARTICLE_BODY_ROOT );

        // /img-loaded を親に追加する、但し aRootBody は除く
        if( !directlyUnder && imgReady ){
            p_DOM_addClassName( parent, COMMON_CLASSNAME_IMAGE_LOADED );
        } else if( !imgReady && !p_DOM_getAttribute( imgElement, 'alt' ) && p_DOM_getAttribute( imgElement, 'loading' ) !== 'lazy' ){
        // alt の無い画像を非表示に
            p_DOM_setStyle( imgElement, 'display', 'none' );
        };
    })
);