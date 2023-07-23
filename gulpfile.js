'use strict';
const gulp            = require('gulp'),
      moduleName      = 'web-doc-base',
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,navigator,Function,Date,parseFloat,isFinite,setTimeout,clearTimeout,setInterval';

let gulpDPZ, ClosureCompiler, postProcessor, es2ToES3;
let minify = true;
let output = './docs/';

/* -------------------------------------------------------
 *  whatbrowserami
 */
function createInlineScript(){
    gulpDPZ         = gulpDPZ         || require( 'gulp-diamond-princess-zoning' );
    ClosureCompiler = ClosureCompiler || require( 'google-closure-compiler' ).gulp();

    return gulp.src(
            [
                './.submodules/what-browser-am-i/src/js/**/*.js',
                '!./.submodules/what-browser-am-i/src/4_brand.js',
                minify ? './src/js-inline/*.js' : './src/js-inline/dynamicViewPort.js'
            ]
        ).pipe(
            connect( COMMON_VARS )
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*',
                    packageGlobalArgs  : [ 'ua,window,document,navigator,screen,parseFloat,Number,undefined', 'ua,window,document,navigator,screen,parseFloat,Number,void 0' ],
                    basePath           : [ './.submodules/what-browser-am-i/src/js/', './src/js-inline/' ]
                }
            )
        ).pipe(
            ClosureCompiler(
                {
                    externs           : [ './.submodules/what-browser-am-i/src/js-externs/externs.js' ],
                    define            : [
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=' + minify,
                        'DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED=' + !minify,
                        'DEFINE_WHAT_BROWSER_AM_I__PCSITE_REQUESTED_ENABLED=' + !minify,
                        'DEFINE_WHAT_BROWSER_AM_I__IOS_DEVICE_ENABLED=' + !minify,
                        'DEFINE_WHAT_BROWSER_AM_I__DEVICE_TYPE_ENABLED=' + !minify
                    ],
                    compilation_level : 'ADVANCED',
                    //compilation_level : 'WHITESPACE_ONLY',
                    //formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : 'ua=' + ( minify ? '[]' : '{}' ) + ';%output%',
                    js_output_file    : tempJsName
                }
            )
        ).pipe(gulp.dest( tempDir ));
};


/* -------------------------------------------------------
 *  gulp docs
 */
let minjs;

gulp.task( 'docs', gulp.series(
    function( cb ){
        minify = false;
        cb();
    },
    createInlineScript,
    function( cb ){
        require( 'fs' ).readFile( tempDir + '/' + tempJsName,
            function( error, buffer ){
                if( !error ){
                    minjs = buffer.toString( 'utf-8' ).replace( '\n', '' );
                    return cb();
                } else {
                    throw error;
                };
            }
        );
    },
    function(){
        return gulp
            .src(
                [ output + 'test/check-css-ready.html', output + 'test/check-css-ready-with-ruler.html', output + 'test/check-image-loading.html', output + 'test/attr-selectors.html' ]
            ).pipe(
                require( 'gulp-jsdom' )(
                    function( document ){
                        const elm = document.getElementsByTagName( 'script' )[ 0 ];

                        if( elm ){
                            elm.textContent = minjs;
                        };
                    }
                )
            ).pipe(
                gulp.dest( output + 'test' )
            );
    }
));

/* -------------------------------------------------------
 *  gulp btoa
 */
gulp.task( 'btoa', gulp.series(
    function(){
        ClosureCompiler = ClosureCompiler || require('google-closure-compiler').gulp();

        return gulp.src( [
            './.submodules/es2-base64/src/js/base64.js'
        ]
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ './.submodules/es2-base64/src/js-externs/externs.js' ],
                        define            : [
                            'DEFINE_REGEXP_FREE_BASE64__DEBUG=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_UTOB=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_BTOU=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_ENCODE=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_DECODE=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_BTOA=true',
                            'DEFINE_REGEXP_FREE_BASE64__USE_ATOB=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_URISAFE_BTOA=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_URISAFE_ATOB=false',
                            'DEFINE_REGEXP_FREE_BASE64__USE_UINT8=false'
                        ],
                        compilation_level : 'ADVANCED',
                        // compilation_level : 'WHITESPACE_ONLY',
                        formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    : '/* THIS SCRIPT IS GENERATED BY "gulp btoa". DO NOT EDIT! */\nif( CSSOM_USE_DATAURI_FALLBACK ){\n%output%};',
                        js_output_file    : '3_btoa.generated.js'
                    }
                )
            ).pipe( gulp.dest( './src/js/5_CSSOM' ) );
    }
));

