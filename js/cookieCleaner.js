"use strict";
if(navigator.cookieEnabled){
    (function(){
        var c = document.cookie.split( '; ' ),
            d = new Date( 0 ).toGMTString(),
            kv, i = -1, k;

        for( ; kv = c[ ++i ]; ){
            k = kv.split( '=' )[0];
            document.cookie = k + "=;expires=" + d + ';domain=.geocities.jp;path=/';
        };
    })();
};