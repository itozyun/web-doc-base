function CSSOM_getStyleSheet( elm ){
    return elm.sheet || elm.styleSheet;
};

function CSSOM_getCssRules( styleSheet ){
    return ( 9 < ua[ 'Trident' ] || 9 < ua[ 'TridentMobile' ] ) ? styleSheet.cssRules : styleSheet.rules || styleSheet.cssRules;
};

