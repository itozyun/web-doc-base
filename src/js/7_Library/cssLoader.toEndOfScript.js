if(
/**
 * IE9以下以外かつ Mac IE 以外に modern.css, legacy.css を読み込む
 */
    ( !( p_Trident < 10 ) && !p_Tasman )
    ||
/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
    ( p_IEVersion === 11 && p_Trident === 5 )
){
    p_listenLoadEvent(
        function(){
            p_DOM_insertElement(
                p_head,
                'link',
                {
                    href  : p_assetUrl + p_cssName,
                    rel   : 'stylesheet',
                    type  : 'text/css',
                    media : 'screen,handheld,projection,tv,print'
                }
            );
        }
    );
};