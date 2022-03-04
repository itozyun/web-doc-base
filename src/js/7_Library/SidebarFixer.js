/*
 * 途中でサイドバーの要素が変化する -> 公開メソッドを未実装
 */
var SidebarFixer_ONSCROL_FROM_TIMER                  = 7,
    SidebarFixer_ID_OF_WHEEL_ELEMENTS                = [ DEFINE_WEB_DOC_BASE__SIDEBARFIXER_1ST_WHEEL_ELM_ID, DEFINE_WEB_DOC_BASE__SIDEBARFIXER_2ND_WHEEL_ELM_ID ],
    SidebarFixer_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN = p_Gecko || p_Goanna || p_EdgeHTML,
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
    SidebarFixer_USE_CLIP = SidebarFixer_positionFixed || p_Trident < 7,
    SidebarFixer_elmRoot,
    SidebarFixer_elmSide,
    SidebarFixer_elmMain,
    SidebarFixer_elmWrap,
    SidebarFixer_transformProp = p_cssTransformName, // Chrome 1 描画が欠ける
    SidebarFixer_sidebarY = 0,
    SidebarFixer_lastScrollY = 0,
    SidebarFixer_use3D,
    SidebarFixer_aboutFocuedElement,
    SidebarFixer_ignoreScrollAfterFocus,
    SidebarFixer_dummyScrollTimerID,
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

            p_addEventListener( window, 'blur', SidebarFixer_onWindowBlur );
            if( p_Trident || p_Tasman ){
                p_addEventListener( SidebarFixer_elmWrap, 'focusin', SidebarFixer_onfocus );
            } else if( SidebarFixer_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN ){
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
            
            SidebarFixer_use3D = !p_Trident && !p_EdgeHTML && !( p_Chromium < 2 ) && ( // Win8.1 以下の IE にはGPU描画エラー有、Win10の Edge, IE11- は3D系が付くとtransitionしない
                p_notUndefined( p_style[ 'perspective' ] ) ||
                p_notUndefined( p_style[ '-moz-perspective' ] ) ||
                p_notUndefined( p_style[ '-webkit-perspective' ] ) );

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

            p_removeEventListener( window, 'blur', SidebarFixer_onWindowBlur );
            if( p_Trident || p_Tasman ){
                p_removeEventListener( SidebarFixer_elmWrap, 'focusin', SidebarFixer_onfocus, false );
            } else if( SidebarFixer_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN ){
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

/**
 * @param {Event|undefined|number=} param Eventオブジェクトの場合もあれば、タイマーで呼ばれた場合は 0 が入っている
 */
function SidebarFixer_onscroll( param ){
    if( !p_cssAvailability ){
        SidebarFixer_aboutFocuedElement = undefined;
        return;
    };
    if( SidebarFixer_ignoreScrollAfterFocus && !SidebarFixer_aboutFocuedElement ){
        if( ( new Date - 0 ) < SidebarFixer_ignoreScrollAfterFocus ){
            return;
        };
        SidebarFixer_ignoreScrollAfterFocus = undefined;
    };

    if( param === SidebarFixer_ONSCROL_FROM_TIMER ){
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_showEvent( 't' );
        };
        SidebarFixer_dummyScrollTimerID = 0;
    } else {
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_showEvent( 's' );
        };
        if( SidebarFixer_dummyScrollTimerID ){
            SidebarFixer_dummyScrollTimerID = p_clearTimer( SidebarFixer_dummyScrollTimerID );
        };
        // scrollY 再取得
        SidebarFixer_lastScrollY = SidebarFixer_getFinite( window.pageYOffset, window.scrollY, SidebarFixer_elmRoot.scrollTop, p_body.scrollTop );
    };

    if( SidebarFixer_aboutFocuedElement ){
        SidebarFixer_fix( undefined, SidebarFixer_aboutFocuedElement[ 0 ], SidebarFixer_aboutFocuedElement[ 1 ] );
        // focus 直後に発生する scroll をスキップする
        SidebarFixer_ignoreScrollAfterFocus = ( new Date - 0 ) + 99;
        SidebarFixer_aboutFocuedElement = undefined;
    } else {
        SidebarFixer_fix();
    };

    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_updateViewport();
    };
};

function SidebarFixer_onWindowBlur(){
    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_showEvent( 'w.blur' );
    };
    SidebarFixer_fix();
};

/**
 * @param {number|undefined=} wheelDeltaY
 * @param {number=} focusedElementY
 * @param {number=} focusedElementHeight
 */
