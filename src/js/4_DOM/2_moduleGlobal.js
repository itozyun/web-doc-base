var m_isIE4DOM = p_Trident < 5,
    m_virtualNodeList = [];

/**
 * @param {string} tagName
 * @param {Object|number=} attrs
 * @param {*=} textContent
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
                        html[ ++j ] = m_toSnakeCase( styleName ) + ':' + value[ styleName ] + ';';
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
        if( m_isIE4DOM && tagName !== 'font' ){
            html[ ++j ] = '<FONT>' + textContent + '</FONT>';
        } else {
            html[ ++j ] = textContent;
        };
    };

    html[ ++j ] = '</' + tagName + '>';
    return html.join( '' );
};

function m_toSnakeCase( str ){
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