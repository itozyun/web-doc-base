var D, Zb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var M = this[this.length - 1];
  --this.length;
  return M;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var M = arguments, l = 0, T = M.length, f = this.length; l < T; ++l) {
    this[f + l] = M[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var M = this[0], l = 1, T = this.length; l < T; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return M;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var M = arguments, l = M.length, T = this.length += l - 1, f = T; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = M[f];
  }
  return T;
});
Array.prototype.splice || (Array.prototype.splice = function(M, l) {
  var T = arguments, f = T.length - 2 - l, Za = this.slice(M, M + l), xa;
  if (0 < f) {
    var U = this.length - 1;
    for (xa = M + l; U >= xa; --U) {
      this[U + f] = this[U];
    }
  } else {
    if (0 > f) {
      U = M + l;
      for (xa = this.length; U < xa; ++U) {
        this[U + f] = this[U];
      }
      this.length += f;
    }
  }
  U = 2;
  for (xa = T.length; U < xa; ++U) {
    this[U - 2 + M] = T[U];
  }
  return Za;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(M, l) {
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
    if (this[f] === M) {
      return f;
    }
  }
  return -1;
});
(function(M, l, T, f, Za, xa, U, Ib, q) {
  function O(m) {
    if (M[0] === m) {
      return Ra === Ra + "" ? U(Ra) : Ra;
    }
  }
  function la(m) {
    var A = M[3];
    if (M[2] === m) {
      return A === A + "" ? U(A) : A;
    }
  }
  var Z = f.body, Ha = Z.style, Ia, $a, Ja, Ra = M[1], y = O(2) || O(3), Ca = O(7), Jb = O(5) || O(6), E = O(8) || O(9), N = O(11) || O(12), mb = N && 0 <= M.conpare(Ra, "1.9.1"), Kb = O(13), ab = O(15);
  xa = O(16) || O(17);
  var $b = O(10) || O(25), Sa = O(20) || O(22);
  Sa || O(23) || O(21) || O(24);
  var ac = Sa && U(Za.userAgent.split("Edg/")[1]);
  Za = U(Za.appVersion.split("Trident/")[1]) + 4;
  var Lb = la(35) || la(36) || la(37), bc = !y && !Ca && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Mb = (Ca ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > E ? "opr70" : 8 > E ? "opr72" : 9.5 > E ? "opr" + (E | 0) : N && !mb ? 1.3 <= N ? "gck190" : 1 <= N ? "gck121" : "gck097" : "modern") + ".css", vb = "", rc = la(1) || la(2) || la(3) || 
  la(4) || la(8) || la(9) || la(10), cc, Nb = Ha.transform !== q ? "transform" : Ha["-o-transform"] !== q ? "-o-transform" : Ha["-ms-transform"] !== q ? "-ms-transform" : Ha.MozTransform !== q ? "-moz-transform" : Ha["-webkit-transform"] !== q ? "-webkit-transform" : "", wb = [], dc, oa, nb, xb, yb = [], ec, fc, gc, hc;
  (function() {
    function m() {
      for (var a, g = 0, n = new Date - 0; g < F.length;) {
        n < F[0].t ? ++g : (a = F.splice(g, 1)[0], a.f(a.p));
      }
      b = F.length ? setTimeout(m, ka) : 0;
    }
    function A() {
      for (var a, g = 0; g < J.length; ++g) {
        a = J[g], a.f();
      }
    }
    function v() {
      fa && (fa = clearInterval(fa));
    }
    function r() {
      b && (b = clearTimeout(b));
    }
    D = function(a) {
      yb.push(a);
    };
    xb = function(a) {
      J.length || (fa = setInterval(A, p));
      J.push({f:a, v:++R});
      return R;
    };
    ec = function() {
      fa && (v(), fa = setInterval(A, p));
    };
    fc = v;
    var J = [], p = 500, R = 0, fa;
    if (5 > y || Ca) {
      l._wdb_onlooptimer = A, A = "_wdb_onlooptimer()";
    }
    oa = function(a, g, n) {
      F.length || (b = setTimeout(m, ka));
      F.push({f:a, p:g, v:++pa, t:new Date - 0 + (ka < n ? n : ka)});
      return pa;
    };
    nb = function(a) {
      for (var g = F.length, n; n = F[--g];) {
        if (n.v === a) {
          F.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    gc = function() {
      b && (r(), b = setTimeout(m, ka));
    };
    hc = r;
    var F = [], ka = 16, pa = 0, b;
    if (5 > y || Ca) {
      l._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Ka, ob, Ob, ma, La, ic, Pb, V, zb, jc, kc, Ma, pb, Ab, ya, bb, Na, Qb, lc, Bb, Rb, Ta, ha, ca;
  (function() {
    function m(b, a, g) {
      var n = ["<", b], z = 1, w, X;
      if (a) {
        for (w in a) {
          var L = a[w];
          if (null != L && "" !== L) {
            if ("style" === w) {
              n[++z] = ' style="';
              for (X in L) {
                for (var qa = ++z, I, K = [], ia = X.split(""), Da = ia.length; Da;) {
                  I = ia[--Da], "A" <= I && "Z" >= I && (I = "-" + I.toLowerCase()), K[Da] = I;
                }
                n[qa] = K.join("") + ":" + L[X] + ";";
              }
              n[++z] = '"';
            } else {
              "className" === w && (w = "class"), n[++z] = " " + w + '="' + L + '"';
            }
          }
        }
      }
      n[++z] = ">";
      null != g && (F && "font" !== b ? n[++z] = "<FONT>" + g + "</FONT>" : n[++z] = g);
      n[++z] = "</" + b + ">";
      return n.join("");
    }
    function A(b) {
      return v(f, b);
    }
    function v(b, a) {
      var g = "*" === a && 6 > y ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], z = 0, w;
      for (w = g.length; z < w; ++z) {
        n[z] = g[z];
      }
      return n;
    }
    function r(b) {
      return F ? b.parentElement : b.parentNode;
    }
    function J(b, a, g, n, z, w) {
      if (F) {
        var X = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", L = La(2 > b ? ma(a) : a);
        L = 2 > b ? L.indexOf(a) + b : L.length;
        a.insertAdjacentHTML(X, m(g, n, z));
        return La(a)[L];
      }
      a = ka ? f.createElement(m(g, n)) : w ? f.createElementNS("http://www.w3.org/2000/svg", g) : f.createElement(g);
      if (n && !ka) {
        for (X in n) {
          if ((g = n[X]) || 0 === g) {
            switch(X) {
              case "class":
              case "className":
                Bb(a, g);
                break;
              case "style":
                b = a.style;
                for (L in g) {
                  b[L] = g[L];
                }
                break;
              default:
                bb(a, X, g);
            }
          }
        }
      }
      pa || null != z && p(a, z);
      return a;
    }
    function p(b, a) {
      if (F) {
        return J(2, b, "font", q, a);
      }
      var g = f.createTextNode("" + a);
      b.appendChild(g);
      return g;
    }
    function R(b, a) {
      9 > y ? b.className = a : b.setAttribute("class", a);
    }
    function fa(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var F = 5 > y;
    Ia = A("html")[0];
    $a = A("head")[0];
    Ka = function(b) {
      return l[b] || f[b] || f.getElementById(b);
    };
    ob = A;
    Ob = v;
    ma = r;
    La = function(b) {
      b = F ? b.children : b.childNodes;
      for (var a = [], g = b.length; g;) {
        a[--g] = b[g];
      }
      return a;
    };
    ic = function(b) {
      var a = !(7.03 < E && 7.2 > E) && b.children;
      b = a ? a : b.childNodes;
      for (var g = [], n = b.length, z = -1, w; n;) {
        if (w = b[--n], a || 1 === w.nodeType) {
          F && "FONT" === w.tagName || (g[++z] = w);
        }
      }
      return g;
    };
    Pb = function(b) {
      return F ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    V = function(b, a, g, n, z) {
      a = J(2, b, a, g, n, z);
      F || (b.appendChild(a), pa && null != n && p(a, n));
      return a;
    };
    zb = function(b, a, g, n, z) {
      a = J(0, b, a, g, n, z);
      F || (r(b).insertBefore(a, b), pa && null != n && p(a, n));
      return a;
    };
    jc = function(b, a, g, n, z) {
      a = J(1, b, a, g, n, z);
      var w;
      F || ((w = b.nextSibling) ? ma(w).insertBefore(a, w) : ma(b).appendChild(a), pa && null != n && p(a, n));
      return a;
    };
    kc = p;
    Ma = function(b) {
      ma(b) ? F ? b.outerHTML = "" : ma(b).removeChild(b) : D("[DOM] p_DOM_remove(), No parentNode!");
    };
    pb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Ia;) {
        if (a = ma(a), b === a) {
          return !0;
        }
      }
    };
    var ka = 9 > y, pa = 9 > y;
    Ab = function(b) {
      return b.tagName.toUpperCase();
    };
    ya = function(b, a) {
      return b.getAttribute(a) || "";
    };
    bb = function(b, a, g) {
      b.setAttribute(a, g);
    };
    Na = function(b, a) {
      b.removeAttribute(a);
    };
    Qb = function(b, a) {
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    };
    lc = function(b) {
      return b.className;
    };
    Bb = R;
    Rb = fa;
    Ta = function(b, a) {
      var g;
      if (!fa(b, a)) {
        if (g = b.className) {
          a = " " + a;
        }
        R(b, g + a);
      }
    };
    ha = function(b, a, g) {
      b.style[a] = g;
    };
    ca = function(b, a) {
      var g = -1, n, z;
      if (5.5 > y) {
        if (a) {
          for (n = a.split(";"); z = n[++g];) {
            var w = z.split(":");
            b.style[w[0]] = z.substr(w[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > E || 1 > N ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    wb.splice(0, 0, function() {
      function b(L) {
        L = La(L);
        for (var qa = L.length, I, K, ia; qa;) {
          if (I = L[--qa], K = I.nodeType, 8 === K) {
            a && w.push(I);
          } else {
            if (1 === K) {
              switch(K = Ab(I), "/" === K.charAt(0) && (K = K.substr(1), X[K] = !0), K) {
                case "STYLE":
                  if (8 <= E && 9 > E) {
                    break;
                  }
                case "LINK":
                  F || g || pb($a, I) || z.push(I);
                  break;
                case "META":
                  K = ya(I, "name") || ya(I, "property");
                  for (ia = n.length; ia;) {
                    if (0 === K.indexOf(n[--ia])) {
                      w.push(I);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Qb(I, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Qb(I, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  w.push(I);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || w.push(I);
                  break;
                default:
                  X[K] ? w.push(I) : La(I).length && b(I);
              }
            }
          }
        }
        for (; z[0];) {
          $a.appendChild(z.pop());
        }
        for (; w[0];) {
          Ma(w.pop());
        }
      }
      Ja = Ka("jsMain");
      var a = !(8 > E || 5 > y || Ca || .9 > N), g = 7 > y, n = ["og:", "twitter:", "fb:"], z = [], w = [], X = {};
      b(Ia);
    });
  })();
  var W, aa, za, Ua, Sb, Cb, cb, Tb, mc, db, ja, Ub;
  (function() {
    function m() {
      return ja = Ea ? Aa ? 2 : eb ? 3 : 1 : 0;
    }
    function A(e, k) {
      cb(function(t) {
        if (t) {
          return t = a(e), k(t), t.addListener(k), !0;
        }
      });
    }
    function v(e, k) {
      for (var t = 0; t < e.length; ++t) {
        !0 === e[t](k) && (e.splice(t, 1), --t);
      }
    }
    function r(e, k) {
      z && !n.length && oa(J);
      n.push(e, k);
    }
    function J() {
      var e = n, k;
      for (n = []; k = e.shift();) {
        v(k, e.shift());
      }
    }
    function p(e) {
      var k = e || event;
      e = w[k.type];
      var t = -1, x, B;
      for (y ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : L && (k.u = k.stopPropagation, k.stopPropagation = function() {
        B = !0;
      }); x = e[++t];) {
        x.i === this ? (this.g = x.h, this.g(k), this.g = T, this.g = q) : 7.2 > E && this === f && x.i === l && (l.g = x.h, l.g(k), delete l.g);
      }
      if (y) {
        return k.preventDefault = k.stopPropagation = q, k.returnValue;
      }
      L && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (I = !0), B && !I && k.u(), k.u = k.stopPropagation = q);
    }
    function R() {
      if (K) {
        var e = f.readyState;
        "loaded" === e || "complete" === e ? K() : oa(R);
      }
    }
    function fa(e) {
      v(ia, e);
    }
    function F() {
      var e = 9 === g.offsetWidth;
      db !== e && (r(Da, db = e), D("p_cssAvailability:" + db));
    }
    function ka() {
      !K && Fa && (nb(Fa), Fa = oa(pa));
    }
    function pa() {
      Fa = 0;
      v(fb);
    }
    function b(e) {
      K || v(Ga, e);
    }
    var a = l.matchMedia, g, n = [], z;
    wb.push(function() {
      A = q;
      g = V(Z, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        z = !0;
        n.length && oa(J);
      });
    });
    W = function(e, k, t, x) {
      if (qa) {
        e.addEventListener(k, t, x ? bc ? x : x.capture : !1);
      } else {
        var B = {i:e, h:t};
        x = w[k];
        var Y = "on" + k, ra, gb;
        if (x) {
          for (ra = x.length; gb = x[--ra];) {
            if (gb.i === e && gb.h === t) {
              return;
            }
          }
          w[k].push(B);
        } else {
          w[k] = x = [B], X || (k = e[Y], "function" === typeof k && k !== p && x.unshift({i:e, h:k}));
        }
        X ? e.attachEvent(Y, p) : e[Y] = p;
      }
    };
    aa = function(e, k, t, x) {
      if (qa) {
        e.removeEventListener(k, t, x ? bc ? x : x.capture : !1);
      } else {
        x = w[k];
        k = "on" + k;
        var B, Y, ra;
        if (x) {
          for (B = x.length; Y = x[--B];) {
            Y.i === e && (Y.h === t ? x.splice(B, 1) : ra = !0);
          }
          ra || (X ? e.detachEvent(k, p) : (e[k] = T, e[k] = null));
        }
      }
    };
    var w = {}, X = !1, L = 525.13 > ab, qa = !L && !Ca && l.addEventListener, I;
    L && Ia.addEventListener("click", function(e) {
      if (I) {
        return I = !1, e.preventDefault(), !1;
      }
    });
    za = function(e) {
      wb.push(e);
    };
    Ua = function(e) {
      ia.push(e);
    };
    var K = function(e) {
      aa(l, "load", K);
      K = q;
      v(wb, e);
    }, ia = [];
    419.3 >= ab ? oa(R) : W(l, "load", K);
    (y || 1.8 > N) && W(l, "unload", fa);
    cb = function(e) {
      Da.push(e);
    };
    var Da = [];
    za(function() {
      F();
      xb(F);
    });
    mc = function(e) {
      sa && sa.push(e);
    };
    var sa = [], Va = 60 > N || Kb, Ea, eb, Aa;
    if (89 <= N || 89 <= Sa || Lb && 79 <= ac || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Ub = !0, A("(forced-colors:active)", function(e) {
        Ea = e.matches;
        r(sa, m());
        D("(forced-colors:active):" + ja);
      });
    } else {
      if (10 <= y || Jb || Lb && ac) {
        Ub = !0, A("(-ms-high-contrast:black-on-white)", function(e) {
          Ea = eb = e.matches;
          ja !== m() && (r(sa, ja), D("(-ms-high-contrast:black-on-white):" + ja));
        }), A("(-ms-high-contrast:white-on-black)", function(e) {
          Ea = Aa = e.matches;
          ja !== m() && (r(sa, ja), D("(-ms-high-contrast:white-on-black):" + ja));
        }), A("(-ms-high-contrast:active)", function(e) {
          Ea = e.matches;
          ja !== m() && (r(sa, ja), D("(-ms-high-contrast:active):" + ja));
        });
      } else {
        if (10 > y || Lb && (1.8 <= N || Kb)) {
          var na = function() {
            function e(B, Y) {
              D("isBlack:" + B);
              return "#000000" === B || "rgb(0,0,0)" === B || Y && "transparent" === B;
            }
            function k(B, Y) {
              D("isWhite:" + B);
              return "#ffffff" === B || "rgb(255,255,255)" === B || Y && "transparent" === B;
            }
            var t = f.defaultView, x = t ? t.getComputedStyle(g, null) : g.currentStyle;
            t = (x && x.color || "").split(" ").join("");
            x = (x && x.backgroundColor || "").split(" ").join("");
            t && (Ea = "#123456" !== t && "rgb(18,52,86)" !== t, eb = e(t) && k(x, !0), Aa = k(t) && e(x, !0), ja !== m() && (D("(forced-colors-fallback):" + ja), r(sa, ja)));
          };
          cb(function(e) {
            if (e) {
              return ha(g, "color", "#123456"), ha(g, "backgroundColor", "#123456"), Va ? (na(), sa = q) : na() && xb(na), na = q, !0;
            }
          });
        } else {
          sa = m = q;
        }
      }
    }
    Tb = function(e) {
      hb.push(e);
    };
    var hb = [], da = 7.5 <= E && 8 > E;
    da && function() {
      for (var e = f.images, k = e.length, t; k;) {
        t = e[--k], t.s = t.src, Na(t, "src");
      }
    }();
    za(function() {
      function e() {
        x && (B = t[--x], da && bb(B, "src", B.s), dc(k, da ? B.s : B.src));
      }
      function k(Y) {
        v(hb, {m:B, o:Y});
        e();
      }
      var t = f.images || ob("img"), x = t.length;
      if (12 > E || 532 > ab) {
        e();
      } else {
        for (; x;) {
          var B = t[--x];
          r(hb, {m:B, o:9 > y ? B.complete : 0 <= B.naturalWidth ? B.naturalWidth : B.width});
        }
      }
    });
    Sb = function(e) {
      fb.push(e);
    };
    var fb = [], Fa;
    W(l, "resize", ka);
    Ua(function() {
      Fa && clearTimeout(Fa);
      aa(l, "resize", ka);
    });
    Cb = function(e) {
      Ga.push(e);
    };
    var Ga = [], Wa = 0, Oa = 1 > N || 1.2 <= N && 1.8 > N || 7.2 >= E;
    Oa ? xb(function() {
      var e = l.scrollY || Z.scrollTop;
      Wa !== e && (Wa = e, b());
    }) : W(l, "scroll", b);
    Ua(function() {
      Oa || aa(l, "scroll", b);
    });
  })();
  var nc = 0;
  (function() {
    function m(p) {
      return p.styleSheet || p.sheet;
    }
    var A = 1 > N || 8 <= E && 9 > E, v = 7.2 <= E && 8 > E, r = !!y || !A && !v && function() {
      var p = V(Ia, "style"), R = !!m(p);
      R && (D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText)));
      Ma(p);
      return R;
    }();
    D("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + r);
    var J = !r && ab && !A && !v && function() {
      var p = V(Ia, "style"), R;
      kc(p, "");
      if (R = !!m(p)) {
        D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText));
      }
      Ma(p);
      return R;
    }();
    r || D("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + J);
    nc = A || v ? 1 : r || J ? 2 : 0;
    D("[CSSOM] p_CSSOM_canuse : " + nc);
  })();
  (function() {
    9 > y && za(function() {
      var m = V(Z, "div");
      ca(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      cc = 1 < m.offsetHeight;
      ca(m, "");
      Ma(m);
    });
    dc = function(m, A) {
      function v() {
        J || !p || r.complete ? (D("[imageTest] timer -> img.complete. img.width=" + r.width), oa(m, !!r.width), r.onerror = r.onload = T, r = m = q) : (--p, oa(v));
      }
      var r = new Image, J, p = 99;
      D("[imageTest] start.");
      r.onerror = function() {
        D("[imageTest] error!");
        J = !0;
      };
      r.onload = function() {
        D("[imageTest] onload.");
        J = !0;
      };
      r.src = A;
      oa(v);
    };
  })();
  (function() {
    if (!Ub) {
      var m, A = function() {
        m = V($a, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + vb + "hc/" + Mb});
        if (Nb || 5.5 <= y && 9 > y && cc) {
          Ta(Z, "jsCanRotate"), D("jsCanRotate!");
        }
        A = q;
      };
      mc(function(v) {
        v && !m ? A() : m && (v ? $a.appendChild(m) : Ma(m));
      });
    }
    Tb(function(v) {
      var r = v.m;
      v = v.o;
      var J = ma(r);
      !Rb(J, "aBodyRoot") && v ? Ta(J, "img-loaded") : v || ya(r, "alt") || ha(r, "display", "none");
    });
    8 <= E && za(function() {
      for (var v = ob("a"), r = v.length, J = 0, p; J < r; ++J) {
        p = v[J], "-1" === ya(p, "tabindex") ? Na(p, "tabindex") : ya(p, "href") && bb(p, "tabindex", "0");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.M, h = K.length, u, G, C, va;
      if ("keydown" !== c.type || 13 === d) {
        for (; h;) {
          if (d = K[--h], d.l === this || d.j === this) {
            h = d.l;
            var H = u = d.j;
            if (d.C) {
              if (ha(h, "width", d.L), h.src = d.K, Bb(H, d.F), h = d.A) {
                ca(h, d.D), Bb(h, "caption jsCap");
              }
            } else {
              if (G = d.B) {
                for (delete d.B; u = ma(u);) {
                  if (Rb(u, "caption")) {
                    d.A = u, d.D = u.style.cssText, Ta(u, "jsCap");
                  } else {
                    var P = Ab(u);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                u = u.offsetWidth - 4 - 1;
                1600 < u && (u = 1600);
                if (d.H) {
                  G = G.split("=");
                  P = G.length;
                  if (C = G[P - 1]) {
                    (va = U(C.substr(1))) && C === "s" + va ? G[P - 1] = "w" + u : G[P] = "w" + u;
                  }
                  G = G.join("=");
                } else {
                  if (0 < G.indexOf(".bp.blogspot.com/")) {
                    G = G.split("/");
                    P = G.length;
                    if (C = G[P - 2]) {
                      (va = U(C.substr(1))) && C === "s" + va ? G[P - 2] = "w" + u : G.splice(P - 1, 0, "w" + u);
                    }
                    G = G.join("/");
                  }
                }
                d.I = G;
              }
              d.F = lc(H);
              Ta(H, "jsPicaLarge");
              ha(h, "width", "");
              h.src = d.I;
              if (h = d.A) {
                ca(h, ""), Ta(h, "jsCapLarge");
              }
            }
            d.C = !d.C;
            break;
          }
        }
        A(c);
      }
    }
    function A(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function v(c) {
      for (var d = arguments, h = 0, u = d.length; h < u; ++h) {
        if (isFinite(d[h])) {
          return d[h];
        }
      }
      return 0;
    }
    function r(c) {
      var d = Oa;
      if (db) {
        if (e && !d) {
          if (new Date - 0 < e) {
            return;
          }
          e = q;
        }
        7 === c ? (a("t"), k = 0) : (a("s"), k && (k = nb(k)), Ga = v(l.pageYOffset, l.scrollY, Aa.scrollTop, Z.scrollTop));
        d ? (Oa = p(q, d[0], d[1])) || (e = new Date - 0 + 99) : p();
        n();
      } else {
        Oa = q;
      }
    }
    function J() {
      a("w.blur");
    }
    function p(c, d, h) {
      function u(Ba) {
        H = Ba;
        if (fb) {
          P = fb + ":translate" + (Wa ? "3D(0," : "(0,") + Ba + (Wa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== Ba) {
            if (!eb && (Ea || Va)) {
              var Db = na.offsetWidth;
            }
            P = Va ? "position:fixed;width:" + Db + "px;top:" + (Ba - G + Q) + "px" : eb ? "top:" + Ba + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ba + "px";
            Ea && P && (P += ";" + (0 > Ba ? "clip:rect(" + -Ba + "px " + Db + "px " + ba + "px 0)" : Ba + ba < qb ? "clip:rect(0 " + Db + "px " + ba + "px 0)" : "clip:rect(0 " + Db + "px " + (qb - Ba) + "px 0)"), 8 > y || (P = P.split(" ").join(",")));
          }
        }
      }
      var G = Ga, C = hb, va = na.offsetTop === C.offsetTop, H = 0, P = "", wa = !0;
      if (va) {
        for (var S = 0, Q = 0, ea = C; ea && ea !== Z;) {
          Q += ea.offsetTop, ea = ea.offsetParent;
        }
        H = Fa;
        ea = v(l.innerHeight, Aa.offsetHeight);
        var Vb = C.offsetHeight, ba = da.offsetHeight, qb = ba < Vb ? Vb : ba, Pa = G, ib = Pa + ea, Eb = Q, Fb = Eb + qb, oc = Q + H, sc = oc + ba;
        C = Pa < Eb ? Eb : Pa;
        var Qa = Fb < ib ? Fb : ib, jb = Qa - C;
        Pa = Fb <= Pa;
        ib = ib <= Eb;
        if (d !== q) {
          wa = Q + d;
          c = wa + h;
          if (Pa || ib) {
            return ea <= h ? (d = Q, a("4.1.1")) : Pa ? (d = Fb - h, a("4.1.2")) : (d = Q + h - ea, a("4.1.3")), e = q, l.scroll(v(l.pageXOffset, l.scrollX, Aa.scrollLeft, Z.scrollLeft), d), a("4.1.*"), Oa;
          }
          ba <= jb ? (S = 4, a("4.2")) : h <= jb ? ba - d <= jb ? (S = 2, a("4.3.1")) : C <= wa && c <= Qa ? C < Q + H && (S = 4, a("4.3.2")) : C <= wa && wa <= Qa ? (S = 5, a("4.3.3")) : C <= c && c <= Qa ? (S = 4, a("4.3.4")) : c < C ? (S = 4, a("4.3.5")) : (S = 5, a("4.3.6")) : (S = 4, a("4.4"));
          wa = q;
        } else {
          c !== q ? ba <= jb ? (S = 7, wa = !1, a("3.1")) : (H -= 60 * c, S = Qa - Q - ba, c = C - Q, H < S ? (H = S, a("3.2.1")) : c < H ? (H = c, a("3.2.2")) : a("3.2.3"), S = 6) : Vb <= ba || (Pa ? (S = 1, a("2.2.1")) : ib ? a("2.2.2") : ba <= jb ? (S = 3, a("2.3")) : C < oc ? (S = 3, a("2.4.1")) : sc < Qa ? (S = 2, a("2.4.2")) : G < Q + ba - jb ? a("2.4.3") : (S = 2, a("2.4.4")));
        }
        switch(S) {
          case 0:
            u(0);
            break;
          case 1:
            u(qb - ba);
            break;
          case 2:
            u(Qa - Q - ba);
            break;
          case 3:
            u(C - Q);
            break;
          case 4:
            u(C - Q - d);
            break;
          case 5:
            u(Qa - Q - (d + h));
          case 6:
            u(H);
        }
        z(H, ba, Q, qb, ea, d || "-", h || "-");
      } else {
        z(H, "-", "-", "-", "-", "-", "-");
      }
      ca(da, P);
      Fa = H;
      return va && wa;
    }
    function R(c) {
      if (db) {
        a("m");
        N && (Ga = v(l.pageYOffset, Aa.scrollTop, Z.scrollTop), n());
        var d = this !== c.target, h = d && v(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && h && p(9 >= h ? -9 >= h ? -3 : h : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      for (var d = c.target, h = -1, u; u = ia[++h];) {
        pb(u, d) && R(c);
      }
    }
    function F(c) {
      if (db) {
        var d = !!fb || N, h = c.target || c.srcElement, u = 0;
        if (pb(da, h)) {
          a(c.type || "ie5focus");
          W(h, "blur", b);
          for (c = h.offsetHeight; h && (d ? pb(da, h) : da !== h);) {
            u += h.offsetTop, h = h.offsetParent;
          }
          sa ? (Oa = [u, c], k && nb(k), k = oa(r, 7)) : (Ga = v(l.pageYOffset, l.scrollY, Aa.scrollTop, Z.scrollTop), p(q, u, c));
          w(u, c);
        }
      }
    }
    function ka() {
      ra = l.onerror;
      l.onerror = pa;
      var c = f.activeElement;
      Y !== c && (Y = c, F({target:c}));
      l.onerror = ra;
      ra = q;
    }
    function pa() {
      D("error!");
      l.onerror = ra;
      ra = Y = q;
      return !0;
    }
    function b() {
      aa(this, "blur", b);
      w(0, 0);
    }
    function a(c) {
      rb && (Gb && (Gb = nb(Gb)), Gb = oa(g, 0, 1400), rb.innerHTML += " " + c);
    }
    function g() {
      rb.innerHTML = "";
    }
    function n() {
      sb && (ha(sb, "top", (Ga / 10 | 0) + "px"), pc.innerHTML = " scrl:" + (Ga | 0));
    }
    function z(c, d, h, u, G, C, va) {
      kb && (ha(kb, "top", ((c + h) / 10 | 0) + "px"), ha(kb, "height", (d / 10 | 0) + "px"), ha(sb, "height", (G / 10 | 0) + "px"), ha(Wb, "height", (Z.scrollHeight / 10 | 0) + "px"), gb.innerHTML = "conY:" + h + "/sidY" + c + ", conH:" + u + "/sidH" + d + ", focY:" + C + " focH:" + va);
    }
    function w(c, d) {
      tb && (ha(tb, "top", (c / 10 | 0) + "px"), ha(tb, "height", (d / 10 | 0) + "px"));
    }
    function X() {
      Xb.call(Hb);
    }
    function L() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (bb(Hb, "id", "blog2slide-root"), lb[1].parentNode.insertBefore(ub, lb[1]), qa(), f.onkeydown = I) : Xa && (Ma(ub), Na(Hb, "id"), Na(Xa, "id"), Xa = f.onkeydown = q);
    }
    function qa() {
      Xa && Na(Xa, "id");
      Ya = 0 < Ya ? Yb < Ya ? Yb : Ya : 0;
      Xa = lb[Ya];
      bb(Xa, "id", "blog2slide-current");
    }
    function I(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Ya, qa();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --Ya, qa();
        }
      }
    }
    var K = [];
    $b || (Tb(function(c) {
      if (c.o && Ja) {
        c = c.m;
        var d = ma(c), h = "", u;
        if ("A" === Ab(d) && 1 === ic(d).length) {
          var G = ya(d, "href"), C = G.split("?")[0].split("#")[0].split(".");
          C = (C[C.length - 1] || "").toLowerCase();
          if ((u = 0 < G.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
            W(d, "keydown", m), W(c, "click", m), W(d, "click", A), 9 > E || (h = c.offsetWidth - 4 + "px", ha(c, "width", h)), Ta(d, "jsPica"), K.push({j:d, K:c.src, L:h, B:G, l:c, H:u});
          }
        }
      }
    }), Ua(function(c, d) {
      for (c = -1; d = K[++c];) {
        aa(d.j, "keydown", m), aa(d.l, "click", m), aa(d.j, "click", A);
      }
    }));
    var ia = ["jsSidebarFixer1", "jsSidebarFixer2"], Da = N || Kb || Jb, sa = !(6 <= y && 9 > y || E || 1 <= N && 1.3 > N), Va = !(5 > O(16) || 5 > O(17) || 2.2 > O(21) || 6 > O(12) || la(30) && 534 > ab || la(32) || 7 > y || 9 > E || 1 > N), Ea = Va || 7 > y || 1 > N, eb = 7.5 > E, Aa, na, hb, da, fb = Nb, Fa = 0, Ga = 0, Wa, Oa, e, k, t = N && 0 <= M.conpare(Ra, "0.9.7"), x = N && 0 >= M.conpare(Ra, "0.9.4");
    qc || $b || (cb(function(c) {
      if (c) {
        if (!Ja) {
          return !0;
        }
        c = -1;
        var d;
        Aa = "CSS1Compat" !== f.compatMode ? Z : Ia || Z;
        na = Ka("jsSide");
        hb = Ja;
        if (!na) {
          return !0;
        }
        Cb(r);
        Sb(r);
        da = zb(Pb(na), "div", {id:"jsSidebarFixer"});
        W(l, "blur", J);
        for (8 > E || x || 6 > y || (y || Ca ? W(da, "focusin", F) : Da ? W(f, "focus", F, {capture:!0, passive:!1}) : W(da, "DOMFocusIn", F, !1)); 1 < La(na).length;) {
          da.appendChild(La(na)[1]);
        }
        for (t && !mb && W(f, "DOMMouseScroll", fa, !1); d = ia[++c];) {
          var h = Ka(d);
          h.onwheel !== q ? W(h, "wheel", R, {passive:!1}) : mb ? W(h, "MozMousePixelScroll", R, !1) : t ? ia[c] = Ka(d) : (h.onmousewheel !== q || 9 <= E) && W(h, "mousewheel", R, !1);
        }
        y || Jb || 2 > Sa || (Wa = Ha.perspective !== q || Ha.MozPerspective !== q || Ha["-webkit-perspective"] !== q);
        r();
        return !0;
      }
    }), Ua(function() {
      var c = -1, d;
      if (t && !mb) {
        aa(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; d = ia[++c];) {
          d = Ka(d), d.onwheel !== q ? aa(d, "wheel", R, {passive:!1}) : mb ? aa(d, "MozMousePixelScroll", R, !1) : (d.onmousewheel !== q || 9 <= E) && aa(d, "mousewheel", R, !1);
        }
      }
      aa(l, "blur", J);
      8 > E || x || 6 > y || (y || Ca ? aa(da, "focusin", F, !1) : Da ? aa(f, "focus", F, {capture:!0, passive:!1}) : aa(da, "DOMFocusIn", F, !1));
      B && clearInterval(B);
    }));
    var B, Y, ra;
    6 > y && cb(function(c) {
      if (!Ja) {
        return !0;
      }
      c ? B = setInterval(ka, 333) : B && (clearInterval(B), B = 0);
    });
    var gb, pc, rb, Wb, sb, kb, tb, Gb;
    cb(function(c) {
      if (c) {
        if (!Ja) {
          return !0;
        }
        var d = La(Z);
        c = zb(d[0], "div");
        if (Va) {
          ca(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; d.length;) {
            c.appendChild(d.shift());
          }
          ca(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = jc(c, "div");
          ca(Ia, "overflow:hidden");
          ca(Z, "overflow:hidden");
          ca(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        V(c, "div", q, Nb ? "transform" + (Wa ? "3D" : "") : Va ? "pos:fixed" : "pos:absolute");
        d = V(c, "div");
        gb = V(d, "span");
        pc = V(d, "span");
        rb = V(c, "div");
        Wb = V(c, "div");
        ca(Wb, "position:absolute;left:0;top:0;width:54px;background:#242");
        kb = V(c, "div");
        ca(kb, "position:absolute;left:0;width:54px;background:#363");
        sb = V(c, "div");
        ca(sb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        tb = V(kb, "div");
        ca(tb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    za(function() {
      function c(va, H, P, wa) {
        var S = wa ? "div" : "cite";
        if (0 === H.indexOf("urn:isbn:")) {
          H = H.substr(9).toUpperCase().split("-").join("");
          if (13 === H.length) {
            H = H.toString().slice(3, -1);
            for (var Q = 0, ea = 0; 9 > ea; ea++) {
              Q += (H.charAt(ea) - 0) * (10 - ea);
            }
            Q = (11 - Q % 11) % 11;
            Q = 10 === Q ? "X" : Q.toString();
            H += Q;
          }
          10 === H.length && (H = "//www.amazon.co.jp/exec/obidos/ASIN/" + H + "/itozyun-22/ref=nosim/");
        }
        P = wa ? zb(Pb(h), S, {className:P}) : V(h, S, {className:P});
        V(P, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:H, J:E ? "0" : q} : {G:!0, href:H, J:E ? "0" : q}, va);
      }
      if (Ja) {
        for (var d = Ob(Ja, "blockquote"), h, u = -1, G, C; h = d[++u];) {
          G = ya(h, "title"), C = ya(h, "cite"), G && C ? (Na(h, "title"), c(G, C, "js-bqLink", !0)) : C && (Na(h, "cite"), c(l.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var Xb, Hb, ub, Xa, lb, Ya, Yb;
    za(function() {
      var c = Ka("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== q ? "f" : f.onmozfullscreenchange !== q ? "mozF" : f.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Xb = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || Xb ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', W(c.firstChild, "click", X), c = ma(c), Hb = ma(c), lb = Ob(c, "section"), ub = f.createElement("h1"), ub.innerHTML = ob("h1")[0].innerHTML, Yb = lb.length, lb.splice(0, 0, ub), 0 !== d ? W(f, d + "ullscreenchange", L) : y ? W(f, "MSFullscreenChange", L, !1) : Sb(L)) : Ma(c);
      }
    });
  })();
  Ib = f.scripts || ob("script");
  var ta = Ib[Ib.length - 1].src.split("/");
  --ta.length;
  "js" === ta[ta.length - 1] && --ta.length;
  (ta = ta.join("/")) && (ta += "/");
  D("[p_assetUrl] " + ta);
  var qc = rc || "1" === ya(Z, "mob");
  vb = (qc ? "mb" : "pc") + "/";
  za(function() {
    var m;
    (m = Ka("logger")) || alert("#logger not found!");
    for (m ? (D = function(A) {
      V(m, "P", q, A);
    }, Zb = function(A) {
      V(m, "P", {style:{color:"red"}}, A);
    }, l.onerror = function(A, v, r) {
      Zb(A + ", " + v + ", " + r);
      return !0;
    }) : l.console ? D = console.log : D = T; yb.length;) {
      D(yb.shift());
    }
    yb = null;
  });
  6.1 > xa && Cb(ec);
  Ua(fc);
  6.1 > xa && Cb(gc);
  Ua(hc);
  10 > y && (11 !== Za || 5 !== y) || (9 > E || 1 > N || !Ca && !l.addEventListener ? f.write('<link href="' + ta + "css/" + vb + Mb + '" rel="stylesheet"' + (8 > E ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > E || 1.5 > N || 532 >= ab || 2 > Sa || 4 <= Sa && 8 > Sa) && za(function() {
    V($a, "link", {href:ta + "css/" + vb + Mb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

