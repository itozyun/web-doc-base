
/** ===========================================================================
 * export to packageGlobal
 */
p_CSSOM_getStyleSheet = CSSOM_getStyleSheet;
p_CSSOM_getCssRules   = CSSOM_getCssRules;
p_CSSOM_insertRule    = CSSOM_insertRule;
p_CSSOM_addImport     = CSSOM_addImport;

/** ===========================================================================
 * private
 */
// javascriptでスタイルを追加する方法
//   https://qiita.com/sainome_7/items/d3f6afa8ffee354e6e36

/** @type {Object<string, CSSStyleSheet>} */
var CSSOM_styleSheets = {};

/** @type {Object<string, number>} */
var CSSOM_importIndex = {};

var CSSOM_USE_DATAURI_FALLBACK = 8 <= p_Presto && p_Presto < 9

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
 * @param {Array} newRules
 * @param {string|undefined=} opt_media
 */
function CSSOM_insertRule( newRules, opt_media ){
    var media = opt_media || 'all',
        sheet = CSSOM_styleSheets[ media ],
        selector, property, css = '', _css;

    if( !sheet ){
        sheet = CSSOM_createStyleSheetForTrident( opt_media );
    };

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
        CSSOM_createStyleSheetForOther( css, opt_media );
    };
};

/**
 * @param {string} url
 * @param {string=} opt_media
 */
function CSSOM_addImport( url, opt_media ){
    var media = opt_media || 'all',
        sheet = CSSOM_styleSheets[ media ],
        index = CSSOM_importIndex[ media ] || 0;

    if( !sheet ){
        sheet = CSSOM_createStyleSheetForTrident( opt_media );
    };

    if( !sheet ){
        CSSOM_createStyleSheetForOther( '@import "' + url + '"', opt_media );
        /* if( !CSSOM_styleSheets[ media ] ){
            return;
        }; */
    } else if( sheet.addImport ){
        sheet.addImport( url, index );
    } else if( sheet.insertRule ){
        sheet.insertRule( '@import "' + url + '"', index );
    };
    CSSOM_importIndex[ media ] = ++index;
};

/**
 * @param {string=} opt_media
 * @return {CSSStyleSheet|undefined}
 */
    function CSSOM_createStyleSheetForTrident( opt_media ){
        if( p_Trident < 11 ){
            var styleSheet = CSSOM_styleSheets[ opt_media || 'all' ] = document.createStyleSheet();
    
            if( opt_media ){
                var links = p_DOM_getElementsByTagNameFromDocument( 'link' ),
                    link  = links[ links.length - 1 ];
                
                p_DOM_setAttribute( link, 'media', opt_media );
            };
            return styleSheet;
        };
    };
/**
 * @param {string} css
 * @param {string|undefined} opt_media
 */
 function CSSOM_createStyleSheetForOther( css, opt_media ){
    if( CSSOM_USE_DATAURI_FALLBACK ){
        //  Data URIs explained
        //   https://humanwhocodes.com/blog/2009/10/27/data-uris-explained/
        //   Opera 7.2+ – data URIs must not be longer than 4100 characters

        // For Opera 8.x. Hack with data URIs.
        p_DOM_insertElement(
            p_head, 'link',
            {
                type  : 'text/css',
                rel   : 'stylesheet',
                media : opt_media,
                href  : 'data:text/css;charset=utf-8;base64,' + Base64_btoa( css )
            }
        );
    } else if( !( p_Presto < 7.2 ) ){
        // For Opera 7.2x and other browsers. Opera 7.0-7.1x does not support dynamic CSS. But only support dynamic import CSS.
        var styleSheet = CSSOM_getStyleSheet( p_DOM_insertStyleElement( p_head, { media : opt_media }, css ) );
        if( styleSheet ){
            CSSOM_styleSheets[ opt_media || 'all' ] = styleSheet;
        };
    };
};
