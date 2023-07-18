p_scripts = document.scripts || p_DOM_getElementsByTagNameFromDocument( 'script' ); // for NN9

p_assetUrl = p_scripts[ p_scripts.length - 1 ].src.split( '/' ); // IE7- では要素に書いてある内容. それ以外は absolute URL.
--p_assetUrl.length;

if( COMMON_ASSET_DIR_TO_JS_DIR ){
    if( p_assetUrl[ p_assetUrl.length - 1 ] === COMMON_ASSET_DIR_TO_JS_DIR ){
        --p_assetUrl.length;
    };
};

p_assetUrl = p_assetUrl.join( '/' ); // "http://127.0.0.1:8020/public/"

if( p_assetUrl ){
    p_assetUrl += '/'; // '.' -> './'
};

Debug.log( '[p_assetUrl] ' + p_assetUrl );

if( COMMON_CSS_DIR_TO_MOBILE_CSS_DIR && COMMON_CSS_DIR_TO_DESKTOP_CSS_DIR ){
    p_isMobile = p_useMobile || p_DOM_getAttribute( p_body, 'mob' ) === '1';
    p_screenModeDir = ( p_isMobile ? COMMON_CSS_DIR_TO_MOBILE_CSS_DIR : COMMON_CSS_DIR_TO_DESKTOP_CSS_DIR ) + '/';
};