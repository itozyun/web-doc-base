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
(function(Ja, V, cb, lc, J, Qb, Oc, Cb, Ya, Rb, Sb, mc, Tb, x) {
  function W(N) {
    if (Ja[0] === N) {
      return Ka === Ka + "" ? Ya(Ka) : Ka;
    }
  }
  function Da(N) {
    var K = Ja[3];
    if (Ja[2] === N) {
      return K === K + "" ? Ya(K) : K;
    }
  }
  function Ub() {
    return 6 > z ? wa.scrollTop : z ? jb.scrollTop : V.pageYOffset;
  }
  var wa = J.body, Ma = wa.style, jb, db, kb, Ka = Ja[1], z = W(2) || W(3), lb = W(7), Ta = W(5) || W(6), H = W(8) || W(9), P = W(11) || W(12), xb = P && 0 <= Ja.conpare(Ka, "1.9.1"), Db = W(13), sa = W(15), ya = W(16) || W(17), nc = W(10) || W(25), za = W(20) || W(22), oc = W(23), Ua = W(21), Eb = W(24), Pc = za || oc || Ua || Eb, pc = za && Ya(Qb.userAgent.split("Edg/")[1]), Qc = Ya(Qb.appVersion.split("Trident/")[1]) + 4, Vb = Da(35) || Da(36) || Da(37), Rc = 0 <= Qb.userAgent.indexOf("Googlebot/"), 
  Za = 0.9 > P, Wb = (lb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : 7.2 > H ? "opr70" : 8 > H ? "opr72" : 9.5 > H ? "opr" + (H | 0) : P && !xb ? 1.4 <= P ? "gck19" : 1.3 <= P ? "gck13" : 1 <= P ? "gck12" : Za ? 0.8 <= P ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Fb = "", Sc = Da(1) || Da(2) || Da(3) || Da(4) || Da(8) || Da(9) || Da(10), qc, eb = 8 > z || 7.2 > H ? !1 : x, rc = Ma.transform !== x ? "transform" : Ma["-o-transform"] !== x ? "-o-transform" : 
  Ma["-ms-transform"] !== x ? "-ms-transform" : Ma.MozTransform !== x ? "-moz-transform" : Ma["-webkit-transform"] !== x ? "-webkit-transform" : "", Pa = [], sc = [], Qa = [], Xb, tc, uc, vc, Gb, wc, xc, Hb, Ib, yc = !1, Tc = 525 > sa || 3.2 > ya || 2.2 > Ua || 10 > H || P && !xb || W(25) || 10 > W(3) || Da(32) || Da(30) || Da(3), Y, pb, Jb, zc, Uc = !!wa.getBoundingClientRect, Yb, Ac, Zb, Bc, Ra = Cb.now || function() {
    return +new Cb();
  };
  (function() {
    function N() {
      for (var S, G = 0, ja = Ra(); G < ka.length;) {
        ja < ka[0].t ? ++G : (S = ka.splice(G, 1)[0], S.f(S.p));
      }
      la = ka.length ? Sb(N, xa) : 0;
    }
    function K() {
      for (var S, G = 0; G < ca.length; ++G) {
        S = ca[G], S.f();
      }
    }
    function M() {
      oa && (oa = clearInterval(oa));
    }
    function ha() {
      la && (la = mc(la));
    }
    Jb = function(S) {
      ca.length || (oa = Tb(K, ba));
      ca.push({f:S, C:++Z});
      return Z;
    };
    zc = function(S) {
      for (var G = ca.length, ja; ja = ca[--G];) {
        if (ja.C === S) {
          ca.splice(G, 1);
          ca[0] || M();
          break;
        }
      }
      return 0;
    };
    Yb = function() {
      oa && (M(), oa = Tb(K, ba));
    };
    Ac = M;
    var ca = [], ba = 500, Z = 0, oa;
    if (5 > z || lb) {
      V._wdb_onlooptimer = K, K = "_wdb_onlooptimer()";
    }
    Y = function(S, G, ja) {
      ka.length || (la = Sb(N, xa));
      ka.push({f:S, p:G, C:++pa, t:Ra() + (xa < ja ? ja : xa)});
      return pa;
    };
    pb = function(S) {
      for (var G = ka.length, ja; ja = ka[--G];) {
        if (ja.C === S) {
          ka.splice(G, 1);
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      la && (ha(), la = Sb(N, xa));
    };
    Bc = ha;
    var ka = [], xa = 16, pa = 0, la;
    if (5 > z || lb) {
      V._wdb_ontimer = N, N = "_wdb_ontimer()";
    }
  })();
  var mb, nb, Cc, fb, Dc, Na, $a, Ec, $b, Ga, Kb, Fc, ac, Aa, gb, Gc, La, Ea, ab, Va, qb, Hc, Lb, Wa, hb, bc, Sa, yb, Ic;
  (function() {
    function N(b, e, m) {
      var C = ["<", b], c = 1, p, r;
      if (e) {
        for (p in e) {
          var A = e[p];
          if (null != A && "" !== A) {
            if ("style" === p) {
              C[++c] = ' style="';
              for (r in A) {
                for (var T = ++c, X, Q = [], da = r.split(""), qa = da.length; qa;) {
                  X = da[--qa], "A" <= X && "Z" >= X && (X = "-" + X.toLowerCase()), Q[qa] = X;
                }
                C[T] = Q.join("") + ":" + A[r] + ";";
              }
              C[++c] = '"';
            } else {
              "className" === p && (p = "class"), C[++c] = " " + p + '="' + A + '"';
            }
          }
        }
      }
      C[++c] = ">";
      null != m && (G && "font" !== b ? C[++c] = "<font>" + K(m) + "</font>" : C[++c] = K(m));
      C[++c] = "</" + b + ">";
      return C.join("");
    }
    function K(b) {
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
    function ha(b) {
      return ca(J, b);
    }
    function ca(b, e) {
      var m = "*" === e;
      m = G ? m ? b.all : b.all.tags(e.toUpperCase()) : 6 > z && m ? b.all : b.getElementsByTagName(e);
      for (var C = [], c = 0, p = m.length; c < p; ++c) {
        C[c] = m[c];
      }
      return C;
    }
    function ba(b, e) {
      var m = [], C = 0, c, p = -1;
      if (9 > z || !b.getElementsByClassName) {
        var r = 6 > z ? b.all : b.getElementsByTagName("*");
      } else {
        var A = !0;
        r = b.getElementsByClassName(e);
      }
      for (c = r.length; C < c; ++C) {
        var T = r[C];
        if (A || (G || 1 === T.nodeType) && pa(T, e)) {
          m[++p] = T;
        }
      }
      return m;
    }
    function Z(b) {
      return G ? b.parentElement : b.parentNode;
    }
    function oa(b, e, m, C, c, p) {
      if (G) {
        var r = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var A = $a(2 > b ? Na(e) : e);
        A = 2 > b ? A.indexOf(e) + b : A.length;
        e.insertAdjacentHTML(r, N(m, C, c));
        e = $a(e)[A];
        null != c && ("font" === m ? e.nodeType = 3 : e.children[0].nodeType = 3);
      } else if (ja) {
        e = J.createElement(N(m, C));
      } else {
        e = p ? J.createElementNS("http://www.w3.org/2000/svg", m) : J.createElement(m);
        if (C) {
          for (r in C) {
            if ((b = C[r]) || 0 === b) {
              switch(r) {
                case "class":
                case "className":
                  Lb(e, b);
                  break;
                case "style":
                  p = e.style;
                  for (A in b) {
                    p[A] = b[A];
                  }
                  break;
                default:
                  ab(e, r, b);
              }
            }
          }
          !H || "a" !== m && "A" !== m || !C.href || C["tag-index"] || C.tagIndex || ab(e, "tagIndex", "-0");
        }
        ia || null != c && ka(e, c);
      }
      return e;
    }
    function ka(b, e) {
      if (G) {
        return oa(2, b, "font", x, e);
      }
      var m = J.createTextNode("" + e);
      b.appendChild(m);
      return m;
    }
    function xa(b, e) {
      9 > z ? b.className = e : b.setAttribute("class", e);
    }
    function pa(b, e) {
      return -1 !== (" " + b.className + " ").indexOf(" " + e + " ");
    }
    function la(b, e, m) {
      if (8 > H || 5.5 > z) {
        e = M(e);
      }
      b.style[e] = m;
    }
    function S(b) {
      return 5.5 > z ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var G = 5 > z;
    jb = ha("html")[0];
    db = ha("head")[0];
    mb = function(b) {
      return V[b] || J[b] || J.getElementById(b);
    };
    nb = ha;
    Cc = function(b) {
      return ba(J, b);
    };
    fb = ca;
    Dc = ba;
    Na = Z;
    $a = function(b) {
      b = G ? b.children : b.childNodes;
      for (var e = [], m = b.length; m;) {
        e[--m] = b[m];
      }
      return e;
    };
    Ec = function(b) {
      var e = !(7.03 < H && 7.2 > H) && b.children;
      b = e ? e : b.childNodes;
      for (var m = [], C = b.length, c = -1, p; C;) {
        if (p = b[--C], e || 1 === p.nodeType) {
          G && "FONT" === p.tagName || (m[++c] = p);
        }
      }
      return m;
    };
    $b = function(b) {
      return G ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Ga = function(b, e, m, C, c) {
      e = oa(2, b, e, m, C, c);
      G || (b.appendChild(e), ia && null != C && ka(e, C));
      return e;
    };
    Kb = function(b, e, m, C, c) {
      e = oa(0, b, e, m, C, c);
      G || (Z(b).insertBefore(e, b), ia && null != C && ka(e, C));
      return e;
    };
    Fc = ka;
    ac = function(b, e) {
      var m;
      if (G) {
        return oa(1, b, "font", x, e);
      }
      var C = J.createTextNode("" + e);
      (m = b.nextSibling) ? Na(b).insertBefore(C, m) : Na(b).appendChild(C);
      return C;
    };
    Aa = function(b) {
      G ? b.outerHTML = "" : (5.5 > z && (b.style.filter = ""), Na(b).removeChild(b));
    };
    gb = function(b, e) {
      if (b.contains) {
        return b.contains(e);
      }
      for (; e && e !== jb;) {
        if (e = Na(e), b === e) {
          return !0;
        }
      }
    };
    Gc = function(b) {
      return G ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ja = 9 > z, ia = ja;
    La = function(b) {
      return b.tagName.toUpperCase();
    };
    Ea = function(b, e) {
      if (8 > H || 5.5 > z) {
        e = M(e);
      }
      var m = b.getAttribute(e);
      return H && "tabIndex" === e ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    ab = function(b, e, m) {
      if (H && "tab-index" === e) {
        "-1" === m ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", m);
      } else {
        if (8 > H || 5.5 > z) {
          e = M(e);
        }
        b.setAttribute(e, m);
      }
    };
    Va = function(b, e) {
      if (H && "tab-index" === e) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > H || 5.5 > z) {
          e = M(e);
        }
        b.removeAttribute(e);
      }
    };
    qb = function(b, e) {
      if (H && "tab-index" === e) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > H || 5.5 > z) {
        e = M(e);
      }
      return b.hasAttribute ? b.hasAttribute(e) : null != b.getAttribute(e);
    };
    Hc = function(b) {
      return b.className;
    };
    Lb = xa;
    Wa = pa;
    hb = function(b, e) {
      var m;
      if (!pa(b, e)) {
        if (m = b.className) {
          m += " ";
        }
        xa(b, m + e);
      }
    };
    bc = function(b, e) {
      if (pa(b, e)) {
        var m = b.className.split(" ");
        m.splice(m.indexOf(e), 1);
        xa(b, m.join(" "));
      }
    };
    Sa = la;
    yb = function(b, e) {
      var m, C = -1, c;
      if (5.5 > z) {
        if (m = S(b)) {
          for (m = m.split(";"); c = m[++C];) {
            la(b, c.split(":")[0], "");
          }
        }
        if (e) {
          for (C = -1, m = e.split(";"); c = m[++C];) {
            var p = c.split(":")[0];
            la(b, p, c.substr(p.length + 1));
          }
        }
      } else if (7.1 > H) {
        if (b.setAttribute("style", ""), e) {
          for (m = e.split(";"); c = m[++C];) {
            c = c.split(":"), la(b, c[0], c[1]);
          }
        }
      } else {
        9 > H || 1 > P ? e ? b.setAttribute("style", e) : b.removeAttribute("style") : b.style.cssText = e;
      }
    };
    Ic = S;
    Pa.splice(0, 0, function() {
      function b(T) {
        T = $a(T);
        for (var X = T.length, Q, da, qa; X;) {
          if (Q = T[--X], da = Q.nodeType, 8 === da) {
            e && r.push(Q);
          } else if (1 === da) {
            switch(da = La(Q), "/" === da.charAt(0) && (da = da.substr(1), A[da] = !0), da) {
              case "STYLE":
                if (7.2 <= H && 9 > H) {
                  break;
                }
              case "LINK":
                G || C || gb(db, Q) || p.push(Q);
                break;
              case "META":
                da = Ea(Q, "name") || Ea(Q, "property");
                for (qa = c.length; qa;) {
                  if (0 === da.indexOf(c[--qa])) {
                    r.push(Q);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Rc || qb(Q, "async")) {
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
                r.push(Q);
                break;
              case "SOURCE":
                V.HTMLSourceElement || r.push(Q);
                break;
              default:
                A[da] ? r.push(Q) : $a(Q).length && b(Q);
            }
          }
        }
        for (; p[0];) {
          db.appendChild(p.pop());
        }
        for (; r[0];) {
          Aa(r.pop());
        }
      }
      bc(jb, "nojs");
      kb = mb("jsMain");
      var e = !(8 > H || 5 > z || lb || Za), m = vc, C = 7 > z, c = ["og:", "twitter:", "fb:"], p = [], r = [], A = {};
      b(jb);
    });
  })();
  var ma, Ha, Oa, ob, cc, rb, sb, zb, dc, ec, Jc, Kc, Lc, Ab, Ia, fc;
  (function() {
    function N() {
      return u ? q ? 2 : w ? 3 : 1 : 0;
    }
    function K(a) {
      Ha(V, "load", K);
      K = x;
      ha(Pa, a, !0);
      Oa = Pa = x;
    }
    function M(a, d) {
      sb(function() {
        var k = la(a);
        d(k);
        k.addListener(d);
        return !0;
      });
    }
    function ha(a, d, k) {
      for (var h = 0; h < a.length; ++h) {
        !0 === a[h](d) && (a.splice(h, 1), --h);
      }
      k && (a.length = 0);
    }
    function ca(a, d, k) {
      Pa || G.length || Y(ba);
      G.push(a, d, k);
    }
    function ba() {
      var a = G, d;
      for (G = []; d = a.shift();) {
        ha(d, a.shift(), a.shift());
      }
    }
    function Z(a) {
      var d = a || event;
      a = ia[d.type];
      var k = -1, h, F;
      5 > z ? d = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : z ? (d.target = d.srcElement, d.preventDefault = function() {
        d.returnValue = !1;
      }, d.stopPropagation = function() {
        d.cancelBubble = !0;
      }) : e && (d.K = d.stopPropagation, d.stopPropagation = function() {
        F = !0;
      });
      for (; h = a[++k];) {
        h.j === this ? (this.g = h.i, z && (d.currentTarget = this), this.g(d), z ? (this.g = cb, this.g = x) : delete this.g) : 7.2 > H && this === J && h.j === V && (V.g = h.i, V.g(d), delete V.g);
      }
      if (z) {
        return d.preventDefault = d.stopPropagation = cb, d.preventDefault = d.stopPropagation = x, d.returnValue;
      }
      e && (d.defaultPrevented && "click" === d.type && "A" === d.target.tagName && (C = !0), F && !C && d.K(), d.K = d.stopPropagation = x);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function oa() {
      var a = 9 === S.offsetWidth;
      Ab !== a && ca(sc, Ab = a);
    }
    function ka() {
      !Pa && D && (pb(D), D = Y(xa));
    }
    function xa() {
      D = 0;
      ha(v);
    }
    function pa(a) {
      Pa || ha(I, a);
    }
    var la = V.matchMedia, S, G = [];
    Pa.push(function() {
      M = x;
      S = Ga(wa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Oa(function() {
        G.length && Y(ba);
      });
    });
    ma = function(a, d, k, h) {
      if (m) {
        a.addEventListener(d, k, h ? ja ? h : h.capture || !0 === h : !1);
      } else {
        var F = {j:a, i:k};
        h = ia[d];
        var U = "on" + d, aa, ra;
        if (h) {
          for (aa = h.length; ra = h[--aa];) {
            if (ra.j === a && ra.i === k) {
              return;
            }
          }
          ia[d].push(F);
        } else {
          ia[d] = h = [F], b || (d = a[U], "function" === typeof d && d !== Z && h.unshift({j:a, i:d}));
        }
        b ? a.attachEvent(U, Z) : a[U] = Z;
      }
    };
    Ha = function(a, d, k, h) {
      if (m) {
        a.removeEventListener(d, k, h ? ja ? h : h.capture || !0 === h : !1);
      } else {
        h = ia[d];
        d = "on" + d;
        var F, U, aa;
        if (h) {
          for (F = h.length; U = h[--F];) {
            U.j === a && (U.i === k ? h.splice(F, 1) : aa = !0);
          }
          aa || (b ? a.detachEvent(d, Z) : z ? (a[d] = cb, a[d] = null) : delete a[d]);
        }
      }
    };
    var ja = !z && !lb && (new Oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ia = {}, b = !1, e = 525.13 > sa, m = !e && !lb && V.addEventListener, C;
    e && jb.addEventListener("click", function(a) {
      if (C) {
        return C = !1, a.preventDefault(), !1;
      }
    });
    Oa = function(a) {
      Pa.push(a);
    };
    ob = function(a) {
      c && c.push(a);
    };
    var c = [];
    if (419.3 >= sa) {
      var p = function() {
        if (p) {
          var a = J.readyState;
          "loaded" === a || "complete" === a ? (p = x, K()) : Y(p);
        }
      };
      Y(p);
    } else {
      ma(V, "load", K);
    }
    z || !Za && 1.8 > P ? ma(V, "unload", function(a) {
      ha(c, a, !0);
    }) : c = x;
    sb = function(a) {
      sc.push(a);
    };
    Oa(function() {
      oa();
      Jb(oa);
    });
    ec = function(a, d) {
      if (r) {
        ma(a, "focusin", d);
      } else if (A) {
        ma(a, "DOMFocusIn", d);
      } else {
        if (X) {
          Ba || (Ba = Tb(l, 333));
        } else if (T || Q) {
          ma(J, "focus", qa, !0);
        } else {
          return;
        }
        for (var k = da, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === d) {
            return;
          }
        }
        k.push(a, d);
      }
    };
    Jc = function(a, d) {
      if (r) {
        ma(a, "focusin", d);
      } else if (A) {
        ma(a, "DOMFocusIn", d, !1);
      } else {
        for (var k = da, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === d) {
            k.splice(h, 2);
            k.length || (X ? Ba = zc(Ba) : (T || Q) && Ha(J, "focus", qa, !0));
            break;
          }
        }
      }
    };
    var r = 6 <= z || Ta || 52 <= P || 15 <= za || 534 <= sa || 5 <= ya || oc || 4 <= Ua || 4 <= Eb || 11.6 <= W(8) || 12 <= W(9), A = 8 <= H || za || Ua || Eb || sa || ya, T = 8 > H, X = 6 > z, Q = 52 > P || Db;
    if (Q || T) {
      var da = [];
      var qa = function(a) {
        var d = da, k = T ? J.activeElement : a.target;
        if (T) {
          var h = a;
          a = {type:"focusin", target:k, preventDefault:function() {
            h.preventDefault();
          }, stopPropagation:function() {
            h.stopPropagation();
          }};
        }
        for (var F = 0, U = d.length; F < U; ++F) {
          var aa = d[F];
          (aa === k || gb(aa, k)) && d[F + 1].call(aa, a);
        }
      };
    } else if (X) {
      da = [];
      var Ba, ea, va, l = function() {
        va = V.onerror;
        V.onerror = f;
        var a = J.activeElement;
        if (ea !== a) {
          ea = a;
          for (var d = da, k, h = 0, F = d.length; h < F; ++h) {
            k = d[h], (k === a || gb(k, a)) && d[h + 1].apply(k, [{target:a}]);
          }
        }
        V.onerror = va;
        va = x;
      }, f = function() {
        V.onerror = va;
        va = ea = x;
        return !0;
      };
    }
    dc = function(a) {
      Qa && Qa.push(a);
    };
    var y = 60 > P || Db, u, w, q;
    if (89 <= P || 89 <= za || Vb && 79 <= pc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      fc = !0, M("(forced-colors:active)", function(a) {
        u = a.matches;
        Ia = N();
        ca(Qa, Ia);
      });
    } else if (10 <= z || Ta || Vb && pc) {
      fc = !0, M("(-ms-high-contrast:black-on-white)", function(a) {
        u = w = a.matches;
        Ia !== N() && (Ia = N(), ca(Qa, Ia));
      }), M("(-ms-high-contrast:white-on-black)", function(a) {
        u = q = a.matches;
        Ia !== N() && (Ia = N(), ca(Qa, Ia));
      }), M("(-ms-high-contrast:active)", function(a) {
        u = a.matches;
        Ia !== N() && (Ia = N(), ca(Qa, Ia));
      });
    } else if (Vb && (z || P && 0 <= Ja.conpare(Ka, "1.8.1") || Db)) {
      var L = function() {
        function a(h, F) {
          if (F && "transparent" === h) {
            return 382.5;
          }
          if ("#" === h.charAt(0)) {
            return parseInt("0x" + h.substr(1, 2), 16) + parseInt("0x" + h.substr(3, 2), 16) + parseInt("0x" + h.substr(5, 2), 16);
          }
          var U = h.split("(")[1].split(",");
          return Ya(U[0]) + Ya(U[1]) + Ya(U[2]);
        }
        var d = J.defaultView;
        var k = d ? d.getComputedStyle(S, null) : S.currentStyle;
        d = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        d && (u = "#123456" !== d && "rgb(18,52,86)" !== d, w = a(d) < a(k, !0), q = a(d) > a(k, !0), Ia !== N() && (Ia = N(), ca(Qa, Ia, y)));
      };
      sb(function(a) {
        if (a) {
          return Sa(S, "color", "#123456"), Sa(S, "backgroundColor", "#123456"), y ? (L(), Qa = x) : Jb(L), L = x, !0;
        }
      });
    } else {
      Qa = N = x;
    }
    zb = function(a) {
      t.push(a);
    };
    var t = [], R = 7.5 <= H && 8 > H;
    R && function() {
      for (var a = J.images, d = a.length, k; d;) {
        k = a[--d], k.J = k.src, Va(k, "src");
      }
    }();
    Oa(function() {
      function a() {
        h ? (F = k[--h], R && ab(F, "src", F.J), tc(d, R ? F.J : F.src)) : zb = t = x;
      }
      function d(aa) {
        ha(t, {G:F, H:aa}, !h);
        a();
      }
      var k = J.images || nb("img"), h = k.length;
      if (12 > H || 532 > sa) {
        a();
      } else {
        for (; h;) {
          var F = k[--h];
          var U = 9 > z ? F.complete : 0 <= F.naturalWidth ? F.naturalWidth : F.width;
          ca(t, {G:F, H:U}, !h);
        }
        zb = t = x;
      }
    });
    cc = function(a) {
      v.push(a);
    };
    var v = [], D;
    ma(V, "resize", ka);
    ob(function() {
      D && mc(D);
      Ha(V, "resize", ka);
    });
    rb = function(a) {
      I.push(a);
    };
    var I = [], fa = 1 > P || 1.2 <= P && 1.8 > P || 7.2 >= H, na;
    fa ? Jb(function() {
      var a = V.pageYOffset;
      na !== a && (na = a, pa({type:"scroll", cancelable:!1, stopPropagation:cb, preventDefault:cb}));
    }) : ma(V, "scroll", pa, {passive:!0});
    ob(function() {
      fa || Ha(V, "scroll", pa, {passive:!0});
    });
    Kc = function(a, d) {
      if (Ca) {
        ma(a, "wheel", d, {passive:!1});
      } else if (g) {
        ma(a, "mousewheel", d, !1);
      } else if (n) {
        ma(a, "MozMousePixelScroll", d, !1);
      } else if (B) {
        for (var k = E, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === d) {
            return;
          }
        }
        k.length || ma(J, "DOMMouseScroll", O, !1);
        k.push(a, d);
      }
    };
    Lc = function(a, d) {
      if (Ca) {
        Ha(a, "wheel", d, {passive:!1});
      } else if (g) {
        Ha(a, "mousewheel", d, !1);
      } else if (n) {
        Ha(a, "MozMousePixelScroll", d, !1);
      } else if (B) {
        for (var k = E, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === d) {
            k.splice(h, 2);
            k.length || Ha(J, "DOMMouseScroll", O, !1);
            break;
          }
        }
      }
    };
    var Ca = 9 <= z || Ta || 17 <= P || 31 <= za || 537.7 <= sa, g = 6 <= z || Ta || 9 <= H || za || 522 <= sa || ya, n = xb, B = P && 0 <= Ja.conpare(Ka, "0.9.7") && !xb;
    if (B) {
      var E = [], O = function(a) {
        for (var d = E, k = a.target, h, F = 0, U = d.length; F < U; ++F) {
          h = d[F], gb(h, k) && d[F + 1].call(h, a);
        }
      };
    }
  })();
  (function() {
    function N(f) {
      switch(f) {
        case 1:
          return ia;
        case 2:
          return !!b;
        case 3:
          return !!e;
        case 4:
          return !!m;
        case 5:
          return c;
        case 6:
          return C && !xa;
      }
      return !1;
    }
    function K(f) {
      p(f);
      va && !f && Aa(va);
      p = r = A = T = X = Q = Ba = ea = va = l = x;
    }
    function M(f) {
      J.fonts.load('1.6em "' + f + '"').then(function() {
        var y;
        (y = ca(r)) ? Y(K, y) : ha(!0);
      }, function() {
        eb !== x ? ba(eb) : Xb(ba);
      });
    }
    function ha(f) {
      f && (qa = Ra());
      (f = ca(r, da)) ? K(f) : (f = da, J.hidden || J.msHidden || J.mozHidden || J.webkitHidden ? (qa = Ra(), f = !1) : f = f < Ra() - qa, f ? Ba ? Z() : ka ? K(0) : eb !== x ? ba(eb) : Xb(ba) : Y(ha));
    }
    function ca(f) {
      var y = 0, u = -1, w = (G || !1) && [];
      if (!l) {
        var q = -1;
        var L;
        ea = Ga(wa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, S);
        for (l = []; L = ja[++q];) {
          Sa(ea, "fontFamily", L), l[q] = ea.offsetWidth;
        }
      }
      for (5 > z ? ea || (ea = Ga(wa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, S)) : wa.appendChild(ea); q = ja[++u];) {
        Sa(ea, "fontFamily", '"' + f + '",' + q);
        var t = ea.offsetWidth;
        G ? w[u] = t : t !== l[u] && (y = 1);
      }
      if (G && t === w[0] && t === w[1]) {
        for (y = 1, u = -1; 0 <= (t = l[++u]);) {
          if (t === w[0] && t === w[1] && t === w[2]) {
            y = 0;
            break;
          }
        }
      }
      !z && y && X && (ea.textContent = X, t = ea.offsetWidth, ea.textContent = Q, y = t === ea.offsetWidth ? 2 : 1, ea.textContent = S);
      Aa(ea);
      5 > z && (ea = x);
      return y;
    }
    function ba(f) {
      f ? (Ba = !0, da = la, Z()) : K(0);
    }
    function Z() {
      if (A) {
        for (; A.length;) {
          var f = A.shift(), y = A.shift();
          if (N(f)) {
            va = xc(y, oa, T, va);
            return;
          }
        }
      }
      K(0);
    }
    function oa(f) {
      f ? ha(!0) : Z();
    }
    Xb = !1 === eb ? function(f) {
      Y(f, !1);
    } : function(f) {
      function y(q) {
        w && (w = pb(w), eb = q, u.onload = u.onerror = cb, Y(f, q));
      }
      if (eb !== x) {
        Y(f, eb);
      } else {
        var u = new Image(), w = Y(y, !1, 999);
        u.onerror = function() {
          y(!1);
        };
        u.onload = function() {
          y(1 === u.width * u.height);
        };
        u.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > z && Oa(function() {
      var f = Ga(wa, "div");
      yb(f, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      qc = 1 < f.offsetHeight;
      Aa(f);
    });
    tc = function(f, y) {
      function u() {
        q || !L || w.complete ? (Y(f, !!w.width), w.onerror = w.onload = cb, w = f = x) : (--L, Y(u));
      }
      var w = new Image(), q, L = 99;
      w.onerror = function() {
        q = !0;
      };
      w.onload = function() {
        q = !0;
      };
      w.src = y;
      Y(u);
    };
    uc = function(f, y, u, w, q, L, t) {
      p = f;
      r = y;
      A = u;
      T = w;
      X = q;
      Q = L;
      da = t || pa;
      W(10) ? Y(K, 1) : Tc ? Y(K, 0) : !J.fonts || 603 > sa || 11 > ya ? ha(!0) : M(r);
    };
    var ka = 9 > z, xa = 6 > za || H || 530 > sa || 4 > ya, pa = 5E3, la = 500, S = "mmmmmmmmmmlliiiiiiiii", G = 21 > za || 7 > ya || sa && 0 >= Ja.conpare(Ka, "536.11"), ja = ["monospace", "sans-serif", "serif"], ia = 14 <= Ta || 36 <= za || 39 <= P || 602 <= sa || 10 <= ya, b = 6 <= za || P && 0 <= Ja.conpare(Ka, "1.9.2") || 525 <= sa || 3.2 <= ya || 4.4 <= Ua || 11.1 <= H || Ta || 9 <= W(2) || 10 <= W(3), e = 2 <= za || xb || 525 <= sa || 3.2 <= ya || 2.2 <= Ua || 10 <= H || Ta || 9 <= W(2) || 
    10 <= W(3), m = e, C = 525 <= sa || 3.2 <= ya || 38 > za || 3 <= Ua || 11.5 <= H, c = 4 <= W(2) || 10 <= W(3), p, r, A, T, X, Q, da, qa, Ba, ea, va, l;
  })();
  (function() {
    function N(c) {
      var p = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== c) {
        var r = Cc("ico"), A = 0, T = r.length;
        if (T) {
          if (1 === c) {
            for (; A < T; ++A) {
              c = r[A];
              var X = Gc(c);
              if (X = p[X]) {
                c.innerHTML = X;
              }
            }
          } else {
            C && !m && (V.VectorIconCompat = bz, Hb(ta + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Ib(ta + "js/vector-icon-svg-fallback.js");
        return [p, r, Ga, m];
      }
      bz = !1;
    }
    zb(function(c) {
      var p = c.G;
      c = c.H;
      var r = Na(p);
      !Wa(r, "aBodyRoot") && c ? hb(r, "js-image-has-been-loaded") : c || Ea(p, "alt") || "lazy" === Ea(p, "loading") || Sa(p, "display", "none");
    });
    Za && (Pa.splice(1, 0, function() {
      for (var c = Dc(kb, "RichLink-sep"), p, r, A, T, X, Q; p = c.shift();) {
        for (p = $a(p); r = p.shift();) {
          if ("A" === La(r) && !r.innerHTML) {
            for (; A = p.shift();) {
              if (1 === A.nodeType) {
                if ("A" === La(A)) {
                  break;
                }
                for (T = fb(A, "A"); X = T.shift();) {
                  for (Q = $a(X); Q.length;) {
                    X.parentNode.insertBefore(Q.shift(), X);
                  }
                  Aa(X);
                }
              }
              r.appendChild(A);
            }
          }
        }
      }
    }), Pa.splice(2, 0, function() {
      for (var c = nb("A"), p, r; p = c.shift();) {
        "A" !== La(p) || p.innerHTML || (r = p.nextSibling && p.nextSibling.firstChild) && r.href === p.href && Aa(p);
      }
    }));
    5.5 <= z && 8 > z && Qa && dc(function(c) {
      for (var p = fb(wa, "a"), r = p.length, A = 0; A < r; ++A) {
        p[A].hideFocus = !c;
      }
    });
    if (!fc && Qa) {
      var K, M = function() {
        K = Ga(db, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + Fb + "hc/" + Wb});
        (rc || 5.5 <= z && 9 > z && qc) && hb(wa, "js-canuse-css-rotate-when-forced-colors-mode");
        M = x;
      };
      dc(function(c) {
        c && !K ? M() : K && (c ? db.appendChild(K) : Aa(K));
      });
    }
    H && Oa(function() {
      for (var c = fb(wa, "a"), p = c.length, r = 0, A; r < p; ++r) {
        A = c[r], "-1" === Ea(A, "tabIndex") ? Va(A, "tabIndex") : Ea(A, "href") && ab(A, "tabIndex", "0");
      }
      c = fb(wa, "input");
      r = 0;
      for (p = c.length; r < p; ++r) {
        A = c[r], "hidden" === Ea(A, "type") && Va(A, "tabIndex");
      }
    });
    if (P && 0 > Ja.conpare(Ka, "0.9.5")) {
      yc = !0;
      var ha, ca, ba, Z, oa;
      Oa(function() {
        ma(J, "keydown", ka);
        ma(J, "keyup", xa);
        ec(wa, pa);
        Za || (ma(V, "blur", ia), ma(wa, "click", ja));
      });
      var ka = Za ? function(c) {
        16 === c.keyCode ? ha = !0 : 9 === c.keyCode && Z && la(Z, !0) && (Z.blur && Z.blur(), c.stopPropagation(), c.preventDefault(), Y(G));
      } : function(c) {
        16 === c.keyCode ? ha = !0 : 9 === c.keyCode && (ca = Ra());
      }, xa = function(c) {
        16 === c.keyCode && (ha = !1);
      }, pa = Za ? function(c) {
        Z = c.target;
      } : function(c) {
        var p = c.target;
        if (Z === p) {
          ba = x;
        } else if (ba) {
          p === ba ? (c.stopPropagation(), G(!0)) : (p.blur && e(p), c.preventDefault(), G());
        } else {
          if (c = Z) {
            Z = x, e(c);
          }
          ba = p;
          G(!0);
        }
      }, la = function(c, p) {
        var r = Ra(), A = wa, T = "nextSibling", X = "firstChild";
        ha && (p || r - 99 < ca && ca <= r) && (T = "previousSibling", X = "lastChild");
        for (ba = x; c !== A;) {
          if (Q) {
            r = c;
            var Q = !1;
          } else {
            r = c[T];
          }
          if (r) {
            if (1 === r.nodeType) {
              if (S(r)) {
                return ba = r, !0;
              }
              c = (Q = r[X]) || r;
            } else {
              c = r;
            }
          } else {
            c = c.parentNode;
          }
        }
      }, S = function(c, p) {
        function r() {
          return "-1" !== Ea(c, "tab-index");
        }
        function A() {
          return 0 < c.offsetHeight * c.offsetWidth;
        }
        if (c.focus) {
          var T;
          switch({A:p ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[La(c)]) {
            case 1:
              if (qb(c, "href") && r() && A()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ea(c, "type") && r() && !qb(c, "disabled") && A()) {
                return !0;
              }
              break;
            case 3:
              if (r() && !qb(c, "disabled") && A()) {
                return !0;
              }
              break;
            default:
              if ((T = Ea(c, "tab-index")) && "-1" !== T && A()) {
                return !0;
              }
          }
        }
      }, G = function(c) {
        oa = 0;
        ba && (Za || ma(ba, "blur", b), Z = ba, ba = x, c || Z.focus());
      };
      if (!Za) {
        var ja = function(c) {
          var p = c.target;
          if (Z && S(p, !0)) {
            var r = Z;
            Z = x;
            e(r);
            ba = p;
            c.stopPropagation();
            c.preventDefault();
            G();
          }
        }, ia = function(c) {
          c.target === J && (ba = x);
        }, b = function(c) {
          c = c.target;
          Ha(c, "blur", b);
          Z === c && la(c) && (oa || (oa = Y(G)));
        }, e = function(c) {
          Ha(c, "blur", b);
          c.blur();
        };
      }
    }
    sb(function(c) {
      if (c) {
        return uc(N, "myIconFont", [1, ta + "iconfont/woff2.css", 2, ta + "iconfont/woff.css", 4, ta + "iconfont/otf.css", 3, ta + "iconfont/ttf.css", 5, ta + "iconfont/eot.css", 6, ta + "iconfont/svg.css"], "js-myIconFont-testCssReady", "Twitter", "\ud83d\udc24", 5E3), N = x, !0;
      }
    });
    var m = 8 <= W(8) && 9 > H, C = 9 <= z || Ta || 1.8 <= P || 8 <= W(8) || 9 <= W(9) || 3 <= W(21) || Db || Pc || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || ya;
  })();
  (function() {
    function N(g) {
      var n = r.length, B, E, O, a;
      if (13 === (g.keyCode || g.V) || g.type !== A) {
        for (; n;) {
          var d = r[--n];
          if (d.F === this || d.u === this) {
            n = d.F;
            var k = B = d.u;
            if (d.P) {
              if (Sa(n, "width", d.$), n.src = d.Z, Lb(k, d.T), n = d.L) {
                yb(n, d.S), bc(n, "js-captioned-thumbnail__large");
              }
            } else {
              if (E = d.N) {
                delete d.N;
                if (d.M) {
                  for (; B = Na(B);) {
                    if (!Wa(B, "caption")) {
                      var h = La(B);
                      if ("DIV" === h || "P" === h || "BLOCKQUOT" === h || "LI" === h || "DD" === h || "TD" === h || "TH" === h || "FORM" === h || "PRE" === h) {
                        break;
                      }
                    }
                  }
                  B = (B.offsetWidth | 0) - 4;
                  1600 < B && (B = 1600);
                  if (2 === d.M) {
                    E = E.split("=");
                    h = E.length;
                    if (O = E[h - 1]) {
                      (a = Ya(O.substr(1))) && O === "s" + a ? E[h - 1] = "w" + B : E[h] = "w" + B;
                    }
                    E = E.join("=");
                  } else {
                    E = E.split("/");
                    h = E.length;
                    if (O = E[h - 2]) {
                      (a = Ya(O.substr(1))) && O === "s" + a ? E[h - 2] = "w" + B : E.splice(h - 1, 0, "w" + B);
                    }
                    E = E.join("/");
                  }
                }
                d.X = E;
              }
              d.T = Hc(k);
              hb(k, "js-pica-thumbnail__large");
              Sa(n, "width", "");
              n.src = d.X;
              if (n = d.L) {
                yb(n, ""), hb(n, "js-captioned-thumbnail__large");
              }
            }
            d.P = !d.P;
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
      var n = q;
      if (Ab) {
        if (L && !n) {
          if (Ra() < L) {
            return;
          }
          L = x;
        }
        7 === g ? t = 0 : (t && (t = pb(t)), u = Ub());
        n ? (q = ha(x, n[0], n[1])) || (L = Ra() + 99) : ha();
      } else {
        q = x;
      }
    }
    function ha(g, n, B) {
      function E(Xa) {
        k = Xa;
        if (f) {
          h = f + ":translate" + (w ? "3D(0," : "(0,") + Xa + (w ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Xa) {
          if (da || qa) {
            var gc = ea.offsetWidth;
          }
          h = da ? "position:fixed;width:" + gc + "px;top:" + (Xa - O + aa) + "px" : Ba ? "top:" + Xa + "px" : "position:absolute;top:" + Xa + "px;left:0";
          if (qa && h) {
            var Bb = 8 > z ? " " : ",";
            h += ";clip:rect(" + (0 > Xa ? -Xa + "px" + Bb + gc + "px" + Bb + Fa : "0" + Bb + gc + "px" + Bb + (Xa + Fa < Mb ? Fa : Mb - Xa)) + "px" + Bb + "0)";
          }
        }
      }
      var O = u, a = va, d = ea.offsetTop === a.offsetTop, k = 0, h = "", F = !0;
      if (d) {
        for (var U = 0, aa = 0, ra = a; ra && ra !== wa;) {
          aa += ra.offsetTop, ra = ra.offsetParent;
        }
        k = y;
        var hc = 11 > z ? jb.offsetHeight : V.innerHeight, ic = a.offsetHeight, Fa = l.offsetHeight, Mb = Fa < ic ? ic : Fa, ib = O, tb = ib + hc, Nb = aa, Ob = Nb + Mb, Mc = aa + k, Vc = Mc + Fa;
        a = ib < Nb ? Nb : ib;
        ra = Ob < tb ? Ob : tb;
        var ub = ra - a;
        ib = Ob <= ib;
        tb = tb <= Nb;
        if (n !== x) {
          F = aa + n;
          g = F + B;
          var vb;
          if (ib || tb) {
            return hc <= B ? vb = aa : vb = ib ? Ob - B : aa + B - hc, L = x, V.scroll(0, vb), q;
          }
          Fa <= ub ? U = 3 : B <= ub ? Fa - n <= ub ? U = 2 : a <= F && g <= ra ? a < aa + k && (U = 4) : U = a <= F && F <= ra ? 5 : a <= g && g <= ra ? 4 : g < a ? 4 : 5 : U = 4;
          F = !1;
        } else {
          g !== x ? Fa <= ub ? (U = 7, F = !1) : (k -= 60 * g, U = ra - aa - Fa, vb = a - aa, k < U ? k = U : vb < k && (k = vb), U = 6) : ic <= Fa || (ib ? U = 1 : tb || (Fa <= ub ? U = 3 : a < Mc ? U = 3 : Vc < ra ? U = 2 : O < aa + Fa - ub || (U = 2)));
        }
        switch(U) {
          case 0:
            E(0);
            break;
          case 1:
            E(Mb - Fa);
            break;
          case 2:
            E(ra - aa - Fa);
            break;
          case 3:
            E(a - aa);
            break;
          case 4:
            E(a - aa - n);
            break;
          case 5:
            E(ra - aa - (n + B));
          case 6:
            E(k);
        }
      }
      yb(l, h);
      y = k;
      return d && F;
    }
    function ca(g) {
      if (Ab && (P && (u = Ub()), this !== g.target)) {
        var n = Rb(g.deltaY) ? g.deltaY : Rb(g.wheelDeltaY) ? g.wheelDeltaY / 120 : Rb(g.wheelDelta) ? g.wheelDelta / -120 : g.detail / ("MozMousePixelScroll" === g.type ? 45 : 1);
        n && ha(9 >= n ? -9 >= n ? -3 : n : 3) && (g.preventDefault(), g.stopPropagation());
      }
    }
    function ba(g) {
      if (Ab) {
        var n = P && 0 > Ja.conpare(Ka, "0.9.4"), B = g.target;
        g = l;
        var E = 0;
        if (gb(g, B)) {
          if (f) {
            n = B.getBoundingClientRect();
            var O = n.bottom - n.top;
            E = n.top - g.getBoundingClientRect().top | 0;
          } else {
            O = B.offsetHeight;
            var a = B;
            if (n) {
              for (var d = []; a && (P ? gb(g, a) : g !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && d.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = B;
            }
            for (; a && (P ? gb(g, a) : g !== a);) {
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
          Q ? (q = [E, O], t && pb(t), t = Y(M, 7, 1 > P || 536 > sa || 14 > za ? 500 : 0)) : (u = Ub(), ha(x, E, O));
        }
      }
    }
    function Z() {
      R.call(v);
    }
    function oa() {
      J.fullscreenElement || J.fullscreen || J.webkitIsFullscreen || J.msFullscreenElement || V.fullScreen ? (ab(v, "id", "blog2slide-root"), fa[1].parentNode.insertBefore(D, fa[1]), ka(), J.onkeydown = xa) : I && (Aa(D), Va(v, "id"), Va(I, "id"), I = J.onkeydown = x);
    }
    function ka() {
      I && Va(I, "id");
      na = 0 < na ? Ca < na ? Ca : na : 0;
      I = fa[na];
      ab(I, "id", "blog2slide-current");
    }
    function xa(g) {
      if ("ArrowRight" === g.key || 39 === g.keyCode) {
        ++na, ka();
      } else if ("ArrowLeft" === g.key || 37 === g.keyCode) {
        --na, ka();
      }
    }
    xc = function(g, n, B, E) {
      E = E || Ga(db, "link", {type:"text/css", rel:"stylesheet"});
      var O;
      if (e) {
        (O = mb(B)) ? Va(O, "id") : O = Ga(wa, "div", {"aria-hidden":"true", className:B});
        var a = O.offsetWidth;
        ab(O, "id", B);
      }
      b(E, g, n, O, a);
      return E;
    };
    var pa = P && 0 > Ja.conpare(Ka, "0.9.1"), la = 11 <= z || Ta || 9 <= H && 9.5 > H, S = 11 > z, G = 7.2 <= H && 7.5 > H, ja = 9 > P && !pa || 19 > za || 4.3 > Ua || 2 > Eb || 536 > sa || 6 > ya || 7 <= H && 9 > H && !G, ia = !pa && !la && !S && !G && !ja, b = ia ? function(g, n, B) {
      g.onload = bz;
      g.onerror = function() {
        g.onload = g.onerror = null;
        Y(B, !1);
      };
      g.href = n;
      function bz() {
        g.onload = g.onerror = null;
        Y(B, !0);
      }
      bz = !1;
    } : la ? function(g, n, B, E, O) {
      g.onload = function() {
        Y(B, e(E, O));
        Aa(E);
        g.onload = E = null;
      };
      g.href = n;
    } : S ? function(g, n, B, E, O) {
      g.onreadystatechange = function() {
        "complete" === g.readyState && (Y(B, e(E, O)), Aa(E), E = null, g.V = cb);
      };
      g.href = n;
    } : ja || G ? function(g, n, B, E, O) {
      function a() {
        k && (h = pb(h), F = Ra() + 999, Y(d, 0, 99), ja ? k.onerror = null : k.removeEventListener("load", a, !1), k = null);
      }
      function d() {
        e(E, O) ? (Aa(E), E = null, Y(B, !0)) : Ra() < F ? Y(d, 0, 99) : (Aa(E), E = null, Y(B, !1));
      }
      var k = new Image(), h = Y(a, 0, 5E3), F;
      ja ? k.onerror = a : k.addEventListener("load", a, !1);
      k.src = g.href = n;
    } : function(g, n, B) {
      Y(B, !1);
    }, e = !ia && !pa && function(g, n) {
      return g.offsetWidth !== n;
    };
    wc = P && 0 >= Ja.conpare(Ka, "0.9");
    Gb = !(7.2 > H || wc);
    Hb = function(g) {
      m ? J.write('<script src="' + g + '">\x3c/script>') : Pa || c.length ? c.push(g) : p(g);
    };
    Ib = function() {
      m || p(c.shift());
    };
    var m = !Gb, C = Gb && 7.5 > H;
    if (!m) {
      var c = [];
      C && (vc = !0);
      Oa(function() {
        p(c.shift());
      });
      var p = function(g) {
        g && (C ? jc[0].src = g : Ga(db, "script", {src:g}));
      };
    }
    var r = [], A = 5.5 <= z && 8 > z ? "keypress" : "keydown";
    if (!nc) {
      var T = Ma.transition !== x || Ma["-o-transition"] !== x || Ma["-moz-transition"] !== x || Ma["-webkit-transition"] !== x;
      zb(function(g) {
        if (g.H && kb) {
          g = g.G;
          var n = Na(g), B = "", E;
          if ("A" === La(n) && 1 === Ec(n).length) {
            var O = Ea(n, "href");
            var a = O.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((E = 0 < O.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              ma(n, A, N);
              ma(g, "click", N);
              ma(n, "click", K);
              T && (B = g.naturalWidth + "px", Sa(g, "width", B));
              hb(n, "js-pica-thumbnail");
              for (a = n; a = Na(a);) {
                if (Wa(a, "caption")) {
                  hb(a, "js-captioned-thumbnail");
                  var d = a;
                  var k = Ic(d);
                  break;
                }
              }
              r.push({u:n, L:d, S:k, Z:g.src, $:B, N:O, F:g, M:E ? 0 < O.indexOf("/img/a/") ? 2 : 3 : 0 < O.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      ob(function(g, n) {
        for (g = -1; n = r[++g];) {
          Ha(n.u, A, N), Ha(n.F, "click", N), Ha(n.u, "click", K);
        }
      });
    }
    var X = ["jsSidebarFixer1", "jsSidebarFixer2"], Q = !(9 > z || H || 1 <= P && 1.3 > P || yc), da = !(5 > ya || 2.2 > Ua || 6 > W(12) || Da(30) && 534 > sa || Da(32) || 7 > z || 9 > H || 1 > P), qa = da || 6 === z || 1 > P, Ba = 7.5 > H, ea, va, l, f = Uc && rc, y = 0, u = 0, w, q, L, t;
    Nc || nc || (sb(function(g) {
      if (g) {
        if (!kb) {
          return !0;
        }
        g = -1;
        var n;
        ea = mb("jsSide");
        va = kb;
        if (!ea) {
          return !0;
        }
        rb(M);
        cc(M);
        l = Kb($b(ea), "div", {id:"jsSidebarFixer"});
        for (ec(l, ba); 1 < $a(ea).length;) {
          l.appendChild($a(ea)[1]);
        }
        for (; n = X[++g];) {
          Kc(mb(n), ca);
        }
        z || Ta || 2 > za || (w = Ma.perspective !== x || Ma.MozPerspective !== x || Ma["-webkit-perspective"] !== x);
        M();
        return !0;
      }
    }), ob(function() {
      for (var g = -1, n; n = X[++g];) {
        Lc(mb(n), ca);
      }
      Jc(l, ba);
    }));
    Oa(function() {
      function g(d, k, h, F) {
        var U = F ? "div" : "cite";
        if (0 === k.indexOf("urn:isbn:")) {
          k = k.substr(9).toUpperCase().split("-").join("");
          if (13 === k.length) {
            k = k.toString().slice(3, -1);
            for (var aa = 0, ra = 0; 9 > ra; ra++) {
              aa += (k.charAt(ra) - 0) * (10 - ra);
            }
            aa = (11 - aa % 11) % 11;
            aa = 10 === aa ? "X" : aa.toString();
            k += aa;
          }
          10 === k.length && (k = "//www.amazon.co.jp/exec/obidos/ASIN/" + k + "/itozyun-22/ref=nosim/");
        }
        h = F ? Kb($b(B), U, {className:h}) : Ga(B, U, {className:h});
        Ga(h, "a", 0 === k.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:k} : {href:k}, d);
      }
      if (kb) {
        for (var n = fb(kb, "blockquote"), B, E = -1, O, a; B = n[++E];) {
          O = Ea(B, "title"), a = Ea(B, "cite"), O && a ? (Va(B, "title"), g(O, a, "js-generated-link-in-blockquote", !0)) : a && (Va(B, "cite"), g(V.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var R, v, D, I, fa, na, Ca;
    Oa(function() {
      var g = mb("blog2slide-start");
      if (g) {
        var n = J.onfullscreenchange !== x ? "f" : J.onmozfullscreenchange !== x ? "mozF" : J.onwebkitfullscreenchange !== x ? "webkitF" : 0;
        R = g.requestFullscreen || g.webkitRequestFullscreen || g.mozRequestFullscreen || g.msRequestFullscreen;
        0 !== n || R ? (g.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ma(g.firstChild, "click", Z), g = Na(g), v = Na(g), fa = fb(g, "section"), D = J.createElement("h1"), D.innerHTML = fb(wa, "h1")[0].innerHTML, Ca = fa.length, fa.splice(0, 0, D), 0 !== n ? ma(J, n + "ullscreenchange", oa) : z ? ma(J, "MSFullscreenChange", oa, !1) : cc(oa)) : Aa(g);
      }
    });
  })();
  var wb, Pb = !lc || .9 > P || 8 > H || 5.5 > z, bb;
  (function() {
    function N(l) {
      return l === "" + l;
    }
    function K(l, f) {
      return Pb ? new G(l, f) : new lc(l, f);
    }
    function M(l, f, y, u) {
      if (S() - ja < m && !u) {
        return l(f);
      }
      Y(ha, {U:l, Y:f});
    }
    function ha(l) {
      ja = S();
      l.U(l.Y);
    }
    function ca(l, f) {
      l && wb[l] || (l = C.test(f) ? "default-markup" : "default-code");
      var y = !!wb[l];
      y && M(T, l, 0, !0);
      return y;
    }
    function ba() {
      function l(g, n, B) {
        n && (f.h = f.h || [], f.h.push({l:f, B:f.B, O:1, s:L, D:g, o:n, m:B, R:{}, v:0}));
      }
      var f = ia, y = f.m, u = y[0], w = y[2], q = f.D, L = f.s, t = f.aa.shift(), R = f.R;
      if (t) {
        var v = R[t], D;
        if (!(0 <= v)) {
          if (D = u[t.charAt(0)]) {
            var I = t.match(D[1]);
            v = D[0];
          } else {
            for (v = 0, u = -1; D = w[++u];) {
              if (I = t.match(D[1])) {
                v = D[0];
                break;
              }
            }
          }
          !(D = N(v)) || I && N(I[1]) || (D = !1, v = 11);
          D || (R[t] = v);
        }
        w = f.v;
        R = t.length;
        f.v += R;
        if (D) {
          D = I[1];
          u = t.indexOf(D);
          var fa = D.length, na = u + fa;
          I[2] && (na = R - I[2].length, u = na - fa);
          l(q + w, t.substr(0, u), y);
          if (fa && ca(v, D)) {
            l(q + w + u, D);
            var Ca = !0;
          }
          l(q + w + na, t.substr(na), y);
          f.h && f.h.length && (ia = f.h.shift());
          Ca || (ia !== f ? M(r, x, 2) : M(ba, x, 2));
        } else {
          L.push(q + w, v), M(ba, x, 2);
        }
      } else {
        f.l ? (ia = f.l.h.shift()) ? M(r, x, 2) : (ia = f.l, M(ba, x, 2)) : M(da, x, 2);
      }
    }
    function Z(l) {
      if (A.length) {
        var f = A.shift(), y = pa[f];
        if (y.pop) {
          pa[f] = K(y[0], y[1]);
        } else if (N(y)) {
          pa[f] = K(y);
        } else {
          return Z(l);
        }
        M(Z, l, 1);
      } else {
        M(T, l);
      }
    }
    function oa(l) {
      for (var f, y = l.firstChild; y; y = y.nextSibling) {
        var u = y.nodeType;
        f = 1 === u ? f ? l : y : 3 === u ? c.test(y.nodeValue) ? l : f : f;
      }
      return f === l ? x : f;
    }
    wb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ka = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], xa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
    [1, 26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], pa = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), S = Cb.now || function() {
      return +new Cb();
    }, G, ja, ia, b, e, m = 5 > z ? 60 : 5.5 > z ? 0 : Pb ? 20 : 10, C, c;
    bb = [function(l) {
      V.RegExpCompat = G = l;
    }, function() {
      C = K("^\\s*<");
      c = K("\\S");
    }];
    Pb || (bb[1](), bb = x);
    var p = function() {
      var l = ia, f = l.W, y = X(l.B, l.O), u = l.o = y.o;
      l.I = y.I;
      ca(f, u) || (ia = x, M(va, x, 0, !0));
    };
    var r = function() {
      var l = ia;
      l.aa = l.o.match(l.m[1]) || [];
      l.s.push(l.D, 0);
      M(ba, x, 2);
    };
    var A = [];
    var T = function(l) {
      function f(v) {
        var D = v;
        0 <= v && (D = xa[v]);
        0 <= D[1] && (D[1] = y(D[1]));
        return D;
      }
      function y(v) {
        var D = v;
        return 0 <= v && (D = pa[v], !D.exec) ? (A.push(v), v) : D;
      }
      var u = ia, w = wb[l];
      N(w) && (w = wb[l] = wb[w]);
      var q = w[0];
      if (0 <= q) {
        q = ka[q];
        if (0 <= q["-num"]) {
          var L = q["-num"];
          delete q["-num"];
          for (var t = -1; 9 > t;) {
            q["" + ++t] = L;
          }
        }
        w[0] = q;
      }
      for (var R in q) {
        q[R] = f(q[R]);
      }
      w[1] = y(w[1]);
      q = w[2];
      t = 0;
      for (L = q.length; t < L; ++t) {
        q[t] = f(q[t]);
      }
      A.length ? M(Z, l, 2) : (u.m ? u.l && (u.l.h[0].m = w) : u.m = w, M(r, x, 1));
    };
    var X = function(l, f) {
      function y(R) {
        var v = R.nodeType;
        if (1 === v) {
          if (!Wa(R, "nocode")) {
            for (v = R.firstChild; v; v = v.nextSibling) {
              y(v);
            }
            v = La(R);
            if ("BR" === v || "LI" === v) {
              u[L] = "\n", q[L << 1] = w++, q[L++ << 1 | 1] = R;
            }
          }
        } else if (3 === v || 4 === v) {
          if (v = R.nodeValue) {
            v = f ? v.split("\r\n").join("\n").split("\r").join("\n") : v.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), u[L] = v, q[L << 1] = w, w += v.length, q[L++ << 1 | 1] = R;
          }
        }
      }
      var u = [], w = 0, q = [], L = 0;
      y(l);
      var t = u.join("");
      "\n" === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1));
      return {o:t, I:q};
    };
    var Q = function(l, f, y) {
      function u(v) {
        var D = v.nodeType;
        if (1 === D && !Wa(v, "nocode")) {
          if ("BR" === La(v)) {
            w(v), v.parentNode && Aa(v);
          } else {
            for (v = v.firstChild; v; v = v.nextSibling) {
              u(v);
            }
          }
        } else if ((3 === D || 4 === D) && y) {
          var I = v.nodeValue, fa = I.indexOf("\r\n"), na = 2;
          -1 === fa && (fa = I.indexOf("\n"), na = 1);
          -1 === fa && (fa = I.indexOf("\r"));
          -1 !== fa && (D = I.substr(0, fa), v.nodeValue = D, (I = I.substr(fa + na)) && ac(v, I), w(v), D || Aa(v));
        }
      }
      function w(v) {
        function D(fa, na) {
          var Ca = na ? fa.cloneNode(!1) : fa, g = fa.parentNode;
          if (g) {
            g = D(g, 1);
            var n = fa.nextSibling;
            g.appendChild(Ca);
            for (var B = n; B; B = n) {
              n = B.nextSibling, g.appendChild(B);
            }
          }
          return Ca;
        }
        for (; !v.nextSibling;) {
          if (v = v.parentNode, !v) {
            return;
          }
        }
        v = D(v.nextSibling, 0);
        for (var I; (I = v.parentNode) && 1 === I.nodeType;) {
          v = I;
        }
        L.push(v);
      }
      for (var q = J.createElement("li"); l.firstChild;) {
        q.appendChild(l.firstChild);
      }
      for (var L = [q], t = 0; t < L.length; ++t) {
        u(L[t]);
      }
      if (f === (f | 0)) {
        if (10 <= f && 7.2 > H) {
          var R = J.createElement("ol");
          R.innerHTML = '<li value="' + f + '">' + q.innerHTML + "</li>";
          L[0] = R.firstChild;
        } else {
          ab(q, "value", f);
        }
      }
      R = Ga(l, "ol", {className:"linenums"});
      l = Math.max(0, f - 1 | 0) || 0;
      t = 0;
      for (f = L.length; t < f; ++t) {
        q = L[t], Lb(q, "L" + (t + l) % 10), q.firstChild || Fc(q, "\u00a0"), R.appendChild(q);
      }
    };
    var da = function() {
      var l = ia, f = l.o, y = f.length, u = 0, w = l.I, q = w.length, L = 0, t = l.s, R = t.length, v = 0;
      t[R] = y;
      var D, I;
      for (I = D = 0; I < R;) {
        t[I] !== t[I + 2] ? (t[D++] = t[I++], t[D++] = t[I++]) : I += 2;
      }
      R = D;
      for (I = D = 0; I < R;) {
        var fa = t[I], na = t[I + 1];
        for (I += 2; I + 2 <= R && t[I + 1] === na;) {
          I += 2;
        }
        t[D++] = fa;
        t[D++] = na;
      }
      t.length = D;
      l = l.B;
      R = "";
      l && (R = l.style.display, Sa(l, "display", "none"));
      for (; L < q;) {
        D = w[L + 2] || y;
        fa = t[v + 2] || y;
        I = Math.min(D, fa);
        na = w[L + 1];
        var Ca;
        if (1 !== na.nodeType && (Ca = f.substring(u, I))) {
          9 > z && (Ca = Ca.split("\n").join("\r"));
          var g = Kb(na, "span", {className:la[t[v + 1]]}, Ca);
          Aa(na);
          u < D && (w[L + 1] = ac(g, f.substring(I, D)));
        }
        u = I;
        u >= D && (L += 2);
        u >= fa && (v += 2);
      }
      l && Sa(l, "display", R);
      ia = x;
      M(va, x, 3, !0);
    };
    var qa = [], Ba;
    sb(function(l) {
      if (l) {
        l = [nb("pre"), nb("code"), nb("xmp")];
        for (var f = 0; f < l.length; ++f) {
          for (var y = 0, u = l[f].length; y < u; ++y) {
            ea(l[f][y]);
          }
        }
        return !0;
      }
    });
    var ea = function(l) {
      qa.push(l);
      Ba = qa.length;
      1 === Ba && (kc ? Y(kc, va) : bb ? bb.push(function() {
        Y(va);
      }) : Y(va));
    };
    var va = function() {
      function l(L, t) {
        return (L.split(t)[1] || "").split(" ")[0];
      }
      if (!ia) {
        Ba !== qa.length && e && e(Ba - qa.length, Ba);
        var f = qa.shift();
        if (f) {
          if (Wa(f, "prettyprint") && !Wa(f, "prettyprinted")) {
            for (var y = !1, u = f.parentNode; u !== wa; u = u.parentNode) {
              var w = La(u);
              if (("PRE" === w || "XMP" === w || "CODE" === w) && Wa(u, "prettyprint")) {
                y = !0;
                break;
              }
            }
            if (!y) {
              y = f.className;
              hb(f, "prettyprinted");
              u = !1;
              if (!u) {
                u = l(y, "lang-") || l(y, "language-");
                var q;
                !u && (q = oa(f)) && "CODE" === La(q) && (u = l(q.className, "lang-") || l(q.className, "language-"));
              }
              w = La(f);
              "PRE" === w || "XMP" === w ? w = 1 : (w = f.currentStyle, q = J.defaultView, w = (w = w ? w.whiteSpace : q && q.getComputedStyle ? q.getComputedStyle(f, null).getPropertyValue("white-space") : 0) && "pre" === w.substr(0, 3));
              q = !1;
              (q = "true" === q || +q) || (q = l(y, "linenums:") || Wa(f, "linenums"), q = q.length ? +q : q);
              q && Q(f, q, w);
              ia = {W:u, B:f, ba:q, O:w, D:0, v:0, R:{}, s:[]};
              M(p);
              return;
            }
          }
          M(va, x, 0, !0);
        } else {
          b && b();
        }
      }
    };
    V.PR = {RegExpProxy:K, prettifyElement:ea, registerCompleteHandler:function(l, f) {
      b = l;
      e = f;
    }};
  })();
  var jc = J.scripts || nb("script");
  var ta = jc[jc.length - 1].src.split("/");
  --ta.length;
  "js" === ta[ta.length - 1] && --ta.length;
  (ta = ta.join("/")) && (ta += "/");
  var Nc = Sc || "1" === Ea(wa, "mob");
  Fb = (Nc ? "mb" : "pc") + "/";
  6.1 > ya && (rb ? rb(Yb) : ma(V, "scroll", Yb));
  ob(Ac);
  6.1 > ya && (rb ? rb(Zb) : ma(V, "scroll", Zb));
  ob(Bc);
  10 > z && (11 !== Qc || 5 !== z) || (9 > H || 1 > P || !lb && !V.addEventListener ? J.write('<link href="' + ta + "css/" + Fb + Wb + '" rel="stylesheet"' + (8 > H ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > H || 1.5 > P || 534 > sa || 5 > ya || 7 > za || 3 > Ua) && Oa(function() {
    Ga(db, "link", {href:ta + "css/" + Fb + Wb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Pb) {
    if (Gb) {
      var kc = function(N) {
        V.RegExpCompat = bz;
        kc = x;
        Hb(ta + "js/regexpcompat.js");
        function bz(K) {
          for (var M; M = bb.shift();) {
            M(K);
          }
          bb = x;
          Y(N);
          Ib(ta + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      V.RegExpCompat = function(N) {
        for (var K; K = bb.shift();) {
          K(N);
        }
        bb = x;
        Ib(ta + "js/regexpcompat.js");
      }, Hb(ta + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

