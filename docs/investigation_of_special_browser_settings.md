# Investigation of special browser settings

1. Special browser status flags
2. Special event listeners

## 1. Special browser status flags

1. CSS は有効か？
2. `:before`, `:after` 疑似要素によるコンテンツの生成が出来るか？
3. `-ms-filter` は有効か？
4. ハイコントラストモードの状態
5. print イベントのコールバックの可否
6. 画像が有効か？

|  | valiable                    | type                 | value | available           | note                                                                 |
|:-|:----------------------------|:---------------------|:------|:--------------------|:---------------------------------------------------------------------|
|1 | `g_cssAvailability`         | boolean              |       | `g_listenLoadEvent` |                                                                      |
|2 | `g_generatedContentEnabled` | number or undefined  |       | `g_listenLoadEvent` | undefined : `g_cssAvailability == false`, 0:none, 1:enabled, 2:CSS-P |
|3 | `g_iefilterEnabled`         | boolean or undefined |       | `g_listenLoadEvent` |                                                                      |
|4 | `g_highContrastModeState`   | number               | 0~3   | `g_listenLoadEvent` | none : 0, active : 1, white-on-black : 2, black-on-white : 3         |
|5 | `g_printEventDisabled`      | boolean              |       | allways             |                                                                      |
|6 | `g_imageEnabled`            | boolean or undefined |       | `g_listenLoadEvent` | undefined : `document.images.length == 0`                            |

`g_generatedContentEnabled` の判定用に、メインの CSS に下記スタイルを入れておく。

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

## 2. Special event listeners

1. `g_listenCssAvailabilityChange`
2. `g_listenHighContrustModeChange`
3. `g_listenImageReady`
4. `g_listenPrefersColorChange`
5. `g_listenPrintEvent`

### 1. `g_listenCssAvailabilityChange`

CSS の有効/無効が切り替わるたびにコールバックします。Firefox は表示 > スタイルシートから、機能の死活をいつでも切り替えることが出来ます。

~~~js
g_listenCssAvailabilityChange(
    function( cssAvailability ){

    }
);
~~~

### 2. `g_listenHighContrustModeChange`

Windows 用ブラウザの一部が備える Web サイトのハイコントラストモードの状態変化をコールバックします。

~~~js
g_listenHighContrustModeChange(
    function( highContrastModeState ){

    }
);
~~~

### 3. `g_listenImageReady`

`onload` 時に存在する `&lt;img&gt;` について、ひとつづつ読み込まれたか？否かをコールバックします。

~~~js
g_listenImageReady(
    function( result ){
        var imgElement = result.img,
            imgReady = result.imgReady,
    }
);
~~~

### 4. `g_listenPrefersColorChange`

ダークモードの死活をコールバックします。

~~~js
g_listenPrefersColorChange(
    function( isDrakMode ){

    }
);
~~~

### 5. `g_listenPrintEvent`

`beforeprint` `afterprint` イベントをコールバックします。

~~~js
g_listenPrintEvent(
    function( isBeforePrint ){

    }
);
~~~

## Special methods

1. `g_dataUriTest`
2. `g_imageTest`
3. `g_webFontTest`

### 1. `g_dataUriTest`

`g_webFontTest` が使用しています。

~~~js
g_dataUriTest(
    function( dataUriEnabled ){

    }
);
~~~

### 2. `g_imageTest`

`imageUrl` が描画されたか？で画像表示に制限が無いか？確認する。

~~~js
g_imageTest(
    function( imageEnabled ){

    },
    imageUrl
);
~~~

### 3. `g_webFontTest`

