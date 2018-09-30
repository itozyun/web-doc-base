/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
if( ua[ 'IEHost' ] && ua[ 'IE' ] < 5.5 ){
    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function(){
        var scripts = getElementsByTagName('script'),
            script  = scripts[ scripts.length - 1 ],
            src     = script.src.split( '/' ),
            link    = document.createElement( 'link' ),
            mob;

        --src.length;
        mob = 0 <= ( '&' + location.search.substr( 1 ) + '&' ).indexOf( '&m=1&' ) ? '/m_' : '/';

        g_head.appendChild( link );
        link.href = src.join( '/' ) + mob + 'ie5win.css';
        link.rel  = 'stylesheet';
        link.type = 'text/css';
    };
};