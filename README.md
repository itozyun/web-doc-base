# Web Doc Base

## Overview - 概要

Super project for itozyun's Web document projects.

1. 2 Column layout (WQXGA, WSXGA, XGA)
2. Written based on the SMACSS
3. Build for each browsers (modern, ie9, ie8, ie7, ie6, ie55)
4. Responsive Web Design for the 7 types of device (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Watch)
5. Print to save ink (@media print)
6. Legacy Browser Support

itozyun の Web ドキュメント・プロジェクトの親プロジェクトです。

1. 2カラムレイアウト (WQXGA, WSXGA, XGA)
2. SMACSS をベースに書かれています
3. ブラウザ別に CSS をビルド (modern, ie9, ie8, ie7, ie6, ie55)
4. レスポンシブデザインは7種類のデバイスのために用意 (WQXGA, WSXGA, XGA, Tablet, Phablet, Phone, Watch)
5. インクを節約して印刷 (@media print)
6. 古いブラウザのサポート

## References - 参照プロジェクト

This project has been referred to the next project.

1. [blogger-base](https://github.com/itozyun/blogger-base) "common project for Blogger templete"
2. [gariban](https://github.com/itozyun/gariban) "Ultralight free Blogger templete"
3. [OutCloud](http://outcloud.blogspot.com/) "itozyun's blog"

プロジェクトは次のプロジェクトに参照されています。

1. [blogger-base](https://github.com/itozyun/blogger-base) "Blogger テンプレート用共通プロジェクト"
2. [gariban](https://github.com/itozyun/gariban) "超軽量な無料 Blogger テンプレート"
3. [OutCloud](http://outcloud.blogspot.com/) "itozyun のブログです"

## How the CSS build - CSS のビルドの方法

1. CSS is written in SCSS + iz-preprosessor Expanded Comments
2. Install [iz-preprosessor](https://marketplace.visualstudio.com/items?itemName=itozyun.iz-preprocessor) to Visual Studio Code
3. Generate the browser-specific .scss by iz-preprosessor
4. Compile the generated .scss


1. CSS は SCSS + iz-preprosessor 拡張コメントで書かれています
2. VS Code 拡張の [iz-preprosessor](https://marketplace.visualstudio.com/items?itemName=itozyun.iz-preprocessor) をインストールします
3. iz-preprosessor でブラウザ別の .scss を生成します
4. 出来た .scss をコンパイルします