参考記事 [Webフォントがブラウザで有効か？きっちり調べる](https://outcloud.blogspot.com/2018/02/IsWebfontEffective.html)

Web フォントの読み込み完了のテスト、フォールバックのダウンロードから読み込みのテスト、リガチャのテストを行います。

1. フォント名
2. メインの CSS に下記スタイルを入れておく。隠し要素のサイズを測って CSS の読み込み完了を検出する `<div class="myIconFont-testCssReady"></div>`
3. Web フォントを DATA URI スキームで埋め込んだ CSS を用意し、パスをここに書く
4. リガチャはキャラクターと合字の長さが一致するかを調べる

~~~js
g_webFontTest(
    function( webFontTestResult ){
        // webFontTestResult === 0 : no webfont
        // webFontTestResult === 1 : webfont ready
        // webFontTestResult === 2 : webfont ready + ligature support
    },
    'myIconFont', // 1.
    { // 3.
        'myIconFont_canTTF'  : '/asset/iconfont/ttf.css',
        'myIconFont_canWOFF' : '/asset/iconfont/woff.css',
        'myIconFont_canEOT'  : '/asset/iconfont/eot.css',
        'myIconFont_canSVG'  : '/asset/iconfont/svg.css'
    },
    'myIconFont-testCssReady', // 2.
    'twitter', 't', // 4.
    5000 // option : test interval ms
);
~~~

#### メインの CSS

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

/* 2. */
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
    font-family : 'myIconFont_canEOT'; /* 3. */
    src:
        url('data:application/octet-stream;base64,uAQAABQEAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA3XI4rAAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yD1UMCAAAALwAAABgY21hcP/sAVkAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmA8XAvAAAAXgAAABYaGVhZAu/+jcAAAHQAAAANmhoZWEGvAOBAAACCAAAACRobXR4CgAAwAAAAiwAAAAUbG9jYQAoAEAAAAJAAAAADG1heHAABwAFAAACTAAAACBuYW1lmUoJ+wAAAmwAAAGGcG9zdAADAAAAAAP0AAAAIAADAwABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAEAAAABpA3r/ewCFA3oAhQAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACAAaf/9//8AAAAAACAAaf/9//8AAf/j/5sAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAwAAAA0ADAAACAAATCQHAAoD9gAMA/oD+gAABAAAAAQAArDhy3V8PPPUACwQAAAAAANSw2x0AAAAA1LDbHQAAAAADQAMAAAAACAACAAAAAAAAAAEAAAN6/3sAAAQAAAAAAANAAAEAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAgAAAAQAAMAAAAAAAAoAFAAeACwAAQAAAAUAAwABAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=');
    font-weight : normal;
    font-style  : normal;
}

@font-face {
    font-family : 'myIconFont_canWOFF'; /* 3. */
    src:
        url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAARgAAsAAAAABBQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgD1UMCGNtYXAAAAFoAAAAVAAAAFT/7AFZZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAFgAAABYA8/Aw2hlYWQAAAIcAAAANgAAADYOVdg/aGhlYQAAAlQAAAAkAAAAJAa9A4FobXR4AAACeAAAABQAAAAUCgAAwGxvY2EAAAKMAAAADAAAAAwAKABAbWF4cAAAApgAAAAgAAAAIAAHAAVuYW1lAAACuAAAAYYAAAGGmUoJ+3Bvc3QAAARAAAAAIAAAACAAAwAAAAMDAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQAAAAGkDev97AIUDegCFAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIABp//3//wAAAAAAIABp//3//wAB/+P/mwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQDAAAUDQQMGAAIAABMJAcACgf1/Awb+gP5/AAEAAAABAACm9ra/Xw889QALBAAAAAAA1ftKHgAAAADV+0oeAAAAAANBAwYAAAAIAAIAAAAAAAAAAQAAA3r/ewAABAAAAAAAA0EAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAACAAAABAAAwAAAAAAACgAUAB4ALAABAAAABQADAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==') format('woff');
    font-weight : normal;
    font-style  : normal;
}
@font-face {
    font-family : 'myIconFont_canTTF'; /* 3. */
    src:
        url('data:application/x-font-tty;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg9VDAgAAAC8AAAAYGNtYXD/7AFZAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgPFwLwAAAF4AAAAWGhlYWQLv/o3AAAB0AAAADZoaGVhBrwDgQAAAggAAAAkaG10eAoAAMAAAAIsAAAAFGxvY2EAKABAAAACQAAAAAxtYXhwAAcABQAAAkwAAAAgbmFtZZlKCfsAAAJsAAABhnBvc3QAAwAAAAAD9AAAACAAAwMAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAABAAAAAaQN6/3sAhQN6AIUAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAgAGn//f//AAAAAAAgAGn//f//AAH/4/+bAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAMAAAANAAwAAAgAAEwkBwAKA/YADAP6A/oAAAQAAAAEAAKw4ct1fDzz1AAsEAAAAAADUsNsdAAAAANSw2x0AAAAAA0ADAAAAAAgAAgAAAAAAAAABAAADev97AAAEAAAAAAADQAABAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAIAAAAEAADAAAAAAAAKABQAHgAsAAEAAAAFAAMAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA') format('truetype');
    font-weight : normal;
    font-style  : normal;
}
@font-face {
    font-family : 'myIconFont_canSVG'; /* 3. */
    src:
        url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iODkwLjg4IiBkZXNjZW50PSItMTMzLjEyIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4Njk7IiBnbHlwaC1uYW1lPSJ0ZXN0IiBkPSJNMTkyIDc2OGw2NDAtMzg0LTY0MC0zODR6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg==') format('svg');
    font-weight : normal;
    font-style  : normal;
}
~~~