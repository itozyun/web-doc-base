/** @type {Array.<picaThumbnail>} */
var PicaThumbnail_IMGS      = [];
var PicaThumbnail_MARGIN_LR = 4; // @see scss/00_Config/02_var_Size.scss #{$BORDER_WIDTH_OF_LINK_WITH_IMAGE} * 2

/**
 * @typedef {{
 *   elmA                : HTMLAnchorElement,
 *   thumbUrl            : string,
 *   thumbWidth          : string,
 *   originalUrl         : (string|undefined),
 *   elmImg              : HTMLImageElement,
 *   isGoogleUserContent : boolean,
 *   replaced            : (boolean|undefined),
 *   clazz               : (string|undefined),
 *   elmCap              : (HTMLSpanElement|undefined),
 *   captionCSS          : (string|undefined),
 *   large               : (string|undefined)
 * }}
 */
var picaThumbnail;

if( !p_cloudRendering ){
    p_listenImageReady(
        function( result ){
            if( !result.imgReady || !p_elmMain ) return;

            var elmImg = result.img, 
                elmA   = p_DOM_getParentNode( elmImg ),
                href, ext, thumbWidth = '', guc;

            if( p_DOM_getTagName( elmA ) === 'A' && p_DOM_getChildren( elmA ).length === 1 ){
                href = p_DOM_getAttribute( elmA, 'href' );
                ext  = href.split( '?' )[ 0 ].split( '#' )[ 0 ].split( '.' );
                ext  = ( ext[ ext.length - 1 ] || '' ).toLowerCase();
                guc  = 0 < href.indexOf( 'blogger.googleusercontent.com/img/' );
                if( guc || 0 <= '.jpg.png.gif.bmp.jpeg.webp.'.indexOf( '.' + ext + '.' ) ){
                    p_addEventListener( elmA  , 'keydown', PicaThumbnail_onClickThumbnail );
                    p_addEventListener( elmImg, 'click'  , PicaThumbnail_onClickThumbnail );
                    p_addEventListener( elmA  , 'click'  , PicaThumbnail_onClickAnchor );
                    // Opera 7.x, 8, 8.5 : elmImg.style.width への setter で float が解除される
                    if( !( p_Presto < 9 ) ){
                        thumbWidth = ( elmImg.offsetWidth - PicaThumbnail_MARGIN_LR ) + 'px';
                        p_DOM_setStyle( elmImg, 'width', thumbWidth );
                    };
                    p_DOM_addClassName( elmA, DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_TARGET );
                    PicaThumbnail_IMGS.push( /** @type {picaThumbnail} */ ({
                        elmA                : elmA,
                        thumbUrl            : elmImg.src,
                        thumbWidth          : thumbWidth,
                        originalUrl         : href,
                        elmImg              : elmImg,
                        isGoogleUserContent : guc
                    }) );
                };
            };
        }
    );

    p_listenUnloadEvent(
        function( i, obj ){
            for( i = -1; obj = PicaThumbnail_IMGS[ ++i ]; ){
                p_removeEventListener( obj.elmA  , 'keydown', PicaThumbnail_onClickThumbnail );
                p_removeEventListener( obj.elmImg, 'click'  , PicaThumbnail_onClickThumbnail );
                p_removeEventListener( obj.elmA  , 'click'  , PicaThumbnail_onClickAnchor );
            };
        }
    );
};

function PicaThumbnail_onClickThumbnail( e ){
    var key = e.keyCode || e.witch,
        i   = PicaThumbnail_IMGS.length,
        elmImg,
        parent, elmA, elmCap, src, obj, tag, w, elms, l, size, n;

    if( e.type === 'keydown' && key !== 13 ) return;

    for( ; i; ){
        obj = /** @type {picaThumbnail} */ (PicaThumbnail_IMGS[ --i ]);
        if( obj.elmImg === this || obj.elmA === this ){
            elmImg = obj.elmImg;
            elmA = parent = obj.elmA;

            if( obj.replaced ){
                // Large -> small
                p_DOM_setStyle( elmImg, 'width', obj.thumbWidth );
                elmImg.src = obj.thumbUrl;
                p_DOM_setClassName( elmA, /** @type {string} */ (obj.clazz) );
                if( elmCap = obj.elmCap ){
                    p_DOM_setCssText( elmCap, obj.captionCSS );
                    p_DOM_setClassName( elmCap, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ + ' ' + DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_TARGET );
                };
            } else {
                // small -> Large
                if( src = obj.originalUrl ){
                    delete obj.originalUrl;

                    while( parent = p_DOM_getParentNode( parent ) ){
                        if( p_DOM_hasClassName( parent, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ ) ){
                            obj.elmCap     = parent;
                            obj.captionCSS = parent.style.cssText;
                            p_DOM_addClassName( parent, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_TARGET );
                        } else {
                            tag = p_DOM_getTagName( parent );
                            if( tag === 'DIV' || tag === 'P'  || tag === 'BLOCKQUOT' ||
                                tag === 'LI'  || tag === 'DD' || tag === 'TD' || tag === 'TH' ||
                                tag === 'FORM' || tag === 'PRE' ) break;
                        };
                    };

                    w = parent.offsetWidth - PicaThumbnail_MARGIN_LR - 1;
                    if( 1600 < w ) w = 1600;

                    if( obj.isGoogleUserContent && 0 < src.split( '/' ).pop().indexOf( '=' ) ){
                        elms = src.split( '=' );
                        l    = elms.length;
                        if( size = elms[ l - 1 ] ){
                            n = parseFloat( size.substr( 1 ) );
                            if( n && size === 's' + n ){
                                elms[ l - 1 ] = 'w' + w;
                            } else {
                                elms[ l ] = 'w' + w;
                            };
                        };
                        src = elms.join( '=' );
                    } else if( 0 < src.indexOf( '.bp.blogspot.com/' ) ){
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

                obj.clazz = p_DOM_getClassName( elmA );
                p_DOM_addClassName( elmA, DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_LARGE );
                p_DOM_setStyle( elmImg, 'width', '' );
                elmImg.src = obj.large;
                if( elmCap = obj.elmCap ){
                    p_DOM_setCssText( elmCap, '' );
                    p_DOM_addClassName( elmCap, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_LARGE );
                };
            };

            obj.replaced = !obj.replaced;
            break;
        };
    };
    // e.preventDefault();
    // e.stopPropagation();
    PicaThumbnail_onClickAnchor( e );
};

function PicaThumbnail_onClickAnchor( e ){
    e.preventDefault();
    e.stopPropagation();
};