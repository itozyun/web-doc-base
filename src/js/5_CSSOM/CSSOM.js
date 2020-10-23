var CSSOM_sheets = {},
    CSSOM_importIndex = {};

// opera 9 未満は styleSheet が居ない
function CSSOM_getStyleSheet( elm ){
    return elm.sheet || elm.styleSheet;
};

function CSSOM_getCssRules( styleSheet ){
    return ( 10 <= g_Trident ) ? styleSheet.cssRules : ( styleSheet.rules || styleSheet.cssRules );
};

// https://qiita.com/sainome_7/items/d3f6afa8ffee354e6e36
function CSSOM_createSheet( css, media ){
    if( 8 <= g_Presto && g_Presto < 9 ){
        // 7.2x は 下が動作。7.1 以下は下も不可。
        DOM_createThenAdd(
            g_head, 'link',
            {
                type  : 'text/css',
                rel   : 'stylesheet',
                media : media,
                href  : 'data:text/css;charset=utf-8;base64,' + Base64_btoa( css )
            }
        );
    } else {
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