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
 * @param {Node} elm
 * @return {Element}
 */
 function DOM_getParentNode( elm ){
    return m_isIE4DOM ? elm.parentElement : elm.parentNode;
};

/** 2.
 * @param {Node} elm
 * @return {Array.<Node>}
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
 * @param {Element} elm
 * @return {Array.<Node>}
 */
 function DOM_getChildren( elm ){
    var hasChildren = elm.children,
        childNodes  = hasChildren ? hasChildren : elm.childNodes,
        result      = [],
        i           = childNodes.length,
        j           = -1,
        node;

    while( i ){
        node = childNodes[ --i ];
        if( hasChildren || node.nodeType === 1 ){
            if( !m_isIE4DOM || node.tagName !== 'FONT' ){
                result[ ++j ] = node;
            };
        };
    };
    return result;
};

/** 4.
 * @param {Element} elm
 * @return {Node|null}
 */
 function DOM_getFirstChild( elm ){
    if( m_isIE4DOM ){
        return elm.children[ 0 ];
    };
    return elm.firstChild;
};

/** 5.
 * @param {Element} elm
 * @return {Node|null}
 */
function DOM_getLastChild( elm ){
    if( m_isIE4DOM ){
        return elm.children[ elm.children.length - 1 ];
    };
    return elm.lastChild;
};

/** 6.
 * @param {Node} elm
 * @return {Node|null}
 */
function DOM_getPreviousSibling( elm ){
    if( m_isIE4DOM ){
        var parentChildNodes = DOM_getChildNodes( DOM_getParentNode( elm ) );

        return parentChildNodes[ parentChildNodes.indexOf( elm ) - 1 ];
    };
    return elm.previousSibling;
};

/** 7.
 * @param {Node} elm
 * @return {Node|null}
 */
function DOM_getNextSibling( elm ){
    if( m_isIE4DOM ){
        var parentChildNodes = DOM_getChildNodes( DOM_getParentNode( elm ) );

        return parentChildNodes[ parentChildNodes.indexOf( elm ) + 1 ];
    };
    return elm.nextSibling;
};