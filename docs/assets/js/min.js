Array.prototype.pop || (Array.prototype.pop = function() {
  var J = this[this.length - 1];
  --this.length;
  return J;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var J = arguments, l = 0, R = J.length, f = this.length; l < R; ++l) {
    this[f + l] = J[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var J = this[0], l = 1, R = this.length; l < R; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return J;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var J = arguments, l = J.length, R = this.length += l - 1, f = R; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = J[f];
  }
  return R;
});
Array.prototype.splice || (Array.prototype.splice = function(J, l) {
  var R = arguments, f = R.length - 2 - l, Va = this.slice(J, J + l), ma;
  if (0 < f) {
    var P = this.length - 1;
    for (ma = J + l; P >= ma; --P) {
      this[P + f] = this[P];
    }
  } else {
    if (0 > f) {
      P = J + l;
      for (ma = this.length; P < ma; ++P) {
        this[P + f] = this[P];
      }
      this.length += f;
    }
  }
  P = 2;
  for (ma = R.length; P < ma; ++P) {
    this[P - 2 + J] = R[P];
  }
  return Va;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(J, l) {
  var R = this.length >>> 0;
  if (0 === R) {
    return -1;
  }
  if (l) {
    var f = l || 0;
    f = -Infinity === f ? 0 : (0 > f ? -f : f) | 0;
    if (R <= f) {
      return -1;
    }
  }
  for (f = 0 <= f ? f : 0 < R + f ? R + f : 0; f < R; ++f) {
    if (this[f] === J) {
      return f;
    }
  }
  return -1;
});
(function(J, l, R, f, Va, ma, P, vb, q) {
  function K(r) {
    if (J[0] === r) {
      return La === La + "" ? P(La) : La;
    }
  }
  function ha(r) {
    var D = J[3];
    if (J[2] === r) {
      return D === D + "" ? P(D) : D;
    }
  }
  var ca = f.body, Fa = ca.style, Ma, Wa, Na, La = J[1], t = K(2) || K(3), wa = K(7), wb = K(5) || K(6), A = K(8) || K(9), M = K(11) || K(12), eb = M && 0 <= J.conpare(La, "1.9.1"), xb = K(13), Xa = K(15);
  ma = K(16) || K(17);
  var Kb = K(10) || K(25), Oa = K(20) || K(22);
  Oa || K(23) || K(21) || K(24);
  var Lb = Oa && P(Va.userAgent.split("Edg/")[1]);
  Va = P(Va.appVersion.split("Trident/")[1]) + 4;
  var yb = ha(35) || ha(36) || ha(37), Mb = !t && !wa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), zb = (wa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : M && !eb ? 1.3 <= M ? "gck190" : 1 <= M ? "gck121" : "gck097" : "modern") + ".css", kb = "", ac = ha(1) || ha(2) || ha(3) || 
  ha(4) || ha(8) || ha(9) || ha(10), Nb, Ob = Fa.transform !== q ? "transform" : Fa["-o-transform"] !== q ? "-o-transform" : Fa["-ms-transform"] !== q ? "-ms-transform" : Fa["-moz-transform"] !== q ? "-moz-transform" : Fa["-webkit-transform"] !== q ? "-webkit-transform" : "", lb = [], Pb, na, mb, nb, Qb, Rb, Sb, Tb;
  (function() {
    function r() {
      for (var b, h = 0, m = new Date - 0; h < F.length;) {
        m < F[0].t ? ++h : (b = F.splice(h, 1)[0], b.f(b.p));
      }
      a = F.length ? setTimeout(r, da) : 0;
    }
    function D() {
      for (var b, h = 0; h < S.length; ++h) {
        b = S[h], b.f();
      }
    }
    function y() {
      T && (T = clearInterval(T));
    }
    function w() {
      a && (a = clearTimeout(a));
    }
    nb = function(b) {
      S.length || (T = setInterval(D, N));
      S.push({f:b, v:++ja});
      return ja;
    };
    Qb = function() {
      T && (y(), T = setInterval(D, N));
    };
    Rb = y;
    var S = [], N = 500, ja = 0, T;
    if (5 > t || wa) {
      l._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    na = function(b, h, m) {
      F.length || (a = setTimeout(r, da));
      F.push({f:b, p:h, v:++oa, t:new Date - 0 + (da < m ? m : da)});
      return oa;
    };
    mb = function(b) {
      for (var h = F.length, m; m = F[--h];) {
        if (m.v === b) {
          F.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Sb = function() {
      a && (w(), a = setTimeout(r, da));
    };
    Tb = w;
    var F = [], da = 16, oa = 0, a;
    if (5 > t || wa) {
      l._wdb_ontimer = r, r = "_wdb_ontimer()";
    }
  })();
  var Pa, fb, Ab, xa, Qa, Ub, Bb, ya, Cb, Vb, Ga, gb, ob, pa, Ya, Ha, Db, Wb, pb, Eb, Ra, Sa, Za;
  (function() {
    function r(a, b, h) {
      var m = ["<", a], x = 1, u, Q;
      if (b) {
        for (u in b) {
          var G = b[u];
          if (null != G && "" !== G) {
            if ("style" === u) {
              m[++x] = ' style="';
              for (Q in G) {
                for (var ka = ++x, B, H = [], X = Q.split(""), aa = X.length; aa;) {
                  B = X[--aa], "A" <= B && "Z" >= B && (B = "-" + B.toLowerCase()), H[aa] = B;
                }
                m[ka] = H.join("") + ":" + G[Q] + ";";
              }
              m[++x] = '"';
            } else {
              "className" === u && (u = "class"), m[++x] = " " + u + '="' + G + '"';
            }
          }
        }
      }
      m[++x] = ">";
      null != h && (F && "font" !== a ? m[++x] = "<FONT>" + h + "</FONT>" : m[++x] = h);
      m[++x] = "</" + a + ">";
      return m.join("");
    }
    function D(a) {
      return y(f, a);
    }
    function y(a, b) {
      var h = "*" === b && 6 > t ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], x = 0, u;
      for (u = h.length; x < u; ++x) {
        m[x] = h[x];
      }
      return m;
    }
    function w(a) {
      return F ? a.parentElement : a.parentNode;
    }
    function S(a, b, h, m, x, u) {
      if (F) {
        var Q = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", G = Qa(2 > a ? xa(b) : b);
        G = 2 > a ? G.indexOf(b) + a : G.length;
        b.insertAdjacentHTML(Q, r(h, m, x));
        return Qa(b)[G];
      }
      b = da ? f.createElement(r(h, m)) : u ? f.createElementNS("http://www.w3.org/2000/svg", h) : f.createElement(h);
      if (m && !da) {
        for (Q in m) {
          if ((h = m[Q]) || 0 === h) {
            switch(Q) {
              case "class":
              case "className":
                pb(b, h);
                break;
              case "style":
                a = b.style;
                for (G in h) {
                  a[G] = h[G];
                }
                break;
              default:
                Ya(b, Q, h);
            }
          }
        }
      }
      oa || null != x && N(b, x);
      return b;
    }
    function N(a, b) {
      if (F) {
        return S(2, a, "font", q, b);
      }
      var h = f.createTextNode("" + b);
      a.appendChild(h);
      return h;
    }
    function ja(a, b) {
      9 > t ? a.className = b : a.setAttribute("class", b);
    }
    function T(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var F = 5 > t;
    Ma = D("html")[0];
    Wa = D("head")[0];
    Pa = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    fb = D;
    Ab = y;
    xa = w;
    Qa = function(a) {
      a = F ? a.children : a.childNodes;
      for (var b = [], h = a.length; h;) {
        b[--h] = a[h];
      }
      return b;
    };
    Ub = function(a) {
      var b = !(7.03 < A && 7.2 > A) && a.children;
      a = b ? b : a.childNodes;
      for (var h = [], m = a.length, x = -1, u; m;) {
        if (u = a[--m], b || 1 === u.nodeType) {
          F && "FONT" === u.tagName || (h[++x] = u);
        }
      }
      return h;
    };
    Bb = function(a) {
      return F ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ya = function(a, b, h, m, x) {
      b = S(2, a, b, h, m, x);
      F || (a.appendChild(b), oa && null != m && N(b, m));
      return b;
    };
    Cb = function(a, b, h, m, x) {
      b = S(0, a, b, h, m, x);
      F || (w(a).insertBefore(b, a), oa && null != m && N(b, m));
      return b;
    };
    Vb = N;
    Ga = function(a) {
      F ? a.outerHTML = "" : xa(a).removeChild(a);
    };
    gb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== Ma;) {
        if (b = xa(b), a === b) {
          return !0;
        }
      }
    };
    var da = 9 > t, oa = 9 > t;
    ob = function(a) {
      return a.tagName.toUpperCase();
    };
    pa = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Ya = function(a, b, h) {
      a.setAttribute(b, h);
    };
    Ha = function(a, b) {
      a.removeAttribute(b);
    };
    Db = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Wb = function(a) {
      return a.className;
    };
    pb = ja;
    Eb = T;
    Ra = function(a, b) {
      var h;
      if (!T(a, b)) {
        if (h = a.className) {
          b = " " + b;
        }
        ja(a, h + b);
      }
    };
    Sa = function(a, b, h) {
      a.style[b] = h;
    };
    Za = function(a, b) {
      var h = -1, m, x;
      if (5.5 > t) {
        if (b) {
          for (m = b.split(";"); x = m[++h];) {
            var u = x.split(":");
            a.style[u[0]] = x.substr(u[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > A || 1 > M ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    lb.splice(0, 0, function() {
      function a(G) {
        G = Qa(G);
        for (var ka = G.length, B, H, X; ka;) {
          if (B = G[--ka], H = B.nodeType, 8 === H) {
            b && u.push(B);
          } else {
            if (1 === H) {
              switch(H = ob(B), "/" === H.charAt(0) && (H = H.substr(1), Q[H] = !0), H) {
                case "STYLE":
                  if (8 <= A && 9 > A) {
                    break;
                  }
                case "LINK":
                  F || h || gb(Wa, B) || x.push(B);
                  break;
                case "META":
                  H = pa(B, "name") || pa(B, "property");
                  for (X = m.length; X;) {
                    if (0 === H.indexOf(m[--X])) {
                      u.push(B);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Db(B, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Db(B, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  u.push(B);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || u.push(B);
                  break;
                default:
                  Q[H] ? u.push(B) : Qa(B).length && a(B);
              }
            }
          }
        }
        for (; x[0];) {
          Wa.appendChild(x.pop());
        }
        for (; u[0];) {
          Ga(u.pop());
        }
      }
      Na = Pa("jsMain");
      var b = !(8 > A || 5 > t || wa || .9 > M), h = 7 > t, m = ["og:", "twitter:", "fb:"], x = [], u = [], Q = {};
      a(Ma);
    });
  })();
  var V, ba, za, Ta, Fb, qb, hb, Gb, Xb, ib, Aa, Hb;
  (function() {
    function r() {
      return Aa = qa ? Ia ? 2 : $a ? 3 : 1 : 0;
    }
    function D(d, g) {
      hb(function(n) {
        if (n) {
          return n = b(d), g(n), n.addListener(g), !0;
        }
      });
    }
    function y(d, g) {
      for (var n = 0; n < d.length; ++n) {
        !0 === d[n](g) && (d.splice(n, 1), --n);
      }
    }
    function w(d, g) {
      x && !m.length && na(S);
      m.push(d, g);
    }
    function S() {
      var d = m, g;
      for (m = []; g = d.shift();) {
        y(g, d.shift());
      }
    }
    function N(d) {
      var g = d || event;
      d = u[g.type];
      var n = -1, v, E;
      for (t ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : G && (g.u = g.stopPropagation, g.stopPropagation = function() {
        E = !0;
      }); v = d[++n];) {
        v.i === this ? (this.g = v.h, this.g(g), this.g = R, this.g = q) : 7.2 > A && this === f && v.i === l && (l.g = v.h, l.g(g), delete l.g);
      }
      if (t) {
        return g.preventDefault = g.stopPropagation = q, g.returnValue;
      }
      G && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (B = !0), E && !B && g.u(), g.u = g.stopPropagation = q);
    }
    function ja() {
      if (H) {
        var d = f.readyState;
        "loaded" === d || "complete" === d ? H() : na(ja);
      }
    }
    function T(d) {
      y(X, d);
    }
    function F() {
      var d = 9 === h.offsetWidth;
      ib !== d && w(aa, ib = d);
    }
    function da() {
      !H && ra && (mb(ra), ra = na(oa));
    }
    function oa() {
      ra = 0;
      y(sa);
    }
    function a(d) {
      H || y(jb, d);
    }
    var b = l.matchMedia, h, m = [], x;
    lb.push(function() {
      D = q;
      h = ya(ca, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        x = !0;
        m.length && na(S);
      });
    });
    V = function(d, g, n, v) {
      if (ka) {
        d.addEventListener(g, n, v ? Mb ? v : v.capture : !1);
      } else {
        var E = {i:d, h:n};
        v = u[g];
        var Y = "on" + g, ea, Ua;
        if (v) {
          for (ea = v.length; Ua = v[--ea];) {
            if (Ua.i === d && Ua.h === n) {
              return;
            }
          }
          u[g].push(E);
        } else {
          u[g] = v = [E], Q || (g = d[Y], "function" === typeof g && g !== N && v.unshift({i:d, h:g}));
        }
        Q ? d.attachEvent(Y, N) : d[Y] = N;
      }
    };
    ba = function(d, g, n, v) {
      if (ka) {
        d.removeEventListener(g, n, v ? Mb ? v : v.capture : !1);
      } else {
        v = u[g];
        g = "on" + g;
        var E, Y, ea;
        if (v) {
          for (E = v.length; Y = v[--E];) {
            Y.i === d && (Y.h === n ? v.splice(E, 1) : ea = !0);
          }
          ea || (Q ? d.detachEvent(g, N) : (d[g] = R, d[g] = null));
        }
      }
    };
    var u = {}, Q = !1, G = 525.13 > Xa, ka = !G && !wa && l.addEventListener, B;
    G && Ma.addEventListener("click", function(d) {
      if (B) {
        return B = !1, d.preventDefault(), !1;
      }
    });
    za = function(d) {
      lb.push(d);
    };
    Ta = function(d) {
      X.push(d);
    };
    var H = function(d) {
      ba(l, "load", H);
      H = q;
      y(lb, d);
    }, X = [];
    419.3 >= Xa ? na(ja) : V(l, "load", H);
    (t || 1.8 > M) && V(l, "unload", T);
    hb = function(d) {
      aa.push(d);
    };
    var aa = [];
    za(function() {
      F();
      nb(F);
    });
    Xb = function(d) {
      ia && ia.push(d);
    };
    var ia = [], fa = 60 > M || xb, qa, $a, Ia;
    if (89 <= M || 89 <= Oa || yb && 79 <= Lb || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Hb = !0, D("(forced-colors:active)", function(d) {
        qa = d.matches;
        w(ia, r());
      });
    } else {
      if (10 <= t || wb || yb && Lb) {
        Hb = !0, D("(-ms-high-contrast:black-on-white)", function(d) {
          qa = $a = d.matches;
          Aa !== r() && w(ia, Aa);
        }), D("(-ms-high-contrast:white-on-black)", function(d) {
          qa = Ia = d.matches;
          Aa !== r() && w(ia, Aa);
        }), D("(-ms-high-contrast:active)", function(d) {
          qa = d.matches;
          Aa !== r() && w(ia, Aa);
        });
      } else {
        if (10 > t || yb && (44 <= M || xb)) {
          var Ja = function() {
            function d(v) {
              return "#ffffff" === v || "rgb(255,255,255)" === v;
            }
            var g = f.defaultView, n = g ? g.getComputedStyle(h, null) : h.currentStyle;
            g = (n && n.color || "").split(" ").join("");
            n = (n && n.backgroundColor || "").split(" ").join("");
            g && (qa = "#123456" !== g && "rgb(18,52,86)" !== g, $a = ("#000000" === g || "rgb(0,0,0)" === g) && d(n), Ia = d(g) && ("#000000" === n || "rgb(0,0,0)" === n), Aa !== r() && w(ia, Aa));
          };
          hb(function(d) {
            if (d) {
              return Sa(h, "color", "#123456"), Sa(h, "backgroundColor", "#123456"), fa ? (Ja(), ia = q) : Ja() && nb(Ja), Ja = q, !0;
            }
          });
        } else {
          ia = r = q;
        }
      }
    }
    Gb = function(d) {
      Ba.push(d);
    };
    var Ba = [], Ca = 7.5 <= A && 8 > A;
    Ca && function() {
      for (var d = f.images, g = d.length, n; g;) {
        n = d[--g], n.s = n.src, Ha(n, "src");
      }
    }();
    za(function() {
      function d() {
        v && (E = n[--v], Ca && Ya(E, "src", E.s), Pb(g, Ca ? E.s : E.src));
      }
      function g(Y) {
        y(Ba, {m:E, o:Y});
        d();
      }
      var n = f.images || fb("img"), v = n.length;
      if (12 > A || 532 > Xa) {
        d();
      } else {
        for (; v;) {
          var E = n[--v];
          w(Ba, {m:E, o:9 > t ? E.complete : 0 <= E.naturalWidth ? E.naturalWidth : E.width});
        }
      }
    });
    Fb = function(d) {
      sa.push(d);
    };
    var sa = [], ra;
    V(l, "resize", da);
    Ta(function() {
      ra && clearTimeout(ra);
      ba(l, "resize", da);
    });
    qb = function(d) {
      jb.push(d);
    };
    var jb = [], Da = 0, ab = 1 > M || 1.2 <= M && 1.8 > M || 7.2 >= A;
    ab ? nb(function() {
      var d = l.scrollY || ca.scrollTop;
      Da !== d && (Da = d, a());
    }) : V(l, "scroll", a);
    Ta(function() {
      ab || ba(l, "scroll", a);
    });
  })();
  (function() {
    var r = 1 > M || 8 <= A && 9 > A, D = 7.2 <= A && 8 > A;
    t || !r && !D && function() {
      var y = ya(Ma, "style"), w = !(!y.styleSheet && !y.sheet);
      Ga(y);
      return w;
    }() || !Xa || r || D || function() {
      var y = ya(Ma, "style");
      Vb(y, "");
      var w = !(!y.styleSheet && !y.sheet);
      Ga(y);
      return w;
    }();
  })();
  (function() {
    9 > t && za(function() {
      var r = ya(ca, "div");
      Za(r, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Nb = 1 < r.offsetHeight;
      Za(r, "");
      Ga(r);
    });
    Pb = function(r, D) {
      function y() {
        S || !N || w.complete ? (na(r, !!w.width), w.onerror = w.onload = R, w = r = q) : (--N, na(y));
      }
      var w = new Image, S, N = 99;
      w.onerror = function() {
        S = !0;
      };
      w.onload = function() {
        S = !0;
      };
      w.src = D;
      na(y);
    };
  })();
  (function() {
    function r(c) {
      var e = c.keyCode || c.M, k = u.length, p, C, z, Ea;
      if ("keydown" !== c.type || 13 === e) {
        for (; k;) {
          if (e = u[--k], e.l === this || e.j === this) {
            k = e.l;
            var I = p = e.j;
            if (e.C) {
              if (Sa(k, "width", e.L), k.src = e.K, pb(I, e.F), k = e.A) {
                Za(k, e.D), pb(k, "caption jsCap");
              }
            } else {
              if (C = e.B) {
                for (delete e.B; p = xa(p);) {
                  if (Eb(p, "caption")) {
                    e.A = p, e.D = p.style.cssText, Ra(p, "jsCap");
                  } else {
                    var L = ob(p);
                    if ("DIV" === L || "P" === L || "BLOCKQUOT" === L) {
                      break;
                    }
                  }
                }
                p = p.offsetWidth - 4 - 1;
                1600 < p && (p = 1600);
                if (e.H) {
                  C = C.split("=");
                  L = C.length;
                  if (z = C[L - 1]) {
                    (Ea = P(z.substr(1))) && z === "s" + Ea ? C[L - 1] = "w" + p : C[L] = "w" + p;
                  }
                  C = C.join("=");
                } else {
                  if (0 < C.indexOf(".bp.blogspot.com/")) {
                    C = C.split("/");
                    L = C.length;
                    if (z = C[L - 2]) {
                      (Ea = P(z.substr(1))) && z === "s" + Ea ? C[L - 2] = "w" + p : C.splice(L - 1, 0, "w" + p);
                    }
                    C = C.join("/");
                  }
                }
                e.I = C;
              }
              e.F = Wb(I);
              Ra(I, "jsPicaLarge");
              Sa(k, "width", "");
              k.src = e.I;
              if (k = e.A) {
                Za(k, ""), Ra(k, "jsCapLarge");
              }
            }
            e.C = !e.C;
            break;
          }
        }
        D(c);
      }
    }
    function D(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function y(c) {
      for (var e = arguments, k = 0, p = e.length; k < p; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function w(c) {
      var e = Ba;
      if (ib) {
        if (Ca && !e) {
          if (new Date - 0 < Ca) {
            return;
          }
          Ca = q;
        }
        7 === c ? sa = 0 : (sa && (sa = mb(sa)), Ia = y(l.pageYOffset, l.scrollY, X.scrollTop, ca.scrollTop));
        e ? (Ba = S(q, e[0], e[1])) || (Ca = new Date - 0 + 99) : S();
      } else {
        Ba = q;
      }
    }
    function S(c, e, k) {
      function p(ta) {
        I = ta;
        if (qa) {
          L = qa + ":translate" + (Ja ? "3D(0," : "(0,") + ta + (Ja ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch;";
        } else {
          if (0 !== ta) {
            if (!H && (B || ka)) {
              var rb = aa.offsetWidth;
            }
            L = ka ? "position:fixed;width:" + rb + "px;top:" + (ta - C + O) + "px" : H ? "top:" + ta + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ta + "px";
            B && L && (L += ";" + (0 > ta ? "clip:rect(" + -ta + "px " + rb + "px " + Z + "px 0)" : ta + Z < sb ? "clip:rect(0 " + rb + "px " + Z + "px 0)" : "clip:rect(0 " + rb + "px " + (sb - ta) + "px 0)"), 8 > t || (L = L.split(" ").join(",")));
          }
        }
      }
      var C = Ia, z = ia, Ea = aa.offsetTop === z.offsetTop, I = 0, L = "", la = !0;
      if (Ea) {
        for (var W = 0, O = 0, U = z; U && U !== ca;) {
          O += U.offsetTop, U = U.offsetParent;
        }
        var Ib = y(l.innerHeight, X.offsetHeight), Jb = z.offsetHeight, Z = fa.offsetHeight, sb = Z < Jb ? Jb : Z, Ka = C, bb = Ka + Ib, tb = O, ub = tb + sb, Yb = $a, Zb = O + Yb, bc = Zb + Z;
        z = Ka < tb ? tb : Ka;
        U = ub < bb ? ub : bb;
        var cb = U - z;
        Ka = ub <= Ka;
        bb = bb <= tb;
        if (e !== q) {
          la = O + e;
          c = la + k;
          var db;
          if (Ka || bb) {
            return Ib <= k ? db = O : db = Ka ? ub - k : O + k - Ib, Ca = q, l.scroll(y(l.pageXOffset, l.scrollX, X.scrollLeft, ca.scrollLeft), db), Ba;
          }
          Z <= cb ? W = 4 : k <= cb ? Z - e <= cb ? W = 2 : z <= la && c <= U ? z < O + I && (W = 4) : W = z <= la && la <= U ? 5 : z <= c && c <= U ? 4 : c < z ? 4 : 5 : W = 4;
          la = q;
        } else {
          c !== q ? Z <= cb ? la = !1 : (I = Yb - 60 * c, W = U - O - Z, db = z - O, I < W ? p(W) : db < I ? p(db) : p(I), W = 6) : Jb <= Z || (Ka ? W = 1 : bb || (Z <= cb ? W = 3 : z < Zb ? W = 3 : bc < U ? W = 2 : C < O + Z - cb || (W = 2)));
        }
        switch(W) {
          case 0:
            p(0);
            break;
          case 1:
            p(sb - Z);
            break;
          case 2:
            p(U - O - Z);
            break;
          case 3:
            p(z - O);
            break;
          case 4:
            p(z - O - e);
            break;
          case 5:
            p(U - O - (e + k));
        }
      }
      Za(fa, L);
      $a = I;
      return Ea && la;
    }
    function N(c) {
      if (ib) {
        M && (Ia = y(l.pageYOffset, X.scrollTop, ca.scrollTop));
        var e = this !== c.target, k = e && y(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        e && k && S(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ja(c) {
      for (var e = c.target, k = -1, p; p = Q[++k];) {
        gb(p, e) && N(c);
      }
    }
    function T(c) {
      if (ib) {
        var e = !!qa, k = c.target || c.srcElement;
        c = 0;
        var p;
        if (gb(fa, k)) {
          for (p = k.offsetHeight; k && (e ? gb(fa, k) : fa !== k);) {
            c += k.offsetTop, k = k.offsetParent;
          }
          9 > t || A || 1.3 > M ? (Ia = y(l.pageYOffset, l.scrollY, X.scrollTop, ca.scrollTop), S(q, c, p)) : (Ba = [c, p], sa && mb(sa), sa = na(w, 7));
        }
      }
    }
    function F() {
      d = l.onerror;
      l.onerror = da;
      var c = f.activeElement;
      ab !== c && (ab = c, T({target:c}));
      l.onerror = d;
      d = q;
    }
    function da() {
      l.onerror = d;
      d = ab = q;
      return !0;
    }
    function oa() {
      g.call(n);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Ya(n, "id", "blog2slide-root"), Y[1].parentNode.insertBefore(v, Y[1]), b(), f.onkeydown = h) : E && (Ga(v), Ha(n, "id"), Ha(E, "id"), E = f.onkeydown = q);
    }
    function b() {
      E && Ha(E, "id");
      ea = 0 < ea ? Ua < ea ? Ua : ea : 0;
      E = Y[ea];
      Ya(E, "id", "blog2slide-current");
    }
    function h(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++ea, b();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --ea, b();
        }
      }
    }
    if (!Hb) {
      var m, x = function() {
        m = ya(Wa, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + kb + "hc/" + zb});
        (Ob || 5.5 <= t && 9 > t && Nb) && Ra(ca, "jsCanRotate");
        x = q;
      };
      Xb(function(c) {
        c && !m ? x() : m && (c ? Wa.appendChild(m) : Ga(m));
      });
    }
    var u = [];
    Kb || (Gb(function(c) {
      if (c.o && Na) {
        c = c.m;
        var e = xa(c), k = "", p;
        if ("A" === ob(e) && 1 === Ub(e).length) {
          var C = pa(e, "href"), z = C.split("?")[0].split("#")[0].split(".");
          z = (z[z.length - 1] || "").toLowerCase();
          if ((p = 0 < C.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + z + ".")) {
            V(e, "keydown", r), V(c, "click", r), V(e, "click", D), 9 > A || (k = c.offsetWidth - 4 + "px", Sa(c, "width", k)), Ra(e, "jsPica"), u.push({j:e, K:c.src, L:k, B:C, l:c, H:p});
          }
        }
      }
    }), Ta(function(c, e) {
      for (c = -1; e = u[++c];) {
        ba(e.j, "keydown", r), ba(e.l, "click", r), ba(e.j, "click", D);
      }
    }));
    var Q = ["jsSidebarFixer1", "jsSidebarFixer2"], G = M || xb || wb, ka = !(5 > K(16) || 5 > K(17) || 2.2 > K(21) || 6 > K(12) || ha(30) && 534 > Xa || ha(32) || 7 > t || 9 > A || 1 > M), B = ka || 7 > t || 1 > M, H = 7.5 > A, X, aa, ia, fa, qa = Ob, $a = 0, Ia = 0, Ja, Ba, Ca, sa, ra = M && 0 <= J.conpare(La, "0.9.7"), jb = M && 0 >= J.conpare(La, "0.9.4");
    $b || Kb || (hb(function(c) {
      if (c) {
        if (!Na) {
          return !0;
        }
        c = -1;
        var e;
        X = "CSS1Compat" !== f.compatMode ? ca : Ma || ca;
        aa = Pa("jsSide");
        ia = Na;
        if (!aa) {
          return !0;
        }
        qb(w);
        Fb(w);
        fa = Cb(Bb(aa), "div", {id:"jsSidebarFixer"});
        for (8 > A || jb || 6 > t || (t || wa ? V(fa, "focusin", T) : G ? V(f, "focus", T, {capture:!0, passive:!1}) : V(fa, "DOMFocusIn", T, !1)); 1 < Qa(aa).length;) {
          fa.appendChild(Qa(aa)[1]);
        }
        for (ra && !eb && V(f, "DOMMouseScroll", ja, !1); e = Q[++c];) {
          var k = Pa(e);
          k.onwheel !== q ? V(k, "wheel", N, {passive:!1}) : eb ? V(k, "MozMousePixelScroll", N, !1) : ra ? Q[c] = Pa(e) : (k.onmousewheel !== q || 9 <= A) && V(k, "mousewheel", N, !1);
        }
        t || wb || 2 > Oa || (Ja = Fa.perspective !== q || Fa["-moz-perspective"] !== q || Fa["-webkit-perspective"] !== q);
        w();
        return !0;
      }
    }), Ta(function() {
      var c = -1, e;
      if (ra && !eb) {
        ba(f, "DOMMouseScroll", ja, !1);
      } else {
        for (; e = Q[++c];) {
          e = Pa(e), e.onwheel !== q ? ba(e, "wheel", N, {passive:!1}) : eb ? ba(e, "MozMousePixelScroll", N, !1) : (e.onmousewheel !== q || 9 <= A) && ba(e, "mousewheel", N, !1);
        }
      }
      8 > A || jb || 6 > t || (t || wa ? ba(fa, "focusin", T, !1) : G ? ba(f, "focus", T, {capture:!0, passive:!1}) : ba(fa, "DOMFocusIn", T, !1));
      Da && clearInterval(Da);
    }));
    var Da, ab, d;
    6 > t && hb(function(c) {
      if (!Na) {
        return !0;
      }
      c ? Da = setInterval(F, 333) : Da && (clearInterval(Da), Da = 0);
    });
    za(function() {
      function c(Ea, I, L, la) {
        var W = la ? "div" : "cite";
        if (0 === I.indexOf("urn:isbn:")) {
          I = I.substr(9).toUpperCase().split("-").join("");
          if (13 === I.length) {
            I = I.toString().slice(3, -1);
            for (var O = 0, U = 0; 9 > U; U++) {
              O += (I.charAt(U) - 0) * (10 - U);
            }
            O = (11 - O % 11) % 11;
            O = 10 === O ? "X" : O.toString();
            I += O;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        L = la ? Cb(Bb(k), W, {className:L}) : ya(k, W, {className:L});
        ya(L, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:I, J:A ? "0" : q} : {G:!0, href:I, J:A ? "0" : q}, Ea);
      }
      if (Na) {
        for (var e = Ab(Na, "blockquote"), k, p = -1, C, z; k = e[++p];) {
          C = pa(k, "title"), z = pa(k, "cite"), C && z ? (Ha(k, "title"), c(C, z, "js-bqLink", !0)) : z && (Ha(k, "cite"), c(l.decodeURI ? decodeURI(z) : z, z, "js-bqCite"));
        }
      }
    });
    var g, n, v, E, Y, ea, Ua;
    za(function() {
      var c = Pa("blog2slide-start");
      if (c) {
        var e = f.onfullscreenchange !== q ? "f" : f.onmozfullscreenchange !== q ? "mozF" : f.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        g = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== e || g ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', V(c.firstChild, "click", oa), c = xa(c), n = xa(c), Y = Ab(c, "section"), v = f.createElement("h1"), v.innerHTML = fb("h1")[0].innerHTML, Ua = Y.length, Y.splice(0, 0, v), 0 !== e ? V(f, e + "ullscreenchange", a) : t ? V(f, "MSFullscreenChange", a, !1) : Fb(a)) : Ga(c);
      }
    });
    Gb(function(c) {
      var e = c.m;
      c = c.o;
      var k = xa(e);
      !Eb(k, "aBodyRoot") && c ? Ra(k, "img-loaded") : c || pa(e, "alt") || Sa(e, "display", "none");
    });
  })();
  (function() {
    8 <= A && za(function() {
      for (var r = fb("a"), D = r.length, y = 0, w; y < D; ++y) {
        w = r[y], "-1" === pa(w, "tabindex") ? Ha(w, "tabindex") : pa(w, "href") && Ya(w, "tabindex", "0");
      }
    });
  })();
  vb = f.scripts || fb("script");
  var va = vb[vb.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  var $b = ac || "1" === pa(ca, "mob");
  kb = ($b ? "mb" : "pc") + "/";
  6.1 > ma && qb(Qb);
  Ta(Rb);
  6.1 > ma && qb(Sb);
  Ta(Tb);
  10 > t && (11 !== Va || 5 !== t) || (9 > A || 1 > M || !wa && !l.addEventListener ? f.write('<link href="' + va + "css/" + kb + zb + '" rel="stylesheet"' + (8 > A ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > A || 1.5 > M || 532 >= Xa || 2 > Oa || 4 <= Oa && 8 > Oa) && za(function() {
    ya(Wa, "link", {href:va + "css/" + kb + zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

