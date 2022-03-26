5.5 <= p_Trident && p_Trident < 8 && p_listenForcedColorsChange(
    function( forcedColorsState ){
        var anchorList = p_DOM_getElementsByTagNameFromDocument( 'a' ),
            l = anchorList.length, i = 0, elm;

        for( ; i < l ; ++i ){
            elm = anchorList[ i ];
            if( !forcedColorsState ){
                p_DOM_removeAttribute( elm, 'hidefocus' );
            } else if( forcedColorsState ){
                p_DOM_setAttribute( elm, 'hidefocus', 'true' );
            };
        };
    }
);