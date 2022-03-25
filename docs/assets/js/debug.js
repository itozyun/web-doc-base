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
  } else {
    if (0 > f) {
      U = K + k;
      for (ya = this.length; U < ya; ++U) {
        this[U + f] = this[U];
      }
      this.length += f;
    }
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
      return Ga === Ga + "" ? U(Ga) : Ga;
    }
  }
  function ma(m) {
    var B = K[3];
    if (K[2] === m) {
      return B === B + "" ? U(B) : B;
    }
  }
  var aa = f.body, Ha = aa.style, Ia, $a, Ja, Ga = K[1], x = O(2) || O(3), Ba = O(7), Kb = O(5) || O(6), E = O(8) || O(9), L = O(11) || O(12), lb = L && 0 <= K.conpare(Ga, "1.9.1"), Lb = O(13), ab = O(15);
  ya = O(16) || O(17);
  var $b = O(10) || O(25), Ra = O(20) || O(22);
  Ra || O(23) || O(21) || O(24);
  var ac = Ra && U(Za.userAgent.split("Edg/")[1]);
  Za = U(Za.appVersion.split("Trident/")[1]) + 4;
  var Mb = ma(35) || ma(36) || ma(37), bc = !x && !Ba && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Nb = (Ba ? "ie5mac" : 5.5 > x ? "ie5win" : 6 > x ? "ie55" : 10 > x ? "ie" + (x | 0) : 7.2 > E ? "opr70" : 8 > E ? "opr72" : 9.5 > E ? "opr" + (E | 0) : L && !lb ? 1.3 <= L ? "gck190" : 1 <= L ? "gck121" : "gck097" : "modern") + ".css", wb = "", tc = ma(1) || ma(2) || ma(3) || 
  ma(4) || ma(8) || ma(9) || ma(10), cc, Ob = Ha.transform !== r ? "transform" : Ha["-o-transform"] !== r ? "-o-transform" : Ha["-ms-transform"] !== r ? "-ms-transform" : Ha.MozTransform !== r ? "-moz-transform" : Ha["-webkit-transform"] !== r ? "-webkit-transform" : "", Ca = [], dc = [], ec, ra, mb, xb, yb = [], zb = [], fc, gc, hc, ic;
  (function() {
    function m() {
      for (var a, g = 0, n = new Date - 0; g < G.length;) {
        n < G[0].t ? ++g : (a = G.splice(g, 1)[0], a.f(a.p));
      }
      b = G.length ? setTimeout(m, na) : 0;
    }
    function B() {
      for (var a, g = 0; g < z.length; ++g) {
        a = z[g], a.f();
      }
    }
    function t() {
      ea && (ea = clearInterval(ea));
    }
    function u() {
      b && (b = clearTimeout(b));
    }
    C = function(a) {
      yb.push(a);
    };
    Ya = function(a) {
      zb.push(a);
    };
    xb = function(a) {
      z.length || (ea = setInterval(B, q));
      z.push({f:a, v:++P});
      return P;
    };
    fc = function() {
      ea && (t(), ea = setInterval(B, q));
    };
    gc = t;
    var z = [], q = 500, P = 0, ea;
    if (5 > x || Ba) {
      k._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    ra = function(a, g, n) {
      G.length || (b = setTimeout(m, na));
      G.push({f:a, p:g, v:++ka, t:new Date - 0 + (na < n ? n : na)});
      return ka;
    };
    mb = function(a) {
      for (var g = G.length, n; n = G[--g];) {
        if (n.v === a) {
          G.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    hc = function() {
      b && (u(), b = setTimeout(m, na));
    };
    ic = u;
    var G = [], na = 16, ka = 0, b;
    if (5 > x || Ba) {
      k._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Ka, bb, Pb, oa, La, jc, Qb, W, Ab, kc, lc, Ma, nb, Bb, sa, cb, Da, Rb, mc, Cb, Sb, Sa, ia, fa;
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
                for (var la = ++v, J, N = [], V = Y.split(""), Na = V.length; Na;) {
                  J = V[--Na], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), N[Na] = J;
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
      null != g && (G && "font" !== b ? n[++v] = "<FONT>" + g + "</FONT>" : n[++v] = g);
      n[++v] = "</" + b + ">";
      return n.join("");
    }
    function B(b) {
      return t(f, b);
    }
    function t(b, a) {
      var g = "*" === a && 6 > x ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], v = 0, A;
      for (A = g.length; v < A; ++v) {
        n[v] = g[v];
      }
      return n;
    }
    function u(b) {
      return G ? b.parentElement : b.parentNode;
    }
    function z(b, a, g, n, v, A) {
      if (G) {
        var Y = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", M = La(2 > b ? oa(a) : a);
        M = 2 > b ? M.indexOf(a) + b : M.length;
        a.insertAdjacentHTML(Y, m(g, n, v));
        return La(a)[M];
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
                cb(a, Y, g);
            }
          }
        }
      }
      ka || null != v && q(a, v);
      return a;
    }
    function q(b, a) {
      if (G) {
        return z(2, b, "font", r, a);
      }
      var g = f.createTextNode("" + a);
      b.appendChild(g);
      return g;
    }
    function P(b, a) {
      9 > x ? b.className = a : b.setAttribute("class", a);
    }
    function ea(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var G = 5 > x;
    Ia = B("html")[0];
    $a = B("head")[0];
    Ka = function(b) {
      return k[b] || f[b] || f.getElementById(b);
    };
    bb = B;
    Pb = t;
    oa = u;
    La = function(b) {
      b = G ? b.children : b.childNodes;
      for (var a = [], g = b.length; g;) {
        a[--g] = b[g];
      }
      return a;
    };
    jc = function(b) {
      var a = !(7.03 < E && 7.2 > E) && b.children;
      b = a ? a : b.childNodes;
      for (var g = [], n = b.length, v = -1, A; n;) {
        if (A = b[--n], a || 1 === A.nodeType) {
          G && "FONT" === A.tagName || (g[++v] = A);
        }
      }
      return g;
    };
    Qb = function(b) {
      return G ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    W = function(b, a, g, n, v) {
      a = z(2, b, a, g, n, v);
      G || (b.appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    Ab = function(b, a, g, n, v) {
      a = z(0, b, a, g, n, v);
      G || (u(b).insertBefore(a, b), ka && null != n && q(a, n));
      return a;
    };
    kc = function(b, a, g, n, v) {
      a = z(1, b, a, g, n, v);
      var A;
      G || ((A = b.nextSibling) ? oa(A).insertBefore(a, A) : oa(b).appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    lc = q;
    Ma = function(b) {
      oa(b) ? G ? b.outerHTML = "" : oa(b).removeChild(b) : C("[DOM] p_DOM_remove(), No parentNode!");
    };
    nb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Ia;) {
        if (a = oa(a), b === a) {
          return !0;
        }
      }
    };
    var na = 9 > x, ka = 9 > x;
    Bb = function(b) {
      return b.tagName.toUpperCase();
    };
    sa = function(b, a) {
      return b.getAttribute(a) || "";
    };
    cb = function(b, a, g) {
      b.setAttribute(a, g);
    };
    Da = function(b, a) {
      b.removeAttribute(a);
    };
    Rb = function(b, a) {
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    };
    mc = function(b) {
      return b.className;
    };
    Cb = P;
    Sb = ea;
    Sa = function(b, a) {
      var g;
      if (!ea(b, a)) {
        if (g = b.className) {
          a = " " + a;
        }
        P(b, g + a);
      }
    };
    ia = function(b, a, g) {
      b.style[a] = g;
    };
    fa = function(b, a) {
      var g = -1, n, v;
      if (5.5 > x) {
        if (a) {
          for (n = a.split(";"); v = n[++g];) {
            var A = v.split(":");
            b.style[A[0]] = v.substr(A[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > E || 1 > L ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    Ca.splice(0, 0, function() {
      function b(M) {
        M = La(M);
        for (var la = M.length, J, N, V; la;) {
          if (J = M[--la], N = J.nodeType, 8 === N) {
            a && A.push(J);
          } else {
            if (1 === N) {
              switch(N = Bb(J), "/" === N.charAt(0) && (N = N.substr(1), Y[N] = !0), N) {
                case "STYLE":
                  if (7.2 <= E && 9 > E) {
                    break;
                  }
                case "LINK":
                  G || g || nb($a, J) || v.push(J);
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
                  Y[N] ? A.push(J) : La(J).length && b(J);
              }
            }
          }
        }
        for (; v[0];) {
          $a.appendChild(v.pop());
        }
        for (; A[0];) {
          Ma(A.pop());
        }
      }
      Ja = Ka("jsMain");
      var a = !(8 > E || 5 > x || Ba || .9 > L), g = 7 > x, n = ["og:", "twitter:", "fb:"], v = [], A = [], Y = {};
      b(Ia);
    });
  })();
  var X, ba, za, Ta, Tb, Db, db, Ub, nc, eb, ja, Vb;
  (function() {
    function m() {
      return ja = Oa ? fb ? 2 : Ea ? 3 : 1 : 0;
    }
    function B(e) {
      ba(k, "load", B);
      B = r;
      u(Ca, e, !0);
      Ca = r;
    }
    function t(e, l) {
      db(function() {
        var y = b(e);
        l(y);
        y.addListener(l);
        return !0;
      });
    }
    function u(e, l, y) {
      for (var p = 0; p < e.length; ++p) {
        !0 === e[p](l) && (e.splice(p, 1), --p);
      }
      y && (e.length = 0);
    }
    function z(e, l, y) {
      n && !g.length && ra(q);
      g.push(e, l, y);
    }
    function q() {
      var e = g, l;
      for (g = []; l = e.shift();) {
        u(l, e.shift(), e.shift());
      }
    }
    function P(e) {
      var l = e || event;
      e = v[l.type];
      var y = -1, p, F;
      for (x ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : Y && (l.u = l.stopPropagation, l.stopPropagation = function() {
        F = !0;
      }); p = e[++y];) {
        p.i === this ? (this.g = p.h, this.g(l), this.g = S, this.g = r) : 7.2 > E && this === f && p.i === k && (k.g = p.h, k.g(l), delete k.g);
      }
      if (x) {
        return l.preventDefault = l.stopPropagation = r, l.returnValue;
      }
      Y && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (la = !0), F && !la && l.u(), l.u = l.stopPropagation = r);
    }
    function ea() {
      var e = 9 === a.offsetWidth;
      eb !== e && (z(dc, eb = e), C("p_cssAvailability:" + eb));
    }
    function G() {
      !Ca && Z && (mb(Z), Z = ra(na));
    }
    function na() {
      Z = 0;
      u(ob);
    }
    function ka(e) {
      Ca || u(gb, e);
    }
    var b = k.matchMedia, a, g = [], n;
    Ca.push(function() {
      t = r;
      a = W(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        n = !0;
        g.length && ra(q);
      });
    });
    X = function(e, l, y, p) {
      if (M) {
        e.addEventListener(l, y, p ? bc ? p : p.capture : !1);
      } else {
        var F = {i:e, h:y};
        p = v[l];
        var ca = "on" + l, pa, Ua;
        if (p) {
          for (pa = p.length; Ua = p[--pa];) {
            if (Ua.i === e && Ua.h === y) {
              return;
            }
          }
          v[l].push(F);
        } else {
          v[l] = p = [F], A || (l = e[ca], "function" === typeof l && l !== P && p.unshift({i:e, h:l}));
        }
        A ? e.attachEvent(ca, P) : e[ca] = P;
      }
    };
    ba = function(e, l, y, p) {
      if (M) {
        e.removeEventListener(l, y, p ? bc ? p : p.capture : !1);
      } else {
        p = v[l];
        l = "on" + l;
        var F, ca, pa;
        if (p) {
          for (F = p.length; ca = p[--F];) {
            ca.i === e && (ca.h === y ? p.splice(F, 1) : pa = !0);
          }
          pa || (A ? e.detachEvent(l, P) : (e[l] = S, e[l] = null));
        }
      }
    };
    var v = {}, A = !1, Y = 525.13 > ab, M = !Y && !Ba && k.addEventListener, la;
    Y && Ia.addEventListener("click", function(e) {
      if (la) {
        return la = !1, e.preventDefault(), !1;
      }
    });
    za = function(e) {
      Ca ? Ca.push(e) : alert("Load event has already been dispatched!");
    };
    Ta = function(e) {
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
    x || 1.8 > L ? X(k, "unload", function(e) {
      u(J, e, !0);
    }) : J = r;
    db = function(e) {
      dc.push(e);
    };
    za(function() {
      ea();
      xb(ea);
    });
    nc = function(e) {
      V && V.push(e);
    };
    var V = [], Na = 60 > L || Lb, Oa, Ea, fb;
    if (89 <= L || 89 <= Ra || Mb && 79 <= ac || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Vb = !0, t("(forced-colors:active)", function(e) {
        Oa = e.matches;
        z(V, m());
        C("(forced-colors:active):" + ja);
      });
    } else {
      if (10 <= x || Kb || Mb && ac) {
        Vb = !0, t("(-ms-high-contrast:black-on-white)", function(e) {
          Oa = Ea = e.matches;
          ja !== m() && (z(V, ja), C("(-ms-high-contrast:black-on-white):" + ja));
        }), t("(-ms-high-contrast:white-on-black)", function(e) {
          Oa = fb = e.matches;
          ja !== m() && (z(V, ja), C("(-ms-high-contrast:white-on-black):" + ja));
        }), t("(-ms-high-contrast:active)", function(e) {
          Oa = e.matches;
          ja !== m() && (z(V, ja), C("(-ms-high-contrast:active):" + ja));
        });
      } else {
        if (Mb && (x || L && 0 <= K.conpare(Ga, "1.8.1") || Lb)) {
          var Va = function() {
            function e(F, ca) {
              C("isBlack:" + F);
              return "#000000" === F || "rgb(0,0,0)" === F || ca && "transparent" === F;
            }
            function l(F, ca) {
              C("isWhite:" + F);
              return "#ffffff" === F || "rgb(255,255,255)" === F || ca && "transparent" === F;
            }
            var y = f.defaultView, p = y ? y.getComputedStyle(a, null) : a.currentStyle;
            y = (p && p.color || "").split(" ").join("");
            p = (p && p.backgroundColor || "").split(" ").join("");
            y && (Oa = "#123456" !== y && "rgb(18,52,86)" !== y, Ea = e(y) && l(p, !0), fb = l(y) && e(p, !0), ja !== m() && (C("(forced-colors-fallback):" + ja), z(V, ja)));
          };
          db(function(e) {
            if (e) {
              return ia(a, "color", "#123456"), ia(a, "backgroundColor", "#123456"), Na ? (Va(), V = r) : Va() && xb(Va), Va = r, !0;
            }
          });
        } else {
          V = m = r;
        }
      }
    }
    Ub = function(e) {
      Ca || alert("p_listenImageReady is called back for images present at load time.");
      qa.push(e);
    };
    var qa = [], ta = 7.5 <= E && 8 > E;
    ta && function() {
      for (var e = f.images, l = e.length, y; l;) {
        y = e[--l], y.s = y.src, Da(y, "src");
      }
    }();
    za(function() {
      function e() {
        p ? (F = y[--p], ta && cb(F, "src", F.s), ec(l, ta ? F.s : F.src)) : qa = r;
      }
      function l(ca) {
        u(qa, {m:F, o:ca}, !p);
        e();
      }
      var y = f.images || bb("img"), p = y.length;
      if (12 > E || 532 > ab) {
        e();
      } else {
        for (; p;) {
          var F = y[--p];
          z(qa, {m:F, o:9 > x ? F.complete : 0 <= F.naturalWidth ? F.naturalWidth : F.width}, !p);
        }
        qa = r;
      }
    });
    Tb = function(e) {
      ob.push(e);
    };
    var ob = [], Z;
    X(k, "resize", G);
    Ta(function() {
      Z && clearTimeout(Z);
      ba(k, "resize", G);
    });
    Db = function(e) {
      gb.push(e);
    };
    var gb = [], pb = 0, Fa = 1 > L || 1.2 <= L && 1.8 > L || 7.2 >= E;
    Fa ? xb(function() {
      var e = k.scrollY || aa.scrollTop;
      pb !== e && (pb = e, ka());
    }) : X(k, "scroll", ka);
    Ta(function() {
      Fa || ba(k, "scroll", ka);
    });
  })();
  var oc = 0;
  (function() {
    function m(q) {
      return q.styleSheet || q.sheet;
    }
    var B = 1 > L || 8 <= E && 9 > E, t = 7.2 <= E && 8 > E, u = !!x || !B && !t && function() {
      var q = W(Ia, "style"), P = !!m(q);
      P && (C("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), C("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), C("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), C("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), C("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText)));
      Ma(q);
      return P;
    }();
    C("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + u);
    var z = !u && ab && !B && !t && function() {
      var q = W(Ia, "style"), P;
      lc(q, "");
      if (P = !!m(q)) {
        C("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), C("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), C("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), C("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), C("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText));
      }
      Ma(q);
      return P;
    }();
    u || C("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + z);
    oc = B || t ? 1 : u || z ? 2 : 0;
    C("[CSSOM] p_CSSOM_canuse : " + oc);
  })();
  (function() {
    9 > x && za(function() {
      var m = W(aa, "div");
      fa(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      cc = 1 < m.offsetHeight;
      fa(m, "");
      Ma(m);
    });
    ec = function(m, B) {
      function t() {
        z || !q || u.complete ? (C("[imageTest] timer -> img.complete. img.width=" + u.width), ra(m, !!u.width), u.onerror = u.onload = S, u = m = r) : (--q, ra(t));
      }
      var u = new Image, z, q = 99;
      C("[imageTest] start.");
      u.onerror = function() {
        C("[imageTest] error!");
        z = !0;
      };
      u.onload = function() {
        C("[imageTest] onload.");
        z = !0;
      };
      u.src = B;
      ra(t);
    };
  })();
  (function() {
    if (!Vb) {
      var m, B = function() {
        m = W($a, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + wb + "hc/" + Nb});
        if (Ob || 5.5 <= x && 9 > x && cc) {
          Sa(aa, "jsCanRotate"), C("jsCanRotate!");
        }
        B = r;
      };
      nc(function(t) {
        t && !m ? B() : m && (t ? $a.appendChild(m) : Ma(m));
      });
    }
    Ub(function(t) {
      var u = t.m;
      t = t.o;
      var z = oa(u);
      !Sb(z, "aBodyRoot") && t ? Sa(z, "img-loaded") : t || sa(u, "alt") || ia(u, "display", "none");
    });
    E && za(function() {
      if (8 <= E) {
        for (var t = bb("a"), u = t.length, z = 0, q; z < u; ++z) {
          q = t[z], "-1" === sa(q, "tabindex") ? Da(q, "tabindex") : sa(q, "href") && cb(q, "tabindex", "0");
        }
      }
      t = bb("input");
      z = 0;
      for (u = t.length; z < u; ++z) {
        q = t[z], "hidden" === sa(q, "type") && Da(q, "tabindex");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.M, h = N.length, w, H, D, wa;
      if ("keydown" !== c.type || 13 === d) {
        for (; h;) {
          if (d = N[--h], d.l === this || d.j === this) {
            h = d.l;
            var I = w = d.j;
            if (d.C) {
              if (ia(h, "width", d.L), h.src = d.K, Cb(I, d.F), h = d.A) {
                fa(h, d.D), Cb(h, "caption jsCap");
              }
            } else {
              if (H = d.B) {
                for (delete d.B; w = oa(w);) {
                  if (Sb(w, "caption")) {
                    d.A = w, d.D = w.style.cssText, Sa(w, "jsCap");
                  } else {
                    var Q = Bb(w);
                    if ("DIV" === Q || "P" === Q || "BLOCKQUOT" === Q) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (d.H) {
                  H = H.split("=");
                  Q = H.length;
                  if (D = H[Q - 1]) {
                    (wa = U(D.substr(1))) && D === "s" + wa ? H[Q - 1] = "w" + w : H[Q] = "w" + w;
                  }
                  H = H.join("=");
                } else {
                  if (0 < H.indexOf(".bp.blogspot.com/")) {
                    H = H.split("/");
                    Q = H.length;
                    if (D = H[Q - 2]) {
                      (wa = U(D.substr(1))) && D === "s" + wa ? H[Q - 2] = "w" + w : H.splice(Q - 1, 0, "w" + w);
                    }
                    H = H.join("/");
                  }
                }
                d.I = H;
              }
              d.F = mc(I);
              Sa(I, "jsPicaLarge");
              ia(h, "width", "");
              h.src = d.I;
              if (h = d.A) {
                fa(h, ""), Sa(h, "jsCapLarge");
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
    function t(c) {
      for (var d = arguments, h = 0, w = d.length; h < w; ++h) {
        if (isFinite(d[h])) {
          return d[h];
        }
      }
      return 0;
    }
    function u(c) {
      var d = l;
      if (eb) {
        if (y && !d) {
          if (new Date - 0 < y) {
            return;
          }
          y = r;
        }
        7 === c ? (a("t"), p = 0) : (a("s"), p && (p = mb(p)), Fa = t(k.pageYOffset, k.scrollY, qa.scrollTop, aa.scrollTop));
        d ? (l = q(r, d[0], d[1])) || (y = new Date - 0 + 99) : q();
        n();
      } else {
        l = r;
      }
    }
    function z() {
      a("w.blur");
    }
    function q(c, d, h) {
      function w(Aa) {
        I = Aa;
        if (gb) {
          Q = gb + ":translate" + (e ? "3D(0," : "(0,") + Aa + (e ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== Aa) {
            if (!Va && (fb || Ea)) {
              var Eb = ta.offsetWidth;
            }
            Q = Ea ? "position:fixed;width:" + Eb + "px;top:" + (Aa - H + R) + "px" : Va ? "top:" + Aa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Aa + "px";
            fb && Q && (Q += ";" + (0 > Aa ? "clip:rect(" + -Aa + "px " + Eb + "px " + da + "px 0)" : Aa + da < qb ? "clip:rect(0 " + Eb + "px " + da + "px 0)" : "clip:rect(0 " + Eb + "px " + (qb - Aa) + "px 0)"), 8 > x || (Q = Q.split(" ").join(",")));
          }
        }
      }
      var H = Fa, D = ob, wa = ta.offsetTop === D.offsetTop, I = 0, Q = "", xa = !0;
      if (wa) {
        for (var T = 0, R = 0, ha = D; ha && ha !== aa;) {
          R += ha.offsetTop, ha = ha.offsetParent;
        }
        I = pb;
        ha = t(k.innerHeight, qa.offsetHeight);
        var Wb = D.offsetHeight, da = Z.offsetHeight, qb = da < Wb ? Wb : da, Pa = H, hb = Pa + ha, Fb = R, Gb = Fb + qb, pc = R + I, uc = pc + da;
        D = Pa < Fb ? Fb : Pa;
        var Qa = Gb < hb ? Gb : hb, ib = Qa - D;
        Pa = Gb <= Pa;
        hb = hb <= Fb;
        if (d !== r) {
          xa = R + d;
          c = xa + h;
          if (Pa || hb) {
            return ha <= h ? (d = R, a("4.1.1")) : Pa ? (d = Gb - h, a("4.1.2")) : (d = R + h - ha, a("4.1.3")), y = r, k.scroll(t(k.pageXOffset, k.scrollX, qa.scrollLeft, aa.scrollLeft), d), a("4.1.*"), l;
          }
          da <= ib ? (T = 4, a("4.2")) : h <= ib ? da - d <= ib ? (T = 2, a("4.3.1")) : D <= xa && c <= Qa ? D < R + I && (T = 4, a("4.3.2")) : D <= xa && xa <= Qa ? (T = 5, a("4.3.3")) : D <= c && c <= Qa ? (T = 4, a("4.3.4")) : c < D ? (T = 4, a("4.3.5")) : (T = 5, a("4.3.6")) : (T = 4, a("4.4"));
          xa = r;
        } else {
          c !== r ? da <= ib ? (T = 7, xa = !1, a("3.1")) : (I -= 60 * c, T = Qa - R - da, c = D - R, I < T ? (I = T, a("3.2.1")) : c < I ? (I = c, a("3.2.2")) : a("3.2.3"), T = 6) : Wb <= da || (Pa ? (T = 1, a("2.2.1")) : hb ? a("2.2.2") : da <= ib ? (T = 3, a("2.3")) : D < pc ? (T = 3, a("2.4.1")) : uc < Qa ? (T = 2, a("2.4.2")) : H < R + da - ib ? a("2.4.3") : (T = 2, a("2.4.4")));
        }
        switch(T) {
          case 0:
            w(0);
            break;
          case 1:
            w(qb - da);
            break;
          case 2:
            w(Qa - R - da);
            break;
          case 3:
            w(D - R);
            break;
          case 4:
            w(D - R - d);
            break;
          case 5:
            w(Qa - R - (d + h));
          case 6:
            w(I);
        }
        v(I, da, R, qb, ha, d || "-", h || "-");
      } else {
        v(I, "-", "-", "-", "-", "-", "-");
      }
      fa(Z, Q);
      pb = I;
      return wa && xa;
    }
    function P(c) {
      if (eb) {
        a("m");
        L && (Fa = t(k.pageYOffset, qa.scrollTop, aa.scrollTop), n());
        var d = this !== c.target, h = d && t(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && h && q(9 >= h ? -9 >= h ? -3 : h : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ea(c) {
      for (var d = c.target, h = -1, w; w = V[++h];) {
        nb(w, d) && P(c);
      }
    }
    function G(c) {
      if (eb) {
        var d = !!gb || L, h = c.target || c.srcElement, w = 0;
        if (nb(Z, h)) {
          a(c.type || "ie5focus");
          X(h, "blur", b);
          for (c = h.offsetHeight; h && (d ? nb(Z, h) : Z !== h);) {
            w += h.offsetTop, h = h.offsetParent;
          }
          Oa ? (l = [w, c], p && mb(p), p = ra(u, 7)) : (Fa = t(k.pageYOffset, k.scrollY, qa.scrollTop, aa.scrollTop), q(r, w, c));
          A(w, c);
        }
      }
    }
    function na() {
      rb = k.onerror;
      k.onerror = ka;
      var c = f.activeElement;
      Ua !== c && (Ua = c, G({target:c}));
      k.onerror = rb;
      rb = r;
    }
    function ka() {
      C("error!");
      k.onerror = rb;
      rb = Ua = r;
      return !0;
    }
    function b() {
      ba(this, "blur", b);
      A(0, 0);
    }
    function a(c) {
      sb && (Hb && (Hb = mb(Hb)), Hb = ra(g, 0, 1400), sb.innerHTML += " " + c);
    }
    function g() {
      sb.innerHTML = "";
    }
    function n() {
      tb && (ia(tb, "top", (Fa / 10 | 0) + "px"), qc.innerHTML = " scrl:" + (Fa | 0));
    }
    function v(c, d, h, w, H, D, wa) {
      jb && (ia(jb, "top", ((c + h) / 10 | 0) + "px"), ia(jb, "height", (d / 10 | 0) + "px"), ia(tb, "height", (H / 10 | 0) + "px"), ia(Xb, "height", (aa.scrollHeight / 10 | 0) + "px"), rc.innerHTML = "conY:" + h + "/sidY" + c + ", conH:" + w + "/sidH" + d + ", focY:" + D + " focH:" + wa);
    }
    function A(c, d) {
      ub && (ia(ub, "top", (c / 10 | 0) + "px"), ia(ub, "height", (d / 10 | 0) + "px"));
    }
    function Y() {
      Yb.call(Ib);
    }
    function M() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || k.fullScreen ? (cb(Ib, "id", "blog2slide-root"), kb[1].parentNode.insertBefore(vb, kb[1]), la(), f.onkeydown = J) : Wa && (Ma(vb), Da(Ib, "id"), Da(Wa, "id"), Wa = f.onkeydown = r);
    }
    function la() {
      Wa && Da(Wa, "id");
      Xa = 0 < Xa ? Zb < Xa ? Zb : Xa : 0;
      Wa = kb[Xa];
      cb(Wa, "id", "blog2slide-current");
    }
    function J(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Xa, la();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --Xa, la();
        }
      }
    }
    var N = [];
    $b || (Ub(function(c) {
      if (c.o && Ja) {
        c = c.m;
        var d = oa(c), h = "", w;
        if ("A" === Bb(d) && 1 === jc(d).length) {
          var H = sa(d, "href"), D = H.split("?")[0].split("#")[0].split(".");
          D = (D[D.length - 1] || "").toLowerCase();
          if ((w = 0 < H.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + D + ".")) {
            X(d, "keydown", m), X(c, "click", m), X(d, "click", B), 9 > E || (h = c.offsetWidth - 4 + "px", ia(c, "width", h)), Sa(d, "jsPica"), N.push({j:d, K:c.src, L:h, B:H, l:c, H:w});
          }
        }
      }
    }), Ta(function(c, d) {
      for (c = -1; d = N[++c];) {
        ba(d.j, "keydown", m), ba(d.l, "click", m), ba(d.j, "click", B);
      }
    }));
    var V = ["jsSidebarFixer1", "jsSidebarFixer2"], Na = L || Lb || Kb, Oa = !(6 <= x && 9 > x || E || 1 <= L && 1.3 > L), Ea = !(5 > O(16) || 5 > O(17) || 2.2 > O(21) || 6 > O(12) || ma(30) && 534 > ab || ma(32) || 7 > x || 9 > E || 1 > L), fb = Ea || 7 > x || 1 > L, Va = 7.5 > E, qa, ta, ob, Z, gb = Ob, pb = 0, Fa = 0, e, l, y, p, F = L && 0 <= K.conpare(Ga, "0.9.7"), ca = L && 0 >= K.conpare(Ga, "0.9.4");
    sc || $b || (db(function(c) {
      if (c) {
        if (!Ja) {
          return !0;
        }
        c = -1;
        var d;
        qa = "CSS1Compat" !== f.compatMode ? aa : Ia || aa;
        ta = Ka("jsSide");
        ob = Ja;
        if (!ta) {
          return !0;
        }
        Db(u);
        Tb(u);
        Z = Ab(Qb(ta), "div", {id:"jsSidebarFixer"});
        X(k, "blur", z);
        for (8 > E || ca || 6 > x || (x || Ba ? X(Z, "focusin", G) : Na ? X(f, "focus", G, {capture:!0, passive:!1}) : X(Z, "DOMFocusIn", G, !1)); 1 < La(ta).length;) {
          Z.appendChild(La(ta)[1]);
        }
        for (F && !lb && X(f, "DOMMouseScroll", ea, !1); d = V[++c];) {
          var h = Ka(d);
          h.onwheel !== r ? X(h, "wheel", P, {passive:!1}) : lb ? X(h, "MozMousePixelScroll", P, !1) : F ? V[c] = Ka(d) : (h.onmousewheel !== r || 9 <= E) && X(h, "mousewheel", P, !1);
        }
        x || Kb || 2 > Ra || (e = Ha.perspective !== r || Ha.MozPerspective !== r || Ha["-webkit-perspective"] !== r);
        u();
        return !0;
      }
    }), Ta(function() {
      var c = -1, d;
      if (F && !lb) {
        ba(f, "DOMMouseScroll", ea, !1);
      } else {
        for (; d = V[++c];) {
          d = Ka(d), d.onwheel !== r ? ba(d, "wheel", P, {passive:!1}) : lb ? ba(d, "MozMousePixelScroll", P, !1) : (d.onmousewheel !== r || 9 <= E) && ba(d, "mousewheel", P, !1);
        }
      }
      ba(k, "blur", z);
      8 > E || ca || 6 > x || (x || Ba ? ba(Z, "focusin", G, !1) : Na ? ba(f, "focus", G, {capture:!0, passive:!1}) : ba(Z, "DOMFocusIn", G, !1));
      pa && clearInterval(pa);
    }));
    var pa, Ua, rb;
    6 > x && db(function(c) {
      if (!Ja) {
        return !0;
      }
      c ? pa = setInterval(na, 333) : pa && (clearInterval(pa), pa = 0);
    });
    var rc, qc, sb, Xb, tb, jb, ub, Hb;
    db(function(c) {
      if (c) {
        if (!Ja) {
          return !0;
        }
        var d = La(aa);
        c = Ab(d[0], "div");
        if (Ea) {
          fa(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; d.length;) {
            c.appendChild(d.shift());
          }
          fa(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = kc(c, "div");
          fa(Ia, "overflow:hidden");
          fa(aa, "overflow:hidden");
          fa(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        W(c, "div", r, Ob ? "transform" + (e ? "3D" : "") : Ea ? "pos:fixed" : "pos:absolute");
        d = W(c, "div");
        rc = W(d, "span");
        qc = W(d, "span");
        sb = W(c, "div");
        Xb = W(c, "div");
        fa(Xb, "position:absolute;left:0;top:0;width:54px;background:#242");
        jb = W(c, "div");
        fa(jb, "position:absolute;left:0;width:54px;background:#363");
        tb = W(c, "div");
        fa(tb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ub = W(jb, "div");
        fa(ub, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
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
            for (var R = 0, ha = 0; 9 > ha; ha++) {
              R += (I.charAt(ha) - 0) * (10 - ha);
            }
            R = (11 - R % 11) % 11;
            R = 10 === R ? "X" : R.toString();
            I += R;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        Q = xa ? Ab(Qb(h), T, {className:Q}) : W(h, T, {className:Q});
        W(Q, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:I, J:E ? "0" : r} : {G:!0, href:I, J:E ? "0" : r}, wa);
      }
      if (Ja) {
        for (var d = Pb(Ja, "blockquote"), h, w = -1, H, D; h = d[++w];) {
          H = sa(h, "title"), D = sa(h, "cite"), H && D ? (Da(h, "title"), c(H, D, "js-bqLink", !0)) : D && (Da(h, "cite"), c(k.decodeURI ? decodeURI(D) : D, D, "js-bqCite"));
        }
      }
    });
    var Yb, Ib, vb, Wa, kb, Xa, Zb;
    za(function() {
      var c = Ka("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        Yb = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || Yb ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(c.firstChild, "click", Y), c = oa(c), Ib = oa(c), kb = Pb(c, "section"), vb = f.createElement("h1"), vb.innerHTML = bb("h1")[0].innerHTML, Zb = kb.length, kb.splice(0, 0, vb), 0 !== d ? X(f, d + "ullscreenchange", M) : x ? X(f, "MSFullscreenChange", M, !1) : Tb(M)) : Ma(c);
      }
    });
  })();
  Jb = f.scripts || bb("script");
  var va = Jb[Jb.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  C("[p_assetUrl] " + va);
  var sc = tc || "1" === sa(aa, "mob");
  wb = (sc ? "mb" : "pc") + "/";
  za(function() {
    var m;
    (m = Ka("logger")) || alert("#logger not found!");
    for (m ? (C = function(B) {
      W(m, "P", r, B);
    }, Ya = function(B) {
      W(m, "P", {style:{color:"red"}}, B);
    }, k.onerror = function(B, t, u) {
      Ya(B + ", " + t + ", " + u);
      return !0;
    }) : k.console ? (C = console.log, Ya = console.error) : E ? (C = S, Ya = opera.postError) : C = Ya = S; yb.length;) {
      C(yb.shift());
    }
    for (; zb.length;) {
      C(zb.shift());
    }
    yb = zb = r;
  });
  6.1 > ya && Db(fc);
  Ta(gc);
  6.1 > ya && Db(hc);
  Ta(ic);
  10 > x && (11 !== Za || 5 !== x) || (9 > E || 1 > L || !Ba && !k.addEventListener ? f.write('<link href="' + va + "css/" + wb + Nb + '" rel="stylesheet"' + (8 > E ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > E || 1.5 > L || 532 >= ab || 2 > Ra || 4 <= Ra && 8 > Ra) && za(function() {
    W($a, "link", {href:va + "css/" + wb + Nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

