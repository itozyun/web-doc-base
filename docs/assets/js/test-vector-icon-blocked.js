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
var F, nb;
(function(Ya, V, hb, Gc, K, ic, jd, Wb, ob, jc, kc, Hc, lc, v) {
  function aa(N) {
    if (Ya[0] === N) {
      return Za === Za + "" ? ob(Za) : Za;
    }
  }
  function Pa(N) {
    var H = Ya[3];
    if (Ya[2] === N) {
      return H === H + "" ? ob(H) : H;
    }
  }
  function mc() {
    return 6 > B ? wa.scrollTop : B ? tb.scrollTop : V.pageYOffset;
  }
  var wa = K.body, bb = wa.style, tb, ub, vb, Za = Ya[1], B = aa(2) || aa(3), Db = aa(7), ib = aa(5) || aa(6), G = aa(8) || aa(9), Y = aa(11) || aa(12), Rb = Y && 0 <= Ya.conpare(Za, "1.9.1"), Xb = aa(13), sa = aa(15), Ga = aa(16) || aa(17), Ic = aa(10) || aa(25), za = aa(20) || aa(22), Jc = aa(23), jb = aa(21), Yb = aa(24), kd = za || Jc || jb || Yb, Kc = za && ob(ic.userAgent.split("Edg/")[1]), ld = ob(ic.appVersion.split("Trident/")[1]) + 4, nc = Pa(35) || Pa(36) || Pa(37), md = 0 <= ic.userAgent.indexOf("Googlebot/"), 
  eb = 0.9 > Y, oc = (Db ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : 7.2 > G ? "opr70" : 8 > G ? "opr72" : 9.5 > G ? "opr" + (G | 0) : Y && !Rb ? 1.4 <= Y ? "gck19" : 1.3 <= Y ? "gck13" : 1 <= Y ? "gck12" : eb ? 0.8 <= Y ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Zb = "", nd = Pa(1) || Pa(2) || Pa(3) || Pa(4) || Pa(8) || Pa(9) || Pa(10), Lc, pb = 8 > B || 7.2 > G ? !1 : v, Mc = bb.transform !== v ? "transform" : bb["-o-transform"] !== v ? "-o-transform" : 
  bb["-ms-transform"] !== v ? "-ms-transform" : bb.MozTransform !== v ? "-moz-transform" : bb["-webkit-transform"] !== v ? "-webkit-transform" : "", Va = [], Nc = [], fb = [], pc, Oc, Pc, Qc, $b, Rc, Sc, ac, bc, Tc = !1, qc = 525 > sa || 3.2 > Ga || 2.2 > jb || 10 > G || Y && !Rb || aa(25) || 10 > aa(3) || Pa(32) || Pa(30) || Pa(3), ia, Jb, cc, Uc, od = !!wa.getBoundingClientRect, dc = [], ec = [], rc, Vc, sc, Wc, cb = Wb.now || function() {
    return +new Wb();
  };
  (function() {
    function N() {
      for (var R, I = 0, W = cb(); I < J.length;) {
        W < J[0].t ? ++I : (R = J.splice(I, 1)[0], R.f(R.p));
      }
      ma = J.length ? kc(N, Ea) : 0;
    }
    function H() {
      for (var R, I = 0; I < ba.length; ++I) {
        R = ba[I], R.f();
      }
    }
    function O() {
      na && (na = clearInterval(na));
    }
    function oa() {
      ma && (ma = Hc(ma));
    }
    F = function(R) {
      dc.push(R);
    };
    nb = function(R) {
      ec.push(R);
    };
    cc = function(R) {
      ba.length || (na = lc(H, fa));
      ba.push({f:R, C:++Z});
      return Z;
    };
    Uc = function(R) {
      for (var I = ba.length, W; W = ba[--I];) {
        if (W.C === R) {
          ba.splice(I, 1);
          ba[0] || O();
          break;
        }
      }
      return 0;
    };
    rc = function() {
      na && (O(), na = lc(H, fa));
    };
    Vc = O;
    var ba = [], fa = 500, Z = 0, na;
    if (5 > B || Db) {
      V._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    ia = function(R, I, W) {
      J.length || (ma = kc(N, Ea));
      J.push({f:R, p:I, C:++xa, t:cb() + (Ea < W ? W : Ea)});
      return xa;
    };
    Jb = function(R) {
      for (var I = J.length, W; W = J[--I];) {
        if (W.C === R) {
          J.splice(I, 1);
          break;
        }
      }
      return 0;
    };
    sc = function() {
      ma && (oa(), ma = kc(N, Ea));
    };
    Wc = oa;
    var J = [], Ea = 16, xa = 0, ma;
    if (5 > B || Db) {
      V._wdb_ontimer = N, N = "_wdb_ontimer()";
    }
  })();
  var wb, Eb, Xc, xb, Yc, Qa, kb, Zc, tc, qa, Sb, $c, ad, uc, Ja, yb, bd, $a, Ra, zb, qb, Kb, cd, fc, lb, Ab, vc, Ha, Wa, dd;
  (function() {
    function N(a, b, m) {
      var C = ["<", a], c = 1, p, t;
      if (b) {
        for (p in b) {
          var x = b[p];
          if (null != x && "" !== x) {
            if ("style" === p) {
              C[++c] = ' style="';
              for (t in x) {
                for (var U = ++c, X, S = [], ja = t.split(""), Ca = ja.length; Ca;) {
                  X = ja[--Ca], "A" <= X && "Z" >= X && (X = "-" + X.toLowerCase()), S[Ca] = X;
                }
                C[U] = S.join("") + ":" + x[t] + ";";
              }
              C[++c] = '"';
            } else {
              "className" === p && (p = "class"), C[++c] = " " + p + '="' + x + '"';
            }
          }
        }
      }
      C[++c] = ">";
      null != m && (I && "font" !== a ? C[++c] = "<font>" + H(m) + "</font>" : C[++c] = H(m));
      C[++c] = "</" + a + ">";
      return C.join("");
    }
    function H(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function O(a) {
      var b = a.split("-"), m = b.length;
      if (2 > m) {
        return a;
      }
      for (; 1 < m;) {
        a = b[--m], b[m] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function oa(a) {
      return ba(K, a);
    }
    function ba(a, b) {
      var m = "*" === b;
      m = I ? m ? a.all : a.all.tags(b.toUpperCase()) : 6 > B && m ? a.all : a.getElementsByTagName(b);
      for (var C = [], c = 0, p = m.length; c < p; ++c) {
        C[c] = m[c];
      }
      return C;
    }
    function fa(a, b) {
      var m = [], C = 0, c, p = -1;
      if (9 > B || !a.getElementsByClassName) {
        var t = 6 > B ? a.all : a.getElementsByTagName("*");
      } else {
        var x = !0;
        t = a.getElementsByClassName(b);
      }
      for (c = t.length; C < c; ++C) {
        var U = t[C];
        if (x || (I || 1 === U.nodeType) && xa(U, b)) {
          m[++p] = U;
        }
      }
      return m;
    }
    function Z(a) {
      return I ? a.parentElement : a.parentNode;
    }
    function na(a, b, m, C, c, p) {
      if (I) {
        var t = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var x = kb(2 > a ? Qa(b) : b);
        x = 2 > a ? x.indexOf(b) + a : x.length;
        b.insertAdjacentHTML(t, N(m, C, c));
        b = kb(b)[x];
        null != c && ("font" === m ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (W) {
        b = K.createElement(N(m, C));
      } else {
        b = p ? K.createElementNS("http://www.w3.org/2000/svg", m) : K.createElement(m);
        if (C) {
          for (t in C) {
            if ((a = C[t]) || 0 === a) {
              switch(t) {
                case "class":
                case "className":
                  fc(b, a);
                  break;
                case "style":
                  p = b.style;
                  for (x in a) {
                    p[x] = a[x];
                  }
                  break;
                default:
                  zb(b, t, a);
              }
            }
          }
          !G || "a" !== m && "A" !== m || !C.href || C["tag-index"] || C.tagIndex || zb(b, "tagIndex", "-0");
        }
        ta || null != c && J(b, c);
      }
      return b;
    }
    function J(a, b) {
      if (I) {
        return na(2, a, "font", v, b);
      }
      var m = K.createTextNode("" + b);
      a.appendChild(m);
      return m;
    }
    function Ea(a, b) {
      9 > B ? a.className = b : a.setAttribute("class", b);
    }
    function xa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function ma(a, b, m) {
      if (8 > G || 5.5 > B) {
        b = O(b);
      }
      a.style[b] = m;
    }
    function R(a) {
      return 5.5 > B ? a.style.cssText.toLowerCase() : a.style.cssText;
    }
    var I = 5 > B;
    tb = oa("html")[0];
    ub = oa("head")[0];
    wb = function(a) {
      return V[a] || K[a] || K.getElementById(a);
    };
    Eb = oa;
    Xc = function(a) {
      return fa(K, a);
    };
    xb = ba;
    Yc = fa;
    Qa = Z;
    kb = function(a) {
      a = I ? a.children : a.childNodes;
      for (var b = [], m = a.length; m;) {
        b[--m] = a[m];
      }
      return b;
    };
    Zc = function(a) {
      var b = !(7.03 < G && 7.2 > G) && a.children;
      a = b ? b : a.childNodes;
      for (var m = [], C = a.length, c = -1, p; C;) {
        if (p = a[--C], b || 1 === p.nodeType) {
          I && "FONT" === p.tagName || (m[++c] = p);
        }
      }
      return m;
    };
    tc = function(a) {
      return I ? a.children.length ? a.children[0] : null : a.firstChild;
    };
    qa = function(a, b, m, C, c) {
      b = na(2, a, b, m, C, c);
      I || (a.appendChild(b), ta && null != C && J(b, C));
      return b;
    };
    Sb = function(a, b, m, C, c) {
      b = na(0, a, b, m, C, c);
      I || (Z(a).insertBefore(b, a), ta && null != C && J(b, C));
      return b;
    };
    $c = function(a, b, m, C, c) {
      b = na(1, a, b, m, C, c);
      var p;
      I || ((p = a.nextSibling) ? Qa(p).insertBefore(b, p) : Qa(a).appendChild(b), ta && null != C && J(b, C));
      return b;
    };
    ad = J;
    uc = function(a, b) {
      var m;
      if (I) {
        return na(1, a, "font", v, b);
      }
      var C = K.createTextNode("" + b);
      (m = a.nextSibling) ? Qa(a).insertBefore(C, m) : Qa(a).appendChild(C);
      return C;
    };
    Ja = function(a) {
      Qa(a) ? I ? a.outerHTML = "" : (5.5 > B && (a.style.filter = ""), Qa(a).removeChild(a)) : F("[DOM] p_DOM_remove(), No parentNode!");
    };
    yb = function(a, b) {
      if (a.contains) {
        return a.contains(b);
      }
      for (; b && b !== tb;) {
        if (b = Qa(b), a === b) {
          return !0;
        }
      }
    };
    bd = function(a) {
      return I ? a.innerHTML.split("<FONT>").join("").split("</FONT>").join("") : a.innerHTML.split("\r\n").join("\n").split("\r").join("\n");
    };
    var W = 9 > B, ta = W;
    $a = function(a) {
      return a.tagName.toUpperCase();
    };
    Ra = function(a, b) {
      if (8 > G || 5.5 > B) {
        b = O(b);
      }
      var m = a.getAttribute(b);
      return G && "tabIndex" === b ? "-0" === m ? "" : "" === m ? "-1" : m : m || "";
    };
    zb = function(a, b, m) {
      if (G && "tab-index" === b) {
        "-1" === m ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", m);
      } else {
        if (8 > G || 5.5 > B) {
          b = O(b);
        }
        a.setAttribute(b, m);
      }
    };
    qb = function(a, b) {
      if (G && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > G || 5.5 > B) {
          b = O(b);
        }
        a.removeAttribute(b);
      }
    };
    Kb = function(a, b) {
      if (G && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > G || 5.5 > B) {
        b = O(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    cd = function(a) {
      return a.className;
    };
    fc = Ea;
    lb = xa;
    Ab = function(a, b) {
      var m;
      if (!xa(a, b)) {
        if (m = a.className) {
          m += " ";
        }
        Ea(a, m + b);
      }
    };
    vc = function(a, b) {
      if (xa(a, b)) {
        var m = a.className.split(" ");
        m.splice(m.indexOf(b), 1);
        Ea(a, m.join(" "));
      }
    };
    Ha = ma;
    Wa = function(a, b) {
      var m, C = -1, c;
      if (5.5 > B) {
        if (m = R(a)) {
          for (m = m.split(";"); c = m[++C];) {
            ma(a, c.split(":")[0], "");
          }
        }
        if (b) {
          for (C = -1, m = b.split(";"); c = m[++C];) {
            var p = c.split(":")[0];
            ma(a, p, c.substr(p.length + 1));
          }
        }
      } else if (7.1 > G) {
        if (a.setAttribute("style", ""), b) {
          for (m = b.split(";"); c = m[++C];) {
            c = c.split(":"), ma(a, c[0], c[1]);
          }
        }
      } else {
        9 > G || 1 > Y ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
    dd = R;
    Va.splice(0, 0, function() {
      function a(U) {
        U = kb(U);
        for (var X = U.length, S, ja, Ca; X;) {
          if (S = U[--X], ja = S.nodeType, 8 === ja) {
            b && t.push(S);
          } else if (1 === ja) {
            switch(ja = $a(S), "/" === ja.charAt(0) && (ja = ja.substr(1), x[ja] = !0), ja) {
              case "STYLE":
                if (7.2 <= G && 9 > G) {
                  break;
                }
              case "LINK":
                I || C || yb(ub, S) || p.push(S);
                break;
              case "META":
                ja = Ra(S, "name") || Ra(S, "property");
                for (Ca = c.length; Ca;) {
                  if (0 === ja.indexOf(c[--Ca])) {
                    t.push(S);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (md || Kb(S, "async")) {
                  break;
                }
                if (m) {
                  S.innerText = "";
                  m = !1;
                  break;
                }
              case "NOSCRIPT":
                if (Kb(S, "skip-cleanup")) {
                  break;
                }
              case "!":
                t.push(S);
                break;
              case "SOURCE":
                V.HTMLSourceElement || t.push(S);
                break;
              default:
                x[ja] ? t.push(S) : kb(S).length && a(S);
            }
          }
        }
        for (; p[0];) {
          ub.appendChild(p.pop());
        }
        for (; t[0];) {
          Ja(t.pop());
        }
      }
      vc(tb, "nojs");
      vb = wb("jsMain");
      var b = !(8 > G || 5 > B || Db || eb), m = Qc, C = 7 > B, c = ["og:", "twitter:", "fb:"], p = [], t = [], x = {};
      a(tb);
    });
  })();
  var la, La, db, Fb, wc, Lb, Gb, xc, yc, zc, ed, fd, gd, Mb, Fa, Ac;
  (function() {
    function N() {
      return g ? u ? 2 : n ? 3 : 1 : 0;
    }
    function H(f) {
      La(V, "load", H);
      H = v;
      oa(Va, f, !0);
      Va = v;
    }
    function O(f, h) {
      Gb(function() {
        var y = ma(f);
        h(y);
        y.addListener(h);
        return !0;
      });
    }
    function oa(f, h, y) {
      for (var q = 0; q < f.length; ++q) {
        !0 === f[q](h) && (f.splice(q, 1), --q);
      }
      y && (f.length = 0);
    }
    function ba(f, h, y) {
      Va || I.length || ia(fa);
      I.push(f, h, y);
    }
    function fa() {
      var f = I, h;
      for (I = []; h = f.shift();) {
        oa(h, f.shift(), f.shift());
      }
    }
    function Z(f) {
      var h = f || event;
      f = ta[h.type];
      var y = -1, q, M;
      5 > B ? h = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : B ? (h.target = h.srcElement, h.preventDefault = function() {
        h.returnValue = !1;
      }, h.stopPropagation = function() {
        h.cancelBubble = !0;
      }) : b && (h.K = h.stopPropagation, h.stopPropagation = function() {
        M = !0;
      });
      for (; q = f[++y];) {
        q.j === this ? (this.g = q.i, B && (h.currentTarget = this), this.g(h), B ? (this.g = hb, this.g = v) : delete this.g) : 7.2 > G && this === K && q.j === V && (V.g = q.i, V.g(h), delete V.g);
      }
      if (B) {
        return h.preventDefault = h.stopPropagation = hb, h.preventDefault = h.stopPropagation = v, h.returnValue;
      }
      b && (h.defaultPrevented && "click" === h.type && "A" === h.target.tagName && (C = !0), M && !C && h.K(), h.K = h.stopPropagation = v);
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function na() {
      var f = 9 === R.offsetWidth;
      Mb !== f && (ba(Nc, Mb = f), F("p_cssAvailability:" + Mb));
    }
    function J() {
      !Va && T && (Jb(T), T = ia(Ea));
    }
    function Ea() {
      T = 0;
      oa(r);
    }
    function xa(f) {
      Va || oa(w, f);
    }
    var ma = V.matchMedia, R, I = [];
    Va.push(function() {
      O = v;
      R = qa(wa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      db(function() {
        I.length && ia(fa);
      });
    });
    la = function(f, h, y, q) {
      if (m) {
        f.addEventListener(h, y, q ? W ? q : q.capture || !0 === q : !1);
      } else {
        var M = {j:f, i:y};
        q = ta[h];
        var Ba = "on" + h, Ma, rb;
        if (q) {
          for (Ma = q.length; rb = q[--Ma];) {
            if (rb.j === f && rb.i === y) {
              return;
            }
          }
          ta[h].push(M);
        } else {
          ta[h] = q = [M], a || (h = f[Ba], "function" === typeof h && h !== Z && q.unshift({j:f, i:h}));
        }
        a ? f.attachEvent(Ba, Z) : f[Ba] = Z;
      }
    };
    La = function(f, h, y, q) {
      if (m) {
        f.removeEventListener(h, y, q ? W ? q : q.capture || !0 === q : !1);
      } else {
        q = ta[h];
        h = "on" + h;
        var M, Ba, Ma;
        if (q) {
          for (M = q.length; Ba = q[--M];) {
            Ba.j === f && (Ba.i === y ? q.splice(M, 1) : Ma = !0);
          }
          Ma || (a ? f.detachEvent(h, Z) : B ? (f[h] = hb, f[h] = null) : delete f[h]);
        }
      }
    };
    var W = !B && !Db && (new jd('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ta = {}, a = !1, b = 525.13 > sa, m = !b && !Db && V.addEventListener, C;
    b && tb.addEventListener("click", function(f) {
      if (C) {
        return C = !1, f.preventDefault(), !1;
      }
    });
    db = function(f) {
      Va ? Va.push(f) : alert("Load event has already been dispatched!");
    };
    Fb = function(f) {
      c && c.push(f);
    };
    var c = [];
    if (419.3 >= sa) {
      var p = function() {
        if (p) {
          var f = K.readyState;
          "loaded" === f || "complete" === f ? (p = v, H()) : ia(p);
        }
      };
      ia(p);
    } else {
      la(V, "load", H), eb && ia(function() {
        H && H();
      }, 999);
    }
    B || !eb && 1.8 > Y ? la(V, "unload", function(f) {
      oa(c, f, !0);
    }) : c = v;
    Gb = function(f) {
      Nc.push(f);
    };
    db(function() {
      na();
      cc(na);
    });
    zc = function(f, h) {
      if (t) {
        la(f, "focusin", h);
      } else if (x) {
        la(f, "DOMFocusIn", h);
      } else {
        if (X) {
          Sa || (Sa = lc(Xa, 333));
        } else if (U || S) {
          la(K, "focus", Ca, !0);
        } else {
          return;
        }
        for (var y = ja, q = 0, M = y.length; q < M; ++q) {
          if (y[q] === f && y[q + 1] === h) {
            return;
          }
        }
        y.push(f, h);
      }
    };
    ed = function(f, h) {
      if (t) {
        la(f, "focusin", h);
      } else if (x) {
        la(f, "DOMFocusIn", h, !1);
      } else {
        for (var y = ja, q = 0, M = y.length; q < M; ++q) {
          if (y[q] === f && y[q + 1] === h) {
            y.splice(q, 2);
            y.length || (X ? Sa = Uc(Sa) : (U || S) && La(K, "focus", Ca, !0));
            break;
          }
        }
      }
    };
    var t = 6 <= B || ib || 52 <= Y || 15 <= za || 534 <= sa || 5 <= Ga || Jc || 4 <= jb || 4 <= Yb || 11.6 <= aa(8) || 12 <= aa(9), x = 8 <= G || za || jb || Yb || sa || Ga, U = 8 > G, X = 6 > B, S = 52 > Y || Xb;
    if (S || U) {
      var ja = [];
      var Ca = function(f) {
        var h = ja, y = U ? K.activeElement : f.target;
        if (U) {
          var q = f;
          f = {type:"focusin", target:y, preventDefault:function() {
            q.preventDefault();
          }, stopPropagation:function() {
            q.stopPropagation();
          }};
        }
        for (var M = 0, Ba = h.length; M < Ba; ++M) {
          var Ma = h[M];
          (Ma === y || yb(Ma, y)) && h[M + 1].call(Ma, f);
        }
      };
    } else if (X) {
      ja = [];
      var Sa, Ka, ea, Xa = function() {
        ea = V.onerror;
        V.onerror = Ia;
        var f = K.activeElement;
        if (Ka !== f) {
          Ka = f;
          for (var h = ja, y, q = 0, M = h.length; q < M; ++q) {
            y = h[q], (y === f || yb(y, f)) && h[q + 1].apply(y, [{target:f}]);
          }
        }
        V.onerror = ea;
        ea = v;
      }, Ia = function() {
        F("error!");
        V.onerror = ea;
        ea = Ka = v;
        return !0;
      };
    }
    yc = function(f) {
      fb && fb.push(f);
    };
    var e = 60 > Y || Xb, g, n, u;
    if (89 <= Y || 89 <= za || nc && 79 <= Kc || ma && (ma("(forced-colors:none)").matches || ma("(forced-colors:active)").matches)) {
      Ac = !0, O("(forced-colors:active)", function(f) {
        g = f.matches;
        Fa = N();
        ba(fb, Fa);
        F("(forced-colors:active):" + Fa);
      });
    } else if (10 <= B || ib || nc && Kc) {
      Ac = !0, O("(-ms-high-contrast:black-on-white)", function(f) {
        g = n = f.matches;
        Fa !== N() && (Fa = N(), ba(fb, Fa), F("(-ms-high-contrast:black-on-white):" + Fa));
      }), O("(-ms-high-contrast:white-on-black)", function(f) {
        g = u = f.matches;
        Fa !== N() && (Fa = N(), ba(fb, Fa), F("(-ms-high-contrast:white-on-black):" + Fa));
      }), O("(-ms-high-contrast:active)", function(f) {
        g = f.matches;
        Fa !== N() && (Fa = N(), ba(fb, Fa), F("(-ms-high-contrast:active):" + Fa));
      });
    } else if (nc && (B || Y && 0 <= Ya.conpare(Za, "1.8.1") || Xb)) {
      var z = function() {
        function f(q, M) {
          if (M && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          var Ba = q.split("(")[1].split(",");
          return ob(Ba[0]) + ob(Ba[1]) + ob(Ba[2]);
        }
        var h = K.defaultView;
        var y = h ? h.getComputedStyle(R, null) : R.currentStyle;
        h = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        h && (g = "#123456" !== h && "rgb(18,52,86)" !== h, n = f(h) < f(y, !0), u = f(h) > f(y, !0), Fa !== N() && (Fa = N(), F("(forced-colors-fallback):" + Fa), ba(fb, Fa, e)));
      };
      Gb(function(f) {
        if (f) {
          return Ha(R, "color", "#123456"), Ha(R, "backgroundColor", "#123456"), e ? (z(), fb = v) : cc(z), z = v, !0;
        }
      });
    } else {
      fb = N = v;
    }
    xc = function(f) {
      Va || alert("p_listenImageReady is called back for images present at load time.");
      k.push(f);
    };
    var k = [], Q = 7.5 <= G && 8 > G;
    Q && function() {
      for (var f = K.images, h = f.length, y; h;) {
        y = f[--h], y.J = y.src, qb(y, "src");
      }
    }();
    db(function() {
      function f() {
        q ? (M = y[--q], Q && zb(M, "src", M.J), Oc(h, Q ? M.J : M.src)) : k = v;
      }
      function h(Ma) {
        oa(k, {G:M, H:Ma}, !q);
        f();
      }
      var y = K.images || Eb("img"), q = y.length;
      if (12 > G || 532 > sa) {
        f();
      } else {
        for (; q;) {
          var M = y[--q];
          var Ba = 9 > B ? M.complete : 0 <= M.naturalWidth ? M.naturalWidth : M.width;
          ba(k, {G:M, H:Ba}, !q);
        }
        k = v;
      }
    });
    wc = function(f) {
      r.push(f);
    };
    var r = [], T;
    la(V, "resize", J);
    Fb(function() {
      T && Hc(T);
      La(V, "resize", J);
    });
    Lb = function(f) {
      w.push(f);
    };
    var w = [], D = 1 > Y || 1.2 <= Y && 1.8 > Y || 7.2 >= G, P;
    D ? cc(function() {
      var f = V.pageYOffset;
      P !== f && (P = f, xa({type:"scroll", cancelable:!1, stopPropagation:hb, preventDefault:hb}));
    }) : la(V, "scroll", xa, {passive:!0});
    Fb(function() {
      D || La(V, "scroll", xa, {passive:!0});
    });
    fd = function(f, h) {
      if (ka) {
        la(f, "wheel", h, {passive:!1});
      } else if (ra) {
        la(f, "mousewheel", h, !1);
      } else if (Da) {
        la(f, "MozMousePixelScroll", h, !1);
      } else if (Na) {
        for (var y = ab, q = 0, M = y.length; q < M; ++q) {
          if (y[q] === f && y[q + 1] === h) {
            return;
          }
        }
        y.length || la(K, "DOMMouseScroll", Ta, !1);
        y.push(f, h);
      }
    };
    gd = function(f, h) {
      if (ka) {
        La(f, "wheel", h, {passive:!1});
      } else if (ra) {
        La(f, "mousewheel", h, !1);
      } else if (Da) {
        La(f, "MozMousePixelScroll", h, !1);
      } else if (Na) {
        for (var y = ab, q = 0, M = y.length; q < M; ++q) {
          if (y[q] === f && y[q + 1] === h) {
            y.splice(q, 2);
            y.length || La(K, "DOMMouseScroll", Ta, !1);
            break;
          }
        }
      }
    };
    var ka = 9 <= B || ib || 17 <= Y || 31 <= za || 537.7 <= sa, ra = 6 <= B || ib || 9 <= G || za || 522 <= sa || Ga, Da = Rb, Na = Y && 0 <= Ya.conpare(Za, "0.9.7") && !Rb;
    if (Na) {
      var ab = [], Ta = function(f) {
        for (var h = ab, y = f.target, q, M = 0, Ba = h.length; M < Ba; ++M) {
          q = h[M], yb(q, y) && h[M + 1].call(q, f);
        }
      };
    }
  })();
  (function() {
    function N(e) {
      if (6 !== e && 6 <= za && 32 > za) {
        return !1;
      }
      switch(e) {
        case 1:
          return ta;
        case 2:
          return !!a;
        case 3:
          return !!b;
        case 4:
          return !!m;
        case 5:
          return c;
        case 6:
          return C && !xa;
      }
      return !1;
    }
    function H(e) {
      t(e);
      Xa && !e && Ja(Xa);
      t = x = U = X = S = ja = Ka = ea = Ia = Xa = v;
    }
    function O(e) {
      var g = '1.6em "' + e + '"';
      F("[webFontTest] testByNativeFontLoaderAPI start.");
      K.fonts.load(g).then(function(n) {
        F("[webFontTest] fonts.check() : " + K.fonts.check(g, "i") + ", fonts.length : " + n.length);
        (n = fa(x)) ? ia(H, n) : (F("[webFontTest] mesureWebFont() : false"), ba(!0));
      }, function(n) {
        F("[webFontTest] fonts.load() rejected! " + n);
        pb !== v ? Z(pb) : pc(Z);
      });
    }
    function oa(e) {
      return K.hidden || K.msHidden || K.mozHidden || K.webkitHidden ? (Sa = cb(), !1) : e < cb() - Sa;
    }
    function ba(e) {
      e && (F("[webFontTest] testWebFont start."), Sa = cb());
      (e = fa(x, Ca)) ? (F("[webFontTest] testWebFont mesurement success : " + e), H(e)) : oa(Ca) ? (F("[webFontTest] testWebFont timeout!"), Ka ? na() : Ea ? H(0) : pb !== v ? Z(pb) : pc(Z)) : ia(ba);
    }
    function fa(e, g) {
      var n = 0, u = -1, z = W && [];
      if (!Ia) {
        var k = -1;
        var Q;
        ea = qa(wa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, I);
        for (Ia = []; Q = p[++k];) {
          Ha(ea, "fontFamily", Q), Ia[k] = ea.offsetWidth, F("[webFontTest] " + Q + "=" + Ia[k]);
        }
      }
      for (5 > B ? ea || (ea = qa(wa, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, I)) : wa.appendChild(ea); k = p[++u];) {
        Ha(ea, "fontFamily", '"' + e + '",' + k);
        var r = ea.offsetWidth;
        if (z) {
          z[u] = r;
        } else {
          if (r !== Ia[u]) {
            n = 1;
            break;
          }
        }
      }
      if (z && r === z[0] && r === z[1]) {
        for (F("[webFontTest] Hit... : width=" + r), n = 1, u = -1; r = Ia[++u];) {
          if (r === z[0] && r === z[1] && r === z[2]) {
            F("[webFontTest] Failed! : font[" + u + "]=" + p[u]);
            n = 0;
            break;
          }
        }
      }
      !B && n && S && (ea.textContent = S, r = ea.offsetWidth, ea.textContent = ja, n = r === ea.offsetWidth ? 2 : 1, ea.textContent = I);
      Ja(ea);
      5 > B && (ea = v);
      g && (n || oa(g)) && (z || F("[webFontTest] " + e + ", " + k + "=" + r));
      return n;
    }
    function Z(e) {
      F("[webFontTest] onTestDataURIComplete : " + e);
      e ? (Ka = !0, F("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), x = x.replace(ma, ""), na()) : H(0);
    }
    function na() {
      if (U) {
        for (; U.length;) {
          var e = U.shift(), g = U.shift();
          if (N(e)) {
            F("[webFontTest] maybe can use! " + g);
            Xa = Sc(g, J, X, Xa);
            return;
          }
        }
      }
      H(0);
    }
    function J(e) {
      e ? ba(!0) : na();
    }
    pc = !1 === pb ? function(e) {
      ia(e, !1);
    } : function(e) {
      function g(z) {
        u = Jb(u);
        pb = z;
        n.onload = n.onerror = hb;
        ia(e, z);
      }
      if (pb !== v) {
        F("[dataURITest] already done : " + pb), ia(e, pb);
      } else {
        F("[dataURITest] start!");
        var n = new Image(), u = ia(function() {
          u && g(!1);
        });
        n.onerror = function() {
          F("[dataURITest] no DATA URI!");
          g(!1);
        };
        n.onload = function() {
          F("[dataURITest] DATA URI:" + (1 === n.width * n.height));
          g(1 === n.width * n.height);
        };
        n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > B && db(function() {
      var e = qa(wa, "div");
      Wa(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lc = 1 < e.offsetHeight;
      Ja(e);
    });
    Oc = function(e, g) {
      function n() {
        z || !k || u.complete ? (F("[imageTest] timer -> img.complete. img.width=" + u.width), ia(e, !!u.width), u.onerror = u.onload = hb, u = e = v) : (--k, ia(n));
      }
      var u = new Image(), z, k = 99;
      F("[imageTest] start.");
      u.onerror = function() {
        F("[imageTest] error!");
        z = !0;
      };
      u.onload = function() {
        F("[imageTest] onload.");
        z = !0;
      };
      u.src = g;
      ia(n);
    };
    Pc = function(e, g, n, u, z, k, Q) {
      t = e;
      x = g;
      U = n;
      X = u;
      S = z;
      ja = k;
      Ca = Q || R;
      x = ma + x;
      F("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      F("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!qc);
      aa(10) ? ia(H, 1) : qc ? ia(H, 0) : !K.fonts || 603 > sa || 11 > Ga ? (F("[webFontTest] No native font loader."), ba(!0)) : (F("[webFontTest] Use Native font loader."), O(x));
    };
    var Ea = 9 > B || 2 > za || 12 > G, xa = 6 > za || G || 530 > sa, ma = "bad_" + cb() + "_", R = 5E3, I = "mmmmmmmmmmlliiiiiiiii", W = 7 > Ga || sa && 0 >= Ya.conpare(Za, "536.11");
    qc || (W && za && F("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + za), W && Ga && F("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ga), W && sa && F("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + sa));
    var ta = 14 <= ib || 36 <= za || 39 <= Y || 602 <= sa || 10 <= Ga, a = 6 <= za || Y && 0 <= Ya.conpare(Za, "1.9.2") || 525 <= sa || 3.2 <= Ga || 4.4 <= jb || 11.1 <= G || ib || 9 <= aa(2) || 10 <= aa(3), b = 2 <= za || Rb || 525 <= sa || 3.2 <= Ga || 2.2 <= jb || 10 <= G || ib || 9 <= aa(2) || 10 <= aa(3), m = b, C = 525 <= sa || 3.2 <= Ga || 38 > za || 3 <= jb || 12 <= G, c = 4 <= aa(2) || 10 <= aa(3), p = za ? ["sans-serif", "serif"] : ["monospace", "sans-serif", "serif"], t, x, U, X, S, ja, 
    Ca, Sa, Ka, ea, Xa, Ia;
  })();
  (function() {
    function N(c) {
      var p = {Twitter:"\ud83d\udd4a", YouTube:"\ud83d\udcfa", Github:"\ueab0", Chrome:"\uead9", IE:"\ueadb", Edge:"\ueadc", Opera:"\ueade", Browser:"\ud83c\udf10", Firefox:"\ud83e\udd8a", Safari:"\ud83e\udded", Samsung:"\ud83e\ude90", Netscape:"\ue901", Linux:"\ud83d\udc27", Appleinc:"\ud83c\udf4e", Android:"\ud83e\udd16", Windows:"\ud83e\ude9f"};
      if (2 !== c) {
        F("[VectorIcon] " + c);
        var t = Xc("ico"), x = 0, U = t.length;
        if (U) {
          if (1 === c) {
            for (; x < U; ++x) {
              c = t[x];
              var X = bd(c);
              if (X = p[X]) {
                c.innerHTML = X;
              }
            }
          } else {
            C && !m && (V.VectorIconCompat = bz, ac(ya + "js/vector-icon-svg-fallback.js"));
          }
        }
      }
      function bz() {
        bc(ya + "js/vector-icon-svg-fallback.js");
        return [p, t, qa, m];
      }
      bz = !1;
    }
    xc(function(c) {
      var p = c.G;
      c = c.H;
      var t = Qa(p);
      !lb(t, "aBodyRoot") && c ? Ab(t, "js-image-has-been-loaded") : c || Ra(p, "alt") || "lazy" === Ra(p, "loading") || Ha(p, "display", "none");
    });
    eb && (Va.splice(1, 0, function() {
      for (var c = Yc(vb, "RichLink-sep"), p, t, x, U, X, S; p = c.shift();) {
        for (p = kb(p); t = p.shift();) {
          if ("A" === $a(t) && !t.innerHTML) {
            for (F("\u25a0 Broken Anchor " + t.parentNode.innerHTML); x = p.shift();) {
              if (1 === x.nodeType) {
                if ("A" === $a(x)) {
                  break;
                }
                for (U = xb(x, "A"); X = U.shift();) {
                  for (S = kb(X); S.length;) {
                    X.parentNode.insertBefore(S.shift(), X);
                  }
                  Ja(X);
                }
              }
              t.appendChild(x);
            }
          }
        }
      }
    }), Va.splice(2, 0, function() {
      for (var c = Eb("A"), p, t; p = c.shift();) {
        "A" !== $a(p) || p.innerHTML || (t = p.nextSibling && p.nextSibling.firstChild) && t.href === p.href && (F("\u25b2 Broken Anchor " + t.innerHTML), Ja(p));
      }
    }));
    5.5 <= B && 8 > B && fb && yc(function(c) {
      for (var p = xb(wa, "a"), t = p.length, x = 0; x < t; ++x) {
        p[x].hideFocus = !c;
      }
    });
    if (!Ac && fb) {
      var H, O = function() {
        H = qa(ub, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:ya + "css/" + Zb + "hc/" + oc});
        if (Mc || 5.5 <= B && 9 > B && Lc) {
          Ab(wa, "js-canuse-css-rotate-when-forced-colors-mode"), F("js-canuse-css-rotate-when-forced-colors-mode!");
        }
        O = v;
      };
      yc(function(c) {
        c && !H ? O() : H && (c ? ub.appendChild(H) : Ja(H));
      });
    }
    G && db(function() {
      for (var c = xb(wa, "a"), p = c.length, t = 0, x; t < p; ++t) {
        x = c[t], "-1" === Ra(x, "tabIndex") ? qb(x, "tabIndex") : Ra(x, "href") && zb(x, "tabIndex", "0");
      }
      c = xb(wa, "input");
      t = 0;
      for (p = c.length; t < p; ++t) {
        x = c[t], "hidden" === Ra(x, "type") && qb(x, "tabIndex");
      }
    });
    if (Y && 0 > Ya.conpare(Za, "0.9.5")) {
      Tc = !0;
      var oa, ba, fa, Z, na;
      db(function() {
        la(K, "keydown", J);
        la(K, "keyup", Ea);
        zc(wa, xa);
        eb || (la(V, "blur", ta), la(wa, "click", W));
      });
      var J = eb ? function(c) {
        16 === c.keyCode ? oa = !0 : 9 === c.keyCode && Z && ma(Z, !0) && (Z.blur && Z.blur(), c.stopPropagation(), c.preventDefault(), ia(I));
      } : function(c) {
        16 === c.keyCode ? oa = !0 : 9 === c.keyCode && (ba = cb());
      }, Ea = function(c) {
        16 === c.keyCode && (oa = !1);
      }, xa = eb ? function(c) {
        c.target.innerHTML || F(c.target.parentNode.innerHTML);
        Z = c.target;
      } : function(c) {
        var p = c.target;
        if (Z === p) {
          fa = v;
        } else if (fa) {
          p === fa ? (c.stopPropagation(), I(!0)) : (p.blur && b(p), c.preventDefault(), I());
        } else {
          if (c = Z) {
            Z = v, b(c);
          }
          fa = p;
          I(!0);
        }
      }, ma = function(c, p) {
        var t = cb(), x = wa, U = "nextSibling", X = "firstChild";
        oa && (p || t - 99 < ba && ba <= t) && (U = "previousSibling", X = "lastChild");
        for (fa = v; c !== x;) {
          if (S) {
            t = c;
            var S = !1;
          } else {
            t = c[U];
          }
          if (t) {
            if (1 === t.nodeType) {
              if (R(t)) {
                return fa = t, !0;
              }
              c = (S = t[X]) || t;
            } else {
              c = t;
            }
          } else {
            c = c.parentNode;
          }
        }
      }, R = function(c, p) {
        function t() {
          return "-1" !== Ra(c, "tab-index");
        }
        function x() {
          return 0 < c.offsetHeight * c.offsetWidth;
        }
        if (c.focus) {
          var U;
          switch({A:p ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[$a(c)]) {
            case 1:
              if (Kb(c, "href") && t() && x()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ra(c, "type") && t() && !Kb(c, "disabled") && x()) {
                return !0;
              }
              break;
            case 3:
              if (t() && !Kb(c, "disabled") && x()) {
                return !0;
              }
              break;
            default:
              if ((U = Ra(c, "tab-index")) && "-1" !== U && x()) {
                return !0;
              }
          }
        }
      }, I = function(c) {
        na = 0;
        fa && (eb || la(fa, "blur", a), Z = fa, fa = v, c || Z.focus());
      };
      if (!eb) {
        var W = function(c) {
          var p = c.target;
          if (Z && R(p, !0)) {
            var t = Z;
            Z = v;
            b(t);
            fa = p;
            c.stopPropagation();
            c.preventDefault();
            I();
          }
        }, ta = function(c) {
          c.target === K && (fa = v);
        }, a = function(c) {
          c = c.target;
          La(c, "blur", a);
          Z === c && ma(c) && (na || (na = ia(I)));
        }, b = function(c) {
          La(c, "blur", a);
          c.blur();
        };
      }
    }
    Gb(function(c) {
      if (c) {
        return Pc(N, "myIconFont", [1, ya + "iconfont/woff2.css", 2, ya + "iconfont/woff.css", 3, ya + "iconfont/ttf.css", 4, ya + "iconfont/otf.css", 5, ya + "iconfont/eot.css", 6, ya + "iconfont/svg.css"], "myIconFont-testCssReady", "twitter", "\ud83d\udc24", 5E3), N = v, !0;
      }
    });
    var m = 8 <= aa(8) && 9 > G, C = 9 <= B || ib || 1.8 <= Y || 8 <= aa(8) || 9 <= aa(9) || 3 <= aa(21) || Xb || kd || 312.6 <= sa && 312.7 >= sa || 419.3 <= sa || Ga;
  })();
  (function() {
    function N(d) {
      var l = ea.length, E, L, ha, A;
      if (13 === (d.keyCode || d.V) || d.type !== Xa) {
        for (; l;) {
          var ca = ea[--l];
          if (ca.F === this || ca.u === this) {
            l = ca.F;
            var da = E = ca.u;
            if (ca.P) {
              if (Ha(l, "width", ca.$), l.src = ca.Z, fc(da, ca.T), l = ca.L) {
                Wa(l, ca.S), vc(l, "js-captioned-thumbnail__large");
              }
            } else {
              if (L = ca.N) {
                delete ca.N;
                if (ca.M) {
                  for (; E = Qa(E);) {
                    if (!lb(E, "caption")) {
                      var pa = $a(E);
                      if ("DIV" === pa || "P" === pa || "BLOCKQUOT" === pa || "LI" === pa || "DD" === pa || "TD" === pa || "TH" === pa || "FORM" === pa || "PRE" === pa) {
                        break;
                      }
                    }
                  }
                  E = (E.offsetWidth | 0) - 4;
                  1600 < E && (E = 1600);
                  if (2 === ca.M) {
                    L = L.split("=");
                    pa = L.length;
                    if (ha = L[pa - 1]) {
                      (A = ob(ha.substr(1))) && ha === "s" + A ? L[pa - 1] = "w" + E : L[pa] = "w" + E;
                    }
                    L = L.join("=");
                  } else {
                    L = L.split("/");
                    pa = L.length;
                    if (ha = L[pa - 2]) {
                      (A = ob(ha.substr(1))) && ha === "s" + A ? L[pa - 2] = "w" + E : L.splice(pa - 1, 0, "w" + E);
                    }
                    L = L.join("/");
                  }
                }
                ca.X = L;
              }
              ca.T = cd(da);
              Ab(da, "js-pica-thumbnail__large");
              Ha(l, "width", "");
              l.src = ca.X;
              if (l = ca.L) {
                Wa(l, ""), Ab(l, "js-captioned-thumbnail__large");
              }
            }
            ca.P = !ca.P;
            break;
          }
        }
        H(d);
      }
    }
    function H(d) {
      d.preventDefault();
      d.stopPropagation();
    }
    function O(d) {
      var l = ka;
      if (Mb) {
        if (ra && !l) {
          if (cb() < ra) {
            return;
          }
          ra = v;
        }
        7 === d ? (J("t"), Da = 0) : (J("s"), Da && (Da = Jb(Da)), D = mc());
        l ? (ka = ba(v, l[0], l[1])) || (ra = cb() + 99) : ba();
        xa();
      } else {
        ka = v;
      }
    }
    function oa() {
      J("w.blur");
    }
    function ba(d, l, E) {
      function L(mb) {
        da = mb;
        if (T) {
          pa = T + ":translate" + (P ? "3D(0," : "(0,") + mb + (P ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== mb) {
          if (n || u) {
            var Bc = k.offsetWidth;
          }
          pa = n ? "position:fixed;width:" + Bc + "px;top:" + (mb - ha + va) + "px" : z ? "top:" + mb + "px" : "position:absolute;top:" + mb + "px;left:0";
          if (u && pa) {
            var Tb = 8 > B ? " " : ",";
            pa += ";clip:rect(" + (0 > mb ? -mb + "px" + Tb + Bc + "px" + Tb + Oa : "0" + Tb + Bc + "px" + Tb + (mb + Oa < Ub ? Oa : Ub - mb)) + "px" + Tb + "0)";
          }
        }
      }
      var ha = D, A = Q, ca = k.offsetTop === A.offsetTop, da = 0, pa = "", gb = !0;
      if (ca) {
        for (var Aa = 0, va = 0, Ua = A; Ua && Ua !== wa;) {
          va += Ua.offsetTop, Ua = Ua.offsetParent;
        }
        da = w;
        Ua = 11 > B ? tb.offsetHeight : V.innerHeight;
        var Cc = A.offsetHeight, Oa = r.offsetHeight, Ub = Oa < Cc ? Cc : Oa, Bb = ha, Nb = Bb + Ua, gc = va, hc = gc + Ub, hd = va + da, pd = hd + Oa;
        A = Bb < gc ? gc : Bb;
        var Cb = hc < Nb ? hc : Nb, Ob = Cb - A;
        Bb = hc <= Bb;
        Nb = Nb <= gc;
        if (l !== v) {
          gb = va + l;
          d = gb + E;
          if (Bb || Nb) {
            return Ua <= E ? (l = va, J("4.1.1")) : Bb ? (l = hc - E, J("4.1.2")) : (l = va + E - Ua, J("4.1.3")), ra = v, V.scroll(0, l), J("4.1.*"), ka;
          }
          Oa <= Ob ? (Aa = 3, J("4.2")) : E <= Ob ? Oa - l <= Ob ? (Aa = 2, J("4.3.1")) : A <= gb && d <= Cb ? A < va + da && (Aa = 4, J("4.3.2")) : A <= gb && gb <= Cb ? (Aa = 5, J("4.3.3")) : A <= d && d <= Cb ? (Aa = 4, J("4.3.4")) : d < A ? (Aa = 4, J("4.3.5")) : (Aa = 5, J("4.3.6")) : (Aa = 4, J("4.4"));
          gb = !1;
        } else {
          d !== v ? Oa <= Ob ? (Aa = 7, gb = !1, J("3.1")) : (da -= 60 * d, Aa = Cb - va - Oa, d = A - va, da < Aa ? (da = Aa, J("3.2.1")) : d < da ? (da = d, J("3.2.2")) : J("3.2.3"), Aa = 6) : Cc <= Oa || (Bb ? (Aa = 1, J("2.2.1")) : Nb ? J("2.2.2") : Oa <= Ob ? (Aa = 3, J("2.3")) : A < hd ? (Aa = 3, J("2.4.1")) : pd < Cb ? (Aa = 2, J("2.4.2")) : ha < va + Oa - Ob ? J("2.4.3") : (Aa = 2, J("2.4.4")));
        }
        switch(Aa) {
          case 0:
            L(0);
            break;
          case 1:
            L(Ub - Oa);
            break;
          case 2:
            L(Cb - va - Oa);
            break;
          case 3:
            L(A - va);
            break;
          case 4:
            L(A - va - l);
            break;
          case 5:
            L(Cb - va - (l + E));
          case 6:
            L(da);
        }
        ma(da, Oa, va, Ub, Ua, l || "-", E || "-");
      } else {
        ma(da, "-", "-", "-", "-", "-", "-");
      }
      Wa(r, pa);
      w = da;
      return ca && gb;
    }
    function fa(d) {
      if (Mb && (J("m"), Y && (D = mc(), xa()), this !== d.target)) {
        var l = jc(d.deltaY) ? d.deltaY : jc(d.wheelDeltaY) ? d.wheelDeltaY / 120 : jc(d.wheelDelta) ? d.wheelDelta / -120 : d.detail / ("MozMousePixelScroll" === d.type ? 45 : 1);
        l && ba(9 >= l ? -9 >= l ? -3 : l : 3) && (d.preventDefault(), d.stopPropagation());
      }
    }
    function Z(d) {
      if (Mb) {
        var l = Y && 0 > Ya.conpare(Za, "0.9.4"), E = d.target, L = r, ha = 0;
        if (yb(L, E)) {
          J(d.type || "ie5focus");
          la(E, "blur", na);
          if (T) {
            l = E.getBoundingClientRect(), d = l.bottom - l.top, ha = l.top - L.getBoundingClientRect().top | 0;
          } else {
            d = E.offsetHeight;
            var A = E;
            if (l) {
              for (var ca = []; A && (Y ? yb(L, A) : L !== A);) {
                for (; A.previousSibling;) {
                  A = A.previousSibling, A.tagName && ca.unshift(A.tagName + ":" + A.offsetTop);
                }
                A = A.offsetParent;
              }
              F(ca.join());
              A = E;
            }
            for (; A && (Y ? yb(L, A) : L !== A);) {
              if (l) {
                for (; A.previousSibling;) {
                  A = A.previousSibling, ha += A.offsetHeight || 0;
                }
                A = A.parentNode;
              } else {
                ha += A.offsetTop, A = A.offsetParent;
              }
            }
          }
          g ? (ka = [ha, d], Da && Jb(Da), Da = ia(O, 7, 1 > Y || 536 > sa || 14 > za ? 500 : 0)) : (D = mc(), ba(v, ha, d));
          R(ha, d);
        }
      }
    }
    function na() {
      La(this, "blur", na);
      R(0, 0);
    }
    function J(d) {
      Ta && (M && (M = Jb(M)), M = ia(Ea, 0, 1400), Ta.innerHTML += " " + d);
    }
    function Ea() {
      Ta.innerHTML = "";
    }
    function xa() {
      h && (Ha(h, "top", (D / 10 | 0) + "px"), ab.innerHTML = " scrl:" + (D | 0));
    }
    function ma(d, l, E, L, ha, A, ca) {
      y && (Ha(y, "top", ((d + E) / 10 | 0) + "px"), Ha(y, "height", (l / 10 | 0) + "px"), Ha(h, "height", (ha / 10 | 0) + "px"), Ha(f, "height", (wa.scrollHeight / 10 | 0) + "px"), Na.innerHTML = "conY:" + E + "/sidY" + d + ", conH:" + L + "/sidH" + l + ", focY:" + A + " focH:" + ca);
    }
    function R(d, l) {
      q && (Ha(q, "top", (d / 10 | 0) + "px"), Ha(q, "height", (l / 10 | 0) + "px"));
    }
    function I() {
      Ba.call(Ma);
    }
    function W() {
      K.fullscreenElement || K.fullscreen || K.webkitIsFullscreen || K.msFullscreenElement || V.fullScreen ? (zb(Ma, "id", "blog2slide-root"), Pb[1].parentNode.insertBefore(rb, Pb[1]), ta(), K.onkeydown = a) : Hb && (Ja(rb), qb(Ma, "id"), qb(Hb, "id"), Hb = K.onkeydown = v);
    }
    function ta() {
      Hb && qb(Hb, "id");
      Ib = 0 < Ib ? Dc < Ib ? Dc : Ib : 0;
      Hb = Pb[Ib];
      zb(Hb, "id", "blog2slide-current");
    }
    function a(d) {
      if ("ArrowRight" === d.key || 39 === d.keyCode) {
        ++Ib, ta();
      } else if ("ArrowLeft" === d.key || 37 === d.keyCode) {
        --Ib, ta();
      }
    }
    Sc = function(d, l, E, L) {
      L = L || qa(ub, "link", {type:"text/css", rel:"stylesheet"});
      X && (x = wb(E) || qa(wa, "div", {"aria-hidden":"true", className:E, id:E}));
      U(L, d, l);
      return L;
    };
    var b = Y && 0 > Ya.conpare(Za, "0.9.1"), m = 11 <= B || ib || 9 <= G && 9.5 > G, C = 11 > B, c = 7.2 <= G && 7.5 > G, p = 26 > Y && !b || 19 > za || 4.3 > jb || 2 > Yb || 536 > sa || 6 > Ga || 7 <= G && 9 > G && !c, t = !b && !m && !C && !c && !p, x, U = t ? function(d, l, E) {
      F("[CSS Loader] onload + onerror");
      d.onload = bz;
      d.onerror = function() {
        E(!1);
        d.onload = d.onerror = null;
      };
      d.href = l;
      function bz() {
        E(!0);
        d.onload = d.onerror = null;
      }
      bz = !1;
    } : m ? function(d, l, E) {
      F("[CSS Loader] onload + mesure");
      d.onload = bz;
      d.href = l;
      function bz() {
        E(X());
        Ja(x);
        d.onload = x = null;
      }
      bz = !1;
    } : C ? function(d, l, E) {
      F("[CSS Loader] onreadystatechange + onerror");
      d.onreadystatechange = bz;
      d.href = l;
      function bz() {
        "complete" === d.readyState && (E(X()), d.V = hb, Ja(x), x = null);
      }
      bz = !1;
    } : p || c ? function(d, l, E) {
      function L() {
        ca = cb() + 999;
        ia(ha, 0, 99);
        p ? A.onerror = null : A.removeEventListener("load", L, !1);
        A = null;
        d.href = l;
      }
      function ha() {
        X() ? (Ja(x), E(!0), x = null) : cb() < ca ? ia(ha, 0, 99) : (E(!1), Ja(x), x = null);
      }
      var A = new Image(), ca;
      p ? (F("[CSS Loader] img.onerror + mesure"), A.onerror = L) : (F('[CSS Loader] img.addEventListener("load") + mesure'), A.addEventListener("load", L, !1));
      A.src = l;
    } : function(d, l, E) {
      F("[CSS Loader] UNSUPPORTED");
      ia(E, !1);
    }, X = !t && !b && function() {
      return 20 !== x.offsetWidth;
    };
    Rc = Y && 0 >= Ya.conpare(Za, "0.9");
    $b = !(7.2 > G || Rc);
    ac = function(d) {
      S ? Va ? K.write('<script src="' + d + '">\x3c/script>') : nb("[DynamicScvriptLoader] Document already loaded! " + d) : Va || Sa.length ? Sa.push(d) : Ka(d);
    };
    bc = function(d) {
      S ? F("[DynamicScvriptLoader] " + d + " loaded.") : d === Ca ? Ka(Sa.shift()) : nb(d + " <> " + Ca);
    };
    var S = !$b, ja = $b && 7.5 > G, Ca;
    if (!S) {
      var Sa = [];
      ja && (Qc = !0);
      db(function() {
        Ka(Sa.shift());
      });
      var Ka = function(d) {
        if (Ca = d) {
          ja ? Ec[0].src = d : qa(ub, "script", {src:d});
        }
      };
    }
    var ea = [], Xa = 5.5 <= B && 8 > B ? "keypress" : "keydown";
    if (!Ic) {
      var Ia = bb.transition !== v || bb["-o-transition"] !== v || bb["-moz-transition"] !== v || bb["-webkit-transition"] !== v;
      xc(function(d) {
        if (d.H && vb) {
          d = d.G;
          var l = Qa(d), E = "", L;
          if ("A" === $a(l) && 1 === Zc(l).length) {
            var ha = Ra(l, "href");
            var A = ha.split("?")[0].split("#")[0].split(".");
            A = (A[A.length - 1] || "").toLowerCase();
            if ((L = 0 < ha.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + A + ".")) {
              la(l, Xa, N);
              la(d, "click", N);
              la(l, "click", H);
              Ia && (E = d.naturalWidth + "px", Ha(d, "width", E));
              Ab(l, "js-pica-thumbnail");
              for (A = l; A = Qa(A);) {
                if (lb(A, "caption")) {
                  Ab(A, "js-captioned-thumbnail");
                  var ca = A;
                  var da = dd(ca);
                  break;
                }
              }
              ea.push({u:l, L:ca, S:da, Z:d.src, $:E, N:ha, F:d, M:L ? 0 < ha.indexOf("/img/a/") ? 2 : 3 : 0 < ha.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      Fb(function(d, l) {
        for (d = -1; l = ea[++d];) {
          La(l.u, Xa, N), La(l.F, "click", N), La(l.u, "click", H);
        }
      });
    }
    var e = ["jsSidebarFixer1", "jsSidebarFixer2"], g = !(9 > B || G || 1 <= Y && 1.3 > Y || Tc), n = !(5 > Ga || 2.2 > jb || 6 > aa(12) || Pa(30) && 534 > sa || Pa(32) || 7 > B || 9 > G || 1 > Y), u = n || 6 === B || 1 > Y, z = 7.5 > G, k, Q, r, T = od && Mc, w = 0, D = 0, P, ka, ra, Da;
    id || Ic || (Gb(function(d) {
      if (d) {
        if (!vb) {
          return !0;
        }
        d = -1;
        var l;
        k = wb("jsSide");
        Q = vb;
        if (!k) {
          return !0;
        }
        Lb(O);
        wc(O);
        r = Sb(tc(k), "div", {id:"jsSidebarFixer"});
        la(V, "blur", oa);
        for (zc(r, Z); 1 < kb(k).length;) {
          r.appendChild(kb(k)[1]);
        }
        for (; l = e[++d];) {
          fd(wb(l), fa);
        }
        B || ib || 2 > za || (P = bb.perspective !== v || bb.MozPerspective !== v || bb["-webkit-perspective"] !== v);
        O();
        return !0;
      }
    }), Fb(function() {
      for (var d = -1, l; l = e[++d];) {
        gd(wb(l), fa);
      }
      La(V, "blur", oa);
      ed(r, Z);
    }));
    var Na, ab, Ta, f, h, y, q, M;
    Gb(function(d) {
      if (d) {
        if (!vb) {
          return !0;
        }
        var l = kb(wa);
        d = Sb(l[0], "div");
        if (n) {
          Wa(d, "position:fixed;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        } else {
          for (; l.length;) {
            d.appendChild(l.shift());
          }
          eb || (Wa(d, "width:100%;height:100%;overflow:auto;position:relative"), Wa(tb, "overflow:hidden"), Wa(wa, "overflow:hidden"));
          d = $c(d, "div");
          Wa(d, "position:absolute;z-index:9999;top:0;left:0;background:#000;color:#6f6;padding:0 .5em 0 70px");
        }
        qa(d, "div", v, T ? "transform" + (P ? "3D" : "") : n ? "pos:fixed" : "pos:absolute");
        l = qa(d, "div");
        Na = qa(l, "span");
        ab = qa(l, "span");
        Ta = qa(d, "div");
        f = qa(d, "div");
        Wa(f, "position:absolute;left:0;top:0;width:54px;background:#242");
        y = qa(d, "div");
        Wa(y, "position:absolute;left:0;width:54px;background:#363");
        h = qa(d, "div");
        Wa(h, "position:absolute;left:1px;width:50px;height:50px;border:1px solid #fff");
        q = qa(y, "div");
        Wa(q, "position:absolute;left:0;top:0;width:54px;line-height:0;font-size:0;background:#66c");
        return !0;
      }
    });
    db(function() {
      function d(ca, da, pa, gb) {
        var Aa = gb ? "div" : "cite";
        if (0 === da.indexOf("urn:isbn:")) {
          da = da.substr(9).toUpperCase().split("-").join("");
          if (13 === da.length) {
            da = da.toString().slice(3, -1);
            for (var va = 0, Ua = 0; 9 > Ua; Ua++) {
              va += (da.charAt(Ua) - 0) * (10 - Ua);
            }
            va = (11 - va % 11) % 11;
            va = 10 === va ? "X" : va.toString();
            da += va;
          }
          10 === da.length && (da = "//www.amazon.co.jp/exec/obidos/ASIN/" + da + "/itozyun-22/ref=nosim/");
        }
        pa = gb ? Sb(tc(E), Aa, {className:pa}) : qa(E, Aa, {className:pa});
        qa(pa, "a", 0 === da.indexOf("http") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:da} : {href:da}, ca);
      }
      if (vb) {
        for (var l = xb(vb, "blockquote"), E, L = -1, ha, A; E = l[++L];) {
          ha = Ra(E, "title"), A = Ra(E, "cite"), ha && A ? (qb(E, "title"), d(ha, A, "js-generated-link-in-blockquote", !0)) : A && (qb(E, "cite"), d(V.decodeURI ? decodeURI(A) : A, A, "js-generated-cite-in-blockquote"));
        }
      }
    });
    var Ba, Ma, rb, Hb, Pb, Ib, Dc;
    db(function() {
      var d = wb("blog2slide-start");
      if (d) {
        var l = K.onfullscreenchange !== v ? "f" : K.onmozfullscreenchange !== v ? "mozF" : K.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        Ba = d.requestFullscreen || d.webkitRequestFullscreen || d.mozRequestFullscreen || d.msRequestFullscreen;
        0 !== l || Ba ? (d.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', la(d.firstChild, "click", I), d = Qa(d), Ma = Qa(d), Pb = xb(d, "section"), rb = K.createElement("h1"), rb.innerHTML = xb(wa, "h1")[0].innerHTML, Dc = Pb.length, Pb.splice(0, 0, rb), 0 !== l ? la(K, l + "ullscreenchange", W) : B ? la(K, "MSFullscreenChange", W, !1) : wc(W)) : Ja(d);
      }
    });
  })();
  var Qb, Vb = !Gc || .9 > Y || 8 > G || 5.5 > B, sb;
  (function() {
    function N(e) {
      return e === "" + e;
    }
    function H(e, g) {
      return Vb ? new I(e, g) : new Gc(e, g);
    }
    function O(e, g, n, u, z) {
      var k = W.codeBlocks[W.codeBlocks.length - 1], Q = R(), r = Q - a;
      switch(n || 0) {
        case 1:
          W.initRegExpCount++;
          W.initRegExpTotal += r;
          W.initRegExpMax < r && (W.initRegExpMax = r, W.initRegExpSource = z.toString(), W.initRegExpInstance = z);
          break;
        case 2:
          k.decorateCount++;
          k.decorateTime += r;
          break;
        case 3:
          k.updateDOMTime += r;
      }
      if (Q - ta < c && !u) {
        return a = Q, e(g);
      }
      ia(oa, {U:e, Y:g});
    }
    function oa(e) {
      ta = a = R();
      e.U(e.Y);
    }
    function ba(e, g) {
      e && Qb[e] || (e = p.test(g) ? "default-markup" : "default-code");
      var n = !!Qb[e];
      n && O(S, e, 0, !0);
      return n;
    }
    function fa() {
      function e(Na, ab, Ta) {
        ab && (g.h = g.h || [], g.h.push({l:g, B:g.B, O:1, s:Q, D:Na, o:ab, m:Ta, R:{}, v:0}));
      }
      var g = b, n = g.m, u = n[0], z = n[2], k = g.D, Q = g.s, r = g.aa.shift(), T = g.R;
      if (r) {
        var w = T[r], D;
        if (!(0 <= w)) {
          if (D = u[r.charAt(0)]) {
            var P = r.match(D[1]);
            w = D[0];
          } else {
            for (w = 0, u = -1; D = z[++u];) {
              if (P = r.match(D[1])) {
                w = D[0];
                break;
              }
            }
          }
          !(D = N(w)) || P && N(P[1]) || (D = !1, w = 11);
          D || (T[r] = w);
        }
        z = g.v;
        T = r.length;
        g.v += T;
        if (D) {
          D = P[1];
          u = r.indexOf(D);
          var ka = D.length, ra = u + ka;
          P[2] && (ra = T - P[2].length, u = ra - ka);
          e(k + z, r.substr(0, u), n);
          if (ka && ba(w, D)) {
            e(k + z + u, D);
            var Da = !0;
          }
          e(k + z + ra, r.substr(ra), n);
          g.h && g.h.length && (b = g.h.shift());
          Da || (b !== g ? O(U, v, 2) : O(fa, v, 2));
        } else {
          Q.push(k + z, w), O(fa, v, 2);
        }
      } else {
        g.l ? (b = g.l.h.shift()) ? O(U, v, 2) : (b = g.l, O(fa, v, 2)) : O(Sa, v, 2);
      }
    }
    function Z(e) {
      if (X.length) {
        var g = X.shift(), n = xa[g];
        if (n.pop) {
          xa[g] = n = H(n[0], n[1]);
        } else if (N(n)) {
          xa[g] = n = H(n);
        } else {
          return Z(e);
        }
        O(Z, e, 1, !1, n);
      } else {
        O(S, e);
      }
    }
    function na(e) {
      for (var g, n = e.firstChild; n; n = n.nextSibling) {
        var u = n.nodeType;
        g = 1 === u ? g ? e : n : 3 === u ? t.test(n.nodeValue) ? e : g : g;
      }
      return g === e ? v : g;
    }
    Qb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var J = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Ea = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
    ma = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), R = Wb.now || function() {
      return +new Wb();
    }, I, W = {useRegExpCompat:Vb, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
    var ta = R();
    var a, b, m, C, c = 5 > B ? 60 : 5.5 > B ? 0 : Vb ? 20 : 10, p, t;
    sb = [function(e) {
      V.RegExpCompat = I = e;
    }, function() {
      p = H("^\\s*<");
      t = H("\\S");
    }];
    Vb || (sb[1](), sb = v);
    var x = function() {
      var e = b, g = e.W, n = ja(e.B, e.O), u = e.o = n.o;
      e.I = n.I;
      ba(g, u) || (b = v, O(Ia, v, 0, !0));
    };
    var U = function() {
      var e = b;
      e.aa = e.o.match(e.m[1]) || [];
      e.s.push(e.D, 0);
      O(fa, v, 2);
    };
    var X = [];
    var S = function(e) {
      function g(w) {
        var D = w;
        0 <= w && (D = Ea[w]);
        0 <= D[1] && (D[1] = n(D[1]));
        return D;
      }
      function n(w) {
        var D = w;
        return 0 <= w && (D = xa[w], !D.exec) ? (X.push(w), w) : D;
      }
      var u = b, z = Qb[e];
      N(z) && (z = Qb[e] = Qb[z]);
      var k = z[0];
      if (0 <= k) {
        k = J[k];
        if (0 <= k["-num"]) {
          var Q = k["-num"];
          delete k["-num"];
          for (var r = -1; 9 > r;) {
            k["" + ++r] = Q;
          }
        }
        z[0] = k;
      }
      for (var T in k) {
        k[T] = g(k[T]);
      }
      z[1] = n(z[1]);
      k = z[2];
      r = 0;
      for (Q = k.length; r < Q; ++r) {
        k[r] = g(k[r]);
      }
      X.length ? O(Z, e, 2) : (u.m ? u.l && (u.l.h[0].m = z) : u.m = z, O(U, v, 1));
    };
    var ja = function(e, g) {
      function n(T) {
        var w = T.nodeType;
        if (1 === w) {
          if (!lb(T, "nocode")) {
            for (w = T.firstChild; w; w = w.nextSibling) {
              n(w);
            }
            w = $a(T);
            if ("BR" === w || "LI" === w) {
              u[Q] = "\n", k[Q << 1] = z++, k[Q++ << 1 | 1] = T;
            }
          }
        } else if (3 === w || 4 === w) {
          if (w = T.nodeValue) {
            w = g ? w.split("\r\n").join("\n").split("\r").join("\n") : w.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), u[Q] = w, k[Q << 1] = z, z += w.length, k[Q++ << 1 | 1] = T;
          }
        }
      }
      var u = [], z = 0, k = [], Q = 0;
      n(e);
      var r = u.join("");
      "\n" === r.charAt(r.length - 1) && (r = r.substr(0, r.length - 1));
      return {o:r, I:k};
    };
    var Ca = function(e, g, n) {
      function u(w) {
        var D = w.nodeType;
        if (1 === D && !lb(w, "nocode")) {
          if ("BR" === $a(w)) {
            z(w), w.parentNode && Ja(w);
          } else {
            for (w = w.firstChild; w; w = w.nextSibling) {
              u(w);
            }
          }
        } else if ((3 === D || 4 === D) && n) {
          var P = w.nodeValue, ka = P.indexOf("\r\n"), ra = 2;
          -1 === ka && (ka = P.indexOf("\n"), ra = 1);
          -1 === ka && (ka = P.indexOf("\r"));
          -1 !== ka && (D = P.substr(0, ka), w.nodeValue = D, (P = P.substr(ka + ra)) && uc(w, P), z(w), D || Ja(w));
        }
      }
      function z(w) {
        function D(ka, ra) {
          var Da = ra ? ka.cloneNode(!1) : ka, Na = ka.parentNode;
          if (Na) {
            Na = D(Na, 1);
            var ab = ka.nextSibling;
            Na.appendChild(Da);
            for (var Ta = ab; Ta; Ta = ab) {
              ab = Ta.nextSibling, Na.appendChild(Ta);
            }
          }
          return Da;
        }
        for (; !w.nextSibling;) {
          if (w = w.parentNode, !w) {
            return;
          }
        }
        w = D(w.nextSibling, 0);
        for (var P; (P = w.parentNode) && 1 === P.nodeType;) {
          w = P;
        }
        Q.push(w);
      }
      for (var k = K.createElement("li"); e.firstChild;) {
        k.appendChild(e.firstChild);
      }
      for (var Q = [k], r = 0; r < Q.length; ++r) {
        u(Q[r]);
      }
      if (g === (g | 0)) {
        if (10 <= g && 7.2 > G) {
          var T = K.createElement("ol");
          T.innerHTML = '<li value="' + g + '">' + k.innerHTML + "</li>";
          Q[0] = T.firstChild;
        } else {
          zb(k, "value", g);
        }
      }
      T = qa(e, "ol", {className:"linenums"});
      e = Math.max(0, g - 1 | 0) || 0;
      r = 0;
      for (g = Q.length; r < g; ++r) {
        k = Q[r], fc(k, "L" + (r + e) % 10), k.firstChild || ad(k, "\u00a0"), T.appendChild(k);
      }
    };
    var Sa = function() {
      var e = b, g = e.o, n = g.length, u = 0, z = e.I, k = z.length, Q = 0, r = e.s, T = r.length, w = 0;
      r[T] = n;
      var D, P;
      for (P = D = 0; P < T;) {
        r[P] !== r[P + 2] ? (r[D++] = r[P++], r[D++] = r[P++]) : P += 2;
      }
      T = D;
      for (P = D = 0; P < T;) {
        var ka = r[P], ra = r[P + 1];
        for (P += 2; P + 2 <= T && r[P + 1] === ra;) {
          P += 2;
        }
        r[D++] = ka;
        r[D++] = ra;
      }
      r.length = D;
      e = e.B;
      T = "";
      e && (T = e.style.display, Ha(e, "display", "none"));
      for (; Q < k;) {
        D = z[Q + 2] || n;
        ka = r[w + 2] || n;
        P = Math.min(D, ka);
        ra = z[Q + 1];
        var Da;
        if (1 !== ra.nodeType && (Da = g.substring(u, P))) {
          9 > B && (Da = Da.split("\n").join("\r"));
          var Na = Sb(ra, "span", {className:ma[r[w + 1]]}, Da);
          Ja(ra);
          u < D && (z[Q + 1] = uc(Na, g.substring(P, D)));
        }
        u = P;
        u >= D && (Q += 2);
        u >= ka && (w += 2);
      }
      e && Ha(e, "display", T);
      b = v;
      O(Ia, v, 3, !0);
    };
    var Ka = [], ea;
    W.readyTime = R() - ta;
    Gb(function(e) {
      if (e) {
        e = [Eb("pre"), Eb("code"), Eb("xmp")];
        for (var g = 0; g < e.length; ++g) {
          for (var n = 0, u = e[g].length; n < u; ++n) {
            Xa(e[g][n]);
          }
        }
        return !0;
      }
    });
    var Xa = function(e) {
      Ka.push(e);
      ea = Ka.length;
      1 === ea && (Fc ? ia(Fc, Ia) : sb ? sb.push(function() {
        ia(Ia);
      }) : ia(Ia));
    };
    var Ia = function() {
      function e(Q, r) {
        return (Q.split(r)[1] || "").split(" ")[0];
      }
      if (!b) {
        ea !== Ka.length && C && C(ea - Ka.length, ea);
        var g = Ka.shift();
        if (g) {
          ta = R();
          if (lb(g, "prettyprint") && !lb(g, "prettyprinted")) {
            for (var n = !1, u = g.parentNode; u !== wa; u = u.parentNode) {
              var z = $a(u);
              if (("PRE" === z || "XMP" === z || "CODE" === z) && lb(u, "prettyprint")) {
                n = !0;
                break;
              }
            }
            if (!n) {
              n = g.className;
              Ab(g, "prettyprinted");
              u = !1;
              if (!u) {
                u = e(n, "lang-") || e(n, "language-");
                var k;
                !u && (k = na(g)) && "CODE" === $a(k) && (u = e(k.className, "lang-") || e(k.className, "language-"));
              }
              z = $a(g);
              "PRE" === z || "XMP" === z ? z = 1 : (z = g.currentStyle, k = K.defaultView, z = (z = z ? z.whiteSpace : k && k.getComputedStyle ? k.getComputedStyle(g, null).getPropertyValue("white-space") : 0) && "pre" === z.substr(0, 3));
              k = !1;
              (k = "true" === k || +k) || (k = e(n, "linenums:") || lb(g, "linenums"), k = k.length ? +k : k);
              k && Ca(g, k, z);
              b = {W:u, B:g, ba:k, O:z, D:0, v:0, R:{}, s:[]};
              W.codeBlocks.push({elm:g, lang:u, readyTime:R() - ta, decorateTime:0, decorateCount:0, updateDOMTime:0});
              O(x);
              return;
            }
          }
          O(Ia, v, 0, !0);
        } else {
          m && m(W);
        }
      }
    };
    V.PR = {RegExpProxy:H, prettifyElement:Xa, registerCompleteHandler:function(e, g) {
      m = e;
      C = g;
    }};
  })();
  var Ec = K.scripts || Eb("script");
  var ya = Ec[Ec.length - 1].src.split("/");
  --ya.length;
  "js" === ya[ya.length - 1] && --ya.length;
  (ya = ya.join("/")) && (ya += "/");
  F("[p_assetUrl] " + ya);
  var id = nd || "1" === Ra(wa, "mob");
  Zb = (id ? "mb" : "pc") + "/";
  db(function() {
    var N;
    (N = wb("logger")) || alert("#logger not found!");
    N ? (F = bz, nb = function(H) {
      qa(N, "DIV", {style:{color:"red"}}, H);
    }, V.onerror = function(H, O, oa) {
      nb(H + ", " + O + ", " + oa);
      return !0;
    }) : V.console ? (F = console.log, nb = console.error) : G ? (F = hb, nb = opera.postError) : F = nb = hb;
    for (; dc.length;) {
      F(dc.shift());
    }
    for (; ec.length;) {
      nb(ec.shift());
    }
    dc = ec = v;
    function bz(H) {
      qa(N, "DIV", v, H);
    }
    bz = !1;
  });
  6.1 > Ga && (Lb ? Lb(rc) : la(V, "scroll", rc));
  Fb(Vc);
  6.1 > Ga && (Lb ? Lb(sc) : la(V, "scroll", sc));
  Fb(Wc);
  10 > B && (11 !== ld || 5 !== B) || (9 > G || 1 > Y || !Db && !V.addEventListener ? K.write('<link href="' + ya + "css/" + Zb + oc + '" rel="stylesheet"' + (8 > G ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > G || 1.5 > Y || 534 > sa || 5 > Ga || 7 > za || 3 > jb) && db(function() {
    qa(ub, "link", {href:ya + "css/" + Zb + oc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Vb) {
    if ($b) {
      var Fc = function(N) {
        V.RegExpCompat = bz;
        Fc = v;
        ac(ya + "js/regexpcompat.js");
        function bz(H) {
          for (var O; O = sb.shift();) {
            O(H);
          }
          sb = v;
          ia(N);
          bc(ya + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      V.RegExpCompat = function(N) {
        for (var H; H = sb.shift();) {
          H(N);
        }
        sb = v;
        bc(ya + "js/regexpcompat.js");
      }, ac(ya + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

