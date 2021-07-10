const gulp            = require('gulp'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      Cheerio         = require('gulp-cheerio'),
      moduleName      = 'web-doc-base',
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,navigator,screen,parseFloat,Number';

/* -------------------------------------------------------
 *  gulp docs
 */
gulp.task('docs', gulp.series(
    function(){
        return gulp.src( [
            './.submodules/what-browser-am-i/src/js/**/*.js',
            '!./.submodules/what-browser-am-i/src/4_brand.js',
            './src/js-inline/dynamicViewPort.js'
            ] ).pipe(
                gulpDPZ(
                    {
                        labelPackageGlobal : '*',
                        packageGlobalArgs  : 'ua,window,document,navigator,screen,parseFloat,Number',
                        basePath           : [ './.submodules/what-browser-am-i/src/js/', './src/js-inline/' ]
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ './.submodules/what-browser-am-i/src/js-externs/externs.js' ],
                        define            : [
                            'WHAT_BROWSER_AM_I_DEFINE_BRAND_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_PCSITE_REQUESTED_ENABLED=false', // <- true',
                            'WHAT_BROWSER_AM_I_DEFINE_IOS_DEVICE_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_DEVICE_TYPE_ENABLED=false'
                        ],
                        compilation_level : 'ADVANCED',
                        //compilation_level : 'WHITESPACE_ONLY',
                        //formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    : 'ua={};%output%',
                        js_output_file    : tempJsName
                    }
                )
            ).pipe(gulp.dest( tempDir ));
    },
    function( cb ){
        const minjs = require('fs').readFileSync( tempDir + '/' + tempJsName ).toString().replace( '\n', '' );
        console.log(minjs.length + 'bytes.');

        return gulp.src( ['./docs/getInlineJs.html', './docs/testImageLoading.html' ])
            .pipe(
                Cheerio(
                    {
                        run : function($){
                            $('script').eq(0).text( minjs );
                            $('textarea').eq(0).text( minjs );
                        } //, parserOptions: { xmlMode: true }
                    }
                )
            ).pipe(gulp.dest('./docs'));
    }
));

/* -------------------------------------------------------
 *  gulp btoa
 */
gulp.task('btoa', gulp.series(
    function(){
        return gulp.src( [
            './.submodules/regexp-free-js-base64/src/js/base64.js'
        ]
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ './.submodules/regexp-free-js-base64/src/js-externs/externs.js' ],
                        define            : [
                            'REGEXP_FREE_BASE64_DEFINE_DEBUG=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_UTOB=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_BTOU=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_ENCODE=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_DECODE=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_BTOA=true',
                            'REGEXP_FREE_BASE64_DEFINE_USE_ATOB=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_URISAFE_BTOA=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_URISAFE_ATOB=false',
                            'REGEXP_FREE_BASE64_DEFINE_USE_UINT8=false'
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

const mobileCssPrefix = 'm_',
      hcModeCssDir    = 'hc';

/* -------------------------------------------------------
 *  gulp js
 */
const externs = [
         './.submodules/what-browser-am-i/src/js-externs/externs.js',
         './node_modules/google-closure-compiler/contrib/externs/svg.js',
         './src/js-externs/externs.js'
      ];

gulp.task('js', gulp.series(
    function(){
        return gulp.src(
                [
                    './src/js/**/*.js',
                    '!./src/js/3_EventModule/prefersColor.js',
                    '!./src/js/3_EventModule/print.js',
                    '!./src/js/6_CanUse/generatedContent.js',
                    '!./src/js/6_CanUse/dataUriTest.js',
                    '!./src/js/6_CanUse/webfontTest.js',
                    '!./src/js/graph/**/*.js',
                    '!./src/js/GoogleCodePrettify.js'
                ]
            ).pipe(
                gulpDPZ(
                    {
                        packageGlobalArgs : [ 'ua,window,emptyFunction,' + globalVariables + ',undefined', 'ua,this,new Function,' + globalVariables + ',void 0' ],
                        basePath          : './src/js/'
                    }
                )
             ).pipe(
                ClosureCompiler(
                    {
                        externs           : externs,
                        define            : [
                            'WEB_DOC_BASE_DEFINE_MOBILE_CSS_PREFIX="' + mobileCssPrefix + '"',
                            'WEB_DOC_BASE_DEFINE_HC_MODE_CSS_DIR="' + hcModeCssDir + '"',
                            'WEB_DOC_BASE_DEFINE_AMAZON_ID="itozyun-22"'
                        ],
                        compilation_level : 'ADVANCED',
                        // compilation_level : 'WHITESPACE_ONLY',
                        //formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        js_output_file    : 'temp.js'
                    }
                )
            ).pipe(gulp.dest( tempDir ));
    },
    function(){
        return ClosureCompiler(
            {
                js                : [
                    tempDir + '/temp.js'//,
                    //'./src/js/GoogleCodePrettify.js' Gecko 0.8 で止まる
                ],
                externs           : externs,
                // compilation_level : 'WHITESPACE_ONLY',
                formatting        : 'PRETTY_PRINT',
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                js_output_file    : 'min.js'
            }
        )
        .src()
        .pipe(gulp.dest( './docs/assets' ));
    }
));

/* -------------------------------------------------------
 *  gulp css
 */
const plumber     = require("gulp-plumber"),
      izpp        = require('gulp-iz-preprocessor'),
      sass        = require("gulp-sass"),
      gcm         = require("gulp-group-css-media-queries"),
      cleanCSS    = require("gulp-clean-css"),
      CSShack     = require('./js-buildtools/gulp-csshack.js'),
      finalizeCSS = require("./js-buildtools/gulp-finalize-css.js");

gulp.task('css', function(){
    return gulp.src([
            "./src/scss/**/*.scss"
        ])
        .pipe(plumber())
        .pipe(
            izpp({
                log      : true,
                fileType : 'scss',
                tasks : [
                    { name : 'desktop', imports : [ 'Magazine', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader', 'blog2slide' ] },
                    { name : 'mobile',  imports : [ 'mobileOnly', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader', 'blog2slide' ], prefix : mobileCssPrefix }
                ]
            })
        )
        .pipe(sass())
        .pipe(gcm())
        .pipe(cleanCSS({
            format : 'beautify',
            compatibility : { properties : { ieFilters : true } },
            //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
            level: {
                1: {
                    // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
                    roundingPrecision : 3
                },
                2: {
                    all : true,
                    removeUnusedAtRules : false,
                    // overrideProperties  : false,
                    skipProperties : [ 'display' ]
                }
            }
        }))
        .pipe(CSShack({ hcdir : hcModeCssDir }))
        .pipe(cleanCSS({
            format : 'beautify',
            compatibility : { properties : { ieFilters : true } },
            //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
            level: {
                1: {
                    // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
                    roundingPrecision : 3
                },
                2: {
                    all : true,
                    removeUnusedAtRules : false,
                    // overrideProperties  : false,
                    skipProperties : [ 'display', 'background', '-webkit-transition-property', '-webkit-transition' ]
                }
            } 
        }))
        .pipe(finalizeCSS())
        .pipe(gulp.dest( './docs/assets' ));
});