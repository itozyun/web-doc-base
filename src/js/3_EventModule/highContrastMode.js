/** ===========================================================================
 * export to packageGlobal
 */
g_listenHighContrustModeChange = function( callback ){
    Event_highContrastMode_callbacks.push( callback );
};

/** ===========================================================================
 * private
 */

/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
var Event_highContrastMode_callbacks = [],
    Event_highContrastMode_timerID,
    Event_highContrastMode_isHighContrust,
    Event_highContrastMode_isBlackOnWhite,
    Event_highContrastMode_isWhiteOnBlack,
    Event_highContrastMode_test;

function Event_highContrastMode_getState(){
    return g_highContrastModeState = !Event_highContrastMode_isHighContrust ? 0 :
          ( Event_highContrastMode_isWhiteOnBlack  ? 2 :
          ( Event_highContrastMode_isBlackOnWhite  ? 3 : 1) );
};

if( 10 <= g_Trident || g_EdgeHTML || ( g_Windows && g_ChromiumEdge ) ){
    Event_matchMedia( '(-ms-high-contrast:black-on-white)' ).addListener(
        function( mediaQueryList ){
            Event_highContrastMode_isHighContrust = Event_highContrastMode_isBlackOnWhite = mediaQueryList.matches;
            Event_lazyDispatch( Event_highContrastMode_callbacks, Event_highContrastMode_getState() );
        }
    );
    Event_matchMedia( '(-ms-high-contrast:white-on-black)' ).addListener(
        function( mediaQueryList ){
            Event_highContrastMode_isHighContrust = Event_highContrastMode_isWhiteOnBlack = mediaQueryList.matches;
            Event_lazyDispatch( Event_highContrastMode_callbacks, Event_highContrastMode_getState() );
        }
    );
    Event_matchMedia( '(-ms-high-contrast:active)' ).addListener(
        function( mediaQueryList ){
            Event_highContrastMode_isHighContrust = mediaQueryList.matches;
            Event_lazyDispatch( Event_highContrastMode_callbacks, Event_highContrastMode_getState() );
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
} else if( g_Trident < 10 || ( g_Windows && ( 44 <= g_Gecko || g_Goanna ) ) ){
    Event_highContrastMode_test = function(){
        var defaultView = document.defaultView,
            computedStyle, color, bgColor,
            highContrastModeState = g_highContrastModeState;

        computedStyle = defaultView ?
            defaultView.getComputedStyle( Event_elmTest, null ) :
            Event_elmTest.currentStyle;

        color   = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );
        bgColor = ( computedStyle && computedStyle.backgroundColor || '' ).split( ' ' ).join( '' ); 

        if( color ){
            Event_highContrastMode_isHighContrust = color !== '#123456' && color !== 'rgb(18,52,86)';
            Event_highContrastMode_isBlackOnWhite = isBlack( color ) && isWhite( bgColor );
            Event_highContrastMode_isWhiteOnBlack = isWhite( color ) && isBlack( bgColor );
            if( highContrastModeState !== Event_highContrastMode_getState() ){
                Event_lazyDispatch( Event_highContrastMode_callbacks, g_highContrastModeState );
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

    g_listenLoadEvent(
        function (){
            DOM_setStyle( Event_elmTest, 'color', '#123456' );
            DOM_setStyle( Event_elmTest, 'backgroundColor', '#123456' );

            if( g_Gecko < 60 || g_Goanna ){
                Event_highContrastMode_test();
            } else if( Event_highContrastMode_test() ){ // IE9- or Gecko60+
                Event_highContrastMode_timerID = g_setLoopTimer( Event_highContrastMode_test, 1000 );
            };
            Event_highContrastMode_test = null;
        }
    );
};