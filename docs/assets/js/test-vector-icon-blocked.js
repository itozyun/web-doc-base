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
var D, pb;
(function(Ya, Y, ib, Fc, O, hc, id, Vb, qb, ic, jc, Gc, kc, t) {
  function ea(P) {
    if (Ya[0] === P) {
      return Za === Za + "" ? qb(Za) : Za;
    }
  }
  function Pa(P) {
    var I = Ya[3];
    if (Ya[2] === P) {
      return I === I + "" ? qb(I) : I;
    }
  }
  function lc() {
    return 6 > B ? va.scrollTop : B ? ub.scrollTop : Y.pageYOffset;
  }
  var va = O.body, cb = va.style, ub, vb, wb, Za = Ya[1], B = ea(2) || ea(3), Db = ea(7), jb = ea(5) || ea(6), J = ea(8) || ea(9), Z = ea(11) || ea(12), Qb = Z && 0 <= Ya.conpare(Za, "1.9.1"), Wb = ea(13), sa = ea(15), Ca = ea(16) || ea(17), Hc = ea(10) || ea(25), Da = ea(20) || ea(22), Ic = ea(23), kb = ea(21), Xb = ea(24), jd = Da || Ic || kb || Xb, Jc = Da && qb(hc.userAgent.split("Edg/")[1]), kd = qb(hc.appVersion.split("Trident/")[1]) + 4, mc = Pa(35) || Pa(36) || Pa(37), ld = 0 <= hc.userAgent.indexOf("Googlebot/"), 
  fb = 0.9 > Z, nc = (Db ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > J ? "opr70" : 8 > J ? "opr72" : 9.5 > J ? "opr" + (J | 0) : Z && !Qb ? 1.4 <= Z ? "gck19" : 1.3 <= Z ? "gck13" : 1 <= Z ? "gck12" : fb ? 0.8 <= Z ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Yb = "", md = Pa(1) || Pa(2) || Pa(3) || Pa(4) || Pa(8) || Pa(9) || Pa(10), Kc, rb = 8 > B || 7.2 > J ? !1 : t, Lc = cb.transform !== t ? "transform" : cb["-o-transform"] !== t ? "-o-transform" : 
  cb["-ms-transform"] !== t ? "-ms-transform" : cb.MozTransform !== t ? "-moz-transform" : cb["-webkit-transform"] !== t ? "-webkit-transform" : "", Va = [], Mc = [], gb = [], oc, Nc, Oc, Pc, Zb, Qc, Rc, $b, ac, Sc = !1, pc = 525 > sa || 3.2 > Ca || 2.2 > kb || 10 > J || Z && !Qb || ea(25) || 10 > ea(3) || Pa(32) || Pa(30) || Pa(3), ca, Eb, bc, Tc, nd = !!va.getBoundingClientRect, cc = [], dc = [], qc, Uc, rc, Vc, db = Vb.now || function() {
    return +new Vb();
  };
  (function() {
    function P() {
      for (var T, M = 0, aa = db(); M < L.length;) {
        aa < L[0].t ? ++M : (T = L.splice(M, 1)[0], T.f(T.p));
      }
      ma = L.length ? jc(P, Ea) : 0;
    }
    function I() {
      for (var T, M = 0; M < fa.length; ++M) {
        T = fa[M], T.f();
      }
    }
    function Q() {
      na && (na = clearInterval(na));
    }
    function oa() {
      ma && (ma = Gc(ma));
    }
    D = function(T) {
      cc.push(T);
    };
    pb = function(T) {
      dc.push(T);
    };
    bc = function(T) {
      fa.length || (na = kc(I, ia));
      fa.push({f:T, C:++da});
      return da;
    };
    Tc = function(T) {
      for (var M = fa.length, aa; aa = fa[--M];) {
        if (aa.C === T) {
          fa.splice(M, 1);
          fa[0] || Q();
          break;
        }
      }
      return 0;
    };
    qc = function() {
      na && (Q(), na = kc(I, ia));
    };
    Uc = Q;
    var fa = [], ia = 500, da = 0, na;
    if (5 > B || Db) {
      Y._wdb_onlooptimer = I, I = "_wdb_onlooptimer()";
    }
    ca = function(T, M, aa) {
      L.length || (ma = jc(P, Ea));
      L.push({f:T, p:M, C:++wa, t:db() + (Ea < aa ? aa : Ea)});
      return wa;
    };
    Eb = function(T) {
      for (var M = L.length, aa; aa = L[--M];) {
        if (aa.C === T) {
          L.splice(M, 1);
          break;
        }
      }
      return 0;
    };
    rc = function() {
      ma && (oa(), ma = jc(P, Ea));
    };
    Vc = oa;
    var L = [], Ea = 16, wa = 0, ma;
    if (5 > B || Db) {
      Y._wdb_ontimer = P, P = "_wdb_ontimer()";
    }
  })();
  var xb, Fb, Wc, yb, Xc, Qa, lb, Yc, sc, ra, Rb, Zc, $c, tc, $a, zb, ad, ab, Ra, sb, mb, Jb, bd, ec, nb, Ab, uc, Ha, Wa, cd;
  (function() {
    function P(a, b, m) {
      var A = ["<", a], E = 1, e, u;
      if (b) {
        for (e in b) {
          var w = b[e];
          if (null != w && "" !== w) {
            if ("style" === e) {
              A[++E] = ' style="';
              for (u in w) {
                for (var C = ++E, V, U = [], ba = u.split(""), Ba = ba.length; Ba;) {
                  V = ba[--Ba], "A" <= V && "Z" >= V && (V = "-" + V.toLowerCase()), U[Ba] = V;
                }
                A[C] = U.join("") + ":" + w[u] + ";";
              }
              A[++E] = '"';
            } else {
              "className" === e && (e = "class"), A[++E] = " " + e + '="' + w + '"';
            }
          }
        }
      }
      A[++E] = ">";
      null != m && (M && "font" !== a ? A[++E] = "<font>" + I(m) + "</font>" : A[++E] = I(m));
      A[++E] = "</" + a + ">";
      return A.join("");
    }
    function I(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function Q(a) {
      var b = a.split("-"), m = b.length;
      if (2 > m) {
        return a;
      }
      for (; 1 < m;) {
        a = b[--m], b[m] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function oa(a) {
      return fa(O, a);
    }
    function fa(a, b) {
      var m = "*" === b;
      m = M ? m ? a.all : a.all.tags(b.toUpperCase()) : 6 > B && m ? a.all : a.getElementsByTagName(b);
      for (var A = [], E = 0, e = m.length; E < e; ++E) {
        A[E] = m[E];
      }
      return A;
    }
    function ia(a, b) {
      var m = [], A = 0, E, e = -1;
      if (9 > B || !a.getElementsByClassName) {
        var u = 6 > B ? a.all : a.getElementsByTagName("*");
      } else {
        var w = !0;
        u = a.getElementsByClassName(b);
      }
      for (E = u.length; A < E; ++A) {
        var C = u[A];
        if (w || (M || 1 === C.nodeType) && wa(C, b)) {
          m[++e] = C;
        }
      }
      return m;
    }
    function da(a) {
      return M ? a.parentElement : a.parentNode;
    }
    function na(a, b, m, A, E, e) {
      if (M) {
        var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var w = lb(2 > a ? Qa(b) : b);
        w = 2 > a ? w.indexOf(b) + a : w.length;
        b.insertAdjacentHTML(u, P(m, A, E));
        b = lb(b)[w];
        null != E && ("font" === m ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (aa) {
        b = O.createElement(P(m, A));
      } else {
        b = e ? O.createElementNS("http://www.w3.org/2000/svg", m) : O.createElement(m);
        if (A) {
          for (u in A) {
            if ((a = A[u]) || 0 === a) {
              switch(u) {
                case "class":
                case "className":
                  ec(b, a);
                  break;
                case "style":
                  e = b.style;
                  for (w in a) {
                    e[w] = a[w];
                  }
                  break;
                default:
                  sb(b, u, a);
              }
            }
          }
          !J || "a" !== m && "A" !== m || !A.href || A["tag-index"] || A.tagIndex || sb(b, "tagIndex", "-0");
        }
        pa || null != E && L(b, E);
      }
      return b;
    }
    function L(a, b) {
      if (M) {
        return na(2, a, "font", t, b);
      }
      var m = O.createTextNode("" + b);
      a.appendChild(m);
      return m;
    }
    function Ea(a, b) {
      9 > B ? a.className = b : a.setAttribute("class", b);
    }
    function wa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function ma(a, b, m) {
      if (8 > J || 5.5 > B) {
        b = Q(b);
      }
      a.style[b] = m;
    }
    function T(a) {
      return 5.5 > B ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var M = 5 > B;
    ub = oa("html")[0];
    vb = oa("head")[0];
    xb = function(a) {
      return Y[a] || O[a] || O.getElementById(a);
    };
    Fb = oa;
    Wc = function(a) {
      return ia(O, a);
    };
    yb = fa;
    Xc = ia;
    Qa = da;
    lb = function(a) {
      a = M ? a.children : a.childNodes;
      for (var b = [], m = a.length; m;) {
        b[--m] = a[m];
      }
      return b;
    };
    Yc = function(a) {
      var b = !(7.03 < J && 7.2 > J) && a.children;
      a = b ? b : a.childNodes;
      for (var m = [], A = a.length, E = -1, e; A;) {
        if (e = a[--A], b || 1 === e.nodeType) {
          M && "FONT" === e.tagName || (m[++E] = e);
        }
      }
      return m;
    };
    sc = function(a) {
      return M ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ra = function(a, b, m, A, E) {
      b = na(2, a, b, m, A, E);
      M || (a.appendChild(b), pa && null != A && L(b, A));
      return b;
    };
    Rb = function(a, b, m, A, E) {
      b = na(0, a, b, m, A, E);
      M || (da(a).insertBefore(b, a), pa && null != A && L(b, A));
      return b;
    };
    Zc = function(a, b, m, A, E) {
      b = na(1, a, b, m, A, E);
      var e;
      M || ((e = a.nextSibling) ? Qa(e).insertBefore(b, e) : Qa(a).appendChild(b), pa && null != A && L(b, A));
      return b;
    };
    $c = L;
    tc = function(a, b) {
      var m;
      if (M) {
        return na(1, a, "font", t, b);
      }
      var A = O.createTextNode("" + b);
      (m = a.nextSibling) ? Qa(a).insertBefore(A, m) : Qa(a).appendChild(A);
      return A;
    };
    $a = function(a) {
      Qa(a) ? M ? a.outerHTML = "" : (5.5 > B && (a.style.filter = ""), Qa(a).removeChild(a)) : D("[DOM] p_DOM_remove(), No parentNode!");
    };
    zb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== ub;) {
        if (b = Qa(b), a === b) {
          return !0;
        }
      }
    };
    ad = function(a) {
      return M ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var aa = 9 > B, pa = aa;
    ab = function(a) {
      return a.tagName.toUpperCase();
    };
    Ra = function(a, b) {
      if (8 > J || 5.5 > B) {
        b = Q(b);
      }
      var m = a.getAttribute(b);
      return J && "tabIndex" === b ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    sb = function(a, b, m) {
      if (J && "tab-index" === b) {
        "-1" === m ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", m);
      } else {
        if (8 > J || 5.5 > B) {
          b = Q(b);
        }
        a.setAttribute(b, m);
      }
    };
    mb = function(a, b) {
      if (J && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > J || 5.5 > B) {
          b = Q(b);
        }
        a.removeAttribute(b);
      }
    };
    Jb = function(a, b) {
      if (J && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > J || 5.5 > B) {
        b = Q(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    bd = function(a) {
      return a.className;
    };
    ec = Ea;
    nb = wa;
    Ab = function(a, b) {
      var m;
      if (!wa(a, b)) {
        if (m = a.className) {
          m += " ";
        }
        Ea(a, m + b);
      }
    };
    uc = function(a, b) {
      if (wa(a, b)) {
        var m = a.className.split(" ");
        m.splice(m.indexOf(b), 1);
        Ea(a, m.join(" "));
      }
    };
    Ha = ma;
    Wa = function(a, b) {
      var m, A = -1, E;
      if (5.5 > B) {
        if (m = T(a)) {
          for (m = m.split(";"); E = m[++A];) {
            ma(a, E.split(":")[0], "");
          }
        }
        if (b) {
          for (A = -1, m = b.split(";"); E = m[++A];) {
            var e = E.split(":")[0];
            ma(a, e, E.substr(e.length + 1));
          }
        }
      } else if (7.1 > J) {
        if (a.setAttribute("style", ""), b) {
          for (m = b.split(";"); E = m[++A];) {
            E = E.split(":"), ma(a, E[0], E[1]);
          }
        }
      } else {
        9 > J || 1 > Z ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    cd = T;
    Va.splice(0, 0, function() {
      function a(C) {
        C = lb(C);
        for (var V = C.length, U, ba, Ba; V;) {
          if (U = C[--V], ba = U.nodeType, 8 === ba) {
            b && u.push(U);
          } else if (1 === ba) {
            switch(ba = ab(U), "/" === ba.charAt(0) && (ba = ba.substr(1), w[ba] = !0), ba) {
              case "STYLE":
                if (7.2 <= J && 9 > J) {
                  break;
                }
              case "LINK":
                M || A || zb(vb, U) || e.push(U);
                break;
              case "META":
                ba = Ra(U, "name") || Ra(U, "property");
                for (Ba = E.length; Ba;) {
                  if (0 === ba.indexOf(E[--Ba])) {
                    u.push(U);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (ld || Jb(U, "async")) {
                  break;
                }
                if (m) {
                  U.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Jb(U, "skip-cleanup")) {
                  break;
                }
              case "!":
                u.push(U);
                break;
              case "SOURCE":
                Y.HTMLSourceElement || u.push(U);
                break;
              default:
                w[ba] ? u.push(U) : lb(U).length && a(U);
            }
          }
        }
        for (; e[0];) {
          vb.appendChild(e.pop());
        }
        for (; u[0];) {
          $a(u.pop());
        }
      }
      uc(ub, "nojs");
      wb = xb("jsMain");
      var b = !(8 > J || 5 > B || Db || fb), m = Pc, A = 7 > B, E = ["og:", "twitter:", "fb:"], e = [], u = [], w = {};
      a(ub);
    });
  })();
  var la, La, eb, Gb, vc, Kb, Hb, wc, xc, yc, dd, ed, fd, Lb, Fa, zc;
  (function() {
    function P() {
      return d ? q ? 2 : v ? 3 : 1 : 0;
    }
    function I(f) {
      La(Y, "load", I);
      I = t;
      oa(Va, f, !0);
      Va = t;
    }
    function Q(f, g) {
      Hb(function() {
        var y = ma(f);
        g(y);
        y.addListener(g);
        return !0;
      });
    }
    function oa(f, g, y) {
      for (var n = 0; n < f.length; ++n) {
        !0 === f[n](g) && (f.splice(n, 1), --n);
      }
      y && (f.length = 0);
    }
    function fa(f, g, y) {
      Va || M.length || ca(ia);
      M.push(f, g, y);
    }
    function ia() {
      var f = M, g;
      for (M = []; g = f.shift();) {
        oa(g, f.shift(), f.shift());
      }
    }
    function da(f) {
      var g = f || event;
      f = pa[g.type];
      var y = -1, n, R;
      5 > B ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : B ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        R = !0;
      });
      for (; n = f[++y];) {
        n.j === this ? (this.g = n.i, B && (g.currentTarget = this), this.g(g), B ? (this.g = ib, this.g = t) : delete this.g) : 7.2 > J && this === O && n.j === Y && (Y.g = n.i, Y.g(g), delete Y.g);
      }
      if (B) {
        return g.preventDefault = g.stopPropagation = ib, g.preventDefault = g.stopPropagation = t, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (A = !0), R && !A && g.K(), g.K = g.stopPropagation = t);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function na() {
      var f = 9 === T.offsetWidth;
      Lb !== f && (fa(Mc, Lb = f), D("p_cssAvailability:" + Lb));
    }
    function L() {
      !Va && N && (Eb(N), N = ca(Ea));
    }
    function Ea() {
      N = 0;
      oa(z);
    }
    function wa(f) {
      Va || oa(r, f);
    }
    var ma = Y.matchMedia, T, M = [];
    Va.push(function() {
      Q = t;
      T = ra(va, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        M.length && ca(ia);
      });
    });
    la = function(f, g, y, n) {
      if (m) {
        f.addEventListener(g, y, n ? aa ? n : n.capture || !0 === n : !1);
      } else {
        var R = {j:f, i:y};
        n = pa[g];
        var ya = "on" + g, Ja, hb;
        if (n) {
          for (Ja = n.length; hb = n[--Ja];) {
            if (hb.j === f && hb.i === y) {
              return;
            }
          }
          pa[g].push(R);
        } else {
          pa[g] = n = [R], a || (g = f[ya], "function" === typeof g && g !== da && n.unshift({j:f, i:g}));
        }
        a ? f.attachEvent(ya, da) : f[ya] = da;
      }
    };
    La = function(f, g, y, n) {
      if (m) {
        f.removeEventListener(g, y, n ? aa ? n : n.capture || !0 === n : !1);
      } else {
        n = pa[g];
        g = "on" + g;
        var R, ya, Ja;
        if (n) {
          for (R = n.length; ya = n[--R];) {
            ya.j === f && (ya.i === y ? n.splice(R, 1) : Ja = !0);
          }
          Ja || (a ? f.detachEvent(g, da) : B ? (f[g] = ib, f[g] = null) : delete f[g]);
        }
      }
    };
    var aa = !B && !Db && (new id('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), pa = {}, a = !1, b = 525.13 > sa, m = !b && !Db && Y.addEventListener, A;
    b && ub.addEventListener("click", function(f) {
      if (A) {
        return A = !1, f.preventDefault(), !1;
      }
    });
    eb = function(f) {
      Va ? Va.push(f) : alert("Load event has already been dispatched!");
    };
    Gb = function(f) {
      E && E.push(f);
    };
    var E = [];
    if (419.3 >= sa) {
      var e = function() {
        if (e) {
          var f = O.readyState;
          "loaded" === f || "complete" === f ? (e = t, I()) : ca(e);
        }
      };
      ca(e);
    } else {
      la(Y, "load", I), fb && ca(function() {
        I && I();
      }, 999);
    }
    B || !fb && 1.8 > Z ? la(Y, "unload", function(f) {
      oa(E, f, !0);
    }) : E = t;
    Hb = function(f) {
      Mc.push(f);
    };
    eb(function() {
      na();
      bc(na);
    });
    yc = function(f, g) {
      if (u) {
        la(f, "focusin", g);
      } else if (w) {
        la(f, "DOMFocusIn", g);
      } else {
        if (V) {
          Sa || (Sa = kc(xa, 333));
        } else if (C || U) {
          la(O, "focus", Ba, !0);
        } else {
          return;
        }
        for (var y = ba, n = 0, R = y.length; n < R; ++n) {
          if (y[n] === f && y[n + 1] === g) {
            return;
          }
        }
        y.push(f, g);
      }
    };
    dd = function(f, g) {
      if (u) {
        la(f, "focusin", g);
      } else if (w) {
        la(f, "DOMFocusIn", g, !1);
      } else {
        for (var y = ba, n = 0, R = y.length; n < R; ++n) {
          if (y[n] === f && y[n + 1] === g) {
            y.splice(n, 2);
            y.length || (V ? Sa = Tc(Sa) : (C || U) && La(O, "focus", Ba, !0));
            break;
          }
        }
      }
    };
    var u = 6 <= B || jb || 52 <= Z || 15 <= Da || 534 <= sa || 5 <= Ca || Ic || 4 <= kb || 4 <= Xb || 11.6 <= ea(8) || 12 <= ea(9), w = 8 <= J || Da || kb || Xb || sa || Ca, C = 8 > J, V = 6 > B, U = 52 > Z || Wb;
    if (U || C) {
      var ba = [];
      var Ba = function(f) {
        var g = ba, y = C ? O.activeElement : f.target;
        if (C) {
          var n = f;
          f = {type:"focusin", target:y, preventDefault:function() {
            n.preventDefault();
          }, stopPropagation:function() {
            n.stopPropagation();
          }};
        }
        for (var R = 0, ya = g.length; R < ya; ++R) {
          var Ja = g[R];
          (Ja === y || zb(Ja, y)) && g[R + 1].call(Ja, f);
        }
      };
    } else if (V) {
      ba = [];
      var Sa, Ia, Ga, xa = function() {
        Ga = Y.onerror;
        Y.onerror = Ka;
        var f = O.activeElement;
        if (Ia !== f) {
          Ia = f;
          for (var g = ba, y, n = 0, R = g.length; n < R; ++n) {
            y = g[n], (y === f || zb(y, f)) && g[n + 1].apply(y, [{target:f}]);
          }
        }
        Y.onerror = Ga;
        Ga = t;
      }, Ka = function() {
        D("error!");
        Y.onerror = Ga;
        Ga = Ia = t;
        return !0;
      };
    }
    xc = function(f) {
      gb && gb.push(f);
    };
    var h = 60 > Z || Wb, d, v, q;
    if (89 <= Z || 89 <= Da || mc && 79 <= Jc || ma && (ma("(forced-colors:none)").matches || ma("(forced-colors:active)").matches)) {
      zc = !0, Q("(forced-colors:active)", function(f) {
        d = f.matches;
        Fa = P();
        fa(gb, Fa);
        D("(forced-colors:active):" + Fa);
      });
    } else if (10 <= B || jb || mc && Jc) {
      zc = !0, Q("(-ms-high-contrast:black-on-white)", function(f) {
        d = v = f.matches;
        Fa !== P() && (Fa = P(), fa(gb, Fa), D("(-ms-high-contrast:black-on-white):" + Fa));
      }), Q("(-ms-high-contrast:white-on-black)", function(f) {
        d = q = f.matches;
        Fa !== P() && (Fa = P(), fa(gb, Fa), D("(-ms-high-contrast:white-on-black):" + Fa));
      }), Q("(-ms-high-contrast:active)", function(f) {
        d = f.matches;
        Fa !== P() && (Fa = P(), fa(gb, Fa), D("(-ms-high-contrast:active):" + Fa));
      });
    } else if (mc && (B || Z && 0 <= Ya.conpare(Za, "1.8.1") || Wb)) {
      var p = function() {
        function f(n, R) {
          if (R && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var ya = n.split("(")[1].split(",");
          return qb(ya[0]) + qb(ya[1]) + qb(ya[2]);
        }
        var g = O.defaultView;
        var y = g ? g.getComputedStyle(T, null) : T.currentStyle;
        g = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        g && (d = "#123456" !== g && "rgb(18,52,86)" !== g, v = f(g) < f(y, !0), q = f(g) > f(y, !0), Fa !== P() && (Fa = P(), D("(forced-colors-fallback):" + Fa), fa(gb, Fa, h)));
      };
      Hb(function(f) {
        if (f) {
          return Ha(T, "color", "#123456"), Ha(T, "backgroundColor", "#123456"), h ? (p(), gb = t) : bc(p), p = t, !0;
        }
      });
    } else {
      gb = P = t;
    }
    wc = function(f) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      l.push(f);
    };
    var l = [], K = 7.5 <= J && 8 > J;
    K && function() {
      for (var f = O.images, g = f.length, y; g;) {
        y = f[--g], y.J = y.src, mb(y, "src");
      }
    }();
    eb(function() {
      function f() {
        n ? (R = y[--n], K && sb(R, "src", R.J), Nc(g, K ? R.J : R.src)) : l = t;
      }
      function g(Ja) {
        oa(l, {G:R, H:Ja}, !n);
        f();
      }
      var y = O.images || Fb("img"), n = y.length;
      if (12 > J || 532 > sa) {
        f();
      } else {
        for (; n;) {
          var R = y[--n];
          var ya = 9 > B ? R.complete : 0 <= R.naturalWidth ? R.naturalWidth : R.width;
          fa(l, {G:R, H:ya}, !n);
        }
        l = t;
      }
    });
    vc = function(f) {
      z.push(f);
    };
    var z = [], N;
    la(Y, "resize", L);
    Gb(function() {
      N && Gc(N);
      La(Y, "resize", L);
    });
    Kb = function(f) {
      r.push(f);
    };
    var r = [], G = 1 > Z || 1.2 <= Z && 1.8 > Z || 7.2 >= J, S;
    G ? bc(function() {
      var f = Y.pageYOffset;
      S !== f && (S = f, wa({type:"scroll", cancelable:!1, stopPropagation:ib, preventDefault:ib}));
    }) : la(Y, "scroll", wa, {passive:!0});
    Gb(function() {
      G || La(Y, "scroll", wa, {passive:!0});
    });
    ed = function(f, g) {
      if (ka) {
        la(f, "wheel", g, {passive:!1});
      } else if (qa) {
        la(f, "mousewheel", g, !1);
      } else if (Ta) {
        la(f, "MozMousePixelScroll", g, !1);
      } else if (Ma) {
        for (var y = Na, n = 0, R = y.length; n < R; ++n) {
          if (y[n] === f && y[n + 1] === g) {
            return;
          }
        }
        y.length || la(O, "DOMMouseScroll", bb, !1);
        y.push(f, g);
      }
    };
    fd = function(f, g) {
      if (ka) {
        La(f, "wheel", g, {passive:!1});
      } else if (qa) {
        La(f, "mousewheel", g, !1);
      } else if (Ta) {
        La(f, "MozMousePixelScroll", g, !1);
      } else if (Ma) {
        for (var y = Na, n = 0, R = y.length; n < R; ++n) {
          if (y[n] === f && y[n + 1] === g) {
            y.splice(n, 2);
            y.length || La(O, "DOMMouseScroll", bb, !1);
            break;
          }
        }
      }
    };
    var ka = 9 <= B || jb || 17 <= Z || 31 <= Da || 537.7 <= sa, qa = 6 <= B || jb || 9 <= J || Da || 522 <= sa || Ca, Ta = Qb, Ma = Z && 0 <= Ya.conpare(Za, "0.9.7") && !Qb;
    if (Ma) {
      var Na = [], bb = function(f) {
        for (var g = Na, y = f.target, n, R = 0, ya = g.length; R < ya; ++R) {
          n = g[R], zb(n, y) && g[R + 1].call(n, f);
        }
      };
    }
  })();
  (function() {
    function P(d) {
      switch(d) {
        case 1:
          return b;
        case 2:
          return !!m;
        case 3:
          return !!A;
        case 4:
          return !!E;
        case 5:
          return u;
        case 6:
          return e && !wa;
      }
      return !1;
    }
    function I(d) {
      w(d);
      Ka && !d && $a(Ka);
      w = C = V = U = ba = Ba = Ga = xa = Ka = h = t;
    }
    function Q(d) {
      var v = '1.6em "' + d + '"';
      D("[webFontTest] testByNativeFontLoaderAPI start.");
      O.fonts.load(v).then(function(q) {
        D("[webFontTest] fonts.check() : " + O.fonts.check(v, "i") + ", fonts.length : " + q.length);
        (q = ia(C)) ? ca(I, q) : (D("[webFontTest] mesureWebFont() : false"), fa(!0));
      }, function(q) {
        D("[webFontTest] fonts.load() rejected! " + q);
        rb !== t ? da(rb) : oc(da);
      });
    }
    function oa(d) {
      return O.hidden || O.msHidden || O.mozHidden || O.webkitHidden ? (Ia = db(), !1) : d < db() - Ia;
    }
    function fa(d) {
      d && (D("[webFontTest] testWebFont start."), Ia = db());
      (d = ia(C, Sa)) ? (D("[webFontTest] testWebFont mesurement success : " + d), I(d)) : oa(Sa) ? (D("[webFontTest] testWebFont timeout!"), Ga ? na() : Ea ? I(0) : rb !== t ? da(rb) : oc(da)) : ca(fa);
    }
    function ia(d, v) {
      var q = 0, p = -1, l = [];
      if (!h) {
        var K = -1;
        var z;
        xa = ra(va, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa);
        for (h = []; z = a[++K];) {
          Ha(xa, "fontFamily", z), h[K] = xa.offsetWidth;
        }
        D("[webFontTest] default width " + h.join(", "));
      }
      for (5 > B ? xa || (xa = ra(va, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa)) : va.appendChild(xa); K = a[++p];) {
        Ha(xa, "fontFamily", '"' + d + '",' + K);
        var N = xa.offsetWidth;
        if (!pa && N !== h[p]) {
          q = 1;
          break;
        }
        l[p] = N;
      }
      if (pa && N === l[0] && N === l[1]) {
        for (D("[webFontTest] Hit... : width=" + N), q = 1, p = -1; 0 <= (N = h[++p]);) {
          if (N === l[0] && N === l[1] && N === l[2]) {
            D("[webFontTest] Failed! : font[" + p + "]=" + a[p]);
            q = 0;
            break;
          }
        }
      }
      !B && q && ba && (xa.textContent = ba, N = xa.offsetWidth, xa.textContent = Ba, q = N === xa.offsetWidth ? 2 : 1, xa.textContent = aa);
      $a(xa);
      5 > B && (xa = t);
      v && (q || oa(v)) && D("[webFontTest] " + d + " " + l.join(", "));
      return q;
    }
    function da(d) {
      D("[webFontTest] onTestDataURIComplete : " + d);
      d ? (Ga = !0, Sa = M, D("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), C = C.replace(ma, ""), na()) : I(0);
    }
    function na() {
      if (V) {
        for (; V.length;) {
          var d = V.shift(), v = V.shift();
          if (P(d)) {
            D("[webFontTest] maybe can use! " + v);
            Ka = Rc(v, L, U, Ka);
            return;
          }
        }
      }
      I(0);
    }
    function L(d) {
      d ? fa(!0) : na();
    }
    oc = !1 === rb ? function(d) {
      ca(d, !1);
    } : function(d) {
      function v(l) {
        p && (p = Eb(p), rb = l, q.onload = q.onerror = ib, ca(d, l));
      }
      if (rb !== t) {
        D("[dataURITest] already done : " + rb), ca(d, rb);
      } else {
        D("[dataURITest] start!");
        var q = new Image(), p = ca(v, !1, 999);
        q.onerror = function() {
          D("[dataURITest] no DATA URI!");
          v(!1);
        };
        q.onload = function() {
          D("[dataURITest] DATA URI:" + (1 === q.width * q.height));
          v(1 === q.width * q.height);
        };
        q.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > B && eb(function() {
      var d = ra(va, "div");
      Wa(d, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Kc = 1 < d.offsetHeight;
      $a(d);
    });
    Nc = function(d, v) {
      function q() {
        l || !K || p.complete ? (D("[imageTest] timer -> img.complete. img.width=" + p.width), ca(d, !!p.width), p.onerror = p.onload = ib, p = d = t) : (--K, ca(q));
      }
      var p = new Image(), l, K = 99;
      D("[imageTest] start.");
      p.onerror = function() {
        D("[imageTest] error!");
        l = !0;
      };
      p.onload = function() {
        D("[imageTest] onload.");
        l = !0;
      };
      p.src = v;
      ca(q);
    };
    Oc = function(d, v, q, p, l, K, z) {
      w = d;
      C = v;
      V = q;
      U = p;
      ba = l;
      Ba = K;
      Sa = z || T;
      C = ma + C;
      D("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      D("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!pc);
      ea(10) ? ca(I, 1) : pc ? ca(I, 0) : !O.fonts || 603 > sa || 11 > Ca ? (D("[webFontTest] No native font loader."), fa(!0)) : (D("[webFontTest] Use Native font loader."), Q(C));
    };
    var Ea = 9 > B, wa = 6 > Da || J || 530 > sa || 4 > Ca, ma = "bad_" + db() + "_", T = 5E3, M = 500, aa = "mmmmmmmmmmlliiiiiiiii", pa = 21 > Da || 7 > Ca || sa && 0 >= Ya.conpare(Za, "536.11"), a = ["monospace", "sans-serif", "serif"];
    pc || (pa && Da && D("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + Da), pa && Ca && D("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ca), pa && sa && D("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + sa));
    var b = 14 <= jb || 36 <= Da || 39 <= Z || 602 <= sa || 10 <= Ca, m = 6 <= Da || Z && 0 <= Ya.conpare(Za, "1.9.2") || 525 <= sa || 3.2 <= Ca || 4.4 <= kb || 11.1 <= J || jb || 9 <= ea(2) || 10 <= ea(3), A = 2 <= Da || Qb || 525 <= sa || 3.2 <= Ca || 2.2 <= kb || 10 <= J || jb || 9 <= ea(2) || 10 <= ea(3), E = A, e = 525 <= sa || 3.2 <= Ca || 38 > Da || 3 <= kb || 11.5 <= J, u = 4 <= ea(2) || 10 <= ea(3), w, C, V, U, ba, Ba, Sa, Ia, Ga, xa, Ka, h;
  })();
  (function() {
    function P(e) {
      if (2 !== e) {
        D("[VectorIcon] " + e);
        var u = Wc("ico"), w = 0, C = u.length;
        if (C) {
          if (1 === e) {
            for (; w < C; ++w) {
              e = u[w];
              var V = ad(e);
              if (V = E[V]) {
                e.innerHTML = V;
              }
            }
          } else {
            A && !m && (Y.VectorIconFallback = bz, $b(za + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        ac(za + "js/vector-icon-svg-fallback.js");
        return [E, u, ra, m];
      }
      bz = !1;
    }
    wc(function(e) {
      var u = e.G;
      e = e.H;
      var w = Qa(u);
      !nb(w, "aBodyRoot") && e ? Ab(w, "js-image-has-been-loaded") : e || Ra(u, "alt") || "lazy" === Ra(u, "loading") || Ha(u, "display", "none");
    });
    fb && (Va.splice(1, 0, function() {
      for (var e = Xc(wb, "RichLink-sep"), u, w, C, V, U, ba; u = e.shift();) {
        for (u = lb(u); w = u.shift();) {
          if ("A" === ab(w) && !w.innerHTML) {
            for (D("\u25a0 Broken Anchor " + w.parentNode.innerHTML); C = u.shift();) {
              if (1 === C.nodeType) {
                if ("A" === ab(C)) {
                  break;
                }
                for (V = yb(C, "A"); U = V.shift();) {
                  for (ba = lb(U); ba.length;) {
                    U.parentNode.insertBefore(ba.shift(), U);
                  }
                  $a(U);
                }
              }
              w.appendChild(C);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var e = Fb("A"), u, w; u = e.shift();) {
        "A" !== ab(u) || u.innerHTML || (w = u.nextSibling && u.nextSibling.firstChild) && w.href === u.href && (D("\u25b2 Broken Anchor " + w.innerHTML), $a(u));
      }
    }));
    5.5 <= B && 8 > B && gb && xc(function(e) {
      for (var u = yb(va, "a"), w = u.length, C = 0; C < w; ++C) {
        u[C].hideFocus = !e;
      }
    });
    if (!zc && gb) {
      var I, Q = function() {
        I = ra(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:za + "css/" + Yb + "hc/" + nc});
        if (Lc || 5.5 <= B && 9 > B && Kc) {
          Ab(va, "js-canuse-css-rotate-when-forced-colors-mode"), D("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        Q = t;
      };
      xc(function(e) {
        e && !I ? Q() : I && (e ? vb.appendChild(I) : $a(I));
      });
    }
    J && eb(function() {
      for (var e = yb(va, "a"), u = e.length, w = 0, C; w < u; ++w) {
        C = e[w], "-1" === Ra(C, "tabIndex") ? mb(C, "tabIndex") : Ra(C, "href") && sb(C, "tabIndex", "0");
      }
      e = yb(va, "input");
      w = 0;
      for (u = e.length; w < u; ++w) {
        C = e[w], "hidden" === Ra(C, "type") && mb(C, "tabIndex");
      }
    });
    if (Z && 0 > Ya.conpare(Za, "0.9.5")) {
      Sc = !0;
      var oa, fa, ia, da, na;
      eb(function() {
        la(O, "keydown", L);
        la(O, "keyup", Ea);
        yc(va, wa);
        fb || (la(Y, "blur", pa), la(va, "click", aa));
      });
      var L = fb ? function(e) {
        16 === e.keyCode ? oa = !0 : 9 === e.keyCode && da && ma(da, !0) && (da.blur && da.blur(), e.stopPropagation(), e.preventDefault(), ca(M));
      } : function(e) {
        16 === e.keyCode ? oa = !0 : 9 === e.keyCode && (fa = db());
      }, Ea = function(e) {
        16 === e.keyCode && (oa = !1);
      }, wa = fb ? function(e) {
        e.target.innerHTML || D(e.target.parentNode.innerHTML);
        da = e.target;
      } : function(e) {
        var u = e.target;
        if (da === u) {
          ia = t;
        } else if (ia) {
          u === ia ? (e.stopPropagation(), M(!0)) : (u.blur && b(u), e.preventDefault(), M());
        } else {
          if (e = da) {
            da = t, b(e);
          }
          ia = u;
          M(!0);
        }
      }, ma = function(e, u) {
        var w = db(), C = va, V = "nextSibling", U = "firstChild";
        oa && (u || w - 99 < fa && fa <= w) && (V = "previousSibling", U = "lastChild");
        for (ia = t; e !== C;) {
          if (ba) {
            w = e;
            var ba = !1;
          } else {
            w = e[V];
          }
          if (w) {
            if (1 === w.nodeType) {
              if (T(w)) {
                return ia = w, !0;
              }
              e = (ba = w[U]) || w;
            } else {
              e = w;
            }
          } else {
            e = e.parentNode;
          }
        }
      }, T = function(e, u) {
        function w() {
          return "-1" !== Ra(e, "tab-index");
        }
        function C() {
          return 0 < e.offsetHeight * e.offsetWidth;
        }
        if (e.focus) {
          var V;
          switch({A:u ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[ab(e)]) {
            case 1:
              if (Jb(e, "href") && w() && C()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ra(e, "type") && w() && !Jb(e, "disabled") && C()) {
                return !0;
              }
              break;
            case 3:
              if (w() && !Jb(e, "disabled") && C()) {
                return !0;
              }
              break;
            default:
              if ((V = Ra(e, "tab-index")) && "-1" !== V && C()) {
                return !0;
              }
          }
        }
      }, M = function(e) {
        na = 0;
        ia && (fb || la(ia, "blur", a), da = ia, ia = t, e || da.focus());
      };
      if (!fb) {
        var aa = function(e) {
          var u = e.target;
          if (da && T(u, !0)) {
            var w = da;
            da = t;
            b(w);
            ia = u;
            e.stopPropagation();
            e.preventDefault();
            M();
          }
        }, pa = function(e) {
          e.target === O && (ia = t);
        }, a = function(e) {
          e = e.target;
          La(e, "blur", a);
          da === e && ma(e) && (na || (na = ca(M)));
        }, b = function(e) {
          La(e, "blur", a);
          e.blur();
        };
      }
    }
    Hb(function(e) {
      if (e) {
        return Oc(P, "myIconFont", [1, za + "iconfont/woff2.css", 2, za + "iconfont/woff.css", 4, za + "iconfont/otf.css", 3, za + "iconfont/ttf.css", 6, za + "iconfont/svg.css"], "js-myIconFont-testCssReady", "Twitter", "\ud83d\udc24", 5E3), P = t, !0;
      }
    });
    var m = 8 <= ea(8) && 9 > J, A = 9 <= B || jb || 1.8 <= Z || 8 <= ea(8) || 9 <= ea(9) || 3 <= ea(21) || Wb || jd || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || Ca, E = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", Android:"\ud83e\udd16"};
  })();
  (function() {
    function P(c) {
      var k = Ia.length, F, H, W, x;
      if (13 === (c.keyCode || c.V) || c.type !== Ga) {
        for (; k;) {
          var ha = Ia[--k];
          if (ha.F === this || ha.u === this) {
            k = ha.F;
            var X = F = ha.u;
            if (ha.P) {
              if (Ha(k, "width", ha.$), k.src = ha.Z, ec(X, ha.T), k = ha.L) {
                Wa(k, ha.S), uc(k, "js-captioned-thumbnail__large");
              }
            } else {
              if (H = ha.N) {
                delete ha.N;
                if (ha.M) {
                  for (; F = Qa(F);) {
                    if (!nb(F, "caption")) {
                      var ja = ab(F);
                      if ("DIV" === ja || "P" === ja || "BLOCKQUOT" === ja || "LI" === ja || "DD" === ja || "TD" === ja || "TH" === ja || "FORM" === ja || "PRE" === ja) {
                        break;
                      }
                    }
                  }
                  F = (F.offsetWidth | 0) - 4;
                  1600 < F && (F = 1600);
                  if (2 === ha.M) {
                    H = H.split("=");
                    ja = H.length;
                    if (W = H[ja - 1]) {
                      (x = qb(W.substr(1))) && W === "s" + x ? H[ja - 1] = "w" + F : H[ja] = "w" + F;
                    }
                    H = H.join("=");
                  } else {
                    H = H.split("/");
                    ja = H.length;
                    if (W = H[ja - 2]) {
                      (x = qb(W.substr(1))) && W === "s" + x ? H[ja - 2] = "w" + F : H.splice(ja - 1, 0, "w" + F);
                    }
                    H = H.join("/");
                  }
                }
                ha.X = H;
              }
              ha.T = bd(X);
              Ab(X, "js-pica-thumbnail__large");
              Ha(k, "width", "");
              k.src = ha.X;
              if (k = ha.L) {
                Wa(k, ""), Ab(k, "js-captioned-thumbnail__large");
              }
            }
            ha.P = !ha.P;
            break;
          }
        }
        I(c);
      }
    }
    function I(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function Q(c) {
      var k = S;
      if (Lb) {
        if (ka && !k) {
          if (db() < ka) {
            return;
          }
          ka = t;
        }
        7 === c ? (L("t"), qa = 0) : (L("s"), qa && (qa = Eb(qa)), r = lc());
        k ? (S = fa(t, k[0], k[1])) || (ka = db() + 99) : fa();
        wa();
      } else {
        S = t;
      }
    }
    function oa() {
      L("w.blur");
    }
    function fa(c, k, F) {
      function H(ob) {
        X = ob;
        if (z) {
          ja = z + ":translate" + (G ? "3D(0," : "(0,") + ob + (G ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ob) {
          if (d || v) {
            var Ac = p.offsetWidth;
          }
          ja = d ? "position:fixed;width:" + Ac + "px;top:" + (ob - W + ta) + "px" : q ? "top:" + ob + "px" : "position:absolute;top:" + ob + "px;left:0";
          if (v && ja) {
            var Sb = 8 > B ? " " : ",";
            ja += ";clip:rect(" + (0 > ob ? -ob + "px" + Sb + Ac + "px" + Sb + Oa : "0" + Sb + Ac + "px" + Sb + (ob + Oa < Tb ? Oa : Tb - ob)) + "px" + Sb + "0)";
          }
        }
      }
      var W = r, x = l, ha = p.offsetTop === x.offsetTop, X = 0, ja = "", Xa = !0;
      if (ha) {
        for (var Aa = 0, ta = 0, Ua = x; Ua && Ua !== va;) {
          ta += Ua.offsetTop, Ua = Ua.offsetParent;
        }
        X = N;
        Ua = 11 > B ? ub.offsetHeight : Y.innerHeight;
        var Bc = x.offsetHeight, Oa = K.offsetHeight, Tb = Oa < Bc ? Bc : Oa, Bb = W, Mb = Bb + Ua, fc = ta, gc = fc + Tb, gd = ta + X, od = gd + Oa;
        x = Bb < fc ? fc : Bb;
        var Cb = gc < Mb ? gc : Mb, Nb = Cb - x;
        Bb = gc <= Bb;
        Mb = Mb <= fc;
        if (k !== t) {
          Xa = ta + k;
          c = Xa + F;
          if (Bb || Mb) {
            return Ua <= F ? (k = ta, L("4.1.1")) : Bb ? (k = gc - F, L("4.1.2")) : (k = ta + F - Ua, L("4.1.3")), ka = t, Y.scroll(0, k), L("4.1.*"), S;
          }
          Oa <= Nb ? (Aa = 3, L("4.2")) : F <= Nb ? Oa - k <= Nb ? (Aa = 2, L("4.3.1")) : x <= Xa && c <= Cb ? x < ta + X && (Aa = 4, L("4.3.2")) : x <= Xa && Xa <= Cb ? (Aa = 5, L("4.3.3")) : x <= c && c <= Cb ? (Aa = 4, L("4.3.4")) : c < x ? (Aa = 4, L("4.3.5")) : (Aa = 5, L("4.3.6")) : (Aa = 4, L("4.4"));
          Xa = !1;
        } else {
          c !== t ? Oa <= Nb ? (Aa = 7, Xa = !1, L("3.1")) : (X -= 60 * c, Aa = Cb - ta - Oa, c = x - ta, X < Aa ? (X = Aa, L("3.2.1")) : c < X ? (X = c, L("3.2.2")) : L("3.2.3"), Aa = 6) : Bc <= Oa || (Bb ? (Aa = 1, L("2.2.1")) : Mb ? L("2.2.2") : Oa <= Nb ? (Aa = 3, L("2.3")) : x < gd ? (Aa = 3, L("2.4.1")) : od < Cb ? (Aa = 2, L("2.4.2")) : W < ta + Oa - Nb ? L("2.4.3") : (Aa = 2, L("2.4.4")));
        }
        switch(Aa) {
          case 0:
            H(0);
            break;
          case 1:
            H(Tb - Oa);
            break;
          case 2:
            H(Cb - ta - Oa);
            break;
          case 3:
            H(x - ta);
            break;
          case 4:
            H(x - ta - k);
            break;
          case 5:
            H(Cb - ta - (k + F));
          case 6:
            H(X);
        }
        ma(X, Oa, ta, Tb, Ua, k || "-", F || "-");
      } else {
        ma(X, "-", "-", "-", "-", "-", "-");
      }
      Wa(K, ja);
      N = X;
      return ha && Xa;
    }
    function ia(c) {
      if (Lb && (L("m"), Z && (r = lc(), wa()), this !== c.target)) {
        var k = ic(c.deltaY) ? c.deltaY : ic(c.wheelDeltaY) ? c.wheelDeltaY / 120 : ic(c.wheelDelta) ? c.wheelDelta / -120 : c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1);
        k && fa(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function da(c) {
      if (Lb) {
        var k = Z && 0 > Ya.conpare(Za, "0.9.4"), F = c.target, H = K, W = 0;
        if (zb(H, F)) {
          L(c.type || "ie5focus");
          la(F, "blur", na);
          if (z) {
            k = F.getBoundingClientRect(), c = k.bottom - k.top, W = k.top - H.getBoundingClientRect().top | 0;
          } else {
            c = F.offsetHeight;
            var x = F;
            if (k) {
              for (var ha = []; x && (Z ? zb(H, x) : H !== x);) {
                for (; x.previousSibling;) {
                  x = x.previousSibling, x.tagName && ha.unshift(x.tagName + ":" + x.offsetTop);
                }
                x = x.offsetParent;
              }
              D(ha.join());
              x = F;
            }
            for (; x && (Z ? zb(H, x) : H !== x);) {
              if (k) {
                for (; x.previousSibling;) {
                  x = x.previousSibling, W += x.offsetHeight || 0;
                }
                x = x.parentNode;
              } else {
                W += x.offsetTop, x = x.offsetParent;
              }
            }
          }
          h ? (S = [W, c], qa && Eb(qa), qa = ca(Q, 7, 1 > Z || 536 > sa || 14 > Da ? 500 : 0)) : (r = lc(), fa(t, W, c));
          T(W, c);
        }
      }
    }
    function na() {
      La(this, "blur", na);
      T(0, 0);
    }
    function L(c) {
      Na && (n && (n = Eb(n)), n = ca(Ea, 0, 1400), Na.innerHTML += " " + c);
    }
    function Ea() {
      Na.innerHTML = "";
    }
    function wa() {
      f && (Ha(f, "top", (r / 10 | 0) + "px"), Ma.innerHTML = " scrl:" + (r | 0));
    }
    function ma(c, k, F, H, W, x, ha) {
      g && (Ha(g, "top", ((c + F) / 10 | 0) + "px"), Ha(g, "height", (k / 10 | 0) + "px"), Ha(f, "height", (W / 10 | 0) + "px"), Ha(bb, "height", (va.scrollHeight / 10 | 0) + "px"), Ta.innerHTML = "conY:" + F + "/sidY" + c + ", conH:" + H + "/sidH" + k + ", focY:" + x + " focH:" + ha);
    }
    function T(c, k) {
      y && (Ha(y, "top", (c / 10 | 0) + "px"), Ha(y, "height", (k / 10 | 0) + "px"));
    }
    function M() {
      R.call(ya);
    }
    function aa() {
      O.fullscreenElement || O.fullscreen || O.webkitIsFullscreen || O.msFullscreenElement || Y.fullScreen ? (sb(ya, "id", "blog2slide-root"), Ob[1].parentNode.insertBefore(Ja, Ob[1]), pa(), O.onkeydown = a) : hb && ($a(Ja), mb(ya, "id"), mb(hb, "id"), hb = O.onkeydown = t);
    }
    function pa() {
      hb && mb(hb, "id");
      Ib = 0 < Ib ? Cc < Ib ? Cc : Ib : 0;
      hb = Ob[Ib];
      sb(hb, "id", "blog2slide-current");
    }
    function a(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Ib, pa();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Ib, pa();
      }
    }
    Rc = function(c, k, F, H) {
      H = H || ra(vb, "link", {type:"text/css", rel:"stylesheet"});
      var W;
      if (C) {
        (W = xb(F)) ? mb(W, "id") : W = ra(va, "div", {"aria-hidden":"true", className:F});
        var x = W.offsetWidth;
        D("[CSS Loader] widthBeforeCSSLoaded = " + x);
        sb(W, "id", F);
      }
      w(H, c, k, W, x);
      return H;
    };
    var b = Z && 0 > Ya.conpare(Za, "0.9.1"), m = 11 <= B || jb || 9 <= J && 9.5 > J, A = 11 > B, E = 7.2 <= J && 7.5 > J, e = 9 > Z && !b || 19 > Da || 4.3 > kb || 2 > Xb || 536 > sa || 6 > Ca || 7 <= J && 9 > J && !E, u = !b && !m && !A && !E && !e, w = u ? function(c, k, F) {
      D("[CSS Loader] onload + onerror");
      c.onload = bz;
      c.onerror = function() {
        c.onload = c.onerror = null;
        ca(F, !1);
      };
      c.href = k;
      function bz() {
        c.onload = c.onerror = null;
        ca(F, !0);
      }
      bz = !1;
    } : m ? function(c, k, F, H, W) {
      D("[CSS Loader] onload + mesure");
      c.onload = bz;
      c.href = k;
      function bz() {
        ca(F, C(H, W));
        c.onload = H = null;
      }
      bz = !1;
    } : A ? function(c, k, F, H, W) {
      D("[CSS Loader] onreadystatechange + onerror");
      c.onreadystatechange = bz;
      c.href = k;
      function bz() {
        "complete" === c.readyState && (ca(F, C(H, W)), H = null, c.V = ib);
      }
      bz = !1;
    } : e || E ? function(c, k, F, H, W) {
      function x() {
        X && (ja = Eb(ja), D("[CSS Loader] onComplete"), Xa = db() + 999, ca(ha, 0, 99), e ? X.onerror = null : X.removeEventListener("load", x, !1), X = null);
      }
      function ha() {
        C(H, W) ? (H = null, ca(F, !0)) : db() < Xa ? ca(ha, 0, 99) : (H = null, ca(F, !1));
      }
      var X = new Image(), ja = ca(x, 0, 5E3), Xa;
      e ? (D("[CSS Loader] img.onerror + mesure"), X.onerror = x) : (D('[CSS Loader] img.addEventListener("load") + mesure'), X.addEventListener("load", x, !1));
      X.src = c.href = k;
    } : function(c, k, F) {
      D("[CSS Loader] UNSUPPORTED");
      ca(F, !1);
    }, C = !u && !b && function(c, k) {
      D("[CSS Loader] elmTest.offsetWidth = " + c.offsetWidth);
      return c.offsetWidth !== k;
    };
    Qc = Z && 0 >= Ya.conpare(Za, "0.9");
    Zb = !(7.2 > J || Qc);
    $b = function(c) {
      V ? Va ? O.write('<script src="' + c + '">\x3c/script>') : pb("[DynamicScvriptLoader] Document already loaded! " + c) : Va || Ba.length ? Ba.push(c) : Sa(c);
    };
    ac = function(c) {
      V ? D("[DynamicScvriptLoader] " + c + " loaded.") : c === ba ? Sa(Ba.shift()) : pb(c + " <> " + ba);
    };
    var V = !Zb, U = Zb && 7.5 > J, ba;
    if (!V) {
      var Ba = [];
      U && (Pc = !0);
      eb(function() {
        Sa(Ba.shift());
      });
      var Sa = function(c) {
        if (ba = c) {
          U ? Dc[0].src = c : ra(vb, "script", {src:c});
        }
      };
    }
    var Ia = [], Ga = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!Hc) {
      var xa = cb.transition !== t || cb["-o-transition"] !== t || cb["-moz-transition"] !== t || cb["-webkit-transition"] !== t;
      wc(function(c) {
        if (c.H && wb) {
          c = c.G;
          var k = Qa(c), F = "", H;
          if ("A" === ab(k) && 1 === Yc(k).length) {
            var W = Ra(k, "href");
            var x = W.split("?")[0].split("#")[0].split(".");
            x = (x[x.length - 1] || "").toLowerCase();
            if ((H = 0 < W.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + x + ".")) {
              la(k, Ga, P);
              la(c, "click", P);
              la(k, "click", I);
              xa && (F = c.naturalWidth + "px", Ha(c, "width", F));
              Ab(k, "js-pica-thumbnail");
              for (x = k; x = Qa(x);) {
                if (nb(x, "caption")) {
                  Ab(x, "js-captioned-thumbnail");
                  var ha = x;
                  var X = cd(ha);
                  break;
                }
              }
              Ia.push({u:k, L:ha, S:X, Z:c.src, $:F, N:W, F:c, M:H ? 0 < W.indexOf("/img/a/") ? 2 : 3 : 0 < W.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Gb(function(c, k) {
        for (c = -1; k = Ia[++c];) {
          La(k.u, Ga, P), La(k.F, "click", P), La(k.u, "click", I);
        }
      });
    }
    var Ka = ["jsSidebarFixer1", "jsSidebarFixer2"], h = !(9 > B || J || 1 <= Z && 1.3 > Z || Sc), d = !(5 > Ca || 2.2 > kb || 6 > ea(12) || Pa(30) && 534 > sa || Pa(32) || 7 > B || 9 > J || 1 > Z), v = d || 6 === B || 1 > Z, q = 7.5 > J, p, l, K, z = nd && Lc, N = 0, r = 0, G, S, ka, qa;
    hd || Hc || (Hb(function(c) {
      if (c) {
        if (!wb) {
          return !0;
        }
        c = -1;
        var k;
        p = xb("jsSide");
        l = wb;
        if (!p) {
          return !0;
        }
        Kb(Q);
        vc(Q);
        K = Rb(sc(p), "div", {id:"jsSidebarFixer"});
        la(Y, "blur", oa);
        for (yc(K, da); 1 < lb(p).length;) {
          K.appendChild(lb(p)[1]);
        }
        for (; k = Ka[++c];) {
          ed(xb(k), ia);
        }
        B || jb || 2 > Da || (G = cb.perspective !== t || cb.MozPerspective !== t || cb["-webkit-perspective"] !== t);
        Q();
        return !0;
      }
    }), Gb(function() {
      for (var c = -1, k; k = Ka[++c];) {
        fd(xb(k), ia);
      }
      La(Y, "blur", oa);
      dd(K, da);
    }));
    var Ta, Ma, Na, bb, f, g, y, n;
    Hb(function(c) {
      if (c) {
        if (!wb) {
          return !0;
        }
        var k = lb(va);
        c = Rb(k[0], "div");
        if (d) {
          Wa(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; k.length;) {
            c.appendChild(k.shift());
          }
          fb || (Wa(c, "width:100%;height:100%;overflow:auto;position:relative"), Wa(ub, "overflow:hidden"), Wa(va, "overflow:hidden"));
          c = Zc(c, "div");
          Wa(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ra(c, "div", t, z ? "transform" + (G ? "3D" : "") : d ? "pos:fixed" : "pos:absolute");
        k = ra(c, "div");
        Ta = ra(k, "span");
        Ma = ra(k, "span");
        Na = ra(c, "div");
        bb = ra(c, "div");
        Wa(bb, "position:absolute;left:0;top:0;width:54px;background:#242");
        g = ra(c, "div");
        Wa(g, "position:absolute;left:0;width:54px;background:#363");
        f = ra(c, "div");
        Wa(f, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        y = ra(g, "div");
        Wa(y, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    eb(function() {
      function c(ha, X, ja, Xa) {
        var Aa = Xa ? "div" : "cite";
        if (0 === X.indexOf("urn:isbn:")) {
          X = X.substr(9).toUpperCase().split("-").join("");
          if (13 === X.length) {
            X = X.toString().slice(3, -1);
            for (var ta = 0, Ua = 0; 9 > Ua; Ua++) {
              ta += (X.charAt(Ua) - 0) * (10 - Ua);
            }
            ta = (11 - ta % 11) % 11;
            ta = 10 === ta ? "X" : ta.toString();
            X += ta;
          }
          10 === X.length && (X = "//www.amazon.co.jp/exec/obidos/ASIN/" + X + "/itozyun-22/ref=nosim/");
        }
        ja = Xa ? Rb(sc(F), Aa, {className:ja}) : ra(F, Aa, {className:ja});
        ra(ja, "a", 0 === X.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:X} : {href:X}, ha);
      }
      if (wb) {
        for (var k = yb(wb, "blockquote"), F, H = -1, W, x; F = k[++H];) {
          W = Ra(F, "title"), x = Ra(F, "cite"), W && x ? (mb(F, "title"), c(W, x, "js-generated-link-in-blockquote", !0)) : x && (mb(F, "cite"), c(Y.decodeURI ? decodeURI(x) : x, x, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var R, ya, Ja, hb, Ob, Ib, Cc;
    eb(function() {
      var c = xb("blog2slide-start");
      if (c) {
        var k = O.onfullscreenchange !== t ? "f" : O.onmozfullscreenchange !== t ? "mozF" : O.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        R = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== k || R ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', la(c.firstChild, "click", M), c = Qa(c), ya = Qa(c), Ob = yb(c, "section"), Ja = O.createElement("h1"), Ja.innerHTML = yb(va, "h1")[0].innerHTML, Cc = Ob.length, Ob.splice(0, 0, Ja), 0 !== k ? la(O, k + "ullscreenchange", aa) : B ? la(O, "MSFullscreenChange", aa, !1) : vc(aa)) : $a(c);
      }
    });
  })();
  var Pb, Ub = !Fc || .9 > Z || 8 > J || 5.5 > B, tb;
  (function() {
    function P(h) {
      return h === "" + h;
    }
    function I(h, d) {
      return Ub ? new M(h, d) : new Fc(h, d);
    }
    function Q(h, d, v, q, p) {
      var l = aa.codeBlocks[aa.codeBlocks.length - 1], K = T(), z = K - a;
      switch(v || 0) {
        case 1:
          aa.initRegExpCount++;
          aa.initRegExpTotal += z;
          aa.initRegExpMax < z && (aa.initRegExpMax = z, aa.initRegExpSource = p.toString(), aa.initRegExpInstance = p);
          break;
        case 2:
          l.decorateCount++;
          l.decorateTime += z;
          break;
        case 3:
          l.updateDOMTime += z;
      }
      if (K - pa < E && !q) {
        return a = K, h(d);
      }
      ca(oa, {U:h, Y:d});
    }
    function oa(h) {
      pa = a = T();
      h.U(h.Y);
    }
    function fa(h, d) {
      h && Pb[h] || (h = e.test(d) ? "default-markup" : "default-code");
      var v = !!Pb[h];
      v && Q(U, h, 0, !0);
      return v;
    }
    function ia() {
      function h(Ma, Na, bb) {
        Na && (d.h = d.h || [], d.h.push({l:d, B:d.B, O:1, s:K, D:Ma, o:Na, m:bb, R:{}, v:0}));
      }
      var d = b, v = d.m, q = v[0], p = v[2], l = d.D, K = d.s, z = d.aa.shift(), N = d.R;
      if (z) {
        var r = N[z], G;
        if (!(0 <= r)) {
          if (G = q[z.charAt(0)]) {
            var S = z.match(G[1]);
            r = G[0];
          } else {
            for (r = 0, q = -1; G = p[++q];) {
              if (S = z.match(G[1])) {
                r = G[0];
                break;
              }
            }
          }
          !(G = P(r)) || S && P(S[1]) || (G = !1, r = 11);
          G || (N[z] = r);
        }
        p = d.v;
        N = z.length;
        d.v += N;
        if (G) {
          G = S[1];
          q = z.indexOf(G);
          var ka = G.length, qa = q + ka;
          S[2] && (qa = N - S[2].length, q = qa - ka);
          h(l + p, z.substr(0, q), v);
          if (ka && fa(r, G)) {
            h(l + p + q, G);
            var Ta = !0;
          }
          h(l + p + qa, z.substr(qa), v);
          d.h && d.h.length && (b = d.h.shift());
          Ta || (b !== d ? Q(C, t, 2) : Q(ia, t, 2));
        } else {
          K.push(l + p, r), Q(ia, t, 2);
        }
      } else {
        d.l ? (b = d.l.h.shift()) ? Q(C, t, 2) : (b = d.l, Q(ia, t, 2)) : Q(Sa, t, 2);
      }
    }
    function da(h) {
      if (V.length) {
        var d = V.shift(), v = wa[d];
        if (v.pop) {
          wa[d] = v = I(v[0], v[1]);
        } else if (P(v)) {
          wa[d] = v = I(v);
        } else {
          return da(h);
        }
        Q(da, h, 1, !1, v);
      } else {
        Q(U, h);
      }
    }
    function na(h) {
      for (var d, v = h.firstChild; v; v = v.nextSibling) {
        var q = v.nodeType;
        d = 1 === q ? d ? h : v : 3 === q ? u.test(v.nodeValue) ? h : d : d;
      }
      return d === h ? t : d;
    }
    Pb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var L = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Ea = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], wa = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ma = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), T = Vb.now || function() {
      return +new Vb();
    }, M, aa = {useRegExpCompat:Ub, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var pa = T();
    var a, b, m, A, E = 5 > B ? 60 : 5.5 > B ? 0 : Ub ? 20 : 10, e, u;
    tb = [function(h) {
      Y.RegExpCompat = M = h;
    }, function() {
      e = I("^\\s*<");
      u = I("\\S");
    }];
    Ub || (tb[1](), tb = t);
    var w = function() {
      var h = b, d = h.W, v = ba(h.B, h.O), q = h.o = v.o;
      h.I = v.I;
      fa(d, q) || (b = t, Q(Ka, t, 0, !0));
    };
    var C = function() {
      var h = b;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.D, 0);
      Q(ia, t, 2);
    };
    var V = [];
    var U = function(h) {
      function d(r) {
        var G = r;
        0 <= r && (G = Ea[r]);
        0 <= G[1] && (G[1] = v(G[1]));
        return G;
      }
      function v(r) {
        var G = r;
        return 0 <= r && (G = wa[r], !G.exec) ? (V.push(r), r) : G;
      }
      var q = b, p = Pb[h];
      P(p) && (p = Pb[h] = Pb[p]);
      var l = p[0];
      if (0 <= l) {
        l = L[l];
        if (0 <= l["-num"]) {
          var K = l["-num"];
          delete l["-num"];
          for (var z = -1; 9 > z;) {
            l["" + ++z] = K;
          }
        }
        p[0] = l;
      }
      for (var N in l) {
        l[N] = d(l[N]);
      }
      p[1] = v(p[1]);
      l = p[2];
      z = 0;
      for (K = l.length; z < K; ++z) {
        l[z] = d(l[z]);
      }
      V.length ? Q(da, h, 2) : (q.m ? q.l && (q.l.h[0].m = p) : q.m = p, Q(C, t, 1));
    };
    var ba = function(h, d) {
      function v(N) {
        var r = N.nodeType;
        if (1 === r) {
          if (!nb(N, "nocode")) {
            for (r = N.firstChild; r; r = r.nextSibling) {
              v(r);
            }
            r = ab(N);
            if ("BR" === r || "LI" === r) {
              q[K] = "\n", l[K << 1] = p++, l[K++ << 1 | 1] = N;
            }
          }
        } else if (3 === r || 4 === r) {
          if (r = N.nodeValue) {
            r = d ? r.split("\r\n").join("\n").split("\r").join("\n") : r.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), q[K] = r, l[K << 1] = p, p += r.length, l[K++ << 1 | 1] = N;
          }
        }
      }
      var q = [], p = 0, l = [], K = 0;
      v(h);
      var z = q.join("");
      "\n" === z.charAt(z.length - 1) && (z = z.substr(0, z.length - 1));
      return {o:z, I:l};
    };
    var Ba = function(h, d, v) {
      function q(r) {
        var G = r.nodeType;
        if (1 === G && !nb(r, "nocode")) {
          if ("BR" === ab(r)) {
            p(r), r.parentNode && $a(r);
          } else {
            for (r = r.firstChild; r; r = r.nextSibling) {
              q(r);
            }
          }
        } else if ((3 === G || 4 === G) && v) {
          var S = r.nodeValue, ka = S.indexOf("\r\n"), qa = 2;
          -1 === ka && (ka = S.indexOf("\n"), qa = 1);
          -1 === ka && (ka = S.indexOf("\r"));
          -1 !== ka && (G = S.substr(0, ka), r.nodeValue = G, (S = S.substr(ka + qa)) && tc(r, S), p(r), G || $a(r));
        }
      }
      function p(r) {
        function G(ka, qa) {
          var Ta = qa ? ka.cloneNode(!1) : ka, Ma = ka.parentNode;
          if (Ma) {
            Ma = G(Ma, 1);
            var Na = ka.nextSibling;
            Ma.appendChild(Ta);
            for (var bb = Na; bb; bb = Na) {
              Na = bb.nextSibling, Ma.appendChild(bb);
            }
          }
          return Ta;
        }
        for (; !r.nextSibling;) {
          if (r = r.parentNode, !r) {
            return;
          }
        }
        r = G(r.nextSibling, 0);
        for (var S; (S = r.parentNode) && 1 === S.nodeType;) {
          r = S;
        }
        K.push(r);
      }
      for (var l = O.createElement("li"); h.firstChild;) {
        l.appendChild(h.firstChild);
      }
      for (var K = [l], z = 0; z < K.length; ++z) {
        q(K[z]);
      }
      if (d === (d | 0)) {
        if (10 <= d && 7.2 > J) {
          var N = O.createElement("ol");
          N.innerHTML = '<li value="' + d + '">' + l.innerHTML + "</li>";
          K[0] = N.firstChild;
        } else {
          sb(l, "value", d);
        }
      }
      N = ra(h, "ol", {className:"linenums"});
      h = Math.max(0, d - 1 | 0) || 0;
      z = 0;
      for (d = K.length; z < d; ++z) {
        l = K[z], ec(l, "L" + (z + h) % 10), l.firstChild || $c(l, "\u00a0"), N.appendChild(l);
      }
    };
    var Sa = function() {
      var h = b, d = h.o, v = d.length, q = 0, p = h.I, l = p.length, K = 0, z = h.s, N = z.length, r = 0;
      z[N] = v;
      var G, S;
      for (S = G = 0; S < N;) {
        z[S] !== z[S + 2] ? (z[G++] = z[S++], z[G++] = z[S++]) : S += 2;
      }
      N = G;
      for (S = G = 0; S < N;) {
        var ka = z[S], qa = z[S + 1];
        for (S += 2; S + 2 <= N && z[S + 1] === qa;) {
          S += 2;
        }
        z[G++] = ka;
        z[G++] = qa;
      }
      z.length = G;
      h = h.B;
      N = "";
      h && (N = h.style.display, Ha(h, "display", "none"));
      for (; K < l;) {
        G = p[K + 2] || v;
        ka = z[r + 2] || v;
        S = Math.min(G, ka);
        qa = p[K + 1];
        var Ta;
        if (1 !== qa.nodeType && (Ta = d.substring(q, S))) {
          9 > B && (Ta = Ta.split("\n").join("\r"));
          var Ma = Rb(qa, "span", {className:ma[z[r + 1]]}, Ta);
          $a(qa);
          q < G && (p[K + 1] = tc(Ma, d.substring(S, G)));
        }
        q = S;
        q >= G && (K += 2);
        q >= ka && (r += 2);
      }
      h && Ha(h, "display", N);
      b = t;
      Q(Ka, t, 3, !0);
    };
    var Ia = [], Ga;
    aa.readyTime = T() - pa;
    Hb(function(h) {
      if (h) {
        h = [Fb("pre"), Fb("code"), Fb("xmp")];
        for (var d = 0; d < h.length; ++d) {
          for (var v = 0, q = h[d].length; v < q; ++v) {
            xa(h[d][v]);
          }
        }
        return !0;
      }
    });
    var xa = function(h) {
      Ia.push(h);
      Ga = Ia.length;
      1 === Ga && (Ec ? ca(Ec, Ka) : tb ? tb.push(function() {
        ca(Ka);
      }) : ca(Ka));
    };
    var Ka = function() {
      function h(K, z) {
        return (K.split(z)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ga !== Ia.length && A && A(Ga - Ia.length, Ga);
        var d = Ia.shift();
        if (d) {
          pa = T();
          if (nb(d, "prettyprint") && !nb(d, "prettyprinted")) {
            for (var v = !1, q = d.parentNode; q !== va; q = q.parentNode) {
              var p = ab(q);
              if (("PRE" === p || "XMP" === p || "CODE" === p) && nb(q, "prettyprint")) {
                v = !0;
                break;
              }
            }
            if (!v) {
              v = d.className;
              Ab(d, "prettyprinted");
              q = !1;
              if (!q) {
                q = h(v, "lang-") || h(v, "language-");
                var l;
                !q && (l = na(d)) && "CODE" === ab(l) && (q = h(l.className, "lang-") || h(l.className, "language-"));
              }
              p = ab(d);
              "PRE" === p || "XMP" === p ? p = 1 : (p = d.currentStyle, l = O.defaultView, p = (p = p ? p.whiteSpace : l && l.getComputedStyle ? l.getComputedStyle(d, null).getPropertyValue("white-space") : 0) && "pre" === p.substr(0, 3));
              l = !1;
              (l = "true" === l || +l) || (l = h(v, "linenums:") || nb(d, "linenums"), l = l.length ? +l : l);
              l && Ba(d, l, p);
              b = {W:q, B:d, ba:l, O:p, D:0, v:0, R:{}, s:[]};
              aa.codeBlocks.push({elm:d, lang:q, readyTime:T() - pa, decorateTime:0, decorateCount:0, updateDOMTime:0});
              Q(w);
              return;
            }
          }
          Q(Ka, t, 0, !0);
        } else {
          m && m(aa);
        }
      }
    };
    Y.PR = {RegExpProxy:I, prettifyElement:xa, registerCompleteHandler:function(h, d) {
      m = h;
      A = d;
    }};
  })();
  var Dc = O.scripts || Fb("script");
  var za = Dc[Dc.length - 1].src.split("/");
  --za.length;
  "js" === za[za.length - 1] && --za.length;
  (za = za.join("/")) && (za += "/");
  D("[p_assetUrl] " + za);
  var hd = md || "1" === Ra(va, "mob");
  Yb = (hd ? "mb" : "pc") + "/";
  eb(function() {
    var P;
    (P = xb("logger")) || alert("#logger not found!");
    P ? (D = bz, pb = function(I) {
      ra(P, "DIV", {style:{color:"red"}}, I);
    }, Y.onerror = function(I, Q, oa) {
      pb(I + ", " + Q + ", " + oa);
      return !0;
    }) : Y.console ? (D = console.log, pb = console.error) : J ? (D = ib, pb = opera.postError) : D = pb = ib;
    for (; cc.length;) {
      D(cc.shift());
    }
    for (; dc.length;) {
      pb(dc.shift());
    }
    cc = dc = t;
    function bz(I) {
      ra(P, "DIV", t, I);
    }
    bz = !1;
  });
  6.1 > Ca && (Kb ? Kb(qc) : la(Y, "scroll", qc));
  Gb(Uc);
  6.1 > Ca && (Kb ? Kb(rc) : la(Y, "scroll", rc));
  Gb(Vc);
  10 > B && (11 !== kd || 5 !== B) || (9 > J || 1 > Z || !Db && !Y.addEventListener ? O.write('<link href="' + za + "css/" + Yb + nc + '" rel="stylesheet"' + (8 > J ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > J || 1.5 > Z || 534 > sa || 5 > Ca || 7 > Da || 3 > kb) && eb(function() {
    ra(vb, "link", {href:za + "css/" + Yb + nc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Ub) {
    if (Zb) {
      var Ec = function(P) {
        Y.RegExpCompat = bz;
        Ec = t;
        $b(za + "js/regexpcompat.js");
        function bz(I) {
          for (var Q; Q = tb.shift();) {
            Q(I);
          }
          tb = t;
          ca(P);
          ac(za + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Y.RegExpCompat = function(P) {
        for (var I; I = tb.shift();) {
          I(P);
        }
        tb = t;
        ac(za + "js/regexpcompat.js");
      }, $b(za + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

