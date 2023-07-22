module.exports = function( gulp, ClosureCompiler, simpleLexerRegistryFileName, numericKeyName ){
    const path = __dirname + '/../node_modules/es2-code-prettify/';

    return function(){
        ClosureCompiler = ClosureCompiler || require( 'google-closure-compiler' ).gulp();

        return gulp.src(
            [
            // ES2 Code Prettify
                path + 'src/js/1_common/*.js',
                path + 'src/js/2_SimpleLexerRegistry/*.js',
                path + 'src/js/3_langs/*.js'
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
            require( path + 'src/js-buildtools/gulp-createSimpleLexerRegistry.js' )( simpleLexerRegistryFileName, numericKeyName )
        ).pipe(
            gulp.dest( path + 'src/js/4_prettify' )
        );
    };
};