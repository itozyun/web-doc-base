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
(function(Ga, W, cb, lc, M, Rb, Pc, Eb, Ya, Sb, Tb, mc, Ub, t) {
  function X(Q) {
    if (Ga[0] === Q) {
      return Ja === Ja + "" ? Ya(Ja) : Ja;
    }
  }
  function xa(Q) {
    var N = Ga[3];
    if (Ga[2] === Q) {
      return N === N + "" ? Ya(N) : N;
    }
  }
  function Vb() {
    return 6 > y ? ya.scrollTop : y ? kb.scrollTop : W.pageYOffset;
  }
  var ya = M.body, Na = ya.style, kb, db, lb, Ja = Ga[1], y = X(2) || X(3), mb = X(7), Ua = X(5) || X(6), I = X(8) || X(9), U = X(11) || X(12), zb = U && 0 <= Ga.conpare(Ja, "1.9.1"), eb = X(13), ta = X(15), Aa = X(16) || X(17), nc = X(10) || X(25), wa = X(20) || X(22), oc = X(23), Pa = X(21), Fb = X(24), Qc = wa || oc || Pa || Fb, pc = wa && Ya(Rb.userAgent.split("Edg/")[1]), Rc = Ya(Rb.appVersion.split("Trident/")[1]) + 4, nb = xa(35) || xa(36) || xa(37), qc = xa(38) || xa(39) || xa(40) || xa(41), 
  Sc = 0 <= Rb.userAgent.indexOf("Googlebot/"), Za = 0.9 > U, Wb = (mb ? "ie5mac" : 5.5 > y ? "ie5win" : 6 > y ? "ie55" : 10 > y ? "ie" + (y | 0) : 7.2 > I ? "opr70" : 8 > I ? "opr72" : 9.5 > I ? "opr" + (I | 0) : U && !zb ? 1.4 <= U ? "gck19" : 1.3 <= U ? "gck13" : 1 <= U ? "gck12" : Za ? 0.8 <= U ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Gb = "", Tc = xa(1) || xa(2) || xa(3) || xa(4) || xa(8) || xa(10), rc, fb = 8 > y || 7.2 > I ? !1 : t, sc = Na.transform !== t ? "transform" : Na["-o-transform"] !== 
  t ? "-o-transform" : Na["-ms-transform"] !== t ? "-ms-transform" : Na.MozTransform !== t ? "-moz-transform" : Na["-webkit-transform"] !== t ? "-webkit-transform" : "", Qa = [], tc = [], Ra = [], Xb, uc, vc, wc, Hb, xc, yc, Ib, Jb, zc = !1, Uc = 525 > ta || 3.1 > Aa || 2.2 > Pa || 10 > I || U && !zb || X(25) || 10 > X(3) || xa(32) || xa(30) || xa(3), Z, rb, Kb, Ac, Vc = !!ya.getBoundingClientRect, Yb, Bc, Zb, Cc, Sa = Eb.now || function() {
    return +new Eb();
  };
  (function() {
    function Q() {
      for (var aa, H = 0, ja = Sa(); H < ma.length;) {
        ja < ma[0].t ? ++H : (aa = ma.splice(H, 1)[0], aa.f(aa.p));
      }
      na = ma.length ? Tb(Q, za) : 0;
    }
    function N() {
      for (var aa, H = 0; H < ea.length; ++H) {
        aa = ea[H], aa.f();
      }
    }
    function O() {
      la && (la = clearInterval(la));
    }
    function ka() {
      na && (na = mc(na));
    }
    Kb = function(aa) {
      ea.length || (la = Ub(N, fa));
      ea.push({f:aa, C:++Y});
      return Y;
    };
    Ac = function(aa) {
      for (var H = ea.length, ja; ja = ea[--H];) {
        if (ja.C === aa) {
          ea.splice(H, 1);
          ea[0] || O();
          break;
        }
      }
      return 0;
    };
    Yb = function() {
      la && (O(), la = Ub(N, fa));
    };
    Bc = O;
    var ea = [], fa = 500, Y = 0, la;
    if (5 > y || mb) {
      W._wdb_onlooptimer = N, N = "_wdb_onlooptimer()";
    }
    Z = function(aa, H, ja) {
      ma.length || (na = Tb(Q, za));
      ma.push({f:aa, p:H, C:++qa, t:Sa() + (za < ja ? ja : za)});
      return qa;
    };
    rb = function(aa) {
      for (var H = ma.length, ja; ja = ma[--H];) {
        if (ja.C === aa) {
          ma.splice(H, 1);
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      na && (ka(), na = Tb(Q, za));
    };
    Cc = ka;
    var ma = [], za = Aa | 0 ? 64 : 16, qa = 0, na;
    if (5 > y || mb) {
      W._wdb_ontimer = Q, Q = "_wdb_ontimer()";
    }
  })();
  var ob, pb, Dc, gb, Ec, Ka, $a, Fc, $b, La, Lb, Gc, ac, Ca, hb, Hc, Ma, Ea, ab, Va, sb, Ic, Mb, Wa, ib, bc, Ta, Ab, Jc;
  (function() {
    function Q(b, d, p) {
      var B = ["<", b], F = 1, R, S;
      if (d) {
        for (R in d) {
          var f = d[R];
          if (null != f && "" !== f) {
            if ("style" === R) {
              B[++F] = ' style="';
              for (S in f) {
                for (var x = ++F, z, C = [], P = S.split(""), ca = P.length; ca;) {
                  z = P[--ca], "A" <= z && "Z" >= z && (z = "-" + z.toLowerCase()), C[ca] = z;
                }
                B[x] = C.join("") + ":" + f[S] + ";";
              }
              B[++F] = '"';
            } else {
              "className" === R && (R = "class"), B[++F] = " " + R + '="' + f + '"';
            }
          }
        }
      }
      B[++F] = ">";
      null != p && (H && "font" !== b ? B[++F] = "<font>" + N(p) + "</font>" : B[++F] = N(p));
      B[++F] = "</" + b + ">";
      return B.join("");
    }
    function N(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function O(b) {
      var d = b.split("-"), p = d.length;
      if (2 > p) {
        return b;
      }
      for (; 1 < p;) {
        b = d[--p], d[p] = b.charAt(0).toUpperCase() + b.substr(1);
      }
      return d.join("");
    }
    function ka(b) {
      return ea(M, b);
    }
    function ea(b, d) {
      var p = "*" === d;
      p = H ? p ? b.all : b.all.tags(d.toUpperCase()) : 6 > y && p ? b.all : b.getElementsByTagName(d);
      for (var B = [], F = 0, R = p.length; F < R; ++F) {
        B[F] = p[F];
      }
      return B;
    }
    function fa(b, d) {
      var p = [], B = 0, F, R = -1;
      if (9 > y || !b.getElementsByClassName) {
        var S = 6 > y ? b.all : b.getElementsByTagName("*");
      } else {
        var f = !0;
        S = b.getElementsByClassName(d);
      }
      for (F = S.length; B < F; ++B) {
        var x = S[B];
        if (f || (H || 1 === x.nodeType) && qa(x, d)) {
          p[++R] = x;
        }
      }
      return p;
    }
    function Y(b) {
      return H ? b.parentElement : b.parentNode;
    }
    function la(b, d, p, B, F, R) {
      if (H) {
        var S = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var f = $a(2 > b ? Ka(d) : d);
        f = 2 > b ? f.indexOf(d) + b : f.length;
        d.insertAdjacentHTML(S, Q(p, B, F));
        d = $a(d)[f];
        null != F && ("font" === p ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (ja) {
        d = M.createElement(Q(p, B));
      } else {
        d = R ? M.createElementNS("http://www.w3.org/2000/svg", p) : M.createElement(p);
        if (B) {
          for (S in B) {
            if ((b = B[S]) || 0 === b) {
              switch(S) {
                case "class":
                case "className":
                  Mb(d, b);
                  break;
                case "style":
                  R = d.style;
                  for (f in b) {
                    R[f] = b[f];
                  }
                  break;
                default:
                  ab(d, S, b);
              }
            }
          }
          !I || "a" !== p && "A" !== p || !B.href || B["tag-index"] || B.tagIndex || ab(d, "tagIndex", "-0");
        }
        ha || null != F && ma(d, F);
      }
      return d;
    }
    function ma(b, d) {
      if (H) {
        return la(2, b, "font", t, d);
      }
      var p = M.createTextNode("" + d);
      b.appendChild(p);
      return p;
    }
    function za(b, d) {
      9 > y ? b.className = d : b.setAttribute("class", d);
    }
    function qa(b, d) {
      return -1 !== (" " + b.className + " ").indexOf(" " + d + " ");
    }
    function na(b, d, p) {
      if (8 > I || 5.5 > y) {
        d = O(d);
      }
      b.style[d] = p;
    }
    function aa(b) {
      return 5.5 > y ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var H = 5 > y;
    kb = ka("html")[0];
    db = ka("head")[0];
    ob = function(b) {
      return W[b] || M[b] || M.getElementById(b);
    };
    pb = ka;
    Dc = function(b) {
      return fa(M, b);
    };
    gb = ea;
    Ec = fa;
    Ka = Y;
    $a = function(b) {
      b = H ? b.children : b.childNodes;
      for (var d = [], p = b.length; p;) {
        d[--p] = b[p];
      }
      return d;
    };
    Fc = function(b) {
      var d = !(7.03 < I && 7.2 > I) && b.children;
      b = d ? d : b.childNodes;
      for (var p = [], B = b.length, F = -1, R; B;) {
        if (R = b[--B], d || 1 === R.nodeType) {
          H && "FONT" === R.tagName || (p[++F] = R);
        }
      }
      return p;
    };
    $b = function(b) {
      return H ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    La = function(b, d, p, B, F) {
      d = la(2, b, d, p, B, F);
      H || (b.appendChild(d), ha && null != B && ma(d, B));
      return d;
    };
    Lb = function(b, d, p, B, F) {
      d = la(0, b, d, p, B, F);
      H || (Y(b).insertBefore(d, b), ha && null != B && ma(d, B));
      return d;
    };
    Gc = ma;
    ac = function(b, d) {
      var p;
      if (H) {
        return la(1, b, "font", t, d);
      }
      var B = M.createTextNode("" + d);
      (p = b.nextSibling) ? Ka(b).insertBefore(B, p) : Ka(b).appendChild(B);
      return B;
    };
    Ca = function(b) {
      if (H) {
        b.outerHTML = "";
      } else {
        return 5.5 > y && (b.style.filter = ""), Ka(b).removeChild(b), b;
      }
    };
    hb = function(b, d) {
      if (b.contains) {
        return b.contains(d);
      }
      for (; d && d !== kb;) {
        if (d = Ka(d), b === d) {
          return !0;
        }
      }
    };
    Hc = function(b) {
      return H ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var ja = 9 > y, ha = ja;
    Ma = function(b) {
      return b.tagName.toUpperCase();
    };
    Ea = function(b, d) {
      if (8 > I || 5.5 > y) {
        d = O(d);
      }
      var p = b.getAttribute(d);
      return I && "tabIndex" === d ? "-0" === p ? "" : "" === p ? "-1" : p : p || "";
    };
    ab = function(b, d, p) {
      if (I && "tab-index" === d) {
        "-1" === p ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", p);
      } else {
        if (8 > I || 5.5 > y) {
          d = O(d);
        }
        b.setAttribute(d, p);
      }
    };
    Va = function(b, d) {
      if (I && "tab-index" === d) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > I || 5.5 > y) {
          d = O(d);
        }
        b.removeAttribute(d);
      }
    };
    sb = function(b, d) {
      if (I && "tab-index" === d) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > I || 5.5 > y) {
        d = O(d);
      }
      return b.hasAttribute ? b.hasAttribute(d) : null != b.getAttribute(d);
    };
    Ic = function(b) {
      return b.className;
    };
    Mb = za;
    Wa = qa;
    ib = function(b, d) {
      var p;
      if (!qa(b, d)) {
        if (p = b.className) {
          p += " ";
        }
        za(b, p + d);
      }
    };
    bc = function(b, d) {
      if (qa(b, d)) {
        var p = b.className.split(" ");
        p.splice(p.indexOf(d), 1);
        za(b, p.join(" "));
      }
    };
    Ta = na;
    Ab = function(b, d) {
      var p, B = -1, F;
      if (5.5 > y) {
        if (p = aa(b)) {
          for (p = p.split(";"); F = p[++B];) {
            na(b, F.split(":")[0], "");
          }
        }
        if (d) {
          for (B = -1, p = d.split(";"); F = p[++B];) {
            var R = F.split(":")[0];
            na(b, R, F.substr(R.length + 1));
          }
        }
      } else if (7.1 > I) {
        if (b.setAttribute("style", ""), d) {
          for (p = d.split(";"); F = p[++B];) {
            F = F.split(":"), na(b, F[0], F[1]);
          }
        }
      } else {
        9 > I || 1 > U ? d ? b.setAttribute("style", d) : b.removeAttribute("style") : b.style.cssText = d;
      }
    };
    Jc = aa;
    Qa.splice(0, 0, function() {
      function b(x) {
        x = $a(x);
        for (var z = x.length, C, P, ca; z;) {
          if (C = x[--z], P = C.nodeType, 8 === P) {
            d && S.push(C);
          } else if (1 === P) {
            switch(P = Ma(C), "/" === P.charAt(0) && (P = P.substr(1), f[P] = !0), P) {
              case "STYLE":
                if (7.2 <= I && 9 > I) {
                  break;
                }
              case "LINK":
                H || B || hb(db, C) || R.push(C);
                break;
              case "META":
                P = Ea(C, "name") || Ea(C, "property");
                for (ca = F.length; ca;) {
                  if (0 === P.indexOf(F[--ca])) {
                    S.push(C);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Sc || sb(C, "async")) {
                  break;
                }
                if (p) {
                  C.innerText = "";
                  p = !1;
                  break;
                }
              case "NOSCRIPT":
                if (sb(C, "skip-cleanup")) {
                  break;
                }
              case "!":
                S.push(C);
                break;
              case "SOURCE":
                W.HTMLSourceElement || S.push(C);
                break;
              default:
                f[P] ? S.push(C) : $a(C).length && b(C);
            }
          }
        }
        for (; R[0];) {
          db.appendChild(R.pop());
        }
        for (; S[0];) {
          Ca(S.pop());
        }
      }
      bc(kb, "nojs");
      lb = ob("jsMain");
      var d = !(8 > I || 5 > y || mb || Za), p = wc, B = 7 > y, F = ["og:", "twitter:", "fb:"], R = [], S = [], f = {};
      b(kb);
    });
  })();
  var oa, Ha, Oa, qb, cc, tb, ub, Bb, dc, ec, Kc, Lc, Mc, Cb, Ia, fc;
  (function() {
    function Q() {
      return r ? m ? 2 : w ? 3 : 1 : 0;
    }
    function N(a) {
      Ha(W, "load", N);
      N = t;
      ka(Qa, a, !0);
      Oa = Qa = t;
    }
    function O(a, c) {
      ub(function() {
        var h = na(a);
        c(h);
        h.addListener(c);
        return !0;
      });
    }
    function ka(a, c, h) {
      for (var g = 0; g < a.length; ++g) {
        !0 === a[g](c) && (a.splice(g, 1), --g);
      }
      h && (a.length = 0);
    }
    function ea(a, c, h) {
      Qa || H.length || Z(fa);
      H.push(a, c, h);
    }
    function fa() {
      var a = H, c;
      for (H = []; c = a.shift();) {
        ka(c, a.shift(), a.shift());
      }
    }
    function Y(a) {
      var c = a || event;
      a = ha[c.type];
      var h = -1, g, G;
      5 > y ? c = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : y ? (c.target = c.srcElement, c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : d && (c.K = c.stopPropagation, c.stopPropagation = function() {
        G = !0;
      });
      for (; g = a[++h];) {
        g.j === this ? (this.g = g.i, y && (c.currentTarget = this), this.g(c), y ? (this.g = cb, this.g = t) : delete this.g) : 7.2 > I && this === M && g.j === W && (W.g = g.i, W.g(c), delete W.g);
      }
      if (y) {
        return c.preventDefault = c.stopPropagation = cb, c.preventDefault = c.stopPropagation = t, c.returnValue;
      }
      d && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (B = !0), G && !B && c.K(), c.K = c.stopPropagation = t);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function la() {
      var a = 9 === aa.offsetWidth;
      Cb !== a && ea(tc, Cb = a);
    }
    function ma() {
      !Qa && D && (rb(D), D = Z(za));
    }
    function za() {
      D = 0;
      ka(u);
    }
    function qa(a) {
      Qa || ka(L, a);
    }
    var na = W.matchMedia, aa, H = [];
    Qa.push(function() {
      O = t;
      aa = La(ya, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Oa(function() {
        H.length && Z(fa);
      });
    });
    oa = function(a, c, h, g) {
      if (p) {
        a.addEventListener(c, h, g ? ja ? g : g.capture || !0 === g : !1);
      } else {
        var G = {j:a, i:h};
        g = ha[c];
        var V = "on" + c, ba, ra;
        if (g) {
          for (ba = g.length; ra = g[--ba];) {
            if (ra.j === a && ra.i === h) {
              return;
            }
          }
          ha[c].push(G);
        } else {
          ha[c] = g = [G], b || (c = a[V], "function" === typeof c && c !== Y && g.unshift({j:a, i:c}));
        }
        b ? a.attachEvent(V, Y) : a[V] = Y;
      }
    };
    Ha = function(a, c, h, g) {
      if (p) {
        a.removeEventListener(c, h, g ? ja ? g : g.capture || !0 === g : !1);
      } else {
        g = ha[c];
        c = "on" + c;
        var G, V, ba;
        if (g) {
          for (G = g.length; V = g[--G];) {
            V.j === a && (V.i === h ? g.splice(G, 1) : ba = !0);
          }
          ba || (b ? a.detachEvent(c, Y) : y ? (a[c] = cb, a[c] = null) : delete a[c]);
        }
      }
    };
    var ja = !y && !mb && (new Pc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ha = {}, b = !1, d = 525.13 > ta, p = !d && !mb && W.addEventListener, B;
    d && kb.addEventListener("click", function(a) {
      if (B) {
        return B = !1, a.preventDefault(), !1;
      }
    });
    Oa = function(a) {
      Qa.push(a);
    };
    qb = function(a) {
      F && F.push(a);
    };
    var F = [];
    if (419.3 >= ta) {
      var R = function() {
        if (R) {
          var a = M.readyState;
          "loaded" === a || "complete" === a ? (R = t, N()) : Z(R);
        }
      };
      Z(R);
    } else {
      oa(W, "load", N);
    }
    y || !Za && 1.8 > U ? oa(W, "unload", function(a) {
      ka(F, a, !0);
    }) : F = t;
    ub = function(a) {
      tc.push(a);
    };
    Oa(function() {
      la();
      Kb(la);
    });
    ec = function(a, c) {
      if (S) {
        oa(a, "focusin", c);
      } else if (f) {
        oa(a, "DOMFocusIn", c);
      } else {
        if (z) {
          sa || (sa = Ub(k, 333));
        } else if (x || C) {
          oa(M, "focus", ca, !0);
        } else {
          return;
        }
        for (var h = P, g = 0, G = h.length; g < G; ++g) {
          if (h[g] === a && h[g + 1] === c) {
            return;
          }
        }
        h.push(a, c);
      }
    };
    Kc = function(a, c) {
      if (S) {
        oa(a, "focusin", c);
      } else if (f) {
        oa(a, "DOMFocusIn", c, !1);
      } else {
        for (var h = P, g = 0, G = h.length; g < G; ++g) {
          if (h[g] === a && h[g + 1] === c) {
            h.splice(g, 2);
            h.length || (z ? sa = Ac(sa) : (x || C) && Ha(M, "focus", ca, !0));
            break;
          }
        }
      }
    };
    var S = 6 <= y || Ua || 52 <= U || 15 <= wa || 534 <= ta || 5 <= Aa || oc || 4 <= Pa || 4 <= Fb || 11.6 <= X(8) || 12 <= X(9), f = 8 <= I || wa || Pa || Fb || ta || Aa, x = 8 > I, z = 6 > y, C = 52 > U || eb;
    if (C || x) {
      var P = [];
      var ca = function(a) {
        var c = P, h = x ? M.activeElement : a.target;
        if (x) {
          var g = a;
          a = {type:"focusin", target:h, preventDefault:function() {
            g.preventDefault();
          }, stopPropagation:function() {
            g.stopPropagation();
          }};
        }
        for (var G = 0, V = c.length; G < V; ++G) {
          var ba = c[G];
          (ba === h || hb(ba, h)) && c[G + 1].call(ba, a);
        }
      };
    } else if (z) {
      P = [];
      var sa, Ba, da, k = function() {
        da = W.onerror;
        W.onerror = l;
        var a = M.activeElement;
        if (Ba !== a) {
          Ba = a;
          for (var c = P, h, g = 0, G = c.length; g < G; ++g) {
            h = c[g], (h === a || hb(h, a)) && c[g + 1].apply(h, [{target:a}]);
          }
        }
        W.onerror = da;
        da = t;
      }, l = function() {
        W.onerror = da;
        da = Ba = t;
        return !0;
      };
    }
    dc = function(a) {
      Ra && Ra.push(a);
    };
    var n = 60 > U || eb, r, w, m;
    if (89 <= U || 89 <= wa || nb && 79 <= pc || na && (na("(forced-colors:none)").matches || na("(forced-colors:active)").matches)) {
      fc = !0, O("(forced-colors:active)", function(a) {
        r = a.matches;
        Ia = Q();
        ea(Ra, Ia);
      });
    } else if (10 <= y || Ua || nb && pc) {
      fc = !0, O("(-ms-high-contrast:black-on-white)", function(a) {
        r = w = a.matches;
        Ia !== Q() && (Ia = Q(), ea(Ra, Ia));
      }), O("(-ms-high-contrast:white-on-black)", function(a) {
        r = m = a.matches;
        Ia !== Q() && (Ia = Q(), ea(Ra, Ia));
      }), O("(-ms-high-contrast:active)", function(a) {
        r = a.matches;
        Ia !== Q() && (Ia = Q(), ea(Ra, Ia));
      });
    } else if (nb && (y || U && 0 <= Ga.conpare(Ja, "1.8.1") || eb)) {
      var J = function() {
        function a(g, G) {
          if (G && "transparent" === g) {
            return 382.5;
          }
          if ("#" === g.charAt(0)) {
            return parseInt("0x" + g.substr(1, 2), 16) + parseInt("0x" + g.substr(3, 2), 16) + parseInt("0x" + g.substr(5, 2), 16);
          }
          var V = g.split("(")[1].split(",");
          return Ya(V[0]) + Ya(V[1]) + Ya(V[2]);
        }
        var c = M.defaultView;
        var h = c ? c.getComputedStyle(aa, null) : aa.currentStyle;
        c = (h && h.color || "").split(" ").join("");
        h = (h && h.backgroundColor || "").split(" ").join("");
        c && (r = "#123456" !== c && "rgb(18,52,86)" !== c, w = a(c) < a(h, !0), m = a(c) > a(h, !0), Ia !== Q() && (Ia = Q(), ea(Ra, Ia, n)));
      };
      ub(function(a) {
        if (a) {
          return Ta(aa, "color", "#123456"), Ta(aa, "backgroundColor", "#123456"), n ? (J(), Ra = t) : Kb(J), J = t, !0;
        }
      });
    } else {
      Ra = Q = t;
    }
    Bb = function(a) {
      v.push(a);
    };
    var v = [], K = 7.5 <= I && 8 > I;
    K && function() {
      for (var a = M.images, c = a.length, h; c;) {
        h = a[--c], h.J = h.src, Va(h, "src");
      }
    }();
    Oa(function() {
      function a() {
        g ? (G = h[--g], K && ab(G, "src", G.J), uc(c, K ? G.J : G.src)) : Bb = v = t;
      }
      function c(ba) {
        ka(v, {G:G, H:ba}, !g);
        a();
      }
      var h = M.images || pb("img"), g = h.length;
      if (12 > I || 532 > ta) {
        a();
      } else {
        for (; g;) {
          var G = h[--g];
          var V = 9 > y ? G.complete : 0 <= G.naturalWidth ? G.naturalWidth : G.width;
          ea(v, {G:G, H:V}, !g);
        }
        Bb = v = t;
      }
    });
    cc = function(a) {
      u.push(a);
    };
    var u = [], D;
    oa(W, "resize", ma);
    qb(function() {
      D && mc(D);
      Ha(W, "resize", ma);
    });
    tb = function(a) {
      L.push(a);
    };
    var L = [], ia = 1 > U || 1.2 <= U && 1.8 > U || 7.2 >= I, pa;
    ia ? Kb(function() {
      var a = W.pageYOffset;
      pa !== a && (pa = a, qa({type:"scroll", cancelable:!1, stopPropagation:cb, preventDefault:cb}));
    }) : oa(W, "scroll", qa, {passive:!0});
    qb(function() {
      ia || Ha(W, "scroll", qa, {passive:!0});
    });
    Lc = function(a, c) {
      if (Da) {
        oa(a, "wheel", c, {passive:!1});
      } else if (e) {
        oa(a, "mousewheel", c, !1);
      } else if (q) {
        oa(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var h = E, g = 0, G = h.length; g < G; ++g) {
          if (h[g] === a && h[g + 1] === c) {
            return;
          }
        }
        h.length || oa(M, "DOMMouseScroll", T, !1);
        h.push(a, c);
      }
    };
    Mc = function(a, c) {
      if (Da) {
        Ha(a, "wheel", c, {passive:!1});
      } else if (e) {
        Ha(a, "mousewheel", c, !1);
      } else if (q) {
        Ha(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var h = E, g = 0, G = h.length; g < G; ++g) {
          if (h[g] === a && h[g + 1] === c) {
            h.splice(g, 2);
            h.length || Ha(M, "DOMMouseScroll", T, !1);
            break;
          }
        }
      }
    };
    var Da = 9 <= y || Ua || 17 <= U || eb || 31 <= wa || 537.7 <= ta, e = 6 <= y || Ua || 9 <= I || wa || 522 <= ta || Aa, q = zb, A = U && 0 <= Ga.conpare(Ja, "0.9.7") && !zb;
    if (A) {
      var E = [], T = function(a) {
        for (var c = E, h = a.target, g, G = 0, V = c.length; G < V; ++G) {
          g = c[G], hb(g, h) && c[G + 1].call(g, a);
        }
      };
    }
  })();
  (function() {
    function Q(n) {
      switch(n) {
        case 1:
          return b;
        case 2:
          return !!d;
        case 3:
          return !!p;
        case 4:
          return !!B;
        case 5:
          return R;
        case 6:
          return F && !qa;
      }
      return !1;
    }
    function N(n) {
      S(n);
      k && !n && Ca(k);
      S = f = x = z = C = P = Ba = da = k = l = t;
    }
    function O(n) {
      M.fonts.load('1.6em "' + n + '"').then(function() {
        var r;
        (r = fa(f)) ? Z(N, r) : ka(!0);
      }, function() {
        fb !== t ? Y(fb) : Xb(Y);
      });
    }
    function ka(n) {
      n && (sa = Sa());
      (n = fa(f, ca)) ? N(n) : (n = ca, M.hidden || M.msHidden || M.mozHidden || M.webkitHidden ? (sa = Sa(), n = !1) : n = n < Sa() - sa, n ? Ba ? la() : za ? N(0) : fb !== t ? Y(fb) : Xb(Y) : Z(ka));
    }
    function ea() {
      return La(ya, 5 > y ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":'"liga=1"', "-moz-font-feature-settings":'"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, H);
    }
    function fa(n) {
      var r = 0, w = -1, m = (ja || !1) && [];
      if (!l) {
        var J = -1;
        var v;
        da = ea();
        for (l = []; v = ha[++J];) {
          Ta(da, "fontFamily", v), l[J] = da.offsetWidth;
        }
      }
      for (5 > y ? da || (da = ea()) : Ka(da) || ya.appendChild(da); J = ha[++w];) {
        Ta(da, "fontFamily", '"' + n + '",' + J);
        var K = da.offsetWidth;
        if (ja) {
          m[w] = K;
        } else {
          if (K !== l[w]) {
            r = 1;
            break;
          }
        }
      }
      if (ja && K === m[0] && K === m[1]) {
        for (r = 1, w = -1; 0 <= (K = l[++w]);) {
          if (K === m[0] && K === m[1] && K === m[2]) {
            r = 0;
            break;
          }
        }
      }
      !y && r && C && (da.textContent = C, K = da.offsetWidth, da.textContent = P, r = K === da.offsetWidth ? 2 : 1, da.textContent = H);
      da = Ca(da);
      return r;
    }
    function Y(n) {
      n ? (Ba = !0, ca = aa, la()) : N(0);
    }
    function la() {
      if (x) {
        for (; x.length;) {
          var n = x.shift(), r = x.shift();
          if (Q(n)) {
            k = yc(r, ma, z, k);
            return;
          }
        }
      }
      N(0);
    }
    function ma(n) {
      n ? ka(!0) : la();
    }
    Xb = !1 === fb ? function(n) {
      Z(n, !1);
    } : function(n) {
      function r(J) {
        m && (m = rb(m), fb = J, w.onload = w.onerror = cb, Z(n, J));
      }
      if (fb !== t) {
        Z(n, fb);
      } else {
        var w = new Image(), m = Z(r, !1, 999);
        w.onerror = function() {
          r(!1);
        };
        w.onload = function() {
          r(1 === w.width * w.height);
        };
        w.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > y && Oa(function() {
      var n = La(ya, "div");
      Ab(n, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      rc = 1 < n.offsetHeight;
      Ca(n);
    });
    uc = function(n, r) {
      function w() {
        J || !v || m.complete ? (Z(n, !!m.width), m.onerror = m.onload = cb, m = n = t) : (--v, Z(w));
      }
      var m = new Image(), J, v = 99;
      m.onerror = function() {
        J = !0;
      };
      m.onload = function() {
        J = !0;
      };
      m.src = r;
      Z(w);
    };
    vc = function(n, r, w, m, J, v, K) {
      S = n;
      f = r;
      x = w;
      z = m;
      C = J;
      P = v;
      ca = K || na;
      X(10) ? Z(N, 1) : Uc ? Z(N, 0) : !M.fonts || 603 > ta || 11 > Aa ? ka(!0) : O(f);
    };
    var za = 9 > y, qa = 6 > wa || I || 530 > ta || 5 > Aa || xa(11), na = 5E3, aa = 500, H = "mmmmmmmmmmlliiiiiiiii", ja = 9 <= wa && 18 > wa || 3 > Pa || 7 > Aa || ta && 0 >= Ga.conpare(Ja, "536.11"), ha = ["monospace", "sans-serif", "serif"], b = 14 <= Ua || 36 <= wa || 39 <= U || 3 <= eb || 602 <= ta && qc && 0 <= Ga.conpare("10.12", qc) || 10 <= Aa, d = 6 <= wa || U && 0 <= Ga.conpare(Ja, "1.9.2") || eb || 533 <= ta || 5 <= Aa || 4.4 <= Pa || 11.5 <= I || Ua || 9 <= X(2) || 10 <= X(3), p = 2 <= 
    wa || zb || eb || 525 <= ta || 4 <= Aa || 2.2 <= Pa || 10.1 <= I || Ua || 9 <= X(2) || 10 <= X(3), B = p, F = 5.1 <= nb && 5.2 >= nb && 40 > wa || 6 <= nb && 6.1 > nb && 51 > wa || 37 > wa || 525 <= ta || 3.1 <= Aa || 3 <= Pa || 11.5 <= I, R = 4 <= X(2) || 10 <= X(3), S, f, x, z, C, P, ca, sa, Ba, da, k, l;
  })();
  (function() {
    function Q(f) {
      if (2 !== f) {
        var x = Dc("ico"), z = 0, C = x.length;
        if (C) {
          if (1 === f) {
            for (; z < C; ++z) {
              f = x[z];
              var P = Hc(f);
              if (P = S[P]) {
                f.innerHTML = P;
              }
            }
          } else {
            B && !p && (W.VectorIconFallback = bz, Ib(va + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Jb(va + "js/vector-icon-svg-fallback.js");
        return [S, x, La, p];
      }
      bz = !1;
    }
    Bb(function(f) {
      var x = f.G;
      f = f.H;
      var z = Ka(x);
      !Wa(z, "aBodyRoot") && f ? ib(z, "js-image-has-been-loaded") : f || Ea(x, "alt") || "lazy" === Ea(x, "loading") || Ta(x, "display", "none");
    });
    Za && (Qa.splice(1, 0, function() {
      for (var f = Ec(lb, "RichLink-sep"), x, z, C, P, ca, sa; x = f.shift();) {
        for (x = $a(x); z = x.shift();) {
          if ("A" === Ma(z) && !z.innerHTML) {
            for (; C = x.shift();) {
              if (1 === C.nodeType) {
                if ("A" === Ma(C)) {
                  break;
                }
                for (P = gb(C, "A"); ca = P.shift();) {
                  for (sa = $a(ca); sa.length;) {
                    ca.parentNode.insertBefore(sa.shift(), ca);
                  }
                  Ca(ca);
                }
              }
              z.appendChild(C);
            }
          }
        }
      }
    }), Qa.splice(2, 0, function() {
      for (var f = pb("A"), x, z; x = f.shift();) {
        "A" !== Ma(x) || x.innerHTML || (z = x.nextSibling && x.nextSibling.firstChild) && z.href === x.href && Ca(x);
      }
    }));
    5.5 <= y && 8 > y && Ra && dc(function(f) {
      for (var x = gb(ya, "a"), z = x.length, C = 0; C < z; ++C) {
        x[C].hideFocus = !f;
      }
    });
    if (!fc && Ra) {
      var N, O = function() {
        N = La(db, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + Gb + "hc/" + Wb});
        (sc || 5.5 <= y && 9 > y && rc) && ib(ya, "js-canuse-css-rotate-when-forced-colors-mode");
        O = t;
      };
      dc(function(f) {
        f && !N ? O() : N && (f ? db.appendChild(N) : Ca(N));
      });
    }
    I && Oa(function() {
      for (var f = gb(ya, "a"), x = f.length, z = 0, C; z < x; ++z) {
        C = f[z], "-1" === Ea(C, "tabIndex") ? Va(C, "tabIndex") : Ea(C, "href") && ab(C, "tabIndex", "0");
      }
      f = gb(ya, "input");
      z = 0;
      for (x = f.length; z < x; ++z) {
        C = f[z], "hidden" === Ea(C, "type") && Va(C, "tabIndex");
      }
    });
    if (U && 0 > Ga.conpare(Ja, "0.9.5")) {
      zc = !0;
      var ka, ea, fa, Y, la;
      Oa(function() {
        oa(M, "keydown", ma);
        oa(M, "keyup", za);
        ec(ya, qa);
        Za || (oa(W, "blur", ha), oa(ya, "click", ja));
      });
      var ma = Za ? function(f) {
        16 === f.keyCode ? ka = !0 : 9 === f.keyCode && Y && na(Y, !0) && (Y.blur && Y.blur(), f.stopPropagation(), f.preventDefault(), Z(H));
      } : function(f) {
        16 === f.keyCode ? ka = !0 : 9 === f.keyCode && (ea = Sa());
      }, za = function(f) {
        16 === f.keyCode && (ka = !1);
      }, qa = Za ? function(f) {
        Y = f.target;
      } : function(f) {
        var x = f.target;
        if (Y === x) {
          fa = t;
        } else if (fa) {
          x === fa ? (f.stopPropagation(), H(!0)) : (x.blur && d(x), f.preventDefault(), H());
        } else {
          if (f = Y) {
            Y = t, d(f);
          }
          fa = x;
          H(!0);
        }
      }, na = function(f, x) {
        var z = Sa(), C = ya, P = "nextSibling", ca = "firstChild";
        ka && (x || z - 99 < ea && ea <= z) && (P = "previousSibling", ca = "lastChild");
        for (fa = t; f !== C;) {
          if (sa) {
            z = f;
            var sa = !1;
          } else {
            z = f[P];
          }
          if (z) {
            if (1 === z.nodeType) {
              if (aa(z)) {
                return fa = z, !0;
              }
              f = (sa = z[ca]) || z;
            } else {
              f = z;
            }
          } else {
            f = f.parentNode;
          }
        }
      }, aa = function(f, x) {
        function z() {
          return "-1" !== Ea(f, "tab-index");
        }
        function C() {
          return 0 < f.offsetHeight * f.offsetWidth;
        }
        if (f.focus) {
          var P;
          switch({A:x ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ma(f)]) {
            case 1:
              if (sb(f, "href") && z() && C()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ea(f, "type") && z() && !sb(f, "disabled") && C()) {
                return !0;
              }
              break;
            case 3:
              if (z() && !sb(f, "disabled") && C()) {
                return !0;
              }
              break;
            default:
              if ((P = Ea(f, "tab-index")) && "-1" !== P && C()) {
                return !0;
              }
          }
        }
      }, H = function(f) {
        la = 0;
        fa && (Za || oa(fa, "blur", b), Y = fa, fa = t, f || Y.focus());
      };
      if (!Za) {
        var ja = function(f) {
          var x = f.target;
          if (Y && aa(x, !0)) {
            var z = Y;
            Y = t;
            d(z);
            fa = x;
            f.stopPropagation();
            f.preventDefault();
            H();
          }
        }, ha = function(f) {
          f.target === M && (fa = t);
        }, b = function(f) {
          f = f.target;
          Ha(f, "blur", b);
          Y === f && na(f) && (la || (la = Z(H)));
        }, d = function(f) {
          Ha(f, "blur", b);
          f.blur();
        };
      }
    }
    ub(function(f) {
      if (f) {
        return vc(Q, "web-doc-base", [1, va + "iconfont/woff2.css", 2, va + "iconfont/woff.css", 4, va + "iconfont/otf.css", 3, va + "iconfont/ttf.css", 6, va + "iconfont/svg.css"], "js-myIconFont-testCssReady", F, R), Q = t, !0;
      }
    });
    var p = 8 <= X(8) && 9 > I, B = 9 <= y || Ua || 1.8 <= U || eb || 8 <= X(8) || 9 <= X(9) || 3 <= X(21) || Qc || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || Aa, F = "IE", R = "\ueadb", S = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", 
    Android:"\ud83e\udd16"};
  })();
  (function() {
    function Q(e) {
      var q = S.length, A, E, T, a;
      if (13 === (e.keyCode || e.V) || e.type !== f) {
        for (; q;) {
          var c = S[--q];
          if (c.F === this || c.u === this) {
            q = c.F;
            var h = A = c.u;
            if (c.P) {
              if (Ta(q, "width", c.$), q.src = c.Z, Mb(h, c.T), q = c.L) {
                Ab(q, c.S), bc(q, "js-captioned-thumbnail__large");
              }
            } else {
              if (E = c.N) {
                delete c.N;
                if (c.M) {
                  for (; A = Ka(A);) {
                    if (!Wa(A, "caption")) {
                      var g = Ma(A);
                      if ("DIV" === g || "P" === g || "BLOCKQUOT" === g || "LI" === g || "DD" === g || "TD" === g || "TH" === g || "FORM" === g || "PRE" === g) {
                        break;
                      }
                    }
                  }
                  A = (A.offsetWidth | 0) - 4;
                  1600 < A && (A = 1600);
                  if (2 === c.M) {
                    E = E.split("=");
                    g = E.length;
                    if (T = E[g - 1]) {
                      (a = Ya(T.substr(1))) && T === "s" + a ? E[g - 1] = "w" + A : E[g] = "w" + A;
                    }
                    E = E.join("=");
                  } else {
                    E = E.split("/");
                    g = E.length;
                    if (T = E[g - 2]) {
                      (a = Ya(T.substr(1))) && T === "s" + a ? E[g - 2] = "w" + A : E.splice(g - 1, 0, "w" + A);
                    }
                    E = E.join("/");
                  }
                }
                c.X = E;
              }
              c.T = Ic(h);
              ib(h, "js-pica-thumbnail__large");
              Ta(q, "width", "");
              q.src = c.X;
              if (q = c.L) {
                Ab(q, ""), ib(q, "js-captioned-thumbnail__large");
              }
            }
            c.P = !c.P;
            break;
          }
        }
        N(e);
      }
    }
    function N(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    function O(e) {
      var q = m;
      if (Cb) {
        if (J && !q) {
          if (Sa() < J) {
            return;
          }
          J = t;
        }
        7 === e ? v = 0 : (v && (v = rb(v)), r = Vb());
        q ? (m = ka(t, q[0], q[1])) || (J = Sa() + 99) : ka();
      } else {
        m = t;
      }
    }
    function ka(e, q, A) {
      function E(Xa) {
        h = Xa;
        if (l) {
          g = l + ":translate" + (w ? "3D(0," : "(0,") + Xa + (w ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Xa) {
          if (P || ca) {
            var gc = Ba.offsetWidth;
          }
          g = P ? "position:fixed;width:" + gc + "px;top:" + (Xa - T + ba) + "px" : sa ? "top:" + Xa + "px" : "position:absolute;top:" + Xa + "px;left:0";
          if (ca && g) {
            var Db = 8 > y ? " " : ",";
            g += ";clip:rect(" + (0 > Xa ? -Xa + "px" + Db + gc + "px" + Db + Fa : "0" + Db + gc + "px" + Db + (Xa + Fa < Nb ? Fa : Nb - Xa)) + "px" + Db + "0)";
          }
        }
      }
      var T = r, a = da, c = Ba.offsetTop === a.offsetTop, h = 0, g = "", G = !0;
      if (c) {
        for (var V = 0, ba = 0, ra = a; ra && ra !== ya;) {
          ba += ra.offsetTop, ra = ra.offsetParent;
        }
        h = n;
        var hc = 11 > y ? kb.offsetHeight : W.innerHeight, ic = a.offsetHeight, Fa = k.offsetHeight, Nb = Fa < ic ? ic : Fa, jb = T, vb = jb + hc, Ob = ba, Pb = Ob + Nb, Nc = ba + h, Wc = Nc + Fa;
        a = jb < Ob ? Ob : jb;
        ra = Pb < vb ? Pb : vb;
        var wb = ra - a;
        jb = Pb <= jb;
        vb = vb <= Ob;
        if (q !== t) {
          G = ba + q;
          e = G + A;
          var xb;
          if (jb || vb) {
            return hc <= A ? xb = ba : xb = jb ? Pb - A : ba + A - hc, J = t, W.scroll(0, xb), m;
          }
          Fa <= wb ? V = 3 : A <= wb ? Fa - q <= wb ? V = 2 : a <= G && e <= ra ? a < ba + h && (V = 4) : V = a <= G && G <= ra ? 5 : a <= e && e <= ra ? 4 : e < a ? 4 : 5 : V = 4;
          G = !1;
        } else {
          e !== t ? Fa <= wb ? (V = 7, G = !1) : (h -= 60 * e, V = ra - ba - Fa, xb = a - ba, h < V ? h = V : xb < h && (h = xb), V = 6) : ic <= Fa || (jb ? V = 1 : vb || (Fa <= wb ? V = 3 : a < Nc ? V = 3 : Wc < ra ? V = 2 : T < ba + Fa - wb || (V = 2)));
        }
        switch(V) {
          case 0:
            E(0);
            break;
          case 1:
            E(Nb - Fa);
            break;
          case 2:
            E(ra - ba - Fa);
            break;
          case 3:
            E(a - ba);
            break;
          case 4:
            E(a - ba - q);
            break;
          case 5:
            E(ra - ba - (q + A));
          case 6:
            E(h);
        }
      }
      Ab(k, g);
      n = h;
      return c && G;
    }
    function ea(e) {
      if (Cb && (U && (r = Vb()), this !== e.target)) {
        var q = Sb(e.deltaY) ? e.deltaY : Sb(e.wheelDeltaY) ? e.wheelDeltaY / 120 : Sb(e.wheelDelta) ? e.wheelDelta / -120 : e.detail / ("MozMousePixelScroll" === e.type ? 45 : 1);
        q && ka(9 >= q ? -9 >= q ? -3 : q : 3) && (e.preventDefault(), e.stopPropagation());
      }
    }
    function fa(e) {
      if (Cb) {
        var q = U && 0 > Ga.conpare(Ja, "0.9.4"), A = e.target;
        e = k;
        var E = 0;
        if (hb(e, A)) {
          if (l) {
            q = A.getBoundingClientRect();
            var T = q.bottom - q.top;
            E = q.top - e.getBoundingClientRect().top | 0;
          } else {
            T = A.offsetHeight;
            var a = A;
            if (q) {
              for (var c = []; a && (U ? hb(e, a) : e !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && c.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = A;
            }
            for (; a && (U ? hb(e, a) : e !== a);) {
              if (q) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, E += a.offsetHeight || 0;
                }
                a = a.parentNode;
              } else {
                E += a.offsetTop, a = a.offsetParent;
              }
            }
          }
          C ? (m = [E, T], v && rb(v), v = Z(O, 7, 1 > U || 536 > ta || 14 > wa ? 500 : 0)) : (r = Vb(), ka(t, E, T));
        }
      }
    }
    function Y() {
      K.call(u);
    }
    function la() {
      M.fullscreenElement || M.fullscreen || M.webkitIsFullscreen || M.msFullscreenElement || W.fullScreen ? (ab(u, "id", "blog2slide-root"), ia[1].parentNode.insertBefore(D, ia[1]), ma(), M.onkeydown = za) : L && (Ca(D), Va(u, "id"), Va(L, "id"), L = M.onkeydown = t);
    }
    function ma() {
      L && Va(L, "id");
      pa = 0 < pa ? Da < pa ? Da : pa : 0;
      L = ia[pa];
      ab(L, "id", "blog2slide-current");
    }
    function za(e) {
      if ("ArrowRight" === e.key || 39 === e.keyCode) {
        ++pa, ma();
      } else if ("ArrowLeft" === e.key || 37 === e.keyCode) {
        --pa, ma();
      }
    }
    yc = function(e, q, A, E) {
      E = E || La(db, "link", {type:"text/css", rel:"stylesheet"});
      var T;
      if (d) {
        (T = ob(A)) ? Va(T, "id") : T = La(ya, "div", {"aria-hidden":"true", className:A});
        var a = T.offsetWidth;
        ab(T, "id", A);
      }
      b(E, e, q, T, a);
      return E;
    };
    var qa = U && 0 > Ga.conpare(Ja, "0.9.1"), na = 11 <= y || Ua || 9 <= I && 9.5 > I, aa = 11 > y, H = 7.2 <= I && 7.5 > I, ja = 9 > U && !qa || 19 > wa || 4.3 > Pa || 2 > Fb || 536 > ta || 6 > Aa || 7 <= I && 9 > I && !H, ha = !qa && !na && !aa && !H && !ja, b = ha ? function(e, q, A) {
      e.onload = bz;
      e.onerror = function() {
        e.onload = e.onerror = null;
        Z(A, !1);
      };
      e.href = q;
      function bz() {
        e.onload = e.onerror = null;
        Z(A, !0);
      }
      bz = !1;
    } : na ? function(e, q, A, E, T) {
      e.onload = function() {
        Z(A, d(E, T));
        Ca(E);
        e.onload = null;
        E = t;
      };
      e.href = q;
    } : aa ? function(e, q, A, E, T) {
      e.onreadystatechange = function() {
        "complete" === e.readyState && (Z(A, d(E, T)), Ca(E), E = t, e.V = cb);
      };
      e.href = q;
    } : ja || H ? function(e, q, A, E, T) {
      function a() {
        h && (g = rb(g), G = Sa() + 999, Z(c, 0, 99), ja ? h.onerror = null : h.removeEventListener("load", a, !1), h = t);
      }
      function c() {
        d(E, T) ? (Ca(E), E = t, Z(A, !0)) : Sa() < G ? Z(c, 0, 99) : (Ca(E), E = t, Z(A, !1));
      }
      var h = new Image(), g = Z(a, 0, 5E3), G;
      ja ? h.onerror = a : h.addEventListener("load", a, !1);
      h.src = e.href = q;
    } : function(e, q, A) {
      Z(A, !1);
    }, d = !ha && !qa && function(e, q) {
      return e.offsetWidth !== q;
    };
    xc = U && 0 >= Ga.conpare(Ja, "0.9");
    Hb = !(7.2 > I || xc);
    Ib = function(e) {
      p ? M.write('<script src="' + e + '">\x3c/script>') : Qa || F.length ? F.push(e) : R(e);
    };
    Jb = function() {
      p || R(F.shift());
    };
    var p = !Hb, B = Hb && 7.5 > I;
    if (!p) {
      var F = [];
      B && (wc = !0);
      Oa(function() {
        R(F.shift());
      });
      var R = function(e) {
        e && (B ? jc[0].src = e : La(db, "script", {src:e}));
      };
    }
    var S = [], f = 5.5 <= y && 8 > y ? "keypress" : "keydown";
    if (!nc) {
      var x = Na.transition !== t || Na["-o-transition"] !== t || Na["-moz-transition"] !== t || Na["-webkit-transition"] !== t;
      Bb(function(e) {
        if (e.H && lb) {
          e = e.G;
          var q = Ka(e), A = "", E;
          if ("A" === Ma(q) && 1 === Fc(q).length) {
            var T = Ea(q, "href");
            var a = T.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((E = 0 < T.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              oa(q, f, Q);
              oa(e, "click", Q);
              oa(q, "click", N);
              x && (A = e.naturalWidth + "px", Ta(e, "width", A));
              ib(q, "js-pica-thumbnail");
              for (a = q; a = Ka(a);) {
                if (Wa(a, "caption")) {
                  ib(a, "js-captioned-thumbnail");
                  var c = a;
                  var h = Jc(c);
                  break;
                }
              }
              S.push({u:q, L:c, S:h, Z:e.src, $:A, N:T, F:e, M:E ? 0 < T.indexOf("/img/a/") ? 2 : 3 : 0 < T.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      qb(function(e, q) {
        for (e = -1; q = S[++e];) {
          Ha(q.u, f, Q), Ha(q.F, "click", Q), Ha(q.u, "click", N);
        }
      });
    }
    var z = ["jsSidebarFixer1", "jsSidebarFixer2"], C = !(9 > y || I || 1 <= U && 1.3 > U || zc), P = !(5 > Aa || 2.2 > Pa || 6 > X(12) || xa(30) && 534 > ta || xa(32) || 7 > y || 9 > I || 1 > U), ca = P || 6 === y || 1 > U, sa = 7.5 > I, Ba, da, k, l = Vc && sc, n = 0, r = 0, w, m, J, v;
    Oc || nc || (ub(function(e) {
      if (e) {
        if (!lb) {
          return !0;
        }
        e = -1;
        var q;
        Ba = ob("jsSide");
        da = lb;
        if (!Ba) {
          return !0;
        }
        tb(O);
        cc(O);
        k = Lb($b(Ba), "div", {id:"jsSidebarFixer"});
        for (ec(k, fa); 1 < $a(Ba).length;) {
          k.appendChild($a(Ba)[1]);
        }
        for (; q = z[++e];) {
          Lc(ob(q), ea);
        }
        y || Ua || 2 > wa || (w = Na.perspective !== t || Na.MozPerspective !== t || Na["-webkit-perspective"] !== t);
        O();
        return !0;
      }
    }), qb(function() {
      for (var e = -1, q; q = z[++e];) {
        Mc(ob(q), ea);
      }
      Kc(k, fa);
    }));
    Oa(function() {
      function e(c, h, g, G) {
        var V = G ? "div" : "cite";
        if (0 === h.indexOf("urn:isbn:")) {
          h = h.substr(9).toUpperCase().split("-").join("");
          if (13 === h.length) {
            h = h.toString().slice(3, -1);
            for (var ba = 0, ra = 0; 9 > ra; ra++) {
              ba += (h.charAt(ra) - 0) * (10 - ra);
            }
            ba = (11 - ba % 11) % 11;
            ba = 10 === ba ? "X" : ba.toString();
            h += ba;
          }
          10 === h.length && (h = "//www.amazon.co.jp/exec/obidos/ASIN/" + h + "/itozyun-22/ref=nosim/");
        }
        g = G ? Lb($b(A), V, {className:g}) : La(A, V, {className:g});
        La(g, "a", 0 === h.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:h} : {href:h}, c);
      }
      if (lb) {
        for (var q = gb(lb, "blockquote"), A, E = -1, T, a; A = q[++E];) {
          T = Ea(A, "title"), a = Ea(A, "cite"), T && a ? (Va(A, "title"), e(T, a, "js-generated-link-in-blockquote", !0)) : a && (Va(A, "cite"), e(W.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var K, u, D, L, ia, pa, Da;
    Oa(function() {
      var e = ob("blog2slide-start");
      if (e) {
        var q = M.onfullscreenchange !== t ? "f" : M.onmozfullscreenchange !== t ? "mozF" : M.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        K = e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullscreen || e.msRequestFullscreen;
        0 !== q || K ? (e.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', oa(e.firstChild, "click", Y), e = Ka(e), u = Ka(e), ia = gb(e, "section"), D = M.createElement("h1"), D.innerHTML = gb(ya, "h1")[0].innerHTML, Da = ia.length, ia.splice(0, 0, D), 0 !== q ? oa(M, q + "ullscreenchange", la) : y ? oa(M, "MSFullscreenChange", la, !1) : cc(la)) : Ca(e);
      }
    });
  })();
  var yb, Qb = !lc || .9 > U || 8 > I || 5.5 > y, bb;
  (function() {
    function Q(k) {
      return k === "" + k;
    }
    function N(k, l) {
      return Qb ? new H(k, l) : new lc(k, l);
    }
    function O(k, l, n, r) {
      if (aa() - ja < p && !r) {
        return k(l);
      }
      Z(ka, {U:k, Y:l});
    }
    function ka(k) {
      ja = aa();
      k.U(k.Y);
    }
    function ea(k, l) {
      k && yb[k] || (k = B.test(l) ? "default-markup" : "default-code");
      var n = !!yb[k];
      n && O(x, k, 0, !0);
      return n;
    }
    function fa() {
      function k(e, q, A) {
        q && (l.h = l.h || [], l.h.push({l:l, B:l.B, O:1, s:J, D:e, o:q, m:A, R:{}, v:0}));
      }
      var l = ha, n = l.m, r = n[0], w = n[2], m = l.D, J = l.s, v = l.aa.shift(), K = l.R;
      if (v) {
        var u = K[v], D;
        if (!(0 <= u)) {
          if (D = r[v.charAt(0)]) {
            var L = v.match(D[1]);
            u = D[0];
          } else {
            for (u = 0, r = -1; D = w[++r];) {
              if (L = v.match(D[1])) {
                u = D[0];
                break;
              }
            }
          }
          !(D = Q(u)) || L && Q(L[1]) || (D = !1, u = 11);
          D || (K[v] = u);
        }
        w = l.v;
        K = v.length;
        l.v += K;
        if (D) {
          D = L[1];
          r = v.indexOf(D);
          var ia = D.length, pa = r + ia;
          L[2] && (pa = K - L[2].length, r = pa - ia);
          k(m + w, v.substr(0, r), n);
          if (ia && ea(u, D)) {
            k(m + w + r, D);
            var Da = !0;
          }
          k(m + w + pa, v.substr(pa), n);
          l.h && l.h.length && (ha = l.h.shift());
          Da || (ha !== l ? O(S, t, 2) : O(fa, t, 2));
        } else {
          J.push(m + w, u), O(fa, t, 2);
        }
      } else {
        l.l ? (ha = l.l.h.shift()) ? O(S, t, 2) : (ha = l.l, O(fa, t, 2)) : O(P, t, 2);
      }
    }
    function Y(k) {
      if (f.length) {
        var l = f.shift(), n = qa[l];
        if (n.pop) {
          qa[l] = N(n[0], n[1]);
        } else if (Q(n)) {
          qa[l] = N(n);
        } else {
          return Y(k);
        }
        O(Y, k, 1);
      } else {
        O(x, k);
      }
    }
    function la(k) {
      for (var l, n = k.firstChild; n; n = n.nextSibling) {
        var r = n.nodeType;
        l = 1 === r ? l ? k : n : 3 === r ? F.test(n.nodeValue) ? k : l : l;
      }
      return l === k ? t : l;
    }
    yb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ma = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], za = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
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
    na = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), aa = Eb.now || function() {
      return +new Eb();
    }, H, ja, ha, b, d, p = 5 > y ? 60 : 5.5 > y ? 0 : Qb ? 20 : 10, B, F;
    bb = [function(k) {
      W.RegExpCompat = H = k;
    }, function() {
      B = N("^\\s*<");
      F = N("\\S");
    }];
    Qb || (bb[1](), bb = t);
    var R = function() {
      var k = ha, l = k.W, n = z(k.B, k.O), r = k.o = n.o;
      k.I = n.I;
      ea(l, r) || (ha = t, O(da, t, 0, !0));
    };
    var S = function() {
      var k = ha;
      k.aa = k.o.match(k.m[1]) || [];
      k.s.push(k.D, 0);
      O(fa, t, 2);
    };
    var f = [];
    var x = function(k) {
      function l(u) {
        var D = u;
        0 <= u && (D = za[u]);
        0 <= D[1] && (D[1] = n(D[1]));
        return D;
      }
      function n(u) {
        var D = u;
        return 0 <= u && (D = qa[u], !D.exec) ? (f.push(u), u) : D;
      }
      var r = ha, w = yb[k];
      Q(w) && (w = yb[k] = yb[w]);
      var m = w[0];
      if (0 <= m) {
        m = ma[m];
        if (0 <= m["-num"]) {
          var J = m["-num"];
          delete m["-num"];
          for (var v = -1; 9 > v;) {
            m["" + ++v] = J;
          }
        }
        w[0] = m;
      }
      for (var K in m) {
        m[K] = l(m[K]);
      }
      w[1] = n(w[1]);
      m = w[2];
      v = 0;
      for (J = m.length; v < J; ++v) {
        m[v] = l(m[v]);
      }
      f.length ? O(Y, k, 2) : (r.m ? r.l && (r.l.h[0].m = w) : r.m = w, O(S, t, 1));
    };
    var z = function(k, l) {
      function n(K) {
        var u = K.nodeType;
        if (1 === u) {
          if (!Wa(K, "nocode")) {
            for (u = K.firstChild; u; u = u.nextSibling) {
              n(u);
            }
            u = Ma(K);
            if ("BR" === u || "LI" === u) {
              r[J] = "\n", m[J << 1] = w++, m[J++ << 1 | 1] = K;
            }
          }
        } else if (3 === u || 4 === u) {
          if (u = K.nodeValue) {
            u = l ? u.split("\r\n").join("\n").split("\r").join("\n") : u.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), r[J] = u, m[J << 1] = w, w += u.length, m[J++ << 1 | 1] = K;
          }
        }
      }
      var r = [], w = 0, m = [], J = 0;
      n(k);
      var v = r.join("");
      "\n" === v.charAt(v.length - 1) && (v = v.substr(0, v.length - 1));
      return {o:v, I:m};
    };
    var C = function(k, l, n) {
      function r(u) {
        var D = u.nodeType;
        if (1 === D && !Wa(u, "nocode")) {
          if ("BR" === Ma(u)) {
            w(u), u.parentNode && Ca(u);
          } else {
            for (u = u.firstChild; u; u = u.nextSibling) {
              r(u);
            }
          }
        } else if ((3 === D || 4 === D) && n) {
          var L = u.nodeValue, ia = L.indexOf("\r\n"), pa = 2;
          -1 === ia && (ia = L.indexOf("\n"), pa = 1);
          -1 === ia && (ia = L.indexOf("\r"));
          -1 !== ia && (D = L.substr(0, ia), u.nodeValue = D, (L = L.substr(ia + pa)) && ac(u, L), w(u), D || Ca(u));
        }
      }
      function w(u) {
        function D(ia, pa) {
          var Da = pa ? ia.cloneNode(!1) : ia, e = ia.parentNode;
          if (e) {
            e = D(e, 1);
            var q = ia.nextSibling;
            e.appendChild(Da);
            for (var A = q; A; A = q) {
              q = A.nextSibling, e.appendChild(A);
            }
          }
          return Da;
        }
        for (; !u.nextSibling;) {
          if (u = u.parentNode, !u) {
            return;
          }
        }
        u = D(u.nextSibling, 0);
        for (var L; (L = u.parentNode) && 1 === L.nodeType;) {
          u = L;
        }
        J.push(u);
      }
      for (var m = M.createElement("li"); k.firstChild;) {
        m.appendChild(k.firstChild);
      }
      for (var J = [m], v = 0; v < J.length; ++v) {
        r(J[v]);
      }
      if (l === (l | 0)) {
        if (10 <= l && 7.2 > I) {
          var K = M.createElement("ol");
          K.innerHTML = '<li value="' + l + '">' + m.innerHTML + "</li>";
          J[0] = K.firstChild;
        } else {
          ab(m, "value", l);
        }
      }
      K = La(k, "ol", {className:"linenums"});
      k = Math.max(0, l - 1 | 0) || 0;
      v = 0;
      for (l = J.length; v < l; ++v) {
        m = J[v], Mb(m, "L" + (v + k) % 10), m.firstChild || Gc(m, "\u00a0"), K.appendChild(m);
      }
    };
    var P = function() {
      var k = ha, l = k.o, n = l.length, r = 0, w = k.I, m = w.length, J = 0, v = k.s, K = v.length, u = 0;
      v[K] = n;
      var D, L;
      for (L = D = 0; L < K;) {
        v[L] !== v[L + 2] ? (v[D++] = v[L++], v[D++] = v[L++]) : L += 2;
      }
      K = D;
      for (L = D = 0; L < K;) {
        var ia = v[L], pa = v[L + 1];
        for (L += 2; L + 2 <= K && v[L + 1] === pa;) {
          L += 2;
        }
        v[D++] = ia;
        v[D++] = pa;
      }
      v.length = D;
      k = k.B;
      K = "";
      k && (K = k.style.display, Ta(k, "display", "none"));
      for (; J < m;) {
        D = w[J + 2] || n;
        ia = v[u + 2] || n;
        L = Math.min(D, ia);
        pa = w[J + 1];
        var Da;
        if (1 !== pa.nodeType && (Da = l.substring(r, L))) {
          9 > y && (Da = Da.split("\n").join("\r"));
          var e = Lb(pa, "span", {className:na[v[u + 1]]}, Da);
          Ca(pa);
          r < D && (w[J + 1] = ac(e, l.substring(L, D)));
        }
        r = L;
        r >= D && (J += 2);
        r >= ia && (u += 2);
      }
      k && Ta(k, "display", K);
      ha = t;
      O(da, t, 3, !0);
    };
    var ca = [], sa;
    ub(function(k) {
      if (k) {
        k = [pb("pre"), pb("code"), pb("xmp")];
        for (var l = 0; l < k.length; ++l) {
          for (var n = 0, r = k[l].length; n < r; ++n) {
            Ba(k[l][n]);
          }
        }
        return !0;
      }
    });
    var Ba = function(k) {
      ca.push(k);
      sa = ca.length;
      1 === sa && (kc ? Z(kc, da) : bb ? bb.push(function() {
        Z(da);
      }) : Z(da));
    };
    var da = function() {
      function k(J, v) {
        return (J.split(v)[1] || "").split(" ")[0];
      }
      if (!ha) {
        sa !== ca.length && d && d(sa - ca.length, sa);
        var l = ca.shift();
        if (l) {
          if (Wa(l, "prettyprint") && !Wa(l, "prettyprinted")) {
            for (var n = !1, r = l.parentNode; r !== ya; r = r.parentNode) {
              var w = Ma(r);
              if (("PRE" === w || "XMP" === w || "CODE" === w) && Wa(r, "prettyprint")) {
                n = !0;
                break;
              }
            }
            if (!n) {
              n = l.className;
              ib(l, "prettyprinted");
              r = !1;
              if (!r) {
                r = k(n, "lang-") || k(n, "language-");
                var m;
                !r && (m = la(l)) && "CODE" === Ma(m) && (r = k(m.className, "lang-") || k(m.className, "language-"));
              }
              w = Ma(l);
              "PRE" === w || "XMP" === w ? w = 1 : (w = l.currentStyle, m = M.defaultView, w = (w = w ? w.whiteSpace : m && m.getComputedStyle ? m.getComputedStyle(l, null).getPropertyValue("white-space") : 0) && "pre" === w.substr(0, 3));
              m = !1;
              (m = "true" === m || +m) || (m = k(n, "linenums:") || Wa(l, "linenums"), m = m.length ? +m : m);
              m && C(l, m, w);
              ha = {W:r, B:l, ba:m, O:w, D:0, v:0, R:{}, s:[]};
              O(R);
              return;
            }
          }
          O(da, t, 0, !0);
        } else {
          b && b();
        }
      }
    };
    W.PR = {RegExpProxy:N, prettifyElement:Ba, registerCompleteHandler:function(k, l) {
      b = k;
      d = l;
    }};
  })();
  var jc = M.scripts || pb("script");
  var va = jc[jc.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  var Oc = Tc || "1" === Ea(ya, "mob");
  Gb = (Oc ? "mb" : "pc") + "/";
  6.1 > Aa && (tb ? tb(Yb) : oa(W, "scroll", Yb));
  qb(Bc);
  6.1 > Aa && (tb ? tb(Zb) : oa(W, "scroll", Zb));
  qb(Cc);
  10 > y && (11 !== Rc || 5 !== y) || (9 > I || 1 > U || !mb && !W.addEventListener ? M.write('<link href="' + va + "css/" + Gb + Wb + '" rel="stylesheet"' + (8 > I ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > I || 1.5 > U || 534 > ta || 5 > Aa || 7 > wa || 3 > Pa) && Oa(function() {
    La(db, "link", {href:va + "css/" + Gb + Wb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Qb) {
    if (Hb) {
      var kc = function(Q) {
        W.RegExpCompat = bz;
        kc = t;
        Ib(va + "js/regexpcompat.js");
        function bz(N) {
          for (var O; O = bb.shift();) {
            O(N);
          }
          bb = t;
          Z(Q);
          Jb(va + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      W.RegExpCompat = function(Q) {
        for (var N; N = bb.shift();) {
          N(Q);
        }
        bb = t;
        Jb(va + "js/regexpcompat.js");
      }, Ib(va + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

