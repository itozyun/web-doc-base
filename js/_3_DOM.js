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