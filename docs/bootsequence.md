# ブートシーケンス

web-doc-base を使った Web 文書のブートシーケンス、CSS の読み込みについて解説します。

1. ブラウザ毎の経路の解説
2. ビルドオプション
3. CSS の読み込みと文書のパフォーマンス

## 1. ブラウザ毎の経路の解説

ブラウザ毎に異なる CSS を読み込む経路について解説します。

![https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=boot#R7Vvfb%2BI4EP5b%2BpCXSkWxnQTyWCi97en2trqetLtPp5C44G2IaTAt7F9%2FduL8sGMK25IUtAWpjSeO48w333g8Qyw0mq%2F%2FSIPF7DONcGxBO1pb6MqCECDb4%2F%2BEZJNL%2Bj7IBdOURLJTJbgjP7EU2lK6IhFeKh0ZpTEjC1UY0iTBIVNkQZrSZ7XbPY3Vuy6CKW4I7sIgbkq%2FkojNcqln25X8EybTGdNOTILwYZrSVSJvZ0FkZ5%2F89DwohpKC5SyI6HNNhMYWGqWUsvxovh7hWKi20Fp%2B3fWWs%2BW0U5ywfS5I4SMlP%2BOv3u2X0X%2BfV9%2FRpx%2FwQo7yFMQrXDxGNlm2KfTzPCMM3y2CULSfuQ1YaDhj85i3AD%2B8J3E8ojFNs95onH24fMlS%2BoBrZ4bZl58J0lBagWiVarF5YxoHy6U8zlSLI9m6pwmrDQYuxZfL5fxxyvB6q2JAqW5uxZjOMUs3vMtaNURpv75sPlfGgAoMZzVDcAqkA2mA03LkCgV%2BIIH4BVBgA5RepnAdGf7ITAVDVXpCE6whJEVBTKYJb8b4Xowg1Ec4Iy6leE6iSNxkaMJeICHxg6BTnPxdOHlGmFpCCe2mTqHXv4IJjm%2FpkjBChX4nlDE6NyieUY1dnB0LMdgMr4OpuHa4wCnhD4DTSnpbiKDCLk9cnx%2FaPQAcOHD71V8Dkr9O5c6whypHgdMEHwy6RN9poH%2BTxISTC9p%2FBk%2FBMkzJgrXA2JArTGD%2Fas4Cr0vckKvh5jZxcw24obZw806KtbanfvonzVrj0mob0Aetwd83wO8Fc4FfLJh5dnFhuUNyz%2Fuc3Ywt96o8PWWZTuqd%2F%2F5yN%2Frn5vbfl%2Fqc8eFwEvERm2Md23LesWvwe%2B5O84Ae6NA5DE7LOQw83%2FVcCPrI54xx0Gk5h77qHBAyoI8MzmHQFvrFPkB1DhmLI%2FKkmIH3uBLbtkw9Fzkgl7wD6C%2FWuQeQ58U0pR1UwoyltS6ewW3kt9L8xfW55Y7OxUOKQ%2FHPthybzBc0ZeK4HJNgdx6EvZDvpar75COUl8uRjNfP%2BSY%2FTV64PtfKJH2lUsonjuWDZfr12nKLb4%2BZ%2Bl0Sw99NDOAb3GJ7xNgjS3BEfvHEtzraNtcxwd%2FpVgc08xGas5KbHXuZhoonmAck6f1YKtRvNwI6se0RdDWsDdujfpfbI7BHVuNQCcHr7KPw2LdeSAhuw0FF6xCRqat64DLTVw9NHAMs%2FdZgaaYblNAkXzrP5Yp9Iqtqt9lD5Gpcg7DXZJsx4ixYenhY3d1s45vHS1HlEBoXZCChRjfNd3F1pJtv2ULI5y3b36V%2Bs8bVWmltLFO%2BHa8J%2ByZvIY6zEXqubFVDiEYxwvbFU8O1ZH4sooVhWUipQz%2BAY6FJCT2OGkUcDXiuNLpKQ%2FyCuqVvY0E6xWynE2xaUs1OTDmrQpbiOGDkSZ2vyXbkHW4pSVh9%2Fe8rhgo8zavkzymvqiywMRAaaBavFyxyRTQG4uYWbGrdFqLDcvuEHa2AUky4YkY%2BYsWTUqdvoI4pk%2FNW6rzC5lXWHDsDBu9p2ND2e76skWYfTzUbffXc2877W5brA9u5fp%2Bi3a6d75GTajEgA%2FZRRGTaltiF7x6Q%2BQ1Yys3O7x5p%2Beqy4zrvH2gV9nLI1eKIPP%2F7eXTN87qvdOGwwEMn%2BIFduH6fYsKtunC4R%2FrsDVG%2BPUD1MB%2F0bLAj0s9at7Xk2tEFMkceoiMEVHN9dYiuhRQu6CZ0cbsI0QszP5G08YnX2rW0Mdi31u63FSJBUypxS639Zsz%2FnO8ot9dL6fzSj2K6Ukzfib4x4motkQxNGcsjJv9p19I9FX64by29tZoRNGU262SOSfIgJpPi%2B%2Bx0Vbo%2B1%2BrOHyUjBeqBDrWhZGSqDrfH9D1%2BUveRiTP7x%2FfbuA1eSsXpbmH%2FjLNWu24rE6eToJNtXDPjXIB9Yu5o7InvgQIPT91ZIMMvs01vT7TnjpoJ06Y%2F%2Bv1gGqgwQVMGtUuYioFrMKEPmBwtoQZMgVynMDVzV84HTLrTK%2FM%2F7wZTM9UyES8Wcpjw4wonXGtHt0FG0AjZnZwiaBdCvTTexM%2F0u6v2XiZrbpenhM1Wk17Id8LwmjD6c7NK%2BNEznlxENLyYBEuc%2FRb3KHDVgu%2BXCoYFY512AdZ%2BRGF6teAwDOXN6iXePNisXpRG4%2F8B](boot.drawio.png)

1. 条件付きコメント非対応ブラウザで javascript が無効の場合
2. IE5~9 の場合
3. インライン javascript から CSS を読み込む
4. main.js から CSS を読み込む

### 1.1. 条件付きコメント非対応ブラウザで javascript が無効の場合

IE 以外のブラウザ用または Mac IE5 用の CSS が読み込まれます。

このシナリオでは Gecko 1.9.1 未満、Opera 9.5 未満にも `modern.css` が読み込まれてしまいます。デザインが崩れるに留まらず、最悪の場合、ブラウザがクラッシュします。

次の HTML タグで javascript を有効にするか Web ブラウザの変更を促す警告メッセージを表示して、閲覧者に対処を促します。

~~~html
<noscript>
<style>/*<![CDATA[*/
noscript p { display:none;border:double 5px #f66;padding:1em;background:#300;color:#fff; }
/* Gecko ~1.8 */
@media \0 all {
    noscript p { display:block;content:"Please enabled javascript or use new version of browser. At least Firefox 3.5+."; }
}
@-moz-document url-prefix() {
    /* Gecko 1.8~1.9.2 */
    _:not(), _:-moz-loading, noscript p { display:block;content:"Please enabled javascript or use new version of browser. At least Firefox 3.5+."; }
    /* Gecko 1.9.1~1.9.2 */
    _:not(), _:-moz-handler-blocked, noscript p { display:none }
}
/* Opera 7.20~9.27 */
@media all and (-webkit-min-device-pixel-ratio:10000),not all and (-webkit-min-device-pixel-ratio:0) {
    html:first-child noscript p { display:block;content:"Please enabled javascript or use new version of browser. At least Opera 9.50+."; }
}
/* Opera ~7.10 */
noscript p, x:not(\){ display:block;content:"Please enabled javascript or use new version of browser. At least Opera 9.50+."; }
/*]]>*/</style>
<p>
</noscript>
~~~

#### 短縮版

~~~html
<noscript><style>/*<![CDATA[*/noscript p{display:none;border:double 5px #f66;padding:1em;background:#300;color:#fff}@media \0 all{noscript p{display:block;content:"Please enabled javascript or use new version of browser. At least Firefox 3.5+."}}@-moz-document url-prefix(){_:not(),_:-moz-loading,noscript p{display:block;content:"Please enabled javascript or use new version of browser. At least Firefox 3.5+."}_:not(),_:-moz-handler-blocked,noscript p{display:none}}@media all and(-webkit-min-device-pixel-ratio:10000),not all and(-webkit-min-device-pixel-ratio:0){html:first-child noscript p{display:block;content:"Please enabled javascript or use new version of browser. At least Opera 9.50+."}}noscript p,x:not(\){display:block;content:"Please enabled javascript or use new version of browser. At least Opera 9.50+."}/*]]>*/</style><p></noscript>
~~~

### 1.2. IE5~9 の場合

Javascript の死活にかかわらず、条件付きコメントで各ブラウザ用の CSS を読み込みます。

### 1.3. インライン javascript から CSS を読み込む

殆んどの IE 以外のブラウザ(`addEventListener` をサポートするもの)と Mac IE 5 用の CSS を読み込ます。

main.js のロードに失敗するケースに備えて、ごく一部のブラウザを除いてインライン javascript で CSS を読み込みます。

`load` または `DOMContentLoaded` イベントコールバック内で `<link>` 要素を追加します。CSS のパスは `<noscript>` の `textContent` から求めます。

### 1.4. main.js から CSS を読み込む

Gecko <1.5, Opera <9.5, Safari <=4.0.5, IE 以外の `addEventListener` をサポートしないブラウザは常にここで CSS を読み込みます。

インライン javascript の CSS ローダーを使わないビルド設定の場合、全ての IE 以外のブラウザと Mac IE 5 もここから CSS を読み込みます。

`<script>` の `src` からアセットディレクトリを取得します。Presto < 9, Gecko < 1 は、CSS 周りのバグを回避する為に `document.write()` で  `<link>` 要素を追加します。

Safari < 3 には `load` イベントがいない為、常にこのフォールバックのある main.js から CSS を読み込みます。

1 <= Gecko <1.5, 9 <= Opera <9.5, 3 <= Safari <=4.0.5 では `<noscript>` 下の `textContent` を取得できない為、ここから CSS を読み込みます。

## 2. ビルドオプション

~~~js
var
/** @define {boolean} */
    DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_CSS = true;
~~~

1. インライン javascript で CSS ローダーを使う設定で main.js とインライン js をビルドする
2. インライン javascript の CSS ローダーを使わない設定で main.js をビルドする

### 2.1. インライン javascript で CSS ローダーを使う設定で main.js とインライン js をビルドする

|  | js enabled | js disabled |
|:--|:--|:--|
| IE 5~9 | 2 | 2 |
| modern browsers | 3 | 1 |
| Mac IE 5 | 3 | 1 |
| Gecko <1.5, Opera <9.5, Safari <=4.0.5 | 4 | 1 |

### 2.2. インライン javascript の CSS ローダーを使わない設定で main.js をビルドする

CSS ライブラリプロジェクト等では、インライン javascript と main.js の共働が不適当な場合があります。このようなケースでは CSS ローダーを使わない設定で main.js をビルドします。

|  | js enabled | js disabled |
|:--|:--|:--|
| IE 5~9 | 2 | 2 |
| modern browsers | 4 | 1 |
| Mac IE 5 | 4 | 1 |
| Gecko <1.5, Opera <9.5, Safari <=4.0.5 | 4 | 1 |

## 3. CSS の読み込みと文書のパフォーマンス

以上の経路の決定にあたっては、Lighthouse 等の Web 文書のパフォーマンスチェックツールのアドバイスを参考にしています。

ツールのアドバイスに沿って、多くのブラウザについて `document.write()` を使わない実装にしました。