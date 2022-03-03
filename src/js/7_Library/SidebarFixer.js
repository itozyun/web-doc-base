/*
 * 途中でサイドバーの要素が変化する -> 知りません
 */
var SidebarFixer_ID_OF_WHEEL_ELEMENTS             = [ DEFINE_WEB_DOC_BASE__SIDEBARFIXER_1ST_WHEEL_ELM_ID, DEFINE_WEB_DOC_BASE__SIDEBARFIXER_2ND_WHEEL_ELM_ID ],
    // focus イベントに続いて scroll イベントが起こる
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
    SidebarFixer_transformProp = p_cssTransformName, // Chrome 1 描画が欠ける
    SidebarFixer_sidebarY = 0,
    SidebarFixer_lastScrollY = 0,
    SidebarFixer_use3D,
    SidebarFixer_skipScroll,
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

/**
 * @param {Event=} e 
 */
function SidebarFixer_onscroll(){
    if( !p_cssAvailability ){
        SidebarFixer_skipScroll = false;
        return;
    };
    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_showEvent( 's' );
    };
    if( SidebarFixer_FOCUS_FOLLOWED_BY_SCROLL && SidebarFixer_dummyScrollTimerID ){
        SidebarFixer_dummyScrollTimerID = p_clearTimer( SidebarFixer_dummyScrollTimerID );
    };

    if( SidebarFixer_skipScroll && !SidebarFixer_FOCUS_FOLLOWED_BY_SCROLL ){
        SidebarFixer_skipScroll = false;
    } else {
        SidebarFixer_lastScrollY = SidebarFixer_getFinite( window.pageYOffset, window.scrollY, SidebarFixer_elmRoot.scrollTop, p_body.scrollTop );
        if( SidebarFixer_skipScroll ){
            SidebarFixer_fix( SidebarFixer_lastScrollY, 0, SidebarFixer_skipScroll[ 0 ], SidebarFixer_skipScroll[ 1 ] );
            SidebarFixer_skipScroll = false;
        } else {
            SidebarFixer_fix( SidebarFixer_lastScrollY );
        };
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateViewport();
        };
    };
};

function SidebarFixer_onWindowBlur(){
    SidebarFixer_fix( SidebarFixer_lastScrollY );
};

/**
 * @param {number} scrollY
 * @param {number|boolean=} wheelDeltaY
 * @param {number|boolean=} focusedElementY
 * @param {number|boolean=} focusedElementHeight
 */
