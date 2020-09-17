/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
if( g_IEVersion === 11 && g_Trident < 5.5 ){
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