/**
 * 画像の禁止を検出する。画像の禁止には次の2パターンがあると思われる。2. の場合、他の手段で画像の利用は可能。
 *   1. ブラウザによる画像の禁止
 *   2. アドオンやネットワーク監視アプリによる画像のダウンロードのブロック
 */

/** ===========================================================================
 * export to packageGlobal
 */
p_imageTest = imageTest;

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

    Debug.log( '[imageTest] start.' );

    img.onerror = imageTest_onError;
    img.onload  = imageTest_onLoad;
    img.src     = imageUrl;

    p_setTimer( imageTest_check );

    function imageTest_check(){
        if( finish || !counter || img.complete ){
            Debug.log( '[imageTest] timer -> img.complete. img.width=' + img.width );
            
            var result = !!img.width;
            p_imageEnabled = p_imageEnabled || result;
            p_setTimer( callback, result );
            img.onerror = img.onload = p_emptyFunction;
            img = callback = null;
        } else {
            --counter;
            // IE:インターネットオプションで画像を無効にした場合、イベントが起きない!
            // Debug.log( '[imageTest] timer -> img.complete=false.' );
            p_setTimer( imageTest_check );
        };
    };

    function imageTest_onError(){
        // var errorFix = !p_Trident || p_Trident === 11 || p_IEVersion === 11;
        // ie11(10,9 開発モード)で mineType 不正の場合、画像取得に成功してもエラーイベントが起こるのを無視する。
        // if( errorFix && img.width ) return;
        Debug.log( '[imageTest] error!' );
        finish = true;
    };

    function imageTest_onLoad(){
        Debug.log( '[imageTest] onload.' );
        finish = true;
    };
};