function SidebarFixer_fix( scrollY, wheelDeltaY, focusedElementY, focusedElementHeight ){
    var elmMain       = SidebarFixer_elmMain,
        isMultiColumn = SidebarFixer_elmSide.offsetTop === elmMain.offsetTop,
        sidebarY      = 0,
        css           = '',
        mainInViewPort, nocancelWheel;

    function createPositioning( y ){
        var w;

        sidebarY = y;
        if( SidebarFixer_transformProp ){
            css = SidebarFixer_transformProp + ':translate' + ( SidebarFixer_use3D ? '3D(0,' : '(0,' ) +  /* 3D は Android 3.1 用 */
                  y + ( SidebarFixer_use3D ? 'px,0)' : 'px)' );
        } else {
            if( SidebarFixer_positionFixed ){
                if( y !== 0 ){
                    y  -= scrollY - mainColY;
                    w   = SidebarFixer_elmSide.offsetWidth;
                    css = 'position:fixed;width:' + w + 'px;top:' + y + 'px';
                };
            } else {
                // pos:relative でも良いが、よりレイアウトコストの低い pos:absolute を使用
                css = 'position:absolute;left:0;width:100%;top:' + y + 'px';
            };

            if( SidebarFixer_positionFixed || p_Trident < 7 ){
                w    = w || SidebarFixer_elmSide.offsetWidth;
                css += ';' +
                    (
                    sidebarY < 0 ? 
                        'clip:rect(' + ( -sidebarY ) + 'px ' + w + 'px ' + ( scrollY + visibleHeight - sidebarY - mainColY ) + 'px 0)' :
                    sidebarY + sidebarHeight < mainColY + visibleHeight ?
                        'clip:rect(0 ' + w + 'px ' + sidebarHeight + 'px 0)' :
                        'clip:rect(0 ' + w + 'px ' + ( scrollY + visibleHeight - sidebarY - mainColY ) + 'px 0)'
                    );
            };
        };
    };

    if( isMultiColumn ){
        var viewportHeight = SidebarFixer_getFinite( window.innerHeight, SidebarFixer_elmRoot.offsetHeight ),
            mainColHeight  = elmMain.offsetHeight,
            sidebarHeight  = SidebarFixer_elmWrap.offsetHeight,
            mainColY       = 0,
            sidebarIsLower = sidebarHeight < mainColHeight,
            elm            = elmMain,
            scrollLimit,
            focusedElementT, focusedElementB;

        while( elm && elm !== p_body ){
            mainColY += elm.offsetTop;
            elm = elm.offsetParent;
        };
        var outOnViewPort   = mainColY + mainColHeight <= scrollY, // メインカラムはビューポートより上
            outsideViewPort = scrollY + viewportHeight <= mainColY,  // メインカラムはビューポートより下
            topInViewPort   = ( scrollY < mainColY ) && ( mainColY < scrollY + viewportHeight ), // メインカラムの始点はビューポート内
            btmInViewPort   = ( scrollY < mainColY + mainColHeight ) && ( mainColY + mainColHeight < scrollY + viewportHeight ), // メインカラムの終点はビューポート内
            visibleHeight   = ( mainColY + mainColHeight - scrollY ) < viewportHeight ? ( mainColY + mainColHeight - scrollY ) : viewportHeight, // メインカラムのビューポート内分の高さ、最大はビューポートの高さと同じ
            sideInViewPort  = sidebarHeight <= visibleHeight; // サイドバーの高さはメインカラムの可視の高さに収まる

        mainInViewPort = topInViewPort && btmInViewPort; // メインカラムはビューポート内に収まる

        if( 0 <= focusedElementY ){
            if( !sideInViewPort ){
                focusedElementT = focusedElementY + mainColY + SidebarFixer_sidebarY;
                focusedElementB = focusedElementHeight + focusedElementT;
                if( scrollY + visibleHeight < focusedElementB ){
                    createPositioning( scrollY + visibleHeight - mainColY - focusedElementY - focusedElementHeight );
                } else if( focusedElementT < scrollY ){
                    createPositioning( scrollY - mainColY - focusedElementY );
                } else {
                    if( DEFINE_WEB_DOC_BASE__DEBUG ){
                        SidebarFixer_updateSidebar( SidebarFixer_sidebarY, sidebarHeight, mainColY, mainColHeight, viewportHeight, focusedElementY );
                    };
                    return;
                };
            } else {
                if( DEFINE_WEB_DOC_BASE__DEBUG ){
                    SidebarFixer_updateSidebar( SidebarFixer_sidebarY, sidebarHeight, mainColY, mainColHeight, viewportHeight, focusedElementY );
                };
                return;
            };
        } else if( !wheelDeltaY ){
            if( sidebarIsLower ){
                if( topInViewPort || outsideViewPort ){
                    createPositioning( 0 );
                } else if( sideInViewPort ){
                    createPositioning( scrollY - mainColY );
                } else if( btmInViewPort || outOnViewPort ){
                    createPositioning( mainColHeight - sidebarHeight );
                } else {
                    scrollLimit = scrollY + viewportHeight - mainColY - sidebarHeight;
                    scrollLimit = scrollLimit < 0 ? 0 : scrollLimit;
                    createPositioning( scrollLimit );
                };
            };
        } else {
            // マウスが sidebar にホバーしている
            if( sideInViewPort ){
                nocancelWheel = true;
            } else {
                sidebarY = SidebarFixer_sidebarY - wheelDeltaY * 60;
                if( 0 < wheelDeltaY ){
                    scrollLimit = scrollY + viewportHeight - mainColY - sidebarHeight;
                    scrollLimit = mainColHeight - sidebarHeight < scrollLimit ? mainColHeight - sidebarHeight : scrollLimit;
                    sidebarY    = sidebarY < scrollLimit ? scrollLimit : sidebarY;
                } else {
                    scrollLimit = scrollY - mainColY < 0 ? 0 : scrollY - mainColY;
                    sidebarY    = scrollLimit < sidebarY ? scrollLimit : sidebarY;
                };
                createPositioning( sidebarY );
            };
        };
    };
    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_updateSidebar( sidebarY, sidebarHeight, mainColY, mainColHeight, viewportHeight, focusedElementY || '-' );
    };

    if( SidebarFixer_transformProp && css ) css += ';-webkit-overflow-scrolling:touch;';
    p_DOM_setCssText( SidebarFixer_elmWrap, css );

    SidebarFixer_sidebarY = sidebarY;

    return isMultiColumn && !mainInViewPort && !nocancelWheel;
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
        if( SidebarFixer_FOCUS_FOLLOWED_BY_SCROLL ){
            // Chrome 77, 表示ボックス外の要素へのfocusの際に表示ボックスが拡大する．この際は、scroll位置の再取得をする．
            SidebarFixer_skipScroll = [ y, h ];
            if( SidebarFixer_dummyScrollTimerID ){
                p_clearTimer( SidebarFixer_dummyScrollTimerID );
            };
            SidebarFixer_dummyScrollTimerID = p_setTimer( SidebarFixer_onscroll ); // scroll が起きない場合がある!
        } else {
            SidebarFixer_fix( SidebarFixer_lastScrollY, 0, y, h );
            SidebarFixer_skipScroll = true;
            SidebarFixer_setScrollY( SidebarFixer_lastScrollY );
        };
        if( DEFINE_WEB_DOC_BASE__DEBUG ){
            SidebarFixer_updateElementFocused( y, h );
        };
    };
};

