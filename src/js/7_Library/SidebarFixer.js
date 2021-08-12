/*
 * 途中でサイドバーの要素が変化する -> 知りません
 */
var SIDEBAR_FIXER_ID_SIDEBAR    = 'jsSide', // jsSide
    SIDEBAR_FIXER_ID_WRAPPER    = 'jsSidebarFixer', // jsSidebarFixer
    SIDEBAR_FIXER_IDS_WHEEL     = [ 'jsSidebarFixer1', 'jsSidebarFixer2' ],
    SIDEBAR_FIXER_AFTER_SCROLL  = 10 <= p_Trident || p_EdgeHTML || ua[ 'Chromium' ] || p_WebKit, // Safari 13 で確認
    SIDEBAR_FIXER_CAPTURE_FOCUS = p_Gecko || p_Goanna || p_EdgeHTML,
    /*
     * positionFixed
     *   original :
     *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
     */
    SIDEBAR_FIXER_positionFixed = // Opera 9.x-10.x では fixed でないと表示が乱れる
            !(
                // iOS 4.3 and older : Platform is iPhone/Pad/Touch and WebKit version is less than 534 (ios5)
                ( ua[ 'SafariMobile' ] < 5 || ua[ 'iOSWebView' ] < 5 ) ||
                // Opera Mini
                // https://www.tobymackenzie.com/blog/2017/05/11/opera-mini-supporting-fixed-position/
                //( ua[ 'OperaMini' ] ) ||
                // UC Browser speed mode on
                //( ua[ 'UCWEB' ] ) ||
                //Android lte 2.1: Platform is Android and WebKit version is less than 533 (Android 2.2)
                ( ua[ 'AOSP' ] < 2.2 ) ||
                // Firefox Mobile before 6.0 -
                ( ua[ 'Fennec' ] < 6 ) ||
                // WebOS less than 3
                ( ua[ 'WebOS' ] && p_WebKit < 534 ) ||
                // MeeGo
                ( ua[ 'MeeGo' ] ) ||
                // IE6-
                ( p_Trident < 7 ) ||
                // Presto
                ( p_Presto < 9 )
            ),
    SIDEBAR_FIXER_elmRoot,
    SIDEBAR_FIXER_elmSide,
    SIDEBAR_FIXER_elmMain,
    SIDEBAR_FIXER_elmWrap,
    SIDEBAR_FIXER_transformProp = p_cssTransformName,
    SIDEBAR_FIXER_sidebarY = 0,
    SIDEBAR_FIXER_lastScrollY = 0,
    SIDEBAR_FIXER_can3D,
    SIDEBAR_FIXER_skipScroll,
    SIDEBAR_FIXER_isGeckoGte097 = p_Gecko && 0 <= ua.conpare( ua.ENGINE_VERSION, '0.9.7' );

