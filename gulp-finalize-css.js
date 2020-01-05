// Creaet CSS for High Contrast mode.
// Delete " [firefox-gte2]" and add ",x:-moz-any-link" to .cleardix selector.
// Delete " [firefox-gte2]", add ",x:-moz-any-link" and replace the value from "_" to " ".
// Delete " [opera-lte9]" and add ",x:not(\\)" to .cleardix selector.

const TARGET_HC_MEDIA_QUERY = 'only screen and (-ms-high-contrast:active)',
      PluginError = require('plugin-error'),
      Transform   = require('stream').Transform,
      PostCSS     = require('postcss'),
      Vinyl       = require('vinyl');

module.exports = function( options ){
    var stream = new Transform( { objectMode : true } ),
        opts   = options || {};

    stream._transform = function( file, encoding, cb ){
        if( file.isNull() ) return cb(null, file);

        if( file.isStream() ) return cb( new PluginError( 'mqo', 'Streaming not supported' ) );

        if( file.isBuffer() ){
            let css = PostCSS.parse( file.contents.toString( encoding ) ),
                newCss, createNewFile, updateCurrentFile;

            if( opts.hcdir ){
                newCss = PostCSS.parse('@charset "UTF-8"');

                css.walkAtRules( function( rule ){
                    if( rule.name === 'media' && rule.params === TARGET_HC_MEDIA_QUERY ){
                        rule.clone().walkRules( function( r ){
                            newCss.append( r );
                        } );
                        rule.remove();
                        createNewFile = true;
                    };
                });

                if( createNewFile ){
                    this.push(new Vinyl({
                        base     : '/',
                        path     : ( ( file.dirname !== '\\' && file.dirname !== '/' ) ? file.dirname : '' ) + '/' + opts.hcdir + '/' + file.basename,
                        contents : Buffer.from(newCss.toString())
                    }));
                };
            };

            css.walkDecls('content', function( decl, rule ){
                rule = decl.parent;
                if( decl.value === '""' && 0 <= rule.selector.indexOf( ' [firefox-gte2]' ) ){
                    rule.selector = rule.selector.split( ' [firefox-gte2]' ).join( '' ) + ',x:-moz-any-link';
                    updateCurrentFile = true;
                } else if( decl.value === '"_"' && 0 <= rule.selector.indexOf( ' [firefox-gte2]' ) ){
                    rule.selector = rule.selector.split( ' [firefox-gte2]' ).join( '' ) + ',x:-moz-any-link';
                    decl.value = '" "';
                    updateCurrentFile = true;
                } else if( decl.value === '" "' && 0 <= rule.selector.indexOf( ' [opera-lte9]' ) ){
                    rule.selector = rule.selector.split( ' [opera-lte9]' ).join( '' ) + ',x:not(\\)';
                    css.append( rule ); // go to last
                    updateCurrentFile = true;
                };
            });

            if( updateCurrentFile ){
                file.contents = Buffer.from(css.toString());
            };
            this.push(file);
            cb();
        };
    };
    return stream;
};