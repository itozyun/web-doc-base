"use strict";
g_loadEventCallbacks.splice( 0, 0, // onload の一番最初に追加
    function(){
        g_elmMain = DOM_getElementById( WEB_DOC_BASE_DEFINE_MAIN_COLUMN_ID );

        var removeCommentNodes  = !( g_Presto < 8 || g_Trident < 5 || g_Tasman || g_Gecko < 0.9 ),
            hasDynamicStyleBug  = g_Trident < 7,
            removalMetaTagNames = [ 'og:', 'twitter:', 'fb:' ],
            moveToHead          = [];

        walkTree( g_html );

        function walkTree( parent ){
            var kids = DOM_getChildNodes( parent ),
                i    = kids.length,
                kid, type, tag, sheet, rules, name, j;

            while( i ){
                kid  = kids[ --i ]; // childNodes[ -1 ] は Firefox 3.5 でエラー
                type = kid.nodeType;
                if( type === 8 ){
                    removeCommentNodes && DOM_remove( kid );
                } else if( type === 1 ){
                    tag = DOM_getTagName( kid );

                    switch( tag.replace( '/', '' ) ){
                        case 'STYLE' :
                            // https://twitter.com/pbrocky/status/1219213180531929088
                            // 開発ツールを出していると Firefox 72.0.1 で CSSOM のアクセスで InvalidAccessError が出る
                            if( g_jsGte15 ?
                                ( sheet = CSSOM_getStyleSheet( kid ) ) && ( rules = CSSOM_getCssRules( sheet ) ) && ( !rules[0] || !rules[0].cssText )
                                :
                                ( new Function( '$,a,b', 'try{$=a($),$=b($),$=$[0];return !$||!$.cssText}catch(e){}' ) )( kid, CSSOM_getStyleSheet, CSSOM_getCssRules )
                            ){
                                !hasDynamicStyleBug && DOM_remove( kid ); /* IE5.5 で style を移動すると適用されない */
                                break;
                            };
                            if( 8 <= g_Presto && g_Presto < 9 ) break;/* Opera 8 は <style> の移動が反映されない */
                        case 'LINK' :
                            g_w3cDOM && !hasDynamicStyleBug && /* IE6 で link を移動すると style の適用がガタガタ */
                                !DOM_contains( g_head, kid ) && moveToHead.push( kid );
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
                        case 'HEADER' :
                        case 'MAIN' :
                        case 'NAV' :
                        case 'ARTICLE' :
                        case 'SECTION' :
                        case 'ASIDE' :
                        case 'FIGURE' :
                        case 'FIGCAPTION' :
                        case 'FOOTER' :
                            if( g_Trident < 9 ){
                                DOM_remove( kid );
                            };
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