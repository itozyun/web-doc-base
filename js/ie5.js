/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
if( ua[ 'IEHost' ] && ua[ 'Trident' ] < 5.5 ){
    g_loadEventCallbacks[ g_loadEventCallbacks.length ] = function(){
        var link = DOM_createElement( 'link' );

        DOM_appendChild( g_head, link );
        DOM_setAttribute( link, 'href', g_assetUrl + ( g_isMobile ? '/m_' : '/' ) + 'ie5win.css' );
        DOM_setAttribute( link, 'rel' , 'stylesheet' );
        DOM_setAttribute( link, 'type', 'text/css' );
    };
};