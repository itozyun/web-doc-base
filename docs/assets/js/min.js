Array.prototype.pop || (Array.prototype.pop = function() {
  var H = this[this.length - 1];
  --this.length;
  return H;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var H = arguments, l = 0, O = H.length, f = this.length; l < O; ++l) {
    this[f + l] = H[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var H = this[0], l = 1, O = this.length; l < O; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return H;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var H = arguments, l = H.length, O = this.length += l - 1, f = O; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = H[f];
  }
  return O;
});
Array.prototype.splice || (Array.prototype.splice = function(H, l) {
  var O = arguments, f = O.length - 2 - l, La = this.slice(H, H + l), ja;
  if (0 < f) {
    var M = this.length - 1;
    for (ja = H + l; M >= ja; --M) {
      this[M + f] = this[M];
    }
  } else {
    if (0 > f) {
      M = H + l;
      for (ja = this.length; M < ja; ++M) {
        this[M + f] = this[M];
      }
      this.length += f;
    }
  }
  M = 2;
  for (ja = O.length; M < ja; ++M) {
    this[M - 2 + H] = O[M];
  }
  return La;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(H, l) {
  var O = this.length >>> 0;
  if (0 === O) {
    return -1;
  }
  if (l) {
    var f = l || 0;
    f = -Infinity === f ? 0 : (0 > f ? -f : f) | 0;
    if (O <= f) {
      return -1;
    }
  }
  for (f = 0 <= f ? f : 0 < O + f ? O + f : 0; f < O; ++f) {
    if (this[f] === H) {
      return f;
    }
  }
  return -1;
});
(function(H, l, O, f, La, ja, M, jb, K) {
  function I(r) {
    if (H[0] === r) {
      return Ma === Ma + "" ? M(Ma) : Ma;
    }
  }
  function ca(r) {
    var y = H[3];
    if (H[2] === r) {
      return y === y + "" ? M(y) : y;
    }
  }
  var da = f.body, wa = da.style, Da, Na, Oa, Ma = H[1], t = I(2) || I(3), pa = I(7), kb = I(5) || I(6), z = I(8) || I(9), T = I(11) || I(12), lb = T && 0 <= H.conpare(Ma, "1.9.1"), mb = I(13), Pa = I(15);
  ja = I(16) || I(17);
  var yb = I(10) || I(25), Qa = I(20) || I(22);
  Qa || I(23) || I(21) || I(24);
  var Pb = Qa && M(La.userAgent.split("Edg/")[1]);
  La = M(La.appVersion.split("Trident/")[1]) + 4;
  var zb = ca(35) || ca(36) || ca(37), Ab = !t && !pa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), nb = (pa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > z ? "opr70" : 8 > z ? "opr72" : 9.5 > z ? "opr" + (z | 0) : T && !lb ? 1.3 <= T ? "gck190" : 1 <= T ? "gck121" : "gck097" : "modern") + ".css", $a = "", Qb = ca(1) || ca(2) || ca(3) || 
  ca(4) || ca(8) || ca(9) || ca(10), Bb, Cb = wa.transform !== K ? "transform" : wa["-o-transform"] !== K ? "-o-transform" : wa["-ms-transform"] !== K ? "-ms-transform" : wa["-moz-transform"] !== K ? "-moz-transform" : wa["-webkit-transform"] !== K ? "-webkit-transform" : "", ab = [], Db, ka, bb, cb, Eb, Fb, Gb, Hb;
  (function() {
    function r() {
      for (var d, h = 0, m = new Date - 0; h < E.length;) {
        m < E[0].t ? ++h : (d = E.splice(h, 1)[0], d.f(d.p));
      }
      b = E.length ? setTimeout(r, U) : 0;
    }
    function y() {
      for (var d, h = 0; h < P.length; ++h) {
        d = P[h], d.f();
      }
    }
    function C() {
      L && (L = clearInterval(L));
    }
    function v() {
      b && (b = clearTimeout(b));
    }
    cb = function(d) {
      P.length || (L = setInterval(y, W));
      P.push({f:d, v:++Z});
      return Z;
    };
    Eb = function() {
      L && (C(), L = setInterval(y, W));
    };
    Fb = C;
    var P = [], W = 999, Z = 0, L;
    if (5 > t || pa) {
      l._wdb_onlooptimer = y, y = "_wdb_onlooptimer()";
    }
    ka = function(d, h, m) {
      E.length || (b = setTimeout(r, U));
      E.push({f:d, p:h, v:++ea, t:new Date - 0 + (U < m ? m : U)});
      return ea;
    };
    bb = function(d) {
      for (var h = E.length, m; m = E[--h];) {
        if (m.v === d) {
          E.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Gb = function() {
      b && (v(), b = setTimeout(r, U));
    };
    Hb = v;
    var E = [], U = 64, ea = 0, b;
    if (5 > t || pa) {
      l._wdb_ontimer = r, r = "_wdb_ontimer()";
    }
  })();
  var Ea, Ua, ob, qa, Fa, Ib, pb, ra, qb, Jb, fa, Va, db, la, Ra, xa, rb, Kb, eb, sb, Ga, Ha, Sa;
  (function() {
    function r(b, d, h) {
      var m = ["<", b], p = 1, A, Q;
      if (d) {
        for (A in d) {
          var u = d[A];
          if (null != u && "" !== u) {
            if ("style" === A) {
              m[++p] = ' style="';
              for (Q in u) {
                for (var V = ++p, J, aa = [], ya = Q.split(""), N = ya.length; N;) {
                  J = ya[--N], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), aa[N] = J;
                }
                m[V] = aa.join("") + ":" + u[Q] + ";";
              }
              m[++p] = '"';
            } else {
              "className" === A && (A = "class"), m[++p] = " " + A + '="' + u + '"';
            }
          }
        }
      }
      m[++p] = ">";
      null != h && (E && "font" !== b ? m[++p] = "<FONT>" + h + "</FONT>" : m[++p] = h);
      m[++p] = "</" + b + ">";
      return m.join("");
    }
    function y(b) {
      return C(f, b);
    }
    function C(b, d) {
      var h = "*" === d && 6 > t ? "*" !== d ? b.all.tags(d.toUpperCase()) : b.all : b.getElementsByTagName(d), m = [], p = 0, A;
      for (A = h.length; p < A; ++p) {
        m[p] = h[p];
      }
      return m;
    }
    function v(b) {
      return E ? b.parentElement : b.parentNode;
    }
    function P(b, d, h, m, p, A) {
      if (E) {
        var Q = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", u = Fa(2 > b ? qa(d) : d);
        u = 2 > b ? u.indexOf(d) + b : u.length;
        d.insertAdjacentHTML(Q, r(h, m, p));
        return Fa(d)[u];
      }
      d = U ? f.createElement(r(h, m)) : A ? f.createElementNS("http://www.w3.org/2000/svg", h) : f.createElement(h);
      if (m && !U) {
        for (Q in m) {
          if ((h = m[Q]) || 0 === h) {
            switch(Q) {
              case "class":
              case "className":
                eb(d, h);
                break;
              case "style":
                b = d.style;
                for (u in h) {
                  b[u] = h[u];
                }
                break;
              default:
                Ra(d, Q, h);
            }
          }
        }
      }
      ea || null != p && W(d, p);
      return d;
    }
    function W(b, d) {
      if (E) {
        return P(2, b, "font", K, d);
      }
      var h = f.createTextNode("" + d);
      b.appendChild(h);
      return h;
    }
    function Z(b, d) {
      9 > t ? b.className = d : b.setAttribute("class", d);
    }
    function L(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    var E = 5 > t;
    Da = y("html")[0];
    Na = y("head")[0];
    Ea = function(b) {
      return l[b] || f[b] || f.getElementById(b);
    };
    Ua = y;
    ob = C;
    qa = v;
    Fa = function(b) {
      b = E ? b.children : b.childNodes;
      for (var d = [], h = b.length; h;) {
        d[--h] = b[h];
      }
      return d;
    };
    Ib = function(b) {
      var d = !(7.03 < z && 7.2 > z) && b.children;
      b = d ? d : b.childNodes;
      for (var h = [], m = b.length, p = -1, A; m;) {
        if (A = b[--m], d || 1 === A.nodeType) {
          E && "FONT" === A.tagName || (h[++p] = A);
        }
      }
      return h;
    };
    pb = function(b) {
      return E ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    ra = function(b, d, h, m, p) {
      d = P(2, b, d, h, m, p);
      E || (b.appendChild(d), ea && null != m && W(d, m));
      return d;
    };
    qb = function(b, d, h, m, p) {
      d = P(0, b, d, h, m, p);
      E || (v(b).insertBefore(d, b), ea && null != m && W(d, m));
      return d;
    };
    Jb = W;
    fa = function(b) {
      E ? b.outerHTML = "" : qa(b).removeChild(b);
    };
    Va = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== Da;) {
        if (d = qa(d), b === d) {
          return !0;
        }
      }
    };
    var U = 9 > t, ea = 9 > t;
    db = function(b) {
      return b.tagName.toUpperCase();
    };
    la = function(b, d) {
      return b.getAttribute(d) || "";
    };
    Ra = function(b, d, h) {
      b.setAttribute(d, h);
    };
    xa = function(b, d) {
      b.removeAttribute(d);
    };
    rb = function(b, d) {
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    Kb = function(b) {
      return b.className;
    };
    eb = Z;
    sb = L;
    Ga = function(b, d) {
      var h;
      if (!L(b, d)) {
        if (h = b.className) {
          d = " " + d;
        }
        Z(b, h + d);
      }
    };
    Ha = function(b, d, h) {
      b.style[d] = h;
    };
    Sa = function(b, d) {
      var h = -1, m, p;
      if (9 > z || 5.5 > t) {
        if (d) {
          for (m = d.split(";"); p = m[++h];) {
            var A = p.split(":");
            b.style[A[0]] = p.substr(A[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        b.style.cssText = d;
      }
    };
    ab.splice(0, 0, function() {
      function b(A) {
        A = Fa(A);
        for (var Q = A.length, u, V, J; Q;) {
          if (u = A[--Q], V = u.nodeType, 8 === V) {
            d && fa(u);
          } else {
            if (1 === V) {
              switch(V = db(u), V.replace("/", "")) {
                case "STYLE":
                  if (8 <= z && 9 > z) {
                    break;
                  }
                case "LINK":
                  E || h || Va(Na, u) || p.push(u);
                  break;
                case "META":
                  V = la(u, "name") || la(u, "property");
                  for (J = m.length; J;) {
                    if (0 === V.indexOf(m[--J])) {
                      fa(u);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (rb(u, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (rb(u, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  fa(u);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || fa(u);
                  break;
                case "HEADER":
                case "MAIN":
                case "NAV":
                case "ARTICLE":
                case "SECTION":
                case "ASIDE":
                case "FIGURE":
                case "FIGCAPTION":
                case "FOOTER":
                  9 > t && fa(u);
                  break;
                default:
                  Fa(u).length && b(u);
              }
            }
          }
        }
        for (; p[0];) {
          Na.appendChild(p.pop());
        }
      }
      Oa = Ea("jsMain");
      var d = !(8 > z || 5 > t || pa || .9 > T), h = 7 > t, m = ["og:", "twitter:", "fb:"], p = [];
      b(Da);
    });
  })();
  var S, X, ma, Ia, tb, fb, Lb, ub, Mb, Wa, vb = 0;
  (function() {
    function r(e, g) {
      for (var x = 0; x < e.length; ++x) {
        !0 === e[x](g) && (e.splice(x, 1), --x);
      }
    }
    function y(e, g) {
      m && !h.length && ka(C);
      h.push(e, g);
    }
    function C() {
      var e = h, g;
      for (h = []; g = e.shift();) {
        r(g, e.shift());
      }
    }
    function v(e) {
      var g = e || event;
      e = p[g.type];
      var x = -1, q, a;
      for (t ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : Q && (g.u = g.stopPropagation, g.stopPropagation = function() {
        a = !0;
      }); q = e[++x];) {
        q.i === this ? (this.g = q.h, this.g(g), this.g = O, this.g = null) : 7.2 > z && this === f && q.i === l && (l.g = q.h, l.g(g), delete l.g);
      }
      if (t) {
        return g.preventDefault = g.stopPropagation = null, g.returnValue;
      }
      Q && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (V = !0), a && !V && g.u(), g.u = g.stopPropagation = null);
    }
    function P() {
      if (J) {
        var e = f.readyState;
        "loaded" === e || "complete" === e ? J() : ka(P);
      }
    }
    function W(e) {
      r(aa, e);
    }
    function Z() {
      var e = 9 === d.offsetWidth;
      Wa !== e && y(ya, Wa = e);
    }
    function L() {
      return vb = sa ? za ? 2 : Ja ? 3 : 1 : 0;
    }
    function E() {
      !J && ha && (bb(ha), ha = ka(U));
    }
    function U() {
      ha = 0;
      r(na);
    }
    function ea(e) {
      J || r(Ta, e);
    }
    var b = l.matchMedia, d, h = [], m;
    ab.push(function() {
      d = ra(da, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ma(function() {
        m = !0;
        h.length && ka(C);
      });
    });
    S = function(e, g, x, q) {
      if (u) {
        e.addEventListener(g, x, q ? Ab ? q : q.capture : !1);
      } else {
        var a = {i:e, h:x};
        q = p[g];
        var c = "on" + g, k, n;
        if (q) {
          for (k = q.length; n = q[--k];) {
            if (n.i === e && n.h === x) {
              return;
            }
          }
          p[g].push(a);
        } else {
          p[g] = q = [a], A || (g = e[c], "function" === typeof g && g !== v && q.unshift({i:e, h:g}));
        }
        A ? e.attachEvent(c, v) : e[c] = v;
      }
    };
    X = function(e, g, x, q) {
      if (u) {
        e.removeEventListener(g, x, q ? Ab ? q : q.capture : !1);
      } else {
        q = p[g];
        g = "on" + g;
        var a, c, k;
        if (q) {
          for (a = q.length; c = q[--a];) {
            c.i === e && (c.h === x ? q.splice(a, 1) : k = !0);
          }
          k || (A ? e.detachEvent(g, v) : (e[g] = O, e[g] = null));
        }
      }
    };
    var p = {}, A = !1, Q = 525.13 > Pa, u = !Q && !pa && l.addEventListener, V;
    Q && Da.addEventListener("click", function(e) {
      if (V) {
        return V = !1, e.preventDefault(), !1;
      }
    });
    ma = function(e) {
      ab.push(e);
    };
    Ia = function(e) {
      aa.push(e);
    };
    var J = function(e) {
      X(l, "load", J);
      J = null;
      r(ab, e);
    }, aa = [];
    419.3 >= Pa ? ka(P) : S(l, "load", J);
    (t || 1.8 > T) && S(l, "unload", W);
    Lb = function(e) {
      ya.push(e);
    };
    var ya = [];
    ma(function() {
      Z();
      cb(Z);
    });
    Mb = function(e) {
      N.push(e);
    };
    var N = [], sa, Ja, za;
    if (10 <= t || kb || zb && Pb) {
      b("(-ms-high-contrast:black-on-white)").addListener(function(e) {
        sa = Ja = e.matches;
        y(N, L());
      }), b("(-ms-high-contrast:white-on-black)").addListener(function(e) {
        sa = za = e.matches;
        y(N, L());
      }), b("(-ms-high-contrast:active)").addListener(function(e) {
        sa = e.matches;
        y(N, L());
      });
    } else {
      if (10 > t || zb && (44 <= T || mb)) {
        var Aa = function() {
          function e(a) {
            return "#ffffff" === a || "rgb(255,255,255)" === a;
          }
          var g = f.defaultView, x = vb, q = g ? g.getComputedStyle(d, null) : d.currentStyle;
          g = (q && q.color || "").split(" ").join("");
          q = (q && q.backgroundColor || "").split(" ").join("");
          if (g) {
            return sa = "#123456" !== g && "rgb(18,52,86)" !== g, Ja = ("#000000" === g || "rgb(0,0,0)" === g) && e(q), za = e(g) && ("#000000" === q || "rgb(0,0,0)" === q), x !== L() && y(N, vb), !0;
          }
        };
        ma(function() {
          Ha(d, "color", "#123456");
          Ha(d, "backgroundColor", "#123456");
          60 > T || mb ? Aa() : Aa() && cb(Aa);
          Aa = null;
        });
      }
    }
    ub = function(e) {
      ia.push(e);
    };
    var ia = [], Ba = 7.5 <= z && 8 > z;
    Ba && function() {
      for (var e = f.images, g = e.length, x; g;) {
        x = e[--g], x.s = x.src, xa(x, "src");
      }
    }();
    ma(function() {
      function e() {
        q && (a = x[--q], Ba && Ra(a, "src", a.s), Db(g, Ba ? a.s : a.src));
      }
      function g(c) {
        r(ia, {m:a, o:c});
        e();
      }
      var x = f.images || Ua("img"), q = x.length;
      if (12 > z || 532 > Pa) {
        e();
      } else {
        for (; q;) {
          var a = x[--q];
          y(ia, {m:a, o:9 > t ? a.complete : 0 <= a.naturalWidth ? a.naturalWidth : a.width});
        }
      }
    });
    tb = function(e) {
      na.push(e);
    };
    var na = [], ha;
    S(l, "resize", E);
    Ia(function() {
      ha && clearTimeout(ha);
      X(l, "resize", E);
    });
    fb = function(e) {
      Ta.push(e);
    };
    var Ta = [], Ka = 0, Ca = 1 > T || 1.2 <= T && 1.8 > T || 7.2 >= z;
    Ca ? cb(function() {
      var e = l.scrollY || da.scrollTop;
      Ka !== e && (Ka = e, ea());
    }) : S(l, "scroll", ea);
    Ia(function() {
      Ca || X(l, "scroll", ea);
    });
  })();
  (function() {
    var r = 1 > T || 8 <= z && 9 > z, y = 7.2 <= z && 8 > z;
    t || !r && !y && function() {
      var C = ra(Da, "style"), v = !(!C.styleSheet && !C.sheet);
      fa(C);
      return v;
    }() || !Pa || r || y || function() {
      var C = ra(Da, "style");
      Jb(C, "");
      var v = !(!C.styleSheet && !C.sheet);
      fa(C);
      return v;
    }();
  })();
  (function() {
    9 > t && ma(function() {
      var r = ra(da, "div");
      Sa(r, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Bb = 1 < r.offsetHeight;
      Sa(r, "");
      fa(r);
    });
    Db = function(r, y) {
      function C() {
        P || !W || v.complete ? (ka(r, !!v.width), v.onerror = v.onload = O, v = r = null) : (--W, ka(C));
      }
      var v = new Image, P, W = 99;
      v.onerror = function() {
        P = !0;
      };
      v.onload = function() {
        P = !0;
      };
      v.src = y;
      ka(C);
    };
  })();
  (function() {
    function r() {
      m = ra(Na, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:oa + "css/" + $a + "hc/" + nb});
      (Cb || 5.5 <= t && 9 > t && Bb) && Ga(da, "jsCanRotate");
      r = null;
    }
    function y(a) {
      var c = a.keyCode || a.M, k = p.length, n, B, w, ta;
      if ("keydown" !== a.type || 13 === c) {
        for (; k;) {
          if (c = p[--k], c.l === this || c.j === this) {
            k = c.l;
            var F = n = c.j;
            if (c.C) {
              if (Ha(k, "width", c.L), k.src = c.K, eb(F, c.F), k = c.A) {
                Sa(k, c.D), eb(k, "caption jsCap");
              }
            } else {
              if (B = c.B) {
                for (delete c.B; n = qa(n);) {
                  if (sb(n, "caption")) {
                    c.A = n, c.D = n.style.cssText, Ga(n, "jsCap");
                  } else {
                    var G = db(n);
                    if ("DIV" === G || "P" === G || "BLOCKQUOT" === G) {
                      break;
                    }
                  }
                }
                n = n.offsetWidth - 4 - 1;
                1600 < n && (n = 1600);
                if (c.H) {
                  B = B.split("=");
                  G = B.length;
                  if (w = B[G - 1]) {
                    (ta = M(w.substr(1))) && w === "s" + ta ? B[G - 1] = "w" + n : B[G] = "w" + n;
                  }
                  B = B.join("=");
                } else {
                  if (0 < B.indexOf(".bp.blogspot.com/")) {
                    B = B.split("/");
                    G = B.length;
                    if (w = B[G - 2]) {
                      (ta = M(w.substr(1))) && w === "s" + ta ? B[G - 2] = "w" + n : B.splice(G - 1, 0, "w" + n);
                    }
                    B = B.join("/");
                  }
                }
                c.I = B;
              }
              c.F = Kb(F);
              Ga(F, "jsPicaLarge");
              Ha(k, "width", "");
              k.src = c.I;
              if (k = c.A) {
                Sa(k, ""), Ga(k, "jsCapLarge");
              }
            }
            c.C = !c.C;
            break;
          }
        }
        C(a);
      }
    }
    function C(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function v(a) {
      for (var c = arguments, k = 0, n = c.length; k < n; ++k) {
        if (isFinite(c[k])) {
          return c[k];
        }
      }
      return 0;
    }
    function P(a) {
      if (Wa) {
        if (Ba && !ia) {
          if (new Date - 0 < Ba) {
            return;
          }
          Ba = K;
        }
        7 === a ? na = 0 : (na && (na = bb(na)), za = v(l.pageYOffset, l.scrollY, J.scrollTop, da.scrollTop));
        ia ? (Z(K, ia[0], ia[1]), Ba = new Date - 0 + 99, ia = K) : Z();
      } else {
        ia = K;
      }
    }
    function W() {
      Z();
    }
    function Z(a, c, k) {
      function n(va) {
        F = va;
        if (sa) {
          G = sa + ":translate" + (Aa ? "3D(0," : "(0,") + va + (Aa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch;";
        } else {
          if (V) {
            var Xa = aa.offsetWidth;
          }
          u ? 0 !== va && (G = "position:fixed;width:" + Xa + "px;top:" + (va - B + R) + "px") : G = "position:absolute;left:0;width:100%;top:" + va + "px";
          Xa && G && (G += ";" + (0 > va ? "clip:rect(" + -va + "px " + Xa + "px " + Y + "px 0)" : va + Y < gb ? "clip:rect(0 " + Xa + "px " + Y + "px 0)" : "clip:rect(0 " + Xa + "px " + (gb - va) + "px 0)"), 8 > t || (G = G.split(" ").join(",")));
        }
      }
      var B = za, w = ya, ta = aa.offsetTop === w.offsetTop, F = 0, G = "", Ya = !0;
      if (ta) {
        for (var R = 0, D = w; D && D !== da;) {
          R += D.offsetTop, D = D.offsetParent;
        }
        D = v(l.innerHeight, J.offsetHeight);
        var ba = w.offsetHeight, Y = N.offsetHeight, gb = Y < ba ? ba : Y, hb = B, wb = hb + D, ib = R, xb = ib + gb, Nb = R + Ja, Rb = Nb + Y;
        D = hb < ib ? ib : hb;
        w = xb < wb ? xb : wb;
        var Za = w - D;
        0 <= c ? (a = R + c, ba = a + k, Y <= Za || (k <= Za ? D <= a && ba <= w || (D <= a && a <= w ? n(w - R - (c + k)) : D <= ba && ba <= w ? n(D - R - c) : ba < D ? n(D - R - c) : n(w - R - (c + k))) : n(D - R - c))) : a ? Y <= Za ? Ya = !1 : (F = Ja - 60 * a, c = w - R - Y, k = D - R, F < c ? n(c) : k < F ? n(k) : n(F)) : ba <= Y || (xb <= hb ? n(gb - Y) : wb <= ib ? n(0) : Y <= Za ? n(D - R) : D < Nb ? n(D - R) : Rb < w ? n(w - R - Y) : B < R + Y - Za ? n(0) : n(w - R - Y));
      }
      Sa(N, G);
      Ja = F;
      return ta && Ya;
    }
    function L(a) {
      if (Wa) {
        T && (za = v(l.pageYOffset, J.scrollTop, da.scrollTop));
        var c = this !== a.target, k = c && v(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
        c && k && Z(9 >= k ? -9 >= k ? -3 : k : 3) && (a.preventDefault(), a.stopPropagation());
      }
    }
    function E(a) {
      for (var c = -1, k; k = A[++c];) {
        Va(Ea(k), a.target) && L(a);
      }
    }
    function U(a) {
      if (Wa) {
        var c = a.target || a.srcElement;
        a = 0;
        var k;
        if (Va(N, c)) {
          for (k = c.offsetHeight; c && (sa ? Va(N, c) : N !== c);) {
            a += c.offsetTop, c = c.offsetParent;
          }
          9 > t || z ? (z && (za = v(l.pageYOffset, l.scrollY, J.scrollTop, da.scrollTop)), Z(K, a, k)) : (ia = [a, k], na && bb(na), na = ka(P, 7));
        }
      }
    }
    function ea() {
      Ta.call(Ka);
    }
    function b() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Ra(Ka, "id", "blog2slide-root"), g[1].parentNode.insertBefore(Ca, g[1]), d(), f.onkeydown = h) : e && (fa(Ca), xa(Ka, "id"), xa(e, "id"), e = f.onkeydown = null);
    }
    function d() {
      e && xa(e, "id");
      x = 0 < x ? q < x ? q : x : 0;
      e = g[x];
      Ra(e, "id", "blog2slide-current");
    }
    function h(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++x, d();
      } else {
        if ("ArrowLeft" === a.key || 37 === a.keyCode) {
          --x, d();
        }
      }
    }
    var m;
    Mb(function(a) {
      a && !m ? r && r() : a ? Na.appendChild(m) : fa(m);
    });
    var p = [];
    yb || (ub(function(a) {
      if (a.o && Oa) {
        a = a.m;
        var c = qa(a), k = "", n;
        if ("A" === db(c) && 1 === Ib(c).length) {
          var B = la(c, "href"), w = B.split("?")[0].split("#")[0].split(".");
          w = (w[w.length - 1] || "").toLowerCase();
          if ((n = 0 < B.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + w + ".")) {
            S(c, "keydown", y), S(a, "click", y), S(c, "click", C), 9 > z || (k = a.offsetWidth - 4 + "px", Ha(a, "width", k)), Ga(c, "jsPica"), p.push({j:c, K:a.src, L:k, B:B, l:a, H:n});
          }
        }
      }
    }), Ia(function(a, c) {
      for (a = -1; c = p[++a];) {
        X(c.j, "keydown", y), X(c.l, "click", y), X(c.j, "click", C);
      }
    }));
    var A = ["jsSidebarFixer1", "jsSidebarFixer2"], Q = T || mb || kb, u = !(5 > I(16) || 5 > I(17) || 2.2 > I(21) || 6 > I(12) || ca(30) && 534 > Pa || ca(32) || 7 > t || 9 > z), V = u || 7 > t, J, aa, ya, N, sa = Cb, Ja = 0, za = 0, Aa, ia, Ba, na, ha = T && 0 <= H.conpare(Ma, "0.9.7");
    Ob || yb || 8 > z || (Lb(function(a) {
      if (a) {
        if (!Oa) {
          return !0;
        }
        a = -1;
        var c;
        J = "CSS1Compat" !== f.compatMode ? da : Da || da;
        aa = Ea("jsSide");
        ya = Oa;
        if (!aa) {
          return !0;
        }
        fb(P);
        tb(P);
        N = qb(pb(aa), "div", {id:"jsSidebarFixer"});
        S(l, "blur", W);
        for (t || pa ? S(N, "focusin", U) : Q ? S(f, "focus", U, {capture:!0, passive:!1}) : S(N, "DOMFocusIn", U, !1); 1 < Fa(aa).length;) {
          N.appendChild(Fa(aa)[1]);
        }
        for (; c = A[++a];) {
          c = Ea(c), c.onwheel !== K ? S(c, "wheel", L, {passive:!1}) : lb ? S(c, "MozMousePixelScroll", L, !1) : ha || (c.onmousewheel !== K || z) && S(c, "mousewheel", L, !1);
        }
        ha && S(f, "DOMMouseScroll", E, !1);
        Aa = !t && !kb && !(2 > Qa) && (wa.perspective !== K || wa["-moz-perspective"] !== K || wa["-webkit-perspective"] !== K);
        P();
        return !0;
      }
    }), Ia(function() {
      for (var a = -1, c; c = A[++a];) {
        c = Ea(c), c.onwheel !== K ? X(c, "wheel", L, {passive:!1}) : lb ? X(c, "MozMousePixelScroll", L, !1) : ha || (c.onmousewheel !== K || z) && X(c, "mousewheel", L, !1);
      }
      ha && X(f, "DOMMouseScroll", E, !1);
      X(l, "blur", W);
      t || pa ? X(N, "focusin", U, !1) : Q ? X(f, "focus", U, {capture:!0, passive:!1}) : X(N, "DOMFocusIn", U, !1);
    }));
    ma(function() {
      function a(ta, F, G, Ya) {
        var R = Ya ? "div" : "cite";
        if (0 === F.indexOf("urn:isbn:")) {
          F = F.substr(9).toUpperCase().split("-").join("");
          if (13 === F.length) {
            F = F.toString().slice(3, -1);
            for (var D = 0, ba = 0; 9 > ba; ba++) {
              D += (F.charAt(ba) - 0) * (10 - ba);
            }
            D = (11 - D % 11) % 11;
            D = 10 === D ? "X" : D.toString();
            F += D;
          }
          10 === F.length && (F = "//www.amazon.co.jp/exec/obidos/ASIN/" + F + "/itozyun-22/ref=nosim/");
        }
        G = Ya ? qb(pb(k), R, {className:G}) : ra(k, R, {className:G});
        ra(G, "a", 0 === F.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:F, J:z ? "0" : K} : {G:!0, href:F, J:z ? "0" : K}, ta);
      }
      if (Oa) {
        for (var c = ob(Oa, "blockquote"), k, n = -1, B, w; k = c[++n];) {
          B = la(k, "title"), w = la(k, "cite"), B && w ? (xa(k, "title"), a(B, w, "js-bqLink", !0)) : w && (xa(k, "cite"), a(l.decodeURI ? decodeURI(w) : w, w, "js-bqCite"));
        }
      }
    });
    var Ta, Ka, Ca, e, g, x, q;
    ma(function() {
      var a = Ea("blog2slide-start");
      if (a) {
        var c = f.onfullscreenchange !== K ? "f" : f.onmozfullscreenchange !== K ? "mozF" : f.onwebkitfullscreenchange !== K ? "webkitF" : 0;
        Ta = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== c || Ta ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', S(a.firstChild, "click", ea), a = qa(a), Ka = qa(a), g = ob(a, "section"), Ca = f.createElement("h1"), Ca.innerHTML = Ua("h1")[0].innerHTML, q = g.length, g.splice(0, 0, Ca), 0 !== c ? S(f, c + "ullscreenchange", b) : t ? S(f, "MSFullscreenChange", b, !1) : tb(b)) : fa(a);
      }
    });
    ub(function(a) {
      var c = a.m;
      a = a.o;
      var k = qa(c);
      !sb(k, "aBodyRoot") && a ? Ga(k, "img-loaded") : a || la(c, "alt") || Ha(c, "display", "none");
    });
  })();
  (function() {
    8 <= z && ma(function() {
      for (var r = Ua("a"), y = r.length, C = 0, v; C < y; ++C) {
        v = r[C], "-1" === la(v, "tabindex") ? xa(v, "tabindex") : la(v, "href") && Ra(v, "tabindex", "0");
      }
    });
  })();
  jb = f.scripts || Ua("script");
  var oa = jb[jb.length - 1].src.split("/");
  --oa.length;
  "js" === oa[oa.length - 1] && --oa.length;
  (oa = oa.join("/")) && (oa += "/");
  var Ob = Qb || "1" === la(da, "mob");
  $a = (Ob ? "mb" : "pc") + "/";
  6.1 > ja && fb(Eb);
  Ia(Fb);
  6.1 > ja && fb(Gb);
  Ia(Hb);
  10 > t && (11 !== La || 5 !== t) || (9 > z || 1 > T || !pa && !l.addEventListener ? f.write('<link href="' + oa + "css/" + $a + nb + '" rel="stylesheet"' + (8 > z ? "" : ' media="screen,handheld,print"') + ">") : (9.5 > z || 1.5 > T || 532 >= Pa || 2 > Qa || 4 <= Qa && 8 > Qa) && ma(function() {
    ra(Na, "link", {href:oa + "css/" + $a + nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

