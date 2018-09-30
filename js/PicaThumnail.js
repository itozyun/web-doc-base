"use strict";
var PICA_THUMBNAIL_ROOT_ID   = 'jM',
    PICA_THUMBNAIL_IMGS      = [],
    PICA_THUMBNAIL_MARGIN_LR = 2,
    PICA_THUMBNAIL_safariPreventDefault;

if( !ua[ 'OperaMin' ] && !ua[ 'UCWEB' ] ){
    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function(){
        var links = getElementsByTagName( 'A', getElementById( PICA_THUMBNAIL_ROOT_ID ) ),
            i = -1, _ = '', elmA, elmImg, tag, href, ext;

        for( ; elmA = links[ ++i ]; ){
            elmImg = elmA.children.length === 1 && elmA.children[ 0 ];
            tag    = elmImg && elmImg.tagName;
            if( tag === 'IMG' || tag === 'img' ){
                href = elmA.getAttribute( 'href' );
                ext  = href.split( '?' ).join( _ ).split( '#' ).join( _ ).split( '.' );
                ext  = ( ext[ ext.length - 1 ] || _ ).toLowerCase();
                if( 0 <= 'jpg png gif bmp'.indexOf( ext.substr( 0, 3 ) ) || 0 <= 'jpeg webp'.indexOf( ext.substr( 0, 4 ) ) ){
                    elmA.onkeydown = elmImg.onclick = PICA_THUMBNAIL_onClickThumbnail;
                    elmA.onclick   = PICA_THUMBNAIL_onClickAnchor;
                    elmA.className += ' pica';
                    PICA_THUMBNAIL_IMGS.push( {
                        elmA        : elmA,
                        thumbUrl    : elmImg.src,
                        thumbWidth  : elmImg.style.width = ( elmImg.offsetWidth - PICA_THUMBNAIL_MARGIN_LR ) + 'px',
                        originalUrl : href,
                        elmImg      : elmImg //,
                        // replaced   : false,
                        // clazz      : _,
                        // caption    : elmCap,
                        // captionCSS : ''
                    } );
                };
            };
        };
    };

    if( ua[ 'WebKit' ] < 525.13 ){ // Safari3-
        g_html.onclick = function( e ){
            if( PICA_THUMBNAIL_safariPreventDefault ){
                PICA_THUMBNAIL_safariPreventDefault = false;
                e.preventDefault();
                return false;
            };
        };
    };

    g_unloadEventCallbacks[ g_unloadEventCallbacks.length ] = function(){
        var i = -1, obj;
        
        for( ; obj = PICA_THUMBNAIL_IMGS[ ++i ]; ){
            obj.elmA.onkeydown = obj.elmA.onclick = obj.elmImg.onclick = g_emptyFunction;
            obj.elmA.onkeydown = obj.elmA.onclick = obj.elmImg.onclick = null;
        };
        g_html.onclick = g_emptyFunction;
    };
};

function PICA_THUMBNAIL_onClickThumbnail( e, cancelAction ){
    var ev  = e || event,
        key = ev.keyCode || ev.witch,
        i   = PICA_THUMBNAIL_IMGS.length,
        _   = '',
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
                    elmImg.style.width = obj.thumbWidth;
                    elmImg.src = obj.thumbUrl;
                    elmA.className = obj.clazz;
                    if( elmCap = obj.caption ) elmCap.style.cssText = obj.captionCSS;
                } else {
                    // small -> Large
                    if( src = obj.originalUrl ){
                        delete obj.originalUrl;
                        
                        while( parent = parent.parentNode || parent.parentElement ){
                            if( 0 <= ( ' ' + parent.className + ' ' ).indexOf( ' caption ' ) ){
                                obj.caption    = parent;
                                obj.captionCSS = parent.style.cssText;
                            } else {
                                tag = parent.tagName.toUpperCase();
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
                    
                    obj.clazz = c = elmA.className;
                    elmA.className = ( c ? c + ' ' : _ ) + 'jL';
                    elmImg.style.width = _;
                    elmImg.src = obj.large;
                    if( elmCap = obj.caption ){
                        elmCap.style.cssText = 'float:none;margin-right:0';
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