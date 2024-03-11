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
(function(Ga, X, cb, mc, M, Sb, Qc, Fb, Ya, Tb, Ub, nc, Vb, t) {
  function Y(N) {
    if (Ga[0] === N) {
      return Ja === Ja + "" ? Ya(Ja) : Ja;
    }
  }
  function ya(N) {
    var J = Ga[3];
    if (Ga[2] === N) {
      return J === J + "" ? Ya(J) : J;
    }
  }
  function zb(N) {
    var J = N.split("-"), O = J.length;
    if (2 > O) {
      return N;
    }
    for (; 1 < O;) {
      N = J[--O], J[O] = N.charAt(0).toUpperCase() + N.substr(1);
    }
    return J.join("");
  }
  function Wb() {
    return 6 > z ? za.scrollTop : z ? kb.scrollTop : X.pageYOffset;
  }
  var za = M.body, Na = za.style, kb, db, lb, Ja = Ga[1], z = Y(2) || Y(3), mb = Y(7), Ua = Y(5) || Y(6), H = Y(8) || Y(9), T = Y(11) || Y(12), Ab = T && 0 <= Ga.conpare(Ja, "1.9.1"), eb = Y(13), ta = Y(16), Aa = Y(17) || Y(18), oc = Y(10) || Y(26), wa = Y(21) || Y(23), pc = Y(24), Pa = Y(22), Gb = Y(25), Rc = wa || pc || Pa || Gb, qc = wa && Ya(Sb.userAgent.split("Edg/")[1]), Sc = Ya(Sb.appVersion.split("Trident/")[1]) + 4, nb = ya(37) || ya(38) || ya(39), rc = ya(40) || ya(41) || ya(42) || ya(43), 
  Tc = 0 <= Sb.userAgent.indexOf("Googlebot/"), Za = 0.9 > T, Xb = (mb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : 7.2 > H ? "opr70" : 8 > H ? "opr72" : 9.5 > H ? "opr" + (H | 0) : T && !Ab ? 1.4 <= T ? "gck19" : 1.3 <= T ? "gck13" : 1 <= T ? "gck12" : Za ? 0.8 <= T ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Hb = "", Uc = ya(1) || ya(2) || ya(3) || ya(4) || ya(8) || ya(9), sc, fb = 8 > z || 7.2 > H ? !1 : t, tc = Na.transform !== t ? "transform" : Na["-o-transform"] !== 
  t ? "-o-transform" : Na["-ms-transform"] !== t ? "-ms-transform" : Na.MozTransform !== t ? "-moz-transform" : Na["-webkit-transform"] !== t ? "-webkit-transform" : "", Qa = [], uc = [], Ra = [], Yb, vc, wc, xc, Ib, yc, zc, Jb, Kb, Ac = !1, Vc = 525 > ta || 3.1 > Aa || 2.2 > Pa || 10 > H || T && !Ab || Y(26) || 10 > Y(3) || ya(34) || ya(32) || ya(3), ba, rb, Lb, Bc, Wc = !!za.getBoundingClientRect, Zb, Cc, $b, Dc, Sa = Fb.now || function() {
    return +new Fb();
  };
  (function() {
    function N() {
      for (var P, R = 0, ha = Sa(); R < na.length;) {
        ha < na[0].t ? ++R : (P = na.splice(R, 1)[0], P.f(P.p));
      }
      oa = na.length ? Ub(N, xa) : 0;
    }
    function J() {
      for (var P, R = 0; R < ea.length; ++R) {
        P = ea[R], P.f();
      }
    }
    function O() {
      ka && (ka = clearInterval(ka));
    }
    function ja() {
      oa && (oa = nc(oa));
    }
    Lb = function(P) {
      ea.length || (ka = Vb(J, fa));
      ea.push({f:P, C:++U});
      return U;
    };
    Bc = function(P) {
      for (var R = ea.length, ha; ha = ea[--R];) {
        if (ha.C === P) {
          ea.splice(R, 1);
          ea[0] || O();
          break;
        }
      }
      return 0;
    };
    Zb = function() {
      ka && (O(), ka = Vb(J, fa));
    };
    Cc = O;
    var ea = [], fa = 500, U = 0, ka;
    if (5 > z || mb) {
      X._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    ba = function(P, R, ha) {
      na.length || (oa = Ub(N, xa));
      na.push({f:P, p:R, C:++qa, t:Sa() + (xa < ha ? ha : xa)});
      return qa;
    };
    rb = function(P) {
      for (var R = na.length, ha; ha = na[--R];) {
        if (ha.C === P) {
          na.splice(R, 1);
          break;
        }
      }
      return 0;
    };
    $b = function() {
      oa && (ja(), oa = Ub(N, xa));
    };
    Dc = ja;
    var na = [], xa = Aa | 0 ? 64 : 16, qa = 0, oa;
    if (5 > z || mb) {
      X._wdb_ontimer = N, N = "_wdb_ontimer()";
    }
  })();
  var ob, pb, Ec, gb, Fc, Ka, $a, Gc, ac, La, Mb, Hc, bc, Ca, hb, Ic, Ma, Ea, ab, Va, sb, Jc, Nb, Wa, ib, cc, Ta, Bb, Kc;
  (function() {
    function N(b, e, p) {
      var B = ["<", b], G = 1, Q, Z;
      if (e) {
        for (Q in e) {
          var V = e[Q];
          if (null != V && "" !== V) {
            if ("style" === Q) {
              B[++G] = ' style="';
              for (Z in V) {
                for (var g = ++G, y, v = [], F = Z.split(""), aa = F.length; aa;) {
                  y = F[--aa], "A" <= y && "Z" >= y && (y = "-" + y.toLowerCase()), v[aa] = y;
                }
                B[g] = v.join("") + ":" + V[Z] + ";";
              }
              B[++G] = '"';
            } else {
              "className" === Q && (Q = "class"), B[++G] = " " + Q + '="' + V + '"';
            }
          }
        }
      }
      B[++G] = ">";
      null != p && (P && "font" !== b ? B[++G] = "<font>" + J(p) + "</font>" : B[++G] = J(p));
      B[++G] = "</" + b + ">";
      return B.join("");
    }
    function J(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function O(b) {
      return ja(M, b);
    }
    function ja(b, e) {
      var p = "*" === e;
      p = P ? p ? b.all : b.all.tags(e.toUpperCase()) : 6 > z && p ? b.all : b.getElementsByTagName(e);
      for (var B = [], G = 0, Q = p.length; G < Q; ++G) {
        B[G] = p[G];
      }
      return B;
    }
    function ea(b, e) {
      var p = [], B = 0, G, Q = -1;
      if (9 > z || !b.getElementsByClassName) {
        var Z = 6 > z ? b.all : b.getElementsByTagName("*");
      } else {
        var V = !0;
        Z = b.getElementsByClassName(e);
      }
      for (G = Z.length; B < G; ++B) {
        var g = Z[B];
        if (V || (P || 1 === g.nodeType) && xa(g, e)) {
          p[++Q] = g;
        }
      }
      return p;
    }
    function fa(b) {
      return P ? b.parentElement : b.parentNode;
    }
    function U(b, e, p, B, G, Q) {
      if (P) {
        var Z = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var V = $a(2 > b ? Ka(e) : e);
        V = 2 > b ? V.indexOf(e) + b : V.length;
        e.insertAdjacentHTML(Z, N(p, B, G));
        e = $a(e)[V];
        null != G && ("font" === p ? e.nodeType = 3 : e.children[0].nodeType = 3);
      } else if (R) {
        e = M.createElement(N(p, B));
      } else {
        e = Q ? M.createElementNS("http://www.w3.org/2000/svg", p) : M.createElement(p);
        if (B) {
          for (Z in B) {
            if ((b = B[Z]) || 0 === b) {
              switch(Z) {
                case "class":
                case "className":
                  Nb(e, b);
                  break;
                case "style":
                  Q = e.style;
                  for (V in b) {
                    Q[V] = b[V];
                  }
                  break;
                default:
                  ab(e, Z, b);
              }
            }
          }
          !H || "a" !== p && "A" !== p || !B.href || B["tag-index"] || B.tagIndex || ab(e, "tagIndex", "-0");
        }
        ha || null != G && ka(e, G);
      }
      return e;
    }
    function ka(b, e) {
      if (P) {
        return U(2, b, "font", t, e);
      }
      var p = M.createTextNode("" + e);
      b.appendChild(p);
      return p;
    }
    function na(b, e) {
      9 > z ? b.className = e : b.setAttribute("class", e);
    }
    function xa(b, e) {
      return -1 !== (" " + b.className + " ").indexOf(" " + e + " ");
    }
    function qa(b, e, p) {
      if (8 > H || 5.5 > z) {
        e = zb(e);
      }
      b.style[e] = p;
    }
    function oa(b) {
      return 5.5 > z ? b.style.cssText.toLowerCase() : b.style.cssText;
    }
    var P = 5 > z;
    kb = O("html")[0];
    db = O("head")[0];
    ob = function(b) {
      return X[b] || M[b] || M.getElementById(b);
    };
    pb = O;
    Ec = function(b) {
      return ea(M, b);
    };
    gb = ja;
    Fc = ea;
    Ka = fa;
    $a = function(b) {
      b = P ? b.children : b.childNodes;
      for (var e = [], p = b.length; p;) {
        e[--p] = b[p];
      }
      return e;
    };
    Gc = function(b) {
      var e = !(7.03 < H && 7.2 > H) && b.children;
      b = e ? e : b.childNodes;
      for (var p = [], B = b.length, G = -1, Q; B;) {
        if (Q = b[--B], e || 1 === Q.nodeType) {
          P && "FONT" === Q.tagName || (p[++G] = Q);
        }
      }
      return p;
    };
    ac = function(b) {
      return P ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    La = function(b, e, p, B, G) {
      e = U(2, b, e, p, B, G);
      P || (b.appendChild(e), ha && null != B && ka(e, B));
      return e;
    };
    Mb = function(b, e, p, B, G) {
      e = U(0, b, e, p, B, G);
      P || (fa(b).insertBefore(e, b), ha && null != B && ka(e, B));
      return e;
    };
    Hc = ka;
    bc = function(b, e) {
      var p;
      if (P) {
        return U(1, b, "font", t, e);
      }
      var B = M.createTextNode("" + e);
      (p = b.nextSibling) ? Ka(b).insertBefore(B, p) : Ka(b).appendChild(B);
      return B;
    };
    Ca = function(b) {
      if (P) {
        b.outerHTML = "";
      } else {
        return 5.5 > z && (b.style.filter = ""), Ka(b).removeChild(b), b;
      }
    };
    hb = function(b, e) {
      if (b.contains) {
        return b.contains(e);
      }
      for (; e && e !== kb;) {
        if (e = Ka(e), b === e) {
          return !0;
        }
      }
    };
    Ic = function(b) {
      return P ? b.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : b.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var R = 9 > z, ha = R;
    Ma = function(b) {
      return b.tagName.toUpperCase();
    };
    Ea = function(b, e) {
      if (8 > H || 5.5 > z) {
        e = zb(e);
      }
      var p = b.getAttribute(e);
      return H && "tabIndex" === e ? "-0" === p ? "" : "" === p ? "-1" : p : p || "";
    };
    ab = function(b, e, p) {
      if (H && "tab-index" === e) {
        "-1" === p ? b.removeAttribute("tabIndex") : b.setAttribute("tabIndex", p);
      } else {
        if (8 > H || 5.5 > z) {
          e = zb(e);
        }
        b.setAttribute(e, p);
      }
    };
    Va = function(b, e) {
      if (H && "tab-index" === e) {
        "-0" !== b.getAttribute("tabIndex") && b.setAttribute("tabIndex", "-0");
      } else {
        if (8 > H || 5.5 > z) {
          e = zb(e);
        }
        b.removeAttribute(e);
      }
    };
    sb = function(b, e) {
      if (H && "tab-index" === e) {
        return "-0" !== b.getAttribute("tabIndex");
      }
      if (8 > H || 5.5 > z) {
        e = zb(e);
      }
      return b.hasAttribute ? b.hasAttribute(e) : null != b.getAttribute(e);
    };
    Jc = function(b) {
      return b.className;
    };
    Nb = na;
    Wa = xa;
    ib = function(b, e) {
      var p;
      if (!xa(b, e)) {
        if (p = b.className) {
          p += " ";
        }
        na(b, p + e);
      }
    };
    cc = function(b, e) {
      if (xa(b, e)) {
        var p = b.className.split(" ");
        p.splice(p.indexOf(e), 1);
        na(b, p.join(" "));
      }
    };
    Ta = qa;
    Bb = function(b, e) {
      var p, B = -1, G;
      if (5.5 > z) {
        if (p = oa(b)) {
          for (p = p.split(";"); G = p[++B];) {
            qa(b, G.split(":")[0], "");
          }
        }
        if (e) {
          for (B = -1, p = e.split(";"); G = p[++B];) {
            var Q = G.split(":")[0];
            qa(b, Q, G.substr(Q.length + 1));
          }
        }
      } else if (7.1 > H) {
        if (b.setAttribute("style", ""), e) {
          for (p = e.split(";"); G = p[++B];) {
            G = G.split(":"), qa(b, G[0], G[1]);
          }
        }
      } else {
        9 > H || 1 > T ? e ? b.setAttribute("style", e) : b.removeAttribute("style") : b.style.cssText = e;
      }
    };
    Kc = oa;
    Qa.splice(0, 0, function() {
      function b(g) {
        g = $a(g);
        for (var y = g.length, v, F, aa; y;) {
          if (v = g[--y], F = v.nodeType, 8 === F) {
            e && Z.push(v);
          } else if (1 === F) {
            switch(F = Ma(v), "/" === F.charAt(0) && (F = F.substr(1), V[F] = !0), F) {
              case "STYLE":
                if (7.2 <= H && 9 > H) {
                  break;
                }
              case "LINK":
                P || B || hb(db, v) || Q.push(v);
                break;
              case "META":
                F = Ea(v, "name") || Ea(v, "property");
                for (aa = G.length; aa;) {
                  if (0 === F.indexOf(G[--aa])) {
                    Z.push(v);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Tc || sb(v, "async")) {
                  break;
                }
                if (p) {
                  v.innerText = "";
                  p = !1;
                  break;
                }
              case "NOSCRIPT":
                if (sb(v, "skip-cleanup")) {
                  break;
                }
              case "!":
                Z.push(v);
                break;
              case "SOURCE":
                X.HTMLSourceElement || Z.push(v);
                break;
              default:
                V[F] ? Z.push(v) : $a(v).length && b(v);
            }
          }
        }
        for (; Q[0];) {
          db.appendChild(Q.pop());
        }
        for (; Z[0];) {
          Ca(Z.pop());
        }
      }
      cc(kb, "nojs");
      lb = ob("jsMain");
      var e = !(8 > H || 5 > z || mb || Za), p = xc, B = 7 > z, G = ["og:", "twitter:", "fb:"], Q = [], Z = [], V = {};
      b(kb);
    });
  })();
  var la, Ha, Oa, qb, dc, tb, ub, Cb, ec, fc, Lc, Mc, Nc, Db, Ia, gc;
  (function() {
    function N() {
      return r ? m ? 2 : x ? 3 : 1 : 0;
    }
    function J(a) {
      Ha(X, "load", J);
      J = t;
      ja(Qa, a, !0);
      Oa = Qa = t;
    }
    function O(a, c) {
      ub(function() {
        var h = oa(a);
        c(h);
        h.addListener(c);
        return !0;
      });
    }
    function ja(a, c, h) {
      for (var f = 0; f < a.length; ++f) {
        !0 === a[f](c) && (a.splice(f, 1), --f);
      }
      h && (a.length = 0);
    }
    function ea(a, c, h) {
      Qa || R.length || ba(fa);
      R.push(a, c, h);
    }
    function fa() {
      var a = R, c;
      for (R = []; c = a.shift();) {
        ja(c, a.shift(), a.shift());
      }
    }
    function U(a) {
      var c = a || event;
      a = b[c.type];
      var h = -1, f, E;
      5 > z ? c = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : z ? (c.target = c.srcElement, c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : p && (c.K = c.stopPropagation, c.stopPropagation = function() {
        E = !0;
      });
      for (; f = a[++h];) {
        f.j === this ? (this.g = f.i, z && (c.currentTarget = this), this.g(c), z ? (this.g = cb, this.g = t) : delete this.g) : 7.2 > H && this === M && f.j === X && (X.g = f.i, X.g(c), delete X.g);
      }
      if (z) {
        return c.preventDefault = c.stopPropagation = cb, c.preventDefault = c.stopPropagation = t, c.returnValue;
      }
      p && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (G = !0), E && !G && c.K(), c.K = c.stopPropagation = t);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ka() {
      var a = 9 === P.offsetWidth;
      Db !== a && ea(uc, Db = a);
    }
    function na() {
      !Qa && C && (rb(C), C = ba(xa));
    }
    function xa() {
      C = 0;
      ja(u);
    }
    function qa(a) {
      Qa || ja(L, a);
    }
    var oa = X.matchMedia, P, R = [];
    Qa.push(function() {
      O = t;
      P = La(za, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Oa(function() {
        R.length && ba(fa);
      });
    });
    la = function(a, c, h, f) {
      if (B) {
        a.addEventListener(c, h, f ? ha ? f : f.capture || !0 === f : !1);
      } else {
        var E = {j:a, i:h};
        f = b[c];
        var W = "on" + c, ca, ra;
        if (f) {
          for (ca = f.length; ra = f[--ca];) {
            if (ra.j === a && ra.i === h) {
              return;
            }
          }
          b[c].push(E);
        } else {
          b[c] = f = [E], e || (c = a[W], "function" === typeof c && c !== U && f.unshift({j:a, i:c}));
        }
        e ? a.attachEvent(W, U) : a[W] = U;
      }
    };
    Ha = function(a, c, h, f) {
      if (B) {
        a.removeEventListener(c, h, f ? ha ? f : f.capture || !0 === f : !1);
      } else {
        f = b[c];
        c = "on" + c;
        var E, W, ca;
        if (f) {
          for (E = f.length; W = f[--E];) {
            W.j === a && (W.i === h ? f.splice(E, 1) : ca = !0);
          }
          ca || (e ? a.detachEvent(c, U) : z ? (a[c] = cb, a[c] = null) : delete a[c]);
        }
      }
    };
    var ha = !z && !mb && (new Qc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), b = {}, e = !1, p = 525.13 > ta, B = !p && !mb && X.addEventListener, G;
    p && kb.addEventListener("click", function(a) {
      if (G) {
        return G = !1, a.preventDefault(), !1;
      }
    });
    Oa = function(a) {
      Qa.push(a);
    };
    qb = function(a) {
      Q && Q.push(a);
    };
    var Q = [];
    if (419.3 >= ta) {
      var Z = function() {
        if (Z) {
          var a = M.readyState;
          "loaded" === a || "complete" === a ? (Z = t, J()) : ba(Z);
        }
      };
      ba(Z);
    } else {
      la(X, "load", J);
    }
    z || !Za && 1.8 > T ? la(X, "unload", function(a) {
      ja(Q, a, !0);
    }) : Q = t;
    ub = function(a) {
      uc.push(a);
    };
    Oa(function() {
      ka();
      Lb(ka);
    });
    fc = function(a, c) {
      if (V) {
        la(a, "focusin", c);
      } else if (g) {
        la(a, "DOMFocusIn", c);
      } else {
        if (v) {
          sa || (sa = Vb(k, 333));
        } else if (y || F) {
          la(M, "focus", pa, !0);
        } else {
          return;
        }
        for (var h = aa, f = 0, E = h.length; f < E; ++f) {
          if (h[f] === a && h[f + 1] === c) {
            return;
          }
        }
        h.push(a, c);
      }
    };
    Lc = function(a, c) {
      if (V) {
        la(a, "focusin", c);
      } else if (g) {
        la(a, "DOMFocusIn", c, !1);
      } else {
        for (var h = aa, f = 0, E = h.length; f < E; ++f) {
          if (h[f] === a && h[f + 1] === c) {
            h.splice(f, 2);
            h.length || (v ? sa = Bc(sa) : (y || F) && Ha(M, "focus", pa, !0));
            break;
          }
        }
      }
    };
    var V = 6 <= z || Ua || 52 <= T || 15 <= wa || 534 <= ta || 5 <= Aa || pc || 4 <= Pa || 4 <= Gb || 11.6 <= Y(8) || 12 <= Y(9), g = 8 <= H || wa || Pa || Gb || ta || Aa, y = 8 > H, v = 6 > z, F = 52 > T || eb;
    if (F || y) {
      var aa = [];
      var pa = function(a) {
        var c = aa, h = y ? M.activeElement : a.target;
        if (y) {
          var f = a;
          a = {type:"focusin", target:h, preventDefault:function() {
            f.preventDefault();
          }, stopPropagation:function() {
            f.stopPropagation();
          }};
        }
        for (var E = 0, W = c.length; E < W; ++E) {
          var ca = c[E];
          (ca === h || hb(ca, h)) && c[E + 1].call(ca, a);
        }
      };
    } else if (v) {
      aa = [];
      var sa, Ba, da, k = function() {
        da = X.onerror;
        X.onerror = l;
        var a = M.activeElement;
        if (Ba !== a) {
          Ba = a;
          for (var c = aa, h, f = 0, E = c.length; f < E; ++f) {
            h = c[f], (h === a || hb(h, a)) && c[f + 1].apply(h, [{target:a}]);
          }
        }
        X.onerror = da;
        da = t;
      }, l = function() {
        X.onerror = da;
        da = Ba = t;
        return !0;
      };
    }
    ec = function(a) {
      Ra && Ra.push(a);
    };
    var n = 60 > T || eb, r, x, m;
    if (89 <= T || 89 <= wa || nb && 79 <= qc || oa && (oa("(forced-colors:none)").matches || oa("(forced-colors:active)").matches)) {
      gc = !0, O("(forced-colors:active)", function(a) {
        r = a.matches;
        Ia = N();
        ea(Ra, Ia);
      });
    } else if (10 <= z || Ua || nb && qc) {
      gc = !0, O("(-ms-high-contrast:black-on-white)", function(a) {
        r = x = a.matches;
        Ia !== N() && (Ia = N(), ea(Ra, Ia));
      }), O("(-ms-high-contrast:white-on-black)", function(a) {
        r = m = a.matches;
        Ia !== N() && (Ia = N(), ea(Ra, Ia));
      }), O("(-ms-high-contrast:active)", function(a) {
        r = a.matches;
        Ia !== N() && (Ia = N(), ea(Ra, Ia));
      });
    } else if (nb && (z || T && 0 <= Ga.conpare(Ja, "1.8.1") || eb)) {
      var I = function() {
        function a(f, E) {
          if (E && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var W = f.split("(")[1].split(",");
          return Ya(W[0]) + Ya(W[1]) + Ya(W[2]);
        }
        var c = M.defaultView;
        var h = c ? c.getComputedStyle(P, null) : P.currentStyle;
        c = (h && h.color || "").split(" ").join("");
        h = (h && h.backgroundColor || "").split(" ").join("");
        c && (r = "#123456" !== c && "rgb(18,52,86)" !== c, x = a(c) < a(h, !0), m = a(c) > a(h, !0), Ia !== N() && (Ia = N(), ea(Ra, Ia, n)));
      };
      ub(function(a) {
        if (a) {
          return Ta(P, "color", "#123456"), Ta(P, "backgroundColor", "#123456"), n ? (I(), Ra = t) : Lb(I), I = t, !0;
        }
      });
    } else {
      Ra = N = t;
    }
    Cb = function(a) {
      w.push(a);
    };
    var w = [], K = 7.5 <= H && 8 > H;
    K && function() {
      for (var a = M.images, c = a.length, h; c;) {
        h = a[--c], h.J = h.src, Va(h, "src");
      }
    }();
    Oa(function() {
      function a() {
        f ? (E = h[--f], K && ab(E, "src", E.J), vc(c, K ? E.J : E.src)) : Cb = w = t;
      }
      function c(ca) {
        ja(w, {G:E, H:ca}, !f);
        a();
      }
      var h = M.images || pb("img"), f = h.length;
      if (12 > H || 532 > ta) {
        a();
      } else {
        for (; f;) {
          var E = h[--f];
          var W = 9 > z ? E.complete : 0 <= E.naturalWidth ? E.naturalWidth : E.width;
          ea(w, {G:E, H:W}, !f);
        }
        Cb = w = t;
      }
    });
    dc = function(a) {
      u.push(a);
    };
    var u = [], C;
    la(X, "resize", na);
    qb(function() {
      C && nc(C);
      Ha(X, "resize", na);
    });
    tb = function(a) {
      L.push(a);
    };
    var L = [], ia = 1 > T || 1.2 <= T && 1.8 > T || 7.2 >= H, ma;
    ia ? Lb(function() {
      var a = X.pageYOffset;
      ma !== a && (ma = a, qa({type:"scroll", cancelable:!1, stopPropagation:cb, preventDefault:cb}));
    }) : la(X, "scroll", qa, {passive:!0});
    qb(function() {
      ia || Ha(X, "scroll", qa, {passive:!0});
    });
    Mc = function(a, c) {
      if (Da) {
        la(a, "wheel", c, {passive:!1});
      } else if (d) {
        la(a, "mousewheel", c, !1);
      } else if (q) {
        la(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var h = D, f = 0, E = h.length; f < E; ++f) {
          if (h[f] === a && h[f + 1] === c) {
            return;
          }
        }
        h.length || la(M, "DOMMouseScroll", S, !1);
        h.push(a, c);
      }
    };
    Nc = function(a, c) {
      if (Da) {
        Ha(a, "wheel", c, {passive:!1});
      } else if (d) {
        Ha(a, "mousewheel", c, !1);
      } else if (q) {
        Ha(a, "MozMousePixelScroll", c, !1);
      } else if (A) {
        for (var h = D, f = 0, E = h.length; f < E; ++f) {
          if (h[f] === a && h[f + 1] === c) {
            h.splice(f, 2);
            h.length || Ha(M, "DOMMouseScroll", S, !1);
            break;
          }
        }
      }
    };
    var Da = 9 <= z || Ua || 17 <= T || eb || 31 <= wa || 537.7 <= ta, d = 6 <= z || Ua || 9 <= H || wa || 522 <= ta || Aa, q = Ab, A = T && 0 <= Ga.conpare(Ja, "0.9.7") && !Ab;
    if (A) {
      var D = [], S = function(a) {
        for (var c = D, h = a.target, f, E = 0, W = c.length; E < W; ++E) {
          f = c[E], hb(f, h) && c[E + 1].call(f, a);
        }
      };
    }
  })();
  (function() {
    function N(n) {
      switch(n) {
        case 1:
          return e;
        case 2:
          return !!p;
        case 3:
          return !!B;
        case 4:
          return !!G;
        case 5:
          return Z;
        case 6:
          return Q && !qa;
      }
      return !1;
    }
    function J(n) {
      V(n);
      k && !n && Ca(k);
      V = g = y = v = F = aa = Ba = da = k = l = t;
    }
    function O(n) {
      M.fonts.load('1.6em "' + n + '"').then(function() {
        var r;
        (r = fa(g)) ? ba(J, r) : ja(!0);
      }, function() {
        fb !== t ? U(fb) : Yb(U);
      });
    }
    function ja(n) {
      n && (sa = Sa());
      (n = fa(g, pa)) ? J(n) : (n = pa, M.hidden || M.msHidden || M.mozHidden || M.webkitHidden ? (sa = Sa(), n = !1) : n = n < Sa() - sa, n ? Ba ? ka() : xa ? J(0) : fb !== t ? U(fb) : Yb(U) : ba(ja));
    }
    function ea() {
      return La(za, 5 > z ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":'"liga=1"', "-moz-font-feature-settings":'"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, R);
    }
    function fa(n) {
      var r = 0, x = -1, m = (ha || !1) && [];
      if (!l) {
        var I = -1;
        var w;
        da = ea();
        for (l = []; w = b[++I];) {
          Ta(da, "fontFamily", w), l[I] = da.offsetWidth;
        }
      }
      for (5 > z ? da || (da = ea()) : Ka(da) || za.appendChild(da); I = b[++x];) {
        Ta(da, "fontFamily", '"' + n + '",' + I);
        var K = da.offsetWidth;
        if (ha) {
          m[x] = K;
        } else {
          if (K !== l[x]) {
            r = 1;
            break;
          }
        }
      }
      if (ha && K === m[0] && K === m[1]) {
        for (r = 1, x = -1; 0 <= (K = l[++x]);) {
          if (K === m[0] && K === m[1] && K === m[2]) {
            r = 0;
            break;
          }
        }
      }
      !z && r && F && (da.textContent = F, K = da.offsetWidth, da.textContent = aa, r = K === da.offsetWidth ? 2 : 1, da.textContent = R);
      da = Ca(da);
      return r;
    }
    function U(n) {
      n ? (Ba = !0, pa = P, ka()) : J(0);
    }
    function ka() {
      if (y) {
        for (; y.length;) {
          var n = y.shift(), r = y.shift();
          if (N(n)) {
            k = zc(r, na, v, k);
            return;
          }
        }
      }
      J(0);
    }
    function na(n) {
      n ? ja(!0) : ka();
    }
    Yb = !1 === fb ? function(n) {
      ba(n, !1);
    } : function(n) {
      function r(I) {
        m && (m = rb(m), fb = I, x.onload = x.onerror = cb, ba(n, I));
      }
      if (fb !== t) {
        ba(n, fb);
      } else {
        var x = new Image(), m = ba(r, !1, 999);
        x.onerror = function() {
          r(!1);
        };
        x.onload = function() {
          r(1 === x.width * x.height);
        };
        x.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > z && Oa(function() {
      var n = La(za, "div");
      Bb(n, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sc = 1 < n.offsetHeight;
      Ca(n);
    });
    vc = function(n, r) {
      function x() {
        I || !w || m.complete ? (ba(n, !!m.width), m.onerror = m.onload = cb, m = n = t) : (--w, ba(x));
      }
      var m = new Image(), I, w = 99;
      m.onerror = function() {
        I = !0;
      };
      m.onload = function() {
        I = !0;
      };
      m.src = r;
      ba(x);
    };
    wc = function(n, r, x, m, I, w, K) {
      V = n;
      g = r;
      y = x;
      v = m;
      F = I;
      aa = w;
      pa = K || oa;
      Y(10) ? ba(J, 1) : Vc ? ba(J, 0) : !M.fonts || 603 > ta || 11 > Aa ? ja(!0) : O(g);
    };
    var xa = 9 > z, qa = 6 > wa || H || 530 > ta || 5 > Aa || ya(10), oa = 5E3, P = 500, R = "mmmmmmmmmmlliiiiiiiii", ha = 9 <= wa && 18 > wa || 3 > Pa || 7 > Aa || ta && 0 >= Ga.conpare(Ja, "536.11"), b = ["monospace", "sans-serif", "serif"], e = 14 <= Ua || 36 <= wa || 39 <= T || 3 <= eb || 602 <= ta && rc && 0 <= Ga.conpare("10.12", rc) || 10 <= Aa, p = 6 <= wa || T && 0 <= Ga.conpare(Ja, "1.9.2") || eb || 533 <= ta || 5 <= Aa || 4.4 <= Pa || 11.5 <= H || Ua || 9 <= Y(2) || 10 <= Y(3), B = 2 <= 
    wa || Ab || eb || 525 <= ta || 4 <= Aa || 2.2 <= Pa || 10.1 <= H || Ua || 9 <= Y(2) || 10 <= Y(3), G = B, Q = 5.1 <= nb && 5.2 >= nb && 40 > wa || 6 <= nb && 6.1 > nb && 51 > wa || 37 > wa || 525 <= ta || 3.1 <= Aa || 3 <= Pa || 11.5 <= H, Z = 4 <= Y(2) || 10 <= Y(3), V, g, y, v, F, aa, pa, sa, Ba, da, k, l;
  })();
  (function() {
    function N(g) {
      if (2 !== g) {
        var y = Ec("ico"), v = 0, F = y.length;
        if (F) {
          if (1 === g) {
            for (; v < F; ++v) {
              g = y[v];
              var aa = Ic(g);
              if (aa = V[aa]) {
                g.innerHTML = aa;
              }
            }
          } else {
            G && !B && (X.VectorIconFallback = bz, Jb(va + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        Kb(va + "js/vector-icon-svg-fallback.js");
        return [V, y, La, B];
      }
      bz = !1;
    }
    Cb(function(g) {
      var y = g.G;
      g = g.H;
      var v = Ka(y);
      !Wa(v, "aBodyRoot") && g ? ib(v, "js-image-has-been-loaded") : g || Ea(y, "alt") || "lazy" === Ea(y, "loading") || Ta(y, "display", "none");
    });
    Za && (Qa.splice(1, 0, function() {
      for (var g = Fc(lb, "RichLink-sep"), y, v, F, aa, pa, sa; y = g.shift();) {
        for (y = $a(y); v = y.shift();) {
          if ("A" === Ma(v) && !v.innerHTML) {
            for (; F = y.shift();) {
              if (1 === F.nodeType) {
                if ("A" === Ma(F)) {
                  break;
                }
                for (aa = gb(F, "A"); pa = aa.shift();) {
                  for (sa = $a(pa); sa.length;) {
                    pa.parentNode.insertBefore(sa.shift(), pa);
                  }
                  Ca(pa);
                }
              }
              v.appendChild(F);
            }
          }
        }
      }
    }), Qa.splice(2, 0, function() {
      for (var g = pb("A"), y, v; y = g.shift();) {
        "A" !== Ma(y) || y.innerHTML || (v = y.nextSibling && y.nextSibling.firstChild) && v.href === y.href && Ca(y);
      }
    }));
    5.5 <= z && 8 > z && Ra && ec(function(g) {
      for (var y = gb(za, "a"), v = y.length, F = 0; F < v; ++F) {
        y[F].hideFocus = !g;
      }
    });
    if (!gc && Ra) {
      var J, O = function() {
        J = La(db, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:va + "css/" + Hb + "hc/" + Xb});
        (tc || 5.5 <= z && 9 > z && sc) && ib(za, "js-canuse-css-rotate-when-forced-colors-mode");
        O = t;
      };
      ec(function(g) {
        g && !J ? O() : J && (g ? db.appendChild(J) : Ca(J));
      });
    }
    H && Oa(function() {
      for (var g = gb(za, "a"), y = g.length, v = 0, F; v < y; ++v) {
        F = g[v], "-1" === Ea(F, "tabIndex") ? Va(F, "tabIndex") : Ea(F, "href") && ab(F, "tabIndex", "0");
      }
      g = gb(za, "input");
      v = 0;
      for (y = g.length; v < y; ++v) {
        F = g[v], "hidden" === Ea(F, "type") && Va(F, "tabIndex");
      }
    });
    if (T && 0 > Ga.conpare(Ja, "0.9.5")) {
      Ac = !0;
      var ja, ea, fa, U, ka;
      Oa(function() {
        la(M, "keydown", na);
        la(M, "keyup", xa);
        fc(za, qa);
        Za || (la(X, "blur", b), la(za, "click", ha));
      });
      var na = Za ? function(g) {
        16 === g.keyCode ? ja = !0 : 9 === g.keyCode && U && oa(U, !0) && (U.blur && U.blur(), g.stopPropagation(), g.preventDefault(), ba(R));
      } : function(g) {
        16 === g.keyCode ? ja = !0 : 9 === g.keyCode && (ea = Sa());
      }, xa = function(g) {
        16 === g.keyCode && (ja = !1);
      }, qa = Za ? function(g) {
        U = g.target;
      } : function(g) {
        var y = g.target;
        if (U === y) {
          fa = t;
        } else if (fa) {
          y === fa ? (g.stopPropagation(), R(!0)) : (y.blur && p(y), g.preventDefault(), R());
        } else {
          if (g = U) {
            U = t, p(g);
          }
          fa = y;
          R(!0);
        }
      }, oa = function(g, y) {
        var v = Sa(), F = za, aa = "nextSibling", pa = "firstChild";
        ja && (y || v - 99 < ea && ea <= v) && (aa = "previousSibling", pa = "lastChild");
        for (fa = t; g !== F;) {
          if (sa) {
            v = g;
            var sa = !1;
          } else {
            v = g[aa];
          }
          if (v) {
            if (1 === v.nodeType) {
              if (P(v)) {
                return fa = v, !0;
              }
              g = (sa = v[pa]) || v;
            } else {
              g = v;
            }
          } else {
            g = g.parentNode;
          }
        }
      }, P = function(g, y) {
        function v() {
          return "-1" !== Ea(g, "tab-index");
        }
        function F() {
          return 0 < g.offsetHeight * g.offsetWidth;
        }
        if (g.focus) {
          var aa;
          switch({A:y ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ma(g)]) {
            case 1:
              if (sb(g, "href") && v() && F()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ea(g, "type") && v() && !sb(g, "disabled") && F()) {
                return !0;
              }
              break;
            case 3:
              if (v() && !sb(g, "disabled") && F()) {
                return !0;
              }
              break;
            default:
              if ((aa = Ea(g, "tab-index")) && "-1" !== aa && F()) {
                return !0;
              }
          }
        }
      }, R = function(g) {
        ka = 0;
        fa && (Za || la(fa, "blur", e), U = fa, fa = t, g || U.focus());
      };
      if (!Za) {
        var ha = function(g) {
          var y = g.target;
          if (U && P(y, !0)) {
            var v = U;
            U = t;
            p(v);
            fa = y;
            g.stopPropagation();
            g.preventDefault();
            R();
          }
        }, b = function(g) {
          g.target === M && (fa = t);
        }, e = function(g) {
          g = g.target;
          Ha(g, "blur", e);
          U === g && oa(g) && (ka || (ka = ba(R)));
        }, p = function(g) {
          Ha(g, "blur", e);
          g.blur();
        };
      }
    }
    ub(function(g) {
      if (g) {
        return wc(N, "web-doc-base", [1, va + "iconfont/woff2.css", 2, va + "iconfont/woff.css", 4, va + "iconfont/otf.css", 3, va + "iconfont/ttf.css", 6, va + "iconfont/svg.css"], "js-myIconFont-testCssReady", Q, Z), N = t, !0;
      }
    });
    var B = 8 <= Y(8) && 9 > H, G = 9 <= z || Ua || 1.8 <= T || eb || 8 <= Y(8) || 9 <= Y(9) || 3 <= Y(22) || Rc || 312.6 <= ta && 312.7 >= ta || 419.3 <= ta || Aa, Q = "IE", Z = "\ueadb", V = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", 
    Android:"\ud83e\udd16"};
  })();
  (function() {
    function N(d) {
      var q = V.length, A, D, S, a;
      if (13 === (d.keyCode || d.V) || d.type !== g) {
        for (; q;) {
          var c = V[--q];
          if (c.F === this || c.u === this) {
            q = c.F;
            var h = A = c.u;
            if (c.P) {
              if (Ta(q, "width", c.$), q.src = c.Z, Nb(h, c.T), q = c.L) {
                Bb(q, c.S), cc(q, "js-captioned-thumbnail__large");
              }
            } else {
              if (D = c.N) {
                delete c.N;
                if (c.M) {
                  for (; A = Ka(A);) {
                    if (!Wa(A, "caption")) {
                      var f = Ma(A);
                      if ("DIV" === f || "P" === f || "BLOCKQUOT" === f || "LI" === f || "DD" === f || "TD" === f || "TH" === f || "FORM" === f || "PRE" === f) {
                        break;
                      }
                    }
                  }
                  A = (A.offsetWidth | 0) - 4;
                  1600 < A && (A = 1600);
                  if (2 === c.M) {
                    D = D.split("=");
                    f = D.length;
                    if (S = D[f - 1]) {
                      (a = Ya(S.substr(1))) && S === "s" + a ? D[f - 1] = "w" + A : D[f] = "w" + A;
                    }
                    D = D.join("=");
                  } else {
                    D = D.split("/");
                    f = D.length;
                    if (S = D[f - 2]) {
                      (a = Ya(S.substr(1))) && S === "s" + a ? D[f - 2] = "w" + A : D.splice(f - 1, 0, "w" + A);
                    }
                    D = D.join("/");
                  }
                }
                c.X = D;
              }
              c.T = Jc(h);
              ib(h, "js-pica-thumbnail__large");
              Ta(q, "width", "");
              q.src = c.X;
              if (q = c.L) {
                Bb(q, ""), ib(q, "js-captioned-thumbnail__large");
              }
            }
            c.P = !c.P;
            break;
          }
        }
        J(d);
      }
    }
    function J(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function O(d) {
      var q = m;
      if (Db) {
        if (I && !q) {
          if (Sa() < I) {
            return;
          }
          I = t;
        }
        7 === d ? w = 0 : (w && (w = rb(w)), r = Wb());
        q ? (m = ja(t, q[0], q[1])) || (I = Sa() + 99) : ja();
      } else {
        m = t;
      }
    }
    function ja(d, q, A) {
      function D(Xa) {
        h = Xa;
        if (l) {
          f = l + ":translate" + (x ? "3D(0," : "(0,") + Xa + (x ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== Xa) {
          if (aa || pa) {
            var hc = Ba.offsetWidth;
          }
          f = aa ? "position:fixed;width:" + hc + "px;top:" + (Xa - S + ca) + "px" : sa ? "top:" + Xa + "px" : "position:absolute;top:" + Xa + "px;left:0";
          if (pa && f) {
            var Eb = 8 > z ? " " : ",";
            f += ";clip:rect(" + (0 > Xa ? -Xa + "px" + Eb + hc + "px" + Eb + Fa : "0" + Eb + hc + "px" + Eb + (Xa + Fa < Ob ? Fa : Ob - Xa)) + "px" + Eb + "0)";
          }
        }
      }
      var S = r, a = da, c = Ba.offsetTop === a.offsetTop, h = 0, f = "", E = !0;
      if (c) {
        for (var W = 0, ca = 0, ra = a; ra && ra !== za;) {
          ca += ra.offsetTop, ra = ra.offsetParent;
        }
        h = n;
        var ic = 11 > z ? kb.offsetHeight : X.innerHeight, jc = a.offsetHeight, Fa = k.offsetHeight, Ob = Fa < jc ? jc : Fa, jb = S, vb = jb + ic, Pb = ca, Qb = Pb + Ob, Oc = ca + h, Xc = Oc + Fa;
        a = jb < Pb ? Pb : jb;
        ra = Qb < vb ? Qb : vb;
        var wb = ra - a;
        jb = Qb <= jb;
        vb = vb <= Pb;
        if (q !== t) {
          E = ca + q;
          d = E + A;
          var xb;
          if (jb || vb) {
            return ic <= A ? xb = ca : xb = jb ? Qb - A : ca + A - ic, I = t, X.scroll(0, xb), m;
          }
          Fa <= wb ? W = 3 : A <= wb ? Fa - q <= wb ? W = 2 : a <= E && d <= ra ? a < ca + h && (W = 4) : W = a <= E && E <= ra ? 5 : a <= d && d <= ra ? 4 : d < a ? 4 : 5 : W = 4;
          E = !1;
        } else {
          d !== t ? Fa <= wb ? (W = 7, E = !1) : (h -= 60 * d, W = ra - ca - Fa, xb = a - ca, h < W ? h = W : xb < h && (h = xb), W = 6) : jc <= Fa || (jb ? W = 1 : vb || (Fa <= wb ? W = 3 : a < Oc ? W = 3 : Xc < ra ? W = 2 : S < ca + Fa - wb || (W = 2)));
        }
        switch(W) {
          case 0:
            D(0);
            break;
          case 1:
            D(Ob - Fa);
            break;
          case 2:
            D(ra - ca - Fa);
            break;
          case 3:
            D(a - ca);
            break;
          case 4:
            D(a - ca - q);
            break;
          case 5:
            D(ra - ca - (q + A));
          case 6:
            D(h);
        }
      }
      Bb(k, f);
      n = h;
      return c && E;
    }
    function ea(d) {
      if (Db && (T && (r = Wb()), this !== d.target)) {
        var q = Tb(d.deltaY) ? d.deltaY : Tb(d.wheelDeltaY) ? d.wheelDeltaY / 120 : Tb(d.wheelDelta) ? d.wheelDelta / -120 : d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1);
        q && ja(9 >= q ? -9 >= q ? -3 : q : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function fa(d) {
      if (Db) {
        var q = T && 0 > Ga.conpare(Ja, "0.9.4"), A = d.target;
        d = k;
        var D = 0;
        if (hb(d, A)) {
          if (l) {
            q = A.getBoundingClientRect();
            var S = q.bottom - q.top;
            D = q.top - d.getBoundingClientRect().top | 0;
          } else {
            S = A.offsetHeight;
            var a = A;
            if (q) {
              for (var c = []; a && (T ? hb(d, a) : d !== a);) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, a.tagName && c.unshift(a.tagName + ":" + a.offsetTop);
                }
                a = a.offsetParent;
              }
              a = A;
            }
            for (; a && (T ? hb(d, a) : d !== a);) {
              if (q) {
                for (; a.previousSibling;) {
                  a = a.previousSibling, D += a.offsetHeight || 0;
                }
                a = a.parentNode;
              } else {
                D += a.offsetTop, a = a.offsetParent;
              }
            }
          }
          F ? (m = [D, S], w && rb(w), w = ba(O, 7, 1 > T || 536 > ta || 14 > wa ? 500 : 0)) : (r = Wb(), ja(t, D, S));
        }
      }
    }
    function U() {
      K.call(u);
    }
    function ka() {
      M.fullscreenElement || M.fullscreen || M.webkitIsFullscreen || M.msFullscreenElement || X.fullScreen ? (ab(u, "id", "blog2slide-root"), ia[1].parentNode.insertBefore(C, ia[1]), na(), M.onkeydown = xa) : L && (Ca(C), Va(u, "id"), Va(L, "id"), L = M.onkeydown = t);
    }
    function na() {
      L && Va(L, "id");
      ma = 0 < ma ? Da < ma ? Da : ma : 0;
      L = ia[ma];
      ab(L, "id", "blog2slide-current");
    }
    function xa(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++ma, na();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --ma, na();
      }
    }
    zc = function(d, q, A, D) {
      D = D || La(db, "link", {type:"text/css", rel:"stylesheet"});
      var S;
      if (p) {
        (S = ob(A)) ? Va(S, "id") : S = La(za, "div", {"aria-hidden":"true", className:A});
        var a = S.offsetWidth;
        ab(S, "id", A);
      }
      e(D, d, q, S, a);
      return D;
    };
    var qa = T && 0 > Ga.conpare(Ja, "0.9.1"), oa = 11 <= z || Ua || 9 <= H && 9.5 > H, P = 11 > z, R = 7.2 <= H && 7.5 > H, ha = 9 > T && !qa || 19 > wa || 4.3 > Pa || 2 > Gb || 536 > ta || 6 > Aa || 7 <= H && 9 > H && !R, b = !qa && !oa && !P && !R && !ha, e = b ? function(d, q, A) {
      d.onload = bz;
      d.onerror = function() {
        d.onload = d.onerror = null;
        ba(A, !1);
      };
      d.href = q;
      function bz() {
        d.onload = d.onerror = null;
        ba(A, !0);
      }
      bz = !1;
    } : oa ? function(d, q, A, D, S) {
      d.onload = function() {
        ba(A, p(D, S));
        Ca(D);
        d.onload = null;
        D = t;
      };
      d.href = q;
    } : P ? function(d, q, A, D, S) {
      d.onreadystatechange = function() {
        "complete" === d.readyState && (ba(A, p(D, S)), Ca(D), D = t, d.V = cb);
      };
      d.href = q;
    } : ha || R ? function(d, q, A, D, S) {
      function a() {
        h && (f = rb(f), E = Sa() + 999, ba(c, 0, 99), ha ? h.onerror = null : h.removeEventListener("load", a, !1), h = t);
      }
      function c() {
        p(D, S) ? (Ca(D), D = t, ba(A, !0)) : Sa() < E ? ba(c, 0, 99) : (Ca(D), D = t, ba(A, !1));
      }
      var h = new Image(), f = ba(a, 0, 5E3), E;
      ha ? h.onerror = a : h.addEventListener("load", a, !1);
      h.src = d.href = q;
    } : function(d, q, A) {
      ba(A, !1);
    }, p = !b && !qa && function(d, q) {
      return d.offsetWidth !== q;
    };
    yc = T && 0 >= Ga.conpare(Ja, "0.9");
    Ib = !(7.2 > H || yc);
    Jb = function(d) {
      B ? M.write('<script src="' + d + '">\x3c/script>') : Qa || Q.length ? Q.push(d) : Z(d);
    };
    Kb = function() {
      B || Z(Q.shift());
    };
    var B = !Ib, G = Ib && 7.5 > H;
    if (!B) {
      var Q = [];
      G && (xc = !0);
      Oa(function() {
        Z(Q.shift());
      });
      var Z = function(d) {
        d && (G ? kc[0].src = d : La(db, "script", {src:d}));
      };
    }
    var V = [], g = 5.5 <= z && 8 > z ? "keypress" : "keydown";
    if (!oc) {
      var y = Na.transition !== t || Na["-o-transition"] !== t || Na["-moz-transition"] !== t || Na["-webkit-transition"] !== t;
      Cb(function(d) {
        if (d.H && lb) {
          d = d.G;
          var q = Ka(d), A = "", D;
          if ("A" === Ma(q) && 1 === Gc(q).length) {
            var S = Ea(q, "href");
            var a = S.split("?")[0].split("#")[0].split(".");
            a = (a[a.length - 1] || "").toLowerCase();
            if ((D = 0 < S.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + a + ".")) {
              la(q, g, N);
              la(d, "click", N);
              la(q, "click", J);
              y && (A = d.naturalWidth + "px", Ta(d, "width", A));
              ib(q, "js-pica-thumbnail");
              for (a = q; a = Ka(a);) {
                if (Wa(a, "caption")) {
                  ib(a, "js-captioned-thumbnail");
                  var c = a;
                  var h = Kc(c);
                  break;
                }
              }
              V.push({u:q, L:c, S:h, Z:d.src, $:A, N:S, F:d, M:D ? 0 < S.indexOf("/img/a/") ? 2 : 3 : 0 < S.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      qb(function(d, q) {
        for (d = -1; q = V[++d];) {
          Ha(q.u, g, N), Ha(q.F, "click", N), Ha(q.u, "click", J);
        }
      });
    }
    var v = ["jsSidebarFixer1", "jsSidebarFixer2"], F = !(9 > z || H || 1 <= T && 1.3 > T || Ac), aa = !(5 > Aa || 2.2 > Pa || 6 > Y(12) || ya(32) && 534 > ta || ya(34) || 7 > z || 9 > H || 1 > T), pa = aa || 6 === z || 1 > T, sa = 7.5 > H, Ba, da, k, l = Wc && tc, n = 0, r = 0, x, m, I, w;
    Pc || oc || (ub(function(d) {
      if (d) {
        if (!lb) {
          return !0;
        }
        d = -1;
        var q;
        Ba = ob("jsSide");
        da = lb;
        if (!Ba) {
          return !0;
        }
        tb(O);
        dc(O);
        k = Mb(ac(Ba), "div", {id:"jsSidebarFixer"});
        for (fc(k, fa); 1 < $a(Ba).length;) {
          k.appendChild($a(Ba)[1]);
        }
        for (; q = v[++d];) {
          Mc(ob(q), ea);
        }
        z || Ua || 2 > wa || (x = Na.perspective !== t || Na.MozPerspective !== t || Na["-webkit-perspective"] !== t);
        O();
        return !0;
      }
    }), qb(function() {
      for (var d = -1, q; q = v[++d];) {
        Nc(ob(q), ea);
      }
      Lc(k, fa);
    }));
    Oa(function() {
      function d(c, h, f, E) {
        var W = E ? "div" : "cite";
        if (0 === h.indexOf("urn:isbn:")) {
          h = h.substr(9).toUpperCase().split("-").join("");
          if (13 === h.length) {
            h = h.toString().slice(3, -1);
            for (var ca = 0, ra = 0; 9 > ra; ra++) {
              ca += (h.charAt(ra) - 0) * (10 - ra);
            }
            ca = (11 - ca % 11) % 11;
            ca = 10 === ca ? "X" : ca.toString();
            h += ca;
          }
          10 === h.length && (h = "//www.amazon.co.jp/exec/obidos/ASIN/" + h + "/itozyun-22/ref=nosim/");
        }
        f = E ? Mb(ac(A), W, {className:f}) : La(A, W, {className:f});
        La(f, "a", 0 === h.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:h} : {href:h}, c);
      }
      if (lb) {
        for (var q = gb(lb, "blockquote"), A, D = -1, S, a; A = q[++D];) {
          S = Ea(A, "title"), a = Ea(A, "cite"), S && a ? (Va(A, "title"), d(S, a, "js-generated-link-in-blockquote", !0)) : a && (Va(A, "cite"), d(X.decodeURI ? decodeURI(a) : a, a, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var K, u, C, L, ia, ma, Da;
    Oa(function() {
      var d = ob("blog2slide-start");
      if (d) {
        var q = M.onfullscreenchange !== t ? "f" : M.onmozfullscreenchange !== t ? "mozF" : M.onwebkitfullscreenchange !== t ? "webkitF" : 0;
        K = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== q || K ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', la(d.firstChild, "click", U), d = Ka(d), u = Ka(d), ia = gb(d, "section"), C = M.createElement("h1"), C.innerHTML = gb(za, "h1")[0].innerHTML, Da = ia.length, ia.splice(0, 0, C), 0 !== q ? la(M, q + "ullscreenchange", ka) : z ? la(M, "MSFullscreenChange", ka, !1) : dc(ka)) : Ca(d);
      }
    });
  })();
  var yb, Rb = !mc || .9 > T || 8 > H || 5.5 > z, bb;
  (function() {
    function N(k) {
      return k === "" + k;
    }
    function J(k, l) {
      return Rb ? new R(k, l) : new mc(k, l);
    }
    function O(k, l, n, r) {
      if (P() - ha < B && !r) {
        return k(l);
      }
      ba(ja, {U:k, Y:l});
    }
    function ja(k) {
      ha = P();
      k.U(k.Y);
    }
    function ea(k, l) {
      k && yb[k] || (k = G.test(l) ? "default-markup" : "default-code");
      var n = !!yb[k];
      n && O(y, k, 0, !0);
      return n;
    }
    function fa() {
      function k(d, q, A) {
        q && (l.h = l.h || [], l.h.push({l:l, B:l.B, O:1, s:I, D:d, o:q, m:A, R:{}, v:0}));
      }
      var l = b, n = l.m, r = n[0], x = n[2], m = l.D, I = l.s, w = l.aa.shift(), K = l.R;
      if (w) {
        var u = K[w], C;
        if (!(0 <= u)) {
          if (C = r[w.charAt(0)]) {
            var L = w.match(C[1]);
            u = C[0];
          } else {
            for (u = 0, r = -1; C = x[++r];) {
              if (L = w.match(C[1])) {
                u = C[0];
                break;
              }
            }
          }
          !(C = N(u)) || L && N(L[1]) || (C = !1, u = 11);
          C || (K[w] = u);
        }
        x = l.v;
        K = w.length;
        l.v += K;
        if (C) {
          C = L[1];
          r = w.indexOf(C);
          var ia = C.length, ma = r + ia;
          L[2] && (ma = K - L[2].length, r = ma - ia);
          k(m + x, w.substr(0, r), n);
          if (ia && ea(u, C)) {
            k(m + x + r, C);
            var Da = !0;
          }
          k(m + x + ma, w.substr(ma), n);
          l.h && l.h.length && (b = l.h.shift());
          Da || (b !== l ? O(V, t, 2) : O(fa, t, 2));
        } else {
          I.push(m + x, u), O(fa, t, 2);
        }
      } else {
        l.l ? (b = l.l.h.shift()) ? O(V, t, 2) : (b = l.l, O(fa, t, 2)) : O(aa, t, 2);
      }
    }
    function U(k) {
      if (g.length) {
        var l = g.shift(), n = qa[l];
        if (n.pop) {
          qa[l] = J(n[0], n[1]);
        } else if (N(n)) {
          qa[l] = J(n);
        } else {
          return U(k);
        }
        O(U, k, 1);
      } else {
        O(y, k);
      }
    }
    function ka(k) {
      for (var l, n = k.firstChild; n; n = n.nextSibling) {
        var r = n.nodeType;
        l = 1 === r ? l ? k : n : 3 === r ? Q.test(n.nodeValue) ? k : l : l;
      }
      return l === k ? t : l;
    }
    yb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var na = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], xa = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
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
    oa = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), P = Fb.now || function() {
      return +new Fb();
    }, R, ha, b, e, p, B = 5 > z ? 60 : 5.5 > z ? 0 : Rb ? 20 : 10, G, Q;
    bb = [function(k) {
      X.RegExpCompat = R = k;
    }, function() {
      G = J("^\\s*<");
      Q = J("\\S");
    }];
    Rb || (bb[1](), bb = t);
    var Z = function() {
      var k = b, l = k.W, n = v(k.B, k.O), r = k.o = n.o;
      k.I = n.I;
      ea(l, r) || (b = t, O(da, t, 0, !0));
    };
    var V = function() {
      var k = b;
      k.aa = k.o.match(k.m[1]) || [];
      k.s.push(k.D, 0);
      O(fa, t, 2);
    };
    var g = [];
    var y = function(k) {
      function l(u) {
        var C = u;
        0 <= u && (C = xa[u]);
        0 <= C[1] && (C[1] = n(C[1]));
        return C;
      }
      function n(u) {
        var C = u;
        return 0 <= u && (C = qa[u], !C.exec) ? (g.push(u), u) : C;
      }
      var r = b, x = yb[k];
      N(x) && (x = yb[k] = yb[x]);
      var m = x[0];
      if (0 <= m) {
        m = na[m];
        if (0 <= m["-num"]) {
          var I = m["-num"];
          delete m["-num"];
          for (var w = -1; 9 > w;) {
            m["" + ++w] = I;
          }
        }
        x[0] = m;
      }
      for (var K in m) {
        m[K] = l(m[K]);
      }
      x[1] = n(x[1]);
      m = x[2];
      w = 0;
      for (I = m.length; w < I; ++w) {
        m[w] = l(m[w]);
      }
      g.length ? O(U, k, 2) : (r.m ? r.l && (r.l.h[0].m = x) : r.m = x, O(V, t, 1));
    };
    var v = function(k, l) {
      function n(K) {
        var u = K.nodeType;
        if (1 === u) {
          if (!Wa(K, "nocode")) {
            for (u = K.firstChild; u; u = u.nextSibling) {
              n(u);
            }
            u = Ma(K);
            if ("BR" === u || "LI" === u) {
              r[I] = "\n", m[I << 1] = x++, m[I++ << 1 | 1] = K;
            }
          }
        } else if (3 === u || 4 === u) {
          if (u = K.nodeValue) {
            u = l ? u.split("\r\n").join("\n").split("\r").join("\n") : u.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), r[I] = u, m[I << 1] = x, x += u.length, m[I++ << 1 | 1] = K;
          }
        }
      }
      var r = [], x = 0, m = [], I = 0;
      n(k);
      var w = r.join("");
      "\n" === w.charAt(w.length - 1) && (w = w.substr(0, w.length - 1));
      return {o:w, I:m};
    };
    var F = function(k, l, n) {
      function r(u) {
        var C = u.nodeType;
        if (1 === C && !Wa(u, "nocode")) {
          if ("BR" === Ma(u)) {
            x(u), u.parentNode && Ca(u);
          } else {
            for (u = u.firstChild; u; u = u.nextSibling) {
              r(u);
            }
          }
        } else if ((3 === C || 4 === C) && n) {
          var L = u.nodeValue, ia = L.indexOf("\r\n"), ma = 2;
          -1 === ia && (ia = L.indexOf("\n"), ma = 1);
          -1 === ia && (ia = L.indexOf("\r"));
          -1 !== ia && (C = L.substr(0, ia), u.nodeValue = C, (L = L.substr(ia + ma)) && bc(u, L), x(u), C || Ca(u));
        }
      }
      function x(u) {
        function C(ia, ma) {
          var Da = ma ? ia.cloneNode(!1) : ia, d = ia.parentNode;
          if (d) {
            d = C(d, 1);
            var q = ia.nextSibling;
            d.appendChild(Da);
            for (var A = q; A; A = q) {
              q = A.nextSibling, d.appendChild(A);
            }
          }
          return Da;
        }
        for (; !u.nextSibling;) {
          if (u = u.parentNode, !u) {
            return;
          }
        }
        u = C(u.nextSibling, 0);
        for (var L; (L = u.parentNode) && 1 === L.nodeType;) {
          u = L;
        }
        I.push(u);
      }
      for (var m = M.createElement("li"); k.firstChild;) {
        m.appendChild(k.firstChild);
      }
      for (var I = [m], w = 0; w < I.length; ++w) {
        r(I[w]);
      }
      if (l === (l | 0)) {
        if (10 <= l && 7.2 > H) {
          var K = M.createElement("ol");
          K.innerHTML = '<li value="' + l + '">' + m.innerHTML + "</li>";
          I[0] = K.firstChild;
        } else {
          ab(m, "value", l);
        }
      }
      K = La(k, "ol", {className:"linenums"});
      k = Math.max(0, l - 1 | 0) || 0;
      w = 0;
      for (l = I.length; w < l; ++w) {
        m = I[w], Nb(m, "L" + (w + k) % 10), m.firstChild || Hc(m, "\u00a0"), K.appendChild(m);
      }
    };
    var aa = function() {
      var k = b, l = k.o, n = l.length, r = 0, x = k.I, m = x.length, I = 0, w = k.s, K = w.length, u = 0;
      w[K] = n;
      var C, L;
      for (L = C = 0; L < K;) {
        w[L] !== w[L + 2] ? (w[C++] = w[L++], w[C++] = w[L++]) : L += 2;
      }
      K = C;
      for (L = C = 0; L < K;) {
        var ia = w[L], ma = w[L + 1];
        for (L += 2; L + 2 <= K && w[L + 1] === ma;) {
          L += 2;
        }
        w[C++] = ia;
        w[C++] = ma;
      }
      w.length = C;
      k = k.B;
      K = "";
      k && (K = k.style.display, Ta(k, "display", "none"));
      for (; I < m;) {
        C = x[I + 2] || n;
        ia = w[u + 2] || n;
        L = Math.min(C, ia);
        ma = x[I + 1];
        var Da;
        if (1 !== ma.nodeType && (Da = l.substring(r, L))) {
          9 > z && (Da = Da.split("\n").join("\r"));
          var d = Mb(ma, "span", {className:oa[w[u + 1]]}, Da);
          Ca(ma);
          r < C && (x[I + 1] = bc(d, l.substring(L, C)));
        }
        r = L;
        r >= C && (I += 2);
        r >= ia && (u += 2);
      }
      k && Ta(k, "display", K);
      b = t;
      O(da, t, 3, !0);
    };
    var pa = [], sa;
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
      pa.push(k);
      sa = pa.length;
      1 === sa && (lc ? ba(lc, da) : bb ? bb.push(function() {
        ba(da);
      }) : ba(da));
    };
    var da = function() {
      function k(I, w) {
        return (I.split(w)[1] || "").split(" ")[0];
      }
      if (!b) {
        sa !== pa.length && p && p(sa - pa.length, sa);
        var l = pa.shift();
        if (l) {
          if (Wa(l, "prettyprint") && !Wa(l, "prettyprinted")) {
            for (var n = !1, r = l.parentNode; r !== za; r = r.parentNode) {
              var x = Ma(r);
              if (("PRE" === x || "XMP" === x || "CODE" === x) && Wa(r, "prettyprint")) {
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
                !r && (m = ka(l)) && "CODE" === Ma(m) && (r = k(m.className, "lang-") || k(m.className, "language-"));
              }
              x = Ma(l);
              "PRE" === x || "XMP" === x ? x = 1 : (x = l.currentStyle, m = M.defaultView, x = (x = x ? x.whiteSpace : m && m.getComputedStyle ? m.getComputedStyle(l, null).getPropertyValue("white-space") : 0) && "pre" === x.substr(0, 3));
              m = !1;
              (m = "true" === m || +m) || (m = k(n, "linenums:") || Wa(l, "linenums"), m = m.length ? +m : m);
              m && F(l, m, x);
              b = {W:r, B:l, ba:m, O:x, D:0, v:0, R:{}, s:[]};
              O(Z);
              return;
            }
          }
          O(da, t, 0, !0);
        } else {
          e && e();
        }
      }
    };
    X.PR = {RegExpProxy:J, prettifyElement:Ba, registerCompleteHandler:function(k, l) {
      e = k;
      p = l;
    }};
  })();
  var kc = M.scripts || pb("script");
  var va = kc[kc.length - 1].src.split("/");
  --va.length;
  "js" === va[va.length - 1] && --va.length;
  (va = va.join("/")) && (va += "/");
  var Pc = Uc || "1" === Ea(za, "mob");
  Hb = (Pc ? "mb" : "pc") + "/";
  6.1 > Aa && (tb ? tb(Zb) : la(X, "scroll", Zb));
  qb(Cc);
  6.1 > Aa && (tb ? tb($b) : la(X, "scroll", $b));
  qb(Dc);
  10 > z && (11 !== Sc || 5 !== z) || (9 > H || 1 > T || !mb && !X.addEventListener ? M.write('<link href="' + va + "css/" + Hb + Xb + '" rel="stylesheet"' + (8 > H ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > H || 1.5 > T || 534 > ta || 5 > Aa || 7 > wa || 3 > Pa) && Oa(function() {
    La(db, "link", {href:va + "css/" + Hb + Xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Rb) {
    if (Ib) {
      var lc = function(N) {
        X.RegExpCompat = bz;
        lc = t;
        Jb(va + "js/regexpcompat.js");
        function bz(J) {
          for (var O; O = bb.shift();) {
            O(J);
          }
          bb = t;
          ba(N);
          Kb(va + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      X.RegExpCompat = function(N) {
        for (var J; J = bb.shift();) {
          J(N);
        }
        bb = t;
        Kb(va + "js/regexpcompat.js");
      }, Jb(va + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

