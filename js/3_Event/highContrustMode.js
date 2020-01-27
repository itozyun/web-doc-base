/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
var Event_highContrustMode_callbacks = [],
    Event_highContrustMode_timerID,
    Event_highContrustMode_isHighContrust,
    Event_highContrustMode_isBlackOnWhite,
    Event_highContrustMode_isWhiteOnBlack;

/**
 * @type {?function()|null}
 */
var Event_highContrustMode_test = function(){
    var defaultView = document.defaultView,
        computedStyle, color, bgColor,
        highContrustModeState = g_Event_highContrustModeState;

    computedStyle = defaultView ?
        defaultView.getComputedStyle( Event_elmTest, null ) :
        Event_elmTest.currentStyle;

    color   = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );
    bgColor = ( computedStyle && computedStyle.backgroundColor || '' ).split( ' ' ).join( '' ); 

    if( color ){
        Event_highContrustMode_isHighContrust = color !== '#123456' && color !== 'rgb(18,52,86)';
        Event_highContrustMode_isBlackOnWhite = isBlack( color ) && isWhite( bgColor );
        Event_highContrustMode_isWhiteOnBlack = isWhite( color ) && isBlack( bgColor );
        if( highContrustModeState !== Event_highContrustMode_getState() ){
            Event_dispatch( Event_highContrustMode_callbacks, g_Event_highContrustModeState );
        };
        return true;
    };

    function isBlack( color ){
        return color === '#000000' && color !== 'rgb(0,0,0)';
    };
    function isWhite( color ){
        return color === '#ffffff' && color !== 'rgb(255,255,255)';
    };
};

function Event_highContrustMode_getState(){
    return g_Event_highContrustModeState = !Event_highContrustMode_isHighContrust ? 0 :
          ( Event_highContrustMode_isWhiteOnBlack  ? 2 :
          ( Event_highContrustMode_isBlackOnWhite  ? 3 : 1) );
};

if( 10 <= g_Trident || g_EdgeHTML ){
    Event_matchMedia( '(-ms-high-contrast:black-on-white)' ).addListener(
        function( mediaQueryList ){
            Event_highContrustMode_isHighContrust = Event_highContrustMode_isBlackOnWhite = mediaQueryList.matches;
            Event_dispatch( Event_highContrustMode_callbacks, Event_highContrustMode_getState() );
        }
    );
    Event_matchMedia( '(-ms-high-contrast:white-on-black)' ).addListener(
        function( mediaQueryList ){
            Event_highContrustMode_isHighContrust = Event_highContrustMode_isWhiteOnBlack = mediaQueryList.matches;
            Event_dispatch( Event_highContrustMode_callbacks, Event_highContrustMode_getState() );
        }
    );
    Event_matchMedia( '(-ms-high-contrast:active)' ).addListener(
        function( mediaQueryList ){
            Event_highContrustMode_isHighContrust = mediaQueryList.matches;
            Event_dispatch( Event_highContrustMode_callbacks, Event_highContrustMode_getState() );
        }
    );
    Event_highContrustMode_test = null;
} else if( g_Trident < 10 || ( ( ua[ 'Win32' ] || ua[ 'Win64' ] ) && ( 44 <= g_Gecko || g_Goanna ) ) ){ // Goanna 4.3 で文書の onload 時のみハイコントラストモードを反映
    g_Event_listenLoadEvent(
        function (){
            DOM_setStyle( Event_elmTest, 'color', '#123456' );
            DOM_setStyle( Event_elmTest, 'backgroundColor', '#123456' );
            // https://news.softpedia.com/news/this-is-the-new-dark-mode-in-mozilla-firefox-70-527932.shtml
            // This Is the New Dark Mode in Mozilla Firefox 70
            if( g_Gecko < 60 || g_Goanna ){
                Event_highContrustMode_test();
            } else if( Event_highContrustMode_test() ){ // IE9- or Gecko70+
                Event_highContrustMode_timerID = g_LoopTimer_set( Event_highContrustMode_test, 1000 );
            };
            Event_highContrustMode_test = null;
        }
    );
} else {
    Event_highContrustMode_test = null;
};

g_Event_listenHighContrustModeChange = function( callback ){
    Event_highContrustMode_callbacks.push( callback );
};