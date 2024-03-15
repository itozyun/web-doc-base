/** ===========================================================================
 * export to packageGlobal
 */
p_DOM_getTagName      = DOM_getTagName;
p_DOM_getAttribute    = DOM_getAttribute,
p_DOM_setAttribute    = DOM_setAttribute,
p_DOM_removeAttribute = DOM_removeAttribute;
p_DOM_hasAttribute    = DOM_hasAttribute;
p_DOM_getClassName    = DOM_getClassName,
p_DOM_setClassName    = DOM_setClassName,
p_DOM_hasClassName    = DOM_hasClassName,
p_DOM_addClassName    = DOM_addClassName,
p_DOM_removeClassName = DOM_removeClassName;

/** ===========================================================================
 * private
 */

function _isAnchor( elm ){
    return DOM_getTagName( elm ) === 'A';
};

function _isAnchorWithHref( elm ){
    return _isAnchor( elm ) && DOM_hasAttribute( elm, 'href', true );
};

/** 1.
 * @param {Element} elm
 * @return {string}
 */
function DOM_getTagName( elm ){
    return elm.tagName.toUpperCase();
};

/** 2.
 * @param {Element} elm
 * @param {string} name
 * @param {boolean=} opt_skipPolyfill
 * @return {string}
 */
function DOM_getAttribute( elm, name, opt_skipPolyfill ){
    if( p_Presto < 8 || p_Trident < 5.5 ){
        name = p_toCamelCase( name );
    };
    var value = elm.getAttribute( name );
    if( !opt_skipPolyfill && p_Presto && name === 'tabindex' ){
        return value === p_IMPLICITLY_FOCUSABLE ? '' : value === '' ? '-1' : value;
    };
    return value || '';
};

/** 3. href + tabindex を set する場合、href => tabindex の順番に set する!
 * @param {Element} elm
 * @param {string} name
 * @param {string|number} value
 * @param {boolean=} opt_skipPolyfill
 */
function DOM_setAttribute( elm, name, value, opt_skipPolyfill ){
    if( !opt_skipPolyfill && p_Presto ){
        if( name === 'tabindex' ){
            if( value === '-1' ){
                DOM_removeAttribute( elm, name, true );
                return;
            } else if( !value && _isAnchorWithHref( elm ) ){
                value = p_IMPLICITLY_FOCUSABLE;
            };
        } else if( name === 'href' ){
            DOM_getAttribute( elm, 'tabindex', true ) !== p_IMPLICITLY_FOCUSABLE
                && _isAnchor( elm )
                && DOM_setAttribute( elm, 'tabindex', p_IMPLICITLY_FOCUSABLE, true );
        };
    };
    if( p_Presto < 8 || p_Trident < 5.5 ){
        name = p_toCamelCase( name );
    };
    elm.setAttribute( name, value );
};

/** 4.
 * @param {Element} elm
 * @param {string} name
 * @param {boolean=} opt_skipPolyfill
 */
function DOM_removeAttribute( elm, name, opt_skipPolyfill ){
    if( !opt_skipPolyfill && p_Presto ){
        if( name === 'tabindex' ){
            DOM_getAttribute( elm, name, true ) !== p_IMPLICITLY_FOCUSABLE
                && _isAnchorWithHref( elm )
                && DOM_setAttribute( elm, name, p_IMPLICITLY_FOCUSABLE, true ); // -1|1 => ''
            return;
        } else if( name === 'href' ){
            DOM_getAttribute( elm, 'tabindex', true ) === p_IMPLICITLY_FOCUSABLE
             // && _isAnchor( elm ) // <link href> ではなく <a href tabindex=-0> であることは確定とする
                && DOM_removeAttribute( elm, 'tabindex', true );
        };
    };
    if( p_Presto < 8 || p_Trident < 5.5 ){
        name = p_toCamelCase( name );
    };
    elm.removeAttribute( name );
};

/** 5.
 * @param {Element} elm
 * @param {string} name
 * @param {boolean=} opt_skipPolyfill
 */
function DOM_hasAttribute( elm, name, opt_skipPolyfill ){
    if( !opt_skipPolyfill && p_Presto && name === 'tabindex' && _isAnchorWithHref( elm ) ){
        return DOM_getAttribute( elm, name, true ) !== p_IMPLICITLY_FOCUSABLE;
    };
    if( p_Presto < 8 || p_Trident < 5.5 ){
        name = p_toCamelCase( name );
    };
    return elm.hasAttribute ? elm.hasAttribute( name ) : elm.getAttribute( name ) != null; // TODO outerHTML
};

/*
function DOM_setAttributeNS( elm, ns, name, value ){
    return elm.setAttributeNS( ns, name, value );
}; */

/** 6.
 * @param {Element} elm
 */
function DOM_getClassName( elm ){
    return elm.className;
};

/** 7.
 * @param {Element} elm
 * @param {string} className
 */
function DOM_setClassName( elm, className ){
    if( p_Trident < 9 ){
        elm.className = className;
    } else {
        elm.setAttribute( 'class', className ); // SVG で値が変更されないケースに対策
    };
};

/** 8.
 * @param {Element} elm
 * @param {string} className
 */
function DOM_hasClassName( elm, className ){
    return ( ' ' + DOM_getClassName( elm ) + ' ' ).indexOf( ' ' + className + ' ' ) !== -1;
};

/** 9.
 * @param {Element} elm
 * @param {string} className
 */
function DOM_addClassName( elm, className ){
    var _className;

    if( !DOM_hasClassName( elm, className ) ){
        if( _className = DOM_getClassName( elm ) ){
            _className += ' '; 
        };
        DOM_setClassName( elm, _className + className );
    };
};

/** 10.
 * @param {Element} elm
 * @param {string} className
 */
function DOM_removeClassName( elm, className ){
    var _className;

    if( DOM_hasClassName( elm, className ) ){
        _className = DOM_getClassName( elm ).split( ' ' );
        _className.splice( _className.indexOf( className ), 1 );
        DOM_setClassName( elm, _className.join( ' ' ) );
    };
};