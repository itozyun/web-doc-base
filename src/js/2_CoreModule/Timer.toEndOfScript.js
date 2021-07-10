if( p_SafariMobile < 6.1 ){
    p_listenScrollEvent( _p_Timer_reset );
};
p_listenUnloadEvent( _p_Timer_remove );
