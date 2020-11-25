# Web Doc Base - Layout

レガシーな2カラムレイアウトをベースにしています。
クロスブラウザに配慮しています。
7段階にレイアウトを切り替えます。

* #lH - layout Header
  * .lW - layout Wrapper
    * .lM - layout Main
      * .lMi - layout Main inner
        * .lM1
        * .lM2 
    * .lS - layout Side
      * .lSi - layout Side inner
        * .lS1
        * .lS2
* #lE -> #lR ribbon
* #lB layout Body
  * .lW - layout Wrapper
    * .lM - layout Main
      * .lMz - layout Main inner Zero margin if Tablet
        * .lMf - layout Main full
        * .lMh - layout Main half
    * .lS - layout Side
      * .lSi - layout Side inner
        * .lS1
        * .lS2
* #lF layout Footer
  * .lX - layout cross
    * .lXi - layout cross inner
