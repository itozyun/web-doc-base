# ブートシーケンス

web-doc-base を使った Web 文書のブートシーケンス、CSS の読み込みについて解説します。

1. ブラウザ毎の経路の解説
2. ビルドオプション
3. CSS の読み込みと文書のパフォーマンス

## 1. ブラウザ毎の経路の解説

ブラウザ毎に異なる CSS を読み込む経路については「[対応ブラウザをかなり拡げた場合の最適なCSSの読み込み方法、web-doc-baseのブートシーケンスについて](//outcloud.blogspot.com/2021/12/loading-css-in-webdocbase.html)」で解説しています。

## 2. ビルドオプション

<img src="//1.bp.blogspot.com/-lfBxArKqjgI/YZxlbuwWxyI/AAAAAAAASzw/_A8PfSFEpCEEkjL1nhzsVB8nZimS2LZ-wCLcBGAsYHQ/s480/boot.drawio.png">

~~~js
var
/** @define {boolean} */
    DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_JS = true;
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

以上の経路の決定にあたっては、Lighthouse 等の Web 文書のパフォーマンスチェックツールのアドバイスを参考にしていました。

ツールのアドバイスに沿って、多くのブラウザについて `document.write()` を使わない実装にしました。