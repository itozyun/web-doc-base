/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Function.prototype.apply||(Function.prototype.apply=function(_x,_y){var f=this,x=_x!=null?_x:{},y=_y||[],j=y.length,i=0,r,a,u;x.__apply=f;if(!x.__apply)a=x.constructor.prototype.__apply=f;switch(j){case 0:r=x.__apply();break;case 1:r=x.__apply(y[0]);break;case 2:r=x.__apply(y[0],y[1]);break;case 3:r=x.__apply(y[0],y[1],y[2]);break;case 4:r=x.__apply(y[0],y[1],y[2],y[3]);break;case 5:r=x.__apply(y[0],y[1],y[2],y[3],y[4]);break;case 6:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5]);break;case 7:r=x.__apply(y[0],
y[1],y[2],y[3],y[4],y[5],y[6]);break;case 8:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7]);break;case 9:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]);break;default:r=[];for(;i<j;++i)r[i]="y["+i+"]";r=eval("x.__apply("+r.join(",")+")")}a?delete x.constructor.prototype.__apply:x.__apply=u;return r});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d});
window.decodeURI||(decodeURI=function(d){var e=[],f=parseInt,h=String.fromCharCode;d+="";for(var g=-1,b=0,k=d.length,c,a;b<k;++b)a?(a=f(d.substr(b,2),16),++b,127<a&&(223<a?(c=(a&15)<<12,a=f(d.substr(b+2,2),16)&63,b+=3,c+=a<<6):c=(a&63)<<6,a=f(d.substr(b+2,2),16)&63,b+=3,a+=c),e[++g]=h(a),a=!1):(c=d.charAt(b),(a="%"===c)||(e[++g]=c));return e.join("")});window.decodeURIComponent||(decodeURIComponent=decodeURI); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
(function(Ia, aa, Wa, oc, I, Xb, Sc, Jb, bb, Yb, Zb, pc, $b, v) {
  function W(M) {
    if (Ia[0] === M) {
      return Ma === Ma + "" ? bb(Ma) : Ma;
    }
  }
  function Aa(M) {
    var K = Ia[3];
    if (Ia[2] === M) {
      return K === K + "" ? bb(K) : K;
    }
  }
  function ib(M) {
    var K = ib.O || (ib.O = {}), J = K[M], Q, N;
    if (J) {
      return J;
    }
    J = M.split("-");
    Q = J.length;
    if (2 > Q) {
      return M;
    }
    for (; 1 < Q;) {
      N = J[--Q];
      J[Q] = N.charAt(0).toUpperCase() + N.substr(1);
    }
    return K[M] = J.join("");
  }
  function ac() {
    return 6 > A ? oa.scrollTop : A ? qb.scrollTop : aa.pageYOffset;
  }
  var oa = I.body, Ra = oa.style, qb, jb, rb, Ma = Ia[1], A = W(2) || W(3), sb = W(7), Xa = W(5) || W(6), C = W(8) || W(9), T = W(11) || W(12), Eb = T && 0 <= Ia.conpare(Ma, "1.9.1"), kb = W(13), la = W(16), Ba = W(17) || W(18), qc = W(10) || W(26), ta = W(21) || W(23), rc = W(24), Sa = W(22), Kb = W(25), Tc = ta || rc || Sa || Kb, sc = ta && bb(Xb.userAgent.split("Edg/")[1]), Uc = bb(Xb.appVersion.split("Trident/")[1]) + 4, tb = Aa(37) || Aa(38) || Aa(39), Vc = Aa(40) || Aa(41) || Aa(42) || Aa(43), 
  Wc = 0 <= Xb.userAgent.indexOf("Googlebot/"), cb = 0.9 > T, bc = (sb ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : 7.2 > C ? "opr70" : 8 > C ? "opr72" : 9.5 > C ? "opr" + (C | 0) : T && !Eb ? 1.4 <= T ? "gck19" : 1.3 <= T ? "gck13" : 1 <= T ? "gck12" : cb ? 0.8 <= T ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Lb = "", Xc = Aa(1) || Aa(2) || Aa(3) || Aa(4) || Aa(8) || Aa(9), tc, lb = 8 > A || 7.2 > C ? !1 : v, uc = Ra.transform !== v ? "transform" : Ra["-o-transform"] !== 
  v ? "-o-transform" : Ra["-ms-transform"] !== v ? "-ms-transform" : Ra.MozTransform !== v ? "-moz-transform" : Ra["-webkit-transform"] !== v ? "-webkit-transform" : "", Ta = [], vc = [], Ua = [], cc, wc, xc, yc, Mb, zc, Ac, Nb, Ob, Bc = !1, Yc = 525 > la || 3.1 > Ba || 2.2 > Sa || 10 > C || T && !Eb || W(26) || 10 > W(3) || Aa(34) || Aa(32) || Aa(3), Y, xb, Pb, Cc, Zc = !!oa.getBoundingClientRect, dc, Dc, ec, Ec, Na = Jb.now || function() {
    return +new Jb();
  }, ub, vb, Fc, mb, Gc, Oa, db, Hc, fc, Pa, Qb, Ic, gc, Ca, nb, Jc, Kc, Ja, Ga, eb, Ya, fb, Lc, Rb, Za, ob, hc, Va, Fb, Mc, $a, fa, Ka, Qa, wb, ic, yb, zb, Gb, jc, Sb, Nc, Oc, Pc, Hb, La, kc, Db, Wb, hb, mc, xa, Rc, nc;
  (function() {
    function M() {
      for (var ba, V = 0, Z = Na(); V < ka.length;) {
        Z < ka[0].t ? ++V : (ba = ka.splice(V, 1)[0], ba.f(ba.p));
      }
      ca = ka.length ? Zb(M, va) : 0;
    }
    function K() {
      for (var ba, V = 0; V < N.length; ++V) {
        ba = N[V], ba.f();
      }
    }
    function J() {
      ja && (ja = clearInterval(ja));
    }
    function Q() {
      ca && (ca = pc(ca));
    }
    Pb = function(ba) {
      N.length || (ja = $b(K, pa));
      N.push({f:ba, u:++qa});
      return qa;
    };
    Cc = function(ba) {
      for (var V = N.length, Z; Z = N[--V];) {
        if (Z.u === ba) {
          N.splice(V, 1);
          N[0] || J();
          break;
        }
      }
      return 0;
    };
    dc = function() {
      ja && (J(), ja = $b(K, pa));
    };
    Dc = J;
    var N = [], pa = 500, qa = 0, ja, ka, va, ya, ca;
    if (5 > A || sb) {
      aa._wdb_onlooptimer = K, K = "_wdb_onlooptimer()";
    }
    Y = function(ba, V, Z) {
      ka.length || (ca = Zb(M, va));
      ka.push({f:ba, p:V, u:++ya, t:Na() + (va < Z ? Z : va)});
      return ya;
    };
    xb = function(ba) {
      for (var V = ka.length, Z; Z = ka[--V];) {
        if (Z.u === ba) {
          ka.splice(V, 1);
          break;
        }
      }
      return 0;
    };
    ec = function() {
      ca && (Q(), ca = Zb(M, va));
    };
    Ec = Q;
    ka = [];
    va = Ba | 0 || 530 <= la && 534 > la ? 64 : 16;
    ya = 0;
    if (5 > A || sb) {
      aa._wdb_ontimer = M, M = "_wdb_ontimer()";
    }
  })();
  $a = 7.2 > C ? "-0" : 8 > C ? "0" : "-0";
  (function() {
    function M(b, e, t) {
      var w = ["<", b], B = 1, F, R, U;
      if (e) {
        for (F in e) {
          U = e[F];
          if (null != U && "" !== U) {
            if ("style" === F) {
              w[++B] = ' style="';
              for (R in U) {
                for (var S = ++B, h, a = [], g = R.split(""), d = g.length; d;) {
                  h = g[--d], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), a[d] = h;
                }
                w[S] = a.join("") + ":" + U[R] + ";";
              }
              w[++B] = '"';
            } else {
              "className" === F && (F = "class"), w[++B] = " " + F + '="' + U + '"';
            }
          }
        }
      }
      w[++B] = ">";
      null != t && (ha && "FONT" !== b ? w[++B] = "<FONT>" + K(t) + "</FONT>" : w[++B] = K(t));
      w[++B] = "</" + b + ">";
      return w.join("");
    }
    function K(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function J(b) {
      return Q(I, b);
    }
    function Q(b, e) {
      var t = "*" === e;
      t = ha ? t ? b.all : b.all.tags(e.toUpperCase()) : 6 > A && t ? b.all : b.getElementsByTagName(e);
      for (var w = [], B = 0, F = t.length; B < F; ++B) {
        w[B] = t[B];
      }
      return w;
    }
    function N(b, e) {
      var t = [], w = 0, B, F = -1, R, U, S;
      if (9 > A || !b.getElementsByClassName) {
        R = 6 > A ? b.all : b.getElementsByTagName("*");
      } else {
        U = !0;
        R = b.getElementsByClassName(e);
      }
      for (B = R.length; w < B; ++w) {
        S = R[w];
        if (U || (ha || 1 === S.nodeType) && ra(S, e)) {
          t[++F] = S;
        }
      }
      return t;
    }
    function pa(b) {
      return ha ? b.parentElement : b.parentNode;
    }
    function qa(b, e, t, w, B, F) {
      var R, U;
      if (ha) {
        R = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        U = db(2 > b ? Oa(e) : e);
        U = 2 > b ? U.indexOf(e) + b : U.length;
        e.insertAdjacentHTML(R, M(t, w, B));
        e = db(e)[U];
        null != B && ("FONT" === t ? e.nodeType = 3 : (e.nodeType = 1, e.children[0].nodeType = 3));
      } else if (Da) {
        e = I.createElement(M(t, w));
      } else {
        e = F ? I.createElementNS("http://www.w3.org/2000/svg", t) : I.createElement(t);
        if (w) {
          for (R in w) {
            if ((b = w[R]) || 0 === b) {
              switch(R) {
                case "class":
                case "className":
                  Rb(e, b);
                  break;
                case "style":
                  F = e.style;
                  for (U in b) {
                    F[U] = b[U];
                  }
                  break;
                default:
                  eb(e, R, b);
              }
            }
          }
          !C || "a" !== t && "A" !== t || !w.href || w.tabindex || eb(e, "tabindex", $a, !0);
        }
        Ea || null != B && ka(e, B);
      }
      return e;
    }
    function ja(b, e) {
      var t;
      if (ha) {
        return qa(2, b, "FONT", v, e);
      }
      t = I.createTextNode("" + e);
      b.appendChild(t);
      return t;
    }
    function ka(b, e) {
      C ? (b.firstChild && (b.innerHTML = ""), ja(b, e)) : b.textContent = e;
    }
    function va(b) {
      return "A" === ya(b) && Z(b, "href", !0);
    }
    function ya(b) {
      return b.tagName.toUpperCase();
    }
    function ca(b, e, t) {
      if (8 > C || 5.5 > A) {
        e = ib(e);
      }
      b = b.getAttribute(e);
      return !t && C && "tabindex" === e ? b === $a ? "" : "0" === b ? "" : "" === b ? "-1" : b : b || "";
    }
    function ba(b, e, t, w) {
      if (!w && C) {
        if ("tabindex" === e) {
          if ("-1" === t) {
            V(b, e, !0);
            return;
          }
          !t && va(b) && (t = $a);
        } else {
          "href" === e && ca(b, "tabindex", !0) !== $a && "A" === ya(b) && ba(b, "tabindex", $a, !0);
        }
      }
      if (8 > C || 5.5 > A) {
        7.2 <= C && "tabindex" === e ? e = "tabIndex" : e = ib(e);
      }
      b.setAttribute(e, t);
    }
    function V(b, e, t) {
      if (!t && C) {
        if ("tabindex" === e) {
          ca(b, e, !0) !== $a && va(b) && ba(b, e, $a, !0);
          return;
        }
        "href" === e && ca(b, "tabindex", !0) === $a && V(b, "tabindex", !0);
      }
      if (8 > C || 5.5 > A) {
        e = ib(e);
      }
      b.removeAttribute(e);
    }
    function Z(b, e, t) {
      if (!t && C && "tabindex" === e && va(b)) {
        return ca(b, e, !0) !== $a;
      }
      if (8 > C || 5.5 > A) {
        if (C && wa[e]) {
          return b = b.outerHTML.split(">")[0] + ">", -1 !== b.indexOf(" " + e + ">") || -1 !== b.indexOf(" " + e + "=") || -1 !== b.indexOf(" " + e + " ");
        }
        if (C && "tabindex" === e) {
          return "0" !== b.getAttribute(e);
        }
        if (C) {
          return !!b[ib(e)];
        }
        e = ib(e);
      }
      return 6 <= A && 8 > A ? (e = b.getAttributeNode(e)) && e.specified : b.hasAttribute ? b.hasAttribute(e) : null != b.getAttribute(e);
    }
    function da(b, e) {
      9 > A ? b.className = e : b.setAttribute("class", e);
    }
    function ra(b, e) {
      return -1 !== (" " + b.className + " ").indexOf(" " + e + " ");
    }
    function ma(b, e, t) {
      if (8 > C || 5.5 > A) {
        e = ib(e);
      }
      b.style[e] = t;
    }
    function sa(b) {
      var e;
      if (5.5 > A) {
        e = "";
        b = b.style.cssText.split(";");
        for (var t = -1, w, B; w = b[++t];) {
          B = w.split(":")[0], e += ";" + B.toLowerCase() + ":" + w.substr(B.length + 1);
        }
        return e.substr(1);
      }
      return b.style.cssText;
    }
    var ha = 5 > A, Da, Ea, wa;
    qb = J("html")[0];
    jb = J("head")[0];
    ub = function(b) {
      return aa[b] || I[b] || I.getElementById(b);
    };
    vb = J;
    Fc = function(b) {
      return N(I, b);
    };
    mb = Q;
    Gc = N;
    Oa = pa;
    db = function(b) {
      b = ha ? b.children : b.childNodes;
      for (var e = [], t = b.length; t;) {
        e[--t] = b[t];
      }
      return e;
    };
    Hc = function(b) {
      var e = !(7.03 < C && 7.2 > C) && b.children;
      b = e ? e : b.childNodes;
      for (var t = [], w = b.length, B = -1, F; w;) {
        if (F = b[--w], ha) {
          3 !== F.nodeType && (t[++B] = F);
        } else {
          if (e || 1 === F.nodeType) {
            t[++B] = F;
          }
        }
      }
      return t;
    };
    fc = function(b) {
      return ha ? b.children.length ? b.children[0] : null : b.firstChild;
    };
    Pa = function(b, e, t, w, B) {
      e = qa(2, b, e, t, w, B);
      ha || (b.appendChild(e), Ea && null != w && (9 > A ? ja(e, w) : ka(e, w)));
      return e;
    };
    Qb = function(b, e, t, w, B) {
      e = qa(0, b, e, t, w, B);
      ha || (pa(b).insertBefore(e, b), Ea && null != w && (9 > A ? ja(e, w) : ka(e, w)));
      return e;
    };
    Ic = ja;
    gc = function(b, e) {
      var t, w;
      if (ha) {
        return qa(1, b, "FONT", v, e);
      }
      w = I.createTextNode("" + e);
      (t = b.nextSibling) ? Oa(b).insertBefore(w, t) : Oa(b).appendChild(w);
      return w;
    };
    Ca = function(b) {
      if (ha) {
        b.outerHTML = "";
      } else {
        return 5.5 > A && 1 === b.nodeType && (b.style.filter = ""), Oa(b).removeChild(b), b;
      }
    };
    nb = function(b, e) {
      if (b.contains) {
        return b.contains(e);
      }
      for (; e && e !== qb;) {
        if (e = Oa(e), b === e) {
          return !0;
        }
      }
    };
    Jc = function(b) {
      var t;
      function e(w, B, F, R) {
        var U, S, h, g;
        switch(w.nodeType) {
          case 1:
            if (!R) {
              U = w.tagName;
              B[++F] = "<" + U;
              S = w.attributes;
              h = S.length;
              if (h) {
                for (var a = 0; a < h; ++a) {
                  g = S[a];
                  g.specified && (B[++F] = " " + g.name + '="' + K(g.value).replace('"', "&quot;") + '"');
                }
              }
              B[++F] = ">";
            }
            for (S = w.firstChild; S; S = S.nextSibling) {
              F = e(S, B, F, !1);
            }
            R || !w.firstChild && -1 !== "BR,HR,LINK,IMG,META".indexOf(U.toUpperCase()) || (B[++F] = "</" + U + ">");
            break;
          case 3:
          case 4:
            B[++F] = K(w.nodeValue);
        }
        return F;
      }
      if (419.3 >= la) {
        t = [];
        e(b, t, -1, !0);
        b = t.join("");
        b = b.split("\u00a0").join("&nbsp;");
      } else {
        b = b.innerHTML, ha && (b = b.split("<FONT>").join("").split("</FONT>").join(""));
      }
      return b.split("\r\n").join("\n").split("\r").join("\n");
    };
    Kc = function(b) {
      return ha ? b.innerHTML : 1 === b.nodeType ? C ? b.innerText : b.textContent : b.nodeValue;
    };
    Da = 9 > A;
    Ea = Da;
    Ja = ya;
    Ga = ca;
    eb = ba;
    Ya = V;
    fb = Z;
    Lc = function(b) {
      return b.className;
    };
    Rb = da;
    Za = ra;
    ob = function(b, e) {
      var t;
      if (!ra(b, e)) {
        if (t = b.className) {
          t += " ";
        }
        da(b, t + e);
      }
    };
    hc = function(b, e) {
      var t;
      if (ra(b, e)) {
        t = b.className.split(" ");
        t.splice(t.indexOf(e), 1);
        da(b, t.join(" "));
      }
    };
    wa = {disabled:!0};
    Va = ma;
    Fb = function(b, e) {
      var t, w = -1, B, F;
      if (5.5 > A || 7.1 > C) {
        if (A) {
          if (t = sa(b)) {
            for (t = t.split(";"); B = t[++w];) {
              ma(b, B.split(":")[0], "");
            }
            w = -1;
          }
        } else {
          b.setAttribute("style", "");
        }
        if (e) {
          for (t = e.split(";"); B = t[++w];) {
            F = B.split(":")[0];
            ma(b, F, B.substr(F.length + 1));
          }
        }
      } else {
        9 > C || 1 > T ? e ? b.setAttribute("style", e) : b.removeAttribute("style") : b.style.cssText = e;
      }
    };
    Mc = sa;
    Ta.splice(0, 0, function() {
      function b(S) {
        S = db(S);
        for (var h = S.length, a, g, d; h;) {
          if (a = S[--h], g = a.nodeType, 8 === g) {
            e && R.push(a);
          } else if (1 === g) {
            switch(g = Ja(a), "/" === g.charAt(0) && (g = g.substr(1), U[g] = !0), g) {
              case "STYLE":
                if (7.2 <= C && 9 > C) {
                  break;
                }
              case "LINK":
                ha || w || nb(jb, a) || F.push(a);
                break;
              case "META":
                g = Ga(a, "name") || Ga(a, "property");
                for (d = B.length; d;) {
                  if (0 === g.indexOf(B[--d])) {
                    R.push(a);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Wc || fb(a, "async")) {
                  break;
                }
                if (t) {
                  a.innerText = "";
                  t = !1;
                  break;
                }
              case "NOSCRIPT":
                if (fb(a, "skip-cleanup")) {
                  break;
                }
              case "!":
                R.push(a);
                break;
              case "SOURCE":
                aa.HTMLSourceElement || R.push(a);
                break;
              default:
                U[g] ? R.push(a) : db(a).length && b(a);
            }
          }
        }
        for (; F[0];) {
          jb.appendChild(F.pop());
        }
        for (; R[0];) {
          Ca(R.pop());
        }
      }
      hc(qb, "nojs");
      rb = ub("jsMain");
      var e = !(8 > C || 5 > A || sb || cb), t = yc, w = 7 > A, B = ["og:", "twitter:", "fb:"], F = [], R = [], U = {};
      b(qb);
    });
  })();
  (function() {
    function M() {
      return z ? H ? 2 : p ? 3 : 1 : 0;
    }
    function K(c) {
      Ka(aa, "load", K);
      K = v;
      Q(Ta, c, !0);
      Qa = Ta = v;
    }
    function J(c, f) {
      zb(function() {
        var q = ba(c);
        f(q);
        q.addListener(f);
        return !0;
      });
    }
    function Q(c, f, q) {
      for (var l = 0; l < c.length; ++l) {
        !0 === c[l](f) && (c.splice(l, 1), --l);
      }
      q && (c.length = 0);
    }
    function N(c, f, q) {
      Ta || Z.length || Y(pa);
      Z.push(c, f, q);
    }
    function pa() {
      var c = Z, f;
      for (Z = []; f = c.shift();) {
        Q(f, c.shift(), c.shift());
      }
    }
    function qa(c, f, q, l) {
      var x, O, na, gb;
      if (ha) {
        c.removeEventListener(f, q, l ? da ? l : l.capture || !0 === l : !1);
      } else {
        x = ra[f];
        O = !!l === l ? l : l ? !!l.capture : !1;
        na = "on" + f;
        if (x) {
          if (Da) {
            Ea.push(c, f, q, l);
          } else {
            f = 0;
            for (l = x.length; f < l; f += 3) {
              x[f] === c && (x[f + 1] === q && x[f + 2] === O ? x.splice(f, 3) : gb = !0);
            }
            gb || (ma ? c.detachEvent(na, ja) : A ? (c[na] = Wa, c[na] = null) : delete c[na]);
          }
        }
      }
    }
    function ja(c) {
      var f = c || event, q = f.type, l, x, O, na, gb;
      c = ra[q];
      q = "on" + q;
      l = 0;
      x = c.length;
      ++Da;
      5 > A ? f = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : A ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : sa && (f.I = f.stopPropagation, f.stopPropagation = function() {
        O = !0;
      });
      for (; l < x; l += 2) {
        na = c[l];
        if (na === this) {
          gb = c[l + 1];
          5.5 > A ? (na[q] = gb, na[q](f), na[q] = ja) : gb.call(na, f);
        } else {
          7.2 > C && this === I && na === aa && c[l + 1].call(na, f);
        }
      }
      if (A) {
        return f.preventDefault = f.stopPropagation = Wa, f.preventDefault = f.stopPropagation = v, f.returnValue;
      }
      sa && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && f.target.getAttribute("href") && (wa = !0), O && !wa && f.I(), f.I = f.stopPropagation = v);
      --Da;
      if (0 === Da) {
        for (c = Ea; c.length;) {
          qa(c.shift(), c.shift(), c.shift(), c.shift());
        }
      }
      function bz() {
        event.returnValue = !1;
      }
      bz = !1;
    }
    function ka() {
      var c = 9 === V.offsetWidth;
      Hb !== c && N(vc, Hb = c);
    }
    function va() {
      !Ta && ia && (xb(ia), ia = Y(ya));
    }
    function ya() {
      ia = 0;
      Q(ea);
    }
    function ca(c) {
      Ta || Q(za, c);
    }
    var ba = aa.matchMedia, V, Z = [], da, ra, ma, sa, ha, Da, Ea, wa, b, e, t, w, B, F, R, U, S, h, a, g, d, m, n, z, p, H, r, E, L, ea, ia, za, Fa, k, u, G, D, X, y, P;
    Ta.push(function() {
      J = v;
      V = Pa(oa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Qa(function() {
        Z.length && Y(pa);
      });
    });
    fa = function(c, f, q, l) {
      var x, O, na;
      if (ha) {
        c.addEventListener(f, q, l ? da ? l : l.capture || !0 === l : !1);
      } else {
        x = ra[f];
        O = !!l === l ? l : l ? !!l.capture : !1;
        l = "on" + f;
        if (x) {
          f = 0;
          for (na = x.length; f < na; f += 3) {
            if (x[f] === c && x[f + 1] === q && x[f + 2] === O) {
              return;
            }
          }
          x.push(c, q, O);
        } else {
          x = ra[f] = [c, q, O];
        }
        ma ? c.attachEvent(l, ja) : (q = c[l], q !== ja && ("function" === typeof q && x.unshift(c, q, !1), c[l] = ja));
      }
    };
    Ka = qa;
    da = !A && !sb && (new Sc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
    ra = {};
    ma = !1;
    sa = 525.13 > la;
    ha = !sa && !sb && oa.addEventListener;
    Da = 0;
    Ea = [];
    sa && qb.addEventListener("click", function(c) {
      if (wa) {
        return wa = !1, c.preventDefault(), !1;
      }
    });
    Qa = function(c) {
      Ta.push(c);
    };
    wb = function(c) {
      e && e.push(c);
    };
    if (419.3 >= la) {
      b = function() {
        var c;
        if (b) {
          c = I.readyState;
          "loaded" === c || "complete" === c ? (b = v, K()) : Y(b);
        }
      };
      Y(b);
    } else {
      fa(aa, "load", K);
    }
    if (A || !cb && 1.8 > T) {
      fa(aa, "unload", function(c) {
        Q(e, c, !0);
      });
      e = [];
    }
    zb = function(c) {
      vc.push(c);
    };
    Qa(function() {
      ka();
      Pb(ka);
    });
    Sb = function(c, f) {
      if (t) {
        fa(c, "focusin", f);
      } else if (w) {
        fa(c, "DOMFocusIn", f);
      } else {
        if (F) {
          h || (h = $b(d, 333));
        } else if (B || R) {
          fa(I, "focus", S, !0);
        } else {
          return;
        }
        for (var q = U, l = 0, x = q.length; l < x; l += 2) {
          if (q[l] === c && q[l + 1] === f) {
            return;
          }
        }
        q.push(c, f);
      }
    };
    Nc = function(c, f) {
      if (t) {
        fa(c, "focusin", f);
      } else if (w) {
        fa(c, "DOMFocusIn", f, !1);
      } else {
        for (var q = U, l = 0, x = q.length; l < x; l += 2) {
          if (q[l] === c && q[l + 1] === f) {
            q.splice(l, 2);
            q.length || (F ? h = Cc(h) : (B || R) && Ka(I, "focus", S, !0));
            break;
          }
        }
      }
    };
    t = 6 <= A || Xa || 52 <= T || 15 <= ta || 534 <= la || 5 <= Ba || rc || 4 <= Sa || 4 <= Kb || 11.6 <= W(8) || 12 <= W(9);
    w = 8 <= C || ta || Sa || Kb || la || Ba;
    B = 8 > C;
    F = 6 > A;
    R = 52 > T || kb;
    if (R || B) {
      U = [];
      S = function(c) {
        var f = U, q = B ? I.activeElement : c.target, l = 0, x = f.length, O, na;
        if (B) {
          O = c;
          c = {type:"focusin", target:q, cancelable:!0, preventDefault:function() {
            O.preventDefault();
          }, stopPropagation:function() {
            O.stopPropagation();
          }};
        }
        for (; l < x; l += 2) {
          na = f[l];
          (na === q || nb(na, q)) && f[l + 1].call(na, c);
        }
      };
    } else if (F) {
      U = [];
      d = function() {
        g = aa.onerror;
        aa.onerror = m;
        var c = I.activeElement;
        if (a !== c) {
          a = c;
          for (var f = U, q = 0, l = f.length, x, O; q < l; q += 2) {
            if (x = f[q], x === c || nb(x, c)) {
              O = x.onmousemove, x.onmousemove = f[q + 1], x.onmousemove({type:"focusin", target:c, preventDefault:Wa, stopPropagation:Wa}), O ? x.onmousemove = O : (x.onmousemove = Wa, x.onmousemove = null);
            }
          }
        }
        aa.onerror = g;
        g = v;
      };
      5 > A && (_wdb_watchactiveelm = d, d = "_wdb_watchactiveelm()");
      m = function() {
        aa.onerror = g;
        g = a = v;
        return !0;
      };
    }
    jc = function(c) {
      Ua && Ua.push(c);
    };
    n = 60 > T || kb;
    if (89 <= T || 89 <= ta || tb && 79 <= sc || ba && (ba("(forced-colors:none)").matches || ba("(forced-colors:active)").matches)) {
      kc = !0, J("(forced-colors:active)", function(c) {
        z = c.matches;
        La = M();
        N(Ua, La);
      });
    } else if (10 <= A || Xa || tb && sc) {
      kc = !0, J("(-ms-high-contrast:black-on-white)", function(c) {
        z = p = c.matches;
        La !== M() && (La = M(), N(Ua, La));
      }), J("(-ms-high-contrast:white-on-black)", function(c) {
        z = H = c.matches;
        La !== M() && (La = M(), N(Ua, La));
      }), J("(-ms-high-contrast:active)", function(c) {
        z = c.matches;
        La !== M() && (La = M(), N(Ua, La));
      });
    } else if (tb && (A || T && 0 <= Ia.conpare(Ma, "1.8.1") || kb)) {
      r = function() {
        function c(l, x) {
          var O;
          if (x && "transparent" === l) {
            return 382.5;
          }
          if ("#" === l.charAt(0)) {
            return parseInt("0x" + l.substr(1, 2), 16) + parseInt("0x" + l.substr(3, 2), 16) + parseInt("0x" + l.substr(5, 2), 16);
          }
          O = l.split("(")[1].split(",");
          return bb(O[0]) + bb(O[1]) + bb(O[2]);
        }
        var f = I.defaultView, q;
        q = f ? f.getComputedStyle(V, null) : V.currentStyle;
        f = (q && q.color || "").split(" ").join("");
        q = (q && q.backgroundColor || "").split(" ").join("");
        f && (z = "#123456" !== f && "rgb(18,52,86)" !== f, p = c(f) < c(q, !0), H = c(f) > c(q, !0), La !== M() && (La = M(), N(Ua, La, n)));
      };
      zb(function(c) {
        if (c) {
          return Va(V, "color", "#123456"), Va(V, "backgroundColor", "#123456"), n ? (r(), Ua = v) : Pb(r), r = v, !0;
        }
      });
    } else {
      Ua = M = v;
    }
    Gb = function(c) {
      E.push(c);
    };
    E = [];
    L = 7.5 <= C && 8 > C;
    L && function() {
      for (var c = I.images, f = c.length, q; f;) {
        q = c[--f], q.G = q.src, Ya(q, "src");
      }
    }();
    Qa(function() {
      function c() {
        l ? (x = q[--l], L && eb(x, "src", x.G), wc(f, L ? x.G : x.src)) : Gb = E = v;
      }
      function f(na) {
        Q(E, {C:x, D:na}, !l);
        c();
      }
      var q = I.images || vb("img"), l = q.length, x, O;
      if (12 > C || 532 > la) {
        c();
      } else {
        for (; l;) {
          x = q[--l];
          O = 9 > A ? x.complete : 0 <= x.naturalWidth ? x.naturalWidth : x.width;
          N(E, {C:x, D:O}, !l);
        }
        Gb = E = v;
      }
    });
    ic = function(c) {
      ea.push(c);
    };
    ea = [];
    fa(aa, "resize", va);
    wb(function() {
      ia && pc(ia);
      Ka(aa, "resize", va);
    });
    yb = function(c) {
      za.push(c);
    };
    za = [];
    Fa = 1 > T || 1.2 <= T && 1.8 > T || 7.2 >= C;
    Fa ? Pb(function() {
      var c = aa.pageYOffset;
      k !== c && (k = c, ca({type:"scroll", cancelable:!1, stopPropagation:Wa, preventDefault:Wa}));
    }) : fa(aa, "scroll", ca, {passive:!0});
    wb(function() {
      Fa || Ka(aa, "scroll", ca, {passive:!0});
    });
    Oc = function(c, f) {
      if (u) {
        fa(c, "wheel", f, {passive:!1});
      } else if (G) {
        fa(c, "mousewheel", f, !1);
      } else if (D) {
        fa(c, "MozMousePixelScroll", f, !1);
      } else if (X) {
        for (var q = y, l = 0, x = q.length; l < x; l += 2) {
          if (q[l] === c && q[l + 1] === f) {
            return;
          }
        }
        q.length || fa(I, "DOMMouseScroll", P, !1);
        q.push(c, f);
      }
    };
    Pc = function(c, f) {
      if (u) {
        Ka(c, "wheel", f, {passive:!1});
      } else if (G) {
        Ka(c, "mousewheel", f, !1);
      } else if (D) {
        Ka(c, "MozMousePixelScroll", f, !1);
      } else if (X) {
        for (var q = y, l = 0, x = q.length; l < x; l += 2) {
          if (q[l] === c && q[l + 1] === f) {
            q.splice(l, 2);
            q.length || Ka(I, "DOMMouseScroll", P, !1);
            break;
          }
        }
      }
    };
    u = 9 <= A || Xa || 17 <= T || kb || 31 <= ta || 537.7 <= la || 7 <= Ba;
    G = 6 <= A || Xa || 9 <= C || ta || 522 <= la || Ba;
    D = Eb;
    X = T && 0 <= Ia.conpare(Ma, "0.9.7") && !Eb;
    if (X) {
      y = [];
      P = function(c) {
        for (var f = y, q = c.target, l = 0, x = f.length, O; l < x; l += 2) {
          O = f[l], (O === q || nb(O, q)) && f[l + 1].call(O, c);
        }
      };
    }
  })();
  (function() {
    function M(d) {
      switch(d) {
        case 1:
          return ra;
        case 2:
          return !!ma;
        case 3:
          return !!sa;
        case 4:
          return !!ha;
        case 5:
          return Ea;
        case 6:
          return Da && !ya;
      }
      return !1;
    }
    function K(d) {
      wa(d);
      a && !d && Ca(a);
      wa = b = e = t = w = B = S = h = a = g = v;
    }
    function J(d) {
      I.fonts.load('1.6em "' + d + '"').then(function() {
        var m;
        (m = pa(b)) ? Y(K, m) : Q(!0);
      }, function() {
        lb !== v ? qa(lb) : cc(qa);
      });
    }
    function Q(d) {
      d && (U = Na());
      (d = pa(b, F)) ? K(d) : (d = F, I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (U = Na(), d = !1) : d = d < Na() - U, d ? S ? ja() : va ? K(0) : lb !== v ? qa(lb) : cc(qa) : Y(Q));
    }
    function N() {
      return Pa(oa, 5 > A ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":15 > T ? '"liga=1"' : '"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, V);
    }
    function pa(d) {
      var m = 0, n = -1, z = (Z || !1) && [], p, H, r;
      if (!g) {
        p = -1;
        h = N();
        for (g = []; H = da[++p];) {
          Va(h, "fontFamily", H), g[p] = h.offsetWidth;
        }
      }
      for (5 > A ? h || (h = N()) : Oa(h) || oa.appendChild(h); p = da[++n];) {
        Va(h, "fontFamily", '"' + d + '",' + p);
        r = h.offsetWidth;
        if (Z) {
          z[n] = r;
        } else {
          if (r !== g[n]) {
            m = 9 > A ? r ? 1 : 0 : 1;
            break;
          }
        }
      }
      if (Z && r === z[0] && r === z[1]) {
        for (m = 1, n = -1; 0 <= (r = g[++n]);) {
          if (r === z[0] && r === z[1] && r === z[2]) {
            m = 0;
            break;
          }
        }
      }
      !A && m && w && (h.textContent = w, r = h.offsetWidth, h.textContent = B, m = r === h.offsetWidth ? 2 : 1, h.textContent = V);
      h = Ca(h);
      return m;
    }
    function qa(d) {
      d ? (S = !0, F = ba, ja()) : K(0);
    }
    function ja() {
      var d, m;
      if (e) {
        for (; e.length;) {
          d = e.shift();
          m = e.shift();
          if (M(d)) {
            a = Ac(m, ka, t, a, R);
            return;
          }
        }
      }
      K(0);
    }
    function ka(d) {
      d ? Q(!0) : ja();
    }
    cc = !1 === lb ? function(d) {
      Y(d, !1);
    } : function(d) {
      var n, z;
      function m(p) {
        z && (z = xb(z), lb = p, n.onload = n.onerror = Wa, Y(d, p));
      }
      if (lb !== v) {
        Y(d, lb);
      } else {
        n = new Image();
        z = Y(m, !1, 99);
        n.onerror = function() {
          m(!1);
        };
        n.onload = function() {
          m(1 === n.width * n.height);
        };
        n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > A && Qa(function() {
      var d = Pa(oa, "div");
      Fb(d, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      tc = 1 < d.offsetHeight;
      Ca(d);
    });
    wc = function(d, m) {
      function n() {
        p || !H || z.complete ? (Y(d, !!z.width), z.onerror = z.onload = Wa, z = d = v) : (--H, Y(n));
      }
      var z = new Image(), p, H = 99;
      z.onerror = function() {
        p = !0;
      };
      z.onload = function() {
        p = !0;
      };
      z.src = m;
      Y(n);
    };
    xc = function(d, m, n, z, p, H, r) {
      wa = d;
      b = m;
      e = n;
      t = z;
      w = p;
      B = H;
      F = R = r || ca;
      W(10) ? Y(K, 1) : Yc ? Y(K, 0) : !I.fonts || 603 > la || 11 > Ba ? Q(!0) : J(b);
    };
    var va = 9 > A, ya = 6 > ta || C || 530 > la || 5 > Ba || Aa(10), ca = 5E3, ba = 500, V = "mmmmmmmmmmlliiiiiiiii", Z = 9 <= ta && 18 > ta || 3 > Sa || 7 > Ba || la && 0 >= Ia.conpare(Ma, "536.11"), da = ["monospace", "sans-serif", "serif"], ra = 14 <= Xa || 36 <= ta || 39 <= T || 3 <= kb || 602 <= la && 0 <= Ia.conpare("10.12", Vc) || 10 <= Ba, ma = 6 <= ta || T && 0 <= Ia.conpare(Ma, "1.9.2") || kb || 533 <= la || 5 <= Ba || 4.4 <= Sa || 11.5 <= C || Xa || 9 <= W(2) || 10 <= W(3), sa = 2 <= 
    ta || Eb || kb || 525 <= la || 4 <= Ba || 2.2 <= Sa || 10.1 <= C || Xa || 9 <= W(2) || 10 <= W(3), ha = sa, Da = 5.1 <= tb && 5.2 >= tb && 40 > ta || 6 <= tb && 6.1 > tb && 51 > ta || 37 > ta || 525 <= la || 3.1 <= Ba || 3 <= Sa || 11.5 <= C, Ea = 4 <= W(2) || 10 <= W(3), wa, b, e, t, w, B, F, R, U, S, h, a, g;
  })();
  (function() {
    var K, J, Q, N, pa, qa, ja, ka, va, ya, ca, ba, V, Z, da, ra, ma, sa, ha, Da, Ea, wa, b, e, t, w, B, F, R, U, S, h;
    function M(a) {
      var g, d, m, n;
      if (2 !== a) {
        g = Fc("ico");
        d = 0;
        m = g.length;
        if (m) {
          if (1 === a) {
            for (; d < m; ++d) {
              a = g[d];
              n = Jc(a);
              if (n = h[n]) {
                a.innerHTML = n;
              }
            }
          } else {
            if (R && !F) {
              aa.VectorIconFallback = bz, Nb(xa + "js/vector-icon-svg-fallback.js");
            } else {
              for (; d < m; ++d) {
                Ca(g[d]);
              }
            }
          }
        }
      }
      function bz() {
        Ob(xa + "js/vector-icon-svg-fallback.js");
        return [h, g, Pa, Kc, F];
      }
      bz = !1;
    }
    Gb(function(a) {
      var g = a.C, d;
      a = a.D;
      d = Oa(g);
      !Za(d, "aBodyRoot") && a ? ob(d, "js-image-has-been-loaded") : a || Ga(g, "alt") || "lazy" === Ga(g, "loading") || Va(g, "display", "none");
    });
    cb && (Ta.splice(1, 0, function() {
      for (var a = Gc(rb, "RichLink-sep"), g, d, m, n, z, p; g = a.shift();) {
        for (g = db(g); d = g.shift();) {
          if ("A" === Ja(d) && !d.innerHTML) {
            for (; m = g.shift();) {
              if (1 === m.nodeType) {
                if ("A" === Ja(m)) {
                  break;
                }
                for (n = mb(m, "A"); z = n.shift();) {
                  for (p = db(z); p.length;) {
                    z.parentNode.insertBefore(p.shift(), z);
                  }
                  Ca(z);
                }
              }
              d.appendChild(m);
            }
          }
        }
      }
    }), Ta.splice(2, 0, function() {
      for (var a = vb("A"), g, d; g = a.shift();) {
        "A" !== Ja(g) || g.innerHTML || (d = g.nextSibling && g.nextSibling.firstChild) && d.href === g.href && Ca(g);
      }
    }));
    if (T && 0 > Ia.conpare(Ma, "0.9.5")) {
      Bc = !0;
      Qa(function() {
        fa(I, "keydown", qa);
        fa(I, "keyup", ja);
        Sb(oa, ka);
        cb || (fa(aa, "blur", V), fa(oa, "click", ba));
      });
      qa = cb ? function(a) {
        16 === a.keyCode ? K = !0 : 9 === a.keyCode && N && va(N, !0) && (N.blur && N.blur(), a.stopPropagation(), a.preventDefault(), Y(ca));
      } : function(a) {
        16 === a.keyCode ? K = !0 : 9 === a.keyCode && (J = Na());
      };
      ja = function(a) {
        16 === a.keyCode && (K = !1);
      };
      ka = cb ? function(a) {
        N = a.target;
      } : function(a) {
        var g = a.target;
        if (N === g) {
          Q = v;
        } else if (Q) {
          g === Q ? (a.stopPropagation(), ca(!0)) : (g.blur && da(g), a.preventDefault(), ca());
        } else {
          if (a = N) {
            N = v, da(a);
          }
          Q = g;
          ca(!0);
        }
      };
      va = function(a, g) {
        var d = Na(), m = oa, n = "nextSibling", z = "firstChild", p;
        K && (g || d - 99 < J && J <= d) && (n = "previousSibling", z = "lastChild");
        for (Q = v; a !== m;) {
          if (p) {
            d = a;
            p = !1;
          } else {
            d = a[n];
          }
          if (d) {
            if (1 === d.nodeType) {
              if (ya(d)) {
                return Q = d, !0;
              }
              a = (p = d[z]) || d;
            } else {
              a = d;
            }
          } else {
            a = a.parentNode;
          }
        }
      };
      ya = function(a, g) {
        var n;
        function d() {
          return "-1" !== Ga(a, "tabindex");
        }
        function m() {
          return 0 < a.offsetHeight * a.offsetWidth;
        }
        if (a.focus) {
          switch({A:g ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ja(a)]) {
            case 1:
              if (fb(a, "href") && d() && m()) {
                return !0;
              }
              break;
            case 2:
              if (d() && !fb(a, "disabled") && m()) {
                return !0;
              }
              break;
            case 3:
              if (d() && !fb(a, "disabled") && m()) {
                return !0;
              }
              break;
            default:
              if ((n = Ga(a, "tabindex")) && "-1" !== n && m()) {
                return !0;
              }
          }
        }
      };
      ca = function(a) {
        pa = 0;
        Q && (cb || fa(Q, "blur", Z), N = Q, Q = v, a || N.focus());
      };
      if (!cb) {
        ba = function(a) {
          var g = a.target, d;
          if (N && ya(g, !0)) {
            d = N;
            N = v;
            da(d);
            Q = g;
            a.stopPropagation();
            a.preventDefault();
            ca();
          }
        };
        V = function(a) {
          a.target === I && (Q = v);
        };
        Z = function(a) {
          a = a.target;
          Ka(a, "blur", Z);
          N === a && va(a) && (pa || (pa = Y(ca)));
        };
        da = function(a) {
          Ka(a, "blur", Z);
          a.blur();
        };
      }
    }
    C && Qa(function() {
      for (var a = mb(oa, "a"), g = a.length, d = 0, m; d < g; ++d) {
        m = a[d], "-1" === Ga(m, "tabindex", !0) ? Ya(m, "tabindex", !0) : fb(m, "href", !0) && !fb(m, "tabindex", !0) && eb(m, "tabindex", $a, !0);
      }
      a = mb(oa, "input");
      d = 0;
      for (g = a.length; d < g; ++d) {
        m = a[d], "hidden" === Ga(m, "type") && Ya(m, "tabindex", !0);
      }
    });
    if (7.5 <= C && 8 > C) {
      sa = I.activeElement;
      Qa(function() {
        fa(I, "keydown", ha);
        fa(I, "keyup", Da);
        Sb(oa, Ea);
        fa(aa, "blur", t);
        fa(oa, "click", e);
      });
      ha = function(a) {
        16 === a.keyCode ? ra = !0 : 9 === a.keyCode && Na();
      };
      Da = function(a) {
        16 === a.keyCode && (ra = !1);
      };
      Ea = function(a) {
        var g = a.target, d, m, n, z, p, H;
        if (sa === g) {
          ma = v;
        } else {
          function bz() {
            d = sa;
            Na();
            m = oa;
            n = "nextSibling";
            z = "firstChild";
            ra && (n = "previousSibling", z = "lastChild");
            for (ma = v; d !== m;) {
              if (H) {
                p = d;
                H = !1;
              } else {
                p = d[n];
              }
              if (p) {
                if (1 === p.nodeType) {
                  if (wa(p)) {
                    ma = p;
                    d = !0;
                    return;
                  }
                  d = (H = p[z]) || p;
                } else {
                  d = p;
                }
              } else {
                d = d.parentNode;
              }
            }
            d = void 0;
          }
          bz();
          bz = !1;
          d ? g !== ma && (a.stopPropagation(), a.preventDefault(), g.blur(), ma.focus(), b()) : sa = g;
        }
      };
      wa = function(a, g) {
        var m;
        function d() {
          return 0 < a.offsetHeight * a.offsetWidth;
        }
        if (a.focus) {
          switch({A:g ? 0 : 1, INPUT:2, OBJECT:3, EMBED:3, IFRAME:3, TEXTAREA:3, BUTTON:3, SELECT:3}[Ja(a)]) {
            case 1:
              if (fb(a, "href") && d()) {
                return !0;
              }
              break;
            case 2:
              if ("hidden" !== Ga(a, "type") && d()) {
                return !0;
              }
              break;
            case 3:
              if (d()) {
                return !0;
              }
              break;
            default:
              if ((m = Ga(a, "tabindex")) && "-1" !== m && d()) {
                return !0;
              }
          }
        }
      };
      b = function(a) {
        ma && (sa = ma, ma = v, a || sa.focus());
      };
      e = function(a) {
        a = a.target;
        wa(a, !0) && (ma = a, b(!0));
      };
      t = function(a) {
        a.target === I && (ma = v);
      };
    }
    5.5 <= A && 8 > A && Ua && jc(function(a) {
      for (var g = mb(oa, "a"), d = g.length, m = 0; m < d; ++m) {
        g[m].hideFocus = !a;
      }
    });
    if (!kc && Ua) {
      B = function() {
        w = Pa(jb, "link", {type:"text/css", rel:"stylesheet", media:"screen", href:xa + "css/" + Lb + "hc/" + bc});
        (uc || 5.5 <= A && 9 > A && tc) && ob(oa, "js-canuse-css-rotate-when-forced-colors-mode");
        B = v;
      };
      jc(function(a) {
        a && !w ? B() : w && (a ? jb.appendChild(w) : Ca(w));
      });
    }
    zb(function(a) {
      if (a) {
        return xc(M, "web-doc-base", [1, xa + "iconfont/woff2.css", 2, xa + "iconfont/woff.css", 3, xa + "iconfont/ttf.css", 5, xa + "iconfont/eot.css", 6, xa + "iconfont/svg.css"], "js-myIconFont-testCssReady", U, S), M = v, !0;
      }
    });
    F = 8 <= W(8) && 9 > C;
    R = 9 <= A || Xa || 1.8 <= T || kb || 8 <= W(8) || 9 <= W(9) || 3 <= W(22) || Tc || 312.6 <= la && 312.7 >= la || 419.3 <= la || Ba;
    U = "IE";
    S = "\ueadb";
    h = {YouTube:"\ud83d\udcfa", Windows:"\ud83e\ude9f", Twitter:"\ud83d\udd4a", Samsung:"\ud83e\ude90", Safari:"\ud83e\udded", Opera:"\ueade", Netscape:"\ue901", Linux:"\ud83d\udc27", IE:"\ueadb", Github:"\ueab0", Firefox:"\ud83e\udd8a", Edge:"\ueadc", Chrome:"\uead9", Browser:"\ud83c\udf10", Apple:"\ud83c\udf4e", Android:"\ud83e\udd16"};
  })();
  (function() {
    function M(k) {
      var u = b.length, G, D, X, y, P, c, f;
      if (13 === (k.keyCode || k.Z) || k.type !== e) {
        for (; u;) {
          P = b[--u];
          if (P.B === this || P.m === this) {
            u = P.B;
            c = G = P.m;
            if (P.M) {
              if (Va(u, "width", P.X), u.src = P.W, Rb(c, P.R), u = P.H) {
                Fb(u, P.P), hc(u, "js-captioned-thumbnail__large");
              }
            } else {
              if (D = P.K) {
                delete P.K;
                if (P.J) {
                  for (; G = Oa(G);) {
                    if (!Za(G, "caption")) {
                      f = Ja(G);
                      if ("DIV" === f || "P" === f || "BLOCKQUOT" === f || "LI" === f || "DD" === f || "TD" === f || "TH" === f || "FORM" === f || "PRE" === f) {
                        break;
                      }
                    }
                  }
                  G = (G.offsetWidth | 0) - 4;
                  1600 < G && (G = 1600);
                  if (2 === P.J) {
                    D = D.split("=");
                    f = D.length;
                    if (X = D[f - 1]) {
                      (y = bb(X.substr(1))) && X === "s" + y ? D[f - 1] = "w" + G : D[f] = "w" + G;
                    }
                    D = D.join("=");
                  } else {
                    D = D.split("/");
                    f = D.length;
                    if (X = D[f - 2]) {
                      (y = bb(X.substr(1))) && X === "s" + y ? D[f - 2] = "w" + G : D.splice(f - 1, 0, "w" + G);
                    }
                    D = D.join("/");
                  }
                }
                P.U = D;
              }
              P.R = Lc(c);
              ob(c, "js-pica-thumbnail__large");
              Va(u, "width", "");
              u.src = P.U;
              if (u = P.H) {
                Fb(u, ""), ob(u, "js-captioned-thumbnail__large");
              }
            }
            P.M = !P.M;
            break;
          }
        }
        K(k);
      }
    }
    function K(k) {
      k.preventDefault();
      k.stopPropagation();
    }
    function J(k) {
      var u = z;
      if (Hb) {
        if (p && !u) {
          if (Na() < p) {
            return;
          }
          p = v;
        }
        7 === k ? H = 0 : (H && (H = xb(H)), m = ac());
        u ? (z = Q(v, u[0], u[1])) || (p = Na() + 99) : Q();
      } else {
        z = v;
      }
    }
    function Q(k, u, G) {
      function D(ab) {
        var lc, Ib;
        c = ab;
        if (g) {
          f = g + ":translate" + (n ? "3D(0," : "(0,") + ab + (n ? "px,0)" : "px)") + ";-webkit-overflow-scrolling:touch";
        } else if (0 !== ab) {
          if (F || R) {
            lc = S.offsetWidth;
          }
          f = F ? "position:fixed;width:" + lc + "px;top:" + (ab - X + x) + "px" : U ? "top:" + ab + "px" : "position:absolute;top:" + ab + "px;left:0";
          if (R && f) {
            Ib = 8 > A ? " " : ",";
            f += ";clip:rect(" + (0 > ab ? -ab + "px" + Ib + lc + "px" + Ib + Ha : "0" + Ib + lc + "px" + Ib + (ab + Ha < Tb ? Ha : Tb - ab)) + "px" + Ib + "0)";
          }
        }
      }
      var X = m, y = h, P = S.offsetTop === y.offsetTop, c = 0, f = "", q = !0, na, gb, Ha, Tb, pb, Ab, Ub, Vb, Qc, $c, Bb, Cb;
      if (P) {
        for (var l = 0, x = 0, O = y; O && O !== oa;) {
          x += O.offsetTop, O = O.offsetParent;
        }
        c = d;
        na = 11 > A ? qb.offsetHeight : aa.innerHeight;
        gb = y.offsetHeight;
        Ha = a.offsetHeight;
        Tb = Ha < gb ? gb : Ha;
        pb = X;
        Ab = pb + na;
        Ub = x;
        Vb = Ub + Tb;
        Qc = x + c;
        $c = Qc + Ha;
        y = pb < Ub ? Ub : pb;
        O = Vb < Ab ? Vb : Ab;
        Bb = O - y;
        pb = Vb <= pb;
        Ab = Ab <= Ub;
        if (u !== v) {
          q = x + u;
          k = q + G;
          if (pb || Ab) {
            return na <= G ? Cb = x : Cb = pb ? Vb - G : x + G - na, p = v, aa.scroll(0, Cb), z;
          }
          Ha <= Bb ? l = 3 : G <= Bb ? Ha - u <= Bb ? l = 2 : y <= q && k <= O ? y < x + c && (l = 4) : l = y <= q && q <= O ? 5 : y <= k && k <= O ? 4 : k < y ? 4 : 5 : l = 4;
          q = !1;
        } else {
          k !== v ? Ha <= Bb ? (l = 7, q = !1) : (c -= 60 * k, l = O - x - Ha, Cb = y - x, c < l ? c = l : Cb < c && (c = Cb), l = 6) : gb <= Ha || (pb ? l = 1 : Ab || (Ha <= Bb ? l = 3 : y < Qc ? l = 3 : $c < O ? l = 2 : X < x + Ha - Bb || (l = 2)));
        }
        switch(l) {
          case 0:
            D(0);
            break;
          case 1:
            D(Tb - Ha);
            break;
          case 2:
            D(O - x - Ha);
            break;
          case 3:
            D(y - x);
            break;
          case 4:
            D(y - x - u);
            break;
          case 5:
            D(O - x - (u + G));
            break;
          case 6:
            D(c);
        }
      }
      Fb(a, f);
      d = c;
      return P && q;
    }
    function N(k) {
      var u;
      if (Hb && (T && (m = ac()), this !== k.target)) {
        u = Yb(k.deltaY) ? k.deltaY : Yb(k.wheelDeltaY) ? k.wheelDeltaY / 120 : Yb(k.wheelDelta) ? k.wheelDelta / -120 : k.detail / ("MozMousePixelScroll" === k.type ? 45 : 1);
        u && Q(9 >= u ? -9 >= u ? -3 : u : 3) && (k.preventDefault(), k.stopPropagation());
      }
    }
    function pa(k) {
      var u, G, D, X, y;
      if (Hb) {
        u = T && 0 > Ia.conpare(Ma, "0.9.4");
        G = k.target;
        k = a;
        D = 0;
        if (nb(k, G)) {
          if (g) {
            u = G.getBoundingClientRect();
            X = u.bottom - u.top;
            D = u.top - k.getBoundingClientRect().top | 0;
          } else {
            X = G.offsetHeight;
            y = G;
            if (u) {
              for (var P = []; y && (T ? nb(k, y) : k !== y);) {
                for (; y.previousSibling;) {
                  y = y.previousSibling, y.tagName && P.unshift(y.tagName + ":" + y.offsetTop);
                }
                y = y.offsetParent;
              }
              y = G;
            }
            for (; y && (T ? nb(k, y) : k !== y);) {
              if (u) {
                for (; y.previousSibling;) {
                  y = y.previousSibling, D += y.offsetHeight || 0;
                }
                y = y.parentNode;
              } else {
                D += y.offsetTop, y = y.offsetParent;
              }
            }
          }
          B ? (z = [D, X], H && xb(H), H = Y(J, 7, 1 > T || 536 > la || 14 > ta ? 500 : 0)) : (m = ac(), Q(v, D, X));
        }
      }
    }
    function qa() {
      r.call(E);
    }
    function ja() {
      I.fullscreenElement || I.fullscreen || I.webkitIsFullscreen || I.msFullscreenElement || aa.fullScreen ? (eb(E, "id", "blog2slide-root"), ia[1].parentNode.insertBefore(L, ia[1]), ka(), I.onkeydown = va) : ea && (Ca(L), Ya(E, "id"), Ya(ea, "id"), ea = I.onkeydown = v);
    }
    function ka() {
      ea && Ya(ea, "id");
      za = 0 < za ? Fa < za ? Fa : za : 0;
      ea = ia[za];
      eb(ea, "id", "blog2slide-current");
    }
    function va(k) {
      if ("ArrowRight" === k.key || 39 === k.keyCode) {
        ++za, ka();
      } else if ("ArrowLeft" === k.key || 37 === k.keyCode) {
        --za, ka();
      }
    }
    Ac = function(k, u, G, D, X) {
      var y, P, c;
      if (ca) {
        Y(u, !1);
      } else {
        if (D) {
          if (ta && D.href) {
            P = D.cloneNode();
            D.parentNode.insertBefore(P, D);
            Ca(D);
          } else {
            P = D;
          }
        } else {
          P = Pa(jb, "link", {type:"text/css", rel:"stylesheet"});
        }
        if (!ra) {
          (y = ub(G)) ? Ya(y, "id") : y = Pa(oa, "div", {"aria-hidden":"true", className:G});
          c = y.offsetWidth;
          eb(y, "id", G);
        }
        ma(P, k, u, y, c, X || ya);
        return P;
      }
    };
    var ya = 5E3, ca = T && 0 > Ia.conpare(Ma, "0.9.1"), ba = 11 <= A || Xa || 9 <= C && 9.5 > C, V = 11 > A, Z = 7.2 <= C && 7.5 > C, da = 9 > T && !ca || 19 > ta || 4.3 > Sa || 2 > Kb || 536 > la || 6 > Ba || 7 <= C && 9 > C && !Z, ra = !ca && !ba && !V && !Z && !da, ma = ra ? function(k, u, G) {
      k.onload = bz;
      k.onerror = function() {
        k.onload = k.onerror = null;
        Y(G, !1);
      };
      k.href = u;
      function bz() {
        k.onload = k.onerror = null;
        Y(G, !0);
      }
      bz = !1;
    } : ba ? function(k, u, G, D, X) {
      k.onload = function() {
        Y(G, sa(D, X));
        Ca(D);
        k.onload = null;
        D = v;
      };
      k.href = u;
    } : V ? function(k, u, G, D, X) {
      k.onreadystatechange = function() {
        if ("loaded" === k.readyState || "complete" === k.readyState) {
          Y(G, sa(D, X)), Ca(D), D = v, k.onreadystatechange = Wa;
        }
      };
      k.href = u;
    } : da || Z ? function(k, u, G, D, X, y) {
      function P() {
        f && (q = xb(q), l = Na() + 999, Y(c, 0, 99), da ? f.onerror = null : f.removeEventListener("load", P, !1), f = v);
      }
      function c() {
        sa(D, X) ? (Ca(D), Y(G, !0), D = G = v) : Na() < l ? Y(c, 0, 99) : (Ca(D), Y(G, !1), D = G = v);
      }
      var f = new Image(), q = Y(P, 0, y), l;
      da ? f.onerror = P : f.addEventListener("load", P, !1);
      f.src = k.href = u;
    } : v, sa = !ra && !ca && function(k, u) {
      return k.offsetWidth !== u;
    }, ha, Da, Ea, wa, b, e, t, w, B, F, R, U, S, h, a, g, d, m, n, z, p, H, r, E, L, ea, ia, za, Fa;
    zc = T && 0 >= Ia.conpare(Ma, "0.9");
    Mb = !(7.2 > C || zc);
    Nb = function(k) {
      ha ? I.write('<script src="' + k + '">\x3c/script>') : Ta || Ea.length ? Ea.push(k) : wa(k);
    };
    Ob = function() {
      ha || wa(Ea.shift());
    };
    ha = !Mb;
    Da = Mb && 7.5 > C;
    if (!ha) {
      Ea = [];
      Da && (yc = !0);
      Qa(function() {
        wa(Ea.shift());
      });
      wa = function(k) {
        k && (Da ? mc[0].src = k : Pa(jb, "script", {src:k}));
      };
    }
    b = [];
    e = 5.5 <= A && 8 > A ? "keypress" : "keydown";
    if (!qc) {
      t = Ra.transition !== v || Ra["-o-transition"] !== v || Ra["-moz-transition"] !== v || Ra["-webkit-transition"] !== v;
      Gb(function(k) {
        var u, G, D, X, y, P, c;
        if (k.D && rb) {
          k = k.C;
          u = Oa(k);
          G = "";
          if ("A" === Ja(u) && 1 === Hc(u).length) {
            X = Ga(u, "href");
            y = X.split("?")[0].split("#")[0].split(".");
            y = (y[y.length - 1] || "").toLowerCase();
            if ((D = 0 < X.indexOf("blogger.googleusercontent.com/img/")) || 0 <= ".jpg.png.gif.bmp.jpeg.webp.".indexOf("." + y + ".")) {
              fa(u, e, M);
              fa(k, "click", M);
              fa(u, "click", K);
              t && (G = k.naturalWidth + "px", Va(k, "width", G));
              ob(u, "js-pica-thumbnail");
              for (y = u; y = Oa(y);) {
                if (Za(y, "caption")) {
                  ob(y, "js-captioned-thumbnail");
                  P = y;
                  c = Mc(P);
                  break;
                }
              }
              b.push({m:u, H:P, P:c, W:k.src, X:G, K:X, B:k, J:D ? 0 < X.indexOf("/img/a/") ? 2 : 3 : 0 < X.indexOf(".bp.blogspot.com/") ? 1 : 0});
            }
          }
        }
      });
      wb(function(k, u) {
        for (k = -1; u = b[++k];) {
          Ka(u.m, e, M), Ka(u.B, "click", M), Ka(u.m, "click", K);
        }
      });
    }
    w = ["jsSidebarFixer1", "jsSidebarFixer2"];
    B = !(9 > A || C || 1 <= T && 1.3 > T || Bc);
    F = !(5 > Ba || 2.2 > Sa || 6 > W(12) || Aa(32) && 534 > la || Aa(34) || 7 > A || 9 > C || 1 > T);
    R = F || 6 === A || 1 > T;
    U = 7.5 > C;
    g = Zc && uc;
    d = 0;
    m = 0;
    Rc || qc || (zb(function(k) {
      var u;
      if (k) {
        if (!rb) {
          return !0;
        }
        k = -1;
        S = ub("jsSide");
        h = rb;
        if (!S) {
          return !0;
        }
        yb(J);
        ic(J);
        a = Qb(fc(S), "div", {id:"jsSidebarFixer"});
        for (Sb(a, pa); 1 < db(S).length;) {
          a.appendChild(db(S)[1]);
        }
        for (; u = w[++k];) {
          Oc(ub(u), N);
        }
        A || Xa || 2 > ta || (n = Ra.perspective !== v || Ra.MozPerspective !== v || Ra["-webkit-perspective"] !== v);
        J();
        return !0;
      }
    }), wb(function() {
      for (var k = -1, u; u = w[++k];) {
        Pc(ub(u), N);
      }
      Nc(a, pa);
    }));
    Qa(function() {
      function k(P, c, f, q) {
        var l = q ? "div" : "cite";
        if (0 === c.indexOf("urn:isbn:")) {
          c = c.substr(9).toUpperCase().split("-").join("");
          if (13 === c.length) {
            c = c.toString().slice(3, -1);
            for (var x = 0, O = 0; 9 > O; O++) {
              x += (c.charAt(O) - 0) * (10 - O);
            }
            x = (11 - x % 11) % 11;
            x = 10 === x ? "X" : x.toString();
            c += x;
          }
          10 === c.length && (c = "//www.amazon.co.jp/exec/obidos/ASIN/" + c + "/itozyun-22/ref=nosim/");
        }
        f = q ? Qb(fc(G), l, {className:f}) : Pa(G, l, {className:f});
        Pa(f, "a", 0 === c.indexOf("http") || 0 === c.indexOf("//") ? {target:"_blank", rel:"nofollow noopener noreferrer", href:c} : {href:c}, P);
      }
      if (rb) {
        for (var u = mb(rb, "blockquote"), G, D = -1, X, y; G = u[++D];) {
          X = Ga(G, "title"), y = Ga(G, "cite"), X && y ? (Ya(G, "title"), k(X, y, "js-generated-link-in-blockquote", !0)) : y && (Ya(G, "cite"), k(aa.decodeURI ? decodeURI(y) : y, y, "js-generated-cite-in-blockquote"));
        }
      }
    });
    Qa(function() {
      var k = ub("blog2slide-start"), u;
      if (k) {
        u = I.onfullscreenchange !== v ? "f" : I.onmozfullscreenchange !== v ? "mozF" : I.onwebkitfullscreenchange !== v ? "webkitF" : 0;
        r = k.requestFullscreen || k.webkitRequestFullscreen || k.mozRequestFullscreen || k.msRequestFullscreen;
        0 !== u || r ? (k.innerHTML = '<button class="btn">\u30b9\u30e9\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b</button>', fa(k.firstChild, "click", qa), k = Oa(k), E = Oa(k), ia = mb(k, "section"), L = I.createElement("h1"), L.innerHTML = mb(oa, "h1")[0].innerHTML, Fa = ia.length, ia.splice(0, 0, L), 0 !== u ? fa(I, u + "ullscreenchange", ja) : A ? fa(I, "MSFullscreenChange", ja, !1) : ic(ja)) : Ca(k);
      }
    });
  })();
  Wb = !oc || .9 > T || 8 > C || 5.5 > A;
  (function() {
    function M(h) {
      return h === "" + h;
    }
    function K(h, a) {
      return Wb ? new V(h, a) : new oc(h, a);
    }
    function J(h, a, g, d) {
      if (ba() - Z < sa && !d) {
        return h(a);
      }
      Y(Q, {S:h, V:a});
    }
    function Q(h) {
      Z = ba();
      h.S(h.V);
    }
    function N(h, a) {
      h && Db[h] || (h = ha.test(a) ? "default-markup" : "default-code");
      var g = !!Db[h];
      g && J(e, h, 0, !0);
      return g;
    }
    function pa() {
      function h(Fa, k, u) {
        k && (a.g = a.g || [], a.g.push({h:a, s:a.s, L:1, l:z, v:Fa, j:k, i:u, N:{}, o:0}));
      }
      var a = da, g = a.i, d = g[0], m = g[2], n = a.v, z = a.l, p = a.Y.shift(), H = a.N, r, E, L, ea, ia, za;
      if (p) {
        r = H[p];
        if (!(0 <= r)) {
          if (E = d[p.charAt(0)]) {
            L = p.match(E[1]);
            r = E[0];
          } else {
            for (r = 0, d = -1; E = m[++d];) {
              if (L = p.match(E[1])) {
                r = E[0];
                break;
              }
            }
          }
          !(E = M(r)) || L && M(L[1]) || (E = !1, r = 11);
          E || (H[p] = r);
        }
        m = a.o;
        H = p.length;
        a.o += H;
        if (E) {
          E = L[1];
          d = p.indexOf(E);
          ea = E.length;
          ia = d + ea;
          L[2] && (ia = H - L[2].length, d = ia - ea);
          h(n + m, p.substr(0, d), g);
          if (ea && N(r, E)) {
            h(n + m + d, E);
            za = !0;
          }
          h(n + m + ia, p.substr(ia), g);
          a.g && a.g.length && (da = a.g.shift());
          za || (da !== a ? J(wa, v, 2) : J(pa, v, 2));
        } else {
          z.push(n + m, r), J(pa, v, 2);
        }
      } else {
        a.h ? (da = a.h.g.shift()) ? J(wa, v, 2) : (da = a.h, J(pa, v, 2)) : J(B, v, 2);
      }
    }
    function qa(h) {
      var a, g;
      if (b.length) {
        a = b.shift();
        g = ya[a];
        if (g.pop) {
          ya[a] = K(g[0], g[1]);
        } else if (M(g)) {
          ya[a] = K(g);
        } else {
          return qa(h);
        }
        J(qa, h, 1);
      } else {
        J(e, h);
      }
    }
    function ja(h) {
      var d;
      for (var a, g = h.firstChild; g; g = g.nextSibling) {
        d = g.nodeType;
        a = 1 === d ? a ? h : g : 3 === d ? Da.test(g.nodeValue) ? h : a : a;
      }
      return a === h ? v : a;
    }
    Db = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
    var ka = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], va = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], 
    [1, 26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], ya = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
    ca = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), ba = Jb.now || function() {
      return +new Jb();
    }, V, Z, da, ra, ma, sa = 5 > A ? 60 : 5.5 > A ? 0 : Wb ? 20 : 10, ha, Da, Ea, wa, b, e, t, w, B, F, R, U, S;
    hb = [function(h) {
      aa.RegExpCompat = V = h;
    }, function() {
      ha = K("^\\s*<");
      Da = K("\\S");
    }];
    Wb || (hb[1](), hb = v);
    Ea = function() {
      var h = da, a = h.T, g = t(h.s, h.L), d = h.j = g.j;
      h.F = g.F;
      N(a, d) || (da = v, J(S, v, 0, !0));
    };
    wa = function() {
      var h = da;
      h.Y = h.j.match(h.i[1]) || [];
      h.l.push(h.v, 0);
      J(pa, v, 2);
    };
    b = [];
    e = function(h) {
      function a(r) {
        var E = r;
        0 <= r && (E = va[r]);
        0 <= E[1] && (E[1] = g(E[1]));
        return E;
      }
      function g(r) {
        var E = r;
        return 0 <= r && (E = ya[r], !E.exec) ? (b.push(r), r) : E;
      }
      var d = da, m = Db[h], n, z;
      M(m) && (m = Db[h] = Db[m]);
      n = m[0];
      if (0 <= n) {
        n = ka[n];
        if (0 <= n["-num"]) {
          z = n["-num"];
          delete n["-num"];
          for (var p = -1; 9 > p;) {
            n["" + ++p] = z;
          }
        }
        m[0] = n;
      }
      for (var H in n) {
        n[H] = a(n[H]);
      }
      m[1] = g(m[1]);
      n = m[2];
      p = 0;
      for (z = n.length; p < z; ++p) {
        n[p] = a(n[p]);
      }
      b.length ? J(qa, h, 2) : (d.i ? d.h && (d.h.g[0].i = m) : d.i = m, J(wa, v, 1));
    };
    t = function(h, a) {
      function g(H) {
        var r = H.nodeType;
        if (1 === r) {
          if (!Za(H, "nocode")) {
            for (r = H.firstChild; r; r = r.nextSibling) {
              g(r);
            }
            r = Ja(H);
            if ("BR" === r || "LI" === r) {
              d[z] = "\n", n[z << 1] = m++, n[z++ << 1 | 1] = H;
            }
          }
        } else if (3 === r || 4 === r) {
          if (r = H.nodeValue) {
            r = a ? r.split("\r\n").join("\n").split("\r").join("\n") : r.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[z] = r, n[z << 1] = m, m += r.length, n[z++ << 1 | 1] = H;
          }
        }
      }
      var d = [], m = 0, n = [], z = 0, p;
      g(h);
      p = d.join("");
      "\n" === p.charAt(p.length - 1) && (p = p.substr(0, p.length - 1));
      return {j:p, F:n};
    };
    w = function(h, a, g) {
      var H;
      function d(r) {
        var E = r.nodeType, L, ea, ia;
        if (1 === E && !Za(r, "nocode")) {
          if ("BR" === Ja(r)) {
            m(r), r.parentNode && Ca(r);
          } else {
            for (r = r.firstChild; r; r = r.nextSibling) {
              d(r);
            }
          }
        } else if ((3 === E || 4 === E) && g) {
          L = r.nodeValue;
          ea = L.indexOf("\r\n");
          ia = 2;
          -1 === ea && (ea = L.indexOf("\n"), ia = 1);
          -1 === ea && (ea = L.indexOf("\r"));
          -1 !== ea && (E = L.substr(0, ea), r.nodeValue = E, (L = L.substr(ea + ia)) && gc(r, L), m(r), E || Ca(r));
        }
      }
      function m(r) {
        function E(ea, ia) {
          var za = ia ? ea.cloneNode(!1) : ea, Fa = ea.parentNode, k;
          if (Fa) {
            Fa = E(Fa, 1);
            k = ea.nextSibling;
            Fa.appendChild(za);
            for (var u = k; u; u = k) {
              k = u.nextSibling, Fa.appendChild(u);
            }
          }
          return za;
        }
        for (; !r.nextSibling;) {
          if (r = r.parentNode, !r) {
            return;
          }
        }
        r = E(r.nextSibling, 0);
        for (var L; (L = r.parentNode) && 1 === L.nodeType;) {
          r = L;
        }
        z.push(r);
      }
      for (var n = I.createElement("li"); h.firstChild;) {
        n.appendChild(h.firstChild);
      }
      for (var z = [n], p = 0; p < z.length; ++p) {
        d(z[p]);
      }
      if (a === (a | 0)) {
        if (10 <= a && 7.2 > C) {
          H = I.createElement("ol");
          H.innerHTML = '<li value="' + a + '">' + n.innerHTML + "</li>";
          z[0] = H.firstChild;
        } else {
          eb(n, "value", a);
        }
      }
      H = Pa(h, "ol", {className:"linenums"});
      h = Math.max(0, a - 1 | 0) || 0;
      p = 0;
      for (a = z.length; p < a; ++p) {
        n = z[p], Rb(n, "L" + (p + h) % 10), n.firstChild || Ic(n, "\u00a0"), H.appendChild(n);
      }
    };
    B = function() {
      var h = da, a = h.j, g = a.length, d = 0, m = h.F, n = m.length, z = 0, p = h.l, H = p.length, r = 0, E, L, ea, ia, za, Fa;
      p[H] = g;
      for (L = E = 0; L < H;) {
        p[L] !== p[L + 2] ? (p[E++] = p[L++], p[E++] = p[L++]) : L += 2;
      }
      H = E;
      for (L = E = 0; L < H;) {
        ea = p[L];
        ia = p[L + 1];
        for (L += 2; L + 2 <= H && p[L + 1] === ia;) {
          L += 2;
        }
        p[E++] = ea;
        p[E++] = ia;
      }
      p.length = E;
      h = h.s;
      H = "";
      h && (H = h.style.display, Va(h, "display", "none"));
      for (; z < n;) {
        E = m[z + 2] || g;
        ea = p[r + 2] || g;
        L = Math.min(E, ea);
        ia = m[z + 1];
        if (1 !== ia.nodeType && (za = a.substring(d, L))) {
          9 > A && (za = za.split("\n").join("\r"));
          Fa = Qb(ia, "span", {className:ca[p[r + 1]]}, za);
          Ca(ia);
          d < E && (m[z + 1] = gc(Fa, a.substring(L, E)));
        }
        d = L;
        d >= E && (z += 2);
        d >= ea && (r += 2);
      }
      h && Va(h, "display", H);
      da = v;
      J(S, v, 3, !0);
    };
    F = [];
    zb(function(h) {
      if (h) {
        h = [vb("pre"), vb("code"), vb("xmp")];
        for (var a = 0; a < h.length; ++a) {
          for (var g = 0, d = h[a].length; g < d; ++g) {
            U(h[a][g]);
          }
        }
        return !0;
      }
    });
    U = function(h) {
      F.push(h);
      R = F.length;
      1 === R && (nc ? Y(nc, S) : hb ? hb.push(function() {
        Y(S);
      }) : Y(S));
    };
    S = function() {
      var a, m, n;
      function h(z, p) {
        return (z.split(p)[1] || "").split(" ")[0];
      }
      if (!da) {
        R !== F.length && ma && ma(R - F.length, R);
        a = F.shift();
        if (a) {
          if (Za(a, "prettyprint") && !Za(a, "prettyprinted")) {
            for (var g = !1, d = a.parentNode; d !== oa; d = d.parentNode) {
              m = Ja(d);
              if (("PRE" === m || "XMP" === m || "CODE" === m) && Za(d, "prettyprint")) {
                g = !0;
                break;
              }
            }
            if (!g) {
              g = a.className;
              ob(a, "prettyprinted");
              d = !1;
              if (!d) {
                d = h(g, "lang-") || h(g, "language-");
                !d && (n = ja(a)) && "CODE" === Ja(n) && (d = h(n.className, "lang-") || h(n.className, "language-"));
              }
              m = Ja(a);
              "PRE" === m || "XMP" === m ? m = 1 : (m = a.currentStyle, n = I.defaultView, m = (m = m ? m.whiteSpace : n && n.getComputedStyle ? n.getComputedStyle(a, null).getPropertyValue("white-space") : 0) && "pre" === m.substr(0, 3));
              n = !1;
              (n = "true" === n || +n) || (n = h(g, "linenums:") || Za(a, "linenums"), n = n.length ? +n : n);
              n && w(a, n, m);
              da = {T:d, s:a, $:n, L:m, v:0, o:0, N:{}, l:[]};
              J(Ea);
              return;
            }
          }
          J(S, v, 0, !0);
        } else {
          ra && ra();
        }
      }
    };
    aa.PR = {RegExpProxy:K, prettifyElement:U, registerCompleteHandler:function(h, a) {
      ra = h;
      ma = a;
    }};
  })();
  mc = I.scripts || vb("script");
  xa = mc[mc.length - 1].src.split("/");
  --xa.length;
  "js" === xa[xa.length - 1] && --xa.length;
  (xa = xa.join("/")) && (xa += "/");
  Rc = Xc || "1" === Ga(oa, "mob");
  Lb = (Rc ? "mb" : "pc") + "/";
  6.1 > Ba && (yb ? yb(dc) : fa(aa, "scroll", dc));
  wb(Dc);
  6.1 > Ba && (yb ? yb(ec) : fa(aa, "scroll", ec));
  wb(Ec);
  10 > A && (11 !== Uc || 5 !== A) || (9 > C || 1 > T || !sb && !aa.addEventListener ? I.write('<link href="' + xa + "css/" + Lb + bc + '" rel="stylesheet"' + (8 > C ? "" : ' media="screen,handheld,projection,print"') + ">") : (9.5 > C || 1.5 > T || 534 > la || 5 > Ba || 7 > ta || 3 > Sa) && Qa(function() {
    Pa(jb, "link", {href:xa + "css/" + Lb + bc, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
  if (Wb) {
    if (Mb) {
      nc = function(M) {
        aa.RegExpCompat = bz;
        nc = v;
        Nb(xa + "js/regexpcompat.js");
        function bz(K) {
          for (var J; J = hb.shift();) {
            J(K);
          }
          hb = v;
          Y(M);
          Ob(xa + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      aa.RegExpCompat = function(M) {
        for (var K; K = hb.shift();) {
          K(M);
        }
        hb = v;
        Ob(xa + "js/regexpcompat.js");
      }, Nb(xa + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, document, navigator, Function, Date, parseFloat, isFinite, setTimeout, clearTimeout, setInterval, void 0);

