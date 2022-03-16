/**
 * @see https://outcloud.blogspot.com/2022/03/sidebarfixer.html
 *
 * 途中でサイドバーの要素が変化する -> 公開メソッドを未実装
 */
var SidebarFixer_ONSCROL_FROM_TIMER                  = 7,
    SidebarFixer_ID_OF_WHEEL_ELEMENTS                = [ DEFINE_WEB_DOC_BASE__SIDEBARFIXER_1ST_WHEEL_ELM_ID, DEFINE_WEB_DOC_BASE__SIDEBARFIXER_2ND_WHEEL_ELM_ID ],
    SidebarFixer_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN = p_Gecko || p_Goanna || p_EdgeHTML,
    SidebarFixer_SCROLL_FOLLOWING_FOCUSIN_EVENT      = !( 6 <= p_Trident && p_Trident < 9 || p_Presto || ( 1 <= p_Gecko && p_Gecko < 1.3 ) ),
    /*
     * positionFixed
     *   original :
     *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
     */
    SidebarFixer_CANUSE_POSITION_FIXED = // Opera 9.x-10.x では fixed でないと表示が乱れる
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
                ( p_Presto < 9 ) ||
                // Gecko
                ( p_Gecko < 1 )
            ),
    SidebarFixer_USE_CLIP = SidebarFixer_CANUSE_POSITION_FIXED || p_Trident < 7 || p_Gecko < 1,
    SidebarFixer_USE_POSITION_RELATIVE = p_Presto < 7.5,
    SidebarFixer_elmRoot,
    SidebarFixer_elmSide,
    SidebarFixer_elmMain,
    SidebarFixer_elmWrap,
    SidebarFixer_transformProp = p_cssTransformName,
    SidebarFixer_sidebarOffsetY = 0,
    SidebarFixer_lastScrollY = 0,
    SidebarFixer_use3D,
    SidebarFixer_focuedElementYAndHeight,
    SidebarFixer_ignoreScrollAfterFocus,
    SidebarFixer_dummyScrollTimerID,
    SidebarFixer_isGeckoGte097 = p_Gecko && 0 <= ua.conpare( p_engineVersion, '0.9.7' ),
    SidebarFixer_isGeckoLte094 = p_Gecko && ua.conpare( p_engineVersion, '0.9.4' ) <= 0;

