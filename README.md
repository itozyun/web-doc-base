# Web Doc Base

## Overview - 概要

Super project for itozyun's Web document projects.

1. 2 Column layout (WQXGA, WSXGA, XGA)
2. Written based on the SMACSS
3. Build for each browsers (modern, ie9, ie8, ie7, ie6, ie55, ie5win)
4. Responsive Web Design for the 8 types of device (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch)
5. Reduce ink to print (@media print)
6. High contrast mode support (@media (-ms-high-contrast:active))
7. Drak mode support
8. Legacy browsers support

itozyun の Web ドキュメント・プロジェクトの親プロジェクトです。

1. 2カラムレイアウト (WQXGA, WSXGA, XGA)
2. SMACSS をベースに書かれています
3. ブラウザ別に CSS をビルド (modern, ie9, ie8, ie7, ie6, ie55, ie5win)
4. レスポンシブデザインは8種類のデバイスのために用意 (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch)
5. インクを節約して印刷 (@media print)
6. ハイコントラストモードのサポート (@media (-ms-high-contrast:active))
7. ダークモードのサポート
8. 古いブラウザのサポート

## Functions provided by Javascript - Javascript によって提供される機能

1. User Agent detection [Demo](https://itozyun.github.io/what-browser-am-i/) [src itozyun/what-browser-am-i](https://github.com/itozyun/waht-browser-am-i/)
2. Optimal viewport based on user agent judgment [src](./src/inline-js/dynamicViewPort.js)
3. Adjustment of sidebar [src](./src/js/SidebarFixer.js)
4. Click thumbnail image to enlarge [src](./src/js/PicaThumnail.js)
5. Extension of blockquote [src](./src/js/blockquot.js)

---

1. ユーザーエージェント判定 [Demo](https://itozyun.github.io/what-browser-am-i/) [src itozyun/what-browser-am-i](https://github.com/itozyun/waht-browser-am-i/)
2. ユーザーエージェント判定を元にした最適な viewport [src](./src/inline-js/dynamicViewPort.js)
3. サイドバーの追従 [src](./src/js/7_Library/SidebarFixer.js)
4. サムネイル画像をクリックで拡大 [src](./src/js/7_Library/PicaThumnail.js)
5. blockquote の拡張 [src](./src/js/7_Library/blockquot.js)

### Investigation of special browser settings

[Investigation of special browser settings](./docs/investigation_of_special_browser_settings.md)

## References - 参照プロジェクト

This project has been referred to the next project.

1. [gariban](https://github.com/itozyun/gariban) "Ultralight free Blogger templete"
2. [OutCloud](http://outcloud.blogspot.com/) "itozyun's blog"

プロジェクトは次のプロジェクトに参照されています。

1. [gariban](https://github.com/itozyun/gariban) "超軽量な無料 Blogger テンプレート"
2. [OutCloud](http://outcloud.blogspot.com/) "itozyun のブログです"

## How the CSS and Javascript import - CSS と Javascript のインポートの仕方

Javascript and CSS are placed in the same directory.

---

Javascript と CSS は同じディレクトリに配置します。

~~~html
<!--[if IE 5]>
<style type="text/css">
@media tty {
    i {content : "\";/*" "*/}}; @import '/assets/ie5win.css'; {;}/*";}
}/* */
@media tty {
    i {content : "\";/*" "*/}}@m; @import '/assets/ie55.css'; /*";}
}/* */
</style>
<![endif]-->
<!--[if IE 6]><link href="/assets/ie6.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if (IE 7)|(IEMobile)]><link href="/assets/ie7.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if IE 8]><link href="/assets/ie8.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if IE 9]><link href="/assets/ie9.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if !IE]><!-->
<style type="text/css" media="screen,handheld,projection,tv,print">
/*\*//*/ @import "/assets/ie5mac.css"; /**/ /*\*/
@import "/assets/modern.css"; /**/
</style><!--<![endif]-->
<script src="/assets/min.js"></script>
~~~

## How the CSS build - CSS のビルドの方法

1. CSS is written in SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) expanded comments
2. Generate the browser-specific .scss by gulp-iz-preprosessor
3. Compile the generated .scss
4. Finalize with ./web-doc-base/gulp-finalize-css.js

---

1. CSS は SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) 拡張コメントで書かれています
2. gulp-iz-preprosessor でブラウザ別の .scss を生成します
3. 出来た .scss をコンパイルします
4. ./web-doc-base/gulp-finalize-css.js でファイナライズします。


### gulpfile.js

~~~js
const gulp     = require('gulp'),
      name     = 'MyBlog',
      output   = './public',
      mobileCssPrefix = 'm_',
      hcModeCssDir    = 'hc';

/* -------------------------------------------------------
 *  gulp css
 */
const plumber     = require("gulp-plumber"),
      izpp        = require('gulp-iz-preprocessor'),
      sass        = require("gulp-sass"),
      gcm         = require("gulp-group-css-media-queries"),
      cleanCSS    = require("gulp-clean-css"),
      finalizeCSS = require("./web-doc-base/gulp-finalize-css.js");

gulp.task('css', function(){
    return gulp.src([
            './web-doc-base/src/scss/**/*.scss',
            './scss/**/*.scss'
        ])
        .pipe(plumber())
        .pipe(
            izpp({
                log      : false,
                fileType : 'scss',
                tasks : [
                    { name : 'desktop', imports : [ 'Magazine' ] },
                    { name : 'mobile',  imports : [ 'mobileOnly' ], prefix : mobileCssPrefix }
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
        .pipe(finalizeCSS({ hcdir : hcModeCssDir }))
        .pipe(gulp.dest(output));
    });
~~~

## How the Javascript build - Javascript のビルドの方法

### How to build ./inline-js/*.js

see [./gulpfile.js](./gulpfile.js).

### How to build ./js/*.js

~~~js
const gulp            = require('gulp'),
      name            = 'MyBlog',
      output          = './public',
      mobileCssPrefix = 'm_',
      hcModeCssDir    = 'hc';

/* -------------------------------------------------------
 *  gulp js
 */
const closureCompiler = require('google-closure-compiler').gulp(),
      globalVariables = 'document,parseFloat,Function,isFinite,setTimeout,clearTimeout',
      tempDir         = require('os').tmpdir() + '/' + name,
      externs         = [
         './web-doc-base/what-browser-am-i/src/__externs.js',
         './node_modules/google-closure-compiler/contrib/externs/svg.js',
         './web-doc-base/src/js/__externs.js'
      ];

gulp.task('js', gulp.series(
    function(){
        return closureCompiler(
                {
                    js                : [
                        './web-doc-base/src/js/0_global/1_DEFINE.js',

                        './web-doc-base/src/js/1_packageGlobal/1_packageValiable.js',
                        './web-doc-base/src/js/1_packageGlobal/2_builtinArrayMethods.js',

                        './web-doc-base/src/js/2_CoreModule/DebugLogger.js',
                        './web-doc-base/src/js/2_CoreModule/LoopTimer.js',
                        './web-doc-base/src/js/2_CoreModule/Timer.js',
    
                        './web-doc-base/src/js/3_EventModule/1_moduleGlobal.js',
                        './web-doc-base/src/js/3_EventModule/2_core.js',
                        // './web-doc-base/src/js/3_EventModule/cssAvailability.js',
                        './web-doc-base/src/js/3_EventModule/highContrustMode.js',
                        './web-doc-base/src/js/3_EventModule/imageReady.js',
                        // './web-doc-base/src/js/3_EventModule/prefersColor.js',
                        // './web-doc-base/src/js/3_EventModule/print.js',
                        './web-doc-base/src/js/3_EventModule/resize.js',
                        './web-doc-base/src/js/3_EventModule/scroll.js',

                        './web-doc-base/src/js/4_DOM/1_DOM.js',
                        './web-doc-base/src/js/4_DOM/2_DOMStyle.js',
                        './web-doc-base/src/js/4_DOM/3_DOMAttr.js',
                        './web-doc-base/src/js/4_DOM/4_DOMClass.js',
                        // './web-doc-base/src/js/4_DOM/5_DOMEvent.js',
                        './web-doc-base/src/js/4_DOM/nodeCleaner.js',
    
                        './web-doc-base/src/js/5_CSSOM/CSSOM.js',

                        //'./web-doc-base/src/js/6_CanUse/generatedContent.js',
                        //'./web-doc-base/src/js/6_CanUse/dataUriTest.js',
                        './web-doc-base/src/js/6_CanUse/ieFilterTest.js',
                        //'./web-doc-base/src/js/6_CanUse/imageTest.js',
                        //'./web-doc-base/src/js/6_CanUse/webfontTest.js',

                        './web-doc-base/src/js/7_Library/blockquot.js',
                        './web-doc-base/src/js/7_Library/detectImageTurnedOff.js',
                        './web-doc-base/src/js/7_Library/HighContrastStyleSwitcher.js',
                        './web-doc-base/src/js/7_Library/ie5.js',
                        './web-doc-base/src/js/7_Library/PicaThumnail.js',
                        './web-doc-base/src/js/7_Library/SidebarFixer.js',

                        './web-doc-base/src/js/onreachEnd.js',
                    ],
                    externs           : externs,
                    define            : [
                        'WEB_DOC_BASE_DEFINE_MOBILE_CSS_PREFIX="' + mobileCssPrefix + '"',
                        'WEB_DOC_BASE_DEFINE_HC_MODE_CSS_DIR="' + hcModeCssDir + '"'
                    ],
                    compilation_level : 'ADVANCED',
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
        return closureCompiler(
            {
                js                : [
                    tempDir + '/temp.js',
                    './web-doc-base/src/js/GoogleCodePrettify.js'
                ],
                externs           : externs,
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                js_output_file    : 'min.js'
            }
        )
        .src()
        .pipe(gulp.dest( output ));
    }
));
~~~

## License

[MIT License](https://opensource.org/licenses/MIT)

## Dependency Licenses

### what-browser-am-i

|         |     |
|:--------| --- |
| Author  | itozyun |
| Website | https://github.com/itozyun/what-browser-am-i |
| License | [MIT License](https://opensource.org/licenses/MIT) |

### Modernizr

|         |     |
|:--------| --- |
| Author  | Modernizr |
| Website | https://github.com/Modernizr/Modernizr |
| License | [MIT License](https://opensource.org/licenses/MIT) |

### JavaScript code to detect available availability of a particular font in a browser using JavaScript and CSS.

|         |     |
|:--------| --- |
| Author  | Lalit Patel |
| Website | http://www.lalit.org/lab/javascript-css-font-detect/ |
| License | [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0) |

### uupaa.js 完全に状況を掌握した画像の遅延読み込みの実現

|         |     |
|:--------| --- |
| Author  | uupaa |
| Website | http://d.hatena.ne.jp/uupaa/20080413/1208067631 |
| License | MIT License? ([uupaa.js](https://code.google.com/archive/p/uupaa-js/) が MIT License の為多分) |

### Google Code-Prettify

|         |     |
|:--------| --- |
| Author  | google |
| Website | https://github.com/googlearchive/code-prettify |
| License | [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0) |

### jQuery.prettyQuote.js

|         |     |
|:--------| --- |
| Author  | Matori/ub-pnr |
| Website | https://unformedbuilding.com/demo/2010/prettyquote/ |
| License | [MIT License](https://opensource.org/licenses/MIT) |

## The referenced code

### Detecting if images are disabled in browsers > Checking for Windows High Contrast

|         |     |
|:--------| --- |
| Author  | Steve Faulkner |
| Website | https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/ |

### Function.prototype.applyとかArray.prototype.spliceのIE5用のコード

|         |     |
|:--------| --- |
| Author  | ofk |
| Website | https://ofk.hatenadiary.org/entry/20080904/1220485969 |

### Array.prototype.indexOf() polyfill

|         |     |
|:--------| --- |
| Author  | MDN |
| Website | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf |