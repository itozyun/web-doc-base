/*
 * 途中でサイドバーの要素が変化する -> 知りません
 */
;(function( window, document, navigator, parseFloat, mainID, sidebarID, wrapperID ){

	var
	// memory
		preonload   = onload,
		preonscroll = onscroll,
		preonresize = onresize,
		preonunload = onunload,
		emptyFunc   = new Function,
	/*
	 * positionFixed
	 *   original :
	 *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
	 */
		positionFixed = (function(){
			var ua        = navigator.userAgent,
				platform  = navigator.platform,
				// Rendering engine is Webkit, and capture major version
				wkversion = parseFloat( ua.split( 'AppleWebKit/' )[ 1 ] ),
				ffversion = parseFloat( ua.split( 'Fennec/' )[ 1 ] ),
				omversion = parseFloat( ua.split( 'Opera Mobi/' )[ 1 ] );
		
			if(
				// iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
				( ( platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) && wkversion < 534 ) ||
				// Opera Mini
				( window.operamini && ({}).toString.call( window.operamini ) === "[object OperaMini]" ) || omversion < 7458	||
				//Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
				( ua.indexOf( "Android" ) > -1 && wkversion < 533 ) ||
				// Firefox Mobile before 6.0 -
				( ffversion < 6 ) ||
				// WebOS less than 3
				( window[ "palmGetResource" ] && wkversion < 534 )	||
				// MeeGo
				( ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1 ) ||
				// IE6-
				( parseFloat( ua.split( 'MSIE ' )[ 1 ] ) < 7 )
				) {
				return false;
			};
		
			return true;
		})(),
		// !table-cell
		root, body, elmSide, elmMain, elmWrap,
		resizeTimerID, hasScroll, transformProp;
	
	function getFinite(){
		var args = arguments, i = 0, l = args.length;
		
		for( ; i < l; ++i ){
			if( isFinite( args[ i ] ) ) return args[ i ];
		};
		return 0;
	};

	onload = function(e){
		var transf = 'transform',
			style, undef;
		
		body  = document.body;
		style = body.style;
		
		if( preonload ) preonload(e);
		preonload = null;

		if( onload === arguments.callee ){
			onload = emptyFunc;
			onload = null;
		};
		
		root    = document.compatMode !== 'CSS1Compat' ? body : document.documentElement || body;
		elmSide = window[ sidebarID ] || document[ sidebarID ];
		elmMain = window[ mainID ] || document[ mainID ];
		
		// ラッパー要素を作成, sidebar の子要素をラッパー要素の下に

		elmWrap = document.createElement( 'div' );
		elmSide.insertBefore( elmWrap, elmSide.firstChild );
		elmWrap.id = wrapperID;
		while( 1 < elmSide.childNodes.length ){
			elmWrap.appendChild( elmSide.childNodes[ 1 ] );
		};

		transformProp = style[ transf ] !== undef ? transf : 
						style[ '-o-' + transf ] !== undef ? '-o-' + transf : 
						style[ '-ms-' + transf ] !== undef ? '-ms-' + transf : 
						style[ '-moz-' + transf ] !== undef ? '-moz-' + transf : 
						style[ '-webkit-' + transf ] !== undef ? '-webkit-' + transf : '';
		
		if( !transformProp && !positionFixed ) elmSide.style.position = 'relative';

		fixSidebar();
	};
	
	function fixSidebar(){
		var elm = elmMain,
			POS_RELATIVE_TOP = 'position:relative;top:',
			POS_FIXED_WIDTH  = 'position:fixed;width:',
			TRANSF_TRANSL_0  = transformProp + ':translate(0,',
			PX = 'px', mainY = 0, css = '',
			winW, winH, mainH, sideH, scrlY;//, log;
		
		resizeTimerID = 0;

		// window の幅
		winW  = getFinite( window.innerWidth, root.offsetWidth );
		// window の高さ
		winH  = getFinite( window.innerHeight, root.offsetHeight );
		mainH = elmMain.offsetHeight;
		sideH = elmWrap.offsetHeight;
		
		// elmSide.offsetTop === elmMain.offsetTop ならマルチカラム
		if( elmSide.offsetTop === elmMain.offsetTop && sideH < mainH ){

			// sidebar の y
			while( elm ){
				mainY += elm.offsetTop  || 0;
				elm    = elm.offsetParent || elm.parentElement;
			};
	
			// scroll位置
			scrlY = getFinite( window.pageYOffset, window.scrollTop, root.scrollTop, body.scrollTop );
			
			//log = 'L:';
			
			// サイドが画面縦幅に納まる
			if( sideH < winH ){
				//log = 's:';
				if( scrlY <= mainY || scrlY <= mainY + sideH - winH ){
					//log += '^';
				} else
				if( scrlY <= mainY + mainH - sideH ){
					// 天に貼り付けする
					if( transformProp ){
						css = TRANSF_TRANSL_0 + ( scrlY - mainY ) + 'px)';
					} else
					if( positionFixed ){
						css = POS_FIXED_WIDTH + elmSide.offsetWidth + PX + ';top:0';
					} else {
						css = POS_RELATIVE_TOP + ( scrlY - mainY ) + PX;
					};
					//log += '_';
				} else {
					// 底に貼り付けする
					css = POS_RELATIVE_TOP + ( mainH - sideH ) + PX;
					//log += '-';
				};
			} else
			// 納まらない
			if( scrlY <= mainY || scrlY <= mainY + ( sideH - winH ) ){
				// そのまま
				//log += '^';
			} else
			if( scrlY + winH <= mainY + mainH ){
				// 底に貼り付けする
				if( transformProp ){
					css = TRANSF_TRANSL_0 + ( scrlY - mainY - ( sideH - winH ) ) + 'px) translateZ(0)'; /* Z() は Android 3.1　用 */
				} else
				if( positionFixed ){
					css = POS_FIXED_WIDTH + elmSide.offsetWidth + 'px;bottom:0';
				} else {
					css = POS_RELATIVE_TOP + ( scrlY - mainY - ( sideH - winH ) ) + PX;
				};
				//log += '_';
			} else {
				if( transformProp ){
					css = TRANSF_TRANSL_0 + ( mainH - sideH ) + 'px)';
				} else {
					css = POS_RELATIVE_TOP + ( mainH - sideH ) + PX;
				};
				//log += '-';
			};
		};

		if( transformProp && css ) css += ';-webkit-overflow-scrolling:touch;';

		elmWrap.style.cssText = css;

		//document.title = log + ';' + css;
		//console.log( 'mainY:' + mainY + ' scrlY:' + scrlY + ' winH:' + winH + ' sideH:' + sideH );
	};

// onmouseout onblur
// onmouseover onmousedown onfocus

	onscroll = function( e ){
		if( preonscroll ) preonscroll( e );
		
		root && fixSidebar();
	};

	onresize = function( e ){
		if( preonresize ) preonresize( e );
		if( resizeTimerID ) clearTimeout( resizeTimerID );
		resizeTimerID = setTimeout( fixSidebar, 100 );
	};
	
	// unload
	onunload = function( e ){
		if( preonunload ) preonunload( e );
		onload = onscroll = onresize = onunload = emptyFunc;
		onload = onscroll = onresize = onunload = null;
	};
	
})( window, document, navigator, parseFloat, 'jM', 'jS', 'jF' );
