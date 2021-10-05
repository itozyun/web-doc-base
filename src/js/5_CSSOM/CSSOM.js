
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

/* function CSSOM_getOwnerNode( styleSheet ){
    return styleSheet.owningElement || styleSheet.ownerNode;
};
function CSSOM_removeStyleSheet( styleSheet ){
    p_DOM_remove( elm = CSSOM_getOwnerNode( styleSheet ) );
    // media = p_DOM_getAttribute( elm, 'media' ) || 'all';
    for( media in CSSOM_styleSheets ){
        if( CSSOM_styleSheets[ media ] === styleSheet ){
            CSSOM_styleSheets[ media ] = null;
            CSSOM_importIndex[ media ] = 0;
            break;
        };
    };
}; */

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
    var styleSheet = CSSOM_styleSheets[ opt_media || 'all' ] || CSSOM_createStyleSheetForTridentAndOpera9( opt_media ),
        l          = newRules.length - 2,
        i          = -1,
        cssText    = '',
        selector, property, _cssText;

    while( i < l ){
        selector = newRules[ ++i ];
        property = newRules[ ++i ];
        _cssText = selector + '{' + property + '}';

        if( !styleSheet ){
            cssText += _cssText;
        } else if( styleSheet.addRule ){
            styleSheet.addRule( selector, property );
        } else if( styleSheet.insertRule ){
            styleSheet.insertRule( _cssText, styleSheet.cssRules.length );
        };
    };

    if( cssText ){
        CSSOM_createStyleSheetForOther( cssText, opt_media );
    };
    // return styleSheet;
};

/**
 * @param {string} url
 * @param {string=} opt_media
 */
function CSSOM_addImport( url, opt_media ){
    var media      = opt_media || 'all',
        styleSheet = CSSOM_styleSheets[ media ] || CSSOM_createStyleSheetForTridentAndOpera9( opt_media ),
        index      = CSSOM_importIndex[ media ] || 0;

    if( !styleSheet ){
        CSSOM_createStyleSheetForOther( '@import "' + url + '"', opt_media );
        /* if( !CSSOM_styleSheets[ media ] ){
            return;
        }; */
    } else if( styleSheet.addImport ){
        styleSheet.addImport( url, index );
    } else if( styleSheet.insertRule ){
        styleSheet.insertRule( '@import "' + url + '"', index );
    };
    CSSOM_importIndex[ media ] = ++index;
    // return styleSheet;
};

/**
 * @param {string=} opt_media
 * @return {CSSStyleSheet|undefined}
 */
    function CSSOM_createStyleSheetForTridentAndOpera9( opt_media ){
        var elm, styleSheet;

        if( p_Trident === 5.5 || 9 <= p_Presto ){ // Win XP sp3, IETester IE5.5 で確認
            elm        = p_DOM_insertElement( p_head, 'style' ),
            styleSheet = CSSOM_getStyleSheet( elm );

            if( opt_media ){
                p_DOM_setAttribute( elm, 'media', opt_media );
            };
        } else if( p_Trident < 11 ){
            styleSheet = CSSOM_styleSheets[ opt_media || 'all' ] = document.createStyleSheet();

            if( DEFINE_WEB_DOC_BASE__DEBUG && !styleSheet.owningElement ){
                Debug.log( '[CSSOM] CSSOM_createStyleSheetForTridentAndOpera9(), No styleSheet.owningElement!' );
                return styleSheet;
            };

            if( opt_media ){
                p_DOM_setAttribute( styleSheet.owningElement, 'media', opt_media );
            };
        };
        return styleSheet;
    };
/**
 * @param {string} cssText
 * @param {string|undefined} opt_media
 */
function CSSOM_createStyleSheetForOther( cssText, opt_media ){
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
                href  : 'data:text/css;charset=utf-8;base64,' + Base64_btoa( cssText )
            }
        );
    } else if( !( p_Presto < 7.2 ) ){
        // For Opera 7.2x and other browsers. Opera 7.0-7.1x does not support dynamic CSS. But only support dynamic import CSS.
        var styleSheet = CSSOM_getStyleSheet( p_DOM_insertStyleElement( p_head, { media : opt_media }, cssText ) );

        if( styleSheet ){
            /* return */ CSSOM_styleSheets[ opt_media || 'all' ] = styleSheet;
        };
    };
};
