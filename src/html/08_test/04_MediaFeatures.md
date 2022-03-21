<script type="application/json" for="page-meta-data">
  {
      "description" : "メディア特性のテストページ",
      "mainJavascriptFilename" : "debug.js"
  }
</script>

<p id="logger"></p>

# メディア特性のテストページ

## `min-width:0px`

<style>
#min-width-0px { color: #999 }
@media only screen and (min-width:0px){
     /** Opera 9.27- でも適用されるため、hsl でカラー指定する */
    #min-width-0px {
        background : #400;
        color      : #f66;
    }
}
</style>
<p id="min-width-0px"><code>@media only screen and (min-width:0px)</code> が有効の場合、このボックスの色が変化します。</p>

~~~html

<style>
#min-width-0px { color: #999 }
@media only screen and (min-width:0px){
     /** Opera 9.27- でも適用されるため、hsl でカラー指定する */
    #min-width-0px {
        background : #400;
        color      : #f66;
    }
}
</style>
<p id="min-width-0px"><code>@media only screen and (min-width:0px)</code> が有効の場合、このボックスの色が変化します。</p>
~~~

## `width:640px`

<style>
#width-640px { color: #999 }
@media (width:640px){
    #width-640px {
        background : #400;
        color      : #f66;
    }
}
</style>
<p id="width-640px"><code>@media (width:640px)</code> が有効の場合、このボックスの色が変化します。</p>

~~~html
<style>
#width-640px { color: #999 }
@media (width:640px){
    #width-640px {
        background : #400;
        color      : #f66;
    }
}
</style>
<p id="width-640px"><code>@media (width:640px)</code> が有効の場合、このボックスの色が変化します。</p>
~~~
<script>window.onresize=function(){document.getElementById('current-window-width').innerHTML = 'width = ' + document.body.offsetWidth}</script>

<p id="current-window-width"></p>

## `prefers-color-scheme:light|dark`

### `prefers-color-scheme:dark`

<style>
#prefers-color-scheme-dark { color: #999 }
@media only screen and (prefers-color-scheme:dark){
     /** Opera 9.27- でも適用されるため、hsl でカラー指定する */
    #prefers-color-scheme-dark {
        background : hsl(69, 88%, 22%);
        color      : hsl(61, 100%, 87%);
    }
}
</style>
<p id="prefers-color-scheme-dark"><code>@media only screen and (prefers-color-scheme:dark)</code> が有効の場合、このボックスの色が変化します。</p>

~~~html

<style>
#prefers-color-scheme-dark { color: #999 }
@media only screen and (prefers-color-scheme:dark){
     /** Opera 9.27- でも適用されるため、hsl でカラー指定する */
    #prefers-color-scheme-dark {
        background : hsl(69, 88%, 22%);
        color      : hsl(61, 100%, 87%);
    }
}
</style>
<p id="prefers-color-scheme-dark"><code>@media only screen and (prefers-color-scheme:dark)</code> が有効の場合、このボックスの色が変化します。</p>
~~~

### `prefers-color-scheme:light`

<style>
#prefers-color-scheme-light { color: #999 }
@media only screen and (prefers-color-scheme:light){
     /** Opera 9.27- でも適用されるため、hsl でカラー指定する */
    #prefers-color-scheme-light {
        background : hsl(69, 88%, 22%);
        color      : hsl(61, 100%, 87%);
    }
}
</style>
<p id="prefers-color-scheme-light"><code>@media only screen and (prefers-color-scheme:light)</code> が有効の場合、このボックスの色が変化します。</p>

~~~html
<style>
#prefers-color-scheme-light { color: #999 }
@media only screen and (prefers-color-scheme:light){
     /** Opera 9.27- でも適用されるため、hsl でカラー指定する */
    #prefers-color-scheme-light {
        background : hsl(69, 88%, 22%);
        color      : hsl(61, 100%, 87%);
    }
}
</style>
<p id="prefers-color-scheme-light"><code>@media only screen and (prefers-color-scheme:light)</code> が有効の場合、このボックスの色が変化します。</p>
~~~

## 強制カラー(ハイコントラスト)モード

### `@media (forced-colors:active)` のテスト

<style>
#forced-colors { color: #999 }
@media only screen and (forced-colors:active){
    #forced-colors {
        text-decoration : underline;
    }
}
</style>
<p id="forced-colors"><code>@media only screen and (forced-colors:active)</code> が有効の場合、このボックスに下線が付きます。</p>

~~~html
<style>
#forced-colors { color: #999 }
@media only screen and (forced-colors:active){
    #forced-colors {
        text-decoration : underline;
    }
}
</style>
<p id="forced-colors"><code>@media only screen and (forced-colors:active)</code> が有効の場合、このボックスに下線が付きます。</p>
~~~

### `@media (-ms-high-contrast:active)` のテスト

<style>
#ms-highcontrast { color: #999 }
@media only screen and (-ms-high-contrast:active){
    #ms-highcontrast {
        text-decoration : underline;
    }
}
</style>
<p id="ms-highcontrast"><code>@media only screen and (-ms-high-contrast:active)</code> が有効の場合、このボックスに下線が付きます。</p>

~~~html
<style>
#ms-highcontrast { color: #999 }
@media only screen and (-ms-high-contrast:active){
    #ms-highcontrast {
        text-decoration : underline;
    }
}
</style>
<p id="ms-highcontrast"><code>@media only screen and (-ms-high-contrast:active)</code> が有効の場合、このボックスに下線が付きます。</p>
~~~

### `@media (-ms-high-contrast:active) and (prefers-color-scheme:light)`, `@media (-ms-high-contrast:active) and (prefers-color-scheme:dark)` のテスト

Chromium 版 Edge の強制カラーモード限定でスタイルを適用されます。


パッチの項も参照。ツール項も参照。