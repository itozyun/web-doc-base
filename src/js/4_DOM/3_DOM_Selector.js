/** ===========================================================================
 * export to packageGlobal
 */
p_html = DOM_getElementsByTagNameFromDocument( 'html' )[ 0 ];
p_head = DOM_getElementsByTagNameFromDocument( 'head' )[ 0 ];

/*  1. */ p_DOM_getElementById                     = DOM_getElementById;
/*  2. */ p_DOM_getElementsByTagNameFromDocument   = DOM_getElementsByTagNameFromDocument;
/*  3. */ p_DOM_getElementsByClassNameFromDocument = DOM_getElementsByClassNameFromDocument;
/*  4. */ p_DOM_getElementsByTagName               = DOM_getElementsByTagName;
/*  5. */ p_DOM_getElementsByClassName             = DOM_getElementsByClassName;
 
/** ===========================================================================
 * private
 */

/** 1.
 * @param {string} tag
 * @return {Element}
 */
function DOM_getElementById( id ){
    return window[ id ] || document[ id ] ||
           document.getElementById( id ); // for NN9
};

/** 2.
 * @param {string} tag
 * @param {HTMLDocument|Element|?=} opt_root MS DOM のメソッドを使う際は ? を追加。
 * @return {Array}
 */
function DOM_getElementsByTagNameFromDocument( tag, opt_root ){
    var root = opt_root || document,
        elms = ( tag !== '*' && !m_isIE4DOM ) ?
                   root.getElementsByTagName( tag ) :
               tag !== '*' ? root.all.tags( tag.toUpperCase() ) :
                   root.all,
        ret = [],
        i = 0, l = elms.length;

    for( l = elms.length; i < l; ++i ){
        ret[ i ] = elms[ i ];
    };
    return ret;
};

/** 3.
 * @param {string} className
 * @param {HTMLDocument|Element|?=} opt_root MS DOM のメソッドを使う際は ? を追加。
 * @return {Array}
 */
function DOM_getElementsByClassNameFromDocument( className, opt_root ){
    var root = opt_root || document,
        ret = [], hasMethod, elms, i = 0, l, elm, j = -1;

    if( !( p_Trident < 9 ) && root.getElementsByClassName ){
        hasMethod = true;
        elms = root.getElementsByClassName( className );
    } else {
        elms = !( p_Trident < 6 ) ? root.getElementsByTagName( '*' ) : root.all;
    };

    for( l = elms.length; i < l; ++i ){
        elm = elms[ i ];
        if( hasMethod || DOM_hasClassName( elm, className ) ){
            ret[ ++j ] = elm;
        };
    };
    return ret;
};

/** 4.
 * @param {Element} elm
 * @param {string} tag
 * @return {Array}
 */
function DOM_getElementsByTagName( elm, tag ){
    return DOM_getElementsByTagNameFromDocument( tag, elm );
};

/** 5.
 * @param {Element} elm
 * @param {string} tag
 * @return {Array}
 */
function DOM_getElementsByClassName( elm, tag ){
    return DOM_getElementsByClassNameFromDocument( tag, elm );
};