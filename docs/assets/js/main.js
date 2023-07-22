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
(function(Ja, W, cb, lc, K, Qb, Oc, Cb, Ya, Rb, Sb, mc, Tb, x) {
  function X(O) {
    if (Ja[0] === O) {
      return Ka === Ka + "" ? Ya(Ka) : Ka;
    }
  }
  function Da(O) {
    var L = Ja[3];
    if (Ja[2] === O) {
      return L === L + "" ? Ya(L) : L;
    }
  }
  function Ub() {
    return 6 > z ? wa.scrollTop : z ? jb.scrollTop : W.pageYOffset;
  }
  var wa = K.body, Ma = wa.style, jb, db, kb, Ka = Ja[1], z = X(2) || X(3), lb = X(7), Ta = X(5) || X(6), I = X(8) || X(9), R = X(11) || X(12), xb = R && 0 <= Ja.conpare(Ka, "1.9.1"), Db = X(13), sa = X(15), ya = X(16) || X(17), nc = X(10) || X(25), za = X(20) || X(22), oc = X(23), Ua = X(21), Eb = X(24), Pc = za || oc || Ua || Eb, pc = za && Ya(Qb.userAgent.split("Edg/")[1]), Qc = Ya(Qb.appVersion.split("Trident/")[1]) + 4, Vb = Da(35) || Da(36) || Da(37), Rc = 0 <= Qb.userAgent.indexOf("Googlebot/"), 
  Za = 0.9 > R, Wb = (lb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : 7.2 > I ? "opr70" : 8 > I ? "opr72" : 9.5 > I ? "opr" + (I | 0) : R && !xb ? 1.4 <= R ? "gck19" : 1.3 <= R ? "gck13" : 1 <= R ? "gck12" : Za ? 0.8 <= R ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Fb = "", Sc = Da(1) || Da(2) || Da(3) || Da(4) || Da(8) || Da(9) || Da(10), qc, eb = 8 > z || 7.2 > I ? !1 : x, rc = Ma.transform !== x ? "transform" : Ma["-o-transform"] !== x ? "-o-transform" : 
  Ma["-ms-transform"] !== x ? "-ms-transform" : Ma.MozTransform !== x ? "-moz-transform" : Ma["-webkit-transform"] !== x ? "-webkit-transform" : "", Pa = [], sc = [], Qa = [], Xb, tc, uc, vc, Gb, wc, xc, Hb, Ib, yc = !1, Tc = 525 > sa || 3.2 > ya || 2.2 > Ua || 10 > I || R && !xb || X(25) || 10 > X(3) || Da(32) || Da(30) || Da(3), Z, pb, Jb, zc, Uc = !!wa.getBoundingClientRect, Yb, Ac, Zb, Bc, Ra = Cb.now || function() {
    return +new Cb();
  };
  (function() {
    function O() {
      for (var U, G = 0, ja = Ra(); G < ka.length;) {
        ja < ka[0].t ? ++G : (U = ka.splice(G, 1)[0], U.f(U.p));
      }
      la = ka.length ? Sb(O, xa) : 0;
    }
    function L() {
      for (var U, G = 0; G < da.length; ++G) {
        U = da[G], U.f();
      }
    }
    function N() {
      oa && (oa = clearInterval(oa));
    }
    function ha() {
      la && (la = mc(la));
    }
    Jb = function(U) {
      da.length || (oa = Tb(L, ca));
      da.push({f:U, C:++aa});
      return aa;
    };
    zc = function(U) {
      for (var G = da.length, ja; ja = da[--G];) {
        if (ja.C === U) {
          da.splice(G, 1);
          da[0] || N();
          break;
        }
      }
      return 0;
    };
    Yb = function() {
      oa && (N(), oa = Tb(L, ca));
    };
    Ac = N;
    var da = [], ca = 500, aa = 0, oa;
    if (5 > z || lb) {
      W._wdb_onlooptimer = L, L = "_wdb_onlooptimer()";
    }
    Z = function(U, G, ja) {
      ka.length || (la = Sb(O, xa));
      ka.push({f:U, p:G, C:++pa, t:Ra() + (xa < ja ? ja : xa)});
      return pa;
    };
    pb = function(U) {
      for (var G = ka.length, ja; ja = ka[--G];) {
        if (ja.C === U) {
          ka.splice(G, 1);
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      la && (ha(), la = Sb(O, xa));
    };
    Bc = ha;
    var ka = [], xa = 16, pa = 0, la;
    if (5 > z || lb) {
      W._wdb_ontimer = O, O = "_wdb_ontimer()";
    }
  })();
  var mb, nb, Cc, fb, Dc, Na, $a, Ec, $b, Ga, Kb, Fc, ac, Aa, gb, Gc, La, Ea, ab, Va, qb, Hc, Lb, Wa, hb, bc, Sa, yb, Ic;
  (function() {
    function O(b, d, m) {
      var B = ["<", b], E = 1, e, q;
      if (d) {
        for (e in d) {
          var r = d[e];
          if (null != r && "" !== r) {
            if ("style" === e) {
              B[++E] = ' style="';
              for (q in r) {
                for (var H = ++E, Y, P = [], S = q.split(""), qa = S.length; qa;) {
                  Y = S[--qa], "A" <= Y && "Z" >= Y && (Y = "-" + Y.toLowerCase()), P[qa] = Y;
                }
                B[H] = P.join("") + ":" + r[q] + ";";
              }
              B[++E] = '"';
            } else {
              "className" === e && (e = "class"), B[++E] = " " + e + '="' + r + '"';
            }
          }
        }
      }
      B[++E] = ">";
      null != m && (G && "font" !== b ? B[++E] = "<font>" + L(m) + "</font>" : B[++E] = L(m));
      B[++E] = "</" + b + ">";
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
    function ha(b) {
      return da(K, b);
    }
    function da(b, d) {
      var m = "*" === d;
      m = G ? m ? b.all : b.all.tags(d.toUpperCase()) : 6 > z && m ? b.all : b.getElementsByTagName(d);
      for (var B = [], E = 0, e = m.length; E < e; ++E) {
        B[E] = m[E];
      }
      return B;
    }
    function ca(b, d) {
      var m = [], B = 0, E, e = -1;
      if (9 > z || !b.getElementsByClassName) {
        var q = 6 > z ? b.all : b.getElementsByTagName("*");
      } else {
        var r = !0;
        q = b.getElementsByClassName(d);
      }
      for (E = q.length; B < E; ++B) {
        var H = q[B];
        if (r || (G || 1 === H.nodeType) && pa(H, d)) {
          m[++e] = H;
        }
      }
      return m;
    }
    function aa(b) {
      return G ? b.parentElement : b.parentNode;
    }
    function oa(b, d, m, B, E, e) {
      if (G) {
        var q = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var r = $a(2 > b ? Na(d) : d);
        r = 2 > b ? r.indexOf(d) + b : r.length;
        d.insertAdjacentHTML(q, O(m, B, E));
        d = $a(d)[r];
        null != E && ("font" === m ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (ja) {
        d = K.createElement(O(m, B));
      } else {
        d = e ? K.createElementNS("http://www.w3.org/2000/svg", m) : K.createElement(m);
        if (B) {
          for (q in B) {
            if ((b = B[q]) || 0 === b) {
              switch(q) {
                case "class":
                case "className":
                  Lb(d, b);
                  break;
                case "style":
                  e = d.style;
                  for (r in b) {
                    e[r] = b[r];
                  }
                  break;
                default:
                  ab(d, q, b);
              }
            }
          }
          !I || "a" !== m && "A" !== m || !B.href || B["tag-index"] || B.tagIndex || ab(d, "tagIndex", "-0");
        }
        ia || null != E && ka(d, E);
      }
      return d;
    }
    function ka(b, d) {
      if (G) {
        return oa(2, b, "font", x, d);
      }
      var m = K.createTextNode("" + d);
      b.appendChild(m);
      return m;
    }
    function xa(b, d) {
      9 > z ? b.className = d : b.setAttribute("class", d);
    }
    function pa(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    function la(b, d, m) {
      if (8 > I || 5.5 > z) {
        d = N(d);
      }
      b.style[d] = m;
    }
    function U(b) {
      return 5.5 > z ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var G = 5 > z;
    jb = ha("html")[0];
    db = ha("head")[0];
    mb = function(b) {
      return W[b] || K[b] || K.getElementById(b);
    };
    nb = ha;
    Cc = function(b) {
      return ca(K, b);
    };
    fb = da;
    Dc = ca;
    Na = aa;
    $a = function(b) {
      b = G ? b.children : b.childNodes;
      for (var d = [], m = b.length; m;) {
        d[--m] = b[m];
      }
      return d;
    };
    Ec = function(b) {
      var d = !(7.03 < I && 7.2 > I) && b.children;
      b = d ? d : b.childNodes;
      for (var m = [], B = b.length, E = -1, e; B;) {
        if (e = b[--B], d || 1 === e.nodeType) {
          G && "FONT" === e.tagName || (m[++E] = e);
        }
      }
      return m;
    };
    $b = function(b) {
      return G ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Ga = function(b, d, m, B, E) {
      d = oa(2, b, d, m, B, E);
      G || (b.appendChild(d), ia && null != B && ka(d, B));
      return d;
    };
    Kb = function(b, d, m, B, E) {
      d = oa(0, b, d, m, B, E);
      G || (aa(b).insertBefore(d, b), ia && null != B && ka(d, B));
      return d;
    };
    Fc = ka;
    ac = function(b, d) {
      var m;
      if (G) {
        return oa(1, b, "font", x, d);
      }
      var B = K.createTextNode("" + d);
      (m = b.nextSibling) ? Na(b).insertBefore(B, m) : Na(b).appendChild(B);
      return B;
    };
    Aa = function(b) {
      G ? b.outerHTML = "" : (5.5 > z && (b.style.filter = ""), Na(b).removeChild(b));
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
      return G ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ja = 9 > z, ia = ja;
    La = function(b) {
      return b.tagName.toUpperCase();
    };
    Ea = function(b, d) {
      if (8 > I || 5.5 > z) {
        d = N(d);
      }
      var m = b.getAttribute(d);
      return I && "tabIndex" === d ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    ab = function(b, d, m) {
      if (I && "tab-index" === d) {
        "-1" === m ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", m);
      } else {
        if (8 > I || 5.5 > z) {
          d = N(d);
        }
        b.setAttribute(d, m);
      }
    };
    Va = function(b, d) {
      if (I && "tab-index" === d) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > I || 5.5 > z) {
          d = N(d);
        }
        b.removeAttribute(d);
      }
    };
    qb = function(b, d) {
      if (I && "tab-index" === d) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > I || 5.5 > z) {
        d = N(d);
      }
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    Hc = function(b) {
      return b.className;
    };
    Lb = xa;
    Wa = pa;
    hb = function(b, d) {
      var m;
      if (!pa(b, d)) {
        if (m = b.className) {
          m += " ";
        }
        xa(b, m + d);
      }
    };
    bc = function(b, d) {
      if (pa(b, d)) {
        var m = b.className.split(" ");
        m.splice(m.indexOf(d), 1);
        xa(b, m.join(" "));
      }
    };
    Sa = la;
    yb = function(b, d) {
      var m, B = -1, E;
      if (5.5 > z) {
        if (m = U(b)) {
          for (m = m.split(";"); E = m[++B];) {
            la(b, E.split(":")[0], "");
          }
        }
        if (d) {
          for (B = -1, m = d.split(";"); E = m[++B];) {
            var e = E.split(":")[0];
            la(b, e, E.substr(e.length + 1));
          }
        }
      } else if (7.1 > I) {
        if (b.setAttribute("style", ""), d) {
          for (m = d.split(";"); E = m[++B];) {
            E = E.split(":"), la(b, E[0], E[1]);
          }
        }
      } else {
        9 > I || 1 > R ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    Ic = U;
    Pa.splice(0, 0, function() {
      function b(H) {
        H = $a(H);
        for (var Y = H.length, P, S, qa; Y;) {
          if (P = H[--Y], S = P.nodeType, 8 === S) {
            d && q.push(P);
          } else if (1 === S) {
            switch(S = La(P), "/" === S.charAt(0) && (S = S.substr(1), r[S] = !0), S) {
              case "STYLE":
                if (7.2 <= I && 9 > I) {
                  break;
                }
              case "LINK":
                G || B || gb(db, P) || e.push(P);
                break;
              case "META":
                S = Ea(P, "name") || Ea(P, "property");
                for (qa = E.length; qa;) {
                  if (0 === S.indexOf(E[--qa])) {
                    q.push(P);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Rc || qb(P, "async")) {
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
                W.HTMLSourceElement || q.push(P);
                break;
              default:
                r[S] ? q.push(P) : $a(P).length && b(P);
            }
          }
        }
        for (; e[0];) {
          db.appendChild(e.pop());
        }
        for (; q[0];) {
          Aa(q.pop());
        }
      }
      bc(jb, "nojs");
      kb = mb("jsMain");
      var d = !(8 > I || 5 > z || lb || Za), m = vc, B = 7 > z, E = ["og:", "twitter:", "fb:"], e = [], q = [], r = {};
      b(jb);
    });
  })();
  var ma, Ha, Oa, ob, cc, rb, sb, zb, dc, ec, Jc, Kc, Lc, Ab, Ia, fc;
  (function() {
    function O() {
      return u ? p ? 2 : w ? 3 : 1 : 0;
    }
    function L(a) {
      Ha(W, "load", L);
      L = x;
      ha(Pa, a, !0);
      Oa = Pa = x;
    }
    function N(a, c) {
      sb(function() {
        var k = la(a);
        c(k);
        k.addListener(c);
        return !0;
      });
    }
    function ha(a, c, k) {
      for (var h = 0; h < a.length; ++h) {
        !0 === a[h](c) && (a.splice(h, 1), --h);
      }
      k && (a.length = 0);
    }
    function da(a, c, k) {
      Pa || G.length || Z(ca);
      G.push(a, c, k);
    }
    function ca() {
      var a = G, c;
      for (G = []; c = a.shift();) {
        ha(c, a.shift(), a.shift());
      }
    }
    function aa(a) {
      var c = a || event;
      a = ia[c.type];
      var k = -1, h, F;
      5 > z ? c = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : z ? (c.target = c.srcElement, c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : d && (c.K = c.stopPropagation, c.stopPropagation = function() {
        F = !0;
      });
      for (; h = a[++k];) {
        h.j === this ? (this.g = h.i, z && (c.currentTarget = this), this.g(c), z ? (this.g = cb, this.g = x) : delete this.g) : 7.2 > I && this === K && h.j === W && (W.g = h.i, W.g(c), delete W.g);
      }
      if (z) {
        return c.preventDefault = c.stopPropagation = cb, c.preventDefault = c.stopPropagation = x, c.returnValue;
      }
      d && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (B = !0), F && !B && c.K(), c.K = c.stopPropagation = x);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function oa() {
      var a = 9 === U.offsetWidth;
      Ab !== a && da(sc, Ab = a);
    }
    function ka() {
      !Pa && C && (pb(C), C = Z(xa));
    }
    function xa() {
      C = 0;
      ha(v);
    }
    function pa(a) {
      Pa || ha(J, a);
    }
    var la = W.matchMedia, U, G = [];
    Pa.push(function() {
      N = x;
      U = Ga(wa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Oa(function() {
        G.length && Z(ca);
      });
    });
    ma = function(a, c, k, h) {
      if (m) {
        a.addEventListener(c, k, h ? ja ? h : h.capture || !0 === h : !1);
      } else {
        var F = {j:a, i:k};
        h = ia[c];
        var V = "on" + c, ba, ra;
        if (h) {
          for (ba = h.length; ra = h[--ba];) {
            if (ra.j === a && ra.i === k) {
              return;
            }
          }
          ia[c].push(F);
        } else {
          ia[c] = h = [F], b || (c = a[V], "function" === typeof c && c !== aa && h.unshift({j:a, i:c}));
        }
        b ? a.attachEvent(V, aa) : a[V] = aa;
      }
    };
    Ha = function(a, c, k, h) {
      if (m) {
        a.removeEventListener(c, k, h ? ja ? h : h.capture || !0 === h : !1);
      } else {
        h = ia[c];
        c = "on" + c;
        var F, V, ba;
        if (h) {
          for (F = h.length; V = h[--F];) {
            V.j === a && (V.i === k ? h.splice(F, 1) : ba = !0);
          }
          ba || (b ? a.detachEvent(c, aa) : z ? (a[c] = cb, a[c] = null) : delete a[c]);
        }
      }
    };
    var ja = !z && !lb && (new Oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ia = {}, b = !1, d = 525.13 > sa, m = !d && !lb && W.addEventListener, B;
    d && jb.addEventListener("click", function(a) {
      if (B) {
        return B = !1, a.preventDefault(), !1;
      }
    });
    Oa = function(a) {
      Pa.push(a);
    };
    ob = function(a) {
      E && E.push(a);
    };
    var E = [];
    if (419.3 >= sa) {
      var e = function() {
        if (e) {
          var a = K.readyState;
          "loaded" === a || "complete" === a ? (e = x, L()) : Z(e);
        }
      };
      Z(e);
    } else {
      ma(W, "load", L);
    }
    z || !Za && 1.8 > R ? ma(W, "unload", function(a) {
      ha(E, a, !0);
    }) : E = x;
    sb = function(a) {
      sc.push(a);
    };
    Oa(function() {
      oa();
      Jb(oa);
    });
    ec = function(a, c) {
      if (q) {
        ma(a, "focusin", c);
      } else if (r) {
        ma(a, "DOMFocusIn", c);
      } else {
        if (Y) {
          Ba || (Ba = Tb(l, 333));
        } else if (H || P) {
          ma(K, "focus", qa, !0);
        } else {
          return;
        }
        for (var k = S, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            return;
          }
        }
        k.push(a, c);
      }
    };
    Jc = function(a, c) {
      if (q) {
        ma(a, "focusin", c);
      } else if (r) {
        ma(a, "DOMFocusIn", c, !1);
      } else {
        for (var k = S, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            k.splice(h, 2);
            k.length || (Y ? Ba = zc(Ba) : (H || P) && Ha(K, "focus", qa, !0));
            break;
          }
        }
      }
    };
    var q = 6 <= z || Ta || 52 <= R || 15 <= za || 534 <= sa || 5 <= ya || oc || 4 <= Ua || 4 <= Eb || 11.6 <= X(8) || 12 <= X(9), r = 8 <= I || za || Ua || Eb || sa || ya, H = 8 > I, Y = 6 > z, P = 52 > R || Db;
    if (P || H) {
      var S = [];
      var qa = function(a) {
        var c = S, k = H ? K.activeElement : a.target;
        if (H) {
          var h = a;
          a = {type:"focusin", target:k, preventDefault:function() {
            h.preventDefault();
          }, stopPropagation:function() {
            h.stopPropagation();
          }};
        }
        for (var F = 0, V = c.length; F < V; ++F) {
          var ba = c[F];
          (ba === k || gb(ba, k)) && c[F + 1].call(ba, a);
        }
      };
    } else if (Y) {
      S = [];
      var Ba, ea, ta, l = function() {
        ta = W.onerror;
        W.onerror = f;
        var a = K.activeElement;
        if (ea !== a) {
          ea = a;
          for (var c = S, k, h = 0, F = c.length; h < F; ++h) {
            k = c[h], (k === a || gb(k, a)) && c[h + 1].apply(k, [{target:a}]);
          }
        }
        W.onerror = ta;
        ta = x;
      }, f = function() {
        W.onerror = ta;
        ta = ea = x;
        return !0;
      };
    }
    dc = function(a) {
      Qa && Qa.push(a);
    };
    var y = 60 > R || Db, u, w, p;
    if (89 <= R || 89 <= za || Vb && 79 <= pc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      fc = !0, N("(forced-colors:active)", function(a) {
        u = a.matches;
        Ia = O();
        da(Qa, Ia);
      });
    } else if (10 <= z || Ta || Vb && pc) {
      fc = !0, N("(-ms-high-contrast:black-on-white)", function(a) {
        u = w = a.matches;
        Ia !== O() && (Ia = O(), da(Qa, Ia));
      }), N("(-ms-high-contrast:white-on-black)", function(a) {
        u = p = a.matches;
        Ia !== O() && (Ia = O(), da(Qa, Ia));
      }), N("(-ms-high-contrast:active)", function(a) {
        u = a.matches;
        Ia !== O() && (Ia = O(), da(Qa, Ia));
      });
    } else if (Vb && (z || R && 0 <= Ja.conpare(Ka, "1.8.1") || Db)) {
      var M = function() {
        function a(h, F) {
          if (F && "transparent" === h) {
            return 382.5;
          }
          if ("#" === h.charAt(0)) {
            return parseInt("0x" + h.substr(1, 2), 16) + parseInt("0x" + h.substr(3, 2), 16) + parseInt("0x" + h.substr(5, 2), 16);
          }
          var V = h.split("(")[1].split(",");
          return Ya(V[0]) + Ya(V[1]) + Ya(V[2]);
        }
        var c = K.defaultView;
        var k = c ? c.getComputedStyle(U, null) : U.currentStyle;
        c = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        c && (u = "#123456" !== c && "rgb(18,52,86)" !== c, w = a(c) < a(k, !0), p = a(c) > a(k, !0), Ia !== O() && (Ia = O(), da(Qa, Ia, y)));
      };
      sb(function(a) {
        if (a) {
          return Sa(U, "color", "#123456"), Sa(U, "backgroundColor", "#123456"), y ? (M(), Qa = x) : Jb(M), M = x, !0;
        }
      });
    } else {
      Qa = O = x;
    }
    zb = function(a) {
      t.push(a);
    };
    var t = [], T = 7.5 <= I && 8 > I;
    T && function() {
      for (var a = K.images, c = a.length, k; c;) {
        k = a[--c], k.J = k.src, Va(k, "src");
      }
    }();
    Oa(function() {
      function a() {
        h ? (F = k[--h], T && ab(F, "src", F.J), tc(c, T ? F.J : F.src)) : zb = t = x;
      }
      function c(ba) {
        ha(t, {G:F, H:ba}, !h);
        a();
      }
      var k = K.images || nb("img"), h = k.length;
      if (12 > I || 532 > sa) {
        a();
      } else {
        for (; h;) {
          var F = k[--h];
          var V = 9 > z ? F.complete : 0 <= F.naturalWidth ? F.naturalWidth : F.width;
          da(t, {G:F, H:V}, !h);
        }
        zb = t = x;
      }
    });
    cc = function(a) {
      v.push(a);
    };
    var v = [], C;
    ma(W, "resize", ka);
    ob(function() {
      C && mc(C);
      Ha(W, "resize", ka);
    });
    rb = function(a) {
      J.push(a);
    };
    var J = [], fa = 1 > R || 1.2 <= R && 1.8 > R || 7.2 >= I, na;
    fa ? Jb(function() {
      var a = W.pageYOffset;
      na !== a && (na = a, pa({type:"scroll", cancelable:!1, stopPropagation:cb, preventDefault:cb}));
    }) : ma(W, "scroll", pa, {passive:!0});
    ob(function() {
      fa || Ha(W, "scroll", pa, {passive:!0});
    });
    Kc = function(a, c) {
      if (Ca) {
        ma(a, "wheel", c, {passive:!1});
      } else if (g) {
        ma(a, "mousewheel", c, !1);
      } else if (n) {
        ma(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var k = D, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            return;
          }
        }
        k.length || ma(K, "DOMMouseScroll", Q, !1);
        k.push(a, c);
      }
    };
    Lc = function(a, c) {
      if (Ca) {
        Ha(a, "wheel", c, {passive:!1});
      } else if (g) {
        Ha(a, "mousewheel", c, !1);
      } else if (n) {
        Ha(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var k = D, h = 0, F = k.length; h < F; ++h) {
          if (k[h] === a && k[h + 1] === c) {
            k.splice(h, 2);
            k.length || Ha(K, "DOMMouseScroll", Q, !1);
            break;
          }
        }
      }
    };
    var Ca = 9 <= z || Ta || 17 <= R || 31 <= za || 537.7 <= sa, g = 6 <= z || Ta || 9 <= I || za || 522 <= sa || ya, n = xb, A = R && 0 <= Ja.conpare(Ka, "0.9.7") && !xb;
    if (A) {
      var D = [], Q = function(a) {
        for (var c = D, k = a.target, h, F = 0, V = c.length; F < V; ++F) {
          h = c[F], gb(h, k) && c[F + 1].call(h, a);
        }
      };
    }
  })();
  (function() {
    function O(f) {
      switch(f) {
        case 1:
          return ia;
        case 2:
          return !!b;
        case 3:
          return !!d;
        case 4:
          return !!m;
        case 5:
          return E;
        case 6:
          return B && !xa;
      }
      return !1;
    }
    function L(f) {
      e(f);
      ta && !f && Aa(ta);
      e = q = r = H = Y = P = Ba = ea = ta = l = x;
    }
    function N(f) {
      K.fonts.load('1.6em "' + f + '"').then(function() {
        var y;
        (y = da(q)) ? Z(L, y) : ha(!0);
      }, function() {
        eb !== x ? ca(eb) : Xb(ca);
      });
    }
    function ha(f) {
      f && (qa = Ra());
      (f = da(q, S)) ? L(f) : (f = S, K.hidden || K.msHidden || K.mozHidden || K.webkitHidden ? (qa = Ra(), f = !1) : f = f < Ra() - qa, f ? Ba ? aa() : ka ? L(0) : eb !== x ? ca(eb) : Xb(ca) : Z(ha));
    }
    function da(f) {
      var y = 0, u = -1, w = (G || !1) && [];
      if (!l) {
        var p = -1;
        var M;
        ea = Ga(wa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, U);
        for (l = []; M = ja[++p];) {
          Sa(ea, "fontFamily", M), l[p] = ea.offsetWidth;
        }
      }
      for (5 > z ? ea || (ea = Ga(wa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, U)) : wa.appendChild(ea); p = ja[++u];) {
        Sa(ea, "fontFamily", '"' + f + '",' + p);
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
      !z && y && Y && (ea.textContent = Y, t = ea.offsetWidth, ea.textContent = P, y = t === ea.offsetWidth ? 2 : 1, ea.textContent = U);
      Aa(ea);
      5 > z && (ea = x);
      return y;
    }
    function ca(f) {
      f ? (Ba = !0, S = la, aa()) : L(0);
    }
    function aa() {
      if (r) {
        for (; r.length;) {
          var f = r.shift(), y = r.shift();
          if (O(f)) {
            ta = xc(y, oa, H, ta);
            return;
          }
        }
      }
      L(0);
    }
    function oa(f) {
      f ? ha(!0) : aa();
    }
    Xb = !1 === eb ? function(f) {
      Z(f, !1);
    } : function(f) {
      function y(p) {
        w && (w = pb(w), eb = p, u.onload = u.onerror = cb, Z(f, p));
      }
      if (eb !== x) {
        Z(f, eb);
      } else {
        var u = new Image(), w = Z(y, !1, 999);
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
        p || !M || w.complete ? (Z(f, !!w.width), w.onerror = w.onload = cb, w = f = x) : (--M, Z(u));
      }
      var w = new Image(), p, M = 99;
      w.onerror = function() {
        p = !0;
      };
      w.onload = function() {
        p = !0;
      };
      w.src = y;
      Z(u);
    };
    uc = function(f, y, u, w, p, M, t) {
      e = f;
      q = y;
      r = u;
      H = w;
      Y = p;
      P = M;
      S = t || pa;
      X(10) ? Z(L, 1) : Tc ? Z(L, 0) : !K.fonts || 603 > sa || 11 > ya ? ha(!0) : N(q);
    };
    var ka = 9 > z, xa = 6 > za || I || 530 > sa || 4 > ya, pa = 5E3, la = 500, U = "mmmmmmmmmmlliiiiiiiii", G = 21 > za || 7 > ya || sa && 0 >= Ja.conpare(Ka, "536.11"), ja = ["monospace", "sans-serif", "serif"], ia = 14 <= Ta || 36 <= za || 39 <= R || 602 <= sa || 10 <= ya, b = 6 <= za || R && 0 <= Ja.conpare(Ka, "1.9.2") || 525 <= sa || 3.2 <= ya || 4.4 <= Ua || 11.1 <= I || Ta || 9 <= X(2) || 10 <= X(3), d = 2 <= za || xb || 525 <= sa || 3.2 <= ya || 2.2 <= Ua || 10 <= I || Ta || 9 <= X(2) || 
    10 <= X(3), m = d, B = 525 <= sa || 3.2 <= ya || 38 > za || 3 <= Ua || 11.5 <= I, E = 4 <= X(2) || 10 <= X(3), e, q, r, H, Y, P, S, qa, Ba, ea, ta, l;
  })();
  (function() {
    function O(e) {
      if (2 !== e) {
        var q = Cc("ico"), r = 0, H = q.length;
        if (H) {
          if (1 === e) {
            for (; r < H; ++r) {
              e = q[r];
              var Y = Gc(e);
              if (Y = E[Y]) {
                e.innerHTML = Y;
              }
            }
          } else {
            B && !m && (W.VectorIconFallback = bz, Hb(va + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Ib(va + "js/vector-icon-svg-fallback.js");
        return [E, q, Ga, m];
      }
      bz = !1;
    }
    zb(function(e) {
      var q = e.G;
      e = e.H;
      var r = Na(q);
      !Wa(r, "aBodyRoot") && e ? hb(r, "js-image-has-been-loaded") : e || Ea(q, "alt") || "lazy" === Ea(q, "loading") || Sa(q, "display", "none");
    });
    Za && (Pa.splice(1, 0, function() {
      for (var e = Dc(kb, "RichLink-sep"), q, r, H, Y, P, S; q = e.shift();) {
        for (q = $a(q); r = q.shift();) {
          if ("A" === La(r) && !r.innerHTML) {
            for (; H = q.shift();) {
              if (1 === H.nodeType) {
                if ("A" === La(H)) {
                  break;
                }
                for (Y = fb(H, "A"); P = Y.shift();) {
                  for (S = $a(P); S.length;) {
                    P.parentNode.insertBefore(S.shift(), P);
                  }
                  Aa(P);
                }
              }
              r.appendChild(H);
            }
          }
        }
      }
    }), Pa.splice(2, 0, function() {
      for (var e = nb("A"), q, r; q = e.shift();) {
        "A" !== La(q) || q.innerHTML || (r = q.nextSibling && q.nextSibling.firstChild) && r.href === q.href && Aa(q);
      }
    }));
    5.5 <= z && 8 > z && Qa && dc(function(e) {
      for (var q = fb(wa, "a"), r = q.length, H = 0; H < r; ++H) {
        q[H].hideFocus = !e;
      }
    });
    if (!fc && Qa) {
      var L, N = function() {
        L = Ga(db, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + Fb + "hc/" + Wb});
        (rc || 5.5 <= z && 9 > z && qc) && hb(wa, "js-canuse-css-rotate-when-forced-colors-mode");
        N = x;
      };
      dc(function(e) {
        e && !L ? N() : L && (e ? db.appendChild(L) : Aa(L));
      });
    }
    I && Oa(function() {
      for (var e = fb(wa, "a"), q = e.length, r = 0, H; r < q; ++r) {
        H = e[r], "-1" === Ea(H, "tabIndex") ? Va(H, "tabIndex") : Ea(H, "href") && ab(H, "tabIndex", "0");
      }
      e = fb(wa, "input");
      r = 0;
      for (q = e.length; r < q; ++r) {
        H = e[r], "hidden" === Ea(H, "type") && Va(H, "tabIndex");
      }
    });
    if (R && 0 > Ja.conpare(Ka, "0.9.5")) {
      yc = !0;
      var ha, da, ca, aa, oa;
      Oa(function() {
        ma(K, "keydown", ka);
        ma(K, "keyup", xa);
        ec(wa, pa);
        Za || (ma(W, "blur", ia), ma(wa, "click", ja));
      });
      var ka = Za ? function(e) {
        16 === e.keyCode ? ha = !0 : 9 === e.keyCode && aa && la(aa, !0) && (aa.blur && aa.blur(), e.stopPropagation(), e.preventDefault(), Z(G));
      } : function(e) {
        16 === e.keyCode ? ha = !0 : 9 === e.keyCode && (da = Ra());
      }, xa = function(e) {
        16 === e.keyCode && (ha = !1);
      }, pa = Za ? function(e) {
        aa = e.target;
      } : function(e) {
        var q = e.target;
        if (aa === q) {
          ca = x;
        } else if (ca) {
          q === ca ? (e.stopPropagation(), G(!0)) : (q.blur && d(q), e.preventDefault(), G());
        } else {
          if (e = aa) {
            aa = x, d(e);
          }
          ca = q;
          G(!0);
        }
      }, la = function(e, q) {
        var r = Ra(), H = wa, Y = "nextSibling", P = "firstChild";
        ha && (q || r - 99 < da && da <= r) && (Y = "previousSibling", P = "lastChild");
        for (ca = x; e !== H;) {
          if (S) {
            r = e;
            var S = !1;
          } else {
            r = e[Y];
          }
          if (r) {
            if (1 === r.nodeType) {
              if (U(r)) {
                return ca = r, !0;
              }
              e = (S = r[P]) || r;
            } else {
              e = r;
            }
          } else {
            e = e.parentNode;
          }
        }
      }, U = function(e, q) {
        function r() {
          return "-1" !== Ea(e, "tab-index");
        }
        function H() {
          return 0 < e.offsetHeight * e.offsetWidth;
        }
        if (e.focus) {
          var Y;
          switch({A:q ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[La(e)]) {
            case 1:
              if (qb(e, "href") && r() && H()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ea(e, "type") && r() && !qb(e, "disabled") && H()) {
                return !0;
              }
              break;
            case 3:
              if (r() && !qb(e, "disabled") && H()) {
                return !0;
              }
              break;
            default:
              if ((Y = Ea(e, "tab-index")) && "-1" !== Y && H()) {
                return !0;
              }
          }
        }
      }, G = function(e) {
        oa = 0;
        ca && (Za || ma(ca, "blur", b), aa = ca, ca = x, e || aa.focus());
      };
      if (!Za) {
        var ja = function(e) {
          var q = e.target;
          if (aa && U(q, !0)) {
            var r = aa;
            aa = x;
            d(r);
            ca = q;
            e.stopPropagation();
            e.preventDefault();
            G();
          }
        }, ia = function(e) {
          e.target === K && (ca = x);
        }, b = function(e) {
          e = e.target;
          Ha(e, "blur", b);
          aa === e && la(e) && (oa || (oa = Z(G)));
        }, d = function(e) {
          Ha(e, "blur", b);
          e.blur();
        };
      }
    }
    sb(function(e) {
      if (e) {
        return uc(O, "myIconFont", [1, va + "iconfont/woff2.css", 2, va + "iconfont/woff.css", 4, va + "iconfont/otf.css", 3, va + "iconfont/ttf.css", 6, va + "iconfont/svg.css"], "js-myIconFont-testCssReady", "Twitter", "\ud83d\udc24", 5E3), O = x, !0;
      }
    });
    var m = 8 <= X(8) && 9 > I, B = 9 <= z || Ta || 1.8 <= R || 8 <= X(8) || 9 <= X(9) || 3 <= X(21) || Db || Pc || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || ya, E = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", Android:"\ud83e\udd16"};
  })();
  (function() {
    function O(g) {
      var n = q.length, A, D, Q, a;
      if (13 === (g.keyCode || g.V) || g.type !== r) {
        for (; n;) {
          var c = q[--n];
          if (c.F === this || c.u === this) {
            n = c.F;
            var k = A = c.u;
            if (c.P) {
              if (Sa(n, "width", c.$), n.src = c.Z, Lb(k, c.T), n = c.L) {
                yb(n, c.S), bc(n, "js-captioned-thumbnail__large");
              }
            } else {
              if (D = c.N) {
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
                    D = D.split("=");
                    h = D.length;
                    if (Q = D[h - 1]) {
                      (a = Ya(Q.substr(1))) && Q === "s" + a ? D[h - 1] = "w" + A : D[h] = "w" + A;
                    }
                    D = D.join("=");
                  } else {
                    D = D.split("/");
                    h = D.length;
                    if (Q = D[h - 2]) {
                      (a = Ya(Q.substr(1))) && Q === "s" + a ? D[h - 2] = "w" + A : D.splice(h - 1, 0, "w" + A);
                    }
                    D = D.join("/");
                  }
                }
                c.X = D;
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
        L(g);
      }
    }
    function L(g) {
      g.preventDefault();
      g.stopPropagation();
    }
    function N(g) {
      var n = p;
      if (Ab) {
        if (M && !n) {
          if (Ra() < M) {
            return;
          }
          M = x;
        }
        7 === g ? t = 0 : (t && (t = pb(t)), u = Ub());
        n ? (p = ha(x, n[0], n[1])) || (M = Ra() + 99) : ha();
      } else {
        p = x;
      }
    }
    function ha(g, n, A) {
      function D(Xa) {
        k = Xa;
        if (f) {
          h = f + ":translate" + (w ? "3D(0," : "(0,") + Xa + (w ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Xa) {
          if (S || qa) {
            var gc = ea.offsetWidth;
          }
          h = S ? "position:fixed;width:" + gc + "px;top:" + (Xa - Q + ba) + "px" : Ba ? "top:" + Xa + "px" : "position:absolute;top:" + Xa + "px;left:0";
          if (qa && h) {
            var Bb = 8 > z ? " " : ",";
            h += ";clip:rect(" + (0 > Xa ? -Xa + "px" + Bb + gc + "px" + Bb + Fa : "0" + Bb + gc + "px" + Bb + (Xa + Fa < Mb ? Fa : Mb - Xa)) + "px" + Bb + "0)";
          }
        }
      }
      var Q = u, a = ta, c = ea.offsetTop === a.offsetTop, k = 0, h = "", F = !0;
      if (c) {
        for (var V = 0, ba = 0, ra = a; ra && ra !== wa;) {
          ba += ra.offsetTop, ra = ra.offsetParent;
        }
        k = y;
        var hc = 11 > z ? jb.offsetHeight : W.innerHeight, ic = a.offsetHeight, Fa = l.offsetHeight, Mb = Fa < ic ? ic : Fa, ib = Q, tb = ib + hc, Nb = ba, Ob = Nb + Mb, Mc = ba + k, Vc = Mc + Fa;
        a = ib < Nb ? Nb : ib;
        ra = Ob < tb ? Ob : tb;
        var ub = ra - a;
        ib = Ob <= ib;
        tb = tb <= Nb;
        if (n !== x) {
          F = ba + n;
          g = F + A;
          var vb;
          if (ib || tb) {
            return hc <= A ? vb = ba : vb = ib ? Ob - A : ba + A - hc, M = x, W.scroll(0, vb), p;
          }
          Fa <= ub ? V = 3 : A <= ub ? Fa - n <= ub ? V = 2 : a <= F && g <= ra ? a < ba + k && (V = 4) : V = a <= F && F <= ra ? 5 : a <= g && g <= ra ? 4 : g < a ? 4 : 5 : V = 4;
          F = !1;
        } else {
          g !== x ? Fa <= ub ? (V = 7, F = !1) : (k -= 60 * g, V = ra - ba - Fa, vb = a - ba, k < V ? k = V : vb < k && (k = vb), V = 6) : ic <= Fa || (ib ? V = 1 : tb || (Fa <= ub ? V = 3 : a < Mc ? V = 3 : Vc < ra ? V = 2 : Q < ba + Fa - ub || (V = 2)));
        }
        switch(V) {
          case 0:
            D(0);
            break;
          case 1:
            D(Mb - Fa);
            break;
          case 2:
            D(ra - ba - Fa);
            break;
          case 3:
            D(a - ba);
            break;
          case 4:
            D(a - ba - n);
            break;
          case 5:
            D(ra - ba - (n + A));
          case 6:
            D(k);
        }
      }
      yb(l, h);
      y = k;
      return c && F;
    }
    function da(g) {
      if (Ab && (R && (u = Ub()), this !== g.target)) {
        var n = Rb(g.deltaY) ? g.deltaY : Rb(g.wheelDeltaY) ? g.wheelDeltaY / 120 : Rb(g.wheelDelta) ? g.wheelDelta / -120 : g.detail / ("MozMousePixelScroll" === g.type ? 45 : 1);
        n && ha(9 >= n ? -9 >= n ? -3 : n : 3) && (g.preventDefault(), g.stopPropagation());
      }
    }
    function ca(g) {
      if (Ab) {
        var n = R && 0 > Ja.conpare(Ka, "0.9.4"), A = g.target;
        g = l;
        var D = 0;
        if (gb(g, A)) {
          if (f) {
            n = A.getBoundingClientRect();
            var Q = n.bottom - n.top;
            D = n.top - g.getBoundingClientRect().top | 0;
          } else {
            Q = A.offsetHeight;
            var a = A;
            if (n) {
              for (var c = []; a && (R ? gb(g, a) : g !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && c.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = A;
            }
            for (; a && (R ? gb(g, a) : g !== a);) {
              if (n) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, D += a.offsetHeight || 0;
                }
                a = a.parentNode;
              } else {
                D += a.offsetTop, a = a.offsetParent;
              }
            }
          }
          P ? (p = [D, Q], t && pb(t), t = Z(N, 7, 1 > R || 536 > sa || 14 > za ? 500 : 0)) : (u = Ub(), ha(x, D, Q));
        }
      }
    }
    function aa() {
      T.call(v);
    }
    function oa() {
      K.fullscreenElement || K.fullscreen || K.webkitIsFullscreen || K.msFullscreenElement || W.fullScreen ? (ab(v, "id", "blog2slide-root"), fa[1].parentNode.insertBefore(C, fa[1]), ka(), K.onkeydown = xa) : J && (Aa(C), Va(v, "id"), Va(J, "id"), J = K.onkeydown = x);
    }
    function ka() {
      J && Va(J, "id");
      na = 0 < na ? Ca < na ? Ca : na : 0;
      J = fa[na];
      ab(J, "id", "blog2slide-current");
    }
    function xa(g) {
      if ("ArrowRight" === g.key || 39 === g.keyCode) {
        ++na, ka();
      } else if ("ArrowLeft" === g.key || 37 === g.keyCode) {
        --na, ka();
      }
    }
    xc = function(g, n, A, D) {
      D = D || Ga(db, "link", {type:"text/css", rel:"stylesheet"});
      var Q;
      if (d) {
        (Q = mb(A)) ? Va(Q, "id") : Q = Ga(wa, "div", {"aria-hidden":"true", className:A});
        var a = Q.offsetWidth;
        ab(Q, "id", A);
      }
      b(D, g, n, Q, a);
      return D;
    };
    var pa = R && 0 > Ja.conpare(Ka, "0.9.1"), la = 11 <= z || Ta || 9 <= I && 9.5 > I, U = 11 > z, G = 7.2 <= I && 7.5 > I, ja = 9 > R && !pa || 19 > za || 4.3 > Ua || 2 > Eb || 536 > sa || 6 > ya || 7 <= I && 9 > I && !G, ia = !pa && !la && !U && !G && !ja, b = ia ? function(g, n, A) {
      g.onload = bz;
      g.onerror = function() {
        g.onload = g.onerror = null;
        Z(A, !1);
      };
      g.href = n;
      function bz() {
        g.onload = g.onerror = null;
        Z(A, !0);
      }
      bz = !1;
    } : la ? function(g, n, A, D, Q) {
      g.onload = function() {
        Z(A, d(D, Q));
        Aa(D);
        g.onload = D = null;
      };
      g.href = n;
    } : U ? function(g, n, A, D, Q) {
      g.onreadystatechange = function() {
        "complete" === g.readyState && (Z(A, d(D, Q)), Aa(D), D = null, g.V = cb);
      };
      g.href = n;
    } : ja || G ? function(g, n, A, D, Q) {
      function a() {
        k && (h = pb(h), F = Ra() + 999, Z(c, 0, 99), ja ? k.onerror = null : k.removeEventListener("load", a, !1), k = null);
      }
      function c() {
        d(D, Q) ? (Aa(D), D = null, Z(A, !0)) : Ra() < F ? Z(c, 0, 99) : (Aa(D), D = null, Z(A, !1));
      }
      var k = new Image(), h = Z(a, 0, 5E3), F;
      ja ? k.onerror = a : k.addEventListener("load", a, !1);
      k.src = g.href = n;
    } : function(g, n, A) {
      Z(A, !1);
    }, d = !ia && !pa && function(g, n) {
      return g.offsetWidth !== n;
    };
    wc = R && 0 >= Ja.conpare(Ka, "0.9");
    Gb = !(7.2 > I || wc);
    Hb = function(g) {
      m ? K.write('<script src="' + g + '">\x3c/script>') : Pa || E.length ? E.push(g) : e(g);
    };
    Ib = function() {
      m || e(E.shift());
    };
    var m = !Gb, B = Gb && 7.5 > I;
    if (!m) {
      var E = [];
      B && (vc = !0);
      Oa(function() {
        e(E.shift());
      });
      var e = function(g) {
        g && (B ? jc[0].src = g : Ga(db, "script", {src:g}));
      };
    }
    var q = [], r = 5.5 <= z && 8 > z ? "keypress" : "keydown";
    if (!nc) {
      var H = Ma.transition !== x || Ma["-o-transition"] !== x || Ma["-moz-transition"] !== x || Ma["-webkit-transition"] !== x;
      zb(function(g) {
        if (g.H && kb) {
          g = g.G;
          var n = Na(g), A = "", D;
          if ("A" === La(n) && 1 === Ec(n).length) {
            var Q = Ea(n, "href");
            var a = Q.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((D = 0 < Q.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              ma(n, r, O);
              ma(g, "click", O);
              ma(n, "click", L);
              H && (A = g.naturalWidth + "px", Sa(g, "width", A));
              hb(n, "js-pica-thumbnail");
              for (a = n; a = Na(a);) {
                if (Wa(a, "caption")) {
                  hb(a, "js-captioned-thumbnail");
                  var c = a;
                  var k = Ic(c);
                  break;
                }
              }
              q.push({u:n, L:c, S:k, Z:g.src, $:A, N:Q, F:g, M:D ? 0 < Q.indexOf("/img/a/") ? 2 : 3 : 0 < Q.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      ob(function(g, n) {
        for (g = -1; n = q[++g];) {
          Ha(n.u, r, O), Ha(n.F, "click", O), Ha(n.u, "click", L);
        }
      });
    }
    var Y = ["jsSidebarFixer1", "jsSidebarFixer2"], P = !(9 > z || I || 1 <= R && 1.3 > R || yc), S = !(5 > ya || 2.2 > Ua || 6 > X(12) || Da(30) && 534 > sa || Da(32) || 7 > z || 9 > I || 1 > R), qa = S || 6 === z || 1 > R, Ba = 7.5 > I, ea, ta, l, f = Uc && rc, y = 0, u = 0, w, p, M, t;
    Nc || nc || (sb(function(g) {
      if (g) {
        if (!kb) {
          return !0;
        }
        g = -1;
        var n;
        ea = mb("jsSide");
        ta = kb;
        if (!ea) {
          return !0;
        }
        rb(N);
        cc(N);
        l = Kb($b(ea), "div", {id:"jsSidebarFixer"});
        for (ec(l, ca); 1 < $a(ea).length;) {
          l.appendChild($a(ea)[1]);
        }
        for (; n = Y[++g];) {
          Kc(mb(n), da);
        }
        z || Ta || 2 > za || (w = Ma.perspective !== x || Ma.MozPerspective !== x || Ma["-webkit-perspective"] !== x);
        N();
        return !0;
      }
    }), ob(function() {
      for (var g = -1, n; n = Y[++g];) {
        Lc(mb(n), da);
      }
      Jc(l, ca);
    }));
    Oa(function() {
      function g(c, k, h, F) {
        var V = F ? "div" : "cite";
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
        h = F ? Kb($b(A), V, {className:h}) : Ga(A, V, {className:h});
        Ga(h, "a", 0 === k.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:k} : {href:k}, c);
      }
      if (kb) {
        for (var n = fb(kb, "blockquote"), A, D = -1, Q, a; A = n[++D];) {
          Q = Ea(A, "title"), a = Ea(A, "cite"), Q && a ? (Va(A, "title"), g(Q, a, "js-generated-link-in-blockquote", !0)) : a && (Va(A, "cite"), g(W.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var T, v, C, J, fa, na, Ca;
    Oa(function() {
      var g = mb("blog2slide-start");
      if (g) {
        var n = K.onfullscreenchange !== x ? "f" : K.onmozfullscreenchange !== x ? "mozF" : K.onwebkitfullscreenchange !== x ? "webkitF" : 0;
        T = g.requestFullscreen || g.webkitRequestFullscreen || g.mozRequestFullscreen || g.msRequestFullscreen;
        0 !== n || T ? (g.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', ma(g.firstChild, "click", aa), g = Na(g), v = Na(g), fa = fb(g, "section"), C = K.createElement("h1"), C.innerHTML = fb(wa, "h1")[0].innerHTML, Ca = fa.length, fa.splice(0, 0, C), 0 !== n ? ma(K, n + "ullscreenchange", oa) : z ? ma(K, "MSFullscreenChange", oa, !1) : cc(oa)) : Aa(g);
      }
    });
  })();
  var wb, Pb = !lc || .9 > R || 8 > I || 5.5 > z, bb;
  (function() {
    function O(l) {
      return l === "" + l;
    }
    function L(l, f) {
      return Pb ? new G(l, f) : new lc(l, f);
    }
    function N(l, f, y, u) {
      if (U() - ja < m && !u) {
        return l(f);
      }
      Z(ha, {U:l, Y:f});
    }
    function ha(l) {
      ja = U();
      l.U(l.Y);
    }
    function da(l, f) {
      l && wb[l] || (l = B.test(f) ? "default-markup" : "default-code");
      var y = !!wb[l];
      y && N(H, l, 0, !0);
      return y;
    }
    function ca() {
      function l(g, n, A) {
        n && (f.h = f.h || [], f.h.push({l:f, B:f.B, O:1, s:M, D:g, o:n, m:A, R:{}, v:0}));
      }
      var f = ia, y = f.m, u = y[0], w = y[2], p = f.D, M = f.s, t = f.aa.shift(), T = f.R;
      if (t) {
        var v = T[t], C;
        if (!(0 <= v)) {
          if (C = u[t.charAt(0)]) {
            var J = t.match(C[1]);
            v = C[0];
          } else {
            for (v = 0, u = -1; C = w[++u];) {
              if (J = t.match(C[1])) {
                v = C[0];
                break;
              }
            }
          }
          !(C = O(v)) || J && O(J[1]) || (C = !1, v = 11);
          C || (T[t] = v);
        }
        w = f.v;
        T = t.length;
        f.v += T;
        if (C) {
          C = J[1];
          u = t.indexOf(C);
          var fa = C.length, na = u + fa;
          J[2] && (na = T - J[2].length, u = na - fa);
          l(p + w, t.substr(0, u), y);
          if (fa && da(v, C)) {
            l(p + w + u, C);
            var Ca = !0;
          }
          l(p + w + na, t.substr(na), y);
          f.h && f.h.length && (ia = f.h.shift());
          Ca || (ia !== f ? N(q, x, 2) : N(ca, x, 2));
        } else {
          M.push(p + w, v), N(ca, x, 2);
        }
      } else {
        f.l ? (ia = f.l.h.shift()) ? N(q, x, 2) : (ia = f.l, N(ca, x, 2)) : N(S, x, 2);
      }
    }
    function aa(l) {
      if (r.length) {
        var f = r.shift(), y = pa[f];
        if (y.pop) {
          pa[f] = L(y[0], y[1]);
        } else if (O(y)) {
          pa[f] = L(y);
        } else {
          return aa(l);
        }
        N(aa, l, 1);
      } else {
        N(H, l);
      }
    }
    function oa(l) {
      for (var f, y = l.firstChild; y; y = y.nextSibling) {
        var u = y.nodeType;
        f = 1 === u ? f ? l : y : 3 === u ? E.test(y.nodeValue) ? l : f : f;
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), U = Cb.now || function() {
      return +new Cb();
    }, G, ja, ia, b, d, m = 5 > z ? 60 : 5.5 > z ? 0 : Pb ? 20 : 10, B, E;
    bb = [function(l) {
      W.RegExpCompat = G = l;
    }, function() {
      B = L("^\\s*<");
      E = L("\\S");
    }];
    Pb || (bb[1](), bb = x);
    var e = function() {
      var l = ia, f = l.W, y = Y(l.B, l.O), u = l.o = y.o;
      l.I = y.I;
      da(f, u) || (ia = x, N(ta, x, 0, !0));
    };
    var q = function() {
      var l = ia;
      l.aa = l.o.match(l.m[1]) || [];
      l.s.push(l.D, 0);
      N(ca, x, 2);
    };
    var r = [];
    var H = function(l) {
      function f(v) {
        var C = v;
        0 <= v && (C = xa[v]);
        0 <= C[1] && (C[1] = y(C[1]));
        return C;
      }
      function y(v) {
        var C = v;
        return 0 <= v && (C = pa[v], !C.exec) ? (r.push(v), v) : C;
      }
      var u = ia, w = wb[l];
      O(w) && (w = wb[l] = wb[w]);
      var p = w[0];
      if (0 <= p) {
        p = ka[p];
        if (0 <= p["-num"]) {
          var M = p["-num"];
          delete p["-num"];
          for (var t = -1; 9 > t;) {
            p["" + ++t] = M;
          }
        }
        w[0] = p;
      }
      for (var T in p) {
        p[T] = f(p[T]);
      }
      w[1] = y(w[1]);
      p = w[2];
      t = 0;
      for (M = p.length; t < M; ++t) {
        p[t] = f(p[t]);
      }
      r.length ? N(aa, l, 2) : (u.m ? u.l && (u.l.h[0].m = w) : u.m = w, N(q, x, 1));
    };
    var Y = function(l, f) {
      function y(T) {
        var v = T.nodeType;
        if (1 === v) {
          if (!Wa(T, "nocode")) {
            for (v = T.firstChild; v; v = v.nextSibling) {
              y(v);
            }
            v = La(T);
            if ("BR" === v || "LI" === v) {
              u[M] = "\n", p[M << 1] = w++, p[M++ << 1 | 1] = T;
            }
          }
        } else if (3 === v || 4 === v) {
          if (v = T.nodeValue) {
            v = f ? v.split("\r\n").join("\n").split("\r").join("\n") : v.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), u[M] = v, p[M << 1] = w, w += v.length, p[M++ << 1 | 1] = T;
          }
        }
      }
      var u = [], w = 0, p = [], M = 0;
      y(l);
      var t = u.join("");
      "\n" === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1));
      return {o:t, I:p};
    };
    var P = function(l, f, y) {
      function u(v) {
        var C = v.nodeType;
        if (1 === C && !Wa(v, "nocode")) {
          if ("BR" === La(v)) {
            w(v), v.parentNode && Aa(v);
          } else {
            for (v = v.firstChild; v; v = v.nextSibling) {
              u(v);
            }
          }
        } else if ((3 === C || 4 === C) && y) {
          var J = v.nodeValue, fa = J.indexOf("\r\n"), na = 2;
          -1 === fa && (fa = J.indexOf("\n"), na = 1);
          -1 === fa && (fa = J.indexOf("\r"));
          -1 !== fa && (C = J.substr(0, fa), v.nodeValue = C, (J = J.substr(fa + na)) && ac(v, J), w(v), C || Aa(v));
        }
      }
      function w(v) {
        function C(fa, na) {
          var Ca = na ? fa.cloneNode(!1) : fa, g = fa.parentNode;
          if (g) {
            g = C(g, 1);
            var n = fa.nextSibling;
            g.appendChild(Ca);
            for (var A = n; A; A = n) {
              n = A.nextSibling, g.appendChild(A);
            }
          }
          return Ca;
        }
        for (; !v.nextSibling;) {
          if (v = v.parentNode, !v) {
            return;
          }
        }
        v = C(v.nextSibling, 0);
        for (var J; (J = v.parentNode) && 1 === J.nodeType;) {
          v = J;
        }
        M.push(v);
      }
      for (var p = K.createElement("li"); l.firstChild;) {
        p.appendChild(l.firstChild);
      }
      for (var M = [p], t = 0; t < M.length; ++t) {
        u(M[t]);
      }
      if (f === (f | 0)) {
        if (10 <= f && 7.2 > I) {
          var T = K.createElement("ol");
          T.innerHTML = '<li value="' + f + '">' + p.innerHTML + "</li>";
          M[0] = T.firstChild;
        } else {
          ab(p, "value", f);
        }
      }
      T = Ga(l, "ol", {className:"linenums"});
      l = Math.max(0, f - 1 | 0) || 0;
      t = 0;
      for (f = M.length; t < f; ++t) {
        p = M[t], Lb(p, "L" + (t + l) % 10), p.firstChild || Fc(p, "\u00a0"), T.appendChild(p);
      }
    };
    var S = function() {
      var l = ia, f = l.o, y = f.length, u = 0, w = l.I, p = w.length, M = 0, t = l.s, T = t.length, v = 0;
      t[T] = y;
      var C, J;
      for (J = C = 0; J < T;) {
        t[J] !== t[J + 2] ? (t[C++] = t[J++], t[C++] = t[J++]) : J += 2;
      }
      T = C;
      for (J = C = 0; J < T;) {
        var fa = t[J], na = t[J + 1];
        for (J += 2; J + 2 <= T && t[J + 1] === na;) {
          J += 2;
        }
        t[C++] = fa;
        t[C++] = na;
      }
      t.length = C;
      l = l.B;
      T = "";
      l && (T = l.style.display, Sa(l, "display", "none"));
      for (; M < p;) {
        C = w[M + 2] || y;
        fa = t[v + 2] || y;
        J = Math.min(C, fa);
        na = w[M + 1];
        var Ca;
        if (1 !== na.nodeType && (Ca = f.substring(u, J))) {
          9 > z && (Ca = Ca.split("\n").join("\r"));
          var g = Kb(na, "span", {className:la[t[v + 1]]}, Ca);
          Aa(na);
          u < C && (w[M + 1] = ac(g, f.substring(J, C)));
        }
        u = J;
        u >= C && (M += 2);
        u >= fa && (v += 2);
      }
      l && Sa(l, "display", T);
      ia = x;
      N(ta, x, 3, !0);
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
      1 === Ba && (kc ? Z(kc, ta) : bb ? bb.push(function() {
        Z(ta);
      }) : Z(ta));
    };
    var ta = function() {
      function l(M, t) {
        return (M.split(t)[1] || "").split(" ")[0];
      }
      if (!ia) {
        Ba !== qa.length && d && d(Ba - qa.length, Ba);
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
                var p;
                !u && (p = oa(f)) && "CODE" === La(p) && (u = l(p.className, "lang-") || l(p.className, "language-"));
              }
              w = La(f);
              "PRE" === w || "XMP" === w ? w = 1 : (w = f.currentStyle, p = K.defaultView, w = (w = w ? w.whiteSpace : p && p.getComputedStyle ? p.getComputedStyle(f, null).getPropertyValue("white-space") : 0) && "pre" === w.substr(0, 3));
              p = !1;
              (p = "true" === p || +p) || (p = l(y, "linenums:") || Wa(f, "linenums"), p = p.length ? +p : p);
              p && P(f, p, w);
              ia = {W:u, B:f, ba:p, O:w, D:0, v:0, R:{}, s:[]};
              N(e);
              return;
            }
          }
          N(ta, x, 0, !0);
        } else {
          b && b();
        }
      }
    };
    W.PR = {RegExpProxy:L, prettifyElement:ea, registerCompleteHandler:function(l, f) {
      b = l;
      d = f;
    }};
  })();
  var jc = K.scripts || nb("script");
  var va = jc[jc.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  var Nc = Sc || "1" === Ea(wa, "mob");
  Fb = (Nc ? "mb" : "pc") + "/";
  6.1 > ya && (rb ? rb(Yb) : ma(W, "scroll", Yb));
  ob(Ac);
  6.1 > ya && (rb ? rb(Zb) : ma(W, "scroll", Zb));
  ob(Bc);
  10 > z && (11 !== Qc || 5 !== z) || (9 > I || 1 > R || !lb && !W.addEventListener ? K.write('<link href="' + va + "css/" + Fb + Wb + '" rel="stylesheet"' + (8 > I ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > I || 1.5 > R || 534 > sa || 5 > ya || 7 > za || 3 > Ua) && Oa(function() {
    Ga(db, "link", {href:va + "css/" + Fb + Wb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Pb) {
    if (Gb) {
      var kc = function(O) {
        W.RegExpCompat = bz;
        kc = x;
        Hb(va + "js/regexpcompat.js");
        function bz(L) {
          for (var N; N = bb.shift();) {
            N(L);
          }
          bb = x;
          Z(O);
          Ib(va + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      W.RegExpCompat = function(O) {
        for (var L; L = bb.shift();) {
          L(O);
        }
        bb = x;
        Ib(va + "js/regexpcompat.js");
      }, Hb(va + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

