// :not(backslash) -> :not(\)

const PluginError = require('plugin-error'),
      Transform   = require('stream').Transform,
      PostCSS     = require('postcss');

module.exports = function(){
    var stream = new Transform( { objectMode : true } );

    stream._transform = function( file, encoding, cb ){
        if( file.isNull() ) return cb( null, file );

        if( file.isStream() ) return cb( new PluginError( 'gulp-finalize-css', 'Streaming not supported' ) );

        if( file.isBuffer() ){
            let css = PostCSS.parse( file.contents.toString( encoding ) ),
                rulesAddToEnd = [], updateCurrentFile;

            css.walkDecls(
                function( decl ){
                    var originalRule = decl.parent,
                        selector     = originalRule.selector;

                    if( selector ){
                        if( 0 <= selector.indexOf( ':-opera-lte71' ) ){
                            console.log( selector );
                            originalRule.selector = selector.replace( ':-opera-lte71', ':not(\\)' );
                            rulesAddToEnd.push( originalRule );
                            updateCurrentFile = true;
                        };
                    };
                }
            );

            if( updateCurrentFile ){
                while( rulesAddToEnd.length ){
                    css.append( rulesAddToEnd.shift() );
                };
                file.contents = Buffer.from( css.toString() );
            };
            this.push( file );
            cb();
        };
    };
    return stream;
};