/**
 * 推奨ディレクトリ
 *  /assets/js/
 *  /assets/css/pc/
 *  /assets/css/pc/hc/
 *  /assets/css/mb/
 *  /assets/css/mb/hc/
 * 
 * または、
 *  /assets/js/
 *  /assets/css/
 *  /assets/css/hc/
 */
const connect = require( 'gulp-connecting-room' );
const COMMON_VARS = require( './common.json' );

const assetsDirToJSDir       = COMMON_VARS.COMMON_ASSET_DIR_TO_JS_DIR,
      assetsDirToIconFontDir = COMMON_VARS.COMMON_ASSET_DIR_TO_ICONFONT_DIR;

/* -------------------------------------------------------
 *  gulp js
 */
let isDebug = false;
let webFontDebugMode = 0;
let resultObject = {};

const numericKeyName              = '-num';
const simpleLexerRegistryFileName = '2__zippedSimpleLexerRegistry.generated.js';
const regExpCompatFileName        = 'regexpcompat.js';

function createMainJavaScript(){
    gulpDPZ         = gulpDPZ         || require( 'gulp-diamond-princess-zoning' );
    ClosureCompiler = ClosureCompiler || require( 'google-closure-compiler' ).gulp();
    postProcessor   = postProcessor   || require( 'es2-postprocessor' );
    es2ToES3        = es2ToES3        || require( 'es2-to-es3' );

    return gulp.src(
            [
                // what-browser-am-i
                './.submodules/what-browser-am-i/src/js/0_global/*.js',
                '!./.submodules/what-browser-am-i/src/js/0_global/7_conpare.js',
                // web-doc-base
                './src/js/**/*.js',
                '!./src/js/4_EventModule/prefersColorScheme.js',
                '!./src/js/4_EventModule/print.js',
                '!./src/js/5_CSSOM/**/*.js',
                '!./src/js/6_CanUse/cssGeneratedContent.js',
                // ES2 Code Prettify
                './node_modules/es2-code-prettify/src/js/1_common/*.js',
                './node_modules/es2-code-prettify/src/js/4_prettify/*.js'
            ]
        ).pipe(
            connect( COMMON_VARS )
        ).pipe(
            gulpDPZ(
                {
                    packageGlobalArgs : [
                        'ua,window,emptyFunction,RegExp,' + globalVariables + ',undefined',
                        'ua,this,function(){},this.RegExp,' + globalVariables + ',void 0'
                    ],
                    basePath          : [
                        './src/js/',
                        './.submodules/what-browser-am-i/src/js/',
                        './node_modules/es2-code-prettify/src/js' // js
                    ]
                }
            )
        ).pipe(
            ClosureCompiler(
                {
                    externs           : [
                        './.submodules/what-browser-am-i/src/js-externs/externs.js',
                        './src/js-externs/externs.js',
                        // ES2 Code Prettify
                        './node_modules/es2-code-prettify/src/js-externs/externs.js'
                    ],
                    define            : [
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                        'DEFINE_WEB_DOC_BASE__AMAZON_ID="itozyun-22"',
                        'DEFINE_WEB_DOC_BASE__DEBUG=' + isDebug,
                        'DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE=' + webFontDebugMode,
                        'DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID="logger"',
                        // ES2 Code Prettify
                        'DEFINE_CODE_PRETTIFY__DEBUG=' + isDebug,
                        'DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT=' + false,
                        'DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY="' + numericKeyName + '"',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=-1',
                        'DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME=' + regExpCompatFileName
                    ],
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : 'temp.js'
                }
            )
        ).pipe(
            postProcessor.gulp(
                {
                    minIEVersion    : 5,
                    minOperaVersion : 7,
                    minGeckoVersion : 0.6
                }
            )
        ).pipe(
            ClosureCompiler(
                {
                    compilation_level : 'WHITESPACE_ONLY',
                    formatting        : 'PRETTY_PRINT',
                    js_output_file    : webFontDebugMode === 1
                                            ? 'test-vector-icon-blocked.js' :
                                        webFontDebugMode === 2
                                            ? 'test-vector-icon-disabled.js' :
                                        isDebug
                                            ? 'debug.js' : 'main.js'
                }
            )
        ).pipe(
            es2ToES3.gulp(
                {
                    minIEVersion   : 5,
                    resultObject   : resultObject
                }
            )
        ).pipe(
            gulp.dest( output + 'assets/' + assetsDirToJSDir )
        );
};

