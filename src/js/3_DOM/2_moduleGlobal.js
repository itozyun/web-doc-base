var m_isIE4DOM = p_Trident < 5;

var m_FAKE_TEXTNODE_TAGNAME = 'FONT';

/**
 * @param {string} tagName
 * @param {Object=} attrs
 * @param {string|number=} textContent
 * @return {string}
 */
function m_toHTMLString( tagName, attrs, textContent ){
    var html = [ '<', tagName ],
        j    = 1,
        name, value, styleName;

    if( attrs ){
        for( name in attrs ){
            value = attrs[ name ];
            if( value != null && value !== '' ){
                if( name === 'style' ){
                    html[ ++j ] = ' style="';
                    for( styleName in value ){
                        html[ ++j ] = toSnakeCase( styleName ) + ':' + value[ styleName ] + ';';
                    };
                    html[ ++j ] = '"';
                } else {
                    if( name === 'className' ){
                        name = 'class';
                    };
                    html[ ++j ] = ' ' + name + '="' + value + '"';
                };
            };
        };
    };

    html[ ++j ] = '>';

    if( textContent != null ){
        if( m_isIE4DOM && tagName !== m_FAKE_TEXTNODE_TAGNAME ){
            html[ ++j ] = '<' + m_FAKE_TEXTNODE_TAGNAME + '>' + m_escapeHTML( textContent ) + '</' + m_FAKE_TEXTNODE_TAGNAME + '>';
        } else {
            html[ ++j ] = m_escapeHTML( textContent );
        };
    };

    html[ ++j ] = '</' + tagName + '>';
    return html.join( '' );

    function toSnakeCase( str ){
        var result = [],
            chars  = str.split( '' ),
            i      = chars.length,
            chr;

        while( i ){
            chr = chars[ --i ];
            if( 'A' <= chr && chr <= 'Z' ){
                chr = '-' + chr.toLowerCase();
            };
            result[ i ] = chr;
        };
        return result.join( '' );
    };
};

function m_escapeHTML( text ){
    return text.split( '&' ).join( '&amp;' ).split( '<' ).join( '&lt;' ).split( '>' ).join( '&gt;' )
};
