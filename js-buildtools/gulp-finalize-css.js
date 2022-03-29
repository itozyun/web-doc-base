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

            css.walkRules(
                function( rule ){
                    var selector = rule.selector.split( ':before:hover'  ).join( ':hover:before'  )
                                                .split( ':before:active' ).join( ':active:before' )
                                                .split( ':before:focus'  ).join( ':focus:before'  )
                                                .split( ':before:target' ).join( ':target:before' )
                                                .split( ':after:hover'   ).join( ':hover:after'   )
                                                .split( ':after:active'  ).join( ':active:after'  )
                                                .split( ':after:focus'   ).join( ':focus:after'   )
                                                .split( ':after:target'  ).join( ':target:after'  );
                    if( selector !== rule.selector ){
                        rule.selector = selector;
                        updateCurrentFile = true;
                    };
                }
            );

            css.walkDecls(
                function( decl ){
                    var marker           = '[_lazyhack_="',
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

                    if( originalSelector && originalRule.parent ){
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