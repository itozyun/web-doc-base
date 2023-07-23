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
(function(Ya, Y, ib, Fc, O, hc, id, Vb, qb, ic, jc, Gc, kc, u) {
  function da(P) {
    if (Ya[0] === P) {
      return Za === Za + "" ? qb(Za) : Za;
    }
  }
  function Qa(P) {
    var I = Ya[3];
    if (Ya[2] === P) {
      return I === I + "" ? qb(I) : I;
    }
  }
  function lc() {
    return 6 > B ? wa.scrollTop : B ? ub.scrollTop : Y.pageYOffset;
  }
  var wa = O.body, cb = wa.style, ub, vb, wb, Za = Ya[1], B = da(2) || da(3), Db = da(7), jb = da(5) || da(6), J = da(8) || da(9), Z = da(11) || da(12), Qb = Z && 0 <= Ya.conpare(Za, "1.9.1"), Wb = da(13), ta = da(15), Da = da(16) || da(17), Hc = da(10) || da(25), Ea = da(20) || da(22), Ic = da(23), kb = da(21), Xb = da(24), jd = Ea || Ic || kb || Xb, Jc = Ea && qb(hc.userAgent.split("Edg/")[1]), kd = qb(hc.appVersion.split("Trident/")[1]) + 4, mc = Qa(35) || Qa(36) || Qa(37), ld = 0 <= hc.userAgent.indexOf("Googlebot/"), 
  fb = 0.9 > Z, nc = (Db ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > J ? "opr70" : 8 > J ? "opr72" : 9.5 > J ? "opr" + (J | 0) : Z && !Qb ? 1.4 <= Z ? "gck19" : 1.3 <= Z ? "gck13" : 1 <= Z ? "gck12" : fb ? 0.8 <= Z ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Yb = "", md = Qa(1) || Qa(2) || Qa(3) || Qa(4) || Qa(8) || Qa(9) || Qa(10), Kc, rb = 8 > B || 7.2 > J ? !1 : u, Lc = cb.transform !== u ? "transform" : cb["-o-transform"] !== u ? "-o-transform" : 
  cb["-ms-transform"] !== u ? "-ms-transform" : cb.MozTransform !== u ? "-moz-transform" : cb["-webkit-transform"] !== u ? "-webkit-transform" : "", Va = [], Mc = [], gb = [], oc, Nc, Oc, Pc, Zb, Qc, Rc, $b, ac, Sc = !1, pc = 525 > ta || 3.2 > Da || 2.2 > kb || 10 > J || Z && !Qb || da(25) || 10 > da(3) || Qa(32) || Qa(30) || Qa(3), ba, Eb, bc, Tc, nd = !!wa.getBoundingClientRect, cc = [], dc = [], qc, Uc, rc, Vc, db = Vb.now || function() {
    return +new Vb();
  };
  (function() {
    function P() {
      for (var V, M = 0, aa = db(); M < L.length;) {
        aa < L[0].t ? ++M : (V = L.splice(M, 1)[0], V.f(V.p));
      }
      na = L.length ? jc(P, Fa) : 0;
    }
    function I() {
      for (var V, M = 0; M < ea.length; ++M) {
        V = ea[M], V.f();
      }
    }
    function Q() {
      oa && (oa = clearInterval(oa));
    }
    function pa() {
      na && (na = Gc(na));
    }
    D = function(V) {
      cc.push(V);
    };
    pb = function(V) {
      dc.push(V);
    };
    bc = function(V) {
      ea.length || (oa = kc(I, ia));
      ea.push({f:V, C:++ca});
      return ca;
    };
    Tc = function(V) {
      for (var M = ea.length, aa; aa = ea[--M];) {
        if (aa.C === V) {
          ea.splice(M, 1);
          ea[0] || Q();
          break;
        }
      }
      return 0;
    };
    qc = function() {
      oa && (Q(), oa = kc(I, ia));
    };
    Uc = Q;
    var ea = [], ia = 500, ca = 0, oa;
    if (5 > B || Db) {
      Y._wdb_onlooptimer = I, I = "_wdb_onlooptimer()";
    }
    ba = function(V, M, aa) {
      L.length || (na = jc(P, Fa));
      L.push({f:V, p:M, C:++xa, t:db() + (Fa < aa ? aa : Fa)});
      return xa;
    };
    Eb = function(V) {
      for (var M = L.length, aa; aa = L[--M];) {
        if (aa.C === V) {
          L.splice(M, 1);
          break;
        }
      }
      return 0;
    };
    rc = function() {
      na && (pa(), na = jc(P, Fa));
    };
    Vc = pa;
    var L = [], Fa = 16, xa = 0, na;
    if (5 > B || Db) {
      Y._wdb_ontimer = P, P = "_wdb_ontimer()";
    }
  })();
  var xb, Fb, Wc, yb, Xc, Ra, lb, Yc, sc, sa, Rb, Zc, $c, tc, $a, zb, ad, ab, Sa, sb, mb, Jb, bd, ec, nb, Ab, uc, Ia, Wa, cd;
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
                for (var t = ++F, w, C = [], U = ha.split(""), ka = U.length; ka;) {
                  w = U[--ka], "A" <= w && "Z" >= w && (w = "-" + w.toLowerCase()), C[ka] = w;
                }
                A[t] = C.join("") + ":" + f[ha] + ";";
              }
              A[++F] = '"';
            } else {
              "className" === R && (R = "class"), A[++F] = " " + R + '="' + f + '"';
            }
          }
        }
      }
      A[++F] = ">";
      null != m && (M && "font" !== a ? A[++F] = "<font>" + I(m) + "</font>" : A[++F] = I(m));
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
      m = M ? m ? a.all : a.all.tags(b.toUpperCase()) : 6 > B && m ? a.all : a.getElementsByTagName(b);
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
        var t = ha[A];
        if (f || (M || 1 === t.nodeType) && xa(t, b)) {
          m[++R] = t;
        }
      }
      return m;
    }
    function ca(a) {
      return M ? a.parentElement : a.parentNode;
    }
    function oa(a, b, m, A, F, R) {
      if (M) {
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
                  ec(b, a);
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
        qa || null != F && L(b, F);
      }
      return b;
    }
    function L(a, b) {
      if (M) {
        return oa(2, a, "font", u, b);
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
    function na(a, b, m) {
      if (8 > J || 5.5 > B) {
        b = Q(b);
      }
      a.style[b] = m;
    }
    function V(a) {
      return 5.5 > B ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var M = 5 > B;
    ub = pa("html")[0];
    vb = pa("head")[0];
    xb = function(a) {
      return Y[a] || O[a] || O.getElementById(a);
    };
    Fb = pa;
    Wc = function(a) {
      return ia(O, a);
    };
    yb = ea;
    Xc = ia;
    Ra = ca;
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
      for (var m = [], A = a.length, F = -1, R; A;) {
        if (R = a[--A], b || 1 === R.nodeType) {
          M && "FONT" === R.tagName || (m[++F] = R);
        }
      }
      return m;
    };
    sc = function(a) {
      return M ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    sa = function(a, b, m, A, F) {
      b = oa(2, a, b, m, A, F);
      M || (a.appendChild(b), qa && null != A && L(b, A));
      return b;
    };
    Rb = function(a, b, m, A, F) {
      b = oa(0, a, b, m, A, F);
      M || (ca(a).insertBefore(b, a), qa && null != A && L(b, A));
      return b;
    };
    Zc = function(a, b, m, A, F) {
      b = oa(1, a, b, m, A, F);
      var R;
      M || ((R = a.nextSibling) ? Ra(R).insertBefore(b, R) : Ra(a).appendChild(b), qa && null != A && L(b, A));
      return b;
    };
    $c = L;
    tc = function(a, b) {
      var m;
      if (M) {
        return oa(1, a, "font", u, b);
      }
      var A = O.createTextNode("" + b);
      (m = a.nextSibling) ? Ra(a).insertBefore(A, m) : Ra(a).appendChild(A);
      return A;
    };
    $a = function(a) {
      Ra(a) ? M ? a.outerHTML = "" : (5.5 > B && (a.style.filter = ""), Ra(a).removeChild(a)) : D("[DOM] p_DOM_remove(), No parentNode!");
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
    ad = function(a) {
      return M ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var aa = 9 > B, qa = aa;
    ab = function(a) {
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
    ec = Fa;
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
    Ia = na;
    Wa = function(a, b) {
      var m, A = -1, F;
      if (5.5 > B) {
        if (m = V(a)) {
          for (m = m.split(";"); F = m[++A];) {
            na(a, F.split(":")[0], "");
          }
        }
        if (b) {
          for (A = -1, m = b.split(";"); F = m[++A];) {
            var R = F.split(":")[0];
            na(a, R, F.substr(R.length + 1));
          }
        }
      } else if (7.1 > J) {
        if (a.setAttribute("style", ""), b) {
          for (m = b.split(";"); F = m[++A];) {
            F = F.split(":"), na(a, F[0], F[1]);
          }
        }
      } else {
        9 > J || 1 > Z ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    cd = V;
    Va.splice(0, 0, function() {
      function a(t) {
        t = lb(t);
        for (var w = t.length, C, U, ka; w;) {
          if (C = t[--w], U = C.nodeType, 8 === U) {
            b && ha.push(C);
          } else if (1 === U) {
            switch(U = ab(C), "/" === U.charAt(0) && (U = U.substr(1), f[U] = !0), U) {
              case "STYLE":
                if (7.2 <= J && 9 > J) {
                  break;
                }
              case "LINK":
                M || A || zb(vb, C) || R.push(C);
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
                if (ld || Jb(C, "async")) {
                  break;
                }
                if (m) {
                  C.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Jb(C, "skip-cleanup")) {
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
          $a(ha.pop());
        }
      }
      uc(ub, "nojs");
      wb = xb("jsMain");
      var b = !(8 > J || 5 > B || Db || fb), m = Pc, A = 7 > B, F = ["og:", "twitter:", "fb:"], R = [], ha = [], f = {};
      a(ub);
    });
  })();
  var ma, Ma, eb, Gb, vc, Kb, Hb, wc, xc, yc, dd, ed, fd, Lb, Ga, zc;
  (function() {
    function P() {
      return d ? q ? 2 : v ? 3 : 1 : 0;
    }
    function I(e) {
      Ma(Y, "load", I);
      I = u;
      pa(Va, e, !0);
      Va = u;
    }
    function Q(e, g) {
      Hb(function() {
        var y = na(e);
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
      Va || M.length || ba(ia);
      M.push(e, g, y);
    }
    function ia() {
      var e = M, g;
      for (M = []; g = e.shift();) {
        pa(g, e.shift(), e.shift());
      }
    }
    function ca(e) {
      var g = e || event;
      e = qa[g.type];
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
        n.j === this ? (this.g = n.i, B && (g.currentTarget = this), this.g(g), B ? (this.g = ib, this.g = u) : delete this.g) : 7.2 > J && this === O && n.j === Y && (Y.g = n.i, Y.g(g), delete Y.g);
      }
      if (B) {
        return g.preventDefault = g.stopPropagation = ib, g.preventDefault = g.stopPropagation = u, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (A = !0), S && !A && g.K(), g.K = g.stopPropagation = u);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function oa() {
      var e = 9 === V.offsetWidth;
      Lb !== e && (ea(Mc, Lb = e), D("p_cssAvailability:" + Lb));
    }
    function L() {
      !Va && N && (Eb(N), N = ba(Fa));
    }
    function Fa() {
      N = 0;
      pa(z);
    }
    function xa(e) {
      Va || pa(r, e);
    }
    var na = Y.matchMedia, V, M = [];
    Va.push(function() {
      Q = u;
      V = sa(wa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        M.length && ba(ia);
      });
    });
    ma = function(e, g, y, n) {
      if (m) {
        e.addEventListener(g, y, n ? aa ? n : n.capture || !0 === n : !1);
      } else {
        var S = {j:e, i:y};
        n = qa[g];
        var za = "on" + g, Ka, hb;
        if (n) {
          for (Ka = n.length; hb = n[--Ka];) {
            if (hb.j === e && hb.i === y) {
              return;
            }
          }
          qa[g].push(S);
        } else {
          qa[g] = n = [S], a || (g = e[za], "function" === typeof g && g !== ca && n.unshift({j:e, i:g}));
        }
        a ? e.attachEvent(za, ca) : e[za] = ca;
      }
    };
    Ma = function(e, g, y, n) {
      if (m) {
        e.removeEventListener(g, y, n ? aa ? n : n.capture || !0 === n : !1);
      } else {
        n = qa[g];
        g = "on" + g;
        var S, za, Ka;
        if (n) {
          for (S = n.length; za = n[--S];) {
            za.j === e && (za.i === y ? n.splice(S, 1) : Ka = !0);
          }
          Ka || (a ? e.detachEvent(g, ca) : B ? (e[g] = ib, e[g] = null) : delete e[g]);
        }
      }
    };
    var aa = !B && !Db && (new id('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), qa = {}, a = !1, b = 525.13 > ta, m = !b && !Db && Y.addEventListener, A;
    b && ub.addEventListener("click", function(e) {
      if (A) {
        return A = !1, e.preventDefault(), !1;
      }
    });
    eb = function(e) {
      Va ? Va.push(e) : alert("Load event has already been dispatched!");
    };
    Gb = function(e) {
      F && F.push(e);
    };
    var F = [];
    if (419.3 >= ta) {
      var R = function() {
        if (R) {
          var e = O.readyState;
          "loaded" === e || "complete" === e ? (R = u, I()) : ba(R);
        }
      };
      ba(R);
    } else {
      ma(Y, "load", I), fb && ba(function() {
        I && I();
      }, 999);
    }
    B || !fb && 1.8 > Z ? ma(Y, "unload", function(e) {
      pa(F, e, !0);
    }) : F = u;
    Hb = function(e) {
      Mc.push(e);
    };
    eb(function() {
      oa();
      bc(oa);
    });
    yc = function(e, g) {
      if (ha) {
        ma(e, "focusin", g);
      } else if (f) {
        ma(e, "DOMFocusIn", g);
      } else {
        if (w) {
          Aa || (Aa = kc(ya, 333));
        } else if (t || C) {
          ma(O, "focus", ka, !0);
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
    dd = function(e, g) {
      if (ha) {
        ma(e, "focusin", g);
      } else if (f) {
        ma(e, "DOMFocusIn", g, !1);
      } else {
        for (var y = U, n = 0, S = y.length; n < S; ++n) {
          if (y[n] === e && y[n + 1] === g) {
            y.splice(n, 2);
            y.length || (w ? Aa = Tc(Aa) : (t || C) && Ma(O, "focus", ka, !0));
            break;
          }
        }
      }
    };
    var ha = 6 <= B || jb || 52 <= Z || 15 <= Ea || 534 <= ta || 5 <= Da || Ic || 4 <= kb || 4 <= Xb || 11.6 <= da(8) || 12 <= da(9), f = 8 <= J || Ea || kb || Xb || ta || Da, t = 8 > J, w = 6 > B, C = 52 > Z || Wb;
    if (C || t) {
      var U = [];
      var ka = function(e) {
        var g = U, y = t ? O.activeElement : e.target;
        if (t) {
          var n = e;
          e = {type:"focusin", target:y, preventDefault:function() {
            n.preventDefault();
          }, stopPropagation:function() {
            n.stopPropagation();
          }};
        }
        for (var S = 0, za = g.length; S < za; ++S) {
          var Ka = g[S];
          (Ka === y || zb(Ka, y)) && g[S + 1].call(Ka, e);
        }
      };
    } else if (w) {
      U = [];
      var Aa, Ja, Ha, ya = function() {
        Ha = Y.onerror;
        Y.onerror = La;
        var e = O.activeElement;
        if (Ja !== e) {
          Ja = e;
          for (var g = U, y, n = 0, S = g.length; n < S; ++n) {
            y = g[n], (y === e || zb(y, e)) && g[n + 1].apply(y, [{target:e}]);
          }
        }
        Y.onerror = Ha;
        Ha = u;
      }, La = function() {
        D("error!");
        Y.onerror = Ha;
        Ha = Ja = u;
        return !0;
      };
    }
    xc = function(e) {
      gb && gb.push(e);
    };
    var h = 60 > Z || Wb, d, v, q;
    if (89 <= Z || 89 <= Ea || mc && 79 <= Jc || na && (na("(forced-colors:none)").matches || na("(forced-colors:active)").matches)) {
      zc = !0, Q("(forced-colors:active)", function(e) {
        d = e.matches;
        Ga = P();
        ea(gb, Ga);
        D("(forced-colors:active):" + Ga);
      });
    } else if (10 <= B || jb || mc && Jc) {
      zc = !0, Q("(-ms-high-contrast:black-on-white)", function(e) {
        d = v = e.matches;
        Ga !== P() && (Ga = P(), ea(gb, Ga), D("(-ms-high-contrast:black-on-white):" + Ga));
      }), Q("(-ms-high-contrast:white-on-black)", function(e) {
        d = q = e.matches;
        Ga !== P() && (Ga = P(), ea(gb, Ga), D("(-ms-high-contrast:white-on-black):" + Ga));
      }), Q("(-ms-high-contrast:active)", function(e) {
        d = e.matches;
        Ga !== P() && (Ga = P(), ea(gb, Ga), D("(-ms-high-contrast:active):" + Ga));
      });
    } else if (mc && (B || Z && 0 <= Ya.conpare(Za, "1.8.1") || Wb)) {
      var p = function() {
        function e(n, S) {
          if (S && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var za = n.split("(")[1].split(",");
          return qb(za[0]) + qb(za[1]) + qb(za[2]);
        }
        var g = O.defaultView;
        var y = g ? g.getComputedStyle(V, null) : V.currentStyle;
        g = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        g && (d = "#123456" !== g && "rgb(18,52,86)" !== g, v = e(g) < e(y, !0), q = e(g) > e(y, !0), Ga !== P() && (Ga = P(), D("(forced-colors-fallback):" + Ga), ea(gb, Ga, h)));
      };
      Hb(function(e) {
        if (e) {
          return Ia(V, "color", "#123456"), Ia(V, "backgroundColor", "#123456"), h ? (p(), gb = u) : bc(p), p = u, !0;
        }
      });
    } else {
      gb = P = u;
    }
    wc = function(e) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      l.push(e);
    };
    var l = [], K = 7.5 <= J && 8 > J;
    K && function() {
      for (var e = O.images, g = e.length, y; g;) {
        y = e[--g], y.J = y.src, mb(y, "src");
      }
    }();
    eb(function() {
      function e() {
        n ? (S = y[--n], K && sb(S, "src", S.J), Nc(g, K ? S.J : S.src)) : l = u;
      }
      function g(Ka) {
        pa(l, {G:S, H:Ka}, !n);
        e();
      }
      var y = O.images || Fb("img"), n = y.length;
      if (12 > J || 532 > ta) {
        e();
      } else {
        for (; n;) {
          var S = y[--n];
          var za = 9 > B ? S.complete : 0 <= S.naturalWidth ? S.naturalWidth : S.width;
          ea(l, {G:S, H:za}, !n);
        }
        l = u;
      }
    });
    vc = function(e) {
      z.push(e);
    };
    var z = [], N;
    ma(Y, "resize", L);
    Gb(function() {
      N && Gc(N);
      Ma(Y, "resize", L);
    });
    Kb = function(e) {
      r.push(e);
    };
    var r = [], G = 1 > Z || 1.2 <= Z && 1.8 > Z || 7.2 >= J, T;
    G ? bc(function() {
      var e = Y.pageYOffset;
      T !== e && (T = e, xa({type:"scroll", cancelable:!1, stopPropagation:ib, preventDefault:ib}));
    }) : ma(Y, "scroll", xa, {passive:!0});
    Gb(function() {
      G || Ma(Y, "scroll", xa, {passive:!0});
    });
    ed = function(e, g) {
      if (la) {
        ma(e, "wheel", g, {passive:!1});
      } else if (ra) {
        ma(e, "mousewheel", g, !1);
      } else if (Ta) {
        ma(e, "MozMousePixelScroll", g, !1);
      } else if (Na) {
        for (var y = Oa, n = 0, S = y.length; n < S; ++n) {
          if (y[n] === e && y[n + 1] === g) {
            return;
          }
        }
        y.length || ma(O, "DOMMouseScroll", bb, !1);
        y.push(e, g);
      }
    };
    fd = function(e, g) {
      if (la) {
        Ma(e, "wheel", g, {passive:!1});
      } else if (ra) {
        Ma(e, "mousewheel", g, !1);
      } else if (Ta) {
        Ma(e, "MozMousePixelScroll", g, !1);
      } else if (Na) {
        for (var y = Oa, n = 0, S = y.length; n < S; ++n) {
          if (y[n] === e && y[n + 1] === g) {
            y.splice(n, 2);
            y.length || Ma(O, "DOMMouseScroll", bb, !1);
            break;
          }
        }
      }
    };
    var la = 9 <= B || jb || 17 <= Z || 31 <= Ea || 537.7 <= ta, ra = 6 <= B || jb || 9 <= J || Ea || 522 <= ta || Da, Ta = Qb, Na = Z && 0 <= Ya.conpare(Za, "0.9.7") && !Qb;
    if (Na) {
      var Oa = [], bb = function(e) {
        for (var g = Oa, y = e.target, n, S = 0, za = g.length; S < za; ++S) {
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
      La && !d && $a(La);
      f = t = w = C = U = ka = Ha = ya = La = h = u;
    }
    function Q(d) {
      var v = '1.6em "' + d + '"';
      D("[webFontTest] testByNativeFontLoaderAPI start.");
      O.fonts.load(v).then(function(q) {
        D("[webFontTest] fonts.check() : " + O.fonts.check(v, "i") + ", fonts.length : " + q.length);
        (q = ia(t)) ? ba(I, q) : (D("[webFontTest] mesureWebFont() : false"), ea(!0));
      }, function(q) {
        D("[webFontTest] fonts.load() rejected! " + q);
        rb !== u ? ca(rb) : oc(ca);
      });
    }
    function pa(d) {
      return O.hidden || O.msHidden || O.mozHidden || O.webkitHidden ? (Ja = db(), !1) : d < db() - Ja;
    }
    function ea(d) {
      d && (D("[webFontTest] testWebFont start."), Ja = db());
      (d = ia(t, Aa)) ? (D("[webFontTest] testWebFont mesurement success : " + d), I(d)) : pa(Aa) ? (D("[webFontTest] testWebFont timeout!"), Ha ? oa() : Fa ? I(0) : rb !== u ? ca(rb) : oc(ca)) : ba(ea);
    }
    function ia(d, v) {
      var q = 0, p = -1, l = [];
      if (!h) {
        var K = -1;
        var z;
        ya = sa(wa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa);
        for (h = []; z = a[++K];) {
          Ia(ya, "fontFamily", z), h[K] = ya.offsetWidth;
        }
        D("[webFontTest] default width " + h.join(", "));
      }
      for (5 > B ? ya || (ya = sa(wa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa)) : wa.appendChild(ya); K = a[++p];) {
        Ia(ya, "fontFamily", '"' + d + '",' + K);
        var N = ya.offsetWidth;
        if (!qa && N !== h[p]) {
          q = 1;
          break;
        }
        l[p] = N;
      }
      if (qa && N === l[0] && N === l[1]) {
        for (D("[webFontTest] Hit... : width=" + N), q = 1, p = -1; 0 <= (N = h[++p]);) {
          if (N === l[0] && N === l[1] && N === l[2]) {
            D("[webFontTest] Failed! : font[" + p + "]=" + a[p]);
            q = 0;
            break;
          }
        }
      }
      !B && q && U && (ya.textContent = U, N = ya.offsetWidth, ya.textContent = ka, q = N === ya.offsetWidth ? 2 : 1, ya.textContent = aa);
      $a(ya);
      5 > B && (ya = u);
      v && (q || pa(v)) && D("[webFontTest] " + d + " " + l.join(", "));
      return q;
    }
    function ca(d) {
      D("[webFontTest] onTestDataURIComplete : " + d);
      d ? (Ha = !0, Aa = M, D("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), t = t.replace(na, ""), oa()) : I(0);
    }
    function oa() {
      if (w) {
        for (; w.length;) {
          var d = w.shift(), v = w.shift();
          if (P(d)) {
            D("[webFontTest] maybe can use! " + v);
            La = Rc(v, L, C, La);
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
      function v(l) {
        p && (p = Eb(p), rb = l, q.onload = q.onerror = ib, ba(d, l));
      }
      if (rb !== u) {
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
    9 > B && eb(function() {
      var d = sa(wa, "div");
      Wa(d, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Kc = 1 < d.offsetHeight;
      $a(d);
    });
    Nc = function(d, v) {
      function q() {
        l || !K || p.complete ? (D("[imageTest] timer -> img.complete. img.width=" + p.width), ba(d, !!p.width), p.onerror = p.onload = ib, p = d = u) : (--K, ba(q));
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
      ba(q);
    };
    Oc = function(d, v, q, p, l, K, z) {
      f = d;
      t = v;
      w = q;
      C = p;
      U = l;
      ka = K;
      Aa = z || V;
      t = na + t;
      D("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      D("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!pc);
      da(10) ? ba(I, 1) : pc ? ba(I, 0) : !O.fonts || 603 > ta || 11 > Da ? (D("[webFontTest] No native font loader."), ea(!0)) : (D("[webFontTest] Use Native font loader."), Q(t));
    };
    var Fa = 9 > B, xa = 6 > Ea || J || 530 > ta || 4 > Da, na = "bad_" + db() + "_", V = 5E3, M = 500, aa = "mmmmmmmmmmlliiiiiiiii", qa = 21 > Ea || 7 > Da || ta && 0 >= Ya.conpare(Za, "536.11"), a = ["monospace", "sans-serif", "serif"];
    pc || (qa && Ea && D("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + Ea), qa && Da && D("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Da), qa && ta && D("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + ta));
    var b = 14 <= jb || 36 <= Ea || 39 <= Z || 602 <= ta || 10 <= Da, m = 6 <= Ea || Z && 0 <= Ya.conpare(Za, "1.9.2") || 525 <= ta || 3.2 <= Da || 4.4 <= kb || 11.1 <= J || jb || 9 <= da(2) || 10 <= da(3), A = 2 <= Ea || Qb || 525 <= ta || 3.2 <= Da || 2.2 <= kb || 10 <= J || jb || 9 <= da(2) || 10 <= da(3), F = A, R = 525 <= ta || 3.2 <= Da || 38 > Ea || 3 <= kb || 11.5 <= J, ha = 4 <= da(2) || 10 <= da(3), f, t, w, C, U, ka, Aa, Ja, Ha, ya, La, h;
  })();
  (function() {
    function P(f) {
      if (2 !== f) {
        D("[VectorIcon] " + f);
        var t = Wc("ico"), w = 0, C = t.length;
        if (C) {
          if (1 === f) {
            for (; w < C; ++w) {
              f = t[w];
              var U = ad(f);
              if (U = ha[U]) {
                f.innerHTML = U;
              }
            }
          } else {
            A && !m && (Y.VectorIconFallback = bz, $b(Ba + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        ac(Ba + "js/vector-icon-svg-fallback.js");
        return [ha, t, sa, m];
      }
      bz = !1;
    }
    wc(function(f) {
      var t = f.G;
      f = f.H;
      var w = Ra(t);
      !nb(w, "aBodyRoot") && f ? Ab(w, "js-image-has-been-loaded") : f || Sa(t, "alt") || "lazy" === Sa(t, "loading") || Ia(t, "display", "none");
    });
    fb && (Va.splice(1, 0, function() {
      for (var f = Xc(wb, "RichLink-sep"), t, w, C, U, ka, Aa; t = f.shift();) {
        for (t = lb(t); w = t.shift();) {
          if ("A" === ab(w) && !w.innerHTML) {
            for (D("\u25a0 Broken Anchor " + w.parentNode.innerHTML); C = t.shift();) {
              if (1 === C.nodeType) {
                if ("A" === ab(C)) {
                  break;
                }
                for (U = yb(C, "A"); ka = U.shift();) {
                  for (Aa = lb(ka); Aa.length;) {
                    ka.parentNode.insertBefore(Aa.shift(), ka);
                  }
                  $a(ka);
                }
              }
              w.appendChild(C);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var f = Fb("A"), t, w; t = f.shift();) {
        "A" !== ab(t) || t.innerHTML || (w = t.nextSibling && t.nextSibling.firstChild) && w.href === t.href && (D("\u25b2 Broken Anchor " + w.innerHTML), $a(t));
      }
    }));
    5.5 <= B && 8 > B && gb && xc(function(f) {
      for (var t = yb(wa, "a"), w = t.length, C = 0; C < w; ++C) {
        t[C].hideFocus = !f;
      }
    });
    if (!zc && gb) {
      var I, Q = function() {
        I = sa(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ba + "css/" + Yb + "hc/" + nc});
        if (Lc || 5.5 <= B && 9 > B && Kc) {
          Ab(wa, "js-canuse-css-rotate-when-forced-colors-mode"), D("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        Q = u;
      };
      xc(function(f) {
        f && !I ? Q() : I && (f ? vb.appendChild(I) : $a(I));
      });
    }
    J && eb(function() {
      for (var f = yb(wa, "a"), t = f.length, w = 0, C; w < t; ++w) {
        C = f[w], "-1" === Sa(C, "tabIndex") ? mb(C, "tabIndex") : Sa(C, "href") && sb(C, "tabIndex", "0");
      }
      f = yb(wa, "input");
      w = 0;
      for (t = f.length; w < t; ++w) {
        C = f[w], "hidden" === Sa(C, "type") && mb(C, "tabIndex");
      }
    });
    if (Z && 0 > Ya.conpare(Za, "0.9.5")) {
      Sc = !0;
      var pa, ea, ia, ca, oa;
      eb(function() {
        ma(O, "keydown", L);
        ma(O, "keyup", Fa);
        yc(wa, xa);
        fb || (ma(Y, "blur", qa), ma(wa, "click", aa));
      });
      var L = fb ? function(f) {
        16 === f.keyCode ? pa = !0 : 9 === f.keyCode && ca && na(ca, !0) && (ca.blur && ca.blur(), f.stopPropagation(), f.preventDefault(), ba(M));
      } : function(f) {
        16 === f.keyCode ? pa = !0 : 9 === f.keyCode && (ea = db());
      }, Fa = function(f) {
        16 === f.keyCode && (pa = !1);
      }, xa = fb ? function(f) {
        f.target.innerHTML || D(f.target.parentNode.innerHTML);
        ca = f.target;
      } : function(f) {
        var t = f.target;
        if (ca === t) {
          ia = u;
        } else if (ia) {
          t === ia ? (f.stopPropagation(), M(!0)) : (t.blur && b(t), f.preventDefault(), M());
        } else {
          if (f = ca) {
            ca = u, b(f);
          }
          ia = t;
          M(!0);
        }
      }, na = function(f, t) {
        var w = db(), C = wa, U = "nextSibling", ka = "firstChild";
        pa && (t || w - 99 < ea && ea <= w) && (U = "previousSibling", ka = "lastChild");
        for (ia = u; f !== C;) {
          if (Aa) {
            w = f;
            var Aa = !1;
          } else {
            w = f[U];
          }
          if (w) {
            if (1 === w.nodeType) {
              if (V(w)) {
                return ia = w, !0;
              }
              f = (Aa = w[ka]) || w;
            } else {
              f = w;
            }
          } else {
            f = f.parentNode;
          }
        }
      }, V = function(f, t) {
        function w() {
          return "-1" !== Sa(f, "tab-index");
        }
        function C() {
          return 0 < f.offsetHeight * f.offsetWidth;
        }
        if (f.focus) {
          var U;
          switch({A:t ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[ab(f)]) {
            case 1:
              if (Jb(f, "href") && w() && C()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Sa(f, "type") && w() && !Jb(f, "disabled") && C()) {
                return !0;
              }
              break;
            case 3:
              if (w() && !Jb(f, "disabled") && C()) {
                return !0;
              }
              break;
            default:
              if ((U = Sa(f, "tab-index")) && "-1" !== U && C()) {
                return !0;
              }
          }
        }
      }, M = function(f) {
        oa = 0;
        ia && (fb || ma(ia, "blur", a), ca = ia, ia = u, f || ca.focus());
      };
      if (!fb) {
        var aa = function(f) {
          var t = f.target;
          if (ca && V(t, !0)) {
            var w = ca;
            ca = u;
            b(w);
            ia = t;
            f.stopPropagation();
            f.preventDefault();
            M();
          }
        }, qa = function(f) {
          f.target === O && (ia = u);
        }, a = function(f) {
          f = f.target;
          Ma(f, "blur", a);
          ca === f && na(f) && (oa || (oa = ba(M)));
        }, b = function(f) {
          Ma(f, "blur", a);
          f.blur();
        };
      }
    }
    Hb(function(f) {
      if (f) {
        return Oc(P, "myIconFont", [1, Ba + "iconfont/woff2.css", 2, Ba + "iconfont/woff.css", 4, Ba + "iconfont/otf.css", 3, Ba + "iconfont/ttf.css", 6, Ba + "iconfont/svg.css"], "js-myIconFont-testCssReady", F, R, 5E3), P = u, !0;
      }
    });
    var m = 8 <= da(8) && 9 > J, A = 9 <= B || jb || 1.8 <= Z || 8 <= da(8) || 9 <= da(9) || 3 <= da(21) || Wb || jd || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || Da, F = "IE", R = "\ueadb", ha = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", 
    Android:"\ud83e\udd16"};
  })();
  (function() {
    function P(c) {
      var k = Ja.length, E, H, W, x;
      if (13 === (c.keyCode || c.V) || c.type !== Ha) {
        for (; k;) {
          var fa = Ja[--k];
          if (fa.F === this || fa.u === this) {
            k = fa.F;
            var X = E = fa.u;
            if (fa.P) {
              if (Ia(k, "width", fa.$), k.src = fa.Z, ec(X, fa.T), k = fa.L) {
                Wa(k, fa.S), uc(k, "js-captioned-thumbnail__large");
              }
            } else {
              if (H = fa.N) {
                delete fa.N;
                if (fa.M) {
                  for (; E = Ra(E);) {
                    if (!nb(E, "caption")) {
                      var ja = ab(E);
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
              fa.T = bd(X);
              Ab(X, "js-pica-thumbnail__large");
              Ia(k, "width", "");
              k.src = fa.X;
              if (k = fa.L) {
                Wa(k, ""), Ab(k, "js-captioned-thumbnail__large");
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
      var k = T;
      if (Lb) {
        if (la && !k) {
          if (db() < la) {
            return;
          }
          la = u;
        }
        7 === c ? (L("t"), ra = 0) : (L("s"), ra && (ra = Eb(ra)), r = lc());
        k ? (T = ea(u, k[0], k[1])) || (la = db() + 99) : ea();
        xa();
      } else {
        T = u;
      }
    }
    function pa() {
      L("w.blur");
    }
    function ea(c, k, E) {
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
            var Sb = 8 > B ? " " : ",";
            ja += ";clip:rect(" + (0 > ob ? -ob + "px" + Sb + Ac + "px" + Sb + Pa : "0" + Sb + Ac + "px" + Sb + (ob + Pa < Tb ? Pa : Tb - ob)) + "px" + Sb + "0)";
          }
        }
      }
      var W = r, x = l, fa = p.offsetTop === x.offsetTop, X = 0, ja = "", Xa = !0;
      if (fa) {
        for (var Ca = 0, va = 0, Ua = x; Ua && Ua !== wa;) {
          va += Ua.offsetTop, Ua = Ua.offsetParent;
        }
        X = N;
        Ua = 11 > B ? ub.offsetHeight : Y.innerHeight;
        var Bc = x.offsetHeight, Pa = K.offsetHeight, Tb = Pa < Bc ? Bc : Pa, Bb = W, Mb = Bb + Ua, fc = va, gc = fc + Tb, gd = va + X, od = gd + Pa;
        x = Bb < fc ? fc : Bb;
        var Cb = gc < Mb ? gc : Mb, Nb = Cb - x;
        Bb = gc <= Bb;
        Mb = Mb <= fc;
        if (k !== u) {
          Xa = va + k;
          c = Xa + E;
          if (Bb || Mb) {
            return Ua <= E ? (k = va, L("4.1.1")) : Bb ? (k = gc - E, L("4.1.2")) : (k = va + E - Ua, L("4.1.3")), la = u, Y.scroll(0, k), L("4.1.*"), T;
          }
          Pa <= Nb ? (Ca = 3, L("4.2")) : E <= Nb ? Pa - k <= Nb ? (Ca = 2, L("4.3.1")) : x <= Xa && c <= Cb ? x < va + X && (Ca = 4, L("4.3.2")) : x <= Xa && Xa <= Cb ? (Ca = 5, L("4.3.3")) : x <= c && c <= Cb ? (Ca = 4, L("4.3.4")) : c < x ? (Ca = 4, L("4.3.5")) : (Ca = 5, L("4.3.6")) : (Ca = 4, L("4.4"));
          Xa = !1;
        } else {
          c !== u ? Pa <= Nb ? (Ca = 7, Xa = !1, L("3.1")) : (X -= 60 * c, Ca = Cb - va - Pa, c = x - va, X < Ca ? (X = Ca, L("3.2.1")) : c < X ? (X = c, L("3.2.2")) : L("3.2.3"), Ca = 6) : Bc <= Pa || (Bb ? (Ca = 1, L("2.2.1")) : Mb ? L("2.2.2") : Pa <= Nb ? (Ca = 3, L("2.3")) : x < gd ? (Ca = 3, L("2.4.1")) : od < Cb ? (Ca = 2, L("2.4.2")) : W < va + Pa - Nb ? L("2.4.3") : (Ca = 2, L("2.4.4")));
        }
        switch(Ca) {
          case 0:
            H(0);
            break;
          case 1:
            H(Tb - Pa);
            break;
          case 2:
            H(Cb - va - Pa);
            break;
          case 3:
            H(x - va);
            break;
          case 4:
            H(x - va - k);
            break;
          case 5:
            H(Cb - va - (k + E));
          case 6:
            H(X);
        }
        na(X, Pa, va, Tb, Ua, k || "-", E || "-");
      } else {
        na(X, "-", "-", "-", "-", "-", "-");
      }
      Wa(K, ja);
      N = X;
      return fa && Xa;
    }
    function ia(c) {
      if (Lb && (L("m"), Z && (r = lc(), xa()), this !== c.target)) {
        var k = ic(c.deltaY) ? c.deltaY : ic(c.wheelDeltaY) ? c.wheelDeltaY / 120 : ic(c.wheelDelta) ? c.wheelDelta / -120 : c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1);
        k && ea(9 >= k ? -9 >= k ? -3 : k : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ca(c) {
      if (Lb) {
        var k = Z && 0 > Ya.conpare(Za, "0.9.4"), E = c.target, H = K, W = 0;
        if (zb(H, E)) {
          L(c.type || "ie5focus");
          ma(E, "blur", oa);
          if (z) {
            k = E.getBoundingClientRect(), c = k.bottom - k.top, W = k.top - H.getBoundingClientRect().top | 0;
          } else {
            c = E.offsetHeight;
            var x = E;
            if (k) {
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
          h ? (T = [W, c], ra && Eb(ra), ra = ba(Q, 7, 1 > Z || 536 > ta || 14 > Ea ? 500 : 0)) : (r = lc(), ea(u, W, c));
          V(W, c);
        }
      }
    }
    function oa() {
      Ma(this, "blur", oa);
      V(0, 0);
    }
    function L(c) {
      Oa && (n && (n = Eb(n)), n = ba(Fa, 0, 1400), Oa.innerHTML += " " + c);
    }
    function Fa() {
      Oa.innerHTML = "";
    }
    function xa() {
      e && (Ia(e, "top", (r / 10 | 0) + "px"), Na.innerHTML = " scrl:" + (r | 0));
    }
    function na(c, k, E, H, W, x, fa) {
      g && (Ia(g, "top", ((c + E) / 10 | 0) + "px"), Ia(g, "height", (k / 10 | 0) + "px"), Ia(e, "height", (W / 10 | 0) + "px"), Ia(bb, "height", (wa.scrollHeight / 10 | 0) + "px"), Ta.innerHTML = "conY:" + E + "/sidY" + c + ", conH:" + H + "/sidH" + k + ", focY:" + x + " focH:" + fa);
    }
    function V(c, k) {
      y && (Ia(y, "top", (c / 10 | 0) + "px"), Ia(y, "height", (k / 10 | 0) + "px"));
    }
    function M() {
      S.call(za);
    }
    function aa() {
      O.fullscreenElement || O.fullscreen || O.webkitIsFullscreen || O.msFullscreenElement || Y.fullScreen ? (sb(za, "id", "blog2slide-root"), Ob[1].parentNode.insertBefore(Ka, Ob[1]), qa(), O.onkeydown = a) : hb && ($a(Ka), mb(za, "id"), mb(hb, "id"), hb = O.onkeydown = u);
    }
    function qa() {
      hb && mb(hb, "id");
      Ib = 0 < Ib ? Cc < Ib ? Cc : Ib : 0;
      hb = Ob[Ib];
      sb(hb, "id", "blog2slide-current");
    }
    function a(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Ib, qa();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Ib, qa();
      }
    }
    Rc = function(c, k, E, H) {
      H = H || sa(vb, "link", {type:"text/css", rel:"stylesheet"});
      var W;
      if (t) {
        (W = xb(E)) ? mb(W, "id") : W = sa(wa, "div", {"aria-hidden":"true", className:E});
        var x = W.offsetWidth;
        D("[CSS Loader] widthBeforeCSSLoaded = " + x);
        sb(W, "id", E);
      }
      f(H, c, k, W, x);
      return H;
    };
    var b = Z && 0 > Ya.conpare(Za, "0.9.1"), m = 11 <= B || jb || 9 <= J && 9.5 > J, A = 11 > B, F = 7.2 <= J && 7.5 > J, R = 9 > Z && !b || 19 > Ea || 4.3 > kb || 2 > Xb || 536 > ta || 6 > Da || 7 <= J && 9 > J && !F, ha = !b && !m && !A && !F && !R, f = ha ? function(c, k, E) {
      D("[CSS Loader] onload + onerror");
      c.onload = bz;
      c.onerror = function() {
        c.onload = c.onerror = null;
        ba(E, !1);
      };
      c.href = k;
      function bz() {
        c.onload = c.onerror = null;
        ba(E, !0);
      }
      bz = !1;
    } : m ? function(c, k, E, H, W) {
      D("[CSS Loader] onload + mesure");
      c.onload = bz;
      c.href = k;
      function bz() {
        ba(E, t(H, W));
        c.onload = H = null;
      }
      bz = !1;
    } : A ? function(c, k, E, H, W) {
      D("[CSS Loader] onreadystatechange + onerror");
      c.onreadystatechange = bz;
      c.href = k;
      function bz() {
        "complete" === c.readyState && (ba(E, t(H, W)), H = null, c.V = ib);
      }
      bz = !1;
    } : R || F ? function(c, k, E, H, W) {
      function x() {
        X && (ja = Eb(ja), D("[CSS Loader] onComplete"), Xa = db() + 999, ba(fa, 0, 99), R ? X.onerror = null : X.removeEventListener("load", x, !1), X = null);
      }
      function fa() {
        t(H, W) ? (H = null, ba(E, !0)) : db() < Xa ? ba(fa, 0, 99) : (H = null, ba(E, !1));
      }
      var X = new Image(), ja = ba(x, 0, 5E3), Xa;
      R ? (D("[CSS Loader] img.onerror + mesure"), X.onerror = x) : (D('[CSS Loader] img.addEventListener("load") + mesure'), X.addEventListener("load", x, !1));
      X.src = c.href = k;
    } : function(c, k, E) {
      D("[CSS Loader] UNSUPPORTED");
      ba(E, !1);
    }, t = !ha && !b && function(c, k) {
      D("[CSS Loader] elmTest.offsetWidth = " + c.offsetWidth);
      return c.offsetWidth !== k;
    };
    Qc = Z && 0 >= Ya.conpare(Za, "0.9");
    Zb = !(7.2 > J || Qc);
    $b = function(c) {
      w ? Va ? O.write('<script src="' + c + '">\x3c/script>') : pb("[DynamicScvriptLoader] Document already loaded! " + c) : Va || ka.length ? ka.push(c) : Aa(c);
    };
    ac = function(c) {
      w ? D("[DynamicScvriptLoader] " + c + " loaded.") : c === U ? Aa(ka.shift()) : pb(c + " <> " + U);
    };
    var w = !Zb, C = Zb && 7.5 > J, U;
    if (!w) {
      var ka = [];
      C && (Pc = !0);
      eb(function() {
        Aa(ka.shift());
      });
      var Aa = function(c) {
        if (U = c) {
          C ? Dc[0].src = c : sa(vb, "script", {src:c});
        }
      };
    }
    var Ja = [], Ha = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!Hc) {
      var ya = cb.transition !== u || cb["-o-transition"] !== u || cb["-moz-transition"] !== u || cb["-webkit-transition"] !== u;
      wc(function(c) {
        if (c.H && wb) {
          c = c.G;
          var k = Ra(c), E = "", H;
          if ("A" === ab(k) && 1 === Yc(k).length) {
            var W = Sa(k, "href");
            var x = W.split("?")[0].split("#")[0].split(".");
            x = (x[x.length - 1] || "").toLowerCase();
            if ((H = 0 < W.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + x + ".")) {
              ma(k, Ha, P);
              ma(c, "click", P);
              ma(k, "click", I);
              ya && (E = c.naturalWidth + "px", Ia(c, "width", E));
              Ab(k, "js-pica-thumbnail");
              for (x = k; x = Ra(x);) {
                if (nb(x, "caption")) {
                  Ab(x, "js-captioned-thumbnail");
                  var fa = x;
                  var X = cd(fa);
                  break;
                }
              }
              Ja.push({u:k, L:fa, S:X, Z:c.src, $:E, N:W, F:c, M:H ? 0 < W.indexOf("/img/a/") ? 2 : 3 : 0 < W.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Gb(function(c, k) {
        for (c = -1; k = Ja[++c];) {
          Ma(k.u, Ha, P), Ma(k.F, "click", P), Ma(k.u, "click", I);
        }
      });
    }
    var La = ["jsSidebarFixer1", "jsSidebarFixer2"], h = !(9 > B || J || 1 <= Z && 1.3 > Z || Sc), d = !(5 > Da || 2.2 > kb || 6 > da(12) || Qa(30) && 534 > ta || Qa(32) || 7 > B || 9 > J || 1 > Z), v = d || 6 === B || 1 > Z, q = 7.5 > J, p, l, K, z = nd && Lc, N = 0, r = 0, G, T, la, ra;
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
        ma(Y, "blur", pa);
        for (yc(K, ca); 1 < lb(p).length;) {
          K.appendChild(lb(p)[1]);
        }
        for (; k = La[++c];) {
          ed(xb(k), ia);
        }
        B || jb || 2 > Ea || (G = cb.perspective !== u || cb.MozPerspective !== u || cb["-webkit-perspective"] !== u);
        Q();
        return !0;
      }
    }), Gb(function() {
      for (var c = -1, k; k = La[++c];) {
        fd(xb(k), ia);
      }
      Ma(Y, "blur", pa);
      dd(K, ca);
    }));
    var Ta, Na, Oa, bb, e, g, y, n;
    Hb(function(c) {
      if (c) {
        if (!wb) {
          return !0;
        }
        var k = lb(wa);
        c = Rb(k[0], "div");
        if (d) {
          Wa(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; k.length;) {
            c.appendChild(k.shift());
          }
          fb || (Wa(c, "width:100%;height:100%;overflow:auto;position:relative"), Wa(ub, "overflow:hidden"), Wa(wa, "overflow:hidden"));
          c = Zc(c, "div");
          Wa(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        sa(c, "div", u, z ? "transform" + (G ? "3D" : "") : d ? "pos:fixed" : "pos:absolute");
        k = sa(c, "div");
        Ta = sa(k, "span");
        Na = sa(k, "span");
        Oa = sa(c, "div");
        bb = sa(c, "div");
        Wa(bb, "position:absolute;left:0;top:0;width:54px;background:#242");
        g = sa(c, "div");
        Wa(g, "position:absolute;left:0;width:54px;background:#363");
        e = sa(c, "div");
        Wa(e, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        y = sa(g, "div");
        Wa(y, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    eb(function() {
      function c(fa, X, ja, Xa) {
        var Ca = Xa ? "div" : "cite";
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
        ja = Xa ? Rb(sc(E), Ca, {className:ja}) : sa(E, Ca, {className:ja});
        sa(ja, "a", 0 === X.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:X} : {href:X}, fa);
      }
      if (wb) {
        for (var k = yb(wb, "blockquote"), E, H = -1, W, x; E = k[++H];) {
          W = Sa(E, "title"), x = Sa(E, "cite"), W && x ? (mb(E, "title"), c(W, x, "js-generated-link-in-blockquote", !0)) : x && (mb(E, "cite"), c(Y.decodeURI ? decodeURI(x) : x, x, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var S, za, Ka, hb, Ob, Ib, Cc;
    eb(function() {
      var c = xb("blog2slide-start");
      if (c) {
        var k = O.onfullscreenchange !== u ? "f" : O.onmozfullscreenchange !== u ? "mozF" : O.onwebkitfullscreenchange !== u ? "webkitF" : 0;
        S = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== k || S ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ma(c.firstChild, "click", M), c = Ra(c), za = Ra(c), Ob = yb(c, "section"), Ka = O.createElement("h1"), Ka.innerHTML = yb(wa, "h1")[0].innerHTML, Cc = Ob.length, Ob.splice(0, 0, Ka), 0 !== k ? ma(O, k + "ullscreenchange", aa) : B ? ma(O, "MSFullscreenChange", aa, !1) : vc(aa)) : $a(c);
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
      var l = aa.codeBlocks[aa.codeBlocks.length - 1], K = V(), z = K - a;
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
      if (K - qa < F && !q) {
        return a = K, h(d);
      }
      ba(pa, {U:h, Y:d});
    }
    function pa(h) {
      qa = a = V();
      h.U(h.Y);
    }
    function ea(h, d) {
      h && Pb[h] || (h = R.test(d) ? "default-markup" : "default-code");
      var v = !!Pb[h];
      v && Q(C, h, 0, !0);
      return v;
    }
    function ia() {
      function h(Na, Oa, bb) {
        Oa && (d.h = d.h || [], d.h.push({l:d, B:d.B, O:1, s:K, D:Na, o:Oa, m:bb, R:{}, v:0}));
      }
      var d = b, v = d.m, q = v[0], p = v[2], l = d.D, K = d.s, z = d.aa.shift(), N = d.R;
      if (z) {
        var r = N[z], G;
        if (!(0 <= r)) {
          if (G = q[z.charAt(0)]) {
            var T = z.match(G[1]);
            r = G[0];
          } else {
            for (r = 0, q = -1; G = p[++q];) {
              if (T = z.match(G[1])) {
                r = G[0];
                break;
              }
            }
          }
          !(G = P(r)) || T && P(T[1]) || (G = !1, r = 11);
          G || (N[z] = r);
        }
        p = d.v;
        N = z.length;
        d.v += N;
        if (G) {
          G = T[1];
          q = z.indexOf(G);
          var la = G.length, ra = q + la;
          T[2] && (ra = N - T[2].length, q = ra - la);
          h(l + p, z.substr(0, q), v);
          if (la && ea(r, G)) {
            h(l + p + q, G);
            var Ta = !0;
          }
          h(l + p + ra, z.substr(ra), v);
          d.h && d.h.length && (b = d.h.shift());
          Ta || (b !== d ? Q(t, u, 2) : Q(ia, u, 2));
        } else {
          K.push(l + p, r), Q(ia, u, 2);
        }
      } else {
        d.l ? (b = d.l.h.shift()) ? Q(t, u, 2) : (b = d.l, Q(ia, u, 2)) : Q(Aa, u, 2);
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
      return d === h ? u : d;
    }
    Pb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
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
    na = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), V = Vb.now || function() {
      return +new Vb();
    }, M, aa = {useRegExpCompat:Ub, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var qa = V();
    var a, b, m, A, F = 5 > B ? 60 : 5.5 > B ? 0 : Ub ? 20 : 10, R, ha;
    tb = [function(h) {
      Y.RegExpCompat = M = h;
    }, function() {
      R = I("^\\s*<");
      ha = I("\\S");
    }];
    Ub || (tb[1](), tb = u);
    var f = function() {
      var h = b, d = h.W, v = U(h.B, h.O), q = h.o = v.o;
      h.I = v.I;
      ea(d, q) || (b = u, Q(La, u, 0, !0));
    };
    var t = function() {
      var h = b;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.D, 0);
      Q(ia, u, 2);
    };
    var w = [];
    var C = function(h) {
      function d(r) {
        var G = r;
        0 <= r && (G = Fa[r]);
        0 <= G[1] && (G[1] = v(G[1]));
        return G;
      }
      function v(r) {
        var G = r;
        return 0 <= r && (G = xa[r], !G.exec) ? (w.push(r), r) : G;
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
      w.length ? Q(ca, h, 2) : (q.m ? q.l && (q.l.h[0].m = p) : q.m = p, Q(t, u, 1));
    };
    var U = function(h, d) {
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
    var ka = function(h, d, v) {
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
          var T = r.nodeValue, la = T.indexOf("\r\n"), ra = 2;
          -1 === la && (la = T.indexOf("\n"), ra = 1);
          -1 === la && (la = T.indexOf("\r"));
          -1 !== la && (G = T.substr(0, la), r.nodeValue = G, (T = T.substr(la + ra)) && tc(r, T), p(r), G || $a(r));
        }
      }
      function p(r) {
        function G(la, ra) {
          var Ta = ra ? la.cloneNode(!1) : la, Na = la.parentNode;
          if (Na) {
            Na = G(Na, 1);
            var Oa = la.nextSibling;
            Na.appendChild(Ta);
            for (var bb = Oa; bb; bb = Oa) {
              Oa = bb.nextSibling, Na.appendChild(bb);
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
        for (var T; (T = r.parentNode) && 1 === T.nodeType;) {
          r = T;
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
      N = sa(h, "ol", {className:"linenums"});
      h = Math.max(0, d - 1 | 0) || 0;
      z = 0;
      for (d = K.length; z < d; ++z) {
        l = K[z], ec(l, "L" + (z + h) % 10), l.firstChild || $c(l, "\u00a0"), N.appendChild(l);
      }
    };
    var Aa = function() {
      var h = b, d = h.o, v = d.length, q = 0, p = h.I, l = p.length, K = 0, z = h.s, N = z.length, r = 0;
      z[N] = v;
      var G, T;
      for (T = G = 0; T < N;) {
        z[T] !== z[T + 2] ? (z[G++] = z[T++], z[G++] = z[T++]) : T += 2;
      }
      N = G;
      for (T = G = 0; T < N;) {
        var la = z[T], ra = z[T + 1];
        for (T += 2; T + 2 <= N && z[T + 1] === ra;) {
          T += 2;
        }
        z[G++] = la;
        z[G++] = ra;
      }
      z.length = G;
      h = h.B;
      N = "";
      h && (N = h.style.display, Ia(h, "display", "none"));
      for (; K < l;) {
        G = p[K + 2] || v;
        la = z[r + 2] || v;
        T = Math.min(G, la);
        ra = p[K + 1];
        var Ta;
        if (1 !== ra.nodeType && (Ta = d.substring(q, T))) {
          9 > B && (Ta = Ta.split("\n").join("\r"));
          var Na = Rb(ra, "span", {className:na[z[r + 1]]}, Ta);
          $a(ra);
          q < G && (p[K + 1] = tc(Na, d.substring(T, G)));
        }
        q = T;
        q >= G && (K += 2);
        q >= la && (r += 2);
      }
      h && Ia(h, "display", N);
      b = u;
      Q(La, u, 3, !0);
    };
    var Ja = [], Ha;
    aa.readyTime = V() - qa;
    Hb(function(h) {
      if (h) {
        h = [Fb("pre"), Fb("code"), Fb("xmp")];
        for (var d = 0; d < h.length; ++d) {
          for (var v = 0, q = h[d].length; v < q; ++v) {
            ya(h[d][v]);
          }
        }
        return !0;
      }
    });
    var ya = function(h) {
      Ja.push(h);
      Ha = Ja.length;
      1 === Ha && (Ec ? ba(Ec, La) : tb ? tb.push(function() {
        ba(La);
      }) : ba(La));
    };
    var La = function() {
      function h(K, z) {
        return (K.split(z)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ha !== Ja.length && A && A(Ha - Ja.length, Ha);
        var d = Ja.shift();
        if (d) {
          qa = V();
          if (nb(d, "prettyprint") && !nb(d, "prettyprinted")) {
            for (var v = !1, q = d.parentNode; q !== wa; q = q.parentNode) {
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
                !q && (l = oa(d)) && "CODE" === ab(l) && (q = h(l.className, "lang-") || h(l.className, "language-"));
              }
              p = ab(d);
              "PRE" === p || "XMP" === p ? p = 1 : (p = d.currentStyle, l = O.defaultView, p = (p = p ? p.whiteSpace : l && l.getComputedStyle ? l.getComputedStyle(d, null).getPropertyValue("white-space") : 0) && "pre" === p.substr(0, 3));
              l = !1;
              (l = "true" === l || +l) || (l = h(v, "linenums:") || nb(d, "linenums"), l = l.length ? +l : l);
              l && ka(d, l, p);
              b = {W:q, B:d, ba:l, O:p, D:0, v:0, R:{}, s:[]};
              aa.codeBlocks.push({elm:d, lang:q, readyTime:V() - qa, decorateTime:0, decorateCount:0, updateDOMTime:0});
              Q(f);
              return;
            }
          }
          Q(La, u, 0, !0);
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
  var Dc = O.scripts || Fb("script");
  var Ba = Dc[Dc.length - 1].src.split("/");
  --Ba.length;
  "js" === Ba[Ba.length - 1] && --Ba.length;
  (Ba = Ba.join("/")) && (Ba += "/");
  D("[p_assetUrl] " + Ba);
  var hd = md || "1" === Sa(wa, "mob");
  Yb = (hd ? "mb" : "pc") + "/";
  eb(function() {
    var P;
    (P = xb("logger")) || alert("#logger not found!");
    P ? (D = bz, pb = function(I) {
      sa(P, "DIV", {style:{color:"red"}}, I);
    }, Y.onerror = function(I, Q, pa) {
      pb(I + ", " + Q + ", " + pa);
      return !0;
    }) : Y.console ? (D = console.log, pb = console.error) : J ? (D = ib, pb = opera.postError) : D = pb = ib;
    for (; cc.length;) {
      D(cc.shift());
    }
    for (; dc.length;) {
      pb(dc.shift());
    }
    cc = dc = u;
    function bz(I) {
      sa(P, "DIV", u, I);
    }
    bz = !1;
  });
  6.1 > Da && (Kb ? Kb(qc) : ma(Y, "scroll", qc));
  Gb(Uc);
  6.1 > Da && (Kb ? Kb(rc) : ma(Y, "scroll", rc));
  Gb(Vc);
  10 > B && (11 !== kd || 5 !== B) || (9 > J || 1 > Z || !Db && !Y.addEventListener ? O.write('<link href="' + Ba + "css/" + Yb + nc + '" rel="stylesheet"' + (8 > J ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > J || 1.5 > Z || 534 > ta || 5 > Da || 7 > Ea || 3 > kb) && eb(function() {
    sa(vb, "link", {href:Ba + "css/" + Yb + nc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Ub) {
    if (Zb) {
      var Ec = function(P) {
        Y.RegExpCompat = bz;
        Ec = u;
        $b(Ba + "js/regexpcompat.js");
        function bz(I) {
          for (var Q; Q = tb.shift();) {
            Q(I);
          }
          tb = u;
          ba(P);
          ac(Ba + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Y.RegExpCompat = function(P) {
        for (var I; I = tb.shift();) {
          I(P);
        }
        tb = u;
        ac(Ba + "js/regexpcompat.js");
      }, $b(Ba + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

