var D, Ya;
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
    var P = this.length - 1;
    for (xa = M + l; P >= xa; --P) {
      this[P + f] = this[P];
    }
  } else if (0 > f) {
    P = M + l;
    for (xa = this.length; P < xa; ++P) {
      this[P + f] = this[P];
    }
    this.length += f;
  }
  P = 2;
  for (xa = T.length; P < xa; ++P) {
    this[P - 2 + M] = T[P];
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
(function(M, l, T, f, Za, xa, P, Jb, r) {
  function Q(m) {
    if (M[0] === m) {
      return Ia === Ia + "" ? P(Ia) : Ia;
    }
  }
  function na(m) {
    var B = M[3];
    if (M[2] === m) {
      return B === B + "" ? P(B) : B;
    }
  }
  var aa = f.body, Ja = aa.style, Ka, $a, La, Ia = M[1], x = Q(2) || Q(3), Da = Q(7), Kb = Q(5) || Q(6), E = Q(8) || Q(9), J = Q(11) || Q(12), kb = J && 0 <= M.conpare(Ia, "1.9.1"), Lb = Q(13), ab = Q(15);
  xa = Q(16) || Q(17);
  var bc = Q(10) || Q(25), lb = Q(20) || Q(22);
  lb || Q(23) || Q(21) || Q(24);
  var cc = lb && P(Za.userAgent.split("Edg/")[1]);
  Za = P(Za.appVersion.split("Trident/")[1]) + 4;
  var Mb = na(35) || na(36) || na(37), dc = !x && !Da && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Nb = (Da ? "ie5mac" : 5.5 > x ? "ie5win" : 6 > x ? "ie55" : 10 > x ? "ie" + (x | 0) : 7.2 > E ? "opr70" : 8 > E ? "opr72" : 9.5 > E ? "opr" + (E | 0) : J && !kb ? 1.4 <= J ? "gck19" : 1.3 <= J ? "gck13" : 1 <= J ? "gck12" : .9 <= J ? "gck09" : .8 <= J ? "gck08" : "gck07" : "modern") + 
  ".css", wb = "", uc = na(1) || na(2) || na(3) || na(4) || na(8) || na(9) || na(10), ec, Ob = Ja.transform !== r ? "transform" : Ja["-o-transform"] !== r ? "-o-transform" : Ja["-ms-transform"] !== r ? "-ms-transform" : Ja.MozTransform !== r ? "-moz-transform" : Ja["-webkit-transform"] !== r ? "-webkit-transform" : "", Ea = [], fc = [], qa = [], gc, ra, mb, xb, yb = [], zb = [], hc, ic, jc, kc;
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
    Ya = function(a) {
      zb.push(a);
    };
    xb = function(a) {
      y.length || (da = setInterval(B, p));
      y.push({f:a, v:++R});
      return R;
    };
    hc = function() {
      da && (u(), da = setInterval(B, p));
    };
    ic = u;
    var y = [], p = 500, R = 0, da;
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
  var Ma, Ta, Pb, pa, Na, lc, Qb, V, Ab, mc, nc, Oa, nb, Bb, sa, bb, Fa, Rb, oc, Cb, Sb, Ua, ha, ea;
  (function() {
    function m(b, a, g) {
      var n = ["<", b], v = 1, z, X;
      if (a) {
        for (z in a) {
          var N = a[z];
          if (null != N && "" !== N) {
            if ("style" === z) {
              n[++v] = ' style="';
              for (X in N) {
                for (var la = ++v, K, O = [], ia = X.split(""), ma = ia.length; ma;) {
                  K = ia[--ma], "A" <= K && "Z" >= K && (K = "-" + K.toLowerCase()), O[ma] = K;
                }
                n[la] = O.join("") + ":" + N[X] + ";";
              }
              n[++v] = '"';
            } else {
              "className" === z && (z = "class"), n[++v] = " " + z + '="' + N + '"';
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
        var X = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", N = Na(2 > b ? pa(a) : a);
        N = 2 > b ? N.indexOf(a) + b : N.length;
        a.insertAdjacentHTML(X, m(g, n, v));
        a = Na(a)[N];
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
                  for (N in g) {
                    b[N] = g[N];
                  }
                  break;
                default:
                  bb(a, X, g);
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
    function R(b, a) {
      9 > x ? b.className = a : b.setAttribute("class", a);
    }
    function da(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var G = 5 > x;
    Ka = B("html")[0];
    $a = B("head")[0];
    Ma = function(b) {
      return l[b] || f[b] || f.getElementById(b);
    };
    Ta = B;
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
    bb = function(b, a, g) {
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
    Cb = R;
    Sb = da;
    Ua = function(b, a) {
      var g;
      if (!da(b, a)) {
        if (g = b.className) {
          a = " " + a;
        }
        R(b, g + a);
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
        9 > E || 1 > J ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    Ea.splice(0, 0, function() {
      function b(N) {
        N = Na(N);
        for (var la = N.length, K, O, ia; la;) {
          if (K = N[--la], O = K.nodeType, 8 === O) {
            a && z.push(K);
          } else if (1 === O) {
            switch(O = Bb(K), "/" === O.charAt(0) && (O = O.substr(1), X[O] = !0), O) {
              case "STYLE":
                if (7.2 <= E && 9 > E) {
                  break;
                }
              case "LINK":
                G || g || nb($a, K) || v.push(K);
                break;
              case "META":
                O = sa(K, "name") || sa(K, "property");
                for (ia = n.length; ia;) {
                  if (0 === O.indexOf(n[--ia])) {
                    z.push(K);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Rb(K, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Rb(K, "skip-cleanup")) {
                  break;
                }
              case "!":
                z.push(K);
                break;
              case "SOURCE":
                l.HTMLSourceElement || z.push(K);
                break;
              default:
                X[O] ? z.push(K) : Na(K).length && b(K);
            }
          }
        }
        for (; v[0];) {
          $a.appendChild(v.pop());
        }
        for (; z[0];) {
          Oa(z.pop());
        }
      }
      La = Ma("jsMain");
      var a = !(8 > E || 5 > x || Da || .9 > J), g = 7 > x, n = ["og:", "twitter:", "fb:"], v = [], z = [], X = {};
      b(Ka);
    });
  })();
  var W, ba, ya, Va, Tb, Db, cb, Ub, Vb, db, Y, Wb;
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
      cb(function() {
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
    function R(e) {
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
      db !== e && (y(fc, db = e), D("p_cssAvailability:" + db));
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
      if (N) {
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
          v[h] = q = [I], z || (h = e[Z], "function" === typeof h && h !== R && q.unshift({i:e, h:h}));
        }
        z ? e.attachEvent(Z, R) : e[Z] = R;
      }
    };
    ba = function(e, h, A, q) {
      if (N) {
        e.removeEventListener(h, A, q ? dc ? q : q.capture : !1);
      } else {
        q = v[h];
        h = "on" + h;
        var I, Z, Pa;
        if (q) {
          for (I = q.length; Z = q[--I];) {
            Z.i === e && (Z.h === A ? q.splice(I, 1) : Pa = !0);
          }
          Pa || (z ? e.detachEvent(h, R) : (e[h] = T, e[h] = null));
        }
      }
    };
    var v = {}, z = !1, X = 525.13 > ab, N = !X && !Da && l.addEventListener, la;
    X && Ka.addEventListener("click", function(e) {
      if (la) {
        return la = !1, e.preventDefault(), !1;
      }
    });
    ya = function(e) {
      Ea ? Ea.push(e) : alert("Load event has already been dispatched!");
    };
    Va = function(e) {
      K && K.push(e);
    };
    var K = [];
    if (419.3 >= ab) {
      var O = function() {
        if (O) {
          var e = f.readyState;
          "loaded" === e || "complete" === e ? (O = r, B()) : ra(O);
        }
      };
      ra(O);
    } else {
      W(l, "load", B);
    }
    x || .9 <= J && 1.8 > J ? W(l, "unload", function(e) {
      t(K, e, !0);
    }) : K = r;
    cb = function(e) {
      fc.push(e);
    };
    ya(function() {
      da();
      xb(da);
    });
    Vb = function(e) {
      qa && qa.push(e);
    };
    var ia = 60 > J || Lb, ma, ob, Ga;
    if (89 <= J || 89 <= lb || Mb && 79 <= cc || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
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
    } else if (Mb && (x || J && 0 <= M.conpare(Ia, "1.8.1") || Lb)) {
      var eb = function() {
        function e(q, I) {
          if (I && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          var Z = q.split("(")[1].split(",");
          return P(Z[0]) + P(Z[1]) + P(Z[2]);
        }
        var h = f.defaultView, A = h ? h.getComputedStyle(a, null) : a.currentStyle;
        h = (A && A.color || "").split(" ").join("");
        A = (A && A.backgroundColor || "").split(" ").join("");
        h && (ma = "#123456" !== h && "rgb(18,52,86)" !== h, ob = e(h) < e(A, !0), Ga = e(h) > e(A, !0), Y !== m() && (Y = m(), D("(forced-colors-fallback):" + Y), y(qa, Y, ia)));
      };
      cb(function(e) {
        if (e) {
          return ha(a, "color", "#123456"), ha(a, "backgroundColor", "#123456"), ia ? (eb(), qa = r) : xb(eb), eb = r, !0;
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
        q ? (I = A[--q], Ba && bb(I, "src", I.s), gc(h, Ba ? I.s : I.src)) : Qa = r;
      }
      function h(Z) {
        t(Qa, {m:I, o:Z}, !q);
        e();
      }
      var A = f.images || Ta("img"), q = A.length;
      if (12 > E || 532 > ab) {
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
    Va(function() {
      Ha && clearTimeout(Ha);
      ba(l, "resize", G);
    });
    Db = function(e) {
      ja.push(e);
    };
    var ja = [], fb = 0, pb = 1 > J || 1.2 <= J && 1.8 > J || 7.2 >= E;
    pb ? xb(function() {
      var e = l.scrollY || aa.scrollTop;
      fb !== e && (fb = e, ka());
    }) : W(l, "scroll", ka);
    Va(function() {
      pb || ba(l, "scroll", ka);
    });
  })();
  var pc = 0;
  (function() {
    function m(p) {
      return p.styleSheet || p.sheet;
    }
    var B = 1 > J || 8 <= E && 9 > E, u = 7.2 <= E && 8 > E, t = !!x || !B && !u && function() {
      var p = V(Ka, "style"), R = !!m(p);
      R && (D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText)));
      Oa(p);
      return R;
    }();
    D("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + t);
    var y = !t && ab && !B && !u && function() {
      var p = V(Ka, "style"), R;
      nc(p, "");
      if (R = !!m(p)) {
        D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(p).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(p).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(p).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(p).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(p).cssText));
      }
      Oa(p);
      return R;
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
      !Sb(y, "aBodyRoot") && u ? Ua(y, "img-loaded") : u || sa(t, "alt") || ha(t, "display", "none");
    });
    if (!Wb && qa) {
      var m, B = function() {
        m = V($a, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + wb + "hc/" + Nb});
        if (Ob || 5.5 <= x && 9 > x && ec) {
          Ua(aa, "jsCanRotate"), D("jsCanRotate!");
        }
        B = r;
      };
      Vb(function(u) {
        u && !m ? B() : m && (u ? $a.appendChild(m) : Oa(m));
      });
    }
    5.5 <= x && 8 > x && qa && Vb(function(u) {
      for (var t = Ta("a"), y = t.length, p = 0; p < y; ++p) {
        t[p].hideFocus = !u;
      }
    });
    E && ya(function() {
      for (var u = Ta("a"), t = u.length, y = 0, p; y < t; ++y) {
        p = u[y], "-1" === sa(p, "tabindex") ? Fa(p, "tabindex") : sa(p, "href") && bb(p, "tabindex", "0");
      }
      u = Ta("input");
      y = 0;
      for (t = u.length; y < t; ++y) {
        p = u[y], "hidden" === sa(p, "type") && Fa(p, "tabindex");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.L, k = O.length, w, F, C, va;
      if ("keydown" !== c.type || 13 === d) {
        for (; k;) {
          if (d = O[--k], d.l === this || d.j === this) {
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
                    d.A = w, d.D = w.style.cssText, Ua(w, "jsCap");
                  } else {
                    var L = Bb(w);
                    if ("DIV" === L || "P" === L || "BLOCKQUOT" === L || "LI" === L || "DD" === L || "TD" === L || "TH" === L || "FORM" === L || "PRE" === L) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (d.G && 0 < F.split("/").pop().indexOf("=")) {
                  F = F.split("=");
                  L = F.length;
                  if (C = F[L - 1]) {
                    (va = P(C.substr(1))) && C === "s" + va ? F[L - 1] = "w" + w : F[L] = "w" + w;
                  }
                  F = F.join("=");
                } else if (0 < F.indexOf(".bp.blogspot.com/")) {
                  F = F.split("/");
                  L = F.length;
                  if (C = F[L - 2]) {
                    (va = P(C.substr(1))) && C === "s" + va ? F[L - 2] = "w" + w : F.splice(L - 1, 0, "w" + w);
                  }
                  F = F.join("/");
                }
                d.H = F;
              }
              d.F = oc(H);
              Ua(H, "jsPicaLarge");
              ha(k, "width", "");
              k.src = d.H;
              if (k = d.A) {
                ea(k, ""), Ua(k, "jsCapLarge");
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
      if (db) {
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
        if (fb) {
          L = fb + ":translate" + (h ? "3D(0," : "(0,") + Ca + (h ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ca) {
          if (!Qa && (eb || Ga)) {
            var Eb = za.offsetWidth;
          }
          L = Ga ? "position:fixed;width:" + Eb + "px;top:" + (Ca - F + S) + "px" : Qa ? "top:" + Ca + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ca + "px";
          eb && L && (L += ";" + (0 > Ca ? "clip:rect(" + -Ca + "px " + Eb + "px " + ca + "px 0)" : Ca + ca < qb ? "clip:rect(0 " + Eb + "px " + ca + "px 0)" : "clip:rect(0 " + Eb + "px " + (qb - Ca) + "px 0)"), 8 > x || (L = L.split(" ").join(",")));
        }
      }
      var F = e, C = Ha, va = za.offsetTop === C.offsetTop, H = 0, L = "", wa = !0;
      if (va) {
        for (var U = 0, S = 0, fa = C; fa && fa !== aa;) {
          S += fa.offsetTop, fa = fa.offsetParent;
        }
        H = pb;
        fa = u(l.innerHeight, Ba.offsetHeight);
        var Xb = C.offsetHeight, ca = ja.offsetHeight, qb = ca < Xb ? Xb : ca, Ra = F, gb = Ra + fa, Fb = S, Gb = Fb + qb, qc = S + H, vc = qc + ca;
        C = Ra < Fb ? Fb : Ra;
        var Sa = Gb < gb ? Gb : gb, hb = Sa - C;
        Ra = Gb <= Ra;
        gb = gb <= Fb;
        if (d !== r) {
          wa = S + d;
          c = wa + k;
          if (Ra || gb) {
            return fa <= k ? (d = S, a("4.1.1")) : Ra ? (d = Gb - k, a("4.1.2")) : (d = S + k - fa, a("4.1.3")), q = r, l.scroll(u(l.pageXOffset, l.scrollX, Ba.scrollLeft, aa.scrollLeft), d), a("4.1.*"), A;
          }
          ca <= hb ? (U = 3, a("4.2")) : k <= hb ? ca - d <= hb ? (U = 2, a("4.3.1")) : C <= wa && c <= Sa ? C < S + H && (U = 4, a("4.3.2")) : C <= wa && wa <= Sa ? (U = 5, a("4.3.3")) : C <= c && c <= Sa ? (U = 4, a("4.3.4")) : c < C ? (U = 4, a("4.3.5")) : (U = 5, a("4.3.6")) : (U = 4, a("4.4"));
          wa = r;
        } else {
          c !== r ? ca <= hb ? (U = 7, wa = !1, a("3.1")) : (H -= 60 * c, U = Sa - S - ca, c = C - S, H < U ? (H = U, a("3.2.1")) : c < H ? (H = c, a("3.2.2")) : a("3.2.3"), U = 6) : Xb <= ca || (Ra ? (U = 1, a("2.2.1")) : gb ? a("2.2.2") : ca <= hb ? (U = 3, a("2.3")) : C < qc ? (U = 3, a("2.4.1")) : vc < Sa ? (U = 2, a("2.4.2")) : F < S + ca - hb ? a("2.4.3") : (U = 2, a("2.4.4")));
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
      ea(ja, L);
      pb = H;
      return va && wa;
    }
    function R(c) {
      if (db) {
        a("m");
        J && (e = u(l.pageYOffset, Ba.scrollTop, aa.scrollTop), n());
        var d = this !== c.target, k = d && u(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && k && p(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function da(c) {
      for (var d = c.target, k = -1, w; w = ia[++k];) {
        nb(w, d) && R(c);
      }
    }
    function G(c) {
      if (db) {
        var d = !!fb || J, k = c.target || c.srcElement, w = 0;
        if (nb(ja, k)) {
          a(c.type || "ie5focus");
          W(k, "blur", b);
          for (c = k.offsetHeight; k && (d ? nb(ja, k) : ja !== k);) {
            w += k.offsetTop, k = k.offsetParent;
          }
          ob ? (A = [w, c], I && mb(I), I = ra(t, 7, 1 > J ? 500 : 0)) : (e = u(l.pageYOffset, l.scrollY, Ba.scrollTop, aa.scrollTop), p(r, w, c));
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
      ib && (ha(ib, "top", ((c + k) / 10 | 0) + "px"), ha(ib, "height", (d / 10 | 0) + "px"), ha(tb, "height", (F / 10 | 0) + "px"), ha(Zb, "height", (aa.scrollHeight / 10 | 0) + "px"), sc.innerHTML = "conY:" + k + "/sidY" + c + ", conH:" + w + "/sidH" + d + ", focY:" + C + " focH:" + va);
    }
    function z(c, d) {
      ub && (ha(ub, "top", (c / 10 | 0) + "px"), ha(ub, "height", (d / 10 | 0) + "px"));
    }
    function X() {
      $b.call(Ib);
    }
    function N() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (bb(Ib, "id", "blog2slide-root"), jb[1].parentNode.insertBefore(vb, jb[1]), la(), f.onkeydown = K) : Wa && (Oa(vb), Fa(Ib, "id"), Fa(Wa, "id"), Wa = f.onkeydown = r);
    }
    function la() {
      Wa && Fa(Wa, "id");
      Xa = 0 < Xa ? ac < Xa ? ac : Xa : 0;
      Wa = jb[Xa];
      bb(Wa, "id", "blog2slide-current");
    }
    function K(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Xa, la();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Xa, la();
      }
    }
    var O = [];
    bc || (Ub(function(c) {
      if (c.o && La) {
        c = c.m;
        var d = pa(c), k = "", w;
        if ("A" === Bb(d) && 1 === lc(d).length) {
          var F = sa(d, "href"), C = F.split("?")[0].split("#")[0].split(".");
          C = (C[C.length - 1] || "").toLowerCase();
          if ((w = 0 < F.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
            W(d, "keydown", m), W(c, "click", m), W(d, "click", B), 9 > E || (k = c.offsetWidth - 4 + "px", ha(c, "width", k)), Ua(d, "jsPica"), O.push({j:d, J:c.src, K:k, B:F, l:c, G:w});
          }
        }
      }
    }), Va(function(c, d) {
      for (c = -1; d = O[++c];) {
        ba(d.j, "keydown", m), ba(d.l, "click", m), ba(d.j, "click", B);
      }
    }));
    var ia = ["jsSidebarFixer1", "jsSidebarFixer2"], ma = J || Lb || Kb, ob = !(6 <= x && 9 > x || E || 1 <= J && 1.3 > J), Ga = !(5 > Q(16) || 5 > Q(17) || 2.2 > Q(21) || 6 > Q(12) || na(30) && 534 > ab || na(32) || 7 > x || 9 > E || 1 > J), eb = Ga || 7 > x || 1 > J, Qa = 7.5 > E, Ba, za, Ha, ja, fb = Ob, pb = 0, e = 0, h, A, q, I, Z = J && 0 <= M.conpare(Ia, "0.9.7"), Pa = J && 0 >= M.conpare(Ia, "0.9.4");
    tc || bc || (cb(function(c) {
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
        for (Z && !kb && W(f, "DOMMouseScroll", da, !1); d = ia[++c];) {
          var k = Ma(d);
          k.onwheel !== r ? W(k, "wheel", R, {passive:!1}) : kb ? W(k, "MozMousePixelScroll", R, !1) : Z ? ia[c] = Ma(d) : (k.onmousewheel !== r || 9 <= E) && W(k, "mousewheel", R, !1);
        }
        x || Kb || 2 > lb || (h = Ja.perspective !== r || Ja.MozPerspective !== r || Ja["-webkit-perspective"] !== r);
        t();
        return !0;
      }
    }), Va(function() {
      var c = -1, d;
      if (Z && !kb) {
        ba(f, "DOMMouseScroll", da, !1);
      } else {
        for (; d = ia[++c];) {
          d = Ma(d), d.onwheel !== r ? ba(d, "wheel", R, {passive:!1}) : kb ? ba(d, "MozMousePixelScroll", R, !1) : (d.onmousewheel !== r || 9 <= E) && ba(d, "mousewheel", R, !1);
        }
      }
      ba(l, "blur", y);
      8 > E || Pa || 6 > x || (x || Da ? ba(ja, "focusin", G, !1) : ma ? ba(f, "focus", G, {capture:!0, passive:!1}) : ba(ja, "DOMFocusIn", G, !1));
      Aa && clearInterval(Aa);
    }));
    var Aa, Yb, rb;
    6 > x && cb(function(c) {
      if (!La) {
        return !0;
      }
      c ? Aa = setInterval(oa, 333) : Aa && (clearInterval(Aa), Aa = 0);
    });
    var sc, rc, sb, Zb, tb, ib, ub, Hb;
    cb(function(c) {
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
        ib = V(c, "div");
        ea(ib, "position:absolute;left:0;width:54px;background:#363");
        tb = V(c, "div");
        ea(tb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ub = V(ib, "div");
        ea(ub, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    ya(function() {
      function c(va, H, L, wa) {
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
        L = wa ? Ab(Qb(k), U, {className:L}) : V(k, U, {className:L});
        V(L, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:H, I:E ? "0" : r} : {href:H, I:E ? "0" : r}, va);
      }
      if (La) {
        for (var d = Pb(La, "blockquote"), k, w = -1, F, C; k = d[++w];) {
          F = sa(k, "title"), C = sa(k, "cite"), F && C ? (Fa(k, "title"), c(F, C, "js-bqLink", !0)) : C && (Fa(k, "cite"), c(l.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var $b, Ib, vb, Wa, jb, Xa, ac;
    ya(function() {
      var c = Ma("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        $b = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || $b ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', W(c.firstChild, "click", X), c = pa(c), Ib = pa(c), jb = Pb(c, "section"), vb = f.createElement("h1"), vb.innerHTML = Ta("h1")[0].innerHTML, ac = jb.length, jb.splice(0, 0, vb), 0 !== d ? W(f, d + "ullscreenchange", N) : x ? W(f, "MSFullscreenChange", N, !1) : Tb(N)) : Oa(c);
      }
    });
  })();
  Jb = f.scripts || Ta("script");
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
    }, Ya = function(B) {
      V(m, "P", {style:{color:"red"}}, B);
    }, l.onerror = function(B, u, t) {
      Ya(B + ", " + u + ", " + t);
      return !0;
    }) : l.console ? (D = console.log, Ya = console.error) : E ? (D = T, Ya = opera.postError) : D = Ya = T; yb.length;) {
      D(yb.shift());
    }
    for (; zb.length;) {
      D(zb.shift());
    }
    yb = zb = r;
  });
  6.1 > xa && Db(hc);
  Va(ic);
  6.1 > xa && Db(jc);
  Va(kc);
  10 > x && (11 !== Za || 5 !== x) || (9 > E || 1 > J || !Da && !l.addEventListener ? f.write('<link href="' + ta + "css/" + wb + Nb + '" rel="stylesheet"' + (8 > E ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > E || 1.5 > J || 532 >= ab || 8 > lb) && ya(function() {
    V($a, "link", {href:ta + "css/" + wb + Nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

