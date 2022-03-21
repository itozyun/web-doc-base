var D, Yb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var L = this[this.length - 1];
  --this.length;
  return L;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var L = arguments, k = 0, T = L.length, f = this.length; k < T; ++k) {
    this[f + k] = L[k];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var L = this[0], k = 1, T = this.length; k < T; ++k) {
    this[k - 1] = this[k];
  }
  --this.length;
  return L;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var L = arguments, k = L.length, T = this.length += k - 1, f = T; f >= k; --f) {
    this[f] = this[f - k];
  }
  for (f = 0; f < k; ++f) {
    this[f] = L[f];
  }
  return T;
});
Array.prototype.splice || (Array.prototype.splice = function(L, k) {
  var T = arguments, f = T.length - 2 - k, Xa = this.slice(L, L + k), ya;
  if (0 < f) {
    var U = this.length - 1;
    for (ya = L + k; U >= ya; --U) {
      this[U + f] = this[U];
    }
  } else {
    if (0 > f) {
      U = L + k;
      for (ya = this.length; U < ya; ++U) {
        this[U + f] = this[U];
      }
      this.length += f;
    }
  }
  U = 2;
  for (ya = T.length; U < ya; ++U) {
    this[U - 2 + L] = T[U];
  }
  return Xa;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(L, k) {
  var T = this.length >>> 0;
  if (0 === T) {
    return -1;
  }
  if (k) {
    var f = k || 0;
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
(function(L, k, T, f, Xa, ya, U, Hb, r) {
  function O(m) {
    if (L[0] === m) {
      return Fa === Fa + "" ? U(Fa) : Fa;
    }
  }
  function oa(m) {
    var z = L[3];
    if (L[2] === m) {
      return z === z + "" ? U(z) : z;
    }
  }
  var aa = f.body, Ga = aa.style, Ha, Ya, Ia, Fa = L[1], x = O(2) || O(3), Ba = O(7), Ib = O(5) || O(6), E = O(8) || O(9), M = O(11) || O(12), jb = M && 0 <= L.conpare(Fa, "1.9.1"), Jb = O(13), Za = O(15);
  ya = O(16) || O(17);
  var Zb = O(10) || O(25), Qa = O(20) || O(22);
  Qa || O(23) || O(21) || O(24);
  var $b = Qa && U(Xa.userAgent.split("Edg/")[1]);
  Xa = U(Xa.appVersion.split("Trident/")[1]) + 4;
  var Kb = oa(35) || oa(36) || oa(37), ac = !x && !Ba && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Lb = (Ba ? "ie5mac" : 5.5 > x ? "ie5win" : 6 > x ? "ie55" : 10 > x ? "ie" + (x | 0) : 7.2 > E ? "opr70" : 8 > E ? "opr72" : 9.5 > E ? "opr" + (E | 0) : M && !jb ? 1.3 <= M ? "gck190" : 1 <= M ? "gck121" : "gck097" : "modern") + ".css", vb = "", sc = oa(1) || oa(2) || oa(3) || 
  oa(4) || oa(8) || oa(9) || oa(10), bc, Mb = Ga.transform !== r ? "transform" : Ga["-o-transform"] !== r ? "-o-transform" : Ga["-ms-transform"] !== r ? "-ms-transform" : Ga.MozTransform !== r ? "-moz-transform" : Ga["-webkit-transform"] !== r ? "-webkit-transform" : "", kb = [], cc = [], dc, ra, lb, wb, xb = [], ec, fc, gc, hc;
  (function() {
    function m() {
      for (var a, h = 0, n = new Date - 0; h < H.length;) {
        n < H[0].t ? ++h : (a = H.splice(h, 1)[0], a.f(a.p));
      }
      b = H.length ? setTimeout(m, ja) : 0;
    }
    function z() {
      for (var a, h = 0; h < F.length; ++h) {
        a = F[h], a.f();
      }
    }
    function t() {
      ea && (ea = clearInterval(ea));
    }
    function u() {
      b && (b = clearTimeout(b));
    }
    D = function(a) {
      xb.push(a);
    };
    wb = function(a) {
      F.length || (ea = setInterval(z, q));
      F.push({f:a, v:++R});
      return R;
    };
    ec = function() {
      ea && (t(), ea = setInterval(z, q));
    };
    fc = t;
    var F = [], q = 500, R = 0, ea;
    if (5 > x || Ba) {
      k._wdb_onlooptimer = z, z = "_wdb_onlooptimer()";
    }
    ra = function(a, h, n) {
      H.length || (b = setTimeout(m, ja));
      H.push({f:a, p:h, v:++ka, t:new Date - 0 + (ja < n ? n : ja)});
      return ka;
    };
    lb = function(a) {
      for (var h = H.length, n; n = H[--h];) {
        if (n.v === a) {
          H.splice(h, 1);
          break;
        }
      }
      return 0;
    };
    gc = function() {
      b && (u(), b = setTimeout(m, ja));
    };
    hc = u;
    var H = [], ja = 16, ka = 0, b;
    if (5 > x || Ba) {
      k._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Ja, $a, Nb, pa, Ka, ic, Ob, W, yb, jc, kc, La, mb, zb, sa, ab, Ca, Pb, lc, Ab, Qb, Ra, la, fa;
  (function() {
    function m(b, a, h) {
      var n = ["<", b], w = 1, y, Z;
      if (a) {
        for (y in a) {
          var K = a[y];
          if (null != K && "" !== K) {
            if ("style" === y) {
              n[++w] = ' style="';
              for (Z in K) {
                for (var ha = ++w, J, N = [], V = Z.split(""), Ma = V.length; Ma;) {
                  J = V[--Ma], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), N[Ma] = J;
                }
                n[ha] = N.join("") + ":" + K[Z] + ";";
              }
              n[++w] = '"';
            } else {
              "className" === y && (y = "class"), n[++w] = " " + y + '="' + K + '"';
            }
          }
        }
      }
      n[++w] = ">";
      null != h && (H && "font" !== b ? n[++w] = "<FONT>" + h + "</FONT>" : n[++w] = h);
      n[++w] = "</" + b + ">";
      return n.join("");
    }
    function z(b) {
      return t(f, b);
    }
    function t(b, a) {
      var h = "*" === a && 6 > x ? "*" !== a ? b.all.tags(a.toUpperCase()) : b.all : b.getElementsByTagName(a), n = [], w = 0, y;
      for (y = h.length; w < y; ++w) {
        n[w] = h[w];
      }
      return n;
    }
    function u(b) {
      return H ? b.parentElement : b.parentNode;
    }
    function F(b, a, h, n, w, y) {
      if (H) {
        var Z = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend", K = Ka(2 > b ? pa(a) : a);
        K = 2 > b ? K.indexOf(a) + b : K.length;
        a.insertAdjacentHTML(Z, m(h, n, w));
        return Ka(a)[K];
      }
      a = ja ? f.createElement(m(h, n)) : y ? f.createElementNS("http://www.w3.org/2000/svg", h) : f.createElement(h);
      if (n && !ja) {
        for (Z in n) {
          if ((h = n[Z]) || 0 === h) {
            switch(Z) {
              case "class":
              case "className":
                Ab(a, h);
                break;
              case "style":
                b = a.style;
                for (K in h) {
                  b[K] = h[K];
                }
                break;
              default:
                ab(a, Z, h);
            }
          }
        }
      }
      ka || null != w && q(a, w);
      return a;
    }
    function q(b, a) {
      if (H) {
        return F(2, b, "font", r, a);
      }
      var h = f.createTextNode("" + a);
      b.appendChild(h);
      return h;
    }
    function R(b, a) {
      9 > x ? b.className = a : b.setAttribute("class", a);
    }
    function ea(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    var H = 5 > x;
    Ha = z("html")[0];
    Ya = z("head")[0];
    Ja = function(b) {
      return k[b] || f[b] || f.getElementById(b);
    };
    $a = z;
    Nb = t;
    pa = u;
    Ka = function(b) {
      b = H ? b.children : b.childNodes;
      for (var a = [], h = b.length; h;) {
        a[--h] = b[h];
      }
      return a;
    };
    ic = function(b) {
      var a = !(7.03 < E && 7.2 > E) && b.children;
      b = a ? a : b.childNodes;
      for (var h = [], n = b.length, w = -1, y; n;) {
        if (y = b[--n], a || 1 === y.nodeType) {
          H && "FONT" === y.tagName || (h[++w] = y);
        }
      }
      return h;
    };
    Ob = function(b) {
      return H ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    W = function(b, a, h, n, w) {
      a = F(2, b, a, h, n, w);
      H || (b.appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    yb = function(b, a, h, n, w) {
      a = F(0, b, a, h, n, w);
      H || (u(b).insertBefore(a, b), ka && null != n && q(a, n));
      return a;
    };
    jc = function(b, a, h, n, w) {
      a = F(1, b, a, h, n, w);
      var y;
      H || ((y = b.nextSibling) ? pa(y).insertBefore(a, y) : pa(b).appendChild(a), ka && null != n && q(a, n));
      return a;
    };
    kc = q;
    La = function(b) {
      pa(b) ? H ? b.outerHTML = "" : pa(b).removeChild(b) : D("[DOM] p_DOM_remove(), No parentNode!");
    };
    mb = function(b, a) {
      if (b.contains) {
        return b.contains(a);
      }
      for (; a && a !== Ha;) {
        if (a = pa(a), b === a) {
          return !0;
        }
      }
    };
    var ja = 9 > x, ka = 9 > x;
    zb = function(b) {
      return b.tagName.toUpperCase();
    };
    sa = function(b, a) {
      return b.getAttribute(a) || "";
    };
    ab = function(b, a, h) {
      b.setAttribute(a, h);
    };
    Ca = function(b, a) {
      b.removeAttribute(a);
    };
    Pb = function(b, a) {
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    };
    lc = function(b) {
      return b.className;
    };
    Ab = R;
    Qb = ea;
    Ra = function(b, a) {
      var h;
      if (!ea(b, a)) {
        if (h = b.className) {
          a = " " + a;
        }
        R(b, h + a);
      }
    };
    la = function(b, a, h) {
      b.style[a] = h;
    };
    fa = function(b, a) {
      var h = -1, n, w;
      if (5.5 > x) {
        if (a) {
          for (n = a.split(";"); w = n[++h];) {
            var y = w.split(":");
            b.style[y[0]] = w.substr(y[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > E || 1 > M ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
    kb.splice(0, 0, function() {
      function b(K) {
        K = Ka(K);
        for (var ha = K.length, J, N, V; ha;) {
          if (J = K[--ha], N = J.nodeType, 8 === N) {
            a && y.push(J);
          } else {
            if (1 === N) {
              switch(N = zb(J), "/" === N.charAt(0) && (N = N.substr(1), Z[N] = !0), N) {
                case "STYLE":
                  if (8 <= E && 9 > E) {
                    break;
                  }
                case "LINK":
                  H || h || mb(Ya, J) || w.push(J);
                  break;
                case "META":
                  N = sa(J, "name") || sa(J, "property");
                  for (V = n.length; V;) {
                    if (0 === N.indexOf(n[--V])) {
                      y.push(J);
                      break;
                    }
                  }
                  break;
                case "SCRIPT":
                  if (Pb(J, "async")) {
                    break;
                  }
                case "NOSCRIPT":
                  if (Pb(J, "skip-cleanup")) {
                    break;
                  }
                case "!":
                  y.push(J);
                  break;
                case "SOURCE":
                  k.HTMLSourceElement || y.push(J);
                  break;
                default:
                  Z[N] ? y.push(J) : Ka(J).length && b(J);
              }
            }
          }
        }
        for (; w[0];) {
          Ya.appendChild(w.pop());
        }
        for (; y[0];) {
          La(y.pop());
        }
      }
      Ia = Ja("jsMain");
      var a = !(8 > E || 5 > x || Ba || .9 > M), h = 7 > x, n = ["og:", "twitter:", "fb:"], w = [], y = [], Z = {};
      b(Ha);
    });
  })();
  var X, ba, za, Sa, Rb, Bb, bb, Sb, mc, cb, ma, Tb;
  (function() {
    function m() {
      return ma = Na ? db ? 2 : Da ? 3 : 1 : 0;
    }
    function z(e, l) {
      bb(function() {
        var A = ka(e);
        l(A);
        A.addListener(l);
        return !0;
      });
    }
    function t(e, l, A) {
      for (var p = 0; p < e.length; ++p) {
        !0 === e[p](l) && (e.splice(p, 1), --p);
      }
      A && (e.length = 0);
    }
    function u(e, l) {
      h && !a.length && ra(F);
      a.push(e, l);
    }
    function F() {
      var e = a, l;
      for (a = []; l = e.shift();) {
        t(l, e.shift());
      }
    }
    function q(e) {
      var l = e || event;
      e = n[l.type];
      var A = -1, p, C;
      for (x ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : y && (l.u = l.stopPropagation, l.stopPropagation = function() {
        C = !0;
      }); p = e[++A];) {
        p.i === this ? (this.g = p.h, this.g(l), this.g = T, this.g = r) : 7.2 > E && this === f && p.i === k && (k.g = p.h, k.g(l), delete k.g);
      }
      if (x) {
        return l.preventDefault = l.stopPropagation = r, l.returnValue;
      }
      y && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (K = !0), C && !K && l.u(), l.u = l.stopPropagation = r);
    }
    function R() {
      var e = 9 === b.offsetWidth;
      cb !== e && (u(cc, cb = e), D("p_cssAvailability:" + cb));
    }
    function ea() {
      !ha && Y && (lb(Y), Y = ra(H));
    }
    function H() {
      Y = 0;
      t(nb);
    }
    function ja(e) {
      ha || t(eb, e);
    }
    var ka = k.matchMedia, b, a = [], h;
    kb.push(function() {
      z = r;
      b = W(aa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        h = !0;
        a.length && ra(F);
      });
    });
    X = function(e, l, A, p) {
      if (Z) {
        e.addEventListener(l, A, p ? ac ? p : p.capture : !1);
      } else {
        var C = {i:e, h:A};
        p = n[l];
        var ca = "on" + l, qa, Ta;
        if (p) {
          for (qa = p.length; Ta = p[--qa];) {
            if (Ta.i === e && Ta.h === A) {
              return;
            }
          }
          n[l].push(C);
        } else {
          n[l] = p = [C], w || (l = e[ca], "function" === typeof l && l !== q && p.unshift({i:e, h:l}));
        }
        w ? e.attachEvent(ca, q) : e[ca] = q;
      }
    };
    ba = function(e, l, A, p) {
      if (Z) {
        e.removeEventListener(l, A, p ? ac ? p : p.capture : !1);
      } else {
        p = n[l];
        l = "on" + l;
        var C, ca, qa;
        if (p) {
          for (C = p.length; ca = p[--C];) {
            ca.i === e && (ca.h === A ? p.splice(C, 1) : qa = !0);
          }
          qa || (w ? e.detachEvent(l, q) : (e[l] = T, e[l] = null));
        }
      }
    };
    var n = {}, w = !1, y = 525.13 > Za, Z = !y && !Ba && k.addEventListener, K;
    y && Ha.addEventListener("click", function(e) {
      if (K) {
        return K = !1, e.preventDefault(), !1;
      }
    });
    za = function(e) {
      kb.push(e);
    };
    Sa = function(e) {
      J && J.push(e);
    };
    var ha = function(e) {
      ba(k, "load", ha);
      ha = r;
      t(kb, e, !0);
      kb = r;
    }, J = [];
    if (419.3 >= Za) {
      var N = function() {
        if (N) {
          var e = f.readyState;
          "loaded" === e || "complete" === e ? (N = r, ha()) : ra(N);
        }
      };
      ra(N);
    } else {
      X(k, "load", ha);
    }
    x || 1.8 > M ? X(k, "unload", function(e) {
      t(J, e, !0);
    }) : J = r;
    bb = function(e) {
      cc.push(e);
    };
    za(function() {
      R();
      wb(R);
    });
    mc = function(e) {
      V && V.push(e);
    };
    var V = [], Ma = 60 > M || Jb, Na, Da, db;
    if (89 <= M || 89 <= Qa || Kb && 79 <= $b || ka && (ka("(forced-colors:none)").matches || ka("(forced-colors:active)").matches)) {
      Tb = !0, z("(forced-colors:active)", function(e) {
        Na = e.matches;
        u(V, m());
        D("(forced-colors:active):" + ma);
      });
    } else {
      if (10 <= x || Ib || Kb && $b) {
        Tb = !0, z("(-ms-high-contrast:black-on-white)", function(e) {
          Na = Da = e.matches;
          ma !== m() && (u(V, ma), D("(-ms-high-contrast:black-on-white):" + ma));
        }), z("(-ms-high-contrast:white-on-black)", function(e) {
          Na = db = e.matches;
          ma !== m() && (u(V, ma), D("(-ms-high-contrast:white-on-black):" + ma));
        }), z("(-ms-high-contrast:active)", function(e) {
          Na = e.matches;
          ma !== m() && (u(V, ma), D("(-ms-high-contrast:active):" + ma));
        });
      } else {
        if (x || Kb && (M && 0 <= L.conpare(Fa, "1.8.1") || Jb)) {
          var Ua = function() {
            function e(C, ca) {
              D("isBlack:" + C);
              return "#000000" === C || "rgb(0,0,0)" === C || ca && "transparent" === C;
            }
            function l(C, ca) {
              D("isWhite:" + C);
              return "#ffffff" === C || "rgb(255,255,255)" === C || ca && "transparent" === C;
            }
            var A = f.defaultView, p = A ? A.getComputedStyle(b, null) : b.currentStyle;
            A = (p && p.color || "").split(" ").join("");
            p = (p && p.backgroundColor || "").split(" ").join("");
            A && (Na = "#123456" !== A && "rgb(18,52,86)" !== A, Da = e(A) && l(p, !0), db = l(A) && e(p, !0), ma !== m() && (D("(forced-colors-fallback):" + ma), u(V, ma)));
          };
          bb(function(e) {
            if (e) {
              return la(b, "color", "#123456"), la(b, "backgroundColor", "#123456"), Ma ? (Ua(), V = r) : Ua() && wb(Ua), Ua = r, !0;
            }
          });
        } else {
          V = m = r;
        }
      }
    }
    Sb = function(e) {
      na.push(e);
    };
    var na = [], ta = 7.5 <= E && 8 > E;
    ta && function() {
      for (var e = f.images, l = e.length, A; l;) {
        A = e[--l], A.s = A.src, Ca(A, "src");
      }
    }();
    za(function() {
      function e() {
        p ? (C = A[--p], ta && ab(C, "src", C.s), dc(l, ta ? C.s : C.src)) : (na.length = 0, na = r);
      }
      function l(ca) {
        t(na, {m:C, o:ca});
        e();
      }
      var A = f.images || $a("img"), p = A.length;
      if (12 > E || 532 > Za) {
        e();
      } else {
        for (; p;) {
          var C = A[--p];
          u(na, {m:C, o:9 > x ? C.complete : 0 <= C.naturalWidth ? C.naturalWidth : C.width});
        }
        na.length = 0;
        na = r;
      }
    });
    Rb = function(e) {
      nb.push(e);
    };
    var nb = [], Y;
    X(k, "resize", ea);
    Sa(function() {
      Y && clearTimeout(Y);
      ba(k, "resize", ea);
    });
    Bb = function(e) {
      eb.push(e);
    };
    var eb = [], ob = 0, Ea = 1 > M || 1.2 <= M && 1.8 > M || 7.2 >= E;
    Ea ? wb(function() {
      var e = k.scrollY || aa.scrollTop;
      ob !== e && (ob = e, ja());
    }) : X(k, "scroll", ja);
    Sa(function() {
      Ea || ba(k, "scroll", ja);
    });
  })();
  var nc = 0;
  (function() {
    function m(q) {
      return q.styleSheet || q.sheet;
    }
    var z = 1 > M || 8 <= E && 9 > E, t = 7.2 <= E && 8 > E, u = !!x || !z && !t && function() {
      var q = W(Ha, "style"), R = !!m(q);
      R && (D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText)));
      La(q);
      return R;
    }();
    D("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + u);
    var F = !u && Za && !z && !t && function() {
      var q = W(Ha, "style"), R;
      kc(q, "");
      if (R = !!m(q)) {
        D("[CSSOM] CSSStyleSheet @insertRule : " + !!m(q).insertRule), D("[CSSOM] CSSStyleSheet @addRule : " + !!m(q).addRule), D("[CSSOM] CSSStyleSheet @cssRules : " + !!m(q).cssRules), D("[CSSOM] CSSStyleSheet @rules : " + !!m(q).rules), D("[CSSOM] CSSStyleSheet @cssText : " + ("" === m(q).cssText));
      }
      La(q);
      return R;
    }();
    u || D("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + F);
    nc = z || t ? 1 : u || F ? 2 : 0;
    D("[CSSOM] p_CSSOM_canuse : " + nc);
  })();
  (function() {
    9 > x && za(function() {
      var m = W(aa, "div");
      fa(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      bc = 1 < m.offsetHeight;
      fa(m, "");
      La(m);
    });
    dc = function(m, z) {
      function t() {
        F || !q || u.complete ? (D("[imageTest] timer -> img.complete. img.width=" + u.width), ra(m, !!u.width), u.onerror = u.onload = T, u = m = r) : (--q, ra(t));
      }
      var u = new Image, F, q = 99;
      D("[imageTest] start.");
      u.onerror = function() {
        D("[imageTest] error!");
        F = !0;
      };
      u.onload = function() {
        D("[imageTest] onload.");
        F = !0;
      };
      u.src = z;
      ra(t);
    };
  })();
  (function() {
    if (!Tb) {
      var m, z = function() {
        m = W(Ya, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + vb + "hc/" + Lb});
        if (Mb || 5.5 <= x && 9 > x && bc) {
          Ra(aa, "jsCanRotate"), D("jsCanRotate!");
        }
        z = r;
      };
      mc(function(t) {
        t && !m ? z() : m && (t ? Ya.appendChild(m) : La(m));
      });
    }
    Sb(function(t) {
      var u = t.m;
      t = t.o;
      var F = pa(u);
      !Qb(F, "aBodyRoot") && t ? Ra(F, "img-loaded") : t || sa(u, "alt") || la(u, "display", "none");
    });
    E && za(function() {
      if (8 <= E) {
        for (var t = $a("a"), u = t.length, F = 0, q; F < u; ++F) {
          q = t[F], "-1" === sa(q, "tabindex") ? Ca(q, "tabindex") : sa(q, "href") && ab(q, "tabindex", "0");
        }
      }
      t = $a("input");
      F = 0;
      for (u = t.length; F < u; ++F) {
        q = t[F], "hidden" === sa(q, "type") && Ca(q, "tabindex");
      }
    });
  })();
  (function() {
    function m(c) {
      var d = c.keyCode || c.M, g = N.length, v, G, B, wa;
      if ("keydown" !== c.type || 13 === d) {
        for (; g;) {
          if (d = N[--g], d.l === this || d.j === this) {
            g = d.l;
            var I = v = d.j;
            if (d.C) {
              if (la(g, "width", d.L), g.src = d.K, Ab(I, d.F), g = d.A) {
                fa(g, d.D), Ab(g, "caption jsCap");
              }
            } else {
              if (G = d.B) {
                for (delete d.B; v = pa(v);) {
                  if (Qb(v, "caption")) {
                    d.A = v, d.D = v.style.cssText, Ra(v, "jsCap");
                  } else {
                    var P = zb(v);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P) {
                      break;
                    }
                  }
                }
                v = v.offsetWidth - 4 - 1;
                1600 < v && (v = 1600);
                if (d.H) {
                  G = G.split("=");
                  P = G.length;
                  if (B = G[P - 1]) {
                    (wa = U(B.substr(1))) && B === "s" + wa ? G[P - 1] = "w" + v : G[P] = "w" + v;
                  }
                  G = G.join("=");
                } else {
                  if (0 < G.indexOf(".bp.blogspot.com/")) {
                    G = G.split("/");
                    P = G.length;
                    if (B = G[P - 2]) {
                      (wa = U(B.substr(1))) && B === "s" + wa ? G[P - 2] = "w" + v : G.splice(P - 1, 0, "w" + v);
                    }
                    G = G.join("/");
                  }
                }
                d.I = G;
              }
              d.F = lc(I);
              Ra(I, "jsPicaLarge");
              la(g, "width", "");
              g.src = d.I;
              if (g = d.A) {
                fa(g, ""), Ra(g, "jsCapLarge");
              }
            }
            d.C = !d.C;
            break;
          }
        }
        z(c);
      }
    }
    function z(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function t(c) {
      for (var d = arguments, g = 0, v = d.length; g < v; ++g) {
        if (isFinite(d[g])) {
          return d[g];
        }
      }
      return 0;
    }
    function u(c) {
      var d = l;
      if (cb) {
        if (A && !d) {
          if (new Date - 0 < A) {
            return;
          }
          A = r;
        }
        7 === c ? (a("t"), p = 0) : (a("s"), p && (p = lb(p)), Ea = t(k.pageYOffset, k.scrollY, na.scrollTop, aa.scrollTop));
        d ? (l = q(r, d[0], d[1])) || (A = new Date - 0 + 99) : q();
        n();
      } else {
        l = r;
      }
    }
    function F() {
      a("w.blur");
    }
    function q(c, d, g) {
      function v(Aa) {
        I = Aa;
        if (eb) {
          P = eb + ":translate" + (e ? "3D(0," : "(0,") + Aa + (e ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else {
          if (0 !== Aa) {
            if (!Ua && (db || Da)) {
              var Cb = ta.offsetWidth;
            }
            P = Da ? "position:fixed;width:" + Cb + "px;top:" + (Aa - G + Q) + "px" : Ua ? "top:" + Aa + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Aa + "px";
            db && P && (P += ";" + (0 > Aa ? "clip:rect(" + -Aa + "px " + Cb + "px " + da + "px 0)" : Aa + da < pb ? "clip:rect(0 " + Cb + "px " + da + "px 0)" : "clip:rect(0 " + Cb + "px " + (pb - Aa) + "px 0)"), 8 > x || (P = P.split(" ").join(",")));
          }
        }
      }
      var G = Ea, B = nb, wa = ta.offsetTop === B.offsetTop, I = 0, P = "", xa = !0;
      if (wa) {
        for (var S = 0, Q = 0, ia = B; ia && ia !== aa;) {
          Q += ia.offsetTop, ia = ia.offsetParent;
        }
        I = ob;
        ia = t(k.innerHeight, na.offsetHeight);
        var Ub = B.offsetHeight, da = Y.offsetHeight, pb = da < Ub ? Ub : da, Oa = G, fb = Oa + ia, Db = Q, Eb = Db + pb, oc = Q + I, tc = oc + da;
        B = Oa < Db ? Db : Oa;
        var Pa = Eb < fb ? Eb : fb, gb = Pa - B;
        Oa = Eb <= Oa;
        fb = fb <= Db;
        if (d !== r) {
          xa = Q + d;
          c = xa + g;
          if (Oa || fb) {
            return ia <= g ? (d = Q, a("4.1.1")) : Oa ? (d = Eb - g, a("4.1.2")) : (d = Q + g - ia, a("4.1.3")), A = r, k.scroll(t(k.pageXOffset, k.scrollX, na.scrollLeft, aa.scrollLeft), d), a("4.1.*"), l;
          }
          da <= gb ? (S = 4, a("4.2")) : g <= gb ? da - d <= gb ? (S = 2, a("4.3.1")) : B <= xa && c <= Pa ? B < Q + I && (S = 4, a("4.3.2")) : B <= xa && xa <= Pa ? (S = 5, a("4.3.3")) : B <= c && c <= Pa ? (S = 4, a("4.3.4")) : c < B ? (S = 4, a("4.3.5")) : (S = 5, a("4.3.6")) : (S = 4, a("4.4"));
          xa = r;
        } else {
          c !== r ? da <= gb ? (S = 7, xa = !1, a("3.1")) : (I -= 60 * c, S = Pa - Q - da, c = B - Q, I < S ? (I = S, a("3.2.1")) : c < I ? (I = c, a("3.2.2")) : a("3.2.3"), S = 6) : Ub <= da || (Oa ? (S = 1, a("2.2.1")) : fb ? a("2.2.2") : da <= gb ? (S = 3, a("2.3")) : B < oc ? (S = 3, a("2.4.1")) : tc < Pa ? (S = 2, a("2.4.2")) : G < Q + da - gb ? a("2.4.3") : (S = 2, a("2.4.4")));
        }
        switch(S) {
          case 0:
            v(0);
            break;
          case 1:
            v(pb - da);
            break;
          case 2:
            v(Pa - Q - da);
            break;
          case 3:
            v(B - Q);
            break;
          case 4:
            v(B - Q - d);
            break;
          case 5:
            v(Pa - Q - (d + g));
          case 6:
            v(I);
        }
        w(I, da, Q, pb, ia, d || "-", g || "-");
      } else {
        w(I, "-", "-", "-", "-", "-", "-");
      }
      fa(Y, P);
      ob = I;
      return wa && xa;
    }
    function R(c) {
      if (cb) {
        a("m");
        M && (Ea = t(k.pageYOffset, na.scrollTop, aa.scrollTop), n());
        var d = this !== c.target, g = d && t(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        d && g && q(9 >= g ? -9 >= g ? -3 : g : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ea(c) {
      for (var d = c.target, g = -1, v; v = V[++g];) {
        mb(v, d) && R(c);
      }
    }
    function H(c) {
      if (cb) {
        var d = !!eb || M, g = c.target || c.srcElement, v = 0;
        if (mb(Y, g)) {
          a(c.type || "ie5focus");
          X(g, "blur", b);
          for (c = g.offsetHeight; g && (d ? mb(Y, g) : Y !== g);) {
            v += g.offsetTop, g = g.offsetParent;
          }
          Na ? (l = [v, c], p && lb(p), p = ra(u, 7)) : (Ea = t(k.pageYOffset, k.scrollY, na.scrollTop, aa.scrollTop), q(r, v, c));
          y(v, c);
        }
      }
    }
    function ja() {
      qb = k.onerror;
      k.onerror = ka;
      var c = f.activeElement;
      Ta !== c && (Ta = c, H({target:c}));
      k.onerror = qb;
      qb = r;
    }
    function ka() {
      D("error!");
      k.onerror = qb;
      qb = Ta = r;
      return !0;
    }
    function b() {
      ba(this, "blur", b);
      y(0, 0);
    }
    function a(c) {
      rb && (Fb && (Fb = lb(Fb)), Fb = ra(h, 0, 1400), rb.innerHTML += " " + c);
    }
    function h() {
      rb.innerHTML = "";
    }
    function n() {
      sb && (la(sb, "top", (Ea / 10 | 0) + "px"), pc.innerHTML = " scrl:" + (Ea | 0));
    }
    function w(c, d, g, v, G, B, wa) {
      hb && (la(hb, "top", ((c + g) / 10 | 0) + "px"), la(hb, "height", (d / 10 | 0) + "px"), la(sb, "height", (G / 10 | 0) + "px"), la(Vb, "height", (aa.scrollHeight / 10 | 0) + "px"), qc.innerHTML = "conY:" + g + "/sidY" + c + ", conH:" + v + "/sidH" + d + ", focY:" + B + " focH:" + wa);
    }
    function y(c, d) {
      tb && (la(tb, "top", (c / 10 | 0) + "px"), la(tb, "height", (d / 10 | 0) + "px"));
    }
    function Z() {
      Wb.call(Gb);
    }
    function K() {
      f.fullscreenElement || f.fullscreen || f.webkitIsFullscreen || f.msFullscreenElement || k.fullScreen ? (ab(Gb, "id", "blog2slide-root"), ib[1].parentNode.insertBefore(ub, ib[1]), ha(), f.onkeydown = J) : Va && (La(ub), Ca(Gb, "id"), Ca(Va, "id"), Va = f.onkeydown = r);
    }
    function ha() {
      Va && Ca(Va, "id");
      Wa = 0 < Wa ? Xb < Wa ? Xb : Wa : 0;
      Va = ib[Wa];
      ab(Va, "id", "blog2slide-current");
    }
    function J(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Wa, ha();
      } else {
        if ("ArrowLeft" === c.key || 37 === c.keyCode) {
          --Wa, ha();
        }
      }
    }
    var N = [];
    Zb || (Sb(function(c) {
      if (c.o && Ia) {
        c = c.m;
        var d = pa(c), g = "", v;
        if ("A" === zb(d) && 1 === ic(d).length) {
          var G = sa(d, "href"), B = G.split("?")[0].split("#")[0].split(".");
          B = (B[B.length - 1] || "").toLowerCase();
          if ((v = 0 < G.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + B + ".")) {
            X(d, "keydown", m), X(c, "click", m), X(d, "click", z), 9 > E || (g = c.offsetWidth - 4 + "px", la(c, "width", g)), Ra(d, "jsPica"), N.push({j:d, K:c.src, L:g, B:G, l:c, H:v});
          }
        }
      }
    }), Sa(function(c, d) {
      for (c = -1; d = N[++c];) {
        ba(d.j, "keydown", m), ba(d.l, "click", m), ba(d.j, "click", z);
      }
    }));
    var V = ["jsSidebarFixer1", "jsSidebarFixer2"], Ma = M || Jb || Ib, Na = !(6 <= x && 9 > x || E || 1 <= M && 1.3 > M), Da = !(5 > O(16) || 5 > O(17) || 2.2 > O(21) || 6 > O(12) || oa(30) && 534 > Za || oa(32) || 7 > x || 9 > E || 1 > M), db = Da || 7 > x || 1 > M, Ua = 7.5 > E, na, ta, nb, Y, eb = Mb, ob = 0, Ea = 0, e, l, A, p, C = M && 0 <= L.conpare(Fa, "0.9.7"), ca = M && 0 >= L.conpare(Fa, "0.9.4");
    rc || Zb || (bb(function(c) {
      if (c) {
        if (!Ia) {
          return !0;
        }
        c = -1;
        var d;
        na = "CSS1Compat" !== f.compatMode ? aa : Ha || aa;
        ta = Ja("jsSide");
        nb = Ia;
        if (!ta) {
          return !0;
        }
        Bb(u);
        Rb(u);
        Y = yb(Ob(ta), "div", {id:"jsSidebarFixer"});
        X(k, "blur", F);
        for (8 > E || ca || 6 > x || (x || Ba ? X(Y, "focusin", H) : Ma ? X(f, "focus", H, {capture:!0, passive:!1}) : X(Y, "DOMFocusIn", H, !1)); 1 < Ka(ta).length;) {
          Y.appendChild(Ka(ta)[1]);
        }
        for (C && !jb && X(f, "DOMMouseScroll", ea, !1); d = V[++c];) {
          var g = Ja(d);
          g.onwheel !== r ? X(g, "wheel", R, {passive:!1}) : jb ? X(g, "MozMousePixelScroll", R, !1) : C ? V[c] = Ja(d) : (g.onmousewheel !== r || 9 <= E) && X(g, "mousewheel", R, !1);
        }
        x || Ib || 2 > Qa || (e = Ga.perspective !== r || Ga.MozPerspective !== r || Ga["-webkit-perspective"] !== r);
        u();
        return !0;
      }
    }), Sa(function() {
      var c = -1, d;
      if (C && !jb) {
        ba(f, "DOMMouseScroll", ea, !1);
      } else {
        for (; d = V[++c];) {
          d = Ja(d), d.onwheel !== r ? ba(d, "wheel", R, {passive:!1}) : jb ? ba(d, "MozMousePixelScroll", R, !1) : (d.onmousewheel !== r || 9 <= E) && ba(d, "mousewheel", R, !1);
        }
      }
      ba(k, "blur", F);
      8 > E || ca || 6 > x || (x || Ba ? ba(Y, "focusin", H, !1) : Ma ? ba(f, "focus", H, {capture:!0, passive:!1}) : ba(Y, "DOMFocusIn", H, !1));
      qa && clearInterval(qa);
    }));
    var qa, Ta, qb;
    6 > x && bb(function(c) {
      if (!Ia) {
        return !0;
      }
      c ? qa = setInterval(ja, 333) : qa && (clearInterval(qa), qa = 0);
    });
    var qc, pc, rb, Vb, sb, hb, tb, Fb;
    bb(function(c) {
      if (c) {
        if (!Ia) {
          return !0;
        }
        var d = Ka(aa);
        c = yb(d[0], "div");
        if (Da) {
          fa(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; d.length;) {
            c.appendChild(d.shift());
          }
          fa(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = jc(c, "div");
          fa(Ha, "overflow:hidden");
          fa(aa, "overflow:hidden");
          fa(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        W(c, "div", r, Mb ? "transform" + (e ? "3D" : "") : Da ? "pos:fixed" : "pos:absolute");
        d = W(c, "div");
        qc = W(d, "span");
        pc = W(d, "span");
        rb = W(c, "div");
        Vb = W(c, "div");
        fa(Vb, "position:absolute;left:0;top:0;width:54px;background:#242");
        hb = W(c, "div");
        fa(hb, "position:absolute;left:0;width:54px;background:#363");
        sb = W(c, "div");
        fa(sb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        tb = W(hb, "div");
        fa(tb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    za(function() {
      function c(wa, I, P, xa) {
        var S = xa ? "div" : "cite";
        if (0 === I.indexOf("urn:isbn:")) {
          I = I.substr(9).toUpperCase().split("-").join("");
          if (13 === I.length) {
            I = I.toString().slice(3, -1);
            for (var Q = 0, ia = 0; 9 > ia; ia++) {
              Q += (I.charAt(ia) - 0) * (10 - ia);
            }
            Q = (11 - Q % 11) % 11;
            Q = 10 === Q ? "X" : Q.toString();
            I += Q;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        P = xa ? yb(Ob(g), S, {className:P}) : W(g, S, {className:P});
        W(P, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", G:!0, href:I, J:E ? "0" : r} : {G:!0, href:I, J:E ? "0" : r}, wa);
      }
      if (Ia) {
        for (var d = Nb(Ia, "blockquote"), g, v = -1, G, B; g = d[++v];) {
          G = sa(g, "title"), B = sa(g, "cite"), G && B ? (Ca(g, "title"), c(G, B, "js-bqLink", !0)) : B && (Ca(g, "cite"), c(k.decodeURI ? decodeURI(B) : B, B, "js-bqCite"));
        }
      }
    });
    var Wb, Gb, ub, Va, ib, Wa, Xb;
    za(function() {
      var c = Ja("blog2slide-start");
      if (c) {
        var d = f.onfullscreenchange !== r ? "f" : f.onmozfullscreenchange !== r ? "mozF" : f.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        Wb = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== d || Wb ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', X(c.firstChild, "click", Z), c = pa(c), Gb = pa(c), ib = Nb(c, "section"), ub = f.createElement("h1"), ub.innerHTML = $a("h1")[0].innerHTML, Xb = ib.length, ib.splice(0, 0, ub), 0 !== d ? X(f, d + "ullscreenchange", K) : x ? X(f, "MSFullscreenChange", K, !1) : Rb(K)) : La(c);
      }
    });
  })();
  Hb = f.scripts || $a("script");
  var va = Hb[Hb.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  D("[p_assetUrl] " + va);
  var rc = sc || "1" === sa(aa, "mob");
  vb = (rc ? "mb" : "pc") + "/";
  za(function() {
    var m;
    (m = Ja("logger")) || alert("#logger not found!");
    for (m ? (D = function(z) {
      W(m, "P", r, z);
    }, Yb = function(z) {
      W(m, "P", {style:{color:"red"}}, z);
    }, k.onerror = function(z, t, u) {
      Yb(z + ", " + t + ", " + u);
      return !0;
    }) : k.console ? D = console.log : D = T; xb.length;) {
      D(xb.shift());
    }
    xb = null;
  });
  6.1 > ya && Bb(ec);
  Sa(fc);
  6.1 > ya && Bb(gc);
  Sa(hc);
  10 > x && (11 !== Xa || 5 !== x) || (9 > E || 1 > M || !Ba && !k.addEventListener ? f.write('<link href="' + va + "css/" + vb + Lb + '" rel="stylesheet"' + (8 > E ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > E || 1.5 > M || 532 >= Za || 2 > Qa || 4 <= Qa && 8 > Qa) && za(function() {
    W(Ya, "link", {href:va + "css/" + vb + Lb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(ua, this, function() {
}, document, navigator, screen, parseFloat, Number, void 0);

