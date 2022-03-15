Array.prototype.pop || (Array.prototype.pop = function() {
  var L = this[this.length - 1];
  --this.length;
  return L;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var L = arguments, l = 0, S = L.length, f = this.length; l < S; ++l) {
    this[f + l] = L[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var L = this[0], l = 1, S = this.length; l < S; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return L;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var L = arguments, l = L.length, S = this.length += l - 1, f = S; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = L[f];
  }
  return S;
});
Array.prototype.splice || (Array.prototype.splice = function(L, l) {
  var S = arguments, f = S.length - 2 - l, Ua = this.slice(L, L + l), ja;
  if (0 < f) {
    var Q = this.length - 1;
    for (ja = L + l; Q >= ja; --Q) {
      this[Q + f] = this[Q];
    }
  } else {
    if (0 > f) {
      Q = L + l;
      for (ja = this.length; Q < ja; ++Q) {
        this[Q + f] = this[Q];
      }
      this.length += f;
    }
  }
  Q = 2;
  for (ja = S.length; Q < ja; ++Q) {
    this[Q - 2 + L] = S[Q];
  }
  return Ua;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(L, l) {
  var S = this.length >>> 0;
  if (0 === S) {
    return -1;
  }
  if (l) {
    var f = l || 0;
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
(function(L, l, S, f, Ua, ja, Q, ub, t) {
  function N(q) {
    if (L[0] === q) {
      return Ka === Ka + "" ? Q(Ka) : Ka;
    }
  }
  function ea(q) {
    var B = L[3];
    if (L[2] === q) {
      return B === B + "" ? Q(B) : B;
    }
  }
  var ca = f.body, Ea = ca.style, La, Va, Ma, Ka = L[1], v = N(2) || N(3), ra = N(7), vb = N(5) || N(6), A = N(8) || N(9), M = N(11) || N(12), db = M && 0 <= L.conpare(Ka, "1.9.1"), wb = N(13), Wa = N(15);
  ja = N(16) || N(17);
  var Jb = N(10) || N(25), Na = N(20) || N(22);
  Na || N(23) || N(21) || N(24);
  var Kb = Na && Q(Ua.userAgent.split("Edg/")[1]);
  Ua = Q(Ua.appVersion.split("Trident/")[1]) + 4;
  var xb = ea(35) || ea(36) || ea(37), Lb = !v && !ra && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), yb = (ra ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : M && !db ? 1.3 <= M ? "gck190" : 1 <= M ? "gck121" : "gck097" : "modern") + ".css", jb = "", Zb = ea(1) || ea(2) || ea(3) || 
  ea(4) || ea(8) || ea(9) || ea(10), Mb, Nb = Ea.transform !== t ? "transform" : Ea["-o-transform"] !== t ? "-o-transform" : Ea["-ms-transform"] !== t ? "-ms-transform" : Ea["-moz-transform"] !== t ? "-moz-transform" : Ea["-webkit-transform"] !== t ? "-webkit-transform" : "", kb = [], Ob, ka, lb, mb, Pb, Qb, Rb, Sb;
  (function() {
    function q() {
      for (var b, h = 0, m = new Date - 0; h < K.length;) {
        m < K[0].t ? ++h : (b = K.splice(h, 1)[0], b.f(b.p));
      }
      a = K.length ? setTimeout(q, da) : 0;
    }
    function B() {
      for (var b, h = 0; h < I.length; ++h) {
        b = I[h], b.f();
      }
    }
    function n() {
      T && (T = clearInterval(T));
    }
    function x() {
      a && (a = clearTimeout(a));
    }
    mb = function(b) {
      I.length || (T = setInterval(B, G));
      I.push({f:b, v:++fa});
      return fa;
    };
    Pb = function() {
      T && (n(), T = setInterval(B, G));
    };
    Qb = n;
    var I = [], G = 500, fa = 0, T;
    if (5 > v || ra) {
      l._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    ka = function(b, h, m) {
      K.length || (a = setTimeout(q, da));
      K.push({f:b, p:h, v:++la, t:new Date - 0 + (da < m ? m : da)});
      return la;
    };
    lb = function(b) {
      for (var h = K.length, m; m = K[--h];) {
        if (m.v === b) {
          K.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Rb = function() {
      a && (x(), a = setTimeout(q, da));
    };
    Sb = x;
    var K = [], da = 16, la = 0, a;
    if (5 > v || ra) {
      l._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var Oa, eb, zb, sa, Pa, Tb, Ab, ta, Bb, Ub, Fa, fb, nb, ma, Xa, Ga, Cb, Vb, ob, Db, Qa, Ra, Ya;
  (function() {
    function q(a, b, h) {
      var m = ["<", a], u = 1, y, W;
      if (b) {
        for (y in b) {
          var J = b[y];
          if (null != J && "" !== J) {
            if ("style" === y) {
              m[++u] = ' style="';
              for (W in J) {
                for (var na = ++u, C, E = [], Y = W.split(""), va = Y.length; va;) {
                  C = Y[--va], "A" <= C && "Z" >= C && (C = "-" + C.toLowerCase()), E[va] = C;
                }
                m[na] = E.join("") + ":" + J[W] + ";";
              }
              m[++u] = '"';
            } else {
              "className" === y && (y = "class"), m[++u] = " " + y + '="' + J + '"';
            }
          }
        }
      }
      m[++u] = ">";
      null != h && (K && "font" !== a ? m[++u] = "<FONT>" + h + "</FONT>" : m[++u] = h);
      m[++u] = "</" + a + ">";
      return m.join("");
    }
    function B(a) {
      return n(f, a);
    }
    function n(a, b) {
      var h = "*" === b && 6 > v ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], u = 0, y;
      for (y = h.length; u < y; ++u) {
        m[u] = h[u];
      }
      return m;
    }
    function x(a) {
      return K ? a.parentElement : a.parentNode;
    }
    function I(a, b, h, m, u, y) {
      if (K) {
        var W = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", J = Pa(2 > a ? sa(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(W, q(h, m, u));
        return Pa(b)[J];
      }
      b = da ? f.createElement(q(h, m)) : y ? f.createElementNS("http://www.w3.org/2000/svg", h) : f.createElement(h);
      if (m && !da) {
        for (W in m) {
          if ((h = m[W]) || 0 === h) {
            switch(W) {
              case "class":
              case "className":
                ob(b, h);
                break;
              case "style":
                a = b.style;
                for (J in h) {
                  a[J] = h[J];
                }
                break;
              default:
                Xa(b, W, h);
            }
          }
        }
      }
      la || null != u && G(b, u);
      return b;
    }
    function G(a, b) {
      if (K) {
        return I(2, a, "font", t, b);
      }
      var h = f.createTextNode("" + b);
      a.appendChild(h);
      return h;
    }
    function fa(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function T(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var K = 5 > v;
    La = B("html")[0];
    Va = B("head")[0];
    Oa = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    eb = B;
    zb = n;
    sa = x;
    Pa = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], h = a.length; h;) {
        b[--h] = a[h];
      }
      return b;
    };
    Tb = function(a) {
      var b = !(7.03 < A && 7.2 > A) && a.children;
      a = b ? b : a.childNodes;
      for (var h = [], m = a.length, u = -1, y; m;) {
        if (y = a[--m], b || 1 === y.nodeType) {
          K && "FONT" === y.tagName || (h[++u] = y);
        }
      }
      return h;
    };
    Ab = function(a) {
      return K ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ta = function(a, b, h, m, u) {
      b = I(2, a, b, h, m, u);
      K || (a.appendChild(b), la && null != m && G(b, m));
      return b;
    };
    Bb = function(a, b, h, m, u) {
      b = I(0, a, b, h, m, u);
      K || (x(a).insertBefore(b, a), la && null != m && G(b, m));
      return b;
    };
    Ub = G;
    Fa = function(a) {
      K ? a.outerHTML = "" : sa(a).removeChild(a);
    };
    fb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== La;) {
        if (b = sa(b), a === b) {
          return !0;
        }
      }
    };
    var da = 9 > v, la = 9 > v;
    nb = function(a) {
      return a.tagName.toUpperCase();
    };
    ma = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Xa = function(a, b, h) {
      a.setAttribute(b, h);
    };
    Ga = function(a, b) {
      a.removeAttribute(b);
    };
    Cb = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Vb = function(a) {
      return a.className;
    };
    ob = fa;
    Db = T;
    Qa = function(a, b) {
      var h;
      if (!T(a, b)) {
        if (h = a.className) {
          b = " " + b;
        }
        fa(a, h + b);
      }
    };
    Ra = function(a, b, h) {
      a.style[b] = h;
    };
    Ya = function(a, b) {
      var h = -1, m, u;
      if (5.5 > v) {
        if (b) {
          for (m = b.split(";"); u = m[++h];) {
            var y = u.split(":");
            a.style[y[0]] = u.substr(y[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > A || 1 > M ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    kb.splice(0, 0, function() {
      function a(J) {
        J = Pa(J);
        for (var na = J.length, C, E, Y; na;) {
          if (C = J[--na], E = C.nodeType, 8 === E) {
            b && y.push(C);
          } else {
            if (1 === E) {
              switch(E = nb(C), "/" === E.charAt(0) && (E = E.substr(1), W[E] = !0), E) {
                case "STYLE":
                  if (8 <= A && 9 > A) {
                    break;
                  }
                case "LINK":
                  K || h || fb(Va, C) || u.push(C);
                  break;
                case "META":
                  E = ma(C, "name") || ma(C, "property");
                  for (Y = m.length; Y;) {
                    if (0 === E.indexOf(m[--Y])) {
                      y.push(C);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Cb(C, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Cb(C, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  y.push(C);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || y.push(C);
                  break;
                default:
                  W[E] ? y.push(C) : Pa(C).length && a(C);
              }
            }
          }
        }
        for (; u[0];) {
          Va.appendChild(u.pop());
        }
        for (; y[0];) {
          Fa(y.pop());
        }
      }
      Ma = Oa("jsMain");
      var b = !(8 > A || 5 > v || ra || .9 > M), h = 7 > v, m = ["og:", "twitter:", "fb:"], u = [], y = [], W = {};
      a(La);
    });
  })();
  var X, ba, wa, Sa, Eb, pb, gb, Fb, Wb, hb, xa, Gb;
  (function() {
    function q() {
      return xa = ya ? Ta ? 2 : Ha ? 3 : 1 : 0;
    }
    function B(d, g) {
      gb(function(p) {
        if (p) {
          return p = b(d), g(p), p.addListener(g), !0;
        }
      });
    }
    function n(d, g) {
      for (var p = 0; p < d.length; ++p) {
        !0 === d[p](g) && (d.splice(p, 1), --p);
      }
    }
    function x(d, g) {
      u && !m.length && ka(I);
      m.push(d, g);
    }
    function I() {
      var d = m, g;
      for (m = []; g = d.shift();) {
        n(g, d.shift());
      }
    }
    function G(d) {
      var g = d || event;
      d = y[g.type];
      var p = -1, r, H;
      for (v ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : J && (g.u = g.stopPropagation, g.stopPropagation = function() {
        H = !0;
      }); r = d[++p];) {
        r.i === this ? (this.g = r.h, this.g(g), this.g = S, this.g = t) : 7.2 > A && this === f && r.i === l && (l.g = r.h, l.g(g), delete l.g);
      }
      if (v) {
        return g.preventDefault = g.stopPropagation = t, g.returnValue;
      }
      J && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (C = !0), H && !C && g.u(), g.u = g.stopPropagation = t);
    }
    function fa() {
      if (E) {
        var d = f.readyState;
        "loaded" === d || "complete" === d ? E() : ka(fa);
      }
    }
    function T(d) {
      n(Y, d);
    }
    function K() {
      var d = 9 === h.offsetWidth;
      hb !== d && x(va, hb = d);
    }
    function da() {
      !E && za && (lb(za), za = ka(la));
    }
    function la() {
      za = 0;
      n(Za);
    }
    function a(d) {
      E || n(Aa, d);
    }
    var b = l.matchMedia, h, m = [], u;
    kb.push(function() {
      B = t;
      h = ta(ca, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      wa(function() {
        u = !0;
        m.length && ka(I);
      });
    });
    X = function(d, g, p, r) {
      if (na) {
        d.addEventListener(g, p, r ? Lb ? r : r.capture : !1);
      } else {
        var H = {i:d, h:p};
        r = y[g];
        var Z = "on" + g, Ba, c;
        if (r) {
          for (Ba = r.length; c = r[--Ba];) {
            if (c.i === d && c.h === p) {
              return;
            }
          }
          y[g].push(H);
        } else {
          y[g] = r = [H], W || (g = d[Z], "function" === typeof g && g !== G && r.unshift({i:d, h:g}));
        }
        W ? d.attachEvent(Z, G) : d[Z] = G;
      }
    };
    ba = function(d, g, p, r) {
      if (na) {
        d.removeEventListener(g, p, r ? Lb ? r : r.capture : !1);
      } else {
        r = y[g];
        g = "on" + g;
        var H, Z, Ba;
        if (r) {
          for (H = r.length; Z = r[--H];) {
            Z.i === d && (Z.h === p ? r.splice(H, 1) : Ba = !0);
          }
          Ba || (W ? d.detachEvent(g, G) : (d[g] = S, d[g] = null));
        }
      }
    };
    var y = {}, W = !1, J = 525.13 > Wa, na = !J && !ra && l.addEventListener, C;
    J && La.addEventListener("click", function(d) {
      if (C) {
        return C = !1, d.preventDefault(), !1;
      }
    });
    wa = function(d) {
      kb.push(d);
    };
    Sa = function(d) {
      Y.push(d);
    };
    var E = function(d) {
      ba(l, "load", E);
      E = t;
      n(kb, d);
    }, Y = [];
    419.3 >= Wa ? ka(fa) : X(l, "load", E);
    (v || 1.8 > M) && X(l, "unload", T);
    gb = function(d) {
      va.push(d);
    };
    var va = [];
    wa(function() {
      K();
      mb(K);
    });
    Wb = function(d) {
      R && R.push(d);
    };
    var R = [], ib = 60 > M || wb, ya, Ha, Ta;
    if (89 <= M || 89 <= Na || xb && 79 <= Kb || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Gb = !0, B("(forced-colors:active)", function(d) {
        ya = d.matches;
        x(R, q());
      });
    } else {
      if (10 <= v || vb || xb && Kb) {
        Gb = !0, B("(-ms-high-contrast:black-on-white)", function(d) {
          ya = Ha = d.matches;
          xa !== q() && x(R, xa);
        }), B("(-ms-high-contrast:white-on-black)", function(d) {
          ya = Ta = d.matches;
          xa !== q() && x(R, xa);
        }), B("(-ms-high-contrast:active)", function(d) {
          ya = d.matches;
          xa !== q() && x(R, xa);
        });
      } else {
        if (10 > v || xb && (44 <= M || wb)) {
          var oa = function() {
            function d(r) {
              return "#ffffff" === r || "rgb(255,255,255)" === r;
            }
            var g = f.defaultView, p = g ? g.getComputedStyle(h, null) : h.currentStyle;
            g = (p && p.color || "").split(" ").join("");
            p = (p && p.backgroundColor || "").split(" ").join("");
            g && (ya = "#123456" !== g && "rgb(18,52,86)" !== g, Ha = ("#000000" === g || "rgb(0,0,0)" === g) && d(p), Ta = d(g) && ("#000000" === p || "rgb(0,0,0)" === p), xa !== q() && x(R, xa));
          };
          gb(function(d) {
            if (d) {
              return Ra(h, "color", "#123456"), Ra(h, "backgroundColor", "#123456"), ib ? (oa(), R = t) : oa() && mb(oa), oa = t, !0;
            }
          });
        } else {
          R = q = t;
        }
      }
    }
    Fb = function(d) {
      Ca.push(d);
    };
    var Ca = [], ha = 7.5 <= A && 8 > A;
    ha && function() {
      for (var d = f.images, g = d.length, p; g;) {
        p = d[--g], p.s = p.src, Ga(p, "src");
      }
    }();
    wa(function() {
      function d() {
        r && (H = p[--r], ha && Xa(H, "src", H.s), Ob(g, ha ? H.s : H.src));
      }
      function g(Z) {
        n(Ca, {m:H, o:Z});
        d();
      }
      var p = f.images || eb("img"), r = p.length;
      if (12 > A || 532 > Wa) {
        d();
      } else {
        for (; r;) {
          var H = p[--r];
          x(Ca, {m:H, o:9 > v ? H.complete : 0 <= H.naturalWidth ? H.naturalWidth : H.width});
        }
      }
    });
    Eb = function(d) {
      Za.push(d);
    };
    var Za = [], za;
    X(l, "resize", da);
    Sa(function() {
      za && clearTimeout(za);
      ba(l, "resize", da);
    });
    pb = function(d) {
      Aa.push(d);
    };
    var Aa = [], $a = 0, Ia = 1 > M || 1.2 <= M && 1.8 > M || 7.2 >= A;
    Ia ? mb(function() {
      var d = l.scrollY || ca.scrollTop;
      $a !== d && ($a = d, a());
    }) : X(l, "scroll", a);
    Sa(function() {
      Ia || ba(l, "scroll", a);
    });
  })();
  (function() {
    var q = 1 > M || 8 <= A && 9 > A, B = 7.2 <= A && 8 > A;
    v || !q && !B && function() {
      var n = ta(La, "style"), x = !(!n.styleSheet && !n.sheet);
      Fa(n);
      return x;
    }() || !Wa || q || B || function() {
      var n = ta(La, "style");
      Ub(n, "");
      var x = !(!n.styleSheet && !n.sheet);
      Fa(n);
      return x;
    }();
  })();
  (function() {
    9 > v && wa(function() {
      var q = ta(ca, "div");
      Ya(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Mb = 1 < q.offsetHeight;
      Ya(q, "");
      Fa(q);
    });
    Ob = function(q, B) {
      function n() {
        I || !G || x.complete ? (ka(q, !!x.width), x.onerror = x.onload = S, x = q = t) : (--G, ka(n));
      }
      var x = new Image, I, G = 99;
      x.onerror = function() {
        I = !0;
      };
      x.onload = function() {
        I = !0;
      };
      x.src = B;
      ka(n);
    };
  })();
  (function() {
    if (!Gb) {
      var q, B = function() {
        q = ta(Va, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:pa + "css/" + jb + "hc/" + yb});
        (Nb || 5.5 <= v && 9 > v && Mb) && Qa(ca, "jsCanRotate");
        B = t;
      };
      Wb(function(n) {
        n && !q ? B() : q && (n ? Va.appendChild(q) : Fa(q));
      });
    }
    Fb(function(n) {
      var x = n.m;
      n = n.o;
      var I = sa(x);
      !Db(I, "aBodyRoot") && n ? Qa(I, "img-loaded") : n || ma(x, "alt") || Ra(x, "display", "none");
    });
    8 <= A && wa(function() {
      for (var n = eb("a"), x = n.length, I = 0, G; I < x; ++I) {
        G = n[I], "-1" === ma(G, "tabindex") ? Ga(G, "tabindex") : ma(G, "href") && Xa(G, "tabindex", "0");
      }
    });
  })();
  (function() {
    function q(c) {
      var e = c.keyCode || c.M, k = m.length, w, D, z, Da;
      if ("keydown" !== c.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var F = w = e.j;
            if (e.C) {
              if (Ra(k, "width", e.L), k.src = e.K, ob(F, e.F), k = e.A) {
                Ya(k, e.D), ob(k, "caption jsCap");
              }
            } else {
              if (D = e.B) {
                for (delete e.B; w = sa(w);) {
                  if (Db(w, "caption")) {
                    e.A = w, e.D = w.style.cssText, Qa(w, "jsCap");
                  } else {
                    var O = nb(w);
                    if ("DIV" === O || "P" === O || "BLOCKQUOT" === O) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (e.H) {
                  D = D.split("=");
                  O = D.length;
                  if (z = D[O - 1]) {
                    (Da = Q(z.substr(1))) && z === "s" + Da ? D[O - 1] = "w" + w : D[O] = "w" + w;
                  }
                  D = D.join("=");
                } else {
                  if (0 < D.indexOf(".bp.blogspot.com/")) {
                    D = D.split("/");
                    O = D.length;
                    if (z = D[O - 2]) {
                      (Da = Q(z.substr(1))) && z === "s" + Da ? D[O - 2] = "w" + w : D.splice(O - 1, 0, "w" + w);
                    }
                    D = D.join("/");
                  }
                }
                e.I = D;
              }
              e.F = Vb(F);
              Qa(F, "jsPicaLarge");
              Ra(k, "width", "");
              k.src = e.I;
              if (k = e.A) {
                Ya(k, ""), Qa(k, "jsCapLarge");
              }
            }
            e.C = !e.C;
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
    function n(c) {
      for (var e = arguments, k = 0, w = e.length; k < w; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function x(c) {
      var e = oa;
      if (hb) {
        if (Ca && !e) {
          if (new Date - 0 < Ca) {
            return;
          }
          Ca = t;
        }
        7 === c ? ha = 0 : (ha && (ha = lb(ha)), Ha = n(l.pageYOffset, l.scrollY, E.scrollTop, ca.scrollTop));
        e ? (oa = I(t, e[0], e[1])) || (Ca = new Date - 0 + 99) : I();
      } else {
        oa = t;
      }
    }
    function I(c, e, k) {
      function w(qa) {
        F = qa;
        if (ib) {
          O = ib + ":translate" + (Ta ? "3D(0," : "(0,") + qa + (Ta ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== qa) {
            if (!C && (na || J)) {
              var qb = Y.offsetWidth;
            }
            O = J ? "position:fixed;width:" + qb + "px;top:" + (qa - D + P) + "px" : C ? "top:" + qa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + qa + "px";
            na && O && (O += ";" + (0 > qa ? "clip:rect(" + -qa + "px " + qb + "px " + aa + "px 0)" : qa + aa < rb ? "clip:rect(0 " + qb + "px " + aa + "px 0)" : "clip:rect(0 " + qb + "px " + (rb - qa) + "px 0)"), 8 > v || (O = O.split(" ").join(",")));
          }
        }
      }
      var D = Ha, z = va, Da = Y.offsetTop === z.offsetTop, F = 0, O = "", ia = !0;
      if (Da) {
        for (var U = 0, P = 0, V = z; V && V !== ca;) {
          P += V.offsetTop, V = V.offsetParent;
        }
        F = ya;
        var Hb = n(l.innerHeight, E.offsetHeight), Ib = z.offsetHeight, aa = R.offsetHeight, rb = aa < Ib ? Ib : aa, Ja = D, ab = Ja + Hb, sb = P, tb = sb + rb, Xb = P + F, $b = Xb + aa;
        z = Ja < sb ? sb : Ja;
        V = tb < ab ? tb : ab;
        var bb = V - z;
        Ja = tb <= Ja;
        ab = ab <= sb;
        if (e !== t) {
          ia = P + e;
          c = ia + k;
          var cb;
          if (Ja || ab) {
            return Hb <= k ? cb = P : cb = Ja ? tb - k : P + k - Hb, Ca = t, l.scroll(n(l.pageXOffset, l.scrollX, E.scrollLeft, ca.scrollLeft), cb), oa;
          }
          aa <= bb ? U = 4 : k <= bb ? aa - e <= bb ? U = 2 : z <= ia && c <= V ? z < P + F && (U = 4) : U = z <= ia && ia <= V ? 5 : z <= c && c <= V ? 4 : c < z ? 4 : 5 : U = 4;
          ia = t;
        } else {
          c !== t ? aa <= bb ? (U = 7, ia = !1) : (F -= 60 * c, U = V - P - aa, cb = z - P, F < U ? F = U : cb < F && (F = cb), U = 6) : Ib <= aa || (Ja ? U = 1 : ab || (aa <= bb ? U = 3 : z < Xb ? U = 3 : $b < V ? U = 2 : D < P + aa - bb || (U = 2)));
        }
        switch(U) {
          case 0:
            w(0);
            break;
          case 1:
            w(rb - aa);
            break;
          case 2:
            w(V - P - aa);
            break;
          case 3:
            w(z - P);
            break;
          case 4:
            w(z - P - e);
            break;
          case 5:
            w(V - P - (e + k));
          case 6:
            w(F);
        }
      }
      Ya(R, O);
      ya = F;
      return Da && ia;
    }
    function G(c) {
      if (hb) {
        M && (Ha = n(l.pageYOffset, E.scrollTop, ca.scrollTop));
        var e = this !== c.target, k = e && n(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        e && k && I(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      for (var e = c.target, k = -1, w; w = u[++k];) {
        fb(w, e) && G(c);
      }
    }
    function T(c) {
      if (hb) {
        var e = !!ib || M, k = c.target || c.srcElement;
        c = 0;
        var w;
        if (fb(R, k)) {
          for (w = k.offsetHeight; k && (e ? fb(R, k) : R !== k);) {
            c += k.offsetTop, k = k.offsetParent;
          }
          W ? (oa = [c, w], ha && lb(ha), ha = ka(x, 7)) : (Ha = n(l.pageYOffset, l.scrollY, E.scrollTop, ca.scrollTop), I(t, c, w));
        }
      }
    }
    function K() {
      Ia = l.onerror;
      l.onerror = da;
      var c = f.activeElement;
      $a !== c && ($a = c, T({target:c}));
      l.onerror = Ia;
      Ia = t;
    }
    function da() {
      l.onerror = Ia;
      Ia = $a = t;
      return !0;
    }
    function la() {
      d.call(g);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Xa(g, "id", "blog2slide-root"), H[1].parentNode.insertBefore(p, H[1]), b(), f.onkeydown = h) : r && (Fa(p), Ga(g, "id"), Ga(r, "id"), r = f.onkeydown = t);
    }
    function b() {
      r && Ga(r, "id");
      Z = 0 < Z ? Ba < Z ? Ba : Z : 0;
      r = H[Z];
      Xa(r, "id", "blog2slide-current");
    }
    function h(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Z, b();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --Z, b();
        }
      }
    }
    var m = [];
    Jb || (Fb(function(c) {
      if (c.o && Ma) {
        c = c.m;
        var e = sa(c), k = "", w;
        if ("A" === nb(e) && 1 === Tb(e).length) {
          var D = ma(e, "href"), z = D.split("?")[0].split("#")[0].split(".");
          z = (z[z.length - 1] || "").toLowerCase();
          if ((w = 0 < D.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + z + ".")) {
            X(e, "keydown", q), X(c, "click", q), X(e, "click", B), 9 > A || (k = c.offsetWidth - 4 + "px", Ra(c, "width", k)), Qa(e, "jsPica"), m.push({j:e, K:c.src, L:k, B:D, l:c, H:w});
          }
        }
      }
    }), Sa(function(c, e) {
      for (c = -1; e = m[++c];) {
        ba(e.j, "keydown", q), ba(e.l, "click", q), ba(e.j, "click", B);
      }
    }));
    var u = ["jsSidebarFixer1", "jsSidebarFixer2"], y = M || wb || vb, W = !(9 > v || A || 1 <= M && 1.3 > M), J = !(5 > N(16) || 5 > N(17) || 2.2 > N(21) || 6 > N(12) || ea(30) && 534 > Wa || ea(32) || 7 > v || 9 > A || 1 > M), na = J || 7 > v || 1 > M, C = 7.5 > A, E, Y, va, R, ib = Nb, ya = 0, Ha = 0, Ta, oa, Ca, ha, Za = M && 0 <= L.conpare(Ka, "0.9.7"), za = M && 0 >= L.conpare(Ka, "0.9.4");
    Yb || Jb || (gb(function(c) {
      if (c) {
        if (!Ma) {
          return !0;
        }
        c = -1;
        var e;
        E = "CSS1Compat" !== f.compatMode ? ca : La || ca;
        Y = Oa("jsSide");
        va = Ma;
        if (!Y) {
          return !0;
        }
        pb(x);
        Eb(x);
        R = Bb(Ab(Y), "div", {id:"jsSidebarFixer"});
        for (8 > A || za || 6 > v || (v || ra ? X(R, "focusin", T) : y ? X(f, "focus", T, {capture:!0, passive:!1}) : X(R, "DOMFocusIn", T, !1)); 1 < Pa(Y).length;) {
          R.appendChild(Pa(Y)[1]);
        }
        for (Za && !db && X(f, "DOMMouseScroll", fa, !1); e = u[++c];) {
          var k = Oa(e);
          k.onwheel !== t ? X(k, "wheel", G, {passive:!1}) : db ? X(k, "MozMousePixelScroll", G, !1) : Za ? u[c] = Oa(e) : (k.onmousewheel !== t || 9 <= A) && X(k, "mousewheel", G, !1);
        }
        v || vb || 2 > Na || (Ta = Ea.perspective !== t || Ea["-moz-perspective"] !== t || Ea["-webkit-perspective"] !== t);
        x();
        return !0;
      }
    }), Sa(function() {
      var c = -1, e;
      if (Za && !db) {
        ba(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; e = u[++c];) {
          e = Oa(e), e.onwheel !== t ? ba(e, "wheel", G, {passive:!1}) : db ? ba(e, "MozMousePixelScroll", G, !1) : (e.onmousewheel !== t || 9 <= A) && ba(e, "mousewheel", G, !1);
        }
      }
      8 > A || za || 6 > v || (v || ra ? ba(R, "focusin", T, !1) : y ? ba(f, "focus", T, {capture:!0, passive:!1}) : ba(R, "DOMFocusIn", T, !1));
      Aa && clearInterval(Aa);
    }));
    var Aa, $a, Ia;
    6 > v && gb(function(c) {
      if (!Ma) {
        return !0;
      }
      c ? Aa = setInterval(K, 333) : Aa && (clearInterval(Aa), Aa = 0);
    });
    wa(function() {
      function c(Da, F, O, ia) {
        var U = ia ? "div" : "cite";
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
        O = ia ? Bb(Ab(k), U, {className:O}) : ta(k, U, {className:O});
        ta(O, "a", 0 === F.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:F, J:A ? "0" : t} : {G:!0, href:F, J:A ? "0" : t}, Da);
      }
      if (Ma) {
        for (var e = zb(Ma, "blockquote"), k, w = -1, D, z; k = e[++w];) {
          D = ma(k, "title"), z = ma(k, "cite"), D && z ? (Ga(k, "title"), c(D, z, "js-bqLink", !0)) : z && (Ga(k, "cite"), c(l.decodeURI ? decodeURI(z) : z, z, "js-bqCite"));
        }
      }
    });
    var d, g, p, r, H, Z, Ba;
    wa(function() {
      var c = Oa("blog2slide-start");
      if (c) {
        var e = f.onfullscreenchange !== t ? "f" : f.onmozfullscreenchange !== t ? "mozF" : f.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        d = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== e || d ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(c.firstChild, "click", la), c = sa(c), g = sa(c), H = zb(c, "section"), p = f.createElement("h1"), p.innerHTML = eb("h1")[0].innerHTML, Ba = H.length, H.splice(0, 0, p), 0 !== e ? X(f, e + "ullscreenchange", a) : v ? X(f, "MSFullscreenChange", a, !1) : Eb(a)) : Fa(c);
      }
    });
  })();
  ub = f.scripts || eb("script");
  var pa = ub[ub.length - 1].src.split("/");
  --pa.length;
  "js" === pa[pa.length - 1] && --pa.length;
  (pa = pa.join("/")) && (pa += "/");
  var Yb = Zb || "1" === ma(ca, "mob");
  jb = (Yb ? "mb" : "pc") + "/";
  6.1 > ja && pb(Pb);
  Sa(Qb);
  6.1 > ja && pb(Rb);
  Sa(Sb);
  10 > v && (11 !== Ua || 5 !== v) || (9 > A || 1 > M || !ra && !l.addEventListener ? f.write('<link href="' + pa + "css/" + jb + yb + '" rel="stylesheet"' + (8 > A ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > A || 1.5 > M || 532 >= Wa || 2 > Na || 4 <= Na && 8 > Na) && wa(function() {
    ta(Va, "link", {href:pa + "css/" + jb + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

