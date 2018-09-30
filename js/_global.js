var g_loadEventCallbacks   = [],
    g_unloadEventCallbacks = [],
    g_resizeEventCallbacks = [],
    g_scrollEventCallbacks = [],

    g_emptyFunction = new Function(),

    g_w3cDOM = !!document.getElementsByTagName,
    g_html   = getElementsByTagName( 'html' )[ 0 ],
    g_head   = getElementsByTagName( 'head' )[ 0 ],
    g_body   = document.body;

function getElementsByTagName( tag, opt_root ){
    opt_root = opt_root || document;

    return g_w3cDOM ? opt_root.getElementsByTagName( tag ) : opt_root.all.tags( tag.toUpperCase() );
};

function getElementById( id ){
    return window[ id ] || document.all[ id ];
};
