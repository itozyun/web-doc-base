if( DEFINE_CONTENT_TEST_ID ){
    g_Event_listenCssAvailability(
        function( cssAvailability ){
            if( cssAvailability && !g_Type_notUndefined( g_CanUse_contentPusedoElement ) ){
                var elm = DOM_createThenAdd(
                    g_body,
                    'a', // 'span' だと Firefox72 で .offsetWidth が 0 で判定に失敗する
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
