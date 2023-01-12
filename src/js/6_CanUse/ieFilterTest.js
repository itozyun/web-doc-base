/*
 * https://outcloud.blogspot.jp/2016/03/ms-filter.html
 */
p_Trident < 9 && p_listenLoadEvent(
    function(){
        var elm = p_DOM_insertElement( p_body, 'div' );

        p_DOM_setCssText( elm, 'position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()' );
        p_iefilterEnabled = elm.offsetHeight > 1;
        p_DOM_remove( elm );
    }
);