if( !p_isMobile && !p_ServerSideRendering && !( p_Presto < 8 ) ){

    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( !cssAvailability ) return;

            var i = -1, id, elm;

            p_listenScrollEvent( SIDEBAR_FIXER_onscroll );
            p_listenResizeEvent( SIDEBAR_FIXER_onscroll );

            SIDEBAR_FIXER_elmRoot = document.compatMode !== 'CSS1Compat' ? p_body : p_html || p_body;
            SIDEBAR_FIXER_elmSide = p_DOM_getElementById( SIDEBAR_FIXER_ID_SIDEBAR );
            SIDEBAR_FIXER_elmMain = p_elmMain;
            
            // ラッパー要素を作成, sidebar の子要素をラッパー要素の下に
            SIDEBAR_FIXER_elmWrap = p_DOM_insertElementBefore(
                p_DOM_getFirstChild( SIDEBAR_FIXER_elmSide ),
                'div',
                { id : SIDEBAR_FIXER_ID_WRAPPER }
            );

            if( p_Trident || p_Tasman ){
                p_addEventListener( SIDEBAR_FIXER_elmWrap, 'focusin', SIDEBAR_FIXER_onfocus );
            } else if( SIDEBAR_FIXER_CAPTURE_FOCUS ){
                p_addEventListener( document, 'focus', SIDEBAR_FIXER_onfocus, { capture : true, passive : false } );
            } else {
                p_addEventListener( SIDEBAR_FIXER_elmWrap, 'DOMFocusIn', SIDEBAR_FIXER_onfocus, false );
            };

            // Array と NodeList の場合があるので、常に再取得
            while( 1 < p_DOM_getChildNodes( SIDEBAR_FIXER_elmSide ).length ){
                SIDEBAR_FIXER_elmWrap.appendChild( p_DOM_getChildNodes( SIDEBAR_FIXER_elmSide )[ 1 ] );
            };

            while( id = SIDEBAR_FIXER_IDS_WHEEL[ ++i ] ){
                elm = p_DOM_getElementById( id );
                if( p_notUndefined( elm.onwheel ) ){
                    p_addEventListener( elm, 'wheel', SIDEBAR_FIXER_onwheel, { passive : false } );
                } else if( p_FirefoxGte35 ){
                    p_addEventListener( elm, 'MozMousePixelScroll', SIDEBAR_FIXER_onwheel, false );
                } else if( SIDEBAR_FIXER_isGeckoGte097 ){
                    // elm.addEventListener( 'DOMMouseScroll', SIDEBAR_FIXER_onwheel, false );
                } else if( p_notUndefined( elm.onmousewheel ) || p_Presto ){
                    p_addEventListener( elm, 'mousewheel', SIDEBAR_FIXER_onwheel, false );
                };
            };

            if( SIDEBAR_FIXER_isGeckoGte097 ){
                p_addEventListener( document, 'DOMMouseScroll', SIDEBAR_FIXER_onwheelForGecko, false );
            };
            
            SIDEBAR_FIXER_can3D = !p_Trident && !p_EdgeHTML && ( // Win8.1 以下の IE にはGPU描画エラー有、Win10の Edge, IE11- は3D系が付くとtransitionしない
                p_notUndefined( p_style[ 'perspective' ] ) ||
                p_notUndefined( p_style[ '-moz-perspective' ] ) ||
                p_notUndefined( p_style[ '-webkit-perspective' ] ) );

            /* if( !SIDEBAR_FIXER_transformProp ){
                if( !SIDEBAR_FIXER_positionFixed ){
                    // elmMain への relative 設定は ie6 で必要! 
                    // 無いとマルチカラム判定で elmMain.offsetTop = 0, elmSide.offsetTop = 64 になり fix に進まない. -> CSSへ
                    SIDEBAR_FIXER_elmSide.style.position = SIDEBAR_FIXER_elmMain.style.position = 'relative';
                };
            }; */

            SIDEBAR_FIXER_onscroll();

            return true;
        }
    );

    p_listenResizeEvent(
        function(){
            var i = -1, id, elm;

            while( id = SIDEBAR_FIXER_IDS_WHEEL[ ++i ] ){
                elm = p_DOM_getElementById( id );
                if( p_notUndefined( elm.onwheel ) ){
                    p_removeEventListener( elm, 'wheel', SIDEBAR_FIXER_onwheel, { passive : false } );
                } else if( p_FirefoxGte35 ){
                    p_removeEventListener( elm, 'MozMousePixelScroll', SIDEBAR_FIXER_onwheel, false );
                } else if( SIDEBAR_FIXER_isGeckoGte097 ){

                } else if( p_notUndefined( elm.onmousewheel ) || p_Presto ){
                    p_removeEventListener( elm, 'mousewheel', SIDEBAR_FIXER_onwheel, false );
                };
            };

            if( SIDEBAR_FIXER_isGeckoGte097 ){
                p_removeEventListener( document, 'DOMMouseScroll', SIDEBAR_FIXER_onwheel, false );
            };

            if( p_Trident || p_Tasman ){
                p_removeEventListener( SIDEBAR_FIXER_elmWrap, 'focusin', SIDEBAR_FIXER_onwheel, false );
            } else if( SIDEBAR_FIXER_CAPTURE_FOCUS ){
                p_removeEventListener( document, 'focus', SIDEBAR_FIXER_onfocus, { capture : true, passive : false } );
            } else {
                p_removeEventListener( SIDEBAR_FIXER_elmWrap, 'DOMFocusIn', SIDEBAR_FIXER_onfocus, false );
            };
        }
    );
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

