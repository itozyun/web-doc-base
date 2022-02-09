/*
 * 途中でサイドバーの要素が変化する -> 知りません
 */
var SidebarFixer_ID_OF_WHEEL_ELEMENTS             = [ DEFINE_WEB_DOC_BASE__SIDEBARFIXER_1ST_WHEEL_ELM_ID, DEFINE_WEB_DOC_BASE__SIDEBARFIXER_2ND_WHEEL_ELM_ID ],
    SidebarFixer_FOCUS_FOLLOWED_BY_SCROLL         = 10 <= p_Trident || p_EdgeHTML || p_isChromiumBase || p_WebKit, // Safari 13 で確認
    SidebarFixer_USE_CAPTURE_OF_FOCUS_FOR_FOCUSIN = p_Gecko || p_Goanna || p_EdgeHTML,
    /*
     * positionFixed
     *   original :
     *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
     */
    SidebarFixer_positionFixed = // Opera 9.x-10.x では fixed でないと表示が乱れる
            !(
                // iOS 4.3 and older : Platform is iPhone/Pad/Touch and WebKit version is less than 534 (ios5)
                p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_SafariMobile ) < 5 ||
                p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_iOSWebView   ) < 5 ||
                // Opera Mini
                // https://www.tobymackenzie.com/blog/2017/05/11/opera-mini-supporting-fixed-position/
                //( ua[ 'OperaMini' ] ) ||
                // UC Browser speed mode on
                //( ua[ 'UCWEB' ] ) ||
                //Android lte 2.1: Platform is Android and WebKit version is less than 533 (Android 2.2)
                ( p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP ) < 2.2 ) ||
                // Firefox Mobile before 6.0 -
                ( p_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Fennec ) < 6 ) ||
                // WebOS less than 3
                ( p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_WebOS ) && p_WebKit < 534 ) ||
                // MeeGo
                p_getPlatformVersionOf( WHAT_BROWSER_AM_I__PLATFORM_MeeGo ) ||
                // IE6-
                ( p_Trident < 7 ) ||
                // Presto
                ( p_Presto < 9 )
            ),
    SidebarFixer_elmRoot,
    SidebarFixer_elmSide,
    SidebarFixer_elmMain,
    SidebarFixer_elmWrap,
    SidebarFixer_transformProp = p_cssTransformName,
    SidebarFixer_sidebarY = 0,
    SidebarFixer_lastScrollY = 0,
    SidebarFixer_can3D,
    SidebarFixer_skipScroll,
    SidebarFixer_isGeckoGte097 = p_Gecko && 0 <= ua.conpare( p_engineVersion, '0.9.7' );

