# Web Doc Base

## Overview
概要

Super project for itozyun's Web document projects.

1. 2 Column layout (WQXGA, WSXGA, XGA)
2. Written based on the SMACSS
3. Build for each browsers (modern [IE10+, Gecko 1.9.1+, Goanna, Opera 9.5+, Safari, Chrome], IE9, IE8, IE7, IE6, IE5.5, IE5, Opera 7\~7.1x, Opera 7.20\~7.5x, Opera 8\~8.5x, Opera 9\~9.2x, Gecko ~0.9.7, Gecko ~1.2.1, Gecko ~1.9.0)
4. Responsive Web Design for the 8 types of device (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch)
5. Reduce ink to print (`@media print`)
6. High contrast mode support (`@media (-ms-high-contrast:active)`)
7. Drak mode support (`(prefers-color-scheme:dark)`)
8. Legacy browsers support

itozyun の Web ドキュメント・プロジェクトの親プロジェクトです。

1. 2カラムレイアウト (WQXGA, WSXGA, XGA)
2. SMACSS をベースに書かれています
3. ブラウザ別に CSS をビルド (modern [IE10+, Gecko 1.9.1+, Goanna, Opera 9.5+, Safari, Chrome], IE9, IE8, IE7, IE6, IE5.5, IE5, Opera 7\~7.1x, Opera 7.20\~7.5x, Opera 8\~8.5x, Opera 9\~9.2x, Gecko ~0.9.7, Gecko ~1.2.1, Gecko ~1.9.0)
4. レスポンシブデザインは8種類のデバイスのために用意 (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch)
5. インクを節約して印刷 (`@media print`)
6. ハイコントラストモードのサポート (`@media (-ms-high-contrast:active)`)
7. ダークモードのサポート (`(prefers-color-scheme:dark)`)
8. 古いブラウザのサポート

## Functions provided by Javascript
Javascript によって提供される機能

1. User Agent detection [Demo](https://itozyun.github.io/what-browser-am-i/) [src itozyun/what-browser-am-i](https://github.com/itozyun/waht-browser-am-i/)
2. Optimal viewport based on user agent judgment [src](./src/js-inline/dynamicViewPort.js)
3. Adjustment of sidebar [src](./src/js/7_Library/SidebarFixer.js)
4. Click thumbnail image to enlarge [src](./src/js/7_Library/PicaThumnail.js)
5. Extension of `<blockquote>` [src](./src/js/7_Library/blockquot.js)

---

1. ユーザーエージェント判定 [Demo](https://itozyun.github.io/what-browser-am-i/) [src itozyun/what-browser-am-i](https://github.com/itozyun/waht-browser-am-i/)
2. ユーザーエージェント判定を元にした最適な viewport [src](./src/js-inline/dynamicViewPort.js)
3. サイドバーの追従 [src](./src/js/7_Library/SidebarFixer.js)
4. サムネイル画像をクリックで拡大 [src](./src/js/7_Library/PicaThumnail.js)
5. `<blockquote>` の拡張 [src](./src/js/7_Library/blockquot.js)

### Links

* [Demo](https://itozyun.github.io/web-doc-base/)
* [clearfixのテスト](https://itozyun.github.io/web-doc-base/clearfix.html)
* [疑似要素のテスト](https://itozyun.github.io/web-doc-base/cssGeneratedContent.html)
* [Web 文書用のインライン js](https://itozyun.github.io/web-doc-base/getInlineJs.html)
* [CSSOM のテスト](https://itozyun.github.io/web-doc-base/test.cssom.html)
* [import のテスト](https://itozyun.github.io/web-doc-base/importHack.html)
* [Test Image loading](https://itozyun.github.io/web-doc-base/testImageLoading.html)
* [アイコンのテスト](https://itozyun.github.io/web-doc-base/test.icon.html)
* [RichLink のテスト](https://itozyun.github.io/web-doc-base/richlink.html)
* [Investigation of special browser settings](./docs/investigation_of_special_browser_settings.md)
* [ブートシーケンス](./docs/bootsequence.md)

## References
参照プロジェクト

This project has been referred to the next project.

1. [gariban](https://github.com/itozyun/gariban) "Ultralight free Blogger templete"
2. [OutCloud](http://outcloud.blogspot.com/) "itozyun's blog"

プロジェクトは次のプロジェクトに参照されています。

1. [gariban](https://github.com/itozyun/gariban) "超軽量な無料 Blogger テンプレート"
2. [OutCloud](http://outcloud.blogspot.com/) "itozyun のブログです"

## Installation

~~~
> git clone https://github.com/itozyun/web-doc-base.git --recursive

> npm install
~~~

## How the CSS and Javascript import - CSS と Javascript のインポートの仕方

Javascript and CSS are placed in the same directory. 
Do not add the `async` or `deffer` attributes to `<script>`.
To find out why, look at `p_assetUrl` in code.

---

Javascript と CSS は同じディレクトリに配置します。`<script>` に `async` や `deffer` 属性を付けてはいけません。
この理由を知るにはコードで `p_assetUrl` を確認します。

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
<noscript>
<style type="text/css" media="screen,handheld,projection,tv,print">
/*\*//*/ @import "/assets/ie5mac.css"; /**/ /*\*/
@import "/assets/modern.css"; /**/
</style>
</noscript>
<!--<![endif]-->
<script src="/assets/min.js"></script>
~~~

## How the CSS build
CSS のビルドの方法

1. CSS is written in SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) expanded comments
2. Generate the browser-specific .scss by gulp-iz-preprosessor
3. Compile the generated .scss
4. Finalize with ./web-doc-base/gulp-finalize-css.js

---

1. CSS は SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) 拡張コメントで書かれています
2. gulp-iz-preprosessor でブラウザ別の .scss を生成します
3. 出来た .scss をコンパイルします
4. ./web-doc-base/gulp-finalize-css.js でファイナライズします。

### How to build ./src/scss/*.scss

* See gulp-task `css` in [./gulpfile.js](./gulpfile.js).

## How the Javascript build
Javascript のビルドの方法

### How to build ./src/js-inline/*.js

* See gulp-task `docs` in [./gulpfile.js](./gulpfile.js).

### How to build ./src/js/*.js

* See gulp-task `js` in [./gulpfile.js](./gulpfile.js).

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