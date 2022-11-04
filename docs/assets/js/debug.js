var P, cb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var W = this[this.length - 1];
  --this.length;
  return W;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var W = arguments, t = 0, da = W.length, L = this.length; t < da; ++t) {
    this[L + t] = W[t];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var W = this[0], t = 1, da = this.length; t < da; ++t) {
    this[t - 1] = this[t];
  }
  --this.length;
  return W;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var W = arguments, t = W.length, da = this.length += t - 1, L = da; L >= t; --L) {
    this[L] = this[L - t];
  }
  for (L = 0; L < t; ++L) {
    this[L] = W[L];
  }
  return da;
});
Array.prototype.splice || (Array.prototype.splice = function(W, t) {
  var da = arguments, L = da.length - 2 - t, db = this.slice(W, W + t), D;
  if (0 < L) {
    var na = this.length - 1;
    for (D = W + t; na >= D; --na) {
      this[na + L] = this[na];
    }
  } else if (0 > L) {
    na = W + t;
    for (D = this.length; na < D; ++na) {
      this[na + L] = this[na];
    }
    this.length += L;
  }
  na = 2;
  for (D = da.length; na < D; ++na) {
    this[na - 2 + W] = da[na];
  }
  return db;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(W, t) {
  var da = this.length >>> 0;
  if (0 === da) {
    return -1;
  }
  if (t) {
    var L = t || 0;
    L = -Infinity === L ? 0 : (0 > L ? -L : L) | 0;
    if (da <= L) {
      return -1;
    }
  }
  for (L = 0 <= L ? L : 0 < da + L ? da + L : 0; L < da; ++L) {
    if (this[L] === W) {
      return L;
    }
  }
  return -1;
});
(function(W, t, da, L, db, D, na, Oc, Ta, Pc, u) {
  function Y(p) {
    if (W[0] === p) {
      return Ua === Ua + "" ? Ta(Ua) : Ua;
    }
  }
  function Fa(p) {
    var z = W[3];
    if (W[2] === p) {
      return z === z + "" ? Ta(z) : z;
    }
  }
  var oa = D.body, eb = oa.style, fb, nb, gb, Ua = W[1], E = Y(2) || Y(3), Va = Y(7), Yb = Y(5) || Y(6), I = Y(8) || Y(9), T = Y(11) || Y(12), Cb = T && 0 <= W.conpare(Ua, "1.9.1"), Zb = Y(13), ub = Y(15), vc = Y(16) || Y(17), wc = Y(10) || Y(25), Db = Y(20) || Y(22);
  Db || Y(23) || Y(21) || Y(24);
  var xc = Db && Ta(na.userAgent.split("Edg/")[1]), Lc = Ta(na.appVersion.split("Trident/")[1]) + 4, $b = Fa(35) || Fa(36) || Fa(37), yc = !E && !Va && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ac = (Va ? "ie5mac" : 5.5 > E ? "ie5win" : 6 > E ? "ie55" : 10 > E ? "ie" + (E | 0) : 7.2 > I ? "opr70" : 8 > I ? "opr72" : 9.5 > I ? "opr" + (I | 0) : T && !Cb ? 1.4 <= T ? "gck19" : 
  1.3 <= T ? "gck13" : 1 <= T ? "gck12" : 0.9 <= T ? "gck09" : 0.8 <= T ? "gck08" : "gck07" : "modern") + ".css", Pb = "", Mc = Fa(1) || Fa(2) || Fa(3) || Fa(4) || Fa(8) || Fa(9) || Fa(10), zc, bc = eb.transform !== u ? "transform" : eb["-o-transform"] !== u ? "-o-transform" : eb["-ms-transform"] !== u ? "-ms-transform" : eb.MozTransform !== u ? "-moz-transform" : eb["-webkit-transform"] !== u ? "-webkit-transform" : "", Wa = [], Ac = [], Ia = [], Bc, Cc, Eb, cc, dc, qa, Fb, Qb, Rb = [], Sb = [], 
  ec, Dc, fc, Ec;
  (function() {
    function p() {
      for (var b, n = 0, q = new db() - 0; n < M.length;) {
        q < M[0].t ? ++n : (b = M.splice(n, 1)[0], b.f(b.p));
      }
      e = M.length ? setTimeout(p, za) : 0;
    }
    function z() {
      for (var b, n = 0; n < F.length; ++n) {
        b = F[n], b.f();
      }
    }
    function v() {
      pa && (pa = clearInterval(pa));
    }
    function B() {
      e && (e = clearTimeout(e));
    }
    P = function(b) {
      Rb.push(b);
    };
    cb = function(b) {
      Sb.push(b);
    };
    Qb = function(b) {
      F.length || (pa = setInterval(z, x));
      F.push({f:b, J:++V});
      return V;
    };
    ec = function() {
      pa && (v(), pa = setInterval(z, x));
    };
    Dc = v;
    var F = [], x = 500, V = 0, pa;
    if (5 > E || Va) {
      t._wdb_onlooptimer = z, z = "_wdb_onlooptimer()";
    }
    qa = function(b, n, q) {
      M.length || (e = setTimeout(p, za));
      M.push({f:b, p:n, J:++la, t:new db() - 0 + (za < q ? q : za)});
      return la;
    };
    Fb = function(b) {
      for (var n = M.length, q; q = M[--n];) {
        if (q.J === b) {
          M.splice(n, 1);
          break;
        }
      }
      return 0;
    };
    fc = function() {
      e && (B(), e = setTimeout(p, za));
    };
    Ec = B;
    var M = [], za = 16, la = 0, e;
    if (5 > E || Va) {
      t._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var hb, Pa, gc, Aa, ib, Fc, hc, ea, Gb, Gc, ic, jc, Ja, Hb, Xa, Ka, ob, Ya, kc, Hc, Ib, Za, jb, ra, va;
  (function() {
    function p(e, b, n) {
      var q = ["<", e], A = 1, J, K;
      if (b) {
        for (J in b) {
          var X = b[J];
          if (null != X && "" !== X) {
            if ("style" === J) {
              q[++A] = ' style="';
              for (K in X) {
                for (var ja = ++A, ma, R = [], Z = K.split(""), ia = Z.length; ia;) {
                  ma = Z[--ia], "A" <= ma && "Z" >= ma && (ma = "-" + ma.toLowerCase()), R[ia] = ma;
                }
                q[ja] = R.join("") + ":" + X[K] + ";";
              }
              q[++A] = '"';
            } else {
              "className" === J && (J = "class"), q[++A] = " " + J + '="' + X + '"';
            }
          }
        }
      }
      q[++A] = ">";
      null != n && (M && "font" !== e ? q[++A] = "<FONT>" + n + "</FONT>" : q[++A] = n);
      q[++A] = "</" + e + ">";
      return q.join("");
    }
    function z(e) {
      return v(D, e);
    }
    function v(e, b) {
      var n = "*" === b && 6 > E ? "*" !== b ? e.all.tags(b.toUpperCase()) : e.all : e.getElementsByTagName(b), q = [], A = 0, J;
      for (J = n.length; A < J; ++A) {
        q[A] = n[A];
      }
      return q;
    }
    function B(e) {
      return M ? e.parentElement : e.parentNode;
    }
    function F(e, b, n, q, A, J) {
      if (M) {
        var K = 0 === e ? "beforebegin" : 1 === e ? "afterend" : "beforeend";
        var X = ib(2 > e ? Aa(b) : b);
        X = 2 > e ? X.indexOf(b) + e : X.length;
        b.insertAdjacentHTML(K, p(n, q, A));
        b = ib(b)[X];
        null != A && ("font" === n ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (za) {
        b = D.createElement(p(n, q));
      } else {
        b = J ? D.createElementNS("http://www.w3.org/2000/svg", n) : D.createElement(n);
        if (q) {
          for (K in q) {
            if ((n = q[K]) || 0 === n) {
              switch(K) {
                case "class":
                case "className":
                  Ib(b, n);
                  break;
                case "style":
                  e = b.style;
                  for (X in n) {
                    e[X] = n[X];
                  }
                  break;
                default:
                  ob(b, K, n);
              }
            }
          }
        }
        la || null != A && x(b, A);
      }
      return b;
    }
    function x(e, b) {
      if (M) {
        return F(2, e, "font", u, b);
      }
      var n = D.createTextNode("" + b);
      e.appendChild(n);
      return n;
    }
    function V(e, b) {
      9 > E ? e.className = b : e.setAttribute("class", b);
    }
    function pa(e, b) {
      return -1 !== (" " + e.className + " ").indexOf(" " + b + " ");
    }
    var M = 5 > E;
    fb = z("html")[0];
    nb = z("head")[0];
    hb = function(e) {
      return t[e] || D[e] || D.getElementById(e);
    };
    Pa = z;
    gc = v;
    Aa = B;
    ib = function(e) {
      e = M ? e.children : e.childNodes;
      for (var b = [], n = e.length; n;) {
        b[--n] = e[n];
      }
      return b;
    };
    Fc = function(e) {
      var b = !(7.03 < I && 7.2 > I) && e.children;
      e = b ? b : e.childNodes;
      for (var n = [], q = e.length, A = -1, J; q;) {
        if (J = e[--q], b || 1 === J.nodeType) {
          M && "FONT" === J.tagName || (n[++A] = J);
        }
      }
      return n;
    };
    hc = function(e) {
      return M ? e.children.length ? e.children[0] : null : e.firstChild;
    };
    ea = function(e, b, n, q, A) {
      b = F(2, e, b, n, q, A);
      M || (e.appendChild(b), la && null != q && x(b, q));
      return b;
    };
    Gb = function(e, b, n, q, A) {
      b = F(0, e, b, n, q, A);
      M || (B(e).insertBefore(b, e), la && null != q && x(b, q));
      return b;
    };
    Gc = function(e, b, n, q, A) {
      b = F(1, e, b, n, q, A);
      var J;
      M || ((J = e.nextSibling) ? Aa(J).insertBefore(b, J) : Aa(e).appendChild(b), la && null != q && x(b, q));
      return b;
    };
    ic = x;
    jc = function(e, b) {
      var n;
      if (M) {
        return F(1, e, "font", u, b);
      }
      var q = D.createTextNode("" + b);
      (n = e.nextSibling) ? Aa(e).insertBefore(q, n) : Aa(e).appendChild(q);
      return q;
    };
    Ja = function(e) {
      Aa(e) ? M ? e.outerHTML = "" : Aa(e).removeChild(e) : P("[DOM] p_DOM_remove(), No parentNode!");
    };
    Hb = function(e, b) {
      if (e.contains) {
        return e.contains(b);
      }
      for (; b && b !== fb;) {
        if (b = Aa(b), e === b) {
          return !0;
        }
      }
    };
    var za = 9 > E, la = za;
    Xa = function(e) {
      return e.tagName.toUpperCase();
    };
    Ka = function(e, b) {
      return e.getAttribute(b) || "";
    };
    ob = function(e, b, n) {
      e.setAttribute(b, n);
    };
    Ya = function(e, b) {
      e.removeAttribute(b);
    };
    kc = function(e, b) {
      return e.hasAttribute ? e.hasAttribute(b) : null != e.getAttribute(b);
    };
    Hc = function(e) {
      return e.className;
    };
    Ib = V;
    Za = pa;
    jb = function(e, b) {
      var n;
      if (!pa(e, b)) {
        if (n = e.className) {
          b = " " + b;
        }
        V(e, n + b);
      }
    };
    ra = function(e, b, n) {
      e.style[b] = n;
    };
    va = function(e, b) {
      var n = -1, q, A;
      if (5.5 > E) {
        if (b) {
          for (q = b.split(";"); A = q[++n];) {
            var J = A.split(":");
            e.style[J[0]] = A.substr(J[0].length + 1);
          }
        } else {
          e.removeAttribute("style");
        }
      } else {
        9 > I || 1 > T ? b ? e.setAttribute("style", b) : e.removeAttribute("style") : e.style.cssText = b;
      }
    };
    Wa.splice(0, 0, function() {
      function e(ja) {
        ja = ib(ja);
        for (var ma = ja.length, R, Z, ia; ma;) {
          if (R = ja[--ma], Z = R.nodeType, 8 === Z) {
            b && K.push(R);
          } else if (1 === Z) {
            switch(Z = Xa(R), "/" === Z.charAt(0) && (Z = Z.substr(1), X[Z] = !0), Z) {
              case "STYLE":
                if (7.2 <= I && 9 > I) {
                  break;
                }
              case "LINK":
                M || q || Hb(nb, R) || J.push(R);
                break;
              case "META":
                Z = Ka(R, "name") || Ka(R, "property");
                for (ia = A.length; ia;) {
                  if (0 === Z.indexOf(A[--ia])) {
                    K.push(R);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (kc(R, "async")) {
                  break;
                }
                if (n) {
                  R.innerText = "";
                  n = !1;
                  break;
                }
              case "NOSCRIPT":
                if (kc(R, "skip-cleanup")) {
                  break;
                }
              case "!":
                K.push(R);
                break;
              case "SOURCE":
                t.HTMLSourceElement || K.push(R);
                break;
              default:
                X[Z] ? K.push(R) : ib(R).length && e(R);
            }
          }
        }
        for (; J[0];) {
          nb.appendChild(J.pop());
        }
        for (; K[0];) {
          Ja(K.pop());
        }
      }
      gb = hb("jsMain");
      var b = !(8 > I || 5 > E || Va || 0.9 > T), n = Cc, q = 7 > E, A = ["og:", "twitter:", "fb:"], J = [], K = [], X = {};
      e(fb);
    });
  })();
  var fa, sa, La, pb, lc, vb, qb, mc, nc, wb, ka, oc;
  (function() {
    function p() {
      return ia ? Da ? 2 : Ma ? 3 : 1 : 0;
    }
    function z(a) {
      sa(t, "load", z);
      z = u;
      B(Wa, a, !0);
      Wa = u;
    }
    function v(a, c) {
      qb(function() {
        var h = e(a);
        c(h);
        h.addListener(c);
        return !0;
      });
    }
    function B(a, c, h) {
      for (var f = 0; f < a.length; ++f) {
        !0 === a[f](c) && (a.splice(f, 1), --f);
      }
      h && (a.length = 0);
    }
    function F(a, c, h) {
      q && !n.length && qa(x);
      n.push(a, c, h);
    }
    function x() {
      var a = n, c;
      for (n = []; c = a.shift();) {
        B(c, a.shift(), a.shift());
      }
    }
    function V(a) {
      var c = a || event;
      a = A[c.type];
      var h = -1, f, l;
      E ? (c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : K && (c.I = c.stopPropagation, c.stopPropagation = function() {
        l = !0;
      });
      for (; f = a[++h];) {
        f.j === this ? (this.h = f.i, this.h(c), this.h = da, this.h = u) : 7.2 > I && this === D && f.j === t && (t.h = f.i, t.h(c), delete t.h);
      }
      if (E) {
        return c.preventDefault = c.stopPropagation = u, c.returnValue;
      }
      K && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (ja = !0), l && !ja && c.I(), c.I = c.stopPropagation = u);
    }
    function pa() {
      var a = 9 === b.offsetWidth;
      wb !== a && (F(Ac, wb = a), P("p_cssAvailability:" + wb));
    }
    function M() {
      !Wa && Ba && (Fb(Ba), Ba = qa(za));
    }
    function za() {
      Ba = 0;
      B(rb);
    }
    function la(a) {
      Wa || B(Ca, a);
    }
    var e = t.matchMedia, b, n = [], q;
    Wa.push(function() {
      v = u;
      b = ea(oa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      La(function() {
        q = !0;
        n.length && qa(x);
      });
    });
    fa = function(a, c, h, f) {
      if (X) {
        a.addEventListener(c, h, f ? yc ? f : f.capture : !1);
      } else {
        var l = {j:a, i:h};
        f = A[c];
        var k = "on" + c, C, r;
        if (f) {
          for (C = f.length; r = f[--C];) {
            if (r.j === a && r.i === h) {
              return;
            }
          }
          A[c].push(l);
        } else {
          A[c] = f = [l], J || (c = a[k], "function" === typeof c && c !== V && f.unshift({j:a, i:c}));
        }
        J ? a.attachEvent(k, V) : a[k] = V;
      }
    };
    sa = function(a, c, h, f) {
      if (X) {
        a.removeEventListener(c, h, f ? yc ? f : f.capture : !1);
      } else {
        f = A[c];
        c = "on" + c;
        var l, k, C;
        if (f) {
          for (l = f.length; k = f[--l];) {
            k.j === a && (k.i === h ? f.splice(l, 1) : C = !0);
          }
          C || (J ? a.detachEvent(c, V) : (a[c] = da, a[c] = null));
        }
      }
    };
    var A = {}, J = !1, K = 525.13 > ub, X = !K && !Va && t.addEventListener, ja;
    K && fb.addEventListener("click", function(a) {
      if (ja) {
        return ja = !1, a.preventDefault(), !1;
      }
    });
    La = function(a) {
      Wa ? Wa.push(a) : alert("Load event has already been dispatched!");
    };
    pb = function(a) {
      ma && ma.push(a);
    };
    var ma = [];
    if (419.3 >= ub) {
      var R = function() {
        if (R) {
          var a = D.readyState;
          "loaded" === a || "complete" === a ? (R = u, z()) : qa(R);
        }
      };
      qa(R);
    } else {
      fa(t, "load", z);
    }
    E || 0.9 <= T && 1.8 > T ? fa(t, "unload", function(a) {
      B(ma, a, !0);
    }) : ma = u;
    qb = function(a) {
      Ac.push(a);
    };
    La(function() {
      pa();
      Qb(pa);
    });
    nc = function(a) {
      Ia && Ia.push(a);
    };
    var Z = 60 > T || Zb, ia, Ma, Da;
    if (89 <= T || 89 <= Db || $b && 79 <= xc || e && (e("(forced-colors:none)").matches || e("(forced-colors:active)").matches)) {
      oc = !0, v("(forced-colors:active)", function(a) {
        ia = a.matches;
        ka = p();
        F(Ia, ka);
        P("(forced-colors:active):" + ka);
      });
    } else if (10 <= E || Yb || $b && xc) {
      oc = !0, v("(-ms-high-contrast:black-on-white)", function(a) {
        ia = Ma = a.matches;
        ka !== p() && (ka = p(), F(Ia, ka), P("(-ms-high-contrast:black-on-white):" + ka));
      }), v("(-ms-high-contrast:white-on-black)", function(a) {
        ia = Da = a.matches;
        ka !== p() && (ka = p(), F(Ia, ka), P("(-ms-high-contrast:white-on-black):" + ka));
      }), v("(-ms-high-contrast:active)", function(a) {
        ia = a.matches;
        ka !== p() && (ka = p(), F(Ia, ka), P("(-ms-high-contrast:active):" + ka));
      });
    } else if ($b && (E || T && 0 <= W.conpare(Ua, "1.8.1") || Zb)) {
      var Qa = function() {
        function a(f, l) {
          if (l && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var k = f.split("(")[1].split(",");
          return Ta(k[0]) + Ta(k[1]) + Ta(k[2]);
        }
        var c = D.defaultView;
        var h = c ? c.getComputedStyle(b, null) : b.currentStyle;
        c = (h && h.color || "").split(" ").join("");
        h = (h && h.backgroundColor || "").split(" ").join("");
        c && (ia = "#123456" !== c && "rgb(18,52,86)" !== c, Ma = a(c) < a(h, !0), Da = a(c) > a(h, !0), ka !== p() && (ka = p(), P("(forced-colors-fallback):" + ka), F(Ia, ka, Z)));
      };
      qb(function(a) {
        if (a) {
          return ra(b, "color", "#123456"), ra(b, "backgroundColor", "#123456"), Z ? (Qa(), Ia = u) : Qb(Qa), Qa = u, !0;
        }
      });
    } else {
      Ia = p = u;
    }
    mc = function(a) {
      Wa || alert("p_listenImageReady is called back for images present at load time.");
      Ga.push(a);
    };
    var Ga = [], Ra = 7.5 <= I && 8 > I;
    Ra && function() {
      for (var a = D.images, c = a.length, h; c;) {
        h = a[--c], h.H = h.src, Ya(h, "src");
      }
    }();
    La(function() {
      function a() {
        f ? (l = h[--f], Ra && ob(l, "src", l.H), Bc(c, Ra ? l.H : l.src)) : Ga = u;
      }
      function c(C) {
        B(Ga, {D:l, F:C}, !f);
        a();
      }
      var h = D.images || Pa("img"), f = h.length;
      if (12 > I || 532 > ub) {
        a();
      } else {
        for (; f;) {
          var l = h[--f];
          var k = 9 > E ? l.complete : 0 <= l.naturalWidth ? l.naturalWidth : l.width;
          F(Ga, {D:l, F:k}, !f);
        }
        Ga = u;
      }
    });
    lc = function(a) {
      rb.push(a);
    };
    var rb = [], Ba;
    fa(t, "resize", M);
    pb(function() {
      Ba && clearTimeout(Ba);
      sa(t, "resize", M);
    });
    vb = function(a) {
      Ca.push(a);
    };
    var Ca = [], kb = 0, Ha = 1 > T || 1.2 <= T && 1.8 > T || 7.2 >= I;
    Ha ? Qb(function() {
      var a = t.scrollY || oa.scrollTop;
      kb !== a && (kb = a, la());
    }) : fa(t, "scroll", la);
    pb(function() {
      Ha || sa(t, "scroll", la);
    });
  })();
  var Ic = 0;
  (function() {
    function p(x) {
      return x.styleSheet || x.sheet;
    }
    var z = 1 > T || 8 <= I && 9 > I, v = 7.2 <= I && 8 > I, B = !!E || !z && !v && function() {
      var x = ea(fb, "style"), V = !!p(x);
      V && (P("[CSSOM] CSSStyleSheet @insertRule : " + !!p(x).insertRule), P("[CSSOM] CSSStyleSheet @addRule : " + !!p(x).addRule), P("[CSSOM] CSSStyleSheet @cssRules : " + !!p(x).cssRules), P("[CSSOM] CSSStyleSheet @rules : " + !!p(x).rules), P("[CSSOM] CSSStyleSheet @cssText : " + ("" === p(x).cssText)));
      Ja(x);
      return V;
    }();
    P("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + B);
    var F = !B && ub && !z && !v && function() {
      var x = ea(fb, "style"), V;
      ic(x, "");
      if (V = !!p(x)) {
        P("[CSSOM] CSSStyleSheet @insertRule : " + !!p(x).insertRule), P("[CSSOM] CSSStyleSheet @addRule : " + !!p(x).addRule), P("[CSSOM] CSSStyleSheet @cssRules : " + !!p(x).cssRules), P("[CSSOM] CSSStyleSheet @rules : " + !!p(x).rules), P("[CSSOM] CSSStyleSheet @cssText : " + ("" === p(x).cssText));
      }
      Ja(x);
      return V;
    }();
    B || P("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + F);
    Ic = z || v ? 1 : B || F ? 2 : 0;
    P("[CSSOM] p_CSSOM_canuse : " + Ic);
  })();
  (function() {
    9 > E && La(function() {
      var p = ea(oa, "div");
      va(p, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      zc = 1 < p.offsetHeight;
      va(p, "");
      Ja(p);
    });
    Bc = function(p, z) {
      function v() {
        F || !x || B.complete ? (P("[imageTest] timer -> img.complete. img.width=" + B.width), qa(p, !!B.width), B.onerror = B.onload = da, B = p = u) : (--x, qa(v));
      }
      var B = new Image(), F, x = 99;
      P("[imageTest] start.");
      B.onerror = function() {
        P("[imageTest] error!");
        F = !0;
      };
      B.onload = function() {
        P("[imageTest] onload.");
        F = !0;
      };
      B.src = z;
      qa(v);
    };
  })();
  (function() {
    mc(function(v) {
      var B = v.D;
      v = v.F;
      var F = Aa(B);
      !Za(F, "aBodyRoot") && v ? jb(F, "img-loaded") : v || Ka(B, "alt") || ra(B, "display", "none");
    });
    if (!oc && Ia) {
      var p, z = function() {
        p = ea(nb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:wa + "css/" + Pb + "hc/" + ac});
        if (bc || 5.5 <= E && 9 > E && zc) {
          jb(oa, "jsCanRotate"), P("jsCanRotate!");
        }
        z = u;
      };
      nc(function(v) {
        v && !p ? z() : p && (v ? nb.appendChild(p) : Ja(p));
      });
    }
    5.5 <= E && 8 > E && Ia && nc(function(v) {
      for (var B = Pa("a"), F = B.length, x = 0; x < F; ++x) {
        B[x].hideFocus = !v;
      }
    });
    I && La(function() {
      for (var v = Pa("a"), B = v.length, F = 0, x; F < B; ++F) {
        x = v[F], "-1" === Ka(x, "tabindex") ? Ya(x, "tabindex") : Ka(x, "href") && ob(x, "tabindex", "0");
      }
      v = Pa("input");
      F = 0;
      for (B = v.length; F < B; ++F) {
        x = v[F], "hidden" === Ka(x, "type") && Ya(x, "tabindex");
      }
    });
  })();
  (function() {
    function p(d) {
      var g = d.keyCode || d.ba, w = Ga.length, H, Q, N, Na;
      if ("keydown" !== d.type || 13 === g) {
        for (; w;) {
          if (g = Ga[--w], g.C === this || g.u === this) {
            w = g.C;
            var S = H = g.u;
            if (g.N) {
              if (ra(w, "width", g.Z), w.src = g.Y, Ib(S, g.R), w = g.K) {
                va(w, g.P), Ib(w, "caption jsCap");
              }
            } else {
              if (Q = g.L) {
                for (delete g.L; H = Aa(H);) {
                  if (Za(H, "caption")) {
                    g.K = H, g.P = H.style.cssText, jb(H, "jsCap");
                  } else {
                    var U = Xa(H);
                    if ("DIV" === U || "P" === U || "BLOCKQUOT" === U || "LI" === U || "DD" === U || "TD" === U || "TH" === U || "FORM" === U || "PRE" === U) {
                      break;
                    }
                  }
                }
                H = H.offsetWidth - 4 - 1;
                1600 < H && (H = 1600);
                if (g.T && 0 < Q.split("/").pop().indexOf("=")) {
                  Q = Q.split("=");
                  U = Q.length;
                  if (N = Q[U - 1]) {
                    (Na = Ta(N.substr(1))) && N === "s" + Na ? Q[U - 1] = "w" + H : Q[U] = "w" + H;
                  }
                  Q = Q.join("=");
                } else if (0 < Q.indexOf(".bp.blogspot.com/")) {
                  Q = Q.split("/");
                  U = Q.length;
                  if (N = Q[U - 2]) {
                    (Na = Ta(N.substr(1))) && N === "s" + Na ? Q[U - 2] = "w" + H : Q.splice(U - 1, 0, "w" + H);
                  }
                  Q = Q.join("/");
                }
                g.V = Q;
              }
              g.R = Hc(S);
              jb(S, "jsPicaLarge");
              ra(w, "width", "");
              w.src = g.V;
              if (w = g.K) {
                va(w, ""), jb(w, "jsCapLarge");
              }
            }
            g.N = !g.N;
            break;
          }
        }
        z(d);
      }
    }
    function z(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function v(d) {
      for (var g = arguments, w = 0, H = g.length; w < H; ++w) {
        if (isFinite(g[w])) {
          return g[w];
        }
      }
      return 0;
    }
    function B(d) {
      var g = O;
      if (wb) {
        if (m && !g) {
          if (new db() - 0 < m) {
            return;
          }
          m = u;
        }
        7 === d ? (b("t"), y = 0) : (b("s"), y && (y = Fb(y)), C = v(t.pageYOffset, t.scrollY, a.scrollTop, oa.scrollTop));
        g ? (O = x(u, g[0], g[1])) || (m = new db() - 0 + 99) : x();
        q();
      } else {
        O = u;
      }
    }
    function F() {
      b("w.blur");
    }
    function x(d, g, w) {
      function H(Sa) {
        S = Sa;
        if (l) {
          U = l + ":translate" + (r ? "3D(0," : "(0,") + Sa + (r ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Sa) {
          if (!Ha && (kb || Ca)) {
            var Tb = c.offsetWidth;
          }
          U = Ca ? "position:fixed;width:" + Tb + "px;top:" + (Sa - Q + aa) + "px" : Ha ? "top:" + Sa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Sa + "px";
          kb && U && (U += ";" + (0 > Sa ? "clip:rect(" + -Sa + "px " + Tb + "px " + ta + "px 0)" : Sa + ta < Jb ? "clip:rect(0 " + Tb + "px " + ta + "px 0)" : "clip:rect(0 " + Tb + "px " + (Jb - Sa) + "px 0)"), 8 > E || (U = U.split(" ").join(",")));
        }
      }
      var Q = C, N = h, Na = c.offsetTop === N.offsetTop, S = 0, U = "", Oa = !0;
      if (Na) {
        for (var ha = 0, aa = 0, xa = N; xa && xa !== oa;) {
          aa += xa.offsetTop, xa = xa.offsetParent;
        }
        S = k;
        xa = v(t.innerHeight, a.offsetHeight);
        var pc = N.offsetHeight, ta = f.offsetHeight, Jb = ta < pc ? pc : ta, lb = Q, xb = lb + xa, Ub = aa, Vb = Ub + Jb, Jc = aa + S, Nc = Jc + ta;
        N = lb < Ub ? Ub : lb;
        var mb = Vb < xb ? Vb : xb, yb = mb - N;
        lb = Vb <= lb;
        xb = xb <= Ub;
        if (g !== u) {
          Oa = aa + g;
          d = Oa + w;
          if (lb || xb) {
            return xa <= w ? (g = aa, b("4.1.1")) : lb ? (g = Vb - w, b("4.1.2")) : (g = aa + w - xa, b("4.1.3")), m = u, t.scroll(v(t.pageXOffset, t.scrollX, a.scrollLeft, oa.scrollLeft), g), b("4.1.*"), O;
          }
          ta <= yb ? (ha = 3, b("4.2")) : w <= yb ? ta - g <= yb ? (ha = 2, b("4.3.1")) : N <= Oa && d <= mb ? N < aa + S && (ha = 4, b("4.3.2")) : N <= Oa && Oa <= mb ? (ha = 5, b("4.3.3")) : N <= d && d <= mb ? (ha = 4, b("4.3.4")) : d < N ? (ha = 4, b("4.3.5")) : (ha = 5, b("4.3.6")) : (ha = 4, b("4.4"));
          Oa = u;
        } else {
          d !== u ? ta <= yb ? (ha = 7, Oa = !1, b("3.1")) : (S -= 60 * d, ha = mb - aa - ta, d = N - aa, S < ha ? (S = ha, b("3.2.1")) : d < S ? (S = d, b("3.2.2")) : b("3.2.3"), ha = 6) : pc <= ta || (lb ? (ha = 1, b("2.2.1")) : xb ? b("2.2.2") : ta <= yb ? (ha = 3, b("2.3")) : N < Jc ? (ha = 3, b("2.4.1")) : Nc < mb ? (ha = 2, b("2.4.2")) : Q < aa + ta - yb ? b("2.4.3") : (ha = 2, b("2.4.4")));
        }
        switch(ha) {
          case 0:
            H(0);
            break;
          case 1:
            H(Jb - ta);
            break;
          case 2:
            H(mb - aa - ta);
            break;
          case 3:
            H(N - aa);
            break;
          case 4:
            H(N - aa - g);
            break;
          case 5:
            H(mb - aa - (g + w));
          case 6:
            H(S);
        }
        A(S, ta, aa, Jb, xa, g || "-", w || "-");
      } else {
        A(S, "-", "-", "-", "-", "-", "-");
      }
      va(f, U);
      k = S;
      return Na && Oa;
    }
    function V(d) {
      if (wb) {
        b("m");
        T && (C = v(t.pageYOffset, a.scrollTop, oa.scrollTop), q());
        var g = this !== d.target, w = g && v(d.deltaY, d.wheelDeltaY / 120, d.wheelDelta / -120, d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1));
        g && w && x(9 >= w ? -9 >= w ? -3 : w : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function pa(d) {
      for (var g = d.target, w = -1, H; H = Ra[++w];) {
        Hb(H, g) && V(d);
      }
    }
    function M(d) {
      if (wb) {
        var g = !!l || T, w = d.target || d.srcElement, H = 0;
        if (Hb(f, w)) {
          b(d.type || "ie5focus");
          fa(w, "blur", e);
          for (d = w.offsetHeight; w && (g ? Hb(f, w) : f !== w);) {
            H += w.offsetTop, w = w.offsetParent;
          }
          Ba ? (O = [H, d], y && Fb(y), y = qa(B, 7, 1 > T ? 500 : 0)) : (C = v(t.pageYOffset, t.scrollY, a.scrollTop, oa.scrollTop), x(u, H, d));
          J(H, d);
        }
      }
    }
    function za() {
      ya = t.onerror;
      t.onerror = la;
      var d = D.activeElement;
      Ea !== d && (Ea = d, M({target:d}));
      t.onerror = ya;
      ya = u;
    }
    function la() {
      P("error!");
      t.onerror = ya;
      ya = Ea = u;
      return !0;
    }
    function e() {
      sa(this, "blur", e);
      J(0, 0);
    }
    function b(d) {
      Kb && (Wb && (Wb = Fb(Wb)), Wb = qa(n, 0, 1400), Kb.innerHTML += " " + d);
    }
    function n() {
      Kb.innerHTML = "";
    }
    function q() {
      Lb && (ra(Lb, "top", (C / 10 | 0) + "px"), $a.innerHTML = " scrl:" + (C | 0));
    }
    function A(d, g, w, H, Q, N, Na) {
      zb && (ra(zb, "top", ((d + w) / 10 | 0) + "px"), ra(zb, "height", (g / 10 | 0) + "px"), ra(Lb, "height", (Q / 10 | 0) + "px"), ra(qc, "height", (oa.scrollHeight / 10 | 0) + "px"), ab.innerHTML = "conY:" + w + "/sidY" + d + ", conH:" + H + "/sidH" + g + ", focY:" + N + " focH:" + Na);
    }
    function J(d, g) {
      Mb && (ra(Mb, "top", (d / 10 | 0) + "px"), ra(Mb, "height", (g / 10 | 0) + "px"));
    }
    function K() {
      rc.call(Xb);
    }
    function X() {
      D.fullscreenElement || D.fullscreen || D.webkitIsFullscreen || D.msFullscreenElement || t.fullScreen ? (ob(Xb, "id", "blog2slide-root"), Ab[1].parentNode.insertBefore(Nb, Ab[1]), ja(), D.onkeydown = ma) : sb && (Ja(Nb), Ya(Xb, "id"), Ya(sb, "id"), sb = D.onkeydown = u);
    }
    function ja() {
      sb && Ya(sb, "id");
      tb = 0 < tb ? sc < tb ? sc : tb : 0;
      sb = Ab[tb];
      ob(sb, "id", "blog2slide-current");
    }
    function ma(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++tb, ja();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --tb, ja();
      }
    }
    Eb = !(7.2 > I || 0 >= W.conpare(Ua, "0.9"));
    cc = function(d) {
      R ? ia ? cb("[DynamicScvriptLoader] Document already loaded! " + d) : D.write('<script src="' + d + '">\x3c/script>') : ia && !Da.length ? Qa(d) : Da.push(d);
    };
    dc = function(d) {
      R ? P("[DynamicScvriptLoader] " + d + " loaded.") : d === Ma ? Qa(Da.shift()) : cb(d + " <> " + Ma);
    };
    var R = !Eb, Z = Eb && 7.5 > I, ia, Ma;
    if (!R) {
      Eb = !0;
      var Da = [];
      Z && (Cc = !0);
      La(function() {
        ia = !0;
        Qa(Da.shift());
      });
      var Qa = function(d) {
        if (Ma = d) {
          Z ? tc[0].src = d : ea(nb, "script", {src:d});
        }
      };
    }
    var Ga = [];
    wc || (mc(function(d) {
      if (d.F && gb) {
        d = d.D;
        var g = Aa(d), w = "", H;
        if ("A" === Xa(g) && 1 === Fc(g).length) {
          var Q = Ka(g, "href");
          var N = Q.split("?")[0].split("#")[0].split(".");
          N = (N[N.length - 1] || "").toLowerCase();
          if ((H = 0 < Q.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + N + ".")) {
            fa(g, "keydown", p), fa(d, "click", p), fa(g, "click", z), 9 > I || (w = d.offsetWidth - 4 + "px", ra(d, "width", w)), jb(g, "jsPica"), Ga.push({u:g, Y:d.src, Z:w, L:Q, C:d, T:H});
          }
        }
      }
    }), pb(function(d, g) {
      for (d = -1; g = Ga[++d];) {
        sa(g.u, "keydown", p), sa(g.C, "click", p), sa(g.u, "click", z);
      }
    }));
    var Ra = ["jsSidebarFixer1", "jsSidebarFixer2"], rb = T || Zb || Yb, Ba = !(6 <= E && 9 > E || I || 1 <= T && 1.3 > T), Ca = !(5 > Y(16) || 5 > Y(17) || 2.2 > Y(21) || 6 > Y(12) || Fa(30) && 534 > ub || Fa(32) || 7 > E || 9 > I || 1 > T), kb = Ca || 7 > E || 1 > T, Ha = 7.5 > I, a, c, h, f, l = bc, k = 0, C = 0, r, O, m, y, G = T && 0 <= W.conpare(Ua, "0.9.7"), ba = T && 0 >= W.conpare(Ua, "0.9.4");
    Kc || wc || (qb(function(d) {
      if (d) {
        if (!gb) {
          return !0;
        }
        d = -1;
        var g;
        a = "CSS1Compat" !== D.compatMode ? oa : fb || oa;
        c = hb("jsSide");
        h = gb;
        if (!c) {
          return !0;
        }
        vb(B);
        lc(B);
        f = Gb(hc(c), "div", {id:"jsSidebarFixer"});
        fa(t, "blur", F);
        for (8 > I || ba || 6 > E || (E || Va ? fa(f, "focusin", M) : rb ? fa(D, "focus", M, {capture:!0, passive:!1}) : fa(f, "DOMFocusIn", M, !1)); 1 < ib(c).length;) {
          f.appendChild(ib(c)[1]);
        }
        for (G && !Cb && fa(D, "DOMMouseScroll", pa, !1); g = Ra[++d];) {
          var w = hb(g);
          w.onwheel !== u ? fa(w, "wheel", V, {passive:!1}) : Cb ? fa(w, "MozMousePixelScroll", V, !1) : G ? Ra[d] = hb(g) : (w.onmousewheel !== u || 9 <= I) && fa(w, "mousewheel", V, !1);
        }
        E || Yb || 2 > Db || (r = eb.perspective !== u || eb.MozPerspective !== u || eb["-webkit-perspective"] !== u);
        B();
        return !0;
      }
    }), pb(function() {
      var d = -1, g;
      if (G && !Cb) {
        sa(D, "DOMMouseScroll", pa, !1);
      } else {
        for (; g = Ra[++d];) {
          g = hb(g), g.onwheel !== u ? sa(g, "wheel", V, {passive:!1}) : Cb ? sa(g, "MozMousePixelScroll", V, !1) : (g.onmousewheel !== u || 9 <= I) && sa(g, "mousewheel", V, !1);
        }
      }
      sa(t, "blur", F);
      8 > I || ba || 6 > E || (E || Va ? sa(f, "focusin", M, !1) : rb ? sa(D, "focus", M, {capture:!0, passive:!1}) : sa(f, "DOMFocusIn", M, !1));
      ca && clearInterval(ca);
    }));
    var ca, Ea, ya;
    6 > E && qb(function(d) {
      if (!gb) {
        return !0;
      }
      d ? ca = setInterval(za, 333) : ca && (clearInterval(ca), ca = 0);
    });
    var ab, $a, Kb, qc, Lb, zb, Mb, Wb;
    qb(function(d) {
      if (d) {
        if (!gb) {
          return !0;
        }
        var g = ib(oa);
        d = Gb(g[0], "div");
        if (Ca) {
          va(d, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; g.length;) {
            d.appendChild(g.shift());
          }
          va(d, "width:100%; height:100%; overflow:auto; position:relative;");
          d = Gc(d, "div");
          va(fb, "overflow:hidden");
          va(oa, "overflow:hidden");
          va(d, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ea(d, "div", u, bc ? "transform" + (r ? "3D" : "") : Ca ? "pos:fixed" : "pos:absolute");
        g = ea(d, "div");
        ab = ea(g, "span");
        $a = ea(g, "span");
        Kb = ea(d, "div");
        qc = ea(d, "div");
        va(qc, "position:absolute;left:0;top:0;width:54px;background:#242");
        zb = ea(d, "div");
        va(zb, "position:absolute;left:0;width:54px;background:#363");
        Lb = ea(d, "div");
        va(Lb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        Mb = ea(zb, "div");
        va(Mb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    La(function() {
      function d(Na, S, U, Oa) {
        var ha = Oa ? "div" : "cite";
        if (0 === S.indexOf("urn:isbn:")) {
          S = S.substr(9).toUpperCase().split("-").join("");
          if (13 === S.length) {
            S = S.toString().slice(3, -1);
            for (var aa = 0, xa = 0; 9 > xa; xa++) {
              aa += (S.charAt(xa) - 0) * (10 - xa);
            }
            aa = (11 - aa % 11) % 11;
            aa = 10 === aa ? "X" : aa.toString();
            S += aa;
          }
          10 === S.length && (S = "//www.amazon.co.jp/exec/obidos/ASIN/" + S + "/itozyun-22/ref=nosim/");
        }
        U = Oa ? Gb(hc(w), ha, {className:U}) : ea(w, ha, {className:U});
        ea(U, "a", 0 === S.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:S, X:I ? "0" : u} : {href:S, X:I ? "0" : u}, Na);
      }
      if (gb) {
        for (var g = gc(gb, "blockquote"), w, H = -1, Q, N; w = g[++H];) {
          Q = Ka(w, "title"), N = Ka(w, "cite"), Q && N ? (Ya(w, "title"), d(Q, N, "js-bqLink", !0)) : N && (Ya(w, "cite"), d(t.decodeURI ? decodeURI(N) : N, N, "js-bqCite"));
        }
      }
    });
    var rc, Xb, Nb, sb, Ab, tb, sc;
    La(function() {
      var d = hb("blog2slide-start");
      if (d) {
        var g = D.onfullscreenchange !== u ? "f" : D.onmozfullscreenchange !== u ? "mozF" : D.onwebkitfullscreenchange !== u ? "webkitF" : 0;
        rc = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== g || rc ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', fa(d.firstChild, "click", K), d = Aa(d), Xb = Aa(d), Ab = gc(d, "section"), Nb = D.createElement("h1"), Nb.innerHTML = Pa("h1")[0].innerHTML, sc = Ab.length, Ab.splice(0, 0, Nb), 0 !== g ? fa(D, g + "ullscreenchange", X) : E ? fa(D, "MSFullscreenChange", X, !1) : lc(X)) : Ja(d);
      }
    });
  })();
  var Bb, Ob = !L || 0.9 > T || 8 > I || 5.5 > E, bb;
  (function() {
    function p(a) {
      return a === "" + a;
    }
    function z(a, c) {
      return Ob ? new n(a, c) : new L(a, c);
    }
    function v(a, c, h, f, l) {
      var k = q.codeBlocks[q.codeBlocks.length - 1], C = b(), r = C - J;
      switch(h || 0) {
        case 1:
          q.initRegExpCount++;
          q.initRegExpTotal += r;
          q.initRegExpMax < r && (q.initRegExpMax = r, q.initRegExpSource = l.toString(), q.initRegExpInstance = l);
          break;
        case 2:
          k.decorateCount++;
          k.decorateTime += r;
          break;
        case 3:
          k.updateDOMTime += r;
      }
      if (C - A < ma && !f) {
        return J = C, a(c);
      }
      qa(B, {S:a, W:c});
    }
    function B(a) {
      A = J = b();
      a.S(a.W);
    }
    function F(a, c) {
      a && Bb[a] || (a = R.test(c) ? "default-markup" : "default-code");
      var h = !!Bb[a];
      h && v(Qa, a, 0, !0);
      return h;
    }
    function x() {
      function a(ya, ab, $a) {
        ab && (c.g = c.g || [], c.g.push({l:c, A:c.A, M:1, s:C, B:ya, o:ab, m:$a, O:{}, v:0}));
      }
      var c = K, h = c.m, f = h[0], l = h[2], k = c.B, C = c.s, r = c.$.shift(), O = c.O;
      if (r) {
        var m = O[r], y;
        if (!(0 <= m)) {
          if (y = f[r.charAt(0)]) {
            var G = r.match(y[1]);
            m = y[0];
          } else {
            for (m = 0, f = -1; y = l[++f];) {
              if (G = r.match(y[1])) {
                m = y[0];
                break;
              }
            }
          }
          !(y = p(m)) || G && p(G[1]) || (y = !1, m = 11);
          y || (O[r] = m);
        }
        l = c.v;
        O = r.length;
        c.v += O;
        if (y) {
          y = G[1];
          f = r.indexOf(y);
          var ba = y.length, ca = f + ba;
          G[2] && (ca = O - G[2].length, f = ca - ba);
          a(k + l, r.substr(0, f), h);
          if (ba && F(m, y)) {
            a(k + l + f, y);
            var Ea = !0;
          }
          a(k + l + ca, r.substr(ca), h);
          c.g && c.g.length && (K = c.g.shift());
          Ea || (K !== c ? v(Ma, u, 2) : v(x, u, 2));
        } else {
          C.push(k + l, m), v(x, u, 2);
        }
      } else {
        c.l ? (K = c.l.g.shift()) ? v(Ma, u, 2) : (K = c.l, v(x, u, 2)) : v(rb, u, 2);
      }
    }
    function V(a) {
      if (Da.length) {
        var c = Da.shift(), h = la[c];
        if (h.pop) {
          la[c] = h = z(h[0], h[1]);
        } else if (p(h)) {
          la[c] = h = z(h);
        } else {
          return V(a);
        }
        v(V, a, 1, !1, h);
      } else {
        v(Qa, a);
      }
    }
    function pa(a) {
      for (var c, h = a.firstChild; h; h = h.nextSibling) {
        var f = h.nodeType;
        c = 1 === f ? c ? a : h : 3 === f ? Z.test(h.nodeValue) ? a : c : c;
      }
      return c === a ? u : c;
    }
    Bb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var M = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], za = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], la = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
    "^\\s+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
    "g"], "^\\/\\/[^\\r\\n]*", "^\\/\\*[\\s\\S]*?(?:\\*\\/|$)", "^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/)", "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN)\\b", 
    ["^@[a-z_$][a-z_$@0-9]*", "i"], "^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b)", ["^[a-z_$][a-z_$@0-9]*", "i"], "^\\\\[\\s\\S]?", "^.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/)", ["(?:[^<?]+)|(?:<!\\w[^>]*(?:>|$))|(?:<\\!--[\\s\\S]*?(?:-\\->|$))|(?:<\\?(?:[\\s\\S]+?)(?:\\?>|$))|(?:<%(?:[\\s\\S]+?)(?:%>|$))|(?:(?:<[%?]|[%?]>))|(?:<xmp\\b[^>]*>(?:[\\s\\S]+?)<\\/xmp\\b[^>]*>)|(?:<script\\b[^>]*>(?:[\\s\\S]*?)(?:<\\/script\\b[^>]*>))|(?:<style\\b[^>]*>(?:[\\s\\S]*?)(?:<\\/style\\b[^>]*>))|(?:(?:<\\/?[a-z][^<>]*>))|(?:[\x00-\uffff])", 
    "gi"], "^[^<?]+", "^<!\\w[^>]*(?:>|$)", "^<\\!--[\\s\\S]*?(?:-\\->|$)", "^<\\?([\\s\\S]+?)(?:\\?>|$)", "^<%([\\s\\S]+?)(?:%>|$)", "^(?:<[%?]|[%?]>)", ["^<xmp\\b[^>]*>([\\s\\S]+?)<\\/xmp\\b[^>]*>", "i"], ["^<script\\b[^>]*>([\\s\\S]*?)(<\\/script\\b[^>]*>)", "i"], ["^<style\\b[^>]*>([\\s\\S]*?)(<\\/style\\b[^>]*>)", "i"], ["^(<\\/?[a-z][^<>]*>)", "i"], "^[ \\t\\r\\n\\f]+", ["(?:[ \\t\\r\\n\\f]+)|(?:\\\"(?:[^\\n\\r\\f\\\\\\\"]|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\\")|(?:\\'(?:[^\\n\\r\\f\\\\\\']|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\')|(?:url\\((?:[^\\)\\\"\\']+)\\))|(?:(?:url|rgb|\\!important|@import|@page|@media|@charset|inherit)(?=[^\\-\\w]|$))|(?:(?:-?(?:[_a-z]|(?:\\\\[0-9a-f]+ ?))(?:[_a-z0-9\\-]|\\\\(?:\\\\[0-9a-f]+ ?))*)\\s*:)|(?:\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/)|(?:(?:\x3c!--|--\x3e))|(?:(?:\\d+|\\d*\\.\\d+)(?:%|[a-z]+)?)|(?:#(?:[0-9a-f]{3}){1,2}\\b)|(?:-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*)|(?:[^\\s\\w\\'\\\"]+)|(?:[\x00-\uffff])", 
    "gi"], '^\\"(?:[^\\n\\r\\f\\\\\\"]|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\"', "^\\'(?:[^\\n\\r\\f\\\\\\']|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\'", ["^url\\(([^\\)\\\"\\']+)\\)", "i"], ["^(?:url|rgb|\\!important|@import|@page|@media|@charset|inherit)(?=[^\\-\\w]|$)", "i"], ["^(-?(?:[_a-z]|(?:\\\\[0-9a-f]+ ?))(?:[_a-z0-9\\-]|\\\\(?:\\\\[0-9a-f]+ ?))*)\\s*:", "i"], "^\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/", "^(?:\x3c!--|--\x3e)", ["^(?:\\d+|\\d*\\.\\d+)(?:%|[a-z]+)?", "i"], ["^#(?:[0-9a-f]{3}){1,2}\\b", 
    "i"], ["^-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*", "i"], "^[^\\s\\w\\'\\\"]+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:(?:null|true|false)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
    "g"], "^(?:null|true|false)\\b", "^.[^\\s\\w.$@'\"`/\\\\]*", ["(?:[\\s\\S]+)|(?:[\x00-\uffff])", "g"], "^[\\s\\S]+", "^[\\s]+", "^(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?)", ["(?:[\\s]+)|(?:(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?))|(?:^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$)|(?:(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?)|(?:=\\s*(?:[^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s))))|(?:[=<>\\/]+)|(?:on\\w+\\s*=\\s*\\\"(?:[^\\\"]+)\\\")|(?:on\\w+\\s*=\\s*\\'(?:[^\\']+)\\')|(?:on\\w+\\s*=\\s*(?:[^\\\"\\'>\\s]+))|(?:style\\s*=\\s*\\\"(?:[^\\\"]+)\\\")|(?:style\\s*=\\s*\\'(?:[^\\']+)\\')|(?:style\\s*=\\s*(?:[^\\\"\\'>\\s]+))|(?:[\x00-\uffff])", 
    "gi"], ["^^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$", "i"], ["^(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?", "i"], "^=\\s*([^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s)))", "^[=<>\\/]+", ['^on\\w+\\s*=\\s*\\"([^\\"]+)\\"', "i"], ["^on\\w+\\s*=\\s*\\'([^\\']+)\\'", "i"], ["^on\\w+\\s*=\\s*([^\\\"\\'>\\s]+)", "i"], ['^style\\s*=\\s*\\"([^\\"]+)\\"', "i"], ["^style\\s*=\\s*\\'([^\\']+)\\'", "i"], ["^style\\s*=\\s*([^\\\"\\'>\\s]+)", "i"], "^(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$))", 
    "^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*)", ["(?:(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$)))|(?:#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN|caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END|break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None|break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END|break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
    "g"], "^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>", "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN|caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END|break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None|break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END|break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b"], 
    e = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), b = db.now || function() {
      return +new db();
    }, n, q = {useRegExpCompat:Ob, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var A = b();
    var J, K, X, ja, ma = 5 > E ? 60 : 5.5 > E ? 0 : Ob ? 20 : 10, R, Z;
    bb = [function(a) {
      t.RegExpCompat = n = a;
    }, function() {
      R = z("^\\s*<");
      Z = z("\\S");
    }];
    Ob || (bb[1](), bb = u);
    var ia = function() {
      var a = K, c = a.U, h = Ga(a.A, a.M), f = a.o = h.o;
      a.G = h.G;
      F(c, f) || (K = u, v(Ha, u, 0, !0));
    };
    var Ma = function() {
      var a = K;
      a.$ = a.o.match(a.m[1]) || [];
      a.s.push(a.B, 0);
      v(x, u, 2);
    };
    var Da = [];
    var Qa = function(a) {
      function c(m) {
        var y = m;
        0 <= m && (y = za[m]);
        0 <= y[1] && (y[1] = h(y[1]));
        return y;
      }
      function h(m) {
        var y = m;
        return 0 <= m && (y = la[m], !y.exec) ? (Da.push(m), m) : y;
      }
      var f = K, l = Bb[a];
      p(l) && (l = Bb[a] = Bb[l]);
      var k = l[0];
      if (0 <= k) {
        k = M[k];
        if (0 <= k["-num"]) {
          var C = k["-num"];
          delete k["-num"];
          for (var r = -1; 9 > r;) {
            k["" + ++r] = C;
          }
        }
        l[0] = k;
      }
      for (var O in k) {
        k[O] = c(k[O]);
      }
      l[1] = h(l[1]);
      k = l[2];
      r = 0;
      for (C = k.length; r < C; ++r) {
        k[r] = c(k[r]);
      }
      Da.length ? v(V, a, 2) : (f.m ? f.l && (f.l.g[0].m = l) : f.m = l, v(Ma, u, 1));
    };
    var Ga = function(a, c) {
      function h(O) {
        var m = O.nodeType;
        if (1 === m) {
          if (!Za(O, "nocode")) {
            for (m = O.firstChild; m; m = m.nextSibling) {
              h(m);
            }
            m = Xa(O);
            if ("BR" === m || "LI" === m) {
              f[C] = "\n", k[C << 1] = l++, k[C++ << 1 | 1] = O;
            }
          }
        } else if (3 === m || 4 === m) {
          if (m = O.nodeValue) {
            m = c ? m.split("\r\n").join("\n").split("\r").join("\n") : m.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), f[C] = m, k[C << 1] = l, l += m.length, k[C++ << 1 | 1] = O;
          }
        }
      }
      var f = [], l = 0, k = [], C = 0;
      h(a);
      var r = f.join("");
      "\n" === r.charAt(r.length - 1) && (r = r.substr(0, r.length - 1));
      return {o:r, G:k};
    };
    var Ra = function(a, c, h) {
      function f(m) {
        var y = m.nodeType;
        if (1 === y && !Za(m, "nocode")) {
          if ("BR" === Xa(m)) {
            l(m), m.parentNode && Ja(m);
          } else {
            for (m = m.firstChild; m; m = m.nextSibling) {
              f(m);
            }
          }
        } else if ((3 === y || 4 === y) && h) {
          var G = m.nodeValue, ba = G.indexOf("\r\n"), ca = 2;
          -1 === ba && (ba = G.indexOf("\n"), ca = 1);
          -1 === ba && (ba = G.indexOf("\r"));
          -1 !== ba && (y = G.substr(0, ba), m.nodeValue = y, (G = G.substr(ba + ca)) && jc(m, G), l(m), y || Ja(m));
        }
      }
      function l(m) {
        function y(ba, ca) {
          var Ea = ca ? ba.cloneNode(!1) : ba, ya = ba.parentNode;
          if (ya) {
            ya = y(ya, 1);
            var ab = ba.nextSibling;
            ya.appendChild(Ea);
            for (var $a = ab; $a; $a = ab) {
              ab = $a.nextSibling, ya.appendChild($a);
            }
          }
          return Ea;
        }
        for (; !m.nextSibling;) {
          if (m = m.parentNode, !m) {
            return;
          }
        }
        m = y(m.nextSibling, 0);
        for (var G; (G = m.parentNode) && 1 === G.nodeType;) {
          m = G;
        }
        C.push(m);
      }
      for (var k = D.createElement("li"); a.firstChild;) {
        k.appendChild(a.firstChild);
      }
      for (var C = [k], r = 0; r < C.length; ++r) {
        f(C[r]);
      }
      if (c === (c | 0)) {
        if (10 <= c && 7.2 > I) {
          var O = D.createElement("ol");
          O.innerHTML = '<li value="' + c + '">' + k.innerHTML + "</li>";
          C[0] = O.firstChild;
        } else {
          ob(k, "value", c);
        }
      }
      O = ea(a, "ol", {className:"linenums"});
      a = Math.max(0, c - 1 | 0) || 0;
      r = 0;
      for (c = C.length; r < c; ++r) {
        k = C[r], Ib(k, "L" + (r + a) % 10), k.firstChild || ic(k, "\u00a0"), O.appendChild(k);
      }
    };
    var rb = function() {
      var a = K, c = a.o, h = c.length, f = 0, l = a.G, k = l.length, C = 0, r = a.s, O = r.length, m = 0;
      r[O] = h;
      var y, G;
      for (G = y = 0; G < O;) {
        r[G] !== r[G + 2] ? (r[y++] = r[G++], r[y++] = r[G++]) : G += 2;
      }
      O = y;
      for (G = y = 0; G < O;) {
        var ba = r[G], ca = r[G + 1];
        for (G += 2; G + 2 <= O && r[G + 1] === ca;) {
          G += 2;
        }
        r[y++] = ba;
        r[y++] = ca;
      }
      r.length = y;
      a = a.A;
      O = "";
      a && (O = a.style.display, ra(a, "display", "none"));
      for (; C < k;) {
        y = l[C + 2] || h;
        ba = r[m + 2] || h;
        G = Math.min(y, ba);
        ca = l[C + 1];
        var Ea;
        if (1 !== ca.nodeType && (Ea = c.substring(f, G))) {
          9 > E && (Ea = Ea.split("\n").join("\r"));
          var ya = Gb(ca, "span", {className:e[r[m + 1]]}, Ea);
          Ja(ca);
          f < y && (l[C + 1] = jc(ya, c.substring(G, y)));
        }
        f = G;
        f >= y && (C += 2);
        f >= ba && (m += 2);
      }
      a && ra(a, "display", O);
      K = u;
      v(Ha, u, 3, !0);
    };
    var Ba = [], Ca;
    q.readyTime = b() - A;
    qb(function(a) {
      if (a) {
        a = [Pa("pre"), Pa("code"), Pa("xmp")];
        for (var c = 0; c < a.length; ++c) {
          for (var h = 0, f = a[c].length; h < f; ++h) {
            kb(a[c][h]);
          }
        }
        return !0;
      }
    });
    var kb = function(a) {
      Ba.push(a);
      Ca = Ba.length;
      1 === Ca && (uc ? qa(uc, Ha) : bb ? bb.push(function() {
        qa(Ha);
      }) : qa(Ha));
    };
    var Ha = function() {
      function a(C, r) {
        return (C.split(r)[1] || "").split(" ")[0];
      }
      if (!K) {
        Ca !== Ba.length && ja && ja(Ca - Ba.length, Ca);
        var c = Ba.shift();
        if (c) {
          A = b();
          if (Za(c, "prettyprint") && !Za(c, "prettyprinted")) {
            for (var h = !1, f = c.parentNode; f !== oa; f = f.parentNode) {
              var l = Xa(f);
              if (("PRE" === l || "XMP" === l || "CODE" === l) && Za(f, "prettyprint")) {
                h = !0;
                break;
              }
            }
            if (!h) {
              h = c.className;
              jb(c, "prettyprinted");
              f = !1;
              if (!f) {
                f = a(h, "lang-") || a(h, "language-");
                var k;
                !f && (k = pa(c)) && "CODE" === Xa(k) && (f = a(k.className, "lang-") || a(k.className, "language-"));
              }
              l = Xa(c);
              "PRE" === l || "XMP" === l ? l = 1 : (l = c.currentStyle, k = D.defaultView, l = (l = l ? l.whiteSpace : k && k.getComputedStyle ? k.getComputedStyle(c, null).getPropertyValue("white-space") : 0) && "pre" === l.substr(0, 3));
              k = !1;
              (k = "true" === k || +k) || (k = a(h, "linenums:") || Za(c, "linenums"), k = k.length ? +k : k);
              k && Ra(c, k, l);
              K = {U:f, A:c, aa:k, M:l, B:0, v:0, O:{}, s:[]};
              q.codeBlocks.push({elm:c, lang:f, readyTime:b() - A, decorateTime:0, decorateCount:0, updateDOMTime:0});
              v(ia);
              return;
            }
          }
          v(Ha, u, 0, !0);
        } else {
          X && X(q);
        }
      }
    };
    t.PR = {RegExpProxy:z, prettifyElement:kb, registerCompleteHandler:function(a, c) {
      X = a;
      ja = c;
    }};
  })();
  var tc = D.scripts || Pa("script");
  var wa = tc[tc.length - 1].src.split("/");
  --wa.length;
  "js" === wa[wa.length - 1] && --wa.length;
  (wa = wa.join("/")) && (wa += "/");
  P("[p_assetUrl] " + wa);
  var Kc = Mc || "1" === Ka(oa, "mob");
  Pb = (Kc ? "mb" : "pc") + "/";
  La(function() {
    var p;
    (p = hb("logger")) || alert("#logger not found!");
    p ? (P = function(z) {
      ea(p, "P", u, z);
    }, cb = function(z) {
      ea(p, "P", {style:{color:"red"}}, z);
    }, t.onerror = function(z, v, B) {
      cb(z + ", " + v + ", " + B);
      return !0;
    }) : t.console ? (P = console.log, cb = console.error) : I ? (P = da, cb = opera.postError) : P = cb = da;
    for (; Rb.length;) {
      P(Rb.shift());
    }
    for (; Sb.length;) {
      P(Sb.shift());
    }
    Rb = Sb = u;
  });
  6.1 > vc && (vb ? vb(ec) : fa(t, "scroll", ec));
  pb(Dc);
  6.1 > vc && (vb ? vb(fc) : fa(t, "scroll", fc));
  pb(Ec);
  10 > E && (11 !== Lc || 5 !== E) || (9 > I || 1 > T || !Va && !t.addEventListener ? D.write('<link href="' + wa + "css/" + Pb + ac + '" rel="stylesheet"' + (8 > I ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > I || 1.5 > T || 532 >= ub || 8 > Db) && La(function() {
    ea(nb, "link", {href:wa + "css/" + Pb + ac, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Ob) {
    if (Eb) {
      var uc = function(p) {
        t.RegExpCompat = function(z) {
          for (var v; v = bb.shift();) {
            v(z);
          }
          bb = u;
          qa(p);
          dc(wa + "js/regexpcompat.js");
        };
        uc = u;
        cc(wa + "js/regexpcompat.js");
      };
    } else {
      t.RegExpCompat = function(p) {
        for (var z; z = bb.shift();) {
          z(p);
        }
        bb = u;
        dc(wa + "js/regexpcompat.js");
      }, cc(wa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