if( !p_isMobile && !p_cloudRendering && !( p_Presto < 8 ) ){

    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( !cssAvailability ) return;
            if( !p_elmMain ) return true;

            var i = -1, id, elm;

            SidebarFixer_elmRoot = document.compatMode !== 'CSS1Compat' ? p_body : p_html || p_body;
            SidebarFixer_elmSide = p_DOM_getElementById( DEFINE_WEB_DOC_BASE__SIDE_COLUMN_ID );
            SidebarFixer_elmMain = p_elmMain;

            if( !SidebarFixer_elmSide ) return true;

            p_listenScrollEvent( SidebarFixer_onscroll );
            p_listenResizeEvent( SidebarFixer_onscroll );
            
            // ラッパー要素を作成, sidebar の子要素をラッパー要素の下に
            SidebarFixer_elmWrap = p_DOM_insertElementBefore(
                p_DOM_getFirstChild( SidebarFixer_elmSide ),
                'div',
                { id : DEFINE_WEB_DOC_BASE__SIDEBARFIXER_WRAPPER_ID }
            );

            if( p_Trident || p_Tasman ){
                p_addEventListener( SidebarFixer_elmWrap, 'focusin', SidebarFixer_onfocus );
            } else if( SidebarFixer_USE_CAPTURE_OF_FOCUS_FOR_FOCUSIN ){
                p_addEventListener( document, 'focus', SidebarFixer_onfocus, { capture : true, passive : false } );
            } else {
                p_addEventListener( SidebarFixer_elmWrap, 'DOMFocusIn', SidebarFixer_onfocus, false );
            };

            // Array と NodeList の場合があるので、常に再取得
            while( 1 < p_DOM_getChildNodes( SidebarFixer_elmSide ).length ){
                SidebarFixer_elmWrap.appendChild( p_DOM_getChildNodes( SidebarFixer_elmSide )[ 1 ] );
            };

            while( id = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
                elm = p_DOM_getElementById( id );
                if( p_notUndefined( elm.onwheel ) ){
                    p_addEventListener( elm, 'wheel', SidebarFixer_onwheel, { passive : false } );
                } else if( p_FirefoxGte35 ){
                    p_addEventListener( elm, 'MozMousePixelScroll', SidebarFixer_onwheel, false );
                } else if( SidebarFixer_isGeckoGte097 ){
                    // elm.addEventListener( 'DOMMouseScroll', SidebarFixer_onwheel, false );
                } else if( p_notUndefined( elm.onmousewheel ) || p_Presto ){
                    p_addEventListener( elm, 'mousewheel', SidebarFixer_onwheel, false );
                };
            };

            if( SidebarFixer_isGeckoGte097 ){
                p_addEventListener( document, 'DOMMouseScroll', SidebarFixer_onwheelForGecko, false );
            };
            
            SidebarFixer_can3D = !p_Trident && !p_EdgeHTML && ( // Win8.1 以下の IE にはGPU描画エラー有、Win10の Edge, IE11- は3D系が付くとtransitionしない
                p_notUndefined( p_style[ 'perspective' ] ) ||
                p_notUndefined( p_style[ '-moz-perspective' ] ) ||
                p_notUndefined( p_style[ '-webkit-perspective' ] ) );

            /* if( !SidebarFixer_transformProp ){
                if( !SidebarFixer_positionFixed ){
                    // elmMain への relative 設定は ie6 で必要! 
                    // 無いとマルチカラム判定で elmMain.offsetTop = 0, elmSide.offsetTop = 64 になり fix に進まない. -> CSSへ
                    SidebarFixer_elmSide.style.position = SidebarFixer_elmMain.style.position = 'relative';
                };
            }; */

            SidebarFixer_onscroll();

            return true;
        }
    );

    p_listenUnloadEvent(
        function(){
            var i = -1, id, elm;

            while( id = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
                elm = p_DOM_getElementById( id );
                if( p_notUndefined( elm.onwheel ) ){
                    p_removeEventListener( elm, 'wheel', SidebarFixer_onwheel, { passive : false } );
                } else if( p_FirefoxGte35 ){
                    p_removeEventListener( elm, 'MozMousePixelScroll', SidebarFixer_onwheel, false );
                } else if( SidebarFixer_isGeckoGte097 ){

                } else if( p_notUndefined( elm.onmousewheel ) || p_Presto ){
                    p_removeEventListener( elm, 'mousewheel', SidebarFixer_onwheel, false );
                };
            };

            if( SidebarFixer_isGeckoGte097 ){
                p_removeEventListener( document, 'DOMMouseScroll', SidebarFixer_onwheelForGecko, false );
            };

            if( p_Trident || p_Tasman ){
                p_removeEventListener( SidebarFixer_elmWrap, 'focusin', SidebarFixer_onwheel, false );
            } else if( SidebarFixer_USE_CAPTURE_OF_FOCUS_FOR_FOCUSIN ){
                p_removeEventListener( document, 'focus', SidebarFixer_onfocus, { capture : true, passive : false } );
            } else {
                p_removeEventListener( SidebarFixer_elmWrap, 'DOMFocusIn', SidebarFixer_onfocus, false );
            };
        }
    );
};

/**
 * @param {...number} arg
 * @return {number}
 */
function SidebarFixer_getFinite( arg ){
    var args = arguments, i = 0, l = args.length;
        
    for( ; i < l; ++i ){
        if( isFinite( args[ i ] ) ) return args[ i ];
    };
    return 0;
};

function SidebarFixer_onscroll(){
    if( SidebarFixer_skipScroll && !SidebarFixer_FOCUS_FOLLOWED_BY_SCROLL ){
        SidebarFixer_skipScroll = false;
    } else {
        SidebarFixer_lastScrollY = SidebarFixer_getFinite( window.pageYOffset, window.scrollY, SidebarFixer_elmRoot.scrollTop, p_body.scrollTop );
        if( SidebarFixer_skipScroll ){
            //console.log( '.fix after scroll ' + SidebarFixer_lastScrollY, SidebarFixer_skipScroll[ 0 ], SidebarFixer_skipScroll[ 1 ] );
            SidebarFixer_fix( SidebarFixer_lastScrollY, 0, SidebarFixer_skipScroll[ 0 ], SidebarFixer_skipScroll[ 1 ] );
            // SidebarFixer_setScrollY( SidebarFixer_lastScrollY );
            SidebarFixer_skipScroll = false;
        } else {
            //console.log( 'scroll ' + SidebarFixer_lastScrollY );
            SidebarFixer_fix( SidebarFixer_lastScrollY );
        };
    };
};

/**
 * @param {number} scrollY
 * @param {number|boolean=} wheelDeltaY
 * @param {number|boolean=} focusedElementY
 * @param {number|boolean=} focusedElementHeight
 */
