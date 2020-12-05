(function(k, t, Ob, r, bb, ec, Ha, fc, gc) {
  function A(a) {
    return void 0 !== a;
  }
  function pa() {
    for (var a, b = 0; b < qa.length; ++b) {
      a = qa[b], a.f();
    }
  }
  function Ia(a) {
    qa.length || (O = setInterval(pa, cb));
    qa.push({f:a, i:++db});
    return db;
  }
  function Pb() {
    O && (eb(), O = setInterval(pa, cb));
  }
  function eb() {
    O && (O = clearInterval(O));
  }
  function Z() {
    for (var a, b = 0, d = new Date - 0; b < C.length;) {
      d < C[0].t ? ++b : (a = C.splice(b, 1)[0], a.f(a.p));
    }
    I = C.length ? setTimeout(Z, aa) : 0;
  }
  function Qb() {
    I && (fb(), I = setTimeout(Z, aa));
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
    gb && !ba.length && R(hb);
    ba.push(a, b);
  }
  function hb() {
    var a = ba, b;
    for (ba = []; b = a.shift();) {
      P(b, a.shift());
    }
  }
  function ra(a) {
    var b;
    Ja && (b = Ja(a));
    P(ca, a);
    onload = D;
    ca = ra = Ja = onload = null;
    return b;
  }
  function ib() {
    var a = 9 === S.offsetWidth;
    jb !== a && Q(kb, jb = a);
  }
  function sa() {
    return Ka = da ? La ? 2 : Ma ? 3 : 1 : 0;
  }
  function Rb() {
    T = 0;
    P(lb);
  }
  function U(a, b) {
    b = b || r;
    return mb ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function ea(a) {
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
    function g() {
      if (d) {
        var p = n, m;
        for (m in d) {
          switch(m) {
            case "class":
            case "className":
              K(p, d[m]);
              break;
            default:
              p.setAttribute(m, d[m]);
          }
        }
      }
      if (c) {
        p = n.style;
        for (var l in c) {
          p[l] = c[l];
        }
      }
      e && !h && n.appendChild(r.createTextNode(e));
    }
    var f = 9 > q;
    if ("style" === b) {
      var h = !0, n = ob("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      n = ob(b);
    }
    f || g();
    ta ? (2 === ta && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(n, a) : (a.parentElement || a.parentNode).appendChild(n), ta = 0) : a.appendChild(n);
    f && g();
    return n;
  }
  function pb(a, b, d) {
    ta = 1;
    return V(a, b, d, void 0, void 0);
  }
  function va(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== fa;) {
      if (b = b.parentElement || b.parentNode, a === b) {
        return !0;
      }
    }
  }
  function ha(a, b) {
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
  function wa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function K(a, b) {
    var d;
    if (!wa(a, b)) {
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
    xa = V(ia, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:L + "hc/" + ja});
    (ya || 5.5 <= q && 9 > q && tb) && K(v, "jsCanRotate");
    Na = null;
  }
  function ub(a, b) {
    var d = a || event, c = d.keyCode || d.D, e = za.length, g, f, h, n;
    if ("keydown" !== d.type || 13 === c) {
      if (!b) {
        for (; e;) {
          if (c = za[--e], c.h === this || c.g === this) {
            e = c.h;
            var p = g = c.g;
            if (c.s) {
              if (e.style.width = c.C, e.src = c.B, p.className = c.v, e = c.j) {
                ha(e, c.u), e.className = "caption jsCap";
              }
            } else {
              if (f = c.o) {
                for (delete c.o; g = g.parentElement || g.parentNode;) {
                  if (wa(g, "caption")) {
                    c.j = g, c.u = g.style.cssText, K(g, "jsCap");
                  } else {
                    var m = g.tagName.toUpperCase();
                    if ("DIV" === m || "P" === m || "BLOCKQUOT" === m) {
                      break;
                    }
                  }
                }
                g = g.offsetWidth - 4 - 1;
                1600 < g && (g = 1600);
                if (0 < f.indexOf(".bp.blogspot.com/")) {
                  f = f.split("/");
                  m = f.length;
                  if (h = f[m - 2]) {
                    (n = Ha(h.substr(1))) && h === "s" + n ? f[m - 2] = "w" + g : f.splice(m - 1, 0, "w" + g);
                  }
                  f = f.join("/");
                }
                c.A = f;
              }
              c.v = p.className;
              K(p, "jsPicaLarge");
              e.style.width = "";
              e.src = c.A;
              if (e = c.j) {
                ha(e, ""), K(e, "jsCapLarge");
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
  function Sb(a) {
    return ub(a, !0);
  }
  function ka(a) {
    for (var b = arguments, d = 0, c = b.length; d < c; ++d) {
      if (isFinite(b[d])) {
        return b[d];
      }
    }
    return 0;
  }
  function Pa() {
    E && !vb ? E = !1 : (Aa = ka(t.pageYOffset, M.scrollTop, v.scrollTop), E ? (Ba(0, E[0], E[1]), E = !1) : Ba());
  }
  function Ba(a, b, d) {
    function c(W) {
      u = W;
      if (ya) {
        z = g + W + f;
      } else {
        if (Tb) {
          if (0 !== W) {
            W -= e - l;
            var Ca = X.offsetWidth;
            z = "position:fixed;width:" + Ca + "px;top:" + W + "px;" + (0 > u ? "clip:rect(" + -u + "px " + Ca + "px " + (Y - u) + "px 0)" : u + m < l + Y ? "clip:rect(0 " + Ca + "px " + m + "px 0)" : "clip:rect(0 " + Ca + "px " + (e + Y - u - l) + "px 0)");
          }
        } else {
          z = "position:absolute;left:0;width:100%;top:" + W + "px";
        }
      }
    }
    var e = Aa, g = ya + ":translate" + (Qa ? "3D(0," : "(0,"), f = Qa ? "px,0)" : "px)", h = ka(t.innerHeight, M.offsetHeight), n = wb, p = n.offsetHeight, m = w.offsetHeight, l = 0, z = "", u = 0, xb = X.offsetTop === n.offsetTop, Ub = m < p;
    if (xb) {
      for (; n;) {
        l += n.offsetTop || 0, n = n.offsetParent || n.parentElement;
      }
      n = l + p <= e;
      var Vb = e + h <= l, yb = e < l && l < e + h, zb = e < l + p && l + p < e + h, Wb = yb && zb, Y = l + p - e < h ? l + p - e : h, Ra = m <= Y;
      if (0 <= b) {
        if (Ra) {
          return;
        }
        p = b + l + Sa;
        if (e + Y < d + p) {
          c(e + Y - l - b - d);
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
            u = Sa - 60 * a, 0 < a ? (b = e + h - l - m, b = p - m < b ? p - m : b, u = u < b ? b : u) : (b = 0 > e - l ? 0 : e - l, u = b < u ? b : u), c(u);
          }
        } else {
          Ub && (yb || Vb ? c(0) : Ra ? c(e - l) : zb || n ? c(p - m) : (b = e + h - l - m, c(0 > b ? 0 : b)));
        }
      }
    }
    ya && z && (z += ";-webkit-overflow-scrolling:touch;");
    ha(w, z);
    Sa = u;
    return xb && !Wb && !Xb;
  }
  function F(a) {
    x && (Aa = ka(t.pageYOffset, M.scrollTop, v.scrollTop));
    var b = a || event, d = this !== b.target, c = d && ka(b.deltaY, b.wheelDeltaY / 120, b.wheelDelta / -120, b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1));
    if (d && c && Ba(9 >= c ? -9 >= c ? -3 : c : 3)) {
      if (a) {
        b.preventDefault(), b.stopPropagation();
      } else {
        return b.cancelBubble = !0, b.returnValue = !1;
      }
    }
  }
  function Yb(a) {
    for (var b = -1, d; d = Ta[++b];) {
      va(ea(d), a.target) && F(a);
    }
  }
  function la(a) {
    a = a || event;
    var b = a = a.srcElement || a.target, d = 0;
    if (va(w, a)) {
      for (; w !== a && va(w, a);) {
        d += a.offsetTop || 0, a = a.offsetParent;
      }
      vb ? E = [d, b.offsetHeight] : (Ba(0, d, b.offsetHeight), E = !0, t.scrollTo(ka(t.pageXOffset, M.scrollLeft, v.scrollLeft), Aa));
    }
  }
  var D = Ob, ma = [], mb = !!r.getElementsByTagName, v = r.body, G = v.style, Da, q = k.Trident || k.TridentMobile, H = k.Tasman, Ea = k.EdgeHTML || k.EdgeMobile, y = k.Presto || k.PrestoMobile, x = k.Gecko, Ab = x && 0 <= k.conpare(k.ENGINE_VERSION, "1.9.1"), Ua = k.Goanna, Va = k.WebKit, Bb = k.SafariMobile || k.iOSWebView, Cb = k.OperaMini && k.UCWEB, Db = k.Win32 || k.Win64, Zb = Ha(bb.userAgent.split("Edg/")[1]), $b = Ha(bb.appVersion.split("Trident/")[1]) + 4, Fa = !q && !H && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  ac = 5.5 > q, Eb = r.scripts || U("script"), ja = (H ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 9.5 > y || x && !Ab ? "legacy" : "modern") + ".css", bc = .9 > x || k.NDS || k.NDSi || k.N3DS || k.New3DS || k.PSP || k.PSVita || k.PSPGo, ca = [], jb, Ka = 0, tb, ya = A(G.transform) ? "transform" : A(G["-o-transform"]) ? "-o-transform" : A(G["-ms-transform"]) ? "-ms-transform" : A(G["-moz-transform"]) ? "-moz-transform" : A(G["-webkit-transform"]) ? "-webkit-transform" : 
  "";
  var L = Eb[Eb.length - 1].src.split("/");
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
    var d = arguments, c = d.length - 2 - b, e = this.slice(a, a + b), g;
    if (0 < c) {
      var f = this.length - 1;
      for (g = a + b; f >= g; --f) {
        this[f + c] = this[f];
      }
    } else {
      if (0 > c) {
        f = a + b;
        for (g = this.length; f < g; ++f) {
          this[f + c] = this[f];
        }
        this.length += c;
      }
    }
    f = 2;
    for (g = d.length; f < g; ++f) {
      this[f - 2 + a] = d[f];
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
  var qa = [], cb = 999, db = 0, O;
  if (5 > q || H) {
    t._wdb_onlooptimer = pa, pa = "_wdb_onlooptimer()";
  }
  ma.push(function() {
    6.1 > Bb && Wa(Pb);
    na(eb);
  });
  var R = function(a, b, d) {
    C.length || (I = setTimeout(Z, aa));
    C.push({f:a, p:b, i:++Fb, t:new Date - 0 + (aa < d ? d : aa)});
    return Fb;
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
  var C = [], aa = 64, Fb = 0, I;
  if (5 > q || H) {
    t._wdb_ontimer = Z, Z = "_wdb_ontimer()";
  }
  ma.push(function() {
    6.1 > Bb && Wa(Qb);
    na(fb);
  });
  var Xa = t.matchMedia, ba = [], gb, S;
  ca.push(function() {
    S = V(v, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    N(function() {
      gb = !0;
      ba.length && R(hb);
    });
  });
  var N = function(a) {
    ca.push(a);
  };
  var na = function(a) {
    Gb.push(a);
  };
  var Gb = [], Ja = t.onload, Hb = t.onunload;
  onload = ra;
  onunload = function(a) {
    var b;
    Hb && (b = Hb(a));
    P(Gb, a);
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
  var oa = [], da, Ma, La;
  if (10 <= q || Ea || Db && Zb) {
    Xa("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      da = Ma = a.matches;
      Q(oa, sa());
    }), Xa("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      da = La = a.matches;
      Q(oa, sa());
    }), Xa("(-ms-high-contrast:active)").addListener(function(a) {
      da = a.matches;
      Q(oa, sa());
    });
  } else {
    if (10 > q || Db && (44 <= x || Ua)) {
      var Ga = function() {
        function a(e) {
          return "#ffffff" === e || "rgb(255,255,255)" === e;
        }
        var b = r.defaultView, d = Ka, c = b ? b.getComputedStyle(S, null) : S.currentStyle;
        b = (c && c.color || "").split(" ").join("");
        c = (c && c.backgroundColor || "").split(" ").join("");
        if (b) {
          return da = "#123456" !== b && "rgb(18,52,86)" !== b, Ma = ("#000000" === b || "rgb(0,0,0)" === b) && a(c), La = a(b) && ("#000000" === c || "rgb(0,0,0)" === c), d !== sa() && Q(oa, Ka), !0;
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
      d && Ib(a, b[--d].src);
    }
    var b = r.images || U("img"), d = b.length;
    if (9 <= y && 12 > y) {
      d && Ib(a, b[--d].src);
    } else {
      for (; d;) {
        var c = b[--d];
        Q(Ya, {l:c, m:9 > q ? c.complete : 0 <= c.naturalWidth ? c.naturalWidth : c.width});
      }
    }
  });
  var Jb = function(a) {
    lb.push(a);
  };
  var lb = [], Za = t.onresize, T;
  onresize = function(a) {
    var b;
    Za && (b = Za(a));
    !ra && T && (cc(T), T = R(Rb));
    return b;
  };
  na(function() {
    T && clearTimeout(T);
    onresize = Za = D;
  });
  var Wa = function(a) {
    Kb.push(a);
  };
  var Kb = [], $a = t.onscroll, Lb = 0;
  onscroll = function(a) {
    var b;
    $a && (b = $a(a));
    ra || P(Kb);
    return b;
  };
  (1 > x || 1.2 <= x && 1.8 > x || 7.2 >= y) && Ia(function() {
    var a = t.scrollY || v.scrollTop;
    Lb !== a && (r.title = t.pageYOffset || M.scrollTop || v.scrollTop || "scroll", Lb = a, onscroll());
  });
  na(function() {
    onscroll = $a = D;
  });
  var fa = U("html")[0];
  var ia = U("head")[0];
  var ta;
  var Mb = bc || "1" === (v.getAttribute("mob") || "");
  ja = (Mb ? "m_" : "") + ja;
  ca.splice(0, 0, function() {
    function a(e) {
      e = e.childNodes;
      for (var g = e.length, f, h, n, p, m; g;) {
        if (f = e[--g], h = f.nodeType, 8 === h) {
          b && J(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h.replace("/", "")) {
              case "STYLE":
                if (ac ? (n = rb(f)) && (p = sb(n)) && (!p[0] || !p[0].cssText) : (new Function("$,a,b", "try{$=a($),$=b($),$=$[0];return !$||!$.cssText}catch(e){}"))(f, rb, sb)) {
                  J(f);
                  break;
                }
                if (8 <= y && 9 > y) {
                  break;
                }
              case "LINK":
                mb && 6 !== q && !va(ia, f) && c.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (m = d.length; m;) {
                  if (0 === h.indexOf(d[--m])) {
                    J(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (qb(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (qb(f, "skip-cleanup")) {
                  break;
                }
              case "!":
                J(f);
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
                9 > q && J(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; c[0];) {
        n = c.pop(), ia.appendChild(n);
      }
    }
    Da = ea("jsMain");
    var b = !(8 > y || 5 > q || H || .9 > x), d = ["og:", "twitter:", "fb:"], c = [];
    a(fa);
  });
  9 > q && N(function(a) {
    a = V(v, "div");
    ha(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    tb = 1 < a.offsetHeight;
    ha(a, "");
    J(a);
  });
  var Ib = function(a, b) {
    function d() {
      e || !g || c.complete ? (R(a, !!c.width), c.onerror = c.onload = D, c = a = null) : (--g, R(d));
    }
    var c = new Image, e, g = 99;
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
    function a(f, h, n, p) {
      var m = p ? "div" : "cite";
      if (0 === h.indexOf("urn:isbn:")) {
        h = h.substr(9).toUpperCase().split("-").join("");
        if (13 === h.length) {
          h = h.toString().slice(3, -1);
          for (var l = 0, z = 0; 9 > z; z++) {
            l += (h.charAt(z) - 0) * (10 - z);
          }
          l = (11 - l % 11) % 11;
          l = 10 === l ? "X" : l.toString();
          h += l;
        }
        10 === h.length && (h = "//www.amazon.co.jp/exec/obidos/ASIN/" + h + "/itozyun-22/ref=nosim/");
      }
      h = "<a" + (0 === h.indexOf("http") ? ' target="_blank" rel="nofollow noopener"' : "") + ' hidefocus="true" href="' + h + '">' + f + "</a>";
      (p ? pb(d.firstChild, m, {className:n}) : V(d, m, {className:n})).innerHTML = h;
    }
    for (var b = U("blockquote", Da), d, c = -1, e, g; d = b[++c];) {
      e = d.getAttribute("title") || "", g = d.getAttribute("cite") || "", e && g ? (d.removeAttribute("title"), a(e, g, "js-bqLink", !0)) : g && (d.removeAttribute("cite"), a(t.decodeURI ? decodeURI(g) : g, g, "js-bqCite"));
    }
  });
  q || H || r.write('<link href="' + L + ja + '" rel="stylesheet" type="text/css" media="screen,handheld,projection,tv,print">');
  11 === $b && 5 === q && V(ia, "link", {href:L + ja, rel:"stylesheet", type:"text/css"});
  Ya.push(function(a) {
    var b = a.l;
    a = a.m;
    var d = b.parentElement || b.parentNode;
    wa(d, "aBodyRoot") ? a || b.getAttribute("alt") || (b.style.display = "none") : K(d, a ? "img-loaded" : "img-disabled");
  });
  var xa;
  oa.push(function(a) {
    a && !xa ? Na && Na() : a ? ia.appendChild(xa) : J(xa);
  });
  var za = [], Oa;
  Cb || (N(function() {
    for (var a = U("A", Da), b = -1, d, c, e, g; d = a[++b];) {
      wa(d, "img-disabled") || (e = (c = 1 === nb(d).length && nb(d)[0]) && c.tagName.toUpperCase(), "IMG" === e && (e = d.getAttribute("href") || "", g = e.split("?")[0].split("#")[0].split("."), g = (g[g.length - 1] || "").toLowerCase(), 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + g + ".") && (d.onkeydown = c.onclick = ub, d.onclick = Sb, g = c.offsetWidth - 4 + "px", c.style.width = g, K(d, "jsPica"), za.push({g:d, B:c.src, C:g, o:e, h:c}))));
    }
  }), 525.13 > Va && (fa.onclick = function(a) {
    if (Oa) {
      return Oa = !1, a.preventDefault(), !1;
    }
  }), na(function() {
    for (var a = -1, b; b = za[++a];) {
      b.g.onkeydown = b.g.onclick = b.h.onclick = D, b.g.onkeydown = b.g.onclick = b.h.onclick = null;
    }
    fa.onclick = D;
  }));
  var Ta = ["jsSidebarFixer1", "jsSidebarFixer2"], vb = 10 <= q || Ea || k.Chromium || Va, Nb = x || k.Fennec || Ua || Ea, Tb = !(5 > k.SafariMobile || 5 > k.iOSWebView || 2.2 > k.AOSP || 6 > k.Fennec || k.WebOS && 534 > Va || k.MeeGo || 7 > q || 9 > y), M, X, wb, w, Sa = 0, Aa = 0, Qa, E, ab = x && 0 <= k.conpare(k.ENGINE_VERSION, "0.9.7");
  for (Mb || Cb || 8 > y || (dc(function(a) {
    if (a && !M) {
      a = -1;
      var b;
      Wa(Pa);
      Jb(Pa);
      M = "CSS1Compat" !== r.compatMode ? v : fa || v;
      X = ea("jsSide");
      wb = Da;
      w = pb(X.firstChild, "div", {id:"jsSidebarFixer"});
      for (q || H ? w.onfocusin = la : Nb ? r.addEventListener("focus", la, Fa ? {capture:!0, passive:!1} : !0) : w.addEventListener("DOMFocusIn", la, !1); 1 < X.childNodes.length;) {
        w.appendChild(X.childNodes[1]);
      }
      for (; b = Ta[++a];) {
        b = ea(b), A(b.onwheel) ? Fa ? b.addEventListener("wheel", F, {passive:!1}) : b.onwheel = F : Ab ? b.addEventListener("MozMousePixelScroll", F, !1) : ab || !A(b.onmousewheel) && !y || (b.onmousewheel = F);
      }
      ab && r.addEventListener("DOMMouseScroll", Yb, !1);
      Qa = !q && !Ea && (A(G.perspective) || A(G["-moz-perspective"]) || A(G["-webkit-perspective"]));
      Pa();
    }
  }), Jb(function() {
    for (var a = -1, b; b = Ta[++a];) {
      b = ea(b), Fa && b.removeEventListener("wheel", F, {passive:!1}), b.removeEventListener("MozMousePixelScroll", F, !1), b.onwheel = b.onmousewheel = D, b.onwheel = b.onmousewheel = null;
    }
    ab && r.removeEventListener("DOMMouseScroll", F, !1);
    q || H ? (w.onfocusin = D, w.onfocusin = null) : Nb ? r.removeEventListener("focus", la, Fa ? {capture:!0, passive:!1} : !0) : w.removeEventListener("DOMFocusIn", la, !1);
  })); ma.length;) {
    ma.shift()();
  }
  ma = null;
})(ua, this, new Function, document, navigator, screen, parseFloat, Number);

