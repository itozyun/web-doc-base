var C, $a;
Array.prototype.pop || (Array.prototype.pop = function() {
  var L = this[this.length - 1];
  --this.length;
  return L;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var L = arguments, k = 0, S = L.length, f = this.length; k < S; ++k) {
    this[f + k] = L[k];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var L = this[0], k = 1, S = this.length; k < S; ++k) {
    this[k - 1] = this[k];
  }
  --this.length;
  return L;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var L = arguments, k = L.length, S = this.length += k - 1, f = S; f >= k; --f) {
    this[f] = this[f - k];
  }
  for (f = 0; f < k; ++f) {
    this[f] = L[f];
  }
  return S;
});
Array.prototype.splice || (Array.prototype.splice = function(L, k) {
  var S = arguments, f = S.length - 2 - k, ab = this.slice(L, L + k), ya;
  if (0 < f) {
    var U = this.length - 1;
    for (ya = L + k; U >= ya; --U) {
      this[U + f] = this[U];
    }
  } else if (0 > f) {
    U = L + k;
    for (ya = this.length; U < ya; ++U) {
      this[U + f] = this[U];
    }
    this.length += f;
  }
  U = 2;
  for (ya = S.length; U < ya; ++U) {
    this[U - 2 + L] = S[U];
  }
  return ab;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(L, k) {
  var S = this.length >>> 0;
  if (0 === S) {
    return -1;
  }
  if (k) {
    var f = k || 0;
    f = -Infinity === f ? 0 : (0 > f ? -f : f) | 0;
    if (S <= f) {
      return -1;
    }
  }
  for (f = 0 <= f ? f : 0 < S + f ? S + f : 0; f < S; ++f) {
    if (this[f] === L) {
      return f;
    }
  }
  return -1;
});
(function(L, k, S, f, ab, ya, U, Jb, r) {
  function P(m) {
    if (L[0] === m) {
      return Ha === Ha + "" ? U(Ha) : Ha;
    }
  }
  function ma(m) {
    var B = L[3];
    if (L[2] === m) {
      return B === B + "" ? U(B) : B;
    }
  }
  var aa = f.body, Ia = aa.style, Ja, bb, Ka, Ha = L[1], w = P(2) || P(3), Ca = P(7), Kb = P(5) || P(6), F = P(8) || P(9), M = P(11) || P(12), lb = M && 0 <= L.conpare(Ha, "1.9.1"), Lb = P(13), cb = P(15);
  ya = P(16) || P(17);
  var ac = P(10) || P(25), Ra = P(20) || P(22);
  Ra || P(23) || P(21) || P(24);
  var bc = Ra && U(ab.userAgent.split("Edg/")[1]);
  ab = U(ab.appVersion.split("Trident/")[1]) + 4;
  var Mb = ma(35) || ma(36) || ma(37), cc = !w && !Ca && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Nb = (Ca ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : 7.2 > F ? "opr70" : 8 > F ? "opr72" : 9.5 > F ? "opr" + (F | 0) : M && !lb ? 1.3 <= M ? "gck190" : 1 <= M ? "gck121" : "gck097" : "modern") + ".css", wb = "", tc = ma(1) || ma(2) || ma(3) || 
  ma(4) || ma(8) || ma(9) || ma(10), dc, Ob = Ia.transform !== r ? "transform" : Ia["-o-transform"] !== r ? "-o-transform" : Ia["-ms-transform"] !== r ? "-ms-transform" : Ia.MozTransform !== r ? "-moz-transform" : Ia["-webkit-transform"] !== r ? "-webkit-transform" : "", Da = [], ec = [], fc, ra, mb, xb, yb = [], zb = [], gc, hc, ic, jc;
  (function() {
    function m() {
      for (var a, g = 0, n = new Date() - 0; g < G.length;) {
        n < G[0].t ? ++g : (a = G.splice(g, 1)[0], a.f(a.p));
      }
      b = G.length ? setTimeout(m, na) : 0;
    }
    function B() {
      for (var a, g = 0; g < y.length; ++g) {
        a = y[g], a.f();
      }
    }
    function t() {
      ea && (ea = clearInterval(ea));
    }
    function u() {
      b && (b = clearTimeout(b));
    }
    C = function(a) {
      yb.push(a);
    };
    $a = function(a) {
      zb.push(a);
    };
    xb = function(a) {
      y.length || (ea = setInterval(B, q));
      y.push({f:a, v:++K});
      return K;
    };
    gc = function() {
      ea && (t(), ea = setInterval(B, q));
    };
    hc = t;
    var y = [], q = 500, K = 0, ea;
    if (5 > w || Ca) {
      k._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    ra = function(a, g, n) {
      G.length || (b = setTimeout(m, na));
      G.push({f:a, p:g, v:++ka, t:new Date() - 0 + (na < n ? n : na)});
      return ka;
    };
    mb = function(a) {
      for (var g = G.length, n; n = G[--g];) {
        if (n.v === a) {
          G.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    ic = function() {
      b && (u(), b = setTimeout(m, na));
    };
    jc = u;
    var G = [], na = 16, ka = 0, b;
    if (5 > w || Ca) {
      k._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var La, Sa, Pb, oa, Ma, kc, Qb, W, Ab, lc, mc, Na, nb, Bb, sa, Ta, za, Rb, nc, Cb, Sb, Ua, ia, fa;
  (function() {
    function m(b, a, g) {
      var n = ["<", b], v = 1, A, Y;
      if (a) {
        for (A in a) {
          var N = a[A];
          if (null != N && "" !== N) {
            if ("style" === A) {
              n[++v] = ' style="';
              for (Y in N) {
                for (var la = ++v, J, O = [], V = Y.split(""), Ea = V.length; Ea;) {
                  J = V[--Ea], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), O[Ea] = J;
                }
                n[la] = O.join("") + ":" + N[Y] + ";";
              }
              n[++v] = '"';
            } else {
              "className" === A && (A = "class"), n[++v] = " " + A + '="' + N + '"';
            }
          }
        }
      }
      n[++v] = ">";
      null != g && (G && "font" !== b ? n[++v] = "<FONT>" + g + "</FONT>" : n[++v] = g);
      n[++v] = "</" + b + ">";
      return n.join("");
    }
    function B(b) {
      return t(f, b);
    }
    function t(b, a) {
      var g = "*" === a && 6 > w ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], v = 0, A;
      for (A = g.length; v < A; ++v) {
        n[v] = g[v];
      }
      return n;
    }
    function u(b) {
      return G ? b.parentElement : b.parentNode;
    }
    function y(b, a, g, n, v, A) {
      if (G) {
        var Y = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", N = Ma(2 > b ? oa(a) : a);
        N = 2 > b ? N.indexOf(a) + b : N.length;
        a.insertAdjacentHTML(Y, m(g, n, v));
        return Ma(a)[N];
      }
      a = na ? f.createElement(m(g, n)) : A ? f.createElementNS("http://www.w3.org/2000/svg", g) : f.createElement(g);
      if (n && !na) {
        for (Y in n) {
          if ((g = n[Y]) || 0 === g) {
            switch(Y) {
              case "class":
              case "className":
                Cb(a, g);
                break;
              case "style":
                b = a.style;
                for (N in g) {
                  b[N] = g[N];
                }
                break;
              default:
                Ta(a, Y, g);
            }
          }
        }
      }
      ka || null != v && q(a, v);
      return a;
    }
    function q(b, a) {
      if (G) {
        return y(2, b, "font", r, a);
      }
      var g = f.createTextNode("" + a);
      b.appendChild(g);
      return g;
    }
    function K(b, a) {
      9 > w ? b.className = a : b.setAttribute("class", a);
    }
    function ea(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var G = 5 > w;
    Ja = B("html")[0];
    bb = B("head")[0];
    La = function(b) {
      return k[b] || f[b] || f.getElementById(b);
    };
    Sa = B;
    Pb = t;
    oa = u;
    Ma = function(b) {
      b = G ? b.children : b.childNodes;
      for (var a = [], g = b.length; g;) {
        a[--g] = b[g];
      }
      return a;
    };
    kc = function(b) {
      var a = !(7.03 < F && 7.2 > F) && b.children;
      b = a ? a : b.childNodes;
      for (var g = [], n = b.length, v = -1, A; n;) {
        if (A = b[--n], a || 1 === A.nodeType) {
          G && "FONT" === A.tagName || (g[++v] = A);
        }
      }
      return g;
    };
    Qb = function(b) {
      return G ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    W = function(b, a, g, n, v) {
      a = y(2, b, a, g, n, v);
      G || (b.appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    Ab = function(b, a, g, n, v) {
      a = y(0, b, a, g, n, v);
      G || (u(b).insertBefore(a, b), ka && null != n && q(a, n));
      return a;
    };
    lc = function(b, a, g, n, v) {
      a = y(1, b, a, g, n, v);
      var A;
      G || ((A = b.nextSibling) ? oa(A).insertBefore(a, A) : oa(b).appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    mc = q;
    Na = function(b) {
      oa(b) ? G ? b.outerHTML = "" : oa(b).removeChild(b) : C("[DOM] p_DOM_remove(), No parentNode!");
    };
    nb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Ja;) {
        if (a = oa(a), b === a) {
          return !0;
        }
      }
    };
    var na = 9 > w, ka = 9 > w;
    Bb = function(b) {
      return b.tagName.toUpperCase();
    };
    sa = function(b, a) {
      return b.getAttribute(a) || "";
    };
    Ta = function(b, a, g) {
      b.setAttribute(a, g);
    };
    za = function(b, a) {
      b.removeAttribute(a);
    };
    Rb = function(b, a) {
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    };
    nc = function(b) {
      return b.className;
    };
    Cb = K;
    Sb = ea;
    Ua = function(b, a) {
      var g;
      if (!ea(b, a)) {
        if (g = b.className) {
          a = " " + a;
        }
        K(b, g + a);
      }
    };
    ia = function(b, a, g) {
      b.style[a] = g;
    };
    fa = function(b, a) {
      var g = -1, n, v;
      if (5.5 > w) {
        if (a) {
          for (n = a.split(";"); v = n[++g];) {
            var A = v.split(":");
            b.style[A[0]] = v.substr(A[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > F || 1 > M ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    Da.splice(0, 0, function() {
      function b(N) {
        N = Ma(N);
        for (var la = N.length, J, O, V; la;) {
          if (J = N[--la], O = J.nodeType, 8 === O) {
            a && A.push(J);
          } else if (1 === O) {
            switch(O = Bb(J), "/" === O.charAt(0) && (O = O.substr(1), Y[O] = !0), O) {
              case "STYLE":
                if (7.2 <= F && 9 > F) {
                  break;
                }
              case "LINK":
                G || g || nb(bb, J) || v.push(J);
                break;
              case "META":
                O = sa(J, "name") || sa(J, "property");
                for (V = n.length; V;) {
                  if (0 === O.indexOf(n[--V])) {
                    A.push(J);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Rb(J, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Rb(J, "skip-cleanup")) {
                  break;
                }
              case "!":
                A.push(J);
                break;
              case "SOURCE":
                k.HTMLSourceElement || A.push(J);
                break;
              default:
                Y[O] ? A.push(J) : Ma(J).length && b(J);
            }
          }
        }
        for (; v[0];) {
          bb.appendChild(v.pop());
        }
        for (; A[0];) {
          Na(A.pop());
        }
      }
      Ka = La("jsMain");
      var a = !(8 > F || 5 > w || Ca || .9 > M), g = 7 > w, n = ["og:", "twitter:", "fb:"], v = [], A = [], Y = {};
      b(Ja);
    });
  })();
  var X, ba, Aa, Va, Tb, Db, db, Ub, Vb, eb, ja, Wb;
  (function() {
    function m() {
      return ja = Oa ? fb ? 2 : Fa ? 3 : 1 : 0;
    }
    function B(e) {
      ba(k, "load", B);
      B = r;
      u(Da, e, !0);
      Da = r;
    }
    function t(e, l) {
      db(function() {
        var z = b(e);
        l(z);
        z.addListener(l);
        return !0;
      });
    }
    function u(e, l, z) {
      for (var p = 0; p < e.length; ++p) {
        !0 === e[p](l) && (e.splice(p, 1), --p);
      }
      z && (e.length = 0);
    }
    function y(e, l, z) {
      n && !g.length && ra(q);
      g.push(e, l, z);
    }
    function q() {
      var e = g, l;
      for (g = []; l = e.shift();) {
        u(l, e.shift(), e.shift());
      }
    }
    function K(e) {
      var l = e || event;
      e = v[l.type];
      var z = -1, p, E;
      for (w ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : Y && (l.u = l.stopPropagation, l.stopPropagation = function() {
        E = !0;
      }); p = e[++z];) {
        p.i === this ? (this.g = p.h, this.g(l), this.g = S, this.g = r) : 7.2 > F && this === f && p.i === k && (k.g = p.h, k.g(l), delete k.g);
      }
      if (w) {
        return l.preventDefault = l.stopPropagation = r, l.returnValue;
      }
      Y && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (la = !0), E && !la && l.u(), l.u = l.stopPropagation = r);
    }
    function ea() {
      var e = 9 === a.offsetWidth;
      eb !== e && (y(ec, eb = e), C("p_cssAvailability:" + eb));
    }
    function G() {
      !Da && Z && (mb(Z), Z = ra(na));
    }
    function na() {
      Z = 0;
      u(ob);
    }
    function ka(e) {
      Da || u(gb, e);
    }
    var b = k.matchMedia, a, g = [], n;
    Da.push(function() {
      t = r;
      a = W(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Aa(function() {
        n = !0;
        g.length && ra(q);
      });
    });
    X = function(e, l, z, p) {
      if (N) {
        e.addEventListener(l, z, p ? cc ? p : p.capture : !1);
      } else {
        var E = {i:e, h:z};
        p = v[l];
        var ca = "on" + l, pa, Wa;
        if (p) {
          for (pa = p.length; Wa = p[--pa];) {
            if (Wa.i === e && Wa.h === z) {
              return;
            }
          }
          v[l].push(E);
        } else {
          v[l] = p = [E], A || (l = e[ca], "function" === typeof l && l !== K && p.unshift({i:e, h:l}));
        }
        A ? e.attachEvent(ca, K) : e[ca] = K;
      }
    };
    ba = function(e, l, z, p) {
      if (N) {
        e.removeEventListener(l, z, p ? cc ? p : p.capture : !1);
      } else {
        p = v[l];
        l = "on" + l;
        var E, ca, pa;
        if (p) {
          for (E = p.length; ca = p[--E];) {
            ca.i === e && (ca.h === z ? p.splice(E, 1) : pa = !0);
          }
          pa || (A ? e.detachEvent(l, K) : (e[l] = S, e[l] = null));
        }
      }
    };
    var v = {}, A = !1, Y = 525.13 > cb, N = !Y && !Ca && k.addEventListener, la;
    Y && Ja.addEventListener("click", function(e) {
      if (la) {
        return la = !1, e.preventDefault(), !1;
      }
    });
    Aa = function(e) {
      Da ? Da.push(e) : alert("Load event has already been dispatched!");
    };
    Va = function(e) {
      J && J.push(e);
    };
    var J = [];
    if (419.3 >= cb) {
      var O = function() {
        if (O) {
          var e = f.readyState;
          "loaded" === e || "complete" === e ? (O = r, B()) : ra(O);
        }
      };
      ra(O);
    } else {
      X(k, "load", B);
    }
    w || 1.8 > M ? X(k, "unload", function(e) {
      u(J, e, !0);
    }) : J = r;
    db = function(e) {
      ec.push(e);
    };
    Aa(function() {
      ea();
      xb(ea);
    });
    Vb = function(e) {
      V && V.push(e);
    };
    var V = [], Ea = 60 > M || Lb, Oa, Fa, fb;
    if (89 <= M || 89 <= Ra || Mb && 79 <= bc || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Wb = !0, t("(forced-colors:active)", function(e) {
        Oa = e.matches;
        y(V, m());
        C("(forced-colors:active):" + ja);
      });
    } else if (10 <= w || Kb || Mb && bc) {
      Wb = !0, t("(-ms-high-contrast:black-on-white)", function(e) {
        Oa = Fa = e.matches;
        ja !== m() && (y(V, ja), C("(-ms-high-contrast:black-on-white):" + ja));
      }), t("(-ms-high-contrast:white-on-black)", function(e) {
        Oa = fb = e.matches;
        ja !== m() && (y(V, ja), C("(-ms-high-contrast:white-on-black):" + ja));
      }), t("(-ms-high-contrast:active)", function(e) {
        Oa = e.matches;
        ja !== m() && (y(V, ja), C("(-ms-high-contrast:active):" + ja));
      });
    } else if (Mb && (w || M && 0 <= L.conpare(Ha, "1.8.1") || Lb)) {
      var Xa = function() {
        function e(E, ca) {
          C("isBlack:" + E);
          return "#000000" === E || "rgb(0,0,0)" === E || ca && "transparent" === E;
        }
        function l(E, ca) {
          C("isWhite:" + E);
          return "#ffffff" === E || "rgb(255,255,255)" === E || ca && "transparent" === E;
        }
        var z = f.defaultView, p = z ? z.getComputedStyle(a, null) : a.currentStyle;
        z = (p && p.color || "").split(" ").join("");
        p = (p && p.backgroundColor || "").split(" ").join("");
        z && (Oa = "#123456" !== z && "rgb(18,52,86)" !== z, Fa = e(z) && l(p, !0), fb = l(z) && e(p, !0), ja !== m() && (C("(forced-colors-fallback):" + ja), y(V, ja, Ea)));
      };
      db(function(e) {
        if (e) {
          return ia(a, "color", "#123456"), ia(a, "backgroundColor", "#123456"), Ea ? (Xa(), V = r) : Xa() && xb(Xa), Xa = r, !0;
        }
      });
    } else {
      V = m = r;
    }
    Ub = function(e) {
      Da || alert("p_listenImageReady is called back for images present at load time.");
      qa.push(e);
    };
    var qa = [], ta = 7.5 <= F && 8 > F;
    ta && function() {
      for (var e = f.images, l = e.length, z; l;) {
        z = e[--l], z.s = z.src, za(z, "src");
      }
    }();
    Aa(function() {
      function e() {
        p ? (E = z[--p], ta && Ta(E, "src", E.s), fc(l, ta ? E.s : E.src)) : qa = r;
      }
      function l(ca) {
        u(qa, {m:E, o:ca}, !p);
        e();
      }
      var z = f.images || Sa("img"), p = z.length;
      if (12 > F || 532 > cb) {
        e();
      } else {
        for (; p;) {
          var E = z[--p];
          y(qa, {m:E, o:9 > w ? E.complete : 0 <= E.naturalWidth ? E.naturalWidth : E.width}, !p);
        }
        qa = r;
      }
    });
    Tb = function(e) {
      ob.push(e);
    };
    var ob = [], Z;
    X(k, "resize", G);
    Va(function() {
      Z && clearTimeout(Z);
      ba(k, "resize", G);
    });
    Db = function(e) {
      gb.push(e);
    };
    var gb = [], pb = 0, Ga = 1 > M || 1.2 <= M && 1.8 > M || 7.2 >= F;
    Ga ? xb(function() {
      var e = k.scrollY || aa.scrollTop;
      pb !== e && (pb = e, ka());
    }) : X(k, "scroll", ka);
    Va(function() {
      Ga || ba(k, "scroll", ka);
    });
  })();
  var oc = 0;
  (function() {
    function m(q) {
      return q.styleSheet || q.sheet;
    }
    var B = 1 > M || 8 <= F && 9 > F, t = 7.2 <= F && 8 > F, u = !!w || !B && !t && function() {
      var q = W(Ja, "style"), K = !!m(q);
      K && (C("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), C("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), C("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), C("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), C("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText)));
      Na(q);
      return K;
    }();
    C("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + u);
    var y = !u && cb && !B && !t && function() {
      var q = W(Ja, "style"), K;
      mc(q, "");
      if (K = !!m(q)) {
        C("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), C("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), C("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), C("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), C("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText));
      }
      Na(q);
      return K;
    }();
    u || C("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + y);
    oc = B || t ? 1 : u || y ? 2 : 0;
    C("[CSSOM] p_CSSOM_canuse : " + oc);
  })();
  (function() {
    9 > w && Aa(function() {
      var m = W(aa, "div");
      fa(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      dc = 1 < m.offsetHeight;
      fa(m, "");
      Na(m);
    });
    fc = function(m, B) {
      function t() {
        y || !q || u.complete ? (C("[imageTest] timer -> img.complete. img.width=" + u.width), ra(m, !!u.width), u.onerror = u.onload = S, u = m = r) : (--q, ra(t));
      }
      var u = new Image(), y, q = 99;
      C("[imageTest] start.");
      u.onerror = function() {
        C("[imageTest] error!");
        y = !0;
      };
      u.onload = function() {
        C("[imageTest] onload.");
        y = !0;
      };
      u.src = B;
      ra(t);
    };
  })();
  (function() {
    if (!Wb) {
      var m, B = function() {
        m = W(bb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + wb + "hc/" + Nb});
        if (Ob || 5.5 <= w && 9 > w && dc) {
          Ua(aa, "jsCanRotate"), C("jsCanRotate!");
        }
        B = r;
      };
      Vb(function(t) {
        t && !m ? B() : m && (t ? bb.appendChild(m) : Na(m));
      });
    }
    Ub(function(t) {
      var u = t.m;
      t = t.o;
      var y = oa(u);
      !Sb(y, "aBodyRoot") && t ? Ua(y, "img-loaded") : t || sa(u, "alt") || ia(u, "display", "none");
    });
    5.5 <= w && 8 > w && Vb(function(t) {
      for (var u = Sa("a"), y = u.length, q = 0, K; q < y; ++q) {
        K = u[q], t ? t && Ta(K, "hidefocus", "true") : za(K, "hidefocus");
      }
    });
    F && Aa(function() {
      for (var t = Sa("a"), u = t.length, y = 0, q; y < u; ++y) {
        q = t[y], "-1" === sa(q, "tabindex") ? za(q, "tabindex") : sa(q, "href") && Ta(q, "tabindex", "0");
      }
      t = Sa("input");
      y = 0;
      for (u = t.length; y < u; ++y) {
        q = t[y], "hidden" === sa(q, "type") && za(q, "tabindex");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.L, h = O.length, x, H, D, wa;
      if ("keydown" !== c.type || 13 === d) {
        for (; h;) {
          if (d = O[--h], d.l === this || d.j === this) {
            h = d.l;
            var I = x = d.j;
            if (d.C) {
              if (ia(h, "width", d.K), h.src = d.J, Cb(I, d.F), h = d.A) {
                fa(h, d.D), Cb(h, "caption jsCap");
              }
            } else {
              if (H = d.B) {
                for (delete d.B; x = oa(x);) {
                  if (Sb(x, "caption")) {
                    d.A = x, d.D = x.style.cssText, Ua(x, "jsCap");
                  } else {
                    var Q = Bb(x);
                    if ("DIV" === Q || "P" === Q || "BLOCKQUOT" === Q) {
                      break;
                    }
                  }
                }
                x = x.offsetWidth - 4 - 1;
                1600 < x && (x = 1600);
                if (d.G) {
                  H = H.split("=");
                  Q = H.length;
                  if (D = H[Q - 1]) {
                    (wa = U(D.substr(1))) && D === "s" + wa ? H[Q - 1] = "w" + x : H[Q] = "w" + x;
                  }
                  H = H.join("=");
                } else if (0 < H.indexOf(".bp.blogspot.com/")) {
                  H = H.split("/");
                  Q = H.length;
                  if (D = H[Q - 2]) {
                    (wa = U(D.substr(1))) && D === "s" + wa ? H[Q - 2] = "w" + x : H.splice(Q - 1, 0, "w" + x);
                  }
                  H = H.join("/");
                }
                d.H = H;
              }
              d.F = nc(I);
              Ua(I, "jsPicaLarge");
              ia(h, "width", "");
              h.src = d.H;
              if (h = d.A) {
                fa(h, ""), Ua(h, "jsCapLarge");
              }
            }
            d.C = !d.C;
            break;
          }
        }
        B(c);
      }
    }
    function B(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function t(c) {
      for (var d = arguments, h = 0, x = d.length; h < x; ++h) {
        if (isFinite(d[h])) {
          return d[h];
        }
      }
      return 0;
    }
    function u(c) {
      var d = l;
      if (eb) {
        if (z && !d) {
          if (new Date() - 0 < z) {
            return;
          }
          z = r;
        }
        7 === c ? (a("t"), p = 0) : (a("s"), p && (p = mb(p)), Ga = t(k.pageYOffset, k.scrollY, qa.scrollTop, aa.scrollTop));
        d ? (l = q(r, d[0], d[1])) || (z = new Date() - 0 + 99) : q();
        n();
      } else {
        l = r;
      }
    }
    function y() {
      a("w.blur");
    }
    function q(c, d, h) {
      function x(Ba) {
        I = Ba;
        if (gb) {
          Q = gb + ":translate" + (e ? "3D(0," : "(0,") + Ba + (e ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ba) {
          if (!Xa && (fb || Fa)) {
            var Eb = ta.offsetWidth;
          }
          Q = Fa ? "position:fixed;width:" + Eb + "px;top:" + (Ba - H + R) + "px" : Xa ? "top:" + Ba + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ba + "px";
          fb && Q && (Q += ";" + (0 > Ba ? "clip:rect(" + -Ba + "px " + Eb + "px " + da + "px 0)" : Ba + da < qb ? "clip:rect(0 " + Eb + "px " + da + "px 0)" : "clip:rect(0 " + Eb + "px " + (qb - Ba) + "px 0)"), 8 > w || (Q = Q.split(" ").join(",")));
        }
      }
      var H = Ga, D = ob, wa = ta.offsetTop === D.offsetTop, I = 0, Q = "", xa = !0;
      if (wa) {
        for (var T = 0, R = 0, ha = D; ha && ha !== aa;) {
          R += ha.offsetTop, ha = ha.offsetParent;
        }
        I = pb;
        ha = t(k.innerHeight, qa.offsetHeight);
        var Xb = D.offsetHeight, da = Z.offsetHeight, qb = da < Xb ? Xb : da, Pa = H, hb = Pa + ha, Fb = R, Gb = Fb + qb, pc = R + I, uc = pc + da;
        D = Pa < Fb ? Fb : Pa;
        var Qa = Gb < hb ? Gb : hb, ib = Qa - D;
        Pa = Gb <= Pa;
        hb = hb <= Fb;
        if (d !== r) {
          xa = R + d;
          c = xa + h;
          if (Pa || hb) {
            return ha <= h ? (d = R, a("4.1.1")) : Pa ? (d = Gb - h, a("4.1.2")) : (d = R + h - ha, a("4.1.3")), z = r, k.scroll(t(k.pageXOffset, k.scrollX, qa.scrollLeft, aa.scrollLeft), d), a("4.1.*"), l;
          }
          da <= ib ? (T = 4, a("4.2")) : h <= ib ? da - d <= ib ? (T = 2, a("4.3.1")) : D <= xa && c <= Qa ? D < R + I && (T = 4, a("4.3.2")) : D <= xa && xa <= Qa ? (T = 5, a("4.3.3")) : D <= c && c <= Qa ? (T = 4, a("4.3.4")) : c < D ? (T = 4, a("4.3.5")) : (T = 5, a("4.3.6")) : (T = 4, a("4.4"));
          xa = r;
        } else {
          c !== r ? da <= ib ? (T = 7, xa = !1, a("3.1")) : (I -= 60 * c, T = Qa - R - da, c = D - R, I < T ? (I = T, a("3.2.1")) : c < I ? (I = c, a("3.2.2")) : a("3.2.3"), T = 6) : Xb <= da || (Pa ? (T = 1, a("2.2.1")) : hb ? a("2.2.2") : da <= ib ? (T = 3, a("2.3")) : D < pc ? (T = 3, a("2.4.1")) : uc < Qa ? (T = 2, a("2.4.2")) : H < R + da - ib ? a("2.4.3") : (T = 2, a("2.4.4")));
        }
        switch(T) {
          case 0:
            x(0);
            break;
          case 1:
            x(qb - da);
            break;
          case 2:
            x(Qa - R - da);
            break;
          case 3:
            x(D - R);
            break;
          case 4:
            x(D - R - d);
            break;
          case 5:
            x(Qa - R - (d + h));
          case 6:
            x(I);
        }
        v(I, da, R, qb, ha, d || "-", h || "-");
      } else {
        v(I, "-", "-", "-", "-", "-", "-");
      }
      fa(Z, Q);
      pb = I;
      return wa && xa;
    }
    function K(c) {
      if (eb) {
        a("m");
        M && (Ga = t(k.pageYOffset, qa.scrollTop, aa.scrollTop), n());
        var d = this !== c.target, h = d && t(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && h && q(9 >= h ? -9 >= h ? -3 : h : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ea(c) {
      for (var d = c.target, h = -1, x; x = V[++h];) {
        nb(x, d) && K(c);
      }
    }
    function G(c) {
      if (eb) {
        var d = !!gb || M, h = c.target || c.srcElement, x = 0;
        if (nb(Z, h)) {
          a(c.type || "ie5focus");
          X(h, "blur", b);
          for (c = h.offsetHeight; h && (d ? nb(Z, h) : Z !== h);) {
            x += h.offsetTop, h = h.offsetParent;
          }
          Oa ? (l = [x, c], p && mb(p), p = ra(u, 7)) : (Ga = t(k.pageYOffset, k.scrollY, qa.scrollTop, aa.scrollTop), q(r, x, c));
          A(x, c);
        }
      }
    }
    function na() {
      rb = k.onerror;
      k.onerror = ka;
      var c = f.activeElement;
      Wa !== c && (Wa = c, G({target:c}));
      k.onerror = rb;
      rb = r;
    }
    function ka() {
      C("error!");
      k.onerror = rb;
      rb = Wa = r;
      return !0;
    }
    function b() {
      ba(this, "blur", b);
      A(0, 0);
    }
    function a(c) {
      sb && (Hb && (Hb = mb(Hb)), Hb = ra(g, 0, 1400), sb.innerHTML += " " + c);
    }
    function g() {
      sb.innerHTML = "";
    }
    function n() {
      tb && (ia(tb, "top", (Ga / 10 | 0) + "px"), qc.innerHTML = " scrl:" + (Ga | 0));
    }
    function v(c, d, h, x, H, D, wa) {
      jb && (ia(jb, "top", ((c + h) / 10 | 0) + "px"), ia(jb, "height", (d / 10 | 0) + "px"), ia(tb, "height", (H / 10 | 0) + "px"), ia(Yb, "height", (aa.scrollHeight / 10 | 0) + "px"), rc.innerHTML = "conY:" + h + "/sidY" + c + ", conH:" + x + "/sidH" + d + ", focY:" + D + " focH:" + wa);
    }
    function A(c, d) {
      ub && (ia(ub, "top", (c / 10 | 0) + "px"), ia(ub, "height", (d / 10 | 0) + "px"));
    }
    function Y() {
      Zb.call(Ib);
    }
    function N() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || k.fullScreen ? (Ta(Ib, "id", "blog2slide-root"), kb[1].parentNode.insertBefore(vb, kb[1]), la(), f.onkeydown = J) : Ya && (Na(vb), za(Ib, "id"), za(Ya, "id"), Ya = f.onkeydown = r);
    }
    function la() {
      Ya && za(Ya, "id");
      Za = 0 < Za ? $b < Za ? $b : Za : 0;
      Ya = kb[Za];
      Ta(Ya, "id", "blog2slide-current");
    }
    function J(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Za, la();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Za, la();
      }
    }
    var O = [];
    ac || (Ub(function(c) {
      if (c.o && Ka) {
        c = c.m;
        var d = oa(c), h = "", x;
        if ("A" === Bb(d) && 1 === kc(d).length) {
          var H = sa(d, "href"), D = H.split("?")[0].split("#")[0].split(".");
          D = (D[D.length - 1] || "").toLowerCase();
          if ((x = 0 < H.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + D + ".")) {
            X(d, "keydown", m), X(c, "click", m), X(d, "click", B), 9 > F || (h = c.offsetWidth - 4 + "px", ia(c, "width", h)), Ua(d, "jsPica"), O.push({j:d, J:c.src, K:h, B:H, l:c, G:x});
          }
        }
      }
    }), Va(function(c, d) {
      for (c = -1; d = O[++c];) {
        ba(d.j, "keydown", m), ba(d.l, "click", m), ba(d.j, "click", B);
      }
    }));
    var V = ["jsSidebarFixer1", "jsSidebarFixer2"], Ea = M || Lb || Kb, Oa = !(6 <= w && 9 > w || F || 1 <= M && 1.3 > M), Fa = !(5 > P(16) || 5 > P(17) || 2.2 > P(21) || 6 > P(12) || ma(30) && 534 > cb || ma(32) || 7 > w || 9 > F || 1 > M), fb = Fa || 7 > w || 1 > M, Xa = 7.5 > F, qa, ta, ob, Z, gb = Ob, pb = 0, Ga = 0, e, l, z, p, E = M && 0 <= L.conpare(Ha, "0.9.7"), ca = M && 0 >= L.conpare(Ha, "0.9.4");
    sc || ac || (db(function(c) {
      if (c) {
        if (!Ka) {
          return !0;
        }
        c = -1;
        var d;
        qa = "CSS1Compat" !== f.compatMode ? aa : Ja || aa;
        ta = La("jsSide");
        ob = Ka;
        if (!ta) {
          return !0;
        }
        Db(u);
        Tb(u);
        Z = Ab(Qb(ta), "div", {id:"jsSidebarFixer"});
        X(k, "blur", y);
        for (8 > F || ca || 6 > w || (w || Ca ? X(Z, "focusin", G) : Ea ? X(f, "focus", G, {capture:!0, passive:!1}) : X(Z, "DOMFocusIn", G, !1)); 1 < Ma(ta).length;) {
          Z.appendChild(Ma(ta)[1]);
        }
        for (E && !lb && X(f, "DOMMouseScroll", ea, !1); d = V[++c];) {
          var h = La(d);
          h.onwheel !== r ? X(h, "wheel", K, {passive:!1}) : lb ? X(h, "MozMousePixelScroll", K, !1) : E ? V[c] = La(d) : (h.onmousewheel !== r || 9 <= F) && X(h, "mousewheel", K, !1);
        }
        w || Kb || 2 > Ra || (e = Ia.perspective !== r || Ia.MozPerspective !== r || Ia["-webkit-perspective"] !== r);
        u();
        return !0;
      }
    }), Va(function() {
      var c = -1, d;
      if (E && !lb) {
        ba(f, "DOMMouseScroll", ea, !1);
      } else {
        for (; d = V[++c];) {
          d = La(d), d.onwheel !== r ? ba(d, "wheel", K, {passive:!1}) : lb ? ba(d, "MozMousePixelScroll", K, !1) : (d.onmousewheel !== r || 9 <= F) && ba(d, "mousewheel", K, !1);
        }
      }
      ba(k, "blur", y);
      8 > F || ca || 6 > w || (w || Ca ? ba(Z, "focusin", G, !1) : Ea ? ba(f, "focus", G, {capture:!0, passive:!1}) : ba(Z, "DOMFocusIn", G, !1));
      pa && clearInterval(pa);
    }));
    var pa, Wa, rb;
    6 > w && db(function(c) {
      if (!Ka) {
        return !0;
      }
      c ? pa = setInterval(na, 333) : pa && (clearInterval(pa), pa = 0);
    });
    var rc, qc, sb, Yb, tb, jb, ub, Hb;
    db(function(c) {
      if (c) {
        if (!Ka) {
          return !0;
        }
        var d = Ma(aa);
        c = Ab(d[0], "div");
        if (Fa) {
          fa(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; d.length;) {
            c.appendChild(d.shift());
          }
          fa(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = lc(c, "div");
          fa(Ja, "overflow:hidden");
          fa(aa, "overflow:hidden");
          fa(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        W(c, "div", r, Ob ? "transform" + (e ? "3D" : "") : Fa ? "pos:fixed" : "pos:absolute");
        d = W(c, "div");
        rc = W(d, "span");
        qc = W(d, "span");
        sb = W(c, "div");
        Yb = W(c, "div");
        fa(Yb, "position:absolute;left:0;top:0;width:54px;background:#242");
        jb = W(c, "div");
        fa(jb, "position:absolute;left:0;width:54px;background:#363");
        tb = W(c, "div");
        fa(tb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ub = W(jb, "div");
        fa(ub, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Aa(function() {
      function c(wa, I, Q, xa) {
        var T = xa ? "div" : "cite";
        if (0 === I.indexOf("urn:isbn:")) {
          I = I.substr(9).toUpperCase().split("-").join("");
          if (13 === I.length) {
            I = I.toString().slice(3, -1);
            for (var R = 0, ha = 0; 9 > ha; ha++) {
              R += (I.charAt(ha) - 0) * (10 - ha);
            }
            R = (11 - R % 11) % 11;
            R = 10 === R ? "X" : R.toString();
            I += R;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        Q = xa ? Ab(Qb(h), T, {className:Q}) : W(h, T, {className:Q});
        W(Q, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:I, I:F ? "0" : r} : {href:I, I:F ? "0" : r}, wa);
      }
      if (Ka) {
        for (var d = Pb(Ka, "blockquote"), h, x = -1, H, D; h = d[++x];) {
          H = sa(h, "title"), D = sa(h, "cite"), H && D ? (za(h, "title"), c(H, D, "js-bqLink", !0)) : D && (za(h, "cite"), c(k.decodeURI ? decodeURI(D) : D, D, "js-bqCite"));
        }
      }
    });
    var Zb, Ib, vb, Ya, kb, Za, $b;
    Aa(function() {
      var c = La("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        Zb = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || Zb ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(c.firstChild, "click", Y), c = oa(c), Ib = oa(c), kb = Pb(c, "section"), vb = f.createElement("h1"), vb.innerHTML = Sa("h1")[0].innerHTML, $b = kb.length, kb.splice(0, 0, vb), 0 !== d ? X(f, d + "ullscreenchange", N) : w ? X(f, "MSFullscreenChange", N, !1) : Tb(N)) : Na(c);
      }
    });
  })();
  Jb = f.scripts || Sa("script");
  var va = Jb[Jb.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  C("[p_assetUrl] " + va);
  var sc = tc || "1" === sa(aa, "mob");
  wb = (sc ? "mb" : "pc") + "/";
  Aa(function() {
    var m;
    (m = La("logger")) || alert("#logger not found!");
    for (m ? (C = function(B) {
      W(m, "P", r, B);
    }, $a = function(B) {
      W(m, "P", {style:{color:"red"}}, B);
    }, k.onerror = function(B, t, u) {
      $a(B + ", " + t + ", " + u);
      return !0;
    }) : k.console ? (C = console.log, $a = console.error) : F ? (C = S, $a = opera.postError) : C = $a = S; yb.length;) {
      C(yb.shift());
    }
    for (; zb.length;) {
      C(zb.shift());
    }
    yb = zb = r;
  });
  6.1 > ya && Db(gc);
  Va(hc);
  6.1 > ya && Db(ic);
  Va(jc);
  10 > w && (11 !== ab || 5 !== w) || (9 > F || 1 > M || !Ca && !k.addEventListener ? f.write('<link href="' + va + "css/" + wb + Nb + '" rel="stylesheet"' + (8 > F ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > F || 1.5 > M || 532 >= cb || 2 > Ra || 4 <= Ra && 8 > Ra) && Aa(function() {
    W(bb, "link", {href:va + "css/" + wb + Nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