function createVectorIconFallback(){
    gulpDPZ         = gulpDPZ         || require( 'gulp-diamond-princess-zoning' );
    ClosureCompiler = ClosureCompiler || require( 'google-closure-compiler' ).gulp();

    return gulp.src(
            [
                './src/js-vector-icon-svg-fallback/**/*.js'
            ]
        ).pipe(
            connect( COMMON_VARS, '0_global.common' )
        ).pipe(
            gulpDPZ(
                {
                    basePath          : [
                        './src/js-vector-icon-svg-fallback'
                    ],
                    labelPackageGlobal : '*'
                }
            )
         ).pipe(
            ClosureCompiler(
                {
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : COMMON_VARS.COMMON_VECTOR_ICON__SVG_FALLBACK_FILE_STEM + '.js'
                }
            )
        ).pipe(
            gulp.dest( output + 'assets/' + assetsDirToJSDir )
        );
};

gulp.task( 'js', gulp.series(
    require( './js-buildtools/create-simple-lexer-registry.js' )( gulp, ClosureCompiler, simpleLexerRegistryFileName, numericKeyName ),
    createMainJavaScript,
    function( cb ){
        if( isDebug ) return cb();

        return gulp.src(
            [
                './node_modules/es2-code-prettify/dist/regexpcompat.min.js'
            ]
        ).pipe(
            ClosureCompiler(
                {
                    compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : 'PRETTY_PRINT',
                    js_output_file    : regExpCompatFileName
                }
            )
        ).pipe(
            es2ToES3.gulp(
                {
                    minIEVersion       : 5,
                    skipEmbedPolyfills : resultObject.embeddedPolyfills
                }
            )
        ).pipe(
            gulp.dest( output + 'assets/' + assetsDirToJSDir )
        );
    },
    function( cb ){ isDebug = true; resultObject = {}; cb(); },
    createMainJavaScript,
    function( cb ){ webFontDebugMode = 1; resultObject = {}; cb(); },
    createMainJavaScript,
    function( cb ){ webFontDebugMode = 2; resultObject = {}; cb(); },
    createMainJavaScript,
    createVectorIconFallback
));

/* -------------------------------------------------------
 *  gulp css
 */
