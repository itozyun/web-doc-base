Array.prototype.pop || (Array.prototype.pop = function() {
  var J = this[this.length - 1];
  --this.length;
  return J;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var J = arguments, l = 0, T = J.length, f = this.length; l < T; ++l) {
    this[f + l] = J[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var J = this[0], l = 1, T = this.length; l < T; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return J;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var J = arguments, l = J.length, T = this.length += l - 1, f = T; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = J[f];
  }
  return T;
});
Array.prototype.splice || (Array.prototype.splice = function(J, l) {
  var T = arguments, f = T.length - 2 - l, Wa = this.slice(J, J + l), oa;
  if (0 < f) {
    var R = this.length - 1;
    for (oa = J + l; R >= oa; --R) {
      this[R + f] = this[R];
    }
  } else if (0 > f) {
    R = J + l;
    for (oa = this.length; R < oa; ++R) {
      this[R + f] = this[R];
    }
    this.length += f;
  }
  R = 2;
  for (oa = T.length; R < oa; ++R) {
    this[R - 2 + J] = T[R];
  }
  return Wa;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(J, l) {
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
    if (this[f] === J) {
      return f;
    }
  }
  return -1;
});
(function(J, l, T, f, Wa, oa, R, ub, q) {
  function N(t) {
    if (J[0] === t) {
      return Fa === Fa + "" ? R(Fa) : Fa;
    }
  }
  function fa(t) {
    var G = J[3];
    if (J[2] === t) {
      return G === G + "" ? R(G) : G;
    }
  }
  var ea = f.body, Ga = ea.style, Ka, Xa, La, Fa = J[1], u = N(2) || N(3), va = N(7), vb = N(5) || N(6), D = N(8) || N(9), L = N(11) || N(12), eb = L && 0 <= J.conpare(Fa, "1.9.1"), wb = N(13), Ya = N(15);
  oa = N(16) || N(17);
  var Kb = N(10) || N(25), Ma = N(20) || N(22);
  Ma || N(23) || N(21) || N(24);
  var Lb = Ma && R(Wa.userAgent.split("Edg/")[1]);
  Wa = R(Wa.appVersion.split("Trident/")[1]) + 4;
  var xb = fa(35) || fa(36) || fa(37), Mb = !u && !va && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), yb = (va ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > D ? "opr70" : 8 > D ? "opr72" : 9.5 > D ? "opr" + (D | 0) : L && !eb ? 1.3 <= L ? "gck190" : 1 <= L ? "gck121" : "gck097" : "modern") + ".css", kb = "", $b = fa(1) || fa(2) || fa(3) || 
  fa(4) || fa(8) || fa(9) || fa(10), Nb, Ob = Ga.transform !== q ? "transform" : Ga["-o-transform"] !== q ? "-o-transform" : Ga["-ms-transform"] !== q ? "-ms-transform" : Ga.MozTransform !== q ? "-moz-transform" : Ga["-webkit-transform"] !== q ? "-webkit-transform" : "", Na = [], Pb = [], Qb, pa, lb, mb, Rb, Sb, Tb, Ub;
  (function() {
    function t() {
      for (var b, g = 0, m = new Date() - 0; g < K.length;) {
        m < K[0].t ? ++g : (b = K.splice(g, 1)[0], b.f(b.p));
      }
      a = K.length ? setTimeout(t, ha) : 0;
    }
    function G() {
      for (var b, g = 0; g < w.length; ++g) {
        b = w[g], b.f();
      }
    }
    function p() {
      U && (U = clearInterval(U));
    }
    function v() {
      a && (a = clearTimeout(a));
    }
    mb = function(b) {
      w.length || (U = setInterval(G, A));
      w.push({f:b, v:++aa});
      return aa;
    };
    Rb = function() {
      U && (p(), U = setInterval(G, A));
    };
    Sb = p;
    var w = [], A = 500, aa = 0, U;
    if (5 > u || va) {
      l._wdb_onlooptimer = G, G = "_wdb_onlooptimer()";
    }
    pa = function(b, g, m) {
      K.length || (a = setTimeout(t, ha));
      K.push({f:b, p:g, v:++ia, t:new Date() - 0 + (ha < m ? m : ha)});
      return ia;
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
    Tb = function() {
      a && (v(), a = setTimeout(t, ha));
    };
    Ub = v;
    var K = [], ha = 16, ia = 0, a;
    if (5 > u || va) {
      l._wdb_ontimer = t, t = "_wdb_ontimer()";
    }
  })();
  var Oa, Pa, zb, wa, Qa, Vb, Ab, xa, Bb, Wb, Ha, fb, nb, la, Ra, qa, Cb, Xb, ob, Db, Sa, Ta, Za;
  (function() {
    function t(a, b, g) {
      var m = ["<", a], r = 1, B, V;
      if (b) {
        for (B in b) {
          var M = b[B];
          if (null != M && "" !== M) {
            if ("style" === B) {
              m[++r] = ' style="';
              for (V in M) {
                for (var ja = ++r, E, I = [], O = V.split(""), ya = O.length; ya;) {
                  E = O[--ya], "A" <= E && "Z" >= E && (E = "-" + E.toLowerCase()), I[ya] = E;
                }
                m[ja] = I.join("") + ":" + M[V] + ";";
              }
              m[++r] = '"';
            } else {
              "className" === B && (B = "class"), m[++r] = " " + B + '="' + M + '"';
            }
          }
        }
      }
      m[++r] = ">";
      null != g && (K && "font" !== a ? m[++r] = "<FONT>" + g + "</FONT>" : m[++r] = g);
      m[++r] = "</" + a + ">";
      return m.join("");
    }
    function G(a) {
      return p(f, a);
    }
    function p(a, b) {
      var g = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], r = 0, B;
      for (B = g.length; r < B; ++r) {
        m[r] = g[r];
      }
      return m;
    }
    function v(a) {
      return K ? a.parentElement : a.parentNode;
    }
    function w(a, b, g, m, r, B) {
      if (K) {
        var V = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", M = Qa(2 > a ? wa(b) : b);
        M = 2 > a ? M.indexOf(b) + a : M.length;
        b.insertAdjacentHTML(V, t(g, m, r));
        return Qa(b)[M];
      }
      b = ha ? f.createElement(t(g, m)) : B ? f.createElementNS("http://www.w3.org/2000/svg", g) : f.createElement(g);
      if (m && !ha) {
        for (V in m) {
          if ((g = m[V]) || 0 === g) {
            switch(V) {
              case "class":
              case "className":
                ob(b, g);
                break;
              case "style":
                a = b.style;
                for (M in g) {
                  a[M] = g[M];
                }
                break;
              default:
                Ra(b, V, g);
            }
          }
        }
      }
      ia || null != r && A(b, r);
      return b;
    }
    function A(a, b) {
      if (K) {
        return w(2, a, "font", q, b);
      }
      var g = f.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function aa(a, b) {
      9 > u ? a.className = b : a.setAttribute("class", b);
    }
    function U(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var K = 5 > u;
    Ka = G("html")[0];
    Xa = G("head")[0];
    Oa = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    Pa = G;
    zb = p;
    wa = v;
    Qa = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Vb = function(a) {
      var b = !(7.03 < D && 7.2 > D) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], m = a.length, r = -1, B; m;) {
        if (B = a[--m], b || 1 === B.nodeType) {
          K && "FONT" === B.tagName || (g[++r] = B);
        }
      }
      return g;
    };
    Ab = function(a) {
      return K ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    xa = function(a, b, g, m, r) {
      b = w(2, a, b, g, m, r);
      K || (a.appendChild(b), ia && null != m && A(b, m));
      return b;
    };
    Bb = function(a, b, g, m, r) {
      b = w(0, a, b, g, m, r);
      K || (v(a).insertBefore(b, a), ia && null != m && A(b, m));
      return b;
    };
    Wb = A;
    Ha = function(a) {
      K ? a.outerHTML = "" : wa(a).removeChild(a);
    };
    fb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== Ka;) {
        if (b = wa(b), a === b) {
          return !0;
        }
      }
    };
    var ha = 9 > u, ia = 9 > u;
    nb = function(a) {
      return a.tagName.toUpperCase();
    };
    la = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Ra = function(a, b, g) {
      a.setAttribute(b, g);
    };
    qa = function(a, b) {
      a.removeAttribute(b);
    };
    Cb = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Xb = function(a) {
      return a.className;
    };
    ob = aa;
    Db = U;
    Sa = function(a, b) {
      var g;
      if (!U(a, b)) {
        if (g = a.className) {
          b = " " + b;
        }
        aa(a, g + b);
      }
    };
    Ta = function(a, b, g) {
      a.style[b] = g;
    };
    Za = function(a, b) {
      var g = -1, m, r;
      if (5.5 > u) {
        if (b) {
          for (m = b.split(";"); r = m[++g];) {
            var B = r.split(":");
            a.style[B[0]] = r.substr(B[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > D || 1 > L ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    Na.splice(0, 0, function() {
      function a(M) {
        M = Qa(M);
        for (var ja = M.length, E, I, O; ja;) {
          if (E = M[--ja], I = E.nodeType, 8 === I) {
            b && B.push(E);
          } else if (1 === I) {
            switch(I = nb(E), "/" === I.charAt(0) && (I = I.substr(1), V[I] = !0), I) {
              case "STYLE":
                if (7.2 <= D && 9 > D) {
                  break;
                }
              case "LINK":
                K || g || fb(Xa, E) || r.push(E);
                break;
              case "META":
                I = la(E, "name") || la(E, "property");
                for (O = m.length; O;) {
                  if (0 === I.indexOf(m[--O])) {
                    B.push(E);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Cb(E, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Cb(E, "skip-cleanup")) {
                  break;
                }
              case "!":
                B.push(E);
                break;
              case "SOURCE":
                l.HTMLSourceElement || B.push(E);
                break;
              default:
                V[I] ? B.push(E) : Qa(E).length && a(E);
            }
          }
        }
        for (; r[0];) {
          Xa.appendChild(r.pop());
        }
        for (; B[0];) {
          Ha(B.pop());
        }
      }
      La = Oa("jsMain");
      var b = !(8 > D || 5 > u || va || .9 > L), g = 7 > u, m = ["og:", "twitter:", "fb:"], r = [], B = [], V = {};
      a(Ka);
    });
  })();
  var Y, ca, ra, Ua, Eb, pb, gb, hb, Fb, ib, za, Gb;
  (function() {
    function t() {
      return za = Z ? $a ? 2 : Va ? 3 : 1 : 0;
    }
    function G(c) {
      ca(l, "load", G);
      G = q;
      v(Na, c, !0);
      ra = Na = q;
    }
    function p(c, h) {
      gb(function() {
        var y = a(c);
        h(y);
        y.addListener(h);
        return !0;
      });
    }
    function v(c, h, y) {
      for (var n = 0; n < c.length; ++n) {
        !0 === c[n](h) && (c.splice(n, 1), --n);
      }
      y && (c.length = 0);
    }
    function w(c, h, y) {
      m && !g.length && pa(A);
      g.push(c, h, y);
    }
    function A() {
      var c = g, h;
      for (g = []; h = c.shift();) {
        v(h, c.shift(), c.shift());
      }
    }
    function aa(c) {
      var h = c || event;
      c = r[h.type];
      var y = -1, n, z;
      for (u ? (h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : V && (h.u = h.stopPropagation, h.stopPropagation = function() {
        z = !0;
      }); n = c[++y];) {
        n.i === this ? (this.g = n.h, this.g(h), this.g = T, this.g = q) : 7.2 > D && this === f && n.i === l && (l.g = n.h, l.g(h), delete l.g);
      }
      if (u) {
        return h.preventDefault = h.stopPropagation = q, h.returnValue;
      }
      V && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (ja = !0), z && !ja && h.u(), h.u = h.stopPropagation = q);
    }
    function U() {
      var c = 9 === b.offsetWidth;
      ib !== c && w(Pb, ib = c);
    }
    function K() {
      !Na && da && (lb(da), da = pa(ha));
    }
    function ha() {
      da = 0;
      v(Ia);
    }
    function ia(c) {
      Na || v(ab, c);
    }
    var a = l.matchMedia, b, g = [], m;
    Na.push(function() {
      p = q;
      b = xa(ea, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ra(function() {
        m = !0;
        g.length && pa(A);
      });
    });
    Y = function(c, h, y, n) {
      if (M) {
        c.addEventListener(h, y, n ? Mb ? n : n.capture : !1);
      } else {
        var z = {i:c, h:y};
        n = r[h];
        var S = "on" + h, ka, ma;
        if (n) {
          for (ka = n.length; ma = n[--ka];) {
            if (ma.i === c && ma.h === y) {
              return;
            }
          }
          r[h].push(z);
        } else {
          r[h] = n = [z], B || (h = c[S], "function" === typeof h && h !== aa && n.unshift({i:c, h:h}));
        }
        B ? c.attachEvent(S, aa) : c[S] = aa;
      }
    };
    ca = function(c, h, y, n) {
      if (M) {
        c.removeEventListener(h, y, n ? Mb ? n : n.capture : !1);
      } else {
        n = r[h];
        h = "on" + h;
        var z, S, ka;
        if (n) {
          for (z = n.length; S = n[--z];) {
            S.i === c && (S.h === y ? n.splice(z, 1) : ka = !0);
          }
          ka || (B ? c.detachEvent(h, aa) : (c[h] = T, c[h] = null));
        }
      }
    };
    var r = {}, B = !1, V = 525.13 > Ya, M = !V && !va && l.addEventListener, ja;
    V && Ka.addEventListener("click", function(c) {
      if (ja) {
        return ja = !1, c.preventDefault(), !1;
      }
    });
    ra = function(c) {
      Na.push(c);
    };
    Ua = function(c) {
      E && E.push(c);
    };
    var E = [];
    if (419.3 >= Ya) {
      var I = function() {
        if (I) {
          var c = f.readyState;
          "loaded" === c || "complete" === c ? (I = q, G()) : pa(I);
        }
      };
      pa(I);
    } else {
      Y(l, "load", G);
    }
    u || 1.8 > L ? Y(l, "unload", function(c) {
      v(E, c, !0);
    }) : E = q;
    gb = function(c) {
      Pb.push(c);
    };
    ra(function() {
      U();
      mb(U);
    });
    Fb = function(c) {
      O && O.push(c);
    };
    var O = [], ya = 60 > L || wb, Z, Va, $a;
    if (89 <= L || 89 <= Ma || xb && 79 <= Lb || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Gb = !0, p("(forced-colors:active)", function(c) {
        Z = c.matches;
        w(O, t());
      });
    } else if (10 <= u || vb || xb && Lb) {
      Gb = !0, p("(-ms-high-contrast:black-on-white)", function(c) {
        Z = Va = c.matches;
        za !== t() && w(O, za);
      }), p("(-ms-high-contrast:white-on-black)", function(c) {
        Z = $a = c.matches;
        za !== t() && w(O, za);
      }), p("(-ms-high-contrast:active)", function(c) {
        Z = c.matches;
        za !== t() && w(O, za);
      });
    } else if (xb && (u || L && 0 <= J.conpare(Fa, "1.8.1") || wb)) {
      var Aa = function() {
        function c(z, S) {
          return "#000000" === z || "rgb(0,0,0)" === z || S && "transparent" === z;
        }
        function h(z, S) {
          return "#ffffff" === z || "rgb(255,255,255)" === z || S && "transparent" === z;
        }
        var y = f.defaultView, n = y ? y.getComputedStyle(b, null) : b.currentStyle;
        y = (n && n.color || "").split(" ").join("");
        n = (n && n.backgroundColor || "").split(" ").join("");
        y && (Z = "#123456" !== y && "rgb(18,52,86)" !== y, Va = c(y) && h(n, !0), $a = h(y) && c(n, !0), za !== t() && w(O, za, ya));
      };
      gb(function(c) {
        if (c) {
          return Ta(b, "color", "#123456"), Ta(b, "backgroundColor", "#123456"), ya ? (Aa(), O = q) : Aa() && mb(Aa), Aa = q, !0;
        }
      });
    } else {
      O = t = q;
    }
    hb = function(c) {
      Ba.push(c);
    };
    var Ba = [], Ca = 7.5 <= D && 8 > D;
    Ca && function() {
      for (var c = f.images, h = c.length, y; h;) {
        y = c[--h], y.s = y.src, qa(y, "src");
      }
    }();
    ra(function() {
      function c() {
        n ? (z = y[--n], Ca && Ra(z, "src", z.s), Qb(h, Ca ? z.s : z.src)) : hb = Ba = q;
      }
      function h(S) {
        v(Ba, {m:z, o:S}, !n);
        c();
      }
      var y = f.images || Pa("img"), n = y.length;
      if (12 > D || 532 > Ya) {
        c();
      } else {
        for (; n;) {
          var z = y[--n];
          w(Ba, {m:z, o:9 > u ? z.complete : 0 <= z.naturalWidth ? z.naturalWidth : z.width}, !n);
        }
        hb = Ba = q;
      }
    });
    Eb = function(c) {
      Ia.push(c);
    };
    var Ia = [], da;
    Y(l, "resize", K);
    Ua(function() {
      da && clearTimeout(da);
      ca(l, "resize", K);
    });
    pb = function(c) {
      ab.push(c);
    };
    var ab = [], jb = 0, Da = 1 > L || 1.2 <= L && 1.8 > L || 7.2 >= D;
    Da ? mb(function() {
      var c = l.scrollY || ea.scrollTop;
      jb !== c && (jb = c, ia());
    }) : Y(l, "scroll", ia);
    Ua(function() {
      Da || ca(l, "scroll", ia);
    });
  })();
  (function() {
    var t = 1 > L || 8 <= D && 9 > D, G = 7.2 <= D && 8 > D;
    u || !t && !G && function() {
      var p = xa(Ka, "style"), v = !(!p.styleSheet && !p.sheet);
      Ha(p);
      return v;
    }() || !Ya || t || G || function() {
      var p = xa(Ka, "style");
      Wb(p, "");
      var v = !(!p.styleSheet && !p.sheet);
      Ha(p);
      return v;
    }();
  })();
  (function() {
    9 > u && ra(function() {
      var t = xa(ea, "div");
      Za(t, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Nb = 1 < t.offsetHeight;
      Za(t, "");
      Ha(t);
    });
    Qb = function(t, G) {
      function p() {
        w || !A || v.complete ? (pa(t, !!v.width), v.onerror = v.onload = T, v = t = q) : (--A, pa(p));
      }
      var v = new Image(), w, A = 99;
      v.onerror = function() {
        w = !0;
      };
      v.onload = function() {
        w = !0;
      };
      v.src = G;
      pa(p);
    };
  })();
  (function() {
    if (!Gb) {
      var t, G = function() {
        t = xa(Xa, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:sa + "css/" + kb + "hc/" + yb});
        (Ob || 5.5 <= u && 9 > u && Nb) && Sa(ea, "jsCanRotate");
        G = q;
      };
      Fb(function(p) {
        p && !t ? G() : t && (p ? Xa.appendChild(t) : Ha(t));
      });
    }
    hb(function(p) {
      var v = p.m;
      p = p.o;
      var w = wa(v);
      !Db(w, "aBodyRoot") && p ? Sa(w, "img-loaded") : p || la(v, "alt") || Ta(v, "display", "none");
    });
    5.5 <= u && 8 > u && Fb(function(p) {
      for (var v = Pa("a"), w = v.length, A = 0, aa; A < w; ++A) {
        aa = v[A], p ? p && Ra(aa, "hidefocus", "true") : qa(aa, "hidefocus");
      }
    });
    D && ra(function() {
      for (var p = Pa("a"), v = p.length, w = 0, A; w < v; ++w) {
        A = p[w], "-1" === la(A, "tabindex") ? qa(A, "tabindex") : la(A, "href") && Ra(A, "tabindex", "0");
      }
      p = Pa("input");
      w = 0;
      for (v = p.length; w < v; ++w) {
        A = p[w], "hidden" === la(A, "type") && qa(A, "tabindex");
      }
    });
  })();
  (function() {
    function t(d) {
      var e = d.keyCode || d.L, k = m.length, x, F, C, Ea;
      if ("keydown" !== d.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var H = x = e.j;
            if (e.C) {
              if (Ta(k, "width", e.K), k.src = e.J, ob(H, e.F), k = e.A) {
                Za(k, e.D), ob(k, "caption jsCap");
              }
            } else {
              if (F = e.B) {
                for (delete e.B; x = wa(x);) {
                  if (Db(x, "caption")) {
                    e.A = x, e.D = x.style.cssText, Sa(x, "jsCap");
                  } else {
                    var P = nb(x);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                x = x.offsetWidth - 4 - 1;
                1600 < x && (x = 1600);
                if (e.G) {
                  F = F.split("=");
                  P = F.length;
                  if (C = F[P - 1]) {
                    (Ea = R(C.substr(1))) && C === "s" + Ea ? F[P - 1] = "w" + x : F[P] = "w" + x;
                  }
                  F = F.join("=");
                } else if (0 < F.indexOf(".bp.blogspot.com/")) {
                  F = F.split("/");
                  P = F.length;
                  if (C = F[P - 2]) {
                    (Ea = R(C.substr(1))) && C === "s" + Ea ? F[P - 2] = "w" + x : F.splice(P - 1, 0, "w" + x);
                  }
                  F = F.join("/");
                }
                e.H = F;
              }
              e.F = Xb(H);
              Sa(H, "jsPicaLarge");
              Ta(k, "width", "");
              k.src = e.H;
              if (k = e.A) {
                Za(k, ""), Sa(k, "jsCapLarge");
              }
            }
            e.C = !e.C;
            break;
          }
        }
        G(d);
      }
    }
    function G(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function p(d) {
      for (var e = arguments, k = 0, x = e.length; k < x; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function v(d) {
      var e = Ca;
      if (ib) {
        if (Ia && !e) {
          if (new Date() - 0 < Ia) {
            return;
          }
          Ia = q;
        }
        7 === d ? da = 0 : (da && (da = lb(da)), Aa = p(l.pageYOffset, l.scrollY, I.scrollTop, ea.scrollTop));
        e ? (Ca = w(q, e[0], e[1])) || (Ia = new Date() - 0 + 99) : w();
      } else {
        Ca = q;
      }
    }
    function w(d, e, k) {
      function x(ta) {
        H = ta;
        if (Va) {
          P = Va + ":translate" + (Ba ? "3D(0," : "(0,") + ta + (Ba ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ta) {
          if (!E && (ja || M)) {
            var qb = O.offsetWidth;
          }
          P = M ? "position:fixed;width:" + qb + "px;top:" + (ta - F + Q) + "px" : E ? "top:" + ta + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ta + "px";
          ja && P && (P += ";" + (0 > ta ? "clip:rect(" + -ta + "px " + qb + "px " + ba + "px 0)" : ta + ba < rb ? "clip:rect(0 " + qb + "px " + ba + "px 0)" : "clip:rect(0 " + qb + "px " + (rb - ta) + "px 0)"), 8 > u || (P = P.split(" ").join(",")));
        }
      }
      var F = Aa, C = ya, Ea = O.offsetTop === C.offsetTop, H = 0, P = "", na = !0;
      if (Ea) {
        for (var W = 0, Q = 0, X = C; X && X !== ea;) {
          Q += X.offsetTop, X = X.offsetParent;
        }
        H = $a;
        var Hb = p(l.innerHeight, I.offsetHeight), Ib = C.offsetHeight, ba = Z.offsetHeight, rb = ba < Ib ? Ib : ba, Ja = F, bb = Ja + Hb, sb = Q, tb = sb + rb, Yb = Q + H, ac = Yb + ba;
        C = Ja < sb ? sb : Ja;
        X = tb < bb ? tb : bb;
        var cb = X - C;
        Ja = tb <= Ja;
        bb = bb <= sb;
        if (e !== q) {
          na = Q + e;
          d = na + k;
          var db;
          if (Ja || bb) {
            return Hb <= k ? db = Q : db = Ja ? tb - k : Q + k - Hb, Ia = q, l.scroll(p(l.pageXOffset, l.scrollX, I.scrollLeft, ea.scrollLeft), db), Ca;
          }
          ba <= cb ? W = 4 : k <= cb ? ba - e <= cb ? W = 2 : C <= na && d <= X ? C < Q + H && (W = 4) : W = C <= na && na <= X ? 5 : C <= d && d <= X ? 4 : d < C ? 4 : 5 : W = 4;
          na = q;
        } else {
          d !== q ? ba <= cb ? (W = 7, na = !1) : (H -= 60 * d, W = X - Q - ba, db = C - Q, H < W ? H = W : db < H && (H = db), W = 6) : Ib <= ba || (Ja ? W = 1 : bb || (ba <= cb ? W = 3 : C < Yb ? W = 3 : ac < X ? W = 2 : F < Q + ba - cb || (W = 2)));
        }
        switch(W) {
          case 0:
            x(0);
            break;
          case 1:
            x(rb - ba);
            break;
          case 2:
            x(X - Q - ba);
            break;
          case 3:
            x(C - Q);
            break;
          case 4:
            x(C - Q - e);
            break;
          case 5:
            x(X - Q - (e + k));
          case 6:
            x(H);
        }
      }
      Za(Z, P);
      $a = H;
      return Ea && na;
    }
    function A(d) {
      if (ib) {
        L && (Aa = p(l.pageYOffset, I.scrollTop, ea.scrollTop));
        var e = this !== d.target, k = e && p(d.deltaY, d.wheelDeltaY / 120, d.wheelDelta / -120, d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1));
        e && k && w(9 >= k ? -9 >= k ? -3 : k : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function aa(d) {
      for (var e = d.target, k = -1, x; x = r[++k];) {
        fb(x, e) && A(d);
      }
    }
    function U(d) {
      if (ib) {
        var e = !!Va || L, k = d.target || d.srcElement;
        d = 0;
        var x;
        if (fb(Z, k)) {
          for (x = k.offsetHeight; k && (e ? fb(Z, k) : Z !== k);) {
            d += k.offsetTop, k = k.offsetParent;
          }
          V ? (Ca = [d, x], da && lb(da), da = pa(v, 7)) : (Aa = p(l.pageYOffset, l.scrollY, I.scrollTop, ea.scrollTop), w(q, d, x));
        }
      }
    }
    function K() {
      h = l.onerror;
      l.onerror = ha;
      var d = f.activeElement;
      c !== d && (c = d, U({target:d}));
      l.onerror = h;
      h = q;
    }
    function ha() {
      l.onerror = h;
      h = c = q;
      return !0;
    }
    function ia() {
      y.call(n);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Ra(n, "id", "blog2slide-root"), ka[1].parentNode.insertBefore(z, ka[1]), b(), f.onkeydown = g) : S && (Ha(z), qa(n, "id"), qa(S, "id"), S = f.onkeydown = q);
    }
    function b() {
      S && qa(S, "id");
      ma = 0 < ma ? Jb < ma ? Jb : ma : 0;
      S = ka[ma];
      Ra(S, "id", "blog2slide-current");
    }
    function g(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++ma, b();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --ma, b();
      }
    }
    var m = [];
    Kb || (hb(function(d) {
      if (d.o && La) {
        d = d.m;
        var e = wa(d), k = "", x;
        if ("A" === nb(e) && 1 === Vb(e).length) {
          var F = la(e, "href"), C = F.split("?")[0].split("#")[0].split(".");
          C = (C[C.length - 1] || "").toLowerCase();
          if ((x = 0 < F.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
            Y(e, "keydown", t), Y(d, "click", t), Y(e, "click", G), 9 > D || (k = d.offsetWidth - 4 + "px", Ta(d, "width", k)), Sa(e, "jsPica"), m.push({j:e, J:d.src, K:k, B:F, l:d, G:x});
          }
        }
      }
    }), Ua(function(d, e) {
      for (d = -1; e = m[++d];) {
        ca(e.j, "keydown", t), ca(e.l, "click", t), ca(e.j, "click", G);
      }
    }));
    var r = ["jsSidebarFixer1", "jsSidebarFixer2"], B = L || wb || vb, V = !(6 <= u && 9 > u || D || 1 <= L && 1.3 > L), M = !(5 > N(16) || 5 > N(17) || 2.2 > N(21) || 6 > N(12) || fa(30) && 534 > Ya || fa(32) || 7 > u || 9 > D || 1 > L), ja = M || 7 > u || 1 > L, E = 7.5 > D, I, O, ya, Z, Va = Ob, $a = 0, Aa = 0, Ba, Ca, Ia, da, ab = L && 0 <= J.conpare(Fa, "0.9.7"), jb = L && 0 >= J.conpare(Fa, "0.9.4");
    Zb || Kb || (gb(function(d) {
      if (d) {
        if (!La) {
          return !0;
        }
        d = -1;
        var e;
        I = "CSS1Compat" !== f.compatMode ? ea : Ka || ea;
        O = Oa("jsSide");
        ya = La;
        if (!O) {
          return !0;
        }
        pb(v);
        Eb(v);
        Z = Bb(Ab(O), "div", {id:"jsSidebarFixer"});
        for (8 > D || jb || 6 > u || (u || va ? Y(Z, "focusin", U) : B ? Y(f, "focus", U, {capture:!0, passive:!1}) : Y(Z, "DOMFocusIn", U, !1)); 1 < Qa(O).length;) {
          Z.appendChild(Qa(O)[1]);
        }
        for (ab && !eb && Y(f, "DOMMouseScroll", aa, !1); e = r[++d];) {
          var k = Oa(e);
          k.onwheel !== q ? Y(k, "wheel", A, {passive:!1}) : eb ? Y(k, "MozMousePixelScroll", A, !1) : ab ? r[d] = Oa(e) : (k.onmousewheel !== q || 9 <= D) && Y(k, "mousewheel", A, !1);
        }
        u || vb || 2 > Ma || (Ba = Ga.perspective !== q || Ga.MozPerspective !== q || Ga["-webkit-perspective"] !== q);
        v();
        return !0;
      }
    }), Ua(function() {
      var d = -1, e;
      if (ab && !eb) {
        ca(f, "DOMMouseScroll", aa, !1);
      } else {
        for (; e = r[++d];) {
          e = Oa(e), e.onwheel !== q ? ca(e, "wheel", A, {passive:!1}) : eb ? ca(e, "MozMousePixelScroll", A, !1) : (e.onmousewheel !== q || 9 <= D) && ca(e, "mousewheel", A, !1);
        }
      }
      8 > D || jb || 6 > u || (u || va ? ca(Z, "focusin", U, !1) : B ? ca(f, "focus", U, {capture:!0, passive:!1}) : ca(Z, "DOMFocusIn", U, !1));
      Da && clearInterval(Da);
    }));
    var Da, c, h;
    6 > u && gb(function(d) {
      if (!La) {
        return !0;
      }
      d ? Da = setInterval(K, 333) : Da && (clearInterval(Da), Da = 0);
    });
    ra(function() {
      function d(Ea, H, P, na) {
        var W = na ? "div" : "cite";
        if (0 === H.indexOf("urn:isbn:")) {
          H = H.substr(9).toUpperCase().split("-").join("");
          if (13 === H.length) {
            H = H.toString().slice(3, -1);
            for (var Q = 0, X = 0; 9 > X; X++) {
              Q += (H.charAt(X) - 0) * (10 - X);
            }
            Q = (11 - Q % 11) % 11;
            Q = 10 === Q ? "X" : Q.toString();
            H += Q;
          }
          10 === H.length && (H = "//www.amazon.co.jp/exec/obidos/ASIN/" + H + "/itozyun-22/ref=nosim/");
        }
        P = na ? Bb(Ab(k), W, {className:P}) : xa(k, W, {className:P});
        xa(P, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:H, I:D ? "0" : q} : {href:H, I:D ? "0" : q}, Ea);
      }
      if (La) {
        for (var e = zb(La, "blockquote"), k, x = -1, F, C; k = e[++x];) {
          F = la(k, "title"), C = la(k, "cite"), F && C ? (qa(k, "title"), d(F, C, "js-bqLink", !0)) : C && (qa(k, "cite"), d(l.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var y, n, z, S, ka, ma, Jb;
    ra(function() {
      var d = Oa("blog2slide-start");
      if (d) {
        var e = f.onfullscreenchange !== q ? "f" : f.onmozfullscreenchange !== q ? "mozF" : f.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        y = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== e || y ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', Y(d.firstChild, "click", ia), d = wa(d), n = wa(d), ka = zb(d, "section"), z = f.createElement("h1"), z.innerHTML = Pa("h1")[0].innerHTML, Jb = ka.length, ka.splice(0, 0, z), 0 !== e ? Y(f, e + "ullscreenchange", a) : u ? Y(f, "MSFullscreenChange", a, !1) : Eb(a)) : Ha(d);
      }
    });
  })();
  ub = f.scripts || Pa("script");
  var sa = ub[ub.length - 1].src.split("/");
  --sa.length;
  "js" === sa[sa.length - 1] && --sa.length;
  (sa = sa.join("/")) && (sa += "/");
  var Zb = $b || "1" === la(ea, "mob");
  kb = (Zb ? "mb" : "pc") + "/";
  6.1 > oa && pb(Rb);
  Ua(Sb);
  6.1 > oa && pb(Tb);
  Ua(Ub);
  10 > u && (11 !== Wa || 5 !== u) || (9 > D || 1 > L || !va && !l.addEventListener ? f.write('<link href="' + sa + "css/" + kb + yb + '" rel="stylesheet"' + (8 > D ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > D || 1.5 > L || 532 >= Ya || 2 > Ma || 4 <= Ma && 8 > Ma) && ra(function() {
    xa(Xa, "link", {href:sa + "css/" + kb + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

