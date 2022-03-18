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
  var T = arguments, f = T.length - 2 - l, Ua = this.slice(L, L + l), ka;
  if (0 < f) {
    var Q = this.length - 1;
    for (ka = L + l; Q >= ka; --Q) {
      this[Q + f] = this[Q];
    }
  } else {
    if (0 > f) {
      Q = L + l;
      for (ka = this.length; Q < ka; ++Q) {
        this[Q + f] = this[Q];
      }
      this.length += f;
    }
  }
  Q = 2;
  for (ka = T.length; Q < ka; ++Q) {
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
(function(L, l, T, f, Ua, ka, Q, ub, t) {
  function N(r) {
    if (L[0] === r) {
      return Ka === Ka + "" ? Q(Ka) : Ka;
    }
  }
  function ea(r) {
    var D = L[3];
    if (L[2] === r) {
      return D === D + "" ? Q(D) : D;
    }
  }
  var ca = f.body, Fa = ca.style, La, Va, Ma, Ka = L[1], u = N(2) || N(3), ra = N(7), vb = N(5) || N(6), A = N(8) || N(9), M = N(11) || N(12), eb = M && 0 <= L.conpare(Ka, "1.9.1"), wb = N(13), Wa = N(15);
  ka = N(16) || N(17);
  var Jb = N(10) || N(25), Na = N(20) || N(22);
  Na || N(23) || N(21) || N(24);
  var Kb = Na && Q(Ua.userAgent.split("Edg/")[1]);
  Ua = Q(Ua.appVersion.split("Trident/")[1]) + 4;
  var xb = ea(35) || ea(36) || ea(37), Lb = !u && !ra && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), yb = (ra ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : M && !eb ? 1.3 <= M ? "gck190" : 1 <= M ? "gck121" : "gck097" : "modern") + ".css", jb = "", Zb = ea(1) || ea(2) || ea(3) || 
  ea(4) || ea(8) || ea(9) || ea(10), Mb, Nb = Fa.transform !== t ? "transform" : Fa["-o-transform"] !== t ? "-o-transform" : Fa["-ms-transform"] !== t ? "-ms-transform" : Fa.MozTransform !== t ? "-moz-transform" : Fa["-webkit-transform"] !== t ? "-webkit-transform" : "", kb = [], Ob, la, lb, mb, Pb, Qb, Rb, Sb;
  (function() {
    function r() {
      for (var b, g = 0, m = new Date - 0; g < K.length;) {
        m < K[0].t ? ++g : (b = K.splice(g, 1)[0], b.f(b.p));
      }
      a = K.length ? setTimeout(r, da) : 0;
    }
    function D() {
      for (var b, g = 0; g < E.length; ++g) {
        b = E[g], b.f();
      }
    }
    function n() {
      U && (U = clearInterval(U));
    }
    function v() {
      a && (a = clearTimeout(a));
    }
    mb = function(b) {
      E.length || (U = setInterval(D, C));
      E.push({f:b, v:++fa});
      return fa;
    };
    Pb = function() {
      U && (n(), U = setInterval(D, C));
    };
    Qb = n;
    var E = [], C = 500, fa = 0, U;
    if (5 > u || ra) {
      l._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    la = function(b, g, m) {
      K.length || (a = setTimeout(r, da));
      K.push({f:b, p:g, v:++ma, t:new Date - 0 + (da < m ? m : da)});
      return ma;
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
      a && (v(), a = setTimeout(r, da));
    };
    Sb = v;
    var K = [], da = 16, ma = 0, a;
    if (5 > u || ra) {
      l._wdb_ontimer = r, r = "_wdb_ontimer()";
    }
  })();
  var Oa, Xa, zb, sa, Pa, Tb, Ab, ta, Bb, Ub, Ga, fb, nb, ha, Ya, va, Cb, Vb, ob, Db, Qa, Ra, Za;
  (function() {
    function r(a, b, g) {
      var m = ["<", a], w = 1, y, X;
      if (b) {
        for (y in b) {
          var J = b[y];
          if (null != J && "" !== J) {
            if ("style" === y) {
              m[++w] = ' style="';
              for (X in J) {
                for (var na = ++w, F, H = [], Z = X.split(""), wa = Z.length; wa;) {
                  F = Z[--wa], "A" <= F && "Z" >= F && (F = "-" + F.toLowerCase()), H[wa] = F;
                }
                m[na] = H.join("") + ":" + J[X] + ";";
              }
              m[++w] = '"';
            } else {
              "className" === y && (y = "class"), m[++w] = " " + y + '="' + J + '"';
            }
          }
        }
      }
      m[++w] = ">";
      null != g && (K && "font" !== a ? m[++w] = "<FONT>" + g + "</FONT>" : m[++w] = g);
      m[++w] = "</" + a + ">";
      return m.join("");
    }
    function D(a) {
      return n(f, a);
    }
    function n(a, b) {
      var g = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], w = 0, y;
      for (y = g.length; w < y; ++w) {
        m[w] = g[w];
      }
      return m;
    }
    function v(a) {
      return K ? a.parentElement : a.parentNode;
    }
    function E(a, b, g, m, w, y) {
      if (K) {
        var X = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", J = Pa(2 > a ? sa(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(X, r(g, m, w));
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
                Ya(b, X, g);
            }
          }
        }
      }
      ma || null != w && C(b, w);
      return b;
    }
    function C(a, b) {
      if (K) {
        return E(2, a, "font", t, b);
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
    La = D("html")[0];
    Va = D("head")[0];
    Oa = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    Xa = D;
    zb = n;
    sa = v;
    Pa = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Tb = function(a) {
      var b = !(7.03 < A && 7.2 > A) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], m = a.length, w = -1, y; m;) {
        if (y = a[--m], b || 1 === y.nodeType) {
          K && "FONT" === y.tagName || (g[++w] = y);
        }
      }
      return g;
    };
    Ab = function(a) {
      return K ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ta = function(a, b, g, m, w) {
      b = E(2, a, b, g, m, w);
      K || (a.appendChild(b), ma && null != m && C(b, m));
      return b;
    };
    Bb = function(a, b, g, m, w) {
      b = E(0, a, b, g, m, w);
      K || (v(a).insertBefore(b, a), ma && null != m && C(b, m));
      return b;
    };
    Ub = C;
    Ga = function(a) {
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
    var da = 9 > u, ma = 9 > u;
    nb = function(a) {
      return a.tagName.toUpperCase();
    };
    ha = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Ya = function(a, b, g) {
      a.setAttribute(b, g);
    };
    va = function(a, b) {
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
    Za = function(a, b) {
      var g = -1, m, w;
      if (5.5 > u) {
        if (b) {
          for (m = b.split(";"); w = m[++g];) {
            var y = w.split(":");
            a.style[y[0]] = w.substr(y[0].length + 1);
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
        for (var na = J.length, F, H, Z; na;) {
          if (F = J[--na], H = F.nodeType, 8 === H) {
            b && y.push(F);
          } else {
            if (1 === H) {
              switch(H = nb(F), "/" === H.charAt(0) && (H = H.substr(1), X[H] = !0), H) {
                case "STYLE":
                  if (8 <= A && 9 > A) {
                    break;
                  }
                case "LINK":
                  K || g || fb(Va, F) || w.push(F);
                  break;
                case "META":
                  H = ha(F, "name") || ha(F, "property");
                  for (Z = m.length; Z;) {
                    if (0 === H.indexOf(m[--Z])) {
                      y.push(F);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Cb(F, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Cb(F, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  y.push(F);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || y.push(F);
                  break;
                default:
                  X[H] ? y.push(F) : Pa(F).length && a(F);
              }
            }
          }
        }
        for (; w[0];) {
          Va.appendChild(w.pop());
        }
        for (; y[0];) {
          Ga(y.pop());
        }
      }
      Ma = Oa("jsMain");
      var b = !(8 > A || 5 > u || ra || .9 > M), g = 7 > u, m = ["og:", "twitter:", "fb:"], w = [], y = [], X = {};
      a(La);
    });
  })();
  var Y, ba, xa, Sa, Eb, pb, gb, Fb, Wb, hb, ya, Gb;
  (function() {
    function r() {
      return ya = za ? Ta ? 2 : Ha ? 3 : 1 : 0;
    }
    function D(d, h) {
      gb(function(q) {
        if (q) {
          return q = b(d), h(q), q.addListener(h), !0;
        }
      });
    }
    function n(d, h) {
      for (var q = 0; q < d.length; ++q) {
        !0 === d[q](h) && (d.splice(q, 1), --q);
      }
    }
    function v(d, h) {
      w && !m.length && la(E);
      m.push(d, h);
    }
    function E() {
      var d = m, h;
      for (m = []; h = d.shift();) {
        n(h, d.shift());
      }
    }
    function C(d) {
      var h = d || event;
      d = y[h.type];
      var q = -1, p, z;
      for (u ? (h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : J && (h.u = h.stopPropagation, h.stopPropagation = function() {
        z = !0;
      }); p = d[++q];) {
        p.i === this ? (this.g = p.h, this.g(h), this.g = T, this.g = t) : 7.2 > A && this === f && p.i === l && (l.g = p.h, l.g(h), delete l.g);
      }
      if (u) {
        return h.preventDefault = h.stopPropagation = t, h.returnValue;
      }
      J && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (F = !0), z && !F && h.u(), h.u = h.stopPropagation = t);
    }
    function fa() {
      if (H) {
        var d = f.readyState;
        "loaded" === d || "complete" === d ? H() : la(fa);
      }
    }
    function U(d) {
      n(Z, d);
    }
    function K() {
      var d = 9 === g.offsetWidth;
      hb !== d && v(wa, hb = d);
    }
    function da() {
      !H && Aa && (lb(Aa), Aa = la(ma));
    }
    function ma() {
      Aa = 0;
      n($a);
    }
    function a(d) {
      H || n(Ba, d);
    }
    var b = l.matchMedia, g, m = [], w;
    kb.push(function() {
      D = t;
      g = ta(ca, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      xa(function() {
        w = !0;
        m.length && la(E);
      });
    });
    Y = function(d, h, q, p) {
      if (na) {
        d.addEventListener(h, q, p ? Lb ? p : p.capture : !1);
      } else {
        var z = {i:d, h:q};
        p = y[h];
        var R = "on" + h, Ca, c;
        if (p) {
          for (Ca = p.length; c = p[--Ca];) {
            if (c.i === d && c.h === q) {
              return;
            }
          }
          y[h].push(z);
        } else {
          y[h] = p = [z], X || (h = d[R], "function" === typeof h && h !== C && p.unshift({i:d, h:h}));
        }
        X ? d.attachEvent(R, C) : d[R] = C;
      }
    };
    ba = function(d, h, q, p) {
      if (na) {
        d.removeEventListener(h, q, p ? Lb ? p : p.capture : !1);
      } else {
        p = y[h];
        h = "on" + h;
        var z, R, Ca;
        if (p) {
          for (z = p.length; R = p[--z];) {
            R.i === d && (R.h === q ? p.splice(z, 1) : Ca = !0);
          }
          Ca || (X ? d.detachEvent(h, C) : (d[h] = T, d[h] = null));
        }
      }
    };
    var y = {}, X = !1, J = 525.13 > Wa, na = !J && !ra && l.addEventListener, F;
    J && La.addEventListener("click", function(d) {
      if (F) {
        return F = !1, d.preventDefault(), !1;
      }
    });
    xa = function(d) {
      kb.push(d);
    };
    Sa = function(d) {
      Z.push(d);
    };
    var H = function(d) {
      ba(l, "load", H);
      H = t;
      n(kb, d);
    }, Z = [];
    419.3 >= Wa ? la(fa) : Y(l, "load", H);
    (u || 1.8 > M) && Y(l, "unload", U);
    gb = function(d) {
      wa.push(d);
    };
    var wa = [];
    xa(function() {
      K();
      mb(K);
    });
    Wb = function(d) {
      S && S.push(d);
    };
    var S = [], ib = 60 > M || wb, za, Ha, Ta;
    if (89 <= M || 89 <= Na || xb && 79 <= Kb || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Gb = !0, D("(forced-colors:active)", function(d) {
        za = d.matches;
        v(S, r());
      });
    } else {
      if (10 <= u || vb || xb && Kb) {
        Gb = !0, D("(-ms-high-contrast:black-on-white)", function(d) {
          za = Ha = d.matches;
          ya !== r() && v(S, ya);
        }), D("(-ms-high-contrast:white-on-black)", function(d) {
          za = Ta = d.matches;
          ya !== r() && v(S, ya);
        }), D("(-ms-high-contrast:active)", function(d) {
          za = d.matches;
          ya !== r() && v(S, ya);
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
            var q = f.defaultView, p = q ? q.getComputedStyle(g, null) : g.currentStyle;
            q = (p && p.color || "").split(" ").join("");
            p = (p && p.backgroundColor || "").split(" ").join("");
            q && (za = "#123456" !== q && "rgb(18,52,86)" !== q, Ha = d(q) && h(p, !0), Ta = h(q) && d(p, !0), ya !== r() && v(S, ya));
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
      Da.push(d);
    };
    var Da = [], ia = 7.5 <= A && 8 > A;
    ia && function() {
      for (var d = f.images, h = d.length, q; h;) {
        q = d[--h], q.s = q.src, va(q, "src");
      }
    }();
    xa(function() {
      function d() {
        p && (z = q[--p], ia && Ya(z, "src", z.s), Ob(h, ia ? z.s : z.src));
      }
      function h(R) {
        n(Da, {m:z, o:R});
        d();
      }
      var q = f.images || Xa("img"), p = q.length;
      if (12 > A || 532 > Wa) {
        d();
      } else {
        for (; p;) {
          var z = q[--p];
          v(Da, {m:z, o:9 > u ? z.complete : 0 <= z.naturalWidth ? z.naturalWidth : z.width});
        }
      }
    });
    Eb = function(d) {
      $a.push(d);
    };
    var $a = [], Aa;
    Y(l, "resize", da);
    Sa(function() {
      Aa && clearTimeout(Aa);
      ba(l, "resize", da);
    });
    pb = function(d) {
      Ba.push(d);
    };
    var Ba = [], ab = 0, Ia = 1 > M || 1.2 <= M && 1.8 > M || 7.2 >= A;
    Ia ? mb(function() {
      var d = l.scrollY || ca.scrollTop;
      ab !== d && (ab = d, a());
    }) : Y(l, "scroll", a);
    Sa(function() {
      Ia || ba(l, "scroll", a);
    });
  })();
  (function() {
    var r = 1 > M || 8 <= A && 9 > A, D = 7.2 <= A && 8 > A;
    u || !r && !D && function() {
      var n = ta(La, "style"), v = !(!n.styleSheet && !n.sheet);
      Ga(n);
      return v;
    }() || !Wa || r || D || function() {
      var n = ta(La, "style");
      Ub(n, "");
      var v = !(!n.styleSheet && !n.sheet);
      Ga(n);
      return v;
    }();
  })();
  (function() {
    9 > u && xa(function() {
      var r = ta(ca, "div");
      Za(r, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Mb = 1 < r.offsetHeight;
      Za(r, "");
      Ga(r);
    });
    Ob = function(r, D) {
      function n() {
        E || !C || v.complete ? (la(r, !!v.width), v.onerror = v.onload = T, v = r = t) : (--C, la(n));
      }
      var v = new Image, E, C = 99;
      v.onerror = function() {
        E = !0;
      };
      v.onload = function() {
        E = !0;
      };
      v.src = D;
      la(n);
    };
  })();
  (function() {
    if (!Gb) {
      var r, D = function() {
        r = ta(Va, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:pa + "css/" + jb + "hc/" + yb});
        (Nb || 5.5 <= u && 9 > u && Mb) && Qa(ca, "jsCanRotate");
        D = t;
      };
      Wb(function(n) {
        n && !r ? D() : r && (n ? Va.appendChild(r) : Ga(r));
      });
    }
    Fb(function(n) {
      var v = n.m;
      n = n.o;
      var E = sa(v);
      !Db(E, "aBodyRoot") && n ? Qa(E, "img-loaded") : n || ha(v, "alt") || Ra(v, "display", "none");
    });
    A && xa(function() {
      if (8 <= A) {
        for (var n = Xa("a"), v = n.length, E = 0, C; E < v; ++E) {
          C = n[E], "-1" === ha(C, "tabindex") ? va(C, "tabindex") : ha(C, "href") && Ya(C, "tabindex", "0");
        }
      }
      n = Xa("input");
      E = 0;
      for (v = n.length; E < v; ++E) {
        C = n[E], "hidden" === ha(C, "type") && va(C, "tabindex");
      }
    });
  })();
  (function() {
    function r(c) {
      var e = c.keyCode || c.M, k = m.length, x, G, B, Ea;
      if ("keydown" !== c.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var I = x = e.j;
            if (e.C) {
              if (Ra(k, "width", e.L), k.src = e.K, ob(I, e.F), k = e.A) {
                Za(k, e.D), ob(k, "caption jsCap");
              }
            } else {
              if (G = e.B) {
                for (delete e.B; x = sa(x);) {
                  if (Db(x, "caption")) {
                    e.A = x, e.D = x.style.cssText, Qa(x, "jsCap");
                  } else {
                    var O = nb(x);
                    if ("DIV" === O || "P" === O || "BLOCKQUOT" === O) {
                      break;
                    }
                  }
                }
                x = x.offsetWidth - 4 - 1;
                1600 < x && (x = 1600);
                if (e.H) {
                  G = G.split("=");
                  O = G.length;
                  if (B = G[O - 1]) {
                    (Ea = Q(B.substr(1))) && B === "s" + Ea ? G[O - 1] = "w" + x : G[O] = "w" + x;
                  }
                  G = G.join("=");
                } else {
                  if (0 < G.indexOf(".bp.blogspot.com/")) {
                    G = G.split("/");
                    O = G.length;
                    if (B = G[O - 2]) {
                      (Ea = Q(B.substr(1))) && B === "s" + Ea ? G[O - 2] = "w" + x : G.splice(O - 1, 0, "w" + x);
                    }
                    G = G.join("/");
                  }
                }
                e.I = G;
              }
              e.F = Vb(I);
              Qa(I, "jsPicaLarge");
              Ra(k, "width", "");
              k.src = e.I;
              if (k = e.A) {
                Za(k, ""), Qa(k, "jsCapLarge");
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
    function n(c) {
      for (var e = arguments, k = 0, x = e.length; k < x; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function v(c) {
      var e = oa;
      if (hb) {
        if (Da && !e) {
          if (new Date - 0 < Da) {
            return;
          }
          Da = t;
        }
        7 === c ? ia = 0 : (ia && (ia = lb(ia)), Ha = n(l.pageYOffset, l.scrollY, H.scrollTop, ca.scrollTop));
        e ? (oa = E(t, e[0], e[1])) || (Da = new Date - 0 + 99) : E();
      } else {
        oa = t;
      }
    }
    function E(c, e, k) {
      function x(qa) {
        I = qa;
        if (ib) {
          O = ib + ":translate" + (Ta ? "3D(0," : "(0,") + qa + (Ta ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== qa) {
            if (!F && (na || J)) {
              var qb = Z.offsetWidth;
            }
            O = J ? "position:fixed;width:" + qb + "px;top:" + (qa - G + P) + "px" : F ? "top:" + qa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + qa + "px";
            na && O && (O += ";" + (0 > qa ? "clip:rect(" + -qa + "px " + qb + "px " + aa + "px 0)" : qa + aa < rb ? "clip:rect(0 " + qb + "px " + aa + "px 0)" : "clip:rect(0 " + qb + "px " + (rb - qa) + "px 0)"), 8 > u || (O = O.split(" ").join(",")));
          }
        }
      }
      var G = Ha, B = wa, Ea = Z.offsetTop === B.offsetTop, I = 0, O = "", ja = !0;
      if (Ea) {
        for (var V = 0, P = 0, W = B; W && W !== ca;) {
          P += W.offsetTop, W = W.offsetParent;
        }
        I = za;
        var Hb = n(l.innerHeight, H.offsetHeight), Ib = B.offsetHeight, aa = S.offsetHeight, rb = aa < Ib ? Ib : aa, Ja = G, bb = Ja + Hb, sb = P, tb = sb + rb, Xb = P + I, $b = Xb + aa;
        B = Ja < sb ? sb : Ja;
        W = tb < bb ? tb : bb;
        var cb = W - B;
        Ja = tb <= Ja;
        bb = bb <= sb;
        if (e !== t) {
          ja = P + e;
          c = ja + k;
          var db;
          if (Ja || bb) {
            return Hb <= k ? db = P : db = Ja ? tb - k : P + k - Hb, Da = t, l.scroll(n(l.pageXOffset, l.scrollX, H.scrollLeft, ca.scrollLeft), db), oa;
          }
          aa <= cb ? V = 4 : k <= cb ? aa - e <= cb ? V = 2 : B <= ja && c <= W ? B < P + I && (V = 4) : V = B <= ja && ja <= W ? 5 : B <= c && c <= W ? 4 : c < B ? 4 : 5 : V = 4;
          ja = t;
        } else {
          c !== t ? aa <= cb ? (V = 7, ja = !1) : (I -= 60 * c, V = W - P - aa, db = B - P, I < V ? I = V : db < I && (I = db), V = 6) : Ib <= aa || (Ja ? V = 1 : bb || (aa <= cb ? V = 3 : B < Xb ? V = 3 : $b < W ? V = 2 : G < P + aa - cb || (V = 2)));
        }
        switch(V) {
          case 0:
            x(0);
            break;
          case 1:
            x(rb - aa);
            break;
          case 2:
            x(W - P - aa);
            break;
          case 3:
            x(B - P);
            break;
          case 4:
            x(B - P - e);
            break;
          case 5:
            x(W - P - (e + k));
          case 6:
            x(I);
        }
      }
      Za(S, O);
      za = I;
      return Ea && ja;
    }
    function C(c) {
      if (hb) {
        M && (Ha = n(l.pageYOffset, H.scrollTop, ca.scrollTop));
        var e = this !== c.target, k = e && n(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        e && k && E(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      for (var e = c.target, k = -1, x; x = w[++k];) {
        fb(x, e) && C(c);
      }
    }
    function U(c) {
      if (hb) {
        var e = !!ib || M, k = c.target || c.srcElement;
        c = 0;
        var x;
        if (fb(S, k)) {
          for (x = k.offsetHeight; k && (e ? fb(S, k) : S !== k);) {
            c += k.offsetTop, k = k.offsetParent;
          }
          X ? (oa = [c, x], ia && lb(ia), ia = la(v, 7)) : (Ha = n(l.pageYOffset, l.scrollY, H.scrollTop, ca.scrollTop), E(t, c, x));
        }
      }
    }
    function K() {
      Ia = l.onerror;
      l.onerror = da;
      var c = f.activeElement;
      ab !== c && (ab = c, U({target:c}));
      l.onerror = Ia;
      Ia = t;
    }
    function da() {
      l.onerror = Ia;
      Ia = ab = t;
      return !0;
    }
    function ma() {
      d.call(h);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Ya(h, "id", "blog2slide-root"), z[1].parentNode.insertBefore(q, z[1]), b(), f.onkeydown = g) : p && (Ga(q), va(h, "id"), va(p, "id"), p = f.onkeydown = t);
    }
    function b() {
      p && va(p, "id");
      R = 0 < R ? Ca < R ? Ca : R : 0;
      p = z[R];
      Ya(p, "id", "blog2slide-current");
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
        var e = sa(c), k = "", x;
        if ("A" === nb(e) && 1 === Tb(e).length) {
          var G = ha(e, "href"), B = G.split("?")[0].split("#")[0].split(".");
          B = (B[B.length - 1] || "").toLowerCase();
          if ((x = 0 < G.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + B + ".")) {
            Y(e, "keydown", r), Y(c, "click", r), Y(e, "click", D), 9 > A || (k = c.offsetWidth - 4 + "px", Ra(c, "width", k)), Qa(e, "jsPica"), m.push({j:e, K:c.src, L:k, B:G, l:c, H:x});
          }
        }
      }
    }), Sa(function(c, e) {
      for (c = -1; e = m[++c];) {
        ba(e.j, "keydown", r), ba(e.l, "click", r), ba(e.j, "click", D);
      }
    }));
    var w = ["jsSidebarFixer1", "jsSidebarFixer2"], y = M || wb || vb, X = !(6 <= u && 9 > u || A || 1 <= M && 1.3 > M), J = !(5 > N(16) || 5 > N(17) || 2.2 > N(21) || 6 > N(12) || ea(30) && 534 > Wa || ea(32) || 7 > u || 9 > A || 1 > M), na = J || 7 > u || 1 > M, F = 7.5 > A, H, Z, wa, S, ib = Nb, za = 0, Ha = 0, Ta, oa, Da, ia, $a = M && 0 <= L.conpare(Ka, "0.9.7"), Aa = M && 0 >= L.conpare(Ka, "0.9.4");
    Yb || Jb || (gb(function(c) {
      if (c) {
        if (!Ma) {
          return !0;
        }
        c = -1;
        var e;
        H = "CSS1Compat" !== f.compatMode ? ca : La || ca;
        Z = Oa("jsSide");
        wa = Ma;
        if (!Z) {
          return !0;
        }
        pb(v);
        Eb(v);
        S = Bb(Ab(Z), "div", {id:"jsSidebarFixer"});
        for (8 > A || Aa || 6 > u || (u || ra ? Y(S, "focusin", U) : y ? Y(f, "focus", U, {capture:!0, passive:!1}) : Y(S, "DOMFocusIn", U, !1)); 1 < Pa(Z).length;) {
          S.appendChild(Pa(Z)[1]);
        }
        for ($a && !eb && Y(f, "DOMMouseScroll", fa, !1); e = w[++c];) {
          var k = Oa(e);
          k.onwheel !== t ? Y(k, "wheel", C, {passive:!1}) : eb ? Y(k, "MozMousePixelScroll", C, !1) : $a ? w[c] = Oa(e) : (k.onmousewheel !== t || 9 <= A) && Y(k, "mousewheel", C, !1);
        }
        u || vb || 2 > Na || (Ta = Fa.perspective !== t || Fa.MozPerspective !== t || Fa["-webkit-perspective"] !== t);
        v();
        return !0;
      }
    }), Sa(function() {
      var c = -1, e;
      if ($a && !eb) {
        ba(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; e = w[++c];) {
          e = Oa(e), e.onwheel !== t ? ba(e, "wheel", C, {passive:!1}) : eb ? ba(e, "MozMousePixelScroll", C, !1) : (e.onmousewheel !== t || 9 <= A) && ba(e, "mousewheel", C, !1);
        }
      }
      8 > A || Aa || 6 > u || (u || ra ? ba(S, "focusin", U, !1) : y ? ba(f, "focus", U, {capture:!0, passive:!1}) : ba(S, "DOMFocusIn", U, !1));
      Ba && clearInterval(Ba);
    }));
    var Ba, ab, Ia;
    6 > u && gb(function(c) {
      if (!Ma) {
        return !0;
      }
      c ? Ba = setInterval(K, 333) : Ba && (clearInterval(Ba), Ba = 0);
    });
    xa(function() {
      function c(Ea, I, O, ja) {
        var V = ja ? "div" : "cite";
        if (0 === I.indexOf("urn:isbn:")) {
          I = I.substr(9).toUpperCase().split("-").join("");
          if (13 === I.length) {
            I = I.toString().slice(3, -1);
            for (var P = 0, W = 0; 9 > W; W++) {
              P += (I.charAt(W) - 0) * (10 - W);
            }
            P = (11 - P % 11) % 11;
            P = 10 === P ? "X" : P.toString();
            I += P;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        O = ja ? Bb(Ab(k), V, {className:O}) : ta(k, V, {className:O});
        ta(O, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:I, J:A ? "0" : t} : {G:!0, href:I, J:A ? "0" : t}, Ea);
      }
      if (Ma) {
        for (var e = zb(Ma, "blockquote"), k, x = -1, G, B; k = e[++x];) {
          G = ha(k, "title"), B = ha(k, "cite"), G && B ? (va(k, "title"), c(G, B, "js-bqLink", !0)) : B && (va(k, "cite"), c(l.decodeURI ? decodeURI(B) : B, B, "js-bqCite"));
        }
      }
    });
    var d, h, q, p, z, R, Ca;
    xa(function() {
      var c = Oa("blog2slide-start");
      if (c) {
        var e = f.onfullscreenchange !== t ? "f" : f.onmozfullscreenchange !== t ? "mozF" : f.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        d = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== e || d ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', Y(c.firstChild, "click", ma), c = sa(c), h = sa(c), z = zb(c, "section"), q = f.createElement("h1"), q.innerHTML = Xa("h1")[0].innerHTML, Ca = z.length, z.splice(0, 0, q), 0 !== e ? Y(f, e + "ullscreenchange", a) : u ? Y(f, "MSFullscreenChange", a, !1) : Eb(a)) : Ga(c);
      }
    });
  })();
  ub = f.scripts || Xa("script");
  var pa = ub[ub.length - 1].src.split("/");
  --pa.length;
  "js" === pa[pa.length - 1] && --pa.length;
  (pa = pa.join("/")) && (pa += "/");
  var Yb = Zb || "1" === ha(ca, "mob");
  jb = (Yb ? "mb" : "pc") + "/";
  6.1 > ka && pb(Pb);
  Sa(Qb);
  6.1 > ka && pb(Rb);
  Sa(Sb);
  10 > u && (11 !== Ua || 5 !== u) || (9 > A || 1 > M || !ra && !l.addEventListener ? f.write('<link href="' + pa + "css/" + jb + yb + '" rel="stylesheet"' + (8 > A ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > A || 1.5 > M || 532 >= Wa || 2 > Na || 4 <= Na && 8 > Na) && xa(function() {
    ta(Va, "link", {href:pa + "css/" + jb + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

