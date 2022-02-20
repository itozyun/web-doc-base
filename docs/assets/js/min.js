Array.prototype.pop || (Array.prototype.pop = function() {
  var E = this[this.length - 1];
  --this.length;
  return E;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var E = arguments, l = 0, H = E.length, h = this.length; l < H; ++l) {
    this[h + l] = E[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var E = this[0], l = 1, H = this.length; l < H; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return E;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var E = arguments, l = E.length, H = this.length += l - 1, h = H; h >= l; --h) {
    this[h] = this[h - l];
  }
  for (h = 0; h < l; ++h) {
    this[h] = E[h];
  }
  return H;
});
Array.prototype.splice || (Array.prototype.splice = function(E, l) {
  var H = arguments, h = H.length - 2 - l, Ia = this.slice(E, E + l), ja;
  if (0 < h) {
    var I = this.length - 1;
    for (ja = E + l; I >= ja; --I) {
      this[I + h] = this[I];
    }
  } else {
    if (0 > h) {
      I = E + l;
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
Array.prototype.indexOf || (Array.prototype.indexOf = function(E, l) {
  var H = this.length >>> 0;
  if (0 === H) {
    return -1;
  }
  if (l) {
    var h = l || 0;
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
(function(E, l, H, h, Ia, ja, I, bb, M) {
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
  var fa = h.body, va = fa.style, za, Ka, La, Ja = E[1], r = F(2) || F(3), oa = F(7), Va = F(5) || F(6), B = F(8) || F(9), O = F(11) || F(12), cb = O && 0 <= E.conpare(Ja, "1.9.1"), db = F(13), Aa = F(15);
  ja = F(16) || F(17);
  var pb = F(10) || F(25), Kb = (bb = F(20) || F(22)) || F(23) || F(21) || F(24), Lb = bb && I(Ia.userAgent.split("Edg/")[1]);
  Ia = I(Ia.appVersion.split("Trident/")[1]) + 4;
  var qb = aa(35) || aa(36) || aa(37), rb = !r && !oa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), eb = (oa ? "ie5mac" : 5.5 > r ? "ie5win" : 6 > r ? "ie55" : 10 > r ? "ie" + (r | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : O && !cb ? 1.3 <= O ? "gck190" : 1 <= O ? "gck121" : "gck097" : "modern") + ".css", Wa = "", Mb = aa(1) || aa(2) || aa(3) || 
  aa(4) || aa(8) || aa(9) || aa(10), sb, tb = va.transform !== M ? "transform" : va["-o-transform"] !== M ? "-o-transform" : va["-ms-transform"] !== M ? "-ms-transform" : va["-moz-transform"] !== M ? "-moz-transform" : va["-webkit-transform"] !== M ? "-webkit-transform" : "", Xa = [], fb, pa, ub, Ya, vb, wb, xb, yb;
  (function() {
    function p() {
      for (var d, g = 0, m = new Date - 0; g < y.length;) {
        m < y[0].t ? ++g : (d = y.splice(g, 1)[0], d.f(d.p));
      }
      c = y.length ? setTimeout(p, ba) : 0;
    }
    function v() {
      for (var d, g = 0; g < L.length; ++g) {
        d = L[g], d.f();
      }
    }
    function z() {
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
      P && (z(), P = setInterval(v, Q));
    };
    wb = z;
    var L = [], Q = 999, R = 0, P;
    if (5 > r || oa) {
      l._wdb_onlooptimer = v, v = "_wdb_onlooptimer()";
    }
    pa = function(d, g, m) {
      y.length || (c = setTimeout(p, ba));
      y.push({f:d, p:g, u:++W, t:new Date - 0 + (ba < m ? m : ba)});
      return W;
    };
    ub = function(d) {
      for (var g = y.length, m; m = y[--g];) {
        if (m.u === d) {
          y.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    xb = function() {
      c && (t(), c = setTimeout(p, ba));
    };
    yb = t;
    var y = [], ba = 64, W = 0, c;
    if (5 > r || oa) {
      l._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var Ba, Sa, gb, qa, Ca, zb, hb, ra, ib, Ab, ca, Ta, Za, ka, Ua, Da, jb, Bb, $a, kb, Ea, Fa, Ma;
  (function() {
    function p(c, d, g) {
      var m = ["<", c], n = 1, x, J;
      if (d) {
        for (x in d) {
          var q = d[x];
          if (null != q && "" !== q) {
            if ("style" === x) {
              m[++n] = ' style="';
              for (J in q) {
                for (var K = ++n, C, wa = [], S = J.split(""), Y = S.length; Y;) {
                  C = S[--Y], "A" <= C && "Z" >= C && (C = "-" + C.toLowerCase()), wa[Y] = C;
                }
                m[K] = wa.join("") + ":" + q[J] + ";";
              }
              m[++n] = '"';
            } else {
              "className" === x && (x = "class"), m[++n] = " " + x + '="' + q + '"';
            }
          }
        }
      }
      m[++n] = ">";
      null != g && (y && "font" !== c ? m[++n] = "<FONT>" + g + "</FONT>" : m[++n] = g);
      m[++n] = "</" + c + ">";
      return m.join("");
    }
    function v(c) {
      return z(h, c);
    }
    function z(c, d) {
      var g = "*" === d && 6 > r ? "*" !== d ? c.all.tags(d.toUpperCase()) : c.all : c.getElementsByTagName(d), m = [], n = 0, x;
      for (x = g.length; n < x; ++n) {
        m[n] = g[n];
      }
      return m;
    }
    function t(c) {
      return y ? c.parentElement : c.parentNode;
    }
    function L(c, d, g, m, n, x) {
      if (y) {
        var J = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend", q = Ca(2 > c ? qa(d) : d);
        q = 2 > c ? q.indexOf(d) + c : q.length;
        d.insertAdjacentHTML(J, p(g, m, n));
        return Ca(d)[q];
      }
      d = ba ? h.createElement(p(g, m)) : x ? h.createElementNS("http://www.w3.org/2000/svg", g) : h.createElement(g);
      if (m && !ba) {
        for (J in m) {
          if ((g = m[J]) || 0 === g) {
            switch(J) {
              case "class":
              case "className":
                $a(d, g);
                break;
              case "style":
                c = d.style;
                for (q in g) {
                  c[q] = g[q];
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
      9 > r ? c.className = d : c.setAttribute("class", d);
    }
    function P(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    var y = 5 > r;
    za = v("html")[0];
    Ka = v("head")[0];
    Ba = function(c) {
      return l[c] || h[c] || h.getElementById(c);
    };
    Sa = v;
    gb = z;
    qa = t;
    Ca = function(c) {
      c = y ? c.children : c.childNodes;
      for (var d = [], g = c.length; g;) {
        d[--g] = c[g];
      }
      return d;
    };
    zb = function(c) {
      var d = !(7.03 < B && 7.2 > B) && c.children;
      c = d ? d : c.childNodes;
      for (var g = [], m = c.length, n = -1, x; m;) {
        if (x = c[--m], d || 1 === x.nodeType) {
          y && "FONT" === x.tagName || (g[++n] = x);
        }
      }
      return g;
    };
    hb = function(c) {
      return y ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    ra = function(c, d, g, m, n) {
      d = L(2, c, d, g, m, n);
      y || (c.appendChild(d), W && null != m && Q(d, m));
      return d;
    };
    ib = function(c, d, g, m, n) {
      d = L(0, c, d, g, m, n);
      y || (t(c).insertBefore(d, c), W && null != m && Q(d, m));
      return d;
    };
    Ab = Q;
    ca = function(c) {
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
    var ba = 9 > r, W = 9 > r;
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
      var g = -1, m, n;
      if (9 > B || 5.5 > r) {
        if (d) {
          for (m = d.split(";"); n = m[++g];) {
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
        for (var J = x.length, q, K, C; J;) {
          if (q = x[--J], K = q.nodeType, 8 === K) {
            d && ca(q);
          } else {
            if (1 === K) {
              switch(K = Za(q), K.replace("/", "")) {
                case "STYLE":
                  if (8 <= B && 9 > B) {
                    break;
                  }
                case "LINK":
                  y || g || Ta(Ka, q) || n.push(q);
                  break;
                case "META":
                  K = ka(q, "name") || ka(q, "property");
                  for (C = m.length; C;) {
                    if (0 === K.indexOf(m[--C])) {
                      ca(q);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (jb(q, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (jb(q, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  ca(q);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || ca(q);
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
                  9 > r && ca(q);
                  break;
                default:
                  Ca(q).length && c(q);
              }
            }
          }
        }
        for (; n[0];) {
          Ka.appendChild(n.pop());
        }
      }
      La = Ba("jsMain");
      var d = !(8 > B || 5 > r || oa || .9 > O), g = 7 > r, m = ["og:", "twitter:", "fb:"], n = [];
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
      m && !g.length && pa(z);
      g.push(f, k);
    }
    function z() {
      var f = g, k;
      for (g = []; k = f.shift();) {
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
        b.i === this ? (this.g = b.h, this.g(k), this.g = H, this.g = null) : 7.2 > B && this === h && b.i === l && (l.g = b.h, l.g(k), delete l.g);
      }
      if (r) {
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
    var c = l.matchMedia, d, g = [], m;
    Xa.push(function() {
      d = ra(fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      la(function() {
        m = !0;
        g.length && pa(z);
      });
    });
    N = function(f, k, a, b) {
      if (q) {
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
          n[k] = b = [e], x || (k = f[w], "function" === typeof k && k !== t && b.unshift({i:f, h:k}));
        }
        x ? f.attachEvent(w, t) : f[w] = t;
      }
    };
    X = function(f, k, a, b) {
      if (q) {
        f.removeEventListener(k, a, b ? rb ? b : b.capture : !1);
      } else {
        b = n[k];
        k = "on" + k;
        var e, w, u;
        if (b) {
          for (e = b.length; w = b[--e];) {
            w.i === f && (w.h === a ? b.splice(e, 1) : u = !0);
          }
          u || (x ? f.detachEvent(k, t) : (f[k] = H, f[k] = null));
        }
      }
    };
    var n = {}, x = !1, J = 525.13 > Aa, q = !J && !oa && l.addEventListener, K;
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
      X(l, "load", C);
      C = null;
      p(Xa, f);
    }, wa = [];
    419.3 >= Aa ? pa(L) : N(l, "load", C);
    (r || 1.8 > O) && N(l, "unload", Q);
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
    if (10 <= r || Va || qb && Lb) {
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
      if (10 > r || qb && (44 <= O || db)) {
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
      if (12 > B || 532 > Aa) {
        a && fb(f, k[--a].src);
      } else {
        for (; a;) {
          var b = k[--a];
          v(ya, {m:b, o:9 > r ? b.complete : 0 <= b.naturalWidth ? b.naturalWidth : b.width});
        }
      }
    });
    lb = function(f) {
      Na.push(f);
    };
    var Na = [], ia;
    N(l, "resize", y);
    Ga(function() {
      ia && clearTimeout(ia);
      X(l, "resize", y);
    });
    ab = function(f) {
      xa.push(f);
    };
    var xa = [], ma = 0, ta = 1 > O || 1.2 <= O && 1.8 > O || 7.2 >= B;
    ta ? Ya(function() {
      var f = l.scrollY || fa.scrollTop;
      ma !== f && (ma = f, W());
    }) : N(l, "scroll", W);
    Ga(function() {
      ta || X(l, "scroll", W);
    });
  })();
  (function() {
    var p = 1 > O || 8 <= B && 9 > B, v = 7.2 <= B && 8 > B;
    r || !p && !v && function() {
      var z = ra(za, "style"), t = !(!z.styleSheet && !z.sheet);
      ca(z);
      return t;
    }() || !Aa || p || v || function() {
      var z = ra(za, "style");
      Ab(z, "");
      var t = !(!z.styleSheet && !z.sheet);
      ca(z);
      return t;
    }();
  })();
  (function() {
    9 > r && la(function() {
      var p = ra(fa, "div");
      Ma(p, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sb = 1 < p.offsetHeight;
      Ma(p, "");
      ca(p);
    });
    fb = function(p, v) {
      function z() {
        L || !Q || t.complete ? (pa(p, !!t.width), t.onerror = t.onload = H, t = p = null) : (--Q, pa(z));
      }
      var t = new Image, L, Q = 99;
      t.onerror = function() {
        L = !0;
      };
      t.onload = function() {
        L = !0;
      };
      t.src = v;
      pa(z);
    };
  })();
  (function() {
    function p() {
      g = ra(Ka, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:na + "css/" + Wa + "hc/" + eb});
      (tb || 5.5 <= r && 9 > r && sb) && Ea(fa, "jsCanRotate");
      p = null;
    }
    function v(a) {
      var b = a.keyCode || a.K, e = m.length, w, u, T, Oa;
      if ("keydown" !== a.type || 13 === b) {
        for (; e;) {
          if (b = m[--e], b.l === this || b.j === this) {
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
        z(a);
      }
    }
    function z(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function t(a) {
      for (var b = arguments, e = 0, w = b.length; e < w; ++e) {
        if (isFinite(b[e])) {
          return b[e];
        }
      }
      return 0;
    }
    function L() {
      Z && !x ? Z = !1 : (ha = t(l.pageYOffset, l.scrollY, K.scrollTop, fa.scrollTop), Z ? (Q(ha, 0, Z[0], Z[1]), Z = !1) : Q(ha));
    }
    function Q(a, b, e, w) {
      function u(Pa) {
        U = Pa;
        if (Y) {
          da = T + Pa + Oa;
        } else {
          if (q) {
            if (0 !== Pa) {
              Pa -= a - A;
              var Qa = C.offsetWidth;
              da = "position:fixed;width:" + Qa + "px;top:" + Pa + "px";
            }
          } else {
            da = "position:absolute;left:0;width:100%;top:" + Pa + "px";
          }
          if (q || 7 > r) {
            Qa = Qa || C.offsetWidth, da += ";" + (0 > U ? "clip:rect(" + -U + "px " + Qa + "px " + (Ra - U) + "px 0)" : U + ea < A + Ra ? "clip:rect(0 " + Qa + "px " + ea + "px 0)" : "clip:rect(0 " + Qa + "px " + (a + Ra - U - A) + "px 0)");
          }
        }
      }
      var T = Y + ":translate" + (Ha ? "3D(0," : "(0,"), Oa = Ha ? "px,0)" : "px)", D = t(l.innerHeight, K.offsetHeight), G = wa, V = G.offsetHeight, ea = S.offsetHeight, A = 0, da = "", U = 0, Fb = C.offsetTop === G.offsetTop, Nb = ea < V;
      if (Fb) {
        for (; G;) {
          A += G.offsetTop || 0, G = G.offsetParent || G.parentElement;
        }
        G = A + V <= a;
        var Ob = a + D <= A, Gb = a < A && A < a + D, Hb = a < A + V && A + V < a + D, Pb = Gb && Hb, Ra = A + V - a < D ? A + V - a : D, ob = ea <= Ra;
        if (0 <= e) {
          if (ob) {
            return;
          }
          V = e + A + sa;
          if (a + Ra < w + V) {
            u(a + Ra - A - e - w);
          } else {
            if (V < a) {
              u(a - A - e);
            } else {
              return;
            }
          }
        } else {
          if (b) {
            if (ob) {
              var Qb = !0;
            } else {
              U = sa - 60 * b, 0 < b ? (e = a + D - A - ea, e = V - ea < e ? V - ea : e, U = U < e ? e : U) : (e = 0 > a - A ? 0 : a - A, U = e < U ? e : U), u(U);
            }
          } else {
            Nb && (Gb || Ob ? u(0) : ob ? u(a - A) : Hb || G ? u(V - ea) : (e = a + D - A - ea, u(0 > e ? 0 : e)));
          }
        }
      }
      Y && da && (da += ";-webkit-overflow-scrolling:touch;");
      Ma(S, da);
      sa = U;
      return Fb && !Pb && !Qb;
    }
    function R(a) {
      O && (ha = t(l.pageYOffset, K.scrollTop, fa.scrollTop));
      var b = this !== a.target, e = b && t(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
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
        x ? Z = [b, e] : (Q(ha, 0, b, e), Z = !0, a = ha, l.scrollTo(t(l.pageXOffset, l.scrollX, K.scrollLeft, fa.scrollLeft), a));
      }
    }
    function ba() {
      Na.call(ia);
    }
    function W() {
      h.fullscreenElement || h.fullscreen || h.webkitIsFullscreen || h.msFullscreenElement || l.fullScreen ? (Ua(ia, "id", "blog2slide-root"), ta[1].parentNode.insertBefore(xa, ta[1]), c(), h.onkeydown = d) : ma && (ca(xa), Da(ia, "id"), Da(ma, "id"), ma = h.onkeydown = null);
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
      a && !g ? p && p() : a ? Ka.appendChild(g) : ca(g);
    });
    var m = [];
    pb || (mb(function(a) {
      if (a.o && La) {
        a = a.m;
        var b = qa(a), e = "";
        if ("A" === Za(b) && 1 === zb(b).length) {
          var w = ka(b, "href"), u = w.split("?")[0].split("#")[0].split(".");
          u = (u[u.length - 1] || "").toLowerCase();
          0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + u + ".") && (N(b, "keydown", v), N(a, "click", v), N(b, "click", z), 9 > B || (e = a.offsetWidth - 4 + "px", Fa(a, "width", e)), Ea(b, "jsPica"), m.push({j:b, I:a.src, J:e, A:w, l:a}));
        }
      }
    }), Ga(function(a, b) {
      for (a = -1; b = m[++a];) {
        X(b.j, "keydown", v), X(b.l, "click", v), X(b.j, "click", z);
      }
    }));
    var n = ["jsSidebarFixer1", "jsSidebarFixer2"], x = 10 <= r || Va || Kb || Aa, J = O || db || Va, q = !(5 > F(16) || 5 > F(17) || 2.2 > F(21) || 6 > F(12) || aa(30) && 534 > Aa || aa(32) || 7 > r || 9 > B), K, C, wa, S, Y = tb, sa = 0, ha = 0, Ha, Z, ya = O && 0 <= E.conpare(Ja, "0.9.7");
    Ib || pb || 8 > B || (Cb(function(a) {
      if (a) {
        if (!La) {
          return !0;
        }
        a = -1;
        var b;
        K = "CSS1Compat" !== h.compatMode ? fa : za || fa;
        C = Ba("jsSide");
        wa = La;
        if (!C) {
          return !0;
        }
        ab(L);
        lb(L);
        S = ib(hb(C), "div", {id:"jsSidebarFixer"});
        for (r || oa ? N(S, "focusin", y) : J ? N(h, "focus", y, {capture:!0, passive:!1}) : N(S, "DOMFocusIn", y, !1); 1 < Ca(C).length;) {
          S.appendChild(Ca(C)[1]);
        }
        for (; b = n[++a];) {
          b = Ba(b), b.onwheel !== M ? N(b, "wheel", R, {passive:!1}) : cb ? N(b, "MozMousePixelScroll", R, !1) : ya || (b.onmousewheel !== M || B) && N(b, "mousewheel", R, !1);
        }
        ya && N(h, "DOMMouseScroll", P, !1);
        Ha = !r && !Va && (va.perspective !== M || va["-moz-perspective"] !== M || va["-webkit-perspective"] !== M);
        L();
        return !0;
      }
    }), Ga(function() {
      for (var a = -1, b; b = n[++a];) {
        b = Ba(b), b.onwheel !== M ? X(b, "wheel", R, {passive:!1}) : cb ? X(b, "MozMousePixelScroll", R, !1) : ya || (b.onmousewheel !== M || B) && X(b, "mousewheel", R, !1);
      }
      ya && X(h, "DOMMouseScroll", P, !1);
      r || oa ? X(S, "focusin", R, !1) : J ? X(h, "focus", y, {capture:!0, passive:!1}) : X(S, "DOMFocusIn", y, !1);
    }));
    la(function() {
      function a(Oa, D, G, V) {
        var ea = V ? "div" : "cite";
        if (0 === D.indexOf("urn:isbn:")) {
          D = D.substr(9).toUpperCase().split("-").join("");
          if (13 === D.length) {
            D = D.toString().slice(3, -1);
            for (var A = 0, da = 0; 9 > da; da++) {
              A += (D.charAt(da) - 0) * (10 - da);
            }
            A = (11 - A % 11) % 11;
            A = 10 === A ? "X" : A.toString();
            D += A;
          }
          10 === D.length && (D = "//www.amazon.co.jp/exec/obidos/ASIN/" + D + "/itozyun-22/ref=nosim/");
        }
        G = V ? ib(hb(e), ea, {className:G}) : ra(e, ea, {className:G});
        ra(G, "a", 0 === D.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", F:!0, href:D, H:B ? "0" : M} : {F:!0, href:D, H:B ? "0" : M}, Oa);
      }
      if (La) {
        for (var b = gb(La, "blockquote"), e, w = -1, u, T; e = b[++w];) {
          u = ka(e, "title"), T = ka(e, "cite"), u && T ? (Da(e, "title"), a(u, T, "js-bqLink", !0)) : T && (Da(e, "cite"), a(l.decodeURI ? decodeURI(T) : T, T, "js-bqCite"));
        }
      }
    });
    var Na, ia, xa, ma, ta, f, k;
    la(function() {
      var a = Ba("blog2slide-start"), b = h.onfullscreenchange !== M ? "f" : h.onmozfullscreenchange !== M ? "mozF" : h.onwebkitfullscreenchange !== M ? "webkitF" : 0;
      a && (Na = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen, 0 !== b || Na ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', N(a.firstChild, "click", ba), a = qa(a), ia = qa(a), ta = gb(a, "section"), xa = h.createElement("h1"), xa.innerHTML = Sa("h1")[0].innerHTML, k = ta.length, ta.splice(0, 0, xa), 0 !== b ? N(h, b + "ullscreenchange", W) : r ? N(h, "MSFullscreenChange", W, !1) : lb(W)) : 
      ca(a));
    });
    mb(function(a) {
      var b = a.m;
      a = a.o;
      var e = qa(b);
      kb(e, "aBodyRoot") ? a || ka(b, "alt") || Fa(b, "display", "none") : Ea(e, a ? "img-loaded" : "img-disabled");
    });
  })();
  (function() {
    8 <= B && la(function() {
      for (var p = Sa("a"), v = p.length, z = 0, t; z < v; ++z) {
        t = p[z], "-1" === ka(t, "tabindex") ? Da(t, "tabindex") : ka(t, "href") && Ua(t, "tabindex", "0");
      }
    });
  })();
  var Jb = h.scripts || Sa("script"), na = Jb[Jb.length - 1].src.split("/");
  --na.length;
  "js" === na[na.length - 1] && --na.length;
  (na = na.join("/")) && (na += "/");
  var Ib = Mb || "1" === ka(fa, "mob");
  Wa = (Ib ? "mb" : "pc") + "/";
  6.1 > ja && ab(vb);
  Ga(wb);
  6.1 > ja && ab(xb);
  Ga(yb);
  10 > r && (11 !== Ia || 5 !== r) || (9 > B || 1 > O || !oa && !l.addEventListener ? h.write('<link href="' + na + "css/" + Wa + eb + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : (9.5 > B || 1.5 > O || 532 >= Aa || 2 > bb) && la(function() {
    ra(Ka, "link", {href:na + "css/" + Wa + eb, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

