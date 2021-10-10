
/** ===========================================================================
 * export to packageGlobal
 */
p_CSSOM_getStyleSheetElementList = CSSOM_getStyleSheetElementList;
p_CSSOM_createStyleSheet         = CSSOM_createStyleSheet;
p_CSSOM_deleteStyleSheet         = CSSOM_deleteStyleSheet;
p_CSSOM_insertRuleToStyleSheet   = CSSOM_insertRuleToStyleSheet;
p_CSSOM_deleteRuleFromStyleSheet = CSSOM_deleteRuleFromStyleSheet;
p_CSSOM_setStyleOfRule           = CSSOM_setStyleOfRule;
p_CSSOM_getRawValueOfRule        = CSSOM_getRawValueOfRule;
p_CSSOM_getIndexOfRule           = CSSOM_getIndexOfRule;
p_CSSOM_getLastIndexOfRule       = CSSOM_getLastIndexOfRule;


/** ===========================================================================
 * private
 */
// javascriptでスタイルを追加する方法
//   https://qiita.com/sainome_7/items/d3f6afa8ffee354e6e36

/** @type {Array.<Object>} */
var CSSOM_styleSheetDataList = [];
    function CSSOM_getDataByStyleSheet( styleSheet ){
        var i = CSSOM_styleSheetDataList.length,
            data;

        for( ; i; ){
            data = CSSOM_styleSheetDataList[ --i ];
            if( data._rawSheet === styleSheet ){
                return data;
            };
        };
    };

    function CSSOM_renumber( cssRules, start ){
        var l = cssRules.length,
            i = start,
            indexStart = i, rule, offset;

        for( ; i < l; ++i ){
            rule = cssRules[ i ];
            offset = rule._indexEnd - rule._indexStart;
            rule._indexStart = indexStart;
            rule._indexEnd   = indexStart + offset;
            indexStart += 1 + offset;
        };
    };

var CSSOM_USE_DATAURI_FALLBACK = p_Gecko < 1 || // Gecko 0.9.4.1, 0.9.6, 0.9.7 で動作 styleSheet は存在するが insertRule が無い
                                 8 <= p_Presto && p_Presto < 9;

var CSSOM_HAS_STYLESHEET_OBJECT = !!p_Trident || !CSSOM_USE_DATAURI_FALLBACK && !( p_Presto < 9 ) && (function(){
    var elmStyle = p_DOM_insertElement( p_html, 'style' ),
        result = !!CSSOM_getStyleSheet( elmStyle );

    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        Debug.log( '[CSSOM] CSSStyleSheet @insertRule : ' + !!CSSOM_getStyleSheet( elmStyle ).insertRule );
        Debug.log( '[CSSOM] CSSStyleSheet @addRule : ' + !!CSSOM_getStyleSheet( elmStyle ).addRule );
        Debug.log( '[CSSOM] CSSStyleSheet @cssRules : ' + !!CSSOM_getStyleSheet( elmStyle ).cssRules );
        Debug.log( '[CSSOM] CSSStyleSheet @rules : ' + !!CSSOM_getStyleSheet( elmStyle ).rules );
        Debug.log( '[CSSOM] CSSStyleSheet @cssText : ' + ( CSSOM_getStyleSheet( elmStyle ).cssText === '' ) );
    };
    p_DOM_remove( elmStyle );
    return result;
})();

Debug.log( '[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : ' + CSSOM_HAS_STYLESHEET_OBJECT );

