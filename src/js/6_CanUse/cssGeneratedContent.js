/**================================================================
 * Original Code:
 *   https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/generatedcontent.js
 *   MIT License
 */
if( DEFINE_WEB_DOC_BASE__CSS_GENERATED_CONTENT_TEST_ID ){
    p_listenLoadEvent(
        function(){
            if( p_cssAvailability ){
                if( !p_notUndefined( p_generatedContentEnabled ) ){
                    // Firefox 72.0, IE8~9, Edge, OSX Safari 13, iOS Safari 12, Chrome 1 で判定に失敗する為、無条件に良しとする…
                    p_generatedContentEnabled = 8 <= p_Trident || p_EdgeHTML ||
                                                // Firefox : CSS-P をサポートするのは Firefox 3.5 以降, Gecko 1.9.1 以降. Firefox 3.5.19 は Gecko 1.9.1.19
                                                p_FirefoxGte35 || p_Goanna ||
                                                // Opera : CSS-P をサポートするのは 7.20 以降
                                                7.2 <= p_Presto ||
                                                // Webkit : Safari 3.0 では既に十分な CSS-p のサポート
                                                522 <= p_WebKit || 3 <= p_SafariMobile || p_ChromiumBase ? 2 :
                                                6   <= p_Presto || p_Gecko ? 1 : 0;
                    if( !p_generatedContentEnabled ){
                        var elm = p_DOM_insertElement(
                            p_body,
                            'a',
                            {
                                'aria-hidden' : 'true',
                                id            : DEFINE_WEB_DOC_BASE__CSS_GENERATED_CONTENT_TEST_ID
                            }
                        );
                        p_generatedContentEnabled = 6 <= elm.offsetWidth ? 2 : 0; // TODO 雑!
                        p_DOM_remove( elm );
                    };
                };
            } else {
                p_generatedContentEnabled = undefined;
            };
        }
    );
};
