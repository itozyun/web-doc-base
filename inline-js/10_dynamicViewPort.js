/**
 * http://outcloud.blogspot.jp/2016/02/viewport2016.html
 *  Dynamic ViewPort for Web Documents.
 */
var dynamicViewPort_meta = '',
    dynamicViewPort_deviceWidth,
    dynamicViewPort_width,
    dynamicViewPort_initScale,
    dynamicViewPort_miniScale,
    dynamicViewPort_iOS  = ua[ 'SafariMobile' ] || ua[ 'iOSWebView' ],
    dynamicViewPort_AOSP = ua[ 'AOSP' ];

if( ua[ 'N3DS' ] ){
    dynamicViewPort_width     = 320;
} else if( ua[ 'New3DS' ] ){
    dynamicViewPort_width     = 320;
    dynamicViewPort_initScale = dynamicViewPort_miniScale = 1;
} else if( dynamicViewPort_iOS < 5 ){
    dynamicViewPort_miniScale = 1;
    dynamicViewPort_meta      = 'maximum-scale=1'
} else if( dynamicViewPort_iOS < 6 ){
    dynamicViewPort_initScale = dynamicViewPort_miniScale = 1;
} else if( dynamicViewPort_AOSP ){
    dynamicViewPort_deviceWidth = true;
    dynamicViewPort_meta        = 'target-densitydpi=medium-dpi';
    if( dynamicViewPort_AOSP < 3 ){
        dynamicViewPort_meta += ',user-scalable=no';
    } else {
        dynamicViewPort_initScale = dynamicViewPort_miniScale = 1;
    };
} else if( isGecko && isPcMode ){
    dynamicViewPort_deviceWidth = true;
    dynamicViewPort_initScale   = dynamicViewPort_miniScale = 2;
};
// https://www.nintendo.co.jp/hardware/wiiu/internetbrowser/index.html
// 

dynamicViewPort_width = dynamicViewPort_deviceWidth ? 'device-width' : dynamicViewPort_width;

dynamicViewPort_addParam( 'width=', dynamicViewPort_width );
dynamicViewPort_addParam( 'initial-scale=', dynamicViewPort_initScale );
dynamicViewPort_addParam( 'minimum-scale=', dynamicViewPort_miniScale );

function dynamicViewPort_addParam( name, value ){
    if( value ){
        if( dynamicViewPort_meta ) dynamicViewPort_meta += ',';
        dynamicViewPort_meta += name + value;
    };
};

if( dynamicViewPort_meta ) document.write( '<meta name="viewport" content="' + dynamicViewPort_meta + '">' );