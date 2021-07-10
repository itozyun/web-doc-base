/** ===========================================================================
 * export to packageGlobal
 */
p_dataUriTest = dataUriTest;

/** ===========================================================================
 * private
 */
var CANIUSE_dataUriTestResult;

/**============================================================================
 * Original Code:
 *   https://github.com/Modernizr/Modernizr/blob/master/feature-detects/url/data-uri.js
 *   MIT License
 */
function dataUriTest( callback ){
    if( p_notUndefined( CANIUSE_dataUriTestResult ) ){
        Debug.log( '[dataUriTest] already done : ' + CANIUSE_dataUriTestResult );
        p_setTimer( callback, CANIUSE_dataUriTestResult );
    } else if( p_Trident < 8 ){
        Debug.log( '[dataUriTest] trident < 8 : false' );
        p_setTimer( callback, false );
    } else {
        Debug.log( '[dataUriTest] start!' );

        var datauri = new Image(),
            // https://twitter.com/itozyun/status/1306835988577099776/
            // IE:インターネットオプションで画像を無効にした場合、イベントが起きない!
            timerID = p_setTimer( function(){ timerID && _callback( false ); } );

        datauri.onerror = function(){
            Debug.log( '[dataUriTest] no DATA URI!' );
            _callback( false );
        };

        datauri.onload = function(){
            Debug.log( '[dataUriTest] DATA URI:' + ( datauri.width * datauri.height === 1 ) );
            _callback( datauri.width * datauri.height === 1 );
        };
        datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    };
    function _callback( result ){
        timerID = p_clearTimer( timerID );
        CANIUSE_dataUriTestResult = result;
        datauri.onload = datauri.onerror = p_emptyFunction;
        p_setTimer( callback, result );
    };
};