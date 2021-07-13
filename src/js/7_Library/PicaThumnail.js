var PICA_THUMBNAIL_IMGS      = [],
    PICA_THUMBNAIL_MARGIN_LR = 4, // @see scss/00_Config/02_var_Size.scss #{$BORDER_WIDTH_OF_LINK_WITH_IMAGE} * 2
    PICA_THUMBNAIL_safariPreventDefault;

if( !p_ServerSideRendering ){
    p_listenLoadEvent(
        function(){
            var links = p_DOM_getElementsByTagName( p_elmMain, 'A' ),
                i = -1, _ = '', elmA, elmImg, tag, href, ext, thumbWidth;

            for( ; elmA = links[ ++i ]; ){
                if( !p_DOM_hasClassName( elmA, 'img-disabled' ) ){
                    elmImg = p_DOM_getChildren( elmA ).length === 1 && p_DOM_getChildren( elmA )[ 0 ];
                    tag    = elmImg && p_DOM_getTagName( elmImg );
                    if( tag === 'IMG' ){
                        href = p_DOM_getAttribute( elmA, 'href' );
                        ext  = href.split( '?' )[ 0 ].split( '#' )[ 0 ].split( '.' );
                        ext  = ( ext[ ext.length - 1 ] || _ ).toLowerCase();
                        if( 0 <= '.jpg.png.gif.bmp.jpeg.webp.'.indexOf( '.' + ext + '.' ) ){
                            p_DOM_addEventListener( elmA  , 'keydown', PICA_THUMBNAIL_onClickThumbnail );
                            p_DOM_addEventListener( elmImg, 'click', PICA_THUMBNAIL_onClickThumbnail );
                            p_DOM_addEventListener( elmA  , 'click', PICA_THUMBNAIL_onClickAnchor );
                            // Opera 7.x : elmImg.style.width への setter で float が解除される
                            thumbWidth     = p_Presto < 8 ? '' : ( elmImg.offsetWidth - PICA_THUMBNAIL_MARGIN_LR ) + 'px';
                            p_DOM_setStyle( elmImg, 'width', thumbWidth );
                            p_DOM_addClassName( elmA, 'jsPica' );
                            PICA_THUMBNAIL_IMGS.push( {
                                elmA        : elmA,
                                thumbUrl    : elmImg.src,
                                thumbWidth  : thumbWidth,
                                originalUrl : href,
                                elmImg      : elmImg //,
                                // replaced   : false,
                                // clazz      : _,
                                // elmCap     : elmCap,
                                // captionCSS : ''
                            } );
                        };
                    };
                };
            };
        }
    );

    if( p_WebKit < 525.13 ){ // Safari <3
        p_html.onclick = function( e ){
            if( PICA_THUMBNAIL_safariPreventDefault ){
                PICA_THUMBNAIL_safariPreventDefault = false;
                e.preventDefault();
                return false;
            };
        };
    };

    p_listenUnloadEvent(
        function(){
            var i = -1, obj;
            
            for( ; obj = PICA_THUMBNAIL_IMGS[ ++i ]; ){
                p_DOM_removeEventListener( obj.elmA  , 'keydown', PICA_THUMBNAIL_onClickThumbnail );
                p_DOM_removeEventListener( obj.elmImg, 'click'  , PICA_THUMBNAIL_onClickThumbnail );
                p_DOM_removeEventListener( obj.elmA  , 'click'  , PICA_THUMBNAIL_onClickAnchor );
            };
            p_html.onclick = p_emptyFunction;
        }
    );
};

function PICA_THUMBNAIL_onClickThumbnail( e, cancelAction ){
    var ev  = e || event,
        key = ev.keyCode || ev.witch,
        i   = PICA_THUMBNAIL_IMGS.length,
        elmImg,
        parent, elmA, elmCap, src, obj, tag, w, elms, l, size, n, c;

    if( ev.type === 'keydown' && key !== 13 ) return;

    if( !cancelAction ){        
        for( ; i; ){
            obj = PICA_THUMBNAIL_IMGS[ --i ];
            if( obj.elmImg === this || obj.elmA === this ){
                elmImg = obj.elmImg;
                elmA = parent = obj.elmA;
                
                if( obj.replaced ){
                    // Large -> small
                    p_DOM_setStyle( elmImg, 'width', obj.thumbWidth );
                    elmImg.src = obj.thumbUrl;
                    p_DOM_setClassName( elmA, obj.clazz );
                    if( elmCap = obj.elmCap ){
                        p_DOM_setCssText( elmCap, obj.captionCSS );
                        p_DOM_setClassName( elmCap, 'caption jsCap' );
                    };
                } else {
                    // small -> Large
                    if( src = obj.originalUrl ){
                        delete obj.originalUrl;
                        
                        while( parent = p_DOM_getParentNode( parent ) ){
                            if( p_DOM_hasClassName( parent, 'caption' ) ){
                                obj.elmCap     = parent;
                                obj.captionCSS = parent.style.cssText;
                                p_DOM_addClassName( parent, 'jsCap' );
                            } else {
                                tag = p_DOM_getTagName( parent );
                                if( tag === 'DIV' || tag === 'P' || tag === 'BLOCKQUOT' ) break;
                            };
                        };
                        
                        w = parent.offsetWidth - PICA_THUMBNAIL_MARGIN_LR - 1;
                        if( 1600 < w ) w = 1600;
                        
                        if( 0 < src.indexOf( '.bp.blogspot.com/' ) ){
                            elms = src.split( '/' );
                            l    = elms.length;
                            if( size = elms[ l - 2 ] ){
                                n = parseFloat( size.substr( 1 ) );
                                if( n && size === 's' + n ){
                                    elms[ l - 2 ] = 'w' + w;
                                } else {
                                    elms.splice( l - 1, 0, 'w' + w );
                                };
                            };
                            src = elms.join( '/' );
                        };
                        obj.large = src;
                    };
                    
                    obj.clazz = c = p_DOM_getClassName( elmA );
                    p_DOM_addClassName( elmA, 'jsPicaLarge' );
                    p_DOM_setStyle( elmImg, 'width', '' );
                    elmImg.src = obj.large;
                    if( elmCap = obj.elmCap ){
                        p_DOM_setCssText( elmCap, '' );
                        p_DOM_addClassName( elmCap, 'jsCapLarge' );
                    };
                };

                obj.replaced = !obj.replaced;
                break;
            };
        };
    };

    if( e ){
        e.preventDefault();
        e.stopPropagation();
        PICA_THUMBNAIL_safariPreventDefault = true;
        return false;
    } else {
        ev.cancelBubble = true;
        return ev.returnValue = false;
    };
};

function PICA_THUMBNAIL_onClickAnchor( e ){
    return PICA_THUMBNAIL_onClickThumbnail( e, true );
};