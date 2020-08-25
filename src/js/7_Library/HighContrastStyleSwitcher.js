/*
 * Original:
 *   Detecting if images are disabled in browsers > Checking for Windows High Contrast
 *   https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 */
var HighContrastStyleSwitcher_elmStyle;

/**
 * @type {?function()|null}
 */
var HighContrastStyleSwitcher_init = function(){
    HighContrastStyleSwitcher_init = null;

    HighContrastStyleSwitcher_elmStyle = DOM_createThenAdd(
        g_head, 'link',
        {
            type  : 'text/css',
            rel   : 'stylesheet',
            media : 'screen',
            href  : g_assetUrl + '/' + WEB_DOC_BASE_DEFINE_HC_MODE_CSS_DIR + '/' + g_cssName
        }
    );

    if( g_cssTransformName || ( 5.5 <= g_Trident && g_Trident < 9 && g_iefilterEnabled ) ){
        DOM_addClassName( g_body, 'jsCanRotate' );
    };
};

g_listenHighContrustModeChange(
    function( highContrustState ){
        if( highContrustState && !HighContrastStyleSwitcher_elmStyle ){
            HighContrastStyleSwitcher_init && HighContrastStyleSwitcher_init();
        } else {
            highContrustState ? DOM_appendChild( g_head, HighContrastStyleSwitcher_elmStyle ) : DOM_remove( HighContrastStyleSwitcher_elmStyle );
        };
    }
);