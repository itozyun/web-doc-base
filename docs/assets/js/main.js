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
(function(W, u, Bd, wc, va, r, xc, ae, X, be, n) {
  function R() {
    return wa ? Qb ? 2 : Rb ? 3 : 1 : 0;
  }
  function jb(a) {
    H(u, "load", jb);
    jb = n;
    xa(Y, a, !0);
    S = Y = n;
  }
  function Oa(a, b) {
    Pa(function() {
      var c = kb(a);
      b(c);
      c.addListener(b);
      return !0;
    });
  }
  function Qa() {
    for (var a, b = 0, c = +new va(); b < Z.length;) {
      c < Z[0].t ? ++b : (a = Z.splice(b, 1)[0], a.f(a.p));
    }
    ka = Z.length ? setTimeout(Qa, Ra) : 0;
  }
  function lb() {
    for (var a, b = 0; b < mb.length; ++b) {
      a = mb[b], a.f();
    }
  }
  function y(a) {
    if (W[0] === a) {
      return aa === aa + "" ? X(aa) : aa;
    }
  }
  function L(a) {
    var b = W[3];
    if (W[2] === a) {
      return b === b + "" ? X(b) : b;
    }
  }
  function yc() {
    ya && (ya = clearInterval(ya));
  }
  function zc() {
    ka && (ka = clearTimeout(ka));
  }
  function Ac(a, b, c) {
    var d = ["<", a], e = 1, f, p;
    if (b) {
      for (f in b) {
        var g = b[f];
        if (null != g && "" !== g) {
          if ("style" === f) {
            d[++e] = ' style="';
            for (p in g) {
              for (var m = ++e, h, k = [], l = p.split(""), q = l.length; q;) {
                h = l[--q], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), k[q] = h;
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
    null != c && (M && "font" !== a ? d[++e] = "<FONT>" + c + "</FONT>" : d[++e] = c);
    d[++e] = "</" + a + ">";
    return d.join("");
  }
  function I(a, b) {
    var c = "*" === b && 6 > t ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], e = 0, f;
    for (f = c.length; e < f; ++e) {
      d[e] = c[e];
    }
    return d;
  }
  function Bc(a) {
    return M ? a.parentElement : a.parentNode;
  }
  function nb(a, b, c, d, e, f) {
    if (M) {
      var p = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var g = za(2 > a ? T(b) : b);
      g = 2 > a ? g.indexOf(b) + a : g.length;
      b.insertAdjacentHTML(p, Ac(c, d, e));
      b = za(b)[g];
      null != e && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Cc) {
      b = r.createElement(Ac(c, d));
    } else {
      b = f ? r.createElementNS("http://www.w3.org/2000/svg", c) : r.createElement(c);
      if (d) {
        for (p in d) {
          if ((c = d[p]) || 0 === c) {
            switch(p) {
              case "class":
              case "className":
                ob(b, c);
                break;
              case "style":
                a = b.style;
                for (g in c) {
                  a[g] = c[g];
                }
                break;
              default:
                Aa(b, p, c);
            }
          }
        }
      }
      Sb || null != e && pb(b, e);
    }
    return b;
  }
  function pb(a, b) {
    if (M) {
      return nb(2, a, "font", n, b);
    }
    var c = r.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function Dc(a, b) {
    9 > t ? a.className = b : a.setAttribute("class", b);
  }
  function Ec(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function xa(a, b, c) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    c && (a.length = 0);
  }
  function la(a, b, c) {
    Y || Sa.length || D(Fc);
    Sa.push(a, b, c);
  }
  function Fc() {
    var a = Sa, b;
    for (Sa = []; b = a.shift();) {
      xa(b, a.shift(), a.shift());
    }
  }
  function qb(a) {
    var b = a || event;
    a = Ta[b.type];
    var c = -1, d, e;
    t ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : rb && (b.I = b.stopPropagation, b.stopPropagation = function() {
      e = !0;
    });
    for (; d = a[++c];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = Tb, this.h = n) : 7.2 > v && this === r && d.j === u && (u.h = d.i, u.h(b), delete u.h);
    }
    if (t) {
      return b.preventDefault = b.stopPropagation = n, b.returnValue;
    }
    rb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (sb = !0), e && !sb && b.I(), b.I = b.stopPropagation = n);
  }
  function Gc() {
    var a = 9 === Ba.offsetWidth;
    Ua !== a && la(Hc, Ua = a);
  }
  function Ic() {
    !Y && Ca && (Ub(Ca), Ca = D(Cd));
  }
  function Cd() {
    Ca = 0;
    xa(Jc);
  }
  function Vb(a) {
    Y || xa(Kc, a);
  }
  function tb(a) {
    var b = a.keyCode || a.aa, c = ub.length, d, e, f, p;
    if ("keydown" !== a.type || 13 === b) {
      for (; c;) {
        if (b = ub[--c], b.C === this || b.u === this) {
          c = b.C;
          var g = d = b.u;
          if (b.O) {
            if (ca(c, "width", b.Z), c.src = b.Y, ob(g, b.S), c = b.K) {
              Va(c, b.R), ob(c, "caption jsCap");
            }
          } else {
            if (e = b.M) {
              for (delete b.M; d = T(d);) {
                if (da(d, "caption")) {
                  b.K = d, b.R = d.style.cssText, ma(d, "jsCap");
                } else {
                  var m = ea(d);
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
                  (p = X(f.substr(1))) && f === "s" + p ? e[m - 1] = "w" + d : e[m] = "w" + d;
                }
                e = e.join("=");
              } else if (b.L || 0 < e.indexOf(".bp.blogspot.com/")) {
                e = e.split("/");
                m = e.length;
                if (f = e[m - 2]) {
                  (p = X(f.substr(1))) && f === "s" + p ? e[m - 2] = "w" + d : e.splice(m - 1, 0, "w" + d);
                }
                e = e.join("/");
              }
              b.V = e;
            }
            b.S = Dd(g);
            ma(g, "jsPicaLarge");
            ca(c, "width", "");
            c.src = b.V;
            if (c = b.K) {
              Va(c, ""), ma(c, "jsCapLarge");
            }
          }
          b.O = !b.O;
          break;
        }
      }
      Wb(a);
    }
  }
  function Wb(a) {
    a.preventDefault();
    a.stopPropagation();
  }
  function Da(a) {
    for (var b = arguments, c = 0, d = b.length; c < d; ++c) {
      if (isFinite(b[c])) {
        return b[c];
      }
    }
    return 0;
  }
  function vb(a) {
    var b = Wa;
    if (Ua) {
      if (Xa && !b) {
        if (+new va() < Xa) {
          return;
        }
        Xa = n;
      }
      7 === a ? na = 0 : (na && (na = Ub(na)), wb = Da(u.pageYOffset, u.scrollY, Ea.scrollTop, E.scrollTop));
      b ? (Wa = xb(n, b[0], b[1])) || (Xa = +new va() + 99) : xb();
    } else {
      Wa = n;
    }
  }
  function xb(a, b, c) {
    function d(U) {
      g = U;
      if (Xb) {
        m = Xb + ":translate" + (Yb ? "3D(0," : "(0,") + U + (Yb ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
      } else if (0 !== U) {
        if (!Lc && (Mc || Zb)) {
          var yb = oa.offsetWidth;
        }
        m = Zb ? "position:fixed;width:" + yb + "px;top:" + (U - e + l) + "px" : Lc ? "top:" + U + "px" : "position:absolute;left:0;width:100%;top:" + U + "px";
        Mc && m && (m += ";" + (0 > U ? "clip:rect(" + -U + "px " + yb + "px " + x + "px 0)" : U + x < O ? "clip:rect(0 " + yb + "px " + x + "px 0)" : "clip:rect(0 " + yb + "px " + (O - U) + "px 0)"), 8 > t || (m = m.split(" ").join(",")));
      }
    }
    var e = wb, f = Nc, p = oa.offsetTop === f.offsetTop, g = 0, m = "", h = !0;
    if (p) {
      for (var k = 0, l = 0, q = f; q && q !== E;) {
        l += q.offsetTop, q = q.offsetParent;
      }
      g = Oc;
      var z = Da(u.innerHeight, Ea.offsetHeight), J = f.offsetHeight, x = P.offsetHeight, O = x < J ? J : x, C = e, Fa = C + z, zb = l, Ab = zb + O, Pc = l + g, Ed = Pc + x;
      f = C < zb ? zb : C;
      q = Ab < Fa ? Ab : Fa;
      var Ga = q - f;
      C = Ab <= C;
      Fa = Fa <= zb;
      if (b !== n) {
        h = l + b;
        a = h + c;
        var Ha;
        if (C || Fa) {
          return z <= c ? Ha = l : Ha = C ? Ab - c : l + c - z, Xa = n, u.scroll(Da(u.pageXOffset, u.scrollX, Ea.scrollLeft, E.scrollLeft), Ha), Wa;
        }
        x <= Ga ? k = 3 : c <= Ga ? x - b <= Ga ? k = 2 : f <= h && a <= q ? f < l + g && (k = 4) : k = f <= h && h <= q ? 5 : f <= a && a <= q ? 4 : a < f ? 4 : 5 : k = 4;
        h = n;
      } else {
        a !== n ? x <= Ga ? (k = 7, h = !1) : (g -= 60 * a, k = q - l - x, Ha = f - l, g < k ? g = k : Ha < g && (g = Ha), k = 6) : J <= x || (C ? k = 1 : Fa || (x <= Ga ? k = 3 : f < Pc ? k = 3 : Ed < q ? k = 2 : e < l + x - Ga || (k = 2)));
      }
      switch(k) {
        case 0:
          d(0);
          break;
        case 1:
          d(O - x);
          break;
        case 2:
          d(q - l - x);
          break;
        case 3:
          d(f - l);
          break;
        case 4:
          d(f - l - b);
          break;
        case 5:
          d(q - l - (b + c));
        case 6:
          d(g);
      }
    }
    Va(P, m);
    Oc = g;
    return p && h;
  }
  function pa(a) {
    if (Ua) {
      w && (wb = Da(u.pageYOffset, Ea.scrollTop, E.scrollTop));
      var b = this !== a.target, c = b && Da(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
      b && c && xb(9 >= c ? -9 >= c ? -3 : c : 3) && (a.preventDefault(), a.stopPropagation());
    }
  }
  function Qc(a) {
    for (var b = a.target, c = -1, d; d = Bb[++c];) {
      Cb(d, b) && pa(a);
    }
  }
  function qa(a) {
    if (Ua) {
      var b = !!Xb || w, c = a.target || a.srcElement;
      a = 0;
      var d;
      if (Cb(P, c)) {
        for (d = c.offsetHeight; c && (b ? Cb(P, c) : P !== c);) {
          a += c.offsetTop, c = c.offsetParent;
        }
        Fd ? (Wa = [a, d], na && Ub(na), na = D(vb, 7, 1 > w ? 500 : 0)) : (wb = Da(u.pageYOffset, u.scrollY, Ea.scrollTop, E.scrollTop), xb(n, a, d));
      }
    }
  }
  function Gd() {
    Ya = u.onerror;
    u.onerror = Hd;
    var a = r.activeElement;
    $b !== a && ($b = a, qa({target:a}));
    u.onerror = Ya;
    Ya = n;
  }
  function Hd() {
    u.onerror = Ya;
    Ya = $b = n;
    return !0;
  }
  function Id() {
    ac.call(Db);
  }
  function bc() {
    r.fullscreenElement || r.fullscreen || r.webkitIsFullscreen || r.msFullscreenElement || u.fullScreen ? (Aa(Db, "id", "blog2slide-root"), Ia[1].parentNode.insertBefore(Za, Ia[1]), cc(), r.onkeydown = Jd) : ra && (fa(Za), ha(Db, "id"), ha(ra, "id"), ra = r.onkeydown = n);
  }
  function cc() {
    ra && ha(ra, "id");
    sa = 0 < sa ? dc < sa ? dc : sa : 0;
    ra = Ia[sa];
    Aa(ra, "id", "blog2slide-current");
  }
  function Jd(a) {
    if ("ArrowRight" === a.key || 39 === a.keyCode) {
      ++sa, cc();
    } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
      --sa, cc();
    }
  }
  function Eb(a) {
    return a === "" + a;
  }
  function $a(a, b) {
    return Fb ? new Rc(a, b) : new wc(a, b);
  }
  function B(a, b, c, d) {
    if (Sc() - Tc < Kd && !d) {
      return a(b);
    }
    D(Ld, {T:a, W:b});
  }
  function Ld(a) {
    Tc = Sc();
    a.T(a.W);
  }
  function Uc(a, b) {
    a && ab[a] || (a = Vc.test(b) ? "default-markup" : "default-code");
    var c = !!ab[a];
    c && B(Wc, a, 0, !0);
    return c;
  }
  function Gb() {
    function a(x, O, C) {
      O && (b.g = b.g || [], b.g.push({l:b, A:b.A, N:1, s:p, B:x, o:O, m:C, P:{}, v:0}));
    }
    var b = K, c = b.m, d = c[0], e = c[2], f = b.B, p = b.s, g = b.$.shift(), m = b.P;
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
        !(k = Eb(h)) || l && Eb(l[1]) || (k = !1, h = 11);
        k || (m[g] = h);
      }
      e = b.v;
      m = g.length;
      b.v += m;
      if (k) {
        k = l[1];
        d = g.indexOf(k);
        var q = k.length, z = d + q;
        l[2] && (z = m - l[2].length, d = z - q);
        a(f + e, g.substr(0, d), c);
        if (q && Uc(h, k)) {
          a(f + e + d, k);
          var J = !0;
        }
        a(f + e + z, g.substr(z), c);
        b.g && b.g.length && (K = b.g.shift());
        J || (K !== b ? B(ec, n, 2) : B(Gb, n, 2));
      } else {
        p.push(f + e, h), B(Gb, n, 2);
      }
    } else {
      b.l ? (K = b.l.g.shift()) ? B(ec, n, 2) : (K = b.l, B(Gb, n, 2)) : B(Md, n, 2);
    }
  }
  function fc(a) {
    if (Hb.length) {
      var b = Hb.shift(), c = Ib[b];
      if (c.pop) {
        Ib[b] = $a(c[0], c[1]);
      } else if (Eb(c)) {
        Ib[b] = $a(c);
      } else {
        return fc(a);
      }
      B(fc, a, 1);
    } else {
      B(Wc, a);
    }
  }
  function Nd(a) {
    for (var b, c = a.firstChild; c; c = c.nextSibling) {
      var d = c.nodeType;
      b = 1 === d ? b ? a : c : 3 === d ? Xc.test(c.nodeValue) ? a : b : b;
    }
    return b === a ? n : b;
  }
  var Tb = Bd, E = r.body, N = E.style, ta, aa = W[1], t = y(2) || y(3), ba = y(7), gc = y(5) || y(6), v = y(8) || y(9), w = y(11) || y(12), bb = w && 0 <= W.conpare(aa, "1.9.1"), hc = y(13), cb = y(15), Yc = y(16) || y(17), Zc = y(10) || y(25), db = y(20) || y(22);
  db || y(23) || y(21) || y(24);
  var $c = db && X(xc.userAgent.split("Edg/")[1]), Od = X(xc.appVersion.split("Trident/")[1]) + 4, ic = L(35) || L(36) || L(37), ad = !t && !ba && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), jc = (ba ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > v ? "opr70" : 8 > v ? "opr72" : 9.5 > v ? "opr" + (v | 0) : w && !bb ? 1.4 <= w ? "gck19" : 1.3 <= 
  w ? "gck13" : 1 <= w ? "gck12" : .9 <= w ? "gck09" : .8 <= w ? "gck08" : "gck07" : "modern") + ".css", Jb = "", Pd = L(1) || L(2) || L(3) || L(4) || L(8) || L(9) || L(10), bd, cd = N.transform !== n ? "transform" : N["-o-transform"] !== n ? "-o-transform" : N["-ms-transform"] !== n ? "-ms-transform" : N.MozTransform !== n ? "-moz-transform" : N["-webkit-transform"] !== n ? "-webkit-transform" : "", Y = [], Hc = [], Q = [], dd;
  var kc = function(a) {
    mb.length || (ya = setInterval(lb, ed));
    mb.push({f:a, J:++fd});
    return fd;
  };
  var gd = function() {
    ya && (yc(), ya = setInterval(lb, ed));
  };
  var mb = [], ed = 500, fd = 0, ya;
  if (5 > t || ba) {
    u._wdb_onlooptimer = lb, lb = "_wdb_onlooptimer()";
  }
  var D = function(a, b, c) {
    Z.length || (ka = setTimeout(Qa, Ra));
    Z.push({f:a, p:b, J:++hd, t:+new va() + (Ra < c ? c : Ra)});
    return hd;
  };
  var Ub = function(a) {
    for (var b = Z.length, c; c = Z[--b];) {
      if (c.J === a) {
        Z.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var id = function() {
    ka && (zc(), ka = setTimeout(Qa, Ra));
  };
  var Z = [], Ra = 16, hd = 0, ka;
  if (5 > t || ba) {
    u._wdb_ontimer = Qa, Qa = "_wdb_ontimer()";
  }
  var M = 5 > t;
  var Kb = I(r, "html")[0];
  var Ja = I(r, "head")[0];
  var Ka = function(a) {
    return u[a] || r[a] || r.getElementById(a);
  };
  var T = Bc;
  var za = function(a) {
    a = M ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var Qd = function(a) {
    var b = !(7.03 < v && 7.2 > v) && a.children;
    a = b ? b : a.childNodes;
    for (var c = [], d = a.length, e = -1, f; d;) {
      if (f = a[--d], b || 1 === f.nodeType) {
        M && "FONT" === f.tagName || (c[++e] = f);
      }
    }
    return c;
  };
  var jd = function(a) {
    return M ? a.children.length ? a.children[0] : null : a.firstChild;
  };
  var ia = function(a, b, c, d, e) {
    b = nb(2, a, b, c, d, e);
    M || (a.appendChild(b), Sb && null != d && pb(b, d));
    return b;
  };
  var lc = function(a, b, c, d, e) {
    b = nb(0, a, b, c, d, e);
    M || (Bc(a).insertBefore(b, a), Sb && null != d && pb(b, d));
    return b;
  };
  var Rd = pb;
  var kd = function(a, b) {
    var c;
    if (M) {
      return nb(1, a, "font", n, b);
    }
    var d = r.createTextNode("" + b);
    (c = a.nextSibling) ? T(a).insertBefore(d, c) : T(a).appendChild(d);
    return d;
  };
  var fa = function(a) {
    M ? a.outerHTML = "" : T(a).removeChild(a);
  };
  var Cb = function(a, b) {
    if (a.contains) {
      return a.contains(b);
    }
    for (; b && b !== Kb;) {
      if (b = T(b), a === b) {
        return !0;
      }
    }
  };
  var Cc = 9 > t, Sb = Cc;
  var ea = function(a) {
    return a.tagName.toUpperCase();
  };
  var V = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Aa = function(a, b, c) {
    a.setAttribute(b, c);
  };
  var ha = function(a, b) {
    a.removeAttribute(b);
  };
  var ld = function(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  };
  var Dd = function(a) {
    return a.className;
  };
  var ob = Dc;
  var da = Ec;
  var ma = function(a, b) {
    var c;
    if (!Ec(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      Dc(a, c + b);
    }
  };
  var ca = function(a, b, c) {
    a.style[b] = c;
  };
  var Va = function(a, b) {
    var c = -1, d, e;
    if (5.5 > t) {
      if (a.setAttribute("style", ""), b) {
        for (d = b.split(";"); e = d[++c];) {
          var f = e.split(":");
          a.style[f[0]] = e.substr(f[0].length + 1);
        }
      }
    } else if (7.1 > v) {
      if (a.setAttribute("style", ""), b) {
        for (d = b.split(";"); e = d[++c];) {
          f = e.split(":"), a.style[f[0]] = f[1];
        }
      }
    } else {
      9 > v || 1 > w ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
    }
  };
  Y.splice(0, 0, function() {
    function a(m) {
      m = za(m);
      for (var h = m.length, k, l, q; h;) {
        if (k = m[--h], l = k.nodeType, 8 === l) {
          b && p.push(k);
        } else if (1 === l) {
          switch(l = ea(k), "/" === l.charAt(0) && (l = l.substr(1), g[l] = !0), l) {
            case "STYLE":
              if (7.2 <= v && 9 > v) {
                break;
              }
            case "LINK":
              M || d || Cb(Ja, k) || f.push(k);
              break;
            case "META":
              l = V(k, "name") || V(k, "property");
              for (q = e.length; q;) {
                if (0 === l.indexOf(e[--q])) {
                  p.push(k);
                  break;
                }
              }
              break;
            case "SCRIPT":
              if (ld(k, "async")) {
                break;
              }
              if (c) {
                k.innerText = "";
                c = !1;
                break;
              }
            case "NOSCRIPT":
              if (ld(k, "skip-cleanup")) {
                break;
              }
            case "!":
              p.push(k);
              break;
            case "SOURCE":
              u.HTMLSourceElement || p.push(k);
              break;
            default:
              g[l] ? p.push(k) : za(k).length && a(k);
          }
        }
      }
      for (; f[0];) {
        Ja.appendChild(f.pop());
      }
      for (; p[0];) {
        fa(p.pop());
      }
    }
    ta = Ka("jsMain");
    var b = !(8 > v || 5 > t || ba || .9 > w), c = dd, d = 7 > t, e = ["og:", "twitter:", "fb:"], f = [], p = [], g = {};
    a(Kb);
  });
  var Ua, F, kb = u.matchMedia, Ba, Sa = [];
  Y.push(function() {
    Oa = n;
    Ba = ia(E, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    S(function() {
      Sa.length && D(Fc);
    });
  });
  var A = function(a, b, c, d) {
    if (md) {
      a.addEventListener(b, c, d ? ad ? d : d.capture : !1);
    } else {
      var e = {j:a, i:c};
      d = Ta[b];
      var f = "on" + b, p, g;
      if (d) {
        for (p = d.length; g = d[--p];) {
          if (g.j === a && g.i === c) {
            return;
          }
        }
        Ta[b].push(e);
      } else {
        Ta[b] = d = [e], mc || (b = a[f], "function" === typeof b && b !== qb && d.unshift({j:a, i:b}));
      }
      mc ? a.attachEvent(f, qb) : a[f] = qb;
    }
  };
  var H = function(a, b, c, d) {
    if (md) {
      a.removeEventListener(b, c, d ? ad ? d : d.capture : !1);
    } else {
      d = Ta[b];
      b = "on" + b;
      var e, f, p;
      if (d) {
        for (e = d.length; f = d[--e];) {
          f.j === a && (f.i === c ? d.splice(e, 1) : p = !0);
        }
        p || (mc ? a.detachEvent(b, qb) : (a[b] = Tb, a[b] = null));
      }
    }
  };
  var Ta = {}, mc = !1, rb = 525.13 > cb, md = !rb && !ba && u.addEventListener, sb;
  rb && Kb.addEventListener("click", function(a) {
    if (sb) {
      return sb = !1, a.preventDefault(), !1;
    }
  });
  var S = function(a) {
    Y.push(a);
  };
  var La = function(a) {
    Lb && Lb.push(a);
  };
  var Lb = [];
  if (419.3 >= cb) {
    var Mb = function() {
      if (Mb) {
        var a = r.readyState;
        "loaded" === a || "complete" === a ? (Mb = n, jb()) : D(Mb);
      }
    };
    D(Mb);
  } else {
    A(u, "load", jb);
  }
  t || .9 <= w && 1.8 > w ? A(u, "unload", function(a) {
    xa(Lb, a, !0);
  }) : Lb = n;
  var Pa = function(a) {
    Hc.push(a);
  };
  S(function() {
    Gc();
    kc(Gc);
  });
  var nd = function(a) {
    Q && Q.push(a);
  };
  var od = 60 > w || hc, wa, Rb, Qb;
  if (89 <= w || 89 <= db || ic && 79 <= $c || kb && (kb("(forced-colors:none)").matches || kb("(forced-colors:active)").matches)) {
    var pd = !0;
    Oa("(forced-colors:active)", function(a) {
      wa = a.matches;
      F = R();
      la(Q, F);
    });
  } else if (10 <= t || gc || ic && $c) {
    pd = !0, Oa("(-ms-high-contrast:black-on-white)", function(a) {
      wa = Rb = a.matches;
      F !== R() && (F = R(), la(Q, F));
    }), Oa("(-ms-high-contrast:white-on-black)", function(a) {
      wa = Qb = a.matches;
      F !== R() && (F = R(), la(Q, F));
    }), Oa("(-ms-high-contrast:active)", function(a) {
      wa = a.matches;
      F !== R() && (F = R(), la(Q, F));
    });
  } else if (ic && (t || w && 0 <= W.conpare(aa, "1.8.1") || hc)) {
    var nc = function() {
      function a(d, e) {
        if (e && "transparent" === d) {
          return 382.5;
        }
        if ("#" === d.charAt(0)) {
          return parseInt("0x" + d.substr(1, 2), 16) + parseInt("0x" + d.substr(3, 2), 16) + parseInt("0x" + d.substr(5, 2), 16);
        }
        var f = d.split("(")[1].split(",");
        return X(f[0]) + X(f[1]) + X(f[2]);
      }
      var b = r.defaultView;
      var c = b ? b.getComputedStyle(Ba, null) : Ba.currentStyle;
      b = (c && c.color || "").split(" ").join("");
      c = (c && c.backgroundColor || "").split(" ").join("");
      b && (wa = "#123456" !== b && "rgb(18,52,86)" !== b, Rb = a(b) < a(c, !0), Qb = a(b) > a(c, !0), F !== R() && (F = R(), la(Q, F, od)));
    };
    Pa(function(a) {
      if (a) {
        return ca(Ba, "color", "#123456"), ca(Ba, "backgroundColor", "#123456"), od ? (nc(), Q = n) : kc(nc), nc = n, !0;
      }
    });
  } else {
    Q = R = n;
  }
  var Nb = function(a) {
    eb.push(a);
  };
  var eb = [], oc = 7.5 <= v && 8 > v;
  oc && function() {
    for (var a = r.images, b = a.length, c; b;) {
      c = a[--b], c.H = c.src, ha(c, "src");
    }
  }();
  S(function() {
    function a() {
      d ? (e = c[--d], oc && Aa(e, "src", e.H), Sd(b, oc ? e.H : e.src)) : Nb = eb = n;
    }
    function b(p) {
      xa(eb, {D:e, F:p}, !d);
      a();
    }
    var c = r.images || I(r, "img"), d = c.length;
    if (12 > v || 532 > cb) {
      a();
    } else {
      for (; d;) {
        var e = c[--d];
        var f = 9 > t ? e.complete : 0 <= e.naturalWidth ? e.naturalWidth : e.width;
        la(eb, {D:e, F:f}, !d);
      }
      Nb = eb = n;
    }
  });
  var qd = function(a) {
    Jc.push(a);
  };
  var Jc = [], Ca;
  A(u, "resize", Ic);
  La(function() {
    Ca && clearTimeout(Ca);
    H(u, "resize", Ic);
  });
  var fb = function(a) {
    Kc.push(a);
  };
  var Kc = [], rd = 0, sd = 1 > w || 1.2 <= w && 1.8 > w || 7.2 >= v;
  sd ? kc(function() {
    var a = u.scrollY || E.scrollTop;
    rd !== a && (rd = a, Vb());
  }) : A(u, "scroll", Vb);
  La(function() {
    sd || H(u, "scroll", Vb);
  });
  9 > t && S(function() {
    var a = ia(E, "div");
    Va(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    bd = 1 < a.offsetHeight;
    Va(a, "");
    fa(a);
  });
  var Sd = function(a, b) {
    function c() {
      e || !f || d.complete ? (D(a, !!d.width), d.onerror = d.onload = Tb, d = a = n) : (--f, D(c));
    }
    var d = new Image(), e, f = 99;
    d.onerror = function() {
      e = !0;
    };
    d.onload = function() {
      e = !0;
    };
    d.src = b;
    D(c);
  };
  Nb(function(a) {
    var b = a.D;
    a = a.F;
    var c = T(b);
    !da(c, "aBodyRoot") && a ? ma(c, "img-loaded") : a || V(b, "alt") || ca(b, "display", "none");
  });
  if (!pd && Q) {
    var gb, td = function() {
      gb = ia(Ja, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:G + "css/" + Jb + "hc/" + jc});
      (cd || 5.5 <= t && 9 > t && bd) && ma(E, "jsCanRotate");
      td = n;
    };
    nd(function(a) {
      a && !gb ? td() : gb && (a ? Ja.appendChild(gb) : fa(gb));
    });
  }
  5.5 <= t && 8 > t && Q && nd(function(a) {
    for (var b = I(r, "a"), c = b.length, d = 0; d < c; ++d) {
      b[d].hideFocus = !a;
    }
  });
  v && S(function() {
    for (var a = I(r, "a"), b = a.length, c = 0, d; c < b; ++c) {
      d = a[c], "-1" === V(d, "tabindex") ? ha(d, "tabindex") : V(d, "href") && Aa(d, "tabindex", "0");
    }
    a = I(r, "input");
    c = 0;
    for (b = a.length; c < b; ++c) {
      d = a[c], "hidden" === V(d, "type") && ha(d, "tabindex");
    }
  });
  var Td = w && 0 >= W.conpare(aa, "0.9");
  var Ob = !(7.2 > v || Td);
  var ud = function(a) {
    pc ? r.write('<script src="' + a + '">\x3c/script>') : Y || Pb.length ? Pb.push(a) : qc(a);
  };
  var vd = function() {
    pc || qc(Pb.shift());
  };
  var pc = !Ob, wd = Ob && 7.5 > v;
  if (!pc) {
    Ob = !0;
    var Pb = [];
    wd && (dd = !0);
    S(function() {
      qc(Pb.shift());
    });
    var qc = function(a) {
      a && (wd ? rc[0].src = a : ia(Ja, "script", {src:a}));
    };
  }
  var ub = [];
  if (!Zc) {
    var Ud = N.transition !== n || N["-o-transition"] !== n || N["-moz-transition"] !== n || N["-webkit-transition"] !== n;
    Nb(function(a) {
      if (a.F && ta) {
        a = a.D;
        var b = T(a), c = "", d;
        if ("A" === ea(b) && 1 === Qd(b).length) {
          var e = V(b, "href");
          var f = e.split("?")[0].split("#")[0].split(".");
          f = (f[f.length - 1] || "").toLowerCase();
          if ((d = 0 < e.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + f + ".")) {
            A(b, "keydown", tb), A(a, "click", tb), A(b, "click", Wb), Ud && (c = a.naturalWidth + 4 + "px", ca(a, "width", c)), ma(b, "jsPica"), ub.push({u:b, Y:a.src, Z:c, M:e, C:a, L:d});
          }
        }
      }
    });
    La(function(a, b) {
      for (a = -1; b = ub[++a];) {
        H(b.u, "keydown", tb), H(b.C, "click", tb), H(b.u, "click", Wb);
      }
    });
  }
  var Bb = ["jsSidebarFixer1", "jsSidebarFixer2"], xd = w || hc || gc, Fd = !(9 > t || v || 1 <= w && 1.3 > w), Zb = !(5 > y(16) || 5 > y(17) || 2.2 > y(21) || 6 > y(12) || L(30) && 534 > cb || L(32) || 7 > t || 9 > v || 1 > w), Mc = Zb || 6 === t || 1 > w, Lc = 7.5 > v, Ea, oa, Nc, P, Xb = cd, Oc = 0, wb = 0, Yb, Wa, Xa, na, sc = w && 0 <= W.conpare(aa, "0.9.7"), yd = w && 0 >= W.conpare(aa, "0.9.4");
  zd || Zc || (Pa(function(a) {
    if (a) {
      if (!ta) {
        return !0;
      }
      a = -1;
      var b;
      Ea = "CSS1Compat" !== r.compatMode ? E : Kb || E;
      oa = Ka("jsSide");
      Nc = ta;
      if (!oa) {
        return !0;
      }
      fb(vb);
      qd(vb);
      P = lc(jd(oa), "div", {id:"jsSidebarFixer"});
      for (8 > v || yd || 6 > t || (t || ba ? A(P, "focusin", qa) : xd ? A(r, "focus", qa, {capture:!0, passive:!1}) : A(P, "DOMFocusIn", qa, !1)); 1 < za(oa).length;) {
        P.appendChild(za(oa)[1]);
      }
      for (sc && !bb && A(r, "DOMMouseScroll", Qc, !1); b = Bb[++a];) {
        var c = Ka(b);
        c.onwheel !== n ? A(c, "wheel", pa, {passive:!1}) : bb ? A(c, "MozMousePixelScroll", pa, !1) : sc ? Bb[a] = Ka(b) : (c.onmousewheel !== n || 9 <= v) && A(c, "mousewheel", pa, !1);
      }
      t || gc || 2 > db || (Yb = N.perspective !== n || N.MozPerspective !== n || N["-webkit-perspective"] !== n);
      vb();
      return !0;
    }
  }), La(function() {
    var a = -1, b;
    if (sc && !bb) {
      H(r, "DOMMouseScroll", Qc, !1);
    } else {
      for (; b = Bb[++a];) {
        b = Ka(b), b.onwheel !== n ? H(b, "wheel", pa, {passive:!1}) : bb ? H(b, "MozMousePixelScroll", pa, !1) : (b.onmousewheel !== n || 9 <= v) && H(b, "mousewheel", pa, !1);
      }
    }
    8 > v || yd || 6 > t || (t || ba ? H(P, "focusin", qa, !1) : xd ? H(r, "focus", qa, {capture:!0, passive:!1}) : H(P, "DOMFocusIn", qa, !1));
    Ma && clearInterval(Ma);
  }));
  var Ma, $b, Ya;
  6 > t && Pa(function(a) {
    if (!ta) {
      return !0;
    }
    a ? Ma = setInterval(Gd, 333) : Ma && (clearInterval(Ma), Ma = 0);
  });
  S(function() {
    function a(p, g, m, h) {
      var k = h ? "div" : "cite";
      if (0 === g.indexOf("urn:isbn:")) {
        g = g.substr(9).toUpperCase().split("-").join("");
        if (13 === g.length) {
          g = g.toString().slice(3, -1);
          for (var l = 0, q = 0; 9 > q; q++) {
            l += (g.charAt(q) - 0) * (10 - q);
          }
          l = (11 - l % 11) % 11;
          l = 10 === l ? "X" : l.toString();
          g += l;
        }
        10 === g.length && (g = "//www.amazon.co.jp/exec/obidos/ASIN/" + g + "/itozyun-22/ref=nosim/");
      }
      m = h ? lc(jd(c), k, {className:m}) : ia(c, k, {className:m});
      ia(m, "a", 0 === g.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:g, X:v ? "0" : n} : {href:g, X:v ? "0" : n}, p);
    }
    if (ta) {
      for (var b = I(ta, "blockquote"), c, d = -1, e, f; c = b[++d];) {
        e = V(c, "title"), f = V(c, "cite"), e && f ? (ha(c, "title"), a(e, f, "js-bqLink", !0)) : f && (ha(c, "cite"), a(u.decodeURI ? decodeURI(f) : f, f, "js-bqCite"));
      }
    }
  });
  var ac, Db, Za, ra, Ia, sa, dc;
  S(function() {
    var a = Ka("blog2slide-start");
    if (a) {
      var b = r.onfullscreenchange !== n ? "f" : r.onmozfullscreenchange !== n ? "mozF" : r.onwebkitfullscreenchange !== n ? "webkitF" : 0;
      ac = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
      0 !== b || ac ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', A(a.firstChild, "click", Id), a = T(a), Db = T(a), Ia = I(a, "section"), Za = r.createElement("h1"), Za.innerHTML = I(r, "h1")[0].innerHTML, dc = Ia.length, Ia.splice(0, 0, Za), 0 !== b ? A(r, b + "ullscreenchange", bc) : t ? A(r, "MSFullscreenChange", bc, !1) : qd(bc)) : fa(a);
    }
  });
  var Fb = !wc || .9 > w || 8 > v || 5.5 > t;
  var ab = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var Vd = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Wd = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
  26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], Ib = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
  Xd = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Sc = va.now || function() {
    return +new va();
  }, Rc, Tc, K, tc, uc, Kd = 5 > t ? 60 : 5.5 > t ? 0 : Fb ? 20 : 10, Vc, Xc;
  var ja = [function(a) {
    u.RegExpCompat = Rc = a;
  }, function() {
    Vc = $a("^\\s*<");
    Xc = $a("\\S");
  }];
  Fb || (ja[1](), ja = n);
  var Zd = function() {
    var a = K, b = a.U, c = Yd(a.A, a.N), d = a.o = c.o;
    a.G = c.G;
    Uc(b, d) || (K = n, B(Na, n, 0, !0));
  };
  var ec = function() {
    var a = K;
    a.$ = a.o.match(a.m[1]) || [];
    a.s.push(a.B, 0);
    B(Gb, n, 2);
  };
  var Hb = [];
  var Wc = function(a) {
    function b(h) {
      var k = h;
      0 <= h && (k = Wd[h]);
      0 <= k[1] && (k[1] = c(k[1]));
      return k;
    }
    function c(h) {
      var k = h;
      return 0 <= h && (k = Ib[h], !k.exec) ? (Hb.push(h), h) : k;
    }
    var d = K, e = ab[a];
    Eb(e) && (e = ab[a] = ab[e]);
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
    Hb.length ? B(fc, a, 2) : (d.m ? d.l && (d.l.g[0].m = e) : d.m = e, B(ec, n, 1));
  };
  var Yd = function(a, b) {
    function c(m) {
      var h = m.nodeType;
      if (1 === h) {
        if (!da(m, "nocode")) {
          for (h = m.firstChild; h; h = h.nextSibling) {
            c(h);
          }
          h = ea(m);
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
      if (1 === k && !da(h, "nocode")) {
        if ("BR" === ea(h)) {
          e(h), h.parentNode && fa(h);
        } else {
          for (h = h.firstChild; h; h = h.nextSibling) {
            d(h);
          }
        }
      } else if ((3 === k || 4 === k) && c) {
        var l = h.nodeValue, q = l.indexOf("\r\n"), z = 2;
        -1 === q && (q = l.indexOf("\n"), z = 1);
        -1 === q && (q = l.indexOf("\r"));
        -1 !== q && (k = l.substr(0, q), h.nodeValue = k, (l = l.substr(q + z)) && kd(h, l), e(h), k || fa(h));
      }
    }
    function e(h) {
      function k(q, z) {
        var J = z ? q.cloneNode(!1) : q, x = q.parentNode;
        if (x) {
          x = k(x, 1);
          var O = q.nextSibling;
          x.appendChild(J);
          for (var C = O; C; C = O) {
            O = C.nextSibling, x.appendChild(C);
          }
        }
        return J;
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
      if (10 <= b && 7.2 > v) {
        var m = r.createElement("ol");
        m.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        p[0] = m.firstChild;
      } else {
        Aa(f, "value", b);
      }
    }
    m = ia(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    g = 0;
    for (b = p.length; g < b; ++g) {
      f = p[g], ob(f, "L" + (g + a) % 10), f.firstChild || Rd(f, "\u00a0"), m.appendChild(f);
    }
  };
  var Md = function() {
    var a = K, b = a.o, c = b.length, d = 0, e = a.G, f = e.length, p = 0, g = a.s, m = g.length, h = 0;
    g[m] = c;
    var k, l;
    for (l = k = 0; l < m;) {
      g[l] !== g[l + 2] ? (g[k++] = g[l++], g[k++] = g[l++]) : l += 2;
    }
    m = k;
    for (l = k = 0; l < m;) {
      var q = g[l], z = g[l + 1];
      for (l += 2; l + 2 <= m && g[l + 1] === z;) {
        l += 2;
      }
      g[k++] = q;
      g[k++] = z;
    }
    g.length = k;
    a = a.A;
    m = "";
    a && (m = a.style.display, ca(a, "display", "none"));
    for (; p < f;) {
      k = e[p + 2] || c;
      q = g[h + 2] || c;
      l = Math.min(k, q);
      z = e[p + 1];
      var J;
      if (1 !== z.nodeType && (J = b.substring(d, l))) {
        9 > t && (J = J.split("\n").join("\r"));
        var x = lc(z, "span", {className:Xd[g[h + 1]]}, J);
        fa(z);
        d < k && (e[p + 1] = kd(x, b.substring(l, k)));
      }
      d = l;
      d >= k && (p += 2);
      d >= q && (h += 2);
    }
    a && ca(a, "display", m);
    K = n;
    B(Na, n, 3, !0);
  };
  var hb = [], ib;
  Pa(function(a) {
    if (a) {
      a = [I(r, "pre"), I(r, "code"), I(r, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var c = 0, d = a[b].length; c < d; ++c) {
          Ad(a[b][c]);
        }
      }
      return !0;
    }
  });
  var Ad = function(a) {
    hb.push(a);
    ib = hb.length;
    1 === ib && (vc ? D(vc, Na) : ja ? ja.push(function() {
      D(Na);
    }) : D(Na));
  };
  var Na = function() {
    function a(p, g) {
      return (p.split(g)[1] || "").split(" ")[0];
    }
    if (!K) {
      ib !== hb.length && uc && uc(ib - hb.length, ib);
      var b = hb.shift();
      if (b) {
        if (da(b, "prettyprint") && !da(b, "prettyprinted")) {
          for (var c = !1, d = b.parentNode; d !== E; d = d.parentNode) {
            var e = ea(d);
            if (("PRE" === e || "XMP" === e || "CODE" === e) && da(d, "prettyprint")) {
              c = !0;
              break;
            }
          }
          if (!c) {
            c = b.className;
            ma(b, "prettyprinted");
            d = !1;
            if (!d) {
              d = a(c, "lang-") || a(c, "language-");
              var f;
              !d && (f = Nd(b)) && "CODE" === ea(f) && (d = a(f.className, "lang-") || a(f.className, "language-"));
            }
            e = ea(b);
            "PRE" === e || "XMP" === e ? e = 1 : (e = b.currentStyle, f = r.defaultView, e = (e = e ? e.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === e.substr(0, 3));
            f = !1;
            (f = "true" === f || +f) || (f = a(c, "linenums:") || da(b, "linenums"), f = f.length ? +f : f);
            f && $d(b, f, e);
            K = {U:d, A:b, ba:f, N:e, B:0, v:0, P:{}, s:[]};
            B(Zd);
            return;
          }
        }
        B(Na, n, 0, !0);
      } else {
        tc && tc();
      }
    }
  };
  u.PR = {RegExpProxy:$a, prettifyElement:Ad, registerCompleteHandler:function(a, b) {
    tc = a;
    uc = b;
  }};
  var rc = r.scripts || I(r, "script");
  var G = rc[rc.length - 1].src.split("/");
  --G.length;
  "js" === G[G.length - 1] && --G.length;
  (G = G.join("/")) && (G += "/");
  var zd = Pd || "1" === V(E, "mob");
  Jb = (zd ? "mb" : "pc") + "/";
  6.1 > Yc && (fb ? fb(gd) : A(u, "scroll", gd));
  La(yc);
  6.1 > Yc && (fb ? fb(id) : A(u, "scroll", id));
  La(zc);
  10 > t && (11 !== Od || 5 !== t) || (9 > v || 1 > w || !ba && !u.addEventListener ? r.write('<link href="' + G + "css/" + Jb + jc + '" rel="stylesheet"' + (8 > v ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > v || 1.5 > w || 532 >= cb || 8 > db) && S(function() {
    ia(Ja, "link", {href:G + "css/" + Jb + jc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Fb) {
    if (Ob) {
      var vc = function(a) {
        u.RegExpCompat = function(b) {
          for (var c; c = ja.shift();) {
            c(b);
          }
          ja = n;
          D(a);
          vd(G + "js/regexpcompat.js");
        };
        vc = n;
        ud(G + "js/regexpcompat.js");
      };
    } else {
      u.RegExpCompat = function(a) {
        for (var b; b = ja.shift();) {
          b(a);
        }
        ja = n;
        vd(G + "js/regexpcompat.js");
      }, ud(G + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

