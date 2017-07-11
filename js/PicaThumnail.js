(function( window, document, emptyFunction, rootID ){
	var tempOnload   = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
		tempOnUnload = window.onunload,
		w3cDOM       = !!document.getElementsByTagName,
		html         = document.documentElement || w3cDOM ? document.getElementsByTagName( 'html' )[ 0 ] : document.all.tags( 'HTML' )[ 0 ],
		IMGS         = [], safariPreventDefault;
	
	onload = function( e ){
		var root  = w3cDOM ? document.getElementById( rootID ) : document.all[ rootID ],
			links = w3cDOM ? root.getElementsByTagName( 'A' ) : root.all.tags( 'A' ),
			i = -1, _ = '', elmA, elmImg, tag, href, ext;
		
		if( tempOnload ) tempOnload( e );
		tempOnload = null;
		
		if( onload === arguments.callee ){
			onload = emptyFunction;
			onload = null;
		};
		
		for( ; elmA = links[ ++i ]; ){
			elmImg = elmA.children.length === 1 && elmA.children[ 0 ];
			tag    = elmImg && elmImg.tagName;
			if( tag === 'IMG' || tag === 'img' ){
				href = elmA.getAttribute( 'href' );
				ext  = href.split( '?' ).join( _ ).split( '#' ).join( _ ).split( '.' );
				ext  = ( ext[ ext.length - 1 ] || _ ).toLowerCase();
				if( 0 <= 'jpg png gif bmp'.indexOf( ext.substr( 0, 3 ) ) || 0 <= 'jpeg webp'.indexOf( ext.substr( 0, 4 ) ) ){
					elmA.onclick = elmImg.onclick = onClickThumbnail;
					IMGS.push( {
						elmA        : elmA,
						thumbUrl    : elmImg.src,
						thumbWidth  : elmImg.style.width = elmImg.offsetWidth + 'px',
						originalUrl : href,
						elmImg      : elmImg,
						replaced    : false,
						clazz       : _
					} );
				};
			};
		};
	};

	function onClickThumbnail( e ){
		var i = IMGS.length,
			_ = '',
			elmImg = this,
			parent, src, obj, tag, w, elms, size, n, c;
		
		for( ; i; ){
			obj = IMGS[ --i ];
			if( obj.elmImg === elmImg ){
				
				elmA = parent = obj.elmA;
				
				if( obj.replaced ){
					// Large -> small
					elmImg.style.width = obj.thumbWidth;
					elmImg.setAttribute( 'src', obj.thumbUrl );
					elmA.className = obj.clazz;
					if( obj.caption ) obj.caption.style.cssText = obj.captionCSS;
				} else {
					// small -> Large
					if( src = obj.originalUrl ){
						delete obj.originalUrl;
						
						while( parent = parent.parentNode || parent.parentElement ){
							tag = parent.tagName.toUpperCase();
							if( 0 <= ( ' ' + parent.className + ' ' ).indexOf( ' caption ' ) ){
								obj.caption    = parent;
								obj.captionCSS = parent.style.cssText;
								continue;
							};
							if( tag === 'DIV' || tag === 'P' || tag === 'BLOCKQUOT' ) break;
						};
						
						w = parent.offsetWidth;
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
					
					obj.clazz = c = elmA.getAttribute( 'className' ) || _;
					elmA.className = ( c ? c + ' ' : _ ) + 'jL';
					elmImg.style.width = _;
					elmImg.setAttribute( 'src', obj.large );
					if( obj.caption ){
						obj.caption.style.cssText = 'float:none;margin-right:0';
					};
				};

				obj.replaced = !obj.replaced;
			};
		};
		
		if( e ){
			e.preventDefault();
			e.stopPropagation();
			safariPreventDefault = true;
			return false;
		} else {
			event.cancelBubble = true;
			return event.returnValue = false;
		};
	};
	
	html.onclick = function( e ){
		if( safariPreventDefault && e ){
			safariPreventDefault = false;
			e.preventDefault();
			return false;
		};
	};
	
	onunload = function(){
		var i = -1, obj;
		
		if( tempOnUnload ) tempOnUnload();
		tempUnOnload = null;
		
		if( onunload === arguments.callee ){
			onunload = emptyFunction;
			onunload = null;
		};
		
		for( ; obj = IMGS[ ++i ]; ){
			obj.elmA.onclick = obj.elmImg.onclick = emptyFunction;
			obj.elmA.onclick = obj.elmImg.onclick = null;
		};
		html.onclick = emptyFunction;
	};
})( window, document, new Function, 'jM' );
