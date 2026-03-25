# ワンポイント

## 本文用の `line-height` 指定

読みやすい本文の行間は 1.6～2 とされています。しかし `body { line-height:2 }` とはしません。
見出し（`<h1>～<h6>`）や `<li>`, `<dt>`, `<dd>`, `<th>`, `<td>` の行間も空いてしまい読みづらくなるからです。

src/scss を `size.$PARAGRAPH_LINE_HEIGHT` で検索すると、\<p> とフォーム部品だけに本文用の `line-height` が指定されています。

## `@media screen` には指定して `@media print` には指定しないプロパティ

スクリーンメディアでは有効にして、印刷メディアでは無効にしておきたいプロパティがあります。例えば次のようなものです。

* メインカラムとサブカラム（サイドバー）の2カラムレイアウト
* 背景色の塗りとテキスト色（インクを節約するため白背景にする）
* スクロールの制御（印刷メディアではスクロールを禁止して、コンテンツが見切れないようにする）

これらのプロパティは `@media screen` 内に書くことで、`@media print` での上書きが不要になり、CSS ファイルサイズが小さくなります。しかし、NetSerf では `@media screen` 内に書いたスタイルが無視されるので悩ましいところです。

## `border` 系の下準備を全ての要素にしておく

`border` を使うデザインを多用するので、あらかじめ全称セレクタで `border-style`, `border-color` などを設定しておきます。

ただし Opera 7.2x では、`<input>` などに指定するとフォーム部品に触れなくなる問題が起きるので個別に指定します。

~~~scss
// 04_typography/global.scss
@if ua.$Opera72 {
    h2, h3, h4, h5, h6,
    div, blockquote, pre,
    a, img, hr, code, var, kbd,
    table, th, td {
        border-style : solid;
        border-width : 0;
    }
} @else {
    * {
        border-style : solid;
        border-width : 0;
    }
}

// 05_theme/base-color.scss
* {
    border-color : color.$Light_casual_fill;
}
~~~

## CSS Generated Content の実装状況は5段階

CSS Generated Content の実装状況は、`:after{display:inline-block}` をサポートするAランクから、非サポートのEランクまで、計5段階を確認しています。

* IE 9+, Gecko 1.9.1+, Opera 9.5+, Chrome 1+：`:after{display:inline-block}` をサポートする
* IE 8：`-ms-filter` が利かない
* Opera 7.2+：`:after{display:block}` をサポートする
* Gecko 0.6+, Opera 7+：常にインライン要素
* IE7 以下：非サポート

これに関する詳しい調査は「[【画像スプライト編】Web文書のグレースフルデグラデーションをムキになってやってみる](https://outcloud.blogspot.com/2020/12/graceful-image-sprite.html)」を確認されたい。

## 動的疑似要素の要素セレクタの省略

`:hover` がリンク要素限定の IE6 以下などでは、`a:hover` から `a` を省略できる。

しかし、IE では `a:active` の `a` を外すと、`body:active` に一致するので、省略できない。

<a name="clash"></a>

## 読み込むだけでクラッシュするプロパティ

「読み込むだけでクラッシュする」プロパティには次を発見しています。

* Opera 7.2x 以下： [[attr|="value"]](../../test/attr-selectors.html) セレクタが CSS に書かれている
* Gecko 0.8x 以下： `-moz-opacity` で透過指定されている要素がビューポートに入る
