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
var oa, hb;
(function(Ua, E, vb, nc, ib, J, oc, Pc, $a, Qc, q) {
  function na(C) {
    if (Ua[0] === C) {
      return Va === Va + "" ? $a(Va) : Va;
    }
  }
  function Ma(C) {
    var H = Ua[3];
    if (Ua[2] === C) {
      return H === H + "" ? $a(H) : H;
    }
  }
  var ha = J.body, Na = ha.style, wb, ob, pb, Va = Ua[1], G = na(2) || na(3), qb = na(7), Gb = na(5) || na(6), U = na(8) || na(9), S = na(11) || na(12), Ub = S && 0 <= Ua.conpare(Va, "1.9.1"), Vb = na(13), Ka = na(15), xb = na(16) || na(17), pc = na(10) || na(25), ab = na(20) || na(22), Lc = na(23), Wb = na(21), qc = na(24), rc = ab && $a(oc.userAgent.split("Edg/")[1]), Mc = $a(oc.appVersion.split("Trident/")[1]) + 4, Xb = Ma(35) || Ma(36) || Ma(37), Yb = (qb ? "ie5mac" : 5.5 > G ? "ie5win" : 6 > 
  G ? "ie55" : 10 > G ? "ie" + (G | 0) : 7.2 > U ? "opr70" : 8 > U ? "opr72" : 9.5 > U ? "opr" + (U | 0) : S && !Ub ? 1.4 <= S ? "gck19" : 1.3 <= S ? "gck13" : 1 <= S ? "gck12" : 0.9 <= S ? "gck09" : 0.8 <= S ? "gck08" : "gck07" : "modern") + ".css", Mb = "", Nc = Ma(1) || Ma(2) || Ma(3) || Ma(4) || Ma(8) || Ma(9) || Ma(10), sc, tc = Na.transform !== q ? "transform" : Na["-o-transform"] !== q ? "-o-transform" : Na["-ms-transform"] !== q ? "-ms-transform" : Na.MozTransform !== q ? "-moz-transform" : 
  Na["-webkit-transform"] !== q ? "-webkit-transform" : "", Oa = [], uc = [], Ra = [], vc, wc, Nb, xc, Zb, $b, Aa, Hb, Ib, yc, Ob = [], Pb = [], ac, zc, bc, Ac;
  (function() {
    function C() {
      for (var M, a = 0, b = +new ib(); a < ka.length;) {
        b < ka[0].t ? ++a : (M = ka.splice(a, 1)[0], M.f(M.p));
      }
      fa = ka.length ? setTimeout(C, K) : 0;
    }
    function H() {
      for (var M, a = 0; a < N.length; ++a) {
        M = N[a], M.f();
      }
    }
    function D() {
      ra && (ra = clearInterval(ra));
    }
    function V() {
      fa && (fa = clearTimeout(fa));
    }
    oa = function(M) {
      Ob.push(M);
    };
    hb = function(M) {
      Pb.push(M);
    };
    Ib = function(M) {
      N.length || (ra = setInterval(H, T));
      N.push({f:M, C:++la});
      return la;
    };
    yc = function(M) {
      for (var a = N.length, b; b = N[--a];) {
        if (b.C === M) {
          N.splice(a, 1);
          N[0] || D();
          break;
        }
      }
      return 0;
    };
    ac = function() {
      ra && (D(), ra = setInterval(H, T));
    };
    zc = D;
    var N = [], T = 500, la = 0, ra;
    if (5 > G || qb) {
      E._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    Aa = function(M, a, b) {
      ka.length || (fa = setTimeout(C, K));
      ka.push({f:M, p:a, C:++X, t:+new ib() + (K < b ? b : K)});
      return X;
    };
    Hb = function(M) {
      for (var a = ka.length, b; b = ka[--a];) {
        if (b.C === M) {
          ka.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    bc = function() {
      fa && (V(), fa = setTimeout(C, K));
    };
    Ac = V;
    var ka = [], K = 16, X = 0, fa;
    if (5 > G || qb) {
      E._wdb_ontimer = C, C = "_wdb_ontimer()";
    }
  })();
  var rb, yb, sb, Da, jb, Bc, cc, sa, Jb, Cc, Dc, dc, bb, tb, Wa, Ha, ub, cb, zb, Ec, Qb, Xa, kb, Fc, Ba, Ea, Gc;
  (function() {
    function C(a, b, l) {
      var w = ["<", a], d = 1, v, x;
      if (b) {
        for (v in b) {
          var F = b[v];
          if (null != F && "" !== F) {
            if ("style" === v) {
              w[++d] = ' style="';
              for (x in F) {
                for (var ja = ++d, pa, Y = [], ca = x.split(""), wa = ca.length; wa;) {
                  pa = ca[--wa], "A" <= pa && "Z" >= pa && (pa = "-" + pa.toLowerCase()), Y[wa] = pa;
                }
                w[ja] = Y.join("") + ":" + F[x] + ";";
              }
              w[++d] = '"';
            } else {
              "className" === v && (v = "class"), w[++d] = " " + v + '="' + F + '"';
            }
          }
        }
      }
      w[++d] = ">";
      null != l && (X && "font" !== a ? w[++d] = "<FONT>" + l + "</FONT>" : w[++d] = l);
      w[++d] = "</" + a + ">";
      return w.join("");
    }
    function H(a) {
      var b = a.split("-"), l = b.length;
      if (2 > l) {
        return a;
      }
      for (; 1 < l;) {
        a = b[--l], b[l] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function D(a) {
      return V(J, a);
    }
    function V(a, b) {
      for (var l = "*" === b && 6 > G ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), w = [], d = 0, v = l.length; d < v; ++d) {
        w[d] = l[d];
      }
      return w;
    }
    function N(a) {
      return X ? a.parentElement : a.parentNode;
    }
    function T(a, b, l, w, d, v) {
      if (X) {
        var x = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var F = jb(2 > a ? Da(b) : b);
        F = 2 > a ? F.indexOf(b) + a : F.length;
        b.insertAdjacentHTML(x, C(l, w, d));
        b = jb(b)[F];
        null != d && ("font" === l ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (fa) {
        b = J.createElement(C(l, w));
      } else {
        b = v ? J.createElementNS("http://www.w3.org/2000/svg", l) : J.createElement(l);
        if (w) {
          for (x in w) {
            if ((l = w[x]) || 0 === l) {
              switch(x) {
                case "class":
                case "className":
                  Qb(b, l);
                  break;
                case "style":
                  a = b.style;
                  for (F in l) {
                    a[F] = l[F];
                  }
                  break;
                default:
                  ub(b, x, l);
              }
            }
          }
        }
        M || null != d && la(b, d);
      }
      return b;
    }
    function la(a, b) {
      if (X) {
        return T(2, a, "font", q, b);
      }
      var l = J.createTextNode("" + b);
      a.appendChild(l);
      return l;
    }
    function ra(a, b) {
      9 > G ? a.className = b : a.setAttribute("class", b);
    }
    function ka(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function K(a) {
      return 5.5 > G ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var X = 5 > G;
    wb = D("html")[0];
    ob = D("head")[0];
    rb = function(a) {
      return E[a] || J[a] || J.getElementById(a);
    };
    yb = D;
    sb = V;
    Da = N;
    jb = function(a) {
      a = X ? a.children : a.childNodes;
      for (var b = [], l = a.length; l;) {
        b[--l] = a[l];
      }
      return b;
    };
    Bc = function(a) {
      var b = !(7.03 < U && 7.2 > U) && a.children;
      a = b ? b : a.childNodes;
      for (var l = [], w = a.length, d = -1, v; w;) {
        if (v = a[--w], b || 1 === v.nodeType) {
          X && "FONT" === v.tagName || (l[++d] = v);
        }
      }
      return l;
    };
    cc = function(a) {
      return X ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    sa = function(a, b, l, w, d) {
      b = T(2, a, b, l, w, d);
      X || (a.appendChild(b), M && null != w && la(b, w));
      return b;
    };
    Jb = function(a, b, l, w, d) {
      b = T(0, a, b, l, w, d);
      X || (N(a).insertBefore(b, a), M && null != w && la(b, w));
      return b;
    };
    Cc = function(a, b, l, w, d) {
      b = T(1, a, b, l, w, d);
      var v;
      X || ((v = a.nextSibling) ? Da(v).insertBefore(b, v) : Da(a).appendChild(b), M && null != w && la(b, w));
      return b;
    };
    Dc = la;
    dc = function(a, b) {
      var l;
      if (X) {
        return T(1, a, "font", q, b);
      }
      var w = J.createTextNode("" + b);
      (l = a.nextSibling) ? Da(a).insertBefore(w, l) : Da(a).appendChild(w);
      return w;
    };
    bb = function(a) {
      Da(a) ? X ? a.outerHTML = "" : Da(a).removeChild(a) : oa("[DOM] p_DOM_remove(), No parentNode!");
    };
    tb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== wb;) {
        if (b = Da(b), a === b) {
          return !0;
        }
      }
    };
    var fa = 9 > G, M = fa;
    Wa = function(a) {
      return a.tagName.toUpperCase();
    };
    Ha = function(a, b) {
      8 > U && (b = H(b));
      return a.getAttribute(b) || "";
    };
    ub = function(a, b, l) {
      U && "tab-index" === b ? "-1" === l ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", l) : (8 > U && (b = H(b)), a.setAttribute(b, l));
    };
    cb = function(a, b) {
      8 > U && (b = H(b));
      a.removeAttribute(b);
    };
    zb = function(a, b) {
      8 > U && (b = H(b));
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ec = function(a) {
      return a.className;
    };
    Qb = ra;
    Xa = ka;
    kb = function(a, b) {
      var l;
      if (!ka(a, b)) {
        if (l = a.className) {
          l += " ";
        }
        ra(a, l + b);
      }
    };
    Fc = function(a, b) {
      if (ka(a, b)) {
        var l = a.className.split(" ");
        l.splice(l.indexOf(b), 1);
        ra(a, l.join(" "));
      }
    };
    Ba = function(a, b, l) {
      a.style[b] = l;
    };
    Ea = function(a, b) {
      var l, w = -1, d;
      if (5.5 > G) {
        if (l = K(a)) {
          for (l = l.split(";"); d = l[++w];) {
            a.style[d.split(":")[0]] = "";
          }
        }
        if (b) {
          for (w = -1, l = b.split(";"); d = l[++w];) {
            var v = d.split(":")[0];
            a.style[v] = d.substr(v.length + 1);
          }
        }
      } else if (7.1 > U) {
        if (a.setAttribute("style", ""), b) {
          for (l = b.split(";"); d = l[++w];) {
            d = d.split(":"), a.style[d[0]] = d[1];
          }
        }
      } else {
        9 > U || 1 > S ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    Gc = K;
    Oa.splice(0, 0, function() {
      function a(ja) {
        ja = jb(ja);
        for (var pa = ja.length, Y, ca, wa; pa;) {
          if (Y = ja[--pa], ca = Y.nodeType, 8 === ca) {
            b && x.push(Y);
          } else if (1 === ca) {
            switch(ca = Wa(Y), "/" === ca.charAt(0) && (ca = ca.substr(1), F[ca] = !0), ca) {
              case "STYLE":
                if (7.2 <= U && 9 > U) {
                  break;
                }
              case "LINK":
                X || w || tb(ob, Y) || v.push(Y);
                break;
              case "META":
                ca = Ha(Y, "name") || Ha(Y, "property");
                for (wa = d.length; wa;) {
                  if (0 === ca.indexOf(d[--wa])) {
                    x.push(Y);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (zb(Y, "async")) {
                  break;
                }
                if (l) {
                  Y.innerText = "";
                  l = !1;
                  break;
                }
              case "NOSCRIPT":
                if (zb(Y, "skip-cleanup")) {
                  break;
                }
              case "!":
                x.push(Y);
                break;
              case "SOURCE":
                E.HTMLSourceElement || x.push(Y);
                break;
              default:
                F[ca] ? x.push(Y) : jb(Y).length && a(Y);
            }
          }
        }
        for (; v[0];) {
          ob.appendChild(v.pop());
        }
        for (; x[0];) {
          bb(x.pop());
        }
      }
      pb = rb("jsMain");
      var b = !(8 > U || 5 > G || qb || .9 > S), l = wc, w = 7 > G, d = ["og:", "twitter:", "fb:"], v = [], x = [], F = {};
      a(wb);
    });
  })();
  var da, ta, Pa, lb, ec, Ab, Bb, fc, gc, hc, ic, Hc, Ic, Cb, va, jc;
  (function() {
    function C() {
      return g ? y ? 2 : z ? 3 : 1 : 0;
    }
    function H(e) {
      ta(E, "load", H);
      H = q;
      V(Oa, e, !0);
      Oa = q;
    }
    function D(e, f) {
      Bb(function() {
        var r = fa(e);
        f(r);
        r.addListener(f);
        return !0;
      });
    }
    function V(e, f, r) {
      for (var k = 0; k < e.length; ++k) {
        !0 === e[k](f) && (e.splice(k, 1), --k);
      }
      r && (e.length = 0);
    }
    function N(e, f, r) {
      Oa || a.length || Aa(T);
      a.push(e, f, r);
    }
    function T() {
      var e = a, f;
      for (a = []; f = e.shift();) {
        V(f, e.shift(), e.shift());
      }
    }
    function la(e) {
      var f = e || event;
      e = l[f.type];
      var r = -1, k, L;
      G ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : d && (f.K = f.stopPropagation, f.stopPropagation = function() {
        L = !0;
      });
      for (; k = e[++r];) {
        k.j === this ? (this.g = k.i, G && (f.currentTarget = this), this.g(f), G ? (this.g = vb, this.g = q) : delete this.g) : 7.2 > U && this === J && k.j === E && (E.g = k.i, E.g(f), delete E.g);
      }
      if (G) {
        return f.preventDefault = f.stopPropagation = vb, f.preventDefault = f.stopPropagation = q, f.returnValue;
      }
      d && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (x = !0), L && !x && f.K(), f.K = f.stopPropagation = q);
    }
    function ra() {
      var e = 9 === M.offsetWidth;
      Cb !== e && (N(uc, Cb = e), oa("p_cssAvailability:" + Cb));
    }
    function ka() {
      !Oa && P && (Hb(P), P = Aa(K));
    }
    function K() {
      P = 0;
      V(t);
    }
    function X(e) {
      Oa || V(p, e);
    }
    var fa = E.matchMedia, M, a = [];
    Oa.push(function() {
      D = q;
      M = sa(ha, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Pa(function() {
        a.length && Aa(T);
      });
    });
    da = function(e, f, r, k) {
      if (v) {
        e.addEventListener(f, r, k ? b ? k : k.capture || !0 === k : !1);
      } else {
        var L = {j:e, i:r};
        k = l[f];
        var c = "on" + f, m, u;
        if (k) {
          for (m = k.length; u = k[--m];) {
            if (u.j === e && u.i === r) {
              return;
            }
          }
          l[f].push(L);
        } else {
          l[f] = k = [L], w || (f = e[c], "function" === typeof f && f !== la && k.unshift({j:e, i:f}));
        }
        w ? e.attachEvent(c, la) : e[c] = la;
      }
    };
    ta = function(e, f, r, k) {
      if (v) {
        e.removeEventListener(f, r, k ? b ? k : k.capture || !0 === k : !1);
      } else {
        k = l[f];
        f = "on" + f;
        var L, c, m;
        if (k) {
          for (L = k.length; c = k[--L];) {
            c.j === e && (c.i === r ? k.splice(L, 1) : m = !0);
          }
          m || (w ? e.detachEvent(f, la) : G ? (e[f] = vb, e[f] = null) : delete e[f]);
        }
      }
    };
    var b = !G && !qb && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), l = {}, w = !1, d = 525.13 > Ka, v = !d && !qb && E.addEventListener, x;
    d && wb.addEventListener("click", function(e) {
      if (x) {
        return x = !1, e.preventDefault(), !1;
      }
    });
    Pa = function(e) {
      Oa ? Oa.push(e) : alert("Load event has already been dispatched!");
    };
    lb = function(e) {
      F && F.push(e);
    };
    var F = [];
    if (419.3 >= Ka) {
      var ja = function() {
        if (ja) {
          var e = J.readyState;
          "loaded" === e || "complete" === e ? (ja = q, H()) : Aa(ja);
        }
      };
      Aa(ja);
    } else {
      da(E, "load", H);
    }
    G || .9 <= S && 1.8 > S ? da(E, "unload", function(e) {
      V(F, e, !0);
    }) : F = q;
    Bb = function(e) {
      uc.push(e);
    };
    Pa(function() {
      ra();
      Ib(ra);
    });
    hc = function(e, f) {
      if (pa) {
        da(e, "focusin", f);
      } else if (Y) {
        da(e, "DOMFocusIn", f);
      } else {
        if (wa) {
          db || (db = Ib(La));
        } else if (ca || eb) {
          da(J, "focus", Ya, !0);
        } else {
          return;
        }
        for (var r = fb, k = 0, L = r.length; k < L; ++k) {
          if (r[k] === e && r[k + 1] === f) {
            return;
          }
        }
        r.push(e, f);
      }
    };
    ic = function(e, f) {
      if (pa) {
        da(e, "focusin", f);
      } else if (Y) {
        da(e, "DOMFocusIn", f, !1);
      } else {
        for (var r = fb, k = 0, L = r.length; k < L; ++k) {
          if (r[k] === e && r[k + 1] === f) {
            r.splice(k, 2);
            r.length || (wa ? db = yc(db) : (ca || eb) && ta(J, "focus", Ya, !0));
            break;
          }
        }
      }
    };
    var pa = 6 <= G || Gb || 52 <= S || 15 <= ab || 534 <= Ka || 5 <= xb || Lc || 4 <= Wb || 4 <= qc || 11.6 <= na(8) || 12 <= na(9), Y = 8 <= U || ab || Wb || qc || Ka || xb, ca = 8 > U, wa = 6 > G, eb = 52 > S || Vb;
    if (eb || ca) {
      var fb = [];
      var Ya = function(e) {
        var f = fb, r = ca ? J.activeElement : e.target;
        ca && (e = {type:"focusin", target:r, preventDefault:function() {
          e.preventDefault();
        }, stopPropagation:function() {
          e.stopPropagation();
        }});
        for (var k = 0, L = f.length; k < L; ++k) {
          var c = f[k];
          (c === r || tb(c, r)) && f[k + 1].call(c, e);
        }
      };
    } else if (wa) {
      fb = [];
      var db, Qa, xa, La = function() {
        xa = E.onerror;
        E.onerror = Sa;
        var e = J.activeElement;
        if (Qa !== e) {
          Qa = e;
          for (var f = fb, r, k = 0, L = f.length; k < L; ++k) {
            r = f[k], (r === e || tb(r, e)) && f[k + 1].apply(r, [{target:e}]);
          }
        }
        E.onerror = xa;
        xa = q;
      }, Sa = function() {
        oa("error!");
        E.onerror = xa;
        xa = Qa = q;
        return !0;
      };
    }
    gc = function(e) {
      Ra && Ra.push(e);
    };
    var h = 60 > S || Vb, g, z, y;
    if (89 <= S || 89 <= ab || Xb && 79 <= rc || fa && (fa("(forced-colors:none)").matches || fa("(forced-colors:active)").matches)) {
      jc = !0, D("(forced-colors:active)", function(e) {
        g = e.matches;
        va = C();
        N(Ra, va);
        oa("(forced-colors:active):" + va);
      });
    } else if (10 <= G || Gb || Xb && rc) {
      jc = !0, D("(-ms-high-contrast:black-on-white)", function(e) {
        g = z = e.matches;
        va !== C() && (va = C(), N(Ra, va), oa("(-ms-high-contrast:black-on-white):" + va));
      }), D("(-ms-high-contrast:white-on-black)", function(e) {
        g = y = e.matches;
        va !== C() && (va = C(), N(Ra, va), oa("(-ms-high-contrast:white-on-black):" + va));
      }), D("(-ms-high-contrast:active)", function(e) {
        g = e.matches;
        va !== C() && (va = C(), N(Ra, va), oa("(-ms-high-contrast:active):" + va));
      });
    } else if (Xb && (G || S && 0 <= Ua.conpare(Va, "1.8.1") || Vb)) {
      var B = function() {
        function e(k, L) {
          if (L && "transparent" === k) {
            return 382.5;
          }
          if ("#" === k.charAt(0)) {
            return parseInt("0x" + k.substr(1, 2), 16) + parseInt("0x" + k.substr(3, 2), 16) + parseInt("0x" + k.substr(5, 2), 16);
          }
          var c = k.split("(")[1].split(",");
          return $a(c[0]) + $a(c[1]) + $a(c[2]);
        }
        var f = J.defaultView;
        var r = f ? f.getComputedStyle(M, null) : M.currentStyle;
        f = (r && r.color || "").split(" ").join("");
        r = (r && r.backgroundColor || "").split(" ").join("");
        f && (g = "#123456" !== f && "rgb(18,52,86)" !== f, z = e(f) < e(r, !0), y = e(f) > e(r, !0), va !== C() && (va = C(), oa("(forced-colors-fallback):" + va), N(Ra, va, h)));
      };
      Bb(function(e) {
        if (e) {
          return Ba(M, "color", "#123456"), Ba(M, "backgroundColor", "#123456"), h ? (B(), Ra = q) : Ib(B), B = q, !0;
        }
      });
    } else {
      Ra = C = q;
    }
    fc = function(e) {
      Oa || alert("p_listenImageReady is called back for images present at load time.");
      n.push(e);
    };
    var n = [], O = 7.5 <= U && 8 > U;
    O && function() {
      for (var e = J.images, f = e.length, r; f;) {
        r = e[--f], r.J = r.src, cb(r, "src");
      }
    }();
    Pa(function() {
      function e() {
        k ? (L = r[--k], O && ub(L, "src", L.J), vc(f, O ? L.J : L.src)) : n = q;
      }
      function f(m) {
        V(n, {G:L, H:m, V:!k}, !k);
        e();
      }
      var r = J.images || yb("img"), k = r.length;
      if (12 > U || 532 > Ka) {
        e();
      } else {
        for (; k;) {
          var L = r[--k];
          var c = 9 > G ? L.complete : 0 <= L.naturalWidth ? L.naturalWidth : L.width;
          N(n, {G:L, H:c, V:!k}, !k);
        }
        n = q;
      }
    });
    ec = function(e) {
      t.push(e);
    };
    var t = [], P;
    da(E, "resize", ka);
    lb(function() {
      P && clearTimeout(P);
      ta(E, "resize", ka);
    });
    Ab = function(e) {
      p.push(e);
    };
    var p = [], A = 0, I = 1 > S || 1.2 <= S && 1.8 > S || 7.2 >= U;
    I ? Ib(function() {
      var e = S ? E.scrollY : E.pageYOffset;
      A !== e && (A = e, X());
    }) : da(E, "scroll", X, {passive:!0});
    lb(function() {
      I || ta(E, "scroll", X, {passive:!0});
    });
    Hc = function(e, f) {
      if (Z) {
        da(e, "wheel", f, {passive:!1});
      } else if (ia) {
        da(e, "mousewheel", f, !1);
      } else if (ya) {
        da(e, "MozMousePixelScroll", f, !1);
      } else if (za) {
        for (var r = Ia, k = 0, L = r.length; k < L; ++k) {
          if (r[k] === e && r[k + 1] === f) {
            return;
          }
        }
        r.length || da(J, "DOMMouseScroll", Ja, !1);
        r.push(e, f);
      }
    };
    Ic = function(e, f) {
      if (Z) {
        ta(e, "wheel", f, {passive:!1});
      } else if (ia) {
        ta(e, "mousewheel", f, !1);
      } else if (ya) {
        ta(e, "MozMousePixelScroll", f, !1);
      } else if (za) {
        for (var r = Ia, k = 0, L = r.length; k < L; ++k) {
          if (r[k] === e && r[k + 1] === f) {
            r.splice(k, 2);
            r.length || ta(J, "DOMMouseScroll", Ja, !1);
            break;
          }
        }
      }
    };
    var Z = 9 <= G || Gb || 17 <= S || 31 <= ab || 537.7 <= Ka, ia = 6 <= G || Gb || 9 <= U || ab || 522 <= Ka || xb, ya = Ub, za = S && 0 <= Ua.conpare(Va, "0.9.7") && !Ub;
    if (za) {
      var Ia = [], Ja = function(e) {
        for (var f = Ia, r = e.target, k, L = 0, c = f.length; L < c; ++L) {
          k = f[L], tb(k, r) && f[L + 1].call(k, e);
        }
      };
    }
  })();
  (function() {
    9 > G && Pa(function() {
      var C = sa(ha, "div");
      Ea(C, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sc = 1 < C.offsetHeight;
      Ea(C, "");
      bb(C);
    });
    vc = function(C, H) {
      function D() {
        N || !T || V.complete ? (oa("[imageTest] timer -> img.complete. img.width=" + V.width), Aa(C, !!V.width), V.onerror = V.onload = vb, V = C = q) : (--T, Aa(D));
      }
      var V = new Image(), N, T = 99;
      oa("[imageTest] start.");
      V.onerror = function() {
        oa("[imageTest] error!");
        N = !0;
      };
      V.onload = function() {
        oa("[imageTest] onload.");
        N = !0;
      };
      V.src = H;
      Aa(D);
    };
  })();
  (function() {
    fc(function(d) {
      var v = d.G;
      d = d.H;
      var x = Da(v);
      !Xa(x, "aBodyRoot") && d ? kb(x, "img-loaded") : d || Ha(v, "alt") || Ba(v, "display", "none");
    });
    5.5 <= G && 8 > G && Ra && gc(function(d) {
      for (var v = sb(ha, "a"), x = v.length, F = 0; F < x; ++F) {
        v[F].hideFocus = !d;
      }
    });
    if (!jc && Ra) {
      var C, H = function() {
        C = sa(ob, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Fa + "css/" + Mb + "hc/" + Yb});
        if (tc || 5.5 <= G && 9 > G && sc) {
          kb(ha, "jsCanRotate"), oa("jsCanRotate!");
        }
        H = q;
      };
      gc(function(d) {
        d && !C ? H() : C && (d ? ob.appendChild(C) : bb(C));
      });
    }
    U && Pa(function() {
      for (var d = sb(ha, "a"), v = d.length, x = 0, F; x < v; ++x) {
        F = d[x], "-1" === Ha(F, "tabIndex") ? cb(F, "tabIndex") : Ha(F, "href") && ub(F, "tabIndex", "0");
      }
      d = sb(ha, "input");
      x = 0;
      for (v = d.length; x < v; ++x) {
        F = d[x], "hidden" === Ha(F, "type") && cb(F, "tabIndex");
      }
    });
    if (S && 0 > Ua.conpare(Va, "0.9.5")) {
      var D, V, N, T, la;
      Pa(function() {
        da(J, "keydown", ra);
        hc(ha, ka);
        S && (da(E, "blur", b), da(ha, "click", a), da(J, "keyup", M));
      });
      lb(function() {
        ta(J, "keydown", ra);
        ic(ha, ka);
        S && (ta(E, "blur", b), ta(ha, "click", a), ta(J, "keyup", M));
      });
      var ra = Ka ? function(d) {
        9 === d.keyCode && (D = d.shiftKey, T && K(T, !0) && (T = q, d.stopPropagation(), d.preventDefault(), fa()));
      } : function(d) {
        16 === d.keyCode ? D = !0 : 9 === d.keyCode && (V = +new ib());
      }, ka = Ka ? function(d) {
        T = d.target;
      } : function(d) {
        var v = d.target;
        if (T === v) {
          N = q;
        } else if (N) {
          v === N ? (d.stopPropagation(), fa(!0)) : (v.blur && w(v), d.preventDefault(), fa());
        } else {
          if (d = T) {
            T = q, w(d);
          }
          N = v;
          fa(!0);
        }
      }, K = function(d, v) {
        var x = !v && +new ib(), F = "nextSibling", ja = "firstChild";
        D && (v || x - 99 < V && V <= x) && (F = "previousSibling", ja = "lastChild");
        for (N = q; d !== ha;) {
          if (pa) {
            x = d;
            var pa = !1;
          } else {
            x = d[F];
          }
          if (x) {
            if (1 === x.nodeType) {
              if (X(x)) {
                return N = x, !0;
              }
              d = (pa = x[ja]) || x;
            } else {
              d = x;
            }
          } else {
            d = d.parentNode;
          }
        }
      }, X = function(d, v) {
        function x() {
          return "-1" !== Ha(d, "tab-index");
        }
        function F() {
          return 0 <= d.offsetHeight * d.offsetWidth;
        }
        if (d.focus) {
          var ja;
          switch({A:v ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Wa(d)]) {
            case 1:
              if (zb(d, "href") && x() && F()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ha(d, "type") && x() && !zb(d, "disabled") && F()) {
                return !0;
              }
              break;
            case 3:
              if (x() && !zb(d, "disabled") && F()) {
                return !0;
              }
              break;
            default:
              if ((ja = Ha(d, "tab-index")) && "-1" !== ja && F()) {
                return !0;
              }
          }
        }
      }, fa = function(d) {
        S && (la = 0);
        N && (Ka || da(N, "blur", l), T = N, N = q, d || T.focus());
      };
      if (S) {
        var M = function(d) {
          16 === d.keyCode && (D = !1);
        }, a = function(d) {
          var v = d.target;
          if (T && X(v, !0)) {
            var x = T;
            T = q;
            w(x);
            N = v;
            d.stopPropagation();
            d.preventDefault();
            fa();
          }
        }, b = function(d) {
          d.target === J && (N = q);
        }, l = function(d) {
          d = d.target;
          ta(d, "blur", l);
          T === d && (T = q, K(d) && (la || (la = Aa(fa))));
        }, w = function(d) {
          ta(d, "blur", l);
          d.blur();
        };
      }
    }
  })();
  (function() {
    function C(c) {
      var m = Y.length, u, Q, ea, R;
      if (13 === (c.keyCode || c.ba) || c.type !== ca) {
        for (; m;) {
          var aa = Y[--m];
          if (aa.F === this || aa.u === this) {
            m = aa.F;
            var W = u = aa.u;
            if (aa.P) {
              if (Ba(m, "width", aa.$), m.src = aa.Z, Qb(W, aa.T), m = aa.L) {
                Ea(m, aa.S), Fc(m, "jsCapLarge");
              }
            } else {
              if (Q = aa.N) {
                delete aa.N;
                if (aa.M) {
                  for (; u = Da(u);) {
                    if (!Xa(u, "caption")) {
                      var ba = Wa(u);
                      if ("DIV" === ba || "P" === ba || "BLOCKQUOT" === ba || "LI" === ba || "DD" === ba || "TD" === ba || "TH" === ba || "FORM" === ba || "PRE" === ba) {
                        break;
                      }
                    }
                  }
                  u = (u.offsetWidth | 0) - 4;
                  1600 < u && (u = 1600);
                  if (2 === aa.M) {
                    Q = Q.split("=");
                    ba = Q.length;
                    if (ea = Q[ba - 1]) {
                      (R = $a(ea.substr(1))) && ea === "s" + R ? Q[ba - 1] = "w" + u : Q[ba] = "w" + u;
                    }
                    Q = Q.join("=");
                  } else {
                    Q = Q.split("/");
                    ba = Q.length;
                    if (ea = Q[ba - 2]) {
                      (R = $a(ea.substr(1))) && ea === "s" + R ? Q[ba - 2] = "w" + u : Q.splice(ba - 1, 0, "w" + u);
                    }
                    Q = Q.join("/");
                  }
                }
                aa.X = Q;
              }
              aa.T = Ec(W);
              kb(W, "jsPicaLarge");
              Ba(m, "width", "");
              m.src = aa.X;
              if (m = aa.L) {
                Ea(m, ""), kb(m, "jsCapLarge");
              }
            }
            aa.P = !aa.P;
            break;
          }
        }
        H(c);
      }
    }
    function H(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function D(c) {
      for (var m = arguments, u = 0, Q = m.length; u < Q; ++u) {
        if (isFinite(m[u])) {
          return m[u];
        }
      }
      return 0;
    }
    function V(c) {
      var m = n;
      if (Cb) {
        if (O && !m) {
          if (+new ib() < O) {
            return;
          }
          O = q;
        }
        7 === c ? (K("t"), t = 0) : (K("s"), t && (t = Hb(t)), y = D(E.pageYOffset, E.scrollY, xa.scrollTop, ha.scrollTop));
        m ? (n = T(q, m[0], m[1])) || (O = +new ib() + 99) : T();
        fa();
      } else {
        n = q;
      }
    }
    function N() {
      K("w.blur");
    }
    function T(c, m, u) {
      function Q(Za) {
        W = Za;
        if (g) {
          ba = g + ":translate" + (B ? "3D(0," : "(0,") + Za + (B ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Za) {
          if (!Qa && (db || Ya)) {
            var Rb = La.offsetWidth;
          }
          ba = Ya ? "position:fixed;width:" + Rb + "px;top:" + (Za - ea + ma) + "px" : Qa ? "top:" + Za + "px" : "position:absolute;left:0;top:" + Za + "px";
          db && ba && (ba += ";" + (0 > Za ? "clip:rect(" + -Za + "px " + Rb + "px " + Ca + "px 0)" : Za + Ca < Kb ? "clip:rect(0 " + Rb + "px " + Ca + "px 0)" : "clip:rect(0 " + Rb + "px " + (Kb - Za) + "px 0)"), 8 > G || (ba = ba.split(" ").join(",")));
        }
      }
      var ea = y, R = Sa, aa = La.offsetTop === R.offsetTop, W = 0, ba = "", Ta = !0;
      if (aa) {
        for (var qa = 0, ma = 0, Ga = R; Ga && Ga !== ha;) {
          ma += Ga.offsetTop, Ga = Ga.offsetParent;
        }
        W = z;
        Ga = D(E.innerHeight, xa.offsetHeight);
        var kc = R.offsetHeight, Ca = h.offsetHeight, Kb = Ca < kc ? kc : Ca, mb = ea, Db = mb + Ga, Sb = ma, Tb = Sb + Kb, Jc = ma + W, Oc = Jc + Ca;
        R = mb < Sb ? Sb : mb;
        var nb = Tb < Db ? Tb : Db, Eb = nb - R;
        mb = Tb <= mb;
        Db = Db <= Sb;
        if (m !== q) {
          Ta = ma + m;
          c = Ta + u;
          if (mb || Db) {
            return Ga <= u ? (m = ma, K("4.1.1")) : mb ? (m = Tb - u, K("4.1.2")) : (m = ma + u - Ga, K("4.1.3")), O = q, E.scroll(D(E.pageXOffset, E.scrollX, xa.scrollLeft, ha.scrollLeft), m), K("4.1.*"), n;
          }
          Ca <= Eb ? (qa = 3, K("4.2")) : u <= Eb ? Ca - m <= Eb ? (qa = 2, K("4.3.1")) : R <= Ta && c <= nb ? R < ma + W && (qa = 4, K("4.3.2")) : R <= Ta && Ta <= nb ? (qa = 5, K("4.3.3")) : R <= c && c <= nb ? (qa = 4, K("4.3.4")) : c < R ? (qa = 4, K("4.3.5")) : (qa = 5, K("4.3.6")) : (qa = 4, K("4.4"));
          Ta = q;
        } else {
          c !== q ? Ca <= Eb ? (qa = 7, Ta = !1, K("3.1")) : (W -= 60 * c, qa = nb - ma - Ca, c = R - ma, W < qa ? (W = qa, K("3.2.1")) : c < W ? (W = c, K("3.2.2")) : K("3.2.3"), qa = 6) : kc <= Ca || (mb ? (qa = 1, K("2.2.1")) : Db ? K("2.2.2") : Ca <= Eb ? (qa = 3, K("2.3")) : R < Jc ? (qa = 3, K("2.4.1")) : Oc < nb ? (qa = 2, K("2.4.2")) : ea < ma + Ca - Eb ? K("2.4.3") : (qa = 2, K("2.4.4")));
        }
        switch(qa) {
          case 0:
            Q(0);
            break;
          case 1:
            Q(Kb - Ca);
            break;
          case 2:
            Q(nb - ma - Ca);
            break;
          case 3:
            Q(R - ma);
            break;
          case 4:
            Q(R - ma - m);
            break;
          case 5:
            Q(nb - ma - (m + u));
          case 6:
            Q(W);
        }
        M(W, Ca, ma, Kb, Ga, m || "-", u || "-");
      } else {
        M(W, "-", "-", "-", "-", "-", "-");
      }
      Ea(h, ba);
      z = W;
      return aa && Ta;
    }
    function la(c) {
      if (Cb) {
        K("m");
        S && (y = D(E.pageYOffset, E.scrollY, xa.scrollTop, ha.scrollTop), fa());
        var m = this !== c.target, u = m && D(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        m && u && T(9 >= u ? -9 >= u ? -3 : u : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ra(c) {
      if (Cb) {
        var m = S && 0 > Ua.conpare(Va, "0.9.4"), u = c.target, Q = La.firstChild, ea = 0;
        if (tb(Q, u)) {
          K(c.type || "ie5focus");
          da(u, "blur", ka);
          if (g) {
            m = u.getBoundingClientRect(), c = m.bottom - m.top, ea = m.top - Q.getBoundingClientRect().top | 0;
          } else {
            for (c = u.offsetHeight; u && (S ? tb(Q, u) : Q !== u);) {
              if (m) {
                for (; u.previousSibling;) {
                  u = u.previousSibling, ea += u.offsetHeight || 0;
                }
                u = u.parentNode;
              } else {
                ea += u.offsetTop, u = u.offsetParent;
              }
            }
          }
          fb ? (n = [ea, c], t && Hb(t), t = Aa(V, 7, 1 > S || 536 > Ka || 14 > ab ? 500 : 0)) : (y = D(E.pageYOffset, E.scrollY, xa.scrollTop, ha.scrollTop), T(q, ea, c));
          a(ea, c);
        }
      }
    }
    function ka() {
      ta(this, "blur", ka);
      a(0, 0);
    }
    function K(c) {
      A && (za && (za = Hb(za)), za = Aa(X, 0, 1400), A.innerHTML += " " + c);
    }
    function X() {
      A.innerHTML = "";
    }
    function fa() {
      Z && (Ba(Z, "top", (y / 10 | 0) + "px"), p.innerHTML = " scrl:" + (y | 0));
    }
    function M(c, m, u, Q, ea, R, aa) {
      ia && (Ba(ia, "top", ((c + u) / 10 | 0) + "px"), Ba(ia, "height", (m / 10 | 0) + "px"), Ba(Z, "height", (ea / 10 | 0) + "px"), Ba(I, "height", (ha.scrollHeight / 10 | 0) + "px"), P.innerHTML = "conY:" + u + "/sidY" + c + ", conH:" + Q + "/sidH" + m + ", focY:" + R + " focH:" + aa);
    }
    function a(c, m) {
      ya && (Ba(ya, "top", (c / 10 | 0) + "px"), Ba(ya, "height", (m / 10 | 0) + "px"));
    }
    function b() {
      Ia.call(Ja);
    }
    function l() {
      J.fullscreenElement || J.fullscreen || J.webkitIsFullscreen || J.msFullscreenElement || E.fullScreen ? (ub(Ja, "id", "blog2slide-root"), r[1].parentNode.insertBefore(e, r[1]), w(), J.onkeydown = d) : f && (bb(e), cb(Ja, "id"), cb(f, "id"), f = J.onkeydown = q);
    }
    function w() {
      f && cb(f, "id");
      k = 0 < k ? L < k ? L : k : 0;
      f = r[k];
      ub(f, "id", "blog2slide-current");
    }
    function d(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++k, w();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --k, w();
      }
    }
    xc = S && 0 >= Ua.conpare(Va, "0.9");
    Nb = !(7.2 > U || xc);
    Zb = function(c) {
      v ? Oa ? J.write('<script src="' + c + '">\x3c/script>') : hb("[DynamicScvriptLoader] Document already loaded! " + c) : Oa || ja.length ? ja.push(c) : pa(c);
    };
    $b = function(c) {
      v ? oa("[DynamicScvriptLoader] " + c + " loaded.") : c === F ? pa(ja.shift()) : hb(c + " <> " + F);
    };
    var v = !Nb, x = Nb && 7.5 > U, F;
    if (!v) {
      var ja = [];
      x && (wc = !0);
      Pa(function() {
        pa(ja.shift());
      });
      var pa = function(c) {
        if (F = c) {
          x ? lc[0].src = c : sa(ob, "script", {src:c});
        }
      };
    }
    var Y = [], ca = 5.5 <= G && 8 > G ? "keypress" : "keydown";
    if (!pc) {
      var wa = Na.transition !== q || Na["-o-transition"] !== q || Na["-moz-transition"] !== q || Na["-webkit-transition"] !== q;
      fc(function(c) {
        if (c.H && pb) {
          c = c.G;
          var m = Da(c), u = "", Q;
          if ("A" === Wa(m) && 1 === Bc(m).length) {
            var ea = Ha(m, "href");
            var R = ea.split("?")[0].split("#")[0].split(".");
            R = (R[R.length - 1] || "").toLowerCase();
            if ((Q = 0 < ea.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + R + ".")) {
              da(m, ca, C);
              da(c, "click", C);
              da(m, "click", H);
              wa && (u = c.naturalWidth + 4 + "px", Ba(c, "width", u));
              kb(m, "jsPica");
              for (R = m; R = Da(R);) {
                if (Xa(R, "caption")) {
                  kb(R, "jsCap");
                  var aa = R;
                  var W = Gc(aa);
                  break;
                }
              }
              Y.push({u:m, L:aa, S:W, Z:c.src, $:u, N:ea, F:c, M:Q ? 0 < ea.indexOf("/img/a/") ? 2 : 3 : 0 < ea.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      lb(function(c, m) {
        for (c = -1; m = Y[++c];) {
          ta(m.u, ca, C), ta(m.F, "click", C), ta(m.u, "click", H);
        }
      });
    }
    var eb = ["jsSidebarFixer1", "jsSidebarFixer2"], fb = !(9 > G || U || 1 <= S && 1.3 > S), Ya = !(5 > xb || 2.2 > Wb || 6 > na(12) || Ma(30) && 534 > Ka || Ma(32) || 7 > G || 9 > U || 1 > S), db = Ya || 6 === G || 1 > S, Qa = 7.5 > U, xa, La, Sa, h, g = ha.getBoundingClientRect && tc, z = 0, y = 0, B, n, O, t;
    Kc || pc || (Bb(function(c) {
      if (c) {
        if (!pb) {
          return !0;
        }
        c = -1;
        var m;
        xa = "CSS1Compat" !== J.compatMode ? ha : wb || ha;
        La = rb("jsSide");
        Sa = pb;
        if (!La) {
          return !0;
        }
        Ab(V);
        ec(V);
        h = Jb(cc(La), "div", {id:"jsSidebarFixer"});
        da(E, "blur", N);
        for (hc(h, ra); 1 < jb(La).length;) {
          h.appendChild(jb(La)[1]);
        }
        for (; m = eb[++c];) {
          Hc(rb(m), la);
        }
        G || Gb || 2 > ab || (B = Na.perspective !== q || Na.MozPerspective !== q || Na["-webkit-perspective"] !== q);
        V();
        return !0;
      }
    }), lb(function() {
      for (var c = -1, m; m = eb[++c];) {
        Ic(rb(m), la);
      }
      ta(E, "blur", N);
      ic(h, ra);
    }));
    var P, p, A, I, Z, ia, ya, za;
    Bb(function(c) {
      if (c) {
        if (!pb) {
          return !0;
        }
        var m = jb(ha);
        c = Jb(m[0], "div");
        if (Ya) {
          Ea(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; m.length;) {
            c.appendChild(m.shift());
          }
          Ea(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = Cc(c, "div");
          Ea(wb, "overflow:hidden");
          Ea(ha, "overflow:hidden");
          Ea(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        sa(c, "div", q, g ? "transform" + (B ? "3D" : "") : Ya ? "pos:fixed" : "pos:absolute");
        m = sa(c, "div");
        P = sa(m, "span");
        p = sa(m, "span");
        A = sa(c, "div");
        I = sa(c, "div");
        Ea(I, "position:absolute;left:0;top:0;width:54px;background:#242");
        ia = sa(c, "div");
        Ea(ia, "position:absolute;left:0;width:54px;background:#363");
        Z = sa(c, "div");
        Ea(Z, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ya = sa(ia, "div");
        Ea(ya, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Pa(function() {
      function c(aa, W, ba, Ta) {
        var qa = Ta ? "div" : "cite";
        if (0 === W.indexOf("urn:isbn:")) {
          W = W.substr(9).toUpperCase().split("-").join("");
          if (13 === W.length) {
            W = W.toString().slice(3, -1);
            for (var ma = 0, Ga = 0; 9 > Ga; Ga++) {
              ma += (W.charAt(Ga) - 0) * (10 - Ga);
            }
            ma = (11 - ma % 11) % 11;
            ma = 10 === ma ? "X" : ma.toString();
            W += ma;
          }
          10 === W.length && (W = "//www.amazon.co.jp/exec/obidos/ASIN/" + W + "/itozyun-22/ref=nosim/");
        }
        ba = Ta ? Jb(cc(u), qa, {className:ba}) : sa(u, qa, {className:ba});
        sa(ba, "a", 0 === W.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:W, tabIndex:U ? "0" : q} : {href:W, tabIndex:U ? "0" : q}, aa);
      }
      if (pb) {
        for (var m = sb(pb, "blockquote"), u, Q = -1, ea, R; u = m[++Q];) {
          ea = Ha(u, "title"), R = Ha(u, "cite"), ea && R ? (cb(u, "title"), c(ea, R, "js-bqLink", !0)) : R && (cb(u, "cite"), c(E.decodeURI ? decodeURI(R) : R, R, "js-bqCite"));
        }
      }
    });
    var Ia, Ja, e, f, r, k, L;
    Pa(function() {
      var c = rb("blog2slide-start");
      if (c) {
        var m = J.onfullscreenchange !== q ? "f" : J.onmozfullscreenchange !== q ? "mozF" : J.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Ia = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== m || Ia ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', da(c.firstChild, "click", b), c = Da(c), Ja = Da(c), r = sb(c, "section"), e = J.createElement("h1"), e.innerHTML = sb(ha, "h1")[0].innerHTML, L = r.length, r.splice(0, 0, e), 0 !== m ? da(J, m + "ullscreenchange", l) : G ? da(J, "MSFullscreenChange", l, !1) : ec(l)) : bb(c);
      }
    });
  })();
  var Fb, Lb = !nc || .9 > S || 8 > U || 5.5 > G, gb;
  (function() {
    function C(h) {
      return h === "" + h;
    }
    function H(h, g) {
      return Lb ? new a(h, g) : new nc(h, g);
    }
    function D(h, g, z, y, B) {
      var n = b.codeBlocks[b.codeBlocks.length - 1], O = M(), t = O - w;
      switch(z || 0) {
        case 1:
          b.initRegExpCount++;
          b.initRegExpTotal += t;
          b.initRegExpMax < t && (b.initRegExpMax = t, b.initRegExpSource = B.toString(), b.initRegExpInstance = B);
          break;
        case 2:
          n.decorateCount++;
          n.decorateTime += t;
          break;
        case 3:
          n.updateDOMTime += t;
      }
      if (O - l < F && !y) {
        return w = O, h(g);
      }
      Aa(V, {U:h, Y:g});
    }
    function V(h) {
      l = w = M();
      h.U(h.Y);
    }
    function N(h, g) {
      h && Fb[h] || (h = ja.test(g) ? "default-markup" : "default-code");
      var z = !!Fb[h];
      z && D(eb, h, 0, !0);
      return z;
    }
    function T() {
      function h(za, Ia, Ja) {
        Ia && (g.h = g.h || [], g.h.push({l:g, B:g.B, O:1, s:O, D:za, o:Ia, m:Ja, R:{}, v:0}));
      }
      var g = d, z = g.m, y = z[0], B = z[2], n = g.D, O = g.s, t = g.aa.shift(), P = g.R;
      if (t) {
        var p = P[t], A;
        if (!(0 <= p)) {
          if (A = y[t.charAt(0)]) {
            var I = t.match(A[1]);
            p = A[0];
          } else {
            for (p = 0, y = -1; A = B[++y];) {
              if (I = t.match(A[1])) {
                p = A[0];
                break;
              }
            }
          }
          !(A = C(p)) || I && C(I[1]) || (A = !1, p = 11);
          A || (P[t] = p);
        }
        B = g.v;
        P = t.length;
        g.v += P;
        if (A) {
          A = I[1];
          y = t.indexOf(A);
          var Z = A.length, ia = y + Z;
          I[2] && (ia = P - I[2].length, y = ia - Z);
          h(n + B, t.substr(0, y), z);
          if (Z && N(p, A)) {
            h(n + B + y, A);
            var ya = !0;
          }
          h(n + B + ia, t.substr(ia), z);
          g.h && g.h.length && (d = g.h.shift());
          ya || (d !== g ? D(ca, q, 2) : D(T, q, 2));
        } else {
          O.push(n + B, p), D(T, q, 2);
        }
      } else {
        g.l ? (d = g.l.h.shift()) ? D(ca, q, 2) : (d = g.l, D(T, q, 2)) : D(db, q, 2);
      }
    }
    function la(h) {
      if (wa.length) {
        var g = wa.shift(), z = X[g];
        if (z.pop) {
          X[g] = z = H(z[0], z[1]);
        } else if (C(z)) {
          X[g] = z = H(z);
        } else {
          return la(h);
        }
        D(la, h, 1, !1, z);
      } else {
        D(eb, h);
      }
    }
    function ra(h) {
      for (var g, z = h.firstChild; z; z = z.nextSibling) {
        var y = z.nodeType;
        g = 1 === y ? g ? h : z : 3 === y ? pa.test(z.nodeValue) ? h : g : g;
      }
      return g === h ? q : g;
    }
    Fb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ka = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], K = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], X = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    fa = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), M = ib.now || function() {
      return +new ib();
    }, a, b = {useRegExpCompat:Lb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var l = M();
    var w, d, v, x, F = 5 > G ? 60 : 5.5 > G ? 0 : Lb ? 20 : 10, ja, pa;
    gb = [function(h) {
      E.RegExpCompat = a = h;
    }, function() {
      ja = H("^\\s*<");
      pa = H("\\S");
    }];
    Lb || (gb[1](), gb = q);
    var Y = function() {
      var h = d, g = h.W, z = fb(h.B, h.O), y = h.o = z.o;
      h.I = z.I;
      N(g, y) || (d = q, D(Sa, q, 0, !0));
    };
    var ca = function() {
      var h = d;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.D, 0);
      D(T, q, 2);
    };
    var wa = [];
    var eb = function(h) {
      function g(p) {
        var A = p;
        0 <= p && (A = K[p]);
        0 <= A[1] && (A[1] = z(A[1]));
        return A;
      }
      function z(p) {
        var A = p;
        return 0 <= p && (A = X[p], !A.exec) ? (wa.push(p), p) : A;
      }
      var y = d, B = Fb[h];
      C(B) && (B = Fb[h] = Fb[B]);
      var n = B[0];
      if (0 <= n) {
        n = ka[n];
        if (0 <= n["-num"]) {
          var O = n["-num"];
          delete n["-num"];
          for (var t = -1; 9 > t;) {
            n["" + ++t] = O;
          }
        }
        B[0] = n;
      }
      for (var P in n) {
        n[P] = g(n[P]);
      }
      B[1] = z(B[1]);
      n = B[2];
      t = 0;
      for (O = n.length; t < O; ++t) {
        n[t] = g(n[t]);
      }
      wa.length ? D(la, h, 2) : (y.m ? y.l && (y.l.h[0].m = B) : y.m = B, D(ca, q, 1));
    };
    var fb = function(h, g) {
      function z(P) {
        var p = P.nodeType;
        if (1 === p) {
          if (!Xa(P, "nocode")) {
            for (p = P.firstChild; p; p = p.nextSibling) {
              z(p);
            }
            p = Wa(P);
            if ("BR" === p || "LI" === p) {
              y[O] = "\n", n[O << 1] = B++, n[O++ << 1 | 1] = P;
            }
          }
        } else if (3 === p || 4 === p) {
          if (p = P.nodeValue) {
            p = g ? p.split("\r\n").join("\n").split("\r").join("\n") : p.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), y[O] = p, n[O << 1] = B, B += p.length, n[O++ << 1 | 1] = P;
          }
        }
      }
      var y = [], B = 0, n = [], O = 0;
      z(h);
      var t = y.join("");
      "\n" === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1));
      return {o:t, I:n};
    };
    var Ya = function(h, g, z) {
      function y(p) {
        var A = p.nodeType;
        if (1 === A && !Xa(p, "nocode")) {
          if ("BR" === Wa(p)) {
            B(p), p.parentNode && bb(p);
          } else {
            for (p = p.firstChild; p; p = p.nextSibling) {
              y(p);
            }
          }
        } else if ((3 === A || 4 === A) && z) {
          var I = p.nodeValue, Z = I.indexOf("\r\n"), ia = 2;
          -1 === Z && (Z = I.indexOf("\n"), ia = 1);
          -1 === Z && (Z = I.indexOf("\r"));
          -1 !== Z && (A = I.substr(0, Z), p.nodeValue = A, (I = I.substr(Z + ia)) && dc(p, I), B(p), A || bb(p));
        }
      }
      function B(p) {
        function A(Z, ia) {
          var ya = ia ? Z.cloneNode(!1) : Z, za = Z.parentNode;
          if (za) {
            za = A(za, 1);
            var Ia = Z.nextSibling;
            za.appendChild(ya);
            for (var Ja = Ia; Ja; Ja = Ia) {
              Ia = Ja.nextSibling, za.appendChild(Ja);
            }
          }
          return ya;
        }
        for (; !p.nextSibling;) {
          if (p = p.parentNode, !p) {
            return;
          }
        }
        p = A(p.nextSibling, 0);
        for (var I; (I = p.parentNode) && 1 === I.nodeType;) {
          p = I;
        }
        O.push(p);
      }
      for (var n = J.createElement("li"); h.firstChild;) {
        n.appendChild(h.firstChild);
      }
      for (var O = [n], t = 0; t < O.length; ++t) {
        y(O[t]);
      }
      if (g === (g | 0)) {
        if (10 <= g && 7.2 > U) {
          var P = J.createElement("ol");
          P.innerHTML = '<li value="' + g + '">' + n.innerHTML + "</li>";
          O[0] = P.firstChild;
        } else {
          ub(n, "value", g);
        }
      }
      P = sa(h, "ol", {className:"linenums"});
      h = Math.max(0, g - 1 | 0) || 0;
      t = 0;
      for (g = O.length; t < g; ++t) {
        n = O[t], Qb(n, "L" + (t + h) % 10), n.firstChild || Dc(n, "\u00a0"), P.appendChild(n);
      }
    };
    var db = function() {
      var h = d, g = h.o, z = g.length, y = 0, B = h.I, n = B.length, O = 0, t = h.s, P = t.length, p = 0;
      t[P] = z;
      var A, I;
      for (I = A = 0; I < P;) {
        t[I] !== t[I + 2] ? (t[A++] = t[I++], t[A++] = t[I++]) : I += 2;
      }
      P = A;
      for (I = A = 0; I < P;) {
        var Z = t[I], ia = t[I + 1];
        for (I += 2; I + 2 <= P && t[I + 1] === ia;) {
          I += 2;
        }
        t[A++] = Z;
        t[A++] = ia;
      }
      t.length = A;
      h = h.B;
      P = "";
      h && (P = h.style.display, Ba(h, "display", "none"));
      for (; O < n;) {
        A = B[O + 2] || z;
        Z = t[p + 2] || z;
        I = Math.min(A, Z);
        ia = B[O + 1];
        var ya;
        if (1 !== ia.nodeType && (ya = g.substring(y, I))) {
          9 > G && (ya = ya.split("\n").join("\r"));
          var za = Jb(ia, "span", {className:fa[t[p + 1]]}, ya);
          bb(ia);
          y < A && (B[O + 1] = dc(za, g.substring(I, A)));
        }
        y = I;
        y >= A && (O += 2);
        y >= Z && (p += 2);
      }
      h && Ba(h, "display", P);
      d = q;
      D(Sa, q, 3, !0);
    };
    var Qa = [], xa;
    b.readyTime = M() - l;
    Bb(function(h) {
      if (h) {
        h = [yb("pre"), yb("code"), yb("xmp")];
        for (var g = 0; g < h.length; ++g) {
          for (var z = 0, y = h[g].length; z < y; ++z) {
            La(h[g][z]);
          }
        }
        return !0;
      }
    });
    var La = function(h) {
      Qa.push(h);
      xa = Qa.length;
      1 === xa && (mc ? Aa(mc, Sa) : gb ? gb.push(function() {
        Aa(Sa);
      }) : Aa(Sa));
    };
    var Sa = function() {
      function h(O, t) {
        return (O.split(t)[1] || "").split(" ")[0];
      }
      if (!d) {
        xa !== Qa.length && x && x(xa - Qa.length, xa);
        var g = Qa.shift();
        if (g) {
          l = M();
          if (Xa(g, "prettyprint") && !Xa(g, "prettyprinted")) {
            for (var z = !1, y = g.parentNode; y !== ha; y = y.parentNode) {
              var B = Wa(y);
              if (("PRE" === B || "XMP" === B || "CODE" === B) && Xa(y, "prettyprint")) {
                z = !0;
                break;
              }
            }
            if (!z) {
              z = g.className;
              kb(g, "prettyprinted");
              y = !1;
              if (!y) {
                y = h(z, "lang-") || h(z, "language-");
                var n;
                !y && (n = ra(g)) && "CODE" === Wa(n) && (y = h(n.className, "lang-") || h(n.className, "language-"));
              }
              B = Wa(g);
              "PRE" === B || "XMP" === B ? B = 1 : (B = g.currentStyle, n = J.defaultView, B = (B = B ? B.whiteSpace : n && n.getComputedStyle ? n.getComputedStyle(g, null).getPropertyValue("white-space") : 0) && "pre" === B.substr(0, 3));
              n = !1;
              (n = "true" === n || +n) || (n = h(z, "linenums:") || Xa(g, "linenums"), n = n.length ? +n : n);
              n && Ya(g, n, B);
              d = {W:y, B:g, ca:n, O:B, D:0, v:0, R:{}, s:[]};
              b.codeBlocks.push({elm:g, lang:y, readyTime:M() - l, decorateTime:0, decorateCount:0, updateDOMTime:0});
              D(Y);
              return;
            }
          }
          D(Sa, q, 0, !0);
        } else {
          v && v(b);
        }
      }
    };
    E.PR = {RegExpProxy:H, prettifyElement:La, registerCompleteHandler:function(h, g) {
      v = h;
      x = g;
    }};
  })();
  var lc = J.scripts || yb("script");
  var Fa = lc[lc.length - 1].src.split("/");
  --Fa.length;
  "js" === Fa[Fa.length - 1] && --Fa.length;
  (Fa = Fa.join("/")) && (Fa += "/");
  oa("[p_assetUrl] " + Fa);
  var Kc = Nc || "1" === Ha(ha, "mob");
  Mb = (Kc ? "mb" : "pc") + "/";
  Pa(function() {
    var C;
    (C = rb("logger")) || alert("#logger not found!");
    C ? (oa = function(H) {
      sa(C, "DIV", q, H);
    }, hb = function(H) {
      sa(C, "DIV", {style:{color:"red"}}, H);
    }, E.onerror = function(H, D, V) {
      hb(H + ", " + D + ", " + V);
      return !0;
    }) : E.console ? (oa = console.log, hb = console.error) : U ? (oa = vb, hb = opera.postError) : oa = hb = vb;
    for (; Ob.length;) {
      oa(Ob.shift());
    }
    for (; Pb.length;) {
      oa(Pb.shift());
    }
    Ob = Pb = q;
  });
  6.1 > xb && (Ab ? Ab(ac) : da(E, "scroll", ac));
  lb(zc);
  6.1 > xb && (Ab ? Ab(bc) : da(E, "scroll", bc));
  lb(Ac);
  10 > G && (11 !== Mc || 5 !== G) || (9 > U || 1 > S || !qb && !E.addEventListener ? J.write('<link href="' + Fa + "css/" + Mb + Yb + '" rel="stylesheet"' + (8 > U ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > U || 1.5 > S || 532 >= Ka || 8 > ab) && Pa(function() {
    sa(ob, "link", {href:Fa + "css/" + Mb + Yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Lb) {
    if (Nb) {
      var mc = function(C) {
        E.RegExpCompat = function(H) {
          for (var D; D = gb.shift();) {
            D(H);
          }
          gb = q;
          Aa(C);
          $b(Fa + "js/regexpcompat.js");
        };
        mc = q;
        Zb(Fa + "js/regexpcompat.js");
      };
    } else {
      E.RegExpCompat = function(C) {
        for (var H; H = gb.shift();) {
          H(C);
        }
        gb = q;
        $b(Fa + "js/regexpcompat.js");
      }, Zb(Fa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