var CSSOM_HAS_STYLESHEET_WITH_PATCH = !CSSOM_USE_DATAURI_FALLBACK && !CSSOM_HAS_STYLESHEET_OBJECT && p_WebKit && (function(){
    // https://amachang.hatenablog.com/entry/20070703/1183445387
    // Safari で CSSStyleSheet オブジェクトを生成する方法
    var elmStyle = p_DOM_insertElement( p_html, 'style' ),
        result;

    p_DOM_insertTextNode( elmStyle, '' );
    result = !!CSSOM_getStyleSheet( elmStyle );
    if( DEFINE_WEB_DOC_BASE__DEBUG ){
        Debug.log( '[CSSOM] CSSStyleSheet @insertRule : ' + !!CSSOM_getStyleSheet( elmStyle ).insertRule );
        Debug.log( '[CSSOM] CSSStyleSheet @addRule : ' + !!CSSOM_getStyleSheet( elmStyle ).addRule );
        Debug.log( '[CSSOM] CSSStyleSheet @cssRules : ' + !!CSSOM_getStyleSheet( elmStyle ).cssRules );
        Debug.log( '[CSSOM] CSSStyleSheet @rules : ' + !!CSSOM_getStyleSheet( elmStyle ).rules );
        Debug.log( '[CSSOM] CSSStyleSheet @cssText : ' + ( CSSOM_getStyleSheet( elmStyle ).cssText === '' ) );
    };
    p_DOM_remove( elmStyle );
    return result;
})();

if( !CSSOM_HAS_STYLESHEET_OBJECT ){
    Debug.log( '[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : ' + CSSOM_HAS_STYLESHEET_WITH_PATCH );
};

/**
 * @return {Array.<Node>}
 */
function CSSOM_getStyleSheetElementList(){
    var styleSheets = document.styleSheets,
        elementList = [],
        i = 0, j = -1, l, allElements, elm, tag;

    if( styleSheets ){
        for( l = styleSheets.length; i < l; ++i ){
            elementList[ i ] = CSSOM_getOwnerNode( styleSheets[ i ] );
        };
    } else {
        allElements = p_DOM_getElementsByTagNameFromDocument( '*' ); // <link>, <style> の配列

        for( l = allElements.length; i < l; ++i ){
            elm = allElements[ i ];
            tag = p_DOM_getTagName( elm );
            if( tag === 'STYLE' || tag === 'LINK' && p_DOM_getAttribute( elm, 'type' ) === 'text/css' ){
                elementList[ ++j ] = elm;
            };
        };
    };
    return elementList;
};

/**
 * @param {Element} elm
 * @return {CSSStyleSheet|StyleSheet}
 */
function CSSOM_getStyleSheet( elm ){
    return elm.styleSheet || elm.sheet;
};

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 * @return {CSSRuleList}
 */
function CSSOM_getCssRules( styleSheet ){
    return p_Trident < 9 ? styleSheet.rules : styleSheet.cssRules; // ie11 長さ0 の rules が存在する
};

/**
 * @param {CSSStyleSheet|StyleSheet} styleSheet
 * @return {Node}
 */
function CSSOM_getOwnerNode( styleSheet ){
    return styleSheet.owningElement || styleSheet.ownerNode;
};

/**
 * 
 * @param {string|undefined=} opt_media 
 * @param {number|undefined=} opt_index
 * @return {CSSStyleSheet|StyleSheet|Object|undefined}
 */
