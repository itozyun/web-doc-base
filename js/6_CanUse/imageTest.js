/**
 * Detecting if images are disabled in browsers
 *  https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 * 
 * ブラウザ自身による画像の禁止
 * アドオンやネットワーク監視アプリによる画像の禁止
 * 
 * Webページにimgタグがある
 *   
 */
var TEST_IMAGE_URL = g_isSecure ? DEFINE_TEST_IMAGE_HTTPS : DEFINE_TEST_IMAGE_HTTP;

function imageTest( callback ){
    if( !TEST_IMAGE_URL ){
        if( DEFINE_DEBUG ){
            g_DebugLogger.log( '[imageTest] TEST_IMAGE_URL is undefined!' );
        };
        g_Timer_set( callback, false );
        return;
    };

    var img = new Image(),
        timerID ,finish;

    img.onerror = imageTest_onError;
    img.onload  = imageTest_onLoad;
    img.src     = TEST_IMAGE_URL;

    if( g_Presto < 8 && img.complete ){
        g_Timer_set( callback, true );
    } else if( !finish ){
        timerID = g_Timer_set( imageTest_check );
    };

    function imageTest_check(){
        if( finish ) return;
        
        if( img.complete ){
            finish = true;
            if( img.width ) return;
            g_Timer_set( callback, false );
        } else {
            timerID = g_Timer_set( imageTest_check );
        };
    };

    function imageTest_onError(){
        var errorFix = !g_Trident || g_Trident === 11 || ua[ 'IEHost' ] === 11;

        // ie11(10,9 開発モード)で mineType 不正の場合、画像取得に成功してもエラーイベントが起こるのを無視する。
        if( errorFix && img.width ) return;
        if( finish ) return;

        finish = true;
        timerID && g_Timer_clear( timerID );
        timerID = g_Timer_set( callback, false );
    };

    function imageTest_onLoad(){
        finish = true;
        timerID && g_Timer_clear( timerID );

        if( g_Presto && !img.complete ){
            timerID = g_Timer_set( callback, false );
        } else {
            g_Timer_set( callback, true );
        };
    };
};

g_imageTest = imageTest;

