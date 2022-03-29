var C, Ya;
Array.prototype.pop || (Array.prototype.pop = function() {
  var K = this[this.length - 1];
  --this.length;
  return K;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var K = arguments, k = 0, S = K.length, f = this.length; k < S; ++k) {
    this[f + k] = K[k];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var K = this[0], k = 1, S = this.length; k < S; ++k) {
    this[k - 1] = this[k];
  }
  --this.length;
  return K;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var K = arguments, k = K.length, S = this.length += k - 1, f = S; f >= k; --f) {
    this[f] = this[f - k];
  }
  for (f = 0; f < k; ++f) {
    this[f] = K[f];
  }
  return S;
});
Array.prototype.splice || (Array.prototype.splice = function(K, k) {
  var S = arguments, f = S.length - 2 - k, Za = this.slice(K, K + k), ya;
  if (0 < f) {
    var U = this.length - 1;
    for (ya = K + k; U >= ya; --U) {
      this[U + f] = this[U];
    }
  } else if (0 > f) {
    U = K + k;
    for (ya = this.length; U < ya; ++U) {
      this[U + f] = this[U];
    }
    this.length += f;
  }
  U = 2;
  for (ya = S.length; U < ya; ++U) {
    this[U - 2 + K] = S[U];
  }
  return Za;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(K, k) {
  var S = this.length >>> 0;
  if (0 === S) {
    return -1;
  }
  if (k) {
    var f = k || 0;
    f = -Infinity === f ? 0 : (0 > f ? -f : f) | 0;
    if (S <= f) {
      return -1;
    }
  }
  for (f = 0 <= f ? f : 0 < S + f ? S + f : 0; f < S; ++f) {
    if (this[f] === K) {
      return f;
    }
  }
  return -1;
});
(function(K, k, S, f, Za, ya, U, Jb, r) {
  function O(m) {
    if (K[0] === m) {
      return Ha === Ha + "" ? U(Ha) : Ha;
    }
  }
  function ma(m) {
    var B = K[3];
    if (K[2] === m) {
      return B === B + "" ? U(B) : B;
    }
  }
  var ba = f.body, Ia = ba.style, Ja, $a, Ka, Ha = K[1], w = O(2) || O(3), Ba = O(7), Kb = O(5) || O(6), F = O(8) || O(9), L = O(11) || O(12), lb = L && 0 <= K.conpare(Ha, "1.9.1"), Lb = O(13), ab = O(15);
  ya = O(16) || O(17);
  var ac = O(10) || O(25), Ra = O(20) || O(22);
  Ra || O(23) || O(21) || O(24);
  var bc = Ra && U(Za.userAgent.split("Edg/")[1]);
  Za = U(Za.appVersion.split("Trident/")[1]) + 4;
  var Mb = ma(35) || ma(36) || ma(37), cc = !w && !Ba && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Nb = (Ba ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : 7.2 > F ? "opr70" : 8 > F ? "opr72" : 9.5 > F ? "opr" + (F | 0) : L && !lb ? 1.3 <= L ? "gck190" : 1 <= L ? "gck121" : "gck097" : "modern") + ".css", wb = "", tc = ma(1) || ma(2) || ma(3) || 
  ma(4) || ma(8) || ma(9) || ma(10), dc, Ob = Ia.transform !== r ? "transform" : Ia["-o-transform"] !== r ? "-o-transform" : Ia["-ms-transform"] !== r ? "-ms-transform" : Ia.MozTransform !== r ? "-moz-transform" : Ia["-webkit-transform"] !== r ? "-webkit-transform" : "", Ca = [], ec = [], fc, ra, mb, xb, yb = [], zb = [], gc, hc, ic, jc;
  (function() {
    function m() {
      for (var a, g = 0, n = new Date() - 0; g < H.length;) {
        n < H[0].t ? ++g : (a = H.splice(g, 1)[0], a.f(a.p));
      }
      b = H.length ? setTimeout(m, na) : 0;
    }
    function B() {
      for (var a, g = 0; g < y.length; ++g) {
        a = y[g], a.f();
      }
    }
    function u() {
      fa && (fa = clearInterval(fa));
    }
    function t() {
      b && (b = clearTimeout(b));
    }
    C = function(a) {
      yb.push(a);
    };
    Ya = function(a) {
      zb.push(a);
    };
    xb = function(a) {
      y.length || (fa = setInterval(B, q));
      y.push({f:a, v:++P});
      return P;
    };
    gc = function() {
      fa && (u(), fa = setInterval(B, q));
    };
    hc = u;
    var y = [], q = 500, P = 0, fa;
    if (5 > w || Ba) {
      k._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    ra = function(a, g, n) {
      H.length || (b = setTimeout(m, na));
      H.push({f:a, p:g, v:++ka, t:new Date() - 0 + (na < n ? n : na)});
      return ka;
    };
    mb = function(a) {
      for (var g = H.length, n; n = H[--g];) {
        if (n.v === a) {
          H.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    ic = function() {
      b && (t(), b = setTimeout(m, na));
    };
    jc = t;
    var H = [], na = 16, ka = 0, b;
    if (5 > w || Ba) {
      k._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var La, Sa, Pb, oa, Ma, kc, Qb, W, Ab, lc, mc, Na, nb, Bb, sa, bb, Da, Rb, nc, Cb, Sb, Ta, ja, ha;
  (function() {
    function m(b, a, g) {
      var n = ["<", b], v = 1, A, Y;
      if (a) {
        for (A in a) {
          var M = a[A];
          if (null != M && "" !== M) {
            if ("style" === A) {
              n[++v] = ' style="';
              for (Y in M) {
                for (var la = ++v, J, N = [], V = Y.split(""), Ea = V.length; Ea;) {
                  J = V[--Ea], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), N[Ea] = J;
                }
                n[la] = N.join("") + ":" + M[Y] + ";";
              }
              n[++v] = '"';
            } else {
              "className" === A && (A = "class"), n[++v] = " " + A + '="' + M + '"';
            }
          }
        }
      }
      n[++v] = ">";
      null != g && (H && "font" !== b ? n[++v] = "<FONT>" + g + "</FONT>" : n[++v] = g);
      n[++v] = "</" + b + ">";
      return n.join("");
    }
    function B(b) {
      return u(f, b);
    }
    function u(b, a) {
      var g = "*" === a && 6 > w ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], v = 0, A;
      for (A = g.length; v < A; ++v) {
        n[v] = g[v];
      }
      return n;
    }
    function t(b) {
      return H ? b.parentElement : b.parentNode;
    }
    function y(b, a, g, n, v, A) {
      if (H) {
        var Y = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", M = Ma(2 > b ? oa(a) : a);
        M = 2 > b ? M.indexOf(a) + b : M.length;
        a.insertAdjacentHTML(Y, m(g, n, v));
        return Ma(a)[M];
      }
      a = na ? f.createElement(m(g, n)) : A ? f.createElementNS("http://www.w3.org/2000/svg", g) : f.createElement(g);
      if (n && !na) {
        for (Y in n) {
          if ((g = n[Y]) || 0 === g) {
            switch(Y) {
              case "class":
              case "className":
                Cb(a, g);
                break;
              case "style":
                b = a.style;
                for (M in g) {
                  b[M] = g[M];
                }
                break;
              default:
                bb(a, Y, g);
            }
          }
        }
      }
      ka || null != v && q(a, v);
      return a;
    }
    function q(b, a) {
      if (H) {
        return y(2, b, "font", r, a);
      }
      var g = f.createTextNode("" + a);
      b.appendChild(g);
      return g;
    }
    function P(b, a) {
      9 > w ? b.className = a : b.setAttribute("class", a);
    }
    function fa(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var H = 5 > w;
    Ja = B("html")[0];
    $a = B("head")[0];
    La = function(b) {
      return k[b] || f[b] || f.getElementById(b);
    };
    Sa = B;
    Pb = u;
    oa = t;
    Ma = function(b) {
      b = H ? b.children : b.childNodes;
      for (var a = [], g = b.length; g;) {
        a[--g] = b[g];
      }
      return a;
    };
    kc = function(b) {
      var a = !(7.03 < F && 7.2 > F) && b.children;
      b = a ? a : b.childNodes;
      for (var g = [], n = b.length, v = -1, A; n;) {
        if (A = b[--n], a || 1 === A.nodeType) {
          H && "FONT" === A.tagName || (g[++v] = A);
        }
      }
      return g;
    };
    Qb = function(b) {
      return H ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    W = function(b, a, g, n, v) {
      a = y(2, b, a, g, n, v);
      H || (b.appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    Ab = function(b, a, g, n, v) {
      a = y(0, b, a, g, n, v);
      H || (t(b).insertBefore(a, b), ka && null != n && q(a, n));
      return a;
    };
    lc = function(b, a, g, n, v) {
      a = y(1, b, a, g, n, v);
      var A;
      H || ((A = b.nextSibling) ? oa(A).insertBefore(a, A) : oa(b).appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    mc = q;
    Na = function(b) {
      oa(b) ? H ? b.outerHTML = "" : oa(b).removeChild(b) : C("[DOM] p_DOM_remove(), No parentNode!");
    };
    nb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Ja;) {
        if (a = oa(a), b === a) {
          return !0;
        }
      }
    };
    var na = 9 > w, ka = 9 > w;
    Bb = function(b) {
      return b.tagName.toUpperCase();
    };
    sa = function(b, a) {
      return b.getAttribute(a) || "";
    };
    bb = function(b, a, g) {
      b.setAttribute(a, g);
    };
    Da = function(b, a) {
      b.removeAttribute(a);
    };
    Rb = function(b, a) {
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    };
    nc = function(b) {
      return b.className;
    };
    Cb = P;
    Sb = fa;
    Ta = function(b, a) {
      var g;
      if (!fa(b, a)) {
        if (g = b.className) {
          a = " " + a;
        }
        P(b, g + a);
      }
    };
    ja = function(b, a, g) {
      b.style[a] = g;
    };
    ha = function(b, a) {
      var g = -1, n, v;
      if (5.5 > w) {
        if (a) {
          for (n = a.split(";"); v = n[++g];) {
            var A = v.split(":");
            b.style[A[0]] = v.substr(A[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > F || 1 > L ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    Ca.splice(0, 0, function() {
      function b(M) {
        M = Ma(M);
        for (var la = M.length, J, N, V; la;) {
          if (J = M[--la], N = J.nodeType, 8 === N) {
            a && A.push(J);
          } else if (1 === N) {
            switch(N = Bb(J), "/" === N.charAt(0) && (N = N.substr(1), Y[N] = !0), N) {
              case "STYLE":
                if (7.2 <= F && 9 > F) {
                  break;
                }
              case "LINK":
                H || g || nb($a, J) || v.push(J);
                break;
              case "META":
                N = sa(J, "name") || sa(J, "property");
                for (V = n.length; V;) {
                  if (0 === N.indexOf(n[--V])) {
                    A.push(J);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Rb(J, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Rb(J, "skip-cleanup")) {
                  break;
                }
              case "!":
                A.push(J);
                break;
              case "SOURCE":
                k.HTMLSourceElement || A.push(J);
                break;
              default:
                Y[N] ? A.push(J) : Ma(J).length && b(J);
            }
          }
        }
        for (; v[0];) {
          $a.appendChild(v.pop());
        }
        for (; A[0];) {
          Na(A.pop());
        }
      }
      Ka = La("jsMain");
      var a = !(8 > F || 5 > w || Ba || .9 > L), g = 7 > w, n = ["og:", "twitter:", "fb:"], v = [], A = [], Y = {};
      b(Ja);
    });
  })();
  var X, ca, za, Ua, Tb, Db, cb, Ub, Vb, db, Z, Wb;
  (function() {
    function m() {
      return Oa ? eb ? 2 : Fa ? 3 : 1 : 0;
    }
    function B(e) {
      ca(k, "load", B);
      B = r;
      t(Ca, e, !0);
      Ca = r;
    }
    function u(e, l) {
      cb(function() {
        var z = b(e);
        l(z);
        z.addListener(l);
        return !0;
      });
    }
    function t(e, l, z) {
      for (var p = 0; p < e.length; ++p) {
        !0 === e[p](l) && (e.splice(p, 1), --p);
      }
      z && (e.length = 0);
    }
    function y(e, l, z) {
      n && !g.length && ra(q);
      g.push(e, l, z);
    }
    function q() {
      var e = g, l;
      for (g = []; l = e.shift();) {
        t(l, e.shift(), e.shift());
      }
    }
    function P(e) {
      var l = e || event;
      e = v[l.type];
      var z = -1, p, E;
      for (w ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : Y && (l.u = l.stopPropagation, l.stopPropagation = function() {
        E = !0;
      }); p = e[++z];) {
        p.i === this ? (this.g = p.h, this.g(l), this.g = S, this.g = r) : 7.2 > F && this === f && p.i === k && (k.g = p.h, k.g(l), delete k.g);
      }
      if (w) {
        return l.preventDefault = l.stopPropagation = r, l.returnValue;
      }
      Y && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (la = !0), E && !la && l.u(), l.u = l.stopPropagation = r);
    }
    function fa() {
      var e = 9 === a.offsetWidth;
      db !== e && (y(ec, db = e), C("p_cssAvailability:" + db));
    }
    function H() {
      !Ca && aa && (mb(aa), aa = ra(na));
    }
    function na() {
      aa = 0;
      t(ob);
    }
    function ka(e) {
      Ca || t(fb, e);
    }
    var b = k.matchMedia, a, g = [], n;
    Ca.push(function() {
      u = r;
      a = W(ba, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        n = !0;
        g.length && ra(q);
      });
    });
    X = function(e, l, z, p) {
      if (M) {
        e.addEventListener(l, z, p ? cc ? p : p.capture : !1);
      } else {
        var E = {i:e, h:z};
        p = v[l];
        var da = "on" + l, pa, Va;
        if (p) {
          for (pa = p.length; Va = p[--pa];) {
            if (Va.i === e && Va.h === z) {
              return;
            }
          }
          v[l].push(E);
        } else {
          v[l] = p = [E], A || (l = e[da], "function" === typeof l && l !== P && p.unshift({i:e, h:l}));
        }
        A ? e.attachEvent(da, P) : e[da] = P;
      }
    };
    ca = function(e, l, z, p) {
      if (M) {
        e.removeEventListener(l, z, p ? cc ? p : p.capture : !1);
      } else {
        p = v[l];
        l = "on" + l;
        var E, da, pa;
        if (p) {
          for (E = p.length; da = p[--E];) {
            da.i === e && (da.h === z ? p.splice(E, 1) : pa = !0);
          }
          pa || (A ? e.detachEvent(l, P) : (e[l] = S, e[l] = null));
        }
      }
    };
    var v = {}, A = !1, Y = 525.13 > ab, M = !Y && !Ba && k.addEventListener, la;
    Y && Ja.addEventListener("click", function(e) {
      if (la) {
        return la = !1, e.preventDefault(), !1;
      }
    });
    za = function(e) {
      Ca ? Ca.push(e) : alert("Load event has already been dispatched!");
    };
    Ua = function(e) {
      J && J.push(e);
    };
    var J = [];
    if (419.3 >= ab) {
      var N = function() {
        if (N) {
          var e = f.readyState;
          "loaded" === e || "complete" === e ? (N = r, B()) : ra(N);
        }
      };
      ra(N);
    } else {
      X(k, "load", B);
    }
    w || 1.8 > L ? X(k, "unload", function(e) {
      t(J, e, !0);
    }) : J = r;
    cb = function(e) {
      ec.push(e);
    };
    za(function() {
      fa();
      xb(fa);
    });
    Vb = function(e) {
      V && V.push(e);
    };
    var V = [], Ea = 60 > L || Lb, Oa, Fa, eb;
    if (89 <= L || 89 <= Ra || Mb && 79 <= bc || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Wb = !0, u("(forced-colors:active)", function(e) {
        Oa = e.matches;
        Z = m();
        y(V, Z);
        C("(forced-colors:active):" + Z);
      });
    } else if (10 <= w || Kb || Mb && bc) {
      Wb = !0, u("(-ms-high-contrast:black-on-white)", function(e) {
        Oa = Fa = e.matches;
        Z !== m() && (Z = m(), y(V, Z), C("(-ms-high-contrast:black-on-white):" + Z));
      }), u("(-ms-high-contrast:white-on-black)", function(e) {
        Oa = eb = e.matches;
        Z !== m() && (Z = m(), y(V, Z), C("(-ms-high-contrast:white-on-black):" + Z));
      }), u("(-ms-high-contrast:active)", function(e) {
        Oa = e.matches;
        Z !== m() && (Z = m(), y(V, Z), C("(-ms-high-contrast:active):" + Z));
      });
    } else if (Mb && (w || L && 0 <= K.conpare(Ha, "1.8.1") || Lb)) {
      var gb = function() {
        function e(E, da) {
          C("isBlack:" + E);
          return "#000000" === E || "rgb(0,0,0)" === E || da && "transparent" === E;
        }
        function l(E, da) {
          C("isWhite:" + E);
          return "#ffffff" === E || "rgb(255,255,255)" === E || da && "transparent" === E;
        }
        var z = f.defaultView, p = z ? z.getComputedStyle(a, null) : a.currentStyle;
        z = (p && p.color || "").split(" ").join("");
        p = (p && p.backgroundColor || "").split(" ").join("");
        z && (Oa = "#123456" !== z && "rgb(18,52,86)" !== z, Fa = e(z) && l(p, !0), eb = l(z) && e(p, !0), Z !== m() && (Z = m(), C("(forced-colors-fallback):" + Z), y(V, Z, Ea)));
      };
      cb(function(e) {
        if (e) {
          return ja(a, "color", "#123456"), ja(a, "backgroundColor", "#123456"), Ea ? (gb(), V = r) : xb(gb), gb = r, !0;
        }
      });
    } else {
      V = m = r;
    }
    Ub = function(e) {
      Ca || alert("p_listenImageReady is called back for images present at load time.");
      qa.push(e);
    };
    var qa = [], ta = 7.5 <= F && 8 > F;
    ta && function() {
      for (var e = f.images, l = e.length, z; l;) {
        z = e[--l], z.s = z.src, Da(z, "src");
      }
    }();
    za(function() {
      function e() {
        p ? (E = z[--p], ta && bb(E, "src", E.s), fc(l, ta ? E.s : E.src)) : qa = r;
      }
      function l(da) {
        t(qa, {m:E, o:da}, !p);
        e();
      }
      var z = f.images || Sa("img"), p = z.length;
      if (12 > F || 532 > ab) {
        e();
      } else {
        for (; p;) {
          var E = z[--p];
          y(qa, {m:E, o:9 > w ? E.complete : 0 <= E.naturalWidth ? E.naturalWidth : E.width}, !p);
        }
        qa = r;
      }
    });
    Tb = function(e) {
      ob.push(e);
    };
    var ob = [], aa;
    X(k, "resize", H);
    Ua(function() {
      aa && clearTimeout(aa);
      ca(k, "resize", H);
    });
    Db = function(e) {
      fb.push(e);
    };
    var fb = [], pb = 0, Ga = 1 > L || 1.2 <= L && 1.8 > L || 7.2 >= F;
    Ga ? xb(function() {
      var e = k.scrollY || ba.scrollTop;
      pb !== e && (pb = e, ka());
    }) : X(k, "scroll", ka);
    Ua(function() {
      Ga || ca(k, "scroll", ka);
    });
  })();
  var oc = 0;
  (function() {
    function m(q) {
      return q.styleSheet || q.sheet;
    }
    var B = 1 > L || 8 <= F && 9 > F, u = 7.2 <= F && 8 > F, t = !!w || !B && !u && function() {
      var q = W(Ja, "style"), P = !!m(q);
      P && (C("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), C("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), C("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), C("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), C("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText)));
      Na(q);
      return P;
    }();
    C("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + t);
    var y = !t && ab && !B && !u && function() {
      var q = W(Ja, "style"), P;
      mc(q, "");
      if (P = !!m(q)) {
        C("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), C("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), C("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), C("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), C("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText));
      }
      Na(q);
      return P;
    }();
    t || C("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + y);
    oc = B || u ? 1 : t || y ? 2 : 0;
    C("[CSSOM] p_CSSOM_canuse : " + oc);
  })();
  (function() {
    9 > w && za(function() {
      var m = W(ba, "div");
      ha(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      dc = 1 < m.offsetHeight;
      ha(m, "");
      Na(m);
    });
    fc = function(m, B) {
      function u() {
        y || !q || t.complete ? (C("[imageTest] timer -> img.complete. img.width=" + t.width), ra(m, !!t.width), t.onerror = t.onload = S, t = m = r) : (--q, ra(u));
      }
      var t = new Image(), y, q = 99;
      C("[imageTest] start.");
      t.onerror = function() {
        C("[imageTest] error!");
        y = !0;
      };
      t.onload = function() {
        C("[imageTest] onload.");
        y = !0;
      };
      t.src = B;
      ra(u);
    };
  })();
  (function() {
    if (!Wb) {
      var m, B = function() {
        m = W($a, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + wb + "hc/" + Nb});
        if (Ob || 5.5 <= w && 9 > w && dc) {
          Ta(ba, "jsCanRotate"), C("jsCanRotate!");
        }
        B = r;
      };
      Vb(function(u) {
        u && !m ? B() : m && (u ? $a.appendChild(m) : Na(m));
      });
    }
    Ub(function(u) {
      var t = u.m;
      u = u.o;
      var y = oa(t);
      !Sb(y, "aBodyRoot") && u ? Ta(y, "img-loaded") : u || sa(t, "alt") || ja(t, "display", "none");
    });
    5.5 <= w && 8 > w && Vb(function(u) {
      for (var t = Sa("a"), y = t.length, q = 0; q < y; ++q) {
        t[q].hideFocus = !u;
      }
    });
    F && za(function() {
      for (var u = Sa("a"), t = u.length, y = 0, q; y < t; ++y) {
        q = u[y], "-1" === sa(q, "tabindex") ? Da(q, "tabindex") : sa(q, "href") && bb(q, "tabindex", "0");
      }
      u = Sa("input");
      y = 0;
      for (t = u.length; y < t; ++y) {
        q = u[y], "hidden" === sa(q, "type") && Da(q, "tabindex");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.L, h = N.length, x, G, D, wa;
      if ("keydown" !== c.type || 13 === d) {
        for (; h;) {
          if (d = N[--h], d.l === this || d.j === this) {
            h = d.l;
            var I = x = d.j;
            if (d.C) {
              if (ja(h, "width", d.K), h.src = d.J, Cb(I, d.F), h = d.A) {
                ha(h, d.D), Cb(h, "caption jsCap");
              }
            } else {
              if (G = d.B) {
                for (delete d.B; x = oa(x);) {
                  if (Sb(x, "caption")) {
                    d.A = x, d.D = x.style.cssText, Ta(x, "jsCap");
                  } else {
                    var Q = Bb(x);
                    if ("DIV" === Q || "P" === Q || "BLOCKQUOT" === Q) {
                      break;
                    }
                  }
                }
                x = x.offsetWidth - 4 - 1;
                1600 < x && (x = 1600);
                if (d.G && 0 < G.split("/").pop().indexOf("=")) {
                  G = G.split("=");
                  Q = G.length;
                  if (D = G[Q - 1]) {
                    (wa = U(D.substr(1))) && D === "s" + wa ? G[Q - 1] = "w" + x : G[Q] = "w" + x;
                  }
                  G = G.join("=");
                } else if (0 < G.indexOf(".bp.blogspot.com/")) {
                  G = G.split("/");
                  Q = G.length;
                  if (D = G[Q - 2]) {
                    (wa = U(D.substr(1))) && D === "s" + wa ? G[Q - 2] = "w" + x : G.splice(Q - 1, 0, "w" + x);
                  }
                  G = G.join("/");
                }
                d.H = G;
              }
              d.F = nc(I);
              Ta(I, "jsPicaLarge");
              ja(h, "width", "");
              h.src = d.H;
              if (h = d.A) {
                ha(h, ""), Ta(h, "jsCapLarge");
              }
            }
            d.C = !d.C;
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
    function u(c) {
      for (var d = arguments, h = 0, x = d.length; h < x; ++h) {
        if (isFinite(d[h])) {
          return d[h];
        }
      }
      return 0;
    }
    function t(c) {
      var d = l;
      if (db) {
        if (z && !d) {
          if (new Date() - 0 < z) {
            return;
          }
          z = r;
        }
        7 === c ? (a("t"), p = 0) : (a("s"), p && (p = mb(p)), Ga = u(k.pageYOffset, k.scrollY, qa.scrollTop, ba.scrollTop));
        d ? (l = q(r, d[0], d[1])) || (z = new Date() - 0 + 99) : q();
        n();
      } else {
        l = r;
      }
    }
    function y() {
      a("w.blur");
    }
    function q(c, d, h) {
      function x(Aa) {
        I = Aa;
        if (fb) {
          Q = fb + ":translate" + (e ? "3D(0," : "(0,") + Aa + (e ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Aa) {
          if (!gb && (eb || Fa)) {
            var Eb = ta.offsetWidth;
          }
          Q = Fa ? "position:fixed;width:" + Eb + "px;top:" + (Aa - G + R) + "px" : gb ? "top:" + Aa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Aa + "px";
          eb && Q && (Q += ";" + (0 > Aa ? "clip:rect(" + -Aa + "px " + Eb + "px " + ea + "px 0)" : Aa + ea < qb ? "clip:rect(0 " + Eb + "px " + ea + "px 0)" : "clip:rect(0 " + Eb + "px " + (qb - Aa) + "px 0)"), 8 > w || (Q = Q.split(" ").join(",")));
        }
      }
      var G = Ga, D = ob, wa = ta.offsetTop === D.offsetTop, I = 0, Q = "", xa = !0;
      if (wa) {
        for (var T = 0, R = 0, ia = D; ia && ia !== ba;) {
          R += ia.offsetTop, ia = ia.offsetParent;
        }
        I = pb;
        ia = u(k.innerHeight, qa.offsetHeight);
        var Xb = D.offsetHeight, ea = aa.offsetHeight, qb = ea < Xb ? Xb : ea, Pa = G, hb = Pa + ia, Fb = R, Gb = Fb + qb, pc = R + I, uc = pc + ea;
        D = Pa < Fb ? Fb : Pa;
        var Qa = Gb < hb ? Gb : hb, ib = Qa - D;
        Pa = Gb <= Pa;
        hb = hb <= Fb;
        if (d !== r) {
          xa = R + d;
          c = xa + h;
          if (Pa || hb) {
            return ia <= h ? (d = R, a("4.1.1")) : Pa ? (d = Gb - h, a("4.1.2")) : (d = R + h - ia, a("4.1.3")), z = r, k.scroll(u(k.pageXOffset, k.scrollX, qa.scrollLeft, ba.scrollLeft), d), a("4.1.*"), l;
          }
          ea <= ib ? (T = 4, a("4.2")) : h <= ib ? ea - d <= ib ? (T = 2, a("4.3.1")) : D <= xa && c <= Qa ? D < R + I && (T = 4, a("4.3.2")) : D <= xa && xa <= Qa ? (T = 5, a("4.3.3")) : D <= c && c <= Qa ? (T = 4, a("4.3.4")) : c < D ? (T = 4, a("4.3.5")) : (T = 5, a("4.3.6")) : (T = 4, a("4.4"));
          xa = r;
        } else {
          c !== r ? ea <= ib ? (T = 7, xa = !1, a("3.1")) : (I -= 60 * c, T = Qa - R - ea, c = D - R, I < T ? (I = T, a("3.2.1")) : c < I ? (I = c, a("3.2.2")) : a("3.2.3"), T = 6) : Xb <= ea || (Pa ? (T = 1, a("2.2.1")) : hb ? a("2.2.2") : ea <= ib ? (T = 3, a("2.3")) : D < pc ? (T = 3, a("2.4.1")) : uc < Qa ? (T = 2, a("2.4.2")) : G < R + ea - ib ? a("2.4.3") : (T = 2, a("2.4.4")));
        }
        switch(T) {
          case 0:
            x(0);
            break;
          case 1:
            x(qb - ea);
            break;
          case 2:
            x(Qa - R - ea);
            break;
          case 3:
            x(D - R);
            break;
          case 4:
            x(D - R - d);
            break;
          case 5:
            x(Qa - R - (d + h));
          case 6:
            x(I);
        }
        v(I, ea, R, qb, ia, d || "-", h || "-");
      } else {
        v(I, "-", "-", "-", "-", "-", "-");
      }
      ha(aa, Q);
      pb = I;
      return wa && xa;
    }
    function P(c) {
      if (db) {
        a("m");
        L && (Ga = u(k.pageYOffset, qa.scrollTop, ba.scrollTop), n());
        var d = this !== c.target, h = d && u(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && h && q(9 >= h ? -9 >= h ? -3 : h : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      for (var d = c.target, h = -1, x; x = V[++h];) {
        nb(x, d) && P(c);
      }
    }
    function H(c) {
      if (db) {
        var d = !!fb || L, h = c.target || c.srcElement, x = 0;
        if (nb(aa, h)) {
          a(c.type || "ie5focus");
          X(h, "blur", b);
          for (c = h.offsetHeight; h && (d ? nb(aa, h) : aa !== h);) {
            x += h.offsetTop, h = h.offsetParent;
          }
          Oa ? (l = [x, c], p && mb(p), p = ra(t, 7, 1 > L ? 500 : 0)) : (Ga = u(k.pageYOffset, k.scrollY, qa.scrollTop, ba.scrollTop), q(r, x, c));
          A(x, c);
        }
      }
    }
    function na() {
      rb = k.onerror;
      k.onerror = ka;
      var c = f.activeElement;
      Va !== c && (Va = c, H({target:c}));
      k.onerror = rb;
      rb = r;
    }
    function ka() {
      C("error!");
      k.onerror = rb;
      rb = Va = r;
      return !0;
    }
    function b() {
      ca(this, "blur", b);
      A(0, 0);
    }
    function a(c) {
      sb && (Hb && (Hb = mb(Hb)), Hb = ra(g, 0, 1400), sb.innerHTML += " " + c);
    }
    function g() {
      sb.innerHTML = "";
    }
    function n() {
      tb && (ja(tb, "top", (Ga / 10 | 0) + "px"), qc.innerHTML = " scrl:" + (Ga | 0));
    }
    function v(c, d, h, x, G, D, wa) {
      jb && (ja(jb, "top", ((c + h) / 10 | 0) + "px"), ja(jb, "height", (d / 10 | 0) + "px"), ja(tb, "height", (G / 10 | 0) + "px"), ja(Yb, "height", (ba.scrollHeight / 10 | 0) + "px"), rc.innerHTML = "conY:" + h + "/sidY" + c + ", conH:" + x + "/sidH" + d + ", focY:" + D + " focH:" + wa);
    }
    function A(c, d) {
      ub && (ja(ub, "top", (c / 10 | 0) + "px"), ja(ub, "height", (d / 10 | 0) + "px"));
    }
    function Y() {
      Zb.call(Ib);
    }
    function M() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || k.fullScreen ? (bb(Ib, "id", "blog2slide-root"), kb[1].parentNode.insertBefore(vb, kb[1]), la(), f.onkeydown = J) : Wa && (Na(vb), Da(Ib, "id"), Da(Wa, "id"), Wa = f.onkeydown = r);
    }
    function la() {
      Wa && Da(Wa, "id");
      Xa = 0 < Xa ? $b < Xa ? $b : Xa : 0;
      Wa = kb[Xa];
      bb(Wa, "id", "blog2slide-current");
    }
    function J(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Xa, la();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Xa, la();
      }
    }
    var N = [];
    ac || (Ub(function(c) {
      if (c.o && Ka) {
        c = c.m;
        var d = oa(c), h = "", x;
        if ("A" === Bb(d) && 1 === kc(d).length) {
          var G = sa(d, "href"), D = G.split("?")[0].split("#")[0].split(".");
          D = (D[D.length - 1] || "").toLowerCase();
          if ((x = 0 < G.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + D + ".")) {
            X(d, "keydown", m), X(c, "click", m), X(d, "click", B), 9 > F || (h = c.offsetWidth - 4 + "px", ja(c, "width", h)), Ta(d, "jsPica"), N.push({j:d, J:c.src, K:h, B:G, l:c, G:x});
          }
        }
      }
    }), Ua(function(c, d) {
      for (c = -1; d = N[++c];) {
        ca(d.j, "keydown", m), ca(d.l, "click", m), ca(d.j, "click", B);
      }
    }));
    var V = ["jsSidebarFixer1", "jsSidebarFixer2"], Ea = L || Lb || Kb, Oa = !(6 <= w && 9 > w || F || 1 <= L && 1.3 > L), Fa = !(5 > O(16) || 5 > O(17) || 2.2 > O(21) || 6 > O(12) || ma(30) && 534 > ab || ma(32) || 7 > w || 9 > F || 1 > L), eb = Fa || 7 > w || 1 > L, gb = 7.5 > F, qa, ta, ob, aa, fb = Ob, pb = 0, Ga = 0, e, l, z, p, E = L && 0 <= K.conpare(Ha, "0.9.7"), da = L && 0 >= K.conpare(Ha, "0.9.4");
    sc || ac || (cb(function(c) {
      if (c) {
        if (!Ka) {
          return !0;
        }
        c = -1;
        var d;
        qa = "CSS1Compat" !== f.compatMode ? ba : Ja || ba;
        ta = La("jsSide");
        ob = Ka;
        if (!ta) {
          return !0;
        }
        Db(t);
        Tb(t);
        aa = Ab(Qb(ta), "div", {id:"jsSidebarFixer"});
        X(k, "blur", y);
        for (8 > F || da || 6 > w || (w || Ba ? X(aa, "focusin", H) : Ea ? X(f, "focus", H, {capture:!0, passive:!1}) : X(aa, "DOMFocusIn", H, !1)); 1 < Ma(ta).length;) {
          aa.appendChild(Ma(ta)[1]);
        }
        for (E && !lb && X(f, "DOMMouseScroll", fa, !1); d = V[++c];) {
          var h = La(d);
          h.onwheel !== r ? X(h, "wheel", P, {passive:!1}) : lb ? X(h, "MozMousePixelScroll", P, !1) : E ? V[c] = La(d) : (h.onmousewheel !== r || 9 <= F) && X(h, "mousewheel", P, !1);
        }
        w || Kb || 2 > Ra || (e = Ia.perspective !== r || Ia.MozPerspective !== r || Ia["-webkit-perspective"] !== r);
        t();
        return !0;
      }
    }), Ua(function() {
      var c = -1, d;
      if (E && !lb) {
        ca(f, "DOMMouseScroll", fa, !1);
      } else {
        for (; d = V[++c];) {
          d = La(d), d.onwheel !== r ? ca(d, "wheel", P, {passive:!1}) : lb ? ca(d, "MozMousePixelScroll", P, !1) : (d.onmousewheel !== r || 9 <= F) && ca(d, "mousewheel", P, !1);
        }
      }
      ca(k, "blur", y);
      8 > F || da || 6 > w || (w || Ba ? ca(aa, "focusin", H, !1) : Ea ? ca(f, "focus", H, {capture:!0, passive:!1}) : ca(aa, "DOMFocusIn", H, !1));
      pa && clearInterval(pa);
    }));
    var pa, Va, rb;
    6 > w && cb(function(c) {
      if (!Ka) {
        return !0;
      }
      c ? pa = setInterval(na, 333) : pa && (clearInterval(pa), pa = 0);
    });
    var rc, qc, sb, Yb, tb, jb, ub, Hb;
    cb(function(c) {
      if (c) {
        if (!Ka) {
          return !0;
        }
        var d = Ma(ba);
        c = Ab(d[0], "div");
        if (Fa) {
          ha(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; d.length;) {
            c.appendChild(d.shift());
          }
          ha(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = lc(c, "div");
          ha(Ja, "overflow:hidden");
          ha(ba, "overflow:hidden");
          ha(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        W(c, "div", r, Ob ? "transform" + (e ? "3D" : "") : Fa ? "pos:fixed" : "pos:absolute");
        d = W(c, "div");
        rc = W(d, "span");
        qc = W(d, "span");
        sb = W(c, "div");
        Yb = W(c, "div");
        ha(Yb, "position:absolute;left:0;top:0;width:54px;background:#242");
        jb = W(c, "div");
        ha(jb, "position:absolute;left:0;width:54px;background:#363");
        tb = W(c, "div");
        ha(tb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ub = W(jb, "div");
        ha(ub, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    za(function() {
      function c(wa, I, Q, xa) {
        var T = xa ? "div" : "cite";
        if (0 === I.indexOf("urn:isbn:")) {
          I = I.substr(9).toUpperCase().split("-").join("");
          if (13 === I.length) {
            I = I.toString().slice(3, -1);
            for (var R = 0, ia = 0; 9 > ia; ia++) {
              R += (I.charAt(ia) - 0) * (10 - ia);
            }
            R = (11 - R % 11) % 11;
            R = 10 === R ? "X" : R.toString();
            I += R;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        Q = xa ? Ab(Qb(h), T, {className:Q}) : W(h, T, {className:Q});
        W(Q, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:I, I:F ? "0" : r} : {href:I, I:F ? "0" : r}, wa);
      }
      if (Ka) {
        for (var d = Pb(Ka, "blockquote"), h, x = -1, G, D; h = d[++x];) {
          G = sa(h, "title"), D = sa(h, "cite"), G && D ? (Da(h, "title"), c(G, D, "js-bqLink", !0)) : D && (Da(h, "cite"), c(k.decodeURI ? decodeURI(D) : D, D, "js-bqCite"));
        }
      }
    });
    var Zb, Ib, vb, Wa, kb, Xa, $b;
    za(function() {
      var c = La("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        Zb = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || Zb ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(c.firstChild, "click", Y), c = oa(c), Ib = oa(c), kb = Pb(c, "section"), vb = f.createElement("h1"), vb.innerHTML = Sa("h1")[0].innerHTML, $b = kb.length, kb.splice(0, 0, vb), 0 !== d ? X(f, d + "ullscreenchange", M) : w ? X(f, "MSFullscreenChange", M, !1) : Tb(M)) : Na(c);
      }
    });
  })();
  Jb = f.scripts || Sa("script");
  var va = Jb[Jb.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  C("[p_assetUrl] " + va);
  var sc = tc || "1" === sa(ba, "mob");
  wb = (sc ? "mb" : "pc") + "/";
  za(function() {
    var m;
    (m = La("logger")) || alert("#logger not found!");
    for (m ? (C = function(B) {
      W(m, "P", r, B);
    }, Ya = function(B) {
      W(m, "P", {style:{color:"red"}}, B);
    }, k.onerror = function(B, u, t) {
      Ya(B + ", " + u + ", " + t);
      return !0;
    }) : k.console ? (C = console.log, Ya = console.error) : F ? (C = S, Ya = opera.postError) : C = Ya = S; yb.length;) {
      C(yb.shift());
    }
    for (; zb.length;) {
      C(zb.shift());
    }
    yb = zb = r;
  });
  6.1 > ya && Db(gc);
  Ua(hc);
  6.1 > ya && Db(ic);
  Ua(jc);
  10 > w && (11 !== Za || 5 !== w) || (9 > F || 1 > L || !Ba && !k.addEventListener ? f.write('<link href="' + va + "css/" + wb + Nb + '" rel="stylesheet"' + (8 > F ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > F || 1.5 > L || 532 >= ab || 2 > Ra || 4 <= Ra && 8 > Ra) && za(function() {
    W($a, "link", {href:va + "css/" + wb + Nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

