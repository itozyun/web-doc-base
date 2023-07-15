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
(function(Xa, W, hb, Gc, N, ic, jd, Wb, pb, jc, kc, Hc, lc, v) {
  function ca(P) {
    if (Xa[0] === P) {
      return Ya === Ya + "" ? pb(Ya) : Ya;
    }
  }
  function Qa(P) {
    var I = Xa[3];
    if (Xa[2] === P) {
      return I === I + "" ? pb(I) : I;
    }
  }
  function mc() {
    return 6 > B ? wa.scrollTop : B ? ub.scrollTop : W.pageYOffset;
  }
  var wa = N.body, bb = wa.style, ub, vb, wb, Ya = Xa[1], B = ca(2) || ca(3), Db = ca(7), ib = ca(5) || ca(6), G = ca(8) || ca(9), Y = ca(11) || ca(12), Rb = Y && 0 <= Xa.conpare(Ya, "1.9.1"), Xb = ca(13), ta = ca(15), Ha = ca(16) || ca(17), Ic = ca(10) || ca(25), za = ca(20) || ca(22), Jc = ca(23), jb = ca(21), Yb = ca(24), kd = za || Jc || jb || Yb, Kc = za && pb(ic.userAgent.split("Edg/")[1]), ld = pb(ic.appVersion.split("Trident/")[1]) + 4, nc = Qa(35) || Qa(36) || Qa(37), md = 0 <= ic.userAgent.indexOf("Googlebot/"), 
  eb = 0.9 > Y, oc = (Db ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > G ? "opr70" : 8 > G ? "opr72" : 9.5 > G ? "opr" + (G | 0) : Y && !Rb ? 1.4 <= Y ? "gck19" : 1.3 <= Y ? "gck13" : 1 <= Y ? "gck12" : eb ? 0.8 <= Y ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Zb = "", nd = Qa(1) || Qa(2) || Qa(3) || Qa(4) || Qa(8) || Qa(9) || Qa(10), Lc, qb = 8 > B || 7.2 > G ? !1 : v, Mc = bb.transform !== v ? "transform" : bb["-o-transform"] !== v ? "-o-transform" : 
  bb["-ms-transform"] !== v ? "-ms-transform" : bb.MozTransform !== v ? "-moz-transform" : bb["-webkit-transform"] !== v ? "-webkit-transform" : "", Va = [], Nc = [], fb = [], pc, Oc, Pc, Qc, $b, Rc, Sc, ac, bc, Tc = !1, qc = 525 > ta || 3.2 > Ha || 2.2 > jb || 10 > G || Y && !Rb || ca(25) || 10 > ca(3) || Qa(32) || Qa(30) || Qa(3), ia, Jb, cc, Uc, od = !!wa.getBoundingClientRect, dc = [], ec = [], rc, Vc, sc, Wc, cb = Wb.now || function() {
    return +new Wb();
  };
  (function() {
    function P() {
      for (var T, K = 0, Z = cb(); K < J.length;) {
        Z < J[0].t ? ++K : (T = J.splice(K, 1)[0], T.f(T.p));
      }
      la = J.length ? kc(P, Fa) : 0;
    }
    function I() {
      for (var T, K = 0; K < da.length; ++K) {
        T = da[K], T.f();
      }
    }
    function Q() {
      ma && (ma = clearInterval(ma));
    }
    function na() {
      la && (la = Hc(la));
    }
    D = function(T) {
      dc.push(T);
    };
    ob = function(T) {
      ec.push(T);
    };
    cc = function(T) {
      da.length || (ma = lc(I, fa));
      da.push({f:T, C:++aa});
      return aa;
    };
    Uc = function(T) {
      for (var K = da.length, Z; Z = da[--K];) {
        if (Z.C === T) {
          da.splice(K, 1);
          da[0] || Q();
          break;
        }
      }
      return 0;
    };
    rc = function() {
      ma && (Q(), ma = lc(I, fa));
    };
    Vc = Q;
    var da = [], fa = 500, aa = 0, ma;
    if (5 > B || Db) {
      W._wdb_onlooptimer = I, I = "_wdb_onlooptimer()";
    }
    ia = function(T, K, Z) {
      J.length || (la = kc(P, Fa));
      J.push({f:T, p:K, C:++xa, t:cb() + (Fa < Z ? Z : Fa)});
      return xa;
    };
    Jb = function(T) {
      for (var K = J.length, Z; Z = J[--K];) {
        if (Z.C === T) {
          J.splice(K, 1);
          break;
        }
      }
      return 0;
    };
    sc = function() {
      la && (na(), la = kc(P, Fa));
    };
    Wc = na;
    var J = [], Fa = 16, xa = 0, la;
    if (5 > B || Db) {
      W._wdb_ontimer = P, P = "_wdb_ontimer()";
    }
  })();
  var xb, Eb, Xc, yb, Yc, Ra, kb, Zc, tc, qa, Sb, $c, ad, uc, Za, zb, bd, $a, Sa, rb, lb, Kb, cd, fc, mb, Ab, vc, Ia, Wa, dd;
  (function() {
    function P(a, b, l) {
      var C = ["<", a], c = 1, n, r;
      if (b) {
        for (n in b) {
          var z = b[n];
          if (null != z && "" !== z) {
            if ("style" === n) {
              C[++c] = ' style="';
              for (r in z) {
                for (var S = ++c, U, V = [], ha = r.split(""), Ca = ha.length; Ca;) {
                  U = ha[--Ca], "A" <= U && "Z" >= U && (U = "-" + U.toLowerCase()), V[Ca] = U;
                }
                C[S] = V.join("") + ":" + z[r] + ";";
              }
              C[++c] = '"';
            } else {
              "className" === n && (n = "class"), C[++c] = " " + n + '="' + z + '"';
            }
          }
        }
      }
      C[++c] = ">";
      null != l && (K && "font" !== a ? C[++c] = "<font>" + I(l) + "</font>" : C[++c] = I(l));
      C[++c] = "</" + a + ">";
      return C.join("");
    }
    function I(a) {
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
    function na(a) {
      return da(N, a);
    }
    function da(a, b) {
      var l = "*" === b;
      l = K ? l ? a.all : a.all.tags(b.toUpperCase()) : 6 > B && l ? a.all : a.getElementsByTagName(b);
      for (var C = [], c = 0, n = l.length; c < n; ++c) {
        C[c] = l[c];
      }
      return C;
    }
    function fa(a, b) {
      var l = [], C = 0, c, n = -1;
      if (9 > B || !a.getElementsByClassName) {
        var r = 6 > B ? a.all : a.getElementsByTagName("*");
      } else {
        var z = !0;
        r = a.getElementsByClassName(b);
      }
      for (c = r.length; C < c; ++C) {
        var S = r[C];
        if (z || (K || 1 === S.nodeType) && xa(S, b)) {
          l[++n] = S;
        }
      }
      return l;
    }
    function aa(a) {
      return K ? a.parentElement : a.parentNode;
    }
    function ma(a, b, l, C, c, n) {
      if (K) {
        var r = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var z = kb(2 > a ? Ra(b) : b);
        z = 2 > a ? z.indexOf(b) + a : z.length;
        b.insertAdjacentHTML(r, P(l, C, c));
        b = kb(b)[z];
        null != c && ("font" === l ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (Z) {
        b = N.createElement(P(l, C));
      } else {
        b = n ? N.createElementNS("http://www.w3.org/2000/svg", l) : N.createElement(l);
        if (C) {
          for (r in C) {
            if ((a = C[r]) || 0 === a) {
              switch(r) {
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
                  rb(b, r, a);
              }
            }
          }
          !G || "a" !== l && "A" !== l || !C.href || C["tag-index"] || C.tagIndex || rb(b, "tagIndex", "-0");
        }
        pa || null != c && J(b, c);
      }
      return b;
    }
    function J(a, b) {
      if (K) {
        return ma(2, a, "font", v, b);
      }
      var l = N.createTextNode("" + b);
      a.appendChild(l);
      return l;
    }
    function Fa(a, b) {
      9 > B ? a.className = b : a.setAttribute("class", b);
    }
    function xa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function la(a, b, l) {
      if (8 > G || 5.5 > B) {
        b = Q(b);
      }
      a.style[b] = l;
    }
    function T(a) {
      return 5.5 > B ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var K = 5 > B;
    ub = na("html")[0];
    vb = na("head")[0];
    xb = function(a) {
      return W[a] || N[a] || N.getElementById(a);
    };
    Eb = na;
    Xc = function(a) {
      return fa(N, a);
    };
    yb = da;
    Yc = fa;
    Ra = aa;
    kb = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], l = a.length; l;) {
        b[--l] = a[l];
      }
      return b;
    };
    Zc = function(a) {
      var b = !(7.03 < G && 7.2 > G) && a.children;
      a = b ? b : a.childNodes;
      for (var l = [], C = a.length, c = -1, n; C;) {
        if (n = a[--C], b || 1 === n.nodeType) {
          K && "FONT" === n.tagName || (l[++c] = n);
        }
      }
      return l;
    };
    tc = function(a) {
      return K ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    qa = function(a, b, l, C, c) {
      b = ma(2, a, b, l, C, c);
      K || (a.appendChild(b), pa && null != C && J(b, C));
      return b;
    };
    Sb = function(a, b, l, C, c) {
      b = ma(0, a, b, l, C, c);
      K || (aa(a).insertBefore(b, a), pa && null != C && J(b, C));
      return b;
    };
    $c = function(a, b, l, C, c) {
      b = ma(1, a, b, l, C, c);
      var n;
      K || ((n = a.nextSibling) ? Ra(n).insertBefore(b, n) : Ra(a).appendChild(b), pa && null != C && J(b, C));
      return b;
    };
    ad = J;
    uc = function(a, b) {
      var l;
      if (K) {
        return ma(1, a, "font", v, b);
      }
      var C = N.createTextNode("" + b);
      (l = a.nextSibling) ? Ra(a).insertBefore(C, l) : Ra(a).appendChild(C);
      return C;
    };
    Za = function(a) {
      Ra(a) ? K ? a.outerHTML = "" : (5.5 > B && (a.style.filter = ""), Ra(a).removeChild(a)) : D("[DOM] p_DOM_remove(), No parentNode!");
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
    var Z = 9 > B, pa = Z;
    $a = function(a) {
      return a.tagName.toUpperCase();
    };
    Sa = function(a, b) {
      if (8 > G || 5.5 > B) {
        b = Q(b);
      }
      var l = a.getAttribute(b);
      return G && "tabIndex" === b ? "-0" === l ? "" : "" === l ? "-1" : l : l || "";
    };
    rb = function(a, b, l) {
      if (G && "tab-index" === b) {
        "-1" === l ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", l);
      } else {
        if (8 > G || 5.5 > B) {
          b = Q(b);
        }
        a.setAttribute(b, l);
      }
    };
    lb = function(a, b) {
      if (G && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > G || 5.5 > B) {
          b = Q(b);
        }
        a.removeAttribute(b);
      }
    };
    Kb = function(a, b) {
      if (G && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > G || 5.5 > B) {
        b = Q(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    cd = function(a) {
      return a.className;
    };
    fc = Fa;
    mb = xa;
    Ab = function(a, b) {
      var l;
      if (!xa(a, b)) {
        if (l = a.className) {
          l += " ";
        }
        Fa(a, l + b);
      }
    };
    vc = function(a, b) {
      if (xa(a, b)) {
        var l = a.className.split(" ");
        l.splice(l.indexOf(b), 1);
        Fa(a, l.join(" "));
      }
    };
    Ia = la;
    Wa = function(a, b) {
      var l, C = -1, c;
      if (5.5 > B) {
        if (l = T(a)) {
          for (l = l.split(";"); c = l[++C];) {
            la(a, c.split(":")[0], "");
          }
        }
        if (b) {
          for (C = -1, l = b.split(";"); c = l[++C];) {
            var n = c.split(":")[0];
            la(a, n, c.substr(n.length + 1));
          }
        }
      } else if (7.1 > G) {
        if (a.setAttribute("style", ""), b) {
          for (l = b.split(";"); c = l[++C];) {
            c = c.split(":"), la(a, c[0], c[1]);
          }
        }
      } else {
        9 > G || 1 > Y ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    dd = T;
    Va.splice(0, 0, function() {
      function a(S) {
        S = kb(S);
        for (var U = S.length, V, ha, Ca; U;) {
          if (V = S[--U], ha = V.nodeType, 8 === ha) {
            b && r.push(V);
          } else if (1 === ha) {
            switch(ha = $a(V), "/" === ha.charAt(0) && (ha = ha.substr(1), z[ha] = !0), ha) {
              case "STYLE":
                if (7.2 <= G && 9 > G) {
                  break;
                }
              case "LINK":
                K || C || zb(vb, V) || n.push(V);
                break;
              case "META":
                ha = Sa(V, "name") || Sa(V, "property");
                for (Ca = c.length; Ca;) {
                  if (0 === ha.indexOf(c[--Ca])) {
                    r.push(V);
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
                r.push(V);
                break;
              case "SOURCE":
                W.HTMLSourceElement || r.push(V);
                break;
              default:
                z[ha] ? r.push(V) : kb(V).length && a(V);
            }
          }
        }
        for (; n[0];) {
          vb.appendChild(n.pop());
        }
        for (; r[0];) {
          Za(r.pop());
        }
      }
      vc(ub, "nojs");
      wb = xb("jsMain");
      var b = !(8 > G || 5 > B || Db || eb), l = Qc, C = 7 > B, c = ["og:", "twitter:", "fb:"], n = [], r = [], z = {};
      a(ub);
    });
  })();
  var ka, Ka, db, Fb, wc, Lb, Gb, xc, yc, zc, ed, fd, gd, Mb, Ga, Ac;
  (function() {
    function P() {
      return e ? q ? 2 : t ? 3 : 1 : 0;
    }
    function I(f) {
      Ka(W, "load", I);
      I = v;
      na(Va, f, !0);
      Va = v;
    }
    function Q(f, g) {
      Gb(function() {
        var y = la(f);
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
    function da(f, g, y) {
      Va || K.length || ia(fa);
      K.push(f, g, y);
    }
    function fa() {
      var f = K, g;
      for (K = []; g = f.shift();) {
        na(g, f.shift(), f.shift());
      }
    }
    function aa(f) {
      var g = f || event;
      f = pa[g.type];
      var y = -1, p, O;
      5 > B ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : B ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        O = !0;
      });
      for (; p = f[++y];) {
        p.j === this ? (this.g = p.i, B && (g.currentTarget = this), this.g(g), B ? (this.g = hb, this.g = v) : delete this.g) : 7.2 > G && this === N && p.j === W && (W.g = p.i, W.g(g), delete W.g);
      }
      if (B) {
        return g.preventDefault = g.stopPropagation = hb, g.preventDefault = g.stopPropagation = v, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (C = !0), O && !C && g.K(), g.K = g.stopPropagation = v);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var f = 9 === T.offsetWidth;
      Mb !== f && (da(Nc, Mb = f), D("p_cssAvailability:" + Mb));
    }
    function J() {
      !Va && H && (Jb(H), H = ia(Fa));
    }
    function Fa() {
      H = 0;
      na(w);
    }
    function xa(f) {
      Va || na(x, f);
    }
    var la = W.matchMedia, T, K = [];
    Va.push(function() {
      Q = v;
      T = qa(wa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      db(function() {
        K.length && ia(fa);
      });
    });
    ka = function(f, g, y, p) {
      if (l) {
        f.addEventListener(g, y, p ? Z ? p : p.capture || !0 === p : !1);
      } else {
        var O = {j:f, i:y};
        p = pa[g];
        var Ba = "on" + g, La, sb;
        if (p) {
          for (La = p.length; sb = p[--La];) {
            if (sb.j === f && sb.i === y) {
              return;
            }
          }
          pa[g].push(O);
        } else {
          pa[g] = p = [O], a || (g = f[Ba], "function" === typeof g && g !== aa && p.unshift({j:f, i:g}));
        }
        a ? f.attachEvent(Ba, aa) : f[Ba] = aa;
      }
    };
    Ka = function(f, g, y, p) {
      if (l) {
        f.removeEventListener(g, y, p ? Z ? p : p.capture || !0 === p : !1);
      } else {
        p = pa[g];
        g = "on" + g;
        var O, Ba, La;
        if (p) {
          for (O = p.length; Ba = p[--O];) {
            Ba.j === f && (Ba.i === y ? p.splice(O, 1) : La = !0);
          }
          La || (a ? f.detachEvent(g, aa) : B ? (f[g] = hb, f[g] = null) : delete f[g]);
        }
      }
    };
    var Z = !B && !Db && (new jd('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), pa = {}, a = !1, b = 525.13 > ta, l = !b && !Db && W.addEventListener, C;
    b && ub.addEventListener("click", function(f) {
      if (C) {
        return C = !1, f.preventDefault(), !1;
      }
    });
    db = function(f) {
      Va ? Va.push(f) : alert("Load event has already been dispatched!");
    };
    Fb = function(f) {
      c && c.push(f);
    };
    var c = [];
    if (419.3 >= ta) {
      var n = function() {
        if (n) {
          var f = N.readyState;
          "loaded" === f || "complete" === f ? (n = v, I()) : ia(n);
        }
      };
      ia(n);
    } else {
      ka(W, "load", I), eb && ia(function() {
        I && I();
      }, 999);
    }
    B || !eb && 1.8 > Y ? ka(W, "unload", function(f) {
      na(c, f, !0);
    }) : c = v;
    Gb = function(f) {
      Nc.push(f);
    };
    db(function() {
      ma();
      cc(ma);
    });
    zc = function(f, g) {
      if (r) {
        ka(f, "focusin", g);
      } else if (z) {
        ka(f, "DOMFocusIn", g);
      } else {
        if (U) {
          Ma || (Ma = lc(ra, 333));
        } else if (S || V) {
          ka(N, "focus", Ca, !0);
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
      if (r) {
        ka(f, "focusin", g);
      } else if (z) {
        ka(f, "DOMFocusIn", g, !1);
      } else {
        for (var y = ha, p = 0, O = y.length; p < O; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            y.splice(p, 2);
            y.length || (U ? Ma = Uc(Ma) : (S || V) && Ka(N, "focus", Ca, !0));
            break;
          }
        }
      }
    };
    var r = 6 <= B || ib || 52 <= Y || 15 <= za || 534 <= ta || 5 <= Ha || Jc || 4 <= jb || 4 <= Yb || 11.6 <= ca(8) || 12 <= ca(9), z = 8 <= G || za || jb || Yb || ta || Ha, S = 8 > G, U = 6 > B, V = 52 > Y || Xb;
    if (V || S) {
      var ha = [];
      var Ca = function(f) {
        var g = ha, y = S ? N.activeElement : f.target;
        if (S) {
          var p = f;
          f = {type:"focusin", target:y, preventDefault:function() {
            p.preventDefault();
          }, stopPropagation:function() {
            p.stopPropagation();
          }};
        }
        for (var O = 0, Ba = g.length; O < Ba; ++O) {
          var La = g[O];
          (La === y || zb(La, y)) && g[O + 1].call(La, f);
        }
      };
    } else if (U) {
      ha = [];
      var Ma, Ja, Da, ra = function() {
        Da = W.onerror;
        W.onerror = Na;
        var f = N.activeElement;
        if (Ja !== f) {
          Ja = f;
          for (var g = ha, y, p = 0, O = g.length; p < O; ++p) {
            y = g[p], (y === f || zb(y, f)) && g[p + 1].apply(y, [{target:f}]);
          }
        }
        W.onerror = Da;
        Da = v;
      }, Na = function() {
        D("error!");
        W.onerror = Da;
        Da = Ja = v;
        return !0;
      };
    }
    yc = function(f) {
      fb && fb.push(f);
    };
    var k = 60 > Y || Xb, e, t, q;
    if (89 <= Y || 89 <= za || nc && 79 <= Kc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      Ac = !0, Q("(forced-colors:active)", function(f) {
        e = f.matches;
        Ga = P();
        da(fb, Ga);
        D("(forced-colors:active):" + Ga);
      });
    } else if (10 <= B || ib || nc && Kc) {
      Ac = !0, Q("(-ms-high-contrast:black-on-white)", function(f) {
        e = t = f.matches;
        Ga !== P() && (Ga = P(), da(fb, Ga), D("(-ms-high-contrast:black-on-white):" + Ga));
      }), Q("(-ms-high-contrast:white-on-black)", function(f) {
        e = q = f.matches;
        Ga !== P() && (Ga = P(), da(fb, Ga), D("(-ms-high-contrast:white-on-black):" + Ga));
      }), Q("(-ms-high-contrast:active)", function(f) {
        e = f.matches;
        Ga !== P() && (Ga = P(), da(fb, Ga), D("(-ms-high-contrast:active):" + Ga));
      });
    } else if (nc && (B || Y && 0 <= Xa.conpare(Ya, "1.8.1") || Xb)) {
      var u = function() {
        function f(p, O) {
          if (O && "transparent" === p) {
            return 382.5;
          }
          if ("#" === p.charAt(0)) {
            return parseInt("0x" + p.substr(1, 2), 16) + parseInt("0x" + p.substr(3, 2), 16) + parseInt("0x" + p.substr(5, 2), 16);
          }
          var Ba = p.split("(")[1].split(",");
          return pb(Ba[0]) + pb(Ba[1]) + pb(Ba[2]);
        }
        var g = N.defaultView;
        var y = g ? g.getComputedStyle(T, null) : T.currentStyle;
        g = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        g && (e = "#123456" !== g && "rgb(18,52,86)" !== g, t = f(g) < f(y, !0), q = f(g) > f(y, !0), Ga !== P() && (Ga = P(), D("(forced-colors-fallback):" + Ga), da(fb, Ga, k)));
      };
      Gb(function(f) {
        if (f) {
          return Ia(T, "color", "#123456"), Ia(T, "backgroundColor", "#123456"), k ? (u(), fb = v) : cc(u), u = v, !0;
        }
      });
    } else {
      fb = P = v;
    }
    xc = function(f) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      h.push(f);
    };
    var h = [], L = 7.5 <= G && 8 > G;
    L && function() {
      for (var f = N.images, g = f.length, y; g;) {
        y = f[--g], y.J = y.src, lb(y, "src");
      }
    }();
    db(function() {
      function f() {
        p ? (O = y[--p], L && rb(O, "src", O.J), Oc(g, L ? O.J : O.src)) : h = v;
      }
      function g(La) {
        na(h, {G:O, H:La}, !p);
        f();
      }
      var y = N.images || Eb("img"), p = y.length;
      if (12 > G || 532 > ta) {
        f();
      } else {
        for (; p;) {
          var O = y[--p];
          var Ba = 9 > B ? O.complete : 0 <= O.naturalWidth ? O.naturalWidth : O.width;
          da(h, {G:O, H:Ba}, !p);
        }
        h = v;
      }
    });
    wc = function(f) {
      w.push(f);
    };
    var w = [], H;
    ka(W, "resize", J);
    Fb(function() {
      H && Hc(H);
      Ka(W, "resize", J);
    });
    Lb = function(f) {
      x.push(f);
    };
    var x = [], E = 1 > Y || 1.2 <= Y && 1.8 > Y || 7.2 >= G, R;
    E ? cc(function() {
      var f = W.pageYOffset;
      R !== f && (R = f, xa({type:"scroll", cancelable:!1, stopPropagation:hb, preventDefault:hb}));
    }) : ka(W, "scroll", xa, {passive:!0});
    Fb(function() {
      E || Ka(W, "scroll", xa, {passive:!0});
    });
    fd = function(f, g) {
      if (ja) {
        ka(f, "wheel", g, {passive:!1});
      } else if (sa) {
        ka(f, "mousewheel", g, !1);
      } else if (Ea) {
        ka(f, "MozMousePixelScroll", g, !1);
      } else if (Oa) {
        for (var y = ab, p = 0, O = y.length; p < O; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            return;
          }
        }
        y.length || ka(N, "DOMMouseScroll", Ta, !1);
        y.push(f, g);
      }
    };
    gd = function(f, g) {
      if (ja) {
        Ka(f, "wheel", g, {passive:!1});
      } else if (sa) {
        Ka(f, "mousewheel", g, !1);
      } else if (Ea) {
        Ka(f, "MozMousePixelScroll", g, !1);
      } else if (Oa) {
        for (var y = ab, p = 0, O = y.length; p < O; ++p) {
          if (y[p] === f && y[p + 1] === g) {
            y.splice(p, 2);
            y.length || Ka(N, "DOMMouseScroll", Ta, !1);
            break;
          }
        }
      }
    };
    var ja = 9 <= B || ib || 17 <= Y || 31 <= za || 537.7 <= ta, sa = 6 <= B || ib || 9 <= G || za || 522 <= ta || Ha, Ea = Rb, Oa = Y && 0 <= Xa.conpare(Ya, "0.9.7") && !Rb;
    if (Oa) {
      var ab = [], Ta = function(f) {
        for (var g = ab, y = f.target, p, O = 0, Ba = g.length; O < Ba; ++O) {
          p = g[O], zb(p, y) && g[O + 1].call(p, f);
        }
      };
    }
  })();
  (function() {
    function P(e) {
      if (6 !== e && 6 <= za && 32 > za) {
        return !1;
      }
      switch(e) {
        case 1:
          return a;
        case 2:
          return !!b;
        case 3:
          return !!l;
        case 4:
          return !!C;
        case 5:
          return n;
        case 6:
          return c && !xa;
      }
      return !1;
    }
    function I(e) {
      z(e);
      Na && !e && Za(Na);
      z = S = U = V = ha = Ca = Da = ra = Na = k = v;
    }
    function Q(e) {
      var t = '1.6em "' + e + '"';
      D("[webFontTest] testByNativeFontLoaderAPI start.");
      N.fonts.load(t).then(function(q) {
        D("[webFontTest] fonts.check() : " + N.fonts.check(t, "i") + ", fonts.length : " + q.length);
        (q = fa(S)) ? ia(I, q) : (D("[webFontTest] mesureWebFont() : false"), da(!0));
      }, function(q) {
        D("[webFontTest] fonts.load() rejected! " + q);
        qb !== v ? aa(qb) : pc(aa);
      });
    }
    function na(e) {
      return N.hidden || N.msHidden || N.mozHidden || N.webkitHidden ? (Ja = cb(), !1) : e < cb() - Ja;
    }
    function da(e) {
      e && (D("[webFontTest] testWebFont start."), Ja = cb());
      (e = fa(S, Ma)) ? (D("[webFontTest] testWebFont mesurement success : " + e), I(e)) : na(Ma) ? (D("[webFontTest] testWebFont timeout!"), Da ? ma() : Fa ? I(0) : qb !== v ? aa(qb) : pc(aa)) : ia(da);
    }
    function fa(e, t) {
      var q = 0, u = -1, h = pa && [];
      if (!k) {
        var L = -1;
        var w;
        ra = qa(wa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, Z);
        for (k = []; w = r[++L];) {
          Ia(ra, "fontFamily", w), k[L] = ra.offsetWidth, D("[webFontTest] " + w + "=" + k[L]);
        }
      }
      for (5 > B ? ra || (ra = qa(wa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, Z)) : wa.appendChild(ra); L = r[++u];) {
        Ia(ra, "fontFamily", '"' + e + '",' + L);
        var H = ra.offsetWidth;
        if (h) {
          h[u] = H;
        } else {
          if (H !== k[u]) {
            q = 1;
            break;
          }
        }
      }
      if (h && H === h[0] && H === h[1]) {
        for (D("[webFontTest] Hit... : width=" + H), q = 1, u = -1; H = k[++u];) {
          if (H === h[0] && H === h[1] && H === h[2]) {
            D("[webFontTest] Failed! : font[" + u + "]=" + r[u]);
            q = 0;
            break;
          }
        }
      }
      !B && q && ha && (ra.textContent = ha, H = ra.offsetWidth, ra.textContent = Ca, q = H === ra.offsetWidth ? 2 : 1, ra.textContent = Z);
      Za(ra);
      5 > B && (ra = v);
      t && (h || (q ? D("[webFontTest] " + e + ", " + L + "=" + H) : na(t)));
      return q;
    }
    function aa(e) {
      D("[webFontTest] onTestDataURIComplete : " + e);
      e ? (Da = !0, Ma = K, D("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), S = S.replace(la, ""), ma()) : I(0);
    }
    function ma() {
      if (U) {
        for (; U.length;) {
          var e = U.shift(), t = U.shift();
          if (P(e)) {
            D("[webFontTest] maybe can use! " + t);
            Na = Sc(t, J, V, Na);
            return;
          }
        }
      }
      I(0);
    }
    function J(e) {
      e ? da(!0) : ma();
    }
    pc = !1 === qb ? function(e) {
      ia(e, !1);
    } : function(e) {
      function t(h) {
        u = Jb(u);
        qb = h;
        q.onload = q.onerror = hb;
        ia(e, h);
      }
      if (qb !== v) {
        D("[dataURITest] already done : " + qb), ia(e, qb);
      } else {
        D("[dataURITest] start!");
        var q = new Image(), u = ia(function() {
          u && t(!1);
        });
        q.onerror = function() {
          D("[dataURITest] no DATA URI!");
          t(!1);
        };
        q.onload = function() {
          D("[dataURITest] DATA URI:" + (1 === q.width * q.height));
          t(1 === q.width * q.height);
        };
        q.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > B && db(function() {
      var e = qa(wa, "div");
      Wa(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lc = 1 < e.offsetHeight;
      Za(e);
    });
    Oc = function(e, t) {
      function q() {
        h || !L || u.complete ? (D("[imageTest] timer -> img.complete. img.width=" + u.width), ia(e, !!u.width), u.onerror = u.onload = hb, u = e = v) : (--L, ia(q));
      }
      var u = new Image(), h, L = 99;
      D("[imageTest] start.");
      u.onerror = function() {
        D("[imageTest] error!");
        h = !0;
      };
      u.onload = function() {
        D("[imageTest] onload.");
        h = !0;
      };
      u.src = t;
      ia(q);
    };
    Pc = function(e, t, q, u, h, L, w) {
      z = e;
      S = t;
      U = q;
      V = u;
      ha = h;
      Ca = L;
      Ma = w || T;
      S = la + S;
      D("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      D("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!qc);
      ca(10) ? ia(I, 1) : qc ? ia(I, 0) : !N.fonts || 603 > ta || 11 > Ha ? (D("[webFontTest] No native font loader."), da(!0)) : (D("[webFontTest] Use Native font loader."), Q(S));
    };
    var Fa = 9 > B || 2 > za || 12 > G, xa = 6 > za || G || 530 > ta, la = "bad_" + cb() + "_", T = 5E3, K = 500, Z = "mmmmmmmmmmlliiiiiiiii", pa = 7 > Ha || ta && 0 >= Xa.conpare(Ya, "536.11");
    qc || (pa && za && D("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + za), pa && Ha && D("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ha), pa && ta && D("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + ta));
    var a = 14 <= ib || 36 <= za || 39 <= Y || 602 <= ta || 10 <= Ha, b = 6 <= za || Y && 0 <= Xa.conpare(Ya, "1.9.2") || 525 <= ta || 3.2 <= Ha || 4.4 <= jb || 11.1 <= G || ib || 9 <= ca(2) || 10 <= ca(3), l = 2 <= za || Rb || 525 <= ta || 3.2 <= Ha || 2.2 <= jb || 10 <= G || ib || 9 <= ca(2) || 10 <= ca(3), C = l, c = 525 <= ta || 3.2 <= Ha || 38 > za || 3 <= jb || 12 <= G, n = 4 <= ca(2) || 10 <= ca(3), r = za ? ["sans-serif", "serif"] : ["monospace", "sans-serif", "serif"], z, S, U, V, ha, Ca, 
    Ma, Ja, Da, ra, Na, k;
  })();
  (function() {
    function P(c) {
      var n = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== c) {
        D("[VectorIcon] " + c);
        var r = Xc("ico"), z = 0, S = r.length;
        if (S) {
          if (1 === c) {
            for (; z < S; ++z) {
              c = r[z];
              var U = bd(c);
              if (U = n[U]) {
                c.innerHTML = U;
              }
            }
          } else {
            C && !l && (W.VectorIconCompat = bz, ac(ya + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        bc(ya + "js/vector-icon-svg-fallback.js");
        return [n, r, qa, l];
      }
      bz = !1;
    }
    xc(function(c) {
      var n = c.G;
      c = c.H;
      var r = Ra(n);
      !mb(r, "aBodyRoot") && c ? Ab(r, "js-image-has-been-loaded") : c || Sa(n, "alt") || "lazy" === Sa(n, "loading") || Ia(n, "display", "none");
    });
    eb && (Va.splice(1, 0, function() {
      for (var c = Yc(wb, "RichLink-sep"), n, r, z, S, U, V; n = c.shift();) {
        for (n = kb(n); r = n.shift();) {
          if ("A" === $a(r) && !r.innerHTML) {
            for (D("\u25a0 Broken Anchor " + r.parentNode.innerHTML); z = n.shift();) {
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
              r.appendChild(z);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var c = Eb("A"), n, r; n = c.shift();) {
        "A" !== $a(n) || n.innerHTML || (r = n.nextSibling && n.nextSibling.firstChild) && r.href === n.href && (D("\u25b2 Broken Anchor " + r.innerHTML), Za(n));
      }
    }));
    5.5 <= B && 8 > B && fb && yc(function(c) {
      for (var n = yb(wa, "a"), r = n.length, z = 0; z < r; ++z) {
        n[z].hideFocus = !c;
      }
    });
    if (!Ac && fb) {
      var I, Q = function() {
        I = qa(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ya + "css/" + Zb + "hc/" + oc});
        if (Mc || 5.5 <= B && 9 > B && Lc) {
          Ab(wa, "js-canuse-css-rotate-when-forced-colors-mode"), D("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        Q = v;
      };
      yc(function(c) {
        c && !I ? Q() : I && (c ? vb.appendChild(I) : Za(I));
      });
    }
    G && db(function() {
      for (var c = yb(wa, "a"), n = c.length, r = 0, z; r < n; ++r) {
        z = c[r], "-1" === Sa(z, "tabIndex") ? lb(z, "tabIndex") : Sa(z, "href") && rb(z, "tabIndex", "0");
      }
      c = yb(wa, "input");
      r = 0;
      for (n = c.length; r < n; ++r) {
        z = c[r], "hidden" === Sa(z, "type") && lb(z, "tabIndex");
      }
    });
    if (Y && 0 > Xa.conpare(Ya, "0.9.5")) {
      Tc = !0;
      var na, da, fa, aa, ma;
      db(function() {
        ka(N, "keydown", J);
        ka(N, "keyup", Fa);
        zc(wa, xa);
        eb || (ka(W, "blur", pa), ka(wa, "click", Z));
      });
      var J = eb ? function(c) {
        16 === c.keyCode ? na = !0 : 9 === c.keyCode && aa && la(aa, !0) && (aa.blur && aa.blur(), c.stopPropagation(), c.preventDefault(), ia(K));
      } : function(c) {
        16 === c.keyCode ? na = !0 : 9 === c.keyCode && (da = cb());
      }, Fa = function(c) {
        16 === c.keyCode && (na = !1);
      }, xa = eb ? function(c) {
        c.target.innerHTML || D(c.target.parentNode.innerHTML);
        aa = c.target;
      } : function(c) {
        var n = c.target;
        if (aa === n) {
          fa = v;
        } else if (fa) {
          n === fa ? (c.stopPropagation(), K(!0)) : (n.blur && b(n), c.preventDefault(), K());
        } else {
          if (c = aa) {
            aa = v, b(c);
          }
          fa = n;
          K(!0);
        }
      }, la = function(c, n) {
        var r = cb(), z = wa, S = "nextSibling", U = "firstChild";
        na && (n || r - 99 < da && da <= r) && (S = "previousSibling", U = "lastChild");
        for (fa = v; c !== z;) {
          if (V) {
            r = c;
            var V = !1;
          } else {
            r = c[S];
          }
          if (r) {
            if (1 === r.nodeType) {
              if (T(r)) {
                return fa = r, !0;
              }
              c = (V = r[U]) || r;
            } else {
              c = r;
            }
          } else {
            c = c.parentNode;
          }
        }
      }, T = function(c, n) {
        function r() {
          return "-1" !== Sa(c, "tab-index");
        }
        function z() {
          return 0 < c.offsetHeight * c.offsetWidth;
        }
        if (c.focus) {
          var S;
          switch({A:n ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[$a(c)]) {
            case 1:
              if (Kb(c, "href") && r() && z()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Sa(c, "type") && r() && !Kb(c, "disabled") && z()) {
                return !0;
              }
              break;
            case 3:
              if (r() && !Kb(c, "disabled") && z()) {
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
        ma = 0;
        fa && (eb || ka(fa, "blur", a), aa = fa, fa = v, c || aa.focus());
      };
      if (!eb) {
        var Z = function(c) {
          var n = c.target;
          if (aa && T(n, !0)) {
            var r = aa;
            aa = v;
            b(r);
            fa = n;
            c.stopPropagation();
            c.preventDefault();
            K();
          }
        }, pa = function(c) {
          c.target === N && (fa = v);
        }, a = function(c) {
          c = c.target;
          Ka(c, "blur", a);
          aa === c && la(c) && (ma || (ma = ia(K)));
        }, b = function(c) {
          Ka(c, "blur", a);
          c.blur();
        };
      }
    }
    Gb(function(c) {
      if (c) {
        return Pc(P, "myIconFont", [1, ya + "iconfont/woff2.css", 2, ya + "iconfont/woff.css", 3, ya + "iconfont/ttf.css", 4, ya + "iconfont/otf.css", 5, ya + "iconfont/eot.css", 6, ya + "iconfont/svg.css"], "js-myIconFont-testCssReady", "twitter", "\ud83d\udc24", 5E3), P = v, !0;
      }
    });
    var l = 8 <= ca(8) && 9 > G, C = 9 <= B || ib || 1.8 <= Y || 8 <= ca(8) || 9 <= ca(9) || 3 <= ca(21) || Xb || kd || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || Ha;
  })();
  (function() {
    function P(d) {
      var m = Da.length, F, M, ea, A;
      if (13 === (d.keyCode || d.V) || d.type !== ra) {
        for (; m;) {
          var X = Da[--m];
          if (X.F === this || X.u === this) {
            m = X.F;
            var ba = F = X.u;
            if (X.P) {
              if (Ia(m, "width", X.$), m.src = X.Z, fc(ba, X.T), m = X.L) {
                Wa(m, X.S), vc(m, "js-captioned-thumbnail__large");
              }
            } else {
              if (M = X.N) {
                delete X.N;
                if (X.M) {
                  for (; F = Ra(F);) {
                    if (!mb(F, "caption")) {
                      var oa = $a(F);
                      if ("DIV" === oa || "P" === oa || "BLOCKQUOT" === oa || "LI" === oa || "DD" === oa || "TD" === oa || "TH" === oa || "FORM" === oa || "PRE" === oa) {
                        break;
                      }
                    }
                  }
                  F = (F.offsetWidth | 0) - 4;
                  1600 < F && (F = 1600);
                  if (2 === X.M) {
                    M = M.split("=");
                    oa = M.length;
                    if (ea = M[oa - 1]) {
                      (A = pb(ea.substr(1))) && ea === "s" + A ? M[oa - 1] = "w" + F : M[oa] = "w" + F;
                    }
                    M = M.join("=");
                  } else {
                    M = M.split("/");
                    oa = M.length;
                    if (ea = M[oa - 2]) {
                      (A = pb(ea.substr(1))) && ea === "s" + A ? M[oa - 2] = "w" + F : M.splice(oa - 1, 0, "w" + F);
                    }
                    M = M.join("/");
                  }
                }
                X.X = M;
              }
              X.T = cd(ba);
              Ab(ba, "js-pica-thumbnail__large");
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
        I(d);
      }
    }
    function I(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function Q(d) {
      var m = ja;
      if (Mb) {
        if (sa && !m) {
          if (cb() < sa) {
            return;
          }
          sa = v;
        }
        7 === d ? (J("t"), Ea = 0) : (J("s"), Ea && (Ea = Jb(Ea)), E = mc());
        m ? (ja = da(v, m[0], m[1])) || (sa = cb() + 99) : da();
        xa();
      } else {
        ja = v;
      }
    }
    function na() {
      J("w.blur");
    }
    function da(d, m, F) {
      function M(nb) {
        ba = nb;
        if (H) {
          oa = H + ":translate" + (R ? "3D(0," : "(0,") + nb + (R ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== nb) {
          if (t || q) {
            var Bc = h.offsetWidth;
          }
          oa = t ? "position:fixed;width:" + Bc + "px;top:" + (nb - ea + va) + "px" : u ? "top:" + nb + "px" : "position:absolute;top:" + nb + "px;left:0";
          if (q && oa) {
            var Tb = 8 > B ? " " : ",";
            oa += ";clip:rect(" + (0 > nb ? -nb + "px" + Tb + Bc + "px" + Tb + Pa : "0" + Tb + Bc + "px" + Tb + (nb + Pa < Ub ? Pa : Ub - nb)) + "px" + Tb + "0)";
          }
        }
      }
      var ea = E, A = L, X = h.offsetTop === A.offsetTop, ba = 0, oa = "", gb = !0;
      if (X) {
        for (var Aa = 0, va = 0, Ua = A; Ua && Ua !== wa;) {
          va += Ua.offsetTop, Ua = Ua.offsetParent;
        }
        ba = x;
        Ua = 11 > B ? ub.offsetHeight : W.innerHeight;
        var Cc = A.offsetHeight, Pa = w.offsetHeight, Ub = Pa < Cc ? Cc : Pa, Bb = ea, Nb = Bb + Ua, gc = va, hc = gc + Ub, hd = va + ba, pd = hd + Pa;
        A = Bb < gc ? gc : Bb;
        var Cb = hc < Nb ? hc : Nb, Ob = Cb - A;
        Bb = hc <= Bb;
        Nb = Nb <= gc;
        if (m !== v) {
          gb = va + m;
          d = gb + F;
          if (Bb || Nb) {
            return Ua <= F ? (m = va, J("4.1.1")) : Bb ? (m = hc - F, J("4.1.2")) : (m = va + F - Ua, J("4.1.3")), sa = v, W.scroll(0, m), J("4.1.*"), ja;
          }
          Pa <= Ob ? (Aa = 3, J("4.2")) : F <= Ob ? Pa - m <= Ob ? (Aa = 2, J("4.3.1")) : A <= gb && d <= Cb ? A < va + ba && (Aa = 4, J("4.3.2")) : A <= gb && gb <= Cb ? (Aa = 5, J("4.3.3")) : A <= d && d <= Cb ? (Aa = 4, J("4.3.4")) : d < A ? (Aa = 4, J("4.3.5")) : (Aa = 5, J("4.3.6")) : (Aa = 4, J("4.4"));
          gb = !1;
        } else {
          d !== v ? Pa <= Ob ? (Aa = 7, gb = !1, J("3.1")) : (ba -= 60 * d, Aa = Cb - va - Pa, d = A - va, ba < Aa ? (ba = Aa, J("3.2.1")) : d < ba ? (ba = d, J("3.2.2")) : J("3.2.3"), Aa = 6) : Cc <= Pa || (Bb ? (Aa = 1, J("2.2.1")) : Nb ? J("2.2.2") : Pa <= Ob ? (Aa = 3, J("2.3")) : A < hd ? (Aa = 3, J("2.4.1")) : pd < Cb ? (Aa = 2, J("2.4.2")) : ea < va + Pa - Ob ? J("2.4.3") : (Aa = 2, J("2.4.4")));
        }
        switch(Aa) {
          case 0:
            M(0);
            break;
          case 1:
            M(Ub - Pa);
            break;
          case 2:
            M(Cb - va - Pa);
            break;
          case 3:
            M(A - va);
            break;
          case 4:
            M(A - va - m);
            break;
          case 5:
            M(Cb - va - (m + F));
          case 6:
            M(ba);
        }
        la(ba, Pa, va, Ub, Ua, m || "-", F || "-");
      } else {
        la(ba, "-", "-", "-", "-", "-", "-");
      }
      Wa(w, oa);
      x = ba;
      return X && gb;
    }
    function fa(d) {
      if (Mb && (J("m"), Y && (E = mc(), xa()), this !== d.target)) {
        var m = jc(d.deltaY) ? d.deltaY : jc(d.wheelDeltaY) ? d.wheelDeltaY / 120 : jc(d.wheelDelta) ? d.wheelDelta / -120 : d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1);
        m && da(9 >= m ? -9 >= m ? -3 : m : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function aa(d) {
      if (Mb) {
        var m = Y && 0 > Xa.conpare(Ya, "0.9.4"), F = d.target, M = w, ea = 0;
        if (zb(M, F)) {
          J(d.type || "ie5focus");
          ka(F, "blur", ma);
          if (H) {
            m = F.getBoundingClientRect(), d = m.bottom - m.top, ea = m.top - M.getBoundingClientRect().top | 0;
          } else {
            d = F.offsetHeight;
            var A = F;
            if (m) {
              for (var X = []; A && (Y ? zb(M, A) : M !== A);) {
                for (; A.previousSibling;) {
                  A = A.previousSibling, A.tagName && X.unshift(A.tagName + ":" + A.offsetTop);
                }
                A = A.offsetParent;
              }
              D(X.join());
              A = F;
            }
            for (; A && (Y ? zb(M, A) : M !== A);) {
              if (m) {
                for (; A.previousSibling;) {
                  A = A.previousSibling, ea += A.offsetHeight || 0;
                }
                A = A.parentNode;
              } else {
                ea += A.offsetTop, A = A.offsetParent;
              }
            }
          }
          e ? (ja = [ea, d], Ea && Jb(Ea), Ea = ia(Q, 7, 1 > Y || 536 > ta || 14 > za ? 500 : 0)) : (E = mc(), da(v, ea, d));
          T(ea, d);
        }
      }
    }
    function ma() {
      Ka(this, "blur", ma);
      T(0, 0);
    }
    function J(d) {
      Ta && (O && (O = Jb(O)), O = ia(Fa, 0, 1400), Ta.innerHTML += " " + d);
    }
    function Fa() {
      Ta.innerHTML = "";
    }
    function xa() {
      g && (Ia(g, "top", (E / 10 | 0) + "px"), ab.innerHTML = " scrl:" + (E | 0));
    }
    function la(d, m, F, M, ea, A, X) {
      y && (Ia(y, "top", ((d + F) / 10 | 0) + "px"), Ia(y, "height", (m / 10 | 0) + "px"), Ia(g, "height", (ea / 10 | 0) + "px"), Ia(f, "height", (wa.scrollHeight / 10 | 0) + "px"), Oa.innerHTML = "conY:" + F + "/sidY" + d + ", conH:" + M + "/sidH" + m + ", focY:" + A + " focH:" + X);
    }
    function T(d, m) {
      p && (Ia(p, "top", (d / 10 | 0) + "px"), Ia(p, "height", (m / 10 | 0) + "px"));
    }
    function K() {
      Ba.call(La);
    }
    function Z() {
      N.fullscreenElement || N.fullscreen || N.webkitIsFullscreen || N.msFullscreenElement || W.fullScreen ? (rb(La, "id", "blog2slide-root"), Pb[1].parentNode.insertBefore(sb, Pb[1]), pa(), N.onkeydown = a) : Hb && (Za(sb), lb(La, "id"), lb(Hb, "id"), Hb = N.onkeydown = v);
    }
    function pa() {
      Hb && lb(Hb, "id");
      Ib = 0 < Ib ? Dc < Ib ? Dc : Ib : 0;
      Hb = Pb[Ib];
      rb(Hb, "id", "blog2slide-current");
    }
    function a(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++Ib, pa();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --Ib, pa();
      }
    }
    Sc = function(d, m, F, M) {
      M = M || qa(vb, "link", {type:"text/css", rel:"stylesheet"});
      if (U) {
        (z = xb(F)) ? lb(z, "id") : z = qa(wa, "div", {"aria-hidden":"true", className:F});
        var ea = z.offsetWidth;
        D("[CSS Loader] widthBeforeCSSLoaded = " + ea);
        rb(z, "id", F);
      }
      S(M, d, m, ea);
      return M;
    };
    var b = Y && 0 > Xa.conpare(Ya, "0.9.1"), l = 11 <= B || ib || 9 <= G && 9.5 > G, C = 11 > B, c = 7.2 <= G && 7.5 > G, n = 26 > Y && !b || 19 > za || 4.3 > jb || 2 > Yb || 536 > ta || 6 > Ha || 7 <= G && 9 > G && !c, r = !b && !l && !C && !c && !n, z, S = r ? function(d, m, F) {
      D("[CSS Loader] onload + onerror");
      d.onload = bz;
      d.onerror = function() {
        F(!1);
        d.onload = d.onerror = null;
      };
      d.href = m;
      function bz() {
        F(!0);
        d.onload = d.onerror = null;
      }
      bz = !1;
    } : l ? function(d, m, F, M) {
      D("[CSS Loader] onload + mesure");
      d.onload = bz;
      d.href = m;
      function bz() {
        F(U(M));
        d.onload = z = null;
      }
      bz = !1;
    } : C ? function(d, m, F, M) {
      D("[CSS Loader] onreadystatechange + onerror");
      d.onreadystatechange = bz;
      d.href = m;
      function bz() {
        "complete" === d.readyState && (F(U(M)), d.V = hb, z = null);
      }
      bz = !1;
    } : n || c ? function(d, m, F, M) {
      function ea() {
        ba = cb() + 999;
        ia(A, 0, 99);
        n ? X.onerror = null : X.removeEventListener("load", ea, !1);
        X = null;
        d.href = m;
      }
      function A() {
        U(M) ? (F(!0), z = null) : cb() < ba ? ia(A, 0, 99) : (F(!1), z = null);
      }
      var X = new Image(), ba;
      n ? (D("[CSS Loader] img.onerror + mesure"), X.onerror = ea) : (D('[CSS Loader] img.addEventListener("load") + mesure'), X.addEventListener("load", ea, !1));
      X.src = m;
    } : function(d, m, F) {
      D("[CSS Loader] UNSUPPORTED");
      ia(F, !1);
    }, U = !r && !b && function(d) {
      D("[CSS Loader] ExternalCSSLoader_elmTest.offsetWidth = " + z.offsetWidth);
      return z.offsetWidth !== d;
    };
    Rc = Y && 0 >= Xa.conpare(Ya, "0.9");
    $b = !(7.2 > G || Rc);
    ac = function(d) {
      V ? Va ? N.write('<script src="' + d + '">\x3c/script>') : ob("[DynamicScvriptLoader] Document already loaded! " + d) : Va || Ma.length ? Ma.push(d) : Ja(d);
    };
    bc = function(d) {
      V ? D("[DynamicScvriptLoader] " + d + " loaded.") : d === Ca ? Ja(Ma.shift()) : ob(d + " <> " + Ca);
    };
    var V = !$b, ha = $b && 7.5 > G, Ca;
    if (!V) {
      var Ma = [];
      ha && (Qc = !0);
      db(function() {
        Ja(Ma.shift());
      });
      var Ja = function(d) {
        if (Ca = d) {
          ha ? Ec[0].src = d : qa(vb, "script", {src:d});
        }
      };
    }
    var Da = [], ra = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!Ic) {
      var Na = bb.transition !== v || bb["-o-transition"] !== v || bb["-moz-transition"] !== v || bb["-webkit-transition"] !== v;
      xc(function(d) {
        if (d.H && wb) {
          d = d.G;
          var m = Ra(d), F = "", M;
          if ("A" === $a(m) && 1 === Zc(m).length) {
            var ea = Sa(m, "href");
            var A = ea.split("?")[0].split("#")[0].split(".");
            A = (A[A.length - 1] || "").toLowerCase();
            if ((M = 0 < ea.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + A + ".")) {
              ka(m, ra, P);
              ka(d, "click", P);
              ka(m, "click", I);
              Na && (F = d.naturalWidth + "px", Ia(d, "width", F));
              Ab(m, "js-pica-thumbnail");
              for (A = m; A = Ra(A);) {
                if (mb(A, "caption")) {
                  Ab(A, "js-captioned-thumbnail");
                  var X = A;
                  var ba = dd(X);
                  break;
                }
              }
              Da.push({u:m, L:X, S:ba, Z:d.src, $:F, N:ea, F:d, M:M ? 0 < ea.indexOf("/img/a/") ? 2 : 3 : 0 < ea.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Fb(function(d, m) {
        for (d = -1; m = Da[++d];) {
          Ka(m.u, ra, P), Ka(m.F, "click", P), Ka(m.u, "click", I);
        }
      });
    }
    var k = ["jsSidebarFixer1", "jsSidebarFixer2"], e = !(9 > B || G || 1 <= Y && 1.3 > Y || Tc), t = !(5 > Ha || 2.2 > jb || 6 > ca(12) || Qa(30) && 534 > ta || Qa(32) || 7 > B || 9 > G || 1 > Y), q = t || 6 === B || 1 > Y, u = 7.5 > G, h, L, w, H = od && Mc, x = 0, E = 0, R, ja, sa, Ea;
    id || Ic || (Gb(function(d) {
      if (d) {
        if (!wb) {
          return !0;
        }
        d = -1;
        var m;
        h = xb("jsSide");
        L = wb;
        if (!h) {
          return !0;
        }
        Lb(Q);
        wc(Q);
        w = Sb(tc(h), "div", {id:"jsSidebarFixer"});
        ka(W, "blur", na);
        for (zc(w, aa); 1 < kb(h).length;) {
          w.appendChild(kb(h)[1]);
        }
        for (; m = k[++d];) {
          fd(xb(m), fa);
        }
        B || ib || 2 > za || (R = bb.perspective !== v || bb.MozPerspective !== v || bb["-webkit-perspective"] !== v);
        Q();
        return !0;
      }
    }), Fb(function() {
      for (var d = -1, m; m = k[++d];) {
        gd(xb(m), fa);
      }
      Ka(W, "blur", na);
      ed(w, aa);
    }));
    var Oa, ab, Ta, f, g, y, p, O;
    Gb(function(d) {
      if (d) {
        if (!wb) {
          return !0;
        }
        var m = kb(wa);
        d = Sb(m[0], "div");
        if (t) {
          Wa(d, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; m.length;) {
            d.appendChild(m.shift());
          }
          eb || (Wa(d, "width:100%;height:100%;overflow:auto;position:relative"), Wa(ub, "overflow:hidden"), Wa(wa, "overflow:hidden"));
          d = $c(d, "div");
          Wa(d, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        qa(d, "div", v, H ? "transform" + (R ? "3D" : "") : t ? "pos:fixed" : "pos:absolute");
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
      function d(X, ba, oa, gb) {
        var Aa = gb ? "div" : "cite";
        if (0 === ba.indexOf("urn:isbn:")) {
          ba = ba.substr(9).toUpperCase().split("-").join("");
          if (13 === ba.length) {
            ba = ba.toString().slice(3, -1);
            for (var va = 0, Ua = 0; 9 > Ua; Ua++) {
              va += (ba.charAt(Ua) - 0) * (10 - Ua);
            }
            va = (11 - va % 11) % 11;
            va = 10 === va ? "X" : va.toString();
            ba += va;
          }
          10 === ba.length && (ba = "//www.amazon.co.jp/exec/obidos/ASIN/" + ba + "/itozyun-22/ref=nosim/");
        }
        oa = gb ? Sb(tc(F), Aa, {className:oa}) : qa(F, Aa, {className:oa});
        qa(oa, "a", 0 === ba.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:ba} : {href:ba}, X);
      }
      if (wb) {
        for (var m = yb(wb, "blockquote"), F, M = -1, ea, A; F = m[++M];) {
          ea = Sa(F, "title"), A = Sa(F, "cite"), ea && A ? (lb(F, "title"), d(ea, A, "js-generated-link-in-blockquote", !0)) : A && (lb(F, "cite"), d(W.decodeURI ? decodeURI(A) : A, A, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Ba, La, sb, Hb, Pb, Ib, Dc;
    db(function() {
      var d = xb("blog2slide-start");
      if (d) {
        var m = N.onfullscreenchange !== v ? "f" : N.onmozfullscreenchange !== v ? "mozF" : N.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        Ba = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== m || Ba ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ka(d.firstChild, "click", K), d = Ra(d), La = Ra(d), Pb = yb(d, "section"), sb = N.createElement("h1"), sb.innerHTML = yb(wa, "h1")[0].innerHTML, Dc = Pb.length, Pb.splice(0, 0, sb), 0 !== m ? ka(N, m + "ullscreenchange", Z) : B ? ka(N, "MSFullscreenChange", Z, !1) : wc(Z)) : Za(d);
      }
    });
  })();
  var Qb, Vb = !Gc || .9 > Y || 8 > G || 5.5 > B, tb;
  (function() {
    function P(k) {
      return k === "" + k;
    }
    function I(k, e) {
      return Vb ? new K(k, e) : new Gc(k, e);
    }
    function Q(k, e, t, q, u) {
      var h = Z.codeBlocks[Z.codeBlocks.length - 1], L = T(), w = L - a;
      switch(t || 0) {
        case 1:
          Z.initRegExpCount++;
          Z.initRegExpTotal += w;
          Z.initRegExpMax < w && (Z.initRegExpMax = w, Z.initRegExpSource = u.toString(), Z.initRegExpInstance = u);
          break;
        case 2:
          h.decorateCount++;
          h.decorateTime += w;
          break;
        case 3:
          h.updateDOMTime += w;
      }
      if (L - pa < c && !q) {
        return a = L, k(e);
      }
      ia(na, {U:k, Y:e});
    }
    function na(k) {
      pa = a = T();
      k.U(k.Y);
    }
    function da(k, e) {
      k && Qb[k] || (k = n.test(e) ? "default-markup" : "default-code");
      var t = !!Qb[k];
      t && Q(V, k, 0, !0);
      return t;
    }
    function fa() {
      function k(Oa, ab, Ta) {
        ab && (e.h = e.h || [], e.h.push({l:e, B:e.B, O:1, s:L, D:Oa, o:ab, m:Ta, R:{}, v:0}));
      }
      var e = b, t = e.m, q = t[0], u = t[2], h = e.D, L = e.s, w = e.aa.shift(), H = e.R;
      if (w) {
        var x = H[w], E;
        if (!(0 <= x)) {
          if (E = q[w.charAt(0)]) {
            var R = w.match(E[1]);
            x = E[0];
          } else {
            for (x = 0, q = -1; E = u[++q];) {
              if (R = w.match(E[1])) {
                x = E[0];
                break;
              }
            }
          }
          !(E = P(x)) || R && P(R[1]) || (E = !1, x = 11);
          E || (H[w] = x);
        }
        u = e.v;
        H = w.length;
        e.v += H;
        if (E) {
          E = R[1];
          q = w.indexOf(E);
          var ja = E.length, sa = q + ja;
          R[2] && (sa = H - R[2].length, q = sa - ja);
          k(h + u, w.substr(0, q), t);
          if (ja && da(x, E)) {
            k(h + u + q, E);
            var Ea = !0;
          }
          k(h + u + sa, w.substr(sa), t);
          e.h && e.h.length && (b = e.h.shift());
          Ea || (b !== e ? Q(S, v, 2) : Q(fa, v, 2));
        } else {
          L.push(h + u, x), Q(fa, v, 2);
        }
      } else {
        e.l ? (b = e.l.h.shift()) ? Q(S, v, 2) : (b = e.l, Q(fa, v, 2)) : Q(Ma, v, 2);
      }
    }
    function aa(k) {
      if (U.length) {
        var e = U.shift(), t = xa[e];
        if (t.pop) {
          xa[e] = t = I(t[0], t[1]);
        } else if (P(t)) {
          xa[e] = t = I(t);
        } else {
          return aa(k);
        }
        Q(aa, k, 1, !1, t);
      } else {
        Q(V, k);
      }
    }
    function ma(k) {
      for (var e, t = k.firstChild; t; t = t.nextSibling) {
        var q = t.nodeType;
        e = 1 === q ? e ? k : t : 3 === q ? r.test(t.nodeValue) ? k : e : e;
      }
      return e === k ? v : e;
    }
    Qb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var J = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Fa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), T = Wb.now || function() {
      return +new Wb();
    }, K, Z = {useRegExpCompat:Vb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var pa = T();
    var a, b, l, C, c = 5 > B ? 60 : 5.5 > B ? 0 : Vb ? 20 : 10, n, r;
    tb = [function(k) {
      W.RegExpCompat = K = k;
    }, function() {
      n = I("^\\s*<");
      r = I("\\S");
    }];
    Vb || (tb[1](), tb = v);
    var z = function() {
      var k = b, e = k.W, t = ha(k.B, k.O), q = k.o = t.o;
      k.I = t.I;
      da(e, q) || (b = v, Q(Na, v, 0, !0));
    };
    var S = function() {
      var k = b;
      k.aa = k.o.match(k.m[1]) || [];
      k.s.push(k.D, 0);
      Q(fa, v, 2);
    };
    var U = [];
    var V = function(k) {
      function e(x) {
        var E = x;
        0 <= x && (E = Fa[x]);
        0 <= E[1] && (E[1] = t(E[1]));
        return E;
      }
      function t(x) {
        var E = x;
        return 0 <= x && (E = xa[x], !E.exec) ? (U.push(x), x) : E;
      }
      var q = b, u = Qb[k];
      P(u) && (u = Qb[k] = Qb[u]);
      var h = u[0];
      if (0 <= h) {
        h = J[h];
        if (0 <= h["-num"]) {
          var L = h["-num"];
          delete h["-num"];
          for (var w = -1; 9 > w;) {
            h["" + ++w] = L;
          }
        }
        u[0] = h;
      }
      for (var H in h) {
        h[H] = e(h[H]);
      }
      u[1] = t(u[1]);
      h = u[2];
      w = 0;
      for (L = h.length; w < L; ++w) {
        h[w] = e(h[w]);
      }
      U.length ? Q(aa, k, 2) : (q.m ? q.l && (q.l.h[0].m = u) : q.m = u, Q(S, v, 1));
    };
    var ha = function(k, e) {
      function t(H) {
        var x = H.nodeType;
        if (1 === x) {
          if (!mb(H, "nocode")) {
            for (x = H.firstChild; x; x = x.nextSibling) {
              t(x);
            }
            x = $a(H);
            if ("BR" === x || "LI" === x) {
              q[L] = "\n", h[L << 1] = u++, h[L++ << 1 | 1] = H;
            }
          }
        } else if (3 === x || 4 === x) {
          if (x = H.nodeValue) {
            x = e ? x.split("\r\n").join("\n").split("\r").join("\n") : x.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), q[L] = x, h[L << 1] = u, u += x.length, h[L++ << 1 | 1] = H;
          }
        }
      }
      var q = [], u = 0, h = [], L = 0;
      t(k);
      var w = q.join("");
      "\n" === w.charAt(w.length - 1) && (w = w.substr(0, w.length - 1));
      return {o:w, I:h};
    };
    var Ca = function(k, e, t) {
      function q(x) {
        var E = x.nodeType;
        if (1 === E && !mb(x, "nocode")) {
          if ("BR" === $a(x)) {
            u(x), x.parentNode && Za(x);
          } else {
            for (x = x.firstChild; x; x = x.nextSibling) {
              q(x);
            }
          }
        } else if ((3 === E || 4 === E) && t) {
          var R = x.nodeValue, ja = R.indexOf("\r\n"), sa = 2;
          -1 === ja && (ja = R.indexOf("\n"), sa = 1);
          -1 === ja && (ja = R.indexOf("\r"));
          -1 !== ja && (E = R.substr(0, ja), x.nodeValue = E, (R = R.substr(ja + sa)) && uc(x, R), u(x), E || Za(x));
        }
      }
      function u(x) {
        function E(ja, sa) {
          var Ea = sa ? ja.cloneNode(!1) : ja, Oa = ja.parentNode;
          if (Oa) {
            Oa = E(Oa, 1);
            var ab = ja.nextSibling;
            Oa.appendChild(Ea);
            for (var Ta = ab; Ta; Ta = ab) {
              ab = Ta.nextSibling, Oa.appendChild(Ta);
            }
          }
          return Ea;
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
        L.push(x);
      }
      for (var h = N.createElement("li"); k.firstChild;) {
        h.appendChild(k.firstChild);
      }
      for (var L = [h], w = 0; w < L.length; ++w) {
        q(L[w]);
      }
      if (e === (e | 0)) {
        if (10 <= e && 7.2 > G) {
          var H = N.createElement("ol");
          H.innerHTML = '<li value="' + e + '">' + h.innerHTML + "</li>";
          L[0] = H.firstChild;
        } else {
          rb(h, "value", e);
        }
      }
      H = qa(k, "ol", {className:"linenums"});
      k = Math.max(0, e - 1 | 0) || 0;
      w = 0;
      for (e = L.length; w < e; ++w) {
        h = L[w], fc(h, "L" + (w + k) % 10), h.firstChild || ad(h, "\u00a0"), H.appendChild(h);
      }
    };
    var Ma = function() {
      var k = b, e = k.o, t = e.length, q = 0, u = k.I, h = u.length, L = 0, w = k.s, H = w.length, x = 0;
      w[H] = t;
      var E, R;
      for (R = E = 0; R < H;) {
        w[R] !== w[R + 2] ? (w[E++] = w[R++], w[E++] = w[R++]) : R += 2;
      }
      H = E;
      for (R = E = 0; R < H;) {
        var ja = w[R], sa = w[R + 1];
        for (R += 2; R + 2 <= H && w[R + 1] === sa;) {
          R += 2;
        }
        w[E++] = ja;
        w[E++] = sa;
      }
      w.length = E;
      k = k.B;
      H = "";
      k && (H = k.style.display, Ia(k, "display", "none"));
      for (; L < h;) {
        E = u[L + 2] || t;
        ja = w[x + 2] || t;
        R = Math.min(E, ja);
        sa = u[L + 1];
        var Ea;
        if (1 !== sa.nodeType && (Ea = e.substring(q, R))) {
          9 > B && (Ea = Ea.split("\n").join("\r"));
          var Oa = Sb(sa, "span", {className:la[w[x + 1]]}, Ea);
          Za(sa);
          q < E && (u[L + 1] = uc(Oa, e.substring(R, E)));
        }
        q = R;
        q >= E && (L += 2);
        q >= ja && (x += 2);
      }
      k && Ia(k, "display", H);
      b = v;
      Q(Na, v, 3, !0);
    };
    var Ja = [], Da;
    Z.readyTime = T() - pa;
    Gb(function(k) {
      if (k) {
        k = [Eb("pre"), Eb("code"), Eb("xmp")];
        for (var e = 0; e < k.length; ++e) {
          for (var t = 0, q = k[e].length; t < q; ++t) {
            ra(k[e][t]);
          }
        }
        return !0;
      }
    });
    var ra = function(k) {
      Ja.push(k);
      Da = Ja.length;
      1 === Da && (Fc ? ia(Fc, Na) : tb ? tb.push(function() {
        ia(Na);
      }) : ia(Na));
    };
    var Na = function() {
      function k(L, w) {
        return (L.split(w)[1] || "").split(" ")[0];
      }
      if (!b) {
        Da !== Ja.length && C && C(Da - Ja.length, Da);
        var e = Ja.shift();
        if (e) {
          pa = T();
          if (mb(e, "prettyprint") && !mb(e, "prettyprinted")) {
            for (var t = !1, q = e.parentNode; q !== wa; q = q.parentNode) {
              var u = $a(q);
              if (("PRE" === u || "XMP" === u || "CODE" === u) && mb(q, "prettyprint")) {
                t = !0;
                break;
              }
            }
            if (!t) {
              t = e.className;
              Ab(e, "prettyprinted");
              q = !1;
              if (!q) {
                q = k(t, "lang-") || k(t, "language-");
                var h;
                !q && (h = ma(e)) && "CODE" === $a(h) && (q = k(h.className, "lang-") || k(h.className, "language-"));
              }
              u = $a(e);
              "PRE" === u || "XMP" === u ? u = 1 : (u = e.currentStyle, h = N.defaultView, u = (u = u ? u.whiteSpace : h && h.getComputedStyle ? h.getComputedStyle(e, null).getPropertyValue("white-space") : 0) && "pre" === u.substr(0, 3));
              h = !1;
              (h = "true" === h || +h) || (h = k(t, "linenums:") || mb(e, "linenums"), h = h.length ? +h : h);
              h && Ca(e, h, u);
              b = {W:q, B:e, ba:h, O:u, D:0, v:0, R:{}, s:[]};
              Z.codeBlocks.push({elm:e, lang:q, readyTime:T() - pa, decorateTime:0, decorateCount:0, updateDOMTime:0});
              Q(z);
              return;
            }
          }
          Q(Na, v, 0, !0);
        } else {
          l && l(Z);
        }
      }
    };
    W.PR = {RegExpProxy:I, prettifyElement:ra, registerCompleteHandler:function(k, e) {
      l = k;
      C = e;
    }};
  })();
  var Ec = N.scripts || Eb("script");
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
    P ? (D = bz, ob = function(I) {
      qa(P, "DIV", {style:{color:"red"}}, I);
    }, W.onerror = function(I, Q, na) {
      ob(I + ", " + Q + ", " + na);
      return !0;
    }) : W.console ? (D = console.log, ob = console.error) : G ? (D = hb, ob = opera.postError) : D = ob = hb;
    for (; dc.length;) {
      D(dc.shift());
    }
    for (; ec.length;) {
      ob(ec.shift());
    }
    dc = ec = v;
    function bz(I) {
      qa(P, "DIV", v, I);
    }
    bz = !1;
  });
  6.1 > Ha && (Lb ? Lb(rc) : ka(W, "scroll", rc));
  Fb(Vc);
  6.1 > Ha && (Lb ? Lb(sc) : ka(W, "scroll", sc));
  Fb(Wc);
  10 > B && (11 !== ld || 5 !== B) || (9 > G || 1 > Y || !Db && !W.addEventListener ? N.write('<link href="' + ya + "css/" + Zb + oc + '" rel="stylesheet"' + (8 > G ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > G || 1.5 > Y || 534 > ta || 5 > Ha || 7 > za || 3 > jb) && db(function() {
    qa(vb, "link", {href:ya + "css/" + Zb + oc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Vb) {
    if ($b) {
      var Fc = function(P) {
        W.RegExpCompat = bz;
        Fc = v;
        ac(ya + "js/regexpcompat.js");
        function bz(I) {
          for (var Q; Q = tb.shift();) {
            Q(I);
          }
          tb = v;
          ia(P);
          bc(ya + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      W.RegExpCompat = function(P) {
        for (var I; I = tb.shift();) {
          I(P);
        }
        tb = v;
        bc(ya + "js/regexpcompat.js");
      }, ac(ya + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

