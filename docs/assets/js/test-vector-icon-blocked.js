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
var C, pb;
(function(Ua, W, ib, Gc, P, jc, kd, Yb, qb, kc, lc, Hc, mc, u) {
  function da(M) {
    if (Ua[0] === M) {
      return Ya === Ya + "" ? qb(Ya) : Ya;
    }
  }
  function Ga(M) {
    var F = Ua[3];
    if (Ua[2] === M) {
      return F === F + "" ? qb(F) : F;
    }
  }
  function Sb(M) {
    var F = M.split("-"), O = F.length;
    if (2 > O) {
      return M;
    }
    for (; 1 < O;) {
      M = F[--O], F[O] = M.charAt(0).toUpperCase() + M.substr(1);
    }
    return F.join("");
  }
  function nc() {
    return 6 > A ? ya.scrollTop : A ? ub.scrollTop : W.pageYOffset;
  }
  var ya = P.body, cb = ya.style, ub, vb, wb, Ya = Ua[1], A = da(2) || da(3), Eb = da(7), jb = da(5) || da(6), L = da(8) || da(9), X = da(11) || da(12), Tb = X && 0 <= Ua.conpare(Ya, "1.9.1"), xb = da(13), sa = da(16), Da = da(17) || da(18), Ic = da(10) || da(26), za = da(21) || da(23), Jc = da(24), Za = da(22), Zb = da(25), ld = za || Jc || Za || Zb, Kc = za && qb(jc.userAgent.split("Edg/")[1]), md = qb(jc.appVersion.split("Trident/")[1]) + 4, Fb = Ga(37) || Ga(38) || Ga(39), Lc = Ga(40) || Ga(41) || 
  Ga(42) || Ga(43), nd = 0 <= jc.userAgent.indexOf("Googlebot/"), fb = 0.9 > X, oc = (Eb ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : 7.2 > L ? "opr70" : 8 > L ? "opr72" : 9.5 > L ? "opr" + (L | 0) : X && !Tb ? 1.4 <= X ? "gck19" : 1.3 <= X ? "gck13" : 1 <= X ? "gck12" : fb ? 0.8 <= X ? "gck08" : "gck07" : "gck09" : "modern") + ".css", $b = "", od = Ga(1) || Ga(2) || Ga(3) || Ga(4) || Ga(8) || Ga(9), Mc, rb = 8 > A || 7.2 > L ? !1 : u, Nc = cb.transform !== u ? "transform" : 
  cb["-o-transform"] !== u ? "-o-transform" : cb["-ms-transform"] !== u ? "-ms-transform" : cb.MozTransform !== u ? "-moz-transform" : cb["-webkit-transform"] !== u ? "-webkit-transform" : "", Va = [], Oc = [], gb = [], pc, Pc, Qc, Rc, ac, Sc, Tc, bc, cc, Uc = !1, qc = 525 > sa || 3.1 > Da || 2.2 > Za || 10 > L || X && !Tb || da(26) || 10 > da(3) || Ga(34) || Ga(32) || Ga(3), ca, Gb, dc, Vc, pd = !!ya.getBoundingClientRect, ec = [], fc = [], rc, Wc, sc, Xc, db = Yb.now || function() {
    return +new Yb();
  };
  (function() {
    function M() {
      for (var I, Z = 0, Y = db(); Z < N.length;) {
        Y < N[0].t ? ++Z : (I = N.splice(Z, 1)[0], I.f(I.p));
      }
      ra = N.length ? lc(M, Ea) : 0;
    }
    function F() {
      for (var I, Z = 0; Z < ea.length; ++Z) {
        I = ea[Z], I.f();
      }
    }
    function O() {
      ma && (ma = clearInterval(ma));
    }
    function pa() {
      ra && (ra = Hc(ra));
    }
    C = function(I) {
      ec.push(I);
    };
    pb = function(I) {
      fc.push(I);
    };
    dc = function(I) {
      ea.length || (ma = mc(F, ia));
      ea.push({f:I, C:++aa});
      return aa;
    };
    Vc = function(I) {
      for (var Z = ea.length, Y; Y = ea[--Z];) {
        if (Y.C === I) {
          ea.splice(Z, 1);
          ea[0] || O();
          break;
        }
      }
      return 0;
    };
    rc = function() {
      ma && (O(), ma = mc(F, ia));
    };
    Wc = O;
    var ea = [], ia = 500, aa = 0, ma;
    if (5 > A || Eb) {
      W._wdb_onlooptimer = F, F = "_wdb_onlooptimer()";
    }
    ca = function(I, Z, Y) {
      N.length || (ra = lc(M, Ea));
      N.push({f:I, p:Z, C:++wa, t:db() + (Ea < Y ? Y : Ea)});
      return wa;
    };
    Gb = function(I) {
      for (var Z = N.length, Y; Y = N[--Z];) {
        if (Y.C === I) {
          N.splice(Z, 1);
          break;
        }
      }
      return 0;
    };
    sc = function() {
      ra && (pa(), ra = lc(M, Ea));
    };
    Xc = pa;
    var N = [], Ea = Da | 0 ? 64 : 16, wa = 0, ra;
    C("[core] TIMER_INTERVAL:" + Ea);
    if (5 > A || Eb) {
      W._wdb_ontimer = M, M = "_wdb_ontimer()";
    }
  })();
  var yb, Hb, Yc, zb, Zc, Ma, kb, $c, tc, ta, Ub, ad, bd, uc, $a, Ab, cd, ab, Ra, sb, lb, Lb, dd, gc, mb, Bb, vc, Ka, Wa, ed;
  (function() {
    function M(a, c, h) {
      var B = ["<", a], G = 1, S, ba;
      if (c) {
        for (S in c) {
          var ja = c[S];
          if (null != ja && "" !== ja) {
            if ("style" === S) {
              B[++G] = ' style="';
              for (ba in ja) {
                for (var f = ++G, y, r = [], E = ba.split(""), fa = E.length; fa;) {
                  y = E[--fa], "A" <= y && "Z" >= y && (y = "-" + y.toLowerCase()), r[fa] = y;
                }
                B[f] = r.join("") + ":" + ja[ba] + ";";
              }
              B[++G] = '"';
            } else {
              "className" === S && (S = "class"), B[++G] = " " + S + '="' + ja + '"';
            }
          }
        }
      }
      B[++G] = ">";
      null != h && (I && "font" !== a ? B[++G] = "<font>" + F(h) + "</font>" : B[++G] = F(h));
      B[++G] = "</" + a + ">";
      return B.join("");
    }
    function F(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function O(a) {
      return pa(P, a);
    }
    function pa(a, c) {
      var h = "*" === c;
      h = I ? h ? a.all : a.all.tags(c.toUpperCase()) : 6 > A && h ? a.all : a.getElementsByTagName(c);
      for (var B = [], G = 0, S = h.length; G < S; ++G) {
        B[G] = h[G];
      }
      return B;
    }
    function ea(a, c) {
      var h = [], B = 0, G, S = -1;
      if (9 > A || !a.getElementsByClassName) {
        var ba = 6 > A ? a.all : a.getElementsByTagName("*");
      } else {
        var ja = !0;
        ba = a.getElementsByClassName(c);
      }
      for (G = ba.length; B < G; ++B) {
        var f = ba[B];
        if (ja || (I || 1 === f.nodeType) && Ea(f, c)) {
          h[++S] = f;
        }
      }
      return h;
    }
    function ia(a) {
      return I ? a.parentElement : a.parentNode;
    }
    function aa(a, c, h, B, G, S) {
      if (I) {
        var ba = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var ja = kb(2 > a ? Ma(c) : c);
        ja = 2 > a ? ja.indexOf(c) + a : ja.length;
        c.insertAdjacentHTML(ba, M(h, B, G));
        c = kb(c)[ja];
        null != G && ("font" === h ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (Z) {
        c = P.createElement(M(h, B));
      } else {
        c = S ? P.createElementNS("http://www.w3.org/2000/svg", h) : P.createElement(h);
        if (B) {
          for (ba in B) {
            if ((a = B[ba]) || 0 === a) {
              switch(ba) {
                case "class":
                case "className":
                  gc(c, a);
                  break;
                case "style":
                  S = c.style;
                  for (ja in a) {
                    S[ja] = a[ja];
                  }
                  break;
                default:
                  sb(c, ba, a);
              }
            }
          }
          !L || "a" !== h && "A" !== h || !B.href || B["tag-index"] || B.tagIndex || sb(c, "tagIndex", "-0");
        }
        Y || null != G && ma(c, G);
      }
      return c;
    }
    function ma(a, c) {
      if (I) {
        return aa(2, a, "font", u, c);
      }
      var h = P.createTextNode("" + c);
      a.appendChild(h);
      return h;
    }
    function N(a, c) {
      9 > A ? a.className = c : a.setAttribute("class", c);
    }
    function Ea(a, c) {
      return -1 !== (" " + a.className + " ").indexOf(" " + c + " ");
    }
    function wa(a, c, h) {
      if (8 > L || 5.5 > A) {
        c = Sb(c);
      }
      a.style[c] = h;
    }
    function ra(a) {
      return 5.5 > A ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var I = 5 > A;
    ub = O("html")[0];
    vb = O("head")[0];
    yb = function(a) {
      return W[a] || P[a] || P.getElementById(a);
    };
    Hb = O;
    Yc = function(a) {
      return ea(P, a);
    };
    zb = pa;
    Zc = ea;
    Ma = ia;
    kb = function(a) {
      a = I ? a.children : a.childNodes;
      for (var c = [], h = a.length; h;) {
        c[--h] = a[h];
      }
      return c;
    };
    $c = function(a) {
      var c = !(7.03 < L && 7.2 > L) && a.children;
      a = c ? c : a.childNodes;
      for (var h = [], B = a.length, G = -1, S; B;) {
        if (S = a[--B], c || 1 === S.nodeType) {
          I && "FONT" === S.tagName || (h[++G] = S);
        }
      }
      return h;
    };
    tc = function(a) {
      return I ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    ta = function(a, c, h, B, G) {
      c = aa(2, a, c, h, B, G);
      I || (a.appendChild(c), Y && null != B && ma(c, B));
      return c;
    };
    Ub = function(a, c, h, B, G) {
      c = aa(0, a, c, h, B, G);
      I || (ia(a).insertBefore(c, a), Y && null != B && ma(c, B));
      return c;
    };
    ad = function(a, c, h, B, G) {
      c = aa(1, a, c, h, B, G);
      var S;
      I || ((S = a.nextSibling) ? Ma(S).insertBefore(c, S) : Ma(a).appendChild(c), Y && null != B && ma(c, B));
      return c;
    };
    bd = ma;
    uc = function(a, c) {
      var h;
      if (I) {
        return aa(1, a, "font", u, c);
      }
      var B = P.createTextNode("" + c);
      (h = a.nextSibling) ? Ma(a).insertBefore(B, h) : Ma(a).appendChild(B);
      return B;
    };
    $a = function(a) {
      if (Ma(a)) {
        if (I) {
          a.outerHTML = "";
        } else {
          return 5.5 > A && (a.style.filter = ""), Ma(a).removeChild(a), a;
        }
      } else {
        C("[DOM] p_DOM_remove(), No parentNode!");
      }
    };
    Ab = function(a, c) {
      if (a.contains) {
        return a.contains(c);
      }
      for (; c && c !== ub;) {
        if (c = Ma(c), a === c) {
          return !0;
        }
      }
    };
    cd = function(a) {
      return I ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var Z = 9 > A, Y = Z;
    ab = function(a) {
      return a.tagName.toUpperCase();
    };
    Ra = function(a, c) {
      if (8 > L || 5.5 > A) {
        c = Sb(c);
      }
      var h = a.getAttribute(c);
      return L && "tabIndex" === c ? "-0" === h ? "" : "" === h ? "-1" : h : h || "";
    };
    sb = function(a, c, h) {
      if (L && "tab-index" === c) {
        "-1" === h ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", h);
      } else {
        if (8 > L || 5.5 > A) {
          c = Sb(c);
        }
        a.setAttribute(c, h);
      }
    };
    lb = function(a, c) {
      if (L && "tab-index" === c) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > L || 5.5 > A) {
          c = Sb(c);
        }
        a.removeAttribute(c);
      }
    };
    Lb = function(a, c) {
      if (L && "tab-index" === c) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > L || 5.5 > A) {
        c = Sb(c);
      }
      return a.hasAttribute ? a.hasAttribute(c) : null != a.getAttribute(c);
    };
    dd = function(a) {
      return a.className;
    };
    gc = N;
    mb = Ea;
    Bb = function(a, c) {
      var h;
      if (!Ea(a, c)) {
        if (h = a.className) {
          h += " ";
        }
        N(a, h + c);
      }
    };
    vc = function(a, c) {
      if (Ea(a, c)) {
        var h = a.className.split(" ");
        h.splice(h.indexOf(c), 1);
        N(a, h.join(" "));
      }
    };
    Ka = wa;
    Wa = function(a, c) {
      var h, B = -1, G;
      if (5.5 > A) {
        if (h = ra(a)) {
          for (h = h.split(";"); G = h[++B];) {
            wa(a, G.split(":")[0], "");
          }
        }
        if (c) {
          for (B = -1, h = c.split(";"); G = h[++B];) {
            var S = G.split(":")[0];
            wa(a, S, G.substr(S.length + 1));
          }
        }
      } else if (7.1 > L) {
        if (a.setAttribute("style", ""), c) {
          for (h = c.split(";"); G = h[++B];) {
            G = G.split(":"), wa(a, G[0], G[1]);
          }
        }
      } else {
        9 > L || 1 > X ? c ? a.setAttribute("style", c) : a.removeAttribute("style") : a.style.cssText = c;
      }
    };
    ed = ra;
    Va.splice(0, 0, function() {
      function a(f) {
        f = kb(f);
        for (var y = f.length, r, E, fa; y;) {
          if (r = f[--y], E = r.nodeType, 8 === E) {
            c && ba.push(r);
          } else if (1 === E) {
            switch(E = ab(r), "/" === E.charAt(0) && (E = E.substr(1), ja[E] = !0), E) {
              case "STYLE":
                if (7.2 <= L && 9 > L) {
                  break;
                }
              case "LINK":
                I || B || Ab(vb, r) || S.push(r);
                break;
              case "META":
                E = Ra(r, "name") || Ra(r, "property");
                for (fa = G.length; fa;) {
                  if (0 === E.indexOf(G[--fa])) {
                    ba.push(r);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (nd || Lb(r, "async")) {
                  break;
                }
                if (h) {
                  r.innerText = "";
                  h = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Lb(r, "skip-cleanup")) {
                  break;
                }
              case "!":
                ba.push(r);
                break;
              case "SOURCE":
                W.HTMLSourceElement || ba.push(r);
                break;
              default:
                ja[E] ? ba.push(r) : kb(r).length && a(r);
            }
          }
        }
        for (; S[0];) {
          vb.appendChild(S.pop());
        }
        for (; ba[0];) {
          $a(ba.pop());
        }
      }
      vc(ub, "nojs");
      wb = yb("jsMain");
      var c = !(8 > L || 5 > A || Eb || fb), h = Rc, B = 7 > A, G = ["og:", "twitter:", "fb:"], S = [], ba = [], ja = {};
      a(ub);
    });
  })();
  var na, Na, eb, Ib, wc, Mb, Jb, xc, yc, zc, fd, gd, hd, Nb, Ha, Ac;
  (function() {
    function M() {
      return g ? z ? 2 : l ? 3 : 1 : 0;
    }
    function F(d) {
      Na(W, "load", F);
      F = u;
      pa(Va, d, !0);
      Va = u;
    }
    function O(d, e) {
      Jb(function() {
        var x = ra(d);
        e(x);
        x.addListener(e);
        return !0;
      });
    }
    function pa(d, e, x) {
      for (var t = 0; t < d.length; ++t) {
        !0 === d[t](e) && (d.splice(t, 1), --t);
      }
      x && (d.length = 0);
    }
    function ea(d, e, x) {
      Va || Z.length || ca(ia);
      Z.push(d, e, x);
    }
    function ia() {
      var d = Z, e;
      for (Z = []; e = d.shift();) {
        pa(e, d.shift(), d.shift());
      }
    }
    function aa(d) {
      var e = d || event;
      d = a[e.type];
      var x = -1, t, Q;
      5 > A ? e = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : A ? (e.target = e.srcElement, e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : h && (e.K = e.stopPropagation, e.stopPropagation = function() {
        Q = !0;
      });
      for (; t = d[++x];) {
        t.j === this ? (this.g = t.i, A && (e.currentTarget = this), this.g(e), A ? (this.g = ib, this.g = u) : delete this.g) : 7.2 > L && this === P && t.j === W && (W.g = t.i, W.g(e), delete W.g);
      }
      if (A) {
        return e.preventDefault = e.stopPropagation = ib, e.preventDefault = e.stopPropagation = u, e.returnValue;
      }
      h && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && (G = !0), Q && !G && e.K(), e.K = e.stopPropagation = u);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ma() {
      var d = 9 === I.offsetWidth;
      Nb !== d && (ea(Oc, Nb = d), C("p_cssAvailability:" + Nb));
    }
    function N() {
      !Va && T && (Gb(T), T = ca(Ea));
    }
    function Ea() {
      T = 0;
      pa(v);
    }
    function wa(d) {
      Va || pa(n, d);
    }
    var ra = W.matchMedia, I, Z = [];
    Va.push(function() {
      O = u;
      I = ta(ya, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        Z.length && ca(ia);
      });
    });
    na = function(d, e, x, t) {
      if (B) {
        d.addEventListener(e, x, t ? Y ? t : t.capture || !0 === t : !1);
      } else {
        var Q = {j:d, i:x};
        t = a[e];
        var Aa = "on" + e, La, hb;
        if (t) {
          for (La = t.length; hb = t[--La];) {
            if (hb.j === d && hb.i === x) {
              return;
            }
          }
          a[e].push(Q);
        } else {
          a[e] = t = [Q], c || (e = d[Aa], "function" === typeof e && e !== aa && t.unshift({j:d, i:e}));
        }
        c ? d.attachEvent(Aa, aa) : d[Aa] = aa;
      }
    };
    Na = function(d, e, x, t) {
      if (B) {
        d.removeEventListener(e, x, t ? Y ? t : t.capture || !0 === t : !1);
      } else {
        t = a[e];
        e = "on" + e;
        var Q, Aa, La;
        if (t) {
          for (Q = t.length; Aa = t[--Q];) {
            Aa.j === d && (Aa.i === x ? t.splice(Q, 1) : La = !0);
          }
          La || (c ? d.detachEvent(e, aa) : A ? (d[e] = ib, d[e] = null) : delete d[e]);
        }
      }
    };
    var Y = !A && !Eb && (new kd('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), a = {}, c = !1, h = 525.13 > sa, B = !h && !Eb && W.addEventListener, G;
    h && ub.addEventListener("click", function(d) {
      if (G) {
        return G = !1, d.preventDefault(), !1;
      }
    });
    eb = function(d) {
      Va ? Va.push(d) : alert("Load event has already been dispatched!");
    };
    Ib = function(d) {
      S && S.push(d);
    };
    var S = [];
    if (419.3 >= sa) {
      var ba = function() {
        if (ba) {
          var d = P.readyState;
          "loaded" === d || "complete" === d ? (ba = u, F()) : ca(ba);
        }
      };
      ca(ba);
    } else {
      na(W, "load", F), fb && ca(function() {
        F && F();
      }, 999);
    }
    A || !fb && 1.8 > X ? na(W, "unload", function(d) {
      pa(S, d, !0);
    }) : S = u;
    Jb = function(d) {
      Oc.push(d);
    };
    eb(function() {
      ma();
      dc(ma);
    });
    zc = function(d, e) {
      if (ja) {
        na(d, "focusin", e);
      } else if (f) {
        na(d, "DOMFocusIn", e);
      } else {
        if (r) {
          Fa || (Fa = mc(nb, 333));
        } else if (y || E) {
          na(P, "focus", xa, !0);
        } else {
          return;
        }
        for (var x = fa, t = 0, Q = x.length; t < Q; ++t) {
          if (x[t] === d && x[t + 1] === e) {
            return;
          }
        }
        x.push(d, e);
      }
    };
    fd = function(d, e) {
      if (ja) {
        na(d, "focusin", e);
      } else if (f) {
        na(d, "DOMFocusIn", e, !1);
      } else {
        for (var x = fa, t = 0, Q = x.length; t < Q; ++t) {
          if (x[t] === d && x[t + 1] === e) {
            x.splice(t, 2);
            x.length || (r ? Fa = Vc(Fa) : (y || E) && Na(P, "focus", xa, !0));
            break;
          }
        }
      }
    };
    var ja = 6 <= A || jb || 52 <= X || 15 <= za || 534 <= sa || 5 <= Da || Jc || 4 <= Za || 4 <= Zb || 11.6 <= da(8) || 12 <= da(9), f = 8 <= L || za || Za || Zb || sa || Da, y = 8 > L, r = 6 > A, E = 52 > X || xb;
    if (E || y) {
      var fa = [];
      var xa = function(d) {
        var e = fa, x = y ? P.activeElement : d.target;
        if (y) {
          var t = d;
          d = {type:"focusin", target:x, preventDefault:function() {
            t.preventDefault();
          }, stopPropagation:function() {
            t.stopPropagation();
          }};
        }
        for (var Q = 0, Aa = e.length; Q < Aa; ++Q) {
          var La = e[Q];
          (La === x || Ab(La, x)) && e[Q + 1].call(La, d);
        }
      };
    } else if (r) {
      fa = [];
      var Fa, Ia, Ja, nb = function() {
        Ja = W.onerror;
        W.onerror = oa;
        var d = P.activeElement;
        if (Ia !== d) {
          Ia = d;
          for (var e = fa, x, t = 0, Q = e.length; t < Q; ++t) {
            x = e[t], (x === d || Ab(x, d)) && e[t + 1].apply(x, [{target:d}]);
          }
        }
        W.onerror = Ja;
        Ja = u;
      }, oa = function() {
        C("error!");
        W.onerror = Ja;
        Ja = Ia = u;
        return !0;
      };
    }
    yc = function(d) {
      gb && gb.push(d);
    };
    var m = 60 > X || xb, g, l, z;
    if (89 <= X || 89 <= za || Fb && 79 <= Kc || ra && (ra("(forced-colors:none)").matches || ra("(forced-colors:active)").matches)) {
      Ac = !0, O("(forced-colors:active)", function(d) {
        g = d.matches;
        Ha = M();
        ea(gb, Ha);
        C("(forced-colors:active):" + Ha);
      });
    } else if (10 <= A || jb || Fb && Kc) {
      Ac = !0, O("(-ms-high-contrast:black-on-white)", function(d) {
        g = l = d.matches;
        Ha !== M() && (Ha = M(), ea(gb, Ha), C("(-ms-high-contrast:black-on-white):" + Ha));
      }), O("(-ms-high-contrast:white-on-black)", function(d) {
        g = z = d.matches;
        Ha !== M() && (Ha = M(), ea(gb, Ha), C("(-ms-high-contrast:white-on-black):" + Ha));
      }), O("(-ms-high-contrast:active)", function(d) {
        g = d.matches;
        Ha !== M() && (Ha = M(), ea(gb, Ha), C("(-ms-high-contrast:active):" + Ha));
      });
    } else if (Fb && (A || X && 0 <= Ua.conpare(Ya, "1.8.1") || xb)) {
      var q = function() {
        function d(t, Q) {
          if (Q && "transparent" === t) {
            return 382.5;
          }
          if ("#" === t.charAt(0)) {
            return parseInt("0x" + t.substr(1, 2), 16) + parseInt("0x" + t.substr(3, 2), 16) + parseInt("0x" + t.substr(5, 2), 16);
          }
          var Aa = t.split("(")[1].split(",");
          return qb(Aa[0]) + qb(Aa[1]) + qb(Aa[2]);
        }
        var e = P.defaultView;
        var x = e ? e.getComputedStyle(I, null) : I.currentStyle;
        e = (x && x.color || "").split(" ").join("");
        x = (x && x.backgroundColor || "").split(" ").join("");
        e && (g = "#123456" !== e && "rgb(18,52,86)" !== e, l = d(e) < d(x, !0), z = d(e) > d(x, !0), Ha !== M() && (Ha = M(), C("(forced-colors-fallback):" + Ha), ea(gb, Ha, m)));
      };
      Jb(function(d) {
        if (d) {
          return Ka(I, "color", "#123456"), Ka(I, "backgroundColor", "#123456"), m ? (q(), gb = u) : dc(q), q = u, !0;
        }
      });
    } else {
      gb = M = u;
    }
    xc = function(d) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      k.push(d);
    };
    var k = [], D = 7.5 <= L && 8 > L;
    D && function() {
      for (var d = P.images, e = d.length, x; e;) {
        x = d[--e], x.J = x.src, lb(x, "src");
      }
    }();
    eb(function() {
      function d() {
        t ? (Q = x[--t], D && sb(Q, "src", Q.J), Pc(e, D ? Q.J : Q.src)) : k = u;
      }
      function e(La) {
        pa(k, {G:Q, H:La}, !t);
        d();
      }
      var x = P.images || Hb("img"), t = x.length;
      if (12 > L || 532 > sa) {
        d();
      } else {
        for (; t;) {
          var Q = x[--t];
          var Aa = 9 > A ? Q.complete : 0 <= Q.naturalWidth ? Q.naturalWidth : Q.width;
          ea(k, {G:Q, H:Aa}, !t);
        }
        k = u;
      }
    });
    wc = function(d) {
      v.push(d);
    };
    var v = [], T;
    na(W, "resize", N);
    Ib(function() {
      T && Hc(T);
      Na(W, "resize", N);
    });
    Mb = function(d) {
      n.push(d);
    };
    var n = [], J = 1 > X || 1.2 <= X && 1.8 > X || 7.2 >= L, R;
    J ? dc(function() {
      var d = W.pageYOffset;
      R !== d && (R = d, wa({type:"scroll", cancelable:!1, stopPropagation:ib, preventDefault:ib}));
    }) : na(W, "scroll", wa, {passive:!0});
    Ib(function() {
      J || Na(W, "scroll", wa, {passive:!0});
    });
    gd = function(d, e) {
      if (la) {
        na(d, "wheel", e, {passive:!1});
      } else if (qa) {
        na(d, "mousewheel", e, !1);
      } else if (Sa) {
        na(d, "MozMousePixelScroll", e, !1);
      } else if (Oa) {
        for (var x = Pa, t = 0, Q = x.length; t < Q; ++t) {
          if (x[t] === d && x[t + 1] === e) {
            return;
          }
        }
        x.length || na(P, "DOMMouseScroll", bb, !1);
        x.push(d, e);
      }
    };
    hd = function(d, e) {
      if (la) {
        Na(d, "wheel", e, {passive:!1});
      } else if (qa) {
        Na(d, "mousewheel", e, !1);
      } else if (Sa) {
        Na(d, "MozMousePixelScroll", e, !1);
      } else if (Oa) {
        for (var x = Pa, t = 0, Q = x.length; t < Q; ++t) {
          if (x[t] === d && x[t + 1] === e) {
            x.splice(t, 2);
            x.length || Na(P, "DOMMouseScroll", bb, !1);
            break;
          }
        }
      }
    };
    var la = 9 <= A || jb || 17 <= X || xb || 31 <= za || 537.7 <= sa, qa = 6 <= A || jb || 9 <= L || za || 522 <= sa || Da, Sa = Tb, Oa = X && 0 <= Ua.conpare(Ya, "0.9.7") && !Tb;
    if (Oa) {
      var Pa = [], bb = function(d) {
        for (var e = Pa, x = d.target, t, Q = 0, Aa = e.length; Q < Aa; ++Q) {
          t = e[Q], Ab(t, x) && e[Q + 1].call(t, d);
        }
      };
    }
  })();
  (function() {
    function M(l) {
      switch(l) {
        case 1:
          return B;
        case 2:
          return !!G;
        case 3:
          return !!S;
        case 4:
          return !!ba;
        case 5:
          return f;
        case 6:
          return ja && !ra;
      }
      return !1;
    }
    function F(l) {
      y(l);
      m && !l && $a(m);
      y = r = E = fa = xa = Fa = nb = oa = m = g = u;
    }
    function O(l) {
      var z = '1.6em "' + l + '"';
      C("[webFontTest] testByNativeFontLoaderAPI start.");
      P.fonts.load(z).then(function(q) {
        C("[webFontTest] fonts.check() : " + P.fonts.check(z, "i") + ", fonts.length : " + q.length);
        (q = aa(r)) ? ca(F, q) : (C("[webFontTest] mesureWebFont() : false"), ea(!0));
      }, function(q) {
        C("[webFontTest] fonts.load() rejected! " + q);
        rb !== u ? ma(rb) : pc(ma);
      });
    }
    function pa(l) {
      return P.hidden || P.msHidden || P.mozHidden || P.webkitHidden ? (Ja = db(), !1) : l < db() - Ja;
    }
    function ea(l) {
      l && (C("[webFontTest] testWebFont start."), Ja = db());
      (l = aa(r, Ia)) ? (C("[webFontTest] testWebFont mesurement success : " + l), F(l)) : pa(Ia) ? (C("[webFontTest] testWebFont timeout!"), nb ? N() : wa ? F(0) : rb !== u ? ma(rb) : pc(ma)) : ca(ea);
    }
    function ia() {
      return ta(ya, 5 > A ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":'"liga=1"', "-moz-font-feature-settings":'"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, a);
    }
    function aa(l, z) {
      var q = 0, k = -1, D = [];
      if (!g) {
        var v = -1;
        var T;
        oa = ia();
        for (g = []; T = h[++v];) {
          Ka(oa, "fontFamily", T), g[v] = oa.offsetWidth;
        }
        C("[webFontTest] default width " + g.join(", "));
      }
      for (5 > A ? oa || (oa = ia()) : Ma(oa) || ya.appendChild(oa); v = h[++k];) {
        Ka(oa, "fontFamily", '"' + l + '",' + v);
        var n = oa.offsetWidth;
        c ? D[k] = n : (D[k] = n, n !== g[k] && (q = 1));
      }
      if (c && n === D[0] && n === D[1]) {
        for (C("[webFontTest] Hit... : width=" + n), q = 1, k = -1; 0 <= (n = g[++k]);) {
          if (n === D[0] && n === D[1] && n === D[2]) {
            C("[webFontTest] Failed! : font[" + k + "]=" + h[k]);
            q = 0;
            break;
          }
        }
      }
      !A && q && xa && (oa.textContent = xa, n = oa.offsetWidth, oa.textContent = Fa, q = n === oa.offsetWidth ? 2 : 1, oa.textContent = a);
      oa = $a(oa);
      z && (q || pa(z)) && C("[webFontTest] " + l + " " + D.join(", "));
      return q;
    }
    function ma(l) {
      C("[webFontTest] onTestDataURIComplete : " + l);
      l ? (nb = !0, Ia = Y, C("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), r = r.replace(I, ""), N()) : F(0);
    }
    function N() {
      if (E) {
        for (; E.length;) {
          var l = E.shift(), z = E.shift();
          if (M(l)) {
            C("[webFontTest] maybe can use! " + z);
            m = Tc(z, Ea, fa, m);
            return;
          }
        }
      }
      F(0);
    }
    function Ea(l) {
      l ? ea(!0) : N();
    }
    pc = !1 === rb ? function(l) {
      ca(l, !1);
    } : function(l) {
      function z(D) {
        k && (k = Gb(k), rb = D, q.onload = q.onerror = ib, ca(l, D));
      }
      if (rb !== u) {
        C("[dataURITest] already done : " + rb), ca(l, rb);
      } else {
        C("[dataURITest] start!");
        var q = new Image(), k = ca(z, !1, 999);
        q.onerror = function() {
          C("[dataURITest] no DATA URI!");
          z(!1);
        };
        q.onload = function() {
          C("[dataURITest] DATA URI:" + (1 === q.width * q.height));
          z(1 === q.width * q.height);
        };
        q.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > A && eb(function() {
      var l = ta(ya, "div");
      Wa(l, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Mc = 1 < l.offsetHeight;
      $a(l);
    });
    Pc = function(l, z) {
      function q() {
        D || !v || k.complete ? (C("[imageTest] timer -> img.complete. img.width=" + k.width), ca(l, !!k.width), k.onerror = k.onload = ib, k = l = u) : (--v, ca(q));
      }
      var k = new Image(), D, v = 99;
      C("[imageTest] start.");
      k.onerror = function() {
        C("[imageTest] error!");
        D = !0;
      };
      k.onload = function() {
        C("[imageTest] onload.");
        D = !0;
      };
      k.src = z;
      ca(q);
    };
    Qc = function(l, z, q, k, D, v, T) {
      y = l;
      r = z;
      E = q;
      fa = k;
      xa = D;
      Fa = v;
      Ia = T || Z;
      r = I + r;
      C("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      C("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!qc);
      da(10) ? ca(F, 1) : qc ? ca(F, 0) : !P.fonts || 603 > sa || 11 > Da ? (C("[webFontTest] No native font loader."), ea(!0)) : (C("[webFontTest] Use Native font loader."), O(r));
    };
    var wa = 9 > A, ra = 6 > za || L || 530 > sa || 5 > Da || Ga(10), I = "bad_" + db() + "_", Z = 5E3, Y = 500, a = "mmmmmmmmmmlliiiiiiiii", c = 9 <= za && 18 > za || 3 > Za || 7 > Da || sa && 0 >= Ua.conpare(Ya, "536.11"), h = ["monospace", "sans-serif", "serif"];
    qc || (c && za && C("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + za), c && Da && C("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Da), c && sa && C("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + sa), c && Za && C("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + Za));
    var B = 14 <= jb || 36 <= za || 39 <= X || 3 <= xb || 602 <= sa && Lc && 0 <= Ua.conpare("10.12", Lc) || 10 <= Da, G = 6 <= za || X && 0 <= Ua.conpare(Ya, "1.9.2") || xb || 533 <= sa || 5 <= Da || 4.4 <= Za || 11.5 <= L || jb || 9 <= da(2) || 10 <= da(3), S = 2 <= za || Tb || xb || 525 <= sa || 4 <= Da || 2.2 <= Za || 10.1 <= L || jb || 9 <= da(2) || 10 <= da(3), ba = S, ja = 5.1 <= Fb && 5.2 >= Fb && 40 > za || 6 <= Fb && 6.1 > Fb && 51 > za || 37 > za || 525 <= sa || 3.1 <= Da || 3 <= Za || 
    11.5 <= L, f = 4 <= da(2) || 10 <= da(3), y, r, E, fa, xa, Fa, Ia, Ja, nb, oa, m, g;
  })();
  (function() {
    function M(f) {
      if (2 !== f) {
        C("[VectorIcon] " + f);
        var y = Yc("ico"), r = 0, E = y.length;
        if (E) {
          if (1 === f) {
            for (; r < E; ++r) {
              f = y[r];
              var fa = cd(f);
              if (fa = ja[fa]) {
                f.innerHTML = fa;
              }
            }
          } else {
            G && !B && (W.VectorIconFallback = bz, bc(Ba + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        cc(Ba + "js/vector-icon-svg-fallback.js");
        return [ja, y, ta, B];
      }
      bz = !1;
    }
    xc(function(f) {
      var y = f.G;
      f = f.H;
      var r = Ma(y);
      !mb(r, "aBodyRoot") && f ? Bb(r, "js-image-has-been-loaded") : f || Ra(y, "alt") || "lazy" === Ra(y, "loading") || Ka(y, "display", "none");
    });
    fb && (Va.splice(1, 0, function() {
      for (var f = Zc(wb, "RichLink-sep"), y, r, E, fa, xa, Fa; y = f.shift();) {
        for (y = kb(y); r = y.shift();) {
          if ("A" === ab(r) && !r.innerHTML) {
            for (C("\u25a0 Broken Anchor " + r.parentNode.innerHTML); E = y.shift();) {
              if (1 === E.nodeType) {
                if ("A" === ab(E)) {
                  break;
                }
                for (fa = zb(E, "A"); xa = fa.shift();) {
                  for (Fa = kb(xa); Fa.length;) {
                    xa.parentNode.insertBefore(Fa.shift(), xa);
                  }
                  $a(xa);
                }
              }
              r.appendChild(E);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var f = Hb("A"), y, r; y = f.shift();) {
        "A" !== ab(y) || y.innerHTML || (r = y.nextSibling && y.nextSibling.firstChild) && r.href === y.href && (C("\u25b2 Broken Anchor " + r.innerHTML), $a(y));
      }
    }));
    5.5 <= A && 8 > A && gb && yc(function(f) {
      for (var y = zb(ya, "a"), r = y.length, E = 0; E < r; ++E) {
        y[E].hideFocus = !f;
      }
    });
    if (!Ac && gb) {
      var F, O = function() {
        F = ta(vb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:Ba + "css/" + $b + "hc/" + oc});
        if (Nc || 5.5 <= A && 9 > A && Mc) {
          Bb(ya, "js-canuse-css-rotate-when-forced-colors-mode"), C("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        O = u;
      };
      yc(function(f) {
        f && !F ? O() : F && (f ? vb.appendChild(F) : $a(F));
      });
    }
    L && eb(function() {
      for (var f = zb(ya, "a"), y = f.length, r = 0, E; r < y; ++r) {
        E = f[r], "-1" === Ra(E, "tabIndex") ? lb(E, "tabIndex") : Ra(E, "href") && sb(E, "tabIndex", "0");
      }
      f = zb(ya, "input");
      r = 0;
      for (y = f.length; r < y; ++r) {
        E = f[r], "hidden" === Ra(E, "type") && lb(E, "tabIndex");
      }
    });
    if (X && 0 > Ua.conpare(Ya, "0.9.5")) {
      Uc = !0;
      var pa, ea, ia, aa, ma;
      eb(function() {
        na(P, "keydown", N);
        na(P, "keyup", Ea);
        zc(ya, wa);
        fb || (na(W, "blur", a), na(ya, "click", Y));
      });
      var N = fb ? function(f) {
        16 === f.keyCode ? pa = !0 : 9 === f.keyCode && aa && ra(aa, !0) && (aa.blur && aa.blur(), f.stopPropagation(), f.preventDefault(), ca(Z));
      } : function(f) {
        16 === f.keyCode ? pa = !0 : 9 === f.keyCode && (ea = db());
      }, Ea = function(f) {
        16 === f.keyCode && (pa = !1);
      }, wa = fb ? function(f) {
        f.target.innerHTML || C(f.target.parentNode.innerHTML);
        aa = f.target;
      } : function(f) {
        var y = f.target;
        if (aa === y) {
          ia = u;
        } else if (ia) {
          y === ia ? (f.stopPropagation(), Z(!0)) : (y.blur && h(y), f.preventDefault(), Z());
        } else {
          if (f = aa) {
            aa = u, h(f);
          }
          ia = y;
          Z(!0);
        }
      }, ra = function(f, y) {
        var r = db(), E = ya, fa = "nextSibling", xa = "firstChild";
        pa && (y || r - 99 < ea && ea <= r) && (fa = "previousSibling", xa = "lastChild");
        for (ia = u; f !== E;) {
          if (Fa) {
            r = f;
            var Fa = !1;
          } else {
            r = f[fa];
          }
          if (r) {
            if (1 === r.nodeType) {
              if (I(r)) {
                return ia = r, !0;
              }
              f = (Fa = r[xa]) || r;
            } else {
              f = r;
            }
          } else {
            f = f.parentNode;
          }
        }
      }, I = function(f, y) {
        function r() {
          return "-1" !== Ra(f, "tab-index");
        }
        function E() {
          return 0 < f.offsetHeight * f.offsetWidth;
        }
        if (f.focus) {
          var fa;
          switch({A:y ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[ab(f)]) {
            case 1:
              if (Lb(f, "href") && r() && E()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ra(f, "type") && r() && !Lb(f, "disabled") && E()) {
                return !0;
              }
              break;
            case 3:
              if (r() && !Lb(f, "disabled") && E()) {
                return !0;
              }
              break;
            default:
              if ((fa = Ra(f, "tab-index")) && "-1" !== fa && E()) {
                return !0;
              }
          }
        }
      }, Z = function(f) {
        ma = 0;
        ia && (fb || na(ia, "blur", c), aa = ia, ia = u, f || aa.focus());
      };
      if (!fb) {
        var Y = function(f) {
          var y = f.target;
          if (aa && I(y, !0)) {
            var r = aa;
            aa = u;
            h(r);
            ia = y;
            f.stopPropagation();
            f.preventDefault();
            Z();
          }
        }, a = function(f) {
          f.target === P && (ia = u);
        }, c = function(f) {
          f = f.target;
          Na(f, "blur", c);
          aa === f && ra(f) && (ma || (ma = ca(Z)));
        }, h = function(f) {
          Na(f, "blur", c);
          f.blur();
        };
      }
    }
    Jb(function(f) {
      if (f) {
        return Qc(M, "web-doc-base", [1, Ba + "iconfont/woff2.css", 2, Ba + "iconfont/woff.css", 4, Ba + "iconfont/otf.css", 3, Ba + "iconfont/ttf.css", 6, Ba + "iconfont/svg.css"], "js-myIconFont-testCssReady", S, ba), M = u, !0;
      }
    });
    var B = 8 <= da(8) && 9 > L, G = 9 <= A || jb || 1.8 <= X || xb || 8 <= da(8) || 9 <= da(9) || 3 <= da(22) || ld || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || Da, S = "IE", ba = "\ueadb", ja = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", 
    Android:"\ud83e\udd16"};
  })();
  (function() {
    function M(b) {
      var p = Ia.length, H, K, U, w;
      if (13 === (b.keyCode || b.V) || b.type !== Ja) {
        for (; p;) {
          var ha = Ia[--p];
          if (ha.F === this || ha.u === this) {
            p = ha.F;
            var V = H = ha.u;
            if (ha.P) {
              if (Ka(p, "width", ha.$), p.src = ha.Z, gc(V, ha.T), p = ha.L) {
                Wa(p, ha.S), vc(p, "js-captioned-thumbnail__large");
              }
            } else {
              if (K = ha.N) {
                delete ha.N;
                if (ha.M) {
                  for (; H = Ma(H);) {
                    if (!mb(H, "caption")) {
                      var ka = ab(H);
                      if ("DIV" === ka || "P" === ka || "BLOCKQUOT" === ka || "LI" === ka || "DD" === ka || "TD" === ka || "TH" === ka || "FORM" === ka || "PRE" === ka) {
                        break;
                      }
                    }
                  }
                  H = (H.offsetWidth | 0) - 4;
                  1600 < H && (H = 1600);
                  if (2 === ha.M) {
                    K = K.split("=");
                    ka = K.length;
                    if (U = K[ka - 1]) {
                      (w = qb(U.substr(1))) && U === "s" + w ? K[ka - 1] = "w" + H : K[ka] = "w" + H;
                    }
                    K = K.join("=");
                  } else {
                    K = K.split("/");
                    ka = K.length;
                    if (U = K[ka - 2]) {
                      (w = qb(U.substr(1))) && U === "s" + w ? K[ka - 2] = "w" + H : K.splice(ka - 1, 0, "w" + H);
                    }
                    K = K.join("/");
                  }
                }
                ha.X = K;
              }
              ha.T = dd(V);
              Bb(V, "js-pica-thumbnail__large");
              Ka(p, "width", "");
              p.src = ha.X;
              if (p = ha.L) {
                Wa(p, ""), Bb(p, "js-captioned-thumbnail__large");
              }
            }
            ha.P = !ha.P;
            break;
          }
        }
        F(b);
      }
    }
    function F(b) {
      b.preventDefault();
      b.stopPropagation();
    }
    function O(b) {
      var p = R;
      if (Nb) {
        if (la && !p) {
          if (db() < la) {
            return;
          }
          la = u;
        }
        7 === b ? (N("t"), qa = 0) : (N("s"), qa && (qa = Gb(qa)), n = nc());
        p ? (R = ea(u, p[0], p[1])) || (la = db() + 99) : ea();
        wa();
      } else {
        R = u;
      }
    }
    function pa() {
      N("w.blur");
    }
    function ea(b, p, H) {
      function K(ob) {
        V = ob;
        if (v) {
          ka = v + ":translate" + (J ? "3D(0," : "(0,") + ob + (J ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ob) {
          if (g || l) {
            var Bc = q.offsetWidth;
          }
          ka = g ? "position:fixed;width:" + Bc + "px;top:" + (ob - U + va) + "px" : z ? "top:" + ob + "px" : "position:absolute;top:" + ob + "px;left:0";
          if (l && ka) {
            var Vb = 8 > A ? " " : ",";
            ka += ";clip:rect(" + (0 > ob ? -ob + "px" + Vb + Bc + "px" + Vb + Qa : "0" + Vb + Bc + "px" + Vb + (ob + Qa < Wb ? Qa : Wb - ob)) + "px" + Vb + "0)";
          }
        }
      }
      var U = n, w = k, ha = q.offsetTop === w.offsetTop, V = 0, ka = "", Xa = !0;
      if (ha) {
        for (var Ca = 0, va = 0, Ta = w; Ta && Ta !== ya;) {
          va += Ta.offsetTop, Ta = Ta.offsetParent;
        }
        V = T;
        Ta = 11 > A ? ub.offsetHeight : W.innerHeight;
        var Cc = w.offsetHeight, Qa = D.offsetHeight, Wb = Qa < Cc ? Cc : Qa, Cb = U, Ob = Cb + Ta, hc = va, ic = hc + Wb, id = va + V, qd = id + Qa;
        w = Cb < hc ? hc : Cb;
        var Db = ic < Ob ? ic : Ob, Pb = Db - w;
        Cb = ic <= Cb;
        Ob = Ob <= hc;
        if (p !== u) {
          Xa = va + p;
          b = Xa + H;
          if (Cb || Ob) {
            return Ta <= H ? (p = va, N("4.1.1")) : Cb ? (p = ic - H, N("4.1.2")) : (p = va + H - Ta, N("4.1.3")), la = u, W.scroll(0, p), N("4.1.*"), R;
          }
          Qa <= Pb ? (Ca = 3, N("4.2")) : H <= Pb ? Qa - p <= Pb ? (Ca = 2, N("4.3.1")) : w <= Xa && b <= Db ? w < va + V && (Ca = 4, N("4.3.2")) : w <= Xa && Xa <= Db ? (Ca = 5, N("4.3.3")) : w <= b && b <= Db ? (Ca = 4, N("4.3.4")) : b < w ? (Ca = 4, N("4.3.5")) : (Ca = 5, N("4.3.6")) : (Ca = 4, N("4.4"));
          Xa = !1;
        } else {
          b !== u ? Qa <= Pb ? (Ca = 7, Xa = !1, N("3.1")) : (V -= 60 * b, Ca = Db - va - Qa, b = w - va, V < Ca ? (V = Ca, N("3.2.1")) : b < V ? (V = b, N("3.2.2")) : N("3.2.3"), Ca = 6) : Cc <= Qa || (Cb ? (Ca = 1, N("2.2.1")) : Ob ? N("2.2.2") : Qa <= Pb ? (Ca = 3, N("2.3")) : w < id ? (Ca = 3, N("2.4.1")) : qd < Db ? (Ca = 2, N("2.4.2")) : U < va + Qa - Pb ? N("2.4.3") : (Ca = 2, N("2.4.4")));
        }
        switch(Ca) {
          case 0:
            K(0);
            break;
          case 1:
            K(Wb - Qa);
            break;
          case 2:
            K(Db - va - Qa);
            break;
          case 3:
            K(w - va);
            break;
          case 4:
            K(w - va - p);
            break;
          case 5:
            K(Db - va - (p + H));
          case 6:
            K(V);
        }
        ra(V, Qa, va, Wb, Ta, p || "-", H || "-");
      } else {
        ra(V, "-", "-", "-", "-", "-", "-");
      }
      Wa(D, ka);
      T = V;
      return ha && Xa;
    }
    function ia(b) {
      if (Nb && (N("m"), X && (n = nc(), wa()), this !== b.target)) {
        var p = kc(b.deltaY) ? b.deltaY : kc(b.wheelDeltaY) ? b.wheelDeltaY / 120 : kc(b.wheelDelta) ? b.wheelDelta / -120 : b.detail / ("MozMousePixelScroll" === b.type ? 45 : 1);
        p && ea(9 >= p ? -9 >= p ? -3 : p : 3) && (b.preventDefault(), b.stopPropagation());
      }
    }
    function aa(b) {
      if (Nb) {
        var p = X && 0 > Ua.conpare(Ya, "0.9.4"), H = b.target, K = D, U = 0;
        if (Ab(K, H)) {
          N(b.type || "ie5focus");
          na(H, "blur", ma);
          if (v) {
            p = H.getBoundingClientRect(), b = p.bottom - p.top, U = p.top - K.getBoundingClientRect().top | 0;
          } else {
            b = H.offsetHeight;
            var w = H;
            if (p) {
              for (var ha = []; w && (X ? Ab(K, w) : K !== w);) {
                for (; w.previousSibling;) {
                  w = w.previousSibling, w.tagName && ha.unshift(w.tagName + ":" + w.offsetTop);
                }
                w = w.offsetParent;
              }
              C(ha.join());
              w = H;
            }
            for (; w && (X ? Ab(K, w) : K !== w);) {
              if (p) {
                for (; w.previousSibling;) {
                  w = w.previousSibling, U += w.offsetHeight || 0;
                }
                w = w.parentNode;
              } else {
                U += w.offsetTop, w = w.offsetParent;
              }
            }
          }
          m ? (R = [U, b], qa && Gb(qa), qa = ca(O, 7, 1 > X || 536 > sa || 14 > za ? 500 : 0)) : (n = nc(), ea(u, U, b));
          I(U, b);
        }
      }
    }
    function ma() {
      Na(this, "blur", ma);
      I(0, 0);
    }
    function N(b) {
      Pa && (t && (t = Gb(t)), t = ca(Ea, 0, 1400), Pa.innerHTML += " " + b);
    }
    function Ea() {
      Pa.innerHTML = "";
    }
    function wa() {
      d && (Ka(d, "top", (n / 10 | 0) + "px"), Oa.innerHTML = " scrl:" + (n | 0));
    }
    function ra(b, p, H, K, U, w, ha) {
      e && (Ka(e, "top", ((b + H) / 10 | 0) + "px"), Ka(e, "height", (p / 10 | 0) + "px"), Ka(d, "height", (U / 10 | 0) + "px"), Ka(bb, "height", (ya.scrollHeight / 10 | 0) + "px"), Sa.innerHTML = "conY:" + H + "/sidY" + b + ", conH:" + K + "/sidH" + p + ", focY:" + w + " focH:" + ha);
    }
    function I(b, p) {
      x && (Ka(x, "top", (b / 10 | 0) + "px"), Ka(x, "height", (p / 10 | 0) + "px"));
    }
    function Z() {
      Q.call(Aa);
    }
    function Y() {
      P.fullscreenElement || P.fullscreen || P.webkitIsFullscreen || P.msFullscreenElement || W.fullScreen ? (sb(Aa, "id", "blog2slide-root"), Qb[1].parentNode.insertBefore(La, Qb[1]), a(), P.onkeydown = c) : hb && ($a(La), lb(Aa, "id"), lb(hb, "id"), hb = P.onkeydown = u);
    }
    function a() {
      hb && lb(hb, "id");
      Kb = 0 < Kb ? Dc < Kb ? Dc : Kb : 0;
      hb = Qb[Kb];
      sb(hb, "id", "blog2slide-current");
    }
    function c(b) {
      if ("ArrowRight" === b.key || 39 === b.keyCode) {
        ++Kb, a();
      } else if ("ArrowLeft" === b.key || 37 === b.keyCode) {
        --Kb, a();
      }
    }
    Tc = function(b, p, H, K) {
      K = K || ta(vb, "link", {type:"text/css", rel:"stylesheet"});
      var U;
      if (y) {
        (U = yb(H)) ? lb(U, "id") : U = ta(ya, "div", {"aria-hidden":"true", className:H});
        var w = U.offsetWidth;
        C("[CSS Loader] widthBeforeCSSLoaded = " + w);
        sb(U, "id", H);
      }
      f(K, b, p, U, w);
      return K;
    };
    var h = X && 0 > Ua.conpare(Ya, "0.9.1"), B = 11 <= A || jb || 9 <= L && 9.5 > L, G = 11 > A, S = 7.2 <= L && 7.5 > L, ba = 9 > X && !h || 19 > za || 4.3 > Za || 2 > Zb || 536 > sa || 6 > Da || 7 <= L && 9 > L && !S, ja = !h && !B && !G && !S && !ba, f = ja ? function(b, p, H) {
      C("[CSS Loader] onload + onerror");
      b.onload = bz;
      b.onerror = function() {
        b.onload = b.onerror = null;
        ca(H, !1);
      };
      b.href = p;
      function bz() {
        b.onload = b.onerror = null;
        ca(H, !0);
      }
      bz = !1;
    } : B ? function(b, p, H, K, U) {
      C("[CSS Loader] onload + mesure");
      b.onload = bz;
      b.href = p;
      function bz() {
        ca(H, y(K, U));
        b.onload = null;
        K = u;
      }
      bz = !1;
    } : G ? function(b, p, H, K, U) {
      C("[CSS Loader] onreadystatechange + onerror");
      b.onreadystatechange = bz;
      b.href = p;
      function bz() {
        "complete" === b.readyState && (ca(H, y(K, U)), K = u, b.V = ib);
      }
      bz = !1;
    } : ba || S ? function(b, p, H, K, U) {
      function w() {
        V && (ka = Gb(ka), C("[CSS Loader] onComplete"), Xa = db() + 999, ca(ha, 0, 99), ba ? V.onerror = null : V.removeEventListener("load", w, !1), V = u);
      }
      function ha() {
        y(K, U) ? (K = u, ca(H, !0)) : db() < Xa ? ca(ha, 0, 99) : (K = u, ca(H, !1));
      }
      var V = new Image(), ka = ca(w, 0, 5E3), Xa;
      ba ? (C("[CSS Loader] img.onerror + mesure"), V.onerror = w) : (C('[CSS Loader] img.addEventListener("load") + mesure'), V.addEventListener("load", w, !1));
      V.src = b.href = p;
    } : function(b, p, H) {
      C("[CSS Loader] UNSUPPORTED");
      ca(H, !1);
    }, y = !ja && !h && function(b, p) {
      C("[CSS Loader] elmTest.offsetWidth = " + b.offsetWidth);
      return b.offsetWidth !== p;
    };
    Sc = X && 0 >= Ua.conpare(Ya, "0.9");
    ac = !(7.2 > L || Sc);
    bc = function(b) {
      r ? Va ? P.write('<script src="' + b + '">\x3c/script>') : pb("[DynamicScvriptLoader] Document already loaded! " + b) : Va || xa.length ? xa.push(b) : Fa(b);
    };
    cc = function(b) {
      r ? C("[DynamicScvriptLoader] " + b + " loaded.") : b === fa ? Fa(xa.shift()) : pb(b + " <> " + fa);
    };
    var r = !ac, E = ac && 7.5 > L, fa;
    if (!r) {
      var xa = [];
      E && (Rc = !0);
      eb(function() {
        Fa(xa.shift());
      });
      var Fa = function(b) {
        if (fa = b) {
          E ? Ec[0].src = b : ta(vb, "script", {src:b});
        }
      };
    }
    var Ia = [], Ja = 5.5 <= A && 8 > A ? "keypress" : "keydown";
    if (!Ic) {
      var nb = cb.transition !== u || cb["-o-transition"] !== u || cb["-moz-transition"] !== u || cb["-webkit-transition"] !== u;
      xc(function(b) {
        if (b.H && wb) {
          b = b.G;
          var p = Ma(b), H = "", K;
          if ("A" === ab(p) && 1 === $c(p).length) {
            var U = Ra(p, "href");
            var w = U.split("?")[0].split("#")[0].split(".");
            w = (w[w.length - 1] || "").toLowerCase();
            if ((K = 0 < U.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + w + ".")) {
              na(p, Ja, M);
              na(b, "click", M);
              na(p, "click", F);
              nb && (H = b.naturalWidth + "px", Ka(b, "width", H));
              Bb(p, "js-pica-thumbnail");
              for (w = p; w = Ma(w);) {
                if (mb(w, "caption")) {
                  Bb(w, "js-captioned-thumbnail");
                  var ha = w;
                  var V = ed(ha);
                  break;
                }
              }
              Ia.push({u:p, L:ha, S:V, Z:b.src, $:H, N:U, F:b, M:K ? 0 < U.indexOf("/img/a/") ? 2 : 3 : 0 < U.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Ib(function(b, p) {
        for (b = -1; p = Ia[++b];) {
          Na(p.u, Ja, M), Na(p.F, "click", M), Na(p.u, "click", F);
        }
      });
    }
    var oa = ["jsSidebarFixer1", "jsSidebarFixer2"], m = !(9 > A || L || 1 <= X && 1.3 > X || Uc), g = !(5 > Da || 2.2 > Za || 6 > da(12) || Ga(32) && 534 > sa || Ga(34) || 7 > A || 9 > L || 1 > X), l = g || 6 === A || 1 > X, z = 7.5 > L, q, k, D, v = pd && Nc, T = 0, n = 0, J, R, la, qa;
    jd || Ic || (Jb(function(b) {
      if (b) {
        if (!wb) {
          return !0;
        }
        b = -1;
        var p;
        q = yb("jsSide");
        k = wb;
        if (!q) {
          return !0;
        }
        Mb(O);
        wc(O);
        D = Ub(tc(q), "div", {id:"jsSidebarFixer"});
        na(W, "blur", pa);
        for (zc(D, aa); 1 < kb(q).length;) {
          D.appendChild(kb(q)[1]);
        }
        for (; p = oa[++b];) {
          gd(yb(p), ia);
        }
        A || jb || 2 > za || (J = cb.perspective !== u || cb.MozPerspective !== u || cb["-webkit-perspective"] !== u);
        O();
        return !0;
      }
    }), Ib(function() {
      for (var b = -1, p; p = oa[++b];) {
        hd(yb(p), ia);
      }
      Na(W, "blur", pa);
      fd(D, aa);
    }));
    if (!(5 > Da)) {
      var Sa, Oa, Pa, bb, d, e, x, t;
      Jb(function(b) {
        if (b) {
          if (!wb) {
            return !0;
          }
          var p = kb(ya);
          b = Ub(p[0], "div");
          if (g) {
            Wa(b, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          } else {
            for (; p.length;) {
              b.appendChild(p.shift());
            }
            fb || (Wa(b, "width:100%;height:100%;overflow:auto;position:relative"), Wa(ub, "overflow:hidden"), Wa(ya, "overflow:hidden"));
            b = ad(b, "div");
            Wa(b, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
          }
          ta(b, "div", u, v ? "transform" + (J ? "3D" : "") : g ? "pos:fixed" : "pos:absolute");
          p = ta(b, "div");
          Sa = ta(p, "span");
          Oa = ta(p, "span");
          Pa = ta(b, "div");
          bb = ta(b, "div");
          Wa(bb, "position:absolute;left:0;top:0;width:54px;background:#242");
          e = ta(b, "div");
          Wa(e, "position:absolute;left:0;width:54px;background:#363");
          d = ta(b, "div");
          Wa(d, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
          x = ta(e, "div");
          Wa(x, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
          return !0;
        }
      });
    }
    eb(function() {
      function b(ha, V, ka, Xa) {
        var Ca = Xa ? "div" : "cite";
        if (0 === V.indexOf("urn:isbn:")) {
          V = V.substr(9).toUpperCase().split("-").join("");
          if (13 === V.length) {
            V = V.toString().slice(3, -1);
            for (var va = 0, Ta = 0; 9 > Ta; Ta++) {
              va += (V.charAt(Ta) - 0) * (10 - Ta);
            }
            va = (11 - va % 11) % 11;
            va = 10 === va ? "X" : va.toString();
            V += va;
          }
          10 === V.length && (V = "//www.amazon.co.jp/exec/obidos/ASIN/" + V + "/itozyun-22/ref=nosim/");
        }
        ka = Xa ? Ub(tc(H), Ca, {className:ka}) : ta(H, Ca, {className:ka});
        ta(ka, "a", 0 === V.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:V} : {href:V}, ha);
      }
      if (wb) {
        for (var p = zb(wb, "blockquote"), H, K = -1, U, w; H = p[++K];) {
          U = Ra(H, "title"), w = Ra(H, "cite"), U && w ? (lb(H, "title"), b(U, w, "js-generated-link-in-blockquote", !0)) : w && (lb(H, "cite"), b(W.decodeURI ? decodeURI(w) : w, w, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Q, Aa, La, hb, Qb, Kb, Dc;
    eb(function() {
      var b = yb("blog2slide-start");
      if (b) {
        var p = P.onfullscreenchange !== u ? "f" : P.onmozfullscreenchange !== u ? "mozF" : P.onwebkitfullscreenchange !== u ? "webkitF" : 0;
        Q = b.requestFullscreen || b.webkitRequestFullscreen || b.mozRequestFullscreen || b.msRequestFullscreen;
        0 !== p || Q ? (b.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', na(b.firstChild, "click", Z), b = Ma(b), Aa = Ma(b), Qb = zb(b, "section"), La = P.createElement("h1"), La.innerHTML = zb(ya, "h1")[0].innerHTML, Dc = Qb.length, Qb.splice(0, 0, La), 0 !== p ? na(P, p + "ullscreenchange", Y) : A ? na(P, "MSFullscreenChange", Y, !1) : wc(Y)) : $a(b);
      }
    });
  })();
  var Rb, Xb = !Gc || .9 > X || 8 > L || 5.5 > A, tb;
  (function() {
    function M(m) {
      return m === "" + m;
    }
    function F(m, g) {
      return Xb ? new Z(m, g) : new Gc(m, g);
    }
    function O(m, g, l, z, q) {
      var k = Y.codeBlocks[Y.codeBlocks.length - 1], D = I(), v = D - c;
      switch(l || 0) {
        case 1:
          Y.initRegExpCount++;
          Y.initRegExpTotal += v;
          Y.initRegExpMax < v && (Y.initRegExpMax = v, Y.initRegExpSource = q.toString(), Y.initRegExpInstance = q);
          break;
        case 2:
          k.decorateCount++;
          k.decorateTime += v;
          break;
        case 3:
          k.updateDOMTime += v;
      }
      if (D - a < S && !z) {
        return c = D, m(g);
      }
      ca(pa, {U:m, Y:g});
    }
    function pa(m) {
      a = c = I();
      m.U(m.Y);
    }
    function ea(m, g) {
      m && Rb[m] || (m = ba.test(g) ? "default-markup" : "default-code");
      var l = !!Rb[m];
      l && O(E, m, 0, !0);
      return l;
    }
    function ia() {
      function m(Oa, Pa, bb) {
        Pa && (g.h = g.h || [], g.h.push({l:g, B:g.B, O:1, s:D, D:Oa, o:Pa, m:bb, R:{}, v:0}));
      }
      var g = h, l = g.m, z = l[0], q = l[2], k = g.D, D = g.s, v = g.aa.shift(), T = g.R;
      if (v) {
        var n = T[v], J;
        if (!(0 <= n)) {
          if (J = z[v.charAt(0)]) {
            var R = v.match(J[1]);
            n = J[0];
          } else {
            for (n = 0, z = -1; J = q[++z];) {
              if (R = v.match(J[1])) {
                n = J[0];
                break;
              }
            }
          }
          !(J = M(n)) || R && M(R[1]) || (J = !1, n = 11);
          J || (T[v] = n);
        }
        q = g.v;
        T = v.length;
        g.v += T;
        if (J) {
          J = R[1];
          z = v.indexOf(J);
          var la = J.length, qa = z + la;
          R[2] && (qa = T - R[2].length, z = qa - la);
          m(k + q, v.substr(0, z), l);
          if (la && ea(n, J)) {
            m(k + q + z, J);
            var Sa = !0;
          }
          m(k + q + qa, v.substr(qa), l);
          g.h && g.h.length && (h = g.h.shift());
          Sa || (h !== g ? O(y, u, 2) : O(ia, u, 2));
        } else {
          D.push(k + q, n), O(ia, u, 2);
        }
      } else {
        g.l ? (h = g.l.h.shift()) ? O(y, u, 2) : (h = g.l, O(ia, u, 2)) : O(Fa, u, 2);
      }
    }
    function aa(m) {
      if (r.length) {
        var g = r.shift(), l = wa[g];
        if (l.pop) {
          wa[g] = l = F(l[0], l[1]);
        } else if (M(l)) {
          wa[g] = l = F(l);
        } else {
          return aa(m);
        }
        O(aa, m, 1, !1, l);
      } else {
        O(E, m);
      }
    }
    function ma(m) {
      for (var g, l = m.firstChild; l; l = l.nextSibling) {
        var z = l.nodeType;
        g = 1 === z ? g ? m : l : 3 === z ? ja.test(l.nodeValue) ? m : g : g;
      }
      return g === m ? u : g;
    }
    Rb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var N = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Ea = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
    26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], wa = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ra = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), I = Yb.now || function() {
      return +new Yb();
    }, Z, Y = {useRegExpCompat:Xb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var a = I();
    var c, h, B, G, S = 5 > A ? 60 : 5.5 > A ? 0 : Xb ? 20 : 10, ba, ja;
    tb = [function(m) {
      W.RegExpCompat = Z = m;
    }, function() {
      ba = F("^\\s*<");
      ja = F("\\S");
    }];
    Xb || (tb[1](), tb = u);
    var f = function() {
      var m = h, g = m.W, l = fa(m.B, m.O), z = m.o = l.o;
      m.I = l.I;
      ea(g, z) || (h = u, O(oa, u, 0, !0));
    };
    var y = function() {
      var m = h;
      m.aa = m.o.match(m.m[1]) || [];
      m.s.push(m.D, 0);
      O(ia, u, 2);
    };
    var r = [];
    var E = function(m) {
      function g(n) {
        var J = n;
        0 <= n && (J = Ea[n]);
        0 <= J[1] && (J[1] = l(J[1]));
        return J;
      }
      function l(n) {
        var J = n;
        return 0 <= n && (J = wa[n], !J.exec) ? (r.push(n), n) : J;
      }
      var z = h, q = Rb[m];
      M(q) && (q = Rb[m] = Rb[q]);
      var k = q[0];
      if (0 <= k) {
        k = N[k];
        if (0 <= k["-num"]) {
          var D = k["-num"];
          delete k["-num"];
          for (var v = -1; 9 > v;) {
            k["" + ++v] = D;
          }
        }
        q[0] = k;
      }
      for (var T in k) {
        k[T] = g(k[T]);
      }
      q[1] = l(q[1]);
      k = q[2];
      v = 0;
      for (D = k.length; v < D; ++v) {
        k[v] = g(k[v]);
      }
      r.length ? O(aa, m, 2) : (z.m ? z.l && (z.l.h[0].m = q) : z.m = q, O(y, u, 1));
    };
    var fa = function(m, g) {
      function l(T) {
        var n = T.nodeType;
        if (1 === n) {
          if (!mb(T, "nocode")) {
            for (n = T.firstChild; n; n = n.nextSibling) {
              l(n);
            }
            n = ab(T);
            if ("BR" === n || "LI" === n) {
              z[D] = "\n", k[D << 1] = q++, k[D++ << 1 | 1] = T;
            }
          }
        } else if (3 === n || 4 === n) {
          if (n = T.nodeValue) {
            n = g ? n.split("\r\n").join("\n").split("\r").join("\n") : n.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), z[D] = n, k[D << 1] = q, q += n.length, k[D++ << 1 | 1] = T;
          }
        }
      }
      var z = [], q = 0, k = [], D = 0;
      l(m);
      var v = z.join("");
      "\n" === v.charAt(v.length - 1) && (v = v.substr(0, v.length - 1));
      return {o:v, I:k};
    };
    var xa = function(m, g, l) {
      function z(n) {
        var J = n.nodeType;
        if (1 === J && !mb(n, "nocode")) {
          if ("BR" === ab(n)) {
            q(n), n.parentNode && $a(n);
          } else {
            for (n = n.firstChild; n; n = n.nextSibling) {
              z(n);
            }
          }
        } else if ((3 === J || 4 === J) && l) {
          var R = n.nodeValue, la = R.indexOf("\r\n"), qa = 2;
          -1 === la && (la = R.indexOf("\n"), qa = 1);
          -1 === la && (la = R.indexOf("\r"));
          -1 !== la && (J = R.substr(0, la), n.nodeValue = J, (R = R.substr(la + qa)) && uc(n, R), q(n), J || $a(n));
        }
      }
      function q(n) {
        function J(la, qa) {
          var Sa = qa ? la.cloneNode(!1) : la, Oa = la.parentNode;
          if (Oa) {
            Oa = J(Oa, 1);
            var Pa = la.nextSibling;
            Oa.appendChild(Sa);
            for (var bb = Pa; bb; bb = Pa) {
              Pa = bb.nextSibling, Oa.appendChild(bb);
            }
          }
          return Sa;
        }
        for (; !n.nextSibling;) {
          if (n = n.parentNode, !n) {
            return;
          }
        }
        n = J(n.nextSibling, 0);
        for (var R; (R = n.parentNode) && 1 === R.nodeType;) {
          n = R;
        }
        D.push(n);
      }
      for (var k = P.createElement("li"); m.firstChild;) {
        k.appendChild(m.firstChild);
      }
      for (var D = [k], v = 0; v < D.length; ++v) {
        z(D[v]);
      }
      if (g === (g | 0)) {
        if (10 <= g && 7.2 > L) {
          var T = P.createElement("ol");
          T.innerHTML = '<li value="' + g + '">' + k.innerHTML + "</li>";
          D[0] = T.firstChild;
        } else {
          sb(k, "value", g);
        }
      }
      T = ta(m, "ol", {className:"linenums"});
      m = Math.max(0, g - 1 | 0) || 0;
      v = 0;
      for (g = D.length; v < g; ++v) {
        k = D[v], gc(k, "L" + (v + m) % 10), k.firstChild || bd(k, "\u00a0"), T.appendChild(k);
      }
    };
    var Fa = function() {
      var m = h, g = m.o, l = g.length, z = 0, q = m.I, k = q.length, D = 0, v = m.s, T = v.length, n = 0;
      v[T] = l;
      var J, R;
      for (R = J = 0; R < T;) {
        v[R] !== v[R + 2] ? (v[J++] = v[R++], v[J++] = v[R++]) : R += 2;
      }
      T = J;
      for (R = J = 0; R < T;) {
        var la = v[R], qa = v[R + 1];
        for (R += 2; R + 2 <= T && v[R + 1] === qa;) {
          R += 2;
        }
        v[J++] = la;
        v[J++] = qa;
      }
      v.length = J;
      m = m.B;
      T = "";
      m && (T = m.style.display, Ka(m, "display", "none"));
      for (; D < k;) {
        J = q[D + 2] || l;
        la = v[n + 2] || l;
        R = Math.min(J, la);
        qa = q[D + 1];
        var Sa;
        if (1 !== qa.nodeType && (Sa = g.substring(z, R))) {
          9 > A && (Sa = Sa.split("\n").join("\r"));
          var Oa = Ub(qa, "span", {className:ra[v[n + 1]]}, Sa);
          $a(qa);
          z < J && (q[D + 1] = uc(Oa, g.substring(R, J)));
        }
        z = R;
        z >= J && (D += 2);
        z >= la && (n += 2);
      }
      m && Ka(m, "display", T);
      h = u;
      O(oa, u, 3, !0);
    };
    var Ia = [], Ja;
    Y.readyTime = I() - a;
    Jb(function(m) {
      if (m) {
        m = [Hb("pre"), Hb("code"), Hb("xmp")];
        for (var g = 0; g < m.length; ++g) {
          for (var l = 0, z = m[g].length; l < z; ++l) {
            nb(m[g][l]);
          }
        }
        return !0;
      }
    });
    var nb = function(m) {
      Ia.push(m);
      Ja = Ia.length;
      1 === Ja && (Fc ? ca(Fc, oa) : tb ? tb.push(function() {
        ca(oa);
      }) : ca(oa));
    };
    var oa = function() {
      function m(D, v) {
        return (D.split(v)[1] || "").split(" ")[0];
      }
      if (!h) {
        Ja !== Ia.length && G && G(Ja - Ia.length, Ja);
        var g = Ia.shift();
        if (g) {
          a = I();
          if (mb(g, "prettyprint") && !mb(g, "prettyprinted")) {
            for (var l = !1, z = g.parentNode; z !== ya; z = z.parentNode) {
              var q = ab(z);
              if (("PRE" === q || "XMP" === q || "CODE" === q) && mb(z, "prettyprint")) {
                l = !0;
                break;
              }
            }
            if (!l) {
              l = g.className;
              Bb(g, "prettyprinted");
              z = !1;
              if (!z) {
                z = m(l, "lang-") || m(l, "language-");
                var k;
                !z && (k = ma(g)) && "CODE" === ab(k) && (z = m(k.className, "lang-") || m(k.className, "language-"));
              }
              q = ab(g);
              "PRE" === q || "XMP" === q ? q = 1 : (q = g.currentStyle, k = P.defaultView, q = (q = q ? q.whiteSpace : k && k.getComputedStyle ? k.getComputedStyle(g, null).getPropertyValue("white-space") : 0) && "pre" === q.substr(0, 3));
              k = !1;
              (k = "true" === k || +k) || (k = m(l, "linenums:") || mb(g, "linenums"), k = k.length ? +k : k);
              k && xa(g, k, q);
              h = {W:z, B:g, ba:k, O:q, D:0, v:0, R:{}, s:[]};
              Y.codeBlocks.push({elm:g, lang:z, readyTime:I() - a, decorateTime:0, decorateCount:0, updateDOMTime:0});
              O(f);
              return;
            }
          }
          O(oa, u, 0, !0);
        } else {
          B && B(Y);
        }
      }
    };
    W.PR = {RegExpProxy:F, prettifyElement:nb, registerCompleteHandler:function(m, g) {
      B = m;
      G = g;
    }};
  })();
  var Ec = P.scripts || Hb("script");
  var Ba = Ec[Ec.length - 1].src.split("/");
  --Ba.length;
  "js" === Ba[Ba.length - 1] && --Ba.length;
  (Ba = Ba.join("/")) && (Ba += "/");
  C("[p_assetUrl] " + Ba);
  var jd = od || "1" === Ra(ya, "mob");
  $b = (jd ? "mb" : "pc") + "/";
  eb(function() {
    var M;
    (M = yb("logger")) || alert("#logger not found!");
    M ? (C = bz, pb = function(F) {
      ta(M, "DIV", {style:{color:"red"}}, F);
    }, W.onerror = function(F, O, pa) {
      pb(F + ", " + O + ", " + pa);
      return !0;
    }) : W.console ? (C = console.log, pb = console.error) : L ? (C = ib, pb = opera.postError) : C = pb = ib;
    for (; ec.length;) {
      C(ec.shift());
    }
    for (; fc.length;) {
      pb(fc.shift());
    }
    ec = fc = u;
    function bz(F) {
      ta(M, "DIV", u, F);
    }
    bz = !1;
  });
  6.1 > Da && (Mb ? Mb(rc) : na(W, "scroll", rc));
  Ib(Wc);
  6.1 > Da && (Mb ? Mb(sc) : na(W, "scroll", sc));
  Ib(Xc);
  10 > A && (11 !== md || 5 !== A) || (9 > L || 1 > X || !Eb && !W.addEventListener ? P.write('<link href="' + Ba + "css/" + $b + oc + '" rel="stylesheet"' + (8 > L ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > L || 1.5 > X || 534 > sa || 5 > Da || 7 > za || 3 > Za) && eb(function() {
    ta(vb, "link", {href:Ba + "css/" + $b + oc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Xb) {
    if (ac) {
      var Fc = function(M) {
        W.RegExpCompat = bz;
        Fc = u;
        bc(Ba + "js/regexpcompat.js");
        function bz(F) {
          for (var O; O = tb.shift();) {
            O(F);
          }
          tb = u;
          ca(M);
          cc(Ba + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      W.RegExpCompat = function(M) {
        for (var F; F = tb.shift();) {
          F(M);
        }
        tb = u;
        cc(Ba + "js/regexpcompat.js");
      }, bc(Ba + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

