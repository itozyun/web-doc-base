# スタイリングの制限

CSS によるスタイル変更の制限について調べた内容を書いていきます．

このページの内容のテストに <a href="../test/form.html">フォーム部品の実装状況</a><a href="../test/dynamic-pseudo-classes.html">動的疑似クラス</a> を使いました．

## 各疑似クラスのスタイリングの制限

### `:hover`

1. `$HOVER_PSEUDO_CLASS_ONLY_LINK`
   * IE6 以下は `:hover` は `a[href]` にしか働かない為、`a:hover` を `:hover` に省略できる．
2. `$CANUSE_HOVER_PSEUDO_CLASS`
   * IE8 以上, Opera, Gecko．

### `:active`

IE11 以下では、`a:active` を `:active` にすると全ての非インタラクティブな要素(`<div>` 等)へのクリックで `:active` になる為、省略できない．

1. `$ACTIVE_ON_LINK_BEHAVES_FOCUS`, `$ACTIVE_PSEUDO_CLASS_ONLY_LINK`
   * IE7 以下はリンク要素への `:active` を実装するがそのふるまいは `a:focus`
2. `$FOCUS_APPLIED_TO_ACTIVE`
   * Gecko ~1.7, `:focus` のスタイルが `:active` にも適用される.
3. `$CANUSE_ACTIVE_PSEUDO_CLASS`
   * IE8 以上, Gecko 1.8 以上

### `:focus` 

1. `$FOCUSED_COLOR_FIXED_AT_SYSTEM_COLOR`
   * Opera 8~9, `:focus` のテキスト色はシステムカラー(`HighlightText`)で固定されている．必要に応じて背景色に `background-color:Highlight` を指定してコントラストを確保できるようにする．
2. `$CANT_CHANGE_TEXT_COLOR_WHEN_FOCUS`
   * Gecko ~1.2.1, `:focus` セレクタでテキスト色の上書きが出来ない．
3. `$FOCUS_PSEUDO_CLASS_ONLY_LINK`
   * IE7, Opera 7.2～7.5, `:focus` はリンク要素にしか働かない．
4. `$CANUSE_FOCUS_PSEUDO_CLASS`
   * IE8 以上, Opera 7～7.1, Opera 8 以上, Gecko 

#### タブフォーカスについて

タブキーでフォーカスの移動が出来るか？`:active` のスタイルが適用されるケースも含む．

1. フォーム部品へのタブフォーカス
   * IE, Opera 7～7.1x, Opera 8 以上, Gecko
2. リンク要素へのタブフォーカス
   * IE, Opera 7 以上, Gecko

Opera ～7.5, Gecko 0.6～0.9.4 はタブフォーカスの移動が奇妙．近い階層でないとフォーカスが移動しないようだ．

## フォーム部品へのスタイリングの制限

### `$LIMITED_STYLING_OF_ITEMS_IN_FORM`

Opera 9.27 以下, IE7 以下では様々な程度で、フォーム部品のスタイリングに制限がある．

その為、デフォルトのスタイルを尊重する。しかし、`:focus` や `:active` では枠線色を変更する．

また Opera 7.2~7.5 には `form :focus` にスタイルを設定すると `<input>`, `<textarea>` に触れなくなるバグがある為、フォーカス時のスタイルを諦める．

## この他の制限

1. `$CANUSE_TRANSPARENT_BORDER_COLOR`
   * 主に枠線を使って書く三角形で使用する．IE6以下をの除く
2. `$CANUSE_OUTLINE`
   * IE8 以上, Gecko 1.8 以上, Opera 8 以上
3. `$CANUSE_LIMITED_OUTLINE`
   * Opera 7.x, 動的疑似クラスで `outline` の(色の)変更が出来ない

## リンク

* LVHA 順について
   * [MDN > 擬似クラス](https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-classes)
* ウェブアクセシビリティに関する文書の日本語訳で IE6 時代のもの。ブラウザ毎の差異を紹介しつつ、各インタラクションに適切にスタイリングをするように案内している。
   * [CSSの達成方法のためのユーザーエージェントサポートノート](https://waic.jp/docs/WCAG-TECHS/ua-notes/css.html)
