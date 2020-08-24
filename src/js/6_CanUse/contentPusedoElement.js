if( DEFINE_CONTENT_TEST_ID ){
    if( !g_contentPseudoElementEnabled ){
        g_listenCssAvailability(
            function( cssAvailability ){
                if( cssAvailability && !g_notUndefined( g_contentPseudoElementEnabled ) ){
                    // Firefox 72.0, IE8~9, Edge, OSX Safari 13, iOS Safari 12 で判定に失敗する為、無条件に良しとする…
                    g_contentPseudoElementEnabled = 1.8 <= g_Gecko || g_Goanna || 8 <= g_Trident || g_EdgeHTML ||
                                                    // https://developer.mozilla.org/ja/docs/Web/CSS/::after
                                                    530 <= g_WebKit || 3.2 <= g_SafariMobile;
                    if( !g_contentPseudoElementEnabled ){
                        var elm = DOM_createThenAdd(
                            g_body,
                            'a',
                            {
                                'aria-hidden' : 'true',
                                id            : DEFINE_CONTENT_TEST_ID
                            }
                        );
                        g_contentPseudoElementEnabled = 6 <= elm.offsetWidth;
                        DOM_remove( elm );
                    };
                };
            }
        );
    };
};
