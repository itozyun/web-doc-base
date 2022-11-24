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
var Z, bb;
(function(Sa, B, yb, sc, ob, J, tc, Pc, Ta, Qc, r) {
  function X(w) {
    if (Sa[0] === w) {
      return Ua === Ua + "" ? Ta(Ua) : Ua;
    }
  }
  function Ca(w) {
    var C = Sa[3];
    if (Sa[2] === w) {
      return C === C + "" ? Ta(C) : C;
    }
  }
  var la = J.body, Da = la.style, pb, ib, cb, Ua = Sa[1], D = X(2) || X(3), Va = X(7), Wb = X(5) || X(6), O = X(8) || X(9), Q = X(11) || X(12), zb = Q && 0 <= Sa.conpare(Ua, "1.9.1"), Xb = X(13), Ab = X(15), uc = X(16) || X(17), vc = X(10) || X(25), Bb = X(20) || X(22);
  Bb || X(23) || X(21) || X(24);
  var wc = Bb && Ta(tc.userAgent.split("Edg/")[1]), Mc = Ta(tc.appVersion.split("Trident/")[1]) + 4, Yb = Ca(35) || Ca(36) || Ca(37), xc = !D && !Va && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Zb = (Va ? "ie5mac" : 5.5 > D ? "ie5win" : 6 > D ? "ie55" : 10 > D ? "ie" + (D | 0) : 7.2 > O ? "opr70" : 8 > O ? "opr72" : 9.5 > O ? "opr" + (O | 0) : Q && !zb ? 1.4 <= Q ? "gck19" : 
  1.3 <= Q ? "gck13" : 1 <= Q ? "gck12" : 0.9 <= Q ? "gck09" : 0.8 <= Q ? "gck08" : "gck07" : "modern") + ".css", Mb = "", Nc = Ca(1) || Ca(2) || Ca(3) || Ca(4) || Ca(8) || Ca(9) || Ca(10), yc, $b = Da.transform !== r ? "transform" : Da["-o-transform"] !== r ? "-o-transform" : Da["-ms-transform"] !== r ? "-ms-transform" : Da.MozTransform !== r ? "-moz-transform" : Da["-webkit-transform"] !== r ? "-webkit-transform" : "", Ea = [], zc = [], Ia = [], Ac, Bc, Nb, Cc, ac, bc, oa, Cb, Ob, Pb = [], Qb = 
  [], cc, Dc, dc, Ec;
  (function() {
    function w() {
      for (var a, k = 0, l = +new ob(); k < L.length;) {
        l < L[0].t ? ++k : (a = L.splice(k, 1)[0], a.f(a.p));
      }
      c = L.length ? setTimeout(w, ya) : 0;
    }
    function C() {
      for (var a, k = 0; k < F.length; ++k) {
        a = F[k], a.f();
      }
    }
    function v() {
      ma && (ma = clearInterval(ma));
    }
    function E() {
      c && (c = clearTimeout(c));
    }
    Z = function(a) {
      Pb.push(a);
    };
    bb = function(a) {
      Qb.push(a);
    };
    Ob = function(a) {
      F.length || (ma = setInterval(C, K));
      F.push({f:a, J:++aa});
      return aa;
    };
    cc = function() {
      ma && (v(), ma = setInterval(C, K));
    };
    Dc = v;
    var F = [], K = 500, aa = 0, ma;
    if (5 > D || Va) {
      B._wdb_onlooptimer = C, C = "_wdb_onlooptimer()";
    }
    oa = function(a, k, l) {
      L.length || (c = setTimeout(w, ya));
      L.push({f:a, p:k, J:++ja, t:+new ob() + (ya < l ? l : ya)});
      return ja;
    };
    Cb = function(a) {
      for (var k = L.length, l; l = L[--k];) {
        if (l.J === a) {
          L.splice(k, 1);
          break;
        }
      }
      return 0;
    };
    dc = function() {
      c && (E(), c = setTimeout(w, ya));
    };
    Ec = E;
    var L = [], ya = 16, ja = 0, c;
    if (5 > D || Va) {
      B._wdb_ontimer = w, w = "_wdb_ontimer()";
    }
  })();
  var db, Oa, ec, ta, eb, Fc, fc, da, Db, Gc, Hc, gc, Wa, Eb, Xa, Ja, jb, Ya, hc, Ic, Fb, Pa, fb, pa, va;
  (function() {
    function w(c, a, k) {
      var l = ["<", c], y = 1, G, M;
      if (a) {
        for (G in a) {
          var U = a[G];
          if (null != U && "" !== U) {
            if ("style" === G) {
              l[++y] = ' style="';
              for (M in U) {
                for (var fa = ++y, ka, R = [], V = M.split(""), na = V.length; na;) {
                  ka = V[--na], "A" <= ka && "Z" >= ka && (ka = "-" + ka.toLowerCase()), R[na] = ka;
                }
                l[fa] = R.join("") + ":" + U[M] + ";";
              }
              l[++y] = '"';
            } else {
              "className" === G && (G = "class"), l[++y] = " " + G + '="' + U + '"';
            }
          }
        }
      }
      l[++y] = ">";
      null != k && (L && "font" !== c ? l[++y] = "<FONT>" + k + "</FONT>" : l[++y] = k);
      l[++y] = "</" + c + ">";
      return l.join("");
    }
    function C(c) {
      return v(J, c);
    }
    function v(c, a) {
      var k = "*" === a && 6 > D ? "*" !== a ? c.all.tags(a.toUpperCase()) : c.all : c.getElementsByTagName(a), l = [], y = 0, G;
      for (G = k.length; y < G; ++y) {
        l[y] = k[y];
      }
      return l;
    }
    function E(c) {
      return L ? c.parentElement : c.parentNode;
    }
    function F(c, a, k, l, y, G) {
      if (L) {
        var M = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend";
        var U = eb(2 > c ? ta(a) : a);
        U = 2 > c ? U.indexOf(a) + c : U.length;
        a.insertAdjacentHTML(M, w(k, l, y));
        a = eb(a)[U];
        null != y && ("font" === k ? a.nodeType = 3 : a.children[0].nodeType = 3);
      } else if (ya) {
        a = J.createElement(w(k, l));
      } else {
        a = G ? J.createElementNS("http://www.w3.org/2000/svg", k) : J.createElement(k);
        if (l) {
          for (M in l) {
            if ((k = l[M]) || 0 === k) {
              switch(M) {
                case "class":
                case "className":
                  Fb(a, k);
                  break;
                case "style":
                  c = a.style;
                  for (U in k) {
                    c[U] = k[U];
                  }
                  break;
                default:
                  jb(a, M, k);
              }
            }
          }
        }
        ja || null != y && K(a, y);
      }
      return a;
    }
    function K(c, a) {
      if (L) {
        return F(2, c, "font", r, a);
      }
      var k = J.createTextNode("" + a);
      c.appendChild(k);
      return k;
    }
    function aa(c, a) {
      9 > D ? c.className = a : c.setAttribute("class", a);
    }
    function ma(c, a) {
      return -1 !== (" " + c.className + " ").indexOf(" " + a + " ");
    }
    var L = 5 > D;
    pb = C("html")[0];
    ib = C("head")[0];
    db = function(c) {
      return B[c] || J[c] || J.getElementById(c);
    };
    Oa = C;
    ec = v;
    ta = E;
    eb = function(c) {
      c = L ? c.children : c.childNodes;
      for (var a = [], k = c.length; k;) {
        a[--k] = c[k];
      }
      return a;
    };
    Fc = function(c) {
      var a = !(7.03 < O && 7.2 > O) && c.children;
      c = a ? a : c.childNodes;
      for (var k = [], l = c.length, y = -1, G; l;) {
        if (G = c[--l], a || 1 === G.nodeType) {
          L && "FONT" === G.tagName || (k[++y] = G);
        }
      }
      return k;
    };
    fc = function(c) {
      return L ? c.children.length ? c.children[0] : null : c.firstChild;
    };
    da = function(c, a, k, l, y) {
      a = F(2, c, a, k, l, y);
      L || (c.appendChild(a), ja && null != l && K(a, l));
      return a;
    };
    Db = function(c, a, k, l, y) {
      a = F(0, c, a, k, l, y);
      L || (E(c).insertBefore(a, c), ja && null != l && K(a, l));
      return a;
    };
    Gc = function(c, a, k, l, y) {
      a = F(1, c, a, k, l, y);
      var G;
      L || ((G = c.nextSibling) ? ta(G).insertBefore(a, G) : ta(c).appendChild(a), ja && null != l && K(a, l));
      return a;
    };
    Hc = K;
    gc = function(c, a) {
      var k;
      if (L) {
        return F(1, c, "font", r, a);
      }
      var l = J.createTextNode("" + a);
      (k = c.nextSibling) ? ta(c).insertBefore(l, k) : ta(c).appendChild(l);
      return l;
    };
    Wa = function(c) {
      ta(c) ? L ? c.outerHTML = "" : ta(c).removeChild(c) : Z("[DOM] p_DOM_remove(), No parentNode!");
    };
    Eb = function(c, a) {
      if (c.contains) {
        return c.contains(a);
      }
      for (; a && a !== pb;) {
        if (a = ta(a), c === a) {
          return !0;
        }
      }
    };
    var ya = 9 > D, ja = ya;
    Xa = function(c) {
      return c.tagName.toUpperCase();
    };
    Ja = function(c, a) {
      return c.getAttribute(a) || "";
    };
    jb = function(c, a, k) {
      c.setAttribute(a, k);
    };
    Ya = function(c, a) {
      c.removeAttribute(a);
    };
    hc = function(c, a) {
      return c.hasAttribute ? c.hasAttribute(a) : null != c.getAttribute(a);
    };
    Ic = function(c) {
      return c.className;
    };
    Fb = aa;
    Pa = ma;
    fb = function(c, a) {
      var k;
      if (!ma(c, a)) {
        if (k = c.className) {
          a = " " + a;
        }
        aa(c, k + a);
      }
    };
    pa = function(c, a, k) {
      c.style[a] = k;
    };
    va = function(c, a) {
      var k, l;
      if (5.5 > D) {
        if (k = c.style.cssText) {
          var y = -1;
          for (k = k.toLowerCase().split(";"); l = k[++y];) {
            c.style[l.split(":")[0]] = "";
          }
        }
        if (a) {
          for (y = -1, k = a.split(";"); l = k[++y];) {
            var G = l.split(":")[0];
            c.style[G] = l.substr(G.length + 1);
          }
        }
      } else if (7.1 > O) {
        if (c.setAttribute("style", ""), a) {
          for (k = a.split(";"); l = k[++y];) {
            l = l.split(":"), c.style[l[0]] = l[1];
          }
        }
      } else {
        9 > O || 1 > Q ? a ? c.setAttribute("style", a) : c.removeAttribute("style") : c.style.cssText = a;
      }
    };
    Ea.splice(0, 0, function() {
      function c(fa) {
        fa = eb(fa);
        for (var ka = fa.length, R, V, na; ka;) {
          if (R = fa[--ka], V = R.nodeType, 8 === V) {
            a && M.push(R);
          } else if (1 === V) {
            switch(V = Xa(R), "/" === V.charAt(0) && (V = V.substr(1), U[V] = !0), V) {
              case "STYLE":
                if (7.2 <= O && 9 > O) {
                  break;
                }
              case "LINK":
                L || l || Eb(ib, R) || G.push(R);
                break;
              case "META":
                V = Ja(R, "name") || Ja(R, "property");
                for (na = y.length; na;) {
                  if (0 === V.indexOf(y[--na])) {
                    M.push(R);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (hc(R, "async")) {
                  break;
                }
                if (k) {
                  R.innerText = "";
                  k = !1;
                  break;
                }
              case "NOSCRIPT":
                if (hc(R, "skip-cleanup")) {
                  break;
                }
              case "!":
                M.push(R);
                break;
              case "SOURCE":
                B.HTMLSourceElement || M.push(R);
                break;
              default:
                U[V] ? M.push(R) : eb(R).length && c(R);
            }
          }
        }
        for (; G[0];) {
          ib.appendChild(G.pop());
        }
        for (; M[0];) {
          Wa(M.pop());
        }
      }
      cb = db("jsMain");
      var a = !(8 > O || 5 > D || Va || .9 > Q), k = Bc, l = 7 > D, y = ["og:", "twitter:", "fb:"], G = [], M = [], U = {};
      c(pb);
    });
  })();
  var ba, qa, Ka, kb, ic, qb, lb, jc, kc, rb, ha, lc;
  (function() {
    function w() {
      return V ? Fa ? 2 : na ? 3 : 1 : 0;
    }
    function C(g) {
      qa(B, "load", C);
      C = r;
      E(Ea, g, !0);
      Ea = r;
    }
    function v(g, b) {
      lb(function() {
        var e = c(g);
        b(e);
        e.addListener(b);
        return !0;
      });
    }
    function E(g, b, e) {
      for (var f = 0; f < g.length; ++f) {
        !0 === g[f](b) && (g.splice(f, 1), --f);
      }
      e && (g.length = 0);
    }
    function F(g, b, e) {
      Ea || k.length || oa(K);
      k.push(g, b, e);
    }
    function K() {
      var g = k, b;
      for (k = []; b = g.shift();) {
        E(b, g.shift(), g.shift());
      }
    }
    function aa(g) {
      var b = g || event;
      g = l[b.type];
      var e = -1, f, n;
      D ? (b.preventDefault = function() {
        b.returnValue = !1;
      }, b.stopPropagation = function() {
        b.cancelBubble = !0;
      }) : G && (b.I = b.stopPropagation, b.stopPropagation = function() {
        n = !0;
      });
      for (; f = g[++e];) {
        f.j === this ? (this.h = f.i, this.h(b), this.h = yb, this.h = r) : 7.2 > O && this === J && f.j === B && (B.h = f.i, B.h(b), delete B.h);
      }
      if (D) {
        return b.preventDefault = b.stopPropagation = r, b.returnValue;
      }
      G && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (U = !0), n && !U && b.I(), b.I = b.stopPropagation = r);
    }
    function ma() {
      var g = 9 === a.offsetWidth;
      rb !== g && (F(zc, rb = g), Z("p_cssAvailability:" + rb));
    }
    function L() {
      !Ea && za && (Cb(za), za = oa(ya));
    }
    function ya() {
      za = 0;
      E(sb);
    }
    function ja(g) {
      Ea || E(La, g);
    }
    var c = B.matchMedia, a, k = [];
    Ea.push(function() {
      v = r;
      a = da(la, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ka(function() {
        k.length && oa(K);
      });
    });
    ba = function(g, b, e, f) {
      if (M) {
        g.addEventListener(b, e, f ? xc ? f : f.capture : !1);
      } else {
        var n = {j:g, i:e};
        f = l[b];
        var q = "on" + b, m, H;
        if (f) {
          for (m = f.length; H = f[--m];) {
            if (H.j === g && H.i === e) {
              return;
            }
          }
          l[b].push(n);
        } else {
          l[b] = f = [n], y || (b = g[q], "function" === typeof b && b !== aa && f.unshift({j:g, i:b}));
        }
        y ? g.attachEvent(q, aa) : g[q] = aa;
      }
    };
    qa = function(g, b, e, f) {
      if (M) {
        g.removeEventListener(b, e, f ? xc ? f : f.capture : !1);
      } else {
        f = l[b];
        b = "on" + b;
        var n, q, m;
        if (f) {
          for (n = f.length; q = f[--n];) {
            q.j === g && (q.i === e ? f.splice(n, 1) : m = !0);
          }
          m || (y ? g.detachEvent(b, aa) : (g[b] = yb, g[b] = null));
        }
      }
    };
    var l = {}, y = !1, G = 525.13 > Ab, M = !G && !Va && B.addEventListener, U;
    G && pb.addEventListener("click", function(g) {
      if (U) {
        return U = !1, g.preventDefault(), !1;
      }
    });
    Ka = function(g) {
      Ea ? Ea.push(g) : alert("Load event has already been dispatched!");
    };
    kb = function(g) {
      fa && fa.push(g);
    };
    var fa = [];
    if (419.3 >= Ab) {
      var ka = function() {
        if (ka) {
          var g = J.readyState;
          "loaded" === g || "complete" === g ? (ka = r, C()) : oa(ka);
        }
      };
      oa(ka);
    } else {
      ba(B, "load", C);
    }
    D || .9 <= Q && 1.8 > Q ? ba(B, "unload", function(g) {
      E(fa, g, !0);
    }) : fa = r;
    lb = function(g) {
      zc.push(g);
    };
    Ka(function() {
      ma();
      Ob(ma);
    });
    kc = function(g) {
      Ia && Ia.push(g);
    };
    var R = 60 > Q || Xb, V, na, Fa;
    if (89 <= Q || 89 <= Bb || Yb && 79 <= wc || c && (c("(forced-colors:none)").matches || c("(forced-colors:active)").matches)) {
      lc = !0, v("(forced-colors:active)", function(g) {
        V = g.matches;
        ha = w();
        F(Ia, ha);
        Z("(forced-colors:active):" + ha);
      });
    } else if (10 <= D || Wb || Yb && wc) {
      lc = !0, v("(-ms-high-contrast:black-on-white)", function(g) {
        V = na = g.matches;
        ha !== w() && (ha = w(), F(Ia, ha), Z("(-ms-high-contrast:black-on-white):" + ha));
      }), v("(-ms-high-contrast:white-on-black)", function(g) {
        V = Fa = g.matches;
        ha !== w() && (ha = w(), F(Ia, ha), Z("(-ms-high-contrast:white-on-black):" + ha));
      }), v("(-ms-high-contrast:active)", function(g) {
        V = g.matches;
        ha !== w() && (ha = w(), F(Ia, ha), Z("(-ms-high-contrast:active):" + ha));
      });
    } else if (Yb && (D || Q && 0 <= Sa.conpare(Ua, "1.8.1") || Xb)) {
      var Ga = function() {
        function g(f, n) {
          if (n && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var q = f.split("(")[1].split(",");
          return Ta(q[0]) + Ta(q[1]) + Ta(q[2]);
        }
        var b = J.defaultView;
        var e = b ? b.getComputedStyle(a, null) : a.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        b && (V = "#123456" !== b && "rgb(18,52,86)" !== b, na = g(b) < g(e, !0), Fa = g(b) > g(e, !0), ha !== w() && (ha = w(), Z("(forced-colors-fallback):" + ha), F(Ia, ha, R)));
      };
      lb(function(g) {
        if (g) {
          return pa(a, "color", "#123456"), pa(a, "backgroundColor", "#123456"), R ? (Ga(), Ia = r) : Ob(Ga), Ga = r, !0;
        }
      });
    } else {
      Ia = w = r;
    }
    jc = function(g) {
      Ea || alert("p_listenImageReady is called back for images present at load time.");
      Aa.push(g);
    };
    var Aa = [], Za = 7.5 <= O && 8 > O;
    Za && function() {
      for (var g = J.images, b = g.length, e; b;) {
        e = g[--b], e.H = e.src, Ya(e, "src");
      }
    }();
    Ka(function() {
      function g() {
        f ? (n = e[--f], Za && jb(n, "src", n.H), Ac(b, Za ? n.H : n.src)) : Aa = r;
      }
      function b(m) {
        E(Aa, {D:n, F:m, U:!f}, !f);
        g();
      }
      var e = J.images || Oa("img"), f = e.length;
      if (12 > O || 532 > Ab) {
        g();
      } else {
        for (; f;) {
          var n = e[--f];
          var q = 9 > D ? n.complete : 0 <= n.naturalWidth ? n.naturalWidth : n.width;
          F(Aa, {D:n, F:q, U:!f}, !f);
        }
        Aa = r;
      }
    });
    ic = function(g) {
      sb.push(g);
    };
    var sb = [], za;
    ba(B, "resize", L);
    kb(function() {
      za && clearTimeout(za);
      qa(B, "resize", L);
    });
    qb = function(g) {
      La.push(g);
    };
    var La = [], Qa = 0, Ma = 1 > Q || 1.2 <= Q && 1.8 > Q || 7.2 >= O;
    Ma ? Ob(function() {
      var g = B.scrollY || la.scrollTop;
      Qa !== g && (Qa = g, ja());
    }) : ba(B, "scroll", ja);
    kb(function() {
      Ma || qa(B, "scroll", ja);
    });
  })();
  (function() {
    9 > D && Ka(function() {
      var w = da(la, "div");
      va(w, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      yc = 1 < w.offsetHeight;
      va(w, "");
      Wa(w);
    });
    Ac = function(w, C) {
      function v() {
        F || !K || E.complete ? (Z("[imageTest] timer -> img.complete. img.width=" + E.width), oa(w, !!E.width), E.onerror = E.onload = yb, E = w = r) : (--K, oa(v));
      }
      var E = new Image(), F, K = 99;
      Z("[imageTest] start.");
      E.onerror = function() {
        Z("[imageTest] error!");
        F = !0;
      };
      E.onload = function() {
        Z("[imageTest] onload.");
        F = !0;
      };
      E.src = C;
      oa(v);
    };
  })();
  (function() {
    jc(function(v) {
      var E = v.D;
      v = v.F;
      var F = ta(E);
      !Pa(F, "aBodyRoot") && v ? fb(F, "img-loaded") : v || Ja(E, "alt") || pa(E, "display", "none");
    });
    if (!lc && Ia) {
      var w, C = function() {
        w = da(ib, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:wa + "css/" + Mb + "hc/" + Zb});
        if ($b || 5.5 <= D && 9 > D && yc) {
          fb(la, "jsCanRotate"), Z("jsCanRotate!");
        }
        C = r;
      };
      kc(function(v) {
        v && !w ? C() : w && (v ? ib.appendChild(w) : Wa(w));
      });
    }
    5.5 <= D && 8 > D && Ia && kc(function(v) {
      for (var E = Oa("a"), F = E.length, K = 0; K < F; ++K) {
        E[K].hideFocus = !v;
      }
    });
    O && Ka(function() {
      for (var v = Oa("a"), E = v.length, F = 0, K; F < E; ++F) {
        K = v[F], "-1" === Ja(K, "tabindex") ? Ya(K, "tabindex") : Ja(K, "href") && jb(K, "tabindex", "0");
      }
      v = Oa("input");
      F = 0;
      for (E = v.length; F < E; ++F) {
        K = v[F], "hidden" === Ja(K, "type") && Ya(K, "tabindex");
      }
    });
  })();
  (function() {
    function w(d) {
      var h = Aa.length, u, A, ea, I;
      if (13 === (d.keyCode || d.ba) || d.type !== Za) {
        for (; h;) {
          var S = Aa[--h];
          if (S.C === this || S.u === this) {
            h = S.C;
            var P = u = S.u;
            if (S.O) {
              if (pa(h, "width", S.$), h.src = S.Z, Fb(P, S.S), h = S.K) {
                va(h, S.R), Fb(h, "caption jsCap");
              }
            } else {
              if (A = S.M) {
                for (delete S.M; u = ta(u);) {
                  if (Pa(u, "caption")) {
                    fb(u, "jsCap");
                  } else {
                    var T = Xa(u);
                    if ("DIV" === T || "P" === T || "BLOCKQUOT" === T || "LI" === T || "DD" === T || "TD" === T || "TH" === T || "FORM" === T || "PRE" === T) {
                      break;
                    }
                  }
                }
                u = (u.offsetWidth | 0) - 4;
                1600 < u && (u = 1600);
                if (S.L && 0 < A.split("/").pop().indexOf("=")) {
                  A = A.split("=");
                  T = A.length;
                  if (ea = A[T - 1]) {
                    (I = Ta(ea.substr(1))) && ea === "s" + I ? A[T - 1] = "w" + u : A[T] = "w" + u;
                  }
                  A = A.join("=");
                } else if (S.L || 0 < A.indexOf(".bp.blogspot.com/")) {
                  A = A.split("/");
                  T = A.length;
                  if (ea = A[T - 2]) {
                    (I = Ta(ea.substr(1))) && ea === "s" + I ? A[T - 2] = "w" + u : A.splice(T - 1, 0, "w" + u);
                  }
                  A = A.join("/");
                }
                S.W = A;
              }
              S.S = Ic(P);
              fb(P, "jsPicaLarge");
              pa(h, "width", "");
              h.src = S.W;
              if (h = S.K) {
                va(h, ""), fb(h, "jsCapLarge");
              }
            }
            S.O = !S.O;
            break;
          }
        }
        C(d);
      }
    }
    function C(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function v(d) {
      for (var h = arguments, u = 0, A = h.length; u < A; ++u) {
        if (isFinite(h[u])) {
          return h[u];
        }
      }
      return 0;
    }
    function E(d) {
      var h = p;
      if (rb) {
        if (x && !h) {
          if (+new ob() < x) {
            return;
          }
          x = r;
        }
        7 === d ? (a("t"), z = 0) : (a("s"), z && (z = Cb(z)), t = v(B.pageYOffset, B.scrollY, e.scrollTop, la.scrollTop));
        h ? (p = K(r, h[0], h[1])) || (x = +new ob() + 99) : K();
        l();
      } else {
        p = r;
      }
    }
    function F() {
      a("w.blur");
    }
    function K(d, h, u) {
      function A(Ra) {
        P = Ra;
        if (m) {
          T = m + ":translate" + (N ? "3D(0," : "(0,") + Ra + (N ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ra) {
          if (!b && (g || Ma)) {
            var Rb = f.offsetWidth;
          }
          T = Ma ? "position:fixed;width:" + Rb + "px;top:" + (Ra - ea + Y) + "px" : b ? "top:" + Ra + "px" : "position:absolute;left:0;top:" + Ra + "px";
          g && T && (T += ";" + (0 > Ra ? "clip:rect(" + -Ra + "px " + Rb + "px " + ra + "px 0)" : Ra + ra < Gb ? "clip:rect(0 " + Rb + "px " + ra + "px 0)" : "clip:rect(0 " + Rb + "px " + (Gb - Ra) + "px 0)"), 8 > D || (T = T.split(" ").join(",")));
        }
      }
      var ea = t, I = n, S = f.offsetTop === I.offsetTop, P = 0, T = "", Na = !0;
      if (S) {
        for (var ca = 0, Y = 0, xa = I; xa && xa !== la;) {
          Y += xa.offsetTop, xa = xa.offsetParent;
        }
        P = H;
        xa = v(B.innerHeight, e.offsetHeight);
        var mc = I.offsetHeight, ra = q.offsetHeight, Gb = ra < mc ? mc : ra, gb = ea, tb = gb + xa, Sb = Y, Tb = Sb + Gb, Jc = Y + P, Oc = Jc + ra;
        I = gb < Sb ? Sb : gb;
        var hb = Tb < tb ? Tb : tb, ub = hb - I;
        gb = Tb <= gb;
        tb = tb <= Sb;
        if (h !== r) {
          Na = Y + h;
          d = Na + u;
          if (gb || tb) {
            return xa <= u ? (h = Y, a("4.1.1")) : gb ? (h = Tb - u, a("4.1.2")) : (h = Y + u - xa, a("4.1.3")), x = r, B.scroll(v(B.pageXOffset, B.scrollX, e.scrollLeft, la.scrollLeft), h), a("4.1.*"), p;
          }
          ra <= ub ? (ca = 3, a("4.2")) : u <= ub ? ra - h <= ub ? (ca = 2, a("4.3.1")) : I <= Na && d <= hb ? I < Y + P && (ca = 4, a("4.3.2")) : I <= Na && Na <= hb ? (ca = 5, a("4.3.3")) : I <= d && d <= hb ? (ca = 4, a("4.3.4")) : d < I ? (ca = 4, a("4.3.5")) : (ca = 5, a("4.3.6")) : (ca = 4, a("4.4"));
          Na = r;
        } else {
          d !== r ? ra <= ub ? (ca = 7, Na = !1, a("3.1")) : (P -= 60 * d, ca = hb - Y - ra, d = I - Y, P < ca ? (P = ca, a("3.2.1")) : d < P ? (P = d, a("3.2.2")) : a("3.2.3"), ca = 6) : mc <= ra || (gb ? (ca = 1, a("2.2.1")) : tb ? a("2.2.2") : ra <= ub ? (ca = 3, a("2.3")) : I < Jc ? (ca = 3, a("2.4.1")) : Oc < hb ? (ca = 2, a("2.4.2")) : ea < Y + ra - ub ? a("2.4.3") : (ca = 2, a("2.4.4")));
        }
        switch(ca) {
          case 0:
            A(0);
            break;
          case 1:
            A(Gb - ra);
            break;
          case 2:
            A(hb - Y - ra);
            break;
          case 3:
            A(I - Y);
            break;
          case 4:
            A(I - Y - h);
            break;
          case 5:
            A(hb - Y - (h + u));
          case 6:
            A(P);
        }
        y(P, ra, Y, Gb, xa, h || "-", u || "-");
      } else {
        y(P, "-", "-", "-", "-", "-", "-");
      }
      va(q, T);
      H = P;
      return S && Na;
    }
    function aa(d) {
      if (rb) {
        a("m");
        Q && (t = v(B.pageYOffset, e.scrollTop, la.scrollTop), l());
        var h = this !== d.target, u = h && v(d.deltaY, d.wheelDeltaY / 120, d.wheelDelta / -120, d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1));
        h && u && K(9 >= u ? -9 >= u ? -3 : u : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function ma(d) {
      for (var h = d.target, u = -1, A; A = za[++u];) {
        Eb(A, h) && aa(d);
      }
    }
    function L(d) {
      if (rb) {
        var h = !!m || Q, u = d.target || d.srcElement, A = 0;
        if (Eb(q, u)) {
          a(d.type || "ie5focus");
          ba(u, "blur", c);
          for (d = u.offsetHeight; u && (h ? Eb(q, u) : q !== u);) {
            A += u.offsetTop, u = u.offsetParent;
          }
          Qa ? (p = [A, d], z && Cb(z), z = oa(E, 7, 1 > Q ? 500 : 0)) : (t = v(B.pageYOffset, B.scrollY, e.scrollTop, la.scrollTop), K(r, A, d));
          G(A, d);
        }
      }
    }
    function ya() {
      Ha = B.onerror;
      B.onerror = ja;
      var d = J.activeElement;
      Ba !== d && (Ba = d, L({target:d}));
      B.onerror = Ha;
      Ha = r;
    }
    function ja() {
      Z("error!");
      B.onerror = Ha;
      Ha = Ba = r;
      return !0;
    }
    function c() {
      qa(this, "blur", c);
      G(0, 0);
    }
    function a(d) {
      Hb && (Ub && (Ub = Cb(Ub)), Ub = oa(k, 0, 1400), Hb.innerHTML += " " + d);
    }
    function k() {
      Hb.innerHTML = "";
    }
    function l() {
      Ib && (pa(Ib, "top", (t / 10 | 0) + "px"), Kc.innerHTML = " scrl:" + (t | 0));
    }
    function y(d, h, u, A, ea, I, S) {
      vb && (pa(vb, "top", ((d + u) / 10 | 0) + "px"), pa(vb, "height", (h / 10 | 0) + "px"), pa(Ib, "height", (ea / 10 | 0) + "px"), pa(nc, "height", (la.scrollHeight / 10 | 0) + "px"), $a.innerHTML = "conY:" + u + "/sidY" + d + ", conH:" + A + "/sidH" + h + ", focY:" + I + " focH:" + S);
    }
    function G(d, h) {
      Jb && (pa(Jb, "top", (d / 10 | 0) + "px"), pa(Jb, "height", (h / 10 | 0) + "px"));
    }
    function M() {
      oc.call(Vb);
    }
    function U() {
      J.fullscreenElement || J.fullscreen || J.webkitIsFullscreen || J.msFullscreenElement || B.fullScreen ? (jb(Vb, "id", "blog2slide-root"), wb[1].parentNode.insertBefore(Kb, wb[1]), fa(), J.onkeydown = ka) : mb && (Wa(Kb), Ya(Vb, "id"), Ya(mb, "id"), mb = J.onkeydown = r);
    }
    function fa() {
      mb && Ya(mb, "id");
      nb = 0 < nb ? pc < nb ? pc : nb : 0;
      mb = wb[nb];
      jb(mb, "id", "blog2slide-current");
    }
    function ka(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++nb, fa();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --nb, fa();
      }
    }
    Cc = Q && 0 >= Sa.conpare(Ua, "0.9");
    Nb = !(7.2 > O || Cc);
    ac = function(d) {
      R ? Ea ? J.write('<script src="' + d + '">\x3c/script>') : bb("[DynamicScvriptLoader] Document already loaded! " + d) : Ea || Fa.length ? Fa.push(d) : Ga(d);
    };
    bc = function(d) {
      R ? Z("[DynamicScvriptLoader] " + d + " loaded.") : d === na ? Ga(Fa.shift()) : bb(d + " <> " + na);
    };
    var R = !Nb, V = Nb && 7.5 > O, na;
    if (!R) {
      var Fa = [];
      V && (Bc = !0);
      Ka(function() {
        Ga(Fa.shift());
      });
      var Ga = function(d) {
        if (na = d) {
          V ? qc[0].src = d : da(ib, "script", {src:d});
        }
      };
    }
    var Aa = [], Za = 5.5 <= D && 8 > D ? "keypress" : "keydown";
    if (!vc) {
      var sb = Da.transition !== r || Da["-o-transition"] !== r || Da["-moz-transition"] !== r || Da["-webkit-transition"] !== r;
      jc(function(d) {
        if (d.F && cb) {
          d = d.D;
          var h = ta(d), u = "", A;
          if ("A" === Xa(h) && 1 === Fc(h).length) {
            var ea = Ja(h, "href");
            var I = ea.split("?")[0].split("#")[0].split(".");
            I = (I[I.length - 1] || "").toLowerCase();
            if ((A = 0 < ea.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + I + ".")) {
              ba(h, Za, w);
              ba(d, "click", w);
              ba(h, "click", C);
              sb && (u = d.naturalWidth + 4 + "px", pa(d, "width", u));
              fb(h, "jsPica");
              for (I = h; I = ta(I);) {
                if (Pa(I, "caption")) {
                  var S = I;
                  var P = S.style.cssText.toLowerCase();
                  break;
                }
              }
              Aa.push({u:h, K:S, R:P, Z:d.src, $:u, M:ea, C:d, L:A});
            }
          }
        }
      });
      kb(function(d, h) {
        for (d = -1; h = Aa[++d];) {
          qa(h.u, Za, w), qa(h.C, "click", w), qa(h.u, "click", C);
        }
      });
    }
    var za = ["jsSidebarFixer1", "jsSidebarFixer2"], La = Q || Xb || Wb, Qa = !(9 > D || O || 1 <= Q && 1.3 > Q), Ma = !(5 > X(16) || 5 > X(17) || 2.2 > X(21) || 6 > X(12) || Ca(30) && 534 > Ab || Ca(32) || 7 > D || 9 > O || 1 > Q), g = Ma || 6 === D || 1 > Q, b = 7.5 > O, e, f, n, q, m = $b, H = 0, t = 0, N, p, x, z, W = Q && 0 <= Sa.conpare(Ua, "0.9.7"), ia = Q && 0 >= Sa.conpare(Ua, "0.9.4");
    Lc || vc || (lb(function(d) {
      if (d) {
        if (!cb) {
          return !0;
        }
        d = -1;
        var h;
        e = "CSS1Compat" !== J.compatMode ? la : pb || la;
        f = db("jsSide");
        n = cb;
        if (!f) {
          return !0;
        }
        qb(E);
        ic(E);
        q = Db(fc(f), "div", {id:"jsSidebarFixer"});
        ba(B, "blur", F);
        for (8 > O || ia || 6 > D || (D || Va ? ba(q, "focusin", L) : La ? ba(J, "focus", L, {capture:!0, passive:!1}) : ba(q, "DOMFocusIn", L, !1)); 1 < eb(f).length;) {
          q.appendChild(eb(f)[1]);
        }
        for (W && !zb && ba(J, "DOMMouseScroll", ma, !1); h = za[++d];) {
          var u = db(h);
          u.onwheel !== r ? ba(u, "wheel", aa, {passive:!1}) : zb ? ba(u, "MozMousePixelScroll", aa, !1) : W ? za[d] = db(h) : (u.onmousewheel !== r || 9 <= O) && ba(u, "mousewheel", aa, !1);
        }
        D || Wb || 2 > Bb || (N = Da.perspective !== r || Da.MozPerspective !== r || Da["-webkit-perspective"] !== r);
        E();
        return !0;
      }
    }), kb(function() {
      var d = -1, h;
      if (W && !zb) {
        qa(J, "DOMMouseScroll", ma, !1);
      } else {
        for (; h = za[++d];) {
          h = db(h), h.onwheel !== r ? qa(h, "wheel", aa, {passive:!1}) : zb ? qa(h, "MozMousePixelScroll", aa, !1) : (h.onmousewheel !== r || 9 <= O) && qa(h, "mousewheel", aa, !1);
        }
      }
      qa(B, "blur", F);
      8 > O || ia || 6 > D || (D || Va ? qa(q, "focusin", L, !1) : La ? qa(J, "focus", L, {capture:!0, passive:!1}) : qa(q, "DOMFocusIn", L, !1));
      sa && clearInterval(sa);
    }));
    var sa, Ba, Ha;
    6 > D && lb(function(d) {
      if (!cb) {
        return !0;
      }
      d ? sa = setInterval(ya, 333) : sa && (clearInterval(sa), sa = 0);
    });
    var $a, Kc, Hb, nc, Ib, vb, Jb, Ub;
    lb(function(d) {
      if (d) {
        if (!cb) {
          return !0;
        }
        var h = eb(la);
        d = Db(h[0], "div");
        if (Ma) {
          va(d, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; h.length;) {
            d.appendChild(h.shift());
          }
          va(d, "width:100%; height:100%; overflow:auto; position:relative;");
          d = Gc(d, "div");
          va(pb, "overflow:hidden");
          va(la, "overflow:hidden");
          va(d, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        da(d, "div", r, $b ? "transform" + (N ? "3D" : "") : Ma ? "pos:fixed" : "pos:absolute");
        h = da(d, "div");
        $a = da(h, "span");
        Kc = da(h, "span");
        Hb = da(d, "div");
        nc = da(d, "div");
        va(nc, "position:absolute;left:0;top:0;width:54px;background:#242");
        vb = da(d, "div");
        va(vb, "position:absolute;left:0;width:54px;background:#363");
        Ib = da(d, "div");
        va(Ib, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        Jb = da(vb, "div");
        va(Jb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Ka(function() {
      function d(S, P, T, Na) {
        var ca = Na ? "div" : "cite";
        if (0 === P.indexOf("urn:isbn:")) {
          P = P.substr(9).toUpperCase().split("-").join("");
          if (13 === P.length) {
            P = P.toString().slice(3, -1);
            for (var Y = 0, xa = 0; 9 > xa; xa++) {
              Y += (P.charAt(xa) - 0) * (10 - xa);
            }
            Y = (11 - Y % 11) % 11;
            Y = 10 === Y ? "X" : Y.toString();
            P += Y;
          }
          10 === P.length && (P = "//www.amazon.co.jp/exec/obidos/ASIN/" + P + "/itozyun-22/ref=nosim/");
        }
        T = Na ? Db(fc(u), ca, {className:T}) : da(u, ca, {className:T});
        da(T, "a", 0 === P.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:P, Y:O ? "0" : r} : {href:P, Y:O ? "0" : r}, S);
      }
      if (cb) {
        for (var h = ec(cb, "blockquote"), u, A = -1, ea, I; u = h[++A];) {
          ea = Ja(u, "title"), I = Ja(u, "cite"), ea && I ? (Ya(u, "title"), d(ea, I, "js-bqLink", !0)) : I && (Ya(u, "cite"), d(B.decodeURI ? decodeURI(I) : I, I, "js-bqCite"));
        }
      }
    });
    var oc, Vb, Kb, mb, wb, nb, pc;
    Ka(function() {
      var d = db("blog2slide-start");
      if (d) {
        var h = J.onfullscreenchange !== r ? "f" : J.onmozfullscreenchange !== r ? "mozF" : J.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        oc = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== h || oc ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ba(d.firstChild, "click", M), d = ta(d), Vb = ta(d), wb = ec(d, "section"), Kb = J.createElement("h1"), Kb.innerHTML = Oa("h1")[0].innerHTML, pc = wb.length, wb.splice(0, 0, Kb), 0 !== h ? ba(J, h + "ullscreenchange", U) : D ? ba(J, "MSFullscreenChange", U, !1) : ic(U)) : Wa(d);
      }
    });
  })();
  var xb, Lb = !sc || .9 > Q || 8 > O || 5.5 > D, ab;
  (function() {
    function w(b) {
      return b === "" + b;
    }
    function C(b, e) {
      return Lb ? new k(b, e) : new sc(b, e);
    }
    function v(b, e, f, n, q) {
      var m = l.codeBlocks[l.codeBlocks.length - 1], H = a(), t = H - G;
      switch(f || 0) {
        case 1:
          l.initRegExpCount++;
          l.initRegExpTotal += t;
          l.initRegExpMax < t && (l.initRegExpMax = t, l.initRegExpSource = q.toString(), l.initRegExpInstance = q);
          break;
        case 2:
          m.decorateCount++;
          m.decorateTime += t;
          break;
        case 3:
          m.updateDOMTime += t;
      }
      if (H - y < ka && !n) {
        return G = H, b(e);
      }
      oa(E, {T:b, X:e});
    }
    function E(b) {
      y = G = a();
      b.T(b.X);
    }
    function F(b, e) {
      b && xb[b] || (b = R.test(e) ? "default-markup" : "default-code");
      var f = !!xb[b];
      f && v(Aa, b, 0, !0);
      return f;
    }
    function K() {
      function b(Ba, Ha, $a) {
        Ha && (e.g = e.g || [], e.g.push({l:e, A:e.A, N:1, s:H, B:Ba, o:Ha, m:$a, P:{}, v:0}));
      }
      var e = M, f = e.m, n = f[0], q = f[2], m = e.B, H = e.s, t = e.aa.shift(), N = e.P;
      if (t) {
        var p = N[t], x;
        if (!(0 <= p)) {
          if (x = n[t.charAt(0)]) {
            var z = t.match(x[1]);
            p = x[0];
          } else {
            for (p = 0, n = -1; x = q[++n];) {
              if (z = t.match(x[1])) {
                p = x[0];
                break;
              }
            }
          }
          !(x = w(p)) || z && w(z[1]) || (x = !1, p = 11);
          x || (N[t] = p);
        }
        q = e.v;
        N = t.length;
        e.v += N;
        if (x) {
          x = z[1];
          n = t.indexOf(x);
          var W = x.length, ia = n + W;
          z[2] && (ia = N - z[2].length, n = ia - W);
          b(m + q, t.substr(0, n), f);
          if (W && F(p, x)) {
            b(m + q + n, x);
            var sa = !0;
          }
          b(m + q + ia, t.substr(ia), f);
          e.g && e.g.length && (M = e.g.shift());
          sa || (M !== e ? v(Fa, r, 2) : v(K, r, 2));
        } else {
          H.push(m + q, p), v(K, r, 2);
        }
      } else {
        e.l ? (M = e.l.g.shift()) ? v(Fa, r, 2) : (M = e.l, v(K, r, 2)) : v(za, r, 2);
      }
    }
    function aa(b) {
      if (Ga.length) {
        var e = Ga.shift(), f = ja[e];
        if (f.pop) {
          ja[e] = f = C(f[0], f[1]);
        } else if (w(f)) {
          ja[e] = f = C(f);
        } else {
          return aa(b);
        }
        v(aa, b, 1, !1, f);
      } else {
        v(Aa, b);
      }
    }
    function ma(b) {
      for (var e, f = b.firstChild; f; f = f.nextSibling) {
        var n = f.nodeType;
        e = 1 === n ? e ? b : f : 3 === n ? V.test(f.nodeValue) ? b : e : e;
      }
      return e === b ? r : e;
    }
    xb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var L = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], ya = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ja = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    c = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), a = ob.now || function() {
      return +new ob();
    }, k, l = {useRegExpCompat:Lb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var y = a();
    var G, M, U, fa, ka = 5 > D ? 60 : 5.5 > D ? 0 : Lb ? 20 : 10, R, V;
    ab = [function(b) {
      B.RegExpCompat = k = b;
    }, function() {
      R = C("^\\s*<");
      V = C("\\S");
    }];
    Lb || (ab[1](), ab = r);
    var na = function() {
      var b = M, e = b.V, f = Za(b.A, b.N), n = b.o = f.o;
      b.G = f.G;
      F(e, n) || (M = r, v(g, r, 0, !0));
    };
    var Fa = function() {
      var b = M;
      b.aa = b.o.match(b.m[1]) || [];
      b.s.push(b.B, 0);
      v(K, r, 2);
    };
    var Ga = [];
    var Aa = function(b) {
      function e(p) {
        var x = p;
        0 <= p && (x = ya[p]);
        0 <= x[1] && (x[1] = f(x[1]));
        return x;
      }
      function f(p) {
        var x = p;
        return 0 <= p && (x = ja[p], !x.exec) ? (Ga.push(p), p) : x;
      }
      var n = M, q = xb[b];
      w(q) && (q = xb[b] = xb[q]);
      var m = q[0];
      if (0 <= m) {
        m = L[m];
        if (0 <= m["-num"]) {
          var H = m["-num"];
          delete m["-num"];
          for (var t = -1; 9 > t;) {
            m["" + ++t] = H;
          }
        }
        q[0] = m;
      }
      for (var N in m) {
        m[N] = e(m[N]);
      }
      q[1] = f(q[1]);
      m = q[2];
      t = 0;
      for (H = m.length; t < H; ++t) {
        m[t] = e(m[t]);
      }
      Ga.length ? v(aa, b, 2) : (n.m ? n.l && (n.l.g[0].m = q) : n.m = q, v(Fa, r, 1));
    };
    var Za = function(b, e) {
      function f(N) {
        var p = N.nodeType;
        if (1 === p) {
          if (!Pa(N, "nocode")) {
            for (p = N.firstChild; p; p = p.nextSibling) {
              f(p);
            }
            p = Xa(N);
            if ("BR" === p || "LI" === p) {
              n[H] = "\n", m[H << 1] = q++, m[H++ << 1 | 1] = N;
            }
          }
        } else if (3 === p || 4 === p) {
          if (p = N.nodeValue) {
            p = e ? p.split("\r\n").join("\n").split("\r").join("\n") : p.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), n[H] = p, m[H << 1] = q, q += p.length, m[H++ << 1 | 1] = N;
          }
        }
      }
      var n = [], q = 0, m = [], H = 0;
      f(b);
      var t = n.join("");
      "\n" === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1));
      return {o:t, G:m};
    };
    var sb = function(b, e, f) {
      function n(p) {
        var x = p.nodeType;
        if (1 === x && !Pa(p, "nocode")) {
          if ("BR" === Xa(p)) {
            q(p), p.parentNode && Wa(p);
          } else {
            for (p = p.firstChild; p; p = p.nextSibling) {
              n(p);
            }
          }
        } else if ((3 === x || 4 === x) && f) {
          var z = p.nodeValue, W = z.indexOf("\r\n"), ia = 2;
          -1 === W && (W = z.indexOf("\n"), ia = 1);
          -1 === W && (W = z.indexOf("\r"));
          -1 !== W && (x = z.substr(0, W), p.nodeValue = x, (z = z.substr(W + ia)) && gc(p, z), q(p), x || Wa(p));
        }
      }
      function q(p) {
        function x(W, ia) {
          var sa = ia ? W.cloneNode(!1) : W, Ba = W.parentNode;
          if (Ba) {
            Ba = x(Ba, 1);
            var Ha = W.nextSibling;
            Ba.appendChild(sa);
            for (var $a = Ha; $a; $a = Ha) {
              Ha = $a.nextSibling, Ba.appendChild($a);
            }
          }
          return sa;
        }
        for (; !p.nextSibling;) {
          if (p = p.parentNode, !p) {
            return;
          }
        }
        p = x(p.nextSibling, 0);
        for (var z; (z = p.parentNode) && 1 === z.nodeType;) {
          p = z;
        }
        H.push(p);
      }
      for (var m = J.createElement("li"); b.firstChild;) {
        m.appendChild(b.firstChild);
      }
      for (var H = [m], t = 0; t < H.length; ++t) {
        n(H[t]);
      }
      if (e === (e | 0)) {
        if (10 <= e && 7.2 > O) {
          var N = J.createElement("ol");
          N.innerHTML = '<li value="' + e + '">' + m.innerHTML + "</li>";
          H[0] = N.firstChild;
        } else {
          jb(m, "value", e);
        }
      }
      N = da(b, "ol", {className:"linenums"});
      b = Math.max(0, e - 1 | 0) || 0;
      t = 0;
      for (e = H.length; t < e; ++t) {
        m = H[t], Fb(m, "L" + (t + b) % 10), m.firstChild || Hc(m, "\u00a0"), N.appendChild(m);
      }
    };
    var za = function() {
      var b = M, e = b.o, f = e.length, n = 0, q = b.G, m = q.length, H = 0, t = b.s, N = t.length, p = 0;
      t[N] = f;
      var x, z;
      for (z = x = 0; z < N;) {
        t[z] !== t[z + 2] ? (t[x++] = t[z++], t[x++] = t[z++]) : z += 2;
      }
      N = x;
      for (z = x = 0; z < N;) {
        var W = t[z], ia = t[z + 1];
        for (z += 2; z + 2 <= N && t[z + 1] === ia;) {
          z += 2;
        }
        t[x++] = W;
        t[x++] = ia;
      }
      t.length = x;
      b = b.A;
      N = "";
      b && (N = b.style.display, pa(b, "display", "none"));
      for (; H < m;) {
        x = q[H + 2] || f;
        W = t[p + 2] || f;
        z = Math.min(x, W);
        ia = q[H + 1];
        var sa;
        if (1 !== ia.nodeType && (sa = e.substring(n, z))) {
          9 > D && (sa = sa.split("\n").join("\r"));
          var Ba = Db(ia, "span", {className:c[t[p + 1]]}, sa);
          Wa(ia);
          n < x && (q[H + 1] = gc(Ba, e.substring(z, x)));
        }
        n = z;
        n >= x && (H += 2);
        n >= W && (p += 2);
      }
      b && pa(b, "display", N);
      M = r;
      v(g, r, 3, !0);
    };
    var La = [], Qa;
    l.readyTime = a() - y;
    lb(function(b) {
      if (b) {
        b = [Oa("pre"), Oa("code"), Oa("xmp")];
        for (var e = 0; e < b.length; ++e) {
          for (var f = 0, n = b[e].length; f < n; ++f) {
            Ma(b[e][f]);
          }
        }
        return !0;
      }
    });
    var Ma = function(b) {
      La.push(b);
      Qa = La.length;
      1 === Qa && (rc ? oa(rc, g) : ab ? ab.push(function() {
        oa(g);
      }) : oa(g));
    };
    var g = function() {
      function b(H, t) {
        return (H.split(t)[1] || "").split(" ")[0];
      }
      if (!M) {
        Qa !== La.length && fa && fa(Qa - La.length, Qa);
        var e = La.shift();
        if (e) {
          y = a();
          if (Pa(e, "prettyprint") && !Pa(e, "prettyprinted")) {
            for (var f = !1, n = e.parentNode; n !== la; n = n.parentNode) {
              var q = Xa(n);
              if (("PRE" === q || "XMP" === q || "CODE" === q) && Pa(n, "prettyprint")) {
                f = !0;
                break;
              }
            }
            if (!f) {
              f = e.className;
              fb(e, "prettyprinted");
              n = !1;
              if (!n) {
                n = b(f, "lang-") || b(f, "language-");
                var m;
                !n && (m = ma(e)) && "CODE" === Xa(m) && (n = b(m.className, "lang-") || b(m.className, "language-"));
              }
              q = Xa(e);
              "PRE" === q || "XMP" === q ? q = 1 : (q = e.currentStyle, m = J.defaultView, q = (q = q ? q.whiteSpace : m && m.getComputedStyle ? m.getComputedStyle(e, null).getPropertyValue("white-space") : 0) && "pre" === q.substr(0, 3));
              m = !1;
              (m = "true" === m || +m) || (m = b(f, "linenums:") || Pa(e, "linenums"), m = m.length ? +m : m);
              m && sb(e, m, q);
              M = {V:n, A:e, ca:m, N:q, B:0, v:0, P:{}, s:[]};
              l.codeBlocks.push({elm:e, lang:n, readyTime:a() - y, decorateTime:0, decorateCount:0, updateDOMTime:0});
              v(na);
              return;
            }
          }
          v(g, r, 0, !0);
        } else {
          U && U(l);
        }
      }
    };
    B.PR = {RegExpProxy:C, prettifyElement:Ma, registerCompleteHandler:function(b, e) {
      U = b;
      fa = e;
    }};
  })();
  var qc = J.scripts || Oa("script");
  var wa = qc[qc.length - 1].src.split("/");
  --wa.length;
  "js" === wa[wa.length - 1] && --wa.length;
  (wa = wa.join("/")) && (wa += "/");
  Z("[p_assetUrl] " + wa);
  var Lc = Nc || "1" === Ja(la, "mob");
  Mb = (Lc ? "mb" : "pc") + "/";
  Ka(function() {
    var w;
    (w = db("logger")) || alert("#logger not found!");
    w ? (Z = function(C) {
      da(w, "P", r, C);
    }, bb = function(C) {
      da(w, "P", {style:{color:"red"}}, C);
    }, B.onerror = function(C, v, E) {
      bb(C + ", " + v + ", " + E);
      return !0;
    }) : B.console ? (Z = console.log, bb = console.error) : O ? (Z = yb, bb = opera.postError) : Z = bb = yb;
    for (; Pb.length;) {
      Z(Pb.shift());
    }
    for (; Qb.length;) {
      Z(Qb.shift());
    }
    Pb = Qb = r;
  });
  6.1 > uc && (qb ? qb(cc) : ba(B, "scroll", cc));
  kb(Dc);
  6.1 > uc && (qb ? qb(dc) : ba(B, "scroll", dc));
  kb(Ec);
  10 > D && (11 !== Mc || 5 !== D) || (9 > O || 1 > Q || !Va && !B.addEventListener ? J.write('<link href="' + wa + "css/" + Mb + Zb + '" rel="stylesheet"' + (8 > O ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > O || 1.5 > Q || 532 >= Ab || 8 > Bb) && Ka(function() {
    da(ib, "link", {href:wa + "css/" + Mb + Zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Lb) {
    if (Nb) {
      var rc = function(w) {
        B.RegExpCompat = function(C) {
          for (var v; v = ab.shift();) {
            v(C);
          }
          ab = r;
          oa(w);
          bc(wa + "js/regexpcompat.js");
        };
        rc = r;
        ac(wa + "js/regexpcompat.js");
      };
    } else {
      B.RegExpCompat = function(w) {
        for (var C; C = ab.shift();) {
          C(w);
        }
        ab = r;
        bc(wa + "js/regexpcompat.js");
      }, ac(wa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

