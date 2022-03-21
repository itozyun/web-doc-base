Array.prototype.pop || (Array.prototype.pop = function() {
  var K = this[this.length - 1];
  --this.length;
  return K;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var K = arguments, l = 0, T = K.length, f = this.length; l < T; ++l) {
    this[f + l] = K[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var K = this[0], l = 1, T = this.length; l < T; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return K;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var K = arguments, l = K.length, T = this.length += l - 1, f = T; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = K[f];
  }
  return T;
});
Array.prototype.splice || (Array.prototype.splice = function(K, l) {
  var T = arguments, f = T.length - 2 - l, Ta = this.slice(K, K + l), pa;
  if (0 < f) {
    var R = this.length - 1;
    for (pa = K + l; R >= pa; --R) {
      this[R + f] = this[R];
    }
  } else {
    if (0 > f) {
      R = K + l;
      for (pa = this.length; R < pa; ++R) {
        this[R + f] = this[R];
      }
      this.length += f;
    }
  }
  R = 2;
  for (pa = T.length; R < pa; ++R) {
    this[R - 2 + K] = T[R];
  }
  return Ta;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(K, l) {
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
    if (this[f] === K) {
      return f;
    }
  }
  return -1;
});
(function(K, l, T, f, Ta, pa, R, tb, q) {
  function N(r) {
    if (K[0] === r) {
      return Ea === Ea + "" ? R(Ea) : Ea;
    }
  }
  function ia(r) {
    var D = K[3];
    if (K[2] === r) {
      return D === D + "" ? R(D) : D;
    }
  }
  var fa = f.body, Fa = fa.style, Ka, Ua, La, Ea = K[1], u = N(2) || N(3), ta = N(7), ub = N(5) || N(6), A = N(8) || N(9), L = N(11) || N(12), db = L && 0 <= K.conpare(Ea, "1.9.1"), vb = N(13), Va = N(15);
  pa = N(16) || N(17);
  var Jb = N(10) || N(25), Ma = N(20) || N(22);
  Ma || N(23) || N(21) || N(24);
  var Kb = Ma && R(Ta.userAgent.split("Edg/")[1]);
  Ta = R(Ta.appVersion.split("Trident/")[1]) + 4;
  var wb = ia(35) || ia(36) || ia(37), Lb = !u && !ta && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), xb = (ta ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : L && !db ? 1.3 <= L ? "gck190" : 1 <= L ? "gck121" : "gck097" : "modern") + ".css", jb = "", $b = ia(1) || ia(2) || ia(3) || 
  ia(4) || ia(8) || ia(9) || ia(10), Mb, Nb = Fa.transform !== q ? "transform" : Fa["-o-transform"] !== q ? "-o-transform" : Fa["-ms-transform"] !== q ? "-ms-transform" : Fa.MozTransform !== q ? "-moz-transform" : Fa["-webkit-transform"] !== q ? "-webkit-transform" : "", eb = [], Ob = [], Pb, qa, kb, lb, Qb, Rb, Sb, Tb;
  (function() {
    function r() {
      for (var b, h = 0, m = new Date - 0; h < M.length;) {
        m < M[0].t ? ++h : (b = M.splice(h, 1)[0], b.f(b.p));
      }
      a = M.length ? setTimeout(r, ba) : 0;
    }
    function D() {
      for (var b, h = 0; h < E.length; ++h) {
        b = E[h], b.f();
      }
    }
    function p() {
      U && (U = clearInterval(U));
    }
    function v() {
      a && (a = clearTimeout(a));
    }
    lb = function(b) {
      E.length || (U = setInterval(D, C));
      E.push({f:b, v:++ka});
      return ka;
    };
    Qb = function() {
      U && (p(), U = setInterval(D, C));
    };
    Rb = p;
    var E = [], C = 500, ka = 0, U;
    if (5 > u || ta) {
      l._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    qa = function(b, h, m) {
      M.length || (a = setTimeout(r, ba));
      M.push({f:b, p:h, v:++ha, t:new Date - 0 + (ba < m ? m : ba)});
      return ha;
    };
    kb = function(b) {
      for (var h = M.length, m; m = M[--h];) {
        if (m.v === b) {
          M.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Sb = function() {
      a && (v(), a = setTimeout(r, ba));
    };
    Tb = v;
    var M = [], ba = 16, ha = 0, a;
    if (5 > u || ta) {
      l._wdb_ontimer = r, r = "_wdb_ontimer()";
    }
  })();
  var Na, Wa, yb, va, Oa, Ub, zb, wa, Ab, Vb, Ga, fb, mb, la, Xa, xa, Bb, Wb, nb, Cb, Pa, Qa, Ya;
  (function() {
    function r(a, b, h) {
      var m = ["<", a], t = 1, x, Z;
      if (b) {
        for (x in b) {
          var I = b[x];
          if (null != I && "" !== I) {
            if ("style" === x) {
              m[++t] = ' style="';
              for (Z in I) {
                for (var ca = ++t, F, J = [], O = Z.split(""), Ha = O.length; Ha;) {
                  F = O[--Ha], "A" <= F && "Z" >= F && (F = "-" + F.toLowerCase()), J[Ha] = F;
                }
                m[ca] = J.join("") + ":" + I[Z] + ";";
              }
              m[++t] = '"';
            } else {
              "className" === x && (x = "class"), m[++t] = " " + x + '="' + I + '"';
            }
          }
        }
      }
      m[++t] = ">";
      null != h && (M && "font" !== a ? m[++t] = "<FONT>" + h + "</FONT>" : m[++t] = h);
      m[++t] = "</" + a + ">";
      return m.join("");
    }
    function D(a) {
      return p(f, a);
    }
    function p(a, b) {
      var h = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], t = 0, x;
      for (x = h.length; t < x; ++t) {
        m[t] = h[t];
      }
      return m;
    }
    function v(a) {
      return M ? a.parentElement : a.parentNode;
    }
    function E(a, b, h, m, t, x) {
      if (M) {
        var Z = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", I = Oa(2 > a ? va(b) : b);
        I = 2 > a ? I.indexOf(b) + a : I.length;
        b.insertAdjacentHTML(Z, r(h, m, t));
        return Oa(b)[I];
      }
      b = ba ? f.createElement(r(h, m)) : x ? f.createElementNS("http://www.w3.org/2000/svg", h) : f.createElement(h);
      if (m && !ba) {
        for (Z in m) {
          if ((h = m[Z]) || 0 === h) {
            switch(Z) {
              case "class":
              case "className":
                nb(b, h);
                break;
              case "style":
                a = b.style;
                for (I in h) {
                  a[I] = h[I];
                }
                break;
              default:
                Xa(b, Z, h);
            }
          }
        }
      }
      ha || null != t && C(b, t);
      return b;
    }
    function C(a, b) {
      if (M) {
        return E(2, a, "font", q, b);
      }
      var h = f.createTextNode("" + b);
      a.appendChild(h);
      return h;
    }
    function ka(a, b) {
      9 > u ? a.className = b : a.setAttribute("class", b);
    }
    function U(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var M = 5 > u;
    Ka = D("html")[0];
    Ua = D("head")[0];
    Na = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    Wa = D;
    yb = p;
    va = v;
    Oa = function(a) {
      a = M ? a.children : a.childNodes;
      for (var b = [], h = a.length; h;) {
        b[--h] = a[h];
      }
      return b;
    };
    Ub = function(a) {
      var b = !(7.03 < A && 7.2 > A) && a.children;
      a = b ? b : a.childNodes;
      for (var h = [], m = a.length, t = -1, x; m;) {
        if (x = a[--m], b || 1 === x.nodeType) {
          M && "FONT" === x.tagName || (h[++t] = x);
        }
      }
      return h;
    };
    zb = function(a) {
      return M ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    wa = function(a, b, h, m, t) {
      b = E(2, a, b, h, m, t);
      M || (a.appendChild(b), ha && null != m && C(b, m));
      return b;
    };
    Ab = function(a, b, h, m, t) {
      b = E(0, a, b, h, m, t);
      M || (v(a).insertBefore(b, a), ha && null != m && C(b, m));
      return b;
    };
    Vb = C;
    Ga = function(a) {
      M ? a.outerHTML = "" : va(a).removeChild(a);
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
    var ba = 9 > u, ha = 9 > u;
    mb = function(a) {
      return a.tagName.toUpperCase();
    };
    la = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Xa = function(a, b, h) {
      a.setAttribute(b, h);
    };
    xa = function(a, b) {
      a.removeAttribute(b);
    };
    Bb = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Wb = function(a) {
      return a.className;
    };
    nb = ka;
    Cb = U;
    Pa = function(a, b) {
      var h;
      if (!U(a, b)) {
        if (h = a.className) {
          b = " " + b;
        }
        ka(a, h + b);
      }
    };
    Qa = function(a, b, h) {
      a.style[b] = h;
    };
    Ya = function(a, b) {
      var h = -1, m, t;
      if (5.5 > u) {
        if (b) {
          for (m = b.split(";"); t = m[++h];) {
            var x = t.split(":");
            a.style[x[0]] = t.substr(x[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > A || 1 > L ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    eb.splice(0, 0, function() {
      function a(I) {
        I = Oa(I);
        for (var ca = I.length, F, J, O; ca;) {
          if (F = I[--ca], J = F.nodeType, 8 === J) {
            b && x.push(F);
          } else {
            if (1 === J) {
              switch(J = mb(F), "/" === J.charAt(0) && (J = J.substr(1), Z[J] = !0), J) {
                case "STYLE":
                  if (8 <= A && 9 > A) {
                    break;
                  }
                case "LINK":
                  M || h || fb(Ua, F) || t.push(F);
                  break;
                case "META":
                  J = la(F, "name") || la(F, "property");
                  for (O = m.length; O;) {
                    if (0 === J.indexOf(m[--O])) {
                      x.push(F);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Bb(F, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Bb(F, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  x.push(F);
                  break;
                case "SOURCE":
                  l.HTMLSourceElement || x.push(F);
                  break;
                default:
                  Z[J] ? x.push(F) : Oa(F).length && a(F);
              }
            }
          }
        }
        for (; t[0];) {
          Ua.appendChild(t.pop());
        }
        for (; x[0];) {
          Ga(x.pop());
        }
      }
      La = Na("jsMain");
      var b = !(8 > A || 5 > u || ta || .9 > L), h = 7 > u, m = ["og:", "twitter:", "fb:"], t = [], x = [], Z = {};
      a(Ka);
    });
  })();
  var X, da, ya, Ra, Db, ob, gb, Eb, Xb, hb, za, Fb;
  (function() {
    function r() {
      return za = Y ? Za ? 2 : Sa ? 3 : 1 : 0;
    }
    function D(d, g) {
      gb(function() {
        var y = ha(d);
        g(y);
        y.addListener(g);
        return !0;
      });
    }
    function p(d, g, y) {
      for (var n = 0; n < d.length; ++n) {
        !0 === d[n](g) && (d.splice(n, 1), --n);
      }
      y && (d.length = 0);
    }
    function v(d, g) {
      h && !b.length && qa(E);
      b.push(d, g);
    }
    function E() {
      var d = b, g;
      for (b = []; g = d.shift();) {
        p(g, d.shift());
      }
    }
    function C(d) {
      var g = d || event;
      d = m[g.type];
      var y = -1, n, z;
      for (u ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : x && (g.u = g.stopPropagation, g.stopPropagation = function() {
        z = !0;
      }); n = d[++y];) {
        n.i === this ? (this.g = n.h, this.g(g), this.g = T, this.g = q) : 7.2 > A && this === f && n.i === l && (l.g = n.h, l.g(g), delete l.g);
      }
      if (u) {
        return g.preventDefault = g.stopPropagation = q, g.returnValue;
      }
      x && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (I = !0), z && !I && g.u(), g.u = g.stopPropagation = q);
    }
    function ka() {
      var d = 9 === a.offsetWidth;
      hb !== d && v(Ob, hb = d);
    }
    function U() {
      !ca && ea && (kb(ea), ea = qa(M));
    }
    function M() {
      ea = 0;
      p(Ia);
    }
    function ba(d) {
      ca || p($a, d);
    }
    var ha = l.matchMedia, a, b = [], h;
    eb.push(function() {
      D = q;
      a = wa(fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ya(function() {
        h = !0;
        b.length && qa(E);
      });
    });
    X = function(d, g, y, n) {
      if (Z) {
        d.addEventListener(g, y, n ? Lb ? n : n.capture : !1);
      } else {
        var z = {i:d, h:y};
        n = m[g];
        var S = "on" + g, ja, ma;
        if (n) {
          for (ja = n.length; ma = n[--ja];) {
            if (ma.i === d && ma.h === y) {
              return;
            }
          }
          m[g].push(z);
        } else {
          m[g] = n = [z], t || (g = d[S], "function" === typeof g && g !== C && n.unshift({i:d, h:g}));
        }
        t ? d.attachEvent(S, C) : d[S] = C;
      }
    };
    da = function(d, g, y, n) {
      if (Z) {
        d.removeEventListener(g, y, n ? Lb ? n : n.capture : !1);
      } else {
        n = m[g];
        g = "on" + g;
        var z, S, ja;
        if (n) {
          for (z = n.length; S = n[--z];) {
            S.i === d && (S.h === y ? n.splice(z, 1) : ja = !0);
          }
          ja || (t ? d.detachEvent(g, C) : (d[g] = T, d[g] = null));
        }
      }
    };
    var m = {}, t = !1, x = 525.13 > Va, Z = !x && !ta && l.addEventListener, I;
    x && Ka.addEventListener("click", function(d) {
      if (I) {
        return I = !1, d.preventDefault(), !1;
      }
    });
    ya = function(d) {
      eb.push(d);
    };
    Ra = function(d) {
      F && F.push(d);
    };
    var ca = function(d) {
      da(l, "load", ca);
      ca = q;
      p(eb, d, !0);
      eb = q;
    }, F = [];
    if (419.3 >= Va) {
      var J = function() {
        if (J) {
          var d = f.readyState;
          "loaded" === d || "complete" === d ? (J = q, ca()) : qa(J);
        }
      };
      qa(J);
    } else {
      X(l, "load", ca);
    }
    u || 1.8 > L ? X(l, "unload", function(d) {
      p(F, d, !0);
    }) : F = q;
    gb = function(d) {
      Ob.push(d);
    };
    ya(function() {
      ka();
      lb(ka);
    });
    Xb = function(d) {
      O && O.push(d);
    };
    var O = [], Ha = 60 > L || vb, Y, Sa, Za;
    if (89 <= L || 89 <= Ma || wb && 79 <= Kb || ha && (ha("(forced-colors:none)").matches || ha("(forced-colors:active)").matches)) {
      Fb = !0, D("(forced-colors:active)", function(d) {
        Y = d.matches;
        v(O, r());
      });
    } else {
      if (10 <= u || ub || wb && Kb) {
        Fb = !0, D("(-ms-high-contrast:black-on-white)", function(d) {
          Y = Sa = d.matches;
          za !== r() && v(O, za);
        }), D("(-ms-high-contrast:white-on-black)", function(d) {
          Y = Za = d.matches;
          za !== r() && v(O, za);
        }), D("(-ms-high-contrast:active)", function(d) {
          Y = d.matches;
          za !== r() && v(O, za);
        });
      } else {
        if (u || wb && (L && 0 <= K.conpare(Ea, "1.8.1") || vb)) {
          var Aa = function() {
            function d(z, S) {
              return "#000000" === z || "rgb(0,0,0)" === z || S && "transparent" === z;
            }
            function g(z, S) {
              return "#ffffff" === z || "rgb(255,255,255)" === z || S && "transparent" === z;
            }
            var y = f.defaultView, n = y ? y.getComputedStyle(a, null) : a.currentStyle;
            y = (n && n.color || "").split(" ").join("");
            n = (n && n.backgroundColor || "").split(" ").join("");
            y && (Y = "#123456" !== y && "rgb(18,52,86)" !== y, Sa = d(y) && g(n, !0), Za = g(y) && d(n, !0), za !== r() && v(O, za));
          };
          gb(function(d) {
            if (d) {
              return Qa(a, "color", "#123456"), Qa(a, "backgroundColor", "#123456"), Ha ? (Aa(), O = q) : Aa() && lb(Aa), Aa = q, !0;
            }
          });
        } else {
          O = r = q;
        }
      }
    }
    Eb = function(d) {
      na.push(d);
    };
    var na = [], Ba = 7.5 <= A && 8 > A;
    Ba && function() {
      for (var d = f.images, g = d.length, y; g;) {
        y = d[--g], y.s = y.src, xa(y, "src");
      }
    }();
    ya(function() {
      function d() {
        n ? (z = y[--n], Ba && Xa(z, "src", z.s), Pb(g, Ba ? z.s : z.src)) : (na.length = 0, na = q);
      }
      function g(S) {
        p(na, {m:z, o:S});
        d();
      }
      var y = f.images || Wa("img"), n = y.length;
      if (12 > A || 532 > Va) {
        d();
      } else {
        for (; n;) {
          var z = y[--n];
          v(na, {m:z, o:9 > u ? z.complete : 0 <= z.naturalWidth ? z.naturalWidth : z.width});
        }
        na.length = 0;
        na = q;
      }
    });
    Db = function(d) {
      Ia.push(d);
    };
    var Ia = [], ea;
    X(l, "resize", U);
    Ra(function() {
      ea && clearTimeout(ea);
      da(l, "resize", U);
    });
    ob = function(d) {
      $a.push(d);
    };
    var $a = [], ib = 0, Ca = 1 > L || 1.2 <= L && 1.8 > L || 7.2 >= A;
    Ca ? lb(function() {
      var d = l.scrollY || fa.scrollTop;
      ib !== d && (ib = d, ba());
    }) : X(l, "scroll", ba);
    Ra(function() {
      Ca || da(l, "scroll", ba);
    });
  })();
  (function() {
    var r = 1 > L || 8 <= A && 9 > A, D = 7.2 <= A && 8 > A;
    u || !r && !D && function() {
      var p = wa(Ka, "style"), v = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return v;
    }() || !Va || r || D || function() {
      var p = wa(Ka, "style");
      Vb(p, "");
      var v = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return v;
    }();
  })();
  (function() {
    9 > u && ya(function() {
      var r = wa(fa, "div");
      Ya(r, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Mb = 1 < r.offsetHeight;
      Ya(r, "");
      Ga(r);
    });
    Pb = function(r, D) {
      function p() {
        E || !C || v.complete ? (qa(r, !!v.width), v.onerror = v.onload = T, v = r = q) : (--C, qa(p));
      }
      var v = new Image, E, C = 99;
      v.onerror = function() {
        E = !0;
      };
      v.onload = function() {
        E = !0;
      };
      v.src = D;
      qa(p);
    };
  })();
  (function() {
    if (!Fb) {
      var r, D = function() {
        r = wa(Ua, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ra + "css/" + jb + "hc/" + xb});
        (Nb || 5.5 <= u && 9 > u && Mb) && Pa(fa, "jsCanRotate");
        D = q;
      };
      Xb(function(p) {
        p && !r ? D() : r && (p ? Ua.appendChild(r) : Ga(r));
      });
    }
    Eb(function(p) {
      var v = p.m;
      p = p.o;
      var E = va(v);
      !Cb(E, "aBodyRoot") && p ? Pa(E, "img-loaded") : p || la(v, "alt") || Qa(v, "display", "none");
    });
    A && ya(function() {
      if (8 <= A) {
        for (var p = Wa("a"), v = p.length, E = 0, C; E < v; ++E) {
          C = p[E], "-1" === la(C, "tabindex") ? xa(C, "tabindex") : la(C, "href") && Xa(C, "tabindex", "0");
        }
      }
      p = Wa("input");
      E = 0;
      for (v = p.length; E < v; ++E) {
        C = p[E], "hidden" === la(C, "type") && xa(C, "tabindex");
      }
    });
  })();
  (function() {
    function r(c) {
      var e = c.keyCode || c.M, k = m.length, w, G, B, Da;
      if ("keydown" !== c.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var H = w = e.j;
            if (e.C) {
              if (Qa(k, "width", e.L), k.src = e.K, nb(H, e.F), k = e.A) {
                Ya(k, e.D), nb(k, "caption jsCap");
              }
            } else {
              if (G = e.B) {
                for (delete e.B; w = va(w);) {
                  if (Cb(w, "caption")) {
                    e.A = w, e.D = w.style.cssText, Pa(w, "jsCap");
                  } else {
                    var P = mb(w);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (e.H) {
                  G = G.split("=");
                  P = G.length;
                  if (B = G[P - 1]) {
                    (Da = R(B.substr(1))) && B === "s" + Da ? G[P - 1] = "w" + w : G[P] = "w" + w;
                  }
                  G = G.join("=");
                } else {
                  if (0 < G.indexOf(".bp.blogspot.com/")) {
                    G = G.split("/");
                    P = G.length;
                    if (B = G[P - 2]) {
                      (Da = R(B.substr(1))) && B === "s" + Da ? G[P - 2] = "w" + w : G.splice(P - 1, 0, "w" + w);
                    }
                    G = G.join("/");
                  }
                }
                e.I = G;
              }
              e.F = Wb(H);
              Pa(H, "jsPicaLarge");
              Qa(k, "width", "");
              k.src = e.I;
              if (k = e.A) {
                Ya(k, ""), Pa(k, "jsCapLarge");
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
    function p(c) {
      for (var e = arguments, k = 0, w = e.length; k < w; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function v(c) {
      var e = Ba;
      if (hb) {
        if (Ia && !e) {
          if (new Date - 0 < Ia) {
            return;
          }
          Ia = q;
        }
        7 === c ? ea = 0 : (ea && (ea = kb(ea)), Aa = p(l.pageYOffset, l.scrollY, J.scrollTop, fa.scrollTop));
        e ? (Ba = E(q, e[0], e[1])) || (Ia = new Date - 0 + 99) : E();
      } else {
        Ba = q;
      }
    }
    function E(c, e, k) {
      function w(sa) {
        H = sa;
        if (Sa) {
          P = Sa + ":translate" + (na ? "3D(0," : "(0,") + sa + (na ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== sa) {
            if (!F && (ca || I)) {
              var pb = O.offsetWidth;
            }
            P = I ? "position:fixed;width:" + pb + "px;top:" + (sa - G + Q) + "px" : F ? "top:" + sa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + sa + "px";
            ca && P && (P += ";" + (0 > sa ? "clip:rect(" + -sa + "px " + pb + "px " + aa + "px 0)" : sa + aa < qb ? "clip:rect(0 " + pb + "px " + aa + "px 0)" : "clip:rect(0 " + pb + "px " + (qb - sa) + "px 0)"), 8 > u || (P = P.split(" ").join(",")));
          }
        }
      }
      var G = Aa, B = Ha, Da = O.offsetTop === B.offsetTop, H = 0, P = "", oa = !0;
      if (Da) {
        for (var V = 0, Q = 0, W = B; W && W !== fa;) {
          Q += W.offsetTop, W = W.offsetParent;
        }
        H = Za;
        var Gb = p(l.innerHeight, J.offsetHeight), Hb = B.offsetHeight, aa = Y.offsetHeight, qb = aa < Hb ? Hb : aa, Ja = G, ab = Ja + Gb, rb = Q, sb = rb + qb, Yb = Q + H, ac = Yb + aa;
        B = Ja < rb ? rb : Ja;
        W = sb < ab ? sb : ab;
        var bb = W - B;
        Ja = sb <= Ja;
        ab = ab <= rb;
        if (e !== q) {
          oa = Q + e;
          c = oa + k;
          var cb;
          if (Ja || ab) {
            return Gb <= k ? cb = Q : cb = Ja ? sb - k : Q + k - Gb, Ia = q, l.scroll(p(l.pageXOffset, l.scrollX, J.scrollLeft, fa.scrollLeft), cb), Ba;
          }
          aa <= bb ? V = 4 : k <= bb ? aa - e <= bb ? V = 2 : B <= oa && c <= W ? B < Q + H && (V = 4) : V = B <= oa && oa <= W ? 5 : B <= c && c <= W ? 4 : c < B ? 4 : 5 : V = 4;
          oa = q;
        } else {
          c !== q ? aa <= bb ? (V = 7, oa = !1) : (H -= 60 * c, V = W - Q - aa, cb = B - Q, H < V ? H = V : cb < H && (H = cb), V = 6) : Hb <= aa || (Ja ? V = 1 : ab || (aa <= bb ? V = 3 : B < Yb ? V = 3 : ac < W ? V = 2 : G < Q + aa - bb || (V = 2)));
        }
        switch(V) {
          case 0:
            w(0);
            break;
          case 1:
            w(qb - aa);
            break;
          case 2:
            w(W - Q - aa);
            break;
          case 3:
            w(B - Q);
            break;
          case 4:
            w(B - Q - e);
            break;
          case 5:
            w(W - Q - (e + k));
          case 6:
            w(H);
        }
      }
      Ya(Y, P);
      Za = H;
      return Da && oa;
    }
    function C(c) {
      if (hb) {
        L && (Aa = p(l.pageYOffset, J.scrollTop, fa.scrollTop));
        var e = this !== c.target, k = e && p(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        e && k && E(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ka(c) {
      for (var e = c.target, k = -1, w; w = t[++k];) {
        fb(w, e) && C(c);
      }
    }
    function U(c) {
      if (hb) {
        var e = !!Sa || L, k = c.target || c.srcElement;
        c = 0;
        var w;
        if (fb(Y, k)) {
          for (w = k.offsetHeight; k && (e ? fb(Y, k) : Y !== k);) {
            c += k.offsetTop, k = k.offsetParent;
          }
          Z ? (Ba = [c, w], ea && kb(ea), ea = qa(v, 7)) : (Aa = p(l.pageYOffset, l.scrollY, J.scrollTop, fa.scrollTop), E(q, c, w));
        }
      }
    }
    function M() {
      g = l.onerror;
      l.onerror = ba;
      var c = f.activeElement;
      d !== c && (d = c, U({target:c}));
      l.onerror = g;
      g = q;
    }
    function ba() {
      l.onerror = g;
      g = d = q;
      return !0;
    }
    function ha() {
      y.call(n);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Xa(n, "id", "blog2slide-root"), ja[1].parentNode.insertBefore(z, ja[1]), b(), f.onkeydown = h) : S && (Ga(z), xa(n, "id"), xa(S, "id"), S = f.onkeydown = q);
    }
    function b() {
      S && xa(S, "id");
      ma = 0 < ma ? Ib < ma ? Ib : ma : 0;
      S = ja[ma];
      Xa(S, "id", "blog2slide-current");
    }
    function h(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++ma, b();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --ma, b();
        }
      }
    }
    var m = [];
    Jb || (Eb(function(c) {
      if (c.o && La) {
        c = c.m;
        var e = va(c), k = "", w;
        if ("A" === mb(e) && 1 === Ub(e).length) {
          var G = la(e, "href"), B = G.split("?")[0].split("#")[0].split(".");
          B = (B[B.length - 1] || "").toLowerCase();
          if ((w = 0 < G.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + B + ".")) {
            X(e, "keydown", r), X(c, "click", r), X(e, "click", D), 9 > A || (k = c.offsetWidth - 4 + "px", Qa(c, "width", k)), Pa(e, "jsPica"), m.push({j:e, K:c.src, L:k, B:G, l:c, H:w});
          }
        }
      }
    }), Ra(function(c, e) {
      for (c = -1; e = m[++c];) {
        da(e.j, "keydown", r), da(e.l, "click", r), da(e.j, "click", D);
      }
    }));
    var t = ["jsSidebarFixer1", "jsSidebarFixer2"], x = L || vb || ub, Z = !(6 <= u && 9 > u || A || 1 <= L && 1.3 > L), I = !(5 > N(16) || 5 > N(17) || 2.2 > N(21) || 6 > N(12) || ia(30) && 534 > Va || ia(32) || 7 > u || 9 > A || 1 > L), ca = I || 7 > u || 1 > L, F = 7.5 > A, J, O, Ha, Y, Sa = Nb, Za = 0, Aa = 0, na, Ba, Ia, ea, $a = L && 0 <= K.conpare(Ea, "0.9.7"), ib = L && 0 >= K.conpare(Ea, "0.9.4");
    Zb || Jb || (gb(function(c) {
      if (c) {
        if (!La) {
          return !0;
        }
        c = -1;
        var e;
        J = "CSS1Compat" !== f.compatMode ? fa : Ka || fa;
        O = Na("jsSide");
        Ha = La;
        if (!O) {
          return !0;
        }
        ob(v);
        Db(v);
        Y = Ab(zb(O), "div", {id:"jsSidebarFixer"});
        for (8 > A || ib || 6 > u || (u || ta ? X(Y, "focusin", U) : x ? X(f, "focus", U, {capture:!0, passive:!1}) : X(Y, "DOMFocusIn", U, !1)); 1 < Oa(O).length;) {
          Y.appendChild(Oa(O)[1]);
        }
        for ($a && !db && X(f, "DOMMouseScroll", ka, !1); e = t[++c];) {
          var k = Na(e);
          k.onwheel !== q ? X(k, "wheel", C, {passive:!1}) : db ? X(k, "MozMousePixelScroll", C, !1) : $a ? t[c] = Na(e) : (k.onmousewheel !== q || 9 <= A) && X(k, "mousewheel", C, !1);
        }
        u || ub || 2 > Ma || (na = Fa.perspective !== q || Fa.MozPerspective !== q || Fa["-webkit-perspective"] !== q);
        v();
        return !0;
      }
    }), Ra(function() {
      var c = -1, e;
      if ($a && !db) {
        da(f, "DOMMouseScroll", ka, !1);
      } else {
        for (; e = t[++c];) {
          e = Na(e), e.onwheel !== q ? da(e, "wheel", C, {passive:!1}) : db ? da(e, "MozMousePixelScroll", C, !1) : (e.onmousewheel !== q || 9 <= A) && da(e, "mousewheel", C, !1);
        }
      }
      8 > A || ib || 6 > u || (u || ta ? da(Y, "focusin", U, !1) : x ? da(f, "focus", U, {capture:!0, passive:!1}) : da(Y, "DOMFocusIn", U, !1));
      Ca && clearInterval(Ca);
    }));
    var Ca, d, g;
    6 > u && gb(function(c) {
      if (!La) {
        return !0;
      }
      c ? Ca = setInterval(M, 333) : Ca && (clearInterval(Ca), Ca = 0);
    });
    ya(function() {
      function c(Da, H, P, oa) {
        var V = oa ? "div" : "cite";
        if (0 === H.indexOf("urn:isbn:")) {
          H = H.substr(9).toUpperCase().split("-").join("");
          if (13 === H.length) {
            H = H.toString().slice(3, -1);
            for (var Q = 0, W = 0; 9 > W; W++) {
              Q += (H.charAt(W) - 0) * (10 - W);
            }
            Q = (11 - Q % 11) % 11;
            Q = 10 === Q ? "X" : Q.toString();
            H += Q;
          }
          10 === H.length && (H = "//www.amazon.co.jp/exec/obidos/ASIN/" + H + "/itozyun-22/ref=nosim/");
        }
        P = oa ? Ab(zb(k), V, {className:P}) : wa(k, V, {className:P});
        wa(P, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:H, J:A ? "0" : q} : {G:!0, href:H, J:A ? "0" : q}, Da);
      }
      if (La) {
        for (var e = yb(La, "blockquote"), k, w = -1, G, B; k = e[++w];) {
          G = la(k, "title"), B = la(k, "cite"), G && B ? (xa(k, "title"), c(G, B, "js-bqLink", !0)) : B && (xa(k, "cite"), c(l.decodeURI ? decodeURI(B) : B, B, "js-bqCite"));
        }
      }
    });
    var y, n, z, S, ja, ma, Ib;
    ya(function() {
      var c = Na("blog2slide-start");
      if (c) {
        var e = f.onfullscreenchange !== q ? "f" : f.onmozfullscreenchange !== q ? "mozF" : f.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        y = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== e || y ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(c.firstChild, "click", ha), c = va(c), n = va(c), ja = yb(c, "section"), z = f.createElement("h1"), z.innerHTML = Wa("h1")[0].innerHTML, Ib = ja.length, ja.splice(0, 0, z), 0 !== e ? X(f, e + "ullscreenchange", a) : u ? X(f, "MSFullscreenChange", a, !1) : Db(a)) : Ga(c);
      }
    });
  })();
  tb = f.scripts || Wa("script");
  var ra = tb[tb.length - 1].src.split("/");
  --ra.length;
  "js" === ra[ra.length - 1] && --ra.length;
  (ra = ra.join("/")) && (ra += "/");
  var Zb = $b || "1" === la(fa, "mob");
  jb = (Zb ? "mb" : "pc") + "/";
  6.1 > pa && ob(Qb);
  Ra(Rb);
  6.1 > pa && ob(Sb);
  Ra(Tb);
  10 > u && (11 !== Ta || 5 !== u) || (9 > A || 1 > L || !ta && !l.addEventListener ? f.write('<link href="' + ra + "css/" + jb + xb + '" rel="stylesheet"' + (8 > A ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > A || 1.5 > L || 532 >= Va || 2 > Ma || 4 <= Ma && 8 > Ma) && ya(function() {
    wa(Ua, "link", {href:ra + "css/" + jb + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

