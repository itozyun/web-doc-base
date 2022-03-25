p_loadEventCallbacks.splice( 0, 0, // onload の一番最初に追加
    function(){
        p_elmMain = p_DOM_getElementById( DEFINE_WEB_DOC_BASE__MAIN_COLUMN_ID );

        var removeCommentNodes  = !( p_Presto < 8 || p_Trident < 5 || p_Tasman || p_Gecko < 0.9 ),
            hasDynamicStyleBug  = p_Trident < 7,
            removalMetaTagNames = [ 'og:', 'twitter:', 'fb:' ],
            nodesToGoUnderHead  = [],
            nodesBeRemoved      = [],
            unknownTags         = {};

        walkTree( p_html );

        function walkTree( parent ){
            var kids = p_DOM_getChildNodes( parent ),
                i    = kids.length,
                kid, type, tag, name, j;

            while( i ){
                kid  = kids[ --i ]; // childNodes[ -1 ] は Firefox 3.5 でエラー
                type = kid.nodeType;
                if( type === 8 ){
                    removeCommentNodes && nodesBeRemoved.push( kid );
                } else if( type === 1 ){
                    tag = p_DOM_getTagName( kid );
                    if( tag.charAt( 0 ) === '/' ){
                        tag = tag.substr( 1 );
                        unknownTags[ tag ] = true; // 頭に / の付くタグを控える
                    };

                    switch( tag ){
                        case 'STYLE' :
                            if( 7.2 <= p_Presto && p_Presto < 9 ) break; /* Opera 7.20~8 は <style> の移動が反映されない */
                        case 'LINK' :
                            !m_isIE4DOM && !hasDynamicStyleBug && /* IE6 で link を移動すると style の適用がガタガタ */
                                !p_DOM_contains( p_head, kid ) && nodesToGoUnderHead.push( kid );
                            break;
                        case 'META' :
                            name = p_DOM_getAttribute( kid, 'name' ) || p_DOM_getAttribute( kid, 'property' );
                            for( j = removalMetaTagNames.length; j; ){
                                if( name.indexOf( removalMetaTagNames[ --j ] ) === 0 ){
                                    nodesBeRemoved.push( kid );
                                    break;
                                };
                            };
                            break;
                        case 'SCRIPT' :
                            if( p_DOM_hasAttribute( kid, 'async' ) ) break;
                        case 'NOSCRIPT' : //'NOFRAMES' //'NOEMBED' //'NOLAYER'
                            if( p_DOM_hasAttribute( kid, 'skip-cleanup' ) ) break;
                        case '!' :
                            nodesBeRemoved.push( kid );
                            break;
                        case 'SOURCE' :
                            if( !window.HTMLSourceElement ){
                                nodesBeRemoved.push( kid );
                            };
                            break;
                        default :
                            if( unknownTags[ tag ] ){
                                nodesBeRemoved.push( kid );
                            } else {
                                p_DOM_getChildNodes( kid ).length && walkTree( kid );
                            };
                    };
                };
            };
            while( nodesToGoUnderHead[ 0 ] ){
                p_head.appendChild( nodesToGoUnderHead.pop() );
            };
            while( nodesBeRemoved[ 0 ] ){
                p_DOM_remove( nodesBeRemoved.pop() );
            };
        };
    }
);