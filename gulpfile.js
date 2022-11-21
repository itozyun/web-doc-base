"use strict";
const gulp            = require('gulp'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      postProcessor   = require('es2-postprocessor'),
      gulpJSDOM       = require('gulp-jsdom'),
      fs              = require('fs'),
      moduleName      = 'web-doc-base',
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,navigator,screen,parseFloat,Number';

let minify = true;
let output = './docs/';

/* -------------------------------------------------------
 *  gulp whatbrowserami
 */
gulp.task( 'whatbrowserami', gulp.series(
    function(){
        return gulp.src(
                [
                    './.submodules/what-browser-am-i/src/js/**/*.js',
                    '!./.submodules/what-browser-am-i/src/4_brand.js',
                    minify ? './src/js-inline/*.js' : './src/js-inline/dynamicViewPort.js'
                ]
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
    } )
);

/* -------------------------------------------------------
 *  gulp docs
 */
let minjs;

gulp.task( 'docs', gulp.series(
    function( cb ){
        minify = false;
        cb();
    },
    'whatbrowserami',
    function( cb ){
        fs.readFile( tempDir + '/' + tempJsName,
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
        return gulp.src( [ output + 'test/check-image-loading.html', output + 'test/attr-selectors.html' ]
            ).pipe(
                gulpJSDOM(
                    function( document ){
                        var elm = document.getElementsByTagName( 'script' )[ 0 ];

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
                        output_wrapper    : 'var Base64_btoa;\n%output%',
                        js_output_file    : '_generated.btoa.js'
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
const assetsDirToJSDir     = 'js',
      assetsDirToCSSDir    = 'css',
      cssDirToDesktopDir   = 'pc',
      cssDirToMobileDir    = 'mb',
      toForcedColorsCSSDir = 'hc';

/* -------------------------------------------------------
 *  gulp js
 */
let isDebug = false;
let resultObject = {};

const gulpCreateSimpleRexerRegistry = require('./node_modules/es2-code-prettify/src/js-buildtools/gulp-createSimpleLexerRegistry.js');
const numericKeyName                = '-num';
const simpleLexerRegistryFileName   = '2__zippedSimpleLexerRegistry.generated.js';
const regExpCompatFileName          = 'regexpcompat.js';

gulp.task( '__js', gulp.series(
    function(){
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
                   '!./src/js/6_CanUse/dataUriTest.js',
                   '!./src/js/6_CanUse/webfontTest.js',
                   '!./src/js/graph/**/*.js',
                    // ES2 Code Prettify
                    './node_modules/es2-code-prettify/src/js/1_common/*.js',
                    './node_modules/es2-code-prettify/src/js/4_prettify/*.js'
                ]
            ).pipe(
                gulpDPZ(
                    {
                        packageGlobalArgs : [ 'ua,window,emptyFunction,RegExp,Date,' + globalVariables + ',undefined', 'ua,this,function(){},this.RegExp,Date,' + globalVariables + ',void 0' ],
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
                            'DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR="'   + assetsDirToJSDir     + '"',
                            'DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_CSS_DIR="'  + assetsDirToCSSDir    + '"',
                            'DEFINE_WEB_DOC_BASE__DESKTOP_PAGE_CSS_DIR="'  + cssDirToDesktopDir   + '"',
                            'DEFINE_WEB_DOC_BASE__MOBILE_PAGE_CSS_DIR="'   + cssDirToMobileDir    + '"',
                            'DEFINE_WEB_DOC_BASE__FORCED_COLORS_CSS_DIR="' + toForcedColorsCSSDir + '"',
                            'DEFINE_WEB_DOC_BASE__AMAZON_ID="itozyun-22"',
                            'DEFINE_WEB_DOC_BASE__DEBUG=' + isDebug,
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
                        js_output_file    :isDebug ? 'debug.js' : 'main.js'
                    }
                )
            ).pipe(
                postProcessor.gulp(
                    {
                        minIEVersion   : 5,
                        resultObject   : resultObject,
                        embedPolyfills : true
                    }
                )
            ).pipe(
                gulp.dest( output + 'assets/' + assetsDirToJSDir )
            );
    },
    function(){
        return gulp.src(
            [
                './node_modules/es2-code-prettify/dist/' + regExpCompatFileName.replace( '.js', '.min.js' )
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
            postProcessor.gulp(
                {
                    minIEVersion       : 5,
                    skipEmbedPolyfills : resultObject.embeddedPolyfills,
                    embedPolyfills     : true
                }
            )
        ).pipe(
            gulp.dest( output + 'assets/' + assetsDirToJSDir )
        );
    }
));

gulp.task( 'js', gulp.series(
    function(){
        return gulp.src(
            [
            // ES2 Code Prettify
                './node_modules/es2-code-prettify/src/js/1_common/*.js',
                './node_modules/es2-code-prettify/src/js/2_SimpleLexerRegistry/*.js',
                './node_modules/es2-code-prettify/src/js/3_langs/*.js'
            ]
        ).pipe(
            ClosureCompiler(
                {
                    define            : [
                        'DEFINE_CODE_PRETTIFY__LANGUAGES_USED="web"'
                    ],
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : '__generate_simple_lexer_registry.js'
                }
            )
        ).pipe(
            gulpCreateSimpleRexerRegistry( simpleLexerRegistryFileName, numericKeyName )
        ).pipe(
            gulp.dest( './node_modules/es2-code-prettify/src/js/4_prettify' )
        );
    },
    '__js',
    function( cb ){ isDebug = true; resultObject = {}; cb(); },
    '__js'
));

/* -------------------------------------------------------
 *  gulp css
 */
const plumber     = require("gulp-plumber"),
      izpp        = require('gulp-iz-preprocessor'),
      sass        = require("gulp-sass")(require('sass')),
      gcm         = require("gulp-group-css-media-queries"),
      cleanCSS    = require("gulp-clean-css"),
      CSShack     = require('./js-buildtools/gulp-csshack.js'),
      finalizeCSS = require("./js-buildtools/gulp-finalize-css.js"),
      CLEAN_CSS_OPTION = {
            compatibility : { properties : { ieFilters : true } },
            //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
            level : {
                        1 : { roundingPrecision : 3 },
                        2 : { all : true, removeUnusedAtRules : false }
                    }
      },
      CLEAN_CSS_SKIP_PROPS = [ 'display', 'background', 'white-space', '-webkit-transition-property', '-webkit-transition', 'cursor', 'border-top-color', 'border-bottom-color', 'border-left-color', 'border-right-color', 'border-color' ];

gulp.task( 'css',
    function(){
        return gulp.src(
                [
                    "./src/scss/01_Variables/01_BuildTargets.scss",
                    // "./src/scss.docs/docs_color.scss",
                    "./src/scss/**/*.scss",
                    // "./src/scss.docs/**.scss"
                ]
            ).pipe(
                plumber()
            ).pipe(
                izpp({
                    log      : true,
                    fileType : 'scss',
                    tasks    : [
                        { name : 'desktop', imports : [ 'baseFontSize18', 'Magazine', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader', 'blog2slide' ], dir : cssDirToDesktopDir },
                        { name : 'mobile',  imports : [ 'mobileOnly'    , 'Magazine', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader', 'blog2slide' ], dir : cssDirToMobileDir }
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
                CSShack( { forcedColorsCSSDir : toForcedColorsCSSDir, smallPhoneMaxWidth : 359 } )
            ).pipe(
                (
                    CLEAN_CSS_OPTION.format = 'beautify',
                    cleanCSS( CLEAN_CSS_OPTION )
                )
            ).pipe(
                finalizeCSS()
            ).pipe(
                gulp.dest( output + 'assets/' + assetsDirToCSSDir )
            );
    }
);

/* -------------------------------------------------------
 *  gulp html
 */

const pageBase = require( './src/html/pageBase.js' );

gulp.task( '__html', gulp.series(
    function( cb ){
        fs.readFile( tempDir + '/' + tempJsName,
            function( error, buffer ){
                if( !error ){
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
    'whatbrowserami',
    '__html',
    'docs',
) );

gulp.task( 'debug', gulp.series(
    'whatbrowserami',
    function( cb ){
        output = './docs.debug/';
        isDebug = true;
        cb();
    },
    '__html'
) );