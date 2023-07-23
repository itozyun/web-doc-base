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
(function(Ja, X, cb, lc, K, Qb, Oc, Cb, Ya, Rb, Sb, mc, Tb, v) {
  function Y(Q) {
    if (Ja[0] === Q) {
      return Ka === Ka + "" ? Ya(Ka) : Ka;
    }
  }
  function Da(Q) {
    var L = Ja[3];
    if (Ja[2] === Q) {
      return L === L + "" ? Ya(L) : L;
    }
  }
  function Ub() {
    return 6 > y ? xa.scrollTop : y ? jb.scrollTop : X.pageYOffset;
  }
  var xa = K.body, Ma = xa.style, jb, db, kb, Ka = Ja[1], y = Y(2) || Y(3), lb = Y(7), Ta = Y(5) || Y(6), I = Y(8) || Y(9), T = Y(11) || Y(12), xb = T && 0 <= Ja.conpare(Ka, "1.9.1"), Db = Y(13), ta = Y(15), za = Y(16) || Y(17), nc = Y(10) || Y(25), Aa = Y(20) || Y(22), oc = Y(23), Ua = Y(21), Eb = Y(24), Pc = Aa || oc || Ua || Eb, pc = Aa && Ya(Qb.userAgent.split("Edg/")[1]), Qc = Ya(Qb.appVersion.split("Trident/")[1]) + 4, Vb = Da(35) || Da(36) || Da(37), Rc = 0 <= Qb.userAgent.indexOf("Googlebot/"), 
  Za = 0.9 > T, Wb = (lb ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > I ? "opr70" : 8 > I ? "opr72" : 9.5 > I ? "opr" + (I | 0) : T && !xb ? 1.4 <= T ? "gck19" : 1.3 <= T ? "gck13" : 1 <= T ? "gck12" : Za ? 0.8 <= T ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Fb = "", Sc = Da(1) || Da(2) || Da(3) || Da(4) || Da(8) || Da(9) || Da(10), qc, eb = 8 > y || 7.2 > I ? !1 : v, rc = Ma.transform !== v ? "transform" : Ma["-o-transform"] !== v ? "-o-transform" : 
  Ma["-ms-transform"] !== v ? "-ms-transform" : Ma.MozTransform !== v ? "-moz-transform" : Ma["-webkit-transform"] !== v ? "-webkit-transform" : "", Pa = [], sc = [], Qa = [], Xb, tc, uc, vc, Gb, wc, xc, Hb, Ib, yc = !1, Tc = 525 > ta || 3.2 > za || 2.2 > Ua || 10 > I || T && !xb || Y(25) || 10 > Y(3) || Da(32) || Da(30) || Da(3), Z, pb, Jb, zc, Uc = !!xa.getBoundingClientRect, Yb, Ac, Zb, Bc, Ra = Cb.now || function() {
    return +new Cb();
  };
  (function() {
    function Q() {
      for (var V, H = 0, ka = Ra(); H < la.length;) {
        ka < la[0].t ? ++H : (V = la.splice(H, 1)[0], V.f(V.p));
      }
      ma = la.length ? Sb(Q, ya) : 0;
    }
    function L() {
      for (var V, H = 0; H < da.length; ++H) {
        V = da[H], V.f();
      }
    }
    function N() {
      pa && (pa = clearInterval(pa));
    }
    function ia() {
      ma && (ma = mc(ma));
    }
    Jb = function(V) {
      da.length || (pa = Tb(L, ca));
      da.push({f:V, C:++aa});
      return aa;
    };
    zc = function(V) {
      for (var H = da.length, ka; ka = da[--H];) {
        if (ka.C === V) {
          da.splice(H, 1);
          da[0] || N();
          break;
        }
      }
      return 0;
    };
    Yb = function() {
      pa && (N(), pa = Tb(L, ca));
    };
    Ac = N;
    var da = [], ca = 500, aa = 0, pa;
    if (5 > y || lb) {
      X._wdb_onlooptimer = L, L = "_wdb_onlooptimer()";
    }
    Z = function(V, H, ka) {
      la.length || (ma = Sb(Q, ya));
      la.push({f:V, p:H, C:++qa, t:Ra() + (ya < ka ? ka : ya)});
      return qa;
    };
    pb = function(V) {
      for (var H = la.length, ka; ka = la[--H];) {
        if (ka.C === V) {
          la.splice(H, 1);
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      ma && (ia(), ma = Sb(Q, ya));
    };
    Bc = ia;
    var la = [], ya = 16, qa = 0, ma;
    if (5 > y || lb) {
      X._wdb_ontimer = Q, Q = "_wdb_ontimer()";
    }
  })();
  var mb, nb, Cc, fb, Dc, Na, $a, Ec, $b, Ga, Kb, Fc, ac, Ba, gb, Gc, La, Ea, ab, Va, qb, Hc, Lb, Wa, hb, bc, Sa, yb, Ic;
  (function() {
    function Q(b, d, m) {
      var B = ["<", b], F = 1, P, R;
      if (d) {
        for (P in d) {
          var g = d[P];
          if (null != g && "" !== g) {
            if ("style" === P) {
              B[++F] = ' style="';
              for (R in g) {
                for (var x = ++F, z, D = [], O = R.split(""), ea = O.length; ea;) {
                  z = O[--ea], "A" <= z && "Z" >= z && (z = "-" + z.toLowerCase()), D[ea] = z;
                }
                B[x] = D.join("") + ":" + g[R] + ";";
              }
              B[++F] = '"';
            } else {
              "className" === P && (P = "class"), B[++F] = " " + P + '="' + g + '"';
            }
          }
        }
      }
      B[++F] = ">";
      null != m && (H && "font" !== b ? B[++F] = "<font>" + L(m) + "</font>" : B[++F] = L(m));
      B[++F] = "</" + b + ">";
      return B.join("");
    }
    function L(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function N(b) {
      var d = b.split("-"), m = d.length;
      if (2 > m) {
        return b;
      }
      for (; 1 < m;) {
        b = d[--m], d[m] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return d.join("");
    }
    function ia(b) {
      return da(K, b);
    }
    function da(b, d) {
      var m = "*" === d;
      m = H ? m ? b.all : b.all.tags(d.toUpperCase()) : 6 > y && m ? b.all : b.getElementsByTagName(d);
      for (var B = [], F = 0, P = m.length; F < P; ++F) {
        B[F] = m[F];
      }
      return B;
    }
    function ca(b, d) {
      var m = [], B = 0, F, P = -1;
      if (9 > y || !b.getElementsByClassName) {
        var R = 6 > y ? b.all : b.getElementsByTagName("*");
      } else {
        var g = !0;
        R = b.getElementsByClassName(d);
      }
      for (F = R.length; B < F; ++B) {
        var x = R[B];
        if (g || (H || 1 === x.nodeType) && qa(x, d)) {
          m[++P] = x;
        }
      }
      return m;
    }
    function aa(b) {
      return H ? b.parentElement : b.parentNode;
    }
    function pa(b, d, m, B, F, P) {
      if (H) {
        var R = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var g = $a(2 > b ? Na(d) : d);
        g = 2 > b ? g.indexOf(d) + b : g.length;
        d.insertAdjacentHTML(R, Q(m, B, F));
        d = $a(d)[g];
        null != F && ("font" === m ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (ka) {
        d = K.createElement(Q(m, B));
      } else {
        d = P ? K.createElementNS("http://www.w3.org/2000/svg", m) : K.createElement(m);
        if (B) {
          for (R in B) {
            if ((b = B[R]) || 0 === b) {
              switch(R) {
                case "class":
                case "className":
                  Lb(d, b);
                  break;
                case "style":
                  P = d.style;
                  for (g in b) {
                    P[g] = b[g];
                  }
                  break;
                default:
                  ab(d, R, b);
              }
            }
          }
          !I || "a" !== m && "A" !== m || !B.href || B["tag-index"] || B.tagIndex || ab(d, "tagIndex", "-0");
        }
        ja || null != F && la(d, F);
      }
      return d;
    }
    function la(b, d) {
      if (H) {
        return pa(2, b, "font", v, d);
      }
      var m = K.createTextNode("" + d);
      b.appendChild(m);
      return m;
    }
    function ya(b, d) {
      9 > y ? b.className = d : b.setAttribute("class", d);
    }
    function qa(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    function ma(b, d, m) {
      if (8 > I || 5.5 > y) {
        d = N(d);
      }
      b.style[d] = m;
    }
    function V(b) {
      return 5.5 > y ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var H = 5 > y;
    jb = ia("html")[0];
    db = ia("head")[0];
    mb = function(b) {
      return X[b] || K[b] || K.getElementById(b);
    };
    nb = ia;
    Cc = function(b) {
      return ca(K, b);
    };
    fb = da;
    Dc = ca;
    Na = aa;
    $a = function(b) {
      b = H ? b.children : b.childNodes;
      for (var d = [], m = b.length; m;) {
        d[--m] = b[m];
      }
      return d;
    };
    Ec = function(b) {
      var d = !(7.03 < I && 7.2 > I) && b.children;
      b = d ? d : b.childNodes;
      for (var m = [], B = b.length, F = -1, P; B;) {
        if (P = b[--B], d || 1 === P.nodeType) {
          H && "FONT" === P.tagName || (m[++F] = P);
        }
      }
      return m;
    };
    $b = function(b) {
      return H ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Ga = function(b, d, m, B, F) {
      d = pa(2, b, d, m, B, F);
      H || (b.appendChild(d), ja && null != B && la(d, B));
      return d;
    };
    Kb = function(b, d, m, B, F) {
      d = pa(0, b, d, m, B, F);
      H || (aa(b).insertBefore(d, b), ja && null != B && la(d, B));
      return d;
    };
    Fc = la;
    ac = function(b, d) {
      var m;
      if (H) {
        return pa(1, b, "font", v, d);
      }
      var B = K.createTextNode("" + d);
      (m = b.nextSibling) ? Na(b).insertBefore(B, m) : Na(b).appendChild(B);
      return B;
    };
    Ba = function(b) {
      H ? b.outerHTML = "" : (5.5 > y && (b.style.filter = ""), Na(b).removeChild(b));
    };
    gb = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== jb;) {
        if (d = Na(d), b === d) {
          return !0;
        }
      }
    };
    Gc = function(b) {
      return H ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ka = 9 > y, ja = ka;
    La = function(b) {
      return b.tagName.toUpperCase();
    };
    Ea = function(b, d) {
      if (8 > I || 5.5 > y) {
        d = N(d);
      }
      var m = b.getAttribute(d);
      return I && "tabIndex" === d ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    ab = function(b, d, m) {
      if (I && "tab-index" === d) {
        "-1" === m ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", m);
      } else {
        if (8 > I || 5.5 > y) {
          d = N(d);
        }
        b.setAttribute(d, m);
      }
    };
    Va = function(b, d) {
      if (I && "tab-index" === d) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > I || 5.5 > y) {
          d = N(d);
        }
        b.removeAttribute(d);
      }
    };
    qb = function(b, d) {
      if (I && "tab-index" === d) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > I || 5.5 > y) {
        d = N(d);
      }
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    Hc = function(b) {
      return b.className;
    };
    Lb = ya;
    Wa = qa;
    hb = function(b, d) {
      var m;
      if (!qa(b, d)) {
        if (m = b.className) {
          m += " ";
        }
        ya(b, m + d);
      }
    };
    bc = function(b, d) {
      if (qa(b, d)) {
        var m = b.className.split(" ");
        m.splice(m.indexOf(d), 1);
        ya(b, m.join(" "));
      }
    };
    Sa = ma;
    yb = function(b, d) {
      var m, B = -1, F;
      if (5.5 > y) {
        if (m = V(b)) {
          for (m = m.split(";"); F = m[++B];) {
            ma(b, F.split(":")[0], "");
          }
        }
        if (d) {
          for (B = -1, m = d.split(";"); F = m[++B];) {
            var P = F.split(":")[0];
            ma(b, P, F.substr(P.length + 1));
          }
        }
      } else if (7.1 > I) {
        if (b.setAttribute("style", ""), d) {
          for (m = d.split(";"); F = m[++B];) {
            F = F.split(":"), ma(b, F[0], F[1]);
          }
        }
      } else {
        9 > I || 1 > T ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    Ic = V;
    Pa.splice(0, 0, function() {
      function b(x) {
        x = $a(x);
        for (var z = x.length, D, O, ea; z;) {
          if (D = x[--z], O = D.nodeType, 8 === O) {
            d && R.push(D);
          } else if (1 === O) {
            switch(O = La(D), "/" === O.charAt(0) && (O = O.substr(1), g[O] = !0), O) {
              case "STYLE":
                if (7.2 <= I && 9 > I) {
                  break;
                }
              case "LINK":
                H || B || gb(db, D) || P.push(D);
                break;
              case "META":
                O = Ea(D, "name") || Ea(D, "property");
                for (ea = F.length; ea;) {
                  if (0 === O.indexOf(F[--ea])) {
                    R.push(D);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Rc || qb(D, "async")) {
                  break;
                }
                if (m) {
                  D.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (qb(D, "skip-cleanup")) {
                  break;
                }
              case "!":
                R.push(D);
                break;
              case "SOURCE":
                X.HTMLSourceElement || R.push(D);
                break;
              default:
                g[O] ? R.push(D) : $a(D).length && b(D);
            }
          }
        }
        for (; P[0];) {
          db.appendChild(P.pop());
        }
        for (; R[0];) {
          Ba(R.pop());
        }
      }
      bc(jb, "nojs");
      kb = mb("jsMain");
      var d = !(8 > I || 5 > y || lb || Za), m = vc, B = 7 > y, F = ["og:", "twitter:", "fb:"], P = [], R = [], g = {};
      b(jb);
    });
  })();
  var na, Ha, Oa, ob, cc, rb, sb, zb, dc, ec, Jc, Kc, Lc, Ab, Ia, fc;
  (function() {
    function Q() {
      return r ? p ? 2 : u ? 3 : 1 : 0;
    }
    function L(a) {
      Ha(X, "load", L);
      L = v;
      ia(Pa, a, !0);
      Oa = Pa = v;
    }
    function N(a, c) {
      sb(function() {
        var k = ma(a);
        c(k);
        k.addListener(c);
        return !0;
      });
    }
    function ia(a, c, k) {
      for (var h = 0; h < a.length; ++h) {
        !0 === a[h](c) && (a.splice(h, 1), --h);
      }
      k && (a.length = 0);
    }
    function da(a, c, k) {
      Pa || H.length || Z(ca);
      H.push(a, c, k);
    }
    function ca() {
      var a = H, c;
      for (H = []; c = a.shift();) {
        ia(c, a.shift(), a.shift());
      }
    }
    function aa(a) {
      var c = a || event;
      a = ja[c.type];
      var k = -1, h, G;
      5 > y ? c = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : y ? (c.target = c.srcElement, c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : d && (c.K = c.stopPropagation, c.stopPropagation = function() {
        G = !0;
      });
      for (; h = a[++k];) {
        h.j === this ? (this.g = h.i, y && (c.currentTarget = this), this.g(c), y ? (this.g = cb, this.g = v) : delete this.g) : 7.2 > I && this === K && h.j === X && (X.g = h.i, X.g(c), delete X.g);
      }
      if (y) {
        return c.preventDefault = c.stopPropagation = cb, c.preventDefault = c.stopPropagation = v, c.returnValue;
      }
      d && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (B = !0), G && !B && c.K(), c.K = c.stopPropagation = v);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function pa() {
      var a = 9 === V.offsetWidth;
      Ab !== a && da(sc, Ab = a);
    }
    function la() {
      !Pa && C && (pb(C), C = Z(ya));
    }
    function ya() {
      C = 0;
      ia(t);
    }
    function qa(a) {
      Pa || ia(J, a);
    }
    var ma = X.matchMedia, V, H = [];
    Pa.push(function() {
      N = v;
      V = Ga(xa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Oa(function() {
        H.length && Z(ca);
      });
    });
    na = function(a, c, k, h) {
      if (m) {
        a.addEventListener(c, k, h ? ka ? h : h.capture || !0 === h : !1);
      } else {
        var G = {j:a, i:k};
        h = ja[c];
        var W = "on" + c, ba, ra;
        if (h) {
          for (ba = h.length; ra = h[--ba];) {
            if (ra.j === a && ra.i === k) {
              return;
            }
          }
          ja[c].push(G);
        } else {
          ja[c] = h = [G], b || (c = a[W], "function" === typeof c && c !== aa && h.unshift({j:a, i:c}));
        }
        b ? a.attachEvent(W, aa) : a[W] = aa;
      }
    };
    Ha = function(a, c, k, h) {
      if (m) {
        a.removeEventListener(c, k, h ? ka ? h : h.capture || !0 === h : !1);
      } else {
        h = ja[c];
        c = "on" + c;
        var G, W, ba;
        if (h) {
          for (G = h.length; W = h[--G];) {
            W.j === a && (W.i === k ? h.splice(G, 1) : ba = !0);
          }
          ba || (b ? a.detachEvent(c, aa) : y ? (a[c] = cb, a[c] = null) : delete a[c]);
        }
      }
    };
    var ka = !y && !lb && (new Oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ja = {}, b = !1, d = 525.13 > ta, m = !d && !lb && X.addEventListener, B;
    d && jb.addEventListener("click", function(a) {
      if (B) {
        return B = !1, a.preventDefault(), !1;
      }
    });
    Oa = function(a) {
      Pa.push(a);
    };
    ob = function(a) {
      F && F.push(a);
    };
    var F = [];
    if (419.3 >= ta) {
      var P = function() {
        if (P) {
          var a = K.readyState;
          "loaded" === a || "complete" === a ? (P = v, L()) : Z(P);
        }
      };
      Z(P);
    } else {
      na(X, "load", L);
    }
    y || !Za && 1.8 > T ? na(X, "unload", function(a) {
      ia(F, a, !0);
    }) : F = v;
    sb = function(a) {
      sc.push(a);
    };
    Oa(function() {
      pa();
      Jb(pa);
    });
    ec = function(a, c) {
      if (R) {
        na(a, "focusin", c);
      } else if (g) {
        na(a, "DOMFocusIn", c);
      } else {
        if (z) {
          sa || (sa = Tb(l, 333));
        } else if (x || D) {
          na(K, "focus", ea, !0);
        } else {
          return;
        }
        for (var k = O, h = 0, G = k.length; h < G; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            return;
          }
        }
        k.push(a, c);
      }
    };
    Jc = function(a, c) {
      if (R) {
        na(a, "focusin", c);
      } else if (g) {
        na(a, "DOMFocusIn", c, !1);
      } else {
        for (var k = O, h = 0, G = k.length; h < G; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            k.splice(h, 2);
            k.length || (z ? sa = zc(sa) : (x || D) && Ha(K, "focus", ea, !0));
            break;
          }
        }
      }
    };
    var R = 6 <= y || Ta || 52 <= T || 15 <= Aa || 534 <= ta || 5 <= za || oc || 4 <= Ua || 4 <= Eb || 11.6 <= Y(8) || 12 <= Y(9), g = 8 <= I || Aa || Ua || Eb || ta || za, x = 8 > I, z = 6 > y, D = 52 > T || Db;
    if (D || x) {
      var O = [];
      var ea = function(a) {
        var c = O, k = x ? K.activeElement : a.target;
        if (x) {
          var h = a;
          a = {type:"focusin", target:k, preventDefault:function() {
            h.preventDefault();
          }, stopPropagation:function() {
            h.stopPropagation();
          }};
        }
        for (var G = 0, W = c.length; G < W; ++G) {
          var ba = c[G];
          (ba === k || gb(ba, k)) && c[G + 1].call(ba, a);
        }
      };
    } else if (z) {
      O = [];
      var sa, fa, va, l = function() {
        va = X.onerror;
        X.onerror = e;
        var a = K.activeElement;
        if (fa !== a) {
          fa = a;
          for (var c = O, k, h = 0, G = c.length; h < G; ++h) {
            k = c[h], (k === a || gb(k, a)) && c[h + 1].apply(k, [{target:a}]);
          }
        }
        X.onerror = va;
        va = v;
      }, e = function() {
        X.onerror = va;
        va = fa = v;
        return !0;
      };
    }
    dc = function(a) {
      Qa && Qa.push(a);
    };
    var w = 60 > T || Db, r, u, p;
    if (89 <= T || 89 <= Aa || Vb && 79 <= pc || ma && (ma("(forced-colors:none)").matches || ma("(forced-colors:active)").matches)) {
      fc = !0, N("(forced-colors:active)", function(a) {
        r = a.matches;
        Ia = Q();
        da(Qa, Ia);
      });
    } else if (10 <= y || Ta || Vb && pc) {
      fc = !0, N("(-ms-high-contrast:black-on-white)", function(a) {
        r = u = a.matches;
        Ia !== Q() && (Ia = Q(), da(Qa, Ia));
      }), N("(-ms-high-contrast:white-on-black)", function(a) {
        r = p = a.matches;
        Ia !== Q() && (Ia = Q(), da(Qa, Ia));
      }), N("(-ms-high-contrast:active)", function(a) {
        r = a.matches;
        Ia !== Q() && (Ia = Q(), da(Qa, Ia));
      });
    } else if (Vb && (y || T && 0 <= Ja.conpare(Ka, "1.8.1") || Db)) {
      var M = function() {
        function a(h, G) {
          if (G && "transparent" === h) {
            return 382.5;
          }
          if ("#" === h.charAt(0)) {
            return parseInt("0x" + h.substr(1, 2), 16) + parseInt("0x" + h.substr(3, 2), 16) + parseInt("0x" + h.substr(5, 2), 16);
          }
          var W = h.split("(")[1].split(",");
          return Ya(W[0]) + Ya(W[1]) + Ya(W[2]);
        }
        var c = K.defaultView;
        var k = c ? c.getComputedStyle(V, null) : V.currentStyle;
        c = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        c && (r = "#123456" !== c && "rgb(18,52,86)" !== c, u = a(c) < a(k, !0), p = a(c) > a(k, !0), Ia !== Q() && (Ia = Q(), da(Qa, Ia, w)));
      };
      sb(function(a) {
        if (a) {
          return Sa(V, "color", "#123456"), Sa(V, "backgroundColor", "#123456"), w ? (M(), Qa = v) : Jb(M), M = v, !0;
        }
      });
    } else {
      Qa = Q = v;
    }
    zb = function(a) {
      q.push(a);
    };
    var q = [], U = 7.5 <= I && 8 > I;
    U && function() {
      for (var a = K.images, c = a.length, k; c;) {
        k = a[--c], k.J = k.src, Va(k, "src");
      }
    }();
    Oa(function() {
      function a() {
        h ? (G = k[--h], U && ab(G, "src", G.J), tc(c, U ? G.J : G.src)) : zb = q = v;
      }
      function c(ba) {
        ia(q, {G:G, H:ba}, !h);
        a();
      }
      var k = K.images || nb("img"), h = k.length;
      if (12 > I || 532 > ta) {
        a();
      } else {
        for (; h;) {
          var G = k[--h];
          var W = 9 > y ? G.complete : 0 <= G.naturalWidth ? G.naturalWidth : G.width;
          da(q, {G:G, H:W}, !h);
        }
        zb = q = v;
      }
    });
    cc = function(a) {
      t.push(a);
    };
    var t = [], C;
    na(X, "resize", la);
    ob(function() {
      C && mc(C);
      Ha(X, "resize", la);
    });
    rb = function(a) {
      J.push(a);
    };
    var J = [], ha = 1 > T || 1.2 <= T && 1.8 > T || 7.2 >= I, oa;
    ha ? Jb(function() {
      var a = X.pageYOffset;
      oa !== a && (oa = a, qa({type:"scroll", cancelable:!1, stopPropagation:cb, preventDefault:cb}));
    }) : na(X, "scroll", qa, {passive:!0});
    ob(function() {
      ha || Ha(X, "scroll", qa, {passive:!0});
    });
    Kc = function(a, c) {
      if (Ca) {
        na(a, "wheel", c, {passive:!1});
      } else if (f) {
        na(a, "mousewheel", c, !1);
      } else if (n) {
        na(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var k = E, h = 0, G = k.length; h < G; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            return;
          }
        }
        k.length || na(K, "DOMMouseScroll", S, !1);
        k.push(a, c);
      }
    };
    Lc = function(a, c) {
      if (Ca) {
        Ha(a, "wheel", c, {passive:!1});
      } else if (f) {
        Ha(a, "mousewheel", c, !1);
      } else if (n) {
        Ha(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var k = E, h = 0, G = k.length; h < G; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            k.splice(h, 2);
            k.length || Ha(K, "DOMMouseScroll", S, !1);
            break;
          }
        }
      }
    };
    var Ca = 9 <= y || Ta || 17 <= T || 31 <= Aa || 537.7 <= ta, f = 6 <= y || Ta || 9 <= I || Aa || 522 <= ta || za, n = xb, A = T && 0 <= Ja.conpare(Ka, "0.9.7") && !xb;
    if (A) {
      var E = [], S = function(a) {
        for (var c = E, k = a.target, h, G = 0, W = c.length; G < W; ++G) {
          h = c[G], gb(h, k) && c[G + 1].call(h, a);
        }
      };
    }
  })();
  (function() {
    function Q(e) {
      switch(e) {
        case 1:
          return ja;
        case 2:
          return !!b;
        case 3:
          return !!d;
        case 4:
          return !!m;
        case 5:
          return F;
        case 6:
          return B && !ya;
      }
      return !1;
    }
    function L(e) {
      P(e);
      va && !e && Ba(va);
      P = R = g = x = z = D = sa = fa = va = l = v;
    }
    function N(e) {
      K.fonts.load('1.6em "' + e + '"').then(function() {
        var w;
        (w = da(R)) ? Z(L, w) : ia(!0);
      }, function() {
        eb !== v ? ca(eb) : Xb(ca);
      });
    }
    function ia(e) {
      e && (ea = Ra());
      (e = da(R, O)) ? L(e) : (e = O, K.hidden || K.msHidden || K.mozHidden || K.webkitHidden ? (ea = Ra(), e = !1) : e = e < Ra() - ea, e ? sa ? aa() : la ? L(0) : eb !== v ? ca(eb) : Xb(ca) : Z(ia));
    }
    function da(e) {
      var w = 0, r = -1, u = (H || !1) && [];
      if (!l) {
        var p = -1;
        var M;
        fa = Ga(xa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, V);
        for (l = []; M = ka[++p];) {
          Sa(fa, "fontFamily", M), l[p] = fa.offsetWidth;
        }
      }
      for (5 > y ? fa || (fa = Ga(xa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, V)) : xa.appendChild(fa); p = ka[++r];) {
        Sa(fa, "fontFamily", '"' + e + '",' + p);
        var q = fa.offsetWidth;
        H ? u[r] = q : q !== l[r] && (w = 1);
      }
      if (H && q === u[0] && q === u[1]) {
        for (w = 1, r = -1; 0 <= (q = l[++r]);) {
          if (q === u[0] && q === u[1] && q === u[2]) {
            w = 0;
            break;
          }
        }
      }
      !y && w && z && (fa.textContent = z, q = fa.offsetWidth, fa.textContent = D, w = q === fa.offsetWidth ? 2 : 1, fa.textContent = V);
      Ba(fa);
      5 > y && (fa = v);
      return w;
    }
    function ca(e) {
      e ? (sa = !0, O = ma, aa()) : L(0);
    }
    function aa() {
      if (g) {
        for (; g.length;) {
          var e = g.shift(), w = g.shift();
          if (Q(e)) {
            va = xc(w, pa, x, va);
            return;
          }
        }
      }
      L(0);
    }
    function pa(e) {
      e ? ia(!0) : aa();
    }
    Xb = !1 === eb ? function(e) {
      Z(e, !1);
    } : function(e) {
      function w(p) {
        u && (u = pb(u), eb = p, r.onload = r.onerror = cb, Z(e, p));
      }
      if (eb !== v) {
        Z(e, eb);
      } else {
        var r = new Image(), u = Z(w, !1, 999);
        r.onerror = function() {
          w(!1);
        };
        r.onload = function() {
          w(1 === r.width * r.height);
        };
        r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > y && Oa(function() {
      var e = Ga(xa, "div");
      yb(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      qc = 1 < e.offsetHeight;
      Ba(e);
    });
    tc = function(e, w) {
      function r() {
        p || !M || u.complete ? (Z(e, !!u.width), u.onerror = u.onload = cb, u = e = v) : (--M, Z(r));
      }
      var u = new Image(), p, M = 99;
      u.onerror = function() {
        p = !0;
      };
      u.onload = function() {
        p = !0;
      };
      u.src = w;
      Z(r);
    };
    uc = function(e, w, r, u, p, M, q) {
      P = e;
      R = w;
      g = r;
      x = u;
      z = p;
      D = M;
      O = q || qa;
      Y(10) ? Z(L, 1) : Tc ? Z(L, 0) : !K.fonts || 603 > ta || 11 > za ? ia(!0) : N(R);
    };
    var la = 9 > y, ya = 6 > Aa || I || 530 > ta || 4 > za, qa = 5E3, ma = 500, V = "mmmmmmmmmmlliiiiiiiii", H = 21 > Aa || 7 > za || ta && 0 >= Ja.conpare(Ka, "536.11"), ka = ["monospace", "sans-serif", "serif"], ja = 14 <= Ta || 36 <= Aa || 39 <= T || 602 <= ta || 10 <= za, b = 6 <= Aa || T && 0 <= Ja.conpare(Ka, "1.9.2") || 525 <= ta || 3.2 <= za || 4.4 <= Ua || 11.1 <= I || Ta || 9 <= Y(2) || 10 <= Y(3), d = 2 <= Aa || xb || 525 <= ta || 3.2 <= za || 2.2 <= Ua || 10 <= I || Ta || 9 <= Y(2) || 
    10 <= Y(3), m = d, B = 525 <= ta || 3.2 <= za || 38 > Aa || 3 <= Ua || 11.5 <= I, F = 4 <= Y(2) || 10 <= Y(3), P, R, g, x, z, D, O, ea, sa, fa, va, l;
  })();
  (function() {
    function Q(g) {
      if (2 !== g) {
        var x = Cc("ico"), z = 0, D = x.length;
        if (D) {
          if (1 === g) {
            for (; z < D; ++z) {
              g = x[z];
              var O = Gc(g);
              if (O = R[O]) {
                g.innerHTML = O;
              }
            }
          } else {
            B && !m && (X.VectorIconFallback = bz, Hb(wa + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Ib(wa + "js/vector-icon-svg-fallback.js");
        return [R, x, Ga, m];
      }
      bz = !1;
    }
    zb(function(g) {
      var x = g.G;
      g = g.H;
      var z = Na(x);
      !Wa(z, "aBodyRoot") && g ? hb(z, "js-image-has-been-loaded") : g || Ea(x, "alt") || "lazy" === Ea(x, "loading") || Sa(x, "display", "none");
    });
    Za && (Pa.splice(1, 0, function() {
      for (var g = Dc(kb, "RichLink-sep"), x, z, D, O, ea, sa; x = g.shift();) {
        for (x = $a(x); z = x.shift();) {
          if ("A" === La(z) && !z.innerHTML) {
            for (; D = x.shift();) {
              if (1 === D.nodeType) {
                if ("A" === La(D)) {
                  break;
                }
                for (O = fb(D, "A"); ea = O.shift();) {
                  for (sa = $a(ea); sa.length;) {
                    ea.parentNode.insertBefore(sa.shift(), ea);
                  }
                  Ba(ea);
                }
              }
              z.appendChild(D);
            }
          }
        }
      }
    }), Pa.splice(2, 0, function() {
      for (var g = nb("A"), x, z; x = g.shift();) {
        "A" !== La(x) || x.innerHTML || (z = x.nextSibling && x.nextSibling.firstChild) && z.href === x.href && Ba(x);
      }
    }));
    5.5 <= y && 8 > y && Qa && dc(function(g) {
      for (var x = fb(xa, "a"), z = x.length, D = 0; D < z; ++D) {
        x[D].hideFocus = !g;
      }
    });
    if (!fc && Qa) {
      var L, N = function() {
        L = Ga(db, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:wa + "css/" + Fb + "hc/" + Wb});
        (rc || 5.5 <= y && 9 > y && qc) && hb(xa, "js-canuse-css-rotate-when-forced-colors-mode");
        N = v;
      };
      dc(function(g) {
        g && !L ? N() : L && (g ? db.appendChild(L) : Ba(L));
      });
    }
    I && Oa(function() {
      for (var g = fb(xa, "a"), x = g.length, z = 0, D; z < x; ++z) {
        D = g[z], "-1" === Ea(D, "tabIndex") ? Va(D, "tabIndex") : Ea(D, "href") && ab(D, "tabIndex", "0");
      }
      g = fb(xa, "input");
      z = 0;
      for (x = g.length; z < x; ++z) {
        D = g[z], "hidden" === Ea(D, "type") && Va(D, "tabIndex");
      }
    });
    if (T && 0 > Ja.conpare(Ka, "0.9.5")) {
      yc = !0;
      var ia, da, ca, aa, pa;
      Oa(function() {
        na(K, "keydown", la);
        na(K, "keyup", ya);
        ec(xa, qa);
        Za || (na(X, "blur", ja), na(xa, "click", ka));
      });
      var la = Za ? function(g) {
        16 === g.keyCode ? ia = !0 : 9 === g.keyCode && aa && ma(aa, !0) && (aa.blur && aa.blur(), g.stopPropagation(), g.preventDefault(), Z(H));
      } : function(g) {
        16 === g.keyCode ? ia = !0 : 9 === g.keyCode && (da = Ra());
      }, ya = function(g) {
        16 === g.keyCode && (ia = !1);
      }, qa = Za ? function(g) {
        aa = g.target;
      } : function(g) {
        var x = g.target;
        if (aa === x) {
          ca = v;
        } else if (ca) {
          x === ca ? (g.stopPropagation(), H(!0)) : (x.blur && d(x), g.preventDefault(), H());
        } else {
          if (g = aa) {
            aa = v, d(g);
          }
          ca = x;
          H(!0);
        }
      }, ma = function(g, x) {
        var z = Ra(), D = xa, O = "nextSibling", ea = "firstChild";
        ia && (x || z - 99 < da && da <= z) && (O = "previousSibling", ea = "lastChild");
        for (ca = v; g !== D;) {
          if (sa) {
            z = g;
            var sa = !1;
          } else {
            z = g[O];
          }
          if (z) {
            if (1 === z.nodeType) {
              if (V(z)) {
                return ca = z, !0;
              }
              g = (sa = z[ea]) || z;
            } else {
              g = z;
            }
          } else {
            g = g.parentNode;
          }
        }
      }, V = function(g, x) {
        function z() {
          return "-1" !== Ea(g, "tab-index");
        }
        function D() {
          return 0 < g.offsetHeight * g.offsetWidth;
        }
        if (g.focus) {
          var O;
          switch({A:x ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[La(g)]) {
            case 1:
              if (qb(g, "href") && z() && D()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ea(g, "type") && z() && !qb(g, "disabled") && D()) {
                return !0;
              }
              break;
            case 3:
              if (z() && !qb(g, "disabled") && D()) {
                return !0;
              }
              break;
            default:
              if ((O = Ea(g, "tab-index")) && "-1" !== O && D()) {
                return !0;
              }
          }
        }
      }, H = function(g) {
        pa = 0;
        ca && (Za || na(ca, "blur", b), aa = ca, ca = v, g || aa.focus());
      };
      if (!Za) {
        var ka = function(g) {
          var x = g.target;
          if (aa && V(x, !0)) {
            var z = aa;
            aa = v;
            d(z);
            ca = x;
            g.stopPropagation();
            g.preventDefault();
            H();
          }
        }, ja = function(g) {
          g.target === K && (ca = v);
        }, b = function(g) {
          g = g.target;
          Ha(g, "blur", b);
          aa === g && ma(g) && (pa || (pa = Z(H)));
        }, d = function(g) {
          Ha(g, "blur", b);
          g.blur();
        };
      }
    }
    sb(function(g) {
      if (g) {
        return uc(Q, "web-doc-base", [1, wa + "iconfont/woff2.css", 2, wa + "iconfont/woff.css", 4, wa + "iconfont/otf.css", 3, wa + "iconfont/ttf.css", 6, wa + "iconfont/svg.css"], "js-myIconFont-testCssReady", F, P, 5E3), Q = v, !0;
      }
    });
    var m = 8 <= Y(8) && 9 > I, B = 9 <= y || Ta || 1.8 <= T || 8 <= Y(8) || 9 <= Y(9) || 3 <= Y(21) || Db || Pc || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || za, F = "IE", P = "\ueadb", R = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", 
    Android:"\ud83e\udd16"};
  })();
  (function() {
    function Q(f) {
      var n = R.length, A, E, S, a;
      if (13 === (f.keyCode || f.V) || f.type !== g) {
        for (; n;) {
          var c = R[--n];
          if (c.F === this || c.u === this) {
            n = c.F;
            var k = A = c.u;
            if (c.P) {
              if (Sa(n, "width", c.$), n.src = c.Z, Lb(k, c.T), n = c.L) {
                yb(n, c.S), bc(n, "js-captioned-thumbnail__large");
              }
            } else {
              if (E = c.N) {
                delete c.N;
                if (c.M) {
                  for (; A = Na(A);) {
                    if (!Wa(A, "caption")) {
                      var h = La(A);
                      if ("DIV" === h || "P" === h || "BLOCKQUOT" === h || "LI" === h || "DD" === h || "TD" === h || "TH" === h || "FORM" === h || "PRE" === h) {
                        break;
                      }
                    }
                  }
                  A = (A.offsetWidth | 0) - 4;
                  1600 < A && (A = 1600);
                  if (2 === c.M) {
                    E = E.split("=");
                    h = E.length;
                    if (S = E[h - 1]) {
                      (a = Ya(S.substr(1))) && S === "s" + a ? E[h - 1] = "w" + A : E[h] = "w" + A;
                    }
                    E = E.join("=");
                  } else {
                    E = E.split("/");
                    h = E.length;
                    if (S = E[h - 2]) {
                      (a = Ya(S.substr(1))) && S === "s" + a ? E[h - 2] = "w" + A : E.splice(h - 1, 0, "w" + A);
                    }
                    E = E.join("/");
                  }
                }
                c.X = E;
              }
              c.T = Hc(k);
              hb(k, "js-pica-thumbnail__large");
              Sa(n, "width", "");
              n.src = c.X;
              if (n = c.L) {
                yb(n, ""), hb(n, "js-captioned-thumbnail__large");
              }
            }
            c.P = !c.P;
            break;
          }
        }
        L(f);
      }
    }
    function L(f) {
      f.preventDefault();
      f.stopPropagation();
    }
    function N(f) {
      var n = p;
      if (Ab) {
        if (M && !n) {
          if (Ra() < M) {
            return;
          }
          M = v;
        }
        7 === f ? q = 0 : (q && (q = pb(q)), r = Ub());
        n ? (p = ia(v, n[0], n[1])) || (M = Ra() + 99) : ia();
      } else {
        p = v;
      }
    }
    function ia(f, n, A) {
      function E(Xa) {
        k = Xa;
        if (e) {
          h = e + ":translate" + (u ? "3D(0," : "(0,") + Xa + (u ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Xa) {
          if (O || ea) {
            var gc = fa.offsetWidth;
          }
          h = O ? "position:fixed;width:" + gc + "px;top:" + (Xa - S + ba) + "px" : sa ? "top:" + Xa + "px" : "position:absolute;top:" + Xa + "px;left:0";
          if (ea && h) {
            var Bb = 8 > y ? " " : ",";
            h += ";clip:rect(" + (0 > Xa ? -Xa + "px" + Bb + gc + "px" + Bb + Fa : "0" + Bb + gc + "px" + Bb + (Xa + Fa < Mb ? Fa : Mb - Xa)) + "px" + Bb + "0)";
          }
        }
      }
      var S = r, a = va, c = fa.offsetTop === a.offsetTop, k = 0, h = "", G = !0;
      if (c) {
        for (var W = 0, ba = 0, ra = a; ra && ra !== xa;) {
          ba += ra.offsetTop, ra = ra.offsetParent;
        }
        k = w;
        var hc = 11 > y ? jb.offsetHeight : X.innerHeight, ic = a.offsetHeight, Fa = l.offsetHeight, Mb = Fa < ic ? ic : Fa, ib = S, tb = ib + hc, Nb = ba, Ob = Nb + Mb, Mc = ba + k, Vc = Mc + Fa;
        a = ib < Nb ? Nb : ib;
        ra = Ob < tb ? Ob : tb;
        var ub = ra - a;
        ib = Ob <= ib;
        tb = tb <= Nb;
        if (n !== v) {
          G = ba + n;
          f = G + A;
          var vb;
          if (ib || tb) {
            return hc <= A ? vb = ba : vb = ib ? Ob - A : ba + A - hc, M = v, X.scroll(0, vb), p;
          }
          Fa <= ub ? W = 3 : A <= ub ? Fa - n <= ub ? W = 2 : a <= G && f <= ra ? a < ba + k && (W = 4) : W = a <= G && G <= ra ? 5 : a <= f && f <= ra ? 4 : f < a ? 4 : 5 : W = 4;
          G = !1;
        } else {
          f !== v ? Fa <= ub ? (W = 7, G = !1) : (k -= 60 * f, W = ra - ba - Fa, vb = a - ba, k < W ? k = W : vb < k && (k = vb), W = 6) : ic <= Fa || (ib ? W = 1 : tb || (Fa <= ub ? W = 3 : a < Mc ? W = 3 : Vc < ra ? W = 2 : S < ba + Fa - ub || (W = 2)));
        }
        switch(W) {
          case 0:
            E(0);
            break;
          case 1:
            E(Mb - Fa);
            break;
          case 2:
            E(ra - ba - Fa);
            break;
          case 3:
            E(a - ba);
            break;
          case 4:
            E(a - ba - n);
            break;
          case 5:
            E(ra - ba - (n + A));
          case 6:
            E(k);
        }
      }
      yb(l, h);
      w = k;
      return c && G;
    }
    function da(f) {
      if (Ab && (T && (r = Ub()), this !== f.target)) {
        var n = Rb(f.deltaY) ? f.deltaY : Rb(f.wheelDeltaY) ? f.wheelDeltaY / 120 : Rb(f.wheelDelta) ? f.wheelDelta / -120 : f.detail / ("MozMousePixelScroll" === f.type ? 45 : 1);
        n && ia(9 >= n ? -9 >= n ? -3 : n : 3) && (f.preventDefault(), f.stopPropagation());
      }
    }
    function ca(f) {
      if (Ab) {
        var n = T && 0 > Ja.conpare(Ka, "0.9.4"), A = f.target;
        f = l;
        var E = 0;
        if (gb(f, A)) {
          if (e) {
            n = A.getBoundingClientRect();
            var S = n.bottom - n.top;
            E = n.top - f.getBoundingClientRect().top | 0;
          } else {
            S = A.offsetHeight;
            var a = A;
            if (n) {
              for (var c = []; a && (T ? gb(f, a) : f !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && c.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = A;
            }
            for (; a && (T ? gb(f, a) : f !== a);) {
              if (n) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, E += a.offsetHeight || 0;
                }
                a = a.parentNode;
              } else {
                E += a.offsetTop, a = a.offsetParent;
              }
            }
          }
          D ? (p = [E, S], q && pb(q), q = Z(N, 7, 1 > T || 536 > ta || 14 > Aa ? 500 : 0)) : (r = Ub(), ia(v, E, S));
        }
      }
    }
    function aa() {
      U.call(t);
    }
    function pa() {
      K.fullscreenElement || K.fullscreen || K.webkitIsFullscreen || K.msFullscreenElement || X.fullScreen ? (ab(t, "id", "blog2slide-root"), ha[1].parentNode.insertBefore(C, ha[1]), la(), K.onkeydown = ya) : J && (Ba(C), Va(t, "id"), Va(J, "id"), J = K.onkeydown = v);
    }
    function la() {
      J && Va(J, "id");
      oa = 0 < oa ? Ca < oa ? Ca : oa : 0;
      J = ha[oa];
      ab(J, "id", "blog2slide-current");
    }
    function ya(f) {
      if ("ArrowRight" === f.key || 39 === f.keyCode) {
        ++oa, la();
      } else if ("ArrowLeft" === f.key || 37 === f.keyCode) {
        --oa, la();
      }
    }
    xc = function(f, n, A, E) {
      E = E || Ga(db, "link", {type:"text/css", rel:"stylesheet"});
      var S;
      if (d) {
        (S = mb(A)) ? Va(S, "id") : S = Ga(xa, "div", {"aria-hidden":"true", className:A});
        var a = S.offsetWidth;
        ab(S, "id", A);
      }
      b(E, f, n, S, a);
      return E;
    };
    var qa = T && 0 > Ja.conpare(Ka, "0.9.1"), ma = 11 <= y || Ta || 9 <= I && 9.5 > I, V = 11 > y, H = 7.2 <= I && 7.5 > I, ka = 9 > T && !qa || 19 > Aa || 4.3 > Ua || 2 > Eb || 536 > ta || 6 > za || 7 <= I && 9 > I && !H, ja = !qa && !ma && !V && !H && !ka, b = ja ? function(f, n, A) {
      f.onload = bz;
      f.onerror = function() {
        f.onload = f.onerror = null;
        Z(A, !1);
      };
      f.href = n;
      function bz() {
        f.onload = f.onerror = null;
        Z(A, !0);
      }
      bz = !1;
    } : ma ? function(f, n, A, E, S) {
      f.onload = function() {
        Z(A, d(E, S));
        Ba(E);
        f.onload = E = null;
      };
      f.href = n;
    } : V ? function(f, n, A, E, S) {
      f.onreadystatechange = function() {
        "complete" === f.readyState && (Z(A, d(E, S)), Ba(E), E = null, f.V = cb);
      };
      f.href = n;
    } : ka || H ? function(f, n, A, E, S) {
      function a() {
        k && (h = pb(h), G = Ra() + 999, Z(c, 0, 99), ka ? k.onerror = null : k.removeEventListener("load", a, !1), k = null);
      }
      function c() {
        d(E, S) ? (Ba(E), E = null, Z(A, !0)) : Ra() < G ? Z(c, 0, 99) : (Ba(E), E = null, Z(A, !1));
      }
      var k = new Image(), h = Z(a, 0, 5E3), G;
      ka ? k.onerror = a : k.addEventListener("load", a, !1);
      k.src = f.href = n;
    } : function(f, n, A) {
      Z(A, !1);
    }, d = !ja && !qa && function(f, n) {
      return f.offsetWidth !== n;
    };
    wc = T && 0 >= Ja.conpare(Ka, "0.9");
    Gb = !(7.2 > I || wc);
    Hb = function(f) {
      m ? K.write('<script src="' + f + '">\x3c/script>') : Pa || F.length ? F.push(f) : P(f);
    };
    Ib = function() {
      m || P(F.shift());
    };
    var m = !Gb, B = Gb && 7.5 > I;
    if (!m) {
      var F = [];
      B && (vc = !0);
      Oa(function() {
        P(F.shift());
      });
      var P = function(f) {
        f && (B ? jc[0].src = f : Ga(db, "script", {src:f}));
      };
    }
    var R = [], g = 5.5 <= y && 8 > y ? "keypress" : "keydown";
    if (!nc) {
      var x = Ma.transition !== v || Ma["-o-transition"] !== v || Ma["-moz-transition"] !== v || Ma["-webkit-transition"] !== v;
      zb(function(f) {
        if (f.H && kb) {
          f = f.G;
          var n = Na(f), A = "", E;
          if ("A" === La(n) && 1 === Ec(n).length) {
            var S = Ea(n, "href");
            var a = S.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((E = 0 < S.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              na(n, g, Q);
              na(f, "click", Q);
              na(n, "click", L);
              x && (A = f.naturalWidth + "px", Sa(f, "width", A));
              hb(n, "js-pica-thumbnail");
              for (a = n; a = Na(a);) {
                if (Wa(a, "caption")) {
                  hb(a, "js-captioned-thumbnail");
                  var c = a;
                  var k = Ic(c);
                  break;
                }
              }
              R.push({u:n, L:c, S:k, Z:f.src, $:A, N:S, F:f, M:E ? 0 < S.indexOf("/img/a/") ? 2 : 3 : 0 < S.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      ob(function(f, n) {
        for (f = -1; n = R[++f];) {
          Ha(n.u, g, Q), Ha(n.F, "click", Q), Ha(n.u, "click", L);
        }
      });
    }
    var z = ["jsSidebarFixer1", "jsSidebarFixer2"], D = !(9 > y || I || 1 <= T && 1.3 > T || yc), O = !(5 > za || 2.2 > Ua || 6 > Y(12) || Da(30) && 534 > ta || Da(32) || 7 > y || 9 > I || 1 > T), ea = O || 6 === y || 1 > T, sa = 7.5 > I, fa, va, l, e = Uc && rc, w = 0, r = 0, u, p, M, q;
    Nc || nc || (sb(function(f) {
      if (f) {
        if (!kb) {
          return !0;
        }
        f = -1;
        var n;
        fa = mb("jsSide");
        va = kb;
        if (!fa) {
          return !0;
        }
        rb(N);
        cc(N);
        l = Kb($b(fa), "div", {id:"jsSidebarFixer"});
        for (ec(l, ca); 1 < $a(fa).length;) {
          l.appendChild($a(fa)[1]);
        }
        for (; n = z[++f];) {
          Kc(mb(n), da);
        }
        y || Ta || 2 > Aa || (u = Ma.perspective !== v || Ma.MozPerspective !== v || Ma["-webkit-perspective"] !== v);
        N();
        return !0;
      }
    }), ob(function() {
      for (var f = -1, n; n = z[++f];) {
        Lc(mb(n), da);
      }
      Jc(l, ca);
    }));
    Oa(function() {
      function f(c, k, h, G) {
        var W = G ? "div" : "cite";
        if (0 === k.indexOf("urn:isbn:")) {
          k = k.substr(9).toUpperCase().split("-").join("");
          if (13 === k.length) {
            k = k.toString().slice(3, -1);
            for (var ba = 0, ra = 0; 9 > ra; ra++) {
              ba += (k.charAt(ra) - 0) * (10 - ra);
            }
            ba = (11 - ba % 11) % 11;
            ba = 10 === ba ? "X" : ba.toString();
            k += ba;
          }
          10 === k.length && (k = "//www.amazon.co.jp/exec/obidos/ASIN/" + k + "/itozyun-22/ref=nosim/");
        }
        h = G ? Kb($b(A), W, {className:h}) : Ga(A, W, {className:h});
        Ga(h, "a", 0 === k.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:k} : {href:k}, c);
      }
      if (kb) {
        for (var n = fb(kb, "blockquote"), A, E = -1, S, a; A = n[++E];) {
          S = Ea(A, "title"), a = Ea(A, "cite"), S && a ? (Va(A, "title"), f(S, a, "js-generated-link-in-blockquote", !0)) : a && (Va(A, "cite"), f(X.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var U, t, C, J, ha, oa, Ca;
    Oa(function() {
      var f = mb("blog2slide-start");
      if (f) {
        var n = K.onfullscreenchange !== v ? "f" : K.onmozfullscreenchange !== v ? "mozF" : K.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        U = f.requestFullscreen || f.webkitRequestFullscreen || f.mozRequestFullscreen || f.msRequestFullscreen;
        0 !== n || U ? (f.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', na(f.firstChild, "click", aa), f = Na(f), t = Na(f), ha = fb(f, "section"), C = K.createElement("h1"), C.innerHTML = fb(xa, "h1")[0].innerHTML, Ca = ha.length, ha.splice(0, 0, C), 0 !== n ? na(K, n + "ullscreenchange", pa) : y ? na(K, "MSFullscreenChange", pa, !1) : cc(pa)) : Ba(f);
      }
    });
  })();
  var wb, Pb = !lc || .9 > T || 8 > I || 5.5 > y, bb;
  (function() {
    function Q(l) {
      return l === "" + l;
    }
    function L(l, e) {
      return Pb ? new H(l, e) : new lc(l, e);
    }
    function N(l, e, w, r) {
      if (V() - ka < m && !r) {
        return l(e);
      }
      Z(ia, {U:l, Y:e});
    }
    function ia(l) {
      ka = V();
      l.U(l.Y);
    }
    function da(l, e) {
      l && wb[l] || (l = B.test(e) ? "default-markup" : "default-code");
      var w = !!wb[l];
      w && N(x, l, 0, !0);
      return w;
    }
    function ca() {
      function l(f, n, A) {
        n && (e.h = e.h || [], e.h.push({l:e, B:e.B, O:1, s:M, D:f, o:n, m:A, R:{}, v:0}));
      }
      var e = ja, w = e.m, r = w[0], u = w[2], p = e.D, M = e.s, q = e.aa.shift(), U = e.R;
      if (q) {
        var t = U[q], C;
        if (!(0 <= t)) {
          if (C = r[q.charAt(0)]) {
            var J = q.match(C[1]);
            t = C[0];
          } else {
            for (t = 0, r = -1; C = u[++r];) {
              if (J = q.match(C[1])) {
                t = C[0];
                break;
              }
            }
          }
          !(C = Q(t)) || J && Q(J[1]) || (C = !1, t = 11);
          C || (U[q] = t);
        }
        u = e.v;
        U = q.length;
        e.v += U;
        if (C) {
          C = J[1];
          r = q.indexOf(C);
          var ha = C.length, oa = r + ha;
          J[2] && (oa = U - J[2].length, r = oa - ha);
          l(p + u, q.substr(0, r), w);
          if (ha && da(t, C)) {
            l(p + u + r, C);
            var Ca = !0;
          }
          l(p + u + oa, q.substr(oa), w);
          e.h && e.h.length && (ja = e.h.shift());
          Ca || (ja !== e ? N(R, v, 2) : N(ca, v, 2));
        } else {
          M.push(p + u, t), N(ca, v, 2);
        }
      } else {
        e.l ? (ja = e.l.h.shift()) ? N(R, v, 2) : (ja = e.l, N(ca, v, 2)) : N(O, v, 2);
      }
    }
    function aa(l) {
      if (g.length) {
        var e = g.shift(), w = qa[e];
        if (w.pop) {
          qa[e] = L(w[0], w[1]);
        } else if (Q(w)) {
          qa[e] = L(w);
        } else {
          return aa(l);
        }
        N(aa, l, 1);
      } else {
        N(x, l);
      }
    }
    function pa(l) {
      for (var e, w = l.firstChild; w; w = w.nextSibling) {
        var r = w.nodeType;
        e = 1 === r ? e ? l : w : 3 === r ? F.test(w.nodeValue) ? l : e : e;
      }
      return e === l ? v : e;
    }
    wb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var la = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], ya = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
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
    ma = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), V = Cb.now || function() {
      return +new Cb();
    }, H, ka, ja, b, d, m = 5 > y ? 60 : 5.5 > y ? 0 : Pb ? 20 : 10, B, F;
    bb = [function(l) {
      X.RegExpCompat = H = l;
    }, function() {
      B = L("^\\s*<");
      F = L("\\S");
    }];
    Pb || (bb[1](), bb = v);
    var P = function() {
      var l = ja, e = l.W, w = z(l.B, l.O), r = l.o = w.o;
      l.I = w.I;
      da(e, r) || (ja = v, N(va, v, 0, !0));
    };
    var R = function() {
      var l = ja;
      l.aa = l.o.match(l.m[1]) || [];
      l.s.push(l.D, 0);
      N(ca, v, 2);
    };
    var g = [];
    var x = function(l) {
      function e(t) {
        var C = t;
        0 <= t && (C = ya[t]);
        0 <= C[1] && (C[1] = w(C[1]));
        return C;
      }
      function w(t) {
        var C = t;
        return 0 <= t && (C = qa[t], !C.exec) ? (g.push(t), t) : C;
      }
      var r = ja, u = wb[l];
      Q(u) && (u = wb[l] = wb[u]);
      var p = u[0];
      if (0 <= p) {
        p = la[p];
        if (0 <= p["-num"]) {
          var M = p["-num"];
          delete p["-num"];
          for (var q = -1; 9 > q;) {
            p["" + ++q] = M;
          }
        }
        u[0] = p;
      }
      for (var U in p) {
        p[U] = e(p[U]);
      }
      u[1] = w(u[1]);
      p = u[2];
      q = 0;
      for (M = p.length; q < M; ++q) {
        p[q] = e(p[q]);
      }
      g.length ? N(aa, l, 2) : (r.m ? r.l && (r.l.h[0].m = u) : r.m = u, N(R, v, 1));
    };
    var z = function(l, e) {
      function w(U) {
        var t = U.nodeType;
        if (1 === t) {
          if (!Wa(U, "nocode")) {
            for (t = U.firstChild; t; t = t.nextSibling) {
              w(t);
            }
            t = La(U);
            if ("BR" === t || "LI" === t) {
              r[M] = "\n", p[M << 1] = u++, p[M++ << 1 | 1] = U;
            }
          }
        } else if (3 === t || 4 === t) {
          if (t = U.nodeValue) {
            t = e ? t.split("\r\n").join("\n").split("\r").join("\n") : t.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), r[M] = t, p[M << 1] = u, u += t.length, p[M++ << 1 | 1] = U;
          }
        }
      }
      var r = [], u = 0, p = [], M = 0;
      w(l);
      var q = r.join("");
      "\n" === q.charAt(q.length - 1) && (q = q.substr(0, q.length - 1));
      return {o:q, I:p};
    };
    var D = function(l, e, w) {
      function r(t) {
        var C = t.nodeType;
        if (1 === C && !Wa(t, "nocode")) {
          if ("BR" === La(t)) {
            u(t), t.parentNode && Ba(t);
          } else {
            for (t = t.firstChild; t; t = t.nextSibling) {
              r(t);
            }
          }
        } else if ((3 === C || 4 === C) && w) {
          var J = t.nodeValue, ha = J.indexOf("\r\n"), oa = 2;
          -1 === ha && (ha = J.indexOf("\n"), oa = 1);
          -1 === ha && (ha = J.indexOf("\r"));
          -1 !== ha && (C = J.substr(0, ha), t.nodeValue = C, (J = J.substr(ha + oa)) && ac(t, J), u(t), C || Ba(t));
        }
      }
      function u(t) {
        function C(ha, oa) {
          var Ca = oa ? ha.cloneNode(!1) : ha, f = ha.parentNode;
          if (f) {
            f = C(f, 1);
            var n = ha.nextSibling;
            f.appendChild(Ca);
            for (var A = n; A; A = n) {
              n = A.nextSibling, f.appendChild(A);
            }
          }
          return Ca;
        }
        for (; !t.nextSibling;) {
          if (t = t.parentNode, !t) {
            return;
          }
        }
        t = C(t.nextSibling, 0);
        for (var J; (J = t.parentNode) && 1 === J.nodeType;) {
          t = J;
        }
        M.push(t);
      }
      for (var p = K.createElement("li"); l.firstChild;) {
        p.appendChild(l.firstChild);
      }
      for (var M = [p], q = 0; q < M.length; ++q) {
        r(M[q]);
      }
      if (e === (e | 0)) {
        if (10 <= e && 7.2 > I) {
          var U = K.createElement("ol");
          U.innerHTML = '<li value="' + e + '">' + p.innerHTML + "</li>";
          M[0] = U.firstChild;
        } else {
          ab(p, "value", e);
        }
      }
      U = Ga(l, "ol", {className:"linenums"});
      l = Math.max(0, e - 1 | 0) || 0;
      q = 0;
      for (e = M.length; q < e; ++q) {
        p = M[q], Lb(p, "L" + (q + l) % 10), p.firstChild || Fc(p, "\u00a0"), U.appendChild(p);
      }
    };
    var O = function() {
      var l = ja, e = l.o, w = e.length, r = 0, u = l.I, p = u.length, M = 0, q = l.s, U = q.length, t = 0;
      q[U] = w;
      var C, J;
      for (J = C = 0; J < U;) {
        q[J] !== q[J + 2] ? (q[C++] = q[J++], q[C++] = q[J++]) : J += 2;
      }
      U = C;
      for (J = C = 0; J < U;) {
        var ha = q[J], oa = q[J + 1];
        for (J += 2; J + 2 <= U && q[J + 1] === oa;) {
          J += 2;
        }
        q[C++] = ha;
        q[C++] = oa;
      }
      q.length = C;
      l = l.B;
      U = "";
      l && (U = l.style.display, Sa(l, "display", "none"));
      for (; M < p;) {
        C = u[M + 2] || w;
        ha = q[t + 2] || w;
        J = Math.min(C, ha);
        oa = u[M + 1];
        var Ca;
        if (1 !== oa.nodeType && (Ca = e.substring(r, J))) {
          9 > y && (Ca = Ca.split("\n").join("\r"));
          var f = Kb(oa, "span", {className:ma[q[t + 1]]}, Ca);
          Ba(oa);
          r < C && (u[M + 1] = ac(f, e.substring(J, C)));
        }
        r = J;
        r >= C && (M += 2);
        r >= ha && (t += 2);
      }
      l && Sa(l, "display", U);
      ja = v;
      N(va, v, 3, !0);
    };
    var ea = [], sa;
    sb(function(l) {
      if (l) {
        l = [nb("pre"), nb("code"), nb("xmp")];
        for (var e = 0; e < l.length; ++e) {
          for (var w = 0, r = l[e].length; w < r; ++w) {
            fa(l[e][w]);
          }
        }
        return !0;
      }
    });
    var fa = function(l) {
      ea.push(l);
      sa = ea.length;
      1 === sa && (kc ? Z(kc, va) : bb ? bb.push(function() {
        Z(va);
      }) : Z(va));
    };
    var va = function() {
      function l(M, q) {
        return (M.split(q)[1] || "").split(" ")[0];
      }
      if (!ja) {
        sa !== ea.length && d && d(sa - ea.length, sa);
        var e = ea.shift();
        if (e) {
          if (Wa(e, "prettyprint") && !Wa(e, "prettyprinted")) {
            for (var w = !1, r = e.parentNode; r !== xa; r = r.parentNode) {
              var u = La(r);
              if (("PRE" === u || "XMP" === u || "CODE" === u) && Wa(r, "prettyprint")) {
                w = !0;
                break;
              }
            }
            if (!w) {
              w = e.className;
              hb(e, "prettyprinted");
              r = !1;
              if (!r) {
                r = l(w, "lang-") || l(w, "language-");
                var p;
                !r && (p = pa(e)) && "CODE" === La(p) && (r = l(p.className, "lang-") || l(p.className, "language-"));
              }
              u = La(e);
              "PRE" === u || "XMP" === u ? u = 1 : (u = e.currentStyle, p = K.defaultView, u = (u = u ? u.whiteSpace : p && p.getComputedStyle ? p.getComputedStyle(e, null).getPropertyValue("white-space") : 0) && "pre" === u.substr(0, 3));
              p = !1;
              (p = "true" === p || +p) || (p = l(w, "linenums:") || Wa(e, "linenums"), p = p.length ? +p : p);
              p && D(e, p, u);
              ja = {W:r, B:e, ba:p, O:u, D:0, v:0, R:{}, s:[]};
              N(P);
              return;
            }
          }
          N(va, v, 0, !0);
        } else {
          b && b();
        }
      }
    };
    X.PR = {RegExpProxy:L, prettifyElement:fa, registerCompleteHandler:function(l, e) {
      b = l;
      d = e;
    }};
  })();
  var jc = K.scripts || nb("script");
  var wa = jc[jc.length - 1].src.split("/");
  --wa.length;
  "js" === wa[wa.length - 1] && --wa.length;
  (wa = wa.join("/")) && (wa += "/");
  var Nc = Sc || "1" === Ea(xa, "mob");
  Fb = (Nc ? "mb" : "pc") + "/";
  6.1 > za && (rb ? rb(Yb) : na(X, "scroll", Yb));
  ob(Ac);
  6.1 > za && (rb ? rb(Zb) : na(X, "scroll", Zb));
  ob(Bc);
  10 > y && (11 !== Qc || 5 !== y) || (9 > I || 1 > T || !lb && !X.addEventListener ? K.write('<link href="' + wa + "css/" + Fb + Wb + '" rel="stylesheet"' + (8 > I ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > I || 1.5 > T || 534 > ta || 5 > za || 7 > Aa || 3 > Ua) && Oa(function() {
    Ga(db, "link", {href:wa + "css/" + Fb + Wb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Pb) {
    if (Gb) {
      var kc = function(Q) {
        X.RegExpCompat = bz;
        kc = v;
        Hb(wa + "js/regexpcompat.js");
        function bz(L) {
          for (var N; N = bb.shift();) {
            N(L);
          }
          bb = v;
          Z(Q);
          Ib(wa + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      X.RegExpCompat = function(Q) {
        for (var L; L = bb.shift();) {
          L(Q);
        }
        bb = v;
        Ib(wa + "js/regexpcompat.js");
      }, Hb(wa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

