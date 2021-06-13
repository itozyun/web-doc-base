(function(l, t, $b, r, ob, rc, Qa, sc, tc) {
  function v(a) {
    return void 0 !== a;
  }
  function va() {
    for (var a, b = 0; b < wa.length; ++b) {
      a = wa[b], a.f();
    }
  }
  function Ra(a) {
    wa.length || (R = setInterval(va, pb));
    wa.push({f:a, i:++qb});
    return qb;
  }
  function ac() {
    R && (rb(), R = setInterval(va, pb));
  }
  function rb() {
    R && (R = clearInterval(R));
  }
  function ea() {
    for (var a, b = 0, d = new Date - 0; b < C.length;) {
      d < C[0].t ? ++b : (a = C.splice(b, 1)[0], a.f(a.p));
    }
    M = C.length ? setTimeout(ea, fa) : 0;
  }
  function bc() {
    M && (sb(), M = setTimeout(ea, fa));
  }
  function sb() {
    M && (M = clearTimeout(M));
  }
  function S(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function T(a, b) {
    tb && !ha.length && U(ub);
    ha.push(a, b);
  }
  function ub() {
    var a = ha, b;
    for (ha = []; b = a.shift();) {
      S(b, a.shift());
    }
  }
  function xa(a) {
    var b;
    Sa && (b = Sa(a));
    S(ia, a);
    onload = D;
    ia = xa = Sa = onload = null;
    return b;
  }
  function vb() {
    var a = 9 === V.offsetWidth;
    wb !== a && T(xb, wb = a);
  }
  function ya() {
    return Ta = ja ? Ua ? 2 : Va ? 3 : 1 : 0;
  }
  function cc() {
    W = 0;
    S(yb);
  }
  function G(a, b) {
    b = b || r;
    var d = zb ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase()), c = [], e = 0, f;
    for (f = d.length; e < f; ++e) {
      c[e] = d[e];
    }
    return c;
  }
  function X(a) {
    return t[a] || r[a] || r.getElementById(a);
  }
  function E(a) {
    return a.parentElement || a.parentNode;
  }
  function F(a) {
    E(a).removeChild(a);
  }
  function Ab(a) {
    var b = a.children, d = 0, c, e;
    if (!b) {
      for (b = [], a = a.childNodes, c = a.length; d < c; ++d) {
        1 === (e = a[d]).nodeType && (b[b.length] = e);
      }
    }
    return b;
  }
  function za(a, b) {
    var d = r.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function Y(a, b, d, c, e) {
    function f() {
      if (d) {
        var p = h, n;
        for (n in d) {
          switch(n) {
            case "class":
            case "className":
              Aa(p, d[n]);
              break;
            default:
              p.setAttribute(n, d[n]);
          }
        }
      }
      if (c) {
        p = h.style;
        for (var m in c) {
          p[m] = c[m];
        }
      }
      null == e || g || h.appendChild(r.createTextNode(e));
    }
    var k = 9 > q, g = "style" === b;
    if (g) {
      if (Ba) {
        var h = za("style");
        h.type = "text/css";
        h.appendChild(r.createTextNode(""));
        h.innerHTML = e;
      } else {
        h = za("div", 'a<style type="text/css">' + e + "</style>").lastChild;
      }
    } else {
      h = za(b);
    }
    k || f();
    Ca ? (2 === Ca && (a = a.nextSibling), a ? E(a).insertBefore(h, a) : E(a).appendChild(h), Ca = 0) : a.appendChild(h);
    k && f();
    return h;
  }
  function Bb(a, b, d) {
    Ca = 1;
    return Y(a, b, d, void 0, void 0);
  }
  function Da(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== ka;) {
      if (b = E(b), a === b) {
        return !0;
      }
    }
  }
  function la(a, b) {
    if (9 > w) {
      if (b) {
        for (var d = b.split(";"), c; c = d.shift();) {
          c = c.split(":"), a.style[c[0]] = c[1];
        }
      } else {
        a.removeAttribute("style");
      }
    } else {
      a.style.cssText = b;
    }
  }
  function Cb(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function Aa(a, b) {
    9 > q ? a.className = b : a.setAttribute("class", b);
  }
  function Ea(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Z(a, b) {
    var d;
    if (!Ea(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      Aa(a, d + b);
    }
  }
  function Db(a) {
    return a.sheet || a.styleSheet;
  }
  function Eb(a) {
    return 10 <= q ? a.cssRules : a.rules || a.cssRules;
  }
  function dc() {
    Wa.call(Fa);
  }
  function Xa() {
    if (r.fullscreenElement || r.fullscreen || r.webkitIsFullscreen || r.msFullscreenElement || t.fullScreen) {
      Fa.setAttribute("id", "blog2slide-root");
      var a = ma[1];
      E(a).insertBefore(Ga, a);
      Ya();
      r.onkeydown = ec;
    } else {
      N && (F(Ga), Fa.removeAttribute("id"), N.removeAttribute("id"), N = r.onkeydown = null);
    }
  }
  function Ya() {
    N && N.removeAttribute("id");
    O = 0 < O ? Za < O ? Za : O : 0;
    N = ma[O];
    N.setAttribute("id", "blog2slide-current");
  }
  function ec(a) {
    if ("ArrowRight" === a.key || 39 === a.keyCode) {
      ++O, Ya();
    } else {
      if ("ArrowLeft" === a.key || 37 === a.keyCode) {
        --O, Ya();
      }
    }
  }
  function $a() {
    Ha = Y(na, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:P + "hc/" + oa});
    (Ia || 5.5 <= q && 9 > q && Fb) && Z(A, "jsCanRotate");
    $a = null;
  }
  function Gb(a, b) {
    var d = a || event, c = d.keyCode || d.D, e = Ja.length, f, k, g, h;
    if ("keydown" !== d.type || 13 === c) {
      if (!b) {
        for (; e;) {
          if (c = Ja[--e], c.h === this || c.g === this) {
            e = c.h;
            var p = f = c.g;
            if (c.s) {
              if (e.style.width = c.C, e.src = c.B, Aa(p, c.v), e = c.j) {
                la(e, c.u), Aa(e, "caption jsCap");
              }
            } else {
              if (k = c.o) {
                for (delete c.o; f = E(f);) {
                  if (Ea(f, "caption")) {
                    c.j = f, c.u = f.style.cssText, Z(f, "jsCap");
                  } else {
                    var n = f.tagName.toUpperCase();
                    if ("DIV" === n || "P" === n || "BLOCKQUOT" === n) {
                      break;
                    }
                  }
                }
                f = f.offsetWidth - 4 - 1;
                1600 < f && (f = 1600);
                if (0 < k.indexOf(".bp.blogspot.com/")) {
                  k = k.split("/");
                  n = k.length;
                  if (g = k[n - 2]) {
                    (h = Qa(g.substr(1))) && g === "s" + h ? k[n - 2] = "w" + f : k.splice(n - 1, 0, "w" + f);
                  }
                  k = k.join("/");
                }
                c.A = k;
              }
              c.v = p.className;
              Z(p, "jsPicaLarge");
              e.style.width = "";
              e.src = c.A;
              if (e = c.j) {
                la(e, ""), Z(e, "jsCapLarge");
              }
            }
            c.s = !c.s;
            break;
          }
        }
      }
      if (a) {
        return a.preventDefault(), a.stopPropagation(), ab = !0, !1;
      }
      d.cancelBubble = !0;
      return d.returnValue = !1;
    }
  }
  function fc(a) {
    return Gb(a, !0);
  }
  function pa(a) {
    for (var b = arguments, d = 0, c = b.length; d < c; ++d) {
      if (isFinite(b[d])) {
        return b[d];
      }
    }
    return 0;
  }
  function bb() {
    H && !Hb ? H = !1 : (Ka = pa(t.pageYOffset, aa.scrollTop, A.scrollTop), H ? (La(0, H[0], H[1]), H = !1) : La());
  }
  function La(a, b, d) {
    function c(ba) {
      u = ba;
      if (Ia) {
        x = f + ba + k;
      } else {
        if (Ib) {
          if (0 !== ba) {
            ba -= e - m;
            var ca = Q.offsetWidth;
            x = "position:fixed;width:" + ca + "px;top:" + ba + "px";
          }
        } else {
          x = "position:absolute;left:0;width:100%;top:" + ba + "px";
        }
        if (Ib || 7 > q) {
          ca = ca || Q.offsetWidth, x += ";" + (0 > u ? "clip:rect(" + -u + "px " + ca + "px " + (da - u) + "px 0)" : u + n < m + da ? "clip:rect(0 " + ca + "px " + n + "px 0)" : "clip:rect(0 " + ca + "px " + (e + da - u - m) + "px 0)");
        }
      }
    }
    var e = Ka, f = Ia + ":translate" + (cb ? "3D(0," : "(0,"), k = cb ? "px,0)" : "px)", g = pa(t.innerHeight, aa.offsetHeight), h = Jb, p = h.offsetHeight, n = y.offsetHeight, m = 0, x = "", u = 0, Kb = Q.offsetTop === h.offsetTop, gc = n < p;
    if (Kb) {
      for (; h;) {
        m += h.offsetTop || 0, h = h.offsetParent || h.parentElement;
      }
      h = m + p <= e;
      var hc = e + g <= m, Lb = e < m && m < e + g, Mb = e < m + p && m + p < e + g, ic = Lb && Mb, da = m + p - e < g ? m + p - e : g, db = n <= da;
      if (0 <= b) {
        if (db) {
          return;
        }
        p = b + m + eb;
        if (e + da < d + p) {
          c(e + da - m - b - d);
        } else {
          if (p < e) {
            c(e - m - b);
          } else {
            return;
          }
        }
      } else {
        if (a) {
          if (db) {
            var jc = !0;
          } else {
            u = eb - 60 * a, 0 < a ? (b = e + g - m - n, b = p - n < b ? p - n : b, u = u < b ? b : u) : (b = 0 > e - m ? 0 : e - m, u = b < u ? b : u), c(u);
          }
        } else {
          gc && (Lb || hc ? c(0) : db ? c(e - m) : Mb || h ? c(p - n) : (b = e + g - m - n, c(0 > b ? 0 : b)));
        }
      }
    }
    Ia && x && (x += ";-webkit-overflow-scrolling:touch;");
    la(y, x);
    eb = u;
    return Kb && !ic && !jc;
  }
  function I(a) {
    z && (Ka = pa(t.pageYOffset, aa.scrollTop, A.scrollTop));
    var b = a || event, d = this !== b.target, c = d && pa(b.deltaY, b.wheelDeltaY / 120, b.wheelDelta / -120, b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1));
    if (d && c && La(9 >= c ? -9 >= c ? -3 : c : 3)) {
      if (a) {
        b.preventDefault(), b.stopPropagation();
      } else {
        return b.cancelBubble = !0, b.returnValue = !1;
      }
    }
  }
  function kc(a) {
    for (var b = -1, d; d = fb[++b];) {
      Da(X(d), a.target) && I(a);
    }
  }
  function qa(a) {
    a = a || event;
    var b = a = a.srcElement || a.target, d = 0;
    if (Da(y, a)) {
      for (; y !== a && Da(y, a);) {
        d += a.offsetTop || 0, a = a.offsetParent;
      }
      Hb ? H = [d, b.offsetHeight] : (La(0, d, b.offsetHeight), H = !0, t.scrollTo(pa(t.pageXOffset, aa.scrollLeft, A.scrollLeft), Ka));
    }
  }
  var D = $b, ra = [], zb = !!r.getElementsByTagName, A = r.body, J = A.style, Ma, q = l.Trident || l.TridentMobile, K = l.Tasman, Na = l.EdgeHTML || l.EdgeMobile, w = l.Presto || l.PrestoMobile, z = l.Gecko || l.Fennec, Nb = z && 0 <= l.conpare(l.ENGINE_VERSION, "1.9.1"), gb = l.Goanna, Ba = l.WebKit, Ob = l.SafariMobile || l.iOSWebView, Pb = l.OperaMini && l.UCWEB, Qb = l.Win32 || l.Win64, lc = Qa(ob.userAgent.split("Edg/")[1]), mc = Qa(ob.appVersion.split("Trident/")[1]) + 4, Oa = !q && !K && 
  (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), nc = 5.5 > q, Rb = r.scripts || G("script"), oa = (K ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 9.5 > w || z && !Nb ? "legacy" : "modern") + ".css", oc = .9 > z || l.NDS || l.NDSi || l.N3DS || l.New3DS || l.PSP || l.PSVita || l.PSPGo, ia = [], wb, Ta = 0, Fb, Ia = v(J.transform) ? "transform" : v(J["-o-transform"]) ? 
  "-o-transform" : v(J["-ms-transform"]) ? "-ms-transform" : v(J["-moz-transform"]) ? "-moz-transform" : v(J["-webkit-transform"]) ? "-webkit-transform" : "";
  var P = Rb[Rb.length - 1].src.split("/");
  --P.length;
  (P = P.join("/")) && (P += "/");
  var B = Array.prototype;
  B.pop || (B.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  B.push || (B.push = function() {
    for (var a = arguments, b = 0, d = a.length, c = this.length; b < d; ++b) {
      this[c + b] = a[b];
    }
    return this.length;
  });
  B.shift || (B.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  B.splice || (B.splice = function(a, b) {
    var d = arguments, c = d.length - 2 - b, e = this.slice(a, a + b), f;
    if (0 < c) {
      var k = this.length - 1;
      for (f = a + b; k >= f; --k) {
        this[k + c] = this[k];
      }
    } else {
      if (0 > c) {
        k = a + b;
        for (f = this.length; k < f; ++k) {
          this[k + c] = this[k];
        }
        this.length += c;
      }
    }
    k = 2;
    for (f = d.length; k < f; ++k) {
      this[k - 2 + a] = d[k];
    }
    return e;
  });
  B.indexOf || (B.indexOf = function(a, b) {
    var d = this.length >>> 0;
    if (0 === d) {
      return -1;
    }
    if (b) {
      var c = b || 0;
      c = -Infinity === c ? 0 : (0 > c ? -c : c) | 0;
      if (d <= c) {
        return -1;
      }
    }
    for (c = 0 <= c ? c : 0 < d + c ? d + c : 0; c < d; ++c) {
      if (this[c] === a) {
        return c;
      }
    }
    return -1;
  });
  var wa = [], pb = 999, qb = 0, R;
  if (5 > q || K) {
    t._wdb_onlooptimer = va, va = "_wdb_onlooptimer()";
  }
  ra.push(function() {
    6.1 > Ob && hb(ac);
    sa(rb);
  });
  var U = function(a, b, d) {
    C.length || (M = setTimeout(ea, fa));
    C.push({f:a, p:b, i:++Sb, t:new Date - 0 + (fa < d ? d : fa)});
    return Sb;
  };
  var pc = function(a) {
    for (var b = C.length, d; d = C[--b];) {
      if (d.i === a) {
        C.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var C = [], fa = 64, Sb = 0, M;
  if (5 > q || K) {
    t._wdb_ontimer = ea, ea = "_wdb_ontimer()";
  }
  ra.push(function() {
    6.1 > Ob && hb(bc);
    sa(sb);
  });
  var ib = t.matchMedia, ha = [], tb, V;
  ia.push(function() {
    V = Y(A, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    L(function() {
      tb = !0;
      ha.length && U(ub);
    });
  });
  var L = function(a) {
    ia.push(a);
  };
  var sa = function(a) {
    Tb.push(a);
  };
  var Tb = [], Sa = t.onload, Ub = t.onunload;
  onload = xa;
  onunload = function(a) {
    var b;
    Ub && (b = Ub(a));
    S(Tb, a);
    onunload = D;
    return b;
  };
  var qc = function(a) {
    xb.push(a);
  };
  var xb = [];
  L(function() {
    vb();
    Ra(vb);
  });
  var ta = [], ja, Va, Ua;
  if (10 <= q || Na || Qb && lc) {
    ib("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      ja = Va = a.matches;
      T(ta, ya());
    }), ib("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      ja = Ua = a.matches;
      T(ta, ya());
    }), ib("(-ms-high-contrast:active)").addListener(function(a) {
      ja = a.matches;
      T(ta, ya());
    });
  } else {
    if (10 > q || Qb && (44 <= z || gb)) {
      var Pa = function() {
        function a(e) {
          return "#ffffff" === e || "rgb(255,255,255)" === e;
        }
        var b = r.defaultView, d = Ta, c = b ? b.getComputedStyle(V, null) : V.currentStyle;
        b = (c && c.color || "").split(" ").join("");
        c = (c && c.backgroundColor || "").split(" ").join("");
        if (b) {
          return ja = "#123456" !== b && "rgb(18,52,86)" !== b, Va = ("#000000" === b || "rgb(0,0,0)" === b) && a(c), Ua = a(b) && ("#000000" === c || "rgb(0,0,0)" === c), d !== ya() && T(ta, Ta), !0;
        }
      };
      L(function() {
        V.style.color = "#123456";
        V.style.backgroundColor = "#123456";
        60 > z || gb ? Pa() : Pa() && Ra(Pa, 1E3);
        Pa = null;
      });
    }
  }
  var jb = [];
  L(function() {
    function a(e) {
      S(jb, {l:b[d], m:e});
      d && Vb(a, b[--d].src);
    }
    var b = r.images || G("img"), d = b.length;
    if (9 <= w && 12 > w) {
      d && Vb(a, b[--d].src);
    } else {
      for (; d;) {
        var c = b[--d];
        T(jb, {l:c, m:9 > q ? c.complete : 0 <= c.naturalWidth ? c.naturalWidth : c.width});
      }
    }
  });
  var kb = function(a) {
    yb.push(a);
  };
  var yb = [], lb = t.onresize, W;
  onresize = function(a) {
    var b;
    lb && (b = lb(a));
    !xa && W && (pc(W), W = U(cc));
    return b;
  };
  sa(function() {
    W && clearTimeout(W);
    onresize = lb = D;
  });
  var hb = function(a) {
    Wb.push(a);
  };
  var Wb = [], mb = t.onscroll, Xb = 0;
  onscroll = function(a) {
    var b;
    mb && (b = mb(a));
    xa || S(Wb);
    return b;
  };
  (1 > z || 1.2 <= z && 1.8 > z || 7.2 >= w) && Ra(function() {
    var a = t.scrollY || A.scrollTop;
    Xb !== a && (Xb = a, onscroll());
  });
  sa(function() {
    onscroll = mb = D;
  });
  var ka = G("html")[0];
  var na = G("head")[0];
  var Ca;
  var Yb = oc || "1" === (A.getAttribute("mob") || "");
  oa = (Yb ? "m_" : "") + oa;
  ia.splice(0, 0, function() {
    function a(f) {
      f = f.childNodes;
      for (var k = f.length, g, h, p, n, m; k;) {
        if (g = f[--k], h = g.nodeType, 8 === h) {
          b && F(g);
        } else {
          if (1 === h) {
            switch(h = g.tagName.toUpperCase(), h.replace("/", "")) {
              case "STYLE":
                if (nc ? (p = Db(g)) && (n = Eb(p)) && (!n[0] || !n[0].cssText) : (new Function("$,a,b", "try{$=a($),$=b($),$=$[0];return !$||!$.cssText}catch(e){}"))(g, Db, Eb)) {
                  !d && F(g);
                  break;
                }
                if (8 <= w && 9 > w) {
                  break;
                }
              case "LINK":
                zb && !d && !Da(na, g) && e.push(g);
                break;
              case "META":
                h = g.getAttribute("name") || g.getAttribute("property") || "";
                for (m = c.length; m;) {
                  if (0 === h.indexOf(c[--m])) {
                    F(g);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Cb(g, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Cb(g, "skip-cleanup")) {
                  break;
                }
              case "!":
                F(g);
                break;
              case "HEADER":
              case "MAIN":
              case "NAV":
              case "ARTICLE":
              case "SECTION":
              case "ASIDE":
              case "FIGURE":
              case "FIGCAPTION":
              case "FOOTER":
                9 > q && F(g);
                break;
              default:
                g.childNodes.length && a(g);
            }
          }
        }
      }
      for (; e[0];) {
        p = e.pop(), na.appendChild(p);
      }
    }
    Ma = X("jsMain");
    var b = !(8 > w || 5 > q || K || .9 > z), d = 7 > q, c = ["og:", "twitter:", "fb:"], e = [];
    a(ka);
  });
  9 > q && L(function(a) {
    a = Y(A, "div");
    la(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    Fb = 1 < a.offsetHeight;
    la(a, "");
    F(a);
  });
  var Vb = function(a, b) {
    function d() {
      e || !f || c.complete ? (U(a, !!c.width), c.onerror = c.onload = D, c = a = null) : (--f, U(d));
    }
    var c = new Image, e, f = 99;
    c.onerror = function() {
      e = !0;
    };
    c.onload = function() {
      e = !0;
    };
    c.src = b;
    U(d);
  };
  var Wa, Fa, Ga, N, ma, O, Za;
  L(function() {
    var a = X("blog2slide-start"), b = v(r.onfullscreenchange) ? "" : v(r.onmozfullscreenchange) ? "moz" : v(r.onwebkitfullscreenchange) ? "webkit" : 0;
    Wa = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
    a && (0 !== b || Wa ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', a.firstChild.onclick = dc, a = E(a), Fa = E(a), ma = G("section", a), Ga = za("h1", G("h1")[0].innerHTML), Za = ma.length, ma.splice(0, 0, Ga), 0 !== b ? r["on" + b + "fullscreenchange"] = Xa : q ? r.addEventListener("MSFullscreenChange", Xa, !1) : kb(Xa)) : F(a));
  });
  L(function() {
    function a(k, g, h, p) {
      var n = p ? "div" : "cite";
      if (0 === g.indexOf("urn:isbn:")) {
        g = g.substr(9).toUpperCase().split("-").join("");
        if (13 === g.length) {
          g = g.toString().slice(3, -1);
          for (var m = 0, x = 0; 9 > x; x++) {
            m += (g.charAt(x) - 0) * (10 - x);
          }
          m = (11 - m % 11) % 11;
          m = 10 === m ? "X" : m.toString();
          g += m;
        }
        10 === g.length && (g = "//www.amazon.co.jp/exec/obidos/ASIN/" + g + "/itozyun-22/ref=nosim/");
      }
      g = "<a" + (0 === g.indexOf("http") ? ' target="_blank" rel="nofollow noopener"' : "") + ' hidefocus="true" href="' + g + '">' + k + "</a>";
      (p ? Bb(d.firstChild, n, {className:h}) : Y(d, n, {className:h})).innerHTML = g;
    }
    for (var b = G("blockquote", Ma), d, c = -1, e, f; d = b[++c];) {
      e = d.getAttribute("title") || "", f = d.getAttribute("cite") || "", e && f ? (d.removeAttribute("title"), a(e, f, "js-bqLink", !0)) : f && (d.removeAttribute("cite"), a(t.decodeURI ? decodeURI(f) : f, f, "js-bqCite"));
    }
  });
  10 > q || K || r.write('<link href="' + P + oa + '" rel="stylesheet" type="text/css" media="screen,handheld,projection,tv,print">');
  11 === mc && 5 === q && Y(na, "link", {href:P + oa, rel:"stylesheet", type:"text/css"});
  jb.push(function(a) {
    var b = a.l;
    a = a.m;
    var d = E(b);
    Ea(d, "aBodyRoot") ? a || b.getAttribute("alt") || (b.style.display = "none") : Z(d, a ? "img-loaded" : "img-disabled");
  });
  var Ha;
  ta.push(function(a) {
    a && !Ha ? $a && $a() : a ? na.appendChild(Ha) : F(Ha);
  });
  var Ja = [], ab;
  Pb || (L(function() {
    for (var a = G("A", Ma), b = -1, d, c, e, f; d = a[++b];) {
      Ea(d, "img-disabled") || (e = (c = 1 === Ab(d).length && Ab(d)[0]) && c.tagName.toUpperCase(), "IMG" === e && (e = d.getAttribute("href") || "", f = e.split("?")[0].split("#")[0].split("."), f = (f[f.length - 1] || "").toLowerCase(), 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + f + ".") && (d.onkeydown = c.onclick = Gb, d.onclick = fc, f = 8 > w ? "" : c.offsetWidth - 4 + "px", c.style.width = f, Z(d, "jsPica"), Ja.push({g:d, B:c.src, C:f, o:e, h:c}))));
    }
  }), 525.13 > Ba && (ka.onclick = function(a) {
    if (ab) {
      return ab = !1, a.preventDefault(), !1;
    }
  }), sa(function() {
    for (var a = -1, b; b = Ja[++a];) {
      b.g.onkeydown = b.g.onclick = b.h.onclick = D, b.g.onkeydown = b.g.onclick = b.h.onclick = null;
    }
    ka.onclick = D;
  }));
  var fb = ["jsSidebarFixer1", "jsSidebarFixer2"], Hb = 10 <= q || Na || l.Chromium || Ba, Zb = z || gb || Na, Ib = !(5 > l.SafariMobile || 5 > l.iOSWebView || 2.2 > l.AOSP || 6 > l.Fennec || l.WebOS && 534 > Ba || l.MeeGo || 7 > q || 9 > w), aa, Q, Jb, y, eb = 0, Ka = 0, cb, H, nb = z && 0 <= l.conpare(l.ENGINE_VERSION, "0.9.7");
  for (Yb || Pb || 8 > w || (qc(function(a) {
    if (a && !aa) {
      a = -1;
      var b;
      hb(bb);
      kb(bb);
      aa = "CSS1Compat" !== r.compatMode ? A : ka || A;
      Q = X("jsSide");
      Jb = Ma;
      y = Bb(Q.firstChild, "div", {id:"jsSidebarFixer"});
      for (q || K ? y.onfocusin = qa : Zb ? r.addEventListener("focus", qa, Oa ? {capture:!0, passive:!1} : !0) : y.addEventListener("DOMFocusIn", qa, !1); 1 < Q.childNodes.length;) {
        y.appendChild(Q.childNodes[1]);
      }
      for (; b = fb[++a];) {
        b = X(b), v(b.onwheel) ? Oa ? b.addEventListener("wheel", I, {passive:!1}) : b.onwheel = I : Nb ? b.addEventListener("MozMousePixelScroll", I, !1) : nb || !v(b.onmousewheel) && !w || (b.onmousewheel = I);
      }
      nb && r.addEventListener("DOMMouseScroll", kc, !1);
      cb = !q && !Na && (v(J.perspective) || v(J["-moz-perspective"]) || v(J["-webkit-perspective"]));
      bb();
    }
  }), kb(function() {
    for (var a = -1, b; b = fb[++a];) {
      b = X(b), Oa && b.removeEventListener("wheel", I, {passive:!1}), b.removeEventListener("MozMousePixelScroll", I, !1), b.onwheel = b.onmousewheel = D, b.onwheel = b.onmousewheel = null;
    }
    nb && r.removeEventListener("DOMMouseScroll", I, !1);
    q || K ? (y.onfocusin = D, y.onfocusin = null) : Zb ? r.removeEventListener("focus", qa, Oa ? {capture:!0, passive:!1} : !0) : y.removeEventListener("DOMFocusIn", qa, !1);
  })); ra.length;) {
    ra.shift()();
  }
  ra = null;
})(ua, this, new Function, document, navigator, screen, parseFloat, Number);

