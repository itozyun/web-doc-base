var D, Za;
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
  var T = arguments, f = T.length - 2 - l, $a = this.slice(L, L + l), xa;
  if (0 < f) {
    var O = this.length - 1;
    for (xa = L + l; O >= xa; --O) {
      this[O + f] = this[O];
    }
  } else if (0 > f) {
    O = L + l;
    for (xa = this.length; O < xa; ++O) {
      this[O + f] = this[O];
    }
    this.length += f;
  }
  O = 2;
  for (xa = T.length; O < xa; ++O) {
    this[O - 2 + L] = T[O];
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
(function(L, l, T, f, $a, xa, O, Jb, r) {
  function P(m) {
    if (L[0] === m) {
      return Ia === Ia + "" ? O(Ia) : Ia;
    }
  }
  function na(m) {
    var B = L[3];
    if (L[2] === m) {
      return B === B + "" ? O(B) : B;
    }
  }
  var aa = f.body, Ja = aa.style, Ka, ab, La, Ia = L[1], x = P(2) || P(3), Da = P(7), Kb = P(5) || P(6), E = P(8) || P(9), K = P(11) || P(12), lb = K && 0 <= L.conpare(Ia, "1.9.1"), Lb = P(13), bb = P(15);
  xa = P(16) || P(17);
  var bc = P(10) || P(25), Ta = P(20) || P(22);
  Ta || P(23) || P(21) || P(24);
  var cc = Ta && O($a.userAgent.split("Edg/")[1]);
  $a = O($a.appVersion.split("Trident/")[1]) + 4;
  var Mb = na(35) || na(36) || na(37), dc = !x && !Da && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Nb = (Da ? "ie5mac" : 5.5 > x ? "ie5win" : 6 > x ? "ie55" : 10 > x ? "ie" + (x | 0) : 7.2 > E ? "opr70" : 8 > E ? "opr72" : 9.5 > E ? "opr" + (E | 0) : K && !lb ? 1.3 <= K ? "gck190" : 1 <= K ? "gck121" : "gck097" : "modern") + ".css", wb = "", uc = na(1) || na(2) || na(3) || 
  na(4) || na(8) || na(9) || na(10), ec, Ob = Ja.transform !== r ? "transform" : Ja["-o-transform"] !== r ? "-o-transform" : Ja["-ms-transform"] !== r ? "-ms-transform" : Ja.MozTransform !== r ? "-moz-transform" : Ja["-webkit-transform"] !== r ? "-webkit-transform" : "", Ea = [], fc = [], qa = [], gc, ra, mb, xb, yb = [], zb = [], hc, ic, jc, kc;
  (function() {
    function m() {
      for (var a, g = 0, n = new Date() - 0; g < G.length;) {
        n < G[0].t ? ++g : (a = G.splice(g, 1)[0], a.f(a.p));
      }
      b = G.length ? setTimeout(m, oa) : 0;
    }
    function B() {
      for (var a, g = 0; g < y.length; ++g) {
        a = y[g], a.f();
      }
    }
    function u() {
      da && (da = clearInterval(da));
    }
    function t() {
      b && (b = clearTimeout(b));
    }
    D = function(a) {
      yb.push(a);
    };
    Za = function(a) {
      zb.push(a);
    };
    xb = function(a) {
      y.length || (da = setInterval(B, p));
      y.push({f:a, v:++Q});
      return Q;
    };
    hc = function() {
      da && (u(), da = setInterval(B, p));
    };
    ic = u;
    var y = [], p = 500, Q = 0, da;
    if (5 > x || Da) {
      l._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    ra = function(a, g, n) {
      G.length || (b = setTimeout(m, oa));
      G.push({f:a, p:g, v:++ka, t:new Date() - 0 + (oa < n ? n : oa)});
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
    jc = function() {
      b && (t(), b = setTimeout(m, oa));
    };
    kc = t;
    var G = [], oa = 16, ka = 0, b;
    if (5 > x || Da) {
      l._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Ma, Ua, Pb, pa, Na, lc, Qb, V, Ab, mc, nc, Oa, nb, Bb, sa, cb, Fa, Rb, oc, Cb, Sb, Va, ha, ea;
  (function() {
    function m(b, a, g) {
      var n = ["<", b], v = 1, z, X;
      if (a) {
        for (z in a) {
          var M = a[z];
          if (null != M && "" !== M) {
            if ("style" === z) {
              n[++v] = ' style="';
              for (X in M) {
                for (var la = ++v, J, N = [], ia = X.split(""), ma = ia.length; ma;) {
                  J = ia[--ma], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), N[ma] = J;
                }
                n[la] = N.join("") + ":" + M[X] + ";";
              }
              n[++v] = '"';
            } else {
              "className" === z && (z = "class"), n[++v] = " " + z + '="' + M + '"';
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
      return u(f, b);
    }
    function u(b, a) {
      var g = "*" === a && 6 > x ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], v = 0, z;
      for (z = g.length; v < z; ++v) {
        n[v] = g[v];
      }
      return n;
    }
    function t(b) {
      return G ? b.parentElement : b.parentNode;
    }
    function y(b, a, g, n, v, z) {
      if (G) {
        var X = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", M = Na(2 > b ? pa(a) : a);
        M = 2 > b ? M.indexOf(a) + b : M.length;
        a.insertAdjacentHTML(X, m(g, n, v));
        a = Na(a)[M];
        null != v && ("font" === g ? a.nodeType = 3 : a.children[0].nodeType = 3);
      } else if (oa) {
        a = f.createElement(m(g, n));
      } else {
        a = z ? f.createElementNS("http://www.w3.org/2000/svg", g) : f.createElement(g);
        if (n) {
          for (X in n) {
            if ((g = n[X]) || 0 === g) {
              switch(X) {
                case "class":
                case "className":
                  Cb(a, g);
                  break;
                case "style":
                  b = a.style;
                  for (M in g) {
                    b[M] = g[M];
                  }
                  break;
                default:
                  cb(a, X, g);
              }
            }
          }
        }
        ka || null != v && p(a, v);
      }
      return a;
    }
    function p(b, a) {
      if (G) {
        return y(2, b, "font", r, a);
      }
      var g = f.createTextNode("" + a);
      b.appendChild(g);
      return g;
    }
    function Q(b, a) {
      9 > x ? b.className = a : b.setAttribute("class", a);
    }
    function da(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var G = 5 > x;
    Ka = B("html")[0];
    ab = B("head")[0];
    Ma = function(b) {
      return l[b] || f[b] || f.getElementById(b);
    };
    Ua = B;
    Pb = u;
    pa = t;
    Na = function(b) {
      b = G ? b.children : b.childNodes;
      for (var a = [], g = b.length; g;) {
        a[--g] = b[g];
      }
      return a;
    };
    lc = function(b) {
      var a = !(7.03 < E && 7.2 > E) && b.children;
      b = a ? a : b.childNodes;
      for (var g = [], n = b.length, v = -1, z; n;) {
        if (z = b[--n], a || 1 === z.nodeType) {
          G && "FONT" === z.tagName || (g[++v] = z);
        }
      }
      return g;
    };
    Qb = function(b) {
      return G ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    V = function(b, a, g, n, v) {
      a = y(2, b, a, g, n, v);
      G || (b.appendChild(a), ka && null != n && p(a, n));
      return a;
    };
    Ab = function(b, a, g, n, v) {
      a = y(0, b, a, g, n, v);
      G || (t(b).insertBefore(a, b), ka && null != n && p(a, n));
      return a;
    };
    mc = function(b, a, g, n, v) {
      a = y(1, b, a, g, n, v);
      var z;
      G || ((z = b.nextSibling) ? pa(z).insertBefore(a, z) : pa(b).appendChild(a), ka && null != n && p(a, n));
      return a;
    };
    nc = p;
    Oa = function(b) {
      pa(b) ? G ? b.outerHTML = "" : pa(b).removeChild(b) : D("[DOM] p_DOM_remove(), No parentNode!");
    };
    nb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Ka;) {
        if (a = pa(a), b === a) {
          return !0;
        }
      }
    };
    var oa = 9 > x, ka = oa;
    Bb = function(b) {
      return b.tagName.toUpperCase();
    };
    sa = function(b, a) {
      return b.getAttribute(a) || "";
    };
    cb = function(b, a, g) {
      b.setAttribute(a, g);
    };
    Fa = function(b, a) {
      b.removeAttribute(a);
    };
    Rb = function(b, a) {
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    };
    oc = function(b) {
      return b.className;
    };
    Cb = Q;
    Sb = da;
    Va = function(b, a) {
      var g;
      if (!da(b, a)) {
        if (g = b.className) {
          a = " " + a;
        }
        Q(b, g + a);
      }
    };
    ha = function(b, a, g) {
      b.style[a] = g;
    };
    ea = function(b, a) {
      var g = -1, n, v;
      if (5.5 > x) {
        if (a) {
          for (n = a.split(";"); v = n[++g];) {
            var z = v.split(":");
            b.style[z[0]] = v.substr(z[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > E || 1 > K ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    Ea.splice(0, 0, function() {
      function b(M) {
        M = Na(M);
        for (var la = M.length, J, N, ia; la;) {
          if (J = M[--la], N = J.nodeType, 8 === N) {
            a && z.push(J);
          } else if (1 === N) {
            switch(N = Bb(J), "/" === N.charAt(0) && (N = N.substr(1), X[N] = !0), N) {
              case "STYLE":
                if (7.2 <= E && 9 > E) {
                  break;
                }
              case "LINK":
                G || g || nb(ab, J) || v.push(J);
                break;
              case "META":
                N = sa(J, "name") || sa(J, "property");
                for (ia = n.length; ia;) {
                  if (0 === N.indexOf(n[--ia])) {
                    z.push(J);
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
                z.push(J);
                break;
              case "SOURCE":
                l.HTMLSourceElement || z.push(J);
                break;
              default:
                X[N] ? z.push(J) : Na(J).length && b(J);
            }
          }
        }
        for (; v[0];) {
          ab.appendChild(v.pop());
        }
        for (; z[0];) {
          Oa(z.pop());
        }
      }
      La = Ma("jsMain");
      var a = !(8 > E || 5 > x || Da || .9 > K), g = 7 > x, n = ["og:", "twitter:", "fb:"], v = [], z = [], X = {};
      b(Ka);
    });
  })();
  var W, ba, ya, Wa, Tb, Db, db, Ub, Vb, eb, Y, Wb;
  (function() {
    function m() {
      return ma ? Ga ? 2 : ob ? 3 : 1 : 0;
    }
    function B(e) {
      ba(l, "load", B);
      B = r;
      t(Ea, e, !0);
      Ea = r;
    }
    function u(e, h) {
      db(function() {
        var A = b(e);
        h(A);
        A.addListener(h);
        return !0;
      });
    }
    function t(e, h, A) {
      for (var q = 0; q < e.length; ++q) {
        !0 === e[q](h) && (e.splice(q, 1), --q);
      }
      A && (e.length = 0);
    }
    function y(e, h, A) {
      n && !g.length && ra(p);
      g.push(e, h, A);
    }
    function p() {
      var e = g, h;
      for (g = []; h = e.shift();) {
        t(h, e.shift(), e.shift());
      }
    }
    function Q(e) {
      var h = e || event;
      e = v[h.type];
      var A = -1, q, I;
      for (x ? (h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : X && (h.u = h.stopPropagation, h.stopPropagation = function() {
        I = !0;
      }); q = e[++A];) {
        q.i === this ? (this.g = q.h, this.g(h), this.g = T, this.g = r) : 7.2 > E && this === f && q.i === l && (l.g = q.h, l.g(h), delete l.g);
      }
      if (x) {
        return h.preventDefault = h.stopPropagation = r, h.returnValue;
      }
      X && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (la = !0), I && !la && h.u(), h.u = h.stopPropagation = r);
    }
    function da() {
      var e = 9 === a.offsetWidth;
      eb !== e && (y(fc, eb = e), D("p_cssAvailability:" + eb));
    }
    function G() {
      !Ea && Ha && (mb(Ha), Ha = ra(oa));
    }
    function oa() {
      Ha = 0;
      t(za);
    }
    function ka(e) {
      Ea || t(ja, e);
    }
    var b = l.matchMedia, a, g = [], n;
    Ea.push(function() {
      u = r;
      a = V(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ya(function() {
        n = !0;
        g.length && ra(p);
      });
    });
    W = function(e, h, A, q) {
      if (M) {
        e.addEventListener(h, A, q ? dc ? q : q.capture : !1);
      } else {
        var I = {i:e, h:A};
        q = v[h];
        var Z = "on" + h, Pa, Aa;
        if (q) {
          for (Pa = q.length; Aa = q[--Pa];) {
            if (Aa.i === e && Aa.h === A) {
              return;
            }
          }
          v[h].push(I);
        } else {
          v[h] = q = [I], z || (h = e[Z], "function" === typeof h && h !== Q && q.unshift({i:e, h:h}));
        }
        z ? e.attachEvent(Z, Q) : e[Z] = Q;
      }
    };
    ba = function(e, h, A, q) {
      if (M) {
        e.removeEventListener(h, A, q ? dc ? q : q.capture : !1);
      } else {
        q = v[h];
        h = "on" + h;
        var I, Z, Pa;
        if (q) {
          for (I = q.length; Z = q[--I];) {
            Z.i === e && (Z.h === A ? q.splice(I, 1) : Pa = !0);
          }
          Pa || (z ? e.detachEvent(h, Q) : (e[h] = T, e[h] = null));
        }
      }
    };
    var v = {}, z = !1, X = 525.13 > bb, M = !X && !Da && l.addEventListener, la;
    X && Ka.addEventListener("click", function(e) {
      if (la) {
        return la = !1, e.preventDefault(), !1;
      }
    });
    ya = function(e) {
      Ea ? Ea.push(e) : alert("Load event has already been dispatched!");
    };
    Wa = function(e) {
      J && J.push(e);
    };
    var J = [];
    if (419.3 >= bb) {
      var N = function() {
        if (N) {
          var e = f.readyState;
          "loaded" === e || "complete" === e ? (N = r, B()) : ra(N);
        }
      };
      ra(N);
    } else {
      W(l, "load", B);
    }
    x || .9 <= K && 1.8 > K ? W(l, "unload", function(e) {
      t(J, e, !0);
    }) : J = r;
    db = function(e) {
      fc.push(e);
    };
    ya(function() {
      da();
      xb(da);
    });
    Vb = function(e) {
      qa && qa.push(e);
    };
    var ia = 60 > K || Lb, ma, ob, Ga;
    if (89 <= K || 89 <= Ta || Mb && 79 <= cc || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Wb = !0, u("(forced-colors:active)", function(e) {
        ma = e.matches;
        Y = m();
        y(qa, Y);
        D("(forced-colors:active):" + Y);
      });
    } else if (10 <= x || Kb || Mb && cc) {
      Wb = !0, u("(-ms-high-contrast:black-on-white)", function(e) {
        ma = ob = e.matches;
        Y !== m() && (Y = m(), y(qa, Y), D("(-ms-high-contrast:black-on-white):" + Y));
      }), u("(-ms-high-contrast:white-on-black)", function(e) {
        ma = Ga = e.matches;
        Y !== m() && (Y = m(), y(qa, Y), D("(-ms-high-contrast:white-on-black):" + Y));
      }), u("(-ms-high-contrast:active)", function(e) {
        ma = e.matches;
        Y !== m() && (Y = m(), y(qa, Y), D("(-ms-high-contrast:active):" + Y));
      });
    } else if (Mb && (x || K && 0 <= L.conpare(Ia, "1.8.1") || Lb)) {
      var fb = function() {
        function e(q, I) {
          if (I && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          var Z = q.split("(")[1].split(",");
          return O(Z[0]) + O(Z[1]) + O(Z[2]);
        }
        var h = f.defaultView, A = h ? h.getComputedStyle(a, null) : a.currentStyle;
        h = (A && A.color || "").split(" ").join("");
        A = (A && A.backgroundColor || "").split(" ").join("");
        h && (ma = "#123456" !== h && "rgb(18,52,86)" !== h, ob = e(h) < e(A, !0), Ga = e(h) > e(A, !0), Y !== m() && (Y = m(), D("(forced-colors-fallback):" + Y), y(qa, Y, ia)));
      };
      db(function(e) {
        if (e) {
          return ha(a, "color", "#123456"), ha(a, "backgroundColor", "#123456"), ia ? (fb(), qa = r) : xb(fb), fb = r, !0;
        }
      });
    } else {
      qa = m = r;
    }
    Ub = function(e) {
      Ea || alert("p_listenImageReady is called back for images present at load time.");
      Qa.push(e);
    };
    var Qa = [], Ba = 7.5 <= E && 8 > E;
    Ba && function() {
      for (var e = f.images, h = e.length, A; h;) {
        A = e[--h], A.s = A.src, Fa(A, "src");
      }
    }();
    ya(function() {
      function e() {
        q ? (I = A[--q], Ba && cb(I, "src", I.s), gc(h, Ba ? I.s : I.src)) : Qa = r;
      }
      function h(Z) {
        t(Qa, {m:I, o:Z}, !q);
        e();
      }
      var A = f.images || Ua("img"), q = A.length;
      if (12 > E || 532 > bb) {
        e();
      } else {
        for (; q;) {
          var I = A[--q];
          y(Qa, {m:I, o:9 > x ? I.complete : 0 <= I.naturalWidth ? I.naturalWidth : I.width}, !q);
        }
        Qa = r;
      }
    });
    Tb = function(e) {
      za.push(e);
    };
    var za = [], Ha;
    W(l, "resize", G);
    Wa(function() {
      Ha && clearTimeout(Ha);
      ba(l, "resize", G);
    });
    Db = function(e) {
      ja.push(e);
    };
    var ja = [], gb = 0, pb = 1 > K || 1.2 <= K && 1.8 > K || 7.2 >= E;
    pb ? xb(function() {
      var e = l.scrollY || aa.scrollTop;
      gb !== e && (gb = e, ka());
    }) : W(l, "scroll", ka);
    Wa(function() {
      pb || ba(l, "scroll", ka);
    });
  })();
  var pc = 0;
  (function() {
    function m(p) {
      return p.styleSheet || p.sheet;
    }
    var B = 1 > K || 8 <= E && 9 > E, u = 7.2 <= E && 8 > E, t = !!x || !B && !u && function() {
      var p = V(Ka, "style"), Q = !!m(p);
      Q && (D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText)));
      Oa(p);
      return Q;
    }();
    D("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + t);
    var y = !t && bb && !B && !u && function() {
      var p = V(Ka, "style"), Q;
      nc(p, "");
      if (Q = !!m(p)) {
        D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText));
      }
      Oa(p);
      return Q;
    }();
    t || D("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + y);
    pc = B || u ? 1 : t || y ? 2 : 0;
    D("[CSSOM] p_CSSOM_canuse : " + pc);
  })();
  (function() {
    9 > x && ya(function() {
      var m = V(aa, "div");
      ea(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ec = 1 < m.offsetHeight;
      ea(m, "");
      Oa(m);
    });
    gc = function(m, B) {
      function u() {
        y || !p || t.complete ? (D("[imageTest] timer -> img.complete. img.width=" + t.width), ra(m, !!t.width), t.onerror = t.onload = T, t = m = r) : (--p, ra(u));
      }
      var t = new Image(), y, p = 99;
      D("[imageTest] start.");
      t.onerror = function() {
        D("[imageTest] error!");
        y = !0;
      };
      t.onload = function() {
        D("[imageTest] onload.");
        y = !0;
      };
      t.src = B;
      ra(u);
    };
  })();
  (function() {
    Ub(function(u) {
      var t = u.m;
      u = u.o;
      var y = pa(t);
      !Sb(y, "aBodyRoot") && u ? Va(y, "img-loaded") : u || sa(t, "alt") || ha(t, "display", "none");
    });
    if (!Wb && qa) {
      var m, B = function() {
        m = V(ab, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + wb + "hc/" + Nb});
        if (Ob || 5.5 <= x && 9 > x && ec) {
          Va(aa, "jsCanRotate"), D("jsCanRotate!");
        }
        B = r;
      };
      Vb(function(u) {
        u && !m ? B() : m && (u ? ab.appendChild(m) : Oa(m));
      });
    }
    5.5 <= x && 8 > x && qa && Vb(function(u) {
      for (var t = Ua("a"), y = t.length, p = 0; p < y; ++p) {
        t[p].hideFocus = !u;
      }
    });
    E && ya(function() {
      for (var u = Ua("a"), t = u.length, y = 0, p; y < t; ++y) {
        p = u[y], "-1" === sa(p, "tabindex") ? Fa(p, "tabindex") : sa(p, "href") && cb(p, "tabindex", "0");
      }
      u = Ua("input");
      y = 0;
      for (t = u.length; y < t; ++y) {
        p = u[y], "hidden" === sa(p, "type") && Fa(p, "tabindex");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.L, k = N.length, w, F, C, va;
      if ("keydown" !== c.type || 13 === d) {
        for (; k;) {
          if (d = N[--k], d.l === this || d.j === this) {
            k = d.l;
            var H = w = d.j;
            if (d.C) {
              if (ha(k, "width", d.K), k.src = d.J, Cb(H, d.F), k = d.A) {
                ea(k, d.D), Cb(k, "caption jsCap");
              }
            } else {
              if (F = d.B) {
                for (delete d.B; w = pa(w);) {
                  if (Sb(w, "caption")) {
                    d.A = w, d.D = w.style.cssText, Va(w, "jsCap");
                  } else {
                    var R = Bb(w);
                    if ("DIV" === R || "P" === R || "BLOCKQUOT" === R) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (d.G && 0 < F.split("/").pop().indexOf("=")) {
                  F = F.split("=");
                  R = F.length;
                  if (C = F[R - 1]) {
                    (va = O(C.substr(1))) && C === "s" + va ? F[R - 1] = "w" + w : F[R] = "w" + w;
                  }
                  F = F.join("=");
                } else if (0 < F.indexOf(".bp.blogspot.com/")) {
                  F = F.split("/");
                  R = F.length;
                  if (C = F[R - 2]) {
                    (va = O(C.substr(1))) && C === "s" + va ? F[R - 2] = "w" + w : F.splice(R - 1, 0, "w" + w);
                  }
                  F = F.join("/");
                }
                d.H = F;
              }
              d.F = oc(H);
              Va(H, "jsPicaLarge");
              ha(k, "width", "");
              k.src = d.H;
              if (k = d.A) {
                ea(k, ""), Va(k, "jsCapLarge");
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
    function u(c) {
      for (var d = arguments, k = 0, w = d.length; k < w; ++k) {
        if (isFinite(d[k])) {
          return d[k];
        }
      }
      return 0;
    }
    function t(c) {
      var d = A;
      if (eb) {
        if (q && !d) {
          if (new Date() - 0 < q) {
            return;
          }
          q = r;
        }
        7 === c ? (a("t"), I = 0) : (a("s"), I && (I = mb(I)), e = u(l.pageYOffset, l.scrollY, Ba.scrollTop, aa.scrollTop));
        d ? (A = p(r, d[0], d[1])) || (q = new Date() - 0 + 99) : p();
        n();
      } else {
        A = r;
      }
    }
    function y() {
      a("w.blur");
    }
    function p(c, d, k) {
      function w(Ca) {
        H = Ca;
        if (gb) {
          R = gb + ":translate" + (h ? "3D(0," : "(0,") + Ca + (h ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ca) {
          if (!Qa && (fb || Ga)) {
            var Eb = za.offsetWidth;
          }
          R = Ga ? "position:fixed;width:" + Eb + "px;top:" + (Ca - F + S) + "px" : Qa ? "top:" + Ca + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ca + "px";
          fb && R && (R += ";" + (0 > Ca ? "clip:rect(" + -Ca + "px " + Eb + "px " + ca + "px 0)" : Ca + ca < qb ? "clip:rect(0 " + Eb + "px " + ca + "px 0)" : "clip:rect(0 " + Eb + "px " + (qb - Ca) + "px 0)"), 8 > x || (R = R.split(" ").join(",")));
        }
      }
      var F = e, C = Ha, va = za.offsetTop === C.offsetTop, H = 0, R = "", wa = !0;
      if (va) {
        for (var U = 0, S = 0, fa = C; fa && fa !== aa;) {
          S += fa.offsetTop, fa = fa.offsetParent;
        }
        H = pb;
        fa = u(l.innerHeight, Ba.offsetHeight);
        var Xb = C.offsetHeight, ca = ja.offsetHeight, qb = ca < Xb ? Xb : ca, Ra = F, hb = Ra + fa, Fb = S, Gb = Fb + qb, qc = S + H, vc = qc + ca;
        C = Ra < Fb ? Fb : Ra;
        var Sa = Gb < hb ? Gb : hb, ib = Sa - C;
        Ra = Gb <= Ra;
        hb = hb <= Fb;
        if (d !== r) {
          wa = S + d;
          c = wa + k;
          if (Ra || hb) {
            return fa <= k ? (d = S, a("4.1.1")) : Ra ? (d = Gb - k, a("4.1.2")) : (d = S + k - fa, a("4.1.3")), q = r, l.scroll(u(l.pageXOffset, l.scrollX, Ba.scrollLeft, aa.scrollLeft), d), a("4.1.*"), A;
          }
          ca <= ib ? (U = 3, a("4.2")) : k <= ib ? ca - d <= ib ? (U = 2, a("4.3.1")) : C <= wa && c <= Sa ? C < S + H && (U = 4, a("4.3.2")) : C <= wa && wa <= Sa ? (U = 5, a("4.3.3")) : C <= c && c <= Sa ? (U = 4, a("4.3.4")) : c < C ? (U = 4, a("4.3.5")) : (U = 5, a("4.3.6")) : (U = 4, a("4.4"));
          wa = r;
        } else {
          c !== r ? ca <= ib ? (U = 7, wa = !1, a("3.1")) : (H -= 60 * c, U = Sa - S - ca, c = C - S, H < U ? (H = U, a("3.2.1")) : c < H ? (H = c, a("3.2.2")) : a("3.2.3"), U = 6) : Xb <= ca || (Ra ? (U = 1, a("2.2.1")) : hb ? a("2.2.2") : ca <= ib ? (U = 3, a("2.3")) : C < qc ? (U = 3, a("2.4.1")) : vc < Sa ? (U = 2, a("2.4.2")) : F < S + ca - ib ? a("2.4.3") : (U = 2, a("2.4.4")));
        }
        switch(U) {
          case 0:
            w(0);
            break;
          case 1:
            w(qb - ca);
            break;
          case 2:
            w(Sa - S - ca);
            break;
          case 3:
            w(C - S);
            break;
          case 4:
            w(C - S - d);
            break;
          case 5:
            w(Sa - S - (d + k));
          case 6:
            w(H);
        }
        v(H, ca, S, qb, fa, d || "-", k || "-");
      } else {
        v(H, "-", "-", "-", "-", "-", "-");
      }
      ea(ja, R);
      pb = H;
      return va && wa;
    }
    function Q(c) {
      if (eb) {
        a("m");
        K && (e = u(l.pageYOffset, Ba.scrollTop, aa.scrollTop), n());
        var d = this !== c.target, k = d && u(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && k && p(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function da(c) {
      for (var d = c.target, k = -1, w; w = ia[++k];) {
        nb(w, d) && Q(c);
      }
    }
    function G(c) {
      if (eb) {
        var d = !!gb || K, k = c.target || c.srcElement, w = 0;
        if (nb(ja, k)) {
          a(c.type || "ie5focus");
          W(k, "blur", b);
          for (c = k.offsetHeight; k && (d ? nb(ja, k) : ja !== k);) {
            w += k.offsetTop, k = k.offsetParent;
          }
          ob ? (A = [w, c], I && mb(I), I = ra(t, 7, 1 > K ? 500 : 0)) : (e = u(l.pageYOffset, l.scrollY, Ba.scrollTop, aa.scrollTop), p(r, w, c));
          z(w, c);
        }
      }
    }
    function oa() {
      rb = l.onerror;
      l.onerror = ka;
      var c = f.activeElement;
      Yb !== c && (Yb = c, G({target:c}));
      l.onerror = rb;
      rb = r;
    }
    function ka() {
      D("error!");
      l.onerror = rb;
      rb = Yb = r;
      return !0;
    }
    function b() {
      ba(this, "blur", b);
      z(0, 0);
    }
    function a(c) {
      sb && (Hb && (Hb = mb(Hb)), Hb = ra(g, 0, 1400), sb.innerHTML += " " + c);
    }
    function g() {
      sb.innerHTML = "";
    }
    function n() {
      tb && (ha(tb, "top", (e / 10 | 0) + "px"), rc.innerHTML = " scrl:" + (e | 0));
    }
    function v(c, d, k, w, F, C, va) {
      jb && (ha(jb, "top", ((c + k) / 10 | 0) + "px"), ha(jb, "height", (d / 10 | 0) + "px"), ha(tb, "height", (F / 10 | 0) + "px"), ha(Zb, "height", (aa.scrollHeight / 10 | 0) + "px"), sc.innerHTML = "conY:" + k + "/sidY" + c + ", conH:" + w + "/sidH" + d + ", focY:" + C + " focH:" + va);
    }
    function z(c, d) {
      ub && (ha(ub, "top", (c / 10 | 0) + "px"), ha(ub, "height", (d / 10 | 0) + "px"));
    }
    function X() {
      $b.call(Ib);
    }
    function M() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (cb(Ib, "id", "blog2slide-root"), kb[1].parentNode.insertBefore(vb, kb[1]), la(), f.onkeydown = J) : Xa && (Oa(vb), Fa(Ib, "id"), Fa(Xa, "id"), Xa = f.onkeydown = r);
    }
    function la() {
      Xa && Fa(Xa, "id");
      Ya = 0 < Ya ? ac < Ya ? ac : Ya : 0;
      Xa = kb[Ya];
      cb(Xa, "id", "blog2slide-current");
    }
    function J(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Ya, la();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Ya, la();
      }
    }
    var N = [];
    bc || (Ub(function(c) {
      if (c.o && La) {
        c = c.m;
        var d = pa(c), k = "", w;
        if ("A" === Bb(d) && 1 === lc(d).length) {
          var F = sa(d, "href"), C = F.split("?")[0].split("#")[0].split(".");
          C = (C[C.length - 1] || "").toLowerCase();
          if ((w = 0 < F.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
            W(d, "keydown", m), W(c, "click", m), W(d, "click", B), 9 > E || (k = c.offsetWidth - 4 + "px", ha(c, "width", k)), Va(d, "jsPica"), N.push({j:d, J:c.src, K:k, B:F, l:c, G:w});
          }
        }
      }
    }), Wa(function(c, d) {
      for (c = -1; d = N[++c];) {
        ba(d.j, "keydown", m), ba(d.l, "click", m), ba(d.j, "click", B);
      }
    }));
    var ia = ["jsSidebarFixer1", "jsSidebarFixer2"], ma = K || Lb || Kb, ob = !(6 <= x && 9 > x || E || 1 <= K && 1.3 > K), Ga = !(5 > P(16) || 5 > P(17) || 2.2 > P(21) || 6 > P(12) || na(30) && 534 > bb || na(32) || 7 > x || 9 > E || 1 > K), fb = Ga || 7 > x || 1 > K, Qa = 7.5 > E, Ba, za, Ha, ja, gb = Ob, pb = 0, e = 0, h, A, q, I, Z = K && 0 <= L.conpare(Ia, "0.9.7"), Pa = K && 0 >= L.conpare(Ia, "0.9.4");
    tc || bc || (db(function(c) {
      if (c) {
        if (!La) {
          return !0;
        }
        c = -1;
        var d;
        Ba = "CSS1Compat" !== f.compatMode ? aa : Ka || aa;
        za = Ma("jsSide");
        Ha = La;
        if (!za) {
          return !0;
        }
        Db(t);
        Tb(t);
        ja = Ab(Qb(za), "div", {id:"jsSidebarFixer"});
        W(l, "blur", y);
        for (8 > E || Pa || 6 > x || (x || Da ? W(ja, "focusin", G) : ma ? W(f, "focus", G, {capture:!0, passive:!1}) : W(ja, "DOMFocusIn", G, !1)); 1 < Na(za).length;) {
          ja.appendChild(Na(za)[1]);
        }
        for (Z && !lb && W(f, "DOMMouseScroll", da, !1); d = ia[++c];) {
          var k = Ma(d);
          k.onwheel !== r ? W(k, "wheel", Q, {passive:!1}) : lb ? W(k, "MozMousePixelScroll", Q, !1) : Z ? ia[c] = Ma(d) : (k.onmousewheel !== r || 9 <= E) && W(k, "mousewheel", Q, !1);
        }
        x || Kb || 2 > Ta || (h = Ja.perspective !== r || Ja.MozPerspective !== r || Ja["-webkit-perspective"] !== r);
        t();
        return !0;
      }
    }), Wa(function() {
      var c = -1, d;
      if (Z && !lb) {
        ba(f, "DOMMouseScroll", da, !1);
      } else {
        for (; d = ia[++c];) {
          d = Ma(d), d.onwheel !== r ? ba(d, "wheel", Q, {passive:!1}) : lb ? ba(d, "MozMousePixelScroll", Q, !1) : (d.onmousewheel !== r || 9 <= E) && ba(d, "mousewheel", Q, !1);
        }
      }
      ba(l, "blur", y);
      8 > E || Pa || 6 > x || (x || Da ? ba(ja, "focusin", G, !1) : ma ? ba(f, "focus", G, {capture:!0, passive:!1}) : ba(ja, "DOMFocusIn", G, !1));
      Aa && clearInterval(Aa);
    }));
    var Aa, Yb, rb;
    6 > x && db(function(c) {
      if (!La) {
        return !0;
      }
      c ? Aa = setInterval(oa, 333) : Aa && (clearInterval(Aa), Aa = 0);
    });
    var sc, rc, sb, Zb, tb, jb, ub, Hb;
    db(function(c) {
      if (c) {
        if (!La) {
          return !0;
        }
        var d = Na(aa);
        c = Ab(d[0], "div");
        if (Ga) {
          ea(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; d.length;) {
            c.appendChild(d.shift());
          }
          ea(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = mc(c, "div");
          ea(Ka, "overflow:hidden");
          ea(aa, "overflow:hidden");
          ea(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        V(c, "div", r, Ob ? "transform" + (h ? "3D" : "") : Ga ? "pos:fixed" : "pos:absolute");
        d = V(c, "div");
        sc = V(d, "span");
        rc = V(d, "span");
        sb = V(c, "div");
        Zb = V(c, "div");
        ea(Zb, "position:absolute;left:0;top:0;width:54px;background:#242");
        jb = V(c, "div");
        ea(jb, "position:absolute;left:0;width:54px;background:#363");
        tb = V(c, "div");
        ea(tb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ub = V(jb, "div");
        ea(ub, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    ya(function() {
      function c(va, H, R, wa) {
        var U = wa ? "div" : "cite";
        if (0 === H.indexOf("urn:isbn:")) {
          H = H.substr(9).toUpperCase().split("-").join("");
          if (13 === H.length) {
            H = H.toString().slice(3, -1);
            for (var S = 0, fa = 0; 9 > fa; fa++) {
              S += (H.charAt(fa) - 0) * (10 - fa);
            }
            S = (11 - S % 11) % 11;
            S = 10 === S ? "X" : S.toString();
            H += S;
          }
          10 === H.length && (H = "//www.amazon.co.jp/exec/obidos/ASIN/" + H + "/itozyun-22/ref=nosim/");
        }
        R = wa ? Ab(Qb(k), U, {className:R}) : V(k, U, {className:R});
        V(R, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:H, I:E ? "0" : r} : {href:H, I:E ? "0" : r}, va);
      }
      if (La) {
        for (var d = Pb(La, "blockquote"), k, w = -1, F, C; k = d[++w];) {
          F = sa(k, "title"), C = sa(k, "cite"), F && C ? (Fa(k, "title"), c(F, C, "js-bqLink", !0)) : C && (Fa(k, "cite"), c(l.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var $b, Ib, vb, Xa, kb, Ya, ac;
    ya(function() {
      var c = Ma("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        $b = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || $b ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', W(c.firstChild, "click", X), c = pa(c), Ib = pa(c), kb = Pb(c, "section"), vb = f.createElement("h1"), vb.innerHTML = Ua("h1")[0].innerHTML, ac = kb.length, kb.splice(0, 0, vb), 0 !== d ? W(f, d + "ullscreenchange", M) : x ? W(f, "MSFullscreenChange", M, !1) : Tb(M)) : Oa(c);
      }
    });
  })();
  Jb = f.scripts || Ua("script");
  var ta = Jb[Jb.length - 1].src.split("/");
  --ta.length;
  "js" === ta[ta.length - 1] && --ta.length;
  (ta = ta.join("/")) && (ta += "/");
  D("[p_assetUrl] " + ta);
  var tc = uc || "1" === sa(aa, "mob");
  wb = (tc ? "mb" : "pc") + "/";
  ya(function() {
    var m;
    (m = Ma("logger")) || alert("#logger not found!");
    for (m ? (D = function(B) {
      V(m, "P", r, B);
    }, Za = function(B) {
      V(m, "P", {style:{color:"red"}}, B);
    }, l.onerror = function(B, u, t) {
      Za(B + ", " + u + ", " + t);
      return !0;
    }) : l.console ? (D = console.log, Za = console.error) : E ? (D = T, Za = opera.postError) : D = Za = T; yb.length;) {
      D(yb.shift());
    }
    for (; zb.length;) {
      D(zb.shift());
    }
    yb = zb = r;
  });
  6.1 > xa && Db(hc);
  Wa(ic);
  6.1 > xa && Db(jc);
  Wa(kc);
  10 > x && (11 !== $a || 5 !== x) || (9 > E || 1 > K || !Da && !l.addEventListener ? f.write('<link href="' + ta + "css/" + wb + Nb + '" rel="stylesheet"' + (8 > E ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > E || 1.5 > K || 532 >= bb || 2 > Ta || 4 <= Ta && 8 > Ta) && ya(function() {
    V(ab, "link", {href:ta + "css/" + wb + Nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

