const gulp = require('gulp'),
      name = 'wdb';
var   minjs = '';

/* -------------------------------------------------------
 *  gulp js
 */
const closureCompiler = require('google-closure-compiler').gulp(),
      globalVariables = 'document,navigator,screen,parseFloat,Number',
      externs         = [ './inline-js/__externs.js' ],
      tempDir         = require('os').tmpdir() + '/' + name;

gulp.task('js', gulp.series(
    function(){
        return closureCompiler(
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
                    compilation_level : 'ADVANCED',
                    //compilation_level : 'WHITESPACE_ONLY',
                    //formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : 'ua={};(function(ua,window,' + globalVariables + ',undefined){\n%output%\n})(ua,this,' + globalVariables + ')',
                    js_output_file    : 'temp.js'
                }
            )
            .src()
            .pipe(gulp.dest( tempDir ));
    },
    function(){
        return closureCompiler(
            {
                js                : [
                    tempDir + '/temp.js'
                ],
                externs           : externs,
                // compilation_level : 'WHITESPACE_ONLY',
                // formatting        : 'PRETTY_PRINT',
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                js_output_file    : 'temp2.js'
            }
        )
        .src()
        .pipe(gulp.dest( tempDir ));
    },
    function( cb ){
        const readFileSync = require('fs').readFileSync;
        
        minjs = readFileSync( tempDir + '/temp2.js' ).toString();
        console.log(minjs.length + 'bytes.');
        cb();
    },
    function(){
        const cheerio = require('gulp-cheerio');

        return gulp.src('./ua.html')
            .pipe(cheerio({
                run: function ($) {
                    $('script').eq(1).text( minjs );
                } //, parserOptions: { xmlMode: true }
            }))
            .pipe(gulp.dest('./'));
    }
));

/* -------------------------------------------------------
 *  gulp html modifier
 */
const modifier = require('./gulp-html-modifier.js');

gulp.task( 'mod', function(){
    return gulp.src('./mod.2.html')
        .pipe(modifier())
        .pipe(gulp.dest('./mod'));
});