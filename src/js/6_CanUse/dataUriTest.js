/** ===========================================================================
 * export to packageGlobal
 */
p_dataURITest = p_dataURITestResult === false ?
                    function( callback ){
                        p_setTimer( callback, false );
                    } :
/**============================================================================
 * Original Code:
 *   https://github.com/Modernizr/Modernizr/blob/master/feature-detects/url/data-uri.js
 *   MIT License
 */
function( callback ){
    if( p_notUndefined( p_dataURITestResult ) ){
        Debug.log( '[dataURITest] already done : ' + p_dataURITestResult );
        p_setTimer( callback, p_dataURITestResult );
    } else {
        Debug.log( '[dataURITest] start!' );

        var datauri = new Image(),
            // https://twitter.com/itozyun/status/1306835988577099776/
            // IE : インターネットオプションで画像を無効にした場合、イベントが起きない!
            // Safari4.0 : interval が少ないと失敗するので 999ms, TODO Web Font + iOS 4 でも似た問題が起きて interval を増やしている. load 直後と interval が関係?
            timerID = p_setTimer( /** @type {function(*=)} */ (onComplete), false, 999 );

        datauri.onerror = function(){
            Debug.log( '[dataURITest] no DATA URI!' );
            onComplete( false );
        };

        datauri.onload = function(){
            Debug.log( '[dataURITest] DATA URI:' + ( datauri.width * datauri.height === 1 ) );
            onComplete( datauri.width * datauri.height === 1 );
        };
        datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    };
    function onComplete( result ){
        if( timerID ){
            timerID = p_clearTimer( timerID );
            p_dataURITestResult = result;
            datauri.onload = datauri.onerror = p_emptyFunction;
            p_setTimer( /** @type {function(*=)} */ (callback), result );
        };
    };
};