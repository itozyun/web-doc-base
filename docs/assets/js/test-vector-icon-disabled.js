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
var E, gb;
(function(Za, U, hb, xc, L, $b, $c, Nb, ib, ac, bc, yc, cc, q) {
  function na(G) {
    if (Za[0] === G) {
      return $a === $a + "" ? ib($a) : $a;
    }
  }
  function Na(G) {
    var M = Za[3];
    if (Za[2] === G) {
      return M === M + "" ? ib(M) : M;
    }
  }
  function dc() {
    return 6 > w ? xa.scrollTop : w ? mb.scrollTop : U.pageYOffset;
  }
  var xa = L.body, Wa = xa.style, mb, nb, ob, $a = Za[1], w = na(2) || na(3), vb = na(7), Ab = na(5) || na(6), O = na(8) || na(9), ba = na(11) || na(12), Ob = ba && 0 <= Za.conpare($a, "1.9.1"), Pb = na(13), Ca = na(15), Ra = na(16) || na(17), zc = na(10) || na(25), Sa = na(20) || na(22), Ac = na(23), Bb = na(21), ec = na(24), ad = Sa || Ac || Bb || ec, Bc = Sa && ib($b.userAgent.split("Edg/")[1]), bd = ib($b.appVersion.split("Trident/")[1]) + 4, fc = Na(35) || Na(36) || Na(37), cd = 0 <= $b.userAgent.indexOf("Googlebot/"), 
  ab = 0.9 > ba, gc = (vb ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : 7.2 > O ? "opr70" : 8 > O ? "opr72" : 9.5 > O ? "opr" + (O | 0) : ba && !Ob ? 1.4 <= ba ? "gck19" : 1.3 <= ba ? "gck13" : 1 <= ba ? "gck12" : ab ? 0.8 <= ba ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Qb = "", dd = Na(1) || Na(2) || Na(3) || Na(4) || Na(8) || Na(9) || Na(10), Cc, jb = 8 > w || 7.2 > O ? !1 : q, Dc = Wa.transform !== q ? "transform" : Wa["-o-transform"] !== q ? "-o-transform" : 
  Wa["-ms-transform"] !== q ? "-ms-transform" : Wa.MozTransform !== q ? "-moz-transform" : Wa["-webkit-transform"] !== q ? "-webkit-transform" : "", Ta = [], Ec = [], bb = [], hc, Fc, Gc, Hc, Rb, Ic, Sb, Tb, Jc = !1, ic = 525 > Ca || 3.2 > Ra || 2.2 > Bb || 10 > O || ba && !Ob || na(25) || 10 > na(3) || Na(32) || Na(30) || Na(3), ja, Cb, Ub, Kc, ed = !!xa.getBoundingClientRect, Vb = [], Wb = [], jc, Lc, kc, Mc, Xa = Nb.now || function() {
    return +new Nb();
  };
  (function() {
    function G() {
      for (var R, F = 0, V = Xa(); F < H.length;) {
        V < H[0].t ? ++F : (R = H.splice(F, 1)[0], R.f(R.p));
      }
      la = H.length ? bc(G, Da) : 0;
    }
    function M() {
      for (var R, F = 0; F < ca.length; ++F) {
        R = ca[F], R.f();
      }
    }
    function K() {
      qa && (qa = clearInterval(qa));
    }
    function ka() {
      la && (la = yc(la));
    }
    E = function(R) {
      Vb.push(R);
    };
    gb = function(R) {
      Wb.push(R);
    };
    Ub = function(R) {
      ca.length || (qa = cc(M, da));
      ca.push({f:R, C:++Z});
      return Z;
    };
    Kc = function(R) {
      for (var F = ca.length, V; V = ca[--F];) {
        if (V.C === R) {
          ca.splice(F, 1);
          ca[0] || K();
          break;
        }
      }
      return 0;
    };
    jc = function() {
      qa && (K(), qa = cc(M, da));
    };
    Lc = K;
    var ca = [], da = 500, Z = 0, qa;
    if (5 > w || vb) {
      U._wdb_onlooptimer = M, M = "_wdb_onlooptimer()";
    }
    ja = function(R, F, V) {
      H.length || (la = bc(G, Da));
      H.push({f:R, p:F, C:++ya, t:Xa() + (Da < V ? V : Da)});
      return ya;
    };
    Cb = function(R) {
      for (var F = H.length, V; V = H[--F];) {
        if (V.C === R) {
          H.splice(F, 1);
          break;
        }
      }
      return 0;
    };
    kc = function() {
      la && (ka(), la = bc(G, Da));
    };
    Mc = ka;
    var H = [], Da = 16, ya = 0, la;
    if (5 > w || vb) {
      U._wdb_ontimer = G, G = "_wdb_ontimer()";
    }
  })();
  var wb, xb, Nc, pb, Oc, Oa, db, Pc, lc, sa, Jb, Qc, Rc, mc, Ia, qb, Sc, Va, Pa, rb, kb, Db, Tc, Xb, eb, sb, nc, Fa, Ua, Uc;
  (function() {
    function G(b, d, l) {
      var t = ["<", b], c = 1, m, n;
      if (d) {
        for (m in d) {
          var A = d[m];
          if (null != A && "" !== A) {
            if ("style" === m) {
              t[++c] = ' style="';
              for (n in A) {
                for (var X = ++c, J, P = [], ea = n.split(""), za = ea.length; za;) {
                  J = ea[--za], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), P[za] = J;
                }
                t[X] = P.join("") + ":" + A[n] + ";";
              }
              t[++c] = '"';
            } else {
              "className" === m && (m = "class"), t[++c] = " " + m + '="' + A + '"';
            }
          }
        }
      }
      t[++c] = ">";
      null != l && (F && "font" !== b ? t[++c] = "<font>" + M(l) + "</font>" : t[++c] = M(l));
      t[++c] = "</" + b + ">";
      return t.join("");
    }
    function M(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function K(b) {
      var d = b.split("-"), l = d.length;
      if (2 > l) {
        return b;
      }
      for (; 1 < l;) {
        b = d[--l], d[l] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return d.join("");
    }
    function ka(b) {
      return ca(L, b);
    }
    function ca(b, d) {
      var l = "*" === d;
      l = F ? l ? b.all : b.all.tags(d.toUpperCase()) : 6 > w && l ? b.all : b.getElementsByTagName(d);
      for (var t = [], c = 0, m = l.length; c < m; ++c) {
        t[c] = l[c];
      }
      return t;
    }
    function da(b, d) {
      var l = [], t = 0, c, m = -1;
      if (9 > w || !b.getElementsByClassName) {
        var n = 6 > w ? b.all : b.getElementsByTagName("*");
      } else {
        var A = !0;
        n = b.getElementsByClassName(d);
      }
      for (c = n.length; t < c; ++t) {
        var X = n[t];
        if (A || (F || 1 === X.nodeType) && ya(X, d)) {
          l[++m] = X;
        }
      }
      return l;
    }
    function Z(b) {
      return F ? b.parentElement : b.parentNode;
    }
    function qa(b, d, l, t, c, m) {
      if (F) {
        var n = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var A = db(2 > b ? Oa(d) : d);
        A = 2 > b ? A.indexOf(d) + b : A.length;
        d.insertAdjacentHTML(n, G(l, t, c));
        d = db(d)[A];
        null != c && ("font" === l ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (V) {
        d = L.createElement(G(l, t));
      } else {
        d = m ? L.createElementNS("http://www.w3.org/2000/svg", l) : L.createElement(l);
        if (t) {
          for (n in t) {
            if ((b = t[n]) || 0 === b) {
              switch(n) {
                case "class":
                case "className":
                  Xb(d, b);
                  break;
                case "style":
                  m = d.style;
                  for (A in b) {
                    m[A] = b[A];
                  }
                  break;
                default:
                  rb(d, n, b);
              }
            }
          }
          !O || "a" !== l && "A" !== l || !t.href || t["tag-index"] || t.tagIndex || rb(d, "tagIndex", "-0");
        }
        ra || null != c && H(d, c);
      }
      return d;
    }
    function H(b, d) {
      if (F) {
        return qa(2, b, "font", q, d);
      }
      var l = L.createTextNode("" + d);
      b.appendChild(l);
      return l;
    }
    function Da(b, d) {
      9 > w ? b.className = d : b.setAttribute("class", d);
    }
    function ya(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    function la(b, d, l) {
      if (8 > O || 5.5 > w) {
        d = K(d);
      }
      b.style[d] = l;
    }
    function R(b) {
      return 5.5 > w ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var F = 5 > w;
    mb = ka("html")[0];
    nb = ka("head")[0];
    wb = function(b) {
      return U[b] || L[b] || L.getElementById(b);
    };
    xb = ka;
    Nc = function(b) {
      return da(L, b);
    };
    pb = ca;
    Oc = da;
    Oa = Z;
    db = function(b) {
      b = F ? b.children : b.childNodes;
      for (var d = [], l = b.length; l;) {
        d[--l] = b[l];
      }
      return d;
    };
    Pc = function(b) {
      var d = !(7.03 < O && 7.2 > O) && b.children;
      b = d ? d : b.childNodes;
      for (var l = [], t = b.length, c = -1, m; t;) {
        if (m = b[--t], d || 1 === m.nodeType) {
          F && "FONT" === m.tagName || (l[++c] = m);
        }
      }
      return l;
    };
    lc = function(b) {
      return F ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    sa = function(b, d, l, t, c) {
      d = qa(2, b, d, l, t, c);
      F || (b.appendChild(d), ra && null != t && H(d, t));
      return d;
    };
    Jb = function(b, d, l, t, c) {
      d = qa(0, b, d, l, t, c);
      F || (Z(b).insertBefore(d, b), ra && null != t && H(d, t));
      return d;
    };
    Qc = function(b, d, l, t, c) {
      d = qa(1, b, d, l, t, c);
      var m;
      F || ((m = b.nextSibling) ? Oa(m).insertBefore(d, m) : Oa(b).appendChild(d), ra && null != t && H(d, t));
      return d;
    };
    Rc = H;
    mc = function(b, d) {
      var l;
      if (F) {
        return qa(1, b, "font", q, d);
      }
      var t = L.createTextNode("" + d);
      (l = b.nextSibling) ? Oa(b).insertBefore(t, l) : Oa(b).appendChild(t);
      return t;
    };
    Ia = function(b) {
      Oa(b) ? F ? b.outerHTML = "" : (5.5 > w && (b.style.filter = ""), Oa(b).removeChild(b)) : E("[DOM] p_DOM_remove(), No parentNode!");
    };
    qb = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== mb;) {
        if (d = Oa(d), b === d) {
          return !0;
        }
      }
    };
    Sc = function(b) {
      return F ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var V = 9 > w, ra = V;
    Va = function(b) {
      return b.tagName.toUpperCase();
    };
    Pa = function(b, d) {
      if (8 > O || 5.5 > w) {
        d = K(d);
      }
      var l = b.getAttribute(d);
      return O && "tabIndex" === d ? "-0" === l ? "" : "" === l ? "-1" : l : l || "";
    };
    rb = function(b, d, l) {
      if (O && "tab-index" === d) {
        "-1" === l ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", l);
      } else {
        if (8 > O || 5.5 > w) {
          d = K(d);
        }
        b.setAttribute(d, l);
      }
    };
    kb = function(b, d) {
      if (O && "tab-index" === d) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > O || 5.5 > w) {
          d = K(d);
        }
        b.removeAttribute(d);
      }
    };
    Db = function(b, d) {
      if (O && "tab-index" === d) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > O || 5.5 > w) {
        d = K(d);
      }
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    Tc = function(b) {
      return b.className;
    };
    Xb = Da;
    eb = ya;
    sb = function(b, d) {
      var l;
      if (!ya(b, d)) {
        if (l = b.className) {
          l += " ";
        }
        Da(b, l + d);
      }
    };
    nc = function(b, d) {
      if (ya(b, d)) {
        var l = b.className.split(" ");
        l.splice(l.indexOf(d), 1);
        Da(b, l.join(" "));
      }
    };
    Fa = la;
    Ua = function(b, d) {
      var l, t = -1, c;
      if (5.5 > w) {
        if (l = R(b)) {
          for (l = l.split(";"); c = l[++t];) {
            la(b, c.split(":")[0], "");
          }
        }
        if (d) {
          for (t = -1, l = d.split(";"); c = l[++t];) {
            var m = c.split(":")[0];
            la(b, m, c.substr(m.length + 1));
          }
        }
      } else if (7.1 > O) {
        if (b.setAttribute("style", ""), d) {
          for (l = d.split(";"); c = l[++t];) {
            c = c.split(":"), la(b, c[0], c[1]);
          }
        }
      } else {
        9 > O || 1 > ba ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    Uc = R;
    Ta.splice(0, 0, function() {
      function b(X) {
        X = db(X);
        for (var J = X.length, P, ea, za; J;) {
          if (P = X[--J], ea = P.nodeType, 8 === ea) {
            d && n.push(P);
          } else if (1 === ea) {
            switch(ea = Va(P), "/" === ea.charAt(0) && (ea = ea.substr(1), A[ea] = !0), ea) {
              case "STYLE":
                if (7.2 <= O && 9 > O) {
                  break;
                }
              case "LINK":
                F || t || qb(nb, P) || m.push(P);
                break;
              case "META":
                ea = Pa(P, "name") || Pa(P, "property");
                for (za = c.length; za;) {
                  if (0 === ea.indexOf(c[--za])) {
                    n.push(P);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (cd || Db(P, "async")) {
                  break;
                }
                if (l) {
                  P.innerText = "";
                  l = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Db(P, "skip-cleanup")) {
                  break;
                }
              case "!":
                n.push(P);
                break;
              case "SOURCE":
                U.HTMLSourceElement || n.push(P);
                break;
              default:
                A[ea] ? n.push(P) : db(P).length && b(P);
            }
          }
        }
        for (; m[0];) {
          nb.appendChild(m.pop());
        }
        for (; n[0];) {
          Ia(n.pop());
        }
      }
      nc(mb, "nojs");
      ob = wb("jsMain");
      var d = !(8 > O || 5 > w || vb || ab), l = Hc, t = 7 > w, c = ["og:", "twitter:", "fb:"], m = [], n = [], A = {};
      b(mb);
    });
  })();
  var oa, Ja, Ya, yb, oc, Eb, zb, pc, qc, rc, Vc, Wc, Xc, Fb, Ea, sc;
  (function() {
    function G() {
      return h ? u ? 2 : x ? 3 : 1 : 0;
    }
    function M(e) {
      Ja(U, "load", M);
      M = q;
      ka(Ta, e, !0);
      Ta = q;
    }
    function K(e, g) {
      zb(function() {
        var v = la(e);
        g(v);
        v.addListener(g);
        return !0;
      });
    }
    function ka(e, g, v) {
      for (var a = 0; a < e.length; ++a) {
        !0 === e[a](g) && (e.splice(a, 1), --a);
      }
      v && (e.length = 0);
    }
    function ca(e, g, v) {
      Ta || F.length || ja(da);
      F.push(e, g, v);
    }
    function da() {
      var e = F, g;
      for (F = []; g = e.shift();) {
        ka(g, e.shift(), e.shift());
      }
    }
    function Z(e) {
      var g = e || event;
      e = ra[g.type];
      var v = -1, a, f;
      5 > w ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : w ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : d && (g.K = g.stopPropagation, g.stopPropagation = function() {
        f = !0;
      });
      for (; a = e[++v];) {
        a.j === this ? (this.g = a.i, w && (g.currentTarget = this), this.g(g), w ? (this.g = hb, this.g = q) : delete this.g) : 7.2 > O && this === L && a.j === U && (U.g = a.i, U.g(g), delete U.g);
      }
      if (w) {
        return g.preventDefault = g.stopPropagation = hb, g.preventDefault = g.stopPropagation = q, g.returnValue;
      }
      d && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (t = !0), f && !t && g.K(), g.K = g.stopPropagation = q);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function qa() {
      var e = 9 === R.offsetWidth;
      Fb !== e && (ca(Ec, Fb = e), E("p_cssAvailability:" + Fb));
    }
    function H() {
      !Ta && S && (Cb(S), S = ja(Da));
    }
    function Da() {
      S = 0;
      ka(y);
    }
    function ya(e) {
      Ta || ka(r, e);
    }
    var la = U.matchMedia, R, F = [];
    Ta.push(function() {
      K = q;
      R = sa(xa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ya(function() {
        F.length && ja(da);
      });
    });
    oa = function(e, g, v, a) {
      if (l) {
        e.addEventListener(g, v, a ? V ? a : a.capture || !0 === a : !1);
      } else {
        var f = {j:e, i:v};
        a = ra[g];
        var B = "on" + g, I, ha;
        if (a) {
          for (I = a.length; ha = a[--I];) {
            if (ha.j === e && ha.i === v) {
              return;
            }
          }
          ra[g].push(f);
        } else {
          ra[g] = a = [f], b || (g = e[B], "function" === typeof g && g !== Z && a.unshift({j:e, i:g}));
        }
        b ? e.attachEvent(B, Z) : e[B] = Z;
      }
    };
    Ja = function(e, g, v, a) {
      if (l) {
        e.removeEventListener(g, v, a ? V ? a : a.capture || !0 === a : !1);
      } else {
        a = ra[g];
        g = "on" + g;
        var f, B, I;
        if (a) {
          for (f = a.length; B = a[--f];) {
            B.j === e && (B.i === v ? a.splice(f, 1) : I = !0);
          }
          I || (b ? e.detachEvent(g, Z) : w ? (e[g] = hb, e[g] = null) : delete e[g]);
        }
      }
    };
    var V = !w && !vb && (new $c('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ra = {}, b = !1, d = 525.13 > Ca, l = !d && !vb && U.addEventListener, t;
    d && mb.addEventListener("click", function(e) {
      if (t) {
        return t = !1, e.preventDefault(), !1;
      }
    });
    Ya = function(e) {
      Ta ? Ta.push(e) : alert("Load event has already been dispatched!");
    };
    yb = function(e) {
      c && c.push(e);
    };
    var c = [];
    if (419.3 >= Ca) {
      var m = function() {
        if (m) {
          var e = L.readyState;
          "loaded" === e || "complete" === e ? (m = q, M()) : ja(m);
        }
      };
      ja(m);
    } else {
      oa(U, "load", M), ab && ja(function() {
        M && M();
      }, 999);
    }
    w || !ab && 1.8 > ba ? oa(U, "unload", function(e) {
      ka(c, e, !0);
    }) : c = q;
    zb = function(e) {
      Ec.push(e);
    };
    Ya(function() {
      qa();
      Ub(qa);
    });
    rc = function(e, g) {
      if (n) {
        oa(e, "focusin", g);
      } else if (A) {
        oa(e, "DOMFocusIn", g);
      } else {
        if (J) {
          Q || (Q = cc(aa, 333));
        } else if (X || P) {
          oa(L, "focus", za, !0);
        } else {
          return;
        }
        for (var v = ea, a = 0, f = v.length; a < f; ++a) {
          if (v[a] === e && v[a + 1] === g) {
            return;
          }
        }
        v.push(e, g);
      }
    };
    Vc = function(e, g) {
      if (n) {
        oa(e, "focusin", g);
      } else if (A) {
        oa(e, "DOMFocusIn", g, !1);
      } else {
        for (var v = ea, a = 0, f = v.length; a < f; ++a) {
          if (v[a] === e && v[a + 1] === g) {
            v.splice(a, 2);
            v.length || (J ? Q = Kc(Q) : (X || P) && Ja(L, "focus", za, !0));
            break;
          }
        }
      }
    };
    var n = 6 <= w || Ab || 52 <= ba || 15 <= Sa || 534 <= Ca || 5 <= Ra || Ac || 4 <= Bb || 4 <= ec || 11.6 <= na(8) || 12 <= na(9), A = 8 <= O || Sa || Bb || ec || Ca || Ra, X = 8 > O, J = 6 > w, P = 52 > ba || Pb;
    if (P || X) {
      var ea = [];
      var za = function(e) {
        var g = ea, v = X ? L.activeElement : e.target;
        if (X) {
          var a = e;
          e = {type:"focusin", target:v, preventDefault:function() {
            a.preventDefault();
          }, stopPropagation:function() {
            a.stopPropagation();
          }};
        }
        for (var f = 0, B = g.length; f < B; ++f) {
          var I = g[f];
          (I === v || qb(I, v)) && g[f + 1].call(I, e);
        }
      };
    } else if (J) {
      ea = [];
      var Q, Y, T, aa = function() {
        T = U.onerror;
        U.onerror = ta;
        var e = L.activeElement;
        if (Y !== e) {
          Y = e;
          for (var g = ea, v, a = 0, f = g.length; a < f; ++a) {
            v = g[a], (v === e || qb(v, e)) && g[a + 1].apply(v, [{target:e}]);
          }
        }
        U.onerror = T;
        T = q;
      }, ta = function() {
        E("error!");
        U.onerror = T;
        T = Y = q;
        return !0;
      };
    }
    qc = function(e) {
      bb && bb.push(e);
    };
    var k = 60 > ba || Pb, h, x, u;
    if (89 <= ba || 89 <= Sa || fc && 79 <= Bc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      sc = !0, K("(forced-colors:active)", function(e) {
        h = e.matches;
        Ea = G();
        ca(bb, Ea);
        E("(forced-colors:active):" + Ea);
      });
    } else if (10 <= w || Ab || fc && Bc) {
      sc = !0, K("(-ms-high-contrast:black-on-white)", function(e) {
        h = x = e.matches;
        Ea !== G() && (Ea = G(), ca(bb, Ea), E("(-ms-high-contrast:black-on-white):" + Ea));
      }), K("(-ms-high-contrast:white-on-black)", function(e) {
        h = u = e.matches;
        Ea !== G() && (Ea = G(), ca(bb, Ea), E("(-ms-high-contrast:white-on-black):" + Ea));
      }), K("(-ms-high-contrast:active)", function(e) {
        h = e.matches;
        Ea !== G() && (Ea = G(), ca(bb, Ea), E("(-ms-high-contrast:active):" + Ea));
      });
    } else if (fc && (w || ba && 0 <= Za.conpare($a, "1.8.1") || Pb)) {
      var C = function() {
        function e(a, f) {
          if (f && "transparent" === a) {
            return 382.5;
          }
          if ("#" === a.charAt(0)) {
            return parseInt("0x" + a.substr(1, 2), 16) + parseInt("0x" + a.substr(3, 2), 16) + parseInt("0x" + a.substr(5, 2), 16);
          }
          var B = a.split("(")[1].split(",");
          return ib(B[0]) + ib(B[1]) + ib(B[2]);
        }
        var g = L.defaultView;
        var v = g ? g.getComputedStyle(R, null) : R.currentStyle;
        g = (v && v.color || "").split(" ").join("");
        v = (v && v.backgroundColor || "").split(" ").join("");
        g && (h = "#123456" !== g && "rgb(18,52,86)" !== g, x = e(g) < e(v, !0), u = e(g) > e(v, !0), Ea !== G() && (Ea = G(), E("(forced-colors-fallback):" + Ea), ca(bb, Ea, k)));
      };
      zb(function(e) {
        if (e) {
          return Fa(R, "color", "#123456"), Fa(R, "backgroundColor", "#123456"), k ? (C(), bb = q) : Ub(C), C = q, !0;
        }
      });
    } else {
      bb = G = q;
    }
    pc = function(e) {
      Ta || alert("p_listenImageReady is called back for images present at load time.");
      p.push(e);
    };
    var p = [], W = 7.5 <= O && 8 > O;
    W && function() {
      for (var e = L.images, g = e.length, v; g;) {
        v = e[--g], v.J = v.src, kb(v, "src");
      }
    }();
    Ya(function() {
      function e() {
        a ? (f = v[--a], W && rb(f, "src", f.J), Fc(g, W ? f.J : f.src)) : p = q;
      }
      function g(I) {
        ka(p, {G:f, H:I}, !a);
        e();
      }
      var v = L.images || xb("img"), a = v.length;
      if (12 > O || 532 > Ca) {
        e();
      } else {
        for (; a;) {
          var f = v[--a];
          var B = 9 > w ? f.complete : 0 <= f.naturalWidth ? f.naturalWidth : f.width;
          ca(p, {G:f, H:B}, !a);
        }
        p = q;
      }
    });
    oc = function(e) {
      y.push(e);
    };
    var y = [], S;
    oa(U, "resize", H);
    yb(function() {
      S && yc(S);
      Ja(U, "resize", H);
    });
    Eb = function(e) {
      r.push(e);
    };
    var r = [], D = 1 > ba || 1.2 <= ba && 1.8 > ba || 7.2 >= O, N;
    D ? Ub(function() {
      var e = U.pageYOffset;
      N !== e && (N = e, ya({type:"scroll", cancelable:!1, stopPropagation:hb, preventDefault:hb}));
    }) : oa(U, "scroll", ya, {passive:!0});
    yb(function() {
      D || Ja(U, "scroll", ya, {passive:!0});
    });
    Wc = function(e, g) {
      if (ma) {
        oa(e, "wheel", g, {passive:!1});
      } else if (va) {
        oa(e, "mousewheel", g, !1);
      } else if (Ka) {
        oa(e, "MozMousePixelScroll", g, !1);
      } else if (Ga) {
        for (var v = La, a = 0, f = v.length; a < f; ++a) {
          if (v[a] === e && v[a + 1] === g) {
            return;
          }
        }
        v.length || oa(L, "DOMMouseScroll", Ha, !1);
        v.push(e, g);
      }
    };
    Xc = function(e, g) {
      if (ma) {
        Ja(e, "wheel", g, {passive:!1});
      } else if (va) {
        Ja(e, "mousewheel", g, !1);
      } else if (Ka) {
        Ja(e, "MozMousePixelScroll", g, !1);
      } else if (Ga) {
        for (var v = La, a = 0, f = v.length; a < f; ++a) {
          if (v[a] === e && v[a + 1] === g) {
            v.splice(a, 2);
            v.length || Ja(L, "DOMMouseScroll", Ha, !1);
            break;
          }
        }
      }
    };
    var ma = 9 <= w || Ab || 17 <= ba || 31 <= Sa || 537.7 <= Ca, va = 6 <= w || Ab || 9 <= O || Sa || 522 <= Ca || Ra, Ka = Ob, Ga = ba && 0 <= Za.conpare($a, "0.9.7") && !Ob;
    if (Ga) {
      var La = [], Ha = function(e) {
        for (var g = La, v = e.target, a, f = 0, B = g.length; f < B; ++f) {
          a = g[f], qb(a, v) && g[f + 1].call(a, e);
        }
      };
    }
  })();
  (function() {
    function G(Q) {
      ra(Q);
      ea && !Q && Ia(ea);
      ra = b = d = l = t = c = X = J = P = za = ea = q;
    }
    function M(Q) {
      var Y = '1.6em "' + Q + '"';
      E("[webFontTest] testByNativeFontLoaderAPI start.");
      L.fonts.load(Y).then(function(T) {
        E("[webFontTest] fonts.check() : " + L.fonts.check(Y, "i") + ", fonts.length : " + T.length);
        (T = ca(b)) ? ja(G, T) : (E("[webFontTest] mesureWebFont() : false"), ka(!0));
      }, function(T) {
        E("[webFontTest] fonts.load() rejected! " + T);
        jb !== q ? da(jb) : hc(da);
      });
    }
    function K(Q) {
      return L.hidden || L.msHidden || L.mozHidden || L.webkitHidden ? (A = Xa(), !1) : Q < Xa() - A;
    }
    function ka(Q) {
      Q && (E("[webFontTest] testWebFont start."), A = Xa());
      (Q = ca(b, m)) ? (E("[webFontTest] testWebFont mesurement success : " + Q), G(Q)) : K(m) ? (E("[webFontTest] testWebFont timeout!"), X || H ? G(0) : jb !== q ? da(jb) : hc(da)) : ja(ka);
    }
    function ca(Q, Y) {
      var T = 0, aa = -1, ta = 0, k = F && [];
      if (!za) {
        var h = -1;
        var x;
        J = sa(xa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, n);
        for (za = []; x = V[++h];) {
          Fa(J, "fontFamily", x), za[h] = J.offsetWidth, E("[webFontTest] " + x + "=" + za[h]);
        }
      }
      for (5 > w ? J || (J = sa(xa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, n)) : xa.appendChild(J); h = V[++aa];) {
        Fa(J, "fontFamily", '"' + Q + '",' + h);
        var u = J.offsetWidth;
        if (k) {
          k[aa] = u;
        } else {
          if (u !== za[aa]) {
            T = 1;
            break;
          }
        }
      }
      if (k && u === k[0] && u === k[1]) {
        for (E("[webFontTest] Hit... : width=" + u), T = 1, aa = -1; u = za[++aa];) {
          if (u === k[0] && u === k[1] && u === k[2]) {
            E("[webFontTest] Failed! : font[" + aa + "]=" + V[aa]);
            T = 0;
            break;
          }
        }
      }
      !w && T && t && (J.textContent = t, u = J.offsetWidth, J.textContent = c, ta = u === J.offsetWidth ? 1 : 0, J.textContent = n);
      Ia(J);
      5 > w && (J = q);
      Y && (T || K(Y)) && (k || E("[webFontTest] " + Q + ", " + h + "=" + u));
      return T + ta;
    }
    function da(Q) {
      E("[webFontTest] onTestDataURIComplete : " + Q);
      Q ? (X = !0, Z(!0)) : G(0);
    }
    function Z(Q) {
      var Y;
      if (d) {
        for (Y in Q && (A = Xa()), d) {
          ca(Y, la) ? (E("[webFontTest] success! " + Y), P = sa(xa, "div", {"aria-hidden":"true", className:l, id:l}), ea = sa(nb, "link", {type:"text/css", rel:"stylesheet", href:d[Y]}), ja(qa, !0)) : K(la) ? (E("[webFontTest] timeout! " + Y), delete d[Y], ja(Z, !0)) : ja(Z);
          return;
        }
      }
      G(0);
    }
    function qa(Q) {
      Q && (E("[webFontTest] testImportedCssReady start!"), E("[webFontTest] targetWebFontName : " + b), A = Xa());
      1 < P.offsetWidth ? (E("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + P.offsetWidth), Ia(P), m = la, ja(ka, !0)) : K(m) ? 528 > Ca || 4 > Ra ? (E("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + P.offsetWidth), Ia(P), m = la, ja(ka, !0)) : (E("[webFontTest] testImportedCssReady timeout!"), Ia(P), G(0)) : ja(qa);
    }
    hc = !1 === jb ? function(Q) {
      ja(Q, !1);
    } : function(Q) {
      function Y(ta) {
        aa = Cb(aa);
        jb = ta;
        T.onload = T.onerror = hb;
        ja(Q, ta);
      }
      if (jb !== q) {
        E("[dataURITest] already done : " + jb), ja(Q, jb);
      } else {
        E("[dataURITest] start!");
        var T = new Image(), aa = ja(function() {
          aa && Y(!1);
        });
        T.onerror = function() {
          E("[dataURITest] no DATA URI!");
          Y(!1);
        };
        T.onload = function() {
          E("[dataURITest] DATA URI:" + (1 === T.width * T.height));
          Y(1 === T.width * T.height);
        };
        T.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > w && Ya(function() {
      var Q = sa(xa, "div");
      Ua(Q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Cc = 1 < Q.offsetHeight;
      Ia(Q);
    });
    Fc = function(Q, Y) {
      function T() {
        ta || !k || aa.complete ? (E("[imageTest] timer -> img.complete. img.width=" + aa.width), ja(Q, !!aa.width), aa.onerror = aa.onload = hb, aa = Q = q) : (--k, ja(T));
      }
      var aa = new Image(), ta, k = 99;
      E("[imageTest] start.");
      aa.onerror = function() {
        E("[imageTest] error!");
        ta = !0;
      };
      aa.onload = function() {
        E("[imageTest] onload.");
        ta = !0;
      };
      aa.src = Y;
      ja(T);
    };
    Gc = function(Q, Y, T, aa, ta, k, h, x) {
      ra = Q;
      b = Y;
      d = T;
      l = aa;
      t = ta;
      c = k;
      m = h || ya;
      n = x || R;
      b = Da + b;
      E("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      E("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!ic);
      ic ? ja(G, 0) : !L.fonts || 603 > Ca || 11 > Ra ? (E("[webFontTest] No native font loader."), ka(!0)) : (E("[webFontTest] Use Native font loader."), M(b));
    };
    var H = 9 > w || 2 > Sa || 12 > O, Da = "bad_" + Xa() + "_", ya = 5E3, la = 500, R = "mmmmmmmmmmlliiiiiiiii", F = 7 > Ra || Ca && 0 >= Za.conpare($a, "536.11");
    ic || (F && Sa && E("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + Sa), F && Ra && E("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ra), F && Ca && E("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + Ca));
    var V = Sa ? ["sans-serif", "serif"] : ["monospace", "sans-serif", "serif"], ra, b, d, l, t, c, m, n, A, X, J, P, ea, za;
  })();
  (function() {
    function G(c) {
      var m = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== c) {
        var n = Nc("ico"), A = 0, X = n.length;
        if (X) {
          if (1 === c) {
            for (; A < X; ++A) {
              c = n[A];
              var J = Sc(c);
              if (J = m[J]) {
                c.innerHTML = J;
              }
            }
          } else {
            t && !l && (U.VectorIconCompat = bz, Sb(Aa + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Tb(Aa + "js/vector-icon-svg-fallback.js");
        return [m, n, sa, l];
      }
      bz = !1;
    }
    pc(function(c) {
      var m = c.G;
      c = c.H;
      var n = Oa(m);
      !eb(n, "aBodyRoot") && c ? sb(n, "js-image-has-been-loaded") : c || Pa(m, "alt") || "lazy" === Pa(m, "loading") || Fa(m, "display", "none");
    });
    ab && (Ta.splice(1, 0, function() {
      for (var c = Oc(ob, "RichLink-sep"), m, n, A, X, J, P; m = c.shift();) {
        for (m = db(m); n = m.shift();) {
          if ("A" === Va(n) && !n.innerHTML) {
            for (E("\u25a0 Broken Anchor " + n.parentNode.innerHTML); A = m.shift();) {
              if (1 === A.nodeType) {
                if ("A" === Va(A)) {
                  break;
                }
                for (X = pb(A, "A"); J = X.shift();) {
                  for (P = db(J); P.length;) {
                    J.parentNode.insertBefore(P.shift(), J);
                  }
                  Ia(J);
                }
              }
              n.appendChild(A);
            }
          }
        }
      }
    }), Ta.splice(2, 0, function() {
      for (var c = xb("A"), m, n; m = c.shift();) {
        "A" !== Va(m) || m.innerHTML || (n = m.nextSibling && m.nextSibling.firstChild) && n.href === m.href && (E("\u25b2 Broken Anchor " + n.innerHTML), Ia(m));
      }
    }));
    5.5 <= w && 8 > w && bb && qc(function(c) {
      for (var m = pb(xa, "a"), n = m.length, A = 0; A < n; ++A) {
        m[A].hideFocus = !c;
      }
    });
    if (!sc && bb) {
      var M, K = function() {
        M = sa(nb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Aa + "css/" + Qb + "hc/" + gc});
        if (Dc || 5.5 <= w && 9 > w && Cc) {
          sb(xa, "js-canuse-css-rotate-when-forced-colors-mode"), E("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        K = q;
      };
      qc(function(c) {
        c && !M ? K() : M && (c ? nb.appendChild(M) : Ia(M));
      });
    }
    O && Ya(function() {
      for (var c = pb(xa, "a"), m = c.length, n = 0, A; n < m; ++n) {
        A = c[n], "-1" === Pa(A, "tabIndex") ? kb(A, "tabIndex") : Pa(A, "href") && rb(A, "tabIndex", "0");
      }
      c = pb(xa, "input");
      n = 0;
      for (m = c.length; n < m; ++n) {
        A = c[n], "hidden" === Pa(A, "type") && kb(A, "tabIndex");
      }
    });
    if (ba && 0 > Za.conpare($a, "0.9.5")) {
      Jc = !0;
      var ka, ca, da, Z, qa;
      Ya(function() {
        oa(L, "keydown", H);
        oa(L, "keyup", Da);
        rc(xa, ya);
        ab || (oa(U, "blur", ra), oa(xa, "click", V));
      });
      var H = ab ? function(c) {
        16 === c.keyCode ? ka = !0 : 9 === c.keyCode && Z && la(Z, !0) && (Z.blur && Z.blur(), c.stopPropagation(), c.preventDefault(), ja(F));
      } : function(c) {
        16 === c.keyCode ? ka = !0 : 9 === c.keyCode && (ca = Xa());
      }, Da = function(c) {
        16 === c.keyCode && (ka = !1);
      }, ya = ab ? function(c) {
        c.target.innerHTML || E(c.target.parentNode.innerHTML);
        Z = c.target;
      } : function(c) {
        var m = c.target;
        if (Z === m) {
          da = q;
        } else if (da) {
          m === da ? (c.stopPropagation(), F(!0)) : (m.blur && d(m), c.preventDefault(), F());
        } else {
          if (c = Z) {
            Z = q, d(c);
          }
          da = m;
          F(!0);
        }
      }, la = function(c, m) {
        var n = Xa(), A = xa, X = "nextSibling", J = "firstChild";
        ka && (m || n - 99 < ca && ca <= n) && (X = "previousSibling", J = "lastChild");
        for (da = q; c !== A;) {
          if (P) {
            n = c;
            var P = !1;
          } else {
            n = c[X];
          }
          if (n) {
            if (1 === n.nodeType) {
              if (R(n)) {
                return da = n, !0;
              }
              c = (P = n[J]) || n;
            } else {
              c = n;
            }
          } else {
            c = c.parentNode;
          }
        }
      }, R = function(c, m) {
        function n() {
          return "-1" !== Pa(c, "tab-index");
        }
        function A() {
          return 0 < c.offsetHeight * c.offsetWidth;
        }
        if (c.focus) {
          var X;
          switch({A:m ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Va(c)]) {
            case 1:
              if (Db(c, "href") && n() && A()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Pa(c, "type") && n() && !Db(c, "disabled") && A()) {
                return !0;
              }
              break;
            case 3:
              if (n() && !Db(c, "disabled") && A()) {
                return !0;
              }
              break;
            default:
              if ((X = Pa(c, "tab-index")) && "-1" !== X && A()) {
                return !0;
              }
          }
        }
      }, F = function(c) {
        qa = 0;
        da && (ab || oa(da, "blur", b), Z = da, da = q, c || Z.focus());
      };
      if (!ab) {
        var V = function(c) {
          var m = c.target;
          if (Z && R(m, !0)) {
            var n = Z;
            Z = q;
            d(n);
            da = m;
            c.stopPropagation();
            c.preventDefault();
            F();
          }
        }, ra = function(c) {
          c.target === L && (da = q);
        }, b = function(c) {
          c = c.target;
          Ja(c, "blur", b);
          Z === c && la(c) && (qa || (qa = ja(F)));
        }, d = function(c) {
          Ja(c, "blur", b);
          c.blur();
        };
      }
    }
    zb(function(c) {
      if (c) {
        return c = {}, w && (c.myIconFont_canEOT = Aa + "iconfont/eot.css"), c.myIconFont_canWOFF2 = Aa + "iconfont/woff2.css", c.myIconFont_canWOFF = Aa + "iconfont/woff.css", c.myIconFont_canTTF = Aa + "iconfont/ttf.css", c.myIconFont_canOTF = Aa + "iconfont/otf.css", c.myIconFont_canSVG = Aa + "iconfont/svg.css", Gc(G, "myIconFont", c, "myIconFont-testCssReady", "twitter", "\ud83d\udc24", 5E3), G = q, !0;
      }
    });
    var l = 8 <= na(8) && 9 > O, t = 9 <= w || Ab || 1.8 <= ba || 8 <= na(8) || 9 <= na(9) || 3 <= na(21) || Pb || ad || 312.6 <= Ca && 312.7 >= Ca || 419.3 <= Ca || Ra;
  })();
  (function() {
    function G(a) {
      var f = n.length, B, I, ha, z;
      if (13 === (a.keyCode || a.ba) || a.type !== A) {
        for (; f;) {
          var ia = n[--f];
          if (ia.F === this || ia.u === this) {
            f = ia.F;
            var fa = B = ia.u;
            if (ia.P) {
              if (Fa(f, "width", ia.Z), f.src = ia.Y, Xb(fa, ia.T), f = ia.L) {
                Ua(f, ia.S), nc(f, "js-captioned-thumbnail__large");
              }
            } else {
              if (I = ia.N) {
                delete ia.N;
                if (ia.M) {
                  for (; B = Oa(B);) {
                    if (!eb(B, "caption")) {
                      var pa = Va(B);
                      if ("DIV" === pa || "P" === pa || "BLOCKQUOT" === pa || "LI" === pa || "DD" === pa || "TD" === pa || "TH" === pa || "FORM" === pa || "PRE" === pa) {
                        break;
                      }
                    }
                  }
                  B = (B.offsetWidth | 0) - 4;
                  1600 < B && (B = 1600);
                  if (2 === ia.M) {
                    I = I.split("=");
                    pa = I.length;
                    if (ha = I[pa - 1]) {
                      (z = ib(ha.substr(1))) && ha === "s" + z ? I[pa - 1] = "w" + B : I[pa] = "w" + B;
                    }
                    I = I.join("=");
                  } else {
                    I = I.split("/");
                    pa = I.length;
                    if (ha = I[pa - 2]) {
                      (z = ib(ha.substr(1))) && ha === "s" + z ? I[pa - 2] = "w" + B : I.splice(pa - 1, 0, "w" + B);
                    }
                    I = I.join("/");
                  }
                }
                ia.W = I;
              }
              ia.T = Tc(fa);
              sb(fa, "js-pica-thumbnail__large");
              Fa(f, "width", "");
              f.src = ia.W;
              if (f = ia.L) {
                Ua(f, ""), sb(f, "js-captioned-thumbnail__large");
              }
            }
            ia.P = !ia.P;
            break;
          }
        }
        M(a);
      }
    }
    function M(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function K(a) {
      var f = u;
      if (Fb) {
        if (C && !f) {
          if (Xa() < C) {
            return;
          }
          C = q;
        }
        7 === a ? (H("t"), p = 0) : (H("s"), p && (p = Cb(p)), h = dc());
        f ? (u = ca(q, f[0], f[1])) || (C = Xa() + 99) : ca();
        ya();
      } else {
        u = q;
      }
    }
    function ka() {
      H("w.blur");
    }
    function ca(a, f, B) {
      function I(fb) {
        fa = fb;
        if (ta) {
          pa = ta + ":translate" + (x ? "3D(0," : "(0,") + fb + (x ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== fb) {
          if (ea || za) {
            var tc = Y.offsetWidth;
          }
          pa = ea ? "position:fixed;width:" + tc + "px;top:" + (fb - ha + wa) + "px" : Q ? "top:" + fb + "px" : "position:absolute;top:" + fb + "px;left:0";
          if (za && pa) {
            var Kb = 8 > w ? " " : ",";
            pa += ";clip:rect(" + (0 > fb ? -fb + "px" + Kb + tc + "px" + Kb + Ma : "0" + Kb + tc + "px" + Kb + (fb + Ma < Lb ? Ma : Lb - fb)) + "px" + Kb + "0)";
          }
        }
      }
      var ha = h, z = T, ia = Y.offsetTop === z.offsetTop, fa = 0, pa = "", cb = !0;
      if (ia) {
        for (var Ba = 0, wa = 0, Qa = z; Qa && Qa !== xa;) {
          wa += Qa.offsetTop, Qa = Qa.offsetParent;
        }
        fa = k;
        Qa = 11 > w ? mb.offsetHeight : U.innerHeight;
        var uc = z.offsetHeight, Ma = aa.offsetHeight, Lb = Ma < uc ? uc : Ma, tb = ha, Gb = tb + Qa, Yb = wa, Zb = Yb + Lb, Yc = wa + fa, fd = Yc + Ma;
        z = tb < Yb ? Yb : tb;
        var ub = Zb < Gb ? Zb : Gb, Hb = ub - z;
        tb = Zb <= tb;
        Gb = Gb <= Yb;
        if (f !== q) {
          cb = wa + f;
          a = cb + B;
          if (tb || Gb) {
            return Qa <= B ? (f = wa, H("4.1.1")) : tb ? (f = Zb - B, H("4.1.2")) : (f = wa + B - Qa, H("4.1.3")), C = q, U.scroll(0, f), H("4.1.*"), u;
          }
          Ma <= Hb ? (Ba = 3, H("4.2")) : B <= Hb ? Ma - f <= Hb ? (Ba = 2, H("4.3.1")) : z <= cb && a <= ub ? z < wa + fa && (Ba = 4, H("4.3.2")) : z <= cb && cb <= ub ? (Ba = 5, H("4.3.3")) : z <= a && a <= ub ? (Ba = 4, H("4.3.4")) : a < z ? (Ba = 4, H("4.3.5")) : (Ba = 5, H("4.3.6")) : (Ba = 4, H("4.4"));
          cb = !1;
        } else {
          a !== q ? Ma <= Hb ? (Ba = 7, cb = !1, H("3.1")) : (fa -= 60 * a, Ba = ub - wa - Ma, a = z - wa, fa < Ba ? (fa = Ba, H("3.2.1")) : a < fa ? (fa = a, H("3.2.2")) : H("3.2.3"), Ba = 6) : uc <= Ma || (tb ? (Ba = 1, H("2.2.1")) : Gb ? H("2.2.2") : Ma <= Hb ? (Ba = 3, H("2.3")) : z < Yc ? (Ba = 3, H("2.4.1")) : fd < ub ? (Ba = 2, H("2.4.2")) : ha < wa + Ma - Hb ? H("2.4.3") : (Ba = 2, H("2.4.4")));
        }
        switch(Ba) {
          case 0:
            I(0);
            break;
          case 1:
            I(Lb - Ma);
            break;
          case 2:
            I(ub - wa - Ma);
            break;
          case 3:
            I(z - wa);
            break;
          case 4:
            I(z - wa - f);
            break;
          case 5:
            I(ub - wa - (f + B));
          case 6:
            I(fa);
        }
        la(fa, Ma, wa, Lb, Qa, f || "-", B || "-");
      } else {
        la(fa, "-", "-", "-", "-", "-", "-");
      }
      Ua(aa, pa);
      k = fa;
      return ia && cb;
    }
    function da(a) {
      if (Fb && (H("m"), ba && (h = dc(), ya()), this !== a.target)) {
        var f = ac(a.deltaY) ? a.deltaY : ac(a.wheelDeltaY) ? a.wheelDeltaY / 120 : ac(a.wheelDelta) ? a.wheelDelta / -120 : a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1);
        f && ca(9 >= f ? -9 >= f ? -3 : f : 3) && (a.preventDefault(), a.stopPropagation());
      }
    }
    function Z(a) {
      if (Fb) {
        var f = ba && 0 > Za.conpare($a, "0.9.4"), B = a.target, I = aa, ha = 0;
        if (qb(I, B)) {
          H(a.type || "ie5focus");
          oa(B, "blur", qa);
          if (ta) {
            f = B.getBoundingClientRect(), a = f.bottom - f.top, ha = f.top - I.getBoundingClientRect().top | 0;
          } else {
            a = B.offsetHeight;
            var z = B;
            if (f) {
              for (var ia = []; z && (ba ? qb(I, z) : I !== z);) {
                for (; z.previousSibling;) {
                  z = z.previousSibling, z.tagName && ia.unshift(z.tagName + ":" + z.offsetTop);
                }
                z = z.offsetParent;
              }
              E(ia.join());
              z = B;
            }
            for (; z && (ba ? qb(I, z) : I !== z);) {
              if (f) {
                for (; z.previousSibling;) {
                  z = z.previousSibling, ha += z.offsetHeight || 0;
                }
                z = z.parentNode;
              } else {
                ha += z.offsetTop, z = z.offsetParent;
              }
            }
          }
          P ? (u = [ha, a], p && Cb(p), p = ja(K, 7, 1 > ba || 536 > Ca || 14 > Sa ? 500 : 0)) : (h = dc(), ca(q, ha, a));
          R(ha, a);
        }
      }
    }
    function qa() {
      Ja(this, "blur", qa);
      R(0, 0);
    }
    function H(a) {
      S && (va && (va = Cb(va)), va = ja(Da, 0, 1400), S.innerHTML += " " + a);
    }
    function Da() {
      S.innerHTML = "";
    }
    function ya() {
      D && (Fa(D, "top", (h / 10 | 0) + "px"), y.innerHTML = " scrl:" + (h | 0));
    }
    function la(a, f, B, I, ha, z, ia) {
      N && (Fa(N, "top", ((a + B) / 10 | 0) + "px"), Fa(N, "height", (f / 10 | 0) + "px"), Fa(D, "height", (ha / 10 | 0) + "px"), Fa(r, "height", (xa.scrollHeight / 10 | 0) + "px"), W.innerHTML = "conY:" + B + "/sidY" + a + ", conH:" + I + "/sidH" + f + ", focY:" + z + " focH:" + ia);
    }
    function R(a, f) {
      ma && (Fa(ma, "top", (a / 10 | 0) + "px"), Fa(ma, "height", (f / 10 | 0) + "px"));
    }
    function F() {
      Ka.call(Ga);
    }
    function V() {
      L.fullscreenElement || L.fullscreen || L.webkitIsFullscreen || L.msFullscreenElement || U.fullScreen ? (rb(Ga, "id", "blog2slide-root"), e[1].parentNode.insertBefore(La, e[1]), ra(), L.onkeydown = b) : Ha && (Ia(La), kb(Ga, "id"), kb(Ha, "id"), Ha = L.onkeydown = q);
    }
    function ra() {
      Ha && kb(Ha, "id");
      g = 0 < g ? v < g ? v : g : 0;
      Ha = e[g];
      rb(Ha, "id", "blog2slide-current");
    }
    function b(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++g, ra();
      } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
        --g, ra();
      }
    }
    Ic = ba && 0 >= Za.conpare($a, "0.9");
    Rb = !(7.2 > O || Ic);
    Sb = function(a) {
      d ? Ta ? L.write('<script src="' + a + '">\x3c/script>') : gb("[DynamicScvriptLoader] Document already loaded! " + a) : Ta || c.length ? c.push(a) : m(a);
    };
    Tb = function(a) {
      d ? E("[DynamicScvriptLoader] " + a + " loaded.") : a === t ? m(c.shift()) : gb(a + " <> " + t);
    };
    var d = !Rb, l = Rb && 7.5 > O, t;
    if (!d) {
      var c = [];
      l && (Hc = !0);
      Ya(function() {
        m(c.shift());
      });
      var m = function(a) {
        if (t = a) {
          l ? vc[0].src = a : sa(nb, "script", {src:a});
        }
      };
    }
    var n = [], A = 5.5 <= w && 8 > w ? "keypress" : "keydown";
    if (!zc) {
      var X = Wa.transition !== q || Wa["-o-transition"] !== q || Wa["-moz-transition"] !== q || Wa["-webkit-transition"] !== q;
      pc(function(a) {
        if (a.H && ob) {
          a = a.G;
          var f = Oa(a), B = "", I;
          if ("A" === Va(f) && 1 === Pc(f).length) {
            var ha = Pa(f, "href");
            var z = ha.split("?")[0].split("#")[0].split(".");
            z = (z[z.length - 1] || "").toLowerCase();
            if ((I = 0 < ha.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + z + ".")) {
              oa(f, A, G);
              oa(a, "click", G);
              oa(f, "click", M);
              X && (B = a.naturalWidth + "px", Fa(a, "width", B));
              sb(f, "js-pica-thumbnail");
              for (z = f; z = Oa(z);) {
                if (eb(z, "caption")) {
                  sb(z, "js-captioned-thumbnail");
                  var ia = z;
                  var fa = Uc(ia);
                  break;
                }
              }
              n.push({u:f, L:ia, S:fa, Y:a.src, Z:B, N:ha, F:a, M:I ? 0 < ha.indexOf("/img/a/") ? 2 : 3 : 0 < ha.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      yb(function(a, f) {
        for (a = -1; f = n[++a];) {
          Ja(f.u, A, G), Ja(f.F, "click", G), Ja(f.u, "click", M);
        }
      });
    }
    var J = ["jsSidebarFixer1", "jsSidebarFixer2"], P = !(9 > w || O || 1 <= ba && 1.3 > ba || Jc), ea = !(5 > Ra || 2.2 > Bb || 6 > na(12) || Na(30) && 534 > Ca || Na(32) || 7 > w || 9 > O || 1 > ba), za = ea || 6 === w || 1 > ba, Q = 7.5 > O, Y, T, aa, ta = ed && Dc, k = 0, h = 0, x, u, C, p;
    Zc || zc || (zb(function(a) {
      if (a) {
        if (!ob) {
          return !0;
        }
        a = -1;
        var f;
        Y = wb("jsSide");
        T = ob;
        if (!Y) {
          return !0;
        }
        Eb(K);
        oc(K);
        aa = Jb(lc(Y), "div", {id:"jsSidebarFixer"});
        oa(U, "blur", ka);
        for (rc(aa, Z); 1 < db(Y).length;) {
          aa.appendChild(db(Y)[1]);
        }
        for (; f = J[++a];) {
          Wc(wb(f), da);
        }
        w || Ab || 2 > Sa || (x = Wa.perspective !== q || Wa.MozPerspective !== q || Wa["-webkit-perspective"] !== q);
        K();
        return !0;
      }
    }), yb(function() {
      for (var a = -1, f; f = J[++a];) {
        Xc(wb(f), da);
      }
      Ja(U, "blur", ka);
      Vc(aa, Z);
    }));
    var W, y, S, r, D, N, ma, va;
    zb(function(a) {
      if (a) {
        if (!ob) {
          return !0;
        }
        var f = db(xa);
        a = Jb(f[0], "div");
        if (ea) {
          Ua(a, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; f.length;) {
            a.appendChild(f.shift());
          }
          ab || (Ua(a, "width:100%;height:100%;overflow:auto;position:relative"), Ua(mb, "overflow:hidden"), Ua(xa, "overflow:hidden"));
          a = Qc(a, "div");
          Ua(a, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        sa(a, "div", q, ta ? "transform" + (x ? "3D" : "") : ea ? "pos:fixed" : "pos:absolute");
        f = sa(a, "div");
        W = sa(f, "span");
        y = sa(f, "span");
        S = sa(a, "div");
        r = sa(a, "div");
        Ua(r, "position:absolute;left:0;top:0;width:54px;background:#242");
        N = sa(a, "div");
        Ua(N, "position:absolute;left:0;width:54px;background:#363");
        D = sa(a, "div");
        Ua(D, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        ma = sa(N, "div");
        Ua(ma, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    Ya(function() {
      function a(ia, fa, pa, cb) {
        var Ba = cb ? "div" : "cite";
        if (0 === fa.indexOf("urn:isbn:")) {
          fa = fa.substr(9).toUpperCase().split("-").join("");
          if (13 === fa.length) {
            fa = fa.toString().slice(3, -1);
            for (var wa = 0, Qa = 0; 9 > Qa; Qa++) {
              wa += (fa.charAt(Qa) - 0) * (10 - Qa);
            }
            wa = (11 - wa % 11) % 11;
            wa = 10 === wa ? "X" : wa.toString();
            fa += wa;
          }
          10 === fa.length && (fa = "//www.amazon.co.jp/exec/obidos/ASIN/" + fa + "/itozyun-22/ref=nosim/");
        }
        pa = cb ? Jb(lc(B), Ba, {className:pa}) : sa(B, Ba, {className:pa});
        sa(pa, "a", 0 === fa.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:fa} : {href:fa}, ia);
      }
      if (ob) {
        for (var f = pb(ob, "blockquote"), B, I = -1, ha, z; B = f[++I];) {
          ha = Pa(B, "title"), z = Pa(B, "cite"), ha && z ? (kb(B, "title"), a(ha, z, "js-generated-link-in-blockquote", !0)) : z && (kb(B, "cite"), a(U.decodeURI ? decodeURI(z) : z, z, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Ka, Ga, La, Ha, e, g, v;
    Ya(function() {
      var a = wb("blog2slide-start");
      if (a) {
        var f = L.onfullscreenchange !== q ? "f" : L.onmozfullscreenchange !== q ? "mozF" : L.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        Ka = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== f || Ka ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', oa(a.firstChild, "click", F), a = Oa(a), Ga = Oa(a), e = pb(a, "section"), La = L.createElement("h1"), La.innerHTML = pb(xa, "h1")[0].innerHTML, v = e.length, e.splice(0, 0, La), 0 !== f ? oa(L, f + "ullscreenchange", V) : w ? oa(L, "MSFullscreenChange", V, !1) : oc(V)) : Ia(a);
      }
    });
  })();
  var Ib, Mb = !xc || .9 > ba || 8 > O || 5.5 > w, lb;
  (function() {
    function G(k) {
      return k === "" + k;
    }
    function M(k, h) {
      return Mb ? new F(k, h) : new xc(k, h);
    }
    function K(k, h, x, u, C) {
      var p = V.codeBlocks[V.codeBlocks.length - 1], W = R(), y = W - b;
      switch(x || 0) {
        case 1:
          V.initRegExpCount++;
          V.initRegExpTotal += y;
          V.initRegExpMax < y && (V.initRegExpMax = y, V.initRegExpSource = C.toString(), V.initRegExpInstance = C);
          break;
        case 2:
          p.decorateCount++;
          p.decorateTime += y;
          break;
        case 3:
          p.updateDOMTime += y;
      }
      if (W - ra < c && !u) {
        return b = W, k(h);
      }
      ja(ka, {U:k, X:h});
    }
    function ka(k) {
      ra = b = R();
      k.U(k.X);
    }
    function ca(k, h) {
      k && Ib[k] || (k = m.test(h) ? "default-markup" : "default-code");
      var x = !!Ib[k];
      x && K(P, k, 0, !0);
      return x;
    }
    function da() {
      function k(Ga, La, Ha) {
        La && (h.h = h.h || [], h.h.push({l:h, B:h.B, O:1, s:W, D:Ga, o:La, m:Ha, R:{}, v:0}));
      }
      var h = d, x = h.m, u = x[0], C = x[2], p = h.D, W = h.s, y = h.$.shift(), S = h.R;
      if (y) {
        var r = S[y], D;
        if (!(0 <= r)) {
          if (D = u[y.charAt(0)]) {
            var N = y.match(D[1]);
            r = D[0];
          } else {
            for (r = 0, u = -1; D = C[++u];) {
              if (N = y.match(D[1])) {
                r = D[0];
                break;
              }
            }
          }
          !(D = G(r)) || N && G(N[1]) || (D = !1, r = 11);
          D || (S[y] = r);
        }
        C = h.v;
        S = y.length;
        h.v += S;
        if (D) {
          D = N[1];
          u = y.indexOf(D);
          var ma = D.length, va = u + ma;
          N[2] && (va = S - N[2].length, u = va - ma);
          k(p + C, y.substr(0, u), x);
          if (ma && ca(r, D)) {
            k(p + C + u, D);
            var Ka = !0;
          }
          k(p + C + va, y.substr(va), x);
          h.h && h.h.length && (d = h.h.shift());
          Ka || (d !== h ? K(X, q, 2) : K(da, q, 2));
        } else {
          W.push(p + C, r), K(da, q, 2);
        }
      } else {
        h.l ? (d = h.l.h.shift()) ? K(X, q, 2) : (d = h.l, K(da, q, 2)) : K(Q, q, 2);
      }
    }
    function Z(k) {
      if (J.length) {
        var h = J.shift(), x = ya[h];
        if (x.pop) {
          ya[h] = x = M(x[0], x[1]);
        } else if (G(x)) {
          ya[h] = x = M(x);
        } else {
          return Z(k);
        }
        K(Z, k, 1, !1, x);
      } else {
        K(P, k);
      }
    }
    function qa(k) {
      for (var h, x = k.firstChild; x; x = x.nextSibling) {
        var u = x.nodeType;
        h = 1 === u ? h ? k : x : 3 === u ? n.test(x.nodeValue) ? k : h : h;
      }
      return h === k ? q : h;
    }
    Ib = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var H = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Da = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ya = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), R = Nb.now || function() {
      return +new Nb();
    }, F, V = {useRegExpCompat:Mb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var ra = R();
    var b, d, l, t, c = 5 > w ? 60 : 5.5 > w ? 0 : Mb ? 20 : 10, m, n;
    lb = [function(k) {
      U.RegExpCompat = F = k;
    }, function() {
      m = M("^\\s*<");
      n = M("\\S");
    }];
    Mb || (lb[1](), lb = q);
    var A = function() {
      var k = d, h = k.V, x = ea(k.B, k.O), u = k.o = x.o;
      k.I = x.I;
      ca(h, u) || (d = q, K(ta, q, 0, !0));
    };
    var X = function() {
      var k = d;
      k.$ = k.o.match(k.m[1]) || [];
      k.s.push(k.D, 0);
      K(da, q, 2);
    };
    var J = [];
    var P = function(k) {
      function h(r) {
        var D = r;
        0 <= r && (D = Da[r]);
        0 <= D[1] && (D[1] = x(D[1]));
        return D;
      }
      function x(r) {
        var D = r;
        return 0 <= r && (D = ya[r], !D.exec) ? (J.push(r), r) : D;
      }
      var u = d, C = Ib[k];
      G(C) && (C = Ib[k] = Ib[C]);
      var p = C[0];
      if (0 <= p) {
        p = H[p];
        if (0 <= p["-num"]) {
          var W = p["-num"];
          delete p["-num"];
          for (var y = -1; 9 > y;) {
            p["" + ++y] = W;
          }
        }
        C[0] = p;
      }
      for (var S in p) {
        p[S] = h(p[S]);
      }
      C[1] = x(C[1]);
      p = C[2];
      y = 0;
      for (W = p.length; y < W; ++y) {
        p[y] = h(p[y]);
      }
      J.length ? K(Z, k, 2) : (u.m ? u.l && (u.l.h[0].m = C) : u.m = C, K(X, q, 1));
    };
    var ea = function(k, h) {
      function x(S) {
        var r = S.nodeType;
        if (1 === r) {
          if (!eb(S, "nocode")) {
            for (r = S.firstChild; r; r = r.nextSibling) {
              x(r);
            }
            r = Va(S);
            if ("BR" === r || "LI" === r) {
              u[W] = "\n", p[W << 1] = C++, p[W++ << 1 | 1] = S;
            }
          }
        } else if (3 === r || 4 === r) {
          if (r = S.nodeValue) {
            r = h ? r.split("\r\n").join("\n").split("\r").join("\n") : r.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), u[W] = r, p[W << 1] = C, C += r.length, p[W++ << 1 | 1] = S;
          }
        }
      }
      var u = [], C = 0, p = [], W = 0;
      x(k);
      var y = u.join("");
      "\n" === y.charAt(y.length - 1) && (y = y.substr(0, y.length - 1));
      return {o:y, I:p};
    };
    var za = function(k, h, x) {
      function u(r) {
        var D = r.nodeType;
        if (1 === D && !eb(r, "nocode")) {
          if ("BR" === Va(r)) {
            C(r), r.parentNode && Ia(r);
          } else {
            for (r = r.firstChild; r; r = r.nextSibling) {
              u(r);
            }
          }
        } else if ((3 === D || 4 === D) && x) {
          var N = r.nodeValue, ma = N.indexOf("\r\n"), va = 2;
          -1 === ma && (ma = N.indexOf("\n"), va = 1);
          -1 === ma && (ma = N.indexOf("\r"));
          -1 !== ma && (D = N.substr(0, ma), r.nodeValue = D, (N = N.substr(ma + va)) && mc(r, N), C(r), D || Ia(r));
        }
      }
      function C(r) {
        function D(ma, va) {
          var Ka = va ? ma.cloneNode(!1) : ma, Ga = ma.parentNode;
          if (Ga) {
            Ga = D(Ga, 1);
            var La = ma.nextSibling;
            Ga.appendChild(Ka);
            for (var Ha = La; Ha; Ha = La) {
              La = Ha.nextSibling, Ga.appendChild(Ha);
            }
          }
          return Ka;
        }
        for (; !r.nextSibling;) {
          if (r = r.parentNode, !r) {
            return;
          }
        }
        r = D(r.nextSibling, 0);
        for (var N; (N = r.parentNode) && 1 === N.nodeType;) {
          r = N;
        }
        W.push(r);
      }
      for (var p = L.createElement("li"); k.firstChild;) {
        p.appendChild(k.firstChild);
      }
      for (var W = [p], y = 0; y < W.length; ++y) {
        u(W[y]);
      }
      if (h === (h | 0)) {
        if (10 <= h && 7.2 > O) {
          var S = L.createElement("ol");
          S.innerHTML = '<li value="' + h + '">' + p.innerHTML + "</li>";
          W[0] = S.firstChild;
        } else {
          rb(p, "value", h);
        }
      }
      S = sa(k, "ol", {className:"linenums"});
      k = Math.max(0, h - 1 | 0) || 0;
      y = 0;
      for (h = W.length; y < h; ++y) {
        p = W[y], Xb(p, "L" + (y + k) % 10), p.firstChild || Rc(p, "\u00a0"), S.appendChild(p);
      }
    };
    var Q = function() {
      var k = d, h = k.o, x = h.length, u = 0, C = k.I, p = C.length, W = 0, y = k.s, S = y.length, r = 0;
      y[S] = x;
      var D, N;
      for (N = D = 0; N < S;) {
        y[N] !== y[N + 2] ? (y[D++] = y[N++], y[D++] = y[N++]) : N += 2;
      }
      S = D;
      for (N = D = 0; N < S;) {
        var ma = y[N], va = y[N + 1];
        for (N += 2; N + 2 <= S && y[N + 1] === va;) {
          N += 2;
        }
        y[D++] = ma;
        y[D++] = va;
      }
      y.length = D;
      k = k.B;
      S = "";
      k && (S = k.style.display, Fa(k, "display", "none"));
      for (; W < p;) {
        D = C[W + 2] || x;
        ma = y[r + 2] || x;
        N = Math.min(D, ma);
        va = C[W + 1];
        var Ka;
        if (1 !== va.nodeType && (Ka = h.substring(u, N))) {
          9 > w && (Ka = Ka.split("\n").join("\r"));
          var Ga = Jb(va, "span", {className:la[y[r + 1]]}, Ka);
          Ia(va);
          u < D && (C[W + 1] = mc(Ga, h.substring(N, D)));
        }
        u = N;
        u >= D && (W += 2);
        u >= ma && (r += 2);
      }
      k && Fa(k, "display", S);
      d = q;
      K(ta, q, 3, !0);
    };
    var Y = [], T;
    V.readyTime = R() - ra;
    zb(function(k) {
      if (k) {
        k = [xb("pre"), xb("code"), xb("xmp")];
        for (var h = 0; h < k.length; ++h) {
          for (var x = 0, u = k[h].length; x < u; ++x) {
            aa(k[h][x]);
          }
        }
        return !0;
      }
    });
    var aa = function(k) {
      Y.push(k);
      T = Y.length;
      1 === T && (wc ? ja(wc, ta) : lb ? lb.push(function() {
        ja(ta);
      }) : ja(ta));
    };
    var ta = function() {
      function k(W, y) {
        return (W.split(y)[1] || "").split(" ")[0];
      }
      if (!d) {
        T !== Y.length && t && t(T - Y.length, T);
        var h = Y.shift();
        if (h) {
          ra = R();
          if (eb(h, "prettyprint") && !eb(h, "prettyprinted")) {
            for (var x = !1, u = h.parentNode; u !== xa; u = u.parentNode) {
              var C = Va(u);
              if (("PRE" === C || "XMP" === C || "CODE" === C) && eb(u, "prettyprint")) {
                x = !0;
                break;
              }
            }
            if (!x) {
              x = h.className;
              sb(h, "prettyprinted");
              u = !1;
              if (!u) {
                u = k(x, "lang-") || k(x, "language-");
                var p;
                !u && (p = qa(h)) && "CODE" === Va(p) && (u = k(p.className, "lang-") || k(p.className, "language-"));
              }
              C = Va(h);
              "PRE" === C || "XMP" === C ? C = 1 : (C = h.currentStyle, p = L.defaultView, C = (C = C ? C.whiteSpace : p && p.getComputedStyle ? p.getComputedStyle(h, null).getPropertyValue("white-space") : 0) && "pre" === C.substr(0, 3));
              p = !1;
              (p = "true" === p || +p) || (p = k(x, "linenums:") || eb(h, "linenums"), p = p.length ? +p : p);
              p && za(h, p, C);
              d = {V:u, B:h, aa:p, O:C, D:0, v:0, R:{}, s:[]};
              V.codeBlocks.push({elm:h, lang:u, readyTime:R() - ra, decorateTime:0, decorateCount:0, updateDOMTime:0});
              K(A);
              return;
            }
          }
          K(ta, q, 0, !0);
        } else {
          l && l(V);
        }
      }
    };
    U.PR = {RegExpProxy:M, prettifyElement:aa, registerCompleteHandler:function(k, h) {
      l = k;
      t = h;
    }};
  })();
  var vc = L.scripts || xb("script");
  var Aa = vc[vc.length - 1].src.split("/");
  --Aa.length;
  "js" === Aa[Aa.length - 1] && --Aa.length;
  (Aa = Aa.join("/")) && (Aa += "/");
  E("[p_assetUrl] " + Aa);
  var Zc = dd || "1" === Pa(xa, "mob");
  Qb = (Zc ? "mb" : "pc") + "/";
  Ya(function() {
    var G;
    (G = wb("logger")) || alert("#logger not found!");
    G ? (E = bz, gb = function(M) {
      sa(G, "DIV", {style:{color:"red"}}, M);
    }, U.onerror = function(M, K, ka) {
      gb(M + ", " + K + ", " + ka);
      return !0;
    }) : U.console ? (E = console.log, gb = console.error) : O ? (E = hb, gb = opera.postError) : E = gb = hb;
    for (; Vb.length;) {
      E(Vb.shift());
    }
    for (; Wb.length;) {
      gb(Wb.shift());
    }
    Vb = Wb = q;
    function bz(M) {
      sa(G, "DIV", q, M);
    }
    bz = !1;
  });
  6.1 > Ra && (Eb ? Eb(jc) : oa(U, "scroll", jc));
  yb(Lc);
  6.1 > Ra && (Eb ? Eb(kc) : oa(U, "scroll", kc));
  yb(Mc);
  10 > w && (11 !== bd || 5 !== w) || (9 > O || 1 > ba || !vb && !U.addEventListener ? L.write('<link href="' + Aa + "css/" + Qb + gc + '" rel="stylesheet"' + (8 > O ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > O || 1.5 > ba || 534 > Ca || 5 > Ra || 7 > Sa || 3 > Bb) && Ya(function() {
    sa(nb, "link", {href:Aa + "css/" + Qb + gc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Mb) {
    if (Rb) {
      var wc = function(G) {
        U.RegExpCompat = bz;
        wc = q;
        Sb(Aa + "js/regexpcompat.js");
        function bz(M) {
          for (var K; K = lb.shift();) {
            K(M);
          }
          lb = q;
          ja(G);
          Tb(Aa + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      U.RegExpCompat = function(G) {
        for (var M; M = lb.shift();) {
          M(G);
        }
        lb = q;
        Tb(Aa + "js/regexpcompat.js");
      }, Sb(Aa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

