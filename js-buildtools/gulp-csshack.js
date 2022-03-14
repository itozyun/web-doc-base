// Create CSS for High Contrast mode.
// Delete " [navigator-lte7]" and add ", :-o-prefocus, _:-moz-any-link".
// Delete " [opera-lte720]" and add ",x:not(\\)" to .cleardix selector.

const TARGET_HC_MEDIA_QUERY            = 'only dynamic-css and (-ms-high-contrast:active)',
      TARGET_HC_SMALLPHONE_MEDIA_QUERY = 'only dynamic-css and (-ms-high-contrast:active) and (max-width:###px)',
      PluginError = require('plugin-error'),
      Transform   = require('stream').Transform,
      PostCSS     = require('postcss'),
      Vinyl       = require('vinyl');

module.exports = function( options ){
    var stream = new Transform( { objectMode : true } ),
        opts   = options || {};

    stream._transform = function( file, encoding, cb ){
        if( file.isNull() ) return cb( null, file );

        if( file.isStream() ) return cb( new PluginError( 'gulp-csshack', 'Streaming not supported' ) );

        if( file.isBuffer() ){
            let css = PostCSS.parse( file.contents.toString( encoding ) ),
                newCss, rulesAddToEnd = [], rulesOnlyScreen = [], createNewFile, updateCurrentFile, onlyScreenMediaBlock,
                firstMediaBlock, screenMediaBlock;

            newCss = PostCSS.parse('@charset "UTF-8"');

            css.walkAtRules( function( rule ){
                if( rule.name === 'media' ){
                    if( opts.forcedColorsCSSDir ){
                        if( rule.params === TARGET_HC_MEDIA_QUERY ){
                            rule.clone().walkRules( function( r ){
                                newCss.append( r );
                            } );
                            rule.remove();
                            createNewFile = updateCurrentFile = true;
                            return;
                        };
                        if( rule.params === TARGET_HC_SMALLPHONE_MEDIA_QUERY.replace( '###', opts.smallPhoneMaxWidth ) ){
                            rule.params = '(max-width' + rule.params.split( 'max-width' )[ 1 ];
                            rulesAddToEnd.push( rule.clone() );
                            rule.remove();
                            createNewFile = updateCurrentFile = true;
                            return;
                        };
                    };

                    if( !firstMediaBlock ){
                        firstMediaBlock = rule;
                    };

                    if( rule.params.indexOf( 'only screen and (prefers-color-scheme:' ) === 0 ||
                        rule.params.indexOf( 'only screen and (-ms-high-contrast:active) and (prefers-color-scheme:dark)' ) === 0
                    ){
                        rule.params = rule.params.split( 'only screen and ' ).join( '' );
                        rulesOnlyScreen.push( rule.clone() );
                        rule.remove();
                        updateCurrentFile = true;
                    } else if( rule.params === 'screen' || rule.params.replace(/\s/g, '') === 'screen,handheld' || rule.params.replace(/\s/g, '') === 'screen,handheld,tv' ){
                        screenMediaBlock = rule;
                        updateCurrentFile = true;
                    };
                };
            });

            if( createNewFile ){
                while( rulesAddToEnd.length ){
                    newCss.append( rulesAddToEnd.shift() );
                };
                this.push(new Vinyl({
                    base     : '/',
                    path     : ( ( file.dirname !== '\\' && file.dirname !== '/' ) ? file.dirname : '' ) + '/' + opts.forcedColorsCSSDir + '/' + file.basename,
                    contents : Buffer.from(newCss.toString())
                }));
            };

            if( firstMediaBlock && screenMediaBlock ){
                firstMediaBlock.before( screenMediaBlock ); // @media screen {} を @media の先頭へ!
            };

            css.walkDecls( function( decl ){
                var marker           = '[_csshack_="',
                    originalRule     = decl.parent,
                    beforeRule       = originalRule,
                    originalSelector = originalRule.selector,
                    selectors,
                    selectorNoHack = [], selectorHacked = {},
                    selector, hackString, newRule;

                function getFirstCsshack( selector ){
                    var start = selector.indexOf( marker ),
                        end, hackString;

                    if( 0 <= start ){
                        end        = selector.indexOf( '"]', start );
                        hackString = selector.substring( start + marker.length, end );
                        // console.log( hackString )
                        return hackString;
                    };
                };

                if( originalSelector && originalRule.parent ){ // originalRule.remove() で css tree から抜かれているケースがあるので、parent をチェックする
                    if( getFirstCsshack( originalSelector ) ){
                        // console.log( originalRule.toString() );
                        selectors = originalSelector.split( ',' );
    
                        while( selector = selectors.shift() ){
                            if( hackString = getFirstCsshack( selector ) ){
                                selectorHacked[ hackString ] = selectorHacked[ hackString ] || [];
                                selectorHacked[ hackString ].push( selector.replace( ' ' + marker + hackString + '"]', '' ) );
                            } else {
                                selectorNoHack.push( selector );
                            };
                        };

                        for( hackString in selectorHacked ){
                            newRule          = beforeRule.clone();
                            newRule.selector = selectorHacked[ hackString ].join( ',' ) + ',' + hackString.split( '|' ).join( ',' );
                            beforeRule.after( newRule );
                            beforeRule = newRule;
                        };
                        if( selectorNoHack.length ){
                            originalRule.selector = selectorNoHack.join( ',' );
                        } else {
                            originalRule.remove();
                        };
                        updateCurrentFile = true;
                    };
                };
            });

            if( rulesOnlyScreen.length ){
                onlyScreenMediaBlock = PostCSS.atRule( { name : 'media', params : 'only screen' } );
                css.append( onlyScreenMediaBlock );
                while( rulesOnlyScreen.length ){
                    onlyScreenMediaBlock.append( rulesOnlyScreen.shift() );
                };
            };

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