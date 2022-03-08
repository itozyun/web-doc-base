var D, $b;
Array.prototype.pop || (Array.prototype.pop = function() {
  var L = this[this.length - 1];
  --this.length;
  return L;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var L = arguments, l = 0, R = L.length, g = this.length; l < R; ++l) {
    this[g + l] = L[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var L = this[0], l = 1, R = this.length; l < R; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return L;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var L = arguments, l = L.length, R = this.length += l - 1, g = R; g >= l; --g) {
    this[g] = this[g - l];
  }
  for (g = 0; g < l; ++g) {
    this[g] = L[g];
  }
  return R;
});
Array.prototype.splice || (Array.prototype.splice = function(L, l) {
  var R = arguments, g = R.length - 2 - l, Ya = this.slice(L, L + l), xa;
  if (0 < g) {
    var S = this.length - 1;
    for (xa = L + l; S >= xa; --S) {
      this[S + g] = this[S];
    }
  } else {
    if (0 > g) {
      S = L + l;
      for (xa = this.length; S < xa; ++S) {
        this[S + g] = this[S];
      }
      this.length += g;
    }
  }
  S = 2;
  for (xa = R.length; S < xa; ++S) {
    this[S - 2 + L] = R[S];
  }
  return Ya;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(L, l) {
  var R = this.length >>> 0;
  if (0 === R) {
    return -1;
  }
  if (l) {
    var g = l || 0;
    g = -Infinity === g ? 0 : (0 > g ? -g : g) | 0;
    if (R <= g) {
      return -1;
    }
  }
  for (g = 0 <= g ? g : 0 < R + g ? R + g : 0; g < R; ++g) {
    if (this[g] === L) {
      return g;
    }
  }
  return -1;
});
(function(L, l, R, g, Ya, xa, S, Ib, q) {
  function M(m) {
    if (L[0] === m) {
      return Pa === Pa + "" ? S(Pa) : Pa;
    }
  }
  function ka(m) {
    var v = L[3];
    if (L[2] === m) {
      return v === v + "" ? S(v) : v;
    }
  }
  var aa = g.body, Ha = aa.style, Qa, Za, Ia, Pa = L[1], w = M(2) || M(3), Da = M(7), Jb = M(5) || M(6), B = M(8) || M(9), P = M(11) || M(12), mb = P && 0 <= L.conpare(Pa, "1.9.1"), Kb = M(13), $a = M(15);
  xa = M(16) || M(17);
  var ac = M(10) || M(25), Ra = M(20) || M(22);
  Ra || M(23) || M(21) || M(24);
  var bc = Ra && S(Ya.userAgent.split("Edg/")[1]);
  Ya = S(Ya.appVersion.split("Trident/")[1]) + 4;
  var Lb = ka(35) || ka(36) || ka(37), cc = !w && !Da && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Mb = (Da ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : P && !mb ? 1.3 <= P ? "gck190" : 1 <= P ? "gck121" : "gck097" : "modern") + ".css", vb = "", sc = ka(1) || ka(2) || ka(3) || 
  ka(4) || ka(8) || ka(9) || ka(10), dc, Nb = Ha.transform !== q ? "transform" : Ha["-o-transform"] !== q ? "-o-transform" : Ha["-ms-transform"] !== q ? "-ms-transform" : Ha["-moz-transform"] !== q ? "-moz-transform" : Ha["-webkit-transform"] !== q ? "-webkit-transform" : "", wb = [], ec, na, nb, xb, yb = [], fc, gc, hc, ic;
  (function() {
    function m() {
      for (var a, k = 0, n = new Date - 0; k < E.length;) {
        n < E[0].t ? ++k : (a = E.splice(k, 1)[0], a.f(a.p));
      }
      c = E.length ? setTimeout(m, ia) : 0;
    }
    function v() {
      for (var a, k = 0; k < T.length; ++k) {
        a = T[k], a.f();
      }
    }
    function F() {
      ca && (ca = clearInterval(ca));
    }
    function r() {
      c && (c = clearTimeout(c));
    }
    D = function(a) {
      yb.push(a);
    };
    xb = function(a) {
      T.length || (ca = setInterval(v, u));
      T.push({f:a, v:++Q});
      return Q;
    };
    fc = function() {
      ca && (F(), ca = setInterval(v, u));
    };
    gc = F;
    var T = [], u = 500, Q = 0, ca;
    if (5 > w || Da) {
      l._wdb_onlooptimer = v, v = "_wdb_onlooptimer()";
    }
    na = function(a, k, n) {
      E.length || (c = setTimeout(m, ia));
      E.push({f:a, p:k, v:++ya, t:new Date - 0 + (ia < n ? n : ia)});
      return ya;
    };
    nb = function(a) {
      for (var k = E.length, n; n = E[--k];) {
        if (n.v === a) {
          E.splice(k, 1);
          break;
        }
      }
      return 0;
    };
    hc = function() {
      c && (r(), c = setTimeout(m, ia));
    };
    ic = r;
    var E = [], ia = 16, ya = 0, c;
    if (5 > w || Da) {
      l._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Ja, ob, Ob, za, Sa, jc, Pb, U, Qb, kc, Ka, pb, zb, Aa, ab, La, Rb, lc, Ab, Sb, Ta, da, oa;
  (function() {
    function m(c, a, k) {
      var n = ["<", c], x = 1, y, X;
      if (a) {
        for (y in a) {
          var K = a[y];
          if (null != K && "" !== K) {
            if ("style" === y) {
              n[++x] = ' style="';
              for (X in K) {
                for (var pa = ++x, G, H = [], la = X.split(""), qa = la.length; qa;) {
                  G = la[--qa], "A" <= G && "Z" >= G && (G = "-" + G.toLowerCase()), H[qa] = G;
                }
                n[pa] = H.join("") + ":" + K[X] + ";";
              }
              n[++x] = '"';
            } else {
              "className" === y && (y = "class"), n[++x] = " " + y + '="' + K + '"';
            }
          }
        }
      }
      n[++x] = ">";
      null != k && (E && "font" !== c ? n[++x] = "<FONT>" + k + "</FONT>" : n[++x] = k);
      n[++x] = "</" + c + ">";
      return n.join("");
    }
    function v(c) {
      return F(g, c);
    }
    function F(c, a) {
      var k = "*" === a && 6 > w ? "*" !== a ? c.all.tags(a.toUpperCase()) : c.all : c.getElementsByTagName(a), n = [], x = 0, y;
      for (y = k.length; x < y; ++x) {
        n[x] = k[x];
      }
      return n;
    }
    function r(c) {
      return E ? c.parentElement : c.parentNode;
    }
    function T(c, a, k, n, x, y) {
      if (E) {
        var X = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend", K = Sa(2 > c ? za(a) : a);
        K = 2 > c ? K.indexOf(a) + c : K.length;
        a.insertAdjacentHTML(X, m(k, n, x));
        return Sa(a)[K];
      }
      a = ia ? g.createElement(m(k, n)) : y ? g.createElementNS("http://www.w3.org/2000/svg", k) : g.createElement(k);
      if (n && !ia) {
        for (X in n) {
          if ((k = n[X]) || 0 === k) {
            switch(X) {
              case "class":
              case "className":
                Ab(a, k);
                break;
              case "style":
                c = a.style;
                for (K in k) {
                  c[K] = k[K];
                }
                break;
              default:
                ab(a, X, k);
            }
          }
        }
      }
      ya || null != x && u(a, x);
      return a;
    }
    function u(c, a) {
      if (E) {
        return T(2, c, "font", q, a);
      }
      var k = g.createTextNode("" + a);
      c.appendChild(k);
      return k;
    }
    function Q(c, a) {
      9 > w ? c.className = a : c.setAttribute("class", a);
    }
    function ca(c, a) {
      return -1 !== (" " + c.className + " ").indexOf(" " + a + " ");
    }
    var E = 5 > w;
    Qa = v("html")[0];
    Za = v("head")[0];
    Ja = function(c) {
      return l[c] || g[c] || g.getElementById(c);
    };
    ob = v;
    Ob = F;
    za = r;
    Sa = function(c) {
      c = E ? c.children : c.childNodes;
      for (var a = [], k = c.length; k;) {
        a[--k] = c[k];
      }
      return a;
    };
    jc = function(c) {
      var a = !(7.03 < B && 7.2 > B) && c.children;
      c = a ? a : c.childNodes;
      for (var k = [], n = c.length, x = -1, y; n;) {
        if (y = c[--n], a || 1 === y.nodeType) {
          E && "FONT" === y.tagName || (k[++x] = y);
        }
      }
      return k;
    };
    Pb = function(c) {
      return E ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    U = function(c, a, k, n, x) {
      a = T(2, c, a, k, n, x);
      E || (c.appendChild(a), ya && null != n && u(a, n));
      return a;
    };
    Qb = function(c, a, k, n, x) {
      a = T(0, c, a, k, n, x);
      E || (r(c).insertBefore(a, c), ya && null != n && u(a, n));
      return a;
    };
    kc = u;
    Ka = function(c) {
      za(c) ? E ? c.outerHTML = "" : za(c).removeChild(c) : D("[DOM] p_DOM_remove(), No parentNode!");
    };
    pb = function(c, a) {
      if (c.contains) {
        return c.contains(a);
      }
      for (; a && a !== Qa;) {
        if (a = za(a), c === a) {
          return !0;
        }
      }
    };
    var ia = 9 > w, ya = 9 > w;
    zb = function(c) {
      return c.tagName.toUpperCase();
    };
    Aa = function(c, a) {
      return c.getAttribute(a) || "";
    };
    ab = function(c, a, k) {
      c.setAttribute(a, k);
    };
    La = function(c, a) {
      c.removeAttribute(a);
    };
    Rb = function(c, a) {
      return c.hasAttribute ? c.hasAttribute(a) : null != c.getAttribute(a);
    };
    lc = function(c) {
      return c.className;
    };
    Ab = Q;
    Sb = ca;
    Ta = function(c, a) {
      var k;
      if (!ca(c, a)) {
        if (k = c.className) {
          a = " " + a;
        }
        Q(c, k + a);
      }
    };
    da = function(c, a, k) {
      c.style[a] = k;
    };
    oa = function(c, a) {
      var k = -1, n, x;
      if (5.5 > w) {
        if (a) {
          for (n = a.split(";"); x = n[++k];) {
            var y = x.split(":");
            c.style[y[0]] = x.substr(y[0].length + 1);
          }
        } else {
          c.removeAttribute("style");
        }
      } else {
        9 > B || 1 > P ? a ? c.setAttribute("style", a) : c.removeAttribute("style") : c.style.cssText = a;
      }
    };
    wb.splice(0, 0, function() {
      function c(K) {
        K = Sa(K);
        for (var pa = K.length, G, H, la; pa;) {
          if (G = K[--pa], H = G.nodeType, 8 === H) {
            a && y.push(G);
          } else {
            if (1 === H) {
              switch(H = zb(G), "/" === H.charAt(0) && (H = H.substr(1), X[H] = !0), H) {
                case "STYLE":
                  if (8 <= B && 9 > B) {
                    break;
                  }
                case "LINK":
                  E || k || pb(Za, G) || x.push(G);
                  break;
                case "META":
                  H = Aa(G, "name") || Aa(G, "property");
                  for (la = n.length; la;) {
                    if (0 === H.indexOf(n[--la])) {
                      y.push(G);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Rb(G, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Rb(G, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  y.push(G);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || y.push(G);
                  break;
                default:
                  X[H] ? y.push(G) : Sa(G).length && c(G);
              }
            }
          }
        }
        for (; x[0];) {
          Za.appendChild(x.pop());
        }
        for (; y[0];) {
          Ka(y.pop());
        }
      }
      Ia = Ja("jsMain");
      var a = !(8 > B || 5 > w || Da || .9 > P), k = 7 > w, n = ["og:", "twitter:", "fb:"], x = [], y = [], X = {};
      c(Qa);
    });
  })();
  var W, Y, Ba, Ua, Tb, Bb, bb, Ub, mc, cb, ea, Vb;
  (function() {
    function m() {
      return ea = ma ? db ? 2 : eb ? 3 : 1 : 0;
    }
    function v(e, f) {
      bb(function(t) {
        if (t) {
          return t = a(e), f(t), t.addListener(f), !0;
        }
      });
    }
    function F(e, f) {
      for (var t = 0; t < e.length; ++t) {
        !0 === e[t](f) && (e.splice(t, 1), --t);
      }
    }
    function r(e, f) {
      x && !n.length && na(T);
      n.push(e, f);
    }
    function T() {
      var e = n, f;
      for (n = []; f = e.shift();) {
        F(f, e.shift());
      }
    }
    function u(e) {
      var f = e || event;
      e = y[f.type];
      var t = -1, A, I;
      for (w ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : K && (f.u = f.stopPropagation, f.stopPropagation = function() {
        I = !0;
      }); A = e[++t];) {
        A.i === this ? (this.g = A.h, this.g(f), this.g = R, this.g = q) : 7.2 > B && this === g && A.i === l && (l.g = A.h, l.g(f), delete l.g);
      }
      if (w) {
        return f.preventDefault = f.stopPropagation = q, f.returnValue;
      }
      K && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (G = !0), I && !G && f.u(), f.u = f.stopPropagation = q);
    }
    function Q() {
      if (H) {
        var e = g.readyState;
        "loaded" === e || "complete" === e ? H() : na(Q);
      }
    }
    function ca(e) {
      F(la, e);
    }
    function E() {
      var e = 9 === k.offsetWidth;
      cb !== e && (r(qa, cb = e), D("p_cssAvailability:" + cb));
    }
    function ia() {
      !H && Ea && (nb(Ea), Ea = na(ya));
    }
    function ya() {
      Ea = 0;
      F(fb);
    }
    function c(e) {
      H || F(Fa, e);
    }
    var a = l.matchMedia, k, n = [], x;
    wb.push(function() {
      v = q;
      k = U(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ba(function() {
        x = !0;
        n.length && na(T);
      });
    });
    W = function(e, f, t, A) {
      if (pa) {
        e.addEventListener(f, t, A ? cc ? A : A.capture : !1);
      } else {
        var I = {i:e, h:t};
        A = y[f];
        var ja = "on" + f, ra, gb;
        if (A) {
          for (ra = A.length; gb = A[--ra];) {
            if (gb.i === e && gb.h === t) {
              return;
            }
          }
          y[f].push(I);
        } else {
          y[f] = A = [I], X || (f = e[ja], "function" === typeof f && f !== u && A.unshift({i:e, h:f}));
        }
        X ? e.attachEvent(ja, u) : e[ja] = u;
      }
    };
    Y = function(e, f, t, A) {
      if (pa) {
        e.removeEventListener(f, t, A ? cc ? A : A.capture : !1);
      } else {
        A = y[f];
        f = "on" + f;
        var I, ja, ra;
        if (A) {
          for (I = A.length; ja = A[--I];) {
            ja.i === e && (ja.h === t ? A.splice(I, 1) : ra = !0);
          }
          ra || (X ? e.detachEvent(f, u) : (e[f] = R, e[f] = null));
        }
      }
    };
    var y = {}, X = !1, K = 525.13 > $a, pa = !K && !Da && l.addEventListener, G;
    K && Qa.addEventListener("click", function(e) {
      if (G) {
        return G = !1, e.preventDefault(), !1;
      }
    });
    Ba = function(e) {
      wb.push(e);
    };
    Ua = function(e) {
      la.push(e);
    };
    var H = function(e) {
      Y(l, "load", H);
      H = q;
      F(wb, e);
    }, la = [];
    419.3 >= $a ? na(Q) : W(l, "load", H);
    (w || 1.8 > P) && W(l, "unload", ca);
    bb = function(e) {
      qa.push(e);
    };
    var qa = [];
    Ba(function() {
      E();
      xb(E);
    });
    mc = function(e) {
      fa && fa.push(e);
    };
    var fa = [], Cb = 60 > P || Kb, ma, eb, db;
    if (89 <= P || 89 <= Ra || Lb && 79 <= bc || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Vb = !0, v("(forced-colors:active)", function(e) {
        ma = e.matches;
        r(fa, m());
        D("(forced-colors:active):" + ea);
      });
    } else {
      if (10 <= w || Jb || Lb && bc) {
        Vb = !0, v("(-ms-high-contrast:black-on-white)", function(e) {
          ma = eb = e.matches;
          ea !== m() && (r(fa, ea), D("(-ms-high-contrast:black-on-white):" + ea));
        }), v("(-ms-high-contrast:white-on-black)", function(e) {
          ma = db = e.matches;
          ea !== m() && (r(fa, ea), D("(-ms-high-contrast:white-on-black):" + ea));
        }), v("(-ms-high-contrast:active)", function(e) {
          ma = e.matches;
          ea !== m() && (r(fa, ea), D("(-ms-high-contrast:active):" + ea));
        });
      } else {
        if (10 > w || Lb && (44 <= P || Kb)) {
          var sa = function() {
            function e(A) {
              return "#ffffff" === A || "rgb(255,255,255)" === A;
            }
            var f = g.defaultView, t = f ? f.getComputedStyle(k, null) : k.currentStyle;
            f = (t && t.color || "").split(" ").join("");
            t = (t && t.backgroundColor || "").split(" ").join("");
            f && (ma = "#123456" !== f && "rgb(18,52,86)" !== f, eb = ("#000000" === f || "rgb(0,0,0)" === f) && e(t), db = e(f) && ("#000000" === t || "rgb(0,0,0)" === t), ea !== m() && (D("(forced-colors-fallback):" + ea), r(fa, ea)));
          };
          bb(function(e) {
            if (e) {
              return da(k, "color", "#123456"), da(k, "backgroundColor", "#123456"), Cb ? (sa(), fa = q) : sa() && xb(sa), sa = q, !0;
            }
          });
        } else {
          fa = m = q;
        }
      }
    }
    Ub = function(e) {
      ta.push(e);
    };
    var ta = [], hb = 7.5 <= B && 8 > B;
    hb && function() {
      for (var e = g.images, f = e.length, t; f;) {
        t = e[--f], t.s = t.src, La(t, "src");
      }
    }();
    Ba(function() {
      function e() {
        A && (I = t[--A], hb && ab(I, "src", I.s), ec(f, hb ? I.s : I.src));
      }
      function f(ja) {
        F(ta, {m:I, o:ja});
        e();
      }
      var t = g.images || ob("img"), A = t.length;
      if (12 > B || 532 > $a) {
        e();
      } else {
        for (; A;) {
          var I = t[--A];
          r(ta, {m:I, o:9 > w ? I.complete : 0 <= I.naturalWidth ? I.naturalWidth : I.width});
        }
      }
    });
    var ha = [];
    a && (a("(prefers-color-scheme:light)").matches || a("(prefers-color-scheme:dark)").matches) ? v("(prefers-color-scheme:dark)", function(e) {
      D("(prefers-color-scheme:dark):" + e.matches);
      r(ha, e.matches);
    }) : ha = q;
    Tb = function(e) {
      fb.push(e);
    };
    var fb = [], Ea;
    W(l, "resize", ia);
    Ua(function() {
      Ea && clearTimeout(Ea);
      Y(l, "resize", ia);
    });
    Bb = function(e) {
      Fa.push(e);
    };
    var Fa = [], Va = 0, Ma = 1 > P || 1.2 <= P && 1.8 > P || 7.2 >= B;
    Ma ? xb(function() {
      var e = l.scrollY || aa.scrollTop;
      Va !== e && (Va = e, c());
    }) : W(l, "scroll", c);
    Ua(function() {
      Ma || Y(l, "scroll", c);
    });
  })();
  var nc = 0;
  (function() {
    function m(u) {
      return u.styleSheet || u.sheet;
    }
    var v = 1 > P || 8 <= B && 9 > B, F = 7.2 <= B && 8 > B, r = !!w || !v && !F && function() {
      var u = U(Qa, "style"), Q = !!m(u);
      Q && (D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(u).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(u).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(u).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(u).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(u).cssText)));
      Ka(u);
      return Q;
    }();
    D("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + r);
    var T = !r && $a && !v && !F && function() {
      var u = U(Qa, "style"), Q;
      kc(u, "");
      if (Q = !!m(u)) {
        D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(u).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(u).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(u).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(u).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(u).cssText));
      }
      Ka(u);
      return Q;
    }();
    r || D("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + T);
    nc = v || F ? 1 : r || T ? 2 : 0;
    D("[CSSOM] p_CSSOM_canuse : " + nc);
  })();
  (function() {
    9 > w && Ba(function() {
      var m = U(aa, "div");
      oa(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      dc = 1 < m.offsetHeight;
      oa(m, "");
      Ka(m);
    });
    ec = function(m, v) {
      function F() {
        T || !u || r.complete ? (D("[imageTest] timer -> img.complete. img.width=" + r.width), na(m, !!r.width), r.onerror = r.onload = R, r = m = q) : (--u, na(F));
      }
      var r = new Image, T, u = 99;
      D("[imageTest] start.");
      r.onerror = function() {
        D("[imageTest] error!");
        T = !0;
      };
      r.onload = function() {
        D("[imageTest] onload.");
        T = !0;
      };
      r.src = v;
      na(F);
    };
  })();
  (function() {
    function m(b) {
      var d = b.keyCode || b.M, h = qa.length, p, C, z, Ga;
      if ("keydown" !== b.type || 13 === d) {
        for (; h;) {
          if (d = qa[--h], d.l === this || d.j === this) {
            h = d.l;
            var J = p = d.j;
            if (d.C) {
              if (da(h, "width", d.L), h.src = d.K, Ab(J, d.F), h = d.A) {
                oa(h, d.D), Ab(h, "caption jsCap");
              }
            } else {
              if (C = d.B) {
                for (delete d.B; p = za(p);) {
                  if (Sb(p, "caption")) {
                    d.A = p, d.D = p.style.cssText, Ta(p, "jsCap");
                  } else {
                    var N = zb(p);
                    if ("DIV" === N || "P" === N || "BLOCKQUOT" === N) {
                      break;
                    }
                  }
                }
                p = p.offsetWidth - 4 - 1;
                1600 < p && (p = 1600);
                if (d.H) {
                  C = C.split("=");
                  N = C.length;
                  if (z = C[N - 1]) {
                    (Ga = S(z.substr(1))) && z === "s" + Ga ? C[N - 1] = "w" + p : C[N] = "w" + p;
                  }
                  C = C.join("=");
                } else {
                  if (0 < C.indexOf(".bp.blogspot.com/")) {
                    C = C.split("/");
                    N = C.length;
                    if (z = C[N - 2]) {
                      (Ga = S(z.substr(1))) && z === "s" + Ga ? C[N - 2] = "w" + p : C.splice(N - 1, 0, "w" + p);
                    }
                    C = C.join("/");
                  }
                }
                d.I = C;
              }
              d.F = lc(J);
              Ta(J, "jsPicaLarge");
              da(h, "width", "");
              h.src = d.I;
              if (h = d.A) {
                oa(h, ""), Ta(h, "jsCapLarge");
              }
            }
            d.C = !d.C;
            break;
          }
        }
        v(b);
      }
    }
    function v(b) {
      b.preventDefault();
      b.stopPropagation();
    }
    function F(b) {
      for (var d = arguments, h = 0, p = d.length; h < p; ++h) {
        if (isFinite(d[h])) {
          return d[h];
        }
      }
      return 0;
    }
    function r(b) {
      var d = Ma;
      if (cb) {
        if (e && !d) {
          if (new Date - 0 < e) {
            return;
          }
          e = q;
        }
        7 === b ? (a("t"), f = 0) : (a("s"), f && (f = nb(f)), Fa = F(l.pageYOffset, l.scrollY, sa.scrollTop, aa.scrollTop));
        d ? (Ma = u(q, d[0], d[1])) || (e = new Date - 0 + 99) : u();
        n();
      } else {
        Ma = q;
      }
    }
    function T() {
      a("w.blur");
    }
    function u(b, d, h) {
      function p(Ca) {
        J = Ca;
        if (fb) {
          N = fb + ":translate" + (Va ? "3D(0," : "(0,") + Ca + (Va ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch;";
        } else {
          if (0 !== Ca) {
            if (!db && (eb || ma)) {
              var Db = ta.offsetWidth;
            }
            N = ma ? "position:fixed;width:" + Db + "px;top:" + (Ca - C + O) + "px" : db ? "top:" + Ca + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ca + "px";
            eb && N && (N += ";" + (0 > Ca ? "clip:rect(" + -Ca + "px " + Db + "px " + Z + "px 0)" : Ca + Z < qb ? "clip:rect(0 " + Db + "px " + Z + "px 0)" : "clip:rect(0 " + Db + "px " + (qb - Ca) + "px 0)"), 8 > w || (N = N.split(" ").join(",")));
          }
        }
      }
      var C = Fa, z = hb, Ga = ta.offsetTop === z.offsetTop, J = 0, N = "", va = !0;
      if (Ga) {
        for (var V = 0, O = 0, ba = z; ba && ba !== aa;) {
          O += ba.offsetTop, ba = ba.offsetParent;
        }
        ba = F(l.innerHeight, sa.offsetHeight);
        var Wb = z.offsetHeight, Z = ha.offsetHeight, qb = Z < Wb ? Wb : Z, Na = C, ib = Na + ba, Eb = O, Fb = Eb + qb, oc = Ea, pc = O + oc, tc = pc + Z;
        z = Na < Eb ? Eb : Na;
        var Oa = Fb < ib ? Fb : ib, jb = Oa - z;
        Na = Fb <= Na;
        ib = ib <= Eb;
        if (d !== q) {
          va = O + d;
          b = va + h;
          if (Na || ib) {
            return ba <= h ? (d = O, a("4.1.1")) : Na ? (d = Fb - h, a("4.1.2")) : (d = O + h - ba, a("4.1.3")), e = q, l.scroll(F(l.pageXOffset, l.scrollX, sa.scrollLeft, aa.scrollLeft), d), a("4.1.*"), Ma;
          }
          Z <= jb ? (V = 4, a("4.2")) : h <= jb ? Z - d <= jb ? (V = 2, a("4.3.1")) : z <= va && b <= Oa ? z < O + J && (V = 4, a("4.3.2")) : z <= va && va <= Oa ? (V = 5, a("4.3.3")) : z <= b && b <= Oa ? (V = 4, a("4.3.4")) : b < z ? (V = 4, a("4.3.5")) : (V = 5, a("4.3.6")) : (V = 4, a("4.4"));
          va = q;
        } else {
          b !== q ? Z <= jb ? (va = !1, a("3.1")) : (J = oc - 60 * b, V = Oa - O - Z, b = z - O, J < V ? (p(V), a("3.2.1")) : b < J ? (p(b), a("3.2.2")) : (p(J), a("3.2.3")), V = 6) : Wb <= Z || (Na ? (V = 1, a("2.2.1")) : ib ? a("2.2.2") : Z <= jb ? (V = 3, a("2.3")) : z < pc ? (V = 3, a("2.4.1")) : tc < Oa ? (V = 2, a("2.4.2")) : C < O + Z - jb ? a("2.4.3") : (V = 2, a("2.4.4")));
        }
        switch(V) {
          case 0:
            p(0);
            break;
          case 1:
            p(qb - Z);
            break;
          case 2:
            p(Oa - O - Z);
            break;
          case 3:
            p(z - O);
            break;
          case 4:
            p(z - O - d);
            break;
          case 5:
            p(Oa - O - (d + h));
        }
        x(J, Z, O, qb, ba, d || "-");
      } else {
        x(J, "-", "-", "-", "-", "-");
      }
      oa(ha, N);
      Ea = J;
      return Ga && va;
    }
    function Q(b) {
      if (cb) {
        a("m");
        P && (Fa = F(l.pageYOffset, sa.scrollTop, aa.scrollTop), n());
        var d = this !== b.target, h = d && F(b.deltaY, b.wheelDeltaY / 120, b.wheelDelta / -120, b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1));
        d && h && u(9 >= h ? -9 >= h ? -3 : h : 3) && (b.preventDefault(), b.stopPropagation());
      }
    }
    function ca(b) {
      for (var d = b.target, h = -1, p; p = fa[++h];) {
        pb(p, d) && Q(b);
      }
    }
    function E(b) {
      if (cb) {
        var d = !!fb, h = b.target || b.srcElement, p = 0;
        if (pb(ha, h)) {
          a(b.type);
          W(h, "blur", c);
          for (b = h.offsetHeight; h && (d ? pb(ha, h) : ha !== h);) {
            p += h.offsetTop, h = h.offsetParent;
          }
          9 > w || B || 1.3 > P ? (Fa = F(l.pageYOffset, l.scrollY, sa.scrollTop, aa.scrollTop), u(q, p, b)) : (Ma = [p, b], f && nb(f), f = na(r, 7));
          y(p, b);
        }
      }
    }
    function ia() {
      ra = l.onerror;
      l.onerror = ya;
      var b = g.activeElement;
      ja !== b && (ja = b, E({target:b}));
      l.onerror = ra;
      ra = q;
    }
    function ya() {
      D("error!");
      l.onerror = ra;
      ra = ja = q;
      return !0;
    }
    function c() {
      Y(this, "blur", c);
      y(0, 0);
    }
    function a(b) {
      rb && (Gb && (Gb = nb(Gb)), Gb = na(k, 0, 1400), rb.innerHTML += " " + b);
    }
    function k() {
      rb.innerHTML = "";
    }
    function n() {
      sb && (da(sb, "top", (Fa / 10 | 0) + "px"), qc.innerHTML = " scrl:" + (Fa | 0));
    }
    function x(b, d, h, p, C, z) {
      kb && (da(kb, "top", ((b + h) / 10 | 0) + "px"), da(kb, "height", (d / 10 | 0) + "px"), da(sb, "height", (C / 10 | 0) + "px"), da(Xb, "height", (aa.scrollHeight / 10 | 0) + "px"), gb.textContent = "y:" + h + "/" + b + ", h:" + p + "/" + d + " fy:" + z);
    }
    function y(b, d) {
      tb && (da(tb, "top", (b / 10 | 0) + "px"), da(tb, "height", (d / 10 | 0) + "px"));
    }
    function X() {
      Yb.call(Hb);
    }
    function K() {
      g.fullscreenElement || g.fullscreen || g.webkitIsFullscreen || g.msFullscreenElement || l.fullScreen ? (ab(Hb, "id", "blog2slide-root"), lb[1].parentNode.insertBefore(ub, lb[1]), pa(), g.onkeydown = G) : Wa && (Ka(ub), La(Hb, "id"), La(Wa, "id"), Wa = g.onkeydown = q);
    }
    function pa() {
      Wa && La(Wa, "id");
      Xa = 0 < Xa ? Zb < Xa ? Zb : Xa : 0;
      Wa = lb[Xa];
      ab(Wa, "id", "blog2slide-current");
    }
    function G(b) {
      if ("ArrowRight" === b.key || 39 === b.keyCode) {
        ++Xa, pa();
      } else {
        if ("ArrowLeft" === b.key || 37 === b.keyCode) {
          --Xa, pa();
        }
      }
    }
    if (!Vb) {
      var H, la = function() {
        H = U(Za, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:wa + "css/" + vb + "hc/" + Mb});
        (Nb || 5.5 <= w && 9 > w && dc) && Ta(aa, "jsCanRotate");
        la = q;
      };
      mc(function(b) {
        b && !H ? la() : H && (b ? Za.appendChild(H) : Ka(H));
      });
    }
    var qa = [];
    ac || (Ub(function(b) {
      if (b.o && Ia) {
        b = b.m;
        var d = za(b), h = "", p;
        if ("A" === zb(d) && 1 === jc(d).length) {
          var C = Aa(d, "href"), z = C.split("?")[0].split("#")[0].split(".");
          z = (z[z.length - 1] || "").toLowerCase();
          if ((p = 0 < C.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + z + ".")) {
            W(d, "keydown", m), W(b, "click", m), W(d, "click", v), 9 > B || (h = b.offsetWidth - 4 + "px", da(b, "width", h)), Ta(d, "jsPica"), qa.push({j:d, K:b.src, L:h, B:C, l:b, H:p});
          }
        }
      }
    }), Ua(function(b, d) {
      for (b = -1; d = qa[++b];) {
        Y(d.j, "keydown", m), Y(d.l, "click", m), Y(d.j, "click", v);
      }
    }));
    var fa = ["jsSidebarFixer1", "jsSidebarFixer2"], Cb = P || Kb || Jb, ma = !(5 > M(16) || 5 > M(17) || 2.2 > M(21) || 6 > M(12) || ka(30) && 534 > $a || ka(32) || 7 > w || 9 > B || 1 > P), eb = ma || 7 > w || 1 > P, db = 7.5 > B, sa, ta, hb, ha, fb = Nb, Ea = 0, Fa = 0, Va, Ma, e, f, t = P && 0 <= L.conpare(Pa, "0.9.7"), A = P && 0 >= L.conpare(Pa, "0.9.4");
    rc || ac || (bb(function(b) {
      if (b) {
        if (!Ia) {
          return !0;
        }
        b = -1;
        var d;
        sa = "CSS1Compat" !== g.compatMode ? aa : Qa || aa;
        ta = Ja("jsSide");
        hb = Ia;
        if (!ta) {
          return !0;
        }
        Bb(r);
        Tb(r);
        ha = Qb(Pb(ta), "div", {id:"jsSidebarFixer"});
        W(l, "blur", T);
        for (8 > B || A || 6 > w || (w || Da ? W(ha, "focusin", E) : Cb ? W(g, "focus", E, {capture:!0, passive:!1}) : W(ha, "DOMFocusIn", E, !1)); 1 < Sa(ta).length;) {
          ha.appendChild(Sa(ta)[1]);
        }
        for (t && !mb && W(g, "DOMMouseScroll", ca, !1); d = fa[++b];) {
          var h = Ja(d);
          h.onwheel !== q ? W(h, "wheel", Q, {passive:!1}) : mb ? W(h, "MozMousePixelScroll", Q, !1) : t ? fa[b] = Ja(d) : (h.onmousewheel !== q || 9 <= B) && W(h, "mousewheel", Q, !1);
        }
        w || Jb || 2 > Ra || (Va = Ha.perspective !== q || Ha["-moz-perspective"] !== q || Ha["-webkit-perspective"] !== q);
        r();
        return !0;
      }
    }), Ua(function() {
      var b = -1, d;
      if (t && !mb) {
        Y(g, "DOMMouseScroll", ca, !1);
      } else {
        for (; d = fa[++b];) {
          d = Ja(d), d.onwheel !== q ? Y(d, "wheel", Q, {passive:!1}) : mb ? Y(d, "MozMousePixelScroll", Q, !1) : (d.onmousewheel !== q || 9 <= B) && Y(d, "mousewheel", Q, !1);
        }
      }
      Y(l, "blur", T);
      8 > B || A || 6 > w || (w || Da ? Y(ha, "focusin", E, !1) : Cb ? Y(g, "focus", E, {capture:!0, passive:!1}) : Y(ha, "DOMFocusIn", E, !1));
      I && clearInterval(I);
    }));
    var I, ja, ra;
    6 > w && bb(function(b) {
      if (!Ia) {
        return !0;
      }
      b ? I = setInterval(ia, 333) : I && (clearInterval(I), I = 0);
    });
    if (ma) {
      var gb, qc, rb, Xb, sb, kb, tb, Gb;
      bb(function(b) {
        if (b) {
          if (!Ia) {
            return !0;
          }
          b = U(aa, "div");
          oa(b, "position:fixed;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          U(b, "div", q, Nb ? "transform" + (Va ? "3D" : "") : ma ? "pos:fixed" : "pos:absolute");
          var d = U(b, "div");
          gb = U(d, "span");
          qc = U(d, "span");
          rb = U(b, "div");
          Xb = U(b, "div");
          oa(Xb, "position:absolute;left:0;top:0;width:54px;background:#242");
          kb = U(b, "div");
          oa(kb, "position:absolute;left:0;width:54px;background:#363");
          sb = U(b, "div");
          oa(sb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
          tb = U(kb, "div");
          oa(tb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
          return !0;
        }
      });
    }
    Ba(function() {
      function b(Ga, J, N, va) {
        var V = va ? "div" : "cite";
        if (0 === J.indexOf("urn:isbn:")) {
          J = J.substr(9).toUpperCase().split("-").join("");
          if (13 === J.length) {
            J = J.toString().slice(3, -1);
            for (var O = 0, ba = 0; 9 > ba; ba++) {
              O += (J.charAt(ba) - 0) * (10 - ba);
            }
            O = (11 - O % 11) % 11;
            O = 10 === O ? "X" : O.toString();
            J += O;
          }
          10 === J.length && (J = "//www.amazon.co.jp/exec/obidos/ASIN/" + J + "/itozyun-22/ref=nosim/");
        }
        N = va ? Qb(Pb(h), V, {className:N}) : U(h, V, {className:N});
        U(N, "a", 0 === J.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:J, J:B ? "0" : q} : {G:!0, href:J, J:B ? "0" : q}, Ga);
      }
      if (Ia) {
        for (var d = Ob(Ia, "blockquote"), h, p = -1, C, z; h = d[++p];) {
          C = Aa(h, "title"), z = Aa(h, "cite"), C && z ? (La(h, "title"), b(C, z, "js-bqLink", !0)) : z && (La(h, "cite"), b(l.decodeURI ? decodeURI(z) : z, z, "js-bqCite"));
        }
      }
    });
    var Yb, Hb, ub, Wa, lb, Xa, Zb;
    Ba(function() {
      var b = Ja("blog2slide-start");
      if (b) {
        var d = g.onfullscreenchange !== q ? "f" : g.onmozfullscreenchange !== q ? "mozF" : g.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Yb = b.requestFullscreen || b.webkitRequestFullscreen || b.mozRequestFullscreen || b.msRequestFullscreen;
        0 !== d || Yb ? (b.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', W(b.firstChild, "click", X), b = za(b), Hb = za(b), lb = Ob(b, "section"), ub = g.createElement("h1"), ub.innerHTML = ob("h1")[0].innerHTML, Zb = lb.length, lb.splice(0, 0, ub), 0 !== d ? W(g, d + "ullscreenchange", K) : w ? W(g, "MSFullscreenChange", K, !1) : Tb(K)) : Ka(b);
      }
    });
    Ub(function(b) {
      var d = b.m;
      b = b.o;
      var h = za(d);
      !Sb(h, "aBodyRoot") && b ? Ta(h, "img-loaded") : b || Aa(d, "alt") || da(d, "display", "none");
    });
  })();
  (function() {
    8 <= B && Ba(function() {
      for (var m = ob("a"), v = m.length, F = 0, r; F < v; ++F) {
        r = m[F], "-1" === Aa(r, "tabindex") ? La(r, "tabindex") : Aa(r, "href") && ab(r, "tabindex", "0");
      }
    });
  })();
  Ib = g.scripts || ob("script");
  var wa = Ib[Ib.length - 1].src.split("/");
  --wa.length;
  "js" === wa[wa.length - 1] && --wa.length;
  (wa = wa.join("/")) && (wa += "/");
  D("[p_assetUrl] " + wa);
  var rc = sc || "1" === Aa(aa, "mob");
  vb = (rc ? "mb" : "pc") + "/";
  Ba(function() {
    var m;
    (m = Ja("logger")) || alert("#logger not found!");
    for (m ? (D = function(v) {
      U(m, "P", q, v);
    }, $b = function(v) {
      U(m, "P", {style:{color:"red"}}, v);
    }, l.onerror = function(v, F, r) {
      $b(v + ", " + F + ", " + r);
      return !0;
    }) : l.console ? D = console.log : D = R; yb.length;) {
      D(yb.shift());
    }
    yb = null;
  });
  6.1 > xa && Bb(fc);
  Ua(gc);
  6.1 > xa && Bb(hc);
  Ua(ic);
  10 > w && (11 !== Ya || 5 !== w) || (9 > B || 1 > P || !Da && !l.addEventListener ? g.write('<link href="' + wa + "css/" + vb + Mb + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > B || 1.5 > P || 532 >= $a || 2 > Ra || 4 <= Ra && 8 > Ra) && Ba(function() {
    U(Za, "link", {href:wa + "css/" + vb + Mb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

