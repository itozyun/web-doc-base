/** ===========================================================================
 * export to packageGlobal
 */
p_DOM_setStyle    = DOM_setStyle;
p_DOM_setCssText  = DOM_setCssText;
p_DOM_getCssText  = DOM_getCssText;
 
/** ===========================================================================
 * private
 */
function DOM_setStyle( elm, name, value ){
    if( p_Presto < 8 || p_Trident < 5.5 ){
        name = m_toCamelCase( name );
    };
    elm.style[ name ] = value;
};

function DOM_setCssText( elm, cssText ){
    var _cssText, i = -1, styles, style, propertyName, nameAndValue;

    if( p_Trident < 5.5 ){ // IE5 : cssText では SidebarFixer が scroll イベントで動かない
        if( _cssText = DOM_getCssText( elm ) ){
            // elm.removeAttribute( 'style' ) はブラクラ, elm.setAttribute( 'style', '' ) は不完全
            styles = _cssText.split( ';' );
            while( style = styles[ ++i ] ){
                DOM_setStyle( elm, style.split( ':' )[ 0 ], '' ); // TODO : toCamelCase
            };
        };
        if( cssText ){
            i = -1;
            styles = cssText.split( ';' );
            while( style = styles[ ++i ] ){
                propertyName = style.split( ':' )[ 0 ];
                DOM_setStyle( elm, propertyName, style.substr( propertyName.length + 1 ) ); // IE の filter には : を含むので propertyName[ 1 ] とはしない。例 filter:progid:DXImageTransform.Microsoft.Shadow()
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

function DOM_getCssText( elm ){
    if( p_Trident < 5.5 ){
        return elm.style.cssText.toLowerCase();
    } else {
        return elm.style.cssText;
    };
};