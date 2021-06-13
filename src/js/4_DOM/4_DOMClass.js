function DOM_getClassName( elm ){
    return elm.className;
};

function DOM_setClassName( elm, className ){
    if( g_Trident < 9 ){
        elm.className = className;
    } else {
        elm.setAttribute( 'class', className ); // SVG で値が変更されないケースに対策
    };
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

function DOM_removeClassName( elm, className ){
    var _className;

    if( DOM_hasClassName( elm, className ) ){
        _className = DOM_getClassName( elm ).split( ' ' );
        _className.splice( _className.indexOf( className ), 1 );
        DOM_setClassName( elm, _className.join( ' ' ) );
    };
};