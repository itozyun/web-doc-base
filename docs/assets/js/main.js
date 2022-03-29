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
  var T = arguments, f = T.length - 2 - l, Va = this.slice(J, J + l), pa;
  if (0 < f) {
    var R = this.length - 1;
    for (pa = J + l; R >= pa; --R) {
      this[R + f] = this[R];
    }
  } else if (0 > f) {
    R = J + l;
    for (pa = this.length; R < pa; ++R) {
      this[R + f] = this[R];
    }
    this.length += f;
  }
  R = 2;
  for (pa = T.length; R < pa; ++R) {
    this[R - 2 + J] = T[R];
  }
  return Va;
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
(function(J, l, T, f, Va, pa, R, ub, r) {
  function N(q) {
    if (J[0] === q) {
      return Ea === Ea + "" ? R(Ea) : Ea;
    }
  }
  function ha(q) {
    var G = J[3];
    if (J[2] === q) {
      return G === G + "" ? R(G) : G;
    }
  }
  var ea = f.body, Fa = ea.style, Ka, Wa, La, Ea = J[1], u = N(2) || N(3), va = N(7), vb = N(5) || N(6), D = N(8) || N(9), K = N(11) || N(12), eb = K && 0 <= J.conpare(Ea, "1.9.1"), wb = N(13), Xa = N(15);
  pa = N(16) || N(17);
  var Kb = N(10) || N(25), Ma = N(20) || N(22);
  Ma || N(23) || N(21) || N(24);
  var Lb = Ma && R(Va.userAgent.split("Edg/")[1]);
  Va = R(Va.appVersion.split("Trident/")[1]) + 4;
  var xb = ha(35) || ha(36) || ha(37), Mb = !u && !va && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), yb = (va ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > D ? "opr70" : 8 > D ? "opr72" : 9.5 > D ? "opr" + (D | 0) : K && !eb ? 1.3 <= K ? "gck190" : 1 <= K ? "gck121" : "gck097" : "modern") + ".css", kb = "", $b = ha(1) || ha(2) || ha(3) || 
  ha(4) || ha(8) || ha(9) || ha(10), Nb, Ob = Fa.transform !== r ? "transform" : Fa["-o-transform"] !== r ? "-o-transform" : Fa["-ms-transform"] !== r ? "-ms-transform" : Fa.MozTransform !== r ? "-moz-transform" : Fa["-webkit-transform"] !== r ? "-webkit-transform" : "", Na = [], Pb = [], Qb, qa, lb, mb, Rb, Sb, Tb, Ub;
  (function() {
    function q() {
      for (var b, g = 0, m = new Date() - 0; g < L.length;) {
        m < L[0].t ? ++g : (b = L.splice(g, 1)[0], b.f(b.p));
      }
      a = L.length ? setTimeout(q, ia) : 0;
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
      w.push({f:b, v:++fa});
      return fa;
    };
    Rb = function() {
      U && (p(), U = setInterval(G, A));
    };
    Sb = p;
    var w = [], A = 500, fa = 0, U;
    if (5 > u || va) {
      l._wdb_onlooptimer = G, G = "_wdb_onlooptimer()";
    }
    qa = function(b, g, m) {
      L.length || (a = setTimeout(q, ia));
      L.push({f:b, p:g, v:++ja, t:new Date() - 0 + (ia < m ? m : ia)});
      return ja;
    };
    lb = function(b) {
      for (var g = L.length, m; m = L[--g];) {
        if (m.v === b) {
          L.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    Tb = function() {
      a && (v(), a = setTimeout(q, ia));
    };
    Ub = v;
    var L = [], ia = 16, ja = 0, a;
    if (5 > u || va) {
      l._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var Oa, Pa, zb, wa, Qa, Vb, Ab, xa, Bb, Wb, Ga, fb, nb, ma, Ya, ya, Cb, Xb, ob, Db, Ra, Sa, Za;
  (function() {
    function q(a, b, g) {
      var m = ["<", a], t = 1, B, V;
      if (b) {
        for (B in b) {
          var M = b[B];
          if (null != M && "" !== M) {
            if ("style" === B) {
              m[++t] = ' style="';
              for (V in M) {
                for (var ka = ++t, F, I = [], O = V.split(""), za = O.length; za;) {
                  F = O[--za], "A" <= F && "Z" >= F && (F = "-" + F.toLowerCase()), I[za] = F;
                }
                m[ka] = I.join("") + ":" + M[V] + ";";
              }
              m[++t] = '"';
            } else {
              "className" === B && (B = "class"), m[++t] = " " + B + '="' + M + '"';
            }
          }
        }
      }
      m[++t] = ">";
      null != g && (L && "font" !== a ? m[++t] = "<FONT>" + g + "</FONT>" : m[++t] = g);
      m[++t] = "</" + a + ">";
      return m.join("");
    }
    function G(a) {
      return p(f, a);
    }
    function p(a, b) {
      var g = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], t = 0, B;
      for (B = g.length; t < B; ++t) {
        m[t] = g[t];
      }
      return m;
    }
    function v(a) {
      return L ? a.parentElement : a.parentNode;
    }
    function w(a, b, g, m, t, B) {
      if (L) {
        var V = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", M = Qa(2 > a ? wa(b) : b);
        M = 2 > a ? M.indexOf(b) + a : M.length;
        b.insertAdjacentHTML(V, q(g, m, t));
        return Qa(b)[M];
      }
      b = ia ? f.createElement(q(g, m)) : B ? f.createElementNS("http://www.w3.org/2000/svg", g) : f.createElement(g);
      if (m && !ia) {
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
                Ya(b, V, g);
            }
          }
        }
      }
      ja || null != t && A(b, t);
      return b;
    }
    function A(a, b) {
      if (L) {
        return w(2, a, "font", r, b);
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
    var L = 5 > u;
    Ka = G("html")[0];
    Wa = G("head")[0];
    Oa = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    Pa = G;
    zb = p;
    wa = v;
    Qa = function(a) {
      a = L ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Vb = function(a) {
      var b = !(7.03 < D && 7.2 > D) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], m = a.length, t = -1, B; m;) {
        if (B = a[--m], b || 1 === B.nodeType) {
          L && "FONT" === B.tagName || (g[++t] = B);
        }
      }
      return g;
    };
    Ab = function(a) {
      return L ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    xa = function(a, b, g, m, t) {
      b = w(2, a, b, g, m, t);
      L || (a.appendChild(b), ja && null != m && A(b, m));
      return b;
    };
    Bb = function(a, b, g, m, t) {
      b = w(0, a, b, g, m, t);
      L || (v(a).insertBefore(b, a), ja && null != m && A(b, m));
      return b;
    };
    Wb = A;
    Ga = function(a) {
      L ? a.outerHTML = "" : wa(a).removeChild(a);
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
    var ia = 9 > u, ja = 9 > u;
    nb = function(a) {
      return a.tagName.toUpperCase();
    };
    ma = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Ya = function(a, b, g) {
      a.setAttribute(b, g);
    };
    ya = function(a, b) {
      a.removeAttribute(b);
    };
    Cb = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Xb = function(a) {
      return a.className;
    };
    ob = fa;
    Db = U;
    Ra = function(a, b) {
      var g;
      if (!U(a, b)) {
        if (g = a.className) {
          b = " " + b;
        }
        fa(a, g + b);
      }
    };
    Sa = function(a, b, g) {
      a.style[b] = g;
    };
    Za = function(a, b) {
      var g = -1, m, t;
      if (5.5 > u) {
        if (b) {
          for (m = b.split(";"); t = m[++g];) {
            var B = t.split(":");
            a.style[B[0]] = t.substr(B[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > D || 1 > K ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    Na.splice(0, 0, function() {
      function a(M) {
        M = Qa(M);
        for (var ka = M.length, F, I, O; ka;) {
          if (F = M[--ka], I = F.nodeType, 8 === I) {
            b && B.push(F);
          } else if (1 === I) {
            switch(I = nb(F), "/" === I.charAt(0) && (I = I.substr(1), V[I] = !0), I) {
              case "STYLE":
                if (7.2 <= D && 9 > D) {
                  break;
                }
              case "LINK":
                L || g || fb(Wa, F) || t.push(F);
                break;
              case "META":
                I = ma(F, "name") || ma(F, "property");
                for (O = m.length; O;) {
                  if (0 === I.indexOf(m[--O])) {
                    B.push(F);
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
                B.push(F);
                break;
              case "SOURCE":
                l.HTMLSourceElement || B.push(F);
                break;
              default:
                V[I] ? B.push(F) : Qa(F).length && a(F);
            }
          }
        }
        for (; t[0];) {
          Wa.appendChild(t.pop());
        }
        for (; B[0];) {
          Ga(B.pop());
        }
      }
      La = Oa("jsMain");
      var b = !(8 > D || 5 > u || va || .9 > K), g = 7 > u, m = ["og:", "twitter:", "fb:"], t = [], B = [], V = {};
      a(Ka);
    });
  })();
  var Y, ba, ra, Ta, Eb, pb, gb, hb, Fb, ib, ca, Gb;
  (function() {
    function q() {
      return Z ? $a ? 2 : Ua ? 3 : 1 : 0;
    }
    function G(c) {
      ba(l, "load", G);
      G = r;
      v(Na, c, !0);
      ra = Na = r;
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
      m && !g.length && qa(A);
      g.push(c, h, y);
    }
    function A() {
      var c = g, h;
      for (g = []; h = c.shift();) {
        v(h, c.shift(), c.shift());
      }
    }
    function fa(c) {
      var h = c || event;
      c = t[h.type];
      var y = -1, n, z;
      for (u ? (h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : V && (h.u = h.stopPropagation, h.stopPropagation = function() {
        z = !0;
      }); n = c[++y];) {
        n.i === this ? (this.g = n.h, this.g(h), this.g = T, this.g = r) : 7.2 > D && this === f && n.i === l && (l.g = n.h, l.g(h), delete l.g);
      }
      if (u) {
        return h.preventDefault = h.stopPropagation = r, h.returnValue;
      }
      V && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (ka = !0), z && !ka && h.u(), h.u = h.stopPropagation = r);
    }
    function U() {
      var c = 9 === b.offsetWidth;
      ib !== c && w(Pb, ib = c);
    }
    function L() {
      !Na && da && (lb(da), da = qa(ia));
    }
    function ia() {
      da = 0;
      v(Ha);
    }
    function ja(c) {
      Na || v(ab, c);
    }
    var a = l.matchMedia, b, g = [], m;
    Na.push(function() {
      p = r;
      b = xa(ea, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ra(function() {
        m = !0;
        g.length && qa(A);
      });
    });
    Y = function(c, h, y, n) {
      if (M) {
        c.addEventListener(h, y, n ? Mb ? n : n.capture : !1);
      } else {
        var z = {i:c, h:y};
        n = t[h];
        var S = "on" + h, la, na;
        if (n) {
          for (la = n.length; na = n[--la];) {
            if (na.i === c && na.h === y) {
              return;
            }
          }
          t[h].push(z);
        } else {
          t[h] = n = [z], B || (h = c[S], "function" === typeof h && h !== fa && n.unshift({i:c, h:h}));
        }
        B ? c.attachEvent(S, fa) : c[S] = fa;
      }
    };
    ba = function(c, h, y, n) {
      if (M) {
        c.removeEventListener(h, y, n ? Mb ? n : n.capture : !1);
      } else {
        n = t[h];
        h = "on" + h;
        var z, S, la;
        if (n) {
          for (z = n.length; S = n[--z];) {
            S.i === c && (S.h === y ? n.splice(z, 1) : la = !0);
          }
          la || (B ? c.detachEvent(h, fa) : (c[h] = T, c[h] = null));
        }
      }
    };
    var t = {}, B = !1, V = 525.13 > Xa, M = !V && !va && l.addEventListener, ka;
    V && Ka.addEventListener("click", function(c) {
      if (ka) {
        return ka = !1, c.preventDefault(), !1;
      }
    });
    ra = function(c) {
      Na.push(c);
    };
    Ta = function(c) {
      F && F.push(c);
    };
    var F = [];
    if (419.3 >= Xa) {
      var I = function() {
        if (I) {
          var c = f.readyState;
          "loaded" === c || "complete" === c ? (I = r, G()) : qa(I);
        }
      };
      qa(I);
    } else {
      Y(l, "load", G);
    }
    u || 1.8 > K ? Y(l, "unload", function(c) {
      v(F, c, !0);
    }) : F = r;
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
    var O = [], za = 60 > K || wb, Z, Ua, $a;
    if (89 <= K || 89 <= Ma || xb && 79 <= Lb || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Gb = !0, p("(forced-colors:active)", function(c) {
        Z = c.matches;
        ca = q();
        w(O, ca);
      });
    } else if (10 <= u || vb || xb && Lb) {
      Gb = !0, p("(-ms-high-contrast:black-on-white)", function(c) {
        Z = Ua = c.matches;
        ca !== q() && (ca = q(), w(O, ca));
      }), p("(-ms-high-contrast:white-on-black)", function(c) {
        Z = $a = c.matches;
        ca !== q() && (ca = q(), w(O, ca));
      }), p("(-ms-high-contrast:active)", function(c) {
        Z = c.matches;
        ca !== q() && (ca = q(), w(O, ca));
      });
    } else if (xb && (u || K && 0 <= J.conpare(Ea, "1.8.1") || wb)) {
      var Ia = function() {
        function c(z, S) {
          return "#000000" === z || "rgb(0,0,0)" === z || S && "transparent" === z;
        }
        function h(z, S) {
          return "#ffffff" === z || "rgb(255,255,255)" === z || S && "transparent" === z;
        }
        var y = f.defaultView, n = y ? y.getComputedStyle(b, null) : b.currentStyle;
        y = (n && n.color || "").split(" ").join("");
        n = (n && n.backgroundColor || "").split(" ").join("");
        y && (Z = "#123456" !== y && "rgb(18,52,86)" !== y, Ua = c(y) && h(n, !0), $a = h(y) && c(n, !0), ca !== q() && (ca = q(), w(O, ca, za)));
      };
      gb(function(c) {
        if (c) {
          return Sa(b, "color", "#123456"), Sa(b, "backgroundColor", "#123456"), za ? (Ia(), O = r) : mb(Ia), Ia = r, !0;
        }
      });
    } else {
      O = q = r;
    }
    hb = function(c) {
      Aa.push(c);
    };
    var Aa = [], Ba = 7.5 <= D && 8 > D;
    Ba && function() {
      for (var c = f.images, h = c.length, y; h;) {
        y = c[--h], y.s = y.src, ya(y, "src");
      }
    }();
    ra(function() {
      function c() {
        n ? (z = y[--n], Ba && Ya(z, "src", z.s), Qb(h, Ba ? z.s : z.src)) : hb = Aa = r;
      }
      function h(S) {
        v(Aa, {m:z, o:S}, !n);
        c();
      }
      var y = f.images || Pa("img"), n = y.length;
      if (12 > D || 532 > Xa) {
        c();
      } else {
        for (; n;) {
          var z = y[--n];
          w(Aa, {m:z, o:9 > u ? z.complete : 0 <= z.naturalWidth ? z.naturalWidth : z.width}, !n);
        }
        hb = Aa = r;
      }
    });
    Eb = function(c) {
      Ha.push(c);
    };
    var Ha = [], da;
    Y(l, "resize", L);
    Ta(function() {
      da && clearTimeout(da);
      ba(l, "resize", L);
    });
    pb = function(c) {
      ab.push(c);
    };
    var ab = [], jb = 0, Ca = 1 > K || 1.2 <= K && 1.8 > K || 7.2 >= D;
    Ca ? mb(function() {
      var c = l.scrollY || ea.scrollTop;
      jb !== c && (jb = c, ja());
    }) : Y(l, "scroll", ja);
    Ta(function() {
      Ca || ba(l, "scroll", ja);
    });
  })();
  (function() {
    var q = 1 > K || 8 <= D && 9 > D, G = 7.2 <= D && 8 > D;
    u || !q && !G && function() {
      var p = xa(Ka, "style"), v = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return v;
    }() || !Xa || q || G || function() {
      var p = xa(Ka, "style");
      Wb(p, "");
      var v = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return v;
    }();
  })();
  (function() {
    9 > u && ra(function() {
      var q = xa(ea, "div");
      Za(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Nb = 1 < q.offsetHeight;
      Za(q, "");
      Ga(q);
    });
    Qb = function(q, G) {
      function p() {
        w || !A || v.complete ? (qa(q, !!v.width), v.onerror = v.onload = T, v = q = r) : (--A, qa(p));
      }
      var v = new Image(), w, A = 99;
      v.onerror = function() {
        w = !0;
      };
      v.onload = function() {
        w = !0;
      };
      v.src = G;
      qa(p);
    };
  })();
  (function() {
    if (!Gb) {
      var q, G = function() {
        q = xa(Wa, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:sa + "css/" + kb + "hc/" + yb});
        (Ob || 5.5 <= u && 9 > u && Nb) && Ra(ea, "jsCanRotate");
        G = r;
      };
      Fb(function(p) {
        p && !q ? G() : q && (p ? Wa.appendChild(q) : Ga(q));
      });
    }
    hb(function(p) {
      var v = p.m;
      p = p.o;
      var w = wa(v);
      !Db(w, "aBodyRoot") && p ? Ra(w, "img-loaded") : p || ma(v, "alt") || Sa(v, "display", "none");
    });
    5.5 <= u && 8 > u && Fb(function(p) {
      for (var v = Pa("a"), w = v.length, A = 0; A < w; ++A) {
        v[A].hideFocus = !p;
      }
    });
    D && ra(function() {
      for (var p = Pa("a"), v = p.length, w = 0, A; w < v; ++w) {
        A = p[w], "-1" === ma(A, "tabindex") ? ya(A, "tabindex") : ma(A, "href") && Ya(A, "tabindex", "0");
      }
      p = Pa("input");
      w = 0;
      for (v = p.length; w < v; ++w) {
        A = p[w], "hidden" === ma(A, "type") && ya(A, "tabindex");
      }
    });
  })();
  (function() {
    function q(d) {
      var e = d.keyCode || d.L, k = m.length, x, E, C, Da;
      if ("keydown" !== d.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var H = x = e.j;
            if (e.C) {
              if (Sa(k, "width", e.K), k.src = e.J, ob(H, e.F), k = e.A) {
                Za(k, e.D), ob(k, "caption jsCap");
              }
            } else {
              if (E = e.B) {
                for (delete e.B; x = wa(x);) {
                  if (Db(x, "caption")) {
                    e.A = x, e.D = x.style.cssText, Ra(x, "jsCap");
                  } else {
                    var P = nb(x);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                x = x.offsetWidth - 4 - 1;
                1600 < x && (x = 1600);
                if (e.G && 0 < E.split("/").pop().indexOf("=")) {
                  E = E.split("=");
                  P = E.length;
                  if (C = E[P - 1]) {
                    (Da = R(C.substr(1))) && C === "s" + Da ? E[P - 1] = "w" + x : E[P] = "w" + x;
                  }
                  E = E.join("=");
                } else if (0 < E.indexOf(".bp.blogspot.com/")) {
                  E = E.split("/");
                  P = E.length;
                  if (C = E[P - 2]) {
                    (Da = R(C.substr(1))) && C === "s" + Da ? E[P - 2] = "w" + x : E.splice(P - 1, 0, "w" + x);
                  }
                  E = E.join("/");
                }
                e.H = E;
              }
              e.F = Xb(H);
              Ra(H, "jsPicaLarge");
              Sa(k, "width", "");
              k.src = e.H;
              if (k = e.A) {
                Za(k, ""), Ra(k, "jsCapLarge");
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
      var e = Ba;
      if (ib) {
        if (Ha && !e) {
          if (new Date() - 0 < Ha) {
            return;
          }
          Ha = r;
        }
        7 === d ? da = 0 : (da && (da = lb(da)), Ia = p(l.pageYOffset, l.scrollY, I.scrollTop, ea.scrollTop));
        e ? (Ba = w(r, e[0], e[1])) || (Ha = new Date() - 0 + 99) : w();
      } else {
        Ba = r;
      }
    }
    function w(d, e, k) {
      function x(ta) {
        H = ta;
        if (Ua) {
          P = Ua + ":translate" + (Aa ? "3D(0," : "(0,") + ta + (Aa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ta) {
          if (!F && (ka || M)) {
            var qb = O.offsetWidth;
          }
          P = M ? "position:fixed;width:" + qb + "px;top:" + (ta - E + Q) + "px" : F ? "top:" + ta + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ta + "px";
          ka && P && (P += ";" + (0 > ta ? "clip:rect(" + -ta + "px " + qb + "px " + aa + "px 0)" : ta + aa < rb ? "clip:rect(0 " + qb + "px " + aa + "px 0)" : "clip:rect(0 " + qb + "px " + (rb - ta) + "px 0)"), 8 > u || (P = P.split(" ").join(",")));
        }
      }
      var E = Ia, C = za, Da = O.offsetTop === C.offsetTop, H = 0, P = "", oa = !0;
      if (Da) {
        for (var W = 0, Q = 0, X = C; X && X !== ea;) {
          Q += X.offsetTop, X = X.offsetParent;
        }
        H = $a;
        var Hb = p(l.innerHeight, I.offsetHeight), Ib = C.offsetHeight, aa = Z.offsetHeight, rb = aa < Ib ? Ib : aa, Ja = E, bb = Ja + Hb, sb = Q, tb = sb + rb, Yb = Q + H, ac = Yb + aa;
        C = Ja < sb ? sb : Ja;
        X = tb < bb ? tb : bb;
        var cb = X - C;
        Ja = tb <= Ja;
        bb = bb <= sb;
        if (e !== r) {
          oa = Q + e;
          d = oa + k;
          var db;
          if (Ja || bb) {
            return Hb <= k ? db = Q : db = Ja ? tb - k : Q + k - Hb, Ha = r, l.scroll(p(l.pageXOffset, l.scrollX, I.scrollLeft, ea.scrollLeft), db), Ba;
          }
          aa <= cb ? W = 4 : k <= cb ? aa - e <= cb ? W = 2 : C <= oa && d <= X ? C < Q + H && (W = 4) : W = C <= oa && oa <= X ? 5 : C <= d && d <= X ? 4 : d < C ? 4 : 5 : W = 4;
          oa = r;
        } else {
          d !== r ? aa <= cb ? (W = 7, oa = !1) : (H -= 60 * d, W = X - Q - aa, db = C - Q, H < W ? H = W : db < H && (H = db), W = 6) : Ib <= aa || (Ja ? W = 1 : bb || (aa <= cb ? W = 3 : C < Yb ? W = 3 : ac < X ? W = 2 : E < Q + aa - cb || (W = 2)));
        }
        switch(W) {
          case 0:
            x(0);
            break;
          case 1:
            x(rb - aa);
            break;
          case 2:
            x(X - Q - aa);
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
      return Da && oa;
    }
    function A(d) {
      if (ib) {
        K && (Ia = p(l.pageYOffset, I.scrollTop, ea.scrollTop));
        var e = this !== d.target, k = e && p(d.deltaY, d.wheelDeltaY / 120, d.wheelDelta / -120, d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1));
        e && k && w(9 >= k ? -9 >= k ? -3 : k : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function fa(d) {
      for (var e = d.target, k = -1, x; x = t[++k];) {
        fb(x, e) && A(d);
      }
    }
    function U(d) {
      if (ib) {
        var e = !!Ua || K, k = d.target || d.srcElement;
        d = 0;
        var x;
        if (fb(Z, k)) {
          for (x = k.offsetHeight; k && (e ? fb(Z, k) : Z !== k);) {
            d += k.offsetTop, k = k.offsetParent;
          }
          V ? (Ba = [d, x], da && lb(da), da = qa(v, 7, 1 > K ? 500 : 0)) : (Ia = p(l.pageYOffset, l.scrollY, I.scrollTop, ea.scrollTop), w(r, d, x));
        }
      }
    }
    function L() {
      h = l.onerror;
      l.onerror = ia;
      var d = f.activeElement;
      c !== d && (c = d, U({target:d}));
      l.onerror = h;
      h = r;
    }
    function ia() {
      l.onerror = h;
      h = c = r;
      return !0;
    }
    function ja() {
      y.call(n);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Ya(n, "id", "blog2slide-root"), la[1].parentNode.insertBefore(z, la[1]), b(), f.onkeydown = g) : S && (Ga(z), ya(n, "id"), ya(S, "id"), S = f.onkeydown = r);
    }
    function b() {
      S && ya(S, "id");
      na = 0 < na ? Jb < na ? Jb : na : 0;
      S = la[na];
      Ya(S, "id", "blog2slide-current");
    }
    function g(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++na, b();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --na, b();
      }
    }
    var m = [];
    Kb || (hb(function(d) {
      if (d.o && La) {
        d = d.m;
        var e = wa(d), k = "", x;
        if ("A" === nb(e) && 1 === Vb(e).length) {
          var E = ma(e, "href"), C = E.split("?")[0].split("#")[0].split(".");
          C = (C[C.length - 1] || "").toLowerCase();
          if ((x = 0 < E.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
            Y(e, "keydown", q), Y(d, "click", q), Y(e, "click", G), 9 > D || (k = d.offsetWidth - 4 + "px", Sa(d, "width", k)), Ra(e, "jsPica"), m.push({j:e, J:d.src, K:k, B:E, l:d, G:x});
          }
        }
      }
    }), Ta(function(d, e) {
      for (d = -1; e = m[++d];) {
        ba(e.j, "keydown", q), ba(e.l, "click", q), ba(e.j, "click", G);
      }
    }));
    var t = ["jsSidebarFixer1", "jsSidebarFixer2"], B = K || wb || vb, V = !(6 <= u && 9 > u || D || 1 <= K && 1.3 > K), M = !(5 > N(16) || 5 > N(17) || 2.2 > N(21) || 6 > N(12) || ha(30) && 534 > Xa || ha(32) || 7 > u || 9 > D || 1 > K), ka = M || 7 > u || 1 > K, F = 7.5 > D, I, O, za, Z, Ua = Ob, $a = 0, Ia = 0, Aa, Ba, Ha, da, ab = K && 0 <= J.conpare(Ea, "0.9.7"), jb = K && 0 >= J.conpare(Ea, "0.9.4");
    Zb || Kb || (gb(function(d) {
      if (d) {
        if (!La) {
          return !0;
        }
        d = -1;
        var e;
        I = "CSS1Compat" !== f.compatMode ? ea : Ka || ea;
        O = Oa("jsSide");
        za = La;
        if (!O) {
          return !0;
        }
        pb(v);
        Eb(v);
        Z = Bb(Ab(O), "div", {id:"jsSidebarFixer"});
        for (8 > D || jb || 6 > u || (u || va ? Y(Z, "focusin", U) : B ? Y(f, "focus", U, {capture:!0, passive:!1}) : Y(Z, "DOMFocusIn", U, !1)); 1 < Qa(O).length;) {
          Z.appendChild(Qa(O)[1]);
        }
        for (ab && !eb && Y(f, "DOMMouseScroll", fa, !1); e = t[++d];) {
          var k = Oa(e);
          k.onwheel !== r ? Y(k, "wheel", A, {passive:!1}) : eb ? Y(k, "MozMousePixelScroll", A, !1) : ab ? t[d] = Oa(e) : (k.onmousewheel !== r || 9 <= D) && Y(k, "mousewheel", A, !1);
        }
        u || vb || 2 > Ma || (Aa = Fa.perspective !== r || Fa.MozPerspective !== r || Fa["-webkit-perspective"] !== r);
        v();
        return !0;
      }
    }), Ta(function() {
      var d = -1, e;
      if (ab && !eb) {
        ba(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; e = t[++d];) {
          e = Oa(e), e.onwheel !== r ? ba(e, "wheel", A, {passive:!1}) : eb ? ba(e, "MozMousePixelScroll", A, !1) : (e.onmousewheel !== r || 9 <= D) && ba(e, "mousewheel", A, !1);
        }
      }
      8 > D || jb || 6 > u || (u || va ? ba(Z, "focusin", U, !1) : B ? ba(f, "focus", U, {capture:!0, passive:!1}) : ba(Z, "DOMFocusIn", U, !1));
      Ca && clearInterval(Ca);
    }));
    var Ca, c, h;
    6 > u && gb(function(d) {
      if (!La) {
        return !0;
      }
      d ? Ca = setInterval(L, 333) : Ca && (clearInterval(Ca), Ca = 0);
    });
    ra(function() {
      function d(Da, H, P, oa) {
        var W = oa ? "div" : "cite";
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
        P = oa ? Bb(Ab(k), W, {className:P}) : xa(k, W, {className:P});
        xa(P, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:H, I:D ? "0" : r} : {href:H, I:D ? "0" : r}, Da);
      }
      if (La) {
        for (var e = zb(La, "blockquote"), k, x = -1, E, C; k = e[++x];) {
          E = ma(k, "title"), C = ma(k, "cite"), E && C ? (ya(k, "title"), d(E, C, "js-bqLink", !0)) : C && (ya(k, "cite"), d(l.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var y, n, z, S, la, na, Jb;
    ra(function() {
      var d = Oa("blog2slide-start");
      if (d) {
        var e = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        y = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== e || y ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', Y(d.firstChild, "click", ja), d = wa(d), n = wa(d), la = zb(d, "section"), z = f.createElement("h1"), z.innerHTML = Pa("h1")[0].innerHTML, Jb = la.length, la.splice(0, 0, z), 0 !== e ? Y(f, e + "ullscreenchange", a) : u ? Y(f, "MSFullscreenChange", a, !1) : Eb(a)) : Ga(d);
      }
    });
  })();
  ub = f.scripts || Pa("script");
  var sa = ub[ub.length - 1].src.split("/");
  --sa.length;
  "js" === sa[sa.length - 1] && --sa.length;
  (sa = sa.join("/")) && (sa += "/");
  var Zb = $b || "1" === ma(ea, "mob");
  kb = (Zb ? "mb" : "pc") + "/";
  6.1 > pa && pb(Rb);
  Ta(Sb);
  6.1 > pa && pb(Tb);
  Ta(Ub);
  10 > u && (11 !== Va || 5 !== u) || (9 > D || 1 > K || !va && !l.addEventListener ? f.write('<link href="' + sa + "css/" + kb + yb + '" rel="stylesheet"' + (8 > D ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > D || 1.5 > K || 532 >= Xa || 2 > Ma || 4 <= Ma && 8 > Ma) && ra(function() {
    xa(Wa, "link", {href:sa + "css/" + kb + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

