"use strict";
g_Event_loadEventCallbacks.splice( 0, 0, // onload の一番最初に追加
    function(){
        g_elmMain = DOM_getElementById( g_ELEMENT_MAIN_ID );

        var removeCommentNodes  = !( g_Presto < 8 || g_Trident < 5 || g_Tasman ),
            removalMetaTagNames = [ 'og:', 'twitter:', 'fb:' ],
            moveToHead          = [];

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
                            // https://twitter.com/pbrocky/status/1219213180531929088
                            // 開発ツールを出していると Firefox 72.0.1 で CSSOM のアクセスで InvalidAccessError が出る
                            if( g_jsGte15 ?
                                ( sheet = CSSOM_getStyleSheet( kid ) ) && ( rules = CSSOM_getCssRules( sheet ) ) && !rules[0]
                                :
                                ( new Function( 'k,a,b,s,r', 'try{s=a(k),r=b(s);return !r[0]}catch(e){}' ) )( kid )
                            ){
                                DOM_remove( kid, CSSOM_getStyleSheet, CSSOM_getCssRules );
                                break;
                            };
                        case 'LINK' :
                            g_w3cDOM && !g_head.contains( kid ) && moveToHead.push( kid );
                            break;
                        case 'META' :
                            name = DOM_getAttribute( kid, 'name' ) || DOM_getAttribute( kid, 'property' );
                            for( j = removalMetaTagNames.length; j; ){
                                if( name.indexOf( removalMetaTagNames[ --j ] ) === 0 ){
                                    DOM_remove( kid );
                                    break;
                                };
                            };
                            break;
                        case 'SCRIPT' :
                            if( DOM_hasAttribute( kid, 'async' ) ) break;
                        case 'NOSCRIPT' : //'NOFRAMES' //'NOEMBED' //'NOLAYER'
                            if( DOM_hasAttribute( kid, 'skip-cleanup' ) ) break;
                        case '!' :
                            DOM_remove( kid );
                            break;
                        default :
                            DOM_getChildNodes( kid ).length && walkTree( kid );                        
                    };
                };
            };
            while( moveToHead[ 0 ] ){
                DOM_appendChild( g_head, moveToHead.pop() );
            };
        };
    }
);