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
(function(Ka, S, cb, mc, J, Rb, Pc, Db, Ya, Sb, Tb, nc, Ub, v) {
  function T(N) {
    if (Ka[0] === N) {
      return La === La + "" ? Ya(La) : La;
    }
  }
  function Da(N) {
    var L = Ka[3];
    if (Ka[2] === N) {
      return L === L + "" ? Ya(L) : L;
    }
  }
  function Vb() {
    return 6 > z ? va.scrollTop : z ? kb.scrollTop : S.pageYOffset;
  }
  var va = J.body, Na = va.style, kb, db, lb, La = Ka[1], z = T(2) || T(3), mb = T(7), Ua = T(5) || T(6), F = T(8) || T(9), R = T(11) || T(12), xb = R && 0 <= Ka.conpare(La, "1.9.1"), Eb = T(13), sa = T(15), Ba = T(16) || T(17), oc = T(10) || T(25), wa = T(20) || T(22), pc = T(23), Va = T(21), Fb = T(24), Qc = wa || pc || Va || Fb, qc = wa && Ya(Rb.userAgent.split("Edg/")[1]), Rc = Ya(Rb.appVersion.split("Trident/")[1]) + 4, Wb = Da(35) || Da(36) || Da(37), Sc = 0 <= Rb.userAgent.indexOf("Googlebot/"), 
  Za = 0.9 > R, Xb = (mb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : 7.2 > F ? "opr70" : 8 > F ? "opr72" : 9.5 > F ? "opr" + (F | 0) : R && !xb ? 1.4 <= R ? "gck19" : 1.3 <= R ? "gck13" : 1 <= R ? "gck12" : Za ? 0.8 <= R ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Gb = "", Tc = Da(1) || Da(2) || Da(3) || Da(4) || Da(8) || Da(9) || Da(10), rc, eb = 8 > z || 7.2 > F ? !1 : v, sc = Na.transform !== v ? "transform" : Na["-o-transform"] !== v ? "-o-transform" : 
  Na["-ms-transform"] !== v ? "-ms-transform" : Na.MozTransform !== v ? "-moz-transform" : Na["-webkit-transform"] !== v ? "-webkit-transform" : "", Qa = [], tc = [], Ra = [], Yb, uc, vc, wc, Hb, xc, yc, Ib, Jb, zc = !1, Uc = 525 > sa || 3.2 > Ba || 2.2 > Va || 10 > F || R && !xb || T(25) || 10 > T(3) || Da(32) || Da(30) || Da(3), ia, yb, Kb, Ac, Vc = !!va.getBoundingClientRect, Zb, Bc, $b, Cc, Sa = Db.now || function() {
    return +new Db();
  };
  (function() {
    function N() {
      for (var U, G = 0, ja = Sa(); G < ka.length;) {
        ja < ka[0].t ? ++G : (U = ka.splice(G, 1)[0], U.f(U.p));
      }
      ea = ka.length ? Tb(N, ya) : 0;
    }
    function L() {
      for (var U, G = 0; G < Y.length; ++G) {
        U = Y[G], U.f();
      }
    }
    function M() {
      oa && (oa = clearInterval(oa));
    }
    function ca() {
      ea && (ea = nc(ea));
    }
    Kb = function(U) {
      Y.length || (oa = Ub(L, W));
      Y.push({f:U, C:++V});
      return V;
    };
    Ac = function(U) {
      for (var G = Y.length, ja; ja = Y[--G];) {
        if (ja.C === U) {
          Y.splice(G, 1);
          Y[0] || M();
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      oa && (M(), oa = Ub(L, W));
    };
    Bc = M;
    var Y = [], W = 500, V = 0, oa;
    if (5 > z || mb) {
      S._wdb_onlooptimer = L, L = "_wdb_onlooptimer()";
    }
    ia = function(U, G, ja) {
      ka.length || (ea = Tb(N, ya));
      ka.push({f:U, p:G, C:++qa, t:Sa() + (ya < ja ? ja : ya)});
      return qa;
    };
    yb = function(U) {
      for (var G = ka.length, ja; ja = ka[--G];) {
        if (ja.C === U) {
          ka.splice(G, 1);
          break;
        }
      }
      return 0;
    };
    $b = function() {
      ea && (ca(), ea = Tb(N, ya));
    };
    Cc = ca;
    var ka = [], ya = 16, qa = 0, ea;
    if (5 > z || mb) {
      S._wdb_ontimer = N, N = "_wdb_ontimer()";
    }
  })();
  var nb, ob, Dc, fb, Ec, Oa, $a, Fc, ac, Ga, Lb, Gc, bc, Aa, gb, Hc, Ma, Ea, hb, ab, qb, Ic, Mb, Wa, ib, cc, Ta, zb, Jc;
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
                for (var P = ++d, X, Q = [], fa = q.split(""), ra = fa.length; ra;) {
                  X = fa[--ra], "A" <= X && "Z" >= X && (X = "-" + X.toLowerCase()), Q[ra] = X;
                }
                C[P] = Q.join("") + ":" + A[q] + ";";
              }
              C[++d] = '"';
            } else {
              "className" === n && (n = "class"), C[++d] = " " + n + '="' + A + '"';
            }
          }
        }
      }
      C[++d] = ">";
      null != m && (G && "font" !== b ? C[++d] = "<font>" + L(m) + "</font>" : C[++d] = L(m));
      C[++d] = "</" + b + ">";
      return C.join("");
    }
    function L(b) {
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
    function ca(b) {
      return Y(J, b);
    }
    function Y(b, e) {
      var m = "*" === e;
      m = G ? m ? b.all : b.all.tags(e.toUpperCase()) : 6 > z && m ? b.all : b.getElementsByTagName(e);
      for (var C = [], d = 0, n = m.length; d < n; ++d) {
        C[d] = m[d];
      }
      return C;
    }
    function W(b, e) {
      var m = [], C = 0, d, n = -1;
      if (9 > z || !b.getElementsByClassName) {
        var q = 6 > z ? b.all : b.getElementsByTagName("*");
      } else {
        var A = !0;
        q = b.getElementsByClassName(e);
      }
      for (d = q.length; C < d; ++C) {
        var P = q[C];
        if (A || (G || 1 === P.nodeType) && qa(P, e)) {
          m[++n] = P;
        }
      }
      return m;
    }
    function V(b) {
      return G ? b.parentElement : b.parentNode;
    }
    function oa(b, e, m, C, d, n) {
      if (G) {
        var q = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var A = $a(2 > b ? Oa(e) : e);
        A = 2 > b ? A.indexOf(e) + b : A.length;
        e.insertAdjacentHTML(q, N(m, C, d));
        e = $a(e)[A];
        null != d && ("font" === m ? e.nodeType = 3 : e.children[0].nodeType = 3);
      } else if (ja) {
        e = J.createElement(N(m, C));
      } else {
        e = n ? J.createElementNS("http://www.w3.org/2000/svg", m) : J.createElement(m);
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
                  hb(e, q, b);
              }
            }
          }
          !F || "a" !== m && "A" !== m || !C.href || C["tag-index"] || C.tagIndex || hb(e, "tagIndex", "-0");
        }
        aa || null != d && ka(e, d);
      }
      return e;
    }
    function ka(b, e) {
      if (G) {
        return oa(2, b, "font", v, e);
      }
      var m = J.createTextNode("" + e);
      b.appendChild(m);
      return m;
    }
    function ya(b, e) {
      9 > z ? b.className = e : b.setAttribute("class", e);
    }
    function qa(b, e) {
      return -1 !== (" " + b.className + " ").indexOf(" " + e + " ");
    }
    function ea(b, e, m) {
      if (8 > F || 5.5 > z) {
        e = M(e);
      }
      b.style[e] = m;
    }
    function U(b) {
      return 5.5 > z ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var G = 5 > z;
    kb = ca("html")[0];
    db = ca("head")[0];
    nb = function(b) {
      return S[b] || J[b] || J.getElementById(b);
    };
    ob = ca;
    Dc = function(b) {
      return W(J, b);
    };
    fb = Y;
    Ec = W;
    Oa = V;
    $a = function(b) {
      b = G ? b.children : b.childNodes;
      for (var e = [], m = b.length; m;) {
        e[--m] = b[m];
      }
      return e;
    };
    Fc = function(b) {
      var e = !(7.03 < F && 7.2 > F) && b.children;
      b = e ? e : b.childNodes;
      for (var m = [], C = b.length, d = -1, n; C;) {
        if (n = b[--C], e || 1 === n.nodeType) {
          G && "FONT" === n.tagName || (m[++d] = n);
        }
      }
      return m;
    };
    ac = function(b) {
      return G ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Ga = function(b, e, m, C, d) {
      e = oa(2, b, e, m, C, d);
      G || (b.appendChild(e), aa && null != C && ka(e, C));
      return e;
    };
    Lb = function(b, e, m, C, d) {
      e = oa(0, b, e, m, C, d);
      G || (V(b).insertBefore(e, b), aa && null != C && ka(e, C));
      return e;
    };
    Gc = ka;
    bc = function(b, e) {
      var m;
      if (G) {
        return oa(1, b, "font", v, e);
      }
      var C = J.createTextNode("" + e);
      (m = b.nextSibling) ? Oa(b).insertBefore(C, m) : Oa(b).appendChild(C);
      return C;
    };
    Aa = function(b) {
      G ? b.outerHTML = "" : (5.5 > z && (b.style.filter = ""), Oa(b).removeChild(b));
    };
    gb = function(b, e) {
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
      return G ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ja = 9 > z, aa = ja;
    Ma = function(b) {
      return b.tagName.toUpperCase();
    };
    Ea = function(b, e) {
      if (8 > F || 5.5 > z) {
        e = M(e);
      }
      var m = b.getAttribute(e);
      return F && "tabIndex" === e ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    hb = function(b, e, m) {
      if (F && "tab-index" === e) {
        "-1" === m ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", m);
      } else {
        if (8 > F || 5.5 > z) {
          e = M(e);
        }
        b.setAttribute(e, m);
      }
    };
    ab = function(b, e) {
      if (F && "tab-index" === e) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > F || 5.5 > z) {
          e = M(e);
        }
        b.removeAttribute(e);
      }
    };
    qb = function(b, e) {
      if (F && "tab-index" === e) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > F || 5.5 > z) {
        e = M(e);
      }
      return b.hasAttribute ? b.hasAttribute(e) : null != b.getAttribute(e);
    };
    Ic = function(b) {
      return b.className;
    };
    Mb = ya;
    Wa = qa;
    ib = function(b, e) {
      var m;
      if (!qa(b, e)) {
        if (m = b.className) {
          m += " ";
        }
        ya(b, m + e);
      }
    };
    cc = function(b, e) {
      if (qa(b, e)) {
        var m = b.className.split(" ");
        m.splice(m.indexOf(e), 1);
        ya(b, m.join(" "));
      }
    };
    Ta = ea;
    zb = function(b, e) {
      var m, C = -1, d;
      if (5.5 > z) {
        if (m = U(b)) {
          for (m = m.split(";"); d = m[++C];) {
            ea(b, d.split(":")[0], "");
          }
        }
        if (e) {
          for (C = -1, m = e.split(";"); d = m[++C];) {
            var n = d.split(":")[0];
            ea(b, n, d.substr(n.length + 1));
          }
        }
      } else if (7.1 > F) {
        if (b.setAttribute("style", ""), e) {
          for (m = e.split(";"); d = m[++C];) {
            d = d.split(":"), ea(b, d[0], d[1]);
          }
        }
      } else {
        9 > F || 1 > R ? e ? b.setAttribute("style", e) : b.removeAttribute("style") : b.style.cssText = e;
      }
    };
    Jc = U;
    Qa.splice(0, 0, function() {
      function b(P) {
        P = $a(P);
        for (var X = P.length, Q, fa, ra; X;) {
          if (Q = P[--X], fa = Q.nodeType, 8 === fa) {
            e && q.push(Q);
          } else if (1 === fa) {
            switch(fa = Ma(Q), "/" === fa.charAt(0) && (fa = fa.substr(1), A[fa] = !0), fa) {
              case "STYLE":
                if (7.2 <= F && 9 > F) {
                  break;
                }
              case "LINK":
                G || C || gb(db, Q) || n.push(Q);
                break;
              case "META":
                fa = Ea(Q, "name") || Ea(Q, "property");
                for (ra = d.length; ra;) {
                  if (0 === fa.indexOf(d[--ra])) {
                    q.push(Q);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Sc || qb(Q, "async")) {
                  break;
                }
                if (m) {
                  Q.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (qb(Q, "skip-cleanup")) {
                  break;
                }
              case "!":
                q.push(Q);
                break;
              case "SOURCE":
                S.HTMLSourceElement || q.push(Q);
                break;
              default:
                A[fa] ? q.push(Q) : $a(Q).length && b(Q);
            }
          }
        }
        for (; n[0];) {
          db.appendChild(n.pop());
        }
        for (; q[0];) {
          Aa(q.pop());
        }
      }
      cc(kb, "nojs");
      lb = nb("jsMain");
      var e = !(8 > F || 5 > z || mb || Za), m = wc, C = 7 > z, d = ["og:", "twitter:", "fb:"], n = [], q = [], A = {};
      b(kb);
    });
  })();
  var la, Ha, Pa, pb, dc, rb, sb, Ab, ec, fc, Kc, Lc, Mc, Bb, Ia, gc;
  (function() {
    function N() {
      return r ? u ? 2 : y ? 3 : 1 : 0;
    }
    function L(c) {
      Ha(S, "load", L);
      L = v;
      ca(Qa, c, !0);
      Pa = Qa = v;
    }
    function M(c, a) {
      sb(function() {
        var l = ea(c);
        a(l);
        l.addListener(a);
        return !0;
      });
    }
    function ca(c, a, l) {
      for (var h = 0; h < c.length; ++h) {
        !0 === c[h](a) && (c.splice(h, 1), --h);
      }
      l && (c.length = 0);
    }
    function Y(c, a, l) {
      Qa || G.length || ia(W);
      G.push(c, a, l);
    }
    function W() {
      var c = G, a;
      for (G = []; a = c.shift();) {
        ca(a, c.shift(), c.shift());
      }
    }
    function V(c) {
      var a = c || event;
      c = aa[a.type];
      var l = -1, h, x;
      5 > z ? a = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : z ? (a.target = a.srcElement, a.preventDefault = function() {
        a.returnValue = !1;
      }, a.stopPropagation = function() {
        a.cancelBubble = !0;
      }) : e && (a.K = a.stopPropagation, a.stopPropagation = function() {
        x = !0;
      });
      for (; h = c[++l];) {
        h.j === this ? (this.g = h.i, z && (a.currentTarget = this), this.g(a), z ? (this.g = cb, this.g = v) : delete this.g) : 7.2 > F && this === J && h.j === S && (S.g = h.i, S.g(a), delete S.g);
      }
      if (z) {
        return a.preventDefault = a.stopPropagation = cb, a.preventDefault = a.stopPropagation = v, a.returnValue;
      }
      e && (a.defaultPrevented && "click" === a.type && "A" === a.target.tagName && (C = !0), x && !C && a.K(), a.K = a.stopPropagation = v);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function oa() {
      var c = 9 === U.offsetWidth;
      Bb !== c && Y(tc, Bb = c);
    }
    function ka() {
      !Qa && D && (yb(D), D = ia(ya));
    }
    function ya() {
      D = 0;
      ca(t);
    }
    function qa(c) {
      Qa || ca(K, c);
    }
    var ea = S.matchMedia, U, G = [];
    Qa.push(function() {
      M = v;
      U = Ga(va, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Pa(function() {
        G.length && ia(W);
      });
    });
    la = function(c, a, l, h) {
      if (m) {
        c.addEventListener(a, l, h ? ja ? h : h.capture || !0 === h : !1);
      } else {
        var x = {j:c, i:l};
        h = aa[a];
        var ha = "on" + a, ba, ma;
        if (h) {
          for (ba = h.length; ma = h[--ba];) {
            if (ma.j === c && ma.i === l) {
              return;
            }
          }
          aa[a].push(x);
        } else {
          aa[a] = h = [x], b || (a = c[ha], "function" === typeof a && a !== V && h.unshift({j:c, i:a}));
        }
        b ? c.attachEvent(ha, V) : c[ha] = V;
      }
    };
    Ha = function(c, a, l, h) {
      if (m) {
        c.removeEventListener(a, l, h ? ja ? h : h.capture || !0 === h : !1);
      } else {
        h = aa[a];
        a = "on" + a;
        var x, ha, ba;
        if (h) {
          for (x = h.length; ha = h[--x];) {
            ha.j === c && (ha.i === l ? h.splice(x, 1) : ba = !0);
          }
          ba || (b ? c.detachEvent(a, V) : z ? (c[a] = cb, c[a] = null) : delete c[a]);
        }
      }
    };
    var ja = !z && !mb && (new Pc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), aa = {}, b = !1, e = 525.13 > sa, m = !e && !mb && S.addEventListener, C;
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
          var c = J.readyState;
          "loaded" === c || "complete" === c ? (n = v, L()) : ia(n);
        }
      };
      ia(n);
    } else {
      la(S, "load", L);
    }
    z || !Za && 1.8 > R ? la(S, "unload", function(c) {
      ca(d, c, !0);
    }) : d = v;
    sb = function(c) {
      tc.push(c);
    };
    Pa(function() {
      oa();
      Kb(oa);
    });
    fc = function(c, a) {
      if (q) {
        la(c, "focusin", a);
      } else if (A) {
        la(c, "DOMFocusIn", a);
      } else {
        if (X) {
          da || (da = Ub(f, 333));
        } else if (P || Q) {
          la(J, "focus", ra, !0);
        } else {
          return;
        }
        for (var l = fa, h = 0, x = l.length; h < x; ++h) {
          if (l[h] === c && l[h + 1] === a) {
            return;
          }
        }
        l.push(c, a);
      }
    };
    Kc = function(c, a) {
      if (q) {
        la(c, "focusin", a);
      } else if (A) {
        la(c, "DOMFocusIn", a, !1);
      } else {
        for (var l = fa, h = 0, x = l.length; h < x; ++h) {
          if (l[h] === c && l[h + 1] === a) {
            l.splice(h, 2);
            l.length || (X ? da = Ac(da) : (P || Q) && Ha(J, "focus", ra, !0));
            break;
          }
        }
      }
    };
    var q = 6 <= z || Ua || 52 <= R || 15 <= wa || 534 <= sa || 5 <= Ba || pc || 4 <= Va || 4 <= Fb || 11.6 <= T(8) || 12 <= T(9), A = 8 <= F || wa || Va || Fb || sa || Ba, P = 8 > F, X = 6 > z, Q = 52 > R || Eb;
    if (Q || P) {
      var fa = [];
      var ra = function(c) {
        var a = fa, l = P ? J.activeElement : c.target;
        if (P) {
          var h = c;
          c = {type:"focusin", target:l, preventDefault:function() {
            h.preventDefault();
          }, stopPropagation:function() {
            h.stopPropagation();
          }};
        }
        for (var x = 0, ha = a.length; x < ha; ++x) {
          var ba = a[x];
          (ba === l || gb(ba, l)) && a[x + 1].call(ba, c);
        }
      };
    } else if (X) {
      fa = [];
      var da, Ja, na, f = function() {
        na = S.onerror;
        S.onerror = k;
        var c = J.activeElement;
        if (Ja !== c) {
          Ja = c;
          for (var a = fa, l, h = 0, x = a.length; h < x; ++h) {
            l = a[h], (l === c || gb(l, c)) && a[h + 1].apply(l, [{target:c}]);
          }
        }
        S.onerror = na;
        na = v;
      }, k = function() {
        S.onerror = na;
        na = Ja = v;
        return !0;
      };
    }
    ec = function(c) {
      Ra && Ra.push(c);
    };
    var w = 60 > R || Eb, r, y, u;
    if (89 <= R || 89 <= wa || Wb && 79 <= qc || ea && (ea("(forced-colors:none)").matches || ea("(forced-colors:active)").matches)) {
      gc = !0, M("(forced-colors:active)", function(c) {
        r = c.matches;
        Ia = N();
        Y(Ra, Ia);
      });
    } else if (10 <= z || Ua || Wb && qc) {
      gc = !0, M("(-ms-high-contrast:black-on-white)", function(c) {
        r = y = c.matches;
        Ia !== N() && (Ia = N(), Y(Ra, Ia));
      }), M("(-ms-high-contrast:white-on-black)", function(c) {
        r = u = c.matches;
        Ia !== N() && (Ia = N(), Y(Ra, Ia));
      }), M("(-ms-high-contrast:active)", function(c) {
        r = c.matches;
        Ia !== N() && (Ia = N(), Y(Ra, Ia));
      });
    } else if (Wb && (z || R && 0 <= Ka.conpare(La, "1.8.1") || Eb)) {
      var H = function() {
        function c(h, x) {
          if (x && "transparent" === h) {
            return 382.5;
          }
          if ("#" === h.charAt(0)) {
            return parseInt("0x" + h.substr(1, 2), 16) + parseInt("0x" + h.substr(3, 2), 16) + parseInt("0x" + h.substr(5, 2), 16);
          }
          var ha = h.split("(")[1].split(",");
          return Ya(ha[0]) + Ya(ha[1]) + Ya(ha[2]);
        }
        var a = J.defaultView;
        var l = a ? a.getComputedStyle(U, null) : U.currentStyle;
        a = (l && l.color || "").split(" ").join("");
        l = (l && l.backgroundColor || "").split(" ").join("");
        a && (r = "#123456" !== a && "rgb(18,52,86)" !== a, y = c(a) < c(l, !0), u = c(a) > c(l, !0), Ia !== N() && (Ia = N(), Y(Ra, Ia, w)));
      };
      sb(function(c) {
        if (c) {
          return Ta(U, "color", "#123456"), Ta(U, "backgroundColor", "#123456"), w ? (H(), Ra = v) : Kb(H), H = v, !0;
        }
      });
    } else {
      Ra = N = v;
    }
    Ab = function(c) {
      B.push(c);
    };
    var B = [], O = 7.5 <= F && 8 > F;
    O && function() {
      for (var c = J.images, a = c.length, l; a;) {
        l = c[--a], l.J = l.src, ab(l, "src");
      }
    }();
    Pa(function() {
      function c() {
        h ? (x = l[--h], O && hb(x, "src", x.J), uc(a, O ? x.J : x.src)) : Ab = B = v;
      }
      function a(ba) {
        ca(B, {G:x, H:ba}, !h);
        c();
      }
      var l = J.images || ob("img"), h = l.length;
      if (12 > F || 532 > sa) {
        c();
      } else {
        for (; h;) {
          var x = l[--h];
          var ha = 9 > z ? x.complete : 0 <= x.naturalWidth ? x.naturalWidth : x.width;
          Y(B, {G:x, H:ha}, !h);
        }
        Ab = B = v;
      }
    });
    dc = function(c) {
      t.push(c);
    };
    var t = [], D;
    la(S, "resize", ka);
    pb(function() {
      D && nc(D);
      Ha(S, "resize", ka);
    });
    rb = function(c) {
      K.push(c);
    };
    var K = [], Z = 1 > R || 1.2 <= R && 1.8 > R || 7.2 >= F, pa;
    Z ? Kb(function() {
      var c = S.pageYOffset;
      pa !== c && (pa = c, qa({type:"scroll", cancelable:!1, stopPropagation:cb, preventDefault:cb}));
    }) : la(S, "scroll", qa, {passive:!0});
    pb(function() {
      Z || Ha(S, "scroll", qa, {passive:!0});
    });
    Lc = function(c, a) {
      if (xa) {
        la(c, "wheel", a, {passive:!1});
      } else if (Ca) {
        la(c, "mousewheel", a, !1);
      } else if (g) {
        la(c, "MozMousePixelScroll", a, !1);
      } else if (p) {
        for (var l = E, h = 0, x = l.length; h < x; ++h) {
          if (l[h] === c && l[h + 1] === a) {
            return;
          }
        }
        l.length || la(J, "DOMMouseScroll", I, !1);
        l.push(c, a);
      }
    };
    Mc = function(c, a) {
      if (xa) {
        Ha(c, "wheel", a, {passive:!1});
      } else if (Ca) {
        Ha(c, "mousewheel", a, !1);
      } else if (g) {
        Ha(c, "MozMousePixelScroll", a, !1);
      } else if (p) {
        for (var l = E, h = 0, x = l.length; h < x; ++h) {
          if (l[h] === c && l[h + 1] === a) {
            l.splice(h, 2);
            l.length || Ha(J, "DOMMouseScroll", I, !1);
            break;
          }
        }
      }
    };
    var xa = 9 <= z || Ua || 17 <= R || 31 <= wa || 537.7 <= sa, Ca = 6 <= z || Ua || 9 <= F || wa || 522 <= sa || Ba, g = xb, p = R && 0 <= Ka.conpare(La, "0.9.7") && !xb;
    if (p) {
      var E = [], I = function(c) {
        for (var a = E, l = c.target, h, x = 0, ha = a.length; x < ha; ++x) {
          h = a[x], gb(h, l) && a[x + 1].call(h, c);
        }
      };
    }
  })();
  (function() {
    function N(f) {
      if (6 !== f && 6 <= wa && 32 > wa) {
        return !1;
      }
      switch(f) {
        case 1:
          return G;
        case 2:
          return !!ja;
        case 3:
          return !!aa;
        case 4:
          return !!b;
        case 5:
          return m;
        case 6:
          return e && !ya;
      }
      return !1;
    }
    function L(f) {
      d(f);
      Ja && !f && Aa(Ja);
      d = n = q = A = P = X = ra = da = na = Ja = v;
    }
    function M(f) {
      J.fonts.load('1.6em "' + f + '"').then(function() {
        var k;
        (k = Y(n)) ? ia(L, k) : ca(!0);
      }, function() {
        eb !== v ? W(eb) : Yb(W);
      });
    }
    function ca(f) {
      f && (fa = Sa());
      (f = Y(n, Q)) ? L(f) : (f = Q, J.hidden || J.msHidden || J.mozHidden || J.webkitHidden ? (fa = Sa(), f = !1) : f = f < Sa() - fa, f ? ra ? V() : ka ? L(0) : eb !== v ? W(eb) : Yb(W) : ia(ca));
    }
    function Y(f) {
      var k = 0, w = -1, r = U && [];
      if (!na) {
        var y = -1;
        var u;
        da = Ga(va, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, ea);
        for (na = []; u = C[++y];) {
          Ta(da, "fontFamily", u), na[y] = da.offsetWidth;
        }
      }
      for (5 > z ? da || (da = Ga(va, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, ea)) : va.appendChild(da); y = C[++w];) {
        Ta(da, "fontFamily", '"' + f + '",' + y);
        var H = da.offsetWidth;
        if (r) {
          r[w] = H;
        } else {
          if (H !== na[w]) {
            k = 1;
            break;
          }
        }
      }
      if (r && H === r[0] && H === r[1]) {
        for (k = 1, w = -1; H = na[++w];) {
          if (H === r[0] && H === r[1] && H === r[2]) {
            k = 0;
            break;
          }
        }
      }
      !z && k && P && (da.textContent = P, H = da.offsetWidth, da.textContent = X, k = H === da.offsetWidth ? 2 : 1, da.textContent = ea);
      Aa(da);
      5 > z && (da = v);
      return k;
    }
    function W(f) {
      f ? (ra = !0, V()) : L(0);
    }
    function V() {
      if (q) {
        for (; q.length;) {
          var f = q.shift(), k = q.shift();
          if (N(f)) {
            Ja = yc(k, oa, A, Ja);
            return;
          }
        }
      }
      L(0);
    }
    function oa(f) {
      f ? ca(!0) : V();
    }
    Yb = !1 === eb ? function(f) {
      ia(f, !1);
    } : function(f) {
      function k(y) {
        r = yb(r);
        eb = y;
        w.onload = w.onerror = cb;
        ia(f, y);
      }
      if (eb !== v) {
        ia(f, eb);
      } else {
        var w = new Image(), r = ia(function() {
          r && k(!1);
        });
        w.onerror = function() {
          k(!1);
        };
        w.onload = function() {
          k(1 === w.width * w.height);
        };
        w.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > z && Pa(function() {
      var f = Ga(va, "div");
      zb(f, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      rc = 1 < f.offsetHeight;
      Aa(f);
    });
    uc = function(f, k) {
      function w() {
        y || !u || r.complete ? (ia(f, !!r.width), r.onerror = r.onload = cb, r = f = v) : (--u, ia(w));
      }
      var r = new Image(), y, u = 99;
      r.onerror = function() {
        y = !0;
      };
      r.onload = function() {
        y = !0;
      };
      r.src = k;
      ia(w);
    };
    vc = function(f, k, w, r, y, u, H) {
      d = f;
      n = k;
      q = w;
      A = r;
      P = y;
      X = u;
      Q = H || qa;
      T(10) ? ia(L, 1) : Uc ? ia(L, 0) : !J.fonts || 603 > sa || 11 > Ba ? ca(!0) : M(n);
    };
    var ka = 9 > z || 2 > wa || 12 > F, ya = 6 > wa || F || 530 > sa, qa = 5E3, ea = "mmmmmmmmmmlliiiiiiiii", U = 7 > Ba || sa && 0 >= Ka.conpare(La, "536.11"), G = 14 <= Ua || 36 <= wa || 39 <= R || 602 <= sa || 10 <= Ba, ja = 6 <= wa || R && 0 <= Ka.conpare(La, "1.9.2") || 525 <= sa || 3.2 <= Ba || 4.4 <= Va || 11.1 <= F || Ua || 9 <= T(2) || 10 <= T(3), aa = 2 <= wa || xb || 525 <= sa || 3.2 <= Ba || 2.2 <= Va || 10 <= F || Ua || 9 <= T(2) || 10 <= T(3), b = aa, e = 525 <= sa || 3.2 <= Ba || 38 > 
    wa || 3 <= Va || 12 <= F, m = 4 <= T(2) || 10 <= T(3), C = wa ? ["sans-serif", "serif"] : ["monospace", "sans-serif", "serif"], d, n, q, A, P, X, Q, fa, ra, da, Ja, na;
  })();
  (function() {
    function N(d) {
      var n = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== d) {
        var q = Dc("ico"), A = 0, P = q.length;
        if (P) {
          if (1 === d) {
            for (; A < P; ++A) {
              d = q[A];
              var X = Hc(d);
              if (X = n[X]) {
                d.innerHTML = X;
              }
            }
          } else {
            C && !m && (S.VectorIconCompat = bz, Ib(ta + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Jb(ta + "js/vector-icon-svg-fallback.js");
        return [n, q, Ga, m];
      }
      bz = !1;
    }
    Ab(function(d) {
      var n = d.G;
      d = d.H;
      var q = Oa(n);
      !Wa(q, "aBodyRoot") && d ? ib(q, "js-image-has-been-loaded") : d || Ea(n, "alt") || "lazy" === Ea(n, "loading") || Ta(n, "display", "none");
    });
    Za && (Qa.splice(1, 0, function() {
      for (var d = Ec(lb, "RichLink-sep"), n, q, A, P, X, Q; n = d.shift();) {
        for (n = $a(n); q = n.shift();) {
          if ("A" === Ma(q) && !q.innerHTML) {
            for (; A = n.shift();) {
              if (1 === A.nodeType) {
                if ("A" === Ma(A)) {
                  break;
                }
                for (P = fb(A, "A"); X = P.shift();) {
                  for (Q = $a(X); Q.length;) {
                    X.parentNode.insertBefore(Q.shift(), X);
                  }
                  Aa(X);
                }
              }
              q.appendChild(A);
            }
          }
        }
      }
    }), Qa.splice(2, 0, function() {
      for (var d = ob("A"), n, q; n = d.shift();) {
        "A" !== Ma(n) || n.innerHTML || (q = n.nextSibling && n.nextSibling.firstChild) && q.href === n.href && Aa(n);
      }
    }));
    5.5 <= z && 8 > z && Ra && ec(function(d) {
      for (var n = fb(va, "a"), q = n.length, A = 0; A < q; ++A) {
        n[A].hideFocus = !d;
      }
    });
    if (!gc && Ra) {
      var L, M = function() {
        L = Ga(db, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + Gb + "hc/" + Xb});
        (sc || 5.5 <= z && 9 > z && rc) && ib(va, "js-canuse-css-rotate-when-forced-colors-mode");
        M = v;
      };
      ec(function(d) {
        d && !L ? M() : L && (d ? db.appendChild(L) : Aa(L));
      });
    }
    F && Pa(function() {
      for (var d = fb(va, "a"), n = d.length, q = 0, A; q < n; ++q) {
        A = d[q], "-1" === Ea(A, "tabIndex") ? ab(A, "tabIndex") : Ea(A, "href") && hb(A, "tabIndex", "0");
      }
      d = fb(va, "input");
      q = 0;
      for (n = d.length; q < n; ++q) {
        A = d[q], "hidden" === Ea(A, "type") && ab(A, "tabIndex");
      }
    });
    if (R && 0 > Ka.conpare(La, "0.9.5")) {
      zc = !0;
      var ca, Y, W, V, oa;
      Pa(function() {
        la(J, "keydown", ka);
        la(J, "keyup", ya);
        fc(va, qa);
        Za || (la(S, "blur", aa), la(va, "click", ja));
      });
      var ka = Za ? function(d) {
        16 === d.keyCode ? ca = !0 : 9 === d.keyCode && V && ea(V, !0) && (V.blur && V.blur(), d.stopPropagation(), d.preventDefault(), ia(G));
      } : function(d) {
        16 === d.keyCode ? ca = !0 : 9 === d.keyCode && (Y = Sa());
      }, ya = function(d) {
        16 === d.keyCode && (ca = !1);
      }, qa = Za ? function(d) {
        V = d.target;
      } : function(d) {
        var n = d.target;
        if (V === n) {
          W = v;
        } else if (W) {
          n === W ? (d.stopPropagation(), G(!0)) : (n.blur && e(n), d.preventDefault(), G());
        } else {
          if (d = V) {
            V = v, e(d);
          }
          W = n;
          G(!0);
        }
      }, ea = function(d, n) {
        var q = Sa(), A = va, P = "nextSibling", X = "firstChild";
        ca && (n || q - 99 < Y && Y <= q) && (P = "previousSibling", X = "lastChild");
        for (W = v; d !== A;) {
          if (Q) {
            q = d;
            var Q = !1;
          } else {
            q = d[P];
          }
          if (q) {
            if (1 === q.nodeType) {
              if (U(q)) {
                return W = q, !0;
              }
              d = (Q = q[X]) || q;
            } else {
              d = q;
            }
          } else {
            d = d.parentNode;
          }
        }
      }, U = function(d, n) {
        function q() {
          return "-1" !== Ea(d, "tab-index");
        }
        function A() {
          return 0 < d.offsetHeight * d.offsetWidth;
        }
        if (d.focus) {
          var P;
          switch({A:n ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ma(d)]) {
            case 1:
              if (qb(d, "href") && q() && A()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ea(d, "type") && q() && !qb(d, "disabled") && A()) {
                return !0;
              }
              break;
            case 3:
              if (q() && !qb(d, "disabled") && A()) {
                return !0;
              }
              break;
            default:
              if ((P = Ea(d, "tab-index")) && "-1" !== P && A()) {
                return !0;
              }
          }
        }
      }, G = function(d) {
        oa = 0;
        W && (Za || la(W, "blur", b), V = W, W = v, d || V.focus());
      };
      if (!Za) {
        var ja = function(d) {
          var n = d.target;
          if (V && U(n, !0)) {
            var q = V;
            V = v;
            e(q);
            W = n;
            d.stopPropagation();
            d.preventDefault();
            G();
          }
        }, aa = function(d) {
          d.target === J && (W = v);
        }, b = function(d) {
          d = d.target;
          Ha(d, "blur", b);
          V === d && ea(d) && (oa || (oa = ia(G)));
        }, e = function(d) {
          Ha(d, "blur", b);
          d.blur();
        };
      }
    }
    sb(function(d) {
      if (d) {
        return vc(N, "myIconFont", [1, ta + "iconfont/woff2.css", 2, ta + "iconfont/woff.css", 3, ta + "iconfont/ttf.css", 4, ta + "iconfont/otf.css", 5, ta + "iconfont/eot.css", 6, ta + "iconfont/svg.css"], "myIconFont-testCssReady", "twitter", "\ud83d\udc24", 5E3), N = v, !0;
      }
    });
    var m = 8 <= T(8) && 9 > F, C = 9 <= z || Ua || 1.8 <= R || 8 <= T(8) || 9 <= T(9) || 3 <= T(21) || Eb || Qc || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || Ba;
  })();
  (function() {
    function N(g) {
      var p = A.length, E, I, c, a;
      if (13 === (g.keyCode || g.V) || g.type !== P) {
        for (; p;) {
          var l = A[--p];
          if (l.F === this || l.u === this) {
            p = l.F;
            var h = E = l.u;
            if (l.P) {
              if (Ta(p, "width", l.$), p.src = l.Z, Mb(h, l.T), p = l.L) {
                zb(p, l.S), cc(p, "js-captioned-thumbnail__large");
              }
            } else {
              if (I = l.N) {
                delete l.N;
                if (l.M) {
                  for (; E = Oa(E);) {
                    if (!Wa(E, "caption")) {
                      var x = Ma(E);
                      if ("DIV" === x || "P" === x || "BLOCKQUOT" === x || "LI" === x || "DD" === x || "TD" === x || "TH" === x || "FORM" === x || "PRE" === x) {
                        break;
                      }
                    }
                  }
                  E = (E.offsetWidth | 0) - 4;
                  1600 < E && (E = 1600);
                  if (2 === l.M) {
                    I = I.split("=");
                    x = I.length;
                    if (c = I[x - 1]) {
                      (a = Ya(c.substr(1))) && c === "s" + a ? I[x - 1] = "w" + E : I[x] = "w" + E;
                    }
                    I = I.join("=");
                  } else {
                    I = I.split("/");
                    x = I.length;
                    if (c = I[x - 2]) {
                      (a = Ya(c.substr(1))) && c === "s" + a ? I[x - 2] = "w" + E : I.splice(x - 1, 0, "w" + E);
                    }
                    I = I.join("/");
                  }
                }
                l.X = I;
              }
              l.T = Ic(h);
              ib(h, "js-pica-thumbnail__large");
              Ta(p, "width", "");
              p.src = l.X;
              if (p = l.L) {
                zb(p, ""), ib(p, "js-captioned-thumbnail__large");
              }
            }
            l.P = !l.P;
            break;
          }
        }
        L(g);
      }
    }
    function L(g) {
      g.preventDefault();
      g.stopPropagation();
    }
    function M(g) {
      var p = H;
      if (Bb) {
        if (B && !p) {
          if (Sa() < B) {
            return;
          }
          B = v;
        }
        7 === g ? O = 0 : (O && (O = yb(O)), y = Vb());
        p ? (H = ca(v, p[0], p[1])) || (B = Sa() + 99) : ca();
      } else {
        H = v;
      }
    }
    function ca(g, p, E) {
      function I(Xa) {
        h = Xa;
        if (w) {
          x = w + ":translate" + (u ? "3D(0," : "(0,") + Xa + (u ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Xa) {
          if (ra || da) {
            var hc = na.offsetWidth;
          }
          x = ra ? "position:fixed;width:" + hc + "px;top:" + (Xa - c + ma) + "px" : Ja ? "top:" + Xa + "px" : "position:absolute;top:" + Xa + "px;left:0";
          if (da && x) {
            var Cb = 8 > z ? " " : ",";
            x += ";clip:rect(" + (0 > Xa ? -Xa + "px" + Cb + hc + "px" + Cb + Fa : "0" + Cb + hc + "px" + Cb + (Xa + Fa < Nb ? Fa : Nb - Xa)) + "px" + Cb + "0)";
          }
        }
      }
      var c = y, a = f, l = na.offsetTop === a.offsetTop, h = 0, x = "", ha = !0;
      if (l) {
        for (var ba = 0, ma = 0, za = a; za && za !== va;) {
          ma += za.offsetTop, za = za.offsetParent;
        }
        h = r;
        var ic = 11 > z ? kb.offsetHeight : S.innerHeight, jc = a.offsetHeight, Fa = k.offsetHeight, Nb = Fa < jc ? jc : Fa, jb = c, tb = jb + ic, Ob = ma, Pb = Ob + Nb, Nc = ma + h, Wc = Nc + Fa;
        a = jb < Ob ? Ob : jb;
        za = Pb < tb ? Pb : tb;
        var ub = za - a;
        jb = Pb <= jb;
        tb = tb <= Ob;
        if (p !== v) {
          ha = ma + p;
          g = ha + E;
          var vb;
          if (jb || tb) {
            return ic <= E ? vb = ma : vb = jb ? Pb - E : ma + E - ic, B = v, S.scroll(0, vb), H;
          }
          Fa <= ub ? ba = 3 : E <= ub ? Fa - p <= ub ? ba = 2 : a <= ha && g <= za ? a < ma + h && (ba = 4) : ba = a <= ha && ha <= za ? 5 : a <= g && g <= za ? 4 : g < a ? 4 : 5 : ba = 4;
          ha = !1;
        } else {
          g !== v ? Fa <= ub ? (ba = 7, ha = !1) : (h -= 60 * g, ba = za - ma - Fa, vb = a - ma, h < ba ? h = ba : vb < h && (h = vb), ba = 6) : jc <= Fa || (jb ? ba = 1 : tb || (Fa <= ub ? ba = 3 : a < Nc ? ba = 3 : Wc < za ? ba = 2 : c < ma + Fa - ub || (ba = 2)));
        }
        switch(ba) {
          case 0:
            I(0);
            break;
          case 1:
            I(Nb - Fa);
            break;
          case 2:
            I(za - ma - Fa);
            break;
          case 3:
            I(a - ma);
            break;
          case 4:
            I(a - ma - p);
            break;
          case 5:
            I(za - ma - (p + E));
          case 6:
            I(h);
        }
      }
      zb(k, x);
      r = h;
      return l && ha;
    }
    function Y(g) {
      if (Bb && (R && (y = Vb()), this !== g.target)) {
        var p = Sb(g.deltaY) ? g.deltaY : Sb(g.wheelDeltaY) ? g.wheelDeltaY / 120 : Sb(g.wheelDelta) ? g.wheelDelta / -120 : g.detail / ("MozMousePixelScroll" === g.type ? 45 : 1);
        p && ca(9 >= p ? -9 >= p ? -3 : p : 3) && (g.preventDefault(), g.stopPropagation());
      }
    }
    function W(g) {
      if (Bb) {
        var p = R && 0 > Ka.conpare(La, "0.9.4"), E = g.target;
        g = k;
        var I = 0;
        if (gb(g, E)) {
          if (w) {
            p = E.getBoundingClientRect();
            var c = p.bottom - p.top;
            I = p.top - g.getBoundingClientRect().top | 0;
          } else {
            c = E.offsetHeight;
            var a = E;
            if (p) {
              for (var l = []; a && (R ? gb(g, a) : g !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && l.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = E;
            }
            for (; a && (R ? gb(g, a) : g !== a);) {
              if (p) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, I += a.offsetHeight || 0;
                }
                a = a.parentNode;
              } else {
                I += a.offsetTop, a = a.offsetParent;
              }
            }
          }
          fa ? (H = [I, c], O && yb(O), O = ia(M, 7, 1 > R || 536 > sa || 14 > wa ? 500 : 0)) : (y = Vb(), ca(v, I, c));
        }
      }
    }
    function V() {
      t.call(D);
    }
    function oa() {
      J.fullscreenElement || J.fullscreen || J.webkitIsFullscreen || J.msFullscreenElement || S.fullScreen ? (hb(D, "id", "blog2slide-root"), pa[1].parentNode.insertBefore(K, pa[1]), ka(), J.onkeydown = ya) : Z && (Aa(K), ab(D, "id"), ab(Z, "id"), Z = J.onkeydown = v);
    }
    function ka() {
      Z && ab(Z, "id");
      xa = 0 < xa ? Ca < xa ? Ca : xa : 0;
      Z = pa[xa];
      hb(Z, "id", "blog2slide-current");
    }
    function ya(g) {
      if ("ArrowRight" === g.key || 39 === g.keyCode) {
        ++xa, ka();
      } else if ("ArrowLeft" === g.key || 37 === g.keyCode) {
        --xa, ka();
      }
    }
    yc = function(g, p, E, I) {
      I = I || Ga(db, "link", {type:"text/css", rel:"stylesheet"});
      m && (b = nb(E) || Ga(va, "div", {"aria-hidden":"true", className:E, id:E}));
      e(I, g, p);
      return I;
    };
    var qa = R && 0 > Ka.conpare(La, "0.9.1"), ea = 11 <= z || Ua || 9 <= F && 9.5 > F, U = 11 > z, G = 7.2 <= F && 7.5 > F, ja = 26 > R && !qa || 19 > wa || 4.3 > Va || 2 > Fb || 536 > sa || 6 > Ba || 7 <= F && 9 > F && !G, aa = !qa && !ea && !U && !G && !ja, b, e = aa ? function(g, p, E) {
      g.onload = bz;
      g.onerror = function() {
        E(!1);
        g.onload = g.onerror = null;
      };
      g.href = p;
      function bz() {
        E(!0);
        g.onload = g.onerror = null;
      }
      bz = !1;
    } : ea ? function(g, p, E) {
      g.onload = function() {
        E(m());
        Aa(b);
        g.onload = b = null;
      };
      g.href = p;
    } : U ? function(g, p, E) {
      g.onreadystatechange = function() {
        "complete" === g.readyState && (E(m()), g.V = cb, Aa(b), b = null);
      };
      g.href = p;
    } : ja || G ? function(g, p, E) {
      function I() {
        l = Sa() + 999;
        ia(c, 0, 99);
        ja ? a.onerror = null : a.removeEventListener("load", I, !1);
        a = null;
        g.href = p;
      }
      function c() {
        m() ? (Aa(b), E(!0), b = null) : Sa() < l ? ia(c, 0, 99) : (E(!1), Aa(b), b = null);
      }
      var a = new Image(), l;
      ja ? a.onerror = I : a.addEventListener("load", I, !1);
      a.src = p;
    } : function(g, p, E) {
      ia(E, !1);
    }, m = !aa && !qa && function() {
      return 20 !== b.offsetWidth;
    };
    xc = R && 0 >= Ka.conpare(La, "0.9");
    Hb = !(7.2 > F || xc);
    Ib = function(g) {
      C ? J.write('<script src="' + g + '">\x3c/script>') : Qa || n.length ? n.push(g) : q(g);
    };
    Jb = function() {
      C || q(n.shift());
    };
    var C = !Hb, d = Hb && 7.5 > F;
    if (!C) {
      var n = [];
      d && (wc = !0);
      Pa(function() {
        q(n.shift());
      });
      var q = function(g) {
        g && (d ? kc[0].src = g : Ga(db, "script", {src:g}));
      };
    }
    var A = [], P = 5.5 <= z && 8 > z ? "keypress" : "keydown";
    if (!oc) {
      var X = Na.transition !== v || Na["-o-transition"] !== v || Na["-moz-transition"] !== v || Na["-webkit-transition"] !== v;
      Ab(function(g) {
        if (g.H && lb) {
          g = g.G;
          var p = Oa(g), E = "", I;
          if ("A" === Ma(p) && 1 === Fc(p).length) {
            var c = Ea(p, "href");
            var a = c.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((I = 0 < c.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              la(p, P, N);
              la(g, "click", N);
              la(p, "click", L);
              X && (E = g.naturalWidth + "px", Ta(g, "width", E));
              ib(p, "js-pica-thumbnail");
              for (a = p; a = Oa(a);) {
                if (Wa(a, "caption")) {
                  ib(a, "js-captioned-thumbnail");
                  var l = a;
                  var h = Jc(l);
                  break;
                }
              }
              A.push({u:p, L:l, S:h, Z:g.src, $:E, N:c, F:g, M:I ? 0 < c.indexOf("/img/a/") ? 2 : 3 : 0 < c.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      pb(function(g, p) {
        for (g = -1; p = A[++g];) {
          Ha(p.u, P, N), Ha(p.F, "click", N), Ha(p.u, "click", L);
        }
      });
    }
    var Q = ["jsSidebarFixer1", "jsSidebarFixer2"], fa = !(9 > z || F || 1 <= R && 1.3 > R || zc), ra = !(5 > Ba || 2.2 > Va || 6 > T(12) || Da(30) && 534 > sa || Da(32) || 7 > z || 9 > F || 1 > R), da = ra || 6 === z || 1 > R, Ja = 7.5 > F, na, f, k, w = Vc && sc, r = 0, y = 0, u, H, B, O;
    Oc || oc || (sb(function(g) {
      if (g) {
        if (!lb) {
          return !0;
        }
        g = -1;
        var p;
        na = nb("jsSide");
        f = lb;
        if (!na) {
          return !0;
        }
        rb(M);
        dc(M);
        k = Lb(ac(na), "div", {id:"jsSidebarFixer"});
        for (fc(k, W); 1 < $a(na).length;) {
          k.appendChild($a(na)[1]);
        }
        for (; p = Q[++g];) {
          Lc(nb(p), Y);
        }
        z || Ua || 2 > wa || (u = Na.perspective !== v || Na.MozPerspective !== v || Na["-webkit-perspective"] !== v);
        M();
        return !0;
      }
    }), pb(function() {
      for (var g = -1, p; p = Q[++g];) {
        Mc(nb(p), Y);
      }
      Kc(k, W);
    }));
    Pa(function() {
      function g(l, h, x, ha) {
        var ba = ha ? "div" : "cite";
        if (0 === h.indexOf("urn:isbn:")) {
          h = h.substr(9).toUpperCase().split("-").join("");
          if (13 === h.length) {
            h = h.toString().slice(3, -1);
            for (var ma = 0, za = 0; 9 > za; za++) {
              ma += (h.charAt(za) - 0) * (10 - za);
            }
            ma = (11 - ma % 11) % 11;
            ma = 10 === ma ? "X" : ma.toString();
            h += ma;
          }
          10 === h.length && (h = "//www.amazon.co.jp/exec/obidos/ASIN/" + h + "/itozyun-22/ref=nosim/");
        }
        x = ha ? Lb(ac(E), ba, {className:x}) : Ga(E, ba, {className:x});
        Ga(x, "a", 0 === h.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:h} : {href:h}, l);
      }
      if (lb) {
        for (var p = fb(lb, "blockquote"), E, I = -1, c, a; E = p[++I];) {
          c = Ea(E, "title"), a = Ea(E, "cite"), c && a ? (ab(E, "title"), g(c, a, "js-generated-link-in-blockquote", !0)) : a && (ab(E, "cite"), g(S.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var t, D, K, Z, pa, xa, Ca;
    Pa(function() {
      var g = nb("blog2slide-start");
      if (g) {
        var p = J.onfullscreenchange !== v ? "f" : J.onmozfullscreenchange !== v ? "mozF" : J.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        t = g.requestFullscreen || g.webkitRequestFullscreen || g.mozRequestFullscreen || g.msRequestFullscreen;
        0 !== p || t ? (g.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', la(g.firstChild, "click", V), g = Oa(g), D = Oa(g), pa = fb(g, "section"), K = J.createElement("h1"), K.innerHTML = fb(va, "h1")[0].innerHTML, Ca = pa.length, pa.splice(0, 0, K), 0 !== p ? la(J, p + "ullscreenchange", oa) : z ? la(J, "MSFullscreenChange", oa, !1) : dc(oa)) : Aa(g);
      }
    });
  })();
  var wb, Qb = !mc || .9 > R || 8 > F || 5.5 > z, bb;
  (function() {
    function N(f) {
      return f === "" + f;
    }
    function L(f, k) {
      return Qb ? new G(f, k) : new mc(f, k);
    }
    function M(f, k, w, r) {
      if (U() - ja < m && !r) {
        return f(k);
      }
      ia(ca, {U:f, Y:k});
    }
    function ca(f) {
      ja = U();
      f.U(f.Y);
    }
    function Y(f, k) {
      f && wb[f] || (f = C.test(k) ? "default-markup" : "default-code");
      var w = !!wb[f];
      w && M(P, f, 0, !0);
      return w;
    }
    function W() {
      function f(Ca, g, p) {
        g && (k.h = k.h || [], k.h.push({l:k, B:k.B, O:1, s:H, D:Ca, o:g, m:p, R:{}, v:0}));
      }
      var k = aa, w = k.m, r = w[0], y = w[2], u = k.D, H = k.s, B = k.aa.shift(), O = k.R;
      if (B) {
        var t = O[B], D;
        if (!(0 <= t)) {
          if (D = r[B.charAt(0)]) {
            var K = B.match(D[1]);
            t = D[0];
          } else {
            for (t = 0, r = -1; D = y[++r];) {
              if (K = B.match(D[1])) {
                t = D[0];
                break;
              }
            }
          }
          !(D = N(t)) || K && N(K[1]) || (D = !1, t = 11);
          D || (O[B] = t);
        }
        y = k.v;
        O = B.length;
        k.v += O;
        if (D) {
          D = K[1];
          r = B.indexOf(D);
          var Z = D.length, pa = r + Z;
          K[2] && (pa = O - K[2].length, r = pa - Z);
          f(u + y, B.substr(0, r), w);
          if (Z && Y(t, D)) {
            f(u + y + r, D);
            var xa = !0;
          }
          f(u + y + pa, B.substr(pa), w);
          k.h && k.h.length && (aa = k.h.shift());
          xa || (aa !== k ? M(q, v, 2) : M(W, v, 2));
        } else {
          H.push(u + y, t), M(W, v, 2);
        }
      } else {
        k.l ? (aa = k.l.h.shift()) ? M(q, v, 2) : (aa = k.l, M(W, v, 2)) : M(fa, v, 2);
      }
    }
    function V(f) {
      if (A.length) {
        var k = A.shift(), w = qa[k];
        if (w.pop) {
          qa[k] = L(w[0], w[1]);
        } else if (N(w)) {
          qa[k] = L(w);
        } else {
          return V(f);
        }
        M(V, f, 1);
      } else {
        M(P, f);
      }
    }
    function oa(f) {
      for (var k, w = f.firstChild; w; w = w.nextSibling) {
        var r = w.nodeType;
        k = 1 === r ? k ? f : w : 3 === r ? d.test(w.nodeValue) ? f : k : k;
      }
      return k === f ? v : k;
    }
    wb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ka = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], ya = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
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
    ea = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), U = Db.now || function() {
      return +new Db();
    }, G, ja, aa, b, e, m = 5 > z ? 60 : 5.5 > z ? 0 : Qb ? 20 : 10, C, d;
    bb = [function(f) {
      S.RegExpCompat = G = f;
    }, function() {
      C = L("^\\s*<");
      d = L("\\S");
    }];
    Qb || (bb[1](), bb = v);
    var n = function() {
      var f = aa, k = f.W, w = X(f.B, f.O), r = f.o = w.o;
      f.I = w.I;
      Y(k, r) || (aa = v, M(na, v, 0, !0));
    };
    var q = function() {
      var f = aa;
      f.aa = f.o.match(f.m[1]) || [];
      f.s.push(f.D, 0);
      M(W, v, 2);
    };
    var A = [];
    var P = function(f) {
      function k(t) {
        var D = t;
        0 <= t && (D = ya[t]);
        0 <= D[1] && (D[1] = w(D[1]));
        return D;
      }
      function w(t) {
        var D = t;
        return 0 <= t && (D = qa[t], !D.exec) ? (A.push(t), t) : D;
      }
      var r = aa, y = wb[f];
      N(y) && (y = wb[f] = wb[y]);
      var u = y[0];
      if (0 <= u) {
        u = ka[u];
        if (0 <= u["-num"]) {
          var H = u["-num"];
          delete u["-num"];
          for (var B = -1; 9 > B;) {
            u["" + ++B] = H;
          }
        }
        y[0] = u;
      }
      for (var O in u) {
        u[O] = k(u[O]);
      }
      y[1] = w(y[1]);
      u = y[2];
      B = 0;
      for (H = u.length; B < H; ++B) {
        u[B] = k(u[B]);
      }
      A.length ? M(V, f, 2) : (r.m ? r.l && (r.l.h[0].m = y) : r.m = y, M(q, v, 1));
    };
    var X = function(f, k) {
      function w(O) {
        var t = O.nodeType;
        if (1 === t) {
          if (!Wa(O, "nocode")) {
            for (t = O.firstChild; t; t = t.nextSibling) {
              w(t);
            }
            t = Ma(O);
            if ("BR" === t || "LI" === t) {
              r[H] = "\n", u[H << 1] = y++, u[H++ << 1 | 1] = O;
            }
          }
        } else if (3 === t || 4 === t) {
          if (t = O.nodeValue) {
            t = k ? t.split("\r\n").join("\n").split("\r").join("\n") : t.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), r[H] = t, u[H << 1] = y, y += t.length, u[H++ << 1 | 1] = O;
          }
        }
      }
      var r = [], y = 0, u = [], H = 0;
      w(f);
      var B = r.join("");
      "\n" === B.charAt(B.length - 1) && (B = B.substr(0, B.length - 1));
      return {o:B, I:u};
    };
    var Q = function(f, k, w) {
      function r(t) {
        var D = t.nodeType;
        if (1 === D && !Wa(t, "nocode")) {
          if ("BR" === Ma(t)) {
            y(t), t.parentNode && Aa(t);
          } else {
            for (t = t.firstChild; t; t = t.nextSibling) {
              r(t);
            }
          }
        } else if ((3 === D || 4 === D) && w) {
          var K = t.nodeValue, Z = K.indexOf("\r\n"), pa = 2;
          -1 === Z && (Z = K.indexOf("\n"), pa = 1);
          -1 === Z && (Z = K.indexOf("\r"));
          -1 !== Z && (D = K.substr(0, Z), t.nodeValue = D, (K = K.substr(Z + pa)) && bc(t, K), y(t), D || Aa(t));
        }
      }
      function y(t) {
        function D(Z, pa) {
          var xa = pa ? Z.cloneNode(!1) : Z, Ca = Z.parentNode;
          if (Ca) {
            Ca = D(Ca, 1);
            var g = Z.nextSibling;
            Ca.appendChild(xa);
            for (var p = g; p; p = g) {
              g = p.nextSibling, Ca.appendChild(p);
            }
          }
          return xa;
        }
        for (; !t.nextSibling;) {
          if (t = t.parentNode, !t) {
            return;
          }
        }
        t = D(t.nextSibling, 0);
        for (var K; (K = t.parentNode) && 1 === K.nodeType;) {
          t = K;
        }
        H.push(t);
      }
      for (var u = J.createElement("li"); f.firstChild;) {
        u.appendChild(f.firstChild);
      }
      for (var H = [u], B = 0; B < H.length; ++B) {
        r(H[B]);
      }
      if (k === (k | 0)) {
        if (10 <= k && 7.2 > F) {
          var O = J.createElement("ol");
          O.innerHTML = '<li value="' + k + '">' + u.innerHTML + "</li>";
          H[0] = O.firstChild;
        } else {
          hb(u, "value", k);
        }
      }
      O = Ga(f, "ol", {className:"linenums"});
      f = Math.max(0, k - 1 | 0) || 0;
      B = 0;
      for (k = H.length; B < k; ++B) {
        u = H[B], Mb(u, "L" + (B + f) % 10), u.firstChild || Gc(u, "\u00a0"), O.appendChild(u);
      }
    };
    var fa = function() {
      var f = aa, k = f.o, w = k.length, r = 0, y = f.I, u = y.length, H = 0, B = f.s, O = B.length, t = 0;
      B[O] = w;
      var D, K;
      for (K = D = 0; K < O;) {
        B[K] !== B[K + 2] ? (B[D++] = B[K++], B[D++] = B[K++]) : K += 2;
      }
      O = D;
      for (K = D = 0; K < O;) {
        var Z = B[K], pa = B[K + 1];
        for (K += 2; K + 2 <= O && B[K + 1] === pa;) {
          K += 2;
        }
        B[D++] = Z;
        B[D++] = pa;
      }
      B.length = D;
      f = f.B;
      O = "";
      f && (O = f.style.display, Ta(f, "display", "none"));
      for (; H < u;) {
        D = y[H + 2] || w;
        Z = B[t + 2] || w;
        K = Math.min(D, Z);
        pa = y[H + 1];
        var xa;
        if (1 !== pa.nodeType && (xa = k.substring(r, K))) {
          9 > z && (xa = xa.split("\n").join("\r"));
          var Ca = Lb(pa, "span", {className:ea[B[t + 1]]}, xa);
          Aa(pa);
          r < D && (y[H + 1] = bc(Ca, k.substring(K, D)));
        }
        r = K;
        r >= D && (H += 2);
        r >= Z && (t += 2);
      }
      f && Ta(f, "display", O);
      aa = v;
      M(na, v, 3, !0);
    };
    var ra = [], da;
    sb(function(f) {
      if (f) {
        f = [ob("pre"), ob("code"), ob("xmp")];
        for (var k = 0; k < f.length; ++k) {
          for (var w = 0, r = f[k].length; w < r; ++w) {
            Ja(f[k][w]);
          }
        }
        return !0;
      }
    });
    var Ja = function(f) {
      ra.push(f);
      da = ra.length;
      1 === da && (lc ? ia(lc, na) : bb ? bb.push(function() {
        ia(na);
      }) : ia(na));
    };
    var na = function() {
      function f(H, B) {
        return (H.split(B)[1] || "").split(" ")[0];
      }
      if (!aa) {
        da !== ra.length && e && e(da - ra.length, da);
        var k = ra.shift();
        if (k) {
          if (Wa(k, "prettyprint") && !Wa(k, "prettyprinted")) {
            for (var w = !1, r = k.parentNode; r !== va; r = r.parentNode) {
              var y = Ma(r);
              if (("PRE" === y || "XMP" === y || "CODE" === y) && Wa(r, "prettyprint")) {
                w = !0;
                break;
              }
            }
            if (!w) {
              w = k.className;
              ib(k, "prettyprinted");
              r = !1;
              if (!r) {
                r = f(w, "lang-") || f(w, "language-");
                var u;
                !r && (u = oa(k)) && "CODE" === Ma(u) && (r = f(u.className, "lang-") || f(u.className, "language-"));
              }
              y = Ma(k);
              "PRE" === y || "XMP" === y ? y = 1 : (y = k.currentStyle, u = J.defaultView, y = (y = y ? y.whiteSpace : u && u.getComputedStyle ? u.getComputedStyle(k, null).getPropertyValue("white-space") : 0) && "pre" === y.substr(0, 3));
              u = !1;
              (u = "true" === u || +u) || (u = f(w, "linenums:") || Wa(k, "linenums"), u = u.length ? +u : u);
              u && Q(k, u, y);
              aa = {W:r, B:k, ba:u, O:y, D:0, v:0, R:{}, s:[]};
              M(n);
              return;
            }
          }
          M(na, v, 0, !0);
        } else {
          b && b();
        }
      }
    };
    S.PR = {RegExpProxy:L, prettifyElement:Ja, registerCompleteHandler:function(f, k) {
      b = f;
      e = k;
    }};
  })();
  var kc = J.scripts || ob("script");
  var ta = kc[kc.length - 1].src.split("/");
  --ta.length;
  "js" === ta[ta.length - 1] && --ta.length;
  (ta = ta.join("/")) && (ta += "/");
  var Oc = Tc || "1" === Ea(va, "mob");
  Gb = (Oc ? "mb" : "pc") + "/";
  6.1 > Ba && (rb ? rb(Zb) : la(S, "scroll", Zb));
  pb(Bc);
  6.1 > Ba && (rb ? rb($b) : la(S, "scroll", $b));
  pb(Cc);
  10 > z && (11 !== Rc || 5 !== z) || (9 > F || 1 > R || !mb && !S.addEventListener ? J.write('<link href="' + ta + "css/" + Gb + Xb + '" rel="stylesheet"' + (8 > F ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > F || 1.5 > R || 534 > sa || 5 > Ba || 7 > wa || 3 > Va) && Pa(function() {
    Ga(db, "link", {href:ta + "css/" + Gb + Xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Qb) {
    if (Hb) {
      var lc = function(N) {
        S.RegExpCompat = bz;
        lc = v;
        Ib(ta + "js/regexpcompat.js");
        function bz(L) {
          for (var M; M = bb.shift();) {
            M(L);
          }
          bb = v;
          ia(N);
          Jb(ta + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      S.RegExpCompat = function(N) {
        for (var L; L = bb.shift();) {
          L(N);
        }
        bb = v;
        Jb(ta + "js/regexpcompat.js");
      }, Ib(ta + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

