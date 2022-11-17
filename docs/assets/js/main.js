Array.prototype.pop || (Array.prototype.pop = function() {
  var y = this[this.length - 1];
  --this.length;
  return y;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var y = arguments, q = 0, D = y.length, v = this.length; q < D; ++q) {
    this[v + q] = y[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var y = this[0], q = 1, D = this.length; q < D; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return y;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var y = arguments, q = y.length, D = this.length += q - 1, v = D; v >= q; --v) {
    this[v] = this[v - q];
  }
  for (v = 0; v < q; ++v) {
    this[v] = y[v];
  }
  return D;
});
Array.prototype.splice || (Array.prototype.splice = function(y, q) {
  var D = arguments, v = D.length - 2 - q, fa = this.slice(y, y + q), r;
  if (0 < v) {
    var E = this.length - 1;
    for (r = y + q; E >= r; --E) {
      this[E + v] = this[E];
    }
  } else if (0 > v) {
    E = y + q;
    for (r = this.length; E < r; ++E) {
      this[E + v] = this[E];
    }
    this.length += v;
  }
  E = 2;
  for (r = D.length; E < r; ++E) {
    this[E - 2 + y] = D[E];
  }
  return fa;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(y, q) {
  var D = this.length >>> 0;
  if (0 === D) {
    return -1;
  }
  if (q) {
    var v = q || 0;
    v = -Infinity === v ? 0 : (0 > v ? -v : v) | 0;
    if (D <= v) {
      return -1;
    }
  }
  for (v = 0 <= v ? v : 0 < D + v ? D + v : 0; v < D; ++v) {
    if (this[v] === y) {
      return v;
    }
  }
  return -1;
});
(function(y, q, D, v, fa, r, E, ae, aa, be, n) {
  function V() {
    return za ? Tb ? 2 : Ub ? 3 : 1 : 0;
  }
  function mb(a) {
    L(q, "load", mb);
    mb = n;
    Aa(ba, a, !0);
    W = ba = n;
  }
  function Ra(a, b) {
    Sa(function() {
      var c = nb(a);
      b(c);
      c.addListener(b);
      return !0;
    });
  }
  function Ta() {
    for (var a, b = 0, c = +new fa(); b < ca.length;) {
      c < ca[0].t ? ++b : (a = ca.splice(b, 1)[0], a.f(a.p));
    }
    oa = ca.length ? setTimeout(Ta, Ua) : 0;
  }
  function ob() {
    for (var a, b = 0; b < pb.length; ++b) {
      a = pb[b], a.f();
    }
  }
  function A(a) {
    if (y[0] === a) {
      return da === da + "" ? aa(da) : da;
    }
  }
  function P(a) {
    var b = y[3];
    if (y[2] === a) {
      return b === b + "" ? aa(b) : b;
    }
  }
  function zc() {
    Ba && (Ba = clearInterval(Ba));
  }
  function Ac() {
    oa && (oa = clearTimeout(oa));
  }
  function Bc(a, b, c) {
    var d = ["<", a], e = 1, f, p;
    if (b) {
      for (f in b) {
        var g = b[f];
        if (null != g && "" !== g) {
          if ("style" === f) {
            d[++e] = ' style="';
            for (p in g) {
              for (var m = ++e, h, k = [], l = p.split(""), t = l.length; t;) {
                h = l[--t], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), k[t] = h;
              }
              d[m] = k.join("") + ":" + g[p] + ";";
            }
            d[++e] = '"';
          } else {
            "className" === f && (f = "class"), d[++e] = " " + f + '="' + g + '"';
          }
        }
      }
    }
    d[++e] = ">";
    null != c && (Q && "font" !== a ? d[++e] = "<FONT>" + c + "</FONT>" : d[++e] = c);
    d[++e] = "</" + a + ">";
    return d.join("");
  }
  function M(a, b) {
    var c = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], e = 0, f;
    for (f = c.length; e < f; ++e) {
      d[e] = c[e];
    }
    return d;
  }
  function Cc(a) {
    return Q ? a.parentElement : a.parentNode;
  }
  function qb(a, b, c, d, e, f) {
    if (Q) {
      var p = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var g = Ca(2 > a ? X(b) : b);
      g = 2 > a ? g.indexOf(b) + a : g.length;
      b.insertAdjacentHTML(p, Bc(c, d, e));
      b = Ca(b)[g];
      null != e && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Dc) {
      b = r.createElement(Bc(c, d));
    } else {
      b = f ? r.createElementNS("http://www.w3.org/2000/svg", c) : r.createElement(c);
      if (d) {
        for (p in d) {
          if ((c = d[p]) || 0 === c) {
            switch(p) {
              case "class":
              case "className":
                rb(b, c);
                break;
              case "style":
                a = b.style;
                for (g in c) {
                  a[g] = c[g];
                }
                break;
              default:
                Da(b, p, c);
            }
          }
        }
      }
      Vb || null != e && sb(b, e);
    }
    return b;
  }
  function sb(a, b) {
    if (Q) {
      return qb(2, a, "font", n, b);
    }
    var c = r.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function Ec(a, b) {
    9 > u ? a.className = b : a.setAttribute("class", b);
  }
  function Fc(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Aa(a, b, c) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    c && (a.length = 0);
  }
  function pa(a, b, c) {
    ba || Va.length || H(Gc);
    Va.push(a, b, c);
  }
  function Gc() {
    var a = Va, b;
    for (Va = []; b = a.shift();) {
      Aa(b, a.shift(), a.shift());
    }
  }
  function tb(a) {
    var b = a || event;
    a = Wa[b.type];
    var c = -1, d, e;
    u ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : ub && (b.I = b.stopPropagation, b.stopPropagation = function() {
      e = !0;
    });
    for (; d = a[++c];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = Wb, this.h = n) : 7.2 > w && this === r && d.j === q && (q.h = d.i, q.h(b), delete q.h);
    }
    if (u) {
      return b.preventDefault = b.stopPropagation = n, b.returnValue;
    }
    ub && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (vb = !0), e && !vb && b.I(), b.I = b.stopPropagation = n);
  }
  function Hc() {
    var a = 9 === Ea.offsetWidth;
    Xa !== a && pa(Ic, Xa = a);
  }
  function Jc() {
    !ba && Fa && (Xb(Fa), Fa = H(Cd));
  }
  function Cd() {
    Fa = 0;
    Aa(Kc);
  }
  function Yb(a) {
    ba || Aa(Lc, a);
  }
  function wb(a) {
    var b = a.keyCode || a.aa, c = xb.length, d, e, f, p;
    if ("keydown" !== a.type || 13 === b) {
      for (; c;) {
        if (b = xb[--c], b.C === this || b.u === this) {
          c = b.C;
          var g = d = b.u;
          if (b.O) {
            if (ha(c, "width", b.Z), c.src = b.Y, rb(g, b.S), c = b.K) {
              Ya(c, b.R), rb(c, "caption jsCap");
            }
          } else {
            if (e = b.M) {
              for (delete b.M; d = X(d);) {
                if (ia(d, "caption")) {
                  b.K = d, b.R = d.style.cssText, qa(d, "jsCap");
                } else {
                  var m = ja(d);
                  if ("DIV" === m || "P" === m || "BLOCKQUOT" === m || "LI" === m || "DD" === m || "TD" === m || "TH" === m || "FORM" === m || "PRE" === m) {
                    break;
                  }
                }
              }
              d = (d.offsetWidth | 0) - 4;
              1600 < d && (d = 1600);
              if (b.L && 0 < e.split("/").pop().indexOf("=")) {
                e = e.split("=");
                m = e.length;
                if (f = e[m - 1]) {
                  (p = aa(f.substr(1))) && f === "s" + p ? e[m - 1] = "w" + d : e[m] = "w" + d;
                }
                e = e.join("=");
              } else if (b.L || 0 < e.indexOf(".bp.blogspot.com/")) {
                e = e.split("/");
                m = e.length;
                if (f = e[m - 2]) {
                  (p = aa(f.substr(1))) && f === "s" + p ? e[m - 2] = "w" + d : e.splice(m - 1, 0, "w" + d);
                }
                e = e.join("/");
              }
              b.V = e;
            }
            b.S = Dd(g);
            qa(g, "jsPicaLarge");
            ha(c, "width", "");
            c.src = b.V;
            if (c = b.K) {
              Ya(c, ""), qa(c, "jsCapLarge");
            }
          }
          b.O = !b.O;
          break;
        }
      }
      Zb(a);
    }
  }
  function Zb(a) {
    a.preventDefault();
    a.stopPropagation();
  }
  function Ga(a) {
    for (var b = arguments, c = 0, d = b.length; c < d; ++c) {
      if (isFinite(b[c])) {
        return b[c];
      }
    }
    return 0;
  }
  function yb(a) {
    var b = Za;
    if (Xa) {
      if ($a && !b) {
        if (+new fa() < $a) {
          return;
        }
        $a = n;
      }
      7 === a ? ra = 0 : (ra && (ra = Xb(ra)), zb = Ga(q.pageYOffset, q.scrollY, Ha.scrollTop, I.scrollTop));
      b ? (Za = Ab(n, b[0], b[1])) || ($a = +new fa() + 99) : Ab();
    } else {
      Za = n;
    }
  }
  function Ab(a, b, c) {
    function d(Y) {
      g = Y;
      if ($b) {
        m = $b + ":translate" + (ac ? "3D(0," : "(0,") + Y + (ac ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
      } else if (0 !== Y) {
        if (!Mc && (Nc || bc)) {
          var Bb = sa.offsetWidth;
        }
        m = bc ? "position:fixed;width:" + Bb + "px;top:" + (Y - e + l) + "px" : Mc ? "top:" + Y + "px" : "position:absolute;left:0;width:100%;top:" + Y + "px";
        Nc && m && (m += ";" + (0 > Y ? "clip:rect(" + -Y + "px " + Bb + "px " + z + "px 0)" : Y + z < S ? "clip:rect(0 " + Bb + "px " + z + "px 0)" : "clip:rect(0 " + Bb + "px " + (S - Y) + "px 0)"), 8 > u || (m = m.split(" ").join(",")));
      }
    }
    var e = zb, f = Oc, p = sa.offsetTop === f.offsetTop, g = 0, m = "", h = !0;
    if (p) {
      for (var k = 0, l = 0, t = f; t && t !== I;) {
        l += t.offsetTop, t = t.offsetParent;
      }
      g = Pc;
      var B = Ga(q.innerHeight, Ha.offsetHeight), N = f.offsetHeight, z = T.offsetHeight, S = z < N ? N : z, G = e, Ia = G + B, Cb = l, Db = Cb + S, Qc = l + g, Ed = Qc + z;
      f = G < Cb ? Cb : G;
      t = Db < Ia ? Db : Ia;
      var Ja = t - f;
      G = Db <= G;
      Ia = Ia <= Cb;
      if (b !== n) {
        h = l + b;
        a = h + c;
        var Ka;
        if (G || Ia) {
          return B <= c ? Ka = l : Ka = G ? Db - c : l + c - B, $a = n, q.scroll(Ga(q.pageXOffset, q.scrollX, Ha.scrollLeft, I.scrollLeft), Ka), Za;
        }
        z <= Ja ? k = 3 : c <= Ja ? z - b <= Ja ? k = 2 : f <= h && a <= t ? f < l + g && (k = 4) : k = f <= h && h <= t ? 5 : f <= a && a <= t ? 4 : a < f ? 4 : 5 : k = 4;
        h = n;
      } else {
        a !== n ? z <= Ja ? (k = 7, h = !1) : (g -= 60 * a, k = t - l - z, Ka = f - l, g < k ? g = k : Ka < g && (g = Ka), k = 6) : N <= z || (G ? k = 1 : Ia || (z <= Ja ? k = 3 : f < Qc ? k = 3 : Ed < t ? k = 2 : e < l + z - Ja || (k = 2)));
      }
      switch(k) {
        case 0:
          d(0);
          break;
        case 1:
          d(S - z);
          break;
        case 2:
          d(t - l - z);
          break;
        case 3:
          d(f - l);
          break;
        case 4:
          d(f - l - b);
          break;
        case 5:
          d(t - l - (b + c));
        case 6:
          d(g);
      }
    }
    Ya(T, m);
    Pc = g;
    return p && h;
  }
  function ta(a) {
    if (Xa) {
      x && (zb = Ga(q.pageYOffset, Ha.scrollTop, I.scrollTop));
      var b = this !== a.target, c = b && Ga(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && c && Ab(9 >= c ? -9 >= c ? -3 : c : 3) && (a.preventDefault(), a.stopPropagation());
    }
  }
  function Rc(a) {
    for (var b = a.target, c = -1, d; d = Eb[++c];) {
      Fb(d, b) && ta(a);
    }
  }
  function va(a) {
    if (Xa) {
      var b = !!$b || x, c = a.target || a.srcElement;
      a = 0;
      var d;
      if (Fb(T, c)) {
        for (d = c.offsetHeight; c && (b ? Fb(T, c) : T !== c);) {
          a += c.offsetTop, c = c.offsetParent;
        }
        Fd ? (Za = [a, d], ra && Xb(ra), ra = H(yb, 7, 1 > x ? 500 : 0)) : (zb = Ga(q.pageYOffset, q.scrollY, Ha.scrollTop, I.scrollTop), Ab(n, a, d));
      }
    }
  }
  function Gd() {
    ab = q.onerror;
    q.onerror = Hd;
    var a = r.activeElement;
    cc !== a && (cc = a, va({target:a}));
    q.onerror = ab;
    ab = n;
  }
  function Hd() {
    q.onerror = ab;
    ab = cc = n;
    return !0;
  }
  function Id() {
    dc.call(Gb);
  }
  function ec() {
    r.fullscreenElement || r.fullscreen || r.webkitIsFullscreen || r.msFullscreenElement || q.fullScreen ? (Da(Gb, "id", "blog2slide-root"), La[1].parentNode.insertBefore(bb, La[1]), fc(), r.onkeydown = Jd) : wa && (ka(bb), la(Gb, "id"), la(wa, "id"), wa = r.onkeydown = n);
  }
  function fc() {
    wa && la(wa, "id");
    xa = 0 < xa ? gc < xa ? gc : xa : 0;
    wa = La[xa];
    Da(wa, "id", "blog2slide-current");
  }
  function Jd(a) {
    if ("ArrowRight" === a.key || 39 === a.keyCode) {
      ++xa, fc();
    } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
      --xa, fc();
    }
  }
  function Hb(a) {
    return a === "" + a;
  }
  function cb(a, b) {
    return Ib ? new Sc(a, b) : new v(a, b);
  }
  function F(a, b, c, d) {
    if (Tc() - Uc < Kd && !d) {
      return a(b);
    }
    H(Ld, {T:a, W:b});
  }
  function Ld(a) {
    Uc = Tc();
    a.T(a.W);
  }
  function Vc(a, b) {
    a && db[a] || (a = Wc.test(b) ? "default-markup" : "default-code");
    var c = !!db[a];
    c && F(Xc, a, 0, !0);
    return c;
  }
  function Jb() {
    function a(z, S, G) {
      S && (b.g = b.g || [], b.g.push({l:b, A:b.A, N:1, s:p, B:z, o:S, m:G, P:{}, v:0}));
    }
    var b = O, c = b.m, d = c[0], e = c[2], f = b.B, p = b.s, g = b.$.shift(), m = b.P;
    if (g) {
      var h = m[g], k;
      if (!(0 <= h)) {
        if (k = d[g.charAt(0)]) {
          var l = g.match(k[1]);
          h = k[0];
        } else {
          for (h = 0, d = -1; k = e[++d];) {
            if (l = g.match(k[1])) {
              h = k[0];
              break;
            }
          }
        }
        !(k = Hb(h)) || l && Hb(l[1]) || (k = !1, h = 11);
        k || (m[g] = h);
      }
      e = b.v;
      m = g.length;
      b.v += m;
      if (k) {
        k = l[1];
        d = g.indexOf(k);
        var t = k.length, B = d + t;
        l[2] && (B = m - l[2].length, d = B - t);
        a(f + e, g.substr(0, d), c);
        if (t && Vc(h, k)) {
          a(f + e + d, k);
          var N = !0;
        }
        a(f + e + B, g.substr(B), c);
        b.g && b.g.length && (O = b.g.shift());
        N || (O !== b ? F(hc, n, 2) : F(Jb, n, 2));
      } else {
        p.push(f + e, h), F(Jb, n, 2);
      }
    } else {
      b.l ? (O = b.l.g.shift()) ? F(hc, n, 2) : (O = b.l, F(Jb, n, 2)) : F(Md, n, 2);
    }
  }
  function ic(a) {
    if (Kb.length) {
      var b = Kb.shift(), c = Lb[b];
      if (c.pop) {
        Lb[b] = cb(c[0], c[1]);
      } else if (Hb(c)) {
        Lb[b] = cb(c);
      } else {
        return ic(a);
      }
      F(ic, a, 1);
    } else {
      F(Xc, a);
    }
  }
  function Nd(a) {
    for (var b, c = a.firstChild; c; c = c.nextSibling) {
      var d = c.nodeType;
      b = 1 === d ? b ? a : c : 3 === d ? Yc.test(c.nodeValue) ? a : b : b;
    }
    return b === a ? n : b;
  }
  var Wb = D, I = r.body, R = I.style, ya, da = y[1], u = A(2) || A(3), ea = A(7), jc = A(5) || A(6), w = A(8) || A(9), x = A(11) || A(12), eb = x && 0 <= y.conpare(da, "1.9.1"), kc = A(13), fb = A(15), Zc = A(16) || A(17), $c = A(10) || A(25), gb = A(20) || A(22);
  gb || A(23) || A(21) || A(24);
  var ad = gb && aa(E.userAgent.split("Edg/")[1]), Od = aa(E.appVersion.split("Trident/")[1]) + 4, lc = P(35) || P(36) || P(37), bd = !u && !ea && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), mc = (ea ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > w ? "opr70" : 8 > w ? "opr72" : 9.5 > w ? "opr" + (w | 0) : x && !eb ? 1.4 <= x ? "gck19" : 1.3 <= 
  x ? "gck13" : 1 <= x ? "gck12" : 0.9 <= x ? "gck09" : 0.8 <= x ? "gck08" : "gck07" : "modern") + ".css", Mb = "", Pd = P(1) || P(2) || P(3) || P(4) || P(8) || P(9) || P(10), cd, dd = R.transform !== n ? "transform" : R["-o-transform"] !== n ? "-o-transform" : R["-ms-transform"] !== n ? "-ms-transform" : R.MozTransform !== n ? "-moz-transform" : R["-webkit-transform"] !== n ? "-webkit-transform" : "", ba = [], Ic = [], U = [], ed;
  var nc = function(a) {
    pb.length || (Ba = setInterval(ob, fd));
    pb.push({f:a, J:++gd});
    return gd;
  };
  var hd = function() {
    Ba && (zc(), Ba = setInterval(ob, fd));
  };
  var pb = [], fd = 500, gd = 0, Ba;
  if (5 > u || ea) {
    q._wdb_onlooptimer = ob, ob = "_wdb_onlooptimer()";
  }
  var H = function(a, b, c) {
    ca.length || (oa = setTimeout(Ta, Ua));
    ca.push({f:a, p:b, J:++id, t:+new fa() + (Ua < c ? c : Ua)});
    return id;
  };
  var Xb = function(a) {
    for (var b = ca.length, c; c = ca[--b];) {
      if (c.J === a) {
        ca.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var jd = function() {
    oa && (Ac(), oa = setTimeout(Ta, Ua));
  };
  var ca = [], Ua = 16, id = 0, oa;
  if (5 > u || ea) {
    q._wdb_ontimer = Ta, Ta = "_wdb_ontimer()";
  }
  var Q = 5 > u;
  var Nb = M(r, "html")[0];
  var Ma = M(r, "head")[0];
  var Na = function(a) {
    return q[a] || r[a] || r.getElementById(a);
  };
  var X = Cc;
  var Ca = function(a) {
    a = Q ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var Qd = function(a) {
    var b = !(7.03 < w && 7.2 > w) && a.children;
    a = b ? b : a.childNodes;
    for (var c = [], d = a.length, e = -1, f; d;) {
      if (f = a[--d], b || 1 === f.nodeType) {
        Q && "FONT" === f.tagName || (c[++e] = f);
      }
    }
    return c;
  };
  var kd = function(a) {
    return Q ? a.children.length ? a.children[0] : null : a.firstChild;
  };
  var ma = function(a, b, c, d, e) {
    b = qb(2, a, b, c, d, e);
    Q || (a.appendChild(b), Vb && null != d && sb(b, d));
    return b;
  };
  var oc = function(a, b, c, d, e) {
    b = qb(0, a, b, c, d, e);
    Q || (Cc(a).insertBefore(b, a), Vb && null != d && sb(b, d));
    return b;
  };
  var Rd = sb;
  var ld = function(a, b) {
    var c;
    if (Q) {
      return qb(1, a, "font", n, b);
    }
    var d = r.createTextNode("" + b);
    (c = a.nextSibling) ? X(a).insertBefore(d, c) : X(a).appendChild(d);
    return d;
  };
  var ka = function(a) {
    Q ? a.outerHTML = "" : X(a).removeChild(a);
  };
  var Fb = function(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== Nb;) {
      if (b = X(b), a === b) {
        return !0;
      }
    }
  };
  var Dc = 9 > u, Vb = Dc;
  var ja = function(a) {
    return a.tagName.toUpperCase();
  };
  var Z = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Da = function(a, b, c) {
    a.setAttribute(b, c);
  };
  var la = function(a, b) {
    a.removeAttribute(b);
  };
  var md = function(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  };
  var Dd = function(a) {
    return a.className;
  };
  var rb = Ec;
  var ia = Fc;
  var qa = function(a, b) {
    var c;
    if (!Fc(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      Ec(a, c + b);
    }
  };
  var ha = function(a, b, c) {
    a.style[b] = c;
  };
  var Ya = function(a, b) {
    var c = -1, d, e;
    if (5.5 > u) {
      if (a.setAttribute("style", ""), b) {
        for (d = b.split(";"); e = d[++c];) {
          var f = e.split(":");
          a.style[f[0]] = e.substr(f[0].length + 1);
        }
      }
    } else if (7.1 > w) {
      if (a.setAttribute("style", ""), b) {
        for (d = b.split(";"); e = d[++c];) {
          f = e.split(":"), a.style[f[0]] = f[1];
        }
      }
    } else {
      9 > w || 1 > x ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
    }
  };
  ba.splice(0, 0, function() {
    function a(m) {
      m = Ca(m);
      for (var h = m.length, k, l, t; h;) {
        if (k = m[--h], l = k.nodeType, 8 === l) {
          b && p.push(k);
        } else if (1 === l) {
          switch(l = ja(k), "/" === l.charAt(0) && (l = l.substr(1), g[l] = !0), l) {
            case "STYLE":
              if (7.2 <= w && 9 > w) {
                break;
              }
            case "LINK":
              Q || d || Fb(Ma, k) || f.push(k);
              break;
            case "META":
              l = Z(k, "name") || Z(k, "property");
              for (t = e.length; t;) {
                if (0 === l.indexOf(e[--t])) {
                  p.push(k);
                  break;
                }
              }
              break;
            case "SCRIPT":
              if (md(k, "async")) {
                break;
              }
              if (c) {
                k.innerText = "";
                c = !1;
                break;
              }
            case "NOSCRIPT":
              if (md(k, "skip-cleanup")) {
                break;
              }
            case "!":
              p.push(k);
              break;
            case "SOURCE":
              q.HTMLSourceElement || p.push(k);
              break;
            default:
              g[l] ? p.push(k) : Ca(k).length && a(k);
          }
        }
      }
      for (; f[0];) {
        Ma.appendChild(f.pop());
      }
      for (; p[0];) {
        ka(p.pop());
      }
    }
    ya = Na("jsMain");
    var b = !(8 > w || 5 > u || ea || 0.9 > x), c = ed, d = 7 > u, e = ["og:", "twitter:", "fb:"], f = [], p = [], g = {};
    a(Nb);
  });
  var Xa, J, nb = q.matchMedia, Ea, Va = [];
  ba.push(function() {
    Ra = n;
    Ea = ma(I, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    W(function() {
      Va.length && H(Gc);
    });
  });
  var C = function(a, b, c, d) {
    if (nd) {
      a.addEventListener(b, c, d ? bd ? d : d.capture : !1);
    } else {
      var e = {j:a, i:c};
      d = Wa[b];
      var f = "on" + b, p, g;
      if (d) {
        for (p = d.length; g = d[--p];) {
          if (g.j === a && g.i === c) {
            return;
          }
        }
        Wa[b].push(e);
      } else {
        Wa[b] = d = [e], pc || (b = a[f], "function" === typeof b && b !== tb && d.unshift({j:a, i:b}));
      }
      pc ? a.attachEvent(f, tb) : a[f] = tb;
    }
  };
  var L = function(a, b, c, d) {
    if (nd) {
      a.removeEventListener(b, c, d ? bd ? d : d.capture : !1);
    } else {
      d = Wa[b];
      b = "on" + b;
      var e, f, p;
      if (d) {
        for (e = d.length; f = d[--e];) {
          f.j === a && (f.i === c ? d.splice(e, 1) : p = !0);
        }
        p || (pc ? a.detachEvent(b, tb) : (a[b] = Wb, a[b] = null));
      }
    }
  };
  var Wa = {}, pc = !1, ub = 525.13 > fb, nd = !ub && !ea && q.addEventListener, vb;
  ub && Nb.addEventListener("click", function(a) {
    if (vb) {
      return vb = !1, a.preventDefault(), !1;
    }
  });
  var W = function(a) {
    ba.push(a);
  };
  var Oa = function(a) {
    Ob && Ob.push(a);
  };
  var Ob = [];
  if (419.3 >= fb) {
    var Pb = function() {
      if (Pb) {
        var a = r.readyState;
        "loaded" === a || "complete" === a ? (Pb = n, mb()) : H(Pb);
      }
    };
    H(Pb);
  } else {
    C(q, "load", mb);
  }
  u || 0.9 <= x && 1.8 > x ? C(q, "unload", function(a) {
    Aa(Ob, a, !0);
  }) : Ob = n;
  var Sa = function(a) {
    Ic.push(a);
  };
  W(function() {
    Hc();
    nc(Hc);
  });
  var od = function(a) {
    U && U.push(a);
  };
  var pd = 60 > x || kc, za, Ub, Tb;
  if (89 <= x || 89 <= gb || lc && 79 <= ad || nb && (nb("(forced-colors:none)").matches || nb("(forced-colors:active)").matches)) {
    var qd = !0;
    Ra("(forced-colors:active)", function(a) {
      za = a.matches;
      J = V();
      pa(U, J);
    });
  } else if (10 <= u || jc || lc && ad) {
    qd = !0, Ra("(-ms-high-contrast:black-on-white)", function(a) {
      za = Ub = a.matches;
      J !== V() && (J = V(), pa(U, J));
    }), Ra("(-ms-high-contrast:white-on-black)", function(a) {
      za = Tb = a.matches;
      J !== V() && (J = V(), pa(U, J));
    }), Ra("(-ms-high-contrast:active)", function(a) {
      za = a.matches;
      J !== V() && (J = V(), pa(U, J));
    });
  } else if (lc && (u || x && 0 <= y.conpare(da, "1.8.1") || kc)) {
    var qc = function() {
      function a(d, e) {
        if (e && "transparent" === d) {
          return 382.5;
        }
        if ("#" === d.charAt(0)) {
          return parseInt("0x" + d.substr(1, 2), 16) + parseInt("0x" + d.substr(3, 2), 16) + parseInt("0x" + d.substr(5, 2), 16);
        }
        var f = d.split("(")[1].split(",");
        return aa(f[0]) + aa(f[1]) + aa(f[2]);
      }
      var b = r.defaultView;
      var c = b ? b.getComputedStyle(Ea, null) : Ea.currentStyle;
      b = (c && c.color || "").split(" ").join("");
      c = (c && c.backgroundColor || "").split(" ").join("");
      b && (za = "#123456" !== b && "rgb(18,52,86)" !== b, Ub = a(b) < a(c, !0), Tb = a(b) > a(c, !0), J !== V() && (J = V(), pa(U, J, pd)));
    };
    Sa(function(a) {
      if (a) {
        return ha(Ea, "color", "#123456"), ha(Ea, "backgroundColor", "#123456"), pd ? (qc(), U = n) : nc(qc), qc = n, !0;
      }
    });
  } else {
    U = V = n;
  }
  var Qb = function(a) {
    hb.push(a);
  };
  var hb = [], rc = 7.5 <= w && 8 > w;
  rc && function() {
    for (var a = r.images, b = a.length, c; b;) {
      c = a[--b], c.H = c.src, la(c, "src");
    }
  }();
  W(function() {
    function a() {
      d ? (e = c[--d], rc && Da(e, "src", e.H), Sd(b, rc ? e.H : e.src)) : Qb = hb = n;
    }
    function b(p) {
      Aa(hb, {D:e, F:p}, !d);
      a();
    }
    var c = r.images || M(r, "img"), d = c.length;
    if (12 > w || 532 > fb) {
      a();
    } else {
      for (; d;) {
        var e = c[--d];
        var f = 9 > u ? e.complete : 0 <= e.naturalWidth ? e.naturalWidth : e.width;
        pa(hb, {D:e, F:f}, !d);
      }
      Qb = hb = n;
    }
  });
  var rd = function(a) {
    Kc.push(a);
  };
  var Kc = [], Fa;
  C(q, "resize", Jc);
  Oa(function() {
    Fa && clearTimeout(Fa);
    L(q, "resize", Jc);
  });
  var ib = function(a) {
    Lc.push(a);
  };
  var Lc = [], sd = 0, td = 1 > x || 1.2 <= x && 1.8 > x || 7.2 >= w;
  td ? nc(function() {
    var a = q.scrollY || I.scrollTop;
    sd !== a && (sd = a, Yb());
  }) : C(q, "scroll", Yb);
  Oa(function() {
    td || L(q, "scroll", Yb);
  });
  9 > u && W(function() {
    var a = ma(I, "div");
    Ya(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    cd = 1 < a.offsetHeight;
    Ya(a, "");
    ka(a);
  });
  var Sd = function(a, b) {
    function c() {
      e || !f || d.complete ? (H(a, !!d.width), d.onerror = d.onload = Wb, d = a = n) : (--f, H(c));
    }
    var d = new Image(), e, f = 99;
    d.onerror = function() {
      e = !0;
    };
    d.onload = function() {
      e = !0;
    };
    d.src = b;
    H(c);
  };
  Qb(function(a) {
    var b = a.D;
    a = a.F;
    var c = X(b);
    !ia(c, "aBodyRoot") && a ? qa(c, "img-loaded") : a || Z(b, "alt") || ha(b, "display", "none");
  });
  if (!qd && U) {
    var jb, ud = function() {
      jb = ma(Ma, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:K + "css/" + Mb + "hc/" + mc});
      (dd || 5.5 <= u && 9 > u && cd) && qa(I, "jsCanRotate");
      ud = n;
    };
    od(function(a) {
      a && !jb ? ud() : jb && (a ? Ma.appendChild(jb) : ka(jb));
    });
  }
  5.5 <= u && 8 > u && U && od(function(a) {
    for (var b = M(r, "a"), c = b.length, d = 0; d < c; ++d) {
      b[d].hideFocus = !a;
    }
  });
  w && W(function() {
    for (var a = M(r, "a"), b = a.length, c = 0, d; c < b; ++c) {
      d = a[c], "-1" === Z(d, "tabindex") ? la(d, "tabindex") : Z(d, "href") && Da(d, "tabindex", "0");
    }
    a = M(r, "input");
    c = 0;
    for (b = a.length; c < b; ++c) {
      d = a[c], "hidden" === Z(d, "type") && la(d, "tabindex");
    }
  });
  var Td = x && 0 >= y.conpare(da, "0.9");
  var Rb = !(7.2 > w || Td);
  var vd = function(a) {
    sc ? r.write('<script src="' + a + '">\x3c/script>') : ba || Sb.length ? Sb.push(a) : tc(a);
  };
  var wd = function() {
    sc || tc(Sb.shift());
  };
  var sc = !Rb, xd = Rb && 7.5 > w;
  if (!sc) {
    Rb = !0;
    var Sb = [];
    xd && (ed = !0);
    W(function() {
      tc(Sb.shift());
    });
    var tc = function(a) {
      a && (xd ? uc[0].src = a : ma(Ma, "script", {src:a}));
    };
  }
  var xb = [];
  if (!$c) {
    var Ud = R.transition !== n || R["-o-transition"] !== n || R["-moz-transition"] !== n || R["-webkit-transition"] !== n;
    Qb(function(a) {
      if (a.F && ya) {
        a = a.D;
        var b = X(a), c = "", d;
        if ("A" === ja(b) && 1 === Qd(b).length) {
          var e = Z(b, "href");
          var f = e.split("?")[0].split("#")[0].split(".");
          f = (f[f.length - 1] || "").toLowerCase();
          if ((d = 0 < e.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + f + ".")) {
            C(b, "keydown", wb), C(a, "click", wb), C(b, "click", Zb), Ud && (c = a.naturalWidth + 4 + "px", ha(a, "width", c)), qa(b, "jsPica"), xb.push({u:b, Y:a.src, Z:c, M:e, C:a, L:d});
          }
        }
      }
    });
    Oa(function(a, b) {
      for (a = -1; b = xb[++a];) {
        L(b.u, "keydown", wb), L(b.C, "click", wb), L(b.u, "click", Zb);
      }
    });
  }
  var Eb = ["jsSidebarFixer1", "jsSidebarFixer2"], yd = x || kc || jc, Fd = !(9 > u || w || 1 <= x && 1.3 > x), bc = !(5 > A(16) || 5 > A(17) || 2.2 > A(21) || 6 > A(12) || P(30) && 534 > fb || P(32) || 7 > u || 9 > w || 1 > x), Nc = bc || 6 === u || 1 > x, Mc = 7.5 > w, Ha, sa, Oc, T, $b = dd, Pc = 0, zb = 0, ac, Za, $a, ra, vc = x && 0 <= y.conpare(da, "0.9.7"), zd = x && 0 >= y.conpare(da, "0.9.4");
  Ad || $c || (Sa(function(a) {
    if (a) {
      if (!ya) {
        return !0;
      }
      a = -1;
      var b;
      Ha = "CSS1Compat" !== r.compatMode ? I : Nb || I;
      sa = Na("jsSide");
      Oc = ya;
      if (!sa) {
        return !0;
      }
      ib(yb);
      rd(yb);
      T = oc(kd(sa), "div", {id:"jsSidebarFixer"});
      for (8 > w || zd || 6 > u || (u || ea ? C(T, "focusin", va) : yd ? C(r, "focus", va, {capture:!0, passive:!1}) : C(T, "DOMFocusIn", va, !1)); 1 < Ca(sa).length;) {
        T.appendChild(Ca(sa)[1]);
      }
      for (vc && !eb && C(r, "DOMMouseScroll", Rc, !1); b = Eb[++a];) {
        var c = Na(b);
        c.onwheel !== n ? C(c, "wheel", ta, {passive:!1}) : eb ? C(c, "MozMousePixelScroll", ta, !1) : vc ? Eb[a] = Na(b) : (c.onmousewheel !== n || 9 <= w) && C(c, "mousewheel", ta, !1);
      }
      u || jc || 2 > gb || (ac = R.perspective !== n || R.MozPerspective !== n || R["-webkit-perspective"] !== n);
      yb();
      return !0;
    }
  }), Oa(function() {
    var a = -1, b;
    if (vc && !eb) {
      L(r, "DOMMouseScroll", Rc, !1);
    } else {
      for (; b = Eb[++a];) {
        b = Na(b), b.onwheel !== n ? L(b, "wheel", ta, {passive:!1}) : eb ? L(b, "MozMousePixelScroll", ta, !1) : (b.onmousewheel !== n || 9 <= w) && L(b, "mousewheel", ta, !1);
      }
    }
    8 > w || zd || 6 > u || (u || ea ? L(T, "focusin", va, !1) : yd ? L(r, "focus", va, {capture:!0, passive:!1}) : L(T, "DOMFocusIn", va, !1));
    Pa && clearInterval(Pa);
  }));
  var Pa, cc, ab;
  6 > u && Sa(function(a) {
    if (!ya) {
      return !0;
    }
    a ? Pa = setInterval(Gd, 333) : Pa && (clearInterval(Pa), Pa = 0);
  });
  W(function() {
    function a(p, g, m, h) {
      var k = h ? "div" : "cite";
      if (0 === g.indexOf("urn:isbn:")) {
        g = g.substr(9).toUpperCase().split("-").join("");
        if (13 === g.length) {
          g = g.toString().slice(3, -1);
          for (var l = 0, t = 0; 9 > t; t++) {
            l += (g.charAt(t) - 0) * (10 - t);
          }
          l = (11 - l % 11) % 11;
          l = 10 === l ? "X" : l.toString();
          g += l;
        }
        10 === g.length && (g = "//www.amazon.co.jp/exec/obidos/ASIN/" + g + "/itozyun-22/ref=nosim/");
      }
      m = h ? oc(kd(c), k, {className:m}) : ma(c, k, {className:m});
      ma(m, "a", 0 === g.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:g, X:w ? "0" : n} : {href:g, X:w ? "0" : n}, p);
    }
    if (ya) {
      for (var b = M(ya, "blockquote"), c, d = -1, e, f; c = b[++d];) {
        e = Z(c, "title"), f = Z(c, "cite"), e && f ? (la(c, "title"), a(e, f, "js-bqLink", !0)) : f && (la(c, "cite"), a(q.decodeURI ? decodeURI(f) : f, f, "js-bqCite"));
      }
    }
  });
  var dc, Gb, bb, wa, La, xa, gc;
  W(function() {
    var a = Na("blog2slide-start");
    if (a) {
      var b = r.onfullscreenchange !== n ? "f" : r.onmozfullscreenchange !== n ? "mozF" : r.onwebkitfullscreenchange !== n ? "webkitF" : 0;
      dc = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
      0 !== b || dc ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', C(a.firstChild, "click", Id), a = X(a), Gb = X(a), La = M(a, "section"), bb = r.createElement("h1"), bb.innerHTML = M(r, "h1")[0].innerHTML, gc = La.length, La.splice(0, 0, bb), 0 !== b ? C(r, b + "ullscreenchange", ec) : u ? C(r, "MSFullscreenChange", ec, !1) : rd(ec)) : ka(a);
    }
  });
  var Ib = !v || 0.9 > x || 8 > w || 5.5 > u;
  var db = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var Vd = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Wd = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
  26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], Lb = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
  Xd = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Tc = fa.now || function() {
    return +new fa();
  }, Sc, Uc, O, wc, xc, Kd = 5 > u ? 60 : 5.5 > u ? 0 : Ib ? 20 : 10, Wc, Yc;
  var na = [function(a) {
    q.RegExpCompat = Sc = a;
  }, function() {
    Wc = cb("^\\s*<");
    Yc = cb("\\S");
  }];
  Ib || (na[1](), na = n);
  var Zd = function() {
    var a = O, b = a.U, c = Yd(a.A, a.N), d = a.o = c.o;
    a.G = c.G;
    Vc(b, d) || (O = n, F(Qa, n, 0, !0));
  };
  var hc = function() {
    var a = O;
    a.$ = a.o.match(a.m[1]) || [];
    a.s.push(a.B, 0);
    F(Jb, n, 2);
  };
  var Kb = [];
  var Xc = function(a) {
    function b(h) {
      var k = h;
      0 <= h && (k = Wd[h]);
      0 <= k[1] && (k[1] = c(k[1]));
      return k;
    }
    function c(h) {
      var k = h;
      return 0 <= h && (k = Lb[h], !k.exec) ? (Kb.push(h), h) : k;
    }
    var d = O, e = db[a];
    Hb(e) && (e = db[a] = db[e]);
    var f = e[0];
    if (0 <= f) {
      f = Vd[f];
      if (0 <= f["-num"]) {
        var p = f["-num"];
        delete f["-num"];
        for (var g = -1; 9 > g;) {
          f["" + ++g] = p;
        }
      }
      e[0] = f;
    }
    for (var m in f) {
      f[m] = b(f[m]);
    }
    e[1] = c(e[1]);
    f = e[2];
    g = 0;
    for (p = f.length; g < p; ++g) {
      f[g] = b(f[g]);
    }
    Kb.length ? F(ic, a, 2) : (d.m ? d.l && (d.l.g[0].m = e) : d.m = e, F(hc, n, 1));
  };
  var Yd = function(a, b) {
    function c(m) {
      var h = m.nodeType;
      if (1 === h) {
        if (!ia(m, "nocode")) {
          for (h = m.firstChild; h; h = h.nextSibling) {
            c(h);
          }
          h = ja(m);
          if ("BR" === h || "LI" === h) {
            d[p] = "\n", f[p << 1] = e++, f[p++ << 1 | 1] = m;
          }
        }
      } else if (3 === h || 4 === h) {
        if (h = m.nodeValue) {
          h = b ? h.split("\r\n").join("\n").split("\r").join("\n") : h.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[p] = h, f[p << 1] = e, e += h.length, f[p++ << 1 | 1] = m;
        }
      }
    }
    var d = [], e = 0, f = [], p = 0;
    c(a);
    var g = d.join("");
    "\n" === g.charAt(g.length - 1) && (g = g.substr(0, g.length - 1));
    return {o:g, G:f};
  };
  var $d = function(a, b, c) {
    function d(h) {
      var k = h.nodeType;
      if (1 === k && !ia(h, "nocode")) {
        if ("BR" === ja(h)) {
          e(h), h.parentNode && ka(h);
        } else {
          for (h = h.firstChild; h; h = h.nextSibling) {
            d(h);
          }
        }
      } else if ((3 === k || 4 === k) && c) {
        var l = h.nodeValue, t = l.indexOf("\r\n"), B = 2;
        -1 === t && (t = l.indexOf("\n"), B = 1);
        -1 === t && (t = l.indexOf("\r"));
        -1 !== t && (k = l.substr(0, t), h.nodeValue = k, (l = l.substr(t + B)) && ld(h, l), e(h), k || ka(h));
      }
    }
    function e(h) {
      function k(t, B) {
        var N = B ? t.cloneNode(!1) : t, z = t.parentNode;
        if (z) {
          z = k(z, 1);
          var S = t.nextSibling;
          z.appendChild(N);
          for (var G = S; G; G = S) {
            S = G.nextSibling, z.appendChild(G);
          }
        }
        return N;
      }
      for (; !h.nextSibling;) {
        if (h = h.parentNode, !h) {
          return;
        }
      }
      h = k(h.nextSibling, 0);
      for (var l; (l = h.parentNode) && 1 === l.nodeType;) {
        h = l;
      }
      p.push(h);
    }
    for (var f = r.createElement("li"); a.firstChild;) {
      f.appendChild(a.firstChild);
    }
    for (var p = [f], g = 0; g < p.length; ++g) {
      d(p[g]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > w) {
        var m = r.createElement("ol");
        m.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        p[0] = m.firstChild;
      } else {
        Da(f, "value", b);
      }
    }
    m = ma(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    g = 0;
    for (b = p.length; g < b; ++g) {
      f = p[g], rb(f, "L" + (g + a) % 10), f.firstChild || Rd(f, "\u00a0"), m.appendChild(f);
    }
  };
  var Md = function() {
    var a = O, b = a.o, c = b.length, d = 0, e = a.G, f = e.length, p = 0, g = a.s, m = g.length, h = 0;
    g[m] = c;
    var k, l;
    for (l = k = 0; l < m;) {
      g[l] !== g[l + 2] ? (g[k++] = g[l++], g[k++] = g[l++]) : l += 2;
    }
    m = k;
    for (l = k = 0; l < m;) {
      var t = g[l], B = g[l + 1];
      for (l += 2; l + 2 <= m && g[l + 1] === B;) {
        l += 2;
      }
      g[k++] = t;
      g[k++] = B;
    }
    g.length = k;
    a = a.A;
    m = "";
    a && (m = a.style.display, ha(a, "display", "none"));
    for (; p < f;) {
      k = e[p + 2] || c;
      t = g[h + 2] || c;
      l = Math.min(k, t);
      B = e[p + 1];
      var N;
      if (1 !== B.nodeType && (N = b.substring(d, l))) {
        9 > u && (N = N.split("\n").join("\r"));
        var z = oc(B, "span", {className:Xd[g[h + 1]]}, N);
        ka(B);
        d < k && (e[p + 1] = ld(z, b.substring(l, k)));
      }
      d = l;
      d >= k && (p += 2);
      d >= t && (h += 2);
    }
    a && ha(a, "display", m);
    O = n;
    F(Qa, n, 3, !0);
  };
  var kb = [], lb;
  Sa(function(a) {
    if (a) {
      a = [M(r, "pre"), M(r, "code"), M(r, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var c = 0, d = a[b].length; c < d; ++c) {
          Bd(a[b][c]);
        }
      }
      return !0;
    }
  });
  var Bd = function(a) {
    kb.push(a);
    lb = kb.length;
    1 === lb && (yc ? H(yc, Qa) : na ? na.push(function() {
      H(Qa);
    }) : H(Qa));
  };
  var Qa = function() {
    function a(p, g) {
      return (p.split(g)[1] || "").split(" ")[0];
    }
    if (!O) {
      lb !== kb.length && xc && xc(lb - kb.length, lb);
      var b = kb.shift();
      if (b) {
        if (ia(b, "prettyprint") && !ia(b, "prettyprinted")) {
          for (var c = !1, d = b.parentNode; d !== I; d = d.parentNode) {
            var e = ja(d);
            if (("PRE" === e || "XMP" === e || "CODE" === e) && ia(d, "prettyprint")) {
              c = !0;
              break;
            }
          }
          if (!c) {
            c = b.className;
            qa(b, "prettyprinted");
            d = !1;
            if (!d) {
              d = a(c, "lang-") || a(c, "language-");
              var f;
              !d && (f = Nd(b)) && "CODE" === ja(f) && (d = a(f.className, "lang-") || a(f.className, "language-"));
            }
            e = ja(b);
            "PRE" === e || "XMP" === e ? e = 1 : (e = b.currentStyle, f = r.defaultView, e = (e = e ? e.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === e.substr(0, 3));
            f = !1;
            (f = "true" === f || +f) || (f = a(c, "linenums:") || ia(b, "linenums"), f = f.length ? +f : f);
            f && $d(b, f, e);
            O = {U:d, A:b, ba:f, N:e, B:0, v:0, P:{}, s:[]};
            F(Zd);
            return;
          }
        }
        F(Qa, n, 0, !0);
      } else {
        wc && wc();
      }
    }
  };
  q.PR = {RegExpProxy:cb, prettifyElement:Bd, registerCompleteHandler:function(a, b) {
    wc = a;
    xc = b;
  }};
  var uc = r.scripts || M(r, "script");
  var K = uc[uc.length - 1].src.split("/");
  --K.length;
  "js" === K[K.length - 1] && --K.length;
  (K = K.join("/")) && (K += "/");
  var Ad = Pd || "1" === Z(I, "mob");
  Mb = (Ad ? "mb" : "pc") + "/";
  6.1 > Zc && (ib ? ib(hd) : C(q, "scroll", hd));
  Oa(zc);
  6.1 > Zc && (ib ? ib(jd) : C(q, "scroll", jd));
  Oa(Ac);
  10 > u && (11 !== Od || 5 !== u) || (9 > w || 1 > x || !ea && !q.addEventListener ? r.write('<link href="' + K + "css/" + Mb + mc + '" rel="stylesheet"' + (8 > w ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > w || 1.5 > x || 532 >= fb || 8 > gb) && W(function() {
    ma(Ma, "link", {href:K + "css/" + Mb + mc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Ib) {
    if (Rb) {
      var yc = function(a) {
        q.RegExpCompat = function(b) {
          for (var c; c = na.shift();) {
            c(b);
          }
          na = n;
          H(a);
          wd(K + "js/regexpcompat.js");
        };
        yc = n;
        vd(K + "js/regexpcompat.js");
      };
    } else {
      q.RegExpCompat = function(a) {
        for (var b; b = na.shift();) {
          b(a);
        }
        na = n;
        wd(K + "js/regexpcompat.js");
      }, vd(K + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

