# ユーザー設定の調査

1. ブラウザの状態フラグ
2. イベントリスナの登録
3. 機能検出用関数

## 1. ブラウザの状態フラグ

1. ブラウザは `(forced-colors:*)`, `(-ms-high-contrast:*)` メディア特性をサポートするか？
2. ブラウザは `print` イベントをサポートするか？
3. `:before`, `:after` 疑似要素によるコンテンツの生成が出来るか？
4. ユーザー設定で `-ms-filter` は有効か？ IE4~9 用。
5. ユーザー設定で CSS は有効か？
6. 強制カラーモードの状態
7. ユーザー設定で画像が有効か？
8. Data URI スキームが使えるか？

|  | variable                    | type                 | value | available            | note                                                                 |
|:-|:----------------------------|:---------------------|:------|:---------------------|:---------------------------------------------------------------------|
|1 | `p_canuseNativeForcedColors`| boolean or undefined |       | from the beginning   |                                                                      |
|2 | `p_printEventDisabled`      | boolean              |       | from the beginning   |                                                                      |
|3 | `p_cssGeneratedContentGrade`| number or undefined  || `p_listenCssAvailabilityChange` | undefined : `p_cssAvailability == false`, 0:none, 1:enabled, 2:CSS-P, 3:Inline Block + CSS-P |
|4 | `p_iefilterEnabled`         | boolean or undefined |       | `p_listenLoadEvent`  |                                                                      |
|5 | `p_cssAvailability`         | boolean              |       | `p_listenLoadEvent`  |                                                                      |
|6 | `p_forcedColorsState`       | number               | 0~3   | `p_listenLoadEvent`  | none : 0, active : 1, light-on-dark : 2, dark-on-light : 3           |
|7 | `p_imageEnabled`            | boolean or undefined |       | `p_listenImageReady` | undefined : `document.images.length == 0`                            |
|8 | `p_dataURITestResult`       | boolean or undefined |       | `p_dataURITest`      |                                                                      |

`p_cssGeneratedContentGrade` の判定用に、メインの CSS に下記スタイルを入れておく。

~~~css
#jsCanUseContent {
    font       : 0/0 a;
}
#jsCanUseContent:after {
    content    : ':)';
    visibility : hidden;
    font       : 7px/1 a
}
~~~

## 2. イベントリスナの登録

1. `p_listenCssAvailabilityChange`
2. `p_listenForcedColorsChange`
3. `p_listenImageReady`
4. `p_listenPrefersColorSchemeChange`
5. `p_listenPrintEvent`

コールバックで `true` を返すとリスナを解除できる。

### 1. `p_listenCssAvailabilityChange`

CSS の有効/無効が切り替わるたびにコールバックします。Firefox は表示 > スタイルシートから、機能の死活をいつでも切り替えることが出来ます。

~~~js
p_listenCssAvailabilityChange(
    function( cssAvailability ){
        return true; // リスナの解除
    }
);
~~~

### 2. `p_listenForcedColorsChange`

Web サイトの強制カラーモード(旧名、ハイコントラストモード)の状態変化をコールバックします。

ネイティブサポートの有無で処理を切り替える場合 `p_canuseNativeForcedColors` で判断します。

1. ネイティブサポート Chromium Edge 79+, Firefox 89+(81+), Chrome 89+(79+)
2. `(-ms-high-contrast:*)` のサポート IE 10+, EdgeHTML 12+
3. Web 文書へのモードの反映とこれを Javascript で検出 IE5+, Gecko 1.8.1+(文書読み込み時点のモードを反映)

`light-on-dark`, `dark-on-light` の検出は、`(-ms-high-contrast:*)` と `(forced-colors:*)` を非サポートの環境に限定する?

~~~js
p_listenForcedColorsChange(
    function( forcedColorsState ){
        if( p_canuseNativeForcedColors ){
            // Native suport of (forced-colors:*) or (-ms-high-contrast:*)
        } else {
            //
        };
    }
);
~~~

### 3. `p_listenImageReady`

`onload` 時に存在する `<img>` について、ひとつづつ読み込まれたか？否かをコールバックします。

~~~js
p_listenImageReady(
    function( result ){
        var imgElement = result.img,
            imgReady = result.imgReady,
    }
);
~~~

