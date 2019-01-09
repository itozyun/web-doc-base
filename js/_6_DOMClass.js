function DOM_getClassName( elm ){
    return elm.className;
};

function DOM_setClassName( elm, className ){
    elm.className = className;
};

function DOM_hasClassName( elm, className ){
    return ( ' ' + DOM_getClassName( elm ) + ' ' ).indexOf( ' ' + className + ' ' ) !== -1;
};

function DOM_addClassName( elm, className ){
    var _className;

    if( !DOM_hasClassName( elm, className ) ){
        if( _className = DOM_getClassName( elm ) ){
            className = ' ' + className; 
        };
        DOM_setClassName( elm, _className + className );
    };
};