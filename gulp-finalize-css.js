// Create CSS for High Contrast mode.
// Delete " [firefox]" and add ",x:-moz-any-link".
// Delete " [opera-lte9]" and add ",x:not(\\)" to .cleardix selector.

const TARGET_HC_MEDIA_QUERY = 'only dynamic-css and (-ms-high-contrast:active)',
      TARGET_HC_SMALLPHONE_MEDIA_QUERY = 'only dynamic-css and (-ms-high-contrast:active) and (max-width:319px)',
      PluginError = require('plugin-error'),
      Transform   = require('stream').Transform,
      PostCSS     = require('postcss'),
      Vinyl       = require('vinyl');

module.exports = function( options ){
    var stream = new Transform( { objectMode : true } ),
        opts   = options || {};

    stream._transform = function( file, encoding, cb ){
        if( file.isNull() ) return cb(null, file);

        if( file.isStream() ) return cb( new PluginError( 'gulp-finalize-css', 'Streaming not supported' ) );

        if( file.isBuffer() ){
            let css = PostCSS.parse( file.contents.toString( encoding ) ),
                newCss, rulesAddToEnd = [], createNewFile, updateCurrentFile;

            if( opts.hcdir ){
                newCss = PostCSS.parse('@charset "UTF-8"');

                css.walkAtRules( function( rule ){
                    if( rule.name === 'media' && rule.params === TARGET_HC_MEDIA_QUERY ){
                        rule.clone().walkRules( function( r ){
                            newCss.append( r );
                        } );
                        rule.remove();
                        createNewFile = updateCurrentFile = true;
                    };
                    if( rule.name === 'media' && rule.params === TARGET_HC_SMALLPHONE_MEDIA_QUERY ){
                        rule.params = '(max-width' + rule.params.split( 'max-width' )[ 1 ];
                        rulesAddToEnd.push( rule.clone() );
                        rule.remove();
                        createNewFile = updateCurrentFile = true;
                    };
                });

                if( createNewFile ){
                    while( rulesAddToEnd.length ){
                        newCss.append( rulesAddToEnd.shift() );
                    };
                    this.push(new Vinyl({
                        base     : '/',
                        path     : ( ( file.dirname !== '\\' && file.dirname !== '/' ) ? file.dirname : '' ) + '/' + opts.hcdir + '/' + file.basename,
                        contents : Buffer.from(newCss.toString())
                    }));
                };
            };

            css.walkDecls('content', function( decl ){
                var rule = decl.parent;

                if( 0 <= rule.selector.indexOf( ' [firefox]' ) ){
                    workForHack( rule, ' [firefox]', ',x:-moz-any-link' );
                } else if( 0 <= rule.selector.indexOf( ' [opera-lte9]' ) ){
                    workForHack( rule, ' [opera-lte9]', ',x:not(\\)', true );
                };
            });
            css.walkDecls('display', function( decl ){
                var rule = decl.parent;

                if( 0 <= rule.selector.indexOf( ' [firefox]' ) ){
                    workForHack( rule, ' [firefox]', ',x:-moz-any-link' );
                };
            });

            function workForHack( rule, marker, hackString, goToLast ){
                var selectors, selectorOther = [], selectorTarget = [],
                    selector, newRule;

                if( 0 <= rule.selector.indexOf( marker ) ){
                    selectors = rule.selector.split( ',' );
                    while( selector = selectors.shift() ){
                        if( 0 < selector.indexOf( marker ) ){
                            selectorTarget.push( selector.replace( marker, '' ) );
                        } else {
                            selectorOther.push( selector );
                        };
                    };
                    if( selectorOther.length ){
                        newRule          = rule.clone();
                        rule.selector    = selectorOther.join( ',' );
                        newRule.selector = selectorTarget.join( ',' ) + hackString;
                        goToLast ? rulesAddToEnd.push( newRule ) : rule.after( newRule );
                    } else {
                        rule.selector = selectorTarget.join( ',' ) + hackString;
                        goToLast && rulesAddToEnd.push( rule );
                    };
                    updateCurrentFile = true;
                };
            };

            if( updateCurrentFile ){
                while( rulesAddToEnd.length ){
                    css.append( rulesAddToEnd.shift() );
                };
                file.contents = Buffer.from(css.toString());
            };
            this.push(file);
            cb();
        };
    };
    return stream;
};