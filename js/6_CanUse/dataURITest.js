/**================================================================
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/url/data-uri.js
 */
var CANIUSE_dataUriTestResult;

function dataUriTest( callback ){
    if( !Type_notUndefined( CANIUSE_dataUriTestResult ) ){
        g_Timer_set( callback, CANIUSE_dataUriTestResult );
    } else if( g_Trident < 7 ){
        g_Timer_set( callback, false );
    } else {
        g_DebugLogger.log( '[dataUriTest]' );

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