/**
 *  common :
 *    1. svg の optimaize
 *    2. ttf から woff2 を作る(ttf2woff2)
 *    3. woff から otf を作る(woff2eot)
 *  main :
 *    4. ttf.css、otf.css, woff.css、woff2.css、eot.css、svg.css を作る
 *    5. PATH_LIST の js ファイルを作る
 *  scssVariable :
 *    6. DataURI の scss 変数ファイルを作る
 */
module.exports = {
    main : function( opt_jsFilePath ){
        jsFilePath   = opt_jsFilePath;
        scssFileName = '';
        svgOriginal  = '';
        isMainTask   = true;
        return gulpPlugin;
    },
    scssVariable : function( _scssFileName ){
        scssFileName = _scssFileName;
        jsFilePath   = '';
        svgOriginal  = '';
        isMainTask   = false;
        return gulpPlugin;
    }
};

let svgo, woff2otf, ttf2woff2,
    jsFilePath, scssFileName, isMainTask, svgOriginal;

const PluginError  = require( 'plugin-error' ),
      Vinyl        = require( 'vinyl' ),
      FONT_BUFFERS = {},
      CSS_FILES    = {};

const DATA_MINETYPE_CHARSET_BASE64 = {
    'eot'   : 'data:font/eot;base64,',
    'woff'  : 'data:font/woff;base64,',
    'woff2' : 'data:font/woff2;base64,',
    'ttf'   : 'data:font/ttf;base64,',
    'otf'   : 'data:font/otf;base64,',
    'svg'   : 'data:image/svg+xml;base64,'
};

const WEBFONT_FORMAT = {
    'eot'   : 'embedded-opentype',
    'woff'  : 'woff',
    'woff2' : 'woff2',
    'ttf'   : 'truetype',
    'otf'   : 'opentype',
    'svg'   : 'svg'
};

const SVGO_OPTIONS = {
    plugins : [
        {
            name   : 'preset-default',
            params : {
                overrides : {
                    convertPathData   : { floatPrecision : 0 },
                    // removeXMLProcInst : false,
                    // removeDoctype     : false,
                    cleanupAttrs      : false, // unicode=" " の削除を抑止
                    removeEmptyAttrs  : false  // unicode=" ", d="" の削除を抑止
                }
            }
        }
    ]
};

