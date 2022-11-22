/** @type {!Array.<!PicaThumbnail>} */
var PicaThumbnail_IMGS      = [];
var PicaThumbnail_MARGIN_LR = 4; // @see scss/00_Config/02_var_Size.scss #{$BORDER_WIDTH_OF_LINK_WITH_IMAGE} * 2
var PicaThumbnail_keyEventType = 5.5 <= p_Trident && p_Trident < 8 ? 'keypress' : 'keydown';
/**
 * @typedef {{
 *   elmA                : !HTMLAnchorElement,
 *   thumbUrl            : string,
 *   thumbWidth          : string,
 *   originalUrl         : (string|undefined),
 *   elmImg              : !HTMLImageElement,
 *   isGoogleUserContent : boolean,
 *   replaced            : (boolean|undefined),
 *   clazz               : (string|undefined),
 *   elmCap              : (!HTMLSpanElement|undefined),
 *   captionCSS          : (string|undefined),
 *   large               : (string|undefined)
 * }}
 */
var PicaThumbnail;

if( !p_cloudRendering ){
    var PicaThumbnail_canUseCSSTransition =
        p_notUndefined( p_style[ 'transition'         ] ) ||
        p_notUndefined( p_style[ '-o-transition'      ] ) ||
        p_notUndefined( p_style[ '-moz-transition'    ] ) ||
        p_notUndefined( p_style[ '-webkit-transition' ] );

    p_listenImageReady(
        /** @type {TypedefCallback} */
        (function( result ){
            if( !result.imgReady || !p_elmMain ) return;

            var elmImg = result.img, 
                elmA   = p_DOM_getParentNode( elmImg ),
                href, ext, thumbWidth = '', guc, parent, elmCap, captionCSS;

            if( p_DOM_getTagName( elmA ) === 'A' && p_DOM_getChildren( elmA ).length === 1 ){
                href = p_DOM_getAttribute( elmA, 'href' );
                ext  = href.split( '?' )[ 0 ].split( '#' )[ 0 ].split( '.' );
                ext  = ( ext[ ext.length - 1 ] || '' ).toLowerCase();
                guc  = 0 < href.indexOf( 'blogger.googleusercontent.com/img/' );
                if( guc || 0 <= '.jpg.png.gif.bmp.jpeg.webp.'.indexOf( '.' + ext + '.' ) ){
                    p_addEventListener( elmA  , PicaThumbnail_keyEventType, PicaThumbnail_onClickThumbnail );
                    p_addEventListener( elmImg, 'click'  , PicaThumbnail_onClickThumbnail );
                    p_addEventListener( elmA  , 'click'  , PicaThumbnail_onClickAnchor );
                    // Opera 7.x, 8, 8.5 : elmImg.style.width への setter で float が解除される
                    // というよりも、CSS transition 用なので対応ブラウザ以外は不要だ思う
                    if( PicaThumbnail_canUseCSSTransition ){
                        thumbWidth = ( elmImg.naturalWidth + PicaThumbnail_MARGIN_LR ) + 'px';
                        p_DOM_setStyle( elmImg, 'width', thumbWidth );
                    };
                    p_DOM_addClassName( elmA, DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_TARGET );

                    parent = elmA;
                    // objCap ここで
                    while( parent = p_DOM_getParentNode( parent ) ){
                        if( p_DOM_hasClassName( parent, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ ) ){
                            elmCap     = parent;
                            captionCSS = elmCap.style.cssText.toLowerCase(); // IE5 では大文字で返し setCssText に使えない! => WIDTH
                            break;
                        };
                    };

                    PicaThumbnail_IMGS.push(
                        /** @type {PicaThumbnail} */ ({
                            elmA                : elmA,
                            elmCap              : elmCap,
                            captionCSS          : captionCSS,
                            thumbUrl            : elmImg.src,
                            thumbWidth          : thumbWidth,
                            originalUrl         : href,
                            elmImg              : elmImg,
                            isGoogleUserContent : guc
                        })
                    );
                };
            };
        })
    );

    p_listenUnloadEvent(
        function( i, picaThumbnail ){
            for( i = -1; picaThumbnail = PicaThumbnail_IMGS[ ++i ]; ){
                p_removeEventListener( picaThumbnail.elmA  , PicaThumbnail_keyEventType, PicaThumbnail_onClickThumbnail );
                p_removeEventListener( picaThumbnail.elmImg, 'click'  , PicaThumbnail_onClickThumbnail );
                p_removeEventListener( picaThumbnail.elmA  , 'click'  , PicaThumbnail_onClickAnchor );
            };
        }
    );
};

