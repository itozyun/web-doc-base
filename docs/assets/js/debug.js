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
  var T = arguments, f = T.length - 2 - l, Za = this.slice(M, M + l), ya;
  if (0 < f) {
    var U = this.length - 1;
    for (ya = M + l; U >= ya; --U) {
      this[U + f] = this[U];
    }
  } else {
    if (0 > f) {
      U = M + l;
      for (ya = this.length; U < ya; ++U) {
        this[U + f] = this[U];
      }
      this.length += f;
    }
  }
  U = 2;
  for (ya = T.length; U < ya; ++U) {
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
(function(M, l, T, f, Za, ya, U, Ib, t) {
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
  var Z = f.body, Ia = Z.style, Ja, $a, Ka, Ra = M[1], y = O(2) || O(3), Ca = O(7), Jb = O(5) || O(6), E = O(8) || O(9), N = O(11) || O(12), nb = N && 0 <= M.conpare(Ra, "1.9.1"), Kb = O(13), ab = O(15);
  ya = O(16) || O(17);
  var $b = O(10) || O(25), Sa = O(20) || O(22);
  Sa || O(23) || O(21) || O(24);
  var ac = Sa && U(Za.userAgent.split("Edg/")[1]);
  Za = U(Za.appVersion.split("Trident/")[1]) + 4;
  var Lb = la(35) || la(36) || la(37), bc = !y && !Ca && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Mb = (Ca ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > E ? "opr70" : 8 > E ? "opr72" : 9.5 > E ? "opr" + (E | 0) : N && !nb ? 1.3 <= N ? "gck190" : 1 <= N ? "gck121" : "gck097" : "modern") + ".css", vb = "", rc = la(1) || la(2) || la(3) || 
  la(4) || la(8) || la(9) || la(10), cc, Nb = Ia.transform !== t ? "transform" : Ia["-o-transform"] !== t ? "-o-transform" : Ia["-ms-transform"] !== t ? "-ms-transform" : Ia.MozTransform !== t ? "-moz-transform" : Ia["-webkit-transform"] !== t ? "-webkit-transform" : "", wb = [], dc, oa, ob, xb, yb = [], ec, fc, gc, hc;
  (function() {
    function m() {
      for (var a, g = 0, n = new Date - 0; g < F.length;) {
        n < F[0].t ? ++g : (a = F.splice(g, 1)[0], a.f(a.p));
      }
      b = F.length ? setTimeout(m, ka) : 0;
    }
    function A() {
      for (var a, g = 0; g < G.length; ++g) {
        a = G[g], a.f();
      }
    }
    function q() {
      fa && (fa = clearInterval(fa));
    }
    function r() {
      b && (b = clearTimeout(b));
    }
    D = function(a) {
      yb.push(a);
    };
    xb = function(a) {
      G.length || (fa = setInterval(A, p));
      G.push({f:a, v:++R});
      return R;
    };
    ec = function() {
      fa && (q(), fa = setInterval(A, p));
    };
    fc = q;
    var G = [], p = 500, R = 0, fa;
    if (5 > y || Ca) {
      l._wdb_onlooptimer = A, A = "_wdb_onlooptimer()";
    }
    oa = function(a, g, n) {
      F.length || (b = setTimeout(m, ka));
      F.push({f:a, p:g, v:++pa, t:new Date - 0 + (ka < n ? n : ka)});
      return pa;
    };
    ob = function(a) {
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
  var La, bb, Ob, ma, Ma, ic, Pb, V, zb, jc, kc, Na, pb, Ab, qa, cb, Da, Qb, lc, Bb, Rb, Ta, ha, ca;
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
                for (var ra = ++z, J, K = [], ia = X.split(""), Ea = ia.length; Ea;) {
                  J = ia[--Ea], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), K[Ea] = J;
                }
                n[ra] = K.join("") + ":" + L[X] + ";";
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
      return q(f, b);
    }
    function q(b, a) {
      var g = "*" === a && 6 > y ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], z = 0, w;
      for (w = g.length; z < w; ++z) {
        n[z] = g[z];
      }
      return n;
    }
    function r(b) {
      return F ? b.parentElement : b.parentNode;
    }
    function G(b, a, g, n, z, w) {
      if (F) {
        var X = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", L = Ma(2 > b ? ma(a) : a);
        L = 2 > b ? L.indexOf(a) + b : L.length;
        a.insertAdjacentHTML(X, m(g, n, z));
        return Ma(a)[L];
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
                cb(a, X, g);
            }
          }
        }
      }
      pa || null != z && p(a, z);
      return a;
    }
    function p(b, a) {
      if (F) {
        return G(2, b, "font", t, a);
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
    Ja = A("html")[0];
    $a = A("head")[0];
    La = function(b) {
      return l[b] || f[b] || f.getElementById(b);
    };
    bb = A;
    Ob = q;
    ma = r;
    Ma = function(b) {
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
      a = G(2, b, a, g, n, z);
      F || (b.appendChild(a), pa && null != n && p(a, n));
      return a;
    };
    zb = function(b, a, g, n, z) {
      a = G(0, b, a, g, n, z);
      F || (r(b).insertBefore(a, b), pa && null != n && p(a, n));
      return a;
    };
    jc = function(b, a, g, n, z) {
      a = G(1, b, a, g, n, z);
      var w;
      F || ((w = b.nextSibling) ? ma(w).insertBefore(a, w) : ma(b).appendChild(a), pa && null != n && p(a, n));
      return a;
    };
    kc = p;
    Na = function(b) {
      ma(b) ? F ? b.outerHTML = "" : ma(b).removeChild(b) : D("[DOM] p_DOM_remove(), No parentNode!");
    };
    pb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Ja;) {
        if (a = ma(a), b === a) {
          return !0;
        }
      }
    };
    var ka = 9 > y, pa = 9 > y;
    Ab = function(b) {
      return b.tagName.toUpperCase();
    };
    qa = function(b, a) {
      return b.getAttribute(a) || "";
    };
    cb = function(b, a, g) {
      b.setAttribute(a, g);
    };
    Da = function(b, a) {
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
        L = Ma(L);
        for (var ra = L.length, J, K, ia; ra;) {
          if (J = L[--ra], K = J.nodeType, 8 === K) {
            a && w.push(J);
          } else {
            if (1 === K) {
              switch(K = Ab(J), "/" === K.charAt(0) && (K = K.substr(1), X[K] = !0), K) {
                case "STYLE":
                  if (8 <= E && 9 > E) {
                    break;
                  }
                case "LINK":
                  F || g || pb($a, J) || z.push(J);
                  break;
                case "META":
                  K = qa(J, "name") || qa(J, "property");
                  for (ia = n.length; ia;) {
                    if (0 === K.indexOf(n[--ia])) {
                      w.push(J);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Qb(J, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Qb(J, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  w.push(J);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || w.push(J);
                  break;
                default:
                  X[K] ? w.push(J) : Ma(J).length && b(J);
              }
            }
          }
        }
        for (; z[0];) {
          $a.appendChild(z.pop());
        }
        for (; w[0];) {
          Na(w.pop());
        }
      }
      Ka = La("jsMain");
      var a = !(8 > E || 5 > y || Ca || .9 > N), g = 7 > y, n = ["og:", "twitter:", "fb:"], z = [], w = [], X = {};
      b(Ja);
    });
  })();
  var W, aa, za, Ua, Sb, Cb, db, Tb, mc, eb, ja, Ub;
  (function() {
    function m() {
      return ja = Fa ? Aa ? 2 : fb ? 3 : 1 : 0;
    }
    function A(e, k) {
      db(function(u) {
        if (u) {
          return u = a(e), k(u), u.addListener(k), !0;
        }
      });
    }
    function q(e, k) {
      for (var u = 0; u < e.length; ++u) {
        !0 === e[u](k) && (e.splice(u, 1), --u);
      }
    }
    function r(e, k) {
      z && !n.length && oa(G);
      n.push(e, k);
    }
    function G() {
      var e = n, k;
      for (n = []; k = e.shift();) {
        q(k, e.shift());
      }
    }
    function p(e) {
      var k = e || event;
      e = w[k.type];
      var u = -1, x, B;
      for (y ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : L && (k.u = k.stopPropagation, k.stopPropagation = function() {
        B = !0;
      }); x = e[++u];) {
        x.i === this ? (this.g = x.h, this.g(k), this.g = T, this.g = t) : 7.2 > E && this === f && x.i === l && (l.g = x.h, l.g(k), delete l.g);
      }
      if (y) {
        return k.preventDefault = k.stopPropagation = t, k.returnValue;
      }
      L && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (J = !0), B && !J && k.u(), k.u = k.stopPropagation = t);
    }
    function R() {
      if (K) {
        var e = f.readyState;
        "loaded" === e || "complete" === e ? K() : oa(R);
      }
    }
    function fa(e) {
      q(ia, e);
    }
    function F() {
      var e = 9 === g.offsetWidth;
      eb !== e && (r(Ea, eb = e), D("p_cssAvailability:" + eb));
    }
    function ka() {
      !K && Ga && (ob(Ga), Ga = oa(pa));
    }
    function pa() {
      Ga = 0;
      q(gb);
    }
    function b(e) {
      K || q(Ha, e);
    }
    var a = l.matchMedia, g, n = [], z;
    wb.push(function() {
      A = t;
      g = V(Z, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        z = !0;
        n.length && oa(G);
      });
    });
    W = function(e, k, u, x) {
      if (ra) {
        e.addEventListener(k, u, x ? bc ? x : x.capture : !1);
      } else {
        var B = {i:e, h:u};
        x = w[k];
        var Y = "on" + k, sa, hb;
        if (x) {
          for (sa = x.length; hb = x[--sa];) {
            if (hb.i === e && hb.h === u) {
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
    aa = function(e, k, u, x) {
      if (ra) {
        e.removeEventListener(k, u, x ? bc ? x : x.capture : !1);
      } else {
        x = w[k];
        k = "on" + k;
        var B, Y, sa;
        if (x) {
          for (B = x.length; Y = x[--B];) {
            Y.i === e && (Y.h === u ? x.splice(B, 1) : sa = !0);
          }
          sa || (X ? e.detachEvent(k, p) : (e[k] = T, e[k] = null));
        }
      }
    };
    var w = {}, X = !1, L = 525.13 > ab, ra = !L && !Ca && l.addEventListener, J;
    L && Ja.addEventListener("click", function(e) {
      if (J) {
        return J = !1, e.preventDefault(), !1;
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
      K = t;
      q(wb, e);
    }, ia = [];
    419.3 >= ab ? oa(R) : W(l, "load", K);
    (y || 1.8 > N) && W(l, "unload", fa);
    db = function(e) {
      Ea.push(e);
    };
    var Ea = [];
    za(function() {
      F();
      xb(F);
    });
    mc = function(e) {
      ta && ta.push(e);
    };
    var ta = [], Va = 60 > N || Kb, Fa, fb, Aa;
    if (89 <= N || 89 <= Sa || Lb && 79 <= ac || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Ub = !0, A("(forced-colors:active)", function(e) {
        Fa = e.matches;
        r(ta, m());
        D("(forced-colors:active):" + ja);
      });
    } else {
      if (10 <= y || Jb || Lb && ac) {
        Ub = !0, A("(-ms-high-contrast:black-on-white)", function(e) {
          Fa = fb = e.matches;
          ja !== m() && (r(ta, ja), D("(-ms-high-contrast:black-on-white):" + ja));
        }), A("(-ms-high-contrast:white-on-black)", function(e) {
          Fa = Aa = e.matches;
          ja !== m() && (r(ta, ja), D("(-ms-high-contrast:white-on-black):" + ja));
        }), A("(-ms-high-contrast:active)", function(e) {
          Fa = e.matches;
          ja !== m() && (r(ta, ja), D("(-ms-high-contrast:active):" + ja));
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
            var u = f.defaultView, x = u ? u.getComputedStyle(g, null) : g.currentStyle;
            u = (x && x.color || "").split(" ").join("");
            x = (x && x.backgroundColor || "").split(" ").join("");
            u && (Fa = "#123456" !== u && "rgb(18,52,86)" !== u, fb = e(u) && k(x, !0), Aa = k(u) && e(x, !0), ja !== m() && (D("(forced-colors-fallback):" + ja), r(ta, ja)));
          };
          db(function(e) {
            if (e) {
              return ha(g, "color", "#123456"), ha(g, "backgroundColor", "#123456"), Va ? (na(), ta = t) : na() && xb(na), na = t, !0;
            }
          });
        } else {
          ta = m = t;
        }
      }
    }
    Tb = function(e) {
      ib.push(e);
    };
    var ib = [], da = 7.5 <= E && 8 > E;
    da && function() {
      for (var e = f.images, k = e.length, u; k;) {
        u = e[--k], u.s = u.src, Da(u, "src");
      }
    }();
    za(function() {
      function e() {
        x && (B = u[--x], da && cb(B, "src", B.s), dc(k, da ? B.s : B.src));
      }
      function k(Y) {
        q(ib, {m:B, o:Y});
        e();
      }
      var u = f.images || bb("img"), x = u.length;
      if (12 > E || 532 > ab) {
        e();
      } else {
        for (; x;) {
          var B = u[--x];
          r(ib, {m:B, o:9 > y ? B.complete : 0 <= B.naturalWidth ? B.naturalWidth : B.width});
        }
      }
    });
    Sb = function(e) {
      gb.push(e);
    };
    var gb = [], Ga;
    W(l, "resize", ka);
    Ua(function() {
      Ga && clearTimeout(Ga);
      aa(l, "resize", ka);
    });
    Cb = function(e) {
      Ha.push(e);
    };
    var Ha = [], Wa = 0, Oa = 1 > N || 1.2 <= N && 1.8 > N || 7.2 >= E;
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
    var A = 1 > N || 8 <= E && 9 > E, q = 7.2 <= E && 8 > E, r = !!y || !A && !q && function() {
      var p = V(Ja, "style"), R = !!m(p);
      R && (D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText)));
      Na(p);
      return R;
    }();
    D("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + r);
    var G = !r && ab && !A && !q && function() {
      var p = V(Ja, "style"), R;
      kc(p, "");
      if (R = !!m(p)) {
        D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText));
      }
      Na(p);
      return R;
    }();
    r || D("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + G);
    nc = A || q ? 1 : r || G ? 2 : 0;
    D("[CSSOM] p_CSSOM_canuse : " + nc);
  })();
  (function() {
    9 > y && za(function() {
      var m = V(Z, "div");
      ca(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      cc = 1 < m.offsetHeight;
      ca(m, "");
      Na(m);
    });
    dc = function(m, A) {
      function q() {
        G || !p || r.complete ? (D("[imageTest] timer -> img.complete. img.width=" + r.width), oa(m, !!r.width), r.onerror = r.onload = T, r = m = t) : (--p, oa(q));
      }
      var r = new Image, G, p = 99;
      D("[imageTest] start.");
      r.onerror = function() {
        D("[imageTest] error!");
        G = !0;
      };
      r.onload = function() {
        D("[imageTest] onload.");
        G = !0;
      };
      r.src = A;
      oa(q);
    };
  })();
  (function() {
    if (!Ub) {
      var m, A = function() {
        m = V($a, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + vb + "hc/" + Mb});
        if (Nb || 5.5 <= y && 9 > y && cc) {
          Ta(Z, "jsCanRotate"), D("jsCanRotate!");
        }
        A = t;
      };
      mc(function(q) {
        q && !m ? A() : m && (q ? $a.appendChild(m) : Na(m));
      });
    }
    Tb(function(q) {
      var r = q.m;
      q = q.o;
      var G = ma(r);
      !Rb(G, "aBodyRoot") && q ? Ta(G, "img-loaded") : q || qa(r, "alt") || ha(r, "display", "none");
    });
    E && za(function() {
      if (8 <= E) {
        for (var q = bb("a"), r = q.length, G = 0, p; G < r; ++G) {
          p = q[G], "-1" === qa(p, "tabindex") ? Da(p, "tabindex") : qa(p, "href") && cb(p, "tabindex", "0");
        }
      }
      q = bb("input");
      G = 0;
      for (r = q.length; G < r; ++G) {
        p = q[G], "hidden" === qa(p, "type") && Da(p, "tabindex");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.M, h = K.length, v, H, C, wa;
      if ("keydown" !== c.type || 13 === d) {
        for (; h;) {
          if (d = K[--h], d.l === this || d.j === this) {
            h = d.l;
            var I = v = d.j;
            if (d.C) {
              if (ha(h, "width", d.L), h.src = d.K, Bb(I, d.F), h = d.A) {
                ca(h, d.D), Bb(h, "caption jsCap");
              }
            } else {
              if (H = d.B) {
                for (delete d.B; v = ma(v);) {
                  if (Rb(v, "caption")) {
                    d.A = v, d.D = v.style.cssText, Ta(v, "jsCap");
                  } else {
                    var P = Ab(v);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                v = v.offsetWidth - 4 - 1;
                1600 < v && (v = 1600);
                if (d.H) {
                  H = H.split("=");
                  P = H.length;
                  if (C = H[P - 1]) {
                    (wa = U(C.substr(1))) && C === "s" + wa ? H[P - 1] = "w" + v : H[P] = "w" + v;
                  }
                  H = H.join("=");
                } else {
                  if (0 < H.indexOf(".bp.blogspot.com/")) {
                    H = H.split("/");
                    P = H.length;
                    if (C = H[P - 2]) {
                      (wa = U(C.substr(1))) && C === "s" + wa ? H[P - 2] = "w" + v : H.splice(P - 1, 0, "w" + v);
                    }
                    H = H.join("/");
                  }
                }
                d.I = H;
              }
              d.F = lc(I);
              Ta(I, "jsPicaLarge");
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
    function q(c) {
      for (var d = arguments, h = 0, v = d.length; h < v; ++h) {
        if (isFinite(d[h])) {
          return d[h];
        }
      }
      return 0;
    }
    function r(c) {
      var d = Oa;
      if (eb) {
        if (e && !d) {
          if (new Date - 0 < e) {
            return;
          }
          e = t;
        }
        7 === c ? (a("t"), k = 0) : (a("s"), k && (k = ob(k)), Ha = q(l.pageYOffset, l.scrollY, Aa.scrollTop, Z.scrollTop));
        d ? (Oa = p(t, d[0], d[1])) || (e = new Date - 0 + 99) : p();
        n();
      } else {
        Oa = t;
      }
    }
    function G() {
      a("w.blur");
    }
    function p(c, d, h) {
      function v(Ba) {
        I = Ba;
        if (gb) {
          P = gb + ":translate" + (Wa ? "3D(0," : "(0,") + Ba + (Wa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== Ba) {
            if (!fb && (Fa || Va)) {
              var Db = na.offsetWidth;
            }
            P = Va ? "position:fixed;width:" + Db + "px;top:" + (Ba - H + Q) + "px" : fb ? "top:" + Ba + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ba + "px";
            Fa && P && (P += ";" + (0 > Ba ? "clip:rect(" + -Ba + "px " + Db + "px " + ba + "px 0)" : Ba + ba < qb ? "clip:rect(0 " + Db + "px " + ba + "px 0)" : "clip:rect(0 " + Db + "px " + (qb - Ba) + "px 0)"), 8 > y || (P = P.split(" ").join(",")));
          }
        }
      }
      var H = Ha, C = ib, wa = na.offsetTop === C.offsetTop, I = 0, P = "", xa = !0;
      if (wa) {
        for (var S = 0, Q = 0, ea = C; ea && ea !== Z;) {
          Q += ea.offsetTop, ea = ea.offsetParent;
        }
        I = Ga;
        ea = q(l.innerHeight, Aa.offsetHeight);
        var Vb = C.offsetHeight, ba = da.offsetHeight, qb = ba < Vb ? Vb : ba, Pa = H, jb = Pa + ea, Eb = Q, Fb = Eb + qb, oc = Q + I, sc = oc + ba;
        C = Pa < Eb ? Eb : Pa;
        var Qa = Fb < jb ? Fb : jb, kb = Qa - C;
        Pa = Fb <= Pa;
        jb = jb <= Eb;
        if (d !== t) {
          xa = Q + d;
          c = xa + h;
          if (Pa || jb) {
            return ea <= h ? (d = Q, a("4.1.1")) : Pa ? (d = Fb - h, a("4.1.2")) : (d = Q + h - ea, a("4.1.3")), e = t, l.scroll(q(l.pageXOffset, l.scrollX, Aa.scrollLeft, Z.scrollLeft), d), a("4.1.*"), Oa;
          }
          ba <= kb ? (S = 4, a("4.2")) : h <= kb ? ba - d <= kb ? (S = 2, a("4.3.1")) : C <= xa && c <= Qa ? C < Q + I && (S = 4, a("4.3.2")) : C <= xa && xa <= Qa ? (S = 5, a("4.3.3")) : C <= c && c <= Qa ? (S = 4, a("4.3.4")) : c < C ? (S = 4, a("4.3.5")) : (S = 5, a("4.3.6")) : (S = 4, a("4.4"));
          xa = t;
        } else {
          c !== t ? ba <= kb ? (S = 7, xa = !1, a("3.1")) : (I -= 60 * c, S = Qa - Q - ba, c = C - Q, I < S ? (I = S, a("3.2.1")) : c < I ? (I = c, a("3.2.2")) : a("3.2.3"), S = 6) : Vb <= ba || (Pa ? (S = 1, a("2.2.1")) : jb ? a("2.2.2") : ba <= kb ? (S = 3, a("2.3")) : C < oc ? (S = 3, a("2.4.1")) : sc < Qa ? (S = 2, a("2.4.2")) : H < Q + ba - kb ? a("2.4.3") : (S = 2, a("2.4.4")));
        }
        switch(S) {
          case 0:
            v(0);
            break;
          case 1:
            v(qb - ba);
            break;
          case 2:
            v(Qa - Q - ba);
            break;
          case 3:
            v(C - Q);
            break;
          case 4:
            v(C - Q - d);
            break;
          case 5:
            v(Qa - Q - (d + h));
          case 6:
            v(I);
        }
        z(I, ba, Q, qb, ea, d || "-", h || "-");
      } else {
        z(I, "-", "-", "-", "-", "-", "-");
      }
      ca(da, P);
      Ga = I;
      return wa && xa;
    }
    function R(c) {
      if (eb) {
        a("m");
        N && (Ha = q(l.pageYOffset, Aa.scrollTop, Z.scrollTop), n());
        var d = this !== c.target, h = d && q(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && h && p(9 >= h ? -9 >= h ? -3 : h : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      for (var d = c.target, h = -1, v; v = ia[++h];) {
        pb(v, d) && R(c);
      }
    }
    function F(c) {
      if (eb) {
        var d = !!gb || N, h = c.target || c.srcElement, v = 0;
        if (pb(da, h)) {
          a(c.type || "ie5focus");
          W(h, "blur", b);
          for (c = h.offsetHeight; h && (d ? pb(da, h) : da !== h);) {
            v += h.offsetTop, h = h.offsetParent;
          }
          ta ? (Oa = [v, c], k && ob(k), k = oa(r, 7)) : (Ha = q(l.pageYOffset, l.scrollY, Aa.scrollTop, Z.scrollTop), p(t, v, c));
          w(v, c);
        }
      }
    }
    function ka() {
      sa = l.onerror;
      l.onerror = pa;
      var c = f.activeElement;
      Y !== c && (Y = c, F({target:c}));
      l.onerror = sa;
      sa = t;
    }
    function pa() {
      D("error!");
      l.onerror = sa;
      sa = Y = t;
      return !0;
    }
    function b() {
      aa(this, "blur", b);
      w(0, 0);
    }
    function a(c) {
      rb && (Gb && (Gb = ob(Gb)), Gb = oa(g, 0, 1400), rb.innerHTML += " " + c);
    }
    function g() {
      rb.innerHTML = "";
    }
    function n() {
      sb && (ha(sb, "top", (Ha / 10 | 0) + "px"), pc.innerHTML = " scrl:" + (Ha | 0));
    }
    function z(c, d, h, v, H, C, wa) {
      lb && (ha(lb, "top", ((c + h) / 10 | 0) + "px"), ha(lb, "height", (d / 10 | 0) + "px"), ha(sb, "height", (H / 10 | 0) + "px"), ha(Wb, "height", (Z.scrollHeight / 10 | 0) + "px"), hb.innerHTML = "conY:" + h + "/sidY" + c + ", conH:" + v + "/sidH" + d + ", focY:" + C + " focH:" + wa);
    }
    function w(c, d) {
      tb && (ha(tb, "top", (c / 10 | 0) + "px"), ha(tb, "height", (d / 10 | 0) + "px"));
    }
    function X() {
      Xb.call(Hb);
    }
    function L() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (cb(Hb, "id", "blog2slide-root"), mb[1].parentNode.insertBefore(ub, mb[1]), ra(), f.onkeydown = J) : Xa && (Na(ub), Da(Hb, "id"), Da(Xa, "id"), Xa = f.onkeydown = t);
    }
    function ra() {
      Xa && Da(Xa, "id");
      Ya = 0 < Ya ? Yb < Ya ? Yb : Ya : 0;
      Xa = mb[Ya];
      cb(Xa, "id", "blog2slide-current");
    }
    function J(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Ya, ra();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --Ya, ra();
        }
      }
    }
    var K = [];
    $b || (Tb(function(c) {
      if (c.o && Ka) {
        c = c.m;
        var d = ma(c), h = "", v;
        if ("A" === Ab(d) && 1 === ic(d).length) {
          var H = qa(d, "href"), C = H.split("?")[0].split("#")[0].split(".");
          C = (C[C.length - 1] || "").toLowerCase();
          if ((v = 0 < H.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
            W(d, "keydown", m), W(c, "click", m), W(d, "click", A), 9 > E || (h = c.offsetWidth - 4 + "px", ha(c, "width", h)), Ta(d, "jsPica"), K.push({j:d, K:c.src, L:h, B:H, l:c, H:v});
          }
        }
      }
    }), Ua(function(c, d) {
      for (c = -1; d = K[++c];) {
        aa(d.j, "keydown", m), aa(d.l, "click", m), aa(d.j, "click", A);
      }
    }));
    var ia = ["jsSidebarFixer1", "jsSidebarFixer2"], Ea = N || Kb || Jb, ta = !(6 <= y && 9 > y || E || 1 <= N && 1.3 > N), Va = !(5 > O(16) || 5 > O(17) || 2.2 > O(21) || 6 > O(12) || la(30) && 534 > ab || la(32) || 7 > y || 9 > E || 1 > N), Fa = Va || 7 > y || 1 > N, fb = 7.5 > E, Aa, na, ib, da, gb = Nb, Ga = 0, Ha = 0, Wa, Oa, e, k, u = N && 0 <= M.conpare(Ra, "0.9.7"), x = N && 0 >= M.conpare(Ra, "0.9.4");
    qc || $b || (db(function(c) {
      if (c) {
        if (!Ka) {
          return !0;
        }
        c = -1;
        var d;
        Aa = "CSS1Compat" !== f.compatMode ? Z : Ja || Z;
        na = La("jsSide");
        ib = Ka;
        if (!na) {
          return !0;
        }
        Cb(r);
        Sb(r);
        da = zb(Pb(na), "div", {id:"jsSidebarFixer"});
        W(l, "blur", G);
        for (8 > E || x || 6 > y || (y || Ca ? W(da, "focusin", F) : Ea ? W(f, "focus", F, {capture:!0, passive:!1}) : W(da, "DOMFocusIn", F, !1)); 1 < Ma(na).length;) {
          da.appendChild(Ma(na)[1]);
        }
        for (u && !nb && W(f, "DOMMouseScroll", fa, !1); d = ia[++c];) {
          var h = La(d);
          h.onwheel !== t ? W(h, "wheel", R, {passive:!1}) : nb ? W(h, "MozMousePixelScroll", R, !1) : u ? ia[c] = La(d) : (h.onmousewheel !== t || 9 <= E) && W(h, "mousewheel", R, !1);
        }
        y || Jb || 2 > Sa || (Wa = Ia.perspective !== t || Ia.MozPerspective !== t || Ia["-webkit-perspective"] !== t);
        r();
        return !0;
      }
    }), Ua(function() {
      var c = -1, d;
      if (u && !nb) {
        aa(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; d = ia[++c];) {
          d = La(d), d.onwheel !== t ? aa(d, "wheel", R, {passive:!1}) : nb ? aa(d, "MozMousePixelScroll", R, !1) : (d.onmousewheel !== t || 9 <= E) && aa(d, "mousewheel", R, !1);
        }
      }
      aa(l, "blur", G);
      8 > E || x || 6 > y || (y || Ca ? aa(da, "focusin", F, !1) : Ea ? aa(f, "focus", F, {capture:!0, passive:!1}) : aa(da, "DOMFocusIn", F, !1));
      B && clearInterval(B);
    }));
    var B, Y, sa;
    6 > y && db(function(c) {
      if (!Ka) {
        return !0;
      }
      c ? B = setInterval(ka, 333) : B && (clearInterval(B), B = 0);
    });
    var hb, pc, rb, Wb, sb, lb, tb, Gb;
    db(function(c) {
      if (c) {
        if (!Ka) {
          return !0;
        }
        var d = Ma(Z);
        c = zb(d[0], "div");
        if (Va) {
          ca(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; d.length;) {
            c.appendChild(d.shift());
          }
          ca(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = jc(c, "div");
          ca(Ja, "overflow:hidden");
          ca(Z, "overflow:hidden");
          ca(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        V(c, "div", t, Nb ? "transform" + (Wa ? "3D" : "") : Va ? "pos:fixed" : "pos:absolute");
        d = V(c, "div");
        hb = V(d, "span");
        pc = V(d, "span");
        rb = V(c, "div");
        Wb = V(c, "div");
        ca(Wb, "position:absolute;left:0;top:0;width:54px;background:#242");
        lb = V(c, "div");
        ca(lb, "position:absolute;left:0;width:54px;background:#363");
        sb = V(c, "div");
        ca(sb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        tb = V(lb, "div");
        ca(tb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    za(function() {
      function c(wa, I, P, xa) {
        var S = xa ? "div" : "cite";
        if (0 === I.indexOf("urn:isbn:")) {
          I = I.substr(9).toUpperCase().split("-").join("");
          if (13 === I.length) {
            I = I.toString().slice(3, -1);
            for (var Q = 0, ea = 0; 9 > ea; ea++) {
              Q += (I.charAt(ea) - 0) * (10 - ea);
            }
            Q = (11 - Q % 11) % 11;
            Q = 10 === Q ? "X" : Q.toString();
            I += Q;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        P = xa ? zb(Pb(h), S, {className:P}) : V(h, S, {className:P});
        V(P, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:I, J:E ? "0" : t} : {G:!0, href:I, J:E ? "0" : t}, wa);
      }
      if (Ka) {
        for (var d = Ob(Ka, "blockquote"), h, v = -1, H, C; h = d[++v];) {
          H = qa(h, "title"), C = qa(h, "cite"), H && C ? (Da(h, "title"), c(H, C, "js-bqLink", !0)) : C && (Da(h, "cite"), c(l.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var Xb, Hb, ub, Xa, mb, Ya, Yb;
    za(function() {
      var c = La("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== t ? "f" : f.onmozfullscreenchange !== t ? "mozF" : f.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        Xb = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || Xb ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', W(c.firstChild, "click", X), c = ma(c), Hb = ma(c), mb = Ob(c, "section"), ub = f.createElement("h1"), ub.innerHTML = bb("h1")[0].innerHTML, Yb = mb.length, mb.splice(0, 0, ub), 0 !== d ? W(f, d + "ullscreenchange", L) : y ? W(f, "MSFullscreenChange", L, !1) : Sb(L)) : Na(c);
      }
    });
  })();
  Ib = f.scripts || bb("script");
  var va = Ib[Ib.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  D("[p_assetUrl] " + va);
  var qc = rc || "1" === qa(Z, "mob");
  vb = (qc ? "mb" : "pc") + "/";
  za(function() {
    var m;
    (m = La("logger")) || alert("#logger not found!");
    for (m ? (D = function(A) {
      V(m, "P", t, A);
    }, Zb = function(A) {
      V(m, "P", {style:{color:"red"}}, A);
    }, l.onerror = function(A, q, r) {
      Zb(A + ", " + q + ", " + r);
      return !0;
    }) : l.console ? D = console.log : D = T; yb.length;) {
      D(yb.shift());
    }
    yb = null;
  });
  6.1 > ya && Cb(ec);
  Ua(fc);
  6.1 > ya && Cb(gc);
  Ua(hc);
  10 > y && (11 !== Za || 5 !== y) || (9 > E || 1 > N || !Ca && !l.addEventListener ? f.write('<link href="' + va + "css/" + vb + Mb + '" rel="stylesheet"' + (8 > E ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > E || 1.5 > N || 532 >= ab || 2 > Sa || 4 <= Sa && 8 > Sa) && za(function() {
    V($a, "link", {href:va + "css/" + vb + Mb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

