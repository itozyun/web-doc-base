# リンク要素とフォーム部品のインタラクションについて

工事中です。

多くのブラウザは <kbd>Tab</kbd> キーで、文書中の要素とフォーム部品に順にフォーカスを当てる機能を備えています。この中にはデフォルトで無効で、設定画面から有効にするものもあります。

プロジェクトは、フォーカスされた要素に適切にスタイルを設定して、ユーザーの閲覧を助けます。

同様にして、要素へのホバーとアクティブ化にも適切にスタイルを設定します。

リンク(未訪問)、訪問済のリンクに応じた、ホバー・アクティブ化・フォーカスにそれぞれスタイルを設定します。

これらダイナミック疑似クラスの実装は羽陽曲折を経て、現在のソレになりました。web-doc-base はブラウザ毎の実装状況を SCSS 変数のフラグにして、ブラウザ別 CSS を実現します。

[リンクテキストのインタラクションを整理する](//outcloud.blogspot.com/2016/10/link-interaction.html)

## 基本的なダイナミック疑似クラスの実装状況とスタイルの制限

<div class="hscroll">
<table>
<thead>
<tr>
<th rowspan=2>ブラウザ<th colspan=3><code>&lt;a&gt;</code><th colspan=3><code>&lt;form&gt;</code>部品<th rowspan=2>:target
<tr>
<th>:hover<th>:active<th>:focus<th>:hover<th>:active<th>:focus
<tbody>
<tr>
<th>IE ~6(*2)<td>✔<td>✔<td><code>:active</code> で代替<td>×<td>×<td>×<td>×
<tr>
<th>IE 7(*2)<td>✔<td>✔<td>✔<td>✔<td>(*10)<td>×<td>×
<tr>
<th>IE 8<td>✔<td>✔<td>✔<td>✔<td>✔<td>✔<td>×
<tr>
<th>IE 9+<td colspan=7>✔
<tr>
<th>Opera 7~7.20(*1)<td>×<td>✔<td>✔(*11)<td>✔<td>✔<td>✔<td>×
<tr>
<th>Opera 7.23~7.5(*1)<td>✔<td>✔<td>✔(*11)<td>✔<td>✔<td>✔<td>×
<tr>
<th>Opera 8~9.27<td>✔<td>✔<td>✔(*11)<td>✔<td>✔<td>✔<td>×
<tr>
<th>Opera 9.5<td>✔<td><code>:focus</code> で代替<td>✔<td>✔<td>:focus</code> で代替(*4)<td>✔<td>✔
<tr>
<th>Opera 9.6+<td colspan=7>✔
<tr>
<th>Gecko ~0.9.9(*2, *6)<td>✔<td><code>:focus</code> で代替<td>✔<td>✔(*3,*5)<td><code>:focus</code> で代替(*4)<td>✔<td>×
<tr>
<th>Gecko 1.0~1.2(*2)<td>✔<td><code>:focus</code> で代替<td>✔<td>✔<td><code>:focus</code> で代替(*4)<td>✔(*9)<td>×
<tr>
<th>Gecko 1.3(*2)<td>✔<td><code>:focus</code> で代替<td>✔<td>✔<td><code>:focus</code> で代替(*4)<td>✔(*7, *8)<td>✔
<tr>
<th>Gecko 1.4~1.7(*2)<td>✔<td><code>:focus</code> で代替<td>✔<td>✔<td><code>:focus</code> で代替(*4)<td>✔(*7)<td>✔
<tr>
<th>Gecko 1.8+<td colspan=7>✔
</table>
</div>

1. Opera 7.x : 動的疑似クラスで `outline-color` の変更が出来ない.
2. outline が無い
3. 枠線への :hover のみ
4. ラベルのクリックでテキスト色が紫色になる
5. type=text だけ枠線は固定
6. Gecko 0.8.1 迄はタブフォーカス移動が同一の階層内に限る制限がある
7. ファイルアップロードボタン、チェック系に色が付かない、点線のみ
8. 画像送信ボタンの画像にもフォーカス色が付く
9. ファイルアップロードボタンが変化しない
10. ボタン系のみ :hover 色が適用される
11. フォーカスのテキスト色・背景色は固定