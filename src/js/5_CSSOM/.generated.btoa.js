var Base64_btoa;
(function(e) {
  function f(b) {
    for (var c = h, g = "", d = 0, a; a = b.length;) {
      4 > a && (d = [0, 2, 1, 0][a]), a = b.charCodeAt(0) << 16 | (1 < a ? b.charCodeAt(1) : 0) << 8 | (2 < a ? b.charCodeAt(2) : 0), g += [c[a >>> 18], c[a >>> 12 & 63], 2 <= d ? "=" : c[a >>> 6 & 63], 1 <= d ? "=" : c[a & 63]].join(""), b = b.substr(3);
    }
    return g;
  }
  var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  e.btoa && (f = e.btoa);
  Base64_btoa = f;
})(this);