if( !p_isMobile && !p_cloudRendering ){

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

            DEFINE_WEB_DOC_BASE__DEBUG && p_addEventListener( window, 'blur', SidebarFixer_onWindowBlur );

            if( !( p_Presto < 8 || SidebarFixer_isGeckoLte094 ) ){
                if( p_Trident < 6 ){
                    // 
                } else if( p_Trident || p_Tasman ){
                    p_addEventListener( SidebarFixer_elmWrap, 'focusin', SidebarFixer_onfocus );
                } else if( SidebarFixer_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN ){
                    p_addEventListener( document, 'focus', SidebarFixer_onfocus, { capture : true, passive : false } );
                } else {
                    p_addEventListener( SidebarFixer_elmWrap, 'DOMFocusIn', SidebarFixer_onfocus, false );
                };
            };

            // Array と NodeList の場合があるので、常に再取得
            while( 1 < p_DOM_getChildNodes( SidebarFixer_elmSide ).length ){
                SidebarFixer_elmWrap.appendChild( p_DOM_getChildNodes( SidebarFixer_elmSide )[ 1 ] );
            };

            if( SidebarFixer_isGeckoGte097 && !p_FirefoxGte35 ){
                p_addEventListener( document, 'DOMMouseScroll', SidebarFixer_onwheelForOldGecko, false );
            };

            while( id = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
                elm = p_DOM_getElementById( id );
                if( p_notUndefined( elm.onwheel ) ){
                    p_addEventListener( elm, 'wheel', SidebarFixer_onwheel, { passive : false } );
                } else if( p_FirefoxGte35 ){
                    p_addEventListener( elm, 'MozMousePixelScroll', SidebarFixer_onwheel, false );
                } else if( SidebarFixer_isGeckoGte097 ){
                    // Array.<string> => Array.<Element>
                    SidebarFixer_ID_OF_WHEEL_ELEMENTS[ i ] = p_DOM_getElementById( id );
                } else if( p_notUndefined( elm.onmousewheel ) || 9 <= p_Presto ){
                    p_addEventListener( elm, 'mousewheel', SidebarFixer_onwheel, false );
                };
            };

            if( 
                !p_Trident && !p_EdgeHTML && // Win8.1 以下の IE にはGPU描画エラー有. Win10の Edge, IE11- は3D系が付くと transition しない
                !( p_Chromium < 2 )          // Chrome 1 描画が欠ける
            ){
                SidebarFixer_use3D = p_notUndefined( p_style[ 'perspective'         ] ) ||
                                     p_notUndefined( p_style[ '-moz-perspective'    ] ) ||
                                     p_notUndefined( p_style[ '-webkit-perspective' ] );
            };


            SidebarFixer_onscroll();
            return true;
        }
    );

    p_listenUnloadEvent(
        function(){
            var i = -1, id, elm;

            if( SidebarFixer_isGeckoGte097 && !p_FirefoxGte35 ){
                p_removeEventListener( document, 'DOMMouseScroll', SidebarFixer_onwheelForOldGecko, false );
            } else {
                while( id = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
                    elm = p_DOM_getElementById( id );
                    if( p_notUndefined( elm.onwheel ) ){
                        p_removeEventListener( elm, 'wheel', SidebarFixer_onwheel, { passive : false } );
                    } else if( p_FirefoxGte35 ){
                        p_removeEventListener( elm, 'MozMousePixelScroll', SidebarFixer_onwheel, false );
                    } else if( p_notUndefined( elm.onmousewheel ) || 9 <= p_Presto ){
                        p_removeEventListener( elm, 'mousewheel', SidebarFixer_onwheel, false );
                    };
                };
            };

            DEFINE_WEB_DOC_BASE__DEBUG && p_removeEventListener( window, 'blur', SidebarFixer_onWindowBlur );

            if( !( p_Presto < 8 || SidebarFixer_isGeckoLte094 ) ){
                if( p_Trident < 6 ){
                    // 
                } else if( p_Trident || p_Tasman ){
                    p_removeEventListener( SidebarFixer_elmWrap, 'focusin', SidebarFixer_onfocus, false );
                } else if( SidebarFixer_USE_FOCUS_CAPTURE_INSTED_OF_FOCUSIN ){
                    p_removeEventListener( document, 'focus', SidebarFixer_onfocus, { capture : true, passive : false } );
                } else {
                    p_removeEventListener( SidebarFixer_elmWrap, 'DOMFocusIn', SidebarFixer_onfocus, false );
                };
            };

            if( SidebarFixer_watchActiveElementTimerID ){
                clearInterval( SidebarFixer_watchActiveElementTimerID );
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
    var focuedElementYAndHeight = SidebarFixer_focuedElementYAndHeight;

    if( !p_cssAvailability ){
        SidebarFixer_focuedElementYAndHeight = undefined;
        return;
    };
    if( SidebarFixer_ignoreScrollAfterFocus && !focuedElementYAndHeight ){
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

    if( focuedElementYAndHeight ){
        SidebarFixer_focuedElementYAndHeight = SidebarFixer_fix( undefined, focuedElementYAndHeight[ 0 ], focuedElementYAndHeight[ 1 ] ); // false, undefined, Array.<number>
        if( !SidebarFixer_focuedElementYAndHeight ){
            // focus 直後に発生する scroll をスキップする
            SidebarFixer_ignoreScrollAfterFocus = ( new Date - 0 ) + 99;
        };
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
    // Debug.log( 'w.blur' );
    // SidebarFixer_fix();
};

/**
 * @param {number|undefined=} wheelDeltaY
 * @param {number=} focusedElementY
 * @param {number=} focusedElementHeight
 * @return {boolean|Array.<number>|undefined} ホイールイベントをキャンセルするか? または SidebarFixer_focuedElementYAndHeight の保持する用
 */
function SidebarFixer_fix( wheelDeltaY, focusedElementY, focusedElementHeight ){
    var scrollY        = SidebarFixer_lastScrollY,
        elmMain        = SidebarFixer_elmMain,
        isMultiColumn  = SidebarFixer_elmSide.offsetTop === elmMain.offsetTop,
        sidebarOffsetY = 0,
        cssText        = '',
        preventWheel   = true;

    function createCSSTextBySidebarOffsetY( _y ){
        var sidebarWidth;

        sidebarOffsetY = _y;
        if( SidebarFixer_transformProp ){
            cssText = SidebarFixer_transformProp + ':translate' + ( SidebarFixer_use3D ? '3D(0,' : '(0,' ) +  /* 3D は Android 3.1 ではマスト */
                      _y + ( SidebarFixer_use3D ? 'px,0)' : 'px)' ) +
                      ';-webkit-overflow-scrolling:touch';
        } else if( _y !== 0 ){
            if( !SidebarFixer_USE_POSITION_RELATIVE && ( SidebarFixer_USE_CLIP || SidebarFixer_CANUSE_POSITION_FIXED ) ){
                sidebarWidth = SidebarFixer_elmSide.offsetWidth;
            };
            if( SidebarFixer_CANUSE_POSITION_FIXED ){
                cssText = 'position:fixed;width:' + sidebarWidth + 'px;top:' + ( _y - scrollY + containerY ) + 'px';
            } else if( SidebarFixer_USE_POSITION_RELATIVE ){
                // pos:absolute でないと動作しない
                cssText = 'top:' + _y + 'px;left:0';
            } else {
                // pos:relative でも良いが、よりレイアウトコストの低い pos:absolute を使用
                cssText = 'position:absolute;left:0;width:100%;top:' + _y + 'px';
            };

            if( SidebarFixer_USE_CLIP && cssText ){
                cssText += ';' +
                    (
                    _y < 0 ? 
                        'clip:rect(' + ( -_y ) + 'px ' + sidebarWidth + 'px ' + sidebarHeight + 'px 0)' :
                    _y + sidebarHeight < containerHeight ?
                        'clip:rect(0 ' + sidebarWidth + 'px ' + sidebarHeight + 'px 0)' :
                        'clip:rect(0 ' + sidebarWidth + 'px ' + ( containerHeight - _y ) + 'px 0)'
                    );
                if( !( p_Trident < 8 ) ){
                    cssText = cssText.split( ' ' ).join( ',' );
                };
            };
        };
    };

    if( isMultiColumn ){
        var SIDEBAR_TOP_TO_CONTAINER_TOP                       = 0,
            SIDEBAR_BOTTOM_TO_CONTAINER_BOTTOM                 = 1,
            SIDEBAR_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM         = 2,
            SIDEBAR_TOP_TO_VISIBLE_CONTAINER_TOP               = 3,
            FOCUSED_ELEMENT_TOP_TO_VISIBLE_CONTAINER_TOP       = 4,
            FOCUSED_ELEMENT_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM = 5,
            SIDEBAR_OFFSET_Y_IS_CALCURATED                     = 6,
            SKIP_ACTION                                        = 7;

        var action     = SIDEBAR_TOP_TO_CONTAINER_TOP,
            containerY = 0,
            elm        = elmMain;

        while( elm && elm !== p_body ){
            containerY += elm.offsetTop;
            elm = elm.offsetParent;
        };

        sidebarOffsetY = SidebarFixer_sidebarOffsetY;

        var viewportHeight         = SidebarFixer_getFinite( window.innerHeight, SidebarFixer_elmRoot.offsetHeight ),
            mainColHeight          = elmMain.offsetHeight,
            sidebarHeight          = SidebarFixer_elmWrap.offsetHeight,
            containerHeight        = sidebarHeight < mainColHeight ? mainColHeight : sidebarHeight,
            viewportTop            = scrollY,
            viewportBottom         = viewportTop + viewportHeight,
            containerTop           = containerY,
            containerBottom        = containerTop + containerHeight,
            currentSidebarTop      = containerY + sidebarOffsetY,
            currentSidebarBottom   = currentSidebarTop + sidebarHeight,
            visibleContainerTop    = viewportTop     < containerTop   ? containerTop    : viewportTop,
            visibleContainerBottom = containerBottom < viewportBottom ? containerBottom : viewportBottom,
            visibleContainerHeight = visibleContainerBottom - visibleContainerTop;
        
        var containerIsOutsideAboveOfViewport = containerBottom <= viewportTop,
            containerIsOutsideBelowOfViewport = viewportBottom  <= containerTop;

        if( focusedElementY !== undefined ){
            var focusedElementTop    = containerY + focusedElementY,
                focusedElementBottom = focusedElementTop + focusedElementHeight,
                scrollYTo;

            // 4. Tabキーでのフォーカス移動
            // 4.1 コンテナはビューポートの外
            if( containerIsOutsideAboveOfViewport || containerIsOutsideBelowOfViewport ){
                // 4.1.1 ビューポートの高さ ≦ サイドバー下のフォーカスを得た要素の高さなら、コンテナのyにスクロールする。
                if( viewportHeight <= focusedElementHeight ){
                    scrollYTo = containerY;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.1.1' );
                // 4.1.2 コンテナはビューポートの上側なら、コンテナの地 - 要素の高さにスクロールする。
                } else if( containerIsOutsideAboveOfViewport ){
                    scrollYTo = containerBottom - focusedElementHeight;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.1.2' );
                } else {
                // 4.1.3 コンテナはビューポートの下側なら、コンテナのy + 要素の高さ - ビューポートの高さにスクロールする。
                    scrollYTo = containerY + focusedElementHeight - viewportHeight;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.1.3' );
                };
                SidebarFixer_ignoreScrollAfterFocus = undefined;
                window.scroll( SidebarFixer_getFinite( window.pageXOffset, window.scrollX, SidebarFixer_elmRoot.scrollLeft, p_body.scrollLeft ), scrollYTo );
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.1.*' );
                // window.scroll 内で SidebarFixer_onscroll が起る場合、SidebarFixer_focuedElementYAndHeight は undefined になっている
                // このコールバックを終えてから SidebarFixer_onscroll が起きる場合、SidebarFixer_focuedElementYAndHeight を復帰する。
                return SidebarFixer_focuedElementYAndHeight;
            } else
            // 4.2 サイドバーの高さ ≦ コンテナの可視部分の高さ
            if( sidebarHeight <= visibleContainerHeight ){
                // 可視部分の天と要素の天を合わせる
                action = FOCUSED_ELEMENT_TOP_TO_VISIBLE_CONTAINER_TOP;
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.2' );
            } else
            // 4.3 サイドバー下のフォーカスを得た要素の高さ ≦ コンテナの可視部分の高さ 
            if( focusedElementHeight <= visibleContainerHeight ){
                if( sidebarHeight - focusedElementY <= visibleContainerHeight ){
                    // 4.3.1 要素の天をコンテナの可視部分の天に合わせると、サイドバー下に隙間が出来る場合、サイドバーの地をコンテナの可視部分の地に揃える
                    action = SIDEBAR_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3.1' );
                } else if( visibleContainerTop <= focusedElementTop && focusedElementBottom <= visibleContainerBottom ){
                    // 4.3.2 完全に可視部分に入っている場合は移動しない
                    // 但し、サイドバー上に隙間が出来る場合、可視部分の天と要素の天を合わせる
                    if( visibleContainerTop < containerY + sidebarOffsetY ){
                        action = FOCUSED_ELEMENT_TOP_TO_VISIBLE_CONTAINER_TOP;
                        DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3.2' );
                    };
                    // DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3.2' );
                } else if( visibleContainerTop <= focusedElementTop && focusedElementTop <= visibleContainerBottom ){
                    // 4.3.3 要素の天がコンテナの可視部分に入っている場合、可視部分の地と要素の地を合わせる
                    action = FOCUSED_ELEMENT_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3.3' );
                } else if( visibleContainerTop <= focusedElementBottom && focusedElementBottom <= visibleContainerBottom ){
                    // 4.3.4 要素の地がコンテナの可視部分に入っている場合、可視部分の天と要素の天を合わせる
                    action = FOCUSED_ELEMENT_TOP_TO_VISIBLE_CONTAINER_TOP;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3.4' );
                } else if( focusedElementBottom < visibleContainerTop ){
                    // 4.3.5 要素は可視部分より上、可視部分の天と要素の天を合わせる
                    action = FOCUSED_ELEMENT_TOP_TO_VISIBLE_CONTAINER_TOP;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3.5' );
                } else {
                    // 4.3.6 要素は可視部分より下、可視部分の地と要素の地を合わせる
                    action = FOCUSED_ELEMENT_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.3.6' );
                };
            } else {
            // 4.4 サイドバー下のフォーカスを得た要素の高さ > コンテナの可視部分の高さ
            //     -> コンテナの可視部分の天と要素の天を合わせる
                action = FOCUSED_ELEMENT_TOP_TO_VISIBLE_CONTAINER_TOP;
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.4' );
            };
            preventWheel = undefined;
        } else if( wheelDeltaY !== undefined ){
            // 3. サイドバー上でのマウスホイールでの動作
            // 3.1 サイドバーの高さ ≦ コンテナの可視部分の高さ
            if( sidebarHeight <= visibleContainerHeight ){
                action = SKIP_ACTION;
                preventWheel = false;
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.1' );
            } else {
            // 3.2 サイドバーの高さ > コンテナの可視部分の高さ
                sidebarOffsetY = sidebarOffsetY - wheelDeltaY * 60;
                // 3.2.1 サイドバーの天の最小値は、コンテナの可視部分の地 - コンテナのy - サイドバーの高さ。
                var minLimitOfSidebarY = visibleContainerBottom - containerY - sidebarHeight;
                // 3.2.2 サイドバーの天の最大値は、コンテナの可視部分の天 - コンテナのy。
                var maxLimitOfSidebarY = visibleContainerTop - containerY;
                if( sidebarOffsetY < minLimitOfSidebarY ){
                    sidebarOffsetY = minLimitOfSidebarY;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.2.1' );
                } else
                if( maxLimitOfSidebarY < sidebarOffsetY ){
                    sidebarOffsetY = maxLimitOfSidebarY;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.2.2' );
                } else {
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '3.2.3' );
                };
                action = SIDEBAR_OFFSET_Y_IS_CALCURATED;
            };
        } else {
            // 2. ドキュメントのスクロールでの動作
            // 2.1 サイドバーの高さ ≧ メインコンテンツの高さ
            if( mainColHeight <= sidebarHeight ){
                // ゼロ位置
            } else
            // 2.2 コンテナはビューポートの外
            // 2.2.1 ビューポートのトップより上ならば、サイドバーはコンテナの地へ。
            if( containerIsOutsideAboveOfViewport ){
                action = SIDEBAR_BOTTOM_TO_CONTAINER_BOTTOM;
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.2.1' );
            } else
            // 2.2.2 ビューポートのボトムより下ならば、サイドバーはコンテナの天へ。
            if( containerIsOutsideBelowOfViewport ){
                // ゼロ位置
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.2.2' );
            } else
            // 2.3 サイドバーの高さ ≦ コンテナの可視部分の高さ、サイドバーの天をコンテナの可視部分の天に揃える
            if( sidebarHeight <= visibleContainerHeight ){
                action = SIDEBAR_TOP_TO_VISIBLE_CONTAINER_TOP;
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.3' );
            } else {
                // 2.4 サイドバーの高さ > コンテナの可視部分の高さ
                // 2.4.1 サイドバーの天がコンテナの可視部分の天より下なら、サイドバーの天をコンテナの可視部分の天に揃える
                if( visibleContainerTop < currentSidebarTop ){
                    action = SIDEBAR_TOP_TO_VISIBLE_CONTAINER_TOP;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.1' );
                } else
                // 2.4.2 サイドバーの地がコンテナの可視部分の地より上なら、サイドバーの地をコンテナの可視部分の地に揃える
                if( currentSidebarBottom < visibleContainerBottom ){
                    action = SIDEBAR_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.2' );
                } else
                // 2.4.3 スクロール量 < containerY + サイドバーの高さ - コンテナの可視部分の高さ
                if( scrollY < containerY + sidebarHeight - visibleContainerHeight ){
                    // ゼロ位置
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.3' );
                } else {
                    // サイドバーの地はコンテナの可視部分の地 
                    action = SIDEBAR_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM;
                    DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '2.4.4' );
                };
            };
        };
        switch( action ){
            case SIDEBAR_TOP_TO_CONTAINER_TOP :
                createCSSTextBySidebarOffsetY( 0 );
                break;
            case SIDEBAR_BOTTOM_TO_CONTAINER_BOTTOM :
                createCSSTextBySidebarOffsetY( containerHeight - sidebarHeight );
                break;
            case SIDEBAR_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM :
                createCSSTextBySidebarOffsetY( visibleContainerBottom - containerY - sidebarHeight );
                break;
            case SIDEBAR_TOP_TO_VISIBLE_CONTAINER_TOP :
                createCSSTextBySidebarOffsetY( visibleContainerTop - containerY );
                break;
            case FOCUSED_ELEMENT_TOP_TO_VISIBLE_CONTAINER_TOP : // 可視部分の天と要素の天を合わせる
                createCSSTextBySidebarOffsetY( visibleContainerTop - containerY - focusedElementY );
                break;
            case FOCUSED_ELEMENT_BOTTOM_TO_VISIBLE_CONTAINER_BOTTOM : // 可視部分の地と要素の地を合わせる
                createCSSTextBySidebarOffsetY( visibleContainerBottom - containerY - ( focusedElementY + focusedElementHeight ) );
            case SIDEBAR_OFFSET_Y_IS_CALCURATED :
                createCSSTextBySidebarOffsetY( sidebarOffsetY );
                break;
        };
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateSidebar( sidebarOffsetY, sidebarHeight, containerY, containerHeight, viewportHeight, focusedElementY || '-', focusedElementHeight || '-' );
        };
    } else if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_updateSidebar( sidebarOffsetY, '-', '-', '-', '-', '-', '-' );
    };

    p_DOM_setCssText( SidebarFixer_elmWrap, cssText );

    SidebarFixer_sidebarOffsetY = sidebarOffsetY;

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
        cancel   = hitChild && deltaY && SidebarFixer_fix( /** @type {number} */ ( deltaY <= 9 ? ( deltaY <= -9 ? -3 : deltaY ) : 3 ) );

    if( cancel ){
        e.preventDefault();
        e.stopPropagation();
    };
};

