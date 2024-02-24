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
var D, pb;
(function(Ua, Y, ib, Fc, N, ic, jd, Xb, qb, jc, kc, Gc, lc, t) {
  function ca(O) {
    if (Ua[0] === O) {
      return Ya === Ya + "" ? qb(Ya) : Ya;
    }
  }
  function Ga(O) {
    var K = Ua[3];
    if (Ua[2] === O) {
      return K === K + "" ? qb(K) : K;
    }
  }
  function mc() {
    return 6 > A ? ya.scrollTop : A ? ub.scrollTop : Y.pageYOffset;
  }
  var ya = N.body, cb = ya.style, ub, vb, wb, Ya = Ua[1], A = ca(2) || ca(3), Eb = ca(7), jb = ca(5) || ca(6), L = ca(8) || ca(9), Z = ca(11) || ca(12), Sb = Z && 0 <= Ua.conpare(Ya, "1.9.1"), xb = ca(13), ta = ca(15), Da = ca(16) || ca(17), Hc = ca(10) || ca(25), za = ca(20) || ca(22), Ic = ca(23), Za = ca(21), Yb = ca(24), kd = za || Ic || Za || Yb, Jc = za && qb(ic.userAgent.split("Edg/")[1]), ld = qb(ic.appVersion.split("Trident/")[1]) + 4, Fb = Ga(35) || Ga(36) || Ga(37), Kc = Ga(38) || Ga(39) || 
  Ga(40) || Ga(41), md = 0 <= ic.userAgent.indexOf("Googlebot/"), fb = 0.9 > Z, nc = (Eb ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : 7.2 > L ? "opr70" : 8 > L ? "opr72" : 9.5 > L ? "opr" + (L | 0) : Z && !Sb ? 1.4 <= Z ? "gck19" : 1.3 <= Z ? "gck13" : 1 <= Z ? "gck12" : fb ? 0.8 <= Z ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Zb = "", nd = Ga(1) || Ga(2) || Ga(3) || Ga(4) || Ga(8) || Ga(10), Lc, rb = 8 > A || 7.2 > L ? !1 : t, Mc = cb.transform !== t ? "transform" : 
  cb["-o-transform"] !== t ? "-o-transform" : cb["-ms-transform"] !== t ? "-ms-transform" : cb.MozTransform !== t ? "-moz-transform" : cb["-webkit-transform"] !== t ? "-webkit-transform" : "", Va = [], Nc = [], gb = [], oc, Oc, Pc, Qc, $b, Rc, Sc, ac, bc, Tc = !1, pc = 525 > ta || 3.1 > Da || 2.2 > Za || 10 > L || Z && !Sb || ca(25) || 10 > ca(3) || Ga(32) || Ga(30) || Ga(3), aa, Gb, cc, Uc, od = !!ya.getBoundingClientRect, dc = [], ec = [], qc, Vc, rc, Wc, db = Xb.now || function() {
    return +new Xb();
  };
  (function() {
    function O() {
      for (var V, M = 0, ba = db(); M < I.length;) {
        ba < I[0].t ? ++M : (V = I.splice(M, 1)[0], V.f(V.p));
      }
      qa = I.length ? kc(O, Fa) : 0;
    }
    function K() {
      for (var V, M = 0; M < da.length; ++M) {
        V = da[M], V.f();
      }
    }
    function P() {
      ma && (ma = clearInterval(ma));
    }
    function pa() {
      qa && (qa = Gc(qa));
    }
    D = function(V) {
      dc.push(V);
    };
    pb = function(V) {
      ec.push(V);
    };
    cc = function(V) {
      da.length || (ma = lc(K, ia));
      da.push({f:V, C:++fa});
      return fa;
    };
    Uc = function(V) {
      for (var M = da.length, ba; ba = da[--M];) {
        if (ba.C === V) {
          da.splice(M, 1);
          da[0] || P();
          break;
        }
      }
      return 0;
    };
    qc = function() {
      ma && (P(), ma = lc(K, ia));
    };
    Vc = P;
    var da = [], ia = 500, fa = 0, ma;
    if (5 > A || Eb) {
      Y._wdb_onlooptimer = K, K = "_wdb_onlooptimer()";
    }
    aa = function(V, M, ba) {
      I.length || (qa = kc(O, Fa));
      I.push({f:V, p:M, C:++xa, t:db() + (Fa < ba ? ba : Fa)});
      return xa;
    };
    Gb = function(V) {
      for (var M = I.length, ba; ba = I[--M];) {
        if (ba.C === V) {
          I.splice(M, 1);
          break;
        }
      }
      return 0;
    };
    rc = function() {
      qa && (pa(), qa = kc(O, Fa));
    };
    Wc = pa;
    var I = [], Fa = Da | 0 ? 64 : 16, xa = 0, qa;
    D("[core] TIMER_INTERVAL:" + Fa);
    if (5 > A || Eb) {
      Y._wdb_ontimer = O, O = "_wdb_ontimer()";
    }
  })();
  var yb, Hb, Xc, zb, Yc, Ma, kb, Zc, sc, va, Tb, $c, ad, tc, $a, Ab, bd, ab, Ra, sb, lb, Lb, cd, fc, mb, Bb, uc, Ka, Wa, dd;
  (function() {
    function O(a, b, p) {
      var B = ["<", a], F = 1, Q, ha;
      if (b) {
        for (Q in b) {
          var e = b[Q];
          if (null != e && "" !== e) {
            if ("style" === Q) {
              B[++F] = ' style="';
              for (ha in e) {
                for (var x = ++F, v, C = [], U = ha.split(""), ja = U.length; ja;) {
                  v = U[--ja], "A" <= v && "Z" >= v && (v = "-" + v.toLowerCase()), C[ja] = v;
                }
                B[x] = C.join("") + ":" + e[ha] + ";";
              }
              B[++F] = '"';
            } else {
              "className" === Q && (Q = "class"), B[++F] = " " + Q + '="' + e + '"';
            }
          }
        }
      }
      B[++F] = ">";
      null != p && (M && "font" !== a ? B[++F] = "<font>" + K(p) + "</font>" : B[++F] = K(p));
      B[++F] = "</" + a + ">";
      return B.join("");
    }
    function K(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function P(a) {
      var b = a.split("-"), p = b.length;
      if (2 > p) {
        return a;
      }
      for (; 1 < p;) {
        a = b[--p], b[p] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function pa(a) {
      return da(N, a);
    }
    function da(a, b) {
      var p = "*" === b;
      p = M ? p ? a.all : a.all.tags(b.toUpperCase()) : 6 > A && p ? a.all : a.getElementsByTagName(b);
      for (var B = [], F = 0, Q = p.length; F < Q; ++F) {
        B[F] = p[F];
      }
      return B;
    }
    function ia(a, b) {
      var p = [], B = 0, F, Q = -1;
      if (9 > A || !a.getElementsByClassName) {
        var ha = 6 > A ? a.all : a.getElementsByTagName("*");
      } else {
        var e = !0;
        ha = a.getElementsByClassName(b);
      }
      for (F = ha.length; B < F; ++B) {
        var x = ha[B];
        if (e || (M || 1 === x.nodeType) && xa(x, b)) {
          p[++Q] = x;
        }
      }
      return p;
    }
    function fa(a) {
      return M ? a.parentElement : a.parentNode;
    }
    function ma(a, b, p, B, F, Q) {
      if (M) {
        var ha = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var e = kb(2 > a ? Ma(b) : b);
        e = 2 > a ? e.indexOf(b) + a : e.length;
        b.insertAdjacentHTML(ha, O(p, B, F));
        b = kb(b)[e];
        null != F && ("font" === p ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (ba) {
        b = N.createElement(O(p, B));
      } else {
        b = Q ? N.createElementNS("http://www.w3.org/2000/svg", p) : N.createElement(p);
        if (B) {
          for (ha in B) {
            if ((a = B[ha]) || 0 === a) {
              switch(ha) {
                case "class":
                case "className":
                  fc(b, a);
                  break;
                case "style":
                  Q = b.style;
                  for (e in a) {
                    Q[e] = a[e];
                  }
                  break;
                default:
                  sb(b, ha, a);
              }
            }
          }
          !L || "a" !== p && "A" !== p || !B.href || B["tag-index"] || B.tagIndex || sb(b, "tagIndex", "-0");
        }
        sa || null != F && I(b, F);
      }
      return b;
    }
    function I(a, b) {
      if (M) {
        return ma(2, a, "font", t, b);
      }
      var p = N.createTextNode("" + b);
      a.appendChild(p);
      return p;
    }
    function Fa(a, b) {
      9 > A ? a.className = b : a.setAttribute("class", b);
    }
    function xa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function qa(a, b, p) {
      if (8 > L || 5.5 > A) {
        b = P(b);
      }
      a.style[b] = p;
    }
    function V(a) {
      return 5.5 > A ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var M = 5 > A;
    ub = pa("html")[0];
    vb = pa("head")[0];
    yb = function(a) {
      return Y[a] || N[a] || N.getElementById(a);
    };
    Hb = pa;
    Xc = function(a) {
      return ia(N, a);
    };
    zb = da;
    Yc = ia;
    Ma = fa;
    kb = function(a) {
      a = M ? a.children : a.childNodes;
      for (var b = [], p = a.length; p;) {
        b[--p] = a[p];
      }
      return b;
    };
    Zc = function(a) {
      var b = !(7.03 < L && 7.2 > L) && a.children;
      a = b ? b : a.childNodes;
      for (var p = [], B = a.length, F = -1, Q; B;) {
        if (Q = a[--B], b || 1 === Q.nodeType) {
          M && "FONT" === Q.tagName || (p[++F] = Q);
        }
      }
      return p;
    };
    sc = function(a) {
      return M ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    va = function(a, b, p, B, F) {
      b = ma(2, a, b, p, B, F);
      M || (a.appendChild(b), sa && null != B && I(b, B));
      return b;
    };
    Tb = function(a, b, p, B, F) {
      b = ma(0, a, b, p, B, F);
      M || (fa(a).insertBefore(b, a), sa && null != B && I(b, B));
      return b;
    };
    $c = function(a, b, p, B, F) {
      b = ma(1, a, b, p, B, F);
      var Q;
      M || ((Q = a.nextSibling) ? Ma(Q).insertBefore(b, Q) : Ma(a).appendChild(b), sa && null != B && I(b, B));
      return b;
    };
    ad = I;
    tc = function(a, b) {
      var p;
      if (M) {
        return ma(1, a, "font", t, b);
      }
      var B = N.createTextNode("" + b);
      (p = a.nextSibling) ? Ma(a).insertBefore(B, p) : Ma(a).appendChild(B);
      return B;
    };
    $a = function(a) {
      if (Ma(a)) {
        if (M) {
          a.outerHTML = "";
        } else {
          return 5.5 > A && (a.style.filter = ""), Ma(a).removeChild(a), a;
        }
      } else {
        D("[DOM] p_DOM_remove(), No parentNode!");
      }
    };
    Ab = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== ub;) {
        if (b = Ma(b), a === b) {
          return !0;
        }
      }
    };
    bd = function(a) {
      return M ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ba = 9 > A, sa = ba;
    ab = function(a) {
      return a.tagName.toUpperCase();
    };
    Ra = function(a, b) {
      if (8 > L || 5.5 > A) {
        b = P(b);
      }
      var p = a.getAttribute(b);
      return L && "tabIndex" === b ? "-0" === p ? "" : "" === p ? "-1" : p : p || "";
    };
    sb = function(a, b, p) {
      if (L && "tab-index" === b) {
        "-1" === p ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", p);
      } else {
        if (8 > L || 5.5 > A) {
          b = P(b);
        }
        a.setAttribute(b, p);
      }
    };
    lb = function(a, b) {
      if (L && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > L || 5.5 > A) {
          b = P(b);
        }
        a.removeAttribute(b);
      }
    };
    Lb = function(a, b) {
      if (L && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > L || 5.5 > A) {
        b = P(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    cd = function(a) {
      return a.className;
    };
    fc = Fa;
    mb = xa;
    Bb = function(a, b) {
      var p;
      if (!xa(a, b)) {
        if (p = a.className) {
          p += " ";
        }
        Fa(a, p + b);
      }
    };
    uc = function(a, b) {
      if (xa(a, b)) {
        var p = a.className.split(" ");
        p.splice(p.indexOf(b), 1);
        Fa(a, p.join(" "));
      }
    };
    Ka = qa;
    Wa = function(a, b) {
      var p, B = -1, F;
      if (5.5 > A) {
        if (p = V(a)) {
          for (p = p.split(";"); F = p[++B];) {
            qa(a, F.split(":")[0], "");
          }
        }
        if (b) {
          for (B = -1, p = b.split(";"); F = p[++B];) {
            var Q = F.split(":")[0];
            qa(a, Q, F.substr(Q.length + 1));
          }
        }
      } else if (7.1 > L) {
        if (a.setAttribute("style", ""), b) {
          for (p = b.split(";"); F = p[++B];) {
            F = F.split(":"), qa(a, F[0], F[1]);
          }
        }
      } else {
        9 > L || 1 > Z ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    dd = V;
    Va.splice(0, 0, function() {
      function a(x) {
        x = kb(x);
        for (var v = x.length, C, U, ja; v;) {
          if (C = x[--v], U = C.nodeType, 8 === U) {
            b && ha.push(C);
          } else if (1 === U) {
            switch(U = ab(C), "/" === U.charAt(0) && (U = U.substr(1), e[U] = !0), U) {
              case "STYLE":
                if (7.2 <= L && 9 > L) {
                  break;
                }
              case "LINK":
                M || B || Ab(vb, C) || Q.push(C);
                break;
              case "META":
                U = Ra(C, "name") || Ra(C, "property");
                for (ja = F.length; ja;) {
                  if (0 === U.indexOf(F[--ja])) {
                    ha.push(C);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (md || Lb(C, "async")) {
                  break;
                }
                if (p) {
                  C.innerText = "";
                  p = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Lb(C, "skip-cleanup")) {
                  break;
                }
              case "!":
                ha.push(C);
                break;
              case "SOURCE":
                Y.HTMLSourceElement || ha.push(C);
                break;
              default:
                e[U] ? ha.push(C) : kb(C).length && a(C);
            }
          }
        }
        for (; Q[0];) {
          vb.appendChild(Q.pop());
        }
        for (; ha[0];) {
          $a(ha.pop());
        }
      }
      uc(ub, "nojs");
      wb = yb("jsMain");
      var b = !(8 > L || 5 > A || Eb || fb), p = Qc, B = 7 > A, F = ["og:", "twitter:", "fb:"], Q = [], ha = [], e = {};
      a(ub);
    });
  })();
  var na, Na, eb, Ib, vc, Mb, Jb, wc, xc, yc, ed, fd, gd, Nb, Ha, zc;
  (function() {
    function O() {
      return g ? z ? 2 : k ? 3 : 1 : 0;
    }
    function K(d) {
      Na(Y, "load", K);
      K = t;
      pa(Va, d, !0);
      Va = t;
    }
    function P(d, f) {
      Jb(function() {
        var y = qa(d);
        f(y);
        y.addListener(f);
        return !0;
      });
    }
    function pa(d, f, y) {
      for (var r = 0; r < d.length; ++r) {
        !0 === d[r](f) && (d.splice(r, 1), --r);
      }
      y && (d.length = 0);
    }
    function da(d, f, y) {
      Va || M.length || aa(ia);
      M.push(d, f, y);
    }
    function ia() {
      var d = M, f;
      for (M = []; f = d.shift();) {
        pa(f, d.shift(), d.shift());
      }
    }
    function fa(d) {
      var f = d || event;
      d = sa[f.type];
      var y = -1, r, R;
      5 > A ? f = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : A ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : b && (f.K = f.stopPropagation, f.stopPropagation = function() {
        R = !0;
      });
      for (; r = d[++y];) {
        r.j === this ? (this.g = r.i, A && (f.currentTarget = this), this.g(f), A ? (this.g = ib, this.g = t) : delete this.g) : 7.2 > L && this === N && r.j === Y && (Y.g = r.i, Y.g(f), delete Y.g);
      }
      if (A) {
        return f.preventDefault = f.stopPropagation = ib, f.preventDefault = f.stopPropagation = t, f.returnValue;
      }
      b && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (B = !0), R && !B && f.K(), f.K = f.stopPropagation = t);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var d = 9 === V.offsetWidth;
      Nb !== d && (da(Nc, Nb = d), D("p_cssAvailability:" + Nb));
    }
    function I() {
      !Va && T && (Gb(T), T = aa(Fa));
    }
    function Fa() {
      T = 0;
      pa(u);
    }
    function xa(d) {
      Va || pa(m, d);
    }
    var qa = Y.matchMedia, V, M = [];
    Va.push(function() {
      P = t;
      V = va(ya, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        M.length && aa(ia);
      });
    });
    na = function(d, f, y, r) {
      if (p) {
        d.addEventListener(f, y, r ? ba ? r : r.capture || !0 === r : !1);
      } else {
        var R = {j:d, i:y};
        r = sa[f];
        var Aa = "on" + f, La, hb;
        if (r) {
          for (La = r.length; hb = r[--La];) {
            if (hb.j === d && hb.i === y) {
              return;
            }
          }
          sa[f].push(R);
        } else {
          sa[f] = r = [R], a || (f = d[Aa], "function" === typeof f && f !== fa && r.unshift({j:d, i:f}));
        }
        a ? d.attachEvent(Aa, fa) : d[Aa] = fa;
      }
    };
    Na = function(d, f, y, r) {
      if (p) {
        d.removeEventListener(f, y, r ? ba ? r : r.capture || !0 === r : !1);
      } else {
        r = sa[f];
        f = "on" + f;
        var R, Aa, La;
        if (r) {
          for (R = r.length; Aa = r[--R];) {
            Aa.j === d && (Aa.i === y ? r.splice(R, 1) : La = !0);
          }
          La || (a ? d.detachEvent(f, fa) : A ? (d[f] = ib, d[f] = null) : delete d[f]);
        }
      }
    };
    var ba = !A && !Eb && (new jd('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), sa = {}, a = !1, b = 525.13 > ta, p = !b && !Eb && Y.addEventListener, B;
    b && ub.addEventListener("click", function(d) {
      if (B) {
        return B = !1, d.preventDefault(), !1;
      }
    });
    eb = function(d) {
      Va ? Va.push(d) : alert("Load event has already been dispatched!");
    };
    Ib = function(d) {
      F && F.push(d);
    };
    var F = [];
    if (419.3 >= ta) {
      var Q = function() {
        if (Q) {
          var d = N.readyState;
          "loaded" === d || "complete" === d ? (Q = t, K()) : aa(Q);
        }
      };
      aa(Q);
    } else {
      na(Y, "load", K), fb && aa(function() {
        K && K();
      }, 999);
    }
    A || !fb && 1.8 > Z ? na(Y, "unload", function(d) {
      pa(F, d, !0);
    }) : F = t;
    Jb = function(d) {
      Nc.push(d);
    };
    eb(function() {
      ma();
      cc(ma);
    });
    yc = function(d, f) {
      if (ha) {
        na(d, "focusin", f);
      } else if (e) {
        na(d, "DOMFocusIn", f);
      } else {
        if (v) {
          Ea || (Ea = lc(nb, 333));
        } else if (x || C) {
          na(N, "focus", ja, !0);
        } else {
          return;
        }
        for (var y = U, r = 0, R = y.length; r < R; ++r) {
          if (y[r] === d && y[r + 1] === f) {
            return;
          }
        }
        y.push(d, f);
      }
    };
    ed = function(d, f) {
      if (ha) {
        na(d, "focusin", f);
      } else if (e) {
        na(d, "DOMFocusIn", f, !1);
      } else {
        for (var y = U, r = 0, R = y.length; r < R; ++r) {
          if (y[r] === d && y[r + 1] === f) {
            y.splice(r, 2);
            y.length || (v ? Ea = Uc(Ea) : (x || C) && Na(N, "focus", ja, !0));
            break;
          }
        }
      }
    };
    var ha = 6 <= A || jb || 52 <= Z || 15 <= za || 534 <= ta || 5 <= Da || Ic || 4 <= Za || 4 <= Yb || 11.6 <= ca(8) || 12 <= ca(9), e = 8 <= L || za || Za || Yb || ta || Da, x = 8 > L, v = 6 > A, C = 52 > Z || xb;
    if (C || x) {
      var U = [];
      var ja = function(d) {
        var f = U, y = x ? N.activeElement : d.target;
        if (x) {
          var r = d;
          d = {type:"focusin", target:y, preventDefault:function() {
            r.preventDefault();
          }, stopPropagation:function() {
            r.stopPropagation();
          }};
        }
        for (var R = 0, Aa = f.length; R < Aa; ++R) {
          var La = f[R];
          (La === y || Ab(La, y)) && f[R + 1].call(La, d);
        }
      };
    } else if (v) {
      U = [];
      var Ea, Ia, Ja, nb = function() {
        Ja = Y.onerror;
        Y.onerror = oa;
        var d = N.activeElement;
        if (Ia !== d) {
          Ia = d;
          for (var f = U, y, r = 0, R = f.length; r < R; ++r) {
            y = f[r], (y === d || Ab(y, d)) && f[r + 1].apply(y, [{target:d}]);
          }
        }
        Y.onerror = Ja;
        Ja = t;
      }, oa = function() {
        D("error!");
        Y.onerror = Ja;
        Ja = Ia = t;
        return !0;
      };
    }
    xc = function(d) {
      gb && gb.push(d);
    };
    var l = 60 > Z || xb, g, k, z;
    if (89 <= Z || 89 <= za || Fb && 79 <= Jc || qa && (qa("(forced-colors:none)").matches || qa("(forced-colors:active)").matches)) {
      zc = !0, P("(forced-colors:active)", function(d) {
        g = d.matches;
        Ha = O();
        da(gb, Ha);
        D("(forced-colors:active):" + Ha);
      });
    } else if (10 <= A || jb || Fb && Jc) {
      zc = !0, P("(-ms-high-contrast:black-on-white)", function(d) {
        g = k = d.matches;
        Ha !== O() && (Ha = O(), da(gb, Ha), D("(-ms-high-contrast:black-on-white):" + Ha));
      }), P("(-ms-high-contrast:white-on-black)", function(d) {
        g = z = d.matches;
        Ha !== O() && (Ha = O(), da(gb, Ha), D("(-ms-high-contrast:white-on-black):" + Ha));
      }), P("(-ms-high-contrast:active)", function(d) {
        g = d.matches;
        Ha !== O() && (Ha = O(), da(gb, Ha), D("(-ms-high-contrast:active):" + Ha));
      });
    } else if (Fb && (A || Z && 0 <= Ua.conpare(Ya, "1.8.1") || xb)) {
      var q = function() {
        function d(r, R) {
          if (R && "transparent" === r) {
            return 382.5;
          }
          if ("#" === r.charAt(0)) {
            return parseInt("0x" + r.substr(1, 2), 16) + parseInt("0x" + r.substr(3, 2), 16) + parseInt("0x" + r.substr(5, 2), 16);
          }
          var Aa = r.split("(")[1].split(",");
          return qb(Aa[0]) + qb(Aa[1]) + qb(Aa[2]);
        }
        var f = N.defaultView;
        var y = f ? f.getComputedStyle(V, null) : V.currentStyle;
        f = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        f && (g = "#123456" !== f && "rgb(18,52,86)" !== f, k = d(f) < d(y, !0), z = d(f) > d(y, !0), Ha !== O() && (Ha = O(), D("(forced-colors-fallback):" + Ha), da(gb, Ha, l)));
      };
      Jb(function(d) {
        if (d) {
          return Ka(V, "color", "#123456"), Ka(V, "backgroundColor", "#123456"), l ? (q(), gb = t) : cc(q), q = t, !0;
        }
      });
    } else {
      gb = O = t;
    }
    wc = function(d) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      h.push(d);
    };
    var h = [], E = 7.5 <= L && 8 > L;
    E && function() {
      for (var d = N.images, f = d.length, y; f;) {
        y = d[--f], y.J = y.src, lb(y, "src");
      }
    }();
    eb(function() {
      function d() {
        r ? (R = y[--r], E && sb(R, "src", R.J), Oc(f, E ? R.J : R.src)) : h = t;
      }
      function f(La) {
        pa(h, {G:R, H:La}, !r);
        d();
      }
      var y = N.images || Hb("img"), r = y.length;
      if (12 > L || 532 > ta) {
        d();
      } else {
        for (; r;) {
          var R = y[--r];
          var Aa = 9 > A ? R.complete : 0 <= R.naturalWidth ? R.naturalWidth : R.width;
          da(h, {G:R, H:Aa}, !r);
        }
        h = t;
      }
    });
    vc = function(d) {
      u.push(d);
    };
    var u = [], T;
    na(Y, "resize", I);
    Ib(function() {
      T && Gc(T);
      Na(Y, "resize", I);
    });
    Mb = function(d) {
      m.push(d);
    };
    var m = [], H = 1 > Z || 1.2 <= Z && 1.8 > Z || 7.2 >= L, S;
    H ? cc(function() {
      var d = Y.pageYOffset;
      S !== d && (S = d, xa({type:"scroll", cancelable:!1, stopPropagation:ib, preventDefault:ib}));
    }) : na(Y, "scroll", xa, {passive:!0});
    Ib(function() {
      H || Na(Y, "scroll", xa, {passive:!0});
    });
    fd = function(d, f) {
      if (la) {
        na(d, "wheel", f, {passive:!1});
      } else if (ra) {
        na(d, "mousewheel", f, !1);
      } else if (Sa) {
        na(d, "MozMousePixelScroll", f, !1);
      } else if (Oa) {
        for (var y = Pa, r = 0, R = y.length; r < R; ++r) {
          if (y[r] === d && y[r + 1] === f) {
            return;
          }
        }
        y.length || na(N, "DOMMouseScroll", bb, !1);
        y.push(d, f);
      }
    };
    gd = function(d, f) {
      if (la) {
        Na(d, "wheel", f, {passive:!1});
      } else if (ra) {
        Na(d, "mousewheel", f, !1);
      } else if (Sa) {
        Na(d, "MozMousePixelScroll", f, !1);
      } else if (Oa) {
        for (var y = Pa, r = 0, R = y.length; r < R; ++r) {
          if (y[r] === d && y[r + 1] === f) {
            y.splice(r, 2);
            y.length || Na(N, "DOMMouseScroll", bb, !1);
            break;
          }
        }
      }
    };
    var la = 9 <= A || jb || 17 <= Z || xb || 31 <= za || 537.7 <= ta, ra = 6 <= A || jb || 9 <= L || za || 522 <= ta || Da, Sa = Sb, Oa = Z && 0 <= Ua.conpare(Ya, "0.9.7") && !Sb;
    if (Oa) {
      var Pa = [], bb = function(d) {
        for (var f = Pa, y = d.target, r, R = 0, Aa = f.length; R < Aa; ++R) {
          r = f[R], Ab(r, y) && f[R + 1].call(r, d);
        }
      };
    }
  })();
  (function() {
    function O(k) {
      switch(k) {
        case 1:
          return p;
        case 2:
          return !!B;
        case 3:
          return !!F;
        case 4:
          return !!Q;
        case 5:
          return e;
        case 6:
          return ha && !qa;
      }
      return !1;
    }
    function K(k) {
      x(k);
      l && !k && $a(l);
      x = v = C = U = ja = Ea = nb = oa = l = g = t;
    }
    function P(k) {
      var z = '1.6em "' + k + '"';
      D("[webFontTest] testByNativeFontLoaderAPI start.");
      N.fonts.load(z).then(function(q) {
        D("[webFontTest] fonts.check() : " + N.fonts.check(z, "i") + ", fonts.length : " + q.length);
        (q = fa(v)) ? aa(K, q) : (D("[webFontTest] mesureWebFont() : false"), da(!0));
      }, function(q) {
        D("[webFontTest] fonts.load() rejected! " + q);
        rb !== t ? ma(rb) : oc(ma);
      });
    }
    function pa(k) {
      return N.hidden || N.msHidden || N.mozHidden || N.webkitHidden ? (Ja = db(), !1) : k < db() - Ja;
    }
    function da(k) {
      k && (D("[webFontTest] testWebFont start."), Ja = db());
      (k = fa(v, Ia)) ? (D("[webFontTest] testWebFont mesurement success : " + k), K(k)) : pa(Ia) ? (D("[webFontTest] testWebFont timeout!"), nb ? I() : xa ? K(0) : rb !== t ? ma(rb) : oc(ma)) : aa(da);
    }
    function ia() {
      return va(ya, 5 > A ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":'"liga=1"', "-moz-font-feature-settings":'"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, sa);
    }
    function fa(k, z) {
      var q = 0, h = -1, E = [];
      if (!g) {
        var u = -1;
        var T;
        oa = ia();
        for (g = []; T = b[++u];) {
          Ka(oa, "fontFamily", T), g[u] = oa.offsetWidth;
        }
        D("[webFontTest] default width " + g.join(", "));
      }
      for (5 > A ? oa || (oa = ia()) : Ma(oa) || ya.appendChild(oa); u = b[++h];) {
        Ka(oa, "fontFamily", '"' + k + '",' + u);
        var m = oa.offsetWidth;
        a ? E[h] = m : (E[h] = m, m !== g[h] && (q = 1));
      }
      if (a && m === E[0] && m === E[1]) {
        for (D("[webFontTest] Hit... : width=" + m), q = 1, h = -1; 0 <= (m = g[++h]);) {
          if (m === E[0] && m === E[1] && m === E[2]) {
            D("[webFontTest] Failed! : font[" + h + "]=" + b[h]);
            q = 0;
            break;
          }
        }
      }
      !A && q && ja && (oa.textContent = ja, m = oa.offsetWidth, oa.textContent = Ea, q = m === oa.offsetWidth ? 2 : 1, oa.textContent = sa);
      oa = $a(oa);
      z && (q || pa(z)) && D("[webFontTest] " + k + " " + E.join(", "));
      return q;
    }
    function ma(k) {
      D("[webFontTest] onTestDataURIComplete : " + k);
      k ? (nb = !0, Ia = ba, D("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), I()) : K(0);
    }
    function I() {
      if (C) {
        for (; C.length;) {
          var k = C.shift(), z = C.shift();
          if (O(k)) {
            D("[webFontTest] maybe can use! " + z);
            l = Sc(z, Fa, U, l);
            return;
          }
        }
      }
      K(0);
    }
    function Fa(k) {
      k ? da(!0) : I();
    }
    oc = !1 === rb ? function(k) {
      aa(k, !1);
    } : function(k) {
      function z(E) {
        h && (h = Gb(h), rb = E, q.onload = q.onerror = ib, aa(k, E));
      }
      if (rb !== t) {
        D("[dataURITest] already done : " + rb), aa(k, rb);
      } else {
        D("[dataURITest] start!");
        var q = new Image(), h = aa(z, !1, 999);
        q.onerror = function() {
          D("[dataURITest] no DATA URI!");
          z(!1);
        };
        q.onload = function() {
          D("[dataURITest] DATA URI:" + (1 === q.width * q.height));
          z(1 === q.width * q.height);
        };
        q.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > A && eb(function() {
      var k = va(ya, "div");
      Wa(k, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lc = 1 < k.offsetHeight;
      $a(k);
    });
    Oc = function(k, z) {
      function q() {
        E || !u || h.complete ? (D("[imageTest] timer -> img.complete. img.width=" + h.width), aa(k, !!h.width), h.onerror = h.onload = ib, h = k = t) : (--u, aa(q));
      }
      var h = new Image(), E, u = 99;
      D("[imageTest] start.");
      h.onerror = function() {
        D("[imageTest] error!");
        E = !0;
      };
      h.onload = function() {
        D("[imageTest] onload.");
        E = !0;
      };
      h.src = z;
      aa(q);
    };
    Pc = function(k, z, q, h, E, u, T) {
      x = k;
      v = z;
      C = q;
      U = h;
      ja = E;
      Ea = u;
      Ia = T || M;
      v = V + v;
      D("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      D("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!pc);
      ca(10) ? aa(K, 1) : pc ? aa(K, 0) : !N.fonts || 603 > ta || 11 > Da ? (D("[webFontTest] No native font loader."), da(!0)) : (D("[webFontTest] Use Native font loader."), P(v));
    };
    var xa = 9 > A, qa = 6 > za || L || 530 > ta || 5 > Da || Ga(11), V = "bad_" + db() + "_", M = 5E3, ba = 500, sa = "mmmmmmmmmmlliiiiiiiii", a = 9 <= za && 18 > za || 3 > Za || 7 > Da || ta && 0 >= Ua.conpare(Ya, "536.11"), b = ["monospace", "sans-serif", "serif"];
    pc || (a && za && D("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + za), a && Da && D("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Da), a && ta && D("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + ta), a && Za && D("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + Za));
    var p = 14 <= jb || 36 <= za || 39 <= Z || 3 <= xb || 602 <= ta && Kc && 0 <= Ua.conpare("10.12", Kc) || 10 <= Da, B = 6 <= za || Z && 0 <= Ua.conpare(Ya, "1.9.2") || xb || 533 <= ta || 5 <= Da || 4.4 <= Za || 11.5 <= L || jb || 9 <= ca(2) || 10 <= ca(3), F = 2 <= za || Sb || xb || 525 <= ta || 4 <= Da || 2.2 <= Za || 10.1 <= L || jb || 9 <= ca(2) || 10 <= ca(3), Q = F, ha = 5.1 <= Fb && 5.2 >= Fb && 40 > za || 6 <= Fb && 6.1 > Fb && 51 > za || 37 > za || 525 <= ta || 3.1 <= Da || 3 <= Za || 
    11.5 <= L, e = 4 <= ca(2) || 10 <= ca(3), x, v, C, U, ja, Ea, Ia, Ja, nb, oa, l, g;
  })();
  (function() {
    function O(e) {
      if (2 !== e) {
        D("[VectorIcon] " + e);
        var x = Xc("ico"), v = 0, C = x.length;
        if (C) {
          if (1 === e) {
            for (; v < C; ++v) {
              e = x[v];
              var U = bd(e);
              if (U = ha[U]) {
                e.innerHTML = U;
              }
            }
          } else {
            B && !p && (Y.VectorIconFallback = bz, ac(Ba + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        bc(Ba + "js/vector-icon-svg-fallback.js");
        return [ha, x, va, p];
      }
      bz = !1;
    }
    wc(function(e) {
      var x = e.G;
      e = e.H;
      var v = Ma(x);
      !mb(v, "aBodyRoot") && e ? Bb(v, "js-image-has-been-loaded") : e || Ra(x, "alt") || "lazy" === Ra(x, "loading") || Ka(x, "display", "none");
    });
    fb && (Va.splice(1, 0, function() {
      for (var e = Yc(wb, "RichLink-sep"), x, v, C, U, ja, Ea; x = e.shift();) {
        for (x = kb(x); v = x.shift();) {
          if ("A" === ab(v) && !v.innerHTML) {
            for (D("\u25a0 Broken Anchor " + v.parentNode.innerHTML); C = x.shift();) {
              if (1 === C.nodeType) {
                if ("A" === ab(C)) {
                  break;
                }
                for (U = zb(C, "A"); ja = U.shift();) {
                  for (Ea = kb(ja); Ea.length;) {
                    ja.parentNode.insertBefore(Ea.shift(), ja);
                  }
                  $a(ja);
                }
              }
              v.appendChild(C);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var e = Hb("A"), x, v; x = e.shift();) {
        "A" !== ab(x) || x.innerHTML || (v = x.nextSibling && x.nextSibling.firstChild) && v.href === x.href && (D("\u25b2 Broken Anchor " + v.innerHTML), $a(x));
      }
    }));
    5.5 <= A && 8 > A && gb && xc(function(e) {
      for (var x = zb(ya, "a"), v = x.length, C = 0; C < v; ++C) {
        x[C].hideFocus = !e;
      }
    });
    if (!zc && gb) {
      var K, P = function() {
        K = va(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ba + "css/" + Zb + "hc/" + nc});
        if (Mc || 5.5 <= A && 9 > A && Lc) {
          Bb(ya, "js-canuse-css-rotate-when-forced-colors-mode"), D("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        P = t;
      };
      xc(function(e) {
        e && !K ? P() : K && (e ? vb.appendChild(K) : $a(K));
      });
    }
    L && eb(function() {
      for (var e = zb(ya, "a"), x = e.length, v = 0, C; v < x; ++v) {
        C = e[v], "-1" === Ra(C, "tabIndex") ? lb(C, "tabIndex") : Ra(C, "href") && sb(C, "tabIndex", "0");
      }
      e = zb(ya, "input");
      v = 0;
      for (x = e.length; v < x; ++v) {
        C = e[v], "hidden" === Ra(C, "type") && lb(C, "tabIndex");
      }
    });
    if (Z && 0 > Ua.conpare(Ya, "0.9.5")) {
      Tc = !0;
      var pa, da, ia, fa, ma;
      eb(function() {
        na(N, "keydown", I);
        na(N, "keyup", Fa);
        yc(ya, xa);
        fb || (na(Y, "blur", sa), na(ya, "click", ba));
      });
      var I = fb ? function(e) {
        16 === e.keyCode ? pa = !0 : 9 === e.keyCode && fa && qa(fa, !0) && (fa.blur && fa.blur(), e.stopPropagation(), e.preventDefault(), aa(M));
      } : function(e) {
        16 === e.keyCode ? pa = !0 : 9 === e.keyCode && (da = db());
      }, Fa = function(e) {
        16 === e.keyCode && (pa = !1);
      }, xa = fb ? function(e) {
        e.target.innerHTML || D(e.target.parentNode.innerHTML);
        fa = e.target;
      } : function(e) {
        var x = e.target;
        if (fa === x) {
          ia = t;
        } else if (ia) {
          x === ia ? (e.stopPropagation(), M(!0)) : (x.blur && b(x), e.preventDefault(), M());
        } else {
          if (e = fa) {
            fa = t, b(e);
          }
          ia = x;
          M(!0);
        }
      }, qa = function(e, x) {
        var v = db(), C = ya, U = "nextSibling", ja = "firstChild";
        pa && (x || v - 99 < da && da <= v) && (U = "previousSibling", ja = "lastChild");
        for (ia = t; e !== C;) {
          if (Ea) {
            v = e;
            var Ea = !1;
          } else {
            v = e[U];
          }
          if (v) {
            if (1 === v.nodeType) {
              if (V(v)) {
                return ia = v, !0;
              }
              e = (Ea = v[ja]) || v;
            } else {
              e = v;
            }
          } else {
            e = e.parentNode;
          }
        }
      }, V = function(e, x) {
        function v() {
          return "-1" !== Ra(e, "tab-index");
        }
        function C() {
          return 0 < e.offsetHeight * e.offsetWidth;
        }
        if (e.focus) {
          var U;
          switch({A:x ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[ab(e)]) {
            case 1:
              if (Lb(e, "href") && v() && C()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ra(e, "type") && v() && !Lb(e, "disabled") && C()) {
                return !0;
              }
              break;
            case 3:
              if (v() && !Lb(e, "disabled") && C()) {
                return !0;
              }
              break;
            default:
              if ((U = Ra(e, "tab-index")) && "-1" !== U && C()) {
                return !0;
              }
          }
        }
      }, M = function(e) {
        ma = 0;
        ia && (fb || na(ia, "blur", a), fa = ia, ia = t, e || fa.focus());
      };
      if (!fb) {
        var ba = function(e) {
          var x = e.target;
          if (fa && V(x, !0)) {
            var v = fa;
            fa = t;
            b(v);
            ia = x;
            e.stopPropagation();
            e.preventDefault();
            M();
          }
        }, sa = function(e) {
          e.target === N && (ia = t);
        }, a = function(e) {
          e = e.target;
          Na(e, "blur", a);
          fa === e && qa(e) && (ma || (ma = aa(M)));
        }, b = function(e) {
          Na(e, "blur", a);
          e.blur();
        };
      }
    }
    Jb(function(e) {
      if (e) {
        return Pc(O, "web-doc-base", [1, Ba + "iconfont/woff2.css", 2, Ba + "iconfont/woff.css", 4, Ba + "iconfont/otf.css", 3, Ba + "iconfont/ttf.css", 6, Ba + "iconfont/svg.css"], "js-myIconFont-testCssReady", F, Q), O = t, !0;
      }
    });
    var p = 8 <= ca(8) && 9 > L, B = 9 <= A || jb || 1.8 <= Z || xb || 8 <= ca(8) || 9 <= ca(9) || 3 <= ca(21) || kd || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || Da, F = "IE", Q = "\ueadb", ha = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", 
    Android:"\ud83e\udd16"};
  })();
  (function() {
    function O(c) {
      var n = Ia.length, G, J, W, w;
      if (13 === (c.keyCode || c.V) || c.type !== Ja) {
        for (; n;) {
          var ea = Ia[--n];
          if (ea.F === this || ea.u === this) {
            n = ea.F;
            var X = G = ea.u;
            if (ea.P) {
              if (Ka(n, "width", ea.$), n.src = ea.Z, fc(X, ea.T), n = ea.L) {
                Wa(n, ea.S), uc(n, "js-captioned-thumbnail__large");
              }
            } else {
              if (J = ea.N) {
                delete ea.N;
                if (ea.M) {
                  for (; G = Ma(G);) {
                    if (!mb(G, "caption")) {
                      var ka = ab(G);
                      if ("DIV" === ka || "P" === ka || "BLOCKQUOT" === ka || "LI" === ka || "DD" === ka || "TD" === ka || "TH" === ka || "FORM" === ka || "PRE" === ka) {
                        break;
                      }
                    }
                  }
                  G = (G.offsetWidth | 0) - 4;
                  1600 < G && (G = 1600);
                  if (2 === ea.M) {
                    J = J.split("=");
                    ka = J.length;
                    if (W = J[ka - 1]) {
                      (w = qb(W.substr(1))) && W === "s" + w ? J[ka - 1] = "w" + G : J[ka] = "w" + G;
                    }
                    J = J.join("=");
                  } else {
                    J = J.split("/");
                    ka = J.length;
                    if (W = J[ka - 2]) {
                      (w = qb(W.substr(1))) && W === "s" + w ? J[ka - 2] = "w" + G : J.splice(ka - 1, 0, "w" + G);
                    }
                    J = J.join("/");
                  }
                }
                ea.X = J;
              }
              ea.T = cd(X);
              Bb(X, "js-pica-thumbnail__large");
              Ka(n, "width", "");
              n.src = ea.X;
              if (n = ea.L) {
                Wa(n, ""), Bb(n, "js-captioned-thumbnail__large");
              }
            }
            ea.P = !ea.P;
            break;
          }
        }
        K(c);
      }
    }
    function K(c) {
      c.preventDefault();
      c.stopPropagation();
    }
    function P(c) {
      var n = S;
      if (Nb) {
        if (la && !n) {
          if (db() < la) {
            return;
          }
          la = t;
        }
        7 === c ? (I("t"), ra = 0) : (I("s"), ra && (ra = Gb(ra)), m = mc());
        n ? (S = da(t, n[0], n[1])) || (la = db() + 99) : da();
        xa();
      } else {
        S = t;
      }
    }
    function pa() {
      I("w.blur");
    }
    function da(c, n, G) {
      function J(ob) {
        X = ob;
        if (u) {
          ka = u + ":translate" + (H ? "3D(0," : "(0,") + ob + (H ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ob) {
          if (g || k) {
            var Ac = q.offsetWidth;
          }
          ka = g ? "position:fixed;width:" + Ac + "px;top:" + (ob - W + wa) + "px" : z ? "top:" + ob + "px" : "position:absolute;top:" + ob + "px;left:0";
          if (k && ka) {
            var Ub = 8 > A ? " " : ",";
            ka += ";clip:rect(" + (0 > ob ? -ob + "px" + Ub + Ac + "px" + Ub + Qa : "0" + Ub + Ac + "px" + Ub + (ob + Qa < Vb ? Qa : Vb - ob)) + "px" + Ub + "0)";
          }
        }
      }
      var W = m, w = h, ea = q.offsetTop === w.offsetTop, X = 0, ka = "", Xa = !0;
      if (ea) {
        for (var Ca = 0, wa = 0, Ta = w; Ta && Ta !== ya;) {
          wa += Ta.offsetTop, Ta = Ta.offsetParent;
        }
        X = T;
        Ta = 11 > A ? ub.offsetHeight : Y.innerHeight;
        var Bc = w.offsetHeight, Qa = E.offsetHeight, Vb = Qa < Bc ? Bc : Qa, Cb = W, Ob = Cb + Ta, gc = wa, hc = gc + Vb, hd = wa + X, pd = hd + Qa;
        w = Cb < gc ? gc : Cb;
        var Db = hc < Ob ? hc : Ob, Pb = Db - w;
        Cb = hc <= Cb;
        Ob = Ob <= gc;
        if (n !== t) {
          Xa = wa + n;
          c = Xa + G;
          if (Cb || Ob) {
            return Ta <= G ? (n = wa, I("4.1.1")) : Cb ? (n = hc - G, I("4.1.2")) : (n = wa + G - Ta, I("4.1.3")), la = t, Y.scroll(0, n), I("4.1.*"), S;
          }
          Qa <= Pb ? (Ca = 3, I("4.2")) : G <= Pb ? Qa - n <= Pb ? (Ca = 2, I("4.3.1")) : w <= Xa && c <= Db ? w < wa + X && (Ca = 4, I("4.3.2")) : w <= Xa && Xa <= Db ? (Ca = 5, I("4.3.3")) : w <= c && c <= Db ? (Ca = 4, I("4.3.4")) : c < w ? (Ca = 4, I("4.3.5")) : (Ca = 5, I("4.3.6")) : (Ca = 4, I("4.4"));
          Xa = !1;
        } else {
          c !== t ? Qa <= Pb ? (Ca = 7, Xa = !1, I("3.1")) : (X -= 60 * c, Ca = Db - wa - Qa, c = w - wa, X < Ca ? (X = Ca, I("3.2.1")) : c < X ? (X = c, I("3.2.2")) : I("3.2.3"), Ca = 6) : Bc <= Qa || (Cb ? (Ca = 1, I("2.2.1")) : Ob ? I("2.2.2") : Qa <= Pb ? (Ca = 3, I("2.3")) : w < hd ? (Ca = 3, I("2.4.1")) : pd < Db ? (Ca = 2, I("2.4.2")) : W < wa + Qa - Pb ? I("2.4.3") : (Ca = 2, I("2.4.4")));
        }
        switch(Ca) {
          case 0:
            J(0);
            break;
          case 1:
            J(Vb - Qa);
            break;
          case 2:
            J(Db - wa - Qa);
            break;
          case 3:
            J(w - wa);
            break;
          case 4:
            J(w - wa - n);
            break;
          case 5:
            J(Db - wa - (n + G));
          case 6:
            J(X);
        }
        qa(X, Qa, wa, Vb, Ta, n || "-", G || "-");
      } else {
        qa(X, "-", "-", "-", "-", "-", "-");
      }
      Wa(E, ka);
      T = X;
      return ea && Xa;
    }
    function ia(c) {
      if (Nb && (I("m"), Z && (m = mc(), xa()), this !== c.target)) {
        var n = jc(c.deltaY) ? c.deltaY : jc(c.wheelDeltaY) ? c.wheelDeltaY / 120 : jc(c.wheelDelta) ? c.wheelDelta / -120 : c.detail / ("MozMousePixelScroll" === c.type ? 45 : 1);
        n && da(9 >= n ? -9 >= n ? -3 : n : 3) && (c.preventDefault(), c.stopPropagation());
      }
    }
    function fa(c) {
      if (Nb) {
        var n = Z && 0 > Ua.conpare(Ya, "0.9.4"), G = c.target, J = E, W = 0;
        if (Ab(J, G)) {
          I(c.type || "ie5focus");
          na(G, "blur", ma);
          if (u) {
            n = G.getBoundingClientRect(), c = n.bottom - n.top, W = n.top - J.getBoundingClientRect().top | 0;
          } else {
            c = G.offsetHeight;
            var w = G;
            if (n) {
              for (var ea = []; w && (Z ? Ab(J, w) : J !== w);) {
                for (; w.previousSibling;) {
                  w = w.previousSibling, w.tagName && ea.unshift(w.tagName + ":" + w.offsetTop);
                }
                w = w.offsetParent;
              }
              D(ea.join());
              w = G;
            }
            for (; w && (Z ? Ab(J, w) : J !== w);) {
              if (n) {
                for (; w.previousSibling;) {
                  w = w.previousSibling, W += w.offsetHeight || 0;
                }
                w = w.parentNode;
              } else {
                W += w.offsetTop, w = w.offsetParent;
              }
            }
          }
          l ? (S = [W, c], ra && Gb(ra), ra = aa(P, 7, 1 > Z || 536 > ta || 14 > za ? 500 : 0)) : (m = mc(), da(t, W, c));
          V(W, c);
        }
      }
    }
    function ma() {
      Na(this, "blur", ma);
      V(0, 0);
    }
    function I(c) {
      Pa && (r && (r = Gb(r)), r = aa(Fa, 0, 1400), Pa.innerHTML += " " + c);
    }
    function Fa() {
      Pa.innerHTML = "";
    }
    function xa() {
      d && (Ka(d, "top", (m / 10 | 0) + "px"), Oa.innerHTML = " scrl:" + (m | 0));
    }
    function qa(c, n, G, J, W, w, ea) {
      f && (Ka(f, "top", ((c + G) / 10 | 0) + "px"), Ka(f, "height", (n / 10 | 0) + "px"), Ka(d, "height", (W / 10 | 0) + "px"), Ka(bb, "height", (ya.scrollHeight / 10 | 0) + "px"), Sa.innerHTML = "conY:" + G + "/sidY" + c + ", conH:" + J + "/sidH" + n + ", focY:" + w + " focH:" + ea);
    }
    function V(c, n) {
      y && (Ka(y, "top", (c / 10 | 0) + "px"), Ka(y, "height", (n / 10 | 0) + "px"));
    }
    function M() {
      R.call(Aa);
    }
    function ba() {
      N.fullscreenElement || N.fullscreen || N.webkitIsFullscreen || N.msFullscreenElement || Y.fullScreen ? (sb(Aa, "id", "blog2slide-root"), Qb[1].parentNode.insertBefore(La, Qb[1]), sa(), N.onkeydown = a) : hb && ($a(La), lb(Aa, "id"), lb(hb, "id"), hb = N.onkeydown = t);
    }
    function sa() {
      hb && lb(hb, "id");
      Kb = 0 < Kb ? Cc < Kb ? Cc : Kb : 0;
      hb = Qb[Kb];
      sb(hb, "id", "blog2slide-current");
    }
    function a(c) {
      if ("ArrowRight" === c.key || 39 === c.keyCode) {
        ++Kb, sa();
      } else if ("ArrowLeft" === c.key || 37 === c.keyCode) {
        --Kb, sa();
      }
    }
    Sc = function(c, n, G, J) {
      J = J || va(vb, "link", {type:"text/css", rel:"stylesheet"});
      var W;
      if (x) {
        (W = yb(G)) ? lb(W, "id") : W = va(ya, "div", {"aria-hidden":"true", className:G});
        var w = W.offsetWidth;
        D("[CSS Loader] widthBeforeCSSLoaded = " + w);
        sb(W, "id", G);
      }
      e(J, c, n, W, w);
      return J;
    };
    var b = Z && 0 > Ua.conpare(Ya, "0.9.1"), p = 11 <= A || jb || 9 <= L && 9.5 > L, B = 11 > A, F = 7.2 <= L && 7.5 > L, Q = 9 > Z && !b || 19 > za || 4.3 > Za || 2 > Yb || 536 > ta || 6 > Da || 7 <= L && 9 > L && !F, ha = !b && !p && !B && !F && !Q, e = ha ? function(c, n, G) {
      D("[CSS Loader] onload + onerror");
      c.onload = bz;
      c.onerror = function() {
        c.onload = c.onerror = null;
        aa(G, !1);
      };
      c.href = n;
      function bz() {
        c.onload = c.onerror = null;
        aa(G, !0);
      }
      bz = !1;
    } : p ? function(c, n, G, J, W) {
      D("[CSS Loader] onload + mesure");
      c.onload = bz;
      c.href = n;
      function bz() {
        aa(G, x(J, W));
        c.onload = null;
        J = t;
      }
      bz = !1;
    } : B ? function(c, n, G, J, W) {
      D("[CSS Loader] onreadystatechange + onerror");
      c.onreadystatechange = bz;
      c.href = n;
      function bz() {
        "complete" === c.readyState && (aa(G, x(J, W)), J = t, c.V = ib);
      }
      bz = !1;
    } : Q || F ? function(c, n, G, J, W) {
      function w() {
        X && (ka = Gb(ka), D("[CSS Loader] onComplete"), Xa = db() + 999, aa(ea, 0, 99), Q ? X.onerror = null : X.removeEventListener("load", w, !1), X = t);
      }
      function ea() {
        x(J, W) ? (J = t, aa(G, !0)) : db() < Xa ? aa(ea, 0, 99) : (J = t, aa(G, !1));
      }
      var X = new Image(), ka = aa(w, 0, 5E3), Xa;
      Q ? (D("[CSS Loader] img.onerror + mesure"), X.onerror = w) : (D('[CSS Loader] img.addEventListener("load") + mesure'), X.addEventListener("load", w, !1));
      X.src = c.href = n;
    } : function(c, n, G) {
      D("[CSS Loader] UNSUPPORTED");
      aa(G, !1);
    }, x = !ha && !b && function(c, n) {
      D("[CSS Loader] elmTest.offsetWidth = " + c.offsetWidth);
      return c.offsetWidth !== n;
    };
    Rc = Z && 0 >= Ua.conpare(Ya, "0.9");
    $b = !(7.2 > L || Rc);
    ac = function(c) {
      v ? Va ? N.write('<script src="' + c + '">\x3c/script>') : pb("[DynamicScvriptLoader] Document already loaded! " + c) : Va || ja.length ? ja.push(c) : Ea(c);
    };
    bc = function(c) {
      v ? D("[DynamicScvriptLoader] " + c + " loaded.") : c === U ? Ea(ja.shift()) : pb(c + " <> " + U);
    };
    var v = !$b, C = $b && 7.5 > L, U;
    if (!v) {
      var ja = [];
      C && (Qc = !0);
      eb(function() {
        Ea(ja.shift());
      });
      var Ea = function(c) {
        if (U = c) {
          C ? Dc[0].src = c : va(vb, "script", {src:c});
        }
      };
    }
    var Ia = [], Ja = 5.5 <= A && 8 > A ? "keypress" : "keydown";
    if (!Hc) {
      var nb = cb.transition !== t || cb["-o-transition"] !== t || cb["-moz-transition"] !== t || cb["-webkit-transition"] !== t;
      wc(function(c) {
        if (c.H && wb) {
          c = c.G;
          var n = Ma(c), G = "", J;
          if ("A" === ab(n) && 1 === Zc(n).length) {
            var W = Ra(n, "href");
            var w = W.split("?")[0].split("#")[0].split(".");
            w = (w[w.length - 1] || "").toLowerCase();
            if ((J = 0 < W.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + w + ".")) {
              na(n, Ja, O);
              na(c, "click", O);
              na(n, "click", K);
              nb && (G = c.naturalWidth + "px", Ka(c, "width", G));
              Bb(n, "js-pica-thumbnail");
              for (w = n; w = Ma(w);) {
                if (mb(w, "caption")) {
                  Bb(w, "js-captioned-thumbnail");
                  var ea = w;
                  var X = dd(ea);
                  break;
                }
              }
              Ia.push({u:n, L:ea, S:X, Z:c.src, $:G, N:W, F:c, M:J ? 0 < W.indexOf("/img/a/") ? 2 : 3 : 0 < W.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Ib(function(c, n) {
        for (c = -1; n = Ia[++c];) {
          Na(n.u, Ja, O), Na(n.F, "click", O), Na(n.u, "click", K);
        }
      });
    }
    var oa = ["jsSidebarFixer1", "jsSidebarFixer2"], l = !(9 > A || L || 1 <= Z && 1.3 > Z || Tc), g = !(5 > Da || 2.2 > Za || 6 > ca(12) || Ga(30) && 534 > ta || Ga(32) || 7 > A || 9 > L || 1 > Z), k = g || 6 === A || 1 > Z, z = 7.5 > L, q, h, E, u = od && Mc, T = 0, m = 0, H, S, la, ra;
    id || Hc || (Jb(function(c) {
      if (c) {
        if (!wb) {
          return !0;
        }
        c = -1;
        var n;
        q = yb("jsSide");
        h = wb;
        if (!q) {
          return !0;
        }
        Mb(P);
        vc(P);
        E = Tb(sc(q), "div", {id:"jsSidebarFixer"});
        na(Y, "blur", pa);
        for (yc(E, fa); 1 < kb(q).length;) {
          E.appendChild(kb(q)[1]);
        }
        for (; n = oa[++c];) {
          fd(yb(n), ia);
        }
        A || jb || 2 > za || (H = cb.perspective !== t || cb.MozPerspective !== t || cb["-webkit-perspective"] !== t);
        P();
        return !0;
      }
    }), Ib(function() {
      for (var c = -1, n; n = oa[++c];) {
        gd(yb(n), ia);
      }
      Na(Y, "blur", pa);
      ed(E, fa);
    }));
    if (!(5 > Da)) {
      var Sa, Oa, Pa, bb, d, f, y, r;
      Jb(function(c) {
        if (c) {
          if (!wb) {
            return !0;
          }
          var n = kb(ya);
          c = Tb(n[0], "div");
          if (g) {
            Wa(c, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          } else {
            for (; n.length;) {
              c.appendChild(n.shift());
            }
            fb || (Wa(c, "width:100%;height:100%;overflow:auto;position:relative"), Wa(ub, "overflow:hidden"), Wa(ya, "overflow:hidden"));
            c = $c(c, "div");
            Wa(c, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          }
          va(c, "div", t, u ? "transform" + (H ? "3D" : "") : g ? "pos:fixed" : "pos:absolute");
          n = va(c, "div");
          Sa = va(n, "span");
          Oa = va(n, "span");
          Pa = va(c, "div");
          bb = va(c, "div");
          Wa(bb, "position:absolute;left:0;top:0;width:54px;background:#242");
          f = va(c, "div");
          Wa(f, "position:absolute;left:0;width:54px;background:#363");
          d = va(c, "div");
          Wa(d, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
          y = va(f, "div");
          Wa(y, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
          return !0;
        }
      });
    }
    eb(function() {
      function c(ea, X, ka, Xa) {
        var Ca = Xa ? "div" : "cite";
        if (0 === X.indexOf("urn:isbn:")) {
          X = X.substr(9).toUpperCase().split("-").join("");
          if (13 === X.length) {
            X = X.toString().slice(3, -1);
            for (var wa = 0, Ta = 0; 9 > Ta; Ta++) {
              wa += (X.charAt(Ta) - 0) * (10 - Ta);
            }
            wa = (11 - wa % 11) % 11;
            wa = 10 === wa ? "X" : wa.toString();
            X += wa;
          }
          10 === X.length && (X = "//www.amazon.co.jp/exec/obidos/ASIN/" + X + "/itozyun-22/ref=nosim/");
        }
        ka = Xa ? Tb(sc(G), Ca, {className:ka}) : va(G, Ca, {className:ka});
        va(ka, "a", 0 === X.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:X} : {href:X}, ea);
      }
      if (wb) {
        for (var n = zb(wb, "blockquote"), G, J = -1, W, w; G = n[++J];) {
          W = Ra(G, "title"), w = Ra(G, "cite"), W && w ? (lb(G, "title"), c(W, w, "js-generated-link-in-blockquote", !0)) : w && (lb(G, "cite"), c(Y.decodeURI ? decodeURI(w) : w, w, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var R, Aa, La, hb, Qb, Kb, Cc;
    eb(function() {
      var c = yb("blog2slide-start");
      if (c) {
        var n = N.onfullscreenchange !== t ? "f" : N.onmozfullscreenchange !== t ? "mozF" : N.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        R = c.requestFullscreen || c.webkitRequestFullscreen || c.mozRequestFullscreen || c.msRequestFullscreen;
        0 !== n || R ? (c.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', na(c.firstChild, "click", M), c = Ma(c), Aa = Ma(c), Qb = zb(c, "section"), La = N.createElement("h1"), La.innerHTML = zb(ya, "h1")[0].innerHTML, Cc = Qb.length, Qb.splice(0, 0, La), 0 !== n ? na(N, n + "ullscreenchange", ba) : A ? na(N, "MSFullscreenChange", ba, !1) : vc(ba)) : $a(c);
      }
    });
  })();
  var Rb, Wb = !Fc || .9 > Z || 8 > L || 5.5 > A, tb;
  (function() {
    function O(l) {
      return l === "" + l;
    }
    function K(l, g) {
      return Wb ? new M(l, g) : new Fc(l, g);
    }
    function P(l, g, k, z, q) {
      var h = ba.codeBlocks[ba.codeBlocks.length - 1], E = V(), u = E - a;
      switch(k || 0) {
        case 1:
          ba.initRegExpCount++;
          ba.initRegExpTotal += u;
          ba.initRegExpMax < u && (ba.initRegExpMax = u, ba.initRegExpSource = q.toString(), ba.initRegExpInstance = q);
          break;
        case 2:
          h.decorateCount++;
          h.decorateTime += u;
          break;
        case 3:
          h.updateDOMTime += u;
      }
      if (E - sa < F && !z) {
        return a = E, l(g);
      }
      aa(pa, {U:l, Y:g});
    }
    function pa(l) {
      sa = a = V();
      l.U(l.Y);
    }
    function da(l, g) {
      l && Rb[l] || (l = Q.test(g) ? "default-markup" : "default-code");
      var k = !!Rb[l];
      k && P(C, l, 0, !0);
      return k;
    }
    function ia() {
      function l(Oa, Pa, bb) {
        Pa && (g.h = g.h || [], g.h.push({l:g, B:g.B, O:1, s:E, D:Oa, o:Pa, m:bb, R:{}, v:0}));
      }
      var g = b, k = g.m, z = k[0], q = k[2], h = g.D, E = g.s, u = g.aa.shift(), T = g.R;
      if (u) {
        var m = T[u], H;
        if (!(0 <= m)) {
          if (H = z[u.charAt(0)]) {
            var S = u.match(H[1]);
            m = H[0];
          } else {
            for (m = 0, z = -1; H = q[++z];) {
              if (S = u.match(H[1])) {
                m = H[0];
                break;
              }
            }
          }
          !(H = O(m)) || S && O(S[1]) || (H = !1, m = 11);
          H || (T[u] = m);
        }
        q = g.v;
        T = u.length;
        g.v += T;
        if (H) {
          H = S[1];
          z = u.indexOf(H);
          var la = H.length, ra = z + la;
          S[2] && (ra = T - S[2].length, z = ra - la);
          l(h + q, u.substr(0, z), k);
          if (la && da(m, H)) {
            l(h + q + z, H);
            var Sa = !0;
          }
          l(h + q + ra, u.substr(ra), k);
          g.h && g.h.length && (b = g.h.shift());
          Sa || (b !== g ? P(x, t, 2) : P(ia, t, 2));
        } else {
          E.push(h + q, m), P(ia, t, 2);
        }
      } else {
        g.l ? (b = g.l.h.shift()) ? P(x, t, 2) : (b = g.l, P(ia, t, 2)) : P(Ea, t, 2);
      }
    }
    function fa(l) {
      if (v.length) {
        var g = v.shift(), k = xa[g];
        if (k.pop) {
          xa[g] = k = K(k[0], k[1]);
        } else if (O(k)) {
          xa[g] = k = K(k);
        } else {
          return fa(l);
        }
        P(fa, l, 1, !1, k);
      } else {
        P(C, l);
      }
    }
    function ma(l) {
      for (var g, k = l.firstChild; k; k = k.nextSibling) {
        var z = k.nodeType;
        g = 1 === z ? g ? l : k : 3 === z ? ha.test(k.nodeValue) ? l : g : g;
      }
      return g === l ? t : g;
    }
    Rb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var I = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Fa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], xa = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    qa = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), V = Xb.now || function() {
      return +new Xb();
    }, M, ba = {useRegExpCompat:Wb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var sa = V();
    var a, b, p, B, F = 5 > A ? 60 : 5.5 > A ? 0 : Wb ? 20 : 10, Q, ha;
    tb = [function(l) {
      Y.RegExpCompat = M = l;
    }, function() {
      Q = K("^\\s*<");
      ha = K("\\S");
    }];
    Wb || (tb[1](), tb = t);
    var e = function() {
      var l = b, g = l.W, k = U(l.B, l.O), z = l.o = k.o;
      l.I = k.I;
      da(g, z) || (b = t, P(oa, t, 0, !0));
    };
    var x = function() {
      var l = b;
      l.aa = l.o.match(l.m[1]) || [];
      l.s.push(l.D, 0);
      P(ia, t, 2);
    };
    var v = [];
    var C = function(l) {
      function g(m) {
        var H = m;
        0 <= m && (H = Fa[m]);
        0 <= H[1] && (H[1] = k(H[1]));
        return H;
      }
      function k(m) {
        var H = m;
        return 0 <= m && (H = xa[m], !H.exec) ? (v.push(m), m) : H;
      }
      var z = b, q = Rb[l];
      O(q) && (q = Rb[l] = Rb[q]);
      var h = q[0];
      if (0 <= h) {
        h = I[h];
        if (0 <= h["-num"]) {
          var E = h["-num"];
          delete h["-num"];
          for (var u = -1; 9 > u;) {
            h["" + ++u] = E;
          }
        }
        q[0] = h;
      }
      for (var T in h) {
        h[T] = g(h[T]);
      }
      q[1] = k(q[1]);
      h = q[2];
      u = 0;
      for (E = h.length; u < E; ++u) {
        h[u] = g(h[u]);
      }
      v.length ? P(fa, l, 2) : (z.m ? z.l && (z.l.h[0].m = q) : z.m = q, P(x, t, 1));
    };
    var U = function(l, g) {
      function k(T) {
        var m = T.nodeType;
        if (1 === m) {
          if (!mb(T, "nocode")) {
            for (m = T.firstChild; m; m = m.nextSibling) {
              k(m);
            }
            m = ab(T);
            if ("BR" === m || "LI" === m) {
              z[E] = "\n", h[E << 1] = q++, h[E++ << 1 | 1] = T;
            }
          }
        } else if (3 === m || 4 === m) {
          if (m = T.nodeValue) {
            m = g ? m.split("\r\n").join("\n").split("\r").join("\n") : m.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), z[E] = m, h[E << 1] = q, q += m.length, h[E++ << 1 | 1] = T;
          }
        }
      }
      var z = [], q = 0, h = [], E = 0;
      k(l);
      var u = z.join("");
      "\n" === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1));
      return {o:u, I:h};
    };
    var ja = function(l, g, k) {
      function z(m) {
        var H = m.nodeType;
        if (1 === H && !mb(m, "nocode")) {
          if ("BR" === ab(m)) {
            q(m), m.parentNode && $a(m);
          } else {
            for (m = m.firstChild; m; m = m.nextSibling) {
              z(m);
            }
          }
        } else if ((3 === H || 4 === H) && k) {
          var S = m.nodeValue, la = S.indexOf("\r\n"), ra = 2;
          -1 === la && (la = S.indexOf("\n"), ra = 1);
          -1 === la && (la = S.indexOf("\r"));
          -1 !== la && (H = S.substr(0, la), m.nodeValue = H, (S = S.substr(la + ra)) && tc(m, S), q(m), H || $a(m));
        }
      }
      function q(m) {
        function H(la, ra) {
          var Sa = ra ? la.cloneNode(!1) : la, Oa = la.parentNode;
          if (Oa) {
            Oa = H(Oa, 1);
            var Pa = la.nextSibling;
            Oa.appendChild(Sa);
            for (var bb = Pa; bb; bb = Pa) {
              Pa = bb.nextSibling, Oa.appendChild(bb);
            }
          }
          return Sa;
        }
        for (; !m.nextSibling;) {
          if (m = m.parentNode, !m) {
            return;
          }
        }
        m = H(m.nextSibling, 0);
        for (var S; (S = m.parentNode) && 1 === S.nodeType;) {
          m = S;
        }
        E.push(m);
      }
      for (var h = N.createElement("li"); l.firstChild;) {
        h.appendChild(l.firstChild);
      }
      for (var E = [h], u = 0; u < E.length; ++u) {
        z(E[u]);
      }
      if (g === (g | 0)) {
        if (10 <= g && 7.2 > L) {
          var T = N.createElement("ol");
          T.innerHTML = '<li value="' + g + '">' + h.innerHTML + "</li>";
          E[0] = T.firstChild;
        } else {
          sb(h, "value", g);
        }
      }
      T = va(l, "ol", {className:"linenums"});
      l = Math.max(0, g - 1 | 0) || 0;
      u = 0;
      for (g = E.length; u < g; ++u) {
        h = E[u], fc(h, "L" + (u + l) % 10), h.firstChild || ad(h, "\u00a0"), T.appendChild(h);
      }
    };
    var Ea = function() {
      var l = b, g = l.o, k = g.length, z = 0, q = l.I, h = q.length, E = 0, u = l.s, T = u.length, m = 0;
      u[T] = k;
      var H, S;
      for (S = H = 0; S < T;) {
        u[S] !== u[S + 2] ? (u[H++] = u[S++], u[H++] = u[S++]) : S += 2;
      }
      T = H;
      for (S = H = 0; S < T;) {
        var la = u[S], ra = u[S + 1];
        for (S += 2; S + 2 <= T && u[S + 1] === ra;) {
          S += 2;
        }
        u[H++] = la;
        u[H++] = ra;
      }
      u.length = H;
      l = l.B;
      T = "";
      l && (T = l.style.display, Ka(l, "display", "none"));
      for (; E < h;) {
        H = q[E + 2] || k;
        la = u[m + 2] || k;
        S = Math.min(H, la);
        ra = q[E + 1];
        var Sa;
        if (1 !== ra.nodeType && (Sa = g.substring(z, S))) {
          9 > A && (Sa = Sa.split("\n").join("\r"));
          var Oa = Tb(ra, "span", {className:qa[u[m + 1]]}, Sa);
          $a(ra);
          z < H && (q[E + 1] = tc(Oa, g.substring(S, H)));
        }
        z = S;
        z >= H && (E += 2);
        z >= la && (m += 2);
      }
      l && Ka(l, "display", T);
      b = t;
      P(oa, t, 3, !0);
    };
    var Ia = [], Ja;
    ba.readyTime = V() - sa;
    Jb(function(l) {
      if (l) {
        l = [Hb("pre"), Hb("code"), Hb("xmp")];
        for (var g = 0; g < l.length; ++g) {
          for (var k = 0, z = l[g].length; k < z; ++k) {
            nb(l[g][k]);
          }
        }
        return !0;
      }
    });
    var nb = function(l) {
      Ia.push(l);
      Ja = Ia.length;
      1 === Ja && (Ec ? aa(Ec, oa) : tb ? tb.push(function() {
        aa(oa);
      }) : aa(oa));
    };
    var oa = function() {
      function l(E, u) {
        return (E.split(u)[1] || "").split(" ")[0];
      }
      if (!b) {
        Ja !== Ia.length && B && B(Ja - Ia.length, Ja);
        var g = Ia.shift();
        if (g) {
          sa = V();
          if (mb(g, "prettyprint") && !mb(g, "prettyprinted")) {
            for (var k = !1, z = g.parentNode; z !== ya; z = z.parentNode) {
              var q = ab(z);
              if (("PRE" === q || "XMP" === q || "CODE" === q) && mb(z, "prettyprint")) {
                k = !0;
                break;
              }
            }
            if (!k) {
              k = g.className;
              Bb(g, "prettyprinted");
              z = !1;
              if (!z) {
                z = l(k, "lang-") || l(k, "language-");
                var h;
                !z && (h = ma(g)) && "CODE" === ab(h) && (z = l(h.className, "lang-") || l(h.className, "language-"));
              }
              q = ab(g);
              "PRE" === q || "XMP" === q ? q = 1 : (q = g.currentStyle, h = N.defaultView, q = (q = q ? q.whiteSpace : h && h.getComputedStyle ? h.getComputedStyle(g, null).getPropertyValue("white-space") : 0) && "pre" === q.substr(0, 3));
              h = !1;
              (h = "true" === h || +h) || (h = l(k, "linenums:") || mb(g, "linenums"), h = h.length ? +h : h);
              h && ja(g, h, q);
              b = {W:z, B:g, ba:h, O:q, D:0, v:0, R:{}, s:[]};
              ba.codeBlocks.push({elm:g, lang:z, readyTime:V() - sa, decorateTime:0, decorateCount:0, updateDOMTime:0});
              P(e);
              return;
            }
          }
          P(oa, t, 0, !0);
        } else {
          p && p(ba);
        }
      }
    };
    Y.PR = {RegExpProxy:K, prettifyElement:nb, registerCompleteHandler:function(l, g) {
      p = l;
      B = g;
    }};
  })();
  var Dc = N.scripts || Hb("script");
  var Ba = Dc[Dc.length - 1].src.split("/");
  --Ba.length;
  "js" === Ba[Ba.length - 1] && --Ba.length;
  (Ba = Ba.join("/")) && (Ba += "/");
  D("[p_assetUrl] " + Ba);
  var id = nd || "1" === Ra(ya, "mob");
  Zb = (id ? "mb" : "pc") + "/";
  eb(function() {
    var O;
    (O = yb("logger")) || alert("#logger not found!");
    O ? (D = bz, pb = function(K) {
      va(O, "DIV", {style:{color:"red"}}, K);
    }, Y.onerror = function(K, P, pa) {
      pb(K + ", " + P + ", " + pa);
      return !0;
    }) : Y.console ? (D = console.log, pb = console.error) : L ? (D = ib, pb = opera.postError) : D = pb = ib;
    for (; dc.length;) {
      D(dc.shift());
    }
    for (; ec.length;) {
      pb(ec.shift());
    }
    dc = ec = t;
    function bz(K) {
      va(O, "DIV", t, K);
    }
    bz = !1;
  });
  6.1 > Da && (Mb ? Mb(qc) : na(Y, "scroll", qc));
  Ib(Vc);
  6.1 > Da && (Mb ? Mb(rc) : na(Y, "scroll", rc));
  Ib(Wc);
  10 > A && (11 !== ld || 5 !== A) || (9 > L || 1 > Z || !Eb && !Y.addEventListener ? N.write('<link href="' + Ba + "css/" + Zb + nc + '" rel="stylesheet"' + (8 > L ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > L || 1.5 > Z || 534 > ta || 5 > Da || 7 > za || 3 > Za) && eb(function() {
    va(vb, "link", {href:Ba + "css/" + Zb + nc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Wb) {
    if ($b) {
      var Ec = function(O) {
        Y.RegExpCompat = bz;
        Ec = t;
        ac(Ba + "js/regexpcompat.js");
        function bz(K) {
          for (var P; P = tb.shift();) {
            P(K);
          }
          tb = t;
          aa(O);
          bc(Ba + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      Y.RegExpCompat = function(O) {
        for (var K; K = tb.shift();) {
          K(O);
        }
        tb = t;
        bc(Ba + "js/regexpcompat.js");
      }, ac(Ba + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

