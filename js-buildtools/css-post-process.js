/**
 * 1. 疑似要素の適正化
 * 2. CSS hack
 * 3. @-moz-document を @ media の最期へ
 * 4. oper7.0 用の CSS では background:0 0 を backgeound:transparent に
 */
module.exports = function( _options ){

const PluginError = require( 'plugin-error' ),
      PostCSS     = require( 'postcss'      ),
      options     = _options || {};

return require( 'through2' )
    .obj(
        function( file, encoding, cb ){
            if( file.isNull() ) return cb( null, file );

            if( file.isStream() ) return cb( new PluginError( 'gulp-finalize-css', 'Streaming not supported' ) );

            const css = PostCSS.parse( file.contents.toString( encoding ) );
            let isUpdateCurrentFile;

            // 1. 疑似要素の適正化
            css.walkRules(
                function( rule ){
                    const selector = rule.selector.split( ':before:hover'  ).join( ':hover:before'  )
                                                  .split( ':before:active' ).join( ':active:before' )
                                                  .split( ':before:focus'  ).join( ':focus:before'  )
                                                  .split( ':before:target' ).join( ':target:before' )
                                                  .split( ':after:hover'   ).join( ':hover:after'   )
                                                  .split( ':after:active'  ).join( ':active:after'  )
                                                  .split( ':after:focus'   ).join( ':focus:after'   )
                                                  .split( ':after:target'  ).join( ':target:after'  );
                    if( selector !== rule.selector ){
                        rule.selector = selector;
                        isUpdateCurrentFile = true;
                    };
                }
            );
            // 2. CSS hack
            //  したいこと
            //   _:hack, a {color:red}, _:csshack, b {color:red}
            //   ↓
            //   a, b, _:hack {color:red}
            // 非対応のセレクタ(_:csshack)を含むルールは無視される挙動を使った CSS ハックを含むルールは
            // CSS の最適化から除外されてしまう為、同一のプロパティを持つセレクタが、
            // 別のルールになってしまう。
            // そこで属性セレクタに CSS ハックのセレクタを書いておいて、CSS の最適化が終わったタイミングで
            // セレクターに戻す。
            //    a[_lazyhack_="_:hack"] {color:red}
            //    ↓
            //    a, _:hack {color:red}
            // ハック用のセレクタが複数のケース
            //    a[_lazyhack_="_:hack1|_:hack2"]
            //    ↓
            //    a, _:hack1, _hack2 {color:red}
            css.walkDecls(
                function( decl ){
                    const marker           = '[_lazyhack_="',
                          originalRule     = decl.parent,
                          originalSelector = originalRule.selector,
                          selectorNoHack   = [],
                          selectorHacked   = {};
                    let beforeRule = originalRule;

                    function getFirstCsshack( selector ){
                        const start = selector.indexOf( marker );

                        if( 0 <= start ){
                            const end        = selector.indexOf( '"]', start );
                            const hackString = selector.substring( start + marker.length, end );
                            // console.log( hackString )
                            return hackString;
                        };
                    };

                    if( originalSelector && originalRule.parent ){
                        if( getFirstCsshack( originalSelector ) ){
                            // console.log( originalRule.toString() );
                            const selectors = originalSelector.split( ',' );
                            let selector, hackString;
                            while( selector = selectors.shift() ){
                                if( hackString = getFirstCsshack( selector ) ){
                                    selectorHacked[ hackString ] = selectorHacked[ hackString ] || [];
                                    selectorHacked[ hackString ].push( selector.replace( ' ' + marker + hackString + '"]', '' ) );
                                } else {
                                    selectorNoHack.push( selector );
                                };
                            };
    
                            for( hackString in selectorHacked ){
                                const newRule = beforeRule.clone();
                                newRule.selector = selectorHacked[ hackString ].join( ',' ) + ',' + hackString.split( '|' ).join( ',' );
                                beforeRule.after( newRule );
                                beforeRule = newRule;
                            };
                            if( selectorNoHack.length ){
                                originalRule.selector = selectorNoHack.join( ',' );
                            } else {
                                originalRule.remove();
                            };
                            isUpdateCurrentFile = true;
                        };
                    };
                }
            );
        // 3. @-moz-document を @ media の最期へ
            const toEndOfMediaBlock = [];

            css.walkAtRules( function( rule ){
                if( rule.name === '-moz-document' ){
                    if( rule.parent.name === 'media' ){
                        toEndOfMediaBlock.push( rule.parent, rule );
                    } else {
                        // toEndOfMediaBlock.push( css, rule );
                    };
                };
            });
            while( toEndOfMediaBlock.length ){
                toEndOfMediaBlock.shift().append( toEndOfMediaBlock.shift() );
                isUpdateCurrentFile = true;
            };

        // 4. oper7.0 用の CSS では background:0 0 を backgeound:transparent に
            if( options.fileNameOpera70 === file.basename ){
                css.walkDecls(
                    function( decl ){
                        if( decl.prop === 'background' && decl.value === '0 0' ){
                            decl.value = 'transparent';
                            isUpdateCurrentFile = true;
                        };
                    }
                );
            };

        // 5 finish
            if( isUpdateCurrentFile ){
                file.contents = Buffer.from( css.toString() );
            };
            this.push( file );
            cb();
        }
    );
};