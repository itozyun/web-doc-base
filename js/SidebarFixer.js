/*
 * 途中でサイドバーの要素が変化する -> 知りません
 */
"use strict";

var SIDEBAR_FIXER_ID_SIDEBAR = 'jsSide', // jsSide
    SIDEBAR_FIXER_ID_WRAPPER = 'jsSidebarFixer', // jsSidebarFixer
    SIDEBAR_FIXER_IDS_WHEEL  = [ 'jsSidebarFixer1', 'jsSidebarFixer2' ],
    /*
     * positionFixed
     *   original :
     *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
     */
    /* SIDEBAR_FIXER_positionFixed =
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
            ), */
    SIDEBAR_FIXER_elmRoot,
    SIDEBAR_FIXER_elmSide,
    SIDEBAR_FIXER_elmMain,
    SIDEBAR_FIXER_elmWrap,
    SIDEBAR_FIXER_transformProp,
    SIDEBAR_FIXER_sidebarY = 0,
    SIDEBAR_FIXER_can3D;

if( !g_isMobile && !ua[ 'OperaMin' ] && !ua[ 'UCWEB' ] ){

    g_scrollEventCallbacks[ g_scrollEventCallbacks.length ] =
    g_resizeEventCallbacks[ g_resizeEventCallbacks.length ] = SIDEBAR_FIXER_fix;

    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function(){
        var transf = 'transform',
            perspe = 'perspective',
            style  = g_body.style,
            i = -1, id, elm;

        SIDEBAR_FIXER_elmRoot = document.compatMode !== 'CSS1Compat' ? g_body : g_html || g_body;
        SIDEBAR_FIXER_elmSide = DOM_getElementById( SIDEBAR_FIXER_ID_SIDEBAR );
        SIDEBAR_FIXER_elmMain = g_elmMain;
        
        // ラッパー要素を作成, sidebar の子要素をラッパー要素の下に

        SIDEBAR_FIXER_elmWrap = DOM_createElement( 'div' );
        DOM_insertBefore( SIDEBAR_FIXER_elmWrap, DOM_getFirstChild( SIDEBAR_FIXER_elmSide ) );
        SIDEBAR_FIXER_elmWrap.id = SIDEBAR_FIXER_ID_WRAPPER;

        while( 1 < DOM_getChildNodes( SIDEBAR_FIXER_elmSide ).length ){
            DOM_appendChild( SIDEBAR_FIXER_elmWrap, DOM_getChildNodes( SIDEBAR_FIXER_elmSide )[ 1 ] );
        };

        while( id = SIDEBAR_FIXER_IDS_WHEEL[ ++i ] ){
            elm = DOM_getElementById( id );
            if( Type_notUndefined( elm.onwheel ) ){
                elm.onwheel = SIDEBAR_FIXER_onwheel;
            } else if( Type_notUndefined( elm.onMozMousePixelScroll ) ){
                elm.onMozMousePixelScroll = SIDEBAR_FIXER_onwheel;
            } else if( Type_notUndefined( elm.onDOMMouseScroll ) ){
                elm.onDOMMouseScroll = SIDEBAR_FIXER_onwheel;
            } else if( Type_notUndefined( elm.onmousewheel ) || ua[ 'Prsto' ] ){
                elm.onmousewheel = SIDEBAR_FIXER_onwheel;
            };            
        };

        SIDEBAR_FIXER_transformProp =
            Type_notUndefined( style[ transf ] ) ? transf : 
            Type_notUndefined( style[ '-o-' + transf ] ) ? '-o-' + transf : 
            Type_notUndefined( style[ '-ms-' + transf ] ) ? '-ms-' + transf : 
            Type_notUndefined( style[ '-moz-' + transf ] ) ? '-moz-' + transf : 
            Type_notUndefined( style[ '-webkit-' + transf ] ) ? '-webkit-' + transf : '';
        
        SIDEBAR_FIXER_can3D = !ua[ 'IE' ] && !ua[ 'Edge' ]  && ( // Win8.1 以下の IE にはGPU描画エラー有、Win10の Edge, IE11- は3D系が付くとtransitionしない
            Type_notUndefined( style[ perspe ] ) ||
            Type_notUndefined( style[ '-moz-' + perspe ] ) ||
            Type_notUndefined( style[ '-webkit-' + perspe ] ) );

        /* if( !SIDEBAR_FIXER_transformProp ){
            if( !SIDEBAR_FIXER_positionFixed ){
                // elmMain への relative 設定は ie6 で必要! 
                // 無いとマルチカラム判定で elmMain.offsetTop = 0, elmSide.offsetTop = 64 になり fix に進まない.
                SIDEBAR_FIXER_elmSide.style.position = SIDEBAR_FIXER_elmMain.style.position = 'relative';
            };
        }; */

        SIDEBAR_FIXER_fix();
    };

    g_unloadEventCallbacks[ g_unloadEventCallbacks.length ] =
        function(){
            var i = -1, id, elm;

            while( id = SIDEBAR_FIXER_IDS_WHEEL[ ++i ] ){
                elm = DOM_getElementById( id );
                elm.onwheel = elm.onMozMousePixelScroll = elm.onDOMMouseScroll = elm.onmousewheel = g_emptyFunction;
                elm.onwheel = elm.onMozMousePixelScroll = elm.onDOMMouseScroll = elm.onmousewheel = null;
            };
        };
};

