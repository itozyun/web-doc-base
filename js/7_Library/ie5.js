/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
if( ua[ 'IEHost' ] && g_Trident < 5.5 ){
    g_Event_listenLoadEvent(
        function(){
            var link = DOM_createElement( 'link' );

            DOM_appendChild( g_head, link );
            DOM_setAttribute( link, 'href', ( g_assetUrl ? g_assetUrl + '/' : '' ) + ( g_isMobile ? g_MOBILE_CSS_PREFIX : '' ) + g_cssName );
            DOM_setAttribute( link, 'rel' , 'stylesheet' );
            DOM_setAttribute( link, 'type', 'text/css' );
        }
    );
};