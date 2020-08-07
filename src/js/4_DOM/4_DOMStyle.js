function DOM_setStyle( elm, name, value ){
    elm.style[ name ] = value;
};

function DOM_setCssText( elm, cssText ){
    DOM_setStyle( elm, 'cssText', cssText );
};