function CSSOM_createStyleSheet( opt_media, opt_index ){
    var elements  = CSSOM_getStyleSheetElementList(),
        length    = elements.length,
        index     = 0 <= opt_index && opt_index < length ? opt_index : length,
        elmBefore = elements[ index - 1 ],
        elmAfter  = elements[ index ],
        elmStyle, styleSheet;

    if( false && p_Trident < 11 && p_Trident !== 5.5 ){  // Win XP sp3, IETester IE5.5 で確認
        styleSheet = document.createStyleSheet();
        elmStyle   = CSSOM_getOwnerNode( styleSheet );
        /* if( elmAfter ){ // 以下の操作をすると style が効かなくなる!
            p_DOM_getParentNode( elmAfter ).insertBefore( elmStyle, elmAfter );
        } else if( elmBefore ){ // 最後の直後に追加
            if( elmBefore.nextSibling ){
                p_DOM_getParentNode( elmBefore.nextSibling ).insertBefore( elmStyle, elmBefore.nextSibling );
            } else {
                p_DOM_getParentNode( elmBefore ).appendChild( elmStyle );
            };
        } else {
            p_head.appendChild( elmStyle );
        }; */
        if( opt_media ){
            p_DOM_setAttribute( styleSheet.owningElement, 'media', opt_media );
            p_DOM_setAttribute( styleSheet.owningElement, 'id', 'CSSOM-' + index );
        };
    } else if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
        if( elmAfter ){
            elmStyle = p_DOM_insertElementBefore( elmAfter, 'style' );
        } else if( elmBefore ){
            elmStyle = p_DOM_insertElementAfter( elmBefore, 'style' );
        } else {
            elmStyle = p_DOM_insertElement( p_head, 'style' );
        };
        if( CSSOM_HAS_STYLESHEET_WITH_PATCH ){
            // https://davidwalsh.name/add-rules-stylesheets
            //   WebKit hack :(
            p_DOM_insertTextNode( elmStyle, '' );
        };
        styleSheet = CSSOM_getStyleSheet( elmStyle );

        if( opt_media ){
            p_DOM_setAttribute( elmStyle, 'media', opt_media );
        };
    } else if( !( p_Presto < 7.2 ) ){
        // For Opera 7.2x~8.x and other browsers. Opera 7.0-7.1x does not support dynamic CSS. But only support dynamic import CSS.
        styleSheet = { _media : opt_media, _index : index, isFallback : true };
    };

    CSSOM_styleSheetDataList.push( {
        _rawSheet : styleSheet,
        _elmOwner : elmStyle,
        _cssRules : []
    } );
    return styleSheet;
};

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 */
 function CSSOM_deleteStyleSheet( styleSheet ){
    var data = CSSOM_getDataByStyleSheet( styleSheet );

    data._elmOwner && p_DOM_remove( data._elmOwner );

    CSSOM_styleSheetDataList.splice( CSSOM_styleSheetDataList.indexOf( data ), 1 );
};

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 * @param {string} selectorTextOrAtRule
 * @param {Object|string} urlOrStyle
 * @param {number|undefined=} opt_ruleIndex
 * @return {number}
 */
