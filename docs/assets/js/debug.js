var C, ma;
Array.prototype.pop || (Array.prototype.pop = function() {
  var z = this[this.length - 1];
  --this.length;
  return z;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var z = arguments, q = 0, H = z.length, v = this.length; q < H; ++q) {
    this[v + q] = z[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var z = this[0], q = 1, H = this.length; q < H; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return z;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var z = arguments, q = z.length, H = this.length += q - 1, v = H; v >= q; --v) {
    this[v] = this[v - q];
  }
  for (v = 0; v < q; ++v) {
    this[v] = z[v];
  }
  return H;
});
Array.prototype.splice || (Array.prototype.splice = function(z, q) {
  var H = arguments, v = H.length - 2 - q, na = this.slice(z, z + q), r;
  if (0 < v) {
    var I = this.length - 1;
    for (r = z + q; I >= r; --I) {
      this[I + v] = this[I];
    }
  } else if (0 > v) {
    I = z + q;
    for (r = this.length; I < r; ++I) {
      this[I + v] = this[I];
    }
    this.length += v;
  }
  I = 2;
  for (r = H.length; I < r; ++I) {
    this[I - 2 + z] = H[I];
  }
  return na;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(z, q) {
  var H = this.length >>> 0;
  if (0 === H) {
    return -1;
  }
  if (q) {
    var v = q || 0;
    v = -Infinity === v ? 0 : (0 > v ? -v : v) | 0;
    if (H <= v) {
      return -1;
    }
  }
  for (v = 0 <= v ? v : 0 < H + v ? H + v : 0; v < H; ++v) {
    if (this[v] === z) {
      return v;
    }
  }
  return -1;
});
(function(z, q, H, v, na, r, I, we, ia, xe, m) {
  function da() {
    return Ha ? jc ? 2 : kc ? 3 : 1 : 0;
  }
  function Cb(a) {
    L(q, "load", Cb);
    Cb = m;
    Ia(X, a, !0);
    X = m;
  }
  function $a(a, b) {
    Ja(function() {
      var c = Db(a);
      b(c);
      c.addListener(b);
      return !0;
    });
  }
  function ab() {
    for (var a, b = 0, c = +new na(); b < ja.length;) {
      c < ja[0].t ? ++b : (a = ja.splice(b, 1)[0], a.f(a.p));
    }
    wa = ja.length ? setTimeout(ab, bb) : 0;
  }
  function Eb() {
    for (var a, b = 0; b < Fb.length; ++b) {
      a = Fb[b], a.f();
    }
  }
  function B(a) {
    if (z[0] === a) {
      return ka === ka + "" ? ia(ka) : ka;
    }
  }
  function Y(a) {
    var b = z[3];
    if (z[2] === a) {
      return b === b + "" ? ia(b) : b;
    }
  }
  function Oc() {
    Ka && (Ka = clearInterval(Ka));
  }
  function Pc() {
    wa && (wa = clearTimeout(wa));
  }
  function Qc(a, b, c) {
    var d = ["<", a], f = 1, e, n;
    if (b) {
      for (e in b) {
        var g = b[e];
        if (null != g && "" !== g) {
          if ("style" === e) {
            d[++f] = ' style="';
            for (n in g) {
              for (var p = ++f, k, h = [], l = n.split(""), t = l.length; t;) {
                k = l[--t], "A" <= k && "Z" >= k && (k = "-" + k.toLowerCase()), h[t] = k;
              }
              d[p] = h.join("") + ":" + g[n] + ";";
            }
            d[++f] = '"';
          } else {
            "className" === e && (e = "class"), d[++f] = " " + e + '="' + g + '"';
          }
        }
      }
    }
    d[++f] = ">";
    null != c && (S && "font" !== a ? d[++f] = "<FONT>" + c + "</FONT>" : d[++f] = c);
    d[++f] = "</" + a + ">";
    return d.join("");
  }
  function T(a, b) {
    var c = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], f = 0, e;
    for (e = c.length; f < e; ++f) {
      d[f] = c[f];
    }
    return d;
  }
  function Rc(a) {
    return S ? a.parentElement : a.parentNode;
  }
  function cb(a, b, c, d, f, e) {
    if (S) {
      var n = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var g = xa(2 > a ? U(b) : b);
      g = 2 > a ? g.indexOf(b) + a : g.length;
      b.insertAdjacentHTML(n, Qc(c, d, f));
      b = xa(b)[g];
      null != f && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Sc) {
      b = r.createElement(Qc(c, d));
    } else {
      b = e ? r.createElementNS("http://www.w3.org/2000/svg", c) : r.createElement(c);
      if (d) {
        for (n in d) {
          if ((c = d[n]) || 0 === c) {
            switch(n) {
              case "class":
              case "className":
                Gb(b, c);
                break;
              case "style":
                a = b.style;
                for (g in c) {
                  a[g] = c[g];
                }
                break;
              default:
                La(b, n, c);
            }
          }
        }
      }
      Hb || null != f && db(b, f);
    }
    return b;
  }
  function db(a, b) {
    if (S) {
      return cb(2, a, "font", m, b);
    }
    var c = r.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function Tc(a, b) {
    9 > u ? a.className = b : a.setAttribute("class", b);
  }
  function Uc(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Ia(a, b, c) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    c && (a.length = 0);
  }
  function ya(a, b, c) {
    X || eb.length || M(Vc);
    eb.push(a, b, c);
  }
  function Vc() {
    var a = eb, b;
    for (eb = []; b = a.shift();) {
      Ia(b, a.shift(), a.shift());
    }
  }
  function Ib(a) {
    var b = a || event;
    a = fb[b.type];
    var c = -1, d, f;
    u ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : Jb && (b.I = b.stopPropagation, b.stopPropagation = function() {
      f = !0;
    });
    for (; d = a[++c];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = gb, this.h = m) : 7.2 > w && this === r && d.j === q && (q.h = d.i, q.h(b), delete q.h);
    }
    if (u) {
      return b.preventDefault = b.stopPropagation = m, b.returnValue;
    }
    Jb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (Kb = !0), f && !Kb && b.I(), b.I = b.stopPropagation = m);
  }
  function Wc() {
    var a = 9 === Ma.offsetWidth;
    Na !== a && (ya(Xc, Na = a), C("p_cssAvailability:" + Na));
  }
  function Yc() {
    !X && Oa && (Lb(Oa), Oa = M(Wd));
  }
  function Wd() {
    Oa = 0;
    Ia(Zc);
  }
  function lc(a) {
    X || Ia($c, a);
  }
  function Mb(a) {
    var b = a.keyCode || a.aa, c = Nb.length, d, f, e, n;
    if ("keydown" !== a.type || 13 === b) {
      for (; c;) {
        if (b = Nb[--c], b.C === this || b.u === this) {
          c = b.C;
          var g = d = b.u;
          if (b.O) {
            if (N(c, "width", b.Z), c.src = b.Y, Gb(g, b.S), c = b.K) {
              R(c, b.R), Gb(c, "caption jsCap");
            }
          } else {
            if (f = b.M) {
              for (delete b.M; d = U(d);) {
                if (oa(d, "caption")) {
                  b.K = d, b.R = d.style.cssText, za(d, "jsCap");
                } else {
                  var p = pa(d);
                  if ("DIV" === p || "P" === p || "BLOCKQUOT" === p || "LI" === p || "DD" === p || "TD" === p || "TH" === p || "FORM" === p || "PRE" === p) {
                    break;
                  }
                }
              }
              d = (d.offsetWidth | 0) - 4;
              1600 < d && (d = 1600);
              if (b.L && 0 < f.split("/").pop().indexOf("=")) {
                f = f.split("=");
                p = f.length;
                if (e = f[p - 1]) {
                  (n = ia(e.substr(1))) && e === "s" + n ? f[p - 1] = "w" + d : f[p] = "w" + d;
                }
                f = f.join("=");
              } else if (b.L || 0 < f.indexOf(".bp.blogspot.com/")) {
                f = f.split("/");
                p = f.length;
                if (e = f[p - 2]) {
                  (n = ia(e.substr(1))) && e === "s" + n ? f[p - 2] = "w" + d : f.splice(p - 1, 0, "w" + d);
                }
                f = f.join("/");
              }
              b.V = f;
            }
            b.S = Xd(g);
            za(g, "jsPicaLarge");
            N(c, "width", "");
            c.src = b.V;
            if (c = b.K) {
              R(c, ""), za(c, "jsCapLarge");
            }
          }
          b.O = !b.O;
          break;
        }
      }
      mc(a);
    }
  }
  function mc(a) {
    a.preventDefault();
    a.stopPropagation();
  }
  function Pa(a) {
    for (var b = arguments, c = 0, d = b.length; c < d; ++c) {
      if (isFinite(b[c])) {
        return b[c];
      }
    }
    return 0;
  }
  function Ob(a) {
    var b = hb;
    if (Na) {
      if (ib && !b) {
        if (+new na() < ib) {
          return;
        }
        ib = m;
      }
      7 === a ? (y("t"), Aa = 0) : (y("s"), Aa && (Aa = Lb(Aa)), Qa = Pa(q.pageYOffset, q.scrollY, Ra.scrollTop, J.scrollTop));
      b ? (hb = Pb(m, b[0], b[1])) || (ib = +new na() + 99) : Pb();
      ad();
    } else {
      hb = m;
    }
  }
  function bd() {
    y("w.blur");
  }
  function Pb(a, b, c) {
    function d(ea) {
      g = ea;
      if (nc) {
        p = nc + ":translate" + (Qb ? "3D(0," : "(0,") + ea + (Qb ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
      } else if (0 !== ea) {
        if (!cd && (dd || jb)) {
          var Rb = Ba.offsetWidth;
        }
        p = jb ? "position:fixed;width:" + Rb + "px;top:" + (ea - f + l) + "px" : cd ? "top:" + ea + "px;left:0" : "position:absolute;left:0;width:100%;top:" + ea + "px";
        dd && p && (p += ";" + (0 > ea ? "clip:rect(" + -ea + "px " + Rb + "px " + A + "px 0)" : ea + A < O ? "clip:rect(0 " + Rb + "px " + A + "px 0)" : "clip:rect(0 " + Rb + "px " + (O - ea) + "px 0)"), 8 > u || (p = p.split(" ").join(",")));
      }
    }
    var f = Qa, e = ed, n = Ba.offsetTop === e.offsetTop, g = 0, p = "", k = !0;
    if (n) {
      for (var h = 0, l = 0, t = e; t && t !== J;) {
        l += t.offsetTop, t = t.offsetParent;
      }
      g = fd;
      t = Pa(q.innerHeight, Ra.offsetHeight);
      var E = e.offsetHeight, A = ba.offsetHeight, O = A < E ? E : A, P = f, V = P + t, Sb = l, Tb = Sb + O, gd = l + g, Yd = gd + A;
      e = P < Sb ? Sb : P;
      var qa = Tb < V ? Tb : V, Sa = qa - e;
      P = Tb <= P;
      V = V <= Sb;
      if (b !== m) {
        k = l + b;
        a = k + c;
        if (P || V) {
          return t <= c ? (b = l, y("4.1.1")) : P ? (b = Tb - c, y("4.1.2")) : (b = l + c - t, y("4.1.3")), ib = m, q.scroll(Pa(q.pageXOffset, q.scrollX, Ra.scrollLeft, J.scrollLeft), b), y("4.1.*"), hb;
        }
        A <= Sa ? (h = 3, y("4.2")) : c <= Sa ? A - b <= Sa ? (h = 2, y("4.3.1")) : e <= k && a <= qa ? e < l + g && (h = 4, y("4.3.2")) : e <= k && k <= qa ? (h = 5, y("4.3.3")) : e <= a && a <= qa ? (h = 4, y("4.3.4")) : a < e ? (h = 4, y("4.3.5")) : (h = 5, y("4.3.6")) : (h = 4, y("4.4"));
        k = m;
      } else {
        a !== m ? A <= Sa ? (h = 7, k = !1, y("3.1")) : (g -= 60 * a, h = qa - l - A, a = e - l, g < h ? (g = h, y("3.2.1")) : a < g ? (g = a, y("3.2.2")) : y("3.2.3"), h = 6) : E <= A || (P ? (h = 1, y("2.2.1")) : V ? y("2.2.2") : A <= Sa ? (h = 3, y("2.3")) : e < gd ? (h = 3, y("2.4.1")) : Yd < qa ? (h = 2, y("2.4.2")) : f < l + A - Sa ? y("2.4.3") : (h = 2, y("2.4.4")));
      }
      switch(h) {
        case 0:
          d(0);
          break;
        case 1:
          d(O - A);
          break;
        case 2:
          d(qa - l - A);
          break;
        case 3:
          d(e - l);
          break;
        case 4:
          d(e - l - b);
          break;
        case 5:
          d(qa - l - (b + c));
        case 6:
          d(g);
      }
      hd(g, A, l, O, t, b || "-", c || "-");
    } else {
      hd(g, "-", "-", "-", "-", "-", "-");
    }
    R(ba, p);
    fd = g;
    return n && k;
  }
  function Ca(a) {
    if (Na) {
      y("m");
      x && (Qa = Pa(q.pageYOffset, Ra.scrollTop, J.scrollTop), ad());
      var b = this !== a.target, c = b && Pa(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && c && Pb(9 >= c ? -9 >= c ? -3 : c : 3) && (a.preventDefault(), a.stopPropagation());
    }
  }
  function id(a) {
    for (var b = a.target, c = -1, d; d = Ub[++c];) {
      Vb(d, b) && Ca(a);
    }
  }
  function Da(a) {
    if (Na) {
      var b = !!nc || x, c = a.target || a.srcElement, d = 0;
      if (Vb(ba, c)) {
        y(a.type || "ie5focus");
        D(c, "blur", jd);
        for (a = c.offsetHeight; c && (b ? Vb(ba, c) : ba !== c);) {
          d += c.offsetTop, c = c.offsetParent;
        }
        Zd ? (hb = [d, a], Aa && Lb(Aa), Aa = M(Ob, 7, 1 > x ? 500 : 0)) : (Qa = Pa(q.pageYOffset, q.scrollY, Ra.scrollTop, J.scrollTop), Pb(m, d, a));
        kd(d, a);
      }
    }
  }
  function $d() {
    kb = q.onerror;
    q.onerror = ae;
    var a = r.activeElement;
    oc !== a && (oc = a, Da({target:a}));
    q.onerror = kb;
    kb = m;
  }
  function ae() {
    C("error!");
    q.onerror = kb;
    kb = oc = m;
    return !0;
  }
  function jd() {
    L(this, "blur", jd);
    kd(0, 0);
  }
  function y(a) {
    lb && (Wb && (Wb = Lb(Wb)), Wb = M(be, 0, 1400), lb.innerHTML += " " + a);
  }
  function be() {
    lb.innerHTML = "";
  }
  function ad() {
    mb && (N(mb, "top", (Qa / 10 | 0) + "px"), ld.innerHTML = " scrl:" + (Qa | 0));
  }
  function hd(a, b, c, d, f, e, n) {
    Ta && (N(Ta, "top", ((a + c) / 10 | 0) + "px"), N(Ta, "height", (b / 10 | 0) + "px"), N(mb, "height", (f / 10 | 0) + "px"), N(pc, "height", (J.scrollHeight / 10 | 0) + "px"), md.innerHTML = "conY:" + c + "/sidY" + a + ", conH:" + d + "/sidH" + b + ", focY:" + e + " focH:" + n);
  }
  function kd(a, b) {
    nb && (N(nb, "top", (a / 10 | 0) + "px"), N(nb, "height", (b / 10 | 0) + "px"));
  }
  function ce() {
    qc.call(Xb);
  }
  function rc() {
    r.fullscreenElement || r.fullscreen || r.webkitIsFullscreen || r.msFullscreenElement || q.fullScreen ? (La(Xb, "id", "blog2slide-root"), Ua[1].parentNode.insertBefore(ob, Ua[1]), sc(), r.onkeydown = de) : Ea && (ra(ob), sa(Xb, "id"), sa(Ea, "id"), Ea = r.onkeydown = m);
  }
  function sc() {
    Ea && sa(Ea, "id");
    Fa = 0 < Fa ? tc < Fa ? tc : Fa : 0;
    Ea = Ua[Fa];
    La(Ea, "id", "blog2slide-current");
  }
  function de(a) {
    if ("ArrowRight" === a.key || 39 === a.keyCode) {
      ++Fa, sc();
    } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
      --Fa, sc();
    }
  }
  function Yb(a) {
    return a === "" + a;
  }
  function pb(a, b) {
    return qb ? new nd(a, b) : new v(a, b);
  }
  function K(a, b, c, d, f) {
    var e = Z.codeBlocks[Z.codeBlocks.length - 1], n = Va(), g = n - uc;
    switch(c || 0) {
      case 1:
        Z.initRegExpCount++;
        Z.initRegExpTotal += g;
        Z.initRegExpMax < g && (Z.initRegExpMax = g, Z.initRegExpSource = f.toString(), Z.initRegExpInstance = f);
        break;
      case 2:
        e.decorateCount++;
        e.decorateTime += g;
        break;
      case 3:
        e.updateDOMTime += g;
    }
    if (n - rb < ee && !d) {
      return uc = n, a(b);
    }
    M(fe, {T:a, W:b});
  }
  function fe(a) {
    rb = uc = Va();
    a.T(a.W);
  }
  function od(a, b) {
    a && sb[a] || (a = pd.test(b) ? "default-markup" : "default-code");
    var c = !!sb[a];
    c && K(qd, a, 0, !0);
    return c;
  }
  function Zb() {
    function a(O, P, V) {
      P && (b.g = b.g || [], b.g.push({l:b, A:b.A, N:1, s:n, B:O, o:P, m:V, P:{}, v:0}));
    }
    var b = W, c = b.m, d = c[0], f = c[2], e = b.B, n = b.s, g = b.$.shift(), p = b.P;
    if (g) {
      var k = p[g], h;
      if (!(0 <= k)) {
        if (h = d[g.charAt(0)]) {
          var l = g.match(h[1]);
          k = h[0];
        } else {
          for (k = 0, d = -1; h = f[++d];) {
            if (l = g.match(h[1])) {
              k = h[0];
              break;
            }
          }
        }
        !(h = Yb(k)) || l && Yb(l[1]) || (h = !1, k = 11);
        h || (p[g] = k);
      }
      f = b.v;
      p = g.length;
      b.v += p;
      if (h) {
        h = l[1];
        d = g.indexOf(h);
        var t = h.length, E = d + t;
        l[2] && (E = p - l[2].length, d = E - t);
        a(e + f, g.substr(0, d), c);
        if (t && od(k, h)) {
          a(e + f + d, h);
          var A = !0;
        }
        a(e + f + E, g.substr(E), c);
        b.g && b.g.length && (W = b.g.shift());
        A || (W !== b ? K(vc, m, 2) : K(Zb, m, 2));
      } else {
        n.push(e + f, k), K(Zb, m, 2);
      }
    } else {
      b.l ? (W = b.l.g.shift()) ? K(vc, m, 2) : (W = b.l, K(Zb, m, 2)) : K(ge, m, 2);
    }
  }
  function wc(a) {
    if ($b.length) {
      var b = $b.shift(), c = ac[b];
      if (c.pop) {
        ac[b] = c = pb(c[0], c[1]);
      } else if (Yb(c)) {
        ac[b] = c = pb(c);
      } else {
        return wc(a);
      }
      K(wc, a, 1, !1, c);
    } else {
      K(qd, a);
    }
  }
  function he(a) {
    for (var b, c = a.firstChild; c; c = c.nextSibling) {
      var d = c.nodeType;
      b = 1 === d ? b ? a : c : 3 === d ? rd.test(c.nodeValue) ? a : b : b;
    }
    return b === a ? m : b;
  }
  var gb = H, J = r.body, aa = J.style, ta, ka = z[1], u = B(2) || B(3), la = B(7), xc = B(5) || B(6), w = B(8) || B(9), x = B(11) || B(12), tb = x && 0 <= z.conpare(ka, "1.9.1"), yc = B(13), ub = B(15), sd = B(16) || B(17), td = B(10) || B(25), vb = B(20) || B(22);
  vb || B(23) || B(21) || B(24);
  var ud = vb && ia(I.userAgent.split("Edg/")[1]), ie = ia(I.appVersion.split("Trident/")[1]) + 4, zc = Y(35) || Y(36) || Y(37), vd = !u && !la && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Ac = (la ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > w ? "opr70" : 8 > w ? "opr72" : 9.5 > w ? "opr" + (w | 0) : x && !tb ? 1.4 <= x ? "gck19" : 1.3 <= 
  x ? "gck13" : 1 <= x ? "gck12" : 0.9 <= x ? "gck09" : 0.8 <= x ? "gck08" : "gck07" : "modern") + ".css", bc = "", je = Y(1) || Y(2) || Y(3) || Y(4) || Y(8) || Y(9) || Y(10), wd, Bc = aa.transform !== m ? "transform" : aa["-o-transform"] !== m ? "-o-transform" : aa["-ms-transform"] !== m ? "-ms-transform" : aa.MozTransform !== m ? "-moz-transform" : aa["-webkit-transform"] !== m ? "-webkit-transform" : "", X = [], Xc = [], ca = [], xd, cc = [], dc = [];
  C = function(a) {
    cc.push(a);
  };
  ma = function(a) {
    dc.push(a);
  };
  var Cc = function(a) {
    Fb.length || (Ka = setInterval(Eb, yd));
    Fb.push({f:a, J:++zd});
    return zd;
  };
  var Ad = function() {
    Ka && (Oc(), Ka = setInterval(Eb, yd));
  };
  var Fb = [], yd = 500, zd = 0, Ka;
  if (5 > u || la) {
    q._wdb_onlooptimer = Eb, Eb = "_wdb_onlooptimer()";
  }
  var M = function(a, b, c) {
    ja.length || (wa = setTimeout(ab, bb));
    ja.push({f:a, p:b, J:++Bd, t:+new na() + (bb < c ? c : bb)});
    return Bd;
  };
  var Lb = function(a) {
    for (var b = ja.length, c; c = ja[--b];) {
      if (c.J === a) {
        ja.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var Cd = function() {
    wa && (Pc(), wa = setTimeout(ab, bb));
  };
  var ja = [], bb = 16, Bd = 0, wa;
  if (5 > u || la) {
    q._wdb_ontimer = ab, ab = "_wdb_ontimer()";
  }
  var S = 5 > u;
  var wb = T(r, "html")[0];
  var Wa = T(r, "head")[0];
  var Ga = function(a) {
    return q[a] || r[a] || r.getElementById(a);
  };
  var U = Rc;
  var xa = function(a) {
    a = S ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var ke = function(a) {
    var b = !(7.03 < w && 7.2 > w) && a.children;
    a = b ? b : a.childNodes;
    for (var c = [], d = a.length, f = -1, e; d;) {
      if (e = a[--d], b || 1 === e.nodeType) {
        S && "FONT" === e.tagName || (c[++f] = e);
      }
    }
    return c;
  };
  var Dd = function(a) {
    return S ? a.children.length ? a.children[0] : null : a.firstChild;
  };
  var F = function(a, b, c, d, f) {
    b = cb(2, a, b, c, d, f);
    S || (a.appendChild(b), Hb && null != d && db(b, d));
    return b;
  };
  var ec = function(a, b, c, d, f) {
    b = cb(0, a, b, c, d, f);
    S || (Rc(a).insertBefore(b, a), Hb && null != d && db(b, d));
    return b;
  };
  var le = function(a, b, c, d, f) {
    b = cb(1, a, b, c, d, f);
    var e;
    S || ((e = a.nextSibling) ? U(e).insertBefore(b, e) : U(a).appendChild(b), Hb && null != d && db(b, d));
    return b;
  };
  var me = db;
  var Ed = function(a, b) {
    var c;
    if (S) {
      return cb(1, a, "font", m, b);
    }
    var d = r.createTextNode("" + b);
    (c = a.nextSibling) ? U(a).insertBefore(d, c) : U(a).appendChild(d);
    return d;
  };
  var ra = function(a) {
    U(a) ? S ? a.outerHTML = "" : U(a).removeChild(a) : C("[DOM] p_DOM_remove(), No parentNode!");
  };
  var Vb = function(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== wb;) {
      if (b = U(b), a === b) {
        return !0;
      }
    }
  };
  var Sc = 9 > u, Hb = Sc;
  var pa = function(a) {
    return a.tagName.toUpperCase();
  };
  var fa = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var La = function(a, b, c) {
    a.setAttribute(b, c);
  };
  var sa = function(a, b) {
    a.removeAttribute(b);
  };
  var Fd = function(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  };
  var Xd = function(a) {
    return a.className;
  };
  var Gb = Tc;
  var oa = Uc;
  var za = function(a, b) {
    var c;
    if (!Uc(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      Tc(a, c + b);
    }
  };
  var N = function(a, b, c) {
    a.style[b] = c;
  };
  var R = function(a, b) {
    var c = -1, d, f;
    if (5.5 > u) {
      if (b) {
        for (d = b.split(";"); f = d[++c];) {
          var e = f.split(":");
          a.style[e[0]] = f.substr(e[0].length + 1);
        }
      } else {
        a.removeAttribute("style");
      }
    } else {
      9 > w || 1 > x ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
    }
  };
  X.splice(0, 0, function() {
    function a(p) {
      p = xa(p);
      for (var k = p.length, h, l, t; k;) {
        if (h = p[--k], l = h.nodeType, 8 === l) {
          b && n.push(h);
        } else if (1 === l) {
          switch(l = pa(h), "/" === l.charAt(0) && (l = l.substr(1), g[l] = !0), l) {
            case "STYLE":
              if (7.2 <= w && 9 > w) {
                break;
              }
            case "LINK":
              S || d || Vb(Wa, h) || e.push(h);
              break;
            case "META":
              l = fa(h, "name") || fa(h, "property");
              for (t = f.length; t;) {
                if (0 === l.indexOf(f[--t])) {
                  n.push(h);
                  break;
                }
              }
              break;
            case "SCRIPT":
              if (Fd(h, "async")) {
                break;
              }
              if (c) {
                h.innerText = "";
                c = !1;
                break;
              }
            case "NOSCRIPT":
              if (Fd(h, "skip-cleanup")) {
                break;
              }
            case "!":
              n.push(h);
              break;
            case "SOURCE":
              q.HTMLSourceElement || n.push(h);
              break;
            default:
              g[l] ? n.push(h) : xa(h).length && a(h);
          }
        }
      }
      for (; e[0];) {
        Wa.appendChild(e.pop());
      }
      for (; n[0];) {
        ra(n.pop());
      }
    }
    ta = Ga("jsMain");
    var b = !(8 > w || 5 > u || la || 0.9 > x), c = xd, d = 7 > u, f = ["og:", "twitter:", "fb:"], e = [], n = [], g = {};
    a(wb);
  });
  var Na, G, Db = q.matchMedia, Ma, eb = [];
  X.push(function() {
    $a = m;
    Ma = F(J, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    ha(function() {
      eb.length && M(Vc);
    });
  });
  var D = function(a, b, c, d) {
    if (Gd) {
      a.addEventListener(b, c, d ? vd ? d : d.capture : !1);
    } else {
      var f = {j:a, i:c};
      d = fb[b];
      var e = "on" + b, n, g;
      if (d) {
        for (n = d.length; g = d[--n];) {
          if (g.j === a && g.i === c) {
            return;
          }
        }
        fb[b].push(f);
      } else {
        fb[b] = d = [f], Dc || (b = a[e], "function" === typeof b && b !== Ib && d.unshift({j:a, i:b}));
      }
      Dc ? a.attachEvent(e, Ib) : a[e] = Ib;
    }
  };
  var L = function(a, b, c, d) {
    if (Gd) {
      a.removeEventListener(b, c, d ? vd ? d : d.capture : !1);
    } else {
      d = fb[b];
      b = "on" + b;
      var f, e, n;
      if (d) {
        for (f = d.length; e = d[--f];) {
          e.j === a && (e.i === c ? d.splice(f, 1) : n = !0);
        }
        n || (Dc ? a.detachEvent(b, Ib) : (a[b] = gb, a[b] = null));
      }
    }
  };
  var fb = {}, Dc = !1, Jb = 525.13 > ub, Gd = !Jb && !la && q.addEventListener, Kb;
  Jb && wb.addEventListener("click", function(a) {
    if (Kb) {
      return Kb = !1, a.preventDefault(), !1;
    }
  });
  var ha = function(a) {
    X ? X.push(a) : alert("Load event has already been dispatched!");
  };
  var Xa = function(a) {
    fc && fc.push(a);
  };
  var fc = [];
  if (419.3 >= ub) {
    var gc = function() {
      if (gc) {
        var a = r.readyState;
        "loaded" === a || "complete" === a ? (gc = m, Cb()) : M(gc);
      }
    };
    M(gc);
  } else {
    D(q, "load", Cb);
  }
  u || 0.9 <= x && 1.8 > x ? D(q, "unload", function(a) {
    Ia(fc, a, !0);
  }) : fc = m;
  var Ja = function(a) {
    Xc.push(a);
  };
  ha(function() {
    Wc();
    Cc(Wc);
  });
  var Hd = function(a) {
    ca && ca.push(a);
  };
  var Id = 60 > x || yc, Ha, kc, jc;
  if (89 <= x || 89 <= vb || zc && 79 <= ud || Db && (Db("(forced-colors:none)").matches || Db("(forced-colors:active)").matches)) {
    var Jd = !0;
    $a("(forced-colors:active)", function(a) {
      Ha = a.matches;
      G = da();
      ya(ca, G);
      C("(forced-colors:active):" + G);
    });
  } else if (10 <= u || xc || zc && ud) {
    Jd = !0, $a("(-ms-high-contrast:black-on-white)", function(a) {
      Ha = kc = a.matches;
      G !== da() && (G = da(), ya(ca, G), C("(-ms-high-contrast:black-on-white):" + G));
    }), $a("(-ms-high-contrast:white-on-black)", function(a) {
      Ha = jc = a.matches;
      G !== da() && (G = da(), ya(ca, G), C("(-ms-high-contrast:white-on-black):" + G));
    }), $a("(-ms-high-contrast:active)", function(a) {
      Ha = a.matches;
      G !== da() && (G = da(), ya(ca, G), C("(-ms-high-contrast:active):" + G));
    });
  } else if (zc && (u || x && 0 <= z.conpare(ka, "1.8.1") || yc)) {
    var Ec = function() {
      function a(d, f) {
        if (f && "transparent" === d) {
          return 382.5;
        }
        if ("#" === d.charAt(0)) {
          return parseInt("0x" + d.substr(1, 2), 16) + parseInt("0x" + d.substr(3, 2), 16) + parseInt("0x" + d.substr(5, 2), 16);
        }
        var e = d.split("(")[1].split(",");
        return ia(e[0]) + ia(e[1]) + ia(e[2]);
      }
      var b = r.defaultView;
      var c = b ? b.getComputedStyle(Ma, null) : Ma.currentStyle;
      b = (c && c.color || "").split(" ").join("");
      c = (c && c.backgroundColor || "").split(" ").join("");
      b && (Ha = "#123456" !== b && "rgb(18,52,86)" !== b, kc = a(b) < a(c, !0), jc = a(b) > a(c, !0), G !== da() && (G = da(), C("(forced-colors-fallback):" + G), ya(ca, G, Id)));
    };
    Ja(function(a) {
      if (a) {
        return N(Ma, "color", "#123456"), N(Ma, "backgroundColor", "#123456"), Id ? (Ec(), ca = m) : Cc(Ec), Ec = m, !0;
      }
    });
  } else {
    ca = da = m;
  }
  var Kd = function(a) {
    X || alert("p_listenImageReady is called back for images present at load time.");
    xb.push(a);
  };
  var xb = [], Fc = 7.5 <= w && 8 > w;
  Fc && function() {
    for (var a = r.images, b = a.length, c; b;) {
      c = a[--b], c.H = c.src, sa(c, "src");
    }
  }();
  ha(function() {
    function a() {
      d ? (f = c[--d], Fc && La(f, "src", f.H), ne(b, Fc ? f.H : f.src)) : xb = m;
    }
    function b(n) {
      Ia(xb, {D:f, F:n}, !d);
      a();
    }
    var c = r.images || T(r, "img"), d = c.length;
    if (12 > w || 532 > ub) {
      a();
    } else {
      for (; d;) {
        var f = c[--d];
        var e = 9 > u ? f.complete : 0 <= f.naturalWidth ? f.naturalWidth : f.width;
        ya(xb, {D:f, F:e}, !d);
      }
      xb = m;
    }
  });
  var Ld = function(a) {
    Zc.push(a);
  };
  var Zc = [], Oa;
  D(q, "resize", Yc);
  Xa(function() {
    Oa && clearTimeout(Oa);
    L(q, "resize", Yc);
  });
  var yb = function(a) {
    $c.push(a);
  };
  var $c = [], Md = 0, Nd = 1 > x || 1.2 <= x && 1.8 > x || 7.2 >= w;
  Nd ? Cc(function() {
    var a = q.scrollY || J.scrollTop;
    Md !== a && (Md = a, lc());
  }) : D(q, "scroll", lc);
  Xa(function() {
    Nd || L(q, "scroll", lc);
  });
  9 > u && ha(function() {
    var a = F(J, "div");
    R(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    wd = 1 < a.offsetHeight;
    R(a, "");
    ra(a);
  });
  var ne = function(a, b) {
    function c() {
      f || !e || d.complete ? (C("[imageTest] timer -> img.complete. img.width=" + d.width), M(a, !!d.width), d.onerror = d.onload = gb, d = a = m) : (--e, M(c));
    }
    var d = new Image(), f, e = 99;
    C("[imageTest] start.");
    d.onerror = function() {
      C("[imageTest] error!");
      f = !0;
    };
    d.onload = function() {
      C("[imageTest] onload.");
      f = !0;
    };
    d.src = b;
    M(c);
  };
  Kd(function(a) {
    var b = a.D;
    a = a.F;
    var c = U(b);
    !oa(c, "aBodyRoot") && a ? za(c, "img-loaded") : a || fa(b, "alt") || N(b, "display", "none");
  });
  if (!Jd && ca) {
    var zb, Od = function() {
      zb = F(Wa, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Q + "css/" + bc + "hc/" + Ac});
      if (Bc || 5.5 <= u && 9 > u && wd) {
        za(J, "jsCanRotate"), C("jsCanRotate!");
      }
      Od = m;
    };
    Hd(function(a) {
      a && !zb ? Od() : zb && (a ? Wa.appendChild(zb) : ra(zb));
    });
  }
  5.5 <= u && 8 > u && ca && Hd(function(a) {
    for (var b = T(r, "a"), c = b.length, d = 0; d < c; ++d) {
      b[d].hideFocus = !a;
    }
  });
  w && ha(function() {
    for (var a = T(r, "a"), b = a.length, c = 0, d; c < b; ++c) {
      d = a[c], "-1" === fa(d, "tabindex") ? sa(d, "tabindex") : fa(d, "href") && La(d, "tabindex", "0");
    }
    a = T(r, "input");
    c = 0;
    for (b = a.length; c < b; ++c) {
      d = a[c], "hidden" === fa(d, "type") && sa(d, "tabindex");
    }
  });
  var oe = x && 0 >= z.conpare(ka, "0.9");
  var hc = !(7.2 > w || oe);
  var Pd = function(a) {
    Gc ? X ? r.write('<script src="' + a + '">\x3c/script>') : ma("[DynamicScvriptLoader] Document already loaded! " + a) : X || ic.length ? ic.push(a) : Hc(a);
  };
  var Qd = function(a) {
    Gc ? C("[DynamicScvriptLoader] " + a + " loaded.") : a === Ic ? Hc(ic.shift()) : ma(a + " <> " + Ic);
  };
  var Gc = !hc, Rd = hc && 7.5 > w, Ic;
  if (!Gc) {
    hc = !0;
    var ic = [];
    Rd && (xd = !0);
    ha(function() {
      Hc(ic.shift());
    });
    var Hc = function(a) {
      if (Ic = a) {
        Rd ? Jc[0].src = a : F(Wa, "script", {src:a});
      }
    };
  }
  var Nb = [];
  if (!td) {
    var pe = aa.transition !== m || aa["-o-transition"] !== m || aa["-moz-transition"] !== m || aa["-webkit-transition"] !== m;
    Kd(function(a) {
      if (a.F && ta) {
        a = a.D;
        var b = U(a), c = "", d;
        if ("A" === pa(b) && 1 === ke(b).length) {
          var f = fa(b, "href");
          var e = f.split("?")[0].split("#")[0].split(".");
          e = (e[e.length - 1] || "").toLowerCase();
          if ((d = 0 < f.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + e + ".")) {
            D(b, "keydown", Mb), D(a, "click", Mb), D(b, "click", mc), pe && (c = a.naturalWidth + 4 + "px", N(a, "width", c)), za(b, "jsPica"), Nb.push({u:b, Y:a.src, Z:c, M:f, C:a, L:d});
          }
        }
      }
    });
    Xa(function(a, b) {
      for (a = -1; b = Nb[++a];) {
        L(b.u, "keydown", Mb), L(b.C, "click", Mb), L(b.u, "click", mc);
      }
    });
  }
  var Ub = ["jsSidebarFixer1", "jsSidebarFixer2"], Sd = x || yc || xc, Zd = !(6 <= u && 9 > u || w || 1 <= x && 1.3 > x), jb = !(5 > B(16) || 5 > B(17) || 2.2 > B(21) || 6 > B(12) || Y(30) && 534 > ub || Y(32) || 7 > u || 9 > w || 1 > x), dd = jb || 7 > u || 1 > x, cd = 7.5 > w, Ra, Ba, ed, ba, nc = Bc, fd = 0, Qa = 0, Qb, hb, ib, Aa, Kc = x && 0 <= z.conpare(ka, "0.9.7"), Td = x && 0 >= z.conpare(ka, "0.9.4");
  Ud || td || (Ja(function(a) {
    if (a) {
      if (!ta) {
        return !0;
      }
      a = -1;
      var b;
      Ra = "CSS1Compat" !== r.compatMode ? J : wb || J;
      Ba = Ga("jsSide");
      ed = ta;
      if (!Ba) {
        return !0;
      }
      yb(Ob);
      Ld(Ob);
      ba = ec(Dd(Ba), "div", {id:"jsSidebarFixer"});
      D(q, "blur", bd);
      for (8 > w || Td || 6 > u || (u || la ? D(ba, "focusin", Da) : Sd ? D(r, "focus", Da, {capture:!0, passive:!1}) : D(ba, "DOMFocusIn", Da, !1)); 1 < xa(Ba).length;) {
        ba.appendChild(xa(Ba)[1]);
      }
      for (Kc && !tb && D(r, "DOMMouseScroll", id, !1); b = Ub[++a];) {
        var c = Ga(b);
        c.onwheel !== m ? D(c, "wheel", Ca, {passive:!1}) : tb ? D(c, "MozMousePixelScroll", Ca, !1) : Kc ? Ub[a] = Ga(b) : (c.onmousewheel !== m || 9 <= w) && D(c, "mousewheel", Ca, !1);
      }
      u || xc || 2 > vb || (Qb = aa.perspective !== m || aa.MozPerspective !== m || aa["-webkit-perspective"] !== m);
      Ob();
      return !0;
    }
  }), Xa(function() {
    var a = -1, b;
    if (Kc && !tb) {
      L(r, "DOMMouseScroll", id, !1);
    } else {
      for (; b = Ub[++a];) {
        b = Ga(b), b.onwheel !== m ? L(b, "wheel", Ca, {passive:!1}) : tb ? L(b, "MozMousePixelScroll", Ca, !1) : (b.onmousewheel !== m || 9 <= w) && L(b, "mousewheel", Ca, !1);
      }
    }
    L(q, "blur", bd);
    8 > w || Td || 6 > u || (u || la ? L(ba, "focusin", Da, !1) : Sd ? L(r, "focus", Da, {capture:!0, passive:!1}) : L(ba, "DOMFocusIn", Da, !1));
    Ya && clearInterval(Ya);
  }));
  var Ya, oc, kb;
  6 > u && Ja(function(a) {
    if (!ta) {
      return !0;
    }
    a ? Ya = setInterval($d, 333) : Ya && (clearInterval(Ya), Ya = 0);
  });
  var md, ld, lb, pc, mb, Ta, nb, Wb;
  Ja(function(a) {
    if (a) {
      if (!ta) {
        return !0;
      }
      var b = xa(J);
      a = ec(b[0], "div");
      if (jb) {
        R(a, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
      } else {
        for (; b.length;) {
          a.appendChild(b.shift());
        }
        R(a, "width:100%; height:100%; overflow:auto; position:relative;");
        a = le(a, "div");
        R(wb, "overflow:hidden");
        R(J, "overflow:hidden");
        R(a, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
      }
      F(a, "div", m, Bc ? "transform" + (Qb ? "3D" : "") : jb ? "pos:fixed" : "pos:absolute");
      b = F(a, "div");
      md = F(b, "span");
      ld = F(b, "span");
      lb = F(a, "div");
      pc = F(a, "div");
      R(pc, "position:absolute;left:0;top:0;width:54px;background:#242");
      Ta = F(a, "div");
      R(Ta, "position:absolute;left:0;width:54px;background:#363");
      mb = F(a, "div");
      R(mb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
      nb = F(Ta, "div");
      R(nb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
      return !0;
    }
  });
  ha(function() {
    function a(n, g, p, k) {
      var h = k ? "div" : "cite";
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
      p = k ? ec(Dd(c), h, {className:p}) : F(c, h, {className:p});
      F(p, "a", 0 === g.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:g, X:w ? "0" : m} : {href:g, X:w ? "0" : m}, n);
    }
    if (ta) {
      for (var b = T(ta, "blockquote"), c, d = -1, f, e; c = b[++d];) {
        f = fa(c, "title"), e = fa(c, "cite"), f && e ? (sa(c, "title"), a(f, e, "js-bqLink", !0)) : e && (sa(c, "cite"), a(q.decodeURI ? decodeURI(e) : e, e, "js-bqCite"));
      }
    }
  });
  var qc, Xb, ob, Ea, Ua, Fa, tc;
  ha(function() {
    var a = Ga("blog2slide-start");
    if (a) {
      var b = r.onfullscreenchange !== m ? "f" : r.onmozfullscreenchange !== m ? "mozF" : r.onwebkitfullscreenchange !== m ? "webkitF" : 0;
      qc = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
      0 !== b || qc ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', D(a.firstChild, "click", ce), a = U(a), Xb = U(a), Ua = T(a, "section"), ob = r.createElement("h1"), ob.innerHTML = T(r, "h1")[0].innerHTML, tc = Ua.length, Ua.splice(0, 0, ob), 0 !== b ? D(r, b + "ullscreenchange", rc) : u ? D(r, "MSFullscreenChange", rc, !1) : Ld(rc)) : ra(a);
    }
  });
  var qb = !v || 0.9 > x || 8 > w || 5.5 > u;
  var sb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var qe = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], re = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
  26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ac = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
  se = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Va = na.now || function() {
    return +new na();
  }, nd, Z = {useRegExpCompat:qb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
  var rb = Va();
  var uc, W, Lc, Mc, ee = 5 > u ? 60 : 5.5 > u ? 0 : qb ? 20 : 10, pd, rd;
  var va = [function(a) {
    q.RegExpCompat = nd = a;
  }, function() {
    pd = pb("^\\s*<");
    rd = pb("\\S");
  }];
  qb || (va[1](), va = m);
  var ue = function() {
    var a = W, b = a.U, c = te(a.A, a.N), d = a.o = c.o;
    a.G = c.G;
    od(b, d) || (W = m, K(Za, m, 0, !0));
  };
  var vc = function() {
    var a = W;
    a.$ = a.o.match(a.m[1]) || [];
    a.s.push(a.B, 0);
    K(Zb, m, 2);
  };
  var $b = [];
  var qd = function(a) {
    function b(k) {
      var h = k;
      0 <= k && (h = re[k]);
      0 <= h[1] && (h[1] = c(h[1]));
      return h;
    }
    function c(k) {
      var h = k;
      return 0 <= k && (h = ac[k], !h.exec) ? ($b.push(k), k) : h;
    }
    var d = W, f = sb[a];
    Yb(f) && (f = sb[a] = sb[f]);
    var e = f[0];
    if (0 <= e) {
      e = qe[e];
      if (0 <= e["-num"]) {
        var n = e["-num"];
        delete e["-num"];
        for (var g = -1; 9 > g;) {
          e["" + ++g] = n;
        }
      }
      f[0] = e;
    }
    for (var p in e) {
      e[p] = b(e[p]);
    }
    f[1] = c(f[1]);
    e = f[2];
    g = 0;
    for (n = e.length; g < n; ++g) {
      e[g] = b(e[g]);
    }
    $b.length ? K(wc, a, 2) : (d.m ? d.l && (d.l.g[0].m = f) : d.m = f, K(vc, m, 1));
  };
  var te = function(a, b) {
    function c(p) {
      var k = p.nodeType;
      if (1 === k) {
        if (!oa(p, "nocode")) {
          for (k = p.firstChild; k; k = k.nextSibling) {
            c(k);
          }
          k = pa(p);
          if ("BR" === k || "LI" === k) {
            d[n] = "\n", e[n << 1] = f++, e[n++ << 1 | 1] = p;
          }
        }
      } else if (3 === k || 4 === k) {
        if (k = p.nodeValue) {
          k = b ? k.split("\r\n").join("\n").split("\r").join("\n") : k.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[n] = k, e[n << 1] = f, f += k.length, e[n++ << 1 | 1] = p;
        }
      }
    }
    var d = [], f = 0, e = [], n = 0;
    c(a);
    var g = d.join("");
    "\n" === g.charAt(g.length - 1) && (g = g.substr(0, g.length - 1));
    return {o:g, G:e};
  };
  var ve = function(a, b, c) {
    function d(k) {
      var h = k.nodeType;
      if (1 === h && !oa(k, "nocode")) {
        if ("BR" === pa(k)) {
          f(k), k.parentNode && ra(k);
        } else {
          for (k = k.firstChild; k; k = k.nextSibling) {
            d(k);
          }
        }
      } else if ((3 === h || 4 === h) && c) {
        var l = k.nodeValue, t = l.indexOf("\r\n"), E = 2;
        -1 === t && (t = l.indexOf("\n"), E = 1);
        -1 === t && (t = l.indexOf("\r"));
        -1 !== t && (h = l.substr(0, t), k.nodeValue = h, (l = l.substr(t + E)) && Ed(k, l), f(k), h || ra(k));
      }
    }
    function f(k) {
      function h(t, E) {
        var A = E ? t.cloneNode(!1) : t, O = t.parentNode;
        if (O) {
          O = h(O, 1);
          var P = t.nextSibling;
          O.appendChild(A);
          for (var V = P; V; V = P) {
            P = V.nextSibling, O.appendChild(V);
          }
        }
        return A;
      }
      for (; !k.nextSibling;) {
        if (k = k.parentNode, !k) {
          return;
        }
      }
      k = h(k.nextSibling, 0);
      for (var l; (l = k.parentNode) && 1 === l.nodeType;) {
        k = l;
      }
      n.push(k);
    }
    for (var e = r.createElement("li"); a.firstChild;) {
      e.appendChild(a.firstChild);
    }
    for (var n = [e], g = 0; g < n.length; ++g) {
      d(n[g]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > w) {
        var p = r.createElement("ol");
        p.innerHTML = '<li value="' + b + '">' + e.innerHTML + "</li>";
        n[0] = p.firstChild;
      } else {
        La(e, "value", b);
      }
    }
    p = F(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    g = 0;
    for (b = n.length; g < b; ++g) {
      e = n[g], Gb(e, "L" + (g + a) % 10), e.firstChild || me(e, "\u00a0"), p.appendChild(e);
    }
  };
  var ge = function() {
    var a = W, b = a.o, c = b.length, d = 0, f = a.G, e = f.length, n = 0, g = a.s, p = g.length, k = 0;
    g[p] = c;
    var h, l;
    for (l = h = 0; l < p;) {
      g[l] !== g[l + 2] ? (g[h++] = g[l++], g[h++] = g[l++]) : l += 2;
    }
    p = h;
    for (l = h = 0; l < p;) {
      var t = g[l], E = g[l + 1];
      for (l += 2; l + 2 <= p && g[l + 1] === E;) {
        l += 2;
      }
      g[h++] = t;
      g[h++] = E;
    }
    g.length = h;
    a = a.A;
    p = "";
    a && (p = a.style.display, N(a, "display", "none"));
    for (; n < e;) {
      h = f[n + 2] || c;
      t = g[k + 2] || c;
      l = Math.min(h, t);
      E = f[n + 1];
      var A;
      if (1 !== E.nodeType && (A = b.substring(d, l))) {
        9 > u && (A = A.split("\n").join("\r"));
        var O = ec(E, "span", {className:se[g[k + 1]]}, A);
        ra(E);
        d < h && (f[n + 1] = Ed(O, b.substring(l, h)));
      }
      d = l;
      d >= h && (n += 2);
      d >= t && (k += 2);
    }
    a && N(a, "display", p);
    W = m;
    K(Za, m, 3, !0);
  };
  var Ab = [], Bb;
  Z.readyTime = Va() - rb;
  Ja(function(a) {
    if (a) {
      a = [T(r, "pre"), T(r, "code"), T(r, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var c = 0, d = a[b].length; c < d; ++c) {
          Vd(a[b][c]);
        }
      }
      return !0;
    }
  });
  var Vd = function(a) {
    Ab.push(a);
    Bb = Ab.length;
    1 === Bb && (Nc ? M(Nc, Za) : va ? va.push(function() {
      M(Za);
    }) : M(Za));
  };
  var Za = function() {
    function a(n, g) {
      return (n.split(g)[1] || "").split(" ")[0];
    }
    if (!W) {
      Bb !== Ab.length && Mc && Mc(Bb - Ab.length, Bb);
      var b = Ab.shift();
      if (b) {
        rb = Va();
        if (oa(b, "prettyprint") && !oa(b, "prettyprinted")) {
          for (var c = !1, d = b.parentNode; d !== J; d = d.parentNode) {
            var f = pa(d);
            if (("PRE" === f || "XMP" === f || "CODE" === f) && oa(d, "prettyprint")) {
              c = !0;
              break;
            }
          }
          if (!c) {
            c = b.className;
            za(b, "prettyprinted");
            d = !1;
            if (!d) {
              d = a(c, "lang-") || a(c, "language-");
              var e;
              !d && (e = he(b)) && "CODE" === pa(e) && (d = a(e.className, "lang-") || a(e.className, "language-"));
            }
            f = pa(b);
            "PRE" === f || "XMP" === f ? f = 1 : (f = b.currentStyle, e = r.defaultView, f = (f = f ? f.whiteSpace : e && e.getComputedStyle ? e.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === f.substr(0, 3));
            e = !1;
            (e = "true" === e || +e) || (e = a(c, "linenums:") || oa(b, "linenums"), e = e.length ? +e : e);
            e && ve(b, e, f);
            W = {U:d, A:b, ba:e, N:f, B:0, v:0, P:{}, s:[]};
            Z.codeBlocks.push({elm:b, lang:d, readyTime:Va() - rb, decorateTime:0, decorateCount:0, updateDOMTime:0});
            K(ue);
            return;
          }
        }
        K(Za, m, 0, !0);
      } else {
        Lc && Lc(Z);
      }
    }
  };
  q.PR = {RegExpProxy:pb, prettifyElement:Vd, registerCompleteHandler:function(a, b) {
    Lc = a;
    Mc = b;
  }};
  var Jc = r.scripts || T(r, "script");
  var Q = Jc[Jc.length - 1].src.split("/");
  --Q.length;
  "js" === Q[Q.length - 1] && --Q.length;
  (Q = Q.join("/")) && (Q += "/");
  C("[p_assetUrl] " + Q);
  var Ud = je || "1" === fa(J, "mob");
  bc = (Ud ? "mb" : "pc") + "/";
  ha(function() {
    var a;
    (a = Ga("logger")) || alert("#logger not found!");
    a ? (C = function(b) {
      F(a, "P", m, b);
    }, ma = function(b) {
      F(a, "P", {style:{color:"red"}}, b);
    }, q.onerror = function(b, c, d) {
      ma(b + ", " + c + ", " + d);
      return !0;
    }) : q.console ? (C = console.log, ma = console.error) : w ? (C = gb, ma = opera.postError) : C = ma = gb;
    for (; cc.length;) {
      C(cc.shift());
    }
    for (; dc.length;) {
      C(dc.shift());
    }
    cc = dc = m;
  });
  6.1 > sd && (yb ? yb(Ad) : D(q, "scroll", Ad));
  Xa(Oc);
  6.1 > sd && (yb ? yb(Cd) : D(q, "scroll", Cd));
  Xa(Pc);
  10 > u && (11 !== ie || 5 !== u) || (9 > w || 1 > x || !la && !q.addEventListener ? r.write('<link href="' + Q + "css/" + bc + Ac + '" rel="stylesheet"' + (8 > w ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > w || 1.5 > x || 532 >= ub || 8 > vb) && ha(function() {
    F(Wa, "link", {href:Q + "css/" + bc + Ac, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (qb) {
    if (hc) {
      var Nc = function(a) {
        q.RegExpCompat = function(b) {
          for (var c; c = va.shift();) {
            c(b);
          }
          va = m;
          M(a);
          Qd(Q + "js/regexpcompat.js");
        };
        Nc = m;
        Pd(Q + "js/regexpcompat.js");
      };
    } else {
      q.RegExpCompat = function(a) {
        for (var b; b = va.shift();) {
          b(a);
        }
        va = m;
        Qd(Q + "js/regexpcompat.js");
      }, Pd(Q + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

