/** @see docs/06_development/04_BootSequence.html */

var cssAndJsLoader_tasman, cssAndJsLoader_presto, cssAndJsLoader_gecko;

if( DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_JS ){
    cssAndJsLoader_tasman =
        cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Tasman );

    if( cssAndJsLoader_tasman ){
        window.attachEvent( 'onload', cssAndJsLoader_windowOnload );
    } else {
        cssAndJsLoader_presto =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Presto       ) ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_PrestoMobile );
        cssAndJsLoader_gecko  =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Gecko        ) ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Fennec       );

        if(
            cssAndJsLoader_gecko  < 1 || // document.write
            cssAndJsLoader_presto < 9 || // document.write
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident       ) < 10 ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) < 10 ||
            // Re: onLoad doesn't work with Safari?
            //   https://web.archive.org/web/20050418235512/http://lists.apple.com/archives/web-dev/2003/Oct/msg00036.html
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_WebKit        ) < 419.3 || // Safari 2-
            !window.addEventListener
        ){
            // document.write('<link href="' + cssAndJsLoader_assetUrl + cssAndJsLoader_cssName + '" rel="stylesheet" type="text/css">');
        } else if(
            // link.onload が動作する環境
            cssAndJsLoader_gecko >= 9 ||
            cssAndJsLoader_presto     ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident       ) >= 11 ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) >= 11 ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_EdgeHTML      )       ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_EdgeMobile    )       ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_WebKit        ) >= 536.26 || // Safari 6
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_SafariMobile  ) >=   6    || // 多分...
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_iOSWebView    ) >=   6    || // 多分...
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Chromium      ) >=  19    || // 
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_AOSP          ) >=   4.3     // 多分...
        ){
            var link = cssAndJsLoader_createElement( 'print' );

            link.addEventListener( 'load', cssAndJsLoader_linkOnload, false );
        } else {
            window.addEventListener( 'DOMContentLoaded', cssAndJsLoader_windowOnload, false );
            window.addEventListener( 'load', cssAndJsLoader_windowOnload, false );
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

function cssAndJsLoader_createElement( media ){
    // noscript タグ内の @import "./assets/modern.css"; -> ./assets/ を取得
    var link    = document.createElement( 'link' ),
        cssName = (
                cssAndJsLoader_tasman                       ? COMMON_CSS_FILE_STEM__MACIE5 :
                cssAndJsLoader_presto                 < 9.5 ? COMMON_CSS_FILE_STEM__OPERA9 :
             // cssAndJsLoader_gecko && engineVersion < 1   ? COMMON_CSS_FILE_STEM__GECKO09 :
                cssAndJsLoader_gecko && engineVersion < 1.3 ? COMMON_CSS_FILE_STEM__GECKO12 :
                cssAndJsLoader_gecko && engineVersion < 1.4 ? COMMON_CSS_FILE_STEM__GECKO13 :
                cssAndJsLoader_gecko &&
                  ua.conpare( engineVersion, '1.9.1' ) < 0  ? COMMON_CSS_FILE_STEM__GECKO19
                                                            : COMMON_CSS_FILE_STEM__MODERN
            ) + '.css';

    link.href  = '${dir}assets/css/pc/' + cssName;
    link.rel   = 'stylesheet';
    // link.type  = 'text/css';
    link.media = media;

    document.getElementsByTagName( 'head' )[ 0 ].appendChild( link );

    return link;
};

function cssAndJsLoader_linkOnload(){
    this.removeEventListener( 'load', cssAndJsLoader_linkOnload, false );
    this.media = 'screen,handheld,projection,tv,print';
};

function cssAndJsLoader_windowOnload(){
    cssAndJsLoader_createElement( 'screen,handheld,projection,tv,print' );

    if( cssAndJsLoader_tasman ){
        window.detachEvent( 'onload', cssAndJsLoader_windowOnload );
    } else {
        window.removeEventListener( 'DOMContentLoaded', cssAndJsLoader_windowOnload, false );
        window.removeEventListener( 'load', cssAndJsLoader_windowOnload, false );
    };
};