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
function Db() {
}
(function(Ja, J, ub, Vb, Ta, H, Wb, vc, Ka, wc, r) {
  function da(B) {
    if (Ja[0] === B) {
      return La === La + "" ? Ka(La) : La;
    }
  }
  function ya(B) {
    var O = Ja[3];
    if (Ja[2] === B) {
      return O === O + "" ? Ka(O) : O;
    }
  }
  var ja = H.body, za = ja.style, nb, Xa, cb, La = Ja[1], F = da(2) || da(3), Ya = da(7), ob = da(5) || da(6), P = da(8) || da(9), T = da(11) || da(12), Eb = T && 0 <= Ja.conpare(La, "1.9.1"), Fb = da(13), na = da(15), db = da(16) || da(17), Xb = da(10) || da(25), Ma = da(20) || da(22), rc = da(23), Gb = da(21), Yb = da(24), Zb = Ma && Ka(Wb.userAgent.split("Edg/")[1]), sc = Ka(Wb.appVersion.split("Trident/")[1]) + 4, Hb = ya(35) || ya(36) || ya(37), $b = !F && !Ya && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  Ib = (Ya ? "ie5mac" : 5.5 > F ? "ie5win" : 6 > F ? "ie55" : 10 > F ? "ie" + (F | 0) : 7.2 > P ? "opr70" : 8 > P ? "opr72" : 9.5 > P ? "opr" + (P | 0) : T && !Eb ? 1.4 <= T ? "gck19" : 1.3 <= T ? "gck13" : 1 <= T ? "gck12" : 0.9 <= T ? "gck09" : 0.8 <= T ? "gck08" : "gck07" : "modern") + ".css", vb = "", tc = ya(1) || ya(2) || ya(3) || ya(4) || ya(8) || ya(9) || ya(10), ac, bc = za.transform !== r ? "transform" : za["-o-transform"] !== r ? "-o-transform" : za["-ms-transform"] !== r ? "-ms-transform" : 
  za.MozTransform !== r ? "-moz-transform" : za["-webkit-transform"] !== r ? "-webkit-transform" : "", Na = [], cc = [], Fa = [], dc, ec, wb, fc, Jb, Kb, ma, xb, pb, gc, Lb, hc, Mb, ic;
  (function() {
    function B() {
      for (var b, c = 0, m = +new Ta(); c < ea.length;) {
        m < ea[0].t ? ++c : (b = ea.splice(c, 1)[0], b.f(b.p));
      }
      ca = ea.length ? setTimeout(B, ba) : 0;
    }
    function O() {
      for (var b, c = 0; c < U.length; ++c) {
        b = U[c], b.f();
      }
    }
    function D() {
      fa && (fa = clearInterval(fa));
    }
    function X() {
      ca && (ca = clearTimeout(ca));
    }
    pb = function(b) {
      U.length || (fa = setInterval(O, V));
      U.push({f:b, C:++Y});
      return Y;
    };
    gc = function(b) {
      for (var c = U.length, m; m = U[--c];) {
        if (m.C === b) {
          U.splice(c, 1);
          U[0] || D();
          break;
        }
      }
      return 0;
    };
    Lb = function() {
      fa && (D(), fa = setInterval(O, V));
    };
    hc = D;
    var U = [], V = 500, Y = 0, fa;
    if (5 > F || Ya) {
      J._wdb_onlooptimer = O, O = "_wdb_onlooptimer()";
    }
    ma = function(b, c, m) {
      ea.length || (ca = setTimeout(B, ba));
      ea.push({f:b, p:c, C:++ka, t:+new Ta() + (ba < m ? m : ba)});
      return ka;
    };
    xb = function(b) {
      for (var c = ea.length, m; m = ea[--c];) {
        if (m.C === b) {
          ea.splice(c, 1);
          break;
        }
      }
      return 0;
    };
    Mb = function() {
      ca && (X(), ca = setTimeout(B, ba));
    };
    ic = X;
    var ea = [], ba = 16, ka = 0, ca;
    if (5 > F || Ya) {
      J._wdb_ontimer = B, B = "_wdb_ontimer()";
    }
  })();
  var eb, fb, Ua, Aa, Za, jc, Nb, Oa, yb, kc, Ob, Pa, $a, oa, wa, ab, Qa, gb, lc, qb, Ha, Va, Ra, hb;
  (function() {
    function B(b, c, m) {
      var t = ["<", b], x = 1, g, y;
      if (c) {
        for (g in c) {
          var E = c[g];
          if (null != E && "" !== E) {
            if ("style" === g) {
              t[++x] = ' style="';
              for (y in E) {
                for (var R = ++x, ia, Z = [], W = y.split(""), ha = W.length; ha;) {
                  ia = W[--ha], "A" <= ia && "Z" >= ia && (ia = "-" + ia.toLowerCase()), Z[ha] = ia;
                }
                t[R] = Z.join("") + ":" + E[y] + ";";
              }
              t[++x] = '"';
            } else {
              "className" === g && (g = "class"), t[++x] = " " + g + '="' + E + '"';
            }
          }
        }
      }
      t[++x] = ">";
      null != m && (ba && "font" !== b ? t[++x] = "<FONT>" + m + "</FONT>" : t[++x] = m);
      t[++x] = "</" + b + ">";
      return t.join("");
    }
    function O(b) {
      var c = b.split("-"), m = c.length;
      if (2 > m) {
        return b;
      }
      for (; 1 < m;) {
        b = c[--m], c[m] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return c.join("");
    }
    function D(b) {
      return X(H, b);
    }
    function X(b, c) {
      var m = "*" === c && 6 > F ? "*" !== c ? b.all.tags(c.toUpperCase()) : b.all : b.getElementsByTagName(c), t = [], x = 0, g;
      for (g = m.length; x < g; ++x) {
        t[x] = m[x];
      }
      return t;
    }
    function U(b) {
      return ba ? b.parentElement : b.parentNode;
    }
    function V(b, c, m, t, x, g) {
      if (ba) {
        var y = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var E = Za(2 > b ? Aa(c) : c);
        E = 2 > b ? E.indexOf(c) + b : E.length;
        c.insertAdjacentHTML(y, B(m, t, x));
        c = Za(c)[E];
        null != x && ("font" === m ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (ka) {
        c = H.createElement(B(m, t));
      } else {
        c = g ? H.createElementNS("http://www.w3.org/2000/svg", m) : H.createElement(m);
        if (t) {
          for (y in t) {
            if ((m = t[y]) || 0 === m) {
              switch(y) {
                case "class":
                case "className":
                  qb(c, m);
                  break;
                case "style":
                  b = c.style;
                  for (E in m) {
                    b[E] = m[E];
                  }
                  break;
                default:
                  ab(c, y, m);
              }
            }
          }
        }
        ca || null != x && Y(c, x);
      }
      return c;
    }
    function Y(b, c) {
      if (ba) {
        return V(2, b, "font", r, c);
      }
      var m = H.createTextNode("" + c);
      b.appendChild(m);
      return m;
    }
    function fa(b, c) {
      9 > F ? b.className = c : b.setAttribute("class", c);
    }
    function ea(b, c) {
      return -1 !== (" " + b.className + " ").indexOf(" " + c + " ");
    }
    var ba = 5 > F;
    nb = D("html")[0];
    Xa = D("head")[0];
    eb = function(b) {
      return J[b] || H[b] || H.getElementById(b);
    };
    fb = D;
    Ua = X;
    Aa = U;
    Za = function(b) {
      b = ba ? b.children : b.childNodes;
      for (var c = [], m = b.length; m;) {
        c[--m] = b[m];
      }
      return c;
    };
    jc = function(b) {
      var c = !(7.03 < P && 7.2 > P) && b.children;
      b = c ? c : b.childNodes;
      for (var m = [], t = b.length, x = -1, g; t;) {
        if (g = b[--t], c || 1 === g.nodeType) {
          ba && "FONT" === g.tagName || (m[++x] = g);
        }
      }
      return m;
    };
    Nb = function(b) {
      return ba ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Oa = function(b, c, m, t, x) {
      c = V(2, b, c, m, t, x);
      ba || (b.appendChild(c), ca && null != t && Y(c, t));
      return c;
    };
    yb = function(b, c, m, t, x) {
      c = V(0, b, c, m, t, x);
      ba || (U(b).insertBefore(c, b), ca && null != t && Y(c, t));
      return c;
    };
    kc = Y;
    Ob = function(b, c) {
      var m;
      if (ba) {
        return V(1, b, "font", r, c);
      }
      var t = H.createTextNode("" + c);
      (m = b.nextSibling) ? Aa(b).insertBefore(t, m) : Aa(b).appendChild(t);
      return t;
    };
    Pa = function(b) {
      ba ? b.outerHTML = "" : Aa(b).removeChild(b);
    };
    $a = function(b, c) {
      if (b.contains) {
        return b.contains(c);
      }
      for (; c && c !== nb;) {
        if (c = Aa(c), b === c) {
          return !0;
        }
      }
    };
    var ka = 9 > F, ca = ka;
    oa = function(b) {
      return b.tagName.toUpperCase();
    };
    wa = function(b, c) {
      8 > P && (c = O(c));
      return b.getAttribute(c) || "";
    };
    ab = function(b, c, m) {
      P && "tab-index" === c ? "-1" === m ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", m) : (8 > P && (c = O(c)), b.setAttribute(c, m));
    };
    Qa = function(b, c) {
      8 > P && (c = O(c));
      b.removeAttribute(c);
    };
    gb = function(b, c) {
      8 > P && (c = O(c));
      return b.hasAttribute ? b.hasAttribute(c) : null != b.getAttribute(c);
    };
    lc = function(b) {
      return b.className;
    };
    qb = fa;
    Ha = ea;
    Va = function(b, c) {
      var m;
      if (!ea(b, c)) {
        if (m = b.className) {
          c = " " + c;
        }
        fa(b, m + c);
      }
    };
    Ra = function(b, c, m) {
      b.style[c] = m;
    };
    hb = function(b, c) {
      var m, t = -1, x;
      if (5.5 > F) {
        if (m = b.style.cssText) {
          for (m = m.toLowerCase().split(";"); x = m[++t];) {
            b.style[x.split(":")[0]] = "";
          }
        }
        if (c) {
          for (t = -1, m = c.split(";"); x = m[++t];) {
            var g = x.split(":")[0];
            b.style[g] = x.substr(g.length + 1);
          }
        }
      } else if (7.1 > P) {
        if (b.setAttribute("style", ""), c) {
          for (m = c.split(";"); x = m[++t];) {
            x = x.split(":"), b.style[x[0]] = x[1];
          }
        }
      } else {
        9 > P || 1 > T ? c ? b.setAttribute("style", c) : b.removeAttribute("style") : b.style.cssText = c;
      }
    };
    Na.splice(0, 0, function() {
      function b(R) {
        R = Za(R);
        for (var ia = R.length, Z, W, ha; ia;) {
          if (Z = R[--ia], W = Z.nodeType, 8 === W) {
            c && y.push(Z);
          } else if (1 === W) {
            switch(W = oa(Z), "/" === W.charAt(0) && (W = W.substr(1), E[W] = !0), W) {
              case "STYLE":
                if (7.2 <= P && 9 > P) {
                  break;
                }
              case "LINK":
                ba || t || $a(Xa, Z) || g.push(Z);
                break;
              case "META":
                W = wa(Z, "name") || wa(Z, "property");
                for (ha = x.length; ha;) {
                  if (0 === W.indexOf(x[--ha])) {
                    y.push(Z);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (gb(Z, "async")) {
                  break;
                }
                if (m) {
                  Z.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (gb(Z, "skip-cleanup")) {
                  break;
                }
              case "!":
                y.push(Z);
                break;
              case "SOURCE":
                J.HTMLSourceElement || y.push(Z);
                break;
              default:
                E[W] ? y.push(Z) : Za(Z).length && b(Z);
            }
          }
        }
        for (; g[0];) {
          Xa.appendChild(g.pop());
        }
        for (; y[0];) {
          Pa(y.pop());
        }
      }
      cb = eb("jsMain");
      var c = !(8 > P || 5 > F || Ya || .9 > T), m = ec, t = 7 > F, x = ["og:", "twitter:", "fb:"], g = [], y = [], E = {};
      b(nb);
    });
  })();
  var aa, la, Ba, bb, Pb, ib, rb, sb, Qb, Rb, mc, nc, oc, tb, pa, Sb;
  (function() {
    function B() {
      return w ? A ? 2 : z ? 3 : 1 : 0;
    }
    function O(d) {
      la(J, "load", O);
      O = r;
      X(Na, d, !0);
      Ba = Na = r;
    }
    function D(d, e) {
      rb(function() {
        var n = ca(d);
        e(n);
        n.addListener(e);
        return !0;
      });
    }
    function X(d, e, n) {
      for (var p = 0; p < d.length; ++p) {
        !0 === d[p](e) && (d.splice(p, 1), --p);
      }
      n && (d.length = 0);
    }
    function U(d, e, n) {
      Na || c.length || ma(V);
      c.push(d, e, n);
    }
    function V() {
      var d = c, e;
      for (c = []; e = d.shift();) {
        X(e, d.shift(), d.shift());
      }
    }
    function Y(d) {
      var e = d || event;
      d = m[e.type];
      var n = -1, p, G;
      F ? (e.target = e.srcElement, e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : x && (e.K = e.stopPropagation, e.stopPropagation = function() {
        G = !0;
      });
      for (; p = d[++n];) {
        p.j === this ? (this.h = p.i, F && (e.currentTarget = this), this.h(e), this.h = ub, this.h = r) : 7.2 > P && this === H && p.j === J && (J.h = p.i, J.h(e), delete J.h);
      }
      if (F) {
        return e.preventDefault = e.stopPropagation = ub, e.preventDefault = e.stopPropagation = r, e.returnValue;
      }
      x && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && (y = !0), G && !y && e.K(), e.K = e.stopPropagation = r);
    }
    function fa() {
      var d = 9 === b.offsetWidth;
      tb !== d && U(cc, tb = d);
    }
    function ea() {
      !Na && a && (xb(a), a = ma(ba));
    }
    function ba() {
      a = 0;
      X(Q);
    }
    function ka(d) {
      Na || X(f, d);
    }
    var ca = J.matchMedia, b, c = [];
    Na.push(function() {
      D = r;
      b = Oa(ja, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ba(function() {
        c.length && ma(V);
      });
    });
    aa = function(d, e, n, p) {
      if (g) {
        d.addEventListener(e, n, p ? $b ? p : p.capture : !1);
      } else {
        var G = {j:d, i:n};
        p = m[e];
        var S = "on" + e, Ca, Da;
        if (p) {
          for (Ca = p.length; Da = p[--Ca];) {
            if (Da.j === d && Da.i === n) {
              return;
            }
          }
          m[e].push(G);
        } else {
          m[e] = p = [G], t || (e = d[S], "function" === typeof e && e !== Y && p.unshift({j:d, i:e}));
        }
        t ? d.attachEvent(S, Y) : d[S] = Y;
      }
    };
    la = function(d, e, n, p) {
      if (g) {
        d.removeEventListener(e, n, p ? $b ? p : p.capture : !1);
      } else {
        p = m[e];
        e = "on" + e;
        var G, S, Ca;
        if (p) {
          for (G = p.length; S = p[--G];) {
            S.j === d && (S.i === n ? p.splice(G, 1) : Ca = !0);
          }
          Ca || (t ? d.detachEvent(e, Y) : (d[e] = ub, d[e] = null));
        }
      }
    };
    var m = {}, t = !1, x = 525.13 > na, g = !x && !Ya && J.addEventListener, y;
    x && nb.addEventListener("click", function(d) {
      if (y) {
        return y = !1, d.preventDefault(), !1;
      }
    });
    Ba = function(d) {
      Na.push(d);
    };
    bb = function(d) {
      E && E.push(d);
    };
    var E = [];
    if (419.3 >= na) {
      var R = function() {
        if (R) {
          var d = H.readyState;
          "loaded" === d || "complete" === d ? (R = r, O()) : ma(R);
        }
      };
      ma(R);
    } else {
      aa(J, "load", O);
    }
    F || .9 <= T && 1.8 > T ? aa(J, "unload", function(d) {
      X(E, d, !0);
    }) : E = r;
    rb = function(d) {
      cc.push(d);
    };
    Ba(function() {
      fa();
      pb(fa);
    });
    Rb = function(d, e) {
      if (ia) {
        aa(d, "focusin", e);
      } else if (Z) {
        aa(d, "DOMFocusIn", e, !1);
      } else {
        if (ha) {
          xa || (xa = pb(qa));
        } else if (W) {
          aa(H, "focus", Ga, !0);
        } else if (Wa) {
          aa(H, "focus", Ga, {capture:!0, passive:!1});
        } else {
          return;
        }
        for (var n = ra, p = 0, G = n.length; p < G; ++p) {
          if (n[p] === d && n[p + 1] === e) {
            return;
          }
        }
        n.push(d, e);
      }
    };
    mc = function(d, e) {
      if (ia) {
        aa(d, "focusin", e);
      } else if (Z) {
        aa(d, "DOMFocusIn", e, !1);
      } else {
        for (var n = ra, p = 0, G = n.length; p < G; ++p) {
          if (n[p] === d && n[p + 1] === e) {
            n.splice(p, 2);
            n.length || (ha ? xa = gc(xa) : W ? la(H, "focus", Ga, !0) : Wa && la(H, "focus", Ga, {capture:!0, passive:!1}));
            break;
          }
        }
      }
    };
    var ia = 6 <= F || ob || 52 <= T || 15 <= Ma || 534 <= na || 5 <= db || rc || 4 <= Gb || 4 <= Yb || 11.6 <= da(8) || 12 <= da(9), Z = 8 <= P || Ma || Gb || Yb || na || db, W = 8 > P, ha = 6 > F, Wa = 52 > T || Fb;
    if (Wa || W) {
      var ra = [];
      var Ga = function(d) {
        var e = ra, n = W ? H.activeElement : d.target;
        W && (d = {type:"focusin", target:n, preventDefault:function() {
          d.preventDefault();
        }, stopPropagation:function() {
          d.stopPropagation();
        }});
        for (var p = 0, G = e.length; p < G; ++p) {
          var S = e[p];
          (S === n || $a(S, n)) && e[p + 1].call(S, d);
        }
      };
    } else if (ha) {
      ra = [];
      var xa, sa, Ea, qa = function() {
        Ea = J.onerror;
        J.onerror = k;
        var d = H.activeElement;
        if (sa !== d) {
          sa = d;
          for (var e = ra, n, p = 0, G = e.length; p < G; ++p) {
            n = e[p], (n === d || $a(n, d)) && e[p + 1].apply(n, [{target:d}]);
          }
        }
        J.onerror = Ea;
        Ea = r;
      }, k = function() {
        J.onerror = Ea;
        Ea = sa = r;
        return !0;
      };
    }
    Qb = function(d) {
      Fa && Fa.push(d);
    };
    var l = 60 > T || Fb, w, z, A;
    if (89 <= T || 89 <= Ma || Hb && 79 <= Zb || ca && (ca("(forced-colors:none)").matches || ca("(forced-colors:active)").matches)) {
      Sb = !0, D("(forced-colors:active)", function(d) {
        w = d.matches;
        pa = B();
        U(Fa, pa);
      });
    } else if (10 <= F || ob || Hb && Zb) {
      Sb = !0, D("(-ms-high-contrast:black-on-white)", function(d) {
        w = z = d.matches;
        pa !== B() && (pa = B(), U(Fa, pa));
      }), D("(-ms-high-contrast:white-on-black)", function(d) {
        w = A = d.matches;
        pa !== B() && (pa = B(), U(Fa, pa));
      }), D("(-ms-high-contrast:active)", function(d) {
        w = d.matches;
        pa !== B() && (pa = B(), U(Fa, pa));
      });
    } else if (Hb && (F || T && 0 <= Ja.conpare(La, "1.8.1") || Fb)) {
      var q = function() {
        function d(p, G) {
          if (G && "transparent" === p) {
            return 382.5;
          }
          if ("#" === p.charAt(0)) {
            return parseInt("0x" + p.substr(1, 2), 16) + parseInt("0x" + p.substr(3, 2), 16) + parseInt("0x" + p.substr(5, 2), 16);
          }
          var S = p.split("(")[1].split(",");
          return Ka(S[0]) + Ka(S[1]) + Ka(S[2]);
        }
        var e = H.defaultView;
        var n = e ? e.getComputedStyle(b, null) : b.currentStyle;
        e = (n && n.color || "").split(" ").join("");
        n = (n && n.backgroundColor || "").split(" ").join("");
        e && (w = "#123456" !== e && "rgb(18,52,86)" !== e, z = d(e) < d(n, !0), A = d(e) > d(n, !0), pa !== B() && (pa = B(), U(Fa, pa, l)));
      };
      rb(function(d) {
        if (d) {
          return Ra(b, "color", "#123456"), Ra(b, "backgroundColor", "#123456"), l ? (q(), Fa = r) : pb(q), q = r, !0;
        }
      });
    } else {
      Fa = B = r;
    }
    sb = function(d) {
      L.push(d);
    };
    var L = [], u = 7.5 <= P && 8 > P;
    u && function() {
      for (var d = H.images, e = d.length, n; e;) {
        n = d[--e], n.J = n.src, Qa(n, "src");
      }
    }();
    Ba(function() {
      function d() {
        p ? (G = n[--p], u && ab(G, "src", G.J), dc(e, u ? G.J : G.src)) : sb = L = r;
      }
      function e(Ca) {
        X(L, {G:G, H:Ca, V:!p}, !p);
        d();
      }
      var n = H.images || fb("img"), p = n.length;
      if (12 > P || 532 > na) {
        d();
      } else {
        for (; p;) {
          var G = n[--p];
          var S = 9 > F ? G.complete : 0 <= G.naturalWidth ? G.naturalWidth : G.width;
          U(L, {G:G, H:S, V:!p}, !p);
        }
        sb = L = r;
      }
    });
    Pb = function(d) {
      Q.push(d);
    };
    var Q = [], a;
    aa(J, "resize", ea);
    bb(function() {
      a && clearTimeout(a);
      la(J, "resize", ea);
    });
    ib = function(d) {
      f.push(d);
    };
    var f = [], h = 0, v = 1 > T || 1.2 <= T && 1.8 > T || 7.2 >= P;
    v ? pb(function() {
      var d = T ? J.scrollY : J.pageYOffset;
      h !== d && (h = d, ka());
    }) : aa(J, "scroll", ka);
    bb(function() {
      v || la(J, "scroll", ka);
    });
    nc = function(d, e) {
      if (K) {
        aa(d, "wheel", e, {passive:!1});
      } else if (C) {
        aa(d, "mousewheel", e, !1);
      } else if (M) {
        aa(d, "MozMousePixelScroll", e, !1);
      } else if (I) {
        for (var n = N, p = 0, G = n.length; p < G; ++p) {
          if (n[p] === d && n[p + 1] === e) {
            return;
          }
        }
        n.length || aa(H, "DOMMouseScroll", ta, !1);
        n.push(d, e);
      }
    };
    oc = function(d, e) {
      if (K) {
        la(d, "wheel", e, {passive:!1});
      } else if (C) {
        la(d, "mousewheel", e, !1);
      } else if (M) {
        la(d, "MozMousePixelScroll", e, !1);
      } else if (I) {
        for (var n = N, p = 0, G = n.length; p < G; ++p) {
          if (n[p] === d && n[p + 1] === e) {
            n.splice(p, 2);
            n.length || la(H, "DOMMouseScroll", ta, !1);
            break;
          }
        }
      }
    };
    var K = 9 <= F || ob || 17 <= T || 31 <= Ma || 537.7 <= na, C = 6 <= F || ob || 9 <= P || Ma || 522 <= na || db, M = Eb, I = T && 0 <= Ja.conpare(La, "0.9.7") && !Eb;
    if (I) {
      var N = [], ta = function(d) {
        for (var e = N, n = d.target, p, G = 0, S = e.length; G < S; ++G) {
          p = e[G], $a(p, n) && e[G + 1].call(p, d);
        }
      };
    }
  })();
  (function() {
    9 > F && Ba(function() {
      var B = Oa(ja, "div");
      hb(B, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ac = 1 < B.offsetHeight;
      hb(B, "");
      Pa(B);
    });
    dc = function(B, O) {
      function D() {
        U || !V || X.complete ? (ma(B, !!X.width), X.onerror = X.onload = ub, X = B = r) : (--V, ma(D));
      }
      var X = new Image(), U, V = 99;
      X.onerror = function() {
        U = !0;
      };
      X.onload = function() {
        U = !0;
      };
      X.src = O;
      ma(D);
    };
  })();
  (function() {
    sb(function(g) {
      var y = g.G;
      g = g.H;
      var E = Aa(y);
      !Ha(E, "aBodyRoot") && g ? Va(E, "img-loaded") : g || wa(y, "alt") || Ra(y, "display", "none");
    });
    5.5 <= F && 8 > F && Fa && Qb(function(g) {
      for (var y = Ua(ja, "a"), E = y.length, R = 0; R < E; ++R) {
        y[R].hideFocus = !g;
      }
    });
    if (!Sb && Fa) {
      var B, O = function() {
        B = Oa(Xa, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + vb + "hc/" + Ib});
        (bc || 5.5 <= F && 9 > F && ac) && Va(ja, "jsCanRotate");
        O = r;
      };
      Qb(function(g) {
        g && !B ? O() : B && (g ? Xa.appendChild(B) : Pa(B));
      });
    }
    P && Ba(function() {
      for (var g = Ua(ja, "a"), y = g.length, E = 0, R; E < y; ++E) {
        R = g[E], "-1" === wa(R, "tabIndex") ? Qa(R, "tabIndex") : wa(R, "href") && ab(R, "tabIndex", "0");
      }
      g = Ua(ja, "input");
      E = 0;
      for (y = g.length; E < y; ++E) {
        R = g[E], "hidden" === wa(R, "type") && Qa(R, "tabIndex");
      }
    });
    if (T && 0 > Ja.conpare(La, "0.9.5") || 536 > na) {
      var D, X, U, V, Y, fa;
      Ba(function() {
        na || aa(ja, "click", ka);
        aa(J, "blur", b);
        Rb(ja, ca);
        aa(H, "keydown", ea);
        aa(H, "keyup", ba);
      });
      var ea = function(g) {
        16 === g.keyCode ? X = !0 : 9 === g.keyCode && (D = X, U = +new Ta(), Y && na && m(Y) && (fa = !0, g.stopPropagation(), g.preventDefault(), x()));
      }, ba = function(g) {
        16 === g.keyCode && (X = !1);
      }, ka = function(g) {
        var y = g.target;
        Y && t(g.target, !0) && (fa = !0, la(Y, "blur", c), Y.blur(), V = y, g.stopPropagation(), g.preventDefault(), x());
      }, ca = function(g) {
        var y = g.target;
        Y !== y && (V ? y.tagName ? y === V ? (g.stopPropagation(), x(!0)) : (fa = !0, la(y, "blur", c), y.blur(), g.preventDefault(), x()) : V = r : (Y && (fa = !0, la(Y, "blur", c), Y.blur()), Y = y, aa(y, "blur", c)));
      }, b = function(g) {
        if (fa) {
          g.stopPropagation();
          g.preventDefault();
          fa = !1;
          for (var y in g) {
          }
        }
      }, c = function(g) {
        g = g.target;
        Y === g && (la(g, "blur", c), m(g));
      }, m = function(g) {
        var y = Ua(ja, "*"), E = y.length, R = 0;
        D && U < +new Ta() + 98 && (y = y.reverse());
        for (V = r; R < E; ++R) {
          var ia = y[R];
          if (!Z) {
            if (g === ia) {
              oa(ia);
              var Z = !0;
            }
          } else if (t(ia)) {
            return V = ia, ma(x, 0, 99), !0;
          }
        }
      }, t = function(g, y) {
        function E() {
          return "-1" !== wa(g, "tab-index");
        }
        switch({A:0, INPUT:1, OBJECT:2, EMBED:2, IFRAME:2, TEXTAREA:2, BUTTON:2, SELECT:2}[oa(g)]) {
          case 0:
            if (!y && gb(g, "href") && E() && 0 <= g.offsetHeight * g.offsetWidth) {
              return Db("Next : " + oa(g)), !0;
            }
            break;
          case 1:
            if ("hidden" !== wa(g, "type") && E() && !gb(g, "disabled") && 0 <= g.offsetHeight * g.offsetWidth) {
              return Db("Next : " + oa(g)), !0;
            }
            break;
          case 2:
            if (E() && !gb(g, "disabled") && 0 <= g.offsetHeight * g.offsetWidth) {
              return Db("Next : " + oa(g)), !0;
            }
        }
      }, x = function(g) {
        V && (na || aa(V, "blur", c), Y = V, g || V.focus());
        V = r;
      };
    }
  })();
  (function() {
    function B(a) {
      var f = t.length, h, v, K, C;
      if (13 === (a.keyCode || a.ba) || a.type !== x) {
        for (; f;) {
          var M = t[--f];
          if (M.F === this || M.u === this) {
            f = M.F;
            var I = h = M.u;
            if (M.P) {
              if (Ra(f, "width", M.$), f.src = M.Z, qb(I, M.T), f = M.L) {
                hb(f, M.S), qb(f, "caption jsCap");
              }
            } else {
              if (v = M.N) {
                for (delete M.N; h = Aa(h);) {
                  if (Ha(h, "caption")) {
                    Va(h, "jsCap");
                  } else {
                    var N = oa(h);
                    if ("DIV" === N || "P" === N || "BLOCKQUOT" === N || "LI" === N || "DD" === N || "TD" === N || "TH" === N || "FORM" === N || "PRE" === N) {
                      break;
                    }
                  }
                }
                h = (h.offsetWidth | 0) - 4;
                1600 < h && (h = 1600);
                if (M.M && 0 < v.split("/").pop().indexOf("=")) {
                  v = v.split("=");
                  N = v.length;
                  if (K = v[N - 1]) {
                    (C = Ka(K.substr(1))) && K === "s" + C ? v[N - 1] = "w" + h : v[N] = "w" + h;
                  }
                  v = v.join("=");
                } else if (M.M || 0 < v.indexOf(".bp.blogspot.com/")) {
                  v = v.split("/");
                  N = v.length;
                  if (K = v[N - 2]) {
                    (C = Ka(K.substr(1))) && K === "s" + C ? v[N - 2] = "w" + h : v.splice(N - 1, 0, "w" + h);
                  }
                  v = v.join("/");
                }
                M.X = v;
              }
              M.T = lc(I);
              Va(I, "jsPicaLarge");
              Ra(f, "width", "");
              f.src = M.X;
              if (f = M.L) {
                hb(f, ""), Va(f, "jsCapLarge");
              }
            }
            M.P = !M.P;
            break;
          }
        }
        O(a);
      }
    }
    function O(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function D(a) {
      for (var f = arguments, h = 0, v = f.length; h < v; ++h) {
        if (isFinite(f[h])) {
          return f[h];
        }
      }
      return 0;
    }
    function X(a) {
      var f = qa;
      if (tb) {
        if (k && !f) {
          if (+new Ta() < k) {
            return;
          }
          k = r;
        }
        7 === a ? l = 0 : (l && (l = xb(l)), sa = D(J.pageYOffset, J.scrollY, W.scrollTop, ja.scrollTop));
        f ? (qa = U(r, f[0], f[1])) || (k = +new Ta() + 99) : U();
      } else {
        qa = r;
      }
    }
    function U(a, f, h) {
      function v(Ia) {
        I = Ia;
        if (Ga) {
          N = Ga + ":translate" + (Ea ? "3D(0," : "(0,") + Ia + (Ea ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ia) {
          if (!Z && (ia || R)) {
            var zb = ha.offsetWidth;
          }
          N = R ? "position:fixed;width:" + zb + "px;top:" + (Ia - K + e) + "px" : Z ? "top:" + Ia + "px" : "position:absolute;left:0;top:" + Ia + "px";
          ia && N && (N += ";" + (0 > Ia ? "clip:rect(" + -Ia + "px " + zb + "px " + S + "px 0)" : Ia + S < Ca ? "clip:rect(0 " + zb + "px " + S + "px 0)" : "clip:rect(0 " + zb + "px " + (Ca - Ia) + "px 0)"), 8 > F || (N = N.split(" ").join(",")));
        }
      }
      var K = sa, C = Wa, M = ha.offsetTop === C.offsetTop, I = 0, N = "", ta = !0;
      if (M) {
        for (var d = 0, e = 0, n = C; n && n !== ja;) {
          e += n.offsetTop, n = n.offsetParent;
        }
        I = xa;
        var p = D(J.innerHeight, W.offsetHeight), G = C.offsetHeight, S = ra.offsetHeight, Ca = S < G ? G : S, Da = K, jb = Da + p, Ab = e, Bb = Ab + Ca, pc = e + I, uc = pc + S;
        C = Da < Ab ? Ab : Da;
        n = Bb < jb ? Bb : jb;
        var kb = n - C;
        Da = Bb <= Da;
        jb = jb <= Ab;
        if (f !== r) {
          ta = e + f;
          a = ta + h;
          var lb;
          if (Da || jb) {
            return p <= h ? lb = e : lb = Da ? Bb - h : e + h - p, k = r, J.scroll(D(J.pageXOffset, J.scrollX, W.scrollLeft, ja.scrollLeft), lb), qa;
          }
          S <= kb ? d = 3 : h <= kb ? S - f <= kb ? d = 2 : C <= ta && a <= n ? C < e + I && (d = 4) : d = C <= ta && ta <= n ? 5 : C <= a && a <= n ? 4 : a < C ? 4 : 5 : d = 4;
          ta = r;
        } else {
          a !== r ? S <= kb ? (d = 7, ta = !1) : (I -= 60 * a, d = n - e - S, lb = C - e, I < d ? I = d : lb < I && (I = lb), d = 6) : G <= S || (Da ? d = 1 : jb || (S <= kb ? d = 3 : C < pc ? d = 3 : uc < n ? d = 2 : K < e + S - kb || (d = 2)));
        }
        switch(d) {
          case 0:
            v(0);
            break;
          case 1:
            v(Ca - S);
            break;
          case 2:
            v(n - e - S);
            break;
          case 3:
            v(C - e);
            break;
          case 4:
            v(C - e - f);
            break;
          case 5:
            v(n - e - (f + h));
          case 6:
            v(I);
        }
      }
      hb(ra, N);
      xa = I;
      return M && ta;
    }
    function V(a) {
      if (tb) {
        T && (sa = D(J.pageYOffset, W.scrollTop, ja.scrollTop));
        var f = this !== a.target, h = f && D(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
        f && h && U(9 >= h ? -9 >= h ? -3 : h : 3) && (a.preventDefault(), a.stopPropagation());
      }
    }
    function Y(a) {
      if (tb) {
        var f = !!Ga || T, h = a.target;
        a = ha.firstChild;
        var v = 0;
        if ($a(a, h)) {
          if (Ga) {
            f = h.getBoundingClientRect();
            var K = f.bottom - f.top;
            v = f.top - a.getBoundingClientRect().top;
          } else {
            for (K = h.offsetHeight; h && (f ? $a(a, h) : a !== h);) {
              v += h.offsetTop, h = h.offsetParent;
            }
          }
          E ? (qa = [v, K], l && xb(l), l = ma(X, 7, 1 > T || 536 > na || 14 > Ma ? 500 : 0)) : (sa = D(J.pageYOffset, J.scrollY, W.scrollTop, ja.scrollTop), U(r, v, K));
        }
      }
    }
    function fa() {
      w.call(z);
    }
    function ea() {
      H.fullscreenElement || H.fullscreen || H.webkitIsFullscreen || H.msFullscreenElement || J.fullScreen ? (ab(z, "id", "blog2slide-root"), L[1].parentNode.insertBefore(A, L[1]), ba(), H.onkeydown = ka) : q && (Pa(A), Qa(z, "id"), Qa(q, "id"), q = H.onkeydown = r);
    }
    function ba() {
      q && Qa(q, "id");
      u = 0 < u ? Q < u ? Q : u : 0;
      q = L[u];
      ab(q, "id", "blog2slide-current");
    }
    function ka(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++u, ba();
      } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
        --u, ba();
      }
    }
    fc = T && 0 >= Ja.conpare(La, "0.9");
    wb = !(7.2 > P || fc);
    Jb = function(a) {
      ca ? H.write('<script src="' + a + '">\x3c/script>') : Na || c.length ? c.push(a) : m(a);
    };
    Kb = function() {
      ca || m(c.shift());
    };
    var ca = !wb, b = wb && 7.5 > P;
    if (!ca) {
      var c = [];
      b && (ec = !0);
      Ba(function() {
        m(c.shift());
      });
      var m = function(a) {
        a && (b ? Tb[0].src = a : Oa(Xa, "script", {src:a}));
      };
    }
    var t = [], x = 5.5 <= F && 8 > F ? "keypress" : "keydown";
    if (!Xb) {
      var g = za.transition !== r || za["-o-transition"] !== r || za["-moz-transition"] !== r || za["-webkit-transition"] !== r;
      sb(function(a) {
        if (a.H && cb) {
          a = a.G;
          var f = Aa(a), h = "", v;
          if ("A" === oa(f) && 1 === jc(f).length) {
            var K = wa(f, "href");
            var C = K.split("?")[0].split("#")[0].split(".");
            C = (C[C.length - 1] || "").toLowerCase();
            if ((v = 0 < K.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + C + ".")) {
              aa(f, x, B);
              aa(a, "click", B);
              aa(f, "click", O);
              g && (h = a.naturalWidth + 4 + "px", Ra(a, "width", h));
              Va(f, "jsPica");
              for (C = f; C = Aa(C);) {
                if (Ha(C, "caption")) {
                  var M = C;
                  var I = M.style.cssText.toLowerCase();
                  break;
                }
              }
              t.push({u:f, L:M, S:I, Z:a.src, $:h, N:K, F:a, M:v});
            }
          }
        }
      });
      bb(function(a, f) {
        for (a = -1; f = t[++a];) {
          la(f.u, x, B), la(f.F, "click", B), la(f.u, "click", O);
        }
      });
    }
    var y = ["jsSidebarFixer1", "jsSidebarFixer2"], E = !(9 > F || P || 1 <= T && 1.3 > T), R = !(5 > db || 2.2 > Gb || 6 > da(12) || ya(30) && 534 > na || ya(32) || 7 > F || 9 > P || 1 > T), ia = R || 6 === F || 1 > T, Z = 7.5 > P, W, ha, Wa, ra, Ga = bc && !!ja.getBoundingClientRect, xa = 0, sa = 0, Ea, qa, k, l;
    qc || Xb || (rb(function(a) {
      if (a) {
        if (!cb) {
          return !0;
        }
        a = -1;
        var f;
        W = "CSS1Compat" !== H.compatMode ? ja : nb || ja;
        ha = eb("jsSide");
        Wa = cb;
        if (!ha) {
          return !0;
        }
        ib(X);
        Pb(X);
        ra = yb(Nb(ha), "div", {id:"jsSidebarFixer"});
        for (Rb(ra, Y); 1 < Za(ha).length;) {
          ra.appendChild(Za(ha)[1]);
        }
        for (; f = y[++a];) {
          nc(eb(f), V);
        }
        F || ob || 2 > Ma || (Ea = za.perspective !== r || za.MozPerspective !== r || za["-webkit-perspective"] !== r);
        X();
        return !0;
      }
    }), bb(function() {
      for (var a = -1, f; f = y[++a];) {
        oc(eb(f), V);
      }
      mc(ra, Y);
    }));
    Ba(function() {
      function a(M, I, N, ta) {
        var d = ta ? "div" : "cite";
        if (0 === I.indexOf("urn:isbn:")) {
          I = I.substr(9).toUpperCase().split("-").join("");
          if (13 === I.length) {
            I = I.toString().slice(3, -1);
            for (var e = 0, n = 0; 9 > n; n++) {
              e += (I.charAt(n) - 0) * (10 - n);
            }
            e = (11 - e % 11) % 11;
            e = 10 === e ? "X" : e.toString();
            I += e;
          }
          10 === I.length && (I = "//www.amazon.co.jp/exec/obidos/ASIN/" + I + "/itozyun-22/ref=nosim/");
        }
        N = ta ? yb(Nb(h), d, {className:N}) : Oa(h, d, {className:N});
        Oa(N, "a", 0 === I.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:I, tabIndex:P ? "0" : r} : {href:I, tabIndex:P ? "0" : r}, M);
      }
      if (cb) {
        for (var f = Ua(cb, "blockquote"), h, v = -1, K, C; h = f[++v];) {
          K = wa(h, "title"), C = wa(h, "cite"), K && C ? (Qa(h, "title"), a(K, C, "js-bqLink", !0)) : C && (Qa(h, "cite"), a(J.decodeURI ? decodeURI(C) : C, C, "js-bqCite"));
        }
      }
    });
    var w, z, A, q, L, u, Q;
    Ba(function() {
      var a = eb("blog2slide-start");
      if (a) {
        var f = H.onfullscreenchange !== r ? "f" : H.onmozfullscreenchange !== r ? "mozF" : H.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        w = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== f || w ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', aa(a.firstChild, "click", fa), a = Aa(a), z = Aa(a), L = Ua(a, "section"), A = H.createElement("h1"), A.innerHTML = Ua(ja, "h1")[0].innerHTML, Q = L.length, L.splice(0, 0, A), 0 !== f ? aa(H, f + "ullscreenchange", ea) : F ? aa(H, "MSFullscreenChange", ea, !1) : Pb(ea)) : Pa(a);
      }
    });
  })();
  var mb, Cb = !Vb || .9 > T || 8 > P || 5.5 > F, Sa;
  (function() {
    function B(k) {
      return k === "" + k;
    }
    function O(k, l) {
      return Cb ? new c(k, l) : new Vb(k, l);
    }
    function D(k, l, w, z) {
      if (b() - m < y && !z) {
        return k(l);
      }
      ma(X, {U:k, Y:l});
    }
    function X(k) {
      m = b();
      k.U(k.Y);
    }
    function U(k, l) {
      k && mb[k] || (k = E.test(l) ? "default-markup" : "default-code");
      var w = !!mb[k];
      w && D(ha, k, 0, !0);
      return w;
    }
    function V() {
      function k(M, I, N) {
        I && (l.g = l.g || [], l.g.push({l:l, B:l.B, O:1, s:L, D:M, o:I, m:N, R:{}, v:0}));
      }
      var l = t, w = l.m, z = w[0], A = w[2], q = l.D, L = l.s, u = l.aa.shift(), Q = l.R;
      if (u) {
        var a = Q[u], f;
        if (!(0 <= a)) {
          if (f = z[u.charAt(0)]) {
            var h = u.match(f[1]);
            a = f[0];
          } else {
            for (a = 0, z = -1; f = A[++z];) {
              if (h = u.match(f[1])) {
                a = f[0];
                break;
              }
            }
          }
          !(f = B(a)) || h && B(h[1]) || (f = !1, a = 11);
          f || (Q[u] = a);
        }
        A = l.v;
        Q = u.length;
        l.v += Q;
        if (f) {
          f = h[1];
          z = u.indexOf(f);
          var v = f.length, K = z + v;
          h[2] && (K = Q - h[2].length, z = K - v);
          k(q + A, u.substr(0, z), w);
          if (v && U(a, f)) {
            k(q + A + z, f);
            var C = !0;
          }
          k(q + A + K, u.substr(K), w);
          l.g && l.g.length && (t = l.g.shift());
          C || (t !== l ? D(Z, r, 2) : D(V, r, 2));
        } else {
          L.push(q + A, a), D(V, r, 2);
        }
      } else {
        l.l ? (t = l.l.g.shift()) ? D(Z, r, 2) : (t = l.l, D(V, r, 2)) : D(Ga, r, 2);
      }
    }
    function Y(k) {
      if (W.length) {
        var l = W.shift(), w = ka[l];
        if (w.pop) {
          ka[l] = O(w[0], w[1]);
        } else if (B(w)) {
          ka[l] = O(w);
        } else {
          return Y(k);
        }
        D(Y, k, 1);
      } else {
        D(ha, k);
      }
    }
    function fa(k) {
      for (var l, w = k.firstChild; w; w = w.nextSibling) {
        var z = w.nodeType;
        l = 1 === z ? l ? k : w : 3 === z ? R.test(w.nodeValue) ? k : l : l;
      }
      return l === k ? r : l;
    }
    mb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ea = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], ba = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
    [1, 26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ka = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ca = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), b = Ta.now || function() {
      return +new Ta();
    }, c, m, t, x, g, y = 5 > F ? 60 : 5.5 > F ? 0 : Cb ? 20 : 10, E, R;
    Sa = [function(k) {
      J.RegExpCompat = c = k;
    }, function() {
      E = O("^\\s*<");
      R = O("\\S");
    }];
    Cb || (Sa[1](), Sa = r);
    var ia = function() {
      var k = t, l = k.W, w = Wa(k.B, k.O), z = k.o = w.o;
      k.I = w.I;
      U(l, z) || (t = r, D(qa, r, 0, !0));
    };
    var Z = function() {
      var k = t;
      k.aa = k.o.match(k.m[1]) || [];
      k.s.push(k.D, 0);
      D(V, r, 2);
    };
    var W = [];
    var ha = function(k) {
      function l(a) {
        var f = a;
        0 <= a && (f = ba[a]);
        0 <= f[1] && (f[1] = w(f[1]));
        return f;
      }
      function w(a) {
        var f = a;
        return 0 <= a && (f = ka[a], !f.exec) ? (W.push(a), a) : f;
      }
      var z = t, A = mb[k];
      B(A) && (A = mb[k] = mb[A]);
      var q = A[0];
      if (0 <= q) {
        q = ea[q];
        if (0 <= q["-num"]) {
          var L = q["-num"];
          delete q["-num"];
          for (var u = -1; 9 > u;) {
            q["" + ++u] = L;
          }
        }
        A[0] = q;
      }
      for (var Q in q) {
        q[Q] = l(q[Q]);
      }
      A[1] = w(A[1]);
      q = A[2];
      u = 0;
      for (L = q.length; u < L; ++u) {
        q[u] = l(q[u]);
      }
      W.length ? D(Y, k, 2) : (z.m ? z.l && (z.l.g[0].m = A) : z.m = A, D(Z, r, 1));
    };
    var Wa = function(k, l) {
      function w(Q) {
        var a = Q.nodeType;
        if (1 === a) {
          if (!Ha(Q, "nocode")) {
            for (a = Q.firstChild; a; a = a.nextSibling) {
              w(a);
            }
            a = oa(Q);
            if ("BR" === a || "LI" === a) {
              z[L] = "\n", q[L << 1] = A++, q[L++ << 1 | 1] = Q;
            }
          }
        } else if (3 === a || 4 === a) {
          if (a = Q.nodeValue) {
            a = l ? a.split("\r\n").join("\n").split("\r").join("\n") : a.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), z[L] = a, q[L << 1] = A, A += a.length, q[L++ << 1 | 1] = Q;
          }
        }
      }
      var z = [], A = 0, q = [], L = 0;
      w(k);
      var u = z.join("");
      "\n" === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1));
      return {o:u, I:q};
    };
    var ra = function(k, l, w) {
      function z(a) {
        var f = a.nodeType;
        if (1 === f && !Ha(a, "nocode")) {
          if ("BR" === oa(a)) {
            A(a), a.parentNode && Pa(a);
          } else {
            for (a = a.firstChild; a; a = a.nextSibling) {
              z(a);
            }
          }
        } else if ((3 === f || 4 === f) && w) {
          var h = a.nodeValue, v = h.indexOf("\r\n"), K = 2;
          -1 === v && (v = h.indexOf("\n"), K = 1);
          -1 === v && (v = h.indexOf("\r"));
          -1 !== v && (f = h.substr(0, v), a.nodeValue = f, (h = h.substr(v + K)) && Ob(a, h), A(a), f || Pa(a));
        }
      }
      function A(a) {
        function f(v, K) {
          var C = K ? v.cloneNode(!1) : v, M = v.parentNode;
          if (M) {
            M = f(M, 1);
            var I = v.nextSibling;
            M.appendChild(C);
            for (var N = I; N; N = I) {
              I = N.nextSibling, M.appendChild(N);
            }
          }
          return C;
        }
        for (; !a.nextSibling;) {
          if (a = a.parentNode, !a) {
            return;
          }
        }
        a = f(a.nextSibling, 0);
        for (var h; (h = a.parentNode) && 1 === h.nodeType;) {
          a = h;
        }
        L.push(a);
      }
      for (var q = H.createElement("li"); k.firstChild;) {
        q.appendChild(k.firstChild);
      }
      for (var L = [q], u = 0; u < L.length; ++u) {
        z(L[u]);
      }
      if (l === (l | 0)) {
        if (10 <= l && 7.2 > P) {
          var Q = H.createElement("ol");
          Q.innerHTML = '<li value="' + l + '">' + q.innerHTML + "</li>";
          L[0] = Q.firstChild;
        } else {
          ab(q, "value", l);
        }
      }
      Q = Oa(k, "ol", {className:"linenums"});
      k = Math.max(0, l - 1 | 0) || 0;
      u = 0;
      for (l = L.length; u < l; ++u) {
        q = L[u], qb(q, "L" + (u + k) % 10), q.firstChild || kc(q, "\u00a0"), Q.appendChild(q);
      }
    };
    var Ga = function() {
      var k = t, l = k.o, w = l.length, z = 0, A = k.I, q = A.length, L = 0, u = k.s, Q = u.length, a = 0;
      u[Q] = w;
      var f, h;
      for (h = f = 0; h < Q;) {
        u[h] !== u[h + 2] ? (u[f++] = u[h++], u[f++] = u[h++]) : h += 2;
      }
      Q = f;
      for (h = f = 0; h < Q;) {
        var v = u[h], K = u[h + 1];
        for (h += 2; h + 2 <= Q && u[h + 1] === K;) {
          h += 2;
        }
        u[f++] = v;
        u[f++] = K;
      }
      u.length = f;
      k = k.B;
      Q = "";
      k && (Q = k.style.display, Ra(k, "display", "none"));
      for (; L < q;) {
        f = A[L + 2] || w;
        v = u[a + 2] || w;
        h = Math.min(f, v);
        K = A[L + 1];
        var C;
        if (1 !== K.nodeType && (C = l.substring(z, h))) {
          9 > F && (C = C.split("\n").join("\r"));
          var M = yb(K, "span", {className:ca[u[a + 1]]}, C);
          Pa(K);
          z < f && (A[L + 1] = Ob(M, l.substring(h, f)));
        }
        z = h;
        z >= f && (L += 2);
        z >= v && (a += 2);
      }
      k && Ra(k, "display", Q);
      t = r;
      D(qa, r, 3, !0);
    };
    var xa = [], sa;
    rb(function(k) {
      if (k) {
        k = [fb("pre"), fb("code"), fb("xmp")];
        for (var l = 0; l < k.length; ++l) {
          for (var w = 0, z = k[l].length; w < z; ++w) {
            Ea(k[l][w]);
          }
        }
        return !0;
      }
    });
    var Ea = function(k) {
      xa.push(k);
      sa = xa.length;
      1 === sa && (Ub ? ma(Ub, qa) : Sa ? Sa.push(function() {
        ma(qa);
      }) : ma(qa));
    };
    var qa = function() {
      function k(L, u) {
        return (L.split(u)[1] || "").split(" ")[0];
      }
      if (!t) {
        sa !== xa.length && g && g(sa - xa.length, sa);
        var l = xa.shift();
        if (l) {
          if (Ha(l, "prettyprint") && !Ha(l, "prettyprinted")) {
            for (var w = !1, z = l.parentNode; z !== ja; z = z.parentNode) {
              var A = oa(z);
              if (("PRE" === A || "XMP" === A || "CODE" === A) && Ha(z, "prettyprint")) {
                w = !0;
                break;
              }
            }
            if (!w) {
              w = l.className;
              Va(l, "prettyprinted");
              z = !1;
              if (!z) {
                z = k(w, "lang-") || k(w, "language-");
                var q;
                !z && (q = fa(l)) && "CODE" === oa(q) && (z = k(q.className, "lang-") || k(q.className, "language-"));
              }
              A = oa(l);
              "PRE" === A || "XMP" === A ? A = 1 : (A = l.currentStyle, q = H.defaultView, A = (A = A ? A.whiteSpace : q && q.getComputedStyle ? q.getComputedStyle(l, null).getPropertyValue("white-space") : 0) && "pre" === A.substr(0, 3));
              q = !1;
              (q = "true" === q || +q) || (q = k(w, "linenums:") || Ha(l, "linenums"), q = q.length ? +q : q);
              q && ra(l, q, A);
              t = {W:z, B:l, ca:q, O:A, D:0, v:0, R:{}, s:[]};
              D(ia);
              return;
            }
          }
          D(qa, r, 0, !0);
        } else {
          x && x();
        }
      }
    };
    J.PR = {RegExpProxy:O, prettifyElement:Ea, registerCompleteHandler:function(k, l) {
      x = k;
      g = l;
    }};
  })();
  var Tb = H.scripts || fb("script");
  var va = Tb[Tb.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  var qc = tc || "1" === wa(ja, "mob");
  vb = (qc ? "mb" : "pc") + "/";
  6.1 > db && (ib ? ib(Lb) : aa(J, "scroll", Lb));
  bb(hc);
  6.1 > db && (ib ? ib(Mb) : aa(J, "scroll", Mb));
  bb(ic);
  10 > F && (11 !== sc || 5 !== F) || (9 > P || 1 > T || !Ya && !J.addEventListener ? H.write('<link href="' + va + "css/" + vb + Ib + '" rel="stylesheet"' + (8 > P ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > P || 1.5 > T || 532 >= na || 8 > Ma) && Ba(function() {
    Oa(Xa, "link", {href:va + "css/" + vb + Ib, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Cb) {
    if (wb) {
      var Ub = function(B) {
        J.RegExpCompat = function(O) {
          for (var D; D = Sa.shift();) {
            D(O);
          }
          Sa = r;
          ma(B);
          Kb(va + "js/regexpcompat.js");
        };
        Ub = r;
        Jb(va + "js/regexpcompat.js");
      };
    } else {
      J.RegExpCompat = function(B) {
        for (var O; O = Sa.shift();) {
          O(B);
        }
        Sa = r;
        Kb(va + "js/regexpcompat.js");
      }, Jb(va + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

