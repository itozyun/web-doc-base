var G, Zb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var L = this[this.length - 1];
  --this.length;
  return L;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var L = arguments, l = 0, T = L.length, f = this.length; l < T; ++l) {
    this[f + l] = L[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var L = this[0], l = 1, T = this.length; l < T; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return L;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var L = arguments, l = L.length, T = this.length += l - 1, f = T; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = L[f];
  }
  return T;
});
Array.prototype.splice || (Array.prototype.splice = function(L, l) {
  var T = arguments, f = T.length - 2 - l, $a = this.slice(L, L + l), va;
  if (0 < f) {
    var U = this.length - 1;
    for (va = L + l; U >= va; --U) {
      this[U + f] = this[U];
    }
  } else {
    if (0 > f) {
      U = L + l;
      for (va = this.length; U < va; ++U) {
        this[U + f] = this[U];
      }
      this.length += f;
    }
  }
  U = 2;
  for (va = T.length; U < va; ++U) {
    this[U - 2 + L] = T[U];
  }
  return $a;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(L, l) {
  var T = this.length >>> 0;
  if (0 === T) {
    return -1;
  }
  if (l) {
    var f = l || 0;
    f = -Infinity === f ? 0 : (0 > f ? -f : f) | 0;
    if (T <= f) {
      return -1;
    }
  }
  for (f = 0 <= f ? f : 0 < T + f ? T + f : 0; f < T; ++f) {
    if (this[f] === L) {
      return f;
    }
  }
  return -1;
});
(function(L, l, T, f, $a, va, U, Hb, q) {
  function O(m) {
    if (L[0] === m) {
      return Pa === Pa + "" ? U(Pa) : Pa;
    }
  }
  function ma(m) {
    var x = L[3];
    if (L[2] === m) {
      return x === x + "" ? U(x) : x;
    }
  }
  var aa = f.body, Fa = aa.style, Qa, ab, Ga, Pa = L[1], y = O(2) || O(3), Ca = O(7), Ib = O(5) || O(6), C = O(8) || O(9), M = O(11) || O(12), kb = M && 0 <= L.conpare(Pa, "1.9.1"), Jb = O(13), bb = O(15);
  va = O(16) || O(17);
  var $b = O(10) || O(25), Ra = O(20) || O(22);
  Ra || O(23) || O(21) || O(24);
  var ac = Ra && U($a.userAgent.split("Edg/")[1]);
  $a = U($a.appVersion.split("Trident/")[1]) + 4;
  var Kb = ma(35) || ma(36) || ma(37), bc = !y && !Ca && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Lb = (Ca ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > C ? "opr70" : 8 > C ? "opr72" : 9.5 > C ? "opr" + (C | 0) : M && !kb ? 1.3 <= M ? "gck190" : 1 <= M ? "gck121" : "gck097" : "modern") + ".css", ub = "", pc = ma(1) || ma(2) || ma(3) || 
  ma(4) || ma(8) || ma(9) || ma(10), cc, Mb = Fa.transform !== q ? "transform" : Fa["-o-transform"] !== q ? "-o-transform" : Fa["-ms-transform"] !== q ? "-ms-transform" : Fa["-moz-transform"] !== q ? "-moz-transform" : Fa["-webkit-transform"] !== q ? "-webkit-transform" : "", vb = [], dc, na, lb, wb, xb = [], ec, fc, gc, hc;
  (function() {
    function m() {
      for (var a, h = 0, n = new Date - 0; h < E.length;) {
        n < E[0].t ? ++h : (a = E.splice(h, 1)[0], a.f(a.p));
      }
      b = E.length ? setTimeout(m, ka) : 0;
    }
    function x() {
      for (var a, h = 0; h < I.length; ++h) {
        a = I[h], a.f();
      }
    }
    function u() {
      fa && (fa = clearInterval(fa));
    }
    function r() {
      b && (b = clearTimeout(b));
    }
    G = function(a) {
      xb.push(a);
    };
    wb = function(a) {
      I.length || (fa = setInterval(x, p));
      I.push({f:a, v:++R});
      return R;
    };
    ec = function() {
      fa && (u(), fa = setInterval(x, p));
    };
    fc = u;
    var I = [], p = 500, R = 0, fa;
    if (5 > y || Ca) {
      l._wdb_onlooptimer = x, x = "_wdb_onlooptimer()";
    }
    na = function(a, h, n) {
      E.length || (b = setTimeout(m, ka));
      E.push({f:a, p:h, v:++wa, t:new Date - 0 + (ka < n ? n : ka)});
      return wa;
    };
    lb = function(a) {
      for (var h = E.length, n; n = E[--h];) {
        if (n.v === a) {
          E.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    gc = function() {
      b && (r(), b = setTimeout(m, ka));
    };
    hc = r;
    var E = [], ka = 16, wa = 0, b;
    if (5 > y || Ca) {
      l._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Ha, mb, Nb, xa, Sa, ic, Ob, V, Pb, jc, Ia, nb, yb, ya, cb, Ja, Qb, kc, zb, Rb, Ta, ha, oa;
  (function() {
    function m(b, a, h) {
      var n = ["<", b], z = 1, A, X;
      if (a) {
        for (A in a) {
          var K = a[A];
          if (null != K && "" !== K) {
            if ("style" === A) {
              n[++z] = ' style="';
              for (X in K) {
                for (var pa = ++z, H, J = [], ia = X.split(""), Da = ia.length; Da;) {
                  H = ia[--Da], "A" <= H && "Z" >= H && (H = "-" + H.toLowerCase()), J[Da] = H;
                }
                n[pa] = J.join("") + ":" + K[X] + ";";
              }
              n[++z] = '"';
            } else {
              "className" === A && (A = "class"), n[++z] = " " + A + '="' + K + '"';
            }
          }
        }
      }
      n[++z] = ">";
      null != h && (E && "font" !== b ? n[++z] = "<FONT>" + h + "</FONT>" : n[++z] = h);
      n[++z] = "</" + b + ">";
      return n.join("");
    }
    function x(b) {
      return u(f, b);
    }
    function u(b, a) {
      var h = "*" === a && 6 > y ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], z = 0, A;
      for (A = h.length; z < A; ++z) {
        n[z] = h[z];
      }
      return n;
    }
    function r(b) {
      return E ? b.parentElement : b.parentNode;
    }
    function I(b, a, h, n, z, A) {
      if (E) {
        var X = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", K = Sa(2 > b ? xa(a) : a);
        K = 2 > b ? K.indexOf(a) + b : K.length;
        a.insertAdjacentHTML(X, m(h, n, z));
        return Sa(a)[K];
      }
      a = ka ? f.createElement(m(h, n)) : A ? f.createElementNS("http://www.w3.org/2000/svg", h) : f.createElement(h);
      if (n && !ka) {
        for (X in n) {
          if ((h = n[X]) || 0 === h) {
            switch(X) {
              case "class":
              case "className":
                zb(a, h);
                break;
              case "style":
                b = a.style;
                for (K in h) {
                  b[K] = h[K];
                }
                break;
              default:
                cb(a, X, h);
            }
          }
        }
      }
      wa || null != z && p(a, z);
      return a;
    }
    function p(b, a) {
      if (E) {
        return I(2, b, "font", q, a);
      }
      var h = f.createTextNode("" + a);
      b.appendChild(h);
      return h;
    }
    function R(b, a) {
      9 > y ? b.className = a : b.setAttribute("class", a);
    }
    function fa(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var E = 5 > y;
    Qa = x("html")[0];
    ab = x("head")[0];
    Ha = function(b) {
      return l[b] || f[b] || f.getElementById(b);
    };
    mb = x;
    Nb = u;
    xa = r;
    Sa = function(b) {
      b = E ? b.children : b.childNodes;
      for (var a = [], h = b.length; h;) {
        a[--h] = b[h];
      }
      return a;
    };
    ic = function(b) {
      var a = !(7.03 < C && 7.2 > C) && b.children;
      b = a ? a : b.childNodes;
      for (var h = [], n = b.length, z = -1, A; n;) {
        if (A = b[--n], a || 1 === A.nodeType) {
          E && "FONT" === A.tagName || (h[++z] = A);
        }
      }
      return h;
    };
    Ob = function(b) {
      return E ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    V = function(b, a, h, n, z) {
      a = I(2, b, a, h, n, z);
      E || (b.appendChild(a), wa && null != n && p(a, n));
      return a;
    };
    Pb = function(b, a, h, n, z) {
      a = I(0, b, a, h, n, z);
      E || (r(b).insertBefore(a, b), wa && null != n && p(a, n));
      return a;
    };
    jc = p;
    Ia = function(b) {
      xa(b) ? E ? b.outerHTML = "" : xa(b).removeChild(b) : G("[DOM] p_DOM_remove(), No parentNode!");
    };
    nb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Qa;) {
        if (a = xa(a), b === a) {
          return !0;
        }
      }
    };
    var ka = 9 > y, wa = 9 > y;
    yb = function(b) {
      return b.tagName.toUpperCase();
    };
    ya = function(b, a) {
      return b.getAttribute(a) || "";
    };
    cb = function(b, a, h) {
      b.setAttribute(a, h);
    };
    Ja = function(b, a) {
      b.removeAttribute(a);
    };
    Qb = function(b, a) {
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    };
    kc = function(b) {
      return b.className;
    };
    zb = R;
    Rb = fa;
    Ta = function(b, a) {
      var h;
      if (!fa(b, a)) {
        if (h = b.className) {
          a = " " + a;
        }
        R(b, h + a);
      }
    };
    ha = function(b, a, h) {
      b.style[a] = h;
    };
    oa = function(b, a) {
      var h = -1, n, z;
      if (5.5 > y) {
        if (a) {
          for (n = a.split(";"); z = n[++h];) {
            var A = z.split(":");
            b.style[A[0]] = z.substr(A[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > C || 1 > M ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    vb.splice(0, 0, function() {
      function b(K) {
        K = Sa(K);
        for (var pa = K.length, H, J, ia; pa;) {
          if (H = K[--pa], J = H.nodeType, 8 === J) {
            a && A.push(H);
          } else {
            if (1 === J) {
              switch(J = yb(H), "/" === J.charAt(0) && (J = J.substr(1), X[J] = !0), J) {
                case "STYLE":
                  if (8 <= C && 9 > C) {
                    break;
                  }
                case "LINK":
                  E || h || nb(ab, H) || z.push(H);
                  break;
                case "META":
                  J = ya(H, "name") || ya(H, "property");
                  for (ia = n.length; ia;) {
                    if (0 === J.indexOf(n[--ia])) {
                      A.push(H);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Qb(H, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Qb(H, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  A.push(H);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || A.push(H);
                  break;
                default:
                  X[J] ? A.push(H) : Sa(H).length && b(H);
              }
            }
          }
        }
        for (; z[0];) {
          ab.appendChild(z.pop());
        }
        for (; A[0];) {
          Ia(A.pop());
        }
      }
      Ga = Ha("jsMain");
      var a = !(8 > C || 5 > y || Ca || .9 > M), h = 7 > y, n = ["og:", "twitter:", "fb:"], z = [], A = [], X = {};
      b(Qa);
    });
  })();
  var W, Y, za, Ua, Sb, Ab, db, Tb, lc, eb, ja, Ub;
  (function() {
    function m() {
      return ja = Ea ? qa ? 2 : Aa ? 3 : 1 : 0;
    }
    function x(e, g) {
      db(function(v) {
        if (v) {
          return v = a(e), g(v), v.addListener(g), !0;
        }
      });
    }
    function u(e, g) {
      for (var v = 0; v < e.length; ++v) {
        !0 === e[v](g) && (e.splice(v, 1), --v);
      }
    }
    function r(e, g) {
      z && !n.length && na(I);
      n.push(e, g);
    }
    function I() {
      var e = n, g;
      for (n = []; g = e.shift();) {
        u(g, e.shift());
      }
    }
    function p(e) {
      var g = e || event;
      e = A[g.type];
      var v = -1, w, N;
      for (y ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : K && (g.u = g.stopPropagation, g.stopPropagation = function() {
        N = !0;
      }); w = e[++v];) {
        w.i === this ? (this.g = w.h, this.g(g), this.g = T, this.g = q) : 7.2 > C && this === f && w.i === l && (l.g = w.h, l.g(g), delete l.g);
      }
      if (y) {
        return g.preventDefault = g.stopPropagation = q, g.returnValue;
      }
      K && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (H = !0), N && !H && g.u(), g.u = g.stopPropagation = q);
    }
    function R() {
      if (J) {
        var e = f.readyState;
        "loaded" === e || "complete" === e ? J() : na(R);
      }
    }
    function fa(e) {
      u(ia, e);
    }
    function E() {
      var e = 9 === h.offsetWidth;
      eb !== e && (r(Da, eb = e), G("p_cssAvailability:" + eb));
    }
    function ka() {
      !J && la && (lb(la), la = na(wa));
    }
    function wa() {
      la = 0;
      u(ob);
    }
    function b(e) {
      J || u(Va, e);
    }
    var a = l.matchMedia, h, n = [], z;
    vb.push(function() {
      x = q;
      h = V(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        z = !0;
        n.length && na(I);
      });
    });
    W = function(e, g, v, w) {
      if (pa) {
        e.addEventListener(g, v, w ? bc ? w : w.capture : !1);
      } else {
        var N = {i:e, h:v};
        w = A[g];
        var ba = "on" + g, Ka, fb;
        if (w) {
          for (Ka = w.length; fb = w[--Ka];) {
            if (fb.i === e && fb.h === v) {
              return;
            }
          }
          A[g].push(N);
        } else {
          A[g] = w = [N], X || (g = e[ba], "function" === typeof g && g !== p && w.unshift({i:e, h:g}));
        }
        X ? e.attachEvent(ba, p) : e[ba] = p;
      }
    };
    Y = function(e, g, v, w) {
      if (pa) {
        e.removeEventListener(g, v, w ? bc ? w : w.capture : !1);
      } else {
        w = A[g];
        g = "on" + g;
        var N, ba, Ka;
        if (w) {
          for (N = w.length; ba = w[--N];) {
            ba.i === e && (ba.h === v ? w.splice(N, 1) : Ka = !0);
          }
          Ka || (X ? e.detachEvent(g, p) : (e[g] = T, e[g] = null));
        }
      }
    };
    var A = {}, X = !1, K = 525.13 > bb, pa = !K && !Ca && l.addEventListener, H;
    K && Qa.addEventListener("click", function(e) {
      if (H) {
        return H = !1, e.preventDefault(), !1;
      }
    });
    za = function(e) {
      vb.push(e);
    };
    Ua = function(e) {
      ia.push(e);
    };
    var J = function(e) {
      Y(l, "load", J);
      J = q;
      u(vb, e);
    }, ia = [];
    419.3 >= bb ? na(R) : W(l, "load", J);
    (y || 1.8 > M) && W(l, "unload", fa);
    db = function(e) {
      Da.push(e);
    };
    var Da = [];
    za(function() {
      E();
      wb(E);
    });
    lc = function(e) {
      ca && ca.push(e);
    };
    var ca = [], Bb = 60 > M || Jb, Ea, Aa, qa;
    if (89 <= M || 89 <= Ra || Kb && 79 <= ac || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Ub = !0, x("(forced-colors:active)", function(e) {
        Ea = e.matches;
        r(ca, m());
        G("(forced-colors:active):" + ja);
      });
    } else {
      if (10 <= y || Ib || Kb && ac) {
        Ub = !0, x("(-ms-high-contrast:black-on-white)", function(e) {
          Ea = Aa = e.matches;
          ja !== m() && (r(ca, ja), G("(-ms-high-contrast:black-on-white):" + ja));
        }), x("(-ms-high-contrast:white-on-black)", function(e) {
          Ea = qa = e.matches;
          ja !== m() && (r(ca, ja), G("(-ms-high-contrast:white-on-black):" + ja));
        }), x("(-ms-high-contrast:active)", function(e) {
          Ea = e.matches;
          ja !== m() && (r(ca, ja), G("(-ms-high-contrast:active):" + ja));
        });
      } else {
        if (10 > y || Kb && (44 <= M || Jb)) {
          var Wa = function() {
            function e(w) {
              return "#ffffff" === w || "rgb(255,255,255)" === w;
            }
            var g = f.defaultView, v = g ? g.getComputedStyle(h, null) : h.currentStyle;
            g = (v && v.color || "").split(" ").join("");
            v = (v && v.backgroundColor || "").split(" ").join("");
            g && (Ea = "#123456" !== g && "rgb(18,52,86)" !== g, Aa = ("#000000" === g || "rgb(0,0,0)" === g) && e(v), qa = e(g) && ("#000000" === v || "rgb(0,0,0)" === v), ja !== m() && (G("(forced-colors-fallback):" + ja), r(ca, ja)));
          };
          db(function(e) {
            if (e) {
              return ha(h, "color", "#123456"), ha(h, "backgroundColor", "#123456"), Bb ? (Wa(), ca = q) : Wa() && wb(Wa), Wa = q, !0;
            }
          });
        } else {
          ca = m = q;
        }
      }
    }
    Tb = function(e) {
      da.push(e);
    };
    var da = [], Xa = 7.5 <= C && 8 > C;
    Xa && function() {
      for (var e = f.images, g = e.length, v; g;) {
        v = e[--g], v.s = v.src, Ja(v, "src");
      }
    }();
    za(function() {
      function e() {
        w && (N = v[--w], Xa && cb(N, "src", N.s), dc(g, Xa ? N.s : N.src));
      }
      function g(ba) {
        u(da, {m:N, o:ba});
        e();
      }
      var v = f.images || mb("img"), w = v.length;
      if (12 > C || 532 > bb) {
        e();
      } else {
        for (; w;) {
          var N = v[--w];
          r(da, {m:N, o:9 > y ? N.complete : 0 <= N.naturalWidth ? N.naturalWidth : N.width});
        }
      }
    });
    Sb = function(e) {
      ob.push(e);
    };
    var ob = [], la;
    W(l, "resize", ka);
    Ua(function() {
      la && clearTimeout(la);
      Y(l, "resize", ka);
    });
    Ab = function(e) {
      Va.push(e);
    };
    var Va = [], La = 0, Ma = 1 > M || 1.2 <= M && 1.8 > M || 7.2 >= C;
    Ma ? wb(function() {
      var e = l.scrollY || aa.scrollTop;
      La !== e && (La = e, b());
    }) : W(l, "scroll", b);
    Ua(function() {
      Ma || Y(l, "scroll", b);
    });
  })();
  var mc = 0;
  (function() {
    function m(p) {
      return p.styleSheet || p.sheet;
    }
    var x = 1 > M || 8 <= C && 9 > C, u = 7.2 <= C && 8 > C, r = !!y || !x && !u && function() {
      var p = V(Qa, "style"), R = !!m(p);
      R && (G("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), G("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), G("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), G("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), G("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText)));
      Ia(p);
      return R;
    }();
    G("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + r);
    var I = !r && bb && !x && !u && function() {
      var p = V(Qa, "style"), R;
      jc(p, "");
      if (R = !!m(p)) {
        G("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), G("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), G("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), G("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), G("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText));
      }
      Ia(p);
      return R;
    }();
    r || G("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + I);
    mc = x || u ? 1 : r || I ? 2 : 0;
    G("[CSSOM] p_CSSOM_canuse : " + mc);
  })();
  (function() {
    9 > y && za(function() {
      var m = V(aa, "div");
      oa(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      cc = 1 < m.offsetHeight;
      oa(m, "");
      Ia(m);
    });
    dc = function(m, x) {
      function u() {
        I || !p || r.complete ? (G("[imageTest] timer -> img.complete. img.width=" + r.width), na(m, !!r.width), r.onerror = r.onload = T, r = m = q) : (--p, na(u));
      }
      var r = new Image, I, p = 99;
      G("[imageTest] start.");
      r.onerror = function() {
        G("[imageTest] error!");
        I = !0;
      };
      r.onload = function() {
        G("[imageTest] onload.");
        I = !0;
      };
      r.src = x;
      na(u);
    };
  })();
  (function() {
    if (!Ub) {
      var m, x = function() {
        m = V(ab, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ra + "css/" + ub + "hc/" + Lb});
        (Mb || 5.5 <= y && 9 > y && cc) && Ta(aa, "jsCanRotate");
        x = q;
      };
      lc(function(u) {
        u && !m ? x() : m && (u ? ab.appendChild(m) : Ia(m));
      });
    }
    Tb(function(u) {
      var r = u.m;
      u = u.o;
      var I = xa(r);
      !Rb(I, "aBodyRoot") && u ? Ta(I, "img-loaded") : u || ya(r, "alt") || ha(r, "display", "none");
    });
    8 <= C && za(function() {
      for (var u = mb("a"), r = u.length, I = 0, p; I < r; ++I) {
        p = u[I], "-1" === ya(p, "tabindex") ? Ja(p, "tabindex") : ya(p, "href") && cb(p, "tabindex", "0");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.M, k = J.length, t, D, B, sa;
      if ("keydown" !== c.type || 13 === d) {
        for (; k;) {
          if (d = J[--k], d.l === this || d.j === this) {
            k = d.l;
            var F = t = d.j;
            if (d.C) {
              if (ha(k, "width", d.L), k.src = d.K, zb(F, d.F), k = d.A) {
                oa(k, d.D), zb(k, "caption jsCap");
              }
            } else {
              if (D = d.B) {
                for (delete d.B; t = xa(t);) {
                  if (Rb(t, "caption")) {
                    d.A = t, d.D = t.style.cssText, Ta(t, "jsCap");
                  } else {
                    var P = yb(t);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                t = t.offsetWidth - 4 - 1;
                1600 < t && (t = 1600);
                if (d.H) {
                  D = D.split("=");
                  P = D.length;
                  if (B = D[P - 1]) {
                    (sa = U(B.substr(1))) && B === "s" + sa ? D[P - 1] = "w" + t : D[P] = "w" + t;
                  }
                  D = D.join("=");
                } else {
                  if (0 < D.indexOf(".bp.blogspot.com/")) {
                    D = D.split("/");
                    P = D.length;
                    if (B = D[P - 2]) {
                      (sa = U(B.substr(1))) && B === "s" + sa ? D[P - 2] = "w" + t : D.splice(P - 1, 0, "w" + t);
                    }
                    D = D.join("/");
                  }
                }
                d.I = D;
              }
              d.F = kc(F);
              Ta(F, "jsPicaLarge");
              ha(k, "width", "");
              k.src = d.I;
              if (k = d.A) {
                oa(k, ""), Ta(k, "jsCapLarge");
              }
            }
            d.C = !d.C;
            break;
          }
        }
        x(c);
      }
    }
    function x(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function u(c) {
      for (var d = arguments, k = 0, t = d.length; k < t; ++k) {
        if (isFinite(d[k])) {
          return d[k];
        }
      }
      return 0;
    }
    function r(c) {
      var d = La;
      if (eb) {
        if (Ma && !d) {
          if (new Date - 0 < Ma) {
            return;
          }
          Ma = q;
        }
        7 === c ? (a("t"), e = 0) : (a("s"), e && (e = lb(e)), la = u(l.pageYOffset, l.scrollY, Aa.scrollTop, aa.scrollTop));
        d ? (La = p(q, d[0], d[1])) || (Ma = new Date - 0 + 99) : p();
        n();
      } else {
        La = q;
      }
    }
    function I() {
      a("w.blur");
    }
    function p(c, d, k) {
      function t(Ba) {
        F = Ba;
        if (Xa) {
          P = Xa + ":translate" + (Va ? "3D(0," : "(0,") + Ba + (Va ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== Ba) {
            if (!Ea && (Bb || ca)) {
              var Cb = qa.offsetWidth;
            }
            P = ca ? "position:fixed;width:" + Cb + "px;top:" + (Ba - D + Q) + "px" : Ea ? "top:" + Ba + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ba + "px";
            Bb && P && (P += ";" + (0 > Ba ? "clip:rect(" + -Ba + "px " + Cb + "px " + Z + "px 0)" : Ba + Z < pb ? "clip:rect(0 " + Cb + "px " + Z + "px 0)" : "clip:rect(0 " + Cb + "px " + (pb - Ba) + "px 0)"), 8 > y || (P = P.split(" ").join(",")));
          }
        }
      }
      var D = la, B = Wa, sa = qa.offsetTop === B.offsetTop, F = 0, P = "", ta = !0;
      if (sa) {
        for (var S = 0, Q = 0, ea = B; ea && ea !== aa;) {
          Q += ea.offsetTop, ea = ea.offsetParent;
        }
        F = ob;
        ea = u(l.innerHeight, Aa.offsetHeight);
        var Vb = B.offsetHeight, Z = da.offsetHeight, pb = Z < Vb ? Vb : Z, Na = D, gb = Na + ea, Db = Q, Eb = Db + pb, nc = Q + F, qc = nc + Z;
        B = Na < Db ? Db : Na;
        var Oa = Eb < gb ? Eb : gb, hb = Oa - B;
        Na = Eb <= Na;
        gb = gb <= Db;
        if (d !== q) {
          ta = Q + d;
          c = ta + k;
          if (Na || gb) {
            return ea <= k ? (d = Q, a("4.1.1")) : Na ? (d = Eb - k, a("4.1.2")) : (d = Q + k - ea, a("4.1.3")), Ma = q, l.scroll(u(l.pageXOffset, l.scrollX, Aa.scrollLeft, aa.scrollLeft), d), a("4.1.*"), La;
          }
          Z <= hb ? (S = 4, a("4.2")) : k <= hb ? Z - d <= hb ? (S = 2, a("4.3.1")) : B <= ta && c <= Oa ? B < Q + F && (S = 4, a("4.3.2")) : B <= ta && ta <= Oa ? (S = 5, a("4.3.3")) : B <= c && c <= Oa ? (S = 4, a("4.3.4")) : c < B ? (S = 4, a("4.3.5")) : (S = 5, a("4.3.6")) : (S = 4, a("4.4"));
          ta = q;
        } else {
          c !== q ? Z <= hb ? (S = 7, ta = !1, a("3.1")) : (F -= 60 * c, S = Oa - Q - Z, c = B - Q, F < S ? (F = S, a("3.2.1")) : c < F ? (F = c, a("3.2.2")) : a("3.2.3"), S = 6) : Vb <= Z || (Na ? (S = 1, a("2.2.1")) : gb ? a("2.2.2") : Z <= hb ? (S = 3, a("2.3")) : B < nc ? (S = 3, a("2.4.1")) : qc < Oa ? (S = 2, a("2.4.2")) : D < Q + Z - hb ? a("2.4.3") : (S = 2, a("2.4.4")));
        }
        switch(S) {
          case 0:
            t(0);
            break;
          case 1:
            t(pb - Z);
            break;
          case 2:
            t(Oa - Q - Z);
            break;
          case 3:
            t(B - Q);
            break;
          case 4:
            t(B - Q - d);
            break;
          case 5:
            t(Oa - Q - (d + k));
          case 6:
            t(F);
        }
        z(F, Z, Q, pb, ea, d || "-", k || "-");
      } else {
        z(F, "-", "-", "-", "-", "-", "-");
      }
      oa(da, P);
      ob = F;
      return sa && ta;
    }
    function R(c) {
      if (eb) {
        a("m");
        M && (la = u(l.pageYOffset, Aa.scrollTop, aa.scrollTop), n());
        var d = this !== c.target, k = d && u(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && k && p(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      for (var d = c.target, k = -1, t; t = ia[++k];) {
        nb(t, d) && R(c);
      }
    }
    function E(c) {
      if (eb) {
        var d = !!Xa || M, k = c.target || c.srcElement, t = 0;
        if (nb(da, k)) {
          a(c.type);
          W(k, "blur", b);
          for (c = k.offsetHeight; k && (d ? nb(da, k) : da !== k);) {
            t += k.offsetTop, k = k.offsetParent;
          }
          9 > y || C || 1 <= M && 1.3 > M ? (la = u(l.pageYOffset, l.scrollY, Aa.scrollTop, aa.scrollTop), p(q, t, c)) : (La = [t, c], e && lb(e), e = na(r, 7));
          A(t, c);
        }
      }
    }
    function ka() {
      ba = l.onerror;
      l.onerror = wa;
      var c = f.activeElement;
      N !== c && (N = c, E({target:c}));
      l.onerror = ba;
      ba = q;
    }
    function wa() {
      G("error!");
      l.onerror = ba;
      ba = N = q;
      return !0;
    }
    function b() {
      Y(this, "blur", b);
      A(0, 0);
    }
    function a(c) {
      qb && (Fb && (Fb = lb(Fb)), Fb = na(h, 0, 1400), qb.innerHTML += " " + c);
    }
    function h() {
      qb.innerHTML = "";
    }
    function n() {
      rb && (ha(rb, "top", (la / 10 | 0) + "px"), fb.innerHTML = " scrl:" + (la | 0));
    }
    function z(c, d, k, t, D, B, sa) {
      ib && (ha(ib, "top", ((c + k) / 10 | 0) + "px"), ha(ib, "height", (d / 10 | 0) + "px"), ha(rb, "height", (D / 10 | 0) + "px"), ha(Wb, "height", (aa.scrollHeight / 10 | 0) + "px"), Ka.textContent = "conY:" + k + "/sidY" + c + ", conH:" + t + "/sidH" + d + " focY:" + B + " focH:" + sa);
    }
    function A(c, d) {
      sb && (ha(sb, "top", (c / 10 | 0) + "px"), ha(sb, "height", (d / 10 | 0) + "px"));
    }
    function X() {
      Xb.call(Gb);
    }
    function K() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (cb(Gb, "id", "blog2slide-root"), jb[1].parentNode.insertBefore(tb, jb[1]), pa(), f.onkeydown = H) : Ya && (Ia(tb), Ja(Gb, "id"), Ja(Ya, "id"), Ya = f.onkeydown = q);
    }
    function pa() {
      Ya && Ja(Ya, "id");
      Za = 0 < Za ? Yb < Za ? Yb : Za : 0;
      Ya = jb[Za];
      cb(Ya, "id", "blog2slide-current");
    }
    function H(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Za, pa();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --Za, pa();
        }
      }
    }
    var J = [];
    $b || (Tb(function(c) {
      if (c.o && Ga) {
        c = c.m;
        var d = xa(c), k = "", t;
        if ("A" === yb(d) && 1 === ic(d).length) {
          var D = ya(d, "href"), B = D.split("?")[0].split("#")[0].split(".");
          B = (B[B.length - 1] || "").toLowerCase();
          if ((t = 0 < D.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + B + ".")) {
            W(d, "keydown", m), W(c, "click", m), W(d, "click", x), 9 > C || (k = c.offsetWidth - 4 + "px", ha(c, "width", k)), Ta(d, "jsPica"), J.push({j:d, K:c.src, L:k, B:D, l:c, H:t});
          }
        }
      }
    }), Ua(function(c, d) {
      for (c = -1; d = J[++c];) {
        Y(d.j, "keydown", m), Y(d.l, "click", m), Y(d.j, "click", x);
      }
    }));
    var ia = ["jsSidebarFixer1", "jsSidebarFixer2"], Da = M || Jb || Ib, ca = !(5 > O(16) || 5 > O(17) || 2.2 > O(21) || 6 > O(12) || ma(30) && 534 > bb || ma(32) || 7 > y || 9 > C || 1 > M), Bb = ca || 7 > y || 1 > M, Ea = 7.5 > C, Aa, qa, Wa, da, Xa = Mb, ob = 0, la = 0, Va, La, Ma, e, g = M && 0 <= L.conpare(Pa, "0.9.7"), v = M && 0 >= L.conpare(Pa, "0.9.4");
    oc || $b || (db(function(c) {
      if (c) {
        if (!Ga) {
          return !0;
        }
        c = -1;
        var d;
        Aa = "CSS1Compat" !== f.compatMode ? aa : Qa || aa;
        qa = Ha("jsSide");
        Wa = Ga;
        if (!qa) {
          return !0;
        }
        Ab(r);
        Sb(r);
        da = Pb(Ob(qa), "div", {id:"jsSidebarFixer"});
        W(l, "blur", I);
        for (8 > C || v || 6 > y || (y || Ca ? W(da, "focusin", E) : Da ? W(f, "focus", E, {capture:!0, passive:!1}) : W(da, "DOMFocusIn", E, !1)); 1 < Sa(qa).length;) {
          da.appendChild(Sa(qa)[1]);
        }
        for (g && !kb && W(f, "DOMMouseScroll", fa, !1); d = ia[++c];) {
          var k = Ha(d);
          k.onwheel !== q ? W(k, "wheel", R, {passive:!1}) : kb ? W(k, "MozMousePixelScroll", R, !1) : g ? ia[c] = Ha(d) : (k.onmousewheel !== q || 9 <= C) && W(k, "mousewheel", R, !1);
        }
        y || Ib || 2 > Ra || (Va = Fa.perspective !== q || Fa["-moz-perspective"] !== q || Fa["-webkit-perspective"] !== q);
        r();
        return !0;
      }
    }), Ua(function() {
      var c = -1, d;
      if (g && !kb) {
        Y(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; d = ia[++c];) {
          d = Ha(d), d.onwheel !== q ? Y(d, "wheel", R, {passive:!1}) : kb ? Y(d, "MozMousePixelScroll", R, !1) : (d.onmousewheel !== q || 9 <= C) && Y(d, "mousewheel", R, !1);
        }
      }
      Y(l, "blur", I);
      8 > C || v || 6 > y || (y || Ca ? Y(da, "focusin", E, !1) : Da ? Y(f, "focus", E, {capture:!0, passive:!1}) : Y(da, "DOMFocusIn", E, !1));
      w && clearInterval(w);
    }));
    var w, N, ba;
    6 > y && db(function(c) {
      if (!Ga) {
        return !0;
      }
      c ? w = setInterval(ka, 333) : w && (clearInterval(w), w = 0);
    });
    if (ca) {
      var Ka, fb, qb, Wb, rb, ib, sb, Fb;
      db(function(c) {
        if (c) {
          if (!Ga) {
            return !0;
          }
          c = V(aa, "div");
          oa(c, "position:fixed;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          V(c, "div", q, Mb ? "transform" + (Va ? "3D" : "") : ca ? "pos:fixed" : "pos:absolute");
          var d = V(c, "div");
          Ka = V(d, "span");
          fb = V(d, "span");
          qb = V(c, "div");
          Wb = V(c, "div");
          oa(Wb, "position:absolute;left:0;top:0;width:54px;background:#242");
          ib = V(c, "div");
          oa(ib, "position:absolute;left:0;width:54px;background:#363");
          rb = V(c, "div");
          oa(rb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
          sb = V(ib, "div");
          oa(sb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
          return !0;
        }
      });
    }
    za(function() {
      function c(sa, F, P, ta) {
        var S = ta ? "div" : "cite";
        if (0 === F.indexOf("urn:isbn:")) {
          F = F.substr(9).toUpperCase().split("-").join("");
          if (13 === F.length) {
            F = F.toString().slice(3, -1);
            for (var Q = 0, ea = 0; 9 > ea; ea++) {
              Q += (F.charAt(ea) - 0) * (10 - ea);
            }
            Q = (11 - Q % 11) % 11;
            Q = 10 === Q ? "X" : Q.toString();
            F += Q;
          }
          10 === F.length && (F = "//www.amazon.co.jp/exec/obidos/ASIN/" + F + "/itozyun-22/ref=nosim/");
        }
        P = ta ? Pb(Ob(k), S, {className:P}) : V(k, S, {className:P});
        V(P, "a", 0 === F.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:F, J:C ? "0" : q} : {G:!0, href:F, J:C ? "0" : q}, sa);
      }
      if (Ga) {
        for (var d = Nb(Ga, "blockquote"), k, t = -1, D, B; k = d[++t];) {
          D = ya(k, "title"), B = ya(k, "cite"), D && B ? (Ja(k, "title"), c(D, B, "js-bqLink", !0)) : B && (Ja(k, "cite"), c(l.decodeURI ? decodeURI(B) : B, B, "js-bqCite"));
        }
      }
    });
    var Xb, Gb, tb, Ya, jb, Za, Yb;
    za(function() {
      var c = Ha("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== q ? "f" : f.onmozfullscreenchange !== q ? "mozF" : f.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Xb = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || Xb ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', W(c.firstChild, "click", X), c = xa(c), Gb = xa(c), jb = Nb(c, "section"), tb = f.createElement("h1"), tb.innerHTML = mb("h1")[0].innerHTML, Yb = jb.length, jb.splice(0, 0, tb), 0 !== d ? W(f, d + "ullscreenchange", K) : y ? W(f, "MSFullscreenChange", K, !1) : Sb(K)) : Ia(c);
      }
    });
  })();
  Hb = f.scripts || mb("script");
  var ra = Hb[Hb.length - 1].src.split("/");
  --ra.length;
  "js" === ra[ra.length - 1] && --ra.length;
  (ra = ra.join("/")) && (ra += "/");
  G("[p_assetUrl] " + ra);
  var oc = pc || "1" === ya(aa, "mob");
  ub = (oc ? "mb" : "pc") + "/";
  za(function() {
    var m;
    (m = Ha("logger")) || alert("#logger not found!");
    for (m ? (G = function(x) {
      V(m, "P", q, x);
    }, Zb = function(x) {
      V(m, "P", {style:{color:"red"}}, x);
    }, l.onerror = function(x, u, r) {
      Zb(x + ", " + u + ", " + r);
      return !0;
    }) : l.console ? G = console.log : G = T; xb.length;) {
      G(xb.shift());
    }
    xb = null;
  });
  6.1 > va && Ab(ec);
  Ua(fc);
  6.1 > va && Ab(gc);
  Ua(hc);
  10 > y && (11 !== $a || 5 !== y) || (9 > C || 1 > M || !Ca && !l.addEventListener ? f.write('<link href="' + ra + "css/" + ub + Lb + '" rel="stylesheet"' + (8 > C ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > C || 1.5 > M || 532 >= bb || 2 > Ra || 4 <= Ra && 8 > Ra) && za(function() {
    V(ab, "link", {href:ra + "css/" + ub + Lb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

