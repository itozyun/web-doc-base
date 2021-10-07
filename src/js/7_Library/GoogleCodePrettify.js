if( !( p_Gecko < 1.8 ) && !( p_Trident < 5.5 ) && !( p_Presto < 7.2 ) ){
    p_listenLoadEvent(
        function(){
            if( p_cssAvailability ){
                prettyPrint();
                return true;
            };
        }
    );
};