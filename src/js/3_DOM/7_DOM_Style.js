/** ===========================================================================
 * export to packageGlobal
 */
 p_DOM_setStyle    = DOM_setStyle,
 p_DOM_setCssText  = DOM_setCssText
 
/** ===========================================================================
 * private
 */
function DOM_setStyle( elm, name, value ){
    elm.style[ name ] = value;
};

function DOM_setCssText( elm, cssText ){
    var _cssText, i, styles, style, propertyName, nameAndValue;

    if( p_Trident < 5.5 ){ // IE5 : cssText では SidebarFixer が scroll イベントで動かない
        if( _cssText = elm.style.cssText ){
            // elm.setAttribute( 'style', '' ); これは不完全! // elm.removeAttribute( 'style' ) はブラクラ
            i = -1;
            styles = _cssText.toLowerCase().split( ';' );
            while( style = styles[ ++i ] ){
                DOM_setStyle( elm, style.split( ':' )[ 0 ], '' ); // TODO : toCamelCase
            };
        };
        if( cssText ){
            i = -1;
            styles = cssText.split( ';' );
            while( style = styles[ ++i ] ){ // styles.shift() は IE5 で未実装の為、処理が遅い
                propertyName = style.split( ':' )[ 0 ];
                DOM_setStyle( elm, propertyName, style.substr( propertyName.length + 1 ) ); // IE の filter には : を含むので propertyName[ 1 ] とはしない。例 filter:progid:DXImageTransform.Microsoft.Shadow()
            };
        };
    } else if( p_Presto < 7.1 ){ // ↓ では SidebarFixer が不安定
        elm.setAttribute( 'style', '' );
        if( cssText ){
            styles = cssText.split( ';' );

            while( style = styles[ ++i ] ){
                nameAndValue = style.split( ':' );
                DOM_setStyle( elm, nameAndValue[ 0 ], nameAndValue[ 1 ] );
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