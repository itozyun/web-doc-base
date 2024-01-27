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
(function(Va, Y, jb, Fc, O, ic, jd, Wb, qb, jc, kc, Gc, lc, r) {
  function da(P) {
    if (Va[0] === P) {
      return Za === Za + "" ? qb(Za) : Za;
    }
  }
  function Ga(P) {
    var I = Va[3];
    if (Va[2] === P) {
      return I === I + "" ? qb(I) : I;
    }
  }
  function mc() {
    return 6 > B ? wa.scrollTop : B ? ub.scrollTop : Y.pageYOffset;
  }
  var wa = O.body, db = wa.style, ub, vb, wb, Za = Va[1], B = da(2) || da(3), Db = da(7), kb = da(5) || da(6), J = da(8) || da(9), Z = da(11) || da(12), Rb = Z && 0 <= Va.conpare(Za, "1.9.1"), Xb = da(13), ta = da(15), Ea = da(16) || da(17), Hc = da(10) || da(25), za = da(20) || da(22), Ic = da(23), $a = da(21), Yb = da(24), kd = za || Ic || $a || Yb, Jc = za && qb(ic.userAgent.split("Edg/")[1]), ld = qb(ic.appVersion.split("Trident/")[1]) + 4, Eb = Ga(35) || Ga(36) || Ga(37), Kc = Ga(38) || Ga(39) || 
  Ga(40) || Ga(41), md = 0 <= ic.userAgent.indexOf("Googlebot/"), gb = 0.9 > Z, nc = (Db ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > J ? "opr70" : 8 > J ? "opr72" : 9.5 > J ? "opr" + (J | 0) : Z && !Rb ? 1.4 <= Z ? "gck19" : 1.3 <= Z ? "gck13" : 1 <= Z ? "gck12" : gb ? 0.8 <= Z ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Zb = "", nd = Ga(1) || Ga(2) || Ga(3) || Ga(4) || Ga(8) || Ga(9) || Ga(10), Lc, rb = 8 > B || 7.2 > J ? !1 : r, Mc = db.transform !== 
  r ? "transform" : db["-o-transform"] !== r ? "-o-transform" : db["-ms-transform"] !== r ? "-ms-transform" : db.MozTransform !== r ? "-moz-transform" : db["-webkit-transform"] !== r ? "-webkit-transform" : "", Wa = [], Nc = [], hb = [], oc, Oc, Pc, Qc, $b, Rc, Sc, ac, bc, Tc = !1, pc = 525 > ta || 3.1 > Ea || 2.2 > $a || 10 > J || Z && !Rb || da(25) || 10 > da(3) || Ga(32) || Ga(30) || Ga(3), ba, Fb, cc, Uc, od = !!wa.getBoundingClientRect, dc = [], ec = [], qc, Vc, rc, Wc, eb = Wb.now || function() {
    return +new Wb();
  };
  (function() {
    function P() {
      for (var V, N = 0, aa = eb(); N < L.length;) {
        aa < L[0].t ? ++N : (V = L.splice(N, 1)[0], V.f(V.p));
      }
      qa = L.length ? kc(P, Fa) : 0;
    }
    function I() {
      for (var V, N = 0; N < ea.length; ++N) {
        V = ea[N], V.f();
      }
    }
    function Q() {
      oa && (oa = clearInterval(oa));
    }
    function pa() {
      qa && (qa = Gc(qa));
    }
    D = function(V) {
      dc.push(V);
    };
    pb = function(V) {
      ec.push(V);
    };
    cc = function(V) {
      ea.length || (oa = lc(I, ia));
      ea.push({f:V, C:++ca});
      return ca;
    };
    Uc = function(V) {
      for (var N = ea.length, aa; aa = ea[--N];) {
        if (aa.C === V) {
          ea.splice(N, 1);
          ea[0] || Q();
          break;
        }
      }
      return 0;
    };
    qc = function() {
      oa && (Q(), oa = lc(I, ia));
    };
    Vc = Q;
    var ea = [], ia = 500, ca = 0, oa;
    if (5 > B || Db) {
      Y._wdb_onlooptimer = I, I = "_wdb_onlooptimer()";
    }
    ba = function(V, N, aa) {
      L.length || (qa = kc(P, Fa));
      L.push({f:V, p:N, C:++xa, t:eb() + (Fa < aa ? aa : Fa)});
      return xa;
    };
    Fb = function(V) {
      for (var N = L.length, aa; aa = L[--N];) {
        if (aa.C === V) {
          L.splice(N, 1);
          break;
        }
      }
      return 0;
    };
    rc = function() {
      qa && (pa(), qa = kc(P, Fa));
    };
    Wc = pa;
    var L = [], Fa = Ea | 0 ? 64 : 16, xa = 0, qa;
    D("[core] TIMER_INTERVAL:" + Fa);
    if (5 > B || Db) {
      Y._wdb_ontimer = P, P = "_wdb_ontimer()";
    }
  })();
  var xb, Gb, Xc, yb, Yc, Ra, lb, Zc, sc, sa, Sb, $c, ad, tc, ab, zb, bd, bb, Sa, sb, mb, Kb, cd, fc, nb, Ab, uc, Ja, Xa, dd;
  (function() {
    function P(a, b, m) {
      var A = ["<", a], F = 1, R, ha;
      if (b) {
        for (R in b) {
          var f = b[R];
          if (null != f && "" !== f) {
            if ("style" === R) {
              A[++F] = ' style="';
              for (ha in f) {
                for (var u = ++F, w, C = [], U = ha.split(""), ka = U.length; ka;) {
                  w = U[--ka], "A" <= w && "Z" >= w && (w = "-" + w.toLowerCase()), C[ka] = w;
                }
                A[u] = C.join("") + ":" + f[ha] + ";";
              }
              A[++F] = '"';
            } else {
              "className" === R && (R = "class"), A[++F] = " " + R + '="' + f + '"';
            }
          }
        }
      }
      A[++F] = ">";
      null != m && (N && "font" !== a ? A[++F] = "<font>" + I(m) + "</font>" : A[++F] = I(m));
      A[++F] = "</" + a + ">";
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
    function pa(a) {
      return ea(O, a);
    }
    function ea(a, b) {
      var m = "*" === b;
      m = N ? m ? a.all : a.all.tags(b.toUpperCase()) : 6 > B && m ? a.all : a.getElementsByTagName(b);
      for (var A = [], F = 0, R = m.length; F < R; ++F) {
        A[F] = m[F];
      }
      return A;
    }
    function ia(a, b) {
      var m = [], A = 0, F, R = -1;
      if (9 > B || !a.getElementsByClassName) {
        var ha = 6 > B ? a.all : a.getElementsByTagName("*");
      } else {
        var f = !0;
        ha = a.getElementsByClassName(b);
      }
      for (F = ha.length; A < F; ++A) {
        var u = ha[A];
        if (f || (N || 1 === u.nodeType) && xa(u, b)) {
          m[++R] = u;
        }
      }
      return m;
    }
    function ca(a) {
      return N ? a.parentElement : a.parentNode;
    }
    function oa(a, b, m, A, F, R) {
      if (N) {
        var ha = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var f = lb(2 > a ? Ra(b) : b);
        f = 2 > a ? f.indexOf(b) + a : f.length;
        b.insertAdjacentHTML(ha, P(m, A, F));
        b = lb(b)[f];
        null != F && ("font" === m ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (aa) {
        b = O.createElement(P(m, A));
      } else {
        b = R ? O.createElementNS("http://www.w3.org/2000/svg", m) : O.createElement(m);
        if (A) {
          for (ha in A) {
            if ((a = A[ha]) || 0 === a) {
              switch(ha) {
                case "class":
                case "className":
                  fc(b, a);
                  break;
                case "style":
                  R = b.style;
                  for (f in a) {
                    R[f] = a[f];
                  }
                  break;
                default:
                  sb(b, ha, a);
              }
            }
          }
          !J || "a" !== m && "A" !== m || !A.href || A["tag-index"] || A.tagIndex || sb(b, "tagIndex", "-0");
        }
        ma || null != F && L(b, F);
      }
      return b;
    }
    function L(a, b) {
      if (N) {
        return oa(2, a, "font", r, b);
      }
      var m = O.createTextNode("" + b);
      a.appendChild(m);
      return m;
    }
    function Fa(a, b) {
      9 > B ? a.className = b : a.setAttribute("class", b);
    }
    function xa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function qa(a, b, m) {
      if (8 > J || 5.5 > B) {
        b = Q(b);
      }
      a.style[b] = m;
    }
    function V(a) {
      return 5.5 > B ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var N = 5 > B;
    ub = pa("html")[0];
    vb = pa("head")[0];
    xb = function(a) {
      return Y[a] || O[a] || O.getElementById(a);
    };
    Gb = pa;
    Xc = function(a) {
      return ia(O, a);
    };
    yb = ea;
    Yc = ia;
    Ra = ca;
    lb = function(a) {
      a = N ? a.children : a.childNodes;
      for (var b = [], m = a.length; m;) {
        b[--m] = a[m];
      }
      return b;
    };
    Zc = function(a) {
      var b = !(7.03 < J && 7.2 > J) && a.children;
      a = b ? b : a.childNodes;
      for (var m = [], A = a.length, F = -1, R; A;) {
        if (R = a[--A], b || 1 === R.nodeType) {
          N && "FONT" === R.tagName || (m[++F] = R);
        }
      }
      return m;
    };
    sc = function(a) {
      return N ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    sa = function(a, b, m, A, F) {
      b = oa(2, a, b, m, A, F);
      N || (a.appendChild(b), ma && null != A && L(b, A));
      return b;
    };
    Sb = function(a, b, m, A, F) {
      b = oa(0, a, b, m, A, F);
      N || (ca(a).insertBefore(b, a), ma && null != A && L(b, A));
      return b;
    };
    $c = function(a, b, m, A, F) {
      b = oa(1, a, b, m, A, F);
      var R;
      N || ((R = a.nextSibling) ? Ra(R).insertBefore(b, R) : Ra(a).appendChild(b), ma && null != A && L(b, A));
      return b;
    };
    ad = L;
    tc = function(a, b) {
      var m;
      if (N) {
        return oa(1, a, "font", r, b);
      }
      var A = O.createTextNode("" + b);
      (m = a.nextSibling) ? Ra(a).insertBefore(A, m) : Ra(a).appendChild(A);
      return A;
    };
    ab = function(a) {
      Ra(a) ? N ? a.outerHTML = "" : (5.5 > B && (a.style.filter = ""), Ra(a).removeChild(a)) : D("[DOM] p_DOM_remove(), No parentNode!");
    };
    zb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== ub;) {
        if (b = Ra(b), a === b) {
          return !0;
        }
      }
    };
    bd = function(a) {
      return N ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var aa = 9 > B, ma = aa;
    bb = function(a) {
      return a.tagName.toUpperCase();
    };
    Sa = function(a, b) {
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
    Kb = function(a, b) {
      if (J && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > J || 5.5 > B) {
        b = Q(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    cd = function(a) {
      return a.className;
    };
    fc = Fa;
    nb = xa;
    Ab = function(a, b) {
      var m;
      if (!xa(a, b)) {
        if (m = a.className) {
          m += " ";
        }
        Fa(a, m + b);
      }
    };
    uc = function(a, b) {
      if (xa(a, b)) {
        var m = a.className.split(" ");
        m.splice(m.indexOf(b), 1);
        Fa(a, m.join(" "));
      }
    };
    Ja = qa;
    Xa = function(a, b) {
      var m, A = -1, F;
      if (5.5 > B) {
        if (m = V(a)) {
          for (m = m.split(";"); F = m[++A];) {
            qa(a, F.split(":")[0], "");
          }
        }
        if (b) {
          for (A = -1, m = b.split(";"); F = m[++A];) {
            var R = F.split(":")[0];
            qa(a, R, F.substr(R.length + 1));
          }
        }
      } else if (7.1 > J) {
        if (a.setAttribute("style", ""), b) {
          for (m = b.split(";"); F = m[++A];) {
            F = F.split(":"), qa(a, F[0], F[1]);
          }
        }
      } else {
        9 > J || 1 > Z ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    dd = V;
    Wa.splice(0, 0, function() {
      function a(u) {
        u = lb(u);
        for (var w = u.length, C, U, ka; w;) {
          if (C = u[--w], U = C.nodeType, 8 === U) {
            b && ha.push(C);
          } else if (1 === U) {
            switch(U = bb(C), "/" === U.charAt(0) && (U = U.substr(1), f[U] = !0), U) {
              case "STYLE":
                if (7.2 <= J && 9 > J) {
                  break;
                }
              case "LINK":
                N || A || zb(vb, C) || R.push(C);
                break;
              case "META":
                U = Sa(C, "name") || Sa(C, "property");
                for (ka = F.length; ka;) {
                  if (0 === U.indexOf(F[--ka])) {
                    ha.push(C);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (md || Kb(C, "async")) {
                  break;
                }
                if (m) {
                  C.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Kb(C, "skip-cleanup")) {
                  break;
                }
              case "!":
                ha.push(C);
                break;
              case "SOURCE":
                Y.HTMLSourceElement || ha.push(C);
                break;
              default:
                f[U] ? ha.push(C) : lb(C).length && a(C);
            }
          }
        }
        for (; R[0];) {
          vb.appendChild(R.pop());
        }
        for (; ha[0];) {
          ab(ha.pop());
        }
      }
      uc(ub, "nojs");
      wb = xb("jsMain");
      var b = !(8 > J || 5 > B || Db || gb), m = Qc, A = 7 > B, F = ["og:", "twitter:", "fb:"], R = [], ha = [], f = {};
      a(ub);
    });
  })();
  var na, Na, fb, Hb, vc, Lb, Ib, wc, xc, yc, ed, fd, gd, Mb, Ha, zc;
  (function() {
    function P() {
      return d ? q ? 2 : v ? 3 : 1 : 0;
    }
    function I(e) {
      Na(Y, "load", I);
      I = r;
      pa(Wa, e, !0);
      Wa = r;
    }
    function Q(e, g) {
      Ib(function() {
        var y = qa(e);
        g(y);
        y.addListener(g);
        return !0;
      });
    }
    function pa(e, g, y) {
      for (var n = 0; n < e.length; ++n) {
        !0 === e[n](g) && (e.splice(n, 1), --n);
      }
      y && (e.length = 0);
    }
    function ea(e, g, y) {
      Wa || N.length || ba(ia);
      N.push(e, g, y);
    }
    function ia() {
      var e = N, g;
      for (N = []; g = e.shift();) {
        pa(g, e.shift(), e.shift());
      }
    }
    function ca(e) {
      var g = e || event;
      e = ma[g.type];
      var y = -1, n, S;
      5 > B ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : B ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        S = !0;
      });
      for (; n = e[++y];) {
        n.j === this ? (this.g = n.i, B && (g.currentTarget = this), this.g(g), B ? (this.g = jb, this.g = r) : delete this.g) : 7.2 > J && this === O && n.j === Y && (Y.g = n.i, Y.g(g), delete Y.g);
      }
      if (B) {
        return g.preventDefault = g.stopPropagation = jb, g.preventDefault = g.stopPropagation = r, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (A = !0), S && !A && g.K(), g.K = g.stopPropagation = r);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function oa() {
      var e = 9 === V.offsetWidth;
      Mb !== e && (ea(Nc, Mb = e), D("p_cssAvailability:" + Mb));
    }
    function L() {
      !Wa && M && (Fb(M), M = ba(Fa));
    }
    function Fa() {
      M = 0;
      pa(z);
    }
    function xa(e) {
      Wa || pa(t, e);
    }
    var qa = Y.matchMedia, V, N = [];
    Wa.push(function() {
      Q = r;
      V = sa(wa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      fb(function() {
        N.length && ba(ia);
      });
    });
    na = function(e, g, y, n) {
      if (m) {
        e.addEventListener(g, y, n ? aa ? n : n.capture || !0 === n : !1);
      } else {
        var S = {j:e, i:y};
        n = ma[g];
        var Aa = "on" + g, La, ib;
        if (n) {
          for (La = n.length; ib = n[--La];) {
            if (ib.j === e && ib.i === y) {
              return;
            }
          }
          ma[g].push(S);
        } else {
          ma[g] = n = [S], a || (g = e[Aa], "function" === typeof g && g !== ca && n.unshift({j:e, i:g}));
        }
        a ? e.attachEvent(Aa, ca) : e[Aa] = ca;
      }
    };
    Na = function(e, g, y, n) {
      if (m) {
        e.removeEventListener(g, y, n ? aa ? n : n.capture || !0 === n : !1);
      } else {
        n = ma[g];
        g = "on" + g;
        var S, Aa, La;
        if (n) {
          for (S = n.length; Aa = n[--S];) {
            Aa.j === e && (Aa.i === y ? n.splice(S, 1) : La = !0);
          }
          La || (a ? e.detachEvent(g, ca) : B ? (e[g] = jb, e[g] = null) : delete e[g]);
        }
      }
    };
    var aa = !B && !Db && (new jd('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ma = {}, a = !1, b = 525.13 > ta, m = !b && !Db && Y.addEventListener, A;
    b && ub.addEventListener("click", function(e) {
      if (A) {
        return A = !1, e.preventDefault(), !1;
      }
    });
    fb = function(e) {
      Wa ? Wa.push(e) : alert("Load event has already been dispatched!");
    };
    Hb = function(e) {
      F && F.push(e);
    };
    var F = [];
    if (419.3 >= ta) {
      var R = function() {
        if (R) {
          var e = O.readyState;
          "loaded" === e || "complete" === e ? (R = r, I()) : ba(R);
        }
      };
      ba(R);
    } else {
      na(Y, "load", I), gb && ba(function() {
        I && I();
      }, 999);
    }
    B || !gb && 1.8 > Z ? na(Y, "unload", function(e) {
      pa(F, e, !0);
    }) : F = r;
    Ib = function(e) {
      Nc.push(e);
    };
    fb(function() {
      oa();
      cc(oa);
    });
    yc = function(e, g) {
      if (ha) {
        na(e, "focusin", g);
      } else if (f) {
        na(e, "DOMFocusIn", g);
      } else {
        if (w) {
          Ba || (Ba = lc(ya, 333));
        } else if (u || C) {
          na(O, "focus", ka, !0);
        } else {
          return;
        }
        for (var y = U, n = 0, S = y.length; n < S; ++n) {
          if (y[n] === e && y[n + 1] === g) {
            return;
          }
        }
        y.push(e, g);
      }
    };
    ed = function(e, g) {
      if (ha) {
        na(e, "focusin", g);
      } else if (f) {
        na(e, "DOMFocusIn", g, !1);
      } else {
        for (var y = U, n = 0, S = y.length; n < S; ++n) {
          if (y[n] === e && y[n + 1] === g) {
            y.splice(n, 2);
            y.length || (w ? Ba = Uc(Ba) : (u || C) && Na(O, "focus", ka, !0));
            break;
          }
        }
      }
    };
    var ha = 6 <= B || kb || 52 <= Z || 15 <= za || 534 <= ta || 5 <= Ea || Ic || 4 <= $a || 4 <= Yb || 11.6 <= da(8) || 12 <= da(9), f = 8 <= J || za || $a || Yb || ta || Ea, u = 8 > J, w = 6 > B, C = 52 > Z || Xb;
    if (C || u) {
      var U = [];
      var ka = function(e) {
        var g = U, y = u ? O.activeElement : e.target;
        if (u) {
          var n = e;
          e = {type:"focusin", target:y, preventDefault:function() {
            n.preventDefault();
          }, stopPropagation:function() {
            n.stopPropagation();
          }};
        }
        for (var S = 0, Aa = g.length; S < Aa; ++S) {
          var La = g[S];
          (La === y || zb(La, y)) && g[S + 1].call(La, e);
        }
      };
    } else if (w) {
      U = [];
      var Ba, Ka, Ia, ya = function() {
        Ia = Y.onerror;
        Y.onerror = Ma;
        var e = O.activeElement;
        if (Ka !== e) {
          Ka = e;
          for (var g = U, y, n = 0, S = g.length; n < S; ++n) {
            y = g[n], (y === e || zb(y, e)) && g[n + 1].apply(y, [{target:e}]);
          }
        }
        Y.onerror = Ia;
        Ia = r;
      }, Ma = function() {
        D("error!");
        Y.onerror = Ia;
        Ia = Ka = r;
        return !0;
      };
    }
    xc = function(e) {
      hb && hb.push(e);
    };
    var h = 60 > Z || Xb, d, v, q;
    if (89 <= Z || 89 <= za || Eb && 79 <= Jc || qa && (qa("(forced-colors:none)").matches || qa("(forced-colors:active)").matches)) {
      zc = !0, Q("(forced-colors:active)", function(e) {
        d = e.matches;
        Ha = P();
        ea(hb, Ha);
        D("(forced-colors:active):" + Ha);
      });
    } else if (10 <= B || kb || Eb && Jc) {
      zc = !0, Q("(-ms-high-contrast:black-on-white)", function(e) {
        d = v = e.matches;
        Ha !== P() && (Ha = P(), ea(hb, Ha), D("(-ms-high-contrast:black-on-white):" + Ha));
      }), Q("(-ms-high-contrast:white-on-black)", function(e) {
        d = q = e.matches;
        Ha !== P() && (Ha = P(), ea(hb, Ha), D("(-ms-high-contrast:white-on-black):" + Ha));
      }), Q("(-ms-high-contrast:active)", function(e) {
        d = e.matches;
        Ha !== P() && (Ha = P(), ea(hb, Ha), D("(-ms-high-contrast:active):" + Ha));
      });
    } else if (Eb && (B || Z && 0 <= Va.conpare(Za, "1.8.1") || Xb)) {
      var p = function() {
        function e(n, S) {
          if (S && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var Aa = n.split("(")[1].split(",");
          return qb(Aa[0]) + qb(Aa[1]) + qb(Aa[2]);
        }
        var g = O.defaultView;
        var y = g ? g.getComputedStyle(V, null) : V.currentStyle;
        g = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        g && (d = "#123456" !== g && "rgb(18,52,86)" !== g, v = e(g) < e(y, !0), q = e(g) > e(y, !0), Ha !== P() && (Ha = P(), D("(forced-colors-fallback):" + Ha), ea(hb, Ha, h)));
      };
      Ib(function(e) {
        if (e) {
          return Ja(V, "color", "#123456"), Ja(V, "backgroundColor", "#123456"), h ? (p(), hb = r) : cc(p), p = r, !0;
        }
      });
    } else {
      hb = P = r;
    }
    wc = function(e) {
      Wa || alert("p_listenImageReady is called back for images present at load time.");
      k.push(e);
    };
    var k = [], K = 7.5 <= J && 8 > J;
    K && function() {
      for (var e = O.images, g = e.length, y; g;) {
        y = e[--g], y.J = y.src, mb(y, "src");
      }
    }();
    fb(function() {
      function e() {
        n ? (S = y[--n], K && sb(S, "src", S.J), Oc(g, K ? S.J : S.src)) : k = r;
      }
      function g(La) {
        pa(k, {G:S, H:La}, !n);
        e();
      }
      var y = O.images || Gb("img"), n = y.length;
      if (12 > J || 532 > ta) {
        e();
      } else {
        for (; n;) {
          var S = y[--n];
          var Aa = 9 > B ? S.complete : 0 <= S.naturalWidth ? S.naturalWidth : S.width;
          ea(k, {G:S, H:Aa}, !n);
        }
        k = r;
      }
    });
    vc = function(e) {
      z.push(e);
    };
    var z = [], M;
    na(Y, "resize", L);
    Hb(function() {
      M && Gc(M);
      Na(Y, "resize", L);
    });
    Lb = function(e) {
      t.push(e);
    };
    var t = [], G = 1 > Z || 1.2 <= Z && 1.8 > Z || 7.2 >= J, T;
    G ? cc(function() {
      var e = Y.pageYOffset;
      T !== e && (T = e, xa({type:"scroll", cancelable:!1, stopPropagation:jb, preventDefault:jb}));
    }) : na(Y, "scroll", xa, {passive:!0});
    Hb(function() {
      G || Na(Y, "scroll", xa, {passive:!0});
    });
    fd = function(e, g) {
      if (la) {
        na(e, "wheel", g, {passive:!1});
      } else if (ra) {
        na(e, "mousewheel", g, !1);
      } else if (Ta) {
        na(e, "MozMousePixelScroll", g, !1);
      } else if (Oa) {
        for (var y = Pa, n = 0, S = y.length; n < S; ++n) {
          if (y[n] === e && y[n + 1] === g) {
            return;
          }
        }
        y.length || na(O, "DOMMouseScroll", cb, !1);
        y.push(e, g);
      }
    };
    gd = function(e, g) {
      if (la) {
        Na(e, "wheel", g, {passive:!1});
      } else if (ra) {
        Na(e, "mousewheel", g, !1);
      } else if (Ta) {
        Na(e, "MozMousePixelScroll", g, !1);
      } else if (Oa) {
        for (var y = Pa, n = 0, S = y.length; n < S; ++n) {
          if (y[n] === e && y[n + 1] === g) {
            y.splice(n, 2);
            y.length || Na(O, "DOMMouseScroll", cb, !1);
            break;
          }
        }
      }
    };
    var la = 9 <= B || kb || 17 <= Z || 31 <= za || 537.7 <= ta, ra = 6 <= B || kb || 9 <= J || za || 522 <= ta || Ea, Ta = Rb, Oa = Z && 0 <= Va.conpare(Za, "0.9.7") && !Rb;
    if (Oa) {
      var Pa = [], cb = function(e) {
        for (var g = Pa, y = e.target, n, S = 0, Aa = g.length; S < Aa; ++S) {
          n = g[S], zb(n, y) && g[S + 1].call(n, e);
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
          return !!F;
        case 5:
          return ha;
        case 6:
          return R && !xa;
      }
      return !1;
    }
    function I(d) {
      f(d);
      Ma && !d && ab(Ma);
      f = u = w = C = U = ka = Ia = ya = Ma = h = r;
    }
    function Q(d) {
      var v = '1.6em "' + d + '"';
      D("[webFontTest] testByNativeFontLoaderAPI start.");
      O.fonts.load(v).then(function(q) {
        D("[webFontTest] fonts.check() : " + O.fonts.check(v, "i") + ", fonts.length : " + q.length);
        (q = ia(u)) ? ba(I, q) : (D("[webFontTest] mesureWebFont() : false"), ea(!0));
      }, function(q) {
        D("[webFontTest] fonts.load() rejected! " + q);
        rb !== r ? ca(rb) : oc(ca);
      });
    }
    function pa(d) {
      return O.hidden || O.msHidden || O.mozHidden || O.webkitHidden ? (Ka = eb(), !1) : d < eb() - Ka;
    }
    function ea(d) {
      d && (D("[webFontTest] testWebFont start."), Ka = eb());
      (d = ia(u, Ba)) ? (D("[webFontTest] testWebFont mesurement success : " + d), I(d)) : pa(Ba) ? (D("[webFontTest] testWebFont timeout!"), Ia ? oa() : Fa ? I(0) : rb !== r ? ca(rb) : oc(ca)) : ba(ea);
    }
    function ia(d, v) {
      var q = 0, p = -1, k = [];
      if (!h) {
        var K = -1;
        var z;
        ya = sa(wa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa);
        for (h = []; z = a[++K];) {
          Ja(ya, "fontFamily", z), h[K] = ya.offsetWidth;
        }
        D("[webFontTest] default width " + h.join(", "));
      }
      for (5 > B ? ya || (ya = sa(wa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa)) : wa.appendChild(ya); K = a[++p];) {
        Ja(ya, "fontFamily", '"' + d + '",' + K);
        var M = ya.offsetWidth;
        ma ? k[p] = M : (k[p] = M, M !== h[p] && (q = 1));
      }
      if (ma && M === k[0] && M === k[1]) {
        for (D("[webFontTest] Hit... : width=" + M), q = 1, p = -1; 0 <= (M = h[++p]);) {
          if (M === k[0] && M === k[1] && M === k[2]) {
            D("[webFontTest] Failed! : font[" + p + "]=" + a[p]);
            q = 0;
            break;
          }
        }
      }
      !B && q && U && (ya.textContent = U, M = ya.offsetWidth, ya.textContent = ka, q = M === ya.offsetWidth ? 2 : 1, ya.textContent = aa);
      ab(ya);
      5 > B && (ya = r);
      v && (q || pa(v)) && D("[webFontTest] " + d + " " + k.join(", "));
      return q;
    }
    function ca(d) {
      D("[webFontTest] onTestDataURIComplete : " + d);
      d ? (Ia = !0, Ba = N, D("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), u = u.replace(qa, ""), oa()) : I(0);
    }
    function oa() {
      if (w) {
        for (; w.length;) {
          var d = w.shift(), v = w.shift();
          if (P(d)) {
            D("[webFontTest] maybe can use! " + v);
            Ma = Sc(v, L, C, Ma);
            return;
          }
        }
      }
      I(0);
    }
    function L(d) {
      d ? ea(!0) : oa();
    }
    oc = !1 === rb ? function(d) {
      ba(d, !1);
    } : function(d) {
      function v(k) {
        p && (p = Fb(p), rb = k, q.onload = q.onerror = jb, ba(d, k));
      }
      if (rb !== r) {
        D("[dataURITest] already done : " + rb), ba(d, rb);
      } else {
        D("[dataURITest] start!");
        var q = new Image(), p = ba(v, !1, 999);
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
    9 > B && fb(function() {
      var d = sa(wa, "div");
      Xa(d, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lc = 1 < d.offsetHeight;
      ab(d);
    });
    Oc = function(d, v) {
      function q() {
        k || !K || p.complete ? (D("[imageTest] timer -> img.complete. img.width=" + p.width), ba(d, !!p.width), p.onerror = p.onload = jb, p = d = r) : (--K, ba(q));
      }
      var p = new Image(), k, K = 99;
      D("[imageTest] start.");
      p.onerror = function() {
        D("[imageTest] error!");
        k = !0;
      };
      p.onload = function() {
        D("[imageTest] onload.");
        k = !0;
      };
      p.src = v;
      ba(q);
    };
    Pc = function(d, v, q, p, k, K, z) {
      f = d;
      u = v;
      w = q;
      C = p;
      U = k;
      ka = K;
      Ba = z || V;
      D("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!pc);
      da(10) ? ba(I, 1) : pc ? ba(I, 0) : !O.fonts || 603 > ta || 11 > Ea ? (D("[webFontTest] No native font loader."), ea(!0)) : (D("[webFontTest] Use Native font loader."), Q(u));
    };
    var Fa = 9 > B, xa = 6 > za || J || 530 > ta || 5 > Ea, qa = "bad_" + eb() + "_", V = 5E3, N = 500, aa = "mmmmmmmmmmlliiiiiiiii", ma = 9 <= za && 18 > za || 3 > $a || 7 > Ea || ta && 0 >= Va.conpare(Za, "536.11"), a = ["monospace", "sans-serif", "serif"];
    pc || (ma && za && D("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + za), ma && Ea && D("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ea), ma && ta && D("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + ta), ma && $a && D("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + $a));
    var b = 14 <= kb || 36 <= za || 39 <= Z || 602 <= ta && Kc && 0 <= Va.conpare("10.12", Kc) || 10 <= Ea, m = 6 <= za || Z && 0 <= Va.conpare(Za, "1.9.2") || 533 <= ta || 5 <= Ea || 4.4 <= $a || 11.5 <= J || kb || 9 <= da(2) || 10 <= da(3), A = 2 <= za || Rb || 525 <= ta || 4 <= Ea || 2.2 <= $a || 10.1 <= J || kb || 9 <= da(2) || 10 <= da(3), F = A, R = 5.1 <= Eb && 5.2 >= Eb && 40 > za || 6 <= Eb && 6.1 > Eb && 51 > za || 37 > za || 525 <= ta || 3.1 <= Ea || 3 <= $a || 11.5 <= J, ha = 4 <= da(2) || 
    10 <= da(3), f, u, w, C, U, ka, Ba, Ka, Ia, ya, Ma, h;
  })();
  (function() {
    function P(f) {
      if (2 !== f) {
        D("[VectorIcon] " + f);
        var u = Xc("ico"), w = 0, C = u.length;
        if (C) {
          if (1 === f) {
            for (; w < C; ++w) {
              f = u[w];
              var U = bd(f);
              if (U = ha[U]) {
                f.innerHTML = U;
              }
            }
          } else {
            A && !m && (Y.VectorIconFallback = bz, ac(Ca + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        bc(Ca + "js/vector-icon-svg-fallback.js");
        return [ha, u, sa, m];
      }
      bz = !1;
    }
    wc(function(f) {
      var u = f.G;
      f = f.H;
      var w = Ra(u);
      !nb(w, "aBodyRoot") && f ? Ab(w, "js-image-has-been-loaded") : f || Sa(u, "alt") || "lazy" === Sa(u, "loading") || Ja(u, "display", "none");
    });
    gb && (Wa.splice(1, 0, function() {
      for (var f = Yc(wb, "RichLink-sep"), u, w, C, U, ka, Ba; u = f.shift();) {
        for (u = lb(u); w = u.shift();) {
          if ("A" === bb(w) && !w.innerHTML) {
            for (D("\u25a0 Broken Anchor " + w.parentNode.innerHTML); C = u.shift();) {
              if (1 === C.nodeType) {
                if ("A" === bb(C)) {
                  break;
                }
                for (U = yb(C, "A"); ka = U.shift();) {
                  for (Ba = lb(ka); Ba.length;) {
                    ka.parentNode.insertBefore(Ba.shift(), ka);
                  }
                  ab(ka);
                }
              }
              w.appendChild(C);
            }
          }
        }
      }
    }), Wa.splice(2, 0, function() {
      for (var f = Gb("A"), u, w; u = f.shift();) {
        "A" !== bb(u) || u.innerHTML || (w = u.nextSibling && u.nextSibling.firstChild) && w.href === u.href && (D("\u25b2 Broken Anchor " + w.innerHTML), ab(u));
      }
    }));
    5.5 <= B && 8 > B && hb && xc(function(f) {
      for (var u = yb(wa, "a"), w = u.length, C = 0; C < w; ++C) {
        u[C].hideFocus = !f;
      }
    });
    if (!zc && hb) {
      var I, Q = function() {
        I = sa(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ca + "css/" + Zb + "hc/" + nc});
        if (Mc || 5.5 <= B && 9 > B && Lc) {
          Ab(wa, "js-canuse-css-rotate-when-forced-colors-mode"), D("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        Q = r;
      };
      xc(function(f) {
        f && !I ? Q() : I && (f ? vb.appendChild(I) : ab(I));
      });
    }
    J && fb(function() {
      for (var f = yb(wa, "a"), u = f.length, w = 0, C; w < u; ++w) {
        C = f[w], "-1" === Sa(C, "tabIndex") ? mb(C, "tabIndex") : Sa(C, "href") && sb(C, "tabIndex", "0");
      }
      f = yb(wa, "input");
      w = 0;
      for (u = f.length; w < u; ++w) {
        C = f[w], "hidden" === Sa(C, "type") && mb(C, "tabIndex");
      }
    });
    if (Z && 0 > Va.conpare(Za, "0.9.5")) {
      Tc = !0;
      var pa, ea, ia, ca, oa;
      fb(function() {
        na(O, "keydown", L);
        na(O, "keyup", Fa);
        yc(wa, xa);
        gb || (na(Y, "blur", ma), na(wa, "click", aa));
      });
      var L = gb ? function(f) {
        16 === f.keyCode ? pa = !0 : 9 === f.keyCode && ca && qa(ca, !0) && (ca.blur && ca.blur(), f.stopPropagation(), f.preventDefault(), ba(N));
      } : function(f) {
        16 === f.keyCode ? pa = !0 : 9 === f.keyCode && (ea = eb());
      }, Fa = function(f) {
        16 === f.keyCode && (pa = !1);
      }, xa = gb ? function(f) {
        f.target.innerHTML || D(f.target.parentNode.innerHTML);
        ca = f.target;
      } : function(f) {
        var u = f.target;
        if (ca === u) {
          ia = r;
        } else if (ia) {
          u === ia ? (f.stopPropagation(), N(!0)) : (u.blur && b(u), f.preventDefault(), N());
        } else {
          if (f = ca) {
            ca = r, b(f);
          }
          ia = u;
          N(!0);
        }
      }, qa = function(f, u) {
        var w = eb(), C = wa, U = "nextSibling", ka = "firstChild";
        pa && (u || w - 99 < ea && ea <= w) && (U = "previousSibling", ka = "lastChild");
        for (ia = r; f !== C;) {
          if (Ba) {
            w = f;
            var Ba = !1;
          } else {
            w = f[U];
          }
          if (w) {
            if (1 === w.nodeType) {
              if (V(w)) {
                return ia = w, !0;
              }
              f = (Ba = w[ka]) || w;
            } else {
              f = w;
            }
          } else {
            f = f.parentNode;
          }
        }
      }, V = function(f, u) {
        function w() {
          return "-1" !== Sa(f, "tab-index");
        }
        function C() {
          return 0 < f.offsetHeight * f.offsetWidth;
        }
        if (f.focus) {
          var U;
          switch({A:u ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[bb(f)]) {
            case 1:
              if (Kb(f, "href") && w() && C()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Sa(f, "type") && w() && !Kb(f, "disabled") && C()) {
                return !0;
              }
              break;
            case 3:
              if (w() && !Kb(f, "disabled") && C()) {
                return !0;
              }
              break;
            default:
              if ((U = Sa(f, "tab-index")) && "-1" !== U && C()) {
                return !0;
              }
          }
        }
      }, N = function(f) {
        oa = 0;
        ia && (gb || na(ia, "blur", a), ca = ia, ia = r, f || ca.focus());
      };
      if (!gb) {
        var aa = function(f) {
          var u = f.target;
          if (ca && V(u, !0)) {
            var w = ca;
            ca = r;
            b(w);
            ia = u;
            f.stopPropagation();
            f.preventDefault();
            N();
          }
        }, ma = function(f) {
          f.target === O && (ia = r);
        }, a = function(f) {
          f = f.target;
          Na(f, "blur", a);
          ca === f && qa(f) && (oa || (oa = ba(N)));
        }, b = function(f) {
          Na(f, "blur", a);
          f.blur();
        };
      }
    }
    Ib(function(f) {
      if (f) {
        return Pc(P, "web-doc-base", [1, Ca + "iconfont/woff2.css", 2, Ca + "iconfont/woff.css", 4, Ca + "iconfont/otf.css", 3, Ca + "iconfont/ttf.css", 6, Ca + "iconfont/svg.css"], "js-myIconFont-testCssReady", F, R), P = r, !0;
      }
    });
    var m = 8 <= da(8) && 9 > J, A = 9 <= B || kb || 1.8 <= Z || 8 <= da(8) || 9 <= da(9) || 3 <= da(21) || Xb || kd || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || Ea, F = "IE", R = "\ueadb", ha = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", 
    Android:"\ud83e\udd16"};
  })();
  (function() {
    function P(c) {
      var l = Ka.length, E, H, W, x;
      if (13 === (c.keyCode || c.V) || c.type !== Ia) {
        for (; l;) {
          var fa = Ka[--l];
          if (fa.F === this || fa.u === this) {
            l = fa.F;
            var X = E = fa.u;
            if (fa.P) {
              if (Ja(l, "width", fa.$), l.src = fa.Z, fc(X, fa.T), l = fa.L) {
                Xa(l, fa.S), uc(l, "js-captioned-thumbnail__large");
              }
            } else {
              if (H = fa.N) {
                delete fa.N;
                if (fa.M) {
                  for (; E = Ra(E);) {
                    if (!nb(E, "caption")) {
                      var ja = bb(E);
                      if ("DIV" === ja || "P" === ja || "BLOCKQUOT" === ja || "LI" === ja || "DD" === ja || "TD" === ja || "TH" === ja || "FORM" === ja || "PRE" === ja) {
                        break;
                      }
                    }
                  }
                  E = (E.offsetWidth | 0) - 4;
                  1600 < E && (E = 1600);
                  if (2 === fa.M) {
                    H = H.split("=");
                    ja = H.length;
                    if (W = H[ja - 1]) {
                      (x = qb(W.substr(1))) && W === "s" + x ? H[ja - 1] = "w" + E : H[ja] = "w" + E;
                    }
                    H = H.join("=");
                  } else {
                    H = H.split("/");
                    ja = H.length;
                    if (W = H[ja - 2]) {
                      (x = qb(W.substr(1))) && W === "s" + x ? H[ja - 2] = "w" + E : H.splice(ja - 1, 0, "w" + E);
                    }
                    H = H.join("/");
                  }
                }
                fa.X = H;
              }
              fa.T = cd(X);
              Ab(X, "js-pica-thumbnail__large");
              Ja(l, "width", "");
              l.src = fa.X;
              if (l = fa.L) {
                Xa(l, ""), Ab(l, "js-captioned-thumbnail__large");
              }
            }
            fa.P = !fa.P;
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
      var l = T;
      if (Mb) {
        if (la && !l) {
          if (eb() < la) {
            return;
          }
          la = r;
        }
        7 === c ? (L("t"), ra = 0) : (L("s"), ra && (ra = Fb(ra)), t = mc());
        l ? (T = ea(r, l[0], l[1])) || (la = eb() + 99) : ea();
        xa();
      } else {
        T = r;
      }
    }
    function pa() {
      L("w.blur");
    }
    function ea(c, l, E) {
      function H(ob) {
        X = ob;
        if (z) {
          ja = z + ":translate" + (G ? "3D(0," : "(0,") + ob + (G ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ob) {
          if (d || v) {
            var Ac = p.offsetWidth;
          }
          ja = d ? "position:fixed;width:" + Ac + "px;top:" + (ob - W + va) + "px" : q ? "top:" + ob + "px" : "position:absolute;top:" + ob + "px;left:0";
          if (v && ja) {
            var Tb = 8 > B ? " " : ",";
            ja += ";clip:rect(" + (0 > ob ? -ob + "px" + Tb + Ac + "px" + Tb + Qa : "0" + Tb + Ac + "px" + Tb + (ob + Qa < Ub ? Qa : Ub - ob)) + "px" + Tb + "0)";
          }
        }
      }
      var W = t, x = k, fa = p.offsetTop === x.offsetTop, X = 0, ja = "", Ya = !0;
      if (fa) {
        for (var Da = 0, va = 0, Ua = x; Ua && Ua !== wa;) {
          va += Ua.offsetTop, Ua = Ua.offsetParent;
        }
        X = M;
        Ua = 11 > B ? ub.offsetHeight : Y.innerHeight;
        var Bc = x.offsetHeight, Qa = K.offsetHeight, Ub = Qa < Bc ? Bc : Qa, Bb = W, Nb = Bb + Ua, gc = va, hc = gc + Ub, hd = va + X, pd = hd + Qa;
        x = Bb < gc ? gc : Bb;
        var Cb = hc < Nb ? hc : Nb, Ob = Cb - x;
        Bb = hc <= Bb;
        Nb = Nb <= gc;
        if (l !== r) {
          Ya = va + l;
          c = Ya + E;
          if (Bb || Nb) {
            return Ua <= E ? (l = va, L("4.1.1")) : Bb ? (l = hc - E, L("4.1.2")) : (l = va + E - Ua, L("4.1.3")), la = r, Y.scroll(0, l), L("4.1.*"), T;
          }
          Qa <= Ob ? (Da = 3, L("4.2")) : E <= Ob ? Qa - l <= Ob ? (Da = 2, L("4.3.1")) : x <= Ya && c <= Cb ? x < va + X && (Da = 4, L("4.3.2")) : x <= Ya && Ya <= Cb ? (Da = 5, L("4.3.3")) : x <= c && c <= Cb ? (Da = 4, L("4.3.4")) : c < x ? (Da = 4, L("4.3.5")) : (Da = 5, L("4.3.6")) : (Da = 4, L("4.4"));
          Ya = !1;
        } else {
          c !== r ? Qa <= Ob ? (Da = 7, Ya = !1, L("3.1")) : (X -= 60 * c, Da = Cb - va - Qa, c = x - va, X < Da ? (X = Da, L("3.2.1")) : c < X ? (X = c, L("3.2.2")) : L("3.2.3"), Da = 6) : Bc <= Qa || (Bb ? (Da = 1, L("2.2.1")) : Nb ? L("2.2.2") : Qa <= Ob ? (Da = 3, L("2.3")) : x < hd ? (Da = 3, L("2.4.1")) : pd < Cb ? (Da = 2, L("2.4.2")) : W < va + Qa - Ob ? L("2.4.3") : (Da = 2, L("2.4.4")));
        }
        switch(Da) {
          case 0:
            H(0);
            break;
          case 1:
            H(Ub - Qa);
            break;
          case 2:
            H(Cb - va - Qa);
            break;
          case 3:
            H(x - va);
            break;
          case 4:
            H(x - va - l);
            break;
          case 5:
            H(Cb - va - (l + E));
          case 6:
            H(X);
        }
        qa(X, Qa, va, Ub, Ua, l || "-", E || "-");
      } else {
        qa(X, "-", "-", "-", "-", "-", "-");
      }
      Xa(K, ja);
      M = X;
      return fa && Ya;
    }
    function ia(c) {
      if (Mb && (L("m"), Z && (t = mc(), xa()), this !== c.target)) {
        var l = jc(c.deltaY) ? c.deltaY : jc(c.wheelDeltaY) ? c.wheelDeltaY / 120 : jc(c.wheelDelta) ? c.wheelDelta / -120 : c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1);
        l && ea(9 >= l ? -9 >= l ? -3 : l : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ca(c) {
      if (Mb) {
        var l = Z && 0 > Va.conpare(Za, "0.9.4"), E = c.target, H = K, W = 0;
        if (zb(H, E)) {
          L(c.type || "ie5focus");
          na(E, "blur", oa);
          if (z) {
            l = E.getBoundingClientRect(), c = l.bottom - l.top, W = l.top - H.getBoundingClientRect().top | 0;
          } else {
            c = E.offsetHeight;
            var x = E;
            if (l) {
              for (var fa = []; x && (Z ? zb(H, x) : H !== x);) {
                for (; x.previousSibling;) {
                  x = x.previousSibling, x.tagName && fa.unshift(x.tagName + ":" + x.offsetTop);
                }
                x = x.offsetParent;
              }
              D(fa.join());
              x = E;
            }
            for (; x && (Z ? zb(H, x) : H !== x);) {
              if (l) {
                for (; x.previousSibling;) {
                  x = x.previousSibling, W += x.offsetHeight || 0;
                }
                x = x.parentNode;
              } else {
                W += x.offsetTop, x = x.offsetParent;
              }
            }
          }
          h ? (T = [W, c], ra && Fb(ra), ra = ba(Q, 7, 1 > Z || 536 > ta || 14 > za ? 500 : 0)) : (t = mc(), ea(r, W, c));
          V(W, c);
        }
      }
    }
    function oa() {
      Na(this, "blur", oa);
      V(0, 0);
    }
    function L(c) {
      Pa && (n && (n = Fb(n)), n = ba(Fa, 0, 1400), Pa.innerHTML += " " + c);
    }
    function Fa() {
      Pa.innerHTML = "";
    }
    function xa() {
      e && (Ja(e, "top", (t / 10 | 0) + "px"), Oa.innerHTML = " scrl:" + (t | 0));
    }
    function qa(c, l, E, H, W, x, fa) {
      g && (Ja(g, "top", ((c + E) / 10 | 0) + "px"), Ja(g, "height", (l / 10 | 0) + "px"), Ja(e, "height", (W / 10 | 0) + "px"), Ja(cb, "height", (wa.scrollHeight / 10 | 0) + "px"), Ta.innerHTML = "conY:" + E + "/sidY" + c + ", conH:" + H + "/sidH" + l + ", focY:" + x + " focH:" + fa);
    }
    function V(c, l) {
      y && (Ja(y, "top", (c / 10 | 0) + "px"), Ja(y, "height", (l / 10 | 0) + "px"));
    }
    function N() {
      S.call(Aa);
    }
    function aa() {
      O.fullscreenElement || O.fullscreen || O.webkitIsFullscreen || O.msFullscreenElement || Y.fullScreen ? (sb(Aa, "id", "blog2slide-root"), Pb[1].parentNode.insertBefore(La, Pb[1]), ma(), O.onkeydown = a) : ib && (ab(La), mb(Aa, "id"), mb(ib, "id"), ib = O.onkeydown = r);
    }
    function ma() {
      ib && mb(ib, "id");
      Jb = 0 < Jb ? Cc < Jb ? Cc : Jb : 0;
      ib = Pb[Jb];
      sb(ib, "id", "blog2slide-current");
    }
    function a(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Jb, ma();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Jb, ma();
      }
    }
    Sc = function(c, l, E, H) {
      H = H || sa(vb, "link", {type:"text/css", rel:"stylesheet"});
      var W;
      if (u) {
        (W = xb(E)) ? mb(W, "id") : W = sa(wa, "div", {"aria-hidden":"true", className:E});
        var x = W.offsetWidth;
        D("[CSS Loader] widthBeforeCSSLoaded = " + x);
        sb(W, "id", E);
      }
      f(H, c, l, W, x);
      return H;
    };
    var b = Z && 0 > Va.conpare(Za, "0.9.1"), m = 11 <= B || kb || 9 <= J && 9.5 > J, A = 11 > B, F = 7.2 <= J && 7.5 > J, R = 9 > Z && !b || 19 > za || 4.3 > $a || 2 > Yb || 536 > ta || 6 > Ea || 7 <= J && 9 > J && !F, ha = !b && !m && !A && !F && !R, f = ha ? function(c, l, E) {
      D("[CSS Loader] onload + onerror");
      c.onload = bz;
      c.onerror = function() {
        c.onload = c.onerror = null;
        ba(E, !1);
      };
      c.href = l;
      function bz() {
        c.onload = c.onerror = null;
        ba(E, !0);
      }
      bz = !1;
    } : m ? function(c, l, E, H, W) {
      D("[CSS Loader] onload + mesure");
      c.onload = bz;
      c.href = l;
      function bz() {
        ba(E, u(H, W));
        c.onload = null;
        H = r;
      }
      bz = !1;
    } : A ? function(c, l, E, H, W) {
      D("[CSS Loader] onreadystatechange + onerror");
      c.onreadystatechange = bz;
      c.href = l;
      function bz() {
        "complete" === c.readyState && (ba(E, u(H, W)), H = r, c.V = jb);
      }
      bz = !1;
    } : R || F ? function(c, l, E, H, W) {
      function x() {
        X && (ja = Fb(ja), D("[CSS Loader] onComplete"), Ya = eb() + 999, ba(fa, 0, 99), R ? X.onerror = null : X.removeEventListener("load", x, !1), X = r);
      }
      function fa() {
        u(H, W) ? (H = r, ba(E, !0)) : eb() < Ya ? ba(fa, 0, 99) : (H = r, ba(E, !1));
      }
      var X = new Image(), ja = ba(x, 0, 5E3), Ya;
      R ? (D("[CSS Loader] img.onerror + mesure"), X.onerror = x) : (D('[CSS Loader] img.addEventListener("load") + mesure'), X.addEventListener("load", x, !1));
      X.src = c.href = l;
    } : function(c, l, E) {
      D("[CSS Loader] UNSUPPORTED");
      ba(E, !1);
    }, u = !ha && !b && function(c, l) {
      D("[CSS Loader] elmTest.offsetWidth = " + c.offsetWidth);
      return c.offsetWidth !== l;
    };
    Rc = Z && 0 >= Va.conpare(Za, "0.9");
    $b = !(7.2 > J || Rc);
    ac = function(c) {
      w ? Wa ? O.write('<script src="' + c + '">\x3c/script>') : pb("[DynamicScvriptLoader] Document already loaded! " + c) : Wa || ka.length ? ka.push(c) : Ba(c);
    };
    bc = function(c) {
      w ? D("[DynamicScvriptLoader] " + c + " loaded.") : c === U ? Ba(ka.shift()) : pb(c + " <> " + U);
    };
    var w = !$b, C = $b && 7.5 > J, U;
    if (!w) {
      var ka = [];
      C && (Qc = !0);
      fb(function() {
        Ba(ka.shift());
      });
      var Ba = function(c) {
        if (U = c) {
          C ? Dc[0].src = c : sa(vb, "script", {src:c});
        }
      };
    }
    var Ka = [], Ia = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!Hc) {
      var ya = db.transition !== r || db["-o-transition"] !== r || db["-moz-transition"] !== r || db["-webkit-transition"] !== r;
      wc(function(c) {
        if (c.H && wb) {
          c = c.G;
          var l = Ra(c), E = "", H;
          if ("A" === bb(l) && 1 === Zc(l).length) {
            var W = Sa(l, "href");
            var x = W.split("?")[0].split("#")[0].split(".");
            x = (x[x.length - 1] || "").toLowerCase();
            if ((H = 0 < W.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + x + ".")) {
              na(l, Ia, P);
              na(c, "click", P);
              na(l, "click", I);
              ya && (E = c.naturalWidth + "px", Ja(c, "width", E));
              Ab(l, "js-pica-thumbnail");
              for (x = l; x = Ra(x);) {
                if (nb(x, "caption")) {
                  Ab(x, "js-captioned-thumbnail");
                  var fa = x;
                  var X = dd(fa);
                  break;
                }
              }
              Ka.push({u:l, L:fa, S:X, Z:c.src, $:E, N:W, F:c, M:H ? 0 < W.indexOf("/img/a/") ? 2 : 3 : 0 < W.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Hb(function(c, l) {
        for (c = -1; l = Ka[++c];) {
          Na(l.u, Ia, P), Na(l.F, "click", P), Na(l.u, "click", I);
        }
      });
    }
    var Ma = ["jsSidebarFixer1", "jsSidebarFixer2"], h = !(9 > B || J || 1 <= Z && 1.3 > Z || Tc), d = !(5 > Ea || 2.2 > $a || 6 > da(12) || Ga(30) && 534 > ta || Ga(32) || 7 > B || 9 > J || 1 > Z), v = d || 6 === B || 1 > Z, q = 7.5 > J, p, k, K, z = od && Mc, M = 0, t = 0, G, T, la, ra;
    id || Hc || (Ib(function(c) {
      if (c) {
        if (!wb) {
          return !0;
        }
        c = -1;
        var l;
        p = xb("jsSide");
        k = wb;
        if (!p) {
          return !0;
        }
        Lb(Q);
        vc(Q);
        K = Sb(sc(p), "div", {id:"jsSidebarFixer"});
        na(Y, "blur", pa);
        for (yc(K, ca); 1 < lb(p).length;) {
          K.appendChild(lb(p)[1]);
        }
        for (; l = Ma[++c];) {
          fd(xb(l), ia);
        }
        B || kb || 2 > za || (G = db.perspective !== r || db.MozPerspective !== r || db["-webkit-perspective"] !== r);
        Q();
        return !0;
      }
    }), Hb(function() {
      for (var c = -1, l; l = Ma[++c];) {
        gd(xb(l), ia);
      }
      Na(Y, "blur", pa);
      ed(K, ca);
    }));
    if (!(5 > Ea)) {
      var Ta, Oa, Pa, cb, e, g, y, n;
      Ib(function(c) {
        if (c) {
          if (!wb) {
            return !0;
          }
          var l = lb(wa);
          c = Sb(l[0], "div");
          if (d) {
            Xa(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          } else {
            for (; l.length;) {
              c.appendChild(l.shift());
            }
            gb || (Xa(c, "width:100%;height:100%;overflow:auto;position:relative"), Xa(ub, "overflow:hidden"), Xa(wa, "overflow:hidden"));
            c = $c(c, "div");
            Xa(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          }
          sa(c, "div", r, z ? "transform" + (G ? "3D" : "") : d ? "pos:fixed" : "pos:absolute");
          l = sa(c, "div");
          Ta = sa(l, "span");
          Oa = sa(l, "span");
          Pa = sa(c, "div");
          cb = sa(c, "div");
          Xa(cb, "position:absolute;left:0;top:0;width:54px;background:#242");
          g = sa(c, "div");
          Xa(g, "position:absolute;left:0;width:54px;background:#363");
          e = sa(c, "div");
          Xa(e, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
          y = sa(g, "div");
          Xa(y, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
          return !0;
        }
      });
    }
    fb(function() {
      function c(fa, X, ja, Ya) {
        var Da = Ya ? "div" : "cite";
        if (0 === X.indexOf("urn:isbn:")) {
          X = X.substr(9).toUpperCase().split("-").join("");
          if (13 === X.length) {
            X = X.toString().slice(3, -1);
            for (var va = 0, Ua = 0; 9 > Ua; Ua++) {
              va += (X.charAt(Ua) - 0) * (10 - Ua);
            }
            va = (11 - va % 11) % 11;
            va = 10 === va ? "X" : va.toString();
            X += va;
          }
          10 === X.length && (X = "//www.amazon.co.jp/exec/obidos/ASIN/" + X + "/itozyun-22/ref=nosim/");
        }
        ja = Ya ? Sb(sc(E), Da, {className:ja}) : sa(E, Da, {className:ja});
        sa(ja, "a", 0 === X.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:X} : {href:X}, fa);
      }
      if (wb) {
        for (var l = yb(wb, "blockquote"), E, H = -1, W, x; E = l[++H];) {
          W = Sa(E, "title"), x = Sa(E, "cite"), W && x ? (mb(E, "title"), c(W, x, "js-generated-link-in-blockquote", !0)) : x && (mb(E, "cite"), c(Y.decodeURI ? decodeURI(x) : x, x, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var S, Aa, La, ib, Pb, Jb, Cc;
    fb(function() {
      var c = xb("blog2slide-start");
      if (c) {
        var l = O.onfullscreenchange !== r ? "f" : O.onmozfullscreenchange !== r ? "mozF" : O.onwebkitfullscreenchange !== r ? "webkitF" : 0;
        S = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== l || S ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', na(c.firstChild, "click", N), c = Ra(c), Aa = Ra(c), Pb = yb(c, "section"), La = O.createElement("h1"), La.innerHTML = yb(wa, "h1")[0].innerHTML, Cc = Pb.length, Pb.splice(0, 0, La), 0 !== l ? na(O, l + "ullscreenchange", aa) : B ? na(O, "MSFullscreenChange", aa, !1) : vc(aa)) : ab(c);
      }
    });
  })();
  var Qb, Vb = !Fc || .9 > Z || 8 > J || 5.5 > B, tb;
  (function() {
    function P(h) {
      return h === "" + h;
    }
    function I(h, d) {
      return Vb ? new N(h, d) : new Fc(h, d);
    }
    function Q(h, d, v, q, p) {
      var k = aa.codeBlocks[aa.codeBlocks.length - 1], K = V(), z = K - a;
      switch(v || 0) {
        case 1:
          aa.initRegExpCount++;
          aa.initRegExpTotal += z;
          aa.initRegExpMax < z && (aa.initRegExpMax = z, aa.initRegExpSource = p.toString(), aa.initRegExpInstance = p);
          break;
        case 2:
          k.decorateCount++;
          k.decorateTime += z;
          break;
        case 3:
          k.updateDOMTime += z;
      }
      if (K - ma < F && !q) {
        return a = K, h(d);
      }
      ba(pa, {U:h, Y:d});
    }
    function pa(h) {
      ma = a = V();
      h.U(h.Y);
    }
    function ea(h, d) {
      h && Qb[h] || (h = R.test(d) ? "default-markup" : "default-code");
      var v = !!Qb[h];
      v && Q(C, h, 0, !0);
      return v;
    }
    function ia() {
      function h(Oa, Pa, cb) {
        Pa && (d.h = d.h || [], d.h.push({l:d, B:d.B, O:1, s:K, D:Oa, o:Pa, m:cb, R:{}, v:0}));
      }
      var d = b, v = d.m, q = v[0], p = v[2], k = d.D, K = d.s, z = d.aa.shift(), M = d.R;
      if (z) {
        var t = M[z], G;
        if (!(0 <= t)) {
          if (G = q[z.charAt(0)]) {
            var T = z.match(G[1]);
            t = G[0];
          } else {
            for (t = 0, q = -1; G = p[++q];) {
              if (T = z.match(G[1])) {
                t = G[0];
                break;
              }
            }
          }
          !(G = P(t)) || T && P(T[1]) || (G = !1, t = 11);
          G || (M[z] = t);
        }
        p = d.v;
        M = z.length;
        d.v += M;
        if (G) {
          G = T[1];
          q = z.indexOf(G);
          var la = G.length, ra = q + la;
          T[2] && (ra = M - T[2].length, q = ra - la);
          h(k + p, z.substr(0, q), v);
          if (la && ea(t, G)) {
            h(k + p + q, G);
            var Ta = !0;
          }
          h(k + p + ra, z.substr(ra), v);
          d.h && d.h.length && (b = d.h.shift());
          Ta || (b !== d ? Q(u, r, 2) : Q(ia, r, 2));
        } else {
          K.push(k + p, t), Q(ia, r, 2);
        }
      } else {
        d.l ? (b = d.l.h.shift()) ? Q(u, r, 2) : (b = d.l, Q(ia, r, 2)) : Q(Ba, r, 2);
      }
    }
    function ca(h) {
      if (w.length) {
        var d = w.shift(), v = xa[d];
        if (v.pop) {
          xa[d] = v = I(v[0], v[1]);
        } else if (P(v)) {
          xa[d] = v = I(v);
        } else {
          return ca(h);
        }
        Q(ca, h, 1, !1, v);
      } else {
        Q(C, h);
      }
    }
    function oa(h) {
      for (var d, v = h.firstChild; v; v = v.nextSibling) {
        var q = v.nodeType;
        d = 1 === q ? d ? h : v : 3 === q ? ha.test(v.nodeValue) ? h : d : d;
      }
      return d === h ? r : d;
    }
    Qb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var L = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Fa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
    qa = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), V = Wb.now || function() {
      return +new Wb();
    }, N, aa = {useRegExpCompat:Vb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var ma = V();
    var a, b, m, A, F = 5 > B ? 60 : 5.5 > B ? 0 : Vb ? 20 : 10, R, ha;
    tb = [function(h) {
      Y.RegExpCompat = N = h;
    }, function() {
      R = I("^\\s*<");
      ha = I("\\S");
    }];
    Vb || (tb[1](), tb = r);
    var f = function() {
      var h = b, d = h.W, v = U(h.B, h.O), q = h.o = v.o;
      h.I = v.I;
      ea(d, q) || (b = r, Q(Ma, r, 0, !0));
    };
    var u = function() {
      var h = b;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.D, 0);
      Q(ia, r, 2);
    };
    var w = [];
    var C = function(h) {
      function d(t) {
        var G = t;
        0 <= t && (G = Fa[t]);
        0 <= G[1] && (G[1] = v(G[1]));
        return G;
      }
      function v(t) {
        var G = t;
        return 0 <= t && (G = xa[t], !G.exec) ? (w.push(t), t) : G;
      }
      var q = b, p = Qb[h];
      P(p) && (p = Qb[h] = Qb[p]);
      var k = p[0];
      if (0 <= k) {
        k = L[k];
        if (0 <= k["-num"]) {
          var K = k["-num"];
          delete k["-num"];
          for (var z = -1; 9 > z;) {
            k["" + ++z] = K;
          }
        }
        p[0] = k;
      }
      for (var M in k) {
        k[M] = d(k[M]);
      }
      p[1] = v(p[1]);
      k = p[2];
      z = 0;
      for (K = k.length; z < K; ++z) {
        k[z] = d(k[z]);
      }
      w.length ? Q(ca, h, 2) : (q.m ? q.l && (q.l.h[0].m = p) : q.m = p, Q(u, r, 1));
    };
    var U = function(h, d) {
      function v(M) {
        var t = M.nodeType;
        if (1 === t) {
          if (!nb(M, "nocode")) {
            for (t = M.firstChild; t; t = t.nextSibling) {
              v(t);
            }
            t = bb(M);
            if ("BR" === t || "LI" === t) {
              q[K] = "\n", k[K << 1] = p++, k[K++ << 1 | 1] = M;
            }
          }
        } else if (3 === t || 4 === t) {
          if (t = M.nodeValue) {
            t = d ? t.split("\r\n").join("\n").split("\r").join("\n") : t.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), q[K] = t, k[K << 1] = p, p += t.length, k[K++ << 1 | 1] = M;
          }
        }
      }
      var q = [], p = 0, k = [], K = 0;
      v(h);
      var z = q.join("");
      "\n" === z.charAt(z.length - 1) && (z = z.substr(0, z.length - 1));
      return {o:z, I:k};
    };
    var ka = function(h, d, v) {
      function q(t) {
        var G = t.nodeType;
        if (1 === G && !nb(t, "nocode")) {
          if ("BR" === bb(t)) {
            p(t), t.parentNode && ab(t);
          } else {
            for (t = t.firstChild; t; t = t.nextSibling) {
              q(t);
            }
          }
        } else if ((3 === G || 4 === G) && v) {
          var T = t.nodeValue, la = T.indexOf("\r\n"), ra = 2;
          -1 === la && (la = T.indexOf("\n"), ra = 1);
          -1 === la && (la = T.indexOf("\r"));
          -1 !== la && (G = T.substr(0, la), t.nodeValue = G, (T = T.substr(la + ra)) && tc(t, T), p(t), G || ab(t));
        }
      }
      function p(t) {
        function G(la, ra) {
          var Ta = ra ? la.cloneNode(!1) : la, Oa = la.parentNode;
          if (Oa) {
            Oa = G(Oa, 1);
            var Pa = la.nextSibling;
            Oa.appendChild(Ta);
            for (var cb = Pa; cb; cb = Pa) {
              Pa = cb.nextSibling, Oa.appendChild(cb);
            }
          }
          return Ta;
        }
        for (; !t.nextSibling;) {
          if (t = t.parentNode, !t) {
            return;
          }
        }
        t = G(t.nextSibling, 0);
        for (var T; (T = t.parentNode) && 1 === T.nodeType;) {
          t = T;
        }
        K.push(t);
      }
      for (var k = O.createElement("li"); h.firstChild;) {
        k.appendChild(h.firstChild);
      }
      for (var K = [k], z = 0; z < K.length; ++z) {
        q(K[z]);
      }
      if (d === (d | 0)) {
        if (10 <= d && 7.2 > J) {
          var M = O.createElement("ol");
          M.innerHTML = '<li value="' + d + '">' + k.innerHTML + "</li>";
          K[0] = M.firstChild;
        } else {
          sb(k, "value", d);
        }
      }
      M = sa(h, "ol", {className:"linenums"});
      h = Math.max(0, d - 1 | 0) || 0;
      z = 0;
      for (d = K.length; z < d; ++z) {
        k = K[z], fc(k, "L" + (z + h) % 10), k.firstChild || ad(k, "\u00a0"), M.appendChild(k);
      }
    };
    var Ba = function() {
      var h = b, d = h.o, v = d.length, q = 0, p = h.I, k = p.length, K = 0, z = h.s, M = z.length, t = 0;
      z[M] = v;
      var G, T;
      for (T = G = 0; T < M;) {
        z[T] !== z[T + 2] ? (z[G++] = z[T++], z[G++] = z[T++]) : T += 2;
      }
      M = G;
      for (T = G = 0; T < M;) {
        var la = z[T], ra = z[T + 1];
        for (T += 2; T + 2 <= M && z[T + 1] === ra;) {
          T += 2;
        }
        z[G++] = la;
        z[G++] = ra;
      }
      z.length = G;
      h = h.B;
      M = "";
      h && (M = h.style.display, Ja(h, "display", "none"));
      for (; K < k;) {
        G = p[K + 2] || v;
        la = z[t + 2] || v;
        T = Math.min(G, la);
        ra = p[K + 1];
        var Ta;
        if (1 !== ra.nodeType && (Ta = d.substring(q, T))) {
          9 > B && (Ta = Ta.split("\n").join("\r"));
          var Oa = Sb(ra, "span", {className:qa[z[t + 1]]}, Ta);
          ab(ra);
          q < G && (p[K + 1] = tc(Oa, d.substring(T, G)));
        }
        q = T;
        q >= G && (K += 2);
        q >= la && (t += 2);
      }
      h && Ja(h, "display", M);
      b = r;
      Q(Ma, r, 3, !0);
    };
    var Ka = [], Ia;
    aa.readyTime = V() - ma;
    Ib(function(h) {
      if (h) {
        h = [Gb("pre"), Gb("code"), Gb("xmp")];
        for (var d = 0; d < h.length; ++d) {
          for (var v = 0, q = h[d].length; v < q; ++v) {
            ya(h[d][v]);
          }
        }
        return !0;
      }
    });
    var ya = function(h) {
      Ka.push(h);
      Ia = Ka.length;
      1 === Ia && (Ec ? ba(Ec, Ma) : tb ? tb.push(function() {
        ba(Ma);
      }) : ba(Ma));
    };
    var Ma = function() {
      function h(K, z) {
        return (K.split(z)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ia !== Ka.length && A && A(Ia - Ka.length, Ia);
        var d = Ka.shift();
        if (d) {
          ma = V();
          if (nb(d, "prettyprint") && !nb(d, "prettyprinted")) {
            for (var v = !1, q = d.parentNode; q !== wa; q = q.parentNode) {
              var p = bb(q);
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
                var k;
                !q && (k = oa(d)) && "CODE" === bb(k) && (q = h(k.className, "lang-") || h(k.className, "language-"));
              }
              p = bb(d);
              "PRE" === p || "XMP" === p ? p = 1 : (p = d.currentStyle, k = O.defaultView, p = (p = p ? p.whiteSpace : k && k.getComputedStyle ? k.getComputedStyle(d, null).getPropertyValue("white-space") : 0) && "pre" === p.substr(0, 3));
              k = !1;
              (k = "true" === k || +k) || (k = h(v, "linenums:") || nb(d, "linenums"), k = k.length ? +k : k);
              k && ka(d, k, p);
              b = {W:q, B:d, ba:k, O:p, D:0, v:0, R:{}, s:[]};
              aa.codeBlocks.push({elm:d, lang:q, readyTime:V() - ma, decorateTime:0, decorateCount:0, updateDOMTime:0});
              Q(f);
              return;
            }
          }
          Q(Ma, r, 0, !0);
        } else {
          m && m(aa);
        }
      }
    };
    Y.PR = {RegExpProxy:I, prettifyElement:ya, registerCompleteHandler:function(h, d) {
      m = h;
      A = d;
    }};
  })();
  var Dc = O.scripts || Gb("script");
  var Ca = Dc[Dc.length - 1].src.split("/");
  --Ca.length;
  "js" === Ca[Ca.length - 1] && --Ca.length;
  (Ca = Ca.join("/")) && (Ca += "/");
  D("[p_assetUrl] " + Ca);
  var id = nd || "1" === Sa(wa, "mob");
  Zb = (id ? "mb" : "pc") + "/";
  fb(function() {
    var P;
    (P = xb("logger")) || alert("#logger not found!");
    P ? (D = bz, pb = function(I) {
      sa(P, "DIV", {style:{color:"red"}}, I);
    }, Y.onerror = function(I, Q, pa) {
      pb(I + ", " + Q + ", " + pa);
      return !0;
    }) : Y.console ? (D = console.log, pb = console.error) : J ? (D = jb, pb = opera.postError) : D = pb = jb;
    for (; dc.length;) {
      D(dc.shift());
    }
    for (; ec.length;) {
      pb(ec.shift());
    }
    dc = ec = r;
    function bz(I) {
      sa(P, "DIV", r, I);
    }
    bz = !1;
  });
  6.1 > Ea && (Lb ? Lb(qc) : na(Y, "scroll", qc));
  Hb(Vc);
  6.1 > Ea && (Lb ? Lb(rc) : na(Y, "scroll", rc));
  Hb(Wc);
  10 > B && (11 !== ld || 5 !== B) || (9 > J || 1 > Z || !Db && !Y.addEventListener ? O.write('<link href="' + Ca + "css/" + Zb + nc + '" rel="stylesheet"' + (8 > J ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > J || 1.5 > Z || 534 > ta || 5 > Ea || 7 > za || 3 > $a) && fb(function() {
    sa(vb, "link", {href:Ca + "css/" + Zb + nc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Vb) {
    if ($b) {
      var Ec = function(P) {
        Y.RegExpCompat = bz;
        Ec = r;
        ac(Ca + "js/regexpcompat.js");
        function bz(I) {
          for (var Q; Q = tb.shift();) {
            Q(I);
          }
          tb = r;
          ba(P);
          bc(Ca + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Y.RegExpCompat = function(P) {
        for (var I; I = tb.shift();) {
          I(P);
        }
        tb = r;
        bc(Ca + "js/regexpcompat.js");
      }, ac(Ca + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

