/** ===========================================================================
 * export to packageGlobal
 */
p_DOM_insertElement        = DOM_insertElement;
p_DOM_insertElementBefore  = DOM_insertElementBefore;
p_DOM_insertElementAfter   = DOM_insertElementAfter;
p_DOM_insertTextNode       = DOM_insertTextNode;
p_DOM_insertTextNodeBefore = DOM_insertTextNodeBefore;
p_DOM_insertTextNodeAfter  = DOM_insertTextNodeAfter;
p_DOM_remove               = DOM_remove;
p_DOM_empty                = DOM_empty;
p_DOM_contains             = DOM_contains;
p_DOM_getInnerHTML         = DOM_getInnerHTML;

/** ===========================================================================
 * private
 */
/** @type {boolean} */
var DOM_nonStandardElementCreation   = p_Trident < 9;
/** @type {boolean} */
var DOM_hasMemoryLeakInOrderOfAppend = p_Trident < 9;

    /**
     * @param {number} insertPosition
     * @param {Node} targetNode
     * @param {string} tag
     * @param {Object=} attrs
     * @param {string|number=} textContent
     * @param {boolean=} isSVG
     * @return {!Element}
     */
    function DOM_createElement( insertPosition, targetNode, tag, attrs, textContent, isSVG ){
        var elm, position, childNodes, nodeIndex,
            name, value, elmStyle, styleName;
    
        if( m_isIE4DOM ){
            position = insertPosition === 0 ? 'beforebegin' : // 0:insertBefore, 1:insertAfter, 2:appendChild
                       insertPosition === 1 ? 'afterend'    :
                                              'beforeend';
            childNodes = p_DOM_getChildNodes( insertPosition < 2 ? p_DOM_getParentNode( targetNode ) : targetNode );
            nodeIndex  = insertPosition < 2 ? childNodes.indexOf( targetNode ) + insertPosition : childNodes.length;
            targetNode.insertAdjacentHTML( position, m_toHTMLString( tag, attrs, textContent ) );
            return p_DOM_getChildNodes( targetNode )[ nodeIndex ];
        } else if( DOM_nonStandardElementCreation ){
            elm = document.createElement( m_toHTMLString( tag, attrs ) );
        } else {
            elm = isSVG ? document.createElementNS( 'http://www.w3.org/2000/svg', tag ) : document.createElement( tag );
        };
    
        if( attrs && !DOM_nonStandardElementCreation ){
            for( name in attrs ){
                value = attrs[ name ];
                if( value || value === 0 ){
                    switch( name ){
                        case 'class' :
                        case 'className' :
                            p_DOM_setClassName( elm, value );
                            break;
                        case 'style' :
                            elmStyle = elm.style;
                            for( styleName in value ){
                                elmStyle[ styleName ] = value[ styleName ];
                            };
                            break;
                        default :
                            p_DOM_setAttribute( elm, name, value );
                            break;
                    };
                };
            };
        };

        if( !DOM_hasMemoryLeakInOrderOfAppend ){
            textContent != null && DOM_insertTextNode( elm, textContent );
        };
        return elm;
    };

/** 1.
 * @param {Node} targetNode
 * @param {string} tag
 * @param {Object=} attrs
 * @param {string|number=} textContent
 * @param {boolean=} isSVG
 * @return {!Element}
 */
function DOM_insertElement( targetNode, tag, attrs, textContent, isSVG ){
    // https://web.archive.org/web/20110527084958/http://msdn.microsoft.com:80/ja-jp/library/bb250448(v=VS.85).aspx
    // DOM 挿入順序リーク
    var elm = DOM_createElement( 2, targetNode, tag, attrs, textContent, isSVG );

    if( !m_isIE4DOM ){
        targetNode.appendChild( elm );

        if( DOM_hasMemoryLeakInOrderOfAppend ){
            textContent != null && DOM_insertTextNode( elm, textContent );
        };
    };
    return elm;
};

/** 2.
 * @param {Node} targetNode
 * @param {string} tag
 * @param {Object=} attrs
 * @param {string|number=} textContent
 * @param {boolean=} isSVG
 * @return {!Element}
 */
