while( g_onreachEndCallbacks.length ){
    g_onreachEndCallbacks.shift()();
};
g_onreachEndCallbacks = null;