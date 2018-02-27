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
(function(){
    "use strict";
var tempOnload = window.onload,
    main = onload = function( e ){
        var /* create image */
            img  = new Image,
            currentTime = new Date - 0,
            src  = currentTime + '.' + currentTime + '?time=' + currentTime,
            imgs = document.images,
            i    = imgs.length,
            body = document.body,
            cn   = body.className;

        // if( tempOnload ) tempOnload( e );
        // tempOnload = null;
        
        if( onload === main ){
            onload = new Function;
            onload = null;
        };
        main = null;

        function disabledActionRun(){
            cn = body.className;
            body.className += ( cn ? ' ' : '' ) + 'img-disabled';
        };

        if ( ua[ 'Prsto' ] ){ // opera
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==?time=' + currentTime;
            img.complete || disabledActionRun();
        } else if( ( 9 <= ua[ 'IE' ] ) || ua[ 'Edge' ] || ua[ 'Blink' ] || ua[ 'Gecko' ] ){// other
            if( i ){
                for( ; i; ){
                    img = imgs[ --i ];
                    if( img.naturalWidth ){
                        return;
                    };
                };
                disabledActionRun();
            };
        } else if( ua[ 'IE' ] ){// other
            if( i ){
                for( ; i; ){
                    img = imgs[ --i ];
                    if( img.complete ){
                        return;
                    };
                };
                disabledActionRun();
            };
        } else {
            img.src = src;
            img.complete && disabledActionRun();
        };
    };
})();