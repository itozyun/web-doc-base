/**================================================================
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/url/data-uri.js
 */
var CANIUSE_dataUriTestResult;

function dataUriTest( callback ){
    if( g_Type_notUndefined( CANIUSE_dataUriTestResult ) ){
        g_DebugLogger.log( '[dataUriTest] already done : ' + CANIUSE_dataUriTestResult );
        g_Timer_set( callback, CANIUSE_dataUriTestResult );
    } else if( g_Trident < 8 ){
        g_DebugLogger.log( '[dataUriTest] trident < 8 : false' );
        g_Timer_set( callback, false );
    } else {
        g_DebugLogger.log( '[dataUriTest] start!' );

        var datauri = new Image();
        
        datauri.onerror = function(){
            g_DebugLogger.log( '[dataUriTest] no DATA URI!' );
            callback( CANIUSE_dataUriTestResult = false );
        };

        datauri.onload = function(){
            g_DebugLogger.log( '[dataUriTest] DATA URI:' + ( datauri.width * datauri.height === 1 ) );
            callback( CANIUSE_dataUriTestResult = datauri.width * datauri.height === 1 );
        };
    
        datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    };
};

g_dataUriTest = dataUriTest;