/**
 * @param {!Event=} e
 */
function PicaThumbnail_onClickThumbnail( e ){
    var key = e.keyCode || e.witch,
        i   = PicaThumbnail_IMGS.length,
        elmImg,
        parent, elmA, elmCap, src, picaThumbnail, tag, w, elms, l, size, n;

    if( key !== 13 && e.type === PicaThumbnail_keyEventType ) return;

    for( ; i; ){
        picaThumbnail = /** @type {PicaThumbnail} */ (PicaThumbnail_IMGS[ --i ]);
        if( picaThumbnail.elmImg === this || picaThumbnail.elmA === this ){
            elmImg = picaThumbnail.elmImg;
            elmA = parent = picaThumbnail.elmA;

            if( picaThumbnail.replaced ){
                // Large -> small
                p_DOM_setStyle( elmImg, 'width', picaThumbnail.thumbWidth );
                elmImg.src = picaThumbnail.thumbUrl;
                p_DOM_setClassName( elmA, /** @type {string} */ (picaThumbnail.clazz) );
                if( elmCap = picaThumbnail.elmCap ){
                    p_DOM_setCssText( elmCap, picaThumbnail.captionCSS );
                    p_DOM_setClassName( elmCap, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ + ' ' + DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_TARGET );
                };
            } else {
                // small -> Large
                if( src = picaThumbnail.originalUrl ){
                    delete picaThumbnail.originalUrl;

                    while( parent = p_DOM_getParentNode( parent ) ){
                        if( p_DOM_hasClassName( parent, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ ) ){
                            p_DOM_addClassName( parent, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_TARGET );
                        } else {
                            tag = p_DOM_getTagName( parent );
                            if( tag === 'DIV' || tag === 'P'  || tag === 'BLOCKQUOT' ||
                                tag === 'LI'  || tag === 'DD' || tag === 'TD' || tag === 'TH' ||
                                tag === 'FORM' || tag === 'PRE' ) break;
                        };
                    };

                    w = ( parent.offsetWidth | 0 ) - PicaThumbnail_MARGIN_LR; // - 1;
                    if( 1600 < w ) w = 1600;

                    if( picaThumbnail.isGoogleUserContent && 0 < src.split( '/' ).pop().indexOf( '=' ) ){
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
                    } else if( picaThumbnail.isGoogleUserContent || 0 < src.indexOf( '.bp.blogspot.com/' ) ){
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
                    picaThumbnail.large = src;
                };

                picaThumbnail.clazz = p_DOM_getClassName( elmA );
                p_DOM_addClassName( elmA, DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_LARGE );
                p_DOM_setStyle( elmImg, 'width', '' );
                elmImg.src = picaThumbnail.large;
                if( elmCap = picaThumbnail.elmCap ){
                    p_DOM_setCssText( elmCap, '' );
                    p_DOM_addClassName( elmCap, DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_LARGE );
                };
            };

            picaThumbnail.replaced = !picaThumbnail.replaced;
            break;
        };
    };
    // e.preventDefault();
    // e.stopPropagation();
    PicaThumbnail_onClickAnchor( e );
};

/**
 * @param {!Event=} e
 */
function PicaThumbnail_onClickAnchor( e ){
    e.preventDefault();
    e.stopPropagation();
};