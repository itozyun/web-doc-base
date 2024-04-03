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
            // Safari4.0 : setTimeout の最小インターバルが 16ms の時は失敗していた
            timerID = p_setTimer( /** @type {function(*=)} */ (onComplete), false, 99 );

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