const gulpPlugin = require( 'through2' )
    .obj(
        function( file, encoding, cb ){
            if( file.isNull() ) return cb( null, file );

            if( file.isStream() ) return cb( new PluginError( 'web-font', 'Streaming not supported' ) );

            let buffer = file.contents;

            let transformer, newExtname;

            switch( file.extname ){
                case '.svg' : // (1)
                    svgo = svgo || require( 'svgo' );
                    transformer = optimaizeSVG;
                    newExtname  = '.svg';
                    if( jsFilePath ){
                        svgOriginal = buffer.toString( encoding );
                    };
                    break;
                case '.ttf' : // (2)
                    transformer = ttf2woff2 = ttf2woff2 || require( 'ttf2woff2' );
                    newExtname  = '.woff2';
                    FONT_BUFFERS[ file.extname ] = buffer;
                    isMainTask && this.push( file );
                    break;
                case '.woff' : // (3)
                    transformer = woff2otf = woff2otf || require( 'woff2otf' );
                    newExtname  = '.otf';
                    FONT_BUFFERS[ file.extname ] = buffer;
                    isMainTask && this.push( file );
                    break;
                case '.eot' :
                    FONT_BUFFERS[ file.extname ] = buffer;
                    return isMainTask ? cb( null, file ) : cb();
                case '.css' : // (4)
                    CSS_FILES[ file.basename ] = file;
                    return cb();
                default :
                    return cb( new PluginError( 'web-font', file.basename + ' Unknown file type!' ) );
            };

            if( transformer ){ // (1), (2), (3)
                buffer = FONT_BUFFERS[ newExtname ] = transformer( buffer );
                isMainTask && this.push(
                    new Vinyl(
                        {
                            path     : './' + file.basename.split( file.extname ).join( newExtname ),
                            contents : buffer
                        }
                    )
                );
            };
            return cb();

            function optimaizeSVG( buffer ){
                let svg = svgo.optimize(
                        buffer.toString( encoding ),
                        SVGO_OPTIONS
                    ).data.split( ' unicode="' );

                // SAX が解除した unicode 属性の再エンティティ化
                for( let i = 1, l = svg.length; i < l; ++i ){
                    const str   = svg[ i ];
                    const end   = str.indexOf( '"' );
                    let unicode = str.substring( 0, end );
        
                    if( Array.from( unicode ).length === 1 ){
                        unicode = '&#x' + unicode.codePointAt( 0 ).toString( 16 ) + ';';
                    };
                    svg[ i ] = unicode + str.substring( end );
                };

                // glyph-name 属性の削除
                svg = svg.join( ' unicode="' ).split( ' glyph-name="' );
                for( let i = 1, l = svg.length; i < l; ++i ){
                    const str = svg[ i ];
                    svg[ i ] = str.substring( str.indexOf( '"' ) + 1 );
                };

                return Buffer.from( svg.join( '' ) );
            };
        },
        function( cb ){
            if( isMainTask ){
                for( let basename in CSS_FILES ){ // (4)
                    const file    = CSS_FILES[ basename ];
                    const extname = basename.split( '.css' ).join( '' );
                    const buffer  = FONT_BUFFERS[ '.' + extname ];

                    if( buffer ){
                        const cssText = file.contents.toString();
                        const start   = 'data:';
                        const end     = "') format('";
                        const last    = cssText.split( end )[ 1 ];

                        file.contents = Buffer.from(
                            cssText.split( start )[ 0 ] + DATA_MINETYPE_CHARSET_BASE64[ extname ] +
                            buffer.toString( 'base64' ) +
                            end + WEBFONT_FORMAT[ extname ] + "');" + last.split( "');" )[ 1 ]
                        );
                        this.push( file );
                    } else {
                        return cb( new PluginError( 'web-font', extname + ' not found!' ) );
                    };
                };
                if( jsFilePath && svgOriginal ){ // (5)
                    require( 'xml2js' ).Parser().parseString(
                        svgOriginal,
                        function( error, result ){
                            if( error ) throw error;
            
                            const font      = result.svg.defs[ 0 ].font[ 0 ];
                            const fontFace  = font[ 'font-face' ][ 0 ].$;
                            const width     = fontFace[ 'units-per-em' ];
                            const ascent    = fontFace[ 'ascent' ];
                            const descent   = fontFace[ 'descent' ];
                            const glyphList = font.glyph;
                            const glyphMap  = {};
            
                            for( let i = 0, l = glyphList.length; i < l; ++i ){
                                const glyph = glyphList[ i ].$;
                                // 文字列を1文字ずつ配列化（サロゲートペアを考慮）
                                // https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7
                                if( glyph.d && glyph.unicode && Array.from( glyph.unicode ).length === 1 ){
                                    glyphMap[ glyph.unicode ] = createOptimaizedPath( glyph.d, width, ascent, descent );
                                };
                            };
                            require( 'fs' ).writeFile(
                                jsFilePath,
                                Buffer.from(
                                    '// THIS SCRIPT IS GENERATED BY "gulp ico". DO NOT EDIT!\n\n' +
                                    'var VectorIconCompat_PATH_LIST = \n' + JSON.stringify( glyphMap, null, '    ' ) + ';'
                                ),
                                cb
                            );
                        }
                    );
                    return;
                };
            } else if( scssFileName ){ // (6)
                let scss = '/* THIS SCSS IS GENERATED BY "gulp ico". DO NOT EDIT! */\n\n';

                for( let extname in FONT_BUFFERS ){
                    const base64 = FONT_BUFFERS[ extname ].toString( 'base64' );
                    extname = extname.substr( 1 );
                    const EXTNAME = extname.toUpperCase();
                    scss += '$WEBFONT_FORMAT_'       + EXTNAME + ' : "' + WEBFONT_FORMAT[ extname ] + '" !default;\n\n';
                    scss += '$MINIMUM_FONT_DATAURI_' + EXTNAME + ' : "' + DATA_MINETYPE_CHARSET_BASE64[ extname ] + base64 + '" !default;\n\n';
                };

                this.push(
                    new Vinyl(
                        {
                            path     : './' + scssFileName,
                            contents : Buffer.from( scss )
                        }
                    )
                );
            };
            return cb();
        }
    );

function createOptimaizedPath( path, width, ascent, descent ){
    const height = 255;
    const scale = height / 1024;
    const result = svgo.optimize(
        '<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0,0,' + width * scale + ',' + height + '">' +
            '<g transform="matrix(' + scale + ', 0, 0, -' + scale + ', 0, ' + ascent * scale + ')">' +
                '<path d="' + path + '"/>' +
            '</g>' +
        '</svg>',
        SVGO_OPTIONS
    );
    // console.log( '>> ' + result.data )
    return result.data.split( ' d="' )[ 1 ].split( '"' )[ 0 ];
};