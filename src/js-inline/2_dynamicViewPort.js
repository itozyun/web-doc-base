/**
 * 『<meta>タグによるviewport指定の2016年春決定版！jsで上書きするべきケースも紹介』
 *    http://outcloud.blogspot.jp/2016/02/viewport2016.html
 */
var DynamicViewPort_meta = '';
var DynamicViewPort_deviceWidth;
var DynamicViewPort_width;
var DynamicViewPort_initScale;
var DynamicViewPort_miniScale;
var DynamicViewPort_iOSWebKit = (
                                    engine === WHAT_BROWSER_AM_I__ENGINE_SafariMobile ||
                                    engine === WHAT_BROWSER_AM_I__ENGINE_iOSWebView
                                ) ? parseFloat( engineVersion ) : undefined;
var DynamicViewPort_AOSP      = engine === WHAT_BROWSER_AM_I__ENGINE_AOSP ? parseFloat( engineVersion ) : undefined;

if( platform === WHAT_BROWSER_AM_I__PLATFORM_N3DS ){
    DynamicViewPort_width     = 320;
} else if( platform === WHAT_BROWSER_AM_I__PLATFORM_New3DS ){
    DynamicViewPort_width     = 320;
    DynamicViewPort_initScale = DynamicViewPort_miniScale = 1;
} else if( DynamicViewPort_iOSWebKit < 5 ){
    DynamicViewPort_miniScale = 1;
    DynamicViewPort_meta      = 'maximum-scale=1';
} else if( DynamicViewPort_iOSWebKit < 6 ){
    DynamicViewPort_initScale = DynamicViewPort_miniScale = 1;
} else if( DynamicViewPort_AOSP ){
    DynamicViewPort_deviceWidth = true;
    DynamicViewPort_meta        = 'target-densitydpi=medium-dpi';
    if( DynamicViewPort_AOSP < 3 ){
        DynamicViewPort_meta += ',user-scalable=no';
    } else {
        DynamicViewPort_initScale = DynamicViewPort_miniScale = 1;
    };
// } else if( engine === WHAT_BROWSER_AM_I__ENGINE_Fennec && isPcSiteRequested ){
    /* DynamicViewPort_deviceWidth = true;
    DynamicViewPort_initScale   = DynamicViewPort_miniScale = 1; */
    // htmlStyle.fontSize          = '1.33em';
};

DynamicViewPort_width = DynamicViewPort_deviceWidth ? 'device-width' : DynamicViewPort_width;

DynamicViewPort_addParam( 'width=', DynamicViewPort_width );
DynamicViewPort_addParam( 'initial-scale=', DynamicViewPort_initScale );
DynamicViewPort_addParam( 'minimum-scale=', DynamicViewPort_miniScale );

function DynamicViewPort_addParam( name, value ){
    if( value ){
        if( DynamicViewPort_meta ) DynamicViewPort_meta += ',';
        DynamicViewPort_meta += name + value;
    };
};

if( DynamicViewPort_meta ){
    document.getElementsByName( 'viewport' )[ 0 ].setAttribute( 'content', DynamicViewPort_meta );
};