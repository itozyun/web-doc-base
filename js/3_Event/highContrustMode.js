/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
var Event_highContrustMode_callbacks = [],
    Event_highContrustMode_elmDiv,
    Event_highContrustMode_timerID,
    Event_highContrustMode_isHC = false;

/**
 * @type {?function()|null}
 */
var Event_highContrustMode_test = function(){
    var defaultView = document.defaultView,
        computedStyle, color, isHighContrasrt;

    computedStyle = defaultView ?
        defaultView.getComputedStyle( Event_highContrustMode_elmDiv, null ) :
        Event_highContrustMode_elmDiv.currentStyle;

    color = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );

    if( color ){
        // TODO Firefox67 から drak モードをメディアクエリで検出可能に。 && ()
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
            //Create a test div
            Event_highContrustMode_elmDiv = DOM_createElement( 'div' );
            DOM_appendChild( g_body, Event_highContrustMode_elmDiv );
            //Set its color style to something unusual
            DOM_setCssText( Event_highContrustMode_elmDiv, 'color:#123456;position:absolute;top:0;left:0;width:0;height:0;overflow:hidden' );

            // https://news.softpedia.com/news/this-is-the-new-dark-mode-in-mozilla-firefox-70-527932.shtml
            // This Is the New Dark Mode in Mozilla Firefox 70
            if( g_Gecko < 60 || g_Goanna ){
                Event_highContrustMode_test();
            } else if( Event_highContrustMode_test() ){ // IE9- or Gecko70+
                Event_highContrustMode_timerID = setInterval( Event_highContrustMode_test, 1000 );
            };
            Event_highContrustMode_test = null;
        }
    );
    g_Event_listenUnloadEvent(
        function(){
            Event_highContrustMode_timerID && clearInterval( Event_highContrustMode_timerID );
        }
    );
} else {
    Event_highContrustMode_test = null;
};

g_Event_listenHighContrustModeChange = function( callback ){
    Event_highContrustMode_callbacks.push( callback );
};