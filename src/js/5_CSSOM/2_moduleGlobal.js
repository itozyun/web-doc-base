var CSSOM_UNSUPPORTED              = p_Gecko && ua.conpare( p_engineVersion, '0.9.1' ) < 0 ||
                                     p_Presto < 7.2;

var CSSOM_USE_DATAURI_FALLBACK     = !CSSOM_UNSUPPORTED && p_Gecko < 1 || // Gecko 0.9.1~0.9.9
                                     8 <= p_Presto && p_Presto < 9;
var CSSOM_USE_TEXTCONTENT_FALLBACK = !CSSOM_UNSUPPORTED && p_Presto < 8;

var Base64_btoa;

var CSSOM_HAS_STYLESHEET_OBJECT    = !p_Trident &&
        ( !CSSOM_UNSUPPORTED && !CSSOM_USE_DATAURI_FALLBACK && !CSSOM_USE_TEXTCONTENT_FALLBACK ) && (function(){ // p_Gecko < 1 でここに入らない!
        var elmStyle = p_DOM_insertElement( p_html, 'style' ),
            result = !!m_CSSOM_getStyleSheet( elmStyle );

        if( DEFINE_WEB_DOC_BASE__DEBUG && result ){
            Debug.log( '[CSSOM] CSSStyleSheet @insertRule : ' + !!m_CSSOM_getStyleSheet( elmStyle ).insertRule );
            Debug.log( '[CSSOM] CSSStyleSheet @addRule : ' + !!m_CSSOM_getStyleSheet( elmStyle ).addRule );
            Debug.log( '[CSSOM] CSSStyleSheet @cssRules : ' + !!m_CSSOM_getStyleSheet( elmStyle ).cssRules );
            Debug.log( '[CSSOM] CSSStyleSheet @rules : ' + !!m_CSSOM_getStyleSheet( elmStyle ).rules );
            Debug.log( '[CSSOM] CSSStyleSheet @cssText : ' + ( m_CSSOM_getStyleSheet( elmStyle ).cssText === '' ) );
        };
        p_DOM_remove( elmStyle );
        return result;
    })();

Debug.log( '[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : ' + CSSOM_HAS_STYLESHEET_OBJECT );

var CSSOM_HAS_STYLESHEET_WITH_PATCH = !CSSOM_HAS_STYLESHEET_OBJECT && p_WebKit &&
    ( !CSSOM_UNSUPPORTED && !CSSOM_USE_DATAURI_FALLBACK && !CSSOM_USE_TEXTCONTENT_FALLBACK ) && (function(){ // p_Gecko < 1 でここに入らない!
    // https://amachang.hatenablog.com/entry/20070703/1183445387
    // Safari で CSSStyleSheet オブジェクトを生成する方法
    var elmStyle = p_DOM_insertElement( p_html, 'style' ),
        result;

    p_DOM_insertTextNode( elmStyle, '' );
    result = !!m_CSSOM_getStyleSheet( elmStyle );
    if( DEFINE_WEB_DOC_BASE__DEBUG && result ){
        Debug.log( '[CSSOM] CSSStyleSheet @insertRule : ' + !!m_CSSOM_getStyleSheet( elmStyle ).insertRule );
        Debug.log( '[CSSOM] CSSStyleSheet @addRule : ' + !!m_CSSOM_getStyleSheet( elmStyle ).addRule );
        Debug.log( '[CSSOM] CSSStyleSheet @cssRules : ' + !!m_CSSOM_getStyleSheet( elmStyle ).cssRules );
        Debug.log( '[CSSOM] CSSStyleSheet @rules : ' + !!m_CSSOM_getStyleSheet( elmStyle ).rules );
        Debug.log( '[CSSOM] CSSStyleSheet @cssText : ' + ( m_CSSOM_getStyleSheet( elmStyle ).cssText === '' ) );
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
 * @param {!HTMLStyleElement|!HTMLLinkElement} elm
 * @return {!CSSStyleSheet|!StyleSheet}
 */
function m_CSSOM_getStyleSheet( elm ){
    return /** @type {!CSSStyleSheet|!StyleSheet} */ (elm.styleSheet || elm.sheet);
};