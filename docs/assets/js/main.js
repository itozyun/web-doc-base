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
(function(Na, E, Hb, bc, gb, H, wb, Ib, Oa, cc, p) {
  function W(x) {
    if (Na[0] === x) {
      return Pa === Pa + "" ? Oa(Pa) : Pa;
    }
  }
  function za(x) {
    var I = Na[3];
    if (Na[2] === x) {
      return I === I + "" ? Oa(I) : I;
    }
  }
  var ra = H.body, Aa = ra.style, ob, ab, bb, Pa = Na[1], z = W(2) || W(3), Qa = W(7), Jb = W(5) || W(6), L = W(8) || W(9), N = W(11) || W(12), pb = N && 0 <= Na.conpare(Pa, "1.9.1"), Kb = W(13), qb = W(15);
  Ib = W(16) || W(17);
  var dc = W(10) || W(25), rb = W(20) || W(22);
  rb || W(23) || W(21) || W(24);
  var ec = rb && Oa(wb.userAgent.split("Edg/")[1]);
  wb = Oa(wb.appVersion.split("Trident/")[1]) + 4;
  var Lb = za(35) || za(36) || za(37), fc = !z && !Qa && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Mb = (Qa ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : 7.2 > L ? "opr70" : 8 > L ? "opr72" : 9.5 > L ? "opr" + (L | 0) : N && !pb ? 1.4 <= N ? "gck19" : 1.3 <= N ? "gck13" : 1 <= N ? "gck12" : 0.9 <= N ? "gck09" : 0.8 <= N ? "gck08" : "gck07" : "modern") + 
  ".css", xb = "";
  cc = za(1) || za(2) || za(3) || za(4) || za(8) || za(9) || za(10);
  var gc, hc = Aa.transform !== p ? "transform" : Aa["-o-transform"] !== p ? "-o-transform" : Aa["-ms-transform"] !== p ? "-ms-transform" : Aa.MozTransform !== p ? "-moz-transform" : Aa["-webkit-transform"] !== p ? "-webkit-transform" : "", Ra = [], ic = [], Da = [], jc, kc, yb, lc, Nb, Ob, oa, zb, Ab, Pb, mc, Qb, nc;
  (function() {
    function x() {
      for (var c, l = 0, q = +new gb(); l < Q.length;) {
        q < Q[0].t ? ++l : (c = Q.splice(l, 1)[0], c.f(c.p));
      }
      b = Q.length ? setTimeout(x, sa) : 0;
    }
    function I() {
      for (var c, l = 0; l < A.length; ++l) {
        c = A[l], c.f();
      }
    }
    function u() {
      Y && (Y = clearInterval(Y));
    }
    function F() {
      b && (b = clearTimeout(b));
    }
    Ab = function(c) {
      A.length || (Y = setInterval(I, G));
      A.push({f:c, J:++ia});
      return ia;
    };
    Pb = function() {
      Y && (u(), Y = setInterval(I, G));
    };
    mc = u;
    var A = [], G = 500, ia = 0, Y;
    if (5 > z || Qa) {
      E._wdb_onlooptimer = I, I = "_wdb_onlooptimer()";
    }
    oa = function(c, l, q) {
      Q.length || (b = setTimeout(x, sa));
      Q.push({f:c, p:l, J:++ja, t:+new gb() + (sa < q ? q : sa)});
      return ja;
    };
    zb = function(c) {
      for (var l = Q.length, q; q = Q[--l];) {
        if (q.J === c) {
          Q.splice(l, 1);
          break;
        }
      }
      return 0;
    };
    Qb = function() {
      b && (F(), b = setTimeout(x, sa));
    };
    nc = F;
    var Q = [], sa = 16, ja = 0, b;
    if (5 > z || Qa) {
      E._wdb_ontimer = x, x = "_wdb_ontimer()";
    }
  })();
  var cb, Ha, Rb, Ba, db, oc, Sb, Sa, Bb, pc, Tb, Ta, sb, Ua, Ea, eb, Va, Ub, qc, tb, Ia, Ya, Wa, hb;
  (function() {
    function x(b, c, l) {
      var q = ["<", b], w = 1, J, S;
      if (c) {
        for (J in c) {
          var T = c[J];
          if (null != T && "" !== T) {
            if ("style" === J) {
              q[++w] = ' style="';
              for (S in T) {
                for (var ea = ++w, ba, O = [], R = S.split(""), fa = R.length; fa;) {
                  ba = R[--fa], "A" <= ba && "Z" >= ba && (ba = "-" + ba.toLowerCase()), O[fa] = ba;
                }
                q[ea] = O.join("") + ":" + T[S] + ";";
              }
              q[++w] = '"';
            } else {
              "className" === J && (J = "class"), q[++w] = " " + J + '="' + T + '"';
            }
          }
        }
      }
      q[++w] = ">";
      null != l && (Q && "font" !== b ? q[++w] = "<FONT>" + l + "</FONT>" : q[++w] = l);
      q[++w] = "</" + b + ">";
      return q.join("");
    }
    function I(b) {
      return u(H, b);
    }
    function u(b, c) {
      var l = "*" === c && 6 > z ? "*" !== c ? b.all.tags(c.toUpperCase()) : b.all : b.getElementsByTagName(c), q = [], w = 0, J;
      for (J = l.length; w < J; ++w) {
        q[w] = l[w];
      }
      return q;
    }
    function F(b) {
      return Q ? b.parentElement : b.parentNode;
    }
    function A(b, c, l, q, w, J) {
      if (Q) {
        var S = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var T = db(2 > b ? Ba(c) : c);
        T = 2 > b ? T.indexOf(c) + b : T.length;
        c.insertAdjacentHTML(S, x(l, q, w));
        c = db(c)[T];
        null != w && ("font" === l ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (sa) {
        c = H.createElement(x(l, q));
      } else {
        c = J ? H.createElementNS("http://www.w3.org/2000/svg", l) : H.createElement(l);
        if (q) {
          for (S in q) {
            if ((l = q[S]) || 0 === l) {
              switch(S) {
                case "class":
                case "className":
                  tb(c, l);
                  break;
                case "style":
                  b = c.style;
                  for (T in l) {
                    b[T] = l[T];
                  }
                  break;
                default:
                  eb(c, S, l);
              }
            }
          }
        }
        ja || null != w && G(c, w);
      }
      return c;
    }
    function G(b, c) {
      if (Q) {
        return A(2, b, "font", p, c);
      }
      var l = H.createTextNode("" + c);
      b.appendChild(l);
      return l;
    }
    function ia(b, c) {
      9 > z ? b.className = c : b.setAttribute("class", c);
    }
    function Y(b, c) {
      return -1 !== (" " + b.className + " ").indexOf(" " + c + " ");
    }
    var Q = 5 > z;
    ob = I("html")[0];
    ab = I("head")[0];
    cb = function(b) {
      return E[b] || H[b] || H.getElementById(b);
    };
    Ha = I;
    Rb = u;
    Ba = F;
    db = function(b) {
      b = Q ? b.children : b.childNodes;
      for (var c = [], l = b.length; l;) {
        c[--l] = b[l];
      }
      return c;
    };
    oc = function(b) {
      var c = !(7.03 < L && 7.2 > L) && b.children;
      b = c ? c : b.childNodes;
      for (var l = [], q = b.length, w = -1, J; q;) {
        if (J = b[--q], c || 1 === J.nodeType) {
          Q && "FONT" === J.tagName || (l[++w] = J);
        }
      }
      return l;
    };
    Sb = function(b) {
      return Q ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Sa = function(b, c, l, q, w) {
      c = A(2, b, c, l, q, w);
      Q || (b.appendChild(c), ja && null != q && G(c, q));
      return c;
    };
    Bb = function(b, c, l, q, w) {
      c = A(0, b, c, l, q, w);
      Q || (F(b).insertBefore(c, b), ja && null != q && G(c, q));
      return c;
    };
    pc = G;
    Tb = function(b, c) {
      var l;
      if (Q) {
        return A(1, b, "font", p, c);
      }
      var q = H.createTextNode("" + c);
      (l = b.nextSibling) ? Ba(b).insertBefore(q, l) : Ba(b).appendChild(q);
      return q;
    };
    Ta = function(b) {
      Q ? b.outerHTML = "" : Ba(b).removeChild(b);
    };
    sb = function(b, c) {
      if (b.contains) {
        return b.contains(c);
      }
      for (; c && c !== ob;) {
        if (c = Ba(c), b === c) {
          return !0;
        }
      }
    };
    var sa = 9 > z, ja = sa;
    Ua = function(b) {
      return b.tagName.toUpperCase();
    };
    Ea = function(b, c) {
      return b.getAttribute(c) || "";
    };
    eb = function(b, c, l) {
      b.setAttribute(c, l);
    };
    Va = function(b, c) {
      b.removeAttribute(c);
    };
    Ub = function(b, c) {
      return b.hasAttribute ? b.hasAttribute(c) : null != b.getAttribute(c);
    };
    qc = function(b) {
      return b.className;
    };
    tb = ia;
    Ia = Y;
    Ya = function(b, c) {
      var l;
      if (!Y(b, c)) {
        if (l = b.className) {
          c = " " + c;
        }
        ia(b, l + c);
      }
    };
    Wa = function(b, c, l) {
      b.style[c] = l;
    };
    hb = function(b, c) {
      var l, q;
      if (5.5 > z) {
        if (l = b.style.cssText) {
          var w = -1;
          for (l = l.toLowerCase().split(";"); q = l[++w];) {
            b.style[q.split(":")[0]] = "";
          }
        }
        if (c) {
          for (w = -1, l = c.split(";"); q = l[++w];) {
            var J = q.split(":")[0];
            b.style[J] = q.substr(J.length + 1);
          }
        }
      } else if (7.1 > L) {
        if (b.setAttribute("style", ""), c) {
          for (l = c.split(";"); q = l[++w];) {
            q = q.split(":"), b.style[q[0]] = q[1];
          }
        }
      } else {
        9 > L || 1 > N ? c ? b.setAttribute("style", c) : b.removeAttribute("style") : b.style.cssText = c;
      }
    };
    Ra.splice(0, 0, function() {
      function b(ea) {
        ea = db(ea);
        for (var ba = ea.length, O, R, fa; ba;) {
          if (O = ea[--ba], R = O.nodeType, 8 === R) {
            c && S.push(O);
          } else if (1 === R) {
            switch(R = Ua(O), "/" === R.charAt(0) && (R = R.substr(1), T[R] = !0), R) {
              case "STYLE":
                if (7.2 <= L && 9 > L) {
                  break;
                }
              case "LINK":
                Q || q || sb(ab, O) || J.push(O);
                break;
              case "META":
                R = Ea(O, "name") || Ea(O, "property");
                for (fa = w.length; fa;) {
                  if (0 === R.indexOf(w[--fa])) {
                    S.push(O);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Ub(O, "async")) {
                  break;
                }
                if (l) {
                  O.innerText = "";
                  l = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Ub(O, "skip-cleanup")) {
                  break;
                }
              case "!":
                S.push(O);
                break;
              case "SOURCE":
                E.HTMLSourceElement || S.push(O);
                break;
              default:
                T[R] ? S.push(O) : db(O).length && b(O);
            }
          }
        }
        for (; J[0];) {
          ab.appendChild(J.pop());
        }
        for (; S[0];) {
          Ta(S.pop());
        }
      }
      bb = cb("jsMain");
      var c = !(8 > L || 5 > z || Qa || .9 > N), l = kc, q = 7 > z, w = ["og:", "twitter:", "fb:"], J = [], S = [], T = {};
      b(ob);
    });
  })();
  var aa, ta, Fa, fb, Vb, ib, jb, ub, Wb, vb, va, Xb;
  (function() {
    function x() {
      return R ? Ja ? 2 : fa ? 3 : 1 : 0;
    }
    function I(a) {
      ta(E, "load", I);
      I = p;
      F(Ra, a, !0);
      Fa = Ra = p;
    }
    function u(a, d) {
      jb(function() {
        var k = b(a);
        d(k);
        k.addListener(d);
        return !0;
      });
    }
    function F(a, d, k) {
      for (var e = 0; e < a.length; ++e) {
        !0 === a[e](d) && (a.splice(e, 1), --e);
      }
      k && (a.length = 0);
    }
    function A(a, d, k) {
      Ra || l.length || oa(G);
      l.push(a, d, k);
    }
    function G() {
      var a = l, d;
      for (l = []; d = a.shift();) {
        F(d, a.shift(), a.shift());
      }
    }
    function ia(a) {
      var d = a || event;
      a = q[d.type];
      var k = -1, e, g;
      z ? (d.preventDefault = function() {
        d.returnValue = !1;
      }, d.stopPropagation = function() {
        d.cancelBubble = !0;
      }) : J && (d.I = d.stopPropagation, d.stopPropagation = function() {
        g = !0;
      });
      for (; e = a[++k];) {
        e.j === this ? (this.h = e.i, this.h(d), this.h = Hb, this.h = p) : 7.2 > L && this === H && e.j === E && (E.h = e.i, E.h(d), delete E.h);
      }
      if (z) {
        return d.preventDefault = d.stopPropagation = p, d.returnValue;
      }
      J && (d.defaultPrevented && "click" === d.type && "A" === d.target.tagName && (T = !0), g && !T && d.I(), d.I = d.stopPropagation = p);
    }
    function Y() {
      var a = 9 === c.offsetWidth;
      vb !== a && A(ic, vb = a);
    }
    function Q() {
      !Ra && pa && (zb(pa), pa = oa(sa));
    }
    function sa() {
      pa = 0;
      F(ma);
    }
    function ja(a) {
      Ra || F(ka, a);
    }
    var b = E.matchMedia, c, l = [];
    Ra.push(function() {
      u = p;
      c = Sa(ra, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Fa(function() {
        l.length && oa(G);
      });
    });
    aa = function(a, d, k, e) {
      if (S) {
        a.addEventListener(d, k, e ? fc ? e : e.capture : !1);
      } else {
        var g = {j:a, i:k};
        e = q[d];
        var y = "on" + d, r, D;
        if (e) {
          for (r = e.length; D = e[--r];) {
            if (D.j === a && D.i === k) {
              return;
            }
          }
          q[d].push(g);
        } else {
          q[d] = e = [g], w || (d = a[y], "function" === typeof d && d !== ia && e.unshift({j:a, i:d}));
        }
        w ? a.attachEvent(y, ia) : a[y] = ia;
      }
    };
    ta = function(a, d, k, e) {
      if (S) {
        a.removeEventListener(d, k, e ? fc ? e : e.capture : !1);
      } else {
        e = q[d];
        d = "on" + d;
        var g, y, r;
        if (e) {
          for (g = e.length; y = e[--g];) {
            y.j === a && (y.i === k ? e.splice(g, 1) : r = !0);
          }
          r || (w ? a.detachEvent(d, ia) : (a[d] = Hb, a[d] = null));
        }
      }
    };
    var q = {}, w = !1, J = 525.13 > qb, S = !J && !Qa && E.addEventListener, T;
    J && ob.addEventListener("click", function(a) {
      if (T) {
        return T = !1, a.preventDefault(), !1;
      }
    });
    Fa = function(a) {
      Ra.push(a);
    };
    fb = function(a) {
      ea && ea.push(a);
    };
    var ea = [];
    if (419.3 >= qb) {
      var ba = function() {
        if (ba) {
          var a = H.readyState;
          "loaded" === a || "complete" === a ? (ba = p, I()) : oa(ba);
        }
      };
      oa(ba);
    } else {
      aa(E, "load", I);
    }
    z || .9 <= N && 1.8 > N ? aa(E, "unload", function(a) {
      F(ea, a, !0);
    }) : ea = p;
    jb = function(a) {
      ic.push(a);
    };
    Fa(function() {
      Y();
      Ab(Y);
    });
    Wb = function(a) {
      Da && Da.push(a);
    };
    var O = 60 > N || Kb, R, fa, Ja;
    if (89 <= N || 89 <= rb || Lb && 79 <= ec || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Xb = !0, u("(forced-colors:active)", function(a) {
        R = a.matches;
        va = x();
        A(Da, va);
      });
    } else if (10 <= z || Jb || Lb && ec) {
      Xb = !0, u("(-ms-high-contrast:black-on-white)", function(a) {
        R = fa = a.matches;
        va !== x() && (va = x(), A(Da, va));
      }), u("(-ms-high-contrast:white-on-black)", function(a) {
        R = Ja = a.matches;
        va !== x() && (va = x(), A(Da, va));
      }), u("(-ms-high-contrast:active)", function(a) {
        R = a.matches;
        va !== x() && (va = x(), A(Da, va));
      });
    } else if (Lb && (z || N && 0 <= Na.conpare(Pa, "1.8.1") || Kb)) {
      var Za = function() {
        function a(e, g) {
          if (g && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var y = e.split("(")[1].split(",");
          return Oa(y[0]) + Oa(y[1]) + Oa(y[2]);
        }
        var d = H.defaultView;
        var k = d ? d.getComputedStyle(c, null) : c.currentStyle;
        d = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        d && (R = "#123456" !== d && "rgb(18,52,86)" !== d, fa = a(d) < a(k, !0), Ja = a(d) > a(k, !0), va !== x() && (va = x(), A(Da, va, O)));
      };
      jb(function(a) {
        if (a) {
          return Wa(c, "color", "#123456"), Wa(c, "backgroundColor", "#123456"), O ? (Za(), Da = p) : Ab(Za), Za = p, !0;
        }
      });
    } else {
      Da = x = p;
    }
    ub = function(a) {
      Ka.push(a);
    };
    var Ka = [], Ca = 7.5 <= L && 8 > L;
    Ca && function() {
      for (var a = H.images, d = a.length, k; d;) {
        k = a[--d], k.H = k.src, Va(k, "src");
      }
    }();
    Fa(function() {
      function a() {
        e ? (g = k[--e], Ca && eb(g, "src", g.H), jc(d, Ca ? g.H : g.src)) : ub = Ka = p;
      }
      function d(r) {
        F(Ka, {D:g, F:r, U:!e}, !e);
        a();
      }
      var k = H.images || Ha("img"), e = k.length;
      if (12 > L || 532 > qb) {
        a();
      } else {
        for (; e;) {
          var g = k[--e];
          var y = 9 > z ? g.complete : 0 <= g.naturalWidth ? g.naturalWidth : g.width;
          A(Ka, {D:g, F:y, U:!e}, !e);
        }
        ub = Ka = p;
      }
    });
    Vb = function(a) {
      ma.push(a);
    };
    var ma = [], pa;
    aa(E, "resize", Q);
    fb(function() {
      pa && clearTimeout(pa);
      ta(E, "resize", Q);
    });
    ib = function(a) {
      ka.push(a);
    };
    var ka = [], ya = 0, h = 1 > N || 1.2 <= N && 1.8 > N || 7.2 >= L;
    h ? Ab(function() {
      var a = E.scrollY || ra.scrollTop;
      ya !== a && (ya = a, ja());
    }) : aa(E, "scroll", ja);
    fb(function() {
      h || ta(E, "scroll", ja);
    });
  })();
  (function() {
    9 > z && Fa(function() {
      var x = Sa(ra, "div");
      hb(x, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      gc = 1 < x.offsetHeight;
      hb(x, "");
      Ta(x);
    });
    jc = function(x, I) {
      function u() {
        A || !G || F.complete ? (oa(x, !!F.width), F.onerror = F.onload = Hb, F = x = p) : (--G, oa(u));
      }
      var F = new Image(), A, G = 99;
      F.onerror = function() {
        A = !0;
      };
      F.onload = function() {
        A = !0;
      };
      F.src = I;
      oa(u);
    };
  })();
  (function() {
    ub(function(u) {
      var F = u.D;
      u = u.F;
      var A = Ba(F);
      !Ia(A, "aBodyRoot") && u ? Ya(A, "img-loaded") : u || Ea(F, "alt") || Wa(F, "display", "none");
    });
    if (!Xb && Da) {
      var x, I = function() {
        x = Sa(ab, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:wa + "css/" + xb + "hc/" + Mb});
        (hc || 5.5 <= z && 9 > z && gc) && Ya(ra, "jsCanRotate");
        I = p;
      };
      Wb(function(u) {
        u && !x ? I() : x && (u ? ab.appendChild(x) : Ta(x));
      });
    }
    5.5 <= z && 8 > z && Da && Wb(function(u) {
      for (var F = Ha("a"), A = F.length, G = 0; G < A; ++G) {
        F[G].hideFocus = !u;
      }
    });
    L && Fa(function() {
      for (var u = Ha("a"), F = u.length, A = 0, G; A < F; ++A) {
        G = u[A], "-1" === Ea(G, "tabindex") ? Va(G, "tabindex") : Ea(G, "href") && eb(G, "tabindex", "0");
      }
      u = Ha("input");
      A = 0;
      for (F = u.length; A < F; ++A) {
        G = u[A], "hidden" === Ea(G, "type") && Va(G, "tabindex");
      }
    });
  })();
  (function() {
    function x(f) {
      var n = T.length, t, B, ha, K;
      if (13 === (f.keyCode || f.ba) || f.type !== ea) {
        for (; n;) {
          var U = T[--n];
          if (U.C === this || U.u === this) {
            n = U.C;
            var M = t = U.u;
            if (U.O) {
              if (Wa(n, "width", U.$), n.src = U.Z, tb(M, U.S), n = U.K) {
                hb(n, U.R), tb(n, "caption jsCap");
              }
            } else {
              if (B = U.M) {
                for (delete U.M; t = Ba(t);) {
                  if (Ia(t, "caption")) {
                    Ya(t, "jsCap");
                  } else {
                    var P = Ua(t);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P || "LI" === P || "DD" === P || "TD" === P || "TH" === P || "FORM" === P || "PRE" === P) {
                      break;
                    }
                  }
                }
                t = (t.offsetWidth | 0) - 4;
                1600 < t && (t = 1600);
                if (U.L && 0 < B.split("/").pop().indexOf("=")) {
                  B = B.split("=");
                  P = B.length;
                  if (ha = B[P - 1]) {
                    (K = Oa(ha.substr(1))) && ha === "s" + K ? B[P - 1] = "w" + t : B[P] = "w" + t;
                  }
                  B = B.join("=");
                } else if (U.L || 0 < B.indexOf(".bp.blogspot.com/")) {
                  B = B.split("/");
                  P = B.length;
                  if (ha = B[P - 2]) {
                    (K = Oa(ha.substr(1))) && ha === "s" + K ? B[P - 2] = "w" + t : B.splice(P - 1, 0, "w" + t);
                  }
                  B = B.join("/");
                }
                U.W = B;
              }
              U.S = qc(M);
              Ya(M, "jsPicaLarge");
              Wa(n, "width", "");
              n.src = U.W;
              if (n = U.K) {
                hb(n, ""), Ya(n, "jsCapLarge");
              }
            }
            U.O = !U.O;
            break;
          }
        }
        I(f);
      }
    }
    function I(f) {
      f.preventDefault();
      f.stopPropagation();
    }
    function u(f) {
      for (var n = arguments, t = 0, B = n.length; t < B; ++t) {
        if (isFinite(n[t])) {
          return n[t];
        }
      }
      return 0;
    }
    function F(f) {
      var n = k;
      if (vb) {
        if (e && !n) {
          if (+new gb() < e) {
            return;
          }
          e = p;
        }
        7 === f ? g = 0 : (g && (g = zb(g)), a = u(E.pageYOffset, E.scrollY, Ca.scrollTop, ra.scrollTop));
        n ? (k = A(p, n[0], n[1])) || (e = +new gb() + 99) : A();
      } else {
        k = p;
      }
    }
    function A(f, n, t) {
      function B(La) {
        M = La;
        if (ya) {
          P = ya + ":translate" + (d ? "3D(0," : "(0,") + La + (d ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== La) {
          if (!Ka && (Za || Ja)) {
            var Cb = ma.offsetWidth;
          }
          P = Ja ? "position:fixed;width:" + Cb + "px;top:" + (La - ha + X) + "px" : Ka ? "top:" + La + "px" : "position:absolute;left:0;top:" + La + "px";
          Za && P && (P += ";" + (0 > La ? "clip:rect(" + -La + "px " + Cb + "px " + qa + "px 0)" : La + qa < Db ? "clip:rect(0 " + Cb + "px " + qa + "px 0)" : "clip:rect(0 " + Cb + "px " + (Db - La) + "px 0)"), 8 > z || (P = P.split(" ").join(",")));
        }
      }
      var ha = a, K = pa, U = ma.offsetTop === K.offsetTop, M = 0, P = "", Ga = !0;
      if (U) {
        for (var ca = 0, X = 0, da = K; da && da !== ra;) {
          X += da.offsetTop, da = da.offsetParent;
        }
        M = h;
        var Yb = u(E.innerHeight, Ca.offsetHeight), Zb = K.offsetHeight, qa = ka.offsetHeight, Db = qa < Zb ? Zb : qa, $a = ha, kb = $a + Yb, Eb = X, Fb = Eb + Db, rc = X + M, tc = rc + qa;
        K = $a < Eb ? Eb : $a;
        da = Fb < kb ? Fb : kb;
        var lb = da - K;
        $a = Fb <= $a;
        kb = kb <= Eb;
        if (n !== p) {
          Ga = X + n;
          f = Ga + t;
          var mb;
          if ($a || kb) {
            return Yb <= t ? mb = X : mb = $a ? Fb - t : X + t - Yb, e = p, E.scroll(u(E.pageXOffset, E.scrollX, Ca.scrollLeft, ra.scrollLeft), mb), k;
          }
          qa <= lb ? ca = 3 : t <= lb ? qa - n <= lb ? ca = 2 : K <= Ga && f <= da ? K < X + M && (ca = 4) : ca = K <= Ga && Ga <= da ? 5 : K <= f && f <= da ? 4 : f < K ? 4 : 5 : ca = 4;
          Ga = p;
        } else {
          f !== p ? qa <= lb ? (ca = 7, Ga = !1) : (M -= 60 * f, ca = da - X - qa, mb = K - X, M < ca ? M = ca : mb < M && (M = mb), ca = 6) : Zb <= qa || ($a ? ca = 1 : kb || (qa <= lb ? ca = 3 : K < rc ? ca = 3 : tc < da ? ca = 2 : ha < X + qa - lb || (ca = 2)));
        }
        switch(ca) {
          case 0:
            B(0);
            break;
          case 1:
            B(Db - qa);
            break;
          case 2:
            B(da - X - qa);
            break;
          case 3:
            B(K - X);
            break;
          case 4:
            B(K - X - n);
            break;
          case 5:
            B(da - X - (n + t));
          case 6:
            B(M);
        }
      }
      hb(ka, P);
      h = M;
      return U && Ga;
    }
    function G(f) {
      if (vb) {
        N && (a = u(E.pageYOffset, Ca.scrollTop, ra.scrollTop));
        var n = this !== f.target, t = n && u(f.deltaY, f.wheelDeltaY / 120, f.wheelDelta / -120, f.detail / ("MozMousePixelScroll" === f.type ? 45 : 1));
        n && t && A(9 >= t ? -9 >= t ? -3 : t : 3) && (f.preventDefault(), f.stopPropagation());
      }
    }
    function ia(f) {
      for (var n = f.target, t = -1, B; B = O[++t];) {
        sb(B, n) && G(f);
      }
    }
    function Y(f) {
      if (vb) {
        var n = !!ya || N, t = f.target || f.srcElement;
        f = 0;
        var B;
        if (sb(ka, t)) {
          for (B = t.offsetHeight; t && (n ? sb(ka, t) : ka !== t);) {
            f += t.offsetTop, t = t.offsetParent;
          }
          fa ? (k = [f, B], g && zb(g), g = oa(F, 7, 1 > N ? 500 : 0)) : (a = u(E.pageYOffset, E.scrollY, Ca.scrollTop, ra.scrollTop), A(p, f, B));
        }
      }
    }
    function Q() {
      v = E.onerror;
      E.onerror = sa;
      var f = H.activeElement;
      m !== f && (m = f, Y({target:f}));
      E.onerror = v;
      v = p;
    }
    function sa() {
      E.onerror = v;
      v = m = p;
      return !0;
    }
    function ja() {
      C.call(V);
    }
    function b() {
      H.fullscreenElement || H.fullscreen || H.webkitIsFullscreen || H.msFullscreenElement || E.fullScreen ? (eb(V, "id", "blog2slide-root"), na[1].parentNode.insertBefore(Z, na[1]), c(), H.onkeydown = l) : la && (Ta(Z), Va(V, "id"), Va(la, "id"), la = H.onkeydown = p);
    }
    function c() {
      la && Va(la, "id");
      xa = 0 < xa ? Ma < xa ? Ma : xa : 0;
      la = na[xa];
      eb(la, "id", "blog2slide-current");
    }
    function l(f) {
      if ("ArrowRight" === f.key || 39 === f.keyCode) {
        ++xa, c();
      } else if ("ArrowLeft" === f.key || 37 === f.keyCode) {
        --xa, c();
      }
    }
    lc = N && 0 >= Na.conpare(Pa, "0.9");
    yb = !(7.2 > L || lc);
    Nb = function(f) {
      q ? H.write('<script src="' + f + '">\x3c/script>') : Ra || J.length ? J.push(f) : S(f);
    };
    Ob = function() {
      q || S(J.shift());
    };
    var q = !yb, w = yb && 7.5 > L;
    if (!q) {
      var J = [];
      w && (kc = !0);
      Fa(function() {
        S(J.shift());
      });
      var S = function(f) {
        f && (w ? $b[0].src = f : Sa(ab, "script", {src:f}));
      };
    }
    var T = [], ea = 5.5 <= z && 8 > z ? "keypress" : "keydown";
    if (!dc) {
      var ba = Aa.transition !== p || Aa["-o-transition"] !== p || Aa["-moz-transition"] !== p || Aa["-webkit-transition"] !== p;
      ub(function(f) {
        if (f.F && bb) {
          f = f.D;
          var n = Ba(f), t = "", B;
          if ("A" === Ua(n) && 1 === oc(n).length) {
            var ha = Ea(n, "href");
            var K = ha.split("?")[0].split("#")[0].split(".");
            K = (K[K.length - 1] || "").toLowerCase();
            if ((B = 0 < ha.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + K + ".")) {
              aa(n, ea, x);
              aa(f, "click", x);
              aa(n, "click", I);
              ba && (t = f.naturalWidth + 4 + "px", Wa(f, "width", t));
              Ya(n, "jsPica");
              for (K = n; K = Ba(K);) {
                if (Ia(K, "caption")) {
                  var U = K;
                  var M = U.style.cssText.toLowerCase();
                  break;
                }
              }
              T.push({u:n, K:U, R:M, Z:f.src, $:t, M:ha, C:f, L:B});
            }
          }
        }
      });
      fb(function(f, n) {
        for (f = -1; n = T[++f];) {
          ta(n.u, ea, x), ta(n.C, "click", x), ta(n.u, "click", I);
        }
      });
    }
    var O = ["jsSidebarFixer1", "jsSidebarFixer2"], R = N || Kb || Jb, fa = !(9 > z || L || 1 <= N && 1.3 > N), Ja = !(5 > W(16) || 5 > W(17) || 2.2 > W(21) || 6 > W(12) || za(30) && 534 > qb || za(32) || 7 > z || 9 > L || 1 > N), Za = Ja || 6 === z || 1 > N, Ka = 7.5 > L, Ca, ma, pa, ka, ya = hc, h = 0, a = 0, d, k, e, g, y = N && 0 <= Na.conpare(Pa, "0.9.7"), r = N && 0 >= Na.conpare(Pa, "0.9.4");
    sc || dc || (jb(function(f) {
      if (f) {
        if (!bb) {
          return !0;
        }
        f = -1;
        var n;
        Ca = "CSS1Compat" !== H.compatMode ? ra : ob || ra;
        ma = cb("jsSide");
        pa = bb;
        if (!ma) {
          return !0;
        }
        ib(F);
        Vb(F);
        ka = Bb(Sb(ma), "div", {id:"jsSidebarFixer"});
        for (8 > L || r || 6 > z || (z || Qa ? aa(ka, "focusin", Y) : R ? aa(H, "focus", Y, {capture:!0, passive:!1}) : aa(ka, "DOMFocusIn", Y, !1)); 1 < db(ma).length;) {
          ka.appendChild(db(ma)[1]);
        }
        for (y && !pb && aa(H, "DOMMouseScroll", ia, !1); n = O[++f];) {
          var t = cb(n);
          t.onwheel !== p ? aa(t, "wheel", G, {passive:!1}) : pb ? aa(t, "MozMousePixelScroll", G, !1) : y ? O[f] = cb(n) : (t.onmousewheel !== p || 9 <= L) && aa(t, "mousewheel", G, !1);
        }
        z || Jb || 2 > rb || (d = Aa.perspective !== p || Aa.MozPerspective !== p || Aa["-webkit-perspective"] !== p);
        F();
        return !0;
      }
    }), fb(function() {
      var f = -1, n;
      if (y && !pb) {
        ta(H, "DOMMouseScroll", ia, !1);
      } else {
        for (; n = O[++f];) {
          n = cb(n), n.onwheel !== p ? ta(n, "wheel", G, {passive:!1}) : pb ? ta(n, "MozMousePixelScroll", G, !1) : (n.onmousewheel !== p || 9 <= L) && ta(n, "mousewheel", G, !1);
        }
      }
      8 > L || r || 6 > z || (z || Qa ? ta(ka, "focusin", Y, !1) : R ? ta(H, "focus", Y, {capture:!0, passive:!1}) : ta(ka, "DOMFocusIn", Y, !1));
      D && clearInterval(D);
    }));
    var D, m, v;
    6 > z && jb(function(f) {
      if (!bb) {
        return !0;
      }
      f ? D = setInterval(Q, 333) : D && (clearInterval(D), D = 0);
    });
    Fa(function() {
      function f(U, M, P, Ga) {
        var ca = Ga ? "div" : "cite";
        if (0 === M.indexOf("urn:isbn:")) {
          M = M.substr(9).toUpperCase().split("-").join("");
          if (13 === M.length) {
            M = M.toString().slice(3, -1);
            for (var X = 0, da = 0; 9 > da; da++) {
              X += (M.charAt(da) - 0) * (10 - da);
            }
            X = (11 - X % 11) % 11;
            X = 10 === X ? "X" : X.toString();
            M += X;
          }
          10 === M.length && (M = "//www.amazon.co.jp/exec/obidos/ASIN/" + M + "/itozyun-22/ref=nosim/");
        }
        P = Ga ? Bb(Sb(t), ca, {className:P}) : Sa(t, ca, {className:P});
        Sa(P, "a", 0 === M.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:M, Y:L ? "0" : p} : {href:M, Y:L ? "0" : p}, U);
      }
      if (bb) {
        for (var n = Rb(bb, "blockquote"), t, B = -1, ha, K; t = n[++B];) {
          ha = Ea(t, "title"), K = Ea(t, "cite"), ha && K ? (Va(t, "title"), f(ha, K, "js-bqLink", !0)) : K && (Va(t, "cite"), f(E.decodeURI ? decodeURI(K) : K, K, "js-bqCite"));
        }
      }
    });
    var C, V, Z, la, na, xa, Ma;
    Fa(function() {
      var f = cb("blog2slide-start");
      if (f) {
        var n = H.onfullscreenchange !== p ? "f" : H.onmozfullscreenchange !== p ? "mozF" : H.onwebkitfullscreenchange !== p ? "webkitF" : 0;
        C = f.requestFullscreen || f.webkitRequestFullscreen || f.mozRequestFullscreen || f.msRequestFullscreen;
        0 !== n || C ? (f.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', aa(f.firstChild, "click", ja), f = Ba(f), V = Ba(f), na = Rb(f, "section"), Z = H.createElement("h1"), Z.innerHTML = Ha("h1")[0].innerHTML, Ma = na.length, na.splice(0, 0, Z), 0 !== n ? aa(H, n + "ullscreenchange", b) : z ? aa(H, "MSFullscreenChange", b, !1) : Vb(b)) : Ta(f);
      }
    });
  })();
  var nb, Gb = !bc || .9 > N || 8 > L || 5.5 > z, Xa;
  (function() {
    function x(h) {
      return h === "" + h;
    }
    function I(h, a) {
      return Gb ? new l(h, a) : new bc(h, a);
    }
    function u(h, a, d, k) {
      if (c() - q < T && !k) {
        return h(a);
      }
      oa(F, {T:h, X:a});
    }
    function F(h) {
      q = c();
      h.T(h.X);
    }
    function A(h, a) {
      h && nb[h] || (h = ea.test(a) ? "default-markup" : "default-code");
      var d = !!nb[h];
      d && u(Ja, h, 0, !0);
      return d;
    }
    function G() {
      function h(na, xa, Ma) {
        xa && (a.g = a.g || [], a.g.push({l:a, A:a.A, N:1, s:y, B:na, o:xa, m:Ma, P:{}, v:0}));
      }
      var a = w, d = a.m, k = d[0], e = d[2], g = a.B, y = a.s, r = a.aa.shift(), D = a.P;
      if (r) {
        var m = D[r], v;
        if (!(0 <= m)) {
          if (v = k[r.charAt(0)]) {
            var C = r.match(v[1]);
            m = v[0];
          } else {
            for (m = 0, k = -1; v = e[++k];) {
              if (C = r.match(v[1])) {
                m = v[0];
                break;
              }
            }
          }
          !(v = x(m)) || C && x(C[1]) || (v = !1, m = 11);
          v || (D[r] = m);
        }
        e = a.v;
        D = r.length;
        a.v += D;
        if (v) {
          v = C[1];
          k = r.indexOf(v);
          var V = v.length, Z = k + V;
          C[2] && (Z = D - C[2].length, k = Z - V);
          h(g + e, r.substr(0, k), d);
          if (V && A(m, v)) {
            h(g + e + k, v);
            var la = !0;
          }
          h(g + e + Z, r.substr(Z), d);
          a.g && a.g.length && (w = a.g.shift());
          la || (w !== a ? u(R, p, 2) : u(G, p, 2));
        } else {
          y.push(g + e, m), u(G, p, 2);
        }
      } else {
        a.l ? (w = a.l.g.shift()) ? u(R, p, 2) : (w = a.l, u(G, p, 2)) : u(Ca, p, 2);
      }
    }
    function ia(h) {
      if (fa.length) {
        var a = fa.shift(), d = ja[a];
        if (d.pop) {
          ja[a] = I(d[0], d[1]);
        } else if (x(d)) {
          ja[a] = I(d);
        } else {
          return ia(h);
        }
        u(ia, h, 1);
      } else {
        u(Ja, h);
      }
    }
    function Y(h) {
      for (var a, d = h.firstChild; d; d = d.nextSibling) {
        var k = d.nodeType;
        a = 1 === k ? a ? h : d : 3 === k ? ba.test(d.nodeValue) ? h : a : a;
      }
      return a === h ? p : a;
    }
    nb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var Q = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], sa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
    b = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), c = gb.now || function() {
      return +new gb();
    }, l, q, w, J, S, T = 5 > z ? 60 : 5.5 > z ? 0 : Gb ? 20 : 10, ea, ba;
    Xa = [function(h) {
      E.RegExpCompat = l = h;
    }, function() {
      ea = I("^\\s*<");
      ba = I("\\S");
    }];
    Gb || (Xa[1](), Xa = p);
    var O = function() {
      var h = w, a = h.V, d = Za(h.A, h.N), k = h.o = d.o;
      h.G = d.G;
      A(a, k) || (w = p, u(ya, p, 0, !0));
    };
    var R = function() {
      var h = w;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.B, 0);
      u(G, p, 2);
    };
    var fa = [];
    var Ja = function(h) {
      function a(m) {
        var v = m;
        0 <= m && (v = sa[m]);
        0 <= v[1] && (v[1] = d(v[1]));
        return v;
      }
      function d(m) {
        var v = m;
        return 0 <= m && (v = ja[m], !v.exec) ? (fa.push(m), m) : v;
      }
      var k = w, e = nb[h];
      x(e) && (e = nb[h] = nb[e]);
      var g = e[0];
      if (0 <= g) {
        g = Q[g];
        if (0 <= g["-num"]) {
          var y = g["-num"];
          delete g["-num"];
          for (var r = -1; 9 > r;) {
            g["" + ++r] = y;
          }
        }
        e[0] = g;
      }
      for (var D in g) {
        g[D] = a(g[D]);
      }
      e[1] = d(e[1]);
      g = e[2];
      r = 0;
      for (y = g.length; r < y; ++r) {
        g[r] = a(g[r]);
      }
      fa.length ? u(ia, h, 2) : (k.m ? k.l && (k.l.g[0].m = e) : k.m = e, u(R, p, 1));
    };
    var Za = function(h, a) {
      function d(D) {
        var m = D.nodeType;
        if (1 === m) {
          if (!Ia(D, "nocode")) {
            for (m = D.firstChild; m; m = m.nextSibling) {
              d(m);
            }
            m = Ua(D);
            if ("BR" === m || "LI" === m) {
              k[y] = "\n", g[y << 1] = e++, g[y++ << 1 | 1] = D;
            }
          }
        } else if (3 === m || 4 === m) {
          if (m = D.nodeValue) {
            m = a ? m.split("\r\n").join("\n").split("\r").join("\n") : m.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), k[y] = m, g[y << 1] = e, e += m.length, g[y++ << 1 | 1] = D;
          }
        }
      }
      var k = [], e = 0, g = [], y = 0;
      d(h);
      var r = k.join("");
      "\n" === r.charAt(r.length - 1) && (r = r.substr(0, r.length - 1));
      return {o:r, G:g};
    };
    var Ka = function(h, a, d) {
      function k(m) {
        var v = m.nodeType;
        if (1 === v && !Ia(m, "nocode")) {
          if ("BR" === Ua(m)) {
            e(m), m.parentNode && Ta(m);
          } else {
            for (m = m.firstChild; m; m = m.nextSibling) {
              k(m);
            }
          }
        } else if ((3 === v || 4 === v) && d) {
          var C = m.nodeValue, V = C.indexOf("\r\n"), Z = 2;
          -1 === V && (V = C.indexOf("\n"), Z = 1);
          -1 === V && (V = C.indexOf("\r"));
          -1 !== V && (v = C.substr(0, V), m.nodeValue = v, (C = C.substr(V + Z)) && Tb(m, C), e(m), v || Ta(m));
        }
      }
      function e(m) {
        function v(V, Z) {
          var la = Z ? V.cloneNode(!1) : V, na = V.parentNode;
          if (na) {
            na = v(na, 1);
            var xa = V.nextSibling;
            na.appendChild(la);
            for (var Ma = xa; Ma; Ma = xa) {
              xa = Ma.nextSibling, na.appendChild(Ma);
            }
          }
          return la;
        }
        for (; !m.nextSibling;) {
          if (m = m.parentNode, !m) {
            return;
          }
        }
        m = v(m.nextSibling, 0);
        for (var C; (C = m.parentNode) && 1 === C.nodeType;) {
          m = C;
        }
        y.push(m);
      }
      for (var g = H.createElement("li"); h.firstChild;) {
        g.appendChild(h.firstChild);
      }
      for (var y = [g], r = 0; r < y.length; ++r) {
        k(y[r]);
      }
      if (a === (a | 0)) {
        if (10 <= a && 7.2 > L) {
          var D = H.createElement("ol");
          D.innerHTML = '<li value="' + a + '">' + g.innerHTML + "</li>";
          y[0] = D.firstChild;
        } else {
          eb(g, "value", a);
        }
      }
      D = Sa(h, "ol", {className:"linenums"});
      h = Math.max(0, a - 1 | 0) || 0;
      r = 0;
      for (a = y.length; r < a; ++r) {
        g = y[r], tb(g, "L" + (r + h) % 10), g.firstChild || pc(g, "\u00a0"), D.appendChild(g);
      }
    };
    var Ca = function() {
      var h = w, a = h.o, d = a.length, k = 0, e = h.G, g = e.length, y = 0, r = h.s, D = r.length, m = 0;
      r[D] = d;
      var v, C;
      for (C = v = 0; C < D;) {
        r[C] !== r[C + 2] ? (r[v++] = r[C++], r[v++] = r[C++]) : C += 2;
      }
      D = v;
      for (C = v = 0; C < D;) {
        var V = r[C], Z = r[C + 1];
        for (C += 2; C + 2 <= D && r[C + 1] === Z;) {
          C += 2;
        }
        r[v++] = V;
        r[v++] = Z;
      }
      r.length = v;
      h = h.A;
      D = "";
      h && (D = h.style.display, Wa(h, "display", "none"));
      for (; y < g;) {
        v = e[y + 2] || d;
        V = r[m + 2] || d;
        C = Math.min(v, V);
        Z = e[y + 1];
        var la;
        if (1 !== Z.nodeType && (la = a.substring(k, C))) {
          9 > z && (la = la.split("\n").join("\r"));
          var na = Bb(Z, "span", {className:b[r[m + 1]]}, la);
          Ta(Z);
          k < v && (e[y + 1] = Tb(na, a.substring(C, v)));
        }
        k = C;
        k >= v && (y += 2);
        k >= V && (m += 2);
      }
      h && Wa(h, "display", D);
      w = p;
      u(ya, p, 3, !0);
    };
    var ma = [], pa;
    jb(function(h) {
      if (h) {
        h = [Ha("pre"), Ha("code"), Ha("xmp")];
        for (var a = 0; a < h.length; ++a) {
          for (var d = 0, k = h[a].length; d < k; ++d) {
            ka(h[a][d]);
          }
        }
        return !0;
      }
    });
    var ka = function(h) {
      ma.push(h);
      pa = ma.length;
      1 === pa && (ac ? oa(ac, ya) : Xa ? Xa.push(function() {
        oa(ya);
      }) : oa(ya));
    };
    var ya = function() {
      function h(y, r) {
        return (y.split(r)[1] || "").split(" ")[0];
      }
      if (!w) {
        pa !== ma.length && S && S(pa - ma.length, pa);
        var a = ma.shift();
        if (a) {
          if (Ia(a, "prettyprint") && !Ia(a, "prettyprinted")) {
            for (var d = !1, k = a.parentNode; k !== ra; k = k.parentNode) {
              var e = Ua(k);
              if (("PRE" === e || "XMP" === e || "CODE" === e) && Ia(k, "prettyprint")) {
                d = !0;
                break;
              }
            }
            if (!d) {
              d = a.className;
              Ya(a, "prettyprinted");
              k = !1;
              if (!k) {
                k = h(d, "lang-") || h(d, "language-");
                var g;
                !k && (g = Y(a)) && "CODE" === Ua(g) && (k = h(g.className, "lang-") || h(g.className, "language-"));
              }
              e = Ua(a);
              "PRE" === e || "XMP" === e ? e = 1 : (e = a.currentStyle, g = H.defaultView, e = (e = e ? e.whiteSpace : g && g.getComputedStyle ? g.getComputedStyle(a, null).getPropertyValue("white-space") : 0) && "pre" === e.substr(0, 3));
              g = !1;
              (g = "true" === g || +g) || (g = h(d, "linenums:") || Ia(a, "linenums"), g = g.length ? +g : g);
              g && Ka(a, g, e);
              w = {V:k, A:a, ca:g, N:e, B:0, v:0, P:{}, s:[]};
              u(O);
              return;
            }
          }
          u(ya, p, 0, !0);
        } else {
          J && J();
        }
      }
    };
    E.PR = {RegExpProxy:I, prettifyElement:ka, registerCompleteHandler:function(h, a) {
      J = h;
      S = a;
    }};
  })();
  var $b = H.scripts || Ha("script");
  var wa = $b[$b.length - 1].src.split("/");
  --wa.length;
  "js" === wa[wa.length - 1] && --wa.length;
  (wa = wa.join("/")) && (wa += "/");
  var sc = cc || "1" === Ea(ra, "mob");
  xb = (sc ? "mb" : "pc") + "/";
  6.1 > Ib && (ib ? ib(Pb) : aa(E, "scroll", Pb));
  fb(mc);
  6.1 > Ib && (ib ? ib(Qb) : aa(E, "scroll", Qb));
  fb(nc);
  10 > z && (11 !== wb || 5 !== z) || (9 > L || 1 > N || !Qa && !E.addEventListener ? H.write('<link href="' + wa + "css/" + xb + Mb + '" rel="stylesheet"' + (8 > L ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > L || 1.5 > N || 532 >= qb || 8 > rb) && Fa(function() {
    Sa(ab, "link", {href:wa + "css/" + xb + Mb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Gb) {
    if (yb) {
      var ac = function(x) {
        E.RegExpCompat = function(I) {
          for (var u; u = Xa.shift();) {
            u(I);
          }
          Xa = p;
          oa(x);
          Ob(wa + "js/regexpcompat.js");
        };
        ac = p;
        Nb(wa + "js/regexpcompat.js");
      };
    } else {
      E.RegExpCompat = function(x) {
        for (var I; I = Xa.shift();) {
          I(x);
        }
        Xa = p;
        Ob(wa + "js/regexpcompat.js");
      }, Nb(wa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

