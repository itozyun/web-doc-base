/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d});
Function.prototype.apply||(Function.prototype.apply=function(_x,_y){var f=this,x=_x!=null?_x:{},y=_y||[],j=y.length,i=0,r,a,u;x.__apply=f;if(!x.__apply)a=x.constructor.prototype.__apply=f;switch(j){case 0:r=x.__apply();break;case 1:r=x.__apply(y[0]);break;case 2:r=x.__apply(y[0],y[1]);break;case 3:r=x.__apply(y[0],y[1],y[2]);break;case 4:r=x.__apply(y[0],y[1],y[2],y[3]);break;case 5:r=x.__apply(y[0],y[1],y[2],y[3],y[4]);break;case 6:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5]);break;case 7:r=x.__apply(y[0],
y[1],y[2],y[3],y[4],y[5],y[6]);break;case 8:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7]);break;case 9:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]);break;default:r=[];for(;i<j;++i)r[i]="y["+i+"]";r=eval("x.__apply("+r.join(",")+")")}a?delete x.constructor.prototype.__apply:x.__apply=u;return r});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
window.decodeURI||(decodeURI=function(d){var e=[],f=parseInt,h=String.fromCharCode;d+="";for(var g=-1,b=0,k=d.length,c,a;b<k;++b)a?(a=f(d.substr(b,2),16),++b,127<a&&(223<a?(c=(a&15)<<12,a=f(d.substr(b+2,2),16)&63,b+=3,c+=a<<6):c=(a&63)<<6,a=f(d.substr(b+2,2),16)&63,b+=3,a+=c),e[++g]=h(a),a=!1):(c=d.charAt(b),(a="%"===c)||(e[++g]=c));return e.join("")});window.decodeURIComponent||(decodeURIComponent=decodeURI); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
var ea, bb;
(function(Xa, O, gb, sc, N, Wb, Tc, Mb, cb, Xb, Yb, tc, Zb, q) {
  function fa(D) {
    if (Xa[0] === D) {
      return Ya === Ya + "" ? cb(Ya) : Ya;
    }
  }
  function Fa(D) {
    var I = Xa[3];
    if (Xa[2] === D) {
      return I === I + "" ? cb(I) : I;
    }
  }
  function $b() {
    return 6 > y ? sa.scrollTop : y ? qb.scrollTop : O.pageYOffset;
  }
  var sa = N.body, Pa = sa.style, qb, rb, hb, Ya = Xa[1], y = fa(2) || fa(3), sb = fa(7), Fb = fa(5) || fa(6), L = fa(8) || fa(9), S = fa(11) || fa(12), Nb = S && 0 <= Xa.conpare(Ya, "1.9.1"), ac = fa(13), Sa = fa(15), ib = fa(16) || fa(17), uc = fa(10) || fa(25), db = fa(20) || fa(22), Uc = fa(23), Gb = fa(21), vc = fa(24), wc = db && cb(Wb.userAgent.split("Edg/")[1]), Vc = cb(Wb.appVersion.split("Trident/")[1]) + 4, bc = Fa(35) || Fa(36) || Fa(37), Wc = 0 <= Wb.userAgent.indexOf("Googlebot/"), 
  Ta = 0.9 > S, cc = (sb ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > L ? "opr70" : 8 > L ? "opr72" : 9.5 > L ? "opr" + (L | 0) : S && !Nb ? 1.4 <= S ? "gck19" : 1.3 <= S ? "gck13" : 1 <= S ? "gck12" : Ta ? 0.8 <= S ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Ob = "", Xc = Fa(1) || Fa(2) || Fa(3) || Fa(4) || Fa(8) || Fa(9) || Fa(10), xc, yc = Pa.transform !== q ? "transform" : Pa["-o-transform"] !== q ? "-o-transform" : Pa["-ms-transform"] !== q ? "-ms-transform" : 
  Pa.MozTransform !== q ? "-moz-transform" : Pa["-webkit-transform"] !== q ? "-webkit-transform" : "", Ja = [], zc = [], Ua = [], Ac, Bc, Pb, Cc, dc, ec, Dc = !1;
  525 > Sa || 3.2 > ib || 2.2 > Gb || 10 > L || S && !Nb || fa(25) || 10 > fa(3) || Fa(32) || Fa(30) || Fa(3);
  var ta, Hb, Qb, Ec, Yc = !!sa.getBoundingClientRect, Rb = [], Sb = [], fc, Fc, gc, Gc, xb = Mb.now || function() {
    return +new Mb();
  };
  (function() {
    function D() {
      for (var z, Z = 0, R = xb(); Z < G.length;) {
        R < G[0].t ? ++Z : (z = G.splice(Z, 1)[0], z.f(z.p));
      }
      la = G.length ? Yb(D, wa) : 0;
    }
    function I() {
      for (var z, Z = 0; Z < J.length; ++Z) {
        z = J[Z], z.f();
      }
    }
    function F() {
      ma && (ma = clearInterval(ma));
    }
    function T() {
      la && (la = tc(la));
    }
    ea = function(z) {
      Rb.push(z);
    };
    bb = function(z) {
      Sb.push(z);
    };
    Qb = function(z) {
      J.length || (ma = Zb(I, U));
      J.push({f:z, C:++ha});
      return ha;
    };
    Ec = function(z) {
      for (var Z = J.length, R; R = J[--Z];) {
        if (R.C === z) {
          J.splice(Z, 1);
          J[0] || F();
          break;
        }
      }
      return 0;
    };
    fc = function() {
      ma && (F(), ma = Zb(I, U));
    };
    Fc = F;
    var J = [], U = 500, ha = 0, ma;
    if (5 > y || sb) {
      O._wdb_onlooptimer = I, I = "_wdb_onlooptimer()";
    }
    ta = function(z, Z, R) {
      G.length || (la = Yb(D, wa));
      G.push({f:z, p:Z, C:++na, t:xb() + (wa < R ? R : wa)});
      return na;
    };
    Hb = function(z) {
      for (var Z = G.length, R; R = G[--Z];) {
        if (R.C === z) {
          G.splice(Z, 1);
          break;
        }
      }
      return 0;
    };
    gc = function() {
      la && (T(), la = Yb(D, wa));
    };
    Gc = T;
    var G = [], wa = 16, na = 0, la;
    if (5 > y || sb) {
      O._wdb_ontimer = D, D = "_wdb_ontimer()";
    }
  })();
  var tb, ub, jb, Hc, Ga, Za, Ic, hc, ra, Ib, Jc, Kc, ic, Va, kb, Na, Ka, lb, eb, yb, Lc, Tb, $a, mb, Mc, Aa, La, Nc;
  (function() {
    function D(c, d, b) {
      var h = ["<", c], k = 1, t, M;
      if (d) {
        for (t in d) {
          var Q = d[t];
          if (null != Q && "" !== Q) {
            if ("style" === t) {
              h[++k] = ' style="';
              for (M in Q) {
                for (var da = ++k, pa, Y = [], ia = M.split(""), qa = ia.length; qa;) {
                  pa = ia[--qa], "A" <= pa && "Z" >= pa && (pa = "-" + pa.toLowerCase()), Y[qa] = pa;
                }
                h[da] = Y.join("") + ":" + Q[M] + ";";
              }
              h[++k] = '"';
            } else {
              "className" === t && (t = "class"), h[++k] = " " + t + '="' + Q + '"';
            }
          }
        }
      }
      h[++k] = ">";
      null != b && (z && "font" !== c ? h[++k] = "<font>" + I(b) + "</font>" : h[++k] = I(b));
      h[++k] = "</" + c + ">";
      return h.join("");
    }
    function I(c) {
      return c.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function F(c) {
      var d = c.split("-"), b = d.length;
      if (2 > b) {
        return c;
      }
      for (; 1 < b;) {
        c = d[--b], d[b] = c.charAt(0).toUpperCase() + c.substr(1);
      }
      return d.join("");
    }
    function T(c) {
      return J(N, c);
    }
    function J(c, d) {
      var b = "*" === d;
      b = z ? b ? c.all : c.all.tags(d.toUpperCase()) : 6 > y && b ? c.all : c.getElementsByTagName(d);
      for (var h = [], k = 0, t = b.length; k < t; ++k) {
        h[k] = b[k];
      }
      return h;
    }
    function U(c) {
      return z ? c.parentElement : c.parentNode;
    }
    function ha(c, d, b, h, k, t) {
      if (z) {
        var M = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend";
        var Q = Za(2 > c ? Ga(d) : d);
        Q = 2 > c ? Q.indexOf(d) + c : Q.length;
        d.insertAdjacentHTML(M, D(b, h, k));
        d = Za(d)[Q];
        null != k && ("font" === b ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (Z) {
        d = N.createElement(D(b, h));
      } else {
        d = t ? N.createElementNS("http://www.w3.org/2000/svg", b) : N.createElement(b);
        if (h) {
          for (M in h) {
            if ((c = h[M]) || 0 === c) {
              switch(M) {
                case "class":
                case "className":
                  Tb(d, c);
                  break;
                case "style":
                  t = d.style;
                  for (Q in c) {
                    t[Q] = c[Q];
                  }
                  break;
                default:
                  lb(d, M, c);
              }
            }
          }
          !L || "a" !== b && "A" !== b || !h.href || h["tag-index"] || h.tagIndex || lb(d, "tagIndex", "-0");
        }
        R || null != k && ma(d, k);
      }
      return d;
    }
    function ma(c, d) {
      if (z) {
        return ha(2, c, "font", q, d);
      }
      var b = N.createTextNode("" + d);
      c.appendChild(b);
      return b;
    }
    function G(c, d) {
      9 > y ? c.className = d : c.setAttribute("class", d);
    }
    function wa(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    function na(c, d, b) {
      if (8 > L || 5.5 > y) {
        d = F(d);
      }
      c.style[d] = b;
    }
    function la(c) {
      return 5.5 > y ? c.style.cssText.toLowerCase() : c.style.cssText;
    }
    var z = 5 > y;
    qb = T("html")[0];
    rb = T("head")[0];
    tb = function(c) {
      return O[c] || N[c] || N.getElementById(c);
    };
    ub = T;
    jb = J;
    Hc = function(c, d) {
      var b = [], h = 0, k, t = -1;
      if (9 > y || !c.getElementsByClassName) {
        var M = 6 > y ? c.all : c.getElementsByTagName("*");
      } else {
        var Q = !0;
        M = c.getElementsByClassName(d);
      }
      for (k = M.length; h < k; ++h) {
        var da = M[h];
        if (Q || (z || 1 === da.nodeType) && wa(da, d)) {
          b[++t] = da;
        }
      }
      return b;
    };
    Ga = U;
    Za = function(c) {
      c = z ? c.children : c.childNodes;
      for (var d = [], b = c.length; b;) {
        d[--b] = c[b];
      }
      return d;
    };
    Ic = function(c) {
      var d = !(7.03 < L && 7.2 > L) && c.children;
      c = d ? d : c.childNodes;
      for (var b = [], h = c.length, k = -1, t; h;) {
        if (t = c[--h], d || 1 === t.nodeType) {
          z && "FONT" === t.tagName || (b[++k] = t);
        }
      }
      return b;
    };
    hc = function(c) {
      return z ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    ra = function(c, d, b, h, k) {
      d = ha(2, c, d, b, h, k);
      z || (c.appendChild(d), R && null != h && ma(d, h));
      return d;
    };
    Ib = function(c, d, b, h, k) {
      d = ha(0, c, d, b, h, k);
      z || (U(c).insertBefore(d, c), R && null != h && ma(d, h));
      return d;
    };
    Jc = function(c, d, b, h, k) {
      d = ha(1, c, d, b, h, k);
      var t;
      z || ((t = c.nextSibling) ? Ga(t).insertBefore(d, t) : Ga(c).appendChild(d), R && null != h && ma(d, h));
      return d;
    };
    Kc = ma;
    ic = function(c, d) {
      var b;
      if (z) {
        return ha(1, c, "font", q, d);
      }
      var h = N.createTextNode("" + d);
      (b = c.nextSibling) ? Ga(c).insertBefore(h, b) : Ga(c).appendChild(h);
      return h;
    };
    Va = function(c) {
      Ga(c) ? z ? c.outerHTML = "" : (5.5 > y && (c.style.filter = ""), Ga(c).removeChild(c)) : ea("[DOM] p_DOM_remove(), No parentNode!");
    };
    kb = function(c, d) {
      if (c.contains) {
        return c.contains(d);
      }
      for (; d && d !== qb;) {
        if (d = Ga(d), c === d) {
          return !0;
        }
      }
    };
    var Z = 9 > y, R = Z;
    Na = function(c) {
      return c.tagName.toUpperCase();
    };
    Ka = function(c, d) {
      if (8 > L || 5.5 > y) {
        d = F(d);
      }
      var b = c.getAttribute(d);
      return L && "tabIndex" === d ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    };
    lb = function(c, d, b) {
      if (L && "tab-index" === d) {
        "-1" === b ? c.removeAttribute("tabIndex") : c.setAttribute("tabIndex", b);
      } else {
        if (8 > L || 5.5 > y) {
          d = F(d);
        }
        c.setAttribute(d, b);
      }
    };
    eb = function(c, d) {
      if (L && "tab-index" === d) {
        "-0" !== c.getAttribute("tabIndex") && c.setAttribute("tabIndex", "-0");
      } else {
        if (8 > L || 5.5 > y) {
          d = F(d);
        }
        c.removeAttribute(d);
      }
    };
    yb = function(c, d) {
      if (L && "tab-index" === d) {
        return "-0" !== c.getAttribute("tabIndex");
      }
      if (8 > L || 5.5 > y) {
        d = F(d);
      }
      return c.hasAttribute ? c.hasAttribute(d) : null != c.getAttribute(d);
    };
    Lc = function(c) {
      return c.className;
    };
    Tb = G;
    $a = wa;
    mb = function(c, d) {
      var b;
      if (!wa(c, d)) {
        if (b = c.className) {
          b += " ";
        }
        G(c, b + d);
      }
    };
    Mc = function(c, d) {
      if (wa(c, d)) {
        var b = c.className.split(" ");
        b.splice(b.indexOf(d), 1);
        G(c, b.join(" "));
      }
    };
    Aa = na;
    La = function(c, d) {
      var b, h = -1, k;
      if (5.5 > y) {
        if (b = la(c)) {
          for (b = b.split(";"); k = b[++h];) {
            na(c, k.split(":")[0], "");
          }
        }
        if (d) {
          for (h = -1, b = d.split(";"); k = b[++h];) {
            var t = k.split(":")[0];
            na(c, t, k.substr(t.length + 1));
          }
        }
      } else if (7.1 > L) {
        if (c.setAttribute("style", ""), d) {
          for (b = d.split(";"); k = b[++h];) {
            k = k.split(":"), na(c, k[0], k[1]);
          }
        }
      } else {
        9 > L || 1 > S ? d ? c.setAttribute("style", d) : c.removeAttribute("style") : c.style.cssText = d;
      }
    };
    Nc = la;
    Ja.splice(0, 0, function() {
      function c(da) {
        da = Za(da);
        for (var pa = da.length, Y, ia, qa; pa;) {
          if (Y = da[--pa], ia = Y.nodeType, 8 === ia) {
            d && M.push(Y);
          } else if (1 === ia) {
            switch(ia = Na(Y), "/" === ia.charAt(0) && (ia = ia.substr(1), Q[ia] = !0), ia) {
              case "STYLE":
                if (7.2 <= L && 9 > L) {
                  break;
                }
              case "LINK":
                z || h || kb(rb, Y) || t.push(Y);
                break;
              case "META":
                ia = Ka(Y, "name") || Ka(Y, "property");
                for (qa = k.length; qa;) {
                  if (0 === ia.indexOf(k[--qa])) {
                    M.push(Y);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Wc || yb(Y, "async")) {
                  break;
                }
                if (b) {
                  Y.innerText = "";
                  b = !1;
                  break;
                }
              case "NOSCRIPT":
                if (yb(Y, "skip-cleanup")) {
                  break;
                }
              case "!":
                M.push(Y);
                break;
              case "SOURCE":
                O.HTMLSourceElement || M.push(Y);
                break;
              default:
                Q[ia] ? M.push(Y) : Za(Y).length && c(Y);
            }
          }
        }
        for (; t[0];) {
          rb.appendChild(t.pop());
        }
        for (; M[0];) {
          Va(M.pop());
        }
      }
      hb = tb("jsMain");
      var d = !(8 > L || 5 > y || sb || Ta), b = Bc, h = 7 > y, k = ["og:", "twitter:", "fb:"], t = [], M = [], Q = {};
      c(qb);
    });
  })();
  var ba, Ba, Qa, vb, jc, zb, Ab, kc, lc, mc, Oc, Pc, Qc, Bb, va, nc;
  (function() {
    function D() {
      return l ? A ? 2 : x ? 3 : 1 : 0;
    }
    function I(e) {
      Ba(O, "load", I);
      I = q;
      T(Ja, e, !0);
      Ja = q;
    }
    function F(e, g) {
      Ab(function() {
        var r = la(e);
        g(r);
        r.addListener(g);
        return !0;
      });
    }
    function T(e, g, r) {
      for (var a = 0; a < e.length; ++a) {
        !0 === e[a](g) && (e.splice(a, 1), --a);
      }
      r && (e.length = 0);
    }
    function J(e, g, r) {
      Ja || Z.length || ta(U);
      Z.push(e, g, r);
    }
    function U() {
      var e = Z, g;
      for (Z = []; g = e.shift();) {
        T(g, e.shift(), e.shift());
      }
    }
    function ha(e) {
      var g = e || event;
      e = c[g.type];
      var r = -1, a, f;
      5 > y ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : y ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        f = !0;
      });
      for (; a = e[++r];) {
        a.j === this ? (this.g = a.i, y && (g.currentTarget = this), this.g(g), y ? (this.g = gb, this.g = q) : delete this.g) : 7.2 > L && this === N && a.j === O && (O.g = a.i, O.g(g), delete O.g);
      }
      if (y) {
        return g.preventDefault = g.stopPropagation = gb, g.preventDefault = g.stopPropagation = q, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (k = !0), f && !k && g.K(), g.K = g.stopPropagation = q);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var e = 9 === z.offsetWidth;
      Bb !== e && (J(zc, Bb = e), ea("p_cssAvailability:" + Bb));
    }
    function G() {
      !Ja && K && (Hb(K), K = ta(wa));
    }
    function wa() {
      K = 0;
      T(u);
    }
    function na(e) {
      Ja || T(p, e);
    }
    var la = O.matchMedia, z, Z = [];
    Ja.push(function() {
      F = q;
      z = ra(sa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Qa(function() {
        Z.length && ta(U);
      });
    });
    ba = function(e, g, r, a) {
      if (h) {
        e.addEventListener(g, r, a ? R ? a : a.capture || !0 === a : !1);
      } else {
        var f = {j:e, i:r};
        a = c[g];
        var w = "on" + g, E, W;
        if (a) {
          for (E = a.length; W = a[--E];) {
            if (W.j === e && W.i === r) {
              return;
            }
          }
          c[g].push(f);
        } else {
          c[g] = a = [f], d || (g = e[w], "function" === typeof g && g !== ha && a.unshift({j:e, i:g}));
        }
        d ? e.attachEvent(w, ha) : e[w] = ha;
      }
    };
    Ba = function(e, g, r, a) {
      if (h) {
        e.removeEventListener(g, r, a ? R ? a : a.capture || !0 === a : !1);
      } else {
        a = c[g];
        g = "on" + g;
        var f, w, E;
        if (a) {
          for (f = a.length; w = a[--f];) {
            w.j === e && (w.i === r ? a.splice(f, 1) : E = !0);
          }
          E || (d ? e.detachEvent(g, ha) : y ? (e[g] = gb, e[g] = null) : delete e[g]);
        }
      }
    };
    var R = !y && !sb && (new Tc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), c = {}, d = !1, b = 525.13 > Sa, h = !b && !sb && O.addEventListener, k;
    b && qb.addEventListener("click", function(e) {
      if (k) {
        return k = !1, e.preventDefault(), !1;
      }
    });
    Qa = function(e) {
      Ja ? Ja.push(e) : alert("Load event has already been dispatched!");
    };
    vb = function(e) {
      t && t.push(e);
    };
    var t = [];
    if (419.3 >= Sa) {
      var M = function() {
        if (M) {
          var e = N.readyState;
          "loaded" === e || "complete" === e ? (M = q, I()) : ta(M);
        }
      };
      ta(M);
    } else {
      ba(O, "load", I), Ta && ta(function() {
        I && I();
      }, 999);
    }
    y || !Ta && 1.8 > S ? ba(O, "unload", function(e) {
      T(t, e, !0);
    }) : t = q;
    Ab = function(e) {
      zc.push(e);
    };
    Qa(function() {
      ma();
      Qb(ma);
    });
    mc = function(e, g) {
      if (Q) {
        ba(e, "focusin", g);
      } else if (da) {
        ba(e, "DOMFocusIn", g);
      } else {
        if (Y) {
          nb || (nb = Zb(Ra, 333));
        } else if (pa || ia) {
          ba(N, "focus", wb, !0);
        } else {
          return;
        }
        for (var r = qa, a = 0, f = r.length; a < f; ++a) {
          if (r[a] === e && r[a + 1] === g) {
            return;
          }
        }
        r.push(e, g);
      }
    };
    Oc = function(e, g) {
      if (Q) {
        ba(e, "focusin", g);
      } else if (da) {
        ba(e, "DOMFocusIn", g, !1);
      } else {
        for (var r = qa, a = 0, f = r.length; a < f; ++a) {
          if (r[a] === e && r[a + 1] === g) {
            r.splice(a, 2);
            r.length || (Y ? nb = Ec(nb) : (pa || ia) && Ba(N, "focus", wb, !0));
            break;
          }
        }
      }
    };
    var Q = 6 <= y || Fb || 52 <= S || 15 <= db || 534 <= Sa || 5 <= ib || Uc || 4 <= Gb || 4 <= vc || 11.6 <= fa(8) || 12 <= fa(9), da = 8 <= L || db || Gb || vc || Sa || ib, pa = 8 > L, Y = 6 > y, ia = 52 > S || ac;
    if (ia || pa) {
      var qa = [];
      var wb = function(e) {
        var g = qa, r = pa ? N.activeElement : e.target;
        if (pa) {
          var a = e;
          e = {type:"focusin", target:r, preventDefault:function() {
            a.preventDefault();
          }, stopPropagation:function() {
            a.stopPropagation();
          }};
        }
        for (var f = 0, w = g.length; f < w; ++f) {
          var E = g[f];
          (E === r || kb(E, r)) && g[f + 1].call(E, e);
        }
      };
    } else if (Y) {
      qa = [];
      var nb, ya, Ma, Ra = function() {
        Ma = O.onerror;
        O.onerror = Oa;
        var e = N.activeElement;
        if (ya !== e) {
          ya = e;
          for (var g = qa, r, a = 0, f = g.length; a < f; ++a) {
            r = g[a], (r === e || kb(r, e)) && g[a + 1].apply(r, [{target:e}]);
          }
        }
        O.onerror = Ma;
        Ma = q;
      }, Oa = function() {
        ea("error!");
        O.onerror = Ma;
        Ma = ya = q;
        return !0;
      };
    }
    lc = function(e) {
      Ua && Ua.push(e);
    };
    var m = 60 > S || ac, l, x, A;
    if (89 <= S || 89 <= db || bc && 79 <= wc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      nc = !0, F("(forced-colors:active)", function(e) {
        l = e.matches;
        va = D();
        J(Ua, va);
        ea("(forced-colors:active):" + va);
      });
    } else if (10 <= y || Fb || bc && wc) {
      nc = !0, F("(-ms-high-contrast:black-on-white)", function(e) {
        l = x = e.matches;
        va !== D() && (va = D(), J(Ua, va), ea("(-ms-high-contrast:black-on-white):" + va));
      }), F("(-ms-high-contrast:white-on-black)", function(e) {
        l = A = e.matches;
        va !== D() && (va = D(), J(Ua, va), ea("(-ms-high-contrast:white-on-black):" + va));
      }), F("(-ms-high-contrast:active)", function(e) {
        l = e.matches;
        va !== D() && (va = D(), J(Ua, va), ea("(-ms-high-contrast:active):" + va));
      });
    } else if (bc && (y || S && 0 <= Xa.conpare(Ya, "1.8.1") || ac)) {
      var B = function() {
        function e(a, f) {
          if (f && "transparent" === a) {
            return 382.5;
          }
          if ("#" === a.charAt(0)) {
            return parseInt("0x" + a.substr(1, 2), 16) + parseInt("0x" + a.substr(3, 2), 16) + parseInt("0x" + a.substr(5, 2), 16);
          }
          var w = a.split("(")[1].split(",");
          return cb(w[0]) + cb(w[1]) + cb(w[2]);
        }
        var g = N.defaultView;
        var r = g ? g.getComputedStyle(z, null) : z.currentStyle;
        g = (r && r.color || "").split(" ").join("");
        r = (r && r.backgroundColor || "").split(" ").join("");
        g && (l = "#123456" !== g && "rgb(18,52,86)" !== g, x = e(g) < e(r, !0), A = e(g) > e(r, !0), va !== D() && (va = D(), ea("(forced-colors-fallback):" + va), J(Ua, va, m)));
      };
      Ab(function(e) {
        if (e) {
          return Aa(z, "color", "#123456"), Aa(z, "backgroundColor", "#123456"), m ? (B(), Ua = q) : Qb(B), B = q, !0;
        }
      });
    } else {
      Ua = D = q;
    }
    kc = function(e) {
      Ja || alert("p_listenImageReady is called back for images present at load time.");
      n.push(e);
    };
    var n = [], P = 7.5 <= L && 8 > L;
    P && function() {
      for (var e = N.images, g = e.length, r; g;) {
        r = e[--g], r.J = r.src, eb(r, "src");
      }
    }();
    Qa(function() {
      function e() {
        a ? (f = r[--a], P && lb(f, "src", f.J), Ac(g, P ? f.J : f.src)) : n = q;
      }
      function g(E) {
        T(n, {G:f, H:E}, !a);
        e();
      }
      var r = N.images || ub("img"), a = r.length;
      if (12 > L || 532 > Sa) {
        e();
      } else {
        for (; a;) {
          var f = r[--a];
          var w = 9 > y ? f.complete : 0 <= f.naturalWidth ? f.naturalWidth : f.width;
          J(n, {G:f, H:w}, !a);
        }
        n = q;
      }
    });
    jc = function(e) {
      u.push(e);
    };
    var u = [], K;
    ba(O, "resize", G);
    vb(function() {
      K && tc(K);
      Ba(O, "resize", G);
    });
    zb = function(e) {
      p.push(e);
    };
    var p = [], C = 1 > S || 1.2 <= S && 1.8 > S || 7.2 >= L, H;
    C ? Qb(function() {
      var e = O.pageYOffset;
      H !== e && (H = e, na({type:"scroll", cancelable:!1, stopPropagation:gb, preventDefault:gb}));
    }) : ba(O, "scroll", na, {passive:!0});
    vb(function() {
      C || Ba(O, "scroll", na, {passive:!0});
    });
    Pc = function(e, g) {
      if (aa) {
        ba(e, "wheel", g, {passive:!1});
      } else if (ja) {
        ba(e, "mousewheel", g, !1);
      } else if (Ca) {
        ba(e, "MozMousePixelScroll", g, !1);
      } else if (xa) {
        for (var r = Da, a = 0, f = r.length; a < f; ++a) {
          if (r[a] === e && r[a + 1] === g) {
            return;
          }
        }
        r.length || ba(N, "DOMMouseScroll", za, !1);
        r.push(e, g);
      }
    };
    Qc = function(e, g) {
      if (aa) {
        Ba(e, "wheel", g, {passive:!1});
      } else if (ja) {
        Ba(e, "mousewheel", g, !1);
      } else if (Ca) {
        Ba(e, "MozMousePixelScroll", g, !1);
      } else if (xa) {
        for (var r = Da, a = 0, f = r.length; a < f; ++a) {
          if (r[a] === e && r[a + 1] === g) {
            r.splice(a, 2);
            r.length || Ba(N, "DOMMouseScroll", za, !1);
            break;
          }
        }
      }
    };
    var aa = 9 <= y || Fb || 17 <= S || 31 <= db || 537.7 <= Sa, ja = 6 <= y || Fb || 9 <= L || db || 522 <= Sa || ib, Ca = Nb, xa = S && 0 <= Xa.conpare(Ya, "0.9.7") && !Nb;
    if (xa) {
      var Da = [], za = function(e) {
        for (var g = Da, r = e.target, a, f = 0, w = g.length; f < w; ++f) {
          a = g[f], kb(a, r) && g[f + 1].call(a, e);
        }
      };
    }
  })();
  (function() {
    9 > y && Qa(function() {
      var D = ra(sa, "div");
      La(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      xc = 1 < D.offsetHeight;
      Va(D);
    });
    Ac = bz;
    function bz(D, I) {
      function F() {
        J || !U || T.complete ? (ea("[imageTest] timer -> img.complete. img.width=" + T.width), ta(D, !!T.width), T.onerror = T.onload = gb, T = D = q) : (--U, ta(F));
      }
      var T = new Image(), J, U = 99;
      ea("[imageTest] start.");
      T.onerror = function() {
        ea("[imageTest] error!");
        J = !0;
      };
      T.onload = function() {
        ea("[imageTest] onload.");
        J = !0;
      };
      T.src = I;
      ta(F);
    }
    bz = !1;
  })();
  (function() {
    kc(function(b) {
      var h = b.G;
      b = b.H;
      var k = Ga(h);
      !$a(k, "aBodyRoot") && b ? mb(k, "js-image-has-been-loaded") : b || Ka(h, "alt") || Aa(h, "display", "none");
    });
    Ta && (Ja.splice(1, 0, function() {
      for (var b = Hc(hb, "RichLink-sep"), h, k, t, M, Q, da; h = b.shift();) {
        for (h = Za(h); k = h.shift();) {
          if ("A" === Na(k) && !k.innerHTML) {
            for (ea("\u25a0 Broken Anchor " + k.parentNode.innerHTML); t = h.shift();) {
              if (1 === t.nodeType) {
                if ("A" === Na(t)) {
                  break;
                }
                for (M = jb(t, "A"); Q = M.shift();) {
                  for (da = Za(Q); da.length;) {
                    Q.parentNode.insertBefore(da.shift(), Q);
                  }
                  Va(Q);
                }
              }
              k.appendChild(t);
            }
          }
        }
      }
    }), Ja.splice(2, 0, function() {
      for (var b = ub("A"), h, k; h = b.shift();) {
        "A" !== Na(h) || h.innerHTML || (k = h.nextSibling && h.nextSibling.firstChild) && k.href === h.href && (ea("\u25b2 Broken Anchor " + k.innerHTML), Va(h));
      }
    }));
    5.5 <= y && 8 > y && Ua && lc(function(b) {
      for (var h = jb(sa, "a"), k = h.length, t = 0; t < k; ++t) {
        h[t].hideFocus = !b;
      }
    });
    if (!nc && Ua) {
      var D, I = function() {
        D = ra(rb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ha + "css/" + Ob + "hc/" + cc});
        if (yc || 5.5 <= y && 9 > y && xc) {
          mb(sa, "js-canuse-css-rotate-when-forced-colors-mode"), ea("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        I = q;
      };
      lc(function(b) {
        b && !D ? I() : D && (b ? rb.appendChild(D) : Va(D));
      });
    }
    L && Qa(function() {
      for (var b = jb(sa, "a"), h = b.length, k = 0, t; k < h; ++k) {
        t = b[k], "-1" === Ka(t, "tabIndex") ? eb(t, "tabIndex") : Ka(t, "href") && lb(t, "tabIndex", "0");
      }
      b = jb(sa, "input");
      k = 0;
      for (h = b.length; k < h; ++k) {
        t = b[k], "hidden" === Ka(t, "type") && eb(t, "tabIndex");
      }
    });
    if (S && 0 > Xa.conpare(Ya, "0.9.5")) {
      Dc = !0;
      var F, T, J, U, ha;
      Qa(function() {
        ba(N, "keydown", ma);
        ba(N, "keyup", G);
        mc(sa, wa);
        Ta || (ba(O, "blur", R), ba(sa, "click", Z));
      });
      var ma = Ta ? function(b) {
        16 === b.keyCode ? F = !0 : 9 === b.keyCode && U && na(U, !0) && (U.blur && U.blur(), b.stopPropagation(), b.preventDefault(), ta(z));
      } : function(b) {
        16 === b.keyCode ? F = !0 : 9 === b.keyCode && (T = xb());
      }, G = function(b) {
        16 === b.keyCode && (F = !1);
      }, wa = Ta ? function(b) {
        b.target.innerHTML || ea(b.target.parentNode.innerHTML);
        U = b.target;
      } : function(b) {
        var h = b.target;
        if (U === h) {
          J = q;
        } else if (J) {
          h === J ? (b.stopPropagation(), z(!0)) : (h.blur && d(h), b.preventDefault(), z());
        } else {
          if (b = U) {
            U = q, d(b);
          }
          J = h;
          z(!0);
        }
      }, na = function(b, h) {
        var k = xb(), t = sa, M = "nextSibling", Q = "firstChild";
        F && (h || k - 99 < T && T <= k) && (M = "previousSibling", Q = "lastChild");
        for (J = q; b !== t;) {
          if (da) {
            k = b;
            var da = !1;
          } else {
            k = b[M];
          }
          if (k) {
            if (1 === k.nodeType) {
              if (la(k)) {
                return J = k, !0;
              }
              b = (da = k[Q]) || k;
            } else {
              b = k;
            }
          } else {
            b = b.parentNode;
          }
        }
      }, la = function(b, h) {
        function k() {
          return "-1" !== Ka(b, "tab-index");
        }
        function t() {
          return 0 < b.offsetHeight * b.offsetWidth;
        }
        if (b.focus) {
          var M;
          switch({A:h ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Na(b)]) {
            case 1:
              if (yb(b, "href") && k() && t()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ka(b, "type") && k() && !yb(b, "disabled") && t()) {
                return !0;
              }
              break;
            case 3:
              if (k() && !yb(b, "disabled") && t()) {
                return !0;
              }
              break;
            default:
              if ((M = Ka(b, "tab-index")) && "-1" !== M && t()) {
                return !0;
              }
          }
        }
      }, z = function(b) {
        ha = 0;
        J && (Ta || ba(J, "blur", c), U = J, J = q, b || U.focus());
      };
      if (!Ta) {
        var Z = function(b) {
          var h = b.target;
          if (U && la(h, !0)) {
            var k = U;
            U = q;
            d(k);
            J = h;
            b.stopPropagation();
            b.preventDefault();
            z();
          }
        }, R = function(b) {
          b.target === N && (J = q);
        }, c = function(b) {
          b = b.target;
          Ba(b, "blur", c);
          U === b && na(b) && (ha || (ha = ta(z)));
        }, d = function(b) {
          Ba(b, "blur", c);
          b.blur();
        };
      }
    }
  })();
  (function() {
    function D(a) {
      var f = Q.length, w, E, W, v;
      if (13 === (a.keyCode || a.ba) || a.type !== da) {
        for (; f;) {
          var X = Q[--f];
          if (X.F === this || X.u === this) {
            f = X.F;
            var V = w = X.u;
            if (X.P) {
              if (Aa(f, "width", X.Z), f.src = X.Y, Tb(V, X.T), f = X.L) {
                La(f, X.S), Mc(f, "js-captioned-thumbnail__large");
              }
            } else {
              if (E = X.N) {
                delete X.N;
                if (X.M) {
                  for (; w = Ga(w);) {
                    if (!$a(w, "caption")) {
                      var ca = Na(w);
                      if ("DIV" === ca || "P" === ca || "BLOCKQUOT" === ca || "LI" === ca || "DD" === ca || "TD" === ca || "TH" === ca || "FORM" === ca || "PRE" === ca) {
                        break;
                      }
                    }
                  }
                  w = (w.offsetWidth | 0) - 4;
                  1600 < w && (w = 1600);
                  if (2 === X.M) {
                    E = E.split("=");
                    ca = E.length;
                    if (W = E[ca - 1]) {
                      (v = cb(W.substr(1))) && W === "s" + v ? E[ca - 1] = "w" + w : E[ca] = "w" + w;
                    }
                    E = E.join("=");
                  } else {
                    E = E.split("/");
                    ca = E.length;
                    if (W = E[ca - 2]) {
                      (v = cb(W.substr(1))) && W === "s" + v ? E[ca - 2] = "w" + w : E.splice(ca - 1, 0, "w" + w);
                    }
                    E = E.join("/");
                  }
                }
                X.W = E;
              }
              X.T = Lc(V);
              mb(V, "js-pica-thumbnail__large");
              Aa(f, "width", "");
              f.src = X.W;
              if (f = X.L) {
                La(f, ""), mb(f, "js-captioned-thumbnail__large");
              }
            }
            X.P = !X.P;
            break;
          }
        }
        I(a);
      }
    }
    function I(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function F(a) {
      var f = A;
      if (Bb) {
        if (B && !f) {
          if (xb() < B) {
            return;
          }
          B = q;
        }
        7 === a ? (G("t"), n = 0) : (G("s"), n && (n = Hb(n)), l = $b());
        f ? (A = J(q, f[0], f[1])) || (B = xb() + 99) : J();
        na();
      } else {
        A = q;
      }
    }
    function T() {
      G("w.blur");
    }
    function J(a, f, w) {
      function E(ab) {
        V = ab;
        if (Oa) {
          ca = Oa + ":translate" + (x ? "3D(0," : "(0,") + ab + (x ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ab) {
          if (qa || wb) {
            var oc = ya.offsetWidth;
          }
          ca = qa ? "position:fixed;width:" + oc + "px;top:" + (ab - W + ka) + "px" : nb ? "top:" + ab + "px" : "position:absolute;top:" + ab + "px;left:0";
          if (wb && ca) {
            var Jb = 8 > y ? " " : ",";
            ca += ";clip:rect(" + (0 > ab ? -ab + "px" + Jb + oc + "px" + Jb + Ea : "0" + Jb + oc + "px" + Jb + (ab + Ea < Kb ? Ea : Kb - ab)) + "px" + Jb + "0)";
          }
        }
      }
      var W = l, v = Ma, X = ya.offsetTop === v.offsetTop, V = 0, ca = "", Wa = !0;
      if (X) {
        for (var oa = 0, ka = 0, Ia = v; Ia && Ia !== sa;) {
          ka += Ia.offsetTop, Ia = Ia.offsetParent;
        }
        V = m;
        Ia = 11 > y ? qb.offsetHeight : O.innerHeight;
        var pc = v.offsetHeight, Ea = Ra.offsetHeight, Kb = Ea < pc ? pc : Ea, ob = W, Cb = ob + Ia, Ub = ka, Vb = Ub + Kb, Rc = ka + V, Zc = Rc + Ea;
        v = ob < Ub ? Ub : ob;
        var pb = Vb < Cb ? Vb : Cb, Db = pb - v;
        ob = Vb <= ob;
        Cb = Cb <= Ub;
        if (f !== q) {
          Wa = ka + f;
          a = Wa + w;
          if (ob || Cb) {
            return Ia <= w ? (f = ka, G("4.1.1")) : ob ? (f = Vb - w, G("4.1.2")) : (f = ka + w - Ia, G("4.1.3")), B = q, O.scroll(0, f), G("4.1.*"), A;
          }
          Ea <= Db ? (oa = 3, G("4.2")) : w <= Db ? Ea - f <= Db ? (oa = 2, G("4.3.1")) : v <= Wa && a <= pb ? v < ka + V && (oa = 4, G("4.3.2")) : v <= Wa && Wa <= pb ? (oa = 5, G("4.3.3")) : v <= a && a <= pb ? (oa = 4, G("4.3.4")) : a < v ? (oa = 4, G("4.3.5")) : (oa = 5, G("4.3.6")) : (oa = 4, G("4.4"));
          Wa = q;
        } else {
          a !== q ? Ea <= Db ? (oa = 7, Wa = !1, G("3.1")) : (V -= 60 * a, oa = pb - ka - Ea, a = v - ka, V < oa ? (V = oa, G("3.2.1")) : a < V ? (V = a, G("3.2.2")) : G("3.2.3"), oa = 6) : pc <= Ea || (ob ? (oa = 1, G("2.2.1")) : Cb ? G("2.2.2") : Ea <= Db ? (oa = 3, G("2.3")) : v < Rc ? (oa = 3, G("2.4.1")) : Zc < pb ? (oa = 2, G("2.4.2")) : W < ka + Ea - Db ? G("2.4.3") : (oa = 2, G("2.4.4")));
        }
        switch(oa) {
          case 0:
            E(0);
            break;
          case 1:
            E(Kb - Ea);
            break;
          case 2:
            E(pb - ka - Ea);
            break;
          case 3:
            E(v - ka);
            break;
          case 4:
            E(v - ka - f);
            break;
          case 5:
            E(pb - ka - (f + w));
          case 6:
            E(V);
        }
        la(V, Ea, ka, Kb, Ia, f || "-", w || "-");
      } else {
        la(V, "-", "-", "-", "-", "-", "-");
      }
      La(Ra, ca);
      m = V;
      return X && Wa;
    }
    function U(a) {
      if (Bb && (G("m"), S && (l = $b(), na()), this !== a.target)) {
        var f = Xb(a.deltaY) ? a.deltaY : Xb(a.wheelDeltaY) ? a.wheelDeltaY / 120 : Xb(a.wheelDelta) ? a.wheelDelta / -120 : a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1);
        f && J(9 >= f ? -9 >= f ? -3 : f : 3) && (a.preventDefault(), a.stopPropagation());
      }
    }
    function ha(a) {
      if (Bb) {
        var f = S && 0 > Xa.conpare(Ya, "0.9.4"), w = a.target, E = Ra, W = 0;
        if (kb(E, w)) {
          G(a.type || "ie5focus");
          ba(w, "blur", ma);
          if (Oa) {
            f = w.getBoundingClientRect(), a = f.bottom - f.top, W = f.top - E.getBoundingClientRect().top | 0;
          } else {
            a = w.offsetHeight;
            var v = w;
            if (f) {
              for (var X = []; v && (S ? kb(E, v) : E !== v);) {
                for (; v.previousSibling;) {
                  v = v.previousSibling, v.tagName && X.unshift(v.tagName + ":" + v.offsetTop);
                }
                v = v.offsetParent;
              }
              ea(X.join());
              v = w;
            }
            for (; v && (S ? kb(E, v) : E !== v);) {
              if (f) {
                for (; v.previousSibling;) {
                  v = v.previousSibling, W += v.offsetHeight || 0;
                }
                v = v.parentNode;
              } else {
                W += v.offsetTop, v = v.offsetParent;
              }
            }
          }
          ia ? (A = [W, a], n && Hb(n), n = ta(F, 7, 1 > S || 536 > Sa || 14 > db ? 500 : 0)) : (l = $b(), J(q, W, a));
          z(W, a);
        }
      }
    }
    function ma() {
      Ba(this, "blur", ma);
      z(0, 0);
    }
    function G(a) {
      K && (ja && (ja = Hb(ja)), ja = ta(wa, 0, 1400), K.innerHTML += " " + a);
    }
    function wa() {
      K.innerHTML = "";
    }
    function na() {
      C && (Aa(C, "top", (l / 10 | 0) + "px"), u.innerHTML = " scrl:" + (l | 0));
    }
    function la(a, f, w, E, W, v, X) {
      H && (Aa(H, "top", ((a + w) / 10 | 0) + "px"), Aa(H, "height", (f / 10 | 0) + "px"), Aa(C, "height", (W / 10 | 0) + "px"), Aa(p, "height", (sa.scrollHeight / 10 | 0) + "px"), P.innerHTML = "conY:" + w + "/sidY" + a + ", conH:" + E + "/sidH" + f + ", focY:" + v + " focH:" + X);
    }
    function z(a, f) {
      aa && (Aa(aa, "top", (a / 10 | 0) + "px"), Aa(aa, "height", (f / 10 | 0) + "px"));
    }
    function Z() {
      Ca.call(xa);
    }
    function R() {
      N.fullscreenElement || N.fullscreen || N.webkitIsFullscreen || N.msFullscreenElement || O.fullScreen ? (lb(xa, "id", "blog2slide-root"), e[1].parentNode.insertBefore(Da, e[1]), c(), N.onkeydown = d) : za && (Va(Da), eb(xa, "id"), eb(za, "id"), za = N.onkeydown = q);
    }
    function c() {
      za && eb(za, "id");
      g = 0 < g ? r < g ? r : g : 0;
      za = e[g];
      lb(za, "id", "blog2slide-current");
    }
    function d(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++g, c();
      } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
        --g, c();
      }
    }
    Cc = S && 0 >= Xa.conpare(Ya, "0.9");
    Pb = !(7.2 > L || Cc);
    dc = function(a) {
      b ? Ja ? N.write('<script src="' + a + '">\x3c/script>') : bb("[DynamicScvriptLoader] Document already loaded! " + a) : Ja || t.length ? t.push(a) : M(a);
    };
    ec = function(a) {
      b ? ea("[DynamicScvriptLoader] " + a + " loaded.") : a === k ? M(t.shift()) : bb(a + " <> " + k);
    };
    var b = !Pb, h = Pb && 7.5 > L, k;
    if (!b) {
      var t = [];
      h && (Bc = !0);
      Qa(function() {
        M(t.shift());
      });
      var M = function(a) {
        if (k = a) {
          h ? qc[0].src = a : ra(rb, "script", {src:a});
        }
      };
    }
    var Q = [], da = 5.5 <= y && 8 > y ? "keypress" : "keydown";
    if (!uc) {
      var pa = Pa.transition !== q || Pa["-o-transition"] !== q || Pa["-moz-transition"] !== q || Pa["-webkit-transition"] !== q;
      kc(function(a) {
        if (a.H && hb) {
          a = a.G;
          var f = Ga(a), w = "", E;
          if ("A" === Na(f) && 1 === Ic(f).length) {
            var W = Ka(f, "href");
            var v = W.split("?")[0].split("#")[0].split(".");
            v = (v[v.length - 1] || "").toLowerCase();
            if ((E = 0 < W.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + v + ".")) {
              ba(f, da, D);
              ba(a, "click", D);
              ba(f, "click", I);
              pa && (w = a.naturalWidth + "px", Aa(a, "width", w));
              mb(f, "js-pica-thumbnail");
              for (v = f; v = Ga(v);) {
                if ($a(v, "caption")) {
                  mb(v, "js-captioned-thumbnail");
                  var X = v;
                  var V = Nc(X);
                  break;
                }
              }
              Q.push({u:f, L:X, S:V, Y:a.src, Z:w, N:W, F:a, M:E ? 0 < W.indexOf("/img/a/") ? 2 : 3 : 0 < W.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      vb(function(a, f) {
        for (a = -1; f = Q[++a];) {
          Ba(f.u, da, D), Ba(f.F, "click", D), Ba(f.u, "click", I);
        }
      });
    }
    var Y = ["jsSidebarFixer1", "jsSidebarFixer2"], ia = !(9 > y || L || 1 <= S && 1.3 > S || Dc), qa = !(5 > ib || 2.2 > Gb || 6 > fa(12) || Fa(30) && 534 > Sa || Fa(32) || 7 > y || 9 > L || 1 > S), wb = qa || 6 === y || 1 > S, nb = 7.5 > L, ya, Ma, Ra, Oa = Yc && yc, m = 0, l = 0, x, A, B, n;
    Sc || uc || (Ab(function(a) {
      if (a) {
        if (!hb) {
          return !0;
        }
        a = -1;
        var f;
        ya = tb("jsSide");
        Ma = hb;
        if (!ya) {
          return !0;
        }
        zb(F);
        jc(F);
        Ra = Ib(hc(ya), "div", {id:"jsSidebarFixer"});
        ba(O, "blur", T);
        for (mc(Ra, ha); 1 < Za(ya).length;) {
          Ra.appendChild(Za(ya)[1]);
        }
        for (; f = Y[++a];) {
          Pc(tb(f), U);
        }
        y || Fb || 2 > db || (x = Pa.perspective !== q || Pa.MozPerspective !== q || Pa["-webkit-perspective"] !== q);
        F();
        return !0;
      }
    }), vb(function() {
      for (var a = -1, f; f = Y[++a];) {
        Qc(tb(f), U);
      }
      Ba(O, "blur", T);
      Oc(Ra, ha);
    }));
    var P, u, K, p, C, H, aa, ja;
    Ab(function(a) {
      if (a) {
        if (!hb) {
          return !0;
        }
        var f = Za(sa);
        a = Ib(f[0], "div");
        if (qa) {
          La(a, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; f.length;) {
            a.appendChild(f.shift());
          }
          Ta || (La(a, "width:100%;height:100%;overflow:auto;position:relative"), La(qb, "overflow:hidden"), La(sa, "overflow:hidden"));
          a = Jc(a, "div");
          La(a, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ra(a, "div", q, Oa ? "transform" + (x ? "3D" : "") : qa ? "pos:fixed" : "pos:absolute");
        f = ra(a, "div");
        P = ra(f, "span");
        u = ra(f, "span");
        K = ra(a, "div");
        p = ra(a, "div");
        La(p, "position:absolute;left:0;top:0;width:54px;background:#242");
        H = ra(a, "div");
        La(H, "position:absolute;left:0;width:54px;background:#363");
        C = ra(a, "div");
        La(C, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        aa = ra(H, "div");
        La(aa, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Qa(function() {
      function a(X, V, ca, Wa) {
        var oa = Wa ? "div" : "cite";
        if (0 === V.indexOf("urn:isbn:")) {
          V = V.substr(9).toUpperCase().split("-").join("");
          if (13 === V.length) {
            V = V.toString().slice(3, -1);
            for (var ka = 0, Ia = 0; 9 > Ia; Ia++) {
              ka += (V.charAt(Ia) - 0) * (10 - Ia);
            }
            ka = (11 - ka % 11) % 11;
            ka = 10 === ka ? "X" : ka.toString();
            V += ka;
          }
          10 === V.length && (V = "//www.amazon.co.jp/exec/obidos/ASIN/" + V + "/itozyun-22/ref=nosim/");
        }
        ca = Wa ? Ib(hc(w), oa, {className:ca}) : ra(w, oa, {className:ca});
        ra(ca, "a", 0 === V.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:V} : {href:V}, X);
      }
      if (hb) {
        for (var f = jb(hb, "blockquote"), w, E = -1, W, v; w = f[++E];) {
          W = Ka(w, "title"), v = Ka(w, "cite"), W && v ? (eb(w, "title"), a(W, v, "js-generated-link-in-blockquote", !0)) : v && (eb(w, "cite"), a(O.decodeURI ? decodeURI(v) : v, v, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Ca, xa, Da, za, e, g, r;
    Qa(function() {
      var a = tb("blog2slide-start");
      if (a) {
        var f = N.onfullscreenchange !== q ? "f" : N.onmozfullscreenchange !== q ? "mozF" : N.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Ca = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== f || Ca ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ba(a.firstChild, "click", Z), a = Ga(a), xa = Ga(a), e = jb(a, "section"), Da = N.createElement("h1"), Da.innerHTML = jb(sa, "h1")[0].innerHTML, r = e.length, e.splice(0, 0, Da), 0 !== f ? ba(N, f + "ullscreenchange", R) : y ? ba(N, "MSFullscreenChange", R, !1) : jc(R)) : Va(a);
      }
    });
  })();
  var Eb, Lb = !sc || .9 > S || 8 > L || 5.5 > y, fb;
  (function() {
    function D(m) {
      return m === "" + m;
    }
    function I(m, l) {
      return Lb ? new Z(m, l) : new sc(m, l);
    }
    function F(m, l, x, A, B) {
      var n = R.codeBlocks[R.codeBlocks.length - 1], P = z(), u = P - d;
      switch(x || 0) {
        case 1:
          R.initRegExpCount++;
          R.initRegExpTotal += u;
          R.initRegExpMax < u && (R.initRegExpMax = u, R.initRegExpSource = B.toString(), R.initRegExpInstance = B);
          break;
        case 2:
          n.decorateCount++;
          n.decorateTime += u;
          break;
        case 3:
          n.updateDOMTime += u;
      }
      if (P - c < t && !A) {
        return d = P, m(l);
      }
      ta(T, {U:m, X:l});
    }
    function T(m) {
      c = d = z();
      m.U(m.X);
    }
    function J(m, l) {
      m && Eb[m] || (m = M.test(l) ? "default-markup" : "default-code");
      var x = !!Eb[m];
      x && F(ia, m, 0, !0);
      return x;
    }
    function U() {
      function m(xa, Da, za) {
        Da && (l.h = l.h || [], l.h.push({l:l, B:l.B, O:1, s:P, D:xa, o:Da, m:za, R:{}, v:0}));
      }
      var l = b, x = l.m, A = x[0], B = x[2], n = l.D, P = l.s, u = l.$.shift(), K = l.R;
      if (u) {
        var p = K[u], C;
        if (!(0 <= p)) {
          if (C = A[u.charAt(0)]) {
            var H = u.match(C[1]);
            p = C[0];
          } else {
            for (p = 0, A = -1; C = B[++A];) {
              if (H = u.match(C[1])) {
                p = C[0];
                break;
              }
            }
          }
          !(C = D(p)) || H && D(H[1]) || (C = !1, p = 11);
          C || (K[u] = p);
        }
        B = l.v;
        K = u.length;
        l.v += K;
        if (C) {
          C = H[1];
          A = u.indexOf(C);
          var aa = C.length, ja = A + aa;
          H[2] && (ja = K - H[2].length, A = ja - aa);
          m(n + B, u.substr(0, A), x);
          if (aa && J(p, C)) {
            m(n + B + A, C);
            var Ca = !0;
          }
          m(n + B + ja, u.substr(ja), x);
          l.h && l.h.length && (b = l.h.shift());
          Ca || (b !== l ? F(pa, q, 2) : F(U, q, 2));
        } else {
          P.push(n + B, p), F(U, q, 2);
        }
      } else {
        l.l ? (b = l.l.h.shift()) ? F(pa, q, 2) : (b = l.l, F(U, q, 2)) : F(nb, q, 2);
      }
    }
    function ha(m) {
      if (Y.length) {
        var l = Y.shift(), x = na[l];
        if (x.pop) {
          na[l] = x = I(x[0], x[1]);
        } else if (D(x)) {
          na[l] = x = I(x);
        } else {
          return ha(m);
        }
        F(ha, m, 1, !1, x);
      } else {
        F(ia, m);
      }
    }
    function ma(m) {
      for (var l, x = m.firstChild; x; x = x.nextSibling) {
        var A = x.nodeType;
        l = 1 === A ? l ? m : x : 3 === A ? Q.test(x.nodeValue) ? m : l : l;
      }
      return l === m ? q : l;
    }
    Eb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var G = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], wa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), z = Mb.now || function() {
      return +new Mb();
    }, Z, R = {useRegExpCompat:Lb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var c = z();
    var d, b, h, k, t = 5 > y ? 60 : 5.5 > y ? 0 : Lb ? 20 : 10, M, Q;
    fb = [function(m) {
      O.RegExpCompat = Z = m;
    }, function() {
      M = I("^\\s*<");
      Q = I("\\S");
    }];
    Lb || (fb[1](), fb = q);
    var da = function() {
      var m = b, l = m.V, x = qa(m.B, m.O), A = m.o = x.o;
      m.I = x.I;
      J(l, A) || (b = q, F(Oa, q, 0, !0));
    };
    var pa = function() {
      var m = b;
      m.$ = m.o.match(m.m[1]) || [];
      m.s.push(m.D, 0);
      F(U, q, 2);
    };
    var Y = [];
    var ia = function(m) {
      function l(p) {
        var C = p;
        0 <= p && (C = wa[p]);
        0 <= C[1] && (C[1] = x(C[1]));
        return C;
      }
      function x(p) {
        var C = p;
        return 0 <= p && (C = na[p], !C.exec) ? (Y.push(p), p) : C;
      }
      var A = b, B = Eb[m];
      D(B) && (B = Eb[m] = Eb[B]);
      var n = B[0];
      if (0 <= n) {
        n = G[n];
        if (0 <= n["-num"]) {
          var P = n["-num"];
          delete n["-num"];
          for (var u = -1; 9 > u;) {
            n["" + ++u] = P;
          }
        }
        B[0] = n;
      }
      for (var K in n) {
        n[K] = l(n[K]);
      }
      B[1] = x(B[1]);
      n = B[2];
      u = 0;
      for (P = n.length; u < P; ++u) {
        n[u] = l(n[u]);
      }
      Y.length ? F(ha, m, 2) : (A.m ? A.l && (A.l.h[0].m = B) : A.m = B, F(pa, q, 1));
    };
    var qa = function(m, l) {
      function x(K) {
        var p = K.nodeType;
        if (1 === p) {
          if (!$a(K, "nocode")) {
            for (p = K.firstChild; p; p = p.nextSibling) {
              x(p);
            }
            p = Na(K);
            if ("BR" === p || "LI" === p) {
              A[P] = "\n", n[P << 1] = B++, n[P++ << 1 | 1] = K;
            }
          }
        } else if (3 === p || 4 === p) {
          if (p = K.nodeValue) {
            p = l ? p.split("\r\n").join("\n").split("\r").join("\n") : p.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), A[P] = p, n[P << 1] = B, B += p.length, n[P++ << 1 | 1] = K;
          }
        }
      }
      var A = [], B = 0, n = [], P = 0;
      x(m);
      var u = A.join("");
      "\n" === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1));
      return {o:u, I:n};
    };
    var wb = function(m, l, x) {
      function A(p) {
        var C = p.nodeType;
        if (1 === C && !$a(p, "nocode")) {
          if ("BR" === Na(p)) {
            B(p), p.parentNode && Va(p);
          } else {
            for (p = p.firstChild; p; p = p.nextSibling) {
              A(p);
            }
          }
        } else if ((3 === C || 4 === C) && x) {
          var H = p.nodeValue, aa = H.indexOf("\r\n"), ja = 2;
          -1 === aa && (aa = H.indexOf("\n"), ja = 1);
          -1 === aa && (aa = H.indexOf("\r"));
          -1 !== aa && (C = H.substr(0, aa), p.nodeValue = C, (H = H.substr(aa + ja)) && ic(p, H), B(p), C || Va(p));
        }
      }
      function B(p) {
        function C(aa, ja) {
          var Ca = ja ? aa.cloneNode(!1) : aa, xa = aa.parentNode;
          if (xa) {
            xa = C(xa, 1);
            var Da = aa.nextSibling;
            xa.appendChild(Ca);
            for (var za = Da; za; za = Da) {
              Da = za.nextSibling, xa.appendChild(za);
            }
          }
          return Ca;
        }
        for (; !p.nextSibling;) {
          if (p = p.parentNode, !p) {
            return;
          }
        }
        p = C(p.nextSibling, 0);
        for (var H; (H = p.parentNode) && 1 === H.nodeType;) {
          p = H;
        }
        P.push(p);
      }
      for (var n = N.createElement("li"); m.firstChild;) {
        n.appendChild(m.firstChild);
      }
      for (var P = [n], u = 0; u < P.length; ++u) {
        A(P[u]);
      }
      if (l === (l | 0)) {
        if (10 <= l && 7.2 > L) {
          var K = N.createElement("ol");
          K.innerHTML = '<li value="' + l + '">' + n.innerHTML + "</li>";
          P[0] = K.firstChild;
        } else {
          lb(n, "value", l);
        }
      }
      K = ra(m, "ol", {className:"linenums"});
      m = Math.max(0, l - 1 | 0) || 0;
      u = 0;
      for (l = P.length; u < l; ++u) {
        n = P[u], Tb(n, "L" + (u + m) % 10), n.firstChild || Kc(n, "\u00a0"), K.appendChild(n);
      }
    };
    var nb = function() {
      var m = b, l = m.o, x = l.length, A = 0, B = m.I, n = B.length, P = 0, u = m.s, K = u.length, p = 0;
      u[K] = x;
      var C, H;
      for (H = C = 0; H < K;) {
        u[H] !== u[H + 2] ? (u[C++] = u[H++], u[C++] = u[H++]) : H += 2;
      }
      K = C;
      for (H = C = 0; H < K;) {
        var aa = u[H], ja = u[H + 1];
        for (H += 2; H + 2 <= K && u[H + 1] === ja;) {
          H += 2;
        }
        u[C++] = aa;
        u[C++] = ja;
      }
      u.length = C;
      m = m.B;
      K = "";
      m && (K = m.style.display, Aa(m, "display", "none"));
      for (; P < n;) {
        C = B[P + 2] || x;
        aa = u[p + 2] || x;
        H = Math.min(C, aa);
        ja = B[P + 1];
        var Ca;
        if (1 !== ja.nodeType && (Ca = l.substring(A, H))) {
          9 > y && (Ca = Ca.split("\n").join("\r"));
          var xa = Ib(ja, "span", {className:la[u[p + 1]]}, Ca);
          Va(ja);
          A < C && (B[P + 1] = ic(xa, l.substring(H, C)));
        }
        A = H;
        A >= C && (P += 2);
        A >= aa && (p += 2);
      }
      m && Aa(m, "display", K);
      b = q;
      F(Oa, q, 3, !0);
    };
    var ya = [], Ma;
    R.readyTime = z() - c;
    Ab(function(m) {
      if (m) {
        m = [ub("pre"), ub("code"), ub("xmp")];
        for (var l = 0; l < m.length; ++l) {
          for (var x = 0, A = m[l].length; x < A; ++x) {
            Ra(m[l][x]);
          }
        }
        return !0;
      }
    });
    var Ra = function(m) {
      ya.push(m);
      Ma = ya.length;
      1 === Ma && (rc ? ta(rc, Oa) : fb ? fb.push(function() {
        ta(Oa);
      }) : ta(Oa));
    };
    var Oa = function() {
      function m(P, u) {
        return (P.split(u)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ma !== ya.length && k && k(Ma - ya.length, Ma);
        var l = ya.shift();
        if (l) {
          c = z();
          if ($a(l, "prettyprint") && !$a(l, "prettyprinted")) {
            for (var x = !1, A = l.parentNode; A !== sa; A = A.parentNode) {
              var B = Na(A);
              if (("PRE" === B || "XMP" === B || "CODE" === B) && $a(A, "prettyprint")) {
                x = !0;
                break;
              }
            }
            if (!x) {
              x = l.className;
              mb(l, "prettyprinted");
              A = !1;
              if (!A) {
                A = m(x, "lang-") || m(x, "language-");
                var n;
                !A && (n = ma(l)) && "CODE" === Na(n) && (A = m(n.className, "lang-") || m(n.className, "language-"));
              }
              B = Na(l);
              "PRE" === B || "XMP" === B ? B = 1 : (B = l.currentStyle, n = N.defaultView, B = (B = B ? B.whiteSpace : n && n.getComputedStyle ? n.getComputedStyle(l, null).getPropertyValue("white-space") : 0) && "pre" === B.substr(0, 3));
              n = !1;
              (n = "true" === n || +n) || (n = m(x, "linenums:") || $a(l, "linenums"), n = n.length ? +n : n);
              n && wb(l, n, B);
              b = {V:A, B:l, aa:n, O:B, D:0, v:0, R:{}, s:[]};
              R.codeBlocks.push({elm:l, lang:A, readyTime:z() - c, decorateTime:0, decorateCount:0, updateDOMTime:0});
              F(da);
              return;
            }
          }
          F(Oa, q, 0, !0);
        } else {
          h && h(R);
        }
      }
    };
    O.PR = {RegExpProxy:I, prettifyElement:Ra, registerCompleteHandler:function(m, l) {
      h = m;
      k = l;
    }};
  })();
  var qc = N.scripts || ub("script");
  var Ha = qc[qc.length - 1].src.split("/");
  --Ha.length;
  "js" === Ha[Ha.length - 1] && --Ha.length;
  (Ha = Ha.join("/")) && (Ha += "/");
  ea("[p_assetUrl] " + Ha);
  var Sc = Xc || "1" === Ka(sa, "mob");
  Ob = (Sc ? "mb" : "pc") + "/";
  Qa(function() {
    var D;
    (D = tb("logger")) || alert("#logger not found!");
    D ? (ea = bz, bb = function(I) {
      ra(D, "DIV", {style:{color:"red"}}, I);
    }, O.onerror = function(I, F, T) {
      bb(I + ", " + F + ", " + T);
      return !0;
    }) : O.console ? (ea = console.log, bb = console.error) : L ? (ea = gb, bb = opera.postError) : ea = bb = gb;
    for (; Rb.length;) {
      ea(Rb.shift());
    }
    for (; Sb.length;) {
      bb(Sb.shift());
    }
    Rb = Sb = q;
    function bz(I) {
      ra(D, "DIV", q, I);
    }
    bz = !1;
  });
  6.1 > ib && (zb ? zb(fc) : ba(O, "scroll", fc));
  vb(Fc);
  6.1 > ib && (zb ? zb(gc) : ba(O, "scroll", gc));
  vb(Gc);
  10 > y && (11 !== Vc || 5 !== y) || (9 > L || 1 > S || !sb && !O.addEventListener ? N.write('<link href="' + Ha + "css/" + Ob + cc + '" rel="stylesheet"' + (8 > L ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > L || 1.5 > S || 534 > Sa || 5 > ib || 7 > db || 3 > Gb) && Qa(function() {
    ra(rb, "link", {href:Ha + "css/" + Ob + cc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Lb) {
    if (Pb) {
      var rc = function(D) {
        O.RegExpCompat = bz;
        rc = q;
        dc(Ha + "js/regexpcompat.js");
        function bz(I) {
          for (var F; F = fb.shift();) {
            F(I);
          }
          fb = q;
          ta(D);
          ec(Ha + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      O.RegExpCompat = function(D) {
        for (var I; I = fb.shift();) {
          I(D);
        }
        fb = q;
        ec(Ha + "js/regexpcompat.js");
      }, dc(Ha + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

