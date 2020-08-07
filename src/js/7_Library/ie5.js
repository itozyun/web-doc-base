/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
if( ua[ 'IEHost' ] && g_Trident < 5.5 ){
    g_Event_listenLoadEvent(
        function(){
            DOM_createThenAdd(
                g_head,
                'link',
                {
                    href : g_assetUrl + '/' + g_cssName,
                    rel  : 'stylesheet',
                    type : 'text/css'
                }
            );
        }
    );
};