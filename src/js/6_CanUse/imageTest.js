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
var TEST_IMAGE_URL = g_isSecure ? WEB_DOC_BASE_DEFINE_TEST_IMAGE_HTTPS : WEB_DOC_BASE_DEFINE_TEST_IMAGE_HTTP;
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
function imageTest( callback ){
    if( !TEST_IMAGE_URL ){
        if( WEB_DOC_BASE_DEFINE_DEBUG ){
            g_DebugLogger.log( '[imageTest] TEST_IMAGE_URL is undefined!' );
        };
        g_setTimer( callback, false );
        return;
    };

    var img = new Image(),
        timerID ,finish;

    img.onerror = imageTest_onError;
    img.onload  = imageTest_onLoad;
    img.src     = TEST_IMAGE_URL;

    if( g_Presto < 8 && img.complete ){
        g_imageEnabled = true;
        g_setTimer( callback, true );
    } else if( !finish ){
        timerID = g_setTimer( imageTest_check );
    };

    function imageTest_check(){
        if( finish ) return;
        
        if( img.complete ){
            finish = true;
            if( img.width ) return;
            g_setTimer( callback, false );
        } else {
            timerID = g_setTimer( imageTest_check );
        };
    };

    function imageTest_onError(){
        var errorFix = !g_Trident || g_Trident === 11 || g_IEVersion === 11;

        // ie11(10,9 開発モード)で mineType 不正の場合、画像取得に成功してもエラーイベントが起こるのを無視する。
        if( errorFix && img.width ) return;
        if( finish ) return;

        finish = true;
        timerID && g_clearTimer( timerID );
        timerID = g_setTimer( callback, false );
    };

    function imageTest_onLoad(){
        finish = true;
        timerID && g_clearTimer( timerID );

        if( g_Presto && !img.complete ){
            timerID = g_setTimer( callback, false );
        } else {
            g_imageEnabled = true;
            g_setTimer( callback, true );
        };
    };
};