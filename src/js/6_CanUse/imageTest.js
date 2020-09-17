/**
 * 画像の禁止を検出する。画像の禁止には次の2パターンがあると思われる。2. の場合、他の手段で画像の利用は可能。
 *   1. ブラウザによる画像の禁止
 *   2. アドオンやネットワーク監視アプリによる画像のダウンロードのブロック
 */

/** ===========================================================================
 * export to packageGlobal
 */
g_imageTest = imageTest;

/** ===========================================================================
 * private
 */

/* 
 * Original Code:
 *  
 * Author : uupaa.js@gmail.com 
 * Website: http://d.hatena.ne.jp/uupaa/20080413/1208067631
 * License: MIT?
 */
/**
 * uupaa/image.onload.error.md
 *   https://gist.github.com/uupaa/8001551
 */
function imageTest( callback, imageUrl ){ // callback, url, 
    var img = new Image(),
        timerID, finish, counter = 99;

    g_DebugLogger.log( '[imageTest] start.' );

    img.onerror = imageTest_onError;
    img.onload  = imageTest_onLoad;
    img.src     = imageUrl;

    if( g_Presto < 8 && img.complete ){
        g_DebugLogger.log( '[imageTest] Presto<8 success!' );
        g_imageEnabled = true;
        g_setTimer( callback, true );
    } else if( !finish ){
        timerID = g_setTimer( imageTest_check );
    };

    function imageTest_check(){
        if( finish ) return;
        
        if( img.complete ){
            g_DebugLogger.log( '[imageTest] timer -> img.complete. img.width=' + img.width );

            finish = true;
            // if( img.width ) return;
            g_setTimer( callback, !!img.width );
        } else if( --counter ){
            // IE:インターネットオプションで画像を無効にした場合、イベントが起きない!
            // g_DebugLogger.log( '[imageTest] timer -> img.complete=false.' );
            timerID = g_setTimer( imageTest_check );
        } else {
            g_DebugLogger.log( '[imageTest] timeout.' );
            finish = true;
            timerID = g_setTimer( callback, false );
        };
    };

    function imageTest_onError(){
        var errorFix = !g_Trident || g_Trident === 11 || g_IEVersion === 11;

        g_DebugLogger.log( '[imageTest] error. errorFix=' + errorFix );

        // ie11(10,9 開発モード)で mineType 不正の場合、画像取得に成功してもエラーイベントが起こるのを無視する。
        if( errorFix && img.width ) return;
        if( finish ) return;

        g_DebugLogger.log( '[imageTest] error!' );

        finish = true;
        timerID && g_clearTimer( timerID );
        timerID = g_setTimer( callback, false );
    };

    function imageTest_onLoad(){
        finish = true;
        timerID && g_clearTimer( timerID );
        
        g_DebugLogger.log( '[imageTest] onload.' );

        if( g_Presto && !img.complete ){
            g_DebugLogger.log( '[imageTest] Presto not img.complete!' );
            timerID = g_setTimer( callback, false );
        } else {
            g_DebugLogger.log( '[imageTest] success!' );
            g_imageEnabled = true;
            g_setTimer( callback, true );
        };
    };
};