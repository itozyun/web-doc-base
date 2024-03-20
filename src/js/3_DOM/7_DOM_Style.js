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
 * IE5, Opera 7.0xで重いです、速度を重視する部分での使用は止めましょう
 * @param {!Element} elm 
 * @param {string} cssText
 */
function DOM_setCssText( elm, cssText ){
    var _cssText, i = -1, styles, style, propertyName, nameAndValue;

    if( p_Trident < 5.5 ){ // IE5 : cssText では SidebarFixer が scroll イベントで動かない
        if( _cssText = DOM_getCssText( elm ) ){
            // elm.removeAttribute( 'style' ) はブラクラ, elm.setAttribute( 'style', '' ) は不完全
            styles = _cssText.split( ';' );
            while( style = styles[ ++i ] ){
                DOM_setStyle( elm, style.split( ':' )[ 0 ], '' );
            };
        };
        if( cssText ){
            i = -1;
            styles = cssText.split( ';' );
            while( style = styles[ ++i ] ){
                propertyName = style.split( ':' )[ 0 ];
                DOM_setStyle( elm, propertyName, style.substr( propertyName.length + 1 ) ); // IE の filter には : を含むので style.split( ':' )[ 1 ] とはしない。例 filter:progid:DXImageTransform.Microsoft.Shadow()
            };
        };
    } else if( p_Presto < 7.1 ){
        elm.setAttribute( 'style', '' );
        if( cssText ){
            styles = cssText.split( ';' );

            while( style = styles[ ++i ] ){
                nameAndValue = style.split( ':' );
                DOM_setStyle( elm, nameAndValue[ 0 ], nameAndValue[ 1 ] );
            };
        };
        // Opera 7.03, ↓ では SidebarFixer が不安定
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
        return elm.style.cssText.toLowerCase(); // TODO font-family:MSGothic 等も小文字になる! elm.getAttribute( 'style' ) は使える?
    } else {
        return elm.style.cssText;
    };
};