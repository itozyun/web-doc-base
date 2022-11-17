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
    var i = -1, styles, style, nameAndValue;

    if( p_Trident < 5.5 ){ // IE5 : cssText では SidebarFixer が scroll イベントで動かない
        elm.setAttribute( 'style', '' ); // elm.removeAttribute( 'style' ) はブラクラ
        if( cssText ){
            styles = cssText.split( ';' );

            while( style = styles[ ++i ] ){ // styles.shift() は IE5 で未実装の為、処理が遅い
                nameAndValue = style.split( ':' );
                DOM_setStyle( elm, nameAndValue[ 0 ], style.substr( nameAndValue[ 0 ].length + 1 ) ); // IE の filter には : を含むので nameAndValue[ 1 ] とはしない。例 filter:progid:DXImageTransform.Microsoft.Shadow()
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
        DOM_setStyle( elm, 'cssText', cssText );
    };
};