function SidebarFixer_fix( wheelDeltaY, focusedElementY, focusedElementHeight ){
    var scrollY       = SidebarFixer_lastScrollY,
        elmMain       = SidebarFixer_elmMain,
        isMultiColumn = SidebarFixer_elmSide.offsetTop === elmMain.offsetTop,
        sidebarY      = 0,
        css           = '',
        preventWheel  = true;

    function createPositioning( _sliderY ){
        var sidebarWidth;

        sidebarY = _sliderY;
        if( SidebarFixer_transformProp ){
            css = SidebarFixer_transformProp + ':translate' + ( SidebarFixer_use3D ? '3D(0,' : '(0,' ) +  /* 3D は Android 3.1 ではマスト */
                  _sliderY + ( SidebarFixer_use3D ? 'px,0)' : 'px)' ) +
                  ';-webkit-overflow-scrolling:touch;';
        } else {
            if( SidebarFixer_USE_CLIP ){
                sidebarWidth = SidebarFixer_elmSide.offsetWidth;
            };
            if( SidebarFixer_positionFixed ){
                if( _sliderY !== 0 ){
                    css = 'position:fixed;width:' + sidebarWidth + 'px;top:' + ( _sliderY - scrollY + containerY ) + 'px';
                };
            } else {
                // pos:relative でも良いが、よりレイアウトコストの低い pos:absolute を使用
                css = 'position:absolute;left:0;width:100%;top:' + _sliderY + 'px';
            };

            if( sidebarWidth && css ){
                css += ';' +
                    (
                    _sliderY < 0 ? 
                        'clip:rect(' + ( -_sliderY ) + 'px ' + sidebarWidth + 'px ' + sidebarHeight + 'px 0)' :
                    _sliderY + sidebarHeight < containerHeight ?
                        'clip:rect(0 ' + sidebarWidth + 'px ' + sidebarHeight + 'px 0)' :
                        'clip:rect(0 ' + sidebarWidth + 'px ' + ( containerHeight - _sliderY ) + 'px 0)'
                    );
                if( !( p_Trident < 8 ) ){
                    css = css.split( ' ' ).join( ',' );
                };
            };
        };
    };

    if( isMultiColumn ){
        var containerY = 0,
            elm        = elmMain;

        while( elm && elm !== p_body ){
            containerY += elm.offsetTop;
            elm = elm.offsetParent;
        };

        var viewportHeight         = SidebarFixer_getFinite( window.innerHeight, SidebarFixer_elmRoot.offsetHeight ),
            mainColHeight          = elmMain.offsetHeight,
            sidebarHeight          = SidebarFixer_elmWrap.offsetHeight,
            containerHeight        = sidebarHeight < mainColHeight ? mainColHeight : sidebarHeight,
            viewportTop            = scrollY,
            viewportBottom         = viewportTop + viewportHeight,
            containerTop           = containerY,
            containerBottom        = containerTop + containerHeight,
            sidebarTop             = containerY + SidebarFixer_sidebarY,
            sidebarBottom          = sidebarTop + sidebarHeight,
            visibleContainerTop    = viewportTop     < containerTop   ? containerTop    : viewportTop,
            visibleContainerBottom = containerBottom < viewportBottom ? containerBottom : viewportBottom,
            visibleContainerHeight = visibleContainerBottom - visibleContainerTop;

        if( 0 <= focusedElementY ){
            var focusedElementTop    = containerY + focusedElementY,
                focusedElementBottom = focusedElementTop + focusedElementHeight;

            // 4. Tabキーでのフォーカス移動
            // 4.1 サイドバーの高さ ≦ コンテナの可視部分の高さ 
            if( sidebarHeight <= visibleContainerHeight ){
                // 可視部分の天と要素の天を合わせる
                createPositioning( visibleContainerTop - containerY - focusedElementY );
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.1' );
            } else
            // 4.2 サイドバー下のフォーカスを得た要素の高さ ≦ コンテナの可視部分の高さ 
            if( focusedElementHeight <= visibleContainerHeight ){
                if( sidebarHeight - focusedElementY <= visibleContainerHeight ){
                    // 4.2.1 要素の天をコンテナの可視部分の天に合わせると、サイドバー下に隙間が出来る場合、可視部分の底と要素の底を合わせる
                    createPositioning( visibleContainerBottom - containerY - ( focusedElementY + focusedElementHeight ) );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2.1' );
                } else if( visibleContainerTop <= focusedElementTop && focusedElementBottom <= visibleContainerBottom ){
                    // 4.2.2 完全に可視部分に入っている場合は移動しない
                    // 但し、サイドバー上に隙間が出来る場合、可視部分の天と要素の天を合わせる
                    if( visibleContainerTop < containerY + sidebarY ){
                        createPositioning( visibleContainerTop - containerY - focusedElementY );
                        DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2.2' );
                    };
                    // DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2.2' );
                } else if( visibleContainerTop <= focusedElementTop && focusedElementTop <= visibleContainerBottom ){
                    // 4.2.3 要素の天がコンテナの可視部分に入っている場合、可視部分の底と要素の底を合わせる
                    createPositioning( visibleContainerBottom - containerY - ( focusedElementY + focusedElementHeight ) );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2.3' );
                } else if( visibleContainerTop <= focusedElementBottom && focusedElementBottom <= visibleContainerBottom ){
                    // 4.2.4 要素の底がコンテナの可視部分に入っている場合、可視部分の天と要素の天を合わせる
                    createPositioning( visibleContainerTop - containerY - focusedElementY );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2.4' );
                } else if( focusedElementBottom < visibleContainerTop ){
                    // 4.2.5 要素は可視部分より上、可視部分の天と要素の天を合わせる
                    createPositioning( visibleContainerTop - containerY - focusedElementY );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2.5' );
                } else {
                    // 4.2.6 要素は可視部分より下、可視部分の底と要素の底を合わせる
                    createPositioning( visibleContainerBottom - containerY - ( focusedElementY + focusedElementHeight ) );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2.6' );
                };
            } else {
            // 4.3 サイドバー下のフォーカスを得た要素の高さ > コンテナの可視部分の高さ
                // 4.3 コンテナの可視部分の天と要素の天を合わせる 
                createPositioning( visibleContainerTop - containerY - focusedElementY );
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3' );
            };
        } else if( !wheelDeltaY ){
            // 2. ドキュメントのスクロールでの動作
            // 2.1 サイドバーの高さ ≧ メインコンテンツの高さ
            if( mainColHeight <= sidebarHeight ){
                // スライドなし
            } else
            // 2.2 コンテナはビューポートの外
            // 2.2.1 ビューポートのトップより上、サイドバーはコンテナの底へ。
            if( containerBottom <= viewportTop ){
                createPositioning( containerHeight - sidebarHeight );
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.2.1' );
            } else
            // 2.2.2 ビューポートのボトムより下、サイドバーはコンテナの天へ。
            if( viewportBottom <= containerTop ){
                createPositioning( 0 );
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.2.2' );
            } else
            // 2.3 サイドバーの高さ ≦ コンテナの可視部分の高さ、サイドバーの天をコンテナの可視部分の天に揃える
            if( sidebarHeight <= visibleContainerHeight ){
                createPositioning( visibleContainerTop - containerY );
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.3' );
            } else {
                // 2.4 サイドバーの高さ > コンテナの可視部分の高さ
                // 2.4.1 サイドバーの天がコンテナの可視部分の天より下なら、サイドバーの天をコンテナの可視部分の天に揃える
                if( visibleContainerTop < sidebarTop ){
                    createPositioning( visibleContainerTop - containerY );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.1' );
                } else
                // 2.4.2 サイドバーの底がコンテナの可視部分の底より上なら、サイドバーの底をコンテナの可視部分の底に揃える
                if( sidebarBottom < visibleContainerBottom ){
                    createPositioning( visibleContainerBottom - containerY - sidebarHeight );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.2' );
                } else
                // 2.4.3 スクロール量 < containerY + サイドバーの高さ - コンテナの可視部分の高さ
                if( scrollY < containerY + sidebarHeight - visibleContainerHeight ){
                    // サイドバーはコンテナの天
                    createPositioning( 0 );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.3' );
                } else {
                    // サイドバーの底はコンテナの可視部分の底 
                    createPositioning( visibleContainerBottom - containerY - sidebarHeight );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.4' );
                };
            };
        } else {
            // 3. サイドバー上でのマウスホイールでの動作
            // 3.1 サイドバーの高さ ≦ コンテナの可視部分の高さ 
            if( sidebarHeight <= visibleContainerHeight ){
                preventWheel = false;
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.1' );
            } else {
            // 3.2 サイドバーの高さ > コンテナの可視部分の高さ 
                sidebarY = SidebarFixer_sidebarY - wheelDeltaY * 60;
                // 3.2.1 サイドバーの天の最小値は、コンテナの可視部分の底 - コンテナのy - サイドバーの高さ。
                var minLimitOfSidebarY = visibleContainerBottom - containerY - sidebarHeight;
                // 3.2.2 サイドバーの天の最大値は、コンテナの可視部分の天 - コンテナのy。 
                var maxLimitOfSidebarY = visibleContainerTop - containerY;
                if( sidebarY < minLimitOfSidebarY ){
                    createPositioning( minLimitOfSidebarY );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.2.1' );
                } else
                if( maxLimitOfSidebarY < sidebarY ){
                    createPositioning( maxLimitOfSidebarY );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.2.2' );
                } else {
                    createPositioning( sidebarY );
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.2.3' );
                };
            };
        };
    };
    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_updateSidebar( sidebarY, sidebarHeight, containerY, containerHeight, viewportHeight, focusedElementY || '-' );
    };

    p_DOM_setCssText( SidebarFixer_elmWrap, css );

    SidebarFixer_sidebarY = sidebarY;

    return isMultiColumn && preventWheel;
};

