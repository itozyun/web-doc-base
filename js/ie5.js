/**
 * emu + ie5 で css が読み込まれない問題の対策
 */
document.documentMode === 5 && (function(window, document){
var
tempOnload = window.onload,
main = window.onload = function( e ){
    var scripts, script, link, head, src;

    if( tempOnload ) tempOnload( e );
    tempOnload = null;
    
    if( onload === main ){
        onload = new Function();
        onload = null;
    };

    scripts = document.getElementsByTagName('script');
    script  = scripts[ scripts.length - 1 ];
    src = script.src.split( '/' );

    --src.length;

    link = document.createElement( 'link' );
    head = document.getElementsByTagName('head')[ 0 ];
    head.appendChild( link );
    link.href = src.join( '/' ) + '/ie5win.css';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
};

})(window, document);