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
p_DOM_contains             = DOM_contains;
p_DOM_getInnerHTML         = DOM_getInnerHTML;

/** ===========================================================================
 * private
 */
var 
    DOM_insert = 2;

/** 1.
 * @param {Node} targetNode
 * @param {string} tag
 * @param {Object|number=} attrs
 * @param {*=} textContent
 * @param {boolean=} isSVG
 */
function DOM_insertElement( targetNode, tag, attrs, textContent, isSVG ){
    // https://web.archive.org/web/20110527084958/http://msdn.microsoft.com:80/ja-jp/library/bb250448(v=VS.85).aspx
    // DOM 挿入順序リーク
    var nonStanderdCreation = p_Trident < 9,
        hasInsertOrderMemmoryLeaak = p_Trident < 9,
        isStyle = tag === 'style',
        elm, position, childNodes, nodeIndex, nextSibling,
        name, value, elmStyle, styleName;

    if( isStyle ){
        if( m_isIE4DOM ){

        } else if( p_WebKit ){
            elm = document.createElement( 'style' );
            elm.type = 'text\/css';
            // https://davidwalsh.name/add-rules-stylesheets
            //   WebKit hack :(
            elm.appendChild( document.createTextNode( '' ) );
            elm.innerHTML = textContent;
        } else {
            // http://d.hatena.ne.jp/miya2000/20070327/p0
            //   最初に style でないノードが無いと style が生成されない
            elm = document.createElement( 'div' );
            elm.innerHTML = 'a<style type="text\/css">' + textContent + '<\/style>';
            elm = elm.lastChild;
        };
    } else if( m_isIE4DOM ){
        position = DOM_insert === 0 ? 'beforebegin' : // 0:insertBefore or 1:insertAfter
                   DOM_insert === 1 ? 'afterend'    :
                                      'beforeend';
        childNodes = DOM_getChildNodes( DOM_insert < 2 ? DOM_getParentNode( targetNode ) : targetNode );
        nodeIndex  = DOM_insert < 2 ? childNodes.indexOf( targetNode ) + DOM_insert : childNodes.length;
        targetNode.insertAdjacentHTML( position, m_toHTMLString( tag, attrs, textContent ) );
        return DOM_getChildNodes( targetNode )[ nodeIndex ];
    } else if( nonStanderdCreation ){
        // alert( m_toHTMLString( tag, attrs ) )
        elm = document.createElement( m_toHTMLString( tag, attrs ) );
    } else {
        elm = isSVG ? document.createElementNS( 'http://www.w3.org/2000/svg', tag ) : document.createElement( tag );
    };

    if( attrs && !nonStanderdCreation ){
        for( name in attrs ){
            value = attrs[ name ];
            switch( name ){
                case 'class' :
                case 'className' :
                    DOM_setClassName( elm, value );
                    break;
                case 'style' :
                    elmStyle = elm.style;
                    for( styleName in value ){
                        elmStyle[ styleName ] = value[ styleName ];
                    };
                    break;
                default :
                    DOM_setAttribute( elm, name, value );
                    break;
            };
        };
    };
    if( !hasInsertOrderMemmoryLeaak && !isStyle ){
        DOM_insertTextNode( elm, textContent );
    };
    if( DOM_insert < 2 ){
        nextSibling = DOM_insert === 1 ? targetNode.nextSibling : targetNode;
        if( nextSibling ){
            DOM_getParentNode( nextSibling ).insertBefore( elm, nextSibling );
        } else {
            DOM_getParentNode( nextSibling ).appendChild( elm );
        };
        DOM_insert = 2;
    } else {
        targetNode.appendChild( elm );
    };
    if( hasInsertOrderMemmoryLeaak && !isStyle ){
        DOM_insertTextNode( elm, textContent );
    };

    return elm;
};

/** 2.
 * @param {Node} targetNode
 * @param {string} tag
 * @param {Object|number=} attrs
 * @param {string|number=} textContent
 * @param {boolean=} isSVG
 * @return {Element}
 */
function DOM_insertElementBefore( targetNode, tag, attrs, textContent, isSVG ){
    DOM_insert = 0;
    return DOM_insertElement( targetNode, tag, attrs, textContent, isSVG );
};

/** 3.
 * @param {Node} targetNode
 * @param {string} tag
 * @param {Object|number=} attrs
 * @param {string|number=} textContent
 * @param {boolean=} isSVG
 * @return {Element}
 */
function DOM_insertElementAfter( targetNode, tag, attrs, textContent, isSVG ){
    DOM_insert = 1;
    return DOM_insertElement( targetNode, tag, attrs, textContent, isSVG );
};

/** 4.
 * @param {Element} targetNode
 * @param {*} textContent
 * @return {Node|null}
 */
function DOM_insertTextNode( targetNode, textContent ){
    if( m_isIE4DOM ){
        return DOM_insertElement( targetNode, 'font', 0, textContent );
    };
    if( textContent != null && textContent !== '' ){
        var textNode = document.createTextNode( '' + textContent );

        targetNode.appendChild( textNode );
        return textNode; 
    };
    return null;
};

/** 5.
 * @param {Node} targetNode
 * @param {*} textContent
 * @return {Node|null}
 */
function DOM_insertTextNodeBefore( targetNode, textContent ){
    if( m_isIE4DOM ){
        DOM_insert = 0;
        return DOM_insertElement( targetNode, 'font', 0, textContent );
    };
    if( textContent != null && textContent !== '' ){
        var textNode = document.createTextNode( '' + textContent );

        DOM_getParentNode( targetNode ).insertBefore( textNode, targetNode );
        return textNode; 
    };
    return null;
};

/** 6.
 * @param {Node} targetNode
 * @param {*} textContent
 * @return {Node|null}
 */
function DOM_insertTextNodeAfter( targetNode, textContent ){
    if( m_isIE4DOM ){
        DOM_insert = 1;
        return DOM_insertElement( targetNode, 'font', 0, textContent );
    };
    if( textContent != null && textContent !== '' ){
        var textNode = document.createTextNode( '' + textContent ),
            nextSibling = targetNode.nextSibling;

        nextSibling ?
            DOM_getParentNode( targetNode ).insertBefore( textNode, nextSibling ) :
            DOM_getParentNode( targetNode ).appendChild( textNode );
        return textNode; 
    };
    return null;
};

/** 7.
 * @param {Node} elm
 */
 function DOM_remove( elm ){
    if( WEB_DOC_BASE_DEFINE_DEBUG && !DOM_getParentNode( elm ) ){
        return;
    };

    if( m_isIE4DOM ){
        elm.outerHTML = '';
    } else {
        DOM_getParentNode( elm ).removeChild( elm );
    };
};

/** 8.
 * @param {Element} parentNode
 * @param {Node} childNode
 */
function DOM_contains( parentNode, childNode ){
    if( parentNode.contains ){
        return parentNode.contains( childNode );
    };
    while( childNode && childNode !== p_html ){
        childNode = DOM_getParentNode( childNode );
        if( parentNode === childNode ){
            return true;
        };
    };
};

/** 9.
 * @param {Element} elm
 */
function DOM_getInnerHTML( elm ){
    if( m_isIE4DOM ){
        return elm.innerHTML.split( '<FONT>' ).join( '' ).split( '</FONT>' ).join( '' );
    };
    return elm.innerHTML;
};