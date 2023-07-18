/*
 * Original:
 *  jQuery.prettyQuote.js
 * 
 *  Author : Matori/ub-pnr
 *  Website: https://unformedbuilding.com/demo/2010/prettyquote/
 *  License: MIT
*/
p_listenLoadEvent(
    function( e ){
        if( !p_elmMain ) return;

        var elmTargets = p_DOM_getElementsByTagName( p_elmMain, 'blockquote' ),
            elm, i = -1, title, cite;

        for( ; elm = elmTargets[ ++i ]; ){
            title = p_DOM_getAttribute( elm, 'title' );
            cite  = p_DOM_getAttribute( elm, 'cite' );

            if( title && cite ){
                p_DOM_removeAttribute( elm, 'title' );
                create( title, cite, COMMON_BLOCKQUOT__CLASSNAME_LINK, true );
            } else if( cite ){
                p_DOM_removeAttribute( elm, 'cite' );
                create( window.decodeURI ? decodeURI( cite ) : cite, cite, COMMON_BLOCKQUOT__CLASSNAME_CITE );
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

            elmCite = add1st ?
                p_DOM_insertElementBefore( /** @type {!Element} */ (p_DOM_getFirstChild( elm )), tag, { className : className } ) :
                p_DOM_insertElement( elm, tag, { className : className } );
            
            p_DOM_insertElement( elmCite, 'a',
                isExternalUrl( link )
                    ? { target : '_blank', rel : 'nofollow noopener noreferrer', href : link }
                    : { href : link },
                title
            );
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
                    return '//www.amazon.co.jp/exec/obidos/ASIN/' + cite +
                     ( DEFINE_WEB_DOC_BASE__AMAZON_ID ? '/' + DEFINE_WEB_DOC_BASE__AMAZON_ID + '/ref=nosim/': '' );
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
    }
);