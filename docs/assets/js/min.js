var J, Rb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var K = this[this.length - 1];
  --this.length;
  return K;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var K = arguments, l = 0, Q = K.length, g = this.length; l < Q; ++l) {
    this[g + l] = K[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var K = this[0], l = 1, Q = this.length; l < Q; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return K;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var K = arguments, l = K.length, Q = this.length += l - 1, g = Q; g >= l; --g) {
    this[g] = this[g - l];
  }
  for (g = 0; g < l; ++g) {
    this[g] = K[g];
  }
  return Q;
});
Array.prototype.splice || (Array.prototype.splice = function(K, l) {
  var Q = arguments, g = Q.length - 2 - l, Ta = this.slice(K, K + l), sa;
  if (0 < g) {
    var R = this.length - 1;
    for (sa = K + l; R >= sa; --R) {
      this[R + g] = this[R];
    }
  } else {
    if (0 > g) {
      R = K + l;
      for (sa = this.length; R < sa; ++R) {
        this[R + g] = this[R];
      }
      this.length += g;
    }
  }
  R = 2;
  for (sa = Q.length; R < sa; ++R) {
    this[R - 2 + K] = Q[R];
  }
  return Ta;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(K, l) {
  var Q = this.length >>> 0;
  if (0 === Q) {
    return -1;
  }
  if (l) {
    var g = l || 0;
    g = -Infinity === g ? 0 : (0 > g ? -g : g) | 0;
    if (Q <= g) {
      return -1;
    }
  }
  for (g = 0 <= g ? g : 0 < Q + g ? Q + g : 0; g < Q; ++g) {
    if (this[g] === K) {
      return g;
    }
  }
  return -1;
});
(function(K, l, Q, g, Ta, sa, R, yb, L) {
  function M(m) {
    if (K[0] === m) {
      return Ua === Ua + "" ? R(Ua) : Ua;
    }
  }
  function ja(m) {
    var p = K[3];
    if (K[2] === m) {
      return p === p + "" ? R(p) : p;
    }
  }
  var Z = g.body, Ia = Z.style, La, Va, Ma, Ua = K[1], x = M(2) || M(3), Aa = M(7), zb = M(5) || M(6), A = M(8) || M(9), W = M(11) || M(12), Ab = W && 0 <= K.conpare(Ua, "1.9.1"), Bb = M(13), Wa = M(15);
  sa = M(16) || M(17);
  var Sb = M(10) || M(25), Xa = M(20) || M(22);
  Xa || M(23) || M(21) || M(24);
  var hc = Xa && R(Ta.userAgent.split("Edg/")[1]);
  Ta = R(Ta.appVersion.split("Trident/")[1]) + 4;
  var Tb = ja(35) || ja(36) || ja(37), Ub = !x && !Aa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Cb = (Aa ? "ie5mac" : 5.5 > x ? "ie5win" : 6 > x ? "ie55" : 10 > x ? "ie" + (x | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : W && !Ab ? 1.3 <= W ? "gck190" : 1 <= W ? "gck121" : "gck097" : "modern") + ".css", nb = "", ic = ja(1) || ja(2) || ja(3) || 
  ja(4) || ja(8) || ja(9) || ja(10), Vb, Db = Ia.transform !== L ? "transform" : Ia["-o-transform"] !== L ? "-o-transform" : Ia["-ms-transform"] !== L ? "-ms-transform" : Ia["-moz-transform"] !== L ? "-moz-transform" : Ia["-webkit-transform"] !== L ? "-webkit-transform" : "", ob = [], Wb, na, eb, pb, qb = [], Xb, Yb, Zb, $b;
  (function() {
    function m() {
      for (var d, h = 0, n = new Date - 0; h < E.length;) {
        n < E[0].t ? ++h : (d = E.splice(h, 1)[0], d.f(d.p));
      }
      a = E.length ? setTimeout(m, X) : 0;
    }
    function p() {
      for (var d, h = 0; h < D.length; ++h) {
        d = D[h], d.f();
      }
    }
    function N() {
      P && (P = clearInterval(P));
    }
    function v() {
      a && (a = clearTimeout(a));
    }
    J = function(d) {
      qb.push(d);
    };
    pb = function(d) {
      D.length || (P = setInterval(p, y));
      D.push({f:d, v:++V});
      return V;
    };
    Xb = function() {
      P && (N(), P = setInterval(p, y));
    };
    Yb = N;
    var D = [], y = 999, V = 0, P;
    if (5 > x || Aa) {
      l._wdb_onlooptimer = p, p = "_wdb_onlooptimer()";
    }
    na = function(d, h, n) {
      E.length || (a = setTimeout(m, X));
      E.push({f:d, p:h, v:++ha, t:new Date - 0 + (X < n ? n : X)});
      return ha;
    };
    eb = function(d) {
      for (var h = E.length, n; n = E[--h];) {
        if (n.v === d) {
          E.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      a && (v(), a = setTimeout(m, X));
    };
    $b = v;
    var E = [], X = 64, ha = 0, a;
    if (5 > x || Aa) {
      l._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Ja, fb, Eb, ta, Na, ac, Fb, S, Gb, bc, ka, Ya, rb, va, Za, Ka, Hb, cc, sb, Ib, Oa, fa, oa;
  (function() {
    function m(a, d, h) {
      var n = ["<", a], u = 1, B, T;
      if (d) {
        for (B in d) {
          var w = d[B];
          if (null != w && "" !== w) {
            if ("style" === B) {
              n[++u] = ' style="';
              for (T in w) {
                for (var aa = ++u, O, wa = [], Ba = T.split(""), la = Ba.length; la;) {
                  O = Ba[--la], "A" <= O && "Z" >= O && (O = "-" + O.toLowerCase()), wa[la] = O;
                }
                n[aa] = wa.join("") + ":" + w[T] + ";";
              }
              n[++u] = '"';
            } else {
              "className" === B && (B = "class"), n[++u] = " " + B + '="' + w + '"';
            }
          }
        }
      }
      n[++u] = ">";
      null != h && (E && "font" !== a ? n[++u] = "<FONT>" + h + "</FONT>" : n[++u] = h);
      n[++u] = "</" + a + ">";
      return n.join("");
    }
    function p(a) {
      return N(g, a);
    }
    function N(a, d) {
      var h = "*" === d && 6 > x ? "*" !== d ? a.all.tags(d.toUpperCase()) : a.all : a.getElementsByTagName(d), n = [], u = 0, B;
      for (B = h.length; u < B; ++u) {
        n[u] = h[u];
      }
      return n;
    }
    function v(a) {
      return E ? a.parentElement : a.parentNode;
    }
    function D(a, d, h, n, u, B) {
      if (E) {
        var T = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", w = Na(2 > a ? ta(d) : d);
        w = 2 > a ? w.indexOf(d) + a : w.length;
        d.insertAdjacentHTML(T, m(h, n, u));
        return Na(d)[w];
      }
      d = X ? g.createElement(m(h, n)) : B ? g.createElementNS("http://www.w3.org/2000/svg", h) : g.createElement(h);
      if (n && !X) {
        for (T in n) {
          if ((h = n[T]) || 0 === h) {
            switch(T) {
              case "class":
              case "className":
                sb(d, h);
                break;
              case "style":
                a = d.style;
                for (w in h) {
                  a[w] = h[w];
                }
                break;
              default:
                Za(d, T, h);
            }
          }
        }
      }
      ha || null != u && y(d, u);
      return d;
    }
    function y(a, d) {
      if (E) {
        return D(2, a, "font", L, d);
      }
      var h = g.createTextNode("" + d);
      a.appendChild(h);
      return h;
    }
    function V(a, d) {
      9 > x ? a.className = d : a.setAttribute("class", d);
    }
    function P(a, d) {
      return -1 !== (" " + a.className + " ").indexOf(" " + d + " ");
    }
    var E = 5 > x;
    La = p("html")[0];
    Va = p("head")[0];
    Ja = function(a) {
      return l[a] || g[a] || g.getElementById(a);
    };
    fb = p;
    Eb = N;
    ta = v;
    Na = function(a) {
      a = E ? a.children : a.childNodes;
      for (var d = [], h = a.length; h;) {
        d[--h] = a[h];
      }
      return d;
    };
    ac = function(a) {
      var d = !(7.03 < A && 7.2 > A) && a.children;
      a = d ? d : a.childNodes;
      for (var h = [], n = a.length, u = -1, B; n;) {
        if (B = a[--n], d || 1 === B.nodeType) {
          E && "FONT" === B.tagName || (h[++u] = B);
        }
      }
      return h;
    };
    Fb = function(a) {
      return E ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    S = function(a, d, h, n, u) {
      d = D(2, a, d, h, n, u);
      E || (a.appendChild(d), ha && null != n && y(d, n));
      return d;
    };
    Gb = function(a, d, h, n, u) {
      d = D(0, a, d, h, n, u);
      E || (v(a).insertBefore(d, a), ha && null != n && y(d, n));
      return d;
    };
    bc = y;
    ka = function(a) {
      ta(a) ? E ? a.outerHTML = "" : ta(a).removeChild(a) : J("[DOM] p_DOM_remove(), No parentNode!");
    };
    Ya = function(a, d) {
      if (a.contains) {
        return a.contains(d);
      }
      for (; d && d !== La;) {
        if (d = ta(d), a === d) {
          return !0;
        }
      }
    };
    var X = 9 > x, ha = 9 > x;
    rb = function(a) {
      return a.tagName.toUpperCase();
    };
    va = function(a, d) {
      return a.getAttribute(d) || "";
    };
    Za = function(a, d, h) {
      a.setAttribute(d, h);
    };
    Ka = function(a, d) {
      a.removeAttribute(d);
    };
    Hb = function(a, d) {
      return a.hasAttribute ? a.hasAttribute(d) : null != a.getAttribute(d);
    };
    cc = function(a) {
      return a.className;
    };
    sb = V;
    Ib = P;
    Oa = function(a, d) {
      var h;
      if (!P(a, d)) {
        if (h = a.className) {
          d = " " + d;
        }
        V(a, h + d);
      }
    };
    fa = function(a, d, h) {
      a.style[d] = h;
    };
    oa = function(a, d) {
      var h = -1, n, u;
      if (9 > A || 5.5 > x) {
        if (d) {
          for (n = d.split(";"); u = n[++h];) {
            var B = u.split(":");
            a.style[B[0]] = u.substr(B[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        a.style.cssText = d;
      }
    };
    ob.splice(0, 0, function() {
      function a(B) {
        B = Na(B);
        for (var T = B.length, w, aa, O; T;) {
          if (w = B[--T], aa = w.nodeType, 8 === aa) {
            d && ka(w);
          } else {
            if (1 === aa) {
              switch(aa = rb(w), aa.replace("/", "")) {
                case "STYLE":
                  if (8 <= A && 9 > A) {
                    break;
                  }
                case "LINK":
                  E || h || Ya(Va, w) || u.push(w);
                  break;
                case "META":
                  aa = va(w, "name") || va(w, "property");
                  for (O = n.length; O;) {
                    if (0 === aa.indexOf(n[--O])) {
                      ka(w);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Hb(w, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Hb(w, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  ka(w);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || ka(w);
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
                  9 > x && ka(w);
                  break;
                default:
                  Na(w).length && a(w);
              }
            }
          }
        }
        for (; u[0];) {
          Va.appendChild(u.pop());
        }
      }
      Ma = Ja("jsMain");
      var d = !(8 > A || 5 > x || Aa || .9 > W), h = 7 > x, n = ["og:", "twitter:", "fb:"], u = [];
      a(La);
    });
  })();
  var U, ba, pa, Pa, Jb, tb, Kb, Lb, dc, gb, Mb = 0;
  (function() {
    function m(e, f) {
      for (var C = 0; C < e.length; ++C) {
        !0 === e[C](f) && (e.splice(C, 1), --C);
      }
    }
    function p(e, f) {
      n && !h.length && na(N);
      h.push(e, f);
    }
    function N() {
      var e = h, f;
      for (h = []; f = e.shift();) {
        m(f, e.shift());
      }
    }
    function v(e) {
      var f = e || event;
      e = u[f.type];
      var C = -1, t, F;
      for (x ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : T && (f.u = f.stopPropagation, f.stopPropagation = function() {
        F = !0;
      }); t = e[++C];) {
        t.i === this ? (this.g = t.h, this.g(f), this.g = Q, this.g = null) : 7.2 > A && this === g && t.i === l && (l.g = t.h, l.g(f), delete l.g);
      }
      if (x) {
        return f.preventDefault = f.stopPropagation = null, f.returnValue;
      }
      T && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (aa = !0), F && !aa && f.u(), f.u = f.stopPropagation = null);
    }
    function D() {
      if (O) {
        var e = g.readyState;
        "loaded" === e || "complete" === e ? O() : na(D);
      }
    }
    function y(e) {
      m(wa, e);
    }
    function V() {
      var e = 9 === d.offsetWidth;
      gb !== e && p(Ba, gb = e);
    }
    function P() {
      return Mb = xa ? Ca ? 2 : hb ? 3 : 1 : 0;
    }
    function E() {
      !O && ya && (eb(ya), ya = na(X));
    }
    function X() {
      ya = 0;
      m($a);
    }
    function ha(e) {
      O || m(Da, e);
    }
    var a = l.matchMedia, d, h = [], n;
    ob.push(function() {
      d = S(Z, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      pa(function() {
        n = !0;
        h.length && na(N);
      });
    });
    U = function(e, f, C, t) {
      if (w) {
        e.addEventListener(f, C, t ? Ub ? t : t.capture : !1);
      } else {
        var F = {i:e, h:C};
        t = u[f];
        var da = "on" + f, Ea, Fa;
        if (t) {
          for (Ea = t.length; Fa = t[--Ea];) {
            if (Fa.i === e && Fa.h === C) {
              return;
            }
          }
          u[f].push(F);
        } else {
          u[f] = t = [F], B || (f = e[da], "function" === typeof f && f !== v && t.unshift({i:e, h:f}));
        }
        B ? e.attachEvent(da, v) : e[da] = v;
      }
    };
    ba = function(e, f, C, t) {
      if (w) {
        e.removeEventListener(f, C, t ? Ub ? t : t.capture : !1);
      } else {
        t = u[f];
        f = "on" + f;
        var F, da, Ea;
        if (t) {
          for (F = t.length; da = t[--F];) {
            da.i === e && (da.h === C ? t.splice(F, 1) : Ea = !0);
          }
          Ea || (B ? e.detachEvent(f, v) : (e[f] = Q, e[f] = null));
        }
      }
    };
    var u = {}, B = !1, T = 525.13 > Wa, w = !T && !Aa && l.addEventListener, aa;
    T && La.addEventListener("click", function(e) {
      if (aa) {
        return aa = !1, e.preventDefault(), !1;
      }
    });
    pa = function(e) {
      ob.push(e);
    };
    Pa = function(e) {
      wa.push(e);
    };
    var O = function(e) {
      ba(l, "load", O);
      O = null;
      m(ob, e);
    }, wa = [];
    419.3 >= Wa ? na(D) : U(l, "load", O);
    (x || 1.8 > W) && U(l, "unload", y);
    Kb = function(e) {
      Ba.push(e);
    };
    var Ba = [];
    pa(function() {
      V();
      pb(V);
    });
    dc = function(e) {
      la.push(e);
    };
    var la = [], xa, hb, Ca;
    if (10 <= x || zb || Tb && hc) {
      a("(-ms-high-contrast:black-on-white)").addListener(function(e) {
        xa = hb = e.matches;
        p(la, P());
      }), a("(-ms-high-contrast:white-on-black)").addListener(function(e) {
        xa = Ca = e.matches;
        p(la, P());
      }), a("(-ms-high-contrast:active)").addListener(function(e) {
        xa = e.matches;
        p(la, P());
      });
    } else {
      if (10 > x || Tb && (44 <= W || Bb)) {
        var ma = function() {
          function e(F) {
            return "#ffffff" === F || "rgb(255,255,255)" === F;
          }
          var f = g.defaultView, C = Mb, t = f ? f.getComputedStyle(d, null) : d.currentStyle;
          f = (t && t.color || "").split(" ").join("");
          t = (t && t.backgroundColor || "").split(" ").join("");
          if (f) {
            return xa = "#123456" !== f && "rgb(18,52,86)" !== f, hb = ("#000000" === f || "rgb(0,0,0)" === f) && e(t), Ca = e(f) && ("#000000" === t || "rgb(0,0,0)" === t), C !== P() && p(la, Mb), !0;
          }
        };
        pa(function() {
          fa(d, "color", "#123456");
          fa(d, "backgroundColor", "#123456");
          60 > W || Bb ? ma() : ma() && pb(ma);
          ma = null;
        });
      }
    }
    Lb = function(e) {
      ab.push(e);
    };
    var ab = [], ea = 7.5 <= A && 8 > A;
    ea && function() {
      for (var e = g.images, f = e.length, C; f;) {
        C = e[--f], C.s = C.src, Ka(C, "src");
      }
    }();
    pa(function() {
      function e() {
        t && (F = C[--t], ea && Za(F, "src", F.s), Wb(f, ea ? F.s : F.src));
      }
      function f(da) {
        m(ab, {m:F, o:da});
        e();
      }
      var C = g.images || fb("img"), t = C.length;
      if (12 > A || 532 > Wa) {
        e();
      } else {
        for (; t;) {
          var F = C[--t];
          p(ab, {m:F, o:9 > x ? F.complete : 0 <= F.naturalWidth ? F.naturalWidth : F.width});
        }
      }
    });
    Jb = function(e) {
      $a.push(e);
    };
    var $a = [], ya;
    U(l, "resize", E);
    Pa(function() {
      ya && clearTimeout(ya);
      ba(l, "resize", E);
    });
    tb = function(e) {
      Da.push(e);
    };
    var Da = [], Qa = 0, za = 1 > W || 1.2 <= W && 1.8 > W || 7.2 >= A;
    za ? pb(function() {
      var e = l.scrollY || Z.scrollTop;
      Qa !== e && (Qa = e, ha());
    }) : U(l, "scroll", ha);
    Pa(function() {
      za || ba(l, "scroll", ha);
    });
  })();
  var ec = 0;
  (function() {
    function m(y) {
      return y.styleSheet || y.sheet;
    }
    var p = 1 > W || 8 <= A && 9 > A, N = 7.2 <= A && 8 > A, v = !!x || !p && !N && function() {
      var y = S(La, "style"), V = !!m(y);
      V && (J("[CSSOM] CSSStyleSheet @insertRule : " + !!m(y).insertRule), J("[CSSOM] CSSStyleSheet @addRule : " + !!m(y).addRule), J("[CSSOM] CSSStyleSheet @cssRules : " + !!m(y).cssRules), J("[CSSOM] CSSStyleSheet @rules : " + !!m(y).rules), J("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(y).cssText)));
      ka(y);
      return V;
    }();
    J("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + v);
    var D = !v && Wa && !p && !N && function() {
      var y = S(La, "style"), V;
      bc(y, "");
      if (V = !!m(y)) {
        J("[CSSOM] CSSStyleSheet @insertRule : " + !!m(y).insertRule), J("[CSSOM] CSSStyleSheet @addRule : " + !!m(y).addRule), J("[CSSOM] CSSStyleSheet @cssRules : " + !!m(y).cssRules), J("[CSSOM] CSSStyleSheet @rules : " + !!m(y).rules), J("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(y).cssText));
      }
      ka(y);
      return V;
    }();
    v || J("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + D);
    ec = p || N ? 1 : v || D ? 2 : 0;
    J("[CSSOM] p_CSSOM_canuse : " + ec);
  })();
  (function() {
    9 > x && pa(function() {
      var m = S(Z, "div");
      oa(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Vb = 1 < m.offsetHeight;
      oa(m, "");
      ka(m);
    });
    Wb = function(m, p) {
      function N() {
        D || !y || v.complete ? (J("[imageTest] timer -> img.complete. img.width=" + v.width), na(m, !!v.width), v.onerror = v.onload = Q, v = m = null) : (--y, na(N));
      }
      var v = new Image, D, y = 99;
      J("[imageTest] start.");
      v.onerror = function() {
        J("[imageTest] error!");
        D = !0;
      };
      v.onload = function() {
        J("[imageTest] onload.");
        D = !0;
      };
      v.src = p;
      na(N);
    };
  })();
  (function() {
    function m() {
      O = S(Va, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:qa + "css/" + nb + "hc/" + Cb});
      (Db || 5.5 <= x && 9 > x && Vb) && Oa(Z, "jsCanRotate");
      m = null;
    }
    function p(b) {
      var c = b.keyCode || b.M, k = wa.length, q, z, r, Ga;
      if ("keydown" !== b.type || 13 === c) {
        for (; k;) {
          if (c = wa[--k], c.l === this || c.j === this) {
            k = c.l;
            var G = q = c.j;
            if (c.C) {
              if (fa(k, "width", c.L), k.src = c.K, sb(G, c.F), k = c.A) {
                oa(k, c.D), sb(k, "caption jsCap");
              }
            } else {
              if (z = c.B) {
                for (delete c.B; q = ta(q);) {
                  if (Ib(q, "caption")) {
                    c.A = q, c.D = q.style.cssText, Oa(q, "jsCap");
                  } else {
                    var H = rb(q);
                    if ("DIV" === H || "P" === H || "BLOCKQUOT" === H) {
                      break;
                    }
                  }
                }
                q = q.offsetWidth - 4 - 1;
                1600 < q && (q = 1600);
                if (c.H) {
                  z = z.split("=");
                  H = z.length;
                  if (r = z[H - 1]) {
                    (Ga = R(r.substr(1))) && r === "s" + Ga ? z[H - 1] = "w" + q : z[H] = "w" + q;
                  }
                  z = z.join("=");
                } else {
                  if (0 < z.indexOf(".bp.blogspot.com/")) {
                    z = z.split("/");
                    H = z.length;
                    if (r = z[H - 2]) {
                      (Ga = R(r.substr(1))) && r === "s" + Ga ? z[H - 2] = "w" + q : z.splice(H - 1, 0, "w" + q);
                    }
                    z = z.join("/");
                  }
                }
                c.I = z;
              }
              c.F = cc(G);
              Oa(G, "jsPicaLarge");
              fa(k, "width", "");
              k.src = c.I;
              if (k = c.A) {
                oa(k, ""), Oa(k, "jsCapLarge");
              }
            }
            c.C = !c.C;
            break;
          }
        }
        N(b);
      }
    }
    function N(b) {
      b.preventDefault();
      b.stopPropagation();
    }
    function v(b) {
      for (var c = arguments, k = 0, q = c.length; k < q; ++k) {
        if (isFinite(c[k])) {
          return c[k];
        }
      }
      return 0;
    }
    function D(b) {
      if (gb) {
        if (e && !za) {
          if (new Date - 0 < e) {
            return;
          }
          e = L;
        }
        7 === b ? (a("t"), f = 0) : (a("s"), f && (f = eb(f)), Da = v(l.pageYOffset, l.scrollY, Ca.scrollTop, Z.scrollTop));
        za ? (V(L, za[0], za[1]), e = new Date - 0 + 99, za = L) : V();
        h();
      } else {
        za = L;
      }
    }
    function y() {
      a("w.blur");
      V();
    }
    function V(b, c, k) {
      function q(Ha) {
        G = Ha;
        if ($a) {
          H = $a + ":translate" + (Qa ? "3D(0," : "(0,") + Ha + (Qa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch;";
        } else {
          if (hb) {
            var ib = ma.offsetWidth;
          }
          xa ? 0 !== Ha && (H = "position:fixed;width:" + ib + "px;top:" + (Ha - z + I) + "px") : H = "position:absolute;left:0;width:100%;top:" + Ha + "px";
          ib && H && (H += ";" + (0 > Ha ? "clip:rect(" + -Ha + "px " + ib + "px " + Y + "px 0)" : Ha + Y < jb ? "clip:rect(0 " + ib + "px " + Y + "px 0)" : "clip:rect(0 " + ib + "px " + (jb - Ha) + "px 0)"), 8 > x || (H = H.split(" ").join(",")));
        }
      }
      var z = Da, r = ab, Ga = ma.offsetTop === r.offsetTop, G = 0, H = "", kb = !0;
      if (Ga) {
        for (var I = 0, ca = r; ca && ca !== Z;) {
          I += ca.offsetTop, ca = ca.offsetParent;
        }
        ca = v(l.innerHeight, Ca.offsetHeight);
        var ia = r.offsetHeight, Y = ea.offsetHeight, jb = Y < ia ? ia : Y, ub = z, Nb = ub + ca, vb = I, Ob = vb + jb, fc = I + ya, jc = fc + Y;
        r = ub < vb ? vb : ub;
        var ra = Ob < Nb ? Ob : Nb, bb = ra - r;
        0 <= c ? (b = I + c, ia = b + k, Y <= bb ? (q(r - I - c), a("4.1")) : k <= bb ? Y - c <= bb ? (q(ra - I - (c + k)), a("4.2.1")) : r <= b && ia <= ra ? r < I + G && (q(r - I - c), a("4.2.2")) : r <= b && b <= ra ? (q(ra - I - (c + k)), a("4.2.3")) : r <= ia && ia <= ra ? (q(r - I - c), a("4.2.4")) : ia < r ? (q(r - I - c), a("4.2.5")) : (q(ra - I - (c + k)), a("4.2.6")) : (q(r - I - c), a("4.3"))) : b ? Y <= bb ? (kb = !1, a("3.1")) : (G = ya - 60 * b, k = ra - I - Y, r -= I, G < k ? (q(k), 
        a("3.2.1")) : r < G ? (q(r), a("3.2.2")) : (q(G), a("3.2.3"))) : ia <= Y || (Ob <= ub ? (q(jb - Y), a("2.2.1")) : Nb <= vb ? (q(0), a("2.2.2")) : Y <= bb ? (q(r - I), a("2.3")) : r < fc ? (q(r - I), a("2.4.1")) : jc < ra ? (q(ra - I - Y), a("2.4.2")) : z < I + Y - bb ? (q(0), a("2.4.3")) : (q(ra - I - Y), a("2.4.4")));
      }
      n(G, Y, I, jb, ca, c || "-");
      oa(ea, H);
      ya = G;
      return Ga && kb;
    }
    function P(b) {
      if (gb) {
        a("m");
        W && (Da = v(l.pageYOffset, Ca.scrollTop, Z.scrollTop), h());
        var c = this !== b.target, k = c && v(b.deltaY, b.wheelDeltaY / 120, b.wheelDelta / -120, b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1));
        c && k && V(9 >= k ? -9 >= k ? -3 : k : 3) && (b.preventDefault(), b.stopPropagation());
      }
    }
    function E(b) {
      for (var c = -1, k; k = Ba[++c];) {
        Ya(Ja(k), b.target) && P(b);
      }
    }
    function X(b) {
      if (gb) {
        var c = b.target || b.srcElement, k = 0;
        if (Ya(ea, c)) {
          a(b.type);
          U(c, "blur", ha);
          for (b = c.offsetHeight; c && ($a ? Ya(ea, c) : ea !== c);) {
            k += c.offsetTop, c = c.offsetParent;
          }
          9 > x || A ? (A && (Da = v(l.pageYOffset, l.scrollY, Ca.scrollTop, Z.scrollTop)), V(L, k, b)) : (za = [k, b], f && eb(f), f = na(D, 7));
          u(k, b);
        }
      }
    }
    function ha() {
      ba(this, "blur", ha);
      u(0, 0);
    }
    function a(b) {
      da && (wb && (wb = eb(wb)), wb = na(d, 0, 1400), da.innerHTML += " " + b);
    }
    function d() {
      da.innerHTML = "";
    }
    function h() {
      Fa && (fa(Fa, "top", (Da / 10 | 0) + "px"), F.innerHTML = " scrl:" + (Da | 0));
    }
    function n(b, c, k, q, z, r) {
      cb && (fa(cb, "top", ((b + k) / 10 | 0) + "px"), fa(cb, "height", (c / 10 | 0) + "px"), fa(Fa, "height", (z / 10 | 0) + "px"), fa(Ea, "height", (Z.scrollHeight / 10 | 0) + "px"), t.textContent = "y:" + k + "/" + b + ", h:" + q + "/" + c + " fy:" + r);
    }
    function u(b, c) {
      lb && (fa(lb, "top", (b / 10 | 0) + "px"), fa(lb, "height", (c / 10 | 0) + "px"));
    }
    function B() {
      Pb.call(xb);
    }
    function T() {
      g.fullscreenElement || g.fullscreen || g.webkitIsFullscreen || g.msFullscreenElement || l.fullScreen ? (Za(xb, "id", "blog2slide-root"), db[1].parentNode.insertBefore(mb, db[1]), w(), g.onkeydown = aa) : Ra && (ka(mb), Ka(xb, "id"), Ka(Ra, "id"), Ra = g.onkeydown = null);
    }
    function w() {
      Ra && Ka(Ra, "id");
      Sa = 0 < Sa ? Qb < Sa ? Qb : Sa : 0;
      Ra = db[Sa];
      Za(Ra, "id", "blog2slide-current");
    }
    function aa(b) {
      if ("ArrowRight" === b.key || 39 === b.keyCode) {
        ++Sa, w();
      } else {
        if ("ArrowLeft" === b.key || 37 === b.keyCode) {
          --Sa, w();
        }
      }
    }
    var O;
    dc(function(b) {
      b && !O ? m && m() : b ? Va.appendChild(O) : ka(O);
    });
    var wa = [];
    Sb || (Lb(function(b) {
      if (b.o && Ma) {
        b = b.m;
        var c = ta(b), k = "", q;
        if ("A" === rb(c) && 1 === ac(c).length) {
          var z = va(c, "href"), r = z.split("?")[0].split("#")[0].split(".");
          r = (r[r.length - 1] || "").toLowerCase();
          if ((q = 0 < z.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + r + ".")) {
            U(c, "keydown", p), U(b, "click", p), U(c, "click", N), 9 > A || (k = b.offsetWidth - 4 + "px", fa(b, "width", k)), Oa(c, "jsPica"), wa.push({j:c, K:b.src, L:k, B:z, l:b, H:q});
          }
        }
      }
    }), Pa(function(b, c) {
      for (b = -1; c = wa[++b];) {
        ba(c.j, "keydown", p), ba(c.l, "click", p), ba(c.j, "click", N);
      }
    }));
    var Ba = ["jsSidebarFixer1", "jsSidebarFixer2"], la = W || Bb || zb, xa = !(5 > M(16) || 5 > M(17) || 2.2 > M(21) || 6 > M(12) || ja(30) && 534 > Wa || ja(32) || 7 > x || 9 > A), hb = xa || 7 > x, Ca, ma, ab, ea, $a = Db, ya = 0, Da = 0, Qa, za, e, f, C = W && 0 <= K.conpare(Ua, "0.9.7");
    gc || Sb || 8 > A || (Kb(function(b) {
      if (b) {
        if (!Ma) {
          return !0;
        }
        b = -1;
        var c;
        Ca = "CSS1Compat" !== g.compatMode ? Z : La || Z;
        ma = Ja("jsSide");
        ab = Ma;
        if (!ma) {
          return !0;
        }
        tb(D);
        Jb(D);
        ea = Gb(Fb(ma), "div", {id:"jsSidebarFixer"});
        U(l, "blur", y);
        for (x || Aa ? U(ea, "focusin", X) : la ? U(g, "focus", X, {capture:!0, passive:!1}) : U(ea, "DOMFocusIn", X, !1); 1 < Na(ma).length;) {
          ea.appendChild(Na(ma)[1]);
        }
        for (; c = Ba[++b];) {
          c = Ja(c), c.onwheel !== L ? U(c, "wheel", P, {passive:!1}) : Ab ? U(c, "MozMousePixelScroll", P, !1) : C || (c.onmousewheel !== L || A) && U(c, "mousewheel", P, !1);
        }
        C && U(g, "DOMMouseScroll", E, !1);
        Qa = !x && !zb && !(2 > Xa) && (Ia.perspective !== L || Ia["-moz-perspective"] !== L || Ia["-webkit-perspective"] !== L);
        D();
        return !0;
      }
    }), Pa(function() {
      for (var b = -1, c; c = Ba[++b];) {
        c = Ja(c), c.onwheel !== L ? ba(c, "wheel", P, {passive:!1}) : Ab ? ba(c, "MozMousePixelScroll", P, !1) : C || (c.onmousewheel !== L || A) && ba(c, "mousewheel", P, !1);
      }
      C && ba(g, "DOMMouseScroll", E, !1);
      ba(l, "blur", y);
      x || Aa ? ba(ea, "focusin", X, !1) : la ? ba(g, "focus", X, {capture:!0, passive:!1}) : ba(ea, "DOMFocusIn", X, !1);
    }));
    if (xa) {
      var t, F, da, Ea, Fa, cb, lb, wb;
      Kb(function(b) {
        if (b) {
          if (!Ma) {
            return !0;
          }
          b = S(Z, "div");
          oa(b, "position:fixed;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          S(b, "div", L, Db ? "transform" + (Qa ? "3D" : "") : xa ? "pos:fixed" : "pos:absolute");
          var c = S(b, "div");
          t = S(c, "span");
          F = S(c, "span");
          da = S(b, "div");
          Ea = S(b, "div");
          oa(Ea, "position:absolute;left:0;top:0;width:54px;background:#242");
          cb = S(b, "div");
          oa(cb, "position:absolute;left:0;width:54px;background:#363");
          Fa = S(b, "div");
          oa(Fa, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
          lb = S(cb, "div");
          oa(lb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
          return !0;
        }
      });
    }
    pa(function() {
      function b(Ga, G, H, kb) {
        var I = kb ? "div" : "cite";
        if (0 === G.indexOf("urn:isbn:")) {
          G = G.substr(9).toUpperCase().split("-").join("");
          if (13 === G.length) {
            G = G.toString().slice(3, -1);
            for (var ca = 0, ia = 0; 9 > ia; ia++) {
              ca += (G.charAt(ia) - 0) * (10 - ia);
            }
            ca = (11 - ca % 11) % 11;
            ca = 10 === ca ? "X" : ca.toString();
            G += ca;
          }
          10 === G.length && (G = "//www.amazon.co.jp/exec/obidos/ASIN/" + G + "/itozyun-22/ref=nosim/");
        }
        H = kb ? Gb(Fb(k), I, {className:H}) : S(k, I, {className:H});
        S(H, "a", 0 === G.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:G, J:A ? "0" : L} : {G:!0, href:G, J:A ? "0" : L}, Ga);
      }
      if (Ma) {
        for (var c = Eb(Ma, "blockquote"), k, q = -1, z, r; k = c[++q];) {
          z = va(k, "title"), r = va(k, "cite"), z && r ? (Ka(k, "title"), b(z, r, "js-bqLink", !0)) : r && (Ka(k, "cite"), b(l.decodeURI ? decodeURI(r) : r, r, "js-bqCite"));
        }
      }
    });
    var Pb, xb, mb, Ra, db, Sa, Qb;
    pa(function() {
      var b = Ja("blog2slide-start");
      if (b) {
        var c = g.onfullscreenchange !== L ? "f" : g.onmozfullscreenchange !== L ? "mozF" : g.onwebkitfullscreenchange !== L ? "webkitF" : 0;
        Pb = b.requestFullscreen || b.webkitRequestFullscreen || b.mozRequestFullscreen || b.msRequestFullscreen;
        0 !== c || Pb ? (b.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', U(b.firstChild, "click", B), b = ta(b), xb = ta(b), db = Eb(b, "section"), mb = g.createElement("h1"), mb.innerHTML = fb("h1")[0].innerHTML, Qb = db.length, db.splice(0, 0, mb), 0 !== c ? U(g, c + "ullscreenchange", T) : x ? U(g, "MSFullscreenChange", T, !1) : Jb(T)) : ka(b);
      }
    });
    Lb(function(b) {
      var c = b.m;
      b = b.o;
      var k = ta(c);
      !Ib(k, "aBodyRoot") && b ? Oa(k, "img-loaded") : b || va(c, "alt") || fa(c, "display", "none");
    });
  })();
  (function() {
    function m(p) {
      p = p.target || p.srcElement;
      Ya(Z, p) && p.offsetTop;
    }
    8 <= A && pa(function() {
      for (var p = fb("a"), N = p.length, v = 0, D; v < N; ++v) {
        D = p[v], "-1" === va(D, "tabindex") ? Ka(D, "tabindex") : va(D, "href") && Za(D, "tabindex", "0");
      }
      U(Z, "DOMFocusIn", m, !1);
    });
  })();
  yb = g.scripts || fb("script");
  var qa = yb[yb.length - 1].src.split("/");
  --qa.length;
  "js" === qa[qa.length - 1] && --qa.length;
  (qa = qa.join("/")) && (qa += "/");
  J("[p_assetUrl] " + qa);
  var gc = ic || "1" === va(Z, "mob");
  nb = (gc ? "mb" : "pc") + "/";
  pa(function() {
    var m;
    (m = Ja("logger")) || alert("#logger not found!");
    for (m ? (J = function(p) {
      S(m, "P", null, p);
    }, Rb = function(p) {
      S(m, "P", {style:{color:"red"}}, p);
    }, l.onerror = function(p, N, v) {
      Rb(p + ", " + N + ", " + v);
      return !0;
    }) : l.console ? J = console.log : J = Q; qb.length;) {
      J(qb.shift());
    }
    qb = null;
  });
  6.1 > sa && tb(Xb);
  Pa(Yb);
  6.1 > sa && tb(Zb);
  Pa($b);
  10 > x && (11 !== Ta || 5 !== x) || (9 > A || 1 > W || !Aa && !l.addEventListener ? g.write('<link href="' + qa + "css/" + nb + Cb + '" rel="stylesheet"' + (8 > A ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > A || 1.5 > W || 532 >= Wa || 2 > Xa || 4 <= Xa && 8 > Xa) && pa(function() {
    S(Va, "link", {href:qa + "css/" + nb + Cb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

