/** ===========================================================================
 * export to packageGlobal
 */
p_DOM_setStyle    = DOM_setStyle;
p_DOM_setCssText  = DOM_setCssText;
p_DOM_getCssText  = DOM_getCssText;
 
/** ===========================================================================
 * private
 */

/**
 * 
 * @param {!Element} elm 
 * @param {string} name 
 * @param {string} value 
 */
function DOM_setStyle( elm, name, value ){
    if( p_Presto < 8 || p_Trident < 5.5 ){
        name = p_toCamelCase( name );
    };
    elm.style[ name ] = value; // TODO cssFloat, styleFloat
};

/**
 * IE5-, Opera 7.0xで重いです、速度を重視する部分での使用は止めましょう
 * @param {!Element} elm 
 * @param {string} cssText
 */
function DOM_setCssText( elm, cssText ){
    var _cssText, i = -1, styles, style, propertyName;

    // IE5 : elm.style.cssText では SidebarFixer が scroll イベントで動かない
    // Opera 7.03 : SidebarFixer が不安定
    if( p_Trident < 5.5 || p_Presto < 7.1 ){
        if( p_Trident ){
            if( _cssText = DOM_getCssText( elm ) ){
                // elm.removeAttribute( 'style' ) はブラクラ, elm.setAttribute( 'style', '' ) は不完全
                styles = _cssText.split( ';' );
                while( style = styles[ ++i ] ){
                    DOM_setStyle( elm, style.split( ':' )[ 0 ], '' );
                };
                i = -1;
            };
        } else {
            elm.setAttribute( 'style', '' );
        };

        if( cssText ){
            styles = cssText.split( ';' );
            while( style = styles[ ++i ] ){
                propertyName = style.split( ':' )[ 0 ];
                DOM_setStyle( elm, propertyName, style.substr( propertyName.length + 1 ) );
            };
        };
    } else if( p_Presto < 9 || p_Gecko < 1 ){
        if( cssText ){
            elm.setAttribute( 'style', cssText );
        } else {
            elm.removeAttribute( 'style' );
        };
    } else {
        elm.style.cssText = cssText;
    };
};

/**
 * 
 * @param {!Element} elm 
 * @return {string}
 */
function DOM_getCssText( elm ){
    if( p_Trident < 5.5 ){
        // property が大文字のため、分解して変換する. TODO elm.getAttribute( 'style' ) は使える?
        var cssText = '';
        var styles = elm.style.cssText.split( ';' );
        var i = -1, style, propertyName;

        while( style = styles[ ++i ] ){
            propertyName = style.split( ':' )[ 0 ];
            cssText += ';' + propertyName.toLowerCase() + ':' + style.substr( propertyName.length + 1 );
        };
        return cssText.substr( 1 );
    } else {
        return elm.style.cssText;
    };
};