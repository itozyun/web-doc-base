/** ===========================================================================
 * export to packageGlobal
 */
p_listenImageReady = function( callback ){
    Event_imageReadyCallbacks.push( callback );
};

/** ===========================================================================
 * private
 */
/** @type {Array<Function>} */
var Event_imageReadyCallbacks = [];

p_listenLoadEvent(
    function(){
        var imgs = document.images || p_DOM_getElementsByTagNameFromDocument( 'img' ), // for NN9 ??,
            i    = imgs.length,
            img, result;

        function testForPresto( result ){
            m_dispatchEvent( Event_imageReadyCallbacks, { img : imgs[ i ], imgReady : result } );
            if( i ){
                p_imageTest( testForPresto, imgs[ --i ].src );
            };
        };

        if( 9 <= p_Presto && p_Presto < 12 || p_WebKit < 532 ){ // Windows XP + Safari 4.0.5 で判定に失敗する為こちらへ
            i && p_imageTest( testForPresto, imgs[ --i ].src );
        } else {
            for( ; i; ){
                img    = imgs[ --i ];
                result = p_Trident < 9 ? img.complete : 0 <= img.naturalWidth ? img.naturalWidth : img.width;
                p_imageEnabled = p_imageEnabled || !!result;
                m_lazyDispatchEvent( Event_imageReadyCallbacks, { img : img, imgReady : result } );
            };
        };
    }
);