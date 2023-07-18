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
var C, pb;
(function(Ya, Y, ib, Fc, N, hc, id, Vb, qb, ic, jc, Gc, kc, v) {
  function da(O) {
    if (Ya[0] === O) {
      return Za === Za + "" ? qb(Za) : Za;
    }
  }
  function Pa(O) {
    var H = Ya[3];
    if (Ya[2] === O) {
      return H === H + "" ? qb(H) : H;
    }
  }
  function lc() {
    return 6 > B ? va.scrollTop : B ? ub.scrollTop : Y.pageYOffset;
  }
  var va = N.body, cb = va.style, ub, vb, wb, Za = Ya[1], B = da(2) || da(3), Db = da(7), jb = da(5) || da(6), I = da(8) || da(9), Z = da(11) || da(12), Qb = Z && 0 <= Ya.conpare(Za, "1.9.1"), Wb = da(13), sa = da(15), Ca = da(16) || da(17), Hc = da(10) || da(25), Da = da(20) || da(22), Ic = da(23), kb = da(21), Xb = da(24), jd = Da || Ic || kb || Xb, Jc = Da && qb(hc.userAgent.split("Edg/")[1]), kd = qb(hc.appVersion.split("Trident/")[1]) + 4, mc = Pa(35) || Pa(36) || Pa(37), ld = 0 <= hc.userAgent.indexOf("Googlebot/"), 
  fb = 0.9 > Z, nc = (Db ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > I ? "opr70" : 8 > I ? "opr72" : 9.5 > I ? "opr" + (I | 0) : Z && !Qb ? 1.4 <= Z ? "gck19" : 1.3 <= Z ? "gck13" : 1 <= Z ? "gck12" : fb ? 0.8 <= Z ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Yb = "", md = Pa(1) || Pa(2) || Pa(3) || Pa(4) || Pa(8) || Pa(9) || Pa(10), Kc, rb = 8 > B || 7.2 > I ? !1 : v, Lc = cb.transform !== v ? "transform" : cb["-o-transform"] !== v ? "-o-transform" : 
  cb["-ms-transform"] !== v ? "-ms-transform" : cb.MozTransform !== v ? "-moz-transform" : cb["-webkit-transform"] !== v ? "-webkit-transform" : "", Va = [], Mc = [], gb = [], oc, Nc, Oc, Pc, Zb, Qc, Rc, $b, ac, Sc = !1, pc = 525 > sa || 3.2 > Ca || 2.2 > kb || 10 > I || Z && !Qb || da(25) || 10 > da(3) || Pa(32) || Pa(30) || Pa(3), ba, Eb, bc, Tc, nd = !!va.getBoundingClientRect, cc = [], dc = [], qc, Uc, rc, Vc, db = Vb.now || function() {
    return +new Vb();
  };
  (function() {
    function O() {
      for (var T, L = 0, aa = db(); L < K.length;) {
        aa < K[0].t ? ++L : (T = K.splice(L, 1)[0], T.f(T.p));
      }
      pa = K.length ? jc(O, Ea) : 0;
    }
    function H() {
      for (var T, L = 0; L < ea.length; ++L) {
        T = ea[L], T.f();
      }
    }
    function P() {
      ma && (ma = clearInterval(ma));
    }
    function na() {
      pa && (pa = Gc(pa));
    }
    C = function(T) {
      cc.push(T);
    };
    pb = function(T) {
      dc.push(T);
    };
    bc = function(T) {
      ea.length || (ma = kc(H, ha));
      ea.push({f:T, C:++ca});
      return ca;
    };
    Tc = function(T) {
      for (var L = ea.length, aa; aa = ea[--L];) {
        if (aa.C === T) {
          ea.splice(L, 1);
          ea[0] || P();
          break;
        }
      }
      return 0;
    };
    qc = function() {
      ma && (P(), ma = kc(H, ha));
    };
    Uc = P;
    var ea = [], ha = 500, ca = 0, ma;
    if (5 > B || Db) {
      Y._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    ba = function(T, L, aa) {
      K.length || (pa = jc(O, Ea));
      K.push({f:T, p:L, C:++wa, t:db() + (Ea < aa ? aa : Ea)});
      return wa;
    };
    Eb = function(T) {
      for (var L = K.length, aa; aa = K[--L];) {
        if (aa.C === T) {
          K.splice(L, 1);
          break;
        }
      }
      return 0;
    };
    rc = function() {
      pa && (na(), pa = jc(O, Ea));
    };
    Vc = na;
    var K = [], Ea = 16, wa = 0, pa;
    if (5 > B || Db) {
      Y._wdb_ontimer = O, O = "_wdb_ontimer()";
    }
  })();
  var xb, Fb, Wc, yb, Xc, Qa, lb, Yc, sc, ra, Rb, Zc, $c, tc, $a, zb, ad, ab, Ra, sb, mb, Jb, bd, ec, nb, Ab, uc, Ha, Wa, cd;
  (function() {
    function O(a, b, m) {
      var A = ["<", a], c = 1, n, u;
      if (b) {
        for (n in b) {
          var D = b[n];
          if (null != D && "" !== D) {
            if ("style" === n) {
              A[++c] = ' style="';
              for (u in D) {
                for (var S = ++c, U, X = [], ia = u.split(""), Ba = ia.length; Ba;) {
                  U = ia[--Ba], "A" <= U && "Z" >= U && (U = "-" + U.toLowerCase()), X[Ba] = U;
                }
                A[S] = X.join("") + ":" + D[u] + ";";
              }
              A[++c] = '"';
            } else {
              "className" === n && (n = "class"), A[++c] = " " + n + '="' + D + '"';
            }
          }
        }
      }
      A[++c] = ">";
      null != m && (L && "font" !== a ? A[++c] = "<font>" + H(m) + "</font>" : A[++c] = H(m));
      A[++c] = "</" + a + ">";
      return A.join("");
    }
    function H(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function P(a) {
      var b = a.split("-"), m = b.length;
      if (2 > m) {
        return a;
      }
      for (; 1 < m;) {
        a = b[--m], b[m] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function na(a) {
      return ea(N, a);
    }
    function ea(a, b) {
      var m = "*" === b;
      m = L ? m ? a.all : a.all.tags(b.toUpperCase()) : 6 > B && m ? a.all : a.getElementsByTagName(b);
      for (var A = [], c = 0, n = m.length; c < n; ++c) {
        A[c] = m[c];
      }
      return A;
    }
    function ha(a, b) {
      var m = [], A = 0, c, n = -1;
      if (9 > B || !a.getElementsByClassName) {
        var u = 6 > B ? a.all : a.getElementsByTagName("*");
      } else {
        var D = !0;
        u = a.getElementsByClassName(b);
      }
      for (c = u.length; A < c; ++A) {
        var S = u[A];
        if (D || (L || 1 === S.nodeType) && wa(S, b)) {
          m[++n] = S;
        }
      }
      return m;
    }
    function ca(a) {
      return L ? a.parentElement : a.parentNode;
    }
    function ma(a, b, m, A, c, n) {
      if (L) {
        var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var D = lb(2 > a ? Qa(b) : b);
        D = 2 > a ? D.indexOf(b) + a : D.length;
        b.insertAdjacentHTML(u, O(m, A, c));
        b = lb(b)[D];
        null != c && ("font" === m ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (aa) {
        b = N.createElement(O(m, A));
      } else {
        b = n ? N.createElementNS("http://www.w3.org/2000/svg", m) : N.createElement(m);
        if (A) {
          for (u in A) {
            if ((a = A[u]) || 0 === a) {
              switch(u) {
                case "class":
                case "className":
                  ec(b, a);
                  break;
                case "style":
                  n = b.style;
                  for (D in a) {
                    n[D] = a[D];
                  }
                  break;
                default:
                  sb(b, u, a);
              }
            }
          }
          !I || "a" !== m && "A" !== m || !A.href || A["tag-index"] || A.tagIndex || sb(b, "tagIndex", "-0");
        }
        oa || null != c && K(b, c);
      }
      return b;
    }
    function K(a, b) {
      if (L) {
        return ma(2, a, "font", v, b);
      }
      var m = N.createTextNode("" + b);
      a.appendChild(m);
      return m;
    }
    function Ea(a, b) {
      9 > B ? a.className = b : a.setAttribute("class", b);
    }
    function wa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function pa(a, b, m) {
      if (8 > I || 5.5 > B) {
        b = P(b);
      }
      a.style[b] = m;
    }
    function T(a) {
      return 5.5 > B ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var L = 5 > B;
    ub = na("html")[0];
    vb = na("head")[0];
    xb = function(a) {
      return Y[a] || N[a] || N.getElementById(a);
    };
    Fb = na;
    Wc = function(a) {
      return ha(N, a);
    };
    yb = ea;
    Xc = ha;
    Qa = ca;
    lb = function(a) {
      a = L ? a.children : a.childNodes;
      for (var b = [], m = a.length; m;) {
        b[--m] = a[m];
      }
      return b;
    };
    Yc = function(a) {
      var b = !(7.03 < I && 7.2 > I) && a.children;
      a = b ? b : a.childNodes;
      for (var m = [], A = a.length, c = -1, n; A;) {
        if (n = a[--A], b || 1 === n.nodeType) {
          L && "FONT" === n.tagName || (m[++c] = n);
        }
      }
      return m;
    };
    sc = function(a) {
      return L ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ra = function(a, b, m, A, c) {
      b = ma(2, a, b, m, A, c);
      L || (a.appendChild(b), oa && null != A && K(b, A));
      return b;
    };
    Rb = function(a, b, m, A, c) {
      b = ma(0, a, b, m, A, c);
      L || (ca(a).insertBefore(b, a), oa && null != A && K(b, A));
      return b;
    };
    Zc = function(a, b, m, A, c) {
      b = ma(1, a, b, m, A, c);
      var n;
      L || ((n = a.nextSibling) ? Qa(n).insertBefore(b, n) : Qa(a).appendChild(b), oa && null != A && K(b, A));
      return b;
    };
    $c = K;
    tc = function(a, b) {
      var m;
      if (L) {
        return ma(1, a, "font", v, b);
      }
      var A = N.createTextNode("" + b);
      (m = a.nextSibling) ? Qa(a).insertBefore(A, m) : Qa(a).appendChild(A);
      return A;
    };
    $a = function(a) {
      Qa(a) ? L ? a.outerHTML = "" : (5.5 > B && (a.style.filter = ""), Qa(a).removeChild(a)) : C("[DOM] p_DOM_remove(), No parentNode!");
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
      return L ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var aa = 9 > B, oa = aa;
    ab = function(a) {
      return a.tagName.toUpperCase();
    };
    Ra = function(a, b) {
      if (8 > I || 5.5 > B) {
        b = P(b);
      }
      var m = a.getAttribute(b);
      return I && "tabIndex" === b ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    sb = function(a, b, m) {
      if (I && "tab-index" === b) {
        "-1" === m ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", m);
      } else {
        if (8 > I || 5.5 > B) {
          b = P(b);
        }
        a.setAttribute(b, m);
      }
    };
    mb = function(a, b) {
      if (I && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > I || 5.5 > B) {
          b = P(b);
        }
        a.removeAttribute(b);
      }
    };
    Jb = function(a, b) {
      if (I && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > I || 5.5 > B) {
        b = P(b);
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
    Ha = pa;
    Wa = function(a, b) {
      var m, A = -1, c;
      if (5.5 > B) {
        if (m = T(a)) {
          for (m = m.split(";"); c = m[++A];) {
            pa(a, c.split(":")[0], "");
          }
        }
        if (b) {
          for (A = -1, m = b.split(";"); c = m[++A];) {
            var n = c.split(":")[0];
            pa(a, n, c.substr(n.length + 1));
          }
        }
      } else if (7.1 > I) {
        if (a.setAttribute("style", ""), b) {
          for (m = b.split(";"); c = m[++A];) {
            c = c.split(":"), pa(a, c[0], c[1]);
          }
        }
      } else {
        9 > I || 1 > Z ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    cd = T;
    Va.splice(0, 0, function() {
      function a(S) {
        S = lb(S);
        for (var U = S.length, X, ia, Ba; U;) {
          if (X = S[--U], ia = X.nodeType, 8 === ia) {
            b && u.push(X);
          } else if (1 === ia) {
            switch(ia = ab(X), "/" === ia.charAt(0) && (ia = ia.substr(1), D[ia] = !0), ia) {
              case "STYLE":
                if (7.2 <= I && 9 > I) {
                  break;
                }
              case "LINK":
                L || A || zb(vb, X) || n.push(X);
                break;
              case "META":
                ia = Ra(X, "name") || Ra(X, "property");
                for (Ba = c.length; Ba;) {
                  if (0 === ia.indexOf(c[--Ba])) {
                    u.push(X);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (ld || Jb(X, "async")) {
                  break;
                }
                if (m) {
                  X.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Jb(X, "skip-cleanup")) {
                  break;
                }
              case "!":
                u.push(X);
                break;
              case "SOURCE":
                Y.HTMLSourceElement || u.push(X);
                break;
              default:
                D[ia] ? u.push(X) : lb(X).length && a(X);
            }
          }
        }
        for (; n[0];) {
          vb.appendChild(n.pop());
        }
        for (; u[0];) {
          $a(u.pop());
        }
      }
      uc(ub, "nojs");
      wb = xb("jsMain");
      var b = !(8 > I || 5 > B || Db || fb), m = Pc, A = 7 > B, c = ["og:", "twitter:", "fb:"], n = [], u = [], D = {};
      a(ub);
    });
  })();
  var la, La, eb, Gb, vc, Kb, Hb, wc, xc, yc, dd, ed, fd, Lb, Fa, zc;
  (function() {
    function O() {
      return e ? r ? 2 : w ? 3 : 1 : 0;
    }
    function H(f) {
      La(Y, "load", H);
      H = v;
      na(Va, f, !0);
      Va = v;
    }
    function P(f, g) {
      Hb(function() {
        var y = pa(f);
        g(y);
        y.addListener(g);
        return !0;
      });
    }
    function na(f, g, y) {
      for (var p = 0; p < f.length; ++p) {
        !0 === f[p](g) && (f.splice(p, 1), --p);
      }
      y && (f.length = 0);
    }
    function ea(f, g, y) {
      Va || L.length || ba(ha);
      L.push(f, g, y);
    }
    function ha() {
      var f = L, g;
      for (L = []; g = f.shift();) {
        na(g, f.shift(), f.shift());
      }
    }
    function ca(f) {
      var g = f || event;
      f = oa[g.type];
      var y = -1, p, Q;
      5 > B ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : B ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        Q = !0;
      });
      for (; p = f[++y];) {
        p.j === this ? (this.g = p.i, B && (g.currentTarget = this), this.g(g), B ? (this.g = ib, this.g = v) : delete this.g) : 7.2 > I && this === N && p.j === Y && (Y.g = p.i, Y.g(g), delete Y.g);
      }
      if (B) {
        return g.preventDefault = g.stopPropagation = ib, g.preventDefault = g.stopPropagation = v, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (A = !0), Q && !A && g.K(), g.K = g.stopPropagation = v);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var f = 9 === T.offsetWidth;
      Lb !== f && (ea(Mc, Lb = f), C("p_cssAvailability:" + Lb));
    }
    function K() {
      !Va && M && (Eb(M), M = ba(Ea));
    }
    function Ea() {
      M = 0;
      na(z);
    }
    function wa(f) {
      Va || na(t, f);
    }
    var pa = Y.matchMedia, T, L = [];
    Va.push(function() {
      P = v;
      T = ra(va, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        L.length && ba(ha);
      });
    });
    la = function(f, g, y, p) {
      if (m) {
        f.addEventListener(g, y, p ? aa ? p : p.capture || !0 === p : !1);
      } else {
        var Q = {j:f, i:y};
        p = oa[g];
        var za = "on" + g, Ja, hb;
        if (p) {
          for (Ja = p.length; hb = p[--Ja];) {
            if (hb.j === f && hb.i === y) {
              return;
            }
          }
          oa[g].push(Q);
        } else {
          oa[g] = p = [Q], a || (g = f[za], "function" === typeof g && g !== ca && p.unshift({j:f, i:g}));
        }
        a ? f.attachEvent(za, ca) : f[za] = ca;
      }
    };
    La = function(f, g, y, p) {
      if (m) {
        f.removeEventListener(g, y, p ? aa ? p : p.capture || !0 === p : !1);
      } else {
        p = oa[g];
        g = "on" + g;
        var Q, za, Ja;
        if (p) {
          for (Q = p.length; za = p[--Q];) {
            za.j === f && (za.i === y ? p.splice(Q, 1) : Ja = !0);
          }
          Ja || (a ? f.detachEvent(g, ca) : B ? (f[g] = ib, f[g] = null) : delete f[g]);
        }
      }
    };
    var aa = !B && !Db && (new id('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), oa = {}, a = !1, b = 525.13 > sa, m = !b && !Db && Y.addEventListener, A;
    b && ub.addEventListener("click", function(f) {
      if (A) {
        return A = !1, f.preventDefault(), !1;
      }
    });
    eb = function(f) {
      Va ? Va.push(f) : alert("Load event has already been dispatched!");
    };
    Gb = function(f) {
      c && c.push(f);
    };
    var c = [];
    if (419.3 >= sa) {
      var n = function() {
        if (n) {
          var f = N.readyState;
          "loaded" === f || "complete" === f ? (n = v, H()) : ba(n);
        }
      };
      ba(n);
    } else {
      la(Y, "load", H), fb && ba(function() {
        H && H();
      }, 999);
    }
    B || !fb && 1.8 > Z ? la(Y, "unload", function(f) {
      na(c, f, !0);
    }) : c = v;
    Hb = function(f) {
      Mc.push(f);
    };
    eb(function() {
      ma();
      bc(ma);
    });
    yc = function(f, g) {
      if (u) {
        la(f, "focusin", g);
      } else if (D) {
        la(f, "DOMFocusIn", g);
      } else {
        if (U) {
          Sa || (Sa = kc(xa, 333));
        } else if (S || X) {
          la(N, "focus", Ba, !0);
        } else {
          return;
        }
        for (var y = ia, p = 0, Q = y.length; p < Q; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            return;
          }
        }
        y.push(f, g);
      }
    };
    dd = function(f, g) {
      if (u) {
        la(f, "focusin", g);
      } else if (D) {
        la(f, "DOMFocusIn", g, !1);
      } else {
        for (var y = ia, p = 0, Q = y.length; p < Q; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            y.splice(p, 2);
            y.length || (U ? Sa = Tc(Sa) : (S || X) && La(N, "focus", Ba, !0));
            break;
          }
        }
      }
    };
    var u = 6 <= B || jb || 52 <= Z || 15 <= Da || 534 <= sa || 5 <= Ca || Ic || 4 <= kb || 4 <= Xb || 11.6 <= da(8) || 12 <= da(9), D = 8 <= I || Da || kb || Xb || sa || Ca, S = 8 > I, U = 6 > B, X = 52 > Z || Wb;
    if (X || S) {
      var ia = [];
      var Ba = function(f) {
        var g = ia, y = S ? N.activeElement : f.target;
        if (S) {
          var p = f;
          f = {type:"focusin", target:y, preventDefault:function() {
            p.preventDefault();
          }, stopPropagation:function() {
            p.stopPropagation();
          }};
        }
        for (var Q = 0, za = g.length; Q < za; ++Q) {
          var Ja = g[Q];
          (Ja === y || zb(Ja, y)) && g[Q + 1].call(Ja, f);
        }
      };
    } else if (U) {
      ia = [];
      var Sa, Ia, Ga, xa = function() {
        Ga = Y.onerror;
        Y.onerror = Ka;
        var f = N.activeElement;
        if (Ia !== f) {
          Ia = f;
          for (var g = ia, y, p = 0, Q = g.length; p < Q; ++p) {
            y = g[p], (y === f || zb(y, f)) && g[p + 1].apply(y, [{target:f}]);
          }
        }
        Y.onerror = Ga;
        Ga = v;
      }, Ka = function() {
        C("error!");
        Y.onerror = Ga;
        Ga = Ia = v;
        return !0;
      };
    }
    xc = function(f) {
      gb && gb.push(f);
    };
    var h = 60 > Z || Wb, e, w, r;
    if (89 <= Z || 89 <= Da || mc && 79 <= Jc || pa && (pa("(forced-colors:none)").matches || pa("(forced-colors:active)").matches)) {
      zc = !0, P("(forced-colors:active)", function(f) {
        e = f.matches;
        Fa = O();
        ea(gb, Fa);
        C("(forced-colors:active):" + Fa);
      });
    } else if (10 <= B || jb || mc && Jc) {
      zc = !0, P("(-ms-high-contrast:black-on-white)", function(f) {
        e = w = f.matches;
        Fa !== O() && (Fa = O(), ea(gb, Fa), C("(-ms-high-contrast:black-on-white):" + Fa));
      }), P("(-ms-high-contrast:white-on-black)", function(f) {
        e = r = f.matches;
        Fa !== O() && (Fa = O(), ea(gb, Fa), C("(-ms-high-contrast:white-on-black):" + Fa));
      }), P("(-ms-high-contrast:active)", function(f) {
        e = f.matches;
        Fa !== O() && (Fa = O(), ea(gb, Fa), C("(-ms-high-contrast:active):" + Fa));
      });
    } else if (mc && (B || Z && 0 <= Ya.conpare(Za, "1.8.1") || Wb)) {
      var q = function() {
        function f(p, Q) {
          if (Q && "transparent" === p) {
            return 382.5;
          }
          if ("#" === p.charAt(0)) {
            return parseInt("0x" + p.substr(1, 2), 16) + parseInt("0x" + p.substr(3, 2), 16) + parseInt("0x" + p.substr(5, 2), 16);
          }
          var za = p.split("(")[1].split(",");
          return qb(za[0]) + qb(za[1]) + qb(za[2]);
        }
        var g = N.defaultView;
        var y = g ? g.getComputedStyle(T, null) : T.currentStyle;
        g = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        g && (e = "#123456" !== g && "rgb(18,52,86)" !== g, w = f(g) < f(y, !0), r = f(g) > f(y, !0), Fa !== O() && (Fa = O(), C("(forced-colors-fallback):" + Fa), ea(gb, Fa, h)));
      };
      Hb(function(f) {
        if (f) {
          return Ha(T, "color", "#123456"), Ha(T, "backgroundColor", "#123456"), h ? (q(), gb = v) : bc(q), q = v, !0;
        }
      });
    } else {
      gb = O = v;
    }
    wc = function(f) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      l.push(f);
    };
    var l = [], J = 7.5 <= I && 8 > I;
    J && function() {
      for (var f = N.images, g = f.length, y; g;) {
        y = f[--g], y.J = y.src, mb(y, "src");
      }
    }();
    eb(function() {
      function f() {
        p ? (Q = y[--p], J && sb(Q, "src", Q.J), Nc(g, J ? Q.J : Q.src)) : l = v;
      }
      function g(Ja) {
        na(l, {G:Q, H:Ja}, !p);
        f();
      }
      var y = N.images || Fb("img"), p = y.length;
      if (12 > I || 532 > sa) {
        f();
      } else {
        for (; p;) {
          var Q = y[--p];
          var za = 9 > B ? Q.complete : 0 <= Q.naturalWidth ? Q.naturalWidth : Q.width;
          ea(l, {G:Q, H:za}, !p);
        }
        l = v;
      }
    });
    vc = function(f) {
      z.push(f);
    };
    var z = [], M;
    la(Y, "resize", K);
    Gb(function() {
      M && Gc(M);
      La(Y, "resize", K);
    });
    Kb = function(f) {
      t.push(f);
    };
    var t = [], F = 1 > Z || 1.2 <= Z && 1.8 > Z || 7.2 >= I, R;
    F ? bc(function() {
      var f = Y.pageYOffset;
      R !== f && (R = f, wa({type:"scroll", cancelable:!1, stopPropagation:ib, preventDefault:ib}));
    }) : la(Y, "scroll", wa, {passive:!0});
    Gb(function() {
      F || La(Y, "scroll", wa, {passive:!0});
    });
    ed = function(f, g) {
      if (ka) {
        la(f, "wheel", g, {passive:!1});
      } else if (qa) {
        la(f, "mousewheel", g, !1);
      } else if (Ta) {
        la(f, "MozMousePixelScroll", g, !1);
      } else if (Ma) {
        for (var y = Na, p = 0, Q = y.length; p < Q; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            return;
          }
        }
        y.length || la(N, "DOMMouseScroll", bb, !1);
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
        for (var y = Na, p = 0, Q = y.length; p < Q; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            y.splice(p, 2);
            y.length || La(N, "DOMMouseScroll", bb, !1);
            break;
          }
        }
      }
    };
    var ka = 9 <= B || jb || 17 <= Z || 31 <= Da || 537.7 <= sa, qa = 6 <= B || jb || 9 <= I || Da || 522 <= sa || Ca, Ta = Qb, Ma = Z && 0 <= Ya.conpare(Za, "0.9.7") && !Qb;
    if (Ma) {
      var Na = [], bb = function(f) {
        for (var g = Na, y = f.target, p, Q = 0, za = g.length; Q < za; ++Q) {
          p = g[Q], zb(p, y) && g[Q + 1].call(p, f);
        }
      };
    }
  })();
  (function() {
    function O(e) {
      switch(e) {
        case 1:
          return b;
        case 2:
          return !!m;
        case 3:
          return !!A;
        case 4:
          return !!c;
        case 5:
          return u;
        case 6:
          return n && !wa;
      }
      return !1;
    }
    function H(e) {
      D(e);
      Ka && !e && $a(Ka);
      D = S = U = X = ia = Ba = Ga = xa = Ka = h = v;
    }
    function P(e) {
      var w = '1.6em "' + e + '"';
      C("[webFontTest] testByNativeFontLoaderAPI start.");
      N.fonts.load(w).then(function(r) {
        C("[webFontTest] fonts.check() : " + N.fonts.check(w, "i") + ", fonts.length : " + r.length);
        (r = ha(S)) ? ba(H, r) : (C("[webFontTest] mesureWebFont() : false"), ea(!0));
      }, function(r) {
        C("[webFontTest] fonts.load() rejected! " + r);
        rb !== v ? ca(rb) : oc(ca);
      });
    }
    function na(e) {
      return N.hidden || N.msHidden || N.mozHidden || N.webkitHidden ? (Ia = db(), !1) : e < db() - Ia;
    }
    function ea(e) {
      e && (C("[webFontTest] testWebFont start."), Ia = db());
      (e = ha(S, Sa)) ? (C("[webFontTest] testWebFont mesurement success : " + e), H(e)) : na(Sa) ? (C("[webFontTest] testWebFont timeout!"), Ga ? ma() : Ea ? H(0) : rb !== v ? ca(rb) : oc(ca)) : ba(ea);
    }
    function ha(e, w) {
      var r = 0, q = -1, l = [];
      if (!h) {
        var J = -1;
        var z;
        xa = ra(va, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa);
        for (h = []; z = a[++J];) {
          Ha(xa, "fontFamily", z), h[J] = xa.offsetWidth;
        }
        C("[webFontTest] default width " + h.join(", "));
      }
      for (5 > B ? xa || (xa = ra(va, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa)) : va.appendChild(xa); J = a[++q];) {
        Ha(xa, "fontFamily", '"' + e + '",' + J);
        var M = xa.offsetWidth;
        if (!oa && M !== h[q]) {
          r = 1;
          break;
        }
        l[q] = M;
      }
      if (oa && M === l[0] && M === l[1]) {
        for (C("[webFontTest] Hit... : width=" + M), r = 1, q = -1; 0 <= (M = h[++q]);) {
          if (M === l[0] && M === l[1] && M === l[2]) {
            C("[webFontTest] Failed! : font[" + q + "]=" + a[q]);
            r = 0;
            break;
          }
        }
      }
      !B && r && ia && (xa.textContent = ia, M = xa.offsetWidth, xa.textContent = Ba, r = M === xa.offsetWidth ? 2 : 1, xa.textContent = aa);
      $a(xa);
      5 > B && (xa = v);
      w && (r || na(w)) && C("[webFontTest] " + e + " " + l.join(", "));
      return r;
    }
    function ca(e) {
      C("[webFontTest] onTestDataURIComplete : " + e);
      e ? (Ga = !0, Sa = L, C("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), S = S.replace(pa, ""), ma()) : H(0);
    }
    function ma() {
      if (U) {
        for (; U.length;) {
          var e = U.shift(), w = U.shift();
          if (O(e)) {
            C("[webFontTest] maybe can use! " + w);
            Ka = Rc(w, K, X, Ka);
            return;
          }
        }
      }
      H(0);
    }
    function K(e) {
      e ? ea(!0) : ma();
    }
    oc = !1 === rb ? function(e) {
      ba(e, !1);
    } : function(e) {
      function w(l) {
        q && (q = Eb(q), rb = l, r.onload = r.onerror = ib, ba(e, l));
      }
      if (rb !== v) {
        C("[dataURITest] already done : " + rb), ba(e, rb);
      } else {
        C("[dataURITest] start!");
        var r = new Image(), q = ba(w, !1, 999);
        r.onerror = function() {
          C("[dataURITest] no DATA URI!");
          w(!1);
        };
        r.onload = function() {
          C("[dataURITest] DATA URI:" + (1 === r.width * r.height));
          w(1 === r.width * r.height);
        };
        r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > B && eb(function() {
      var e = ra(va, "div");
      Wa(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Kc = 1 < e.offsetHeight;
      $a(e);
    });
    Nc = function(e, w) {
      function r() {
        l || !J || q.complete ? (C("[imageTest] timer -> img.complete. img.width=" + q.width), ba(e, !!q.width), q.onerror = q.onload = ib, q = e = v) : (--J, ba(r));
      }
      var q = new Image(), l, J = 99;
      C("[imageTest] start.");
      q.onerror = function() {
        C("[imageTest] error!");
        l = !0;
      };
      q.onload = function() {
        C("[imageTest] onload.");
        l = !0;
      };
      q.src = w;
      ba(r);
    };
    Oc = function(e, w, r, q, l, J, z) {
      D = e;
      S = w;
      U = r;
      X = q;
      ia = l;
      Ba = J;
      Sa = z || T;
      C("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!pc);
      da(10) ? ba(H, 1) : pc ? ba(H, 0) : !N.fonts || 603 > sa || 11 > Ca ? (C("[webFontTest] No native font loader."), ea(!0)) : (C("[webFontTest] Use Native font loader."), P(S));
    };
    var Ea = 9 > B, wa = 6 > Da || I || 530 > sa || 4 > Ca, pa = "bad_" + db() + "_", T = 5E3, L = 500, aa = "mmmmmmmmmmlliiiiiiiii", oa = 21 > Da || 7 > Ca || sa && 0 >= Ya.conpare(Za, "536.11"), a = ["monospace", "sans-serif", "serif"];
    pc || (oa && Da && C("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + Da), oa && Ca && C("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ca), oa && sa && C("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + sa));
    var b = 14 <= jb || 36 <= Da || 39 <= Z || 602 <= sa || 10 <= Ca, m = 6 <= Da || Z && 0 <= Ya.conpare(Za, "1.9.2") || 525 <= sa || 3.2 <= Ca || 4.4 <= kb || 11.1 <= I || jb || 9 <= da(2) || 10 <= da(3), A = 2 <= Da || Qb || 525 <= sa || 3.2 <= Ca || 2.2 <= kb || 10 <= I || jb || 9 <= da(2) || 10 <= da(3), c = A, n = 525 <= sa || 3.2 <= Ca || 38 > Da || 3 <= kb || 11.5 <= I, u = 4 <= da(2) || 10 <= da(3), D, S, U, X, ia, Ba, Sa, Ia, Ga, xa, Ka, h;
  })();
  (function() {
    function O(c) {
      var n = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== c) {
        C("[VectorIcon] " + c);
        var u = Wc("ico"), D = 0, S = u.length;
        if (S) {
          if (1 === c) {
            for (; D < S; ++D) {
              c = u[D];
              var U = ad(c);
              if (U = n[U]) {
                c.innerHTML = U;
              }
            }
          } else {
            A && !m && (Y.VectorIconFallback = bz, $b(ya + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        ac(ya + "js/vector-icon-svg-fallback.js");
        return [n, u, ra, m];
      }
      bz = !1;
    }
    wc(function(c) {
      var n = c.G;
      c = c.H;
      var u = Qa(n);
      !nb(u, "aBodyRoot") && c ? Ab(u, "js-image-has-been-loaded") : c || Ra(n, "alt") || "lazy" === Ra(n, "loading") || Ha(n, "display", "none");
    });
    fb && (Va.splice(1, 0, function() {
      for (var c = Xc(wb, "RichLink-sep"), n, u, D, S, U, X; n = c.shift();) {
        for (n = lb(n); u = n.shift();) {
          if ("A" === ab(u) && !u.innerHTML) {
            for (C("\u25a0 Broken Anchor " + u.parentNode.innerHTML); D = n.shift();) {
              if (1 === D.nodeType) {
                if ("A" === ab(D)) {
                  break;
                }
                for (S = yb(D, "A"); U = S.shift();) {
                  for (X = lb(U); X.length;) {
                    U.parentNode.insertBefore(X.shift(), U);
                  }
                  $a(U);
                }
              }
              u.appendChild(D);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var c = Fb("A"), n, u; n = c.shift();) {
        "A" !== ab(n) || n.innerHTML || (u = n.nextSibling && n.nextSibling.firstChild) && u.href === n.href && (C("\u25b2 Broken Anchor " + u.innerHTML), $a(n));
      }
    }));
    5.5 <= B && 8 > B && gb && xc(function(c) {
      for (var n = yb(va, "a"), u = n.length, D = 0; D < u; ++D) {
        n[D].hideFocus = !c;
      }
    });
    if (!zc && gb) {
      var H, P = function() {
        H = ra(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ya + "css/" + Yb + "hc/" + nc});
        if (Lc || 5.5 <= B && 9 > B && Kc) {
          Ab(va, "js-canuse-css-rotate-when-forced-colors-mode"), C("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        P = v;
      };
      xc(function(c) {
        c && !H ? P() : H && (c ? vb.appendChild(H) : $a(H));
      });
    }
    I && eb(function() {
      for (var c = yb(va, "a"), n = c.length, u = 0, D; u < n; ++u) {
        D = c[u], "-1" === Ra(D, "tabIndex") ? mb(D, "tabIndex") : Ra(D, "href") && sb(D, "tabIndex", "0");
      }
      c = yb(va, "input");
      u = 0;
      for (n = c.length; u < n; ++u) {
        D = c[u], "hidden" === Ra(D, "type") && mb(D, "tabIndex");
      }
    });
    if (Z && 0 > Ya.conpare(Za, "0.9.5")) {
      Sc = !0;
      var na, ea, ha, ca, ma;
      eb(function() {
        la(N, "keydown", K);
        la(N, "keyup", Ea);
        yc(va, wa);
        fb || (la(Y, "blur", oa), la(va, "click", aa));
      });
      var K = fb ? function(c) {
        16 === c.keyCode ? na = !0 : 9 === c.keyCode && ca && pa(ca, !0) && (ca.blur && ca.blur(), c.stopPropagation(), c.preventDefault(), ba(L));
      } : function(c) {
        16 === c.keyCode ? na = !0 : 9 === c.keyCode && (ea = db());
      }, Ea = function(c) {
        16 === c.keyCode && (na = !1);
      }, wa = fb ? function(c) {
        c.target.innerHTML || C(c.target.parentNode.innerHTML);
        ca = c.target;
      } : function(c) {
        var n = c.target;
        if (ca === n) {
          ha = v;
        } else if (ha) {
          n === ha ? (c.stopPropagation(), L(!0)) : (n.blur && b(n), c.preventDefault(), L());
        } else {
          if (c = ca) {
            ca = v, b(c);
          }
          ha = n;
          L(!0);
        }
      }, pa = function(c, n) {
        var u = db(), D = va, S = "nextSibling", U = "firstChild";
        na && (n || u - 99 < ea && ea <= u) && (S = "previousSibling", U = "lastChild");
        for (ha = v; c !== D;) {
          if (X) {
            u = c;
            var X = !1;
          } else {
            u = c[S];
          }
          if (u) {
            if (1 === u.nodeType) {
              if (T(u)) {
                return ha = u, !0;
              }
              c = (X = u[U]) || u;
            } else {
              c = u;
            }
          } else {
            c = c.parentNode;
          }
        }
      }, T = function(c, n) {
        function u() {
          return "-1" !== Ra(c, "tab-index");
        }
        function D() {
          return 0 < c.offsetHeight * c.offsetWidth;
        }
        if (c.focus) {
          var S;
          switch({A:n ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[ab(c)]) {
            case 1:
              if (Jb(c, "href") && u() && D()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ra(c, "type") && u() && !Jb(c, "disabled") && D()) {
                return !0;
              }
              break;
            case 3:
              if (u() && !Jb(c, "disabled") && D()) {
                return !0;
              }
              break;
            default:
              if ((S = Ra(c, "tab-index")) && "-1" !== S && D()) {
                return !0;
              }
          }
        }
      }, L = function(c) {
        ma = 0;
        ha && (fb || la(ha, "blur", a), ca = ha, ha = v, c || ca.focus());
      };
      if (!fb) {
        var aa = function(c) {
          var n = c.target;
          if (ca && T(n, !0)) {
            var u = ca;
            ca = v;
            b(u);
            ha = n;
            c.stopPropagation();
            c.preventDefault();
            L();
          }
        }, oa = function(c) {
          c.target === N && (ha = v);
        }, a = function(c) {
          c = c.target;
          La(c, "blur", a);
          ca === c && pa(c) && (ma || (ma = ba(L)));
        }, b = function(c) {
          La(c, "blur", a);
          c.blur();
        };
      }
    }
    Hb(function(c) {
      if (c) {
        return Oc(O, "myIconFont", [1, ya + "iconfont/woff2.css", 2, ya + "iconfont/woff.css", 4, ya + "iconfont/otf.css", 3, ya + "iconfont/ttf.css", 5, ya + "iconfont/eot.css", 6, ya + "iconfont/svg.css"], "js-myIconFont-testCssReady", "Twitter", "\ud83d\udc24", 5E3), O = v, !0;
      }
    });
    var m = 8 <= da(8) && 9 > I, A = 9 <= B || jb || 1.8 <= Z || 8 <= da(8) || 9 <= da(9) || 3 <= da(21) || Wb || jd || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || Ca;
  })();
  (function() {
    function O(d) {
      var k = Ia.length, E, G, V, x;
      if (13 === (d.keyCode || d.V) || d.type !== Ga) {
        for (; k;) {
          var fa = Ia[--k];
          if (fa.F === this || fa.u === this) {
            k = fa.F;
            var W = E = fa.u;
            if (fa.P) {
              if (Ha(k, "width", fa.$), k.src = fa.Z, ec(W, fa.T), k = fa.L) {
                Wa(k, fa.S), uc(k, "js-captioned-thumbnail__large");
              }
            } else {
              if (G = fa.N) {
                delete fa.N;
                if (fa.M) {
                  for (; E = Qa(E);) {
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
                    G = G.split("=");
                    ja = G.length;
                    if (V = G[ja - 1]) {
                      (x = qb(V.substr(1))) && V === "s" + x ? G[ja - 1] = "w" + E : G[ja] = "w" + E;
                    }
                    G = G.join("=");
                  } else {
                    G = G.split("/");
                    ja = G.length;
                    if (V = G[ja - 2]) {
                      (x = qb(V.substr(1))) && V === "s" + x ? G[ja - 2] = "w" + E : G.splice(ja - 1, 0, "w" + E);
                    }
                    G = G.join("/");
                  }
                }
                fa.X = G;
              }
              fa.T = bd(W);
              Ab(W, "js-pica-thumbnail__large");
              Ha(k, "width", "");
              k.src = fa.X;
              if (k = fa.L) {
                Wa(k, ""), Ab(k, "js-captioned-thumbnail__large");
              }
            }
            fa.P = !fa.P;
            break;
          }
        }
        H(d);
      }
    }
    function H(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function P(d) {
      var k = R;
      if (Lb) {
        if (ka && !k) {
          if (db() < ka) {
            return;
          }
          ka = v;
        }
        7 === d ? (K("t"), qa = 0) : (K("s"), qa && (qa = Eb(qa)), t = lc());
        k ? (R = ea(v, k[0], k[1])) || (ka = db() + 99) : ea();
        wa();
      } else {
        R = v;
      }
    }
    function na() {
      K("w.blur");
    }
    function ea(d, k, E) {
      function G(ob) {
        W = ob;
        if (z) {
          ja = z + ":translate" + (F ? "3D(0," : "(0,") + ob + (F ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ob) {
          if (e || w) {
            var Ac = q.offsetWidth;
          }
          ja = e ? "position:fixed;width:" + Ac + "px;top:" + (ob - V + ta) + "px" : r ? "top:" + ob + "px" : "position:absolute;top:" + ob + "px;left:0";
          if (w && ja) {
            var Sb = 8 > B ? " " : ",";
            ja += ";clip:rect(" + (0 > ob ? -ob + "px" + Sb + Ac + "px" + Sb + Oa : "0" + Sb + Ac + "px" + Sb + (ob + Oa < Tb ? Oa : Tb - ob)) + "px" + Sb + "0)";
          }
        }
      }
      var V = t, x = l, fa = q.offsetTop === x.offsetTop, W = 0, ja = "", Xa = !0;
      if (fa) {
        for (var Aa = 0, ta = 0, Ua = x; Ua && Ua !== va;) {
          ta += Ua.offsetTop, Ua = Ua.offsetParent;
        }
        W = M;
        Ua = 11 > B ? ub.offsetHeight : Y.innerHeight;
        var Bc = x.offsetHeight, Oa = J.offsetHeight, Tb = Oa < Bc ? Bc : Oa, Bb = V, Mb = Bb + Ua, fc = ta, gc = fc + Tb, gd = ta + W, od = gd + Oa;
        x = Bb < fc ? fc : Bb;
        var Cb = gc < Mb ? gc : Mb, Nb = Cb - x;
        Bb = gc <= Bb;
        Mb = Mb <= fc;
        if (k !== v) {
          Xa = ta + k;
          d = Xa + E;
          if (Bb || Mb) {
            return Ua <= E ? (k = ta, K("4.1.1")) : Bb ? (k = gc - E, K("4.1.2")) : (k = ta + E - Ua, K("4.1.3")), ka = v, Y.scroll(0, k), K("4.1.*"), R;
          }
          Oa <= Nb ? (Aa = 3, K("4.2")) : E <= Nb ? Oa - k <= Nb ? (Aa = 2, K("4.3.1")) : x <= Xa && d <= Cb ? x < ta + W && (Aa = 4, K("4.3.2")) : x <= Xa && Xa <= Cb ? (Aa = 5, K("4.3.3")) : x <= d && d <= Cb ? (Aa = 4, K("4.3.4")) : d < x ? (Aa = 4, K("4.3.5")) : (Aa = 5, K("4.3.6")) : (Aa = 4, K("4.4"));
          Xa = !1;
        } else {
          d !== v ? Oa <= Nb ? (Aa = 7, Xa = !1, K("3.1")) : (W -= 60 * d, Aa = Cb - ta - Oa, d = x - ta, W < Aa ? (W = Aa, K("3.2.1")) : d < W ? (W = d, K("3.2.2")) : K("3.2.3"), Aa = 6) : Bc <= Oa || (Bb ? (Aa = 1, K("2.2.1")) : Mb ? K("2.2.2") : Oa <= Nb ? (Aa = 3, K("2.3")) : x < gd ? (Aa = 3, K("2.4.1")) : od < Cb ? (Aa = 2, K("2.4.2")) : V < ta + Oa - Nb ? K("2.4.3") : (Aa = 2, K("2.4.4")));
        }
        switch(Aa) {
          case 0:
            G(0);
            break;
          case 1:
            G(Tb - Oa);
            break;
          case 2:
            G(Cb - ta - Oa);
            break;
          case 3:
            G(x - ta);
            break;
          case 4:
            G(x - ta - k);
            break;
          case 5:
            G(Cb - ta - (k + E));
          case 6:
            G(W);
        }
        pa(W, Oa, ta, Tb, Ua, k || "-", E || "-");
      } else {
        pa(W, "-", "-", "-", "-", "-", "-");
      }
      Wa(J, ja);
      M = W;
      return fa && Xa;
    }
    function ha(d) {
      if (Lb && (K("m"), Z && (t = lc(), wa()), this !== d.target)) {
        var k = ic(d.deltaY) ? d.deltaY : ic(d.wheelDeltaY) ? d.wheelDeltaY / 120 : ic(d.wheelDelta) ? d.wheelDelta / -120 : d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1);
        k && ea(9 >= k ? -9 >= k ? -3 : k : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function ca(d) {
      if (Lb) {
        var k = Z && 0 > Ya.conpare(Za, "0.9.4"), E = d.target, G = J, V = 0;
        if (zb(G, E)) {
          K(d.type || "ie5focus");
          la(E, "blur", ma);
          if (z) {
            k = E.getBoundingClientRect(), d = k.bottom - k.top, V = k.top - G.getBoundingClientRect().top | 0;
          } else {
            d = E.offsetHeight;
            var x = E;
            if (k) {
              for (var fa = []; x && (Z ? zb(G, x) : G !== x);) {
                for (; x.previousSibling;) {
                  x = x.previousSibling, x.tagName && fa.unshift(x.tagName + ":" + x.offsetTop);
                }
                x = x.offsetParent;
              }
              C(fa.join());
              x = E;
            }
            for (; x && (Z ? zb(G, x) : G !== x);) {
              if (k) {
                for (; x.previousSibling;) {
                  x = x.previousSibling, V += x.offsetHeight || 0;
                }
                x = x.parentNode;
              } else {
                V += x.offsetTop, x = x.offsetParent;
              }
            }
          }
          h ? (R = [V, d], qa && Eb(qa), qa = ba(P, 7, 1 > Z || 536 > sa || 14 > Da ? 500 : 0)) : (t = lc(), ea(v, V, d));
          T(V, d);
        }
      }
    }
    function ma() {
      La(this, "blur", ma);
      T(0, 0);
    }
    function K(d) {
      Na && (p && (p = Eb(p)), p = ba(Ea, 0, 1400), Na.innerHTML += " " + d);
    }
    function Ea() {
      Na.innerHTML = "";
    }
    function wa() {
      f && (Ha(f, "top", (t / 10 | 0) + "px"), Ma.innerHTML = " scrl:" + (t | 0));
    }
    function pa(d, k, E, G, V, x, fa) {
      g && (Ha(g, "top", ((d + E) / 10 | 0) + "px"), Ha(g, "height", (k / 10 | 0) + "px"), Ha(f, "height", (V / 10 | 0) + "px"), Ha(bb, "height", (va.scrollHeight / 10 | 0) + "px"), Ta.innerHTML = "conY:" + E + "/sidY" + d + ", conH:" + G + "/sidH" + k + ", focY:" + x + " focH:" + fa);
    }
    function T(d, k) {
      y && (Ha(y, "top", (d / 10 | 0) + "px"), Ha(y, "height", (k / 10 | 0) + "px"));
    }
    function L() {
      Q.call(za);
    }
    function aa() {
      N.fullscreenElement || N.fullscreen || N.webkitIsFullscreen || N.msFullscreenElement || Y.fullScreen ? (sb(za, "id", "blog2slide-root"), Ob[1].parentNode.insertBefore(Ja, Ob[1]), oa(), N.onkeydown = a) : hb && ($a(Ja), mb(za, "id"), mb(hb, "id"), hb = N.onkeydown = v);
    }
    function oa() {
      hb && mb(hb, "id");
      Ib = 0 < Ib ? Cc < Ib ? Cc : Ib : 0;
      hb = Ob[Ib];
      sb(hb, "id", "blog2slide-current");
    }
    function a(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++Ib, oa();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --Ib, oa();
      }
    }
    Rc = function(d, k, E, G) {
      G = G || ra(vb, "link", {type:"text/css", rel:"stylesheet"});
      var V;
      if (S) {
        (V = xb(E)) ? mb(V, "id") : V = ra(va, "div", {"aria-hidden":"true", className:E});
        var x = V.offsetWidth;
        C("[CSS Loader] widthBeforeCSSLoaded = " + x);
        sb(V, "id", E);
      }
      D(G, d, k, V, x);
      return G;
    };
    var b = Z && 0 > Ya.conpare(Za, "0.9.1"), m = 11 <= B || jb || 9 <= I && 9.5 > I, A = 11 > B, c = 7.2 <= I && 7.5 > I, n = 9 > Z && !b || 19 > Da || 4.3 > kb || 2 > Xb || 536 > sa || 6 > Ca || 7 <= I && 9 > I && !c, u = !b && !m && !A && !c && !n, D = u ? function(d, k, E) {
      C("[CSS Loader] onload + onerror");
      d.onload = bz;
      d.onerror = function() {
        d.onload = d.onerror = null;
        ba(E, !1);
      };
      d.href = k;
      function bz() {
        d.onload = d.onerror = null;
        ba(E, !0);
      }
      bz = !1;
    } : m ? function(d, k, E, G, V) {
      C("[CSS Loader] onload + mesure");
      d.onload = bz;
      d.href = k;
      function bz() {
        ba(E, S(G, V));
        d.onload = G = null;
      }
      bz = !1;
    } : A ? function(d, k, E, G, V) {
      C("[CSS Loader] onreadystatechange + onerror");
      d.onreadystatechange = bz;
      d.href = k;
      function bz() {
        "complete" === d.readyState && (ba(E, S(G, V)), G = null, d.V = ib);
      }
      bz = !1;
    } : n || c ? function(d, k, E, G, V) {
      function x() {
        W && (ja = Eb(ja), C("[CSS Loader] onComplete"), Xa = db() + 999, ba(fa, 0, 99), n ? W.onerror = null : W.removeEventListener("load", x, !1), W = null);
      }
      function fa() {
        S(G, V) ? (G = null, ba(E, !0)) : db() < Xa ? ba(fa, 0, 99) : (G = null, ba(E, !1));
      }
      var W = new Image(), ja = ba(x, 0, 5E3), Xa;
      n ? (C("[CSS Loader] img.onerror + mesure"), W.onerror = x) : (C('[CSS Loader] img.addEventListener("load") + mesure'), W.addEventListener("load", x, !1));
      W.src = d.href = k;
    } : function(d, k, E) {
      C("[CSS Loader] UNSUPPORTED");
      ba(E, !1);
    }, S = !u && !b && function(d, k) {
      C("[CSS Loader] elmTest.offsetWidth = " + d.offsetWidth);
      return d.offsetWidth !== k;
    };
    Qc = Z && 0 >= Ya.conpare(Za, "0.9");
    Zb = !(7.2 > I || Qc);
    $b = function(d) {
      U ? Va ? N.write('<script src="' + d + '">\x3c/script>') : pb("[DynamicScvriptLoader] Document already loaded! " + d) : Va || Ba.length ? Ba.push(d) : Sa(d);
    };
    ac = function(d) {
      U ? C("[DynamicScvriptLoader] " + d + " loaded.") : d === ia ? Sa(Ba.shift()) : pb(d + " <> " + ia);
    };
    var U = !Zb, X = Zb && 7.5 > I, ia;
    if (!U) {
      var Ba = [];
      X && (Pc = !0);
      eb(function() {
        Sa(Ba.shift());
      });
      var Sa = function(d) {
        if (ia = d) {
          X ? Dc[0].src = d : ra(vb, "script", {src:d});
        }
      };
    }
    var Ia = [], Ga = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!Hc) {
      var xa = cb.transition !== v || cb["-o-transition"] !== v || cb["-moz-transition"] !== v || cb["-webkit-transition"] !== v;
      wc(function(d) {
        if (d.H && wb) {
          d = d.G;
          var k = Qa(d), E = "", G;
          if ("A" === ab(k) && 1 === Yc(k).length) {
            var V = Ra(k, "href");
            var x = V.split("?")[0].split("#")[0].split(".");
            x = (x[x.length - 1] || "").toLowerCase();
            if ((G = 0 < V.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + x + ".")) {
              la(k, Ga, O);
              la(d, "click", O);
              la(k, "click", H);
              xa && (E = d.naturalWidth + "px", Ha(d, "width", E));
              Ab(k, "js-pica-thumbnail");
              for (x = k; x = Qa(x);) {
                if (nb(x, "caption")) {
                  Ab(x, "js-captioned-thumbnail");
                  var fa = x;
                  var W = cd(fa);
                  break;
                }
              }
              Ia.push({u:k, L:fa, S:W, Z:d.src, $:E, N:V, F:d, M:G ? 0 < V.indexOf("/img/a/") ? 2 : 3 : 0 < V.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Gb(function(d, k) {
        for (d = -1; k = Ia[++d];) {
          La(k.u, Ga, O), La(k.F, "click", O), La(k.u, "click", H);
        }
      });
    }
    var Ka = ["jsSidebarFixer1", "jsSidebarFixer2"], h = !(9 > B || I || 1 <= Z && 1.3 > Z || Sc), e = !(5 > Ca || 2.2 > kb || 6 > da(12) || Pa(30) && 534 > sa || Pa(32) || 7 > B || 9 > I || 1 > Z), w = e || 6 === B || 1 > Z, r = 7.5 > I, q, l, J, z = nd && Lc, M = 0, t = 0, F, R, ka, qa;
    hd || Hc || (Hb(function(d) {
      if (d) {
        if (!wb) {
          return !0;
        }
        d = -1;
        var k;
        q = xb("jsSide");
        l = wb;
        if (!q) {
          return !0;
        }
        Kb(P);
        vc(P);
        J = Rb(sc(q), "div", {id:"jsSidebarFixer"});
        la(Y, "blur", na);
        for (yc(J, ca); 1 < lb(q).length;) {
          J.appendChild(lb(q)[1]);
        }
        for (; k = Ka[++d];) {
          ed(xb(k), ha);
        }
        B || jb || 2 > Da || (F = cb.perspective !== v || cb.MozPerspective !== v || cb["-webkit-perspective"] !== v);
        P();
        return !0;
      }
    }), Gb(function() {
      for (var d = -1, k; k = Ka[++d];) {
        fd(xb(k), ha);
      }
      La(Y, "blur", na);
      dd(J, ca);
    }));
    var Ta, Ma, Na, bb, f, g, y, p;
    Hb(function(d) {
      if (d) {
        if (!wb) {
          return !0;
        }
        var k = lb(va);
        d = Rb(k[0], "div");
        if (e) {
          Wa(d, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; k.length;) {
            d.appendChild(k.shift());
          }
          fb || (Wa(d, "width:100%;height:100%;overflow:auto;position:relative"), Wa(ub, "overflow:hidden"), Wa(va, "overflow:hidden"));
          d = Zc(d, "div");
          Wa(d, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        ra(d, "div", v, z ? "transform" + (F ? "3D" : "") : e ? "pos:fixed" : "pos:absolute");
        k = ra(d, "div");
        Ta = ra(k, "span");
        Ma = ra(k, "span");
        Na = ra(d, "div");
        bb = ra(d, "div");
        Wa(bb, "position:absolute;left:0;top:0;width:54px;background:#242");
        g = ra(d, "div");
        Wa(g, "position:absolute;left:0;width:54px;background:#363");
        f = ra(d, "div");
        Wa(f, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        y = ra(g, "div");
        Wa(y, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    eb(function() {
      function d(fa, W, ja, Xa) {
        var Aa = Xa ? "div" : "cite";
        if (0 === W.indexOf("urn:isbn:")) {
          W = W.substr(9).toUpperCase().split("-").join("");
          if (13 === W.length) {
            W = W.toString().slice(3, -1);
            for (var ta = 0, Ua = 0; 9 > Ua; Ua++) {
              ta += (W.charAt(Ua) - 0) * (10 - Ua);
            }
            ta = (11 - ta % 11) % 11;
            ta = 10 === ta ? "X" : ta.toString();
            W += ta;
          }
          10 === W.length && (W = "//www.amazon.co.jp/exec/obidos/ASIN/" + W + "/itozyun-22/ref=nosim/");
        }
        ja = Xa ? Rb(sc(E), Aa, {className:ja}) : ra(E, Aa, {className:ja});
        ra(ja, "a", 0 === W.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:W} : {href:W}, fa);
      }
      if (wb) {
        for (var k = yb(wb, "blockquote"), E, G = -1, V, x; E = k[++G];) {
          V = Ra(E, "title"), x = Ra(E, "cite"), V && x ? (mb(E, "title"), d(V, x, "js-generated-link-in-blockquote", !0)) : x && (mb(E, "cite"), d(Y.decodeURI ? decodeURI(x) : x, x, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Q, za, Ja, hb, Ob, Ib, Cc;
    eb(function() {
      var d = xb("blog2slide-start");
      if (d) {
        var k = N.onfullscreenchange !== v ? "f" : N.onmozfullscreenchange !== v ? "mozF" : N.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        Q = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== k || Q ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', la(d.firstChild, "click", L), d = Qa(d), za = Qa(d), Ob = yb(d, "section"), Ja = N.createElement("h1"), Ja.innerHTML = yb(va, "h1")[0].innerHTML, Cc = Ob.length, Ob.splice(0, 0, Ja), 0 !== k ? la(N, k + "ullscreenchange", aa) : B ? la(N, "MSFullscreenChange", aa, !1) : vc(aa)) : $a(d);
      }
    });
  })();
  var Pb, Ub = !Fc || .9 > Z || 8 > I || 5.5 > B, tb;
  (function() {
    function O(h) {
      return h === "" + h;
    }
    function H(h, e) {
      return Ub ? new L(h, e) : new Fc(h, e);
    }
    function P(h, e, w, r, q) {
      var l = aa.codeBlocks[aa.codeBlocks.length - 1], J = T(), z = J - a;
      switch(w || 0) {
        case 1:
          aa.initRegExpCount++;
          aa.initRegExpTotal += z;
          aa.initRegExpMax < z && (aa.initRegExpMax = z, aa.initRegExpSource = q.toString(), aa.initRegExpInstance = q);
          break;
        case 2:
          l.decorateCount++;
          l.decorateTime += z;
          break;
        case 3:
          l.updateDOMTime += z;
      }
      if (J - oa < c && !r) {
        return a = J, h(e);
      }
      ba(na, {U:h, Y:e});
    }
    function na(h) {
      oa = a = T();
      h.U(h.Y);
    }
    function ea(h, e) {
      h && Pb[h] || (h = n.test(e) ? "default-markup" : "default-code");
      var w = !!Pb[h];
      w && P(X, h, 0, !0);
      return w;
    }
    function ha() {
      function h(Ma, Na, bb) {
        Na && (e.h = e.h || [], e.h.push({l:e, B:e.B, O:1, s:J, D:Ma, o:Na, m:bb, R:{}, v:0}));
      }
      var e = b, w = e.m, r = w[0], q = w[2], l = e.D, J = e.s, z = e.aa.shift(), M = e.R;
      if (z) {
        var t = M[z], F;
        if (!(0 <= t)) {
          if (F = r[z.charAt(0)]) {
            var R = z.match(F[1]);
            t = F[0];
          } else {
            for (t = 0, r = -1; F = q[++r];) {
              if (R = z.match(F[1])) {
                t = F[0];
                break;
              }
            }
          }
          !(F = O(t)) || R && O(R[1]) || (F = !1, t = 11);
          F || (M[z] = t);
        }
        q = e.v;
        M = z.length;
        e.v += M;
        if (F) {
          F = R[1];
          r = z.indexOf(F);
          var ka = F.length, qa = r + ka;
          R[2] && (qa = M - R[2].length, r = qa - ka);
          h(l + q, z.substr(0, r), w);
          if (ka && ea(t, F)) {
            h(l + q + r, F);
            var Ta = !0;
          }
          h(l + q + qa, z.substr(qa), w);
          e.h && e.h.length && (b = e.h.shift());
          Ta || (b !== e ? P(S, v, 2) : P(ha, v, 2));
        } else {
          J.push(l + q, t), P(ha, v, 2);
        }
      } else {
        e.l ? (b = e.l.h.shift()) ? P(S, v, 2) : (b = e.l, P(ha, v, 2)) : P(Sa, v, 2);
      }
    }
    function ca(h) {
      if (U.length) {
        var e = U.shift(), w = wa[e];
        if (w.pop) {
          wa[e] = w = H(w[0], w[1]);
        } else if (O(w)) {
          wa[e] = w = H(w);
        } else {
          return ca(h);
        }
        P(ca, h, 1, !1, w);
      } else {
        P(X, h);
      }
    }
    function ma(h) {
      for (var e, w = h.firstChild; w; w = w.nextSibling) {
        var r = w.nodeType;
        e = 1 === r ? e ? h : w : 3 === r ? u.test(w.nodeValue) ? h : e : e;
      }
      return e === h ? v : e;
    }
    Pb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var K = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Ea = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
    pa = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), T = Vb.now || function() {
      return +new Vb();
    }, L, aa = {useRegExpCompat:Ub, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var oa = T();
    var a, b, m, A, c = 5 > B ? 60 : 5.5 > B ? 0 : Ub ? 20 : 10, n, u;
    tb = [function(h) {
      Y.RegExpCompat = L = h;
    }, function() {
      n = H("^\\s*<");
      u = H("\\S");
    }];
    Ub || (tb[1](), tb = v);
    var D = function() {
      var h = b, e = h.W, w = ia(h.B, h.O), r = h.o = w.o;
      h.I = w.I;
      ea(e, r) || (b = v, P(Ka, v, 0, !0));
    };
    var S = function() {
      var h = b;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.D, 0);
      P(ha, v, 2);
    };
    var U = [];
    var X = function(h) {
      function e(t) {
        var F = t;
        0 <= t && (F = Ea[t]);
        0 <= F[1] && (F[1] = w(F[1]));
        return F;
      }
      function w(t) {
        var F = t;
        return 0 <= t && (F = wa[t], !F.exec) ? (U.push(t), t) : F;
      }
      var r = b, q = Pb[h];
      O(q) && (q = Pb[h] = Pb[q]);
      var l = q[0];
      if (0 <= l) {
        l = K[l];
        if (0 <= l["-num"]) {
          var J = l["-num"];
          delete l["-num"];
          for (var z = -1; 9 > z;) {
            l["" + ++z] = J;
          }
        }
        q[0] = l;
      }
      for (var M in l) {
        l[M] = e(l[M]);
      }
      q[1] = w(q[1]);
      l = q[2];
      z = 0;
      for (J = l.length; z < J; ++z) {
        l[z] = e(l[z]);
      }
      U.length ? P(ca, h, 2) : (r.m ? r.l && (r.l.h[0].m = q) : r.m = q, P(S, v, 1));
    };
    var ia = function(h, e) {
      function w(M) {
        var t = M.nodeType;
        if (1 === t) {
          if (!nb(M, "nocode")) {
            for (t = M.firstChild; t; t = t.nextSibling) {
              w(t);
            }
            t = ab(M);
            if ("BR" === t || "LI" === t) {
              r[J] = "\n", l[J << 1] = q++, l[J++ << 1 | 1] = M;
            }
          }
        } else if (3 === t || 4 === t) {
          if (t = M.nodeValue) {
            t = e ? t.split("\r\n").join("\n").split("\r").join("\n") : t.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), r[J] = t, l[J << 1] = q, q += t.length, l[J++ << 1 | 1] = M;
          }
        }
      }
      var r = [], q = 0, l = [], J = 0;
      w(h);
      var z = r.join("");
      "\n" === z.charAt(z.length - 1) && (z = z.substr(0, z.length - 1));
      return {o:z, I:l};
    };
    var Ba = function(h, e, w) {
      function r(t) {
        var F = t.nodeType;
        if (1 === F && !nb(t, "nocode")) {
          if ("BR" === ab(t)) {
            q(t), t.parentNode && $a(t);
          } else {
            for (t = t.firstChild; t; t = t.nextSibling) {
              r(t);
            }
          }
        } else if ((3 === F || 4 === F) && w) {
          var R = t.nodeValue, ka = R.indexOf("\r\n"), qa = 2;
          -1 === ka && (ka = R.indexOf("\n"), qa = 1);
          -1 === ka && (ka = R.indexOf("\r"));
          -1 !== ka && (F = R.substr(0, ka), t.nodeValue = F, (R = R.substr(ka + qa)) && tc(t, R), q(t), F || $a(t));
        }
      }
      function q(t) {
        function F(ka, qa) {
          var Ta = qa ? ka.cloneNode(!1) : ka, Ma = ka.parentNode;
          if (Ma) {
            Ma = F(Ma, 1);
            var Na = ka.nextSibling;
            Ma.appendChild(Ta);
            for (var bb = Na; bb; bb = Na) {
              Na = bb.nextSibling, Ma.appendChild(bb);
            }
          }
          return Ta;
        }
        for (; !t.nextSibling;) {
          if (t = t.parentNode, !t) {
            return;
          }
        }
        t = F(t.nextSibling, 0);
        for (var R; (R = t.parentNode) && 1 === R.nodeType;) {
          t = R;
        }
        J.push(t);
      }
      for (var l = N.createElement("li"); h.firstChild;) {
        l.appendChild(h.firstChild);
      }
      for (var J = [l], z = 0; z < J.length; ++z) {
        r(J[z]);
      }
      if (e === (e | 0)) {
        if (10 <= e && 7.2 > I) {
          var M = N.createElement("ol");
          M.innerHTML = '<li value="' + e + '">' + l.innerHTML + "</li>";
          J[0] = M.firstChild;
        } else {
          sb(l, "value", e);
        }
      }
      M = ra(h, "ol", {className:"linenums"});
      h = Math.max(0, e - 1 | 0) || 0;
      z = 0;
      for (e = J.length; z < e; ++z) {
        l = J[z], ec(l, "L" + (z + h) % 10), l.firstChild || $c(l, "\u00a0"), M.appendChild(l);
      }
    };
    var Sa = function() {
      var h = b, e = h.o, w = e.length, r = 0, q = h.I, l = q.length, J = 0, z = h.s, M = z.length, t = 0;
      z[M] = w;
      var F, R;
      for (R = F = 0; R < M;) {
        z[R] !== z[R + 2] ? (z[F++] = z[R++], z[F++] = z[R++]) : R += 2;
      }
      M = F;
      for (R = F = 0; R < M;) {
        var ka = z[R], qa = z[R + 1];
        for (R += 2; R + 2 <= M && z[R + 1] === qa;) {
          R += 2;
        }
        z[F++] = ka;
        z[F++] = qa;
      }
      z.length = F;
      h = h.B;
      M = "";
      h && (M = h.style.display, Ha(h, "display", "none"));
      for (; J < l;) {
        F = q[J + 2] || w;
        ka = z[t + 2] || w;
        R = Math.min(F, ka);
        qa = q[J + 1];
        var Ta;
        if (1 !== qa.nodeType && (Ta = e.substring(r, R))) {
          9 > B && (Ta = Ta.split("\n").join("\r"));
          var Ma = Rb(qa, "span", {className:pa[z[t + 1]]}, Ta);
          $a(qa);
          r < F && (q[J + 1] = tc(Ma, e.substring(R, F)));
        }
        r = R;
        r >= F && (J += 2);
        r >= ka && (t += 2);
      }
      h && Ha(h, "display", M);
      b = v;
      P(Ka, v, 3, !0);
    };
    var Ia = [], Ga;
    aa.readyTime = T() - oa;
    Hb(function(h) {
      if (h) {
        h = [Fb("pre"), Fb("code"), Fb("xmp")];
        for (var e = 0; e < h.length; ++e) {
          for (var w = 0, r = h[e].length; w < r; ++w) {
            xa(h[e][w]);
          }
        }
        return !0;
      }
    });
    var xa = function(h) {
      Ia.push(h);
      Ga = Ia.length;
      1 === Ga && (Ec ? ba(Ec, Ka) : tb ? tb.push(function() {
        ba(Ka);
      }) : ba(Ka));
    };
    var Ka = function() {
      function h(J, z) {
        return (J.split(z)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ga !== Ia.length && A && A(Ga - Ia.length, Ga);
        var e = Ia.shift();
        if (e) {
          oa = T();
          if (nb(e, "prettyprint") && !nb(e, "prettyprinted")) {
            for (var w = !1, r = e.parentNode; r !== va; r = r.parentNode) {
              var q = ab(r);
              if (("PRE" === q || "XMP" === q || "CODE" === q) && nb(r, "prettyprint")) {
                w = !0;
                break;
              }
            }
            if (!w) {
              w = e.className;
              Ab(e, "prettyprinted");
              r = !1;
              if (!r) {
                r = h(w, "lang-") || h(w, "language-");
                var l;
                !r && (l = ma(e)) && "CODE" === ab(l) && (r = h(l.className, "lang-") || h(l.className, "language-"));
              }
              q = ab(e);
              "PRE" === q || "XMP" === q ? q = 1 : (q = e.currentStyle, l = N.defaultView, q = (q = q ? q.whiteSpace : l && l.getComputedStyle ? l.getComputedStyle(e, null).getPropertyValue("white-space") : 0) && "pre" === q.substr(0, 3));
              l = !1;
              (l = "true" === l || +l) || (l = h(w, "linenums:") || nb(e, "linenums"), l = l.length ? +l : l);
              l && Ba(e, l, q);
              b = {W:r, B:e, ba:l, O:q, D:0, v:0, R:{}, s:[]};
              aa.codeBlocks.push({elm:e, lang:r, readyTime:T() - oa, decorateTime:0, decorateCount:0, updateDOMTime:0});
              P(D);
              return;
            }
          }
          P(Ka, v, 0, !0);
        } else {
          m && m(aa);
        }
      }
    };
    Y.PR = {RegExpProxy:H, prettifyElement:xa, registerCompleteHandler:function(h, e) {
      m = h;
      A = e;
    }};
  })();
  var Dc = N.scripts || Fb("script");
  var ya = Dc[Dc.length - 1].src.split("/");
  --ya.length;
  "js" === ya[ya.length - 1] && --ya.length;
  (ya = ya.join("/")) && (ya += "/");
  C("[p_assetUrl] " + ya);
  var hd = md || "1" === Ra(va, "mob");
  Yb = (hd ? "mb" : "pc") + "/";
  eb(function() {
    var O;
    (O = xb("logger")) || alert("#logger not found!");
    O ? (C = bz, pb = function(H) {
      ra(O, "DIV", {style:{color:"red"}}, H);
    }, Y.onerror = function(H, P, na) {
      pb(H + ", " + P + ", " + na);
      return !0;
    }) : Y.console ? (C = console.log, pb = console.error) : I ? (C = ib, pb = opera.postError) : C = pb = ib;
    for (; cc.length;) {
      C(cc.shift());
    }
    for (; dc.length;) {
      pb(dc.shift());
    }
    cc = dc = v;
    function bz(H) {
      ra(O, "DIV", v, H);
    }
    bz = !1;
  });
  6.1 > Ca && (Kb ? Kb(qc) : la(Y, "scroll", qc));
  Gb(Uc);
  6.1 > Ca && (Kb ? Kb(rc) : la(Y, "scroll", rc));
  Gb(Vc);
  10 > B && (11 !== kd || 5 !== B) || (9 > I || 1 > Z || !Db && !Y.addEventListener ? N.write('<link href="' + ya + "css/" + Yb + nc + '" rel="stylesheet"' + (8 > I ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > I || 1.5 > Z || 534 > sa || 5 > Ca || 7 > Da || 3 > kb) && eb(function() {
    ra(vb, "link", {href:ya + "css/" + Yb + nc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Ub) {
    if (Zb) {
      var Ec = function(O) {
        Y.RegExpCompat = bz;
        Ec = v;
        $b(ya + "js/regexpcompat.js");
        function bz(H) {
          for (var P; P = tb.shift();) {
            P(H);
          }
          tb = v;
          ba(O);
          ac(ya + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Y.RegExpCompat = function(O) {
        for (var H; H = tb.shift();) {
          H(O);
        }
        tb = v;
        ac(ya + "js/regexpcompat.js");
      }, $b(ya + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

