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
(function(Ka, T, db, mc, I, Rb, Pc, Db, Za, Sb, Tb, nc, Ub, z) {
  function U(N) {
    if (Ka[0] === N) {
      return La === La + "" ? Za(La) : La;
    }
  }
  function Ea(N) {
    var K = Ka[3];
    if (Ka[2] === N) {
      return K === K + "" ? Za(K) : K;
    }
  }
  function Vb() {
    return 6 > B ? va.scrollTop : B ? kb.scrollTop : T.pageYOffset;
  }
  var va = I.body, Na = va.style, kb, eb, lb, La = Ka[1], B = U(2) || U(3), mb = U(7), Ua = U(5) || U(6), G = U(8) || U(9), Q = U(11) || U(12), yb = Q && 0 <= Ka.conpare(La, "1.9.1"), Eb = U(13), sa = U(15), za = U(16) || U(17), oc = U(10) || U(25), Aa = U(20) || U(22), pc = U(23), Va = U(21), Fb = U(24), Qc = Aa || pc || Va || Fb, qc = Aa && Za(Rb.userAgent.split("Edg/")[1]), Rc = Za(Rb.appVersion.split("Trident/")[1]) + 4, Wb = Ea(35) || Ea(36) || Ea(37), Sc = 0 <= Rb.userAgent.indexOf("Googlebot/"), 
  $a = 0.9 > Q, Xb = (mb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > G ? "opr70" : 8 > G ? "opr72" : 9.5 > G ? "opr" + (G | 0) : Q && !yb ? 1.4 <= Q ? "gck19" : 1.3 <= Q ? "gck13" : 1 <= Q ? "gck12" : $a ? 0.8 <= Q ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Gb = "", Tc = Ea(1) || Ea(2) || Ea(3) || Ea(4) || Ea(8) || Ea(9) || Ea(10), rc, fb = 8 > B || 7.2 > G ? !1 : z, sc = Na.transform !== z ? "transform" : Na["-o-transform"] !== z ? "-o-transform" : 
  Na["-ms-transform"] !== z ? "-ms-transform" : Na.MozTransform !== z ? "-moz-transform" : Na["-webkit-transform"] !== z ? "-webkit-transform" : "", Qa = [], tc = [], Ra = [], Yb, uc, vc, wc, Hb, xc, yc, Ib, Jb, zc = !1, Uc = 525 > sa || 3.2 > za || 2.2 > Va || 10 > G || Q && !yb || U(25) || 10 > U(3) || Ea(32) || Ea(30) || Ea(3), ha, qb, Kb, Ac, Vc = !!va.getBoundingClientRect, Zb, Bc, $b, Cc, Sa = Db.now || function() {
    return +new Db();
  };
  (function() {
    function N() {
      for (var S, F = 0, ea = Sa(); F < ia.length;) {
        ea < ia[0].t ? ++F : (S = ia.splice(F, 1)[0], S.f(S.p));
      }
      ja = ia.length ? Tb(N, xa) : 0;
    }
    function K() {
      for (var S, F = 0; F < Y.length; ++F) {
        S = Y[F], S.f();
      }
    }
    function M() {
      ma && (ma = clearInterval(ma));
    }
    function ba() {
      ja && (ja = nc(ja));
    }
    Kb = function(S) {
      Y.length || (ma = Ub(K, X));
      Y.push({f:S, C:++V});
      return V;
    };
    Ac = function(S) {
      for (var F = Y.length, ea; ea = Y[--F];) {
        if (ea.C === S) {
          Y.splice(F, 1);
          Y[0] || M();
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      ma && (M(), ma = Ub(K, X));
    };
    Bc = M;
    var Y = [], X = 500, V = 0, ma;
    if (5 > B || mb) {
      T._wdb_onlooptimer = K, K = "_wdb_onlooptimer()";
    }
    ha = function(S, F, ea) {
      ia.length || (ja = Tb(N, xa));
      ia.push({f:S, p:F, C:++qa, t:Sa() + (xa < ea ? ea : xa)});
      return qa;
    };
    qb = function(S) {
      for (var F = ia.length, ea; ea = ia[--F];) {
        if (ea.C === S) {
          ia.splice(F, 1);
          break;
        }
      }
      return 0;
    };
    $b = function() {
      ja && (ba(), ja = Tb(N, xa));
    };
    Cc = ba;
    var ia = [], xa = 16, qa = 0, ja;
    if (5 > B || mb) {
      T._wdb_ontimer = N, N = "_wdb_ontimer()";
    }
  })();
  var nb, ob, Dc, gb, Ec, Oa, ab, Fc, ac, Ha, Lb, Gc, bc, Ba, hb, Hc, Ma, Fa, bb, Wa, rb, Ic, Mb, Xa, ib, cc, Ta, zb, Jc;
  (function() {
    function N(b, e, m) {
      var C = ["<", b], d = 1, n, q;
      if (e) {
        for (n in e) {
          var A = e[n];
          if (null != A && "" !== A) {
            if ("style" === n) {
              C[++d] = ' style="';
              for (q in A) {
                for (var R = ++d, W, P = [], ca = q.split(""), ra = ca.length; ra;) {
                  W = ca[--ra], "A" <= W && "Z" >= W && (W = "-" + W.toLowerCase()), P[ra] = W;
                }
                C[R] = P.join("") + ":" + A[q] + ";";
              }
              C[++d] = '"';
            } else {
              "className" === n && (n = "class"), C[++d] = " " + n + '="' + A + '"';
            }
          }
        }
      }
      C[++d] = ">";
      null != m && (F && "font" !== b ? C[++d] = "<font>" + K(m) + "</font>" : C[++d] = K(m));
      C[++d] = "</" + b + ">";
      return C.join("");
    }
    function K(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function M(b) {
      var e = b.split("-"), m = e.length;
      if (2 > m) {
        return b;
      }
      for (; 1 < m;) {
        b = e[--m], e[m] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return e.join("");
    }
    function ba(b) {
      return Y(I, b);
    }
    function Y(b, e) {
      var m = "*" === e;
      m = F ? m ? b.all : b.all.tags(e.toUpperCase()) : 6 > B && m ? b.all : b.getElementsByTagName(e);
      for (var C = [], d = 0, n = m.length; d < n; ++d) {
        C[d] = m[d];
      }
      return C;
    }
    function X(b, e) {
      var m = [], C = 0, d, n = -1;
      if (9 > B || !b.getElementsByClassName) {
        var q = 6 > B ? b.all : b.getElementsByTagName("*");
      } else {
        var A = !0;
        q = b.getElementsByClassName(e);
      }
      for (d = q.length; C < d; ++C) {
        var R = q[C];
        if (A || (F || 1 === R.nodeType) && qa(R, e)) {
          m[++n] = R;
        }
      }
      return m;
    }
    function V(b) {
      return F ? b.parentElement : b.parentNode;
    }
    function ma(b, e, m, C, d, n) {
      if (F) {
        var q = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var A = ab(2 > b ? Oa(e) : e);
        A = 2 > b ? A.indexOf(e) + b : A.length;
        e.insertAdjacentHTML(q, N(m, C, d));
        e = ab(e)[A];
        null != d && ("font" === m ? e.nodeType = 3 : e.children[0].nodeType = 3);
      } else if (ea) {
        e = I.createElement(N(m, C));
      } else {
        e = n ? I.createElementNS("http://www.w3.org/2000/svg", m) : I.createElement(m);
        if (C) {
          for (q in C) {
            if ((b = C[q]) || 0 === b) {
              switch(q) {
                case "class":
                case "className":
                  Mb(e, b);
                  break;
                case "style":
                  n = e.style;
                  for (A in b) {
                    n[A] = b[A];
                  }
                  break;
                default:
                  bb(e, q, b);
              }
            }
          }
          !G || "a" !== m && "A" !== m || !C.href || C["tag-index"] || C.tagIndex || bb(e, "tagIndex", "-0");
        }
        da || null != d && ia(e, d);
      }
      return e;
    }
    function ia(b, e) {
      if (F) {
        return ma(2, b, "font", z, e);
      }
      var m = I.createTextNode("" + e);
      b.appendChild(m);
      return m;
    }
    function xa(b, e) {
      9 > B ? b.className = e : b.setAttribute("class", e);
    }
    function qa(b, e) {
      return -1 !== (" " + b.className + " ").indexOf(" " + e + " ");
    }
    function ja(b, e, m) {
      if (8 > G || 5.5 > B) {
        e = M(e);
      }
      b.style[e] = m;
    }
    function S(b) {
      return 5.5 > B ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var F = 5 > B;
    kb = ba("html")[0];
    eb = ba("head")[0];
    nb = function(b) {
      return T[b] || I[b] || I.getElementById(b);
    };
    ob = ba;
    Dc = function(b) {
      return X(I, b);
    };
    gb = Y;
    Ec = X;
    Oa = V;
    ab = function(b) {
      b = F ? b.children : b.childNodes;
      for (var e = [], m = b.length; m;) {
        e[--m] = b[m];
      }
      return e;
    };
    Fc = function(b) {
      var e = !(7.03 < G && 7.2 > G) && b.children;
      b = e ? e : b.childNodes;
      for (var m = [], C = b.length, d = -1, n; C;) {
        if (n = b[--C], e || 1 === n.nodeType) {
          F && "FONT" === n.tagName || (m[++d] = n);
        }
      }
      return m;
    };
    ac = function(b) {
      return F ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Ha = function(b, e, m, C, d) {
      e = ma(2, b, e, m, C, d);
      F || (b.appendChild(e), da && null != C && ia(e, C));
      return e;
    };
    Lb = function(b, e, m, C, d) {
      e = ma(0, b, e, m, C, d);
      F || (V(b).insertBefore(e, b), da && null != C && ia(e, C));
      return e;
    };
    Gc = ia;
    bc = function(b, e) {
      var m;
      if (F) {
        return ma(1, b, "font", z, e);
      }
      var C = I.createTextNode("" + e);
      (m = b.nextSibling) ? Oa(b).insertBefore(C, m) : Oa(b).appendChild(C);
      return C;
    };
    Ba = function(b) {
      F ? b.outerHTML = "" : (5.5 > B && (b.style.filter = ""), Oa(b).removeChild(b));
    };
    hb = function(b, e) {
      if (b.contains) {
        return b.contains(e);
      }
      for (; e && e !== kb;) {
        if (e = Oa(e), b === e) {
          return !0;
        }
      }
    };
    Hc = function(b) {
      return F ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ea = 9 > B, da = ea;
    Ma = function(b) {
      return b.tagName.toUpperCase();
    };
    Fa = function(b, e) {
      if (8 > G || 5.5 > B) {
        e = M(e);
      }
      var m = b.getAttribute(e);
      return G && "tabIndex" === e ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    bb = function(b, e, m) {
      if (G && "tab-index" === e) {
        "-1" === m ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", m);
      } else {
        if (8 > G || 5.5 > B) {
          e = M(e);
        }
        b.setAttribute(e, m);
      }
    };
    Wa = function(b, e) {
      if (G && "tab-index" === e) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > G || 5.5 > B) {
          e = M(e);
        }
        b.removeAttribute(e);
      }
    };
    rb = function(b, e) {
      if (G && "tab-index" === e) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > G || 5.5 > B) {
        e = M(e);
      }
      return b.hasAttribute ? b.hasAttribute(e) : null != b.getAttribute(e);
    };
    Ic = function(b) {
      return b.className;
    };
    Mb = xa;
    Xa = qa;
    ib = function(b, e) {
      var m;
      if (!qa(b, e)) {
        if (m = b.className) {
          m += " ";
        }
        xa(b, m + e);
      }
    };
    cc = function(b, e) {
      if (qa(b, e)) {
        var m = b.className.split(" ");
        m.splice(m.indexOf(e), 1);
        xa(b, m.join(" "));
      }
    };
    Ta = ja;
    zb = function(b, e) {
      var m, C = -1, d;
      if (5.5 > B) {
        if (m = S(b)) {
          for (m = m.split(";"); d = m[++C];) {
            ja(b, d.split(":")[0], "");
          }
        }
        if (e) {
          for (C = -1, m = e.split(";"); d = m[++C];) {
            var n = d.split(":")[0];
            ja(b, n, d.substr(n.length + 1));
          }
        }
      } else if (7.1 > G) {
        if (b.setAttribute("style", ""), e) {
          for (m = e.split(";"); d = m[++C];) {
            d = d.split(":"), ja(b, d[0], d[1]);
          }
        }
      } else {
        9 > G || 1 > Q ? e ? b.setAttribute("style", e) : b.removeAttribute("style") : b.style.cssText = e;
      }
    };
    Jc = S;
    Qa.splice(0, 0, function() {
      function b(R) {
        R = ab(R);
        for (var W = R.length, P, ca, ra; W;) {
          if (P = R[--W], ca = P.nodeType, 8 === ca) {
            e && q.push(P);
          } else if (1 === ca) {
            switch(ca = Ma(P), "/" === ca.charAt(0) && (ca = ca.substr(1), A[ca] = !0), ca) {
              case "STYLE":
                if (7.2 <= G && 9 > G) {
                  break;
                }
              case "LINK":
                F || C || hb(eb, P) || n.push(P);
                break;
              case "META":
                ca = Fa(P, "name") || Fa(P, "property");
                for (ra = d.length; ra;) {
                  if (0 === ca.indexOf(d[--ra])) {
                    q.push(P);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Sc || rb(P, "async")) {
                  break;
                }
                if (m) {
                  P.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (rb(P, "skip-cleanup")) {
                  break;
                }
              case "!":
                q.push(P);
                break;
              case "SOURCE":
                T.HTMLSourceElement || q.push(P);
                break;
              default:
                A[ca] ? q.push(P) : ab(P).length && b(P);
            }
          }
        }
        for (; n[0];) {
          eb.appendChild(n.pop());
        }
        for (; q[0];) {
          Ba(q.pop());
        }
      }
      cc(kb, "nojs");
      lb = nb("jsMain");
      var e = !(8 > G || 5 > B || mb || $a), m = wc, C = 7 > B, d = ["og:", "twitter:", "fb:"], n = [], q = [], A = {};
      b(kb);
    });
  })();
  var ka, Ia, Pa, pb, dc, sb, tb, Ab, ec, fc, Kc, Lc, Mc, Bb, Ja, gc;
  (function() {
    function N() {
      return u ? r ? 2 : v ? 3 : 1 : 0;
    }
    function K(c) {
      Ia(T, "load", K);
      K = z;
      ba(Qa, c, !0);
      Pa = Qa = z;
    }
    function M(c, a) {
      tb(function() {
        var k = ja(c);
        a(k);
        k.addListener(a);
        return !0;
      });
    }
    function ba(c, a, k) {
      for (var h = 0; h < c.length; ++h) {
        !0 === c[h](a) && (c.splice(h, 1), --h);
      }
      k && (c.length = 0);
    }
    function Y(c, a, k) {
      Qa || F.length || ha(X);
      F.push(c, a, k);
    }
    function X() {
      var c = F, a;
      for (F = []; a = c.shift();) {
        ba(a, c.shift(), c.shift());
      }
    }
    function V(c) {
      var a = c || event;
      c = da[a.type];
      var k = -1, h, x;
      5 > B ? a = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : B ? (a.target = a.srcElement, a.preventDefault = function() {
        a.returnValue = !1;
      }, a.stopPropagation = function() {
        a.cancelBubble = !0;
      }) : e && (a.K = a.stopPropagation, a.stopPropagation = function() {
        x = !0;
      });
      for (; h = c[++k];) {
        h.j === this ? (this.g = h.i, B && (a.currentTarget = this), this.g(a), B ? (this.g = db, this.g = z) : delete this.g) : 7.2 > G && this === I && h.j === T && (T.g = h.i, T.g(a), delete T.g);
      }
      if (B) {
        return a.preventDefault = a.stopPropagation = db, a.preventDefault = a.stopPropagation = z, a.returnValue;
      }
      e && (a.defaultPrevented && "click" === a.type && "A" === a.target.tagName && (C = !0), x && !C && a.K(), a.K = a.stopPropagation = z);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var c = 9 === S.offsetWidth;
      Bb !== c && Y(tc, Bb = c);
    }
    function ia() {
      !Qa && D && (qb(D), D = ha(xa));
    }
    function xa() {
      D = 0;
      ba(w);
    }
    function qa(c) {
      Qa || ba(J, c);
    }
    var ja = T.matchMedia, S, F = [];
    Qa.push(function() {
      M = z;
      S = Ha(va, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Pa(function() {
        F.length && ha(X);
      });
    });
    ka = function(c, a, k, h) {
      if (m) {
        c.addEventListener(a, k, h ? ea ? h : h.capture || !0 === h : !1);
      } else {
        var x = {j:c, i:k};
        h = da[a];
        var fa = "on" + a, aa, la;
        if (h) {
          for (aa = h.length; la = h[--aa];) {
            if (la.j === c && la.i === k) {
              return;
            }
          }
          da[a].push(x);
        } else {
          da[a] = h = [x], b || (a = c[fa], "function" === typeof a && a !== V && h.unshift({j:c, i:a}));
        }
        b ? c.attachEvent(fa, V) : c[fa] = V;
      }
    };
    Ia = function(c, a, k, h) {
      if (m) {
        c.removeEventListener(a, k, h ? ea ? h : h.capture || !0 === h : !1);
      } else {
        h = da[a];
        a = "on" + a;
        var x, fa, aa;
        if (h) {
          for (x = h.length; fa = h[--x];) {
            fa.j === c && (fa.i === k ? h.splice(x, 1) : aa = !0);
          }
          aa || (b ? c.detachEvent(a, V) : B ? (c[a] = db, c[a] = null) : delete c[a]);
        }
      }
    };
    var ea = !B && !mb && (new Pc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), da = {}, b = !1, e = 525.13 > sa, m = !e && !mb && T.addEventListener, C;
    e && kb.addEventListener("click", function(c) {
      if (C) {
        return C = !1, c.preventDefault(), !1;
      }
    });
    Pa = function(c) {
      Qa.push(c);
    };
    pb = function(c) {
      d && d.push(c);
    };
    var d = [];
    if (419.3 >= sa) {
      var n = function() {
        if (n) {
          var c = I.readyState;
          "loaded" === c || "complete" === c ? (n = z, K()) : ha(n);
        }
      };
      ha(n);
    } else {
      ka(T, "load", K);
    }
    B || !$a && 1.8 > Q ? ka(T, "unload", function(c) {
      ba(d, c, !0);
    }) : d = z;
    tb = function(c) {
      tc.push(c);
    };
    Pa(function() {
      ma();
      Kb(ma);
    });
    fc = function(c, a) {
      if (q) {
        ka(c, "focusin", a);
      } else if (A) {
        ka(c, "DOMFocusIn", a);
      } else {
        if (W) {
          Ca || (Ca = Ub(l, 333));
        } else if (R || P) {
          ka(I, "focus", ra, !0);
        } else {
          return;
        }
        for (var k = ca, h = 0, x = k.length; h < x; ++h) {
          if (k[h] === c && k[h + 1] === a) {
            return;
          }
        }
        k.push(c, a);
      }
    };
    Kc = function(c, a) {
      if (q) {
        ka(c, "focusin", a);
      } else if (A) {
        ka(c, "DOMFocusIn", a, !1);
      } else {
        for (var k = ca, h = 0, x = k.length; h < x; ++h) {
          if (k[h] === c && k[h + 1] === a) {
            k.splice(h, 2);
            k.length || (W ? Ca = Ac(Ca) : (R || P) && Ia(I, "focus", ra, !0));
            break;
          }
        }
      }
    };
    var q = 6 <= B || Ua || 52 <= Q || 15 <= Aa || 534 <= sa || 5 <= za || pc || 4 <= Va || 4 <= Fb || 11.6 <= U(8) || 12 <= U(9), A = 8 <= G || Aa || Va || Fb || sa || za, R = 8 > G, W = 6 > B, P = 52 > Q || Eb;
    if (P || R) {
      var ca = [];
      var ra = function(c) {
        var a = ca, k = R ? I.activeElement : c.target;
        if (R) {
          var h = c;
          c = {type:"focusin", target:k, preventDefault:function() {
            h.preventDefault();
          }, stopPropagation:function() {
            h.stopPropagation();
          }};
        }
        for (var x = 0, fa = a.length; x < fa; ++x) {
          var aa = a[x];
          (aa === k || hb(aa, k)) && a[x + 1].call(aa, c);
        }
      };
    } else if (W) {
      ca = [];
      var Ca, pa, na, l = function() {
        na = T.onerror;
        T.onerror = f;
        var c = I.activeElement;
        if (pa !== c) {
          pa = c;
          for (var a = ca, k, h = 0, x = a.length; h < x; ++h) {
            k = a[h], (k === c || hb(k, c)) && a[h + 1].apply(k, [{target:c}]);
          }
        }
        T.onerror = na;
        na = z;
      }, f = function() {
        T.onerror = na;
        na = pa = z;
        return !0;
      };
    }
    ec = function(c) {
      Ra && Ra.push(c);
    };
    var y = 60 > Q || Eb, u, v, r;
    if (89 <= Q || 89 <= Aa || Wb && 79 <= qc || ja && (ja("(forced-colors:none)").matches || ja("(forced-colors:active)").matches)) {
      gc = !0, M("(forced-colors:active)", function(c) {
        u = c.matches;
        Ja = N();
        Y(Ra, Ja);
      });
    } else if (10 <= B || Ua || Wb && qc) {
      gc = !0, M("(-ms-high-contrast:black-on-white)", function(c) {
        u = v = c.matches;
        Ja !== N() && (Ja = N(), Y(Ra, Ja));
      }), M("(-ms-high-contrast:white-on-black)", function(c) {
        u = r = c.matches;
        Ja !== N() && (Ja = N(), Y(Ra, Ja));
      }), M("(-ms-high-contrast:active)", function(c) {
        u = c.matches;
        Ja !== N() && (Ja = N(), Y(Ra, Ja));
      });
    } else if (Wb && (B || Q && 0 <= Ka.conpare(La, "1.8.1") || Eb)) {
      var L = function() {
        function c(h, x) {
          if (x && "transparent" === h) {
            return 382.5;
          }
          if ("#" === h.charAt(0)) {
            return parseInt("0x" + h.substr(1, 2), 16) + parseInt("0x" + h.substr(3, 2), 16) + parseInt("0x" + h.substr(5, 2), 16);
          }
          var fa = h.split("(")[1].split(",");
          return Za(fa[0]) + Za(fa[1]) + Za(fa[2]);
        }
        var a = I.defaultView;
        var k = a ? a.getComputedStyle(S, null) : S.currentStyle;
        a = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        a && (u = "#123456" !== a && "rgb(18,52,86)" !== a, v = c(a) < c(k, !0), r = c(a) > c(k, !0), Ja !== N() && (Ja = N(), Y(Ra, Ja, y)));
      };
      tb(function(c) {
        if (c) {
          return Ta(S, "color", "#123456"), Ta(S, "backgroundColor", "#123456"), y ? (L(), Ra = z) : Kb(L), L = z, !0;
        }
      });
    } else {
      Ra = N = z;
    }
    Ab = function(c) {
      t.push(c);
    };
    var t = [], O = 7.5 <= G && 8 > G;
    O && function() {
      for (var c = I.images, a = c.length, k; a;) {
        k = c[--a], k.J = k.src, Wa(k, "src");
      }
    }();
    Pa(function() {
      function c() {
        h ? (x = k[--h], O && bb(x, "src", x.J), uc(a, O ? x.J : x.src)) : Ab = t = z;
      }
      function a(aa) {
        ba(t, {G:x, H:aa}, !h);
        c();
      }
      var k = I.images || ob("img"), h = k.length;
      if (12 > G || 532 > sa) {
        c();
      } else {
        for (; h;) {
          var x = k[--h];
          var fa = 9 > B ? x.complete : 0 <= x.naturalWidth ? x.naturalWidth : x.width;
          Y(t, {G:x, H:fa}, !h);
        }
        Ab = t = z;
      }
    });
    dc = function(c) {
      w.push(c);
    };
    var w = [], D;
    ka(T, "resize", ia);
    pb(function() {
      D && nc(D);
      Ia(T, "resize", ia);
    });
    sb = function(c) {
      J.push(c);
    };
    var J = [], Z = 1 > Q || 1.2 <= Q && 1.8 > Q || 7.2 >= G, oa;
    Z ? Kb(function() {
      var c = T.pageYOffset;
      oa !== c && (oa = c, qa({type:"scroll", cancelable:!1, stopPropagation:db, preventDefault:db}));
    }) : ka(T, "scroll", qa, {passive:!0});
    pb(function() {
      Z || Ia(T, "scroll", qa, {passive:!0});
    });
    Lc = function(c, a) {
      if (wa) {
        ka(c, "wheel", a, {passive:!1});
      } else if (Da) {
        ka(c, "mousewheel", a, !1);
      } else if (g) {
        ka(c, "MozMousePixelScroll", a, !1);
      } else if (p) {
        for (var k = E, h = 0, x = k.length; h < x; ++h) {
          if (k[h] === c && k[h + 1] === a) {
            return;
          }
        }
        k.length || ka(I, "DOMMouseScroll", H, !1);
        k.push(c, a);
      }
    };
    Mc = function(c, a) {
      if (wa) {
        Ia(c, "wheel", a, {passive:!1});
      } else if (Da) {
        Ia(c, "mousewheel", a, !1);
      } else if (g) {
        Ia(c, "MozMousePixelScroll", a, !1);
      } else if (p) {
        for (var k = E, h = 0, x = k.length; h < x; ++h) {
          if (k[h] === c && k[h + 1] === a) {
            k.splice(h, 2);
            k.length || Ia(I, "DOMMouseScroll", H, !1);
            break;
          }
        }
      }
    };
    var wa = 9 <= B || Ua || 17 <= Q || 31 <= Aa || 537.7 <= sa, Da = 6 <= B || Ua || 9 <= G || Aa || 522 <= sa || za, g = yb, p = Q && 0 <= Ka.conpare(La, "0.9.7") && !yb;
    if (p) {
      var E = [], H = function(c) {
        for (var a = E, k = c.target, h, x = 0, fa = a.length; x < fa; ++x) {
          h = a[x], hb(h, k) && a[x + 1].call(h, c);
        }
      };
    }
  })();
  (function() {
    function N(f) {
      switch(f) {
        case 1:
          return da;
        case 2:
          return !!b;
        case 3:
          return !!e;
        case 4:
          return !!m;
        case 5:
          return d;
        case 6:
          return C && !xa;
      }
      return !1;
    }
    function K(f) {
      n(f);
      na && !f && Ba(na);
      n = q = A = R = W = P = Ca = pa = na = l = z;
    }
    function M(f) {
      I.fonts.load('1.6em "' + f + '"').then(function() {
        var y;
        (y = Y(q)) ? ha(K, y) : ba(!0);
      }, function() {
        fb !== z ? X(fb) : Yb(X);
      });
    }
    function ba(f) {
      f && (ra = Sa());
      (f = Y(q, ca)) ? K(f) : (f = ca, I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (ra = Sa(), f = !1) : f = f < Sa() - ra, f ? Ca ? V() : ia ? K(0) : fb !== z ? X(fb) : Yb(X) : ha(ba));
    }
    function Y(f) {
      var y = 0, u = -1, v = (F || !1) && [];
      if (!l) {
        var r = -1;
        var L;
        pa = Ha(va, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, S);
        for (l = []; L = ea[++r];) {
          Ta(pa, "fontFamily", L), l[r] = pa.offsetWidth;
        }
      }
      for (5 > B ? pa || (pa = Ha(va, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, S)) : va.appendChild(pa); r = ea[++u];) {
        Ta(pa, "fontFamily", '"' + f + '",' + r);
        var t = pa.offsetWidth;
        F ? v[u] = t : t !== l[u] && (y = 1);
      }
      if (F && t === v[0] && t === v[1]) {
        for (y = 1, u = -1; 0 <= (t = l[++u]);) {
          if (t === v[0] && t === v[1] && t === v[2]) {
            y = 0;
            break;
          }
        }
      }
      !B && y && W && (pa.textContent = W, t = pa.offsetWidth, pa.textContent = P, y = t === pa.offsetWidth ? 2 : 1, pa.textContent = S);
      Ba(pa);
      5 > B && (pa = z);
      return y;
    }
    function X(f) {
      f ? (Ca = !0, ca = ja, V()) : K(0);
    }
    function V() {
      if (A) {
        for (; A.length;) {
          var f = A.shift(), y = A.shift();
          if (N(f)) {
            na = yc(y, ma, R, na);
            return;
          }
        }
      }
      K(0);
    }
    function ma(f) {
      f ? ba(!0) : V();
    }
    Yb = !1 === fb ? function(f) {
      ha(f, !1);
    } : function(f) {
      function y(r) {
        v && (v = qb(v), fb = r, u.onload = u.onerror = db, f(r));
      }
      if (fb !== z) {
        ha(f, fb);
      } else {
        var u = new Image(), v = ha(y, !1, 999);
        u.onerror = function() {
          y(!1);
        };
        u.onload = function() {
          y(1 === u.width * u.height);
        };
        u.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > B && Pa(function() {
      var f = Ha(va, "div");
      zb(f, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      rc = 1 < f.offsetHeight;
      Ba(f);
    });
    uc = function(f, y) {
      function u() {
        r || !L || v.complete ? (ha(f, !!v.width), v.onerror = v.onload = db, v = f = z) : (--L, ha(u));
      }
      var v = new Image(), r, L = 99;
      v.onerror = function() {
        r = !0;
      };
      v.onload = function() {
        r = !0;
      };
      v.src = y;
      ha(u);
    };
    vc = function(f, y, u, v, r, L, t) {
      n = f;
      q = y;
      A = u;
      R = v;
      W = r;
      P = L;
      ca = t || qa;
      U(10) ? ha(K, 1) : Uc ? ha(K, 0) : !I.fonts || 603 > sa || 11 > za ? ba(!0) : M(q);
    };
    var ia = 9 > B, xa = 6 > Aa || G || 530 > sa || 4 > za, qa = 5E3, ja = 500, S = "mmmmmmmmmmlliiiiiiiii", F = 21 > Aa || 7 > za || sa && 0 >= Ka.conpare(La, "536.11"), ea = ["monospace", "sans-serif", "serif"], da = 14 <= Ua || 36 <= Aa || 39 <= Q || 602 <= sa || 10 <= za, b = 6 <= Aa || Q && 0 <= Ka.conpare(La, "1.9.2") || 525 <= sa || 3.2 <= za || 4.4 <= Va || 11.1 <= G || Ua || 9 <= U(2) || 10 <= U(3), e = 2 <= Aa || yb || 525 <= sa || 3.2 <= za || 2.2 <= Va || 10 <= G || Ua || 9 <= U(2) || 
    10 <= U(3), m = e, C = 525 <= sa || 3.2 <= za || 38 > Aa || 3 <= Va || 11.5 <= G, d = 4 <= U(2) || 10 <= U(3), n, q, A, R, W, P, ca, ra, Ca, pa, na, l;
  })();
  (function() {
    function N(d) {
      var n = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== d) {
        var q = Dc("ico"), A = 0, R = q.length;
        if (R) {
          if (1 === d) {
            for (; A < R; ++A) {
              d = q[A];
              var W = Hc(d);
              if (W = n[W]) {
                d.innerHTML = W;
              }
            }
          } else {
            C && !m && (T.VectorIconCompat = bz, Ib(ta + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Jb(ta + "js/vector-icon-svg-fallback.js");
        return [n, q, Ha, m];
      }
      bz = !1;
    }
    Ab(function(d) {
      var n = d.G;
      d = d.H;
      var q = Oa(n);
      !Xa(q, "aBodyRoot") && d ? ib(q, "js-image-has-been-loaded") : d || Fa(n, "alt") || "lazy" === Fa(n, "loading") || Ta(n, "display", "none");
    });
    $a && (Qa.splice(1, 0, function() {
      for (var d = Ec(lb, "RichLink-sep"), n, q, A, R, W, P; n = d.shift();) {
        for (n = ab(n); q = n.shift();) {
          if ("A" === Ma(q) && !q.innerHTML) {
            for (; A = n.shift();) {
              if (1 === A.nodeType) {
                if ("A" === Ma(A)) {
                  break;
                }
                for (R = gb(A, "A"); W = R.shift();) {
                  for (P = ab(W); P.length;) {
                    W.parentNode.insertBefore(P.shift(), W);
                  }
                  Ba(W);
                }
              }
              q.appendChild(A);
            }
          }
        }
      }
    }), Qa.splice(2, 0, function() {
      for (var d = ob("A"), n, q; n = d.shift();) {
        "A" !== Ma(n) || n.innerHTML || (q = n.nextSibling && n.nextSibling.firstChild) && q.href === n.href && Ba(n);
      }
    }));
    5.5 <= B && 8 > B && Ra && ec(function(d) {
      for (var n = gb(va, "a"), q = n.length, A = 0; A < q; ++A) {
        n[A].hideFocus = !d;
      }
    });
    if (!gc && Ra) {
      var K, M = function() {
        K = Ha(eb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + Gb + "hc/" + Xb});
        (sc || 5.5 <= B && 9 > B && rc) && ib(va, "js-canuse-css-rotate-when-forced-colors-mode");
        M = z;
      };
      ec(function(d) {
        d && !K ? M() : K && (d ? eb.appendChild(K) : Ba(K));
      });
    }
    G && Pa(function() {
      for (var d = gb(va, "a"), n = d.length, q = 0, A; q < n; ++q) {
        A = d[q], "-1" === Fa(A, "tabIndex") ? Wa(A, "tabIndex") : Fa(A, "href") && bb(A, "tabIndex", "0");
      }
      d = gb(va, "input");
      q = 0;
      for (n = d.length; q < n; ++q) {
        A = d[q], "hidden" === Fa(A, "type") && Wa(A, "tabIndex");
      }
    });
    if (Q && 0 > Ka.conpare(La, "0.9.5")) {
      zc = !0;
      var ba, Y, X, V, ma;
      Pa(function() {
        ka(I, "keydown", ia);
        ka(I, "keyup", xa);
        fc(va, qa);
        $a || (ka(T, "blur", da), ka(va, "click", ea));
      });
      var ia = $a ? function(d) {
        16 === d.keyCode ? ba = !0 : 9 === d.keyCode && V && ja(V, !0) && (V.blur && V.blur(), d.stopPropagation(), d.preventDefault(), ha(F));
      } : function(d) {
        16 === d.keyCode ? ba = !0 : 9 === d.keyCode && (Y = Sa());
      }, xa = function(d) {
        16 === d.keyCode && (ba = !1);
      }, qa = $a ? function(d) {
        V = d.target;
      } : function(d) {
        var n = d.target;
        if (V === n) {
          X = z;
        } else if (X) {
          n === X ? (d.stopPropagation(), F(!0)) : (n.blur && e(n), d.preventDefault(), F());
        } else {
          if (d = V) {
            V = z, e(d);
          }
          X = n;
          F(!0);
        }
      }, ja = function(d, n) {
        var q = Sa(), A = va, R = "nextSibling", W = "firstChild";
        ba && (n || q - 99 < Y && Y <= q) && (R = "previousSibling", W = "lastChild");
        for (X = z; d !== A;) {
          if (P) {
            q = d;
            var P = !1;
          } else {
            q = d[R];
          }
          if (q) {
            if (1 === q.nodeType) {
              if (S(q)) {
                return X = q, !0;
              }
              d = (P = q[W]) || q;
            } else {
              d = q;
            }
          } else {
            d = d.parentNode;
          }
        }
      }, S = function(d, n) {
        function q() {
          return "-1" !== Fa(d, "tab-index");
        }
        function A() {
          return 0 < d.offsetHeight * d.offsetWidth;
        }
        if (d.focus) {
          var R;
          switch({A:n ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ma(d)]) {
            case 1:
              if (rb(d, "href") && q() && A()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Fa(d, "type") && q() && !rb(d, "disabled") && A()) {
                return !0;
              }
              break;
            case 3:
              if (q() && !rb(d, "disabled") && A()) {
                return !0;
              }
              break;
            default:
              if ((R = Fa(d, "tab-index")) && "-1" !== R && A()) {
                return !0;
              }
          }
        }
      }, F = function(d) {
        ma = 0;
        X && ($a || ka(X, "blur", b), V = X, X = z, d || V.focus());
      };
      if (!$a) {
        var ea = function(d) {
          var n = d.target;
          if (V && S(n, !0)) {
            var q = V;
            V = z;
            e(q);
            X = n;
            d.stopPropagation();
            d.preventDefault();
            F();
          }
        }, da = function(d) {
          d.target === I && (X = z);
        }, b = function(d) {
          d = d.target;
          Ia(d, "blur", b);
          V === d && ja(d) && (ma || (ma = ha(F)));
        }, e = function(d) {
          Ia(d, "blur", b);
          d.blur();
        };
      }
    }
    tb(function(d) {
      if (d) {
        return vc(N, "myIconFont", [1, ta + "iconfont/woff2.css", 2, ta + "iconfont/woff.css", 4, ta + "iconfont/otf.css", 3, ta + "iconfont/ttf.css", 5, ta + "iconfont/eot.css", 6, ta + "iconfont/svg.css"], "js-myIconFont-testCssReady", "Twitter", "\ud83d\udc24", 5E3), N = z, !0;
      }
    });
    var m = 8 <= U(8) && 9 > G, C = 9 <= B || Ua || 1.8 <= Q || 8 <= U(8) || 9 <= U(9) || 3 <= U(21) || Eb || Qc || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || za;
  })();
  (function() {
    function N(g) {
      var p = A.length, E, H, c, a;
      if (13 === (g.keyCode || g.V) || g.type !== R) {
        for (; p;) {
          var k = A[--p];
          if (k.F === this || k.u === this) {
            p = k.F;
            var h = E = k.u;
            if (k.P) {
              if (Ta(p, "width", k.$), p.src = k.Z, Mb(h, k.T), p = k.L) {
                zb(p, k.S), cc(p, "js-captioned-thumbnail__large");
              }
            } else {
              if (H = k.N) {
                delete k.N;
                if (k.M) {
                  for (; E = Oa(E);) {
                    if (!Xa(E, "caption")) {
                      var x = Ma(E);
                      if ("DIV" === x || "P" === x || "BLOCKQUOT" === x || "LI" === x || "DD" === x || "TD" === x || "TH" === x || "FORM" === x || "PRE" === x) {
                        break;
                      }
                    }
                  }
                  E = (E.offsetWidth | 0) - 4;
                  1600 < E && (E = 1600);
                  if (2 === k.M) {
                    H = H.split("=");
                    x = H.length;
                    if (c = H[x - 1]) {
                      (a = Za(c.substr(1))) && c === "s" + a ? H[x - 1] = "w" + E : H[x] = "w" + E;
                    }
                    H = H.join("=");
                  } else {
                    H = H.split("/");
                    x = H.length;
                    if (c = H[x - 2]) {
                      (a = Za(c.substr(1))) && c === "s" + a ? H[x - 2] = "w" + E : H.splice(x - 1, 0, "w" + E);
                    }
                    H = H.join("/");
                  }
                }
                k.X = H;
              }
              k.T = Ic(h);
              ib(h, "js-pica-thumbnail__large");
              Ta(p, "width", "");
              p.src = k.X;
              if (p = k.L) {
                zb(p, ""), ib(p, "js-captioned-thumbnail__large");
              }
            }
            k.P = !k.P;
            break;
          }
        }
        K(g);
      }
    }
    function K(g) {
      g.preventDefault();
      g.stopPropagation();
    }
    function M(g) {
      var p = L;
      if (Bb) {
        if (t && !p) {
          if (Sa() < t) {
            return;
          }
          t = z;
        }
        7 === g ? O = 0 : (O && (O = qb(O)), v = Vb());
        p ? (L = ba(z, p[0], p[1])) || (t = Sa() + 99) : ba();
      } else {
        L = z;
      }
    }
    function ba(g, p, E) {
      function H(Ya) {
        h = Ya;
        if (y) {
          x = y + ":translate" + (r ? "3D(0," : "(0,") + Ya + (r ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ya) {
          if (ra || Ca) {
            var hc = na.offsetWidth;
          }
          x = ra ? "position:fixed;width:" + hc + "px;top:" + (Ya - c + la) + "px" : pa ? "top:" + Ya + "px" : "position:absolute;top:" + Ya + "px;left:0";
          if (Ca && x) {
            var Cb = 8 > B ? " " : ",";
            x += ";clip:rect(" + (0 > Ya ? -Ya + "px" + Cb + hc + "px" + Cb + Ga : "0" + Cb + hc + "px" + Cb + (Ya + Ga < Nb ? Ga : Nb - Ya)) + "px" + Cb + "0)";
          }
        }
      }
      var c = v, a = l, k = na.offsetTop === a.offsetTop, h = 0, x = "", fa = !0;
      if (k) {
        for (var aa = 0, la = 0, ya = a; ya && ya !== va;) {
          la += ya.offsetTop, ya = ya.offsetParent;
        }
        h = u;
        var ic = 11 > B ? kb.offsetHeight : T.innerHeight, jc = a.offsetHeight, Ga = f.offsetHeight, Nb = Ga < jc ? jc : Ga, jb = c, ub = jb + ic, Ob = la, Pb = Ob + Nb, Nc = la + h, Wc = Nc + Ga;
        a = jb < Ob ? Ob : jb;
        ya = Pb < ub ? Pb : ub;
        var vb = ya - a;
        jb = Pb <= jb;
        ub = ub <= Ob;
        if (p !== z) {
          fa = la + p;
          g = fa + E;
          var wb;
          if (jb || ub) {
            return ic <= E ? wb = la : wb = jb ? Pb - E : la + E - ic, t = z, T.scroll(0, wb), L;
          }
          Ga <= vb ? aa = 3 : E <= vb ? Ga - p <= vb ? aa = 2 : a <= fa && g <= ya ? a < la + h && (aa = 4) : aa = a <= fa && fa <= ya ? 5 : a <= g && g <= ya ? 4 : g < a ? 4 : 5 : aa = 4;
          fa = !1;
        } else {
          g !== z ? Ga <= vb ? (aa = 7, fa = !1) : (h -= 60 * g, aa = ya - la - Ga, wb = a - la, h < aa ? h = aa : wb < h && (h = wb), aa = 6) : jc <= Ga || (jb ? aa = 1 : ub || (Ga <= vb ? aa = 3 : a < Nc ? aa = 3 : Wc < ya ? aa = 2 : c < la + Ga - vb || (aa = 2)));
        }
        switch(aa) {
          case 0:
            H(0);
            break;
          case 1:
            H(Nb - Ga);
            break;
          case 2:
            H(ya - la - Ga);
            break;
          case 3:
            H(a - la);
            break;
          case 4:
            H(a - la - p);
            break;
          case 5:
            H(ya - la - (p + E));
          case 6:
            H(h);
        }
      }
      zb(f, x);
      u = h;
      return k && fa;
    }
    function Y(g) {
      if (Bb && (Q && (v = Vb()), this !== g.target)) {
        var p = Sb(g.deltaY) ? g.deltaY : Sb(g.wheelDeltaY) ? g.wheelDeltaY / 120 : Sb(g.wheelDelta) ? g.wheelDelta / -120 : g.detail / ("MozMousePixelScroll" === g.type ? 45 : 1);
        p && ba(9 >= p ? -9 >= p ? -3 : p : 3) && (g.preventDefault(), g.stopPropagation());
      }
    }
    function X(g) {
      if (Bb) {
        var p = Q && 0 > Ka.conpare(La, "0.9.4"), E = g.target;
        g = f;
        var H = 0;
        if (hb(g, E)) {
          if (y) {
            p = E.getBoundingClientRect();
            var c = p.bottom - p.top;
            H = p.top - g.getBoundingClientRect().top | 0;
          } else {
            c = E.offsetHeight;
            var a = E;
            if (p) {
              for (var k = []; a && (Q ? hb(g, a) : g !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && k.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = E;
            }
            for (; a && (Q ? hb(g, a) : g !== a);) {
              if (p) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, H += a.offsetHeight || 0;
                }
                a = a.parentNode;
              } else {
                H += a.offsetTop, a = a.offsetParent;
              }
            }
          }
          ca ? (L = [H, c], O && qb(O), O = ha(M, 7, 1 > Q || 536 > sa || 14 > Aa ? 500 : 0)) : (v = Vb(), ba(z, H, c));
        }
      }
    }
    function V() {
      w.call(D);
    }
    function ma() {
      I.fullscreenElement || I.fullscreen || I.webkitIsFullscreen || I.msFullscreenElement || T.fullScreen ? (bb(D, "id", "blog2slide-root"), oa[1].parentNode.insertBefore(J, oa[1]), ia(), I.onkeydown = xa) : Z && (Ba(J), Wa(D, "id"), Wa(Z, "id"), Z = I.onkeydown = z);
    }
    function ia() {
      Z && Wa(Z, "id");
      wa = 0 < wa ? Da < wa ? Da : wa : 0;
      Z = oa[wa];
      bb(Z, "id", "blog2slide-current");
    }
    function xa(g) {
      if ("ArrowRight" === g.key || 39 === g.keyCode) {
        ++wa, ia();
      } else if ("ArrowLeft" === g.key || 37 === g.keyCode) {
        --wa, ia();
      }
    }
    yc = function(g, p, E, H) {
      H = H || Ha(eb, "link", {type:"text/css", rel:"stylesheet"});
      if (m) {
        (b = nb(E)) ? Wa(b, "id") : b = Ha(va, "div", {"aria-hidden":"true", className:E});
        var c = b.offsetWidth;
        bb(b, "id", E);
      }
      e(H, g, p, c);
      return H;
    };
    var qa = Q && 0 > Ka.conpare(La, "0.9.1"), ja = 11 <= B || Ua || 9 <= G && 9.5 > G, S = 11 > B, F = 7.2 <= G && 7.5 > G, ea = 26 > Q && !qa || 19 > Aa || 4.3 > Va || 2 > Fb || 536 > sa || 6 > za || 7 <= G && 9 > G && !F, da = !qa && !ja && !S && !F && !ea, b, e = da ? function(g, p, E) {
      g.onload = bz;
      g.onerror = function() {
        g.onload = g.onerror = null;
        E(!1);
      };
      g.href = p;
      function bz() {
        g.onload = g.onerror = null;
        E(!0);
      }
      bz = !1;
    } : ja ? function(g, p, E, H) {
      g.onload = function() {
        var c = m(H);
        Ba(b);
        g.onload = b = null;
        E(c);
      };
      g.href = p;
    } : S ? function(g, p, E, H) {
      g.onreadystatechange = function() {
        if ("complete" === g.readyState) {
          var c = m(H);
          Ba(b);
          b = null;
          g.V = db;
          E(c);
        }
      };
      g.href = p;
    } : ea || F ? function(g, p, E, H) {
      function c() {
        k && (h = qb(h), x = Sa() + 999, ha(a, 0, 99), ea ? k.onerror = null : k.removeEventListener("load", c, !1), k = null);
      }
      function a() {
        m(H) ? (Ba(b), b = null, E(!0)) : Sa() < x ? ha(a, 0, 99) : (Ba(b), b = null, E(!1));
      }
      var k = new Image(), h = ha(c, 0, 5E3), x;
      ea ? k.onerror = c : k.addEventListener("load", c, !1);
      k.src = g.href = p;
    } : function(g, p, E) {
      ha(E, !1);
    }, m = !da && !qa && function(g) {
      return b.offsetWidth !== g;
    };
    xc = Q && 0 >= Ka.conpare(La, "0.9");
    Hb = !(7.2 > G || xc);
    Ib = function(g) {
      C ? I.write('<script src="' + g + '">\x3c/script>') : Qa || n.length ? n.push(g) : q(g);
    };
    Jb = function() {
      C || q(n.shift());
    };
    var C = !Hb, d = Hb && 7.5 > G;
    if (!C) {
      var n = [];
      d && (wc = !0);
      Pa(function() {
        q(n.shift());
      });
      var q = function(g) {
        g && (d ? kc[0].src = g : Ha(eb, "script", {src:g}));
      };
    }
    var A = [], R = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!oc) {
      var W = Na.transition !== z || Na["-o-transition"] !== z || Na["-moz-transition"] !== z || Na["-webkit-transition"] !== z;
      Ab(function(g) {
        if (g.H && lb) {
          g = g.G;
          var p = Oa(g), E = "", H;
          if ("A" === Ma(p) && 1 === Fc(p).length) {
            var c = Fa(p, "href");
            var a = c.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((H = 0 < c.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              ka(p, R, N);
              ka(g, "click", N);
              ka(p, "click", K);
              W && (E = g.naturalWidth + "px", Ta(g, "width", E));
              ib(p, "js-pica-thumbnail");
              for (a = p; a = Oa(a);) {
                if (Xa(a, "caption")) {
                  ib(a, "js-captioned-thumbnail");
                  var k = a;
                  var h = Jc(k);
                  break;
                }
              }
              A.push({u:p, L:k, S:h, Z:g.src, $:E, N:c, F:g, M:H ? 0 < c.indexOf("/img/a/") ? 2 : 3 : 0 < c.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      pb(function(g, p) {
        for (g = -1; p = A[++g];) {
          Ia(p.u, R, N), Ia(p.F, "click", N), Ia(p.u, "click", K);
        }
      });
    }
    var P = ["jsSidebarFixer1", "jsSidebarFixer2"], ca = !(9 > B || G || 1 <= Q && 1.3 > Q || zc), ra = !(5 > za || 2.2 > Va || 6 > U(12) || Ea(30) && 534 > sa || Ea(32) || 7 > B || 9 > G || 1 > Q), Ca = ra || 6 === B || 1 > Q, pa = 7.5 > G, na, l, f, y = Vc && sc, u = 0, v = 0, r, L, t, O;
    Oc || oc || (tb(function(g) {
      if (g) {
        if (!lb) {
          return !0;
        }
        g = -1;
        var p;
        na = nb("jsSide");
        l = lb;
        if (!na) {
          return !0;
        }
        sb(M);
        dc(M);
        f = Lb(ac(na), "div", {id:"jsSidebarFixer"});
        for (fc(f, X); 1 < ab(na).length;) {
          f.appendChild(ab(na)[1]);
        }
        for (; p = P[++g];) {
          Lc(nb(p), Y);
        }
        B || Ua || 2 > Aa || (r = Na.perspective !== z || Na.MozPerspective !== z || Na["-webkit-perspective"] !== z);
        M();
        return !0;
      }
    }), pb(function() {
      for (var g = -1, p; p = P[++g];) {
        Mc(nb(p), Y);
      }
      Kc(f, X);
    }));
    Pa(function() {
      function g(k, h, x, fa) {
        var aa = fa ? "div" : "cite";
        if (0 === h.indexOf("urn:isbn:")) {
          h = h.substr(9).toUpperCase().split("-").join("");
          if (13 === h.length) {
            h = h.toString().slice(3, -1);
            for (var la = 0, ya = 0; 9 > ya; ya++) {
              la += (h.charAt(ya) - 0) * (10 - ya);
            }
            la = (11 - la % 11) % 11;
            la = 10 === la ? "X" : la.toString();
            h += la;
          }
          10 === h.length && (h = "//www.amazon.co.jp/exec/obidos/ASIN/" + h + "/itozyun-22/ref=nosim/");
        }
        x = fa ? Lb(ac(E), aa, {className:x}) : Ha(E, aa, {className:x});
        Ha(x, "a", 0 === h.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:h} : {href:h}, k);
      }
      if (lb) {
        for (var p = gb(lb, "blockquote"), E, H = -1, c, a; E = p[++H];) {
          c = Fa(E, "title"), a = Fa(E, "cite"), c && a ? (Wa(E, "title"), g(c, a, "js-generated-link-in-blockquote", !0)) : a && (Wa(E, "cite"), g(T.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var w, D, J, Z, oa, wa, Da;
    Pa(function() {
      var g = nb("blog2slide-start");
      if (g) {
        var p = I.onfullscreenchange !== z ? "f" : I.onmozfullscreenchange !== z ? "mozF" : I.onwebkitfullscreenchange !== z ? "webkitF" : 0;
        w = g.requestFullscreen || g.webkitRequestFullscreen || g.mozRequestFullscreen || g.msRequestFullscreen;
        0 !== p || w ? (g.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ka(g.firstChild, "click", V), g = Oa(g), D = Oa(g), oa = gb(g, "section"), J = I.createElement("h1"), J.innerHTML = gb(va, "h1")[0].innerHTML, Da = oa.length, oa.splice(0, 0, J), 0 !== p ? ka(I, p + "ullscreenchange", ma) : B ? ka(I, "MSFullscreenChange", ma, !1) : dc(ma)) : Ba(g);
      }
    });
  })();
  var xb, Qb = !mc || .9 > Q || 8 > G || 5.5 > B, cb;
  (function() {
    function N(l) {
      return l === "" + l;
    }
    function K(l, f) {
      return Qb ? new F(l, f) : new mc(l, f);
    }
    function M(l, f, y, u) {
      if (S() - ea < m && !u) {
        return l(f);
      }
      ha(ba, {U:l, Y:f});
    }
    function ba(l) {
      ea = S();
      l.U(l.Y);
    }
    function Y(l, f) {
      l && xb[l] || (l = C.test(f) ? "default-markup" : "default-code");
      var y = !!xb[l];
      y && M(R, l, 0, !0);
      return y;
    }
    function X() {
      function l(Da, g, p) {
        g && (f.h = f.h || [], f.h.push({l:f, B:f.B, O:1, s:L, D:Da, o:g, m:p, R:{}, v:0}));
      }
      var f = da, y = f.m, u = y[0], v = y[2], r = f.D, L = f.s, t = f.aa.shift(), O = f.R;
      if (t) {
        var w = O[t], D;
        if (!(0 <= w)) {
          if (D = u[t.charAt(0)]) {
            var J = t.match(D[1]);
            w = D[0];
          } else {
            for (w = 0, u = -1; D = v[++u];) {
              if (J = t.match(D[1])) {
                w = D[0];
                break;
              }
            }
          }
          !(D = N(w)) || J && N(J[1]) || (D = !1, w = 11);
          D || (O[t] = w);
        }
        v = f.v;
        O = t.length;
        f.v += O;
        if (D) {
          D = J[1];
          u = t.indexOf(D);
          var Z = D.length, oa = u + Z;
          J[2] && (oa = O - J[2].length, u = oa - Z);
          l(r + v, t.substr(0, u), y);
          if (Z && Y(w, D)) {
            l(r + v + u, D);
            var wa = !0;
          }
          l(r + v + oa, t.substr(oa), y);
          f.h && f.h.length && (da = f.h.shift());
          wa || (da !== f ? M(q, z, 2) : M(X, z, 2));
        } else {
          L.push(r + v, w), M(X, z, 2);
        }
      } else {
        f.l ? (da = f.l.h.shift()) ? M(q, z, 2) : (da = f.l, M(X, z, 2)) : M(ca, z, 2);
      }
    }
    function V(l) {
      if (A.length) {
        var f = A.shift(), y = qa[f];
        if (y.pop) {
          qa[f] = K(y[0], y[1]);
        } else if (N(y)) {
          qa[f] = K(y);
        } else {
          return V(l);
        }
        M(V, l, 1);
      } else {
        M(R, l);
      }
    }
    function ma(l) {
      for (var f, y = l.firstChild; y; y = y.nextSibling) {
        var u = y.nodeType;
        f = 1 === u ? f ? l : y : 3 === u ? d.test(y.nodeValue) ? l : f : f;
      }
      return f === l ? z : f;
    }
    xb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ia = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], xa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
    [1, 26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], qa = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ja = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), S = Db.now || function() {
      return +new Db();
    }, F, ea, da, b, e, m = 5 > B ? 60 : 5.5 > B ? 0 : Qb ? 20 : 10, C, d;
    cb = [function(l) {
      T.RegExpCompat = F = l;
    }, function() {
      C = K("^\\s*<");
      d = K("\\S");
    }];
    Qb || (cb[1](), cb = z);
    var n = function() {
      var l = da, f = l.W, y = W(l.B, l.O), u = l.o = y.o;
      l.I = y.I;
      Y(f, u) || (da = z, M(na, z, 0, !0));
    };
    var q = function() {
      var l = da;
      l.aa = l.o.match(l.m[1]) || [];
      l.s.push(l.D, 0);
      M(X, z, 2);
    };
    var A = [];
    var R = function(l) {
      function f(w) {
        var D = w;
        0 <= w && (D = xa[w]);
        0 <= D[1] && (D[1] = y(D[1]));
        return D;
      }
      function y(w) {
        var D = w;
        return 0 <= w && (D = qa[w], !D.exec) ? (A.push(w), w) : D;
      }
      var u = da, v = xb[l];
      N(v) && (v = xb[l] = xb[v]);
      var r = v[0];
      if (0 <= r) {
        r = ia[r];
        if (0 <= r["-num"]) {
          var L = r["-num"];
          delete r["-num"];
          for (var t = -1; 9 > t;) {
            r["" + ++t] = L;
          }
        }
        v[0] = r;
      }
      for (var O in r) {
        r[O] = f(r[O]);
      }
      v[1] = y(v[1]);
      r = v[2];
      t = 0;
      for (L = r.length; t < L; ++t) {
        r[t] = f(r[t]);
      }
      A.length ? M(V, l, 2) : (u.m ? u.l && (u.l.h[0].m = v) : u.m = v, M(q, z, 1));
    };
    var W = function(l, f) {
      function y(O) {
        var w = O.nodeType;
        if (1 === w) {
          if (!Xa(O, "nocode")) {
            for (w = O.firstChild; w; w = w.nextSibling) {
              y(w);
            }
            w = Ma(O);
            if ("BR" === w || "LI" === w) {
              u[L] = "\n", r[L << 1] = v++, r[L++ << 1 | 1] = O;
            }
          }
        } else if (3 === w || 4 === w) {
          if (w = O.nodeValue) {
            w = f ? w.split("\r\n").join("\n").split("\r").join("\n") : w.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), u[L] = w, r[L << 1] = v, v += w.length, r[L++ << 1 | 1] = O;
          }
        }
      }
      var u = [], v = 0, r = [], L = 0;
      y(l);
      var t = u.join("");
      "\n" === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1));
      return {o:t, I:r};
    };
    var P = function(l, f, y) {
      function u(w) {
        var D = w.nodeType;
        if (1 === D && !Xa(w, "nocode")) {
          if ("BR" === Ma(w)) {
            v(w), w.parentNode && Ba(w);
          } else {
            for (w = w.firstChild; w; w = w.nextSibling) {
              u(w);
            }
          }
        } else if ((3 === D || 4 === D) && y) {
          var J = w.nodeValue, Z = J.indexOf("\r\n"), oa = 2;
          -1 === Z && (Z = J.indexOf("\n"), oa = 1);
          -1 === Z && (Z = J.indexOf("\r"));
          -1 !== Z && (D = J.substr(0, Z), w.nodeValue = D, (J = J.substr(Z + oa)) && bc(w, J), v(w), D || Ba(w));
        }
      }
      function v(w) {
        function D(Z, oa) {
          var wa = oa ? Z.cloneNode(!1) : Z, Da = Z.parentNode;
          if (Da) {
            Da = D(Da, 1);
            var g = Z.nextSibling;
            Da.appendChild(wa);
            for (var p = g; p; p = g) {
              g = p.nextSibling, Da.appendChild(p);
            }
          }
          return wa;
        }
        for (; !w.nextSibling;) {
          if (w = w.parentNode, !w) {
            return;
          }
        }
        w = D(w.nextSibling, 0);
        for (var J; (J = w.parentNode) && 1 === J.nodeType;) {
          w = J;
        }
        L.push(w);
      }
      for (var r = I.createElement("li"); l.firstChild;) {
        r.appendChild(l.firstChild);
      }
      for (var L = [r], t = 0; t < L.length; ++t) {
        u(L[t]);
      }
      if (f === (f | 0)) {
        if (10 <= f && 7.2 > G) {
          var O = I.createElement("ol");
          O.innerHTML = '<li value="' + f + '">' + r.innerHTML + "</li>";
          L[0] = O.firstChild;
        } else {
          bb(r, "value", f);
        }
      }
      O = Ha(l, "ol", {className:"linenums"});
      l = Math.max(0, f - 1 | 0) || 0;
      t = 0;
      for (f = L.length; t < f; ++t) {
        r = L[t], Mb(r, "L" + (t + l) % 10), r.firstChild || Gc(r, "\u00a0"), O.appendChild(r);
      }
    };
    var ca = function() {
      var l = da, f = l.o, y = f.length, u = 0, v = l.I, r = v.length, L = 0, t = l.s, O = t.length, w = 0;
      t[O] = y;
      var D, J;
      for (J = D = 0; J < O;) {
        t[J] !== t[J + 2] ? (t[D++] = t[J++], t[D++] = t[J++]) : J += 2;
      }
      O = D;
      for (J = D = 0; J < O;) {
        var Z = t[J], oa = t[J + 1];
        for (J += 2; J + 2 <= O && t[J + 1] === oa;) {
          J += 2;
        }
        t[D++] = Z;
        t[D++] = oa;
      }
      t.length = D;
      l = l.B;
      O = "";
      l && (O = l.style.display, Ta(l, "display", "none"));
      for (; L < r;) {
        D = v[L + 2] || y;
        Z = t[w + 2] || y;
        J = Math.min(D, Z);
        oa = v[L + 1];
        var wa;
        if (1 !== oa.nodeType && (wa = f.substring(u, J))) {
          9 > B && (wa = wa.split("\n").join("\r"));
          var Da = Lb(oa, "span", {className:ja[t[w + 1]]}, wa);
          Ba(oa);
          u < D && (v[L + 1] = bc(Da, f.substring(J, D)));
        }
        u = J;
        u >= D && (L += 2);
        u >= Z && (w += 2);
      }
      l && Ta(l, "display", O);
      da = z;
      M(na, z, 3, !0);
    };
    var ra = [], Ca;
    tb(function(l) {
      if (l) {
        l = [ob("pre"), ob("code"), ob("xmp")];
        for (var f = 0; f < l.length; ++f) {
          for (var y = 0, u = l[f].length; y < u; ++y) {
            pa(l[f][y]);
          }
        }
        return !0;
      }
    });
    var pa = function(l) {
      ra.push(l);
      Ca = ra.length;
      1 === Ca && (lc ? ha(lc, na) : cb ? cb.push(function() {
        ha(na);
      }) : ha(na));
    };
    var na = function() {
      function l(L, t) {
        return (L.split(t)[1] || "").split(" ")[0];
      }
      if (!da) {
        Ca !== ra.length && e && e(Ca - ra.length, Ca);
        var f = ra.shift();
        if (f) {
          if (Xa(f, "prettyprint") && !Xa(f, "prettyprinted")) {
            for (var y = !1, u = f.parentNode; u !== va; u = u.parentNode) {
              var v = Ma(u);
              if (("PRE" === v || "XMP" === v || "CODE" === v) && Xa(u, "prettyprint")) {
                y = !0;
                break;
              }
            }
            if (!y) {
              y = f.className;
              ib(f, "prettyprinted");
              u = !1;
              if (!u) {
                u = l(y, "lang-") || l(y, "language-");
                var r;
                !u && (r = ma(f)) && "CODE" === Ma(r) && (u = l(r.className, "lang-") || l(r.className, "language-"));
              }
              v = Ma(f);
              "PRE" === v || "XMP" === v ? v = 1 : (v = f.currentStyle, r = I.defaultView, v = (v = v ? v.whiteSpace : r && r.getComputedStyle ? r.getComputedStyle(f, null).getPropertyValue("white-space") : 0) && "pre" === v.substr(0, 3));
              r = !1;
              (r = "true" === r || +r) || (r = l(y, "linenums:") || Xa(f, "linenums"), r = r.length ? +r : r);
              r && P(f, r, v);
              da = {W:u, B:f, ba:r, O:v, D:0, v:0, R:{}, s:[]};
              M(n);
              return;
            }
          }
          M(na, z, 0, !0);
        } else {
          b && b();
        }
      }
    };
    T.PR = {RegExpProxy:K, prettifyElement:pa, registerCompleteHandler:function(l, f) {
      b = l;
      e = f;
    }};
  })();
  var kc = I.scripts || ob("script");
  var ta = kc[kc.length - 1].src.split("/");
  --ta.length;
  "js" === ta[ta.length - 1] && --ta.length;
  (ta = ta.join("/")) && (ta += "/");
  var Oc = Tc || "1" === Fa(va, "mob");
  Gb = (Oc ? "mb" : "pc") + "/";
  6.1 > za && (sb ? sb(Zb) : ka(T, "scroll", Zb));
  pb(Bc);
  6.1 > za && (sb ? sb($b) : ka(T, "scroll", $b));
  pb(Cc);
  10 > B && (11 !== Rc || 5 !== B) || (9 > G || 1 > Q || !mb && !T.addEventListener ? I.write('<link href="' + ta + "css/" + Gb + Xb + '" rel="stylesheet"' + (8 > G ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > G || 1.5 > Q || 534 > sa || 5 > za || 7 > Aa || 3 > Va) && Pa(function() {
    Ha(eb, "link", {href:ta + "css/" + Gb + Xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Qb) {
    if (Hb) {
      var lc = function(N) {
        T.RegExpCompat = bz;
        lc = z;
        Ib(ta + "js/regexpcompat.js");
        function bz(K) {
          for (var M; M = cb.shift();) {
            M(K);
          }
          cb = z;
          ha(N);
          Jb(ta + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      T.RegExpCompat = function(N) {
        for (var K; K = cb.shift();) {
          K(N);
        }
        cb = z;
        Jb(ta + "js/regexpcompat.js");
      }, Ib(ta + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