function SidebarFixer_onwheel( e ){
    if( !p_cssAvailability ){
        return;
    };

    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_showEvent( 'm' );
    };
    // https://developer.mozilla.org/ja/docs/DOM/DOM_event_reference/mousewheel
    // TODO axis
    // https://w3g.jp/blog/tools/wheelevent_crossbrowser
    // ホイール系イベント2014年版クロスブラウザ
    if( p_Gecko ){
        SidebarFixer_lastScrollY = SidebarFixer_getFinite( window.pageYOffset, SidebarFixer_elmRoot.scrollTop, p_body.scrollTop );
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateViewport();
        };
    };
    var hitChild = this !== e.target,
        deltaY   = hitChild && SidebarFixer_getFinite( e.deltaY, e.wheelDeltaY / 120, e.wheelDelta / -120,  e.detail / ( e.type === 'MozMousePixelScroll' ? 45 : 1 ) ),
        cancel   = hitChild && deltaY && SidebarFixer_fix( deltaY <= 9 ? ( deltaY <= -9 ? -3 : deltaY ) : 3 );

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

function SidebarFixer_onfocus( e ){
    if( !p_cssAvailability ){
        return;
    };

    var elmFocused = e.target || e.srcElement,
        y          = 0,
        h, elm;

    if( p_DOM_contains( SidebarFixer_elmWrap, elmFocused ) ){
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_showEvent( e.type );
            p_addEventListener( elmFocused, 'blur', SidebarFixer_onActiveElementblur );
        };

        h = elmFocused.offsetHeight;
        elm = elmFocused;
        while( elm && ( SidebarFixer_transformProp ? p_DOM_contains( SidebarFixer_elmWrap, elm ) : ( SidebarFixer_elmWrap !== elm ) ) ){
            y   += elm.offsetTop;
            elm  = elm.offsetParent;
        };

        
        if( p_Trident < 9 || p_Presto ){ // focusin 後に scroll が起きない
            if( p_Presto ){
                // scrollY 再取得
                SidebarFixer_lastScrollY = SidebarFixer_getFinite( window.pageYOffset, window.scrollY, SidebarFixer_elmRoot.scrollTop, p_body.scrollTop );
            };
            SidebarFixer_fix( undefined, y, h );
        } else {
            SidebarFixer_aboutFocuedElement = [ y, h ];
            if( SidebarFixer_dummyScrollTimerID ){
                p_clearTimer( SidebarFixer_dummyScrollTimerID );
            };
            SidebarFixer_dummyScrollTimerID = p_setTimer( SidebarFixer_onscroll, SidebarFixer_ONSCROL_FROM_TIMER ); // scroll が起きない場合がある!
        };

        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateElementFocused( y, h );
        };
    };
};

