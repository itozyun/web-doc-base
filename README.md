# Web Doc Base

## Overview - 概要

Super project for itozyun's Web document projects.

1. 2 Column layout (WQXGA, WSXGA, XGA)
2. Written based on the SMACSS
3. Build for each browsers (modern, ie9, ie8, ie7, ie6, ie55, ie5win)
4. Responsive Web Design for the 8 types of device (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch)
5. Reduce ink to print (@media print)
6. High contrast mode support (@media (-ms-high-contrast:active))
7. Legacy Browser Support

itozyun の Web ドキュメント・プロジェクトの親プロジェクトです。

1. 2カラムレイアウト (WQXGA, WSXGA, XGA)
2. SMACSS をベースに書かれています
3. ブラウザ別に CSS をビルド (modern, ie9, ie8, ie7, ie6, ie55, ie5win)
4. レスポンシブデザインは8種類のデバイスのために用意 (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch)
5. インクを節約して印刷 (@media print)
6. ハイコントラストモードのサポート (@media (-ms-high-contrast:active))
7. 古いブラウザのサポート

## Functions provided by Javascript - Javascript によって提供される機能

1. User Agent detection [Demo](https://itozyun.github.io/web-doc-base/ua.html) [src](https://github.com/itozyun/web-doc-base/blob/master/inline-js/)
2. Optimal viewport based on user agent judgment [src](https://github.com/itozyun/web-doc-base/blob/master/inline-js/10_dynamicViewPort.js)
3. Adjustment of sidebar [src](https://github.com/itozyun/web-doc-base/blob/master/js/SidebarFixer.js)
4. Click thumbnail image to enlarge [src](https://github.com/itozyun/web-doc-base/blob/master/js/PicaThumnail.js)
5. Extension of blockquote [src](https://github.com/itozyun/web-doc-base/blob/master/js/blockquot.js)

---

1. ユーザーエージェント判定 [Demo](https://itozyun.github.io/web-doc-base/ua.html) [src](https://github.com/itozyun/web-doc-base/blob/master/inline-js/)
2. ユーザーエージェント判定を元にした最適な viewport [src](https://github.com/itozyun/web-doc-base/blob/master/inline-js/10_dynamicViewPort.js)
3. サイドバーの追従 [src](https://github.com/itozyun/web-doc-base/blob/master/js/SidebarFixer.js)
4. サムネイル画像をクリックで拡大 [src](https://github.com/itozyun/web-doc-base/blob/master/js/PicaThumnail.js)
5. blockquote の拡張 [src](https://github.com/itozyun/web-doc-base/blob/master/js/blockquot.js)

## References - 参照プロジェクト

This project has been referred to the next project.

1. [gariban](https://github.com/itozyun/gariban) "Ultralight free Blogger templete"
2. [OutCloud](http://outcloud.blogspot.com/) "itozyun's blog"

プロジェクトは次のプロジェクトに参照されています。

1. [gariban](https://github.com/itozyun/gariban) "超軽量な無料 Blogger テンプレート"
2. [OutCloud](http://outcloud.blogspot.com/) "itozyun のブログです"

## How the CSS build - CSS のビルドの方法

1. CSS is written in SCSS + iz-preprosessor Expanded Comments
2. Install [iz-preprosessor](https://marketplace.visualstudio.com/items?itemName=itozyun.iz-preprocessor) to Visual Studio Code
3. Generate the browser-specific .scss by iz-preprosessor
4. Compile the generated .scss

---

1. CSS は SCSS + iz-preprosessor 拡張コメントで書かれています
2. VS Code 拡張の [iz-preprosessor](https://marketplace.visualstudio.com/items?itemName=itozyun.iz-preprocessor) をインストールします
3. iz-preprosessor でブラウザ別の .scss を生成します
4. 出来た .scss をコンパイルします

### vscode settings.json

~~~json
{
    "izPreprocessor.tasks" : {
        "scss" :
            [
                {
                    "find"   : {
                        "rootPath" : [
                                "../web-doc-base/scss",
                                "./scss"
                            ],
                        "include"  : "**.scss"
                    },
                    "imports"  : [ "ArticleEntry" ],
                    "output" : "R:/MyBlog/precompiled"
                },
                {
                    "find"   : {
                        "rootPath" : [
                                "../web-doc-base/scss",
                                "./scss"
                            ],
                        "include"  : "**.scss"
                    },
                    "imports"  : [ "mobileOnly" ],
                    "prefix"   : "m_",
                    "output" : "R:/MyBlog/precompiled"
                }
            ]
    }
}
~~~

### gulpfile.js

~~~js
const gulp     = require('gulp'),
      name     = 'MyBlog',
      output   = './public';

/* -------------------------------------------------------
 *  gulp css
 */
const sass      = require("gulp-sass"),
      cleanCSS  = require("gulp-clean-css"),
      plumber   = require("gulp-plumber"),
      gcm       = require("gulp-group-css-media-queries"),
      gutil     = require('gulp-util'),
      Transform = require('stream').Transform,
      postcss   = require('postcss');

gulp.task('css', function(){
  return gulp.src(['R:/' + name + '/precompiled/**/*.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gcm())
    .pipe(cleanCSS({
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
    .pipe(
    // Creaet CSS for High Contrast mode.
    // Delete " [firefox-gte2]" and add ",x:-moz-any-link" to .cleardix selector.
    // Delete " [firefox-gte2]", add ",x:-moz-any-link" and replace the value from "_" to "_".
    // Delete " [opera-lte9]" and add ",x:not(\\\\)" to .cleardix selector.
    (function( opts ){
        var stream = new Transform( { objectMode : true } );

        stream._transform = function( file, encoding, cb ){
            if( file.isNull() ) return cb(null, file);
    
            if( file.isStream() ) return cb( new gutil.PluginError( 'mqo', 'Streaming not supported' ) );
    
            if( file.isBuffer() ){
                let css    = postcss.parse( String( file.contents ) ),
                    newCss = postcss.parse('@charset "UTF-8"'),
                    createNewFile, updateCurrentFile;
    
                css.walkAtRules( function( rule ){
                    if( rule.name === 'media' && rule.params === opts.match ){
                        rule.clone().walkRules( function( r ){
                            newCss.append( r );
                        } );
                        rule.remove();
                        createNewFile = true;
                    };
                });
    
                if( createNewFile ){
                    this.push(new gutil.File({
                        cwd      : file.cwd,
                        base     : file.base,
                        path     : file.base + '/' + opts.folder + '/' + file.basename,
                        contents : Buffer.from(newCss.toString())
                    }));
                };
    
                css.walkDecls('content', function( decl, rule ){
                    rule = decl.parent;
                    if( decl.value === '""' && 0 <= rule.selector.indexOf( ' [firefox-gte2]' ) ){
                        rule.selector = rule.selector.split( ' [firefox-gte2]' ).join( '' ) + ',x:-moz-any-link';
                        updateCurrentFile = true;
                    } else if( decl.value === '"_"' && 0 <= rule.selector.indexOf( ' [firefox-gte2]' ) ){
                        rule.selector = rule.selector.split( ' [firefox-gte2]' ).join( '' ) + ',x:-moz-any-link';
                        decl.value = '" "';
                        updateCurrentFile = true;
                    } else if( decl.value === '" "' && 0 <= rule.selector.indexOf( ' [opera-lte9]' ) ){
                        rule.selector = rule.selector.split( ' [opera-lte9]' ).join( '' ) + ',x:not(\\)';
                        css.append( rule ); // go to last
                        updateCurrentFile = true;
                    };
                });
    
                if( updateCurrentFile ){
                    this.push(new gutil.File({
                        cwd      : file.cwd,
                        base     : file.base,
                        path     : file.path,
                        contents : Buffer.from(css.toString())
                    }));
                } else {
                    this.push(file);
                };
                cb();
            };
        };
        return stream;
    })({
        match  : 'only screen and (-ms-high-contrast:active)',
        folder : 'hc'
    }))
    .pipe(gulp.dest(output));
});
~~~

## How the Javascript build - Javascript のビルドの方法

### How to build ./inline-js/*.js

see ./gulpfile.js.

~~~bat
gulp js
~~~

### How to build ./js/*.js

~~~js
const gulp            = require('gulp'),
      name            = 'MyBlog',
      output          = './public';

/* -------------------------------------------------------
 *  gulp js
 */
const closureCompiler = require('google-closure-compiler').gulp(),
      globalVariables = 'document,parseFloat,Function,isFinite,setTimeout,clearTimeout';

gulp.task('compile', function () {
    return closureCompiler(
            {
                js                : [
                   '../web-doc-base/js/_0_global.js',
                   '../web-doc-base/js/_1_Type.js',
                   '../web-doc-base/js/_2_Event.js',
                   '../web-doc-base/js/_3_DOM.js',
                   '../web-doc-base/js/_4_DOMStyle.js',
                   '../web-doc-base/js/_5_DOMAttr.js',
                   '../web-doc-base/js/_6_DOMClass.js',
                   '../web-doc-base/js/_7_CSSOM.js',
                   '../web-doc-base/js/0_nodeCleaner.js',
                   '../web-doc-base/js/ie5.js',
                   '../web-doc-base/js/HighContrastStyleSwitcher.js',
                   '../web-doc-base/js/detectImageTurnedOff.js',
                   '../web-doc-base/js/PicaThumnail.js',
                   '../web-doc-base/js/SidebarFixer.js',
                   '../web-doc-base/js/blockquot.js'
                ],
                externs           : [
                    '../web-doc-base/inline-js/__externs.js',
                    './node_modules/google-closure-compiler/contrib/externs/svg.js',
                    '../web-doc-base/js/__externs.js'
                ],
                compilation_level : 'ADVANCED',
                formatting        : 'PRETTY_PRINT',
                warning_level     : 'VERBOSE',
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                output_wrapper    : '(function(ua,window,' + globalVariables + ',undefined){\n%output%\n})(ua,this,' + globalVariables + ')',
                js_output_file    : 'temp.js'
            }
        )
        .src()
        .pipe(gulp.dest( 'R:/' + name ));
});

gulp.task( 'finish', function(){
    return closureCompiler(
        {
            js                : [
                'R:/' + name + '/temp.js',
                '../web-doc-base/js/GoogleCodePrettify.js'
            ],
            externs           : [
                '../web-doc-base/inline-js/__externs.js',
                './node_modules/google-closure-compiler/contrib/externs/svg.js',
                '../web-doc-base/js/__externs.js'
            ],
            language_in       : 'ECMASCRIPT3',
            language_out      : 'ECMASCRIPT3',
            js_output_file    : 'min.js'
        }
    )
    .src()
    .pipe(gulp.dest( output ));
});

gulp.task('javascript', gulp.series( 'compile', 'finish' ) );
~~~