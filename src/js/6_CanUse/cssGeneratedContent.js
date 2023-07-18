/**================================================================
 * Original Code:
 *   https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/generatedcontent.js
 *   MIT License
 */
if( COMMON_ELEMENT_ID_TEST_CSS_GENERATED_CONTENT ){
    // forcedColors より先に値を設定する為、コールバック配列の先頭に入れる
    p_cssAvailabilityCallbacks.splice( 0, 0,
        function(){
            if( p_cssAvailability ){
                // Firefox 72.0, IE8~9, Edge, OSX Safari 13, iOS Safari 12, Chrome 1 で判定に失敗する為、無条件に良しとする…
                p_cssGeneratedContentGrade =
                    8 <= p_Trident || p_EdgeHTML           ||
                    9.5 <= p_Presto                        ||
                    // Gecko : CSS-P をサポートするのは Gecko 1.9.1 以降
                    p_FirefoxGte35 || p_Goanna             ||
                    // Webkit : Safari 3.0 では既に十分な CSS-p のサポート
                    522 <= p_WebKit || 3 <= p_SafariMobile ||
                    // Opera Mini, UCWEB 当然サポートしている想定...
                    p_cloudRendering ||
                    p_isChromiumBase                          ? 3 : // Inline Block 要素の場合も CSS-P が可能
                    // Opera : CSS-P をサポートするのは 7.20 以降
                    7.2 <= p_Presto                           ? 2 : // Block 要素の場合 CSS-P が可能
                    6   <= p_Presto || p_Gecko                ? 1 : // CSS-P 等は不可能
                                                                0;  // 非サポート(以下のテストを通過したら 2 とする)
                if( !p_cssGeneratedContentGrade && !p_Trident && !p_Tasman ){
                    var elm = p_DOM_insertElement(
                        p_body,
                        'a',
                        {
                            'aria-hidden' : 'true',
                            id            : COMMON_ELEMENT_ID_TEST_CSS_GENERATED_CONTENT
                        }
                    );
                    p_cssGeneratedContentGrade = 6 <= elm.offsetWidth ? 2 : 0; // TODO 雑!
                    p_DOM_remove( elm );
                };
                Debug.log( 'p_cssGeneratedContentGrade:' + p_cssGeneratedContentGrade );
                return true;
            };
        }
    );
};
