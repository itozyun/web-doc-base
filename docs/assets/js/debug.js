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
var R, fb;
(function(Za, H, vb, mc, gb, L, nc, Oc, $a, Pc, t) {
  function na(C) {
    if (Za[0] === C) {
      return ab === ab + "" ? $a(ab) : ab;
    }
  }
  function Na(C) {
    var I = Za[3];
    if (Za[2] === C) {
      return I === I + "" ? $a(I) : I;
    }
  }
  var ja = L.body, Oa = ja.style, wb, ob, pb, ab = Za[1], K = na(2) || na(3), qb = na(7), Gb = na(5) || na(6), P = na(8) || na(9), V = na(11) || na(12), Ub = V && 0 <= Za.conpare(ab, "1.9.1"), Vb = na(13), Ga = na(15), xb = na(16) || na(17), oc = na(10) || na(25), bb = na(20) || na(22), Kc = na(23), Wb = na(21), pc = na(24), qc = bb && $a(nc.userAgent.split("Edg/")[1]), Lc = $a(nc.appVersion.split("Trident/")[1]) + 4, Xb = Na(35) || Na(36) || Na(37), rc = !K && !qb && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  Yb = (qb ? "ie5mac" : 5.5 > K ? "ie5win" : 6 > K ? "ie55" : 10 > K ? "ie" + (K | 0) : 7.2 > P ? "opr70" : 8 > P ? "opr72" : 9.5 > P ? "opr" + (P | 0) : V && !Ub ? 1.4 <= V ? "gck19" : 1.3 <= V ? "gck13" : 1 <= V ? "gck12" : 0.9 <= V ? "gck09" : 0.8 <= V ? "gck08" : "gck07" : "modern") + ".css", Nb = "", Mc = Na(1) || Na(2) || Na(3) || Na(4) || Na(8) || Na(9) || Na(10), sc, tc = Oa.transform !== t ? "transform" : Oa["-o-transform"] !== t ? "-o-transform" : Oa["-ms-transform"] !== t ? "-ms-transform" : 
  Oa.MozTransform !== t ? "-moz-transform" : Oa["-webkit-transform"] !== t ? "-webkit-transform" : "", Pa = [], uc = [], Ta = [], vc, wc, Ob, xc, Zb, $b, za, Hb, Ib, yc, Pb = [], Qb = [], ac, zc, bc, Ac;
  (function() {
    function C() {
      for (var a, b = 0, g = +new gb(); b < pa.length;) {
        g < pa[0].t ? ++b : (a = pa.splice(b, 1)[0], a.f(a.p));
      }
      ka = pa.length ? setTimeout(C, D) : 0;
    }
    function I() {
      for (var a, b = 0; b < X.length; ++b) {
        a = X[b], a.f();
      }
    }
    function E() {
      la && (la = clearInterval(la));
    }
    function S() {
      ka && (ka = clearTimeout(ka));
    }
    R = function(a) {
      Pb.push(a);
    };
    fb = function(a) {
      Qb.push(a);
    };
    Ib = function(a) {
      X.length || (la = setInterval(I, Q));
      X.push({f:a, C:++Y});
      return Y;
    };
    yc = function(a) {
      for (var b = X.length, g; g = X[--b];) {
        if (g.C === a) {
          X.splice(b, 1);
          X[0] || E();
          break;
        }
      }
      return 0;
    };
    ac = function() {
      la && (E(), la = setInterval(I, Q));
    };
    zc = E;
    var X = [], Q = 500, Y = 0, la;
    if (5 > K || qb) {
      H._wdb_onlooptimer = I, I = "_wdb_onlooptimer()";
    }
    za = function(a, b, g) {
      pa.length || (ka = setTimeout(C, D));
      pa.push({f:a, p:b, C:++xa, t:+new gb() + (D < g ? g : D)});
      return xa;
    };
    Hb = function(a) {
      for (var b = pa.length, g; g = pa[--b];) {
        if (g.C === a) {
          pa.splice(b, 1);
          break;
        }
      }
      return 0;
    };
    bc = function() {
      ka && (S(), ka = setTimeout(C, D));
    };
    Ac = S;
    var pa = [], D = 16, xa = 0, ka;
    if (5 > K || qb) {
      H._wdb_ontimer = C, C = "_wdb_ontimer()";
    }
  })();
  var rb, yb, hb, Ca, ib, Bc, cc, ra, Jb, Cc, Dc, dc, cb, sb, Ha, Ka, tb, db, zb, Ec, Kb, Wa, jb, Aa, Da;
  (function() {
    function C(a, b, g) {
      var u = ["<", a], w = 1, d, v;
      if (b) {
        for (d in b) {
          var G = b[d];
          if (null != G && "" !== G) {
            if ("style" === d) {
              u[++w] = ' style="';
              for (v in G) {
                for (var U = ++w, ia, Z = [], ea = v.split(""), sa = ea.length; sa;) {
                  ia = ea[--sa], "A" <= ia && "Z" >= ia && (ia = "-" + ia.toLowerCase()), Z[sa] = ia;
                }
                u[U] = Z.join("") + ":" + G[v] + ";";
              }
              u[++w] = '"';
            } else {
              "className" === d && (d = "class"), u[++w] = " " + d + '="' + G + '"';
            }
          }
        }
      }
      u[++w] = ">";
      null != g && (D && "font" !== a ? u[++w] = "<FONT>" + g + "</FONT>" : u[++w] = g);
      u[++w] = "</" + a + ">";
      return u.join("");
    }
    function I(a) {
      var b = a.split("-"), g = b.length;
      if (2 > g) {
        return a;
      }
      for (; 1 < g;) {
        a = b[--g], b[g] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function E(a) {
      return S(L, a);
    }
    function S(a, b) {
      var g = "*" === b && 6 > K ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), u = [], w = 0, d;
      for (d = g.length; w < d; ++w) {
        u[w] = g[w];
      }
      return u;
    }
    function X(a) {
      return D ? a.parentElement : a.parentNode;
    }
    function Q(a, b, g, u, w, d) {
      if (D) {
        var v = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var G = ib(2 > a ? Ca(b) : b);
        G = 2 > a ? G.indexOf(b) + a : G.length;
        b.insertAdjacentHTML(v, C(g, u, w));
        b = ib(b)[G];
        null != w && ("font" === g ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (xa) {
        b = L.createElement(C(g, u));
      } else {
        b = d ? L.createElementNS("http://www.w3.org/2000/svg", g) : L.createElement(g);
        if (u) {
          for (v in u) {
            if ((g = u[v]) || 0 === g) {
              switch(v) {
                case "class":
                case "className":
                  Kb(b, g);
                  break;
                case "style":
                  a = b.style;
                  for (G in g) {
                    a[G] = g[G];
                  }
                  break;
                default:
                  tb(b, v, g);
              }
            }
          }
        }
        ka || null != w && Y(b, w);
      }
      return b;
    }
    function Y(a, b) {
      if (D) {
        return Q(2, a, "font", t, b);
      }
      var g = L.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function la(a, b) {
      9 > K ? a.className = b : a.setAttribute("class", b);
    }
    function pa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var D = 5 > K;
    wb = E("html")[0];
    ob = E("head")[0];
    rb = function(a) {
      return H[a] || L[a] || L.getElementById(a);
    };
    yb = E;
    hb = S;
    Ca = X;
    ib = function(a) {
      a = D ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Bc = function(a) {
      var b = !(7.03 < P && 7.2 > P) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], u = a.length, w = -1, d; u;) {
        if (d = a[--u], b || 1 === d.nodeType) {
          D && "FONT" === d.tagName || (g[++w] = d);
        }
      }
      return g;
    };
    cc = function(a) {
      return D ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ra = function(a, b, g, u, w) {
      b = Q(2, a, b, g, u, w);
      D || (a.appendChild(b), ka && null != u && Y(b, u));
      return b;
    };
    Jb = function(a, b, g, u, w) {
      b = Q(0, a, b, g, u, w);
      D || (X(a).insertBefore(b, a), ka && null != u && Y(b, u));
      return b;
    };
    Cc = function(a, b, g, u, w) {
      b = Q(1, a, b, g, u, w);
      var d;
      D || ((d = a.nextSibling) ? Ca(d).insertBefore(b, d) : Ca(a).appendChild(b), ka && null != u && Y(b, u));
      return b;
    };
    Dc = Y;
    dc = function(a, b) {
      var g;
      if (D) {
        return Q(1, a, "font", t, b);
      }
      var u = L.createTextNode("" + b);
      (g = a.nextSibling) ? Ca(a).insertBefore(u, g) : Ca(a).appendChild(u);
      return u;
    };
    cb = function(a) {
      Ca(a) ? D ? a.outerHTML = "" : Ca(a).removeChild(a) : R("[DOM] p_DOM_remove(), No parentNode!");
    };
    sb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== wb;) {
        if (b = Ca(b), a === b) {
          return !0;
        }
      }
    };
    var xa = 9 > K, ka = xa;
    Ha = function(a) {
      return a.tagName.toUpperCase();
    };
    Ka = function(a, b) {
      8 > P && (b = I(b));
      return a.getAttribute(b) || "";
    };
    tb = function(a, b, g) {
      P && "tab-index" === b ? "-1" === g ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", g) : (8 > P && (b = I(b)), a.setAttribute(b, g));
    };
    db = function(a, b) {
      8 > P && (b = I(b));
      a.removeAttribute(b);
    };
    zb = function(a, b) {
      8 > P && (b = I(b));
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ec = function(a) {
      return a.className;
    };
    Kb = la;
    Wa = pa;
    jb = function(a, b) {
      var g;
      if (!pa(a, b)) {
        if (g = a.className) {
          b = " " + b;
        }
        la(a, g + b);
      }
    };
    Aa = function(a, b, g) {
      a.style[b] = g;
    };
    Da = function(a, b) {
      var g, u = -1, w;
      if (5.5 > K) {
        if (g = a.style.cssText) {
          for (g = g.toLowerCase().split(";"); w = g[++u];) {
            a.style[w.split(":")[0]] = "";
          }
        }
        if (b) {
          for (u = -1, g = b.split(";"); w = g[++u];) {
            var d = w.split(":")[0];
            a.style[d] = w.substr(d.length + 1);
          }
        }
      } else if (7.1 > P) {
        if (a.setAttribute("style", ""), b) {
          for (g = b.split(";"); w = g[++u];) {
            w = w.split(":"), a.style[w[0]] = w[1];
          }
        }
      } else {
        9 > P || 1 > V ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    Pa.splice(0, 0, function() {
      function a(U) {
        U = ib(U);
        for (var ia = U.length, Z, ea, sa; ia;) {
          if (Z = U[--ia], ea = Z.nodeType, 8 === ea) {
            b && v.push(Z);
          } else if (1 === ea) {
            switch(ea = Ha(Z), "/" === ea.charAt(0) && (ea = ea.substr(1), G[ea] = !0), ea) {
              case "STYLE":
                if (7.2 <= P && 9 > P) {
                  break;
                }
              case "LINK":
                D || u || sb(ob, Z) || d.push(Z);
                break;
              case "META":
                ea = Ka(Z, "name") || Ka(Z, "property");
                for (sa = w.length; sa;) {
                  if (0 === ea.indexOf(w[--sa])) {
                    v.push(Z);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (zb(Z, "async")) {
                  break;
                }
                if (g) {
                  Z.innerText = "";
                  g = !1;
                  break;
                }
              case "NOSCRIPT":
                if (zb(Z, "skip-cleanup")) {
                  break;
                }
              case "!":
                v.push(Z);
                break;
              case "SOURCE":
                H.HTMLSourceElement || v.push(Z);
                break;
              default:
                G[ea] ? v.push(Z) : ib(Z).length && a(Z);
            }
          }
        }
        for (; d[0];) {
          ob.appendChild(d.pop());
        }
        for (; v[0];) {
          cb(v.pop());
        }
      }
      pb = rb("jsMain");
      var b = !(8 > P || 5 > K || qb || .9 > V), g = wc, u = 7 > K, w = ["og:", "twitter:", "fb:"], d = [], v = [], G = {};
      a(wb);
    });
  })();
  var aa, ta, Qa, ub, ec, Ab, Bb, fc, gc, hc, Fc, Gc, Hc, Cb, va, ic;
  (function() {
    function C() {
      return h ? z ? 2 : k ? 3 : 1 : 0;
    }
    function I(c) {
      ta(H, "load", I);
      I = t;
      S(Pa, c, !0);
      Pa = t;
    }
    function E(c, f) {
      Bb(function() {
        var q = ka(c);
        f(q);
        q.addListener(f);
        return !0;
      });
    }
    function S(c, f, q) {
      for (var l = 0; l < c.length; ++l) {
        !0 === c[l](f) && (c.splice(l, 1), --l);
      }
      q && (c.length = 0);
    }
    function X(c, f, q) {
      Pa || b.length || za(Q);
      b.push(c, f, q);
    }
    function Q() {
      var c = b, f;
      for (b = []; f = c.shift();) {
        S(f, c.shift(), c.shift());
      }
    }
    function Y(c) {
      var f = c || event;
      c = g[f.type];
      var q = -1, l, F;
      K ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : w && (f.K = f.stopPropagation, f.stopPropagation = function() {
        F = !0;
      });
      for (; l = c[++q];) {
        l.j === this ? (this.h = l.i, K && (f.currentTarget = this), this.h(f), this.h = vb, this.h = t) : 7.2 > P && this === L && l.j === H && (H.h = l.i, H.h(f), delete H.h);
      }
      if (K) {
        return f.preventDefault = f.stopPropagation = vb, f.preventDefault = f.stopPropagation = t, f.returnValue;
      }
      w && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (v = !0), F && !v && f.K(), f.K = f.stopPropagation = t);
    }
    function la() {
      var c = 9 === a.offsetWidth;
      Cb !== c && (X(uc, Cb = c), R("p_cssAvailability:" + Cb));
    }
    function pa() {
      !Pa && r && (Hb(r), r = za(D));
    }
    function D() {
      r = 0;
      S(N);
    }
    function xa(c) {
      Pa || S(T, c);
    }
    var ka = H.matchMedia, a, b = [];
    Pa.push(function() {
      E = t;
      a = ra(ja, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Qa(function() {
        b.length && za(Q);
      });
    });
    aa = function(c, f, q, l) {
      if (d) {
        c.addEventListener(f, q, l ? rc ? l : l.capture : !1);
      } else {
        var F = {j:c, i:q};
        l = g[f];
        var oa = "on" + f, e, m;
        if (l) {
          for (e = l.length; m = l[--e];) {
            if (m.j === c && m.i === q) {
              return;
            }
          }
          g[f].push(F);
        } else {
          g[f] = l = [F], u || (f = c[oa], "function" === typeof f && f !== Y && l.unshift({j:c, i:f}));
        }
        u ? c.attachEvent(oa, Y) : c[oa] = Y;
      }
    };
    ta = function(c, f, q, l) {
      if (d) {
        c.removeEventListener(f, q, l ? rc ? l : l.capture : !1);
      } else {
        l = g[f];
        f = "on" + f;
        var F, oa, e;
        if (l) {
          for (F = l.length; oa = l[--F];) {
            oa.j === c && (oa.i === q ? l.splice(F, 1) : e = !0);
          }
          e || (u ? c.detachEvent(f, Y) : (c[f] = vb, c[f] = null));
        }
      }
    };
    var g = {}, u = !1, w = 525.13 > Ga, d = !w && !qb && H.addEventListener, v;
    w && wb.addEventListener("click", function(c) {
      if (v) {
        return v = !1, c.preventDefault(), !1;
      }
    });
    Qa = function(c) {
      Pa ? Pa.push(c) : alert("Load event has already been dispatched!");
    };
    ub = function(c) {
      G && G.push(c);
    };
    var G = [];
    if (419.3 >= Ga) {
      var U = function() {
        if (U) {
          var c = L.readyState;
          "loaded" === c || "complete" === c ? (U = t, I()) : za(U);
        }
      };
      za(U);
    } else {
      aa(H, "load", I);
    }
    K || .9 <= V && 1.8 > V ? aa(H, "unload", function(c) {
      S(G, c, !0);
    }) : G = t;
    Bb = function(c) {
      uc.push(c);
    };
    Qa(function() {
      la();
      Ib(la);
    });
    hc = function(c, f) {
      if (ia) {
        aa(c, "focusin", f);
      } else if (Z) {
        aa(c, "DOMFocusIn", f, !1);
      } else {
        if (sa) {
          Ra || (Ra = Ib(Ia));
        } else if (ea) {
          aa(L, "focus", kb, !0);
        } else if (Xa) {
          aa(L, "focus", kb, {capture:!0, passive:!1});
        } else {
          return;
        }
        for (var q = Ua, l = 0, F = q.length; l < F; ++l) {
          if (q[l] === c && q[l + 1] === f) {
            return;
          }
        }
        q.push(c, f);
      }
    };
    Fc = function(c, f) {
      if (ia) {
        aa(c, "focusin", f);
      } else if (Z) {
        aa(c, "DOMFocusIn", f, !1);
      } else {
        for (var q = Ua, l = 0, F = q.length; l < F; ++l) {
          if (q[l] === c && q[l + 1] === f) {
            q.splice(l, 2);
            q.length || (sa ? Ra = yc(Ra) : ea ? ta(L, "focus", kb, !0) : Xa && ta(L, "focus", kb, {capture:!0, passive:!1}));
            break;
          }
        }
      }
    };
    var ia = 6 <= K || Gb || 52 <= V || 15 <= bb || 534 <= Ga || 5 <= xb || Kc || 4 <= Wb || 4 <= pc || 11.6 <= na(8) || 12 <= na(9), Z = 8 <= P || bb || Wb || pc || Ga || xb, ea = 8 > P, sa = 6 > K, Xa = 52 > V || Vb;
    if (Xa || ea) {
      var Ua = [];
      var kb = function(c) {
        var f = Ua, q = ea ? L.activeElement : c.target;
        ea && (c = {type:"focusin", target:q, preventDefault:function() {
          c.preventDefault();
        }, stopPropagation:function() {
          c.stopPropagation();
        }});
        for (var l = 0, F = f.length; l < F; ++l) {
          var oa = f[l];
          (oa === q || sb(oa, q)) && f[l + 1].call(oa, c);
        }
      };
    } else if (sa) {
      Ua = [];
      var Ra, lb, Ja, Ia = function() {
        Ja = H.onerror;
        H.onerror = La;
        var c = L.activeElement;
        if (lb !== c) {
          lb = c;
          for (var f = Ua, q, l = 0, F = f.length; l < F; ++l) {
            q = f[l], (q === c || sb(q, c)) && f[l + 1].apply(q, [{target:c}]);
          }
        }
        H.onerror = Ja;
        Ja = t;
      }, La = function() {
        R("error!");
        H.onerror = Ja;
        Ja = lb = t;
        return !0;
      };
    }
    gc = function(c) {
      Ta && Ta.push(c);
    };
    var Sa = 60 > V || Vb, h, k, z;
    if (89 <= V || 89 <= bb || Xb && 79 <= qc || ka && (ka("(forced-colors:none)").matches || ka("(forced-colors:active)").matches)) {
      ic = !0, E("(forced-colors:active)", function(c) {
        h = c.matches;
        va = C();
        X(Ta, va);
        R("(forced-colors:active):" + va);
      });
    } else if (10 <= K || Gb || Xb && qc) {
      ic = !0, E("(-ms-high-contrast:black-on-white)", function(c) {
        h = k = c.matches;
        va !== C() && (va = C(), X(Ta, va), R("(-ms-high-contrast:black-on-white):" + va));
      }), E("(-ms-high-contrast:white-on-black)", function(c) {
        h = z = c.matches;
        va !== C() && (va = C(), X(Ta, va), R("(-ms-high-contrast:white-on-black):" + va));
      }), E("(-ms-high-contrast:active)", function(c) {
        h = c.matches;
        va !== C() && (va = C(), X(Ta, va), R("(-ms-high-contrast:active):" + va));
      });
    } else if (Xb && (K || V && 0 <= Za.conpare(ab, "1.8.1") || Vb)) {
      var x = function() {
        function c(l, F) {
          if (F && "transparent" === l) {
            return 382.5;
          }
          if ("#" === l.charAt(0)) {
            return parseInt("0x" + l.substr(1, 2), 16) + parseInt("0x" + l.substr(3, 2), 16) + parseInt("0x" + l.substr(5, 2), 16);
          }
          var oa = l.split("(")[1].split(",");
          return $a(oa[0]) + $a(oa[1]) + $a(oa[2]);
        }
        var f = L.defaultView;
        var q = f ? f.getComputedStyle(a, null) : a.currentStyle;
        f = (q && q.color || "").split(" ").join("");
        q = (q && q.backgroundColor || "").split(" ").join("");
        f && (h = "#123456" !== f && "rgb(18,52,86)" !== f, k = c(f) < c(q, !0), z = c(f) > c(q, !0), va !== C() && (va = C(), R("(forced-colors-fallback):" + va), X(Ta, va, Sa)));
      };
      Bb(function(c) {
        if (c) {
          return Aa(a, "color", "#123456"), Aa(a, "backgroundColor", "#123456"), Sa ? (x(), Ta = t) : Ib(x), x = t, !0;
        }
      });
    } else {
      Ta = C = t;
    }
    fc = function(c) {
      Pa || alert("p_listenImageReady is called back for images present at load time.");
      y.push(c);
    };
    var y = [], n = 7.5 <= P && 8 > P;
    n && function() {
      for (var c = L.images, f = c.length, q; f;) {
        q = c[--f], q.J = q.src, db(q, "src");
      }
    }();
    Qa(function() {
      function c() {
        l ? (F = q[--l], n && tb(F, "src", F.J), vc(f, n ? F.J : F.src)) : y = t;
      }
      function f(e) {
        S(y, {G:F, H:e, V:!l}, !l);
        c();
      }
      var q = L.images || yb("img"), l = q.length;
      if (12 > P || 532 > Ga) {
        c();
      } else {
        for (; l;) {
          var F = q[--l];
          var oa = 9 > K ? F.complete : 0 <= F.naturalWidth ? F.naturalWidth : F.width;
          X(y, {G:F, H:oa, V:!l}, !l);
        }
        y = t;
      }
    });
    ec = function(c) {
      N.push(c);
    };
    var N = [], r;
    aa(H, "resize", pa);
    ub(function() {
      r && clearTimeout(r);
      ta(H, "resize", pa);
    });
    Ab = function(c) {
      T.push(c);
    };
    var T = [], p = 0, A = 1 > V || 1.2 <= V && 1.8 > V || 7.2 >= P;
    A ? Ib(function() {
      var c = V ? H.scrollY : H.pageYOffset;
      p !== c && (p = c, xa());
    }) : aa(H, "scroll", xa);
    ub(function() {
      A || ta(H, "scroll", xa);
    });
    Gc = function(c, f) {
      if (J) {
        aa(c, "wheel", f, {passive:!1});
      } else if (ba) {
        aa(c, "mousewheel", f, !1);
      } else if (fa) {
        aa(c, "MozMousePixelScroll", f, !1);
      } else if (wa) {
        for (var q = ya, l = 0, F = q.length; l < F; ++l) {
          if (q[l] === c && q[l + 1] === f) {
            return;
          }
        }
        q.length || aa(L, "DOMMouseScroll", Ma, !1);
        q.push(c, f);
      }
    };
    Hc = function(c, f) {
      if (J) {
        ta(c, "wheel", f, {passive:!1});
      } else if (ba) {
        ta(c, "mousewheel", f, !1);
      } else if (fa) {
        ta(c, "MozMousePixelScroll", f, !1);
      } else if (wa) {
        for (var q = ya, l = 0, F = q.length; l < F; ++l) {
          if (q[l] === c && q[l + 1] === f) {
            q.splice(l, 2);
            q.length || ta(L, "DOMMouseScroll", Ma, !1);
            break;
          }
        }
      }
    };
    var J = 9 <= K || Gb || 17 <= V || 31 <= bb || 537.7 <= Ga, ba = 6 <= K || Gb || 9 <= P || bb || 522 <= Ga || xb, fa = Ub, wa = V && 0 <= Za.conpare(ab, "0.9.7") && !Ub;
    if (wa) {
      var ya = [], Ma = function(c) {
        for (var f = ya, q = c.target, l, F = 0, oa = f.length; F < oa; ++F) {
          l = f[F], sb(l, q) && f[F + 1].call(l, c);
        }
      };
    }
  })();
  (function() {
    9 > K && Qa(function() {
      var C = ra(ja, "div");
      Da(C, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sc = 1 < C.offsetHeight;
      Da(C, "");
      cb(C);
    });
    vc = function(C, I) {
      function E() {
        X || !Q || S.complete ? (R("[imageTest] timer -> img.complete. img.width=" + S.width), za(C, !!S.width), S.onerror = S.onload = vb, S = C = t) : (--Q, za(E));
      }
      var S = new Image(), X, Q = 99;
      R("[imageTest] start.");
      S.onerror = function() {
        R("[imageTest] error!");
        X = !0;
      };
      S.onload = function() {
        R("[imageTest] onload.");
        X = !0;
      };
      S.src = I;
      za(E);
    };
  })();
  (function() {
    fc(function(d) {
      var v = d.G;
      d = d.H;
      var G = Ca(v);
      !Wa(G, "aBodyRoot") && d ? jb(G, "img-loaded") : d || Ka(v, "alt") || Aa(v, "display", "none");
    });
    5.5 <= K && 8 > K && Ta && gc(function(d) {
      for (var v = hb(ja, "a"), G = v.length, U = 0; U < G; ++U) {
        v[U].hideFocus = !d;
      }
    });
    if (!ic && Ta) {
      var C, I = function() {
        C = ra(ob, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ea + "css/" + Nb + "hc/" + Yb});
        if (tc || 5.5 <= K && 9 > K && sc) {
          jb(ja, "jsCanRotate"), R("jsCanRotate!");
        }
        I = t;
      };
      gc(function(d) {
        d && !C ? I() : C && (d ? ob.appendChild(C) : cb(C));
      });
    }
    P && Qa(function() {
      for (var d = hb(ja, "a"), v = d.length, G = 0, U; G < v; ++G) {
        U = d[G], "-1" === Ka(U, "tabIndex") ? db(U, "tabIndex") : Ka(U, "href") && tb(U, "tabIndex", "0");
      }
      d = hb(ja, "input");
      G = 0;
      for (v = d.length; G < v; ++G) {
        U = d[G], "hidden" === Ka(U, "type") && db(U, "tabIndex");
      }
    });
    if (V && 0 > Za.conpare(ab, "0.9.5") || 536 > Ga) {
      var E, S, X, Q, Y, la;
      Qa(function() {
        Ga || aa(ja, "click", xa);
        aa(H, "blur", a);
        hc(ja, ka);
        aa(L, "keydown", pa);
        aa(L, "keyup", D);
      });
      var pa = function(d) {
        16 === d.keyCode ? S = !0 : 9 === d.keyCode && (E = S, X = +new gb(), R(d.type + ":TAB" + d.shiftKey + "/" + S + " time:" + X), Y && Ga && g(Y) && (la = !0, R(d.type + " cancelable=" + d.cancelable), d.stopPropagation(), d.preventDefault(), w()));
      }, D = function(d) {
        16 === d.keyCode && (S = !1);
      }, xa = function(d) {
        var v = d.target;
        R(d.type + v);
        Y && u(d.target, !0) && (R(d.type + " C"), la = !0, ta(Y, "blur", b), Y.blur(), Q = v, d.stopPropagation(), d.preventDefault(), w());
      }, ka = function(d) {
        var v = d.target;
        R(d.type + " " + v.type);
        Y !== v && (Q ? v.tagName ? v === Q ? (d.stopPropagation(), w(!0)) : (la = !0, ta(v, "blur", b), v.blur(), d.preventDefault(), R(d.type + " B" + Q), w()) : Q = t : (Y && (la = !0, ta(Y, "blur", b), Y.blur()), Y = v, aa(v, "blur", b)));
      }, a = function(d) {
        if (la) {
          R(d.type + " window " + d.target);
          d.stopPropagation();
          d.preventDefault();
          la = !1;
          for (var v in d) {
          }
        }
      }, b = function(d) {
        R(d.type + " " + d.target);
        d = d.target;
        Y === d && (ta(d, "blur", b), g(d));
      }, g = function(d) {
        var v = hb(ja, "*"), G = v.length, U = 0;
        E && X < +new gb() + 98 && (v = v.reverse());
        for (Q = t; U < G; ++U) {
          var ia = v[U];
          if (!Z) {
            if (d === ia) {
              R(" found:" + U + Ha(ia));
              var Z = !0;
            }
          } else if (u(ia)) {
            return Q = ia, za(w, 0, 99), !0;
          }
        }
      }, u = function(d, v) {
        function G() {
          return "-1" !== Ka(d, "tab-index");
        }
        switch({A:0, INPUT:1, OBJECT:2, EMBED:2, IFRAME:2, TEXTAREA:2, BUTTON:2, SELECT:2}[Ha(d)]) {
          case 0:
            if (!v && zb(d, "href") && G() && 0 <= d.offsetHeight * d.offsetWidth) {
              return R("Next : " + Ha(d)), !0;
            }
            break;
          case 1:
            if ("hidden" !== Ka(d, "type") && G() && !zb(d, "disabled") && 0 <= d.offsetHeight * d.offsetWidth) {
              return R("Next : " + Ha(d)), !0;
            }
            break;
          case 2:
            if (G() && !zb(d, "disabled") && 0 <= d.offsetHeight * d.offsetWidth) {
              return R("Next : " + Ha(d)), !0;
            }
        }
      }, w = function(d) {
        Q && (0 === d && R("setFocus <= setTimeout"), Ga || aa(Q, "blur", b), Y = Q, d || (R("***** .focus()"), Q.focus()));
        Q = t;
      };
    }
  })();
  (function() {
    function C(e) {
      var m = ea.length, B, M, ha, O;
      if (13 === (e.keyCode || e.ba) || e.type !== sa) {
        for (; m;) {
          var ca = ea[--m];
          if (ca.F === this || ca.u === this) {
            m = ca.F;
            var W = B = ca.u;
            if (ca.P) {
              if (Aa(m, "width", ca.$), m.src = ca.Z, Kb(W, ca.T), m = ca.L) {
                Da(m, ca.S), Kb(m, "caption jsCap");
              }
            } else {
              if (M = ca.N) {
                for (delete ca.N; B = Ca(B);) {
                  if (Wa(B, "caption")) {
                    jb(B, "jsCap");
                  } else {
                    var da = Ha(B);
                    if ("DIV" === da || "P" === da || "BLOCKQUOT" === da || "LI" === da || "DD" === da || "TD" === da || "TH" === da || "FORM" === da || "PRE" === da) {
                      break;
                    }
                  }
                }
                B = (B.offsetWidth | 0) - 4;
                1600 < B && (B = 1600);
                if (ca.M && 0 < M.split("/").pop().indexOf("=")) {
                  M = M.split("=");
                  da = M.length;
                  if (ha = M[da - 1]) {
                    (O = $a(ha.substr(1))) && ha === "s" + O ? M[da - 1] = "w" + B : M[da] = "w" + B;
                  }
                  M = M.join("=");
                } else if (ca.M || 0 < M.indexOf(".bp.blogspot.com/")) {
                  M = M.split("/");
                  da = M.length;
                  if (ha = M[da - 2]) {
                    (O = $a(ha.substr(1))) && ha === "s" + O ? M[da - 2] = "w" + B : M.splice(da - 1, 0, "w" + B);
                  }
                  M = M.join("/");
                }
                ca.X = M;
              }
              ca.T = Ec(W);
              jb(W, "jsPicaLarge");
              Aa(m, "width", "");
              m.src = ca.X;
              if (m = ca.L) {
                Da(m, ""), jb(m, "jsCapLarge");
              }
            }
            ca.P = !ca.P;
            break;
          }
        }
        I(e);
      }
    }
    function I(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    function E(e) {
      for (var m = arguments, B = 0, M = m.length; B < M; ++B) {
        if (isFinite(m[B])) {
          return m[B];
        }
      }
      return 0;
    }
    function S(e) {
      var m = n;
      if (Cb) {
        if (N && !m) {
          if (+new gb() < N) {
            return;
          }
          N = t;
        }
        7 === e ? (D("t"), r = 0) : (D("s"), r && (r = Hb(r)), x = E(H.pageYOffset, H.scrollY, Ia.scrollTop, ja.scrollTop));
        m ? (n = Q(t, m[0], m[1])) || (N = +new gb() + 99) : Q();
        ka();
      } else {
        n = t;
      }
    }
    function X() {
      D("w.blur");
    }
    function Q(e, m, B) {
      function M(Ya) {
        W = Ya;
        if (k) {
          da = k + ":translate" + (y ? "3D(0," : "(0,") + Ya + (y ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ya) {
          if (!Ja && (lb || Ra)) {
            var Rb = La.offsetWidth;
          }
          da = Ra ? "position:fixed;width:" + Rb + "px;top:" + (Ya - ha + ma) + "px" : Ja ? "top:" + Ya + "px" : "position:absolute;left:0;top:" + Ya + "px";
          lb && da && (da += ";" + (0 > Ya ? "clip:rect(" + -Ya + "px " + Rb + "px " + Ba + "px 0)" : Ya + Ba < Lb ? "clip:rect(0 " + Rb + "px " + Ba + "px 0)" : "clip:rect(0 " + Rb + "px " + (Lb - Ya) + "px 0)"), 8 > K || (da = da.split(" ").join(",")));
        }
      }
      var ha = x, O = Sa, ca = La.offsetTop === O.offsetTop, W = 0, da = "", Va = !0;
      if (ca) {
        for (var qa = 0, ma = 0, Fa = O; Fa && Fa !== ja;) {
          ma += Fa.offsetTop, Fa = Fa.offsetParent;
        }
        W = z;
        Fa = E(H.innerHeight, Ia.offsetHeight);
        var jc = O.offsetHeight, Ba = h.offsetHeight, Lb = Ba < jc ? jc : Ba, mb = ha, Db = mb + Fa, Sb = ma, Tb = Sb + Lb, Ic = ma + W, Nc = Ic + Ba;
        O = mb < Sb ? Sb : mb;
        var nb = Tb < Db ? Tb : Db, Eb = nb - O;
        mb = Tb <= mb;
        Db = Db <= Sb;
        if (m !== t) {
          Va = ma + m;
          e = Va + B;
          if (mb || Db) {
            return Fa <= B ? (m = ma, D("4.1.1")) : mb ? (m = Tb - B, D("4.1.2")) : (m = ma + B - Fa, D("4.1.3")), N = t, H.scroll(E(H.pageXOffset, H.scrollX, Ia.scrollLeft, ja.scrollLeft), m), D("4.1.*"), n;
          }
          Ba <= Eb ? (qa = 3, D("4.2")) : B <= Eb ? Ba - m <= Eb ? (qa = 2, D("4.3.1")) : O <= Va && e <= nb ? O < ma + W && (qa = 4, D("4.3.2")) : O <= Va && Va <= nb ? (qa = 5, D("4.3.3")) : O <= e && e <= nb ? (qa = 4, D("4.3.4")) : e < O ? (qa = 4, D("4.3.5")) : (qa = 5, D("4.3.6")) : (qa = 4, D("4.4"));
          Va = t;
        } else {
          e !== t ? Ba <= Eb ? (qa = 7, Va = !1, D("3.1")) : (W -= 60 * e, qa = nb - ma - Ba, e = O - ma, W < qa ? (W = qa, D("3.2.1")) : e < W ? (W = e, D("3.2.2")) : D("3.2.3"), qa = 6) : jc <= Ba || (mb ? (qa = 1, D("2.2.1")) : Db ? D("2.2.2") : Ba <= Eb ? (qa = 3, D("2.3")) : O < Ic ? (qa = 3, D("2.4.1")) : Nc < nb ? (qa = 2, D("2.4.2")) : ha < ma + Ba - Eb ? D("2.4.3") : (qa = 2, D("2.4.4")));
        }
        switch(qa) {
          case 0:
            M(0);
            break;
          case 1:
            M(Lb - Ba);
            break;
          case 2:
            M(nb - ma - Ba);
            break;
          case 3:
            M(O - ma);
            break;
          case 4:
            M(O - ma - m);
            break;
          case 5:
            M(nb - ma - (m + B));
          case 6:
            M(W);
        }
        a(W, Ba, ma, Lb, Fa, m || "-", B || "-");
      } else {
        a(W, "-", "-", "-", "-", "-", "-");
      }
      Da(h, da);
      z = W;
      return ca && Va;
    }
    function Y(e) {
      if (Cb) {
        D("m");
        V && (x = E(H.pageYOffset, Ia.scrollTop, ja.scrollTop), ka());
        var m = this !== e.target, B = m && E(e.deltaY, e.wheelDeltaY / 120, e.wheelDelta / -120, e.detail / ("MozMousePixelScroll" === e.type ? 45 : 1));
        m && B && Q(9 >= B ? -9 >= B ? -3 : B : 3) && (e.preventDefault(), e.stopPropagation());
      }
    }
    function la(e) {
      if (Cb) {
        var m = !!k || V, B = e.target, M = La.firstChild, ha = 0;
        if (sb(M, B)) {
          D(e.type || "ie5focus");
          aa(B, "blur", pa);
          if (k) {
            m = B.getBoundingClientRect(), e = m.bottom - m.top, ha = m.top - M.getBoundingClientRect().top;
          } else {
            for (e = B.offsetHeight; B && (m ? sb(M, B) : M !== B);) {
              ha += B.offsetTop, B = B.offsetParent;
            }
          }
          kb ? (n = [ha, e], r && Hb(r), r = za(S, 7, 1 > V || 536 > Ga || 14 > bb ? 500 : 0)) : (x = E(H.pageYOffset, H.scrollY, Ia.scrollTop, ja.scrollTop), Q(t, ha, e));
          b(ha, e);
        }
      }
    }
    function pa() {
      ta(this, "blur", pa);
      b(0, 0);
    }
    function D(e) {
      A && (ya && (ya = Hb(ya)), ya = za(xa, 0, 1400), A.innerHTML += " " + e);
    }
    function xa() {
      A.innerHTML = "";
    }
    function ka() {
      ba && (Aa(ba, "top", (x / 10 | 0) + "px"), p.innerHTML = " scrl:" + (x | 0));
    }
    function a(e, m, B, M, ha, O, ca) {
      fa && (Aa(fa, "top", ((e + B) / 10 | 0) + "px"), Aa(fa, "height", (m / 10 | 0) + "px"), Aa(ba, "height", (ha / 10 | 0) + "px"), Aa(J, "height", (ja.scrollHeight / 10 | 0) + "px"), T.innerHTML = "conY:" + B + "/sidY" + e + ", conH:" + M + "/sidH" + m + ", focY:" + O + " focH:" + ca);
    }
    function b(e, m) {
      wa && (Aa(wa, "top", (e / 10 | 0) + "px"), Aa(wa, "height", (m / 10 | 0) + "px"));
    }
    function g() {
      Ma.call(c);
    }
    function u() {
      L.fullscreenElement || L.fullscreen || L.webkitIsFullscreen || L.msFullscreenElement || H.fullScreen ? (tb(c, "id", "blog2slide-root"), l[1].parentNode.insertBefore(f, l[1]), w(), L.onkeydown = d) : q && (cb(f), db(c, "id"), db(q, "id"), q = L.onkeydown = t);
    }
    function w() {
      q && db(q, "id");
      F = 0 < F ? oa < F ? oa : F : 0;
      q = l[F];
      tb(q, "id", "blog2slide-current");
    }
    function d(e) {
      if ("ArrowRight" === e.key || 39 === e.keyCode) {
        ++F, w();
      } else if ("ArrowLeft" === e.key || 37 === e.keyCode) {
        --F, w();
      }
    }
    xc = V && 0 >= Za.conpare(ab, "0.9");
    Ob = !(7.2 > P || xc);
    Zb = function(e) {
      v ? Pa ? L.write('<script src="' + e + '">\x3c/script>') : fb("[DynamicScvriptLoader] Document already loaded! " + e) : Pa || ia.length ? ia.push(e) : Z(e);
    };
    $b = function(e) {
      v ? R("[DynamicScvriptLoader] " + e + " loaded.") : e === U ? Z(ia.shift()) : fb(e + " <> " + U);
    };
    var v = !Ob, G = Ob && 7.5 > P, U;
    if (!v) {
      var ia = [];
      G && (wc = !0);
      Qa(function() {
        Z(ia.shift());
      });
      var Z = function(e) {
        if (U = e) {
          G ? kc[0].src = e : ra(ob, "script", {src:e});
        }
      };
    }
    var ea = [], sa = 5.5 <= K && 8 > K ? "keypress" : "keydown";
    if (!oc) {
      var Xa = Oa.transition !== t || Oa["-o-transition"] !== t || Oa["-moz-transition"] !== t || Oa["-webkit-transition"] !== t;
      fc(function(e) {
        if (e.H && pb) {
          e = e.G;
          var m = Ca(e), B = "", M;
          if ("A" === Ha(m) && 1 === Bc(m).length) {
            var ha = Ka(m, "href");
            var O = ha.split("?")[0].split("#")[0].split(".");
            O = (O[O.length - 1] || "").toLowerCase();
            if ((M = 0 < ha.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + O + ".")) {
              aa(m, sa, C);
              aa(e, "click", C);
              aa(m, "click", I);
              Xa && (B = e.naturalWidth + 4 + "px", Aa(e, "width", B));
              jb(m, "jsPica");
              for (O = m; O = Ca(O);) {
                if (Wa(O, "caption")) {
                  var ca = O;
                  var W = ca.style.cssText.toLowerCase();
                  break;
                }
              }
              ea.push({u:m, L:ca, S:W, Z:e.src, $:B, N:ha, F:e, M:M});
            }
          }
        }
      });
      ub(function(e, m) {
        for (e = -1; m = ea[++e];) {
          ta(m.u, sa, C), ta(m.F, "click", C), ta(m.u, "click", I);
        }
      });
    }
    var Ua = ["jsSidebarFixer1", "jsSidebarFixer2"], kb = !(9 > K || P || 1 <= V && 1.3 > V), Ra = !(5 > xb || 2.2 > Wb || 6 > na(12) || Na(30) && 534 > Ga || Na(32) || 7 > K || 9 > P || 1 > V), lb = Ra || 6 === K || 1 > V, Ja = 7.5 > P, Ia, La, Sa, h, k = tc && !!ja.getBoundingClientRect, z = 0, x = 0, y, n, N, r;
    Jc || oc || (Bb(function(e) {
      if (e) {
        if (!pb) {
          return !0;
        }
        e = -1;
        var m;
        Ia = "CSS1Compat" !== L.compatMode ? ja : wb || ja;
        La = rb("jsSide");
        Sa = pb;
        if (!La) {
          return !0;
        }
        Ab(S);
        ec(S);
        h = Jb(cc(La), "div", {id:"jsSidebarFixer"});
        aa(H, "blur", X);
        for (hc(h, la); 1 < ib(La).length;) {
          h.appendChild(ib(La)[1]);
        }
        for (; m = Ua[++e];) {
          Gc(rb(m), Y);
        }
        K || Gb || 2 > bb || (y = Oa.perspective !== t || Oa.MozPerspective !== t || Oa["-webkit-perspective"] !== t);
        S();
        return !0;
      }
    }), ub(function() {
      for (var e = -1, m; m = Ua[++e];) {
        Hc(rb(m), Y);
      }
      ta(H, "blur", X);
      Fc(h, la);
    }));
    var T, p, A, J, ba, fa, wa, ya;
    Bb(function(e) {
      if (e) {
        if (!pb) {
          return !0;
        }
        var m = ib(ja);
        e = Jb(m[0], "div");
        if (Ra) {
          Da(e, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; m.length;) {
            e.appendChild(m.shift());
          }
          Da(e, "width:100%; height:100%; overflow:auto; position:relative;");
          e = Cc(e, "div");
          Da(wb, "overflow:hidden");
          Da(ja, "overflow:hidden");
          Da(e, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ra(e, "div", t, k ? "transform" + (y ? "3D" : "") : Ra ? "pos:fixed" : "pos:absolute");
        m = ra(e, "div");
        T = ra(m, "span");
        p = ra(m, "span");
        A = ra(e, "div");
        J = ra(e, "div");
        Da(J, "position:absolute;left:0;top:0;width:54px;background:#242");
        fa = ra(e, "div");
        Da(fa, "position:absolute;left:0;width:54px;background:#363");
        ba = ra(e, "div");
        Da(ba, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        wa = ra(fa, "div");
        Da(wa, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Qa(function() {
      function e(ca, W, da, Va) {
        var qa = Va ? "div" : "cite";
        if (0 === W.indexOf("urn:isbn:")) {
          W = W.substr(9).toUpperCase().split("-").join("");
          if (13 === W.length) {
            W = W.toString().slice(3, -1);
            for (var ma = 0, Fa = 0; 9 > Fa; Fa++) {
              ma += (W.charAt(Fa) - 0) * (10 - Fa);
            }
            ma = (11 - ma % 11) % 11;
            ma = 10 === ma ? "X" : ma.toString();
            W += ma;
          }
          10 === W.length && (W = "//www.amazon.co.jp/exec/obidos/ASIN/" + W + "/itozyun-22/ref=nosim/");
        }
        da = Va ? Jb(cc(B), qa, {className:da}) : ra(B, qa, {className:da});
        ra(da, "a", 0 === W.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:W, tabIndex:P ? "0" : t} : {href:W, tabIndex:P ? "0" : t}, ca);
      }
      if (pb) {
        for (var m = hb(pb, "blockquote"), B, M = -1, ha, O; B = m[++M];) {
          ha = Ka(B, "title"), O = Ka(B, "cite"), ha && O ? (db(B, "title"), e(ha, O, "js-bqLink", !0)) : O && (db(B, "cite"), e(H.decodeURI ? decodeURI(O) : O, O, "js-bqCite"));
        }
      }
    });
    var Ma, c, f, q, l, F, oa;
    Qa(function() {
      var e = rb("blog2slide-start");
      if (e) {
        var m = L.onfullscreenchange !== t ? "f" : L.onmozfullscreenchange !== t ? "mozF" : L.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        Ma = e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullscreen || e.msRequestFullscreen;
        0 !== m || Ma ? (e.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', aa(e.firstChild, "click", g), e = Ca(e), c = Ca(e), l = hb(e, "section"), f = L.createElement("h1"), f.innerHTML = hb(ja, "h1")[0].innerHTML, oa = l.length, l.splice(0, 0, f), 0 !== m ? aa(L, m + "ullscreenchange", u) : K ? aa(L, "MSFullscreenChange", u, !1) : ec(u)) : cb(e);
      }
    });
  })();
  var Fb, Mb = !mc || .9 > V || 8 > P || 5.5 > K, eb;
  (function() {
    function C(h) {
      return h === "" + h;
    }
    function I(h, k) {
      return Mb ? new b(h, k) : new mc(h, k);
    }
    function E(h, k, z, x, y) {
      var n = g.codeBlocks[g.codeBlocks.length - 1], N = a(), r = N - w;
      switch(z || 0) {
        case 1:
          g.initRegExpCount++;
          g.initRegExpTotal += r;
          g.initRegExpMax < r && (g.initRegExpMax = r, g.initRegExpSource = y.toString(), g.initRegExpInstance = y);
          break;
        case 2:
          n.decorateCount++;
          n.decorateTime += r;
          break;
        case 3:
          n.updateDOMTime += r;
      }
      if (N - u < U && !x) {
        return w = N, h(k);
      }
      za(S, {U:h, Y:k});
    }
    function S(h) {
      u = w = a();
      h.U(h.Y);
    }
    function X(h, k) {
      h && Fb[h] || (h = ia.test(k) ? "default-markup" : "default-code");
      var z = !!Fb[h];
      z && E(Ua, h, 0, !0);
      return z;
    }
    function Q() {
      function h(ya, Ma, c) {
        Ma && (k.g = k.g || [], k.g.push({l:k, B:k.B, O:1, s:N, D:ya, o:Ma, m:c, R:{}, v:0}));
      }
      var k = d, z = k.m, x = z[0], y = z[2], n = k.D, N = k.s, r = k.aa.shift(), T = k.R;
      if (r) {
        var p = T[r], A;
        if (!(0 <= p)) {
          if (A = x[r.charAt(0)]) {
            var J = r.match(A[1]);
            p = A[0];
          } else {
            for (p = 0, x = -1; A = y[++x];) {
              if (J = r.match(A[1])) {
                p = A[0];
                break;
              }
            }
          }
          !(A = C(p)) || J && C(J[1]) || (A = !1, p = 11);
          A || (T[r] = p);
        }
        y = k.v;
        T = r.length;
        k.v += T;
        if (A) {
          A = J[1];
          x = r.indexOf(A);
          var ba = A.length, fa = x + ba;
          J[2] && (fa = T - J[2].length, x = fa - ba);
          h(n + y, r.substr(0, x), z);
          if (ba && X(p, A)) {
            h(n + y + x, A);
            var wa = !0;
          }
          h(n + y + fa, r.substr(fa), z);
          k.g && k.g.length && (d = k.g.shift());
          wa || (d !== k ? E(sa, t, 2) : E(Q, t, 2));
        } else {
          N.push(n + y, p), E(Q, t, 2);
        }
      } else {
        k.l ? (d = k.l.g.shift()) ? E(sa, t, 2) : (d = k.l, E(Q, t, 2)) : E(lb, t, 2);
      }
    }
    function Y(h) {
      if (Xa.length) {
        var k = Xa.shift(), z = xa[k];
        if (z.pop) {
          xa[k] = z = I(z[0], z[1]);
        } else if (C(z)) {
          xa[k] = z = I(z);
        } else {
          return Y(h);
        }
        E(Y, h, 1, !1, z);
      } else {
        E(Ua, h);
      }
    }
    function la(h) {
      for (var k, z = h.firstChild; z; z = z.nextSibling) {
        var x = z.nodeType;
        k = 1 === x ? k ? h : z : 3 === x ? Z.test(z.nodeValue) ? h : k : k;
      }
      return k === h ? t : k;
    }
    Fb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var pa = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], D = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], xa = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ka = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), a = gb.now || function() {
      return +new gb();
    }, b, g = {useRegExpCompat:Mb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var u = a();
    var w, d, v, G, U = 5 > K ? 60 : 5.5 > K ? 0 : Mb ? 20 : 10, ia, Z;
    eb = [function(h) {
      H.RegExpCompat = b = h;
    }, function() {
      ia = I("^\\s*<");
      Z = I("\\S");
    }];
    Mb || (eb[1](), eb = t);
    var ea = function() {
      var h = d, k = h.W, z = kb(h.B, h.O), x = h.o = z.o;
      h.I = z.I;
      X(k, x) || (d = t, E(Sa, t, 0, !0));
    };
    var sa = function() {
      var h = d;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.D, 0);
      E(Q, t, 2);
    };
    var Xa = [];
    var Ua = function(h) {
      function k(p) {
        var A = p;
        0 <= p && (A = D[p]);
        0 <= A[1] && (A[1] = z(A[1]));
        return A;
      }
      function z(p) {
        var A = p;
        return 0 <= p && (A = xa[p], !A.exec) ? (Xa.push(p), p) : A;
      }
      var x = d, y = Fb[h];
      C(y) && (y = Fb[h] = Fb[y]);
      var n = y[0];
      if (0 <= n) {
        n = pa[n];
        if (0 <= n["-num"]) {
          var N = n["-num"];
          delete n["-num"];
          for (var r = -1; 9 > r;) {
            n["" + ++r] = N;
          }
        }
        y[0] = n;
      }
      for (var T in n) {
        n[T] = k(n[T]);
      }
      y[1] = z(y[1]);
      n = y[2];
      r = 0;
      for (N = n.length; r < N; ++r) {
        n[r] = k(n[r]);
      }
      Xa.length ? E(Y, h, 2) : (x.m ? x.l && (x.l.g[0].m = y) : x.m = y, E(sa, t, 1));
    };
    var kb = function(h, k) {
      function z(T) {
        var p = T.nodeType;
        if (1 === p) {
          if (!Wa(T, "nocode")) {
            for (p = T.firstChild; p; p = p.nextSibling) {
              z(p);
            }
            p = Ha(T);
            if ("BR" === p || "LI" === p) {
              x[N] = "\n", n[N << 1] = y++, n[N++ << 1 | 1] = T;
            }
          }
        } else if (3 === p || 4 === p) {
          if (p = T.nodeValue) {
            p = k ? p.split("\r\n").join("\n").split("\r").join("\n") : p.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), x[N] = p, n[N << 1] = y, y += p.length, n[N++ << 1 | 1] = T;
          }
        }
      }
      var x = [], y = 0, n = [], N = 0;
      z(h);
      var r = x.join("");
      "\n" === r.charAt(r.length - 1) && (r = r.substr(0, r.length - 1));
      return {o:r, I:n};
    };
    var Ra = function(h, k, z) {
      function x(p) {
        var A = p.nodeType;
        if (1 === A && !Wa(p, "nocode")) {
          if ("BR" === Ha(p)) {
            y(p), p.parentNode && cb(p);
          } else {
            for (p = p.firstChild; p; p = p.nextSibling) {
              x(p);
            }
          }
        } else if ((3 === A || 4 === A) && z) {
          var J = p.nodeValue, ba = J.indexOf("\r\n"), fa = 2;
          -1 === ba && (ba = J.indexOf("\n"), fa = 1);
          -1 === ba && (ba = J.indexOf("\r"));
          -1 !== ba && (A = J.substr(0, ba), p.nodeValue = A, (J = J.substr(ba + fa)) && dc(p, J), y(p), A || cb(p));
        }
      }
      function y(p) {
        function A(ba, fa) {
          var wa = fa ? ba.cloneNode(!1) : ba, ya = ba.parentNode;
          if (ya) {
            ya = A(ya, 1);
            var Ma = ba.nextSibling;
            ya.appendChild(wa);
            for (var c = Ma; c; c = Ma) {
              Ma = c.nextSibling, ya.appendChild(c);
            }
          }
          return wa;
        }
        for (; !p.nextSibling;) {
          if (p = p.parentNode, !p) {
            return;
          }
        }
        p = A(p.nextSibling, 0);
        for (var J; (J = p.parentNode) && 1 === J.nodeType;) {
          p = J;
        }
        N.push(p);
      }
      for (var n = L.createElement("li"); h.firstChild;) {
        n.appendChild(h.firstChild);
      }
      for (var N = [n], r = 0; r < N.length; ++r) {
        x(N[r]);
      }
      if (k === (k | 0)) {
        if (10 <= k && 7.2 > P) {
          var T = L.createElement("ol");
          T.innerHTML = '<li value="' + k + '">' + n.innerHTML + "</li>";
          N[0] = T.firstChild;
        } else {
          tb(n, "value", k);
        }
      }
      T = ra(h, "ol", {className:"linenums"});
      h = Math.max(0, k - 1 | 0) || 0;
      r = 0;
      for (k = N.length; r < k; ++r) {
        n = N[r], Kb(n, "L" + (r + h) % 10), n.firstChild || Dc(n, "\u00a0"), T.appendChild(n);
      }
    };
    var lb = function() {
      var h = d, k = h.o, z = k.length, x = 0, y = h.I, n = y.length, N = 0, r = h.s, T = r.length, p = 0;
      r[T] = z;
      var A, J;
      for (J = A = 0; J < T;) {
        r[J] !== r[J + 2] ? (r[A++] = r[J++], r[A++] = r[J++]) : J += 2;
      }
      T = A;
      for (J = A = 0; J < T;) {
        var ba = r[J], fa = r[J + 1];
        for (J += 2; J + 2 <= T && r[J + 1] === fa;) {
          J += 2;
        }
        r[A++] = ba;
        r[A++] = fa;
      }
      r.length = A;
      h = h.B;
      T = "";
      h && (T = h.style.display, Aa(h, "display", "none"));
      for (; N < n;) {
        A = y[N + 2] || z;
        ba = r[p + 2] || z;
        J = Math.min(A, ba);
        fa = y[N + 1];
        var wa;
        if (1 !== fa.nodeType && (wa = k.substring(x, J))) {
          9 > K && (wa = wa.split("\n").join("\r"));
          var ya = Jb(fa, "span", {className:ka[r[p + 1]]}, wa);
          cb(fa);
          x < A && (y[N + 1] = dc(ya, k.substring(J, A)));
        }
        x = J;
        x >= A && (N += 2);
        x >= ba && (p += 2);
      }
      h && Aa(h, "display", T);
      d = t;
      E(Sa, t, 3, !0);
    };
    var Ja = [], Ia;
    g.readyTime = a() - u;
    Bb(function(h) {
      if (h) {
        h = [yb("pre"), yb("code"), yb("xmp")];
        for (var k = 0; k < h.length; ++k) {
          for (var z = 0, x = h[k].length; z < x; ++z) {
            La(h[k][z]);
          }
        }
        return !0;
      }
    });
    var La = function(h) {
      Ja.push(h);
      Ia = Ja.length;
      1 === Ia && (lc ? za(lc, Sa) : eb ? eb.push(function() {
        za(Sa);
      }) : za(Sa));
    };
    var Sa = function() {
      function h(N, r) {
        return (N.split(r)[1] || "").split(" ")[0];
      }
      if (!d) {
        Ia !== Ja.length && G && G(Ia - Ja.length, Ia);
        var k = Ja.shift();
        if (k) {
          u = a();
          if (Wa(k, "prettyprint") && !Wa(k, "prettyprinted")) {
            for (var z = !1, x = k.parentNode; x !== ja; x = x.parentNode) {
              var y = Ha(x);
              if (("PRE" === y || "XMP" === y || "CODE" === y) && Wa(x, "prettyprint")) {
                z = !0;
                break;
              }
            }
            if (!z) {
              z = k.className;
              jb(k, "prettyprinted");
              x = !1;
              if (!x) {
                x = h(z, "lang-") || h(z, "language-");
                var n;
                !x && (n = la(k)) && "CODE" === Ha(n) && (x = h(n.className, "lang-") || h(n.className, "language-"));
              }
              y = Ha(k);
              "PRE" === y || "XMP" === y ? y = 1 : (y = k.currentStyle, n = L.defaultView, y = (y = y ? y.whiteSpace : n && n.getComputedStyle ? n.getComputedStyle(k, null).getPropertyValue("white-space") : 0) && "pre" === y.substr(0, 3));
              n = !1;
              (n = "true" === n || +n) || (n = h(z, "linenums:") || Wa(k, "linenums"), n = n.length ? +n : n);
              n && Ra(k, n, y);
              d = {W:x, B:k, ca:n, O:y, D:0, v:0, R:{}, s:[]};
              g.codeBlocks.push({elm:k, lang:x, readyTime:a() - u, decorateTime:0, decorateCount:0, updateDOMTime:0});
              E(ea);
              return;
            }
          }
          E(Sa, t, 0, !0);
        } else {
          v && v(g);
        }
      }
    };
    H.PR = {RegExpProxy:I, prettifyElement:La, registerCompleteHandler:function(h, k) {
      v = h;
      G = k;
    }};
  })();
  var kc = L.scripts || yb("script");
  var Ea = kc[kc.length - 1].src.split("/");
  --Ea.length;
  "js" === Ea[Ea.length - 1] && --Ea.length;
  (Ea = Ea.join("/")) && (Ea += "/");
  R("[p_assetUrl] " + Ea);
  var Jc = Mc || "1" === Ka(ja, "mob");
  Nb = (Jc ? "mb" : "pc") + "/";
  Qa(function() {
    var C;
    (C = rb("logger")) || alert("#logger not found!");
    C ? (R = function(I) {
      ra(C, "P", t, I);
    }, fb = function(I) {
      ra(C, "P", {style:{color:"red"}}, I);
    }, H.onerror = function(I, E, S) {
      fb(I + ", " + E + ", " + S);
      return !0;
    }) : H.console ? (R = console.log, fb = console.error) : P ? (R = vb, fb = opera.postError) : R = fb = vb;
    for (; Pb.length;) {
      R(Pb.shift());
    }
    for (; Qb.length;) {
      R(Qb.shift());
    }
    Pb = Qb = t;
  });
  6.1 > xb && (Ab ? Ab(ac) : aa(H, "scroll", ac));
  ub(zc);
  6.1 > xb && (Ab ? Ab(bc) : aa(H, "scroll", bc));
  ub(Ac);
  10 > K && (11 !== Lc || 5 !== K) || (9 > P || 1 > V || !qb && !H.addEventListener ? L.write('<link href="' + Ea + "css/" + Nb + Yb + '" rel="stylesheet"' + (8 > P ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > P || 1.5 > V || 532 >= Ga || 8 > bb) && Qa(function() {
    ra(ob, "link", {href:Ea + "css/" + Nb + Yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Mb) {
    if (Ob) {
      var lc = function(C) {
        H.RegExpCompat = function(I) {
          for (var E; E = eb.shift();) {
            E(I);
          }
          eb = t;
          za(C);
          $b(Ea + "js/regexpcompat.js");
        };
        lc = t;
        Zb(Ea + "js/regexpcompat.js");
      };
    } else {
      H.RegExpCompat = function(C) {
        for (var I; I = eb.shift();) {
          I(C);
        }
        eb = t;
        $b(Ea + "js/regexpcompat.js");
      }, Zb(Ea + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

