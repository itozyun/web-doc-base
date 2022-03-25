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
  var T = arguments, f = T.length - 2 - l, Ua = this.slice(J, J + l), oa;
  if (0 < f) {
    var R = this.length - 1;
    for (oa = J + l; R >= oa; --R) {
      this[R + f] = this[R];
    }
  } else {
    if (0 > f) {
      R = J + l;
      for (oa = this.length; R < oa; ++R) {
        this[R + f] = this[R];
      }
      this.length += f;
    }
  }
  R = 2;
  for (oa = T.length; R < oa; ++R) {
    this[R - 2 + J] = T[R];
  }
  return Ua;
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
(function(J, l, T, f, Ua, oa, R, ub, q) {
  function N(t) {
    if (J[0] === t) {
      return Ea === Ea + "" ? R(Ea) : Ea;
    }
  }
  function fa(t) {
    var F = J[3];
    if (J[2] === t) {
      return F === F + "" ? R(F) : F;
    }
  }
  var da = f.body, Fa = da.style, Ka, Va, La, Ea = J[1], u = N(2) || N(3), ta = N(7), vb = N(5) || N(6), A = N(8) || N(9), L = N(11) || N(12), eb = L && 0 <= J.conpare(Ea, "1.9.1"), wb = N(13), Wa = N(15);
  oa = N(16) || N(17);
  var Jb = N(10) || N(25), Ma = N(20) || N(22);
  Ma || N(23) || N(21) || N(24);
  var Kb = Ma && R(Ua.userAgent.split("Edg/")[1]);
  Ua = R(Ua.appVersion.split("Trident/")[1]) + 4;
  var xb = fa(35) || fa(36) || fa(37), Lb = !u && !ta && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), yb = (ta ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : L && !eb ? 1.3 <= L ? "gck190" : 1 <= L ? "gck121" : "gck097" : "modern") + ".css", kb = "", $b = fa(1) || fa(2) || fa(3) || 
  fa(4) || fa(8) || fa(9) || fa(10), Mb, Nb = Fa.transform !== q ? "transform" : Fa["-o-transform"] !== q ? "-o-transform" : Fa["-ms-transform"] !== q ? "-ms-transform" : Fa.MozTransform !== q ? "-moz-transform" : Fa["-webkit-transform"] !== q ? "-webkit-transform" : "", Na = [], Ob = [], Pb, pa, lb, mb, Qb, Rb, Sb, Tb;
  (function() {
    function t() {
      for (var b, g = 0, m = new Date - 0; g < K.length;) {
        m < K[0].t ? ++g : (b = K.splice(g, 1)[0], b.f(b.p));
      }
      a = K.length ? setTimeout(t, ha) : 0;
    }
    function F() {
      for (var b, g = 0; g < y.length; ++g) {
        b = y[g], b.f();
      }
    }
    function p() {
      U && (U = clearInterval(U));
    }
    function v() {
      a && (a = clearTimeout(a));
    }
    mb = function(b) {
      y.length || (U = setInterval(F, G));
      y.push({f:b, v:++ea});
      return ea;
    };
    Qb = function() {
      U && (p(), U = setInterval(F, G));
    };
    Rb = p;
    var y = [], G = 500, ea = 0, U;
    if (5 > u || ta) {
      l._wdb_onlooptimer = F, F = "_wdb_onlooptimer()";
    }
    pa = function(b, g, m) {
      K.length || (a = setTimeout(t, ha));
      K.push({f:b, p:g, v:++ia, t:new Date - 0 + (ha < m ? m : ha)});
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
    Sb = function() {
      a && (v(), a = setTimeout(t, ha));
    };
    Tb = v;
    var K = [], ha = 16, ia = 0, a;
    if (5 > u || ta) {
      l._wdb_ontimer = t, t = "_wdb_ontimer()";
    }
  })();
  var Oa, Xa, zb, va, Pa, Ub, Ab, wa, Bb, Vb, Ga, fb, nb, la, Ya, xa, Cb, Wb, ob, Db, Qa, Ra, Za;
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
                for (var ja = ++r, D, I = [], O = V.split(""), Ha = O.length; Ha;) {
                  D = O[--Ha], "A" <= D && "Z" >= D && (D = "-" + D.toLowerCase()), I[Ha] = D;
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
    function F(a) {
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
    function y(a, b, g, m, r, B) {
      if (K) {
        var V = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", M = Pa(2 > a ? va(b) : b);
        M = 2 > a ? M.indexOf(b) + a : M.length;
        b.insertAdjacentHTML(V, t(g, m, r));
        return Pa(b)[M];
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
                Ya(b, V, g);
            }
          }
        }
      }
      ia || null != r && G(b, r);
      return b;
    }
    function G(a, b) {
      if (K) {
        return y(2, a, "font", q, b);
      }
      var g = f.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function ea(a, b) {
      9 > u ? a.className = b : a.setAttribute("class", b);
    }
    function U(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var K = 5 > u;
    Ka = F("html")[0];
    Va = F("head")[0];
    Oa = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    Xa = F;
    zb = p;
    va = v;
    Pa = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Ub = function(a) {
      var b = !(7.03 < A && 7.2 > A) && a.children;
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
    wa = function(a, b, g, m, r) {
      b = y(2, a, b, g, m, r);
      K || (a.appendChild(b), ia && null != m && G(b, m));
      return b;
    };
    Bb = function(a, b, g, m, r) {
      b = y(0, a, b, g, m, r);
      K || (v(a).insertBefore(b, a), ia && null != m && G(b, m));
      return b;
    };
    Vb = G;
    Ga = function(a) {
      K ? a.outerHTML = "" : va(a).removeChild(a);
    };
    fb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== Ka;) {
        if (b = va(b), a === b) {
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
    Ya = function(a, b, g) {
      a.setAttribute(b, g);
    };
    xa = function(a, b) {
      a.removeAttribute(b);
    };
    Cb = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Wb = function(a) {
      return a.className;
    };
    ob = ea;
    Db = U;
    Qa = function(a, b) {
      var g;
      if (!U(a, b)) {
        if (g = a.className) {
          b = " " + b;
        }
        ea(a, g + b);
      }
    };
    Ra = function(a, b, g) {
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
        9 > A || 1 > L ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    Na.splice(0, 0, function() {
      function a(M) {
        M = Pa(M);
        for (var ja = M.length, D, I, O; ja;) {
          if (D = M[--ja], I = D.nodeType, 8 === I) {
            b && B.push(D);
          } else {
            if (1 === I) {
              switch(I = nb(D), "/" === I.charAt(0) && (I = I.substr(1), V[I] = !0), I) {
                case "STYLE":
                  if (7.2 <= A && 9 > A) {
                    break;
                  }
                case "LINK":
                  K || g || fb(Va, D) || r.push(D);
                  break;
                case "META":
                  I = la(D, "name") || la(D, "property");
                  for (O = m.length; O;) {
                    if (0 === I.indexOf(m[--O])) {
                      B.push(D);
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
                  B.push(D);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || B.push(D);
                  break;
                default:
                  V[I] ? B.push(D) : Pa(D).length && a(D);
              }
            }
          }
        }
        for (; r[0];) {
          Va.appendChild(r.pop());
        }
        for (; B[0];) {
          Ga(B.pop());
        }
      }
      La = Oa("jsMain");
      var b = !(8 > A || 5 > u || ta || .9 > L), g = 7 > u, m = ["og:", "twitter:", "fb:"], r = [], B = [], V = {};
      a(Ka);
    });
  })();
  var Y, ba, qa, Sa, Eb, pb, gb, hb, Xb, ib, ya, Fb;
  (function() {
    function t() {
      return ya = Z ? $a ? 2 : Ta ? 3 : 1 : 0;
    }
    function F(c) {
      ba(l, "load", F);
      F = q;
      v(Na, c, !0);
      qa = Na = q;
    }
    function p(c, h) {
      gb(function() {
        var x = a(c);
        h(x);
        x.addListener(h);
        return !0;
      });
    }
    function v(c, h, x) {
      for (var n = 0; n < c.length; ++n) {
        !0 === c[n](h) && (c.splice(n, 1), --n);
      }
      x && (c.length = 0);
    }
    function y(c, h, x) {
      m && !g.length && pa(G);
      g.push(c, h, x);
    }
    function G() {
      var c = g, h;
      for (g = []; h = c.shift();) {
        v(h, c.shift(), c.shift());
      }
    }
    function ea(c) {
      var h = c || event;
      c = r[h.type];
      var x = -1, n, z;
      for (u ? (h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : V && (h.u = h.stopPropagation, h.stopPropagation = function() {
        z = !0;
      }); n = c[++x];) {
        n.i === this ? (this.g = n.h, this.g(h), this.g = T, this.g = q) : 7.2 > A && this === f && n.i === l && (l.g = n.h, l.g(h), delete l.g);
      }
      if (u) {
        return h.preventDefault = h.stopPropagation = q, h.returnValue;
      }
      V && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (ja = !0), z && !ja && h.u(), h.u = h.stopPropagation = q);
    }
    function U() {
      var c = 9 === b.offsetWidth;
      ib !== c && y(Ob, ib = c);
    }
    function K() {
      !Na && ca && (lb(ca), ca = pa(ha));
    }
    function ha() {
      ca = 0;
      v(Ia);
    }
    function ia(c) {
      Na || v(ab, c);
    }
    var a = l.matchMedia, b, g = [], m;
    Na.push(function() {
      p = q;
      b = wa(da, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      qa(function() {
        m = !0;
        g.length && pa(G);
      });
    });
    Y = function(c, h, x, n) {
      if (M) {
        c.addEventListener(h, x, n ? Lb ? n : n.capture : !1);
      } else {
        var z = {i:c, h:x};
        n = r[h];
        var S = "on" + h, ka, ma;
        if (n) {
          for (ka = n.length; ma = n[--ka];) {
            if (ma.i === c && ma.h === x) {
              return;
            }
          }
          r[h].push(z);
        } else {
          r[h] = n = [z], B || (h = c[S], "function" === typeof h && h !== ea && n.unshift({i:c, h:h}));
        }
        B ? c.attachEvent(S, ea) : c[S] = ea;
      }
    };
    ba = function(c, h, x, n) {
      if (M) {
        c.removeEventListener(h, x, n ? Lb ? n : n.capture : !1);
      } else {
        n = r[h];
        h = "on" + h;
        var z, S, ka;
        if (n) {
          for (z = n.length; S = n[--z];) {
            S.i === c && (S.h === x ? n.splice(z, 1) : ka = !0);
          }
          ka || (B ? c.detachEvent(h, ea) : (c[h] = T, c[h] = null));
        }
      }
    };
    var r = {}, B = !1, V = 525.13 > Wa, M = !V && !ta && l.addEventListener, ja;
    V && Ka.addEventListener("click", function(c) {
      if (ja) {
        return ja = !1, c.preventDefault(), !1;
      }
    });
    qa = function(c) {
      Na.push(c);
    };
    Sa = function(c) {
      D && D.push(c);
    };
    var D = [];
    if (419.3 >= Wa) {
      var I = function() {
        if (I) {
          var c = f.readyState;
          "loaded" === c || "complete" === c ? (I = q, F()) : pa(I);
        }
      };
      pa(I);
    } else {
      Y(l, "load", F);
    }
    u || 1.8 > L ? Y(l, "unload", function(c) {
      v(D, c, !0);
    }) : D = q;
    gb = function(c) {
      Ob.push(c);
    };
    qa(function() {
      U();
      mb(U);
    });
    Xb = function(c) {
      O && O.push(c);
    };
    var O = [], Ha = 60 > L || wb, Z, Ta, $a;
    if (89 <= L || 89 <= Ma || xb && 79 <= Kb || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Fb = !0, p("(forced-colors:active)", function(c) {
        Z = c.matches;
        y(O, t());
      });
    } else {
      if (10 <= u || vb || xb && Kb) {
        Fb = !0, p("(-ms-high-contrast:black-on-white)", function(c) {
          Z = Ta = c.matches;
          ya !== t() && y(O, ya);
        }), p("(-ms-high-contrast:white-on-black)", function(c) {
          Z = $a = c.matches;
          ya !== t() && y(O, ya);
        }), p("(-ms-high-contrast:active)", function(c) {
          Z = c.matches;
          ya !== t() && y(O, ya);
        });
      } else {
        if (xb && (u || L && 0 <= J.conpare(Ea, "1.8.1") || wb)) {
          var za = function() {
            function c(z, S) {
              return "#000000" === z || "rgb(0,0,0)" === z || S && "transparent" === z;
            }
            function h(z, S) {
              return "#ffffff" === z || "rgb(255,255,255)" === z || S && "transparent" === z;
            }
            var x = f.defaultView, n = x ? x.getComputedStyle(b, null) : b.currentStyle;
            x = (n && n.color || "").split(" ").join("");
            n = (n && n.backgroundColor || "").split(" ").join("");
            x && (Z = "#123456" !== x && "rgb(18,52,86)" !== x, Ta = c(x) && h(n, !0), $a = h(x) && c(n, !0), ya !== t() && y(O, ya));
          };
          gb(function(c) {
            if (c) {
              return Ra(b, "color", "#123456"), Ra(b, "backgroundColor", "#123456"), Ha ? (za(), O = q) : za() && mb(za), za = q, !0;
            }
          });
        } else {
          O = t = q;
        }
      }
    }
    hb = function(c) {
      Aa.push(c);
    };
    var Aa = [], Ba = 7.5 <= A && 8 > A;
    Ba && function() {
      for (var c = f.images, h = c.length, x; h;) {
        x = c[--h], x.s = x.src, xa(x, "src");
      }
    }();
    qa(function() {
      function c() {
        n ? (z = x[--n], Ba && Ya(z, "src", z.s), Pb(h, Ba ? z.s : z.src)) : hb = Aa = q;
      }
      function h(S) {
        v(Aa, {m:z, o:S}, !n);
        c();
      }
      var x = f.images || Xa("img"), n = x.length;
      if (12 > A || 532 > Wa) {
        c();
      } else {
        for (; n;) {
          var z = x[--n];
          y(Aa, {m:z, o:9 > u ? z.complete : 0 <= z.naturalWidth ? z.naturalWidth : z.width}, !n);
        }
        hb = Aa = q;
      }
    });
    Eb = function(c) {
      Ia.push(c);
    };
    var Ia = [], ca;
    Y(l, "resize", K);
    Sa(function() {
      ca && clearTimeout(ca);
      ba(l, "resize", K);
    });
    pb = function(c) {
      ab.push(c);
    };
    var ab = [], jb = 0, Ca = 1 > L || 1.2 <= L && 1.8 > L || 7.2 >= A;
    Ca ? mb(function() {
      var c = l.scrollY || da.scrollTop;
      jb !== c && (jb = c, ia());
    }) : Y(l, "scroll", ia);
    Sa(function() {
      Ca || ba(l, "scroll", ia);
    });
  })();
  (function() {
    var t = 1 > L || 8 <= A && 9 > A, F = 7.2 <= A && 8 > A;
    u || !t && !F && function() {
      var p = wa(Ka, "style"), v = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return v;
    }() || !Wa || t || F || function() {
      var p = wa(Ka, "style");
      Vb(p, "");
      var v = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return v;
    }();
  })();
  (function() {
    9 > u && qa(function() {
      var t = wa(da, "div");
      Za(t, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Mb = 1 < t.offsetHeight;
      Za(t, "");
      Ga(t);
    });
    Pb = function(t, F) {
      function p() {
        y || !G || v.complete ? (pa(t, !!v.width), v.onerror = v.onload = T, v = t = q) : (--G, pa(p));
      }
      var v = new Image, y, G = 99;
      v.onerror = function() {
        y = !0;
      };
      v.onload = function() {
        y = !0;
      };
      v.src = F;
      pa(p);
    };
  })();
  (function() {
    if (!Fb) {
      var t, F = function() {
        t = wa(Va, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ra + "css/" + kb + "hc/" + yb});
        (Nb || 5.5 <= u && 9 > u && Mb) && Qa(da, "jsCanRotate");
        F = q;
      };
      Xb(function(p) {
        p && !t ? F() : t && (p ? Va.appendChild(t) : Ga(t));
      });
    }
    hb(function(p) {
      var v = p.m;
      p = p.o;
      var y = va(v);
      !Db(y, "aBodyRoot") && p ? Qa(y, "img-loaded") : p || la(v, "alt") || Ra(v, "display", "none");
    });
    A && qa(function() {
      if (8 <= A) {
        for (var p = Xa("a"), v = p.length, y = 0, G; y < v; ++y) {
          G = p[y], "-1" === la(G, "tabindex") ? xa(G, "tabindex") : la(G, "href") && Ya(G, "tabindex", "0");
        }
      }
      p = Xa("input");
      y = 0;
      for (v = p.length; y < v; ++y) {
        G = p[y], "hidden" === la(G, "type") && xa(G, "tabindex");
      }
    });
  })();
  (function() {
    function t(d) {
      var e = d.keyCode || d.M, k = m.length, w, E, C, Da;
      if ("keydown" !== d.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var H = w = e.j;
            if (e.C) {
              if (Ra(k, "width", e.L), k.src = e.K, ob(H, e.F), k = e.A) {
                Za(k, e.D), ob(k, "caption jsCap");
              }
            } else {
              if (E = e.B) {
                for (delete e.B; w = va(w);) {
                  if (Db(w, "caption")) {
                    e.A = w, e.D = w.style.cssText, Qa(w, "jsCap");
                  } else {
                    var P = nb(w);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (e.H) {
                  E = E.split("=");
                  P = E.length;
                  if (C = E[P - 1]) {
                    (Da = R(C.substr(1))) && C === "s" + Da ? E[P - 1] = "w" + w : E[P] = "w" + w;
                  }
                  E = E.join("=");
                } else {
                  if (0 < E.indexOf(".bp.blogspot.com/")) {
                    E = E.split("/");
                    P = E.length;
                    if (C = E[P - 2]) {
                      (Da = R(C.substr(1))) && C === "s" + Da ? E[P - 2] = "w" + w : E.splice(P - 1, 0, "w" + w);
                    }
                    E = E.join("/");
                  }
                }
                e.I = E;
              }
              e.F = Wb(H);
              Qa(H, "jsPicaLarge");
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
        F(d);
      }
    }
    function F(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function p(d) {
      for (var e = arguments, k = 0, w = e.length; k < w; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function v(d) {
      var e = Ba;
      if (ib) {
        if (Ia && !e) {
          if (new Date - 0 < Ia) {
            return;
          }
          Ia = q;
        }
        7 === d ? ca = 0 : (ca && (ca = lb(ca)), za = p(l.pageYOffset, l.scrollY, I.scrollTop, da.scrollTop));
        e ? (Ba = y(q, e[0], e[1])) || (Ia = new Date - 0 + 99) : y();
      } else {
        Ba = q;
      }
    }
    function y(d, e, k) {
      function w(sa) {
        H = sa;
        if (Ta) {
          P = Ta + ":translate" + (Aa ? "3D(0," : "(0,") + sa + (Aa ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== sa) {
            if (!D && (ja || M)) {
              var qb = O.offsetWidth;
            }
            P = M ? "position:fixed;width:" + qb + "px;top:" + (sa - E + Q) + "px" : D ? "top:" + sa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + sa + "px";
            ja && P && (P += ";" + (0 > sa ? "clip:rect(" + -sa + "px " + qb + "px " + aa + "px 0)" : sa + aa < rb ? "clip:rect(0 " + qb + "px " + aa + "px 0)" : "clip:rect(0 " + qb + "px " + (rb - sa) + "px 0)"), 8 > u || (P = P.split(" ").join(",")));
          }
        }
      }
      var E = za, C = Ha, Da = O.offsetTop === C.offsetTop, H = 0, P = "", na = !0;
      if (Da) {
        for (var W = 0, Q = 0, X = C; X && X !== da;) {
          Q += X.offsetTop, X = X.offsetParent;
        }
        H = $a;
        var Gb = p(l.innerHeight, I.offsetHeight), Hb = C.offsetHeight, aa = Z.offsetHeight, rb = aa < Hb ? Hb : aa, Ja = E, bb = Ja + Gb, sb = Q, tb = sb + rb, Yb = Q + H, ac = Yb + aa;
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
            return Gb <= k ? db = Q : db = Ja ? tb - k : Q + k - Gb, Ia = q, l.scroll(p(l.pageXOffset, l.scrollX, I.scrollLeft, da.scrollLeft), db), Ba;
          }
          aa <= cb ? W = 4 : k <= cb ? aa - e <= cb ? W = 2 : C <= na && d <= X ? C < Q + H && (W = 4) : W = C <= na && na <= X ? 5 : C <= d && d <= X ? 4 : d < C ? 4 : 5 : W = 4;
          na = q;
        } else {
          d !== q ? aa <= cb ? (W = 7, na = !1) : (H -= 60 * d, W = X - Q - aa, db = C - Q, H < W ? H = W : db < H && (H = db), W = 6) : Hb <= aa || (Ja ? W = 1 : bb || (aa <= cb ? W = 3 : C < Yb ? W = 3 : ac < X ? W = 2 : E < Q + aa - cb || (W = 2)));
        }
        switch(W) {
          case 0:
            w(0);
            break;
          case 1:
            w(rb - aa);
            break;
          case 2:
            w(X - Q - aa);
            break;
          case 3:
            w(C - Q);
            break;
          case 4:
            w(C - Q - e);
            break;
          case 5:
            w(X - Q - (e + k));
          case 6:
            w(H);
        }
      }
      Za(Z, P);
      $a = H;
      return Da && na;
    }
    function G(d) {
      if (ib) {
        L && (za = p(l.pageYOffset, I.scrollTop, da.scrollTop));
        var e = this !== d.target, k = e && p(d.deltaY, d.wheelDeltaY / 120, d.wheelDelta / -120, d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1));
        e && k && y(9 >= k ? -9 >= k ? -3 : k : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function ea(d) {
      for (var e = d.target, k = -1, w; w = r[++k];) {
        fb(w, e) && G(d);
      }
    }
    function U(d) {
      if (ib) {
        var e = !!Ta || L, k = d.target || d.srcElement;
        d = 0;
        var w;
        if (fb(Z, k)) {
          for (w = k.offsetHeight; k && (e ? fb(Z, k) : Z !== k);) {
            d += k.offsetTop, k = k.offsetParent;
          }
          V ? (Ba = [d, w], ca && lb(ca), ca = pa(v, 7)) : (za = p(l.pageYOffset, l.scrollY, I.scrollTop, da.scrollTop), y(q, d, w));
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
      x.call(n);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Ya(n, "id", "blog2slide-root"), ka[1].parentNode.insertBefore(z, ka[1]), b(), f.onkeydown = g) : S && (Ga(z), xa(n, "id"), xa(S, "id"), S = f.onkeydown = q);
    }
    function b() {
      S && xa(S, "id");
      ma = 0 < ma ? Ib < ma ? Ib : ma : 0;
      S = ka[ma];
      Ya(S, "id", "blog2slide-current");
    }
    function g(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++ma, b();
      } else {
        if ("ArrowLeft" === d.key || 37 === d.keyCode) {
          --ma, b();
        }
      }
    }
    var m = [];
    Jb || (hb(function(d) {
      if (d.o && La) {
        d = d.m;
        var e = va(d), k = "", w;
        if ("A" === nb(e) && 1 === Ub(e).length) {
          var E = la(e, "href"), C = E.split("?")[0].split("#")[0].split(".");
          C = (C[C.length - 1] || "").toLowerCase();
          if ((w = 0 < E.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
            Y(e, "keydown", t), Y(d, "click", t), Y(e, "click", F), 9 > A || (k = d.offsetWidth - 4 + "px", Ra(d, "width", k)), Qa(e, "jsPica"), m.push({j:e, K:d.src, L:k, B:E, l:d, H:w});
          }
        }
      }
    }), Sa(function(d, e) {
      for (d = -1; e = m[++d];) {
        ba(e.j, "keydown", t), ba(e.l, "click", t), ba(e.j, "click", F);
      }
    }));
    var r = ["jsSidebarFixer1", "jsSidebarFixer2"], B = L || wb || vb, V = !(6 <= u && 9 > u || A || 1 <= L && 1.3 > L), M = !(5 > N(16) || 5 > N(17) || 2.2 > N(21) || 6 > N(12) || fa(30) && 534 > Wa || fa(32) || 7 > u || 9 > A || 1 > L), ja = M || 7 > u || 1 > L, D = 7.5 > A, I, O, Ha, Z, Ta = Nb, $a = 0, za = 0, Aa, Ba, Ia, ca, ab = L && 0 <= J.conpare(Ea, "0.9.7"), jb = L && 0 >= J.conpare(Ea, "0.9.4");
    Zb || Jb || (gb(function(d) {
      if (d) {
        if (!La) {
          return !0;
        }
        d = -1;
        var e;
        I = "CSS1Compat" !== f.compatMode ? da : Ka || da;
        O = Oa("jsSide");
        Ha = La;
        if (!O) {
          return !0;
        }
        pb(v);
        Eb(v);
        Z = Bb(Ab(O), "div", {id:"jsSidebarFixer"});
        for (8 > A || jb || 6 > u || (u || ta ? Y(Z, "focusin", U) : B ? Y(f, "focus", U, {capture:!0, passive:!1}) : Y(Z, "DOMFocusIn", U, !1)); 1 < Pa(O).length;) {
          Z.appendChild(Pa(O)[1]);
        }
        for (ab && !eb && Y(f, "DOMMouseScroll", ea, !1); e = r[++d];) {
          var k = Oa(e);
          k.onwheel !== q ? Y(k, "wheel", G, {passive:!1}) : eb ? Y(k, "MozMousePixelScroll", G, !1) : ab ? r[d] = Oa(e) : (k.onmousewheel !== q || 9 <= A) && Y(k, "mousewheel", G, !1);
        }
        u || vb || 2 > Ma || (Aa = Fa.perspective !== q || Fa.MozPerspective !== q || Fa["-webkit-perspective"] !== q);
        v();
        return !0;
      }
    }), Sa(function() {
      var d = -1, e;
      if (ab && !eb) {
        ba(f, "DOMMouseScroll", ea, !1);
      } else {
        for (; e = r[++d];) {
          e = Oa(e), e.onwheel !== q ? ba(e, "wheel", G, {passive:!1}) : eb ? ba(e, "MozMousePixelScroll", G, !1) : (e.onmousewheel !== q || 9 <= A) && ba(e, "mousewheel", G, !1);
        }
      }
      8 > A || jb || 6 > u || (u || ta ? ba(Z, "focusin", U, !1) : B ? ba(f, "focus", U, {capture:!0, passive:!1}) : ba(Z, "DOMFocusIn", U, !1));
      Ca && clearInterval(Ca);
    }));
    var Ca, c, h;
    6 > u && gb(function(d) {
      if (!La) {
        return !0;
      }
      d ? Ca = setInterval(K, 333) : Ca && (clearInterval(Ca), Ca = 0);
    });
    qa(function() {
      function d(Da, H, P, na) {
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
        P = na ? Bb(Ab(k), W, {className:P}) : wa(k, W, {className:P});
        wa(P, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:H, J:A ? "0" : q} : {G:!0, href:H, J:A ? "0" : q}, Da);
      }
      if (La) {
        for (var e = zb(La, "blockquote"), k, w = -1, E, C; k = e[++w];) {
          E = la(k, "title"), C = la(k, "cite"), E && C ? (xa(k, "title"), d(E, C, "js-bqLink", !0)) : C && (xa(k, "cite"), d(l.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var x, n, z, S, ka, ma, Ib;
    qa(function() {
      var d = Oa("blog2slide-start");
      if (d) {
        var e = f.onfullscreenchange !== q ? "f" : f.onmozfullscreenchange !== q ? "mozF" : f.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        x = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== e || x ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', Y(d.firstChild, "click", ia), d = va(d), n = va(d), ka = zb(d, "section"), z = f.createElement("h1"), z.innerHTML = Xa("h1")[0].innerHTML, Ib = ka.length, ka.splice(0, 0, z), 0 !== e ? Y(f, e + "ullscreenchange", a) : u ? Y(f, "MSFullscreenChange", a, !1) : Eb(a)) : Ga(d);
      }
    });
  })();
  ub = f.scripts || Xa("script");
  var ra = ub[ub.length - 1].src.split("/");
  --ra.length;
  "js" === ra[ra.length - 1] && --ra.length;
  (ra = ra.join("/")) && (ra += "/");
  var Zb = $b || "1" === la(da, "mob");
  kb = (Zb ? "mb" : "pc") + "/";
  6.1 > oa && pb(Qb);
  Sa(Rb);
  6.1 > oa && pb(Sb);
  Sa(Tb);
  10 > u && (11 !== Ua || 5 !== u) || (9 > A || 1 > L || !ta && !l.addEventListener ? f.write('<link href="' + ra + "css/" + kb + yb + '" rel="stylesheet"' + (8 > A ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > A || 1.5 > L || 532 >= Wa || 2 > Ma || 4 <= Ma && 8 > Ma) && qa(function() {
    wa(Va, "link", {href:ra + "css/" + kb + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

