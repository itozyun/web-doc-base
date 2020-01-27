if( DEFINE_CONTENT_TEST_ID ){
    g_Event_listenCssAvailability(
        function( cssAvailability ){
            if( cssAvailability && !g_Type_notUndefined( g_CanUse_contentPseudoElement ) ){
                var elm = DOM_createThenAdd(
                    g_body,
                    'a',
                    {
                        'aria-hidden' : 'true',
                        id            : DEFINE_CONTENT_TEST_ID
                    }
                );
                // Firefox 72.0, IE8~9, Edge で判定に失敗する為、無条件に良しとする…
                g_CanUse_contentPseudoElement = g_Gecko || g_Goanna || 8 <= g_Trident || g_EdgeHTML || 6 <= elm.offsetWidth;
                DOM_remove( elm );
            };
        }
    );
};
