(function(k, t, Pb, r, bb, ec, Ha, fc, gc) {
  function A(a) {
    return void 0 !== a;
  }
  function qa() {
    for (var a, b = 0; b < ra.length; ++b) {
      a = ra[b], a.f();
    }
  }
  function Ia(a) {
    ra.length || (O = setInterval(qa, cb));
    ra.push({f:a, i:++db});
    return db;
  }
  function Qb() {
    O && (eb(), O = setInterval(qa, cb));
  }
  function eb() {
    O && (O = clearInterval(O));
  }
  function aa() {
    for (var a, b = 0, d = new Date - 0; b < C.length;) {
      d < C[0].t ? ++b : (a = C.splice(b, 1)[0], a.f(a.p));
    }
    I = C.length ? setTimeout(aa, ba) : 0;
  }
  function Rb() {
    I && (fb(), I = setTimeout(aa, ba));
  }
  function fb() {
    I && (I = clearTimeout(I));
  }
  function P(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function Q(a, b) {
    gb && !ca.length && R(hb);
    ca.push(a, b);
  }
  function hb() {
    var a = ca, b;
    for (ca = []; b = a.shift();) {
      P(b, a.shift());
    }
  }
  function sa(a) {
    var b;
    Ja && (b = Ja(a));
    P(da, a);
    onload = D;
    da = sa = Ja = onload = null;
    return b;
  }
  function ib() {
    var a = 9 === S.offsetWidth;
    jb !== a && Q(kb, jb = a);
  }
  function ta() {
    return Ka = ea ? La ? 2 : Ma ? 3 : 1 : 0;
  }
  function Sb() {
    T = 0;
    P(lb);
  }
  function U(a, b) {
    b = b || r;
    return mb ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function fa(a) {
    return t[a] || r[a] || r.getElementById(a);
  }
  function J(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function nb(a) {
    var b = a.children, d = 0, c, e;
    if (!b) {
      for (b = [], a = a.childNodes, c = a.length; d < c; ++d) {
        1 === (e = a[d]).nodeType && (b[b.length] = e);
      }
    }
    return b;
  }
  function ob(a, b) {
    var d = r.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function V(a, b, d, c, e) {
    function f() {
      if (d) {
        var p = m, n;
        for (n in d) {
          switch(n) {
            case "class":
            case "className":
              K(p, d[n]);
              break;
            default:
              p.setAttribute(n, d[n]);
          }
        }
      }
      if (c) {
        p = m.style;
        for (var l in c) {
          p[l] = c[l];
        }
      }
      e && !g && m.appendChild(r.createTextNode(e));
    }
    var h = 9 > q;
    if ("style" === b) {
      var g = !0, m = ob("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      m = ob(b);
    }
    h || f();
    va ? (2 === va && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(m, a) : (a.parentElement || a.parentNode).appendChild(m), va = 0) : a.appendChild(m);
    h && f();
    return m;
  }
  function pb(a, b, d) {
    va = 1;
    return V(a, b, d, void 0, void 0);
  }
  function wa(a, b) {
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
    if (9 > y) {
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
  function xa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function K(a, b) {
    var d;
    if (!xa(a, b)) {
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
  function Na() {
    ya = V(ja, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:L + "hc/" + ka});
    (za || 5.5 <= q && 9 > q && tb) && K(z, "jsCanRotate");
    Na = null;
  }
  function ub(a, b) {
    var d = a || event, c = d.keyCode || d.D, e = Aa.length, f, h, g, m;
    if ("keydown" !== d.type || 13 === c) {
      if (!b) {
        for (; e;) {
          if (c = Aa[--e], c.h === this || c.g === this) {
            e = c.h;
            var p = f = c.g;
            if (c.s) {
              if (e.style.width = c.C, e.src = c.B, p.className = c.v, e = c.j) {
                ia(e, c.u), e.className = "caption jsCap";
              }
            } else {
              if (h = c.o) {
                for (delete c.o; f = f.parentElement || f.parentNode;) {
                  if (xa(f, "caption")) {
                    c.j = f, c.u = f.style.cssText, K(f, "jsCap");
                  } else {
                    var n = f.tagName.toUpperCase();
                    if ("DIV" === n || "P" === n || "BLOCKQUOT" === n) {
                      break;
                    }
                  }
                }
                f = f.offsetWidth - 4 - 1;
                1600 < f && (f = 1600);
                if (0 < h.indexOf(".bp.blogspot.com/")) {
                  h = h.split("/");
                  n = h.length;
                  if (g = h[n - 2]) {
                    (m = Ha(g.substr(1))) && g === "s" + m ? h[n - 2] = "w" + f : h.splice(n - 1, 0, "w" + f);
                  }
                  h = h.join("/");
                }
                c.A = h;
              }
              c.v = p.className;
              K(p, "jsPicaLarge");
              e.style.width = "";
              e.src = c.A;
              if (e = c.j) {
                ia(e, ""), K(e, "jsCapLarge");
              }
            }
            c.s = !c.s;
            break;
          }
        }
      }
      if (a) {
        return a.preventDefault(), a.stopPropagation(), Oa = !0, !1;
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
  function Pa() {
    E && !vb ? E = !1 : (Ba = la(t.pageYOffset, W.scrollTop, z.scrollTop), E ? (Ca(0, E[0], E[1]), E = !1) : Ca());
  }
  function Ca(a, b, d) {
    function c(X) {
      u = X;
      if (za) {
        v = f + X + h;
      } else {
        if (wb) {
          if (0 !== X) {
            X -= e - l;
            var Y = M.offsetWidth;
            v = "position:fixed;width:" + Y + "px;top:" + X + "px";
          }
        } else {
          v = "position:absolute;left:0;width:100%;top:" + X + "px";
        }
        if (wb || 7 > q) {
          Y = Y || M.offsetWidth, v += ";" + (0 > u ? "clip:rect(" + -u + "px " + Y + "px " + (Z - u) + "px 0)" : u + n < l + Z ? "clip:rect(0 " + Y + "px " + n + "px 0)" : "clip:rect(0 " + Y + "px " + (e + Z - u - l) + "px 0)");
        }
      }
    }
    var e = Ba, f = za + ":translate" + (Qa ? "3D(0," : "(0,"), h = Qa ? "px,0)" : "px)", g = la(t.innerHeight, W.offsetHeight), m = xb, p = m.offsetHeight, n = w.offsetHeight, l = 0, v = "", u = 0, yb = M.offsetTop === m.offsetTop, Ub = n < p;
    if (yb) {
      for (; m;) {
        l += m.offsetTop || 0, m = m.offsetParent || m.parentElement;
      }
      m = l + p <= e;
      var Vb = e + g <= l, zb = e < l && l < e + g, Ab = e < l + p && l + p < e + g, Wb = zb && Ab, Z = l + p - e < g ? l + p - e : g, Ra = n <= Z;
      if (0 <= b) {
        if (Ra) {
          return;
        }
        p = b + l + Sa;
        if (e + Z < d + p) {
          c(e + Z - l - b - d);
        } else {
          if (p < e) {
            c(e - l - b);
          } else {
            return;
          }
        }
      } else {
        if (a) {
          if (Ra) {
            var Xb = !0;
          } else {
            u = Sa - 60 * a, 0 < a ? (b = e + g - l - n, b = p - n < b ? p - n : b, u = u < b ? b : u) : (b = 0 > e - l ? 0 : e - l, u = b < u ? b : u), c(u);
          }
        } else {
          Ub && (zb || Vb ? c(0) : Ra ? c(e - l) : Ab || m ? c(p - n) : (b = e + g - l - n, c(0 > b ? 0 : b)));
        }
      }
    }
    za && v && (v += ";-webkit-overflow-scrolling:touch;");
    ia(w, v);
    Sa = u;
    return yb && !Wb && !Xb;
  }
  function F(a) {
    x && (Ba = la(t.pageYOffset, W.scrollTop, z.scrollTop));
    var b = a || event, d = this !== b.target, c = d && la(b.deltaY, b.wheelDeltaY / 120, b.wheelDelta / -120, b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1));
    if (d && c && Ca(9 >= c ? -9 >= c ? -3 : c : 3)) {
      if (a) {
        b.preventDefault(), b.stopPropagation();
      } else {
        return b.cancelBubble = !0, b.returnValue = !1;
      }
    }
  }
  function Yb(a) {
    for (var b = -1, d; d = Ta[++b];) {
      wa(fa(d), a.target) && F(a);
    }
  }
  function ma(a) {
    a = a || event;
    var b = a = a.srcElement || a.target, d = 0;
    if (wa(w, a)) {
      for (; w !== a && wa(w, a);) {
        d += a.offsetTop || 0, a = a.offsetParent;
      }
      vb ? E = [d, b.offsetHeight] : (Ca(0, d, b.offsetHeight), E = !0, t.scrollTo(la(t.pageXOffset, W.scrollLeft, z.scrollLeft), Ba));
    }
  }
  var D = Pb, na = [], mb = !!r.getElementsByTagName, z = r.body, G = z.style, Da, q = k.Trident || k.TridentMobile, H = k.Tasman, Ea = k.EdgeHTML || k.EdgeMobile, y = k.Presto || k.PrestoMobile, x = k.Gecko, Bb = x && 0 <= k.conpare(k.ENGINE_VERSION, "1.9.1"), Ua = k.Goanna, Va = k.WebKit, Cb = k.SafariMobile || k.iOSWebView, Db = k.OperaMini && k.UCWEB, Eb = k.Win32 || k.Win64, Zb = Ha(bb.userAgent.split("Edg/")[1]), $b = Ha(bb.appVersion.split("Trident/")[1]) + 4, Fa = !q && !H && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  ac = 5.5 > q, Fb = r.scripts || U("script"), ka = (H ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 9.5 > y || x && !Bb ? "legacy" : "modern") + ".css", bc = .9 > x || k.NDS || k.NDSi || k.N3DS || k.New3DS || k.PSP || k.PSVita || k.PSPGo, da = [], jb, Ka = 0, tb, za = A(G.transform) ? "transform" : A(G["-o-transform"]) ? "-o-transform" : A(G["-ms-transform"]) ? "-ms-transform" : A(G["-moz-transform"]) ? "-moz-transform" : A(G["-webkit-transform"]) ? "-webkit-transform" : 
  "";
  var L = Fb[Fb.length - 1].src.split("/");
  --L.length;
  (L = L.join("/")) && (L += "/");
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
      var h = this.length - 1;
      for (f = a + b; h >= f; --h) {
        this[h + c] = this[h];
      }
    } else {
      if (0 > c) {
        h = a + b;
        for (f = this.length; h < f; ++h) {
          this[h + c] = this[h];
        }
        this.length += c;
      }
    }
    h = 2;
    for (f = d.length; h < f; ++h) {
      this[h - 2 + a] = d[h];
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
  var ra = [], cb = 999, db = 0, O;
  if (5 > q || H) {
    t._wdb_onlooptimer = qa, qa = "_wdb_onlooptimer()";
  }
  na.push(function() {
    6.1 > Cb && Wa(Qb);
    oa(eb);
  });
  var R = function(a, b, d) {
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
    6.1 > Cb && Wa(Rb);
    oa(fb);
  });
  var Xa = t.matchMedia, ca = [], gb, S;
  da.push(function() {
    S = V(z, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    N(function() {
      gb = !0;
      ca.length && R(hb);
    });
  });
  var N = function(a) {
    da.push(a);
  };
  var oa = function(a) {
    Hb.push(a);
  };
  var Hb = [], Ja = t.onload, Ib = t.onunload;
  onload = sa;
  onunload = function(a) {
    var b;
    Ib && (b = Ib(a));
    P(Hb, a);
    onunload = D;
    return b;
  };
  var dc = function(a) {
    kb.push(a);
  };
  var kb = [];
  N(function() {
    ib();
    Ia(ib);
  });
  var pa = [], ea, Ma, La;
  if (10 <= q || Ea || Eb && Zb) {
    Xa("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      ea = Ma = a.matches;
      Q(pa, ta());
    }), Xa("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      ea = La = a.matches;
      Q(pa, ta());
    }), Xa("(-ms-high-contrast:active)").addListener(function(a) {
      ea = a.matches;
      Q(pa, ta());
    });
  } else {
    if (10 > q || Eb && (44 <= x || Ua)) {
      var Ga = function() {
        function a(e) {
          return "#ffffff" === e || "rgb(255,255,255)" === e;
        }
        var b = r.defaultView, d = Ka, c = b ? b.getComputedStyle(S, null) : S.currentStyle;
        b = (c && c.color || "").split(" ").join("");
        c = (c && c.backgroundColor || "").split(" ").join("");
        if (b) {
          return ea = "#123456" !== b && "rgb(18,52,86)" !== b, Ma = ("#000000" === b || "rgb(0,0,0)" === b) && a(c), La = a(b) && ("#000000" === c || "rgb(0,0,0)" === c), d !== ta() && Q(pa, Ka), !0;
        }
      };
      N(function() {
        S.style.color = "#123456";
        S.style.backgroundColor = "#123456";
        60 > x || Ua ? Ga() : Ga() && Ia(Ga, 1E3);
        Ga = null;
      });
    }
  }
  var Ya = [];
  N(function() {
    function a(e) {
      P(Ya, {l:b[d], m:e});
      d && Jb(a, b[--d].src);
    }
    var b = r.images || U("img"), d = b.length;
    if (9 <= y && 12 > y) {
      d && Jb(a, b[--d].src);
    } else {
      for (; d;) {
        var c = b[--d];
        Q(Ya, {l:c, m:9 > q ? c.complete : 0 <= c.naturalWidth ? c.naturalWidth : c.width});
      }
    }
  });
  var Kb = function(a) {
    lb.push(a);
  };
  var lb = [], Za = t.onresize, T;
  onresize = function(a) {
    var b;
    Za && (b = Za(a));
    !sa && T && (cc(T), T = R(Sb));
    return b;
  };
  oa(function() {
    T && clearTimeout(T);
    onresize = Za = D;
  });
  var Wa = function(a) {
    Lb.push(a);
  };
  var Lb = [], $a = t.onscroll, Mb = 0;
  onscroll = function(a) {
    var b;
    $a && (b = $a(a));
    sa || P(Lb);
    return b;
  };
  (1 > x || 1.2 <= x && 1.8 > x || 7.2 >= y) && Ia(function() {
    var a = t.scrollY || z.scrollTop;
    Mb !== a && (Mb = a, onscroll());
  });
  oa(function() {
    onscroll = $a = D;
  });
  var ha = U("html")[0];
  var ja = U("head")[0];
  var va;
  var Nb = bc || "1" === (z.getAttribute("mob") || "");
  ka = (Nb ? "m_" : "") + ka;
  da.splice(0, 0, function() {
    function a(f) {
      f = f.childNodes;
      for (var h = f.length, g, m, p, n, l; h;) {
        if (g = f[--h], m = g.nodeType, 8 === m) {
          b && J(g);
        } else {
          if (1 === m) {
            switch(m = g.tagName.toUpperCase(), m.replace("/", "")) {
              case "STYLE":
                if (ac ? (p = rb(g)) && (n = sb(p)) && (!n[0] || !n[0].cssText) : (new Function("$,a,b", "try{$=a($),$=b($),$=$[0];return !$||!$.cssText}catch(e){}"))(g, rb, sb)) {
                  !d && J(g);
                  break;
                }
                if (8 <= y && 9 > y) {
                  break;
                }
              case "LINK":
                mb && !d && !wa(ja, g) && e.push(g);
                break;
              case "META":
                m = g.getAttribute("name") || g.getAttribute("property") || "";
                for (l = c.length; l;) {
                  if (0 === m.indexOf(c[--l])) {
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
    Da = fa("jsMain");
    var b = !(8 > y || 5 > q || H || .9 > x), d = 7 > q, c = ["og:", "twitter:", "fb:"], e = [];
    a(ha);
  });
  9 > q && N(function(a) {
    a = V(z, "div");
    ia(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    tb = 1 < a.offsetHeight;
    ia(a, "");
    J(a);
  });
  var Jb = function(a, b) {
    function d() {
      e || !f || c.complete ? (R(a, !!c.width), c.onerror = c.onload = D, c = a = null) : (--f, R(d));
    }
    var c = new Image, e, f = 99;
    c.onerror = function() {
      e = !0;
    };
    c.onload = function() {
      e = !0;
    };
    c.src = b;
    R(d);
  };
  N(function() {
    function a(h, g, m, p) {
      var n = p ? "div" : "cite";
      if (0 === g.indexOf("urn:isbn:")) {
        g = g.substr(9).toUpperCase().split("-").join("");
        if (13 === g.length) {
          g = g.toString().slice(3, -1);
          for (var l = 0, v = 0; 9 > v; v++) {
            l += (g.charAt(v) - 0) * (10 - v);
          }
          l = (11 - l % 11) % 11;
          l = 10 === l ? "X" : l.toString();
          g += l;
        }
        10 === g.length && (g = "//www.amazon.co.jp/exec/obidos/ASIN/" + g + "/itozyun-22/ref=nosim/");
      }
      g = "<a" + (0 === g.indexOf("http") ? ' target="_blank" rel="nofollow noopener"' : "") + ' hidefocus="true" href="' + g + '">' + h + "</a>";
      (p ? pb(d.firstChild, n, {className:m}) : V(d, n, {className:m})).innerHTML = g;
    }
    for (var b = U("blockquote", Da), d, c = -1, e, f; d = b[++c];) {
      e = d.getAttribute("title") || "", f = d.getAttribute("cite") || "", e && f ? (d.removeAttribute("title"), a(e, f, "js-bqLink", !0)) : f && (d.removeAttribute("cite"), a(t.decodeURI ? decodeURI(f) : f, f, "js-bqCite"));
    }
  });
  10 > q || H || r.write('<link href="' + L + ka + '" rel="stylesheet" type="text/css" media="screen,handheld,projection,tv,print">');
  11 === $b && 5 === q && V(ja, "link", {href:L + ka, rel:"stylesheet", type:"text/css"});
  Ya.push(function(a) {
    var b = a.l;
    a = a.m;
    var d = b.parentElement || b.parentNode;
    xa(d, "aBodyRoot") ? a || b.getAttribute("alt") || (b.style.display = "none") : K(d, a ? "img-loaded" : "img-disabled");
  });
  var ya;
  pa.push(function(a) {
    a && !ya ? Na && Na() : a ? ja.appendChild(ya) : J(ya);
  });
  var Aa = [], Oa;
  Db || (N(function() {
    for (var a = U("A", Da), b = -1, d, c, e, f; d = a[++b];) {
      xa(d, "img-disabled") || (e = (c = 1 === nb(d).length && nb(d)[0]) && c.tagName.toUpperCase(), "IMG" === e && (e = d.getAttribute("href") || "", f = e.split("?")[0].split("#")[0].split("."), f = (f[f.length - 1] || "").toLowerCase(), 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + f + ".") && (d.onkeydown = c.onclick = ub, d.onclick = Tb, f = c.offsetWidth - 4 + "px", c.style.width = f, K(d, "jsPica"), Aa.push({g:d, B:c.src, C:f, o:e, h:c}))));
    }
  }), 525.13 > Va && (ha.onclick = function(a) {
    if (Oa) {
      return Oa = !1, a.preventDefault(), !1;
    }
  }), oa(function() {
    for (var a = -1, b; b = Aa[++a];) {
      b.g.onkeydown = b.g.onclick = b.h.onclick = D, b.g.onkeydown = b.g.onclick = b.h.onclick = null;
    }
    ha.onclick = D;
  }));
  var Ta = ["jsSidebarFixer1", "jsSidebarFixer2"], vb = 10 <= q || Ea || k.Chromium || Va, Ob = x || k.Fennec || Ua || Ea, wb = !(5 > k.SafariMobile || 5 > k.iOSWebView || 2.2 > k.AOSP || 6 > k.Fennec || k.WebOS && 534 > Va || k.MeeGo || 7 > q || 9 > y), W, M, xb, w, Sa = 0, Ba = 0, Qa, E, ab = x && 0 <= k.conpare(k.ENGINE_VERSION, "0.9.7");
  for (Nb || Db || 8 > y || (dc(function(a) {
    if (a && !W) {
      a = -1;
      var b;
      Wa(Pa);
      Kb(Pa);
      W = "CSS1Compat" !== r.compatMode ? z : ha || z;
      M = fa("jsSide");
      xb = Da;
      w = pb(M.firstChild, "div", {id:"jsSidebarFixer"});
      for (q || H ? w.onfocusin = ma : Ob ? r.addEventListener("focus", ma, Fa ? {capture:!0, passive:!1} : !0) : w.addEventListener("DOMFocusIn", ma, !1); 1 < M.childNodes.length;) {
        w.appendChild(M.childNodes[1]);
      }
      for (; b = Ta[++a];) {
        b = fa(b), A(b.onwheel) ? Fa ? b.addEventListener("wheel", F, {passive:!1}) : b.onwheel = F : Bb ? b.addEventListener("MozMousePixelScroll", F, !1) : ab || !A(b.onmousewheel) && !y || (b.onmousewheel = F);
      }
      ab && r.addEventListener("DOMMouseScroll", Yb, !1);
      Qa = !q && !Ea && (A(G.perspective) || A(G["-moz-perspective"]) || A(G["-webkit-perspective"]));
      Pa();
    }
  }), Kb(function() {
    for (var a = -1, b; b = Ta[++a];) {
      b = fa(b), Fa && b.removeEventListener("wheel", F, {passive:!1}), b.removeEventListener("MozMousePixelScroll", F, !1), b.onwheel = b.onmousewheel = D, b.onwheel = b.onmousewheel = null;
    }
    ab && r.removeEventListener("DOMMouseScroll", F, !1);
    q || H ? (w.onfocusin = D, w.onfocusin = null) : Ob ? r.removeEventListener("focus", ma, Fa ? {capture:!0, passive:!1} : !0) : w.removeEventListener("DOMFocusIn", ma, !1);
  })); na.length;) {
    na.shift()();
  }
  na = null;
})(ua, this, new Function, document, navigator, screen, parseFloat, Number);

