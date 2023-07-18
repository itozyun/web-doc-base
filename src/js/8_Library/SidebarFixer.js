/**
 * @see https://outcloud.blogspot.com/2022/03/sidebarfixer.html
 *
 * 途中でサイドバーの要素が変化する -> 公開メソッドを未実装
 */
var SidebarFixer_ONSCROL_FROM_TIMER             = 7,
    SidebarFixer_ID_OF_WHEEL_ELEMENTS           = [ COMMON_SIDEBAR_FIXER_ELEMENT_ID_1ST_WHEEL, COMMON_SIDEBAR_FIXER_ELEMENT_ID_2ND_WHEEL ],
    SidebarFixer_SCROLL_FOLLOWING_FOCUSIN_EVENT = !( p_Trident < 9 || p_Presto || ( 1 <= p_Gecko && p_Gecko < 1.3 ) || p_usePatchOfTabFocusForGeckoLte094 ),
    /*
     * positionFixed
     *   original :
     *     https://github.com/jquery/jquery-mobile/blob/d04308f591d4d0e58443d6a645d0cc1f599888d2/js/support.js
     */
    SidebarFixer_CANUSE_POSITION_FIXED = // Opera 9.x-10.x では fixed でないと表示が乱れる
            !(
                // iOS 4.3 and older : Platform is iPhone/Pad/Touch and WebKit version is less than 534 (ios5)
                p_SafariMobile < 5 ||
                // Opera Mini
                // https://www.tobymackenzie.com/blog/2017/05/11/opera-mini-supporting-fixed-position/
                //( ua[ 'OperaMini' ] ) ||
                // UC Browser speed mode on
                //( ua[ 'UCWEB' ] ) ||
                //Android lte 2.1: Platform is Android and WebKit version is less than 533 (Android 2.2)
                ( p_AOSP < 2.2 ) ||
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
    SidebarFixer_USE_CLIP = SidebarFixer_CANUSE_POSITION_FIXED || p_Trident === 6 /* mouse wheel のある6だけ */ || p_Gecko < 1,
    SidebarFixer_USE_POSITION_RELATIVE = p_Presto < 7.5,
    SidebarFixer_elmSide,
    SidebarFixer_elmMain,
    SidebarFixer_elmWrap,
    SidebarFixer_transformProp = p_canUseGetBoundingClientRect && p_cssTransformName, // Safari 3.2, transform + offsetTop だと focuedElementYの値が不正, getBoundingClientRect が使える 4以降なら大丈夫
    SidebarFixer_sidebarOffsetY = 0,
    SidebarFixer_lastScrollY = 0,
    SidebarFixer_use3D,
    SidebarFixer_focuedElementYAndHeight,
    SidebarFixer_ignoreScrollAfterFocus,
    SidebarFixer_dummyScrollTimerID;

if( !p_isMobile && !p_cloudRendering ){

    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( !cssAvailability ) return;
            if( !p_elmMain ) return true;

            var i = -1, id;

            SidebarFixer_elmSide = p_DOM_getElementById( COMMON_ELEMENT_ID_SUB_COLUMN );
            SidebarFixer_elmMain = p_elmMain;

            if( !SidebarFixer_elmSide ) return true;

            p_listenScrollEvent( /** @type {!function(!Event=)} */ (SidebarFixer_onscroll) );
            p_listenResizeEvent( /** @type {!function(!Event=)} */ (SidebarFixer_onscroll) );

            // ラッパー要素を作成, sidebar の子要素をラッパー要素の下に
            SidebarFixer_elmWrap = p_DOM_insertElementBefore(
                /** @type {!Node} */ (p_DOM_getFirstChild( /** @type {!Element} */ (SidebarFixer_elmSide) )),
                'div',
                { id : COMMON_SIDEBAR_FIXER_ELEMENT_ID_WRAPPER }
            );

            DEFINE_WEB_DOC_BASE__DEBUG && p_addEventListener( window, 'blur', SidebarFixer_onWindowBlur );

            p_listenFocusinEvent( SidebarFixer_elmWrap, SidebarFixer_onfocus );

            // Array と NodeList の場合があるので、常に再取得
            while( 1 < p_DOM_getChildNodes( SidebarFixer_elmSide ).length ){
                SidebarFixer_elmWrap.appendChild( p_DOM_getChildNodes( SidebarFixer_elmSide )[ 1 ] );
            };

            while( id = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
                p_listenWheelEvent( /** @type {!Element} */ (p_DOM_getElementById( id )), SidebarFixer_onwheel );
            };

            if( 
                !p_Trident && !p_EdgeHTML && // Win8.1 以下の IE にはGPU描画エラー有. Win10の Edge, IE11- は3D系が付くと transition しない
                !( p_Chromium < 2 )          // Chrome 1 描画が欠ける
            ){
                SidebarFixer_use3D = p_notUndefined( p_style[ 'perspective'         ] ) ||
                                     p_notUndefined( p_style[ 'MozPerspective'      ] ) ||
                                     p_notUndefined( p_style[ '-webkit-perspective' ] );
            };

            SidebarFixer_onscroll();
            return true;
        }
    );

    p_listenUnloadEvent(
        function(){
            var i = -1, id;

            while( id = SidebarFixer_ID_OF_WHEEL_ELEMENTS[ ++i ] ){
                p_unlistenWheelEvent( /** @type {!Element} */ (p_DOM_getElementById( id )), SidebarFixer_onwheel );
            };

            DEFINE_WEB_DOC_BASE__DEBUG && p_removeEventListener( window, 'blur', SidebarFixer_onWindowBlur );

            p_unlistenFocusinEvent( SidebarFixer_elmWrap, SidebarFixer_onfocus );
        }
    );
};

