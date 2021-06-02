// javascriptでスタイルを追加する方法
//   https://qiita.com/sainome_7/items/d3f6afa8ffee354e6e36

var CSSOM_sheets = {},
    CSSOM_importIndex = {};

function CSSOM_getStyleSheet( elm ){
    return elm.sheet || elm.styleSheet;
};

function CSSOM_getCssRules( styleSheet ){
    return ( 10 <= g_Trident ) ? styleSheet.cssRules : ( styleSheet.rules || styleSheet.cssRules );
};

function CSSOM_createSheet( css, media ){
    if( 8 <= g_Presto && g_Presto < 9 ){
        //  Data URIs explained
        //   https://humanwhocodes.com/blog/2009/10/27/data-uris-explained/
        //   Opera 7.2+ – data URIs must not be longer than 4100 characters

        // For Opera 8.x. Hack with data URIs.
        DOM_createThenAdd(
            g_head, 'link',
            {
                type  : 'text/css',
                rel   : 'stylesheet',
                media : media,
                href  : 'data:text/css;charset=utf-8;base64,' + Base64_btoa( css )
            }
        );
    } else if( !( g_Presto < 7.2 ) ){
        // For Opera 7.2x and other browsers. Opera 7.0-7.1x does not support dynamic CSS. But only support dynamic import CSS.
        CSSOM_sheets[ media ] = CSSOM_getStyleSheet( DOM_createThenAdd( g_head, 'style', { type : 'text/css', media : media }, 0, css ) );
    };
};

function CSSOM_insertRule( newRules, opt_media ){
    var media = opt_media || 'all',
        sheet = CSSOM_sheets[ media ],
        selector, property, css = '', _css;

    while( newRules.length ){
        selector = newRules.shift();
        property = newRules.shift();
        _css     = selector + '{' + property + '}';

        if( !sheet ){
            css += _css;
        } else if( sheet.addRule ){
            sheet.addRule( selector, property );
        } else if( sheet.insertRule ){
            sheet.insertRule( _css, sheet.cssRules.length );
        };
    };

    if( css ){
        CSSOM_createSheet( css, media );
    };
};

function CSSOM_addImport( url, opt_media ){
    var media = opt_media || 'all',
        sheet = CSSOM_sheets[ media ],
        index = CSSOM_importIndex[ media ] || 0;

    if( !sheet ){
        CSSOM_createSheet( '@import "' + url + '"', media );
    } else if( sheet.addImport ){
        sheet.addImport( url, index );
    } else if( sheet.insertRule ){
        sheet.insertRule( '@import "' + url + '"', index );
    };
    CSSOM_importIndex[ media ] = ++index;
};