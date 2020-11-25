
g_listenLoadEvent(
    function( e ){
        "use strict";

        var elmTargets = DOM_getElementsByTagName( 'noscript', g_elmMain ),
            canUseSVG  = window.SVGSVGElement,
            elmContainer,
            elmNoscript, i = elmTargets.length, graph;

        for( ; elmNoscript = elmTargets[ --i ]; ){
            graph = DOM_getAttribute( elmNoscript, 'graph' );
            if( graph ){
                switch( graph ){
                    case 'bable2D' :
                        canUseSVG ? Graph_bable2D( elmNoscript ) : fallback();
                        break;
                    case 'bar' :
                        canUseSVG ? Graph_bar( elmNoscript ) : fallback();
                        break;
                };
            };
        };

        function fallback(){
            elmContainer = elmContainer || DOM_createElement( 'div' );
            DOM_setHTML( elmContainer, elmNoscript.innerHTML );
            while( DOM_getFirstChild( elmContainer ) ){
                DOM_insertBefore( DOM_getFirstChild( elmContainer ), elmNoscript );
            };
            DOM_remove( elmNoscript );
        };
    }
);