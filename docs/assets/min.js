(function(l, t, Pb, r, cb, ec, Ia, fc, gc) {
  function A(a) {
    return void 0 !== a;
  }
  function qa() {
    for (var a, b = 0; b < ra.length; ++b) {
      a = ra[b], a.f();
    }
  }
  function Ja(a) {
    ra.length || (N = setInterval(qa, db));
    ra.push({f:a, i:++eb});
    return eb;
  }
  function Qb() {
    N && (fb(), N = setInterval(qa, db));
  }
  function fb() {
    N && (N = clearInterval(N));
  }
  function aa() {
    for (var a, b = 0, d = new Date - 0; b < C.length;) {
      d < C[0].t ? ++b : (a = C.splice(b, 1)[0], a.f(a.p));
    }
    I = C.length ? setTimeout(aa, ba) : 0;
  }
  function Rb() {
    I && (gb(), I = setTimeout(aa, ba));
  }
  function gb() {
    I && (I = clearTimeout(I));
  }
  function O(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function P(a, b) {
    hb && !ca.length && Q(ib);
    ca.push(a, b);
  }
  function ib() {
    var a = ca, b;
    for (ca = []; b = a.shift();) {
      O(b, a.shift());
    }
  }
  function sa(a) {
    var b;
    Ka && (b = Ka(a));
    O(da, a);
    onload = D;
    da = sa = Ka = onload = null;
    return b;
  }
  function jb() {
    var a = 9 === R.offsetWidth;
    kb !== a && P(lb, kb = a);
  }
  function ta() {
    return La = ea ? Ma ? 2 : Na ? 3 : 1 : 0;
  }
  function Sb() {
    S = 0;
    O(mb);
  }
  function T(a, b) {
    b = b || r;
    return nb ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function fa(a) {
    return t[a] || r[a] || r.getElementById(a);
  }
  function J(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function ob(a) {
    var b = a.children, d = 0, c, e;
    if (!b) {
      for (b = [], a = a.childNodes, c = a.length; d < c; ++d) {
        1 === (e = a[d]).nodeType && (b[b.length] = e);
      }
    }
    return b;
  }
  function Oa(a, b) {
    var d = r.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function U(a, b, d, c, e) {
    function f() {
      if (d) {
        var p = h, n;
        for (n in d) {
          switch(n) {
            case "class":
            case "className":
              p.className = d[n];
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
      e && !g && h.appendChild(r.createTextNode(e));
    }
    var k = 9 > q, g = "style" === b;
    if (g) {
      if (va) {
        var h = Oa("style");
        h.type = "text/css";
        h.appendChild(r.createTextNode(""));
        h.innerHTML = e;
      } else {
        h = Oa("div", 'a<style type="text/css">' + e + "</style>").lastChild;
      }
    } else {
      h = Oa(b);
    }
    k || f();
    wa ? (2 === wa && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(h, a) : (a.parentElement || a.parentNode).appendChild(h), wa = 0) : a.appendChild(h);
    k && f();
    return h;
  }
  function pb(a, b, d) {
    wa = 1;
    return U(a, b, d, void 0, void 0);
  }
  function xa(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== ha;) {
      if (b = b.parentElement || b.parentNode, a === b) {
        return !0;
      }
    }
  }
  function ia(a, b) {
    if (9 > v) {
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
  function qb(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function ya(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function V(a, b) {
    var d;
    if (!ya(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function rb(a) {
    return a.sheet || a.styleSheet;
  }
  function sb(a) {
    return 10 <= q ? a.cssRules : a.rules || a.cssRules;
  }
  function Pa() {
    za = U(ja, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:K + "hc/" + ka});
    (Aa || 5.5 <= q && 9 > q && tb) && V(z, "jsCanRotate");
    Pa = null;
  }
  function ub(a, b) {
    var d = a || event, c = d.keyCode || d.D, e = Ba.length, f, k, g, h;
    if ("keydown" !== d.type || 13 === c) {
      if (!b) {
        for (; e;) {
          if (c = Ba[--e], c.h === this || c.g === this) {
            e = c.h;
            var p = f = c.g;
            if (c.s) {
              if (e.style.width = c.C, e.src = c.B, p.className = c.v, e = c.j) {
                ia(e, c.u), e.className = "caption jsCap";
              }
            } else {
              if (k = c.o) {
                for (delete c.o; f = f.parentElement || f.parentNode;) {
                  if (ya(f, "caption")) {
                    c.j = f, c.u = f.style.cssText, V(f, "jsCap");
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
                    (h = Ia(g.substr(1))) && g === "s" + h ? k[n - 2] = "w" + f : k.splice(n - 1, 0, "w" + f);
                  }
                  k = k.join("/");
                }
                c.A = k;
              }
              c.v = p.className;
              V(p, "jsPicaLarge");
              e.style.width = "";
              e.src = c.A;
              if (e = c.j) {
                ia(e, ""), V(e, "jsCapLarge");
              }
            }
            c.s = !c.s;
            break;
          }
        }
      }
      if (a) {
        return a.preventDefault(), a.stopPropagation(), Qa = !0, !1;
      }
      d.cancelBubble = !0;
      return d.returnValue = !1;
    }
  }
  function Tb(a) {
    return ub(a, !0);
  }
  function la(a) {
    for (var b = arguments, d = 0, c = b.length; d < c; ++d) {
      if (isFinite(b[d])) {
        return b[d];
      }
    }
    return 0;
  }
  function Ra() {
    E && !vb ? E = !1 : (Ca = la(t.pageYOffset, W.scrollTop, z.scrollTop), E ? (Da(0, E[0], E[1]), E = !1) : Da());
  }
  function Da(a, b, d) {
    function c(X) {
      u = X;
      if (Aa) {
        w = f + X + k;
      } else {
        if (wb) {
          if (0 !== X) {
            X -= e - m;
            var Y = L.offsetWidth;
            w = "position:fixed;width:" + Y + "px;top:" + X + "px";
          }
        } else {
          w = "position:absolute;left:0;width:100%;top:" + X + "px";
        }
        if (wb || 7 > q) {
          Y = Y || L.offsetWidth, w += ";" + (0 > u ? "clip:rect(" + -u + "px " + Y + "px " + (Z - u) + "px 0)" : u + n < m + Z ? "clip:rect(0 " + Y + "px " + n + "px 0)" : "clip:rect(0 " + Y + "px " + (e + Z - u - m) + "px 0)");
        }
      }
    }
    var e = Ca, f = Aa + ":translate" + (Sa ? "3D(0," : "(0,"), k = Sa ? "px,0)" : "px)", g = la(t.innerHeight, W.offsetHeight), h = xb, p = h.offsetHeight, n = x.offsetHeight, m = 0, w = "", u = 0, yb = L.offsetTop === h.offsetTop, Ub = n < p;
    if (yb) {
      for (; h;) {
        m += h.offsetTop || 0, h = h.offsetParent || h.parentElement;
      }
      h = m + p <= e;
      var Vb = e + g <= m, zb = e < m && m < e + g, Ab = e < m + p && m + p < e + g, Wb = zb && Ab, Z = m + p - e < g ? m + p - e : g, Ta = n <= Z;
      if (0 <= b) {
        if (Ta) {
          return;
        }
        p = b + m + Ua;
        if (e + Z < d + p) {
          c(e + Z - m - b - d);
        } else {
          if (p < e) {
            c(e - m - b);
          } else {
            return;
          }
        }
      } else {
        if (a) {
          if (Ta) {
            var Xb = !0;
          } else {
            u = Ua - 60 * a, 0 < a ? (b = e + g - m - n, b = p - n < b ? p - n : b, u = u < b ? b : u) : (b = 0 > e - m ? 0 : e - m, u = b < u ? b : u), c(u);
          }
        } else {
          Ub && (zb || Vb ? c(0) : Ta ? c(e - m) : Ab || h ? c(p - n) : (b = e + g - m - n, c(0 > b ? 0 : b)));
        }
      }
    }
    Aa && w && (w += ";-webkit-overflow-scrolling:touch;");
    ia(x, w);
    Ua = u;
    return yb && !Wb && !Xb;
  }
  function F(a) {
    y && (Ca = la(t.pageYOffset, W.scrollTop, z.scrollTop));
    var b = a || event, d = this !== b.target, c = d && la(b.deltaY, b.wheelDeltaY / 120, b.wheelDelta / -120, b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1));
    if (d && c && Da(9 >= c ? -9 >= c ? -3 : c : 3)) {
      if (a) {
        b.preventDefault(), b.stopPropagation();
      } else {
        return b.cancelBubble = !0, b.returnValue = !1;
      }
    }
  }
  function Yb(a) {
    for (var b = -1, d; d = Va[++b];) {
      xa(fa(d), a.target) && F(a);
    }
  }
  function ma(a) {
    a = a || event;
    var b = a = a.srcElement || a.target, d = 0;
    if (xa(x, a)) {
      for (; x !== a && xa(x, a);) {
        d += a.offsetTop || 0, a = a.offsetParent;
      }
      vb ? E = [d, b.offsetHeight] : (Da(0, d, b.offsetHeight), E = !0, t.scrollTo(la(t.pageXOffset, W.scrollLeft, z.scrollLeft), Ca));
    }
  }
  var D = Pb, na = [], nb = !!r.getElementsByTagName, z = r.body, G = z.style, Ea, q = l.Trident || l.TridentMobile, H = l.Tasman, Fa = l.EdgeHTML || l.EdgeMobile, v = l.Presto || l.PrestoMobile, y = l.Gecko || l.Fennec, Bb = y && 0 <= l.conpare(l.ENGINE_VERSION, "1.9.1"), Wa = l.Goanna, va = l.WebKit, Cb = l.SafariMobile || l.iOSWebView, Db = l.OperaMini && l.UCWEB, Eb = l.Win32 || l.Win64, Zb = Ia(cb.userAgent.split("Edg/")[1]), $b = Ia(cb.appVersion.split("Trident/")[1]) + 4, Ga = !q && !H && 
  (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ac = 5.5 > q, Fb = r.scripts || T("script"), ka = (H ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 9.5 > v || y && !Bb ? "legacy" : "modern") + ".css", bc = .9 > y || l.NDS || l.NDSi || l.N3DS || l.New3DS || l.PSP || l.PSVita || l.PSPGo, da = [], kb, La = 0, tb, Aa = A(G.transform) ? "transform" : A(G["-o-transform"]) ? 
  "-o-transform" : A(G["-ms-transform"]) ? "-ms-transform" : A(G["-moz-transform"]) ? "-moz-transform" : A(G["-webkit-transform"]) ? "-webkit-transform" : "";
  var K = Fb[Fb.length - 1].src.split("/");
  --K.length;
  (K = K.join("/")) && (K += "/");
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
  var ra = [], db = 999, eb = 0, N;
  if (5 > q || H) {
    t._wdb_onlooptimer = qa, qa = "_wdb_onlooptimer()";
  }
  na.push(function() {
    6.1 > Cb && Xa(Qb);
    oa(fb);
  });
  var Q = function(a, b, d) {
    C.length || (I = setTimeout(aa, ba));
    C.push({f:a, p:b, i:++Gb, t:new Date - 0 + (ba < d ? d : ba)});
    return Gb;
  };
  var cc = function(a) {
    for (var b = C.length, d; d = C[--b];) {
      if (d.i === a) {
        C.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var C = [], ba = 64, Gb = 0, I;
  if (5 > q || H) {
    t._wdb_ontimer = aa, aa = "_wdb_ontimer()";
  }
  na.push(function() {
    6.1 > Cb && Xa(Rb);
    oa(gb);
  });
  var Ya = t.matchMedia, ca = [], hb, R;
  da.push(function() {
    R = U(z, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    M(function() {
      hb = !0;
      ca.length && Q(ib);
    });
  });
  var M = function(a) {
    da.push(a);
  };
  var oa = function(a) {
    Hb.push(a);
  };
  var Hb = [], Ka = t.onload, Ib = t.onunload;
  onload = sa;
  onunload = function(a) {
    var b;
    Ib && (b = Ib(a));
    O(Hb, a);
    onunload = D;
    return b;
  };
  var dc = function(a) {
    lb.push(a);
  };
  var lb = [];
  M(function() {
    jb();
    Ja(jb);
  });
  var pa = [], ea, Na, Ma;
  if (10 <= q || Fa || Eb && Zb) {
    Ya("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      ea = Na = a.matches;
      P(pa, ta());
    }), Ya("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      ea = Ma = a.matches;
      P(pa, ta());
    }), Ya("(-ms-high-contrast:active)").addListener(function(a) {
      ea = a.matches;
      P(pa, ta());
    });
  } else {
    if (10 > q || Eb && (44 <= y || Wa)) {
      var Ha = function() {
        function a(e) {
          return "#ffffff" === e || "rgb(255,255,255)" === e;
        }
        var b = r.defaultView, d = La, c = b ? b.getComputedStyle(R, null) : R.currentStyle;
        b = (c && c.color || "").split(" ").join("");
        c = (c && c.backgroundColor || "").split(" ").join("");
        if (b) {
          return ea = "#123456" !== b && "rgb(18,52,86)" !== b, Na = ("#000000" === b || "rgb(0,0,0)" === b) && a(c), Ma = a(b) && ("#000000" === c || "rgb(0,0,0)" === c), d !== ta() && P(pa, La), !0;
        }
      };
      M(function() {
        R.style.color = "#123456";
        R.style.backgroundColor = "#123456";
        60 > y || Wa ? Ha() : Ha() && Ja(Ha, 1E3);
        Ha = null;
      });
    }
  }
  var Za = [];
  M(function() {
    function a(e) {
      O(Za, {l:b[d], m:e});
      d && Jb(a, b[--d].src);
    }
    var b = r.images || T("img"), d = b.length;
    if (9 <= v && 12 > v) {
      d && Jb(a, b[--d].src);
    } else {
      for (; d;) {
        var c = b[--d];
        P(Za, {l:c, m:9 > q ? c.complete : 0 <= c.naturalWidth ? c.naturalWidth : c.width});
      }
    }
  });
  var Kb = function(a) {
    mb.push(a);
  };
  var mb = [], $a = t.onresize, S;
  onresize = function(a) {
    var b;
    $a && (b = $a(a));
    !sa && S && (cc(S), S = Q(Sb));
    return b;
  };
  oa(function() {
    S && clearTimeout(S);
    onresize = $a = D;
  });
  var Xa = function(a) {
    Lb.push(a);
  };
  var Lb = [], ab = t.onscroll, Mb = 0;
  onscroll = function(a) {
    var b;
    ab && (b = ab(a));
    sa || O(Lb);
    return b;
  };
  (1 > y || 1.2 <= y && 1.8 > y || 7.2 >= v) && Ja(function() {
    var a = t.scrollY || z.scrollTop;
    Mb !== a && (Mb = a, onscroll());
  });
  oa(function() {
    onscroll = ab = D;
  });
  var ha = T("html")[0];
  var ja = T("head")[0];
  var wa;
  var Nb = bc || "1" === (z.getAttribute("mob") || "");
  ka = (Nb ? "m_" : "") + ka;
  da.splice(0, 0, function() {
    function a(f) {
      f = f.childNodes;
      for (var k = f.length, g, h, p, n, m; k;) {
        if (g = f[--k], h = g.nodeType, 8 === h) {
          b && J(g);
        } else {
          if (1 === h) {
            switch(h = g.tagName.toUpperCase(), h.replace("/", "")) {
              case "STYLE":
                if (ac ? (p = rb(g)) && (n = sb(p)) && (!n[0] || !n[0].cssText) : (new Function("$,a,b", "try{$=a($),$=b($),$=$[0];return !$||!$.cssText}catch(e){}"))(g, rb, sb)) {
                  !d && J(g);
                  break;
                }
                if (8 <= v && 9 > v) {
                  break;
                }
              case "LINK":
                nb && !d && !xa(ja, g) && e.push(g);
                break;
              case "META":
                h = g.getAttribute("name") || g.getAttribute("property") || "";
                for (m = c.length; m;) {
                  if (0 === h.indexOf(c[--m])) {
                    J(g);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (qb(g, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (qb(g, "skip-cleanup")) {
                  break;
                }
              case "!":
                J(g);
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
                9 > q && J(g);
                break;
              default:
                g.childNodes.length && a(g);
            }
          }
        }
      }
      for (; e[0];) {
        p = e.pop(), ja.appendChild(p);
      }
    }
    Ea = fa("jsMain");
    var b = !(8 > v || 5 > q || H || .9 > y), d = 7 > q, c = ["og:", "twitter:", "fb:"], e = [];
    a(ha);
  });
  9 > q && M(function(a) {
    a = U(z, "div");
    ia(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    tb = 1 < a.offsetHeight;
    ia(a, "");
    J(a);
  });
  var Jb = function(a, b) {
    function d() {
      e || !f || c.complete ? (Q(a, !!c.width), c.onerror = c.onload = D, c = a = null) : (--f, Q(d));
    }
    var c = new Image, e, f = 99;
    c.onerror = function() {
      e = !0;
    };
    c.onload = function() {
      e = !0;
    };
    c.src = b;
    Q(d);
  };
  M(function() {
    function a(k, g, h, p) {
      var n = p ? "div" : "cite";
      if (0 === g.indexOf("urn:isbn:")) {
        g = g.substr(9).toUpperCase().split("-").join("");
        if (13 === g.length) {
          g = g.toString().slice(3, -1);
          for (var m = 0, w = 0; 9 > w; w++) {
            m += (g.charAt(w) - 0) * (10 - w);
          }
          m = (11 - m % 11) % 11;
          m = 10 === m ? "X" : m.toString();
          g += m;
        }
        10 === g.length && (g = "//www.amazon.co.jp/exec/obidos/ASIN/" + g + "/itozyun-22/ref=nosim/");
      }
      g = "<a" + (0 === g.indexOf("http") ? ' target="_blank" rel="nofollow noopener"' : "") + ' hidefocus="true" href="' + g + '">' + k + "</a>";
      (p ? pb(d.firstChild, n, {className:h}) : U(d, n, {className:h})).innerHTML = g;
    }
    for (var b = T("blockquote", Ea), d, c = -1, e, f; d = b[++c];) {
      e = d.getAttribute("title") || "", f = d.getAttribute("cite") || "", e && f ? (d.removeAttribute("title"), a(e, f, "js-bqLink", !0)) : f && (d.removeAttribute("cite"), a(t.decodeURI ? decodeURI(f) : f, f, "js-bqCite"));
    }
  });
  10 > q || H || r.write('<link href="' + K + ka + '" rel="stylesheet" type="text/css" media="screen,handheld,projection,tv,print">');
  11 === $b && 5 === q && U(ja, "link", {href:K + ka, rel:"stylesheet", type:"text/css"});
  Za.push(function(a) {
    var b = a.l;
    a = a.m;
    var d = b.parentElement || b.parentNode;
    ya(d, "aBodyRoot") ? a || b.getAttribute("alt") || (b.style.display = "none") : V(d, a ? "img-loaded" : "img-disabled");
  });
  var za;
  pa.push(function(a) {
    a && !za ? Pa && Pa() : a ? ja.appendChild(za) : J(za);
  });
  var Ba = [], Qa;
  Db || (M(function() {
    for (var a = T("A", Ea), b = -1, d, c, e, f; d = a[++b];) {
      ya(d, "img-disabled") || (e = (c = 1 === ob(d).length && ob(d)[0]) && c.tagName.toUpperCase(), "IMG" === e && (e = d.getAttribute("href") || "", f = e.split("?")[0].split("#")[0].split("."), f = (f[f.length - 1] || "").toLowerCase(), 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + f + ".") && (d.onkeydown = c.onclick = ub, d.onclick = Tb, f = 8 > v ? "" : c.offsetWidth - 4 + "px", c.style.width = f, V(d, "jsPica"), Ba.push({g:d, B:c.src, C:f, o:e, h:c}))));
    }
  }), 525.13 > va && (ha.onclick = function(a) {
    if (Qa) {
      return Qa = !1, a.preventDefault(), !1;
    }
  }), oa(function() {
    for (var a = -1, b; b = Ba[++a];) {
      b.g.onkeydown = b.g.onclick = b.h.onclick = D, b.g.onkeydown = b.g.onclick = b.h.onclick = null;
    }
    ha.onclick = D;
  }));
  var Va = ["jsSidebarFixer1", "jsSidebarFixer2"], vb = 10 <= q || Fa || l.Chromium || va, Ob = y || Wa || Fa, wb = !(5 > l.SafariMobile || 5 > l.iOSWebView || 2.2 > l.AOSP || 6 > l.Fennec || l.WebOS && 534 > va || l.MeeGo || 7 > q || 9 > v), W, L, xb, x, Ua = 0, Ca = 0, Sa, E, bb = y && 0 <= l.conpare(l.ENGINE_VERSION, "0.9.7");
  for (Nb || Db || 8 > v || (dc(function(a) {
    if (a && !W) {
      a = -1;
      var b;
      Xa(Ra);
      Kb(Ra);
      W = "CSS1Compat" !== r.compatMode ? z : ha || z;
      L = fa("jsSide");
      xb = Ea;
      x = pb(L.firstChild, "div", {id:"jsSidebarFixer"});
      for (q || H ? x.onfocusin = ma : Ob ? r.addEventListener("focus", ma, Ga ? {capture:!0, passive:!1} : !0) : x.addEventListener("DOMFocusIn", ma, !1); 1 < L.childNodes.length;) {
        x.appendChild(L.childNodes[1]);
      }
      for (; b = Va[++a];) {
        b = fa(b), A(b.onwheel) ? Ga ? b.addEventListener("wheel", F, {passive:!1}) : b.onwheel = F : Bb ? b.addEventListener("MozMousePixelScroll", F, !1) : bb || !A(b.onmousewheel) && !v || (b.onmousewheel = F);
      }
      bb && r.addEventListener("DOMMouseScroll", Yb, !1);
      Sa = !q && !Fa && (A(G.perspective) || A(G["-moz-perspective"]) || A(G["-webkit-perspective"]));
      Ra();
    }
  }), Kb(function() {
    for (var a = -1, b; b = Va[++a];) {
      b = fa(b), Ga && b.removeEventListener("wheel", F, {passive:!1}), b.removeEventListener("MozMousePixelScroll", F, !1), b.onwheel = b.onmousewheel = D, b.onwheel = b.onmousewheel = null;
    }
    bb && r.removeEventListener("DOMMouseScroll", F, !1);
    q || H ? (x.onfocusin = D, x.onfocusin = null) : Ob ? r.removeEventListener("focus", ma, Ga ? {capture:!0, passive:!1} : !0) : x.removeEventListener("DOMFocusIn", ma, !1);
  })); na.length;) {
    na.shift()();
  }
  na = null;
})(ua, this, new Function, document, navigator, screen, parseFloat, Number);

