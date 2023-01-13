/** ===========================================================================
 * export to packageGlobal
 */
p_html = /** @type {!HTMLHtmlElement} */ (DOM_getElementsByTagNameFromDocument( 'html' )[ 0 ]);
p_head = /** @type {!HTMLHeadElement} */ (DOM_getElementsByTagNameFromDocument( 'head' )[ 0 ]);

/*  1. */ p_DOM_getElementById                     = DOM_getElementById;
/*  2. */ p_DOM_getElementsByTagNameFromDocument   = DOM_getElementsByTagNameFromDocument;
/*  3. */ p_DOM_getElementsByClassNameFromDocument = DOM_getElementsByClassNameFromDocument;
/*  4. */ p_DOM_getElementsByTagName               = DOM_getElementsByTagName;
/*  5. */ p_DOM_getElementsByClassName             = DOM_getElementsByClassName;
 
/** ===========================================================================
 * private
 */

/** 1.
 * @param {string} id
 * @return {Element|null}
 */
function DOM_getElementById( id ){
    return window[ id ] || document[ id ] ||
           document.getElementById( id ); // for ~NN9
};

/** 2.
 * @param {string} tag
 * @return {!Array.<!Element>} // TODO HTMLCollection
 */
function DOM_getElementsByTagNameFromDocument( tag ){
    return DOM_getElementsByTagName( document, tag );
};

/** 3.
 * @param {string} className
 * @return {!Array.<!Element>} // TODO HTMLCollection
 */
function DOM_getElementsByClassNameFromDocument( className ){
    return DOM_getElementsByClassName( document, className );
};

/** 4.
 * @param {!Element|!Document} rootElementOrDocument
 * @param {string} tag
 * @return {!Array.<!Element>} // TODO HTMLCollection
 */
function DOM_getElementsByTagName( rootElementOrDocument, tag ){
    var root = rootElementOrDocument,
        all  = tag === '*',
        elms = m_isIE4DOM
                   ? all
                       ? root.all
                       : root.all.tags( tag.toUpperCase() )
                   : p_Trident < 6 && all
                       ? root.all
                       : root.getElementsByTagName( tag ),
        ret = [],
        i = 0, l = elms.length;

    for( ; i < l; ++i ){
        ret[ i ] = elms[ i ];
    };
    return ret;
};

/** 5.
 * @param {!Element|!Document} rootElementOrDocument
 * @param {string} className
 * @return {!Array.<!Element>} // TODO HTMLCollection
 */
function DOM_getElementsByClassName( rootElementOrDocument, className ){
    var root = rootElementOrDocument,
        ret  = [], hasMethod, elms, i = 0, l, elm, j = -1;

    if( !( p_Trident < 9 ) && root.getElementsByClassName ){
        hasMethod = true;
        elms = root.getElementsByClassName( className );
    } else {
        elms = !( p_Trident < 6 ) ? root.getElementsByTagName( '*' ) : root.all;
    };

    for( l = elms.length; i < l; ++i ){
        elm = elms[ i ];
        if( hasMethod || ( m_isIE4DOM || elm.nodeType === 1 ) && DOM_hasClassName( elm, className ) ){
            ret[ ++j ] = elm;
        };
    };
    return ret;
};