var p_emptyFunction       = emptyFunction, // || new Function(),
    p_body    = document.body,
    p_style   = p_body.style,

    p_html, p_head, p_elmMain,

    p_Trident      = ua[ 'Trident' ] || ua[ 'TridentMobile' ],
    p_Tasman       = ua[ 'Tasman' ],
    p_EdgeHTML     = ua[ 'EdgeHTML' ] || ua[ 'EdgeMobile' ],
    p_Presto       = ua[ 'Presto' ] || ua[ 'PrestoMobile' ],
    p_Gecko        = ua[ 'Gecko' ] || ua[ 'Fennec' ],
    p_FirefoxGte35 = p_Gecko && 0 <= ua.conpare( ua.ENGINE_VERSION, '1.9.1' ),
    p_Goanna       = ua[ 'Goanna' ],
    p_WebKit       = ua[ 'WebKit' ],
    p_SafariMobile = ua[ 'SafariMobile' ] || ua[ 'iOSWebView' ],
    p_ServerSideRendering = ua[ 'OperaMini' ] && ua[ 'UCWEB' ],
    p_Windows      = ua[ 'Win32' ] || ua[ 'Win64' ],
    p_ChromiumEdge = parseFloat( navigator.userAgent.split( 'Edg/' )[ 1 ] ), // brand が無いので
    p_IEVersion    = parseFloat( navigator.appVersion.split( 'Trident/' )[ 1 ] ) + 4,

// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
    p_passiveSupported = !p_Trident && !p_Tasman && (new Function(
        'try{' +
            'var r,o=Object.defineProperty({},"passive",{' +
                'get:function(){r=!0}' +
            '});' +
            'addEventListener("t",o,o);' +
            'removeEventListener("t",o,o);' +
            'return r' +
        '}catch(e){}'
    ))(),

    p_jsGte15 = p_Trident < 5.5,

    p_cssName = ( p_Tasman ? 'ie5mac' :
                  p_Trident < 5.5 ? 'ie5win' :
                  p_Trident < 6   ? 'ie55' :
                  p_Trident < 10  ? 'ie' + ( p_Trident | 0 ) :
                  p_Presto < 9.5 || ( p_Gecko && !p_FirefoxGte35 ) ? 'legacy' :
                  'modern'
                ) + '.css',
    p_isSecure = location.href.indexOf( 'https' ) === 0,

    p_scripts, p_assetUrl, p_isMobile,
    p_useMobile = p_Gecko < 0.9 || ua.NDS || ua.NDSi || ua.N3DS || ua.New3DS || ua.PSP || ua.PSVita || ua.PSPGo,
    
    p_iefilterEnabled,
    p_imageEnabled,
    p_generatedContentEnabled,

    p_cssTransformName =
        p_notUndefined( p_style[ 'transform' ] ) ? 'transform' : 
        p_notUndefined( p_style[ '-o-transform' ] ) ? '-o-transform' : 
        p_notUndefined( p_style[ '-ms-transform' ] ) ? '-ms-transform' : 
        p_notUndefined( p_style[ '-moz-transform' ] ) ? '-moz-transform' : 
        p_notUndefined( p_style[ '-webkit-transform' ] ) ? '-webkit-transform' : '',
    
    p_dataUriTest,
    p_imageTest,
    p_webFontTest;

function p_notUndefined( val ){
    return val !== undefined;
};