/**
 * 1. @ media first-view-css {} 内のスタイルだけの CSS を作る
 * 2. 強制カラーモード用の別 CSS を作る
 * 3. forced-colors は -ms-high-contrast より後ろになるようにする
 * 4. screen(,handheld,projection,tv) ブロックが全てのブロックの先頭になるようにする
 */
module.exports = function( _COMMON_VARS ){

const PluginError = require( 'plugin-error' ),
      PostCSS     = require( 'postcss'      ),
      Vinyl       = require( 'vinyl'        ),
      COMMON_VARS = _COMMON_VARS || {};

const TARGET_FORCED_COLORS_MEDIA_QUERY            = 'only use-polyfill and (forced-colors:active)',
      TARGET_FORCED_COLORS_SMALLPHONE_MEDIA_QUERY = 'only use-polyfill and (forced-colors:active) and (max-width:###px)'.replace( '###', COMMON_VARS.COMMON_SMALL_PHONE_MAX_WIDTH );

return require( 'through2' )
    .obj(
        function( file, encoding, cb ){
            if( file.isNull() ) return cb( null, file );

            if( file.isStream() ) return cb( new PluginError( 'gulp-csshack', 'Streaming not supported' ) );

            let css = PostCSS.parse( file.contents.toString( encoding ) );
            let isUpdateCurrentFile;

            // 1. @ media first-view-css {} 内のスタイルだけの CSS を作る
            if( COMMON_VARS.COMMON_CSS_FILE_STEM__1ST_VIEW_CSS === file.stem ){
                const cssFor1stView = PostCSS.parse('/** 1st view CSS! **/');

                css.walkAtRules(
                    function( rule ){
                        if( rule.name === 'media' ){
                            if( rule.params == '(first-view-css:1)' ){
                                rule.walkRules( function( r ){
                                    cssFor1stView.append( r );
                                } );
                                rule.remove();
                            } else if( 0 < rule.params.indexOf(' and (first-view-css:1)') ){
                                rule.params = rule.params.split( ' and (first-view-css:1)' ).join( '' );
                                cssFor1stView.append( rule );
                            };
                        };
                    }
                );
                css = cssFor1stView;
                isUpdateCurrentFile = true;
            } else {
                const cssForForcedColors = PostCSS.parse('@charset "UTF-8"'),
                      rulesAddToEndOfForcedColorsCSS = [], mediaBlocksMoveToEndOfCSS = [];
                let isCreateCSSForForcedColors,
                    firstMediaBlock, screenMediaBlock;

                css.walkAtRules( function( rule ){
                    if( rule.name === 'media' ){
                        const mediaQuery = rule.params;
                    // 2. 強制カラーモード用の別 CSS を作る
                        if( COMMON_VARS.COMMON_CSS_DIR_TO_FORCED_COLORS_CSS_DIR ){
                            if( mediaQuery === TARGET_FORCED_COLORS_MEDIA_QUERY ){
                                rule.clone().walkRules( function( r ){
                                    cssForForcedColors.append( r );
                                } );
                                rule.remove();
                                isCreateCSSForForcedColors = isUpdateCurrentFile = true;
                                return;
                            };
                            // モバイル用クエリから不要なクエリを除去する
                            if( mediaQuery === TARGET_FORCED_COLORS_SMALLPHONE_MEDIA_QUERY ){
                                rule.params = 'screen and (max-width' + mediaQuery.split( 'max-width' )[ 1 ];
                                rulesAddToEndOfForcedColorsCSS.push( rule.clone() );
                                rule.remove();
                                isCreateCSSForForcedColors = isUpdateCurrentFile = true;
                                return;
                            };
                        };
                    // 3. forced-colors は -ms-high-contrast より後ろになるようにする
                        if( 0 <= mediaQuery.indexOf( 'only screen and (forced-colors:' ) ){
                            mediaBlocksMoveToEndOfCSS.push( rule );
                            rule.remove();
                            isUpdateCurrentFile = true;
                        } else {
                    // 4. screen(,handheld,projection,tv) ブロックが全てのブロックの先頭になるようにする
                            if( !firstMediaBlock && rule.parent.name !== 'supports' ){
                                firstMediaBlock = rule;
                            };
                            const mediaList = mediaQuery.replace( /\s/g, '' ).split( ',' );
                            if( 0 <= mediaList.indexOf( 'screen' ) && mediaList.indexOf( 'print' ) === -1 && mediaQuery.indexOf( '(' ) === -1 ){
                                screenMediaBlock = rule;
                                isUpdateCurrentFile = true;
                            };
                        };
                    };
                });

                if( isCreateCSSForForcedColors ){
                    while( rulesAddToEndOfForcedColorsCSS.length ){
                        cssForForcedColors.append( rulesAddToEndOfForcedColorsCSS.shift() );
                    };
                    this.push(
                        new Vinyl(
                            {
                                base     : file.base,
                                path     : file.path.split( file.basename ).join( COMMON_VARS.COMMON_CSS_DIR_TO_FORCED_COLORS_CSS_DIR + '/' + file.basename ),
                                contents : Buffer.from( cssForForcedColors.toString() )
                            }
                        )
                    );
                };
                if( firstMediaBlock && screenMediaBlock && firstMediaBlock !== screenMediaBlock ){
                    firstMediaBlock.before( screenMediaBlock ); // 4. @media screen {} を @media の先頭へ!
                };
    
                if( mediaBlocksMoveToEndOfCSS.length ){
                    while( mediaBlocksMoveToEndOfCSS.length ){
                        css.append( mediaBlocksMoveToEndOfCSS.shift() );
                    };
                };
            };

            if( isUpdateCurrentFile ){
                file.contents = Buffer.from( css.toString() );
            };
            this.push( file );
            cb();
        }
    );
};