### 4. `p_listenPrefersColorSchemeChange`

ダークモードの死活をコールバックします。

~~~js
p_listenPrefersColorSchemeChange(
    function( isDrakMode ){

    }
);
~~~

### 5. `p_listenPrintEvent`

`beforeprint`, `afterprint` イベントをコールバックします。`p_printEventDisabled` が `false` の場合、コールバックはありません。

~~~js
p_listenPrintEvent(
    function( isBeforePrint ){

    }
);
~~~

## 3. 機能検出用関数

1. `p_dataUriTest`
2. `p_imageTest`
3. `p_webFontTest`

### 1. `p_dataUriTest`

Data　URI スキームが使用できるか？ 1x1 サイズの透過 gif イメージを生成して調査します。`p_webFontTest` が使用しています。

IE8+ では画像に対してのみ Data　URI スキームが使えます。画像を無効にした場合、このテストも `false` を返します。

~~~js
p_dataUriTest(
    function( dataUriEnabled ){

    }
);
~~~

### 2. `p_imageTest`

`imageURL` が描画されたか？で画像表示に制限が無いか？確認する。

一部のブラウザは `p_listenImageReady` の判定の為にこの関数を呼び出しています。

~~~js
p_imageTest(
    function( imageEnabled ){

    },
    imageURL
);
~~~

### 3. `p_webFontTest`

参考記事 [Webフォントがブラウザで有効か？きっちり調べる](https://outcloud.blogspot.com/2018/02/IsWebfontEffective.html)

Web フォントの読み込み完了のテスト、フォールバックのダウンロードから読み込みのテスト、リガチャのテストを行います。

1. コールバック関数
2. フォントファミリー名
3. オプション : Web フォントを DATA URI スキームで埋め込んだ CSS を用意し、パスをここに書く
4. オプション : メインの CSS に下記スタイルを入れておく。隠し要素のサイズを測って CSS の読み込み完了を検出する `<div class="myIconFont-testCssReady"></div>`
5. オプション : 第4引数と第5引数はリガチャのテスト用。合字になる文字列(第4引数)とキャラクター(第5引数)の文字幅が一致するか？調べる
6. オプション : 合字になるキャラクター
7. オプション : インターバルタイム(デフォルトは5000ミリ秒)

~~~js
p_webFontTest(
    function( webFontTestResult ){ // 1.
        // webFontTestResult === 0 : no webfont
        // webFontTestResult === 1 : webfont ready
        // webFontTestResult === 2 : webfont ready + ligature support
    },
    'myIconFont', // 2.
    { // 3.
        'myIconFont_canTTF'  : '/asset/iconfont/ttf.css',
        'myIconFont_canWOFF' : '/asset/iconfont/woff.css',
        'myIconFont_canEOT'  : '/asset/iconfont/eot.css',
        'myIconFont_canSVG'  : '/asset/iconfont/svg.css'
    },
    'myIconFont-testCssReady', // 4.
    'twitter', 't', // 5. 6.
    5000 // 7. test interval ms
);
~~~

#### メインの CSS

次の CSS をメイン CSS に追加しておくこと。

~~~css
@font-face {
    font-family : 'myIconFont'; /* 1. */
    src:url('/asset/iconfont/myIconFont.eot?rw1juc'});
    src:url('/asset/iconfont/myIconFont.eot?rw1juc#iefix'}) format('embedded-opentype'),
        url('/asset/iconfont/myIconFont.ttf?rw1juc'}) format('truetype'),
        url('/asset/iconfont/myIconFont.woff?rw1juc'}) format('woff'),
        url('/asset/iconfont/myIconFont.svg?rw1juc#myIconFont'}) format('svg');
    font-weight : normal;
    font-style  : normal;
}

/* 3. */
.myIconFont-testCssReady {
    position    : absolute;
    top         : 0;
    left        : 0;
    width       : 1px;
    height      : 1px;
    visibility  : hidden;
}

