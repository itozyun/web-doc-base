// Windows 限定なので p_forcedColorsChangeCallbacks をチェックする.
5.5 <= p_Trident && p_Trident < 8 && p_forcedColorsChangeCallbacks && p_listenForcedColorsChange(
    function( forcedColorsState ){
        var anchorList = p_DOM_getElementsByTagNameFromDocument( 'a' ),
            l = anchorList.length, i = 0;

        for( ; i < l ; ++i ){
            anchorList[ i ].hideFocus = !forcedColorsState;
        };
    }
);