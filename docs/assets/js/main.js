Array.prototype.pop || (Array.prototype.pop = function() {
  var U = this[this.length - 1];
  --this.length;
  return U;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var U = arguments, r = 0, ea = U.length, K = this.length; r < ea; ++r) {
    this[K + r] = U[r];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var U = this[0], r = 1, ea = this.length; r < ea; ++r) {
    this[r - 1] = this[r];
  }
  --this.length;
  return U;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var U = arguments, r = U.length, ea = this.length += r - 1, K = ea; K >= r; --K) {
    this[K] = this[K - r];
  }
  for (K = 0; K < r; ++K) {
    this[K] = U[K];
  }
  return ea;
});
Array.prototype.splice || (Array.prototype.splice = function(U, r) {
  var ea = arguments, K = ea.length - 2 - r, Ya = this.slice(U, U + r), A;
  if (0 < K) {
    var ia = this.length - 1;
    for (A = U + r; ia >= A; --ia) {
      this[ia + K] = this[ia];
    }
  } else if (0 > K) {
    ia = U + r;
    for (A = this.length; ia < A; ++ia) {
      this[ia + K] = this[ia];
    }
    this.length += K;
  }
  ia = 2;
  for (A = ea.length; ia < A; ++ia) {
    this[ia - 2 + U] = ea[ia];
  }
  return Ya;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(U, r) {
  var ea = this.length >>> 0;
  if (0 === ea) {
    return -1;
  }
  if (r) {
    var K = r || 0;
    K = -Infinity === K ? 0 : (0 > K ? -K : K) | 0;
    if (ea <= K) {
      return -1;
    }
  }
  for (K = 0 <= K ? K : 0 < ea + K ? ea + K : 0; K < ea; ++K) {
    if (this[K] === U) {
      return K;
    }
  }
  return -1;
});
(function(U, r, ea, K, Ya, A, ia, Ib, Oa, cc, t) {
  function X(x) {
    if (U[0] === x) {
      return Pa === Pa + "" ? Oa(Pa) : Pa;
    }
  }
  function Aa(x) {
    var G = U[3];
    if (U[2] === x) {
      return G === G + "" ? Oa(G) : G;
    }
  }
  var ta = A.body, Za = ta.style, cb, db, eb, Pa = U[1], B = X(2) || X(3), Qa = X(7), Jb = X(5) || X(6), J = X(8) || X(9), O = X(11) || X(12), sb = O && 0 <= U.conpare(Pa, "1.9.1"), Kb = X(13), kb = X(15);
  Ib = X(16) || X(17);
  var dc = X(10) || X(25), tb = X(20) || X(22);
  tb || X(23) || X(21) || X(24);
  var ec = tb && Oa(ia.userAgent.split("Edg/")[1]);
  ia = Oa(ia.appVersion.split("Trident/")[1]) + 4;
  var Lb = Aa(35) || Aa(36) || Aa(37), fc = !B && !Qa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Mb = (Qa ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > J ? "opr70" : 8 > J ? "opr72" : 9.5 > J ? "opr" + (J | 0) : O && !sb ? 1.4 <= O ? "gck19" : 1.3 <= O ? "gck13" : 1 <= O ? "gck12" : 0.9 <= O ? "gck09" : 0.8 <= O ? "gck08" : "gck07" : "modern") + 
  ".css", zb = "";
  cc = Aa(1) || Aa(2) || Aa(3) || Aa(4) || Aa(8) || Aa(9) || Aa(10);
  var gc, hc = Za.transform !== t ? "transform" : Za["-o-transform"] !== t ? "-o-transform" : Za["-ms-transform"] !== t ? "-ms-transform" : Za.MozTransform !== t ? "-moz-transform" : Za["-webkit-transform"] !== t ? "-webkit-transform" : "", fb = [], ic = [], Ea = [], jc, kc, ub, Nb, Ob, qa, Ab, Bb, Pb, lc, Qb, mc;
  (function() {
    function x() {
      for (var d, p = 0, v = new Ya() - 0; p < T.length;) {
        v < T[0].t ? ++p : (d = T.splice(p, 1)[0], d.f(d.p));
      }
      b = T.length ? setTimeout(x, va) : 0;
    }
    function G() {
      for (var d, p = 0; p < E.length; ++p) {
        d = E[p], d.f();
      }
    }
    function q() {
      ca && (ca = clearInterval(ca));
    }
    function C() {
      b && (b = clearTimeout(b));
    }
    Bb = function(d) {
      E.length || (ca = setInterval(G, H));
      E.push({f:d, J:++ma});
      return ma;
    };
    Pb = function() {
      ca && (q(), ca = setInterval(G, H));
    };
    lc = q;
    var E = [], H = 500, ma = 0, ca;
    if (5 > B || Qa) {
      r._wdb_onlooptimer = G, G = "_wdb_onlooptimer()";
    }
    qa = function(d, p, v) {
      T.length || (b = setTimeout(x, va));
      T.push({f:d, p:p, J:++na, t:new Ya() - 0 + (va < v ? v : va)});
      return na;
    };
    Ab = function(d) {
      for (var p = T.length, v; v = T[--p];) {
        if (v.J === d) {
          T.splice(p, 1);
          break;
        }
      }
      return 0;
    };
    Qb = function() {
      b && (C(), b = setTimeout(x, va));
    };
    mc = C;
    var T = [], va = 16, na = 0, b;
    if (5 > B || Qa) {
      r._wdb_ontimer = x, x = "_wdb_ontimer()";
    }
  })();
  var gb, La, Rb, Fa, hb, nc, Sb, Ga, Cb, Tb, Ub, Ha, vb, Ra, Ia, ib, Sa, Vb, oc, wb, Ta, $a, Ua, lb;
  (function() {
    function x(b, d, p) {
      var v = ["<", b], y = 1, L, P;
      if (d) {
        for (L in d) {
          var W = d[L];
          if (null != W && "" !== W) {
            if ("style" === L) {
              v[++y] = ' style="';
              for (P in W) {
                for (var ja = ++y, da, Q = [], Y = P.split(""), aa = Y.length; aa;) {
                  da = Y[--aa], "A" <= da && "Z" >= da && (da = "-" + da.toLowerCase()), Q[aa] = da;
                }
                v[ja] = Q.join("") + ":" + W[P] + ";";
              }
              v[++y] = '"';
            } else {
              "className" === L && (L = "class"), v[++y] = " " + L + '="' + W + '"';
            }
          }
        }
      }
      v[++y] = ">";
      null != p && (T && "font" !== b ? v[++y] = "<FONT>" + p + "</FONT>" : v[++y] = p);
      v[++y] = "</" + b + ">";
      return v.join("");
    }
    function G(b) {
      return q(A, b);
    }
    function q(b, d) {
      var p = "*" === d && 6 > B ? "*" !== d ? b.all.tags(d.toUpperCase()) : b.all : b.getElementsByTagName(d), v = [], y = 0, L;
      for (L = p.length; y < L; ++y) {
        v[y] = p[y];
      }
      return v;
    }
    function C(b) {
      return T ? b.parentElement : b.parentNode;
    }
    function E(b, d, p, v, y, L) {
      if (T) {
        var P = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var W = hb(2 > b ? Fa(d) : d);
        W = 2 > b ? W.indexOf(d) + b : W.length;
        d.insertAdjacentHTML(P, x(p, v, y));
        d = hb(d)[W];
        null != y && ("font" === p ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (va) {
        d = A.createElement(x(p, v));
      } else {
        d = L ? A.createElementNS("http://www.w3.org/2000/svg", p) : A.createElement(p);
        if (v) {
          for (P in v) {
            if ((p = v[P]) || 0 === p) {
              switch(P) {
                case "class":
                case "className":
                  wb(d, p);
                  break;
                case "style":
                  b = d.style;
                  for (W in p) {
                    b[W] = p[W];
                  }
                  break;
                default:
                  ib(d, P, p);
              }
            }
          }
        }
        na || null != y && H(d, y);
      }
      return d;
    }
    function H(b, d) {
      if (T) {
        return E(2, b, "font", t, d);
      }
      var p = A.createTextNode("" + d);
      b.appendChild(p);
      return p;
    }
    function ma(b, d) {
      9 > B ? b.className = d : b.setAttribute("class", d);
    }
    function ca(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    var T = 5 > B;
    cb = G("html")[0];
    db = G("head")[0];
    gb = function(b) {
      return r[b] || A[b] || A.getElementById(b);
    };
    La = G;
    Rb = q;
    Fa = C;
    hb = function(b) {
      b = T ? b.children : b.childNodes;
      for (var d = [], p = b.length; p;) {
        d[--p] = b[p];
      }
      return d;
    };
    nc = function(b) {
      var d = !(7.03 < J && 7.2 > J) && b.children;
      b = d ? d : b.childNodes;
      for (var p = [], v = b.length, y = -1, L; v;) {
        if (L = b[--v], d || 1 === L.nodeType) {
          T && "FONT" === L.tagName || (p[++y] = L);
        }
      }
      return p;
    };
    Sb = function(b) {
      return T ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Ga = function(b, d, p, v, y) {
      d = E(2, b, d, p, v, y);
      T || (b.appendChild(d), na && null != v && H(d, v));
      return d;
    };
    Cb = function(b, d, p, v, y) {
      d = E(0, b, d, p, v, y);
      T || (C(b).insertBefore(d, b), na && null != v && H(d, v));
      return d;
    };
    Tb = H;
    Ub = function(b, d) {
      var p;
      if (T) {
        return E(1, b, "font", t, d);
      }
      var v = A.createTextNode("" + d);
      (p = b.nextSibling) ? Fa(b).insertBefore(v, p) : Fa(b).appendChild(v);
      return v;
    };
    Ha = function(b) {
      T ? b.outerHTML = "" : Fa(b).removeChild(b);
    };
    vb = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== cb;) {
        if (d = Fa(d), b === d) {
          return !0;
        }
      }
    };
    var va = 9 > B, na = va;
    Ra = function(b) {
      return b.tagName.toUpperCase();
    };
    Ia = function(b, d) {
      return b.getAttribute(d) || "";
    };
    ib = function(b, d, p) {
      b.setAttribute(d, p);
    };
    Sa = function(b, d) {
      b.removeAttribute(d);
    };
    Vb = function(b, d) {
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    oc = function(b) {
      return b.className;
    };
    wb = ma;
    Ta = ca;
    $a = function(b, d) {
      var p;
      if (!ca(b, d)) {
        if (p = b.className) {
          d = " " + d;
        }
        ma(b, p + d);
      }
    };
    Ua = function(b, d, p) {
      b.style[d] = p;
    };
    lb = function(b, d) {
      var p = -1, v, y;
      if (5.5 > B) {
        if (d) {
          for (v = d.split(";"); y = v[++p];) {
            var L = y.split(":");
            b.style[L[0]] = y.substr(L[0].length + 1);
          }
        } else {
          b.removeAttribute("style");
        }
      } else {
        9 > J || 1 > O ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    fb.splice(0, 0, function() {
      function b(ja) {
        ja = hb(ja);
        for (var da = ja.length, Q, Y, aa; da;) {
          if (Q = ja[--da], Y = Q.nodeType, 8 === Y) {
            d && P.push(Q);
          } else if (1 === Y) {
            switch(Y = Ra(Q), "/" === Y.charAt(0) && (Y = Y.substr(1), W[Y] = !0), Y) {
              case "STYLE":
                if (7.2 <= J && 9 > J) {
                  break;
                }
              case "LINK":
                T || v || vb(db, Q) || L.push(Q);
                break;
              case "META":
                Y = Ia(Q, "name") || Ia(Q, "property");
                for (aa = y.length; aa;) {
                  if (0 === Y.indexOf(y[--aa])) {
                    P.push(Q);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Vb(Q, "async")) {
                  break;
                }
                if (p) {
                  Q.innerText = "";
                  p = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Vb(Q, "skip-cleanup")) {
                  break;
                }
              case "!":
                P.push(Q);
                break;
              case "SOURCE":
                r.HTMLSourceElement || P.push(Q);
                break;
              default:
                W[Y] ? P.push(Q) : hb(Q).length && b(Q);
            }
          }
        }
        for (; L[0];) {
          db.appendChild(L.pop());
        }
        for (; P[0];) {
          Ha(P.pop());
        }
      }
      eb = gb("jsMain");
      var d = !(8 > J || 5 > B || Qa || 0.9 > O), p = kc, v = 7 > B, y = ["og:", "twitter:", "fb:"], L = [], P = [], W = {};
      b(cb);
    });
  })();
  var fa, wa, Ja, jb, Wb, mb, nb, xb, Xb, yb, xa, Yb;
  (function() {
    function x() {
      return aa ? ab ? 2 : Va ? 3 : 1 : 0;
    }
    function G(a) {
      wa(r, "load", G);
      G = t;
      C(fb, a, !0);
      Ja = fb = t;
    }
    function q(a, c) {
      nb(function() {
        var k = b(a);
        c(k);
        k.addListener(c);
        return !0;
      });
    }
    function C(a, c, k) {
      for (var e = 0; e < a.length; ++e) {
        !0 === a[e](c) && (a.splice(e, 1), --e);
      }
      k && (a.length = 0);
    }
    function E(a, c, k) {
      v && !p.length && qa(H);
      p.push(a, c, k);
    }
    function H() {
      var a = p, c;
      for (p = []; c = a.shift();) {
        C(c, a.shift(), a.shift());
      }
    }
    function ma(a) {
      var c = a || event;
      a = y[c.type];
      var k = -1, e, w;
      B ? (c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : P && (c.I = c.stopPropagation, c.stopPropagation = function() {
        w = !0;
      });
      for (; e = a[++k];) {
        e.j === this ? (this.h = e.i, this.h(c), this.h = ea, this.h = t) : 7.2 > J && this === A && e.j === r && (r.h = e.i, r.h(c), delete r.h);
      }
      if (B) {
        return c.preventDefault = c.stopPropagation = t, c.returnValue;
      }
      P && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (ja = !0), w && !ja && c.I(), c.I = c.stopPropagation = t);
    }
    function ca() {
      var a = 9 === d.offsetWidth;
      yb !== a && E(ic, yb = a);
    }
    function T() {
      !fb && za && (Ab(za), za = qa(va));
    }
    function va() {
      za = 0;
      C(ha);
    }
    function na(a) {
      fb || C(Ba, a);
    }
    var b = r.matchMedia, d, p = [], v;
    fb.push(function() {
      q = t;
      d = Ga(ta, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ja(function() {
        v = !0;
        p.length && qa(H);
      });
    });
    fa = function(a, c, k, e) {
      if (W) {
        a.addEventListener(c, k, e ? fc ? e : e.capture : !1);
      } else {
        var w = {j:a, i:k};
        e = y[c];
        var n = "on" + c, F, l;
        if (e) {
          for (F = e.length; l = e[--F];) {
            if (l.j === a && l.i === k) {
              return;
            }
          }
          y[c].push(w);
        } else {
          y[c] = e = [w], L || (c = a[n], "function" === typeof c && c !== ma && e.unshift({j:a, i:c}));
        }
        L ? a.attachEvent(n, ma) : a[n] = ma;
      }
    };
    wa = function(a, c, k, e) {
      if (W) {
        a.removeEventListener(c, k, e ? fc ? e : e.capture : !1);
      } else {
        e = y[c];
        c = "on" + c;
        var w, n, F;
        if (e) {
          for (w = e.length; n = e[--w];) {
            n.j === a && (n.i === k ? e.splice(w, 1) : F = !0);
          }
          F || (L ? a.detachEvent(c, ma) : (a[c] = ea, a[c] = null));
        }
      }
    };
    var y = {}, L = !1, P = 525.13 > kb, W = !P && !Qa && r.addEventListener, ja;
    P && cb.addEventListener("click", function(a) {
      if (ja) {
        return ja = !1, a.preventDefault(), !1;
      }
    });
    Ja = function(a) {
      fb.push(a);
    };
    jb = function(a) {
      da && da.push(a);
    };
    var da = [];
    if (419.3 >= kb) {
      var Q = function() {
        if (Q) {
          var a = A.readyState;
          "loaded" === a || "complete" === a ? (Q = t, G()) : qa(Q);
        }
      };
      qa(Q);
    } else {
      fa(r, "load", G);
    }
    B || 0.9 <= O && 1.8 > O ? fa(r, "unload", function(a) {
      C(da, a, !0);
    }) : da = t;
    nb = function(a) {
      ic.push(a);
    };
    Ja(function() {
      ca();
      Bb(ca);
    });
    Xb = function(a) {
      Ea && Ea.push(a);
    };
    var Y = 60 > O || Kb, aa, Va, ab;
    if (89 <= O || 89 <= tb || Lb && 79 <= ec || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Yb = !0, q("(forced-colors:active)", function(a) {
        aa = a.matches;
        xa = x();
        E(Ea, xa);
      });
    } else if (10 <= B || Jb || Lb && ec) {
      Yb = !0, q("(-ms-high-contrast:black-on-white)", function(a) {
        aa = Va = a.matches;
        xa !== x() && (xa = x(), E(Ea, xa));
      }), q("(-ms-high-contrast:white-on-black)", function(a) {
        aa = ab = a.matches;
        xa !== x() && (xa = x(), E(Ea, xa));
      }), q("(-ms-high-contrast:active)", function(a) {
        aa = a.matches;
        xa !== x() && (xa = x(), E(Ea, xa));
      });
    } else if (Lb && (B || O && 0 <= U.conpare(Pa, "1.8.1") || Kb)) {
      var Ca = function() {
        function a(e, w) {
          if (w && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var n = e.split("(")[1].split(",");
          return Oa(n[0]) + Oa(n[1]) + Oa(n[2]);
        }
        var c = A.defaultView;
        var k = c ? c.getComputedStyle(d, null) : d.currentStyle;
        c = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        c && (aa = "#123456" !== c && "rgb(18,52,86)" !== c, Va = a(c) < a(k, !0), ab = a(c) > a(k, !0), xa !== x() && (xa = x(), E(Ea, xa, Y)));
      };
      nb(function(a) {
        if (a) {
          return Ua(d, "color", "#123456"), Ua(d, "backgroundColor", "#123456"), Y ? (Ca(), Ea = t) : Bb(Ca), Ca = t, !0;
        }
      });
    } else {
      Ea = x = t;
    }
    xb = function(a) {
      ra.push(a);
    };
    var ra = [], Da = 7.5 <= J && 8 > J;
    Da && function() {
      for (var a = A.images, c = a.length, k; c;) {
        k = a[--c], k.H = k.src, Sa(k, "src");
      }
    }();
    Ja(function() {
      function a() {
        e ? (w = k[--e], Da && ib(w, "src", w.H), jc(c, Da ? w.H : w.src)) : xb = ra = t;
      }
      function c(F) {
        C(ra, {D:w, F:F}, !e);
        a();
      }
      var k = A.images || La("img"), e = k.length;
      if (12 > J || 532 > kb) {
        a();
      } else {
        for (; e;) {
          var w = k[--e];
          var n = 9 > B ? w.complete : 0 <= w.naturalWidth ? w.naturalWidth : w.width;
          E(ra, {D:w, F:n}, !e);
        }
        xb = ra = t;
      }
    });
    Wb = function(a) {
      ha.push(a);
    };
    var ha = [], za;
    fa(r, "resize", T);
    jb(function() {
      za && clearTimeout(za);
      wa(r, "resize", T);
    });
    mb = function(a) {
      Ba.push(a);
    };
    var Ba = [], g = 0, h = 1 > O || 1.2 <= O && 1.8 > O || 7.2 >= J;
    h ? Bb(function() {
      var a = r.scrollY || ta.scrollTop;
      g !== a && (g = a, na());
    }) : fa(r, "scroll", na);
    jb(function() {
      h || wa(r, "scroll", na);
    });
  })();
  (function() {
    var x = 1 > O || 8 <= J && 9 > J, G = 7.2 <= J && 8 > J;
    B || !x && !G && function() {
      var q = Ga(cb, "style"), C = !(!q.styleSheet && !q.sheet);
      Ha(q);
      return C;
    }() || !kb || x || G || function() {
      var q = Ga(cb, "style");
      Tb(q, "");
      var C = !(!q.styleSheet && !q.sheet);
      Ha(q);
      return C;
    }();
  })();
  (function() {
    9 > B && Ja(function() {
      var x = Ga(ta, "div");
      lb(x, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      gc = 1 < x.offsetHeight;
      lb(x, "");
      Ha(x);
    });
    jc = function(x, G) {
      function q() {
        E || !H || C.complete ? (qa(x, !!C.width), C.onerror = C.onload = ea, C = x = t) : (--H, qa(q));
      }
      var C = new Image(), E, H = 99;
      C.onerror = function() {
        E = !0;
      };
      C.onload = function() {
        E = !0;
      };
      C.src = G;
      qa(q);
    };
  })();
  (function() {
    xb(function(q) {
      var C = q.D;
      q = q.F;
      var E = Fa(C);
      !Ta(E, "aBodyRoot") && q ? $a(E, "img-loaded") : q || Ia(C, "alt") || Ua(C, "display", "none");
    });
    if (!Yb && Ea) {
      var x, G = function() {
        x = Ga(db, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ya + "css/" + zb + "hc/" + Mb});
        (hc || 5.5 <= B && 9 > B && gc) && $a(ta, "jsCanRotate");
        G = t;
      };
      Xb(function(q) {
        q && !x ? G() : x && (q ? db.appendChild(x) : Ha(x));
      });
    }
    5.5 <= B && 8 > B && Ea && Xb(function(q) {
      for (var C = La("a"), E = C.length, H = 0; H < E; ++H) {
        C[H].hideFocus = !q;
      }
    });
    J && Ja(function() {
      for (var q = La("a"), C = q.length, E = 0, H; E < C; ++E) {
        H = q[E], "-1" === Ia(H, "tabindex") ? Sa(H, "tabindex") : Ia(H, "href") && ib(H, "tabindex", "0");
      }
      q = La("input");
      E = 0;
      for (C = q.length; E < C; ++E) {
        H = q[E], "hidden" === Ia(H, "type") && Sa(H, "tabindex");
      }
    });
  })();
  (function() {
    function x(f) {
      var m = f.keyCode || f.ba, u = ja.length, I, N, M, Wa;
      if ("keydown" !== f.type || 13 === m) {
        for (; u;) {
          if (m = ja[--u], m.C === this || m.u === this) {
            u = m.C;
            var R = I = m.u;
            if (m.N) {
              if (Ua(u, "width", m.Z), u.src = m.Y, wb(R, m.R), u = m.K) {
                lb(u, m.P), wb(u, "caption jsCap");
              }
            } else {
              if (N = m.L) {
                for (delete m.L; I = Fa(I);) {
                  if (Ta(I, "caption")) {
                    m.K = I, m.P = I.style.cssText, $a(I, "jsCap");
                  } else {
                    var S = Ra(I);
                    if ("DIV" === S || "P" === S || "BLOCKQUOT" === S || "LI" === S || "DD" === S || "TD" === S || "TH" === S || "FORM" === S || "PRE" === S) {
                      break;
                    }
                  }
                }
                I = I.offsetWidth - 4 - 1;
                1600 < I && (I = 1600);
                if (m.T && 0 < N.split("/").pop().indexOf("=")) {
                  N = N.split("=");
                  S = N.length;
                  if (M = N[S - 1]) {
                    (Wa = Oa(M.substr(1))) && M === "s" + Wa ? N[S - 1] = "w" + I : N[S] = "w" + I;
                  }
                  N = N.join("=");
                } else if (0 < N.indexOf(".bp.blogspot.com/")) {
                  N = N.split("/");
                  S = N.length;
                  if (M = N[S - 2]) {
                    (Wa = Oa(M.substr(1))) && M === "s" + Wa ? N[S - 2] = "w" + I : N.splice(S - 1, 0, "w" + I);
                  }
                  N = N.join("/");
                }
                m.V = N;
              }
              m.R = oc(R);
              $a(R, "jsPicaLarge");
              Ua(u, "width", "");
              u.src = m.V;
              if (u = m.K) {
                lb(u, ""), $a(u, "jsCapLarge");
              }
            }
            m.N = !m.N;
            break;
          }
        }
        G(f);
      }
    }
    function G(f) {
      f.preventDefault();
      f.stopPropagation();
    }
    function q(f) {
      for (var m = arguments, u = 0, I = m.length; u < I; ++u) {
        if (isFinite(m[u])) {
          return m[u];
        }
      }
      return 0;
    }
    function C(f) {
      var m = a;
      if (yb) {
        if (c && !m) {
          if (new Ya() - 0 < c) {
            return;
          }
          c = t;
        }
        7 === f ? k = 0 : (k && (k = Ab(k)), g = q(r.pageYOffset, r.scrollY, Ca.scrollTop, ta.scrollTop));
        m ? (a = E(t, m[0], m[1])) || (c = new Ya() - 0 + 99) : E();
      } else {
        a = t;
      }
    }
    function E(f, m, u) {
      function I(Ma) {
        R = Ma;
        if (za) {
          S = za + ":translate" + (h ? "3D(0," : "(0,") + Ma + (h ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ma) {
          if (!ab && (Va || aa)) {
            var Db = ra.offsetWidth;
          }
          S = aa ? "position:fixed;width:" + Db + "px;top:" + (Ma - N + ba) + "px" : ab ? "top:" + Ma + "px;left:0" : "position:absolute;left:0;width:100%;top:" + Ma + "px";
          Va && S && (S += ";" + (0 > Ma ? "clip:rect(" + -Ma + "px " + Db + "px " + sa + "px 0)" : Ma + sa < Eb ? "clip:rect(0 " + Db + "px " + sa + "px 0)" : "clip:rect(0 " + Db + "px " + (Eb - Ma) + "px 0)"), 8 > B || (S = S.split(" ").join(",")));
        }
      }
      var N = g, M = Da, Wa = ra.offsetTop === M.offsetTop, R = 0, S = "", Ka = !0;
      if (Wa) {
        for (var ka = 0, ba = 0, la = M; la && la !== ta;) {
          ba += la.offsetTop, la = la.offsetParent;
        }
        R = Ba;
        var Zb = q(r.innerHeight, Ca.offsetHeight), $b = M.offsetHeight, sa = ha.offsetHeight, Eb = sa < $b ? $b : sa, bb = N, ob = bb + Zb, Fb = ba, Gb = Fb + Eb, pc = ba + R, rc = pc + sa;
        M = bb < Fb ? Fb : bb;
        la = Gb < ob ? Gb : ob;
        var pb = la - M;
        bb = Gb <= bb;
        ob = ob <= Fb;
        if (m !== t) {
          Ka = ba + m;
          f = Ka + u;
          var qb;
          if (bb || ob) {
            return Zb <= u ? qb = ba : qb = bb ? Gb - u : ba + u - Zb, c = t, r.scroll(q(r.pageXOffset, r.scrollX, Ca.scrollLeft, ta.scrollLeft), qb), a;
          }
          sa <= pb ? ka = 3 : u <= pb ? sa - m <= pb ? ka = 2 : M <= Ka && f <= la ? M < ba + R && (ka = 4) : ka = M <= Ka && Ka <= la ? 5 : M <= f && f <= la ? 4 : f < M ? 4 : 5 : ka = 4;
          Ka = t;
        } else {
          f !== t ? sa <= pb ? (ka = 7, Ka = !1) : (R -= 60 * f, ka = la - ba - sa, qb = M - ba, R < ka ? R = ka : qb < R && (R = qb), ka = 6) : $b <= sa || (bb ? ka = 1 : ob || (sa <= pb ? ka = 3 : M < pc ? ka = 3 : rc < la ? ka = 2 : N < ba + sa - pb || (ka = 2)));
        }
        switch(ka) {
          case 0:
            I(0);
            break;
          case 1:
            I(Eb - sa);
            break;
          case 2:
            I(la - ba - sa);
            break;
          case 3:
            I(M - ba);
            break;
          case 4:
            I(M - ba - m);
            break;
          case 5:
            I(la - ba - (m + u));
          case 6:
            I(R);
        }
      }
      lb(ha, S);
      Ba = R;
      return Wa && Ka;
    }
    function H(f) {
      if (yb) {
        O && (g = q(r.pageYOffset, Ca.scrollTop, ta.scrollTop));
        var m = this !== f.target, u = m && q(f.deltaY, f.wheelDeltaY / 120, f.wheelDelta / -120, f.detail / ("MozMousePixelScroll" === f.type ? 45 : 1));
        m && u && E(9 >= u ? -9 >= u ? -3 : u : 3) && (f.preventDefault(), f.stopPropagation());
      }
    }
    function ma(f) {
      for (var m = f.target, u = -1, I; I = da[++u];) {
        vb(I, m) && H(f);
      }
    }
    function ca(f) {
      if (yb) {
        var m = !!za || O, u = f.target || f.srcElement;
        f = 0;
        var I;
        if (vb(ha, u)) {
          for (I = u.offsetHeight; u && (m ? vb(ha, u) : ha !== u);) {
            f += u.offsetTop, u = u.offsetParent;
          }
          Y ? (a = [f, I], k && Ab(k), k = qa(C, 7, 1 > O ? 500 : 0)) : (g = q(r.pageYOffset, r.scrollY, Ca.scrollTop, ta.scrollTop), E(t, f, I));
        }
      }
    }
    function T() {
      l = r.onerror;
      r.onerror = va;
      var f = A.activeElement;
      F !== f && (F = f, ca({target:f}));
      r.onerror = l;
      l = t;
    }
    function va() {
      r.onerror = l;
      l = F = t;
      return !0;
    }
    function na() {
      z.call(D);
    }
    function b() {
      A.fullscreenElement || A.fullscreen || A.webkitIsFullscreen || A.msFullscreenElement || r.fullScreen ? (ib(D, "id", "blog2slide-root"), pa[1].parentNode.insertBefore(V, pa[1]), d(), A.onkeydown = p) : Z && (Ha(V), Sa(D, "id"), Sa(Z, "id"), Z = A.onkeydown = t);
    }
    function d() {
      Z && Sa(Z, "id");
      oa = 0 < oa ? Na < oa ? Na : oa : 0;
      Z = pa[oa];
      ib(Z, "id", "blog2slide-current");
    }
    function p(f) {
      if ("ArrowRight" === f.key || 39 === f.keyCode) {
        ++oa, d();
      } else if ("ArrowLeft" === f.key || 37 === f.keyCode) {
        --oa, d();
      }
    }
    ub = !(7.2 > J || 0 >= U.conpare(Pa, "0.9"));
    Nb = function(f) {
      v ? L || A.write('<script src="' + f + '">\x3c/script>') : L && !P.length ? W(f) : P.push(f);
    };
    Ob = function() {
      v || W(P.shift());
    };
    var v = !ub, y = ub && 7.5 > J, L;
    if (!v) {
      ub = !0;
      var P = [];
      y && (kc = !0);
      Ja(function() {
        L = !0;
        W(P.shift());
      });
      var W = function(f) {
        f && (y ? ac[0].src = f : Ga(db, "script", {src:f}));
      };
    }
    var ja = [];
    dc || (xb(function(f) {
      if (f.F && eb) {
        f = f.D;
        var m = Fa(f), u = "", I;
        if ("A" === Ra(m) && 1 === nc(m).length) {
          var N = Ia(m, "href");
          var M = N.split("?")[0].split("#")[0].split(".");
          M = (M[M.length - 1] || "").toLowerCase();
          if ((I = 0 < N.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + M + ".")) {
            fa(m, "keydown", x), fa(f, "click", x), fa(m, "click", G), 9 > J || (u = f.offsetWidth - 4 + "px", Ua(f, "width", u)), $a(m, "jsPica"), ja.push({u:m, Y:f.src, Z:u, L:N, C:f, T:I});
          }
        }
      }
    }), jb(function(f, m) {
      for (f = -1; m = ja[++f];) {
        wa(m.u, "keydown", x), wa(m.C, "click", x), wa(m.u, "click", G);
      }
    }));
    var da = ["jsSidebarFixer1", "jsSidebarFixer2"], Q = O || Kb || Jb, Y = !(6 <= B && 9 > B || J || 1 <= O && 1.3 > O), aa = !(5 > X(16) || 5 > X(17) || 2.2 > X(21) || 6 > X(12) || Aa(30) && 534 > kb || Aa(32) || 7 > B || 9 > J || 1 > O), Va = aa || 7 > B || 1 > O, ab = 7.5 > J, Ca, ra, Da, ha, za = hc, Ba = 0, g = 0, h, a, c, k, e = O && 0 <= U.conpare(Pa, "0.9.7"), w = O && 0 >= U.conpare(Pa, "0.9.4");
    qc || dc || (nb(function(f) {
      if (f) {
        if (!eb) {
          return !0;
        }
        f = -1;
        var m;
        Ca = "CSS1Compat" !== A.compatMode ? ta : cb || ta;
        ra = gb("jsSide");
        Da = eb;
        if (!ra) {
          return !0;
        }
        mb(C);
        Wb(C);
        ha = Cb(Sb(ra), "div", {id:"jsSidebarFixer"});
        for (8 > J || w || 6 > B || (B || Qa ? fa(ha, "focusin", ca) : Q ? fa(A, "focus", ca, {capture:!0, passive:!1}) : fa(ha, "DOMFocusIn", ca, !1)); 1 < hb(ra).length;) {
          ha.appendChild(hb(ra)[1]);
        }
        for (e && !sb && fa(A, "DOMMouseScroll", ma, !1); m = da[++f];) {
          var u = gb(m);
          u.onwheel !== t ? fa(u, "wheel", H, {passive:!1}) : sb ? fa(u, "MozMousePixelScroll", H, !1) : e ? da[f] = gb(m) : (u.onmousewheel !== t || 9 <= J) && fa(u, "mousewheel", H, !1);
        }
        B || Jb || 2 > tb || (h = Za.perspective !== t || Za.MozPerspective !== t || Za["-webkit-perspective"] !== t);
        C();
        return !0;
      }
    }), jb(function() {
      var f = -1, m;
      if (e && !sb) {
        wa(A, "DOMMouseScroll", ma, !1);
      } else {
        for (; m = da[++f];) {
          m = gb(m), m.onwheel !== t ? wa(m, "wheel", H, {passive:!1}) : sb ? wa(m, "MozMousePixelScroll", H, !1) : (m.onmousewheel !== t || 9 <= J) && wa(m, "mousewheel", H, !1);
        }
      }
      8 > J || w || 6 > B || (B || Qa ? wa(ha, "focusin", ca, !1) : Q ? wa(A, "focus", ca, {capture:!0, passive:!1}) : wa(ha, "DOMFocusIn", ca, !1));
      n && clearInterval(n);
    }));
    var n, F, l;
    6 > B && nb(function(f) {
      if (!eb) {
        return !0;
      }
      f ? n = setInterval(T, 333) : n && (clearInterval(n), n = 0);
    });
    Ja(function() {
      function f(Wa, R, S, Ka) {
        var ka = Ka ? "div" : "cite";
        if (0 === R.indexOf("urn:isbn:")) {
          R = R.substr(9).toUpperCase().split("-").join("");
          if (13 === R.length) {
            R = R.toString().slice(3, -1);
            for (var ba = 0, la = 0; 9 > la; la++) {
              ba += (R.charAt(la) - 0) * (10 - la);
            }
            ba = (11 - ba % 11) % 11;
            ba = 10 === ba ? "X" : ba.toString();
            R += ba;
          }
          10 === R.length && (R = "//www.amazon.co.jp/exec/obidos/ASIN/" + R + "/itozyun-22/ref=nosim/");
        }
        S = Ka ? Cb(Sb(u), ka, {className:S}) : Ga(u, ka, {className:S});
        Ga(S, "a", 0 === R.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:R, X:J ? "0" : t} : {href:R, X:J ? "0" : t}, Wa);
      }
      if (eb) {
        for (var m = Rb(eb, "blockquote"), u, I = -1, N, M; u = m[++I];) {
          N = Ia(u, "title"), M = Ia(u, "cite"), N && M ? (Sa(u, "title"), f(N, M, "js-bqLink", !0)) : M && (Sa(u, "cite"), f(r.decodeURI ? decodeURI(M) : M, M, "js-bqCite"));
        }
      }
    });
    var z, D, V, Z, pa, oa, Na;
    Ja(function() {
      var f = gb("blog2slide-start");
      if (f) {
        var m = A.onfullscreenchange !== t ? "f" : A.onmozfullscreenchange !== t ? "mozF" : A.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        z = f.requestFullscreen || f.webkitRequestFullscreen || f.mozRequestFullscreen || f.msRequestFullscreen;
        0 !== m || z ? (f.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', fa(f.firstChild, "click", na), f = Fa(f), D = Fa(f), pa = Rb(f, "section"), V = A.createElement("h1"), V.innerHTML = La("h1")[0].innerHTML, Na = pa.length, pa.splice(0, 0, V), 0 !== m ? fa(A, m + "ullscreenchange", b) : B ? fa(A, "MSFullscreenChange", b, !1) : Wb(b)) : Ha(f);
      }
    });
  })();
  var rb, Hb = !K || 0.9 > O || 8 > J || 5.5 > B, Xa;
  (function() {
    function x(g) {
      return g === "" + g;
    }
    function G(g, h) {
      return Hb ? new p(g, h) : new K(g, h);
    }
    function q(g, h, a, c) {
      if (d() - v < W && !c) {
        return g(h);
      }
      qa(C, {S:g, W:h});
    }
    function C(g) {
      v = d();
      g.S(g.W);
    }
    function E(g, h) {
      g && rb[g] || (g = ja.test(h) ? "default-markup" : "default-code");
      var a = !!rb[g];
      a && q(Va, g, 0, !0);
      return a;
    }
    function H() {
      function g(oa, Na, f) {
        Na && (h.g = h.g || [], h.g.push({l:h, A:h.A, M:1, s:w, B:oa, o:Na, m:f, O:{}, v:0}));
      }
      var h = y, a = h.m, c = a[0], k = a[2], e = h.B, w = h.s, n = h.$.shift(), F = h.O;
      if (n) {
        var l = F[n], z;
        if (!(0 <= l)) {
          if (z = c[n.charAt(0)]) {
            var D = n.match(z[1]);
            l = z[0];
          } else {
            for (l = 0, c = -1; z = k[++c];) {
              if (D = n.match(z[1])) {
                l = z[0];
                break;
              }
            }
          }
          !(z = x(l)) || D && x(D[1]) || (z = !1, l = 11);
          z || (F[n] = l);
        }
        k = h.v;
        F = n.length;
        h.v += F;
        if (z) {
          z = D[1];
          c = n.indexOf(z);
          var V = z.length, Z = c + V;
          D[2] && (Z = F - D[2].length, c = Z - V);
          g(e + k, n.substr(0, c), a);
          if (V && E(l, z)) {
            g(e + k + c, z);
            var pa = !0;
          }
          g(e + k + Z, n.substr(Z), a);
          h.g && h.g.length && (y = h.g.shift());
          pa || (y !== h ? q(Y, t, 2) : q(H, t, 2));
        } else {
          w.push(e + k, l), q(H, t, 2);
        }
      } else {
        h.l ? (y = h.l.g.shift()) ? q(Y, t, 2) : (y = h.l, q(H, t, 2)) : q(ra, t, 2);
      }
    }
    function ma(g) {
      if (aa.length) {
        var h = aa.shift(), a = na[h];
        if (a.pop) {
          na[h] = G(a[0], a[1]);
        } else if (x(a)) {
          na[h] = G(a);
        } else {
          return ma(g);
        }
        q(ma, g, 1);
      } else {
        q(Va, g);
      }
    }
    function ca(g) {
      for (var h, a = g.firstChild; a; a = a.nextSibling) {
        var c = a.nodeType;
        h = 1 === c ? h ? g : a : 3 === c ? da.test(a.nodeValue) ? g : h : h;
      }
      return h === g ? t : h;
    }
    rb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var T = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], va = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], na = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    b = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), d = Ya.now || function() {
      return +new Ya();
    }, p, v, y, L, P, W = 5 > B ? 60 : 5.5 > B ? 0 : Hb ? 20 : 10, ja, da;
    Xa = [function(g) {
      r.RegExpCompat = p = g;
    }, function() {
      ja = G("^\\s*<");
      da = G("\\S");
    }];
    Hb || (Xa[1](), Xa = t);
    var Q = function() {
      var g = y, h = g.U, a = ab(g.A, g.M), c = g.o = a.o;
      g.G = a.G;
      E(h, c) || (y = t, q(Ba, t, 0, !0));
    };
    var Y = function() {
      var g = y;
      g.$ = g.o.match(g.m[1]) || [];
      g.s.push(g.B, 0);
      q(H, t, 2);
    };
    var aa = [];
    var Va = function(g) {
      function h(l) {
        var z = l;
        0 <= l && (z = va[l]);
        0 <= z[1] && (z[1] = a(z[1]));
        return z;
      }
      function a(l) {
        var z = l;
        return 0 <= l && (z = na[l], !z.exec) ? (aa.push(l), l) : z;
      }
      var c = y, k = rb[g];
      x(k) && (k = rb[g] = rb[k]);
      var e = k[0];
      if (0 <= e) {
        e = T[e];
        if (0 <= e["-num"]) {
          var w = e["-num"];
          delete e["-num"];
          for (var n = -1; 9 > n;) {
            e["" + ++n] = w;
          }
        }
        k[0] = e;
      }
      for (var F in e) {
        e[F] = h(e[F]);
      }
      k[1] = a(k[1]);
      e = k[2];
      n = 0;
      for (w = e.length; n < w; ++n) {
        e[n] = h(e[n]);
      }
      aa.length ? q(ma, g, 2) : (c.m ? c.l && (c.l.g[0].m = k) : c.m = k, q(Y, t, 1));
    };
    var ab = function(g, h) {
      function a(F) {
        var l = F.nodeType;
        if (1 === l) {
          if (!Ta(F, "nocode")) {
            for (l = F.firstChild; l; l = l.nextSibling) {
              a(l);
            }
            l = Ra(F);
            if ("BR" === l || "LI" === l) {
              c[w] = "\n", e[w << 1] = k++, e[w++ << 1 | 1] = F;
            }
          }
        } else if (3 === l || 4 === l) {
          if (l = F.nodeValue) {
            l = h ? l.split("\r\n").join("\n").split("\r").join("\n") : l.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), c[w] = l, e[w << 1] = k, k += l.length, e[w++ << 1 | 1] = F;
          }
        }
      }
      var c = [], k = 0, e = [], w = 0;
      a(g);
      var n = c.join("");
      "\n" === n.charAt(n.length - 1) && (n = n.substr(0, n.length - 1));
      return {o:n, G:e};
    };
    var Ca = function(g, h, a) {
      function c(l) {
        var z = l.nodeType;
        if (1 === z && !Ta(l, "nocode")) {
          if ("BR" === Ra(l)) {
            k(l), l.parentNode && Ha(l);
          } else {
            for (l = l.firstChild; l; l = l.nextSibling) {
              c(l);
            }
          }
        } else if ((3 === z || 4 === z) && a) {
          var D = l.nodeValue, V = D.indexOf("\r\n"), Z = 2;
          -1 === V && (V = D.indexOf("\n"), Z = 1);
          -1 === V && (V = D.indexOf("\r"));
          -1 !== V && (z = D.substr(0, V), l.nodeValue = z, (D = D.substr(V + Z)) && Ub(l, D), k(l), z || Ha(l));
        }
      }
      function k(l) {
        function z(V, Z) {
          var pa = Z ? V.cloneNode(!1) : V, oa = V.parentNode;
          if (oa) {
            oa = z(oa, 1);
            var Na = V.nextSibling;
            oa.appendChild(pa);
            for (var f = Na; f; f = Na) {
              Na = f.nextSibling, oa.appendChild(f);
            }
          }
          return pa;
        }
        for (; !l.nextSibling;) {
          if (l = l.parentNode, !l) {
            return;
          }
        }
        l = z(l.nextSibling, 0);
        for (var D; (D = l.parentNode) && 1 === D.nodeType;) {
          l = D;
        }
        w.push(l);
      }
      for (var e = A.createElement("li"); g.firstChild;) {
        e.appendChild(g.firstChild);
      }
      for (var w = [e], n = 0; n < w.length; ++n) {
        c(w[n]);
      }
      if (h === (h | 0)) {
        if (10 <= h && 7.2 > J) {
          var F = A.createElement("ol");
          F.innerHTML = '<li value="' + h + '">' + e.innerHTML + "</li>";
          w[0] = F.firstChild;
        } else {
          ib(e, "value", h);
        }
      }
      F = Ga(g, "ol", {className:"linenums"});
      g = Math.max(0, h - 1 | 0) || 0;
      n = 0;
      for (h = w.length; n < h; ++n) {
        e = w[n], wb(e, "L" + (n + g) % 10), e.firstChild || Tb(e, "\u00a0"), F.appendChild(e);
      }
    };
    var ra = function() {
      var g = y, h = g.o, a = h.length, c = 0, k = g.G, e = k.length, w = 0, n = g.s, F = n.length, l = 0;
      n[F] = a;
      var z, D;
      for (D = z = 0; D < F;) {
        n[D] !== n[D + 2] ? (n[z++] = n[D++], n[z++] = n[D++]) : D += 2;
      }
      F = z;
      for (D = z = 0; D < F;) {
        var V = n[D], Z = n[D + 1];
        for (D += 2; D + 2 <= F && n[D + 1] === Z;) {
          D += 2;
        }
        n[z++] = V;
        n[z++] = Z;
      }
      n.length = z;
      g = g.A;
      F = "";
      g && (F = g.style.display, Ua(g, "display", "none"));
      for (; w < e;) {
        z = k[w + 2] || a;
        V = n[l + 2] || a;
        D = Math.min(z, V);
        Z = k[w + 1];
        var pa;
        if (1 !== Z.nodeType && (pa = h.substring(c, D))) {
          9 > B && (pa = pa.split("\n").join("\r"));
          var oa = Cb(Z, "span", {className:b[n[l + 1]]}, pa);
          Ha(Z);
          c < z && (k[w + 1] = Ub(oa, h.substring(D, z)));
        }
        c = D;
        c >= z && (w += 2);
        c >= V && (l += 2);
      }
      g && Ua(g, "display", F);
      y = t;
      q(Ba, t, 3, !0);
    };
    var Da = [], ha;
    nb(function(g) {
      if (g) {
        g = [La("pre"), La("code"), La("xmp")];
        for (var h = 0; h < g.length; ++h) {
          for (var a = 0, c = g[h].length; a < c; ++a) {
            za(g[h][a]);
          }
        }
        return !0;
      }
    });
    var za = function(g) {
      Da.push(g);
      ha = Da.length;
      1 === ha && (bc ? qa(bc, Ba) : Xa ? Xa.push(function() {
        qa(Ba);
      }) : qa(Ba));
    };
    var Ba = function() {
      function g(w, n) {
        return (w.split(n)[1] || "").split(" ")[0];
      }
      if (!y) {
        ha !== Da.length && P && P(ha - Da.length, ha);
        var h = Da.shift();
        if (h) {
          if (Ta(h, "prettyprint") && !Ta(h, "prettyprinted")) {
            for (var a = !1, c = h.parentNode; c !== ta; c = c.parentNode) {
              var k = Ra(c);
              if (("PRE" === k || "XMP" === k || "CODE" === k) && Ta(c, "prettyprint")) {
                a = !0;
                break;
              }
            }
            if (!a) {
              a = h.className;
              $a(h, "prettyprinted");
              c = !1;
              if (!c) {
                c = g(a, "lang-") || g(a, "language-");
                var e;
                !c && (e = ca(h)) && "CODE" === Ra(e) && (c = g(e.className, "lang-") || g(e.className, "language-"));
              }
              k = Ra(h);
              "PRE" === k || "XMP" === k ? k = 1 : (k = h.currentStyle, e = A.defaultView, k = (k = k ? k.whiteSpace : e && e.getComputedStyle ? e.getComputedStyle(h, null).getPropertyValue("white-space") : 0) && "pre" === k.substr(0, 3));
              e = !1;
              (e = "true" === e || +e) || (e = g(a, "linenums:") || Ta(h, "linenums"), e = e.length ? +e : e);
              e && Ca(h, e, k);
              y = {U:c, A:h, aa:e, M:k, B:0, v:0, O:{}, s:[]};
              q(Q);
              return;
            }
          }
          q(Ba, t, 0, !0);
        } else {
          L && L();
        }
      }
    };
    r.PR = {RegExpProxy:G, prettifyElement:za, registerCompleteHandler:function(g, h) {
      L = g;
      P = h;
    }};
  })();
  var ac = A.scripts || La("script");
  var ya = ac[ac.length - 1].src.split("/");
  --ya.length;
  "js" === ya[ya.length - 1] && --ya.length;
  (ya = ya.join("/")) && (ya += "/");
  var qc = cc || "1" === Ia(ta, "mob");
  zb = (qc ? "mb" : "pc") + "/";
  6.1 > Ib && (mb ? mb(Pb) : fa(r, "scroll", Pb));
  jb(lc);
  6.1 > Ib && (mb ? mb(Qb) : fa(r, "scroll", Qb));
  jb(mc);
  10 > B && (11 !== ia || 5 !== B) || (9 > J || 1 > O || !Qa && !r.addEventListener ? A.write('<link href="' + ya + "css/" + zb + Mb + '" rel="stylesheet"' + (8 > J ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > J || 1.5 > O || 532 >= kb || 8 > tb) && Ja(function() {
    Ga(db, "link", {href:ya + "css/" + zb + Mb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Hb) {
    if (ub) {
      var bc = function(x) {
        r.RegExpCompat = function(G) {
          for (var q; q = Xa.shift();) {
            q(G);
          }
          Xa = t;
          qa(x);
          Ob(ya + "js/regexpcompat.js");
        };
        bc = t;
        Nb(ya + "js/regexpcompat.js");
      };
    } else {
      r.RegExpCompat = function(x) {
        for (var G; G = Xa.shift();) {
          G(x);
        }
        Xa = t;
        Ob(ya + "js/regexpcompat.js");
      }, Nb(ya + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

