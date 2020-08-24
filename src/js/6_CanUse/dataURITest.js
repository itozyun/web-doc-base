/**================================================================
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/url/data-uri.js
 */
/** ===========================================================================
 * export to packageGlobal
 */
g_dataUriTest = dataUriTest;

/** ===========================================================================
 * private
 */
var CANIUSE_dataUriTestResult;

function dataUriTest( callback ){
    if( g_notUndefined( CANIUSE_dataUriTestResult ) ){
        g_DebugLogger.log( '[dataUriTest] already done : ' + CANIUSE_dataUriTestResult );
        g_setTimer( callback, CANIUSE_dataUriTestResult );
    } else if( g_Trident < 8 ){
        g_DebugLogger.log( '[dataUriTest] trident < 8 : false' );
        g_setTimer( callback, false );
    } else {
        g_DebugLogger.log( '[dataUriTest] start!' );

        var datauri = new Image();

        datauri.onerror = function(){
            g_DebugLogger.log( '[dataUriTest] no DATA URI!' );
            datauri.onload = datauri.onerror = g_emptyFunction;
            _callback( false );
        };

        datauri.onload = function(){
            g_DebugLogger.log( '[dataUriTest] DATA URI:' + ( datauri.width * datauri.height === 1 ) );
            _callback( datauri.width * datauri.height === 1 );
        };
        datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    };
    function _callback( result ){
        CANIUSE_dataUriTestResult = result;
        datauri.onload = datauri.onerror = g_emptyFunction;
        g_setTimer( callback, result );
    };
};