function DOM_insertElementBefore( targetNode, tag, attrs, textContent, isSVG ){
    var elm = DOM_createElement( 0, targetNode, tag, attrs, textContent, isSVG );

    if( !m_isIE4DOM ){
        DOM_getParentNode( targetNode ).insertBefore( elm, targetNode );

        if( DOM_hasMemoryLeakInOrderOfAppend ){
            textContent != null && DOM_insertTextNode( elm, textContent );
        };
    };
    return elm;
};

/** 3.
 * @param {Node} targetNode
 * @param {string} tag
 * @param {Object=} attrs
 * @param {string|number=} textContent
 * @param {boolean=} isSVG
 * @return {!Element}
 */
function DOM_insertElementAfter( targetNode, tag, attrs, textContent, isSVG ){
    var elm = DOM_createElement( 1, targetNode, tag, attrs, textContent, isSVG ),
        nextSibling;

    if( !m_isIE4DOM ){
        if( nextSibling = targetNode.nextSibling ){
            p_DOM_getParentNode( nextSibling ).insertBefore( elm, nextSibling );
        } else {
            p_DOM_getParentNode( targetNode ).appendChild( elm );
        };
    
        if( DOM_hasMemoryLeakInOrderOfAppend ){
            textContent != null && DOM_insertTextNode( elm, textContent );
        };
    };
    return elm;
};

/** 5.
 * @param {Element} targetNode
 * @param {string|number} textContent
 * @return {Text|HTMLFontElement}
 */
function DOM_insertTextNode( targetNode, textContent ){
    var textNode;

    if( m_isIE4DOM ){
        return /** @type {HTMLFontElement} */ (DOM_createElement( 2, targetNode, 'font', undefined, textContent ));
    } else {
        textNode = document.createTextNode( '' + textContent );
        targetNode.appendChild( textNode );
        return textNode; 
    };
};

/** 6.
 * @param {Node} targetNode
 * @param {string|number} textContent
 * @return {Text|HTMLFontElement}
 */
function DOM_insertTextNodeBefore( targetNode, textContent ){
    var textNode;

    if( m_isIE4DOM ){
        return /** @type {HTMLFontElement} */ (DOM_createElement( 0, targetNode, 'font', undefined, textContent ));
    } else {
        textNode = document.createTextNode( '' + textContent );

        p_DOM_getParentNode( targetNode ).insertBefore( textNode, targetNode );
        return textNode; 
    };
};

/** 7.
 * @param {Node} targetNode
 * @param {string|number} textContent
 * @return {Text|HTMLFontElement}
 */
function DOM_insertTextNodeAfter( targetNode, textContent ){
    var textNode, nextSibling;

    if( m_isIE4DOM ){
        return /** @type {HTMLFontElement} */ (DOM_createElement( 1, targetNode, 'font', undefined, textContent ));
    } else {
        textNode    = document.createTextNode( '' + textContent ),
        nextSibling = targetNode.nextSibling;

        nextSibling ?
            p_DOM_getParentNode( targetNode ).insertBefore( textNode, nextSibling ) :
            p_DOM_getParentNode( targetNode ).appendChild( textNode );
        return textNode; 
    };
};

/** 8.
 * @param {Node} elm
 */
function DOM_remove( elm ){
    if( DEFINE_WEB_DOC_BASE__DEBUG && !p_DOM_getParentNode( elm ) ){
        Debug.log( '[DOM] p_DOM_remove(), No parentNode!' );
        return;
    };

    if( m_isIE4DOM ){
        elm.outerHTML = '';
    } else {
        p_DOM_getParentNode( elm ).removeChild( elm );
    };
};

/** 9.
 * @param {Element} elm
 */
function DOM_empty( elm ){
    elm.innerHTML = '';
};

/** 10.
 * @param {Element} parentNode
 * @param {Node} childNode
 * @return {boolean|undefined}
 */
function DOM_contains( parentNode, childNode ){
    if( parentNode.contains ){
        return parentNode.contains( childNode );
    };
    while( childNode && childNode !== p_html ){
        childNode = p_DOM_getParentNode( childNode );
        if( parentNode === childNode ){
            return true;
        };
    };
};

/** 11.
 * @param {Element} elm
 * @return {string}
 */
function DOM_getInnerHTML( elm ){
    if( m_isIE4DOM ){
        return elm.innerHTML.split( '<FONT>' ).join( '' ).split( '<\/FONT>' ).join( '' );
    };
    return elm.innerHTML;
};

// Text.setTextContent()