/** ===========================================================================
 * for debug
 */
function SidebarFixer_onActiveElementblur(){
    p_removeEventListener( this, 'blur', SidebarFixer_onActiveElementblur );
    SidebarFixer_updateElementFocused( 0, 0 );
};

if( DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_positionFixed ){
    var SidebarFixer_elmDisplayValues,
        SidebarFixer_elmDisplayScroll,
        SidebarFixer_elmDisplayEvents,
        SidebarFixer_elmDocument,
        SidebarFixer_elmViewport,
        SidebarFixer_elmSidebar,
        SidebarFixer_elmFocused,
        SidebarFixer_displayEventsTimerID;

    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( !cssAvailability ) return;
            if( !p_elmMain ) return true;

            var elmTestRoot = p_DOM_insertElement( p_body, 'div' );

            p_DOM_setCssText( elmTestRoot, 'position:fixed;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px' );

            p_DOM_insertElement( elmTestRoot, 'div', undefined,
                ( p_cssTransformName ? 'transform' + ( SidebarFixer_use3D ? '3D' : '' ) : ( SidebarFixer_positionFixed ? 'pos:fixed' : 'pos:absolute' ) )
            );

            var elmContainer = p_DOM_insertElement( elmTestRoot, 'div' );
            // pos:static はあと for ie7
            SidebarFixer_elmDisplayValues = p_DOM_insertElement( elmContainer, 'span' );
            SidebarFixer_elmDisplayScroll = p_DOM_insertElement( elmContainer, 'span' );

            SidebarFixer_elmDisplayEvents = p_DOM_insertElement( elmTestRoot, 'div' );

            SidebarFixer_elmDocument = p_DOM_insertElement( elmTestRoot, 'div' );
            p_DOM_setCssText( SidebarFixer_elmDocument, 'position:absolute;left:0;top:0;width:54px;background:#242' );

            SidebarFixer_elmSidebar = p_DOM_insertElement( elmTestRoot, 'div' );
            p_DOM_setCssText( SidebarFixer_elmSidebar, 'position:absolute;left:0;width:54px;background:#363' );

            SidebarFixer_elmViewport = p_DOM_insertElement( elmTestRoot, 'div' );
            p_DOM_setCssText( SidebarFixer_elmViewport, 'position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff' );

            SidebarFixer_elmFocused = p_DOM_insertElement( SidebarFixer_elmSidebar, 'div' );
            p_DOM_setCssText( SidebarFixer_elmFocused, 'position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c' );
            return true;
        }
    );
};

