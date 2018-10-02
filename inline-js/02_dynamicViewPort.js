/**
 * http://outcloud.blogspot.jp/2016/02/viewport2016.html
 *  Dynamic ViewPort for Web Documents.
 */
var dynamicViewPort_iOS  = ua[ 'iOS' ],
    dynamicViewPort_AOSP = ua[ 'AOSP' ],
    dynamicViewPort_meta;

if( ua[ 'N3DS' ] ){
    dynamicViewPort_meta = 'width=320'
} else if( ua[ 'New3DS' ] ){
    dynamicViewPort_meta = 'width=320,initial-scale=1,minimum-scale=1';
} else if( dynamicViewPort_iOS < 6 ){
    dynamicViewPort_meta = 'minimum-scale=1,';
    if( dynamicViewPort_iOS < 5 ){
        dynamicViewPort_meta += 'maximum-scale=1';
    } else {
        dynamicViewPort_meta += 'initial-scale=1';
    };
} else if( dynamicViewPort_AOSP ){
    dynamicViewPort_meta = 'width=device-width,target-densitydpi=medium-dpi,';
    if( dynamicViewPort_AOSP < 3 ){
        dynamicViewPort_meta += 'user-scalable=no';
    } else {
        dynamicViewPort_meta += 'initial-scale=1,minimum-scale=1';
    };
} else if( ua[ 'Gecko' ] && ua[ 'PCMode' ] ){
    html.className += ' fennecPcMode';
};

if( dynamicViewPort_meta ) document.write( '<meta name="viewport" content="' + dynamicViewPort_meta + '">' );
