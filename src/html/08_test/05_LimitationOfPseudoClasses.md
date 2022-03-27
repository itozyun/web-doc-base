# スタイリングの制限

## 疑似クラスによるスタイルの制限

[MDN > 擬似クラス](https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-classes)

LVHA 順

[CSSの達成方法のためのユーザーエージェントサポートノート](https://waic.jp/docs/WCAG-TECHS/ua-notes/css.html)

### :hover

`a[href]` のみ, IE6-, Gecko 1- `$LIMITED_HOVER_PSEUDO_CLASS`

:hover に反応する要素が `a[href]` しかない為、`a:hover` を `:hover` に省略できる

### :active

Gecko ~1.8.1.12 :focus に指定したスタイルがクリック(:active)にも適用される.

### :focus 

フォーム部品へのタブフォーカス IE5 で可能, Opera 7 で可能, Gecko
リンク要素へのタブフォーカス IE(*1), Gecko 0.9.6+(*2), Opera 8+(*3)

0.6~0.9.4 タブフォーカスの移動が微妙

1. :active が focus 相当の動作 ie7- `$ACTIVE_ON_LINK_BEHAVES_FOCUS` フォーカスした要素へのホバー
2. $TEXT_COLOR_CANT_CHANGE_FOCUSING : $UA_Gck-097 or $UA_Gck101-121; // :focus 要素のテキストカラーの変更が出来ない
3. $FOCUSED_COLOR_IS_SYSTEM_COLOR   : $UA_Opera8 or $UA_Opera9; // Opera 8~9, The :focus color cannot be changed from the system color.

## フォーム部品へのスタイルの制限

### $LIMITED_FORM_ITEM_STYLING  : $IS_OLD_OPERA or $IS_LTE_WIN_IE7;

これらの環境では様々な程度で、フォーム部品の CSS スタイリングに制限がある

その為、デフォルトのスタイリングを尊重する。しかし、フォーカスや :active に対しては、

また Opera 7.2~7.5 には `form :focus` にスタイルを設定すると input, textarea に触れなくなる、というバグがある為、フォーカス時のスタイルを諦める。

