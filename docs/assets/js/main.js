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
(function(Ga, H, tb, Vb, Va, I, Wb, vc, Na, wc, p) {
  function da(C) {
    if (Ga[0] === C) {
      return Ha === Ha + "" ? Na(Ha) : Ha;
    }
  }
  function ya(C) {
    var O = Ga[3];
    if (Ga[2] === C) {
      return O === O + "" ? Na(O) : O;
    }
  }
  var ea = I.body, za = ea.style, nb, Ya, db, Ha = Ga[1], G = da(2) || da(3), Za = da(7), ob = da(5) || da(6), S = da(8) || da(9), P = da(11) || da(12), Db = P && 0 <= Ga.conpare(Ha, "1.9.1"), Eb = da(13), xa = da(15), eb = da(16) || da(17), Xb = da(10) || da(25), Oa = da(20) || da(22), rc = da(23), Fb = da(21), Yb = da(24), Zb = Oa && Na(Wb.userAgent.split("Edg/")[1]), sc = Na(Wb.appVersion.split("Trident/")[1]) + 4, Gb = ya(35) || ya(36) || ya(37), Hb = (Za ? "ie5mac" : 5.5 > G ? "ie5win" : 6 > 
  G ? "ie55" : 10 > G ? "ie" + (G | 0) : 7.2 > S ? "opr70" : 8 > S ? "opr72" : 9.5 > S ? "opr" + (S | 0) : P && !Db ? 1.4 <= P ? "gck19" : 1.3 <= P ? "gck13" : 1 <= P ? "gck12" : 0.9 <= P ? "gck09" : 0.8 <= P ? "gck08" : "gck07" : "modern") + ".css", ub = "", tc = ya(1) || ya(2) || ya(3) || ya(4) || ya(8) || ya(9) || ya(10), $b, ac = za.transform !== p ? "transform" : za["-o-transform"] !== p ? "-o-transform" : za["-ms-transform"] !== p ? "-ms-transform" : za.MozTransform !== p ? "-moz-transform" : 
  za["-webkit-transform"] !== p ? "-webkit-transform" : "", Pa = [], bc = [], Da = [], cc, dc, vb, ec, Ib, Jb, oa, wb, pb, fc, Kb, gc, Lb, hc;
  (function() {
    function C() {
      for (var V, b = 0, d = +new Va(); b < ba.length;) {
        d < ba[0].t ? ++b : (V = ba.splice(b, 1)[0], V.f(V.p));
      }
      Z = ba.length ? setTimeout(C, la) : 0;
    }
    function O() {
      for (var V, b = 0; b < J.length; ++b) {
        V = J[b], V.f();
      }
    }
    function F() {
      ka && (ka = clearInterval(ka));
    }
    function X() {
      Z && (Z = clearTimeout(Z));
    }
    pb = function(V) {
      J.length || (ka = setInterval(O, T));
      J.push({f:V, C:++fa});
      return fa;
    };
    fc = function(V) {
      for (var b = J.length, d; d = J[--b];) {
        if (d.C === V) {
          J.splice(b, 1);
          J[0] || F();
          break;
        }
      }
      return 0;
    };
    Kb = function() {
      ka && (F(), ka = setInterval(O, T));
    };
    gc = F;
    var J = [], T = 500, fa = 0, ka;
    if (5 > G || Za) {
      H._wdb_onlooptimer = O, O = "_wdb_onlooptimer()";
    }
    oa = function(V, b, d) {
      ba.length || (Z = setTimeout(C, la));
      ba.push({f:V, p:b, C:++Y, t:+new Va() + (la < d ? d : la)});
      return Y;
    };
    wb = function(V) {
      for (var b = ba.length, d; d = ba[--b];) {
        if (d.C === V) {
          ba.splice(b, 1);
          break;
        }
      }
      return 0;
    };
    Lb = function() {
      Z && (X(), Z = setTimeout(C, la));
    };
    hc = X;
    var ba = [], la = 16, Y = 0, Z;
    if (5 > G || Za) {
      H._wdb_ontimer = C, C = "_wdb_ontimer()";
    }
  })();
  var fb, gb, $a, Aa, ab, ic, Mb, Qa, xb, jc, Nb, Ra, bb, Ia, ta, cb, Sa, hb, kc, yb, Ja, Wa, lc, Ta, ib, mc;
  (function() {
    function C(b, d, k) {
      var x = ["<", b], e = 1, z, w;
      if (d) {
        for (z in d) {
          var E = d[z];
          if (null != E && "" !== E) {
            if ("style" === z) {
              x[++e] = ' style="';
              for (w in E) {
                for (var ha = ++e, ia, U = [], W = w.split(""), pa = W.length; pa;) {
                  ia = W[--pa], "A" <= ia && "Z" >= ia && (ia = "-" + ia.toLowerCase()), U[pa] = ia;
                }
                x[ha] = U.join("") + ":" + E[w] + ";";
              }
              x[++e] = '"';
            } else {
              "className" === z && (z = "class"), x[++e] = " " + z + '="' + E + '"';
            }
          }
        }
      }
      x[++e] = ">";
      null != k && (Y && "font" !== b ? x[++e] = "<FONT>" + k + "</FONT>" : x[++e] = k);
      x[++e] = "</" + b + ">";
      return x.join("");
    }
    function O(b) {
      var d = b.split("-"), k = d.length;
      if (2 > k) {
        return b;
      }
      for (; 1 < k;) {
        b = d[--k], d[k] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return d.join("");
    }
    function F(b) {
      return X(I, b);
    }
    function X(b, d) {
      for (var k = "*" === d && 6 > G ? "*" !== d ? b.all.tags(d.toUpperCase()) : b.all : b.getElementsByTagName(d), x = [], e = 0, z = k.length; e < z; ++e) {
        x[e] = k[e];
      }
      return x;
    }
    function J(b) {
      return Y ? b.parentElement : b.parentNode;
    }
    function T(b, d, k, x, e, z) {
      if (Y) {
        var w = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var E = ab(2 > b ? Aa(d) : d);
        E = 2 > b ? E.indexOf(d) + b : E.length;
        d.insertAdjacentHTML(w, C(k, x, e));
        d = ab(d)[E];
        null != e && ("font" === k ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (Z) {
        d = I.createElement(C(k, x));
      } else {
        d = z ? I.createElementNS("http://www.w3.org/2000/svg", k) : I.createElement(k);
        if (x) {
          for (w in x) {
            if ((k = x[w]) || 0 === k) {
              switch(w) {
                case "class":
                case "className":
                  yb(d, k);
                  break;
                case "style":
                  b = d.style;
                  for (E in k) {
                    b[E] = k[E];
                  }
                  break;
                default:
                  cb(d, w, k);
              }
            }
          }
        }
        V || null != e && fa(d, e);
      }
      return d;
    }
    function fa(b, d) {
      if (Y) {
        return T(2, b, "font", p, d);
      }
      var k = I.createTextNode("" + d);
      b.appendChild(k);
      return k;
    }
    function ka(b, d) {
      9 > G ? b.className = d : b.setAttribute("class", d);
    }
    function ba(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    function la(b) {
      return 5.5 > G ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var Y = 5 > G;
    nb = F("html")[0];
    Ya = F("head")[0];
    fb = function(b) {
      return H[b] || I[b] || I.getElementById(b);
    };
    gb = F;
    $a = X;
    Aa = J;
    ab = function(b) {
      b = Y ? b.children : b.childNodes;
      for (var d = [], k = b.length; k;) {
        d[--k] = b[k];
      }
      return d;
    };
    ic = function(b) {
      var d = !(7.03 < S && 7.2 > S) && b.children;
      b = d ? d : b.childNodes;
      for (var k = [], x = b.length, e = -1, z; x;) {
        if (z = b[--x], d || 1 === z.nodeType) {
          Y && "FONT" === z.tagName || (k[++e] = z);
        }
      }
      return k;
    };
    Mb = function(b) {
      return Y ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Qa = function(b, d, k, x, e) {
      d = T(2, b, d, k, x, e);
      Y || (b.appendChild(d), V && null != x && fa(d, x));
      return d;
    };
    xb = function(b, d, k, x, e) {
      d = T(0, b, d, k, x, e);
      Y || (J(b).insertBefore(d, b), V && null != x && fa(d, x));
      return d;
    };
    jc = fa;
    Nb = function(b, d) {
      var k;
      if (Y) {
        return T(1, b, "font", p, d);
      }
      var x = I.createTextNode("" + d);
      (k = b.nextSibling) ? Aa(b).insertBefore(x, k) : Aa(b).appendChild(x);
      return x;
    };
    Ra = function(b) {
      Y ? b.outerHTML = "" : Aa(b).removeChild(b);
    };
    bb = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== nb;) {
        if (d = Aa(d), b === d) {
          return !0;
        }
      }
    };
    var Z = 9 > G, V = Z;
    Ia = function(b) {
      return b.tagName.toUpperCase();
    };
    ta = function(b, d) {
      8 > S && (d = O(d));
      return b.getAttribute(d) || "";
    };
    cb = function(b, d, k) {
      S && "tab-index" === d ? "-1" === k ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", k) : (8 > S && (d = O(d)), b.setAttribute(d, k));
    };
    Sa = function(b, d) {
      8 > S && (d = O(d));
      b.removeAttribute(d);
    };
    hb = function(b, d) {
      8 > S && (d = O(d));
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    kc = function(b) {
      return b.className;
    };
    yb = ka;
    Ja = ba;
    Wa = function(b, d) {
      var k;
      if (!ba(b, d)) {
        if (k = b.className) {
          k += " ";
        }
        ka(b, k + d);
      }
    };
    lc = function(b, d) {
      if (ba(b, d)) {
        var k = b.className.split(" ");
        k.splice(k.indexOf(d), 1);
        ka(b, k.join(" "));
      }
    };
    Ta = function(b, d, k) {
      b.style[d] = k;
    };
    ib = function(b, d) {
      var k, x = -1, e;
      if (5.5 > G) {
        if (k = la(b)) {
          for (k = k.split(";"); e = k[++x];) {
            b.style[e.split(":")[0]] = "";
          }
        }
        if (d) {
          for (x = -1, k = d.split(";"); e = k[++x];) {
            var z = e.split(":")[0];
            b.style[z] = e.substr(z.length + 1);
          }
        }
      } else if (7.1 > S) {
        if (b.setAttribute("style", ""), d) {
          for (k = d.split(";"); e = k[++x];) {
            e = e.split(":"), b.style[e[0]] = e[1];
          }
        }
      } else {
        9 > S || 1 > P ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    mc = la;
    Pa.splice(0, 0, function() {
      function b(ha) {
        ha = ab(ha);
        for (var ia = ha.length, U, W, pa; ia;) {
          if (U = ha[--ia], W = U.nodeType, 8 === W) {
            d && w.push(U);
          } else if (1 === W) {
            switch(W = Ia(U), "/" === W.charAt(0) && (W = W.substr(1), E[W] = !0), W) {
              case "STYLE":
                if (7.2 <= S && 9 > S) {
                  break;
                }
              case "LINK":
                Y || x || bb(Ya, U) || z.push(U);
                break;
              case "META":
                W = ta(U, "name") || ta(U, "property");
                for (pa = e.length; pa;) {
                  if (0 === W.indexOf(e[--pa])) {
                    w.push(U);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (hb(U, "async")) {
                  break;
                }
                if (k) {
                  U.innerText = "";
                  k = !1;
                  break;
                }
              case "NOSCRIPT":
                if (hb(U, "skip-cleanup")) {
                  break;
                }
              case "!":
                w.push(U);
                break;
              case "SOURCE":
                H.HTMLSourceElement || w.push(U);
                break;
              default:
                E[W] ? w.push(U) : ab(U).length && b(U);
            }
          }
        }
        for (; z[0];) {
          Ya.appendChild(z.pop());
        }
        for (; w[0];) {
          Ra(w.pop());
        }
      }
      db = fb("jsMain");
      var d = !(8 > S || 5 > G || Za || .9 > P), k = dc, x = 7 > G, e = ["og:", "twitter:", "fb:"], z = [], w = [], E = {};
      b(nb);
    });
  })();
  var aa, ma, Ba, Xa, Ob, jb, qb, rb, Pb, Qb, Rb, nc, oc, sb, va, Sb;
  (function() {
    function C() {
      return v ? q ? 2 : A ? 3 : 1 : 0;
    }
    function O(c) {
      ma(H, "load", O);
      O = p;
      X(Pa, c, !0);
      Ba = Pa = p;
    }
    function F(c, g) {
      qb(function() {
        var r = Z(c);
        g(r);
        r.addListener(g);
        return !0;
      });
    }
    function X(c, g, r) {
      for (var n = 0; n < c.length; ++n) {
        !0 === c[n](g) && (c.splice(n, 1), --n);
      }
      r && (c.length = 0);
    }
    function J(c, g, r) {
      Pa || b.length || oa(T);
      b.push(c, g, r);
    }
    function T() {
      var c = b, g;
      for (b = []; g = c.shift();) {
        X(g, c.shift(), c.shift());
      }
    }
    function fa(c) {
      var g = c || event;
      c = k[g.type];
      var r = -1, n, y;
      G ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : e && (g.K = g.stopPropagation, g.stopPropagation = function() {
        y = !0;
      });
      for (; n = c[++r];) {
        n.j === this ? (this.g = n.i, G && (g.currentTarget = this), this.g(g), G ? (this.g = tb, this.g = p) : delete this.g) : 7.2 > S && this === I && n.j === H && (H.g = n.i, H.g(g), delete H.g);
      }
      if (G) {
        return g.preventDefault = g.stopPropagation = tb, g.preventDefault = g.stopPropagation = p, g.returnValue;
      }
      e && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (w = !0), y && !w && g.K(), g.K = g.stopPropagation = p);
    }
    function ka() {
      var c = 9 === V.offsetWidth;
      sb !== c && J(bc, sb = c);
    }
    function ba() {
      !Pa && f && (wb(f), f = oa(la));
    }
    function la() {
      f = 0;
      X(a);
    }
    function Y(c) {
      Pa || X(h, c);
    }
    var Z = H.matchMedia, V, b = [];
    Pa.push(function() {
      F = p;
      V = Qa(ea, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ba(function() {
        b.length && oa(T);
      });
    });
    aa = function(c, g, r, n) {
      if (z) {
        c.addEventListener(g, r, n ? d ? n : n.capture || !0 === n : !1);
      } else {
        var y = {j:c, i:r};
        n = k[g];
        var ca = "on" + g, qa, Ka;
        if (n) {
          for (qa = n.length; Ka = n[--qa];) {
            if (Ka.j === c && Ka.i === r) {
              return;
            }
          }
          k[g].push(y);
        } else {
          k[g] = n = [y], x || (g = c[ca], "function" === typeof g && g !== fa && n.unshift({j:c, i:g}));
        }
        x ? c.attachEvent(ca, fa) : c[ca] = fa;
      }
    };
    ma = function(c, g, r, n) {
      if (z) {
        c.removeEventListener(g, r, n ? d ? n : n.capture || !0 === n : !1);
      } else {
        n = k[g];
        g = "on" + g;
        var y, ca, qa;
        if (n) {
          for (y = n.length; ca = n[--y];) {
            ca.j === c && (ca.i === r ? n.splice(y, 1) : qa = !0);
          }
          qa || (x ? c.detachEvent(g, fa) : G ? (c[g] = tb, c[g] = null) : delete c[g]);
        }
      }
    };
    var d = !G && !Za && (new Function('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), k = {}, x = !1, e = 525.13 > xa, z = !e && !Za && H.addEventListener, w;
    e && nb.addEventListener("click", function(c) {
      if (w) {
        return w = !1, c.preventDefault(), !1;
      }
    });
    Ba = function(c) {
      Pa.push(c);
    };
    Xa = function(c) {
      E && E.push(c);
    };
    var E = [];
    if (419.3 >= xa) {
      var ha = function() {
        if (ha) {
          var c = I.readyState;
          "loaded" === c || "complete" === c ? (ha = p, O()) : oa(ha);
        }
      };
      oa(ha);
    } else {
      aa(H, "load", O);
    }
    G || .9 <= P && 1.8 > P ? aa(H, "unload", function(c) {
      X(E, c, !0);
    }) : E = p;
    qb = function(c) {
      bc.push(c);
    };
    Ba(function() {
      ka();
      pb(ka);
    });
    Qb = function(c, g) {
      if (ia) {
        aa(c, "focusin", g);
      } else if (U) {
        aa(c, "DOMFocusIn", g);
      } else {
        if (pa) {
          ra || (ra = pb(l));
        } else if (W || Ca) {
          aa(I, "focus", Ea, !0);
        } else {
          return;
        }
        for (var r = Fa, n = 0, y = r.length; n < y; ++n) {
          if (r[n] === c && r[n + 1] === g) {
            return;
          }
        }
        r.push(c, g);
      }
    };
    Rb = function(c, g) {
      if (ia) {
        aa(c, "focusin", g);
      } else if (U) {
        aa(c, "DOMFocusIn", g, !1);
      } else {
        for (var r = Fa, n = 0, y = r.length; n < y; ++n) {
          if (r[n] === c && r[n + 1] === g) {
            r.splice(n, 2);
            r.length || (pa ? ra = fc(ra) : (W || Ca) && ma(I, "focus", Ea, !0));
            break;
          }
        }
      }
    };
    var ia = 6 <= G || ob || 52 <= P || 15 <= Oa || 534 <= xa || 5 <= eb || rc || 4 <= Fb || 4 <= Yb || 11.6 <= da(8) || 12 <= da(9), U = 8 <= S || Oa || Fb || Yb || xa || eb, W = 8 > S, pa = 6 > G, Ca = 52 > P || Eb;
    if (Ca || W) {
      var Fa = [];
      var Ea = function(c) {
        var g = Fa, r = W ? I.activeElement : c.target;
        W && (c = {type:"focusin", target:r, preventDefault:function() {
          c.preventDefault();
        }, stopPropagation:function() {
          c.stopPropagation();
        }});
        for (var n = 0, y = g.length; n < y; ++n) {
          var ca = g[n];
          (ca === r || bb(ca, r)) && g[n + 1].call(ca, c);
        }
      };
    } else if (pa) {
      Fa = [];
      var ra, La, na, l = function() {
        na = H.onerror;
        H.onerror = m;
        var c = I.activeElement;
        if (La !== c) {
          La = c;
          for (var g = Fa, r, n = 0, y = g.length; n < y; ++n) {
            r = g[n], (r === c || bb(r, c)) && g[n + 1].apply(r, [{target:c}]);
          }
        }
        H.onerror = na;
        na = p;
      }, m = function() {
        H.onerror = na;
        na = La = p;
        return !0;
      };
    }
    Pb = function(c) {
      Da && Da.push(c);
    };
    var B = 60 > P || Eb, v, A, q;
    if (89 <= P || 89 <= Oa || Gb && 79 <= Zb || Z && (Z("(forced-colors:none)").matches || Z("(forced-colors:active)").matches)) {
      Sb = !0, F("(forced-colors:active)", function(c) {
        v = c.matches;
        va = C();
        J(Da, va);
      });
    } else if (10 <= G || ob || Gb && Zb) {
      Sb = !0, F("(-ms-high-contrast:black-on-white)", function(c) {
        v = A = c.matches;
        va !== C() && (va = C(), J(Da, va));
      }), F("(-ms-high-contrast:white-on-black)", function(c) {
        v = q = c.matches;
        va !== C() && (va = C(), J(Da, va));
      }), F("(-ms-high-contrast:active)", function(c) {
        v = c.matches;
        va !== C() && (va = C(), J(Da, va));
      });
    } else if (Gb && (G || P && 0 <= Ga.conpare(Ha, "1.8.1") || Eb)) {
      var Q = function() {
        function c(n, y) {
          if (y && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var ca = n.split("(")[1].split(",");
          return Na(ca[0]) + Na(ca[1]) + Na(ca[2]);
        }
        var g = I.defaultView;
        var r = g ? g.getComputedStyle(V, null) : V.currentStyle;
        g = (r && r.color || "").split(" ").join("");
        r = (r && r.backgroundColor || "").split(" ").join("");
        g && (v = "#123456" !== g && "rgb(18,52,86)" !== g, A = c(g) < c(r, !0), q = c(g) > c(r, !0), va !== C() && (va = C(), J(Da, va, B)));
      };
      qb(function(c) {
        if (c) {
          return Ta(V, "color", "#123456"), Ta(V, "backgroundColor", "#123456"), B ? (Q(), Da = p) : pb(Q), Q = p, !0;
        }
      });
    } else {
      Da = C = p;
    }
    rb = function(c) {
      t.push(c);
    };
    var t = [], R = 7.5 <= S && 8 > S;
    R && function() {
      for (var c = I.images, g = c.length, r; g;) {
        r = c[--g], r.J = r.src, Sa(r, "src");
      }
    }();
    Ba(function() {
      function c() {
        n ? (y = r[--n], R && cb(y, "src", y.J), cc(g, R ? y.J : y.src)) : rb = t = p;
      }
      function g(qa) {
        X(t, {G:y, H:qa, V:!n}, !n);
        c();
      }
      var r = I.images || gb("img"), n = r.length;
      if (12 > S || 532 > xa) {
        c();
      } else {
        for (; n;) {
          var y = r[--n];
          var ca = 9 > G ? y.complete : 0 <= y.naturalWidth ? y.naturalWidth : y.width;
          J(t, {G:y, H:ca, V:!n}, !n);
        }
        rb = t = p;
      }
    });
    Ob = function(c) {
      a.push(c);
    };
    var a = [], f;
    aa(H, "resize", ba);
    Xa(function() {
      f && clearTimeout(f);
      ma(H, "resize", ba);
    });
    jb = function(c) {
      h.push(c);
    };
    var h = [], u = 0, K = 1 > P || 1.2 <= P && 1.8 > P || 7.2 >= S;
    K ? pb(function() {
      var c = P ? H.scrollY : H.pageYOffset;
      u !== c && (u = c, Y());
    }) : aa(H, "scroll", Y, {passive:!0});
    Xa(function() {
      K || ma(H, "scroll", Y, {passive:!0});
    });
    nc = function(c, g) {
      if (D) {
        aa(c, "wheel", g, {passive:!1});
      } else if (M) {
        aa(c, "mousewheel", g, !1);
      } else if (L) {
        aa(c, "MozMousePixelScroll", g, !1);
      } else if (N) {
        for (var r = sa, n = 0, y = r.length; n < y; ++n) {
          if (r[n] === c && r[n + 1] === g) {
            return;
          }
        }
        r.length || aa(I, "DOMMouseScroll", ja, !1);
        r.push(c, g);
      }
    };
    oc = function(c, g) {
      if (D) {
        ma(c, "wheel", g, {passive:!1});
      } else if (M) {
        ma(c, "mousewheel", g, !1);
      } else if (L) {
        ma(c, "MozMousePixelScroll", g, !1);
      } else if (N) {
        for (var r = sa, n = 0, y = r.length; n < y; ++n) {
          if (r[n] === c && r[n + 1] === g) {
            r.splice(n, 2);
            r.length || ma(I, "DOMMouseScroll", ja, !1);
            break;
          }
        }
      }
    };
    var D = 9 <= G || ob || 17 <= P || 31 <= Oa || 537.7 <= xa, M = 6 <= G || ob || 9 <= S || Oa || 522 <= xa || eb, L = Db, N = P && 0 <= Ga.conpare(Ha, "0.9.7") && !Db;
    if (N) {
      var sa = [], ja = function(c) {
        for (var g = sa, r = c.target, n, y = 0, ca = g.length; y < ca; ++y) {
          n = g[y], bb(n, r) && g[y + 1].call(n, c);
        }
      };
    }
  })();
  (function() {
    9 > G && Ba(function() {
      var C = Qa(ea, "div");
      ib(C, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      $b = 1 < C.offsetHeight;
      ib(C, "");
      Ra(C);
    });
    cc = function(C, O) {
      function F() {
        J || !T || X.complete ? (oa(C, !!X.width), X.onerror = X.onload = tb, X = C = p) : (--T, oa(F));
      }
      var X = new Image(), J, T = 99;
      X.onerror = function() {
        J = !0;
      };
      X.onload = function() {
        J = !0;
      };
      X.src = O;
      oa(F);
    };
  })();
  (function() {
    rb(function(e) {
      var z = e.G;
      e = e.H;
      var w = Aa(z);
      !Ja(w, "aBodyRoot") && e ? Wa(w, "img-loaded") : e || ta(z, "alt") || Ta(z, "display", "none");
    });
    5.5 <= G && 8 > G && Da && Pb(function(e) {
      for (var z = $a(ea, "a"), w = z.length, E = 0; E < w; ++E) {
        z[E].hideFocus = !e;
      }
    });
    if (!Sb && Da) {
      var C, O = function() {
        C = Qa(Ya, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:wa + "css/" + ub + "hc/" + Hb});
        (ac || 5.5 <= G && 9 > G && $b) && Wa(ea, "jsCanRotate");
        O = p;
      };
      Pb(function(e) {
        e && !C ? O() : C && (e ? Ya.appendChild(C) : Ra(C));
      });
    }
    S && Ba(function() {
      for (var e = $a(ea, "a"), z = e.length, w = 0, E; w < z; ++w) {
        E = e[w], "-1" === ta(E, "tabIndex") ? Sa(E, "tabIndex") : ta(E, "href") && cb(E, "tabIndex", "0");
      }
      e = $a(ea, "input");
      w = 0;
      for (z = e.length; w < z; ++w) {
        E = e[w], "hidden" === ta(E, "type") && Sa(E, "tabIndex");
      }
    });
    if (P && 0 > Ga.conpare(Ha, "0.9.5")) {
      var F, X, J, T, fa;
      Ba(function() {
        aa(I, "keydown", ka);
        Qb(ea, ba);
        P && (aa(H, "blur", d), aa(ea, "click", b), aa(I, "keyup", V));
      });
      Xa(function() {
        ma(I, "keydown", ka);
        Rb(ea, ba);
        P && (ma(H, "blur", d), ma(ea, "click", b), ma(I, "keyup", V));
      });
      var ka = xa ? function(e) {
        9 === e.keyCode && (F = e.shiftKey, T && la(T, !0) && (T = p, e.stopPropagation(), e.preventDefault(), Z()));
      } : function(e) {
        16 === e.keyCode ? F = !0 : 9 === e.keyCode && (X = +new Va());
      }, ba = xa ? function(e) {
        T = e.target;
      } : function(e) {
        var z = e.target;
        if (T === z) {
          J = p;
        } else if (J) {
          z === J ? (e.stopPropagation(), Z(!0)) : (z.blur && x(z), e.preventDefault(), Z());
        } else {
          if (e = T) {
            T = p, x(e);
          }
          J = z;
          Z(!0);
        }
      }, la = function(e, z) {
        var w = !z && +new Va(), E = "nextSibling", ha = "firstChild";
        F && (z || w - 99 < X && X <= w) && (E = "previousSibling", ha = "lastChild");
        for (J = p; e !== ea;) {
          if (ia) {
            w = e;
            var ia = !1;
          } else {
            w = e[E];
          }
          if (w) {
            if (1 === w.nodeType) {
              if (Y(w)) {
                return J = w, !0;
              }
              e = (ia = w[ha]) || w;
            } else {
              e = w;
            }
          } else {
            e = e.parentNode;
          }
        }
      }, Y = function(e, z) {
        function w() {
          return "-1" !== ta(e, "tab-index");
        }
        function E() {
          return 0 <= e.offsetHeight * e.offsetWidth;
        }
        if (e.focus) {
          var ha;
          switch({A:z ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ia(e)]) {
            case 1:
              if (hb(e, "href") && w() && E()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== ta(e, "type") && w() && !hb(e, "disabled") && E()) {
                return !0;
              }
              break;
            case 3:
              if (w() && !hb(e, "disabled") && E()) {
                return !0;
              }
              break;
            default:
              if ((ha = ta(e, "tab-index")) && "-1" !== ha && E()) {
                return !0;
              }
          }
        }
      }, Z = function(e) {
        P && (fa = 0);
        J && (xa || aa(J, "blur", k), T = J, J = p, e || T.focus());
      };
      if (P) {
        var V = function(e) {
          16 === e.keyCode && (F = !1);
        }, b = function(e) {
          var z = e.target;
          if (T && Y(z, !0)) {
            var w = T;
            T = p;
            x(w);
            J = z;
            e.stopPropagation();
            e.preventDefault();
            Z();
          }
        }, d = function(e) {
          e.target === I && (J = p);
        }, k = function(e) {
          e = e.target;
          ma(e, "blur", k);
          T === e && (T = p, la(e) && (fa || (fa = oa(Z))));
        }, x = function(e) {
          ma(e, "blur", k);
          e.blur();
        };
      }
    }
  })();
  (function() {
    function C(a) {
      var f = k.length, h, u, K, D;
      if (13 === (a.keyCode || a.ba) || a.type !== x) {
        for (; f;) {
          var M = k[--f];
          if (M.F === this || M.u === this) {
            f = M.F;
            var L = h = M.u;
            if (M.P) {
              if (Ta(f, "width", M.$), f.src = M.Z, yb(L, M.T), f = M.L) {
                ib(f, M.S), lc(f, "jsCapLarge");
              }
            } else {
              if (u = M.N) {
                delete M.N;
                if (M.M) {
                  for (; h = Aa(h);) {
                    if (!Ja(h, "caption")) {
                      var N = Ia(h);
                      if ("DIV" === N || "P" === N || "BLOCKQUOT" === N || "LI" === N || "DD" === N || "TD" === N || "TH" === N || "FORM" === N || "PRE" === N) {
                        break;
                      }
                    }
                  }
                  h = (h.offsetWidth | 0) - 4;
                  1600 < h && (h = 1600);
                  if (2 === M.M) {
                    u = u.split("=");
                    N = u.length;
                    if (K = u[N - 1]) {
                      (D = Na(K.substr(1))) && K === "s" + D ? u[N - 1] = "w" + h : u[N] = "w" + h;
                    }
                    u = u.join("=");
                  } else {
                    u = u.split("/");
                    N = u.length;
                    if (K = u[N - 2]) {
                      (D = Na(K.substr(1))) && K === "s" + D ? u[N - 2] = "w" + h : u.splice(N - 1, 0, "w" + h);
                    }
                    u = u.join("/");
                  }
                }
                M.X = u;
              }
              M.T = kc(L);
              Wa(L, "jsPicaLarge");
              Ta(f, "width", "");
              f.src = M.X;
              if (f = M.L) {
                ib(f, ""), Wa(f, "jsCapLarge");
              }
            }
            M.P = !M.P;
            break;
          }
        }
        O(a);
      }
    }
    function O(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    function F(a) {
      for (var f = arguments, h = 0, u = f.length; h < u; ++h) {
        if (isFinite(f[h])) {
          return f[h];
        }
      }
      return 0;
    }
    function X(a) {
      var f = na;
      if (sb) {
        if (l && !f) {
          if (+new Va() < l) {
            return;
          }
          l = p;
        }
        7 === a ? m = 0 : (m && (m = wb(m)), ra = F(H.pageYOffset, H.scrollY, U.scrollTop, ea.scrollTop));
        f ? (na = J(p, f[0], f[1])) || (l = +new Va() + 99) : J();
      } else {
        na = p;
      }
    }
    function J(a, f, h) {
      function u(Ma) {
        L = Ma;
        if (Fa) {
          N = Fa + ":translate" + (La ? "3D(0," : "(0,") + Ma + (La ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Ma) {
          if (!ia && (ha || E)) {
            var zb = W.offsetWidth;
          }
          N = E ? "position:fixed;width:" + zb + "px;top:" + (Ma - K + c) + "px" : ia ? "top:" + Ma + "px" : "position:absolute;left:0;top:" + Ma + "px";
          ha && N && (N += ";" + (0 > Ma ? "clip:rect(" + -Ma + "px " + zb + "px " + y + "px 0)" : Ma + y < ca ? "clip:rect(0 " + zb + "px " + y + "px 0)" : "clip:rect(0 " + zb + "px " + (ca - Ma) + "px 0)"), 8 > G || (N = N.split(" ").join(",")));
        }
      }
      var K = ra, D = pa, M = W.offsetTop === D.offsetTop, L = 0, N = "", sa = !0;
      if (M) {
        for (var ja = 0, c = 0, g = D; g && g !== ea;) {
          c += g.offsetTop, g = g.offsetParent;
        }
        L = Ea;
        var r = F(H.innerHeight, U.offsetHeight), n = D.offsetHeight, y = Ca.offsetHeight, ca = y < n ? n : y, qa = K, Ka = qa + r, Ab = c, Bb = Ab + ca, pc = c + L, uc = pc + y;
        D = qa < Ab ? Ab : qa;
        g = Bb < Ka ? Bb : Ka;
        var kb = g - D;
        qa = Bb <= qa;
        Ka = Ka <= Ab;
        if (f !== p) {
          sa = c + f;
          a = sa + h;
          var lb;
          if (qa || Ka) {
            return r <= h ? lb = c : lb = qa ? Bb - h : c + h - r, l = p, H.scroll(F(H.pageXOffset, H.scrollX, U.scrollLeft, ea.scrollLeft), lb), na;
          }
          y <= kb ? ja = 3 : h <= kb ? y - f <= kb ? ja = 2 : D <= sa && a <= g ? D < c + L && (ja = 4) : ja = D <= sa && sa <= g ? 5 : D <= a && a <= g ? 4 : a < D ? 4 : 5 : ja = 4;
          sa = p;
        } else {
          a !== p ? y <= kb ? (ja = 7, sa = !1) : (L -= 60 * a, ja = g - c - y, lb = D - c, L < ja ? L = ja : lb < L && (L = lb), ja = 6) : n <= y || (qa ? ja = 1 : Ka || (y <= kb ? ja = 3 : D < pc ? ja = 3 : uc < g ? ja = 2 : K < c + y - kb || (ja = 2)));
        }
        switch(ja) {
          case 0:
            u(0);
            break;
          case 1:
            u(ca - y);
            break;
          case 2:
            u(g - c - y);
            break;
          case 3:
            u(D - c);
            break;
          case 4:
            u(D - c - f);
            break;
          case 5:
            u(g - c - (f + h));
          case 6:
            u(L);
        }
      }
      ib(Ca, N);
      Ea = L;
      return M && sa;
    }
    function T(a) {
      if (sb) {
        P && (ra = F(H.pageYOffset, H.scrollY, U.scrollTop, ea.scrollTop));
        var f = this !== a.target, h = f && F(a.deltaY, a.wheelDeltaY / 120, a.wheelDelta / -120, a.detail / ("MozMousePixelScroll" === a.type ? 45 : 1));
        f && h && J(9 >= h ? -9 >= h ? -3 : h : 3) && (a.preventDefault(), a.stopPropagation());
      }
    }
    function fa(a) {
      if (sb) {
        var f = P && 0 > Ga.conpare(Ha, "0.9.4"), h = a.target;
        a = W.firstChild;
        var u = 0;
        if (bb(a, h)) {
          if (Fa) {
            f = h.getBoundingClientRect();
            var K = f.bottom - f.top;
            u = f.top - a.getBoundingClientRect().top | 0;
          } else {
            for (K = h.offsetHeight; h && (P ? bb(a, h) : a !== h);) {
              if (f) {
                for (; h.previousSibling;) {
                  h = h.previousSibling, u += h.offsetHeight || 0;
                }
                h = h.parentNode;
              } else {
                u += h.offsetTop, h = h.offsetParent;
              }
            }
          }
          w ? (na = [u, K], m && wb(m), m = oa(X, 7, 1 > P || 536 > xa || 14 > Oa ? 500 : 0)) : (ra = F(H.pageYOffset, H.scrollY, U.scrollTop, ea.scrollTop), J(p, u, K));
        }
      }
    }
    function ka() {
      B.call(v);
    }
    function ba() {
      I.fullscreenElement || I.fullscreen || I.webkitIsFullscreen || I.msFullscreenElement || H.fullScreen ? (cb(v, "id", "blog2slide-root"), Q[1].parentNode.insertBefore(A, Q[1]), la(), I.onkeydown = Y) : q && (Ra(A), Sa(v, "id"), Sa(q, "id"), q = I.onkeydown = p);
    }
    function la() {
      q && Sa(q, "id");
      t = 0 < t ? R < t ? R : t : 0;
      q = Q[t];
      cb(q, "id", "blog2slide-current");
    }
    function Y(a) {
      if ("ArrowRight" === a.key || 39 === a.keyCode) {
        ++t, la();
      } else if ("ArrowLeft" === a.key || 37 === a.keyCode) {
        --t, la();
      }
    }
    ec = P && 0 >= Ga.conpare(Ha, "0.9");
    vb = !(7.2 > S || ec);
    Ib = function(a) {
      Z ? I.write('<script src="' + a + '">\x3c/script>') : Pa || b.length ? b.push(a) : d(a);
    };
    Jb = function() {
      Z || d(b.shift());
    };
    var Z = !vb, V = vb && 7.5 > S;
    if (!Z) {
      var b = [];
      V && (dc = !0);
      Ba(function() {
        d(b.shift());
      });
      var d = function(a) {
        a && (V ? Tb[0].src = a : Qa(Ya, "script", {src:a}));
      };
    }
    var k = [], x = 5.5 <= G && 8 > G ? "keypress" : "keydown";
    if (!Xb) {
      var e = za.transition !== p || za["-o-transition"] !== p || za["-moz-transition"] !== p || za["-webkit-transition"] !== p;
      rb(function(a) {
        if (a.H && db) {
          a = a.G;
          var f = Aa(a), h = "", u;
          if ("A" === Ia(f) && 1 === ic(f).length) {
            var K = ta(f, "href");
            var D = K.split("?")[0].split("#")[0].split(".");
            D = (D[D.length - 1] || "").toLowerCase();
            if ((u = 0 < K.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + D + ".")) {
              aa(f, x, C);
              aa(a, "click", C);
              aa(f, "click", O);
              e && (h = a.naturalWidth + 4 + "px", Ta(a, "width", h));
              Wa(f, "jsPica");
              for (D = f; D = Aa(D);) {
                if (Ja(D, "caption")) {
                  Wa(D, "jsCap");
                  var M = D;
                  var L = mc(M);
                  break;
                }
              }
              k.push({u:f, L:M, S:L, Z:a.src, $:h, N:K, F:a, M:u ? 0 < K.indexOf("/img/a/") ? 2 : 3 : 0 < K.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Xa(function(a, f) {
        for (a = -1; f = k[++a];) {
          ma(f.u, x, C), ma(f.F, "click", C), ma(f.u, "click", O);
        }
      });
    }
    var z = ["jsSidebarFixer1", "jsSidebarFixer2"], w = !(9 > G || S || 1 <= P && 1.3 > P), E = !(5 > eb || 2.2 > Fb || 6 > da(12) || ya(30) && 534 > xa || ya(32) || 7 > G || 9 > S || 1 > P), ha = E || 6 === G || 1 > P, ia = 7.5 > S, U, W, pa, Ca, Fa = ea.getBoundingClientRect && ac, Ea = 0, ra = 0, La, na, l, m;
    qc || Xb || (qb(function(a) {
      if (a) {
        if (!db) {
          return !0;
        }
        a = -1;
        var f;
        U = "CSS1Compat" !== I.compatMode ? ea : nb || ea;
        W = fb("jsSide");
        pa = db;
        if (!W) {
          return !0;
        }
        jb(X);
        Ob(X);
        Ca = xb(Mb(W), "div", {id:"jsSidebarFixer"});
        for (Qb(Ca, fa); 1 < ab(W).length;) {
          Ca.appendChild(ab(W)[1]);
        }
        for (; f = z[++a];) {
          nc(fb(f), T);
        }
        G || ob || 2 > Oa || (La = za.perspective !== p || za.MozPerspective !== p || za["-webkit-perspective"] !== p);
        X();
        return !0;
      }
    }), Xa(function() {
      for (var a = -1, f; f = z[++a];) {
        oc(fb(f), T);
      }
      Rb(Ca, fa);
    }));
    Ba(function() {
      function a(M, L, N, sa) {
        var ja = sa ? "div" : "cite";
        if (0 === L.indexOf("urn:isbn:")) {
          L = L.substr(9).toUpperCase().split("-").join("");
          if (13 === L.length) {
            L = L.toString().slice(3, -1);
            for (var c = 0, g = 0; 9 > g; g++) {
              c += (L.charAt(g) - 0) * (10 - g);
            }
            c = (11 - c % 11) % 11;
            c = 10 === c ? "X" : c.toString();
            L += c;
          }
          10 === L.length && (L = "//www.amazon.co.jp/exec/obidos/ASIN/" + L + "/itozyun-22/ref=nosim/");
        }
        N = sa ? xb(Mb(h), ja, {className:N}) : Qa(h, ja, {className:N});
        Qa(N, "a", 0 === L.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:L, tabIndex:S ? "0" : p} : {href:L, tabIndex:S ? "0" : p}, M);
      }
      if (db) {
        for (var f = $a(db, "blockquote"), h, u = -1, K, D; h = f[++u];) {
          K = ta(h, "title"), D = ta(h, "cite"), K && D ? (Sa(h, "title"), a(K, D, "js-bqLink", !0)) : D && (Sa(h, "cite"), a(H.decodeURI ? decodeURI(D) : D, D, "js-bqCite"));
        }
      }
    });
    var B, v, A, q, Q, t, R;
    Ba(function() {
      var a = fb("blog2slide-start");
      if (a) {
        var f = I.onfullscreenchange !== p ? "f" : I.onmozfullscreenchange !== p ? "mozF" : I.onwebkitfullscreenchange !== p ? "webkitF" : 0;
        B = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullscreen || a.msRequestFullscreen;
        0 !== f || B ? (a.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', aa(a.firstChild, "click", ka), a = Aa(a), v = Aa(a), Q = $a(a, "section"), A = I.createElement("h1"), A.innerHTML = $a(ea, "h1")[0].innerHTML, R = Q.length, Q.splice(0, 0, A), 0 !== f ? aa(I, f + "ullscreenchange", ba) : G ? aa(I, "MSFullscreenChange", ba, !1) : Ob(ba)) : Ra(a);
      }
    });
  })();
  var mb, Cb = !Vb || .9 > P || 8 > S || 5.5 > G, Ua;
  (function() {
    function C(l) {
      return l === "" + l;
    }
    function O(l, m) {
      return Cb ? new b(l, m) : new Vb(l, m);
    }
    function F(l, m, B, v) {
      if (V() - d < z && !v) {
        return l(m);
      }
      oa(X, {U:l, Y:m});
    }
    function X(l) {
      d = V();
      l.U(l.Y);
    }
    function J(l, m) {
      l && mb[l] || (l = w.test(m) ? "default-markup" : "default-code");
      var B = !!mb[l];
      B && F(W, l, 0, !0);
      return B;
    }
    function T() {
      function l(M, L, N) {
        L && (m.h = m.h || [], m.h.push({l:m, B:m.B, O:1, s:Q, D:M, o:L, m:N, R:{}, v:0}));
      }
      var m = k, B = m.m, v = B[0], A = B[2], q = m.D, Q = m.s, t = m.aa.shift(), R = m.R;
      if (t) {
        var a = R[t], f;
        if (!(0 <= a)) {
          if (f = v[t.charAt(0)]) {
            var h = t.match(f[1]);
            a = f[0];
          } else {
            for (a = 0, v = -1; f = A[++v];) {
              if (h = t.match(f[1])) {
                a = f[0];
                break;
              }
            }
          }
          !(f = C(a)) || h && C(h[1]) || (f = !1, a = 11);
          f || (R[t] = a);
        }
        A = m.v;
        R = t.length;
        m.v += R;
        if (f) {
          f = h[1];
          v = t.indexOf(f);
          var u = f.length, K = v + u;
          h[2] && (K = R - h[2].length, v = K - u);
          l(q + A, t.substr(0, v), B);
          if (u && J(a, f)) {
            l(q + A + v, f);
            var D = !0;
          }
          l(q + A + K, t.substr(K), B);
          m.h && m.h.length && (k = m.h.shift());
          D || (k !== m ? F(ia, p, 2) : F(T, p, 2));
        } else {
          Q.push(q + A, a), F(T, p, 2);
        }
      } else {
        m.l ? (k = m.l.h.shift()) ? F(ia, p, 2) : (k = m.l, F(T, p, 2)) : F(Fa, p, 2);
      }
    }
    function fa(l) {
      if (U.length) {
        var m = U.shift(), B = Y[m];
        if (B.pop) {
          Y[m] = O(B[0], B[1]);
        } else if (C(B)) {
          Y[m] = O(B);
        } else {
          return fa(l);
        }
        F(fa, l, 1);
      } else {
        F(W, l);
      }
    }
    function ka(l) {
      for (var m, B = l.firstChild; B; B = B.nextSibling) {
        var v = B.nodeType;
        m = 1 === v ? m ? l : B : 3 === v ? E.test(B.nodeValue) ? l : m : m;
      }
      return m === l ? p : m;
    }
    mb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ba = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], la = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
    [1, 26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], Y = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    Z = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), V = Va.now || function() {
      return +new Va();
    }, b, d, k, x, e, z = 5 > G ? 60 : 5.5 > G ? 0 : Cb ? 20 : 10, w, E;
    Ua = [function(l) {
      H.RegExpCompat = b = l;
    }, function() {
      w = O("^\\s*<");
      E = O("\\S");
    }];
    Cb || (Ua[1](), Ua = p);
    var ha = function() {
      var l = k, m = l.W, B = pa(l.B, l.O), v = l.o = B.o;
      l.I = B.I;
      J(m, v) || (k = p, F(na, p, 0, !0));
    };
    var ia = function() {
      var l = k;
      l.aa = l.o.match(l.m[1]) || [];
      l.s.push(l.D, 0);
      F(T, p, 2);
    };
    var U = [];
    var W = function(l) {
      function m(a) {
        var f = a;
        0 <= a && (f = la[a]);
        0 <= f[1] && (f[1] = B(f[1]));
        return f;
      }
      function B(a) {
        var f = a;
        return 0 <= a && (f = Y[a], !f.exec) ? (U.push(a), a) : f;
      }
      var v = k, A = mb[l];
      C(A) && (A = mb[l] = mb[A]);
      var q = A[0];
      if (0 <= q) {
        q = ba[q];
        if (0 <= q["-num"]) {
          var Q = q["-num"];
          delete q["-num"];
          for (var t = -1; 9 > t;) {
            q["" + ++t] = Q;
          }
        }
        A[0] = q;
      }
      for (var R in q) {
        q[R] = m(q[R]);
      }
      A[1] = B(A[1]);
      q = A[2];
      t = 0;
      for (Q = q.length; t < Q; ++t) {
        q[t] = m(q[t]);
      }
      U.length ? F(fa, l, 2) : (v.m ? v.l && (v.l.h[0].m = A) : v.m = A, F(ia, p, 1));
    };
    var pa = function(l, m) {
      function B(R) {
        var a = R.nodeType;
        if (1 === a) {
          if (!Ja(R, "nocode")) {
            for (a = R.firstChild; a; a = a.nextSibling) {
              B(a);
            }
            a = Ia(R);
            if ("BR" === a || "LI" === a) {
              v[Q] = "\n", q[Q << 1] = A++, q[Q++ << 1 | 1] = R;
            }
          }
        } else if (3 === a || 4 === a) {
          if (a = R.nodeValue) {
            a = m ? a.split("\r\n").join("\n").split("\r").join("\n") : a.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), v[Q] = a, q[Q << 1] = A, A += a.length, q[Q++ << 1 | 1] = R;
          }
        }
      }
      var v = [], A = 0, q = [], Q = 0;
      B(l);
      var t = v.join("");
      "\n" === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1));
      return {o:t, I:q};
    };
    var Ca = function(l, m, B) {
      function v(a) {
        var f = a.nodeType;
        if (1 === f && !Ja(a, "nocode")) {
          if ("BR" === Ia(a)) {
            A(a), a.parentNode && Ra(a);
          } else {
            for (a = a.firstChild; a; a = a.nextSibling) {
              v(a);
            }
          }
        } else if ((3 === f || 4 === f) && B) {
          var h = a.nodeValue, u = h.indexOf("\r\n"), K = 2;
          -1 === u && (u = h.indexOf("\n"), K = 1);
          -1 === u && (u = h.indexOf("\r"));
          -1 !== u && (f = h.substr(0, u), a.nodeValue = f, (h = h.substr(u + K)) && Nb(a, h), A(a), f || Ra(a));
        }
      }
      function A(a) {
        function f(u, K) {
          var D = K ? u.cloneNode(!1) : u, M = u.parentNode;
          if (M) {
            M = f(M, 1);
            var L = u.nextSibling;
            M.appendChild(D);
            for (var N = L; N; N = L) {
              L = N.nextSibling, M.appendChild(N);
            }
          }
          return D;
        }
        for (; !a.nextSibling;) {
          if (a = a.parentNode, !a) {
            return;
          }
        }
        a = f(a.nextSibling, 0);
        for (var h; (h = a.parentNode) && 1 === h.nodeType;) {
          a = h;
        }
        Q.push(a);
      }
      for (var q = I.createElement("li"); l.firstChild;) {
        q.appendChild(l.firstChild);
      }
      for (var Q = [q], t = 0; t < Q.length; ++t) {
        v(Q[t]);
      }
      if (m === (m | 0)) {
        if (10 <= m && 7.2 > S) {
          var R = I.createElement("ol");
          R.innerHTML = '<li value="' + m + '">' + q.innerHTML + "</li>";
          Q[0] = R.firstChild;
        } else {
          cb(q, "value", m);
        }
      }
      R = Qa(l, "ol", {className:"linenums"});
      l = Math.max(0, m - 1 | 0) || 0;
      t = 0;
      for (m = Q.length; t < m; ++t) {
        q = Q[t], yb(q, "L" + (t + l) % 10), q.firstChild || jc(q, "\u00a0"), R.appendChild(q);
      }
    };
    var Fa = function() {
      var l = k, m = l.o, B = m.length, v = 0, A = l.I, q = A.length, Q = 0, t = l.s, R = t.length, a = 0;
      t[R] = B;
      var f, h;
      for (h = f = 0; h < R;) {
        t[h] !== t[h + 2] ? (t[f++] = t[h++], t[f++] = t[h++]) : h += 2;
      }
      R = f;
      for (h = f = 0; h < R;) {
        var u = t[h], K = t[h + 1];
        for (h += 2; h + 2 <= R && t[h + 1] === K;) {
          h += 2;
        }
        t[f++] = u;
        t[f++] = K;
      }
      t.length = f;
      l = l.B;
      R = "";
      l && (R = l.style.display, Ta(l, "display", "none"));
      for (; Q < q;) {
        f = A[Q + 2] || B;
        u = t[a + 2] || B;
        h = Math.min(f, u);
        K = A[Q + 1];
        var D;
        if (1 !== K.nodeType && (D = m.substring(v, h))) {
          9 > G && (D = D.split("\n").join("\r"));
          var M = xb(K, "span", {className:Z[t[a + 1]]}, D);
          Ra(K);
          v < f && (A[Q + 1] = Nb(M, m.substring(h, f)));
        }
        v = h;
        v >= f && (Q += 2);
        v >= u && (a += 2);
      }
      l && Ta(l, "display", R);
      k = p;
      F(na, p, 3, !0);
    };
    var Ea = [], ra;
    qb(function(l) {
      if (l) {
        l = [gb("pre"), gb("code"), gb("xmp")];
        for (var m = 0; m < l.length; ++m) {
          for (var B = 0, v = l[m].length; B < v; ++B) {
            La(l[m][B]);
          }
        }
        return !0;
      }
    });
    var La = function(l) {
      Ea.push(l);
      ra = Ea.length;
      1 === ra && (Ub ? oa(Ub, na) : Ua ? Ua.push(function() {
        oa(na);
      }) : oa(na));
    };
    var na = function() {
      function l(Q, t) {
        return (Q.split(t)[1] || "").split(" ")[0];
      }
      if (!k) {
        ra !== Ea.length && e && e(ra - Ea.length, ra);
        var m = Ea.shift();
        if (m) {
          if (Ja(m, "prettyprint") && !Ja(m, "prettyprinted")) {
            for (var B = !1, v = m.parentNode; v !== ea; v = v.parentNode) {
              var A = Ia(v);
              if (("PRE" === A || "XMP" === A || "CODE" === A) && Ja(v, "prettyprint")) {
                B = !0;
                break;
              }
            }
            if (!B) {
              B = m.className;
              Wa(m, "prettyprinted");
              v = !1;
              if (!v) {
                v = l(B, "lang-") || l(B, "language-");
                var q;
                !v && (q = ka(m)) && "CODE" === Ia(q) && (v = l(q.className, "lang-") || l(q.className, "language-"));
              }
              A = Ia(m);
              "PRE" === A || "XMP" === A ? A = 1 : (A = m.currentStyle, q = I.defaultView, A = (A = A ? A.whiteSpace : q && q.getComputedStyle ? q.getComputedStyle(m, null).getPropertyValue("white-space") : 0) && "pre" === A.substr(0, 3));
              q = !1;
              (q = "true" === q || +q) || (q = l(B, "linenums:") || Ja(m, "linenums"), q = q.length ? +q : q);
              q && Ca(m, q, A);
              k = {W:v, B:m, ca:q, O:A, D:0, v:0, R:{}, s:[]};
              F(ha);
              return;
            }
          }
          F(na, p, 0, !0);
        } else {
          x && x();
        }
      }
    };
    H.PR = {RegExpProxy:O, prettifyElement:La, registerCompleteHandler:function(l, m) {
      x = l;
      e = m;
    }};
  })();
  var Tb = I.scripts || gb("script");
  var wa = Tb[Tb.length - 1].src.split("/");
  --wa.length;
  "js" === wa[wa.length - 1] && --wa.length;
  (wa = wa.join("/")) && (wa += "/");
  var qc = tc || "1" === ta(ea, "mob");
  ub = (qc ? "mb" : "pc") + "/";
  6.1 > eb && (jb ? jb(Kb) : aa(H, "scroll", Kb));
  Xa(gc);
  6.1 > eb && (jb ? jb(Lb) : aa(H, "scroll", Lb));
  Xa(hc);
  10 > G && (11 !== sc || 5 !== G) || (9 > S || 1 > P || !Za && !H.addEventListener ? I.write('<link href="' + wa + "css/" + ub + Hb + '" rel="stylesheet"' + (8 > S ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > S || 1.5 > P || 532 >= xa || 8 > Oa) && Ba(function() {
    Qa(Ya, "link", {href:wa + "css/" + ub + Hb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Cb) {
    if (vb) {
      var Ub = function(C) {
        H.RegExpCompat = function(O) {
          for (var F; F = Ua.shift();) {
            F(O);
          }
          Ua = p;
          oa(C);
          Jb(wa + "js/regexpcompat.js");
        };
        Ub = p;
        Ib(wa + "js/regexpcompat.js");
      };
    } else {
      H.RegExpCompat = function(C) {
        for (var O; O = Ua.shift();) {
          O(C);
        }
        Ua = p;
        Jb(wa + "js/regexpcompat.js");
      }, Ib(wa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, navigator, screen, parseFloat, Number, void 0);

