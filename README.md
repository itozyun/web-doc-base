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

1. [blogger-base](https://github.com/itozyun/blogger-base) "Common project for Blogger templete"
2. [gariban](https://github.com/itozyun/gariban) "Ultralight free Blogger templete"
3. [OutCloud](http://outcloud.blogspot.com/) "itozyun's blog"

プロジェクトは次のプロジェクトに参照されています。

1. [blogger-base](https://github.com/itozyun/blogger-base) "Blogger テンプレート用共通プロジェクト"
2. [gariban](https://github.com/itozyun/gariban) "超軽量な無料 Blogger テンプレート"
3. [OutCloud](http://outcloud.blogspot.com/) "itozyun のブログです"

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
                                "../blogger-base/scss",
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
                                "../blogger-base/scss",
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
var gulp     = require('gulp'),
    sass     = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css"),
    plumber  = require("gulp-plumber"),
    mmq      = require("gulp-merge-media-queries"),
    name     = 'MyBlog',
    output   = './public';

gulp.task('sass', function(){
  return gulp.src(['R:/' + name + '/precompiled/*.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({
      //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
      level: {
        1: {
          // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
          roundingPrecision : 3
        },
        2: {
          removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
          removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
          removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
          
          mergeSemantically: true, // controls semantic merging; defaults to false
          removeUnusedAtRules: true, // controls unused at rule removing; defaults to false (available since 4.1.0)
          restructureRules: true // controls rule restructuring; defaults to false
        }
      }
    }))
    .pipe(mmq())
    .pipe(cleanCSS({ 
      level: {
        1: {
          all: false, // set all values to `false`
          removeWhitespace: true // controls removing unused whitespace; defaults to `true`
        }
      }
    }))
    .pipe(gulp.dest(output));
});

// high-contrast
gulp.task( 'hc', function(){
    return gulp.src(output + '/*.css')
    .pipe(mqo({
        match  : 'only screen and (-ms-high-contrast:active)',
        folder : 'hc'
    }))
    .pipe(gulp.dest(output + '/hc'));
});

gulp.task('make', gulp.series( 'sass', 'hc' ) );

/* -------------------------------------------------------
 *  media-query-operator
 */
var gutil       = require('gulp-util');
var Transform   = require('stream').Transform;
var Path        = require('path');
var postcss     = require('postcss');

function mqo( opts ){
    var stream = new Transform( { objectMode : true } );

    opts = opts || {};

    function parsePath( path ){
        var extname = Path.extname( path );
        return {
            dirname  : Path.dirname( path ),
            basename : Path.basename( path, extname ),
            extname  : extname
        };
    };

    stream._transform = function( file, encoding, cb ){
        if( file.isNull() ){
            return cb(null, file);
        };
        if( file.isStream() ){
            return cb( new gutil.PluginError( 'mqo', 'Streaming not supported' ) );
        };
        if( file.isBuffer() ){
            var css        = postcss.parse( String( file.contents ) ),
                parsedFile = parsePath( file.relative ),
                matchCount = 0,
                newCss     = postcss.parse('@charset "UTF-8"');

            // let's loop through all rules and extract all @media print
            css.walkAtRules( function( rule ){
                //rule.name.match(/^media/) && console.log(rule.params)
                if( rule.name.match( /^media/ ) && ( rule.params === opts.match ) ){
                    // add the rule to the new css
                    var newRule = rule.clone();

                    newRule.walkRules( function( r ){
                        newCss.append( r );
                    } );
                    rule.remove();
                    matchCount++;
                };
            });

            // push old file
            this.push(file);

            if( matchCount ){
                //push new file
                this.push(new gutil.File({
                    cwd      : '/',
                    base     : '/' + opts.folder + '/',
                    path     : '/' + opts.folder + '/' + parsedFile.basename + parsedFile.extname,
                    contents : Buffer.from(newCss.toString())
                }));
            };
            cb();
        };
    };
    return stream;
};
~~~

## How the Javascript build - Javascript のビルドの方法

### How to build ./inline-js/*.js

see ./gulpfile.js.

~~~bat
gulp js
~~~

### build_js.bat

~~~bat
@echo off

type nul > R:\temp.js

echo (function(ua,window,document,parseFloat,undefined){; >> R:\temp.js
type ..\\web-doc-base\js\_global.js                       >> R:\temp.js
type ..\\web-doc-base\js\_util.js                         >> R:\temp.js
type ..\\web-doc-base\js\commentCleaner.js                >> R:\temp.js
type ..\\web-doc-base\js\checkHighContrast.js             >> R:\temp.js
type ..\\web-doc-base\js\detectImageTurnedOff.js          >> R:\temp.js
type ..\\web-doc-base\js\PicaThumnail.js                  >> R:\temp.js
type ..\\web-doc-base\js\SidebarFixer.js                  >> R:\temp.js
type ..\\web-doc-base\js\ie5.js                           >> R:\temp.js
type ..\\web-doc-base\js\blockquot.js                     >> R:\temp.js
echo })(ua,window,document,parseFloat);                   >> R:\temp.js

java -jar C:\ClosureCompiler\closure-compiler-v20180910.jar --js R:\temp.js --js_output_file dist/min.js --language_in ECMASCRIPT3 --language_out ECMASCRIPT3 --externs ../web-doc-base/js/__externs.js --compilation_level ADVANCED
REM --compilation_level WHITESPACE_ONLY --formatting pretty_print

type ..\\web-doc-base\js\GoogleCodePrettify.js >> dist/min.js

del R:\temp.js
~~~