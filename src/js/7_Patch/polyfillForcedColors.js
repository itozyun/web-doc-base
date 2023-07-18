if( COMMON_CSS_DIR_TO_FORCED_COLORS_CSS_DIR && !p_canuseNativeForcedColors && p_forcedColorsChangeCallbacks ){
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
                                COMMON_CSS_DIR_TO_FORCED_COLORS_CSS_DIR + '/' + p_cssName
                }
            );

            if( COMMON_CLASSNAME_CANUSE_ROTATE_WHEN_FORCED_COLORS_MODE ){
                if( p_cssTransformName || ( 5.5 <= p_Trident && p_Trident < 9 && p_iefilterEnabled ) ){
                    p_DOM_addClassName( p_body, COMMON_CLASSNAME_CANUSE_ROTATE_WHEN_FORCED_COLORS_MODE );
                    Debug.log( COMMON_CLASSNAME_CANUSE_ROTATE_WHEN_FORCED_COLORS_MODE + '!' );
                };
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