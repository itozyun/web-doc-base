/** @see docs/06_development/04_BootSequence.html */

var cssAndJsLoader_tasman, cssAndJsLoader_presto, cssAndJsLoader_gecko;

if( DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_JS ){
    cssAndJsLoader_tasman =
        cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Tasman );

    if( cssAndJsLoader_tasman ){
        window.attachEvent( 'onload', cssAndJsLoader_onload );
    } else {
        cssAndJsLoader_presto =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Presto       ) ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_PrestoMobile );
        cssAndJsLoader_gecko  =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Gecko        );

        if(
            cssAndJsLoader_gecko  < 1.5 ||
            cssAndJsLoader_presto < 9.5 ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident       ) < 10 ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) < 10 ||
            // Re: onLoad doesn't work with Safari?
            //   https://web.archive.org/web/20050418235512/http://lists.apple.com/archives/web-dev/2003/Oct/msg00036.html
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_WebKit        ) < 533 || // Windows XP + Safari 4.0.5-  , noscript 下のコンテンツが取れない.
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_SafariMobile  ) < 5   || // 多分...
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_iOSWebView    ) < 5   || // 多分...
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Chromium      ) < 7   || // Windows XP + Chrome(Iron) 7-, nnoscript 下のコンテンツが取れない
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP          ) < 3   || // AOSP 2.2 WebKit 433.1       , noscript 下のコンテンツが取れない. 
            !window.addEventListener
        ){
            // document.write('<link href="' + cssAndJsLoader_assetUrl + cssAndJsLoader_cssName + '" rel="stylesheet" type="text/css">');
        } else {
            window.addEventListener( 'DOMContentLoaded', cssAndJsLoader_onload, false );
            window.addEventListener( 'load', cssAndJsLoader_onload, false );
        };
    };
};

function cssAndJsLoader_getEngineVersionOf( targetEngine ){
    if( engine === targetEngine ){
        if( engineVersion === engineVersion + '' ){
            return parseFloat( engineVersion );
        } else {
            return engineVersion;
        };
    };
};

function cssAndJsLoader_onload(){
    // noscript タグ内の @import "./assets/modern.css"; -> ./assets/ を取得
    var link      = document.createElement( 'link' ),
        noscripts = document.getElementsByTagName( 'noscript' ),
        cssName   = (
                cssAndJsLoader_tasman                      ? COMMON_CSS_FILE_STEM__MACIE5 :
                cssAndJsLoader_presto  < 9.5               ? COMMON_CSS_FILE_STEM__OPERA9 :
                ( cssAndJsLoader_gecko &&
                  ua.conpare( engineVersion, '1.9.1' ) < 0
                )                                          ? COMMON_CSS_FILE_STEM__GECKO19
                                                           : COMMON_CSS_FILE_STEM__MODERN
            ) + '.css',
        dir, i = 0, l = noscripts.length, noscript, content, end, start;

    for( ; i < l; ++i ){
        noscript = noscripts[ i ];
        content  = noscript.textContent;
        end      = content.indexOf( COMMON_CSS_FILE_STEM__MODERN + '.css"' );
        start    = content.lastIndexOf( '@import "', end ); // @import が2つある為、先に end を調べる
        if( 0 <= start && 0 < end ){
            dir = content.substring( start + 9, end );
            break;
        };
    };

    if( dir || dir === '' ){
        link.href  = dir + cssName;
        link.rel   = 'stylesheet';
        // link.type  = 'text/css';
        link.media = 'screen,handheld,projection,tv,print';

        document.getElementsByTagName( 'head' )[ 0 ].appendChild( link );
    };

    if( cssAndJsLoader_tasman ){
        window.detachEvent( 'onload', cssAndJsLoader_onload );
    } else {
        window.removeEventListener( 'DOMContentLoaded', cssAndJsLoader_onload, false );
        window.removeEventListener( 'load', cssAndJsLoader_onload, false );
    };
};