# 控えめな JavaScript による閲覧支援機能

工事中です。

[控えめな Javascript](https://ja.wikipedia.org/wiki/%E6%8E%A7%E3%81%88%E3%82%81%E3%81%AAJavaScript) アプローチで DHTML による支援機能を提供します。
これは、フォールバックとライブラリに大別されます。

1. パッチ
  * ブラウザ別 CSS ローダー
  * 画像の表示確認 :-moz-broken
  * 強制カラースタイル用
  * タブフォーカス
2. ライブラリ
  * blockquote
  * blog2slide
  * Google Code Prettify
  * PicaThumbnail
  * SidebarFixer

## Javascript が無効の場合

Javascript が無効の場合に、コンテンツの閲覧に支障がないブラウザと、支障のあるブラウザを確認しています。
これはブラウザ別 CSS ローダーが使えない為に、条件付きコメントとコメントハックに非対応な全てのブラウザでモダンブラウザ用の CSS が適用された際に、著しく閲覧に支障の出るブラウザがある為です。(スクリーンショットで紹介)

支障のあるブラウザに対しては Javascript の有効化を促すメッセージを表示するように努めます。
表示には CSS ハックを使っている為、適当な CSS ハックが知られていないブラウザではメッセージを出せません。

## パッチ

## ライブラリ