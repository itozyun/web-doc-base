p_loadEventCallbacks.splice( 0, 0, // onload の一番最初に追加
    function(){
        p_elmMain = p_DOM_getElementById( WEB_DOC_BASE_DEFINE_MAIN_COLUMN_ID );

        var removeCommentNodes  = !( p_Presto < 8 || p_Trident < 5 || p_Tasman || p_Gecko < 0.9 ),
            hasDynamicStyleBug  = p_Trident < 7,
            removalMetaTagNames = [ 'og:', 'twitter:', 'fb:' ],
            moveToHead          = [];

        walkTree( p_html );

        function walkTree( parent ){
            var kids = p_DOM_getChildNodes( parent ),
                i    = kids.length,
                kid, type, tag, sheet, rules, name, j;

            while( i ){
                kid  = kids[ --i ]; // childNodes[ -1 ] は Firefox 3.5 でエラー
                type = kid.nodeType;
                if( type === 8 ){
                    removeCommentNodes && p_DOM_remove( kid );
                } else if( type === 1 ){
                    tag = p_DOM_getTagName( kid );

                    switch( tag.replace( '/', '' ) ){
                        case 'STYLE' :
                            // https://twitter.com/pbrocky/status/1219213180531929088
                            // 開発ツールを出していると Firefox 72.0.1 で CSSOM のアクセスで InvalidAccessError が出る
                            if( p_jsGte15 ?
                                ( sheet = p_CSSOM_getStyleSheet( kid ) ) && ( rules = p_CSSOM_getCssRules( sheet ) ) && ( !rules[0] || !rules[0].cssText )
                                :
                                ( new Function( '$,a,b', 'try{$=a($),$=b($),$=$[0];return !$||!$.cssText}catch(e){}' ) )( kid, p_CSSOM_getStyleSheet, p_CSSOM_getCssRules )
                            ){
                                !hasDynamicStyleBug && p_DOM_remove( kid ); /* IE5.5 で style を移動すると適用されない */
                                break;
                            };
                            if( 8 <= p_Presto && p_Presto < 9 ) break;/* Opera 8 は <style> の移動が反映されない */
                        case 'LINK' :
                            !m_isIE4DOM && !hasDynamicStyleBug && /* IE6 で link を移動すると style の適用がガタガタ */
                                !p_DOM_contains( p_head, kid ) && moveToHead.push( kid );
                            break;
                        case 'META' :
                            name = p_DOM_getAttribute( kid, 'name' ) || p_DOM_getAttribute( kid, 'property' );
                            for( j = removalMetaTagNames.length; j; ){
                                if( name.indexOf( removalMetaTagNames[ --j ] ) === 0 ){
                                    p_DOM_remove( kid );
                                    break;
                                };
                            };
                            break;
                        case 'SCRIPT' :
                            if( p_DOM_hasAttribute( kid, 'async' ) ) break;
                        case 'NOSCRIPT' : //'NOFRAMES' //'NOEMBED' //'NOLAYER'
                            if( p_DOM_hasAttribute( kid, 'skip-cleanup' ) ) break;
                        case '!' :
                            p_DOM_remove( kid );
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
                            if( p_Trident < 9 ){
                                p_DOM_remove( kid );
                            };
                            break;
                        default :
                            p_DOM_getChildNodes( kid ).length && walkTree( kid );                        
                    };
                };
            };
            while( moveToHead[ 0 ] ){
                p_head.appendChild( moveToHead.pop() );
            };
        };
    }
);