
/** ===========================================================================
 * export to packageGlobal
 */
p_CSSOM_getStyleSheet = CSSOM_getStyleSheet;
p_CSSOM_getCssRules   = CSSOM_getCssRules;
p_CSSOM_createSheet   = CSSOM_createSheet;
p_CSSOM_insertRule    = CSSOM_insertRule;
p_CSSOM_addImport     = CSSOM_addImport;

/** ===========================================================================
 * private
 */
// javascriptでスタイルを追加する方法
//   https://qiita.com/sainome_7/items/d3f6afa8ffee354e6e36
var CSSOM_sheets = {},
    CSSOM_importIndex = {};

/**
 * @param {Element} elm
 * @return {CSSStyleSheet}
 */
function CSSOM_getStyleSheet( elm ){
    return elm.sheet || elm.styleSheet;
};

/**
 * @param {CSSStyleSheet} styleSheet
 * @return {CSSRuleList}
 */
function CSSOM_getCssRules( styleSheet ){
    return ( 10 <= p_Trident ) ? styleSheet.cssRules : ( styleSheet.rules || styleSheet.cssRules );
};

/**
 * @param {string} css
 * @param {string} media
 */
function CSSOM_createSheet( css, media ){
    if( 8 <= p_Presto && p_Presto < 9 ){
        //  Data URIs explained
        //   https://humanwhocodes.com/blog/2009/10/27/data-uris-explained/
        //   Opera 7.2+ – data URIs must not be longer than 4100 characters

        // For Opera 8.x. Hack with data URIs.
        p_DOM_insertElement(
            p_head, 'link',
            {
                type  : 'text/css',
                rel   : 'stylesheet',
                media : media,
                href  : 'data:text/css;charset=utf-8;base64,' + Base64_btoa( css )
            }
        );
    } else if( !( p_Presto < 7.2 ) ){
        // For Opera 7.2x and other browsers. Opera 7.0-7.1x does not support dynamic CSS. But only support dynamic import CSS.
        CSSOM_sheets[ media ] = CSSOM_getStyleSheet(
            p_DOM_insertElement( p_head, 'style', { /* type : 'text/css', */ media : media }, css ) // <-- p_DOM_insertElement
        );
    };
};

/**
 * @param {Array} newRules
 * @param {string=} opt_media
 */
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

/**
 * @param {string} url
 * @param {string=} opt_media
 */
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