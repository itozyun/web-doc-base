/**
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
if( !( 10 <= ua[ 'IE' ] || ua[ 'Edge' ] ) ){
    g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
    function (){
        var e,c;
        //Create a test div
        e=document.createElement("div");
        //Set its color style to something unusual
        e.style.color="#123456";
        e.style.position = 'absolute';
        e.style.top  = 0;
        e.style.left = 0;
        //Attach to body so we can inspect it
        g_body.appendChild(e);
        //Use standard means if available, otherwise use the IE methods
        c = document.defaultView ? document.defaultView.getComputedStyle(e,null).color : ( e.currentStyle && e.currentStyle.color );
        //Delete the test DIV
        g_body.removeChild(e);
        if( c ){
            //get rid of extra spaces in result
            c = c.split( ' ' ).join( '' ) 
            //Check if we got back what we set
            //If not we are in high contrast mode
            if( c !== "#123456" && c !== 'rgb(18,52,86)' ){
                g_html.className += ' highContrast';
            };
        };
    };
};