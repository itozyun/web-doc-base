Array.prototype.pop || (Array.prototype.pop = function() {
  var J = this[this.length - 1];
  --this.length;
  return J;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var J = arguments, l = 0, R = J.length, f = this.length; l < R; ++l) {
    this[f + l] = J[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var J = this[0], l = 1, R = this.length; l < R; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return J;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var J = arguments, l = J.length, R = this.length += l - 1, f = R; f >= l; --f) {
    this[f] = this[f - l];
  }
  for (f = 0; f < l; ++f) {
    this[f] = J[f];
  }
  return R;
});
Array.prototype.splice || (Array.prototype.splice = function(J, l) {
  var R = arguments, f = R.length - 2 - l, Wa = this.slice(J, J + l), qa;
  if (0 < f) {
    var N = this.length - 1;
    for (qa = J + l; N >= qa; --N) {
      this[N + f] = this[N];
    }
  } else if (0 > f) {
    N = J + l;
    for (qa = this.length; N < qa; ++N) {
      this[N + f] = this[N];
    }
    this.length += f;
  }
  N = 2;
  for (qa = R.length; N < qa; ++N) {
    this[N - 2 + J] = R[N];
  }
  return Wa;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(J, l) {
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
    if (this[f] === J) {
      return f;
    }
  }
  return -1;
});
(function(J, l, R, f, Wa, qa, N, vb, r) {
  function O(q) {
    if (J[0] === q) {
      return Ea === Ea + "" ? N(Ea) : Ea;
    }
  }
  function ia(q) {
    var F = J[3];
    if (J[2] === q) {
      return F === F + "" ? N(F) : F;
    }
  }
  var da = f.body, Fa = da.style, Ja, Xa, Ka, Ea = J[1], v = O(2) || O(3), za = O(7), wb = O(5) || O(6), C = O(8) || O(9), K = O(11) || O(12), fb = K && 0 <= J.conpare(Ea, "1.9.1"), xb = O(13), Ya = O(15);
  qa = O(16) || O(17);
  var Lb = O(10) || O(25), La = O(20) || O(22);
  La || O(23) || O(21) || O(24);
  var Mb = La && N(Wa.userAgent.split("Edg/")[1]);
  Wa = N(Wa.appVersion.split("Trident/")[1]) + 4;
  var yb = ia(35) || ia(36) || ia(37), Nb = !v && !za && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), zb = (za ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > C ? "opr70" : 8 > C ? "opr72" : 9.5 > C ? "opr" + (C | 0) : K && !fb ? 1.3 <= K ? "gck190" : 1 <= K ? "gck121" : "gck097" : "modern") + ".css", lb = "", ac = ia(1) || ia(2) || ia(3) || 
  ia(4) || ia(8) || ia(9) || ia(10), Ob, Pb = Fa.transform !== r ? "transform" : Fa["-o-transform"] !== r ? "-o-transform" : Fa["-ms-transform"] !== r ? "-ms-transform" : Fa.MozTransform !== r ? "-moz-transform" : Fa["-webkit-transform"] !== r ? "-webkit-transform" : "", Ma = [], Qb = [], na = [], Rb, ra, mb, nb, Sb, Tb, Ub, Vb;
  (function() {
    function q() {
      for (var b, h = 0, m = new Date() - 0; h < L.length;) {
        m < L[0].t ? ++h : (b = L.splice(h, 1)[0], b.f(b.p));
      }
      a = L.length ? setTimeout(q, ja) : 0;
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
      L.length || (a = setTimeout(q, ja));
      L.push({f:b, p:h, v:++ka, t:new Date() - 0 + (ja < m ? m : ja)});
      return ka;
    };
    mb = function(b) {
      for (var h = L.length, m; m = L[--h];) {
        if (m.v === b) {
          L.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    Ub = function() {
      a && (u(), a = setTimeout(q, ja));
    };
    Vb = u;
    var L = [], ja = 16, ka = 0, a;
    if (5 > v || za) {
      l._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var Na, Oa, Ab, Aa, Pa, Wb, Bb, Ba, Cb, Xb, Ga, gb, ob, oa, Za, Ca, Db, Yb, pb, Eb, Qa, Ra, $a;
  (function() {
    function q(a, b, h) {
      var m = ["<", a], t = 1, A, T;
      if (b) {
        for (A in b) {
          var M = b[A];
          if (null != M && "" !== M) {
            if ("style" === A) {
              m[++t] = ' style="';
              for (T in M) {
                for (var la = ++t, E, I = [], Y = T.split(""), fa = Y.length; fa;) {
                  E = Y[--fa], "A" <= E && "Z" >= E && (E = "-" + E.toLowerCase()), I[fa] = E;
                }
                m[la] = I.join("") + ":" + M[T] + ";";
              }
              m[++t] = '"';
            } else {
              "className" === A && (A = "class"), m[++t] = " " + A + '="' + M + '"';
            }
          }
        }
      }
      m[++t] = ">";
      null != h && (L && "font" !== a ? m[++t] = "<FONT>" + h + "</FONT>" : m[++t] = h);
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
      return L ? a.parentElement : a.parentNode;
    }
    function w(a, b, h, m, t, A) {
      if (L) {
        var T = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend", M = Pa(2 > a ? Aa(b) : b);
        M = 2 > a ? M.indexOf(b) + a : M.length;
        b.insertAdjacentHTML(T, q(h, m, t));
        b = Pa(b)[M];
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
                  for (M in h) {
                    a[M] = h[M];
                  }
                  break;
                default:
                  Za(b, T, h);
              }
            }
          }
        }
        ka || null != t && z(b, t);
      }
      return b;
    }
    function z(a, b) {
      if (L) {
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
    var L = 5 > v;
    Ja = F("html")[0];
    Xa = F("head")[0];
    Na = function(a) {
      return l[a] || f[a] || f.getElementById(a);
    };
    Oa = F;
    Ab = p;
    Aa = u;
    Pa = function(a) {
      a = L ? a.children : a.childNodes;
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
          L && "FONT" === A.tagName || (h[++t] = A);
        }
      }
      return h;
    };
    Bb = function(a) {
      return L ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    Ba = function(a, b, h, m, t) {
      b = w(2, a, b, h, m, t);
      L || (a.appendChild(b), ka && null != m && z(b, m));
      return b;
    };
    Cb = function(a, b, h, m, t) {
      b = w(0, a, b, h, m, t);
      L || (u(a).insertBefore(b, a), ka && null != m && z(b, m));
      return b;
    };
    Xb = z;
    Ga = function(a) {
      L ? a.outerHTML = "" : Aa(a).removeChild(a);
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
    Za = function(a, b, h) {
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
    Qa = function(a, b) {
      var h;
      if (!S(a, b)) {
        if (h = a.className) {
          b = " " + b;
        }
        ea(a, h + b);
      }
    };
    Ra = function(a, b, h) {
      a.style[b] = h;
    };
    $a = function(a, b) {
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
        9 > C || 1 > K ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    Ma.splice(0, 0, function() {
      function a(M) {
        M = Pa(M);
        for (var la = M.length, E, I, Y; la;) {
          if (E = M[--la], I = E.nodeType, 8 === I) {
            b && A.push(E);
          } else if (1 === I) {
            switch(I = ob(E), "/" === I.charAt(0) && (I = I.substr(1), T[I] = !0), I) {
              case "STYLE":
                if (7.2 <= C && 9 > C) {
                  break;
                }
              case "LINK":
                L || h || gb(Xa, E) || t.push(E);
                break;
              case "META":
                I = oa(E, "name") || oa(E, "property");
                for (Y = m.length; Y;) {
                  if (0 === I.indexOf(m[--Y])) {
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
                T[I] ? A.push(E) : Pa(E).length && a(E);
            }
          }
        }
        for (; t[0];) {
          Xa.appendChild(t.pop());
        }
        for (; A[0];) {
          Ga(A.pop());
        }
      }
      Ka = Na("jsMain");
      var b = !(8 > C || 5 > v || za || .9 > K), h = 7 > v, m = ["og:", "twitter:", "fb:"], t = [], A = [], T = {};
      a(Ja);
    });
  })();
  var X, ba, sa, Sa, Fb, qb, hb, ib, Gb, jb, ca, Hb;
  (function() {
    function q() {
      return fa ? Ta ? 2 : Z ? 3 : 1 : 0;
    }
    function F(c) {
      ba(l, "load", F);
      F = r;
      u(Ma, c, !0);
      sa = Ma = r;
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
      var x = -1, n, H;
      for (v ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : T && (g.u = g.stopPropagation, g.stopPropagation = function() {
        H = !0;
      }); n = c[++x];) {
        n.i === this ? (this.g = n.h, this.g(g), this.g = R, this.g = r) : 7.2 > C && this === f && n.i === l && (l.g = n.h, l.g(g), delete l.g);
      }
      if (v) {
        return g.preventDefault = g.stopPropagation = r, g.returnValue;
      }
      T && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (la = !0), H && !la && g.u(), g.u = g.stopPropagation = r);
    }
    function S() {
      var c = 9 === b.offsetWidth;
      jb !== c && w(Qb, jb = c);
    }
    function L() {
      !Ma && ma && (mb(ma), ma = ra(ja));
    }
    function ja() {
      ma = 0;
      u(Ha);
    }
    function ka(c) {
      Ma || u(ta, c);
    }
    var a = l.matchMedia, b, h = [], m;
    Ma.push(function() {
      p = r;
      b = Ba(da, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      sa(function() {
        m = !0;
        h.length && ra(z);
      });
    });
    X = function(c, g, x, n) {
      if (M) {
        c.addEventListener(g, x, n ? Nb ? n : n.capture : !1);
      } else {
        var H = {i:c, h:x};
        n = t[g];
        var U = "on" + g, ha, va;
        if (n) {
          for (ha = n.length; va = n[--ha];) {
            if (va.i === c && va.h === x) {
              return;
            }
          }
          t[g].push(H);
        } else {
          t[g] = n = [H], A || (g = c[U], "function" === typeof g && g !== ea && n.unshift({i:c, h:g}));
        }
        A ? c.attachEvent(U, ea) : c[U] = ea;
      }
    };
    ba = function(c, g, x, n) {
      if (M) {
        c.removeEventListener(g, x, n ? Nb ? n : n.capture : !1);
      } else {
        n = t[g];
        g = "on" + g;
        var H, U, ha;
        if (n) {
          for (H = n.length; U = n[--H];) {
            U.i === c && (U.h === x ? n.splice(H, 1) : ha = !0);
          }
          ha || (A ? c.detachEvent(g, ea) : (c[g] = R, c[g] = null));
        }
      }
    };
    var t = {}, A = !1, T = 525.13 > Ya, M = !T && !za && l.addEventListener, la;
    T && Ja.addEventListener("click", function(c) {
      if (la) {
        return la = !1, c.preventDefault(), !1;
      }
    });
    sa = function(c) {
      Ma.push(c);
    };
    Sa = function(c) {
      E && E.push(c);
    };
    var E = [];
    if (419.3 >= Ya) {
      var I = function() {
        if (I) {
          var c = f.readyState;
          "loaded" === c || "complete" === c ? (I = r, F()) : ra(I);
        }
      };
      ra(I);
    } else {
      X(l, "load", F);
    }
    v || 1.8 > K ? X(l, "unload", function(c) {
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
    var Y = 60 > K || xb, fa, Z, Ta;
    if (89 <= K || 89 <= La || yb && 79 <= Mb || a && (a("(forced-colors:none)").matches || a("(forced-colors:active)").matches)) {
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
        fa = Ta = c.matches;
        ca !== q() && (ca = q(), w(na, ca));
      }), p("(-ms-high-contrast:active)", function(c) {
        fa = c.matches;
        ca !== q() && (ca = q(), w(na, ca));
      });
    } else if (yb && (v || K && 0 <= J.conpare(Ea, "1.8.1") || xb)) {
      var ab = function() {
        function c(n, H) {
          if (H && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var U = n.split("(")[1].split(",");
          return N(U[0]) + N(U[1]) + N(U[2]);
        }
        var g = f.defaultView, x = g ? g.getComputedStyle(b, null) : b.currentStyle;
        g = (x && x.color || "").split(" ").join("");
        x = (x && x.backgroundColor || "").split(" ").join("");
        g && (fa = "#123456" !== g && "rgb(18,52,86)" !== g, Z = c(g) < c(x, !0), Ta = c(g) > c(x, !0), ca !== q() && (ca = q(), w(na, ca, Y)));
      };
      hb(function(c) {
        if (c) {
          return Ra(b, "color", "#123456"), Ra(b, "backgroundColor", "#123456"), Y ? (ab(), na = r) : nb(ab), ab = r, !0;
        }
      });
    } else {
      na = q = r;
    }
    ib = function(c) {
      wa.push(c);
    };
    var wa = [], Ua = 7.5 <= C && 8 > C;
    Ua && function() {
      for (var c = f.images, g = c.length, x; g;) {
        x = c[--g], x.s = x.src, Ca(x, "src");
      }
    }();
    sa(function() {
      function c() {
        n ? (H = x[--n], Ua && Za(H, "src", H.s), Rb(g, Ua ? H.s : H.src)) : ib = wa = r;
      }
      function g(U) {
        u(wa, {m:H, o:U}, !n);
        c();
      }
      var x = f.images || Oa("img"), n = x.length;
      if (12 > C || 532 > Ya) {
        c();
      } else {
        for (; n;) {
          var H = x[--n];
          w(wa, {m:H, o:9 > v ? H.complete : 0 <= H.naturalWidth ? H.naturalWidth : H.width}, !n);
        }
        ib = wa = r;
      }
    });
    Fb = function(c) {
      Ha.push(c);
    };
    var Ha = [], ma;
    X(l, "resize", L);
    Sa(function() {
      ma && clearTimeout(ma);
      ba(l, "resize", L);
    });
    qb = function(c) {
      ta.push(c);
    };
    var ta = [], bb = 0, kb = 1 > K || 1.2 <= K && 1.8 > K || 7.2 >= C;
    kb ? nb(function() {
      var c = l.scrollY || da.scrollTop;
      bb !== c && (bb = c, ka());
    }) : X(l, "scroll", ka);
    Sa(function() {
      kb || ba(l, "scroll", ka);
    });
  })();
  (function() {
    var q = 1 > K || 8 <= C && 9 > C, F = 7.2 <= C && 8 > C;
    v || !q && !F && function() {
      var p = Ba(Ja, "style"), u = !(!p.styleSheet && !p.sheet);
      Ga(p);
      return u;
    }() || !Ya || q || F || function() {
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
      $a(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Ob = 1 < q.offsetHeight;
      $a(q, "");
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
      !Eb(w, "aBodyRoot") && p ? Qa(w, "img-loaded") : p || oa(u, "alt") || Ra(u, "display", "none");
    });
    if (!Hb && na) {
      var q, F = function() {
        q = Ba(Xa, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:xa + "css/" + lb + "hc/" + zb});
        (Pb || 5.5 <= v && 9 > v && Ob) && Qa(da, "jsCanRotate");
        F = r;
      };
      Gb(function(p) {
        p && !q ? F() : q && (p ? Xa.appendChild(q) : Ga(q));
      });
    }
    5.5 <= v && 8 > v && na && Gb(function(p) {
      for (var u = Oa("a"), w = u.length, z = 0; z < w; ++z) {
        u[z].hideFocus = !p;
      }
    });
    C && sa(function() {
      for (var p = Oa("a"), u = p.length, w = 0, z; w < u; ++w) {
        z = p[w], "-1" === oa(z, "tabindex") ? Ca(z, "tabindex") : oa(z, "href") && Za(z, "tabindex", "0");
      }
      p = Oa("input");
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
            var G = y = e.j;
            if (e.C) {
              if (Ra(k, "width", e.K), k.src = e.J, pb(G, e.F), k = e.A) {
                $a(k, e.D), pb(k, "caption jsCap");
              }
            } else {
              if (D = e.B) {
                for (delete e.B; y = Aa(y);) {
                  if (Eb(y, "caption")) {
                    e.A = y, e.D = y.style.cssText, Qa(y, "jsCap");
                  } else {
                    var P = ob(y);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                y = y.offsetWidth - 4 - 1;
                1600 < y && (y = 1600);
                if (e.G && 0 < D.split("/").pop().indexOf("=")) {
                  D = D.split("=");
                  P = D.length;
                  if (B = D[P - 1]) {
                    (Da = N(B.substr(1))) && B === "s" + Da ? D[P - 1] = "w" + y : D[P] = "w" + y;
                  }
                  D = D.join("=");
                } else if (0 < D.indexOf(".bp.blogspot.com/")) {
                  D = D.split("/");
                  P = D.length;
                  if (B = D[P - 2]) {
                    (Da = N(B.substr(1))) && B === "s" + Da ? D[P - 2] = "w" + y : D.splice(P - 1, 0, "w" + y);
                  }
                  D = D.join("/");
                }
                e.H = D;
              }
              e.F = Yb(G);
              Qa(G, "jsPicaLarge");
              Ra(k, "width", "");
              k.src = e.H;
              if (k = e.A) {
                $a(k, ""), Qa(k, "jsCapLarge");
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
        7 === d ? ta = 0 : (ta && (ta = mb(ta)), wa = p(l.pageYOffset, l.scrollY, I.scrollTop, da.scrollTop));
        e ? (Ha = w(r, e[0], e[1])) || (ma = new Date() - 0 + 99) : w();
      } else {
        Ha = r;
      }
    }
    function w(d, e, k) {
      function y(ya) {
        G = ya;
        if (Ta) {
          P = Ta + ":translate" + (Ua ? "3D(0," : "(0,") + ya + (Ua ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ya) {
          if (!E && (la || M)) {
            var rb = Y.offsetWidth;
          }
          P = M ? "position:fixed;width:" + rb + "px;top:" + (ya - D + Q) + "px" : E ? "top:" + ya + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ya + "px";
          la && P && (P += ";" + (0 > ya ? "clip:rect(" + -ya + "px " + rb + "px " + aa + "px 0)" : ya + aa < sb ? "clip:rect(0 " + rb + "px " + aa + "px 0)" : "clip:rect(0 " + rb + "px " + (sb - ya) + "px 0)"), 8 > v || (P = P.split(" ").join(",")));
        }
      }
      var D = wa, B = fa, Da = Y.offsetTop === B.offsetTop, G = 0, P = "", pa = !0;
      if (Da) {
        for (var V = 0, Q = 0, W = B; W && W !== da;) {
          Q += W.offsetTop, W = W.offsetParent;
        }
        G = ab;
        var Ib = p(l.innerHeight, I.offsetHeight), Jb = B.offsetHeight, aa = Z.offsetHeight, sb = aa < Jb ? Jb : aa, Ia = D, cb = Ia + Ib, tb = Q, ub = tb + sb, Zb = Q + G, bc = Zb + aa;
        B = Ia < tb ? tb : Ia;
        W = ub < cb ? ub : cb;
        var db = W - B;
        Ia = ub <= Ia;
        cb = cb <= tb;
        if (e !== r) {
          pa = Q + e;
          d = pa + k;
          var eb;
          if (Ia || cb) {
            return Ib <= k ? eb = Q : eb = Ia ? ub - k : Q + k - Ib, ma = r, l.scroll(p(l.pageXOffset, l.scrollX, I.scrollLeft, da.scrollLeft), eb), Ha;
          }
          aa <= db ? V = 3 : k <= db ? aa - e <= db ? V = 2 : B <= pa && d <= W ? B < Q + G && (V = 4) : V = B <= pa && pa <= W ? 5 : B <= d && d <= W ? 4 : d < B ? 4 : 5 : V = 4;
          pa = r;
        } else {
          d !== r ? aa <= db ? (V = 7, pa = !1) : (G -= 60 * d, V = W - Q - aa, eb = B - Q, G < V ? G = V : eb < G && (G = eb), V = 6) : Jb <= aa || (Ia ? V = 1 : cb || (aa <= db ? V = 3 : B < Zb ? V = 3 : bc < W ? V = 2 : D < Q + aa - db || (V = 2)));
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
            y(G);
        }
      }
      $a(Z, P);
      ab = G;
      return Da && pa;
    }
    function z(d) {
      if (jb) {
        K && (wa = p(l.pageYOffset, I.scrollTop, da.scrollTop));
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
        var e = !!Ta || K, k = d.target || d.srcElement;
        d = 0;
        var y;
        if (gb(Z, k)) {
          for (y = k.offsetHeight; k && (e ? gb(Z, k) : Z !== k);) {
            d += k.offsetTop, k = k.offsetParent;
          }
          T ? (Ha = [d, y], ta && mb(ta), ta = ra(u, 7, 1 > K ? 500 : 0)) : (wa = p(l.pageYOffset, l.scrollY, I.scrollTop, da.scrollTop), w(r, d, y));
        }
      }
    }
    function L() {
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
      n.call(H);
    }
    function a() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || l.fullScreen ? (Za(H, "id", "blog2slide-root"), va[1].parentNode.insertBefore(U, va[1]), b(), f.onkeydown = h) : ha && (Ga(U), Ca(H, "id"), Ca(ha, "id"), ha = f.onkeydown = r);
    }
    function b() {
      ha && Ca(ha, "id");
      Va = 0 < Va ? Kb < Va ? Kb : Va : 0;
      ha = va[Va];
      Za(ha, "id", "blog2slide-current");
    }
    function h(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++Va, b();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --Va, b();
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
            X(e, "keydown", q), X(d, "click", q), X(e, "click", F), 9 > C || (k = d.offsetWidth - 4 + "px", Ra(d, "width", k)), Qa(e, "jsPica"), m.push({j:e, J:d.src, K:k, B:D, l:d, G:y});
          }
        }
      }
    }), Sa(function(d, e) {
      for (d = -1; e = m[++d];) {
        ba(e.j, "keydown", q), ba(e.l, "click", q), ba(e.j, "click", F);
      }
    }));
    var t = ["jsSidebarFixer1", "jsSidebarFixer2"], A = K || xb || wb, T = !(6 <= v && 9 > v || C || 1 <= K && 1.3 > K), M = !(5 > O(16) || 5 > O(17) || 2.2 > O(21) || 6 > O(12) || ia(30) && 534 > Ya || ia(32) || 7 > v || 9 > C || 1 > K), la = M || 7 > v || 1 > K, E = 7.5 > C, I, Y, fa, Z, Ta = Pb, ab = 0, wa = 0, Ua, Ha, ma, ta, bb = K && 0 <= J.conpare(Ea, "0.9.7"), kb = K && 0 >= J.conpare(Ea, "0.9.4");
    $b || Lb || (hb(function(d) {
      if (d) {
        if (!Ka) {
          return !0;
        }
        d = -1;
        var e;
        I = "CSS1Compat" !== f.compatMode ? da : Ja || da;
        Y = Na("jsSide");
        fa = Ka;
        if (!Y) {
          return !0;
        }
        qb(u);
        Fb(u);
        Z = Cb(Bb(Y), "div", {id:"jsSidebarFixer"});
        for (8 > C || kb || 6 > v || (v || za ? X(Z, "focusin", S) : A ? X(f, "focus", S, {capture:!0, passive:!1}) : X(Z, "DOMFocusIn", S, !1)); 1 < Pa(Y).length;) {
          Z.appendChild(Pa(Y)[1]);
        }
        for (bb && !fb && X(f, "DOMMouseScroll", ea, !1); e = t[++d];) {
          var k = Na(e);
          k.onwheel !== r ? X(k, "wheel", z, {passive:!1}) : fb ? X(k, "MozMousePixelScroll", z, !1) : bb ? t[d] = Na(e) : (k.onmousewheel !== r || 9 <= C) && X(k, "mousewheel", z, !1);
        }
        v || wb || 2 > La || (Ua = Fa.perspective !== r || Fa.MozPerspective !== r || Fa["-webkit-perspective"] !== r);
        u();
        return !0;
      }
    }), Sa(function() {
      var d = -1, e;
      if (bb && !fb) {
        ba(f, "DOMMouseScroll", ea, !1);
      } else {
        for (; e = t[++d];) {
          e = Na(e), e.onwheel !== r ? ba(e, "wheel", z, {passive:!1}) : fb ? ba(e, "MozMousePixelScroll", z, !1) : (e.onmousewheel !== r || 9 <= C) && ba(e, "mousewheel", z, !1);
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
      d ? c = setInterval(L, 333) : c && (clearInterval(c), c = 0);
    });
    sa(function() {
      function d(Da, G, P, pa) {
        var V = pa ? "div" : "cite";
        if (0 === G.indexOf("urn:isbn:")) {
          G = G.substr(9).toUpperCase().split("-").join("");
          if (13 === G.length) {
            G = G.toString().slice(3, -1);
            for (var Q = 0, W = 0; 9 > W; W++) {
              Q += (G.charAt(W) - 0) * (10 - W);
            }
            Q = (11 - Q % 11) % 11;
            Q = 10 === Q ? "X" : Q.toString();
            G += Q;
          }
          10 === G.length && (G = "//www.amazon.co.jp/exec/obidos/ASIN/" + G + "/itozyun-22/ref=nosim/");
        }
        P = pa ? Cb(Bb(k), V, {className:P}) : Ba(k, V, {className:P});
        Ba(P, "a", 0 === G.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:G, I:C ? "0" : r} : {href:G, I:C ? "0" : r}, Da);
      }
      if (Ka) {
        for (var e = Ab(Ka, "blockquote"), k, y = -1, D, B; k = e[++y];) {
          D = oa(k, "title"), B = oa(k, "cite"), D && B ? (Ca(k, "title"), d(D, B, "js-bqLink", !0)) : B && (Ca(k, "cite"), d(l.decodeURI ? decodeURI(B) : B, B, "js-bqCite"));
        }
      }
    });
    var n, H, U, ha, va, Va, Kb;
    sa(function() {
      var d = Na("blog2slide-start");
      if (d) {
        var e = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        n = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== e || n ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(d.firstChild, "click", ka), d = Aa(d), H = Aa(d), va = Ab(d, "section"), U = f.createElement("h1"), U.innerHTML = Oa("h1")[0].innerHTML, Kb = va.length, va.splice(0, 0, U), 0 !== e ? X(f, e + "ullscreenchange", a) : v ? X(f, "MSFullscreenChange", a, !1) : Fb(a)) : Ga(d);
      }
    });
  })();
  vb = f.scripts || Oa("script");
  var xa = vb[vb.length - 1].src.split("/");
  --xa.length;
  "js" === xa[xa.length - 1] && --xa.length;
  (xa = xa.join("/")) && (xa += "/");
  var $b = ac || "1" === oa(da, "mob");
  lb = ($b ? "mb" : "pc") + "/";
  6.1 > qa && qb(Sb);
  Sa(Tb);
  6.1 > qa && qb(Ub);
  Sa(Vb);
  10 > v && (11 !== Wa || 5 !== v) || (9 > C || 1 > K || !za && !l.addEventListener ? f.write('<link href="' + xa + "css/" + lb + zb + '" rel="stylesheet"' + (8 > C ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > C || 1.5 > K || 532 >= Ya || 2 > La || 4 <= La && 8 > La) && sa(function() {
    Ba(Xa, "link", {href:xa + "css/" + lb + zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

