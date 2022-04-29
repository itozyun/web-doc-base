// Create CSS for High Contrast mode.
// Delete " [navigator-lte7]" and add ", :-o-prefocus, _:-moz-any-link".
// Delete " [opera-lte720]" and add ",x:not(\\)" to .cleardix selector.

const TARGET_FORCED_COLORS_MEDIA_QUERY            = 'only use-pollyfill and (forced-colors:active)',
      TARGET_FORCED_COLORS_SMALLPHONE_MEDIA_QUERY = 'only use-pollyfill and (forced-colors:active) and (max-width:###px)',
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
                cssForForcedColors, rulesAddToEndOfForcedColorsCSS = [], mediaBlocksMoveToEndOfCSS = [],
                createCSSForForcedColors, updateCurrentFile,
                firstMediaBlock, screenMediaBlock;

            //  したいこと
            //   _:hack, a {color:red}, _:csshack, b {color:red}
            //   ↓
            //   a, b, _:hack {color:red}
            // 非対応のセレクタ(_:csshack)を含むルールは無視される挙動を使った CSS ハックを含むルールは
            // CSS の最適化から除外されてしまう為、同一のプロパティを持つセレクタが、
            // 別のルールになってしまう。
            // そこで属性セレクタに CSS ハックのセレクタを書いておいて、CSS の最適化が終わったタイミングで
            // セレクターに戻す。
            //    a[_csshack_="_:hack"] {color:red}
            //    ↓
            //    a, _:hack {color:red}
            // ハック用のセレクタが複数のケース
            //    a[_csshack_="_:hack1|_:hack2"]
            //    ↓
            //    a, _:hack1, _hack2 {color:red}
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

            // 1. 強制カラーモード用の別 CSS を作る
            // 2. メディアクエリ有の screen メディアタイプのブロックを screen ブロック下に移動する
            //    この時に forced-colors は -ms-high-contrast より後ろになるようにする
            // 3. screen(,handheld,projection,tv) ブロックが全てのブロックの先頭になるようにする
            cssForForcedColors = PostCSS.parse('@charset "UTF-8"');

            css.walkAtRules( function( rule ){
                if( rule.name === 'media' ){
                    var mediaQuery = rule.params;
                    // forced-colors 用の別ファイルを作る
                    if( opts.forcedColorsCSSDir ){
                        if( mediaQuery === TARGET_FORCED_COLORS_MEDIA_QUERY ){
                            rule.clone().walkRules( function( r ){
                                cssForForcedColors.append( r );
                            } );
                            rule.remove();
                            createCSSForForcedColors = updateCurrentFile = true;
                            return;
                        };
                        if( mediaQuery === TARGET_FORCED_COLORS_SMALLPHONE_MEDIA_QUERY.replace( '###', opts.smallPhoneMaxWidth ) ){
                            rule.params = 'screen and (max-width' + mediaQuery.split( 'max-width' )[ 1 ];
                            rulesAddToEndOfForcedColorsCSS.push( rule.clone() );
                            rule.remove();
                            createCSSForForcedColors = updateCurrentFile = true;
                            return;
                        };
                    };

                    if( 0 <= mediaQuery.indexOf( 'only screen and (forced-colors:' ) ){ // -ms-high-contrast:active より後へ
                        mediaBlocksMoveToEndOfCSS.push( rule );
                        rule.remove();
                        updateCurrentFile = true;
                    } else {
                        if( !firstMediaBlock ){
                            firstMediaBlock = rule;
                        };
                        var mediaList = mediaQuery.replace( /\s/g, '' ).split( ',' );
                        if( 0 <= mediaList.indexOf( 'screen' ) && mediaList.indexOf( 'print' ) === -1 && mediaQuery.indexOf( '(' ) === -1 ){
                            screenMediaBlock = rule;
                            updateCurrentFile = true;
                        };
                    };
                };
            });

            if( createCSSForForcedColors ){
                while( rulesAddToEndOfForcedColorsCSS.length ){
                    cssForForcedColors.append( rulesAddToEndOfForcedColorsCSS.shift() );
                };
                this.push(
                    new Vinyl(
                        {
                            base     : '/',
                            path     : ( ( file.dirname !== '\\' && file.dirname !== '/' ) ? file.dirname : '' ) + '/' + opts.forcedColorsCSSDir + '/' + file.basename,
                            contents : Buffer.from( cssForForcedColors.toString() )
                        }
                    )
                );
            };

            if( updateCurrentFile ){
                if( firstMediaBlock && screenMediaBlock && firstMediaBlock !== screenMediaBlock ){
                    firstMediaBlock.before( screenMediaBlock ); // @media screen {} を @media の先頭へ!
                };
    
                if( mediaBlocksMoveToEndOfCSS.length ){
                    while( mediaBlocksMoveToEndOfCSS.length ){
                        css.append( mediaBlocksMoveToEndOfCSS.shift() );
                    };
                };
                file.contents = Buffer.from( css.toString() );
            };
            this.push( file );
            cb();
        };
    };
    return stream;
};