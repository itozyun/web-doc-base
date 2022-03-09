Array.prototype.pop || (Array.prototype.pop = function() {
  var L = this[this.length - 1];
  --this.length;
  return L;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var L = arguments, l = 0, R = L.length, g = this.length; l < R; ++l) {
    this[g + l] = L[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var L = this[0], l = 1, R = this.length; l < R; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return L;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var L = arguments, l = L.length, R = this.length += l - 1, g = R; g >= l; --g) {
    this[g] = this[g - l];
  }
  for (g = 0; g < l; ++g) {
    this[g] = L[g];
  }
  return R;
});
Array.prototype.splice || (Array.prototype.splice = function(L, l) {
  var R = arguments, g = R.length - 2 - l, Sa = this.slice(L, L + l), ma;
  if (0 < g) {
    var Q = this.length - 1;
    for (ma = L + l; Q >= ma; --Q) {
      this[Q + g] = this[Q];
    }
  } else {
    if (0 > g) {
      Q = L + l;
      for (ma = this.length; Q < ma; ++Q) {
        this[Q + g] = this[Q];
      }
      this.length += g;
    }
  }
  Q = 2;
  for (ma = R.length; Q < ma; ++Q) {
    this[Q - 2 + L] = R[Q];
  }
  return Sa;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(L, l) {
  var R = this.length >>> 0;
  if (0 === R) {
    return -1;
  }
  if (l) {
    var g = l || 0;
    g = -Infinity === g ? 0 : (0 > g ? -g : g) | 0;
    if (R <= g) {
      return -1;
    }
  }
  for (g = 0 <= g ? g : 0 < R + g ? R + g : 0; g < R; ++g) {
    if (this[g] === L) {
      return g;
    }
  }
  return -1;
});
(function(L, l, R, g, Sa, ma, Q, tb, t) {
  function M(q) {
    if (L[0] === q) {
      return Ha === Ha + "" ? Q(Ha) : Ha;
    }
  }
  function fa(q) {
    var C = L[3];
    if (L[2] === q) {
      return C === C + "" ? Q(C) : C;
    }
  }
  var aa = g.body, Ca = aa.style, Ia, Ta, Ja, Ha = L[1], w = M(2) || M(3), va = M(7), ub = M(5) || M(6), B = M(8) || M(9), O = M(11) || M(12), bb = O && 0 <= L.conpare(Ha, "1.9.1"), vb = M(13), Ua = M(15);
  ma = M(16) || M(17);
  var Ib = M(10) || M(25), Ka = M(20) || M(22);
  Ka || M(23) || M(21) || M(24);
  var Jb = Ka && Q(Sa.userAgent.split("Edg/")[1]);
  Sa = Q(Sa.appVersion.split("Trident/")[1]) + 4;
  var wb = fa(35) || fa(36) || fa(37), Kb = !w && !va && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), xb = (va ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : O && !bb ? 1.3 <= O ? "gck190" : 1 <= O ? "gck121" : "gck097" : "modern") + ".css", hb = "", Zb = fa(1) || fa(2) || fa(3) || 
  fa(4) || fa(8) || fa(9) || fa(10), Lb, Mb = Ca.transform !== t ? "transform" : Ca["-o-transform"] !== t ? "-o-transform" : Ca["-ms-transform"] !== t ? "-ms-transform" : Ca["-moz-transform"] !== t ? "-moz-transform" : Ca["-webkit-transform"] !== t ? "-webkit-transform" : "", ib = [], Nb, na, jb, kb, Ob, Pb, Qb, Rb;
  (function() {
    function q() {
      for (var b, h = 0, m = new Date - 0; h < I.length;) {
        m < I[0].t ? ++h : (b = I.splice(h, 1)[0], b.f(b.p));
      }
      a = I.length ? setTimeout(q, ba) : 0;
    }
    function C() {
      for (var b, h = 0; h < H.length; ++h) {
        b = H[h], b.f();
      }
    }
    function p() {
      T && (T = clearInterval(T));
    }
    function x() {
      a && (a = clearTimeout(a));
    }
    kb = function(b) {
      H.length || (T = setInterval(C, F));
      H.push({f:b, v:++ia});
      return ia;
    };
    Ob = function() {
      T && (p(), T = setInterval(C, F));
    };
    Pb = p;
    var H = [], F = 500, ia = 0, T;
    if (5 > w || va) {
      l._wdb_onlooptimer = C, C = "_wdb_onlooptimer()";
    }
    na = function(b, h, m) {
      I.length || (a = setTimeout(q, ba));
      I.push({f:b, p:h, v:++oa, t:new Date - 0 + (ba < m ? m : ba)});
      return oa;
    };
    jb = function(b) {
      for (var h = I.length, m; m = I[--h];) {
        if (m.v === b) {
          I.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Qb = function() {
      a && (x(), a = setTimeout(q, ba));
    };
    Rb = x;
    var I = [], ba = 16, oa = 0, a;
    if (5 > w || va) {
      l._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var La, cb, yb, wa, Ma, Sb, zb, xa, Ab, Tb, Da, db, lb, pa, Va, Ea, Bb, Ub, mb, Cb, Na, Oa, Wa;
  (function() {
    function q(a, b, h) {
      var m = ["<", a], u = 1, y, S;
      if (b) {
        for (y in b) {
          var J = b[y];
          if (null != J && "" !== J) {
            if ("style" === y) {
              m[++u] = ' style="';
              for (S in J) {
                for (var qa = ++u, z, D = [], ha = S.split(""), V = ha.length; V;) {
                  z = ha[--V], "A" <= z && "Z" >= z && (z = "-" + z.toLowerCase()), D[V] = z;
                }
                m[qa] = D.join("") + ":" + J[S] + ";";
              }
              m[++u] = '"';
            } else {
              "className" === y && (y = "class"), m[++u] = " " + y + '="' + J + '"';
            }
          }
        }
      }
      m[++u] = ">";
      null != h && (I && "font" !== a ? m[++u] = "<FONT>" + h + "</FONT>" : m[++u] = h);
      m[++u] = "</" + a + ">";
      return m.join("");
    }
    function C(a) {
      return p(g, a);
    }
    function p(a, b) {
      var h = "*" === b && 6 > w ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], u = 0, y;
      for (y = h.length; u < y; ++u) {
        m[u] = h[u];
      }
      return m;
    }
    function x(a) {
      return I ? a.parentElement : a.parentNode;
    }
    function H(a, b, h, m, u, y) {
      if (I) {
        var S = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", J = Ma(2 > a ? wa(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(S, q(h, m, u));
        return Ma(b)[J];
      }
      b = ba ? g.createElement(q(h, m)) : y ? g.createElementNS("http://www.w3.org/2000/svg", h) : g.createElement(h);
      if (m && !ba) {
        for (S in m) {
          if ((h = m[S]) || 0 === h) {
            switch(S) {
              case "class":
              case "className":
                mb(b, h);
                break;
              case "style":
                a = b.style;
                for (J in h) {
                  a[J] = h[J];
                }
                break;
              default:
                Va(b, S, h);
            }
          }
        }
      }
      oa || null != u && F(b, u);
      return b;
    }
    function F(a, b) {
      if (I) {
        return H(2, a, "font", t, b);
      }
      var h = g.createTextNode("" + b);
      a.appendChild(h);
      return h;
    }
    function ia(a, b) {
      9 > w ? a.className = b : a.setAttribute("class", b);
    }
    function T(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var I = 5 > w;
    Ia = C("html")[0];
    Ta = C("head")[0];
    La = function(a) {
      return l[a] || g[a] || g.getElementById(a);
    };
    cb = C;
    yb = p;
    wa = x;
    Ma = function(a) {
      a = I ? a.children : a.childNodes;
      for (var b = [], h = a.length; h;) {
        b[--h] = a[h];
      }
      return b;
    };
    Sb = function(a) {
      var b = !(7.03 < B && 7.2 > B) && a.children;
      a = b ? b : a.childNodes;
      for (var h = [], m = a.length, u = -1, y; m;) {
        if (y = a[--m], b || 1 === y.nodeType) {
          I && "FONT" === y.tagName || (h[++u] = y);
        }
      }
      return h;
    };
    zb = function(a) {
      return I ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    xa = function(a, b, h, m, u) {
      b = H(2, a, b, h, m, u);
      I || (a.appendChild(b), oa && null != m && F(b, m));
      return b;
    };
    Ab = function(a, b, h, m, u) {
      b = H(0, a, b, h, m, u);
      I || (x(a).insertBefore(b, a), oa && null != m && F(b, m));
      return b;
    };
    Tb = F;
    Da = function(a) {
      I ? a.outerHTML = "" : wa(a).removeChild(a);
    };
    db = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== Ia;) {
        if (b = wa(b), a === b) {
          return !0;
        }
      }
    };
    var ba = 9 > w, oa = 9 > w;
    lb = function(a) {
      return a.tagName.toUpperCase();
    };
    pa = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Va = function(a, b, h) {
      a.setAttribute(b, h);
    };
    Ea = function(a, b) {
      a.removeAttribute(b);
    };
    Bb = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ub = function(a) {
      return a.className;
    };
    mb = ia;
    Cb = T;
    Na = function(a, b) {
      var h;
      if (!T(a, b)) {
        if (h = a.className) {
          b = " " + b;
        }
        ia(a, h + b);
      }
    };
    Oa = function(a, b, h) {
      a.style[b] = h;
    };
    Wa = function(a, b) {
      var h = -1, m, u;
      if (5.5 > w) {
        if (b) {
          for (m = b.split(";"); u = m[++h];) {
            var y = u.split(":");
            a.style[y[0]] = u.substr(y[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > B || 1 > O ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    ib.splice(0, 0, function() {
      function a(J) {
        J = Ma(J);
        for (var qa = J.length, z, D, ha; qa;) {
          if (z = J[--qa], D = z.nodeType, 8 === D) {
            b && y.push(z);
          } else {
            if (1 === D) {
              switch(D = lb(z), "/" === D.charAt(0) && (D = D.substr(1), S[D] = !0), D) {
                case "STYLE":
                  if (8 <= B && 9 > B) {
                    break;
                  }
                case "LINK":
                  I || h || db(Ta, z) || u.push(z);
                  break;
                case "META":
                  D = pa(z, "name") || pa(z, "property");
                  for (ha = m.length; ha;) {
                    if (0 === D.indexOf(m[--ha])) {
                      y.push(z);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Bb(z, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Bb(z, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  y.push(z);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || y.push(z);
                  break;
                default:
                  S[D] ? y.push(z) : Ma(z).length && a(z);
              }
            }
          }
        }
        for (; u[0];) {
          Ta.appendChild(u.pop());
        }
        for (; y[0];) {
          Da(y.pop());
        }
      }
      Ja = La("jsMain");
      var b = !(8 > B || 5 > w || va || .9 > O), h = 7 > w, m = ["og:", "twitter:", "fb:"], u = [], y = [], S = {};
      a(Ia);
    });
  })();
  var W, Z, ya, Pa, Db, nb, eb, Eb, Vb, fb, za, Fb;
  (function() {
    function q() {
      return za = ja ? Aa ? 2 : Qa ? 3 : 1 : 0;
    }
    function C(d, f) {
      eb(function(n) {
        if (n) {
          return n = b(d), f(n), n.addListener(f), !0;
        }
      });
    }
    function p(d, f) {
      for (var n = 0; n < d.length; ++n) {
        !0 === d[n](f) && (d.splice(n, 1), --n);
      }
    }
    function x(d, f) {
      u && !m.length && na(H);
      m.push(d, f);
    }
    function H() {
      var d = m, f;
      for (m = []; f = d.shift();) {
        p(f, d.shift());
      }
    }
    function F(d) {
      var f = d || event;
      d = y[f.type];
      var n = -1, v, G;
      for (w ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : J && (f.u = f.stopPropagation, f.stopPropagation = function() {
        G = !0;
      }); v = d[++n];) {
        v.i === this ? (this.g = v.h, this.g(f), this.g = R, this.g = t) : 7.2 > B && this === g && v.i === l && (l.g = v.h, l.g(f), delete l.g);
      }
      if (w) {
        return f.preventDefault = f.stopPropagation = t, f.returnValue;
      }
      J && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (z = !0), G && !z && f.u(), f.u = f.stopPropagation = t);
    }
    function ia() {
      if (D) {
        var d = g.readyState;
        "loaded" === d || "complete" === d ? D() : na(ia);
      }
    }
    function T(d) {
      p(ha, d);
    }
    function I() {
      var d = 9 === h.offsetWidth;
      fb !== d && x(V, fb = d);
    }
    function ba() {
      !D && ca && (jb(ca), ca = na(oa));
    }
    function oa() {
      ca = 0;
      p(gb);
    }
    function a(d) {
      D || p(Xa, d);
    }
    var b = l.matchMedia, h, m = [], u;
    ib.push(function() {
      C = t;
      h = xa(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ya(function() {
        u = !0;
        m.length && na(H);
      });
    });
    W = function(d, f, n, v) {
      if (qa) {
        d.addEventListener(f, n, v ? Kb ? v : v.capture : !1);
      } else {
        var G = {i:d, h:n};
        v = y[f];
        var da = "on" + f, c, e;
        if (v) {
          for (c = v.length; e = v[--c];) {
            if (e.i === d && e.h === n) {
              return;
            }
          }
          y[f].push(G);
        } else {
          y[f] = v = [G], S || (f = d[da], "function" === typeof f && f !== F && v.unshift({i:d, h:f}));
        }
        S ? d.attachEvent(da, F) : d[da] = F;
      }
    };
    Z = function(d, f, n, v) {
      if (qa) {
        d.removeEventListener(f, n, v ? Kb ? v : v.capture : !1);
      } else {
        v = y[f];
        f = "on" + f;
        var G, da, c;
        if (v) {
          for (G = v.length; da = v[--G];) {
            da.i === d && (da.h === n ? v.splice(G, 1) : c = !0);
          }
          c || (S ? d.detachEvent(f, F) : (d[f] = R, d[f] = null));
        }
      }
    };
    var y = {}, S = !1, J = 525.13 > Ua, qa = !J && !va && l.addEventListener, z;
    J && Ia.addEventListener("click", function(d) {
      if (z) {
        return z = !1, d.preventDefault(), !1;
      }
    });
    ya = function(d) {
      ib.push(d);
    };
    Pa = function(d) {
      ha.push(d);
    };
    var D = function(d) {
      Z(l, "load", D);
      D = t;
      p(ib, d);
    }, ha = [];
    419.3 >= Ua ? na(ia) : W(l, "load", D);
    (w || 1.8 > O) && W(l, "unload", T);
    eb = function(d) {
      V.push(d);
    };
    var V = [];
    ya(function() {
      I();
      kb(I);
    });
    Vb = function(d) {
      ea && ea.push(d);
    };
    var ea = [], ob = 60 > O || vb, ja, Qa, Aa;
    if (89 <= O || 89 <= Ka || wb && 79 <= Jb || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Fb = !0, C("(forced-colors:active)", function(d) {
        ja = d.matches;
        x(ea, q());
      });
    } else {
      if (10 <= w || ub || wb && Jb) {
        Fb = !0, C("(-ms-high-contrast:black-on-white)", function(d) {
          ja = Qa = d.matches;
          za !== q() && x(ea, za);
        }), C("(-ms-high-contrast:white-on-black)", function(d) {
          ja = Aa = d.matches;
          za !== q() && x(ea, za);
        }), C("(-ms-high-contrast:active)", function(d) {
          ja = d.matches;
          za !== q() && x(ea, za);
        });
      } else {
        if (10 > w || wb && (44 <= O || vb)) {
          var ra = function() {
            function d(v) {
              return "#ffffff" === v || "rgb(255,255,255)" === v;
            }
            var f = g.defaultView, n = f ? f.getComputedStyle(h, null) : h.currentStyle;
            f = (n && n.color || "").split(" ").join("");
            n = (n && n.backgroundColor || "").split(" ").join("");
            f && (ja = "#123456" !== f && "rgb(18,52,86)" !== f, Qa = ("#000000" === f || "rgb(0,0,0)" === f) && d(n), Aa = d(f) && ("#000000" === n || "rgb(0,0,0)" === n), za !== q() && x(ea, za));
          };
          eb(function(d) {
            if (d) {
              return Oa(h, "color", "#123456"), Oa(h, "backgroundColor", "#123456"), ob ? (ra(), ea = t) : ra() && kb(ra), ra = t, !0;
            }
          });
        } else {
          ea = q = t;
        }
      }
    }
    Eb = function(d) {
      ka.push(d);
    };
    var ka = [], Ra = 7.5 <= B && 8 > B;
    Ra && function() {
      for (var d = g.images, f = d.length, n; f;) {
        n = d[--f], n.s = n.src, Ea(n, "src");
      }
    }();
    ya(function() {
      function d() {
        v && (G = n[--v], Ra && Va(G, "src", G.s), Nb(f, Ra ? G.s : G.src));
      }
      function f(da) {
        p(ka, {m:G, o:da});
        d();
      }
      var n = g.images || cb("img"), v = n.length;
      if (12 > B || 532 > Ua) {
        d();
      } else {
        for (; v;) {
          var G = n[--v];
          x(ka, {m:G, o:9 > w ? G.complete : 0 <= G.naturalWidth ? G.naturalWidth : G.width});
        }
      }
    });
    Db = function(d) {
      gb.push(d);
    };
    var gb = [], ca;
    W(l, "resize", ba);
    Pa(function() {
      ca && clearTimeout(ca);
      Z(l, "resize", ba);
    });
    nb = function(d) {
      Xa.push(d);
    };
    var Xa = [], Fa = 0, Ya = 1 > O || 1.2 <= O && 1.8 > O || 7.2 >= B;
    Ya ? kb(function() {
      var d = l.scrollY || aa.scrollTop;
      Fa !== d && (Fa = d, a());
    }) : W(l, "scroll", a);
    Pa(function() {
      Ya || Z(l, "scroll", a);
    });
  })();
  (function() {
    var q = 1 > O || 8 <= B && 9 > B, C = 7.2 <= B && 8 > B;
    w || !q && !C && function() {
      var p = xa(Ia, "style"), x = !(!p.styleSheet && !p.sheet);
      Da(p);
      return x;
    }() || !Ua || q || C || function() {
      var p = xa(Ia, "style");
      Tb(p, "");
      var x = !(!p.styleSheet && !p.sheet);
      Da(p);
      return x;
    }();
  })();
  (function() {
    9 > w && ya(function() {
      var q = xa(aa, "div");
      Wa(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lb = 1 < q.offsetHeight;
      Wa(q, "");
      Da(q);
    });
    Nb = function(q, C) {
      function p() {
        H || !F || x.complete ? (na(q, !!x.width), x.onerror = x.onload = R, x = q = t) : (--F, na(p));
      }
      var x = new Image, H, F = 99;
      x.onerror = function() {
        H = !0;
      };
      x.onload = function() {
        H = !0;
      };
      x.src = C;
      na(p);
    };
  })();
  (function() {
    if (!Fb) {
      var q, C = function() {
        q = xa(Ta, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:sa + "css/" + hb + "hc/" + xb});
        (Mb || 5.5 <= w && 9 > w && Lb) && Na(aa, "jsCanRotate");
        C = t;
      };
      Vb(function(p) {
        p && !q ? C() : q && (p ? Ta.appendChild(q) : Da(q));
      });
    }
    Eb(function(p) {
      var x = p.m;
      p = p.o;
      var H = wa(x);
      !Cb(H, "aBodyRoot") && p ? Na(H, "img-loaded") : p || pa(x, "alt") || Oa(x, "display", "none");
    });
    8 <= B && ya(function() {
      for (var p = cb("a"), x = p.length, H = 0, F; H < x; ++H) {
        F = p[H], "-1" === pa(F, "tabindex") ? Ea(F, "tabindex") : pa(F, "href") && Va(F, "tabindex", "0");
      }
    });
  })();
  (function() {
    function q(c) {
      var e = c.keyCode || c.M, k = m.length, r, E, A, Ba;
      if ("keydown" !== c.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var K = r = e.j;
            if (e.C) {
              if (Oa(k, "width", e.L), k.src = e.K, mb(K, e.F), k = e.A) {
                Wa(k, e.D), mb(k, "caption jsCap");
              }
            } else {
              if (E = e.B) {
                for (delete e.B; r = wa(r);) {
                  if (Cb(r, "caption")) {
                    e.A = r, e.D = r.style.cssText, Na(r, "jsCap");
                  } else {
                    var N = lb(r);
                    if ("DIV" === N || "P" === N || "BLOCKQUOT" === N) {
                      break;
                    }
                  }
                }
                r = r.offsetWidth - 4 - 1;
                1600 < r && (r = 1600);
                if (e.H) {
                  E = E.split("=");
                  N = E.length;
                  if (A = E[N - 1]) {
                    (Ba = Q(A.substr(1))) && A === "s" + Ba ? E[N - 1] = "w" + r : E[N] = "w" + r;
                  }
                  E = E.join("=");
                } else {
                  if (0 < E.indexOf(".bp.blogspot.com/")) {
                    E = E.split("/");
                    N = E.length;
                    if (A = E[N - 2]) {
                      (Ba = Q(A.substr(1))) && A === "s" + Ba ? E[N - 2] = "w" + r : E.splice(N - 1, 0, "w" + r);
                    }
                    E = E.join("/");
                  }
                }
                e.I = E;
              }
              e.F = Ub(K);
              Na(K, "jsPicaLarge");
              Oa(k, "width", "");
              k.src = e.I;
              if (k = e.A) {
                Wa(k, ""), Na(k, "jsCapLarge");
              }
            }
            e.C = !e.C;
            break;
          }
        }
        C(c);
      }
    }
    function C(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function p(c) {
      for (var e = arguments, k = 0, r = e.length; k < r; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function x(c) {
      var e = Aa;
      if (fb) {
        if (ra && !e) {
          if (new Date - 0 < ra) {
            return;
          }
          ra = t;
        }
        7 === c ? ka = 0 : (ka && (ka = jb(ka)), ja = p(l.pageYOffset, l.scrollY, z.scrollTop, aa.scrollTop));
        e ? (Aa = H(t, e[0], e[1])) || (ra = new Date - 0 + 99) : H();
      } else {
        Aa = t;
      }
    }
    function H(c, e, k) {
      function r(ta) {
        K = ta;
        if (ea) {
          N = ea + ":translate" + (Qa ? "3D(0," : "(0,") + ta + (Qa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch;";
        } else {
          if (0 !== ta) {
            if (!qa && (J || S)) {
              var pb = D.offsetWidth;
            }
            N = S ? "position:fixed;width:" + pb + "px;top:" + (ta - E + P) + "px" : qa ? "top:" + ta + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ta + "px";
            J && N && (N += ";" + (0 > ta ? "clip:rect(" + -ta + "px " + pb + "px " + Y + "px 0)" : ta + Y < qb ? "clip:rect(0 " + pb + "px " + Y + "px 0)" : "clip:rect(0 " + pb + "px " + (qb - ta) + "px 0)"), 8 > w || (N = N.split(" ").join(",")));
          }
        }
      }
      var E = ja, A = ha, Ba = D.offsetTop === A.offsetTop, K = 0, N = "", la = !0;
      if (Ba) {
        for (var X = 0, P = 0, U = A; U && U !== aa;) {
          P += U.offsetTop, U = U.offsetParent;
        }
        var Gb = p(l.innerHeight, z.offsetHeight), Hb = A.offsetHeight, Y = V.offsetHeight, qb = Y < Hb ? Hb : Y, Ga = E, Za = Ga + Gb, rb = P, sb = rb + qb, Wb = ob, Xb = P + Wb, $b = Xb + Y;
        A = Ga < rb ? rb : Ga;
        U = sb < Za ? sb : Za;
        var $a = U - A;
        Ga = sb <= Ga;
        Za = Za <= rb;
        if (e !== t) {
          la = P + e;
          c = la + k;
          var ab;
          if (Ga || Za) {
            return Gb <= k ? ab = P : ab = Ga ? sb - k : P + k - Gb, ra = t, l.scroll(p(l.pageXOffset, l.scrollX, z.scrollLeft, aa.scrollLeft), ab), Aa;
          }
          Y <= $a ? X = 4 : k <= $a ? Y - e <= $a ? X = 2 : A <= la && c <= U ? A < P + K && (X = 4) : X = A <= la && la <= U ? 5 : A <= c && c <= U ? 4 : c < A ? 4 : 5 : X = 4;
          la = t;
        } else {
          c !== t ? Y <= $a ? la = !1 : (K = Wb - 60 * c, X = U - P - Y, ab = A - P, K < X ? r(X) : ab < K ? r(ab) : r(K), X = 6) : Hb <= Y || (Ga ? X = 1 : Za || (Y <= $a ? X = 3 : A < Xb ? X = 3 : $b < U ? X = 2 : E < P + Y - $a || (X = 2)));
        }
        switch(X) {
          case 0:
            r(0);
            break;
          case 1:
            r(qb - Y);
            break;
          case 2:
            r(U - P - Y);
            break;
          case 3:
            r(A - P);
            break;
          case 4:
            r(A - P - e);
            break;
          case 5:
            r(U - P - (e + k));
        }
      }
      Wa(V, N);
      ob = K;
      return Ba && la;
    }
    function F(c) {
      if (fb) {
        O && (ja = p(l.pageYOffset, z.scrollTop, aa.scrollTop));
        var e = this !== c.target, k = e && p(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        e && k && H(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ia(c) {
      for (var e = c.target, k = -1, r; r = u[++k];) {
        db(r, e) && F(c);
      }
    }
    function T(c) {
      if (fb) {
        var e = !!ea, k = c.target || c.srcElement;
        c = 0;
        var r;
        if (db(V, k)) {
          for (r = k.offsetHeight; k && (e ? db(V, k) : V !== k);) {
            c += k.offsetTop, k = k.offsetParent;
          }
          9 > w || B || 1.3 > O ? (ja = p(l.pageYOffset, l.scrollY, z.scrollTop, aa.scrollTop), H(t, c, r)) : (Aa = [c, r], ka && jb(ka), ka = na(x, 7));
        }
      }
    }
    function I() {
      Fa = l.onerror;
      l.onerror = ba;
      var c = g.activeElement;
      Xa !== c && (Xa = c, T({target:c}));
      l.onerror = Fa;
      Fa = t;
    }
    function ba() {
      l.onerror = Fa;
      Fa = Xa = t;
      return !0;
    }
    function oa() {
      Ya.call(d);
    }
    function a() {
      g.fullscreenElement || g.fullscreen || g.webkitIsFullscreen || g.msFullscreenElement || l.fullScreen ? (Va(d, "id", "blog2slide-root"), v[1].parentNode.insertBefore(f, v[1]), b(), g.onkeydown = h) : n && (Da(f), Ea(d, "id"), Ea(n, "id"), n = g.onkeydown = t);
    }
    function b() {
      n && Ea(n, "id");
      G = 0 < G ? da < G ? da : G : 0;
      n = v[G];
      Va(n, "id", "blog2slide-current");
    }
    function h(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++G, b();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --G, b();
        }
      }
    }
    var m = [];
    Ib || (Eb(function(c) {
      if (c.o && Ja) {
        c = c.m;
        var e = wa(c), k = "", r;
        if ("A" === lb(e) && 1 === Sb(e).length) {
          var E = pa(e, "href"), A = E.split("?")[0].split("#")[0].split(".");
          A = (A[A.length - 1] || "").toLowerCase();
          if ((r = 0 < E.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + A + ".")) {
            W(e, "keydown", q), W(c, "click", q), W(e, "click", C), 9 > B || (k = c.offsetWidth - 4 + "px", Oa(c, "width", k)), Na(e, "jsPica"), m.push({j:e, K:c.src, L:k, B:E, l:c, H:r});
          }
        }
      }
    }), Pa(function(c, e) {
      for (c = -1; e = m[++c];) {
        Z(e.j, "keydown", q), Z(e.l, "click", q), Z(e.j, "click", C);
      }
    }));
    var u = ["jsSidebarFixer1", "jsSidebarFixer2"], y = O || vb || ub, S = !(5 > M(16) || 5 > M(17) || 2.2 > M(21) || 6 > M(12) || fa(30) && 534 > Ua || fa(32) || 7 > w || 9 > B || 1 > O), J = S || 7 > w || 1 > O, qa = 7.5 > B, z, D, ha, V, ea = Mb, ob = 0, ja = 0, Qa, Aa, ra, ka, Ra = O && 0 <= L.conpare(Ha, "0.9.7"), gb = O && 0 >= L.conpare(Ha, "0.9.4");
    Yb || Ib || (eb(function(c) {
      if (c) {
        if (!Ja) {
          return !0;
        }
        c = -1;
        var e;
        z = "CSS1Compat" !== g.compatMode ? aa : Ia || aa;
        D = La("jsSide");
        ha = Ja;
        if (!D) {
          return !0;
        }
        nb(x);
        Db(x);
        V = Ab(zb(D), "div", {id:"jsSidebarFixer"});
        for (8 > B || gb || 6 > w || (w || va ? W(V, "focusin", T) : y ? W(g, "focus", T, {capture:!0, passive:!1}) : W(V, "DOMFocusIn", T, !1)); 1 < Ma(D).length;) {
          V.appendChild(Ma(D)[1]);
        }
        for (Ra && !bb && W(g, "DOMMouseScroll", ia, !1); e = u[++c];) {
          var k = La(e);
          k.onwheel !== t ? W(k, "wheel", F, {passive:!1}) : bb ? W(k, "MozMousePixelScroll", F, !1) : Ra ? u[c] = La(e) : (k.onmousewheel !== t || 9 <= B) && W(k, "mousewheel", F, !1);
        }
        w || ub || 2 > Ka || (Qa = Ca.perspective !== t || Ca["-moz-perspective"] !== t || Ca["-webkit-perspective"] !== t);
        x();
        return !0;
      }
    }), Pa(function() {
      var c = -1, e;
      if (Ra && !bb) {
        Z(g, "DOMMouseScroll", ia, !1);
      } else {
        for (; e = u[++c];) {
          e = La(e), e.onwheel !== t ? Z(e, "wheel", F, {passive:!1}) : bb ? Z(e, "MozMousePixelScroll", F, !1) : (e.onmousewheel !== t || 9 <= B) && Z(e, "mousewheel", F, !1);
        }
      }
      8 > B || gb || 6 > w || (w || va ? Z(V, "focusin", T, !1) : y ? Z(g, "focus", T, {capture:!0, passive:!1}) : Z(V, "DOMFocusIn", T, !1));
      ca && clearInterval(ca);
    }));
    var ca, Xa, Fa;
    6 > w && eb(function(c) {
      if (!Ja) {
        return !0;
      }
      c ? ca = setInterval(I, 333) : ca && (clearInterval(ca), ca = 0);
    });
    ya(function() {
      function c(Ba, K, N, la) {
        var X = la ? "div" : "cite";
        if (0 === K.indexOf("urn:isbn:")) {
          K = K.substr(9).toUpperCase().split("-").join("");
          if (13 === K.length) {
            K = K.toString().slice(3, -1);
            for (var P = 0, U = 0; 9 > U; U++) {
              P += (K.charAt(U) - 0) * (10 - U);
            }
            P = (11 - P % 11) % 11;
            P = 10 === P ? "X" : P.toString();
            K += P;
          }
          10 === K.length && (K = "//www.amazon.co.jp/exec/obidos/ASIN/" + K + "/itozyun-22/ref=nosim/");
        }
        N = la ? Ab(zb(k), X, {className:N}) : xa(k, X, {className:N});
        xa(N, "a", 0 === K.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:K, J:B ? "0" : t} : {G:!0, href:K, J:B ? "0" : t}, Ba);
      }
      if (Ja) {
        for (var e = yb(Ja, "blockquote"), k, r = -1, E, A; k = e[++r];) {
          E = pa(k, "title"), A = pa(k, "cite"), E && A ? (Ea(k, "title"), c(E, A, "js-bqLink", !0)) : A && (Ea(k, "cite"), c(l.decodeURI ? decodeURI(A) : A, A, "js-bqCite"));
        }
      }
    });
    var Ya, d, f, n, v, G, da;
    ya(function() {
      var c = La("blog2slide-start");
      if (c) {
        var e = g.onfullscreenchange !== t ? "f" : g.onmozfullscreenchange !== t ? "mozF" : g.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        Ya = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== e || Ya ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', W(c.firstChild, "click", oa), c = wa(c), d = wa(c), v = yb(c, "section"), f = g.createElement("h1"), f.innerHTML = cb("h1")[0].innerHTML, da = v.length, v.splice(0, 0, f), 0 !== e ? W(g, e + "ullscreenchange", a) : w ? W(g, "MSFullscreenChange", a, !1) : Db(a)) : Da(c);
      }
    });
  })();
  tb = g.scripts || cb("script");
  var sa = tb[tb.length - 1].src.split("/");
  --sa.length;
  "js" === sa[sa.length - 1] && --sa.length;
  (sa = sa.join("/")) && (sa += "/");
  var Yb = Zb || "1" === pa(aa, "mob");
  hb = (Yb ? "mb" : "pc") + "/";
  6.1 > ma && nb(Ob);
  Pa(Pb);
  6.1 > ma && nb(Qb);
  Pa(Rb);
  10 > w && (11 !== Sa || 5 !== w) || (9 > B || 1 > O || !va && !l.addEventListener ? g.write('<link href="' + sa + "css/" + hb + xb + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > B || 1.5 > O || 532 >= Ua || 2 > Ka || 4 <= Ka && 8 > Ka) && ya(function() {
    xa(Ta, "link", {href:sa + "css/" + hb + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