function CSSOM_insertRuleToStyleSheet( styleSheet, selectorTextOrAtRule, urlOrStyle, opt_ruleIndex ){
    var data       = CSSOM_getDataByStyleSheet( styleSheet ),
        cssRules   = data._cssRules,
        isImport   = selectorTextOrAtRule === '@import',
        isPage     = selectorTextOrAtRule === '@page',
        isFontFace = selectorTextOrAtRule === '@font-face',
        length     = cssRules.length,
        importLength, i, ruleIndex, styles = '', cssText,
        property, newCSSRule, rawCSSRiles, totalRules;

    // @import の数を数える
    if( styleSheet.imports ){
        importLength = styleSheet.imports.length;
    } else {
        for( i = 0; i < length; ++i ){
            if( cssRules[ i ].selectorTextOrAtRule !== '@import' ){
                break;
            };
        };
        importLength = i;
    };

    if( isImport ){
        ruleIndex = 0 <= opt_ruleIndex && opt_ruleIndex < importLength ? opt_ruleIndex : importLength;
        cssText   = selectorTextOrAtRule + ' "' + urlOrStyle + '"';
    } else {
        ruleIndex   = importLength <= opt_ruleIndex && opt_ruleIndex < length ? opt_ruleIndex : length;
        for( property in urlOrStyle ){
            styles += ';' + property + ':' + urlOrStyle[ property ];
        };
        styles  = styles.substr( 1 );
        cssText = selectorTextOrAtRule + '{' + styles + '}';
        if( 5.5 <= p_Trident && isFontFace ){
            ruleIndex = length; // ruleIndex を無視する
        };
    };

    newCSSRule = { selectorTextOrAtRule : selectorTextOrAtRule, urlOrStyle : urlOrStyle, _indexStart : ruleIndex, _indexEnd : ruleIndex };

    if( p_Trident < 9 ){ // Firefox にも .addRule が存在する, Safari 3.2.3(webKit 525.29) は addRule insertRule 両方存在する, @font-face には .cssText を使う
        rawCSSRiles = styleSheet.rules; // CSSOM_getCssRules( styleSheet );
        totalRules  = rawCSSRiles.length;
        if( isImport ){
            styleSheet.addImport( urlOrStyle, ruleIndex );
        } else if( 5.5 <= p_Trident && isPage ){
            // addPageRule addPageRule(selector, rule, ruleIndex)
        } else if( p_Trident < 6 && isFontFace ){ // IE5.5 クラッシュする!
            return -1;
        } else if( 6 <= p_Trident && isFontFace ){
            styleSheet.cssText += cssText; // .addRule を使うと SCRIPT87: 引数が無効です。
        } else {
            styleSheet.addRule( selectorTextOrAtRule, styles, ruleIndex /* - importLength */ );
        };
        // セレクターを分割する独自ルールによって rules.length は2以上増える事がある
        newCSSRule._indexEnd = ruleIndex + ( rawCSSRiles.length - totalRules - 1 );
        if( ( rawCSSRiles.length - totalRules ) === 0 ){ // @font-face{..} は styleSheet.cssText には存在するが rules には存在しない
            Debug.log( '[CSSOM] rule追加に失敗! ' + cssText );
            return -1;
        };
        Debug.log( '[CSSOM] rules.length の増分' + ( rawCSSRiles.length - totalRules ) );
    } else if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
        if( ( p_WebKit < 536 || p_ChromiumBase < 19 ) && isImport ){
            var elm = document.createElement( 'link' );

            elm.type = 'text/css';
            elm.rel  = 'stylesheet';
            elm.href = urlOrStyle;
            p_head.parentNode.appendChild( elm );
        } else if( ( p_WebKit < 536 || p_ChromiumBase < 19 ) && isFontFace ){
            // styleSheet.cssText += cssText; // .addRule を使うと SYNTAX_ERR : DOM Expection 12 @import の追加が出来ない!
            var elm = document.createElement( 'style' );
            // https://davidwalsh.name/add-rules-stylesheets
            //   WebKit hack :(
            p_DOM_insertTextNode( elm, '' );
            elm.textContent = cssText;
            elm.type = 'text/css';
            // elm.media = styleSheet.media;
            // p_DOM_insertElementAfter( data._elmOwner, 'style', { type : 'text/css' }, cssText );
            p_head.parentNode.appendChild( elm );
        } else if( isFontFace && ( p_Gecko && !p_FirefoxGte35 ) ){ // Firefox 3.0.9 でもエラー
            styleSheet.insertRule( 'z{a:0}', ruleIndex );
            CSSOM_getCssRules( styleSheet )[ ruleIndex ].cssText = cssText;
        } else {
            styleSheet.insertRule( cssText, ruleIndex ); // TODO Trident 9 以降のマルチセレクターの扱いは?
        };
    } else {
        CSSOM_commitUpdatesToStyleSheetElement( styleSheet );
    };

    cssRules.splice( ruleIndex, 0, newCSSRule );
    CSSOM_renumber( cssRules, ruleIndex );

    return ruleIndex;
};

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 * @param {number} ruleIndex
 * @return {boolean}
 */
