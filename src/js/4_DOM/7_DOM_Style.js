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
    if( p_Presto < 9 ){
        if( cssText ){
            var styles = cssText.split( ';' ),
                style, nameAndValue;

            while( style = styles.shift() ){
                nameAndValue = style.split( ':' );
                DOM_setStyle( elm, nameAndValue[ 0 ], nameAndValue[ 1 ] );
            };
        } else {
            elm.removeAttribute( 'style' );
        };
    } else {
        DOM_setStyle( elm, 'cssText', cssText );
    };
};