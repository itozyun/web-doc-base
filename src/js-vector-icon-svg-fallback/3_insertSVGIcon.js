var VectorIconCompat_params = window[ COMMON_VECTOR_ICON__SVG_FALLBACK_CALLBACK_NAME ]();

setTimeout(
    function(){
        var ligToEmoji    = VectorIconCompat_params[ 0 ],
            elmIcons      = VectorIconCompat_params[ 1 ],
            insertElement = VectorIconCompat_params[ 2 ],
            isSVGTiny     = VectorIconCompat_params[ 3 ];

        var i = 0, l = elmIcons.length, elmIcon, content, emoji, path;

        for( ; i < l; ++i ){
            elmIcon = elmIcons[ i ];
            content = elmIcon.textContent || elmIcon.innerText; // innerText は Opera
            emoji   = ligToEmoji[ content ] || content;
            path    = VectorIconCompat_PATH_LIST[ emoji ];
            if( path ){
                elmIcon.innerHTML = '';
                var svg = insertElement(
                    elmIcon,
                    'svg',
                    {
                        width   : COMMON_BASE_FONT_SIZE_IS_18PX ? 18 : 16,
                        height  : COMMON_BASE_FONT_SIZE_IS_18PX ? 18 : 16,
                        viewBox : '0,0,' + VectorIconCompat_VIEW_PORT_SIZE + ',' + VectorIconCompat_VIEW_PORT_SIZE,
                        xmlns   : 'http://www.w3.org/2000/svg'
                    },
                    '',
                    true
                );
                insertElement(
                    svg,
                    'path',
                    isSVGTiny ? { 'd' : path, 'fill' : COMMON_LIGHT_COLOR_SCHEME_TEXT_COLOR } : { 'd' : path },
                    '',
                    true
                );
            };
        };

        VectorIconCompat_params = VectorIconCompat_PATH_LIST = null;
    },
    0
);

