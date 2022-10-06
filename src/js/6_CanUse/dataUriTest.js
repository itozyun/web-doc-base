/** ===========================================================================
 * export to packageGlobal
 */
p_dataURITest = p_dataURITestResult === false ?
                    function( callback ){
                        p_setTimer( callback, p_dataURITestResult );
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
    } else if( p_Trident < 8 ){
        Debug.log( '[dataURITest] trident < 8 : false' );
        p_setTimer( callback, false );
    } else {
        Debug.log( '[dataURITest] start!' );

        var datauri = new Image(),
            // https://twitter.com/itozyun/status/1306835988577099776/
            // IE:インターネットオプションで画像を無効にした場合、イベントが起きない!
            timerID = p_setTimer( function(){ timerID && _callback( false ); } );

        datauri.onerror = function(){
            Debug.log( '[dataURITest] no DATA URI!' );
            _callback( false );
        };

        datauri.onload = function(){
            Debug.log( '[dataURITest] DATA URI:' + ( datauri.width * datauri.height === 1 ) );
            _callback( datauri.width * datauri.height === 1 );
        };
        datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    };
    function _callback( result ){
        timerID = p_clearTimer( timerID );
        p_dataURITestResult = result;
        datauri.onload = datauri.onerror = p_emptyFunction;
        p_setTimer( callback, result );
    };
};