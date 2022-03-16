# クロスブラウザに関する情報

工事中です。

## ブラウザエンジンバージョン毎のサポートレベル

<table>
<thead>
<tr>
<th>グレード<td>該当するブラウザ<td>
<tbody>
<tr>
<th class="c">A<td>IE10+, Gecko 1.9.1+, Opera 9.5+, Safari, Chrome<td><p>Javascript が無効でも CSS のみで快適な閲覧が出来ます。
<p>新しい HTML, CSS の機能をサポートするブラウザは段階的に表現と閲覧性が向上します。これによって、新しい機能をサポートしない A グレードのブラウザに不具合が起きないことを検証済です。
<tr>
<th class="c">B<td>IE8, 9<td>Javascript が無効でも各 Trident バージョン専用の CSS を読み込んで、A グレードの下位と同程度の表現を提供します。
<tr>
<th class="c">C<td>IE5, 5.5, 6, 7<td><p>Javascript が無効でも各 Trident バージョン専用の CSS を読み込んで、其々のバージョンで可能な最大の範囲での表現を提供します。
<p>Javascript が有効の場合、CSS Generated Content 等用のフォールバックを実施して A グレードの下位と同程度の表現を提供します。
<tr>
<th class="c">D<td>Gecko 1.9.1 未満, Opera 9.5 未満<td><p>Javascript が有効な場合に其々のバージョンで可能な最大の範囲での表現を提供します。
<p>Javascript が有効の場合、様々なフォールバックを実施して A グレードの下位と同程度の表現を提供します。
<tr>
<th class="c">Z<td>Lynx 等<td>アクセシビリティの為に、HTML タグを Lynx 用に変更しているケースがあります。
<tr>
<th class="c">対応予定<td>Mac IE5, IE4, NetFront, PS3<td>
</table>

ブラウザ別に CSS を書きだしています。Web 仕様は後方互換性を確保しつつ拡張されています。これによって吸収できない差異の一部は CSS ハックで吸収できます。
そして CSS ハックでも吸収できない大きなジャンプにあたった為、ジャンプを境に、Javascript が無効の場合の閲覧性の維持を諦めているブラウザとバージョンが存在します。
