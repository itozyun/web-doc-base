"use strict";
if( !( ua[ 'Opera' ] < 8 || ua[ 'IE' ] < 5 || ua[ 'MacIE' ] ) ){
    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function(){
        walkTree( g_html );

        function walkTree( parent ){
            var kids = parent.childNodes,
                i    = kids.length, kid, _kids;

            while( kid = kids[ --i ] ){
                if( kid.nodeType === 8 ){
                    parent.removeChild( kid );
                } else if( kid.nodeType === 1 ){
                    _kids = kid.childNodes;
                    _kids.length && walkTree( kid );
                };
            };
        };
    };
};