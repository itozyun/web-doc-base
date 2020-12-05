if( WEB_DOC_BASE_DEFINE_MOBILE_CSS_PREFIX ){
    g_isMobile = g_useMobile || DOM_getAttribute( g_body, 'mob' ) === '1';
    g_cssName  = ( g_isMobile ? WEB_DOC_BASE_DEFINE_MOBILE_CSS_PREFIX : '' ) + g_cssName;
};

function DOM_getAttribute( elm, attrName ){
    return elm.getAttribute( attrName ) || '';
};

function DOM_hasAttribute( elm, attrName ){
    return elm.hasAttribute ? elm.hasAttribute( attrName ) : elm.getAttribute( attrName ) != null;
};

function DOM_setAttribute( elm, attrName, value ){
    return elm.setAttribute( attrName, value );
};

function DOM_setAttributeNS( elm, ns, attrName, value ){
    return elm.setAttributeNS( ns, attrName, value );
};

function DOM_removeAttribute( elm, attrName ){
    return elm.removeAttribute( attrName );
};