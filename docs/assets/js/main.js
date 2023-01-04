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
(function(Ga, R, eb, Zb, L, Eb, yc, ub, Oa, Fb, Gb, $b, Hb, v) {
  function ca(D) {
    if (Ga[0] === D) {
      return Ha === Ha + "" ? Oa(Ha) : Ha;
    }
  }
  function va(D) {
    var P = Ga[3];
    if (Ga[2] === D) {
      return P === P + "" ? Oa(P) : P;
    }
  }
  function Ib() {
    return 6 > z ? ra.scrollTop : z ? fb.scrollTop : R.pageYOffset;
  }
  var ra = L.body, Ba = ra.style, fb, $a, ab, Ha = Ga[1], z = ca(2) || ca(3), bb = ca(7), pb = ca(5) || ca(6), M = ca(8) || ca(9), I = ca(11) || ca(12), vb = I && 0 <= Ga.conpare(Ha, "1.9.1"), Jb = ca(13), Ia = ca(15), gb = ca(16) || ca(17), ac = ca(10) || ca(25), Pa = ca(20) || ca(22), zc = ca(23), wb = ca(21), bc = ca(24), cc = Pa && Oa(Eb.userAgent.split("Edg/")[1]), Ac = Oa(Eb.appVersion.split("Trident/")[1]) + 4, Kb = va(35) || va(36) || va(37), Bc = 0 <= Eb.userAgent.indexOf("Googlebot/"), 
  Lb = (bb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : 7.2 > M ? "opr70" : 8 > M ? "opr72" : 9.5 > M ? "opr" + (M | 0) : I && !vb ? 1.4 <= I ? "gck19" : 1.3 <= I ? "gck13" : 1 <= I ? "gck12" : 0.9 <= I ? "gck09" : 0.8 <= I ? "gck08" : "gck07" : "modern") + ".css", xb = "", Cc = va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10), dc, ec = Ba.transform !== v ? "transform" : Ba["-o-transform"] !== v ? "-o-transform" : Ba["-ms-transform"] !== v ? "-ms-transform" : 
  Ba.MozTransform !== v ? "-moz-transform" : Ba["-webkit-transform"] !== v ? "-webkit-transform" : "", La = [], fc = [], Ja = [], gc, hc, yb, ic, Mb, Nb, jc = !1;
  525 > Ia || 10 > M || I && !vb || 2.2 > wb || ca(25) || 10 > ca(3) || va(32) || va(30) || va(3);
  var qa, zb, Ab, kc, Dc = !!ra.getBoundingClientRect, Ob, lc, Pb, mc, hb = ub.now || function() {
    return +new ub();
  };
  (function() {
    function D() {
      for (var E, T = 0, Y = hb(); T < da.length;) {
        Y < da[0].t ? ++T : (E = da.splice(T, 1)[0], E.f(E.p));
      }
      ha = da.length ? Gb(D, pa) : 0;
    }
    function P() {
      for (var E, T = 0; T < J.length; ++T) {
        E = J[T], E.f();
      }
    }
    function G() {
      ja && (ja = clearInterval(ja));
    }
    function U() {
      ha && (ha = $b(ha));
    }
    Ab = function(E) {
      J.length || (ja = Hb(P, S));
      J.push({f:E, C:++ka});
      return ka;
    };
    kc = function(E) {
      for (var T = J.length, Y; Y = J[--T];) {
        if (Y.C === E) {
          J.splice(T, 1);
          J[0] || G();
          break;
        }
      }
      return 0;
    };
    Ob = function() {
      ja && (G(), ja = Hb(P, S));
    };
    lc = G;
    var J = [], S = 500, ka = 0, ja;
    if (5 > z || bb) {
      R._wdb_onlooptimer = P, P = "_wdb_onlooptimer()";
    }
    qa = function(E, T, Y) {
      da.length || (ha = Gb(D, pa));
      da.push({f:E, p:T, C:++ia, t:hb() + (pa < Y ? Y : pa)});
      return ia;
    };
    zb = function(E) {
      for (var T = da.length, Y; Y = da[--T];) {
        if (Y.C === E) {
          da.splice(T, 1);
          break;
        }
      }
      return 0;
    };
    Pb = function() {
      ha && (U(), ha = Gb(D, pa));
    };
    mc = U;
    var da = [], pa = 16, ia = 0, ha;
    if (5 > z || bb) {
      R._wdb_ontimer = D, D = "_wdb_ontimer()";
    }
  })();
  var ib, cb, Va, nc, Ca, Qa, oc, Qb, Ra, Bb, pc, Rb, Ka, Wa, Aa, wa, Xa, Sa, jb, qc, Cb, Ma, Ya, rc, Ta, kb, sc;
  (function() {
    function D(a, d, b) {
      var l = ["<", a], m = 1, x, O;
      if (d) {
        for (x in d) {
          var K = d[x];
          if (null != K && "" !== K) {
            if ("style" === x) {
              l[++m] = ' style="';
              for (O in K) {
                for (var X = ++m, ba, V = [], ea = O.split(""), na = ea.length; na;) {
                  ba = ea[--na], "A" <= ba && "Z" >= ba && (ba = "-" + ba.toLowerCase()), V[na] = ba;
                }
                l[X] = V.join("") + ":" + K[O] + ";";
              }
              l[++m] = '"';
            } else {
              "className" === x && (x = "class"), l[++m] = " " + x + '="' + K + '"';
            }
          }
        }
      }
      l[++m] = ">";
      null != b && (E && "font" !== a ? l[++m] = "<FONT>" + P(b) + "</FONT>" : l[++m] = P(b));
      l[++m] = "</" + a + ">";
      return l.join("");
    }
    function P(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function G(a) {
      var d = a.split("-"), b = d.length;
      if (2 > b) {
        return a;
      }
      for (; 1 < b;) {
        a = d[--b], d[b] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return d.join("");
    }
    function U(a) {
      return J(L, a);
    }
    function J(a, d) {
      for (var b = "*" === d && 6 > z ? "*" !== d ? a.all.tags(d.toUpperCase()) : a.all : a.getElementsByTagName(d), l = [], m = 0, x = b.length; m < x; ++m) {
        l[m] = b[m];
      }
      return l;
    }
    function S(a) {
      return E ? a.parentElement : a.parentNode;
    }
    function ka(a, d, b, l, m, x) {
      if (E) {
        var O = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = Qa(2 > a ? Ca(d) : d);
        K = 2 > a ? K.indexOf(d) + a : K.length;
        d.insertAdjacentHTML(O, D(b, l, m));
        d = Qa(d)[K];
        null != m && ("font" === b ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (T) {
        d = L.createElement(D(b, l));
      } else {
        d = x ? L.createElementNS("http://www.w3.org/2000/svg", b) : L.createElement(b);
        if (l) {
          for (O in l) {
            if ((a = l[O]) || 0 === a) {
              switch(O) {
                case "class":
                case "className":
                  Cb(d, a);
                  break;
                case "style":
                  x = d.style;
                  for (K in a) {
                    x[K] = a[K];
                  }
                  break;
                default:
                  Xa(d, O, a);
              }
            }
          }
          !M || "a" !== b && "A" !== b || !l.href || l["tag-index"] || l.tagIndex || Xa(d, "tagIndex", "-0");
        }
        Y || null != m && ja(d, m);
      }
      return d;
    }
    function ja(a, d) {
      if (E) {
        return ka(2, a, "font", v, d);
      }
      var b = L.createTextNode("" + d);
      a.appendChild(b);
      return b;
    }
    function da(a, d) {
      9 > z ? a.className = d : a.setAttribute("class", d);
    }
    function pa(a, d) {
      return -1 !== (" " + a.className + " ").indexOf(" " + d + " ");
    }
    function ia(a, d, b) {
      if (8 > M || 5.5 > z) {
        d = G(d);
      }
      a.style[d] = b;
    }
    function ha(a) {
      return 5.5 > z ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var E = 5 > z;
    fb = U("html")[0];
    $a = U("head")[0];
    ib = function(a) {
      return R[a] || L[a] || L.getElementById(a);
    };
    cb = U;
    Va = J;
    nc = function(a, d) {
      var b = [], l = 0, m, x = -1;
      if (9 > z || !a.getElementsByClassName) {
        var O = 6 > z ? a.all : a.getElementsByTagName("*");
      } else {
        var K = !0;
        O = a.getElementsByClassName(d);
      }
      for (m = O.length; l < m; ++l) {
        var X = O[l];
        if (K || (E || 1 === X.nodeType) && pa(X, d)) {
          b[++x] = X;
        }
      }
      return b;
    };
    Ca = S;
    Qa = function(a) {
      a = E ? a.children : a.childNodes;
      for (var d = [], b = a.length; b;) {
        d[--b] = a[b];
      }
      return d;
    };
    oc = function(a) {
      var d = !(7.03 < M && 7.2 > M) && a.children;
      a = d ? d : a.childNodes;
      for (var b = [], l = a.length, m = -1, x; l;) {
        if (x = a[--l], d || 1 === x.nodeType) {
          E && "FONT" === x.tagName || (b[++m] = x);
        }
      }
      return b;
    };
    Qb = function(a) {
      return E ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    Ra = function(a, d, b, l, m) {
      d = ka(2, a, d, b, l, m);
      E || (a.appendChild(d), Y && null != l && ja(d, l));
      return d;
    };
    Bb = function(a, d, b, l, m) {
      d = ka(0, a, d, b, l, m);
      E || (S(a).insertBefore(d, a), Y && null != l && ja(d, l));
      return d;
    };
    pc = ja;
    Rb = function(a, d) {
      var b;
      if (E) {
        return ka(1, a, "font", v, d);
      }
      var l = L.createTextNode("" + d);
      (b = a.nextSibling) ? Ca(a).insertBefore(l, b) : Ca(a).appendChild(l);
      return l;
    };
    Ka = function(a) {
      E ? a.outerHTML = "" : Ca(a).removeChild(a);
    };
    Wa = function(a, d) {
      if (a.contains) {
        return a.contains(d);
      }
      for (; d && d !== fb;) {
        if (d = Ca(d), a === d) {
          return !0;
        }
      }
    };
    var T = 9 > z, Y = T;
    Aa = function(a) {
      return a.tagName.toUpperCase();
    };
    wa = function(a, d) {
      if (8 > M || 5.5 > z) {
        d = G(d);
      }
      var b = a.getAttribute(d);
      return M && "tabIndex" === d ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    };
    Xa = function(a, d, b) {
      if (M && "tab-index" === d) {
        "-1" === b ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", b);
      } else {
        if (8 > M || 5.5 > z) {
          d = G(d);
        }
        a.setAttribute(d, b);
      }
    };
    Sa = function(a, d) {
      if (M && "tab-index" === d) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > M || 5.5 > z) {
          d = G(d);
        }
        a.removeAttribute(d);
      }
    };
    jb = function(a, d) {
      if (M && "tab-index" === d) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > M || 5.5 > z) {
        d = G(d);
      }
      return a.hasAttribute ? a.hasAttribute(d) : null != a.getAttribute(d);
    };
    qc = function(a) {
      return a.className;
    };
    Cb = da;
    Ma = pa;
    Ya = function(a, d) {
      var b;
      if (!pa(a, d)) {
        if (b = a.className) {
          b += " ";
        }
        da(a, b + d);
      }
    };
    rc = function(a, d) {
      if (pa(a, d)) {
        var b = a.className.split(" ");
        b.splice(b.indexOf(d), 1);
        da(a, b.join(" "));
      }
    };
    Ta = ia;
    kb = function(a, d) {
      var b, l = -1, m;
      if (5.5 > z) {
        if (b = ha(a)) {
          for (b = b.split(";"); m = b[++l];) {
            ia(a, m.split(":")[0], "");
          }
        }
        if (d) {
          for (l = -1, b = d.split(";"); m = b[++l];) {
            var x = m.split(":")[0];
            ia(a, x, m.substr(x.length + 1));
          }
        }
      } else if (7.1 > M) {
        if (a.setAttribute("style", ""), d) {
          for (b = d.split(";"); m = b[++l];) {
            m = m.split(":"), ia(a, m[0], m[1]);
          }
        }
      } else {
        9 > M || 1 > I ? d ? a.setAttribute("style", d) : a.removeAttribute("style") : a.style.cssText = d;
      }
    };
    sc = ha;
    La.splice(0, 0, function() {
      function a(X) {
        X = Qa(X);
        for (var ba = X.length, V, ea, na; ba;) {
          if (V = X[--ba], ea = V.nodeType, 8 === ea) {
            d && O.push(V);
          } else if (1 === ea) {
            switch(ea = Aa(V), "/" === ea.charAt(0) && (ea = ea.substr(1), K[ea] = !0), ea) {
              case "STYLE":
                if (7.2 <= M && 9 > M) {
                  break;
                }
              case "LINK":
                E || l || Wa($a, V) || x.push(V);
                break;
              case "META":
                ea = wa(V, "name") || wa(V, "property");
                for (na = m.length; na;) {
                  if (0 === ea.indexOf(m[--na])) {
                    O.push(V);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Bc || jb(V, "async")) {
                  break;
                }
                if (b) {
                  V.innerText = "";
                  b = !1;
                  break;
                }
              case "NOSCRIPT":
                if (jb(V, "skip-cleanup")) {
                  break;
                }
              case "!":
                O.push(V);
                break;
              case "SOURCE":
                R.HTMLSourceElement || O.push(V);
                break;
              default:
                K[ea] ? O.push(V) : Qa(V).length && a(V);
            }
          }
        }
        for (; x[0];) {
          $a.appendChild(x.pop());
        }
        for (; O[0];) {
          Ka(O.pop());
        }
      }
      ab = ib("jsMain");
      var d = !(8 > M || 5 > z || bb || .9 > I), b = hc, l = 7 > z, m = ["og:", "twitter:", "fb:"], x = [], O = [], K = {};
      a(fb);
    });
  })();
  var Z, xa, Da, db, Sb, lb, qb, rb, Tb, Ub, tc, uc, vc, sb, ya, Vb;
  (function() {
    function D() {
      return y ? u ? 2 : A ? 3 : 1 : 0;
    }
    function P(e) {
      xa(R, "load", P);
      P = v;
      U(La, e, !0);
      Da = La = v;
    }
    function G(e, g) {
      qb(function() {
        var t = ha(e);
        g(t);
        t.addListener(g);
        return !0;
      });
    }
    function U(e, g, t) {
      for (var r = 0; r < e.length; ++r) {
        !0 === e[r](g) && (e.splice(r, 1), --r);
      }
      t && (e.length = 0);
    }
    function J(e, g, t) {
      La || T.length || qa(S);
      T.push(e, g, t);
    }
    function S() {
      var e = T, g;
      for (T = []; g = e.shift();) {
        U(g, e.shift(), e.shift());
      }
    }
    function ka(e) {
      var g = e || event;
      e = a[g.type];
      var t = -1, r, C;
      z ? (g.target = g.srcElement, g.preventDefault = bz, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.K = g.stopPropagation, g.stopPropagation = function() {
        C = !0;
      });
      for (; r = e[++t];) {
        r.j === this ? (this.g = r.i, z && (g.currentTarget = this), this.g(g), z ? (this.g = eb, this.g = v) : delete this.g) : 7.2 > M && this === L && r.j === R && (R.g = r.i, R.g(g), delete R.g);
      }
      if (z) {
        return g.preventDefault = g.stopPropagation = eb, g.preventDefault = g.stopPropagation = v, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (m = !0), C && !m && g.K(), g.K = g.stopPropagation = v);
      function bz() {
        g.returnValue = !1;
      }
      bz = !1;
    }
    function ja() {
      var e = 9 === E.offsetWidth;
      sb !== e && J(fc, sb = e);
    }
    function da() {
      !La && k && (zb(k), k = qa(pa));
    }
    function pa() {
      k = 0;
      U(f);
    }
    function ia(e) {
      La || U(w, e);
    }
    var ha = R.matchMedia, E, T = [];
    La.push(function() {
      G = v;
      E = Ra(ra, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Da(function() {
        T.length && qa(S);
      });
    });
    Z = function(e, g, t, r) {
      if (l) {
        e.addEventListener(g, t, r ? Y ? r : r.capture || !0 === r : !1);
      } else {
        var C = {j:e, i:t};
        r = a[g];
        var fa = "on" + g, sa, Za;
        if (r) {
          for (sa = r.length; Za = r[--sa];) {
            if (Za.j === e && Za.i === t) {
              return;
            }
          }
          a[g].push(C);
        } else {
          a[g] = r = [C], d || (g = e[fa], "function" === typeof g && g !== ka && r.unshift({j:e, i:g}));
        }
        d ? e.attachEvent(fa, ka) : e[fa] = ka;
      }
    };
    xa = function(e, g, t, r) {
      if (l) {
        e.removeEventListener(g, t, r ? Y ? r : r.capture || !0 === r : !1);
      } else {
        r = a[g];
        g = "on" + g;
        var C, fa, sa;
        if (r) {
          for (C = r.length; fa = r[--C];) {
            fa.j === e && (fa.i === t ? r.splice(C, 1) : sa = !0);
          }
          sa || (d ? e.detachEvent(g, ka) : z ? (e[g] = eb, e[g] = null) : delete e[g]);
        }
      }
    };
    var Y = !z && !bb && (new yc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), a = {}, d = !1, b = 525.13 > Ia, l = !b && !bb && R.addEventListener, m;
    b && fb.addEventListener("click", function(e) {
      if (m) {
        return m = !1, e.preventDefault(), !1;
      }
    });
    Da = function(e) {
      La.push(e);
    };
    db = function(e) {
      x && x.push(e);
    };
    var x = [];
    if (419.3 >= Ia) {
      var O = function() {
        if (O) {
          var e = L.readyState;
          "loaded" === e || "complete" === e ? (O = v, P()) : qa(O);
        }
      };
      qa(O);
    } else {
      Z(R, "load", P);
    }
    z || .9 <= I && 1.8 > I ? Z(R, "unload", function(e) {
      U(x, e, !0);
    }) : x = v;
    qb = function(e) {
      fc.push(e);
    };
    Da(function() {
      ja();
      Ab(ja);
    });
    Ub = function(e, g) {
      if (K) {
        Z(e, "focusin", g);
      } else if (X) {
        Z(e, "DOMFocusIn", g);
      } else {
        if (V) {
          ta || (ta = Hb(n, 333));
        } else if (ba || ea) {
          Z(L, "focus", Ea, !0);
        } else {
          return;
        }
        for (var t = na, r = 0, C = t.length; r < C; ++r) {
          if (t[r] === e && t[r + 1] === g) {
            return;
          }
        }
        t.push(e, g);
      }
    };
    tc = function(e, g) {
      if (K) {
        Z(e, "focusin", g);
      } else if (X) {
        Z(e, "DOMFocusIn", g, !1);
      } else {
        for (var t = na, r = 0, C = t.length; r < C; ++r) {
          if (t[r] === e && t[r + 1] === g) {
            t.splice(r, 2);
            t.length || (V ? ta = kc(ta) : (ba || ea) && xa(L, "focus", Ea, !0));
            break;
          }
        }
      }
    };
    var K = 6 <= z || pb || 52 <= I || 15 <= Pa || 534 <= Ia || 5 <= gb || zc || 4 <= wb || 4 <= bc || 11.6 <= ca(8) || 12 <= ca(9), X = 8 <= M || Pa || wb || bc || Ia || gb, ba = 8 > M, V = 6 > z, ea = 52 > I || Jb;
    if (ea || ba) {
      var na = [];
      var Ea = function(e) {
        var g = na, t = ba ? L.activeElement : e.target;
        if (ba) {
          var r = e;
          e = {type:"focusin", target:t, preventDefault:function() {
            r.preventDefault();
          }, stopPropagation:function() {
            r.stopPropagation();
          }};
        }
        for (var C = 0, fa = g.length; C < fa; ++C) {
          var sa = g[C];
          (sa === t || Wa(sa, t)) && g[C + 1].call(sa, e);
        }
      };
    } else if (V) {
      na = [];
      var ta, Fa, oa, n = function() {
        oa = R.onerror;
        R.onerror = q;
        var e = L.activeElement;
        if (Fa !== e) {
          Fa = e;
          for (var g = na, t, r = 0, C = g.length; r < C; ++r) {
            t = g[r], (t === e || Wa(t, e)) && g[r + 1].apply(t, [{target:e}]);
          }
        }
        R.onerror = oa;
        oa = v;
      }, q = function() {
        R.onerror = oa;
        oa = Fa = v;
        return !0;
      };
    }
    Tb = function(e) {
      Ja && Ja.push(e);
    };
    var B = 60 > I || Jb, y, A, u;
    if (89 <= I || 89 <= Pa || Kb && 79 <= cc || ha && (ha("(forced-colors:none)").matches || ha("(forced-colors:active)").matches)) {
      Vb = !0, G("(forced-colors:active)", function(e) {
        y = e.matches;
        ya = D();
        J(Ja, ya);
      });
    } else if (10 <= z || pb || Kb && cc) {
      Vb = !0, G("(-ms-high-contrast:black-on-white)", function(e) {
        y = A = e.matches;
        ya !== D() && (ya = D(), J(Ja, ya));
      }), G("(-ms-high-contrast:white-on-black)", function(e) {
        y = u = e.matches;
        ya !== D() && (ya = D(), J(Ja, ya));
      }), G("(-ms-high-contrast:active)", function(e) {
        y = e.matches;
        ya !== D() && (ya = D(), J(Ja, ya));
      });
    } else if (Kb && (z || I && 0 <= Ga.conpare(Ha, "1.8.1") || Jb)) {
      var Q = function() {
        function e(r, C) {
          if (C && "transparent" === r) {
            return 382.5;
          }
          if ("#" === r.charAt(0)) {
            return parseInt("0x" + r.substr(1, 2), 16) + parseInt("0x" + r.substr(3, 2), 16) + parseInt("0x" + r.substr(5, 2), 16);
          }
          var fa = r.split("(")[1].split(",");
          return Oa(fa[0]) + Oa(fa[1]) + Oa(fa[2]);
        }
        var g = L.defaultView;
        var t = g ? g.getComputedStyle(E, null) : E.currentStyle;
        g = (t && t.color || "").split(" ").join("");
        t = (t && t.backgroundColor || "").split(" ").join("");
        g && (y = "#123456" !== g && "rgb(18,52,86)" !== g, A = e(g) < e(t, !0), u = e(g) > e(t, !0), ya !== D() && (ya = D(), J(Ja, ya, B)));
      };
      qb(function(e) {
        if (e) {
          return Ta(E, "color", "#123456"), Ta(E, "backgroundColor", "#123456"), B ? (Q(), Ja = v) : Ab(Q), Q = v, !0;
        }
      });
    } else {
      Ja = D = v;
    }
    rb = function(e) {
      c.push(e);
    };
    var c = [], h = 7.5 <= M && 8 > M;
    h && function() {
      for (var e = L.images, g = e.length, t; g;) {
        t = e[--g], t.J = t.src, Sa(t, "src");
      }
    }();
    Da(function() {
      function e() {
        r ? (C = t[--r], h && Xa(C, "src", C.J), gc(g, h ? C.J : C.src)) : rb = c = v;
      }
      function g(sa) {
        U(c, {G:C, H:sa}, !r);
        e();
      }
      var t = L.images || cb("img"), r = t.length;
      if (12 > M || 532 > Ia) {
        e();
      } else {
        for (; r;) {
          var C = t[--r];
          var fa = 9 > z ? C.complete : 0 <= C.naturalWidth ? C.naturalWidth : C.width;
          J(c, {G:C, H:fa}, !r);
        }
        rb = c = v;
      }
    });
    Sb = function(e) {
      f.push(e);
    };
    var f = [], k;
    Z(R, "resize", da);
    db(function() {
      k && $b(k);
      xa(R, "resize", da);
    });
    lb = function(e) {
      w.push(e);
    };
    var w = [], p = 1 > I || 1.2 <= I && 1.8 > I || 7.2 >= M, F;
    p ? Ab(function() {
      var e = R.pageYOffset;
      F !== e && (F = e, ia({type:"scroll", cancelable:!1, stopPropagation:eb, preventDefault:eb}));
    }) : Z(R, "scroll", ia, {passive:!0});
    db(function() {
      p || xa(R, "scroll", ia, {passive:!0});
    });
    uc = function(e, g) {
      if (H) {
        Z(e, "wheel", g, {passive:!1});
      } else if (N) {
        Z(e, "mousewheel", g, !1);
      } else if (ma) {
        Z(e, "MozMousePixelScroll", g, !1);
      } else if (W) {
        for (var t = aa, r = 0, C = t.length; r < C; ++r) {
          if (t[r] === e && t[r + 1] === g) {
            return;
          }
        }
        t.length || Z(L, "DOMMouseScroll", la, !1);
        t.push(e, g);
      }
    };
    vc = function(e, g) {
      if (H) {
        xa(e, "wheel", g, {passive:!1});
      } else if (N) {
        xa(e, "mousewheel", g, !1);
      } else if (ma) {
        xa(e, "MozMousePixelScroll", g, !1);
      } else if (W) {
        for (var t = aa, r = 0, C = t.length; r < C; ++r) {
          if (t[r] === e && t[r + 1] === g) {
            t.splice(r, 2);
            t.length || xa(L, "DOMMouseScroll", la, !1);
            break;
          }
        }
      }
    };
    var H = 9 <= z || pb || 17 <= I || 31 <= Pa || 537.7 <= Ia, N = 6 <= z || pb || 9 <= M || Pa || 522 <= Ia || gb, ma = vb, W = I && 0 <= Ga.conpare(Ha, "0.9.7") && !vb;
    if (W) {
      var aa = [], la = function(e) {
        for (var g = aa, t = e.target, r, C = 0, fa = g.length; C < fa; ++C) {
          r = g[C], Wa(r, t) && g[C + 1].call(r, e);
        }
      };
    }
  })();
  (function() {
    9 > z && Da(function() {
      var D = Ra(ra, "div");
      kb(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      dc = 1 < D.offsetHeight;
      kb(D, "");
      Ka(D);
    });
    gc = bz;
    function bz(D, P) {
      function G() {
        J || !S || U.complete ? (qa(D, !!U.width), U.onerror = U.onload = eb, U = D = v) : (--S, qa(G));
      }
      var U = new Image(), J, S = 99;
      U.onerror = function() {
        J = !0;
      };
      U.onload = function() {
        J = !0;
      };
      U.src = P;
      qa(G);
    }
    bz = !1;
  })();
  (function() {
    rb(function(b) {
      var l = b.G;
      b = b.H;
      var m = Ca(l);
      !Ma(m, "aBodyRoot") && b ? Ya(m, "img-loaded") : b || wa(l, "alt") || Ta(l, "display", "none");
    });
    I && 0 > Ga.conpare(Ha, "0.9.0") && La.splice(1, 0, function() {
      for (var b = nc(ab, "RichLink-sep"), l, m, x, O, K, X; l = b.shift();) {
        for (l = Qa(l); m = l.shift();) {
          if ("A" === Aa(m) && !m.innerHTML) {
            for (; x = l.shift();) {
              if (1 === x.nodeType) {
                if ("A" === Aa(x)) {
                  break;
                }
                for (O = Va(x, "A"); K = O.shift();) {
                  for (X = Qa(K); X.length;) {
                    K.parentNode.insertBefore(X.shift(), K);
                  }
                  Ka(K);
                }
              }
              m.appendChild(x);
            }
          }
        }
      }
    }, function() {
      for (var b = cb("A"), l, m; l = b.shift();) {
        "A" !== Aa(l) || l.innerHTML || (m = l.nextSibling && l.nextSibling.firstChild) && m.href === l.href && Ka(l);
      }
    });
    5.5 <= z && 8 > z && Ja && Tb(function(b) {
      for (var l = Va(ra, "a"), m = l.length, x = 0; x < m; ++x) {
        l[x].hideFocus = !b;
      }
    });
    if (!Vb && Ja) {
      var D, P = function() {
        D = Ra($a, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:za + "css/" + xb + "hc/" + Lb});
        (ec || 5.5 <= z && 9 > z && dc) && Ya(ra, "jsCanRotate");
        P = v;
      };
      Tb(function(b) {
        b && !D ? P() : D && (b ? $a.appendChild(D) : Ka(D));
      });
    }
    M && Da(function() {
      for (var b = Va(ra, "a"), l = b.length, m = 0, x; m < l; ++m) {
        x = b[m], "-1" === wa(x, "tabIndex") ? Sa(x, "tabIndex") : wa(x, "href") && Xa(x, "tabIndex", "0");
      }
      b = Va(ra, "input");
      m = 0;
      for (l = b.length; m < l; ++m) {
        x = b[m], "hidden" === wa(x, "type") && Sa(x, "tabIndex");
      }
    });
    if (I && 0 > Ga.conpare(Ha, "0.9.5")) {
      jc = !0;
      var G, U, J, S, ka;
      Da(function() {
        Z(L, "keydown", ja);
        Z(L, "keyup", da);
        Ub(ra, pa);
        .9 <= I && (Z(R, "blur", Y), Z(ra, "click", T));
      });
      var ja = .9 > I ? function(b) {
        16 === b.keyCode ? G = !0 : 9 === b.keyCode && S && ia(S, !0) && (S.blur && S.blur(), b.stopPropagation(), b.preventDefault(), qa(E));
      } : function(b) {
        16 === b.keyCode ? G = !0 : 9 === b.keyCode && (U = hb());
      }, da = function(b) {
        16 === b.keyCode && (G = !1);
      }, pa = .9 > I ? function(b) {
        S = b.target;
      } : function(b) {
        var l = b.target;
        if (S === l) {
          J = v;
        } else if (J) {
          l === J ? (b.stopPropagation(), E(!0)) : (l.blur && d(l), b.preventDefault(), E());
        } else {
          if (b = S) {
            S = v, d(b);
          }
          J = l;
          E(!0);
        }
      }, ia = function(b, l) {
        var m = hb(), x = ra, O = "nextSibling", K = "firstChild";
        G && (l || m - 99 < U && U <= m) && (O = "previousSibling", K = "lastChild");
        for (J = v; b !== x;) {
          if (X) {
            m = b;
            var X = !1;
          } else {
            m = b[O];
          }
          if (m) {
            if (1 === m.nodeType) {
              if (ha(m)) {
                return J = m, !0;
              }
              b = (X = m[K]) || m;
            } else {
              b = m;
            }
          } else {
            b = b.parentNode;
          }
        }
      }, ha = function(b, l) {
        function m() {
          return "-1" !== wa(b, "tab-index");
        }
        function x() {
          return 0 <= b.offsetHeight * b.offsetWidth;
        }
        if (b.focus) {
          var O;
          switch({A:l ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Aa(b)]) {
            case 1:
              if (jb(b, "href") && m() && x()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== wa(b, "type") && m() && !jb(b, "disabled") && x()) {
                return !0;
              }
              break;
            case 3:
              if (m() && !jb(b, "disabled") && x()) {
                return !0;
              }
              break;
            default:
              if ((O = wa(b, "tab-index")) && "-1" !== O && x()) {
                return !0;
              }
          }
        }
      }, E = function(b) {
        ka = 0;
        J && (.9 <= I && Z(J, "blur", a), S = J, J = v, b || S.focus());
      };
      if (.9 <= I) {
        var T = function(b) {
          var l = b.target;
          if (S && ha(l, !0)) {
            var m = S;
            S = v;
            d(m);
            J = l;
            b.stopPropagation();
            b.preventDefault();
            E();
          }
        }, Y = function(b) {
          b.target !== L || (J = v);
        }, a = function(b) {
          b = b.target;
          xa(b, "blur", a);
          S === b && ia(b) && (ka || (ka = qa(E)));
        }, d = function(b) {
          xa(b, "blur", a);
          b.blur();
        };
      }
    }
  })();
  (function() {
    function D(c) {
      var h = Y.length, f, k, w, p;
      if (13 === (c.keyCode || c.ba) || c.type !== a) {
        for (; h;) {
          var F = Y[--h];
          if (F.F === this || F.u === this) {
            h = F.F;
            var H = f = F.u;
            if (F.P) {
              if (Ta(h, "width", F.Z), h.src = F.Y, Cb(H, F.T), h = F.L) {
                kb(h, F.S), rc(h, "jsCapLarge");
              }
            } else {
              if (k = F.N) {
                delete F.N;
                if (F.M) {
                  for (; f = Ca(f);) {
                    if (!Ma(f, "caption")) {
                      var N = Aa(f);
                      if ("DIV" === N || "P" === N || "BLOCKQUOT" === N || "LI" === N || "DD" === N || "TD" === N || "TH" === N || "FORM" === N || "PRE" === N) {
                        break;
                      }
                    }
                  }
                  f = (f.offsetWidth | 0) - 4;
                  1600 < f && (f = 1600);
                  if (2 === F.M) {
                    k = k.split("=");
                    N = k.length;
                    if (w = k[N - 1]) {
                      (p = Oa(w.substr(1))) && w === "s" + p ? k[N - 1] = "w" + f : k[N] = "w" + f;
                    }
                    k = k.join("=");
                  } else {
                    k = k.split("/");
                    N = k.length;
                    if (w = k[N - 2]) {
                      (p = Oa(w.substr(1))) && w === "s" + p ? k[N - 2] = "w" + f : k.splice(N - 1, 0, "w" + f);
                    }
                    k = k.join("/");
                  }
                }
                F.W = k;
              }
              F.T = qc(H);
              Ya(H, "jsPicaLarge");
              Ta(h, "width", "");
              h.src = F.W;
              if (h = F.L) {
                kb(h, ""), Ya(h, "jsCapLarge");
              }
            }
            F.P = !F.P;
            break;
          }
        }
        P(c);
      }
    }
    function P(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function G(c) {
      var h = ta;
      if (sb) {
        if (Fa && !h) {
          if (hb() < Fa) {
            return;
          }
          Fa = v;
        }
        7 === c ? oa = 0 : (oa && (oa = zb(oa)), na = Ib());
        h ? (ta = U(v, h[0], h[1])) || (Fa = hb() + 99) : U();
      } else {
        ta = v;
      }
    }
    function U(c, h, f) {
      function k(Na) {
        H = Na;
        if (V) {
          N = V + ":translate" + (Ea ? "3D(0," : "(0,") + Na + (Ea ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Na) {
          if (m || x) {
            var Wb = K.offsetWidth;
          }
          N = m ? "position:fixed;width:" + Wb + "px;top:" + (Na - w + aa) + "px" : O ? "top:" + Na + "px" : "position:absolute;top:" + Na + "px;left:0";
          if (x && N) {
            var tb = 8 > z ? " " : ",";
            N += ";clip:rect(" + (0 > Na ? -Na + "px" + tb + Wb + "px" + tb + t : "0" + tb + Wb + "px" + tb + (Na + t < r ? t : r - Na)) + "px" + tb + "0)";
          }
        }
      }
      var w = na, p = X, F = K.offsetTop === p.offsetTop, H = 0, N = "", ma = !0;
      if (F) {
        for (var W = 0, aa = 0, la = p; la && la !== ra;) {
          aa += la.offsetTop, la = la.offsetParent;
        }
        H = ea;
        var e = 11 > z ? fb.offsetHeight : R.innerHeight, g = p.offsetHeight, t = ba.offsetHeight, r = t < g ? g : t, C = w, fa = C + e, sa = aa, Za = sa + r, wc = aa + H, Ec = wc + t;
        p = C < sa ? sa : C;
        la = Za < fa ? Za : fa;
        var mb = la - p;
        C = Za <= C;
        fa = fa <= sa;
        if (h !== v) {
          ma = aa + h;
          c = ma + f;
          var nb;
          if (C || fa) {
            return e <= f ? nb = aa : nb = C ? Za - f : aa + f - e, Fa = v, R.scroll(0, nb), ta;
          }
          t <= mb ? W = 3 : f <= mb ? t - h <= mb ? W = 2 : p <= ma && c <= la ? p < aa + H && (W = 4) : W = p <= ma && ma <= la ? 5 : p <= c && c <= la ? 4 : c < p ? 4 : 5 : W = 4;
          ma = v;
        } else {
          c !== v ? t <= mb ? (W = 7, ma = !1) : (H -= 60 * c, W = la - aa - t, nb = p - aa, H < W ? H = W : nb < H && (H = nb), W = 6) : g <= t || (C ? W = 1 : fa || (t <= mb ? W = 3 : p < wc ? W = 3 : Ec < la ? W = 2 : w < aa + t - mb || (W = 2)));
        }
        switch(W) {
          case 0:
            k(0);
            break;
          case 1:
            k(r - t);
            break;
          case 2:
            k(la - aa - t);
            break;
          case 3:
            k(p - aa);
            break;
          case 4:
            k(p - aa - h);
            break;
          case 5:
            k(la - aa - (h + f));
          case 6:
            k(H);
        }
      }
      kb(ba, N);
      ea = H;
      return F && ma;
    }
    function J(c) {
      if (sb && (I && (na = Ib()), this !== c.target)) {
        var h = Fb(c.deltaY) ? c.deltaY : Fb(c.wheelDeltaY) ? c.wheelDeltaY / 120 : Fb(c.wheelDelta) ? c.wheelDelta / -120 : c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1);
        h && U(9 >= h ? -9 >= h ? -3 : h : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function S(c) {
      if (sb) {
        var h = I && 0 > Ga.conpare(Ha, "0.9.4"), f = c.target;
        c = ba;
        var k = 0;
        if (Wa(c, f)) {
          if (V) {
            h = f.getBoundingClientRect();
            var w = h.bottom - h.top;
            k = h.top - c.getBoundingClientRect().top | 0;
          } else {
            w = f.offsetHeight;
            var p = f;
            if (h) {
              for (var F = []; p && (I ? Wa(c, p) : c !== p);) {
                for (; p.previousSibling;) {
                  p = p.previousSibling, p.tagName && F.unshift(p.tagName + ":" + p.offsetTop);
                }
                p = p.offsetParent;
              }
              p = f;
            }
            for (; p && (I ? Wa(c, p) : c !== p);) {
              if (h) {
                for (; p.previousSibling;) {
                  p = p.previousSibling, k += p.offsetHeight || 0;
                }
                p = p.parentNode;
              } else {
                k += p.offsetTop, p = p.offsetParent;
              }
            }
          }
          l ? (ta = [k, w], oa && zb(oa), oa = qa(G, 7, 1 > I || 536 > Ia || 14 > Pa ? 500 : 0)) : (na = Ib(), U(v, k, w));
        }
      }
    }
    function ka() {
      n.call(q);
    }
    function ja() {
      L.fullscreenElement || L.fullscreen || L.webkitIsFullscreen || L.msFullscreenElement || R.fullScreen ? (Xa(q, "id", "blog2slide-root"), A[1].parentNode.insertBefore(B, A[1]), da(), L.onkeydown = pa) : y && (Ka(B), Sa(q, "id"), Sa(y, "id"), y = L.onkeydown = v);
    }
    function da() {
      y && Sa(y, "id");
      u = 0 < u ? Q < u ? Q : u : 0;
      y = A[u];
      Xa(y, "id", "blog2slide-current");
    }
    function pa(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++u, da();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --u, da();
      }
    }
    ic = I && 0 >= Ga.conpare(Ha, "0.9");
    yb = !(7.2 > M || ic);
    Mb = function(c) {
      ia ? L.write('<script src="' + c + '">\x3c/script>') : La || E.length ? E.push(c) : T(c);
    };
    Nb = function() {
      ia || T(E.shift());
    };
    var ia = !yb, ha = yb && 7.5 > M;
    if (!ia) {
      var E = [];
      ha && (hc = !0);
      Da(function() {
        T(E.shift());
      });
      var T = function(c) {
        c && (ha ? Xb[0].src = c : Ra($a, "script", {src:c}));
      };
    }
    var Y = [], a = 5.5 <= z && 8 > z ? "keypress" : "keydown";
    if (!ac) {
      var d = Ba.transition !== v || Ba["-o-transition"] !== v || Ba["-moz-transition"] !== v || Ba["-webkit-transition"] !== v;
      rb(function(c) {
        if (c.H && ab) {
          c = c.G;
          var h = Ca(c), f = "", k;
          if ("A" === Aa(h) && 1 === oc(h).length) {
            var w = wa(h, "href");
            var p = w.split("?")[0].split("#")[0].split(".");
            p = (p[p.length - 1] || "").toLowerCase();
            if ((k = 0 < w.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + p + ".")) {
              Z(h, a, D);
              Z(c, "click", D);
              Z(h, "click", P);
              d && (f = c.naturalWidth + 4 + "px", Ta(c, "width", f));
              Ya(h, "jsPica");
              for (p = h; p = Ca(p);) {
                if (Ma(p, "caption")) {
                  Ya(p, "jsCap");
                  var F = p;
                  var H = sc(F);
                  break;
                }
              }
              Y.push({u:h, L:F, S:H, Y:c.src, Z:f, N:w, F:c, M:k ? 0 < w.indexOf("/img/a/") ? 2 : 3 : 0 < w.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      db(function(c, h) {
        for (c = -1; h = Y[++c];) {
          xa(h.u, a, D), xa(h.F, "click", D), xa(h.u, "click", P);
        }
      });
    }
    var b = ["jsSidebarFixer1", "jsSidebarFixer2"], l = !(9 > z || M || 1 <= I && 1.3 > I || jc), m = !(5 > gb || 2.2 > wb || 6 > ca(12) || va(30) && 534 > Ia || va(32) || 7 > z || 9 > M || 1 > I), x = m || 6 === z || 1 > I, O = 7.5 > M, K, X, ba, V = Dc && ec, ea = 0, na = 0, Ea, ta, Fa, oa;
    xc || ac || (qb(function(c) {
      if (c) {
        if (!ab) {
          return !0;
        }
        c = -1;
        var h;
        K = ib("jsSide");
        X = ab;
        if (!K) {
          return !0;
        }
        lb(G);
        Sb(G);
        ba = Bb(Qb(K), "div", {id:"jsSidebarFixer"});
        for (Ub(ba, S); 1 < Qa(K).length;) {
          ba.appendChild(Qa(K)[1]);
        }
        for (; h = b[++c];) {
          uc(ib(h), J);
        }
        z || pb || 2 > Pa || (Ea = Ba.perspective !== v || Ba.MozPerspective !== v || Ba["-webkit-perspective"] !== v);
        G();
        return !0;
      }
    }), db(function() {
      for (var c = -1, h; h = b[++c];) {
        vc(ib(h), J);
      }
      tc(ba, S);
    }));
    Da(function() {
      function c(F, H, N, ma) {
        var W = ma ? "div" : "cite";
        if (0 === H.indexOf("urn:isbn:")) {
          H = H.substr(9).toUpperCase().split("-").join("");
          if (13 === H.length) {
            H = H.toString().slice(3, -1);
            for (var aa = 0, la = 0; 9 > la; la++) {
              aa += (H.charAt(la) - 0) * (10 - la);
            }
            aa = (11 - aa % 11) % 11;
            aa = 10 === aa ? "X" : aa.toString();
            H += aa;
          }
          10 === H.length && (H = "//www.amazon.co.jp/exec/obidos/ASIN/" + H + "/itozyun-22/ref=nosim/");
        }
        N = ma ? Bb(Qb(f), W, {className:N}) : Ra(f, W, {className:N});
        Ra(N, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:H} : {href:H}, F);
      }
      if (ab) {
        for (var h = Va(ab, "blockquote"), f, k = -1, w, p; f = h[++k];) {
          w = wa(f, "title"), p = wa(f, "cite"), w && p ? (Sa(f, "title"), c(w, p, "js-bqLink", !0)) : p && (Sa(f, "cite"), c(R.decodeURI ? decodeURI(p) : p, p, "js-bqCite"));
        }
      }
    });
    var n, q, B, y, A, u, Q;
    Da(function() {
      var c = ib("blog2slide-start");
      if (c) {
        var h = L.onfullscreenchange !== v ? "f" : L.onmozfullscreenchange !== v ? "mozF" : L.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        n = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== h || n ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', Z(c.firstChild, "click", ka), c = Ca(c), q = Ca(c), A = Va(c, "section"), B = L.createElement("h1"), B.innerHTML = Va(ra, "h1")[0].innerHTML, Q = A.length, A.splice(0, 0, B), 0 !== h ? Z(L, h + "ullscreenchange", ja) : z ? Z(L, "MSFullscreenChange", ja, !1) : Sb(ja)) : Ka(c);
      }
    });
  })();
  var ob, Db = !Zb || .9 > I || 8 > M || 5.5 > z, Ua;
  (function() {
    function D(n) {
      return n === "" + n;
    }
    function P(n, q) {
      return Db ? new T(n, q) : new Zb(n, q);
    }
    function G(n, q, B, y) {
      if (E() - Y < l && !y) {
        return n(q);
      }
      qa(U, {U:n, X:q});
    }
    function U(n) {
      Y = E();
      n.U(n.X);
    }
    function J(n, q) {
      n && ob[n] || (n = m.test(q) ? "default-markup" : "default-code");
      var B = !!ob[n];
      B && G(ba, n, 0, !0);
      return B;
    }
    function S() {
      function n(N, ma, W) {
        ma && (q.h = q.h || [], q.h.push({l:q, B:q.B, O:1, s:Q, D:N, o:ma, m:W, R:{}, v:0}));
      }
      var q = a, B = q.m, y = B[0], A = B[2], u = q.D, Q = q.s, c = q.$.shift(), h = q.R;
      if (c) {
        var f = h[c], k;
        if (!(0 <= f)) {
          if (k = y[c.charAt(0)]) {
            var w = c.match(k[1]);
            f = k[0];
          } else {
            for (f = 0, y = -1; k = A[++y];) {
              if (w = c.match(k[1])) {
                f = k[0];
                break;
              }
            }
          }
          !(k = D(f)) || w && D(w[1]) || (k = !1, f = 11);
          k || (h[c] = f);
        }
        A = q.v;
        h = c.length;
        q.v += h;
        if (k) {
          k = w[1];
          y = c.indexOf(k);
          var p = k.length, F = y + p;
          w[2] && (F = h - w[2].length, y = F - p);
          n(u + A, c.substr(0, y), B);
          if (p && J(f, k)) {
            n(u + A + y, k);
            var H = !0;
          }
          n(u + A + F, c.substr(F), B);
          q.h && q.h.length && (a = q.h.shift());
          H || (a !== q ? G(K, v, 2) : G(S, v, 2));
        } else {
          Q.push(u + A, f), G(S, v, 2);
        }
      } else {
        q.l ? (a = q.l.h.shift()) ? G(K, v, 2) : (a = q.l, G(S, v, 2)) : G(na, v, 2);
      }
    }
    function ka(n) {
      if (X.length) {
        var q = X.shift(), B = ia[q];
        if (B.pop) {
          ia[q] = P(B[0], B[1]);
        } else if (D(B)) {
          ia[q] = P(B);
        } else {
          return ka(n);
        }
        G(ka, n, 1);
      } else {
        G(ba, n);
      }
    }
    function ja(n) {
      for (var q, B = n.firstChild; B; B = B.nextSibling) {
        var y = B.nodeType;
        q = 1 === y ? q ? n : B : 3 === y ? x.test(B.nodeValue) ? n : q : q;
      }
      return q === n ? v : q;
    }
    ob = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var da = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], pa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
    [1, 26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ia = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ha = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), E = ub.now || function() {
      return +new ub();
    }, T, Y, a, d, b, l = 5 > z ? 60 : 5.5 > z ? 0 : Db ? 20 : 10, m, x;
    Ua = [function(n) {
      R.RegExpCompat = T = n;
    }, function() {
      m = P("^\\s*<");
      x = P("\\S");
    }];
    Db || (Ua[1](), Ua = v);
    var O = function() {
      var n = a, q = n.V, B = V(n.B, n.O), y = n.o = B.o;
      n.I = B.I;
      J(q, y) || (a = v, G(oa, v, 0, !0));
    };
    var K = function() {
      var n = a;
      n.$ = n.o.match(n.m[1]) || [];
      n.s.push(n.D, 0);
      G(S, v, 2);
    };
    var X = [];
    var ba = function(n) {
      function q(f) {
        var k = f;
        0 <= f && (k = pa[f]);
        0 <= k[1] && (k[1] = B(k[1]));
        return k;
      }
      function B(f) {
        var k = f;
        return 0 <= f && (k = ia[f], !k.exec) ? (X.push(f), f) : k;
      }
      var y = a, A = ob[n];
      D(A) && (A = ob[n] = ob[A]);
      var u = A[0];
      if (0 <= u) {
        u = da[u];
        if (0 <= u["-num"]) {
          var Q = u["-num"];
          delete u["-num"];
          for (var c = -1; 9 > c;) {
            u["" + ++c] = Q;
          }
        }
        A[0] = u;
      }
      for (var h in u) {
        u[h] = q(u[h]);
      }
      A[1] = B(A[1]);
      u = A[2];
      c = 0;
      for (Q = u.length; c < Q; ++c) {
        u[c] = q(u[c]);
      }
      X.length ? G(ka, n, 2) : (y.m ? y.l && (y.l.h[0].m = A) : y.m = A, G(K, v, 1));
    };
    var V = function(n, q) {
      function B(h) {
        var f = h.nodeType;
        if (1 === f) {
          if (!Ma(h, "nocode")) {
            for (f = h.firstChild; f; f = f.nextSibling) {
              B(f);
            }
            f = Aa(h);
            if ("BR" === f || "LI" === f) {
              y[Q] = "\n", u[Q << 1] = A++, u[Q++ << 1 | 1] = h;
            }
          }
        } else if (3 === f || 4 === f) {
          if (f = h.nodeValue) {
            f = q ? f.split("\r\n").join("\n").split("\r").join("\n") : f.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), y[Q] = f, u[Q << 1] = A, A += f.length, u[Q++ << 1 | 1] = h;
          }
        }
      }
      var y = [], A = 0, u = [], Q = 0;
      B(n);
      var c = y.join("");
      "\n" === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1));
      return {o:c, I:u};
    };
    var ea = function(n, q, B) {
      function y(f) {
        var k = f.nodeType;
        if (1 === k && !Ma(f, "nocode")) {
          if ("BR" === Aa(f)) {
            A(f), f.parentNode && Ka(f);
          } else {
            for (f = f.firstChild; f; f = f.nextSibling) {
              y(f);
            }
          }
        } else if ((3 === k || 4 === k) && B) {
          var w = f.nodeValue, p = w.indexOf("\r\n"), F = 2;
          -1 === p && (p = w.indexOf("\n"), F = 1);
          -1 === p && (p = w.indexOf("\r"));
          -1 !== p && (k = w.substr(0, p), f.nodeValue = k, (w = w.substr(p + F)) && Rb(f, w), A(f), k || Ka(f));
        }
      }
      function A(f) {
        function k(p, F) {
          var H = F ? p.cloneNode(!1) : p, N = p.parentNode;
          if (N) {
            N = k(N, 1);
            var ma = p.nextSibling;
            N.appendChild(H);
            for (var W = ma; W; W = ma) {
              ma = W.nextSibling, N.appendChild(W);
            }
          }
          return H;
        }
        for (; !f.nextSibling;) {
          if (f = f.parentNode, !f) {
            return;
          }
        }
        f = k(f.nextSibling, 0);
        for (var w; (w = f.parentNode) && 1 === w.nodeType;) {
          f = w;
        }
        Q.push(f);
      }
      for (var u = L.createElement("li"); n.firstChild;) {
        u.appendChild(n.firstChild);
      }
      for (var Q = [u], c = 0; c < Q.length; ++c) {
        y(Q[c]);
      }
      if (q === (q | 0)) {
        if (10 <= q && 7.2 > M) {
          var h = L.createElement("ol");
          h.innerHTML = '<li value="' + q + '">' + u.innerHTML + "</li>";
          Q[0] = h.firstChild;
        } else {
          Xa(u, "value", q);
        }
      }
      h = Ra(n, "ol", {className:"linenums"});
      n = Math.max(0, q - 1 | 0) || 0;
      c = 0;
      for (q = Q.length; c < q; ++c) {
        u = Q[c], Cb(u, "L" + (c + n) % 10), u.firstChild || pc(u, "\u00a0"), h.appendChild(u);
      }
    };
    var na = function() {
      var n = a, q = n.o, B = q.length, y = 0, A = n.I, u = A.length, Q = 0, c = n.s, h = c.length, f = 0;
      c[h] = B;
      var k, w;
      for (w = k = 0; w < h;) {
        c[w] !== c[w + 2] ? (c[k++] = c[w++], c[k++] = c[w++]) : w += 2;
      }
      h = k;
      for (w = k = 0; w < h;) {
        var p = c[w], F = c[w + 1];
        for (w += 2; w + 2 <= h && c[w + 1] === F;) {
          w += 2;
        }
        c[k++] = p;
        c[k++] = F;
      }
      c.length = k;
      n = n.B;
      h = "";
      n && (h = n.style.display, Ta(n, "display", "none"));
      for (; Q < u;) {
        k = A[Q + 2] || B;
        p = c[f + 2] || B;
        w = Math.min(k, p);
        F = A[Q + 1];
        var H;
        if (1 !== F.nodeType && (H = q.substring(y, w))) {
          9 > z && (H = H.split("\n").join("\r"));
          var N = Bb(F, "span", {className:ha[c[f + 1]]}, H);
          Ka(F);
          y < k && (A[Q + 1] = Rb(N, q.substring(w, k)));
        }
        y = w;
        y >= k && (Q += 2);
        y >= p && (f += 2);
      }
      n && Ta(n, "display", h);
      a = v;
      G(oa, v, 3, !0);
    };
    var Ea = [], ta;
    qb(function(n) {
      if (n) {
        n = [cb("pre"), cb("code"), cb("xmp")];
        for (var q = 0; q < n.length; ++q) {
          for (var B = 0, y = n[q].length; B < y; ++B) {
            Fa(n[q][B]);
          }
        }
        return !0;
      }
    });
    var Fa = function(n) {
      Ea.push(n);
      ta = Ea.length;
      1 === ta && (Yb ? qa(Yb, oa) : Ua ? Ua.push(function() {
        qa(oa);
      }) : qa(oa));
    };
    var oa = function() {
      function n(Q, c) {
        return (Q.split(c)[1] || "").split(" ")[0];
      }
      if (!a) {
        ta !== Ea.length && b && b(ta - Ea.length, ta);
        var q = Ea.shift();
        if (q) {
          if (Ma(q, "prettyprint") && !Ma(q, "prettyprinted")) {
            for (var B = !1, y = q.parentNode; y !== ra; y = y.parentNode) {
              var A = Aa(y);
              if (("PRE" === A || "XMP" === A || "CODE" === A) && Ma(y, "prettyprint")) {
                B = !0;
                break;
              }
            }
            if (!B) {
              B = q.className;
              Ya(q, "prettyprinted");
              y = !1;
              if (!y) {
                y = n(B, "lang-") || n(B, "language-");
                var u;
                !y && (u = ja(q)) && "CODE" === Aa(u) && (y = n(u.className, "lang-") || n(u.className, "language-"));
              }
              A = Aa(q);
              "PRE" === A || "XMP" === A ? A = 1 : (A = q.currentStyle, u = L.defaultView, A = (A = A ? A.whiteSpace : u && u.getComputedStyle ? u.getComputedStyle(q, null).getPropertyValue("white-space") : 0) && "pre" === A.substr(0, 3));
              u = !1;
              (u = "true" === u || +u) || (u = n(B, "linenums:") || Ma(q, "linenums"), u = u.length ? +u : u);
              u && ea(q, u, A);
              a = {V:y, B:q, aa:u, O:A, D:0, v:0, R:{}, s:[]};
              G(O);
              return;
            }
          }
          G(oa, v, 0, !0);
        } else {
          d && d();
        }
      }
    };
    R.PR = {RegExpProxy:P, prettifyElement:Fa, registerCompleteHandler:function(n, q) {
      d = n;
      b = q;
    }};
  })();
  var Xb = L.scripts || cb("script");
  var za = Xb[Xb.length - 1].src.split("/");
  --za.length;
  "js" === za[za.length - 1] && --za.length;
  (za = za.join("/")) && (za += "/");
  var xc = Cc || "1" === wa(ra, "mob");
  xb = (xc ? "mb" : "pc") + "/";
  6.1 > gb && (lb ? lb(Ob) : Z(R, "scroll", Ob));
  db(lc);
  6.1 > gb && (lb ? lb(Pb) : Z(R, "scroll", Pb));
  db(mc);
  10 > z && (11 !== Ac || 5 !== z) || (9 > M || 1 > I || !bb && !R.addEventListener ? L.write('<link href="' + za + "css/" + xb + Lb + '" rel="stylesheet"' + (8 > M ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > M || 1.5 > I || 532 >= Ia || 8 > Pa) && Da(function() {
    Ra($a, "link", {href:za + "css/" + xb + Lb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Db) {
    if (yb) {
      var Yb = function(D) {
        R.RegExpCompat = bz;
        Yb = v;
        Mb(za + "js/regexpcompat.js");
        function bz(P) {
          for (var G; G = Ua.shift();) {
            G(P);
          }
          Ua = v;
          qa(D);
          Nb(za + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      R.RegExpCompat = function(D) {
        for (var P; P = Ua.shift();) {
          P(D);
        }
        Ua = v;
        Nb(za + "js/regexpcompat.js");
      }, Mb(za + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

