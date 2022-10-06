# 2カラムレイアウトを基本とし、8種類のビューポートサイズにレスポンシブ

## オーソドックスな2カラムレイアウト

メインカラムを左、サイドバーを右になる、昔からよくあるレイアウトを基本とします。

## 8種類のビューポートサイズにレスポンシブ

CSS メディアクエリをサポートするブラウザに対しては、次の8種類のビューポートサイズ毎にレイアウトが用意されています。

WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Small phone, Watch

### CSS4 メディア特性、ビューポートのサイズをサポートするブラウザ

* IE9+
* Gecko 1.9.1+(Firefox 3.5+)
* Opera 9.0+
* Safari 3+, Chrome 1+
  * Safari 3.2.3, Chrome 1 の実装は不完全で、`onload` 時点でのメディア特性は適用されますが、その後のウィンドウのリサイズに追従しません。

### Watch 用レイアウトで背景色が黒(#000)になる件について

ビューポートサイズが極めて小さい端末で、表示スペースを確保する為に左右の余白を0にします。この際に狭苦しい印象にならないように、ディスプレイのベゼルを余白に見立てます。この為に背景色は黒にします。

ダークモードの背景色が黒なのは、Watch とスタイルを共用する為です。

## `handheld` メディアタイプをサポートするデスクトップ版 Opera 8.0 ~ 10.10

またメディアクエリをサポートしないが、handheld メディアタイプをサポートするデスクトップ版 Opera 8~8.5x について、2種類のビューポートサイズを用意します。

XGA, handheld(Watch 相当)

デスクトップ版 Opera 8.0~10.10 は、<samp>View > Small Screen</samp> にチェックを付けることで、`@media handheld` のスタイルが適用されます。
onload 後にもユーザーの任意で変化します。

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

<samp>View > Full Screen</samp> にチェックを付けることで、フルスクリーン表示になります。`@media projection` のスタイルが適用されます。フルスクリーン状態は検出できますが、ビューポートのサイズを CSS 側から知ることは出来ないので、フルHD用のスタイルを提供する、といったことは出来ません。

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

### モバイル版 Opera 8.5x を搭載する Nintendo DS 用 Browser について

`<link media="handheld">`