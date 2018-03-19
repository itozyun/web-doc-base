/**
 * http://unformedbuilding.com/articles/blockquote-and-jquery/
 */
/*
  Name: jQuery.prettyQuote.js
  Version: 1.2
  Required: jQuery.js (tested on jQuery 1.4.2)
  Copy: Copyright (c) Unformed Building (http://unformedbuilding.com/)
  Author: Matori/ub-pnr (pnr.matori@gmail.com)
  Lisence: MIT
  Date: 2010-09-17
  Modified: 2010-09-28
*/

(function(window, document, rootID){
"use strict"
var tempOnload = window.onload,
    init = onload =
function( e ){
    var w3cDOM     = !!document.getElementsByTagName,
        root       = w3cDOM ? document.getElementById( rootID ) : document.all[ rootID ],
        elmTargets = w3cDOM ? root.getElementsByTagName( 'blockquote' ) : root.all.tags( 'blockquote' ),
        elm, i = -1, title, cite;

    if( tempOnload ) tempOnload( e );
    tempOnload = null;
    
    if( onload === init ){
        onload = new Function();
        onload = init = null;
    };

    for( ; elm = elmTargets[ ++i ]; ){
        title = elm.getAttribute( 'title' );
        cite  = elm.getAttribute( 'cite' );

        if( title && cite ){
            elm.removeAttribute( 'title' );
            create( title, cite, 'js-bqLink', true );
        } else if( cite ){
            elm.removeAttribute( 'cite' );
            create( window.decodeURI ? window.decodeURI( cite ) : cite, cite, 'js-bqCite' );
        };
    };

    function create( title, cite, className, add1st ){
        var tag  = add1st ? 'div' : 'cite',
            link = createUrl( cite ),
            elmCite;
        
        link = '<a' + ( isExternalUrl( link ) ? ' target="_blank" rel="nofollow"' : '' ) + ' hidefocus="true" href="' + link + '">' + title + '</a>';

        if( w3cDOM ){
            elmCite = document.createElement( tag );
            add1st ? elm.insertBefore( elmCite, elm.firstChild ) : elm.appendChild( elmCite );
            elmCite.innerHTML = link;
            if( className ) elmCite.className = className;
        } else {
            elm.insertAdjustmentHTML(
                add1st ? 'AfterStart' : 'BeforeEnd',
                '<' + tag + ( className ? ' class="' + className + '">' : '>' ) + link + '</' + tag + '>'
            );
        };
    };

    function createUrl( cite ){
        if( cite.indexOf( 'urn:isbn:' ) === 0 ){
            cite = cite.substr( 9 ).toUpperCase().split('-').join('');
            // ISBN-13
            if( cite.length === 13 ){
                cite = toISBN10( cite );
            };
            // ISBN-10
            if( cite.length === 10 ){
                return 'http://www.amazon.co.jp/exec/obidos/ASIN/' + cite;// + '/itozyun-22/ref=nosim/';
            };    
        };
        return cite;
    };

    function toISBN10( isbn13 ){
        var isbn10 = isbn13.toString().slice(3,-1);
        var digit = 0;
        for(var i = 0; i < 9; i++){
            digit += Number(isbn10.charAt(i)) * (10 - i);
        }
        digit = (11 - (digit % 11)) %11;
        digit = digit === 10 ? 'X' : digit.toString();
        return isbn10 + digit;
    };

    function isExternalUrl( url ){
        return url.indexOf( 'http' ) === 0;
    };
};
})(window, document, 'jM');