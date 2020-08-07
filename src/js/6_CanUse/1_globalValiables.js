// Data URI
// image
// CSS
// Webfont, lig
//
var g_CanUse_iefilter,
    g_CanUse_imageEnabled,
    g_CanUse_contentPseudoElement,

    g_CanUse_cssTransform =
        g_Type_notUndefined( g_style[ 'transform' ] ) ? 'transform' : 
        g_Type_notUndefined( g_style[ '-o-transform' ] ) ? '-o-transform' : 
        g_Type_notUndefined( g_style[ '-ms-transform' ] ) ? '-ms-transform' : 
        g_Type_notUndefined( g_style[ '-moz-transform' ] ) ? '-moz-transform' : 
        g_Type_notUndefined( g_style[ '-webkit-transform' ] ) ? '-webkit-transform' : '',
    
    g_dataUriTest,
    g_imageTest,
    g_webFontTest;