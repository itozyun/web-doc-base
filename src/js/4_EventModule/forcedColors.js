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
/** @type {Array<Function>|undefiend} */
var Event_forcedColors_callbacks = [];
var Event_forcedColors_WORK_ONCE = p_Gecko < 60 || p_Goanna;
var Event_forcedColors_timerID,
    Event_forcedColors_isActive,
    Event_forcedColors_isBlackOnWhite,
    Event_forcedColors_isWhiteOnBlack;
/** @type {Function|undefined} */
var Event_forcedColors_test;

/**
  * @nosideeffect
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
            m_lazyDispatchEvent( Event_forcedColors_callbacks, Event_forcedColors_getState() );
            Debug.log( '(forced-colors:active):' + p_forcedColorsState );
        }
    );
} else if( 10 <= p_Trident || p_EdgeHTML || ( p_Windows && p_ChromiumEdge ) ){
    p_canuseNativeForcedColors = true;

    m_initMediaQueryList( '(-ms-high-contrast:black-on-white)',
        function( mediaQueryList ){
            Event_forcedColors_isActive = Event_forcedColors_isBlackOnWhite = mediaQueryList.matches;
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                m_lazyDispatchEvent( Event_forcedColors_callbacks, p_forcedColorsState );
                Debug.log( '(-ms-high-contrast:black-on-white):' + p_forcedColorsState );
            };
        }
    );
    m_initMediaQueryList( '(-ms-high-contrast:white-on-black)',
        function( mediaQueryList ){
            Event_forcedColors_isActive = Event_forcedColors_isWhiteOnBlack = mediaQueryList.matches;
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                m_lazyDispatchEvent( Event_forcedColors_callbacks, p_forcedColorsState );
                Debug.log( '(-ms-high-contrast:white-on-black):' + p_forcedColorsState );
            };
        }
    );
    m_initMediaQueryList( '(-ms-high-contrast:active)',
        function( mediaQueryList ){
            Event_forcedColors_isActive = mediaQueryList.matches;
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                m_lazyDispatchEvent( Event_forcedColors_callbacks, p_forcedColorsState );
                Debug.log( '(-ms-high-contrast:active):' + p_forcedColorsState );
            };
        }
    );

    /**
     * IE, EdgeHTML
     *   IE10 以降で完全なサポート。
     * Firefox
     *   OS 側の色設定は無視。初期は onload 時のコントラストモードを反映。途中から閲覧中のモード切替に対応(Gecko60 辺り?)
     * Goanna 4.3
     *   OS 側の色設定は無視。onload 時のコントラストモードを反映。
     * Chromium Edge Canary v79.0.305.0
     *   閲覧中のモード切替に対応。-ms-high-contrast に対応、但し色の再設定は出来ない。７
     *   https://mspoweruser.com/microsoft-brings-high-contrast-mode-to-chromium-based-edge/
     *   Currently, the High Contrast mode is hidden behind a flag ...
     */
} else if( p_Trident < 10 || ( p_Windows && ( 44 <= p_Gecko || p_Goanna ) ) ){
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
            Event_forcedColors_isBlackOnWhite = isBlack( color ) && isWhite( bgColor );
            Event_forcedColors_isWhiteOnBlack = isWhite( color ) && isBlack( bgColor );
            if( p_forcedColorsState !== Event_forcedColors_getState() ){
                Debug.log( '(forced-colors-fallback):' + p_forcedColorsState );
                m_lazyDispatchEvent( Event_forcedColors_callbacks, p_forcedColorsState );
            };
            return true;
        };

        function isBlack( color ){
            return color === '#000000' || color === 'rgb(0,0,0)';
        };
        function isWhite( color ){
            return color === '#ffffff' || color === 'rgb(255,255,255)';
        };
    };

    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( cssAvailability ){
                p_DOM_setStyle( m_elmTest, 'color', '#123456' );
                p_DOM_setStyle( m_elmTest, 'backgroundColor', '#123456' );
    
                if( Event_forcedColors_WORK_ONCE ){
                    Event_forcedColors_test();
                    Event_forcedColors_callbacks.length = 0;
                } else if( Event_forcedColors_test() ){ // IE9- or Gecko60+
                    Event_forcedColors_timerID = p_setLoopTimer( /** @type {Function} */ (Event_forcedColors_test) /* , 1000 */ );
                };
                Event_forcedColors_test = undefined;
                return true;
            };
        }
    );
} else {
    Event_forcedColors_callbacks = Event_forcedColors_getState = undefined;
};