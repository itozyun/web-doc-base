
/**
 * load modern.css or legacy.css
 */
if( !( p_Trident < 10 ) && !p_Tasman ){
    document.write( '<link href="' + p_assetUrl + p_cssName + '" rel="stylesheet" type="text\/css" media="screen,handheld,projection,tv,print">' );
};

/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
if( p_IEVersion === 11 && p_Trident === 5 ){
    p_DOM_insertElement(
        p_head,
        'link',
        {
            href : p_assetUrl + p_cssName,
            rel  : 'stylesheet',
            type : 'text/css'
        }
    );
    // p_head.appendChild( document.createElement( '<link href="' + p_assetUrl + p_cssName + '" rel=stylesheet type="text/css">' ) );
};