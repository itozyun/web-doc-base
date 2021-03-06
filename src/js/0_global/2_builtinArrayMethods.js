/**
 * original:
 *   Function.prototype.applyとかArray.prototype.spliceのIE5用のコード
 *   ofk
 *   https://ofk.hatenadiary.org/entry/20080904/1220485969
 */
Array.prototype.pop || (Array.prototype.pop = function () {
    var r = this[this.length - 1];
    --this.length;
    return r;
});

Array.prototype.push || (Array.prototype.push = function () {
    var a = arguments, i = 0, j = a.length, l = this.length;
    for (; i < j; ++i)
        this[l + i] = a[i];
    return this.length;
});

Array.prototype.shift || (Array.prototype.shift = function () {
    var r = this[0], i = 1, j = this.length;
    for( ; i < j; ++i)
        this[i - 1] = this[i];
    --this.length;
    return r;
});
// closure compiler が .splice(0,0,x) を .unshift(x) に書き換えるのでコメントアウトを外す
Array.prototype.unshift || (Array.prototype.unshift = function () {
    var a = arguments, l = a.length, j = this.length += l - 1, i = j;
    for (; i >= l; --i)
        this[i] = this[i - l];
    for (i = 0; i < l; ++i)
        this[i] = a[i];
    return j;
});

Array.prototype.splice || (Array.prototype.splice = function (x, y) {
    var a = arguments, s = a.length - 2 - y, r = this.slice(x, x + y),i,j;
    if (s > 0) {
        for (i = this.length - 1, j = x + y; i >= j; --i)
            this[i + s] = this[i];
    }
    else if (s < 0) {
        for (i = x + y, j = this.length; i < j; ++i)
            this[i + s] = this[i];
        this.length += s;
    }
    for (i = 2, j = a.length; i < j; ++i)
        this[i - 2 + x] = a[i];
    return r;
});

/**
 * original:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
/**
 *   JavaScript 1.6, Array.indexOfを下位互換実装する
 *   http://www.inazumatv.com/contents/archives/7965
 */
Array.prototype.indexOf || (Array.prototype.indexOf = function( searchElement, fromIndex ){
    var l = this.length >>> 0, i;
    
    if( l === 0 ) return -1;
    
    if( fromIndex ){
        i = fromIndex || 0;
        i = i === -Infinity ? 0 : ( i < 0 ? -i : i ) | 0; // Math.floor
        if( l <= i ) return -1;
    };

    for( i = 0 <= i ? i : 0 < l + i ? l + i : 0; i < l; ++i ){
        if( this[ i ] === searchElement ) return i;
    };
    return -1;
});