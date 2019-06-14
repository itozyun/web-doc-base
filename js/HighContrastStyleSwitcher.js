/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
var HighContrastStyleSwitcher_elmDiv,
    HighContrastStyleSwitcher_elmStyle,
    HighContrastStyleSwitcher_timerID,
    HighContrastStyleSwitcher_isHC;

    if( ( ua[ 'Trident' ] || ua[ 'TridentMobile' ] ) < 10 || ( ua[ 'Win32' ] && 44 <= ua[ 'Gecko' ] ) ){
    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function (){
        //Create a test div
        HighContrastStyleSwitcher_elmDiv = DOM_createElement( 'div' );
        DOM_appendChild( g_body, HighContrastStyleSwitcher_elmDiv );
        //Set its color style to something unusual
        DOM_setCssText( HighContrastStyleSwitcher_elmDiv, 'color:#123456;position:absolute;top:0;left:0;width:0;height:0;overflow:hidden' );

        if( !ua[ 'Trident' ] && !ua[ 'TridentMobile' ] ){
            HighContrastStyleSwitcher_test();
        } else if( HighContrastStyleSwitcher_test() ){ // IE
            HighContrastStyleSwitcher_timerID = setInterval( HighContrastStyleSwitcher_test, 1000 );
        };
        HighContrastStyleSwitcher_test = null;
    };
    g_unloadEventCallbacks[ g_unloadEventCallbacks.length ] = function(){
        HighContrastStyleSwitcher_timerID && clearInterval( HighContrastStyleSwitcher_timerID );
    };
} else {
    HighContrastStyleSwitcher_test = HighContrastStyleSwitcher_init = null;
};

function HighContrastStyleSwitcher_test(){
    var defaultView = document.defaultView,
        computedStyle, color, isHighContrasrt;

    computedStyle = defaultView ?
        defaultView.getComputedStyle( HighContrastStyleSwitcher_elmDiv, null ) :
        HighContrastStyleSwitcher_elmDiv.currentStyle;

    color = ( computedStyle && computedStyle.color || '' ).split( ' ' ).join( '' );

    if( color ){
        isHighContrasrt = color !== '#123456' && color !== 'rgb(18,52,86)';
        if( isHighContrasrt ){
            // https://github.com/anselmh/object-fit/issues/7
            // Document CSSOM CORS: "SecurityError: The operation is insecure." with ext. CSS

            // use new Function for try~catch  IE5-
            HighContrastStyleSwitcher_init && HighContrastStyleSwitcher_init();
            if( !HighContrastStyleSwitcher_elmStyle ){
                clearInterval( HighContrastStyleSwitcher_timerID );
                HighContrastStyleSwitcher_timerID = 0;
                return;
            };
        };
        if( HighContrastStyleSwitcher_elmStyle && ( HighContrastStyleSwitcher_isHC !== isHighContrasrt ) ){
            HighContrastStyleSwitcher_isHC = isHighContrasrt;
            isHighContrasrt ? DOM_appendChild( g_body, HighContrastStyleSwitcher_elmStyle ) : DOM_remove( HighContrastStyleSwitcher_elmStyle );
        };
        return true;
    };
};

function HighContrastStyleSwitcher_init(){
    var elms, i, l, elm, rules, j, m;

    HighContrastStyleSwitcher_init = null;
    
    for( elms = DOM_getElementsByTagName( 'LINK' ), i = 0, l = elms.length; i < l; ++i ){
        elm = elms[ i ];
        if( DOM_getAttribute( elm, 'type' ) === 'text/css' ){
            if( createLink( DOM_getAttribute( elm, 'href' ) ) ) return;
        };
    };

    for( elms = DOM_getElementsByTagName( 'STYLE' ), i = 0, l = elms.length; i < l; ++i ){
        rules = CSSOM_getCssRules( CSSOM_getStyleSheet( elms[ i ] ) );
        for( j = 0, m = rules.length; j < m; ++j ){
            if( createLink( rules[ j ].href || '' ) ) break;
        };
    };

    function createLink( href ){
        var elm, file;

        if( 0 <= href.indexOf( g_assetUrl ) ){
            elm = DOM_createElement( 'link' );
            DOM_appendChild( g_body, elm ); // TODO 既存styleの後
            DOM_setAttribute( elm, 'type', 'text/css' );
            DOM_setAttribute( elm, 'rel' , 'stylesheet' );
            file = href.split( '/' ).pop();
            DOM_setAttribute( elm, 'href', g_assetUrl + '/hc/' + file );
            HighContrastStyleSwitcher_elmStyle = elm;
            return true;
        };
    };
}; 