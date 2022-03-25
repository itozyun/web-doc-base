/** ===========================================================================
 * export to packageGlobal
 */
p_listenImageReady = function( callback ){
    if( DEFINE_WEB_DOC_BASE__DEBUG && !p_loadEventCallbacks ){
        alert( 'p_listenImageReady is called back for images present at load time.' );
    };
    Event_imageReadyCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @type {Array.<!Function>|undefined} */
var Event_imageReadyCallbacks = [];

var killSmartRendering = 7.5 <= p_Presto && p_Presto < 8;

// Opera 7.54u2 でレンダリングモードが変わる問題を若干改善する。
if( killSmartRendering ){
    (function(){
        var imgs = document.images, i = imgs.length, img;

        for( ; i; ){
            img = imgs[ --i ];
            img._src = img.src;
            p_DOM_removeAttribute( img, 'src' );
        };
    })();
};

p_listenLoadEvent(
    function(){
        var imgs = document.images || p_DOM_getElementsByTagNameFromDocument( 'img' ), // for NN9 ??,
            i    = imgs.length,
            img, result;

        if( p_Presto < 12 || // img.width で <img> 要素の画面上のサイズが返る?
            p_WebKit < 532   // Windows XP + Safari 4.0.5 で判定に失敗する為こちらへ
        ){
            testForPresto();
        } else {
            for( ; i; ){
                img    = imgs[ --i ];
                result = p_Trident < 9 ? img.complete : 0 <= img.naturalWidth ? img.naturalWidth : img.width;
                p_imageEnabled = p_imageEnabled || !!result;
                m_lazyDispatchEvent( /** @type {!Array.<!Function>} */ (Event_imageReadyCallbacks), { img : img, imgReady : result }, !i );
            };
            Event_imageReadyCallbacks = undefined;
            if( !DEFINE_WEB_DOC_BASE__DEBUG ){
                p_listenImageReady = undefined;
            };
        };

        function testForPresto(){
            if( i ){
                img = imgs[ --i ];
                if( killSmartRendering ){
                    p_DOM_setAttribute( img, 'src', img._src );
                };
                p_imageTest( testCallback, killSmartRendering ? img._src : img.src );
            } else {
                Event_imageReadyCallbacks = undefined;
                if( !DEFINE_WEB_DOC_BASE__DEBUG ){
                    p_listenImageReady = undefined;
                };
            };
        };

        function testCallback( result ){
            m_dispatchEvent( /** @type {!Array.<!Function>} */ (Event_imageReadyCallbacks), { img : img, imgReady : result }, !i );
            testForPresto();
        };
    }
);