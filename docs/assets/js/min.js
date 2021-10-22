ua.conpare = function(x, l) {
  var F = 0, g, oa;
  x = (x + "").split(".");
  l = (l + "").split(".");
  var N = x.length;
  for (g = l.length; "0" === x[N - 1];) {
    --N;
  }
  for (; "0" === l[g - 1];) {
    --g;
  }
  for (oa = N < g ? N : g; F < oa; ++F) {
    var H = x[F] - 0, Ha = l[F] - 0;
    if (H !== Ha) {
      return H > Ha ? 1 : -1;
    }
  }
  return N > g ? 1 : N === g ? 0 : -1;
};
Array.prototype.pop || (Array.prototype.pop = function() {
  var x = this[this.length - 1];
  --this.length;
  return x;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var x = arguments, l = 0, F = x.length, g = this.length; l < F; ++l) {
    this[g + l] = x[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var x = this[0], l = 1, F = this.length; l < F; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return x;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var x = arguments, l = x.length, F = this.length += l - 1, g = F; g >= l; --g) {
    this[g] = this[g - l];
  }
  for (g = 0; g < l; ++g) {
    this[g] = x[g];
  }
  return F;
});
Array.prototype.splice || (Array.prototype.splice = function(x, l) {
  var F = arguments, g = F.length - 2 - l, oa = this.slice(x, x + l), N;
  if (0 < g) {
    var H = this.length - 1;
    for (N = x + l; H >= N; --H) {
      this[H + g] = this[H];
    }
  } else {
    if (0 > g) {
      H = x + l;
      for (N = this.length; H < N; ++H) {
        this[H + g] = this[H];
      }
      this.length += g;
    }
  }
  H = 2;
  for (N = F.length; H < N; ++H) {
    this[H - 2 + x] = F[H];
  }
  return oa;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(x, l) {
  var F = this.length >>> 0;
  if (0 === F) {
    return -1;
  }
  if (l) {
    var g = l || 0;
    g = -Infinity === g ? 0 : (0 > g ? -g : g) | 0;
    if (F <= g) {
      return -1;
    }
  }
  for (g = 0 <= g ? g : 0 < F + g ? F + g : 0; g < F; ++g) {
    if (this[g] === x) {
      return g;
    }
  }
  return -1;
});
(function(x, l, F, g, oa, N, H, Ha, O) {
  function G(p) {
    if (x[0] === p) {
      return Ia === Ia + "" ? H(Ia) : Ia;
    }
  }
  function ba(p) {
    var v = x[3];
    if (x[2] === p) {
      return v === v + "" ? H(v) : v;
    }
  }
  var fa = g.body, wa = fa.style, Aa, Ja, Ka, Ia = x[1], r = G(2) || G(3), pa = G(7), Wa = G(5) || G(6), C = G(8) || G(9), U = G(11) || G(12), cb = U && 0 <= x.conpare(Ia, "1.9.1"), db = G(13), Sa = G(15);
  N = G(16) || G(17);
  var pb = G(10) || G(25), Jb = G(20) || G(22) || G(23) || G(21) || G(24), Kb = H(oa.userAgent.split("Edg/")[1]);
  oa = H(oa.appVersion.split("Trident/")[1]) + 4;
  var qb = ba(35) || ba(36) || ba(37), rb = !r && !pa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), eb = (pa ? "ie5mac" : 5.5 > r ? "ie5win" : 6 > r ? "ie55" : 10 > r ? "ie" + (r | 0) : 7.2 > C ? "opr70" : 8 > C ? "opr72" : 9.5 > C ? "opr" + (C | 0) : U && !cb ? 1.3 <= U ? "gck190" : 1 <= U ? "gck121" : "gck097" : "modern") + ".css", Xa = "", Lb = ba(1) || ba(2) || ba(3) || 
  ba(4) || ba(8) || ba(9) || ba(10), sb, tb = wa.transform !== O ? "transform" : wa["-o-transform"] !== O ? "-o-transform" : wa["-ms-transform"] !== O ? "-ms-transform" : wa["-moz-transform"] !== O ? "-moz-transform" : wa["-webkit-transform"] !== O ? "-webkit-transform" : "", fb, qa, ub, Ya, vb, wb, xb, yb;
  (function() {
    function p() {
      for (var d, h = 0, m = new Date - 0; h < y.length;) {
        m < y[0].t ? ++h : (d = y.splice(h, 1)[0], d.f(d.p));
      }
      c = y.length ? setTimeout(p, ca) : 0;
    }
    function v() {
      for (var d, h = 0; h < L.length; ++h) {
        d = L[h], d.f();
      }
    }
    function A() {
      P && (P = clearInterval(P));
    }
    function t() {
      c && (c = clearTimeout(c));
    }
    Ya = function(d) {
      L.length || (P = setInterval(v, Q));
      L.push({f:d, u:++R});
      return R;
    };
    vb = function() {
      P && (A(), P = setInterval(v, Q));
    };
    wb = A;
    var L = [], Q = 999, R = 0, P;
    if (5 > r || pa) {
      l._wdb_onlooptimer = v, v = "_wdb_onlooptimer()";
    }
    qa = function(d, h, m) {
      y.length || (c = setTimeout(p, ca));
      y.push({f:d, p:h, u:++X, t:new Date - 0 + (ca < m ? m : ca)});
      return X;
    };
    ub = function(d) {
      for (var h = y.length, m; m = y[--h];) {
        if (m.u === d) {
          y.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    xb = function() {
      c && (t(), c = setTimeout(p, ca));
    };
    yb = t;
    var y = [], ca = 64, X = 0, c;
    if (5 > r || pa) {
      l._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var M, Y, ka, Ba, gb, Za, zb, hb, Ab, $a = [], Bb, ib = 0;
  (function() {
    function p(f, k) {
      for (var a = 0; a < f.length; ++a) {
        !0 === f[a](k) && (f.splice(a, 1), --a);
      }
    }
    function v(f, k) {
      m && !h.length && qa(A);
      h.push(f, k);
    }
    function A() {
      var f = h, k;
      for (h = []; k = f.shift();) {
        p(k, f.shift());
      }
    }
    function t(f) {
      var k = f || event;
      f = n[k.type];
      var a = -1, b, e;
      for (r ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : J && (k.s = k.stopPropagation, k.stopPropagation = function() {
        e = !0;
      }); b = f[++a];) {
        b.i === this ? (this.g = b.h, this.g(k), this.g = F, this.g = null) : 7.2 > C && this === g && b.i === l && (l.g = b.h, l.g(k), delete l.g);
      }
      if (r) {
        return k.preventDefault = k.stopPropagation = null, k.returnValue;
      }
      J && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (K = !0), e && !K && k.s(), k.s = k.stopPropagation = null);
    }
    function L() {
      if (D) {
        var f = g.readyState;
        "loaded" === f || "complete" === f ? D() : qa(L);
      }
    }
    function Q(f) {
      p(xa, f);
    }
    function R() {
      var f = 9 === d.offsetWidth;
      Bb !== f && v(S, Bb = f);
    }
    function P() {
      return ib = ra ? Ca ? 2 : ha ? 3 : 1 : 0;
    }
    function y() {
      !D && ia && (ub(ia), ia = qa(ca));
    }
    function ca() {
      ia = 0;
      p(La);
    }
    function X() {
      D || p(ya);
    }
    var c = l.matchMedia, d, h = [], m;
    $a.push(function() {
      d = sa(fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ka(function() {
        m = !0;
        h.length && qa(A);
      });
    });
    M = function(f, k, a, b) {
      if (u) {
        f.addEventListener(k, a, b ? rb ? b : b.capture : !1);
      } else {
        var e = {i:f, h:a};
        b = n[k];
        var q = "on" + k, z, T;
        if (b) {
          for (z = b.length; T = b[--z];) {
            if (T.i === f && T.h === a) {
              return;
            }
          }
          n[k].push(e);
        } else {
          n[k] = b = [e], w || (k = f[q], "function" === typeof k && k !== t && b.unshift({i:f, h:k}));
        }
        w ? f.attachEvent(q, t) : f[q] = t;
      }
    };
    Y = function(f, k, a, b) {
      if (u) {
        f.removeEventListener(k, a, b ? rb ? b : b.capture : !1);
      } else {
        b = n[k];
        k = "on" + k;
        var e, q, z;
        if (b) {
          for (e = b.length; q = b[--e];) {
            q.i === f && (q.h === a ? b.splice(e, 1) : z = !0);
          }
          z || (w ? f.detachEvent(k, t) : (f[k] = F, f[k] = null));
        }
      }
    };
    var n = {}, w = !1, J = 525.13 > Sa, u = !J && !pa && l.addEventListener, K;
    J && Aa.addEventListener("click", function(f) {
      if (K) {
        return K = !1, f.preventDefault(), !1;
      }
    });
    ka = function(f) {
      $a.push(f);
    };
    Ba = function(f) {
      xa.push(f);
    };
    var D = function(f) {
      Y(l, "load", D);
      D = null;
      p($a, f);
    }, xa = [];
    419.3 >= Sa ? qa(L) : M(l, "load", D);
    (r || 1.8 > U) && M(l, "unload", Q);
    zb = function(f) {
      S.push(f);
    };
    var S = [];
    ka(function() {
      R();
      Ya(R);
    });
    Ab = function(f) {
      Z.push(f);
    };
    var Z = [], ra, ha, Ca;
    if (10 <= r || Wa || qb && Kb) {
      c("(-ms-high-contrast:black-on-white)").addListener(function(f) {
        ra = ha = f.matches;
        v(Z, P());
      }), c("(-ms-high-contrast:white-on-black)").addListener(function(f) {
        ra = Ca = f.matches;
        v(Z, P());
      }), c("(-ms-high-contrast:active)").addListener(function(f) {
        ra = f.matches;
        v(Z, P());
      });
    } else {
      if (10 > r || qb && (44 <= U || db)) {
        var aa = function() {
          function f(e) {
            return "#ffffff" === e || "rgb(255,255,255)" === e;
          }
          var k = g.defaultView, a = ib, b = k ? k.getComputedStyle(d, null) : d.currentStyle;
          k = (b && b.color || "").split(" ").join("");
          b = (b && b.backgroundColor || "").split(" ").join("");
          if (k) {
            return ra = "#123456" !== k && "rgb(18,52,86)" !== k, ha = ("#000000" === k || "rgb(0,0,0)" === k) && f(b), Ca = f(k) && ("#000000" === b || "rgb(0,0,0)" === b), a !== P() && v(Z, ib), !0;
          }
        };
        ka(function() {
          Da(d, "color", "#123456");
          Da(d, "backgroundColor", "#123456");
          60 > U || db ? aa() : aa() && Ya(aa);
          aa = null;
        });
      }
    }
    hb = function(f) {
      za.push(f);
    };
    var za = [];
    ka(function() {
      function f(e) {
        p(za, {m:k[a], o:e});
        a && fb(f, k[--a].src);
      }
      var k = g.images || Ta("img"), a = k.length;
      if (9 <= C && 12 > C) {
        a && fb(f, k[--a].src);
      } else {
        for (; a;) {
          var b = k[--a];
          v(za, {m:b, o:9 > r ? b.complete : 0 <= b.naturalWidth ? b.naturalWidth : b.width});
        }
      }
    });
    gb = function(f) {
      La.push(f);
    };
    var La = [], ia;
    M(l, "resize", y);
    Ba(function() {
      ia && clearTimeout(ia);
      Y(l, "resize", y);
    });
    Za = function(f) {
      ya.push(f);
    };
    var ya = [], la = 0, ta = 1 > U || 1.2 <= U && 1.8 > U || 7.2 >= C;
    ta ? Ya(function() {
      var f = l.scrollY || fa.scrollTop;
      la !== f && (la = f, X());
    }) : M(l, "scroll", X);
    Ba(function() {
      ta || Y(l, "scroll", X);
    });
  })();
  var Ea, Ta, jb, va, Fa, Cb, kb, sa, lb, Db, ja, Ua, ab, ma, Va, Ma, mb, Eb, bb, nb, Ga, Da, Na;
  (function() {
    function p(c, d, h) {
      var m = ["<", c], n = 1, w, J;
      if (d) {
        for (w in d) {
          var u = d[w];
          if (null != u && "" !== u) {
            if ("style" === w) {
              m[++n] = ' style="';
              for (J in u) {
                for (var K = ++n, D, xa = [], S = J.split(""), Z = S.length; Z;) {
                  D = S[--Z], "A" <= D && "Z" >= D && (D = "-" + D.toLowerCase()), xa[Z] = D;
                }
                m[K] = xa.join("") + ":" + u[J] + ";";
              }
              m[++n] = '"';
            } else {
              "className" === w && (w = "class"), m[++n] = " " + w + '="' + u + '"';
            }
          }
        }
      }
      m[++n] = ">";
      null != h && (y && "font" !== c ? m[++n] = "<FONT>" + h + "</FONT>" : m[++n] = h);
      m[++n] = "</" + c + ">";
      return m.join("");
    }
    function v(c) {
      return A(g, c);
    }
    function A(c, d) {
      var h = "*" === d && 6 > r ? "*" !== d ? c.all.tags(d.toUpperCase()) : c.all : c.getElementsByTagName(d), m = [], n = 0, w;
      for (w = h.length; n < w; ++n) {
        m[n] = h[n];
      }
      return m;
    }
    function t(c) {
      return y ? c.parentElement : c.parentNode;
    }
    function L(c, d, h, m, n, w) {
      if (y) {
        var J = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend", u = Fa(2 > c ? va(d) : d);
        u = 2 > c ? u.indexOf(d) + c : u.length;
        d.insertAdjacentHTML(J, p(h, m, n));
        return Fa(d)[u];
      }
      d = ca ? g.createElement(p(h, m)) : w ? g.createElementNS("http://www.w3.org/2000/svg", h) : g.createElement(h);
      if (m && !ca) {
        for (J in m) {
          if ((h = m[J]) || 0 === h) {
            switch(J) {
              case "class":
              case "className":
                bb(d, h);
                break;
              case "style":
                c = d.style;
                for (u in h) {
                  c[u] = h[u];
                }
                break;
              default:
                Va(d, J, h);
            }
          }
        }
      }
      X || null != n && Q(d, n);
      return d;
    }
    function Q(c, d) {
      var h = null != d ? "" : d;
      if (y) {
        return L(2, c, "font", 0, h);
      }
      h = g.createTextNode("" + d);
      c.appendChild(h);
      return h;
    }
    function R(c, d) {
      9 > r ? c.className = d : c.setAttribute("class", d);
    }
    function P(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    var y = 5 > r;
    Aa = v("html")[0];
    Ja = v("head")[0];
    Ea = function(c) {
      return l[c] || g[c] || g.getElementById(c);
    };
    Ta = v;
    jb = A;
    va = t;
    Fa = function(c) {
      c = y ? c.children : c.childNodes;
      for (var d = [], h = c.length; h;) {
        d[--h] = c[h];
      }
      return d;
    };
    Cb = function(c) {
      var d = !(7.2 > C) && c.children;
      c = d ? d : c.childNodes;
      for (var h = [], m = c.length, n = -1, w; m;) {
        if (w = c[--m], d || 1 === w.nodeType) {
          y && "FONT" === w.tagName || (h[++n] = w);
        }
      }
      return h;
    };
    kb = function(c) {
      return y ? c.children[0] : c.firstChild;
    };
    sa = function(c, d, h, m, n) {
      d = L(2, c, d, h, m, n);
      y || (c.appendChild(d), X && null != m && Q(d, m));
      return d;
    };
    lb = function(c, d, h, m, n) {
      d = L(0, c, d, h, m, n);
      y || (t(c).insertBefore(d, c), X && null != m && Q(d, m));
      return d;
    };
    Db = Q;
    ja = function(c) {
      y ? c.outerHTML = "" : va(c).removeChild(c);
    };
    Ua = function(c, d) {
      if (c.contains) {
        return c.contains(d);
      }
      for (; d && d !== Aa;) {
        if (d = va(d), c === d) {
          return !0;
        }
      }
    };
    var ca = 9 > r, X = 9 > r;
    ab = function(c) {
      return c.tagName.toUpperCase();
    };
    ma = function(c, d) {
      return c.getAttribute(d) || "";
    };
    Va = function(c, d, h) {
      c.setAttribute(d, h);
    };
    Ma = function(c, d) {
      c.removeAttribute(d);
    };
    mb = function(c, d) {
      return c.hasAttribute ? c.hasAttribute(d) : null != c.getAttribute(d);
    };
    Eb = function(c) {
      return c.className;
    };
    bb = R;
    nb = P;
    Ga = function(c, d) {
      var h;
      if (!P(c, d)) {
        if (h = c.className) {
          d = " " + d;
        }
        R(c, h + d);
      }
    };
    Da = function(c, d, h) {
      c.style[d] = h;
    };
    Na = function(c, d) {
      var h = -1, m, n;
      if (9 > C || 5.5 > r) {
        if (d) {
          for (m = d.split(";"); n = m[++h];) {
            var w = n.split(":");
            c.style[w[0]] = n.substr(w[0].length + 1);
          }
        } else {
          c.removeAttribute("style");
        }
      } else {
        c.style.cssText = d;
      }
    };
    $a.splice(0, 0, function() {
      function c(w) {
        w = Fa(w);
        for (var J = w.length, u, K, D; J;) {
          if (u = w[--J], K = u.nodeType, 8 === K) {
            d && ja(u);
          } else {
            if (1 === K) {
              switch(K = ab(u), K.replace("/", "")) {
                case "STYLE":
                  if (8 <= C && 9 > C) {
                    break;
                  }
                case "LINK":
                  y || h || Ua(Ja, u) || n.push(u);
                  break;
                case "META":
                  K = ma(u, "name") || ma(u, "property");
                  for (D = m.length; D;) {
                    if (0 === K.indexOf(m[--D])) {
                      ja(u);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (mb(u, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (mb(u, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  ja(u);
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
                  9 > r && ja(u);
                  break;
                default:
                  Fa(u).length && c(u);
              }
            }
          }
        }
        for (; n[0];) {
          Ja.appendChild(n.pop());
        }
      }
      Ka = Ea("jsMain");
      var d = !(8 > C || 5 > r || pa || .9 > U), h = 7 > r, m = ["og:", "twitter:", "fb:"], n = [];
      c(Aa);
    });
  })();
  (function() {
    var p = 1 > U || 8 <= C && 9 > C, v = 7.2 <= C && 8 > C;
    r || !p && !v && function() {
      var A = sa(Aa, "style"), t = !(!A.styleSheet && !A.sheet);
      ja(A);
      return t;
    }() || !Sa || p || v || function() {
      var A = sa(Aa, "style");
      Db(A, "");
      var t = !(!A.styleSheet && !A.sheet);
      ja(A);
      return t;
    }();
  })();
  (function() {
    9 > r && ka(function() {
      var p = sa(fa, "div");
      Na(p, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sb = 1 < p.offsetHeight;
      Na(p, "");
      ja(p);
    });
    fb = function(p, v) {
      function A() {
        L || !Q || t.complete ? (qa(p, !!t.width), t.onerror = t.onload = F, t = p = null) : (--Q, qa(A));
      }
      var t = new Image, L, Q = 99;
      t.onerror = function() {
        L = !0;
      };
      t.onload = function() {
        L = !0;
      };
      t.src = v;
      qa(A);
    };
  })();
  (function() {
    function p() {
      h = sa(Ja, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:na + "css/" + Xa + "hc/" + eb});
      (tb || 5.5 <= r && 9 > r && sb) && Ga(fa, "jsCanRotate");
      p = null;
    }
    function v(a) {
      var b = a.keyCode || a.K, e = m.length, q, z, T, Oa;
      if ("keydown" !== a.type || 13 === b) {
        for (; e;) {
          if (b = m[--e], b.l === this || b.j === this) {
            e = b.l;
            var E = q = b.j;
            if (b.B) {
              if (Da(e, "width", b.J), e.src = b.I, bb(E, b.D), e = b.v) {
                Na(e, b.C), bb(e, "caption jsCap");
              }
            } else {
              if (z = b.A) {
                for (delete b.A; q = va(q);) {
                  if (nb(q, "caption")) {
                    b.v = q, b.C = q.style.cssText, Ga(q, "jsCap");
                  } else {
                    var I = ab(q);
                    if ("DIV" === I || "P" === I || "BLOCKQUOT" === I) {
                      break;
                    }
                  }
                }
                q = q.offsetWidth - 4 - 1;
                1600 < q && (q = 1600);
                if (0 < z.indexOf(".bp.blogspot.com/")) {
                  z = z.split("/");
                  I = z.length;
                  if (T = z[I - 2]) {
                    (Oa = H(T.substr(1))) && T === "s" + Oa ? z[I - 2] = "w" + q : z.splice(I - 1, 0, "w" + q);
                  }
                  z = z.join("/");
                }
                b.G = z;
              }
              b.D = Eb(E);
              Ga(E, "jsPicaLarge");
              Da(e, "width", "");
              e.src = b.G;
              if (e = b.v) {
                Na(e, ""), Ga(e, "jsCapLarge");
              }
            }
            b.B = !b.B;
            break;
          }
        }
        A(a);
      }
    }
    function A(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function t(a) {
      for (var b = arguments, e = 0, q = b.length; e < q; ++e) {
        if (isFinite(b[e])) {
          return b[e];
        }
      }
      return 0;
    }
    function L() {
      aa && !w ? aa = !1 : (ha = t(l.pageYOffset, l.scrollY, K.scrollTop, fa.scrollTop), aa ? (Q(ha, 0, aa[0], aa[1]), aa = !1) : Q(ha));
    }
    function Q(a, b, e, q) {
      function z(Pa) {
        V = Pa;
        if (Z) {
          da = T + Pa + Oa;
        } else {
          if (u) {
            if (0 !== Pa) {
              Pa -= a - B;
              var Qa = D.offsetWidth;
              da = "position:fixed;width:" + Qa + "px;top:" + Pa + "px";
            }
          } else {
            da = "position:absolute;left:0;width:100%;top:" + Pa + "px";
          }
          if (u || 7 > r) {
            Qa = Qa || D.offsetWidth, da += ";" + (0 > V ? "clip:rect(" + -V + "px " + Qa + "px " + (Ra - V) + "px 0)" : V + ea < B + Ra ? "clip:rect(0 " + Qa + "px " + ea + "px 0)" : "clip:rect(0 " + Qa + "px " + (a + Ra - V - B) + "px 0)");
          }
        }
      }
      var T = Z + ":translate" + (Ca ? "3D(0," : "(0,"), Oa = Ca ? "px,0)" : "px)", E = t(l.innerHeight, K.offsetHeight), I = xa, W = I.offsetHeight, ea = S.offsetHeight, B = 0, da = "", V = 0, Fb = D.offsetTop === I.offsetTop, Mb = ea < W;
      if (Fb) {
        for (; I;) {
          B += I.offsetTop || 0, I = I.offsetParent || I.parentElement;
        }
        I = B + W <= a;
        var Nb = a + E <= B, Gb = a < B && B < a + E, Hb = a < B + W && B + W < a + E, Ob = Gb && Hb, Ra = B + W - a < E ? B + W - a : E, ob = ea <= Ra;
        if (0 <= e) {
          if (ob) {
            return;
          }
          W = e + B + ra;
          if (a + Ra < q + W) {
            z(a + Ra - B - e - q);
          } else {
            if (W < a) {
              z(a - B - e);
            } else {
              return;
            }
          }
        } else {
          if (b) {
            if (ob) {
              var Pb = !0;
            } else {
              V = ra - 60 * b, 0 < b ? (e = a + E - B - ea, e = W - ea < e ? W - ea : e, V = V < e ? e : V) : (e = 0 > a - B ? 0 : a - B, V = e < V ? e : V), z(V);
            }
          } else {
            Mb && (Gb || Nb ? z(0) : ob ? z(a - B) : Hb || I ? z(W - ea) : (e = a + E - B - ea, z(0 > e ? 0 : e)));
          }
        }
      }
      Z && da && (da += ";-webkit-overflow-scrolling:touch;");
      Na(S, da);
      ra = V;
      return Fb && !Ob && !Pb;
    }
    function R(a) {
      U && (ha = t(l.pageYOffset, K.scrollTop, fa.scrollTop));
      var b = this !== a.target, e = b && t(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && e && Q(ha, 9 >= e ? -9 >= e ? -3 : e : 3) && (a.preventDefault(), a.stopPropagation());
    }
    function P(a) {
      for (var b = -1, e; e = n[++b];) {
        Ua(Ea(e), a.target) && R(a);
      }
    }
    function y(a) {
      a = a || event;
      a = a.srcElement || a.target;
      var b = 0, e;
      if (Ua(S, a)) {
        for (e = a.offsetHeight; S !== a && Ua(S, a);) {
          b += a.offsetTop || 0, a = a.offsetParent;
        }
        w ? aa = [b, e] : (Q(ha, 0, b, e), aa = !0, a = ha, l.scrollTo(t(l.pageXOffset, l.scrollX, K.scrollLeft, fa.scrollLeft), a));
      }
    }
    function ca() {
      La.call(ia);
    }
    function X() {
      g.fullscreenElement || g.fullscreen || g.webkitIsFullscreen || g.msFullscreenElement || l.fullScreen ? (Va(ia, "id", "blog2slide-root"), ta[1].parentNode.insertBefore(ya, ta[1]), c(), g.onkeydown = d) : la && (ja(ya), Ma(ia, "id"), Ma(la, "id"), la = g.onkeydown = null);
    }
    function c() {
      la && Ma(la, "id");
      f = 0 < f ? k < f ? k : f : 0;
      la = ta[f];
      Va(la, "id", "blog2slide-current");
    }
    function d(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++f, c();
      } else {
        if ("ArrowLeft" === a.key || 37 === a.keyCode) {
          --f, c();
        }
      }
    }
    var h;
    Ab(function(a) {
      a && !h ? p && p() : a ? Ja.appendChild(h) : ja(h);
    });
    var m = [];
    pb || (hb(function(a) {
      if (a.o && Ka) {
        a = a.m;
        var b = va(a);
        if ("A" === ab(b) && 1 === Cb(b).length) {
          var e = ma(b, "href"), q = e.split("?")[0].split("#")[0].split(".");
          q = (q[q.length - 1] || "").toLowerCase();
          0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + q + ".") && (M(b, "keydown", v), M(a, "click", v), M(b, "click", A), q = 8 > C ? "" : a.offsetWidth - 4 + "px", Da(a, "width", q), Ga(b, "jsPica"), m.push({j:b, I:a.src, J:q, A:e, l:a}));
        }
      }
    }), Ba(function(a, b) {
      for (a = -1; b = m[++a];) {
        Y(b.j, "keydown", v), Y(b.l, "click", v), Y(b.j, "click", A);
      }
    }));
    var n = ["jsSidebarFixer1", "jsSidebarFixer2"], w = 10 <= r || Wa || Jb || Sa, J = U || db || Wa, u = !(5 > G(16) || 5 > G(17) || 2.2 > G(21) || 6 > G(12) || ba(30) && 534 > Sa || ba(32) || 7 > r || 9 > C), K, D, xa, S, Z = tb, ra = 0, ha = 0, Ca, aa, za = U && 0 <= x.conpare(Ia, "0.9.7");
    Ib || pb || 8 > C || (zb(function(a) {
      if (a) {
        if (!Ka) {
          return !0;
        }
        a = -1;
        var b;
        K = "CSS1Compat" !== g.compatMode ? fa : Aa || fa;
        D = Ea("jsSide");
        xa = Ka;
        if (!D) {
          return !0;
        }
        Za(L);
        gb(L);
        S = lb(kb(D), "div", {id:"jsSidebarFixer"});
        for (r || pa ? M(S, "focusin", y) : J ? M(g, "focus", y, {capture:!0, passive:!1}) : M(S, "DOMFocusIn", y, !1); 1 < Fa(D).length;) {
          S.appendChild(Fa(D)[1]);
        }
        for (; b = n[++a];) {
          b = Ea(b), b.onwheel !== O ? M(b, "wheel", R, {passive:!1}) : cb ? M(b, "MozMousePixelScroll", R, !1) : za || (b.onmousewheel !== O || C) && M(b, "mousewheel", R, !1);
        }
        za && M(g, "DOMMouseScroll", P, !1);
        Ca = !r && !Wa && (wa.perspective !== O || wa["-moz-perspective"] !== O || wa["-webkit-perspective"] !== O);
        L();
        return !0;
      }
    }), Ba(function() {
      for (var a = -1, b; b = n[++a];) {
        b = Ea(b), b.onwheel !== O ? Y(b, "wheel", R, {passive:!1}) : cb ? Y(b, "MozMousePixelScroll", R, !1) : za || (b.onmousewheel !== O || C) && Y(b, "mousewheel", R, !1);
      }
      za && Y(g, "DOMMouseScroll", P, !1);
      r || pa ? Y(S, "focusin", R, !1) : J ? Y(g, "focus", y, {capture:!0, passive:!1}) : Y(S, "DOMFocusIn", y, !1);
    }));
    ka(function() {
      function a(Oa, E, I, W) {
        var ea = W ? "div" : "cite";
        if (0 === E.indexOf("urn:isbn:")) {
          E = E.substr(9).toUpperCase().split("-").join("");
          if (13 === E.length) {
            E = E.toString().slice(3, -1);
            for (var B = 0, da = 0; 9 > da; da++) {
              B += (E.charAt(da) - 0) * (10 - da);
            }
            B = (11 - B % 11) % 11;
            B = 10 === B ? "X" : B.toString();
            E += B;
          }
          10 === E.length && (E = "//www.amazon.co.jp/exec/obidos/ASIN/" + E + "/itozyun-22/ref=nosim/");
        }
        I = W ? lb(kb(e), ea, {className:I}) : sa(e, ea, {className:I});
        sa(I, "a", 0 === E.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", F:!0, href:E, H:C ? "0" : O} : {F:!0, href:E, H:C ? "0" : O}, Oa);
      }
      if (Ka) {
        for (var b = jb(Ka, "blockquote"), e, q = -1, z, T; e = b[++q];) {
          z = ma(e, "title"), T = ma(e, "cite"), z && T ? (Ma(e, "title"), a(z, T, "js-bqLink", !0)) : T && (Ma(e, "cite"), a(l.decodeURI ? decodeURI(T) : T, T, "js-bqCite"));
        }
      }
    });
    var La, ia, ya, la, ta, f, k;
    ka(function() {
      var a = Ea("blog2slide-start"), b = g.onfullscreenchange !== O ? "f" : g.onmozfullscreenchange !== O ? "mozF" : g.onwebkitfullscreenchange !== O ? "webkitF" : 0;
      a && (La = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen, 0 !== b || La ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', M(a.firstChild, "click", ca), a = va(a), ia = va(a), ta = jb(a, "section"), ya = g.createElement("h1"), ya.innerHTML = Ta("h1")[0].innerHTML, k = ta.length, ta.splice(0, 0, ya), 0 !== b ? M(g, b + "ullscreenchange", X) : r ? M(g, "MSFullscreenChange", X, !1) : gb(X)) : 
      ja(a));
    });
    hb(function(a) {
      var b = a.m;
      a = a.o;
      var e = va(b);
      nb(e, "aBodyRoot") ? a || ma(b, "alt") || Da(b, "display", "none") : Ga(e, a ? "img-loaded" : "img-disabled");
    });
  })();
  (function() {
    C && 8 <= C && ka(function() {
      for (var p = Ta("a"), v = p.length, A = 0, t; A < v; ++A) {
        t = p[A], "-1" === ma(t, "tabindex") ? t.removeAttribute("tabindex") : ma(t, "href") && Va(t, "tabindex", "0");
      }
    });
  })();
  Ha = g.scripts || Ta("script");
  var na = Ha[Ha.length - 1].src.split("/");
  --na.length;
  "js" === na[na.length - 1] && --na.length;
  (na = na.join("/")) && (na += "/");
  var Ib = Lb || "1" === ma(fa, "mob");
  Xa = (Ib ? "mb" : "pc") + "/";
  6.1 > N && Za(vb);
  Ba(wb);
  6.1 > N && Za(xb);
  Ba(yb);
  if (!(10 > r || pa) || 11 === oa && 5 === r) {
    9 > C || 1 > U ? g.write('<link href="' + na + "css/" + Xa + eb + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : ka(function() {
      sa(Ja, "link", {href:na + "css/" + Xa + eb, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
    });
  }
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

