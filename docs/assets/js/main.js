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
(function(Ka, Q, gb, $b, K, Fb, zc, wb, Oa, Gb, Hb, ac, Ib, v) {
  function ca(E) {
    if (Ka[0] === E) {
      return La === La + "" ? Oa(La) : La;
    }
  }
  function va(E) {
    var O = Ka[3];
    if (Ka[2] === E) {
      return O === O + "" ? Oa(O) : O;
    }
  }
  function Jb() {
    return 6 > z ? ra.scrollTop : z ? hb.scrollTop : Q.pageYOffset;
  }
  var ra = K.body, Ba = ra.style, hb, bb, cb, La = Ka[1], z = ca(2) || ca(3), db = ca(7), pb = ca(5) || ca(6), L = ca(8) || ca(9), R = ca(11) || ca(12), xb = R && 0 <= Ka.conpare(La, "1.9.1"), Kb = ca(13), Ga = ca(15), Wa = ca(16) || ca(17), bc = ca(10) || ca(25), Pa = ca(20) || ca(22), Ac = ca(23), qb = ca(21), cc = ca(24), dc = Pa && Oa(Fb.userAgent.split("Edg/")[1]), Bc = Oa(Fb.appVersion.split("Trident/")[1]) + 4, Lb = va(35) || va(36) || va(37), Cc = 0 <= Fb.userAgent.indexOf("Googlebot/"), 
  Qa = 0.9 > R, Mb = (db ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : 7.2 > L ? "opr70" : 8 > L ? "opr72" : 9.5 > L ? "opr" + (L | 0) : R && !xb ? 1.4 <= R ? "gck19" : 1.3 <= R ? "gck13" : 1 <= R ? "gck12" : Qa ? 0.8 <= R ? "gck08" : "gck07" : "gck09" : "modern") + ".css", yb = "", Dc = va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10), ec, fc = Ba.transform !== v ? "transform" : Ba["-o-transform"] !== v ? "-o-transform" : Ba["-ms-transform"] !== v ? "-ms-transform" : 
  Ba.MozTransform !== v ? "-moz-transform" : Ba["-webkit-transform"] !== v ? "-webkit-transform" : "", Ha = [], gc = [], Ia = [], hc, ic, zb, jc, Nb, Ob, kc = !1;
  525 > Ga || 3.2 > Wa || 2.2 > qb || 10 > L || R && !xb || ca(25) || 10 > ca(3) || va(32) || va(30) || va(3);
  var qa, Ab, Bb, lc, Ec = !!ra.getBoundingClientRect, Pb, mc, Qb, nc, ib = wb.now || function() {
    return +new wb();
  };
  (function() {
    function E() {
      for (var D, T = 0, Y = ib(); T < da.length;) {
        Y < da[0].t ? ++T : (D = da.splice(T, 1)[0], D.f(D.p));
      }
      ha = da.length ? Hb(E, pa) : 0;
    }
    function O() {
      for (var D, T = 0; T < I.length; ++T) {
        D = I[T], D.f();
      }
    }
    function G() {
      ja && (ja = clearInterval(ja));
    }
    function U() {
      ha && (ha = ac(ha));
    }
    Bb = function(D) {
      I.length || (ja = Ib(O, S));
      I.push({f:D, C:++ka});
      return ka;
    };
    lc = function(D) {
      for (var T = I.length, Y; Y = I[--T];) {
        if (Y.C === D) {
          I.splice(T, 1);
          I[0] || G();
          break;
        }
      }
      return 0;
    };
    Pb = function() {
      ja && (G(), ja = Ib(O, S));
    };
    mc = G;
    var I = [], S = 500, ka = 0, ja;
    if (5 > z || db) {
      Q._wdb_onlooptimer = O, O = "_wdb_onlooptimer()";
    }
    qa = function(D, T, Y) {
      da.length || (ha = Hb(E, pa));
      da.push({f:D, p:T, C:++ia, t:ib() + (pa < Y ? Y : pa)});
      return ia;
    };
    Ab = function(D) {
      for (var T = da.length, Y; Y = da[--T];) {
        if (Y.C === D) {
          da.splice(T, 1);
          break;
        }
      }
      return 0;
    };
    Qb = function() {
      ha && (U(), ha = Hb(E, pa));
    };
    nc = U;
    var da = [], pa = 16, ia = 0, ha;
    if (5 > z || db) {
      Q._wdb_ontimer = E, E = "_wdb_ontimer()";
    }
  })();
  var jb, eb, Xa, oc, Ca, Ra, pc, Rb, Sa, Cb, qc, Sb, Ja, Ya, Aa, wa, Za, Ta, kb, rc, Db, Ma, $a, sc, Ua, rb, tc;
  (function() {
    function E(b, d, a) {
      var l = ["<", b], m = 1, x, N;
      if (d) {
        for (x in d) {
          var J = d[x];
          if (null != J && "" !== J) {
            if ("style" === x) {
              l[++m] = ' style="';
              for (N in J) {
                for (var X = ++m, ba, V = [], ea = N.split(""), na = ea.length; na;) {
                  ba = ea[--na], "A" <= ba && "Z" >= ba && (ba = "-" + ba.toLowerCase()), V[na] = ba;
                }
                l[X] = V.join("") + ":" + J[N] + ";";
              }
              l[++m] = '"';
            } else {
              "className" === x && (x = "class"), l[++m] = " " + x + '="' + J + '"';
            }
          }
        }
      }
      l[++m] = ">";
      null != a && (D && "font" !== b ? l[++m] = "<font>" + O(a) + "</font>" : l[++m] = O(a));
      l[++m] = "</" + b + ">";
      return l.join("");
    }
    function O(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function G(b) {
      var d = b.split("-"), a = d.length;
      if (2 > a) {
        return b;
      }
      for (; 1 < a;) {
        b = d[--a], d[a] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return d.join("");
    }
    function U(b) {
      return I(K, b);
    }
    function I(b, d) {
      var a = "*" === d;
      a = D ? a ? b.all : b.all.tags(d.toUpperCase()) : 6 > z && a ? b.all : b.getElementsByTagName(d);
      for (var l = [], m = 0, x = a.length; m < x; ++m) {
        l[m] = a[m];
      }
      return l;
    }
    function S(b) {
      return D ? b.parentElement : b.parentNode;
    }
    function ka(b, d, a, l, m, x) {
      if (D) {
        var N = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var J = Ra(2 > b ? Ca(d) : d);
        J = 2 > b ? J.indexOf(d) + b : J.length;
        d.insertAdjacentHTML(N, E(a, l, m));
        d = Ra(d)[J];
        null != m && ("font" === a ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (T) {
        d = K.createElement(E(a, l));
      } else {
        d = x ? K.createElementNS("http://www.w3.org/2000/svg", a) : K.createElement(a);
        if (l) {
          for (N in l) {
            if ((b = l[N]) || 0 === b) {
              switch(N) {
                case "class":
                case "className":
                  Db(d, b);
                  break;
                case "style":
                  x = d.style;
                  for (J in b) {
                    x[J] = b[J];
                  }
                  break;
                default:
                  Za(d, N, b);
              }
            }
          }
          !L || "a" !== a && "A" !== a || !l.href || l["tag-index"] || l.tagIndex || Za(d, "tagIndex", "-0");
        }
        Y || null != m && ja(d, m);
      }
      return d;
    }
    function ja(b, d) {
      if (D) {
        return ka(2, b, "font", v, d);
      }
      var a = K.createTextNode("" + d);
      b.appendChild(a);
      return a;
    }
    function da(b, d) {
      9 > z ? b.className = d : b.setAttribute("class", d);
    }
    function pa(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    function ia(b, d, a) {
      if (8 > L || 5.5 > z) {
        d = G(d);
      }
      b.style[d] = a;
    }
    function ha(b) {
      return 5.5 > z ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var D = 5 > z;
    hb = U("html")[0];
    bb = U("head")[0];
    jb = function(b) {
      return Q[b] || K[b] || K.getElementById(b);
    };
    eb = U;
    Xa = I;
    oc = function(b, d) {
      var a = [], l = 0, m, x = -1;
      if (9 > z || !b.getElementsByClassName) {
        var N = 6 > z ? b.all : b.getElementsByTagName("*");
      } else {
        var J = !0;
        N = b.getElementsByClassName(d);
      }
      for (m = N.length; l < m; ++l) {
        var X = N[l];
        if (J || (D || 1 === X.nodeType) && pa(X, d)) {
          a[++x] = X;
        }
      }
      return a;
    };
    Ca = S;
    Ra = function(b) {
      b = D ? b.children : b.childNodes;
      for (var d = [], a = b.length; a;) {
        d[--a] = b[a];
      }
      return d;
    };
    pc = function(b) {
      var d = !(7.03 < L && 7.2 > L) && b.children;
      b = d ? d : b.childNodes;
      for (var a = [], l = b.length, m = -1, x; l;) {
        if (x = b[--l], d || 1 === x.nodeType) {
          D && "FONT" === x.tagName || (a[++m] = x);
        }
      }
      return a;
    };
    Rb = function(b) {
      return D ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Sa = function(b, d, a, l, m) {
      d = ka(2, b, d, a, l, m);
      D || (b.appendChild(d), Y && null != l && ja(d, l));
      return d;
    };
    Cb = function(b, d, a, l, m) {
      d = ka(0, b, d, a, l, m);
      D || (S(b).insertBefore(d, b), Y && null != l && ja(d, l));
      return d;
    };
    qc = ja;
    Sb = function(b, d) {
      var a;
      if (D) {
        return ka(1, b, "font", v, d);
      }
      var l = K.createTextNode("" + d);
      (a = b.nextSibling) ? Ca(b).insertBefore(l, a) : Ca(b).appendChild(l);
      return l;
    };
    Ja = function(b) {
      D ? b.outerHTML = "" : (5.5 > z && (b.style.filter = ""), Ca(b).removeChild(b));
    };
    Ya = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== hb;) {
        if (d = Ca(d), b === d) {
          return !0;
        }
      }
    };
    var T = 9 > z, Y = T;
    Aa = function(b) {
      return b.tagName.toUpperCase();
    };
    wa = function(b, d) {
      if (8 > L || 5.5 > z) {
        d = G(d);
      }
      var a = b.getAttribute(d);
      return L && "tabIndex" === d ? "-0" === a ? "" : "" === a ? "-1" : a : a || "";
    };
    Za = function(b, d, a) {
      if (L && "tab-index" === d) {
        "-1" === a ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", a);
      } else {
        if (8 > L || 5.5 > z) {
          d = G(d);
        }
        b.setAttribute(d, a);
      }
    };
    Ta = function(b, d) {
      if (L && "tab-index" === d) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > L || 5.5 > z) {
          d = G(d);
        }
        b.removeAttribute(d);
      }
    };
    kb = function(b, d) {
      if (L && "tab-index" === d) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > L || 5.5 > z) {
        d = G(d);
      }
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    rc = function(b) {
      return b.className;
    };
    Db = da;
    Ma = pa;
    $a = function(b, d) {
      var a;
      if (!pa(b, d)) {
        if (a = b.className) {
          a += " ";
        }
        da(b, a + d);
      }
    };
    sc = function(b, d) {
      if (pa(b, d)) {
        var a = b.className.split(" ");
        a.splice(a.indexOf(d), 1);
        da(b, a.join(" "));
      }
    };
    Ua = ia;
    rb = function(b, d) {
      var a, l = -1, m;
      if (5.5 > z) {
        if (a = ha(b)) {
          for (a = a.split(";"); m = a[++l];) {
            ia(b, m.split(":")[0], "");
          }
        }
        if (d) {
          for (l = -1, a = d.split(";"); m = a[++l];) {
            var x = m.split(":")[0];
            ia(b, x, m.substr(x.length + 1));
          }
        }
      } else if (7.1 > L) {
        if (b.setAttribute("style", ""), d) {
          for (a = d.split(";"); m = a[++l];) {
            m = m.split(":"), ia(b, m[0], m[1]);
          }
        }
      } else {
        9 > L || 1 > R ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    tc = ha;
    Ha.splice(0, 0, function() {
      function b(X) {
        X = Ra(X);
        for (var ba = X.length, V, ea, na; ba;) {
          if (V = X[--ba], ea = V.nodeType, 8 === ea) {
            d && N.push(V);
          } else if (1 === ea) {
            switch(ea = Aa(V), "/" === ea.charAt(0) && (ea = ea.substr(1), J[ea] = !0), ea) {
              case "STYLE":
                if (7.2 <= L && 9 > L) {
                  break;
                }
              case "LINK":
                D || l || Ya(bb, V) || x.push(V);
                break;
              case "META":
                ea = wa(V, "name") || wa(V, "property");
                for (na = m.length; na;) {
                  if (0 === ea.indexOf(m[--na])) {
                    N.push(V);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Cc || kb(V, "async")) {
                  break;
                }
                if (a) {
                  V.innerText = "";
                  a = !1;
                  break;
                }
              case "NOSCRIPT":
                if (kb(V, "skip-cleanup")) {
                  break;
                }
              case "!":
                N.push(V);
                break;
              case "SOURCE":
                Q.HTMLSourceElement || N.push(V);
                break;
              default:
                J[ea] ? N.push(V) : Ra(V).length && b(V);
            }
          }
        }
        for (; x[0];) {
          bb.appendChild(x.pop());
        }
        for (; N[0];) {
          Ja(N.pop());
        }
      }
      cb = jb("jsMain");
      var d = !(8 > L || 5 > z || db || Qa), a = ic, l = 7 > z, m = ["og:", "twitter:", "fb:"], x = [], N = [], J = {};
      b(hb);
    });
  })();
  var Z, xa, Da, fb, Tb, lb, sb, tb, Ub, Vb, uc, vc, wc, ub, ya, Wb;
  (function() {
    function E() {
      return y ? u ? 2 : A ? 3 : 1 : 0;
    }
    function O(e) {
      xa(Q, "load", O);
      O = v;
      U(Ha, e, !0);
      Da = Ha = v;
    }
    function G(e, g) {
      sb(function() {
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
    function I(e, g, t) {
      Ha || T.length || qa(S);
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
      e = b[g.type];
      var t = -1, r, C;
      5 > z ? g = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : z ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : a && (g.K = g.stopPropagation, g.stopPropagation = function() {
        C = !0;
      });
      for (; r = e[++t];) {
        r.j === this ? (this.g = r.i, z && (g.currentTarget = this), this.g(g), z ? (this.g = gb, this.g = v) : delete this.g) : 7.2 > L && this === K && r.j === Q && (Q.g = r.i, Q.g(g), delete Q.g);
      }
      if (z) {
        return g.preventDefault = g.stopPropagation = gb, g.preventDefault = g.stopPropagation = v, g.returnValue;
      }
      a && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (m = !0), C && !m && g.K(), g.K = g.stopPropagation = v);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ja() {
      var e = 9 === D.offsetWidth;
      ub !== e && I(gc, ub = e);
    }
    function da() {
      !Ha && k && (Ab(k), k = qa(pa));
    }
    function pa() {
      k = 0;
      U(f);
    }
    function ia(e) {
      Ha || U(w, e);
    }
    var ha = Q.matchMedia, D, T = [];
    Ha.push(function() {
      G = v;
      D = Sa(ra, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Da(function() {
        T.length && qa(S);
      });
    });
    Z = function(e, g, t, r) {
      if (l) {
        e.addEventListener(g, t, r ? Y ? r : r.capture || !0 === r : !1);
      } else {
        var C = {j:e, i:t};
        r = b[g];
        var fa = "on" + g, sa, ab;
        if (r) {
          for (sa = r.length; ab = r[--sa];) {
            if (ab.j === e && ab.i === t) {
              return;
            }
          }
          b[g].push(C);
        } else {
          b[g] = r = [C], d || (g = e[fa], "function" === typeof g && g !== ka && r.unshift({j:e, i:g}));
        }
        d ? e.attachEvent(fa, ka) : e[fa] = ka;
      }
    };
    xa = function(e, g, t, r) {
      if (l) {
        e.removeEventListener(g, t, r ? Y ? r : r.capture || !0 === r : !1);
      } else {
        r = b[g];
        g = "on" + g;
        var C, fa, sa;
        if (r) {
          for (C = r.length; fa = r[--C];) {
            fa.j === e && (fa.i === t ? r.splice(C, 1) : sa = !0);
          }
          sa || (d ? e.detachEvent(g, ka) : z ? (e[g] = gb, e[g] = null) : delete e[g]);
        }
      }
    };
    var Y = !z && !db && (new zc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), b = {}, d = !1, a = 525.13 > Ga, l = !a && !db && Q.addEventListener, m;
    a && hb.addEventListener("click", function(e) {
      if (m) {
        return m = !1, e.preventDefault(), !1;
      }
    });
    Da = function(e) {
      Ha.push(e);
    };
    fb = function(e) {
      x && x.push(e);
    };
    var x = [];
    if (419.3 >= Ga) {
      var N = function() {
        if (N) {
          var e = K.readyState;
          "loaded" === e || "complete" === e ? (N = v, O()) : qa(N);
        }
      };
      qa(N);
    } else {
      Z(Q, "load", O);
    }
    z || !Qa && 1.8 > R ? Z(Q, "unload", function(e) {
      U(x, e, !0);
    }) : x = v;
    sb = function(e) {
      gc.push(e);
    };
    Da(function() {
      ja();
      Bb(ja);
    });
    Vb = function(e, g) {
      if (J) {
        Z(e, "focusin", g);
      } else if (X) {
        Z(e, "DOMFocusIn", g);
      } else {
        if (V) {
          ta || (ta = Ib(n, 333));
        } else if (ba || ea) {
          Z(K, "focus", Ea, !0);
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
    uc = function(e, g) {
      if (J) {
        Z(e, "focusin", g);
      } else if (X) {
        Z(e, "DOMFocusIn", g, !1);
      } else {
        for (var t = na, r = 0, C = t.length; r < C; ++r) {
          if (t[r] === e && t[r + 1] === g) {
            t.splice(r, 2);
            t.length || (V ? ta = lc(ta) : (ba || ea) && xa(K, "focus", Ea, !0));
            break;
          }
        }
      }
    };
    var J = 6 <= z || pb || 52 <= R || 15 <= Pa || 534 <= Ga || 5 <= Wa || Ac || 4 <= qb || 4 <= cc || 11.6 <= ca(8) || 12 <= ca(9), X = 8 <= L || Pa || qb || cc || Ga || Wa, ba = 8 > L, V = 6 > z, ea = 52 > R || Kb;
    if (ea || ba) {
      var na = [];
      var Ea = function(e) {
        var g = na, t = ba ? K.activeElement : e.target;
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
          (sa === t || Ya(sa, t)) && g[C + 1].call(sa, e);
        }
      };
    } else if (V) {
      na = [];
      var ta, Fa, oa, n = function() {
        oa = Q.onerror;
        Q.onerror = q;
        var e = K.activeElement;
        if (Fa !== e) {
          Fa = e;
          for (var g = na, t, r = 0, C = g.length; r < C; ++r) {
            t = g[r], (t === e || Ya(t, e)) && g[r + 1].apply(t, [{target:e}]);
          }
        }
        Q.onerror = oa;
        oa = v;
      }, q = function() {
        Q.onerror = oa;
        oa = Fa = v;
        return !0;
      };
    }
    Ub = function(e) {
      Ia && Ia.push(e);
    };
    var B = 60 > R || Kb, y, A, u;
    if (89 <= R || 89 <= Pa || Lb && 79 <= dc || ha && (ha("(forced-colors:none)").matches || ha("(forced-colors:active)").matches)) {
      Wb = !0, G("(forced-colors:active)", function(e) {
        y = e.matches;
        ya = E();
        I(Ia, ya);
      });
    } else if (10 <= z || pb || Lb && dc) {
      Wb = !0, G("(-ms-high-contrast:black-on-white)", function(e) {
        y = A = e.matches;
        ya !== E() && (ya = E(), I(Ia, ya));
      }), G("(-ms-high-contrast:white-on-black)", function(e) {
        y = u = e.matches;
        ya !== E() && (ya = E(), I(Ia, ya));
      }), G("(-ms-high-contrast:active)", function(e) {
        y = e.matches;
        ya !== E() && (ya = E(), I(Ia, ya));
      });
    } else if (Lb && (z || R && 0 <= Ka.conpare(La, "1.8.1") || Kb)) {
      var P = function() {
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
        var g = K.defaultView;
        var t = g ? g.getComputedStyle(D, null) : D.currentStyle;
        g = (t && t.color || "").split(" ").join("");
        t = (t && t.backgroundColor || "").split(" ").join("");
        g && (y = "#123456" !== g && "rgb(18,52,86)" !== g, A = e(g) < e(t, !0), u = e(g) > e(t, !0), ya !== E() && (ya = E(), I(Ia, ya, B)));
      };
      sb(function(e) {
        if (e) {
          return Ua(D, "color", "#123456"), Ua(D, "backgroundColor", "#123456"), B ? (P(), Ia = v) : Bb(P), P = v, !0;
        }
      });
    } else {
      Ia = E = v;
    }
    tb = function(e) {
      c.push(e);
    };
    var c = [], h = 7.5 <= L && 8 > L;
    h && function() {
      for (var e = K.images, g = e.length, t; g;) {
        t = e[--g], t.J = t.src, Ta(t, "src");
      }
    }();
    Da(function() {
      function e() {
        r ? (C = t[--r], h && Za(C, "src", C.J), hc(g, h ? C.J : C.src)) : tb = c = v;
      }
      function g(sa) {
        U(c, {G:C, H:sa}, !r);
        e();
      }
      var t = K.images || eb("img"), r = t.length;
      if (12 > L || 532 > Ga) {
        e();
      } else {
        for (; r;) {
          var C = t[--r];
          var fa = 9 > z ? C.complete : 0 <= C.naturalWidth ? C.naturalWidth : C.width;
          I(c, {G:C, H:fa}, !r);
        }
        tb = c = v;
      }
    });
    Tb = function(e) {
      f.push(e);
    };
    var f = [], k;
    Z(Q, "resize", da);
    fb(function() {
      k && ac(k);
      xa(Q, "resize", da);
    });
    lb = function(e) {
      w.push(e);
    };
    var w = [], p = 1 > R || 1.2 <= R && 1.8 > R || 7.2 >= L, F;
    p ? Bb(function() {
      var e = Q.pageYOffset;
      F !== e && (F = e, ia({type:"scroll", cancelable:!1, stopPropagation:gb, preventDefault:gb}));
    }) : Z(Q, "scroll", ia, {passive:!0});
    fb(function() {
      p || xa(Q, "scroll", ia, {passive:!0});
    });
    vc = function(e, g) {
      if (H) {
        Z(e, "wheel", g, {passive:!1});
      } else if (M) {
        Z(e, "mousewheel", g, !1);
      } else if (ma) {
        Z(e, "MozMousePixelScroll", g, !1);
      } else if (W) {
        for (var t = aa, r = 0, C = t.length; r < C; ++r) {
          if (t[r] === e && t[r + 1] === g) {
            return;
          }
        }
        t.length || Z(K, "DOMMouseScroll", la, !1);
        t.push(e, g);
      }
    };
    wc = function(e, g) {
      if (H) {
        xa(e, "wheel", g, {passive:!1});
      } else if (M) {
        xa(e, "mousewheel", g, !1);
      } else if (ma) {
        xa(e, "MozMousePixelScroll", g, !1);
      } else if (W) {
        for (var t = aa, r = 0, C = t.length; r < C; ++r) {
          if (t[r] === e && t[r + 1] === g) {
            t.splice(r, 2);
            t.length || xa(K, "DOMMouseScroll", la, !1);
            break;
          }
        }
      }
    };
    var H = 9 <= z || pb || 17 <= R || 31 <= Pa || 537.7 <= Ga, M = 6 <= z || pb || 9 <= L || Pa || 522 <= Ga || Wa, ma = xb, W = R && 0 <= Ka.conpare(La, "0.9.7") && !xb;
    if (W) {
      var aa = [], la = function(e) {
        for (var g = aa, t = e.target, r, C = 0, fa = g.length; C < fa; ++C) {
          r = g[C], Ya(r, t) && g[C + 1].call(r, e);
        }
      };
    }
  })();
  (function() {
    9 > z && Da(function() {
      var E = Sa(ra, "div");
      rb(E, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ec = 1 < E.offsetHeight;
      Ja(E);
    });
    hc = bz;
    function bz(E, O) {
      function G() {
        I || !S || U.complete ? (qa(E, !!U.width), U.onerror = U.onload = gb, U = E = v) : (--S, qa(G));
      }
      var U = new Image(), I, S = 99;
      U.onerror = function() {
        I = !0;
      };
      U.onload = function() {
        I = !0;
      };
      U.src = O;
      qa(G);
    }
    bz = !1;
  })();
  (function() {
    tb(function(a) {
      var l = a.G;
      a = a.H;
      var m = Ca(l);
      !Ma(m, "aBodyRoot") && a ? $a(m, "js-image-has-been-loaded") : a || wa(l, "alt") || Ua(l, "display", "none");
    });
    Qa && (Ha.splice(1, 0, function() {
      for (var a = oc(cb, "RichLink-sep"), l, m, x, N, J, X; l = a.shift();) {
        for (l = Ra(l); m = l.shift();) {
          if ("A" === Aa(m) && !m.innerHTML) {
            for (; x = l.shift();) {
              if (1 === x.nodeType) {
                if ("A" === Aa(x)) {
                  break;
                }
                for (N = Xa(x, "A"); J = N.shift();) {
                  for (X = Ra(J); X.length;) {
                    J.parentNode.insertBefore(X.shift(), J);
                  }
                  Ja(J);
                }
              }
              m.appendChild(x);
            }
          }
        }
      }
    }), Ha.splice(2, 0, function() {
      for (var a = eb("A"), l, m; l = a.shift();) {
        "A" !== Aa(l) || l.innerHTML || (m = l.nextSibling && l.nextSibling.firstChild) && m.href === l.href && Ja(l);
      }
    }));
    5.5 <= z && 8 > z && Ia && Ub(function(a) {
      for (var l = Xa(ra, "a"), m = l.length, x = 0; x < m; ++x) {
        l[x].hideFocus = !a;
      }
    });
    if (!Wb && Ia) {
      var E, O = function() {
        E = Sa(bb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:za + "css/" + yb + "hc/" + Mb});
        (fc || 5.5 <= z && 9 > z && ec) && $a(ra, "js-canuse-css-rotate-when-forced-colors-mode");
        O = v;
      };
      Ub(function(a) {
        a && !E ? O() : E && (a ? bb.appendChild(E) : Ja(E));
      });
    }
    L && Da(function() {
      for (var a = Xa(ra, "a"), l = a.length, m = 0, x; m < l; ++m) {
        x = a[m], "-1" === wa(x, "tabIndex") ? Ta(x, "tabIndex") : wa(x, "href") && Za(x, "tabIndex", "0");
      }
      a = Xa(ra, "input");
      m = 0;
      for (l = a.length; m < l; ++m) {
        x = a[m], "hidden" === wa(x, "type") && Ta(x, "tabIndex");
      }
    });
    if (R && 0 > Ka.conpare(La, "0.9.5")) {
      kc = !0;
      var G, U, I, S, ka;
      Da(function() {
        Z(K, "keydown", ja);
        Z(K, "keyup", da);
        Vb(ra, pa);
        Qa || (Z(Q, "blur", Y), Z(ra, "click", T));
      });
      var ja = Qa ? function(a) {
        16 === a.keyCode ? G = !0 : 9 === a.keyCode && S && ia(S, !0) && (S.blur && S.blur(), a.stopPropagation(), a.preventDefault(), qa(D));
      } : function(a) {
        16 === a.keyCode ? G = !0 : 9 === a.keyCode && (U = ib());
      }, da = function(a) {
        16 === a.keyCode && (G = !1);
      }, pa = Qa ? function(a) {
        S = a.target;
      } : function(a) {
        var l = a.target;
        if (S === l) {
          I = v;
        } else if (I) {
          l === I ? (a.stopPropagation(), D(!0)) : (l.blur && d(l), a.preventDefault(), D());
        } else {
          if (a = S) {
            S = v, d(a);
          }
          I = l;
          D(!0);
        }
      }, ia = function(a, l) {
        var m = ib(), x = ra, N = "nextSibling", J = "firstChild";
        G && (l || m - 99 < U && U <= m) && (N = "previousSibling", J = "lastChild");
        for (I = v; a !== x;) {
          if (X) {
            m = a;
            var X = !1;
          } else {
            m = a[N];
          }
          if (m) {
            if (1 === m.nodeType) {
              if (ha(m)) {
                return I = m, !0;
              }
              a = (X = m[J]) || m;
            } else {
              a = m;
            }
          } else {
            a = a.parentNode;
          }
        }
      }, ha = function(a, l) {
        function m() {
          return "-1" !== wa(a, "tab-index");
        }
        function x() {
          return 0 < a.offsetHeight * a.offsetWidth;
        }
        if (a.focus) {
          var N;
          switch({A:l ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Aa(a)]) {
            case 1:
              if (kb(a, "href") && m() && x()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== wa(a, "type") && m() && !kb(a, "disabled") && x()) {
                return !0;
              }
              break;
            case 3:
              if (m() && !kb(a, "disabled") && x()) {
                return !0;
              }
              break;
            default:
              if ((N = wa(a, "tab-index")) && "-1" !== N && x()) {
                return !0;
              }
          }
        }
      }, D = function(a) {
        ka = 0;
        I && (Qa || Z(I, "blur", b), S = I, I = v, a || S.focus());
      };
      if (!Qa) {
        var T = function(a) {
          var l = a.target;
          if (S && ha(l, !0)) {
            var m = S;
            S = v;
            d(m);
            I = l;
            a.stopPropagation();
            a.preventDefault();
            D();
          }
        }, Y = function(a) {
          a.target === K && (I = v);
        }, b = function(a) {
          a = a.target;
          xa(a, "blur", b);
          S === a && ia(a) && (ka || (ka = qa(D)));
        }, d = function(a) {
          xa(a, "blur", b);
          a.blur();
        };
      }
    }
  })();
  (function() {
    function E(c) {
      var h = Y.length, f, k, w, p;
      if (13 === (c.keyCode || c.ba) || c.type !== b) {
        for (; h;) {
          var F = Y[--h];
          if (F.F === this || F.u === this) {
            h = F.F;
            var H = f = F.u;
            if (F.P) {
              if (Ua(h, "width", F.Z), h.src = F.Y, Db(H, F.T), h = F.L) {
                rb(h, F.S), sc(h, "js-captioned-thumbnail__large");
              }
            } else {
              if (k = F.N) {
                delete F.N;
                if (F.M) {
                  for (; f = Ca(f);) {
                    if (!Ma(f, "caption")) {
                      var M = Aa(f);
                      if ("DIV" === M || "P" === M || "BLOCKQUOT" === M || "LI" === M || "DD" === M || "TD" === M || "TH" === M || "FORM" === M || "PRE" === M) {
                        break;
                      }
                    }
                  }
                  f = (f.offsetWidth | 0) - 4;
                  1600 < f && (f = 1600);
                  if (2 === F.M) {
                    k = k.split("=");
                    M = k.length;
                    if (w = k[M - 1]) {
                      (p = Oa(w.substr(1))) && w === "s" + p ? k[M - 1] = "w" + f : k[M] = "w" + f;
                    }
                    k = k.join("=");
                  } else {
                    k = k.split("/");
                    M = k.length;
                    if (w = k[M - 2]) {
                      (p = Oa(w.substr(1))) && w === "s" + p ? k[M - 2] = "w" + f : k.splice(M - 1, 0, "w" + f);
                    }
                    k = k.join("/");
                  }
                }
                F.W = k;
              }
              F.T = rc(H);
              $a(H, "js-pica-thumbnail__large");
              Ua(h, "width", "");
              h.src = F.W;
              if (h = F.L) {
                rb(h, ""), $a(h, "js-captioned-thumbnail__large");
              }
            }
            F.P = !F.P;
            break;
          }
        }
        O(c);
      }
    }
    function O(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function G(c) {
      var h = ta;
      if (ub) {
        if (Fa && !h) {
          if (ib() < Fa) {
            return;
          }
          Fa = v;
        }
        7 === c ? oa = 0 : (oa && (oa = Ab(oa)), na = Jb());
        h ? (ta = U(v, h[0], h[1])) || (Fa = ib() + 99) : U();
      } else {
        ta = v;
      }
    }
    function U(c, h, f) {
      function k(Na) {
        H = Na;
        if (V) {
          M = V + ":translate" + (Ea ? "3D(0," : "(0,") + Na + (Ea ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Na) {
          if (m || x) {
            var Xb = J.offsetWidth;
          }
          M = m ? "position:fixed;width:" + Xb + "px;top:" + (Na - w + aa) + "px" : N ? "top:" + Na + "px" : "position:absolute;top:" + Na + "px;left:0";
          if (x && M) {
            var vb = 8 > z ? " " : ",";
            M += ";clip:rect(" + (0 > Na ? -Na + "px" + vb + Xb + "px" + vb + t : "0" + vb + Xb + "px" + vb + (Na + t < r ? t : r - Na)) + "px" + vb + "0)";
          }
        }
      }
      var w = na, p = X, F = J.offsetTop === p.offsetTop, H = 0, M = "", ma = !0;
      if (F) {
        for (var W = 0, aa = 0, la = p; la && la !== ra;) {
          aa += la.offsetTop, la = la.offsetParent;
        }
        H = ea;
        var e = 11 > z ? hb.offsetHeight : Q.innerHeight, g = p.offsetHeight, t = ba.offsetHeight, r = t < g ? g : t, C = w, fa = C + e, sa = aa, ab = sa + r, xc = aa + H, Fc = xc + t;
        p = C < sa ? sa : C;
        la = ab < fa ? ab : fa;
        var mb = la - p;
        C = ab <= C;
        fa = fa <= sa;
        if (h !== v) {
          ma = aa + h;
          c = ma + f;
          var nb;
          if (C || fa) {
            return e <= f ? nb = aa : nb = C ? ab - f : aa + f - e, Fa = v, Q.scroll(0, nb), ta;
          }
          t <= mb ? W = 3 : f <= mb ? t - h <= mb ? W = 2 : p <= ma && c <= la ? p < aa + H && (W = 4) : W = p <= ma && ma <= la ? 5 : p <= c && c <= la ? 4 : c < p ? 4 : 5 : W = 4;
          ma = v;
        } else {
          c !== v ? t <= mb ? (W = 7, ma = !1) : (H -= 60 * c, W = la - aa - t, nb = p - aa, H < W ? H = W : nb < H && (H = nb), W = 6) : g <= t || (C ? W = 1 : fa || (t <= mb ? W = 3 : p < xc ? W = 3 : Fc < la ? W = 2 : w < aa + t - mb || (W = 2)));
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
      rb(ba, M);
      ea = H;
      return F && ma;
    }
    function I(c) {
      if (ub && (R && (na = Jb()), this !== c.target)) {
        var h = Gb(c.deltaY) ? c.deltaY : Gb(c.wheelDeltaY) ? c.wheelDeltaY / 120 : Gb(c.wheelDelta) ? c.wheelDelta / -120 : c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1);
        h && U(9 >= h ? -9 >= h ? -3 : h : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function S(c) {
      if (ub) {
        var h = R && 0 > Ka.conpare(La, "0.9.4"), f = c.target;
        c = ba;
        var k = 0;
        if (Ya(c, f)) {
          if (V) {
            h = f.getBoundingClientRect();
            var w = h.bottom - h.top;
            k = h.top - c.getBoundingClientRect().top | 0;
          } else {
            w = f.offsetHeight;
            var p = f;
            if (h) {
              for (var F = []; p && (R ? Ya(c, p) : c !== p);) {
                for (; p.previousSibling;) {
                  p = p.previousSibling, p.tagName && F.unshift(p.tagName + ":" + p.offsetTop);
                }
                p = p.offsetParent;
              }
              p = f;
            }
            for (; p && (R ? Ya(c, p) : c !== p);) {
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
          l ? (ta = [k, w], oa && Ab(oa), oa = qa(G, 7, 1 > R || 536 > Ga || 14 > Pa ? 500 : 0)) : (na = Jb(), U(v, k, w));
        }
      }
    }
    function ka() {
      n.call(q);
    }
    function ja() {
      K.fullscreenElement || K.fullscreen || K.webkitIsFullscreen || K.msFullscreenElement || Q.fullScreen ? (Za(q, "id", "blog2slide-root"), A[1].parentNode.insertBefore(B, A[1]), da(), K.onkeydown = pa) : y && (Ja(B), Ta(q, "id"), Ta(y, "id"), y = K.onkeydown = v);
    }
    function da() {
      y && Ta(y, "id");
      u = 0 < u ? P < u ? P : u : 0;
      y = A[u];
      Za(y, "id", "blog2slide-current");
    }
    function pa(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++u, da();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --u, da();
      }
    }
    jc = R && 0 >= Ka.conpare(La, "0.9");
    zb = !(7.2 > L || jc);
    Nb = function(c) {
      ia ? K.write('<script src="' + c + '">\x3c/script>') : Ha || D.length ? D.push(c) : T(c);
    };
    Ob = function() {
      ia || T(D.shift());
    };
    var ia = !zb, ha = zb && 7.5 > L;
    if (!ia) {
      var D = [];
      ha && (ic = !0);
      Da(function() {
        T(D.shift());
      });
      var T = function(c) {
        c && (ha ? Yb[0].src = c : Sa(bb, "script", {src:c}));
      };
    }
    var Y = [], b = 5.5 <= z && 8 > z ? "keypress" : "keydown";
    if (!bc) {
      var d = Ba.transition !== v || Ba["-o-transition"] !== v || Ba["-moz-transition"] !== v || Ba["-webkit-transition"] !== v;
      tb(function(c) {
        if (c.H && cb) {
          c = c.G;
          var h = Ca(c), f = "", k;
          if ("A" === Aa(h) && 1 === pc(h).length) {
            var w = wa(h, "href");
            var p = w.split("?")[0].split("#")[0].split(".");
            p = (p[p.length - 1] || "").toLowerCase();
            if ((k = 0 < w.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + p + ".")) {
              Z(h, b, E);
              Z(c, "click", E);
              Z(h, "click", O);
              d && (f = c.naturalWidth + "px", Ua(c, "width", f));
              $a(h, "js-pica-thumbnail");
              for (p = h; p = Ca(p);) {
                if (Ma(p, "caption")) {
                  $a(p, "js-captioned-thumbnail");
                  var F = p;
                  var H = tc(F);
                  break;
                }
              }
              Y.push({u:h, L:F, S:H, Y:c.src, Z:f, N:w, F:c, M:k ? 0 < w.indexOf("/img/a/") ? 2 : 3 : 0 < w.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      fb(function(c, h) {
        for (c = -1; h = Y[++c];) {
          xa(h.u, b, E), xa(h.F, "click", E), xa(h.u, "click", O);
        }
      });
    }
    var a = ["jsSidebarFixer1", "jsSidebarFixer2"], l = !(9 > z || L || 1 <= R && 1.3 > R || kc), m = !(5 > Wa || 2.2 > qb || 6 > ca(12) || va(30) && 534 > Ga || va(32) || 7 > z || 9 > L || 1 > R), x = m || 6 === z || 1 > R, N = 7.5 > L, J, X, ba, V = Ec && fc, ea = 0, na = 0, Ea, ta, Fa, oa;
    yc || bc || (sb(function(c) {
      if (c) {
        if (!cb) {
          return !0;
        }
        c = -1;
        var h;
        J = jb("jsSide");
        X = cb;
        if (!J) {
          return !0;
        }
        lb(G);
        Tb(G);
        ba = Cb(Rb(J), "div", {id:"jsSidebarFixer"});
        for (Vb(ba, S); 1 < Ra(J).length;) {
          ba.appendChild(Ra(J)[1]);
        }
        for (; h = a[++c];) {
          vc(jb(h), I);
        }
        z || pb || 2 > Pa || (Ea = Ba.perspective !== v || Ba.MozPerspective !== v || Ba["-webkit-perspective"] !== v);
        G();
        return !0;
      }
    }), fb(function() {
      for (var c = -1, h; h = a[++c];) {
        wc(jb(h), I);
      }
      uc(ba, S);
    }));
    Da(function() {
      function c(F, H, M, ma) {
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
        M = ma ? Cb(Rb(f), W, {className:M}) : Sa(f, W, {className:M});
        Sa(M, "a", 0 === H.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:H} : {href:H}, F);
      }
      if (cb) {
        for (var h = Xa(cb, "blockquote"), f, k = -1, w, p; f = h[++k];) {
          w = wa(f, "title"), p = wa(f, "cite"), w && p ? (Ta(f, "title"), c(w, p, "js-generated-link-in-blockquote", !0)) : p && (Ta(f, "cite"), c(Q.decodeURI ? decodeURI(p) : p, p, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var n, q, B, y, A, u, P;
    Da(function() {
      var c = jb("blog2slide-start");
      if (c) {
        var h = K.onfullscreenchange !== v ? "f" : K.onmozfullscreenchange !== v ? "mozF" : K.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        n = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== h || n ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', Z(c.firstChild, "click", ka), c = Ca(c), q = Ca(c), A = Xa(c, "section"), B = K.createElement("h1"), B.innerHTML = Xa(ra, "h1")[0].innerHTML, P = A.length, A.splice(0, 0, B), 0 !== h ? Z(K, h + "ullscreenchange", ja) : z ? Z(K, "MSFullscreenChange", ja, !1) : Tb(ja)) : Ja(c);
      }
    });
  })();
  var ob, Eb = !$b || .9 > R || 8 > L || 5.5 > z, Va;
  (function() {
    function E(n) {
      return n === "" + n;
    }
    function O(n, q) {
      return Eb ? new T(n, q) : new $b(n, q);
    }
    function G(n, q, B, y) {
      if (D() - Y < l && !y) {
        return n(q);
      }
      qa(U, {U:n, X:q});
    }
    function U(n) {
      Y = D();
      n.U(n.X);
    }
    function I(n, q) {
      n && ob[n] || (n = m.test(q) ? "default-markup" : "default-code");
      var B = !!ob[n];
      B && G(ba, n, 0, !0);
      return B;
    }
    function S() {
      function n(M, ma, W) {
        ma && (q.h = q.h || [], q.h.push({l:q, B:q.B, O:1, s:P, D:M, o:ma, m:W, R:{}, v:0}));
      }
      var q = b, B = q.m, y = B[0], A = B[2], u = q.D, P = q.s, c = q.$.shift(), h = q.R;
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
          !(k = E(f)) || w && E(w[1]) || (k = !1, f = 11);
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
          if (p && I(f, k)) {
            n(u + A + y, k);
            var H = !0;
          }
          n(u + A + F, c.substr(F), B);
          q.h && q.h.length && (b = q.h.shift());
          H || (b !== q ? G(J, v, 2) : G(S, v, 2));
        } else {
          P.push(u + A, f), G(S, v, 2);
        }
      } else {
        q.l ? (b = q.l.h.shift()) ? G(J, v, 2) : (b = q.l, G(S, v, 2)) : G(na, v, 2);
      }
    }
    function ka(n) {
      if (X.length) {
        var q = X.shift(), B = ia[q];
        if (B.pop) {
          ia[q] = O(B[0], B[1]);
        } else if (E(B)) {
          ia[q] = O(B);
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
    ha = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), D = wb.now || function() {
      return +new wb();
    }, T, Y, b, d, a, l = 5 > z ? 60 : 5.5 > z ? 0 : Eb ? 20 : 10, m, x;
    Va = [function(n) {
      Q.RegExpCompat = T = n;
    }, function() {
      m = O("^\\s*<");
      x = O("\\S");
    }];
    Eb || (Va[1](), Va = v);
    var N = function() {
      var n = b, q = n.V, B = V(n.B, n.O), y = n.o = B.o;
      n.I = B.I;
      I(q, y) || (b = v, G(oa, v, 0, !0));
    };
    var J = function() {
      var n = b;
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
      var y = b, A = ob[n];
      E(A) && (A = ob[n] = ob[A]);
      var u = A[0];
      if (0 <= u) {
        u = da[u];
        if (0 <= u["-num"]) {
          var P = u["-num"];
          delete u["-num"];
          for (var c = -1; 9 > c;) {
            u["" + ++c] = P;
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
      for (P = u.length; c < P; ++c) {
        u[c] = q(u[c]);
      }
      X.length ? G(ka, n, 2) : (y.m ? y.l && (y.l.h[0].m = A) : y.m = A, G(J, v, 1));
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
              y[P] = "\n", u[P << 1] = A++, u[P++ << 1 | 1] = h;
            }
          }
        } else if (3 === f || 4 === f) {
          if (f = h.nodeValue) {
            f = q ? f.split("\r\n").join("\n").split("\r").join("\n") : f.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), y[P] = f, u[P << 1] = A, A += f.length, u[P++ << 1 | 1] = h;
          }
        }
      }
      var y = [], A = 0, u = [], P = 0;
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
            A(f), f.parentNode && Ja(f);
          } else {
            for (f = f.firstChild; f; f = f.nextSibling) {
              y(f);
            }
          }
        } else if ((3 === k || 4 === k) && B) {
          var w = f.nodeValue, p = w.indexOf("\r\n"), F = 2;
          -1 === p && (p = w.indexOf("\n"), F = 1);
          -1 === p && (p = w.indexOf("\r"));
          -1 !== p && (k = w.substr(0, p), f.nodeValue = k, (w = w.substr(p + F)) && Sb(f, w), A(f), k || Ja(f));
        }
      }
      function A(f) {
        function k(p, F) {
          var H = F ? p.cloneNode(!1) : p, M = p.parentNode;
          if (M) {
            M = k(M, 1);
            var ma = p.nextSibling;
            M.appendChild(H);
            for (var W = ma; W; W = ma) {
              ma = W.nextSibling, M.appendChild(W);
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
        P.push(f);
      }
      for (var u = K.createElement("li"); n.firstChild;) {
        u.appendChild(n.firstChild);
      }
      for (var P = [u], c = 0; c < P.length; ++c) {
        y(P[c]);
      }
      if (q === (q | 0)) {
        if (10 <= q && 7.2 > L) {
          var h = K.createElement("ol");
          h.innerHTML = '<li value="' + q + '">' + u.innerHTML + "</li>";
          P[0] = h.firstChild;
        } else {
          Za(u, "value", q);
        }
      }
      h = Sa(n, "ol", {className:"linenums"});
      n = Math.max(0, q - 1 | 0) || 0;
      c = 0;
      for (q = P.length; c < q; ++c) {
        u = P[c], Db(u, "L" + (c + n) % 10), u.firstChild || qc(u, "\u00a0"), h.appendChild(u);
      }
    };
    var na = function() {
      var n = b, q = n.o, B = q.length, y = 0, A = n.I, u = A.length, P = 0, c = n.s, h = c.length, f = 0;
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
      n && (h = n.style.display, Ua(n, "display", "none"));
      for (; P < u;) {
        k = A[P + 2] || B;
        p = c[f + 2] || B;
        w = Math.min(k, p);
        F = A[P + 1];
        var H;
        if (1 !== F.nodeType && (H = q.substring(y, w))) {
          9 > z && (H = H.split("\n").join("\r"));
          var M = Cb(F, "span", {className:ha[c[f + 1]]}, H);
          Ja(F);
          y < k && (A[P + 1] = Sb(M, q.substring(w, k)));
        }
        y = w;
        y >= k && (P += 2);
        y >= p && (f += 2);
      }
      n && Ua(n, "display", h);
      b = v;
      G(oa, v, 3, !0);
    };
    var Ea = [], ta;
    sb(function(n) {
      if (n) {
        n = [eb("pre"), eb("code"), eb("xmp")];
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
      1 === ta && (Zb ? qa(Zb, oa) : Va ? Va.push(function() {
        qa(oa);
      }) : qa(oa));
    };
    var oa = function() {
      function n(P, c) {
        return (P.split(c)[1] || "").split(" ")[0];
      }
      if (!b) {
        ta !== Ea.length && a && a(ta - Ea.length, ta);
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
              $a(q, "prettyprinted");
              y = !1;
              if (!y) {
                y = n(B, "lang-") || n(B, "language-");
                var u;
                !y && (u = ja(q)) && "CODE" === Aa(u) && (y = n(u.className, "lang-") || n(u.className, "language-"));
              }
              A = Aa(q);
              "PRE" === A || "XMP" === A ? A = 1 : (A = q.currentStyle, u = K.defaultView, A = (A = A ? A.whiteSpace : u && u.getComputedStyle ? u.getComputedStyle(q, null).getPropertyValue("white-space") : 0) && "pre" === A.substr(0, 3));
              u = !1;
              (u = "true" === u || +u) || (u = n(B, "linenums:") || Ma(q, "linenums"), u = u.length ? +u : u);
              u && ea(q, u, A);
              b = {V:y, B:q, aa:u, O:A, D:0, v:0, R:{}, s:[]};
              G(N);
              return;
            }
          }
          G(oa, v, 0, !0);
        } else {
          d && d();
        }
      }
    };
    Q.PR = {RegExpProxy:O, prettifyElement:Fa, registerCompleteHandler:function(n, q) {
      d = n;
      a = q;
    }};
  })();
  var Yb = K.scripts || eb("script");
  var za = Yb[Yb.length - 1].src.split("/");
  --za.length;
  "js" === za[za.length - 1] && --za.length;
  (za = za.join("/")) && (za += "/");
  var yc = Dc || "1" === wa(ra, "mob");
  yb = (yc ? "mb" : "pc") + "/";
  6.1 > Wa && (lb ? lb(Pb) : Z(Q, "scroll", Pb));
  fb(mc);
  6.1 > Wa && (lb ? lb(Qb) : Z(Q, "scroll", Qb));
  fb(nc);
  10 > z && (11 !== Bc || 5 !== z) || (9 > L || 1 > R || !db && !Q.addEventListener ? K.write('<link href="' + za + "css/" + yb + Mb + '" rel="stylesheet"' + (8 > L ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > L || 1.5 > R || 534 > Ga || 5 > Wa || 7 > Pa || 3 > qb) && Da(function() {
    Sa(bb, "link", {href:za + "css/" + yb + Mb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Eb) {
    if (zb) {
      var Zb = function(E) {
        Q.RegExpCompat = bz;
        Zb = v;
        Nb(za + "js/regexpcompat.js");
        function bz(O) {
          for (var G; G = Va.shift();) {
            G(O);
          }
          Va = v;
          qa(E);
          Ob(za + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Q.RegExpCompat = function(E) {
        for (var O; O = Va.shift();) {
          O(E);
        }
        Va = v;
        Ob(za + "js/regexpcompat.js");
      }, Nb(za + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