function CSSOM_deleteRuleFromStyleSheet( styleSheet, ruleIndex ){
    var data       = CSSOM_getDataByStyleSheet( styleSheet ),
        cssRules   = data._cssRules,
        targetRule = cssRules[ ruleIndex ],
        indexStart = targetRule._indexStart,
        indexEnd   = targetRule._indexEnd;

    if( targetRule ){
        cssRules.splice( ruleIndex, 1 );
        CSSOM_renumber( cssRules, ruleIndex );

        if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
            CSSOM_commitUpdatesToStyleSheetElement( styleSheet );
        } else if( p_Trident < 11 ){
            // indexStart indexEnd が異なれば、その間を removeRule
            for( ; indexStart <= indexEnd; --indexEnd ){
                styleSheet.removeRule( indexEnd );
            };
        } else {
            styleSheet.deleteRule( indexStart );
        };
    };
    return !!targetRule;
};

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 * @param {number} ruleIndex
 * @param {string} property
 * @param {string|number|boolean} value
 */
function CSSOM_setStyleOfRule( styleSheet, ruleIndex, property, value ){
    var rawRules   = CSSOM_getCssRules( styleSheet ),
        data       = CSSOM_getDataByStyleSheet( styleSheet ),
        cssRules   = data._cssRules,
        targetRule = cssRules[ ruleIndex ],
        indexStart = targetRule._indexStart,
        indexEnd   = targetRule._indexEnd;

    if( targetRule ){
        targetRule.urlOrStyle[ property ] = value;
        if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
            CSSOM_commitUpdatesToStyleSheetElement( styleSheet );
        } else if( p_Trident < 11 ){
            // indexStart indexEnd が異なれば、その間を removeRule
            for( ; indexStart <= indexEnd; --indexEnd ){
                rawRules[ indexEnd ].style[ property ] = '' + value;
            };
        } else {
            rawRules[ indexStart ].style[ property ] = '' + value;
        };
    };
};

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 * @param {number} ruleIndex
 * @param {string} property
 * @return {string}
 */
function CSSOM_getRawValueOfRule( styleSheet, ruleIndex, property ){
    var data       = CSSOM_getDataByStyleSheet( styleSheet ),
        targetRule = data._cssRules[ ruleIndex ],
        rawRule, ret;

    if( targetRule ){
        if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
            rawRule = CSSOM_getCssRules( styleSheet )[ targetRule._indexStart ];
            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[CSSOM] CSSOM_getRawValueOfRule : ' + rawRule + ' ' + CSSOM_getCssRules( styleSheet ).length + ' ' + targetRule._indexStart );
            };
            ret = rawRule && rawRule.style[ toCamelcase( property ) ];
        } else {
            ret = targetRule.urlOrStyle[ property ];
        };
    };
    function toCamelcase( str ){
        var result = [],
            chars  = str.split( '' ),
            i      = 0,
            l      = chars.length,
            chr, toUpper = false;

        for( ; i < l; ++i ){
            chr = chars[ i ];
            if( chr === '-' ){
                toUpper = true;
            } else {
                if( toUpper ){
                    result[ i ] = chr.toUpperCase();
                    toUpper = false;
                } else {
                    result[ i ] = chr;
                };
            };
        };
        return result.join( '' );
    };
    return ret;
};

// JavaScriptによるCSSの操作
//   https://web.archive.org/web/20130817200734/http://bmky.net/text/note/javascript-css/
//     色を取得する場合はブラウザ毎に挙動が異なるので注意する。
//     IEは指定したまま取得できるが、Operaは色を勝手に#16進6桁に展開。
//     Firefoxに至ってはRGBフォーマットにしてしまう。
//     またFirefoxは短縮形で取得しようとすると、設定していないプロパティにデフォルト値が入った状態で返ってくるので注意する。

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 * @param {string} selectorTextOrAtRule
 * @param {string=} opt_urlOrStyle
 * @return {number}
 */
function CSSOM_getIndexOfRule( styleSheet, selectorTextOrAtRule, opt_urlOrStyle ){
    var data     = CSSOM_getDataByStyleSheet( styleSheet ),
        cssRules = data._cssRules,
        i = 0, l = cssRules.length, rule;

    for( ; i < l; ++i ) {
        rule = cssRules[ i ];
        if( rule.selectorTextOrAtRule == selectorTextOrAtRule ){
            if( opt_urlOrStyle && rule.urlOrStyle !== opt_urlOrStyle ){
                continue;
            };
            return i;
        };
    };
    return -1;
};