function SidebarFixer_onwheelForOldGecko( e ){
    var focusedElement = e.target, i = -1, elm;

    while( elm = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
        if( p_DOM_contains( elm, focusedElement ) ){
            SidebarFixer_onwheel( e );
        };
    };
};

function SidebarFixer_onfocus( e ){
    if( !p_cssAvailability ){
        return;
    };

    var useContains     = !!SidebarFixer_transformProp || p_Gecko,
        elmFocused      = e.target || e.srcElement,
        focusedElementY = 0,
        focusedElementHeight, elm;

    if( p_DOM_contains( SidebarFixer_elmWrap, elmFocused ) ){
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_showEvent( e.type || 'ie5focus' );
            p_addEventListener( elmFocused, 'blur', SidebarFixer_onActiveElementblur );
        };

        focusedElementHeight = elmFocused.offsetHeight;
        elm = elmFocused;
        while( elm && ( useContains ? p_DOM_contains( SidebarFixer_elmWrap, elm ) : ( SidebarFixer_elmWrap !== elm ) ) ){
            focusedElementY += elm.offsetTop;
            elm = elm.offsetParent;
        };

        if( !SidebarFixer_SCROLL_FOLLOWING_FOCUSIN_EVENT ){
            SidebarFixer_lastScrollY = SidebarFixer_getFinite( window.pageYOffset, window.scrollY, SidebarFixer_elmRoot.scrollTop, p_body.scrollTop );
            SidebarFixer_fix( undefined, focusedElementY, focusedElementHeight );
        } else {
            SidebarFixer_focuedElementYAndHeight = [ focusedElementY, focusedElementHeight ];
            if( SidebarFixer_dummyScrollTimerID ){
                p_clearTimer( SidebarFixer_dummyScrollTimerID );
            };
            SidebarFixer_dummyScrollTimerID = p_setTimer( SidebarFixer_onscroll, SidebarFixer_ONSCROL_FROM_TIMER ); // scroll が起きない場合がある!
        };

        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateElementFocused( focusedElementY, focusedElementHeight );
        };
    };
};

