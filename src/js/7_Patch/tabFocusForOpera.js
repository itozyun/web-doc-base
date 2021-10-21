/**
 * 2011 年 7 月現在で、 Internet Explorer と Opera は、デフォルトではフォーカス可能でない要素に関して、負の整数を指定した tabindex コンテンツ属性に対応 
 * https://books.google.co.jp/books?id=ZSsfUNa2nMgC&pg=PA562&lpg=PA562&dq=Opera+tabindex&source=bl&ots=TbzzkHtakR&sig=ACfU3U1fIWCpEwgJrRBLfY6DPdvLFwK12w&hl=ja&sa=X&ved=2ahUKEwjWxO6EsNrzAhXIMN4KHazmBzkQ6AF6BAgXEAM#v=onepage&q=Opera%20tabindex&f=false
 */
p_Presto && 8 <= p_Presto && p_listenLoadEvent(
    function( e ){
        var anchorList = p_DOM_getElementsByTagNameFromDocument( 'a' ),
            l = anchorList.length, i = 0, elm;

        for( ; i < l ; ++i ){
            elm = anchorList[ i ];
            if( p_DOM_getAttribute( elm, 'tabindex' ) === '-1' ){
                elm.removeAttribute( 'tabindex' );
            } else if( p_DOM_getAttribute( elm, 'href' ) ){
                p_DOM_setAttribute( elm, 'tabindex', 0 );
            };
        };
    }
);