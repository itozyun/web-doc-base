/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Function.prototype.apply||(Function.prototype.apply=function(_x,_y){var f=this,x=_x!=null?_x:{},y=_y||[],j=y.length,i=0,r,a,u;x.__apply=f;if(!x.__apply)a=x.constructor.prototype.__apply=f;switch(j){case 0:r=x.__apply();break;case 1:r=x.__apply(y[0]);break;case 2:r=x.__apply(y[0],y[1]);break;case 3:r=x.__apply(y[0],y[1],y[2]);break;case 4:r=x.__apply(y[0],y[1],y[2],y[3]);break;case 5:r=x.__apply(y[0],y[1],y[2],y[3],y[4]);break;case 6:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5]);break;case 7:r=x.__apply(y[0],
y[1],y[2],y[3],y[4],y[5],y[6]);break;case 8:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7]);break;case 9:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]);break;default:r=[];for(;i<j;++i)r[i]="y["+i+"]";r=eval("x.__apply("+r.join(",")+")")}a?delete x.constructor.prototype.__apply:x.__apply=u;return r});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d});
window.decodeURI||(decodeURI=function(d){var e=[],f=parseInt,h=String.fromCharCode;d+="";for(var g=-1,b=0,k=d.length,c,a;b<k;++b)a?(a=f(d.substr(b,2),16),++b,127<a&&(223<a?(c=(a&15)<<12,a=f(d.substr(b+2,2),16)&63,b+=3,c+=a<<6):c=(a&63)<<6,a=f(d.substr(b+2,2),16)&63,b+=3,a+=c),e[++g]=h(a),a=!1):(c=d.charAt(b),(a="%"===c)||(e[++g]=c));return e.join("")});window.decodeURIComponent||(decodeURIComponent=decodeURI); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
var E, qb;
(function(Wa, Z, fb, Ic, M, mc, md, $b, rb, nc, oc, Jc, pc, v) {
  function ea(N) {
    if (Wa[0] === N) {
      return bb === bb + "" ? rb(bb) : bb;
    }
  }
  function Ia(N) {
    var H = Wa[3];
    if (Wa[2] === N) {
      return H === H + "" ? rb(H) : H;
    }
  }
  function yb(N) {
    var H = yb.O || (yb.O = {}), K = H[N], X, P;
    if (K) {
      return K;
    }
    K = N.split("-");
    X = K.length;
    if (2 > X) {
      return N;
    }
    for (; 1 < X;) {
      P = K[--X];
      K[X] = P.charAt(0).toUpperCase() + P.substr(1);
    }
    return H[N] = K.join("");
  }
  function qc() {
    return 6 > y ? ra.scrollTop : y ? zb.scrollTop : Z.pageYOffset;
  }
  var ra = M.body, gb = ra.style, zb, Ab, Bb, bb = Wa[1], y = ea(2) || ea(3), Jb = ea(7), kb = ea(5) || ea(6), D = ea(8) || ea(9), Y = ea(11) || ea(12), Vb = Y && 0 <= Wa.conpare(bb, "1.9.1"), Cb = ea(13), qa = ea(16), Da = ea(17) || ea(18), Kc = ea(10) || ea(26), za = ea(21) || ea(23), Lc = ea(24), cb = ea(22), ac = ea(25), nd = za || Lc || cb || ac, Mc = za && rb(mc.userAgent.split("Edg/")[1]), od = rb(mc.appVersion.split("Trident/")[1]) + 4, Kb = Ia(37) || Ia(38) || Ia(39), pd = Ia(40) || Ia(41) || 
  Ia(42) || Ia(43), qd = 0 <= mc.userAgent.indexOf("Googlebot/"), ib = 0.9 > Y, rc = (Jb ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > D ? "opr70" : 8 > D ? "opr72" : 9.5 > D ? "opr" + (D | 0) : Y && !Vb ? 1.4 <= Y ? "gck19" : 1.3 <= Y ? "gck13" : 1 <= Y ? "gck12" : ib ? 0.8 <= Y ? "gck08" : "gck07" : "gck09" : "modern") + ".css", bc = "", rd = Ia(1) || Ia(2) || Ia(3) || Ia(4) || Ia(8) || Ia(9), Nc, sb = 8 > y || 7.2 > D ? !1 : v, Oc = gb.transform !== v ? "transform" : 
  gb["-o-transform"] !== v ? "-o-transform" : gb["-ms-transform"] !== v ? "-ms-transform" : gb.MozTransform !== v ? "-moz-transform" : gb["-webkit-transform"] !== v ? "-webkit-transform" : "", Xa = [], Pc = [], jb = [], sc, Qc, Rc, Sc, cc, Tc, Uc, dc, ec, Vc = !1, tc = 525 > qa || 3.1 > Da || 2.2 > cb || 10 > D || Y && !Vb || ea(26) || 10 > ea(3) || Ia(34) || Ia(32) || Ia(3), aa, Lb, fc, Wc, sd = !!ra.getBoundingClientRect, gc = [], hc = [], uc, Xc, vc, Yc, Ya = $b.now || function() {
    return +new $b();
  }, Db, Mb, Zc, Eb, $c, Oa, lb, ad, wc, wa, Wb, bd, cd, xc, Ra, Fb, dd, ed, Za, Sa, tb, mb, ub, fd, ic, nb, Gb, yc, La, $a, gd, ob, ja, Pa, db, Nb, zc, Qb, Ob, Ac, Bc, jc, hd, id, jd, Rb, Ka, Cc, Ub, Zb, xb, Gc, Fa, ld, Hc;
  (function() {
    function N() {
      for (var U, ha = 0, T = Ya(); ha < L.length;) {
        T < L[0].t ? ++ha : (U = L.splice(ha, 1)[0], U.f(U.p));
      }
      ka = L.length ? oc(N, Ea) : 0;
    }
    function H() {
      for (var U, ha = 0; ha < P.length; ++ha) {
        U = P[ha], U.f();
      }
    }
    function K() {
      na && (na = clearInterval(na));
    }
    function X() {
      ka && (ka = Jc(ka));
    }
    E = function(U) {
      gc.push(U);
    };
    qb = function(U) {
      hc.push(U);
    };
    fc = function(U) {
      P.length || (na = pc(H, Aa));
      P.push({f:U, u:++Ba});
      return Ba;
    };
    Wc = function(U) {
      for (var ha = P.length, T; T = P[--ha];) {
        if (T.u === U) {
          P.splice(ha, 1);
          P[0] || K();
          break;
        }
      }
      return 0;
    };
    uc = function() {
      na && (K(), na = pc(H, Aa));
    };
    Xc = K;
    var P = [], Aa = 500, Ba = 0, na, L, Ea, Ga, ka;
    if (5 > y || Jb) {
      Z._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    aa = function(U, ha, T) {
      L.length || (ka = oc(N, Ea));
      L.push({f:U, p:ha, u:++Ga, t:Ya() + (Ea < T ? T : Ea)});
      return Ga;
    };
    Lb = function(U) {
      for (var ha = L.length, T; T = L[--ha];) {
        if (T.u === U) {
          L.splice(ha, 1);
          break;
        }
      }
      return 0;
    };
    vc = function() {
      ka && (X(), ka = oc(N, Ea));
    };
    Yc = X;
    L = [];
    Ea = Da | 0 || 530 <= qa && 534 > qa ? 64 : 16;
    Ga = 0;
    E("[core] TIMER_INTERVAL:" + Ea);
    if (5 > y || Jb) {
      Z._wdb_ontimer = N, N = "_wdb_ontimer()";
    }
  })();
  ob = 7.2 > D ? "-0" : 8 > D ? "0" : "-0";
  (function() {
    function N(a, d, n) {
      var t = ["<", a], B = 1, I, V, R;
      if (d) {
        for (I in d) {
          R = d[I];
          if (null != R && "" !== R) {
            if ("style" === I) {
              t[++B] = ' style="';
              for (V in R) {
                for (var ba = ++B, la, e = [], b = V.split(""), c = b.length; c;) {
                  la = b[--c], "A" <= la && "Z" >= la && (la = "-" + la.toLowerCase()), e[c] = la;
                }
                t[ba] = e.join("") + ":" + R[V] + ";";
              }
              t[++B] = '"';
            } else {
              "className" === I && (I = "class"), t[++B] = " " + I + '="' + R + '"';
            }
          }
        }
      }
      t[++B] = ">";
      null != n && (ma && "FONT" !== a ? t[++B] = "<FONT>" + H(n) + "</FONT>" : t[++B] = H(n));
      t[++B] = "</" + a + ">";
      return t.join("");
    }
    function H(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function K(a) {
      return X(M, a);
    }
    function X(a, d) {
      var n = "*" === d;
      n = ma ? n ? a.all : a.all.tags(d.toUpperCase()) : 6 > y && n ? a.all : a.getElementsByTagName(d);
      for (var t = [], B = 0, I = n.length; B < I; ++B) {
        t[B] = n[B];
      }
      return t;
    }
    function P(a, d) {
      var n = [], t = 0, B, I = -1, V, R, ba;
      if (9 > y || !a.getElementsByClassName) {
        V = 6 > y ? a.all : a.getElementsByTagName("*");
      } else {
        R = !0;
        V = a.getElementsByClassName(d);
      }
      for (B = V.length; t < B; ++t) {
        ba = V[t];
        if (R || (ma || 1 === ba.nodeType) && sa(ba, d)) {
          n[++I] = ba;
        }
      }
      return n;
    }
    function Aa(a) {
      return ma ? a.parentElement : a.parentNode;
    }
    function Ba(a, d, n, t, B, I) {
      var V, R;
      if (ma) {
        V = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        R = lb(2 > a ? Oa(d) : d);
        R = 2 > a ? R.indexOf(d) + a : R.length;
        d.insertAdjacentHTML(V, N(n, t, B));
        d = lb(d)[R];
        null != B && ("FONT" === n ? d.nodeType = 3 : (d.nodeType = 1, d.children[0].nodeType = 3));
      } else if (Na) {
        d = M.createElement(N(n, t));
      } else {
        d = I ? M.createElementNS("http://www.w3.org/2000/svg", n) : M.createElement(n);
        if (t) {
          for (V in t) {
            if ((a = t[V]) || 0 === a) {
              switch(V) {
                case "class":
                case "className":
                  ic(d, a);
                  break;
                case "style":
                  I = d.style;
                  for (R in a) {
                    I[R] = a[R];
                  }
                  break;
                default:
                  tb(d, V, a);
              }
            }
          }
          !D || "a" !== n && "A" !== n || !t.href || t.tabindex || tb(d, "tabindex", ob, !0);
        }
        Ma || null != B && L(d, B);
      }
      return d;
    }
    function na(a, d) {
      var n;
      if (ma) {
        return Ba(2, a, "FONT", v, d);
      }
      n = M.createTextNode("" + d);
      a.appendChild(n);
      return n;
    }
    function L(a, d) {
      D ? (a.firstChild && (a.innerHTML = ""), na(a, d)) : a.textContent = d;
    }
    function Ea(a) {
      return "A" === Ga(a) && T(a, "href", !0);
    }
    function Ga(a) {
      return a.tagName.toUpperCase();
    }
    function ka(a, d, n) {
      if (8 > D || 5.5 > y) {
        d = yb(d);
      }
      a = a.getAttribute(d);
      return !n && D && "tabindex" === d ? a === ob ? "" : "0" === a ? "" : "" === a ? "-1" : a : a || "";
    }
    function U(a, d, n, t) {
      if (!t && D) {
        if ("tabindex" === d) {
          if ("-1" === n) {
            ha(a, d, !0);
            return;
          }
          !n && Ea(a) && (n = ob);
        } else {
          "href" === d && ka(a, "tabindex", !0) !== ob && "A" === Ga(a) && U(a, "tabindex", ob, !0);
        }
      }
      if (8 > D || 5.5 > y) {
        7.2 <= D && "tabindex" === d ? d = "tabIndex" : d = yb(d);
      }
      a.setAttribute(d, n);
    }
    function ha(a, d, n) {
      if (!n && D) {
        if ("tabindex" === d) {
          ka(a, d, !0) !== ob && Ea(a) && U(a, d, ob, !0);
          return;
        }
        "href" === d && ka(a, "tabindex", !0) === ob && ha(a, "tabindex", !0);
      }
      if (8 > D || 5.5 > y) {
        d = yb(d);
      }
      a.removeAttribute(d);
    }
    function T(a, d, n) {
      if (!n && D && "tabindex" === d && Ea(a)) {
        return ka(a, d, !0) !== ob;
      }
      if (8 > D || 5.5 > y) {
        if (D && Ja[d]) {
          return a = a.outerHTML.split(">")[0] + ">", -1 !== a.indexOf(" " + d + ">") || -1 !== a.indexOf(" " + d + "=") || -1 !== a.indexOf(" " + d + " ");
        }
        if (D && "tabindex" === d) {
          return "0" !== a.getAttribute(d);
        }
        if (D) {
          return !!a[yb(d)];
        }
        d = yb(d);
      }
      return 6 <= y && 8 > y ? (d = a.getAttributeNode(d)) && d.specified : a.hasAttribute ? a.hasAttribute(d) : null != a.getAttribute(d);
    }
    function Ca(a, d) {
      9 > y ? a.className = d : a.setAttribute("class", d);
    }
    function sa(a, d) {
      return -1 !== (" " + a.className + " ").indexOf(" " + d + " ");
    }
    function ca(a, d, n) {
      if (8 > D || 5.5 > y) {
        d = yb(d);
      }
      a.style[d] = n;
    }
    function xa(a) {
      var d;
      if (5.5 > y) {
        d = "";
        a = a.style.cssText.split(";");
        for (var n = -1, t, B; t = a[++n];) {
          B = t.split(":")[0], d += ";" + B.toLowerCase() + ":" + t.substr(B.length + 1);
        }
        return d.substr(1);
      }
      return a.style.cssText;
    }
    var ma = 5 > y, Na, Ma, Ja;
    zb = K("html")[0];
    Ab = K("head")[0];
    Db = function(a) {
      return Z[a] || M[a] || M.getElementById(a);
    };
    Mb = K;
    Zc = function(a) {
      return P(M, a);
    };
    Eb = X;
    $c = P;
    Oa = Aa;
    lb = function(a) {
      a = ma ? a.children : a.childNodes;
      for (var d = [], n = a.length; n;) {
        d[--n] = a[n];
      }
      return d;
    };
    ad = function(a) {
      var d = !(7.03 < D && 7.2 > D) && a.children;
      a = d ? d : a.childNodes;
      for (var n = [], t = a.length, B = -1, I; t;) {
        if (I = a[--t], ma) {
          3 !== I.nodeType && (n[++B] = I);
        } else {
          if (d || 1 === I.nodeType) {
            n[++B] = I;
          }
        }
      }
      return n;
    };
    wc = function(a) {
      return ma ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    wa = function(a, d, n, t, B) {
      d = Ba(2, a, d, n, t, B);
      ma || (a.appendChild(d), Ma && null != t && (9 > y ? na(d, t) : L(d, t)));
      return d;
    };
    Wb = function(a, d, n, t, B) {
      d = Ba(0, a, d, n, t, B);
      ma || (Aa(a).insertBefore(d, a), Ma && null != t && (9 > y ? na(d, t) : L(d, t)));
      return d;
    };
    bd = function(a, d, n, t, B) {
      d = Ba(1, a, d, n, t, B);
      var I;
      ma || ((I = a.nextSibling) ? Oa(I).insertBefore(d, I) : Oa(a).appendChild(d), Ma && null != t && (9 > y ? na(d, t) : L(d, t)));
      return d;
    };
    cd = na;
    xc = function(a, d) {
      var n, t;
      if (ma) {
        return Ba(1, a, "FONT", v, d);
      }
      t = M.createTextNode("" + d);
      (n = a.nextSibling) ? Oa(a).insertBefore(t, n) : Oa(a).appendChild(t);
      return t;
    };
    Ra = function(a) {
      if (Oa(a)) {
        if (ma) {
          a.outerHTML = "";
        } else {
          return 5.5 > y && 1 === a.nodeType && (a.style.filter = ""), Oa(a).removeChild(a), a;
        }
      } else {
        E("[DOM] p_DOM_remove(), No parentNode!");
      }
    };
    Fb = function(a, d) {
      if (a.contains) {
        return a.contains(d);
      }
      for (; d && d !== zb;) {
        if (d = Oa(d), a === d) {
          return !0;
        }
      }
    };
    dd = function(a) {
      var n;
      function d(t, B, I, V) {
        var R, ba, la, b;
        switch(t.nodeType) {
          case 1:
            if (!V) {
              R = t.tagName;
              B[++I] = "<" + R;
              ba = t.attributes;
              la = ba.length;
              if (la) {
                for (var e = 0; e < la; ++e) {
                  b = ba[e];
                  b.specified && (B[++I] = " " + b.name + '="' + H(b.value).replace('"', "&quot;") + '"');
                }
              }
              B[++I] = ">";
            }
            for (ba = t.firstChild; ba; ba = ba.nextSibling) {
              I = d(ba, B, I, !1);
            }
            V || !t.firstChild && -1 !== "BR,HR,LINK,IMG,META".indexOf(R.toUpperCase()) || (B[++I] = "</" + R + ">");
            break;
          case 3:
          case 4:
            B[++I] = H(t.nodeValue);
        }
        return I;
      }
      if (419.3 >= qa) {
        n = [];
        d(a, n, -1, !0);
        a = n.join("");
        a = a.split("\u00a0").join("&nbsp;");
      } else {
        a = a.innerHTML, ma && (a = a.split("<FONT>").join("").split("</FONT>").join(""));
      }
      return a.split("\r\n").join("\n").split("\r").join("\n");
    };
    ed = function(a) {
      return ma ? a.innerHTML : 1 === a.nodeType ? D ? a.innerText : a.textContent : a.nodeValue;
    };
    Na = 9 > y;
    Ma = Na;
    Za = Ga;
    Sa = ka;
    tb = U;
    mb = ha;
    ub = T;
    fd = function(a) {
      return a.className;
    };
    ic = Ca;
    nb = sa;
    Gb = function(a, d) {
      var n;
      if (!sa(a, d)) {
        if (n = a.className) {
          n += " ";
        }
        Ca(a, n + d);
      }
    };
    yc = function(a, d) {
      var n;
      if (sa(a, d)) {
        n = a.className.split(" ");
        n.splice(n.indexOf(d), 1);
        Ca(a, n.join(" "));
      }
    };
    Ja = {disabled:!0};
    La = ca;
    $a = function(a, d) {
      var n, t = -1, B, I;
      if (5.5 > y || 7.1 > D) {
        if (y) {
          if (n = xa(a)) {
            for (n = n.split(";"); B = n[++t];) {
              ca(a, B.split(":")[0], "");
            }
            t = -1;
          }
        } else {
          a.setAttribute("style", "");
        }
        if (d) {
          for (n = d.split(";"); B = n[++t];) {
            I = B.split(":")[0];
            ca(a, I, B.substr(I.length + 1));
          }
        }
      } else {
        9 > D || 1 > Y ? d ? a.setAttribute("style", d) : a.removeAttribute("style") : a.style.cssText = d;
      }
    };
    gd = xa;
    Xa.splice(0, 0, function() {
      function a(ba) {
        ba = lb(ba);
        for (var la = ba.length, e, b, c; la;) {
          if (e = ba[--la], b = e.nodeType, 8 === b) {
            d && V.push(e);
          } else if (1 === b) {
            switch(b = Za(e), "/" === b.charAt(0) && (b = b.substr(1), R[b] = !0), b) {
              case "STYLE":
                if (7.2 <= D && 9 > D) {
                  break;
                }
              case "LINK":
                ma || t || Fb(Ab, e) || I.push(e);
                break;
              case "META":
                b = Sa(e, "name") || Sa(e, "property");
                for (c = B.length; c;) {
                  if (0 === b.indexOf(B[--c])) {
                    V.push(e);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (qd || ub(e, "async")) {
                  break;
                }
                if (n) {
                  e.innerText = "";
                  n = !1;
                  break;
                }
              case "NOSCRIPT":
                if (ub(e, "skip-cleanup")) {
                  break;
                }
              case "!":
                V.push(e);
                break;
              case "SOURCE":
                Z.HTMLSourceElement || V.push(e);
                break;
              default:
                R[b] ? V.push(e) : lb(e).length && a(e);
            }
          }
        }
        for (; I[0];) {
          Ab.appendChild(I.pop());
        }
        for (; V[0];) {
          Ra(V.pop());
        }
      }
      yc(zb, "nojs");
      Bb = Db("jsMain");
      var d = !(8 > D || 5 > y || Jb || ib), n = Sc, t = 7 > y, B = ["og:", "twitter:", "fb:"], I = [], V = [], R = {};
      a(zb);
    });
  })();
  (function() {
    function N() {
      return u ? C ? 2 : h ? 3 : 1 : 0;
    }
    function H(g) {
      Pa(Z, "load", H);
      H = v;
      X(Xa, g, !0);
      Xa = v;
    }
    function K(g, k) {
      Ob(function() {
        var w = U(g);
        k(w);
        w.addListener(k);
        return !0;
      });
    }
    function X(g, k, w) {
      for (var q = 0; q < g.length; ++q) {
        !0 === g[q](k) && (g.splice(q, 1), --q);
      }
      w && (g.length = 0);
    }
    function P(g, k, w) {
      Xa || T.length || aa(Aa);
      T.push(g, k, w);
    }
    function Aa() {
      var g = T, k;
      for (T = []; k = g.shift();) {
        X(k, g.shift(), g.shift());
      }
    }
    function Ba(g, k, w, q) {
      var F, ia, pa, eb;
      if (ma) {
        g.removeEventListener(k, w, q ? Ca ? q : q.capture || !0 === q : !1);
      } else {
        F = sa[k];
        ia = !!q === q ? q : q ? !!q.capture : !1;
        pa = "on" + k;
        if (F) {
          if (Na) {
            Ma.push(g, k, w, q);
          } else {
            k = 0;
            for (q = F.length; k < q; k += 3) {
              F[k] === g && (F[k + 1] === w && F[k + 2] === ia ? F.splice(k, 3) : eb = !0);
            }
            eb || (ca ? g.detachEvent(pa, na) : y ? (g[pa] = fb, g[pa] = null) : delete g[pa]);
          }
        }
      }
    }
    function na(g) {
      var k = g || event, w = k.type, q, F, ia, pa, eb;
      g = sa[w];
      w = "on" + w;
      q = 0;
      F = g.length;
      ++Na;
      5 > y ? k = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : y ? (k.target = k.srcElement, k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : xa && (k.I = k.stopPropagation, k.stopPropagation = function() {
        ia = !0;
      });
      for (; q < F; q += 2) {
        pa = g[q];
        if (pa === this) {
          eb = g[q + 1];
          5.5 > y ? (pa[w] = eb, pa[w](k), pa[w] = na) : eb.call(pa, k);
        } else {
          7.2 > D && this === M && pa === Z && g[q + 1].call(pa, k);
        }
      }
      if (y) {
        return k.preventDefault = k.stopPropagation = fb, k.preventDefault = k.stopPropagation = v, k.returnValue;
      }
      xa && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && k.target.getAttribute("href") && (Ja = !0), ia && !Ja && k.I(), k.I = k.stopPropagation = v);
      --Na;
      if (0 === Na) {
        for (g = Ma; g.length;) {
          Ba(g.shift(), g.shift(), g.shift(), g.shift());
        }
      }
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function L() {
      var g = 9 === ha.offsetWidth;
      Rb !== g && (P(Pc, Rb = g), E("p_cssAvailability:" + Rb));
    }
    function Ea() {
      !Xa && Q && (Lb(Q), Q = aa(Ga));
    }
    function Ga() {
      Q = 0;
      X(A);
    }
    function ka(g) {
      Xa || X(oa, g);
    }
    var U = Z.matchMedia, ha, T = [], Ca, sa, ca, xa, ma, Na, Ma, Ja, a, d, n, t, B, I, V, R, ba, la, e, b, c, m, l, u, h, C, r, O, x, A, Q, oa, ta, Ha, Ta, hb, Ua, Pb, vb, wb;
    Xa.push(function() {
      K = v;
      ha = wa(ra, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      db(function() {
        T.length && aa(Aa);
      });
    });
    ja = function(g, k, w, q) {
      var F, ia, pa;
      if (ma) {
        g.addEventListener(k, w, q ? Ca ? q : q.capture || !0 === q : !1);
      } else {
        F = sa[k];
        ia = !!q === q ? q : q ? !!q.capture : !1;
        q = "on" + k;
        if (F) {
          k = 0;
          for (pa = F.length; k < pa; k += 3) {
            if (F[k] === g && F[k + 1] === w && F[k + 2] === ia) {
              return;
            }
          }
          F.push(g, w, ia);
        } else {
          F = sa[k] = [g, w, ia];
        }
        ca ? g.attachEvent(q, na) : (w = g[q], w !== na && ("function" === typeof w && F.unshift(g, w, !1), g[q] = na));
      }
    };
    Pa = Ba;
    Ca = !y && !Jb && (new md('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
    sa = {};
    ca = !1;
    xa = 525.13 > qa;
    ma = !xa && !Jb && ra.addEventListener;
    Na = 0;
    Ma = [];
    xa && zb.addEventListener("click", function(g) {
      if (Ja) {
        return Ja = !1, g.preventDefault(), !1;
      }
    });
    db = function(g) {
      Xa ? Xa.push(g) : alert("Load event has already been dispatched!");
    };
    Nb = function(g) {
      d && d.push(g);
    };
    if (419.3 >= qa) {
      a = function() {
        var g;
        if (a) {
          g = M.readyState;
          "loaded" === g || "complete" === g ? (a = v, H()) : aa(a);
        }
      };
      aa(a);
    } else {
      ja(Z, "load", H), ib && aa(function() {
        H && H();
      }, 999);
    }
    if (y || !ib && 1.8 > Y) {
      ja(Z, "unload", function(g) {
        X(d, g, !0);
      });
      d = [];
    }
    Ob = function(g) {
      Pc.push(g);
    };
    db(function() {
      L();
      fc(L);
    });
    jc = function(g, k) {
      if (n) {
        ja(g, "focusin", k);
      } else if (t) {
        ja(g, "DOMFocusIn", k);
      } else {
        if (I) {
          la || (la = pc(c, 333));
        } else if (B || V) {
          ja(M, "focus", ba, !0);
        } else {
          return;
        }
        for (var w = R, q = 0, F = w.length; q < F; q += 2) {
          if (w[q] === g && w[q + 1] === k) {
            return;
          }
        }
        w.push(g, k);
      }
    };
    hd = function(g, k) {
      if (n) {
        ja(g, "focusin", k);
      } else if (t) {
        ja(g, "DOMFocusIn", k, !1);
      } else {
        for (var w = R, q = 0, F = w.length; q < F; q += 2) {
          if (w[q] === g && w[q + 1] === k) {
            w.splice(q, 2);
            w.length || (I ? la = Wc(la) : (B || V) && Pa(M, "focus", ba, !0));
            break;
          }
        }
      }
    };
    n = 6 <= y || kb || 52 <= Y || 15 <= za || 534 <= qa || 5 <= Da || Lc || 4 <= cb || 4 <= ac || 11.6 <= ea(8) || 12 <= ea(9);
    t = 8 <= D || za || cb || ac || qa || Da;
    B = 8 > D;
    I = 6 > y;
    V = 52 > Y || Cb;
    if (V || B) {
      R = [];
      ba = function(g) {
        var k = R, w = B ? M.activeElement : g.target, q = 0, F = k.length, ia, pa;
        if (B) {
          ia = g;
          g = {type:"focusin", target:w, cancelable:!0, preventDefault:function() {
            ia.preventDefault();
          }, stopPropagation:function() {
            ia.stopPropagation();
          }};
        }
        for (; q < F; q += 2) {
          pa = k[q];
          (pa === w || Fb(pa, w)) && k[q + 1].call(pa, g);
        }
      };
    } else if (I) {
      R = [];
      c = function() {
        b = Z.onerror;
        Z.onerror = m;
        var g = M.activeElement;
        if (e !== g) {
          e = g;
          for (var k = R, w = 0, q = k.length, F, ia; w < q; w += 2) {
            if (F = k[w], F === g || Fb(F, g)) {
              ia = F.onmousemove, F.onmousemove = k[w + 1], F.onmousemove({type:"focusin", target:g, preventDefault:fb, stopPropagation:fb}), ia ? F.onmousemove = ia : (F.onmousemove = fb, F.onmousemove = null);
            }
          }
        }
        Z.onerror = b;
        b = v;
      };
      5 > y && (_wdb_watchactiveelm = c, c = "_wdb_watchactiveelm()");
      m = function() {
        E("error!");
        Z.onerror = b;
        b = e = v;
        return !0;
      };
    }
    Bc = function(g) {
      jb && jb.push(g);
    };
    l = 60 > Y || Cb;
    if (89 <= Y || 89 <= za || Kb && 79 <= Mc || U && (U("(forced-colors:none)").matches || U("(forced-colors:active)").matches)) {
      Cc = !0, K("(forced-colors:active)", function(g) {
        u = g.matches;
        Ka = N();
        P(jb, Ka);
        E("(forced-colors:active):" + Ka);
      });
    } else if (10 <= y || kb || Kb && Mc) {
      Cc = !0, K("(-ms-high-contrast:black-on-white)", function(g) {
        u = h = g.matches;
        Ka !== N() && (Ka = N(), P(jb, Ka), E("(-ms-high-contrast:black-on-white):" + Ka));
      }), K("(-ms-high-contrast:white-on-black)", function(g) {
        u = C = g.matches;
        Ka !== N() && (Ka = N(), P(jb, Ka), E("(-ms-high-contrast:white-on-black):" + Ka));
      }), K("(-ms-high-contrast:active)", function(g) {
        u = g.matches;
        Ka !== N() && (Ka = N(), P(jb, Ka), E("(-ms-high-contrast:active):" + Ka));
      });
    } else if (Kb && (y || Y && 0 <= Wa.conpare(bb, "1.8.1") || Cb)) {
      r = function() {
        function g(q, F) {
          var ia;
          if (F && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          ia = q.split("(")[1].split(",");
          return rb(ia[0]) + rb(ia[1]) + rb(ia[2]);
        }
        var k = M.defaultView, w;
        w = k ? k.getComputedStyle(ha, null) : ha.currentStyle;
        k = (w && w.color || "").split(" ").join("");
        w = (w && w.backgroundColor || "").split(" ").join("");
        k && (u = "#123456" !== k && "rgb(18,52,86)" !== k, h = g(k) < g(w, !0), C = g(k) > g(w, !0), Ka !== N() && (Ka = N(), E("(forced-colors-fallback):" + Ka), P(jb, Ka, l)));
      };
      Ob(function(g) {
        if (g) {
          return La(ha, "color", "#123456"), La(ha, "backgroundColor", "#123456"), l ? (r(), jb = v) : fc(r), r = v, !0;
        }
      });
    } else {
      jb = N = v;
    }
    Ac = function(g) {
      Xa || alert("p_listenImageReady is called back for images present at load time.");
      O.push(g);
    };
    O = [];
    x = 7.5 <= D && 8 > D;
    x && function() {
      for (var g = M.images, k = g.length, w; k;) {
        w = g[--k], w.G = w.src, mb(w, "src");
      }
    }();
    db(function() {
      function g() {
        q ? (F = w[--q], x && tb(F, "src", F.G), Qc(k, x ? F.G : F.src)) : O = v;
      }
      function k(pa) {
        X(O, {C:F, D:pa}, !q);
        g();
      }
      var w = M.images || Mb("img"), q = w.length, F, ia;
      if (12 > D || 532 > qa) {
        g();
      } else {
        for (; q;) {
          F = w[--q];
          ia = 9 > y ? F.complete : 0 <= F.naturalWidth ? F.naturalWidth : F.width;
          P(O, {C:F, D:ia}, !q);
        }
        O = v;
      }
    });
    zc = function(g) {
      A.push(g);
    };
    A = [];
    ja(Z, "resize", Ea);
    Nb(function() {
      Q && Jc(Q);
      Pa(Z, "resize", Ea);
    });
    Qb = function(g) {
      oa.push(g);
    };
    oa = [];
    ta = 1 > Y || 1.2 <= Y && 1.8 > Y || 7.2 >= D;
    ta ? fc(function() {
      var g = Z.pageYOffset;
      Ha !== g && (Ha = g, ka({type:"scroll", cancelable:!1, stopPropagation:fb, preventDefault:fb}));
    }) : ja(Z, "scroll", ka, {passive:!0});
    Nb(function() {
      ta || Pa(Z, "scroll", ka, {passive:!0});
    });
    id = function(g, k) {
      if (Ta) {
        ja(g, "wheel", k, {passive:!1});
      } else if (hb) {
        ja(g, "mousewheel", k, !1);
      } else if (Ua) {
        ja(g, "MozMousePixelScroll", k, !1);
      } else if (Pb) {
        for (var w = vb, q = 0, F = w.length; q < F; q += 2) {
          if (w[q] === g && w[q + 1] === k) {
            return;
          }
        }
        w.length || ja(M, "DOMMouseScroll", wb, !1);
        w.push(g, k);
      }
    };
    jd = function(g, k) {
      if (Ta) {
        Pa(g, "wheel", k, {passive:!1});
      } else if (hb) {
        Pa(g, "mousewheel", k, !1);
      } else if (Ua) {
        Pa(g, "MozMousePixelScroll", k, !1);
      } else if (Pb) {
        for (var w = vb, q = 0, F = w.length; q < F; q += 2) {
          if (w[q] === g && w[q + 1] === k) {
            w.splice(q, 2);
            w.length || Pa(M, "DOMMouseScroll", wb, !1);
            break;
          }
        }
      }
    };
    Ta = 9 <= y || kb || 17 <= Y || Cb || 31 <= za || 537.7 <= qa || 7 <= Da;
    hb = 6 <= y || kb || 9 <= D || za || 522 <= qa || Da;
    Ua = Vb;
    Pb = Y && 0 <= Wa.conpare(bb, "0.9.7") && !Vb;
    if (Pb) {
      vb = [];
      wb = function(g) {
        for (var k = vb, w = g.target, q = 0, F = k.length, ia; q < F; q += 2) {
          ia = k[q], (ia === w || Fb(ia, w)) && k[q + 1].call(ia, g);
        }
      };
    }
  })();
  (function() {
    function N(l) {
      switch(l) {
        case 1:
          return xa;
        case 2:
          return !!ma;
        case 3:
          return !!Na;
        case 4:
          return !!Ma;
        case 5:
          return a;
        case 6:
          return Ja && !ka;
      }
      return !1;
    }
    function H(l) {
      d(l);
      c && !l && Ra(c);
      d = n = t = B = I = V = e = b = c = m = v;
    }
    function K(l) {
      var u = '1.6em "' + l + '"';
      E("[webFontTest] testByNativeFontLoaderAPI start.");
      M.fonts.load(u).then(function(h) {
        E("[webFontTest] fonts.check() : " + M.fonts.check(u, "i") + ", fonts.length : " + h.length);
        (h = Ba(n)) ? aa(H, h) : (E("[webFontTest] mesureWebFont() : false"), P(!0));
      }, function(h) {
        E("[webFontTest] fonts.load() rejected! " + h);
        sb !== v ? na(sb) : sc(na);
      });
    }
    function X(l) {
      return M.hidden || M.msHidden || M.mozHidden || M.webkitHidden ? (la = Ya(), !1) : l < Ya() - la;
    }
    function P(l) {
      l && (E("[webFontTest] testWebFont start."), la = Ya());
      (l = Ba(n, R)) ? (E("[webFontTest] testWebFont mesurement success : " + l), H(l)) : X(R) ? (E("[webFontTest] testWebFont timeout!"), e ? L() : Ga ? H(0) : sb !== v ? na(sb) : sc(na)) : aa(P);
    }
    function Aa() {
      return wa(ra, 5 > y ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":15 > Y ? '"liga=1"' : '"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, Ca);
    }
    function Ba(l, u) {
      var h = 0, C = -1, r = [], O, x, A;
      if (!m) {
        O = -1;
        b = Aa();
        for (m = []; x = ca[++O];) {
          La(b, "fontFamily", x), m[O] = b.offsetWidth;
        }
        E("[webFontTest] default width " + m.join(", "));
      }
      for (5 > y ? b || (b = Aa()) : Oa(b) || ra.appendChild(b); O = ca[++C];) {
        La(b, "fontFamily", '"' + l + '",' + O);
        A = b.offsetWidth;
        sa ? r[C] = A : (r[C] = A, A !== m[C] && (h = 9 > y ? A ? 1 : 0 : 1));
      }
      if (sa && A === r[0] && A === r[1]) {
        for (E("[webFontTest] Hit... : width=" + A), h = 1, C = -1; 0 <= (A = m[++C]);) {
          if (A === r[0] && A === r[1] && A === r[2]) {
            E("[webFontTest] Failed! : font[" + C + "]=" + ca[C]);
            h = 0;
            break;
          }
        }
      }
      !y && h && I && (b.textContent = I, A = b.offsetWidth, b.textContent = V, h = A === b.offsetWidth ? 2 : 1, b.textContent = Ca);
      b = Ra(b);
      u && (h || X(u)) && E("[webFontTest] " + l + " " + r.join(", "));
      return h;
    }
    function na(l) {
      E("[webFontTest] onTestDataURIComplete : " + l);
      l ? (e = !0, R = T, E("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), L()) : H(0);
    }
    function L() {
      var l, u;
      if (t) {
        for (; t.length;) {
          l = t.shift();
          u = t.shift();
          if (N(l)) {
            E("[webFontTest] maybe can use! " + u);
            c = Uc(u, Ea, B, c, ba);
            return;
          }
        }
      }
      H(0);
    }
    function Ea(l) {
      l ? P(!0) : L();
    }
    sc = !1 === sb ? function(l) {
      aa(l, !1);
    } : function(l) {
      var h, C;
      function u(r) {
        C && (C = Lb(C), sb = r, h.onload = h.onerror = fb, aa(l, r));
      }
      if (sb !== v) {
        E("[dataURITest] already done : " + sb), aa(l, sb);
      } else {
        E("[dataURITest] start!");
        h = new Image();
        C = aa(u, !1, 99);
        h.onerror = function() {
          E("[dataURITest] no DATA URI!");
          u(!1);
        };
        h.onload = function() {
          E("[dataURITest] DATA URI:" + (1 === h.width * h.height));
          u(1 === h.width * h.height);
        };
        h.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > y && db(function() {
      var l = wa(ra, "div");
      $a(l, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Nc = 1 < l.offsetHeight;
      Ra(l);
    });
    Qc = function(l, u) {
      function h() {
        r || !O || C.complete ? (E("[imageTest] timer -> img.complete. img.width=" + C.width), aa(l, !!C.width), C.onerror = C.onload = fb, C = l = v) : (--O, aa(h));
      }
      var C = new Image(), r, O = 99;
      E("[imageTest] start.");
      C.onerror = function() {
        E("[imageTest] error!");
        r = !0;
      };
      C.onload = function() {
        E("[imageTest] onload.");
        r = !0;
      };
      C.src = u;
      aa(h);
    };
    Rc = function(l, u, h, C, r, O, x) {
      d = l;
      n = u;
      t = h;
      B = C;
      I = r;
      V = O;
      R = ba = x || ha;
      n = U + n;
      E("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      E("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!tc);
      ea(10) ? aa(H, 1) : tc ? aa(H, 0) : !M.fonts || 603 > qa || 11 > Da ? (E("[webFontTest] No native font loader."), P(!0)) : (E("[webFontTest] Use Native font loader."), K(n));
    };
    var Ga = 9 > y, ka = 6 > za || D || 530 > qa || 5 > Da || Ia(10), U = "bad_" + Ya() + "_", ha = 5E3, T = 500, Ca = "mmmmmmmmmmlliiiiiiiii", sa = 9 <= za && 18 > za || 3 > cb || 7 > Da || qa && 0 >= Wa.conpare(bb, "536.11"), ca = ["monospace", "sans-serif", "serif"], xa, ma, Na, Ma, Ja, a, d, n, t, B, I, V, R, ba, la, e, b, c, m;
    tc || (sa && za && E("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + za), sa && Da && E("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Da), sa && qa && E("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + qa), sa && cb && E("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + cb));
    xa = 14 <= kb || 36 <= za || 39 <= Y || 3 <= Cb || 602 <= qa && 0 <= Wa.conpare("10.12", pd) || 10 <= Da;
    ma = 6 <= za || Y && 0 <= Wa.conpare(bb, "1.9.2") || Cb || 533 <= qa || 5 <= Da || 4.4 <= cb || 11.5 <= D || kb || 9 <= ea(2) || 10 <= ea(3);
    Na = 2 <= za || Vb || Cb || 525 <= qa || 4 <= Da || 2.2 <= cb || 10.1 <= D || kb || 9 <= ea(2) || 10 <= ea(3);
    Ma = Na;
    Ja = 5.1 <= Kb && 5.2 >= Kb && 40 > za || 6 <= Kb && 6.1 > Kb && 51 > za || 37 > za || 525 <= qa || 3.1 <= Da || 3 <= cb || 11.5 <= D;
    a = 4 <= ea(2) || 10 <= ea(3);
  })();
  (function() {
    var H, K, X, P, Aa, Ba, na, L, Ea, Ga, ka, U, ha, T, Ca, sa, ca, xa, ma, Na, Ma, Ja, a, d, n, t, B, I, V, R, ba, la;
    function N(e) {
      var b, c, m, l;
      if (2 !== e) {
        E("[VectorIcon] " + e);
        b = Zc("ico");
        c = 0;
        m = b.length;
        if (m) {
          if (1 === e) {
            for (; c < m; ++c) {
              e = b[c];
              l = dd(e);
              if (l = la[l]) {
                e.innerHTML = l;
              }
            }
          } else {
            if (V && !I) {
              Z.VectorIconFallback = bz, dc(Fa + "js/vector-icon-svg-fallback.js");
            } else {
              for (; c < m; ++c) {
                Ra(b[c]);
              }
            }
          }
        }
      }
      function bz() {
        ec(Fa + "js/vector-icon-svg-fallback.js");
        return [la, b, wa, ed, I];
      }
      bz = !1;
    }
    Ac(function(e) {
      var b = e.C, c;
      e = e.D;
      c = Oa(b);
      !nb(c, "aBodyRoot") && e ? Gb(c, "js-image-has-been-loaded") : e || Sa(b, "alt") || "lazy" === Sa(b, "loading") || La(b, "display", "none");
    });
    ib && (Xa.splice(1, 0, function() {
      for (var e = $c(Bb, "RichLink-sep"), b, c, m, l, u, h; b = e.shift();) {
        for (b = lb(b); c = b.shift();) {
          if ("A" === Za(c) && !c.innerHTML) {
            for (E("\u25a0 Broken Anchor " + c.parentNode.innerHTML); m = b.shift();) {
              if (1 === m.nodeType) {
                if ("A" === Za(m)) {
                  break;
                }
                for (l = Eb(m, "A"); u = l.shift();) {
                  for (h = lb(u); h.length;) {
                    u.parentNode.insertBefore(h.shift(), u);
                  }
                  Ra(u);
                }
              }
              c.appendChild(m);
            }
          }
        }
      }
    }), Xa.splice(2, 0, function() {
      for (var e = Mb("A"), b, c; b = e.shift();) {
        "A" !== Za(b) || b.innerHTML || (c = b.nextSibling && b.nextSibling.firstChild) && c.href === b.href && (E("\u25b2 Broken Anchor " + c.innerHTML), Ra(b));
      }
    }));
    if (Y && 0 > Wa.conpare(bb, "0.9.5")) {
      Vc = !0;
      db(function() {
        ja(M, "keydown", Ba);
        ja(M, "keyup", na);
        jc(ra, L);
        ib || (ja(Z, "blur", ha), ja(ra, "click", U));
      });
      Ba = ib ? function(e) {
        16 === e.keyCode ? H = !0 : 9 === e.keyCode && P && Ea(P, !0) && (P.blur && P.blur(), e.stopPropagation(), e.preventDefault(), aa(ka));
      } : function(e) {
        16 === e.keyCode ? H = !0 : 9 === e.keyCode && (K = Ya());
      };
      na = function(e) {
        16 === e.keyCode && (H = !1);
      };
      L = ib ? function(e) {
        e.target.innerHTML || E(e.target.parentNode.innerHTML);
        P = e.target;
      } : function(e) {
        var b = e.target;
        if (P === b) {
          X = v;
        } else if (X) {
          b === X ? (e.stopPropagation(), ka(!0)) : (b.blur && Ca(b), e.preventDefault(), ka());
        } else {
          if (e = P) {
            P = v, Ca(e);
          }
          X = b;
          ka(!0);
        }
      };
      Ea = function(e, b) {
        var c = Ya(), m = ra, l = "nextSibling", u = "firstChild", h;
        H && (b || c - 99 < K && K <= c) && (l = "previousSibling", u = "lastChild");
        for (X = v; e !== m;) {
          if (h) {
            c = e;
            h = !1;
          } else {
            c = e[l];
          }
          if (c) {
            if (1 === c.nodeType) {
              if (Ga(c)) {
                return X = c, !0;
              }
              e = (h = c[u]) || c;
            } else {
              e = c;
            }
          } else {
            e = e.parentNode;
          }
        }
      };
      Ga = function(e, b) {
        var l;
        function c() {
          return "-1" !== Sa(e, "tabindex");
        }
        function m() {
          return 0 < e.offsetHeight * e.offsetWidth;
        }
        if (e.focus) {
          switch({A:b ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Za(e)]) {
            case 1:
              if (ub(e, "href") && c() && m()) {
                return !0;
              }
              break;
            case 2:
              if (c() && !ub(e, "disabled") && m()) {
                return !0;
              }
              break;
            case 3:
              if (c() && !ub(e, "disabled") && m()) {
                return !0;
              }
              break;
            default:
              if ((l = Sa(e, "tabindex")) && "-1" !== l && m()) {
                return !0;
              }
          }
        }
      };
      ka = function(e) {
        Aa = 0;
        X && (ib || ja(X, "blur", T), P = X, X = v, e || P.focus());
      };
      if (!ib) {
        U = function(e) {
          var b = e.target, c;
          if (P && Ga(b, !0)) {
            c = P;
            P = v;
            Ca(c);
            X = b;
            e.stopPropagation();
            e.preventDefault();
            ka();
          }
        };
        ha = function(e) {
          e.target === M && (X = v);
        };
        T = function(e) {
          e = e.target;
          Pa(e, "blur", T);
          P === e && Ea(e) && (Aa || (Aa = aa(ka)));
        };
        Ca = function(e) {
          Pa(e, "blur", T);
          e.blur();
        };
      }
    }
    D && db(function() {
      for (var e = Eb(ra, "a"), b = e.length, c = 0, m; c < b; ++c) {
        m = e[c], "-1" === Sa(m, "tabindex", !0) ? mb(m, "tabindex", !0) : ub(m, "href", !0) && !ub(m, "tabindex", !0) && tb(m, "tabindex", ob, !0);
      }
      e = Eb(ra, "input");
      c = 0;
      for (b = e.length; c < b; ++c) {
        m = e[c], "hidden" === Sa(m, "type") && mb(m, "tabindex", !0);
      }
    });
    if (7.5 <= D && 8 > D) {
      xa = M.activeElement;
      db(function() {
        ja(M, "keydown", ma);
        ja(M, "keyup", Na);
        jc(ra, Ma);
        ja(Z, "blur", n);
        ja(ra, "click", d);
      });
      ma = function(e) {
        16 === e.keyCode ? sa = !0 : 9 === e.keyCode && Ya();
      };
      Na = function(e) {
        16 === e.keyCode && (sa = !1);
      };
      Ma = function(e) {
        var b = e.target, c, m, l, u, h, C;
        if (xa === b) {
          ca = v;
        } else {
          function bz() {
            c = xa;
            Ya();
            m = ra;
            l = "nextSibling";
            u = "firstChild";
            sa && (l = "previousSibling", u = "lastChild");
            for (ca = v; c !== m;) {
              if (C) {
                h = c;
                C = !1;
              } else {
                h = c[l];
              }
              if (h) {
                if (1 === h.nodeType) {
                  if (Ja(h)) {
                    ca = h;
                    c = !0;
                    return;
                  }
                  c = (C = h[u]) || h;
                } else {
                  c = h;
                }
              } else {
                c = c.parentNode;
              }
            }
            c = void 0;
          }
          bz();
          bz = !1;
          c ? b !== ca && (e.stopPropagation(), e.preventDefault(), b.blur(), ca.focus(), a()) : xa = b;
        }
      };
      Ja = function(e, b) {
        var m;
        function c() {
          return 0 < e.offsetHeight * e.offsetWidth;
        }
        if (e.focus) {
          switch({A:b ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Za(e)]) {
            case 1:
              if (ub(e, "href") && c()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Sa(e, "type") && c()) {
                return !0;
              }
              break;
            case 3:
              if (c()) {
                return !0;
              }
              break;
            default:
              if ((m = Sa(e, "tabindex")) && "-1" !== m && c()) {
                return !0;
              }
          }
        }
      };
      a = function(e) {
        ca && (xa = ca, ca = v, e || xa.focus());
      };
      d = function(e) {
        e = e.target;
        Ja(e, !0) && (ca = e, a(!0));
      };
      n = function(e) {
        e.target === M && (ca = v);
      };
    }
    5.5 <= y && 8 > y && jb && Bc(function(e) {
      for (var b = Eb(ra, "a"), c = b.length, m = 0; m < c; ++m) {
        b[m].hideFocus = !e;
      }
    });
    if (!Cc && jb) {
      B = function() {
        t = wa(Ab, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Fa + "css/" + bc + "hc/" + rc});
        if (Oc || 5.5 <= y && 9 > y && Nc) {
          Gb(ra, "js-canuse-css-rotate-when-forced-colors-mode"), E("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        B = v;
      };
      Bc(function(e) {
        e && !t ? B() : t && (e ? Ab.appendChild(t) : Ra(t));
      });
    }
    Ob(function(e) {
      if (e) {
        return Rc(N, "web-doc-base", [1, Fa + "iconfont/woff2.css", 2, Fa + "iconfont/woff.css", 3, Fa + "iconfont/ttf.css", 5, Fa + "iconfont/eot.css", 6, Fa + "iconfont/svg.css"], "js-myIconFont-testCssReady", R, ba), N = v, !0;
      }
    });
    I = 8 <= ea(8) && 9 > D;
    V = 9 <= y || kb || 1.8 <= Y || Cb || 8 <= ea(8) || 9 <= ea(9) || 3 <= ea(22) || nd || 312.6 <= qa && 312.7 >= qa || 419.3 <= qa || Da;
    R = "IE";
    ba = "\ueadb";
    la = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", Android:"\ud83e\udd16"};
  })();
  (function() {
    function N(f) {
      var p = ba.length, G, J, da, z, S, W, fa;
      if (13 === (f.keyCode || f.Z) || f.type !== la) {
        for (; p;) {
          S = ba[--p];
          if (S.B === this || S.m === this) {
            p = S.B;
            W = G = S.m;
            if (S.M) {
              if (La(p, "width", S.X), p.src = S.W, ic(W, S.R), p = S.H) {
                $a(p, S.P), yc(p, "js-captioned-thumbnail__large");
              }
            } else {
              if (J = S.K) {
                delete S.K;
                if (S.J) {
                  for (; G = Oa(G);) {
                    if (!nb(G, "caption")) {
                      fa = Za(G);
                      if ("DIV" === fa || "P" === fa || "BLOCKQUOT" === fa || "LI" === fa || "DD" === fa || "TD" === fa || "TH" === fa || "FORM" === fa || "PRE" === fa) {
                        break;
                      }
                    }
                  }
                  G = (G.offsetWidth | 0) - 4;
                  1600 < G && (G = 1600);
                  if (2 === S.J) {
                    J = J.split("=");
                    fa = J.length;
                    if (da = J[fa - 1]) {
                      (z = rb(da.substr(1))) && da === "s" + z ? J[fa - 1] = "w" + G : J[fa] = "w" + G;
                    }
                    J = J.join("=");
                  } else {
                    J = J.split("/");
                    fa = J.length;
                    if (da = J[fa - 2]) {
                      (z = rb(da.substr(1))) && da === "s" + z ? J[fa - 2] = "w" + G : J.splice(fa - 1, 0, "w" + G);
                    }
                    J = J.join("/");
                  }
                }
                S.U = J;
              }
              S.R = fd(W);
              Gb(W, "js-pica-thumbnail__large");
              La(p, "width", "");
              p.src = S.U;
              if (p = S.H) {
                $a(p, ""), Gb(p, "js-captioned-thumbnail__large");
              }
            }
            S.M = !S.M;
            break;
          }
        }
        H(f);
      }
    }
    function H(f) {
      f.preventDefault();
      f.stopPropagation();
    }
    function K(f) {
      var p = oa;
      if (Rb) {
        if (ta && !p) {
          if (Ya() < ta) {
            return;
          }
          ta = v;
        }
        7 === f ? (L("t"), Ha = 0) : (L("s"), Ha && (Ha = Lb(Ha)), A = qc());
        p ? (oa = P(v, p[0], p[1])) || (ta = Ya() + 99) : P();
        Ga();
      } else {
        oa = v;
      }
    }
    function X() {
      L("w.blur");
    }
    function P(f, p, G) {
      function J(pb) {
        var Dc, Xb;
        W = pb;
        if (O) {
          fa = O + ":translate" + (Q ? "3D(0," : "(0,") + pb + (Q ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== pb) {
          if (m || l) {
            Dc = h.offsetWidth;
          }
          fa = m ? "position:fixed;width:" + Dc + "px;top:" + (pb - da + ya) + "px" : u ? "top:" + pb + "px" : "position:absolute;top:" + pb + "px;left:0";
          if (l && fa) {
            Xb = 8 > y ? " " : ",";
            fa += ";clip:rect(" + (0 > pb ? -pb + "px" + Xb + Dc + "px" + Xb + Qa : "0" + Xb + Dc + "px" + Xb + (pb + Qa < Yb ? Qa : Yb - pb)) + "px" + Xb + "0)";
          }
        }
      }
      var da = A, z = C, S = h.offsetTop === z.offsetTop, W = 0, fa = "", ab = !0, Ec, Qa, Yb, Hb, Sb, kc, lc, kd, td, Ib, Tb;
      if (S) {
        for (var va = 0, ya = 0, Va = z; Va && Va !== ra;) {
          ya += Va.offsetTop, Va = Va.offsetParent;
        }
        W = x;
        Va = 11 > y ? zb.offsetHeight : Z.innerHeight;
        Ec = z.offsetHeight;
        Qa = r.offsetHeight;
        Yb = Qa < Ec ? Ec : Qa;
        Hb = da;
        Sb = Hb + Va;
        kc = ya;
        lc = kc + Yb;
        kd = ya + W;
        td = kd + Qa;
        z = Hb < kc ? kc : Hb;
        Ib = lc < Sb ? lc : Sb;
        Tb = Ib - z;
        Hb = lc <= Hb;
        Sb = Sb <= kc;
        if (p !== v) {
          ab = ya + p;
          f = ab + G;
          if (Hb || Sb) {
            return Va <= G ? (p = ya, L("4.1.1")) : Hb ? (p = lc - G, L("4.1.2")) : (p = ya + G - Va, L("4.1.3")), ta = v, Z.scroll(0, p), L("4.1.*"), oa;
          }
          Qa <= Tb ? (va = 3, L("4.2")) : G <= Tb ? Qa - p <= Tb ? (va = 2, L("4.3.1")) : z <= ab && f <= Ib ? z < ya + W && (va = 4, L("4.3.2")) : z <= ab && ab <= Ib ? (va = 5, L("4.3.3")) : z <= f && f <= Ib ? (va = 4, L("4.3.4")) : f < z ? (va = 4, L("4.3.5")) : (va = 5, L("4.3.6")) : (va = 4, L("4.4"));
          ab = !1;
        } else {
          f !== v ? Qa <= Tb ? (va = 7, ab = !1, L("3.1")) : (W -= 60 * f, va = Ib - ya - Qa, f = z - ya, W < va ? (W = va, L("3.2.1")) : f < W ? (W = f, L("3.2.2")) : L("3.2.3"), va = 6) : Ec <= Qa || (Hb ? (va = 1, L("2.2.1")) : Sb ? L("2.2.2") : Qa <= Tb ? (va = 3, L("2.3")) : z < kd ? (va = 3, L("2.4.1")) : td < Ib ? (va = 2, L("2.4.2")) : da < ya + Qa - Tb ? L("2.4.3") : (va = 2, L("2.4.4")));
        }
        switch(va) {
          case 0:
            J(0);
            break;
          case 1:
            J(Yb - Qa);
            break;
          case 2:
            J(Ib - ya - Qa);
            break;
          case 3:
            J(z - ya);
            break;
          case 4:
            J(z - ya - p);
            break;
          case 5:
            J(Ib - ya - (p + G));
            break;
          case 6:
            J(W);
        }
        ka(W, Qa, ya, Yb, Va, p || "-", G || "-");
      } else {
        ka(W, "-", "-", "-", "-", "-", "-");
      }
      $a(r, fa);
      x = W;
      return S && ab;
    }
    function Aa(f) {
      var p;
      if (Rb && (L("m"), Y && (A = qc(), Ga()), this !== f.target)) {
        p = nc(f.deltaY) ? f.deltaY : nc(f.wheelDeltaY) ? f.wheelDeltaY / 120 : nc(f.wheelDelta) ? f.wheelDelta / -120 : f.detail / ("MozMousePixelScroll" === f.type ? 45 : 1);
        p && P(9 >= p ? -9 >= p ? -3 : p : 3) && (f.preventDefault(), f.stopPropagation());
      }
    }
    function Ba(f) {
      var p, G, J, da, z;
      if (Rb) {
        p = Y && 0 > Wa.conpare(bb, "0.9.4");
        G = f.target;
        J = r;
        da = 0;
        if (Fb(J, G)) {
          L(f.type || "ie5focus");
          ja(G, "blur", na);
          if (O) {
            p = G.getBoundingClientRect(), f = p.bottom - p.top, da = p.top - J.getBoundingClientRect().top | 0;
          } else {
            f = G.offsetHeight;
            z = G;
            if (p) {
              for (var S = []; z && (Y ? Fb(J, z) : J !== z);) {
                for (; z.previousSibling;) {
                  z = z.previousSibling, z.tagName && S.unshift(z.tagName + ":" + z.offsetTop);
                }
                z = z.offsetParent;
              }
              E(S.join());
              z = G;
            }
            for (; z && (Y ? Fb(J, z) : J !== z);) {
              if (p) {
                for (; z.previousSibling;) {
                  z = z.previousSibling, da += z.offsetHeight || 0;
                }
                z = z.parentNode;
              } else {
                da += z.offsetTop, z = z.offsetParent;
              }
            }
          }
          c ? (oa = [da, f], Ha && Lb(Ha), Ha = aa(K, 7, 1 > Y || 536 > qa || 14 > za ? 500 : 0)) : (A = qc(), P(v, da, f));
          U(da, f);
        }
      }
    }
    function na() {
      Pa(this, "blur", na);
      U(0, 0);
    }
    function L(f) {
      Ua && (k && (k = Lb(k)), k = aa(Ea, 0, 1400), Ua.innerHTML += " " + f);
    }
    function Ea() {
      Ua.innerHTML = "";
    }
    function Ga() {
      vb && (La(vb, "top", (A / 10 | 0) + "px"), hb.innerHTML = " scrl:" + (A | 0));
    }
    function ka(f, p, G, J, da, z, S) {
      wb && (La(wb, "top", ((f + G) / 10 | 0) + "px"), La(wb, "height", (p / 10 | 0) + "px"), La(vb, "height", (da / 10 | 0) + "px"), La(Pb, "height", (ra.scrollHeight / 10 | 0) + "px"), Ta.innerHTML = "conY:" + G + "/sidY" + f + ", conH:" + J + "/sidH" + p + ", focY:" + z + " focH:" + S);
    }
    function U(f, p) {
      g && (La(g, "top", (f / 10 | 0) + "px"), La(g, "height", (p / 10 | 0) + "px"));
    }
    function ha() {
      w.call(q);
    }
    function T() {
      M.fullscreenElement || M.fullscreen || M.webkitIsFullscreen || M.msFullscreenElement || Z.fullScreen ? (tb(q, "id", "blog2slide-root"), pa[1].parentNode.insertBefore(F, pa[1]), Ca(), M.onkeydown = sa) : ia && (Ra(F), mb(q, "id"), mb(ia, "id"), ia = M.onkeydown = v);
    }
    function Ca() {
      ia && mb(ia, "id");
      eb = 0 < eb ? Fc < eb ? Fc : eb : 0;
      ia = pa[eb];
      tb(ia, "id", "blog2slide-current");
    }
    function sa(f) {
      if ("ArrowRight" === f.key || 39 === f.keyCode) {
        ++eb, Ca();
      } else if ("ArrowLeft" === f.key || 37 === f.keyCode) {
        --eb, Ca();
      }
    }
    Uc = function(f, p, G, J, da) {
      var z, S, W;
      if (xa) {
        E("[CSS Loader] UNSUPPORTED"), aa(p, !1);
      } else {
        if (J) {
          if (za && J.href) {
            S = J.cloneNode();
            J.parentNode.insertBefore(S, J);
            Ra(J);
          } else {
            S = J;
          }
        } else {
          S = wa(Ab, "link", {type:"text/css", rel:"stylesheet"});
        }
        if (!a) {
          (z = Db(G)) ? mb(z, "id") : z = wa(ra, "div", {"aria-hidden":"true", className:G});
          W = z.offsetWidth;
          E("[CSS Loader] widthBeforeCSSLoaded = " + W);
          tb(z, "id", G);
        }
        d(S, f, p, z, W, da || ca);
        return S;
      }
    };
    var ca = 5E3, xa = Y && 0 > Wa.conpare(bb, "0.9.1"), ma = 11 <= y || kb || 9 <= D && 9.5 > D, Na = 11 > y, Ma = 7.2 <= D && 7.5 > D, Ja = 9 > Y && !xa || 19 > za || 4.3 > cb || 2 > ac || 536 > qa || 6 > Da || 7 <= D && 9 > D && !Ma, a = !xa && !ma && !Na && !Ma && !Ja, d = a ? function(f, p, G) {
      E("[CSS Loader] onload + onerror");
      f.onload = bz;
      f.onerror = function() {
        f.onload = f.onerror = null;
        aa(G, !1);
      };
      f.href = p;
      function bz() {
        f.onload = f.onerror = null;
        aa(G, !0);
      }
      bz = !1;
    } : ma ? function(f, p, G, J, da) {
      E("[CSS Loader] onload + mesure");
      f.onload = bz;
      f.href = p;
      function bz() {
        aa(G, n(J, da));
        f.onload = null;
        J = v;
      }
      bz = !1;
    } : Na ? function(f, p, G, J, da) {
      E("[CSS Loader] onreadystatechange + onerror");
      f.onreadystatechange = bz;
      f.href = p;
      function bz() {
        if ("loaded" === f.readyState || "complete" === f.readyState) {
          aa(G, n(J, da)), J = v, f.onreadystatechange = fb;
        }
      }
      bz = !1;
    } : Ja || Ma ? function(f, p, G, J, da, z) {
      function S() {
        fa && (ab = Lb(ab), E("[CSS Loader] onComplete"), va = Ya() + 999, aa(W, 0, 99), Ja ? fa.onerror = null : fa.removeEventListener("load", S, !1), fa = v);
      }
      function W() {
        n(J, da) ? (aa(G, !0), J = G = v) : Ya() < va ? aa(W, 0, 99) : (aa(G, !1), J = G = v);
      }
      var fa = new Image(), ab = aa(S, 0, z), va;
      Ja ? (E("[CSS Loader] img.onerror + mesure"), fa.onerror = S) : (E('[CSS Loader] img.addEventListener("load") + mesure'), fa.addEventListener("load", S, !1));
      fa.src = f.href = p;
    } : v, n = !a && !xa && function(f, p) {
      E("[CSS Loader] elmTest.offsetWidth = " + f.offsetWidth);
      return f.offsetWidth !== p;
    }, t, B, I, V, R, ba, la, e, b, c, m, l, u, h, C, r, O, x, A, Q, oa, ta, Ha, Ta, hb, Ua, Pb, vb, wb, g, k, w, q, F, ia, pa, eb, Fc;
    Tc = Y && 0 >= Wa.conpare(bb, "0.9");
    cc = !(7.2 > D || Tc);
    dc = function(f) {
      t ? Xa ? M.write('<script src="' + f + '">\x3c/script>') : qb("[DynamicScvriptLoader] Document already loaded! " + f) : Xa || V.length ? V.push(f) : R(f);
    };
    ec = function(f) {
      t ? E("[DynamicScvriptLoader] " + f + " loaded.") : f === I ? R(V.shift()) : qb(f + " <> " + I);
    };
    t = !cc;
    B = cc && 7.5 > D;
    if (!t) {
      V = [];
      B && (Sc = !0);
      db(function() {
        R(V.shift());
      });
      R = function(f) {
        if (I = f) {
          B ? Gc[0].src = f : wa(Ab, "script", {src:f});
        }
      };
    }
    ba = [];
    la = 5.5 <= y && 8 > y ? "keypress" : "keydown";
    if (!Kc) {
      e = gb.transition !== v || gb["-o-transition"] !== v || gb["-moz-transition"] !== v || gb["-webkit-transition"] !== v;
      Ac(function(f) {
        var p, G, J, da, z, S, W;
        if (f.D && Bb) {
          f = f.C;
          p = Oa(f);
          G = "";
          if ("A" === Za(p) && 1 === ad(p).length) {
            da = Sa(p, "href");
            z = da.split("?")[0].split("#")[0].split(".");
            z = (z[z.length - 1] || "").toLowerCase();
            if ((J = 0 < da.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + z + ".")) {
              ja(p, la, N);
              ja(f, "click", N);
              ja(p, "click", H);
              e && (G = f.naturalWidth + "px", La(f, "width", G));
              Gb(p, "js-pica-thumbnail");
              for (z = p; z = Oa(z);) {
                if (nb(z, "caption")) {
                  Gb(z, "js-captioned-thumbnail");
                  S = z;
                  W = gd(S);
                  break;
                }
              }
              ba.push({m:p, H:S, P:W, W:f.src, X:G, K:da, B:f, J:J ? 0 < da.indexOf("/img/a/") ? 2 : 3 : 0 < da.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Nb(function(f, p) {
        for (f = -1; p = ba[++f];) {
          Pa(p.m, la, N), Pa(p.B, "click", N), Pa(p.m, "click", H);
        }
      });
    }
    b = ["jsSidebarFixer1", "jsSidebarFixer2"];
    c = !(9 > y || D || 1 <= Y && 1.3 > Y || Vc);
    m = !(5 > Da || 2.2 > cb || 6 > ea(12) || Ia(32) && 534 > qa || Ia(34) || 7 > y || 9 > D || 1 > Y);
    l = m || 6 === y || 1 > Y;
    u = 7.5 > D;
    O = sd && Oc;
    x = 0;
    A = 0;
    ld || Kc || (Ob(function(f) {
      var p;
      if (f) {
        if (!Bb) {
          return !0;
        }
        f = -1;
        h = Db("jsSide");
        C = Bb;
        if (!h) {
          return !0;
        }
        Qb(K);
        zc(K);
        r = Wb(wc(h), "div", {id:"jsSidebarFixer"});
        ja(Z, "blur", X);
        for (jc(r, Ba); 1 < lb(h).length;) {
          r.appendChild(lb(h)[1]);
        }
        for (; p = b[++f];) {
          id(Db(p), Aa);
        }
        y || kb || 2 > za || (Q = gb.perspective !== v || gb.MozPerspective !== v || gb["-webkit-perspective"] !== v);
        K();
        return !0;
      }
    }), Nb(function() {
      for (var f = -1, p; p = b[++f];) {
        jd(Db(p), Aa);
      }
      Pa(Z, "blur", X);
      hd(r, Ba);
    }));
    if (!(5 > Da || 8 > D)) {
      Ob(function(f) {
        var p;
        if (f) {
          if (!Bb) {
            return !0;
          }
          p = lb(ra);
          f = Wb(p[0], "div");
          if (m) {
            $a(f, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          } else {
            for (; p.length;) {
              f.appendChild(p.shift());
            }
            ib || ($a(f, "width:100%;height:100%;overflow:auto;position:relative"), $a(zb, "overflow:hidden"), $a(ra, "overflow:hidden"));
            f = bd(f, "div");
            $a(f, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          }
          wa(f, "div", v, O ? "transform" + (Q ? "3D" : "") : m ? "pos:fixed" : "pos:absolute");
          p = wa(f, "div");
          Ta = wa(p, "span");
          hb = wa(p, "span");
          Ua = wa(f, "div");
          Pb = wa(f, "div");
          $a(Pb, "position:absolute;left:0;top:0;width:54px;background:#242");
          wb = wa(f, "div");
          $a(wb, "position:absolute;left:0;width:54px;background:#363");
          vb = wa(f, "div");
          $a(vb, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
          g = wa(wb, "div");
          $a(g, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
          return !0;
        }
      });
    }
    db(function() {
      function f(S, W, fa, ab) {
        var va = ab ? "div" : "cite";
        if (0 === W.indexOf("urn:isbn:")) {
          W = W.substr(9).toUpperCase().split("-").join("");
          if (13 === W.length) {
            W = W.toString().slice(3, -1);
            for (var ya = 0, Va = 0; 9 > Va; Va++) {
              ya += (W.charAt(Va) - 0) * (10 - Va);
            }
            ya = (11 - ya % 11) % 11;
            ya = 10 === ya ? "X" : ya.toString();
            W += ya;
          }
          10 === W.length && (W = "//www.amazon.co.jp/exec/obidos/ASIN/" + W + "/itozyun-22/ref=nosim/");
        }
        fa = ab ? Wb(wc(G), va, {className:fa}) : wa(G, va, {className:fa});
        wa(fa, "a", 0 === W.indexOf("http") || 0 === W.indexOf("//") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:W} : {href:W}, S);
      }
      if (Bb) {
        for (var p = Eb(Bb, "blockquote"), G, J = -1, da, z; G = p[++J];) {
          da = Sa(G, "title"), z = Sa(G, "cite"), da && z ? (mb(G, "title"), f(da, z, "js-generated-link-in-blockquote", !0)) : z && (mb(G, "cite"), f(Z.decodeURI ? decodeURI(z) : z, z, "js-generated-cite-in-blockquote"));
        }
      }
    });
    db(function() {
      var f = Db("blog2slide-start"), p;
      if (f) {
        p = M.onfullscreenchange !== v ? "f" : M.onmozfullscreenchange !== v ? "mozF" : M.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        w = f.requestFullscreen || f.webkitRequestFullscreen || f.mozRequestFullscreen || f.msRequestFullscreen;
        0 !== p || w ? (f.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ja(f.firstChild, "click", ha), f = Oa(f), q = Oa(f), pa = Eb(f, "section"), F = M.createElement("h1"), F.innerHTML = Eb(ra, "h1")[0].innerHTML, Fc = pa.length, pa.splice(0, 0, F), 0 !== p ? ja(M, p + "ullscreenchange", T) : y ? ja(M, "MSFullscreenChange", T, !1) : zc(T)) : Ra(f);
      }
    });
  })();
  Zb = !Ic || .9 > Y || 8 > D || 5.5 > y;
  (function() {
    function N(b) {
      return b === "" + b;
    }
    function H(b, c) {
      return Zb ? new ha(b, c) : new Ic(b, c);
    }
    function K(b, c, m, l, u) {
      var h = T.codeBlocks[T.codeBlocks.length - 1], C = U(), r = C - sa;
      switch(m || 0) {
        case 1:
          T.initRegExpCount++;
          T.initRegExpTotal += r;
          T.initRegExpMax < r && (T.initRegExpMax = r, T.initRegExpSource = u.toString(), T.initRegExpInstance = u);
          break;
        case 2:
          h.decorateCount++;
          h.decorateTime += r;
          break;
        case 3:
          h.updateDOMTime += r;
      }
      if (C - Ca < Na && !l) {
        return sa = C, b(c);
      }
      aa(X, {S:b, V:c});
    }
    function X(b) {
      Ca = sa = U();
      b.S(b.V);
    }
    function P(b, c) {
      b && Ub[b] || (b = Ma.test(c) ? "default-markup" : "default-code");
      var m = !!Ub[b];
      m && K(t, b, 0, !0);
      return m;
    }
    function Aa() {
      function b(Ta, hb, Ua) {
        hb && (c.g = c.g || [], c.g.push({h:c, s:c.s, L:1, l:C, v:Ta, j:hb, i:Ua, N:{}, o:0}));
      }
      var c = ca, m = c.i, l = m[0], u = m[2], h = c.v, C = c.l, r = c.Y.shift(), O = c.N, x, A, Q, oa, ta, Ha;
      if (r) {
        x = O[r];
        if (!(0 <= x)) {
          if (A = l[r.charAt(0)]) {
            Q = r.match(A[1]);
            x = A[0];
          } else {
            for (x = 0, l = -1; A = u[++l];) {
              if (Q = r.match(A[1])) {
                x = A[0];
                break;
              }
            }
          }
          !(A = N(x)) || Q && N(Q[1]) || (A = !1, x = 11);
          A || (O[r] = x);
        }
        u = c.o;
        O = r.length;
        c.o += O;
        if (A) {
          A = Q[1];
          l = r.indexOf(A);
          oa = A.length;
          ta = l + oa;
          Q[2] && (ta = O - Q[2].length, l = ta - oa);
          b(h + u, r.substr(0, l), m);
          if (oa && P(x, A)) {
            b(h + u + l, A);
            Ha = !0;
          }
          b(h + u + ta, r.substr(ta), m);
          c.g && c.g.length && (ca = c.g.shift());
          Ha || (ca !== c ? K(d, v, 2) : K(Aa, v, 2));
        } else {
          C.push(h + u, x), K(Aa, v, 2);
        }
      } else {
        c.h ? (ca = c.h.g.shift()) ? K(d, v, 2) : (ca = c.h, K(Aa, v, 2)) : K(V, v, 2);
      }
    }
    function Ba(b) {
      var c, m;
      if (n.length) {
        c = n.shift();
        m = Ga[c];
        if (m.pop) {
          Ga[c] = m = H(m[0], m[1]);
        } else if (N(m)) {
          Ga[c] = m = H(m);
        } else {
          return Ba(b);
        }
        K(Ba, b, 1, !1, m);
      } else {
        K(t, b);
      }
    }
    function na(b) {
      var l;
      for (var c, m = b.firstChild; m; m = m.nextSibling) {
        l = m.nodeType;
        c = 1 === l ? c ? b : m : 3 === l ? Ja.test(m.nodeValue) ? b : c : c;
      }
      return c === b ? v : c;
    }
    Ub = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var L = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Ea = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], Ga = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ka = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), U = $b.now || function() {
      return +new $b();
    }, ha, T = {useRegExpCompat:Zb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]}, Ca, sa, ca, xa, ma, Na, Ma, Ja, a, d, n, t, B, I, V, R, ba, la, e;
    Ca = U();
    Na = 5 > y ? 60 : 5.5 > y ? 0 : Zb ? 20 : 10;
    xb = [function(b) {
      Z.RegExpCompat = ha = b;
    }, function() {
      Ma = H("^\\s*<");
      Ja = H("\\S");
    }];
    Zb || (xb[1](), xb = v);
    a = function() {
      var b = ca, c = b.T, m = B(b.s, b.L), l = b.j = m.j;
      b.F = m.F;
      P(c, l) || (ca = v, K(e, v, 0, !0));
    };
    d = function() {
      var b = ca;
      b.Y = b.j.match(b.i[1]) || [];
      b.l.push(b.v, 0);
      K(Aa, v, 2);
    };
    n = [];
    t = function(b) {
      function c(x) {
        var A = x;
        0 <= x && (A = Ea[x]);
        0 <= A[1] && (A[1] = m(A[1]));
        return A;
      }
      function m(x) {
        var A = x;
        return 0 <= x && (A = Ga[x], !A.exec) ? (n.push(x), x) : A;
      }
      var l = ca, u = Ub[b], h, C;
      N(u) && (u = Ub[b] = Ub[u]);
      h = u[0];
      if (0 <= h) {
        h = L[h];
        if (0 <= h["-num"]) {
          C = h["-num"];
          delete h["-num"];
          for (var r = -1; 9 > r;) {
            h["" + ++r] = C;
          }
        }
        u[0] = h;
      }
      for (var O in h) {
        h[O] = c(h[O]);
      }
      u[1] = m(u[1]);
      h = u[2];
      r = 0;
      for (C = h.length; r < C; ++r) {
        h[r] = c(h[r]);
      }
      n.length ? K(Ba, b, 2) : (l.i ? l.h && (l.h.g[0].i = u) : l.i = u, K(d, v, 1));
    };
    B = function(b, c) {
      function m(O) {
        var x = O.nodeType;
        if (1 === x) {
          if (!nb(O, "nocode")) {
            for (x = O.firstChild; x; x = x.nextSibling) {
              m(x);
            }
            x = Za(O);
            if ("BR" === x || "LI" === x) {
              l[C] = "\n", h[C << 1] = u++, h[C++ << 1 | 1] = O;
            }
          }
        } else if (3 === x || 4 === x) {
          if (x = O.nodeValue) {
            x = c ? x.split("\r\n").join("\n").split("\r").join("\n") : x.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), l[C] = x, h[C << 1] = u, u += x.length, h[C++ << 1 | 1] = O;
          }
        }
      }
      var l = [], u = 0, h = [], C = 0, r;
      m(b);
      r = l.join("");
      "\n" === r.charAt(r.length - 1) && (r = r.substr(0, r.length - 1));
      return {j:r, F:h};
    };
    I = function(b, c, m) {
      var O;
      function l(x) {
        var A = x.nodeType, Q, oa, ta;
        if (1 === A && !nb(x, "nocode")) {
          if ("BR" === Za(x)) {
            u(x), x.parentNode && Ra(x);
          } else {
            for (x = x.firstChild; x; x = x.nextSibling) {
              l(x);
            }
          }
        } else if ((3 === A || 4 === A) && m) {
          Q = x.nodeValue;
          oa = Q.indexOf("\r\n");
          ta = 2;
          -1 === oa && (oa = Q.indexOf("\n"), ta = 1);
          -1 === oa && (oa = Q.indexOf("\r"));
          -1 !== oa && (A = Q.substr(0, oa), x.nodeValue = A, (Q = Q.substr(oa + ta)) && xc(x, Q), u(x), A || Ra(x));
        }
      }
      function u(x) {
        function A(oa, ta) {
          var Ha = ta ? oa.cloneNode(!1) : oa, Ta = oa.parentNode, hb;
          if (Ta) {
            Ta = A(Ta, 1);
            hb = oa.nextSibling;
            Ta.appendChild(Ha);
            for (var Ua = hb; Ua; Ua = hb) {
              hb = Ua.nextSibling, Ta.appendChild(Ua);
            }
          }
          return Ha;
        }
        for (; !x.nextSibling;) {
          if (x = x.parentNode, !x) {
            return;
          }
        }
        x = A(x.nextSibling, 0);
        for (var Q; (Q = x.parentNode) && 1 === Q.nodeType;) {
          x = Q;
        }
        C.push(x);
      }
      for (var h = M.createElement("li"); b.firstChild;) {
        h.appendChild(b.firstChild);
      }
      for (var C = [h], r = 0; r < C.length; ++r) {
        l(C[r]);
      }
      if (c === (c | 0)) {
        if (10 <= c && 7.2 > D) {
          O = M.createElement("ol");
          O.innerHTML = '<li value="' + c + '">' + h.innerHTML + "</li>";
          C[0] = O.firstChild;
        } else {
          tb(h, "value", c);
        }
      }
      O = wa(b, "ol", {className:"linenums"});
      b = Math.max(0, c - 1 | 0) || 0;
      r = 0;
      for (c = C.length; r < c; ++r) {
        h = C[r], ic(h, "L" + (r + b) % 10), h.firstChild || cd(h, "\u00a0"), O.appendChild(h);
      }
    };
    V = function() {
      var b = ca, c = b.j, m = c.length, l = 0, u = b.F, h = u.length, C = 0, r = b.l, O = r.length, x = 0, A, Q, oa, ta, Ha, Ta;
      r[O] = m;
      for (Q = A = 0; Q < O;) {
        r[Q] !== r[Q + 2] ? (r[A++] = r[Q++], r[A++] = r[Q++]) : Q += 2;
      }
      O = A;
      for (Q = A = 0; Q < O;) {
        oa = r[Q];
        ta = r[Q + 1];
        for (Q += 2; Q + 2 <= O && r[Q + 1] === ta;) {
          Q += 2;
        }
        r[A++] = oa;
        r[A++] = ta;
      }
      r.length = A;
      b = b.s;
      O = "";
      b && (O = b.style.display, La(b, "display", "none"));
      for (; C < h;) {
        A = u[C + 2] || m;
        oa = r[x + 2] || m;
        Q = Math.min(A, oa);
        ta = u[C + 1];
        if (1 !== ta.nodeType && (Ha = c.substring(l, Q))) {
          9 > y && (Ha = Ha.split("\n").join("\r"));
          Ta = Wb(ta, "span", {className:ka[r[x + 1]]}, Ha);
          Ra(ta);
          l < A && (u[C + 1] = xc(Ta, c.substring(Q, A)));
        }
        l = Q;
        l >= A && (C += 2);
        l >= oa && (x += 2);
      }
      b && La(b, "display", O);
      ca = v;
      K(e, v, 3, !0);
    };
    R = [];
    T.readyTime = U() - Ca;
    Ob(function(b) {
      if (b) {
        b = [Mb("pre"), Mb("code"), Mb("xmp")];
        for (var c = 0; c < b.length; ++c) {
          for (var m = 0, l = b[c].length; m < l; ++m) {
            la(b[c][m]);
          }
        }
        return !0;
      }
    });
    la = function(b) {
      R.push(b);
      ba = R.length;
      1 === ba && (Hc ? aa(Hc, e) : xb ? xb.push(function() {
        aa(e);
      }) : aa(e));
    };
    e = function() {
      var c, u, h;
      function b(C, r) {
        return (C.split(r)[1] || "").split(" ")[0];
      }
      if (!ca) {
        ba !== R.length && ma && ma(ba - R.length, ba);
        c = R.shift();
        if (c) {
          Ca = U();
          if (nb(c, "prettyprint") && !nb(c, "prettyprinted")) {
            for (var m = !1, l = c.parentNode; l !== ra; l = l.parentNode) {
              u = Za(l);
              if (("PRE" === u || "XMP" === u || "CODE" === u) && nb(l, "prettyprint")) {
                m = !0;
                break;
              }
            }
            if (!m) {
              m = c.className;
              Gb(c, "prettyprinted");
              l = !1;
              if (!l) {
                l = b(m, "lang-") || b(m, "language-");
                !l && (h = na(c)) && "CODE" === Za(h) && (l = b(h.className, "lang-") || b(h.className, "language-"));
              }
              u = Za(c);
              "PRE" === u || "XMP" === u ? u = 1 : (u = c.currentStyle, h = M.defaultView, u = (u = u ? u.whiteSpace : h && h.getComputedStyle ? h.getComputedStyle(c, null).getPropertyValue("white-space") : 0) && "pre" === u.substr(0, 3));
              h = !1;
              (h = "true" === h || +h) || (h = b(m, "linenums:") || nb(c, "linenums"), h = h.length ? +h : h);
              h && I(c, h, u);
              ca = {T:l, s:c, $:h, L:u, v:0, o:0, N:{}, l:[]};
              T.codeBlocks.push({elm:c, lang:l, readyTime:U() - Ca, decorateTime:0, decorateCount:0, updateDOMTime:0});
              K(a);
              return;
            }
          }
          K(e, v, 0, !0);
        } else {
          xa && xa(T);
        }
      }
    };
    Z.PR = {RegExpProxy:H, prettifyElement:la, registerCompleteHandler:function(b, c) {
      xa = b;
      ma = c;
    }};
  })();
  Gc = M.scripts || Mb("script");
  Fa = Gc[Gc.length - 1].src.split("/");
  --Fa.length;
  "js" === Fa[Fa.length - 1] && --Fa.length;
  (Fa = Fa.join("/")) && (Fa += "/");
  E("[p_assetUrl] " + Fa);
  ld = rd || "1" === Sa(ra, "mob");
  bc = (ld ? "mb" : "pc") + "/";
  db(function() {
    var N;
    (N = Db("logger")) || alert("#logger not found!");
    N ? (E = bz, qb = function(H) {
      wa(N, "DIV", {style:{color:"red"}}, H);
    }, Z.onerror = function(H, K, X) {
      qb(H + ", " + K + ", " + X);
      return !0;
    }) : Z.console ? (E = console.log, qb = console.error) : D ? (E = fb, qb = opera.postError) : E = qb = fb;
    for (; gc.length;) {
      E(gc.shift());
    }
    for (; hc.length;) {
      qb(hc.shift());
    }
    gc = hc = v;
    function bz(H) {
      wa(N, "DIV", v, H);
    }
    bz = !1;
  });
  6.1 > Da && (Qb ? Qb(uc) : ja(Z, "scroll", uc));
  Nb(Xc);
  6.1 > Da && (Qb ? Qb(vc) : ja(Z, "scroll", vc));
  Nb(Yc);
  10 > y && (11 !== od || 5 !== y) || (9 > D || 1 > Y || !Jb && !Z.addEventListener ? M.write('<link href="' + Fa + "css/" + bc + rc + '" rel="stylesheet"' + (8 > D ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > D || 1.5 > Y || 534 > qa || 5 > Da || 7 > za || 3 > cb) && db(function() {
    wa(Ab, "link", {href:Fa + "css/" + bc + rc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Zb) {
    if (cc) {
      Hc = function(N) {
        Z.RegExpCompat = bz;
        Hc = v;
        dc(Fa + "js/regexpcompat.js");
        function bz(H) {
          for (var K; K = xb.shift();) {
            K(H);
          }
          xb = v;
          aa(N);
          ec(Fa + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Z.RegExpCompat = function(N) {
        for (var H; H = xb.shift();) {
          H(N);
        }
        xb = v;
        ec(Fa + "js/regexpcompat.js");
      }, dc(Fa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

