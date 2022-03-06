if( DEFINE_WEB_DOC_BASE__HIGH_CONTRAST_CSS_DIR ){
    var HighContrastStyleSwitcher_elmStyle,
    /**
     * @type {Function|undefined}
     */
        HighContrastStyleSwitcher_init = function(){
            HighContrastStyleSwitcher_elmStyle = p_DOM_insertElement(
                p_head, 'link',
                {
                    type  : 'text/css',
                    rel   : 'stylesheet',
                    media : 'screen',
                    href  : p_assetUrl +
                                p_cssDir +
                                p_screenModeDir +
                                DEFINE_WEB_DOC_BASE__HIGH_CONTRAST_CSS_DIR + '/' + p_cssName
                }
            );

            if( p_cssTransformName || ( 5.5 <= p_Trident && p_Trident < 9 && p_iefilterEnabled ) ){
                p_DOM_addClassName( p_body, 'jsCanRotate' );
            };
            HighContrastStyleSwitcher_init = undefined;
        };

    p_listenHighContrustModeChange(
        function( highContrastState ){
            if( highContrastState && !HighContrastStyleSwitcher_elmStyle ){
                HighContrastStyleSwitcher_init && HighContrastStyleSwitcher_init();
            } else {
                highContrastState ? p_head.appendChild( HighContrastStyleSwitcher_elmStyle ) : p_DOM_remove( HighContrastStyleSwitcher_elmStyle );
            };
        }
    );
};