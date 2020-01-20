
/*
 * https://outcloud.blogspot.jp/2016/03/ms-filter.html
 */
g_Trident < 9 && g_Event_listenLoadEvent(
    function(e){
        e = DOM_createThenAdd( g_body, 'div' );
        DOM_setCssText( e, 'position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()' );
        g_CanUse_iefilter = e.offsetHeight > 1;
        DOM_setCssText( e, '' );
        DOM_remove( e );
    }
);