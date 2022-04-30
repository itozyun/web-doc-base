Array.prototype.pop || (Array.prototype.pop = function() {
  var L = this[this.length - 1];
  --this.length;
  return L;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var L = arguments, l = 0, R = L.length, f = this.length; l < R; ++l) {
    this[f + l] = L[l];
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
  for (var L = arguments, l = L.length, R = this.length += l - 1, f = R; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = L[f];
  }
  return R;
});
Array.prototype.splice || (Array.prototype.splice = function(L, l) {
  var R = arguments, f = R.length - 2 - l, Va = this.slice(L, L + l), qa;
  if (0 < f) {
    var O = this.length - 1;
    for (qa = L + l; O >= qa; --O) {
      this[O + f] = this[O];
    }
  } else if (0 > f) {
    O = L + l;
    for (qa = this.length; O < qa; ++O) {
      this[O + f] = this[O];
    }
    this.length += f;
  }
  O = 2;
  for (qa = R.length; O < qa; ++O) {
    this[O - 2 + L] = R[O];
  }
  return Va;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(L, l) {
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
    if (this[f] === L) {
      return f;
    }
  }
  return -1;
});
(function(L, l, R, f, Va, qa, O, vb, r) {
  function P(q) {
    if (L[0] === q) {
      return Ea === Ea + "" ? O(Ea) : Ea;
    }
  }
  function ia(q) {
    var F = L[3];
    if (L[2] === q) {
      return F === F + "" ? O(F) : F;
    }
  }
  var da = f.body, Fa = da.style, Ja, Wa, Ka, Ea = L[1], v = P(2) || P(3), za = P(7), wb = P(5) || P(6), C = P(8) || P(9), G = P(11) || P(12), eb = G && 0 <= L.conpare(Ea, "1.9.1"), xb = P(13), Xa = P(15);
  qa = P(16) || P(17);
  var Lb = P(10) || P(25), fb = P(20) || P(22);
  fb || P(23) || P(21) || P(24);
  var Mb = fb && O(Va.userAgent.split("Edg/")[1]);
  Va = O(Va.appVersion.split("Trident/")[1]) + 4;
  var yb = ia(35) || ia(36) || ia(37), Nb = !v && !za && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), zb = (za ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > C ? "opr70" : 8 > C ? "opr72" : 9.5 > C ? "opr" + (C | 0) : G && !eb ? 1.4 <= G ? "gck19" : 1.3 <= G ? "gck13" : 1 <= G ? "gck12" : .9 <= G ? "gck09" : .8 <= G ? "gck08" : "gck07" : "modern") + 
  ".css", lb = "", ac = ia(1) || ia(2) || ia(3) || ia(4) || ia(8) || ia(9) || ia(10), Ob, Pb = Fa.transform !== r ? "transform" : Fa["-o-transform"] !== r ? "-o-transform" : Fa["-ms-transform"] !== r ? "-ms-transform" : Fa.MozTransform !== r ? "-moz-transform" : Fa["-webkit-transform"] !== r ? "-webkit-transform" : "", La = [], Qb = [], na = [], Rb, ra, mb, nb, Sb, Tb, Ub, Vb;
  (function() {
    function q() {
      for (var b, h = 0, m = new Date() - 0; h < M.length;) {
        m < M[0].t ? ++h : (b = M.splice(h, 1)[0], b.f(b.p));
      }
      a = M.length ? setTimeout(q, ja) : 0;
    }
    function F() {
      for (var b, h = 0; h < w.length; ++h) {
        b = w[h], b.f();
      }
    }
    function p() {
      S && (S = clearInterval(S));
    }
    function u() {
      a && (a = clearTimeout(a));
    }
    nb = function(b) {
      w.length || (S = setInterval(F, z));
      w.push({f:b, v:++ea});
      return ea;
    };
    Sb = function() {
      S && (p(), S = setInterval(F, z));
    };
    Tb = p;
    var w = [], z = 500, ea = 0, S;
    if (5 > v || za) {
      l._wdb_onlooptimer = F, F = "_wdb_onlooptimer()";
    }
    ra = function(b, h, m) {
      M.length || (a = setTimeout(q, ja));
      M.push({f:b, p:h, v:++ka, t:new Date() - 0 + (ja < m ? m : ja)});
      return ka;
    };
    mb = function(b) {
      for (var h = M.length, m; m = M[--h];) {
        if (m.v === b) {
          M.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Ub = function() {
      a && (u(), a = setTimeout(q, ja));
    };
    Vb = u;
    var M = [], ja = 16, ka = 0, a;
    if (5 > v || za) {
      l._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var Ma, Na, Ab, Aa, Oa, Wb, Bb, Ba, Cb, Xb, Ga, gb, ob, oa, Ya, Ca, Db, Yb, pb, Eb, Pa, Qa, Za;
  (function() {
    function q(a, b, h) {
      var m = ["<", a], t = 1, A, T;
      if (b) {
        for (A in b) {
          var N = b[A];
          if (null != N && "" !== N) {
            if ("style" === A) {
              m[++t] = ' style="';
              for (T in N) {
                for (var la = ++t, E, K = [], Y = T.split(""), fa = Y.length; fa;) {
                  E = Y[--fa], "A" <= E && "Z" >= E && (E = "-" + E.toLowerCase()), K[fa] = E;
                }
                m[la] = K.join("") + ":" + N[T] + ";";
              }
              m[++t] = '"';
            } else {
              "className" === A && (A = "class"), m[++t] = " " + A + '="' + N + '"';
            }
          }
        }
      }
      m[++t] = ">";
      null != h && (M && "font" !== a ? m[++t] = "<FONT>" + h + "</FONT>" : m[++t] = h);
      m[++t] = "</" + a + ">";
      return m.join("");
    }
    function F(a) {
      return p(f, a);
    }
    function p(a, b) {
      var h = "*" === b && 6 > v ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), m = [], t = 0, A;
      for (A = h.length; t < A; ++t) {
        m[t] = h[t];
      }
      return m;
    }
    function u(a) {
      return M ? a.parentElement : a.parentNode;
    }
    function w(a, b, h, m, t, A) {
      if (M) {
        var T = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", N = Oa(2 > a ? Aa(b) : b);
        N = 2 > a ? N.indexOf(b) + a : N.length;
        b.insertAdjacentHTML(T, q(h, m, t));
        b = Oa(b)[N];
        null != t && ("font" === h ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (ja) {
        b = f.createElement(q(h, m));
      } else {
        b = A ? f.createElementNS("http://www.w3.org/2000/svg", h) : f.createElement(h);
        if (m) {
          for (T in m) {
            if ((h = m[T]) || 0 === h) {
              switch(T) {
                case "class":
                case "className":
                  pb(b, h);
                  break;
                case "style":
                  a = b.style;
                  for (N in h) {
                    a[N] = h[N];
                  }
                  break;
                default:
                  Ya(b, T, h);
              }
            }
          }
        }
        ka || null != t && z(b, t);
      }
      return b;
    }
    function z(a, b) {
      if (M) {
        return w(2, a, "font", r, b);
      }
      var h = f.createTextNode("" + b);
      a.appendChild(h);
      return h;
    }
    function ea(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function S(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var M = 5 > v;
    Ja = F("html")[0];
    Wa = F("head")[0];
    Ma = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    Na = F;
    Ab = p;
    Aa = u;
    Oa = function(a) {
      a = M ? a.children : a.childNodes;
      for (var b = [], h = a.length; h;) {
        b[--h] = a[h];
      }
      return b;
    };
    Wb = function(a) {
      var b = !(7.03 < C && 7.2 > C) && a.children;
      a = b ? b : a.childNodes;
      for (var h = [], m = a.length, t = -1, A; m;) {
        if (A = a[--m], b || 1 === A.nodeType) {
          M && "FONT" === A.tagName || (h[++t] = A);
        }
      }
      return h;
    };
    Bb = function(a) {
      return M ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    Ba = function(a, b, h, m, t) {
      b = w(2, a, b, h, m, t);
      M || (a.appendChild(b), ka && null != m && z(b, m));
      return b;
    };
    Cb = function(a, b, h, m, t) {
      b = w(0, a, b, h, m, t);
      M || (u(a).insertBefore(b, a), ka && null != m && z(b, m));
      return b;
    };
    Xb = z;
    Ga = function(a) {
      M ? a.outerHTML = "" : Aa(a).removeChild(a);
    };
    gb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== Ja;) {
        if (b = Aa(b), a === b) {
          return !0;
        }
      }
    };
    var ja = 9 > v, ka = ja;
    ob = function(a) {
      return a.tagName.toUpperCase();
    };
    oa = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Ya = function(a, b, h) {
      a.setAttribute(b, h);
    };
    Ca = function(a, b) {
      a.removeAttribute(b);
    };
    Db = function(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Yb = function(a) {
      return a.className;
    };
    pb = ea;
    Eb = S;
    Pa = function(a, b) {
      var h;
      if (!S(a, b)) {
        if (h = a.className) {
          b = " " + b;
        }
        ea(a, h + b);
      }
    };
    Qa = function(a, b, h) {
      a.style[b] = h;
    };
    Za = function(a, b) {
      var h = -1, m, t;
      if (5.5 > v) {
        if (b) {
          for (m = b.split(";"); t = m[++h];) {
            var A = t.split(":");
            a.style[A[0]] = t.substr(A[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > C || 1 > G ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    La.splice(0, 0, function() {
      function a(N) {
        N = Oa(N);
        for (var la = N.length, E, K, Y; la;) {
          if (E = N[--la], K = E.nodeType, 8 === K) {
            b && A.push(E);
          } else if (1 === K) {
            switch(K = ob(E), "/" === K.charAt(0) && (K = K.substr(1), T[K] = !0), K) {
              case "STYLE":
                if (7.2 <= C && 9 > C) {
                  break;
                }
              case "LINK":
                M || h || gb(Wa, E) || t.push(E);
                break;
              case "META":
                K = oa(E, "name") || oa(E, "property");
                for (Y = m.length; Y;) {
                  if (0 === K.indexOf(m[--Y])) {
                    A.push(E);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Db(E, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Db(E, "skip-cleanup")) {
                  break;
                }
              case "!":
                A.push(E);
                break;
              case "SOURCE":
                l.HTMLSourceElement || A.push(E);
                break;
              default:
                T[K] ? A.push(E) : Oa(E).length && a(E);
            }
          }
        }
        for (; t[0];) {
          Wa.appendChild(t.pop());
        }
        for (; A[0];) {
          Ga(A.pop());
        }
      }
      Ka = Ma("jsMain");
      var b = !(8 > C || 5 > v || za || .9 > G), h = 7 > v, m = ["og:", "twitter:", "fb:"], t = [], A = [], T = {};
      a(Ja);
    });
  })();
  var X, ba, sa, Ra, Fb, qb, hb, ib, Gb, jb, ca, Hb;
  (function() {
    function q() {
      return fa ? Sa ? 2 : Z ? 3 : 1 : 0;
    }
    function F(c) {
      ba(l, "load", F);
      F = r;
      u(La, c, !0);
      sa = La = r;
    }
    function p(c, g) {
      hb(function() {
        var x = a(c);
        g(x);
        x.addListener(g);
        return !0;
      });
    }
    function u(c, g, x) {
      for (var n = 0; n < c.length; ++n) {
        !0 === c[n](g) && (c.splice(n, 1), --n);
      }
      x && (c.length = 0);
    }
    function w(c, g, x) {
      m && !h.length && ra(z);
      h.push(c, g, x);
    }
    function z() {
      var c = h, g;
      for (h = []; g = c.shift();) {
        u(g, c.shift(), c.shift());
      }
    }
    function ea(c) {
      var g = c || event;
      c = t[g.type];
      var x = -1, n, J;
      for (v ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : T && (g.u = g.stopPropagation, g.stopPropagation = function() {
        J = !0;
      }); n = c[++x];) {
        n.i === this ? (this.g = n.h, this.g(g), this.g = R, this.g = r) : 7.2 > C && this === f && n.i === l && (l.g = n.h, l.g(g), delete l.g);
      }
      if (v) {
        return g.preventDefault = g.stopPropagation = r, g.returnValue;
      }
      T && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (la = !0), J && !la && g.u(), g.u = g.stopPropagation = r);
    }
    function S() {
      var c = 9 === b.offsetWidth;
      jb !== c && w(Qb, jb = c);
    }
    function M() {
      !La && ma && (mb(ma), ma = ra(ja));
    }
    function ja() {
      ma = 0;
      u(Ha);
    }
    function ka(c) {
      La || u(ta, c);
    }
    var a = l.matchMedia, b, h = [], m;
    La.push(function() {
      p = r;
      b = Ba(da, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      sa(function() {
        m = !0;
        h.length && ra(z);
      });
    });
    X = function(c, g, x, n) {
      if (N) {
        c.addEventListener(g, x, n ? Nb ? n : n.capture : !1);
      } else {
        var J = {i:c, h:x};
        n = t[g];
        var U = "on" + g, ha, va;
        if (n) {
          for (ha = n.length; va = n[--ha];) {
            if (va.i === c && va.h === x) {
              return;
            }
          }
          t[g].push(J);
        } else {
          t[g] = n = [J], A || (g = c[U], "function" === typeof g && g !== ea && n.unshift({i:c, h:g}));
        }
        A ? c.attachEvent(U, ea) : c[U] = ea;
      }
    };
    ba = function(c, g, x, n) {
      if (N) {
        c.removeEventListener(g, x, n ? Nb ? n : n.capture : !1);
      } else {
        n = t[g];
        g = "on" + g;
        var J, U, ha;
        if (n) {
          for (J = n.length; U = n[--J];) {
            U.i === c && (U.h === x ? n.splice(J, 1) : ha = !0);
          }
          ha || (A ? c.detachEvent(g, ea) : (c[g] = R, c[g] = null));
        }
      }
    };
    var t = {}, A = !1, T = 525.13 > Xa, N = !T && !za && l.addEventListener, la;
    T && Ja.addEventListener("click", function(c) {
      if (la) {
        return la = !1, c.preventDefault(), !1;
      }
    });
    sa = function(c) {
      La.push(c);
    };
    Ra = function(c) {
      E && E.push(c);
    };
    var E = [];
    if (419.3 >= Xa) {
      var K = function() {
        if (K) {
          var c = f.readyState;
          "loaded" === c || "complete" === c ? (K = r, F()) : ra(K);
        }
      };
      ra(K);
    } else {
      X(l, "load", F);
    }
    v || .9 <= G && 1.8 > G ? X(l, "unload", function(c) {
      u(E, c, !0);
    }) : E = r;
    hb = function(c) {
      Qb.push(c);
    };
    sa(function() {
      S();
      nb(S);
    });
    Gb = function(c) {
      na && na.push(c);
    };
    var Y = 60 > G || xb, fa, Z, Sa;
    if (89 <= G || 89 <= fb || yb && 79 <= Mb || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
      Hb = !0, p("(forced-colors:active)", function(c) {
        fa = c.matches;
        ca = q();
        w(na, ca);
      });
    } else if (10 <= v || wb || yb && Mb) {
      Hb = !0, p("(-ms-high-contrast:black-on-white)", function(c) {
        fa = Z = c.matches;
        ca !== q() && (ca = q(), w(na, ca));
      }), p("(-ms-high-contrast:white-on-black)", function(c) {
        fa = Sa = c.matches;
        ca !== q() && (ca = q(), w(na, ca));
      }), p("(-ms-high-contrast:active)", function(c) {
        fa = c.matches;
        ca !== q() && (ca = q(), w(na, ca));
      });
    } else if (yb && (v || G && 0 <= L.conpare(Ea, "1.8.1") || xb)) {
      var $a = function() {
        function c(n, J) {
          if (J && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var U = n.split("(")[1].split(",");
          return O(U[0]) + O(U[1]) + O(U[2]);
        }
        var g = f.defaultView, x = g ? g.getComputedStyle(b, null) : b.currentStyle;
        g = (x && x.color || "").split(" ").join("");
        x = (x && x.backgroundColor || "").split(" ").join("");
        g && (fa = "#123456" !== g && "rgb(18,52,86)" !== g, Z = c(g) < c(x, !0), Sa = c(g) > c(x, !0), ca !== q() && (ca = q(), w(na, ca, Y)));
      };
      hb(function(c) {
        if (c) {
          return Qa(b, "color", "#123456"), Qa(b, "backgroundColor", "#123456"), Y ? ($a(), na = r) : nb($a), $a = r, !0;
        }
      });
    } else {
      na = q = r;
    }
    ib = function(c) {
      wa.push(c);
    };
    var wa = [], Ta = 7.5 <= C && 8 > C;
    Ta && function() {
      for (var c = f.images, g = c.length, x; g;) {
        x = c[--g], x.s = x.src, Ca(x, "src");
      }
    }();
    sa(function() {
      function c() {
        n ? (J = x[--n], Ta && Ya(J, "src", J.s), Rb(g, Ta ? J.s : J.src)) : ib = wa = r;
      }
      function g(U) {
        u(wa, {m:J, o:U}, !n);
        c();
      }
      var x = f.images || Na("img"), n = x.length;
      if (12 > C || 532 > Xa) {
        c();
      } else {
        for (; n;) {
          var J = x[--n];
          w(wa, {m:J, o:9 > v ? J.complete : 0 <= J.naturalWidth ? J.naturalWidth : J.width}, !n);
        }
        ib = wa = r;
      }
    });
    Fb = function(c) {
      Ha.push(c);
    };
    var Ha = [], ma;
    X(l, "resize", M);
    Ra(function() {
      ma && clearTimeout(ma);
      ba(l, "resize", M);
    });
    qb = function(c) {
      ta.push(c);
    };
    var ta = [], ab = 0, kb = 1 > G || 1.2 <= G && 1.8 > G || 7.2 >= C;
    kb ? nb(function() {
      var c = l.scrollY || da.scrollTop;
      ab !== c && (ab = c, ka());
    }) : X(l, "scroll", ka);
    Ra(function() {
      kb || ba(l, "scroll", ka);
    });
  })();
  (function() {
    var q = 1 > G || 8 <= C && 9 > C, F = 7.2 <= C && 8 > C;
    v || !q && !F && function() {
      var p = Ba(Ja, "style"), u = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return u;
    }() || !Xa || q || F || function() {
      var p = Ba(Ja, "style");
      Xb(p, "");
      var u = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return u;
    }();
  })();
  (function() {
    9 > v && sa(function() {
      var q = Ba(da, "div");
      Za(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Ob = 1 < q.offsetHeight;
      Za(q, "");
      Ga(q);
    });
    Rb = function(q, F) {
      function p() {
        w || !z || u.complete ? (ra(q, !!u.width), u.onerror = u.onload = R, u = q = r) : (--z, ra(p));
      }
      var u = new Image(), w, z = 99;
      u.onerror = function() {
        w = !0;
      };
      u.onload = function() {
        w = !0;
      };
      u.src = F;
      ra(p);
    };
  })();
  (function() {
    ib(function(p) {
      var u = p.m;
      p = p.o;
      var w = Aa(u);
      !Eb(w, "aBodyRoot") && p ? Pa(w, "img-loaded") : p || oa(u, "alt") || Qa(u, "display", "none");
    });
    if (!Hb && na) {
      var q, F = function() {
        q = Ba(Wa, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:xa + "css/" + lb + "hc/" + zb});
        (Pb || 5.5 <= v && 9 > v && Ob) && Pa(da, "jsCanRotate");
        F = r;
      };
      Gb(function(p) {
        p && !q ? F() : q && (p ? Wa.appendChild(q) : Ga(q));
      });
    }
    5.5 <= v && 8 > v && na && Gb(function(p) {
      for (var u = Na("a"), w = u.length, z = 0; z < w; ++z) {
        u[z].hideFocus = !p;
      }
    });
    C && sa(function() {
      for (var p = Na("a"), u = p.length, w = 0, z; w < u; ++w) {
        z = p[w], "-1" === oa(z, "tabindex") ? Ca(z, "tabindex") : oa(z, "href") && Ya(z, "tabindex", "0");
      }
      p = Na("input");
      w = 0;
      for (u = p.length; w < u; ++w) {
        z = p[w], "hidden" === oa(z, "type") && Ca(z, "tabindex");
      }
    });
  })();
  (function() {
    function q(d) {
      var e = d.keyCode || d.L, k = m.length, y, D, B, Da;
      if ("keydown" !== d.type || 13 === e) {
        for (; k;) {
          if (e = m[--k], e.l === this || e.j === this) {
            k = e.l;
            var H = y = e.j;
            if (e.C) {
              if (Qa(k, "width", e.K), k.src = e.J, pb(H, e.F), k = e.A) {
                Za(k, e.D), pb(k, "caption jsCap");
              }
            } else {
              if (D = e.B) {
                for (delete e.B; y = Aa(y);) {
                  if (Eb(y, "caption")) {
                    e.A = y, e.D = y.style.cssText, Pa(y, "jsCap");
                  } else {
                    var I = ob(y);
                    if ("DIV" === I || "P" === I || "BLOCKQUOT" === I || "LI" === I || "DD" === I || "TD" === I || "TH" === I || "FORM" === I || "PRE" === I) {
                      break;
                    }
                  }
                }
                y = y.offsetWidth - 4 - 1;
                1600 < y && (y = 1600);
                if (e.G && 0 < D.split("/").pop().indexOf("=")) {
                  D = D.split("=");
                  I = D.length;
                  if (B = D[I - 1]) {
                    (Da = O(B.substr(1))) && B === "s" + Da ? D[I - 1] = "w" + y : D[I] = "w" + y;
                  }
                  D = D.join("=");
                } else if (0 < D.indexOf(".bp.blogspot.com/")) {
                  D = D.split("/");
                  I = D.length;
                  if (B = D[I - 2]) {
                    (Da = O(B.substr(1))) && B === "s" + Da ? D[I - 2] = "w" + y : D.splice(I - 1, 0, "w" + y);
                  }
                  D = D.join("/");
                }
                e.H = D;
              }
              e.F = Yb(H);
              Pa(H, "jsPicaLarge");
              Qa(k, "width", "");
              k.src = e.H;
              if (k = e.A) {
                Za(k, ""), Pa(k, "jsCapLarge");
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
      for (var e = arguments, k = 0, y = e.length; k < y; ++k) {
        if (isFinite(e[k])) {
          return e[k];
        }
      }
      return 0;
    }
    function u(d) {
      var e = Ha;
      if (jb) {
        if (ma && !e) {
          if (new Date() - 0 < ma) {
            return;
          }
          ma = r;
        }
        7 === d ? ta = 0 : (ta && (ta = mb(ta)), wa = p(l.pageYOffset, l.scrollY, K.scrollTop, da.scrollTop));
        e ? (Ha = w(r, e[0], e[1])) || (ma = new Date() - 0 + 99) : w();
      } else {
        Ha = r;
      }
    }
    function w(d, e, k) {
      function y(ya) {
        H = ya;
        if (Sa) {
          I = Sa + ":translate" + (Ta ? "3D(0," : "(0,") + ya + (Ta ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ya) {
          if (!E && (la || N)) {
            var rb = Y.offsetWidth;
          }
          I = N ? "position:fixed;width:" + rb + "px;top:" + (ya - D + Q) + "px" : E ? "top:" + ya + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ya + "px";
          la && I && (I += ";" + (0 > ya ? "clip:rect(" + -ya + "px " + rb + "px " + aa + "px 0)" : ya + aa < sb ? "clip:rect(0 " + rb + "px " + aa + "px 0)" : "clip:rect(0 " + rb + "px " + (sb - ya) + "px 0)"), 8 > v || (I = I.split(" ").join(",")));
        }
      }
      var D = wa, B = fa, Da = Y.offsetTop === B.offsetTop, H = 0, I = "", pa = !0;
      if (Da) {
        for (var V = 0, Q = 0, W = B; W && W !== da;) {
          Q += W.offsetTop, W = W.offsetParent;
        }
        H = $a;
        var Ib = p(l.innerHeight, K.offsetHeight), Jb = B.offsetHeight, aa = Z.offsetHeight, sb = aa < Jb ? Jb : aa, Ia = D, bb = Ia + Ib, tb = Q, ub = tb + sb, Zb = Q + H, bc = Zb + aa;
        B = Ia < tb ? tb : Ia;
        W = ub < bb ? ub : bb;
        var cb = W - B;
        Ia = ub <= Ia;
        bb = bb <= tb;
        if (e !== r) {
          pa = Q + e;
          d = pa + k;
          var db;
          if (Ia || bb) {
            return Ib <= k ? db = Q : db = Ia ? ub - k : Q + k - Ib, ma = r, l.scroll(p(l.pageXOffset, l.scrollX, K.scrollLeft, da.scrollLeft), db), Ha;
          }
          aa <= cb ? V = 3 : k <= cb ? aa - e <= cb ? V = 2 : B <= pa && d <= W ? B < Q + H && (V = 4) : V = B <= pa && pa <= W ? 5 : B <= d && d <= W ? 4 : d < B ? 4 : 5 : V = 4;
          pa = r;
        } else {
          d !== r ? aa <= cb ? (V = 7, pa = !1) : (H -= 60 * d, V = W - Q - aa, db = B - Q, H < V ? H = V : db < H && (H = db), V = 6) : Jb <= aa || (Ia ? V = 1 : bb || (aa <= cb ? V = 3 : B < Zb ? V = 3 : bc < W ? V = 2 : D < Q + aa - cb || (V = 2)));
        }
        switch(V) {
          case 0:
            y(0);
            break;
          case 1:
            y(sb - aa);
            break;
          case 2:
            y(W - Q - aa);
            break;
          case 3:
            y(B - Q);
            break;
          case 4:
            y(B - Q - e);
            break;
          case 5:
            y(W - Q - (e + k));
          case 6:
            y(H);
        }
      }
      Za(Z, I);
      $a = H;
      return Da && pa;
    }
    function z(d) {
      if (jb) {
        G && (wa = p(l.pageYOffset, K.scrollTop, da.scrollTop));
        var e = this !== d.target, k = e && p(d.deltaY, d.wheelDeltaY / 120, d.wheelDelta / -120, d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1));
        e && k && w(9 >= k ? -9 >= k ? -3 : k : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function ea(d) {
      for (var e = d.target, k = -1, y; y = t[++k];) {
        gb(y, e) && z(d);
      }
    }
    function S(d) {
      if (jb) {
        var e = !!Sa || G, k = d.target || d.srcElement;
        d = 0;
        var y;
        if (gb(Z, k)) {
          for (y = k.offsetHeight; k && (e ? gb(Z, k) : Z !== k);) {
            d += k.offsetTop, k = k.offsetParent;
          }
          T ? (Ha = [d, y], ta && mb(ta), ta = ra(u, 7, 1 > G ? 500 : 0)) : (wa = p(l.pageYOffset, l.scrollY, K.scrollTop, da.scrollTop), w(r, d, y));
        }
      }
    }
    function M() {
      x = l.onerror;
      l.onerror = ja;
      var d = f.activeElement;
      g !== d && (g = d, S({target:d}));
      l.onerror = x;
      x = r;
    }
    function ja() {
      l.onerror = x;
      x = g = r;
      return !0;
    }
    function ka() {
      n.call(J);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Ya(J, "id", "blog2slide-root"), va[1].parentNode.insertBefore(U, va[1]), b(), f.onkeydown = h) : ha && (Ga(U), Ca(J, "id"), Ca(ha, "id"), ha = f.onkeydown = r);
    }
    function b() {
      ha && Ca(ha, "id");
      Ua = 0 < Ua ? Kb < Ua ? Kb : Ua : 0;
      ha = va[Ua];
      Ya(ha, "id", "blog2slide-current");
    }
    function h(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++Ua, b();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --Ua, b();
      }
    }
    var m = [];
    Lb || (ib(function(d) {
      if (d.o && Ka) {
        d = d.m;
        var e = Aa(d), k = "", y;
        if ("A" === ob(e) && 1 === Wb(e).length) {
          var D = oa(e, "href"), B = D.split("?")[0].split("#")[0].split(".");
          B = (B[B.length - 1] || "").toLowerCase();
          if ((y = 0 < D.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + B + ".")) {
            X(e, "keydown", q), X(d, "click", q), X(e, "click", F), 9 > C || (k = d.offsetWidth - 4 + "px", Qa(d, "width", k)), Pa(e, "jsPica"), m.push({j:e, J:d.src, K:k, B:D, l:d, G:y});
          }
        }
      }
    }), Ra(function(d, e) {
      for (d = -1; e = m[++d];) {
        ba(e.j, "keydown", q), ba(e.l, "click", q), ba(e.j, "click", F);
      }
    }));
    var t = ["jsSidebarFixer1", "jsSidebarFixer2"], A = G || xb || wb, T = !(6 <= v && 9 > v || C || 1 <= G && 1.3 > G), N = !(5 > P(16) || 5 > P(17) || 2.2 > P(21) || 6 > P(12) || ia(30) && 534 > Xa || ia(32) || 7 > v || 9 > C || 1 > G), la = N || 7 > v || 1 > G, E = 7.5 > C, K, Y, fa, Z, Sa = Pb, $a = 0, wa = 0, Ta, Ha, ma, ta, ab = G && 0 <= L.conpare(Ea, "0.9.7"), kb = G && 0 >= L.conpare(Ea, "0.9.4");
    $b || Lb || (hb(function(d) {
      if (d) {
        if (!Ka) {
          return !0;
        }
        d = -1;
        var e;
        K = "CSS1Compat" !== f.compatMode ? da : Ja || da;
        Y = Ma("jsSide");
        fa = Ka;
        if (!Y) {
          return !0;
        }
        qb(u);
        Fb(u);
        Z = Cb(Bb(Y), "div", {id:"jsSidebarFixer"});
        for (8 > C || kb || 6 > v || (v || za ? X(Z, "focusin", S) : A ? X(f, "focus", S, {capture:!0, passive:!1}) : X(Z, "DOMFocusIn", S, !1)); 1 < Oa(Y).length;) {
          Z.appendChild(Oa(Y)[1]);
        }
        for (ab && !eb && X(f, "DOMMouseScroll", ea, !1); e = t[++d];) {
          var k = Ma(e);
          k.onwheel !== r ? X(k, "wheel", z, {passive:!1}) : eb ? X(k, "MozMousePixelScroll", z, !1) : ab ? t[d] = Ma(e) : (k.onmousewheel !== r || 9 <= C) && X(k, "mousewheel", z, !1);
        }
        v || wb || 2 > fb || (Ta = Fa.perspective !== r || Fa.MozPerspective !== r || Fa["-webkit-perspective"] !== r);
        u();
        return !0;
      }
    }), Ra(function() {
      var d = -1, e;
      if (ab && !eb) {
        ba(f, "DOMMouseScroll", ea, !1);
      } else {
        for (; e = t[++d];) {
          e = Ma(e), e.onwheel !== r ? ba(e, "wheel", z, {passive:!1}) : eb ? ba(e, "MozMousePixelScroll", z, !1) : (e.onmousewheel !== r || 9 <= C) && ba(e, "mousewheel", z, !1);
        }
      }
      8 > C || kb || 6 > v || (v || za ? ba(Z, "focusin", S, !1) : A ? ba(f, "focus", S, {capture:!0, passive:!1}) : ba(Z, "DOMFocusIn", S, !1));
      c && clearInterval(c);
    }));
    var c, g, x;
    6 > v && hb(function(d) {
      if (!Ka) {
        return !0;
      }
      d ? c = setInterval(M, 333) : c && (clearInterval(c), c = 0);
    });
    sa(function() {
      function d(Da, H, I, pa) {
        var V = pa ? "div" : "cite";
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
        I = pa ? Cb(Bb(k), V, {className:I}) : Ba(k, V, {className:I});
        Ba(I, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:H, I:C ? "0" : r} : {href:H, I:C ? "0" : r}, Da);
      }
      if (Ka) {
        for (var e = Ab(Ka, "blockquote"), k, y = -1, D, B; k = e[++y];) {
          D = oa(k, "title"), B = oa(k, "cite"), D && B ? (Ca(k, "title"), d(D, B, "js-bqLink", !0)) : B && (Ca(k, "cite"), d(l.decodeURI ? decodeURI(B) : B, B, "js-bqCite"));
        }
      }
    });
    var n, J, U, ha, va, Ua, Kb;
    sa(function() {
      var d = Ma("blog2slide-start");
      if (d) {
        var e = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        n = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== e || n ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(d.firstChild, "click", ka), d = Aa(d), J = Aa(d), va = Ab(d, "section"), U = f.createElement("h1"), U.innerHTML = Na("h1")[0].innerHTML, Kb = va.length, va.splice(0, 0, U), 0 !== e ? X(f, e + "ullscreenchange", a) : v ? X(f, "MSFullscreenChange", a, !1) : Fb(a)) : Ga(d);
      }
    });
  })();
  vb = f.scripts || Na("script");
  var xa = vb[vb.length - 1].src.split("/");
  --xa.length;
  "js" === xa[xa.length - 1] && --xa.length;
  (xa = xa.join("/")) && (xa += "/");
  var $b = ac || "1" === oa(da, "mob");
  lb = ($b ? "mb" : "pc") + "/";
  6.1 > qa && qb(Sb);
  Ra(Tb);
  6.1 > qa && qb(Ub);
  Ra(Vb);
  10 > v && (11 !== Va || 5 !== v) || (9 > C || 1 > G || !za && !l.addEventListener ? f.write('<link href="' + xa + "css/" + lb + zb + '" rel="stylesheet"' + (8 > C ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > C || 1.5 > G || 532 >= Xa || 8 > fb) && sa(function() {
    Ba(Wa, "link", {href:xa + "css/" + lb + zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

