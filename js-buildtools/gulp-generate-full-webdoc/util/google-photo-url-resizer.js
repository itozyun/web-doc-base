// https://gist.github.com/Sauerstoffdioxid/2a0206da9f44dde1fdfce290f38d2703

module.exports = {
    resize, isResizable
};

function isResizable( url ){
    return isCurrentBlogerPhoto( url ) || isLegacyBlogerPhoto( url );
};

function isCurrentBlogerPhoto( url ){
    return 0 < url.indexOf( 'blogger.googleusercontent.com/img/' );
};

function isLegacyBlogerPhoto( url ){
    return 0 < url.indexOf( '.bp.blogspot.com/' );
};

function resize( url, options ){
    var width  = options.width,
        height = options.height,
        ratio  = width / height,
        param, elms, l, size, n;

    if( width === height ){
        if( 1600 < width ) width = 1600;
        param = 's' + width + '-c';
    } else {
        if( 1600 < width ) width = 1600;
        param = 'w' + width;
        if( 0 < height ){
            if( 1600 < height ) height = 1600;
            param += '-h' + height;
        };
    };


    if( isCurrentBlogerPhoto( url ) ){
        elms = url.split( '=' );
        l    = elms.length;
        if( size = elms[ l - 1 ] ){
            n = parseFloat( size.substr( 1 ) );
            if( n && size === 's' + n ){
                elms[ l - 1 ] = param;
            } else {
                elms[ l ] = param;
            };
        };
        url = elms.join( '=' );
    } else if( isLegacyBlogerPhoto( url ) ){
        elms = url.split( '/' );
        l    = elms.length;
        if( size = elms[ l - 2 ] ){
            n = parseFloat( size.substr( 1 ) );
            if( n && size === 's' + n ){
                elms[ l - 2 ] = param;
            } else {
                elms.splice( l - 1, 0, param );
            };
        };
        url = elms.join( '/' );
    };
    return url;
};