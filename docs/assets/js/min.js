Array.prototype.pop || (Array.prototype.pop = function() {
  var G = this[this.length - 1];
  --this.length;
  return G;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var G = arguments, l = 0, J = G.length, h = this.length; l < J; ++l) {
    this[h + l] = G[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var G = this[0], l = 1, J = this.length; l < J; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return G;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var G = arguments, l = G.length, J = this.length += l - 1, h = J; h >= l; --h) {
    this[h] = this[h - l];
  }
  for (h = 0; h < l; ++h) {
    this[h] = G[h];
  }
  return J;
});
Array.prototype.splice || (Array.prototype.splice = function(G, l) {
  var J = arguments, h = J.length - 2 - l, Ja = this.slice(G, G + l), ja;
  if (0 < h) {
    var I = this.length - 1;
    for (ja = G + l; I >= ja; --I) {
      this[I + h] = this[I];
    }
  } else {
    if (0 > h) {
      I = G + l;
      for (ja = this.length; I < ja; ++I) {
        this[I + h] = this[I];
      }
      this.length += h;
    }
  }
  I = 2;
  for (ja = J.length; I < ja; ++I) {
    this[I - 2 + G] = J[I];
  }
  return Ja;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(G, l) {
  var J = this.length >>> 0;
  if (0 === J) {
    return -1;
  }
  if (l) {
    var h = l || 0;
    h = -Infinity === h ? 0 : (0 > h ? -h : h) | 0;
    if (J <= h) {
      return -1;
    }
  }
  for (h = 0 <= h ? h : 0 < J + h ? J + h : 0; h < J; ++h) {
    if (this[h] === G) {
      return h;
    }
  }
  return -1;
});
(function(G, l, J, h, Ja, ja, I, bb, N) {
  function H(q) {
    if (G[0] === q) {
      return Ka === Ka + "" ? I(Ka) : Ka;
    }
  }
  function aa(q) {
    var w = G[3];
    if (G[2] === q) {
      return w === w + "" ? I(w) : w;
    }
  }
  var fa = h.body, va = fa.style, Aa, La, Ma, Ka = G[1], t = H(2) || H(3), oa = H(7), Va = H(5) || H(6), B = H(8) || H(9), P = H(11) || H(12), cb = P && 0 <= G.conpare(Ka, "1.9.1"), db = H(13), Ba = H(15);
  ja = H(16) || H(17);
  var pb = H(10) || H(25), Kb = (bb = H(20) || H(22)) || H(23) || H(21) || H(24), Lb = bb && I(Ja.userAgent.split("Edg/")[1]);
  Ja = I(Ja.appVersion.split("Trident/")[1]) + 4;
  var qb = aa(35) || aa(36) || aa(37), rb = !t && !oa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), eb = (oa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : P && !cb ? 1.3 <= P ? "gck190" : 1 <= P ? "gck121" : "gck097" : "modern") + ".css", Wa = "", Mb = aa(1) || aa(2) || aa(3) || 
  aa(4) || aa(8) || aa(9) || aa(10), sb, tb = va.transform !== N ? "transform" : va["-o-transform"] !== N ? "-o-transform" : va["-ms-transform"] !== N ? "-ms-transform" : va["-moz-transform"] !== N ? "-moz-transform" : va["-webkit-transform"] !== N ? "-webkit-transform" : "", Xa = [], fb, pa, ub, Ya, vb, wb, xb, yb;
  (function() {
    function q() {
      for (var d, g = 0, m = new Date - 0; g < y.length;) {
        m < y[0].t ? ++g : (d = y.splice(g, 1)[0], d.f(d.p));
      }
      c = y.length ? setTimeout(q, ba) : 0;
    }
    function w() {
      for (var d, g = 0; g < M.length; ++g) {
        d = M[g], d.f();
      }
    }
    function z() {
      Q && (Q = clearInterval(Q));
    }
    function u() {
      c && (c = clearTimeout(c));
    }
    Ya = function(d) {
      M.length || (Q = setInterval(w, R));
      M.push({f:d, u:++S});
      return S;
    };
    vb = function() {
      Q && (z(), Q = setInterval(w, R));
    };
    wb = z;
    var M = [], R = 999, S = 0, Q;
    if (5 > t || oa) {
      l._wdb_onlooptimer = w, w = "_wdb_onlooptimer()";
    }
    pa = function(d, g, m) {
      y.length || (c = setTimeout(q, ba));
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
      c && (u(), c = setTimeout(q, ba));
    };
    yb = u;
    var y = [], ba = 64, W = 0, c;
    if (5 > t || oa) {
      l._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var Ca, Sa, gb, qa, Da, zb, hb, ra, ib, Ab, ca, Ta, Za, ka, Ua, Ea, jb, Bb, $a, kb, Fa, Ga, Na;
  (function() {
    function q(c, d, g) {
      var m = ["<", c], n = 1, x, K;
      if (d) {
        for (x in d) {
          var r = d[x];
          if (null != r && "" !== r) {
            if ("style" === x) {
              m[++n] = ' style="';
              for (K in r) {
                for (var L = ++n, C, wa = [], T = K.split(""), Y = T.length; Y;) {
                  C = T[--Y], "A" <= C && "Z" >= C && (C = "-" + C.toLowerCase()), wa[Y] = C;
                }
                m[L] = wa.join("") + ":" + r[K] + ";";
              }
              m[++n] = '"';
            } else {
              "className" === x && (x = "class"), m[++n] = " " + x + '="' + r + '"';
            }
          }
        }
      }
      m[++n] = ">";
      null != g && (y && "font" !== c ? m[++n] = "<FONT>" + g + "</FONT>" : m[++n] = g);
      m[++n] = "</" + c + ">";
      return m.join("");
    }
    function w(c) {
      return z(h, c);
    }
    function z(c, d) {
      var g = "*" === d && 6 > t ? "*" !== d ? c.all.tags(d.toUpperCase()) : c.all : c.getElementsByTagName(d), m = [], n = 0, x;
      for (x = g.length; n < x; ++n) {
        m[n] = g[n];
      }
      return m;
    }
    function u(c) {
      return y ? c.parentElement : c.parentNode;
    }
    function M(c, d, g, m, n, x) {
      if (y) {
        var K = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend", r = Da(2 > c ? qa(d) : d);
        r = 2 > c ? r.indexOf(d) + c : r.length;
        d.insertAdjacentHTML(K, q(g, m, n));
        return Da(d)[r];
      }
      d = ba ? h.createElement(q(g, m)) : x ? h.createElementNS("http://www.w3.org/2000/svg", g) : h.createElement(g);
      if (m && !ba) {
        for (K in m) {
          if ((g = m[K]) || 0 === g) {
            switch(K) {
              case "class":
              case "className":
                $a(d, g);
                break;
              case "style":
                c = d.style;
                for (r in g) {
                  c[r] = g[r];
                }
                break;
              default:
                Ua(d, K, g);
            }
          }
        }
      }
      W || null != n && R(d, n);
      return d;
    }
    function R(c, d) {
      if (y) {
        return M(2, c, "font", N, d);
      }
      var g = h.createTextNode("" + d);
      c.appendChild(g);
      return g;
    }
    function S(c, d) {
      9 > t ? c.className = d : c.setAttribute("class", d);
    }
    function Q(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    var y = 5 > t;
    Aa = w("html")[0];
    La = w("head")[0];
    Ca = function(c) {
      return l[c] || h[c] || h.getElementById(c);
    };
    Sa = w;
    gb = z;
    qa = u;
    Da = function(c) {
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
      d = M(2, c, d, g, m, n);
      y || (c.appendChild(d), W && null != m && R(d, m));
      return d;
    };
    ib = function(c, d, g, m, n) {
      d = M(0, c, d, g, m, n);
      y || (u(c).insertBefore(d, c), W && null != m && R(d, m));
      return d;
    };
    Ab = R;
    ca = function(c) {
      y ? c.outerHTML = "" : qa(c).removeChild(c);
    };
    Ta = function(c, d) {
      if (c.contains) {
        return c.contains(d);
      }
      for (; d && d !== Aa;) {
        if (d = qa(d), c === d) {
          return !0;
        }
      }
    };
    var ba = 9 > t, W = 9 > t;
    Za = function(c) {
      return c.tagName.toUpperCase();
    };
    ka = function(c, d) {
      return c.getAttribute(d) || "";
    };
    Ua = function(c, d, g) {
      c.setAttribute(d, g);
    };
    Ea = function(c, d) {
      c.removeAttribute(d);
    };
    jb = function(c, d) {
      return c.hasAttribute ? c.hasAttribute(d) : null != c.getAttribute(d);
    };
    Bb = function(c) {
      return c.className;
    };
    $a = S;
    kb = Q;
    Fa = function(c, d) {
      var g;
      if (!Q(c, d)) {
        if (g = c.className) {
          d = " " + d;
        }
        S(c, g + d);
      }
    };
    Ga = function(c, d, g) {
      c.style[d] = g;
    };
    Na = function(c, d) {
      var g = -1, m, n;
      if (9 > B || 5.5 > t) {
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
        x = Da(x);
        for (var K = x.length, r, L, C; K;) {
          if (r = x[--K], L = r.nodeType, 8 === L) {
            d && ca(r);
          } else {
            if (1 === L) {
              switch(L = Za(r), L.replace("/", "")) {
                case "STYLE":
                  if (8 <= B && 9 > B) {
                    break;
                  }
                case "LINK":
                  y || g || Ta(La, r) || n.push(r);
                  break;
                case "META":
                  L = ka(r, "name") || ka(r, "property");
                  for (C = m.length; C;) {
                    if (0 === L.indexOf(m[--C])) {
                      ca(r);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (jb(r, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (jb(r, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  ca(r);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || ca(r);
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
                  9 > t && ca(r);
                  break;
                default:
                  Da(r).length && c(r);
              }
            }
          }
        }
        for (; n[0];) {
          La.appendChild(n.pop());
        }
      }
      Ma = Ca("jsMain");
      var d = !(8 > B || 5 > t || oa || .9 > P), g = 7 > t, m = ["og:", "twitter:", "fb:"], n = [];
      c(Aa);
    });
  })();
  var O, X, la, Ha, lb, ab, Cb, mb, Db, Eb, nb = 0;
  (function() {
    function q(f, k) {
      for (var a = 0; a < f.length; ++a) {
        !0 === f[a](k) && (f.splice(a, 1), --a);
      }
    }
    function w(f, k) {
      m && !g.length && pa(z);
      g.push(f, k);
    }
    function z() {
      var f = g, k;
      for (g = []; k = f.shift();) {
        q(k, f.shift());
      }
    }
    function u(f) {
      var k = f || event;
      f = n[k.type];
      var a = -1, b, e;
      for (t ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : K && (k.s = k.stopPropagation, k.stopPropagation = function() {
        e = !0;
      }); b = f[++a];) {
        b.i === this ? (this.g = b.h, this.g(k), this.g = J, this.g = null) : 7.2 > B && this === h && b.i === l && (l.g = b.h, l.g(k), delete l.g);
      }
      if (t) {
        return k.preventDefault = k.stopPropagation = null, k.returnValue;
      }
      K && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (L = !0), e && !L && k.s(), k.s = k.stopPropagation = null);
    }
    function M() {
      if (C) {
        var f = h.readyState;
        "loaded" === f || "complete" === f ? C() : pa(M);
      }
    }
    function R(f) {
      q(wa, f);
    }
    function S() {
      var f = 9 === d.offsetWidth;
      Eb !== f && w(T, Eb = f);
    }
    function Q() {
      return nb = sa ? Ia ? 2 : ha ? 3 : 1 : 0;
    }
    function y() {
      !C && ia && (ub(ia), ia = pa(ba));
    }
    function ba() {
      ia = 0;
      q(Oa);
    }
    function W() {
      C || q(xa);
    }
    var c = l.matchMedia, d, g = [], m;
    Xa.push(function() {
      d = ra(fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      la(function() {
        m = !0;
        g.length && pa(z);
      });
    });
    O = function(f, k, a, b) {
      if (r) {
        f.addEventListener(k, a, b ? rb ? b : b.capture : !1);
      } else {
        var e = {i:f, h:a};
        b = n[k];
        var v = "on" + k, p, F;
        if (b) {
          for (p = b.length; F = b[--p];) {
            if (F.i === f && F.h === a) {
              return;
            }
          }
          n[k].push(e);
        } else {
          n[k] = b = [e], x || (k = f[v], "function" === typeof k && k !== u && b.unshift({i:f, h:k}));
        }
        x ? f.attachEvent(v, u) : f[v] = u;
      }
    };
    X = function(f, k, a, b) {
      if (r) {
        f.removeEventListener(k, a, b ? rb ? b : b.capture : !1);
      } else {
        b = n[k];
        k = "on" + k;
        var e, v, p;
        if (b) {
          for (e = b.length; v = b[--e];) {
            v.i === f && (v.h === a ? b.splice(e, 1) : p = !0);
          }
          p || (x ? f.detachEvent(k, u) : (f[k] = J, f[k] = null));
        }
      }
    };
    var n = {}, x = !1, K = 525.13 > Ba, r = !K && !oa && l.addEventListener, L;
    K && Aa.addEventListener("click", function(f) {
      if (L) {
        return L = !1, f.preventDefault(), !1;
      }
    });
    la = function(f) {
      Xa.push(f);
    };
    Ha = function(f) {
      wa.push(f);
    };
    var C = function(f) {
      X(l, "load", C);
      C = null;
      q(Xa, f);
    }, wa = [];
    419.3 >= Ba ? pa(M) : O(l, "load", C);
    (t || 1.8 > P) && O(l, "unload", R);
    Cb = function(f) {
      T.push(f);
    };
    var T = [];
    la(function() {
      S();
      Ya(S);
    });
    Db = function(f) {
      Y.push(f);
    };
    var Y = [], sa, ha, Ia;
    if (10 <= t || Va || qb && Lb) {
      c("(-ms-high-contrast:black-on-white)").addListener(function(f) {
        sa = ha = f.matches;
        w(Y, Q());
      }), c("(-ms-high-contrast:white-on-black)").addListener(function(f) {
        sa = Ia = f.matches;
        w(Y, Q());
      }), c("(-ms-high-contrast:active)").addListener(function(f) {
        sa = f.matches;
        w(Y, Q());
      });
    } else {
      if (10 > t || qb && (44 <= P || db)) {
        var Z = function() {
          function f(e) {
            return "#ffffff" === e || "rgb(255,255,255)" === e;
          }
          var k = h.defaultView, a = nb, b = k ? k.getComputedStyle(d, null) : d.currentStyle;
          k = (b && b.color || "").split(" ").join("");
          b = (b && b.backgroundColor || "").split(" ").join("");
          if (k) {
            return sa = "#123456" !== k && "rgb(18,52,86)" !== k, ha = ("#000000" === k || "rgb(0,0,0)" === k) && f(b), Ia = f(k) && ("#000000" === b || "rgb(0,0,0)" === b), a !== Q() && w(Y, nb), !0;
          }
        };
        la(function() {
          Ga(d, "color", "#123456");
          Ga(d, "backgroundColor", "#123456");
          60 > P || db ? Z() : Z() && Ya(Z);
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
        q(ya, {m:k[a], o:e});
        a && fb(f, k[--a].src);
      }
      var k = h.images || Sa("img"), a = k.length;
      if (12 > B || 532 > Ba) {
        a && fb(f, k[--a].src);
      } else {
        for (; a;) {
          var b = k[--a];
          w(ya, {m:b, o:9 > t ? b.complete : 0 <= b.naturalWidth ? b.naturalWidth : b.width});
        }
      }
    });
    lb = function(f) {
      Oa.push(f);
    };
    var Oa = [], ia;
    O(l, "resize", y);
    Ha(function() {
      ia && clearTimeout(ia);
      X(l, "resize", y);
    });
    ab = function(f) {
      xa.push(f);
    };
    var xa = [], ma = 0, ta = 1 > P || 1.2 <= P && 1.8 > P || 7.2 >= B;
    ta ? Ya(function() {
      var f = l.scrollY || fa.scrollTop;
      ma !== f && (ma = f, W());
    }) : O(l, "scroll", W);
    Ha(function() {
      ta || X(l, "scroll", W);
    });
  })();
  (function() {
    var q = 1 > P || 8 <= B && 9 > B, w = 7.2 <= B && 8 > B;
    t || !q && !w && function() {
      var z = ra(Aa, "style"), u = !(!z.styleSheet && !z.sheet);
      ca(z);
      return u;
    }() || !Ba || q || w || function() {
      var z = ra(Aa, "style");
      Ab(z, "");
      var u = !(!z.styleSheet && !z.sheet);
      ca(z);
      return u;
    }();
  })();
  (function() {
    9 > t && la(function() {
      var q = ra(fa, "div");
      Na(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sb = 1 < q.offsetHeight;
      Na(q, "");
      ca(q);
    });
    fb = function(q, w) {
      function z() {
        M || !R || u.complete ? (pa(q, !!u.width), u.onerror = u.onload = J, u = q = null) : (--R, pa(z));
      }
      var u = new Image, M, R = 99;
      u.onerror = function() {
        M = !0;
      };
      u.onload = function() {
        M = !0;
      };
      u.src = w;
      pa(z);
    };
  })();
  (function() {
    function q() {
      g = ra(La, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:na + "css/" + Wa + "hc/" + eb});
      (tb || 5.5 <= t && 9 > t && sb) && Fa(fa, "jsCanRotate");
      q = null;
    }
    function w(a) {
      var b = a.keyCode || a.L, e = m.length, v, p, F, za;
      if ("keydown" !== a.type || 13 === b) {
        for (; e;) {
          if (b = m[--e], b.l === this || b.j === this) {
            e = b.l;
            var D = v = b.j;
            if (b.B) {
              if (Ga(e, "width", b.K), e.src = b.J, $a(D, b.D), e = b.v) {
                Na(e, b.C), $a(e, "caption jsCap");
              }
            } else {
              if (p = b.A) {
                for (delete b.A; v = qa(v);) {
                  if (kb(v, "caption")) {
                    b.v = v, b.C = v.style.cssText, Fa(v, "jsCap");
                  } else {
                    var E = Za(v);
                    if ("DIV" === E || "P" === E || "BLOCKQUOT" === E) {
                      break;
                    }
                  }
                }
                v = v.offsetWidth - 4 - 1;
                1600 < v && (v = 1600);
                if (b.G) {
                  p = p.split("=");
                  E = p.length;
                  if (F = p[E - 1]) {
                    (za = I(F.substr(1))) && F === "s" + za ? p[E - 1] = "w" + v : p[E] = "w" + v;
                  }
                  p = p.join("=");
                } else {
                  if (0 < p.indexOf(".bp.blogspot.com/")) {
                    p = p.split("/");
                    E = p.length;
                    if (F = p[E - 2]) {
                      (za = I(F.substr(1))) && F === "s" + za ? p[E - 2] = "w" + v : p.splice(E - 1, 0, "w" + v);
                    }
                    p = p.join("/");
                  }
                }
                b.H = p;
              }
              b.D = Bb(D);
              Fa(D, "jsPicaLarge");
              Ga(e, "width", "");
              e.src = b.H;
              if (e = b.v) {
                Na(e, ""), Fa(e, "jsCapLarge");
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
    function u(a) {
      for (var b = arguments, e = 0, v = b.length; e < v; ++e) {
        if (isFinite(b[e])) {
          return b[e];
        }
      }
      return 0;
    }
    function M() {
      Z && !x ? Z = !1 : (ha = u(l.pageYOffset, l.scrollY, L.scrollTop, fa.scrollTop), Z ? (R(ha, 0, Z[0], Z[1]), Z = !1) : R(ha));
    }
    function R(a, b, e, v) {
      function p(Pa) {
        U = Pa;
        if (Y) {
          da = F + Pa + za;
        } else {
          if (r) {
            if (0 !== Pa) {
              Pa -= a - A;
              var Qa = C.offsetWidth;
              da = "position:fixed;width:" + Qa + "px;top:" + Pa + "px";
            }
          } else {
            da = "position:absolute;left:0;width:100%;top:" + Pa + "px";
          }
          if (r || 7 > t) {
            Qa = Qa || C.offsetWidth, da += ";" + (0 > U ? "clip:rect(" + -U + "px " + Qa + "px " + (Ra - U) + "px 0)" : U + ea < A + Ra ? "clip:rect(0 " + Qa + "px " + ea + "px 0)" : "clip:rect(0 " + Qa + "px " + (a + Ra - U - A) + "px 0)");
          }
        }
      }
      var F = Y + ":translate" + (Ia ? "3D(0," : "(0,"), za = Ia ? "px,0)" : "px)", D = u(l.innerHeight, L.offsetHeight), E = wa, V = E.offsetHeight, ea = T.offsetHeight, A = 0, da = "", U = 0, Fb = C.offsetTop === E.offsetTop, Nb = ea < V;
      if (Fb) {
        for (; E;) {
          A += E.offsetTop || 0, E = E.offsetParent || E.parentElement;
        }
        E = A + V <= a;
        var Ob = a + D <= A, Gb = a < A && A < a + D, Hb = a < A + V && A + V < a + D, Pb = Gb && Hb, Ra = A + V - a < D ? A + V - a : D, ob = ea <= Ra;
        if (0 <= e) {
          if (ob) {
            return;
          }
          V = e + A + sa;
          if (a + Ra < v + V) {
            p(a + Ra - A - e - v);
          } else {
            if (V < a) {
              p(a - A - e);
            } else {
              return;
            }
          }
        } else {
          if (b) {
            if (ob) {
              var Qb = !0;
            } else {
              U = sa - 60 * b, 0 < b ? (e = a + D - A - ea, e = V - ea < e ? V - ea : e, U = U < e ? e : U) : (e = 0 > a - A ? 0 : a - A, U = e < U ? e : U), p(U);
            }
          } else {
            Nb && (Gb || Ob ? p(0) : ob ? p(a - A) : Hb || E ? p(V - ea) : (e = a + D - A - ea, p(0 > e ? 0 : e)));
          }
        }
      }
      Y && da && (da += ";-webkit-overflow-scrolling:touch;");
      Na(T, da);
      sa = U;
      return Fb && !Pb && !Qb;
    }
    function S(a) {
      P && (ha = u(l.pageYOffset, L.scrollTop, fa.scrollTop));
      var b = this !== a.target, e = b && u(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && e && R(ha, 9 >= e ? -9 >= e ? -3 : e : 3) && (a.preventDefault(), a.stopPropagation());
    }
    function Q(a) {
      for (var b = -1, e; e = n[++b];) {
        Ta(Ca(e), a.target) && S(a);
      }
    }
    function y(a) {
      a = a || event;
      a = a.srcElement || a.target;
      var b = 0, e;
      if (Ta(T, a)) {
        for (e = a.offsetHeight; T !== a && Ta(T, a);) {
          b += a.offsetTop || 0, a = a.offsetParent;
        }
        x ? Z = [b, e] : (R(ha, 0, b, e), Z = !0, a = ha, l.scrollTo(u(l.pageXOffset, l.scrollX, L.scrollLeft, fa.scrollLeft), a));
      }
    }
    function ba() {
      Oa.call(ia);
    }
    function W() {
      h.fullscreenElement || h.fullscreen || h.webkitIsFullscreen || h.msFullscreenElement || l.fullScreen ? (Ua(ia, "id", "blog2slide-root"), ta[1].parentNode.insertBefore(xa, ta[1]), c(), h.onkeydown = d) : ma && (ca(xa), Ea(ia, "id"), Ea(ma, "id"), ma = h.onkeydown = null);
    }
    function c() {
      ma && Ea(ma, "id");
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
      a && !g ? q && q() : a ? La.appendChild(g) : ca(g);
    });
    var m = [];
    pb || (mb(function(a) {
      if (a.o && Ma) {
        a = a.m;
        var b = qa(a), e = "", v;
        if ("A" === Za(b) && 1 === zb(b).length) {
          var p = ka(b, "href"), F = p.split("?")[0].split("#")[0].split(".");
          F = (F[F.length - 1] || "").toLowerCase();
          if ((v = 0 < p.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + F + ".")) {
            O(b, "keydown", w), O(a, "click", w), O(b, "click", z), 9 > B || (e = a.offsetWidth - 4 + "px", Ga(a, "width", e)), Fa(b, "jsPica"), m.push({j:b, J:a.src, K:e, A:p, l:a, G:v});
          }
        }
      }
    }), Ha(function(a, b) {
      for (a = -1; b = m[++a];) {
        X(b.j, "keydown", w), X(b.l, "click", w), X(b.j, "click", z);
      }
    }));
    var n = ["jsSidebarFixer1", "jsSidebarFixer2"], x = 10 <= t || Va || Kb || Ba, K = P || db || Va, r = !(5 > H(16) || 5 > H(17) || 2.2 > H(21) || 6 > H(12) || aa(30) && 534 > Ba || aa(32) || 7 > t || 9 > B), L, C, wa, T, Y = tb, sa = 0, ha = 0, Ia, Z, ya = P && 0 <= G.conpare(Ka, "0.9.7");
    Ib || pb || 8 > B || (Cb(function(a) {
      if (a) {
        if (!Ma) {
          return !0;
        }
        a = -1;
        var b;
        L = "CSS1Compat" !== h.compatMode ? fa : Aa || fa;
        C = Ca("jsSide");
        wa = Ma;
        if (!C) {
          return !0;
        }
        ab(M);
        lb(M);
        T = ib(hb(C), "div", {id:"jsSidebarFixer"});
        for (t || oa ? O(T, "focusin", y) : K ? O(h, "focus", y, {capture:!0, passive:!1}) : O(T, "DOMFocusIn", y, !1); 1 < Da(C).length;) {
          T.appendChild(Da(C)[1]);
        }
        for (; b = n[++a];) {
          b = Ca(b), b.onwheel !== N ? O(b, "wheel", S, {passive:!1}) : cb ? O(b, "MozMousePixelScroll", S, !1) : ya || (b.onmousewheel !== N || B) && O(b, "mousewheel", S, !1);
        }
        ya && O(h, "DOMMouseScroll", Q, !1);
        Ia = !t && !Va && (va.perspective !== N || va["-moz-perspective"] !== N || va["-webkit-perspective"] !== N);
        M();
        return !0;
      }
    }), Ha(function() {
      for (var a = -1, b; b = n[++a];) {
        b = Ca(b), b.onwheel !== N ? X(b, "wheel", S, {passive:!1}) : cb ? X(b, "MozMousePixelScroll", S, !1) : ya || (b.onmousewheel !== N || B) && X(b, "mousewheel", S, !1);
      }
      ya && X(h, "DOMMouseScroll", Q, !1);
      t || oa ? X(T, "focusin", S, !1) : K ? X(h, "focus", y, {capture:!0, passive:!1}) : X(T, "DOMFocusIn", y, !1);
    }));
    la(function() {
      function a(za, D, E, V) {
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
        E = V ? ib(hb(e), ea, {className:E}) : ra(e, ea, {className:E});
        ra(E, "a", 0 === D.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", F:!0, href:D, I:B ? "0" : N} : {F:!0, href:D, I:B ? "0" : N}, za);
      }
      if (Ma) {
        for (var b = gb(Ma, "blockquote"), e, v = -1, p, F; e = b[++v];) {
          p = ka(e, "title"), F = ka(e, "cite"), p && F ? (Ea(e, "title"), a(p, F, "js-bqLink", !0)) : F && (Ea(e, "cite"), a(l.decodeURI ? decodeURI(F) : F, F, "js-bqCite"));
        }
      }
    });
    var Oa, ia, xa, ma, ta, f, k;
    la(function() {
      var a = Ca("blog2slide-start");
      if (a) {
        var b = h.onfullscreenchange !== N ? "f" : h.onmozfullscreenchange !== N ? "mozF" : h.onwebkitfullscreenchange !== N ? "webkitF" : 0;
        Oa = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== b || Oa ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', O(a.firstChild, "click", ba), a = qa(a), ia = qa(a), ta = gb(a, "section"), xa = h.createElement("h1"), xa.innerHTML = Sa("h1")[0].innerHTML, k = ta.length, ta.splice(0, 0, xa), 0 !== b ? O(h, b + "ullscreenchange", W) : t ? O(h, "MSFullscreenChange", W, !1) : lb(W)) : ca(a);
      }
    });
    mb(function(a) {
      var b = a.m;
      a = a.o;
      var e = qa(b);
      kb(e, "aBodyRoot") ? a || ka(b, "alt") || Ga(b, "display", "none") : Fa(e, a ? "img-loaded" : "img-disabled");
    });
  })();
  (function() {
    8 <= B && la(function() {
      for (var q = Sa("a"), w = q.length, z = 0, u; z < w; ++z) {
        u = q[z], "-1" === ka(u, "tabindex") ? Ea(u, "tabindex") : ka(u, "href") && Ua(u, "tabindex", "0");
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
  Ha(wb);
  6.1 > ja && ab(xb);
  Ha(yb);
  10 > t && (11 !== Ja || 5 !== t) || (9 > B || 1 > P || !oa && !l.addEventListener ? h.write('<link href="' + na + "css/" + Wa + eb + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : (9.5 > B || 1.5 > P || 532 >= Ba || 2 > bb) && la(function() {
    ra(La, "link", {href:na + "css/" + Wa + eb, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

