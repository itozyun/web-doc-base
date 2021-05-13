var Base64_uriSafeBtoa;
(function(d) {
  function e(b) {
    for (var c = h, g = "", f = 0, a; a = b.length;) {
      4 > a && (f = [0, 2, 1, 0][a]), a = b.charCodeAt(0) << 16 | (1 < a ? b.charCodeAt(1) : 0) << 8 | (2 < a ? b.charCodeAt(2) : 0), g += [c[a >>> 18], c[a >>> 12 & 63], 2 <= f ? "" : c[a >>> 6 & 63], 1 <= f ? "" : c[a & 63]].join(""), b = b.substr(3);
    }
    return g;
  }
  var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
  d.btoa && (e = d.btoa);
  d.btoa ? Base64_uriSafeBtoa = function(b) {
    return e(b).split("+").join("-").split("/").join("_").split("=").join("");
  } : Base64_uriSafeBtoa = e;
})(this);

