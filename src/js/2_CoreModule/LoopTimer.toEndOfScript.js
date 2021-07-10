if( p_SafariMobile < 6.1 ){
    p_listenScrollEvent( _p_LoopTimer_reset );
};
p_listenUnloadEvent( _p_LoopTimer_remove );
