var blog2slide_requestFullscreen,
    blog2slide_elmRoot,
    blog2slide_elmH1,
    blog2slide_elmCurrent,
    blog2slide_elmSlides,
    blog2slide_currentSlideIndex,
    blog2slide_maxSlideIndex,
    blog2slide_elmPager;

p_listenLoadEvent(
    function(){
        var elmButtonContainer = p_DOM_getElementById( COMMON_BLOG_2_SLIDE__ID_START );

        if( elmButtonContainer ){
            var prefix = p_notUndefined( document.onfullscreenchange       ) ? 'f' :
                         p_notUndefined( document.onmozfullscreenchange    ) ? 'mozF' :
                         p_notUndefined( document.onwebkitfullscreenchange ) ? 'webkitF' :
                         // p_notUndefined( document.onmsfullscreenchange     ) ? 'msF' :
                         0,
                elmContainer;
            // Trident が msRequestFullscreen をサポートするのは 11+
            // Gecko が mozRequestFullscreen をサポートするのは 9+
            // Chrome が webkitRequestFullscreen をサポートするのは 15+
            // Safari が webkitRequestFullscreen をサポートするのは 6+
            // Samsung が webkitRequestFullscreen をサポートするのは 4+
            blog2slide_requestFullscreen = elmButtonContainer.requestFullscreen    || elmButtonContainer.webkitRequestFullscreen ||
                                           elmButtonContainer.mozRequestFullscreen || elmButtonContainer.msRequestFullscreen;            
            if( prefix !== 0 || blog2slide_requestFullscreen ){
                elmButtonContainer.innerHTML = '<button class="btn">スライドを開始する</button>';
                p_addEventListener( elmButtonContainer.firstChild, 'click', blog2slide_onStartButtonClick );

                elmContainer         = p_DOM_getParentNode( elmButtonContainer );
                blog2slide_elmRoot   = p_DOM_getParentNode( elmContainer );
                blog2slide_elmSlides = p_DOM_getElementsByTagName( elmContainer, 'section' );
                blog2slide_elmH1     = document.createElement( 'h1' );
                blog2slide_elmH1.innerHTML = p_DOM_getElementsByTagName( p_body, 'h1' )[ 0 ].innerHTML;
                blog2slide_maxSlideIndex = blog2slide_elmSlides.length;
                blog2slide_elmSlides.splice( 0, 0, blog2slide_elmH1 );

                if( prefix !== 0 ){
                    p_addEventListener( document, prefix + 'ullscreenchange', blog2slide_onFullscreenChange );
                } else if( p_Trident ){
                    p_addEventListener( document, 'MSFullscreenChange', blog2slide_onFullscreenChange, false );
                } else {
                    // Gecko が onmozfullscreenchange をサポートするのは 10+
                    // Chrome が onwebkitfullscreenchange をサポートするのは 45+
                    // Safari が onwebkitfullscreenchange をサポートするのは 5.1+ ??
                    // Samsung が onwebkitfullscreenchange をサポートするのは 5+
                    // https://caniuse.com/mdn-api_document_onfullscreenchange
                    p_listenResizeEvent( blog2slide_onFullscreenChange );
                };
            } else {
                p_DOM_remove( elmButtonContainer );
            };
        };
    }
);

function blog2slide_onStartButtonClick(){
    blog2slide_requestFullscreen.call( blog2slide_elmRoot );
};

function blog2slide_onFullscreenChange(){
    // https://caniuse.com/?search=fullscreen
    if( document.fullscreenElement   || /* Trident 11+, EdgeHTML */
        document.fullscreen          || /* Gecko 64, Chrome 71+, Samsung 10.1+ */
        /* document.mozFullScreen ||      Gecko 9+ */
        document.webkitIsFullscreen  || /* Chrome 15+, Safari 6+, Samsung 4+ */
        document.msFullscreenElement || /* Trident 11+ */
        window.fullScreen               /* Gecko 1.8.1+ (Firefox 2+, Netscape Navigator 9+) */
    ){
        p_DOM_setAttribute( blog2slide_elmRoot, 'id', COMMON_BLOG_2_SLIDE__ID_ROOT );
        blog2slide_elmSlides[ 1 ].parentNode.insertBefore( blog2slide_elmH1, blog2slide_elmSlides[ 1 ] );

        blog2slide_showSlide();
        // TODO iPad Android用 pager

        // listen keydown
        document.onkeydown = blog2slide_onKeydown;
    } else if( blog2slide_elmCurrent ){ // p_listenResizeEvent 経由でここに入る場合に null チェックする
        p_DOM_remove( blog2slide_elmH1 );
        p_DOM_removeAttribute( blog2slide_elmRoot, 'id' );
        p_DOM_removeAttribute( blog2slide_elmCurrent, 'id' );
        blog2slide_elmCurrent = document.onkeydown = undefined;
    };
};

function blog2slide_showSlide(){
    if( blog2slide_elmCurrent ){
        p_DOM_removeAttribute( blog2slide_elmCurrent, 'id' );
    };

    blog2slide_currentSlideIndex = 
        0 < blog2slide_currentSlideIndex ?
            (
                blog2slide_maxSlideIndex < blog2slide_currentSlideIndex ?
                    blog2slide_maxSlideIndex :
                    blog2slide_currentSlideIndex
            ) :
        0;

    blog2slide_elmCurrent = blog2slide_elmSlides[ blog2slide_currentSlideIndex ];
    p_DOM_setAttribute( blog2slide_elmCurrent, 'id', COMMON_BLOG_2_SLIDE__ID_CURRENT );
};

function blog2slide_onKeydown( e ){
    if( e.key === 'ArrowRight' || e.keyCode === 39 ){
        ++blog2slide_currentSlideIndex;
        blog2slide_showSlide();
    } else if( e.key === 'ArrowLeft' || e.keyCode === 37 ){
        --blog2slide_currentSlideIndex;
        blog2slide_showSlide();
    };
};