/*
 * 途中でサイドバーの要素が変化する -> 知りません
 */
"use strict";

var SIDEBAR_FIXER_ID_MAIN    = 'jM',
    SIDEBAR_FIXER_ID_SIDEBAR = 'jS',
    SIDEBAR_FIXER_ID_WRAPPER = 'jF',
    /*
     * positionFixed
     *   original :
     *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
     */
    SIDEBAR_FIXER_positionFixed =
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
    SIDEBAR_FIXER_elmRoot,
    SIDEBAR_FIXER_elmSide,
    SIDEBAR_FIXER_elmMain,
    SIDEBAR_FIXER_elmWrap,
    SIDEBAR_FIXER_transformProp,
    SIDEBAR_FIXER_sidebarY = 0,
    SIDEBAR_FIXER_can3D;

if( !ua[ 'OperaMin' ] && !ua[ 'UCWEB' ] ){

    g_scrollEventCallbacks[ g_scrollEventCallbacks.length ] =
    g_resizeEventCallbacks[ g_resizeEventCallbacks.length ] = SIDEBAR_FIXER_fix;

    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function( e ){
        var transf = 'transform',
            perspe = 'perspective',
            style  = g_body.style, undef;

        SIDEBAR_FIXER_elmRoot = document.compatMode !== 'CSS1Compat' ? g_body : g_html || g_body;
        SIDEBAR_FIXER_elmSide = getElementById( SIDEBAR_FIXER_ID_SIDEBAR );
        SIDEBAR_FIXER_elmMain = getElementById( SIDEBAR_FIXER_ID_MAIN );
        
        // ラッパー要素を作成, sidebar の子要素をラッパー要素の下に

        SIDEBAR_FIXER_elmWrap = document.createElement( 'div' );
        SIDEBAR_FIXER_elmSide.insertBefore( SIDEBAR_FIXER_elmWrap, SIDEBAR_FIXER_elmSide.firstChild );
        SIDEBAR_FIXER_elmWrap.id          = SIDEBAR_FIXER_ID_WRAPPER;

        if( SIDEBAR_FIXER_elmSide.onwheel !== undefined ){
            SIDEBAR_FIXER_elmSide.onwheel = SIDEBAR_FIXER_onwheel;
        } else if( SIDEBAR_FIXER_elmSide.onMozMousePixelScroll !== undefined ){
            SIDEBAR_FIXER_elmSide.onMozMousePixelScroll = SIDEBAR_FIXER_onwheel;
        } else if( SIDEBAR_FIXER_elmSide.onDOMMouseScroll !== undefined ){
            SIDEBAR_FIXER_elmSide.onDOMMouseScroll = SIDEBAR_FIXER_onwheel;
        } else if( SIDEBAR_FIXER_elmSide.onmousewheel !== undefined || ua[ 'Prsto' ] ){
            SIDEBAR_FIXER_elmSide.onmousewheel = SIDEBAR_FIXER_onwheel;
        };

        while( 1 < SIDEBAR_FIXER_elmSide.childNodes.length ){
            SIDEBAR_FIXER_elmWrap.appendChild( SIDEBAR_FIXER_elmSide.childNodes[ 1 ] );
        };

        SIDEBAR_FIXER_transformProp = style[ transf ] !== undef ? transf : 
                        style[ '-o-' + transf ] !== undef ? '-o-' + transf : 
                        style[ '-ms-' + transf ] !== undef ? '-ms-' + transf : 
                        style[ '-moz-' + transf ] !== undef ? '-moz-' + transf : 
                        style[ '-webkit-' + transf ] !== undef ? '-webkit-' + transf : '';
        
        SIDEBAR_FIXER_can3D = !ua[ 'IE' ] && !ua[ 'Edge' ]  && ( // Win8.1 以下の IE にはGPU描画エラー有、Win10の Edge, IE11- は3D系が付くとtransitionしない
                        style[ perspe ] !== undef ||
                        style[ '-moz-' + perspe ] !== undef ||
                        style[ '-webkit-' + perspe ] !== undef );

        if( !SIDEBAR_FIXER_transformProp ){
            if( !SIDEBAR_FIXER_positionFixed ){
                // elmMain への relative 設定は ie6 で必要! 
                // 無いとマルチカラム判定で elmMain.offsetTop = 0, elmSide.offsetTop = 64 になり fix に進まない.
                SIDEBAR_FIXER_elmSide.style.position = SIDEBAR_FIXER_elmMain.style.position = 'relative';
            }
        };

        SIDEBAR_FIXER_fix();
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
 * @param {number=} wheelDeltaY
 */
function SIDEBAR_FIXER_fix( wheelDeltaY ){
        // transform pos:fixed が使えない場合、塗りのために width を指定するので pos:relative でなくレイアウトコストの低い pos:absolute を使用
    var POS_ABSOLUT_TOP = 'position:absolute;left:0;width:100%;top:',
        POS_FIXED_WIDTH = 'position:fixed;width:',
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
        } else
        if( SIDEBAR_FIXER_positionFixed ){
            //if( ( btmInViewPort || outOnViewPort ) ){
             //   y = ( winH - ( mainY + mainH - scrollY ) );
             //   css = POS_FIXED_WIDTH + SIDEBAR_FIXER_elmSide.offsetWidth + 'px;bottom:' + y + 'px';
            //} else
            if( y !== 0 ){
                y  -= scrollY - mainY; 
                css = POS_FIXED_WIDTH + SIDEBAR_FIXER_elmSide.offsetWidth + 'px;top:' + y + 'px';
            };     
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
    SIDEBAR_FIXER_elmWrap.style.cssText = css;

    SIDEBAR_FIXER_sidebarY = sidebarY;

    return isMultiColumn && !mainInViewPort && !nocancelWheel;
};

function SIDEBAR_FIXER_onwheel( _event ){
    // https://developer.mozilla.org/ja/docs/DOM/DOM_event_reference/mousewheel
    // TODO axis
    // https://w3g.jp/blog/tools/wheelevent_crossbrowser
    // ホイール系イベント2014年版クロスブラウザ
    var e  = _event || event,
        deltaY   = SIDEBAR_FIXER_getFinite( e.deltaY, e.wheelDeltaY / 120, e.wheelDelta / -120,  e.detail / ( e.type === 'MozMousePixelScroll' ? 45 : 3 ) ),
        cancel   = deltaY && SIDEBAR_FIXER_fix( deltaY );

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