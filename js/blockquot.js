/*
 * Original:
 *  jQuery.prettyQuote.js
 *  http://unformedbuilding.com/articles/blockquote-and-jquery/
*/
var BLOCKQUOT_ROOT_ID = 'jM';

g_loadEventCallbacks[ g_loadEventCallbacks.length ] =
function( e ){
    "use strict";

    var elmTargets = getElementsByTagName( 'blockquote', getElementById( BLOCKQUOT_ROOT_ID ) ),
        elm, i = -1, title, cite;

    for( ; elm = elmTargets[ ++i ]; ){
        title = elm.getAttribute( 'title' );
        cite  = elm.getAttribute( 'cite' );

        if( title && cite ){
            elm.removeAttribute( 'title' );
            create( title, cite, 'js-bqLink', true );
        } else if( cite ){
            elm.removeAttribute( 'cite' );
            create( window.decodeURI ? decodeURI( cite ) : cite, cite, 'js-bqCite' );
        };
    };

/**
 * @param {string} title
 * @param {string} cite
 * @param {string} className
 * @param {boolean=} add1st
 */
    function create( title, cite, className, add1st ){
        var tag  = add1st ? 'div' : 'cite',
            link = createUrl( cite ),
            elmCite;
        
        link = '<a' + ( isExternalUrl( link ) ? ' target="_blank" rel="nofollow"' : '' ) + ' hidefocus="true" href="' + link + '">' + title + '</a>';

        if( g_w3cDOM ){
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
            digit += (isbn10.charAt(i) - 0) * (10 - i);
        }
        digit = (11 - (digit % 11)) %11;
        digit = digit === 10 ? 'X' : digit.toString();
        return isbn10 + digit;
    };

    function isExternalUrl( url ){
        return url.indexOf( 'http' ) === 0;
    };
};