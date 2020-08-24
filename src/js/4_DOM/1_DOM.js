/** ===========================================================================
 * export to packageGlobal
 */

/** ===========================================================================
 * private
 */
g_html = DOM_getElementsByTagName( 'html' )[ 0 ];
g_head = DOM_getElementsByTagName( 'head' )[ 0 ];

function DOM_createElement( tagName ){
    return document.createElement( tagName );
};

function DOM_createElementNS( ns, tagName ){
    return document.createElementNS( ns, tagName );
};

/**
 * @param {string} tag
 * @param {HTMLDocument|HTMLElement|?=} opt_root MS DOM のメソッドを使う際は ? を追加。
 * @return {HTMLCollection}
 */
function DOM_getElementsByTagName( tag, opt_root ){
    opt_root = opt_root || document;

    return g_w3cDOM ? opt_root.getElementsByTagName( tag ) : opt_root.all.tags( tag.toUpperCase() );
};

function DOM_getElementsByClassName( elmRoot, className ){
    var elms, i = 0, l, elm, ret = [];

    if( g_w3cDOM && elmRoot.getElementsByClassName ){
        return elmRoot.getElementsByClassName( className );
    };

    elms = g_w3cDOM ? DOM_getElementsByTagName( '*', elmRoot ) : elmRoot.all;
    for( l = elms.length; i < l; ++i ){
        elm = elms[ i ];
        if( DOM_hasClassName( elm, className ) ){
            ret[ ret.length ] = elm;
        };
    };  
    return ret;
};

function DOM_getElementById( id ){
    return window[ id ] || document.all[ id ];
};

function DOM_getParentElement( elm ){
    return elm.parentElement || elm.parentNode;
};

function DOM_getFirstChild( elm ){
    return elm.firstChild;
};

function DOM_appendChild( parentElement, childElement ){
    return parentElement.appendChild( childElement );
};

function DOM_insertBefore( element, targetElement ){
    DOM_getParentElement( targetElement ).insertBefore( element, targetElement );
};

function DOM_remove( element ){
    DOM_getParentElement( element ).removeChild( element );
};

function DOM_getChildNodes( elm ){
    return elm.childNodes;
};

function DOM_getChildren( elm ){
    return elm.children;
};

function DOM_getHTML( elm ){
    return elm.innerHTML;
};

function DOM_setHTML( elm, html ){
    elm.innerHTML = html;
};

function DOM_getTagName( elm ){
    return elm.tagName.toUpperCase();
};

/*  ---
--------------------------------------------------------------------------------------*/
var DOM_insert;

function DOM_getAllElements(){
    var elms = document.all || DOM_getElementsByTagName('*'),
        ret = [], i = elms.length;

    while( i ) ret[ --i ] = elms[ i ];
    return ret;
};

function DOM_justCreate( tag, html ){
    var elm = DOM_createElement( tag );

    if( html ) DOM_setHTML( elm, html );
    return elm;
}

function DOM_createThenAdd( targetNode, tag, attrs, styles, text ){
    var elm, isStyle;

    if( tag === 'style' ){
        // http://d.hatena.ne.jp/miya2000/20070327/p0
        // 最初に style でないノードが無いと style が生成されない
        isStyle = true;
        elm = DOM_justCreate( 'div', 'a<style type="text\/css">' + text + '<\/style>' ).lastChild;
        // https://davidwalsh.name/add-rules-stylesheets
        // WebKit hack :(
	    // elm.appendChild( document.createTextNode('') );
    } else {
        elm = DOM_justCreate( tag );
    };

    if( DOM_insert ){ // 1:insertBefore or 2:insertAfter
        if( DOM_insert === 2 ){
            targetNode = targetNode.nextSibling;
        };
        if( targetNode ){
            DOM_insertBefore( elm, targetNode );
        } else {
            DOM_appendChild( DOM_getParentElement( targetNode ), elm );
        };
    } else {
        DOM_appendChild( targetNode, elm );
    };
    DOM_insert = 0;

    attrs && DOM_attr( elm, attrs );
    styles && DOM_css( elm, styles );
    text && !isStyle && DOM_appendChild( elm, document.createTextNode( text ) );

    function DOM_attr( elm, attrs ){
        var k;
    
        for( k in attrs ){
            switch( k ){
                case 'class' :
                case 'className' :
                    DOM_addClassName( elm, attrs[ k ] );
                    break;
                default :
                    DOM_setAttribute( elm, k, attrs[ k ] );
                    break;
            };
        }; 
    };
    
    function DOM_css( elm, styles ){
        var elmStyle = elm.style, k;
    
        for( k in styles ){
            elmStyle[ k ] = styles[ k ];
        };
    };

    return elm;
};

function DOM_prev( targetNode, tag, attrs, styles, text ){
    DOM_insert = 1;
    return DOM_createThenAdd( targetNode, tag, attrs, styles, text );
};

function DOM_next( targetNode, tag, attrs, styles, text ){
    DOM_insert = 2;
    return DOM_createThenAdd( targetNode, tag, attrs, styles, text );
};