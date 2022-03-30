if( DEFINE_WEB_DOC_BASE__FORCED_COLORS_CSS_DIR && !p_canuseNativeForcedColors && p_forcedColorsChangeCallbacks ){
    var ForcedColorsStyleSwitcher_elmLink;

    /** @type {!Function|undefined} */
    var ForcedColorsStyleSwitcher_init = function(){
            ForcedColorsStyleSwitcher_elmLink = p_DOM_insertElement(
                p_head, 'link',
                {
                    type  : 'text/css',
                    rel   : 'stylesheet',
                    media : 'screen',
                    href  : p_assetUrl +
                                p_cssDir +
                                p_screenModeDir +
                                DEFINE_WEB_DOC_BASE__FORCED_COLORS_CSS_DIR + '/' + p_cssName
                }
            );

            if( p_cssTransformName || ( 5.5 <= p_Trident && p_Trident < 9 && p_iefilterEnabled ) ){
                p_DOM_addClassName( p_body, 'jsCanRotate' );
                Debug.log( 'jsCanRotate!' );
            };
            ForcedColorsStyleSwitcher_init = undefined;
        };

    p_listenForcedColorsChange(
        function( forcedColorsState ){
            if( forcedColorsState && !ForcedColorsStyleSwitcher_elmLink ){
                ForcedColorsStyleSwitcher_init();
            } else if( ForcedColorsStyleSwitcher_elmLink ){
                forcedColorsState ? p_head.appendChild( ForcedColorsStyleSwitcher_elmLink ) : p_DOM_remove( ForcedColorsStyleSwitcher_elmLink );
            };
        }
    );
};