/**
 * @param {...number} arg
 * @return {number}
 */
function SIDEBAR_FIXER_getFinite( arg ){
    var args = arguments, i = 0, l = args.length;
        
    for( ; i < l; ++i ){
        if( isFinite( args[ i ] ) ) return args[ i ];
    };
    return 0;
};

/**
 * @param {number|boolean=} wheelDeltaY
 */
function SIDEBAR_FIXER_fix( wheelDeltaY ){
        // transform pos:fixed が使えない場合、塗りのために width を指定するので pos:relative でなくレイアウトコストの低い pos:absolute を使用
    var POS_ABSOLUT_TOP = 'position:absolute;left:0;width:100%;top:',
        // POS_FIXED_WIDTH = 'position:fixed;width:',
        TRANSF_TRANSL_0 = SIDEBAR_FIXER_transformProp + ':translate' + ( SIDEBAR_FIXER_can3D ? '3D(0,' : '(0,' ), /* 3D は Android 3.1 用 */
        TRANSF_TRANSL_Z = SIDEBAR_FIXER_can3D ? 'px,0)' : 'px)',
        winH  = SIDEBAR_FIXER_getFinite( window.innerHeight, SIDEBAR_FIXER_elmRoot.offsetHeight ),
        elm   = SIDEBAR_FIXER_elmMain,
        mainH = elm.offsetHeight,
        sideH = SIDEBAR_FIXER_elmWrap.offsetHeight,
        mainY = 0,
        css   = '',
        sidebarY = 0,
        scrollY = SIDEBAR_FIXER_getFinite( window.pageYOffset, SIDEBAR_FIXER_elmRoot.scrollTop, g_body.scrollTop ),
        isMultiColumn  = SIDEBAR_FIXER_elmSide.offsetTop === elm.offsetTop,
        sidebarIsLower = sideH < mainH,
        outOnViewPort,
        outsideViewPort,
        topInViewPort,
        btmInViewPort,
        mainInViewPort,
        visibleHeight,
        sideInViewPort,
        scrollLimit,
        nocancelWheel;

    function createPositioning( y ){
        sidebarY = y;
        if( SIDEBAR_FIXER_transformProp ){
            css = TRANSF_TRANSL_0 + y + TRANSF_TRANSL_Z;
        /* } else
        if( SIDEBAR_FIXER_positionFixed ){
            if( y !== 0 ){
                y  -= scrollY - mainY; 
                css = POS_FIXED_WIDTH + SIDEBAR_FIXER_elmSide.offsetWidth + 'px;top:' + y + 'px';
            }; */
        } else {
            css = POS_ABSOLUT_TOP + y + 'px';
        };
    };

    if( isMultiColumn ){
        while( elm ){
            mainY += elm.offsetTop || 0;
            elm    = elm.offsetParent || elm.parentElement;
        };
        outOnViewPort   = mainY + mainH <= scrollY;
        outsideViewPort = scrollY + winH <= mainY;
        topInViewPort   = ( scrollY < mainY ) && ( mainY < scrollY + winH );
        btmInViewPort   = ( scrollY < mainY + mainH ) && ( mainY + mainH < scrollY + winH );
        mainInViewPort  = topInViewPort && btmInViewPort,
        visibleHeight   = ( mainY + mainH - scrollY ) < winH ? ( mainY + mainH - scrollY ) : winH;
        sideInViewPort  = sideH <= visibleHeight;

        if( !wheelDeltaY ){
            if( sidebarIsLower ){
                if( topInViewPort || outsideViewPort ){
                    createPositioning( 0 );
                    //console.log( 'A ' + sidebarY );
                } else if( sideInViewPort ){
                    createPositioning( scrollY - mainY );
                    //console.log( 'B ' + sidebarY );
                } else if( btmInViewPort || outOnViewPort ){
                    createPositioning( mainH - sideH );
                } else {
                    scrollLimit = scrollY + winH - mainY - sideH;
                    scrollLimit = scrollLimit < 0 ? 0 : scrollLimit;
                    createPositioning( scrollLimit );
                    //console.log( 'C ' + sidebarY + ' limit:' + scrollLimit );
                };
            };
        } else {
            // マウスが sidebar にホバーしている
            if( sideInViewPort ){
                nocancelWheel = true;
                //console.log( 'mainInViewPort:' + mainInViewPort + ' sideH <= visibleHeight:' + visibleHeight );
            } else {
                sidebarY = SIDEBAR_FIXER_sidebarY - wheelDeltaY * 60;
                if( 0 < wheelDeltaY ){
                    scrollLimit = scrollY + winH - mainY - sideH;
                    scrollLimit = mainH - sideH < scrollLimit ? mainH - sideH : scrollLimit;
                    sidebarY    = sidebarY < scrollLimit ? scrollLimit : sidebarY;
                    //console.log( '↓ ' + sidebarY + ' limit:' + scrollLimit );
                } else {
                    scrollLimit = scrollY - mainY < 0 ? 0 : scrollY - mainY;
                    sidebarY    = scrollLimit < sidebarY ? scrollLimit : sidebarY;
                    //console.log( '↑ ' + sidebarY + ' limit:' + scrollLimit );
                };
                createPositioning( sidebarY );
            };
        };
    };

    if( SIDEBAR_FIXER_transformProp && css ) css += ';-webkit-overflow-scrolling:touch;';
    DOM_setCssText( SIDEBAR_FIXER_elmWrap, css );

    SIDEBAR_FIXER_sidebarY = sidebarY;

    return isMultiColumn && !mainInViewPort && !nocancelWheel;
};

function SIDEBAR_FIXER_onwheel( _event ){
    // https://developer.mozilla.org/ja/docs/DOM/DOM_event_reference/mousewheel
    // TODO axis
    // https://w3g.jp/blog/tools/wheelevent_crossbrowser
    // ホイール系イベント2014年版クロスブラウザ
    var e  = _event || event,
        hitChild = this !== e.target,
        deltaY   = hitChild && SIDEBAR_FIXER_getFinite( e.deltaY, e.wheelDeltaY / 120, e.wheelDelta / -120,  e.detail / ( e.type === 'MozMousePixelScroll' ? 45 : 3 ) ),
        cancel   = hitChild && deltaY && SIDEBAR_FIXER_fix( deltaY );

    if( cancel ){
        if( _event ){
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
            return e.returnValue = false;
        };
    };
};