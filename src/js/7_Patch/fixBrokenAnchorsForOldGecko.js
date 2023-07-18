/**
 * アーリー Gecko で a タグ周りのタグ構造が乱れるのを DHTML で修復する
 *   1. RichLink で空の <a href> と ブロック要素の下に <a href> ができる
 *   2. スキーマ(schema.org)を含む <a href> の直前に、空の <a href> ができる、これは不可視の為、フォーカスが消える問題を起こす
 */
if( p_GeckoLt09 ){
    if( COMMON_RICHLINK__CLASSNAME_SEPARATOR ){
        p_loadEventCallbacks.splice( 1, 0, // noadCleaner の次に追加
            // 1.
            function(){
                var richLinkList = p_DOM_getElementsByClassName( p_elmMain, COMMON_RICHLINK__CLASSNAME_SEPARATOR ),
                    richLink, kids, root, kid, anchorList, anchor, anchorKids;

                while( richLink = richLinkList.shift() ){
                    kids = p_DOM_getChildNodes( richLink );
                    while( root = kids.shift() ){ // A.
                        if( p_DOM_getTagName( root ) === 'A' && !root.innerHTML ){
                            Debug.log( '■ Broken Anchor ' + root.parentNode.innerHTML );
                            while( kid = kids.shift() ){
                                if( kid.nodeType === 1 ){
                                    if( p_DOM_getTagName( kid ) === 'A' ){
                                        // alert( root.innerHTML );
                                        break; // => A.
                                    };
                                    anchorList = p_DOM_getElementsByTagName( kid, 'A' );
                                    while( anchor = anchorList.shift() ){
                                        // alert( anchor.innerHTML );
                                        anchorKids = p_DOM_getChildNodes( anchor );
                                        while( anchorKids.length ){
                                            anchor.parentNode.insertBefore( anchorKids.shift(), anchor );
                                        };
                                        p_DOM_remove( anchor );
                                    };
                                };
                                root.appendChild( kid );
                            };
                        };
                    };
                };
            }
        );
    };
    p_loadEventCallbacks.splice( COMMON_RICHLINK__CLASSNAME_SEPARATOR ? 2 : 1, 0,
        // 2.
        function(){
            var anchorList = p_DOM_getElementsByTagNameFromDocument( 'A' ),
                anchor, originalAnchor;

            while( anchor = anchorList.shift() ){
                if( p_DOM_getTagName( anchor ) === 'A' && !anchor.innerHTML ){
                    originalAnchor = anchor.nextSibling && anchor.nextSibling.firstChild;
                    if( originalAnchor ){
                        if( originalAnchor.href === anchor.href ){
                            Debug.log( '▲ Broken Anchor ' + originalAnchor.innerHTML );
                            p_DOM_remove( anchor );
                        };
                    };
                };
            };
        }
    );
};