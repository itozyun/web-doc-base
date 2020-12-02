const gulp            = require('gulp'),
      gulpConcat      = require('gulp-concat'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      Cheerio         = require('gulp-cheerio'),
      externsJs       = './what-browser-am-i/src/__externs.js',
      moduleName      = 'web-doc-base',
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,navigator,screen,parseFloat,Number';

/* -------------------------------------------------------
 *  gulp docs
 */
gulp.task('docs', gulp.series(
    function(){
        return gulp.src( './what-browser-am-i/src/0_global.js' )
            .pipe(gulp.dest( tempDir + '/temp' ));
    },
    function(){
        return gulp.src(
                [
                    './what-browser-am-i/src/**.js',
                    '!./what-browser-am-i/src/0_global.js',
                    '!./what-browser-am-i/src/4_brand.js',
                    '!' + externsJs,
                    './src/inline-js/dynamicViewPort.js'
                ]
            ).pipe(gulpConcat('package.js'))
            .pipe(gulp.dest( tempDir + '/temp' ));
    },
    function(){
        return gulp.src( [ tempDir + '/temp/**/*.js' ] )
            .pipe(
                gulpDPZ(
                    {
                        labelGlobal        : 'global',
                        labelPackageGlobal : '###',
                        labelModuleGlobal  : '###',
                        packageGlobalArgs  : 'ua,window,document,navigator,screen,parseFloat,Number',
                        basePath           : tempDir + '/temp'
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ externsJs ],
                        define            : [
                            'WHAT_BROWSER_AM_I_DEFINE_BRAND_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_PCSITE_REQUESTED_ENABLED=false',
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
            './regexp-free-js-base64/base64.js'
        ]
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ './regexp-free-js-base64/__externs.js' ],
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
                        js_output_file    : '.generated.btoa.js'
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
         './what-browser-am-i/src/__externs.js',
         './regexp-free-js-base64/__externs.js',
         './node_modules/google-closure-compiler/contrib/externs/svg.js',
         './src/js/__externs.js'
      ];

gulp.task('js', gulp.series(
    function(){
        return ClosureCompiler(
                {
                    js                : [
                        './src/js/0_global/1_DEFINE.js',

                        './src/js/1_packageGlobal/1_packageValiable.js',
                        './src/js/1_packageGlobal/2_builtinArrayMethods.js',

                        './src/js/2_CoreModule/DebugLogger.js',
                        './src/js/2_CoreModule/LoopTimer.js',
                        './src/js/2_CoreModule/Timer.js',
    
                        './src/js/3_EventModule/1_moduleGlobal.js',
                        './src/js/3_EventModule/2_core.js',
                        './src/js/3_EventModule/cssAvailability.js',
                        './src/js/3_EventModule/highContrastMode.js',
                        './src/js/3_EventModule/imageReady.js',
                        // './src/js/3_EventModule/prefersColor.js',
                        // './src/js/3_EventModule/print.js',
                        './src/js/3_EventModule/resize.js',
                        './src/js/3_EventModule/scroll.js',

                        './src/js/4_DOM/1_DOM.js',
                        './src/js/4_DOM/2_DOMStyle.js',
                        './src/js/4_DOM/3_DOMAttr.js',
                        './src/js/4_DOM/4_DOMClass.js',
                        // './src/js/4_DOM/5_DOMEvent.js',
                        './src/js/4_DOM/nodeCleaner.js',
    
                        './src/js/5_CSSOM/CSSOM.js',

                        //'./src/js/6_CanUse/generatedContent.js',
                        //'./src/js/6_CanUse/dataUriTest.js',
                        './src/js/6_CanUse/ieFilterTest.js',
                        //'./src/js/6_CanUse/imageTest.js',
                        //'./src/js/6_CanUse/webfontTest.js',

                        './src/js/7_Library/blockquot.js',
                        './src/js/7_Library/detectImageTurnedOff.js',
                        './src/js/7_Library/HighContrastStyleSwitcher.js',
                        './src/js/7_Library/ie5.js',
                        './src/js/7_Library/LegacyCssLoader.js',
                        './src/js/7_Library/PicaThumnail.js',
                        './src/js/7_Library/SidebarFixer.js',

                        './src/js/onreachEnd.js',
                    ],
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
                    output_wrapper    : '(function(ua,window,emptyFunction,' + globalVariables + ',undefined){\n%output%\n})(ua,this,new Function,' + globalVariables + ')',
                    js_output_file    : 'temp.js'
                }
            )
            .src()
            .pipe(gulp.dest( tempDir ));
    },
    function(){
        return ClosureCompiler(
            {
                js                : [
                    tempDir + '/temp.js',
                    './src/js/GoogleCodePrettify.js'
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
      CSShack     = require('./gulp-csshack.js'),
      finalizeCSS = require("./gulp-finalize-css.js");

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
                    { name : 'desktop', imports : [ 'Magazine', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader' ] },
                    { name : 'mobile',  imports : [ 'mobileOnly', 'blog', 'aa', 'it', 'ArticleLabels', 'SocialBtns', 'GoogleCodePrettify', 'simpleHeader' ], prefix : mobileCssPrefix }
                ]
            })
        )
        .pipe(sass())
        .pipe(gcm())
        .pipe(cleanCSS({
            compatibility : { properties : { ieFilters : true } },
            //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
            level: {
                1: {
                    // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
                    roundingPrecision : 3
                },
                2: {
                    all : true,
                    removeUnusedAtRules: false
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
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(finalizeCSS())
        .pipe(gulp.dest( './docs/assets' ));
});