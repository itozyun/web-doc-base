/** ===========================================================================
 * export to packageGlobal
 */
/* 1. */ p_DOM_getParentNode      = DOM_getParentNode;
/* 2. */ p_DOM_getChildNodes      = DOM_getChildNodes;
/* 3. */ p_DOM_getChildren        = DOM_getChildren;
/* 4. */ p_DOM_getFirstChild      = DOM_getFirstChild;
/* 5. */ p_DOM_getLastChild       = DOM_getLastChild;
/* 6. */ p_DOM_getPreviousSibling = DOM_getPreviousSibling;
/* 7. */ p_DOM_getNextSibling     = DOM_getNextSibling;
 
/** ===========================================================================
 * private
 */

/** 1.
 * @param {!Node} elm
 * @return {Element|null}
 */
function DOM_getParentNode( elm ){
    return /** @type {Element|null} */ (m_isIE4DOM ? elm.parentElement : elm.parentNode); // TODO IE~7 は null でなく documentFragment を返す?
};

/** 2.
 * @param {!Element} elm
 * @return {!Array.<!Node>} // TODO NodeList or DOM_getChildNodeArray
 */
function DOM_getChildNodes( elm ){
    var childNodes = m_isIE4DOM ? elm.children : elm.childNodes,
        result     = [],
        i          = childNodes.length;

    while( i ){
        result[ --i ] = childNodes[ i ];
    };
    return result;
};

/** 3.
 * @param {!Element} elm
 * @return {!Array.<!Element>} // TODO HTMLCollection or DOM_getChildElementArray
 */
function DOM_getChildren( elm ){
    // Opera 7.11 で children の列挙に失敗する! 7.03 では発生せず. 2021/10/21
    //   https://t.co/nxPB0wJRJt
    // Gecko <1.9.1, children 居ない
    var elemList = !( 7.03 < p_Presto && p_Presto < 7.2 ) &&
                   elm.children,
        nodeList = elemList ? elemList : elm.childNodes,
        result   = [],
        i        = nodeList.length,
        j        = -1,
        node;

    while( i ){
        node = nodeList[ --i ];
        if( m_isIE4DOM ){
            if( node.nodeType !== 3 ){
                result[ ++j ] = node;
            };
        } else {
            if( elemList || node.nodeType === 1 ){
                result[ ++j ] = node;
            };
        };
    };
    return result;
};

/** 4.
 * @param {!Element} elm
 * @return {Node|null}
 */
function DOM_getFirstChild( elm ){
    if( m_isIE4DOM ){
        return elm.children.length ? elm.children[ 0 ] : null;
    };
    return elm.firstChild;
};

/** 5.
 * @param {!Element} elm
 * @return {Node|null}
 */
function DOM_getLastChild( elm ){
    if( m_isIE4DOM ){
        var children = elm.children;

        return children.length ? children[ children.length - 1 ] : null;
    };
    return elm.lastChild;
};

/** 6.
 * @param {!Node} elm
 * @return {Node|null}
 */
function DOM_getPreviousSibling( elm ){
    if( m_isIE4DOM ){
        var parentChildNodes = DOM_getChildNodes( /** @type {!Element} */ (DOM_getParentNode( elm )) );

        return parentChildNodes[ parentChildNodes.indexOf( elm ) - 1 ];
    };
    return elm.previousSibling;
};

/** 7.
 * @param {!Node} elm
 * @return {Node|null}
 */
function DOM_getNextSibling( elm ){
    if( m_isIE4DOM ){
        var parentChildNodes = DOM_getChildNodes( /** @type {!Element} */ (DOM_getParentNode( elm )) );

        return parentChildNodes[ parentChildNodes.indexOf( elm ) + 1 ];
    };
    return elm.nextSibling;
};