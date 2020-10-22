/**================================================================
 * Original Code:
 *   https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/generatedcontent.js
 *   MIT License
 */
if( WEB_DOC_BASE_DEFINE_CONTENT_TEST_ID ){
    g_listenLoadEvent(
        function(){
            if( g_cssAvailability ){
                if( !g_notUndefined( g_generatedContentEnabled ) ){
                    // Firefox 72.0, IE8~9, Edge, OSX Safari 13, iOS Safari 12 で判定に失敗する為、無条件に良しとする…
                    g_generatedContentEnabled = g_Goanna || 8 <= g_Trident || g_EdgeHTML ||
                                                // Firefox 3.5 以上
                                                2 <= g_Gecko || ( ( ua.ENGINE_VERSION === '1.9.1' || ua.ENGINE_VERSION === '1.9.2' ) && g_Gecko ) ||
                                                    // https://developer.mozilla.org/ja/docs/Web/CSS/::after
                                                // Presto Opera: CSS-P をサポートするのは 7.11 より後で 7.23 以下のどこか
                                                // 7.11 では display, width, height には対応
                                                7.2 <= g_Presto || 530 <= g_WebKit || 3.2 <= g_SafariMobile ? 2 :
                                                6   <= g_Presto || g_Gecko ? 1 : 0;
                    if( !g_generatedContentEnabled ){
                        var elm = DOM_createThenAdd(
                            g_body,
                            'a',
                            {
                                'aria-hidden' : 'true',
                                id            : WEB_DOC_BASE_DEFINE_CONTENT_TEST_ID
                            }
                        );
                        g_generatedContentEnabled = 6 <= elm.offsetWidth ? 2 : 0; // TODO 雑!
                        DOM_remove( elm );
                    };
                };
            } else {
                g_generatedContentEnabled = undefined;
            };
        }
    );
};
