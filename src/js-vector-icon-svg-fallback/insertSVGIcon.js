var VectorIconCompat_params = window[ DEFINE_WEB_DOC_BASE__ONLOAD_CALLBACK_NAME ]();

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
                        width : 18,
                        height : 18,
                        viewBox : '0,0,255,255',
                        xmlns   : 'http://www.w3.org/2000/svg'
                    },
                    '',
                    true
                );
                insertElement(
                    svg,
                    'path',
                    isSVGTiny ? {
                        'd' : path,
                        'fill' : '#111111'
                    } : { 'd' : path },
                    '',
                    true
                );
            };
        };

        VectorIconCompat_params = VectorIconCompat_PATH_LIST = null;
    },
    0
);

