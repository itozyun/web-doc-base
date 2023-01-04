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
var Y, eb;
(function(Sa, P, fb, rc, O, Vb, Sc, Kb, ab, Wb, Xb, sc, Yb, q) {
  function ha(D) {
    if (Sa[0] === D) {
      return Ta === Ta + "" ? ab(Ta) : Ta;
    }
  }
  function Fa(D) {
    var J = Sa[3];
    if (Sa[2] === D) {
      return J === J + "" ? ab(J) : J;
    }
  }
  function Zb() {
    return 6 > B ? sa.scrollTop : B ? ob.scrollTop : P.pageYOffset;
  }
  var sa = O.body, Pa = sa.style, ob, pb, gb, Ta = Sa[1], B = ha(2) || ha(3), qb = ha(7), Eb = ha(5) || ha(6), M = ha(8) || ha(9), K = ha(11) || ha(12), Lb = K && 0 <= Sa.conpare(Ta, "1.9.1"), $b = ha(13), Ua = ha(15), vb = ha(16) || ha(17), tc = ha(10) || ha(25), bb = ha(20) || ha(22), Tc = ha(23), Mb = ha(21), uc = ha(24), vc = bb && ab(Vb.userAgent.split("Edg/")[1]), Uc = ab(Vb.appVersion.split("Trident/")[1]) + 4, ac = Fa(35) || Fa(36) || Fa(37), Vc = 0 <= Vb.userAgent.indexOf("Googlebot/"), 
  bc = (qb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > M ? "opr70" : 8 > M ? "opr72" : 9.5 > M ? "opr" + (M | 0) : K && !Lb ? 1.4 <= K ? "gck19" : 1.3 <= K ? "gck13" : 1 <= K ? "gck12" : 0.9 <= K ? "gck09" : 0.8 <= K ? "gck08" : "gck07" : "modern") + ".css", Nb = "", Wc = Fa(1) || Fa(2) || Fa(3) || Fa(4) || Fa(8) || Fa(9) || Fa(10), wc, xc = Pa.transform !== q ? "transform" : Pa["-o-transform"] !== q ? "-o-transform" : Pa["-ms-transform"] !== q ? "-ms-transform" : 
  Pa.MozTransform !== q ? "-moz-transform" : Pa["-webkit-transform"] !== q ? "-webkit-transform" : "", Ma = [], yc = [], Va = [], zc, Ac, Ob, Bc, cc, dc, Cc = !1;
  525 > Ua || 10 > M || K && !Lb || 2.2 > Mb || ha(25) || 10 > ha(3) || Fa(32) || Fa(30) || Fa(3);
  var ta, Fb, Pb, Dc, Xc = !!sa.getBoundingClientRect, Qb = [], Rb = [], ec, Ec, fc, Fc, wb = Kb.now || function() {
    return +new Kb();
  };
  (function() {
    function D() {
      for (var C, aa = 0, S = wb(); aa < G.length;) {
        S < G[0].t ? ++aa : (C = G.splice(aa, 1)[0], C.f(C.p));
      }
      la = G.length ? Xb(D, wa) : 0;
    }
    function J() {
      for (var C, aa = 0; aa < I.length; ++aa) {
        C = I[aa], C.f();
      }
    }
    function F() {
      ma && (ma = clearInterval(ma));
    }
    function T() {
      la && (la = sc(la));
    }
    Y = function(C) {
      Qb.push(C);
    };
    eb = function(C) {
      Rb.push(C);
    };
    Pb = function(C) {
      I.length || (ma = Yb(J, U));
      I.push({f:C, C:++ea});
      return ea;
    };
    Dc = function(C) {
      for (var aa = I.length, S; S = I[--aa];) {
        if (S.C === C) {
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
    if (5 > B || qb) {
      P._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    ta = function(C, aa, S) {
      G.length || (la = Xb(D, wa));
      G.push({f:C, p:aa, C:++na, t:wb() + (wa < S ? S : wa)});
      return na;
    };
    Fb = function(C) {
      for (var aa = G.length, S; S = G[--aa];) {
        if (S.C === C) {
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
    if (5 > B || qb) {
      P._wdb_ontimer = D, D = "_wdb_ontimer()";
    }
  })();
  var rb, sb, hb, Gc, Ga, Ya, Hc, gc, ra, Gb, Ic, Jc, hc, Wa, ib, Na, Ka, jb, cb, xb, Kc, Sb, Za, kb, Lc, Aa, Ha, Mc;
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
                for (var fa = ++k, pa, Z = [], ia = N.split(""), qa = ia.length; qa;) {
                  pa = ia[--qa], "A" <= pa && "Z" >= pa && (pa = "-" + pa.toLowerCase()), Z[qa] = pa;
                }
                h[fa] = Z.join("") + ":" + R[N] + ";";
              }
              h[++k] = '"';
            } else {
              "className" === t && (t = "class"), h[++k] = " " + t + '="' + R + '"';
            }
          }
        }
      }
      h[++k] = ">";
      null != b && (C && "font" !== c ? h[++k] = "<FONT>" + J(b) + "</FONT>" : h[++k] = J(b));
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
      for (var b = "*" === d && 6 > B ? "*" !== d ? c.all.tags(d.toUpperCase()) : c.all : c.getElementsByTagName(d), h = [], k = 0, t = b.length; k < t; ++k) {
        h[k] = b[k];
      }
      return h;
    }
    function U(c) {
      return C ? c.parentElement : c.parentNode;
    }
    function ea(c, d, b, h, k, t) {
      if (C) {
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
                  jb(d, N, c);
              }
            }
          }
          !M || "a" !== b && "A" !== b || !h.href || h["tag-index"] || h.tagIndex || jb(d, "tagIndex", "-0");
        }
        S || null != k && ma(d, k);
      }
      return d;
    }
    function ma(c, d) {
      if (C) {
        return ea(2, c, "font", q, d);
      }
      var b = O.createTextNode("" + d);
      c.appendChild(b);
      return b;
    }
    function G(c, d) {
      9 > B ? c.className = d : c.setAttribute("class", d);
    }
    function wa(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    function na(c, d, b) {
      if (8 > M || 5.5 > B) {
        d = F(d);
      }
      c.style[d] = b;
    }
    function la(c) {
      return 5.5 > B ? c.style.cssText.toLowerCase() : c.style.cssText;
    }
    var C = 5 > B;
    ob = T("html")[0];
    pb = T("head")[0];
    rb = function(c) {
      return P[c] || O[c] || O.getElementById(c);
    };
    sb = T;
    hb = I;
    Gc = function(c, d) {
      var b = [], h = 0, k, t = -1;
      if (9 > B || !c.getElementsByClassName) {
        var N = 6 > B ? c.all : c.getElementsByTagName("*");
      } else {
        var R = !0;
        N = c.getElementsByClassName(d);
      }
      for (k = N.length; h < k; ++h) {
        var fa = N[h];
        if (R || (C || 1 === fa.nodeType) && wa(fa, d)) {
          b[++t] = fa;
        }
      }
      return b;
    };
    Ga = U;
    Ya = function(c) {
      c = C ? c.children : c.childNodes;
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
          C && "FONT" === t.tagName || (b[++k] = t);
        }
      }
      return b;
    };
    gc = function(c) {
      return C ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    ra = function(c, d, b, h, k) {
      d = ea(2, c, d, b, h, k);
      C || (c.appendChild(d), S && null != h && ma(d, h));
      return d;
    };
    Gb = function(c, d, b, h, k) {
      d = ea(0, c, d, b, h, k);
      C || (U(c).insertBefore(d, c), S && null != h && ma(d, h));
      return d;
    };
    Ic = function(c, d, b, h, k) {
      d = ea(1, c, d, b, h, k);
      var t;
      C || ((t = c.nextSibling) ? Ga(t).insertBefore(d, t) : Ga(c).appendChild(d), S && null != h && ma(d, h));
      return d;
    };
    Jc = ma;
    hc = function(c, d) {
      var b;
      if (C) {
        return ea(1, c, "font", q, d);
      }
      var h = O.createTextNode("" + d);
      (b = c.nextSibling) ? Ga(c).insertBefore(h, b) : Ga(c).appendChild(h);
      return h;
    };
    Wa = function(c) {
      Ga(c) ? C ? c.outerHTML = "" : Ga(c).removeChild(c) : Y("[DOM] p_DOM_remove(), No parentNode!");
    };
    ib = function(c, d) {
      if (c.contains) {
        return c.contains(d);
      }
      for (; d && d !== ob;) {
        if (d = Ga(d), c === d) {
          return !0;
        }
      }
    };
    var aa = 9 > B, S = aa;
    Na = function(c) {
      return c.tagName.toUpperCase();
    };
    Ka = function(c, d) {
      if (8 > M || 5.5 > B) {
        d = F(d);
      }
      var b = c.getAttribute(d);
      return M && "tabIndex" === d ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    };
    jb = function(c, d, b) {
      if (M && "tab-index" === d) {
        "-1" === b ? c.removeAttribute("tabIndex") : c.setAttribute("tabIndex", b);
      } else {
        if (8 > M || 5.5 > B) {
          d = F(d);
        }
        c.setAttribute(d, b);
      }
    };
    cb = function(c, d) {
      if (M && "tab-index" === d) {
        "-0" !== c.getAttribute("tabIndex") && c.setAttribute("tabIndex", "-0");
      } else {
        if (8 > M || 5.5 > B) {
          d = F(d);
        }
        c.removeAttribute(d);
      }
    };
    xb = function(c, d) {
      if (M && "tab-index" === d) {
        return "-0" !== c.getAttribute("tabIndex");
      }
      if (8 > M || 5.5 > B) {
        d = F(d);
      }
      return c.hasAttribute ? c.hasAttribute(d) : null != c.getAttribute(d);
    };
    Kc = function(c) {
      return c.className;
    };
    Sb = G;
    Za = wa;
    kb = function(c, d) {
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
    Ha = function(c, d) {
      var b, h = -1, k;
      if (5.5 > B) {
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
    Ma.splice(0, 0, function() {
      function c(fa) {
        fa = Ya(fa);
        for (var pa = fa.length, Z, ia, qa; pa;) {
          if (Z = fa[--pa], ia = Z.nodeType, 8 === ia) {
            d && N.push(Z);
          } else if (1 === ia) {
            switch(ia = Na(Z), "/" === ia.charAt(0) && (ia = ia.substr(1), R[ia] = !0), ia) {
              case "STYLE":
                if (7.2 <= M && 9 > M) {
                  break;
                }
              case "LINK":
                C || h || ib(pb, Z) || t.push(Z);
                break;
              case "META":
                ia = Ka(Z, "name") || Ka(Z, "property");
                for (qa = k.length; qa;) {
                  if (0 === ia.indexOf(k[--qa])) {
                    N.push(Z);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Vc || xb(Z, "async")) {
                  break;
                }
                if (b) {
                  Z.innerText = "";
                  b = !1;
                  break;
                }
              case "NOSCRIPT":
                if (xb(Z, "skip-cleanup")) {
                  break;
                }
              case "!":
                N.push(Z);
                break;
              case "SOURCE":
                P.HTMLSourceElement || N.push(Z);
                break;
              default:
                R[ia] ? N.push(Z) : Ya(Z).length && c(Z);
            }
          }
        }
        for (; t[0];) {
          pb.appendChild(t.pop());
        }
        for (; N[0];) {
          Wa(N.pop());
        }
      }
      gb = rb("jsMain");
      var d = !(8 > M || 5 > B || qb || .9 > K), b = Ac, h = 7 > B, k = ["og:", "twitter:", "fb:"], t = [], N = [], R = {};
      c(ob);
    });
  })();
  var ca, Ba, Qa, tb, ic, yb, zb, jc, kc, lc, Nc, Oc, Pc, Ab, va, mc;
  (function() {
    function D() {
      return l ? y ? 2 : x ? 3 : 1 : 0;
    }
    function J(e) {
      Ba(P, "load", J);
      J = q;
      T(Ma, e, !0);
      Ma = q;
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
      Ma || aa.length || ta(U);
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
      B ? (g.target = g.srcElement, g.preventDefault = bz, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        f = !0;
      });
      for (; a = e[++r];) {
        a.j === this ? (this.g = a.i, B && (g.currentTarget = this), this.g(g), B ? (this.g = fb, this.g = q) : delete this.g) : 7.2 > M && this === O && a.j === P && (P.g = a.i, P.g(g), delete P.g);
      }
      if (B) {
        return g.preventDefault = g.stopPropagation = fb, g.preventDefault = g.stopPropagation = q, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (k = !0), f && !k && g.K(), g.K = g.stopPropagation = q);
      function bz() {
        g.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var e = 9 === C.offsetWidth;
      Ab !== e && (I(yc, Ab = e), Y("p_cssAvailability:" + Ab));
    }
    function G() {
      !Ma && L && (Fb(L), L = ta(wa));
    }
    function wa() {
      L = 0;
      T(u);
    }
    function na(e) {
      Ma || T(p, e);
    }
    var la = P.matchMedia, C, aa = [];
    Ma.push(function() {
      F = q;
      C = ra(sa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
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
          E || (d ? e.detachEvent(g, ea) : B ? (e[g] = fb, e[g] = null) : delete e[g]);
        }
      }
    };
    var S = !B && !qb && (new Sc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), c = {}, d = !1, b = 525.13 > Ua, h = !b && !qb && P.addEventListener, k;
    b && ob.addEventListener("click", function(e) {
      if (k) {
        return k = !1, e.preventDefault(), !1;
      }
    });
    Qa = function(e) {
      Ma ? Ma.push(e) : alert("Load event has already been dispatched!");
    };
    tb = function(e) {
      t && t.push(e);
    };
    var t = [];
    if (419.3 >= Ua) {
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
    B || .9 <= K && 1.8 > K ? ca(P, "unload", function(e) {
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
        if (Z) {
          lb || (lb = Yb(Ra, 333));
        } else if (pa || ia) {
          ca(O, "focus", ub, !0);
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
            r.length || (Z ? lb = Dc(lb) : (pa || ia) && Ba(O, "focus", ub, !0));
            break;
          }
        }
      }
    };
    var R = 6 <= B || Eb || 52 <= K || 15 <= bb || 534 <= Ua || 5 <= vb || Tc || 4 <= Mb || 4 <= uc || 11.6 <= ha(8) || 12 <= ha(9), fa = 8 <= M || bb || Mb || uc || Ua || vb, pa = 8 > M, Z = 6 > B, ia = 52 > K || $b;
    if (ia || pa) {
      var qa = [];
      var ub = function(e) {
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
          (E === r || ib(E, r)) && g[f + 1].call(E, e);
        }
      };
    } else if (Z) {
      qa = [];
      var lb, ya, La, Ra = function() {
        La = P.onerror;
        P.onerror = Oa;
        var e = O.activeElement;
        if (ya !== e) {
          ya = e;
          for (var g = qa, r, a = 0, f = g.length; a < f; ++a) {
            r = g[a], (r === e || ib(r, e)) && g[a + 1].apply(r, [{target:e}]);
          }
        }
        P.onerror = La;
        La = q;
      }, Oa = function() {
        Y("error!");
        P.onerror = La;
        La = ya = q;
        return !0;
      };
    }
    kc = function(e) {
      Va && Va.push(e);
    };
    var m = 60 > K || $b, l, x, y;
    if (89 <= K || 89 <= bb || ac && 79 <= vc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      mc = !0, F("(forced-colors:active)", function(e) {
        l = e.matches;
        va = D();
        I(Va, va);
        Y("(forced-colors:active):" + va);
      });
    } else if (10 <= B || Eb || ac && vc) {
      mc = !0, F("(-ms-high-contrast:black-on-white)", function(e) {
        l = x = e.matches;
        va !== D() && (va = D(), I(Va, va), Y("(-ms-high-contrast:black-on-white):" + va));
      }), F("(-ms-high-contrast:white-on-black)", function(e) {
        l = y = e.matches;
        va !== D() && (va = D(), I(Va, va), Y("(-ms-high-contrast:white-on-black):" + va));
      }), F("(-ms-high-contrast:active)", function(e) {
        l = e.matches;
        va !== D() && (va = D(), I(Va, va), Y("(-ms-high-contrast:active):" + va));
      });
    } else if (ac && (B || K && 0 <= Sa.conpare(Ta, "1.8.1") || $b)) {
      var z = function() {
        function e(a, f) {
          if (f && "transparent" === a) {
            return 382.5;
          }
          if ("#" === a.charAt(0)) {
            return parseInt("0x" + a.substr(1, 2), 16) + parseInt("0x" + a.substr(3, 2), 16) + parseInt("0x" + a.substr(5, 2), 16);
          }
          var w = a.split("(")[1].split(",");
          return ab(w[0]) + ab(w[1]) + ab(w[2]);
        }
        var g = O.defaultView;
        var r = g ? g.getComputedStyle(C, null) : C.currentStyle;
        g = (r && r.color || "").split(" ").join("");
        r = (r && r.backgroundColor || "").split(" ").join("");
        g && (l = "#123456" !== g && "rgb(18,52,86)" !== g, x = e(g) < e(r, !0), y = e(g) > e(r, !0), va !== D() && (va = D(), Y("(forced-colors-fallback):" + va), I(Va, va, m)));
      };
      zb(function(e) {
        if (e) {
          return Aa(C, "color", "#123456"), Aa(C, "backgroundColor", "#123456"), m ? (z(), Va = q) : Pb(z), z = q, !0;
        }
      });
    } else {
      Va = D = q;
    }
    jc = function(e) {
      Ma || alert("p_listenImageReady is called back for images present at load time.");
      n.push(e);
    };
    var n = [], Q = 7.5 <= M && 8 > M;
    Q && function() {
      for (var e = O.images, g = e.length, r; g;) {
        r = e[--g], r.J = r.src, cb(r, "src");
      }
    }();
    Qa(function() {
      function e() {
        a ? (f = r[--a], Q && jb(f, "src", f.J), zc(g, Q ? f.J : f.src)) : n = q;
      }
      function g(E) {
        T(n, {G:f, H:E}, !a);
        e();
      }
      var r = O.images || sb("img"), a = r.length;
      if (12 > M || 532 > Ua) {
        e();
      } else {
        for (; a;) {
          var f = r[--a];
          var w = 9 > B ? f.complete : 0 <= f.naturalWidth ? f.naturalWidth : f.width;
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
    tb(function() {
      L && sc(L);
      Ba(P, "resize", G);
    });
    yb = function(e) {
      p.push(e);
    };
    var p = [], A = 1 > K || 1.2 <= K && 1.8 > K || 7.2 >= M, H;
    A ? Pb(function() {
      var e = P.pageYOffset;
      H !== e && (H = e, na({type:"scroll", cancelable:!1, stopPropagation:fb, preventDefault:fb}));
    }) : ca(P, "scroll", na, {passive:!0});
    tb(function() {
      A || Ba(P, "scroll", na, {passive:!0});
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
    var ba = 9 <= B || Eb || 17 <= K || 31 <= bb || 537.7 <= Ua, ja = 6 <= B || Eb || 9 <= M || bb || 522 <= Ua || vb, Ca = Lb, xa = K && 0 <= Sa.conpare(Ta, "0.9.7") && !Lb;
    if (xa) {
      var Da = [], za = function(e) {
        for (var g = Da, r = e.target, a, f = 0, w = g.length; f < w; ++f) {
          a = g[f], ib(a, r) && g[f + 1].call(a, e);
        }
      };
    }
  })();
  (function() {
    9 > B && Qa(function() {
      var D = ra(sa, "div");
      Ha(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      wc = 1 < D.offsetHeight;
      Ha(D, "");
      Wa(D);
    });
    zc = bz;
    function bz(D, J) {
      function F() {
        I || !U || T.complete ? (Y("[imageTest] timer -> img.complete. img.width=" + T.width), ta(D, !!T.width), T.onerror = T.onload = fb, T = D = q) : (--U, ta(F));
      }
      var T = new Image(), I, U = 99;
      Y("[imageTest] start.");
      T.onerror = function() {
        Y("[imageTest] error!");
        I = !0;
      };
      T.onload = function() {
        Y("[imageTest] onload.");
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
      !Za(k, "aBodyRoot") && b ? kb(k, "img-loaded") : b || Ka(h, "alt") || Aa(h, "display", "none");
    });
    K && 0 > Sa.conpare(Ta, "0.9.0") && Ma.splice(1, 0, function() {
      for (var b = Gc(gb, "RichLink-sep"), h, k, t, N, R, fa; h = b.shift();) {
        for (h = Ya(h); k = h.shift();) {
          if ("A" === Na(k) && !k.innerHTML) {
            for (Y("\u25a0 Broken Anchor " + k.parentNode.innerHTML); t = h.shift();) {
              if (1 === t.nodeType) {
                if ("A" === Na(t)) {
                  break;
                }
                for (N = hb(t, "A"); R = N.shift();) {
                  for (fa = Ya(R); fa.length;) {
                    R.parentNode.insertBefore(fa.shift(), R);
                  }
                  Wa(R);
                }
              }
              k.appendChild(t);
            }
          }
        }
      }
    }, function() {
      for (var b = sb("A"), h, k; h = b.shift();) {
        "A" !== Na(h) || h.innerHTML || (k = h.nextSibling && h.nextSibling.firstChild) && k.href === h.href && (Y("\u25b2 Broken Anchor " + k.innerHTML), Wa(h));
      }
    });
    5.5 <= B && 8 > B && Va && kc(function(b) {
      for (var h = hb(sa, "a"), k = h.length, t = 0; t < k; ++t) {
        h[t].hideFocus = !b;
      }
    });
    if (!mc && Va) {
      var D, J = function() {
        D = ra(pb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ia + "css/" + Nb + "hc/" + bc});
        if (xc || 5.5 <= B && 9 > B && wc) {
          kb(sa, "jsCanRotate"), Y("jsCanRotate!");
        }
        J = q;
      };
      kc(function(b) {
        b && !D ? J() : D && (b ? pb.appendChild(D) : Wa(D));
      });
    }
    M && Qa(function() {
      for (var b = hb(sa, "a"), h = b.length, k = 0, t; k < h; ++k) {
        t = b[k], "-1" === Ka(t, "tabIndex") ? cb(t, "tabIndex") : Ka(t, "href") && jb(t, "tabIndex", "0");
      }
      b = hb(sa, "input");
      k = 0;
      for (h = b.length; k < h; ++k) {
        t = b[k], "hidden" === Ka(t, "type") && cb(t, "tabIndex");
      }
    });
    if (K && 0 > Sa.conpare(Ta, "0.9.5")) {
      Cc = !0;
      var F, T, I, U, ea;
      Qa(function() {
        ca(O, "keydown", ma);
        ca(O, "keyup", G);
        lc(sa, wa);
        .9 <= K && (ca(P, "blur", S), ca(sa, "click", aa));
      });
      var ma = .9 > K ? function(b) {
        16 === b.keyCode ? F = !0 : 9 === b.keyCode && U && na(U, !0) && (U.blur && U.blur(), b.stopPropagation(), b.preventDefault(), ta(C));
      } : function(b) {
        16 === b.keyCode ? F = !0 : 9 === b.keyCode && (T = wb());
      }, G = function(b) {
        16 === b.keyCode && (F = !1);
      }, wa = .9 > K ? function(b) {
        Y(b.type + " " + b.target.tagName + "." + (b.target.type || b.target.href || b.target.name || "") + " " + (b.target.textContent || ""));
        b.target.innerHTML || Y(b.target.parentNode.innerHTML);
        U = b.target;
      } : function(b) {
        var h = b.target;
        Y(b.type + " " + h.tagName + "." + (h.type || "") + " " + (b.target.innerHTML || ""));
        if (U === h) {
          I = q;
        } else if (I) {
          h === I ? (b.stopPropagation(), C(!0)) : (h.blur && d(h), b.preventDefault(), C());
        } else {
          if (b = U) {
            U = q, d(b);
          }
          I = h;
          C(!0);
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
          return 0 <= b.offsetHeight * b.offsetWidth;
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
      }, C = function(b) {
        Y("setFocus()" + ea + " " + I + " " + b);
        ea = 0;
        I && (.9 <= K && ca(I, "blur", c), U = I, I = q, Y("setFocus()" + b), b || U.focus());
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
            C();
          }
        }, S = function(b) {
          b.target !== O ? Y("window." + b.type + " tgt=" + b.target + " cancelable:" + b.cancelable) : I = q;
        }, c = function(b) {
          b = b.target;
          Ba(b, "blur", c);
          U === b && na(b) && (Y("Hit! " + b + " " + I + ea), ea || (ea = ta(C)));
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
                Ha(f, X.S), Lc(f, "jsCapLarge");
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
                      (v = ab(W.substr(1))) && W === "s" + v ? E[da - 1] = "w" + w : E[da] = "w" + w;
                    }
                    E = E.join("=");
                  } else {
                    E = E.split("/");
                    da = E.length;
                    if (W = E[da - 2]) {
                      (v = ab(W.substr(1))) && W === "s" + v ? E[da - 2] = "w" + w : E.splice(da - 1, 0, "w" + w);
                    }
                    E = E.join("/");
                  }
                }
                X.W = E;
              }
              X.T = Kc(V);
              kb(V, "jsPicaLarge");
              Aa(f, "width", "");
              f.src = X.W;
              if (f = X.L) {
                Ha(f, ""), kb(f, "jsCapLarge");
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
      var f = y;
      if (Ab) {
        if (z && !f) {
          if (wb() < z) {
            return;
          }
          z = q;
        }
        7 === a ? (G("t"), n = 0) : (G("s"), n && (n = Fb(n)), l = Zb());
        f ? (y = I(q, f[0], f[1])) || (z = wb() + 99) : I();
        na();
      } else {
        y = q;
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
          if (qa || ub) {
            var nc = ya.offsetWidth;
          }
          da = qa ? "position:fixed;width:" + nc + "px;top:" + ($a - W + ka) + "px" : lb ? "top:" + $a + "px" : "position:absolute;top:" + $a + "px;left:0";
          if (ub && da) {
            var Hb = 8 > B ? " " : ",";
            da += ";clip:rect(" + (0 > $a ? -$a + "px" + Hb + nc + "px" + Hb + Ea : "0" + Hb + nc + "px" + Hb + ($a + Ea < Ib ? Ea : Ib - $a)) + "px" + Hb + "0)";
          }
        }
      }
      var W = l, v = La, X = ya.offsetTop === v.offsetTop, V = 0, da = "", Xa = !0;
      if (X) {
        for (var oa = 0, ka = 0, Ja = v; Ja && Ja !== sa;) {
          ka += Ja.offsetTop, Ja = Ja.offsetParent;
        }
        V = m;
        Ja = 11 > B ? ob.offsetHeight : P.innerHeight;
        var oc = v.offsetHeight, Ea = Ra.offsetHeight, Ib = Ea < oc ? oc : Ea, mb = W, Bb = mb + Ja, Tb = ka, Ub = Tb + Ib, Qc = ka + V, Yc = Qc + Ea;
        v = mb < Tb ? Tb : mb;
        var nb = Ub < Bb ? Ub : Bb, Cb = nb - v;
        mb = Ub <= mb;
        Bb = Bb <= Tb;
        if (f !== q) {
          Xa = ka + f;
          a = Xa + w;
          if (mb || Bb) {
            return Ja <= w ? (f = ka, G("4.1.1")) : mb ? (f = Ub - w, G("4.1.2")) : (f = ka + w - Ja, G("4.1.3")), z = q, P.scroll(0, f), G("4.1.*"), y;
          }
          Ea <= Cb ? (oa = 3, G("4.2")) : w <= Cb ? Ea - f <= Cb ? (oa = 2, G("4.3.1")) : v <= Xa && a <= nb ? v < ka + V && (oa = 4, G("4.3.2")) : v <= Xa && Xa <= nb ? (oa = 5, G("4.3.3")) : v <= a && a <= nb ? (oa = 4, G("4.3.4")) : a < v ? (oa = 4, G("4.3.5")) : (oa = 5, G("4.3.6")) : (oa = 4, G("4.4"));
          Xa = q;
        } else {
          a !== q ? Ea <= Cb ? (oa = 7, Xa = !1, G("3.1")) : (V -= 60 * a, oa = nb - ka - Ea, a = v - ka, V < oa ? (V = oa, G("3.2.1")) : a < V ? (V = a, G("3.2.2")) : G("3.2.3"), oa = 6) : oc <= Ea || (mb ? (oa = 1, G("2.2.1")) : Bb ? G("2.2.2") : Ea <= Cb ? (oa = 3, G("2.3")) : v < Qc ? (oa = 3, G("2.4.1")) : Yc < nb ? (oa = 2, G("2.4.2")) : W < ka + Ea - Cb ? G("2.4.3") : (oa = 2, G("2.4.4")));
        }
        switch(oa) {
          case 0:
            E(0);
            break;
          case 1:
            E(Ib - Ea);
            break;
          case 2:
            E(nb - ka - Ea);
            break;
          case 3:
            E(v - ka);
            break;
          case 4:
            E(v - ka - f);
            break;
          case 5:
            E(nb - ka - (f + w));
          case 6:
            E(V);
        }
        la(V, Ea, ka, Ib, Ja, f || "-", w || "-");
      } else {
        la(V, "-", "-", "-", "-", "-", "-");
      }
      Ha(Ra, da);
      m = V;
      return X && Xa;
    }
    function U(a) {
      if (Ab && (G("m"), K && (l = Zb(), na()), this !== a.target)) {
        var f = Wb(a.deltaY) ? a.deltaY : Wb(a.wheelDeltaY) ? a.wheelDeltaY / 120 : Wb(a.wheelDelta) ? a.wheelDelta / -120 : a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1);
        f && I(9 >= f ? -9 >= f ? -3 : f : 3) && (a.preventDefault(), a.stopPropagation());
      }
    }
    function ea(a) {
      if (Ab) {
        var f = K && 0 > Sa.conpare(Ta, "0.9.4"), w = a.target, E = Ra, W = 0;
        if (ib(E, w)) {
          G(a.type || "ie5focus");
          ca(w, "blur", ma);
          if (Oa) {
            f = w.getBoundingClientRect(), a = f.bottom - f.top, W = f.top - E.getBoundingClientRect().top | 0;
          } else {
            a = w.offsetHeight;
            var v = w;
            if (f) {
              for (var X = []; v && (K ? ib(E, v) : E !== v);) {
                for (; v.previousSibling;) {
                  v = v.previousSibling, v.tagName && X.unshift(v.tagName + ":" + v.offsetTop);
                }
                v = v.offsetParent;
              }
              Y(X.join());
              v = w;
            }
            for (; v && (K ? ib(E, v) : E !== v);) {
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
          ia ? (y = [W, a], n && Fb(n), n = ta(F, 7, 1 > K || 536 > Ua || 14 > bb ? 500 : 0)) : (l = Zb(), I(q, W, a));
          C(W, a);
        }
      }
    }
    function ma() {
      Ba(this, "blur", ma);
      C(0, 0);
    }
    function G(a) {
      L && (ja && (ja = Fb(ja)), ja = ta(wa, 0, 1400), L.innerHTML += " " + a);
    }
    function wa() {
      L.innerHTML = "";
    }
    function na() {
      A && (Aa(A, "top", (l / 10 | 0) + "px"), u.innerHTML = " scrl:" + (l | 0));
    }
    function la(a, f, w, E, W, v, X) {
      H && (Aa(H, "top", ((a + w) / 10 | 0) + "px"), Aa(H, "height", (f / 10 | 0) + "px"), Aa(A, "height", (W / 10 | 0) + "px"), Aa(p, "height", (sa.scrollHeight / 10 | 0) + "px"), Q.innerHTML = "conY:" + w + "/sidY" + a + ", conH:" + E + "/sidH" + f + ", focY:" + v + " focH:" + X);
    }
    function C(a, f) {
      ba && (Aa(ba, "top", (a / 10 | 0) + "px"), Aa(ba, "height", (f / 10 | 0) + "px"));
    }
    function aa() {
      Ca.call(xa);
    }
    function S() {
      O.fullscreenElement || O.fullscreen || O.webkitIsFullscreen || O.msFullscreenElement || P.fullScreen ? (jb(xa, "id", "blog2slide-root"), e[1].parentNode.insertBefore(Da, e[1]), c(), O.onkeydown = d) : za && (Wa(Da), cb(xa, "id"), cb(za, "id"), za = O.onkeydown = q);
    }
    function c() {
      za && cb(za, "id");
      g = 0 < g ? r < g ? r : g : 0;
      za = e[g];
      jb(za, "id", "blog2slide-current");
    }
    function d(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++g, c();
      } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
        --g, c();
      }
    }
    Bc = K && 0 >= Sa.conpare(Ta, "0.9");
    Ob = !(7.2 > M || Bc);
    cc = function(a) {
      b ? Ma ? O.write('<script src="' + a + '">\x3c/script>') : eb("[DynamicScvriptLoader] Document already loaded! " + a) : Ma || t.length ? t.push(a) : N(a);
    };
    dc = function(a) {
      b ? Y("[DynamicScvriptLoader] " + a + " loaded.") : a === k ? N(t.shift()) : eb(a + " <> " + k);
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
          h ? pc[0].src = a : ra(pb, "script", {src:a});
        }
      };
    }
    var R = [], fa = 5.5 <= B && 8 > B ? "keypress" : "keydown";
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
              pa && (w = a.naturalWidth + 4 + "px", Aa(a, "width", w));
              kb(f, "jsPica");
              for (v = f; v = Ga(v);) {
                if (Za(v, "caption")) {
                  kb(v, "jsCap");
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
      tb(function(a, f) {
        for (a = -1; f = R[++a];) {
          Ba(f.u, fa, D), Ba(f.F, "click", D), Ba(f.u, "click", J);
        }
      });
    }
    var Z = ["jsSidebarFixer1", "jsSidebarFixer2"], ia = !(9 > B || M || 1 <= K && 1.3 > K || Cc), qa = !(5 > vb || 2.2 > Mb || 6 > ha(12) || Fa(30) && 534 > Ua || Fa(32) || 7 > B || 9 > M || 1 > K), ub = qa || 6 === B || 1 > K, lb = 7.5 > M, ya, La, Ra, Oa = Xc && xc, m = 0, l = 0, x, y, z, n;
    Rc || tc || (zb(function(a) {
      if (a) {
        if (!gb) {
          return !0;
        }
        a = -1;
        var f;
        ya = rb("jsSide");
        La = gb;
        if (!ya) {
          return !0;
        }
        yb(F);
        ic(F);
        Ra = Gb(gc(ya), "div", {id:"jsSidebarFixer"});
        ca(P, "blur", T);
        for (lc(Ra, ea); 1 < Ya(ya).length;) {
          Ra.appendChild(Ya(ya)[1]);
        }
        for (; f = Z[++a];) {
          Oc(rb(f), U);
        }
        B || Eb || 2 > bb || (x = Pa.perspective !== q || Pa.MozPerspective !== q || Pa["-webkit-perspective"] !== q);
        F();
        return !0;
      }
    }), tb(function() {
      for (var a = -1, f; f = Z[++a];) {
        Pc(rb(f), U);
      }
      Ba(P, "blur", T);
      Nc(Ra, ea);
    }));
    var Q, u, L, p, A, H, ba, ja;
    zb(function(a) {
      if (a) {
        if (!gb) {
          return !0;
        }
        var f = Ya(sa);
        a = Gb(f[0], "div");
        if (qa) {
          Ha(a, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; f.length;) {
            a.appendChild(f.shift());
          }
          .9 > K || (Ha(a, "width:100%;height:100%;overflow:auto;position:relative"), Ha(ob, "overflow:hidden"), Ha(sa, "overflow:hidden"));
          a = Ic(a, "div");
          Ha(a, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ra(a, "div", q, Oa ? "transform" + (x ? "3D" : "") : qa ? "pos:fixed" : "pos:absolute");
        f = ra(a, "div");
        Q = ra(f, "span");
        u = ra(f, "span");
        L = ra(a, "div");
        p = ra(a, "div");
        Ha(p, "position:absolute;left:0;top:0;width:54px;background:#242");
        H = ra(a, "div");
        Ha(H, "position:absolute;left:0;width:54px;background:#363");
        A = ra(a, "div");
        Ha(A, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ba = ra(H, "div");
        Ha(ba, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Qa(function() {
      function a(X, V, da, Xa) {
        var oa = Xa ? "div" : "cite";
        if (0 === V.indexOf("urn:isbn:")) {
          V = V.substr(9).toUpperCase().split("-").join("");
          if (13 === V.length) {
            V = V.toString().slice(3, -1);
            for (var ka = 0, Ja = 0; 9 > Ja; Ja++) {
              ka += (V.charAt(Ja) - 0) * (10 - Ja);
            }
            ka = (11 - ka % 11) % 11;
            ka = 10 === ka ? "X" : ka.toString();
            V += ka;
          }
          10 === V.length && (V = "//www.amazon.co.jp/exec/obidos/ASIN/" + V + "/itozyun-22/ref=nosim/");
        }
        da = Xa ? Gb(gc(w), oa, {className:da}) : ra(w, oa, {className:da});
        ra(da, "a", 0 === V.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:V} : {href:V}, X);
      }
      if (gb) {
        for (var f = hb(gb, "blockquote"), w, E = -1, W, v; w = f[++E];) {
          W = Ka(w, "title"), v = Ka(w, "cite"), W && v ? (cb(w, "title"), a(W, v, "js-bqLink", !0)) : v && (cb(w, "cite"), a(P.decodeURI ? decodeURI(v) : v, v, "js-bqCite"));
        }
      }
    });
    var Ca, xa, Da, za, e, g, r;
    Qa(function() {
      var a = rb("blog2slide-start");
      if (a) {
        var f = O.onfullscreenchange !== q ? "f" : O.onmozfullscreenchange !== q ? "mozF" : O.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Ca = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== f || Ca ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ca(a.firstChild, "click", aa), a = Ga(a), xa = Ga(a), e = hb(a, "section"), Da = O.createElement("h1"), Da.innerHTML = hb(sa, "h1")[0].innerHTML, r = e.length, e.splice(0, 0, Da), 0 !== f ? ca(O, f + "ullscreenchange", S) : B ? ca(O, "MSFullscreenChange", S, !1) : ic(S)) : Wa(a);
      }
    });
  })();
  var Db, Jb = !rc || .9 > K || 8 > M || 5.5 > B, db;
  (function() {
    function D(m) {
      return m === "" + m;
    }
    function J(m, l) {
      return Jb ? new aa(m, l) : new rc(m, l);
    }
    function F(m, l, x, y, z) {
      var n = S.codeBlocks[S.codeBlocks.length - 1], Q = C(), u = Q - d;
      switch(x || 0) {
        case 1:
          S.initRegExpCount++;
          S.initRegExpTotal += u;
          S.initRegExpMax < u && (S.initRegExpMax = u, S.initRegExpSource = z.toString(), S.initRegExpInstance = z);
          break;
        case 2:
          n.decorateCount++;
          n.decorateTime += u;
          break;
        case 3:
          n.updateDOMTime += u;
      }
      if (Q - c < t && !y) {
        return d = Q, m(l);
      }
      ta(T, {U:m, X:l});
    }
    function T(m) {
      c = d = C();
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
      var l = b, x = l.m, y = x[0], z = x[2], n = l.D, Q = l.s, u = l.$.shift(), L = l.R;
      if (u) {
        var p = L[u], A;
        if (!(0 <= p)) {
          if (A = y[u.charAt(0)]) {
            var H = u.match(A[1]);
            p = A[0];
          } else {
            for (p = 0, y = -1; A = z[++y];) {
              if (H = u.match(A[1])) {
                p = A[0];
                break;
              }
            }
          }
          !(A = D(p)) || H && D(H[1]) || (A = !1, p = 11);
          A || (L[u] = p);
        }
        z = l.v;
        L = u.length;
        l.v += L;
        if (A) {
          A = H[1];
          y = u.indexOf(A);
          var ba = A.length, ja = y + ba;
          H[2] && (ja = L - H[2].length, y = ja - ba);
          m(n + z, u.substr(0, y), x);
          if (ba && I(p, A)) {
            m(n + z + y, A);
            var Ca = !0;
          }
          m(n + z + ja, u.substr(ja), x);
          l.h && l.h.length && (b = l.h.shift());
          Ca || (b !== l ? F(pa, q, 2) : F(U, q, 2));
        } else {
          Q.push(n + z, p), F(U, q, 2);
        }
      } else {
        l.l ? (b = l.l.h.shift()) ? F(pa, q, 2) : (b = l.l, F(U, q, 2)) : F(lb, q, 2);
      }
    }
    function ea(m) {
      if (Z.length) {
        var l = Z.shift(), x = na[l];
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
        var y = x.nodeType;
        l = 1 === y ? l ? m : x : 3 === y ? R.test(x.nodeValue) ? m : l : l;
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), C = Kb.now || function() {
      return +new Kb();
    }, aa, S = {useRegExpCompat:Jb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var c = C();
    var d, b, h, k, t = 5 > B ? 60 : 5.5 > B ? 0 : Jb ? 20 : 10, N, R;
    db = [function(m) {
      P.RegExpCompat = aa = m;
    }, function() {
      N = J("^\\s*<");
      R = J("\\S");
    }];
    Jb || (db[1](), db = q);
    var fa = function() {
      var m = b, l = m.V, x = qa(m.B, m.O), y = m.o = x.o;
      m.I = x.I;
      I(l, y) || (b = q, F(Oa, q, 0, !0));
    };
    var pa = function() {
      var m = b;
      m.$ = m.o.match(m.m[1]) || [];
      m.s.push(m.D, 0);
      F(U, q, 2);
    };
    var Z = [];
    var ia = function(m) {
      function l(p) {
        var A = p;
        0 <= p && (A = wa[p]);
        0 <= A[1] && (A[1] = x(A[1]));
        return A;
      }
      function x(p) {
        var A = p;
        return 0 <= p && (A = na[p], !A.exec) ? (Z.push(p), p) : A;
      }
      var y = b, z = Db[m];
      D(z) && (z = Db[m] = Db[z]);
      var n = z[0];
      if (0 <= n) {
        n = G[n];
        if (0 <= n["-num"]) {
          var Q = n["-num"];
          delete n["-num"];
          for (var u = -1; 9 > u;) {
            n["" + ++u] = Q;
          }
        }
        z[0] = n;
      }
      for (var L in n) {
        n[L] = l(n[L]);
      }
      z[1] = x(z[1]);
      n = z[2];
      u = 0;
      for (Q = n.length; u < Q; ++u) {
        n[u] = l(n[u]);
      }
      Z.length ? F(ea, m, 2) : (y.m ? y.l && (y.l.h[0].m = z) : y.m = z, F(pa, q, 1));
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
              y[Q] = "\n", n[Q << 1] = z++, n[Q++ << 1 | 1] = L;
            }
          }
        } else if (3 === p || 4 === p) {
          if (p = L.nodeValue) {
            p = l ? p.split("\r\n").join("\n").split("\r").join("\n") : p.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), y[Q] = p, n[Q << 1] = z, z += p.length, n[Q++ << 1 | 1] = L;
          }
        }
      }
      var y = [], z = 0, n = [], Q = 0;
      x(m);
      var u = y.join("");
      "\n" === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1));
      return {o:u, I:n};
    };
    var ub = function(m, l, x) {
      function y(p) {
        var A = p.nodeType;
        if (1 === A && !Za(p, "nocode")) {
          if ("BR" === Na(p)) {
            z(p), p.parentNode && Wa(p);
          } else {
            for (p = p.firstChild; p; p = p.nextSibling) {
              y(p);
            }
          }
        } else if ((3 === A || 4 === A) && x) {
          var H = p.nodeValue, ba = H.indexOf("\r\n"), ja = 2;
          -1 === ba && (ba = H.indexOf("\n"), ja = 1);
          -1 === ba && (ba = H.indexOf("\r"));
          -1 !== ba && (A = H.substr(0, ba), p.nodeValue = A, (H = H.substr(ba + ja)) && hc(p, H), z(p), A || Wa(p));
        }
      }
      function z(p) {
        function A(ba, ja) {
          var Ca = ja ? ba.cloneNode(!1) : ba, xa = ba.parentNode;
          if (xa) {
            xa = A(xa, 1);
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
        p = A(p.nextSibling, 0);
        for (var H; (H = p.parentNode) && 1 === H.nodeType;) {
          p = H;
        }
        Q.push(p);
      }
      for (var n = O.createElement("li"); m.firstChild;) {
        n.appendChild(m.firstChild);
      }
      for (var Q = [n], u = 0; u < Q.length; ++u) {
        y(Q[u]);
      }
      if (l === (l | 0)) {
        if (10 <= l && 7.2 > M) {
          var L = O.createElement("ol");
          L.innerHTML = '<li value="' + l + '">' + n.innerHTML + "</li>";
          Q[0] = L.firstChild;
        } else {
          jb(n, "value", l);
        }
      }
      L = ra(m, "ol", {className:"linenums"});
      m = Math.max(0, l - 1 | 0) || 0;
      u = 0;
      for (l = Q.length; u < l; ++u) {
        n = Q[u], Sb(n, "L" + (u + m) % 10), n.firstChild || Jc(n, "\u00a0"), L.appendChild(n);
      }
    };
    var lb = function() {
      var m = b, l = m.o, x = l.length, y = 0, z = m.I, n = z.length, Q = 0, u = m.s, L = u.length, p = 0;
      u[L] = x;
      var A, H;
      for (H = A = 0; H < L;) {
        u[H] !== u[H + 2] ? (u[A++] = u[H++], u[A++] = u[H++]) : H += 2;
      }
      L = A;
      for (H = A = 0; H < L;) {
        var ba = u[H], ja = u[H + 1];
        for (H += 2; H + 2 <= L && u[H + 1] === ja;) {
          H += 2;
        }
        u[A++] = ba;
        u[A++] = ja;
      }
      u.length = A;
      m = m.B;
      L = "";
      m && (L = m.style.display, Aa(m, "display", "none"));
      for (; Q < n;) {
        A = z[Q + 2] || x;
        ba = u[p + 2] || x;
        H = Math.min(A, ba);
        ja = z[Q + 1];
        var Ca;
        if (1 !== ja.nodeType && (Ca = l.substring(y, H))) {
          9 > B && (Ca = Ca.split("\n").join("\r"));
          var xa = Gb(ja, "span", {className:la[u[p + 1]]}, Ca);
          Wa(ja);
          y < A && (z[Q + 1] = hc(xa, l.substring(H, A)));
        }
        y = H;
        y >= A && (Q += 2);
        y >= ba && (p += 2);
      }
      m && Aa(m, "display", L);
      b = q;
      F(Oa, q, 3, !0);
    };
    var ya = [], La;
    S.readyTime = C() - c;
    zb(function(m) {
      if (m) {
        m = [sb("pre"), sb("code"), sb("xmp")];
        for (var l = 0; l < m.length; ++l) {
          for (var x = 0, y = m[l].length; x < y; ++x) {
            Ra(m[l][x]);
          }
        }
        return !0;
      }
    });
    var Ra = function(m) {
      ya.push(m);
      La = ya.length;
      1 === La && (qc ? ta(qc, Oa) : db ? db.push(function() {
        ta(Oa);
      }) : ta(Oa));
    };
    var Oa = function() {
      function m(Q, u) {
        return (Q.split(u)[1] || "").split(" ")[0];
      }
      if (!b) {
        La !== ya.length && k && k(La - ya.length, La);
        var l = ya.shift();
        if (l) {
          c = C();
          if (Za(l, "prettyprint") && !Za(l, "prettyprinted")) {
            for (var x = !1, y = l.parentNode; y !== sa; y = y.parentNode) {
              var z = Na(y);
              if (("PRE" === z || "XMP" === z || "CODE" === z) && Za(y, "prettyprint")) {
                x = !0;
                break;
              }
            }
            if (!x) {
              x = l.className;
              kb(l, "prettyprinted");
              y = !1;
              if (!y) {
                y = m(x, "lang-") || m(x, "language-");
                var n;
                !y && (n = ma(l)) && "CODE" === Na(n) && (y = m(n.className, "lang-") || m(n.className, "language-"));
              }
              z = Na(l);
              "PRE" === z || "XMP" === z ? z = 1 : (z = l.currentStyle, n = O.defaultView, z = (z = z ? z.whiteSpace : n && n.getComputedStyle ? n.getComputedStyle(l, null).getPropertyValue("white-space") : 0) && "pre" === z.substr(0, 3));
              n = !1;
              (n = "true" === n || +n) || (n = m(x, "linenums:") || Za(l, "linenums"), n = n.length ? +n : n);
              n && ub(l, n, z);
              b = {V:y, B:l, aa:n, O:z, D:0, v:0, R:{}, s:[]};
              S.codeBlocks.push({elm:l, lang:y, readyTime:C() - c, decorateTime:0, decorateCount:0, updateDOMTime:0});
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
  var pc = O.scripts || sb("script");
  var Ia = pc[pc.length - 1].src.split("/");
  --Ia.length;
  "js" === Ia[Ia.length - 1] && --Ia.length;
  (Ia = Ia.join("/")) && (Ia += "/");
  Y("[p_assetUrl] " + Ia);
  var Rc = Wc || "1" === Ka(sa, "mob");
  Nb = (Rc ? "mb" : "pc") + "/";
  Qa(function() {
    var D;
    (D = rb("logger")) || alert("#logger not found!");
    D ? (Y = bz, eb = function(J) {
      ra(D, "DIV", {style:{color:"red"}}, J);
    }, P.onerror = function(J, F, T) {
      eb(J + ", " + F + ", " + T);
      return !0;
    }) : P.console ? (Y = console.log, eb = console.error) : M ? (Y = fb, eb = opera.postError) : Y = eb = fb;
    for (; Qb.length;) {
      Y(Qb.shift());
    }
    for (; Rb.length;) {
      Y(Rb.shift());
    }
    Qb = Rb = q;
    function bz(J) {
      ra(D, "DIV", q, J);
    }
    bz = !1;
  });
  6.1 > vb && (yb ? yb(ec) : ca(P, "scroll", ec));
  tb(Ec);
  6.1 > vb && (yb ? yb(fc) : ca(P, "scroll", fc));
  tb(Fc);
  10 > B && (11 !== Uc || 5 !== B) || (9 > M || 1 > K || !qb && !P.addEventListener ? O.write('<link href="' + Ia + "css/" + Nb + bc + '" rel="stylesheet"' + (8 > M ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > M || 1.5 > K || 532 >= Ua || 8 > bb) && Qa(function() {
    ra(pb, "link", {href:Ia + "css/" + Nb + bc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Jb) {
    if (Ob) {
      var qc = function(D) {
        P.RegExpCompat = bz;
        qc = q;
        cc(Ia + "js/regexpcompat.js");
        function bz(J) {
          for (var F; F = db.shift();) {
            F(J);
          }
          db = q;
          ta(D);
          dc(Ia + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      P.RegExpCompat = function(D) {
        for (var J; J = db.shift();) {
          J(D);
        }
        db = q;
        dc(Ia + "js/regexpcompat.js");
      }, cc(Ia + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

