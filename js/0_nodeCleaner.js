"use strict";
g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
function( removeCommentNodes, removalMetaTagNames ){
    g_elmMain = DOM_getElementById( g_ELEMENT_MAIN_ID );

    removeCommentNodes  = !( g_Presto < 8 || g_Trident < 5 || g_Tasman );
    removalMetaTagNames = [ 'og:', 'twitter:', 'fb:' ];
    walkTree( g_html );

    function walkTree( parent ){
        var kids = DOM_getChildNodes( parent ),
            i    = kids.length,
            kid, type, tag, sheet, rules, name, j;

        while( kid = kids[ --i ] ){
            type = kid.nodeType;
            if( type === 8 ){
                removeCommentNodes && DOM_remove( kid );
            } else if( type === 1 ){
                tag = DOM_getTagName( kid );

                switch( tag ){
                    case 'STYLE' :
                        ( sheet = CSSOM_getStyleSheet( kid ) ) &&
                            ( rules = CSSOM_getCssRules( sheet ) ) &&
                                !rules.length && DOM_remove( kid );
                        break;
                    case 'META' :
                        name = DOM_getAttribute( kid, 'name' ) || DOM_getAttribute( kid, 'property' ) || '';
                        for( j = removalMetaTagNames.length; j; ){
                            if( name.indexOf( removalMetaTagNames[ --j ] ) === 0 ){
                                DOM_remove( kid );
                                break;
                            };
                        };
                        break;
                    case 'NOSCRIPT' : //'NOFRAMES' //'NOEMBED' //'NOLAYER'
                        if( DOM_getAttribute( kid, 'skip-cleanup' ) ) break;
                    case '!' :
                    case 'SCRIPT' :
                        DOM_remove( kid );
                        break;
                    default :
                        DOM_getChildNodes( kid ).length && walkTree( kid );                        
                };
            };
        };
    };
};