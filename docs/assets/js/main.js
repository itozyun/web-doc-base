/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d});
Function.prototype.apply||(Function.prototype.apply=function(d,f){var b=null!=d?d:window,a=f||[],e=a.length,c=0;b.__apply=this;b.__apply||(b.constructor.prototype.__apply=this);switch(e){case 0:a=b.__apply();break;case 1:a=b.__apply(a[0]);break;case 2:a=b.__apply(a[0],a[1]);break;case 3:a=b.__apply(a[0],a[1],a[2]);break;case 4:a=b.__apply(a[0],a[1],a[2],a[3]);break;case 5:a=b.__apply(a[0],a[1],a[2],a[3],a[4]);break;case 6:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5]);break;case 7:a=b.__apply(a[0],a[1],
a[2],a[3],a[4],a[5],a[6]);break;case 8:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);break;case 9:a=b.__apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);break;default:for(a=[];c<e;++c)a[c]="y["+c+"]";a=eval("x.__apply("+a.join(",")+")")}b.__apply?b===window?b.__apply=void 0:delete b.__apply:delete b.constructor.prototype.__apply;return a});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
window.decodeURI||(decodeURI=function(d){var e=[],f=parseInt,h=String.fromCharCode;d+="";for(var g=-1,b=0,k=d.length,c,a;b<k;++b)a?(a=f(d.substr(b,2),16),++b,127<a&&(223<a?(c=(a&15)<<12,a=f(d.substr(b+2,2),16)&63,b+=3,c+=a<<6):c=(a&63)<<6,a=f(d.substr(b+2,2),16)&63,b+=3,a+=c),e[++g]=h(a),a=!1):(c=d.charAt(b),(a="%"===c)||(e[++g]=c));return e.join("")});window.decodeURIComponent||(decodeURIComponent=decodeURI); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
(function(Ia, C, Gb, ac, fb, G, wb, Hb, Ja, bc, q) {
  function W(x) {
    if (Ia[0] === x) {
      return Ka === Ka + "" ? Ja(Ka) : Ka;
    }
  }
  function wa(x) {
    var H = Ia[3];
    if (Ia[2] === x) {
      return H === H + "" ? Ja(H) : H;
    }
  }
  var oa = G.body, xa = oa.style, nb, $a, ab, Ka = Ia[1], A = W(2) || W(3), La = W(7), Ib = W(5) || W(6), L = W(8) || W(9), N = W(11) || W(12), ob = N && 0 <= Ia.conpare(Ka, "1.9.1"), Jb = W(13), pb = W(15);
  Hb = W(16) || W(17);
  var cc = W(10) || W(25), qb = W(20) || W(22);
  qb || W(23) || W(21) || W(24);
  var dc = qb && Ja(wb.userAgent.split("Edg/")[1]);
  wb = Ja(wb.appVersion.split("Trident/")[1]) + 4;
  var Kb = wa(35) || wa(36) || wa(37), ec = !A && !La && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Lb = (La ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : 7.2 > L ? "opr70" : 8 > L ? "opr72" : 9.5 > L ? "opr" + (L | 0) : N && !ob ? 1.4 <= N ? "gck19" : 1.3 <= N ? "gck13" : 1 <= N ? "gck12" : 0.9 <= N ? "gck09" : 0.8 <= N ? "gck08" : "gck07" : "modern") + 
  ".css", xb = "";
  bc = wa(1) || wa(2) || wa(3) || wa(4) || wa(8) || wa(9) || wa(10);
  var fc, gc = xa.transform !== q ? "transform" : xa["-o-transform"] !== q ? "-o-transform" : xa["-ms-transform"] !== q ? "-ms-transform" : xa.MozTransform !== q ? "-moz-transform" : xa["-webkit-transform"] !== q ? "-webkit-transform" : "", Ma = [], hc = [], za = [], ic, jc, rb, kc, Mb, Nb, ma, yb, zb, Ob, lc, Pb, mc;
  (function() {
    function x() {
      for (var d, n = 0, r = +new fb(); n < Q.length;) {
        r < Q[0].t ? ++n : (d = Q.splice(n, 1)[0], d.f(d.p));
      }
      b = Q.length ? setTimeout(x, pa) : 0;
    }
    function H() {
      for (var d, n = 0; n < B.length; ++n) {
        d = B[n], d.f();
      }
    }
    function u() {
      aa && (aa = clearInterval(aa));
    }
    function E() {
      b && (b = clearTimeout(b));
    }
    zb = function(d) {
      B.length || (aa = setInterval(H, F));
      B.push({f:d, J:++ha});
      return ha;
    };
    Ob = function() {
      aa && (u(), aa = setInterval(H, F));
    };
    lc = u;
    var B = [], F = 500, ha = 0, aa;
    if (5 > A || La) {
      C._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    ma = function(d, n, r) {
      Q.length || (b = setTimeout(x, pa));
      Q.push({f:d, p:n, J:++ia, t:+new fb() + (pa < r ? r : pa)});
      return ia;
    };
    yb = function(d) {
      for (var n = Q.length, r; r = Q[--n];) {
        if (r.J === d) {
          Q.splice(n, 1);
          break;
        }
      }
      return 0;
    };
    Pb = function() {
      b && (E(), b = setTimeout(x, pa));
    };
    mc = E;
    var Q = [], pa = 16, ia = 0, b;
    if (5 > A || La) {
      C._wdb_ontimer = x, x = "_wdb_ontimer()";
    }
  })();
  var bb, Fa, Qb, Aa, cb, nc, Rb, Na, Ab, oc, Sb, Oa, sb, Pa, Ba, db, Qa, Tb, pc, tb, Ra, Xa, Sa, gb;
  (function() {
    function x(b, d, n) {
      var r = ["<", b], v = 1, D, R;
      if (d) {
        for (D in d) {
          var S = d[D];
          if (null != S && "" !== S) {
            if ("style" === D) {
              r[++v] = ' style="';
              for (R in S) {
                for (var ka = ++v, ba, T = [], U = R.split(""), ca = U.length; ca;) {
                  ba = U[--ca], "A" <= ba && "Z" >= ba && (ba = "-" + ba.toLowerCase()), T[ca] = ba;
                }
                r[ka] = T.join("") + ":" + S[R] + ";";
              }
              r[++v] = '"';
            } else {
              "className" === D && (D = "class"), r[++v] = " " + D + '="' + S + '"';
            }
          }
        }
      }
      r[++v] = ">";
      null != n && (Q && "font" !== b ? r[++v] = "<FONT>" + n + "</FONT>" : r[++v] = n);
      r[++v] = "</" + b + ">";
      return r.join("");
    }
    function H(b) {
      return u(G, b);
    }
    function u(b, d) {
      var n = "*" === d && 6 > A ? "*" !== d ? b.all.tags(d.toUpperCase()) : b.all : b.getElementsByTagName(d), r = [], v = 0, D;
      for (D = n.length; v < D; ++v) {
        r[v] = n[v];
      }
      return r;
    }
    function E(b) {
      return Q ? b.parentElement : b.parentNode;
    }
    function B(b, d, n, r, v, D) {
      if (Q) {
        var R = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var S = cb(2 > b ? Aa(d) : d);
        S = 2 > b ? S.indexOf(d) + b : S.length;
        d.insertAdjacentHTML(R, x(n, r, v));
        d = cb(d)[S];
        null != v && ("font" === n ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (pa) {
        d = G.createElement(x(n, r));
      } else {
        d = D ? G.createElementNS("http://www.w3.org/2000/svg", n) : G.createElement(n);
        if (r) {
          for (R in r) {
            if ((n = r[R]) || 0 === n) {
              switch(R) {
                case "class":
                case "className":
                  tb(d, n);
                  break;
                case "style":
                  b = d.style;
                  for (S in n) {
                    b[S] = n[S];
                  }
                  break;
                default:
                  db(d, R, n);
              }
            }
          }
        }
        ia || null != v && F(d, v);
      }
      return d;
    }
    function F(b, d) {
      if (Q) {
        return B(2, b, "font", q, d);
      }
      var n = G.createTextNode("" + d);
      b.appendChild(n);
      return n;
    }
    function ha(b, d) {
      9 > A ? b.className = d : b.setAttribute("class", d);
    }
    function aa(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    var Q = 5 > A;
    nb = H("html")[0];
    $a = H("head")[0];
    bb = function(b) {
      return C[b] || G[b] || G.getElementById(b);
    };
    Fa = H;
    Qb = u;
    Aa = E;
    cb = function(b) {
      b = Q ? b.children : b.childNodes;
      for (var d = [], n = b.length; n;) {
        d[--n] = b[n];
      }
      return d;
    };
    nc = function(b) {
      var d = !(7.03 < L && 7.2 > L) && b.children;
      b = d ? d : b.childNodes;
      for (var n = [], r = b.length, v = -1, D; r;) {
        if (D = b[--r], d || 1 === D.nodeType) {
          Q && "FONT" === D.tagName || (n[++v] = D);
        }
      }
      return n;
    };
    Rb = function(b) {
      return Q ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Na = function(b, d, n, r, v) {
      d = B(2, b, d, n, r, v);
      Q || (b.appendChild(d), ia && null != r && F(d, r));
      return d;
    };
    Ab = function(b, d, n, r, v) {
      d = B(0, b, d, n, r, v);
      Q || (E(b).insertBefore(d, b), ia && null != r && F(d, r));
      return d;
    };
    oc = F;
    Sb = function(b, d) {
      var n;
      if (Q) {
        return B(1, b, "font", q, d);
      }
      var r = G.createTextNode("" + d);
      (n = b.nextSibling) ? Aa(b).insertBefore(r, n) : Aa(b).appendChild(r);
      return r;
    };
    Oa = function(b) {
      Q ? b.outerHTML = "" : Aa(b).removeChild(b);
    };
    sb = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== nb;) {
        if (d = Aa(d), b === d) {
          return !0;
        }
      }
    };
    var pa = 9 > A, ia = pa;
    Pa = function(b) {
      return b.tagName.toUpperCase();
    };
    Ba = function(b, d) {
      return b.getAttribute(d) || "";
    };
    db = function(b, d, n) {
      b.setAttribute(d, n);
    };
    Qa = function(b, d) {
      b.removeAttribute(d);
    };
    Tb = function(b, d) {
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    pc = function(b) {
      return b.className;
    };
    tb = ha;
    Ra = aa;
    Xa = function(b, d) {
      var n;
      if (!aa(b, d)) {
        if (n = b.className) {
          d = " " + d;
        }
        ha(b, n + d);
      }
    };
    Sa = function(b, d, n) {
      b.style[d] = n;
    };
    gb = function(b, d) {
      var n = -1, r, v;
      if (5.5 > A) {
        if (b.setAttribute("style", ""), d) {
          for (r = d.split(";"); v = r[++n];) {
            var D = v.split(":");
            b.style[D[0]] = v.substr(D[0].length + 1);
          }
        }
      } else if (7.1 > L) {
        if (b.setAttribute("style", ""), d) {
          for (r = d.split(";"); v = r[++n];) {
            D = v.split(":"), b.style[D[0]] = D[1];
          }
        }
      } else {
        9 > L || 1 > N ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    Ma.splice(0, 0, function() {
      function b(ka) {
        ka = cb(ka);
        for (var ba = ka.length, T, U, ca; ba;) {
          if (T = ka[--ba], U = T.nodeType, 8 === U) {
            d && R.push(T);
          } else if (1 === U) {
            switch(U = Pa(T), "/" === U.charAt(0) && (U = U.substr(1), S[U] = !0), U) {
              case "STYLE":
                if (7.2 <= L && 9 > L) {
                  break;
                }
              case "LINK":
                Q || r || sb($a, T) || D.push(T);
                break;
              case "META":
                U = Ba(T, "name") || Ba(T, "property");
                for (ca = v.length; ca;) {
                  if (0 === U.indexOf(v[--ca])) {
                    R.push(T);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Tb(T, "async")) {
                  break;
                }
                if (n) {
                  T.innerText = "";
                  n = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Tb(T, "skip-cleanup")) {
                  break;
                }
              case "!":
                R.push(T);
                break;
              case "SOURCE":
                C.HTMLSourceElement || R.push(T);
                break;
              default:
                S[U] ? R.push(T) : cb(T).length && b(T);
            }
          }
        }
        for (; D[0];) {
          $a.appendChild(D.pop());
        }
        for (; R[0];) {
          Oa(R.pop());
        }
      }
      ab = bb("jsMain");
      var d = !(8 > L || 5 > A || La || .9 > N), n = jc, r = 7 > A, v = ["og:", "twitter:", "fb:"], D = [], R = [], S = {};
      b(nb);
    });
  })();
  var da, qa, Ca, eb, Ub, hb, ib, ub, Vb, vb, ra, Wb;
  (function() {
    function x() {
      return U ? Ta ? 2 : ca ? 3 : 1 : 0;
    }
    function H(a) {
      qa(C, "load", H);
      H = q;
      E(Ma, a, !0);
      Ca = Ma = q;
    }
    function u(a, c) {
      ib(function() {
        var k = b(a);
        c(k);
        k.addListener(c);
        return !0;
      });
    }
    function E(a, c, k) {
      for (var f = 0; f < a.length; ++f) {
        !0 === a[f](c) && (a.splice(f, 1), --f);
      }
      k && (a.length = 0);
    }
    function B(a, c, k) {
      Ma || n.length || ma(F);
      n.push(a, c, k);
    }
    function F() {
      var a = n, c;
      for (n = []; c = a.shift();) {
        E(c, a.shift(), a.shift());
      }
    }
    function ha(a) {
      var c = a || event;
      a = r[c.type];
      var k = -1, f, h;
      A ? (c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : D && (c.I = c.stopPropagation, c.stopPropagation = function() {
        h = !0;
      });
      for (; f = a[++k];) {
        f.j === this ? (this.h = f.i, this.h(c), this.h = Gb, this.h = q) : 7.2 > L && this === G && f.j === C && (C.h = f.i, C.h(c), delete C.h);
      }
      if (A) {
        return c.preventDefault = c.stopPropagation = q, c.returnValue;
      }
      D && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (S = !0), h && !S && c.I(), c.I = c.stopPropagation = q);
    }
    function aa() {
      var a = 9 === d.offsetWidth;
      vb !== a && B(hc, vb = a);
    }
    function Q() {
      !Ma && X && (yb(X), X = ma(pa));
    }
    function pa() {
      X = 0;
      E(Da);
    }
    function ia(a) {
      Ma || E(Ua, a);
    }
    var b = C.matchMedia, d, n = [];
    Ma.push(function() {
      u = q;
      d = Na(oa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ca(function() {
        n.length && ma(F);
      });
    });
    da = function(a, c, k, f) {
      if (R) {
        a.addEventListener(c, k, f ? ec ? f : f.capture : !1);
      } else {
        var h = {j:a, i:k};
        f = r[c];
        var y = "on" + c, p, I;
        if (f) {
          for (p = f.length; I = f[--p];) {
            if (I.j === a && I.i === k) {
              return;
            }
          }
          r[c].push(h);
        } else {
          r[c] = f = [h], v || (c = a[y], "function" === typeof c && c !== ha && f.unshift({j:a, i:c}));
        }
        v ? a.attachEvent(y, ha) : a[y] = ha;
      }
    };
    qa = function(a, c, k, f) {
      if (R) {
        a.removeEventListener(c, k, f ? ec ? f : f.capture : !1);
      } else {
        f = r[c];
        c = "on" + c;
        var h, y, p;
        if (f) {
          for (h = f.length; y = f[--h];) {
            y.j === a && (y.i === k ? f.splice(h, 1) : p = !0);
          }
          p || (v ? a.detachEvent(c, ha) : (a[c] = Gb, a[c] = null));
        }
      }
    };
    var r = {}, v = !1, D = 525.13 > pb, R = !D && !La && C.addEventListener, S;
    D && nb.addEventListener("click", function(a) {
      if (S) {
        return S = !1, a.preventDefault(), !1;
      }
    });
    Ca = function(a) {
      Ma.push(a);
    };
    eb = function(a) {
      ka && ka.push(a);
    };
    var ka = [];
    if (419.3 >= pb) {
      var ba = function() {
        if (ba) {
          var a = G.readyState;
          "loaded" === a || "complete" === a ? (ba = q, H()) : ma(ba);
        }
      };
      ma(ba);
    } else {
      da(C, "load", H);
    }
    A || .9 <= N && 1.8 > N ? da(C, "unload", function(a) {
      E(ka, a, !0);
    }) : ka = q;
    ib = function(a) {
      hc.push(a);
    };
    Ca(function() {
      aa();
      zb(aa);
    });
    Vb = function(a) {
      za && za.push(a);
    };
    var T = 60 > N || Jb, U, ca, Ta;
    if (89 <= N || 89 <= qb || Kb && 79 <= dc || b && (b("(forced-colors:none)").matches || b("(forced-colors:active)").matches)) {
      Wb = !0, u("(forced-colors:active)", function(a) {
        U = a.matches;
        ra = x();
        B(za, ra);
      });
    } else if (10 <= A || Ib || Kb && dc) {
      Wb = !0, u("(-ms-high-contrast:black-on-white)", function(a) {
        U = ca = a.matches;
        ra !== x() && (ra = x(), B(za, ra));
      }), u("(-ms-high-contrast:white-on-black)", function(a) {
        U = Ta = a.matches;
        ra !== x() && (ra = x(), B(za, ra));
      }), u("(-ms-high-contrast:active)", function(a) {
        U = a.matches;
        ra !== x() && (ra = x(), B(za, ra));
      });
    } else if (Kb && (A || N && 0 <= Ia.conpare(Ka, "1.8.1") || Jb)) {
      var Ya = function() {
        function a(f, h) {
          if (h && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var y = f.split("(")[1].split(",");
          return Ja(y[0]) + Ja(y[1]) + Ja(y[2]);
        }
        var c = G.defaultView;
        var k = c ? c.getComputedStyle(d, null) : d.currentStyle;
        c = (k && k.color || "").split(" ").join("");
        k = (k && k.backgroundColor || "").split(" ").join("");
        c && (U = "#123456" !== c && "rgb(18,52,86)" !== c, ca = a(c) < a(k, !0), Ta = a(c) > a(k, !0), ra !== x() && (ra = x(), B(za, ra, T)));
      };
      ib(function(a) {
        if (a) {
          return Sa(d, "color", "#123456"), Sa(d, "backgroundColor", "#123456"), T ? (Ya(), za = q) : zb(Ya), Ya = q, !0;
        }
      });
    } else {
      za = x = q;
    }
    ub = function(a) {
      sa.push(a);
    };
    var sa = [], va = 7.5 <= L && 8 > L;
    va && function() {
      for (var a = G.images, c = a.length, k; c;) {
        k = a[--c], k.H = k.src, Qa(k, "src");
      }
    }();
    Ca(function() {
      function a() {
        f ? (h = k[--f], va && db(h, "src", h.H), ic(c, va ? h.H : h.src)) : ub = sa = q;
      }
      function c(p) {
        E(sa, {D:h, F:p}, !f);
        a();
      }
      var k = G.images || Fa("img"), f = k.length;
      if (12 > L || 532 > pb) {
        a();
      } else {
        for (; f;) {
          var h = k[--f];
          var y = 9 > A ? h.complete : 0 <= h.naturalWidth ? h.naturalWidth : h.width;
          B(sa, {D:h, F:y}, !f);
        }
        ub = sa = q;
      }
    });
    Ub = function(a) {
      Da.push(a);
    };
    var Da = [], X;
    da(C, "resize", Q);
    eb(function() {
      X && clearTimeout(X);
      qa(C, "resize", Q);
    });
    hb = function(a) {
      Ua.push(a);
    };
    var Ua = [], ya = 0, g = 1 > N || 1.2 <= N && 1.8 > N || 7.2 >= L;
    g ? zb(function() {
      var a = C.scrollY || oa.scrollTop;
      ya !== a && (ya = a, ia());
    }) : da(C, "scroll", ia);
    eb(function() {
      g || qa(C, "scroll", ia);
    });
  })();
  (function() {
    9 > A && Ca(function() {
      var x = Na(oa, "div");
      gb(x, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      fc = 1 < x.offsetHeight;
      gb(x, "");
      Oa(x);
    });
    ic = function(x, H) {
      function u() {
        B || !F || E.complete ? (ma(x, !!E.width), E.onerror = E.onload = Gb, E = x = q) : (--F, ma(u));
      }
      var E = new Image(), B, F = 99;
      E.onerror = function() {
        B = !0;
      };
      E.onload = function() {
        B = !0;
      };
      E.src = H;
      ma(u);
    };
  })();
  (function() {
    ub(function(u) {
      var E = u.D;
      u = u.F;
      var B = Aa(E);
      !Ra(B, "aBodyRoot") && u ? Xa(B, "img-loaded") : u || Ba(E, "alt") || Sa(E, "display", "none");
    });
    if (!Wb && za) {
      var x, H = function() {
        x = Na($a, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ta + "css/" + xb + "hc/" + Lb});
        (gc || 5.5 <= A && 9 > A && fc) && Xa(oa, "jsCanRotate");
        H = q;
      };
      Vb(function(u) {
        u && !x ? H() : x && (u ? $a.appendChild(x) : Oa(x));
      });
    }
    5.5 <= A && 8 > A && za && Vb(function(u) {
      for (var E = Fa("a"), B = E.length, F = 0; F < B; ++F) {
        E[F].hideFocus = !u;
      }
    });
    L && Ca(function() {
      for (var u = Fa("a"), E = u.length, B = 0, F; B < E; ++B) {
        F = u[B], "-1" === Ba(F, "tabindex") ? Qa(F, "tabindex") : Ba(F, "href") && db(F, "tabindex", "0");
      }
      u = Fa("input");
      B = 0;
      for (E = u.length; B < E; ++B) {
        F = u[B], "hidden" === Ba(F, "type") && Qa(F, "tabindex");
      }
    });
  })();
  (function() {
    function x(e) {
      var l = e.keyCode || e.aa, t = S.length, J, M, K, Va;
      if ("keydown" !== e.type || 13 === l) {
        for (; t;) {
          if (l = S[--t], l.C === this || l.u === this) {
            t = l.C;
            var O = J = l.u;
            if (l.O) {
              if (Sa(t, "width", l.Z), t.src = l.Y, tb(O, l.S), t = l.K) {
                gb(t, l.R), tb(t, "caption jsCap");
              }
            } else {
              if (M = l.M) {
                for (delete l.M; J = Aa(J);) {
                  if (Ra(J, "caption")) {
                    l.K = J, l.R = J.style.cssText, Xa(J, "jsCap");
                  } else {
                    var P = Pa(J);
                    if ("DIV" === P || "P" === P || "BLOCKQUOT" === P || "LI" === P || "DD" === P || "TD" === P || "TH" === P || "FORM" === P || "PRE" === P) {
                      break;
                    }
                  }
                }
                J = (J.offsetWidth | 0) - 4;
                1600 < J && (J = 1600);
                if (l.L && 0 < M.split("/").pop().indexOf("=")) {
                  M = M.split("=");
                  P = M.length;
                  if (K = M[P - 1]) {
                    (Va = Ja(K.substr(1))) && K === "s" + Va ? M[P - 1] = "w" + J : M[P] = "w" + J;
                  }
                  M = M.join("=");
                } else if (l.L || 0 < M.indexOf(".bp.blogspot.com/")) {
                  M = M.split("/");
                  P = M.length;
                  if (K = M[P - 2]) {
                    (Va = Ja(K.substr(1))) && K === "s" + Va ? M[P - 2] = "w" + J : M.splice(P - 1, 0, "w" + J);
                  }
                  M = M.join("/");
                }
                l.V = M;
              }
              l.S = pc(O);
              Xa(O, "jsPicaLarge");
              Sa(t, "width", "");
              t.src = l.V;
              if (t = l.K) {
                gb(t, ""), Xa(t, "jsCapLarge");
              }
            }
            l.O = !l.O;
            break;
          }
        }
        H(e);
      }
    }
    function H(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    function u(e) {
      for (var l = arguments, t = 0, J = l.length; t < J; ++t) {
        if (isFinite(l[t])) {
          return l[t];
        }
      }
      return 0;
    }
    function E(e) {
      var l = c;
      if (vb) {
        if (k && !l) {
          if (+new fb() < k) {
            return;
          }
          k = q;
        }
        7 === e ? f = 0 : (f && (f = yb(f)), g = u(C.pageYOffset, C.scrollY, sa.scrollTop, oa.scrollTop));
        l ? (c = B(q, l[0], l[1])) || (k = +new fb() + 99) : B();
      } else {
        c = q;
      }
    }
    function B(e, l, t) {
      function J(Ga) {
        O = Ga;
        if (Ua) {
          P = Ua + ":translate" + (a ? "3D(0," : "(0,") + Ga + (a ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ga) {
          if (!Ya && (Ta || ca)) {
            var Bb = va.offsetWidth;
          }
          P = ca ? "position:fixed;width:" + Bb + "px;top:" + (Ga - M + Z) + "px" : Ya ? "top:" + Ga + "px" : "position:absolute;left:0;width:100%;top:" + Ga + "px";
          Ta && P && (P += ";" + (0 > Ga ? "clip:rect(" + -Ga + "px " + Bb + "px " + na + "px 0)" : Ga + na < Cb ? "clip:rect(0 " + Bb + "px " + na + "px 0)" : "clip:rect(0 " + Bb + "px " + (Cb - Ga) + "px 0)"), 8 > A || (P = P.split(" ").join(",")));
        }
      }
      var M = g, K = Da, Va = va.offsetTop === K.offsetTop, O = 0, P = "", Ea = !0;
      if (Va) {
        for (var ea = 0, Z = 0, fa = K; fa && fa !== oa;) {
          Z += fa.offsetTop, fa = fa.offsetParent;
        }
        O = ya;
        var Xb = u(C.innerHeight, sa.offsetHeight), Yb = K.offsetHeight, na = X.offsetHeight, Cb = na < Yb ? Yb : na, Za = M, jb = Za + Xb, Db = Z, Eb = Db + Cb, qc = Z + O, sc = qc + na;
        K = Za < Db ? Db : Za;
        fa = Eb < jb ? Eb : jb;
        var kb = fa - K;
        Za = Eb <= Za;
        jb = jb <= Db;
        if (l !== q) {
          Ea = Z + l;
          e = Ea + t;
          var lb;
          if (Za || jb) {
            return Xb <= t ? lb = Z : lb = Za ? Eb - t : Z + t - Xb, k = q, C.scroll(u(C.pageXOffset, C.scrollX, sa.scrollLeft, oa.scrollLeft), lb), c;
          }
          na <= kb ? ea = 3 : t <= kb ? na - l <= kb ? ea = 2 : K <= Ea && e <= fa ? K < Z + O && (ea = 4) : ea = K <= Ea && Ea <= fa ? 5 : K <= e && e <= fa ? 4 : e < K ? 4 : 5 : ea = 4;
          Ea = q;
        } else {
          e !== q ? na <= kb ? (ea = 7, Ea = !1) : (O -= 60 * e, ea = fa - Z - na, lb = K - Z, O < ea ? O = ea : lb < O && (O = lb), ea = 6) : Yb <= na || (Za ? ea = 1 : jb || (na <= kb ? ea = 3 : K < qc ? ea = 3 : sc < fa ? ea = 2 : M < Z + na - kb || (ea = 2)));
        }
        switch(ea) {
          case 0:
            J(0);
            break;
          case 1:
            J(Cb - na);
            break;
          case 2:
            J(fa - Z - na);
            break;
          case 3:
            J(K - Z);
            break;
          case 4:
            J(K - Z - l);
            break;
          case 5:
            J(fa - Z - (l + t));
          case 6:
            J(O);
        }
      }
      gb(X, P);
      ya = O;
      return Va && Ea;
    }
    function F(e) {
      if (vb) {
        N && (g = u(C.pageYOffset, sa.scrollTop, oa.scrollTop));
        var l = this !== e.target, t = l && u(e.deltaY, e.wheelDeltaY / 120, e.wheelDelta / -120, e.detail / ("MozMousePixelScroll" === e.type ? 45 : 1));
        l && t && B(9 >= t ? -9 >= t ? -3 : t : 3) && (e.preventDefault(), e.stopPropagation());
      }
    }
    function ha(e) {
      for (var l = e.target, t = -1, J; J = ba[++t];) {
        sb(J, l) && F(e);
      }
    }
    function aa(e) {
      if (vb) {
        var l = !!Ua || N, t = e.target || e.srcElement;
        e = 0;
        var J;
        if (sb(X, t)) {
          for (J = t.offsetHeight; t && (l ? sb(X, t) : X !== t);) {
            e += t.offsetTop, t = t.offsetParent;
          }
          U ? (c = [e, J], f && yb(f), f = ma(E, 7, 1 > N ? 500 : 0)) : (g = u(C.pageYOffset, C.scrollY, sa.scrollTop, oa.scrollTop), B(q, e, J));
        }
      }
    }
    function Q() {
      m = C.onerror;
      C.onerror = pa;
      var e = G.activeElement;
      I !== e && (I = e, aa({target:e}));
      C.onerror = m;
      m = q;
    }
    function pa() {
      C.onerror = m;
      m = I = q;
      return !0;
    }
    function ia() {
      w.call(z);
    }
    function b() {
      G.fullscreenElement || G.fullscreen || G.webkitIsFullscreen || G.msFullscreenElement || C.fullScreen ? (db(z, "id", "blog2slide-root"), la[1].parentNode.insertBefore(V, la[1]), d(), G.onkeydown = n) : Y && (Oa(V), Qa(z, "id"), Qa(Y, "id"), Y = G.onkeydown = q);
    }
    function d() {
      Y && Qa(Y, "id");
      ja = 0 < ja ? Ha < ja ? Ha : ja : 0;
      Y = la[ja];
      db(Y, "id", "blog2slide-current");
    }
    function n(e) {
      if ("ArrowRight" === e.key || 39 === e.keyCode) {
        ++ja, d();
      } else if ("ArrowLeft" === e.key || 37 === e.keyCode) {
        --ja, d();
      }
    }
    kc = N && 0 >= Ia.conpare(Ka, "0.9");
    rb = !(7.2 > L || kc);
    Mb = function(e) {
      r ? G.write('<script src="' + e + '">\x3c/script>') : Ma || D.length ? D.push(e) : R(e);
    };
    Nb = function() {
      r || R(D.shift());
    };
    var r = !rb, v = rb && 7.5 > L;
    if (!r) {
      rb = !0;
      var D = [];
      v && (jc = !0);
      Ca(function() {
        R(D.shift());
      });
      var R = function(e) {
        e && (v ? Zb[0].src = e : Na($a, "script", {src:e}));
      };
    }
    var S = [];
    if (!cc) {
      var ka = xa.transition !== q || xa["-o-transition"] !== q || xa["-moz-transition"] !== q || xa["-webkit-transition"] !== q;
      ub(function(e) {
        if (e.F && ab) {
          e = e.D;
          var l = Aa(e), t = "", J;
          if ("A" === Pa(l) && 1 === nc(l).length) {
            var M = Ba(l, "href");
            var K = M.split("?")[0].split("#")[0].split(".");
            K = (K[K.length - 1] || "").toLowerCase();
            if ((J = 0 < M.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + K + ".")) {
              da(l, "keydown", x), da(e, "click", x), da(l, "click", H), ka && (t = e.naturalWidth + 4 + "px", Sa(e, "width", t)), Xa(l, "jsPica"), S.push({u:l, Y:e.src, Z:t, M:M, C:e, L:J});
            }
          }
        }
      });
      eb(function(e, l) {
        for (e = -1; l = S[++e];) {
          qa(l.u, "keydown", x), qa(l.C, "click", x), qa(l.u, "click", H);
        }
      });
    }
    var ba = ["jsSidebarFixer1", "jsSidebarFixer2"], T = N || Jb || Ib, U = !(9 > A || L || 1 <= N && 1.3 > N), ca = !(5 > W(16) || 5 > W(17) || 2.2 > W(21) || 6 > W(12) || wa(30) && 534 > pb || wa(32) || 7 > A || 9 > L || 1 > N), Ta = ca || 6 === A || 1 > N, Ya = 7.5 > L, sa, va, Da, X, Ua = gc, ya = 0, g = 0, a, c, k, f, h = N && 0 <= Ia.conpare(Ka, "0.9.7"), y = N && 0 >= Ia.conpare(Ka, "0.9.4");
    rc || cc || (ib(function(e) {
      if (e) {
        if (!ab) {
          return !0;
        }
        e = -1;
        var l;
        sa = "CSS1Compat" !== G.compatMode ? oa : nb || oa;
        va = bb("jsSide");
        Da = ab;
        if (!va) {
          return !0;
        }
        hb(E);
        Ub(E);
        X = Ab(Rb(va), "div", {id:"jsSidebarFixer"});
        for (8 > L || y || 6 > A || (A || La ? da(X, "focusin", aa) : T ? da(G, "focus", aa, {capture:!0, passive:!1}) : da(X, "DOMFocusIn", aa, !1)); 1 < cb(va).length;) {
          X.appendChild(cb(va)[1]);
        }
        for (h && !ob && da(G, "DOMMouseScroll", ha, !1); l = ba[++e];) {
          var t = bb(l);
          t.onwheel !== q ? da(t, "wheel", F, {passive:!1}) : ob ? da(t, "MozMousePixelScroll", F, !1) : h ? ba[e] = bb(l) : (t.onmousewheel !== q || 9 <= L) && da(t, "mousewheel", F, !1);
        }
        A || Ib || 2 > qb || (a = xa.perspective !== q || xa.MozPerspective !== q || xa["-webkit-perspective"] !== q);
        E();
        return !0;
      }
    }), eb(function() {
      var e = -1, l;
      if (h && !ob) {
        qa(G, "DOMMouseScroll", ha, !1);
      } else {
        for (; l = ba[++e];) {
          l = bb(l), l.onwheel !== q ? qa(l, "wheel", F, {passive:!1}) : ob ? qa(l, "MozMousePixelScroll", F, !1) : (l.onmousewheel !== q || 9 <= L) && qa(l, "mousewheel", F, !1);
        }
      }
      8 > L || y || 6 > A || (A || La ? qa(X, "focusin", aa, !1) : T ? qa(G, "focus", aa, {capture:!0, passive:!1}) : qa(X, "DOMFocusIn", aa, !1));
      p && clearInterval(p);
    }));
    var p, I, m;
    6 > A && ib(function(e) {
      if (!ab) {
        return !0;
      }
      e ? p = setInterval(Q, 333) : p && (clearInterval(p), p = 0);
    });
    Ca(function() {
      function e(Va, O, P, Ea) {
        var ea = Ea ? "div" : "cite";
        if (0 === O.indexOf("urn:isbn:")) {
          O = O.substr(9).toUpperCase().split("-").join("");
          if (13 === O.length) {
            O = O.toString().slice(3, -1);
            for (var Z = 0, fa = 0; 9 > fa; fa++) {
              Z += (O.charAt(fa) - 0) * (10 - fa);
            }
            Z = (11 - Z % 11) % 11;
            Z = 10 === Z ? "X" : Z.toString();
            O += Z;
          }
          10 === O.length && (O = "//www.amazon.co.jp/exec/obidos/ASIN/" + O + "/itozyun-22/ref=nosim/");
        }
        P = Ea ? Ab(Rb(t), ea, {className:P}) : Na(t, ea, {className:P});
        Na(P, "a", 0 === O.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:O, X:L ? "0" : q} : {href:O, X:L ? "0" : q}, Va);
      }
      if (ab) {
        for (var l = Qb(ab, "blockquote"), t, J = -1, M, K; t = l[++J];) {
          M = Ba(t, "title"), K = Ba(t, "cite"), M && K ? (Qa(t, "title"), e(M, K, "js-bqLink", !0)) : K && (Qa(t, "cite"), e(C.decodeURI ? decodeURI(K) : K, K, "js-bqCite"));
        }
      }
    });
    var w, z, V, Y, la, ja, Ha;
    Ca(function() {
      var e = bb("blog2slide-start");
      if (e) {
        var l = G.onfullscreenchange !== q ? "f" : G.onmozfullscreenchange !== q ? "mozF" : G.onwebkitfullscreenchange !== q ? "webkitF" : 0;
        w = e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullscreen || e.msRequestFullscreen;
        0 !== l || w ? (e.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', da(e.firstChild, "click", ia), e = Aa(e), z = Aa(e), la = Qb(e, "section"), V = G.createElement("h1"), V.innerHTML = Fa("h1")[0].innerHTML, Ha = la.length, la.splice(0, 0, V), 0 !== l ? da(G, l + "ullscreenchange", b) : A ? da(G, "MSFullscreenChange", b, !1) : Ub(b)) : Oa(e);
      }
    });
  })();
  var mb, Fb = !ac || .9 > N || 8 > L || 5.5 > A, Wa;
  (function() {
    function x(g) {
      return g === "" + g;
    }
    function H(g, a) {
      return Fb ? new n(g, a) : new ac(g, a);
    }
    function u(g, a, c, k) {
      if (d() - r < S && !k) {
        return g(a);
      }
      ma(E, {T:g, W:a});
    }
    function E(g) {
      r = d();
      g.T(g.W);
    }
    function B(g, a) {
      g && mb[g] || (g = ka.test(a) ? "default-markup" : "default-code");
      var c = !!mb[g];
      c && u(Ta, g, 0, !0);
      return c;
    }
    function F() {
      function g(ja, Ha, e) {
        Ha && (a.g = a.g || [], a.g.push({l:a, A:a.A, N:1, s:y, B:ja, o:Ha, m:e, P:{}, v:0}));
      }
      var a = v, c = a.m, k = c[0], f = c[2], h = a.B, y = a.s, p = a.$.shift(), I = a.P;
      if (p) {
        var m = I[p], w;
        if (!(0 <= m)) {
          if (w = k[p.charAt(0)]) {
            var z = p.match(w[1]);
            m = w[0];
          } else {
            for (m = 0, k = -1; w = f[++k];) {
              if (z = p.match(w[1])) {
                m = w[0];
                break;
              }
            }
          }
          !(w = x(m)) || z && x(z[1]) || (w = !1, m = 11);
          w || (I[p] = m);
        }
        f = a.v;
        I = p.length;
        a.v += I;
        if (w) {
          w = z[1];
          k = p.indexOf(w);
          var V = w.length, Y = k + V;
          z[2] && (Y = I - z[2].length, k = Y - V);
          g(h + f, p.substr(0, k), c);
          if (V && B(m, w)) {
            g(h + f + k, w);
            var la = !0;
          }
          g(h + f + Y, p.substr(Y), c);
          a.g && a.g.length && (v = a.g.shift());
          la || (v !== a ? u(U, q, 2) : u(F, q, 2));
        } else {
          y.push(h + f, m), u(F, q, 2);
        }
      } else {
        a.l ? (v = a.l.g.shift()) ? u(U, q, 2) : (v = a.l, u(F, q, 2)) : u(va, q, 2);
      }
    }
    function ha(g) {
      if (ca.length) {
        var a = ca.shift(), c = ia[a];
        if (c.pop) {
          ia[a] = H(c[0], c[1]);
        } else if (x(c)) {
          ia[a] = H(c);
        } else {
          return ha(g);
        }
        u(ha, g, 1);
      } else {
        u(Ta, g);
      }
    }
    function aa(g) {
      for (var a, c = g.firstChild; c; c = c.nextSibling) {
        var k = c.nodeType;
        a = 1 === k ? a ? g : c : 3 === k ? ba.test(c.nodeValue) ? g : a : a;
      }
      return a === g ? q : a;
    }
    mb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var Q = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], pa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ia = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    b = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), d = fb.now || function() {
      return +new fb();
    }, n, r, v, D, R, S = 5 > A ? 60 : 5.5 > A ? 0 : Fb ? 20 : 10, ka, ba;
    Wa = [function(g) {
      C.RegExpCompat = n = g;
    }, function() {
      ka = H("^\\s*<");
      ba = H("\\S");
    }];
    Fb || (Wa[1](), Wa = q);
    var T = function() {
      var g = v, a = g.U, c = Ya(g.A, g.N), k = g.o = c.o;
      g.G = c.G;
      B(a, k) || (v = q, u(ya, q, 0, !0));
    };
    var U = function() {
      var g = v;
      g.$ = g.o.match(g.m[1]) || [];
      g.s.push(g.B, 0);
      u(F, q, 2);
    };
    var ca = [];
    var Ta = function(g) {
      function a(m) {
        var w = m;
        0 <= m && (w = pa[m]);
        0 <= w[1] && (w[1] = c(w[1]));
        return w;
      }
      function c(m) {
        var w = m;
        return 0 <= m && (w = ia[m], !w.exec) ? (ca.push(m), m) : w;
      }
      var k = v, f = mb[g];
      x(f) && (f = mb[g] = mb[f]);
      var h = f[0];
      if (0 <= h) {
        h = Q[h];
        if (0 <= h["-num"]) {
          var y = h["-num"];
          delete h["-num"];
          for (var p = -1; 9 > p;) {
            h["" + ++p] = y;
          }
        }
        f[0] = h;
      }
      for (var I in h) {
        h[I] = a(h[I]);
      }
      f[1] = c(f[1]);
      h = f[2];
      p = 0;
      for (y = h.length; p < y; ++p) {
        h[p] = a(h[p]);
      }
      ca.length ? u(ha, g, 2) : (k.m ? k.l && (k.l.g[0].m = f) : k.m = f, u(U, q, 1));
    };
    var Ya = function(g, a) {
      function c(I) {
        var m = I.nodeType;
        if (1 === m) {
          if (!Ra(I, "nocode")) {
            for (m = I.firstChild; m; m = m.nextSibling) {
              c(m);
            }
            m = Pa(I);
            if ("BR" === m || "LI" === m) {
              k[y] = "\n", h[y << 1] = f++, h[y++ << 1 | 1] = I;
            }
          }
        } else if (3 === m || 4 === m) {
          if (m = I.nodeValue) {
            m = a ? m.split("\r\n").join("\n").split("\r").join("\n") : m.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), k[y] = m, h[y << 1] = f, f += m.length, h[y++ << 1 | 1] = I;
          }
        }
      }
      var k = [], f = 0, h = [], y = 0;
      c(g);
      var p = k.join("");
      "\n" === p.charAt(p.length - 1) && (p = p.substr(0, p.length - 1));
      return {o:p, G:h};
    };
    var sa = function(g, a, c) {
      function k(m) {
        var w = m.nodeType;
        if (1 === w && !Ra(m, "nocode")) {
          if ("BR" === Pa(m)) {
            f(m), m.parentNode && Oa(m);
          } else {
            for (m = m.firstChild; m; m = m.nextSibling) {
              k(m);
            }
          }
        } else if ((3 === w || 4 === w) && c) {
          var z = m.nodeValue, V = z.indexOf("\r\n"), Y = 2;
          -1 === V && (V = z.indexOf("\n"), Y = 1);
          -1 === V && (V = z.indexOf("\r"));
          -1 !== V && (w = z.substr(0, V), m.nodeValue = w, (z = z.substr(V + Y)) && Sb(m, z), f(m), w || Oa(m));
        }
      }
      function f(m) {
        function w(V, Y) {
          var la = Y ? V.cloneNode(!1) : V, ja = V.parentNode;
          if (ja) {
            ja = w(ja, 1);
            var Ha = V.nextSibling;
            ja.appendChild(la);
            for (var e = Ha; e; e = Ha) {
              Ha = e.nextSibling, ja.appendChild(e);
            }
          }
          return la;
        }
        for (; !m.nextSibling;) {
          if (m = m.parentNode, !m) {
            return;
          }
        }
        m = w(m.nextSibling, 0);
        for (var z; (z = m.parentNode) && 1 === z.nodeType;) {
          m = z;
        }
        y.push(m);
      }
      for (var h = G.createElement("li"); g.firstChild;) {
        h.appendChild(g.firstChild);
      }
      for (var y = [h], p = 0; p < y.length; ++p) {
        k(y[p]);
      }
      if (a === (a | 0)) {
        if (10 <= a && 7.2 > L) {
          var I = G.createElement("ol");
          I.innerHTML = '<li value="' + a + '">' + h.innerHTML + "</li>";
          y[0] = I.firstChild;
        } else {
          db(h, "value", a);
        }
      }
      I = Na(g, "ol", {className:"linenums"});
      g = Math.max(0, a - 1 | 0) || 0;
      p = 0;
      for (a = y.length; p < a; ++p) {
        h = y[p], tb(h, "L" + (p + g) % 10), h.firstChild || oc(h, "\u00a0"), I.appendChild(h);
      }
    };
    var va = function() {
      var g = v, a = g.o, c = a.length, k = 0, f = g.G, h = f.length, y = 0, p = g.s, I = p.length, m = 0;
      p[I] = c;
      var w, z;
      for (z = w = 0; z < I;) {
        p[z] !== p[z + 2] ? (p[w++] = p[z++], p[w++] = p[z++]) : z += 2;
      }
      I = w;
      for (z = w = 0; z < I;) {
        var V = p[z], Y = p[z + 1];
        for (z += 2; z + 2 <= I && p[z + 1] === Y;) {
          z += 2;
        }
        p[w++] = V;
        p[w++] = Y;
      }
      p.length = w;
      g = g.A;
      I = "";
      g && (I = g.style.display, Sa(g, "display", "none"));
      for (; y < h;) {
        w = f[y + 2] || c;
        V = p[m + 2] || c;
        z = Math.min(w, V);
        Y = f[y + 1];
        var la;
        if (1 !== Y.nodeType && (la = a.substring(k, z))) {
          9 > A && (la = la.split("\n").join("\r"));
          var ja = Ab(Y, "span", {className:b[p[m + 1]]}, la);
          Oa(Y);
          k < w && (f[y + 1] = Sb(ja, a.substring(z, w)));
        }
        k = z;
        k >= w && (y += 2);
        k >= V && (m += 2);
      }
      g && Sa(g, "display", I);
      v = q;
      u(ya, q, 3, !0);
    };
    var Da = [], X;
    ib(function(g) {
      if (g) {
        g = [Fa("pre"), Fa("code"), Fa("xmp")];
        for (var a = 0; a < g.length; ++a) {
          for (var c = 0, k = g[a].length; c < k; ++c) {
            Ua(g[a][c]);
          }
        }
        return !0;
      }
    });
    var Ua = function(g) {
      Da.push(g);
      X = Da.length;
      1 === X && ($b ? ma($b, ya) : Wa ? Wa.push(function() {
        ma(ya);
      }) : ma(ya));
    };
    var ya = function() {
      function g(y, p) {
        return (y.split(p)[1] || "").split(" ")[0];
      }
      if (!v) {
        X !== Da.length && R && R(X - Da.length, X);
        var a = Da.shift();
        if (a) {
          if (Ra(a, "prettyprint") && !Ra(a, "prettyprinted")) {
            for (var c = !1, k = a.parentNode; k !== oa; k = k.parentNode) {
              var f = Pa(k);
              if (("PRE" === f || "XMP" === f || "CODE" === f) && Ra(k, "prettyprint")) {
                c = !0;
                break;
              }
            }
            if (!c) {
              c = a.className;
              Xa(a, "prettyprinted");
              k = !1;
              if (!k) {
                k = g(c, "lang-") || g(c, "language-");
                var h;
                !k && (h = aa(a)) && "CODE" === Pa(h) && (k = g(h.className, "lang-") || g(h.className, "language-"));
              }
              f = Pa(a);
              "PRE" === f || "XMP" === f ? f = 1 : (f = a.currentStyle, h = G.defaultView, f = (f = f ? f.whiteSpace : h && h.getComputedStyle ? h.getComputedStyle(a, null).getPropertyValue("white-space") : 0) && "pre" === f.substr(0, 3));
              h = !1;
              (h = "true" === h || +h) || (h = g(c, "linenums:") || Ra(a, "linenums"), h = h.length ? +h : h);
              h && sa(a, h, f);
              v = {U:k, A:a, ba:h, N:f, B:0, v:0, P:{}, s:[]};
              u(T);
              return;
            }
          }
          u(ya, q, 0, !0);
        } else {
          D && D();
        }
      }
    };
    C.PR = {RegExpProxy:H, prettifyElement:Ua, registerCompleteHandler:function(g, a) {
      D = g;
      R = a;
    }};
  })();
  var Zb = G.scripts || Fa("script");
  var ta = Zb[Zb.length - 1].src.split("/");
  --ta.length;
  "js" === ta[ta.length - 1] && --ta.length;
  (ta = ta.join("/")) && (ta += "/");
  var rc = bc || "1" === Ba(oa, "mob");
  xb = (rc ? "mb" : "pc") + "/";
  6.1 > Hb && (hb ? hb(Ob) : da(C, "scroll", Ob));
  eb(lc);
  6.1 > Hb && (hb ? hb(Pb) : da(C, "scroll", Pb));
  eb(mc);
  10 > A && (11 !== wb || 5 !== A) || (9 > L || 1 > N || !La && !C.addEventListener ? G.write('<link href="' + ta + "css/" + xb + Lb + '" rel="stylesheet"' + (8 > L ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > L || 1.5 > N || 532 >= pb || 8 > qb) && Ca(function() {
    Na($a, "link", {href:ta + "css/" + xb + Lb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Fb) {
    if (rb) {
      var $b = function(x) {
        C.RegExpCompat = function(H) {
          for (var u; u = Wa.shift();) {
            u(H);
          }
          Wa = q;
          ma(x);
          Nb(ta + "js/regexpcompat.js");
        };
        $b = q;
        Mb(ta + "js/regexpcompat.js");
      };
    } else {
      C.RegExpCompat = function(x) {
        for (var H; H = Wa.shift();) {
          H(x);
        }
        Wa = q;
        Nb(ta + "js/regexpcompat.js");
      }, Mb(ta + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