function SidebarFixer_fix( scrollY, wheelDeltaY, focusedElementY, focusedElementHeight ){
        // transform pos:fixed が使えない場合、塗りのために width を指定するので pos:relative でなくレイアウトコストの低い pos:absolute を使用
    var POS_ABSOLUT_TOP = 'position:absolute;left:0;width:100%;top:',
        POS_FIXED_WIDTH = 'position:fixed;width:',
        TRANSF_TRANSL_0 = SidebarFixer_transformProp + ':translate' + ( SidebarFixer_can3D ? '3D(0,' : '(0,' ), /* 3D は Android 3.1 用 */
        TRANSF_TRANSL_Z = SidebarFixer_can3D ? 'px,0)' : 'px)',
        winH  = SidebarFixer_getFinite( window.innerHeight, SidebarFixer_elmRoot.offsetHeight ),
        elm   = SidebarFixer_elmMain,
        mainH = elm.offsetHeight,
        sideH = SidebarFixer_elmWrap.offsetHeight,
        mainY = 0,
        css   = '',
        sidebarY = 0,
        isMultiColumn  = SidebarFixer_elmSide.offsetTop === elm.offsetTop,
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
        if( SidebarFixer_transformProp ){
            css = TRANSF_TRANSL_0 + y + TRANSF_TRANSL_Z;
        } else {
            if( SidebarFixer_positionFixed ){
                if( y !== 0 ){
                    y  -= scrollY - mainY;
                    w   = SidebarFixer_elmSide.offsetWidth;
                    css = POS_FIXED_WIDTH + w + 'px;top:' + y + 'px';
                };
            } else {
                css = POS_ABSOLUT_TOP + y + 'px';
            };

            if( SidebarFixer_positionFixed || p_Trident < 7 ){
                w    = w || SidebarFixer_elmSide.offsetWidth;
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
                focusedElementT = focusedElementY + mainY + SidebarFixer_sidebarY;
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
                sidebarY = SidebarFixer_sidebarY - wheelDeltaY * 60;
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

    if( SidebarFixer_transformProp && css ) css += ';-webkit-overflow-scrolling:touch;';
    p_DOM_setCssText( SidebarFixer_elmWrap, css );

    SidebarFixer_sidebarY = sidebarY;

    return isMultiColumn && !mainInViewPort && !nocancelWheel;
};

function SidebarFixer_onwheel( e ){
    // https://developer.mozilla.org/ja/docs/DOM/DOM_event_reference/mousewheel
    // TODO axis
    // https://w3g.jp/blog/tools/wheelevent_crossbrowser
    // ホイール系イベント2014年版クロスブラウザ
    if( p_Gecko ){
        SidebarFixer_lastScrollY = SidebarFixer_getFinite( window.pageYOffset, SidebarFixer_elmRoot.scrollTop, p_body.scrollTop );
    };
    var hitChild = this !== e.target,
        deltaY   = hitChild && SidebarFixer_getFinite( e.deltaY, e.wheelDeltaY / 120, e.wheelDelta / -120,  e.detail / ( e.type === 'MozMousePixelScroll' ? 45 : 1 ) ),
        cancel   = hitChild && deltaY && SidebarFixer_fix( SidebarFixer_lastScrollY, deltaY <= 9 ? ( deltaY <= -9 ? -3 : deltaY ) : 3 );

    if( cancel ){
        e.preventDefault();
        e.stopPropagation();
    };
};

function SidebarFixer_onwheelForGecko( e ){
    var i = -1, id;

    while( id = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
        if( p_DOM_contains( p_DOM_getElementById( id ), e.target ) ){
            SidebarFixer_onwheel( e );
        };
    };
};

function SidebarFixer_onfocus( _event ){
    var e   = _event || event,
        elm = e.srcElement || e.target,
        y   = 0, h;

    if( p_DOM_contains( SidebarFixer_elmWrap, elm ) ){
        h = elm.offsetHeight;
        while( SidebarFixer_elmWrap !== elm && p_DOM_contains( SidebarFixer_elmWrap, elm ) ){
            y   += elm.offsetTop || 0;
            elm  = elm.offsetParent;
        };

        if( !SidebarFixer_FOCUS_FOLLOWED_BY_SCROLL ){
            // Chrome 77, 表示ボックス外の要素へのfocusの際に表示ボックスが拡大する．この際は、scroll位置の再取得をする．
            SidebarFixer_fix( SidebarFixer_lastScrollY, 0, y, h );
            SidebarFixer_skipScroll = true;
            SidebarFixer_setScrollY( SidebarFixer_lastScrollY );
        } else {
            SidebarFixer_skipScroll = [ y, h ];
        };
    };
};

function SidebarFixer_setScrollY( scrollY ){
    window.scrollTo( SidebarFixer_getFinite( window.pageXOffset, window.scrollX, SidebarFixer_elmRoot.scrollLeft, p_body.scrollLeft ), scrollY );
};