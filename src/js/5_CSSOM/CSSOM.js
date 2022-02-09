
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

/**
 * @typedef {{
 *   _media     : (string|undefined),
 *   _index     : number,
 *   isFallback : boolean
 * }}
 */
var StyleSheetFallback;

/**
 * @typedef {{
 *   _rawSheet : (CSSStyleSheet|StyleSheet|StyleSheetFallback),
 *   _elmOwner : HTMLStyleElement,
 *   _cssRules : Array.<CSSRuleInternal>
 * }}
 */
var StyleSheetInternal;

/**
 * @typedef {{
 *   selectorTextOrAtRule : string,
 *   urlOrStyle           : (string|Object),
 *   _elmFallback         : (HTMLStyleElement|HTMLLinkElement|undefined),
 *   _indexStart          : (number|undefined),
 *   _indexEnd            : (number|undefined)
 * }}
 */
var CSSRuleInternal;

/** @type {Array.<StyleSheetInternal>} */
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

function CSSOM_renumber( cssRules, indexStart ){
    var l = cssRules.length,
        i = indexStart, cssRule, offset;

    for( ; i < l; ++i ){
        cssRule = cssRules[ i ];
        if( !cssRule._elmFallback ){
            offset = cssRule._indexEnd - cssRule._indexStart;
            cssRule._indexStart = indexStart;
            cssRule._indexEnd   = indexStart + offset;
            indexStart += 1 + offset;
        };
    };
};

var CSSOM_USE_DATAURI_FALLBACK     = p_Gecko < 1 || // Gecko 0.9.4.1, 0.9.6, 0.9.7 で動作
                                     8 <= p_Presto && p_Presto < 9;
var CSSOM_USE_TEXTCONTENT_FALLBACK = 7.2 <= p_Presto && p_Presto < 8;