/* 次の DATA URI スキームはブラウザがサポートする Web フォントフォーマットの検証用 */
@font-face {
    font-family : 'myIconFont_canEOT'; /* 2. */
    src:
        url('data:application/octet-stream;base64,uAQAABQEAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA3XI4rAAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yD1UMCAAAALwAAABgY21hcP/sAVkAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmA8XAvAAAAXgAAABYaGVhZAu/+jcAAAHQAAAANmhoZWEGvAOBAAACCAAAACRobXR4CgAAwAAAAiwAAAAUbG9jYQAoAEAAAAJAAAAADG1heHAABwAFAAACTAAAACBuYW1lmUoJ+wAAAmwAAAGGcG9zdAADAAAAAAP0AAAAIAADAwABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAEAAAABpA3r/ewCFA3oAhQAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACAAaf/9//8AAAAAACAAaf/9//8AAf/j/5sAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAwAAAA0ADAAACAAATCQHAAoD9gAMA/oD+gAABAAAAAQAArDhy3V8PPPUACwQAAAAAANSw2x0AAAAA1LDbHQAAAAADQAMAAAAACAACAAAAAAAAAAEAAAN6/3sAAAQAAAAAAANAAAEAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAgAAAAQAAMAAAAAAAAoAFAAeACwAAQAAAAUAAwABAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=');
    font-weight : normal;
    font-style  : normal;
}

@font-face {
    font-family : 'myIconFont_canWOFF'; /* 2. */
    src:
        url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAARgAAsAAAAABBQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgD1UMCGNtYXAAAAFoAAAAVAAAAFT/7AFZZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAFgAAABYA8/Aw2hlYWQAAAIcAAAANgAAADYOVdg/aGhlYQAAAlQAAAAkAAAAJAa9A4FobXR4AAACeAAAABQAAAAUCgAAwGxvY2EAAAKMAAAADAAAAAwAKABAbWF4cAAAApgAAAAgAAAAIAAHAAVuYW1lAAACuAAAAYYAAAGGmUoJ+3Bvc3QAAARAAAAAIAAAACAAAwAAAAMDAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQAAAAGkDev97AIUDegCFAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIABp//3//wAAAAAAIABp//3//wAB/+P/mwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQDAAAUDQQMGAAIAABMJAcACgf1/Awb+gP5/AAEAAAABAACm9ra/Xw889QALBAAAAAAA1ftKHgAAAADV+0oeAAAAAANBAwYAAAAIAAIAAAAAAAAAAQAAA3r/ewAABAAAAAAAA0EAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAACAAAABAAAwAAAAAAACgAUAB4ALAABAAAABQADAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==') format('woff');
    font-weight : normal;
    font-style  : normal;
}
@font-face {
    font-family : 'myIconFont_canTTF'; /* 2. */
    src:
        url('data:application/x-font-tty;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg9VDAgAAAC8AAAAYGNtYXD/7AFZAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgPFwLwAAAF4AAAAWGhlYWQLv/o3AAAB0AAAADZoaGVhBrwDgQAAAggAAAAkaG10eAoAAMAAAAIsAAAAFGxvY2EAKABAAAACQAAAAAxtYXhwAAcABQAAAkwAAAAgbmFtZZlKCfsAAAJsAAABhnBvc3QAAwAAAAAD9AAAACAAAwMAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAABAAAAAaQN6/3sAhQN6AIUAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAgAGn//f//AAAAAAAgAGn//f//AAH/4/+bAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAMAAAANAAwAAAgAAEwkBwAKA/YADAP6A/oAAAQAAAAEAAKw4ct1fDzz1AAsEAAAAAADUsNsdAAAAANSw2x0AAAAAA0ADAAAAAAgAAgAAAAAAAAABAAADev97AAAEAAAAAAADQAABAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAIAAAAEAADAAAAAAAAKABQAHgAsAAEAAAAFAAMAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA') format('truetype');
    font-weight : normal;
    font-style  : normal;
}
@font-face {
    font-family : 'myIconFont_canSVG'; /* 2. */
    src:
        url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iODkwLjg4IiBkZXNjZW50PSItMTMzLjEyIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4Njk7IiBnbHlwaC1uYW1lPSJ0ZXN0IiBkPSJNMTkyIDc2OGw2NDAtMzg0LTY0MC0zODR6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg==') format('svg');
    font-weight : normal;
    font-style  : normal;
}
~~~
### Data URI スキーム化した Web フォントを埋め込んだ .css

~~~css
~~~