function SidebarFixer_showEvent( eventChar ){
    if( SidebarFixer_elmDisplayEvents ){
        if( SidebarFixer_displayEventsTimerID ){
            SidebarFixer_displayEventsTimerID = p_clearTimer( SidebarFixer_displayEventsTimerID );
        };
        SidebarFixer_displayEventsTimerID = p_setTimer( SidebarFixer_hideEvent, 0, 1400 );
        SidebarFixer_elmDisplayEvents.innerHTML += ' ' + eventChar;
    };
};
function SidebarFixer_hideEvent(){
    SidebarFixer_elmDisplayEvents.innerHTML = '';
};
function SidebarFixer_updateViewport(){
    if( SidebarFixer_elmViewport ){
        p_DOM_setStyle( SidebarFixer_elmViewport, 'top', ( SidebarFixer_lastScrollY / 10 | 0 ) + 'px' );

        SidebarFixer_elmDisplayScroll.innerHTML = ' scrl:' + ( SidebarFixer_lastScrollY | 0 );
    };
};
function SidebarFixer_updateSidebar( sidebarY, sidebarHeight, containerY, containerHeight, viewportHeight, focusedElementY ){
    if( SidebarFixer_elmSidebar ){
        p_DOM_setStyle( SidebarFixer_elmSidebar, 'top', ( ( sidebarY + containerY ) / 10 | 0 ) + 'px' );
        p_DOM_setStyle( SidebarFixer_elmSidebar, 'height', ( sidebarHeight / 10 | 0 ) + 'px' );

        p_DOM_setStyle( SidebarFixer_elmViewport, 'height', ( viewportHeight / 10 | 0 ) + 'px' );

        p_DOM_setStyle( SidebarFixer_elmDocument, 'height', ( p_body.scrollHeight / 10 | 0 ) + 'px' );

        SidebarFixer_elmDisplayValues.textContent = 'y:' + containerY + '/' + sidebarY + ', h:' + containerHeight + '/' + sidebarHeight + ' fy:' + focusedElementY;
    };
};
function SidebarFixer_updateElementFocused( y, h ){
    if( SidebarFixer_elmFocused ){
        p_DOM_setStyle( SidebarFixer_elmFocused, 'top', ( y / 10 | 0 ) + 'px' );
        p_DOM_setStyle( SidebarFixer_elmFocused, 'height', ( h / 10 | 0 ) + 'px' );
    };
};