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
var D, ob;
(function(Xa, Y, hb, Gc, M, ic, jd, Wb, pb, jc, kc, Hc, lc, v) {
  function da(P) {
    if (Xa[0] === P) {
      return Ya === Ya + "" ? pb(Ya) : Ya;
    }
  }
  function Qa(P) {
    var G = Xa[3];
    if (Xa[2] === P) {
      return G === G + "" ? pb(G) : G;
    }
  }
  function mc() {
    return 6 > C ? wa.scrollTop : C ? ub.scrollTop : Y.pageYOffset;
  }
  var wa = M.body, bb = wa.style, ub, vb, wb, Ya = Xa[1], C = da(2) || da(3), Db = da(7), ib = da(5) || da(6), H = da(8) || da(9), Z = da(11) || da(12), Rb = Z && 0 <= Xa.conpare(Ya, "1.9.1"), Xb = da(13), ta = da(15), Ea = da(16) || da(17), Ic = da(10) || da(25), Fa = da(20) || da(22), Jc = da(23), jb = da(21), Yb = da(24), kd = Fa || Jc || jb || Yb, Kc = Fa && pb(ic.userAgent.split("Edg/")[1]), ld = pb(ic.appVersion.split("Trident/")[1]) + 4, nc = Qa(35) || Qa(36) || Qa(37), md = 0 <= ic.userAgent.indexOf("Googlebot/"), 
  eb = 0.9 > Z, oc = (Db ? "ie5mac" : 5.5 > C ? "ie5win" : 6 > C ? "ie55" : 10 > C ? "ie" + (C | 0) : 7.2 > H ? "opr70" : 8 > H ? "opr72" : 9.5 > H ? "opr" + (H | 0) : Z && !Rb ? 1.4 <= Z ? "gck19" : 1.3 <= Z ? "gck13" : 1 <= Z ? "gck12" : eb ? 0.8 <= Z ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Zb = "", nd = Qa(1) || Qa(2) || Qa(3) || Qa(4) || Qa(8) || Qa(9) || Qa(10), Lc, qb = 8 > C || 7.2 > H ? !1 : v, Mc = bb.transform !== v ? "transform" : bb["-o-transform"] !== v ? "-o-transform" : 
  bb["-ms-transform"] !== v ? "-ms-transform" : bb.MozTransform !== v ? "-moz-transform" : bb["-webkit-transform"] !== v ? "-webkit-transform" : "", Va = [], Nc = [], fb = [], pc, Oc, Pc, Qc, $b, Rc, Sc, ac, bc, Tc = !1, qc = 525 > ta || 3.2 > Ea || 2.2 > jb || 10 > H || Z && !Rb || da(25) || 10 > da(3) || Qa(32) || Qa(30) || Qa(3), ja, Eb, cc, Uc, od = !!wa.getBoundingClientRect, dc = [], ec = [], rc, Vc, sc, Wc, cb = Wb.now || function() {
    return +new Wb();
  };
  (function() {
    function P() {
      for (var T, K = 0, aa = cb(); K < J.length;) {
        aa < J[0].t ? ++K : (T = J.splice(K, 1)[0], T.f(T.p));
      }
      ma = J.length ? kc(P, Ga) : 0;
    }
    function G() {
      for (var T, K = 0; K < ea.length; ++K) {
        T = ea[K], T.f();
      }
    }
    function Q() {
      na && (na = clearInterval(na));
    }
    function oa() {
      ma && (ma = Hc(ma));
    }
    D = function(T) {
      dc.push(T);
    };
    ob = function(T) {
      ec.push(T);
    };
    cc = function(T) {
      ea.length || (na = lc(G, fa));
      ea.push({f:T, C:++ba});
      return ba;
    };
    Uc = function(T) {
      for (var K = ea.length, aa; aa = ea[--K];) {
        if (aa.C === T) {
          ea.splice(K, 1);
          ea[0] || Q();
          break;
        }
      }
      return 0;
    };
    rc = function() {
      na && (Q(), na = lc(G, fa));
    };
    Vc = Q;
    var ea = [], fa = 500, ba = 0, na;
    if (5 > C || Db) {
      Y._wdb_onlooptimer = G, G = "_wdb_onlooptimer()";
    }
    ja = function(T, K, aa) {
      J.length || (ma = kc(P, Ga));
      J.push({f:T, p:K, C:++xa, t:cb() + (Ga < aa ? aa : Ga)});
      return xa;
    };
    Eb = function(T) {
      for (var K = J.length, aa; aa = J[--K];) {
        if (aa.C === T) {
          J.splice(K, 1);
          break;
        }
      }
      return 0;
    };
    sc = function() {
      ma && (oa(), ma = kc(P, Ga));
    };
    Wc = oa;
    var J = [], Ga = 16, xa = 0, ma;
    if (5 > C || Db) {
      Y._wdb_ontimer = P, P = "_wdb_ontimer()";
    }
  })();
  var xb, Fb, Xc, yb, Yc, Ra, kb, Zc, tc, qa, Sb, $c, ad, uc, Za, zb, bd, $a, Sa, rb, lb, Kb, cd, fc, mb, Ab, vc, Ia, Wa, dd;
  (function() {
    function P(a, b, l) {
      var A = ["<", a], c = 1, n, u;
      if (b) {
        for (n in b) {
          var z = b[n];
          if (null != z && "" !== z) {
            if ("style" === n) {
              A[++c] = ' style="';
              for (u in z) {
                for (var S = ++c, U, V = [], ha = u.split(""), Ba = ha.length; Ba;) {
                  U = ha[--Ba], "A" <= U && "Z" >= U && (U = "-" + U.toLowerCase()), V[Ba] = U;
                }
                A[S] = V.join("") + ":" + z[u] + ";";
              }
              A[++c] = '"';
            } else {
              "className" === n && (n = "class"), A[++c] = " " + n + '="' + z + '"';
            }
          }
        }
      }
      A[++c] = ">";
      null != l && (K && "font" !== a ? A[++c] = "<font>" + G(l) + "</font>" : A[++c] = G(l));
      A[++c] = "</" + a + ">";
      return A.join("");
    }
    function G(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function Q(a) {
      var b = a.split("-"), l = b.length;
      if (2 > l) {
        return a;
      }
      for (; 1 < l;) {
        a = b[--l], b[l] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function oa(a) {
      return ea(M, a);
    }
    function ea(a, b) {
      var l = "*" === b;
      l = K ? l ? a.all : a.all.tags(b.toUpperCase()) : 6 > C && l ? a.all : a.getElementsByTagName(b);
      for (var A = [], c = 0, n = l.length; c < n; ++c) {
        A[c] = l[c];
      }
      return A;
    }
    function fa(a, b) {
      var l = [], A = 0, c, n = -1;
      if (9 > C || !a.getElementsByClassName) {
        var u = 6 > C ? a.all : a.getElementsByTagName("*");
      } else {
        var z = !0;
        u = a.getElementsByClassName(b);
      }
      for (c = u.length; A < c; ++A) {
        var S = u[A];
        if (z || (K || 1 === S.nodeType) && xa(S, b)) {
          l[++n] = S;
        }
      }
      return l;
    }
    function ba(a) {
      return K ? a.parentElement : a.parentNode;
    }
    function na(a, b, l, A, c, n) {
      if (K) {
        var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var z = kb(2 > a ? Ra(b) : b);
        z = 2 > a ? z.indexOf(b) + a : z.length;
        b.insertAdjacentHTML(u, P(l, A, c));
        b = kb(b)[z];
        null != c && ("font" === l ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (aa) {
        b = M.createElement(P(l, A));
      } else {
        b = n ? M.createElementNS("http://www.w3.org/2000/svg", l) : M.createElement(l);
        if (A) {
          for (u in A) {
            if ((a = A[u]) || 0 === a) {
              switch(u) {
                case "class":
                case "className":
                  fc(b, a);
                  break;
                case "style":
                  n = b.style;
                  for (z in a) {
                    n[z] = a[z];
                  }
                  break;
                default:
                  rb(b, u, a);
              }
            }
          }
          !H || "a" !== l && "A" !== l || !A.href || A["tag-index"] || A.tagIndex || rb(b, "tagIndex", "-0");
        }
        pa || null != c && J(b, c);
      }
      return b;
    }
    function J(a, b) {
      if (K) {
        return na(2, a, "font", v, b);
      }
      var l = M.createTextNode("" + b);
      a.appendChild(l);
      return l;
    }
    function Ga(a, b) {
      9 > C ? a.className = b : a.setAttribute("class", b);
    }
    function xa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function ma(a, b, l) {
      if (8 > H || 5.5 > C) {
        b = Q(b);
      }
      a.style[b] = l;
    }
    function T(a) {
      return 5.5 > C ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var K = 5 > C;
    ub = oa("html")[0];
    vb = oa("head")[0];
    xb = function(a) {
      return Y[a] || M[a] || M.getElementById(a);
    };
    Fb = oa;
    Xc = function(a) {
      return fa(M, a);
    };
    yb = ea;
    Yc = fa;
    Ra = ba;
    kb = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], l = a.length; l;) {
        b[--l] = a[l];
      }
      return b;
    };
    Zc = function(a) {
      var b = !(7.03 < H && 7.2 > H) && a.children;
      a = b ? b : a.childNodes;
      for (var l = [], A = a.length, c = -1, n; A;) {
        if (n = a[--A], b || 1 === n.nodeType) {
          K && "FONT" === n.tagName || (l[++c] = n);
        }
      }
      return l;
    };
    tc = function(a) {
      return K ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    qa = function(a, b, l, A, c) {
      b = na(2, a, b, l, A, c);
      K || (a.appendChild(b), pa && null != A && J(b, A));
      return b;
    };
    Sb = function(a, b, l, A, c) {
      b = na(0, a, b, l, A, c);
      K || (ba(a).insertBefore(b, a), pa && null != A && J(b, A));
      return b;
    };
    $c = function(a, b, l, A, c) {
      b = na(1, a, b, l, A, c);
      var n;
      K || ((n = a.nextSibling) ? Ra(n).insertBefore(b, n) : Ra(a).appendChild(b), pa && null != A && J(b, A));
      return b;
    };
    ad = J;
    uc = function(a, b) {
      var l;
      if (K) {
        return na(1, a, "font", v, b);
      }
      var A = M.createTextNode("" + b);
      (l = a.nextSibling) ? Ra(a).insertBefore(A, l) : Ra(a).appendChild(A);
      return A;
    };
    Za = function(a) {
      Ra(a) ? K ? a.outerHTML = "" : (5.5 > C && (a.style.filter = ""), Ra(a).removeChild(a)) : D("[DOM] p_DOM_remove(), No parentNode!");
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
      return K ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var aa = 9 > C, pa = aa;
    $a = function(a) {
      return a.tagName.toUpperCase();
    };
    Sa = function(a, b) {
      if (8 > H || 5.5 > C) {
        b = Q(b);
      }
      var l = a.getAttribute(b);
      return H && "tabIndex" === b ? "-0" === l ? "" : "" === l ? "-1" : l : l || "";
    };
    rb = function(a, b, l) {
      if (H && "tab-index" === b) {
        "-1" === l ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", l);
      } else {
        if (8 > H || 5.5 > C) {
          b = Q(b);
        }
        a.setAttribute(b, l);
      }
    };
    lb = function(a, b) {
      if (H && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > H || 5.5 > C) {
          b = Q(b);
        }
        a.removeAttribute(b);
      }
    };
    Kb = function(a, b) {
      if (H && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > H || 5.5 > C) {
        b = Q(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    cd = function(a) {
      return a.className;
    };
    fc = Ga;
    mb = xa;
    Ab = function(a, b) {
      var l;
      if (!xa(a, b)) {
        if (l = a.className) {
          l += " ";
        }
        Ga(a, l + b);
      }
    };
    vc = function(a, b) {
      if (xa(a, b)) {
        var l = a.className.split(" ");
        l.splice(l.indexOf(b), 1);
        Ga(a, l.join(" "));
      }
    };
    Ia = ma;
    Wa = function(a, b) {
      var l, A = -1, c;
      if (5.5 > C) {
        if (l = T(a)) {
          for (l = l.split(";"); c = l[++A];) {
            ma(a, c.split(":")[0], "");
          }
        }
        if (b) {
          for (A = -1, l = b.split(";"); c = l[++A];) {
            var n = c.split(":")[0];
            ma(a, n, c.substr(n.length + 1));
          }
        }
      } else if (7.1 > H) {
        if (a.setAttribute("style", ""), b) {
          for (l = b.split(";"); c = l[++A];) {
            c = c.split(":"), ma(a, c[0], c[1]);
          }
        }
      } else {
        9 > H || 1 > Z ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    dd = T;
    Va.splice(0, 0, function() {
      function a(S) {
        S = kb(S);
        for (var U = S.length, V, ha, Ba; U;) {
          if (V = S[--U], ha = V.nodeType, 8 === ha) {
            b && u.push(V);
          } else if (1 === ha) {
            switch(ha = $a(V), "/" === ha.charAt(0) && (ha = ha.substr(1), z[ha] = !0), ha) {
              case "STYLE":
                if (7.2 <= H && 9 > H) {
                  break;
                }
              case "LINK":
                K || A || zb(vb, V) || n.push(V);
                break;
              case "META":
                ha = Sa(V, "name") || Sa(V, "property");
                for (Ba = c.length; Ba;) {
                  if (0 === ha.indexOf(c[--Ba])) {
                    u.push(V);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (md || Kb(V, "async")) {
                  break;
                }
                if (l) {
                  V.innerText = "";
                  l = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Kb(V, "skip-cleanup")) {
                  break;
                }
              case "!":
                u.push(V);
                break;
              case "SOURCE":
                Y.HTMLSourceElement || u.push(V);
                break;
              default:
                z[ha] ? u.push(V) : kb(V).length && a(V);
            }
          }
        }
        for (; n[0];) {
          vb.appendChild(n.pop());
        }
        for (; u[0];) {
          Za(u.pop());
        }
      }
      vc(ub, "nojs");
      wb = xb("jsMain");
      var b = !(8 > H || 5 > C || Db || eb), l = Qc, A = 7 > C, c = ["og:", "twitter:", "fb:"], n = [], u = [], z = {};
      a(ub);
    });
  })();
  var la, Ka, db, Gb, wc, Lb, Hb, xc, yc, zc, ed, fd, gd, Mb, Ha, Ac;
  (function() {
    function P() {
      return e ? q ? 2 : r ? 3 : 1 : 0;
    }
    function G(f) {
      Ka(Y, "load", G);
      G = v;
      oa(Va, f, !0);
      Va = v;
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
      for (var p = 0; p < f.length; ++p) {
        !0 === f[p](g) && (f.splice(p, 1), --p);
      }
      y && (f.length = 0);
    }
    function ea(f, g, y) {
      Va || K.length || ja(fa);
      K.push(f, g, y);
    }
    function fa() {
      var f = K, g;
      for (K = []; g = f.shift();) {
        oa(g, f.shift(), f.shift());
      }
    }
    function ba(f) {
      var g = f || event;
      f = pa[g.type];
      var y = -1, p, O;
      5 > C ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : C ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        O = !0;
      });
      for (; p = f[++y];) {
        p.j === this ? (this.g = p.i, C && (g.currentTarget = this), this.g(g), C ? (this.g = hb, this.g = v) : delete this.g) : 7.2 > H && this === M && p.j === Y && (Y.g = p.i, Y.g(g), delete Y.g);
      }
      if (C) {
        return g.preventDefault = g.stopPropagation = hb, g.preventDefault = g.stopPropagation = v, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (A = !0), O && !A && g.K(), g.K = g.stopPropagation = v);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function na() {
      var f = 9 === T.offsetWidth;
      Mb !== f && (ea(Nc, Mb = f), D("p_cssAvailability:" + Mb));
    }
    function J() {
      !Va && I && (Eb(I), I = ja(Ga));
    }
    function Ga() {
      I = 0;
      oa(w);
    }
    function xa(f) {
      Va || oa(x, f);
    }
    var ma = Y.matchMedia, T, K = [];
    Va.push(function() {
      Q = v;
      T = qa(wa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      db(function() {
        K.length && ja(fa);
      });
    });
    la = function(f, g, y, p) {
      if (l) {
        f.addEventListener(g, y, p ? aa ? p : p.capture || !0 === p : !1);
      } else {
        var O = {j:f, i:y};
        p = pa[g];
        var Aa = "on" + g, La, sb;
        if (p) {
          for (La = p.length; sb = p[--La];) {
            if (sb.j === f && sb.i === y) {
              return;
            }
          }
          pa[g].push(O);
        } else {
          pa[g] = p = [O], a || (g = f[Aa], "function" === typeof g && g !== ba && p.unshift({j:f, i:g}));
        }
        a ? f.attachEvent(Aa, ba) : f[Aa] = ba;
      }
    };
    Ka = function(f, g, y, p) {
      if (l) {
        f.removeEventListener(g, y, p ? aa ? p : p.capture || !0 === p : !1);
      } else {
        p = pa[g];
        g = "on" + g;
        var O, Aa, La;
        if (p) {
          for (O = p.length; Aa = p[--O];) {
            Aa.j === f && (Aa.i === y ? p.splice(O, 1) : La = !0);
          }
          La || (a ? f.detachEvent(g, ba) : C ? (f[g] = hb, f[g] = null) : delete f[g]);
        }
      }
    };
    var aa = !C && !Db && (new jd('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), pa = {}, a = !1, b = 525.13 > ta, l = !b && !Db && Y.addEventListener, A;
    b && ub.addEventListener("click", function(f) {
      if (A) {
        return A = !1, f.preventDefault(), !1;
      }
    });
    db = function(f) {
      Va ? Va.push(f) : alert("Load event has already been dispatched!");
    };
    Gb = function(f) {
      c && c.push(f);
    };
    var c = [];
    if (419.3 >= ta) {
      var n = function() {
        if (n) {
          var f = M.readyState;
          "loaded" === f || "complete" === f ? (n = v, G()) : ja(n);
        }
      };
      ja(n);
    } else {
      la(Y, "load", G), eb && ja(function() {
        G && G();
      }, 999);
    }
    C || !eb && 1.8 > Z ? la(Y, "unload", function(f) {
      oa(c, f, !0);
    }) : c = v;
    Hb = function(f) {
      Nc.push(f);
    };
    db(function() {
      na();
      cc(na);
    });
    zc = function(f, g) {
      if (u) {
        la(f, "focusin", g);
      } else if (z) {
        la(f, "DOMFocusIn", g);
      } else {
        if (U) {
          Ma || (Ma = lc(ra, 333));
        } else if (S || V) {
          la(M, "focus", Ba, !0);
        } else {
          return;
        }
        for (var y = ha, p = 0, O = y.length; p < O; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            return;
          }
        }
        y.push(f, g);
      }
    };
    ed = function(f, g) {
      if (u) {
        la(f, "focusin", g);
      } else if (z) {
        la(f, "DOMFocusIn", g, !1);
      } else {
        for (var y = ha, p = 0, O = y.length; p < O; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            y.splice(p, 2);
            y.length || (U ? Ma = Uc(Ma) : (S || V) && Ka(M, "focus", Ba, !0));
            break;
          }
        }
      }
    };
    var u = 6 <= C || ib || 52 <= Z || 15 <= Fa || 534 <= ta || 5 <= Ea || Jc || 4 <= jb || 4 <= Yb || 11.6 <= da(8) || 12 <= da(9), z = 8 <= H || Fa || jb || Yb || ta || Ea, S = 8 > H, U = 6 > C, V = 52 > Z || Xb;
    if (V || S) {
      var ha = [];
      var Ba = function(f) {
        var g = ha, y = S ? M.activeElement : f.target;
        if (S) {
          var p = f;
          f = {type:"focusin", target:y, preventDefault:function() {
            p.preventDefault();
          }, stopPropagation:function() {
            p.stopPropagation();
          }};
        }
        for (var O = 0, Aa = g.length; O < Aa; ++O) {
          var La = g[O];
          (La === y || zb(La, y)) && g[O + 1].call(La, f);
        }
      };
    } else if (U) {
      ha = [];
      var Ma, Ja, Ca, ra = function() {
        Ca = Y.onerror;
        Y.onerror = Na;
        var f = M.activeElement;
        if (Ja !== f) {
          Ja = f;
          for (var g = ha, y, p = 0, O = g.length; p < O; ++p) {
            y = g[p], (y === f || zb(y, f)) && g[p + 1].apply(y, [{target:f}]);
          }
        }
        Y.onerror = Ca;
        Ca = v;
      }, Na = function() {
        D("error!");
        Y.onerror = Ca;
        Ca = Ja = v;
        return !0;
      };
    }
    yc = function(f) {
      fb && fb.push(f);
    };
    var h = 60 > Z || Xb, e, r, q;
    if (89 <= Z || 89 <= Fa || nc && 79 <= Kc || ma && (ma("(forced-colors:none)").matches || ma("(forced-colors:active)").matches)) {
      Ac = !0, Q("(forced-colors:active)", function(f) {
        e = f.matches;
        Ha = P();
        ea(fb, Ha);
        D("(forced-colors:active):" + Ha);
      });
    } else if (10 <= C || ib || nc && Kc) {
      Ac = !0, Q("(-ms-high-contrast:black-on-white)", function(f) {
        e = r = f.matches;
        Ha !== P() && (Ha = P(), ea(fb, Ha), D("(-ms-high-contrast:black-on-white):" + Ha));
      }), Q("(-ms-high-contrast:white-on-black)", function(f) {
        e = q = f.matches;
        Ha !== P() && (Ha = P(), ea(fb, Ha), D("(-ms-high-contrast:white-on-black):" + Ha));
      }), Q("(-ms-high-contrast:active)", function(f) {
        e = f.matches;
        Ha !== P() && (Ha = P(), ea(fb, Ha), D("(-ms-high-contrast:active):" + Ha));
      });
    } else if (nc && (C || Z && 0 <= Xa.conpare(Ya, "1.8.1") || Xb)) {
      var t = function() {
        function f(p, O) {
          if (O && "transparent" === p) {
            return 382.5;
          }
          if ("#" === p.charAt(0)) {
            return parseInt("0x" + p.substr(1, 2), 16) + parseInt("0x" + p.substr(3, 2), 16) + parseInt("0x" + p.substr(5, 2), 16);
          }
          var Aa = p.split("(")[1].split(",");
          return pb(Aa[0]) + pb(Aa[1]) + pb(Aa[2]);
        }
        var g = M.defaultView;
        var y = g ? g.getComputedStyle(T, null) : T.currentStyle;
        g = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        g && (e = "#123456" !== g && "rgb(18,52,86)" !== g, r = f(g) < f(y, !0), q = f(g) > f(y, !0), Ha !== P() && (Ha = P(), D("(forced-colors-fallback):" + Ha), ea(fb, Ha, h)));
      };
      Hb(function(f) {
        if (f) {
          return Ia(T, "color", "#123456"), Ia(T, "backgroundColor", "#123456"), h ? (t(), fb = v) : cc(t), t = v, !0;
        }
      });
    } else {
      fb = P = v;
    }
    xc = function(f) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      k.push(f);
    };
    var k = [], N = 7.5 <= H && 8 > H;
    N && function() {
      for (var f = M.images, g = f.length, y; g;) {
        y = f[--g], y.J = y.src, lb(y, "src");
      }
    }();
    db(function() {
      function f() {
        p ? (O = y[--p], N && rb(O, "src", O.J), Oc(g, N ? O.J : O.src)) : k = v;
      }
      function g(La) {
        oa(k, {G:O, H:La}, !p);
        f();
      }
      var y = M.images || Fb("img"), p = y.length;
      if (12 > H || 532 > ta) {
        f();
      } else {
        for (; p;) {
          var O = y[--p];
          var Aa = 9 > C ? O.complete : 0 <= O.naturalWidth ? O.naturalWidth : O.width;
          ea(k, {G:O, H:Aa}, !p);
        }
        k = v;
      }
    });
    wc = function(f) {
      w.push(f);
    };
    var w = [], I;
    la(Y, "resize", J);
    Gb(function() {
      I && Hc(I);
      Ka(Y, "resize", J);
    });
    Lb = function(f) {
      x.push(f);
    };
    var x = [], E = 1 > Z || 1.2 <= Z && 1.8 > Z || 7.2 >= H, R;
    E ? cc(function() {
      var f = Y.pageYOffset;
      R !== f && (R = f, xa({type:"scroll", cancelable:!1, stopPropagation:hb, preventDefault:hb}));
    }) : la(Y, "scroll", xa, {passive:!0});
    Gb(function() {
      E || Ka(Y, "scroll", xa, {passive:!0});
    });
    fd = function(f, g) {
      if (ka) {
        la(f, "wheel", g, {passive:!1});
      } else if (sa) {
        la(f, "mousewheel", g, !1);
      } else if (Da) {
        la(f, "MozMousePixelScroll", g, !1);
      } else if (Oa) {
        for (var y = ab, p = 0, O = y.length; p < O; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            return;
          }
        }
        y.length || la(M, "DOMMouseScroll", Ta, !1);
        y.push(f, g);
      }
    };
    gd = function(f, g) {
      if (ka) {
        Ka(f, "wheel", g, {passive:!1});
      } else if (sa) {
        Ka(f, "mousewheel", g, !1);
      } else if (Da) {
        Ka(f, "MozMousePixelScroll", g, !1);
      } else if (Oa) {
        for (var y = ab, p = 0, O = y.length; p < O; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            y.splice(p, 2);
            y.length || Ka(M, "DOMMouseScroll", Ta, !1);
            break;
          }
        }
      }
    };
    var ka = 9 <= C || ib || 17 <= Z || 31 <= Fa || 537.7 <= ta, sa = 6 <= C || ib || 9 <= H || Fa || 522 <= ta || Ea, Da = Rb, Oa = Z && 0 <= Xa.conpare(Ya, "0.9.7") && !Rb;
    if (Oa) {
      var ab = [], Ta = function(f) {
        for (var g = ab, y = f.target, p, O = 0, Aa = g.length; O < Aa; ++O) {
          p = g[O], zb(p, y) && g[O + 1].call(p, f);
        }
      };
    }
  })();
  (function() {
    function P(e) {
      switch(e) {
        case 1:
          return b;
        case 2:
          return !!l;
        case 3:
          return !!A;
        case 4:
          return !!c;
        case 5:
          return u;
        case 6:
          return n && !xa;
      }
      return !1;
    }
    function G(e) {
      z(e);
      Na && !e && Za(Na);
      z = S = U = V = ha = Ba = Ca = ra = Na = h = v;
    }
    function Q(e) {
      var r = '1.6em "' + e + '"';
      D("[webFontTest] testByNativeFontLoaderAPI start.");
      M.fonts.load(r).then(function(q) {
        D("[webFontTest] fonts.check() : " + M.fonts.check(r, "i") + ", fonts.length : " + q.length);
        (q = fa(S)) ? ja(G, q) : (D("[webFontTest] mesureWebFont() : false"), ea(!0));
      }, function(q) {
        D("[webFontTest] fonts.load() rejected! " + q);
        qb !== v ? ba(qb) : pc(ba);
      });
    }
    function oa(e) {
      return M.hidden || M.msHidden || M.mozHidden || M.webkitHidden ? (Ja = cb(), !1) : e < cb() - Ja;
    }
    function ea(e) {
      e && (D("[webFontTest] testWebFont start."), Ja = cb());
      (e = fa(S, Ma)) ? (D("[webFontTest] testWebFont mesurement success : " + e), G(e)) : oa(Ma) ? (D("[webFontTest] testWebFont timeout!"), Ca ? na() : Ga ? G(0) : qb !== v ? ba(qb) : pc(ba)) : ja(ea);
    }
    function fa(e, r) {
      var q = 0, t = -1, k = [];
      if (!h) {
        var N = -1;
        var w;
        ra = qa(wa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa);
        for (h = []; w = a[++N];) {
          Ia(ra, "fontFamily", w), h[N] = ra.offsetWidth;
        }
        D("[webFontTest] default width " + h.join(", "));
      }
      for (5 > C ? ra || (ra = qa(wa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, aa)) : wa.appendChild(ra); N = a[++t];) {
        Ia(ra, "fontFamily", '"' + e + '",' + N);
        var I = ra.offsetWidth;
        if (!pa && I !== h[t]) {
          q = 1;
          break;
        }
        k[t] = I;
      }
      if (pa && I === k[0] && I === k[1]) {
        for (D("[webFontTest] Hit... : width=" + I), q = 1, t = -1; 0 <= (I = h[++t]);) {
          if (I === k[0] && I === k[1] && I === k[2]) {
            D("[webFontTest] Failed! : font[" + t + "]=" + a[t]);
            q = 0;
            break;
          }
        }
      }
      !C && q && ha && (ra.textContent = ha, I = ra.offsetWidth, ra.textContent = Ba, q = I === ra.offsetWidth ? 2 : 1, ra.textContent = aa);
      Za(ra);
      5 > C && (ra = v);
      r && (q || oa(r)) && D("[webFontTest] " + e + " " + k.join(", "));
      return q;
    }
    function ba(e) {
      D("[webFontTest] onTestDataURIComplete : " + e);
      e ? (Ca = !0, Ma = K, D("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), S = S.replace(ma, ""), na()) : G(0);
    }
    function na() {
      if (U) {
        for (; U.length;) {
          var e = U.shift(), r = U.shift();
          if (P(e)) {
            D("[webFontTest] maybe can use! " + r);
            Na = Sc(r, J, V, Na);
            return;
          }
        }
      }
      G(0);
    }
    function J(e) {
      e ? ea(!0) : na();
    }
    pc = !1 === qb ? function(e) {
      ja(e, !1);
    } : function(e) {
      function r(k) {
        t && (t = Eb(t), qb = k, q.onload = q.onerror = hb, e(k));
      }
      if (qb !== v) {
        D("[dataURITest] already done : " + qb), ja(e, qb);
      } else {
        D("[dataURITest] start!");
        var q = new Image(), t = ja(r, !1, 999);
        q.onerror = function() {
          D("[dataURITest] no DATA URI!");
          r(!1);
        };
        q.onload = function() {
          D("[dataURITest] DATA URI:" + (1 === q.width * q.height));
          r(1 === q.width * q.height);
        };
        q.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > C && db(function() {
      var e = qa(wa, "div");
      Wa(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lc = 1 < e.offsetHeight;
      Za(e);
    });
    Oc = function(e, r) {
      function q() {
        k || !N || t.complete ? (D("[imageTest] timer -> img.complete. img.width=" + t.width), ja(e, !!t.width), t.onerror = t.onload = hb, t = e = v) : (--N, ja(q));
      }
      var t = new Image(), k, N = 99;
      D("[imageTest] start.");
      t.onerror = function() {
        D("[imageTest] error!");
        k = !0;
      };
      t.onload = function() {
        D("[imageTest] onload.");
        k = !0;
      };
      t.src = r;
      ja(q);
    };
    Pc = function(e, r, q, t, k, N, w) {
      z = e;
      S = r;
      U = q;
      V = t;
      ha = k;
      Ba = N;
      Ma = w || T;
      S = ma + S;
      D("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      D("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!qc);
      da(10) ? ja(G, 1) : qc ? ja(G, 0) : !M.fonts || 603 > ta || 11 > Ea ? (D("[webFontTest] No native font loader."), ea(!0)) : (D("[webFontTest] Use Native font loader."), Q(S));
    };
    var Ga = 9 > C, xa = 6 > Fa || H || 530 > ta || 4 > Ea, ma = "bad_" + cb() + "_", T = 5E3, K = 500, aa = "mmmmmmmmmmlliiiiiiiii", pa = 21 > Fa || 7 > Ea || ta && 0 >= Xa.conpare(Ya, "536.11"), a = ["monospace", "sans-serif", "serif"];
    qc || (pa && Fa && D("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + Fa), pa && Ea && D("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ea), pa && ta && D("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + ta));
    var b = 14 <= ib || 36 <= Fa || 39 <= Z || 602 <= ta || 10 <= Ea, l = 6 <= Fa || Z && 0 <= Xa.conpare(Ya, "1.9.2") || 525 <= ta || 3.2 <= Ea || 4.4 <= jb || 11.1 <= H || ib || 9 <= da(2) || 10 <= da(3), A = 2 <= Fa || Rb || 525 <= ta || 3.2 <= Ea || 2.2 <= jb || 10 <= H || ib || 9 <= da(2) || 10 <= da(3), c = A, n = 525 <= ta || 3.2 <= Ea || 38 > Fa || 3 <= jb || 11.5 <= H, u = 4 <= da(2) || 10 <= da(3), z, S, U, V, ha, Ba, Ma, Ja, Ca, ra, Na, h;
  })();
  (function() {
    function P(c) {
      var n = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== c) {
        D("[VectorIcon] " + c);
        var u = Xc("ico"), z = 0, S = u.length;
        if (S) {
          if (1 === c) {
            for (; z < S; ++z) {
              c = u[z];
              var U = bd(c);
              if (U = n[U]) {
                c.innerHTML = U;
              }
            }
          } else {
            A && !l && (Y.VectorIconCompat = bz, ac(ya + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        bc(ya + "js/vector-icon-svg-fallback.js");
        return [n, u, qa, l];
      }
      bz = !1;
    }
    xc(function(c) {
      var n = c.G;
      c = c.H;
      var u = Ra(n);
      !mb(u, "aBodyRoot") && c ? Ab(u, "js-image-has-been-loaded") : c || Sa(n, "alt") || "lazy" === Sa(n, "loading") || Ia(n, "display", "none");
    });
    eb && (Va.splice(1, 0, function() {
      for (var c = Yc(wb, "RichLink-sep"), n, u, z, S, U, V; n = c.shift();) {
        for (n = kb(n); u = n.shift();) {
          if ("A" === $a(u) && !u.innerHTML) {
            for (D("\u25a0 Broken Anchor " + u.parentNode.innerHTML); z = n.shift();) {
              if (1 === z.nodeType) {
                if ("A" === $a(z)) {
                  break;
                }
                for (S = yb(z, "A"); U = S.shift();) {
                  for (V = kb(U); V.length;) {
                    U.parentNode.insertBefore(V.shift(), U);
                  }
                  Za(U);
                }
              }
              u.appendChild(z);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var c = Fb("A"), n, u; n = c.shift();) {
        "A" !== $a(n) || n.innerHTML || (u = n.nextSibling && n.nextSibling.firstChild) && u.href === n.href && (D("\u25b2 Broken Anchor " + u.innerHTML), Za(n));
      }
    }));
    5.5 <= C && 8 > C && fb && yc(function(c) {
      for (var n = yb(wa, "a"), u = n.length, z = 0; z < u; ++z) {
        n[z].hideFocus = !c;
      }
    });
    if (!Ac && fb) {
      var G, Q = function() {
        G = qa(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ya + "css/" + Zb + "hc/" + oc});
        if (Mc || 5.5 <= C && 9 > C && Lc) {
          Ab(wa, "js-canuse-css-rotate-when-forced-colors-mode"), D("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        Q = v;
      };
      yc(function(c) {
        c && !G ? Q() : G && (c ? vb.appendChild(G) : Za(G));
      });
    }
    H && db(function() {
      for (var c = yb(wa, "a"), n = c.length, u = 0, z; u < n; ++u) {
        z = c[u], "-1" === Sa(z, "tabIndex") ? lb(z, "tabIndex") : Sa(z, "href") && rb(z, "tabIndex", "0");
      }
      c = yb(wa, "input");
      u = 0;
      for (n = c.length; u < n; ++u) {
        z = c[u], "hidden" === Sa(z, "type") && lb(z, "tabIndex");
      }
    });
    if (Z && 0 > Xa.conpare(Ya, "0.9.5")) {
      Tc = !0;
      var oa, ea, fa, ba, na;
      db(function() {
        la(M, "keydown", J);
        la(M, "keyup", Ga);
        zc(wa, xa);
        eb || (la(Y, "blur", pa), la(wa, "click", aa));
      });
      var J = eb ? function(c) {
        16 === c.keyCode ? oa = !0 : 9 === c.keyCode && ba && ma(ba, !0) && (ba.blur && ba.blur(), c.stopPropagation(), c.preventDefault(), ja(K));
      } : function(c) {
        16 === c.keyCode ? oa = !0 : 9 === c.keyCode && (ea = cb());
      }, Ga = function(c) {
        16 === c.keyCode && (oa = !1);
      }, xa = eb ? function(c) {
        c.target.innerHTML || D(c.target.parentNode.innerHTML);
        ba = c.target;
      } : function(c) {
        var n = c.target;
        if (ba === n) {
          fa = v;
        } else if (fa) {
          n === fa ? (c.stopPropagation(), K(!0)) : (n.blur && b(n), c.preventDefault(), K());
        } else {
          if (c = ba) {
            ba = v, b(c);
          }
          fa = n;
          K(!0);
        }
      }, ma = function(c, n) {
        var u = cb(), z = wa, S = "nextSibling", U = "firstChild";
        oa && (n || u - 99 < ea && ea <= u) && (S = "previousSibling", U = "lastChild");
        for (fa = v; c !== z;) {
          if (V) {
            u = c;
            var V = !1;
          } else {
            u = c[S];
          }
          if (u) {
            if (1 === u.nodeType) {
              if (T(u)) {
                return fa = u, !0;
              }
              c = (V = u[U]) || u;
            } else {
              c = u;
            }
          } else {
            c = c.parentNode;
          }
        }
      }, T = function(c, n) {
        function u() {
          return "-1" !== Sa(c, "tab-index");
        }
        function z() {
          return 0 < c.offsetHeight * c.offsetWidth;
        }
        if (c.focus) {
          var S;
          switch({A:n ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[$a(c)]) {
            case 1:
              if (Kb(c, "href") && u() && z()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Sa(c, "type") && u() && !Kb(c, "disabled") && z()) {
                return !0;
              }
              break;
            case 3:
              if (u() && !Kb(c, "disabled") && z()) {
                return !0;
              }
              break;
            default:
              if ((S = Sa(c, "tab-index")) && "-1" !== S && z()) {
                return !0;
              }
          }
        }
      }, K = function(c) {
        na = 0;
        fa && (eb || la(fa, "blur", a), ba = fa, fa = v, c || ba.focus());
      };
      if (!eb) {
        var aa = function(c) {
          var n = c.target;
          if (ba && T(n, !0)) {
            var u = ba;
            ba = v;
            b(u);
            fa = n;
            c.stopPropagation();
            c.preventDefault();
            K();
          }
        }, pa = function(c) {
          c.target === M && (fa = v);
        }, a = function(c) {
          c = c.target;
          Ka(c, "blur", a);
          ba === c && ma(c) && (na || (na = ja(K)));
        }, b = function(c) {
          Ka(c, "blur", a);
          c.blur();
        };
      }
    }
    Hb(function(c) {
      if (c) {
        return Pc(P, "myIconFont", [1, ya + "iconfont/woff2.css", 2, ya + "iconfont/woff.css", 4, ya + "iconfont/otf.css", 3, ya + "iconfont/ttf.css", 5, ya + "iconfont/eot.css", 6, ya + "iconfont/svg.css"], "js-myIconFont-testCssReady", "Twitter", "\ud83d\udc24", 5E3), P = v, !0;
      }
    });
    var l = 8 <= da(8) && 9 > H, A = 9 <= C || ib || 1.8 <= Z || 8 <= da(8) || 9 <= da(9) || 3 <= da(21) || Xb || kd || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || Ea;
  })();
  (function() {
    function P(d) {
      var m = Ca.length, F, L, W, B;
      if (13 === (d.keyCode || d.V) || d.type !== ra) {
        for (; m;) {
          var X = Ca[--m];
          if (X.F === this || X.u === this) {
            m = X.F;
            var ca = F = X.u;
            if (X.P) {
              if (Ia(m, "width", X.$), m.src = X.Z, fc(ca, X.T), m = X.L) {
                Wa(m, X.S), vc(m, "js-captioned-thumbnail__large");
              }
            } else {
              if (L = X.N) {
                delete X.N;
                if (X.M) {
                  for (; F = Ra(F);) {
                    if (!mb(F, "caption")) {
                      var ia = $a(F);
                      if ("DIV" === ia || "P" === ia || "BLOCKQUOT" === ia || "LI" === ia || "DD" === ia || "TD" === ia || "TH" === ia || "FORM" === ia || "PRE" === ia) {
                        break;
                      }
                    }
                  }
                  F = (F.offsetWidth | 0) - 4;
                  1600 < F && (F = 1600);
                  if (2 === X.M) {
                    L = L.split("=");
                    ia = L.length;
                    if (W = L[ia - 1]) {
                      (B = pb(W.substr(1))) && W === "s" + B ? L[ia - 1] = "w" + F : L[ia] = "w" + F;
                    }
                    L = L.join("=");
                  } else {
                    L = L.split("/");
                    ia = L.length;
                    if (W = L[ia - 2]) {
                      (B = pb(W.substr(1))) && W === "s" + B ? L[ia - 2] = "w" + F : L.splice(ia - 1, 0, "w" + F);
                    }
                    L = L.join("/");
                  }
                }
                X.X = L;
              }
              X.T = cd(ca);
              Ab(ca, "js-pica-thumbnail__large");
              Ia(m, "width", "");
              m.src = X.X;
              if (m = X.L) {
                Wa(m, ""), Ab(m, "js-captioned-thumbnail__large");
              }
            }
            X.P = !X.P;
            break;
          }
        }
        G(d);
      }
    }
    function G(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function Q(d) {
      var m = ka;
      if (Mb) {
        if (sa && !m) {
          if (cb() < sa) {
            return;
          }
          sa = v;
        }
        7 === d ? (J("t"), Da = 0) : (J("s"), Da && (Da = Eb(Da)), E = mc());
        m ? (ka = ea(v, m[0], m[1])) || (sa = cb() + 99) : ea();
        xa();
      } else {
        ka = v;
      }
    }
    function oa() {
      J("w.blur");
    }
    function ea(d, m, F) {
      function L(nb) {
        ca = nb;
        if (I) {
          ia = I + ":translate" + (R ? "3D(0," : "(0,") + nb + (R ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== nb) {
          if (r || q) {
            var Bc = k.offsetWidth;
          }
          ia = r ? "position:fixed;width:" + Bc + "px;top:" + (nb - W + va) + "px" : t ? "top:" + nb + "px" : "position:absolute;top:" + nb + "px;left:0";
          if (q && ia) {
            var Tb = 8 > C ? " " : ",";
            ia += ";clip:rect(" + (0 > nb ? -nb + "px" + Tb + Bc + "px" + Tb + Pa : "0" + Tb + Bc + "px" + Tb + (nb + Pa < Ub ? Pa : Ub - nb)) + "px" + Tb + "0)";
          }
        }
      }
      var W = E, B = N, X = k.offsetTop === B.offsetTop, ca = 0, ia = "", gb = !0;
      if (X) {
        for (var za = 0, va = 0, Ua = B; Ua && Ua !== wa;) {
          va += Ua.offsetTop, Ua = Ua.offsetParent;
        }
        ca = x;
        Ua = 11 > C ? ub.offsetHeight : Y.innerHeight;
        var Cc = B.offsetHeight, Pa = w.offsetHeight, Ub = Pa < Cc ? Cc : Pa, Bb = W, Nb = Bb + Ua, gc = va, hc = gc + Ub, hd = va + ca, pd = hd + Pa;
        B = Bb < gc ? gc : Bb;
        var Cb = hc < Nb ? hc : Nb, Ob = Cb - B;
        Bb = hc <= Bb;
        Nb = Nb <= gc;
        if (m !== v) {
          gb = va + m;
          d = gb + F;
          if (Bb || Nb) {
            return Ua <= F ? (m = va, J("4.1.1")) : Bb ? (m = hc - F, J("4.1.2")) : (m = va + F - Ua, J("4.1.3")), sa = v, Y.scroll(0, m), J("4.1.*"), ka;
          }
          Pa <= Ob ? (za = 3, J("4.2")) : F <= Ob ? Pa - m <= Ob ? (za = 2, J("4.3.1")) : B <= gb && d <= Cb ? B < va + ca && (za = 4, J("4.3.2")) : B <= gb && gb <= Cb ? (za = 5, J("4.3.3")) : B <= d && d <= Cb ? (za = 4, J("4.3.4")) : d < B ? (za = 4, J("4.3.5")) : (za = 5, J("4.3.6")) : (za = 4, J("4.4"));
          gb = !1;
        } else {
          d !== v ? Pa <= Ob ? (za = 7, gb = !1, J("3.1")) : (ca -= 60 * d, za = Cb - va - Pa, d = B - va, ca < za ? (ca = za, J("3.2.1")) : d < ca ? (ca = d, J("3.2.2")) : J("3.2.3"), za = 6) : Cc <= Pa || (Bb ? (za = 1, J("2.2.1")) : Nb ? J("2.2.2") : Pa <= Ob ? (za = 3, J("2.3")) : B < hd ? (za = 3, J("2.4.1")) : pd < Cb ? (za = 2, J("2.4.2")) : W < va + Pa - Ob ? J("2.4.3") : (za = 2, J("2.4.4")));
        }
        switch(za) {
          case 0:
            L(0);
            break;
          case 1:
            L(Ub - Pa);
            break;
          case 2:
            L(Cb - va - Pa);
            break;
          case 3:
            L(B - va);
            break;
          case 4:
            L(B - va - m);
            break;
          case 5:
            L(Cb - va - (m + F));
          case 6:
            L(ca);
        }
        ma(ca, Pa, va, Ub, Ua, m || "-", F || "-");
      } else {
        ma(ca, "-", "-", "-", "-", "-", "-");
      }
      Wa(w, ia);
      x = ca;
      return X && gb;
    }
    function fa(d) {
      if (Mb && (J("m"), Z && (E = mc(), xa()), this !== d.target)) {
        var m = jc(d.deltaY) ? d.deltaY : jc(d.wheelDeltaY) ? d.wheelDeltaY / 120 : jc(d.wheelDelta) ? d.wheelDelta / -120 : d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1);
        m && ea(9 >= m ? -9 >= m ? -3 : m : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function ba(d) {
      if (Mb) {
        var m = Z && 0 > Xa.conpare(Ya, "0.9.4"), F = d.target, L = w, W = 0;
        if (zb(L, F)) {
          J(d.type || "ie5focus");
          la(F, "blur", na);
          if (I) {
            m = F.getBoundingClientRect(), d = m.bottom - m.top, W = m.top - L.getBoundingClientRect().top | 0;
          } else {
            d = F.offsetHeight;
            var B = F;
            if (m) {
              for (var X = []; B && (Z ? zb(L, B) : L !== B);) {
                for (; B.previousSibling;) {
                  B = B.previousSibling, B.tagName && X.unshift(B.tagName + ":" + B.offsetTop);
                }
                B = B.offsetParent;
              }
              D(X.join());
              B = F;
            }
            for (; B && (Z ? zb(L, B) : L !== B);) {
              if (m) {
                for (; B.previousSibling;) {
                  B = B.previousSibling, W += B.offsetHeight || 0;
                }
                B = B.parentNode;
              } else {
                W += B.offsetTop, B = B.offsetParent;
              }
            }
          }
          e ? (ka = [W, d], Da && Eb(Da), Da = ja(Q, 7, 1 > Z || 536 > ta || 14 > Fa ? 500 : 0)) : (E = mc(), ea(v, W, d));
          T(W, d);
        }
      }
    }
    function na() {
      Ka(this, "blur", na);
      T(0, 0);
    }
    function J(d) {
      Ta && (O && (O = Eb(O)), O = ja(Ga, 0, 1400), Ta.innerHTML += " " + d);
    }
    function Ga() {
      Ta.innerHTML = "";
    }
    function xa() {
      g && (Ia(g, "top", (E / 10 | 0) + "px"), ab.innerHTML = " scrl:" + (E | 0));
    }
    function ma(d, m, F, L, W, B, X) {
      y && (Ia(y, "top", ((d + F) / 10 | 0) + "px"), Ia(y, "height", (m / 10 | 0) + "px"), Ia(g, "height", (W / 10 | 0) + "px"), Ia(f, "height", (wa.scrollHeight / 10 | 0) + "px"), Oa.innerHTML = "conY:" + F + "/sidY" + d + ", conH:" + L + "/sidH" + m + ", focY:" + B + " focH:" + X);
    }
    function T(d, m) {
      p && (Ia(p, "top", (d / 10 | 0) + "px"), Ia(p, "height", (m / 10 | 0) + "px"));
    }
    function K() {
      Aa.call(La);
    }
    function aa() {
      M.fullscreenElement || M.fullscreen || M.webkitIsFullscreen || M.msFullscreenElement || Y.fullScreen ? (rb(La, "id", "blog2slide-root"), Pb[1].parentNode.insertBefore(sb, Pb[1]), pa(), M.onkeydown = a) : Ib && (Za(sb), lb(La, "id"), lb(Ib, "id"), Ib = M.onkeydown = v);
    }
    function pa() {
      Ib && lb(Ib, "id");
      Jb = 0 < Jb ? Dc < Jb ? Dc : Jb : 0;
      Ib = Pb[Jb];
      rb(Ib, "id", "blog2slide-current");
    }
    function a(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++Jb, pa();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --Jb, pa();
      }
    }
    Sc = function(d, m, F, L) {
      L = L || qa(vb, "link", {type:"text/css", rel:"stylesheet"});
      if (U) {
        (z = xb(F)) ? lb(z, "id") : z = qa(wa, "div", {"aria-hidden":"true", className:F});
        var W = z.offsetWidth;
        D("[CSS Loader] widthBeforeCSSLoaded = " + W);
        rb(z, "id", F);
      }
      S(L, d, m, W);
      return L;
    };
    var b = Z && 0 > Xa.conpare(Ya, "0.9.1"), l = 11 <= C || ib || 9 <= H && 9.5 > H, A = 11 > C, c = 7.2 <= H && 7.5 > H, n = 26 > Z && !b || 19 > Fa || 4.3 > jb || 2 > Yb || 536 > ta || 6 > Ea || 7 <= H && 9 > H && !c, u = !b && !l && !A && !c && !n, z, S = u ? function(d, m, F) {
      D("[CSS Loader] onload + onerror");
      d.onload = bz;
      d.onerror = function() {
        d.onload = d.onerror = null;
        F(!1);
      };
      d.href = m;
      function bz() {
        d.onload = d.onerror = null;
        F(!0);
      }
      bz = !1;
    } : l ? function(d, m, F, L) {
      D("[CSS Loader] onload + mesure");
      d.onload = bz;
      d.href = m;
      function bz() {
        var W = U(L);
        d.onload = z = null;
        F(W);
      }
      bz = !1;
    } : A ? function(d, m, F, L) {
      D("[CSS Loader] onreadystatechange + onerror");
      d.onreadystatechange = bz;
      d.href = m;
      function bz() {
        if ("complete" === d.readyState) {
          var W = U(L);
          z = null;
          d.V = hb;
          F(W);
        }
      }
      bz = !1;
    } : n || c ? function(d, m, F, L) {
      function W() {
        X && (ca = Eb(ca), D("[CSS Loader] onComplete"), ia = cb() + 999, ja(B, 0, 99), n ? X.onerror = null : X.removeEventListener("load", W, !1), X = null);
      }
      function B() {
        U(L) ? (z = null, F(!0)) : cb() < ia ? ja(B, 0, 99) : (z = null, F(!1));
      }
      var X = new Image(), ca = ja(W, 0, 5E3), ia;
      n ? (D("[CSS Loader] img.onerror + mesure"), X.onerror = W) : (D('[CSS Loader] img.addEventListener("load") + mesure'), X.addEventListener("load", W, !1));
      X.src = d.href = m;
    } : function(d, m, F) {
      D("[CSS Loader] UNSUPPORTED");
      ja(F, !1);
    }, U = !u && !b && function(d) {
      D("[CSS Loader] ExternalCSSLoader_elmTest.offsetWidth = " + z.offsetWidth);
      return z.offsetWidth !== d;
    };
    Rc = Z && 0 >= Xa.conpare(Ya, "0.9");
    $b = !(7.2 > H || Rc);
    ac = function(d) {
      V ? Va ? M.write('<script src="' + d + '">\x3c/script>') : ob("[DynamicScvriptLoader] Document already loaded! " + d) : Va || Ma.length ? Ma.push(d) : Ja(d);
    };
    bc = function(d) {
      V ? D("[DynamicScvriptLoader] " + d + " loaded.") : d === Ba ? Ja(Ma.shift()) : ob(d + " <> " + Ba);
    };
    var V = !$b, ha = $b && 7.5 > H, Ba;
    if (!V) {
      var Ma = [];
      ha && (Qc = !0);
      db(function() {
        Ja(Ma.shift());
      });
      var Ja = function(d) {
        if (Ba = d) {
          ha ? Ec[0].src = d : qa(vb, "script", {src:d});
        }
      };
    }
    var Ca = [], ra = 5.5 <= C && 8 > C ? "keypress" : "keydown";
    if (!Ic) {
      var Na = bb.transition !== v || bb["-o-transition"] !== v || bb["-moz-transition"] !== v || bb["-webkit-transition"] !== v;
      xc(function(d) {
        if (d.H && wb) {
          d = d.G;
          var m = Ra(d), F = "", L;
          if ("A" === $a(m) && 1 === Zc(m).length) {
            var W = Sa(m, "href");
            var B = W.split("?")[0].split("#")[0].split(".");
            B = (B[B.length - 1] || "").toLowerCase();
            if ((L = 0 < W.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + B + ".")) {
              la(m, ra, P);
              la(d, "click", P);
              la(m, "click", G);
              Na && (F = d.naturalWidth + "px", Ia(d, "width", F));
              Ab(m, "js-pica-thumbnail");
              for (B = m; B = Ra(B);) {
                if (mb(B, "caption")) {
                  Ab(B, "js-captioned-thumbnail");
                  var X = B;
                  var ca = dd(X);
                  break;
                }
              }
              Ca.push({u:m, L:X, S:ca, Z:d.src, $:F, N:W, F:d, M:L ? 0 < W.indexOf("/img/a/") ? 2 : 3 : 0 < W.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Gb(function(d, m) {
        for (d = -1; m = Ca[++d];) {
          Ka(m.u, ra, P), Ka(m.F, "click", P), Ka(m.u, "click", G);
        }
      });
    }
    var h = ["jsSidebarFixer1", "jsSidebarFixer2"], e = !(9 > C || H || 1 <= Z && 1.3 > Z || Tc), r = !(5 > Ea || 2.2 > jb || 6 > da(12) || Qa(30) && 534 > ta || Qa(32) || 7 > C || 9 > H || 1 > Z), q = r || 6 === C || 1 > Z, t = 7.5 > H, k, N, w, I = od && Mc, x = 0, E = 0, R, ka, sa, Da;
    id || Ic || (Hb(function(d) {
      if (d) {
        if (!wb) {
          return !0;
        }
        d = -1;
        var m;
        k = xb("jsSide");
        N = wb;
        if (!k) {
          return !0;
        }
        Lb(Q);
        wc(Q);
        w = Sb(tc(k), "div", {id:"jsSidebarFixer"});
        la(Y, "blur", oa);
        for (zc(w, ba); 1 < kb(k).length;) {
          w.appendChild(kb(k)[1]);
        }
        for (; m = h[++d];) {
          fd(xb(m), fa);
        }
        C || ib || 2 > Fa || (R = bb.perspective !== v || bb.MozPerspective !== v || bb["-webkit-perspective"] !== v);
        Q();
        return !0;
      }
    }), Gb(function() {
      for (var d = -1, m; m = h[++d];) {
        gd(xb(m), fa);
      }
      Ka(Y, "blur", oa);
      ed(w, ba);
    }));
    var Oa, ab, Ta, f, g, y, p, O;
    Hb(function(d) {
      if (d) {
        if (!wb) {
          return !0;
        }
        var m = kb(wa);
        d = Sb(m[0], "div");
        if (r) {
          Wa(d, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; m.length;) {
            d.appendChild(m.shift());
          }
          eb || (Wa(d, "width:100%;height:100%;overflow:auto;position:relative"), Wa(ub, "overflow:hidden"), Wa(wa, "overflow:hidden"));
          d = $c(d, "div");
          Wa(d, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        qa(d, "div", v, I ? "transform" + (R ? "3D" : "") : r ? "pos:fixed" : "pos:absolute");
        m = qa(d, "div");
        Oa = qa(m, "span");
        ab = qa(m, "span");
        Ta = qa(d, "div");
        f = qa(d, "div");
        Wa(f, "position:absolute;left:0;top:0;width:54px;background:#242");
        y = qa(d, "div");
        Wa(y, "position:absolute;left:0;width:54px;background:#363");
        g = qa(d, "div");
        Wa(g, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        p = qa(y, "div");
        Wa(p, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    db(function() {
      function d(X, ca, ia, gb) {
        var za = gb ? "div" : "cite";
        if (0 === ca.indexOf("urn:isbn:")) {
          ca = ca.substr(9).toUpperCase().split("-").join("");
          if (13 === ca.length) {
            ca = ca.toString().slice(3, -1);
            for (var va = 0, Ua = 0; 9 > Ua; Ua++) {
              va += (ca.charAt(Ua) - 0) * (10 - Ua);
            }
            va = (11 - va % 11) % 11;
            va = 10 === va ? "X" : va.toString();
            ca += va;
          }
          10 === ca.length && (ca = "//www.amazon.co.jp/exec/obidos/ASIN/" + ca + "/itozyun-22/ref=nosim/");
        }
        ia = gb ? Sb(tc(F), za, {className:ia}) : qa(F, za, {className:ia});
        qa(ia, "a", 0 === ca.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:ca} : {href:ca}, X);
      }
      if (wb) {
        for (var m = yb(wb, "blockquote"), F, L = -1, W, B; F = m[++L];) {
          W = Sa(F, "title"), B = Sa(F, "cite"), W && B ? (lb(F, "title"), d(W, B, "js-generated-link-in-blockquote", !0)) : B && (lb(F, "cite"), d(Y.decodeURI ? decodeURI(B) : B, B, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Aa, La, sb, Ib, Pb, Jb, Dc;
    db(function() {
      var d = xb("blog2slide-start");
      if (d) {
        var m = M.onfullscreenchange !== v ? "f" : M.onmozfullscreenchange !== v ? "mozF" : M.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        Aa = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== m || Aa ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', la(d.firstChild, "click", K), d = Ra(d), La = Ra(d), Pb = yb(d, "section"), sb = M.createElement("h1"), sb.innerHTML = yb(wa, "h1")[0].innerHTML, Dc = Pb.length, Pb.splice(0, 0, sb), 0 !== m ? la(M, m + "ullscreenchange", aa) : C ? la(M, "MSFullscreenChange", aa, !1) : wc(aa)) : Za(d);
      }
    });
  })();
  var Qb, Vb = !Gc || .9 > Z || 8 > H || 5.5 > C, tb;
  (function() {
    function P(h) {
      return h === "" + h;
    }
    function G(h, e) {
      return Vb ? new K(h, e) : new Gc(h, e);
    }
    function Q(h, e, r, q, t) {
      var k = aa.codeBlocks[aa.codeBlocks.length - 1], N = T(), w = N - a;
      switch(r || 0) {
        case 1:
          aa.initRegExpCount++;
          aa.initRegExpTotal += w;
          aa.initRegExpMax < w && (aa.initRegExpMax = w, aa.initRegExpSource = t.toString(), aa.initRegExpInstance = t);
          break;
        case 2:
          k.decorateCount++;
          k.decorateTime += w;
          break;
        case 3:
          k.updateDOMTime += w;
      }
      if (N - pa < c && !q) {
        return a = N, h(e);
      }
      ja(oa, {U:h, Y:e});
    }
    function oa(h) {
      pa = a = T();
      h.U(h.Y);
    }
    function ea(h, e) {
      h && Qb[h] || (h = n.test(e) ? "default-markup" : "default-code");
      var r = !!Qb[h];
      r && Q(V, h, 0, !0);
      return r;
    }
    function fa() {
      function h(Oa, ab, Ta) {
        ab && (e.h = e.h || [], e.h.push({l:e, B:e.B, O:1, s:N, D:Oa, o:ab, m:Ta, R:{}, v:0}));
      }
      var e = b, r = e.m, q = r[0], t = r[2], k = e.D, N = e.s, w = e.aa.shift(), I = e.R;
      if (w) {
        var x = I[w], E;
        if (!(0 <= x)) {
          if (E = q[w.charAt(0)]) {
            var R = w.match(E[1]);
            x = E[0];
          } else {
            for (x = 0, q = -1; E = t[++q];) {
              if (R = w.match(E[1])) {
                x = E[0];
                break;
              }
            }
          }
          !(E = P(x)) || R && P(R[1]) || (E = !1, x = 11);
          E || (I[w] = x);
        }
        t = e.v;
        I = w.length;
        e.v += I;
        if (E) {
          E = R[1];
          q = w.indexOf(E);
          var ka = E.length, sa = q + ka;
          R[2] && (sa = I - R[2].length, q = sa - ka);
          h(k + t, w.substr(0, q), r);
          if (ka && ea(x, E)) {
            h(k + t + q, E);
            var Da = !0;
          }
          h(k + t + sa, w.substr(sa), r);
          e.h && e.h.length && (b = e.h.shift());
          Da || (b !== e ? Q(S, v, 2) : Q(fa, v, 2));
        } else {
          N.push(k + t, x), Q(fa, v, 2);
        }
      } else {
        e.l ? (b = e.l.h.shift()) ? Q(S, v, 2) : (b = e.l, Q(fa, v, 2)) : Q(Ma, v, 2);
      }
    }
    function ba(h) {
      if (U.length) {
        var e = U.shift(), r = xa[e];
        if (r.pop) {
          xa[e] = r = G(r[0], r[1]);
        } else if (P(r)) {
          xa[e] = r = G(r);
        } else {
          return ba(h);
        }
        Q(ba, h, 1, !1, r);
      } else {
        Q(V, h);
      }
    }
    function na(h) {
      for (var e, r = h.firstChild; r; r = r.nextSibling) {
        var q = r.nodeType;
        e = 1 === q ? e ? h : r : 3 === q ? u.test(r.nodeValue) ? h : e : e;
      }
      return e === h ? v : e;
    }
    Qb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var J = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Ga = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
    ma = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), T = Wb.now || function() {
      return +new Wb();
    }, K, aa = {useRegExpCompat:Vb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var pa = T();
    var a, b, l, A, c = 5 > C ? 60 : 5.5 > C ? 0 : Vb ? 20 : 10, n, u;
    tb = [function(h) {
      Y.RegExpCompat = K = h;
    }, function() {
      n = G("^\\s*<");
      u = G("\\S");
    }];
    Vb || (tb[1](), tb = v);
    var z = function() {
      var h = b, e = h.W, r = ha(h.B, h.O), q = h.o = r.o;
      h.I = r.I;
      ea(e, q) || (b = v, Q(Na, v, 0, !0));
    };
    var S = function() {
      var h = b;
      h.aa = h.o.match(h.m[1]) || [];
      h.s.push(h.D, 0);
      Q(fa, v, 2);
    };
    var U = [];
    var V = function(h) {
      function e(x) {
        var E = x;
        0 <= x && (E = Ga[x]);
        0 <= E[1] && (E[1] = r(E[1]));
        return E;
      }
      function r(x) {
        var E = x;
        return 0 <= x && (E = xa[x], !E.exec) ? (U.push(x), x) : E;
      }
      var q = b, t = Qb[h];
      P(t) && (t = Qb[h] = Qb[t]);
      var k = t[0];
      if (0 <= k) {
        k = J[k];
        if (0 <= k["-num"]) {
          var N = k["-num"];
          delete k["-num"];
          for (var w = -1; 9 > w;) {
            k["" + ++w] = N;
          }
        }
        t[0] = k;
      }
      for (var I in k) {
        k[I] = e(k[I]);
      }
      t[1] = r(t[1]);
      k = t[2];
      w = 0;
      for (N = k.length; w < N; ++w) {
        k[w] = e(k[w]);
      }
      U.length ? Q(ba, h, 2) : (q.m ? q.l && (q.l.h[0].m = t) : q.m = t, Q(S, v, 1));
    };
    var ha = function(h, e) {
      function r(I) {
        var x = I.nodeType;
        if (1 === x) {
          if (!mb(I, "nocode")) {
            for (x = I.firstChild; x; x = x.nextSibling) {
              r(x);
            }
            x = $a(I);
            if ("BR" === x || "LI" === x) {
              q[N] = "\n", k[N << 1] = t++, k[N++ << 1 | 1] = I;
            }
          }
        } else if (3 === x || 4 === x) {
          if (x = I.nodeValue) {
            x = e ? x.split("\r\n").join("\n").split("\r").join("\n") : x.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), q[N] = x, k[N << 1] = t, t += x.length, k[N++ << 1 | 1] = I;
          }
        }
      }
      var q = [], t = 0, k = [], N = 0;
      r(h);
      var w = q.join("");
      "\n" === w.charAt(w.length - 1) && (w = w.substr(0, w.length - 1));
      return {o:w, I:k};
    };
    var Ba = function(h, e, r) {
      function q(x) {
        var E = x.nodeType;
        if (1 === E && !mb(x, "nocode")) {
          if ("BR" === $a(x)) {
            t(x), x.parentNode && Za(x);
          } else {
            for (x = x.firstChild; x; x = x.nextSibling) {
              q(x);
            }
          }
        } else if ((3 === E || 4 === E) && r) {
          var R = x.nodeValue, ka = R.indexOf("\r\n"), sa = 2;
          -1 === ka && (ka = R.indexOf("\n"), sa = 1);
          -1 === ka && (ka = R.indexOf("\r"));
          -1 !== ka && (E = R.substr(0, ka), x.nodeValue = E, (R = R.substr(ka + sa)) && uc(x, R), t(x), E || Za(x));
        }
      }
      function t(x) {
        function E(ka, sa) {
          var Da = sa ? ka.cloneNode(!1) : ka, Oa = ka.parentNode;
          if (Oa) {
            Oa = E(Oa, 1);
            var ab = ka.nextSibling;
            Oa.appendChild(Da);
            for (var Ta = ab; Ta; Ta = ab) {
              ab = Ta.nextSibling, Oa.appendChild(Ta);
            }
          }
          return Da;
        }
        for (; !x.nextSibling;) {
          if (x = x.parentNode, !x) {
            return;
          }
        }
        x = E(x.nextSibling, 0);
        for (var R; (R = x.parentNode) && 1 === R.nodeType;) {
          x = R;
        }
        N.push(x);
      }
      for (var k = M.createElement("li"); h.firstChild;) {
        k.appendChild(h.firstChild);
      }
      for (var N = [k], w = 0; w < N.length; ++w) {
        q(N[w]);
      }
      if (e === (e | 0)) {
        if (10 <= e && 7.2 > H) {
          var I = M.createElement("ol");
          I.innerHTML = '<li value="' + e + '">' + k.innerHTML + "</li>";
          N[0] = I.firstChild;
        } else {
          rb(k, "value", e);
        }
      }
      I = qa(h, "ol", {className:"linenums"});
      h = Math.max(0, e - 1 | 0) || 0;
      w = 0;
      for (e = N.length; w < e; ++w) {
        k = N[w], fc(k, "L" + (w + h) % 10), k.firstChild || ad(k, "\u00a0"), I.appendChild(k);
      }
    };
    var Ma = function() {
      var h = b, e = h.o, r = e.length, q = 0, t = h.I, k = t.length, N = 0, w = h.s, I = w.length, x = 0;
      w[I] = r;
      var E, R;
      for (R = E = 0; R < I;) {
        w[R] !== w[R + 2] ? (w[E++] = w[R++], w[E++] = w[R++]) : R += 2;
      }
      I = E;
      for (R = E = 0; R < I;) {
        var ka = w[R], sa = w[R + 1];
        for (R += 2; R + 2 <= I && w[R + 1] === sa;) {
          R += 2;
        }
        w[E++] = ka;
        w[E++] = sa;
      }
      w.length = E;
      h = h.B;
      I = "";
      h && (I = h.style.display, Ia(h, "display", "none"));
      for (; N < k;) {
        E = t[N + 2] || r;
        ka = w[x + 2] || r;
        R = Math.min(E, ka);
        sa = t[N + 1];
        var Da;
        if (1 !== sa.nodeType && (Da = e.substring(q, R))) {
          9 > C && (Da = Da.split("\n").join("\r"));
          var Oa = Sb(sa, "span", {className:ma[w[x + 1]]}, Da);
          Za(sa);
          q < E && (t[N + 1] = uc(Oa, e.substring(R, E)));
        }
        q = R;
        q >= E && (N += 2);
        q >= ka && (x += 2);
      }
      h && Ia(h, "display", I);
      b = v;
      Q(Na, v, 3, !0);
    };
    var Ja = [], Ca;
    aa.readyTime = T() - pa;
    Hb(function(h) {
      if (h) {
        h = [Fb("pre"), Fb("code"), Fb("xmp")];
        for (var e = 0; e < h.length; ++e) {
          for (var r = 0, q = h[e].length; r < q; ++r) {
            ra(h[e][r]);
          }
        }
        return !0;
      }
    });
    var ra = function(h) {
      Ja.push(h);
      Ca = Ja.length;
      1 === Ca && (Fc ? ja(Fc, Na) : tb ? tb.push(function() {
        ja(Na);
      }) : ja(Na));
    };
    var Na = function() {
      function h(N, w) {
        return (N.split(w)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ca !== Ja.length && A && A(Ca - Ja.length, Ca);
        var e = Ja.shift();
        if (e) {
          pa = T();
          if (mb(e, "prettyprint") && !mb(e, "prettyprinted")) {
            for (var r = !1, q = e.parentNode; q !== wa; q = q.parentNode) {
              var t = $a(q);
              if (("PRE" === t || "XMP" === t || "CODE" === t) && mb(q, "prettyprint")) {
                r = !0;
                break;
              }
            }
            if (!r) {
              r = e.className;
              Ab(e, "prettyprinted");
              q = !1;
              if (!q) {
                q = h(r, "lang-") || h(r, "language-");
                var k;
                !q && (k = na(e)) && "CODE" === $a(k) && (q = h(k.className, "lang-") || h(k.className, "language-"));
              }
              t = $a(e);
              "PRE" === t || "XMP" === t ? t = 1 : (t = e.currentStyle, k = M.defaultView, t = (t = t ? t.whiteSpace : k && k.getComputedStyle ? k.getComputedStyle(e, null).getPropertyValue("white-space") : 0) && "pre" === t.substr(0, 3));
              k = !1;
              (k = "true" === k || +k) || (k = h(r, "linenums:") || mb(e, "linenums"), k = k.length ? +k : k);
              k && Ba(e, k, t);
              b = {W:q, B:e, ba:k, O:t, D:0, v:0, R:{}, s:[]};
              aa.codeBlocks.push({elm:e, lang:q, readyTime:T() - pa, decorateTime:0, decorateCount:0, updateDOMTime:0});
              Q(z);
              return;
            }
          }
          Q(Na, v, 0, !0);
        } else {
          l && l(aa);
        }
      }
    };
    Y.PR = {RegExpProxy:G, prettifyElement:ra, registerCompleteHandler:function(h, e) {
      l = h;
      A = e;
    }};
  })();
  var Ec = M.scripts || Fb("script");
  var ya = Ec[Ec.length - 1].src.split("/");
  --ya.length;
  "js" === ya[ya.length - 1] && --ya.length;
  (ya = ya.join("/")) && (ya += "/");
  D("[p_assetUrl] " + ya);
  var id = nd || "1" === Sa(wa, "mob");
  Zb = (id ? "mb" : "pc") + "/";
  db(function() {
    var P;
    (P = xb("logger")) || alert("#logger not found!");
    P ? (D = bz, ob = function(G) {
      qa(P, "DIV", {style:{color:"red"}}, G);
    }, Y.onerror = function(G, Q, oa) {
      ob(G + ", " + Q + ", " + oa);
      return !0;
    }) : Y.console ? (D = console.log, ob = console.error) : H ? (D = hb, ob = opera.postError) : D = ob = hb;
    for (; dc.length;) {
      D(dc.shift());
    }
    for (; ec.length;) {
      ob(ec.shift());
    }
    dc = ec = v;
    function bz(G) {
      qa(P, "DIV", v, G);
    }
    bz = !1;
  });
  6.1 > Ea && (Lb ? Lb(rc) : la(Y, "scroll", rc));
  Gb(Vc);
  6.1 > Ea && (Lb ? Lb(sc) : la(Y, "scroll", sc));
  Gb(Wc);
  10 > C && (11 !== ld || 5 !== C) || (9 > H || 1 > Z || !Db && !Y.addEventListener ? M.write('<link href="' + ya + "css/" + Zb + oc + '" rel="stylesheet"' + (8 > H ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > H || 1.5 > Z || 534 > ta || 5 > Ea || 7 > Fa || 3 > jb) && db(function() {
    qa(vb, "link", {href:ya + "css/" + Zb + oc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Vb) {
    if ($b) {
      var Fc = function(P) {
        Y.RegExpCompat = bz;
        Fc = v;
        ac(ya + "js/regexpcompat.js");
        function bz(G) {
          for (var Q; Q = tb.shift();) {
            Q(G);
          }
          tb = v;
          ja(P);
          bc(ya + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Y.RegExpCompat = function(P) {
        for (var G; G = tb.shift();) {
          G(P);
        }
        tb = v;
        bc(ya + "js/regexpcompat.js");
      }, ac(ya + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