function SidebarFixer_setScrollY( scrollY ){
    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        SidebarFixer_showEvent( 'scrollTo' );
    };
    window.scrollTo( SidebarFixer_getFinite( window.pageXOffset, window.scrollX, SidebarFixer_elmRoot.scrollLeft, p_body.scrollLeft ), scrollY );
};

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
                ( SidebarFixer_FOCUS_FOLLOWED_BY_SCROLL ? 'focus=>scroll' : '?' ) + ' | ' +
                ( p_cssTransformName ? 'transform' + ( SidebarFixer_use3D ? '3D' : '' ) : ( SidebarFixer_positionFixed ? 'pos:fixed' : 'pos:absolute' ) )
            );

            var elmContainer = p_DOM_insertElement( elmTestRoot, 'div' );
            
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
            p_DOM_setCssText( SidebarFixer_elmFocused, 'position:absolute;left:0;top:0;width:54px;background:#66c' );

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
function SidebarFixer_updateSidebar( sidebarY, sidebarHeight, mainColY, mainColHeight, viewportHeight, focusedElementY ){
    if( SidebarFixer_elmSidebar ){
        p_DOM_setStyle( SidebarFixer_elmSidebar, 'top', ( ( sidebarY + mainColY ) / 10 | 0 ) + 'px' );
        p_DOM_setStyle( SidebarFixer_elmSidebar, 'height', ( sidebarHeight / 10 | 0 ) + 'px' );

        p_DOM_setStyle( SidebarFixer_elmViewport, 'height', ( viewportHeight / 10 | 0 ) + 'px' );

        p_DOM_setStyle( SidebarFixer_elmDocument, 'height', ( p_body.scrollHeight / 10 | 0 ) + 'px' );

        SidebarFixer_elmDisplayValues.textContent = 'y:' + mainColY + '/' + sidebarY + ', h:' + mainColHeight + '/' + sidebarHeight + ' fy:' + focusedElementY;
    };
};
function SidebarFixer_updateElementFocused( y, h ){
    if( SidebarFixer_elmFocused ){
        p_DOM_setStyle( SidebarFixer_elmFocused, 'top', ( y / 10 | 0 ) + 'px' );
        p_DOM_setStyle( SidebarFixer_elmFocused, 'height', ( h / 10 | 0 ) + 'px' );
    };
};