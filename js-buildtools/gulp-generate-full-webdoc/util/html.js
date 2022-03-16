const googlePhotoURLResizer = require( './google-photo-url-resizer.js' );

module.exports = {
    createAttribute, createElement, createElementList, resizeImage, getRelativePath, isExternalURL
};

function createAttribute( name, value, opt_toggle ){
    if( opt_toggle === false ) return '';
    return value ? ' ' + name + ( value === true ? '' : '="' + value + '"' ) : '';
};

function createElement( tagName, attrs, opt_textContent, opt_toggle ){
    var attrStr = '';

    if( opt_toggle === false ) return '';
    for( var attr in attrs ){
        attrStr += createAttribute( attr, attrs[ attr ] );
    };
    return '\n<' + tagName + attrStr + '>' + ( opt_textContent ? opt_textContent + '</' + tagName + '>' : '' );
};

function createElementList( tagName, attrName, valueList, attrs, opt_toggle ){
    if( opt_toggle === false ) return '';

    var htmlStr = '';
    attrs = attrs || {};

    if( Array.isArray( valueList ) ){
        for( var i = 0; i < valueList.length; ++i ){
            attrs[ attrName ] = valueList[ i ];
            htmlStr += createElement( tagName, attrs );
        };
        return htmlStr;
    } else if( typeof valueList === 'string' ){
        attrs[ attrName ] = valueList;
        return createElement( tagName, attrs );
    };
    return '';
};

function resizeImage( url, width, height ){
    return googlePhotoURLResizer.resize( url, { width, height } )
};

function getRelativePath( currentPath, path ){
    if( !isExternalURL( path ) ){
        function toRelativePath( targetPath, currentPath ){
            var link = [], i = 0, depth, skip = false, name, l;
        
            // console.log( currentPath, '=>', targetPath )
            currentPath = currentPath.split( '/' );
            if( currentPath[ currentPath.length - 1 ] ){
                currentPath.pop();
            };
            
            targetPath = targetPath.split('/');
            name = targetPath.pop();
            for( depth = currentPath.length, l = Math.max( targetPath.length, depth ); i < l; ++i ){
                if( skip || targetPath[ i ] !== currentPath[ i ] ){
                    if( i < depth ) link.unshift('..');
                    if( targetPath[ i ] ) link.push( targetPath[ i ] );
                    skip = true;
                };
                // console.log( link.join('/'), depth, targetPath.length, i )
            };
            if( name && name !== 'index.html' ){
                link.push( name );
            } else {
                link.push( '' );
            };
            link = link.join('/') || './';
            // console.log( ' >> ', link )

            return link;
        };
        // console.log( page.path, path, '=>', toRelativePath( path, page.path ) );
        return toRelativePath( path, currentPath );
    };
    return path;
};

function isExternalURL( path ){
    path = path || '';
    return path.indexOf( 'http' ) === 0 || path.indexOf( '//' ) === 0;
};