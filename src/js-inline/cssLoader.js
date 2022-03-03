/** @see/docs/bootsequence.md */
if( DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_JS ){
    var cssAndJsLoader_presto =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Presto       ) ||
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_PrestoMobile ),
        cssAndJsLoader_gecko  =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Gecko        ),
        cssAndJsLoader_tasman =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Tasman       ),
        cssAndJsLoader_chromium =
            cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Chromium     );

    if(
        cssAndJsLoader_gecko  < 1.5 ||
        cssAndJsLoader_presto < 9.5 ||
        cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_Trident       ) < 10 ||
        cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_TridentMobile ) < 10 ||
        // Re: onLoad doesn't work with Safari?
        //   https://web.archive.org/web/20050418235512/http://lists.apple.com/archives/web-dev/2003/Oct/msg00036.html
        cssAndJsLoader_getEngineVersionOf( WHAT_BROWSER_AM_I__ENGINE_WebKit       ) <= 532 || // Windows XP + Safari 4.0.5-, noscript 下のコンテンツが取れない
        cssAndJsLoader_chromium                                                      < 2   || // Windows XP + Chrome 1     , noscript 下のコンテンツが取れない
        4 <= cssAndJsLoader_chromium && cssAndJsLoader_chromium < 8                        || // Windows XP + Iron 5~7     , nnoscript 下のコンテンツが取れない
        !window.addEventListener && !window.attachEvent
    ){
        // document.write('<link href="' + cssAndJsLoader_assetUrl + cssAndJsLoader_cssName + '" rel="stylesheet" type="text/css">');
    } else {
        if( window.addEventListener ){
            window.addEventListener( 'DOMContentLoaded', cssAndJsLoader_onload, false );
            window.addEventListener( 'load', cssAndJsLoader_onload, false );
        } else if( cssAndJsLoader_tasman ){
            window.attachEvent( 'onload', cssAndJsLoader_onload );
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
                cssAndJsLoader_tasman             ? 'ie5mac' :
                cssAndJsLoader_presto  < 9.5      ? 'opr9'   :
                ( cssAndJsLoader_gecko && ua.conpare( engineVersion, '1.9.1' ) < 0 ) ?
                    ( 1.3 <= cssAndJsLoader_gecko ? 'gck190' : 'gck121'
                ) : 'modern'
            ) + '.css',
        dir, i = 0, l = noscripts.length, noscript, content, end, start;

    for( ; i < l; ++i ){
        noscript = noscripts[ i ];
        content  = noscript.textContent;
        end      = content.indexOf( 'modern.css"' );
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