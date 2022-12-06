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
var DOM_hasMemoryLeakInOrderOfAppend = DOM_nonStandardElementCreation;

    /**
     * @param {number} insertPosition
     * @param {!Node} targetNode
     * @param {string} tag
     * @param {!Object=} attrs
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
            elm = p_DOM_getChildNodes( /** @type {!Element} */ (targetNode) )[ nodeIndex ];
            if( textContent != null ){
                if( tag === m_FAKE_TEXTNODE_TAGNAME ){
                    elm.nodeType = 3;
                } else {
                    elm.children[ 0 ].nodeType = 3;
                };
            };
        } else if( DOM_nonStandardElementCreation ){
            elm = document.createElement( m_toHTMLString( tag, attrs ) );
        } else {
            elm = isSVG ? document.createElementNS( 'http://www.w3.org/2000/svg', tag ) : document.createElement( tag );

            if( attrs ){
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
                if( p_Presto && ( tag === 'a' || tag === 'A' ) && attrs.href && !attrs[ 'tag-index' ] && !attrs.tagIndex ){
                    p_DOM_setAttribute( elm, 'tagIndex', '-0' ); // tagIndex が明示されていない場合、focus 可能にする
                };
            };

            if( !DOM_hasMemoryLeakInOrderOfAppend ){
                textContent != null && DOM_insertTextNode( elm, textContent );
            };
        };
        return elm;
    };

/** 1.
 * @param {!Element} targetNode
 * @param {string} tag
 * @param {!Object=} attrs
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
 * @param {!Node} targetNode
 * @param {string} tag
 * @param {!Object=} attrs
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
 * @param {!Node} targetNode
 * @param {string} tag
 * @param {!Object=} attrs
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
 * @param {!Element} targetNode
 * @param {string|number} textContent
 * @return {!Text|!HTMLFontElement}
 */
function DOM_insertTextNode( targetNode, textContent ){
    var textNode;

    if( m_isIE4DOM ){
        return /** @type {!HTMLFontElement} */ (DOM_createElement( 2, targetNode, m_FAKE_TEXTNODE_TAGNAME, undefined, textContent ));
    } else {
        textNode = document.createTextNode( '' + textContent );
        targetNode.appendChild( textNode );
        return textNode;
    };
};

/** 6.
 * @param {!Node} targetNode
 * @param {string|number} textContent
 * @return {!Text|!HTMLFontElement}
 */
function DOM_insertTextNodeBefore( targetNode, textContent ){
    var textNode;

    if( m_isIE4DOM ){
        return /** @type {!HTMLFontElement} */ (DOM_createElement( 0, targetNode, m_FAKE_TEXTNODE_TAGNAME, undefined, textContent ));
    } else {
        textNode = document.createTextNode( '' + textContent );

        p_DOM_getParentNode( targetNode ).insertBefore( textNode, targetNode );
        return textNode;
    };
};

/** 7.
 * @param {!Node} targetNode
 * @param {string|number} textContent
 * @return {!Text|!HTMLFontElement}
 */
function DOM_insertTextNodeAfter( targetNode, textContent ){
    var textNode, nextSibling;

    if( m_isIE4DOM ){
        return /** @type {!HTMLFontElement} */ (DOM_createElement( 1, targetNode, m_FAKE_TEXTNODE_TAGNAME, undefined, textContent ));
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
 * @param {!Node} elm
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
 * @param {!Element} elm
 */
function DOM_empty( elm ){
    elm.innerHTML = '';
};

/** 10.
 * @param {!Element} parentNode
 * @param {!Node} childNode
 * @return {boolean|undefined}
 */
function DOM_contains( parentNode, childNode ){
    if( parentNode.contains ){
        return parentNode.contains( childNode );
    };
    while( childNode && childNode !== p_html ){
        childNode = /** @type {!Node} */ (p_DOM_getParentNode( childNode ));
        if( parentNode === childNode ){
            return true;
        };
    };
};

/** 11.
 * @param {!Element} elm
 * @return {string}
 */
function DOM_getInnerHTML( elm ){
    if( m_isIE4DOM ){
        return elm.innerHTML.split( '<FONT>' ).join( '' ).split( '<\/FONT>' ).join( '' );
    };
    return elm.innerHTML.split( '\r\n' ).join( '\n' ).split( '\r' ).join( '\n' );

    var html;
    // https://github.com/googlearchive/code-prettify/blob/e006587b4a893f0281e9dc9a53001c7ed584d4e7/tests/test_base.js#L229
    if( p_WebKit <= 419.3 ){ // Safari 2-
        var out = [];
        normalizedHtml( elm, out, -1, true );
        html = out.join( '' );

        // https://github.com/googlearchive/code-prettify/blob/e006587b4a893f0281e9dc9a53001c7ed584d4e7/tests/test_base.js#L189
        // more normalization to work around problems with non-ascii chars in
        // regexps in Safari
        html = html.split( '\xa0' ).join( '&nbsp;' );
    } else {
        html = elm.innerHTML;
    };
    return html.split( '\r\n' ).join( '\n' ).split( '\r' ).join( '\n' );

  /**
    * Escapes HTML special characters to HTML.
    *
    * @param {string} str the HTML to escape
    * @return {string} output escaped HTML
    */
    function textToHtml( str ){
        return str
            .replace( '&', '&amp;' )
            .replace( '<', '&lt;' )
            .replace( '>', '&gt;' );
    };
  /**
    * but escapes double quotes to be attribute safe.
    *
    * @param {string} str the HTML to escape
    * @return {string} output escaped HTML
    */
    function attribToHtml( str ){
        return textToHtml( str ).replace( '"', '&quot;' );
    };
  /**
    * Traverse node and manually build `innerHTML`.
    *
    * @param {!Node} node DOM node
    * @param {!Array.<string>} out HTML content
    * @param {number} i
    * @param {boolean} skip
    * @return {number}
    */
    function normalizedHtml( node, out, i, skip ){
        switch( node.nodeType ){
            case 1 :  // ELEMENT_NODE
                if( !skip ){
                    // start-tag
                    var name = node.tagName;
                    out[ ++i ] = '<' + name;
                    // attributes : Opera 8+, IE5.5+
                    var attrs = node.attributes;
                    var n = attrs.length;
                    if( n ){
                        for( var j = 0; j < n; ++j ){
                            var attr = attrs[ j ];
                            // specified: <tag atn> vs. <tag atn="atv">
                            if( !attr.specified ){ continue; };
                            out[ ++i ] = ' ' + attr.name + '="' + attribToHtml( attr.value ) + '"';
                        };
                    };
                    out[ ++i ] = '>';
                };
                // children
                for( var child = node.firstChild; child; child = child.nextSibling ){
                    i = normalizedHtml( child, out, i, false );
                };
                if( !skip ){
                    // end-tag
                    if( node.firstChild || 'BR,HR,LINK,IMG,META'.indexOf( name.toUpperCase() ) === -1 ){
                        out[ ++i ] = '<\/' + name + '>';
                    };
                };
                break;
            case 3 :  // TEXT_NODE
            case 4 :  // CDATA_SECTION_NODE
                out[ ++i ] = textToHtml( node.nodeValue );
                break;
        };
        return i;
    };
};

// Text.setTextContent()
// https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/
// .innerHTML += '...' -> insertAdjacentHTML