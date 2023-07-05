<script type="application/json" for="page-meta-data">
  {
      "description" : "ベクターアイコンの解説とテスト状況の確認"
  }
</script>

# ベクターアイコン

<style>
i {
    background     : #3Af;

    font-style     : normal;
    font-weight    : normal;
    font-variant   : normal;
    text-transform : none;
      /* Enable Ligatures ================ */
      -webkit-font-feature-settings : "liga";
         -moz-font-feature-settings : "liga=1";
         -moz-font-feature-settings : "liga";
          -ms-font-feature-settings : "liga" 1;
           -o-font-feature-settings : "liga";
              font-feature-settings : "liga";
      /*
      -webkit-font-variant-ligatures : discretionary-ligatures;
              font-variant-ligatures : discretionary-ligatures; */

      /* Better Font Rendering =========== */
       -webkit-font-smoothing       : antialiased;
      -moz-osx-font-smoothing       : grayscale;
}

@font-face {
    font-family : 'woff2';
    font-weight : normal;
    font-style  : normal;
    src         : url('../assets/iconfont/web-doc-base.woff2') format('woff2');
}
.woff2 { font-family : 'woff2', serif }

@font-face {
    font-family : 'woff';
    font-weight : normal;
    font-style  : normal;
    src         : url('../assets/iconfont/web-doc-base.woff') format('woff');
}
.woff { font-family : 'woff', serif }

@font-face {
    font-family : 'ttf';
    font-weight : normal;
    font-style  : normal;
    src         : url('../assets/iconfont/web-doc-base.ttf') format('truetype');
}
.ttf { font-family : 'ttf', serif }

@font-face {
    font-family : 'otf';
    font-weight : normal;
    font-style  : normal;
    src         : url('../assets/iconfont/web-doc-base.otf') format('opentype');
}
.otf { font-family : 'otf', serif }

@font-face {
    font-family : 'eot';
    font-weight : normal;
    font-style  : normal;
    src         : url('../assets/iconfont/web-doc-base.eot');
}
.eot { font-family : 'eot', serif }

@font-face {
    font-family : 'svg';
    font-weight : normal;
    font-style  : normal;
    src         : url('../assets/iconfont/web-doc-base.svg#web-doc-base') format('svg');
}
.svg { font-family : 'svg', serif }

.canuse-eot { font-family : 'myIconFont_canEOT', serif }
.canuse-woff2 { font-family : 'myIconFont_canWOFF2', serif }
.canuse-woff { font-family : 'myIconFont_canWOFF', serif }
.canuse-ttf { font-family : 'myIconFont_canTTF', serif }
.canuse-otf { font-family : 'myIconFont_canOTF', serif }
.canuse-svg { font-family : 'myIconFont_canSVG', serif }
</style>

# ベクターアイコン

<i class="ico">IE</i>, <i class="ico">Safari</i>, <i class="ico">Samsung</i>, <i class="ico">Netscape</i>

Web フォントと SVG で提供する
これ以前は Pure CSS Icon で提供されていました。もっさり感が耐えられなくなりました。

<ul class="icoLinks">
<li><a href="https://youtube.com">YouTube</a>
<li><a href="https://youtu.be">YouTube</a>
<li><a href="https://twitter.com">Twitter</a>
<li><a href="https://m.twitter.com">Twitter</a>
<li><a href="https://t.co">Twitter</a>
<li><a href="https://github.com">github</a>
<li><a href="https://itozyun.github.io/">github / itozyun</a>
</ul>

## 簡易テスト

<a href="../test/datauri-webfont.html">Data URI フォントのテスト</a> も併せて確認のこと。

<table>
<thead>
<tr>
<th colspan="2"><th>WOFF2<th>WOFF<th>TTF<th>OTF<th>EOT<th>SVG
<tbody>
<tr>
<th rowspan="3">&lt;link&gt;<th>🕊<td colspan="6"><i class="ico">🕊</i>
<tr>
<th>Github<td colspan="6"><i class="ico"></i>
<tr>
<th>test<td colspan="6"><i class="ico">-mli</i>
<tr>
<th colspan="2">&lt;style&gt; + Data URI<td><i class="canuse-woff2">-mli</i><td><i class="canuse-woff">-mli</i><td><i class="canuse-ttf">-mli</i><td><i class="canuse-otf">-mli</i><td><i class="canuse-eot">-mli</i><td><i class="canuse-svg">-mli</i>
<tr>
<th rowspan="3">&lt;style&gt;<th>🕊<td><i class="woff2">🕊</i><td><i class="woff">🕊</i><td><i class="ttf">🕊</i><td><i class="otf">🕊</i><td><i class="eot">🕊</i><td><i class="svg">🕊</i>
<tr>
<th>Github<td><i class="woff2"></i><td><i class="woff"></i><td><i class="ttf"></i><td><i class="otf"></i><td><i class="eot"></i><td><i class="svg"></i>
<tr>
<th>test<td><i class="woff2">-mli</i><td><i class="woff">-mli</i><td><i class="ttf">-mli</i><td><i class="otf">-mli</i><td><i class="eot">-mli</i><td><i class="svg">-mli</i>
</table>

