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
(function(Ka, T, db, mc, I, Rb, Pc, Db, Za, Sb, Tb, nc, Ub, y) {
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
  var va = I.body, Na = va.style, kb, eb, lb, La = Ka[1], B = U(2) || U(3), mb = U(7), Ua = U(5) || U(6), F = U(8) || U(9), Q = U(11) || U(12), xb = Q && 0 <= Ka.conpare(La, "1.9.1"), Eb = U(13), sa = U(15), Ca = U(16) || U(17), oc = U(10) || U(25), wa = U(20) || U(22), pc = U(23), Va = U(21), Fb = U(24), Qc = wa || pc || Va || Fb, qc = wa && Za(Rb.userAgent.split("Edg/")[1]), Rc = Za(Rb.appVersion.split("Trident/")[1]) + 4, Wb = Ea(35) || Ea(36) || Ea(37), Sc = 0 <= Rb.userAgent.indexOf("Googlebot/"), 
  $a = 0.9 > Q, Xb = (mb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > F ? "opr70" : 8 > F ? "opr72" : 9.5 > F ? "opr" + (F | 0) : Q && !xb ? 1.4 <= Q ? "gck19" : 1.3 <= Q ? "gck13" : 1 <= Q ? "gck12" : $a ? 0.8 <= Q ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Gb = "", Tc = Ea(1) || Ea(2) || Ea(3) || Ea(4) || Ea(8) || Ea(9) || Ea(10), rc, fb = 8 > B || 7.2 > F ? !1 : y, sc = Na.transform !== y ? "transform" : Na["-o-transform"] !== y ? "-o-transform" : 
  Na["-ms-transform"] !== y ? "-ms-transform" : Na.MozTransform !== y ? "-moz-transform" : Na["-webkit-transform"] !== y ? "-webkit-transform" : "", Qa = [], tc = [], Ra = [], Yb, uc, vc, wc, Hb, xc, yc, Ib, Jb, zc = !1, Uc = 525 > sa || 3.2 > Ca || 2.2 > Va || 10 > F || Q && !xb || U(25) || 10 > U(3) || Ea(32) || Ea(30) || Ea(3), fa, yb, Kb, Ac, Vc = !!va.getBoundingClientRect, Zb, Bc, $b, Cc, Sa = Db.now || function() {
    return +new Db();
  };
  (function() {
    function N() {
      for (var S, G = 0, ha = Sa(); G < ia.length;) {
        ha < ia[0].t ? ++G : (S = ia.splice(G, 1)[0], S.f(S.p));
      }
      ja = ia.length ? Tb(N, ya) : 0;
    }
    function K() {
      for (var S, G = 0; G < Y.length; ++G) {
        S = Y[G], S.f();
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
      for (var G = Y.length, ha; ha = Y[--G];) {
        if (ha.C === S) {
          Y.splice(G, 1);
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
    fa = function(S, G, ha) {
      ia.length || (ja = Tb(N, ya));
      ia.push({f:S, p:G, C:++qa, t:Sa() + (ya < ha ? ha : ya)});
      return qa;
    };
    yb = function(S) {
      for (var G = ia.length, ha; ha = ia[--G];) {
        if (ha.C === S) {
          ia.splice(G, 1);
          break;
        }
      }
      return 0;
    };
    $b = function() {
      ja && (ba(), ja = Tb(N, ya));
    };
    Cc = ba;
    var ia = [], ya = 16, qa = 0, ja;
    if (5 > B || mb) {
      T._wdb_ontimer = N, N = "_wdb_ontimer()";
    }
  })();
  var nb, ob, Dc, gb, Ec, Oa, ab, Fc, ac, Ha, Lb, Gc, bc, Aa, hb, Hc, Ma, Fa, bb, Wa, qb, Ic, Mb, Xa, ib, cc, Ta, zb, Jc;
  (function() {
    function N(b, f, m) {
      var C = ["<", b], d = 1, p, q;
      if (f) {
        for (p in f) {
          var A = f[p];
          if (null != A && "" !== A) {
            if ("style" === p) {
              C[++d] = ' style="';
              for (q in A) {
                for (var R = ++d, W, P = [], ca = q.split(""), ra = ca.length; ra;) {
                  W = ca[--ra], "A" <= W && "Z" >= W && (W = "-" + W.toLowerCase()), P[ra] = W;
                }
                C[R] = P.join("") + ":" + A[q] + ";";
              }
              C[++d] = '"';
            } else {
              "className" === p && (p = "class"), C[++d] = " " + p + '="' + A + '"';
            }
          }
        }
      }
      C[++d] = ">";
      null != m && (G && "font" !== b ? C[++d] = "<font>" + K(m) + "</font>" : C[++d] = K(m));
      C[++d] = "</" + b + ">";
      return C.join("");
    }
    function K(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function M(b) {
      var f = b.split("-"), m = f.length;
      if (2 > m) {
        return b;
      }
      for (; 1 < m;) {
        b = f[--m], f[m] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return f.join("");
    }
    function ba(b) {
      return Y(I, b);
    }
    function Y(b, f) {
      var m = "*" === f;
      m = G ? m ? b.all : b.all.tags(f.toUpperCase()) : 6 > B && m ? b.all : b.getElementsByTagName(f);
      for (var C = [], d = 0, p = m.length; d < p; ++d) {
        C[d] = m[d];
      }
      return C;
    }
    function X(b, f) {
      var m = [], C = 0, d, p = -1;
      if (9 > B || !b.getElementsByClassName) {
        var q = 6 > B ? b.all : b.getElementsByTagName("*");
      } else {
        var A = !0;
        q = b.getElementsByClassName(f);
      }
      for (d = q.length; C < d; ++C) {
        var R = q[C];
        if (A || (G || 1 === R.nodeType) && qa(R, f)) {
          m[++p] = R;
        }
      }
      return m;
    }
    function V(b) {
      return G ? b.parentElement : b.parentNode;
    }
    function ma(b, f, m, C, d, p) {
      if (G) {
        var q = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var A = ab(2 > b ? Oa(f) : f);
        A = 2 > b ? A.indexOf(f) + b : A.length;
        f.insertAdjacentHTML(q, N(m, C, d));
        f = ab(f)[A];
        null != d && ("font" === m ? f.nodeType = 3 : f.children[0].nodeType = 3);
      } else if (ha) {
        f = I.createElement(N(m, C));
      } else {
        f = p ? I.createElementNS("http://www.w3.org/2000/svg", m) : I.createElement(m);
        if (C) {
          for (q in C) {
            if ((b = C[q]) || 0 === b) {
              switch(q) {
                case "class":
                case "className":
                  Mb(f, b);
                  break;
                case "style":
                  p = f.style;
                  for (A in b) {
                    p[A] = b[A];
                  }
                  break;
                default:
                  bb(f, q, b);
              }
            }
          }
          !F || "a" !== m && "A" !== m || !C.href || C["tag-index"] || C.tagIndex || bb(f, "tagIndex", "-0");
        }
        da || null != d && ia(f, d);
      }
      return f;
    }
    function ia(b, f) {
      if (G) {
        return ma(2, b, "font", y, f);
      }
      var m = I.createTextNode("" + f);
      b.appendChild(m);
      return m;
    }
    function ya(b, f) {
      9 > B ? b.className = f : b.setAttribute("class", f);
    }
    function qa(b, f) {
      return -1 !== (" " + b.className + " ").indexOf(" " + f + " ");
    }
    function ja(b, f, m) {
      if (8 > F || 5.5 > B) {
        f = M(f);
      }
      b.style[f] = m;
    }
    function S(b) {
      return 5.5 > B ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var G = 5 > B;
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
      b = G ? b.children : b.childNodes;
      for (var f = [], m = b.length; m;) {
        f[--m] = b[m];
      }
      return f;
    };
    Fc = function(b) {
      var f = !(7.03 < F && 7.2 > F) && b.children;
      b = f ? f : b.childNodes;
      for (var m = [], C = b.length, d = -1, p; C;) {
        if (p = b[--C], f || 1 === p.nodeType) {
          G && "FONT" === p.tagName || (m[++d] = p);
        }
      }
      return m;
    };
    ac = function(b) {
      return G ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Ha = function(b, f, m, C, d) {
      f = ma(2, b, f, m, C, d);
      G || (b.appendChild(f), da && null != C && ia(f, C));
      return f;
    };
    Lb = function(b, f, m, C, d) {
      f = ma(0, b, f, m, C, d);
      G || (V(b).insertBefore(f, b), da && null != C && ia(f, C));
      return f;
    };
    Gc = ia;
    bc = function(b, f) {
      var m;
      if (G) {
        return ma(1, b, "font", y, f);
      }
      var C = I.createTextNode("" + f);
      (m = b.nextSibling) ? Oa(b).insertBefore(C, m) : Oa(b).appendChild(C);
      return C;
    };
    Aa = function(b) {
      G ? b.outerHTML = "" : (5.5 > B && (b.style.filter = ""), Oa(b).removeChild(b));
    };
    hb = function(b, f) {
      if (b.contains) {
        return b.contains(f);
      }
      for (; f && f !== kb;) {
        if (f = Oa(f), b === f) {
          return !0;
        }
      }
    };
    Hc = function(b) {
      return G ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ha = 9 > B, da = ha;
    Ma = function(b) {
      return b.tagName.toUpperCase();
    };
    Fa = function(b, f) {
      if (8 > F || 5.5 > B) {
        f = M(f);
      }
      var m = b.getAttribute(f);
      return F && "tabIndex" === f ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    bb = function(b, f, m) {
      if (F && "tab-index" === f) {
        "-1" === m ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", m);
      } else {
        if (8 > F || 5.5 > B) {
          f = M(f);
        }
        b.setAttribute(f, m);
      }
    };
    Wa = function(b, f) {
      if (F && "tab-index" === f) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > F || 5.5 > B) {
          f = M(f);
        }
        b.removeAttribute(f);
      }
    };
    qb = function(b, f) {
      if (F && "tab-index" === f) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > F || 5.5 > B) {
        f = M(f);
      }
      return b.hasAttribute ? b.hasAttribute(f) : null != b.getAttribute(f);
    };
    Ic = function(b) {
      return b.className;
    };
    Mb = ya;
    Xa = qa;
    ib = function(b, f) {
      var m;
      if (!qa(b, f)) {
        if (m = b.className) {
          m += " ";
        }
        ya(b, m + f);
      }
    };
    cc = function(b, f) {
      if (qa(b, f)) {
        var m = b.className.split(" ");
        m.splice(m.indexOf(f), 1);
        ya(b, m.join(" "));
      }
    };
    Ta = ja;
    zb = function(b, f) {
      var m, C = -1, d;
      if (5.5 > B) {
        if (m = S(b)) {
          for (m = m.split(";"); d = m[++C];) {
            ja(b, d.split(":")[0], "");
          }
        }
        if (f) {
          for (C = -1, m = f.split(";"); d = m[++C];) {
            var p = d.split(":")[0];
            ja(b, p, d.substr(p.length + 1));
          }
        }
      } else if (7.1 > F) {
        if (b.setAttribute("style", ""), f) {
          for (m = f.split(";"); d = m[++C];) {
            d = d.split(":"), ja(b, d[0], d[1]);
          }
        }
      } else {
        9 > F || 1 > Q ? f ? b.setAttribute("style", f) : b.removeAttribute("style") : b.style.cssText = f;
      }
    };
    Jc = S;
    Qa.splice(0, 0, function() {
      function b(R) {
        R = ab(R);
        for (var W = R.length, P, ca, ra; W;) {
          if (P = R[--W], ca = P.nodeType, 8 === ca) {
            f && q.push(P);
          } else if (1 === ca) {
            switch(ca = Ma(P), "/" === ca.charAt(0) && (ca = ca.substr(1), A[ca] = !0), ca) {
              case "STYLE":
                if (7.2 <= F && 9 > F) {
                  break;
                }
              case "LINK":
                G || C || hb(eb, P) || p.push(P);
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
                if (Sc || qb(P, "async")) {
                  break;
                }
                if (m) {
                  P.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (qb(P, "skip-cleanup")) {
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
        for (; p[0];) {
          eb.appendChild(p.pop());
        }
        for (; q[0];) {
          Aa(q.pop());
        }
      }
      cc(kb, "nojs");
      lb = nb("jsMain");
      var f = !(8 > F || 5 > B || mb || $a), m = wc, C = 7 > B, d = ["og:", "twitter:", "fb:"], p = [], q = [], A = {};
      b(kb);
    });
  })();
  var ka, Ia, Pa, pb, dc, rb, sb, Ab, ec, fc, Kc, Lc, Mc, Bb, Ja, gc;
  (function() {
    function N() {
      return v ? r ? 2 : t ? 3 : 1 : 0;
    }
    function K(c) {
      Ia(T, "load", K);
      K = y;
      ba(Qa, c, !0);
      Pa = Qa = y;
    }
    function M(c, a) {
      sb(function() {
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
      Qa || G.length || fa(X);
      G.push(c, a, k);
    }
    function X() {
      var c = G, a;
      for (G = []; a = c.shift();) {
        ba(a, c.shift(), c.shift());
      }
    }
    function V(c) {
      var a = c || event;
      c = da[a.type];
      var k = -1, h, z;
      5 > B ? a = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : B ? (a.target = a.srcElement, a.preventDefault = function() {
        a.returnValue = !1;
      }, a.stopPropagation = function() {
        a.cancelBubble = !0;
      }) : f && (a.K = a.stopPropagation, a.stopPropagation = function() {
        z = !0;
      });
      for (; h = c[++k];) {
        h.j === this ? (this.g = h.i, B && (a.currentTarget = this), this.g(a), B ? (this.g = db, this.g = y) : delete this.g) : 7.2 > F && this === I && h.j === T && (T.g = h.i, T.g(a), delete T.g);
      }
      if (B) {
        return a.preventDefault = a.stopPropagation = db, a.preventDefault = a.stopPropagation = y, a.returnValue;
      }
      f && (a.defaultPrevented && "click" === a.type && "A" === a.target.tagName && (C = !0), z && !C && a.K(), a.K = a.stopPropagation = y);
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
      !Qa && D && (yb(D), D = fa(ya));
    }
    function ya() {
      D = 0;
      ba(w);
    }
    function qa(c) {
      Qa || ba(J, c);
    }
    var ja = T.matchMedia, S, G = [];
    Qa.push(function() {
      M = y;
      S = Ha(va, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Pa(function() {
        G.length && fa(X);
      });
    });
    ka = function(c, a, k, h) {
      if (m) {
        c.addEventListener(a, k, h ? ha ? h : h.capture || !0 === h : !1);
      } else {
        var z = {j:c, i:k};
        h = da[a];
        var ea = "on" + a, aa, la;
        if (h) {
          for (aa = h.length; la = h[--aa];) {
            if (la.j === c && la.i === k) {
              return;
            }
          }
          da[a].push(z);
        } else {
          da[a] = h = [z], b || (a = c[ea], "function" === typeof a && a !== V && h.unshift({j:c, i:a}));
        }
        b ? c.attachEvent(ea, V) : c[ea] = V;
      }
    };
    Ia = function(c, a, k, h) {
      if (m) {
        c.removeEventListener(a, k, h ? ha ? h : h.capture || !0 === h : !1);
      } else {
        h = da[a];
        a = "on" + a;
        var z, ea, aa;
        if (h) {
          for (z = h.length; ea = h[--z];) {
            ea.j === c && (ea.i === k ? h.splice(z, 1) : aa = !0);
          }
          aa || (b ? c.detachEvent(a, V) : B ? (c[a] = db, c[a] = null) : delete c[a]);
        }
      }
    };
    var ha = !B && !mb && (new Pc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), da = {}, b = !1, f = 525.13 > sa, m = !f && !mb && T.addEventListener, C;
    f && kb.addEventListener("click", function(c) {
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
      var p = function() {
        if (p) {
          var c = I.readyState;
          "loaded" === c || "complete" === c ? (p = y, K()) : fa(p);
        }
      };
      fa(p);
    } else {
      ka(T, "load", K);
    }
    B || !$a && 1.8 > Q ? ka(T, "unload", function(c) {
      ba(d, c, !0);
    }) : d = y;
    sb = function(c) {
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
          Ba || (Ba = Ub(l, 333));
        } else if (R || P) {
          ka(I, "focus", ra, !0);
        } else {
          return;
        }
        for (var k = ca, h = 0, z = k.length; h < z; ++h) {
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
        for (var k = ca, h = 0, z = k.length; h < z; ++h) {
          if (k[h] === c && k[h + 1] === a) {
            k.splice(h, 2);
            k.length || (W ? Ba = Ac(Ba) : (R || P) && Ia(I, "focus", ra, !0));
            break;
          }
        }
      }
    };
    var q = 6 <= B || Ua || 52 <= Q || 15 <= wa || 534 <= sa || 5 <= Ca || pc || 4 <= Va || 4 <= Fb || 11.6 <= U(8) || 12 <= U(9), A = 8 <= F || wa || Va || Fb || sa || Ca, R = 8 > F, W = 6 > B, P = 52 > Q || Eb;
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
        for (var z = 0, ea = a.length; z < ea; ++z) {
          var aa = a[z];
          (aa === k || hb(aa, k)) && a[z + 1].call(aa, c);
        }
      };
    } else if (W) {
      ca = [];
      var Ba, pa, na, l = function() {
        na = T.onerror;
        T.onerror = e;
        var c = I.activeElement;
        if (pa !== c) {
          pa = c;
          for (var a = ca, k, h = 0, z = a.length; h < z; ++h) {
            k = a[h], (k === c || hb(k, c)) && a[h + 1].apply(k, [{target:c}]);
          }
        }
        T.onerror = na;
        na = y;
      }, e = function() {
        T.onerror = na;
        na = pa = y;
        return !0;
      };
    }
    ec = function(c) {
      Ra && Ra.push(c);
    };
    var x = 60 > Q || Eb, v, t, r;
    if (89 <= Q || 89 <= wa || Wb && 79 <= qc || ja && (ja("(forced-colors:none)").matches || ja("(forced-colors:active)").matches)) {
      gc = !0, M("(forced-colors:active)", function(c) {
        v = c.matches;
        Ja = N();
        Y(Ra, Ja);
      });
    } else if (10 <= B || Ua || Wb && qc) {
      gc = !0, M("(-ms-high-contrast:black-on-white)", function(c) {
        v = t = c.matches;
        Ja !== N() && (Ja = N(), Y(Ra, Ja));
      }), M("(-ms-high-contrast:white-on-black)", function(c) {
        v = r = c.matches;
        Ja !== N() && (Ja = N(), Y(Ra, Ja));
      }), M("(-ms-high-contrast:active)", function(c) {
        v = c.matches;
        Ja !== N() && (Ja = N(), Y(Ra, Ja));
      });
    } else if (Wb && (B || Q && 0 <= Ka.conpare(La, "1.8.1") || Eb)) {
      var L = function() {
        function c(h, z) {
          if (z && "transparent" === h) {
            return 382.5;
          }
          if ("#" === h.charAt(0)) {
            return parseInt("0x" + h.substr(1, 2), 16) + parseInt("0x" + h.substr(3, 2), 16) + parseInt("0x" + h.substr(5, 2), 16);
          }
          var ea = h.split("(")[1].split(",");
          return Za(ea[0]) + Za(ea[1]) + Za(ea[2]);
        }
        var a = I.defaultView;
        var k = a ? a.getComputedStyle(S, null) : S.currentStyle;
        a = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        a && (v = "#123456" !== a && "rgb(18,52,86)" !== a, t = c(a) < c(k, !0), r = c(a) > c(k, !0), Ja !== N() && (Ja = N(), Y(Ra, Ja, x)));
      };
      sb(function(c) {
        if (c) {
          return Ta(S, "color", "#123456"), Ta(S, "backgroundColor", "#123456"), x ? (L(), Ra = y) : Kb(L), L = y, !0;
        }
      });
    } else {
      Ra = N = y;
    }
    Ab = function(c) {
      u.push(c);
    };
    var u = [], O = 7.5 <= F && 8 > F;
    O && function() {
      for (var c = I.images, a = c.length, k; a;) {
        k = c[--a], k.J = k.src, Wa(k, "src");
      }
    }();
    Pa(function() {
      function c() {
        h ? (z = k[--h], O && bb(z, "src", z.J), uc(a, O ? z.J : z.src)) : Ab = u = y;
      }
      function a(aa) {
        ba(u, {G:z, H:aa}, !h);
        c();
      }
      var k = I.images || ob("img"), h = k.length;
      if (12 > F || 532 > sa) {
        c();
      } else {
        for (; h;) {
          var z = k[--h];
          var ea = 9 > B ? z.complete : 0 <= z.naturalWidth ? z.naturalWidth : z.width;
          Y(u, {G:z, H:ea}, !h);
        }
        Ab = u = y;
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
    rb = function(c) {
      J.push(c);
    };
    var J = [], Z = 1 > Q || 1.2 <= Q && 1.8 > Q || 7.2 >= F, oa;
    Z ? Kb(function() {
      var c = T.pageYOffset;
      oa !== c && (oa = c, qa({type:"scroll", cancelable:!1, stopPropagation:db, preventDefault:db}));
    }) : ka(T, "scroll", qa, {passive:!0});
    pb(function() {
      Z || Ia(T, "scroll", qa, {passive:!0});
    });
    Lc = function(c, a) {
      if (xa) {
        ka(c, "wheel", a, {passive:!1});
      } else if (Da) {
        ka(c, "mousewheel", a, !1);
      } else if (g) {
        ka(c, "MozMousePixelScroll", a, !1);
      } else if (n) {
        for (var k = E, h = 0, z = k.length; h < z; ++h) {
          if (k[h] === c && k[h + 1] === a) {
            return;
          }
        }
        k.length || ka(I, "DOMMouseScroll", H, !1);
        k.push(c, a);
      }
    };
    Mc = function(c, a) {
      if (xa) {
        Ia(c, "wheel", a, {passive:!1});
      } else if (Da) {
        Ia(c, "mousewheel", a, !1);
      } else if (g) {
        Ia(c, "MozMousePixelScroll", a, !1);
      } else if (n) {
        for (var k = E, h = 0, z = k.length; h < z; ++h) {
          if (k[h] === c && k[h + 1] === a) {
            k.splice(h, 2);
            k.length || Ia(I, "DOMMouseScroll", H, !1);
            break;
          }
        }
      }
    };
    var xa = 9 <= B || Ua || 17 <= Q || 31 <= wa || 537.7 <= sa, Da = 6 <= B || Ua || 9 <= F || wa || 522 <= sa || Ca, g = xb, n = Q && 0 <= Ka.conpare(La, "0.9.7") && !xb;
    if (n) {
      var E = [], H = function(c) {
        for (var a = E, k = c.target, h, z = 0, ea = a.length; z < ea; ++z) {
          h = a[z], hb(h, k) && a[z + 1].call(h, c);
        }
      };
    }
  })();
  (function() {
    function N(e) {
      if (6 !== e && 6 <= wa && 32 > wa) {
        return !1;
      }
      switch(e) {
        case 1:
          return ha;
        case 2:
          return !!da;
        case 3:
          return !!b;
        case 4:
          return !!f;
        case 5:
          return C;
        case 6:
          return m && !ya;
      }
      return !1;
    }
    function K(e) {
      p(e);
      na && !e && Aa(na);
      p = q = A = R = W = P = Ba = pa = na = l = y;
    }
    function M(e) {
      I.fonts.load('1.6em "' + e + '"').then(function() {
        var x;
        (x = Y(q)) ? fa(K, x) : ba(!0);
      }, function() {
        fb !== y ? X(fb) : Yb(X);
      });
    }
    function ba(e) {
      e && (ra = Sa());
      (e = Y(q, ca)) ? K(e) : (e = ca, I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (ra = Sa(), e = !1) : e = e < Sa() - ra, e ? Ba ? V() : ia ? K(0) : fb !== y ? X(fb) : Yb(X) : fa(ba));
    }
    function Y(e) {
      var x = 0, v = -1, t = G && [];
      if (!l) {
        var r = -1;
        var L;
        pa = Ha(va, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, S);
        for (l = []; L = d[++r];) {
          Ta(pa, "fontFamily", L), l[r] = pa.offsetWidth;
        }
      }
      for (5 > B ? pa || (pa = Ha(va, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, S)) : va.appendChild(pa); r = d[++v];) {
        Ta(pa, "fontFamily", '"' + e + '",' + r);
        var u = pa.offsetWidth;
        if (t) {
          t[v] = u;
        } else {
          if (u !== l[v]) {
            x = 1;
            break;
          }
        }
      }
      if (t && u === t[0] && u === t[1]) {
        for (x = 1, v = -1; u = l[++v];) {
          if (u === t[0] && u === t[1] && u === t[2]) {
            x = 0;
            break;
          }
        }
      }
      !B && x && W && (pa.textContent = W, u = pa.offsetWidth, pa.textContent = P, x = u === pa.offsetWidth ? 2 : 1, pa.textContent = S);
      Aa(pa);
      5 > B && (pa = y);
      return x;
    }
    function X(e) {
      e ? (Ba = !0, ca = ja, V()) : K(0);
    }
    function V() {
      if (A) {
        for (; A.length;) {
          var e = A.shift(), x = A.shift();
          if (N(e)) {
            na = yc(x, ma, R, na);
            return;
          }
        }
      }
      K(0);
    }
    function ma(e) {
      e ? ba(!0) : V();
    }
    Yb = !1 === fb ? function(e) {
      fa(e, !1);
    } : function(e) {
      function x(r) {
        t = yb(t);
        fb = r;
        v.onload = v.onerror = db;
        fa(e, r);
      }
      if (fb !== y) {
        fa(e, fb);
      } else {
        var v = new Image(), t = fa(function() {
          t && x(!1);
        });
        v.onerror = function() {
          x(!1);
        };
        v.onload = function() {
          x(1 === v.width * v.height);
        };
        v.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > B && Pa(function() {
      var e = Ha(va, "div");
      zb(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      rc = 1 < e.offsetHeight;
      Aa(e);
    });
    uc = function(e, x) {
      function v() {
        r || !L || t.complete ? (fa(e, !!t.width), t.onerror = t.onload = db, t = e = y) : (--L, fa(v));
      }
      var t = new Image(), r, L = 99;
      t.onerror = function() {
        r = !0;
      };
      t.onload = function() {
        r = !0;
      };
      t.src = x;
      fa(v);
    };
    vc = function(e, x, v, t, r, L, u) {
      p = e;
      q = x;
      A = v;
      R = t;
      W = r;
      P = L;
      ca = u || qa;
      U(10) ? fa(K, 1) : Uc ? fa(K, 0) : !I.fonts || 603 > sa || 11 > Ca ? ba(!0) : M(q);
    };
    var ia = 9 > B || 2 > wa || 12 > F, ya = 6 > wa || F || 530 > sa, qa = 5E3, ja = 500, S = "mmmmmmmmmmlliiiiiiiii", G = 7 > Ca || sa && 0 >= Ka.conpare(La, "536.11"), ha = 14 <= Ua || 36 <= wa || 39 <= Q || 602 <= sa || 10 <= Ca, da = 6 <= wa || Q && 0 <= Ka.conpare(La, "1.9.2") || 525 <= sa || 3.2 <= Ca || 4.4 <= Va || 11.1 <= F || Ua || 9 <= U(2) || 10 <= U(3), b = 2 <= wa || xb || 525 <= sa || 3.2 <= Ca || 2.2 <= Va || 10 <= F || Ua || 9 <= U(2) || 10 <= U(3), f = b, m = 525 <= sa || 3.2 <= 
    Ca || 38 > wa || 3 <= Va || 12 <= F, C = 4 <= U(2) || 10 <= U(3), d = wa ? ["sans-serif", "serif"] : ["monospace", "sans-serif", "serif"], p, q, A, R, W, P, ca, ra, Ba, pa, na, l;
  })();
  (function() {
    function N(d) {
      var p = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== d) {
        var q = Dc("ico"), A = 0, R = q.length;
        if (R) {
          if (1 === d) {
            for (; A < R; ++A) {
              d = q[A];
              var W = Hc(d);
              if (W = p[W]) {
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
        return [p, q, Ha, m];
      }
      bz = !1;
    }
    Ab(function(d) {
      var p = d.G;
      d = d.H;
      var q = Oa(p);
      !Xa(q, "aBodyRoot") && d ? ib(q, "js-image-has-been-loaded") : d || Fa(p, "alt") || "lazy" === Fa(p, "loading") || Ta(p, "display", "none");
    });
    $a && (Qa.splice(1, 0, function() {
      for (var d = Ec(lb, "RichLink-sep"), p, q, A, R, W, P; p = d.shift();) {
        for (p = ab(p); q = p.shift();) {
          if ("A" === Ma(q) && !q.innerHTML) {
            for (; A = p.shift();) {
              if (1 === A.nodeType) {
                if ("A" === Ma(A)) {
                  break;
                }
                for (R = gb(A, "A"); W = R.shift();) {
                  for (P = ab(W); P.length;) {
                    W.parentNode.insertBefore(P.shift(), W);
                  }
                  Aa(W);
                }
              }
              q.appendChild(A);
            }
          }
        }
      }
    }), Qa.splice(2, 0, function() {
      for (var d = ob("A"), p, q; p = d.shift();) {
        "A" !== Ma(p) || p.innerHTML || (q = p.nextSibling && p.nextSibling.firstChild) && q.href === p.href && Aa(p);
      }
    }));
    5.5 <= B && 8 > B && Ra && ec(function(d) {
      for (var p = gb(va, "a"), q = p.length, A = 0; A < q; ++A) {
        p[A].hideFocus = !d;
      }
    });
    if (!gc && Ra) {
      var K, M = function() {
        K = Ha(eb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + Gb + "hc/" + Xb});
        (sc || 5.5 <= B && 9 > B && rc) && ib(va, "js-canuse-css-rotate-when-forced-colors-mode");
        M = y;
      };
      ec(function(d) {
        d && !K ? M() : K && (d ? eb.appendChild(K) : Aa(K));
      });
    }
    F && Pa(function() {
      for (var d = gb(va, "a"), p = d.length, q = 0, A; q < p; ++q) {
        A = d[q], "-1" === Fa(A, "tabIndex") ? Wa(A, "tabIndex") : Fa(A, "href") && bb(A, "tabIndex", "0");
      }
      d = gb(va, "input");
      q = 0;
      for (p = d.length; q < p; ++q) {
        A = d[q], "hidden" === Fa(A, "type") && Wa(A, "tabIndex");
      }
    });
    if (Q && 0 > Ka.conpare(La, "0.9.5")) {
      zc = !0;
      var ba, Y, X, V, ma;
      Pa(function() {
        ka(I, "keydown", ia);
        ka(I, "keyup", ya);
        fc(va, qa);
        $a || (ka(T, "blur", da), ka(va, "click", ha));
      });
      var ia = $a ? function(d) {
        16 === d.keyCode ? ba = !0 : 9 === d.keyCode && V && ja(V, !0) && (V.blur && V.blur(), d.stopPropagation(), d.preventDefault(), fa(G));
      } : function(d) {
        16 === d.keyCode ? ba = !0 : 9 === d.keyCode && (Y = Sa());
      }, ya = function(d) {
        16 === d.keyCode && (ba = !1);
      }, qa = $a ? function(d) {
        V = d.target;
      } : function(d) {
        var p = d.target;
        if (V === p) {
          X = y;
        } else if (X) {
          p === X ? (d.stopPropagation(), G(!0)) : (p.blur && f(p), d.preventDefault(), G());
        } else {
          if (d = V) {
            V = y, f(d);
          }
          X = p;
          G(!0);
        }
      }, ja = function(d, p) {
        var q = Sa(), A = va, R = "nextSibling", W = "firstChild";
        ba && (p || q - 99 < Y && Y <= q) && (R = "previousSibling", W = "lastChild");
        for (X = y; d !== A;) {
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
      }, S = function(d, p) {
        function q() {
          return "-1" !== Fa(d, "tab-index");
        }
        function A() {
          return 0 < d.offsetHeight * d.offsetWidth;
        }
        if (d.focus) {
          var R;
          switch({A:p ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ma(d)]) {
            case 1:
              if (qb(d, "href") && q() && A()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Fa(d, "type") && q() && !qb(d, "disabled") && A()) {
                return !0;
              }
              break;
            case 3:
              if (q() && !qb(d, "disabled") && A()) {
                return !0;
              }
              break;
            default:
              if ((R = Fa(d, "tab-index")) && "-1" !== R && A()) {
                return !0;
              }
          }
        }
      }, G = function(d) {
        ma = 0;
        X && ($a || ka(X, "blur", b), V = X, X = y, d || V.focus());
      };
      if (!$a) {
        var ha = function(d) {
          var p = d.target;
          if (V && S(p, !0)) {
            var q = V;
            V = y;
            f(q);
            X = p;
            d.stopPropagation();
            d.preventDefault();
            G();
          }
        }, da = function(d) {
          d.target === I && (X = y);
        }, b = function(d) {
          d = d.target;
          Ia(d, "blur", b);
          V === d && ja(d) && (ma || (ma = fa(G)));
        }, f = function(d) {
          Ia(d, "blur", b);
          d.blur();
        };
      }
    }
    sb(function(d) {
      if (d) {
        return vc(N, "myIconFont", [1, ta + "iconfont/woff2.css", 2, ta + "iconfont/woff.css", 3, ta + "iconfont/ttf.css", 4, ta + "iconfont/otf.css", 5, ta + "iconfont/eot.css", 6, ta + "iconfont/svg.css"], "js-myIconFont-testCssReady", "twitter", "\ud83d\udc24", 5E3), N = y, !0;
      }
    });
    var m = 8 <= U(8) && 9 > F, C = 9 <= B || Ua || 1.8 <= Q || 8 <= U(8) || 9 <= U(9) || 3 <= U(21) || Eb || Qc || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || Ca;
  })();
  (function() {
    function N(g) {
      var n = A.length, E, H, c, a;
      if (13 === (g.keyCode || g.V) || g.type !== R) {
        for (; n;) {
          var k = A[--n];
          if (k.F === this || k.u === this) {
            n = k.F;
            var h = E = k.u;
            if (k.P) {
              if (Ta(n, "width", k.$), n.src = k.Z, Mb(h, k.T), n = k.L) {
                zb(n, k.S), cc(n, "js-captioned-thumbnail__large");
              }
            } else {
              if (H = k.N) {
                delete k.N;
                if (k.M) {
                  for (; E = Oa(E);) {
                    if (!Xa(E, "caption")) {
                      var z = Ma(E);
                      if ("DIV" === z || "P" === z || "BLOCKQUOT" === z || "LI" === z || "DD" === z || "TD" === z || "TH" === z || "FORM" === z || "PRE" === z) {
                        break;
                      }
                    }
                  }
                  E = (E.offsetWidth | 0) - 4;
                  1600 < E && (E = 1600);
                  if (2 === k.M) {
                    H = H.split("=");
                    z = H.length;
                    if (c = H[z - 1]) {
                      (a = Za(c.substr(1))) && c === "s" + a ? H[z - 1] = "w" + E : H[z] = "w" + E;
                    }
                    H = H.join("=");
                  } else {
                    H = H.split("/");
                    z = H.length;
                    if (c = H[z - 2]) {
                      (a = Za(c.substr(1))) && c === "s" + a ? H[z - 2] = "w" + E : H.splice(z - 1, 0, "w" + E);
                    }
                    H = H.join("/");
                  }
                }
                k.X = H;
              }
              k.T = Ic(h);
              ib(h, "js-pica-thumbnail__large");
              Ta(n, "width", "");
              n.src = k.X;
              if (n = k.L) {
                zb(n, ""), ib(n, "js-captioned-thumbnail__large");
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
      var n = L;
      if (Bb) {
        if (u && !n) {
          if (Sa() < u) {
            return;
          }
          u = y;
        }
        7 === g ? O = 0 : (O && (O = yb(O)), t = Vb());
        n ? (L = ba(y, n[0], n[1])) || (u = Sa() + 99) : ba();
      } else {
        L = y;
      }
    }
    function ba(g, n, E) {
      function H(Ya) {
        h = Ya;
        if (x) {
          z = x + ":translate" + (r ? "3D(0," : "(0,") + Ya + (r ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ya) {
          if (ra || Ba) {
            var hc = na.offsetWidth;
          }
          z = ra ? "position:fixed;width:" + hc + "px;top:" + (Ya - c + la) + "px" : pa ? "top:" + Ya + "px" : "position:absolute;top:" + Ya + "px;left:0";
          if (Ba && z) {
            var Cb = 8 > B ? " " : ",";
            z += ";clip:rect(" + (0 > Ya ? -Ya + "px" + Cb + hc + "px" + Cb + Ga : "0" + Cb + hc + "px" + Cb + (Ya + Ga < Nb ? Ga : Nb - Ya)) + "px" + Cb + "0)";
          }
        }
      }
      var c = t, a = l, k = na.offsetTop === a.offsetTop, h = 0, z = "", ea = !0;
      if (k) {
        for (var aa = 0, la = 0, za = a; za && za !== va;) {
          la += za.offsetTop, za = za.offsetParent;
        }
        h = v;
        var ic = 11 > B ? kb.offsetHeight : T.innerHeight, jc = a.offsetHeight, Ga = e.offsetHeight, Nb = Ga < jc ? jc : Ga, jb = c, tb = jb + ic, Ob = la, Pb = Ob + Nb, Nc = la + h, Wc = Nc + Ga;
        a = jb < Ob ? Ob : jb;
        za = Pb < tb ? Pb : tb;
        var ub = za - a;
        jb = Pb <= jb;
        tb = tb <= Ob;
        if (n !== y) {
          ea = la + n;
          g = ea + E;
          var vb;
          if (jb || tb) {
            return ic <= E ? vb = la : vb = jb ? Pb - E : la + E - ic, u = y, T.scroll(0, vb), L;
          }
          Ga <= ub ? aa = 3 : E <= ub ? Ga - n <= ub ? aa = 2 : a <= ea && g <= za ? a < la + h && (aa = 4) : aa = a <= ea && ea <= za ? 5 : a <= g && g <= za ? 4 : g < a ? 4 : 5 : aa = 4;
          ea = !1;
        } else {
          g !== y ? Ga <= ub ? (aa = 7, ea = !1) : (h -= 60 * g, aa = za - la - Ga, vb = a - la, h < aa ? h = aa : vb < h && (h = vb), aa = 6) : jc <= Ga || (jb ? aa = 1 : tb || (Ga <= ub ? aa = 3 : a < Nc ? aa = 3 : Wc < za ? aa = 2 : c < la + Ga - ub || (aa = 2)));
        }
        switch(aa) {
          case 0:
            H(0);
            break;
          case 1:
            H(Nb - Ga);
            break;
          case 2:
            H(za - la - Ga);
            break;
          case 3:
            H(a - la);
            break;
          case 4:
            H(a - la - n);
            break;
          case 5:
            H(za - la - (n + E));
          case 6:
            H(h);
        }
      }
      zb(e, z);
      v = h;
      return k && ea;
    }
    function Y(g) {
      if (Bb && (Q && (t = Vb()), this !== g.target)) {
        var n = Sb(g.deltaY) ? g.deltaY : Sb(g.wheelDeltaY) ? g.wheelDeltaY / 120 : Sb(g.wheelDelta) ? g.wheelDelta / -120 : g.detail / ("MozMousePixelScroll" === g.type ? 45 : 1);
        n && ba(9 >= n ? -9 >= n ? -3 : n : 3) && (g.preventDefault(), g.stopPropagation());
      }
    }
    function X(g) {
      if (Bb) {
        var n = Q && 0 > Ka.conpare(La, "0.9.4"), E = g.target;
        g = e;
        var H = 0;
        if (hb(g, E)) {
          if (x) {
            n = E.getBoundingClientRect();
            var c = n.bottom - n.top;
            H = n.top - g.getBoundingClientRect().top | 0;
          } else {
            c = E.offsetHeight;
            var a = E;
            if (n) {
              for (var k = []; a && (Q ? hb(g, a) : g !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && k.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = E;
            }
            for (; a && (Q ? hb(g, a) : g !== a);) {
              if (n) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, H += a.offsetHeight || 0;
                }
                a = a.parentNode;
              } else {
                H += a.offsetTop, a = a.offsetParent;
              }
            }
          }
          ca ? (L = [H, c], O && yb(O), O = fa(M, 7, 1 > Q || 536 > sa || 14 > wa ? 500 : 0)) : (t = Vb(), ba(y, H, c));
        }
      }
    }
    function V() {
      w.call(D);
    }
    function ma() {
      I.fullscreenElement || I.fullscreen || I.webkitIsFullscreen || I.msFullscreenElement || T.fullScreen ? (bb(D, "id", "blog2slide-root"), oa[1].parentNode.insertBefore(J, oa[1]), ia(), I.onkeydown = ya) : Z && (Aa(J), Wa(D, "id"), Wa(Z, "id"), Z = I.onkeydown = y);
    }
    function ia() {
      Z && Wa(Z, "id");
      xa = 0 < xa ? Da < xa ? Da : xa : 0;
      Z = oa[xa];
      bb(Z, "id", "blog2slide-current");
    }
    function ya(g) {
      if ("ArrowRight" === g.key || 39 === g.keyCode) {
        ++xa, ia();
      } else if ("ArrowLeft" === g.key || 37 === g.keyCode) {
        --xa, ia();
      }
    }
    yc = function(g, n, E, H) {
      H = H || Ha(eb, "link", {type:"text/css", rel:"stylesheet"});
      if (m) {
        (b = nb(E)) ? Wa(b, "id") : b = Ha(va, "div", {"aria-hidden":"true", className:E});
        var c = b.offsetWidth;
        bb(b, "id", E);
      }
      f(H, g, n, c);
      return H;
    };
    var qa = Q && 0 > Ka.conpare(La, "0.9.1"), ja = 11 <= B || Ua || 9 <= F && 9.5 > F, S = 11 > B, G = 7.2 <= F && 7.5 > F, ha = 26 > Q && !qa || 19 > wa || 4.3 > Va || 2 > Fb || 536 > sa || 6 > Ca || 7 <= F && 9 > F && !G, da = !qa && !ja && !S && !G && !ha, b, f = da ? function(g, n, E) {
      g.onload = bz;
      g.onerror = function() {
        E(!1);
        g.onload = g.onerror = null;
      };
      g.href = n;
      function bz() {
        E(!0);
        g.onload = g.onerror = null;
      }
      bz = !1;
    } : ja ? function(g, n, E, H) {
      g.onload = function() {
        E(m(H));
        Aa(b);
        g.onload = b = null;
      };
      g.href = n;
    } : S ? function(g, n, E, H) {
      g.onreadystatechange = function() {
        "complete" === g.readyState && (E(m(H)), g.V = db, Aa(b), b = null);
      };
      g.href = n;
    } : ha || G ? function(g, n, E, H) {
      function c() {
        h = Sa() + 999;
        fa(a, 0, 99);
        ha ? k.onerror = null : k.removeEventListener("load", c, !1);
        k = null;
        g.href = n;
      }
      function a() {
        m(H) ? (Aa(b), E(!0), b = null) : Sa() < h ? fa(a, 0, 99) : (E(!1), Aa(b), b = null);
      }
      var k = new Image(), h;
      ha ? k.onerror = c : k.addEventListener("load", c, !1);
      k.src = n;
    } : function(g, n, E) {
      fa(E, !1);
    }, m = !da && !qa && function(g) {
      return b.offsetWidth !== g;
    };
    xc = Q && 0 >= Ka.conpare(La, "0.9");
    Hb = !(7.2 > F || xc);
    Ib = function(g) {
      C ? I.write('<script src="' + g + '">\x3c/script>') : Qa || p.length ? p.push(g) : q(g);
    };
    Jb = function() {
      C || q(p.shift());
    };
    var C = !Hb, d = Hb && 7.5 > F;
    if (!C) {
      var p = [];
      d && (wc = !0);
      Pa(function() {
        q(p.shift());
      });
      var q = function(g) {
        g && (d ? kc[0].src = g : Ha(eb, "script", {src:g}));
      };
    }
    var A = [], R = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!oc) {
      var W = Na.transition !== y || Na["-o-transition"] !== y || Na["-moz-transition"] !== y || Na["-webkit-transition"] !== y;
      Ab(function(g) {
        if (g.H && lb) {
          g = g.G;
          var n = Oa(g), E = "", H;
          if ("A" === Ma(n) && 1 === Fc(n).length) {
            var c = Fa(n, "href");
            var a = c.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((H = 0 < c.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              ka(n, R, N);
              ka(g, "click", N);
              ka(n, "click", K);
              W && (E = g.naturalWidth + "px", Ta(g, "width", E));
              ib(n, "js-pica-thumbnail");
              for (a = n; a = Oa(a);) {
                if (Xa(a, "caption")) {
                  ib(a, "js-captioned-thumbnail");
                  var k = a;
                  var h = Jc(k);
                  break;
                }
              }
              A.push({u:n, L:k, S:h, Z:g.src, $:E, N:c, F:g, M:H ? 0 < c.indexOf("/img/a/") ? 2 : 3 : 0 < c.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      pb(function(g, n) {
        for (g = -1; n = A[++g];) {
          Ia(n.u, R, N), Ia(n.F, "click", N), Ia(n.u, "click", K);
        }
      });
    }
    var P = ["jsSidebarFixer1", "jsSidebarFixer2"], ca = !(9 > B || F || 1 <= Q && 1.3 > Q || zc), ra = !(5 > Ca || 2.2 > Va || 6 > U(12) || Ea(30) && 534 > sa || Ea(32) || 7 > B || 9 > F || 1 > Q), Ba = ra || 6 === B || 1 > Q, pa = 7.5 > F, na, l, e, x = Vc && sc, v = 0, t = 0, r, L, u, O;
    Oc || oc || (sb(function(g) {
      if (g) {
        if (!lb) {
          return !0;
        }
        g = -1;
        var n;
        na = nb("jsSide");
        l = lb;
        if (!na) {
          return !0;
        }
        rb(M);
        dc(M);
        e = Lb(ac(na), "div", {id:"jsSidebarFixer"});
        for (fc(e, X); 1 < ab(na).length;) {
          e.appendChild(ab(na)[1]);
        }
        for (; n = P[++g];) {
          Lc(nb(n), Y);
        }
        B || Ua || 2 > wa || (r = Na.perspective !== y || Na.MozPerspective !== y || Na["-webkit-perspective"] !== y);
        M();
        return !0;
      }
    }), pb(function() {
      for (var g = -1, n; n = P[++g];) {
        Mc(nb(n), Y);
      }
      Kc(e, X);
    }));
    Pa(function() {
      function g(k, h, z, ea) {
        var aa = ea ? "div" : "cite";
        if (0 === h.indexOf("urn:isbn:")) {
          h = h.substr(9).toUpperCase().split("-").join("");
          if (13 === h.length) {
            h = h.toString().slice(3, -1);
            for (var la = 0, za = 0; 9 > za; za++) {
              la += (h.charAt(za) - 0) * (10 - za);
            }
            la = (11 - la % 11) % 11;
            la = 10 === la ? "X" : la.toString();
            h += la;
          }
          10 === h.length && (h = "//www.amazon.co.jp/exec/obidos/ASIN/" + h + "/itozyun-22/ref=nosim/");
        }
        z = ea ? Lb(ac(E), aa, {className:z}) : Ha(E, aa, {className:z});
        Ha(z, "a", 0 === h.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:h} : {href:h}, k);
      }
      if (lb) {
        for (var n = gb(lb, "blockquote"), E, H = -1, c, a; E = n[++H];) {
          c = Fa(E, "title"), a = Fa(E, "cite"), c && a ? (Wa(E, "title"), g(c, a, "js-generated-link-in-blockquote", !0)) : a && (Wa(E, "cite"), g(T.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var w, D, J, Z, oa, xa, Da;
    Pa(function() {
      var g = nb("blog2slide-start");
      if (g) {
        var n = I.onfullscreenchange !== y ? "f" : I.onmozfullscreenchange !== y ? "mozF" : I.onwebkitfullscreenchange !== y ? "webkitF" : 0;
        w = g.requestFullscreen || g.webkitRequestFullscreen || g.mozRequestFullscreen || g.msRequestFullscreen;
        0 !== n || w ? (g.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ka(g.firstChild, "click", V), g = Oa(g), D = Oa(g), oa = gb(g, "section"), J = I.createElement("h1"), J.innerHTML = gb(va, "h1")[0].innerHTML, Da = oa.length, oa.splice(0, 0, J), 0 !== n ? ka(I, n + "ullscreenchange", ma) : B ? ka(I, "MSFullscreenChange", ma, !1) : dc(ma)) : Aa(g);
      }
    });
  })();
  var wb, Qb = !mc || .9 > Q || 8 > F || 5.5 > B, cb;
  (function() {
    function N(l) {
      return l === "" + l;
    }
    function K(l, e) {
      return Qb ? new G(l, e) : new mc(l, e);
    }
    function M(l, e, x, v) {
      if (S() - ha < m && !v) {
        return l(e);
      }
      fa(ba, {U:l, Y:e});
    }
    function ba(l) {
      ha = S();
      l.U(l.Y);
    }
    function Y(l, e) {
      l && wb[l] || (l = C.test(e) ? "default-markup" : "default-code");
      var x = !!wb[l];
      x && M(R, l, 0, !0);
      return x;
    }
    function X() {
      function l(Da, g, n) {
        g && (e.h = e.h || [], e.h.push({l:e, B:e.B, O:1, s:L, D:Da, o:g, m:n, R:{}, v:0}));
      }
      var e = da, x = e.m, v = x[0], t = x[2], r = e.D, L = e.s, u = e.aa.shift(), O = e.R;
      if (u) {
        var w = O[u], D;
        if (!(0 <= w)) {
          if (D = v[u.charAt(0)]) {
            var J = u.match(D[1]);
            w = D[0];
          } else {
            for (w = 0, v = -1; D = t[++v];) {
              if (J = u.match(D[1])) {
                w = D[0];
                break;
              }
            }
          }
          !(D = N(w)) || J && N(J[1]) || (D = !1, w = 11);
          D || (O[u] = w);
        }
        t = e.v;
        O = u.length;
        e.v += O;
        if (D) {
          D = J[1];
          v = u.indexOf(D);
          var Z = D.length, oa = v + Z;
          J[2] && (oa = O - J[2].length, v = oa - Z);
          l(r + t, u.substr(0, v), x);
          if (Z && Y(w, D)) {
            l(r + t + v, D);
            var xa = !0;
          }
          l(r + t + oa, u.substr(oa), x);
          e.h && e.h.length && (da = e.h.shift());
          xa || (da !== e ? M(q, y, 2) : M(X, y, 2));
        } else {
          L.push(r + t, w), M(X, y, 2);
        }
      } else {
        e.l ? (da = e.l.h.shift()) ? M(q, y, 2) : (da = e.l, M(X, y, 2)) : M(ca, y, 2);
      }
    }
    function V(l) {
      if (A.length) {
        var e = A.shift(), x = qa[e];
        if (x.pop) {
          qa[e] = K(x[0], x[1]);
        } else if (N(x)) {
          qa[e] = K(x);
        } else {
          return V(l);
        }
        M(V, l, 1);
      } else {
        M(R, l);
      }
    }
    function ma(l) {
      for (var e, x = l.firstChild; x; x = x.nextSibling) {
        var v = x.nodeType;
        e = 1 === v ? e ? l : x : 3 === v ? d.test(x.nodeValue) ? l : e : e;
      }
      return e === l ? y : e;
    }
    wb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ia = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], ya = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
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
    }, G, ha, da, b, f, m = 5 > B ? 60 : 5.5 > B ? 0 : Qb ? 20 : 10, C, d;
    cb = [function(l) {
      T.RegExpCompat = G = l;
    }, function() {
      C = K("^\\s*<");
      d = K("\\S");
    }];
    Qb || (cb[1](), cb = y);
    var p = function() {
      var l = da, e = l.W, x = W(l.B, l.O), v = l.o = x.o;
      l.I = x.I;
      Y(e, v) || (da = y, M(na, y, 0, !0));
    };
    var q = function() {
      var l = da;
      l.aa = l.o.match(l.m[1]) || [];
      l.s.push(l.D, 0);
      M(X, y, 2);
    };
    var A = [];
    var R = function(l) {
      function e(w) {
        var D = w;
        0 <= w && (D = ya[w]);
        0 <= D[1] && (D[1] = x(D[1]));
        return D;
      }
      function x(w) {
        var D = w;
        return 0 <= w && (D = qa[w], !D.exec) ? (A.push(w), w) : D;
      }
      var v = da, t = wb[l];
      N(t) && (t = wb[l] = wb[t]);
      var r = t[0];
      if (0 <= r) {
        r = ia[r];
        if (0 <= r["-num"]) {
          var L = r["-num"];
          delete r["-num"];
          for (var u = -1; 9 > u;) {
            r["" + ++u] = L;
          }
        }
        t[0] = r;
      }
      for (var O in r) {
        r[O] = e(r[O]);
      }
      t[1] = x(t[1]);
      r = t[2];
      u = 0;
      for (L = r.length; u < L; ++u) {
        r[u] = e(r[u]);
      }
      A.length ? M(V, l, 2) : (v.m ? v.l && (v.l.h[0].m = t) : v.m = t, M(q, y, 1));
    };
    var W = function(l, e) {
      function x(O) {
        var w = O.nodeType;
        if (1 === w) {
          if (!Xa(O, "nocode")) {
            for (w = O.firstChild; w; w = w.nextSibling) {
              x(w);
            }
            w = Ma(O);
            if ("BR" === w || "LI" === w) {
              v[L] = "\n", r[L << 1] = t++, r[L++ << 1 | 1] = O;
            }
          }
        } else if (3 === w || 4 === w) {
          if (w = O.nodeValue) {
            w = e ? w.split("\r\n").join("\n").split("\r").join("\n") : w.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), v[L] = w, r[L << 1] = t, t += w.length, r[L++ << 1 | 1] = O;
          }
        }
      }
      var v = [], t = 0, r = [], L = 0;
      x(l);
      var u = v.join("");
      "\n" === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1));
      return {o:u, I:r};
    };
    var P = function(l, e, x) {
      function v(w) {
        var D = w.nodeType;
        if (1 === D && !Xa(w, "nocode")) {
          if ("BR" === Ma(w)) {
            t(w), w.parentNode && Aa(w);
          } else {
            for (w = w.firstChild; w; w = w.nextSibling) {
              v(w);
            }
          }
        } else if ((3 === D || 4 === D) && x) {
          var J = w.nodeValue, Z = J.indexOf("\r\n"), oa = 2;
          -1 === Z && (Z = J.indexOf("\n"), oa = 1);
          -1 === Z && (Z = J.indexOf("\r"));
          -1 !== Z && (D = J.substr(0, Z), w.nodeValue = D, (J = J.substr(Z + oa)) && bc(w, J), t(w), D || Aa(w));
        }
      }
      function t(w) {
        function D(Z, oa) {
          var xa = oa ? Z.cloneNode(!1) : Z, Da = Z.parentNode;
          if (Da) {
            Da = D(Da, 1);
            var g = Z.nextSibling;
            Da.appendChild(xa);
            for (var n = g; n; n = g) {
              g = n.nextSibling, Da.appendChild(n);
            }
          }
          return xa;
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
      for (var L = [r], u = 0; u < L.length; ++u) {
        v(L[u]);
      }
      if (e === (e | 0)) {
        if (10 <= e && 7.2 > F) {
          var O = I.createElement("ol");
          O.innerHTML = '<li value="' + e + '">' + r.innerHTML + "</li>";
          L[0] = O.firstChild;
        } else {
          bb(r, "value", e);
        }
      }
      O = Ha(l, "ol", {className:"linenums"});
      l = Math.max(0, e - 1 | 0) || 0;
      u = 0;
      for (e = L.length; u < e; ++u) {
        r = L[u], Mb(r, "L" + (u + l) % 10), r.firstChild || Gc(r, "\u00a0"), O.appendChild(r);
      }
    };
    var ca = function() {
      var l = da, e = l.o, x = e.length, v = 0, t = l.I, r = t.length, L = 0, u = l.s, O = u.length, w = 0;
      u[O] = x;
      var D, J;
      for (J = D = 0; J < O;) {
        u[J] !== u[J + 2] ? (u[D++] = u[J++], u[D++] = u[J++]) : J += 2;
      }
      O = D;
      for (J = D = 0; J < O;) {
        var Z = u[J], oa = u[J + 1];
        for (J += 2; J + 2 <= O && u[J + 1] === oa;) {
          J += 2;
        }
        u[D++] = Z;
        u[D++] = oa;
      }
      u.length = D;
      l = l.B;
      O = "";
      l && (O = l.style.display, Ta(l, "display", "none"));
      for (; L < r;) {
        D = t[L + 2] || x;
        Z = u[w + 2] || x;
        J = Math.min(D, Z);
        oa = t[L + 1];
        var xa;
        if (1 !== oa.nodeType && (xa = e.substring(v, J))) {
          9 > B && (xa = xa.split("\n").join("\r"));
          var Da = Lb(oa, "span", {className:ja[u[w + 1]]}, xa);
          Aa(oa);
          v < D && (t[L + 1] = bc(Da, e.substring(J, D)));
        }
        v = J;
        v >= D && (L += 2);
        v >= Z && (w += 2);
      }
      l && Ta(l, "display", O);
      da = y;
      M(na, y, 3, !0);
    };
    var ra = [], Ba;
    sb(function(l) {
      if (l) {
        l = [ob("pre"), ob("code"), ob("xmp")];
        for (var e = 0; e < l.length; ++e) {
          for (var x = 0, v = l[e].length; x < v; ++x) {
            pa(l[e][x]);
          }
        }
        return !0;
      }
    });
    var pa = function(l) {
      ra.push(l);
      Ba = ra.length;
      1 === Ba && (lc ? fa(lc, na) : cb ? cb.push(function() {
        fa(na);
      }) : fa(na));
    };
    var na = function() {
      function l(L, u) {
        return (L.split(u)[1] || "").split(" ")[0];
      }
      if (!da) {
        Ba !== ra.length && f && f(Ba - ra.length, Ba);
        var e = ra.shift();
        if (e) {
          if (Xa(e, "prettyprint") && !Xa(e, "prettyprinted")) {
            for (var x = !1, v = e.parentNode; v !== va; v = v.parentNode) {
              var t = Ma(v);
              if (("PRE" === t || "XMP" === t || "CODE" === t) && Xa(v, "prettyprint")) {
                x = !0;
                break;
              }
            }
            if (!x) {
              x = e.className;
              ib(e, "prettyprinted");
              v = !1;
              if (!v) {
                v = l(x, "lang-") || l(x, "language-");
                var r;
                !v && (r = ma(e)) && "CODE" === Ma(r) && (v = l(r.className, "lang-") || l(r.className, "language-"));
              }
              t = Ma(e);
              "PRE" === t || "XMP" === t ? t = 1 : (t = e.currentStyle, r = I.defaultView, t = (t = t ? t.whiteSpace : r && r.getComputedStyle ? r.getComputedStyle(e, null).getPropertyValue("white-space") : 0) && "pre" === t.substr(0, 3));
              r = !1;
              (r = "true" === r || +r) || (r = l(x, "linenums:") || Xa(e, "linenums"), r = r.length ? +r : r);
              r && P(e, r, t);
              da = {W:v, B:e, ba:r, O:t, D:0, v:0, R:{}, s:[]};
              M(p);
              return;
            }
          }
          M(na, y, 0, !0);
        } else {
          b && b();
        }
      }
    };
    T.PR = {RegExpProxy:K, prettifyElement:pa, registerCompleteHandler:function(l, e) {
      b = l;
      f = e;
    }};
  })();
  var kc = I.scripts || ob("script");
  var ta = kc[kc.length - 1].src.split("/");
  --ta.length;
  "js" === ta[ta.length - 1] && --ta.length;
  (ta = ta.join("/")) && (ta += "/");
  var Oc = Tc || "1" === Fa(va, "mob");
  Gb = (Oc ? "mb" : "pc") + "/";
  6.1 > Ca && (rb ? rb(Zb) : ka(T, "scroll", Zb));
  pb(Bc);
  6.1 > Ca && (rb ? rb($b) : ka(T, "scroll", $b));
  pb(Cc);
  10 > B && (11 !== Rc || 5 !== B) || (9 > F || 1 > Q || !mb && !T.addEventListener ? I.write('<link href="' + ta + "css/" + Gb + Xb + '" rel="stylesheet"' + (8 > F ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > F || 1.5 > Q || 534 > sa || 5 > Ca || 7 > wa || 3 > Va) && Pa(function() {
    Ha(eb, "link", {href:ta + "css/" + Gb + Xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Qb) {
    if (Hb) {
      var lc = function(N) {
        T.RegExpCompat = bz;
        lc = y;
        Ib(ta + "js/regexpcompat.js");
        function bz(K) {
          for (var M; M = cb.shift();) {
            M(K);
          }
          cb = y;
          fa(N);
          Jb(ta + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      T.RegExpCompat = function(N) {
        for (var K; K = cb.shift();) {
          K(N);
        }
        cb = y;
        Jb(ta + "js/regexpcompat.js");
      }, Ib(ta + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

