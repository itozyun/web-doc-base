var m_isIE4DOM = p_Trident < 5;

var m_FAKE_TEXTNODE_TAGNAME = 'font';

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
                    name === 'className' && ( name = 'class' );
                    html[ ++j ] = ' ' + name + '="' + value + '"';
                };
            };
        };
    };

    html[ ++j ] = '>';

    if( textContent != null ){
        if( m_isIE4DOM && tagName !== m_FAKE_TEXTNODE_TAGNAME ){
            html[ ++j ] = '<' + m_FAKE_TEXTNODE_TAGNAME.toUpperCase() + '>' + textContent + '</' + m_FAKE_TEXTNODE_TAGNAME.toUpperCase() + '>';
        } else {
            html[ ++j ] = textContent;
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