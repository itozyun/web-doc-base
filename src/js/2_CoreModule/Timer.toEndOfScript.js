if( p_SafariMobile < 6.1 ){
    if( p_listenScrollEvent ){
        p_listenScrollEvent( _p_Timer_reset );
    } else {
        p_addEventListener( window, 'scroll', _p_Timer_reset );
    };
};
p_listenUnloadEvent( _p_Timer_remove );
