/**
 * JavaScript: How to find out when images are turned off in browser?
 * https://stackoverflow.com/questions/1896904/javascript-how-to-find-out-when-images-are-turned-off-in-browser
 *  // tested in: ff 2+, opera 9+, chrome, safari 4+, ie 6+
 * 
 * itozyun's test
 *  // OK!
 *   Win10 : ie11(ie5~10 mode), Chrome63, Firefox58
 *  // OK!(noway to turn off image)
 *   iOS   : Safari, Opera mini, Firefox, Chrome
 */
g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
function(){
    "use strict";

    var imgs = document.images,
        i    = imgs.length,
        img;

    function disabledActionRun( img ){
        var parent = img.parentElement || img.parentNode,
            cn = parent.className;
    
        if( ( ' ' + cn + ' ' ).indexOf( ' aBodyRoot ' ) === -1 ){
            parent.className = cn + ( cn ? ' ' : '' ) + 'img-disabled';
        // } else {
        //    img.style.display = 'none';
        };
    };

    if( i ){
        if( ua[ 'IE' ] < 9 ){// other
            for( ; i; ){
                img = imgs[ --i ];
                img.complete || disabledActionRun( img );
            };
        } else {
            for( ; i; ){
                img = imgs[ --i ];
                img.naturalWidth || disabledActionRun( img );
            };
        };
    };
};