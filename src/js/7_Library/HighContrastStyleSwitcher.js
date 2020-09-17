var HighContrastStyleSwitcher_elmStyle,
/**
 * @type {?function()|null}
 */
    HighContrastStyleSwitcher_init = function(){
        HighContrastStyleSwitcher_elmStyle = DOM_createThenAdd(
            g_head, 'link',
            {
                type  : 'text/css',
                rel   : 'stylesheet',
                media : 'screen',
                href  : g_assetUrl + WEB_DOC_BASE_DEFINE_HC_MODE_CSS_DIR + '/' + g_cssName
            }
        );

        if( g_cssTransformName || ( 5.5 <= g_Trident && g_Trident < 9 && g_iefilterEnabled ) ){
            DOM_addClassName( g_body, 'jsCanRotate' );
        };
        HighContrastStyleSwitcher_init = null;
    };

g_listenHighContrustModeChange(
    function( highContrastState ){
        if( highContrastState && !HighContrastStyleSwitcher_elmStyle ){
            HighContrastStyleSwitcher_init && HighContrastStyleSwitcher_init();
        } else {
            highContrastState ? DOM_appendChild( g_head, HighContrastStyleSwitcher_elmStyle ) : DOM_remove( HighContrastStyleSwitcher_elmStyle );
        };
    }
);