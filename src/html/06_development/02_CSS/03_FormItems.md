# フォーム部品のスタイリング

工事中です。

## デフォルトのボックスモデルとボックスモデルの制限

* デフォルトの box-sizing : C or B
  * B は `border-box`, C は `content-box` です。
* `box-sizing` の変更は可能か?
* padding

<div class="hscroll">
<table>
<thead>
<tr>
<th rowspan=2>ブラウザ<th colspan=3>テキスト入力<th colspan=3><code>&lt;textarea&gt;</code><th colspan=3>ボタン<th colspan=3>チェック<th colspan=3>リスト
<tr>
<th>デフォルト<th>box-sizing変更<th>padding <th>デフォルト<th>box-sizing変更<th>padding <th>デフォルト<th>box-sizing変更<th>padding <th>デフォルト<th>box-sizing変更<th>padding <th>デフォルト<th>box-sizing変更<th>padding
<tbody>

<tr>
<th>IE 5.5<td>B<td>×<td>✔ <td>B<td>×<td>✔ <td>B<td>×<td>✔ <td>B<td>×<td>✔ <td>-<td>-<td>×
<tr>
<th>IE 6~7<td>C<td>×<td>✔ <td>C<td>×<td>✔ <td>C<td>×<td>✔ <td>C(*1)<td>×<td>✔ <td>-<td>-<td>×

<tr>
<th>Opera 7~7.54u2<td>C<td>×<td>× <td>B<td>×<td>× <td>C(*1)<td>×<td>✔ <td>C<td>×<td>× <td>-<td>-<td>×
<tr>
<th>Opera 8~8.54<td>B<td>×<td>(*2) <td>C<td>×<td>✔(*3) <td>C<td>×<td>✔ <td>C<td>×<td>(*2) <td>-<td>-<td>×
<tr>
<th>Opera 9~9.27<td>C<td>×<td>✔ <td>C<td>×<td>✔ <td>C<td>×<td>✔(*4) <td>C<td>×<td>(*2) <td>-<td>-<td>×
<tr>
<th>Opera 9.50~<td>C<td>✔<td>✔ <td>B<td>×<td>✔ <td>B<td>✔<td>✔ <td>C<td>×<td>✔ <td>-<td>-<td>✔(*4)

<tr>
<th>Gecko 0.6<td>B<td>✔<td>✔ <td>B<td>×<td>✔ <td>B<td>✔<td>✔ <td>B<td>✔<td>✔ <td>B(*5)<td>-<td>✔
<tr>
<th>Gecko 1.0<td>B<td>✔<td>✔ <td>C<td>×<td>✔ <td>B<td>✔<td>✔(*7) <td>B<td>✔<td>✔ <td>B(*5)<td>-<td>✔
<tr>
<th>Gecko 1.3<td>C<td>✔<td>✔ <td>C<td>×<td>✔ <td>B(*6)<td>✔<td>✔(*7) <td>B<td>✔<td>✔ <td>B(*5)<td>-<td>✔
<tr>
<th>Gecko 1.6<td>C<td>✔<td>✔ <td>C<td>×<td>✔ <td>B(*6)<td>✔<td>✔(*7) <td>B<td>✔<td>× <td>B(*5)<td>-<td>✔
<tr>
<th>Gecko 1.8<td>C<td>✔<td>✔ <td>C<td>×<td>✔ <td>B(*6)<td>✔<td>✔(*7) <td>B<td>✔<td>✔(*8) <td>B(*5)<td>-<td>✔
<tr>
<th>Gecko 1.9<td>C<td>✔<td>✔ <td>C<td>×<td>✔ <td>B(*6)<td>✔<td>✔(*7) <td>B<td>×<td>× <td>C<td>-<td>✔
</table>
</div>

1. 但しファイルのアップロードボタンは border-box
2. 横方向だけ padding が増える
3. アップロードボタンは横方向だけ padding が増える
4. リストボックスは横方向だけ padding が増える
5. 但し、リストボックスは content-box
6. 但し、画像送信ボタンは content-box
7. アップロードボタンは padding が変化しない
8. border 無し

