/** ===========================================================================
 * export to packageGlobal
 */
p_listenForcedColorsChange = function( callback ){
    if( Event_forcedColors_callbacks ){
        Event_forcedColors_callbacks.push( callback );
    };
};

/** ===========================================================================
 * private
 */

/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
/** @type {!Array.<!Function>|undefined} */
var Event_forcedColors_callbacks = [];
var Event_forcedColors_WORK_ONCE = p_Gecko < 60 || p_Goanna;
var Event_forcedColors_isActive,
    Event_forcedColors_isBlackOnWhite,
    Event_forcedColors_isWhiteOnBlack;
/** @type {Function|undefined} */
var Event_forcedColors_test;

/**
  * @type {Function|undefined} */
var Event_forcedColors_getState = function(){
    return p_forcedColorsState = !Event_forcedColors_isActive ? 0 :
          ( Event_forcedColors_isWhiteOnBlack  ? 2 :
          ( Event_forcedColors_isBlackOnWhite  ? 3 : 1 ) );
};

if( 89 <= p_Gecko || 89 <= p_Chromium || ( p_Windows && 79 <= p_ChromiumEdge ) ||
    m_matchMedia && (
        m_matchMedia( '(forced-colors:none)' ).matches || m_matchMedia( '(forced-colors:active)' ).matches
    )
){
    p_canuseNativeForcedColors = true;

    m_initMediaQueryList(
        '(forced-colors:active)',
        function( mediaQueryList ){
            Event_forcedColors_isActive = mediaQueryList.matches;
            m_lazyDispatchEvent( /** @type {!Array.<!Function>}  */ (Event_forcedColors_callbacks), Event_forcedColors_getState() );
            Debug.log( '(forced-colors:active):' + p_forcedColorsState );
        }
    );
} else if( 10 <= p_Trident || p_EdgeHTML || ( p_Windows && p_ChromiumEdge ) ){
    p_canuseNativeForcedColors = true;

    m_initMediaQueryList( '(-ms-high-contrast:black-on-white)',
        function( mediaQueryList ){
            Event_forcedColors_isActive = Event_forcedColors_isBlackOnWhite = mediaQueryList.matches;
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                m_lazyDispatchEvent( /** @type {!Array.<!Function>}  */ (Event_forcedColors_callbacks), p_forcedColorsState );
                Debug.log( '(-ms-high-contrast:black-on-white):' + p_forcedColorsState );
            };
        }
    );
    m_initMediaQueryList( '(-ms-high-contrast:white-on-black)',
        function( mediaQueryList ){
            Event_forcedColors_isActive = Event_forcedColors_isWhiteOnBlack = mediaQueryList.matches;
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                m_lazyDispatchEvent( /** @type {!Array.<!Function>}  */ (Event_forcedColors_callbacks), p_forcedColorsState );
                Debug.log( '(-ms-high-contrast:white-on-black):' + p_forcedColorsState );
            };
        }
    );
    m_initMediaQueryList( '(-ms-high-contrast:active)',
        function( mediaQueryList ){
            Event_forcedColors_isActive = mediaQueryList.matches;
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                m_lazyDispatchEvent( /** @type {!Array.<!Function>}  */ (Event_forcedColors_callbacks), p_forcedColorsState );
                Debug.log( '(-ms-high-contrast:active):' + p_forcedColorsState );
            };
        }
    );

    /**
     * IE, EdgeHTML
     *   IE10 以降で完全なサポート。
     * Firefox
     *   リンク色と訪問済みリンク色はブラウザ側で設定。
     *   Gecko 1.8.1+ : onload 時のコントラストモードを反映。1.8.0.5 では反映しない。https://twitter.com/itozyun/status/1505351173045637122
     *   Gecko ??+ : 途中から閲覧中のモード切替に対応(Gecko60 辺り?)
     *   Gecko 89+(81+) : (forced-colors) をサポート, 81 の時点でシステムカラーによる上書きに非対応
     * Goanna 4.3
     *   リンク色と訪問済みリンク色はブラウザ側で設定。
     *   onload 時のコントラストモードを反映。
     * Chromium Edge Canary v79.0.305.0
     *   閲覧中のモード切替に対応。-ms-high-contrast に対応、但し色の再設定は出来ない。
     *   https://mspoweruser.com/microsoft-brings-high-contrast-mode-to-chromium-based-edge/
     *   Currently, the High Contrast mode is hidden behind a flag ...
     */
} else if( p_Windows && ( p_Trident || p_Gecko && 0 <= ua.conpare( p_engineVersion, '1.8.1' ) || p_Goanna ) ){
    Event_forcedColors_test = function(){
        var defaultView = document.defaultView,
            computedStyle, color, bgColor;

        computedStyle = defaultView ?
            defaultView.getComputedStyle( /** @type {Element} */ (m_elmTest), null ) :
            m_elmTest.currentStyle;

        color   = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );
        bgColor = ( computedStyle && computedStyle.backgroundColor || '' ).split( ' ' ).join( '' ); 

        if( color ){
            Event_forcedColors_isActive = color !== '#123456' && color !== 'rgb(18,52,86)';
            Event_forcedColors_isBlackOnWhite = isBlack( color ) && isWhite( bgColor, true );
            Event_forcedColors_isWhiteOnBlack = isWhite( color ) && isBlack( bgColor, true );
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                Debug.log( '(forced-colors-fallback):' + p_forcedColorsState );
                m_lazyDispatchEvent( /** @type {!Array.<!Function>}  */ (Event_forcedColors_callbacks), p_forcedColorsState, Event_forcedColors_WORK_ONCE );
            };
        };
        /**
         * @param {string} color
         * @param {boolean=} isBackground
         * @return {boolean|undefined}
         */
        function isBlack( color, isBackground ){
            Debug.log( 'isBlack:' + color );
            return color === '#000000' || color === 'rgb(0,0,0)' || isBackground && color === 'transparent'; // transparent は Gecko 1.8.1.12
        };
        /**
         * @param {string} color 
         * @param {boolean=} isBackground 
         * @return {boolean|undefined}
         */
        function isWhite( color, isBackground ){
            Debug.log( 'isWhite:' + color );
            return color === '#ffffff' || color === 'rgb(255,255,255)' || isBackground && color === 'transparent';
        };
    };

    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( cssAvailability ){
                p_DOM_setStyle( m_elmTest, 'color', '#123456' );
                p_DOM_setStyle( m_elmTest, 'backgroundColor', '#123456' );
    
                if( Event_forcedColors_WORK_ONCE ){
                    Event_forcedColors_test();
                    Event_forcedColors_callbacks = undefined;
                } else if( Event_forcedColors_test() ){ // IE9- or Gecko60+
                    p_setLoopTimer( /** @type {Function} */ (Event_forcedColors_test) /* , 1000 */ );
                };
                Event_forcedColors_test = undefined;
                return true;
            };
        }
    );
} else {
    Event_forcedColors_callbacks = Event_forcedColors_getState = undefined;
};