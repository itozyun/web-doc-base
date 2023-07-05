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
(function(La, V, eb, dc, J, Jb, Fc, yb, Ta, Kb, Lb, ec, Mb, w) {
  function ja(K) {
    if (La[0] === K) {
      return Ma === Ma + "" ? Ta(Ma) : Ma;
    }
  }
  function Aa(K) {
    var R = La[3];
    if (La[2] === K) {
      return R === R + "" ? Ta(R) : R;
    }
  }
  function Nb() {
    return 6 > y ? va.scrollTop : y ? fb.scrollTop : V.pageYOffset;
  }
  var va = J.body, Ga = va.style, fb, Ya, gb, Ma = La[1], y = ja(2) || ja(3), hb = ja(7), kb = ja(5) || ja(6), N = ja(8) || ja(9), X = ja(11) || ja(12), zb = X && 0 <= La.conpare(Ma, "1.9.1"), Ab = ja(13), xa = ja(15), Ha = ja(16) || ja(17), fc = ja(10) || ja(25), Ia = ja(20) || ja(22), gc = ja(23), lb = ja(21), Ob = ja(24), Gc = Ia || gc || lb || Ob, hc = Ia && Ta(Jb.userAgent.split("Edg/")[1]), Hc = Ta(Jb.appVersion.split("Trident/")[1]) + 4, Pb = Aa(35) || Aa(36) || Aa(37), Ic = 0 <= Jb.userAgent.indexOf("Googlebot/"), 
  Ua = 0.9 > X, Qb = (hb ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > N ? "opr70" : 8 > N ? "opr72" : 9.5 > N ? "opr" + (N | 0) : X && !zb ? 1.4 <= X ? "gck19" : 1.3 <= X ? "gck13" : 1 <= X ? "gck12" : Ua ? 0.8 <= X ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Bb = "", Jc = Aa(1) || Aa(2) || Aa(3) || Aa(4) || Aa(8) || Aa(9) || Aa(10), ic, Za = 8 > y || 7.2 > N ? !1 : w, jc = Ga.transform !== w ? "transform" : Ga["-o-transform"] !== w ? "-o-transform" : 
  Ga["-ms-transform"] !== w ? "-ms-transform" : Ga.MozTransform !== w ? "-moz-transform" : Ga["-webkit-transform"] !== w ? "-webkit-transform" : "", Na = [], kc = [], Oa = [], Rb, lc, mc, nc, Cb, oc, Db, Eb, pc = !1, Kc = 525 > xa || 3.2 > Ha || 2.2 > lb || 10 > N || X && !zb || ja(25) || 10 > ja(3) || Aa(32) || Aa(30) || Aa(3), fa, tb, Fb, qc, Lc = !!va.getBoundingClientRect, Sb, rc, Tb, sc, Pa = yb.now || function() {
    return +new yb();
  };
  (function() {
    function K() {
      for (var U, F = 0, ha = Pa(); F < ka.length;) {
        ha < ka[0].t ? ++F : (U = ka.splice(F, 1)[0], U.f(U.p));
      }
      la = ka.length ? Lb(K, wa) : 0;
    }
    function R() {
      for (var U, F = 0; F < ca.length; ++F) {
        U = ca[F], U.f();
      }
    }
    function L() {
      ma && (ma = clearInterval(ma));
    }
    function da() {
      la && (la = ec(la));
    }
    Fb = function(U) {
      ca.length || (ma = Mb(R, ba));
      ca.push({f:U, C:++Y});
      return Y;
    };
    qc = function(U) {
      for (var F = ca.length, ha; ha = ca[--F];) {
        if (ha.C === U) {
          ca.splice(F, 1);
          ca[0] || L();
          break;
        }
      }
      return 0;
    };
    Sb = function() {
      ma && (L(), ma = Mb(R, ba));
    };
    rc = L;
    var ca = [], ba = 500, Y = 0, ma;
    if (5 > y || hb) {
      V._wdb_onlooptimer = R, R = "_wdb_onlooptimer()";
    }
    fa = function(U, F, ha) {
      ka.length || (la = Lb(K, wa));
      ka.push({f:U, p:F, C:++na, t:Pa() + (wa < ha ? ha : wa)});
      return na;
    };
    tb = function(U) {
      for (var F = ka.length, ha; ha = ka[--F];) {
        if (ha.C === U) {
          ka.splice(F, 1);
          break;
        }
      }
      return 0;
    };
    Tb = function() {
      la && (da(), la = Lb(K, wa));
    };
    sc = da;
    var ka = [], wa = 16, na = 0, la;
    if (5 > y || hb) {
      V._wdb_ontimer = K, K = "_wdb_ontimer()";
    }
  })();
  var mb, ib, tc, $a, uc, Ja, Va, vc, Ub, Ca, Gb, wc, Vb, ya, ab, xc, Fa, Ba, bb, Wa, nb, yc, Hb, Ra, cb, Wb, Qa, ub, zc;
  (function() {
    function K(a, d, n) {
      var A = ["<", a], b = 1, t, q;
      if (d) {
        for (t in d) {
          var B = d[t];
          if (null != B && "" !== B) {
            if ("style" === t) {
              A[++b] = ' style="';
              for (q in B) {
                for (var D = ++b, S, O = [], Z = q.split(""), H = Z.length; H;) {
                  S = Z[--H], "A" <= S && "Z" >= S && (S = "-" + S.toLowerCase()), O[H] = S;
                }
                A[D] = O.join("") + ":" + B[q] + ";";
              }
              A[++b] = '"';
            } else {
              "className" === t && (t = "class"), A[++b] = " " + t + '="' + B + '"';
            }
          }
        }
      }
      A[++b] = ">";
      null != n && (F && "font" !== a ? A[++b] = "<font>" + R(n) + "</font>" : A[++b] = R(n));
      A[++b] = "</" + a + ">";
      return A.join("");
    }
    function R(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function L(a) {
      var d = a.split("-"), n = d.length;
      if (2 > n) {
        return a;
      }
      for (; 1 < n;) {
        a = d[--n], d[n] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return d.join("");
    }
    function da(a) {
      return ca(J, a);
    }
    function ca(a, d) {
      var n = "*" === d;
      n = F ? n ? a.all : a.all.tags(d.toUpperCase()) : 6 > y && n ? a.all : a.getElementsByTagName(d);
      for (var A = [], b = 0, t = n.length; b < t; ++b) {
        A[b] = n[b];
      }
      return A;
    }
    function ba(a, d) {
      var n = [], A = 0, b, t = -1;
      if (9 > y || !a.getElementsByClassName) {
        var q = 6 > y ? a.all : a.getElementsByTagName("*");
      } else {
        var B = !0;
        q = a.getElementsByClassName(d);
      }
      for (b = q.length; A < b; ++A) {
        var D = q[A];
        if (B || (F || 1 === D.nodeType) && na(D, d)) {
          n[++t] = D;
        }
      }
      return n;
    }
    function Y(a) {
      return F ? a.parentElement : a.parentNode;
    }
    function ma(a, d, n, A, b, t) {
      if (F) {
        var q = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var B = Va(2 > a ? Ja(d) : d);
        B = 2 > a ? B.indexOf(d) + a : B.length;
        d.insertAdjacentHTML(q, K(n, A, b));
        d = Va(d)[B];
        null != b && ("font" === n ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (ha) {
        d = J.createElement(K(n, A));
      } else {
        d = t ? J.createElementNS("http://www.w3.org/2000/svg", n) : J.createElement(n);
        if (A) {
          for (q in A) {
            if ((a = A[q]) || 0 === a) {
              switch(q) {
                case "class":
                case "className":
                  Hb(d, a);
                  break;
                case "style":
                  t = d.style;
                  for (B in a) {
                    t[B] = a[B];
                  }
                  break;
                default:
                  bb(d, q, a);
              }
            }
          }
          !N || "a" !== n && "A" !== n || !A.href || A["tag-index"] || A.tagIndex || bb(d, "tagIndex", "-0");
        }
        aa || null != b && ka(d, b);
      }
      return d;
    }
    function ka(a, d) {
      if (F) {
        return ma(2, a, "font", w, d);
      }
      var n = J.createTextNode("" + d);
      a.appendChild(n);
      return n;
    }
    function wa(a, d) {
      9 > y ? a.className = d : a.setAttribute("class", d);
    }
    function na(a, d) {
      return -1 !== (" " + a.className + " ").indexOf(" " + d + " ");
    }
    function la(a, d, n) {
      if (8 > N || 5.5 > y) {
        d = L(d);
      }
      a.style[d] = n;
    }
    function U(a) {
      return 5.5 > y ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var F = 5 > y;
    fb = da("html")[0];
    Ya = da("head")[0];
    mb = function(a) {
      return V[a] || J[a] || J.getElementById(a);
    };
    ib = da;
    tc = function(a) {
      return ba(J, a);
    };
    $a = ca;
    uc = ba;
    Ja = Y;
    Va = function(a) {
      a = F ? a.children : a.childNodes;
      for (var d = [], n = a.length; n;) {
        d[--n] = a[n];
      }
      return d;
    };
    vc = function(a) {
      var d = !(7.03 < N && 7.2 > N) && a.children;
      a = d ? d : a.childNodes;
      for (var n = [], A = a.length, b = -1, t; A;) {
        if (t = a[--A], d || 1 === t.nodeType) {
          F && "FONT" === t.tagName || (n[++b] = t);
        }
      }
      return n;
    };
    Ub = function(a) {
      return F ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    Ca = function(a, d, n, A, b) {
      d = ma(2, a, d, n, A, b);
      F || (a.appendChild(d), aa && null != A && ka(d, A));
      return d;
    };
    Gb = function(a, d, n, A, b) {
      d = ma(0, a, d, n, A, b);
      F || (Y(a).insertBefore(d, a), aa && null != A && ka(d, A));
      return d;
    };
    wc = ka;
    Vb = function(a, d) {
      var n;
      if (F) {
        return ma(1, a, "font", w, d);
      }
      var A = J.createTextNode("" + d);
      (n = a.nextSibling) ? Ja(a).insertBefore(A, n) : Ja(a).appendChild(A);
      return A;
    };
    ya = function(a) {
      F ? a.outerHTML = "" : (5.5 > y && (a.style.filter = ""), Ja(a).removeChild(a));
    };
    ab = function(a, d) {
      if (a.contains) {
        return a.contains(d);
      }
      for (; d && d !== fb;) {
        if (d = Ja(d), a === d) {
          return !0;
        }
      }
    };
    xc = function(a) {
      return F ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ha = 9 > y, aa = ha;
    Fa = function(a) {
      return a.tagName.toUpperCase();
    };
    Ba = function(a, d) {
      if (8 > N || 5.5 > y) {
        d = L(d);
      }
      var n = a.getAttribute(d);
      return N && "tabIndex" === d ? "-0" === n ? "" : "" === n ? "-1" : n : n || "";
    };
    bb = function(a, d, n) {
      if (N && "tab-index" === d) {
        "-1" === n ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", n);
      } else {
        if (8 > N || 5.5 > y) {
          d = L(d);
        }
        a.setAttribute(d, n);
      }
    };
    Wa = function(a, d) {
      if (N && "tab-index" === d) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > N || 5.5 > y) {
          d = L(d);
        }
        a.removeAttribute(d);
      }
    };
    nb = function(a, d) {
      if (N && "tab-index" === d) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > N || 5.5 > y) {
        d = L(d);
      }
      return a.hasAttribute ? a.hasAttribute(d) : null != a.getAttribute(d);
    };
    yc = function(a) {
      return a.className;
    };
    Hb = wa;
    Ra = na;
    cb = function(a, d) {
      var n;
      if (!na(a, d)) {
        if (n = a.className) {
          n += " ";
        }
        wa(a, n + d);
      }
    };
    Wb = function(a, d) {
      if (na(a, d)) {
        var n = a.className.split(" ");
        n.splice(n.indexOf(d), 1);
        wa(a, n.join(" "));
      }
    };
    Qa = la;
    ub = function(a, d) {
      var n, A = -1, b;
      if (5.5 > y) {
        if (n = U(a)) {
          for (n = n.split(";"); b = n[++A];) {
            la(a, b.split(":")[0], "");
          }
        }
        if (d) {
          for (A = -1, n = d.split(";"); b = n[++A];) {
            var t = b.split(":")[0];
            la(a, t, b.substr(t.length + 1));
          }
        }
      } else if (7.1 > N) {
        if (a.setAttribute("style", ""), d) {
          for (n = d.split(";"); b = n[++A];) {
            b = b.split(":"), la(a, b[0], b[1]);
          }
        }
      } else {
        9 > N || 1 > X ? d ? a.setAttribute("style", d) : a.removeAttribute("style") : a.style.cssText = d;
      }
    };
    zc = U;
    Na.splice(0, 0, function() {
      function a(D) {
        D = Va(D);
        for (var S = D.length, O, Z, H; S;) {
          if (O = D[--S], Z = O.nodeType, 8 === Z) {
            d && q.push(O);
          } else if (1 === Z) {
            switch(Z = Fa(O), "/" === Z.charAt(0) && (Z = Z.substr(1), B[Z] = !0), Z) {
              case "STYLE":
                if (7.2 <= N && 9 > N) {
                  break;
                }
              case "LINK":
                F || A || ab(Ya, O) || t.push(O);
                break;
              case "META":
                Z = Ba(O, "name") || Ba(O, "property");
                for (H = b.length; H;) {
                  if (0 === Z.indexOf(b[--H])) {
                    q.push(O);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Ic || nb(O, "async")) {
                  break;
                }
                if (n) {
                  O.innerText = "";
                  n = !1;
                  break;
                }
              case "NOSCRIPT":
                if (nb(O, "skip-cleanup")) {
                  break;
                }
              case "!":
                q.push(O);
                break;
              case "SOURCE":
                V.HTMLSourceElement || q.push(O);
                break;
              default:
                B[Z] ? q.push(O) : Va(O).length && a(O);
            }
          }
        }
        for (; t[0];) {
          Ya.appendChild(t.pop());
        }
        for (; q[0];) {
          ya(q.pop());
        }
      }
      Wb(fb, "nojs");
      gb = mb("jsMain");
      var d = !(8 > N || 5 > y || hb || Ua), n = nc, A = 7 > y, b = ["og:", "twitter:", "fb:"], t = [], q = [], B = {};
      a(fb);
    });
  })();
  var oa, Da, Ka, jb, Xb, ob, pb, vb, Yb, Zb, Ac, Bc, Cc, wb, Ea, $b;
  (function() {
    function K() {
      return v ? x ? 2 : E ? 3 : 1 : 0;
    }
    function R(e) {
      Da(V, "load", R);
      R = w;
      da(Na, e, !0);
      Ka = Na = w;
    }
    function L(e, h) {
      pb(function() {
        var u = la(e);
        h(u);
        u.addListener(h);
        return !0;
      });
    }
    function da(e, h, u) {
      for (var r = 0; r < e.length; ++r) {
        !0 === e[r](h) && (e.splice(r, 1), --r);
      }
      u && (e.length = 0);
    }
    function ca(e, h, u) {
      Na || F.length || fa(ba);
      F.push(e, h, u);
    }
    function ba() {
      var e = F, h;
      for (F = []; h = e.shift();) {
        da(h, e.shift(), e.shift());
      }
    }
    function Y(e) {
      var h = e || event;
      e = aa[h.type];
      var u = -1, r, G;
      5 > y ? h = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : y ? (h.target = h.srcElement, h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : d && (h.K = h.stopPropagation, h.stopPropagation = function() {
        G = !0;
      });
      for (; r = e[++u];) {
        r.j === this ? (this.g = r.i, y && (h.currentTarget = this), this.g(h), y ? (this.g = eb, this.g = w) : delete this.g) : 7.2 > N && this === J && r.j === V && (V.g = r.i, V.g(h), delete V.g);
      }
      if (y) {
        return h.preventDefault = h.stopPropagation = eb, h.preventDefault = h.stopPropagation = w, h.returnValue;
      }
      d && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (A = !0), G && !A && h.K(), h.K = h.stopPropagation = w);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var e = 9 === U.offsetWidth;
      wb !== e && ca(kc, wb = e);
    }
    function ka() {
      !Na && m && (tb(m), m = fa(wa));
    }
    function wa() {
      m = 0;
      da(f);
    }
    function na(e) {
      Na || da(z, e);
    }
    var la = V.matchMedia, U, F = [];
    Na.push(function() {
      L = w;
      U = Ca(va, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ka(function() {
        F.length && fa(ba);
      });
    });
    oa = function(e, h, u, r) {
      if (n) {
        e.addEventListener(h, u, r ? ha ? r : r.capture || !0 === r : !1);
      } else {
        var G = {j:e, i:u};
        r = aa[h];
        var qa = "on" + h, za, db;
        if (r) {
          for (za = r.length; db = r[--za];) {
            if (db.j === e && db.i === u) {
              return;
            }
          }
          aa[h].push(G);
        } else {
          aa[h] = r = [G], a || (h = e[qa], "function" === typeof h && h !== Y && r.unshift({j:e, i:h}));
        }
        a ? e.attachEvent(qa, Y) : e[qa] = Y;
      }
    };
    Da = function(e, h, u, r) {
      if (n) {
        e.removeEventListener(h, u, r ? ha ? r : r.capture || !0 === r : !1);
      } else {
        r = aa[h];
        h = "on" + h;
        var G, qa, za;
        if (r) {
          for (G = r.length; qa = r[--G];) {
            qa.j === e && (qa.i === u ? r.splice(G, 1) : za = !0);
          }
          za || (a ? e.detachEvent(h, Y) : y ? (e[h] = eb, e[h] = null) : delete e[h]);
        }
      }
    };
    var ha = !y && !hb && (new Fc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), aa = {}, a = !1, d = 525.13 > xa, n = !d && !hb && V.addEventListener, A;
    d && fb.addEventListener("click", function(e) {
      if (A) {
        return A = !1, e.preventDefault(), !1;
      }
    });
    Ka = function(e) {
      Na.push(e);
    };
    jb = function(e) {
      b && b.push(e);
    };
    var b = [];
    if (419.3 >= xa) {
      var t = function() {
        if (t) {
          var e = J.readyState;
          "loaded" === e || "complete" === e ? (t = w, R()) : fa(t);
        }
      };
      fa(t);
    } else {
      oa(V, "load", R);
    }
    y || !Ua && 1.8 > X ? oa(V, "unload", function(e) {
      da(b, e, !0);
    }) : b = w;
    pb = function(e) {
      kc.push(e);
    };
    Ka(function() {
      ma();
      Fb(ma);
    });
    Zb = function(e, h) {
      if (q) {
        oa(e, "focusin", h);
      } else if (B) {
        oa(e, "DOMFocusIn", h);
      } else {
        if (S) {
          P || (P = Mb(g, 333));
        } else if (D || O) {
          oa(J, "focus", H, !0);
        } else {
          return;
        }
        for (var u = Z, r = 0, G = u.length; r < G; ++r) {
          if (u[r] === e && u[r + 1] === h) {
            return;
          }
        }
        u.push(e, h);
      }
    };
    Ac = function(e, h) {
      if (q) {
        oa(e, "focusin", h);
      } else if (B) {
        oa(e, "DOMFocusIn", h, !1);
      } else {
        for (var u = Z, r = 0, G = u.length; r < G; ++r) {
          if (u[r] === e && u[r + 1] === h) {
            u.splice(r, 2);
            u.length || (S ? P = qc(P) : (D || O) && Da(J, "focus", H, !0));
            break;
          }
        }
      }
    };
    var q = 6 <= y || kb || 52 <= X || 15 <= Ia || 534 <= xa || 5 <= Ha || gc || 4 <= lb || 4 <= Ob || 11.6 <= ja(8) || 12 <= ja(9), B = 8 <= N || Ia || lb || Ob || xa || Ha, D = 8 > N, S = 6 > y, O = 52 > X || Ab;
    if (O || D) {
      var Z = [];
      var H = function(e) {
        var h = Z, u = D ? J.activeElement : e.target;
        if (D) {
          var r = e;
          e = {type:"focusin", target:u, preventDefault:function() {
            r.preventDefault();
          }, stopPropagation:function() {
            r.stopPropagation();
          }};
        }
        for (var G = 0, qa = h.length; G < qa; ++G) {
          var za = h[G];
          (za === u || ab(za, u)) && h[G + 1].call(za, e);
        }
      };
    } else if (S) {
      Z = [];
      var P, ea, T, g = function() {
        T = V.onerror;
        V.onerror = k;
        var e = J.activeElement;
        if (ea !== e) {
          ea = e;
          for (var h = Z, u, r = 0, G = h.length; r < G; ++r) {
            u = h[r], (u === e || ab(u, e)) && h[r + 1].apply(u, [{target:e}]);
          }
        }
        V.onerror = T;
        T = w;
      }, k = function() {
        V.onerror = T;
        T = ea = w;
        return !0;
      };
    }
    Yb = function(e) {
      Oa && Oa.push(e);
    };
    var C = 60 > X || Ab, v, E, x;
    if (89 <= X || 89 <= Ia || Pb && 79 <= hc || la && (la("(forced-colors:none)").matches || la("(forced-colors:active)").matches)) {
      $b = !0, L("(forced-colors:active)", function(e) {
        v = e.matches;
        Ea = K();
        ca(Oa, Ea);
      });
    } else if (10 <= y || kb || Pb && hc) {
      $b = !0, L("(-ms-high-contrast:black-on-white)", function(e) {
        v = E = e.matches;
        Ea !== K() && (Ea = K(), ca(Oa, Ea));
      }), L("(-ms-high-contrast:white-on-black)", function(e) {
        v = x = e.matches;
        Ea !== K() && (Ea = K(), ca(Oa, Ea));
      }), L("(-ms-high-contrast:active)", function(e) {
        v = e.matches;
        Ea !== K() && (Ea = K(), ca(Oa, Ea));
      });
    } else if (Pb && (y || X && 0 <= La.conpare(Ma, "1.8.1") || Ab)) {
      var W = function() {
        function e(r, G) {
          if (G && "transparent" === r) {
            return 382.5;
          }
          if ("#" === r.charAt(0)) {
            return parseInt("0x" + r.substr(1, 2), 16) + parseInt("0x" + r.substr(3, 2), 16) + parseInt("0x" + r.substr(5, 2), 16);
          }
          var qa = r.split("(")[1].split(",");
          return Ta(qa[0]) + Ta(qa[1]) + Ta(qa[2]);
        }
        var h = J.defaultView;
        var u = h ? h.getComputedStyle(U, null) : U.currentStyle;
        h = (u && u.color || "").split(" ").join("");
        u = (u && u.backgroundColor || "").split(" ").join("");
        h && (v = "#123456" !== h && "rgb(18,52,86)" !== h, E = e(h) < e(u, !0), x = e(h) > e(u, !0), Ea !== K() && (Ea = K(), ca(Oa, Ea, C)));
      };
      pb(function(e) {
        if (e) {
          return Qa(U, "color", "#123456"), Qa(U, "backgroundColor", "#123456"), C ? (W(), Oa = w) : Fb(W), W = w, !0;
        }
      });
    } else {
      Oa = K = w;
    }
    vb = function(e) {
      c.push(e);
    };
    var c = [], l = 7.5 <= N && 8 > N;
    l && function() {
      for (var e = J.images, h = e.length, u; h;) {
        u = e[--h], u.J = u.src, Wa(u, "src");
      }
    }();
    Ka(function() {
      function e() {
        r ? (G = u[--r], l && bb(G, "src", G.J), lc(h, l ? G.J : G.src)) : vb = c = w;
      }
      function h(za) {
        da(c, {G:G, H:za}, !r);
        e();
      }
      var u = J.images || ib("img"), r = u.length;
      if (12 > N || 532 > xa) {
        e();
      } else {
        for (; r;) {
          var G = u[--r];
          var qa = 9 > y ? G.complete : 0 <= G.naturalWidth ? G.naturalWidth : G.width;
          ca(c, {G:G, H:qa}, !r);
        }
        vb = c = w;
      }
    });
    Xb = function(e) {
      f.push(e);
    };
    var f = [], m;
    oa(V, "resize", ka);
    jb(function() {
      m && ec(m);
      Da(V, "resize", ka);
    });
    ob = function(e) {
      z.push(e);
    };
    var z = [], p = 1 > X || 1.2 <= X && 1.8 > X || 7.2 >= N, I;
    p ? Fb(function() {
      var e = V.pageYOffset;
      I !== e && (I = e, na({type:"scroll", cancelable:!1, stopPropagation:eb, preventDefault:eb}));
    }) : oa(V, "scroll", na, {passive:!0});
    jb(function() {
      p || Da(V, "scroll", na, {passive:!0});
    });
    Bc = function(e, h) {
      if (M) {
        oa(e, "wheel", h, {passive:!1});
      } else if (Q) {
        oa(e, "mousewheel", h, !1);
      } else if (ta) {
        oa(e, "MozMousePixelScroll", h, !1);
      } else if (ia) {
        for (var u = pa, r = 0, G = u.length; r < G; ++r) {
          if (u[r] === e && u[r + 1] === h) {
            return;
          }
        }
        u.length || oa(J, "DOMMouseScroll", ra, !1);
        u.push(e, h);
      }
    };
    Cc = function(e, h) {
      if (M) {
        Da(e, "wheel", h, {passive:!1});
      } else if (Q) {
        Da(e, "mousewheel", h, !1);
      } else if (ta) {
        Da(e, "MozMousePixelScroll", h, !1);
      } else if (ia) {
        for (var u = pa, r = 0, G = u.length; r < G; ++r) {
          if (u[r] === e && u[r + 1] === h) {
            u.splice(r, 2);
            u.length || Da(J, "DOMMouseScroll", ra, !1);
            break;
          }
        }
      }
    };
    var M = 9 <= y || kb || 17 <= X || 31 <= Ia || 537.7 <= xa, Q = 6 <= y || kb || 9 <= N || Ia || 522 <= xa || Ha, ta = zb, ia = X && 0 <= La.conpare(Ma, "0.9.7") && !zb;
    if (ia) {
      var pa = [], ra = function(e) {
        for (var h = pa, u = e.target, r, G = 0, qa = h.length; G < qa; ++G) {
          r = h[G], ab(r, u) && h[G + 1].call(r, e);
        }
      };
    }
  })();
  (function() {
    function K(H) {
      ha(H);
      O && !H && ya(O);
      ha = aa = a = d = n = A = B = D = S = Z = O = w;
    }
    function R(H) {
      J.fonts.load('1.6em "' + H + '"').then(function() {
        var P;
        (P = ca(aa)) ? fa(K, P) : da(!0);
      }, function() {
        Za !== w ? ba(Za) : Rb(ba);
      });
    }
    function L(H) {
      return J.hidden || J.msHidden || J.mozHidden || J.webkitHidden ? (q = Pa(), !1) : H < Pa() - q;
    }
    function da(H) {
      var P;
      H && (q = Pa());
      (P = ca(aa, b)) ? K(P) : L(b) ? B || ka ? K(0) : Za !== w ? ba(Za) : Rb(ba) : fa(da);
    }
    function ca(H) {
      var P = 0, ea = -1, T = 0, g = U && [];
      if (!Z) {
        var k = -1;
        var C;
        D = Ca(va, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, t);
        for (Z = []; C = F[++k];) {
          Qa(D, "fontFamily", C), Z[k] = D.offsetWidth;
        }
      }
      for (5 > y ? D || (D = Ca(va, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, t)) : va.appendChild(D); k = F[++ea];) {
        Qa(D, "fontFamily", '"' + H + '",' + k);
        var v = D.offsetWidth;
        if (g) {
          g[ea] = v;
        } else {
          if (v !== Z[ea]) {
            P = 1;
            break;
          }
        }
      }
      if (g && v === g[0] && v === g[1]) {
        for (P = 1, ea = -1; v = Z[++ea];) {
          if (v === g[0] && v === g[1] && v === g[2]) {
            P = 0;
            break;
          }
        }
      }
      !y && P && n && (D.textContent = n, v = D.offsetWidth, D.textContent = A, T = v === D.offsetWidth ? 1 : 0, D.textContent = t);
      ya(D);
      5 > y && (D = w);
      return P + T;
    }
    function ba(H) {
      H ? (B = !0, Y(!0)) : K(0);
    }
    function Y(H) {
      var P;
      if (a) {
        for (P in H && (q = Pa()), a) {
          ca(P, na) ? (S = Ca(va, "div", {"aria-hidden":"true", className:d, id:d}), O = Ca(Ya, "link", {type:"text/css", rel:"stylesheet", href:a[P]}), fa(ma, !0)) : L(na) ? (delete a[P], fa(Y, !0)) : fa(Y);
          return;
        }
      }
      K(0);
    }
    function ma(H) {
      H && (q = Pa());
      1 < S.offsetWidth ? (ya(S), b = na, fa(da, !0)) : L(b) ? 528 > xa || 4 > Ha ? (ya(S), b = na, fa(da, !0)) : (ya(S), K(0)) : fa(ma);
    }
    Rb = !1 === Za ? function(H) {
      fa(H, !1);
    } : function(H) {
      function P(g) {
        T = tb(T);
        Za = g;
        ea.onload = ea.onerror = eb;
        fa(H, g);
      }
      if (Za !== w) {
        fa(H, Za);
      } else {
        var ea = new Image(), T = fa(function() {
          T && P(!1);
        });
        ea.onerror = function() {
          P(!1);
        };
        ea.onload = function() {
          P(1 === ea.width * ea.height);
        };
        ea.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > y && Ka(function() {
      var H = Ca(va, "div");
      ub(H, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ic = 1 < H.offsetHeight;
      ya(H);
    });
    lc = function(H, P) {
      function ea() {
        g || !k || T.complete ? (fa(H, !!T.width), T.onerror = T.onload = eb, T = H = w) : (--k, fa(ea));
      }
      var T = new Image(), g, k = 99;
      T.onerror = function() {
        g = !0;
      };
      T.onload = function() {
        g = !0;
      };
      T.src = P;
      fa(ea);
    };
    mc = function(H, P, ea, T, g, k, C, v) {
      ha = H;
      aa = P;
      a = ea;
      d = T;
      n = g;
      A = k;
      b = C || wa;
      t = v || la;
      Kc ? fa(K, 0) : !J.fonts || 603 > xa || 11 > Ha ? da(!0) : R(aa);
    };
    var ka = 9 > y || 2 > Ia || 12 > N, wa = 5E3, na = 500, la = "mmmmmmmmmmlliiiiiiiii", U = 7 > Ha || xa && 0 >= La.conpare(Ma, "536.11"), F = Ia ? ["sans-serif", "serif"] : ["monospace", "sans-serif", "serif"], ha, aa, a, d, n, A, b, t, q, B, D, S, O, Z;
  })();
  (function() {
    function K(b) {
      var t = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== b) {
        var q = tc("ico"), B = 0, D = q.length;
        if (D) {
          if (1 === b) {
            for (; B < D; ++B) {
              b = q[B];
              var S = xc(b);
              if (S = t[S]) {
                b.innerHTML = S;
              }
            }
          } else {
            A && !n && (V.VectorIconCompat = bz, Db(sa + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Eb(sa + "js/vector-icon-svg-fallback.js");
        return [t, q, Ca, n];
      }
      bz = !1;
    }
    vb(function(b) {
      var t = b.G;
      b = b.H;
      var q = Ja(t);
      !Ra(q, "aBodyRoot") && b ? cb(q, "js-image-has-been-loaded") : b || Ba(t, "alt") || "lazy" === Ba(t, "loading") || Qa(t, "display", "none");
    });
    Ua && (Na.splice(1, 0, function() {
      for (var b = uc(gb, "RichLink-sep"), t, q, B, D, S, O; t = b.shift();) {
        for (t = Va(t); q = t.shift();) {
          if ("A" === Fa(q) && !q.innerHTML) {
            for (; B = t.shift();) {
              if (1 === B.nodeType) {
                if ("A" === Fa(B)) {
                  break;
                }
                for (D = $a(B, "A"); S = D.shift();) {
                  for (O = Va(S); O.length;) {
                    S.parentNode.insertBefore(O.shift(), S);
                  }
                  ya(S);
                }
              }
              q.appendChild(B);
            }
          }
        }
      }
    }), Na.splice(2, 0, function() {
      for (var b = ib("A"), t, q; t = b.shift();) {
        "A" !== Fa(t) || t.innerHTML || (q = t.nextSibling && t.nextSibling.firstChild) && q.href === t.href && ya(t);
      }
    }));
    5.5 <= y && 8 > y && Oa && Yb(function(b) {
      for (var t = $a(va, "a"), q = t.length, B = 0; B < q; ++B) {
        t[B].hideFocus = !b;
      }
    });
    if (!$b && Oa) {
      var R, L = function() {
        R = Ca(Ya, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:sa + "css/" + Bb + "hc/" + Qb});
        (jc || 5.5 <= y && 9 > y && ic) && cb(va, "js-canuse-css-rotate-when-forced-colors-mode");
        L = w;
      };
      Yb(function(b) {
        b && !R ? L() : R && (b ? Ya.appendChild(R) : ya(R));
      });
    }
    N && Ka(function() {
      for (var b = $a(va, "a"), t = b.length, q = 0, B; q < t; ++q) {
        B = b[q], "-1" === Ba(B, "tabIndex") ? Wa(B, "tabIndex") : Ba(B, "href") && bb(B, "tabIndex", "0");
      }
      b = $a(va, "input");
      q = 0;
      for (t = b.length; q < t; ++q) {
        B = b[q], "hidden" === Ba(B, "type") && Wa(B, "tabIndex");
      }
    });
    if (X && 0 > La.conpare(Ma, "0.9.5")) {
      pc = !0;
      var da, ca, ba, Y, ma;
      Ka(function() {
        oa(J, "keydown", ka);
        oa(J, "keyup", wa);
        Zb(va, na);
        Ua || (oa(V, "blur", aa), oa(va, "click", ha));
      });
      var ka = Ua ? function(b) {
        16 === b.keyCode ? da = !0 : 9 === b.keyCode && Y && la(Y, !0) && (Y.blur && Y.blur(), b.stopPropagation(), b.preventDefault(), fa(F));
      } : function(b) {
        16 === b.keyCode ? da = !0 : 9 === b.keyCode && (ca = Pa());
      }, wa = function(b) {
        16 === b.keyCode && (da = !1);
      }, na = Ua ? function(b) {
        Y = b.target;
      } : function(b) {
        var t = b.target;
        if (Y === t) {
          ba = w;
        } else if (ba) {
          t === ba ? (b.stopPropagation(), F(!0)) : (t.blur && d(t), b.preventDefault(), F());
        } else {
          if (b = Y) {
            Y = w, d(b);
          }
          ba = t;
          F(!0);
        }
      }, la = function(b, t) {
        var q = Pa(), B = va, D = "nextSibling", S = "firstChild";
        da && (t || q - 99 < ca && ca <= q) && (D = "previousSibling", S = "lastChild");
        for (ba = w; b !== B;) {
          if (O) {
            q = b;
            var O = !1;
          } else {
            q = b[D];
          }
          if (q) {
            if (1 === q.nodeType) {
              if (U(q)) {
                return ba = q, !0;
              }
              b = (O = q[S]) || q;
            } else {
              b = q;
            }
          } else {
            b = b.parentNode;
          }
        }
      }, U = function(b, t) {
        function q() {
          return "-1" !== Ba(b, "tab-index");
        }
        function B() {
          return 0 < b.offsetHeight * b.offsetWidth;
        }
        if (b.focus) {
          var D;
          switch({A:t ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Fa(b)]) {
            case 1:
              if (nb(b, "href") && q() && B()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ba(b, "type") && q() && !nb(b, "disabled") && B()) {
                return !0;
              }
              break;
            case 3:
              if (q() && !nb(b, "disabled") && B()) {
                return !0;
              }
              break;
            default:
              if ((D = Ba(b, "tab-index")) && "-1" !== D && B()) {
                return !0;
              }
          }
        }
      }, F = function(b) {
        ma = 0;
        ba && (Ua || oa(ba, "blur", a), Y = ba, ba = w, b || Y.focus());
      };
      if (!Ua) {
        var ha = function(b) {
          var t = b.target;
          if (Y && U(t, !0)) {
            var q = Y;
            Y = w;
            d(q);
            ba = t;
            b.stopPropagation();
            b.preventDefault();
            F();
          }
        }, aa = function(b) {
          b.target === J && (ba = w);
        }, a = function(b) {
          b = b.target;
          Da(b, "blur", a);
          Y === b && la(b) && (ma || (ma = fa(F)));
        }, d = function(b) {
          Da(b, "blur", a);
          b.blur();
        };
      }
    }
    pb(function(b) {
      if (b) {
        return b = {}, y && (b.myIconFont_canEOT = sa + "iconfont/eot.css"), b.myIconFont_canWOFF2 = sa + "iconfont/woff2.css", b.myIconFont_canWOFF = sa + "iconfont/woff.css", b.myIconFont_canTTF = sa + "iconfont/ttf.css", b.myIconFont_canOTF = sa + "iconfont/otf.css", b.myIconFont_canSVG = sa + "iconfont/svg.css", mc(K, "myIconFont", b, "myIconFont-testCssReady", "twitter", "\ud83d\udc24", 5E3), K = w, !0;
      }
    });
    var n = 8 <= ja(8) && 9 > N, A = 9 <= y || kb || 1.8 <= X || 8 <= ja(8) || 9 <= ja(9) || 3 <= ja(21) || Ab || Gc || 312.6 <= xa && 312.7 >= xa || 419.3 <= xa || Ha;
  })();
  (function() {
    function K(c) {
      var l = ha.length, f, m, z, p;
      if (13 === (c.keyCode || c.ba) || c.type !== aa) {
        for (; l;) {
          var I = ha[--l];
          if (I.F === this || I.u === this) {
            l = I.F;
            var M = f = I.u;
            if (I.P) {
              if (Qa(l, "width", I.Z), l.src = I.Y, Hb(M, I.T), l = I.L) {
                ub(l, I.S), Wb(l, "js-captioned-thumbnail__large");
              }
            } else {
              if (m = I.N) {
                delete I.N;
                if (I.M) {
                  for (; f = Ja(f);) {
                    if (!Ra(f, "caption")) {
                      var Q = Fa(f);
                      if ("DIV" === Q || "P" === Q || "BLOCKQUOT" === Q || "LI" === Q || "DD" === Q || "TD" === Q || "TH" === Q || "FORM" === Q || "PRE" === Q) {
                        break;
                      }
                    }
                  }
                  f = (f.offsetWidth | 0) - 4;
                  1600 < f && (f = 1600);
                  if (2 === I.M) {
                    m = m.split("=");
                    Q = m.length;
                    if (z = m[Q - 1]) {
                      (p = Ta(z.substr(1))) && z === "s" + p ? m[Q - 1] = "w" + f : m[Q] = "w" + f;
                    }
                    m = m.join("=");
                  } else {
                    m = m.split("/");
                    Q = m.length;
                    if (z = m[Q - 2]) {
                      (p = Ta(z.substr(1))) && z === "s" + p ? m[Q - 2] = "w" + f : m.splice(Q - 1, 0, "w" + f);
                    }
                    m = m.join("/");
                  }
                }
                I.W = m;
              }
              I.T = yc(M);
              cb(M, "js-pica-thumbnail__large");
              Qa(l, "width", "");
              l.src = I.W;
              if (l = I.L) {
                ub(l, ""), cb(l, "js-captioned-thumbnail__large");
              }
            }
            I.P = !I.P;
            break;
          }
        }
        R(c);
      }
    }
    function R(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function L(c) {
      var l = P;
      if (wb) {
        if (ea && !l) {
          if (Pa() < ea) {
            return;
          }
          ea = w;
        }
        7 === c ? T = 0 : (T && (T = tb(T)), Z = Nb());
        l ? (P = da(w, l[0], l[1])) || (ea = Pa() + 99) : da();
      } else {
        P = w;
      }
    }
    function da(c, l, f) {
      function m(Sa) {
        M = Sa;
        if (S) {
          Q = S + ":translate" + (H ? "3D(0," : "(0,") + Sa + (H ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Sa) {
          if (A || b) {
            var ac = q.offsetWidth;
          }
          Q = A ? "position:fixed;width:" + ac + "px;top:" + (Sa - z + pa) + "px" : t ? "top:" + Sa + "px" : "position:absolute;top:" + Sa + "px;left:0";
          if (b && Q) {
            var xb = 8 > y ? " " : ",";
            Q += ";clip:rect(" + (0 > Sa ? -Sa + "px" + xb + ac + "px" + xb + u : "0" + xb + ac + "px" + xb + (Sa + u < r ? u : r - Sa)) + "px" + xb + "0)";
          }
        }
      }
      var z = Z, p = B, I = q.offsetTop === p.offsetTop, M = 0, Q = "", ta = !0;
      if (I) {
        for (var ia = 0, pa = 0, ra = p; ra && ra !== va;) {
          pa += ra.offsetTop, ra = ra.offsetParent;
        }
        M = O;
        var e = 11 > y ? fb.offsetHeight : V.innerHeight, h = p.offsetHeight, u = D.offsetHeight, r = u < h ? h : u, G = z, qa = G + e, za = pa, db = za + r, Dc = pa + M, Mc = Dc + u;
        p = G < za ? za : G;
        ra = db < qa ? db : qa;
        var qb = ra - p;
        G = db <= G;
        qa = qa <= za;
        if (l !== w) {
          ta = pa + l;
          c = ta + f;
          var rb;
          if (G || qa) {
            return e <= f ? rb = pa : rb = G ? db - f : pa + f - e, ea = w, V.scroll(0, rb), P;
          }
          u <= qb ? ia = 3 : f <= qb ? u - l <= qb ? ia = 2 : p <= ta && c <= ra ? p < pa + M && (ia = 4) : ia = p <= ta && ta <= ra ? 5 : p <= c && c <= ra ? 4 : c < p ? 4 : 5 : ia = 4;
          ta = !1;
        } else {
          c !== w ? u <= qb ? (ia = 7, ta = !1) : (M -= 60 * c, ia = ra - pa - u, rb = p - pa, M < ia ? M = ia : rb < M && (M = rb), ia = 6) : h <= u || (G ? ia = 1 : qa || (u <= qb ? ia = 3 : p < Dc ? ia = 3 : Mc < ra ? ia = 2 : z < pa + u - qb || (ia = 2)));
        }
        switch(ia) {
          case 0:
            m(0);
            break;
          case 1:
            m(r - u);
            break;
          case 2:
            m(ra - pa - u);
            break;
          case 3:
            m(p - pa);
            break;
          case 4:
            m(p - pa - l);
            break;
          case 5:
            m(ra - pa - (l + f));
          case 6:
            m(M);
        }
      }
      ub(D, Q);
      O = M;
      return I && ta;
    }
    function ca(c) {
      if (wb && (X && (Z = Nb()), this !== c.target)) {
        var l = Kb(c.deltaY) ? c.deltaY : Kb(c.wheelDeltaY) ? c.wheelDeltaY / 120 : Kb(c.wheelDelta) ? c.wheelDelta / -120 : c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1);
        l && da(9 >= l ? -9 >= l ? -3 : l : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function ba(c) {
      if (wb) {
        var l = X && 0 > La.conpare(Ma, "0.9.4"), f = c.target;
        c = D;
        var m = 0;
        if (ab(c, f)) {
          if (S) {
            l = f.getBoundingClientRect();
            var z = l.bottom - l.top;
            m = l.top - c.getBoundingClientRect().top | 0;
          } else {
            z = f.offsetHeight;
            var p = f;
            if (l) {
              for (var I = []; p && (X ? ab(c, p) : c !== p);) {
                for (; p.previousSibling;) {
                  p = p.previousSibling, p.tagName && I.unshift(p.tagName + ":" + p.offsetTop);
                }
                p = p.offsetParent;
              }
              p = f;
            }
            for (; p && (X ? ab(c, p) : c !== p);) {
              if (l) {
                for (; p.previousSibling;) {
                  p = p.previousSibling, m += p.offsetHeight || 0;
                }
                p = p.parentNode;
              } else {
                m += p.offsetTop, p = p.offsetParent;
              }
            }
          }
          n ? (P = [m, z], T && tb(T), T = fa(L, 7, 1 > X || 536 > xa || 14 > Ia ? 500 : 0)) : (Z = Nb(), da(w, m, z));
        }
      }
    }
    function Y() {
      g.call(k);
    }
    function ma() {
      J.fullscreenElement || J.fullscreen || J.webkitIsFullscreen || J.msFullscreenElement || V.fullScreen ? (bb(k, "id", "blog2slide-root"), E[1].parentNode.insertBefore(C, E[1]), ka(), J.onkeydown = wa) : v && (ya(C), Wa(k, "id"), Wa(v, "id"), v = J.onkeydown = w);
    }
    function ka() {
      v && Wa(v, "id");
      x = 0 < x ? W < x ? W : x : 0;
      v = E[x];
      bb(v, "id", "blog2slide-current");
    }
    function wa(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++x, ka();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --x, ka();
      }
    }
    oc = X && 0 >= La.conpare(Ma, "0.9");
    Cb = !(7.2 > N || oc);
    Db = function(c) {
      na ? J.write('<script src="' + c + '">\x3c/script>') : Na || U.length ? U.push(c) : F(c);
    };
    Eb = function() {
      na || F(U.shift());
    };
    var na = !Cb, la = Cb && 7.5 > N;
    if (!na) {
      var U = [];
      la && (nc = !0);
      Ka(function() {
        F(U.shift());
      });
      var F = function(c) {
        c && (la ? bc[0].src = c : Ca(Ya, "script", {src:c}));
      };
    }
    var ha = [], aa = 5.5 <= y && 8 > y ? "keypress" : "keydown";
    if (!fc) {
      var a = Ga.transition !== w || Ga["-o-transition"] !== w || Ga["-moz-transition"] !== w || Ga["-webkit-transition"] !== w;
      vb(function(c) {
        if (c.H && gb) {
          c = c.G;
          var l = Ja(c), f = "", m;
          if ("A" === Fa(l) && 1 === vc(l).length) {
            var z = Ba(l, "href");
            var p = z.split("?")[0].split("#")[0].split(".");
            p = (p[p.length - 1] || "").toLowerCase();
            if ((m = 0 < z.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + p + ".")) {
              oa(l, aa, K);
              oa(c, "click", K);
              oa(l, "click", R);
              a && (f = c.naturalWidth + "px", Qa(c, "width", f));
              cb(l, "js-pica-thumbnail");
              for (p = l; p = Ja(p);) {
                if (Ra(p, "caption")) {
                  cb(p, "js-captioned-thumbnail");
                  var I = p;
                  var M = zc(I);
                  break;
                }
              }
              ha.push({u:l, L:I, S:M, Y:c.src, Z:f, N:z, F:c, M:m ? 0 < z.indexOf("/img/a/") ? 2 : 3 : 0 < z.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      jb(function(c, l) {
        for (c = -1; l = ha[++c];) {
          Da(l.u, aa, K), Da(l.F, "click", K), Da(l.u, "click", R);
        }
      });
    }
    var d = ["jsSidebarFixer1", "jsSidebarFixer2"], n = !(9 > y || N || 1 <= X && 1.3 > X || pc), A = !(5 > Ha || 2.2 > lb || 6 > ja(12) || Aa(30) && 534 > xa || Aa(32) || 7 > y || 9 > N || 1 > X), b = A || 6 === y || 1 > X, t = 7.5 > N, q, B, D, S = Lc && jc, O = 0, Z = 0, H, P, ea, T;
    Ec || fc || (pb(function(c) {
      if (c) {
        if (!gb) {
          return !0;
        }
        c = -1;
        var l;
        q = mb("jsSide");
        B = gb;
        if (!q) {
          return !0;
        }
        ob(L);
        Xb(L);
        D = Gb(Ub(q), "div", {id:"jsSidebarFixer"});
        for (Zb(D, ba); 1 < Va(q).length;) {
          D.appendChild(Va(q)[1]);
        }
        for (; l = d[++c];) {
          Bc(mb(l), ca);
        }
        y || kb || 2 > Ia || (H = Ga.perspective !== w || Ga.MozPerspective !== w || Ga["-webkit-perspective"] !== w);
        L();
        return !0;
      }
    }), jb(function() {
      for (var c = -1, l; l = d[++c];) {
        Cc(mb(l), ca);
      }
      Ac(D, ba);
    }));
    Ka(function() {
      function c(I, M, Q, ta) {
        var ia = ta ? "div" : "cite";
        if (0 === M.indexOf("urn:isbn:")) {
          M = M.substr(9).toUpperCase().split("-").join("");
          if (13 === M.length) {
            M = M.toString().slice(3, -1);
            for (var pa = 0, ra = 0; 9 > ra; ra++) {
              pa += (M.charAt(ra) - 0) * (10 - ra);
            }
            pa = (11 - pa % 11) % 11;
            pa = 10 === pa ? "X" : pa.toString();
            M += pa;
          }
          10 === M.length && (M = "//www.amazon.co.jp/exec/obidos/ASIN/" + M + "/itozyun-22/ref=nosim/");
        }
        Q = ta ? Gb(Ub(f), ia, {className:Q}) : Ca(f, ia, {className:Q});
        Ca(Q, "a", 0 === M.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:M} : {href:M}, I);
      }
      if (gb) {
        for (var l = $a(gb, "blockquote"), f, m = -1, z, p; f = l[++m];) {
          z = Ba(f, "title"), p = Ba(f, "cite"), z && p ? (Wa(f, "title"), c(z, p, "js-generated-link-in-blockquote", !0)) : p && (Wa(f, "cite"), c(V.decodeURI ? decodeURI(p) : p, p, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var g, k, C, v, E, x, W;
    Ka(function() {
      var c = mb("blog2slide-start");
      if (c) {
        var l = J.onfullscreenchange !== w ? "f" : J.onmozfullscreenchange !== w ? "mozF" : J.onwebkitfullscreenchange !== w ? "webkitF" : 0;
        g = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== l || g ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', oa(c.firstChild, "click", Y), c = Ja(c), k = Ja(c), E = $a(c, "section"), C = J.createElement("h1"), C.innerHTML = $a(va, "h1")[0].innerHTML, W = E.length, E.splice(0, 0, C), 0 !== l ? oa(J, l + "ullscreenchange", ma) : y ? oa(J, "MSFullscreenChange", ma, !1) : Xb(ma)) : ya(c);
      }
    });
  })();
  var sb, Ib = !dc || .9 > X || 8 > N || 5.5 > y, Xa;
  (function() {
    function K(g) {
      return g === "" + g;
    }
    function R(g, k) {
      return Ib ? new F(g, k) : new dc(g, k);
    }
    function L(g, k, C, v) {
      if (U() - ha < n && !v) {
        return g(k);
      }
      fa(da, {U:g, X:k});
    }
    function da(g) {
      ha = U();
      g.U(g.X);
    }
    function ca(g, k) {
      g && sb[g] || (g = A.test(k) ? "default-markup" : "default-code");
      var C = !!sb[g];
      C && L(D, g, 0, !0);
      return C;
    }
    function ba() {
      function g(Q, ta, ia) {
        ta && (k.h = k.h || [], k.h.push({l:k, B:k.B, O:1, s:W, D:Q, o:ta, m:ia, R:{}, v:0}));
      }
      var k = aa, C = k.m, v = C[0], E = C[2], x = k.D, W = k.s, c = k.$.shift(), l = k.R;
      if (c) {
        var f = l[c], m;
        if (!(0 <= f)) {
          if (m = v[c.charAt(0)]) {
            var z = c.match(m[1]);
            f = m[0];
          } else {
            for (f = 0, v = -1; m = E[++v];) {
              if (z = c.match(m[1])) {
                f = m[0];
                break;
              }
            }
          }
          !(m = K(f)) || z && K(z[1]) || (m = !1, f = 11);
          m || (l[c] = f);
        }
        E = k.v;
        l = c.length;
        k.v += l;
        if (m) {
          m = z[1];
          v = c.indexOf(m);
          var p = m.length, I = v + p;
          z[2] && (I = l - z[2].length, v = I - p);
          g(x + E, c.substr(0, v), C);
          if (p && ca(f, m)) {
            g(x + E + v, m);
            var M = !0;
          }
          g(x + E + I, c.substr(I), C);
          k.h && k.h.length && (aa = k.h.shift());
          M || (aa !== k ? L(q, w, 2) : L(ba, w, 2));
        } else {
          W.push(x + E, f), L(ba, w, 2);
        }
      } else {
        k.l ? (aa = k.l.h.shift()) ? L(q, w, 2) : (aa = k.l, L(ba, w, 2)) : L(Z, w, 2);
      }
    }
    function Y(g) {
      if (B.length) {
        var k = B.shift(), C = na[k];
        if (C.pop) {
          na[k] = R(C[0], C[1]);
        } else if (K(C)) {
          na[k] = R(C);
        } else {
          return Y(g);
        }
        L(Y, g, 1);
      } else {
        L(D, g);
      }
    }
    function ma(g) {
      for (var k, C = g.firstChild; C; C = C.nextSibling) {
        var v = C.nodeType;
        k = 1 === v ? k ? g : C : 3 === v ? b.test(C.nodeValue) ? g : k : k;
      }
      return k === g ? w : k;
    }
    sb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ka = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], wa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
    [1, 26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], na = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    la = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), U = yb.now || function() {
      return +new yb();
    }, F, ha, aa, a, d, n = 5 > y ? 60 : 5.5 > y ? 0 : Ib ? 20 : 10, A, b;
    Xa = [function(g) {
      V.RegExpCompat = F = g;
    }, function() {
      A = R("^\\s*<");
      b = R("\\S");
    }];
    Ib || (Xa[1](), Xa = w);
    var t = function() {
      var g = aa, k = g.V, C = S(g.B, g.O), v = g.o = C.o;
      g.I = C.I;
      ca(k, v) || (aa = w, L(T, w, 0, !0));
    };
    var q = function() {
      var g = aa;
      g.$ = g.o.match(g.m[1]) || [];
      g.s.push(g.D, 0);
      L(ba, w, 2);
    };
    var B = [];
    var D = function(g) {
      function k(f) {
        var m = f;
        0 <= f && (m = wa[f]);
        0 <= m[1] && (m[1] = C(m[1]));
        return m;
      }
      function C(f) {
        var m = f;
        return 0 <= f && (m = na[f], !m.exec) ? (B.push(f), f) : m;
      }
      var v = aa, E = sb[g];
      K(E) && (E = sb[g] = sb[E]);
      var x = E[0];
      if (0 <= x) {
        x = ka[x];
        if (0 <= x["-num"]) {
          var W = x["-num"];
          delete x["-num"];
          for (var c = -1; 9 > c;) {
            x["" + ++c] = W;
          }
        }
        E[0] = x;
      }
      for (var l in x) {
        x[l] = k(x[l]);
      }
      E[1] = C(E[1]);
      x = E[2];
      c = 0;
      for (W = x.length; c < W; ++c) {
        x[c] = k(x[c]);
      }
      B.length ? L(Y, g, 2) : (v.m ? v.l && (v.l.h[0].m = E) : v.m = E, L(q, w, 1));
    };
    var S = function(g, k) {
      function C(l) {
        var f = l.nodeType;
        if (1 === f) {
          if (!Ra(l, "nocode")) {
            for (f = l.firstChild; f; f = f.nextSibling) {
              C(f);
            }
            f = Fa(l);
            if ("BR" === f || "LI" === f) {
              v[W] = "\n", x[W << 1] = E++, x[W++ << 1 | 1] = l;
            }
          }
        } else if (3 === f || 4 === f) {
          if (f = l.nodeValue) {
            f = k ? f.split("\r\n").join("\n").split("\r").join("\n") : f.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), v[W] = f, x[W << 1] = E, E += f.length, x[W++ << 1 | 1] = l;
          }
        }
      }
      var v = [], E = 0, x = [], W = 0;
      C(g);
      var c = v.join("");
      "\n" === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1));
      return {o:c, I:x};
    };
    var O = function(g, k, C) {
      function v(f) {
        var m = f.nodeType;
        if (1 === m && !Ra(f, "nocode")) {
          if ("BR" === Fa(f)) {
            E(f), f.parentNode && ya(f);
          } else {
            for (f = f.firstChild; f; f = f.nextSibling) {
              v(f);
            }
          }
        } else if ((3 === m || 4 === m) && C) {
          var z = f.nodeValue, p = z.indexOf("\r\n"), I = 2;
          -1 === p && (p = z.indexOf("\n"), I = 1);
          -1 === p && (p = z.indexOf("\r"));
          -1 !== p && (m = z.substr(0, p), f.nodeValue = m, (z = z.substr(p + I)) && Vb(f, z), E(f), m || ya(f));
        }
      }
      function E(f) {
        function m(p, I) {
          var M = I ? p.cloneNode(!1) : p, Q = p.parentNode;
          if (Q) {
            Q = m(Q, 1);
            var ta = p.nextSibling;
            Q.appendChild(M);
            for (var ia = ta; ia; ia = ta) {
              ta = ia.nextSibling, Q.appendChild(ia);
            }
          }
          return M;
        }
        for (; !f.nextSibling;) {
          if (f = f.parentNode, !f) {
            return;
          }
        }
        f = m(f.nextSibling, 0);
        for (var z; (z = f.parentNode) && 1 === z.nodeType;) {
          f = z;
        }
        W.push(f);
      }
      for (var x = J.createElement("li"); g.firstChild;) {
        x.appendChild(g.firstChild);
      }
      for (var W = [x], c = 0; c < W.length; ++c) {
        v(W[c]);
      }
      if (k === (k | 0)) {
        if (10 <= k && 7.2 > N) {
          var l = J.createElement("ol");
          l.innerHTML = '<li value="' + k + '">' + x.innerHTML + "</li>";
          W[0] = l.firstChild;
        } else {
          bb(x, "value", k);
        }
      }
      l = Ca(g, "ol", {className:"linenums"});
      g = Math.max(0, k - 1 | 0) || 0;
      c = 0;
      for (k = W.length; c < k; ++c) {
        x = W[c], Hb(x, "L" + (c + g) % 10), x.firstChild || wc(x, "\u00a0"), l.appendChild(x);
      }
    };
    var Z = function() {
      var g = aa, k = g.o, C = k.length, v = 0, E = g.I, x = E.length, W = 0, c = g.s, l = c.length, f = 0;
      c[l] = C;
      var m, z;
      for (z = m = 0; z < l;) {
        c[z] !== c[z + 2] ? (c[m++] = c[z++], c[m++] = c[z++]) : z += 2;
      }
      l = m;
      for (z = m = 0; z < l;) {
        var p = c[z], I = c[z + 1];
        for (z += 2; z + 2 <= l && c[z + 1] === I;) {
          z += 2;
        }
        c[m++] = p;
        c[m++] = I;
      }
      c.length = m;
      g = g.B;
      l = "";
      g && (l = g.style.display, Qa(g, "display", "none"));
      for (; W < x;) {
        m = E[W + 2] || C;
        p = c[f + 2] || C;
        z = Math.min(m, p);
        I = E[W + 1];
        var M;
        if (1 !== I.nodeType && (M = k.substring(v, z))) {
          9 > y && (M = M.split("\n").join("\r"));
          var Q = Gb(I, "span", {className:la[c[f + 1]]}, M);
          ya(I);
          v < m && (E[W + 1] = Vb(Q, k.substring(z, m)));
        }
        v = z;
        v >= m && (W += 2);
        v >= p && (f += 2);
      }
      g && Qa(g, "display", l);
      aa = w;
      L(T, w, 3, !0);
    };
    var H = [], P;
    pb(function(g) {
      if (g) {
        g = [ib("pre"), ib("code"), ib("xmp")];
        for (var k = 0; k < g.length; ++k) {
          for (var C = 0, v = g[k].length; C < v; ++C) {
            ea(g[k][C]);
          }
        }
        return !0;
      }
    });
    var ea = function(g) {
      H.push(g);
      P = H.length;
      1 === P && (cc ? fa(cc, T) : Xa ? Xa.push(function() {
        fa(T);
      }) : fa(T));
    };
    var T = function() {
      function g(W, c) {
        return (W.split(c)[1] || "").split(" ")[0];
      }
      if (!aa) {
        P !== H.length && d && d(P - H.length, P);
        var k = H.shift();
        if (k) {
          if (Ra(k, "prettyprint") && !Ra(k, "prettyprinted")) {
            for (var C = !1, v = k.parentNode; v !== va; v = v.parentNode) {
              var E = Fa(v);
              if (("PRE" === E || "XMP" === E || "CODE" === E) && Ra(v, "prettyprint")) {
                C = !0;
                break;
              }
            }
            if (!C) {
              C = k.className;
              cb(k, "prettyprinted");
              v = !1;
              if (!v) {
                v = g(C, "lang-") || g(C, "language-");
                var x;
                !v && (x = ma(k)) && "CODE" === Fa(x) && (v = g(x.className, "lang-") || g(x.className, "language-"));
              }
              E = Fa(k);
              "PRE" === E || "XMP" === E ? E = 1 : (E = k.currentStyle, x = J.defaultView, E = (E = E ? E.whiteSpace : x && x.getComputedStyle ? x.getComputedStyle(k, null).getPropertyValue("white-space") : 0) && "pre" === E.substr(0, 3));
              x = !1;
              (x = "true" === x || +x) || (x = g(C, "linenums:") || Ra(k, "linenums"), x = x.length ? +x : x);
              x && O(k, x, E);
              aa = {V:v, B:k, aa:x, O:E, D:0, v:0, R:{}, s:[]};
              L(t);
              return;
            }
          }
          L(T, w, 0, !0);
        } else {
          a && a();
        }
      }
    };
    V.PR = {RegExpProxy:R, prettifyElement:ea, registerCompleteHandler:function(g, k) {
      a = g;
      d = k;
    }};
  })();
  var bc = J.scripts || ib("script");
  var sa = bc[bc.length - 1].src.split("/");
  --sa.length;
  "js" === sa[sa.length - 1] && --sa.length;
  (sa = sa.join("/")) && (sa += "/");
  var Ec = Jc || "1" === Ba(va, "mob");
  Bb = (Ec ? "mb" : "pc") + "/";
  6.1 > Ha && (ob ? ob(Sb) : oa(V, "scroll", Sb));
  jb(rc);
  6.1 > Ha && (ob ? ob(Tb) : oa(V, "scroll", Tb));
  jb(sc);
  10 > y && (11 !== Hc || 5 !== y) || (9 > N || 1 > X || !hb && !V.addEventListener ? J.write('<link href="' + sa + "css/" + Bb + Qb + '" rel="stylesheet"' + (8 > N ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > N || 1.5 > X || 534 > xa || 5 > Ha || 7 > Ia || 3 > lb) && Ka(function() {
    Ca(Ya, "link", {href:sa + "css/" + Bb + Qb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Ib) {
    if (Cb) {
      var cc = function(K) {
        V.RegExpCompat = bz;
        cc = w;
        Db(sa + "js/regexpcompat.js");
        function bz(R) {
          for (var L; L = Xa.shift();) {
            L(R);
          }
          Xa = w;
          fa(K);
          Eb(sa + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      V.RegExpCompat = function(K) {
        for (var R; R = Xa.shift();) {
          R(K);
        }
        Xa = w;
        Eb(sa + "js/regexpcompat.js");
      }, Db(sa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

