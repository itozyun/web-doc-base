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
  var ea = h.body, va = ea.style, za, Ka, La, Ja = E[1], r = F(2) || F(3), oa = F(7), Va = F(5) || F(6), B = F(8) || F(9), T = F(11) || F(12), cb = T && 0 <= E.conpare(Ja, "1.9.1"), db = F(13), Aa = F(15);
  ja = F(16) || F(17);
  var pb = F(10) || F(25), qb = F(20) || F(22) || F(23) || F(21) || F(24), Kb = I(Ia.userAgent.split("Edg/")[1]);
  Ia = I(Ia.appVersion.split("Trident/")[1]) + 4;
  var rb = aa(35) || aa(36) || aa(37), sb = !r && !oa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), eb = (oa ? "ie5mac" : 5.5 > r ? "ie5win" : 6 > r ? "ie55" : 10 > r ? "ie" + (r | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : T && !cb ? 1.3 <= T ? "gck190" : 1 <= T ? "gck121" : "gck097" : "modern") + ".css", Wa = "", Lb = aa(1) || aa(2) || aa(3) || 
  aa(4) || aa(8) || aa(9) || aa(10), tb, ub = va.transform !== M ? "transform" : va["-o-transform"] !== M ? "-o-transform" : va["-ms-transform"] !== M ? "-ms-transform" : va["-moz-transform"] !== M ? "-moz-transform" : va["-webkit-transform"] !== M ? "-webkit-transform" : "", Xa = [], fb, pa, vb, Ya, wb, xb, yb, zb;
  (function() {
    function p() {
      for (var d, g = 0, l = new Date - 0; g < x.length;) {
        l < x[0].t ? ++g : (d = x.splice(g, 1)[0], d.f(d.p));
      }
      c = x.length ? setTimeout(p, ba) : 0;
    }
    function v() {
      for (var d, g = 0; g < L.length; ++g) {
        d = L[g], d.f();
      }
    }
    function z() {
      O && (O = clearInterval(O));
    }
    function t() {
      c && (c = clearTimeout(c));
    }
    Ya = function(d) {
      L.length || (O = setInterval(v, P));
      L.push({f:d, u:++Q});
      return Q;
    };
    wb = function() {
      O && (z(), O = setInterval(v, P));
    };
    xb = z;
    var L = [], P = 999, Q = 0, O;
    if (5 > r || oa) {
      m._wdb_onlooptimer = v, v = "_wdb_onlooptimer()";
    }
    pa = function(d, g, l) {
      x.length || (c = setTimeout(p, ba));
      x.push({f:d, p:g, u:++W, t:new Date - 0 + (ba < l ? l : ba)});
      return W;
    };
    vb = function(d) {
      for (var g = x.length, l; l = x[--g];) {
        if (l.u === d) {
          x.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    yb = function() {
      c && (t(), c = setTimeout(p, ba));
    };
    zb = t;
    var x = [], ba = 64, W = 0, c;
    if (5 > r || oa) {
      m._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var Ba, Sa, gb, qa, Ca, Ab, hb, ra, ib, Bb, fa, Ta, Za, ka, Ua, Da, jb, Cb, $a, kb, Ea, Fa, Ma;
  (function() {
    function p(c, d, g) {
      var l = ["<", c], n = 1, w, J;
      if (d) {
        for (w in d) {
          var u = d[w];
          if (null != u && "" !== u) {
            if ("style" === w) {
              l[++n] = ' style="';
              for (J in u) {
                for (var K = ++n, C, wa = [], R = J.split(""), Y = R.length; Y;) {
                  C = R[--Y], "A" <= C && "Z" >= C && (C = "-" + C.toLowerCase()), wa[Y] = C;
                }
                l[K] = wa.join("") + ":" + u[J] + ";";
              }
              l[++n] = '"';
            } else {
              "className" === w && (w = "class"), l[++n] = " " + w + '="' + u + '"';
            }
          }
        }
      }
      l[++n] = ">";
      null != g && (x && "font" !== c ? l[++n] = "<FONT>" + g + "</FONT>" : l[++n] = g);
      l[++n] = "</" + c + ">";
      return l.join("");
    }
    function v(c) {
      return z(h, c);
    }
    function z(c, d) {
      var g = "*" === d && 6 > r ? "*" !== d ? c.all.tags(d.toUpperCase()) : c.all : c.getElementsByTagName(d), l = [], n = 0, w;
      for (w = g.length; n < w; ++n) {
        l[n] = g[n];
      }
      return l;
    }
    function t(c) {
      return x ? c.parentElement : c.parentNode;
    }
    function L(c, d, g, l, n, w) {
      if (x) {
        var J = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend", u = Ca(2 > c ? qa(d) : d);
        u = 2 > c ? u.indexOf(d) + c : u.length;
        d.insertAdjacentHTML(J, p(g, l, n));
        return Ca(d)[u];
      }
      d = ba ? h.createElement(p(g, l)) : w ? h.createElementNS("http://www.w3.org/2000/svg", g) : h.createElement(g);
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
                for (u in g) {
                  c[u] = g[u];
                }
                break;
              default:
                Ua(d, J, g);
            }
          }
        }
      }
      W || null != n && P(d, n);
      return d;
    }
    function P(c, d) {
      if (x) {
        return L(2, c, "font", M, d);
      }
      var g = h.createTextNode("" + d);
      c.appendChild(g);
      return g;
    }
    function Q(c, d) {
      9 > r ? c.className = d : c.setAttribute("class", d);
    }
    function O(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    var x = 5 > r;
    za = v("html")[0];
    Ka = v("head")[0];
    Ba = function(c) {
      return m[c] || h[c] || h.getElementById(c);
    };
    Sa = v;
    gb = z;
    qa = t;
    Ca = function(c) {
      c = x ? c.children : c.childNodes;
      for (var d = [], g = c.length; g;) {
        d[--g] = c[g];
      }
      return d;
    };
    Ab = function(c) {
      var d = !(7.03 < B && 7.2 > B) && c.children;
      c = d ? d : c.childNodes;
      for (var g = [], l = c.length, n = -1, w; l;) {
        if (w = c[--l], d || 1 === w.nodeType) {
          x && "FONT" === w.tagName || (g[++n] = w);
        }
      }
      return g;
    };
    hb = function(c) {
      return x ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    ra = function(c, d, g, l, n) {
      d = L(2, c, d, g, l, n);
      x || (c.appendChild(d), W && null != l && P(d, l));
      return d;
    };
    ib = function(c, d, g, l, n) {
      d = L(0, c, d, g, l, n);
      x || (t(c).insertBefore(d, c), W && null != l && P(d, l));
      return d;
    };
    Bb = P;
    fa = function(c) {
      x ? c.outerHTML = "" : qa(c).removeChild(c);
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
    Cb = function(c) {
      return c.className;
    };
    $a = Q;
    kb = O;
    Ea = function(c, d) {
      var g;
      if (!O(c, d)) {
        if (g = c.className) {
          d = " " + d;
        }
        Q(c, g + d);
      }
    };
    Fa = function(c, d, g) {
      c.style[d] = g;
    };
    Ma = function(c, d) {
      var g = -1, l, n;
      if (9 > B || 5.5 > r) {
        if (d) {
          for (l = d.split(";"); n = l[++g];) {
            var w = n.split(":");
            c.style[w[0]] = n.substr(w[0].length + 1);
          }
        } else {
          c.removeAttribute("style");
        }
      } else {
        c.style.cssText = d;
      }
    };
    Xa.splice(0, 0, function() {
      function c(w) {
        w = Ca(w);
        for (var J = w.length, u, K, C; J;) {
          if (u = w[--J], K = u.nodeType, 8 === K) {
            d && fa(u);
          } else {
            if (1 === K) {
              switch(K = Za(u), K.replace("/", "")) {
                case "STYLE":
                  if (8 <= B && 9 > B) {
                    break;
                  }
                case "LINK":
                  x || g || Ta(Ka, u) || n.push(u);
                  break;
                case "META":
                  K = ka(u, "name") || ka(u, "property");
                  for (C = l.length; C;) {
                    if (0 === K.indexOf(l[--C])) {
                      fa(u);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (jb(u, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (jb(u, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  fa(u);
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
                  9 > r && fa(u);
                  break;
                default:
                  Ca(u).length && c(u);
              }
            }
          }
        }
        for (; n[0];) {
          Ka.appendChild(n.pop());
        }
      }
      La = Ba("jsMain");
      var d = !(8 > B || 5 > r || oa || .9 > T), g = 7 > r, l = ["og:", "twitter:", "fb:"], n = [];
      c(za);
    });
  })();
  var N, X, la, Ga, lb, ab, Db, mb, Eb, Fb, nb = 0;
  (function() {
    function p(f, k) {
      for (var a = 0; a < f.length; ++a) {
        !0 === f[a](k) && (f.splice(a, 1), --a);
      }
    }
    function v(f, k) {
      l && !g.length && pa(z);
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
        b.i === this ? (this.g = b.h, this.g(k), this.g = H, this.g = null) : 7.2 > B && this === h && b.i === m && (m.g = b.h, m.g(k), delete m.g);
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
    function P(f) {
      p(wa, f);
    }
    function Q() {
      var f = 9 === d.offsetWidth;
      Fb !== f && v(R, Fb = f);
    }
    function O() {
      return nb = sa ? Ha ? 2 : ha ? 3 : 1 : 0;
    }
    function x() {
      !C && ia && (vb(ia), ia = pa(ba));
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
        g.length && pa(z);
      });
    });
    N = function(f, k, a, b) {
      if (u) {
        f.addEventListener(k, a, b ? sb ? b : b.capture : !1);
      } else {
        var e = {i:f, h:a};
        b = n[k];
        var q = "on" + k, y, S;
        if (b) {
          for (y = b.length; S = b[--y];) {
            if (S.i === f && S.h === a) {
              return;
            }
          }
          n[k].push(e);
        } else {
          n[k] = b = [e], w || (k = f[q], "function" === typeof k && k !== t && b.unshift({i:f, h:k}));
        }
        w ? f.attachEvent(q, t) : f[q] = t;
      }
    };
    X = function(f, k, a, b) {
      if (u) {
        f.removeEventListener(k, a, b ? sb ? b : b.capture : !1);
      } else {
        b = n[k];
        k = "on" + k;
        var e, q, y;
        if (b) {
          for (e = b.length; q = b[--e];) {
            q.i === f && (q.h === a ? b.splice(e, 1) : y = !0);
          }
          y || (w ? f.detachEvent(k, t) : (f[k] = H, f[k] = null));
        }
      }
    };
    var n = {}, w = !1, J = 525.13 > Aa, u = !J && !oa && m.addEventListener, K;
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
    (r || 1.8 > T) && N(m, "unload", P);
    Db = function(f) {
      R.push(f);
    };
    var R = [];
    la(function() {
      Q();
      Ya(Q);
    });
    Eb = function(f) {
      Y.push(f);
    };
    var Y = [], sa, ha, Ha;
    if (10 <= r || Va || rb && Kb) {
      c("(-ms-high-contrast:black-on-white)").addListener(function(f) {
        sa = ha = f.matches;
        v(Y, O());
      }), c("(-ms-high-contrast:white-on-black)").addListener(function(f) {
        sa = Ha = f.matches;
        v(Y, O());
      }), c("(-ms-high-contrast:active)").addListener(function(f) {
        sa = f.matches;
        v(Y, O());
      });
    } else {
      if (10 > r || rb && (44 <= T || db)) {
        var Z = function() {
          function f(e) {
            return "#ffffff" === e || "rgb(255,255,255)" === e;
          }
          var k = h.defaultView, a = nb, b = k ? k.getComputedStyle(d, null) : d.currentStyle;
          k = (b && b.color || "").split(" ").join("");
          b = (b && b.backgroundColor || "").split(" ").join("");
          if (k) {
            return sa = "#123456" !== k && "rgb(18,52,86)" !== k, ha = ("#000000" === k || "rgb(0,0,0)" === k) && f(b), Ha = f(k) && ("#000000" === b || "rgb(0,0,0)" === b), a !== O() && v(Y, nb), !0;
          }
        };
        la(function() {
          Fa(d, "color", "#123456");
          Fa(d, "backgroundColor", "#123456");
          60 > T || db ? Z() : Z() && Ya(Z);
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
      if (9 <= B && 12 > B || 532 > Aa) {
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
    N(m, "resize", x);
    Ga(function() {
      ia && clearTimeout(ia);
      X(m, "resize", x);
    });
    ab = function(f) {
      xa.push(f);
    };
    var xa = [], ma = 0, ta = 1 > T || 1.2 <= T && 1.8 > T || 7.2 >= B;
    ta ? Ya(function() {
      var f = m.scrollY || ea.scrollTop;
      ma !== f && (ma = f, W());
    }) : N(m, "scroll", W);
    Ga(function() {
      ta || X(m, "scroll", W);
    });
  })();
  (function() {
    var p = 1 > T || 8 <= B && 9 > B, v = 7.2 <= B && 8 > B;
    r || !p && !v && function() {
      var z = ra(za, "style"), t = !(!z.styleSheet && !z.sheet);
      fa(z);
      return t;
    }() || !Aa || p || v || function() {
      var z = ra(za, "style");
      Bb(z, "");
      var t = !(!z.styleSheet && !z.sheet);
      fa(z);
      return t;
    }();
  })();
  (function() {
    9 > r && la(function() {
      var p = ra(ea, "div");
      Ma(p, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      tb = 1 < p.offsetHeight;
      Ma(p, "");
      fa(p);
    });
    fb = function(p, v) {
      function z() {
        L || !P || t.complete ? (pa(p, !!t.width), t.onerror = t.onload = H, t = p = null) : (--P, pa(z));
      }
      var t = new Image, L, P = 99;
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
      (ub || 5.5 <= r && 9 > r && tb) && Ea(ea, "jsCanRotate");
      p = null;
    }
    function v(a) {
      var b = a.keyCode || a.K, e = l.length, q, y, S, Oa;
      if ("keydown" !== a.type || 13 === b) {
        for (; e;) {
          if (b = l[--e], b.l === this || b.j === this) {
            e = b.l;
            var D = q = b.j;
            if (b.B) {
              if (Fa(e, "width", b.J), e.src = b.I, $a(D, b.D), e = b.v) {
                Ma(e, b.C), $a(e, "caption jsCap");
              }
            } else {
              if (y = b.A) {
                for (delete b.A; q = qa(q);) {
                  if (kb(q, "caption")) {
                    b.v = q, b.C = q.style.cssText, Ea(q, "jsCap");
                  } else {
                    var G = Za(q);
                    if ("DIV" === G || "P" === G || "BLOCKQUOT" === G) {
                      break;
                    }
                  }
                }
                q = q.offsetWidth - 4 - 1;
                1600 < q && (q = 1600);
                if (0 < y.indexOf(".bp.blogspot.com/")) {
                  y = y.split("/");
                  G = y.length;
                  if (S = y[G - 2]) {
                    (Oa = I(S.substr(1))) && S === "s" + Oa ? y[G - 2] = "w" + q : y.splice(G - 1, 0, "w" + q);
                  }
                  y = y.join("/");
                }
                b.G = y;
              }
              b.D = Cb(D);
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
      for (var b = arguments, e = 0, q = b.length; e < q; ++e) {
        if (isFinite(b[e])) {
          return b[e];
        }
      }
      return 0;
    }
    function L() {
      Z && !w ? Z = !1 : (ha = t(m.pageYOffset, m.scrollY, K.scrollTop, ea.scrollTop), Z ? (P(ha, 0, Z[0], Z[1]), Z = !1) : P(ha));
    }
    function P(a, b, e, q) {
      function y(Pa) {
        U = Pa;
        if (Y) {
          ca = S + Pa + Oa;
        } else {
          if (u) {
            if (0 !== Pa) {
              Pa -= a - A;
              var Qa = C.offsetWidth;
              ca = "position:fixed;width:" + Qa + "px;top:" + Pa + "px";
            }
          } else {
            ca = "position:absolute;left:0;width:100%;top:" + Pa + "px";
          }
          if (u || 7 > r) {
            Qa = Qa || C.offsetWidth, ca += ";" + (0 > U ? "clip:rect(" + -U + "px " + Qa + "px " + (Ra - U) + "px 0)" : U + da < A + Ra ? "clip:rect(0 " + Qa + "px " + da + "px 0)" : "clip:rect(0 " + Qa + "px " + (a + Ra - U - A) + "px 0)");
          }
        }
      }
      var S = Y + ":translate" + (Ha ? "3D(0," : "(0,"), Oa = Ha ? "px,0)" : "px)", D = t(m.innerHeight, K.offsetHeight), G = wa, V = G.offsetHeight, da = R.offsetHeight, A = 0, ca = "", U = 0, Gb = C.offsetTop === G.offsetTop, Mb = da < V;
      if (Gb) {
        for (; G;) {
          A += G.offsetTop || 0, G = G.offsetParent || G.parentElement;
        }
        G = A + V <= a;
        var Nb = a + D <= A, Hb = a < A && A < a + D, Ib = a < A + V && A + V < a + D, Ob = Hb && Ib, Ra = A + V - a < D ? A + V - a : D, ob = da <= Ra;
        if (0 <= e) {
          if (ob) {
            return;
          }
          V = e + A + sa;
          if (a + Ra < q + V) {
            y(a + Ra - A - e - q);
          } else {
            if (V < a) {
              y(a - A - e);
            } else {
              return;
            }
          }
        } else {
          if (b) {
            if (ob) {
              var Pb = !0;
            } else {
              U = sa - 60 * b, 0 < b ? (e = a + D - A - da, e = V - da < e ? V - da : e, U = U < e ? e : U) : (e = 0 > a - A ? 0 : a - A, U = e < U ? e : U), y(U);
            }
          } else {
            Mb && (Hb || Nb ? y(0) : ob ? y(a - A) : Ib || G ? y(V - da) : (e = a + D - A - da, y(0 > e ? 0 : e)));
          }
        }
      }
      Y && ca && (ca += ";-webkit-overflow-scrolling:touch;");
      Ma(R, ca);
      sa = U;
      return Gb && !Ob && !Pb;
    }
    function Q(a) {
      T && (ha = t(m.pageYOffset, K.scrollTop, ea.scrollTop));
      var b = this !== a.target, e = b && t(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && e && P(ha, 9 >= e ? -9 >= e ? -3 : e : 3) && (a.preventDefault(), a.stopPropagation());
    }
    function O(a) {
      for (var b = -1, e; e = n[++b];) {
        Ta(Ba(e), a.target) && Q(a);
      }
    }
    function x(a) {
      a = a || event;
      a = a.srcElement || a.target;
      var b = 0, e;
      if (Ta(R, a)) {
        for (e = a.offsetHeight; R !== a && Ta(R, a);) {
          b += a.offsetTop || 0, a = a.offsetParent;
        }
        w ? Z = [b, e] : (P(ha, 0, b, e), Z = !0, a = ha, m.scrollTo(t(m.pageXOffset, m.scrollX, K.scrollLeft, ea.scrollLeft), a));
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
    Eb(function(a) {
      a && !g ? p && p() : a ? Ka.appendChild(g) : fa(g);
    });
    var l = [];
    pb || (mb(function(a) {
      if (a.o && La) {
        a = a.m;
        var b = qa(a);
        if ("A" === Za(b) && 1 === Ab(b).length) {
          var e = ka(b, "href"), q = e.split("?")[0].split("#")[0].split(".");
          q = (q[q.length - 1] || "").toLowerCase();
          0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + q + ".") && (N(b, "keydown", v), N(a, "click", v), N(b, "click", z), q = 8 > B ? "" : a.offsetWidth - 4 + "px", Fa(a, "width", q), Ea(b, "jsPica"), l.push({j:b, I:a.src, J:q, A:e, l:a}));
        }
      }
    }), Ga(function(a, b) {
      for (a = -1; b = l[++a];) {
        X(b.j, "keydown", v), X(b.l, "click", v), X(b.j, "click", z);
      }
    }));
    var n = ["jsSidebarFixer1", "jsSidebarFixer2"], w = 10 <= r || Va || qb || Aa, J = T || db || Va, u = !(5 > F(16) || 5 > F(17) || 2.2 > F(21) || 6 > F(12) || aa(30) && 534 > Aa || aa(32) || 7 > r || 9 > B), K, C, wa, R, Y = ub, sa = 0, ha = 0, Ha, Z, ya = T && 0 <= E.conpare(Ja, "0.9.7");
    Jb || pb || 8 > B || (Db(function(a) {
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
        R = ib(hb(C), "div", {id:"jsSidebarFixer"});
        for (r || oa ? N(R, "focusin", x) : J ? N(h, "focus", x, {capture:!0, passive:!1}) : N(R, "DOMFocusIn", x, !1); 1 < Ca(C).length;) {
          R.appendChild(Ca(C)[1]);
        }
        for (; b = n[++a];) {
          b = Ba(b), b.onwheel !== M ? N(b, "wheel", Q, {passive:!1}) : cb ? N(b, "MozMousePixelScroll", Q, !1) : ya || (b.onmousewheel !== M || B) && N(b, "mousewheel", Q, !1);
        }
        ya && N(h, "DOMMouseScroll", O, !1);
        Ha = !r && !Va && (va.perspective !== M || va["-moz-perspective"] !== M || va["-webkit-perspective"] !== M);
        L();
        return !0;
      }
    }), Ga(function() {
      for (var a = -1, b; b = n[++a];) {
        b = Ba(b), b.onwheel !== M ? X(b, "wheel", Q, {passive:!1}) : cb ? X(b, "MozMousePixelScroll", Q, !1) : ya || (b.onmousewheel !== M || B) && X(b, "mousewheel", Q, !1);
      }
      ya && X(h, "DOMMouseScroll", O, !1);
      r || oa ? X(R, "focusin", Q, !1) : J ? X(h, "focus", x, {capture:!0, passive:!1}) : X(R, "DOMFocusIn", x, !1);
    }));
    la(function() {
      function a(Oa, D, G, V) {
        var da = V ? "div" : "cite";
        if (0 === D.indexOf("urn:isbn:")) {
          D = D.substr(9).toUpperCase().split("-").join("");
          if (13 === D.length) {
            D = D.toString().slice(3, -1);
            for (var A = 0, ca = 0; 9 > ca; ca++) {
              A += (D.charAt(ca) - 0) * (10 - ca);
            }
            A = (11 - A % 11) % 11;
            A = 10 === A ? "X" : A.toString();
            D += A;
          }
          10 === D.length && (D = "//www.amazon.co.jp/exec/obidos/ASIN/" + D + "/itozyun-22/ref=nosim/");
        }
        G = V ? ib(hb(e), da, {className:G}) : ra(e, da, {className:G});
        ra(G, "a", 0 === D.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", F:!0, href:D, H:B ? "0" : M} : {F:!0, href:D, H:B ? "0" : M}, Oa);
      }
      if (La) {
        for (var b = gb(La, "blockquote"), e, q = -1, y, S; e = b[++q];) {
          y = ka(e, "title"), S = ka(e, "cite"), y && S ? (Da(e, "title"), a(y, S, "js-bqLink", !0)) : S && (Da(e, "cite"), a(m.decodeURI ? decodeURI(S) : S, S, "js-bqCite"));
        }
      }
    });
    var Na, ia, xa, ma, ta, f, k;
    la(function() {
      var a = Ba("blog2slide-start"), b = h.onfullscreenchange !== M ? "f" : h.onmozfullscreenchange !== M ? "mozF" : h.onwebkitfullscreenchange !== M ? "webkitF" : 0;
      a && (Na = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen, 0 !== b || Na ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', N(a.firstChild, "click", ba), a = qa(a), ia = qa(a), ta = gb(a, "section"), xa = h.createElement("h1"), xa.innerHTML = Sa("h1")[0].innerHTML, k = ta.length, ta.splice(0, 0, xa), 0 !== b ? N(h, b + "ullscreenchange", W) : r ? N(h, "MSFullscreenChange", W, !1) : lb(W)) : 
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
    8 <= B && la(function() {
      for (var p = Sa("a"), v = p.length, z = 0, t; z < v; ++z) {
        t = p[z], "-1" === ka(t, "tabindex") ? Da(t, "tabindex") : ka(t, "href") && Ua(t, "tabindex", "0");
      }
    });
  })();
  bb = h.scripts || Sa("script");
  var na = bb[bb.length - 1].src.split("/");
  --na.length;
  "js" === na[na.length - 1] && --na.length;
  (na = na.join("/")) && (na += "/");
  var Jb = Lb || "1" === ka(ea, "mob");
  Wa = (Jb ? "mb" : "pc") + "/";
  6.1 > ja && ab(wb);
  Ga(xb);
  6.1 > ja && ab(yb);
  Ga(zb);
  10 > r && (11 !== Ia || 5 !== r) || (9.5 > B || 1.5 > T || !oa && !m.addEventListener ? h.write('<link href="' + na + "css/" + Wa + eb + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : (532 >= Aa || 2 > qb) && la(function() {
    ra(Ka, "link", {href:na + "css/" + Wa + eb, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

