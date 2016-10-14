(function( window, document, Function, rootID ){
	var tempOnload   = onload,
		tempOnUnload = onunload,
		w3cDOM       = !!document.getElementsByTagName,
		html         = document.documentElement || w3cDOM ? document.getElementsByTagName( 'html' )[ 0 ] : document.all.tags( 'HTML' )[ 0 ],
		IMGS         = [], safariPreventDefault;
	
	onload = function( e ){
		var root  = w3cDOM ? document.getElementById( rootID ) : document.all[ rootID ],
			links = w3cDOM ? root.getElementsByTagName( 'A' ) : root.all.tags( 'A' ),
			i = -1, _ = '', link, img, tag, href, ext;
		
		if( tempOnload ) tempOnload( e );
		tempOnload = null;
		
		if( onload === arguments.callee ){
			onload = new Function();
			onload = null;
		};
		
		for( ; link = links[ ++i ]; ){
			img = link.children.length === 1 && link.children[ 0 ];
			tag = img && img.tagName;
			if( tag === 'IMG' || tag === 'img' ){
				href = link.getAttribute( 'href' );
				ext  = href.split( '?' ).join( _ ).split( '#' ).join( _ ).split( '.' );
				ext  = ( ext[ ext.length - 1 ] || _ ).toLowerCase();
				if( 0 <= 'jpg png gif bmp'.indexOf( ext.substr( 0, 3 ) ) || 0 <= 'jpeg webp'.indexOf( ext.substr( 0, 4 ) ) ){
					link.onclick = onClickThumbnail;
					IMGS.push( {
						a           : link,
						small       : img.src,
						link        : href,
						img         : img,
						smallWidth  : img.style.width = img.offsetWidth + 'px',
						replaced    : false,
						clazz       : _
					} );
				};
			};
		};
	};

	function onClickThumbnail( e ){
		var i = IMGS.length, _ = '', src, obj, parent, tag, w, elms, size, n, c;
		
		for( ; i; ){
			obj = IMGS[ --i ];
			if( obj.a === this ){
				
				img = obj.img;
				
				if( obj.replaced ){
					// Large -> small
					img.style.width = obj.smallWidth;
					img.setAttribute( 'src', obj.small );
					this.className = obj.clazz;
				} else {
					// small -> Large
					if( obj.link ){
						src = obj.link;
						delete obj.link;
						
						while( parent = this.parentNode || this.parentElement ){
							tag = parent.tagName.toUpperCase();
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
					
					obj.clazz = c = this.getAttribute( 'className' ) || _;
					this.className = ( c ? c + ' ' : _ ) + 'jL';
					img.style.width = _;	
					img.setAttribute( 'src', obj.large );
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
		var i = -1, f = new Function, obj;
		
		if( tempOnUnload ) tempOnUnload();
		tempUnOnload = null;
		
		if( onunload === arguments.callee ){
			onunload = f;
			onunload = null;
		};
		
		for( ; obj = IMGS[ ++i ]; ){
			obj.a.onclick = f;
			obj.a.onclick = null;
		};
		html.onclick = f;
	};
})( window, document, Function, 'jM' );
