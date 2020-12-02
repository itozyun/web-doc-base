(function(I, U, Fa, T, ea, X, ra, S, cb) {
  function Y(a) {
    return void 0 !== a;
  }
  function aa() {
    for (var a, b = 0; b < Pa.length; ++b) {
      a = Pa[b], a.f();
    }
  }
  function ca() {
    sa && (fa(), sa = setInterval(aa, ub));
  }
  function fa() {
    sa && (sa = clearInterval(sa));
  }
  function ka() {
    for (var a, b = 0, c = new Date - 0; b < ha.length;) {
      c < ha[0].t ? ++b : (a = ha.splice(b, 1)[0], a.f(a.p));
    }
    oa = ha.length ? setTimeout(ka, Ga) : 0;
  }
  function Qa() {
    oa && (Ha(), oa = setTimeout(ka, Ga));
  }
  function Ha() {
    oa && (oa = clearTimeout(oa));
  }
  function la(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function ia(a, b) {
    vb && !Ia.length && db(Ra);
    Ia.push(a, b);
  }
  function Ra() {
    var a = Ia, b;
    for (Ia = []; b = a.shift();) {
      la(b, a.shift());
    }
  }
  function pa(a) {
    var b;
    eb && (b = eb(a));
    la(Ja, a);
    onload = E;
    Ja = pa = eb = onload = null;
    return b;
  }
  function Sa() {
    var a = 9 === ta.offsetWidth;
    wb !== a && ia(xb, wb = a);
  }
  function va() {
    return fb = Ka ? gb ? 2 : hb ? 3 : 1 : 0;
  }
  function wa() {
    xa = 0;
    la(yb);
  }
  function ma(a, b) {
    b = b || T;
    return P ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function k(a) {
    return U[a] || T[a] || T.getElementById(a);
  }
  function p(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function r(a) {
    var b = a.children, c = 0, d, m;
    if (!b) {
      for (b = [], a = a.childNodes, d = a.length; c < d; ++c) {
        1 === (m = a[c]).nodeType && (b[b.length] = m);
      }
    }
    return b;
  }
  function g(a, b) {
    var c = T.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function K(a, b, c, d, m) {
    function w(L, J) {
      for (var F in J) {
        switch(F) {
          case "class":
          case "className":
            f(L, J[F]);
            break;
          default:
            L.setAttribute(F, J[F]);
        }
      }
    }
    function t(L, J) {
      var F = L.style, D;
      for (D in J) {
        F[D] = J[D];
      }
    }
    if ("style" === b) {
      var y = !0;
      b = g("div", 'a<style type="text/css">' + m + "</style>").lastChild;
    } else {
      b = g(b);
    }
    Ta ? (2 === Ta && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    Ta = 0;
    c && w(b, c);
    d && t(b, d);
    m && !y && b.appendChild(T.createTextNode(m));
    return b;
  }
  function Q(a, b, c) {
    Ta = 1;
    return K(a, b, c, void 0, void 0);
  }
  function G(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== La;) {
      if (b = b.parentElement || b.parentNode, a === b) {
        return !0;
      }
    }
  }
  function z(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function x(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function f(a, b) {
    var c;
    if (!x(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function C(a) {
    return a.sheet || a.styleSheet;
  }
  function M(a) {
    return 10 <= N ? a.cssRules : a.rules || a.cssRules;
  }
  function H() {
    Ua = K(Ma, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ya + "hc/" + Va});
    (Wa || 5.5 <= N && 9 > N && zb) && f(B, "jsCanRotate");
    H = null;
  }
  function e(a, b) {
    var c = a || event, d = c.keyCode || c.D, m = Xa.length, w, t, y, L;
    if ("keydown" !== c.type || 13 === d) {
      if (!b) {
        for (; m;) {
          if (d = Xa[--m], d.h === this || d.g === this) {
            m = d.h;
            var J = w = d.g;
            if (d.m) {
              if (m.style.width = d.C, m.src = d.B, J.className = d.s, m = d.j) {
                m.style.cssText = d.o, m.className = "caption jsCap";
              }
            } else {
              if (t = d.l) {
                for (delete d.l; w = w.parentElement || w.parentNode;) {
                  if (x(w, "caption")) {
                    d.j = w, d.o = w.style.cssText, f(w, "jsCap");
                  } else {
                    var F = w.tagName.toUpperCase();
                    if ("DIV" === F || "P" === F || "BLOCKQUOT" === F) {
                      break;
                    }
                  }
                }
                w = w.offsetWidth - 4 - 1;
                1600 < w && (w = 1600);
                if (0 < t.indexOf(".bp.blogspot.com/")) {
                  t = t.split("/");
                  F = t.length;
                  if (y = t[F - 2]) {
                    (L = ra(y.substr(1))) && y === "s" + L ? t[F - 2] = "w" + w : t.splice(F - 1, 0, "w" + w);
                  }
                  t = t.join("/");
                }
                d.A = t;
              }
              d.s = J.className;
              f(J, "jsPicaLarge");
              m.style.width = "";
              m.src = d.A;
              if (m = d.j) {
                m.style.cssText = "", f(m, "jsCapLarge");
              }
            }
            d.m = !d.m;
            break;
          }
        }
      }
      if (a) {
        return a.preventDefault(), a.stopPropagation(), ib = !0, !1;
      }
      c.cancelBubble = !0;
      return c.returnValue = !1;
    }
  }
  function q(a) {
    return e(a, !0);
  }
  function l(a) {
    for (var b = arguments, c = 0, d = b.length; c < d; ++c) {
      if (isFinite(b[c])) {
        return b[c];
      }
    }
    return 0;
  }
  function u() {
    na && !Ab ? na = !1 : (Ya = l(U.pageYOffset, za.scrollTop, B.scrollTop), na ? (h(0, na[0], na[1]), na = !1) : h());
  }
  function h(a, b, c) {
    function d(Aa) {
      V = Aa;
      if (Wa) {
        ba = w + Aa + t;
      } else {
        if (Tb) {
          if (0 !== Aa) {
            Aa -= m - D;
            var Za = Ba.offsetWidth;
            ba = "position:fixed;width:" + Za + "px;top:" + Aa + "px;" + (0 > V ? "clip:rect(" + -V + "px " + Za + "px " + (Ca - V) + "px 0)" : V + F < D + Ca ? "clip:rect(0 " + Za + "px " + F + "px 0)" : "clip:rect(0 " + Za + "px " + (m + Ca - V - D) + "px 0)");
          }
        } else {
          ba = "position:absolute;left:0;width:100%;top:" + Aa + "px";
        }
      }
    }
    var m = Ya, w = Wa + ":translate" + (jb ? "3D(0," : "(0,"), t = jb ? "px,0)" : "px)", y = l(U.innerHeight, za.offsetHeight), L = Bb, J = L.offsetHeight, F = Z.offsetHeight, D = 0, ba = "", V = 0, Cb = Ba.offsetTop === L.offsetTop, Ub = F < J;
    if (Cb) {
      for (; L;) {
        D += L.offsetTop || 0, L = L.offsetParent || L.parentElement;
      }
      L = D + J <= m;
      var Vb = m + y <= D, Db = m < D && D < m + y, Eb = m < D + J && D + J < m + y, Wb = Db && Eb, Ca = D + J - m < y ? D + J - m : y, kb = F <= Ca;
      if (0 <= b) {
        if (kb) {
          return;
        }
        J = b + D + lb;
        if (m + Ca < c + J) {
          d(m + Ca - D - b - c);
        } else {
          if (J < m) {
            d(m - D - b);
          } else {
            return;
          }
        }
      } else {
        if (a) {
          if (kb) {
            var Xb = !0;
          } else {
            V = lb - 60 * a, 0 < a ? (b = m + y - D - F, b = J - F < b ? J - F : b, V = V < b ? b : V) : (b = 0 > m - D ? 0 : m - D, V = b < V ? b : V), d(V);
          }
        } else {
          Ub && (Db || Vb ? d(0) : kb ? d(m - D) : Eb || L ? d(J - F) : (b = m + y - D - F, d(0 > b ? 0 : b)));
        }
      }
    }
    Wa && ba && (ba += ";-webkit-overflow-scrolling:touch;");
    Z.style.cssText = ba;
    lb = V;
    return Cb && !Wb && !Xb;
  }
  function n(a) {
    Da && (Ya = l(U.pageYOffset, za.scrollTop, B.scrollTop));
    var b = a || event, c = this !== b.target, d = c && l(b.deltaY, b.wheelDeltaY / 120, b.wheelDelta / -120, b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1));
    if (c && d && h(9 >= d ? -9 >= d ? -3 : d : 3)) {
      if (a) {
        b.preventDefault(), b.stopPropagation();
      } else {
        return b.cancelBubble = !0, b.returnValue = !1;
      }
    }
  }
  function v(a) {
    for (var b = -1, c; c = mb[++b];) {
      G(k(c), a.target) && n(a);
    }
  }
  function A(a) {
    a = a || event;
    var b = a = a.srcElement || a.target, c = 0;
    if (G(Z, a)) {
      for (; Z !== a && G(Z, a);) {
        c += a.offsetTop || 0, a = a.offsetParent;
      }
      Ab ? na = [c, b.offsetHeight] : (h(0, c, b.offsetHeight), na = !0, U.scrollTo(l(U.pageXOffset, za.scrollLeft, B.scrollLeft), Ya));
    }
  }
  var E = Fa, R = [], P = !!T.getElementsByTagName, B = T.body, W = B.style, O, N = I.Trident || I.TridentMobile, ja = I.Tasman, Ea = I.EdgeHTML || I.EdgeMobile, $a = I.Presto || I.PrestoMobile, Da = I.Gecko, Yb = Da && 0 <= I.conpare(I.ENGINE_VERSION, "1.9.1"), nb = I.Goanna, ob = I.WebKit, Fb = I.SafariMobile || I.iOSWebView, Gb = I.OperaMini && I.UCWEB, Hb = I.Win32 || I.Win64, Zb = ra(ea.userAgent.split("Edg/")[1]), $b = ra(ea.appVersion.split("Trident/")[1]) + 4, ab = !N && !ja && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  ac = 5.5 > N, Ib = T.scripts || ma("script"), Va = (ja ? "ie5mac" : 5.5 > N ? "ie5win" : 6 > N ? "ie55" : 10 > N ? "ie" + (N | 0) : "modern") + ".css", Ja = [], wb, fb = 0, zb, Wa = Y(W.transform) ? "transform" : Y(W["-o-transform"]) ? "-o-transform" : Y(W["-ms-transform"]) ? "-ms-transform" : Y(W["-moz-transform"]) ? "-moz-transform" : Y(W["-webkit-transform"]) ? "-webkit-transform" : "";
  var ya = Ib[Ib.length - 1].src.split("/");
  --ya.length;
  (ya = ya.join("/")) && (ya += "/");
  var da = Array.prototype;
  da.pop || (da.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  da.push || (da.push = function() {
    for (var a = arguments, b = 0, c = a.length, d = this.length; b < c; ++b) {
      this[d + b] = a[b];
    }
    return this.length;
  });
  da.shift || (da.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  da.splice || (da.splice = function(a, b) {
    var c = arguments, d = c.length - 2 - b, m = this.slice(a, a + b), w;
    if (0 < d) {
      var t = this.length - 1;
      for (w = a + b; t >= w; --t) {
        this[t + d] = this[t];
      }
    } else {
      if (0 > d) {
        t = a + b;
        for (w = this.length; t < w; ++t) {
          this[t + d] = this[t];
        }
        this.length += d;
      }
    }
    t = 2;
    for (w = c.length; t < w; ++t) {
      this[t - 2 + a] = c[t];
    }
    return m;
  });
  da.indexOf || (da.indexOf = function(a, b) {
    var c = this.length >>> 0;
    if (0 === c) {
      return -1;
    }
    if (b) {
      var d = b || 0;
      d = -Infinity === d ? 0 : (0 > d ? -d : d) | 0;
      if (c <= d) {
        return -1;
      }
    }
    for (d = 0 <= d ? d : 0 < c + d ? c + d : 0; d < c; ++d) {
      if (this[d] === a) {
        return d;
      }
    }
    return -1;
  });
  var Kb = function(a) {
    Pa.length || (sa = setInterval(aa, ub));
    Pa.push({f:a, i:++Jb});
    return Jb;
  };
  var Pa = [], ub = 999, Jb = 0, sa;
  if (5 > N || ja) {
    U._wdb_onlooptimer = aa, aa = "_wdb_onlooptimer()";
  }
  R.push(function() {
    6.1 > Fb && pb(ca);
    Na(fa);
  });
  var db = function(a, b, c) {
    ha.length || (oa = setTimeout(ka, Ga));
    ha.push({f:a, p:b, i:++Lb, t:new Date - 0 + (Ga < c ? c : Ga)});
    return Lb;
  };
  var bc = function(a) {
    for (var b = ha.length, c; c = ha[--b];) {
      if (c.i === a) {
        ha.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ha = [], Ga = 64, Lb = 0, oa;
  if (5 > N || ja) {
    U._wdb_ontimer = ka, ka = "_wdb_ontimer()";
  }
  R.push(function() {
    6.1 > Fb && pb(Qa);
    Na(Ha);
  });
  var qb = U.matchMedia, Ia = [], vb, ta;
  Ja.push(function() {
    ta = K(B, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    qa(function() {
      vb = !0;
      Ia.length && db(Ra);
    });
  });
  var qa = function(a) {
    Ja.push(a);
  };
  var Na = function(a) {
    Mb.push(a);
  };
  var Mb = [], eb = U.onload, Nb = U.onunload;
  onload = pa;
  onunload = function(a) {
    var b;
    Nb && (b = Nb(a));
    la(Mb, a);
    onunload = E;
    return b;
  };
  var cc = function(a) {
    xb.push(a);
  };
  var xb = [];
  qa(function() {
    Sa();
    Kb(Sa);
  });
  var Oa = [], Ka, hb, gb;
  if (10 <= N || Ea || Hb && Zb) {
    qb("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Ka = hb = a.matches;
      ia(Oa, va());
    }), qb("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Ka = gb = a.matches;
      ia(Oa, va());
    }), qb("(-ms-high-contrast:active)").addListener(function(a) {
      Ka = a.matches;
      ia(Oa, va());
    });
  } else {
    if (10 > N || Hb && (44 <= Da || nb)) {
      var bb = function() {
        function a(m) {
          return "#ffffff" === m || "rgb(255,255,255)" === m;
        }
        var b = T.defaultView, c = fb, d = b ? b.getComputedStyle(ta, null) : ta.currentStyle;
        b = (d && d.color || "").split(" ").join("");
        d = (d && d.backgroundColor || "").split(" ").join("");
        if (b) {
          return Ka = "#123456" !== b && "rgb(18,52,86)" !== b, hb = ("#000000" === b || "rgb(0,0,0)" === b) && a(d), gb = a(b) && ("#000000" === d || "rgb(0,0,0)" === d), c !== va() && ia(Oa, fb), !0;
        }
      };
      qa(function() {
        ta.style.color = "#123456";
        ta.style.backgroundColor = "#123456";
        60 > Da || nb ? bb() : bb() && Kb(bb, 1E3);
        bb = null;
      });
    }
  }
  var Ob = [];
  qa(function() {
    for (var a = T.images || ma("img"), b = a.length, c, d; b;) {
      c = a[--b], d = 9 > N ? c.complete : 0 <= c.naturalWidth ? c.naturalWidth : c.width, ia(Ob, {u:c, v:d});
    }
  });
  var Pb = function(a) {
    yb.push(a);
  };
  var yb = [], rb = U.onresize, xa;
  onresize = function(a) {
    var b;
    rb && (b = rb(a));
    !pa && xa && (bc(xa), xa = db(wa));
    return b;
  };
  Na(function() {
    xa && clearTimeout(xa);
    onresize = rb = E;
  });
  var pb = function(a) {
    Qb.push(a);
  };
  var Qb = [], sb = U.onscroll;
  onscroll = function(a) {
    var b;
    sb && (b = sb(a));
    pa || la(Qb);
    return b;
  };
  Na(function() {
    onscroll = sb = E;
  });
  var La = ma("html")[0];
  var Ma = ma("head")[0];
  var Ta;
  var Rb = "1" === (B.getAttribute("mob") || "");
  Va = (Rb ? "m_" : "") + Va;
  Ja.splice(0, 0, function() {
    function a(m) {
      m = m.childNodes;
      for (var w = m.length, t, y, L, J, F; w;) {
        if (t = m[--w], y = t.nodeType, 8 === y) {
          b && p(t);
        } else {
          if (1 === y) {
            switch(y = t.tagName.toUpperCase(), y.replace("/", "")) {
              case "STYLE":
                if (ac ? (L = C(t)) && (J = M(L)) && (!J[0] || !J[0].cssText) : (new Function("$,a,b", "try{$=a($),$=b($),$=$[0];return !$||!$.cssText}catch(e){}"))(t, C, M)) {
                  p(t);
                  break;
                }
                if (8 <= $a && 9 > $a) {
                  break;
                }
              case "LINK":
                P && !G(Ma, t) && d.push(t);
                break;
              case "META":
                y = t.getAttribute("name") || t.getAttribute("property") || "";
                for (F = c.length; F;) {
                  if (0 === y.indexOf(c[--F])) {
                    p(t);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (z(t, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (z(t, "skip-cleanup")) {
                  break;
                }
              case "!":
                p(t);
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
                9 > N && p(t);
                break;
              default:
                t.childNodes.length && a(t);
            }
          }
        }
      }
      for (; d[0];) {
        L = d.pop(), Ma.appendChild(L);
      }
    }
    O = k("jsMain");
    var b = !(8 > $a || 5 > N || ja), c = ["og:", "twitter:", "fb:"], d = [];
    a(La);
  });
  9 > N && qa(function(a) {
    a = K(B, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    zb = 1 < a.offsetHeight;
    a.style.cssText = "";
    p(a);
  });
  qa(function() {
    function a(t, y, L, J) {
      var F = J ? "div" : "cite";
      if (0 === y.indexOf("urn:isbn:")) {
        y = y.substr(9).toUpperCase().split("-").join("");
        if (13 === y.length) {
          y = y.toString().slice(3, -1);
          for (var D = 0, ba = 0; 9 > ba; ba++) {
            D += (y.charAt(ba) - 0) * (10 - ba);
          }
          D = (11 - D % 11) % 11;
          D = 10 === D ? "X" : D.toString();
          y += D;
        }
        10 === y.length && (y = "//www.amazon.co.jp/exec/obidos/ASIN/" + y + "/itozyun-22/ref=nosim/");
      }
      y = "<a" + (0 === y.indexOf("http") ? ' target="_blank" rel="nofollow noopener"' : "") + ' hidefocus="true" href="' + y + '">' + t + "</a>";
      (J ? Q(c.firstChild, F, {className:L}) : K(c, F, {className:L})).innerHTML = y;
    }
    for (var b = ma("blockquote", O), c, d = -1, m, w; c = b[++d];) {
      m = c.getAttribute("title") || "", w = c.getAttribute("cite") || "", m && w ? (c.removeAttribute("title"), a(m, w, "js-bqLink", !0)) : w && (c.removeAttribute("cite"), a(U.decodeURI ? decodeURI(w) : w, w, "js-bqCite"));
    }
  });
  Ob.push(function(a) {
    var b = a.u;
    a = a.v;
    var c = b.parentElement || b.parentNode;
    x(c, "aBodyRoot") ? a || b.getAttribute("alt") || (b.style.display = "none") : f(c, a ? "img-loaded" : "img-disabled");
  });
  var Ua;
  Oa.push(function(a) {
    a && !Ua ? H && H() : a ? Ma.appendChild(Ua) : p(Ua);
  });
  11 === $b && 5.5 > N && K(Ma, "link", {href:ya + Va, rel:"stylesheet", type:"text/css"});
  var Xa = [], ib;
  Gb || (qa(function() {
    for (var a = ma("A", O), b = -1, c, d, m, w; c = a[++b];) {
      x(c, "img-disabled") || (m = (d = 1 === r(c).length && r(c)[0]) && d.tagName.toUpperCase(), "IMG" === m && (m = c.getAttribute("href") || "", w = m.split("?")[0].split("#")[0].split("."), w = (w[w.length - 1] || "").toLowerCase(), 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + w + ".") && (c.onkeydown = d.onclick = e, c.onclick = q, w = d.offsetWidth - 4 + "px", d.style.width = w, f(c, "jsPica"), Xa.push({g:c, B:d.src, C:w, l:m, h:d}))));
    }
  }), 525.13 > ob && (La.onclick = function(a) {
    if (ib) {
      return ib = !1, a.preventDefault(), !1;
    }
  }), Na(function() {
    for (var a = -1, b; b = Xa[++a];) {
      b.g.onkeydown = b.g.onclick = b.h.onclick = E, b.g.onkeydown = b.g.onclick = b.h.onclick = null;
    }
    La.onclick = E;
  }));
  var mb = ["jsSidebarFixer1", "jsSidebarFixer2"], Ab = 10 <= N || Ea || I.Chromium || ob, Sb = Da || I.Fennec || nb || Ea, Tb = !(5 > I.SafariMobile || 5 > I.iOSWebView || 2.2 > I.AOSP || 6 > I.Fennec || I.WebOS && 534 > ob || I.MeeGo || 7 > N), za, Ba, Bb, Z, lb = 0, Ya = 0, jb, na, tb = Da && 0 <= I.conpare(I.ENGINE_VERSION, "0.9.7");
  for (Rb || Gb || (cc(function(a) {
    if (a && !za) {
      a = -1;
      var b;
      pb(u);
      Pb(u);
      za = "CSS1Compat" !== T.compatMode ? B : La || B;
      Ba = k("jsSide");
      Bb = O;
      Z = Q(Ba.firstChild, "div", {id:"jsSidebarFixer"});
      for (N || ja ? Z.onfocusin = A : Sb ? T.addEventListener("focus", A, ab ? {capture:!0, passive:!1} : !0) : Z.addEventListener("DOMFocusIn", A, !1); 1 < Ba.childNodes.length;) {
        Z.appendChild(Ba.childNodes[1]);
      }
      for (; b = mb[++a];) {
        b = k(b), Y(b.onwheel) ? ab ? b.addEventListener("wheel", n, {passive:!1}) : b.onwheel = n : Yb ? b.addEventListener("MozMousePixelScroll", n, !1) : tb || !Y(b.onmousewheel) && !$a || (b.onmousewheel = n);
      }
      tb && T.addEventListener("DOMMouseScroll", v, !1);
      jb = !N && !Ea && (Y(W.perspective) || Y(W["-moz-perspective"]) || Y(W["-webkit-perspective"]));
      u();
    }
  }), Pb(function() {
    for (var a = -1, b; b = mb[++a];) {
      b = k(b), ab && b.removeEventListener("wheel", n, {passive:!1}), b.removeEventListener("MozMousePixelScroll", n, !1), b.onwheel = b.onmousewheel = E, b.onwheel = b.onmousewheel = null;
    }
    tb && T.removeEventListener("DOMMouseScroll", n, !1);
    N || ja ? (Z.onfocusin = E, Z.onfocusin = null) : Sb ? T.removeEventListener("focus", A, ab ? {capture:!0, passive:!1} : !0) : Z.removeEventListener("DOMFocusIn", A, !1);
  })); R.length;) {
    R.shift()();
  }
  R = null;
})(ua, this, new Function, document, navigator, screen, parseFloat, Number);
!function() {
  window.PR_SHOULD_USE_CONTINUATION = !0;
  (function() {
    function I(k) {
      function p(e) {
        var q = e.charCodeAt(0);
        if (92 !== q) {
          return q;
        }
        var l = e.charAt(1);
        return (q = M[l]) ? q : "0" <= l && "7" >= l ? parseInt(e.substring(1), 8) : "u" === l || "x" === l ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
      }
      function r(e) {
        if (32 > e) {
          return (16 > e ? "\\x0" : "\\x") + e.toString(16);
        }
        e = String.fromCharCode(e);
        return "\\" === e || "-" === e || "]" === e || "^" === e ? "\\" + e : e;
      }
      function g(e) {
        var q = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g);
        e = [];
        var l = "^" === q[0], u = ["["];
        l && u.push("^");
        l = l ? 1 : 0;
        for (var h = q.length; l < h; ++l) {
          var n = q[l];
          if (/\\[bdsw]/i.test(n)) {
            u.push(n);
          } else {
            n = p(n);
            var v;
            l + 2 < h && "-" === q[l + 1] ? (v = p(q[l + 2]), l += 2) : v = n;
            e.push([n, v]);
            65 > v || 122 < n || (65 > v || 90 < n || e.push([Math.max(65, n) | 32, Math.min(v, 90) | 32]), 97 > v || 122 < n || e.push([Math.max(97, n) & -33, Math.min(v, 122) & -33]));
          }
        }
        e.sort(function(A, E) {
          return A[0] - E[0] || E[1] - A[1];
        });
        q = [];
        h = [];
        for (l = 0; l < e.length; ++l) {
          n = e[l], n[0] <= h[1] + 1 ? h[1] = Math.max(h[1], n[1]) : q.push(h = n);
        }
        for (l = 0; l < q.length; ++l) {
          n = q[l], u.push(r(n[0])), n[1] > n[0] && (n[1] + 1 > n[0] && u.push("-"), u.push(r(n[1])));
        }
        u.push("]");
        return u.join("");
      }
      function K(e) {
        for (var q = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), l = q.length, u = [], h = 0, n = 0; h < l; ++h) {
          var v = q[h];
          "(" === v ? ++n : "\\" === v.charAt(0) && (v = +v.substring(1)) && (v <= n ? u[v] = -1 : q[h] = r(v));
        }
        for (h = 1; h < u.length; ++h) {
          -1 === u[h] && (u[h] = ++Q);
        }
        for (n = h = 0; h < l; ++h) {
          v = q[h], "(" === v ? (++n, u[n] || (q[h] = "(?:")) : "\\" === v.charAt(0) && (v = +v.substring(1)) && v <= n && (q[h] = "\\" + u[v]);
        }
        for (h = 0; h < l; ++h) {
          "^" === q[h] && "^" !== q[h + 1] && (q[h] = "");
        }
        if (e.ignoreCase && G) {
          for (h = 0; h < l; ++h) {
            v = q[h], e = v.charAt(0), 2 <= v.length && "[" === e ? q[h] = g(v) : "\\" !== e && (q[h] = v.replace(/[A-Za-z]/g, function(A) {
              A = A.charCodeAt(0);
              return "[" + String.fromCharCode(A & -33, A | 32) + "]";
            }));
          }
        }
        return q.join("");
      }
      for (var Q = 0, G = !1, z = !1, x = 0, f = k.length; x < f; ++x) {
        var C = k[x];
        if (C.ignoreCase) {
          z = !0;
        } else {
          if (/[a-z]/i.test(C.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
            G = !0;
            z = !1;
            break;
          }
        }
      }
      var M = {b:8, t:9, n:10, v:11, f:12, r:13}, H = [];
      x = 0;
      for (f = k.length; x < f; ++x) {
        C = k[x];
        if (C.global || C.multiline) {
          throw Error("" + C);
        }
        H.push("(?:" + K(C) + ")");
      }
      return RegExp(H.join("|"), z ? "gi" : "g");
    }
    function U(k, p) {
      function r(x) {
        var f = x.nodeType;
        if (1 == f) {
          if (!g.test(x.className)) {
            for (f = x.firstChild; f; f = f.nextSibling) {
              r(f);
            }
            f = x.nodeName.toLowerCase();
            if ("br" === f || "li" === f) {
              K[z] = "\n", G[z << 1] = Q++, G[z++ << 1 | 1] = x;
            }
          }
        } else {
          if (3 == f || 4 == f) {
            f = x.nodeValue, f.length && (f = p ? f.replace(/\r\n?/g, "\n") : f.replace(/[\t\n\r ]+/g, " "), K[z] = f, G[z << 1] = Q, Q += f.length, G[z++ << 1 | 1] = x);
          }
        }
      }
      var g = /(?:^|\s)nocode(?:\s|$)/, K = [], Q = 0, G = [], z = 0;
      r(k);
      return {a:K.join("").replace(/\n$/, ""), d:G};
    }
    function Fa(k, p, r, g) {
      p && (k = {a:p, e:k}, r(k), g.push.apply(g, k.g));
    }
    function T(k) {
      for (var p = void 0, r = k.firstChild; r; r = r.nextSibling) {
        var g = r.nodeType;
        p = 1 === g ? p ? k : r : 3 === g ? Sa.test(r.nodeValue) ? k : p : p;
      }
      return p === k ? void 0 : p;
    }
    function ea(k, p) {
      function r(G) {
        for (var z = G.e, x = [z, "pln"], f = 0, C = G.a.match(K) || [], M = {}, H = 0, e = C.length; H < e; ++H) {
          var q = C[H], l = M[q], u = void 0;
          if ("string" === typeof l) {
            var h = !1;
          } else {
            var n = g[q.charAt(0)];
            if (n) {
              u = q.match(n[1]), l = n[0];
            } else {
              for (h = 0; h < Q; ++h) {
                if (n = p[h], u = q.match(n[1])) {
                  l = n[0];
                  break;
                }
              }
              u || (l = "pln");
            }
            !(h = 5 <= l.length && "lang-" === l.substring(0, 5)) || u && "string" === typeof u[1] || (h = !1, l = "src");
            h || (M[q] = l);
          }
          n = f;
          f += q.length;
          if (h) {
            h = u[1];
            var v = q.indexOf(h), A = v + h.length;
            u[2] && (A = q.length - u[2].length, v = A - h.length);
            l = l.substring(5);
            Fa(z + n, q.substring(0, v), r, x);
            Fa(z + n + v, h, cb(l, h), x);
            Fa(z + n + A, q.substring(A), r, x);
          } else {
            x.push(z + n, l);
          }
        }
        G.g = x;
      }
      var g = {}, K;
      (function() {
        for (var G = k.concat(p), z = [], x = {}, f = 0, C = G.length; f < C; ++f) {
          var M = G[f], H = M[3];
          if (H) {
            for (var e = H.length; 0 <= --e;) {
              g[H.charAt(e)] = M;
            }
          }
          M = M[1];
          H = "" + M;
          x.hasOwnProperty(H) || (z.push(M), x[H] = null);
        }
        z.push(/[\S\s]/);
        K = I(z);
      })();
      var Q = p.length;
      return r;
    }
    function X(k) {
      var p = [], r = [];
      k.tripleQuotedStrings ? p.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, null, "'\""]) : k.multiLineStrings ? p.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, null, "'\"`"]) : p.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, null, "\"'"]);
      k.verbatimStrings && r.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, null]);
      var g = k.hashComments;
      g && (k.cStyleComments ? (1 < g ? p.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : p.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, null, "#"]), r.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : p.push(["com", /^#[^\n\r]*/, null, "#"]));
      k.cStyleComments && (r.push(["com", /^\/\/[^\n\r]*/, null]), r.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, null]));
      if (g = k.regexLiterals) {
        var K = (g = 1 < g ? "" : "\n\r") ? "." : "[\\S\\s]";
        r.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*" + (g + "])(?:[^/\\x5B\\x5C" + g + "]|\\x5C" + K + "|\\x5B(?:[^\\x5C\\x5D" + g + "]|\\x5C" + K + ")*(?:\\x5D|$))+/)"))]);
      }
      (g = k.types) && r.push(["typ", g]);
      g = ("" + k.keywords).replace(/^ | $/g, "");
      g.length && r.push(["kwd", RegExp("^(?:" + g.replace(/[\s,]+/g, "|") + ")\\b"), null]);
      p.push(["pln", /^\s+/, null, " \r\n\t\u00a0"]);
      g = "^.[^\\s\\w.$@'\"`/\\\\]*";
      k.regexLiterals && (g += "(?!s*/)");
      r.push(["lit", /^@[$_a-z][\w$@]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, null], ["pln", /^[$_a-z][\w$@]*/i, null], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, null, "0123456789"], ["pln", /^\\[\S\s]?/, null], ["pun", RegExp(g), null]);
      return ea(p, r);
    }
    function ra(k, p, r) {
      function g(e) {
        var q = e.nodeType;
        if (1 == q && !Q.test(e.className)) {
          if ("br" === e.nodeName) {
            K(e), e.parentNode && e.parentNode.removeChild(e);
          } else {
            for (e = e.firstChild; e; e = e.nextSibling) {
              g(e);
            }
          }
        } else {
          if ((3 == q || 4 == q) && r) {
            var l = e.nodeValue, u = l.match(G);
            u && (q = l.substring(0, u.index), e.nodeValue = q, (l = l.substring(u.index + u[0].length)) && e.parentNode.insertBefore(z.createTextNode(l), e.nextSibling), K(e), q || e.parentNode.removeChild(e));
          }
        }
      }
      function K(e) {
        function q(u, h) {
          var n = h ? u.cloneNode(!1) : u, v = u.parentNode;
          if (v) {
            v = q(v, 1);
            var A = u.nextSibling;
            v.appendChild(n);
            for (var E = A; E; E = A) {
              A = E.nextSibling, v.appendChild(E);
            }
          }
          return n;
        }
        for (; !e.nextSibling;) {
          if (e = e.parentNode, !e) {
            return;
          }
        }
        e = q(e.nextSibling, 0);
        for (var l; (l = e.parentNode) && 1 === l.nodeType;) {
          e = l;
        }
        f.push(e);
      }
      for (var Q = /(?:^|\s)nocode(?:\s|$)/, G = /\r\n?|\n/, z = k.ownerDocument, x = z.createElement("li"); k.firstChild;) {
        x.appendChild(k.firstChild);
      }
      for (var f = [x], C = 0; C < f.length; ++C) {
        g(f[C]);
      }
      p === (p | 0) && f[0].setAttribute("value", p);
      var M = z.createElement("ol");
      M.className = "linenums";
      p = Math.max(0, p - 1 | 0) || 0;
      C = 0;
      for (var H = f.length; C < H; ++C) {
        x = f[C], x.className = "L" + (C + p) % 10, x.firstChild || x.appendChild(z.createTextNode("\u00a0")), M.appendChild(x);
      }
      k.appendChild(M);
    }
    function S(k, p) {
      for (var r = p.length; 0 <= --r;) {
        var g = p[r];
        wa.hasOwnProperty(g) ? aa.console && console.warn("cannot override language handler %s", g) : wa[g] = k;
      }
    }
    function cb(k, p) {
      k && wa.hasOwnProperty(k) || (k = /^\s*</.test(p) ? "default-markup" : "default-code");
      return wa[k];
    }
    function Y(k) {
      var p = k.h;
      try {
        var r = U(k.c, k.i), g = r.a;
        k.a = g;
        k.d = r.d;
        k.e = 0;
        cb(p, g)(k);
        var K = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
        K = K && 8 >= +K[1];
        p = /\n/g;
        var Q = k.a, G = Q.length;
        r = 0;
        var z = k.d, x = z.length;
        g = 0;
        var f = k.g, C = f.length, M = 0;
        f[C] = G;
        var H, e;
        for (e = H = 0; e < C;) {
          f[e] !== f[e + 2] ? (f[H++] = f[e++], f[H++] = f[e++]) : e += 2;
        }
        C = H;
        for (e = H = 0; e < C;) {
          for (var q = f[e], l = f[e + 1], u = e + 2; u + 2 <= C && f[u + 1] === l;) {
            u += 2;
          }
          f[H++] = q;
          f[H++] = l;
          e = u;
        }
        f.length = H;
        var h = k.c;
        if (h) {
          var n = h.style.display;
          h.style.display = "none";
        }
        try {
          for (; g < x;) {
            var v = z[g + 2] || G, A = f[M + 2] || G;
            u = Math.min(v, A);
            var E = z[g + 1], R;
            if (1 !== E.nodeType && (R = Q.substring(r, u))) {
              K && (R = R.replace(p, "\r"));
              E.nodeValue = R;
              var P = E.ownerDocument, B = P.createElement("span");
              B.className = f[M + 1];
              var W = E.parentNode;
              W.replaceChild(B, E);
              B.appendChild(E);
              r < v && (z[g + 1] = E = P.createTextNode(Q.substring(u, v)), W.insertBefore(E, B.nextSibling));
            }
            r = u;
            r >= v && (g += 2);
            r >= A && (M += 2);
          }
        } finally {
          h && (h.style.display = n);
        }
      } catch (O) {
        aa.console && console.log(O && O.stack || O);
      }
    }
    var aa = window, ca = ["break,continue,do,else,for,if,return,while"], fa = [[ca, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], ka = [fa, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], 
    Qa = [fa, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"], Ha = [Qa, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"];
    fa = [fa, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"];
    var la = [ca, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], ia = [ca, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], Ra = [ca, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"];
    ca = [ca, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"];
    var pa = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/, Sa = /\S/, va = X({keywords:[ka, Ha, fa, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", la, ia, ca], hashComments:!0, cStyleComments:!0, multiLineStrings:!0, regexLiterals:!0}), wa = {};
    S(va, ["default-code"]);
    S(ea([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^\x3c!--[\S\s]*?(?:--\x3e|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), "default-markup htm html mxml xhtml xml xsl".split(" "));
    S(ea([["pln", /^\s+/, null, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, null, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), 
    ["in.tag"]);
    S(ea([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
    S(X({keywords:ka, hashComments:!0, cStyleComments:!0, types:pa}), "c cc cpp cxx cyc m".split(" "));
    S(X({keywords:"null,true,false"}), ["json"]);
    S(X({keywords:Ha, hashComments:!0, cStyleComments:!0, verbatimStrings:!0, types:pa}), ["cs"]);
    S(X({keywords:Qa, cStyleComments:!0}), ["java"]);
    S(X({keywords:ca, hashComments:!0, multiLineStrings:!0}), ["bash", "bsh", "csh", "sh"]);
    S(X({keywords:la, hashComments:!0, multiLineStrings:!0, tripleQuotedStrings:!0}), ["cv", "py", "python"]);
    S(X({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", hashComments:!0, multiLineStrings:!0, regexLiterals:2}), ["perl", "pl", "pm"]);
    S(X({keywords:ia, hashComments:!0, multiLineStrings:!0, regexLiterals:!0}), ["rb", "ruby"]);
    S(X({keywords:fa, cStyleComments:!0, regexLiterals:!0}), ["javascript", "js"]);
    S(X({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments:3, cStyleComments:!0, multilineStrings:!0, tripleQuotedStrings:!0, regexLiterals:!0}), ["coffee"]);
    S(X({keywords:Ra, cStyleComments:!0, multilineStrings:!0}), ["rc", "rs", "rust"]);
    S(ea([], [["str", /^[\S\s]+/]]), ["regex"]);
    var ma = aa.PR = {createSimpleLexer:ea, registerLangHandler:S, sourceDecorator:X, PR_ATTRIB_NAME:"atn", PR_ATTRIB_VALUE:"atv", PR_COMMENT:"com", PR_DECLARATION:"dec", PR_KEYWORD:"kwd", PR_LITERAL:"lit", PR_NOCODE:"nocode", PR_PLAIN:"pln", PR_PUNCTUATION:"pun", PR_SOURCE:"src", PR_STRING:"str", PR_TAG:"tag", PR_TYPE:"typ", prettyPrintOne:aa.prettyPrintOne = function(k, p, r) {
      var g = document.createElement("div");
      g.innerHTML = "<pre>" + k + "</pre>";
      g = g.firstChild;
      r && ra(g, r, !0);
      Y({h:p, j:r, c:g, i:1});
      return g.innerHTML;
    }, prettyPrint:aa.prettyPrint = function(k, p) {
      function r() {
        for (var v = aa.PR_SHOULD_USE_CONTINUATION ? f.now() + 250 : Infinity; C < Q.length && f.now() < v; C++) {
          for (var A = Q[C], E = n, R = A; R = R.previousSibling;) {
            var P = R.nodeType, B = (7 === P || 8 === P) && R.nodeValue;
            if (B ? !/^\??prettify\b/.test(B) : 3 !== P || /\S/.test(R.nodeValue)) {
              break;
            }
            if (B) {
              E = {};
              B.replace(/\b(\w+)=([\w%+\-.:]+)/g, function(N, ja, Ea) {
                E[ja] = Ea;
              });
              break;
            }
          }
          R = A.className;
          if ((E !== n || e.test(R)) && !q.test(R)) {
            P = !1;
            for (B = A.parentNode; B; B = B.parentNode) {
              if (h.test(B.tagName) && B.className && e.test(B.className)) {
                P = !0;
                break;
              }
            }
            if (!P) {
              A.className += " prettyprinted";
              P = E.lang;
              if (!P) {
                P = R.match(H);
                var W;
                !P && (W = T(A)) && u.test(W.tagName) && (P = W.className.match(H));
                P && (P = P[1]);
              }
              if (l.test(A.tagName)) {
                B = 1;
              } else {
                B = A.currentStyle;
                var O = K.defaultView;
                B = (B = B ? B.whiteSpace : O && O.getComputedStyle ? O.getComputedStyle(A, null).getPropertyValue("white-space") : 0) && "pre" === B.substring(0, 3);
              }
              O = E.linenums;
              (O = "true" === O || +O) || (O = (O = R.match(/\blinenums\b(?::(\d+))?/)) ? O[1] && O[1].length ? +O[1] : !0 : !1);
              O && ra(A, O, B);
              M = {h:P, c:A, j:O, i:B};
              Y(M);
            }
          }
        }
        C < Q.length ? setTimeout(r, 250) : "function" === typeof k && k();
      }
      var g = p || document.body, K = g.ownerDocument || document;
      g = [g.getElementsByTagName("pre"), g.getElementsByTagName("code"), g.getElementsByTagName("xmp")];
      for (var Q = [], G = 0; G < g.length; ++G) {
        for (var z = 0, x = g[G].length; z < x; ++z) {
          Q.push(g[G][z]);
        }
      }
      g = null;
      var f = Date;
      f.now || (f = {now:function() {
        return +new Date;
      }});
      var C = 0, M, H = /\blang(?:uage)?-([\w.]+)(?!\S)/, e = /\bprettyprint\b/, q = /\bprettyprinted\b/, l = /pre|xmp/i, u = /^code$/i, h = /^(?:pre|code|xmp)$/i, n = {};
      r();
    }};
    "function" === typeof define && define.amd && define("google-code-prettify", [], function() {
      return ma;
    });
  })();
}();
PR.registerLangHandler(PR.createSimpleLexer([["pln", /^[\t\n\f\r ]+/, null, " \t\r\n\f"]], [["str", /^"(?:[^\n\f\r"\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*"/, null], ["str", /^'(?:[^\n\f\r'\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*'/, null], ["lang-css-str", /^url\(([^"')]+)\)/i], ["kwd", /^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=[^\w-]|$)/i, null], ["lang-css-kw", /^(-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*)\s*:/i], ["com", /^\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//], ["com", /^(?:\x3c!--|--\x3e)/], 
["lit", /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i], ["lit", /^#[\da-f]{3,6}\b/i], ["pln", /^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i], ["pun", /^[^\s\w"']+/]]), ["css"]);
PR.registerLangHandler(PR.createSimpleLexer([], [["kwd", /^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i]]), ["css-kw"]);
PR.registerLangHandler(PR.createSimpleLexer([], [["str", /^[^"')]+/]]), ["css-str"]);
(!ua.Gecko && !ua.Trident && !ua.TridentMobile || 1 < ua.Gecko || 5.5 <= (ua.Trident || ua.TridentMobile)) && prettyPrint();

