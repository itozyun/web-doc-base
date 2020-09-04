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
                    g_generatedContentEnabled = 1.8 <= g_Gecko || g_Goanna || 8 <= g_Trident || g_EdgeHTML ||
                                                    // https://developer.mozilla.org/ja/docs/Web/CSS/::after
                                                    530 <= g_WebKit || 3.2 <= g_SafariMobile;
                    if( !g_generatedContentEnabled ){
                        var elm = DOM_createThenAdd(
                            g_body,
                            'a',
                            {
                                'aria-hidden' : 'true',
                                id            : WEB_DOC_BASE_DEFINE_CONTENT_TEST_ID
                            }
                        );
                        g_generatedContentEnabled = 6 <= elm.offsetWidth;
                        DOM_remove( elm );
                    };
                };
            } else {
                g_generatedContentEnabled = undefined;
            };
        }
    );
};