var CSSOM_HAS_STYLESHEET_OBJECT = !!p_Trident ||
    ( !CSSOM_USE_DATAURI_FALLBACK && !CSSOM_USE_TEXTCONTENT_FALLBACK ) && (function(){ // p_Gecko < 1 でここに入らない!
    var elmStyle = p_DOM_insertElement( p_html, 'style' ),
        result = !!CSSOM_getStyleSheet( elmStyle );

    if( DEFINE_WEB_DOC_BASE__DEBUG && result ){
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

var CSSOM_HAS_STYLESHEET_WITH_PATCH = !CSSOM_HAS_STYLESHEET_OBJECT && p_WebKit &&
    ( !CSSOM_USE_DATAURI_FALLBACK && !CSSOM_USE_TEXTCONTENT_FALLBACK ) && (function(){ // p_Gecko < 1 でここに入らない!
    // https://amachang.hatenablog.com/entry/20070703/1183445387
    // Safari で CSSStyleSheet オブジェクトを生成する方法
    var elmStyle = p_DOM_insertElement( p_html, 'style' ),
        result;

    p_DOM_insertTextNode( elmStyle, '' );
    result = !!CSSOM_getStyleSheet( elmStyle );
    if( DEFINE_WEB_DOC_BASE__DEBUG && result ){
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

p_CSSOM_canuse = CSSOM_USE_DATAURI_FALLBACK  || CSSOM_USE_TEXTCONTENT_FALLBACK  ? 1 :
                 CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ? 2 : 0;

Debug.log( '[CSSOM] p_CSSOM_canuse : ' + p_CSSOM_canuse );

/**
 * @return {Array.<HTMLStyleElement|HTMLLinkElement>}
 */
function CSSOM_getStyleSheetElementList(){
    var styleSheets = document.styleSheets,
        elementList = [],
        i = 0, j = -1, l, allElements, elm, tag;

    if( styleSheets ){
        for( l = styleSheets.length; i < l; ++i ){
            if( p_Chromium < 2 ||              // Windows Chrome 1.0.154 WebKit 525.19, DOM ツリーから抜いた <link> が存在する!
                p_Windows && p_WebKit < 526 ){ // Windows Safari 3.2.3   WebKit 525.29, 同上
                elm = CSSOM_getOwnerNode( styleSheets[ i ] );
                elm.parentNode && ( elementList[ i ] = elm );
            } else {
                elementList[ i ] = CSSOM_getOwnerNode( styleSheets[ i ] );
            };
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
 * @param {HTMLStyleElement|HTMLLinkElement} elm
 * @return {CSSStyleSheet|StyleSheet}
 */
function CSSOM_getStyleSheet( elm ){
    return elm.styleSheet || elm.sheet;
};

/**
 * @param {CSSStyleSheet|StyleSheet} styleSheet
 * @return {CSSRuleList}
 */
function CSSOM_getCssRules( styleSheet ){
    return p_Trident < 9 ? styleSheet.rules : styleSheet.cssRules; // ie11 長さ0 の rules が存在する
};

/**
 * @param {CSSStyleSheet|StyleSheet} styleSheet
 * @return {HTMLStyleElement|HTMLLinkElement}
 */
function CSSOM_getOwnerNode( styleSheet ){
    return /** @type {HTMLStyleElement|HTMLLinkElement} */ (styleSheet.owningElement || styleSheet.ownerNode);
};

/** CSSOM モジュールで動的に操作する StyleSheet インスタンスを生成します
 * 
 * @param {string=} opt_media 
 * @param {number=} opt_index
 * @return {CSSStyleSheet|StyleSheet|StyleSheetFallback|undefined}
 */
function CSSOM_createStyleSheet( opt_media, opt_index ){
    var elements  = CSSOM_getStyleSheetElementList(),
        length    = elements.length,
        index     = 0 <= opt_index && opt_index < length ? opt_index : length,
        elmBefore = elements[ index - 1 ],
        elmAfter  = elements[ index ],
        elmStyle, styleSheet;

    if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
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
    } else if( CSSOM_USE_DATAURI_FALLBACK || CSSOM_USE_TEXTCONTENT_FALLBACK ){
        // For Opera 7.2x~8.x and other browsers. Opera 7.0-7.1x does not support dynamic CSS. But only support dynamic import CSS.
        styleSheet = { _media : opt_media, _index : index, isFallback : true };
    };

    if( styleSheet ){
        CSSOM_styleSheetDataList.push( {
            _rawSheet : styleSheet,
            _elmOwner : elmStyle,
            _cssRules : []
        } );
        return styleSheet;
    };
};

/** p_CSSOM_createStyleSheet() 経由で生成した StyleSheet インスタンスを削除します。
 * 
 * @param {CSSStyleSheet|StyleSheet|StyleSheetFallback} styleSheet
 */
function CSSOM_deleteStyleSheet( styleSheet ){
    var data     = CSSOM_getDataByStyleSheet( styleSheet ),
        cssRules = data._cssRules,
        i        = cssRules.length,
        cssRule;

    data._elmOwner && p_DOM_remove( data._elmOwner );

    for( ; cssRule = cssRules[ --i ]; ){
        if( cssRule._elmFallback ){
            p_DOM_remove( cssRule._elmFallback );
        };
    };
    CSSOM_styleSheetDataList.splice( CSSOM_styleSheetDataList.indexOf( data ), 1 );
};

/** p_CSSOM_createStyleSheet() 経由で生成した StyleSheet インスタンスにルールを追加します。
 *  (a)font-face, (a)import の可否はブラウザによって異なります。(a)page は未実装。
 *
 * @param {CSSStyleSheet|StyleSheet|StyleSheetFallback} styleSheet
 * @param {string} selectorTextOrAtRule
 * @param {Object|string} urlOrStyle
 * @param {number=} opt_ruleIndex
 * @return {number} ruleIndex
 */
function CSSOM_insertRuleToStyleSheet( styleSheet, selectorTextOrAtRule, urlOrStyle, opt_ruleIndex ){
    var data       = CSSOM_getDataByStyleSheet( styleSheet ),
        elmOwner   = data._elmOwner,
        cssRules   = data._cssRules,
        isImport   = selectorTextOrAtRule === '@import',
        isPage     = selectorTextOrAtRule === '@page',
        isFontFace = selectorTextOrAtRule === '@font-face',
        length     = cssRules.length,
        importLength, i, ruleIndex, styles = '', cssText,
        property, newCSSRule, rawCSSRules, totalRules, nextSibling, elmStyle;

    // @import の数を数える
    if( styleSheet.imports ){
        importLength = styleSheet.imports.length;
    } else {
        for( i = 0; i < length; ++i ){
            if( cssRules[ i ].selectorTextOrAtRule !== '@import' /* || cssRules[ i ].selectorTextOrAtRule !== '@charset' */ ){
                break;
            };
        };
        importLength = i;
    };

    if( isImport ){
        ruleIndex = 0 <= opt_ruleIndex && opt_ruleIndex < importLength ? opt_ruleIndex : importLength;
        cssText   = selectorTextOrAtRule + ' "' + urlOrStyle + '"';
    } else {
        ruleIndex = importLength <= opt_ruleIndex && opt_ruleIndex < length ? opt_ruleIndex : length;
        for( property in urlOrStyle ){
            styles += ';' + property + ':' + urlOrStyle[ property ];
        };
        styles  = styles.substr( 1 );
        cssText = selectorTextOrAtRule + '{' + styles + '}';
        if( 6 <= p_Trident && isFontFace ){
            ruleIndex = length; // ruleIndex を無視する
        };
    };

    newCSSRule = { selectorTextOrAtRule : selectorTextOrAtRule, urlOrStyle : urlOrStyle, _indexStart : ruleIndex, _indexEnd : ruleIndex };

    if( p_Trident < 9 ){ // Firefox, Safari 3.2.3(webKit 525.29) は addRule insertRule 両方存在する
        rawCSSRules = styleSheet.rules; // <= CSSOM_getCssRules( styleSheet );
        totalRules  = rawCSSRules.length;
        if( isFontFace ){
            // http://d.hatena.ne.jp/miya2000/20070327/p0
            //   最初に style でないノードが無いと style が生成されない
            elmStyle = document.createElement( 'div' );
            elmStyle.innerHTML = '_<style type="text/css"' + ( styleSheet.media ? ' media="' + styleSheet.media + '"' : '' ) + '>' + cssText + '</style>';
            elmStyle = elmStyle.lastChild;
            if( nextSibling = elmOwner.nextSibling ){
                p_DOM_getParentNode( elmOwner ).insertBefore( elmStyle, nextSibling );
            } else {
                p_DOM_getParentNode( elmOwner ).appendChild( elmStyle );
            };
            newCSSRule._elmFallback = elmStyle;
        } else {
            if( isImport ){
                styleSheet.addImport( /** @type {string} */ (urlOrStyle), ruleIndex );
            } else if( 5.5 <= p_Trident && isPage ){
                // styleSheet.addPageRule( selectorTextOrAtRule, styles, ruleIndex );
            } else {
                styleSheet.addRule( selectorTextOrAtRule, styles, ruleIndex /* - importLength */ );
            };
            // IE8 マルチセレクターは分割して登録される
            // IE7- マルチセレクターは、引数が無効です。
            newCSSRule._indexEnd = ruleIndex + ( rawCSSRules.length - totalRules - 1 );
            if( ( rawCSSRules.length - totalRules ) === 0 ){ // @font-face{..} は styleSheet.cssText には存在するが rules には存在しない
                Debug.log( '[CSSOM] rule追加に失敗! ' + cssText );
                return -1;
            };
            Debug.log( '[CSSOM] rules.length の増分' + ( rawCSSRules.length - totalRules ) );
        };
    } else if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
        if( ( p_Windows && p_WebKit || p_Chromium < 28 ) && isImport ){
            // .insertRule を使うと SyntaxError: DOM Exception 12: An invalid or illegal string was specified.
            //   Windows + WebKit で起きる問題の模様
            //
            //   1. Webkit 528(Safari 4.0 beta, February 24, 2009) では .insertRule + @import が使える模様。Window 版 WebKit の問題にかもしれない。
            //       -> https://bugs.webkit.org/show_bug.cgi?id=38771 IE9 test failure: "HIERARCHY_REQUEST_ERR raised if @import rule inserted after a regular rule"
            //       -> https://bugs.webkit.org/show_bug.cgi?id=56981 CSSStyleSheet#insertRule doesn't work well with imported stylesheets
            //   2. Iron 27 で問題発生. 28 では正常。ちなみに 28 以降は Blink に分岐する。27 の Webkit は 537 で Safari 6.1 相当。
            //   3. Windows Safari 5 で問題発生。
            //   4. Windows Lunascape Webkit 537.21 (Safari 6.1 相当)で問題発生。
            //
            // Safari の WebKit version について
            //   https://en.wikipedia.org/wiki/Safari_version_history#Windows
            newCSSRule._elmFallback = p_DOM_insertElementAfter(
                elmOwner,
                'link',
                { href : urlOrStyle, rel : 'stylesheet', type : 'text/css' } 
            );
        } else if( p_CSSOM_FAIL_TO_INSERT_FONTFACE_RULE && isFontFace ){
            // WebFont 非対応ブラウザではエラーが起るので、ここには入らない!
            elmStyle = newCSSRule._elmFallback = p_DOM_insertElementAfter(
                elmOwner,
                'style',
                { type : 'text/css', media : styleSheet.media }
            );
            elmStyle.innerText = cssText; // https://stackoverflow.com/questions/2710284/controlling-css-with-javascript-works-with-mozilla-chrome-however-not-with-ie
        /* } else if( isFontFace && ( p_Gecko && !p_FirefoxGte35 ) ){ // Firefox 3.0.9 でエラー
            styleSheet.insertRule( 'z{a:0}', ruleIndex );
            CSSOM_getCssRules( styleSheet )[ ruleIndex ].cssText = cssText; */
        } else {
            styleSheet.insertRule( cssText, ruleIndex ); // TODO Trident 9 以降のマルチセレクターの扱いは?
        };
    };

    cssRules.splice( ruleIndex, 0, newCSSRule );

    if( CSSOM_USE_DATAURI_FALLBACK || CSSOM_USE_TEXTCONTENT_FALLBACK ){
        CSSOM_commitUpdatesToStyleSheetElement( /** @type {StyleSheetFallback} */ (styleSheet) );
    };
    CSSOM_renumber( cssRules, ruleIndex );

    return ruleIndex;
};

/** p_CSSOM_insertRuleToStyleSheet() 経由で追加したルールを削除します。
 *
 * @param {CSSStyleSheet|StyleSheet|StyleSheetFallback} styleSheet
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

        if( targetRule._elmFallback ){
            p_DOM_remove( targetRule._elmFallback );
        } else {
            CSSOM_renumber( cssRules, ruleIndex );
            if( CSSOM_USE_DATAURI_FALLBACK || CSSOM_USE_TEXTCONTENT_FALLBACK ){
                CSSOM_commitUpdatesToStyleSheetElement( /** @type {StyleSheetFallback} */ (styleSheet) );
            } else if( p_Trident < 11 ){
                // indexStart indexEnd が異なれば、その間を removeRule
                for( ; indexStart <= indexEnd; --indexEnd ){
                    styleSheet.removeRule( indexEnd );
                };
            } else {
                styleSheet.deleteRule( indexStart );
            };
        };
    };
    return !!targetRule;
};

/** p_CSSOM_createStyleSheet() 経由で生成した StyleSheet インスタンスのルールにスタイルを追加します。
 *
 * @param {CSSStyleSheet|StyleSheet|StyleSheetFallback} styleSheet
 * @param {number} ruleIndex
 * @param {string} propertyOrURL
 * @param {string|number|boolean=} opt_value
 */
function CSSOM_setStyleOfRule( styleSheet, ruleIndex, propertyOrURL, opt_value ){
    var data       = CSSOM_getDataByStyleSheet( styleSheet ),
        cssRules   = data._cssRules,
        targetRule = cssRules[ ruleIndex ],
        indexStart = targetRule._indexStart,
        indexEnd   = targetRule._indexEnd,
        rawRules;

    if( targetRule ){
        // TODO @font-face
        if( targetRule.selectorTextOrAtRule === '@import' ){
            targetRule.urlOrStyle = propertyOrURL;
            if( CSSOM_USE_DATAURI_FALLBACK || CSSOM_USE_TEXTCONTENT_FALLBACK ){
                CSSOM_commitUpdatesToStyleSheetElement( /** @type {StyleSheetFallback} */ (styleSheet) );
            } else if( targetRule._elmFallback ){
                p_DOM_setAttribute( targetRule._elmFallback, 'href', propertyOrURL );
            } else if( p_Trident < 9 ){
                styleSheet.addImport( propertyOrURL, indexStart );
                styleSheet.removeRule( indexStart + 1 );
            } else {
                styleSheet.insertRule( targetRule.selectorTextOrAtRule + '{' + propertyOrURL + '}', indexStart );
                styleSheet.deleteRule( indexStart + 1 );
            };
        } else {
            targetRule.urlOrStyle[ propertyOrURL ] = opt_value;
            if( CSSOM_USE_DATAURI_FALLBACK || CSSOM_USE_TEXTCONTENT_FALLBACK ){
                CSSOM_commitUpdatesToStyleSheetElement( /** @type {StyleSheetFallback} */ (styleSheet) );
            } else if( p_Trident < 11 ){
                rawRules = CSSOM_getCssRules( /** @type {CSSStyleSheet|StyleSheet} */ (styleSheet) );
                // indexStart indexEnd が異なれば、その間を removeRule
                for( ; indexStart <= indexEnd; --indexEnd ){
                    rawRules[ indexEnd ].style[ propertyOrURL ] = '' + opt_value;
                };
            } else {
                rawRules = styleSheet.cssRules; // <= CSSOM_getCssRules( styleSheet );
                rawRules[ indexStart ].style[ propertyOrURL ] = '' + opt_value;
            };
        };
    };
};

/** p_CSSOM_createStyleSheet() 経由で生成した StyleSheet インスタンスのルールのスタイル値を取得します。
 *
 * @param {CSSStyleSheet|StyleSheet|StyleSheetFallback} styleSheet
 * @param {number} ruleIndex
 * @param {string} property
 * @return {string}
 */
function CSSOM_getRawValueOfRule( styleSheet, ruleIndex, property ){
    var data       = CSSOM_getDataByStyleSheet( styleSheet ),
        targetRule = data._cssRules[ ruleIndex ],
        rawRule, ret;

    if( targetRule ){
        if( targetRule.selectorTextOrAtRule === '@import' ){
            ret = targetRule.urlOrStyle;
        } else if( CSSOM_HAS_STYLESHEET_OBJECT || CSSOM_HAS_STYLESHEET_WITH_PATCH ){
            if( DEFINE_WEB_DOC_BASE__DEBUG ){
                Debug.log( '[CSSOM] CSSOM_getRawValueOfRule : ' + rawRule + ' ' + CSSOM_getCssRules( /** @type {CSSStyleSheet|StyleSheet} */ (styleSheet) ).length + ' ' + targetRule._indexStart );
            };
            rawRule = CSSOM_getCssRules( /** @type {CSSStyleSheet|StyleSheet} */ (styleSheet) )[ targetRule._indexStart ];
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

/** CSSOM_insertRuleToStyleSheet(), CSSOM_setStyleOfRule() 経由で生成した StyleSheet インスタンスのルールの index を取得します。
 *
 * @param {CSSStyleSheet|StyleSheet|StyleSheetFallback} styleSheet
 * @param {string} selectorTextOrAtRule
 * @param {Object|string=} opt_urlOrStyle
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

/** CSSOM_insertRuleToStyleSheet(), CSSOM_setStyleOfRule() 経由で生成した StyleSheet インスタンスのルールの index を取得します。
 *
 * @param {CSSStyleSheet|StyleSheet|StyleSheetFallback} styleSheet
 * @param {string} selectorTextOrAtRule
 * @param {Object|string=} opt_urlOrStyle
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

    /**
     * @param {StyleSheetFallback} styleSheet 
     */
    function CSSOM_commitUpdatesToStyleSheetElement( styleSheet ){
        var data      = CSSOM_getDataByStyleSheet( styleSheet ),
            cssRules  = data._cssRules,
            elmOwner  = data._elmOwner,
            index     = styleSheet._index,
            elements  = CSSOM_getStyleSheetElementList(),
            elmBefore = elements[ index - 1 ],
            elmAfter  = elements[ index ],
            cssText   = [],
            i = - 1, j = -1, tag = 'style',
            attr = { type : 'text\/css', media : data._media },
            rule, selectorTextOrAtRule, urlOrStyle, styles, property;

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

        if( !elmOwner ){
            if( elmAfter ){
                elmOwner = p_DOM_insertElementBefore( elmAfter, tag, attr, cssText );
            } else if( elmBefore ){
                elmOwner = p_DOM_insertElementAfter( elmBefore, tag, attr, cssText );
            } else {
                elmOwner = p_DOM_insertElement( p_head, tag, attr, cssText );
            };
            data._elmOwner = elmOwner;
        } else {
            // Opera 7.2~7.5 に↓は反映されない．Opera 8 の Data URI 同じ。<- TODO Gecko 0.9.x は?
            //   elmOwner.innerHTML = elmOwner.textContent = elmOwner.text = cssText;
            data._elmOwner = p_DOM_insertElementAfter( elmOwner, tag, attr, cssText ); // TODO replaceElement ?
            p_DOM_remove( elmOwner );
        };
    };