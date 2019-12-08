var gulp = require('gulp'),
    minjs = '';

/* -------------------------------------------------------
 *  gulp js
 */
gulp.task('createMinJs', function( cb ){
    // https://github.com/google/closure-compiler-npm/tree/master/packages/google-closure-compiler
    // https://stackoverflow.com/questions/56477837/google-closure-compiler-basic-process-example
    const ClosureCompiler = require('google-closure-compiler').compiler,
          globalVariables = 'document,navigator,screen,parseFloat,Number',
          externs         = [ './inline-js/__externs.js' ];

    new ClosureCompiler(
        {
            js                : [
                './inline-js/01_ua.js',
                './inline-js/02_uaPlatform.js',
                './inline-js/03_uaEngine.js',
                './inline-js/04_uaBrand.js',
                './inline-js/05_uaFinish.js',
                './inline-js/10_dynamicViewPort.js'
            ],
            externs           : externs,
            // define            : 'X_UA_IE=5',
            compilation_level : 'ADVANCED',
            // compilation_level : 'WHITESPACE_ONLY',
            // formatting        : 'PRETTY_PRINT',
            // warning_level     : 'VERBOSE',
            language_in       : 'ECMASCRIPT3',
            language_out      : 'ECMASCRIPT3',
            output_wrapper    : 'ua={};(function(ua,window,' + globalVariables + ',undefined){\n%output%\n})(ua,this,' + globalVariables + ')'
        }
    ).run(
        function(exitCode, stdOut, stdErr){
            const writeFileSync = require('fs').writeFileSync,
                  path = require('os').tmpdir() + '/compiled.js';

            writeFileSync( path, stdOut, 'UTF-8' );
            new ClosureCompiler(
                {
                    js           : path,
                    externs      : externs,
                    language_in  : 'ECMASCRIPT3',
                    language_out : 'ECMASCRIPT3'
                }
            ).run(
                function(exitCode, _stdOut, stdErr){
                    // console.log( _stdOut );
                    minjs = _stdOut;
                    console.log(minjs.length + 'bytes.');
                    cb();
                }
            );
        }
    );
});

var cheerio = require('gulp-cheerio');

gulp.task( 'insertMinJs', function(){
    return gulp.src('./ua.html')
        .pipe(cheerio({
            run: function ($) {
                $('script').eq(1).text( minjs );
            } //, parserOptions: { xmlMode: true }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('js', gulp.series( 'createMinJs', 'insertMinJs' ) );