1. application/x-font-woff; application/font-woff;

## ベクターアイコン + Data URI

[SVGをdataURLでCSSに埋め込み](https://ao-system.net/note/57) この方法では、対応ブラウザがかなり狭くなる。base64 の方が対応ブラウザは広い。

<style>/* Opera 11 でブラクラになるのでコメントアウト
.datauri-vector-icon:before {
  content : url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%2C0%2C255%2C255%22%20height%3D%2218px%22%20width%3D%2218px%22%3E%3Cpath%20d%3D%22M127.5%2034.9a92.6%2092.6%200%201%200%200%20185.2%2092.6%2092.6%200%200%200%200-185.2zm0%2013.2a79.4%2079.4%200%200%201%2070.2%20116.5c-9.4-2.5-19.9-4.5-30.9-6V95c0-5.7.5-9.2%201.8-10.7%202-2.5%205.5-4%2010.2-4h4v-2.8h-39.6v2.8h4c4.5%200%207.7%201.2%209.7%203.2%201.7%201.5%202.5%205.3%202.5%2011.5v51.5L95%2077.4H65.5a80.1%2080.1%200%200%201%2062-29.3zM64.2%2079v1a28.6%2028.6%200%200%201%2015%203.8l4.7%204v70.7a210%20210%200%200%200-27.1%205.3%2079.2%2079.2%200%200%201%207.4-84.7zm27.2%2016.5%202.7%203%2054.6%2058.3a332.7%20332.7%200%200%200-57.3%201V95.6zm43.8%2066.3c22.2%200%2042.9%202.2%2060.8%206A79.4%2079.4%200%200%201%2061%20171c7-1.8%2014.7-3.5%2022.7-5a9.6%209.6%200%200%201-1.5%204.7c-2%202.5-5.5%203.8-10.5%203.8h-4v2.7h39.9v-2.7h-4.3c-4.2%200-7.4-1-9.7-3-1-1.3-1.7-3.3-2-6.7%2013.5-1.8%2028.2-3%2043.6-3z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E');
  width  : 1em;
  height : 1em;
  vertical-align : baseline;
}
.datauri-vector-icon-nosize:before {
  content : url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%2C0%2C255%2C255%22%3E%3Cpath%20d%3D%22M127.5%2034.9a92.6%2092.6%200%201%200%200%20185.2%2092.6%2092.6%200%200%200%200-185.2zm0%2013.2a79.4%2079.4%200%200%201%2070.2%20116.5c-9.4-2.5-19.9-4.5-30.9-6V95c0-5.7.5-9.2%201.8-10.7%202-2.5%205.5-4%2010.2-4h4v-2.8h-39.6v2.8h4c4.5%200%207.7%201.2%209.7%203.2%201.7%201.5%202.5%205.3%202.5%2011.5v51.5L95%2077.4H65.5a80.1%2080.1%200%200%201%2062-29.3zM64.2%2079v1a28.6%2028.6%200%200%201%2015%203.8l4.7%204v70.7a210%20210%200%200%200-27.1%205.3%2079.2%2079.2%200%200%201%207.4-84.7zm27.2%2016.5%202.7%203%2054.6%2058.3a332.7%20332.7%200%200%200-57.3%201V95.6zm43.8%2066.3c22.2%200%2042.9%202.2%2060.8%206A79.4%2079.4%200%200%201%2061%20171c7-1.8%2014.7-3.5%2022.7-5a9.6%209.6%200%200%201-1.5%204.7c-2%202.5-5.5%203.8-10.5%203.8h-4v2.7h39.9v-2.7h-4.3c-4.2%200-7.4-1-9.7-3-1-1.3-1.7-3.3-2-6.7%2013.5-1.8%2028.2-3%2043.6-3z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E');
  width  : 1em;
  height : 1em;
  display : inline-block;
  vertical-align : baseline;
} */
.datauri-vector-icon-base64:before {
  content : url('data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPy0tPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Il94MzJfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJ3aWR0aDogMjU2cHg7IGhlaWdodDogMjU2cHg7IG9wYWNpdHk6IDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNEI0QjRCO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzc4LjQwOSwwSDIwOC4yOTRoLTEzLjE3NmwtOS4zMTQsOS4zMTVMNTcuMDE3LDEzOC4xMDFsLTkuMzE0LDkuMzE1djEzLjE3NnYyNjUuNTEzCgkJYzAsNDcuMzYsMzguNTI4LDg1Ljg5Niw4NS44OTUsODUuODk2aDI0NC44MTFjNDcuMzYxLDAsODUuODg4LTM4LjUzNSw4NS44ODgtODUuODk2Vjg1Ljg5NkM0NjQuMjk3LDM4LjUyOCw0MjUuNzcsMCwzNzguNDA5LDB6CgkJIE00MzIuNDkzLDQyNi4xMDRjMCwyOS44NzctMjQuMjE0LDU0LjA5MS01NC4wODQsNTQuMDkxSDEzMy41OThjLTI5Ljg3NywwLTU0LjA5MS0yNC4yMTQtNTQuMDkxLTU0LjA5MVYxNjAuNTkyaDgzLjcxNwoJCWMyNC44ODQsMCw0NS4wNy0yMC4xNzksNDUuMDctNDUuMDcxVjMxLjgwNGgxNzAuMTE0YzI5Ljg3LDAsNTQuMDg0LDI0LjIxNCw1NC4wODQsNTQuMDkxVjQyNi4xMDR6IiBzdHlsZT0iZmlsbDogcmdiKDc1LCA3NSwgNzUpOyI+PC9wYXRoPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4MC4yOTYsMjk2LjY2OGwtNC44NDYtMC42N2MtMTAuNjMtMS40ODctMTQuMjY1LTQuOTc4LTE0LjI2NS0xMC4xMDRjMC01Ljc4LDQuMzA5LTkuODE3LDEyLjM4My05LjgxNwoJCWM1LjY1MywwLDExLjMwNSwxLjYyLDE1Ljc0NSwzLjc2NGMxLjg4NiwwLjk0MiwzLjkwMywxLjQ4Nyw1Ljc4OSwxLjQ4N2M0Ljg0NSwwLDguNjEyLTMuNjMsOC42MTItOC42MTYKCQljMC0zLjIyNi0xLjQ4MS01LjkyMS00LjcxLTcuOTM5Yy01LjM4NC0zLjM3Mi0xNS40NzYtNi4wNi0yNS41NzItNi4wNmMtMTkuNzgxLDAtMzIuNDM2LDExLjE3MS0zMi40MzYsMjcuOTk4CgkJYzAsMTYuMTUsMTAuMjMyLDI0Ljg5OCwyOC45MzgsMjcuNDU0bDQuODQ2LDAuNjdjMTAuOTAzLDEuNDgsMTQuMTI5LDQuODQ2LDE0LjEyOSwxMC4yMjljMCw2LjMyNi01LjI0NywxMC43NjYtMTQuOTM5LDEwLjc2NgoJCWMtNi43MjcsMC0xMi4xMTEtMS43NDUtMTkuNjQ1LTUuOTIxYy0xLjYxNi0wLjk0Mi0zLjYzNC0xLjYyLTUuNzg4LTEuNjJjLTUuMTE1LDAtOC44ODUsMy45MS04Ljg4NSw4Ljc1NgoJCWMwLDMuMjI2LDEuNjE2LDYuMzI2LDQuNzEzLDguMzQ0YzYuMDU0LDMuNzY0LDE1Ljg3OCw3LjgsMjguNzk4LDcuOGMyMy44MjMsMCwzNS45MzQtMTIuMjQsMzUuOTM0LTI4Ljc5NQoJCUMyMDkuMDk3LDMwNy44NCwxOTkuMjczLDI5OS4zNTYsMTgwLjI5NiwyOTYuNjY4eiIgc3R5bGU9ImZpbGw6IHJnYig3NSwgNzUsIDc1KTsiPjwvcGF0aD4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODEuMTA4LDI1OS4zODJjLTQuNTc3LDAtNy45MzksMi40My05LjU1Niw3LjY3NGwtMTYuNjksNTQuNTFoLTAuNDAybC0xNy42MzQtNTQuNTEKCQljLTEuNzQ1LTUuMjQ0LTQuOTc4LTcuNjc0LTkuNTUxLTcuNjc0Yy01LjY1MywwLTkuNjkyLDQuMTc2LTkuNjkyLDkuMjg3YzAsMS4zNDcsMC4yNjksMi44MzQsMC42Nyw0LjE3NWwyMy4yODYsNjguMTA0CgkJYzIuOTYsOC40NzcsNi43MjcsMTEuNTcsMTIuNjUyLDExLjU3YzUuNzg1LDAsOS41NTUtMy4wOTMsMTIuNTE2LTExLjU3bDIzLjI4Mi02OC4xMDRjMC40MDYtMS4zNDEsMC42NzQtMi44MjgsMC42NzQtNC4xNzUKCQlDMjkwLjY2NCwyNjMuNTU4LDI4Ni43NiwyNTkuMzgyLDI4MS4xMDgsMjU5LjM4MnoiIHN0eWxlPSJmaWxsOiByZ2IoNzUsIDc1LCA3NSk7Ij48L3BhdGg+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzY0LjU1NiwzMDAuODM2aC0xOC44NDFjLTUuMTE0LDAtOC4zNDQsMy4xLTguMzQ0LDcuODA2YzAsNC43MTMsMy4yMyw3LjgxNCw4LjM0NCw3LjgxNGg2LjE5MwoJCWMwLjUzOCwwLDAuODAzLDAuMjU4LDAuODAzLDAuODAzYzAsMy41MDUtMC4yNjUsNi41OTgtMS4wNzUsOS4wMTRjLTEuODgyLDUuNzk2LTcuNjcsOS40MjYtMTQuNjY5LDkuNDI2CgkJYy03Ljk0MywwLTEyLjkyMS0zLjkwMy0xNC45MzktMTAuMDk2Yy0xLjA3NS0zLjM2NS0xLjQ4LTcuOC0xLjQ4LTE5LjY0OGMwLTExLjg0MiwwLjQwNS0xNi4xNSwxLjQ4LTE5LjUxNgoJCWMyLjAxOC02LjMyNSw2Ljg2Ny0xMC4yMjgsMTQuNjctMTAuMjI4YzUuOTI0LDAsMTAuMzYyLDEuODg1LDEzLjg1OSw2LjcyNGMyLjY5NSwzLjc3Nyw1LjM4Nyw0Ljg1Miw4Ljc0OSw0Ljg1MgoJCWM0Ljk4MSwwLDkuMDIxLTMuNjM4LDkuMDIxLTguODg4YzAtMi4xNTEtMC42NzQtNC4wMzUtMS43NTItNS45MjFjLTQuODQyLTguMjA0LTE1LjA3MS0xNC4yNjQtMjkuODc3LTE0LjI2NAoJCWMtMTYuMjg3LDAtMjguOTM1LDcuNDA4LTMzLjY0NCwyMi4yMDRjLTIuMDIyLDYuNDY2LTIuNTU5LDExLjU3Ni0yLjU1OSwyNS4wMzhjMCwxMy40NTQsMC41MzgsMTguNTczLDIuNTU5LDI1LjAzMQoJCWM0LjcwOSwxNC44MDIsMTcuMzU3LDIyLjIwNCwzMy42NDQsMjIuMjA0YzE2LjI4NiwwLDI4LjY2OC04LjIwNCwzMy4zNzQtMjIuODgxYzEuNjE3LTUuMTExLDIuMjktMTIuNjQ1LDIuMjktMjAuNzE2di0wLjk1CgkJQzM3Mi4zNjIsMzAzLjY2NCwzNjkuNTM4LDMwMC44MzYsMzY0LjU1NiwzMDAuODM2eiIgc3R5bGU9ImZpbGw6IHJnYig3NSwgNzUsIDc1KTsiPjwvcGF0aD4KPC9nPgo8L3N2Zz4K');
  width  : 1em;
  height : 1em;
  display : inline-block;
  vertical-align : baseline;
}
</style>

<div class="datauri-vector-icon">datauri-vector-icon</div>
<div class="datauri-vector-icon-nosize">datauri-vector-icon-nosize</div>
<div class="datauri-vector-icon-base64">datauri-vector-icon-base64</div>