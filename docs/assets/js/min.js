Array.prototype.pop || (Array.prototype.pop = function() {
  var E = this[this.length - 1];
  --this.length;
  return E;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var E = arguments, m = 0, H = E.length, h = this.length; m < H; ++m) {
    this[h + m] = E[m];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var E = this[0], m = 1, H = this.length; m < H; ++m) {
    this[m - 1] = this[m];
  }
  --this.length;
  return E;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var E = arguments, m = E.length, H = this.length += m - 1, h = H; h >= m; --h) {
    this[h] = this[h - m];
  }
  for (h = 0; h < m; ++h) {
    this[h] = E[h];
  }
  return H;
});
Array.prototype.splice || (Array.prototype.splice = function(E, m) {
  var H = arguments, h = H.length - 2 - m, Ia = this.slice(E, E + m), ja;
  if (0 < h) {
    var I = this.length - 1;
    for (ja = E + m; I >= ja; --I) {
      this[I + h] = this[I];
    }
  } else {
    if (0 > h) {
      I = E + m;
      for (ja = this.length; I < ja; ++I) {
        this[I + h] = this[I];
      }
      this.length += h;
    }
  }
  I = 2;
  for (ja = H.length; I < ja; ++I) {
    this[I - 2 + E] = H[I];
  }
  return Ia;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(E, m) {
  var H = this.length >>> 0;
  if (0 === H) {
    return -1;
  }
  if (m) {
    var h = m || 0;
    h = -Infinity === h ? 0 : (0 > h ? -h : h) | 0;
    if (H <= h) {
      return -1;
    }
  }
  for (h = 0 <= h ? h : 0 < H + h ? H + h : 0; h < H; ++h) {
    if (this[h] === E) {
      return h;
    }
  }
  return -1;
});
(function(E, m, H, h, Ia, ja, I, bb, M) {
  function F(p) {
    if (E[0] === p) {
      return Ja === Ja + "" ? I(Ja) : Ja;
    }
  }
  function aa(p) {
    var v = E[3];
    if (E[2] === p) {
      return v === v + "" ? I(v) : v;
    }
  }
  var ea = h.body, va = ea.style, za, Ka, La, Ja = E[1], q = F(2) || F(3), oa = F(7), Va = F(5) || F(6), z = F(8) || F(9), O = F(11) || F(12), cb = O && 0 <= E.conpare(Ja, "1.9.1"), db = F(13), Aa = F(15);
  ja = F(16) || F(17);
  var pb = F(10) || F(25), Kb = (bb = F(20) || F(22)) || F(23) || F(21) || F(24), Lb = bb && I(Ia.userAgent.split("Edg/")[1]);
  Ia = I(Ia.appVersion.split("Trident/")[1]) + 4;
  var qb = aa(35) || aa(36) || aa(37), rb = !q && !oa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), eb = (oa ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 7.2 > z ? "opr70" : 8 > z ? "opr72" : 9.5 > z ? "opr" + (z | 0) : O && !cb ? 1.3 <= O ? "gck190" : 1 <= O ? "gck121" : "gck097" : "modern") + ".css", Wa = "", Mb = aa(1) || aa(2) || aa(3) || 
  aa(4) || aa(8) || aa(9) || aa(10), sb, tb = va.transform !== M ? "transform" : va["-o-transform"] !== M ? "-o-transform" : va["-ms-transform"] !== M ? "-ms-transform" : va["-moz-transform"] !== M ? "-moz-transform" : va["-webkit-transform"] !== M ? "-webkit-transform" : "", Xa = [], fb, pa, ub, Ya, vb, wb, xb, yb;
  (function() {
    function p() {
      for (var d, g = 0, l = new Date - 0; g < y.length;) {
        l < y[0].t ? ++g : (d = y.splice(g, 1)[0], d.f(d.p));
      }
      c = y.length ? setTimeout(p, ba) : 0;
    }
    function v() {
      for (var d, g = 0; g < L.length; ++g) {
        d = L[g], d.f();
      }
    }
    function A() {
      P && (P = clearInterval(P));
    }
    function r() {
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
    if (5 > q || oa) {
      m._wdb_onlooptimer = v, v = "_wdb_onlooptimer()";
    }
    pa = function(d, g, l) {
      y.length || (c = setTimeout(p, ba));
      y.push({f:d, p:g, u:++W, t:new Date - 0 + (ba < l ? l : ba)});
      return W;
    };
    ub = function(d) {
      for (var g = y.length, l; l = y[--g];) {
        if (l.u === d) {
          y.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    xb = function() {
      c && (r(), c = setTimeout(p, ba));
    };
    yb = r;
    var y = [], ba = 64, W = 0, c;
    if (5 > q || oa) {
      m._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var Ba, Sa, gb, qa, Ca, zb, hb, ra, ib, Ab, fa, Ta, Za, ka, Ua, Da, jb, Bb, $a, kb, Ea, Fa, Ma;
  (function() {
    function p(c, d, g) {
      var l = ["<", c], n = 1, x, J;
      if (d) {
        for (x in d) {
          var t = d[x];
          if (null != t && "" !== t) {
            if ("style" === x) {
              l[++n] = ' style="';
              for (J in t) {
                for (var K = ++n, C, wa = [], S = J.split(""), Y = S.length; Y;) {
                  C = S[--Y], "A" <= C && "Z" >= C && (C = "-" + C.toLowerCase()), wa[Y] = C;
                }
                l[K] = wa.join("") + ":" + t[J] + ";";
              }
              l[++n] = '"';
            } else {
              "className" === x && (x = "class"), l[++n] = " " + x + '="' + t + '"';
            }
          }
        }
      }
      l[++n] = ">";
      null != g && (y && "font" !== c ? l[++n] = "<FONT>" + g + "</FONT>" : l[++n] = g);
      l[++n] = "</" + c + ">";
      return l.join("");
    }
    function v(c) {
      return A(h, c);
    }
    function A(c, d) {
      var g = "*" === d && 6 > q ? "*" !== d ? c.all.tags(d.toUpperCase()) : c.all : c.getElementsByTagName(d), l = [], n = 0, x;
      for (x = g.length; n < x; ++n) {
        l[n] = g[n];
      }
      return l;
    }
    function r(c) {
      return y ? c.parentElement : c.parentNode;
    }
    function L(c, d, g, l, n, x) {
      if (y) {
        var J = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend", t = Ca(2 > c ? qa(d) : d);
        t = 2 > c ? t.indexOf(d) + c : t.length;
        d.insertAdjacentHTML(J, p(g, l, n));
        return Ca(d)[t];
      }
      d = ba ? h.createElement(p(g, l)) : x ? h.createElementNS("http://www.w3.org/2000/svg", g) : h.createElement(g);
      if (l && !ba) {
        for (J in l) {
          if ((g = l[J]) || 0 === g) {
            switch(J) {
              case "class":
              case "className":
                $a(d, g);
                break;
              case "style":
                c = d.style;
                for (t in g) {
                  c[t] = g[t];
                }
                break;
              default:
                Ua(d, J, g);
            }
          }
        }
      }
      W || null != n && Q(d, n);
      return d;
    }
    function Q(c, d) {
      if (y) {
        return L(2, c, "font", M, d);
      }
      var g = h.createTextNode("" + d);
      c.appendChild(g);
      return g;
    }
    function R(c, d) {
      9 > q ? c.className = d : c.setAttribute("class", d);
    }
    function P(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    var y = 5 > q;
    za = v("html")[0];
    Ka = v("head")[0];
    Ba = function(c) {
      return m[c] || h[c] || h.getElementById(c);
    };
    Sa = v;
    gb = A;
    qa = r;
    Ca = function(c) {
      c = y ? c.children : c.childNodes;
      for (var d = [], g = c.length; g;) {
        d[--g] = c[g];
      }
      return d;
    };
    zb = function(c) {
      var d = !(7.03 < z && 7.2 > z) && c.children;
      c = d ? d : c.childNodes;
      for (var g = [], l = c.length, n = -1, x; l;) {
        if (x = c[--l], d || 1 === x.nodeType) {
          y && "FONT" === x.tagName || (g[++n] = x);
        }
      }
      return g;
    };
    hb = function(c) {
      return y ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    ra = function(c, d, g, l, n) {
      d = L(2, c, d, g, l, n);
      y || (c.appendChild(d), W && null != l && Q(d, l));
      return d;
    };
    ib = function(c, d, g, l, n) {
      d = L(0, c, d, g, l, n);
      y || (r(c).insertBefore(d, c), W && null != l && Q(d, l));
      return d;
    };
    Ab = Q;
    fa = function(c) {
      y ? c.outerHTML = "" : qa(c).removeChild(c);
    };
    Ta = function(c, d) {
      if (c.contains) {
        return c.contains(d);
      }
      for (; d && d !== za;) {
        if (d = qa(d), c === d) {
          return !0;
        }
      }
    };
    var ba = 9 > q, W = 9 > q;
    Za = function(c) {
      return c.tagName.toUpperCase();
    };
    ka = function(c, d) {
      return c.getAttribute(d) || "";
    };
    Ua = function(c, d, g) {
      c.setAttribute(d, g);
    };
    Da = function(c, d) {
      c.removeAttribute(d);
    };
    jb = function(c, d) {
      return c.hasAttribute ? c.hasAttribute(d) : null != c.getAttribute(d);
    };
    Bb = function(c) {
      return c.className;
    };
    $a = R;
    kb = P;
    Ea = function(c, d) {
      var g;
      if (!P(c, d)) {
        if (g = c.className) {
          d = " " + d;
        }
        R(c, g + d);
      }
    };
    Fa = function(c, d, g) {
      c.style[d] = g;
    };
    Ma = function(c, d) {
      var g = -1, l, n;
      if (9 > z || 5.5 > q) {
        if (d) {
          for (l = d.split(";"); n = l[++g];) {
            var x = n.split(":");
            c.style[x[0]] = n.substr(x[0].length + 1);
          }
        } else {
          c.removeAttribute("style");
        }
      } else {
        c.style.cssText = d;
      }
    };
    Xa.splice(0, 0, function() {
      function c(x) {
        x = Ca(x);
        for (var J = x.length, t, K, C; J;) {
          if (t = x[--J], K = t.nodeType, 8 === K) {
            d && fa(t);
          } else {
            if (1 === K) {
              switch(K = Za(t), K.replace("/", "")) {
                case "STYLE":
                  if (8 <= z && 9 > z) {
                    break;
                  }
                case "LINK":
                  y || g || Ta(Ka, t) || n.push(t);
                  break;
                case "META":
                  K = ka(t, "name") || ka(t, "property");
                  for (C = l.length; C;) {
                    if (0 === K.indexOf(l[--C])) {
                      fa(t);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (jb(t, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (jb(t, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  fa(t);
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
                  9 > q && fa(t);
                  break;
                default:
                  Ca(t).length && c(t);
              }
            }
          }
        }
        for (; n[0];) {
          Ka.appendChild(n.pop());
        }
      }
      La = Ba("jsMain");
      var d = !(8 > z || 5 > q || oa || .9 > O), g = 7 > q, l = ["og:", "twitter:", "fb:"], n = [];
      c(za);
    });
  })();
  var N, X, la, Ga, lb, ab, Cb, mb, Db, Eb, nb = 0;
  (function() {
    function p(f, k) {
      for (var a = 0; a < f.length; ++a) {
        !0 === f[a](k) && (f.splice(a, 1), --a);
      }
    }
    function v(f, k) {
      l && !g.length && pa(A);
      g.push(f, k);
    }
    function A() {
      var f = g, k;
      for (g = []; k = f.shift();) {
        p(k, f.shift());
      }
    }
    function r(f) {
      var k = f || event;
      f = n[k.type];
      var a = -1, b, e;
      for (q ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : J && (k.s = k.stopPropagation, k.stopPropagation = function() {
        e = !0;
      }); b = f[++a];) {
        b.i === this ? (this.g = b.h, this.g(k), this.g = H, this.g = null) : 7.2 > z && this === h && b.i === m && (m.g = b.h, m.g(k), delete m.g);
      }
      if (q) {
        return k.preventDefault = k.stopPropagation = null, k.returnValue;
      }
      J && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (K = !0), e && !K && k.s(), k.s = k.stopPropagation = null);
    }
    function L() {
      if (C) {
        var f = h.readyState;
        "loaded" === f || "complete" === f ? C() : pa(L);
      }
    }
    function Q(f) {
      p(wa, f);
    }
    function R() {
      var f = 9 === d.offsetWidth;
      Eb !== f && v(S, Eb = f);
    }
    function P() {
      return nb = sa ? Ha ? 2 : ha ? 3 : 1 : 0;
    }
    function y() {
      !C && ia && (ub(ia), ia = pa(ba));
    }
    function ba() {
      ia = 0;
      p(Na);
    }
    function W() {
      C || p(xa);
    }
    var c = m.matchMedia, d, g = [], l;
    Xa.push(function() {
      d = ra(ea, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      la(function() {
        l = !0;
        g.length && pa(A);
      });
    });
    N = function(f, k, a, b) {
      if (t) {
        f.addEventListener(k, a, b ? rb ? b : b.capture : !1);
      } else {
        var e = {i:f, h:a};
        b = n[k];
        var w = "on" + k, u, T;
        if (b) {
          for (u = b.length; T = b[--u];) {
            if (T.i === f && T.h === a) {
              return;
            }
          }
          n[k].push(e);
        } else {
          n[k] = b = [e], x || (k = f[w], "function" === typeof k && k !== r && b.unshift({i:f, h:k}));
        }
        x ? f.attachEvent(w, r) : f[w] = r;
      }
    };
    X = function(f, k, a, b) {
      if (t) {
        f.removeEventListener(k, a, b ? rb ? b : b.capture : !1);
      } else {
        b = n[k];
        k = "on" + k;
        var e, w, u;
        if (b) {
          for (e = b.length; w = b[--e];) {
            w.i === f && (w.h === a ? b.splice(e, 1) : u = !0);
          }
          u || (x ? f.detachEvent(k, r) : (f[k] = H, f[k] = null));
        }
      }
    };
    var n = {}, x = !1, J = 525.13 > Aa, t = !J && !oa && m.addEventListener, K;
    J && za.addEventListener("click", function(f) {
      if (K) {
        return K = !1, f.preventDefault(), !1;
      }
    });
    la = function(f) {
      Xa.push(f);
    };
    Ga = function(f) {
      wa.push(f);
    };
    var C = function(f) {
      X(m, "load", C);
      C = null;
      p(Xa, f);
    }, wa = [];
    419.3 >= Aa ? pa(L) : N(m, "load", C);
    (q || 1.8 > O) && N(m, "unload", Q);
    Cb = function(f) {
      S.push(f);
    };
    var S = [];
    la(function() {
      R();
      Ya(R);
    });
    Db = function(f) {
      Y.push(f);
    };
    var Y = [], sa, ha, Ha;
    if (10 <= q || Va || qb && Lb) {
      c("(-ms-high-contrast:black-on-white)").addListener(function(f) {
        sa = ha = f.matches;
        v(Y, P());
      }), c("(-ms-high-contrast:white-on-black)").addListener(function(f) {
        sa = Ha = f.matches;
        v(Y, P());
      }), c("(-ms-high-contrast:active)").addListener(function(f) {
        sa = f.matches;
        v(Y, P());
      });
    } else {
      if (10 > q || qb && (44 <= O || db)) {
        var Z = function() {
          function f(e) {
            return "#ffffff" === e || "rgb(255,255,255)" === e;
          }
          var k = h.defaultView, a = nb, b = k ? k.getComputedStyle(d, null) : d.currentStyle;
          k = (b && b.color || "").split(" ").join("");
          b = (b && b.backgroundColor || "").split(" ").join("");
          if (k) {
            return sa = "#123456" !== k && "rgb(18,52,86)" !== k, ha = ("#000000" === k || "rgb(0,0,0)" === k) && f(b), Ha = f(k) && ("#000000" === b || "rgb(0,0,0)" === b), a !== P() && v(Y, nb), !0;
          }
        };
        la(function() {
          Fa(d, "color", "#123456");
          Fa(d, "backgroundColor", "#123456");
          60 > O || db ? Z() : Z() && Ya(Z);
          Z = null;
        });
      }
    }
    mb = function(f) {
      ya.push(f);
    };
    var ya = [];
    la(function() {
      function f(e) {
        p(ya, {m:k[a], o:e});
        a && fb(f, k[--a].src);
      }
      var k = h.images || Sa("img"), a = k.length;
      if (9 <= z && 12 > z || 532 > Aa) {
        a && fb(f, k[--a].src);
      } else {
        for (; a;) {
          var b = k[--a];
          v(ya, {m:b, o:9 > q ? b.complete : 0 <= b.naturalWidth ? b.naturalWidth : b.width});
        }
      }
    });
    lb = function(f) {
      Na.push(f);
    };
    var Na = [], ia;
    N(m, "resize", y);
    Ga(function() {
      ia && clearTimeout(ia);
      X(m, "resize", y);
    });
    ab = function(f) {
      xa.push(f);
    };
    var xa = [], ma = 0, ta = 1 > O || 1.2 <= O && 1.8 > O || 7.2 >= z;
    ta ? Ya(function() {
      var f = m.scrollY || ea.scrollTop;
      ma !== f && (ma = f, W());
    }) : N(m, "scroll", W);
    Ga(function() {
      ta || X(m, "scroll", W);
    });
  })();
  (function() {
    var p = 1 > O || 8 <= z && 9 > z, v = 7.2 <= z && 8 > z;
    q || !p && !v && function() {
      var A = ra(za, "style"), r = !(!A.styleSheet && !A.sheet);
      fa(A);
      return r;
    }() || !Aa || p || v || function() {
      var A = ra(za, "style");
      Ab(A, "");
      var r = !(!A.styleSheet && !A.sheet);
      fa(A);
      return r;
    }();
  })();
  (function() {
    9 > q && la(function() {
      var p = ra(ea, "div");
      Ma(p, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sb = 1 < p.offsetHeight;
      Ma(p, "");
      fa(p);
    });
    fb = function(p, v) {
      function A() {
        L || !Q || r.complete ? (pa(p, !!r.width), r.onerror = r.onload = H, r = p = null) : (--Q, pa(A));
      }
      var r = new Image, L, Q = 99;
      r.onerror = function() {
        L = !0;
      };
      r.onload = function() {
        L = !0;
      };
      r.src = v;
      pa(A);
    };
  })();
  (function() {
    function p() {
      g = ra(Ka, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:na + "css/" + Wa + "hc/" + eb});
      (tb || 5.5 <= q && 9 > q && sb) && Ea(ea, "jsCanRotate");
      p = null;
    }
    function v(a) {
      var b = a.keyCode || a.K, e = l.length, w, u, T, Oa;
      if ("keydown" !== a.type || 13 === b) {
        for (; e;) {
          if (b = l[--e], b.l === this || b.j === this) {
            e = b.l;
            var D = w = b.j;
            if (b.B) {
              if (Fa(e, "width", b.J), e.src = b.I, $a(D, b.D), e = b.v) {
                Ma(e, b.C), $a(e, "caption jsCap");
              }
            } else {
              if (u = b.A) {
                for (delete b.A; w = qa(w);) {
                  if (kb(w, "caption")) {
                    b.v = w, b.C = w.style.cssText, Ea(w, "jsCap");
                  } else {
                    var G = Za(w);
                    if ("DIV" === G || "P" === G || "BLOCKQUOT" === G) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (0 < u.indexOf(".bp.blogspot.com/")) {
                  u = u.split("/");
                  G = u.length;
                  if (T = u[G - 2]) {
                    (Oa = I(T.substr(1))) && T === "s" + Oa ? u[G - 2] = "w" + w : u.splice(G - 1, 0, "w" + w);
                  }
                  u = u.join("/");
                }
                b.G = u;
              }
              b.D = Bb(D);
              Ea(D, "jsPicaLarge");
              Fa(e, "width", "");
              e.src = b.G;
              if (e = b.v) {
                Ma(e, ""), Ea(e, "jsCapLarge");
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
    function r(a) {
      for (var b = arguments, e = 0, w = b.length; e < w; ++e) {
        if (isFinite(b[e])) {
          return b[e];
        }
      }
      return 0;
    }
    function L() {
      Z && !x ? Z = !1 : (ha = r(m.pageYOffset, m.scrollY, K.scrollTop, ea.scrollTop), Z ? (Q(ha, 0, Z[0], Z[1]), Z = !1) : Q(ha));
    }
    function Q(a, b, e, w) {
      function u(Pa) {
        U = Pa;
        if (Y) {
          ca = T + Pa + Oa;
        } else {
          if (t) {
            if (0 !== Pa) {
              Pa -= a - B;
              var Qa = C.offsetWidth;
              ca = "position:fixed;width:" + Qa + "px;top:" + Pa + "px";
            }
          } else {
            ca = "position:absolute;left:0;width:100%;top:" + Pa + "px";
          }
          if (t || 7 > q) {
            Qa = Qa || C.offsetWidth, ca += ";" + (0 > U ? "clip:rect(" + -U + "px " + Qa + "px " + (Ra - U) + "px 0)" : U + da < B + Ra ? "clip:rect(0 " + Qa + "px " + da + "px 0)" : "clip:rect(0 " + Qa + "px " + (a + Ra - U - B) + "px 0)");
          }
        }
      }
      var T = Y + ":translate" + (Ha ? "3D(0," : "(0,"), Oa = Ha ? "px,0)" : "px)", D = r(m.innerHeight, K.offsetHeight), G = wa, V = G.offsetHeight, da = S.offsetHeight, B = 0, ca = "", U = 0, Fb = C.offsetTop === G.offsetTop, Nb = da < V;
      if (Fb) {
        for (; G;) {
          B += G.offsetTop || 0, G = G.offsetParent || G.parentElement;
        }
        G = B + V <= a;
        var Ob = a + D <= B, Gb = a < B && B < a + D, Hb = a < B + V && B + V < a + D, Pb = Gb && Hb, Ra = B + V - a < D ? B + V - a : D, ob = da <= Ra;
        if (0 <= e) {
          if (ob) {
            return;
          }
          V = e + B + sa;
          if (a + Ra < w + V) {
            u(a + Ra - B - e - w);
          } else {
            if (V < a) {
              u(a - B - e);
            } else {
              return;
            }
          }
        } else {
          if (b) {
            if (ob) {
              var Qb = !0;
            } else {
              U = sa - 60 * b, 0 < b ? (e = a + D - B - da, e = V - da < e ? V - da : e, U = U < e ? e : U) : (e = 0 > a - B ? 0 : a - B, U = e < U ? e : U), u(U);
            }
          } else {
            Nb && (Gb || Ob ? u(0) : ob ? u(a - B) : Hb || G ? u(V - da) : (e = a + D - B - da, u(0 > e ? 0 : e)));
          }
        }
      }
      Y && ca && (ca += ";-webkit-overflow-scrolling:touch;");
      Ma(S, ca);
      sa = U;
      return Fb && !Pb && !Qb;
    }
    function R(a) {
      O && (ha = r(m.pageYOffset, K.scrollTop, ea.scrollTop));
      var b = this !== a.target, e = b && r(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && e && Q(ha, 9 >= e ? -9 >= e ? -3 : e : 3) && (a.preventDefault(), a.stopPropagation());
    }
    function P(a) {
      for (var b = -1, e; e = n[++b];) {
        Ta(Ba(e), a.target) && R(a);
      }
    }
    function y(a) {
      a = a || event;
      a = a.srcElement || a.target;
      var b = 0, e;
      if (Ta(S, a)) {
        for (e = a.offsetHeight; S !== a && Ta(S, a);) {
          b += a.offsetTop || 0, a = a.offsetParent;
        }
        x ? Z = [b, e] : (Q(ha, 0, b, e), Z = !0, a = ha, m.scrollTo(r(m.pageXOffset, m.scrollX, K.scrollLeft, ea.scrollLeft), a));
      }
    }
    function ba() {
      Na.call(ia);
    }
    function W() {
      h.fullscreenElement || h.fullscreen || h.webkitIsFullscreen || h.msFullscreenElement || m.fullScreen ? (Ua(ia, "id", "blog2slide-root"), ta[1].parentNode.insertBefore(xa, ta[1]), c(), h.onkeydown = d) : ma && (fa(xa), Da(ia, "id"), Da(ma, "id"), ma = h.onkeydown = null);
    }
    function c() {
      ma && Da(ma, "id");
      f = 0 < f ? k < f ? k : f : 0;
      ma = ta[f];
      Ua(ma, "id", "blog2slide-current");
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
    var g;
    Db(function(a) {
      a && !g ? p && p() : a ? Ka.appendChild(g) : fa(g);
    });
    var l = [];
    pb || (mb(function(a) {
      if (a.o && La) {
        a = a.m;
        var b = qa(a), e = "";
        if ("A" === Za(b) && 1 === zb(b).length) {
          var w = ka(b, "href"), u = w.split("?")[0].split("#")[0].split(".");
          u = (u[u.length - 1] || "").toLowerCase();
          0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + u + ".") && (N(b, "keydown", v), N(a, "click", v), N(b, "click", A), 9 > z || (e = a.offsetWidth - 4 + "px", Fa(a, "width", e)), Ea(b, "jsPica"), l.push({j:b, I:a.src, J:e, A:w, l:a}));
        }
      }
    }), Ga(function(a, b) {
      for (a = -1; b = l[++a];) {
        X(b.j, "keydown", v), X(b.l, "click", v), X(b.j, "click", A);
      }
    }));
    var n = ["jsSidebarFixer1", "jsSidebarFixer2"], x = 10 <= q || Va || Kb || Aa, J = O || db || Va, t = !(5 > F(16) || 5 > F(17) || 2.2 > F(21) || 6 > F(12) || aa(30) && 534 > Aa || aa(32) || 7 > q || 9 > z), K, C, wa, S, Y = tb, sa = 0, ha = 0, Ha, Z, ya = O && 0 <= E.conpare(Ja, "0.9.7");
    Ib || pb || 8 > z || (Cb(function(a) {
      if (a) {
        if (!La) {
          return !0;
        }
        a = -1;
        var b;
        K = "CSS1Compat" !== h.compatMode ? ea : za || ea;
        C = Ba("jsSide");
        wa = La;
        if (!C) {
          return !0;
        }
        ab(L);
        lb(L);
        S = ib(hb(C), "div", {id:"jsSidebarFixer"});
        for (q || oa ? N(S, "focusin", y) : J ? N(h, "focus", y, {capture:!0, passive:!1}) : N(S, "DOMFocusIn", y, !1); 1 < Ca(C).length;) {
          S.appendChild(Ca(C)[1]);
        }
        for (; b = n[++a];) {
          b = Ba(b), b.onwheel !== M ? N(b, "wheel", R, {passive:!1}) : cb ? N(b, "MozMousePixelScroll", R, !1) : ya || (b.onmousewheel !== M || z) && N(b, "mousewheel", R, !1);
        }
        ya && N(h, "DOMMouseScroll", P, !1);
        Ha = !q && !Va && (va.perspective !== M || va["-moz-perspective"] !== M || va["-webkit-perspective"] !== M);
        L();
        return !0;
      }
    }), Ga(function() {
      for (var a = -1, b; b = n[++a];) {
        b = Ba(b), b.onwheel !== M ? X(b, "wheel", R, {passive:!1}) : cb ? X(b, "MozMousePixelScroll", R, !1) : ya || (b.onmousewheel !== M || z) && X(b, "mousewheel", R, !1);
      }
      ya && X(h, "DOMMouseScroll", P, !1);
      q || oa ? X(S, "focusin", R, !1) : J ? X(h, "focus", y, {capture:!0, passive:!1}) : X(S, "DOMFocusIn", y, !1);
    }));
    la(function() {
      function a(Oa, D, G, V) {
        var da = V ? "div" : "cite";
        if (0 === D.indexOf("urn:isbn:")) {
          D = D.substr(9).toUpperCase().split("-").join("");
          if (13 === D.length) {
            D = D.toString().slice(3, -1);
            for (var B = 0, ca = 0; 9 > ca; ca++) {
              B += (D.charAt(ca) - 0) * (10 - ca);
            }
            B = (11 - B % 11) % 11;
            B = 10 === B ? "X" : B.toString();
            D += B;
          }
          10 === D.length && (D = "//www.amazon.co.jp/exec/obidos/ASIN/" + D + "/itozyun-22/ref=nosim/");
        }
        G = V ? ib(hb(e), da, {className:G}) : ra(e, da, {className:G});
        ra(G, "a", 0 === D.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", F:!0, href:D, H:z ? "0" : M} : {F:!0, href:D, H:z ? "0" : M}, Oa);
      }
      if (La) {
        for (var b = gb(La, "blockquote"), e, w = -1, u, T; e = b[++w];) {
          u = ka(e, "title"), T = ka(e, "cite"), u && T ? (Da(e, "title"), a(u, T, "js-bqLink", !0)) : T && (Da(e, "cite"), a(m.decodeURI ? decodeURI(T) : T, T, "js-bqCite"));
        }
      }
    });
    var Na, ia, xa, ma, ta, f, k;
    la(function() {
      var a = Ba("blog2slide-start"), b = h.onfullscreenchange !== M ? "f" : h.onmozfullscreenchange !== M ? "mozF" : h.onwebkitfullscreenchange !== M ? "webkitF" : 0;
      a && (Na = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen, 0 !== b || Na ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', N(a.firstChild, "click", ba), a = qa(a), ia = qa(a), ta = gb(a, "section"), xa = h.createElement("h1"), xa.innerHTML = Sa("h1")[0].innerHTML, k = ta.length, ta.splice(0, 0, xa), 0 !== b ? N(h, b + "ullscreenchange", W) : q ? N(h, "MSFullscreenChange", W, !1) : lb(W)) : 
      fa(a));
    });
    mb(function(a) {
      var b = a.m;
      a = a.o;
      var e = qa(b);
      kb(e, "aBodyRoot") ? a || ka(b, "alt") || Fa(b, "display", "none") : Ea(e, a ? "img-loaded" : "img-disabled");
    });
  })();
  (function() {
    8 <= z && la(function() {
      for (var p = Sa("a"), v = p.length, A = 0, r; A < v; ++A) {
        r = p[A], "-1" === ka(r, "tabindex") ? Da(r, "tabindex") : ka(r, "href") && Ua(r, "tabindex", "0");
      }
    });
  })();
  var Jb = h.scripts || Sa("script"), na = Jb[Jb.length - 1].src.split("/");
  --na.length;
  "js" === na[na.length - 1] && --na.length;
  (na = na.join("/")) && (na += "/");
  var Ib = Mb || "1" === ka(ea, "mob");
  Wa = (Ib ? "mb" : "pc") + "/";
  6.1 > ja && ab(vb);
  Ga(wb);
  6.1 > ja && ab(xb);
  Ga(yb);
  10 > q && (11 !== Ia || 5 !== q) || (9 > z || 1 > O || !oa && !m.addEventListener ? h.write('<link href="' + na + "css/" + Wa + eb + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : (9.5 > z || 1.5 > O || 532 >= Aa || 2 > bb) && la(function() {
    ra(Ka, "link", {href:na + "css/" + Wa + eb, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

