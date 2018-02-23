;
!( ua[ 'OperaMin' ] || ua[ 'UCWEB' ] ) &&
(function( window, document, emptyFunction, rootID ){
	"use strict";
	var tempOnload   = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
		tempOnUnload = window.onunload,
		w3cDOM       = !!document.getElementsByTagName,
		html         = document.documentElement || w3cDOM && document.getElementsByTagName( 'html' )[ 0 ],
		IMGS         = [],
		MARGIN_LR    = 2,
		safariPreventDefault,
		init = onload =
	function( e ){
		var root  = w3cDOM ? document.getElementById( rootID ) : document.all[ rootID ],
			links = w3cDOM ? root.getElementsByTagName( 'A' ) : root.all[ 'tags' ]( 'A' ),
			i = -1, _ = '', elmA, elmImg, tag, href, ext;
		
		if( tempOnload ) tempOnload( e );
		tempOnload = null;
		
		if( onload === init ){
			onload = emptyFunction;
			onload = null;
		};
		init = null;

		for( ; elmA = links[ ++i ]; ){
			elmImg = elmA.children.length === 1 && elmA.children[ 0 ];
			tag    = elmImg && elmImg.tagName;
			if( tag === 'IMG' || tag === 'img' ){
				href = elmA.getAttribute( 'href' );
				ext  = href.split( '?' ).join( _ ).split( '#' ).join( _ ).split( '.' );
				ext  = ( ext[ ext.length - 1 ] || _ ).toLowerCase();
				if( 0 <= 'jpg png gif bmp'.indexOf( ext.substr( 0, 3 ) ) || 0 <= 'jpeg webp'.indexOf( ext.substr( 0, 4 ) ) ){
					elmA.onkeydown = elmImg.onclick = onClickThumbnail;
					elmA.onclick   = onClickAnchor;
					IMGS.push( {
						elmA        : elmA,
						thumbUrl    : elmImg.src,
						thumbWidth  : elmImg.style.width = ( elmImg.offsetWidth - MARGIN_LR ) + 'px',
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

	function onClickThumbnail( e, cancelAction ){
		var ev  = e || event,
			key = ev.keyCode || ev.witch,
			i   = IMGS.length,
			_   = '',
			elmImg,
			parent, elmA, elmCap, src, obj, tag, w, elms, l, size, n, c;

		if( ev.type === 'keydown' && key !== 13 ) return;

		if( !cancelAction ){		
			for( ; i; ){
				obj = IMGS[ --i ];
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
							
							w = parent.offsetWidth - MARGIN_LR - 1;
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
			safariPreventDefault = true;
			return false;
		} else {
			ev.cancelBubble = true;
			return ev.returnValue = false;
		};
	};
	
	function onClickAnchor( e ){
		return onClickThumbnail( e, true );
	};

	if( ua[ 'WebKit' ] < 525.13 ){ // Safari3-
		html.onclick = function( e ){
			if( safariPreventDefault ){
				safariPreventDefault = false;
				e.preventDefault();
				return false;
			};
		};
	};
	
	onunload = terminate;
	
	function terminate(){
		var i = -1, obj;
		
		if( tempOnUnload ) tempOnUnload();
		tempOnUnload = null;
		
		if( onunload === terminate ){
			onunload = emptyFunction;
			onunload = null;
		};
		
		for( ; obj = IMGS[ ++i ]; ){
			obj.elmA.onkeydown = obj.elmA.onclick = obj.elmImg.onclick = emptyFunction;
			obj.elmA.onkeydown = obj.elmA.onclick = obj.elmImg.onclick = null;
		};
		html.onclick = emptyFunction;
	};
})( window, document, new Function, 'jM' );