/** ===========================================================================
 * for activeElement
 */
var SidebarFixer_watchActiveElementTimerID;
var SidebarFixer_currentActiveElement;
var SidebarFixer_memoryErrorHandler;

p_Trident < 6 && p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( !p_elmMain ) return true;
            
        if( cssAvailability ){
            SidebarFixer_watchActiveElementTimerID = setInterval( SidebarFixer_watchActiveElement, 333 );
        } else if( SidebarFixer_watchActiveElementTimerID ){
            clearInterval( SidebarFixer_watchActiveElementTimerID );
            SidebarFixer_watchActiveElementTimerID = 0;
        };
    }
);

function SidebarFixer_watchActiveElement(){
    SidebarFixer_memoryErrorHandler = window.onerror;

    window.onerror = SidebarFixer_watchActiveElementErrorHandler;

    var activeElement = document.activeElement; // activeElement を触るとエラーが起る事がある. try~catch が使えない為、onerror を使う

    if( SidebarFixer_currentActiveElement !== activeElement ){
        SidebarFixer_currentActiveElement = activeElement;
        SidebarFixer_onfocus( { target : activeElement } );
    };

    window.onerror = /** @type {Function} */ (SidebarFixer_memoryErrorHandler);
    SidebarFixer_memoryErrorHandler = undefined;
};

