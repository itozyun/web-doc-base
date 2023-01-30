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
var Z, ab;
(function(Wa, P, fb, rc, O, Vb, Sc, Lb, bb, Wb, Xb, sc, Yb, q) {
  function ha(D) {
    if (Wa[0] === D) {
      return Xa === Xa + "" ? bb(Xa) : Xa;
    }
  }
  function Fa(D) {
    var J = Wa[3];
    if (Wa[2] === D) {
      return J === J + "" ? bb(J) : J;
    }
  }
  function Zb() {
    return 6 > y ? sa.scrollTop : y ? pb.scrollTop : P.pageYOffset;
  }
  var sa = O.body, Pa = sa.style, pb, qb, gb, Xa = Wa[1], y = ha(2) || ha(3), rb = ha(7), Eb = ha(5) || ha(6), M = ha(8) || ha(9), K = ha(11) || ha(12), Mb = K && 0 <= Wa.conpare(Xa, "1.9.1"), $b = ha(13), Sa = ha(15), hb = ha(16) || ha(17), tc = ha(10) || ha(25), cb = ha(20) || ha(22), Tc = ha(23), Fb = ha(21), uc = ha(24), vc = cb && bb(Vb.userAgent.split("Edg/")[1]), Uc = bb(Vb.appVersion.split("Trident/")[1]) + 4, ac = Fa(35) || Fa(36) || Fa(37), Vc = 0 <= Vb.userAgent.indexOf("Googlebot/"), 
  bc = (rb ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > M ? "opr70" : 8 > M ? "opr72" : 9.5 > M ? "opr" + (M | 0) : K && !Mb ? 1.4 <= K ? "gck19" : 1.3 <= K ? "gck13" : 1 <= K ? "gck12" : 0.9 <= K ? "gck09" : 0.8 <= K ? "gck08" : "gck07" : "modern") + ".css", Nb = "", Wc = Fa(1) || Fa(2) || Fa(3) || Fa(4) || Fa(8) || Fa(9) || Fa(10), wc, xc = Pa.transform !== q ? "transform" : Pa["-o-transform"] !== q ? "-o-transform" : Pa["-ms-transform"] !== q ? "-ms-transform" : 
  Pa.MozTransform !== q ? "-moz-transform" : Pa["-webkit-transform"] !== q ? "-webkit-transform" : "", Ja = [], yc = [], Ta = [], zc, Ac, Ob, Bc, cc, dc, Cc = !1;
  525 > Sa || 3.2 > hb || 2.2 > Fb || 10 > M || K && !Mb || ha(25) || 10 > ha(3) || Fa(32) || Fa(30) || Fa(3);
  var ta, Gb, Pb, Dc, Xc = !!sa.getBoundingClientRect, Qb = [], Rb = [], ec, Ec, fc, Fc, wb = Lb.now || function() {
    return +new Lb();
  };
  (function() {
    function D() {
      for (var z, aa = 0, S = wb(); aa < G.length;) {
        S < G[0].t ? ++aa : (z = G.splice(aa, 1)[0], z.f(z.p));
      }
      la = G.length ? Xb(D, wa) : 0;
    }
    function J() {
      for (var z, aa = 0; aa < I.length; ++aa) {
        z = I[aa], z.f();
      }
    }
    function F() {
      ma && (ma = clearInterval(ma));
    }
    function T() {
      la && (la = sc(la));
    }
    Z = function(z) {
      Qb.push(z);
    };
    ab = function(z) {
      Rb.push(z);
    };
    Pb = function(z) {
      I.length || (ma = Yb(J, U));
      I.push({f:z, C:++ea});
      return ea;
    };
    Dc = function(z) {
      for (var aa = I.length, S; S = I[--aa];) {
        if (S.C === z) {
          I.splice(aa, 1);
          I[0] || F();
          break;
        }
      }
      return 0;
    };
    ec = function() {
      ma && (F(), ma = Yb(J, U));
    };
    Ec = F;
    var I = [], U = 500, ea = 0, ma;
    if (5 > y || rb) {
      P._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    ta = function(z, aa, S) {
      G.length || (la = Xb(D, wa));
      G.push({f:z, p:aa, C:++na, t:wb() + (wa < S ? S : wa)});
      return na;
    };
    Gb = function(z) {
      for (var aa = G.length, S; S = G[--aa];) {
        if (S.C === z) {
          G.splice(aa, 1);
          break;
        }
      }
      return 0;
    };
    fc = function() {
      la && (T(), la = Xb(D, wa));
    };
    Fc = T;
    var G = [], wa = 16, na = 0, la;
    if (5 > y || rb) {
      P._wdb_ontimer = D, D = "_wdb_ontimer()";
    }
  })();
  var sb, tb, ib, Gc, Ga, Ya, Hc, gc, ra, Hb, Ic, Jc, hc, Ua, jb, Na, Ka, kb, db, xb, Kc, Sb, Za, lb, Lc, Aa, La, Mc;
  (function() {
    function D(c, d, b) {
      var h = ["<", c], k = 1, t, N;
      if (d) {
        for (t in d) {
          var R = d[t];
          if (null != R && "" !== R) {
            if ("style" === t) {
              h[++k] = ' style="';
              for (N in R) {
                for (var fa = ++k, pa, Y = [], ia = N.split(""), qa = ia.length; qa;) {
                  pa = ia[--qa], "A" <= pa && "Z" >= pa && (pa = "-" + pa.toLowerCase()), Y[qa] = pa;
                }
                h[fa] = Y.join("") + ":" + R[N] + ";";
              }
              h[++k] = '"';
            } else {
              "className" === t && (t = "class"), h[++k] = " " + t + '="' + R + '"';
            }
          }
        }
      }
      h[++k] = ">";
      null != b && (z && "font" !== c ? h[++k] = "<font>" + J(b) + "</font>" : h[++k] = J(b));
      h[++k] = "</" + c + ">";
      return h.join("");
    }
    function J(c) {
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
      return I(O, c);
    }
    function I(c, d) {
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
    function ea(c, d, b, h, k, t) {
      if (z) {
        var N = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend";
        var R = Ya(2 > c ? Ga(d) : d);
        R = 2 > c ? R.indexOf(d) + c : R.length;
        d.insertAdjacentHTML(N, D(b, h, k));
        d = Ya(d)[R];
        null != k && ("font" === b ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (aa) {
        d = O.createElement(D(b, h));
      } else {
        d = t ? O.createElementNS("http://www.w3.org/2000/svg", b) : O.createElement(b);
        if (h) {
          for (N in h) {
            if ((c = h[N]) || 0 === c) {
              switch(N) {
                case "class":
                case "className":
                  Sb(d, c);
                  break;
                case "style":
                  t = d.style;
                  for (R in c) {
                    t[R] = c[R];
                  }
                  break;
                default:
                  kb(d, N, c);
              }
            }
          }
          !M || "a" !== b && "A" !== b || !h.href || h["tag-index"] || h.tagIndex || kb(d, "tagIndex", "-0");
        }
        S || null != k && ma(d, k);
      }
      return d;
    }
    function ma(c, d) {
      if (z) {
        return ea(2, c, "font", q, d);
      }
      var b = O.createTextNode("" + d);
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
      if (8 > M || 5.5 > y) {
        d = F(d);
      }
      c.style[d] = b;
    }
    function la(c) {
      return 5.5 > y ? c.style.cssText.toLowerCase() : c.style.cssText;
    }
    var z = 5 > y;
    pb = T("html")[0];
    qb = T("head")[0];
    sb = function(c) {
      return P[c] || O[c] || O.getElementById(c);
    };
    tb = T;
    ib = I;
    Gc = function(c, d) {
      var b = [], h = 0, k, t = -1;
      if (9 > y || !c.getElementsByClassName) {
        var N = 6 > y ? c.all : c.getElementsByTagName("*");
      } else {
        var R = !0;
        N = c.getElementsByClassName(d);
      }
      for (k = N.length; h < k; ++h) {
        var fa = N[h];
        if (R || (z || 1 === fa.nodeType) && wa(fa, d)) {
          b[++t] = fa;
        }
      }
      return b;
    };
    Ga = U;
    Ya = function(c) {
      c = z ? c.children : c.childNodes;
      for (var d = [], b = c.length; b;) {
        d[--b] = c[b];
      }
      return d;
    };
    Hc = function(c) {
      var d = !(7.03 < M && 7.2 > M) && c.children;
      c = d ? d : c.childNodes;
      for (var b = [], h = c.length, k = -1, t; h;) {
        if (t = c[--h], d || 1 === t.nodeType) {
          z && "FONT" === t.tagName || (b[++k] = t);
        }
      }
      return b;
    };
    gc = function(c) {
      return z ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    ra = function(c, d, b, h, k) {
      d = ea(2, c, d, b, h, k);
      z || (c.appendChild(d), S && null != h && ma(d, h));
      return d;
    };
    Hb = function(c, d, b, h, k) {
      d = ea(0, c, d, b, h, k);
      z || (U(c).insertBefore(d, c), S && null != h && ma(d, h));
      return d;
    };
    Ic = function(c, d, b, h, k) {
      d = ea(1, c, d, b, h, k);
      var t;
      z || ((t = c.nextSibling) ? Ga(t).insertBefore(d, t) : Ga(c).appendChild(d), S && null != h && ma(d, h));
      return d;
    };
    Jc = ma;
    hc = function(c, d) {
      var b;
      if (z) {
        return ea(1, c, "font", q, d);
      }
      var h = O.createTextNode("" + d);
      (b = c.nextSibling) ? Ga(c).insertBefore(h, b) : Ga(c).appendChild(h);
      return h;
    };
    Ua = function(c) {
      Ga(c) ? z ? c.outerHTML = "" : (5.5 > y && (c.style.filter = ""), Ga(c).removeChild(c)) : Z("[DOM] p_DOM_remove(), No parentNode!");
    };
    jb = function(c, d) {
      if (c.contains) {
        return c.contains(d);
      }
      for (; d && d !== pb;) {
        if (d = Ga(d), c === d) {
          return !0;
        }
      }
    };
    var aa = 9 > y, S = aa;
    Na = function(c) {
      return c.tagName.toUpperCase();
    };
    Ka = function(c, d) {
      if (8 > M || 5.5 > y) {
        d = F(d);
      }
      var b = c.getAttribute(d);
      return M && "tabIndex" === d ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    };
    kb = function(c, d, b) {
      if (M && "tab-index" === d) {
        "-1" === b ? c.removeAttribute("tabIndex") : c.setAttribute("tabIndex", b);
      } else {
        if (8 > M || 5.5 > y) {
          d = F(d);
        }
        c.setAttribute(d, b);
      }
    };
    db = function(c, d) {
      if (M && "tab-index" === d) {
        "-0" !== c.getAttribute("tabIndex") && c.setAttribute("tabIndex", "-0");
      } else {
        if (8 > M || 5.5 > y) {
          d = F(d);
        }
        c.removeAttribute(d);
      }
    };
    xb = function(c, d) {
      if (M && "tab-index" === d) {
        return "-0" !== c.getAttribute("tabIndex");
      }
      if (8 > M || 5.5 > y) {
        d = F(d);
      }
      return c.hasAttribute ? c.hasAttribute(d) : null != c.getAttribute(d);
    };
    Kc = function(c) {
      return c.className;
    };
    Sb = G;
    Za = wa;
    lb = function(c, d) {
      var b;
      if (!wa(c, d)) {
        if (b = c.className) {
          b += " ";
        }
        G(c, b + d);
      }
    };
    Lc = function(c, d) {
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
      } else if (7.1 > M) {
        if (c.setAttribute("style", ""), d) {
          for (b = d.split(";"); k = b[++h];) {
            k = k.split(":"), na(c, k[0], k[1]);
          }
        }
      } else {
        9 > M || 1 > K ? d ? c.setAttribute("style", d) : c.removeAttribute("style") : c.style.cssText = d;
      }
    };
    Mc = la;
    Ja.splice(0, 0, function() {
      function c(fa) {
        fa = Ya(fa);
        for (var pa = fa.length, Y, ia, qa; pa;) {
          if (Y = fa[--pa], ia = Y.nodeType, 8 === ia) {
            d && N.push(Y);
          } else if (1 === ia) {
            switch(ia = Na(Y), "/" === ia.charAt(0) && (ia = ia.substr(1), R[ia] = !0), ia) {
              case "STYLE":
                if (7.2 <= M && 9 > M) {
                  break;
                }
              case "LINK":
                z || h || jb(qb, Y) || t.push(Y);
                break;
              case "META":
                ia = Ka(Y, "name") || Ka(Y, "property");
                for (qa = k.length; qa;) {
                  if (0 === ia.indexOf(k[--qa])) {
                    N.push(Y);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Vc || xb(Y, "async")) {
                  break;
                }
                if (b) {
                  Y.innerText = "";
                  b = !1;
                  break;
                }
              case "NOSCRIPT":
                if (xb(Y, "skip-cleanup")) {
                  break;
                }
              case "!":
                N.push(Y);
                break;
              case "SOURCE":
                P.HTMLSourceElement || N.push(Y);
                break;
              default:
                R[ia] ? N.push(Y) : Ya(Y).length && c(Y);
            }
          }
        }
        for (; t[0];) {
          qb.appendChild(t.pop());
        }
        for (; N[0];) {
          Ua(N.pop());
        }
      }
      gb = sb("jsMain");
      var d = !(8 > M || 5 > y || rb || .9 > K), b = Ac, h = 7 > y, k = ["og:", "twitter:", "fb:"], t = [], N = [], R = {};
      c(pb);
    });
  })();
  var ca, Ba, Qa, ub, ic, yb, zb, jc, kc, lc, Nc, Oc, Pc, Ab, va, mc;
  (function() {
    function D() {
      return l ? A ? 2 : x ? 3 : 1 : 0;
    }
    function J(e) {
      Ba(P, "load", J);
      J = q;
      T(Ja, e, !0);
      Ja = q;
    }
    function F(e, g) {
      zb(function() {
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
    function I(e, g, r) {
      Ja || aa.length || ta(U);
      aa.push(e, g, r);
    }
    function U() {
      var e = aa, g;
      for (aa = []; g = e.shift();) {
        T(g, e.shift(), e.shift());
      }
    }
    function ea(e) {
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
        a.j === this ? (this.g = a.i, y && (g.currentTarget = this), this.g(g), y ? (this.g = fb, this.g = q) : delete this.g) : 7.2 > M && this === O && a.j === P && (P.g = a.i, P.g(g), delete P.g);
      }
      if (y) {
        return g.preventDefault = g.stopPropagation = fb, g.preventDefault = g.stopPropagation = q, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (k = !0), f && !k && g.K(), g.K = g.stopPropagation = q);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var e = 9 === z.offsetWidth;
      Ab !== e && (I(yc, Ab = e), Z("p_cssAvailability:" + Ab));
    }
    function G() {
      !Ja && L && (Gb(L), L = ta(wa));
    }
    function wa() {
      L = 0;
      T(u);
    }
    function na(e) {
      Ja || T(p, e);
    }
    var la = P.matchMedia, z, aa = [];
    Ja.push(function() {
      F = q;
      z = ra(sa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Qa(function() {
        aa.length && ta(U);
      });
    });
    ca = function(e, g, r, a) {
      if (h) {
        e.addEventListener(g, r, a ? S ? a : a.capture || !0 === a : !1);
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
          c[g] = a = [f], d || (g = e[w], "function" === typeof g && g !== ea && a.unshift({j:e, i:g}));
        }
        d ? e.attachEvent(w, ea) : e[w] = ea;
      }
    };
    Ba = function(e, g, r, a) {
      if (h) {
        e.removeEventListener(g, r, a ? S ? a : a.capture || !0 === a : !1);
      } else {
        a = c[g];
        g = "on" + g;
        var f, w, E;
        if (a) {
          for (f = a.length; w = a[--f];) {
            w.j === e && (w.i === r ? a.splice(f, 1) : E = !0);
          }
          E || (d ? e.detachEvent(g, ea) : y ? (e[g] = fb, e[g] = null) : delete e[g]);
        }
      }
    };
    var S = !y && !rb && (new Sc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), c = {}, d = !1, b = 525.13 > Sa, h = !b && !rb && P.addEventListener, k;
    b && pb.addEventListener("click", function(e) {
      if (k) {
        return k = !1, e.preventDefault(), !1;
      }
    });
    Qa = function(e) {
      Ja ? Ja.push(e) : alert("Load event has already been dispatched!");
    };
    ub = function(e) {
      t && t.push(e);
    };
    var t = [];
    if (419.3 >= Sa) {
      var N = function() {
        if (N) {
          var e = O.readyState;
          "loaded" === e || "complete" === e ? (N = q, J()) : ta(N);
        }
      };
      ta(N);
    } else {
      ca(P, "load", J), .9 > K && ta(function() {
        J && J();
      }, 999);
    }
    y || .9 <= K && 1.8 > K ? ca(P, "unload", function(e) {
      T(t, e, !0);
    }) : t = q;
    zb = function(e) {
      yc.push(e);
    };
    Qa(function() {
      ma();
      Pb(ma);
    });
    lc = function(e, g) {
      if (R) {
        ca(e, "focusin", g);
      } else if (fa) {
        ca(e, "DOMFocusIn", g);
      } else {
        if (Y) {
          mb || (mb = Yb(Ra, 333));
        } else if (pa || ia) {
          ca(O, "focus", vb, !0);
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
    Nc = function(e, g) {
      if (R) {
        ca(e, "focusin", g);
      } else if (fa) {
        ca(e, "DOMFocusIn", g, !1);
      } else {
        for (var r = qa, a = 0, f = r.length; a < f; ++a) {
          if (r[a] === e && r[a + 1] === g) {
            r.splice(a, 2);
            r.length || (Y ? mb = Dc(mb) : (pa || ia) && Ba(O, "focus", vb, !0));
            break;
          }
        }
      }
    };
    var R = 6 <= y || Eb || 52 <= K || 15 <= cb || 534 <= Sa || 5 <= hb || Tc || 4 <= Fb || 4 <= uc || 11.6 <= ha(8) || 12 <= ha(9), fa = 8 <= M || cb || Fb || uc || Sa || hb, pa = 8 > M, Y = 6 > y, ia = 52 > K || $b;
    if (ia || pa) {
      var qa = [];
      var vb = function(e) {
        var g = qa, r = pa ? O.activeElement : e.target;
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
          (E === r || jb(E, r)) && g[f + 1].call(E, e);
        }
      };
    } else if (Y) {
      qa = [];
      var mb, ya, Ma, Ra = function() {
        Ma = P.onerror;
        P.onerror = Oa;
        var e = O.activeElement;
        if (ya !== e) {
          ya = e;
          for (var g = qa, r, a = 0, f = g.length; a < f; ++a) {
            r = g[a], (r === e || jb(r, e)) && g[a + 1].apply(r, [{target:e}]);
          }
        }
        P.onerror = Ma;
        Ma = q;
      }, Oa = function() {
        Z("error!");
        P.onerror = Ma;
        Ma = ya = q;
        return !0;
      };
    }
    kc = function(e) {
      Ta && Ta.push(e);
    };
    var m = 60 > K || $b, l, x, A;
    if (89 <= K || 89 <= cb || ac && 79 <= vc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      mc = !0, F("(forced-colors:active)", function(e) {
        l = e.matches;
        va = D();
        I(Ta, va);
        Z("(forced-colors:active):" + va);
      });
    } else if (10 <= y || Eb || ac && vc) {
      mc = !0, F("(-ms-high-contrast:black-on-white)", function(e) {
        l = x = e.matches;
        va !== D() && (va = D(), I(Ta, va), Z("(-ms-high-contrast:black-on-white):" + va));
      }), F("(-ms-high-contrast:white-on-black)", function(e) {
        l = A = e.matches;
        va !== D() && (va = D(), I(Ta, va), Z("(-ms-high-contrast:white-on-black):" + va));
      }), F("(-ms-high-contrast:active)", function(e) {
        l = e.matches;
        va !== D() && (va = D(), I(Ta, va), Z("(-ms-high-contrast:active):" + va));
      });
    } else if (ac && (y || K && 0 <= Wa.conpare(Xa, "1.8.1") || $b)) {
      var B = function() {
        function e(a, f) {
          if (f && "transparent" === a) {
            return 382.5;
          }
          if ("#" === a.charAt(0)) {
            return parseInt("0x" + a.substr(1, 2), 16) + parseInt("0x" + a.substr(3, 2), 16) + parseInt("0x" + a.substr(5, 2), 16);
          }
          var w = a.split("(")[1].split(",");
          return bb(w[0]) + bb(w[1]) + bb(w[2]);
        }
        var g = O.defaultView;
        var r = g ? g.getComputedStyle(z, null) : z.currentStyle;
        g = (r && r.color || "").split(" ").join("");
        r = (r && r.backgroundColor || "").split(" ").join("");
        g && (l = "#123456" !== g && "rgb(18,52,86)" !== g, x = e(g) < e(r, !0), A = e(g) > e(r, !0), va !== D() && (va = D(), Z("(forced-colors-fallback):" + va), I(Ta, va, m)));
      };
      zb(function(e) {
        if (e) {
          return Aa(z, "color", "#123456"), Aa(z, "backgroundColor", "#123456"), m ? (B(), Ta = q) : Pb(B), B = q, !0;
        }
      });
    } else {
      Ta = D = q;
    }
    jc = function(e) {
      Ja || alert("p_listenImageReady is called back for images present at load time.");
      n.push(e);
    };
    var n = [], Q = 7.5 <= M && 8 > M;
    Q && function() {
      for (var e = O.images, g = e.length, r; g;) {
        r = e[--g], r.J = r.src, db(r, "src");
      }
    }();
    Qa(function() {
      function e() {
        a ? (f = r[--a], Q && kb(f, "src", f.J), zc(g, Q ? f.J : f.src)) : n = q;
      }
      function g(E) {
        T(n, {G:f, H:E}, !a);
        e();
      }
      var r = O.images || tb("img"), a = r.length;
      if (12 > M || 532 > Sa) {
        e();
      } else {
        for (; a;) {
          var f = r[--a];
          var w = 9 > y ? f.complete : 0 <= f.naturalWidth ? f.naturalWidth : f.width;
          I(n, {G:f, H:w}, !a);
        }
        n = q;
      }
    });
    ic = function(e) {
      u.push(e);
    };
    var u = [], L;
    ca(P, "resize", G);
    ub(function() {
      L && sc(L);
      Ba(P, "resize", G);
    });
    yb = function(e) {
      p.push(e);
    };
    var p = [], C = 1 > K || 1.2 <= K && 1.8 > K || 7.2 >= M, H;
    C ? Pb(function() {
      var e = P.pageYOffset;
      H !== e && (H = e, na({type:"scroll", cancelable:!1, stopPropagation:fb, preventDefault:fb}));
    }) : ca(P, "scroll", na, {passive:!0});
    ub(function() {
      C || Ba(P, "scroll", na, {passive:!0});
    });
    Oc = function(e, g) {
      if (ba) {
        ca(e, "wheel", g, {passive:!1});
      } else if (ja) {
        ca(e, "mousewheel", g, !1);
      } else if (Ca) {
        ca(e, "MozMousePixelScroll", g, !1);
      } else if (xa) {
        for (var r = Da, a = 0, f = r.length; a < f; ++a) {
          if (r[a] === e && r[a + 1] === g) {
            return;
          }
        }
        r.length || ca(O, "DOMMouseScroll", za, !1);
        r.push(e, g);
      }
    };
    Pc = function(e, g) {
      if (ba) {
        Ba(e, "wheel", g, {passive:!1});
      } else if (ja) {
        Ba(e, "mousewheel", g, !1);
      } else if (Ca) {
        Ba(e, "MozMousePixelScroll", g, !1);
      } else if (xa) {
        for (var r = Da, a = 0, f = r.length; a < f; ++a) {
          if (r[a] === e && r[a + 1] === g) {
            r.splice(a, 2);
            r.length || Ba(O, "DOMMouseScroll", za, !1);
            break;
          }
        }
      }
    };
    var ba = 9 <= y || Eb || 17 <= K || 31 <= cb || 537.7 <= Sa, ja = 6 <= y || Eb || 9 <= M || cb || 522 <= Sa || hb, Ca = Mb, xa = K && 0 <= Wa.conpare(Xa, "0.9.7") && !Mb;
    if (xa) {
      var Da = [], za = function(e) {
        for (var g = Da, r = e.target, a, f = 0, w = g.length; f < w; ++f) {
          a = g[f], jb(a, r) && g[f + 1].call(a, e);
        }
      };
    }
  })();
  (function() {
    9 > y && Qa(function() {
      var D = ra(sa, "div");
      La(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      wc = 1 < D.offsetHeight;
      Ua(D);
    });
    zc = bz;
    function bz(D, J) {
      function F() {
        I || !U || T.complete ? (Z("[imageTest] timer -> img.complete. img.width=" + T.width), ta(D, !!T.width), T.onerror = T.onload = fb, T = D = q) : (--U, ta(F));
      }
      var T = new Image(), I, U = 99;
      Z("[imageTest] start.");
      T.onerror = function() {
        Z("[imageTest] error!");
        I = !0;
      };
      T.onload = function() {
        Z("[imageTest] onload.");
        I = !0;
      };
      T.src = J;
      ta(F);
    }
    bz = !1;
  })();
  (function() {
    jc(function(b) {
      var h = b.G;
      b = b.H;
      var k = Ga(h);
      !Za(k, "aBodyRoot") && b ? lb(k, "js-image-has-been-loaded") : b || Ka(h, "alt") || Aa(h, "display", "none");
    });
    .9 > K && (Ja.splice(1, 0, function() {
      for (var b = Gc(gb, "RichLink-sep"), h, k, t, N, R, fa; h = b.shift();) {
        for (h = Ya(h); k = h.shift();) {
          if ("A" === Na(k) && !k.innerHTML) {
            for (Z("\u25a0 Broken Anchor " + k.parentNode.innerHTML); t = h.shift();) {
              if (1 === t.nodeType) {
                if ("A" === Na(t)) {
                  break;
                }
                for (N = ib(t, "A"); R = N.shift();) {
                  for (fa = Ya(R); fa.length;) {
                    R.parentNode.insertBefore(fa.shift(), R);
                  }
                  Ua(R);
                }
              }
              k.appendChild(t);
            }
          }
        }
      }
    }), Ja.splice(2, 0, function() {
      for (var b = tb("A"), h, k; h = b.shift();) {
        "A" !== Na(h) || h.innerHTML || (k = h.nextSibling && h.nextSibling.firstChild) && k.href === h.href && (Z("\u25b2 Broken Anchor " + k.innerHTML), Ua(h));
      }
    }));
    5.5 <= y && 8 > y && Ta && kc(function(b) {
      for (var h = ib(sa, "a"), k = h.length, t = 0; t < k; ++t) {
        h[t].hideFocus = !b;
      }
    });
    if (!mc && Ta) {
      var D, J = function() {
        D = ra(qb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ha + "css/" + Nb + "hc/" + bc});
        if (xc || 5.5 <= y && 9 > y && wc) {
          lb(sa, "js-canuse-css-rotate-when-forced-colors-mode"), Z("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        J = q;
      };
      kc(function(b) {
        b && !D ? J() : D && (b ? qb.appendChild(D) : Ua(D));
      });
    }
    M && Qa(function() {
      for (var b = ib(sa, "a"), h = b.length, k = 0, t; k < h; ++k) {
        t = b[k], "-1" === Ka(t, "tabIndex") ? db(t, "tabIndex") : Ka(t, "href") && kb(t, "tabIndex", "0");
      }
      b = ib(sa, "input");
      k = 0;
      for (h = b.length; k < h; ++k) {
        t = b[k], "hidden" === Ka(t, "type") && db(t, "tabIndex");
      }
    });
    if (K && 0 > Wa.conpare(Xa, "0.9.5")) {
      Cc = !0;
      var F, T, I, U, ea;
      Qa(function() {
        ca(O, "keydown", ma);
        ca(O, "keyup", G);
        lc(sa, wa);
        .9 <= K && (ca(P, "blur", S), ca(sa, "click", aa));
      });
      var ma = .9 > K ? function(b) {
        16 === b.keyCode ? F = !0 : 9 === b.keyCode && U && na(U, !0) && (U.blur && U.blur(), b.stopPropagation(), b.preventDefault(), ta(z));
      } : function(b) {
        16 === b.keyCode ? F = !0 : 9 === b.keyCode && (T = wb());
      }, G = function(b) {
        16 === b.keyCode && (F = !1);
      }, wa = .9 > K ? function(b) {
        Z(b.type + " " + b.target.tagName + "." + (b.target.type || b.target.href || b.target.name || "") + " " + (b.target.textContent || ""));
        b.target.innerHTML || Z(b.target.parentNode.innerHTML);
        U = b.target;
      } : function(b) {
        var h = b.target;
        Z(b.type + " " + h.tagName + "." + (h.type || "") + " " + (b.target.innerHTML || ""));
        if (U === h) {
          I = q;
        } else if (I) {
          h === I ? (b.stopPropagation(), z(!0)) : (h.blur && d(h), b.preventDefault(), z());
        } else {
          if (b = U) {
            U = q, d(b);
          }
          I = h;
          z(!0);
        }
      }, na = function(b, h) {
        var k = wb(), t = sa, N = "nextSibling", R = "firstChild";
        F && (h || k - 99 < T && T <= k) && (N = "previousSibling", R = "lastChild");
        for (I = q; b !== t;) {
          if (fa) {
            k = b;
            var fa = !1;
          } else {
            k = b[N];
          }
          if (k) {
            if (1 === k.nodeType) {
              if (la(k)) {
                return I = k, !0;
              }
              b = (fa = k[R]) || k;
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
          var N;
          switch({A:h ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Na(b)]) {
            case 1:
              if (xb(b, "href") && k() && t()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ka(b, "type") && k() && !xb(b, "disabled") && t()) {
                return !0;
              }
              break;
            case 3:
              if (k() && !xb(b, "disabled") && t()) {
                return !0;
              }
              break;
            default:
              if ((N = Ka(b, "tab-index")) && "-1" !== N && t()) {
                return !0;
              }
          }
        }
      }, z = function(b) {
        Z("setFocus()" + ea + " " + I + " " + b);
        ea = 0;
        I && (.9 <= K && ca(I, "blur", c), U = I, I = q, Z("setFocus()" + b), b || U.focus());
      };
      if (.9 <= K) {
        var aa = function(b) {
          var h = b.target;
          if (U && la(h, !0)) {
            var k = U;
            U = q;
            d(k);
            I = h;
            b.stopPropagation();
            b.preventDefault();
            z();
          }
        }, S = function(b) {
          b.target !== O ? Z("window." + b.type + " tgt=" + b.target + " cancelable:" + b.cancelable) : I = q;
        }, c = function(b) {
          b = b.target;
          Ba(b, "blur", c);
          U === b && na(b) && (Z("Hit! " + b + " " + I + ea), ea || (ea = ta(z)));
        }, d = function(b) {
          Ba(b, "blur", c);
          b.blur();
        };
      }
    }
  })();
  (function() {
    function D(a) {
      var f = R.length, w, E, W, v;
      if (13 === (a.keyCode || a.ba) || a.type !== fa) {
        for (; f;) {
          var X = R[--f];
          if (X.F === this || X.u === this) {
            f = X.F;
            var V = w = X.u;
            if (X.P) {
              if (Aa(f, "width", X.Z), f.src = X.Y, Sb(V, X.T), f = X.L) {
                La(f, X.S), Lc(f, "js-captioned-thumbnail__large");
              }
            } else {
              if (E = X.N) {
                delete X.N;
                if (X.M) {
                  for (; w = Ga(w);) {
                    if (!Za(w, "caption")) {
                      var da = Na(w);
                      if ("DIV" === da || "P" === da || "BLOCKQUOT" === da || "LI" === da || "DD" === da || "TD" === da || "TH" === da || "FORM" === da || "PRE" === da) {
                        break;
                      }
                    }
                  }
                  w = (w.offsetWidth | 0) - 4;
                  1600 < w && (w = 1600);
                  if (2 === X.M) {
                    E = E.split("=");
                    da = E.length;
                    if (W = E[da - 1]) {
                      (v = bb(W.substr(1))) && W === "s" + v ? E[da - 1] = "w" + w : E[da] = "w" + w;
                    }
                    E = E.join("=");
                  } else {
                    E = E.split("/");
                    da = E.length;
                    if (W = E[da - 2]) {
                      (v = bb(W.substr(1))) && W === "s" + v ? E[da - 2] = "w" + w : E.splice(da - 1, 0, "w" + w);
                    }
                    E = E.join("/");
                  }
                }
                X.W = E;
              }
              X.T = Kc(V);
              lb(V, "js-pica-thumbnail__large");
              Aa(f, "width", "");
              f.src = X.W;
              if (f = X.L) {
                La(f, ""), lb(f, "js-captioned-thumbnail__large");
              }
            }
            X.P = !X.P;
            break;
          }
        }
        J(a);
      }
    }
    function J(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function F(a) {
      var f = A;
      if (Ab) {
        if (B && !f) {
          if (wb() < B) {
            return;
          }
          B = q;
        }
        7 === a ? (G("t"), n = 0) : (G("s"), n && (n = Gb(n)), l = Zb());
        f ? (A = I(q, f[0], f[1])) || (B = wb() + 99) : I();
        na();
      } else {
        A = q;
      }
    }
    function T() {
      G("w.blur");
    }
    function I(a, f, w) {
      function E($a) {
        V = $a;
        if (Oa) {
          da = Oa + ":translate" + (x ? "3D(0," : "(0,") + $a + (x ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== $a) {
          if (qa || vb) {
            var nc = ya.offsetWidth;
          }
          da = qa ? "position:fixed;width:" + nc + "px;top:" + ($a - W + ka) + "px" : mb ? "top:" + $a + "px" : "position:absolute;top:" + $a + "px;left:0";
          if (vb && da) {
            var Ib = 8 > y ? " " : ",";
            da += ";clip:rect(" + (0 > $a ? -$a + "px" + Ib + nc + "px" + Ib + Ea : "0" + Ib + nc + "px" + Ib + ($a + Ea < Jb ? Ea : Jb - $a)) + "px" + Ib + "0)";
          }
        }
      }
      var W = l, v = Ma, X = ya.offsetTop === v.offsetTop, V = 0, da = "", Va = !0;
      if (X) {
        for (var oa = 0, ka = 0, Ia = v; Ia && Ia !== sa;) {
          ka += Ia.offsetTop, Ia = Ia.offsetParent;
        }
        V = m;
        Ia = 11 > y ? pb.offsetHeight : P.innerHeight;
        var oc = v.offsetHeight, Ea = Ra.offsetHeight, Jb = Ea < oc ? oc : Ea, nb = W, Bb = nb + Ia, Tb = ka, Ub = Tb + Jb, Qc = ka + V, Yc = Qc + Ea;
        v = nb < Tb ? Tb : nb;
        var ob = Ub < Bb ? Ub : Bb, Cb = ob - v;
        nb = Ub <= nb;
        Bb = Bb <= Tb;
        if (f !== q) {
          Va = ka + f;
          a = Va + w;
          if (nb || Bb) {
            return Ia <= w ? (f = ka, G("4.1.1")) : nb ? (f = Ub - w, G("4.1.2")) : (f = ka + w - Ia, G("4.1.3")), B = q, P.scroll(0, f), G("4.1.*"), A;
          }
          Ea <= Cb ? (oa = 3, G("4.2")) : w <= Cb ? Ea - f <= Cb ? (oa = 2, G("4.3.1")) : v <= Va && a <= ob ? v < ka + V && (oa = 4, G("4.3.2")) : v <= Va && Va <= ob ? (oa = 5, G("4.3.3")) : v <= a && a <= ob ? (oa = 4, G("4.3.4")) : a < v ? (oa = 4, G("4.3.5")) : (oa = 5, G("4.3.6")) : (oa = 4, G("4.4"));
          Va = q;
        } else {
          a !== q ? Ea <= Cb ? (oa = 7, Va = !1, G("3.1")) : (V -= 60 * a, oa = ob - ka - Ea, a = v - ka, V < oa ? (V = oa, G("3.2.1")) : a < V ? (V = a, G("3.2.2")) : G("3.2.3"), oa = 6) : oc <= Ea || (nb ? (oa = 1, G("2.2.1")) : Bb ? G("2.2.2") : Ea <= Cb ? (oa = 3, G("2.3")) : v < Qc ? (oa = 3, G("2.4.1")) : Yc < ob ? (oa = 2, G("2.4.2")) : W < ka + Ea - Cb ? G("2.4.3") : (oa = 2, G("2.4.4")));
        }
        switch(oa) {
          case 0:
            E(0);
            break;
          case 1:
            E(Jb - Ea);
            break;
          case 2:
            E(ob - ka - Ea);
            break;
          case 3:
            E(v - ka);
            break;
          case 4:
            E(v - ka - f);
            break;
          case 5:
            E(ob - ka - (f + w));
          case 6:
            E(V);
        }
        la(V, Ea, ka, Jb, Ia, f || "-", w || "-");
      } else {
        la(V, "-", "-", "-", "-", "-", "-");
      }
      La(Ra, da);
      m = V;
      return X && Va;
    }
    function U(a) {
      if (Ab && (G("m"), K && (l = Zb(), na()), this !== a.target)) {
        var f = Wb(a.deltaY) ? a.deltaY : Wb(a.wheelDeltaY) ? a.wheelDeltaY / 120 : Wb(a.wheelDelta) ? a.wheelDelta / -120 : a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1);
        f && I(9 >= f ? -9 >= f ? -3 : f : 3) && (a.preventDefault(), a.stopPropagation());
      }
    }
    function ea(a) {
      if (Ab) {
        var f = K && 0 > Wa.conpare(Xa, "0.9.4"), w = a.target, E = Ra, W = 0;
        if (jb(E, w)) {
          G(a.type || "ie5focus");
          ca(w, "blur", ma);
          if (Oa) {
            f = w.getBoundingClientRect(), a = f.bottom - f.top, W = f.top - E.getBoundingClientRect().top | 0;
          } else {
            a = w.offsetHeight;
            var v = w;
            if (f) {
              for (var X = []; v && (K ? jb(E, v) : E !== v);) {
                for (; v.previousSibling;) {
                  v = v.previousSibling, v.tagName && X.unshift(v.tagName + ":" + v.offsetTop);
                }
                v = v.offsetParent;
              }
              Z(X.join());
              v = w;
            }
            for (; v && (K ? jb(E, v) : E !== v);) {
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
          ia ? (A = [W, a], n && Gb(n), n = ta(F, 7, 1 > K || 536 > Sa || 14 > cb ? 500 : 0)) : (l = Zb(), I(q, W, a));
          z(W, a);
        }
      }
    }
    function ma() {
      Ba(this, "blur", ma);
      z(0, 0);
    }
    function G(a) {
      L && (ja && (ja = Gb(ja)), ja = ta(wa, 0, 1400), L.innerHTML += " " + a);
    }
    function wa() {
      L.innerHTML = "";
    }
    function na() {
      C && (Aa(C, "top", (l / 10 | 0) + "px"), u.innerHTML = " scrl:" + (l | 0));
    }
    function la(a, f, w, E, W, v, X) {
      H && (Aa(H, "top", ((a + w) / 10 | 0) + "px"), Aa(H, "height", (f / 10 | 0) + "px"), Aa(C, "height", (W / 10 | 0) + "px"), Aa(p, "height", (sa.scrollHeight / 10 | 0) + "px"), Q.innerHTML = "conY:" + w + "/sidY" + a + ", conH:" + E + "/sidH" + f + ", focY:" + v + " focH:" + X);
    }
    function z(a, f) {
      ba && (Aa(ba, "top", (a / 10 | 0) + "px"), Aa(ba, "height", (f / 10 | 0) + "px"));
    }
    function aa() {
      Ca.call(xa);
    }
    function S() {
      O.fullscreenElement || O.fullscreen || O.webkitIsFullscreen || O.msFullscreenElement || P.fullScreen ? (kb(xa, "id", "blog2slide-root"), e[1].parentNode.insertBefore(Da, e[1]), c(), O.onkeydown = d) : za && (Ua(Da), db(xa, "id"), db(za, "id"), za = O.onkeydown = q);
    }
    function c() {
      za && db(za, "id");
      g = 0 < g ? r < g ? r : g : 0;
      za = e[g];
      kb(za, "id", "blog2slide-current");
    }
    function d(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++g, c();
      } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
        --g, c();
      }
    }
    Bc = K && 0 >= Wa.conpare(Xa, "0.9");
    Ob = !(7.2 > M || Bc);
    cc = function(a) {
      b ? Ja ? O.write('<script src="' + a + '">\x3c/script>') : ab("[DynamicScvriptLoader] Document already loaded! " + a) : Ja || t.length ? t.push(a) : N(a);
    };
    dc = function(a) {
      b ? Z("[DynamicScvriptLoader] " + a + " loaded.") : a === k ? N(t.shift()) : ab(a + " <> " + k);
    };
    var b = !Ob, h = Ob && 7.5 > M, k;
    if (!b) {
      var t = [];
      h && (Ac = !0);
      Qa(function() {
        N(t.shift());
      });
      var N = function(a) {
        if (k = a) {
          h ? pc[0].src = a : ra(qb, "script", {src:a});
        }
      };
    }
    var R = [], fa = 5.5 <= y && 8 > y ? "keypress" : "keydown";
    if (!tc) {
      var pa = Pa.transition !== q || Pa["-o-transition"] !== q || Pa["-moz-transition"] !== q || Pa["-webkit-transition"] !== q;
      jc(function(a) {
        if (a.H && gb) {
          a = a.G;
          var f = Ga(a), w = "", E;
          if ("A" === Na(f) && 1 === Hc(f).length) {
            var W = Ka(f, "href");
            var v = W.split("?")[0].split("#")[0].split(".");
            v = (v[v.length - 1] || "").toLowerCase();
            if ((E = 0 < W.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + v + ".")) {
              ca(f, fa, D);
              ca(a, "click", D);
              ca(f, "click", J);
              pa && (w = a.naturalWidth + "px", Aa(a, "width", w));
              lb(f, "js-pica-thumbnail");
              for (v = f; v = Ga(v);) {
                if (Za(v, "caption")) {
                  lb(v, "js-captioned-thumbnail");
                  var X = v;
                  var V = Mc(X);
                  break;
                }
              }
              R.push({u:f, L:X, S:V, Y:a.src, Z:w, N:W, F:a, M:E ? 0 < W.indexOf("/img/a/") ? 2 : 3 : 0 < W.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      ub(function(a, f) {
        for (a = -1; f = R[++a];) {
          Ba(f.u, fa, D), Ba(f.F, "click", D), Ba(f.u, "click", J);
        }
      });
    }
    var Y = ["jsSidebarFixer1", "jsSidebarFixer2"], ia = !(9 > y || M || 1 <= K && 1.3 > K || Cc), qa = !(5 > hb || 2.2 > Fb || 6 > ha(12) || Fa(30) && 534 > Sa || Fa(32) || 7 > y || 9 > M || 1 > K), vb = qa || 6 === y || 1 > K, mb = 7.5 > M, ya, Ma, Ra, Oa = Xc && xc, m = 0, l = 0, x, A, B, n;
    Rc || tc || (zb(function(a) {
      if (a) {
        if (!gb) {
          return !0;
        }
        a = -1;
        var f;
        ya = sb("jsSide");
        Ma = gb;
        if (!ya) {
          return !0;
        }
        yb(F);
        ic(F);
        Ra = Hb(gc(ya), "div", {id:"jsSidebarFixer"});
        ca(P, "blur", T);
        for (lc(Ra, ea); 1 < Ya(ya).length;) {
          Ra.appendChild(Ya(ya)[1]);
        }
        for (; f = Y[++a];) {
          Oc(sb(f), U);
        }
        y || Eb || 2 > cb || (x = Pa.perspective !== q || Pa.MozPerspective !== q || Pa["-webkit-perspective"] !== q);
        F();
        return !0;
      }
    }), ub(function() {
      for (var a = -1, f; f = Y[++a];) {
        Pc(sb(f), U);
      }
      Ba(P, "blur", T);
      Nc(Ra, ea);
    }));
    var Q, u, L, p, C, H, ba, ja;
    zb(function(a) {
      if (a) {
        if (!gb) {
          return !0;
        }
        var f = Ya(sa);
        a = Hb(f[0], "div");
        if (qa) {
          La(a, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; f.length;) {
            a.appendChild(f.shift());
          }
          .9 > K || (La(a, "width:100%;height:100%;overflow:auto;position:relative"), La(pb, "overflow:hidden"), La(sa, "overflow:hidden"));
          a = Ic(a, "div");
          La(a, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ra(a, "div", q, Oa ? "transform" + (x ? "3D" : "") : qa ? "pos:fixed" : "pos:absolute");
        f = ra(a, "div");
        Q = ra(f, "span");
        u = ra(f, "span");
        L = ra(a, "div");
        p = ra(a, "div");
        La(p, "position:absolute;left:0;top:0;width:54px;background:#242");
        H = ra(a, "div");
        La(H, "position:absolute;left:0;width:54px;background:#363");
        C = ra(a, "div");
        La(C, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ba = ra(H, "div");
        La(ba, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Qa(function() {
      function a(X, V, da, Va) {
        var oa = Va ? "div" : "cite";
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
        da = Va ? Hb(gc(w), oa, {className:da}) : ra(w, oa, {className:da});
        ra(da, "a", 0 === V.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:V} : {href:V}, X);
      }
      if (gb) {
        for (var f = ib(gb, "blockquote"), w, E = -1, W, v; w = f[++E];) {
          W = Ka(w, "title"), v = Ka(w, "cite"), W && v ? (db(w, "title"), a(W, v, "js-generated-link-in-blockquote", !0)) : v && (db(w, "cite"), a(P.decodeURI ? decodeURI(v) : v, v, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Ca, xa, Da, za, e, g, r;
    Qa(function() {
      var a = sb("blog2slide-start");
      if (a) {
        var f = O.onfullscreenchange !== q ? "f" : O.onmozfullscreenchange !== q ? "mozF" : O.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Ca = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== f || Ca ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ca(a.firstChild, "click", aa), a = Ga(a), xa = Ga(a), e = ib(a, "section"), Da = O.createElement("h1"), Da.innerHTML = ib(sa, "h1")[0].innerHTML, r = e.length, e.splice(0, 0, Da), 0 !== f ? ca(O, f + "ullscreenchange", S) : y ? ca(O, "MSFullscreenChange", S, !1) : ic(S)) : Ua(a);
      }
    });
  })();
  var Db, Kb = !rc || .9 > K || 8 > M || 5.5 > y, eb;
  (function() {
    function D(m) {
      return m === "" + m;
    }
    function J(m, l) {
      return Kb ? new aa(m, l) : new rc(m, l);
    }
    function F(m, l, x, A, B) {
      var n = S.codeBlocks[S.codeBlocks.length - 1], Q = z(), u = Q - d;
      switch(x || 0) {
        case 1:
          S.initRegExpCount++;
          S.initRegExpTotal += u;
          S.initRegExpMax < u && (S.initRegExpMax = u, S.initRegExpSource = B.toString(), S.initRegExpInstance = B);
          break;
        case 2:
          n.decorateCount++;
          n.decorateTime += u;
          break;
        case 3:
          n.updateDOMTime += u;
      }
      if (Q - c < t && !A) {
        return d = Q, m(l);
      }
      ta(T, {U:m, X:l});
    }
    function T(m) {
      c = d = z();
      m.U(m.X);
    }
    function I(m, l) {
      m && Db[m] || (m = N.test(l) ? "default-markup" : "default-code");
      var x = !!Db[m];
      x && F(ia, m, 0, !0);
      return x;
    }
    function U() {
      function m(xa, Da, za) {
        Da && (l.h = l.h || [], l.h.push({l:l, B:l.B, O:1, s:Q, D:xa, o:Da, m:za, R:{}, v:0}));
      }
      var l = b, x = l.m, A = x[0], B = x[2], n = l.D, Q = l.s, u = l.$.shift(), L = l.R;
      if (u) {
        var p = L[u], C;
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
          C || (L[u] = p);
        }
        B = l.v;
        L = u.length;
        l.v += L;
        if (C) {
          C = H[1];
          A = u.indexOf(C);
          var ba = C.length, ja = A + ba;
          H[2] && (ja = L - H[2].length, A = ja - ba);
          m(n + B, u.substr(0, A), x);
          if (ba && I(p, C)) {
            m(n + B + A, C);
            var Ca = !0;
          }
          m(n + B + ja, u.substr(ja), x);
          l.h && l.h.length && (b = l.h.shift());
          Ca || (b !== l ? F(pa, q, 2) : F(U, q, 2));
        } else {
          Q.push(n + B, p), F(U, q, 2);
        }
      } else {
        l.l ? (b = l.l.h.shift()) ? F(pa, q, 2) : (b = l.l, F(U, q, 2)) : F(mb, q, 2);
      }
    }
    function ea(m) {
      if (Y.length) {
        var l = Y.shift(), x = na[l];
        if (x.pop) {
          na[l] = x = J(x[0], x[1]);
        } else if (D(x)) {
          na[l] = x = J(x);
        } else {
          return ea(m);
        }
        F(ea, m, 1, !1, x);
      } else {
        F(ia, m);
      }
    }
    function ma(m) {
      for (var l, x = m.firstChild; x; x = x.nextSibling) {
        var A = x.nodeType;
        l = 1 === A ? l ? m : x : 3 === A ? R.test(x.nodeValue) ? m : l : l;
      }
      return l === m ? q : l;
    }
    Db = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), z = Lb.now || function() {
      return +new Lb();
    }, aa, S = {useRegExpCompat:Kb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var c = z();
    var d, b, h, k, t = 5 > y ? 60 : 5.5 > y ? 0 : Kb ? 20 : 10, N, R;
    eb = [function(m) {
      P.RegExpCompat = aa = m;
    }, function() {
      N = J("^\\s*<");
      R = J("\\S");
    }];
    Kb || (eb[1](), eb = q);
    var fa = function() {
      var m = b, l = m.V, x = qa(m.B, m.O), A = m.o = x.o;
      m.I = x.I;
      I(l, A) || (b = q, F(Oa, q, 0, !0));
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
      var A = b, B = Db[m];
      D(B) && (B = Db[m] = Db[B]);
      var n = B[0];
      if (0 <= n) {
        n = G[n];
        if (0 <= n["-num"]) {
          var Q = n["-num"];
          delete n["-num"];
          for (var u = -1; 9 > u;) {
            n["" + ++u] = Q;
          }
        }
        B[0] = n;
      }
      for (var L in n) {
        n[L] = l(n[L]);
      }
      B[1] = x(B[1]);
      n = B[2];
      u = 0;
      for (Q = n.length; u < Q; ++u) {
        n[u] = l(n[u]);
      }
      Y.length ? F(ea, m, 2) : (A.m ? A.l && (A.l.h[0].m = B) : A.m = B, F(pa, q, 1));
    };
    var qa = function(m, l) {
      function x(L) {
        var p = L.nodeType;
        if (1 === p) {
          if (!Za(L, "nocode")) {
            for (p = L.firstChild; p; p = p.nextSibling) {
              x(p);
            }
            p = Na(L);
            if ("BR" === p || "LI" === p) {
              A[Q] = "\n", n[Q << 1] = B++, n[Q++ << 1 | 1] = L;
            }
          }
        } else if (3 === p || 4 === p) {
          if (p = L.nodeValue) {
            p = l ? p.split("\r\n").join("\n").split("\r").join("\n") : p.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), A[Q] = p, n[Q << 1] = B, B += p.length, n[Q++ << 1 | 1] = L;
          }
        }
      }
      var A = [], B = 0, n = [], Q = 0;
      x(m);
      var u = A.join("");
      "\n" === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1));
      return {o:u, I:n};
    };
    var vb = function(m, l, x) {
      function A(p) {
        var C = p.nodeType;
        if (1 === C && !Za(p, "nocode")) {
          if ("BR" === Na(p)) {
            B(p), p.parentNode && Ua(p);
          } else {
            for (p = p.firstChild; p; p = p.nextSibling) {
              A(p);
            }
          }
        } else if ((3 === C || 4 === C) && x) {
          var H = p.nodeValue, ba = H.indexOf("\r\n"), ja = 2;
          -1 === ba && (ba = H.indexOf("\n"), ja = 1);
          -1 === ba && (ba = H.indexOf("\r"));
          -1 !== ba && (C = H.substr(0, ba), p.nodeValue = C, (H = H.substr(ba + ja)) && hc(p, H), B(p), C || Ua(p));
        }
      }
      function B(p) {
        function C(ba, ja) {
          var Ca = ja ? ba.cloneNode(!1) : ba, xa = ba.parentNode;
          if (xa) {
            xa = C(xa, 1);
            var Da = ba.nextSibling;
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
        Q.push(p);
      }
      for (var n = O.createElement("li"); m.firstChild;) {
        n.appendChild(m.firstChild);
      }
      for (var Q = [n], u = 0; u < Q.length; ++u) {
        A(Q[u]);
      }
      if (l === (l | 0)) {
        if (10 <= l && 7.2 > M) {
          var L = O.createElement("ol");
          L.innerHTML = '<li value="' + l + '">' + n.innerHTML + "</li>";
          Q[0] = L.firstChild;
        } else {
          kb(n, "value", l);
        }
      }
      L = ra(m, "ol", {className:"linenums"});
      m = Math.max(0, l - 1 | 0) || 0;
      u = 0;
      for (l = Q.length; u < l; ++u) {
        n = Q[u], Sb(n, "L" + (u + m) % 10), n.firstChild || Jc(n, "\u00a0"), L.appendChild(n);
      }
    };
    var mb = function() {
      var m = b, l = m.o, x = l.length, A = 0, B = m.I, n = B.length, Q = 0, u = m.s, L = u.length, p = 0;
      u[L] = x;
      var C, H;
      for (H = C = 0; H < L;) {
        u[H] !== u[H + 2] ? (u[C++] = u[H++], u[C++] = u[H++]) : H += 2;
      }
      L = C;
      for (H = C = 0; H < L;) {
        var ba = u[H], ja = u[H + 1];
        for (H += 2; H + 2 <= L && u[H + 1] === ja;) {
          H += 2;
        }
        u[C++] = ba;
        u[C++] = ja;
      }
      u.length = C;
      m = m.B;
      L = "";
      m && (L = m.style.display, Aa(m, "display", "none"));
      for (; Q < n;) {
        C = B[Q + 2] || x;
        ba = u[p + 2] || x;
        H = Math.min(C, ba);
        ja = B[Q + 1];
        var Ca;
        if (1 !== ja.nodeType && (Ca = l.substring(A, H))) {
          9 > y && (Ca = Ca.split("\n").join("\r"));
          var xa = Hb(ja, "span", {className:la[u[p + 1]]}, Ca);
          Ua(ja);
          A < C && (B[Q + 1] = hc(xa, l.substring(H, C)));
        }
        A = H;
        A >= C && (Q += 2);
        A >= ba && (p += 2);
      }
      m && Aa(m, "display", L);
      b = q;
      F(Oa, q, 3, !0);
    };
    var ya = [], Ma;
    S.readyTime = z() - c;
    zb(function(m) {
      if (m) {
        m = [tb("pre"), tb("code"), tb("xmp")];
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
      1 === Ma && (qc ? ta(qc, Oa) : eb ? eb.push(function() {
        ta(Oa);
      }) : ta(Oa));
    };
    var Oa = function() {
      function m(Q, u) {
        return (Q.split(u)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ma !== ya.length && k && k(Ma - ya.length, Ma);
        var l = ya.shift();
        if (l) {
          c = z();
          if (Za(l, "prettyprint") && !Za(l, "prettyprinted")) {
            for (var x = !1, A = l.parentNode; A !== sa; A = A.parentNode) {
              var B = Na(A);
              if (("PRE" === B || "XMP" === B || "CODE" === B) && Za(A, "prettyprint")) {
                x = !0;
                break;
              }
            }
            if (!x) {
              x = l.className;
              lb(l, "prettyprinted");
              A = !1;
              if (!A) {
                A = m(x, "lang-") || m(x, "language-");
                var n;
                !A && (n = ma(l)) && "CODE" === Na(n) && (A = m(n.className, "lang-") || m(n.className, "language-"));
              }
              B = Na(l);
              "PRE" === B || "XMP" === B ? B = 1 : (B = l.currentStyle, n = O.defaultView, B = (B = B ? B.whiteSpace : n && n.getComputedStyle ? n.getComputedStyle(l, null).getPropertyValue("white-space") : 0) && "pre" === B.substr(0, 3));
              n = !1;
              (n = "true" === n || +n) || (n = m(x, "linenums:") || Za(l, "linenums"), n = n.length ? +n : n);
              n && vb(l, n, B);
              b = {V:A, B:l, aa:n, O:B, D:0, v:0, R:{}, s:[]};
              S.codeBlocks.push({elm:l, lang:A, readyTime:z() - c, decorateTime:0, decorateCount:0, updateDOMTime:0});
              F(fa);
              return;
            }
          }
          F(Oa, q, 0, !0);
        } else {
          h && h(S);
        }
      }
    };
    P.PR = {RegExpProxy:J, prettifyElement:Ra, registerCompleteHandler:function(m, l) {
      h = m;
      k = l;
    }};
  })();
  var pc = O.scripts || tb("script");
  var Ha = pc[pc.length - 1].src.split("/");
  --Ha.length;
  "js" === Ha[Ha.length - 1] && --Ha.length;
  (Ha = Ha.join("/")) && (Ha += "/");
  Z("[p_assetUrl] " + Ha);
  var Rc = Wc || "1" === Ka(sa, "mob");
  Nb = (Rc ? "mb" : "pc") + "/";
  Qa(function() {
    var D;
    (D = sb("logger")) || alert("#logger not found!");
    D ? (Z = bz, ab = function(J) {
      ra(D, "DIV", {style:{color:"red"}}, J);
    }, P.onerror = function(J, F, T) {
      ab(J + ", " + F + ", " + T);
      return !0;
    }) : P.console ? (Z = console.log, ab = console.error) : M ? (Z = fb, ab = opera.postError) : Z = ab = fb;
    for (; Qb.length;) {
      Z(Qb.shift());
    }
    for (; Rb.length;) {
      ab(Rb.shift());
    }
    Qb = Rb = q;
    function bz(J) {
      ra(D, "DIV", q, J);
    }
    bz = !1;
  });
  6.1 > hb && (yb ? yb(ec) : ca(P, "scroll", ec));
  ub(Ec);
  6.1 > hb && (yb ? yb(fc) : ca(P, "scroll", fc));
  ub(Fc);
  10 > y && (11 !== Uc || 5 !== y) || (9 > M || 1 > K || !rb && !P.addEventListener ? O.write('<link href="' + Ha + "css/" + Nb + bc + '" rel="stylesheet"' + (8 > M ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > M || 1.5 > K || 534 > Sa || 5 > hb || 7 > cb || 3 > Fb) && Qa(function() {
    ra(qb, "link", {href:Ha + "css/" + Nb + bc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Kb) {
    if (Ob) {
      var qc = function(D) {
        P.RegExpCompat = bz;
        qc = q;
        cc(Ha + "js/regexpcompat.js");
        function bz(J) {
          for (var F; F = eb.shift();) {
            F(J);
          }
          eb = q;
          ta(D);
          dc(Ha + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      P.RegExpCompat = function(D) {
        for (var J; J = eb.shift();) {
          J(D);
        }
        eb = q;
        dc(Ha + "js/regexpcompat.js");
      }, cc(Ha + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