function SIDEBAR_FIXER_onscroll(){
    if( SIDEBAR_FIXER_skipScroll && !SIDEBAR_FIXER_AFTER_SCROLL ){
        SIDEBAR_FIXER_skipScroll = false;
    } else {
        SIDEBAR_FIXER_lastScrollY = SIDEBAR_FIXER_getFinite( window.pageYOffset, SIDEBAR_FIXER_elmRoot.scrollTop, p_body.scrollTop );
        if( SIDEBAR_FIXER_skipScroll ){
            //console.log( '.fix after scroll ' + SIDEBAR_FIXER_lastScrollY, SIDEBAR_FIXER_skipScroll[ 0 ], SIDEBAR_FIXER_skipScroll[ 1 ] );
            SIDEBAR_FIXER_fix( SIDEBAR_FIXER_lastScrollY, 0, SIDEBAR_FIXER_skipScroll[ 0 ], SIDEBAR_FIXER_skipScroll[ 1 ] );
            // SIDEBAR_FIXER_scrollY( SIDEBAR_FIXER_lastScrollY );
            SIDEBAR_FIXER_skipScroll = false;
        } else {
            //console.log( 'scroll ' + SIDEBAR_FIXER_lastScrollY );
            SIDEBAR_FIXER_fix( SIDEBAR_FIXER_lastScrollY );
        };
    };
};

/**
 * @param {number} scrollY
 * @param {number|boolean=} wheelDeltaY
 * @param {number|boolean=} focusedElementY
 * @param {number|boolean=} focusedElementHeight
 */
