/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
var Event_highContrustMode_callbacks = [],
    Event_highContrustMode_timerID,
    Event_highContrustMode_isHC = false;

/**
 * @type {?function()|null}
 */
var Event_highContrustMode_test = function(){
    var defaultView = document.defaultView,
        computedStyle, color, isHighContrasrt;

    computedStyle = defaultView ?
        defaultView.getComputedStyle( Event_elmTest, null ) :
        Event_elmTest.currentStyle;

    color = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );

    if( color ){
        isHighContrasrt = color !== '#123456' && color !== 'rgb(18,52,86)';
        if( Event_highContrustMode_isHC !== isHighContrasrt ){
            Event_dispatch( Event_highContrustMode_callbacks, Event_highContrustMode_isHC = isHighContrasrt );
        };
        return true;
    };
};

if( 10 <= g_Trident || g_EdgeHTML ){
    Event_matchMedia( '(-ms-high-contrast:active)' ).addListener(
        function( mediaQueryList ){
            Event_dispatch( Event_highContrustMode_callbacks, mediaQueryList.matches );
        }
    );
    Event_highContrustMode_test = null;
} else if( g_Trident < 10 || ( ( ua[ 'Win32' ] || ua[ 'Win64' ] ) && ( 44 <= g_Gecko || g_Goanna ) ) ){ // Goanna 4.3 で文書の onload 時のみハイコントラストモードを反映
    g_Event_listenLoadEvent(
        function (){
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