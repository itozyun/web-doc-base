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
  var T = arguments, f = T.length - 2 - l, Ua = this.slice(L, L + l), ja;
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
  for (ja = T.length; Q < ja; ++Q) {
    this[Q - 2 + L] = T[Q];
  }
  return Ua;
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
(function(L, l, T, f, Ua, ja, Q, ub, t) {
  function N(r) {
    if (L[0] === r) {
      return Ka === Ka + "" ? Q(Ka) : Ka;
    }
  }
  function ea(r) {
    var C = L[3];
    if (L[2] === r) {
      return C === C + "" ? Q(C) : C;
    }
  }
  var ca = f.body, Ea = ca.style, La, Va, Ma, Ka = L[1], u = N(2) || N(3), ra = N(7), vb = N(5) || N(6), B = N(8) || N(9), M = N(11) || N(12), db = M && 0 <= L.conpare(Ka, "1.9.1"), wb = N(13), Wa = N(15);
  ja = N(16) || N(17);
  var Jb = N(10) || N(25), Na = N(20) || N(22);
  Na || N(23) || N(21) || N(24);
  var Kb = Na && Q(Ua.userAgent.split("Edg/")[1]);
  Ua = Q(Ua.appVersion.split("Trident/")[1]) + 4;
  var xb = ea(35) || ea(36) || ea(37), Lb = !u && !ra && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), yb = (ra ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : M && !db ? 1.3 <= M ? "gck190" : 1 <= M ? "gck121" : "gck097" : "modern") + ".css", jb = "", Zb = ea(1) || ea(2) || ea(3) || 
  ea(4) || ea(8) || ea(9) || ea(10), Mb, Nb = Ea.transform !== t ? "transform" : Ea["-o-transform"] !== t ? "-o-transform" : Ea["-ms-transform"] !== t ? "-ms-transform" : Ea.MozTransform !== t ? "-moz-transform" : Ea["-webkit-transform"] !== t ? "-webkit-transform" : "", kb = [], Ob, ka, lb, mb, Pb, Qb, Rb, Sb;
  (function() {
    function r() {
      for (var b, g = 0, m = new Date - 0; g < K.length;) {
        m < K[0].t ? ++g : (b = K.splice(g, 1)[0], b.f(b.p));
      }
      a = K.length ? setTimeout(r, da) : 0;
    }
    function C() {
      for (var b, g = 0; g < I.length; ++g) {
        b = I[g], b.f();
      }
    }
    function p() {
      U && (U = clearInterval(U));
    }
    function x() {
      a && (a = clearTimeout(a));
    }
    mb = function(b) {
      I.length || (U = setInterval(C, H));
      I.push({f:b, v:++fa});
      return fa;
    };
    Pb = function() {
      U && (p(), U = setInterval(C, H));
    };
    Qb = p;
    var I = [], H = 500, fa = 0, U;
    if (5 > u || ra) {
      l._wdb_onlooptimer = C, C = "_wdb_onlooptimer()";
    }
    ka = function(b, g, m) {
      K.length || (a = setTimeout(r, da));
      K.push({f:b, p:g, v:++la, t:new Date - 0 + (da < m ? m : da)});
      return la;
    };
    lb = function(b) {
      for (var g = K.length, m; m = K[--g];) {
        if (m.v === b) {
          K.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    Rb = function() {
      a && (x(), a = setTimeout(r, da));
    };
    Sb = x;
    var K = [], da = 16, la = 0, a;
    if (5 > u || ra) {
      l._wdb_ontimer = r, r = "_wdb_ontimer()";
    }
  })();
  var Oa, eb, zb, sa, Pa, Tb, Ab, ta, Bb, Ub, Fa, fb, nb, ma, Xa, Ga, Cb, Vb, ob, Db, Qa, Ra, Ya;
  (function() {
    function r(a, b, g) {
      var m = ["<", a], v = 1, y, X;
      if (b) {
        for (y in b) {
          var J = b[y];
          if (null != J && "" !== J) {
            if ("style" === y) {
              m[++v] = ' style="';
              for (X in J) {
                for (var na = ++v, D, F = [], Z = X.split(""), va = Z.length; va;) {
                  D = Z[--va], "A" <= D && "Z" >= D && (D = "-" + D.toLowerCase()), F[va] = D;
                }
                m[na] = F.join("") + ":" + J[X] + ";";
              }
              m[++v] = '"';
            } else {
              "className" === y && (y = "class"), m[++v] = " " + y + '="' + J + '"';
            }
          }
        }
      }
      m[++v] = ">";
      null != g && (K && "font" !== a ? m[++v] = "<FONT>" + g + "</FONT>" : m[++v] = g);
      m[++v] = "</" + a + ">";
      return m.join("");
    }
    function C(a) {
      return p(f, a);
    }
    function p(a, b) {
      var g = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], v = 0, y;
      for (y = g.length; v < y; ++v) {
        m[v] = g[v];
      }
      return m;
    }
    function x(a) {
      return K ? a.parentElement : a.parentNode;
    }
    function I(a, b, g, m, v, y) {
      if (K) {
        var X = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", J = Pa(2 > a ? sa(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(X, r(g, m, v));
        return Pa(b)[J];
      }
      b = da ? f.createElement(r(g, m)) : y ? f.createElementNS("http://www.w3.org/2000/svg", g) : f.createElement(g);
      if (m && !da) {
        for (X in m) {
          if ((g = m[X]) || 0 === g) {
            switch(X) {
              case "class":
              case "className":
                ob(b, g);
                break;
              case "style":
                a = b.style;
                for (J in g) {
                  a[J] = g[J];
                }
                break;
              default:
                Xa(b, X, g);
            }
          }
        }
      }
      la || null != v && H(b, v);
      return b;
    }
    function H(a, b) {
      if (K) {
        return I(2, a, "font", t, b);
      }
      var g = f.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function fa(a, b) {
      9 > u ? a.className = b : a.setAttribute("class", b);
    }
    function U(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var K = 5 > u;
    La = C("html")[0];
    Va = C("head")[0];
    Oa = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    eb = C;
    zb = p;
    sa = x;
    Pa = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Tb = function(a) {
      var b = !(7.03 < B && 7.2 > B) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], m = a.length, v = -1, y; m;) {
        if (y = a[--m], b || 1 === y.nodeType) {
          K && "FONT" === y.tagName || (g[++v] = y);
        }
      }
      return g;
    };
    Ab = function(a) {
      return K ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ta = function(a, b, g, m, v) {
      b = I(2, a, b, g, m, v);
      K || (a.appendChild(b), la && null != m && H(b, m));
      return b;
    };
    Bb = function(a, b, g, m, v) {
      b = I(0, a, b, g, m, v);
      K || (x(a).insertBefore(b, a), la && null != m && H(b, m));
      return b;
    };
    Ub = H;
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
    var da = 9 > u, la = 9 > u;
    nb = function(a) {
      return a.tagName.toUpperCase();
    };
    ma = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Xa = function(a, b, g) {
      a.setAttribute(b, g);
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
    Db = U;
    Qa = function(a, b) {
      var g;
      if (!U(a, b)) {
        if (g = a.className) {
          b = " " + b;
        }
        fa(a, g + b);
      }
    };
    Ra = function(a, b, g) {
      a.style[b] = g;
    };
    Ya = function(a, b) {
      var g = -1, m, v;
      if (5.5 > u) {
        if (b) {
          for (m = b.split(";"); v = m[++g];) {
            var y = v.split(":");
            a.style[y[0]] = v.substr(y[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > B || 1 > M ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    kb.splice(0, 0, function() {
      function a(J) {
        J = Pa(J);
        for (var na = J.length, D, F, Z; na;) {
          if (D = J[--na], F = D.nodeType, 8 === F) {
            b && y.push(D);
          } else {
            if (1 === F) {
              switch(F = nb(D), "/" === F.charAt(0) && (F = F.substr(1), X[F] = !0), F) {
                case "STYLE":
                  if (8 <= B && 9 > B) {
                    break;
                  }
                case "LINK":
                  K || g || fb(Va, D) || v.push(D);
                  break;
                case "META":
                  F = ma(D, "name") || ma(D, "property");
                  for (Z = m.length; Z;) {
                    if (0 === F.indexOf(m[--Z])) {
                      y.push(D);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Cb(D, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Cb(D, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  y.push(D);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || y.push(D);
                  break;
                default:
                  X[F] ? y.push(D) : Pa(D).length && a(D);
              }
            }
          }
        }
        for (; v[0];) {
          Va.appendChild(v.pop());
        }
        for (; y[0];) {
          Fa(y.pop());
        }
      }
      Ma = Oa("jsMain");
      var b = !(8 > B || 5 > u || ra || .9 > M), g = 7 > u, m = ["og:", "twitter:", "fb:"], v = [], y = [], X = {};
      a(La);
    });
  })();
  var Y, ba, wa, Sa, Eb, pb, gb, Fb, Wb, hb, xa, Gb;
  (function() {
    function r() {
      return xa = ya ? Ta ? 2 : Ha ? 3 : 1 : 0;
    }
    function C(d, h) {
      gb(function(q) {
        if (q) {
          return q = b(d), h(q), q.addListener(h), !0;
        }
      });
    }
    function p(d, h) {
      for (var q = 0; q < d.length; ++q) {
        !0 === d[q](h) && (d.splice(q, 1), --q);
      }
    }
    function x(d, h) {
      v && !m.length && ka(I);
      m.push(d, h);
    }
    function I() {
      var d = m, h;
      for (m = []; h = d.shift();) {
        p(h, d.shift());
      }
    }
    function H(d) {
      var h = d || event;
      d = y[h.type];
      var q = -1, n, z;
      for (u ? (h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : J && (h.u = h.stopPropagation, h.stopPropagation = function() {
        z = !0;
      }); n = d[++q];) {
        n.i === this ? (this.g = n.h, this.g(h), this.g = T, this.g = t) : 7.2 > B && this === f && n.i === l && (l.g = n.h, l.g(h), delete l.g);
      }
      if (u) {
        return h.preventDefault = h.stopPropagation = t, h.returnValue;
      }
      J && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (D = !0), z && !D && h.u(), h.u = h.stopPropagation = t);
    }
    function fa() {
      if (F) {
        var d = f.readyState;
        "loaded" === d || "complete" === d ? F() : ka(fa);
      }
    }
    function U(d) {
      p(Z, d);
    }
    function K() {
      var d = 9 === g.offsetWidth;
      hb !== d && x(va, hb = d);
    }
    function da() {
      !F && za && (lb(za), za = ka(la));
    }
    function la() {
      za = 0;
      p(Za);
    }
    function a(d) {
      F || p(Aa, d);
    }
    var b = l.matchMedia, g, m = [], v;
    kb.push(function() {
      C = t;
      g = ta(ca, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      wa(function() {
        v = !0;
        m.length && ka(I);
      });
    });
    Y = function(d, h, q, n) {
      if (na) {
        d.addEventListener(h, q, n ? Lb ? n : n.capture : !1);
      } else {
        var z = {i:d, h:q};
        n = y[h];
        var R = "on" + h, Ba, c;
        if (n) {
          for (Ba = n.length; c = n[--Ba];) {
            if (c.i === d && c.h === q) {
              return;
            }
          }
          y[h].push(z);
        } else {
          y[h] = n = [z], X || (h = d[R], "function" === typeof h && h !== H && n.unshift({i:d, h:h}));
        }
        X ? d.attachEvent(R, H) : d[R] = H;
      }
    };
    ba = function(d, h, q, n) {
      if (na) {
        d.removeEventListener(h, q, n ? Lb ? n : n.capture : !1);
      } else {
        n = y[h];
        h = "on" + h;
        var z, R, Ba;
        if (n) {
          for (z = n.length; R = n[--z];) {
            R.i === d && (R.h === q ? n.splice(z, 1) : Ba = !0);
          }
          Ba || (X ? d.detachEvent(h, H) : (d[h] = T, d[h] = null));
        }
      }
    };
    var y = {}, X = !1, J = 525.13 > Wa, na = !J && !ra && l.addEventListener, D;
    J && La.addEventListener("click", function(d) {
      if (D) {
        return D = !1, d.preventDefault(), !1;
      }
    });
    wa = function(d) {
      kb.push(d);
    };
    Sa = function(d) {
      Z.push(d);
    };
    var F = function(d) {
      ba(l, "load", F);
      F = t;
      p(kb, d);
    }, Z = [];
    419.3 >= Wa ? ka(fa) : Y(l, "load", F);
    (u || 1.8 > M) && Y(l, "unload", U);
    gb = function(d) {
      va.push(d);
    };
    var va = [];
    wa(function() {
      K();
      mb(K);
    });
    Wb = function(d) {
      S && S.push(d);
    };
    var S = [], ib = 60 > M || wb, ya, Ha, Ta;
    if (89 <= M || 89 <= Na || xb && 79 <= Kb || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Gb = !0, C("(forced-colors:active)", function(d) {
        ya = d.matches;
        x(S, r());
      });
    } else {
      if (10 <= u || vb || xb && Kb) {
        Gb = !0, C("(-ms-high-contrast:black-on-white)", function(d) {
          ya = Ha = d.matches;
          xa !== r() && x(S, xa);
        }), C("(-ms-high-contrast:white-on-black)", function(d) {
          ya = Ta = d.matches;
          xa !== r() && x(S, xa);
        }), C("(-ms-high-contrast:active)", function(d) {
          ya = d.matches;
          xa !== r() && x(S, xa);
        });
      } else {
        if (10 > u || xb && (1.8 <= M || wb)) {
          var oa = function() {
            function d(z, R) {
              return "#000000" === z || "rgb(0,0,0)" === z || R && "transparent" === z;
            }
            function h(z, R) {
              return "#ffffff" === z || "rgb(255,255,255)" === z || R && "transparent" === z;
            }
            var q = f.defaultView, n = q ? q.getComputedStyle(g, null) : g.currentStyle;
            q = (n && n.color || "").split(" ").join("");
            n = (n && n.backgroundColor || "").split(" ").join("");
            q && (ya = "#123456" !== q && "rgb(18,52,86)" !== q, Ha = d(q) && h(n, !0), Ta = h(q) && d(n, !0), xa !== r() && x(S, xa));
          };
          gb(function(d) {
            if (d) {
              return Ra(g, "color", "#123456"), Ra(g, "backgroundColor", "#123456"), ib ? (oa(), S = t) : oa() && mb(oa), oa = t, !0;
            }
          });
        } else {
          S = r = t;
        }
      }
    }
    Fb = function(d) {
      Ca.push(d);
    };
    var Ca = [], ha = 7.5 <= B && 8 > B;
    ha && function() {
      for (var d = f.images, h = d.length, q; h;) {
        q = d[--h], q.s = q.src, Ga(q, "src");
      }
    }();
    wa(function() {
      function d() {
        n && (z = q[--n], ha && Xa(z, "src", z.s), Ob(h, ha ? z.s : z.src));
      }
      function h(R) {
        p(Ca, {m:z, o:R});
        d();
      }
      var q = f.images || eb("img"), n = q.length;
      if (12 > B || 532 > Wa) {
        d();
      } else {
        for (; n;) {
          var z = q[--n];
          x(Ca, {m:z, o:9 > u ? z.complete : 0 <= z.naturalWidth ? z.naturalWidth : z.width});
        }
      }
    });
    Eb = function(d) {
      Za.push(d);
    };
    var Za = [], za;
    Y(l, "resize", da);
    Sa(function() {
      za && clearTimeout(za);
      ba(l, "resize", da);
    });
    pb = function(d) {
      Aa.push(d);
    };
    var Aa = [], $a = 0, Ia = 1 > M || 1.2 <= M && 1.8 > M || 7.2 >= B;
    Ia ? mb(function() {
      var d = l.scrollY || ca.scrollTop;
      $a !== d && ($a = d, a());
    }) : Y(l, "scroll", a);
    Sa(function() {
      Ia || ba(l, "scroll", a);
    });
  })();
  (function() {
    var r = 1 > M || 8 <= B && 9 > B, C = 7.2 <= B && 8 > B;
    u || !r && !C && function() {
      var p = ta(La, "style"), x = !(!p.styleSheet && !p.sheet);
      Fa(p);
      return x;
    }() || !Wa || r || C || function() {
      var p = ta(La, "style");
      Ub(p, "");
      var x = !(!p.styleSheet && !p.sheet);
      Fa(p);
      return x;
    }();
  })();
  (function() {
    9 > u && wa(function() {
      var r = ta(ca, "div");
      Ya(r, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Mb = 1 < r.offsetHeight;
      Ya(r, "");
      Fa(r);
    });
    Ob = function(r, C) {
      function p() {
        I || !H || x.complete ? (ka(r, !!x.width), x.onerror = x.onload = T, x = r = t) : (--H, ka(p));
      }
      var x = new Image, I, H = 99;
      x.onerror = function() {
        I = !0;
      };
      x.onload = function() {
        I = !0;
      };
      x.src = C;
      ka(p);
    };
  })();
  (function() {
    if (!Gb) {
      var r, C = function() {
        r = ta(Va, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:pa + "css/" + jb + "hc/" + yb});
        (Nb || 5.5 <= u && 9 > u && Mb) && Qa(ca, "jsCanRotate");
        C = t;
      };
      Wb(function(p) {
        p && !r ? C() : r && (p ? Va.appendChild(r) : Fa(r));
      });
    }
    Fb(function(p) {
      var x = p.m;
      p = p.o;
      var I = sa(x);
      !Db(I, "aBodyRoot") && p ? Qa(I, "img-loaded") : p || ma(x, "alt") || Ra(x, "display", "none");
    });
    8 <= B && wa(function() {
      for (var p = eb("a"), x = p.length, I = 0, H; I < x; ++I) {
        H = p[I], "-1" === ma(H, "tabindex") ? Ga(H, "tabindex") : ma(H, "href") && Xa(H, "tabindex", "0");
      }
    });
  })();
  (function() {
    function r(c) {
      var e = c.keyCode || c.M, k = m.length, w, E, A, Da;
      if ("keydown" !== c.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var G = w = e.j;
            if (e.C) {
              if (Ra(k, "width", e.L), k.src = e.K, ob(G, e.F), k = e.A) {
                Ya(k, e.D), ob(k, "caption jsCap");
              }
            } else {
              if (E = e.B) {
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
                  E = E.split("=");
                  O = E.length;
                  if (A = E[O - 1]) {
                    (Da = Q(A.substr(1))) && A === "s" + Da ? E[O - 1] = "w" + w : E[O] = "w" + w;
                  }
                  E = E.join("=");
                } else {
                  if (0 < E.indexOf(".bp.blogspot.com/")) {
                    E = E.split("/");
                    O = E.length;
                    if (A = E[O - 2]) {
                      (Da = Q(A.substr(1))) && A === "s" + Da ? E[O - 2] = "w" + w : E.splice(O - 1, 0, "w" + w);
                    }
                    E = E.join("/");
                  }
                }
                e.I = E;
              }
              e.F = Vb(G);
              Qa(G, "jsPicaLarge");
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
      var e = oa;
      if (hb) {
        if (Ca && !e) {
          if (new Date - 0 < Ca) {
            return;
          }
          Ca = t;
        }
        7 === c ? ha = 0 : (ha && (ha = lb(ha)), Ha = p(l.pageYOffset, l.scrollY, F.scrollTop, ca.scrollTop));
        e ? (oa = I(t, e[0], e[1])) || (Ca = new Date - 0 + 99) : I();
      } else {
        oa = t;
      }
    }
    function I(c, e, k) {
      function w(qa) {
        G = qa;
        if (ib) {
          O = ib + ":translate" + (Ta ? "3D(0," : "(0,") + qa + (Ta ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== qa) {
            if (!D && (na || J)) {
              var qb = Z.offsetWidth;
            }
            O = J ? "position:fixed;width:" + qb + "px;top:" + (qa - E + P) + "px" : D ? "top:" + qa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + qa + "px";
            na && O && (O += ";" + (0 > qa ? "clip:rect(" + -qa + "px " + qb + "px " + aa + "px 0)" : qa + aa < rb ? "clip:rect(0 " + qb + "px " + aa + "px 0)" : "clip:rect(0 " + qb + "px " + (rb - qa) + "px 0)"), 8 > u || (O = O.split(" ").join(",")));
          }
        }
      }
      var E = Ha, A = va, Da = Z.offsetTop === A.offsetTop, G = 0, O = "", ia = !0;
      if (Da) {
        for (var V = 0, P = 0, W = A; W && W !== ca;) {
          P += W.offsetTop, W = W.offsetParent;
        }
        G = ya;
        var Hb = p(l.innerHeight, F.offsetHeight), Ib = A.offsetHeight, aa = S.offsetHeight, rb = aa < Ib ? Ib : aa, Ja = E, ab = Ja + Hb, sb = P, tb = sb + rb, Xb = P + G, $b = Xb + aa;
        A = Ja < sb ? sb : Ja;
        W = tb < ab ? tb : ab;
        var bb = W - A;
        Ja = tb <= Ja;
        ab = ab <= sb;
        if (e !== t) {
          ia = P + e;
          c = ia + k;
          var cb;
          if (Ja || ab) {
            return Hb <= k ? cb = P : cb = Ja ? tb - k : P + k - Hb, Ca = t, l.scroll(p(l.pageXOffset, l.scrollX, F.scrollLeft, ca.scrollLeft), cb), oa;
          }
          aa <= bb ? V = 4 : k <= bb ? aa - e <= bb ? V = 2 : A <= ia && c <= W ? A < P + G && (V = 4) : V = A <= ia && ia <= W ? 5 : A <= c && c <= W ? 4 : c < A ? 4 : 5 : V = 4;
          ia = t;
        } else {
          c !== t ? aa <= bb ? (V = 7, ia = !1) : (G -= 60 * c, V = W - P - aa, cb = A - P, G < V ? G = V : cb < G && (G = cb), V = 6) : Ib <= aa || (Ja ? V = 1 : ab || (aa <= bb ? V = 3 : A < Xb ? V = 3 : $b < W ? V = 2 : E < P + aa - bb || (V = 2)));
        }
        switch(V) {
          case 0:
            w(0);
            break;
          case 1:
            w(rb - aa);
            break;
          case 2:
            w(W - P - aa);
            break;
          case 3:
            w(A - P);
            break;
          case 4:
            w(A - P - e);
            break;
          case 5:
            w(W - P - (e + k));
          case 6:
            w(G);
        }
      }
      Ya(S, O);
      ya = G;
      return Da && ia;
    }
    function H(c) {
      if (hb) {
        M && (Ha = p(l.pageYOffset, F.scrollTop, ca.scrollTop));
        var e = this !== c.target, k = e && p(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        e && k && I(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      for (var e = c.target, k = -1, w; w = v[++k];) {
        fb(w, e) && H(c);
      }
    }
    function U(c) {
      if (hb) {
        var e = !!ib || M, k = c.target || c.srcElement;
        c = 0;
        var w;
        if (fb(S, k)) {
          for (w = k.offsetHeight; k && (e ? fb(S, k) : S !== k);) {
            c += k.offsetTop, k = k.offsetParent;
          }
          X ? (oa = [c, w], ha && lb(ha), ha = ka(x, 7)) : (Ha = p(l.pageYOffset, l.scrollY, F.scrollTop, ca.scrollTop), I(t, c, w));
        }
      }
    }
    function K() {
      Ia = l.onerror;
      l.onerror = da;
      var c = f.activeElement;
      $a !== c && ($a = c, U({target:c}));
      l.onerror = Ia;
      Ia = t;
    }
    function da() {
      l.onerror = Ia;
      Ia = $a = t;
      return !0;
    }
    function la() {
      d.call(h);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Xa(h, "id", "blog2slide-root"), z[1].parentNode.insertBefore(q, z[1]), b(), f.onkeydown = g) : n && (Fa(q), Ga(h, "id"), Ga(n, "id"), n = f.onkeydown = t);
    }
    function b() {
      n && Ga(n, "id");
      R = 0 < R ? Ba < R ? Ba : R : 0;
      n = z[R];
      Xa(n, "id", "blog2slide-current");
    }
    function g(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++R, b();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --R, b();
        }
      }
    }
    var m = [];
    Jb || (Fb(function(c) {
      if (c.o && Ma) {
        c = c.m;
        var e = sa(c), k = "", w;
        if ("A" === nb(e) && 1 === Tb(e).length) {
          var E = ma(e, "href"), A = E.split("?")[0].split("#")[0].split(".");
          A = (A[A.length - 1] || "").toLowerCase();
          if ((w = 0 < E.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + A + ".")) {
            Y(e, "keydown", r), Y(c, "click", r), Y(e, "click", C), 9 > B || (k = c.offsetWidth - 4 + "px", Ra(c, "width", k)), Qa(e, "jsPica"), m.push({j:e, K:c.src, L:k, B:E, l:c, H:w});
          }
        }
      }
    }), Sa(function(c, e) {
      for (c = -1; e = m[++c];) {
        ba(e.j, "keydown", r), ba(e.l, "click", r), ba(e.j, "click", C);
      }
    }));
    var v = ["jsSidebarFixer1", "jsSidebarFixer2"], y = M || wb || vb, X = !(6 <= u && 9 > u || B || 1 <= M && 1.3 > M), J = !(5 > N(16) || 5 > N(17) || 2.2 > N(21) || 6 > N(12) || ea(30) && 534 > Wa || ea(32) || 7 > u || 9 > B || 1 > M), na = J || 7 > u || 1 > M, D = 7.5 > B, F, Z, va, S, ib = Nb, ya = 0, Ha = 0, Ta, oa, Ca, ha, Za = M && 0 <= L.conpare(Ka, "0.9.7"), za = M && 0 >= L.conpare(Ka, "0.9.4");
    Yb || Jb || (gb(function(c) {
      if (c) {
        if (!Ma) {
          return !0;
        }
        c = -1;
        var e;
        F = "CSS1Compat" !== f.compatMode ? ca : La || ca;
        Z = Oa("jsSide");
        va = Ma;
        if (!Z) {
          return !0;
        }
        pb(x);
        Eb(x);
        S = Bb(Ab(Z), "div", {id:"jsSidebarFixer"});
        for (8 > B || za || 6 > u || (u || ra ? Y(S, "focusin", U) : y ? Y(f, "focus", U, {capture:!0, passive:!1}) : Y(S, "DOMFocusIn", U, !1)); 1 < Pa(Z).length;) {
          S.appendChild(Pa(Z)[1]);
        }
        for (Za && !db && Y(f, "DOMMouseScroll", fa, !1); e = v[++c];) {
          var k = Oa(e);
          k.onwheel !== t ? Y(k, "wheel", H, {passive:!1}) : db ? Y(k, "MozMousePixelScroll", H, !1) : Za ? v[c] = Oa(e) : (k.onmousewheel !== t || 9 <= B) && Y(k, "mousewheel", H, !1);
        }
        u || vb || 2 > Na || (Ta = Ea.perspective !== t || Ea.MozPerspective !== t || Ea["-webkit-perspective"] !== t);
        x();
        return !0;
      }
    }), Sa(function() {
      var c = -1, e;
      if (Za && !db) {
        ba(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; e = v[++c];) {
          e = Oa(e), e.onwheel !== t ? ba(e, "wheel", H, {passive:!1}) : db ? ba(e, "MozMousePixelScroll", H, !1) : (e.onmousewheel !== t || 9 <= B) && ba(e, "mousewheel", H, !1);
        }
      }
      8 > B || za || 6 > u || (u || ra ? ba(S, "focusin", U, !1) : y ? ba(f, "focus", U, {capture:!0, passive:!1}) : ba(S, "DOMFocusIn", U, !1));
      Aa && clearInterval(Aa);
    }));
    var Aa, $a, Ia;
    6 > u && gb(function(c) {
      if (!Ma) {
        return !0;
      }
      c ? Aa = setInterval(K, 333) : Aa && (clearInterval(Aa), Aa = 0);
    });
    wa(function() {
      function c(Da, G, O, ia) {
        var V = ia ? "div" : "cite";
        if (0 === G.indexOf("urn:isbn:")) {
          G = G.substr(9).toUpperCase().split("-").join("");
          if (13 === G.length) {
            G = G.toString().slice(3, -1);
            for (var P = 0, W = 0; 9 > W; W++) {
              P += (G.charAt(W) - 0) * (10 - W);
            }
            P = (11 - P % 11) % 11;
            P = 10 === P ? "X" : P.toString();
            G += P;
          }
          10 === G.length && (G = "//www.amazon.co.jp/exec/obidos/ASIN/" + G + "/itozyun-22/ref=nosim/");
        }
        O = ia ? Bb(Ab(k), V, {className:O}) : ta(k, V, {className:O});
        ta(O, "a", 0 === G.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:G, J:B ? "0" : t} : {G:!0, href:G, J:B ? "0" : t}, Da);
      }
      if (Ma) {
        for (var e = zb(Ma, "blockquote"), k, w = -1, E, A; k = e[++w];) {
          E = ma(k, "title"), A = ma(k, "cite"), E && A ? (Ga(k, "title"), c(E, A, "js-bqLink", !0)) : A && (Ga(k, "cite"), c(l.decodeURI ? decodeURI(A) : A, A, "js-bqCite"));
        }
      }
    });
    var d, h, q, n, z, R, Ba;
    wa(function() {
      var c = Oa("blog2slide-start");
      if (c) {
        var e = f.onfullscreenchange !== t ? "f" : f.onmozfullscreenchange !== t ? "mozF" : f.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        d = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== e || d ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', Y(c.firstChild, "click", la), c = sa(c), h = sa(c), z = zb(c, "section"), q = f.createElement("h1"), q.innerHTML = eb("h1")[0].innerHTML, Ba = z.length, z.splice(0, 0, q), 0 !== e ? Y(f, e + "ullscreenchange", a) : u ? Y(f, "MSFullscreenChange", a, !1) : Eb(a)) : Fa(c);
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
  10 > u && (11 !== Ua || 5 !== u) || (9 > B || 1 > M || !ra && !l.addEventListener ? f.write('<link href="' + pa + "css/" + jb + yb + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > B || 1.5 > M || 532 >= Wa || 2 > Na || 4 <= Na && 8 > Na) && wa(function() {
    ta(Va, "link", {href:pa + "css/" + jb + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

