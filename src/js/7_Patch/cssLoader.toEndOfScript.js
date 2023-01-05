/** @see docs/06_development/04_BootSequence.html */
if(
/**
 * IE10以上またはIE以外
 */
    !( p_Trident < 10 )
    ||
/**
 * ie11 の ie5 モード で css が読み込まれない問題の対策
 */
    ( p_IEVersion === 11 && p_Trident === 5 )
){
    if( p_Presto < 9 || // document.write でないと、コンテンツ量によって CSS が一部しか適用されない不具合に遭遇する
        p_Gecko  < 1 || // Gecko 0.9.4 以下で確認 0.9.6 では発生しない document.write でないと css が適用されない
        !p_Tasman && !window.addEventListener // Tasman 以外で addEventListener をサポートしないブラウザ, Opera 7.x (未確認)
    ){
        document.write(
            '<link href="' + p_assetUrl + p_cssDir + p_screenModeDir + p_cssName + '" rel="stylesheet"' +
                (
                    p_Presto < 8 ? '' : // Opera 7.54u2, media があると view > fullscreen でスタイルが適用されない
                                   ' media="screen,handheld,projection,print"' // Opera 8, projection が無いと view > fullscreen でスタイルが適用されない
                ) + 
            '>'
        );
    } else if(
        p_Presto       < 9.5 || // Windows XP + Presto 9.27   , noscript 下のコンテンツが取れない
        p_Gecko        < 1.5 || // Windows XP + Gecko  1.4.1  , noscript 下のコンテンツが取れない
        p_WebKit       < 534 || // Windows XP + Safari 4.0.5- , noscript 下のコンテンツが取れない.
        p_SafariMobile < 5   || // 多分
        p_Chromium     < 7   || // Windows XP + Chrome(Iron)6-, noscript 下のコンテンツが取れない
        p_AOSP         < 3   || // AOSP 2.2 WebKit 433.1      , noscript 下のコンテンツが取れない.
        !DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_JS
    ){
        p_listenLoadEvent(
            function(){
                p_DOM_insertElement(
                    p_head,
                    'link',
                    {
                        href  : p_assetUrl + p_cssDir + p_screenModeDir + p_cssName,
                        rel   : 'stylesheet',
                        // type  : 'text/css',
                        media : 'screen,handheld,projection,tv,print'
                    }
                );
            }
        );
    };
};