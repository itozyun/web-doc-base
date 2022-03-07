/** ===========================================================================
 * export to packageGlobal
 */
p_listenHighContrustModeChange = function( callback ){
    if( Event_highContrastMode_callbacks ){
        Event_highContrastMode_callbacks.push( callback );
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
var Event_highContrastMode_callbacks = [];
var Event_highContrastMode_WORK_ONCE = p_Gecko < 60 || p_Goanna;
var Event_highContrastMode_timerID,
    Event_highContrastMode_isHighContrust,
    Event_highContrastMode_isBlackOnWhite,
    Event_highContrastMode_isWhiteOnBlack;
/** @type {Function|undefined} */
var Event_highContrastMode_test;

/**
  * @nosideeffect
  * @type {Function|undefined} */
var Event_highContrastMode_getState = function(){
    return p_highContrastModeState = !Event_highContrastMode_isHighContrust ? 0 :
          ( Event_highContrastMode_isWhiteOnBlack  ? 2 :
          ( Event_highContrastMode_isBlackOnWhite  ? 3 : 1 ) );
};

/** @type {Function|undefined} */
var Event_highContrastMode_init = function( media, listener ){
    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( cssAvailability ){
                var mediaQueryList = m_matchMedia( media );

                listener( mediaQueryList );
                mediaQueryList.addListener( listener );
                return true;
            };
        }
    );
};

if( 89 <= p_Gecko || 89 <= p_Chromium || ( p_Windows && 79 <= p_ChromiumEdge ) ||
    m_matchMedia && (
        m_matchMedia( '(forced-colors:none)' ).matches || m_matchMedia( '(forced-colors:active)' ).matches
    )
){
    Event_highContrastMode_init(
        '(forced-colors:active)',
        function( mediaQueryList ){
            Event_highContrastMode_isHighContrust = mediaQueryList.matches;
            m_lazyDispatchEvent( Event_highContrastMode_callbacks, Event_highContrastMode_getState() );
            Debug.log( '(forced-colors:active):' + p_highContrastModeState );
        }
    );
} else if( 10 <= p_Trident || p_EdgeHTML || ( p_Windows && p_ChromiumEdge ) ){
    Event_highContrastMode_init( '(-ms-high-contrast:black-on-white)',
        function( mediaQueryList ){
            Event_highContrastMode_isHighContrust = Event_highContrastMode_isBlackOnWhite = mediaQueryList.matches;
            if( p_highContrastModeState !== Event_highContrastMode_getState() ){
                m_lazyDispatchEvent( Event_highContrastMode_callbacks, p_highContrastModeState );
                Debug.log( '(-ms-high-contrast:black-on-white):' + p_highContrastModeState );
            };
        }
    );
    Event_highContrastMode_init( '(-ms-high-contrast:white-on-black)',
        function( mediaQueryList ){
            Event_highContrastMode_isHighContrust = Event_highContrastMode_isWhiteOnBlack = mediaQueryList.matches;
            if( p_highContrastModeState !== Event_highContrastMode_getState() ){
                m_lazyDispatchEvent( Event_highContrastMode_callbacks, p_highContrastModeState );
                Debug.log( '(-ms-high-contrast:white-on-black):' + p_highContrastModeState );
            };
        }
    );
    Event_highContrastMode_init( '(-ms-high-contrast:active)',
        function( mediaQueryList ){
            Event_highContrastMode_isHighContrust = mediaQueryList.matches;
            if( p_highContrastModeState !== Event_highContrastMode_getState() ){
                m_lazyDispatchEvent( Event_highContrastMode_callbacks, p_highContrastModeState );
                Debug.log( '(-ms-high-contrast:active):' + p_highContrastModeState );
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
    Event_highContrastMode_test = function(){
        var defaultView = document.defaultView,
            computedStyle, color, bgColor;

        computedStyle = defaultView ?
            defaultView.getComputedStyle( /** @type {Element} */ (m_elmTest), null ) :
            m_elmTest.currentStyle;

        color   = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );
        bgColor = ( computedStyle && computedStyle.backgroundColor || '' ).split( ' ' ).join( '' ); 

        if( color ){
            Event_highContrastMode_isHighContrust = color !== '#123456' && color !== 'rgb(18,52,86)';
            Event_highContrastMode_isBlackOnWhite = isBlack( color ) && isWhite( bgColor );
            Event_highContrastMode_isWhiteOnBlack = isWhite( color ) && isBlack( bgColor );
            if( p_highContrastModeState !== Event_highContrastMode_getState() ){
                Debug.log( '(forced-colors-fallback):' + p_highContrastModeState );
                m_lazyDispatchEvent( Event_highContrastMode_callbacks, p_highContrastModeState );
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
    
                if( Event_highContrastMode_WORK_ONCE ){
                    Event_highContrastMode_test();
                    Event_highContrastMode_callbacks.length = 0;
                } else if( Event_highContrastMode_test() ){ // IE9- or Gecko60+
                    Event_highContrastMode_timerID = p_setLoopTimer( /** @type {Function} */ (Event_highContrastMode_test) /* , 1000 */ );
                };
                Event_highContrastMode_test = undefined;
                return true;
            };
        }
    );
} else {
    Event_highContrastMode_callbacks = Event_highContrastMode_getState = undefined;
};
Event_highContrastMode_init = undefined;