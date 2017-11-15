/*
 * 途中でサイドバーの要素が変化する -> 知りません
 */
;
!( ua[ 'OperaMin' ] || ua[ 'UCWEB' ] ) &&
(function( window, document, navigator, parseFloat, mainID, sidebarID, wrapperID ){
	"use strict";
	var
	// memory
		preonload   = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
		preonscroll = window.onscroll,
		preonresize = window.onresize,
		preonunload = window.onunload,
		emptyFunc   = new Function,

		ua          = window[ 'ua' ],
	/*
	 * positionFixed
	 *   original :
	 *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
	 */
		positionFixed =
			!(
				// iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
				( ua[ 'iOS' ] < 5 ) ||
				// Opera Mini
				// https://www.tobymackenzie.com/blog/2017/05/11/opera-mini-supporting-fixed-position/
				//( ua[ 'OperaMin' ] ) ||
				// UC Browser speed mode on
				//( ua[ 'UCWEB' ] ) ||
				//Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
				( ua[ 'AOSP' ] < 2.2 ) ||
				// Firefox Mobile before 6.0 -
				( ua[ 'Fennec' ] < 6 ) ||
				// WebOS less than 3
				( ua[ 'WebOS' ] && ua[ 'WebKit' ] < 534 ) ||
				// MeeGo
				( ua[ 'MeeGo' ] ) ||
				// IE6-
				( ua[ 'IE' ] < 7 )
			),
		// !table-cell
		root, body, elmSide, elmMain, elmWrap,
		resizeTimerID, hasScroll, transformProp, can3D,
		init = onload =
	function( e ){
		var transf = 'transform',
			perspe = 'perspective',
			style, undef;
		
		body  = document.body;
		style = body.style;
		
		if( preonload ) preonload( e );
		preonload = null;

		if( onload === init ){
			onload = emptyFunc;
			onload = init = null;
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
		
		can3D         = !( ua[ 'IE' ] && ua[ 'Windows' ] < 10 ) && (
						style[ perspe ] !== undef ||
						style[ '-moz-' + perspe ] !== undef ||
						style[ '-webkit-' + perspe ] !== undef );

		if( !transformProp ){
			if( !positionFixed ){
				// elmMain への relative 設定は ie6 で必要! 
				// 無いとマルチカラム判定で elmMain.offsetTop = 0, elmSide.offsetTop = 64 になり fix に進まない.
				elmSide.style.position = elmMain.style.position = 'relative';
			}
		};

		fixSidebar();
	};
	
	function fixSidebar(){
			// transform pos:fixed が使えない場合、塗りのために width を指定するので pos:relative でなくレイアウトコストの低い pos:absolute を使用
		var POS_ABSOLUT_TOP = 'position:absolute;left:0;width:100%;top:',
			POS_FIXED_WIDTH = 'position:fixed;width:',
			TRANSF_TRANSL_0 = transformProp + ':translate' + ( can3D ? '3D(0,' : '(0,' ), /* 3D は Android 3.1 用 */
			TRANSF_TRANSL_Z = can3D ? 'px,0)' : 'px)',
			PX    = 'px', 
			// window の幅
			winW  = getFinite( window.innerWidth, root.offsetWidth ),
			// window の高さ
			winH  = getFinite( window.innerHeight, root.offsetHeight ),
			elm   = elmMain,
			mainH = elm.offsetHeight,
			sideH = elmWrap.offsetHeight,
			mainY = 0,
			css   = '',
			scrlY;//, log;
		
		resizeTimerID = 0;

		function getFinite(){
			var args = arguments, i = 0, l = args.length;
			
			for( ; i < l; ++i ){
				if( isFinite( args[ i ] ) ) return args[ i ];
			};
			return 0;
		};

		// elmSide.offsetTop === elmMain.offsetTop ならマルチカラム
		if( sideH < mainH && elmSide.offsetTop === elm.offsetTop ){

			// sidebar の y
			while( elm ){
				mainY += elm.offsetTop || 0;
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
					// ViewPort の天に貼り付けする
					if( transformProp ){
						css = TRANSF_TRANSL_0 + ( scrlY - mainY ) + TRANSF_TRANSL_Z;
					} else
					if( positionFixed ){
						css = POS_FIXED_WIDTH + elmSide.offsetWidth + 'px;top:0';
					} else {
						css = POS_ABSOLUT_TOP + ( scrlY - mainY ) + PX;
					};
					//log += '_';
				} else {
					// 底に貼り付けする
					if( transformProp ){
						css = TRANSF_TRANSL_0 + ( mainH - sideH ) + TRANSF_TRANSL_Z;
					} else
					if( positionFixed ){
						css = POS_FIXED_WIDTH + elmSide.offsetWidth + 'px;bottom:' + ( winH - ( mainY + mainH - scrlY ) ) + PX;
					} else {
						css = POS_ABSOLUT_TOP + ( mainH - sideH ) + PX;
					};
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
					css = TRANSF_TRANSL_0 + ( scrlY - mainY - ( sideH - winH ) ) + TRANSF_TRANSL_Z;
				} else
				if( positionFixed ){
					css = POS_FIXED_WIDTH + elmSide.offsetWidth + 'px;bottom:0';
				} else {
					css = POS_ABSOLUT_TOP + ( scrlY - mainY - ( sideH - winH ) ) + PX;
				};
				//log += '_';
			} else {
				if( transformProp ){
					css = TRANSF_TRANSL_0 + ( mainH - sideH ) + TRANSF_TRANSL_Z;
				} else
				if( positionFixed ){
					css = POS_FIXED_WIDTH + elmSide.offsetWidth + 'px;bottom:' + ( winH - ( mainY + mainH - scrlY ) ) + PX;
				} else {
					css = POS_ABSOLUT_TOP + ( mainH - sideH ) + PX;
				};
				//log += '-';
			};
		};

		if( transformProp && css ) css += ';-webkit-overflow-scrolling:touch;';

		elmWrap.style.cssText = css;

		//document.title = css;
		//console.log( 'mainY:' + mainY + ' scrlY:' + scrlY + ' winH:' + winH + ' sideH:' + sideH );
	};

// onmouseout onblur
// onmouseover onmousedown onfocus

	onscroll = function( e ){
		if( preonscroll ) preonscroll( e );
		//document.title = 'scroll ' + !!root;
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
