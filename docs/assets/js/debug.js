/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Function.prototype.apply||(Function.prototype.apply=function(d,f){var b=null!=d?d:window,a=f||[],e=a.length,c=0;b.__apply=this;b.__apply||(b.constructor.prototype.__apply=this);switch(e){case 0:a=b.__apply();break;case 1:a=b.__apply(a[0]);break;case 2:a=b.__apply(a[0],a[1]);break;case 3:a=b.__apply(a[0],a[1],a[2]);break;case 4:a=b.__apply(a[0],a[1],a[2],a[3]);break;case 5:a=b.__apply(a[0],a[1],a[2],a[3],a[4]);break;case 6:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5]);break;case 7:a=b.__apply(a[0],a[1],
a[2],a[3],a[4],a[5],a[6]);break;case 8:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);break;case 9:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);break;default:for(a=[];c<e;++c)a[c]="y["+c+"]";a=eval("x.__apply("+a.join(",")+")")}b.__apply?b===window?b.__apply=void 0:delete b.__apply:delete b.constructor.prototype.__apply;return a});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d});
window.decodeURI||(decodeURI=function(d){var e=[],f=parseInt,h=String.fromCharCode;d+="";for(var g=-1,b=0,k=d.length,c,a;b<k;++b)a?(a=f(d.substr(b,2),16),++b,127<a&&(223<a?(c=(a&15)<<12,a=f(d.substr(b+2,2),16)&63,b+=3,c+=a<<6):c=(a&63)<<6,a=f(d.substr(b+2,2),16)&63,b+=3,a+=c),e[++g]=h(a),a=!1):(c=d.charAt(b),(a="%"===c)||(e[++g]=c));return e.join("")});window.decodeURIComponent||(decodeURIComponent=decodeURI); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
var A, ja;
(function(da, t, Vd, Lc, Da, q, Mc, we, ea, xe, m) {
  function Z() {
    return Ea ? gc ? 2 : hc ? 3 : 1 : 0;
  }
  function zb(a) {
    H(t, "load", zb);
    zb = m;
    Fa(T, a, !0);
    T = m;
  }
  function Xa(a, b) {
    Ga(function() {
      var c = Ab(a);
      b(c);
      c.addListener(b);
      return !0;
    });
  }
  function Ya() {
    for (var a, b = 0, c = +new Da(); b < fa.length;) {
      c < fa[0].t ? ++b : (a = fa.splice(b, 1)[0], a.f(a.p));
    }
    ra = fa.length ? setTimeout(Ya, Za) : 0;
  }
  function Bb() {
    for (var a, b = 0; b < Cb.length; ++b) {
      a = Cb[b], a.f();
    }
  }
  function z(a) {
    if (da[0] === a) {
      return ha === ha + "" ? ea(ha) : ha;
    }
  }
  function U(a) {
    var b = da[3];
    if (da[2] === a) {
      return b === b + "" ? ea(b) : b;
    }
  }
  function Nc() {
    Ha && (Ha = clearInterval(Ha));
  }
  function Oc() {
    ra && (ra = clearTimeout(ra));
  }
  function Pc(a, b, c) {
    var d = ["<", a], f = 1, e, n;
    if (b) {
      for (e in b) {
        var g = b[e];
        if (null != g && "" !== g) {
          if ("style" === e) {
            d[++f] = ' style="';
            for (n in g) {
              for (var p = ++f, k, h = [], l = n.split(""), r = l.length; r;) {
                k = l[--r], "A" <= k && "Z" >= k && (k = "-" + k.toLowerCase()), h[r] = k;
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
    null != c && (O && "font" !== a ? d[++f] = "<FONT>" + c + "</FONT>" : d[++f] = c);
    d[++f] = "</" + a + ">";
    return d.join("");
  }
  function P(a, b) {
    var c = "*" === b && 6 > u ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], f = 0, e;
    for (e = c.length; f < e; ++f) {
      d[f] = c[f];
    }
    return d;
  }
  function Qc(a) {
    return O ? a.parentElement : a.parentNode;
  }
  function $a(a, b, c, d, f, e) {
    if (O) {
      var n = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var g = sa(2 > a ? Q(b) : b);
      g = 2 > a ? g.indexOf(b) + a : g.length;
      b.insertAdjacentHTML(n, Pc(c, d, f));
      b = sa(b)[g];
      null != f && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Rc) {
      b = q.createElement(Pc(c, d));
    } else {
      b = e ? q.createElementNS("http://www.w3.org/2000/svg", c) : q.createElement(c);
      if (d) {
        for (n in d) {
          if ((c = d[n]) || 0 === c) {
            switch(n) {
              case "class":
              case "className":
                Db(b, c);
                break;
              case "style":
                a = b.style;
                for (g in c) {
                  a[g] = c[g];
                }
                break;
              default:
                Ia(b, n, c);
            }
          }
        }
      }
      Eb || null != f && ab(b, f);
    }
    return b;
  }
  function ab(a, b) {
    if (O) {
      return $a(2, a, "font", m, b);
    }
    var c = q.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function Sc(a, b) {
    9 > u ? a.className = b : a.setAttribute("class", b);
  }
  function Tc(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Fa(a, b, c) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    c && (a.length = 0);
  }
  function ta(a, b, c) {
    T || bb.length || I(Uc);
    bb.push(a, b, c);
  }
  function Uc() {
    var a = bb, b;
    for (bb = []; b = a.shift();) {
      Fa(b, a.shift(), a.shift());
    }
  }
  function Fb(a) {
    var b = a || event;
    a = cb[b.type];
    var c = -1, d, f;
    u ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : Gb && (b.I = b.stopPropagation, b.stopPropagation = function() {
      f = !0;
    });
    for (; d = a[++c];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = db, this.h = m) : 7.2 > v && this === q && d.j === t && (t.h = d.i, t.h(b), delete t.h);
    }
    if (u) {
      return b.preventDefault = b.stopPropagation = m, b.returnValue;
    }
    Gb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (Hb = !0), f && !Hb && b.I(), b.I = b.stopPropagation = m);
  }
  function Vc() {
    var a = 9 === Ja.offsetWidth;
    Ka !== a && (ta(Wc, Ka = a), A("p_cssAvailability:" + Ka));
  }
  function Xc() {
    !T && La && (Ib(La), La = I(Wd));
  }
  function Wd() {
    La = 0;
    Fa(Yc);
  }
  function ic(a) {
    T || Fa(Zc, a);
  }
  function Jb(a) {
    var b = a.keyCode || a.aa, c = Kb.length, d, f, e, n;
    if ("keydown" !== a.type || 13 === b) {
      for (; c;) {
        if (b = Kb[--c], b.C === this || b.u === this) {
          c = b.C;
          var g = d = b.u;
          if (b.O) {
            if (J(c, "width", b.Z), c.src = b.Y, Db(g, b.S), c = b.K) {
              N(c, b.R), Db(c, "caption jsCap");
            }
          } else {
            if (f = b.M) {
              for (delete b.M; d = Q(d);) {
                if (ka(d, "caption")) {
                  b.K = d, b.R = d.style.cssText, va(d, "jsCap");
                } else {
                  var p = la(d);
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
                  (n = ea(e.substr(1))) && e === "s" + n ? f[p - 1] = "w" + d : f[p] = "w" + d;
                }
                f = f.join("=");
              } else if (b.L || 0 < f.indexOf(".bp.blogspot.com/")) {
                f = f.split("/");
                p = f.length;
                if (e = f[p - 2]) {
                  (n = ea(e.substr(1))) && e === "s" + n ? f[p - 2] = "w" + d : f.splice(p - 1, 0, "w" + d);
                }
                f = f.join("/");
              }
              b.V = f;
            }
            b.S = Xd(g);
            va(g, "jsPicaLarge");
            J(c, "width", "");
            c.src = b.V;
            if (c = b.K) {
              N(c, ""), va(c, "jsCapLarge");
            }
          }
          b.O = !b.O;
          break;
        }
      }
      jc(a);
    }
  }
  function jc(a) {
    a.preventDefault();
    a.stopPropagation();
  }
  function Ma(a) {
    for (var b = arguments, c = 0, d = b.length; c < d; ++c) {
      if (isFinite(b[c])) {
        return b[c];
      }
    }
    return 0;
  }
  function Lb(a) {
    var b = eb;
    if (Ka) {
      if (fb && !b) {
        if (+new Da() < fb) {
          return;
        }
        fb = m;
      }
      7 === a ? (x("t"), wa = 0) : (x("s"), wa && (wa = Ib(wa)), Na = Ma(t.pageYOffset, t.scrollY, Oa.scrollTop, F.scrollTop));
      b ? (eb = Mb(m, b[0], b[1])) || (fb = +new Da() + 99) : Mb();
      $c();
    } else {
      eb = m;
    }
  }
  function ad() {
    x("w.blur");
  }
  function Mb(a, b, c) {
    function d(aa) {
      g = aa;
      if (kc) {
        p = kc + ":translate" + (Nb ? "3D(0," : "(0,") + aa + (Nb ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
      } else if (0 !== aa) {
        if (!bd && (cd || gb)) {
          var Ob = xa.offsetWidth;
        }
        p = gb ? "position:fixed;width:" + Ob + "px;top:" + (aa - f + l) + "px" : bd ? "top:" + aa + "px" : "position:absolute;left:0;width:100%;top:" + aa + "px";
        cd && p && (p += ";" + (0 > aa ? "clip:rect(" + -aa + "px " + Ob + "px " + y + "px 0)" : aa + y < K ? "clip:rect(0 " + Ob + "px " + y + "px 0)" : "clip:rect(0 " + Ob + "px " + (K - aa) + "px 0)"), 8 > u || (p = p.split(" ").join(",")));
      }
    }
    var f = Na, e = dd, n = xa.offsetTop === e.offsetTop, g = 0, p = "", k = !0;
    if (n) {
      for (var h = 0, l = 0, r = e; r && r !== F;) {
        l += r.offsetTop, r = r.offsetParent;
      }
      g = ed;
      r = Ma(t.innerHeight, Oa.offsetHeight);
      var C = e.offsetHeight, y = X.offsetHeight, K = y < C ? C : y, L = f, R = L + r, Pb = l, Qb = Pb + K, fd = l + g, Yd = fd + y;
      e = L < Pb ? Pb : L;
      var ma = Qb < R ? Qb : R, Pa = ma - e;
      L = Qb <= L;
      R = R <= Pb;
      if (b !== m) {
        k = l + b;
        a = k + c;
        if (L || R) {
          return r <= c ? (b = l, x("4.1.1")) : L ? (b = Qb - c, x("4.1.2")) : (b = l + c - r, x("4.1.3")), fb = m, t.scroll(Ma(t.pageXOffset, t.scrollX, Oa.scrollLeft, F.scrollLeft), b), x("4.1.*"), eb;
        }
        y <= Pa ? (h = 3, x("4.2")) : c <= Pa ? y - b <= Pa ? (h = 2, x("4.3.1")) : e <= k && a <= ma ? e < l + g && (h = 4, x("4.3.2")) : e <= k && k <= ma ? (h = 5, x("4.3.3")) : e <= a && a <= ma ? (h = 4, x("4.3.4")) : a < e ? (h = 4, x("4.3.5")) : (h = 5, x("4.3.6")) : (h = 4, x("4.4"));
        k = m;
      } else {
        a !== m ? y <= Pa ? (h = 7, k = !1, x("3.1")) : (g -= 60 * a, h = ma - l - y, a = e - l, g < h ? (g = h, x("3.2.1")) : a < g ? (g = a, x("3.2.2")) : x("3.2.3"), h = 6) : C <= y || (L ? (h = 1, x("2.2.1")) : R ? x("2.2.2") : y <= Pa ? (h = 3, x("2.3")) : e < fd ? (h = 3, x("2.4.1")) : Yd < ma ? (h = 2, x("2.4.2")) : f < l + y - Pa ? x("2.4.3") : (h = 2, x("2.4.4")));
      }
      switch(h) {
        case 0:
          d(0);
          break;
        case 1:
          d(K - y);
          break;
        case 2:
          d(ma - l - y);
          break;
        case 3:
          d(e - l);
          break;
        case 4:
          d(e - l - b);
          break;
        case 5:
          d(ma - l - (b + c));
        case 6:
          d(g);
      }
      gd(g, y, l, K, r, b || "-", c || "-");
    } else {
      gd(g, "-", "-", "-", "-", "-", "-");
    }
    N(X, p);
    ed = g;
    return n && k;
  }
  function ya(a) {
    if (Ka) {
      x("m");
      w && (Na = Ma(t.pageYOffset, Oa.scrollTop, F.scrollTop), $c());
      var b = this !== a.target, c = b && Ma(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && c && Mb(9 >= c ? -9 >= c ? -3 : c : 3) && (a.preventDefault(), a.stopPropagation());
    }
  }
  function hd(a) {
    for (var b = a.target, c = -1, d; d = Rb[++c];) {
      Sb(d, b) && ya(a);
    }
  }
  function za(a) {
    if (Ka) {
      var b = !!kc || w, c = a.target || a.srcElement, d = 0;
      if (Sb(X, c)) {
        x(a.type || "ie5focus");
        B(c, "blur", id);
        for (a = c.offsetHeight; c && (b ? Sb(X, c) : X !== c);) {
          d += c.offsetTop, c = c.offsetParent;
        }
        Zd ? (eb = [d, a], wa && Ib(wa), wa = I(Lb, 7, 1 > w ? 500 : 0)) : (Na = Ma(t.pageYOffset, t.scrollY, Oa.scrollTop, F.scrollTop), Mb(m, d, a));
        jd(d, a);
      }
    }
  }
  function $d() {
    hb = t.onerror;
    t.onerror = ae;
    var a = q.activeElement;
    lc !== a && (lc = a, za({target:a}));
    t.onerror = hb;
    hb = m;
  }
  function ae() {
    A("error!");
    t.onerror = hb;
    hb = lc = m;
    return !0;
  }
  function id() {
    H(this, "blur", id);
    jd(0, 0);
  }
  function x(a) {
    ib && (Tb && (Tb = Ib(Tb)), Tb = I(be, 0, 1400), ib.innerHTML += " " + a);
  }
  function be() {
    ib.innerHTML = "";
  }
  function $c() {
    jb && (J(jb, "top", (Na / 10 | 0) + "px"), kd.innerHTML = " scrl:" + (Na | 0));
  }
  function gd(a, b, c, d, f, e, n) {
    Qa && (J(Qa, "top", ((a + c) / 10 | 0) + "px"), J(Qa, "height", (b / 10 | 0) + "px"), J(jb, "height", (f / 10 | 0) + "px"), J(mc, "height", (F.scrollHeight / 10 | 0) + "px"), ld.innerHTML = "conY:" + c + "/sidY" + a + ", conH:" + d + "/sidH" + b + ", focY:" + e + " focH:" + n);
  }
  function jd(a, b) {
    kb && (J(kb, "top", (a / 10 | 0) + "px"), J(kb, "height", (b / 10 | 0) + "px"));
  }
  function ce() {
    nc.call(Ub);
  }
  function oc() {
    q.fullscreenElement || q.fullscreen || q.webkitIsFullscreen || q.msFullscreenElement || t.fullScreen ? (Ia(Ub, "id", "blog2slide-root"), Ra[1].parentNode.insertBefore(lb, Ra[1]), pc(), q.onkeydown = de) : Aa && (na(lb), oa(Ub, "id"), oa(Aa, "id"), Aa = q.onkeydown = m);
  }
  function pc() {
    Aa && oa(Aa, "id");
    Ba = 0 < Ba ? qc < Ba ? qc : Ba : 0;
    Aa = Ra[Ba];
    Ia(Aa, "id", "blog2slide-current");
  }
  function de(a) {
    if ("ArrowRight" === a.key || 39 === a.keyCode) {
      ++Ba, pc();
    } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
      --Ba, pc();
    }
  }
  function Vb(a) {
    return a === "" + a;
  }
  function mb(a, b) {
    return nb ? new md(a, b) : new Lc(a, b);
  }
  function G(a, b, c, d, f) {
    var e = V.codeBlocks[V.codeBlocks.length - 1], n = Sa(), g = n - rc;
    switch(c || 0) {
      case 1:
        V.initRegExpCount++;
        V.initRegExpTotal += g;
        V.initRegExpMax < g && (V.initRegExpMax = g, V.initRegExpSource = f.toString(), V.initRegExpInstance = f);
        break;
      case 2:
        e.decorateCount++;
        e.decorateTime += g;
        break;
      case 3:
        e.updateDOMTime += g;
    }
    if (n - ob < ee && !d) {
      return rc = n, a(b);
    }
    I(fe, {T:a, W:b});
  }
  function fe(a) {
    ob = rc = Sa();
    a.T(a.W);
  }
  function nd(a, b) {
    a && pb[a] || (a = od.test(b) ? "default-markup" : "default-code");
    var c = !!pb[a];
    c && G(pd, a, 0, !0);
    return c;
  }
  function Wb() {
    function a(K, L, R) {
      L && (b.g = b.g || [], b.g.push({l:b, A:b.A, N:1, s:n, B:K, o:L, m:R, P:{}, v:0}));
    }
    var b = S, c = b.m, d = c[0], f = c[2], e = b.B, n = b.s, g = b.$.shift(), p = b.P;
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
        !(h = Vb(k)) || l && Vb(l[1]) || (h = !1, k = 11);
        h || (p[g] = k);
      }
      f = b.v;
      p = g.length;
      b.v += p;
      if (h) {
        h = l[1];
        d = g.indexOf(h);
        var r = h.length, C = d + r;
        l[2] && (C = p - l[2].length, d = C - r);
        a(e + f, g.substr(0, d), c);
        if (r && nd(k, h)) {
          a(e + f + d, h);
          var y = !0;
        }
        a(e + f + C, g.substr(C), c);
        b.g && b.g.length && (S = b.g.shift());
        y || (S !== b ? G(sc, m, 2) : G(Wb, m, 2));
      } else {
        n.push(e + f, k), G(Wb, m, 2);
      }
    } else {
      b.l ? (S = b.l.g.shift()) ? G(sc, m, 2) : (S = b.l, G(Wb, m, 2)) : G(ge, m, 2);
    }
  }
  function tc(a) {
    if (Xb.length) {
      var b = Xb.shift(), c = Yb[b];
      if (c.pop) {
        Yb[b] = c = mb(c[0], c[1]);
      } else if (Vb(c)) {
        Yb[b] = c = mb(c);
      } else {
        return tc(a);
      }
      G(tc, a, 1, !1, c);
    } else {
      G(pd, a);
    }
  }
  function he(a) {
    for (var b, c = a.firstChild; c; c = c.nextSibling) {
      var d = c.nodeType;
      b = 1 === d ? b ? a : c : 3 === d ? qd.test(c.nodeValue) ? a : b : b;
    }
    return b === a ? m : b;
  }
  var db = Vd, F = q.body, W = F.style, pa, ha = da[1], u = z(2) || z(3), ia = z(7), uc = z(5) || z(6), v = z(8) || z(9), w = z(11) || z(12), qb = w && 0 <= da.conpare(ha, "1.9.1"), vc = z(13), rb = z(15), rd = z(16) || z(17), sd = z(10) || z(25), sb = z(20) || z(22);
  sb || z(23) || z(21) || z(24);
  var td = sb && ea(Mc.userAgent.split("Edg/")[1]), ie = ea(Mc.appVersion.split("Trident/")[1]) + 4, wc = U(35) || U(36) || U(37), ud = !u && !ia && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), xc = (ia ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > v ? "opr70" : 8 > v ? "opr72" : 9.5 > v ? "opr" + (v | 0) : w && !qb ? 1.4 <= w ? "gck19" : 1.3 <= 
  w ? "gck13" : 1 <= w ? "gck12" : .9 <= w ? "gck09" : .8 <= w ? "gck08" : "gck07" : "modern") + ".css", Zb = "", je = U(1) || U(2) || U(3) || U(4) || U(8) || U(9) || U(10), vd, yc = W.transform !== m ? "transform" : W["-o-transform"] !== m ? "-o-transform" : W["-ms-transform"] !== m ? "-ms-transform" : W.MozTransform !== m ? "-moz-transform" : W["-webkit-transform"] !== m ? "-webkit-transform" : "", T = [], Wc = [], Y = [], wd, $b = [], ac = [];
  A = function(a) {
    $b.push(a);
  };
  ja = function(a) {
    ac.push(a);
  };
  var zc = function(a) {
    Cb.length || (Ha = setInterval(Bb, xd));
    Cb.push({f:a, J:++yd});
    return yd;
  };
  var zd = function() {
    Ha && (Nc(), Ha = setInterval(Bb, xd));
  };
  var Cb = [], xd = 500, yd = 0, Ha;
  if (5 > u || ia) {
    t._wdb_onlooptimer = Bb, Bb = "_wdb_onlooptimer()";
  }
  var I = function(a, b, c) {
    fa.length || (ra = setTimeout(Ya, Za));
    fa.push({f:a, p:b, J:++Ad, t:+new Da() + (Za < c ? c : Za)});
    return Ad;
  };
  var Ib = function(a) {
    for (var b = fa.length, c; c = fa[--b];) {
      if (c.J === a) {
        fa.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var Bd = function() {
    ra && (Oc(), ra = setTimeout(Ya, Za));
  };
  var fa = [], Za = 16, Ad = 0, ra;
  if (5 > u || ia) {
    t._wdb_ontimer = Ya, Ya = "_wdb_ontimer()";
  }
  var O = 5 > u;
  var tb = P(q, "html")[0];
  var Ta = P(q, "head")[0];
  var Ca = function(a) {
    return t[a] || q[a] || q.getElementById(a);
  };
  var Q = Qc;
  var sa = function(a) {
    a = O ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var ke = function(a) {
    var b = !(7.03 < v && 7.2 > v) && a.children;
    a = b ? b : a.childNodes;
    for (var c = [], d = a.length, f = -1, e; d;) {
      if (e = a[--d], b || 1 === e.nodeType) {
        O && "FONT" === e.tagName || (c[++f] = e);
      }
    }
    return c;
  };
  var Cd = function(a) {
    return O ? a.children.length ? a.children[0] : null : a.firstChild;
  };
  var D = function(a, b, c, d, f) {
    b = $a(2, a, b, c, d, f);
    O || (a.appendChild(b), Eb && null != d && ab(b, d));
    return b;
  };
  var bc = function(a, b, c, d, f) {
    b = $a(0, a, b, c, d, f);
    O || (Qc(a).insertBefore(b, a), Eb && null != d && ab(b, d));
    return b;
  };
  var le = function(a, b, c, d, f) {
    b = $a(1, a, b, c, d, f);
    var e;
    O || ((e = a.nextSibling) ? Q(e).insertBefore(b, e) : Q(a).appendChild(b), Eb && null != d && ab(b, d));
    return b;
  };
  var me = ab;
  var Dd = function(a, b) {
    var c;
    if (O) {
      return $a(1, a, "font", m, b);
    }
    var d = q.createTextNode("" + b);
    (c = a.nextSibling) ? Q(a).insertBefore(d, c) : Q(a).appendChild(d);
    return d;
  };
  var na = function(a) {
    Q(a) ? O ? a.outerHTML = "" : Q(a).removeChild(a) : A("[DOM] p_DOM_remove(), No parentNode!");
  };
  var Sb = function(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== tb;) {
      if (b = Q(b), a === b) {
        return !0;
      }
    }
  };
  var Rc = 9 > u, Eb = Rc;
  var la = function(a) {
    return a.tagName.toUpperCase();
  };
  var ba = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Ia = function(a, b, c) {
    a.setAttribute(b, c);
  };
  var oa = function(a, b) {
    a.removeAttribute(b);
  };
  var Ed = function(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  };
  var Xd = function(a) {
    return a.className;
  };
  var Db = Sc;
  var ka = Tc;
  var va = function(a, b) {
    var c;
    if (!Tc(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      Sc(a, c + b);
    }
  };
  var J = function(a, b, c) {
    a.style[b] = c;
  };
  var N = function(a, b) {
    var c = -1, d, f;
    if (5.5 > u) {
      if (a.setAttribute("style", ""), b) {
        for (d = b.split(";"); f = d[++c];) {
          var e = f.split(":");
          a.style[e[0]] = f.substr(e[0].length + 1);
        }
      }
    } else if (7.1 > v) {
      if (a.setAttribute("style", ""), b) {
        for (d = b.split(";"); f = d[++c];) {
          e = f.split(":"), a.style[e[0]] = e[1];
        }
      }
    } else {
      9 > v || 1 > w ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
    }
  };
  T.splice(0, 0, function() {
    function a(p) {
      p = sa(p);
      for (var k = p.length, h, l, r; k;) {
        if (h = p[--k], l = h.nodeType, 8 === l) {
          b && n.push(h);
        } else if (1 === l) {
          switch(l = la(h), "/" === l.charAt(0) && (l = l.substr(1), g[l] = !0), l) {
            case "STYLE":
              if (7.2 <= v && 9 > v) {
                break;
              }
            case "LINK":
              O || d || Sb(Ta, h) || e.push(h);
              break;
            case "META":
              l = ba(h, "name") || ba(h, "property");
              for (r = f.length; r;) {
                if (0 === l.indexOf(f[--r])) {
                  n.push(h);
                  break;
                }
              }
              break;
            case "SCRIPT":
              if (Ed(h, "async")) {
                break;
              }
              if (c) {
                h.innerText = "";
                c = !1;
                break;
              }
            case "NOSCRIPT":
              if (Ed(h, "skip-cleanup")) {
                break;
              }
            case "!":
              n.push(h);
              break;
            case "SOURCE":
              t.HTMLSourceElement || n.push(h);
              break;
            default:
              g[l] ? n.push(h) : sa(h).length && a(h);
          }
        }
      }
      for (; e[0];) {
        Ta.appendChild(e.pop());
      }
      for (; n[0];) {
        na(n.pop());
      }
    }
    pa = Ca("jsMain");
    var b = !(8 > v || 5 > u || ia || .9 > w), c = wd, d = 7 > u, f = ["og:", "twitter:", "fb:"], e = [], n = [], g = {};
    a(tb);
  });
  var Ka, E, Ab = t.matchMedia, Ja, bb = [];
  T.push(function() {
    Xa = m;
    Ja = D(F, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    ca(function() {
      bb.length && I(Uc);
    });
  });
  var B = function(a, b, c, d) {
    if (Fd) {
      a.addEventListener(b, c, d ? ud ? d : d.capture : !1);
    } else {
      var f = {j:a, i:c};
      d = cb[b];
      var e = "on" + b, n, g;
      if (d) {
        for (n = d.length; g = d[--n];) {
          if (g.j === a && g.i === c) {
            return;
          }
        }
        cb[b].push(f);
      } else {
        cb[b] = d = [f], Ac || (b = a[e], "function" === typeof b && b !== Fb && d.unshift({j:a, i:b}));
      }
      Ac ? a.attachEvent(e, Fb) : a[e] = Fb;
    }
  };
  var H = function(a, b, c, d) {
    if (Fd) {
      a.removeEventListener(b, c, d ? ud ? d : d.capture : !1);
    } else {
      d = cb[b];
      b = "on" + b;
      var f, e, n;
      if (d) {
        for (f = d.length; e = d[--f];) {
          e.j === a && (e.i === c ? d.splice(f, 1) : n = !0);
        }
        n || (Ac ? a.detachEvent(b, Fb) : (a[b] = db, a[b] = null));
      }
    }
  };
  var cb = {}, Ac = !1, Gb = 525.13 > rb, Fd = !Gb && !ia && t.addEventListener, Hb;
  Gb && tb.addEventListener("click", function(a) {
    if (Hb) {
      return Hb = !1, a.preventDefault(), !1;
    }
  });
  var ca = function(a) {
    T ? T.push(a) : alert("Load event has already been dispatched!");
  };
  var Ua = function(a) {
    cc && cc.push(a);
  };
  var cc = [];
  if (419.3 >= rb) {
    var dc = function() {
      if (dc) {
        var a = q.readyState;
        "loaded" === a || "complete" === a ? (dc = m, zb()) : I(dc);
      }
    };
    I(dc);
  } else {
    B(t, "load", zb);
  }
  u || .9 <= w && 1.8 > w ? B(t, "unload", function(a) {
    Fa(cc, a, !0);
  }) : cc = m;
  var Ga = function(a) {
    Wc.push(a);
  };
  ca(function() {
    Vc();
    zc(Vc);
  });
  var Gd = function(a) {
    Y && Y.push(a);
  };
  var Hd = 60 > w || vc, Ea, hc, gc;
  if (89 <= w || 89 <= sb || wc && 79 <= td || Ab && (Ab("(forced-colors:none)").matches || Ab("(forced-colors:active)").matches)) {
    var Id = !0;
    Xa("(forced-colors:active)", function(a) {
      Ea = a.matches;
      E = Z();
      ta(Y, E);
      A("(forced-colors:active):" + E);
    });
  } else if (10 <= u || uc || wc && td) {
    Id = !0, Xa("(-ms-high-contrast:black-on-white)", function(a) {
      Ea = hc = a.matches;
      E !== Z() && (E = Z(), ta(Y, E), A("(-ms-high-contrast:black-on-white):" + E));
    }), Xa("(-ms-high-contrast:white-on-black)", function(a) {
      Ea = gc = a.matches;
      E !== Z() && (E = Z(), ta(Y, E), A("(-ms-high-contrast:white-on-black):" + E));
    }), Xa("(-ms-high-contrast:active)", function(a) {
      Ea = a.matches;
      E !== Z() && (E = Z(), ta(Y, E), A("(-ms-high-contrast:active):" + E));
    });
  } else if (wc && (u || w && 0 <= da.conpare(ha, "1.8.1") || vc)) {
    var Bc = function() {
      function a(d, f) {
        if (f && "transparent" === d) {
          return 382.5;
        }
        if ("#" === d.charAt(0)) {
          return parseInt("0x" + d.substr(1, 2), 16) + parseInt("0x" + d.substr(3, 2), 16) + parseInt("0x" + d.substr(5, 2), 16);
        }
        var e = d.split("(")[1].split(",");
        return ea(e[0]) + ea(e[1]) + ea(e[2]);
      }
      var b = q.defaultView;
      var c = b ? b.getComputedStyle(Ja, null) : Ja.currentStyle;
      b = (c && c.color || "").split(" ").join("");
      c = (c && c.backgroundColor || "").split(" ").join("");
      b && (Ea = "#123456" !== b && "rgb(18,52,86)" !== b, hc = a(b) < a(c, !0), gc = a(b) > a(c, !0), E !== Z() && (E = Z(), A("(forced-colors-fallback):" + E), ta(Y, E, Hd)));
    };
    Ga(function(a) {
      if (a) {
        return J(Ja, "color", "#123456"), J(Ja, "backgroundColor", "#123456"), Hd ? (Bc(), Y = m) : zc(Bc), Bc = m, !0;
      }
    });
  } else {
    Y = Z = m;
  }
  var Jd = function(a) {
    T || alert("p_listenImageReady is called back for images present at load time.");
    ub.push(a);
  };
  var ub = [], Cc = 7.5 <= v && 8 > v;
  Cc && function() {
    for (var a = q.images, b = a.length, c; b;) {
      c = a[--b], c.H = c.src, oa(c, "src");
    }
  }();
  ca(function() {
    function a() {
      d ? (f = c[--d], Cc && Ia(f, "src", f.H), ne(b, Cc ? f.H : f.src)) : ub = m;
    }
    function b(n) {
      Fa(ub, {D:f, F:n}, !d);
      a();
    }
    var c = q.images || P(q, "img"), d = c.length;
    if (12 > v || 532 > rb) {
      a();
    } else {
      for (; d;) {
        var f = c[--d];
        var e = 9 > u ? f.complete : 0 <= f.naturalWidth ? f.naturalWidth : f.width;
        ta(ub, {D:f, F:e}, !d);
      }
      ub = m;
    }
  });
  var Kd = function(a) {
    Yc.push(a);
  };
  var Yc = [], La;
  B(t, "resize", Xc);
  Ua(function() {
    La && clearTimeout(La);
    H(t, "resize", Xc);
  });
  var vb = function(a) {
    Zc.push(a);
  };
  var Zc = [], Ld = 0, Md = 1 > w || 1.2 <= w && 1.8 > w || 7.2 >= v;
  Md ? zc(function() {
    var a = t.scrollY || F.scrollTop;
    Ld !== a && (Ld = a, ic());
  }) : B(t, "scroll", ic);
  Ua(function() {
    Md || H(t, "scroll", ic);
  });
  9 > u && ca(function() {
    var a = D(F, "div");
    N(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    vd = 1 < a.offsetHeight;
    N(a, "");
    na(a);
  });
  var ne = function(a, b) {
    function c() {
      f || !e || d.complete ? (A("[imageTest] timer -> img.complete. img.width=" + d.width), I(a, !!d.width), d.onerror = d.onload = db, d = a = m) : (--e, I(c));
    }
    var d = new Image(), f, e = 99;
    A("[imageTest] start.");
    d.onerror = function() {
      A("[imageTest] error!");
      f = !0;
    };
    d.onload = function() {
      A("[imageTest] onload.");
      f = !0;
    };
    d.src = b;
    I(c);
  };
  Jd(function(a) {
    var b = a.D;
    a = a.F;
    var c = Q(b);
    !ka(c, "aBodyRoot") && a ? va(c, "img-loaded") : a || ba(b, "alt") || J(b, "display", "none");
  });
  if (!Id && Y) {
    var wb, Nd = function() {
      wb = D(Ta, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:M + "css/" + Zb + "hc/" + xc});
      if (yc || 5.5 <= u && 9 > u && vd) {
        va(F, "jsCanRotate"), A("jsCanRotate!");
      }
      Nd = m;
    };
    Gd(function(a) {
      a && !wb ? Nd() : wb && (a ? Ta.appendChild(wb) : na(wb));
    });
  }
  5.5 <= u && 8 > u && Y && Gd(function(a) {
    for (var b = P(q, "a"), c = b.length, d = 0; d < c; ++d) {
      b[d].hideFocus = !a;
    }
  });
  v && ca(function() {
    for (var a = P(q, "a"), b = a.length, c = 0, d; c < b; ++c) {
      d = a[c], "-1" === ba(d, "tabindex") ? oa(d, "tabindex") : ba(d, "href") && Ia(d, "tabindex", "0");
    }
    a = P(q, "input");
    c = 0;
    for (b = a.length; c < b; ++c) {
      d = a[c], "hidden" === ba(d, "type") && oa(d, "tabindex");
    }
  });
  var oe = w && 0 >= da.conpare(ha, "0.9");
  var ec = !(7.2 > v || oe);
  var Od = function(a) {
    Dc ? T ? q.write('<script src="' + a + '">\x3c/script>') : ja("[DynamicScvriptLoader] Document already loaded! " + a) : T || fc.length ? fc.push(a) : Ec(a);
  };
  var Pd = function(a) {
    Dc ? A("[DynamicScvriptLoader] " + a + " loaded.") : a === Fc ? Ec(fc.shift()) : ja(a + " <> " + Fc);
  };
  var Dc = !ec, Qd = ec && 7.5 > v, Fc;
  if (!Dc) {
    ec = !0;
    var fc = [];
    Qd && (wd = !0);
    ca(function() {
      Ec(fc.shift());
    });
    var Ec = function(a) {
      if (Fc = a) {
        Qd ? Gc[0].src = a : D(Ta, "script", {src:a});
      }
    };
  }
  var Kb = [];
  if (!sd) {
    var pe = W.transition !== m || W["-o-transition"] !== m || W["-moz-transition"] !== m || W["-webkit-transition"] !== m;
    Jd(function(a) {
      if (a.F && pa) {
        a = a.D;
        var b = Q(a), c = "", d;
        if ("A" === la(b) && 1 === ke(b).length) {
          var f = ba(b, "href");
          var e = f.split("?")[0].split("#")[0].split(".");
          e = (e[e.length - 1] || "").toLowerCase();
          if ((d = 0 < f.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + e + ".")) {
            B(b, "keydown", Jb), B(a, "click", Jb), B(b, "click", jc), pe && (c = a.naturalWidth + 4 + "px", J(a, "width", c)), va(b, "jsPica"), Kb.push({u:b, Y:a.src, Z:c, M:f, C:a, L:d});
          }
        }
      }
    });
    Ua(function(a, b) {
      for (a = -1; b = Kb[++a];) {
        H(b.u, "keydown", Jb), H(b.C, "click", Jb), H(b.u, "click", jc);
      }
    });
  }
  var Rb = ["jsSidebarFixer1", "jsSidebarFixer2"], Rd = w || vc || uc, Zd = !(9 > u || v || 1 <= w && 1.3 > w), gb = !(5 > z(16) || 5 > z(17) || 2.2 > z(21) || 6 > z(12) || U(30) && 534 > rb || U(32) || 7 > u || 9 > v || 1 > w), cd = gb || 6 === u || 1 > w, bd = 7.5 > v, Oa, xa, dd, X, kc = yc, ed = 0, Na = 0, Nb, eb, fb, wa, Hc = w && 0 <= da.conpare(ha, "0.9.7"), Sd = w && 0 >= da.conpare(ha, "0.9.4");
  Td || sd || (Ga(function(a) {
    if (a) {
      if (!pa) {
        return !0;
      }
      a = -1;
      var b;
      Oa = "CSS1Compat" !== q.compatMode ? F : tb || F;
      xa = Ca("jsSide");
      dd = pa;
      if (!xa) {
        return !0;
      }
      vb(Lb);
      Kd(Lb);
      X = bc(Cd(xa), "div", {id:"jsSidebarFixer"});
      B(t, "blur", ad);
      for (8 > v || Sd || 6 > u || (u || ia ? B(X, "focusin", za) : Rd ? B(q, "focus", za, {capture:!0, passive:!1}) : B(X, "DOMFocusIn", za, !1)); 1 < sa(xa).length;) {
        X.appendChild(sa(xa)[1]);
      }
      for (Hc && !qb && B(q, "DOMMouseScroll", hd, !1); b = Rb[++a];) {
        var c = Ca(b);
        c.onwheel !== m ? B(c, "wheel", ya, {passive:!1}) : qb ? B(c, "MozMousePixelScroll", ya, !1) : Hc ? Rb[a] = Ca(b) : (c.onmousewheel !== m || 9 <= v) && B(c, "mousewheel", ya, !1);
      }
      u || uc || 2 > sb || (Nb = W.perspective !== m || W.MozPerspective !== m || W["-webkit-perspective"] !== m);
      Lb();
      return !0;
    }
  }), Ua(function() {
    var a = -1, b;
    if (Hc && !qb) {
      H(q, "DOMMouseScroll", hd, !1);
    } else {
      for (; b = Rb[++a];) {
        b = Ca(b), b.onwheel !== m ? H(b, "wheel", ya, {passive:!1}) : qb ? H(b, "MozMousePixelScroll", ya, !1) : (b.onmousewheel !== m || 9 <= v) && H(b, "mousewheel", ya, !1);
      }
    }
    H(t, "blur", ad);
    8 > v || Sd || 6 > u || (u || ia ? H(X, "focusin", za, !1) : Rd ? H(q, "focus", za, {capture:!0, passive:!1}) : H(X, "DOMFocusIn", za, !1));
    Va && clearInterval(Va);
  }));
  var Va, lc, hb;
  6 > u && Ga(function(a) {
    if (!pa) {
      return !0;
    }
    a ? Va = setInterval($d, 333) : Va && (clearInterval(Va), Va = 0);
  });
  var ld, kd, ib, mc, jb, Qa, kb, Tb;
  Ga(function(a) {
    if (a) {
      if (!pa) {
        return !0;
      }
      var b = sa(F);
      a = bc(b[0], "div");
      if (gb) {
        N(a, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
      } else {
        for (; b.length;) {
          a.appendChild(b.shift());
        }
        N(a, "width:100%; height:100%; overflow:auto; position:relative;");
        a = le(a, "div");
        N(tb, "overflow:hidden");
        N(F, "overflow:hidden");
        N(a, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
      }
      D(a, "div", m, yc ? "transform" + (Nb ? "3D" : "") : gb ? "pos:fixed" : "pos:absolute");
      b = D(a, "div");
      ld = D(b, "span");
      kd = D(b, "span");
      ib = D(a, "div");
      mc = D(a, "div");
      N(mc, "position:absolute;left:0;top:0;width:54px;background:#242");
      Qa = D(a, "div");
      N(Qa, "position:absolute;left:0;width:54px;background:#363");
      jb = D(a, "div");
      N(jb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
      kb = D(Qa, "div");
      N(kb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
      return !0;
    }
  });
  ca(function() {
    function a(n, g, p, k) {
      var h = k ? "div" : "cite";
      if (0 === g.indexOf("urn:isbn:")) {
        g = g.substr(9).toUpperCase().split("-").join("");
        if (13 === g.length) {
          g = g.toString().slice(3, -1);
          for (var l = 0, r = 0; 9 > r; r++) {
            l += (g.charAt(r) - 0) * (10 - r);
          }
          l = (11 - l % 11) % 11;
          l = 10 === l ? "X" : l.toString();
          g += l;
        }
        10 === g.length && (g = "//www.amazon.co.jp/exec/obidos/ASIN/" + g + "/itozyun-22/ref=nosim/");
      }
      p = k ? bc(Cd(c), h, {className:p}) : D(c, h, {className:p});
      D(p, "a", 0 === g.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:g, X:v ? "0" : m} : {href:g, X:v ? "0" : m}, n);
    }
    if (pa) {
      for (var b = P(pa, "blockquote"), c, d = -1, f, e; c = b[++d];) {
        f = ba(c, "title"), e = ba(c, "cite"), f && e ? (oa(c, "title"), a(f, e, "js-bqLink", !0)) : e && (oa(c, "cite"), a(t.decodeURI ? decodeURI(e) : e, e, "js-bqCite"));
      }
    }
  });
  var nc, Ub, lb, Aa, Ra, Ba, qc;
  ca(function() {
    var a = Ca("blog2slide-start");
    if (a) {
      var b = q.onfullscreenchange !== m ? "f" : q.onmozfullscreenchange !== m ? "mozF" : q.onwebkitfullscreenchange !== m ? "webkitF" : 0;
      nc = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
      0 !== b || nc ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', B(a.firstChild, "click", ce), a = Q(a), Ub = Q(a), Ra = P(a, "section"), lb = q.createElement("h1"), lb.innerHTML = P(q, "h1")[0].innerHTML, qc = Ra.length, Ra.splice(0, 0, lb), 0 !== b ? B(q, b + "ullscreenchange", oc) : u ? B(q, "MSFullscreenChange", oc, !1) : Kd(oc)) : na(a);
    }
  });
  var nb = !Lc || .9 > w || 8 > v || 5.5 > u;
  var pb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var qe = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], re = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
  26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], Yb = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
  se = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Sa = Da.now || function() {
    return +new Da();
  }, md, V = {useRegExpCompat:nb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
  var ob = Sa();
  var rc, S, Ic, Jc, ee = 5 > u ? 60 : 5.5 > u ? 0 : nb ? 20 : 10, od, qd;
  var qa = [function(a) {
    t.RegExpCompat = md = a;
  }, function() {
    od = mb("^\\s*<");
    qd = mb("\\S");
  }];
  nb || (qa[1](), qa = m);
  var ue = function() {
    var a = S, b = a.U, c = te(a.A, a.N), d = a.o = c.o;
    a.G = c.G;
    nd(b, d) || (S = m, G(Wa, m, 0, !0));
  };
  var sc = function() {
    var a = S;
    a.$ = a.o.match(a.m[1]) || [];
    a.s.push(a.B, 0);
    G(Wb, m, 2);
  };
  var Xb = [];
  var pd = function(a) {
    function b(k) {
      var h = k;
      0 <= k && (h = re[k]);
      0 <= h[1] && (h[1] = c(h[1]));
      return h;
    }
    function c(k) {
      var h = k;
      return 0 <= k && (h = Yb[k], !h.exec) ? (Xb.push(k), k) : h;
    }
    var d = S, f = pb[a];
    Vb(f) && (f = pb[a] = pb[f]);
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
    Xb.length ? G(tc, a, 2) : (d.m ? d.l && (d.l.g[0].m = f) : d.m = f, G(sc, m, 1));
  };
  var te = function(a, b) {
    function c(p) {
      var k = p.nodeType;
      if (1 === k) {
        if (!ka(p, "nocode")) {
          for (k = p.firstChild; k; k = k.nextSibling) {
            c(k);
          }
          k = la(p);
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
      if (1 === h && !ka(k, "nocode")) {
        if ("BR" === la(k)) {
          f(k), k.parentNode && na(k);
        } else {
          for (k = k.firstChild; k; k = k.nextSibling) {
            d(k);
          }
        }
      } else if ((3 === h || 4 === h) && c) {
        var l = k.nodeValue, r = l.indexOf("\r\n"), C = 2;
        -1 === r && (r = l.indexOf("\n"), C = 1);
        -1 === r && (r = l.indexOf("\r"));
        -1 !== r && (h = l.substr(0, r), k.nodeValue = h, (l = l.substr(r + C)) && Dd(k, l), f(k), h || na(k));
      }
    }
    function f(k) {
      function h(r, C) {
        var y = C ? r.cloneNode(!1) : r, K = r.parentNode;
        if (K) {
          K = h(K, 1);
          var L = r.nextSibling;
          K.appendChild(y);
          for (var R = L; R; R = L) {
            L = R.nextSibling, K.appendChild(R);
          }
        }
        return y;
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
    for (var e = q.createElement("li"); a.firstChild;) {
      e.appendChild(a.firstChild);
    }
    for (var n = [e], g = 0; g < n.length; ++g) {
      d(n[g]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > v) {
        var p = q.createElement("ol");
        p.innerHTML = '<li value="' + b + '">' + e.innerHTML + "</li>";
        n[0] = p.firstChild;
      } else {
        Ia(e, "value", b);
      }
    }
    p = D(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    g = 0;
    for (b = n.length; g < b; ++g) {
      e = n[g], Db(e, "L" + (g + a) % 10), e.firstChild || me(e, "\u00a0"), p.appendChild(e);
    }
  };
  var ge = function() {
    var a = S, b = a.o, c = b.length, d = 0, f = a.G, e = f.length, n = 0, g = a.s, p = g.length, k = 0;
    g[p] = c;
    var h, l;
    for (l = h = 0; l < p;) {
      g[l] !== g[l + 2] ? (g[h++] = g[l++], g[h++] = g[l++]) : l += 2;
    }
    p = h;
    for (l = h = 0; l < p;) {
      var r = g[l], C = g[l + 1];
      for (l += 2; l + 2 <= p && g[l + 1] === C;) {
        l += 2;
      }
      g[h++] = r;
      g[h++] = C;
    }
    g.length = h;
    a = a.A;
    p = "";
    a && (p = a.style.display, J(a, "display", "none"));
    for (; n < e;) {
      h = f[n + 2] || c;
      r = g[k + 2] || c;
      l = Math.min(h, r);
      C = f[n + 1];
      var y;
      if (1 !== C.nodeType && (y = b.substring(d, l))) {
        9 > u && (y = y.split("\n").join("\r"));
        var K = bc(C, "span", {className:se[g[k + 1]]}, y);
        na(C);
        d < h && (f[n + 1] = Dd(K, b.substring(l, h)));
      }
      d = l;
      d >= h && (n += 2);
      d >= r && (k += 2);
    }
    a && J(a, "display", p);
    S = m;
    G(Wa, m, 3, !0);
  };
  var xb = [], yb;
  V.readyTime = Sa() - ob;
  Ga(function(a) {
    if (a) {
      a = [P(q, "pre"), P(q, "code"), P(q, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var c = 0, d = a[b].length; c < d; ++c) {
          Ud(a[b][c]);
        }
      }
      return !0;
    }
  });
  var Ud = function(a) {
    xb.push(a);
    yb = xb.length;
    1 === yb && (Kc ? I(Kc, Wa) : qa ? qa.push(function() {
      I(Wa);
    }) : I(Wa));
  };
  var Wa = function() {
    function a(n, g) {
      return (n.split(g)[1] || "").split(" ")[0];
    }
    if (!S) {
      yb !== xb.length && Jc && Jc(yb - xb.length, yb);
      var b = xb.shift();
      if (b) {
        ob = Sa();
        if (ka(b, "prettyprint") && !ka(b, "prettyprinted")) {
          for (var c = !1, d = b.parentNode; d !== F; d = d.parentNode) {
            var f = la(d);
            if (("PRE" === f || "XMP" === f || "CODE" === f) && ka(d, "prettyprint")) {
              c = !0;
              break;
            }
          }
          if (!c) {
            c = b.className;
            va(b, "prettyprinted");
            d = !1;
            if (!d) {
              d = a(c, "lang-") || a(c, "language-");
              var e;
              !d && (e = he(b)) && "CODE" === la(e) && (d = a(e.className, "lang-") || a(e.className, "language-"));
            }
            f = la(b);
            "PRE" === f || "XMP" === f ? f = 1 : (f = b.currentStyle, e = q.defaultView, f = (f = f ? f.whiteSpace : e && e.getComputedStyle ? e.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === f.substr(0, 3));
            e = !1;
            (e = "true" === e || +e) || (e = a(c, "linenums:") || ka(b, "linenums"), e = e.length ? +e : e);
            e && ve(b, e, f);
            S = {U:d, A:b, ba:e, N:f, B:0, v:0, P:{}, s:[]};
            V.codeBlocks.push({elm:b, lang:d, readyTime:Sa() - ob, decorateTime:0, decorateCount:0, updateDOMTime:0});
            G(ue);
            return;
          }
        }
        G(Wa, m, 0, !0);
      } else {
        Ic && Ic(V);
      }
    }
  };
  t.PR = {RegExpProxy:mb, prettifyElement:Ud, registerCompleteHandler:function(a, b) {
    Ic = a;
    Jc = b;
  }};
  var Gc = q.scripts || P(q, "script");
  var M = Gc[Gc.length - 1].src.split("/");
  --M.length;
  "js" === M[M.length - 1] && --M.length;
  (M = M.join("/")) && (M += "/");
  A("[p_assetUrl] " + M);
  var Td = je || "1" === ba(F, "mob");
  Zb = (Td ? "mb" : "pc") + "/";
  ca(function() {
    var a;
    (a = Ca("logger")) || alert("#logger not found!");
    a ? (A = function(b) {
      D(a, "P", m, b);
    }, ja = function(b) {
      D(a, "P", {style:{color:"red"}}, b);
    }, t.onerror = function(b, c, d) {
      ja(b + ", " + c + ", " + d);
      return !0;
    }) : t.console ? (A = console.log, ja = console.error) : v ? (A = db, ja = opera.postError) : A = ja = db;
    for (; $b.length;) {
      A($b.shift());
    }
    for (; ac.length;) {
      A(ac.shift());
    }
    $b = ac = m;
  });
  6.1 > rd && (vb ? vb(zd) : B(t, "scroll", zd));
  Ua(Nc);
  6.1 > rd && (vb ? vb(Bd) : B(t, "scroll", Bd));
  Ua(Oc);
  10 > u && (11 !== ie || 5 !== u) || (9 > v || 1 > w || !ia && !t.addEventListener ? q.write('<link href="' + M + "css/" + Zb + xc + '" rel="stylesheet"' + (8 > v ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > v || 1.5 > w || 532 >= rb || 8 > sb) && ca(function() {
    D(Ta, "link", {href:M + "css/" + Zb + xc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (nb) {
    if (ec) {
      var Kc = function(a) {
        t.RegExpCompat = function(b) {
          for (var c; c = qa.shift();) {
            c(b);
          }
          qa = m;
          I(a);
          Pd(M + "js/regexpcompat.js");
        };
        Kc = m;
        Od(M + "js/regexpcompat.js");
      };
    } else {
      t.RegExpCompat = function(a) {
        for (var b; b = qa.shift();) {
          b(a);
        }
        qa = m;
        Pd(M + "js/regexpcompat.js");
      }, Od(M + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

