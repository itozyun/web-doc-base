var blog2slide_requestFullscreen,
    blog2slide_elmRoot,
    blog2slide_elmH1,
    blog2slide_elmCurrent,
    blog2slide_elmSlides,
    blog2slide_currentSlideIndex,
    blog2slide_maxSlideIndex,
    blog2slide_elmPager;

g_listenLoadEvent(
    function(){
        var elmButtonContainer = DOM_getElementById( 'blog2slide-start' ),
            prefix             = g_notUndefined( document.onfullscreenchange       ) ? '' :
                                 g_notUndefined( document.onmozfullscreenchange    ) ? 'moz' :
                                 g_notUndefined( document.onwebkitfullscreenchange ) ? 'webkit' :
                                 // g_notUndefined( document.onmsfullscreenchange     ) ? 'ms' :
                                 0,
            elmContainer;

        // Trident が msRequestFullscreen をサポートするのは 11+
        // Gecko が mozRequestFullscreen をサポートするのは 9+
        // Chrome が webkitRequestFullscreen をサポートするのは 15+
        // Safari が webkitRequestFullscreen をサポートするのは 6+
        // Samsung が webkitRequestFullscreen をサポートするのは 4+
        blog2slide_requestFullscreen = elmButtonContainer.requestFullscreen    || elmButtonContainer.webkitRequestFullscreen ||
                                       elmButtonContainer.mozRequestFullscreen || elmButtonContainer.msRequestFullscreen;
        if( elmButtonContainer ){
            if( prefix !== 0 || blog2slide_requestFullscreen ){
                elmButtonContainer.innerHTML = '<button class="btn">スライドを開始する</button>';
                elmButtonContainer.firstChild.onclick = blog2slide_onStartButtonClick;

                elmContainer         = DOM_getParentElement( elmButtonContainer );
                blog2slide_elmRoot   = DOM_getParentElement( elmContainer );
                blog2slide_elmSlides = DOM_getElementsByTagName( 'section', elmContainer );
                blog2slide_elmH1     = DOM_justCreate( 'h1', DOM_getElementsByTagName( 'h1' )[ 0 ].innerHTML );
                blog2slide_maxSlideIndex = blog2slide_elmSlides.length;
                blog2slide_elmSlides.splice( 0, 0, blog2slide_elmH1 );

                if( prefix !== 0 ){
                    document[ 'on' + prefix + 'fullscreenchange' ] = blog2slide_onFullscreenChange;
                } else if( g_Trident ){
                    document.addEventListener( 'MSFullscreenChange', blog2slide_onFullscreenChange, false );
                } else {
                    // Gecko が onmozfullscreenchange をサポートするのは 10+
                    // Chrome が onwebkitfullscreenchange をサポートするのは 45+
                    // Safari が onwebkitfullscreenchange をサポートするのは 5.1+ ??
                    // Samsung が onwebkitfullscreenchange をサポートするのは 5+
                    // https://caniuse.com/mdn-api_document_onfullscreenchange
                    g_listenResizeEvent( blog2slide_onFullscreenChange );
                };
            } else {
                DOM_remove( elmButtonContainer );
            };
        };
    }
);

function blog2slide_onStartButtonClick(){
    blog2slide_requestFullscreen.call( blog2slide_elmRoot );
};

function blog2slide_onFullscreenChange(){
    // https://caniuse.com/?search=fullscreen
    if( document.fullscreenElement ||  /* Trident 11+, EdgeHTML */
        document.fullscreen ||         /* Gecko 64, Chrome 71+, Samsung 10.1+ */
        /* document.mozFullScreen ||      Gecko 9+ */
        document.webkitIsFullscreen || /* Chrome 15+, Safari 6+, Samsung 4+ */
        document.msFullscreenElement ||       /* Trident 11+ */
        window.fullScreen              /* Gecko 1.8.1+ (Firefox 2+, Netscape Navigator 9+) */
    ){
        DOM_setAttribute( blog2slide_elmRoot, 'id', 'blog2slide-root' );
        DOM_insertBefore( blog2slide_elmH1, blog2slide_elmSlides[ 1 ] );

        blog2slide_showSlide();
        // TODO iPad Android用 pager

        // listen keydown
        document.onkeydown = blog2slide_onKeydown;
    } else if( blog2slide_elmCurrent ){ // g_listenResizeEvent 経由でここに入る場合に null チェックする
        DOM_remove( blog2slide_elmH1 );
        DOM_removeAttribute( blog2slide_elmRoot, 'id' );
        DOM_removeAttribute( blog2slide_elmCurrent, 'id' );
        blog2slide_elmCurrent = document.onkeydown = null;
    };
};

function blog2slide_showSlide(){
    if( blog2slide_elmCurrent ){
        DOM_removeAttribute( blog2slide_elmCurrent, 'id' );
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
    DOM_setAttribute( blog2slide_elmCurrent, 'id', 'blog2slide-current' );
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