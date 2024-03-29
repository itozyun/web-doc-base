/**
 * 1. 強制カラーモード用の別 CSS を作る
 * 2. メディアクエリ有の screen メディアタイプのブロックを screen ブロック下に移動する
 *    この時に forced-colors は -ms-high-contrast より後ろになるようにする
 * 3. screen(,handheld,projection,tv) ブロックが全てのブロックの先頭になるようにする
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

            const css = PostCSS.parse( file.contents.toString( encoding ) ),
                  cssForForcedColors = PostCSS.parse('@charset "UTF-8"');
                  rulesAddToEndOfForcedColorsCSS = [], mediaBlocksMoveToEndOfCSS = [];

            let isCreateCSSForForcedColors, isUpdateCurrentFile,
                firstMediaBlock, screenMediaBlock;

            css.walkAtRules( function( rule ){
                if( rule.name === 'media' ){
                    const mediaQuery = rule.params;
                // 1. 強制カラーモード用の別 CSS を作る
                    if( COMMON_VARS.COMMON_CSS_DIR_TO_FORCED_COLORS_CSS_DIR ){
                        if( mediaQuery === TARGET_FORCED_COLORS_MEDIA_QUERY ){
                            rule.clone().walkRules( function( r ){
                                cssForForcedColors.append( r );
                            } );
                            rule.remove();
                            isCreateCSSForForcedColors = isUpdateCurrentFile = true;
                            return;
                        };
                        if( mediaQuery === TARGET_FORCED_COLORS_SMALLPHONE_MEDIA_QUERY ){
                            rule.params = 'screen and (max-width' + mediaQuery.split( 'max-width' )[ 1 ];
                            rulesAddToEndOfForcedColorsCSS.push( rule.clone() );
                            rule.remove();
                            isCreateCSSForForcedColors = isUpdateCurrentFile = true;
                            return;
                        };
                    };

                    if( 0 <= mediaQuery.indexOf( 'only screen and (forced-colors:' ) ){ // -ms-high-contrast:active より後へ
                        mediaBlocksMoveToEndOfCSS.push( rule );
                        rule.remove();
                        isUpdateCurrentFile = true;
                    } else {
                // 3. screen(,handheld,projection,tv) ブロックが全てのブロックの先頭になるようにする
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
                            path     : ( ( file.dirname !== '\\' && file.dirname !== '/' ) ? file.dirname : '.' ) + '/' + COMMON_VARS.COMMON_CSS_DIR_TO_FORCED_COLORS_CSS_DIR + '/' + file.basename,
                            contents : Buffer.from( cssForForcedColors.toString() )
                        }
                    )
                );
            };

            if( isUpdateCurrentFile ){
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
        }
    );
};