gulp.task( 'css',
    function(){
        const plumber     = require( 'gulp-plumber' ),
              izpp        = require( 'gulp-iz-preprocessor' ),
              sass        = require( 'gulp-sass' )( require( 'sass' ) ),
              gcm         = require( 'gulp-group-css-media-queries' ),
              cleanCSS    = require( 'gulp-clean-css' ),
              cssHack     = require( './js-buildtools/index.js' ),
              CLEAN_CSS_OPTION = {
                  // rebaseTo      : './docs',
                  compatibility : { properties : { ieFilters : true } },
                  //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
                  level : {
                              1 : { normalizeUrls : true, roundingPrecision : 3 },
                              2 : { all : true, removeUnusedAtRules : false }
                          }
              },
              CLEAN_CSS_SKIP_PROPS = [ 'display', 'background', 'white-space', '-webkit-transition-property', '-webkit-transition', 'cursor', 'border-top-color', 'border-bottom-color', 'border-left-color', 'border-right-color', 'border-color' ];

        return gulp.src(
                [
                    './src/scss/01_Variables/01_BuildTargets.scss',
                    // './src/scss.docs/docs_color.scss',
                    './src/scss/**/*.scss',
                   '!./src/scss/07_Parts/icons.scss',
                   // '!./src/scss/09_ArticleBody/links.scss',
                    './src/scss.docs/MinimumDataURIWebFont.scss'
                ]
            ).pipe(
                plumber()
            ).pipe(
                connect( COMMON_VARS )
            ).pipe(
                izpp({
                    log      : true,
                    fileType : 'scss',
                    tasks    : [
                        { name : 'desktop', imports : [ 'baseFontSize18', 'Magazine', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader', 'blog2slide' ], dir : COMMON_VARS.COMMON_CSS_DIR_TO_DESKTOP_CSS_DIR },
                        { name : 'mobile',  imports : [ 'mobileOnly'    , 'Magazine', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader', 'blog2slide' ], dir : COMMON_VARS.COMMON_CSS_DIR_TO_MOBILE_CSS_DIR }
                    ]
                })
            ).pipe(
                sass()
            ).pipe(
                gcm()
            ).pipe(
                cleanCSS( CLEAN_CSS_OPTION )
            ).pipe(
                ( // For more optimization!, https://twitter.com/itozyun/status/1502829749873233927
                    CLEAN_CSS_OPTION.level[ 2 ].skipProperties = CLEAN_CSS_SKIP_PROPS,
                    cleanCSS( CLEAN_CSS_OPTION ) 
                )
            ).pipe(
                cssHack.preprocess( COMMON_VARS )
            ).pipe(
                (
                    CLEAN_CSS_OPTION.format = 'beautify',
                    cleanCSS( CLEAN_CSS_OPTION )
                )
            ).pipe(
                cssHack.postprocess( COMMON_VARS )
            ).pipe(
                gulp.dest( output + 'assets/' + COMMON_VARS.COMMON_ASSET_DIR_TO_CSS_DIR )
            );
    }
);

/* -------------------------------------------------------
 *  gulp ico
 */
gulp.task( 'ico',
    gulp.series(
        // format selection.json
        function( cb ){
            const ICOMOON_SELECTION_JSON = './.icomoon/vector-icon/selection.json';
            const fs = require( 'fs' );

            fs.readFile(
                ICOMOON_SELECTION_JSON,
                function( error, buffer ){
                    if( error ) throw error;

                    const original = buffer.toString();
                    const icomoon = JSON.parse( original );
                    const strJson = JSON.stringify( icomoon, null, '    ' );

                    if( original !== strJson ){
                        fs.writeFile( ICOMOON_SELECTION_JSON, strJson, cb );
                    } else {
                        cb();
                    };
                }
            );
        },
        function(){
            return gulp.src(
                [
                    './.icomoon/vector-icon/fonts/*.svg',
                    './.icomoon/vector-icon/fonts/*.woff',
                    './.icomoon/vector-icon/fonts/*.ttf',
                    './.icomoon/vector-icon/fonts/*.eot',
                    output + 'assets/' + assetsDirToIconFontDir + '/*.css'
                ]
            ).pipe(
                require( './js-buildtools/web-font.js' ).main( COMMON_VARS, './src/js/7_Patch/vectorIconLigatureToChar.generated.js', './src/js-vector-icon-svg-fallback/2_vectorIconPathList.generated.js' )
            ).pipe( gulp.dest( output + 'assets/' + assetsDirToIconFontDir ) );
        },
        createVectorIconFallback,
        // format selection.json
        function( cb ){
            const ICOMOON_SELECTION_JSON = './.icomoon/minimum-font/selection.json';
            const fs = require( 'fs' );

            fs.readFile(
                ICOMOON_SELECTION_JSON,
                function( error, buffer ){
                    if( error ) throw error;

                    const original = buffer.toString();
                    const icomoon = JSON.parse( original );
                    const strJson = JSON.stringify( icomoon, null, '    ' );

                    if( original !== strJson ){
                        fs.writeFile( ICOMOON_SELECTION_JSON, strJson, cb );
                    } else {
                        cb();
                    };
                }
            );
        },
        function(){
            return gulp.src(
                [
                    './.icomoon/minimum-font/fonts/*.svg',
                    './.icomoon/minimum-font/fonts/*.woff',
                    './.icomoon/minimum-font/fonts/*.ttf',
                    './.icomoon/minimum-font/fonts/*.eot'
                ]
            ).pipe(
                require( './js-buildtools/web-font.js' ).scssVariable( COMMON_VARS, '04_MinimumDataURIWebFont.generated.scss' )
            ).pipe( gulp.dest( 'src/scss/01_Variables' ) );
        },
        'css'
    )
);

/* -------------------------------------------------------
 *  gulp html
 */
let pageBase;

gulp.task( '__html', gulp.series(
    function( cb ){
        require( 'fs' ).readFile( tempDir + '/' + tempJsName,
            function( error, buffer ){
                if( !error ){
                    pageBase = require( './src/html/pageBase.js' );
                    pageBase.site.inlineScript = buffer.toString( 'utf-8' ).replace( '\n', '' );
                    cb();
                } else {
                    throw error;
                };
            }
        );
    },
    function(){
        return gulp.src( [ './src/html/**/*.html',  './src/html/**/*.md' ] )
                    // .pipe( plumber() )
                   .pipe( require( './js-buildtools/gulp-generate-full-webdoc/index.js' )( pageBase, __dirname + '/src/html/' ) )
                   .pipe( require( isDebug ? 'gulp-diffable-html' : 'gulp-cleanhtml' )() )
                   .pipe( gulp.dest( output ) );
    }
) );

gulp.task( 'html', gulp.series(
    createInlineScript,
    '__html',
    'docs',
) );

/* -------------------------------------------------------
 *  gulp debug
 */
gulp.task( 'debug', gulp.series(
    createInlineScript,
    function( cb ){
        output = './docs.debug/';
        isDebug = true;
        cb();
    },
    '__html'
) );