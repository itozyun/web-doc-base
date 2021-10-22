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
    if( p_Presto < 9 || // document.write でないと、コンテンツ量によって CSS が一部しか適用されない不具合に遭遇する
        p_Gecko < 1     // Gecko 0.9.4 以下で確認 0.9.6 では発生しない document.write でないと css が適用されない
    ){
        document.write('<link href="' + p_assetUrl + p_cssDir + p_screenModeDir + p_cssName + '" rel="stylesheet" type="text/css" media="screen,handheld,print">');
    } else {
        p_listenLoadEvent(
            function(){
                p_DOM_insertElement(
                    p_head,
                    'link',
                    {
                        href  : p_assetUrl + p_cssDir + p_screenModeDir + p_cssName,
                        rel   : 'stylesheet',
                        type  : 'text/css',
                        media : 'screen,handheld,projection,tv,print'
                    }
                );
            }
        );
    };
};