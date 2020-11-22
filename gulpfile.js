const gulp            = require('gulp'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      Cheerio         = require('gulp-cheerio'),
      externsJs       = './what-browser-am-i/src/__externs.js',
      moduleName      = 'web-doc-base',
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,navigator,screen,parseFloat,Number';

gulp.task('docs', gulp.series(
    function(){
        return gulp.src( [ './what-browser-am-i/src/**.js', '!./what-browser-am-i/src/4_brand.js', '!' + externsJs, './src/inline-js/dynamicViewPort.js' ] )
            .pipe(
                ClosureCompiler(
                    {
                        externs           : [ externsJs ],
                        compilation_level : 'ADVANCED',
                        define            : [
                            'WHAT_BROWSER_AM_I_DEFINE_BRAND_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_PCSITE_REQUESTED_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_IOS_DEVICE_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_DEVICE_TYPE_ENABLED=false'
                        ],
                        //compilation_level : 'WHITESPACE_ONLY',
                        //formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    : 'ua={};(function(ua,window,' + globalVariables + ',undefined){\n%output%\n})(ua,this,' + globalVariables + ')',
                        js_output_file    : '_' + tempJsName
                    }
                )
            )
            .pipe(
                ClosureCompiler(
                    {
                        externs           : [ externsJs ],
                        // compilation_level : 'WHITESPACE_ONLY',
                        // formatting        : 'PRETTY_PRINT',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        js_output_file    : tempJsName
                    }
                )
            )
            .pipe(gulp.dest( tempDir ));
    },
    function( cb ){
        const minjs = require('fs').readFileSync( tempDir + '/' + tempJsName ).toString().replace( '\n', '' );
        console.log(minjs.length + 'bytes.');

        return gulp.src('./docs/getInlineJs.html')
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