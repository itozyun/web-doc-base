/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d});
Function.prototype.apply||(Function.prototype.apply=function(d,f){var b=null!=d?d:window,a=f||[],e=a.length,c=0;b.__apply=this;b.__apply||(b.constructor.prototype.__apply=this);switch(e){case 0:a=b.__apply();break;case 1:a=b.__apply(a[0]);break;case 2:a=b.__apply(a[0],a[1]);break;case 3:a=b.__apply(a[0],a[1],a[2]);break;case 4:a=b.__apply(a[0],a[1],a[2],a[3]);break;case 5:a=b.__apply(a[0],a[1],a[2],a[3],a[4]);break;case 6:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5]);break;case 7:a=b.__apply(a[0],a[1],
a[2],a[3],a[4],a[5],a[6]);break;case 8:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);break;case 9:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);break;default:for(a=[];c<e;++c)a[c]="y["+c+"]";a=eval("x.__apply("+a.join(",")+")")}b.__apply?b===window?b.__apply=void 0:delete b.__apply:delete b.constructor.prototype.__apply;return a});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
window.decodeURI||(decodeURI=function(d){var e=[],f=parseInt,h=String.fromCharCode;d+="";for(var g=-1,b=0,k=d.length,c,a;b<k;++b)a?(a=f(d.substr(b,2),16),++b,127<a&&(223<a?(c=(a&15)<<12,a=f(d.substr(b+2,2),16)&63,b+=3,c+=a<<6):c=(a&63)<<6,a=f(d.substr(b+2,2),16)&63,b+=3,a+=c),e[++g]=h(a),a=!1):(c=d.charAt(b),(a="%"===c)||(e[++g]=c));return e.join("")});window.decodeURIComponent||(decodeURIComponent=decodeURI); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
var aa, ab;
(function(Pa, z, yb, sc, pb, I, tc, Oc, Qa, Pc, q) {
  function W(x) {
    if (Pa[0] === x) {
      return Ra === Ra + "" ? Qa(Ra) : Ra;
    }
  }
  function Ba(x) {
    var A = Pa[3];
    if (Pa[2] === x) {
      return A === A + "" ? Qa(A) : A;
    }
  }
  var ka = I.body, Ca = ka.style, qb, ib, bb, Ra = Pa[1], C = W(2) || W(3), Sa = W(7), Wb = W(5) || W(6), O = W(8) || W(9), R = W(11) || W(12), zb = R && 0 <= Pa.conpare(Ra, "1.9.1"), Xb = W(13), Ab = W(15), uc = W(16) || W(17), vc = W(10) || W(25), Bb = W(20) || W(22);
  Bb || W(23) || W(21) || W(24);
  var wc = Bb && Qa(tc.userAgent.split("Edg/")[1]), Lc = Qa(tc.appVersion.split("Trident/")[1]) + 4, Yb = Ba(35) || Ba(36) || Ba(37), xc = !C && !Sa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Zb = (Sa ? "ie5mac" : 5.5 > C ? "ie5win" : 6 > C ? "ie55" : 10 > C ? "ie" + (C | 0) : 7.2 > O ? "opr70" : 8 > O ? "opr72" : 9.5 > O ? "opr" + (O | 0) : R && !zb ? 1.4 <= R ? "gck19" : 
  1.3 <= R ? "gck13" : 1 <= R ? "gck12" : 0.9 <= R ? "gck09" : 0.8 <= R ? "gck08" : "gck07" : "modern") + ".css", Nb = "", Mc = Ba(1) || Ba(2) || Ba(3) || Ba(4) || Ba(8) || Ba(9) || Ba(10), yc, $b = Ca.transform !== q ? "transform" : Ca["-o-transform"] !== q ? "-o-transform" : Ca["-ms-transform"] !== q ? "-ms-transform" : Ca.MozTransform !== q ? "-moz-transform" : Ca["-webkit-transform"] !== q ? "-webkit-transform" : "", Da = [], zc = [], Ga = [], Ac, Bc, Cb, Cc, ac, bc, na, Db, Ob, Pb = [], Qb = 
  [], cc, Dc, dc, Ec;
  (function() {
    function x() {
      for (var a, n = 0, p = +new pb(); n < K.length;) {
        p < K[0].t ? ++n : (a = K.splice(n, 1)[0], a.f(a.p));
      }
      d = K.length ? setTimeout(x, wa) : 0;
    }
    function A() {
      for (var a, n = 0; n < G.length; ++n) {
        a = G[n], a.f();
      }
    }
    function v() {
      la && (la = clearInterval(la));
    }
    function D() {
      d && (d = clearTimeout(d));
    }
    aa = function(a) {
      Pb.push(a);
    };
    ab = function(a) {
      Qb.push(a);
    };
    Ob = function(a) {
      G.length || (la = setInterval(A, J));
      G.push({f:a, J:++ba});
      return ba;
    };
    cc = function() {
      la && (v(), la = setInterval(A, J));
    };
    Dc = v;
    var G = [], J = 500, ba = 0, la;
    if (5 > C || Sa) {
      z._wdb_onlooptimer = A, A = "_wdb_onlooptimer()";
    }
    na = function(a, n, p) {
      K.length || (d = setTimeout(x, wa));
      K.push({f:a, p:n, J:++ia, t:+new pb() + (wa < p ? p : wa)});
      return ia;
    };
    Db = function(a) {
      for (var n = K.length, p; p = K[--n];) {
        if (p.J === a) {
          K.splice(n, 1);
          break;
        }
      }
      return 0;
    };
    dc = function() {
      d && (D(), d = setTimeout(x, wa));
    };
    Ec = D;
    var K = [], wa = 16, ia = 0, d;
    if (5 > C || Sa) {
      z._wdb_ontimer = x, x = "_wdb_ontimer()";
    }
  })();
  var cb, Ma, ec, xa, db, Fc, fc, ea, Eb, Gc, Hc, gc, Ta, Fb, Ua, Ha, jb, Va, hc, Ic, Gb, Wa, eb, oa, ra;
  (function() {
    function x(d, a, n) {
      var p = ["<", d], y = 1, E, L;
      if (a) {
        for (E in a) {
          var U = a[E];
          if (null != U && "" !== U) {
            if ("style" === E) {
              p[++y] = ' style="';
              for (L in U) {
                for (var fa = ++y, ja, S = [], V = L.split(""), ma = V.length; ma;) {
                  ja = V[--ma], "A" <= ja && "Z" >= ja && (ja = "-" + ja.toLowerCase()), S[ma] = ja;
                }
                p[fa] = S.join("") + ":" + U[L] + ";";
              }
              p[++y] = '"';
            } else {
              "className" === E && (E = "class"), p[++y] = " " + E + '="' + U + '"';
            }
          }
        }
      }
      p[++y] = ">";
      null != n && (K && "font" !== d ? p[++y] = "<FONT>" + n + "</FONT>" : p[++y] = n);
      p[++y] = "</" + d + ">";
      return p.join("");
    }
    function A(d) {
      return v(I, d);
    }
    function v(d, a) {
      var n = "*" === a && 6 > C ? "*" !== a ? d.all.tags(a.toUpperCase()) : d.all : d.getElementsByTagName(a), p = [], y = 0, E;
      for (E = n.length; y < E; ++y) {
        p[y] = n[y];
      }
      return p;
    }
    function D(d) {
      return K ? d.parentElement : d.parentNode;
    }
    function G(d, a, n, p, y, E) {
      if (K) {
        var L = 0 === d ? "beforebegin" : 1 === d ? "afterend" : "beforeend";
        var U = db(2 > d ? xa(a) : a);
        U = 2 > d ? U.indexOf(a) + d : U.length;
        a.insertAdjacentHTML(L, x(n, p, y));
        a = db(a)[U];
        null != y && ("font" === n ? a.nodeType = 3 : a.children[0].nodeType = 3);
      } else if (wa) {
        a = I.createElement(x(n, p));
      } else {
        a = E ? I.createElementNS("http://www.w3.org/2000/svg", n) : I.createElement(n);
        if (p) {
          for (L in p) {
            if ((n = p[L]) || 0 === n) {
              switch(L) {
                case "class":
                case "className":
                  Gb(a, n);
                  break;
                case "style":
                  d = a.style;
                  for (U in n) {
                    d[U] = n[U];
                  }
                  break;
                default:
                  jb(a, L, n);
              }
            }
          }
        }
        ia || null != y && J(a, y);
      }
      return a;
    }
    function J(d, a) {
      if (K) {
        return G(2, d, "font", q, a);
      }
      var n = I.createTextNode("" + a);
      d.appendChild(n);
      return n;
    }
    function ba(d, a) {
      9 > C ? d.className = a : d.setAttribute("class", a);
    }
    function la(d, a) {
      return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
    }
    var K = 5 > C;
    qb = A("html")[0];
    ib = A("head")[0];
    cb = function(d) {
      return z[d] || I[d] || I.getElementById(d);
    };
    Ma = A;
    ec = v;
    xa = D;
    db = function(d) {
      d = K ? d.children : d.childNodes;
      for (var a = [], n = d.length; n;) {
        a[--n] = d[n];
      }
      return a;
    };
    Fc = function(d) {
      var a = !(7.03 < O && 7.2 > O) && d.children;
      d = a ? a : d.childNodes;
      for (var n = [], p = d.length, y = -1, E; p;) {
        if (E = d[--p], a || 1 === E.nodeType) {
          K && "FONT" === E.tagName || (n[++y] = E);
        }
      }
      return n;
    };
    fc = function(d) {
      return K ? d.children.length ? d.children[0] : null : d.firstChild;
    };
    ea = function(d, a, n, p, y) {
      a = G(2, d, a, n, p, y);
      K || (d.appendChild(a), ia && null != p && J(a, p));
      return a;
    };
    Eb = function(d, a, n, p, y) {
      a = G(0, d, a, n, p, y);
      K || (D(d).insertBefore(a, d), ia && null != p && J(a, p));
      return a;
    };
    Gc = function(d, a, n, p, y) {
      a = G(1, d, a, n, p, y);
      var E;
      K || ((E = d.nextSibling) ? xa(E).insertBefore(a, E) : xa(d).appendChild(a), ia && null != p && J(a, p));
      return a;
    };
    Hc = J;
    gc = function(d, a) {
      var n;
      if (K) {
        return G(1, d, "font", q, a);
      }
      var p = I.createTextNode("" + a);
      (n = d.nextSibling) ? xa(d).insertBefore(p, n) : xa(d).appendChild(p);
      return p;
    };
    Ta = function(d) {
      xa(d) ? K ? d.outerHTML = "" : xa(d).removeChild(d) : aa("[DOM] p_DOM_remove(), No parentNode!");
    };
    Fb = function(d, a) {
      if (d.contains) {
        return d.contains(a);
      }
      for (; a && a !== qb;) {
        if (a = xa(a), d === a) {
          return !0;
        }
      }
    };
    var wa = 9 > C, ia = wa;
    Ua = function(d) {
      return d.tagName.toUpperCase();
    };
    Ha = function(d, a) {
      return d.getAttribute(a) || "";
    };
    jb = function(d, a, n) {
      d.setAttribute(a, n);
    };
    Va = function(d, a) {
      d.removeAttribute(a);
    };
    hc = function(d, a) {
      return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
    };
    Ic = function(d) {
      return d.className;
    };
    Gb = ba;
    Wa = la;
    eb = function(d, a) {
      var n;
      if (!la(d, a)) {
        if (n = d.className) {
          a = " " + a;
        }
        ba(d, n + a);
      }
    };
    oa = function(d, a, n) {
      d.style[a] = n;
    };
    ra = function(d, a) {
      var n = -1, p, y;
      if (5.5 > C) {
        if (d.setAttribute("style", ""), a) {
          for (p = a.split(";"); y = p[++n];) {
            var E = y.split(":");
            d.style[E[0]] = y.substr(E[0].length + 1);
          }
        }
      } else if (7.1 > O) {
        if (d.setAttribute("style", ""), a) {
          for (p = a.split(";"); y = p[++n];) {
            E = y.split(":"), d.style[E[0]] = E[1];
          }
        }
      } else {
        9 > O || 1 > R ? a ? d.setAttribute("style", a) : d.removeAttribute("style") : d.style.cssText = a;
      }
    };
    Da.splice(0, 0, function() {
      function d(fa) {
        fa = db(fa);
        for (var ja = fa.length, S, V, ma; ja;) {
          if (S = fa[--ja], V = S.nodeType, 8 === V) {
            a && L.push(S);
          } else if (1 === V) {
            switch(V = Ua(S), "/" === V.charAt(0) && (V = V.substr(1), U[V] = !0), V) {
              case "STYLE":
                if (7.2 <= O && 9 > O) {
                  break;
                }
              case "LINK":
                K || p || Fb(ib, S) || E.push(S);
                break;
              case "META":
                V = Ha(S, "name") || Ha(S, "property");
                for (ma = y.length; ma;) {
                  if (0 === V.indexOf(y[--ma])) {
                    L.push(S);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (hc(S, "async")) {
                  break;
                }
                if (n) {
                  S.innerText = "";
                  n = !1;
                  break;
                }
              case "NOSCRIPT":
                if (hc(S, "skip-cleanup")) {
                  break;
                }
              case "!":
                L.push(S);
                break;
              case "SOURCE":
                z.HTMLSourceElement || L.push(S);
                break;
              default:
                U[V] ? L.push(S) : db(S).length && d(S);
            }
          }
        }
        for (; E[0];) {
          ib.appendChild(E.pop());
        }
        for (; L[0];) {
          Ta(L.pop());
        }
      }
      bb = cb("jsMain");
      var a = !(8 > O || 5 > C || Sa || .9 > R), n = Bc, p = 7 > C, y = ["og:", "twitter:", "fb:"], E = [], L = [], U = {};
      d(qb);
    });
  })();
  var ca, pa, Ia, kb, ic, rb, lb, jc, kc, sb, ha, lc;
  (function() {
    function x() {
      return V ? Ea ? 2 : ma ? 3 : 1 : 0;
    }
    function A(h) {
      pa(z, "load", A);
      A = q;
      D(Da, h, !0);
      Da = q;
    }
    function v(h, b) {
      lb(function() {
        var e = d(h);
        b(e);
        e.addListener(b);
        return !0;
      });
    }
    function D(h, b, e) {
      for (var f = 0; f < h.length; ++f) {
        !0 === h[f](b) && (h.splice(f, 1), --f);
      }
      e && (h.length = 0);
    }
    function G(h, b, e) {
      Da || n.length || na(J);
      n.push(h, b, e);
    }
    function J() {
      var h = n, b;
      for (n = []; b = h.shift();) {
        D(b, h.shift(), h.shift());
      }
    }
    function ba(h) {
      var b = h || event;
      h = p[b.type];
      var e = -1, f, k;
      C ? (b.preventDefault = function() {
        b.returnValue = !1;
      }, b.stopPropagation = function() {
        b.cancelBubble = !0;
      }) : E && (b.I = b.stopPropagation, b.stopPropagation = function() {
        k = !0;
      });
      for (; f = h[++e];) {
        f.j === this ? (this.h = f.i, this.h(b), this.h = yb, this.h = q) : 7.2 > O && this === I && f.j === z && (z.h = f.i, z.h(b), delete z.h);
      }
      if (C) {
        return b.preventDefault = b.stopPropagation = q, b.returnValue;
      }
      E && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (U = !0), k && !U && b.I(), b.I = b.stopPropagation = q);
    }
    function la() {
      var h = 9 === a.offsetWidth;
      sb !== h && (G(zc, sb = h), aa("p_cssAvailability:" + sb));
    }
    function K() {
      !Da && Ja && (Db(Ja), Ja = na(wa));
    }
    function wa() {
      Ja = 0;
      D(Xa);
    }
    function ia(h) {
      Da || D(Na, h);
    }
    var d = z.matchMedia, a, n = [];
    Da.push(function() {
      v = q;
      a = ea(ka, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ia(function() {
        n.length && na(J);
      });
    });
    ca = function(h, b, e, f) {
      if (L) {
        h.addEventListener(b, e, f ? xc ? f : f.capture : !1);
      } else {
        var k = {j:h, i:e};
        f = p[b];
        var r = "on" + b, l, B;
        if (f) {
          for (l = f.length; B = f[--l];) {
            if (B.j === h && B.i === e) {
              return;
            }
          }
          p[b].push(k);
        } else {
          p[b] = f = [k], y || (b = h[r], "function" === typeof b && b !== ba && f.unshift({j:h, i:b}));
        }
        y ? h.attachEvent(r, ba) : h[r] = ba;
      }
    };
    pa = function(h, b, e, f) {
      if (L) {
        h.removeEventListener(b, e, f ? xc ? f : f.capture : !1);
      } else {
        f = p[b];
        b = "on" + b;
        var k, r, l;
        if (f) {
          for (k = f.length; r = f[--k];) {
            r.j === h && (r.i === e ? f.splice(k, 1) : l = !0);
          }
          l || (y ? h.detachEvent(b, ba) : (h[b] = yb, h[b] = null));
        }
      }
    };
    var p = {}, y = !1, E = 525.13 > Ab, L = !E && !Sa && z.addEventListener, U;
    E && qb.addEventListener("click", function(h) {
      if (U) {
        return U = !1, h.preventDefault(), !1;
      }
    });
    Ia = function(h) {
      Da ? Da.push(h) : alert("Load event has already been dispatched!");
    };
    kb = function(h) {
      fa && fa.push(h);
    };
    var fa = [];
    if (419.3 >= Ab) {
      var ja = function() {
        if (ja) {
          var h = I.readyState;
          "loaded" === h || "complete" === h ? (ja = q, A()) : na(ja);
        }
      };
      na(ja);
    } else {
      ca(z, "load", A);
    }
    C || .9 <= R && 1.8 > R ? ca(z, "unload", function(h) {
      D(fa, h, !0);
    }) : fa = q;
    lb = function(h) {
      zc.push(h);
    };
    Ia(function() {
      la();
      Ob(la);
    });
    kc = function(h) {
      Ga && Ga.push(h);
    };
    var S = 60 > R || Xb, V, ma, Ea;
    if (89 <= R || 89 <= Bb || Yb && 79 <= wc || d && (d("(forced-colors:none)").matches || d("(forced-colors:active)").matches)) {
      lc = !0, v("(forced-colors:active)", function(h) {
        V = h.matches;
        ha = x();
        G(Ga, ha);
        aa("(forced-colors:active):" + ha);
      });
    } else if (10 <= C || Wb || Yb && wc) {
      lc = !0, v("(-ms-high-contrast:black-on-white)", function(h) {
        V = ma = h.matches;
        ha !== x() && (ha = x(), G(Ga, ha), aa("(-ms-high-contrast:black-on-white):" + ha));
      }), v("(-ms-high-contrast:white-on-black)", function(h) {
        V = Ea = h.matches;
        ha !== x() && (ha = x(), G(Ga, ha), aa("(-ms-high-contrast:white-on-black):" + ha));
      }), v("(-ms-high-contrast:active)", function(h) {
        V = h.matches;
        ha !== x() && (ha = x(), G(Ga, ha), aa("(-ms-high-contrast:active):" + ha));
      });
    } else if (Yb && (C || R && 0 <= Pa.conpare(Ra, "1.8.1") || Xb)) {
      var Fa = function() {
        function h(f, k) {
          if (k && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var r = f.split("(")[1].split(",");
          return Qa(r[0]) + Qa(r[1]) + Qa(r[2]);
        }
        var b = I.defaultView;
        var e = b ? b.getComputedStyle(a, null) : a.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        b && (V = "#123456" !== b && "rgb(18,52,86)" !== b, ma = h(b) < h(e, !0), Ea = h(b) > h(e, !0), ha !== x() && (ha = x(), aa("(forced-colors-fallback):" + ha), G(Ga, ha, S)));
      };
      lb(function(h) {
        if (h) {
          return oa(a, "color", "#123456"), oa(a, "backgroundColor", "#123456"), S ? (Fa(), Ga = q) : Ob(Fa), Fa = q, !0;
        }
      });
    } else {
      Ga = x = q;
    }
    jc = function(h) {
      Da || alert("p_listenImageReady is called back for images present at load time.");
      za.push(h);
    };
    var za = [], mb = 7.5 <= O && 8 > O;
    mb && function() {
      for (var h = I.images, b = h.length, e; b;) {
        e = h[--b], e.H = e.src, Va(e, "src");
      }
    }();
    Ia(function() {
      function h() {
        f ? (k = e[--f], mb && jb(k, "src", k.H), Ac(b, mb ? k.H : k.src)) : za = q;
      }
      function b(l) {
        D(za, {D:k, F:l}, !f);
        h();
      }
      var e = I.images || Ma("img"), f = e.length;
      if (12 > O || 532 > Ab) {
        h();
      } else {
        for (; f;) {
          var k = e[--f];
          var r = 9 > C ? k.complete : 0 <= k.naturalWidth ? k.naturalWidth : k.width;
          G(za, {D:k, F:r}, !f);
        }
        za = q;
      }
    });
    ic = function(h) {
      Xa.push(h);
    };
    var Xa = [], Ja;
    ca(z, "resize", K);
    kb(function() {
      Ja && clearTimeout(Ja);
      pa(z, "resize", K);
    });
    rb = function(h) {
      Na.push(h);
    };
    var Na = [], ya = 0, fb = 1 > R || 1.2 <= R && 1.8 > R || 7.2 >= O;
    fb ? Ob(function() {
      var h = z.scrollY || ka.scrollTop;
      ya !== h && (ya = h, ia());
    }) : ca(z, "scroll", ia);
    kb(function() {
      fb || pa(z, "scroll", ia);
    });
  })();
  (function() {
    9 > C && Ia(function() {
      var x = ea(ka, "div");
      ra(x, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      yc = 1 < x.offsetHeight;
      ra(x, "");
      Ta(x);
    });
    Ac = function(x, A) {
      function v() {
        G || !J || D.complete ? (aa("[imageTest] timer -> img.complete. img.width=" + D.width), na(x, !!D.width), D.onerror = D.onload = yb, D = x = q) : (--J, na(v));
      }
      var D = new Image(), G, J = 99;
      aa("[imageTest] start.");
      D.onerror = function() {
        aa("[imageTest] error!");
        G = !0;
      };
      D.onload = function() {
        aa("[imageTest] onload.");
        G = !0;
      };
      D.src = A;
      na(v);
    };
  })();
  (function() {
    jc(function(v) {
      var D = v.D;
      v = v.F;
      var G = xa(D);
      !Wa(G, "aBodyRoot") && v ? eb(G, "img-loaded") : v || Ha(D, "alt") || oa(D, "display", "none");
    });
    if (!lc && Ga) {
      var x, A = function() {
        x = ea(ib, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:sa + "css/" + Nb + "hc/" + Zb});
        if ($b || 5.5 <= C && 9 > C && yc) {
          eb(ka, "jsCanRotate"), aa("jsCanRotate!");
        }
        A = q;
      };
      kc(function(v) {
        v && !x ? A() : x && (v ? ib.appendChild(x) : Ta(x));
      });
    }
    5.5 <= C && 8 > C && Ga && kc(function(v) {
      for (var D = Ma("a"), G = D.length, J = 0; J < G; ++J) {
        D[J].hideFocus = !v;
      }
    });
    O && Ia(function() {
      for (var v = Ma("a"), D = v.length, G = 0, J; G < D; ++G) {
        J = v[G], "-1" === Ha(J, "tabindex") ? Va(J, "tabindex") : Ha(J, "href") && jb(J, "tabindex", "0");
      }
      v = Ma("input");
      G = 0;
      for (D = v.length; G < D; ++G) {
        J = v[G], "hidden" === Ha(J, "type") && Va(J, "tabindex");
      }
    });
  })();
  (function() {
    function x(c) {
      var g = c.keyCode || c.aa, t = za.length, H, P, M, Ka;
      if ("keydown" !== c.type || 13 === g) {
        for (; t;) {
          if (g = za[--t], g.C === this || g.u === this) {
            t = g.C;
            var Q = H = g.u;
            if (g.O) {
              if (oa(t, "width", g.Z), t.src = g.Y, Gb(Q, g.S), t = g.K) {
                ra(t, g.R), Gb(t, "caption jsCap");
              }
            } else {
              if (P = g.M) {
                for (delete g.M; H = xa(H);) {
                  if (Wa(H, "caption")) {
                    g.K = H, g.R = H.style.cssText, eb(H, "jsCap");
                  } else {
                    var T = Ua(H);
                    if ("DIV" === T || "P" === T || "BLOCKQUOT" === T || "LI" === T || "DD" === T || "TD" === T || "TH" === T || "FORM" === T || "PRE" === T) {
                      break;
                    }
                  }
                }
                H = (H.offsetWidth | 0) - 4;
                1600 < H && (H = 1600);
                if (g.L && 0 < P.split("/").pop().indexOf("=")) {
                  P = P.split("=");
                  T = P.length;
                  if (M = P[T - 1]) {
                    (Ka = Qa(M.substr(1))) && M === "s" + Ka ? P[T - 1] = "w" + H : P[T] = "w" + H;
                  }
                  P = P.join("=");
                } else if (g.L || 0 < P.indexOf(".bp.blogspot.com/")) {
                  P = P.split("/");
                  T = P.length;
                  if (M = P[T - 2]) {
                    (Ka = Qa(M.substr(1))) && M === "s" + Ka ? P[T - 2] = "w" + H : P.splice(T - 1, 0, "w" + H);
                  }
                  P = P.join("/");
                }
                g.V = P;
              }
              g.S = Ic(Q);
              eb(Q, "jsPicaLarge");
              oa(t, "width", "");
              t.src = g.V;
              if (t = g.K) {
                ra(t, ""), eb(t, "jsCapLarge");
              }
            }
            g.O = !g.O;
            break;
          }
        }
        A(c);
      }
    }
    function A(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function v(c) {
      for (var g = arguments, t = 0, H = g.length; t < H; ++t) {
        if (isFinite(g[t])) {
          return g[t];
        }
      }
      return 0;
    }
    function D(c) {
      var g = N;
      if (sb) {
        if (m && !g) {
          if (+new pb() < m) {
            return;
          }
          m = q;
        }
        7 === c ? (a("t"), w = 0) : (a("s"), w && (w = Db(w)), B = v(z.pageYOffset, z.scrollY, b.scrollTop, ka.scrollTop));
        g ? (N = J(q, g[0], g[1])) || (m = +new pb() + 99) : J();
        p();
      } else {
        N = q;
      }
    }
    function G() {
      a("w.blur");
    }
    function J(c, g, t) {
      function H(Oa) {
        Q = Oa;
        if (r) {
          T = r + ":translate" + (u ? "3D(0," : "(0,") + Oa + (u ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Oa) {
          if (!h && (fb || ya)) {
            var Rb = e.offsetWidth;
          }
          T = ya ? "position:fixed;width:" + Rb + "px;top:" + (Oa - P + X) + "px" : h ? "top:" + Oa + "px" : "position:absolute;left:0;width:100%;top:" + Oa + "px";
          fb && T && (T += ";" + (0 > Oa ? "clip:rect(" + -Oa + "px " + Rb + "px " + qa + "px 0)" : Oa + qa < Hb ? "clip:rect(0 " + Rb + "px " + qa + "px 0)" : "clip:rect(0 " + Rb + "px " + (Hb - Oa) + "px 0)"), 8 > C || (T = T.split(" ").join(",")));
        }
      }
      var P = B, M = f, Ka = e.offsetTop === M.offsetTop, Q = 0, T = "", La = !0;
      if (Ka) {
        for (var da = 0, X = 0, ta = M; ta && ta !== ka;) {
          X += ta.offsetTop, ta = ta.offsetParent;
        }
        Q = l;
        ta = v(z.innerHeight, b.offsetHeight);
        var mc = M.offsetHeight, qa = k.offsetHeight, Hb = qa < mc ? mc : qa, gb = P, tb = gb + ta, Sb = X, Tb = Sb + Hb, Jc = X + Q, Nc = Jc + qa;
        M = gb < Sb ? Sb : gb;
        var hb = Tb < tb ? Tb : tb, ub = hb - M;
        gb = Tb <= gb;
        tb = tb <= Sb;
        if (g !== q) {
          La = X + g;
          c = La + t;
          if (gb || tb) {
            return ta <= t ? (g = X, a("4.1.1")) : gb ? (g = Tb - t, a("4.1.2")) : (g = X + t - ta, a("4.1.3")), m = q, z.scroll(v(z.pageXOffset, z.scrollX, b.scrollLeft, ka.scrollLeft), g), a("4.1.*"), N;
          }
          qa <= ub ? (da = 3, a("4.2")) : t <= ub ? qa - g <= ub ? (da = 2, a("4.3.1")) : M <= La && c <= hb ? M < X + Q && (da = 4, a("4.3.2")) : M <= La && La <= hb ? (da = 5, a("4.3.3")) : M <= c && c <= hb ? (da = 4, a("4.3.4")) : c < M ? (da = 4, a("4.3.5")) : (da = 5, a("4.3.6")) : (da = 4, a("4.4"));
          La = q;
        } else {
          c !== q ? qa <= ub ? (da = 7, La = !1, a("3.1")) : (Q -= 60 * c, da = hb - X - qa, c = M - X, Q < da ? (Q = da, a("3.2.1")) : c < Q ? (Q = c, a("3.2.2")) : a("3.2.3"), da = 6) : mc <= qa || (gb ? (da = 1, a("2.2.1")) : tb ? a("2.2.2") : qa <= ub ? (da = 3, a("2.3")) : M < Jc ? (da = 3, a("2.4.1")) : Nc < hb ? (da = 2, a("2.4.2")) : P < X + qa - ub ? a("2.4.3") : (da = 2, a("2.4.4")));
        }
        switch(da) {
          case 0:
            H(0);
            break;
          case 1:
            H(Hb - qa);
            break;
          case 2:
            H(hb - X - qa);
            break;
          case 3:
            H(M - X);
            break;
          case 4:
            H(M - X - g);
            break;
          case 5:
            H(hb - X - (g + t));
          case 6:
            H(Q);
        }
        y(Q, qa, X, Hb, ta, g || "-", t || "-");
      } else {
        y(Q, "-", "-", "-", "-", "-", "-");
      }
      ra(k, T);
      l = Q;
      return Ka && La;
    }
    function ba(c) {
      if (sb) {
        a("m");
        R && (B = v(z.pageYOffset, b.scrollTop, ka.scrollTop), p());
        var g = this !== c.target, t = g && v(c.deltaY, c.wheelDeltaY / 120, c.wheelDelta / -120, c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1));
        g && t && J(9 >= t ? -9 >= t ? -3 : t : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function la(c) {
      for (var g = c.target, t = -1, H; H = Xa[++t];) {
        Fb(H, g) && ba(c);
      }
    }
    function K(c) {
      if (sb) {
        var g = !!r || R, t = c.target || c.srcElement, H = 0;
        if (Fb(k, t)) {
          a(c.type || "ie5focus");
          ca(t, "blur", d);
          for (c = t.offsetHeight; t && (g ? Fb(k, t) : k !== t);) {
            H += t.offsetTop, t = t.offsetParent;
          }
          Na ? (N = [H, c], w && Db(w), w = na(D, 7, 1 > R ? 500 : 0)) : (B = v(z.pageYOffset, z.scrollY, b.scrollTop, ka.scrollTop), J(q, H, c));
          E(H, c);
        }
      }
    }
    function wa() {
      va = z.onerror;
      z.onerror = ia;
      var c = I.activeElement;
      Aa !== c && (Aa = c, K({target:c}));
      z.onerror = va;
      va = q;
    }
    function ia() {
      aa("error!");
      z.onerror = va;
      va = Aa = q;
      return !0;
    }
    function d() {
      pa(this, "blur", d);
      E(0, 0);
    }
    function a(c) {
      Ib && (Ub && (Ub = Db(Ub)), Ub = na(n, 0, 1400), Ib.innerHTML += " " + c);
    }
    function n() {
      Ib.innerHTML = "";
    }
    function p() {
      Jb && (oa(Jb, "top", (B / 10 | 0) + "px"), Ya.innerHTML = " scrl:" + (B | 0));
    }
    function y(c, g, t, H, P, M, Ka) {
      vb && (oa(vb, "top", ((c + t) / 10 | 0) + "px"), oa(vb, "height", (g / 10 | 0) + "px"), oa(Jb, "height", (P / 10 | 0) + "px"), oa(nc, "height", (ka.scrollHeight / 10 | 0) + "px"), Za.innerHTML = "conY:" + t + "/sidY" + c + ", conH:" + H + "/sidH" + g + ", focY:" + M + " focH:" + Ka);
    }
    function E(c, g) {
      Kb && (oa(Kb, "top", (c / 10 | 0) + "px"), oa(Kb, "height", (g / 10 | 0) + "px"));
    }
    function L() {
      oc.call(Vb);
    }
    function U() {
      I.fullscreenElement || I.fullscreen || I.webkitIsFullscreen || I.msFullscreenElement || z.fullScreen ? (jb(Vb, "id", "blog2slide-root"), wb[1].parentNode.insertBefore(Lb, wb[1]), fa(), I.onkeydown = ja) : nb && (Ta(Lb), Va(Vb, "id"), Va(nb, "id"), nb = I.onkeydown = q);
    }
    function fa() {
      nb && Va(nb, "id");
      ob = 0 < ob ? pc < ob ? pc : ob : 0;
      nb = wb[ob];
      jb(nb, "id", "blog2slide-current");
    }
    function ja(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++ob, fa();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --ob, fa();
      }
    }
    Cc = R && 0 >= Pa.conpare(Ra, "0.9");
    Cb = !(7.2 > O || Cc);
    ac = function(c) {
      S ? Da ? I.write('<script src="' + c + '">\x3c/script>') : ab("[DynamicScvriptLoader] Document already loaded! " + c) : Da || Ea.length ? Ea.push(c) : Fa(c);
    };
    bc = function(c) {
      S ? aa("[DynamicScvriptLoader] " + c + " loaded.") : c === ma ? Fa(Ea.shift()) : ab(c + " <> " + ma);
    };
    var S = !Cb, V = Cb && 7.5 > O, ma;
    if (!S) {
      Cb = !0;
      var Ea = [];
      V && (Bc = !0);
      Ia(function() {
        Fa(Ea.shift());
      });
      var Fa = function(c) {
        if (ma = c) {
          V ? qc[0].src = c : ea(ib, "script", {src:c});
        }
      };
    }
    var za = [];
    if (!vc) {
      var mb = Ca.transition !== q || Ca["-o-transition"] !== q || Ca["-moz-transition"] !== q || Ca["-webkit-transition"] !== q;
      jc(function(c) {
        if (c.F && bb) {
          c = c.D;
          var g = xa(c), t = "", H;
          if ("A" === Ua(g) && 1 === Fc(g).length) {
            var P = Ha(g, "href");
            var M = P.split("?")[0].split("#")[0].split(".");
            M = (M[M.length - 1] || "").toLowerCase();
            if ((H = 0 < P.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + M + ".")) {
              ca(g, "keydown", x), ca(c, "click", x), ca(g, "click", A), mb && (t = c.naturalWidth + 4 + "px", oa(c, "width", t)), eb(g, "jsPica"), za.push({u:g, Y:c.src, Z:t, M:P, C:c, L:H});
            }
          }
        }
      });
      kb(function(c, g) {
        for (c = -1; g = za[++c];) {
          pa(g.u, "keydown", x), pa(g.C, "click", x), pa(g.u, "click", A);
        }
      });
    }
    var Xa = ["jsSidebarFixer1", "jsSidebarFixer2"], Ja = R || Xb || Wb, Na = !(9 > C || O || 1 <= R && 1.3 > R), ya = !(5 > W(16) || 5 > W(17) || 2.2 > W(21) || 6 > W(12) || Ba(30) && 534 > Ab || Ba(32) || 7 > C || 9 > O || 1 > R), fb = ya || 6 === C || 1 > R, h = 7.5 > O, b, e, f, k, r = $b, l = 0, B = 0, u, N, m, w, F = R && 0 <= Pa.conpare(Ra, "0.9.7"), Y = R && 0 >= Pa.conpare(Ra, "0.9.4");
    Kc || vc || (lb(function(c) {
      if (c) {
        if (!bb) {
          return !0;
        }
        c = -1;
        var g;
        b = "CSS1Compat" !== I.compatMode ? ka : qb || ka;
        e = cb("jsSide");
        f = bb;
        if (!e) {
          return !0;
        }
        rb(D);
        ic(D);
        k = Eb(fc(e), "div", {id:"jsSidebarFixer"});
        ca(z, "blur", G);
        for (8 > O || Y || 6 > C || (C || Sa ? ca(k, "focusin", K) : Ja ? ca(I, "focus", K, {capture:!0, passive:!1}) : ca(k, "DOMFocusIn", K, !1)); 1 < db(e).length;) {
          k.appendChild(db(e)[1]);
        }
        for (F && !zb && ca(I, "DOMMouseScroll", la, !1); g = Xa[++c];) {
          var t = cb(g);
          t.onwheel !== q ? ca(t, "wheel", ba, {passive:!1}) : zb ? ca(t, "MozMousePixelScroll", ba, !1) : F ? Xa[c] = cb(g) : (t.onmousewheel !== q || 9 <= O) && ca(t, "mousewheel", ba, !1);
        }
        C || Wb || 2 > Bb || (u = Ca.perspective !== q || Ca.MozPerspective !== q || Ca["-webkit-perspective"] !== q);
        D();
        return !0;
      }
    }), kb(function() {
      var c = -1, g;
      if (F && !zb) {
        pa(I, "DOMMouseScroll", la, !1);
      } else {
        for (; g = Xa[++c];) {
          g = cb(g), g.onwheel !== q ? pa(g, "wheel", ba, {passive:!1}) : zb ? pa(g, "MozMousePixelScroll", ba, !1) : (g.onmousewheel !== q || 9 <= O) && pa(g, "mousewheel", ba, !1);
        }
      }
      pa(z, "blur", G);
      8 > O || Y || 6 > C || (C || Sa ? pa(k, "focusin", K, !1) : Ja ? pa(I, "focus", K, {capture:!0, passive:!1}) : pa(k, "DOMFocusIn", K, !1));
      Z && clearInterval(Z);
    }));
    var Z, Aa, va;
    6 > C && lb(function(c) {
      if (!bb) {
        return !0;
      }
      c ? Z = setInterval(wa, 333) : Z && (clearInterval(Z), Z = 0);
    });
    var Za, Ya, Ib, nc, Jb, vb, Kb, Ub;
    lb(function(c) {
      if (c) {
        if (!bb) {
          return !0;
        }
        var g = db(ka);
        c = Eb(g[0], "div");
        if (ya) {
          ra(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; g.length;) {
            c.appendChild(g.shift());
          }
          ra(c, "width:100%; height:100%; overflow:auto; position:relative;");
          c = Gc(c, "div");
          ra(qb, "overflow:hidden");
          ra(ka, "overflow:hidden");
          ra(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ea(c, "div", q, $b ? "transform" + (u ? "3D" : "") : ya ? "pos:fixed" : "pos:absolute");
        g = ea(c, "div");
        Za = ea(g, "span");
        Ya = ea(g, "span");
        Ib = ea(c, "div");
        nc = ea(c, "div");
        ra(nc, "position:absolute;left:0;top:0;width:54px;background:#242");
        vb = ea(c, "div");
        ra(vb, "position:absolute;left:0;width:54px;background:#363");
        Jb = ea(c, "div");
        ra(Jb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        Kb = ea(vb, "div");
        ra(Kb, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Ia(function() {
      function c(Ka, Q, T, La) {
        var da = La ? "div" : "cite";
        if (0 === Q.indexOf("urn:isbn:")) {
          Q = Q.substr(9).toUpperCase().split("-").join("");
          if (13 === Q.length) {
            Q = Q.toString().slice(3, -1);
            for (var X = 0, ta = 0; 9 > ta; ta++) {
              X += (Q.charAt(ta) - 0) * (10 - ta);
            }
            X = (11 - X % 11) % 11;
            X = 10 === X ? "X" : X.toString();
            Q += X;
          }
          10 === Q.length && (Q = "//www.amazon.co.jp/exec/obidos/ASIN/" + Q + "/itozyun-22/ref=nosim/");
        }
        T = La ? Eb(fc(t), da, {className:T}) : ea(t, da, {className:T});
        ea(T, "a", 0 === Q.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:Q, X:O ? "0" : q} : {href:Q, X:O ? "0" : q}, Ka);
      }
      if (bb) {
        for (var g = ec(bb, "blockquote"), t, H = -1, P, M; t = g[++H];) {
          P = Ha(t, "title"), M = Ha(t, "cite"), P && M ? (Va(t, "title"), c(P, M, "js-bqLink", !0)) : M && (Va(t, "cite"), c(z.decodeURI ? decodeURI(M) : M, M, "js-bqCite"));
        }
      }
    });
    var oc, Vb, Lb, nb, wb, ob, pc;
    Ia(function() {
      var c = cb("blog2slide-start");
      if (c) {
        var g = I.onfullscreenchange !== q ? "f" : I.onmozfullscreenchange !== q ? "mozF" : I.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        oc = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== g || oc ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ca(c.firstChild, "click", L), c = xa(c), Vb = xa(c), wb = ec(c, "section"), Lb = I.createElement("h1"), Lb.innerHTML = Ma("h1")[0].innerHTML, pc = wb.length, wb.splice(0, 0, Lb), 0 !== g ? ca(I, g + "ullscreenchange", U) : C ? ca(I, "MSFullscreenChange", U, !1) : ic(U)) : Ta(c);
      }
    });
  })();
  var xb, Mb = !sc || .9 > R || 8 > O || 5.5 > C, $a;
  (function() {
    function x(b) {
      return b === "" + b;
    }
    function A(b, e) {
      return Mb ? new n(b, e) : new sc(b, e);
    }
    function v(b, e, f, k, r) {
      var l = p.codeBlocks[p.codeBlocks.length - 1], B = a(), u = B - E;
      switch(f || 0) {
        case 1:
          p.initRegExpCount++;
          p.initRegExpTotal += u;
          p.initRegExpMax < u && (p.initRegExpMax = u, p.initRegExpSource = r.toString(), p.initRegExpInstance = r);
          break;
        case 2:
          l.decorateCount++;
          l.decorateTime += u;
          break;
        case 3:
          l.updateDOMTime += u;
      }
      if (B - y < ja && !k) {
        return E = B, b(e);
      }
      na(D, {T:b, W:e});
    }
    function D(b) {
      y = E = a();
      b.T(b.W);
    }
    function G(b, e) {
      b && xb[b] || (b = S.test(e) ? "default-markup" : "default-code");
      var f = !!xb[b];
      f && v(za, b, 0, !0);
      return f;
    }
    function J() {
      function b(va, Za, Ya) {
        Za && (e.g = e.g || [], e.g.push({l:e, A:e.A, N:1, s:B, B:va, o:Za, m:Ya, P:{}, v:0}));
      }
      var e = L, f = e.m, k = f[0], r = f[2], l = e.B, B = e.s, u = e.$.shift(), N = e.P;
      if (u) {
        var m = N[u], w;
        if (!(0 <= m)) {
          if (w = k[u.charAt(0)]) {
            var F = u.match(w[1]);
            m = w[0];
          } else {
            for (m = 0, k = -1; w = r[++k];) {
              if (F = u.match(w[1])) {
                m = w[0];
                break;
              }
            }
          }
          !(w = x(m)) || F && x(F[1]) || (w = !1, m = 11);
          w || (N[u] = m);
        }
        r = e.v;
        N = u.length;
        e.v += N;
        if (w) {
          w = F[1];
          k = u.indexOf(w);
          var Y = w.length, Z = k + Y;
          F[2] && (Z = N - F[2].length, k = Z - Y);
          b(l + r, u.substr(0, k), f);
          if (Y && G(m, w)) {
            b(l + r + k, w);
            var Aa = !0;
          }
          b(l + r + Z, u.substr(Z), f);
          e.g && e.g.length && (L = e.g.shift());
          Aa || (L !== e ? v(Ea, q, 2) : v(J, q, 2));
        } else {
          B.push(l + r, m), v(J, q, 2);
        }
      } else {
        e.l ? (L = e.l.g.shift()) ? v(Ea, q, 2) : (L = e.l, v(J, q, 2)) : v(Ja, q, 2);
      }
    }
    function ba(b) {
      if (Fa.length) {
        var e = Fa.shift(), f = ia[e];
        if (f.pop) {
          ia[e] = f = A(f[0], f[1]);
        } else if (x(f)) {
          ia[e] = f = A(f);
        } else {
          return ba(b);
        }
        v(ba, b, 1, !1, f);
      } else {
        v(za, b);
      }
    }
    function la(b) {
      for (var e, f = b.firstChild; f; f = f.nextSibling) {
        var k = f.nodeType;
        e = 1 === k ? e ? b : f : 3 === k ? V.test(f.nodeValue) ? b : e : e;
      }
      return e === b ? q : e;
    }
    xb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var K = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], wa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ia = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    d = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), a = pb.now || function() {
      return +new pb();
    }, n, p = {useRegExpCompat:Mb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var y = a();
    var E, L, U, fa, ja = 5 > C ? 60 : 5.5 > C ? 0 : Mb ? 20 : 10, S, V;
    $a = [function(b) {
      z.RegExpCompat = n = b;
    }, function() {
      S = A("^\\s*<");
      V = A("\\S");
    }];
    Mb || ($a[1](), $a = q);
    var ma = function() {
      var b = L, e = b.U, f = mb(b.A, b.N), k = b.o = f.o;
      b.G = f.G;
      G(e, k) || (L = q, v(h, q, 0, !0));
    };
    var Ea = function() {
      var b = L;
      b.$ = b.o.match(b.m[1]) || [];
      b.s.push(b.B, 0);
      v(J, q, 2);
    };
    var Fa = [];
    var za = function(b) {
      function e(m) {
        var w = m;
        0 <= m && (w = wa[m]);
        0 <= w[1] && (w[1] = f(w[1]));
        return w;
      }
      function f(m) {
        var w = m;
        return 0 <= m && (w = ia[m], !w.exec) ? (Fa.push(m), m) : w;
      }
      var k = L, r = xb[b];
      x(r) && (r = xb[b] = xb[r]);
      var l = r[0];
      if (0 <= l) {
        l = K[l];
        if (0 <= l["-num"]) {
          var B = l["-num"];
          delete l["-num"];
          for (var u = -1; 9 > u;) {
            l["" + ++u] = B;
          }
        }
        r[0] = l;
      }
      for (var N in l) {
        l[N] = e(l[N]);
      }
      r[1] = f(r[1]);
      l = r[2];
      u = 0;
      for (B = l.length; u < B; ++u) {
        l[u] = e(l[u]);
      }
      Fa.length ? v(ba, b, 2) : (k.m ? k.l && (k.l.g[0].m = r) : k.m = r, v(Ea, q, 1));
    };
    var mb = function(b, e) {
      function f(N) {
        var m = N.nodeType;
        if (1 === m) {
          if (!Wa(N, "nocode")) {
            for (m = N.firstChild; m; m = m.nextSibling) {
              f(m);
            }
            m = Ua(N);
            if ("BR" === m || "LI" === m) {
              k[B] = "\n", l[B << 1] = r++, l[B++ << 1 | 1] = N;
            }
          }
        } else if (3 === m || 4 === m) {
          if (m = N.nodeValue) {
            m = e ? m.split("\r\n").join("\n").split("\r").join("\n") : m.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), k[B] = m, l[B << 1] = r, r += m.length, l[B++ << 1 | 1] = N;
          }
        }
      }
      var k = [], r = 0, l = [], B = 0;
      f(b);
      var u = k.join("");
      "\n" === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1));
      return {o:u, G:l};
    };
    var Xa = function(b, e, f) {
      function k(m) {
        var w = m.nodeType;
        if (1 === w && !Wa(m, "nocode")) {
          if ("BR" === Ua(m)) {
            r(m), m.parentNode && Ta(m);
          } else {
            for (m = m.firstChild; m; m = m.nextSibling) {
              k(m);
            }
          }
        } else if ((3 === w || 4 === w) && f) {
          var F = m.nodeValue, Y = F.indexOf("\r\n"), Z = 2;
          -1 === Y && (Y = F.indexOf("\n"), Z = 1);
          -1 === Y && (Y = F.indexOf("\r"));
          -1 !== Y && (w = F.substr(0, Y), m.nodeValue = w, (F = F.substr(Y + Z)) && gc(m, F), r(m), w || Ta(m));
        }
      }
      function r(m) {
        function w(Y, Z) {
          var Aa = Z ? Y.cloneNode(!1) : Y, va = Y.parentNode;
          if (va) {
            va = w(va, 1);
            var Za = Y.nextSibling;
            va.appendChild(Aa);
            for (var Ya = Za; Ya; Ya = Za) {
              Za = Ya.nextSibling, va.appendChild(Ya);
            }
          }
          return Aa;
        }
        for (; !m.nextSibling;) {
          if (m = m.parentNode, !m) {
            return;
          }
        }
        m = w(m.nextSibling, 0);
        for (var F; (F = m.parentNode) && 1 === F.nodeType;) {
          m = F;
        }
        B.push(m);
      }
      for (var l = I.createElement("li"); b.firstChild;) {
        l.appendChild(b.firstChild);
      }
      for (var B = [l], u = 0; u < B.length; ++u) {
        k(B[u]);
      }
      if (e === (e | 0)) {
        if (10 <= e && 7.2 > O) {
          var N = I.createElement("ol");
          N.innerHTML = '<li value="' + e + '">' + l.innerHTML + "</li>";
          B[0] = N.firstChild;
        } else {
          jb(l, "value", e);
        }
      }
      N = ea(b, "ol", {className:"linenums"});
      b = Math.max(0, e - 1 | 0) || 0;
      u = 0;
      for (e = B.length; u < e; ++u) {
        l = B[u], Gb(l, "L" + (u + b) % 10), l.firstChild || Hc(l, "\u00a0"), N.appendChild(l);
      }
    };
    var Ja = function() {
      var b = L, e = b.o, f = e.length, k = 0, r = b.G, l = r.length, B = 0, u = b.s, N = u.length, m = 0;
      u[N] = f;
      var w, F;
      for (F = w = 0; F < N;) {
        u[F] !== u[F + 2] ? (u[w++] = u[F++], u[w++] = u[F++]) : F += 2;
      }
      N = w;
      for (F = w = 0; F < N;) {
        var Y = u[F], Z = u[F + 1];
        for (F += 2; F + 2 <= N && u[F + 1] === Z;) {
          F += 2;
        }
        u[w++] = Y;
        u[w++] = Z;
      }
      u.length = w;
      b = b.A;
      N = "";
      b && (N = b.style.display, oa(b, "display", "none"));
      for (; B < l;) {
        w = r[B + 2] || f;
        Y = u[m + 2] || f;
        F = Math.min(w, Y);
        Z = r[B + 1];
        var Aa;
        if (1 !== Z.nodeType && (Aa = e.substring(k, F))) {
          9 > C && (Aa = Aa.split("\n").join("\r"));
          var va = Eb(Z, "span", {className:d[u[m + 1]]}, Aa);
          Ta(Z);
          k < w && (r[B + 1] = gc(va, e.substring(F, w)));
        }
        k = F;
        k >= w && (B += 2);
        k >= Y && (m += 2);
      }
      b && oa(b, "display", N);
      L = q;
      v(h, q, 3, !0);
    };
    var Na = [], ya;
    p.readyTime = a() - y;
    lb(function(b) {
      if (b) {
        b = [Ma("pre"), Ma("code"), Ma("xmp")];
        for (var e = 0; e < b.length; ++e) {
          for (var f = 0, k = b[e].length; f < k; ++f) {
            fb(b[e][f]);
          }
        }
        return !0;
      }
    });
    var fb = function(b) {
      Na.push(b);
      ya = Na.length;
      1 === ya && (rc ? na(rc, h) : $a ? $a.push(function() {
        na(h);
      }) : na(h));
    };
    var h = function() {
      function b(B, u) {
        return (B.split(u)[1] || "").split(" ")[0];
      }
      if (!L) {
        ya !== Na.length && fa && fa(ya - Na.length, ya);
        var e = Na.shift();
        if (e) {
          y = a();
          if (Wa(e, "prettyprint") && !Wa(e, "prettyprinted")) {
            for (var f = !1, k = e.parentNode; k !== ka; k = k.parentNode) {
              var r = Ua(k);
              if (("PRE" === r || "XMP" === r || "CODE" === r) && Wa(k, "prettyprint")) {
                f = !0;
                break;
              }
            }
            if (!f) {
              f = e.className;
              eb(e, "prettyprinted");
              k = !1;
              if (!k) {
                k = b(f, "lang-") || b(f, "language-");
                var l;
                !k && (l = la(e)) && "CODE" === Ua(l) && (k = b(l.className, "lang-") || b(l.className, "language-"));
              }
              r = Ua(e);
              "PRE" === r || "XMP" === r ? r = 1 : (r = e.currentStyle, l = I.defaultView, r = (r = r ? r.whiteSpace : l && l.getComputedStyle ? l.getComputedStyle(e, null).getPropertyValue("white-space") : 0) && "pre" === r.substr(0, 3));
              l = !1;
              (l = "true" === l || +l) || (l = b(f, "linenums:") || Wa(e, "linenums"), l = l.length ? +l : l);
              l && Xa(e, l, r);
              L = {U:k, A:e, ba:l, N:r, B:0, v:0, P:{}, s:[]};
              p.codeBlocks.push({elm:e, lang:k, readyTime:a() - y, decorateTime:0, decorateCount:0, updateDOMTime:0});
              v(ma);
              return;
            }
          }
          v(h, q, 0, !0);
        } else {
          U && U(p);
        }
      }
    };
    z.PR = {RegExpProxy:A, prettifyElement:fb, registerCompleteHandler:function(b, e) {
      U = b;
      fa = e;
    }};
  })();
  var qc = I.scripts || Ma("script");
  var sa = qc[qc.length - 1].src.split("/");
  --sa.length;
  "js" === sa[sa.length - 1] && --sa.length;
  (sa = sa.join("/")) && (sa += "/");
  aa("[p_assetUrl] " + sa);
  var Kc = Mc || "1" === Ha(ka, "mob");
  Nb = (Kc ? "mb" : "pc") + "/";
  Ia(function() {
    var x;
    (x = cb("logger")) || alert("#logger not found!");
    x ? (aa = function(A) {
      ea(x, "P", q, A);
    }, ab = function(A) {
      ea(x, "P", {style:{color:"red"}}, A);
    }, z.onerror = function(A, v, D) {
      ab(A + ", " + v + ", " + D);
      return !0;
    }) : z.console ? (aa = console.log, ab = console.error) : O ? (aa = yb, ab = opera.postError) : aa = ab = yb;
    for (; Pb.length;) {
      aa(Pb.shift());
    }
    for (; Qb.length;) {
      aa(Qb.shift());
    }
    Pb = Qb = q;
  });
  6.1 > uc && (rb ? rb(cc) : ca(z, "scroll", cc));
  kb(Dc);
  6.1 > uc && (rb ? rb(dc) : ca(z, "scroll", dc));
  kb(Ec);
  10 > C && (11 !== Lc || 5 !== C) || (9 > O || 1 > R || !Sa && !z.addEventListener ? I.write('<link href="' + sa + "css/" + Nb + Zb + '" rel="stylesheet"' + (8 > O ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > O || 1.5 > R || 532 >= Ab || 8 > Bb) && Ia(function() {
    ea(ib, "link", {href:sa + "css/" + Nb + Zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Mb) {
    if (Cb) {
      var rc = function(x) {
        z.RegExpCompat = function(A) {
          for (var v; v = $a.shift();) {
            v(A);
          }
          $a = q;
          na(x);
          bc(sa + "js/regexpcompat.js");
        };
        rc = q;
        ac(sa + "js/regexpcompat.js");
      };
    } else {
      z.RegExpCompat = function(x) {
        for (var A; A = $a.shift();) {
          A(x);
        }
        $a = q;
        bc(sa + "js/regexpcompat.js");
      }, ac(sa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