function SidebarFixer_watchActiveElementErrorHandler(){
    Debug.log( 'error!' );
    window.onerror = /** @type {Function} */ (SidebarFixer_memoryErrorHandler);
    SidebarFixer_memoryErrorHandler = SidebarFixer_currentActiveElement = undefined;
    return true;
};

/** ===========================================================================
 * for debug
 */
function SidebarFixer_onActiveElementblur(){
    p_removeEventListener( this, 'blur', SidebarFixer_onActiveElementblur );
    SidebarFixer_updateElementFocused( 0, 0 );
};

if( DEFINE_WEB_DOC_BASE__DEBUG ){
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

            var childNodes = p_DOM_getChildNodes( p_body );
            var elmTestRoot = p_DOM_insertElementBefore( childNodes[ 0 ], 'div' );

            if( !SidebarFixer_CANUSE_POSITION_FIXED ){
                // https://web.archive.org/web/20190125194249/http://css-eblog.com/csstechnique/position-fixed-forie6.html
                for( ; childNodes.length; ){
                    elmTestRoot.appendChild( childNodes.shift() );
                };
                p_DOM_setCssText( elmTestRoot, 'width:100%; height:100%; overflow:auto; position:relative;' );

                elmTestRoot = p_DOM_insertElementAfter( elmTestRoot, 'div' );
                p_DOM_setCssText( p_html, 'overflow:hidden' );
                p_DOM_setCssText( p_body, 'overflow:hidden' );
                p_DOM_setCssText( elmTestRoot, 'position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px' );
            } else {
                p_DOM_setCssText( elmTestRoot, 'position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px' );
            };

            p_DOM_insertElement( elmTestRoot, 'div', undefined,
                ( p_cssTransformName ? 'transform' + ( SidebarFixer_use3D ? '3D' : '' ) : ( SidebarFixer_CANUSE_POSITION_FIXED ? 'pos:fixed' : 'pos:absolute' ) )
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
    } else {
        // Debug.log( eventChar );
    };
};
function SidebarFixer_hideEvent(){
    SidebarFixer_elmDisplayEvents.innerHTML = '';
};
function SidebarFixer_updateViewport(){
    if( SidebarFixer_elmViewport ){
        p_DOM_setStyle( SidebarFixer_elmViewport, 'top', ( SidebarFixer_lastScrollY / 10 | 0 ) + 'px' );

        SidebarFixer_elmDisplayScroll.innerHTML = ' scrl:' + ( SidebarFixer_lastScrollY | 0 );
    } else {
        // Debug.log( 'scrollY:' + SidebarFixer_lastScrollY );
    };
};
function SidebarFixer_updateSidebar( sidebarOffsetY, sidebarHeight, containerY, containerHeight, viewportHeight, focusedElementY, focusedElementHeight ){
    if( SidebarFixer_elmSidebar ){
        p_DOM_setStyle( SidebarFixer_elmSidebar, 'top', ( ( sidebarOffsetY + containerY ) / 10 | 0 ) + 'px' );
        p_DOM_setStyle( SidebarFixer_elmSidebar, 'height', ( sidebarHeight / 10 | 0 ) + 'px' );

        p_DOM_setStyle( SidebarFixer_elmViewport, 'height', ( viewportHeight / 10 | 0 ) + 'px' );

        p_DOM_setStyle( SidebarFixer_elmDocument, 'height', ( p_body.scrollHeight / 10 | 0 ) + 'px' );

        SidebarFixer_elmDisplayValues.innerHTML = 'conY:' + containerY + '/sidY' + sidebarOffsetY + ', conH:' + containerHeight + '/sidH' + sidebarHeight + ', focY:' + focusedElementY + ' focH:' + focusedElementHeight;
    };
};
function SidebarFixer_updateElementFocused( y, h ){
    if( SidebarFixer_elmFocused ){
        p_DOM_setStyle( SidebarFixer_elmFocused, 'top', ( y / 10 | 0 ) + 'px' );
        p_DOM_setStyle( SidebarFixer_elmFocused, 'height', ( h / 10 | 0 ) + 'px' );
    };
};