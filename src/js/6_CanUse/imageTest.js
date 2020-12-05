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
        finish, counter = 99;

    g_DebugLogger.log( '[imageTest] start.' );

    img.onerror = imageTest_onError;
    img.onload  = imageTest_onLoad;
    img.src     = imageUrl;

    g_setTimer( imageTest_check );

    function imageTest_check(){
        if( finish || !counter || img.complete ){
            g_DebugLogger.log( '[imageTest] timer -> img.complete. img.width=' + img.width );
            
            var result = !!img.width;
            g_imageEnabled = g_imageEnabled || result;
            g_setTimer( callback, result );
            img.onerror = img.onload = g_emptyFunction;
            img = callback = null;
        } else {
            --counter;
            // IE:インターネットオプションで画像を無効にした場合、イベントが起きない!
            // g_DebugLogger.log( '[imageTest] timer -> img.complete=false.' );
            g_setTimer( imageTest_check );
        };
    };

    function imageTest_onError(){
        // var errorFix = !g_Trident || g_Trident === 11 || g_IEVersion === 11;
        // ie11(10,9 開発モード)で mineType 不正の場合、画像取得に成功してもエラーイベントが起こるのを無視する。
        // if( errorFix && img.width ) return;
        g_DebugLogger.log( '[imageTest] error!' );
        finish = true;
    };

    function imageTest_onLoad(){
        g_DebugLogger.log( '[imageTest] onload.' );
        finish = true;
    };
};