/**
 * @param {CSSStyleSheet|StyleSheet|Object} styleSheet
 * @param {string} selectorTextOrAtRule
 * @param {string=} opt_urlOrStyle
 * @return {number}
 */
function CSSOM_getLastIndexOfRule( styleSheet, selectorTextOrAtRule, opt_urlOrStyle ){
    var data     = CSSOM_getDataByStyleSheet( styleSheet ),
        cssRules = data._cssRules,
        i = cssRules.length - 1, rule;

    for( ; 0 <= i; --i ) {
        rule = cssRules[ i ];
        if( rule.selectorTextOrAtRule == selectorTextOrAtRule ){
            if( opt_urlOrStyle && rule.urlOrStyle !== opt_urlOrStyle ){
                continue;
            };
            break;
        };
    };
    return i;
};

    function CSSOM_commitUpdatesToStyleSheetElement( styleSheet ){
        var data      = CSSOM_getDataByStyleSheet( styleSheet ),
            cssRules  = data._cssRules,
            elmOwner  = data._elmOwner,
            index     = styleSheet._index,
            elements  = CSSOM_getStyleSheetElementList(),
            elmBefore = elements[ index - 1 ],
            elmAfter  = elements[ index ],
            cssText   = [],
            i = - 1, j = -1,
            rule, selectorTextOrAtRule, urlOrStyle, styles, property, tag = 'style', attr;

        for( ; rule = cssRules[ ++i ]; ){
            selectorTextOrAtRule = rule.selectorTextOrAtRule;
            urlOrStyle = rule.urlOrStyle;

            if( selectorTextOrAtRule === '@import' ){
                cssText[ ++j ] = selectorTextOrAtRule + ' "' + urlOrStyle + '"';
            } else {
                cssText[ ++j ] = selectorTextOrAtRule + '{';
                styles = '';
                for( property in urlOrStyle ){
                    styles += ';' + property + ':' + urlOrStyle[ property ];
                };
                cssText[ ++j ] = styles.substr( 1 ) + '}';
            };
        };
        cssText = cssText.join( '' );

        if( CSSOM_USE_DATAURI_FALLBACK ){
            cssText = 'data:text/css;charset=utf-8;base64,' + Base64_btoa( cssText );
        };

        if( !elmOwner ){
            attr = { type : 'text\/css', media : data._media };
            if( CSSOM_USE_DATAURI_FALLBACK ){
                //  Data URIs explained
                //   https://humanwhocodes.com/blog/2009/10/27/data-uris-explained/
                //   Opera 7.2+ – data URIs must not be longer than 4100 characters
                //  JavaScriptによるCSSの操作
                //   https://web.archive.org/web/20130817200734/http://bmky.net/text/note/javascript-css/

                // For Opera 8.x. Hack with data URIs.
                attr.rel  = 'stylesheet';
                attr.href = cssText;
                tag       = 'link';
                cssText   = undefined;
            };
            if( elmAfter ){
                elmOwner = p_DOM_insertElementBefore( elmAfter, tag, attr, cssText );
            } else if( elmBefore ){
                elmOwner = p_DOM_insertElementAfter( elmBefore, tag, attr, cssText );
            } else {
                elmOwner = p_DOM_insertElement( p_head, tag, attr, cssText );
            };
            data._elmOwner = elmOwner;
        } else {
            if( CSSOM_USE_DATAURI_FALLBACK ){
                p_DOM_setAttribute( elmOwner, 'href', cssText );
            } else {
                p_DOM_empty( elmOwner );
                p_DOM_insertTextNode( elmOwner, cssText );
            };
        };
    };