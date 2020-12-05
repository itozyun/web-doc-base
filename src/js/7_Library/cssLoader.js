/**
 * load modern.css or legacy.css
 */
if( !g_Trident && !g_Tasman ){
    document.write( '<link href="' + g_assetUrl + g_cssName + '" rel="stylesheet" type="text\/css" media="screen,handheld,projection,tv,print">' );
};

/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
if( g_IEVersion === 11 && g_Trident === 5 ){
    DOM_createThenAdd(
        g_head,
        'link',
        {
            href : g_assetUrl + g_cssName,
            rel  : 'stylesheet',
            type : 'text/css'
        }
    );
};