function SIDEBAR_FIXER_fix( scrollY, wheelDeltaY, focusedElementY, focusedElementHeight ){
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
        nocancelWheel,
        focusedElementT, focusedElementB;

    function createPositioning( y ){
        var w;

        sidebarY = y;
        if( SIDEBAR_FIXER_transformProp ){
            css = TRANSF_TRANSL_0 + y + TRANSF_TRANSL_Z;
        } else {
            if( SIDEBAR_FIXER_positionFixed ){
                if( y !== 0 ){
                    y  -= scrollY - mainY;
                    w   = SIDEBAR_FIXER_elmSide.offsetWidth;
                    css = POS_FIXED_WIDTH + w + 'px;top:' + y + 'px';
                };
            } else {
                css = POS_ABSOLUT_TOP + y + 'px';
            };

            if( SIDEBAR_FIXER_positionFixed || p_Trident < 7 ){
                w    = w || SIDEBAR_FIXER_elmSide.offsetWidth;
                css += ';' +
                    (
                    sidebarY < 0 ? 
                        'clip:rect(' + ( -sidebarY ) + 'px ' + w + 'px ' + ( visibleHeight - sidebarY ) + 'px 0)' :
                    sidebarY + sideH < mainY + visibleHeight ?
                        'clip:rect(0 ' + w + 'px ' + sideH + 'px 0)' :
                        'clip:rect(0 ' + w + 'px ' + ( scrollY + visibleHeight - sidebarY - mainY ) + 'px 0)'
                    );
            };
        };
    };

    if( isMultiColumn ){
        while( elm ){
            mainY += elm.offsetTop || 0;
            elm    = elm.offsetParent || elm.parentElement;
        };
        outOnViewPort   = mainY + mainH <= scrollY; // メインカラムはビューポートより上
        outsideViewPort = scrollY + winH <= mainY;  // メインカラムはビューポートより下
        topInViewPort   = ( scrollY < mainY ) && ( mainY < scrollY + winH ); // メインカラムの始点はビューポート内
        btmInViewPort   = ( scrollY < mainY + mainH ) && ( mainY + mainH < scrollY + winH ); // メインカラムの終点はビューポート内
        mainInViewPort  = topInViewPort && btmInViewPort, // メインカラムはビューポート内に収まる
        visibleHeight   = ( mainY + mainH - scrollY ) < winH ? ( mainY + mainH - scrollY ) : winH; // メインカラムのビューポート内分の高さ、最大はビューポートの高さと同じ
        sideInViewPort  = sideH <= visibleHeight; // サイドバーの高さはメインカラムの可視の高さに収まる

        if( 0 <= focusedElementY ){
            if( !sideInViewPort ){
                focusedElementT = focusedElementY + mainY + SIDEBAR_FIXER_sidebarY;
                focusedElementB = focusedElementHeight + focusedElementT;
                if( scrollY + visibleHeight < focusedElementB ){
                    createPositioning( scrollY + visibleHeight - mainY - focusedElementY - focusedElementHeight );
                } else if( focusedElementT < scrollY ){
                    createPositioning( scrollY - mainY - focusedElementY );
                } else {
                    //console.log( 'Focused Element in ViewPort ' );
                    return;
                };
            } else {
                //console.log( 'Sidebar in ViewPort ' );
                return;
            };
        } else if( !wheelDeltaY ){
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
            // document.title = 'sY:' + scrollY + ' < my:' + mainY + ' mh:' + mainH + ' wH' + winH;
            if( sideInViewPort ){
                nocancelWheel = true;
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
    p_DOM_setCssText( SIDEBAR_FIXER_elmWrap, css );

    SIDEBAR_FIXER_sidebarY = sidebarY;

    return isMultiColumn && !mainInViewPort && !nocancelWheel;
};

function SIDEBAR_FIXER_onwheel( _event ){
    // https://developer.mozilla.org/ja/docs/DOM/DOM_event_reference/mousewheel
    // TODO axis
    // https://w3g.jp/blog/tools/wheelevent_crossbrowser
    // ホイール系イベント2014年版クロスブラウザ
    if( p_Gecko ){
        SIDEBAR_FIXER_lastScrollY = SIDEBAR_FIXER_getFinite( window.pageYOffset, SIDEBAR_FIXER_elmRoot.scrollTop, p_body.scrollTop );
    };
    var e        = _event || event,
        hitChild = this !== e.target,
        deltaY   = hitChild && SIDEBAR_FIXER_getFinite( e.deltaY, e.wheelDeltaY / 120, e.wheelDelta / -120,  e.detail / ( e.type === 'MozMousePixelScroll' ? 45 : 1 ) ),
        cancel   = hitChild && deltaY && SIDEBAR_FIXER_fix( SIDEBAR_FIXER_lastScrollY, deltaY <= 9 ? ( deltaY <= -9 ? -3 : deltaY ) : 3 );

        if( cancel ){
        if( _event ){
            e.preventDefault();
            e.stopPropagation();
        }  else {
            e.cancelBubble = true;
            return e.returnValue = false;
        };
    };
};

function SIDEBAR_FIXER_onwheelForGecko( e ){
    var i = -1, id;

    while( id = SIDEBAR_FIXER_IDS_WHEEL[ ++i ] ){
        if( p_DOM_contains( p_DOM_getElementById( id ), e.target ) ){
            SIDEBAR_FIXER_onwheel( e );
        };
    };
};

function SIDEBAR_FIXER_onfocus( _event ){
    var e   = _event || event,
        elm = e.srcElement || e.target,
        _el = elm,
        y   = 0;

    if( p_DOM_contains( SIDEBAR_FIXER_elmWrap, elm ) ){
        while( SIDEBAR_FIXER_elmWrap !== elm && p_DOM_contains( SIDEBAR_FIXER_elmWrap, elm ) ){
            y   += elm.offsetTop || 0;
            elm  = elm.offsetParent;
        };

        if( !SIDEBAR_FIXER_AFTER_SCROLL ){
            // Chrome 77, 表示ボックス外の要素へのfocusの際に表示ボックスが拡大する．この際は、scroll位置の再取得をする．
            SIDEBAR_FIXER_fix( SIDEBAR_FIXER_lastScrollY, 0, y, _el.offsetHeight );
            SIDEBAR_FIXER_skipScroll = true;
            SIDEBAR_FIXER_scrollY( SIDEBAR_FIXER_lastScrollY );
        } else {
            SIDEBAR_FIXER_skipScroll = [ y, _el.offsetHeight ];
        };
    };
};

function SIDEBAR_FIXER_scrollY( scrollY ){
    window.scrollTo( SIDEBAR_FIXER_getFinite( window.pageXOffset, SIDEBAR_FIXER_elmRoot.scrollLeft, p_body.scrollLeft ), scrollY );
};