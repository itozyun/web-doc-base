if( DEFINE_CONTENT_TEST_ID ){
    g_Event_listenCssAvailability(
        function( cssAvailability ){
            if( cssAvailability && !g_Type_notUndefined( g_CanUse_contentPusedoElement ) ){
                var elm = DOM_createThenAdd(
                    g_body,
                    'span',
                    {
                        'aria-hidden' : 'true',
                        id            : DEFINE_CONTENT_TEST_ID
                    }
                );
                g_CanUse_contentPusedoElement = !!elm.offsetWidth;
                DOM_remove( elm );
            };
        }
    );
};
