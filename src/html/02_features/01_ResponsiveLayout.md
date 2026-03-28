# 1～4カラムレイアウト、8種類のビューポートサイズにレスポンシブ

## 1～4カラムのレイアウト

シングルカラムだけの利用にも対応しています。

ペーンを左右に分割して、左にメインカラム、右にサイドバーを配置する、昔からよくある2カラム・レイアウトを用意しています。

加えて、メインカラムを左右に分割して本文の隣にページ内索引を表示する3カラム・レイアウトを準備中です。特に技術文書にとっては大事です。(3分割)

加えて、本文を左右に分割して、脚注用のエリアを設ける4カラム・レイアウトを準備中です。脚注は10年を超えてメンテナンスされる文章に、時代に応じた背景情報を追記していくために有効です。(4分割)

## 8種類のビューポートサイズにレスポンシブ

CSS メディアクエリをサポートするブラウザに対しては、次の8種類のビューポートサイズ毎にレイアウトが用意されています。

WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch

### CSS4 メディア特性、ビューポートのサイズをサポートするブラウザ

* IE9+
* Gecko 1.9.1+(Firefox 3.5+)
* Opera 9.0+
* Safari 3+, Chrome 1+
  * Safari 3.2.3, Chrome 1 の実装は不完全で、`onload` 時点でのメディア特性は適用されますが、その後のウィンドウのリサイズに追従しません。

### Watch 用レイアウトで背景色が黒(#000)な件について

ビューポートサイズが極めて小さい端末で、表示スペースを確保する為に左右の余白を0にします。この際に狭苦しい印象にならないように、ディスプレイのベゼルを余白に見立てます。この為に背景色は黒にします。

ダークモードの背景色が黒なのは、Watch とスタイルを共用する為です。

参考記事：「[Webサイトのスマートウォッチ対応はお済みですか？](https://outcloud.blogspot.com/2015/10/smartwatch.html)」

## `handheld` メディアタイプをサポートするデスクトップ版 Opera 8.0 ~ 10.10

またメディアクエリをサポートしないが、handheld メディアタイプをサポートするデスクトップ版 Opera 8~8.5x について、2種類のビューポートサイズを用意します。

XGA, handheld(Watch 相当)

デスクトップ版 Opera 8.0~10.10 は、<samp>View > Small Screen</samp> にチェックを付けることで、`@media handheld` のスタイルが適用されます。
`onload` 後にもユーザーの任意で変化します。

7.x にも Small Screen のチェックはあり、独自のスタイル、狭いビューポート幅でページを表示します。メディアタイプ別スタイルが適用されることはありません。

### テスト

<style style="text/css">
#handheld { color: #999 }
@media all and(-o-:0),not all and(-o-:0){
    #handheld { display: block !important }
    :_{top:0} /* Opera ~7.11 skip next rule */
}
#handheld { display: none; }
@media handheld {
    #handheld { display: block; color: red }
}
</style>
<p id="handheld">赤色になっていれば <code>@media handheld</code> スタイルが当たっています。</p>

### このテストのマークアップ

~~~html
<style style="text/css">
#handheld { color: #999 }
@media all and(-o-:0),not all and(-o-:0){
    #handheld { display: block !important }
    :_{top:0} /* Opera ~7.11 skip next rule */
}
#handheld { display: none; }
@media handheld {
    #handheld { display: block; color: red }
}
</style>
<p id="handheld">赤色になっていれば <code>@media handheld</code> スタイルが当たっています。</p>
~~~

## `projection` メディアタイプをサポートするデスクトップ版 Opera 8.0 ~ 12.13

<samp>View > Full Screen</samp> にチェックを付けることで、フルスクリーン表示になります。このときには `@media projection` のスタイルが適用されます。フルスクリーン状態は検出できますが、ビューポートのサイズを CSS 側から知ることは出来ないので、フル HD 用のスタイルを提供する、といったことは出来ません。

7.x にも Full Screen のチェックはあり、フルスクリーン表示に出来ます。メディアタイプ別スタイルが適用されることはありません。

### テスト

<style style="text/css">
#projection { color: #999 }
@media all and(-o-:0),not all and(-o-:0){
    #projection { display: block !important }
    :_{top:0} /* Opera ~7.11 skip next rule */
}
#projection { display: none; }
@media projection {
    #projection { display: block; color: red }
}
</style>
<p id="projection">赤色になっていれば <code>@media projection</code> スタイルが当たっています。</p>

### このテストのマークアップ

~~~html
<style style="text/css">
#projection { color: #999 }
@media all and(-o-:0),not all and(-o-:0){
    #projection { display: block !important }
    :_{top:0} /* Opera ~7.11 skip next rule */
}
#projection { display: none; }
@media projection {
    #projection { display: block; color: red }
}
</style>
<p id="projection">赤色になっていれば <code>@media projection</code> スタイルが当たっています。</p>
~~~

## モバイル版 Opera 8.5x を搭載する Nintendo DS 用 Browser について

Nintendo DS 用ブラウザは `handheld` メディアタイプを指定して、SSR（スマートスクリーンレンダリング）を無効化した上で、横 240px 用の小型モバイル向けのデザインを作り込みます。

<blockquote cite="https://codezine.jp/article/detail/5223?p=2" title="「携帯ゲーム機用Webページ」の作り方 / ニンテンドーDSシリーズ用ページの作り方">

### 縦長／タテ長モードに対応する

縦長／タテ長モードでは、WebページをDSの画面に収めることが優先され、自動的に独自のレイアウトに変換されるので注意が必要です。例えば、tableタグや幅や高さを指定したCSSなどが独自レイアウトに変換されることがあります。

これは、OperaのSSR技術が使われているためです。SSRが適用されると、CSSが反映されず、悪戦苦闘することになりがちです。CSSを適用するには、メディアタイプを携帯電話やPDAなどと同じ「handheld」にします。するとOperaはそのページが携帯デバイス用に最適化されていると認識し、SSRを適用しなくなり「handheld」のCSSが有効になります。

#### ［リスト3］メディアタイプを「handheld」に指定し、CSSを有効にする

~~~html
<link rel="stylesheet" href="ds.css" media="handheld" type="text/css" />
~~~

</blockquote>