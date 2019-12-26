g_assetUrl = g_scripts[ g_scripts.length - 1 ].src.split( '/' );
--g_assetUrl.length;
g_assetUrl = g_assetUrl.join( '/' );

if( g_MOBILE_CSS_PREFIX ){
    g_isMobile = DOM_getAttribute( g_body, 'mob' ) === '1';
};

function DOM_getAttribute( elm, attrName ){
    return elm.getAttribute( attrName );
};

function DOM_hasAttribute( elm, attrName ){
    return elm.hasAttribute( attrName );
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