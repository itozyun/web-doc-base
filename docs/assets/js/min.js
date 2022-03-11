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
(function(L, l, R, g, Sa, ma, Q, tb, r) {
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
  var aa = g.body, Ca = aa.style, Ia, Ta, Ja, Ha = L[1], v = M(2) || M(3), va = M(7), ub = M(5) || M(6), B = M(8) || M(9), O = M(11) || M(12), bb = O && 0 <= L.conpare(Ha, "1.9.1"), vb = M(13), Ua = M(15);
  ma = M(16) || M(17);
  var Ib = M(10) || M(25), Ka = M(20) || M(22);
  Ka || M(23) || M(21) || M(24);
  var Jb = Ka && Q(Sa.userAgent.split("Edg/")[1]);
  Sa = Q(Sa.appVersion.split("Trident/")[1]) + 4;
  var wb = fa(35) || fa(36) || fa(37), Kb = !v && !va && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), xb = (va ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : O && !bb ? 1.3 <= O ? "gck190" : 1 <= O ? "gck121" : "gck097" : "modern") + ".css", hb = "", Yb = fa(1) || fa(2) || fa(3) || 
  fa(4) || fa(8) || fa(9) || fa(10), Lb, Mb = Ca.transform !== r ? "transform" : Ca["-o-transform"] !== r ? "-o-transform" : Ca["-ms-transform"] !== r ? "-ms-transform" : Ca["-moz-transform"] !== r ? "-moz-transform" : Ca["-webkit-transform"] !== r ? "-webkit-transform" : "", ib = [], Nb, na, jb, kb, Ob, Pb, Qb, Rb;
  (function() {
    function q() {
      for (var b, h = 0, m = new Date - 0; h < J.length;) {
        m < J[0].t ? ++h : (b = J.splice(h, 1)[0], b.f(b.p));
      }
      a = J.length ? setTimeout(q, ba) : 0;
    }
    function C() {
      for (var b, h = 0; h < I.length; ++h) {
        b = I[h], b.f();
      }
    }
    function p() {
      T && (T = clearInterval(T));
    }
    function x() {
      a && (a = clearTimeout(a));
    }
    kb = function(b) {
      I.length || (T = setInterval(C, G));
      I.push({f:b, v:++ia});
      return ia;
    };
    Ob = function() {
      T && (p(), T = setInterval(C, G));
    };
    Pb = p;
    var I = [], G = 500, ia = 0, T;
    if (5 > v || va) {
      l._wdb_onlooptimer = C, C = "_wdb_onlooptimer()";
    }
    na = function(b, h, m) {
      J.length || (a = setTimeout(q, ba));
      J.push({f:b, p:h, v:++oa, t:new Date - 0 + (ba < m ? m : ba)});
      return oa;
    };
    jb = function(b) {
      for (var h = J.length, m; m = J[--h];) {
        if (m.v === b) {
          J.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Qb = function() {
      a && (x(), a = setTimeout(q, ba));
    };
    Rb = x;
    var J = [], ba = 16, oa = 0, a;
    if (5 > v || va) {
      l._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var La, cb, yb, wa, Ma, Sb, zb, xa, Ab, Tb, Da, db, lb, pa, Va, Ea, Bb, Ub, mb, Cb, Na, Oa, Wa;
  (function() {
    function q(a, b, h) {
      var m = ["<", a], t = 1, y, S;
      if (b) {
        for (y in b) {
          var K = b[y];
          if (null != K && "" !== K) {
            if ("style" === y) {
              m[++t] = ' style="';
              for (S in K) {
                for (var qa = ++t, z, D = [], ha = S.split(""), W = ha.length; W;) {
                  z = ha[--W], "A" <= z && "Z" >= z && (z = "-" + z.toLowerCase()), D[W] = z;
                }
                m[qa] = D.join("") + ":" + K[S] + ";";
              }
              m[++t] = '"';
            } else {
              "className" === y && (y = "class"), m[++t] = " " + y + '="' + K + '"';
            }
          }
        }
      }
      m[++t] = ">";
      null != h && (J && "font" !== a ? m[++t] = "<FONT>" + h + "</FONT>" : m[++t] = h);
      m[++t] = "</" + a + ">";
      return m.join("");
    }
    function C(a) {
      return p(g, a);
    }
    function p(a, b) {
      var h = "*" === b && 6 > v ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], t = 0, y;
      for (y = h.length; t < y; ++t) {
        m[t] = h[t];
      }
      return m;
    }
    function x(a) {
      return J ? a.parentElement : a.parentNode;
    }
    function I(a, b, h, m, t, y) {
      if (J) {
        var S = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", K = Ma(2 > a ? wa(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(S, q(h, m, t));
        return Ma(b)[K];
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
                for (K in h) {
                  a[K] = h[K];
                }
                break;
              default:
                Va(b, S, h);
            }
          }
        }
      }
      oa || null != t && G(b, t);
      return b;
    }
    function G(a, b) {
      if (J) {
        return I(2, a, "font", r, b);
      }
      var h = g.createTextNode("" + b);
      a.appendChild(h);
      return h;
    }
    function ia(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function T(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var J = 5 > v;
    Ia = C("html")[0];
    Ta = C("head")[0];
    La = function(a) {
      return l[a] || g[a] || g.getElementById(a);
    };
    cb = C;
    yb = p;
    wa = x;
    Ma = function(a) {
      a = J ? a.children : a.childNodes;
      for (var b = [], h = a.length; h;) {
        b[--h] = a[h];
      }
      return b;
    };
    Sb = function(a) {
      var b = !(7.03 < B && 7.2 > B) && a.children;
      a = b ? b : a.childNodes;
      for (var h = [], m = a.length, t = -1, y; m;) {
        if (y = a[--m], b || 1 === y.nodeType) {
          J && "FONT" === y.tagName || (h[++t] = y);
        }
      }
      return h;
    };
    zb = function(a) {
      return J ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    xa = function(a, b, h, m, t) {
      b = I(2, a, b, h, m, t);
      J || (a.appendChild(b), oa && null != m && G(b, m));
      return b;
    };
    Ab = function(a, b, h, m, t) {
      b = I(0, a, b, h, m, t);
      J || (x(a).insertBefore(b, a), oa && null != m && G(b, m));
      return b;
    };
    Tb = G;
    Da = function(a) {
      J ? a.outerHTML = "" : wa(a).removeChild(a);
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
    var ba = 9 > v, oa = 9 > v;
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
      var h = -1, m, t;
      if (5.5 > v) {
        if (b) {
          for (m = b.split(";"); t = m[++h];) {
            var y = t.split(":");
            a.style[y[0]] = t.substr(y[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > B || 1 > O ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    ib.splice(0, 0, function() {
      function a(K) {
        K = Ma(K);
        for (var qa = K.length, z, D, ha; qa;) {
          if (z = K[--qa], D = z.nodeType, 8 === D) {
            b && y.push(z);
          } else {
            if (1 === D) {
              switch(D = lb(z), "/" === D.charAt(0) && (D = D.substr(1), S[D] = !0), D) {
                case "STYLE":
                  if (8 <= B && 9 > B) {
                    break;
                  }
                case "LINK":
                  J || h || db(Ta, z) || t.push(z);
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
        for (; t[0];) {
          Ta.appendChild(t.pop());
        }
        for (; y[0];) {
          Da(y.pop());
        }
      }
      Ja = La("jsMain");
      var b = !(8 > B || 5 > v || va || .9 > O), h = 7 > v, m = ["og:", "twitter:", "fb:"], t = [], y = [], S = {};
      a(Ia);
    });
  })();
  var X, Z, ya, Pa, Db, nb, eb, Eb, Vb, fb, za, Fb;
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
      t && !m.length && na(I);
      m.push(d, f);
    }
    function I() {
      var d = m, f;
      for (m = []; f = d.shift();) {
        p(f, d.shift());
      }
    }
    function G(d) {
      var f = d || event;
      d = y[f.type];
      var n = -1, u, H;
      for (v ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : K && (f.u = f.stopPropagation, f.stopPropagation = function() {
        H = !0;
      }); u = d[++n];) {
        u.i === this ? (this.g = u.h, this.g(f), this.g = R, this.g = r) : 7.2 > B && this === g && u.i === l && (l.g = u.h, l.g(f), delete l.g);
      }
      if (v) {
        return f.preventDefault = f.stopPropagation = r, f.returnValue;
      }
      K && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (z = !0), H && !z && f.u(), f.u = f.stopPropagation = r);
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
    function J() {
      var d = 9 === h.offsetWidth;
      fb !== d && x(W, fb = d);
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
    var b = l.matchMedia, h, m = [], t;
    ib.push(function() {
      C = r;
      h = xa(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ya(function() {
        t = !0;
        m.length && na(I);
      });
    });
    X = function(d, f, n, u) {
      if (qa) {
        d.addEventListener(f, n, u ? Kb ? u : u.capture : !1);
      } else {
        var H = {i:d, h:n};
        u = y[f];
        var da = "on" + f, c, e;
        if (u) {
          for (c = u.length; e = u[--c];) {
            if (e.i === d && e.h === n) {
              return;
            }
          }
          y[f].push(H);
        } else {
          y[f] = u = [H], S || (f = d[da], "function" === typeof f && f !== G && u.unshift({i:d, h:f}));
        }
        S ? d.attachEvent(da, G) : d[da] = G;
      }
    };
    Z = function(d, f, n, u) {
      if (qa) {
        d.removeEventListener(f, n, u ? Kb ? u : u.capture : !1);
      } else {
        u = y[f];
        f = "on" + f;
        var H, da, c;
        if (u) {
          for (H = u.length; da = u[--H];) {
            da.i === d && (da.h === n ? u.splice(H, 1) : c = !0);
          }
          c || (S ? d.detachEvent(f, G) : (d[f] = R, d[f] = null));
        }
      }
    };
    var y = {}, S = !1, K = 525.13 > Ua, qa = !K && !va && l.addEventListener, z;
    K && Ia.addEventListener("click", function(d) {
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
      D = r;
      p(ib, d);
    }, ha = [];
    419.3 >= Ua ? na(ia) : X(l, "load", D);
    (v || 1.8 > O) && X(l, "unload", T);
    eb = function(d) {
      W.push(d);
    };
    var W = [];
    ya(function() {
      J();
      kb(J);
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
      if (10 <= v || ub || wb && Jb) {
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
        if (10 > v || wb && (44 <= O || vb)) {
          var ra = function() {
            function d(u) {
              return "#ffffff" === u || "rgb(255,255,255)" === u;
            }
            var f = g.defaultView, n = f ? f.getComputedStyle(h, null) : h.currentStyle;
            f = (n && n.color || "").split(" ").join("");
            n = (n && n.backgroundColor || "").split(" ").join("");
            f && (ja = "#123456" !== f && "rgb(18,52,86)" !== f, Qa = ("#000000" === f || "rgb(0,0,0)" === f) && d(n), Aa = d(f) && ("#000000" === n || "rgb(0,0,0)" === n), za !== q() && x(ea, za));
          };
          eb(function(d) {
            if (d) {
              return Oa(h, "color", "#123456"), Oa(h, "backgroundColor", "#123456"), ob ? (ra(), ea = r) : ra() && kb(ra), ra = r, !0;
            }
          });
        } else {
          ea = q = r;
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
        u && (H = n[--u], Ra && Va(H, "src", H.s), Nb(f, Ra ? H.s : H.src));
      }
      function f(da) {
        p(ka, {m:H, o:da});
        d();
      }
      var n = g.images || cb("img"), u = n.length;
      if (12 > B || 532 > Ua) {
        d();
      } else {
        for (; u;) {
          var H = n[--u];
          x(ka, {m:H, o:9 > v ? H.complete : 0 <= H.naturalWidth ? H.naturalWidth : H.width});
        }
      }
    });
    Db = function(d) {
      gb.push(d);
    };
    var gb = [], ca;
    X(l, "resize", ba);
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
    }) : X(l, "scroll", a);
    Pa(function() {
      Ya || Z(l, "scroll", a);
    });
  })();
  (function() {
    var q = 1 > O || 8 <= B && 9 > B, C = 7.2 <= B && 8 > B;
    v || !q && !C && function() {
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
    9 > v && ya(function() {
      var q = xa(aa, "div");
      Wa(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lb = 1 < q.offsetHeight;
      Wa(q, "");
      Da(q);
    });
    Nb = function(q, C) {
      function p() {
        I || !G || x.complete ? (na(q, !!x.width), x.onerror = x.onload = R, x = q = r) : (--G, na(p));
      }
      var x = new Image, I, G = 99;
      x.onerror = function() {
        I = !0;
      };
      x.onload = function() {
        I = !0;
      };
      x.src = C;
      na(p);
    };
  })();
  (function() {
    if (!Fb) {
      var q, C = function() {
        q = xa(Ta, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:sa + "css/" + hb + "hc/" + xb});
        (Mb || 5.5 <= v && 9 > v && Lb) && Na(aa, "jsCanRotate");
        C = r;
      };
      Vb(function(p) {
        p && !q ? C() : q && (p ? Ta.appendChild(q) : Da(q));
      });
    }
    Eb(function(p) {
      var x = p.m;
      p = p.o;
      var I = wa(x);
      !Cb(I, "aBodyRoot") && p ? Na(I, "img-loaded") : p || pa(x, "alt") || Oa(x, "display", "none");
    });
    8 <= B && ya(function() {
      for (var p = cb("a"), x = p.length, I = 0, G; I < x; ++I) {
        G = p[I], "-1" === pa(G, "tabindex") ? Ea(G, "tabindex") : pa(G, "href") && Va(G, "tabindex", "0");
      }
    });
  })();
  (function() {
    function q(c) {
      var e = c.keyCode || c.M, k = m.length, w, E, A, Ba;
      if ("keydown" !== c.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var F = w = e.j;
            if (e.C) {
              if (Oa(k, "width", e.L), k.src = e.K, mb(F, e.F), k = e.A) {
                Wa(k, e.D), mb(k, "caption jsCap");
              }
            } else {
              if (E = e.B) {
                for (delete e.B; w = wa(w);) {
                  if (Cb(w, "caption")) {
                    e.A = w, e.D = w.style.cssText, Na(w, "jsCap");
                  } else {
                    var N = lb(w);
                    if ("DIV" === N || "P" === N || "BLOCKQUOT" === N) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (e.H) {
                  E = E.split("=");
                  N = E.length;
                  if (A = E[N - 1]) {
                    (Ba = Q(A.substr(1))) && A === "s" + Ba ? E[N - 1] = "w" + w : E[N] = "w" + w;
                  }
                  E = E.join("=");
                } else {
                  if (0 < E.indexOf(".bp.blogspot.com/")) {
                    E = E.split("/");
                    N = E.length;
                    if (A = E[N - 2]) {
                      (Ba = Q(A.substr(1))) && A === "s" + Ba ? E[N - 2] = "w" + w : E.splice(N - 1, 0, "w" + w);
                    }
                    E = E.join("/");
                  }
                }
                e.I = E;
              }
              e.F = Ub(F);
              Na(F, "jsPicaLarge");
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
      for (var e = arguments, k = 0, w = e.length; k < w; ++k) {
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
          ra = r;
        }
        7 === c ? ka = 0 : (ka && (ka = jb(ka)), ja = p(l.pageYOffset, l.scrollY, z.scrollTop, aa.scrollTop));
        e ? (Aa = I(r, e[0], e[1])) || (ra = new Date - 0 + 99) : I();
      } else {
        Aa = r;
      }
    }
    function I(c, e, k) {
      function w(ta) {
        F = ta;
        if (ea) {
          N = ea + ":translate" + (Qa ? "3D(0," : "(0,") + ta + (Qa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== ta) {
            if (!qa && (K || S)) {
              var pb = D.offsetWidth;
            }
            N = S ? "position:fixed;width:" + pb + "px;top:" + (ta - E + P) + "px" : qa ? "top:" + ta + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ta + "px";
            K && N && (N += ";" + (0 > ta ? "clip:rect(" + -ta + "px " + pb + "px " + Y + "px 0)" : ta + Y < qb ? "clip:rect(0 " + pb + "px " + Y + "px 0)" : "clip:rect(0 " + pb + "px " + (qb - ta) + "px 0)"), 8 > v || (N = N.split(" ").join(",")));
          }
        }
      }
      var E = ja, A = ha, Ba = D.offsetTop === A.offsetTop, F = 0, N = "", la = !0;
      if (Ba) {
        for (var U = 0, P = 0, V = A; V && V !== aa;) {
          P += V.offsetTop, V = V.offsetParent;
        }
        var Gb = p(l.innerHeight, z.offsetHeight), Hb = A.offsetHeight, Y = W.offsetHeight, qb = Y < Hb ? Hb : Y, Ga = E, Za = Ga + Gb, rb = P, sb = rb + qb;
        F = ob;
        var Wb = P + F, Zb = Wb + Y;
        A = Ga < rb ? rb : Ga;
        V = sb < Za ? sb : Za;
        var $a = V - A;
        Ga = sb <= Ga;
        Za = Za <= rb;
        if (e !== r) {
          la = P + e;
          c = la + k;
          var ab;
          if (Ga || Za) {
            return Gb <= k ? ab = P : ab = Ga ? sb - k : P + k - Gb, ra = r, l.scroll(p(l.pageXOffset, l.scrollX, z.scrollLeft, aa.scrollLeft), ab), Aa;
          }
          Y <= $a ? U = 4 : k <= $a ? Y - e <= $a ? U = 2 : A <= la && c <= V ? A < P + F && (U = 4) : U = A <= la && la <= V ? 5 : A <= c && c <= V ? 4 : c < A ? 4 : 5 : U = 4;
          la = r;
        } else {
          c !== r ? Y <= $a ? (U = 7, la = !1) : (F -= 60 * c, U = V - P - Y, ab = A - P, F < U ? F = U : ab < F && (F = ab), U = 6) : Hb <= Y || (Ga ? U = 1 : Za || (Y <= $a ? U = 3 : A < Wb ? U = 3 : Zb < V ? U = 2 : E < P + Y - $a || (U = 2)));
        }
        switch(U) {
          case 0:
            w(0);
            break;
          case 1:
            w(qb - Y);
            break;
          case 2:
            w(V - P - Y);
            break;
          case 3:
            w(A - P);
            break;
          case 4:
            w(A - P - e);
            break;
          case 5:
            w(V - P - (e + k));
          case 6:
            w(F);
        }
      }
      Wa(W, N);
      ob = F;
      return Ba && la;
    }
    function G(c) {
      if (fb) {
        O && (ja = p(l.pageYOffset, z.scrollTop, aa.scrollTop));
        var e = this !== c.target, k = e && p(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        e && k && I(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ia(c) {
      for (var e = c.target, k = -1, w; w = t[++k];) {
        db(w, e) && G(c);
      }
    }
    function T(c) {
      if (fb) {
        var e = !!ea, k = c.target || c.srcElement;
        c = 0;
        var w;
        if (db(W, k)) {
          for (w = k.offsetHeight; k && (e ? db(W, k) : W !== k);) {
            c += k.offsetTop, k = k.offsetParent;
          }
          9 > v || B || 1.3 > O ? (ja = p(l.pageYOffset, l.scrollY, z.scrollTop, aa.scrollTop), I(r, c, w)) : (Aa = [c, w], ka && jb(ka), ka = na(x, 7));
        }
      }
    }
    function J() {
      Fa = l.onerror;
      l.onerror = ba;
      var c = g.activeElement;
      Xa !== c && (Xa = c, T({target:c}));
      l.onerror = Fa;
      Fa = r;
    }
    function ba() {
      l.onerror = Fa;
      Fa = Xa = r;
      return !0;
    }
    function oa() {
      Ya.call(d);
    }
    function a() {
      g.fullscreenElement || g.fullscreen || g.webkitIsFullscreen || g.msFullscreenElement || l.fullScreen ? (Va(d, "id", "blog2slide-root"), u[1].parentNode.insertBefore(f, u[1]), b(), g.onkeydown = h) : n && (Da(f), Ea(d, "id"), Ea(n, "id"), n = g.onkeydown = r);
    }
    function b() {
      n && Ea(n, "id");
      H = 0 < H ? da < H ? da : H : 0;
      n = u[H];
      Va(n, "id", "blog2slide-current");
    }
    function h(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++H, b();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --H, b();
        }
      }
    }
    var m = [];
    Ib || (Eb(function(c) {
      if (c.o && Ja) {
        c = c.m;
        var e = wa(c), k = "", w;
        if ("A" === lb(e) && 1 === Sb(e).length) {
          var E = pa(e, "href"), A = E.split("?")[0].split("#")[0].split(".");
          A = (A[A.length - 1] || "").toLowerCase();
          if ((w = 0 < E.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + A + ".")) {
            X(e, "keydown", q), X(c, "click", q), X(e, "click", C), 9 > B || (k = c.offsetWidth - 4 + "px", Oa(c, "width", k)), Na(e, "jsPica"), m.push({j:e, K:c.src, L:k, B:E, l:c, H:w});
          }
        }
      }
    }), Pa(function(c, e) {
      for (c = -1; e = m[++c];) {
        Z(e.j, "keydown", q), Z(e.l, "click", q), Z(e.j, "click", C);
      }
    }));
    var t = ["jsSidebarFixer1", "jsSidebarFixer2"], y = O || vb || ub, S = !(5 > M(16) || 5 > M(17) || 2.2 > M(21) || 6 > M(12) || fa(30) && 534 > Ua || fa(32) || 7 > v || 9 > B || 1 > O), K = S || 7 > v || 1 > O, qa = 7.5 > B, z, D, ha, W, ea = Mb, ob = 0, ja = 0, Qa, Aa, ra, ka, Ra = O && 0 <= L.conpare(Ha, "0.9.7"), gb = O && 0 >= L.conpare(Ha, "0.9.4");
    Xb || Ib || (eb(function(c) {
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
        W = Ab(zb(D), "div", {id:"jsSidebarFixer"});
        for (8 > B || gb || 6 > v || (v || va ? X(W, "focusin", T) : y ? X(g, "focus", T, {capture:!0, passive:!1}) : X(W, "DOMFocusIn", T, !1)); 1 < Ma(D).length;) {
          W.appendChild(Ma(D)[1]);
        }
        for (Ra && !bb && X(g, "DOMMouseScroll", ia, !1); e = t[++c];) {
          var k = La(e);
          k.onwheel !== r ? X(k, "wheel", G, {passive:!1}) : bb ? X(k, "MozMousePixelScroll", G, !1) : Ra ? t[c] = La(e) : (k.onmousewheel !== r || 9 <= B) && X(k, "mousewheel", G, !1);
        }
        v || ub || 2 > Ka || (Qa = Ca.perspective !== r || Ca["-moz-perspective"] !== r || Ca["-webkit-perspective"] !== r);
        x();
        return !0;
      }
    }), Pa(function() {
      var c = -1, e;
      if (Ra && !bb) {
        Z(g, "DOMMouseScroll", ia, !1);
      } else {
        for (; e = t[++c];) {
          e = La(e), e.onwheel !== r ? Z(e, "wheel", G, {passive:!1}) : bb ? Z(e, "MozMousePixelScroll", G, !1) : (e.onmousewheel !== r || 9 <= B) && Z(e, "mousewheel", G, !1);
        }
      }
      8 > B || gb || 6 > v || (v || va ? Z(W, "focusin", T, !1) : y ? Z(g, "focus", T, {capture:!0, passive:!1}) : Z(W, "DOMFocusIn", T, !1));
      ca && clearInterval(ca);
    }));
    var ca, Xa, Fa;
    6 > v && eb(function(c) {
      if (!Ja) {
        return !0;
      }
      c ? ca = setInterval(J, 333) : ca && (clearInterval(ca), ca = 0);
    });
    ya(function() {
      function c(Ba, F, N, la) {
        var U = la ? "div" : "cite";
        if (0 === F.indexOf("urn:isbn:")) {
          F = F.substr(9).toUpperCase().split("-").join("");
          if (13 === F.length) {
            F = F.toString().slice(3, -1);
            for (var P = 0, V = 0; 9 > V; V++) {
              P += (F.charAt(V) - 0) * (10 - V);
            }
            P = (11 - P % 11) % 11;
            P = 10 === P ? "X" : P.toString();
            F += P;
          }
          10 === F.length && (F = "//www.amazon.co.jp/exec/obidos/ASIN/" + F + "/itozyun-22/ref=nosim/");
        }
        N = la ? Ab(zb(k), U, {className:N}) : xa(k, U, {className:N});
        xa(N, "a", 0 === F.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:F, J:B ? "0" : r} : {G:!0, href:F, J:B ? "0" : r}, Ba);
      }
      if (Ja) {
        for (var e = yb(Ja, "blockquote"), k, w = -1, E, A; k = e[++w];) {
          E = pa(k, "title"), A = pa(k, "cite"), E && A ? (Ea(k, "title"), c(E, A, "js-bqLink", !0)) : A && (Ea(k, "cite"), c(l.decodeURI ? decodeURI(A) : A, A, "js-bqCite"));
        }
      }
    });
    var Ya, d, f, n, u, H, da;
    ya(function() {
      var c = La("blog2slide-start");
      if (c) {
        var e = g.onfullscreenchange !== r ? "f" : g.onmozfullscreenchange !== r ? "mozF" : g.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        Ya = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== e || Ya ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(c.firstChild, "click", oa), c = wa(c), d = wa(c), u = yb(c, "section"), f = g.createElement("h1"), f.innerHTML = cb("h1")[0].innerHTML, da = u.length, u.splice(0, 0, f), 0 !== e ? X(g, e + "ullscreenchange", a) : v ? X(g, "MSFullscreenChange", a, !1) : Db(a)) : Da(c);
      }
    });
  })();
  tb = g.scripts || cb("script");
  var sa = tb[tb.length - 1].src.split("/");
  --sa.length;
  "js" === sa[sa.length - 1] && --sa.length;
  (sa = sa.join("/")) && (sa += "/");
  var Xb = Yb || "1" === pa(aa, "mob");
  hb = (Xb ? "mb" : "pc") + "/";
  6.1 > ma && nb(Ob);
  Pa(Pb);
  6.1 > ma && nb(Qb);
  Pa(Rb);
  10 > v && (11 !== Sa || 5 !== v) || (9 > B || 1 > O || !va && !l.addEventListener ? g.write('<link href="' + sa + "css/" + hb + xb + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > B || 1.5 > O || 532 >= Ua || 2 > Ka || 4 <= Ka && 8 > Ka) && ya(function() {
    xa(Ta, "link", {href:sa + "css/" + hb + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

