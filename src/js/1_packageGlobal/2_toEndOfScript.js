p_scripts = document.scripts || p_DOM_getElementsByTagNameFromDocument( 'script' ); // for NN9

p_assetUrl = p_scripts[ p_scripts.length - 1 ].src.split( '/' ); // IE7- では要素に書いてある内容. それ以外は absolute URL.
--p_assetUrl.length;

if( DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR ){
    if( p_assetUrl[ p_assetUrl.length - 1 ] === DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR ){
        --p_assetUrl.length;
    };
};

p_assetUrl = p_assetUrl.join( '/' ); // "http://127.0.0.1:8020/public/"

if( p_assetUrl ){
    p_assetUrl += '/'; // '.' -> './'
};

Debug.log( '[p_assetUrl] ' + p_assetUrl );

if( DEFINE_WEB_DOC_BASE__MOBILE_PAGE_CSS_DIR && DEFINE_WEB_DOC_BASE__DESKTOP_PAGE_CSS_DIR ){
    p_isMobile = p_useMobile || p_DOM_getAttribute( p_body, 'mob' ) === '1';
    p_screenModeDir = ( p_isMobile ? DEFINE_WEB_DOC_BASE__MOBILE_PAGE_CSS_DIR : DEFINE_WEB_DOC_BASE__DESKTOP_PAGE_CSS_DIR ) + '/';
};