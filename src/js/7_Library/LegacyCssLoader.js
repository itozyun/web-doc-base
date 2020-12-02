/* Replace modern.css to legacy.css for Opera 9.27-, Firefox 3.0.x- */
if( g_Presto < 9.5 || g_Gecko && !g_FirefoxGte35 ){
    g_listenLoadEvent(
        function( e ){
            "use strict";

            var styles = DOM_getElementsByTagName( 'style' ),
                i = 0, style, css;

            for( ; i < styles.length; ++i ){
                style = styles[ i ];
                css = style.textContent || style.innerHTML || style.text || '';
                if( css.match( g_cssName ) ){
                    style.textContent = style.innerHTML = style.text = '@import "' + g_assetUrl + g_cssName + '"';
                    break;
                };
            };
        }
    );
};