/**
 * @param {!Event|number=} param Eventオブジェクトの場合もあれば、タイマーで呼ばれた場合は 0 が入っている
 */
function SidebarFixer_onscroll( param ){
    var focuedElementYAndHeight = SidebarFixer_focuedElementYAndHeight;

    if( !p_cssAvailability ){
        SidebarFixer_focuedElementYAndHeight = undefined;
        return;
    };
    if( SidebarFixer_ignoreScrollAfterFocus && !focuedElementYAndHeight ){
        if( p_getTimestamp() < SidebarFixer_ignoreScrollAfterFocus ){
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
        SidebarFixer_lastScrollY = p_getDocumentScrollY();
    };

    if( focuedElementYAndHeight ){
        SidebarFixer_focuedElementYAndHeight = SidebarFixer_fix( undefined, focuedElementYAndHeight[ 0 ], focuedElementYAndHeight[ 1 ] ); // false, undefined, Array.<number>
        if( !SidebarFixer_focuedElementYAndHeight ){
            // focus 直後に発生する scroll をスキップする
            SidebarFixer_ignoreScrollAfterFocus = p_getTimestamp() + 99;
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
 * @return {!Array.<number>|boolean|undefined} ホイールイベントをキャンセルするか? または SidebarFixer_focuedElementYAndHeight を保持する用
 */
function SidebarFixer_fix( wheelDeltaY, focusedElementY, focusedElementHeight ){
    var scrollY        = SidebarFixer_lastScrollY,
        elmMain        = SidebarFixer_elmMain,
        isMultiColumn  = SidebarFixer_elmSide.offsetTop === elmMain.offsetTop,
        sidebarOffsetY = 0,
        cssText        = '',
        preventWheel   = true;

    function createCSSTextBySidebarOffsetY( _y ){
        var sidebarWidth, _;

        sidebarOffsetY = _y;
        if( SidebarFixer_transformProp ){
            cssText = SidebarFixer_transformProp + ':translate' + ( SidebarFixer_use3D ? '3D(0,' : '(0,' ) +  /* 3D は Android 3.1 ではマスト */
                      _y + ( SidebarFixer_use3D ? 'px,0)' : 'px)' ) +
                      ';-webkit-overflow-scrolling:touch';
        } else if( _y !== 0 ){
            if( SidebarFixer_CANUSE_POSITION_FIXED || SidebarFixer_USE_CLIP ){
                sidebarWidth = SidebarFixer_elmSide.offsetWidth;
            };

            if( SidebarFixer_CANUSE_POSITION_FIXED ){
                cssText = 'position:fixed;width:' + sidebarWidth + 'px;top:' + ( _y - scrollY + containerY ) + 'px';
            } else if( SidebarFixer_USE_POSITION_RELATIVE ){
                // Opera 7.x, pos:relative でないと動作しない
                cssText = 'top:' + _y + 'px';
            } else {
                // IE <=6, Opera 8, Gecko <1, Fennec<6 iOS <5, AOSP <2.2
                // pos:relative でも良いが、よりレイアウトコストの低い pos:absolute を使用
                cssText = 'position:absolute;top:' + _y + 'px;left:0';
            };

            if( SidebarFixer_USE_CLIP && cssText ){
                _ = p_Trident < 8 ? ' ' : ',';
                cssText += ';clip:rect(' +
                    (
                    _y < 0
                        ? ( -_y ) + 'px' + _ + sidebarWidth + 'px' + _ + sidebarHeight
                        : '0' + _ + sidebarWidth + 'px' + _ +
                            ( _y + sidebarHeight < containerHeight
                                ? sidebarHeight
                                : containerHeight - _y
                            )
                    ) + 'px' + _ + '0)';
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

        while( elm && elm !== p_body ){ // p_DOM_getElementOffsetY
            containerY += elm.offsetTop;
            elm = elm.offsetParent;
        };

        sidebarOffsetY = SidebarFixer_sidebarOffsetY;

        var viewportHeight         = p_getViewPortHeight(),
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
                window.scroll( 0, scrollYTo );
                DEFINE_WEB_DOC_BASE__DEBUG && SidebarFixer_showEvent( '4.1.*' );
                // window.scroll 内で SidebarFixer_onscroll が起る場合、SidebarFixer_focuedElementYAndHeight は undefined になっている
                // このコールバックを終えてから SidebarFixer_onscroll が起きる場合、SidebarFixer_focuedElementYAndHeight を復帰する。
                return SidebarFixer_focuedElementYAndHeight;
            } else
            // 4.2 サイドバーの高さ ≦ コンテナの可視部分の高さ
            if( sidebarHeight <= visibleContainerHeight ){
                // サイドバーの天をコンテナの可視部分の天に揃える
                action = SIDEBAR_TOP_TO_VISIBLE_CONTAINER_TOP;
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
            preventWheel = false;
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

/**
 * @param {!Event=} e
 */
function SidebarFixer_onwheel( e ){
    if( !p_cssAvailability ){
        return;
    };

    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_showEvent( 'm' );
    };

    if( p_Gecko ){
        SidebarFixer_lastScrollY = p_getDocumentScrollY(); // 必要?
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateViewport();
        };
    };

    if( this !== e.target ){
        var finite = isFinite,
            deltaY = finite( e.deltaY )
                        ? e.deltaY
                   : finite( e.wheelDeltaY )
                        ? e.wheelDeltaY / 120
                   : finite( e.wheelDelta )
                        ? e.wheelDelta / -120
                        : e.detail / ( e.type === 'MozMousePixelScroll' ? 45 : 1 ),
            cancel = deltaY && SidebarFixer_fix( /** @type {number} */ ( deltaY <= 9 ? ( deltaY <= -9 ? -3 : deltaY ) : 3 ) );

        if( cancel ){
            e.preventDefault();
            e.stopPropagation();
        };
    };
};

/**
 * @param {!Event=} e
 */
function SidebarFixer_onfocus( e ){
    if( !p_cssAvailability ){
        return;
    };

    var useContains     = p_Gecko,
        buggyOffsetTop  = p_Gecko && ua.conpare( p_engineVersion, '0.9.4' ) < 0, // for Gecko <=0.9.3
        elmFocused      = e.target,
        elmWrapper      = SidebarFixer_elmWrap,
        focusedElementY = 0,
        focusedElementHeight, elm, rect;

    if( p_DOM_contains( elmWrapper, /** @type {!Node} */ (elmFocused) ) ){
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_showEvent( e.type || 'ie5focus' );
            p_addEventListener( /** @type {!EventTarget} */ (elmFocused), 'blur', SidebarFixer_onActiveElementBlur );
        };

        // transform を使う Safari 4~5 は getBoundingClientRect で無いと focusedElementY が不正
        if( SidebarFixer_transformProp ){
            rect = elmFocused.getBoundingClientRect();
            focusedElementHeight = rect.bottom - rect.top;
            focusedElementY = ( rect.top - elmWrapper.getBoundingClientRect().top ) | 0;
        } else {
            focusedElementHeight = elmFocused.offsetHeight;
            elm = elmFocused;
            if( buggyOffsetTop ){ // keydown で offsetTop を表示してどこで狂ううのか？調べる => #SidebarFixer * {pos:relative} ??
                var tops = [];
                while( elm && ( useContains ? p_DOM_contains( elmWrapper, elm ) : ( elmWrapper !== elm ) ) ){
                    while( elm.previousSibling ){
                        elm = elm.previousSibling;
                        elm.tagName && tops.unshift( elm.tagName + ':' + elm.offsetTop );
                    };
                    elm = elm.offsetParent;
                };
                Debug.log( tops.join() );
                elm = elmFocused;
            };
            while( elm && ( useContains ? p_DOM_contains( elmWrapper, elm ) : ( elmWrapper !== elm ) ) ){
                if( buggyOffsetTop ){
                    while( elm.previousSibling ){
                        elm = elm.previousSibling;
                        focusedElementY += elm.offsetHeight || 0;
                    };
                    elm = elm.parentNode;
                } else {
                    focusedElementY += elm.offsetTop;
                    elm = elm.offsetParent;
                };
            };
        };

        if( !SidebarFixer_SCROLL_FOLLOWING_FOCUSIN_EVENT ){
            SidebarFixer_lastScrollY = p_getDocumentScrollY();
            SidebarFixer_fix( undefined, focusedElementY, focusedElementHeight );
        } else {
            SidebarFixer_focuedElementYAndHeight = [ focusedElementY, focusedElementHeight ];
            if( SidebarFixer_dummyScrollTimerID ){
                p_clearTimer( SidebarFixer_dummyScrollTimerID );
            };
            SidebarFixer_dummyScrollTimerID = p_setTimer( /** @type {!function(*=)} */ (SidebarFixer_onscroll), SidebarFixer_ONSCROL_FROM_TIMER, p_Gecko < 1 || p_WebKit < 536 || p_Chromium < 14 ? 500 : 0 ); // Gecko 0.9.5 はかなり遅れてスクロールが起こる
        };

        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateElementFocused( focusedElementY, focusedElementHeight );
        };
    };
};

/** ===========================================================================
 * for debug
 */
function SidebarFixer_onActiveElementBlur(){
    p_removeEventListener( this, 'blur', SidebarFixer_onActiveElementBlur );
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
                if( !p_GeckoLt09 ){
                    p_DOM_setCssText( elmTestRoot, 'width:100%;height:100%;overflow:auto;position:relative' );
                    p_DOM_setCssText( p_html, 'overflow:hidden' );
                    p_DOM_setCssText( p_body, 'overflow:hidden' );
                };

                elmTestRoot = p_DOM_insertElementAfter( elmTestRoot, 'div' );
                p_DOM_setCssText( elmTestRoot, 'position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px' );
            } else {
                p_DOM_setCssText( elmTestRoot, 'position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px' );
            };

            p_DOM_insertElement( elmTestRoot, 'div', undefined,
                ( SidebarFixer_transformProp ? 'transform' + ( SidebarFixer_use3D ? '3D' : '' ) : ( SidebarFixer_CANUSE_POSITION_FIXED ? 'pos:fixed' : 'pos:absolute' ) )
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