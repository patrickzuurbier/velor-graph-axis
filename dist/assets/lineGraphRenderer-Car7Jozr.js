var z0 = Object.defineProperty;
var H0 = (t, e, r) => e in t ? z0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Ec = (t, e, r) => H0(t, typeof e != "symbol" ? e + "" : e, r);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Wl = function(t, e) {
  return Wl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Wl(t, e);
};
function z(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Wl(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var sh = 12, G0 = "sans-serif", Nr = sh + "px " + G0, U0 = 20, W0 = 100, Y0 = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function X0(t) {
  var e = {};
  if (typeof JSON > "u")
    return e;
  for (var r = 0; r < t.length; r++) {
    var n = String.fromCharCode(r + 32), i = (t.charCodeAt(r) - U0) / W0;
    e[n] = i;
  }
  return e;
}
var Z0 = X0(Y0), ut = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ (function() {
    var t, e;
    return function(r, n) {
      if (!t) {
        var i = ut.createCanvas();
        t = i && i.getContext("2d");
      }
      if (t)
        return e !== n && (e = t.font = n || Nr), t.measureText(r);
      r = r || "", n = n || Nr;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || sh, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * r.length;
      else
        for (var u = 0; u < r.length; u++) {
          var l = Z0[r[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  })(),
  loadImage: function(t, e, r) {
    var n = new Image();
    return n.onload = e, n.onerror = r, n.src = t, n;
  },
  getTime: function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }
}, Eg = Di([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(t, e) {
  return t["[object " + e + "]"] = !0, t;
}, {}), Mg = Di([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(t, e) {
  return t["[object " + e + "Array]"] = !0, t;
}, {}), Ci = Object.prototype.toString, Ys = Array.prototype, $0 = Ys.forEach, q0 = Ys.filter, uh = Ys.slice, K0 = Ys.map, Mc = (function() {
}).constructor, $a = Mc ? Mc.prototype : null, lh = "__proto__", _u = 2311, Q0 = Math.pow(2, 53) - 1;
function Ag() {
  return _u >= Q0 && (_u = 0), _u++;
}
function _n() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  typeof console < "u" && console.error.apply(console, t);
}
function ie(t) {
  if (t == null || typeof t != "object")
    return t;
  var e = t, r = Ci.call(t);
  if (r === "[object Array]") {
    if (!aa(t)) {
      e = [];
      for (var n = 0, i = t.length; n < i; n++)
        e[n] = ie(t[n]);
    }
  } else if (Mg[r]) {
    if (!aa(t)) {
      var a = t.constructor;
      if (a.from)
        e = a.from(t);
      else {
        e = new a(t.length);
        for (var n = 0, i = t.length; n < i; n++)
          e[n] = t[n];
      }
    }
  } else if (!Eg[r] && !aa(t) && !fi(t)) {
    e = {};
    for (var o in t)
      t.hasOwnProperty(o) && o !== lh && (e[o] = ie(t[o]));
  }
  return e;
}
function ce(t, e, r) {
  if (!W(e) || !W(t))
    return r ? ie(e) : t;
  for (var n in e)
    if (e.hasOwnProperty(n) && n !== lh) {
      var i = t[n], a = e[n];
      W(a) && W(i) && !V(a) && !V(i) && !fi(a) && !fi(i) && !Ac(a) && !Ac(i) && !aa(a) && !aa(i) ? ce(i, a, r) : (r || !(n in t)) && (t[n] = ie(e[n]));
    }
  return t;
}
function k(t, e) {
  if (Object.assign)
    Object.assign(t, e);
  else
    for (var r in e)
      e.hasOwnProperty(r) && r !== lh && (t[r] = e[r]);
  return t;
}
function J0(t, e, r) {
  t = t || {};
  for (var n = 0; n < r.length; n++) {
    var i = r[n];
    t[i] = e[i];
  }
  return t;
}
function pe(t, e, r) {
  for (var n = be(e), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    t[o] == null && (t[o] = e[o]);
  }
  return t;
}
function le(t, e) {
  if (t) {
    if (t.indexOf)
      return t.indexOf(e);
    for (var r = 0, n = t.length; r < n; r++)
      if (t[r] === e)
        return r;
  }
  return -1;
}
function j0(t, e) {
  var r = t.prototype;
  function n() {
  }
  n.prototype = e.prototype, t.prototype = new n();
  for (var i in r)
    r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
  t.prototype.constructor = t, t.superClass = e;
}
function tr(t, e, r) {
  if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && t[a] == null && (t[a] = e[a]);
    }
  else
    pe(t, e);
}
function nt(t) {
  return !t || typeof t == "string" ? !1 : typeof t.length == "number";
}
function x(t, e, r) {
  if (t && e)
    if (t.forEach && t.forEach === $0)
      t.forEach(e, r);
    else if (t.length === +t.length)
      for (var n = 0, i = t.length; n < i; n++)
        e.call(r, t[n], n, t);
    else
      for (var a in t)
        t.hasOwnProperty(a) && e.call(r, t[a], a, t);
}
function q(t, e, r) {
  if (!t)
    return [];
  if (!e)
    return fh(t);
  if (t.map && t.map === K0)
    return t.map(e, r);
  for (var n = [], i = 0, a = t.length; i < a; i++)
    n.push(e.call(r, t[i], i, t));
  return n;
}
function Di(t, e, r, n) {
  if (t && e) {
    for (var i = 0, a = t.length; i < a; i++)
      r = e.call(n, r, t[i], i, t);
    return r;
  }
}
function ze(t, e, r) {
  if (!t)
    return [];
  if (!e)
    return fh(t);
  if (t.filter && t.filter === q0)
    return t.filter(e, r);
  for (var n = [], i = 0, a = t.length; i < a; i++)
    e.call(r, t[i], i, t) && n.push(t[i]);
  return n;
}
function e1(t, e, r) {
  if (t && e) {
    for (var n = 0, i = t.length; n < i; n++)
      if (e.call(r, t[n], n, t))
        return t[n];
  }
}
function be(t) {
  if (!t)
    return [];
  if (Object.keys)
    return Object.keys(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(r);
  return e;
}
function t1(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return function() {
    return t.apply(e, r.concat(uh.call(arguments)));
  };
}
var Se = $a && Q($a.bind) ? $a.call.bind($a.bind) : t1;
function Ae(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return function() {
    return t.apply(this, e.concat(uh.call(arguments)));
  };
}
function V(t) {
  return Array.isArray ? Array.isArray(t) : Ci.call(t) === "[object Array]";
}
function Q(t) {
  return typeof t == "function";
}
function H(t) {
  return typeof t == "string";
}
function rs(t) {
  return Ci.call(t) === "[object String]";
}
function we(t) {
  return typeof t == "number";
}
function W(t) {
  var e = typeof t;
  return e === "function" || !!t && e === "object";
}
function Ac(t) {
  return !!Eg[Ci.call(t)];
}
function qe(t) {
  return !!Mg[Ci.call(t)];
}
function fi(t) {
  return typeof t == "object" && typeof t.nodeType == "number" && typeof t.ownerDocument == "object";
}
function Xs(t) {
  return t.colorStops != null;
}
function r1(t) {
  return t.image != null;
}
function n1(t) {
  return Ci.call(t) === "[object RegExp]";
}
function hi(t) {
  return t !== t;
}
function ci() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] != null)
      return t[r];
}
function Y(t, e) {
  return t ?? e;
}
function Ar(t, e, r) {
  return t ?? e ?? r;
}
function fh(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return uh.apply(t, e);
}
function hh(t) {
  if (typeof t == "number")
    return [t, t, t, t];
  var e = t.length;
  return e === 2 ? [t[0], t[1], t[0], t[1]] : e === 3 ? [t[0], t[1], t[2], t[1]] : t;
}
function N(t, e) {
  if (!t)
    throw new Error(e);
}
function Gt(t) {
  return t == null ? null : typeof t.trim == "function" ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Lg = "__ec_primitive__";
function Yl(t) {
  t[Lg] = !0;
}
function aa(t) {
  return t[Lg];
}
var i1 = (function() {
  function t() {
    this.data = {};
  }
  return t.prototype.delete = function(e) {
    var r = this.has(e);
    return r && delete this.data[e], r;
  }, t.prototype.has = function(e) {
    return this.data.hasOwnProperty(e);
  }, t.prototype.get = function(e) {
    return this.data[e];
  }, t.prototype.set = function(e, r) {
    return this.data[e] = r, this;
  }, t.prototype.keys = function() {
    return be(this.data);
  }, t.prototype.forEach = function(e) {
    var r = this.data;
    for (var n in r)
      r.hasOwnProperty(n) && e(r[n], n);
  }, t;
})(), Ig = typeof Map == "function";
function a1() {
  return Ig ? /* @__PURE__ */ new Map() : new i1();
}
var o1 = (function() {
  function t(e) {
    var r = V(e);
    this.data = a1();
    var n = this;
    e instanceof t ? e.each(i) : e && x(e, i);
    function i(a, o) {
      r ? n.set(a, o) : n.set(o, a);
    }
  }
  return t.prototype.hasKey = function(e) {
    return this.data.has(e);
  }, t.prototype.get = function(e) {
    return this.data.get(e);
  }, t.prototype.set = function(e, r) {
    return this.data.set(e, r), r;
  }, t.prototype.each = function(e, r) {
    this.data.forEach(function(n, i) {
      e.call(r, n, i);
    });
  }, t.prototype.keys = function() {
    var e = this.data.keys();
    return Ig ? Array.from(e) : e;
  }, t.prototype.removeKey = function(e) {
    this.data.delete(e);
  }, t;
})();
function K(t) {
  return new o1(t);
}
function s1(t, e) {
  for (var r = new t.constructor(t.length + e.length), n = 0; n < t.length; n++)
    r[n] = t[n];
  for (var i = t.length, n = 0; n < e.length; n++)
    r[n + i] = e[n];
  return r;
}
function Zs(t, e) {
  var r;
  if (Object.create)
    r = Object.create(t);
  else {
    var n = function() {
    };
    n.prototype = t, r = new n();
  }
  return e && k(r, e), r;
}
function Og(t) {
  var e = t.style;
  e.webkitUserSelect = "none", e.userSelect = "none", e.webkitTapHighlightColor = "rgba(0,0,0,0)", e["-webkit-touch-callout"] = "none";
}
function lt(t, e) {
  return t.hasOwnProperty(e);
}
function He() {
}
var u1 = 180 / Math.PI, l1 = /* @__PURE__ */ (function() {
  function t() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return t;
})(), f1 = /* @__PURE__ */ (function() {
  function t() {
    this.browser = new l1(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return t;
})(), ee = new f1();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (ee.wxa = !0, ee.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? ee.worker = !0 : !ee.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (ee.node = !0, ee.svgSupported = !0) : h1(navigator.userAgent, ee);
function h1(t, e) {
  var r = e.browser, n = t.match(/Firefox\/([\d.]+)/), i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(t);
  n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1], r.newEdge = +a[1].split(".")[0] > 18), o && (r.weChat = !0), e.svgSupported = typeof SVGRect < "u", e.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, e.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11);
  var s = e.domSupported = typeof document < "u";
  if (s) {
    var u = document.documentElement.style;
    e.transform3dSupported = (r.ie && "transition" in u || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in u) && !("OTransition" in u), e.transformSupported = e.transform3dSupported || r.ie && +r.version >= 9;
  }
}
var c1 = ".", Gr = "___EC__COMPONENT__CONTAINER___", Pg = "___EC__EXTENDED_CLASS___";
function Ut(t) {
  var e = {
    main: "",
    sub: ""
  };
  if (t) {
    var r = t.split(c1);
    e.main = r[0] || "", e.sub = r[1] || "";
  }
  return e;
}
function v1(t) {
  N(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
}
function d1(t) {
  return !!(t && t[Pg]);
}
function ch(t, e) {
  t.$constructor = t, t.extend = function(r) {
    process.env.NODE_ENV !== "production" && x(e, function(a) {
      r[a] || console.warn("Method `" + a + "` should be implemented" + (r.type ? " in " + r.type : "") + ".");
    });
    var n = this, i;
    return p1(n) ? i = /** @class */
    (function(a) {
      z(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    })(n) : (i = function() {
      (r.$constructor || n).apply(this, arguments);
    }, j0(i, this)), k(i.prototype, r), i[Pg] = !0, i.extend = this.extend, i.superCall = y1, i.superApply = _1, i.superClass = n, i;
  };
}
function p1(t) {
  return Q(t) && /^class\s/.test(Function.prototype.toString.call(t));
}
function Ng(t, e) {
  t.extend = e.extend;
}
var g1 = Math.round(Math.random() * 10);
function m1(t) {
  var e = ["__\0is_clz", g1++].join("_");
  t.prototype[e] = !0, process.env.NODE_ENV !== "production" && N(!t.isInstance, 'The method "is" can not be defined.'), t.isInstance = function(r) {
    return !!(r && r[e]);
  };
}
function y1(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return this.superClass.prototype[e].apply(t, r);
}
function _1(t, e, r) {
  return this.superClass.prototype[e].apply(t, r);
}
function $s(t) {
  var e = {};
  t.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      v1(i), n.prototype.type = i;
      var a = Ut(i);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && e[a.main] && console.warn(a.main + " exists."), e[a.main] = n;
      else if (a.sub !== Gr) {
        var o = r(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, t.getClass = function(n, i, a) {
    var o = e[n];
    if (o && o[Gr] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, t.getClassesByMainType = function(n) {
    var i = Ut(n), a = [], o = e[i.main];
    return o && o[Gr] ? x(o, function(s, u) {
      u !== Gr && a.push(s);
    }) : a.push(o), a;
  }, t.hasClass = function(n) {
    var i = Ut(n);
    return !!e[i.main];
  }, t.getAllClassMainTypes = function() {
    var n = [];
    return x(e, function(i, a) {
      n.push(a);
    }), n;
  }, t.hasSubTypes = function(n) {
    var i = Ut(n), a = e[i.main];
    return a && a[Gr];
  };
  function r(n) {
    var i = e[n.main];
    return (!i || !i[Gr]) && (i = e[n.main] = {}, i[Gr] = !0), i;
  }
}
function _a(t, e) {
  for (var r = 0; r < t.length; r++)
    t[r][1] || (t[r][1] = t[r][0]);
  return e = e || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < t.length; s++) {
      var u = t[s][1];
      if (!(i && le(i, u) >= 0 || a && le(a, u) < 0)) {
        var l = n.getShallow(u, e);
        l != null && (o[t[s][0]] = l);
      }
    }
    return o;
  };
}
var S1 = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], b1 = _a(S1), T1 = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getAreaStyle = function(e, r) {
      return b1(this, e, r);
    }, t;
  })()
), Rg = /* @__PURE__ */ (function() {
  function t(e) {
    this.value = e;
  }
  return t;
})(), w1 = (function() {
  function t() {
    this._len = 0;
  }
  return t.prototype.insert = function(e) {
    var r = new Rg(e);
    return this.insertEntry(r), r;
  }, t.prototype.insertEntry = function(e) {
    this.head ? (this.tail.next = e, e.prev = this.tail, e.next = null, this.tail = e) : this.head = this.tail = e, this._len++;
  }, t.prototype.remove = function(e) {
    var r = e.prev, n = e.next;
    r ? r.next = n : this.head = n, n ? n.prev = r : this.tail = r, e.next = e.prev = null, this._len--;
  }, t.prototype.len = function() {
    return this._len;
  }, t.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, t;
})(), vi = (function() {
  function t(e) {
    this._list = new w1(), this._maxSize = 10, this._map = {}, this._maxSize = e;
  }
  return t.prototype.put = function(e, r) {
    var n = this._list, i = this._map, a = null;
    if (i[e] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = n.head;
        n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = r : s = new Rg(r), s.key = e, n.insertEntry(s), i[e] = s;
    }
    return a;
  }, t.prototype.get = function(e) {
    var r = this._map[e], n = this._list;
    if (r != null)
      return r !== n.tail && (n.remove(r), n.insertEntry(r)), r.value;
  }, t.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, t.prototype.len = function() {
    return this._list.len();
  }, t;
})(), Xl = new vi(50);
function x1(t) {
  if (typeof t == "string") {
    var e = Xl.get(t);
    return e && e.image;
  } else
    return t;
}
function kg(t, e, r, n, i) {
  if (t)
    if (typeof t == "string") {
      if (e && e.__zrImageSrc === t || !r)
        return e;
      var a = Xl.get(t), o = { hostEl: r, cb: n, cbPayload: i };
      return a ? (e = a.image, !qs(e) && a.pending.push(o)) : (e = ut.loadImage(t, Lc, Lc), e.__zrImageSrc = t, Xl.put(t, e.__cachedImgObj = {
        image: e,
        pending: [o]
      })), e;
    } else
      return t;
  else return e;
}
function Lc() {
  var t = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var e = 0; e < t.pending.length; e++) {
    var r = t.pending[e], n = r.cb;
    n && n(this, r.cbPayload), r.hostEl.dirty();
  }
  t.pending.length = 0;
}
function qs(t) {
  return t && t.width && t.height;
}
function Wt() {
  return [1, 0, 0, 1, 0, 0];
}
function Na(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
}
function vh(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
}
function oa(t, e, r) {
  var n = e[0] * r[0] + e[2] * r[1], i = e[1] * r[0] + e[3] * r[1], a = e[0] * r[2] + e[2] * r[3], o = e[1] * r[2] + e[3] * r[3], s = e[0] * r[4] + e[2] * r[5] + e[4], u = e[1] * r[4] + e[3] * r[5] + e[5];
  return t[0] = n, t[1] = i, t[2] = a, t[3] = o, t[4] = s, t[5] = u, t;
}
function Zl(t, e, r) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + r[0], t[5] = e[5] + r[1], t;
}
function dh(t, e, r, n) {
  n === void 0 && (n = [0, 0]);
  var i = e[0], a = e[2], o = e[4], s = e[1], u = e[3], l = e[5], f = Math.sin(r), h = Math.cos(r);
  return t[0] = i * h + s * f, t[1] = -i * f + s * h, t[2] = a * h + u * f, t[3] = -a * f + h * u, t[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], t[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], t;
}
function C1(t, e, r) {
  var n = r[0], i = r[1];
  return t[0] = e[0] * n, t[1] = e[1] * i, t[2] = e[2] * n, t[3] = e[3] * i, t[4] = e[4] * n, t[5] = e[5] * i, t;
}
function Ra(t, e) {
  var r = e[0], n = e[2], i = e[4], a = e[1], o = e[3], s = e[5], u = r * o - a * n;
  return u ? (u = 1 / u, t[0] = o * u, t[1] = -a * u, t[2] = -n * u, t[3] = r * u, t[4] = (n * s - o * i) * u, t[5] = (a * i - r * s) * u, t) : null;
}
function Ei(t, e) {
  return t == null && (t = 0), e == null && (e = 0), [t, e];
}
function D1(t) {
  return [t[0], t[1]];
}
function Su(t, e, r) {
  return t[0] = e, t[1] = r, t;
}
function Ic(t, e, r) {
  return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t;
}
function E1(t, e, r) {
  return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t;
}
function M1(t) {
  return Math.sqrt(A1(t));
}
function A1(t) {
  return t[0] * t[0] + t[1] * t[1];
}
function bu(t, e, r) {
  return t[0] = e[0] * r, t[1] = e[1] * r, t;
}
function L1(t, e) {
  var r = M1(e);
  return r === 0 ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / r, t[1] = e[1] / r), t;
}
function $l(t, e) {
  return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
}
var I1 = $l;
function O1(t, e) {
  return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
}
var ii = O1;
function Dt(t, e, r) {
  var n = e[0], i = e[1];
  return t[0] = r[0] * n + r[2] * i + r[4], t[1] = r[1] * n + r[3] * i + r[5], t;
}
function Qn(t, e, r) {
  return t[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t;
}
function Jn(t, e, r) {
  return t[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t;
}
var ge = (function() {
  function t(e, r) {
    this.x = e || 0, this.y = r || 0;
  }
  return t.prototype.copy = function(e) {
    return this.x = e.x, this.y = e.y, this;
  }, t.prototype.clone = function() {
    return new t(this.x, this.y);
  }, t.prototype.set = function(e, r) {
    return this.x = e, this.y = r, this;
  }, t.prototype.equal = function(e) {
    return e.x === this.x && e.y === this.y;
  }, t.prototype.add = function(e) {
    return this.x += e.x, this.y += e.y, this;
  }, t.prototype.scale = function(e) {
    this.x *= e, this.y *= e;
  }, t.prototype.scaleAndAdd = function(e, r) {
    this.x += e.x * r, this.y += e.y * r;
  }, t.prototype.sub = function(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }, t.prototype.dot = function(e) {
    return this.x * e.x + this.y * e.y;
  }, t.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, t.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, t.prototype.normalize = function() {
    var e = this.len();
    return this.x /= e, this.y /= e, this;
  }, t.prototype.distance = function(e) {
    var r = this.x - e.x, n = this.y - e.y;
    return Math.sqrt(r * r + n * n);
  }, t.prototype.distanceSquare = function(e) {
    var r = this.x - e.x, n = this.y - e.y;
    return r * r + n * n;
  }, t.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, t.prototype.transform = function(e) {
    if (e) {
      var r = this.x, n = this.y;
      return this.x = e[0] * r + e[2] * n + e[4], this.y = e[1] * r + e[3] * n + e[5], this;
    }
  }, t.prototype.toArray = function(e) {
    return e[0] = this.x, e[1] = this.y, e;
  }, t.prototype.fromArray = function(e) {
    this.x = e[0], this.y = e[1];
  }, t.set = function(e, r, n) {
    e.x = r, e.y = n;
  }, t.copy = function(e, r) {
    e.x = r.x, e.y = r.y;
  }, t.len = function(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y);
  }, t.lenSquare = function(e) {
    return e.x * e.x + e.y * e.y;
  }, t.dot = function(e, r) {
    return e.x * r.x + e.y * r.y;
  }, t.add = function(e, r, n) {
    e.x = r.x + n.x, e.y = r.y + n.y;
  }, t.sub = function(e, r, n) {
    e.x = r.x - n.x, e.y = r.y - n.y;
  }, t.scale = function(e, r, n) {
    e.x = r.x * n, e.y = r.y * n;
  }, t.scaleAndAdd = function(e, r, n, i) {
    e.x = r.x + n.x * i, e.y = r.y + n.y * i;
  }, t.lerp = function(e, r, n, i) {
    var a = 1 - i;
    e.x = a * r.x + i * n.x, e.y = a * r.y + i * n.y;
  }, t;
})(), pn = Math.min, jn = Math.max, ql = Math.abs, Oc = ["x", "y"], P1 = ["width", "height"], Ur = new ge(), Wr = new ge(), Yr = new ge(), Xr = new ge(), st = Bg(), Qi = st.minTv, Kl = st.maxTv, sa = [0, 0], j = (function() {
  function t(e, r, n, i) {
    Tu(this, e, r, n, i);
  }
  return t.set = function(e, r, n, i, a) {
    return i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), e.x = r, e.y = n, e.width = i, e.height = a, e;
  }, t.prototype.union = function(e) {
    var r = pn(e.x, this.x), n = pn(e.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = jn(e.x + e.width, this.x + this.width) - r : this.width = e.width, isFinite(this.y) && isFinite(this.height) ? this.height = jn(e.y + e.height, this.y + this.height) - n : this.height = e.height, this.x = r, this.y = n;
  }, t.prototype.applyTransform = function(e) {
    t.applyTransform(this, this, e);
  }, t.prototype.calculateTransform = function(e) {
    return N1(Wt(), this, e);
  }, t.prototype.intersect = function(e, r, n) {
    return t.intersect(this, e, r, n);
  }, t.intersect = function(e, r, n, i) {
    n && ge.set(n, 0, 0);
    var a = i && i.outIntersectRect || null, o = i && i.clamp;
    if (a && (a.x = a.y = a.width = a.height = NaN), !e || !r)
      return !1;
    e instanceof t || (e = Tu(R1, e.x, e.y, e.width, e.height)), r instanceof t || (r = Tu(k1, r.x, r.y, r.width, r.height));
    var s = !!n;
    st.reset(i, s);
    var u = st.touchThreshold, l = e.x + u, f = e.x + e.width - u, h = e.y + u, c = e.y + e.height - u, v = r.x + u, d = r.x + r.width - u, g = r.y + u, m = r.y + r.height - u;
    if (l > f || h > c || v > d || g > m)
      return !1;
    var p = !(f < v || d < l || c < g || m < h);
    return (s || a) && (sa[0] = 1 / 0, sa[1] = 0, Nc(l, f, v, d, 0, s, a, o), Nc(h, c, g, m, 1, s, a, o), s && ge.copy(n, p ? st.useDir ? st.dirMinTv : Qi : Kl)), p;
  }, t.contain = function(e, r, n) {
    return r >= e.x && r <= e.x + e.width && n >= e.y && n <= e.y + e.height;
  }, t.prototype.contain = function(e, r) {
    return t.contain(this, e, r);
  }, t.prototype.clone = function() {
    return new t(this.x, this.y, this.width, this.height);
  }, t.prototype.copy = function(e) {
    Pc(this, e);
  }, t.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, t.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, t.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, t.create = function(e) {
    return new t(e ? e.x : 0, e ? e.y : 0, e ? e.width : 0, e ? e.height : 0);
  }, t.copy = function(e, r) {
    return e.x = r.x, e.y = r.y, e.width = r.width, e.height = r.height, e;
  }, t.applyTransform = function(e, r, n) {
    if (!n) {
      e !== r && Pc(e, r);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      e.x = r.x * i + o, e.y = r.y * a + s, e.width = r.width * i, e.height = r.height * a, e.width < 0 && (e.x += e.width, e.width = -e.width), e.height < 0 && (e.y += e.height, e.height = -e.height);
      return;
    }
    Ur.x = Yr.x = r.x, Ur.y = Xr.y = r.y, Wr.x = Xr.x = r.x + r.width, Wr.y = Yr.y = r.y + r.height, Ur.transform(n), Xr.transform(n), Wr.transform(n), Yr.transform(n), e.x = pn(Ur.x, Wr.x, Yr.x, Xr.x), e.y = pn(Ur.y, Wr.y, Yr.y, Xr.y);
    var u = jn(Ur.x, Wr.x, Yr.x, Xr.x), l = jn(Ur.y, Wr.y, Yr.y, Xr.y);
    e.width = u - e.x, e.height = l - e.y;
  }, t.calculateTransform = function(e, r, n) {
    var i = n.width / r.width, a = n.height / r.height;
    return e = Na(e || []), Zl(e, e, Su(wu, -r.x, -r.y)), C1(e, e, Su(wu, i, a)), Zl(e, e, Su(wu, n.x, n.y)), e;
  }, t;
})();
j.create;
var Tu = j.set, Pc = j.copy, N1 = j.calculateTransform;
j.applyTransform;
j.contain;
var R1 = new j(0, 0, 0, 0), k1 = new j(0, 0, 0, 0), wu = [];
function Nc(t, e, r, n, i, a, o, s) {
  var u = ql(e - r), l = ql(n - t), f = pn(u, l), h = Oc[i], c = Oc[1 - i], v = P1[i];
  e < r || n < t ? u < l ? (a && (Kl[h] = -u), s && (o[h] = e, o[v] = 0)) : (a && (Kl[h] = l), s && (o[h] = t, o[v] = 0)) : (o && (o[h] = jn(t, r), o[v] = pn(e, n) - o[h]), a && (f < sa[0] || st.useDir) && (sa[0] = pn(f, sa[0]), (u < l || !st.bidirectional) && (Qi[h] = u, Qi[c] = 0, st.useDir && st.calcDirMTV()), (u >= l || !st.bidirectional) && (Qi[h] = -l, Qi[c] = 0, st.useDir && st.calcDirMTV())));
}
function Bg() {
  var t = 0, e = new ge(), r = new ge(), n = {
    minTv: new ge(),
    maxTv: new ge(),
    useDir: !1,
    dirMinTv: new ge(),
    touchThreshold: 0,
    bidirectional: !0,
    negativeSize: !1,
    reset: function(a, o) {
      n.touchThreshold = 0, a && a.touchThreshold != null && (n.touchThreshold = jn(0, a.touchThreshold)), n.negativeSize = !1, o && (n.minTv.set(1 / 0, 1 / 0), n.maxTv.set(0, 0), n.useDir = !1, a && a.direction != null && (n.useDir = !0, n.dirMinTv.copy(n.minTv), r.copy(n.minTv), t = a.direction, n.bidirectional = a.bidirectional == null || !!a.bidirectional, n.bidirectional || e.set(Math.cos(t), Math.sin(t))));
    },
    calcDirMTV: function() {
      var a = n.minTv, o = n.dirMinTv, s = a.y * a.y + a.x * a.x, u = Math.sin(t), l = Math.cos(t), f = u * a.y + l * a.x;
      if (i(f)) {
        i(a.x) && i(a.y) && o.set(0, 0);
        return;
      }
      if (r.x = s * l / f, r.y = s * u / f, i(r.x) && i(r.y)) {
        o.set(0, 0);
        return;
      }
      (n.bidirectional || e.dot(r) > 0) && r.len() < o.len() && o.copy(r);
    }
  };
  function i(a) {
    return ql(a) < 1e-10;
  }
  return n;
}
function Yt(t) {
  qa || (qa = new vi(100)), t = t || Nr;
  var e = qa.get(t);
  return e || (e = {
    font: t,
    strWidthCache: new vi(500),
    asciiWidthMap: null,
    asciiWidthMapTried: !1,
    stWideCharWidth: ut.measureText("国", t).width,
    asciiCharWidth: ut.measureText("a", t).width
  }, qa.put(t, e)), e;
}
var qa;
function B1(t) {
  if (!(xu >= Rc)) {
    t = t || Nr;
    for (var e = [], r = +/* @__PURE__ */ new Date(), n = 0; n <= 127; n++)
      e[n] = ut.measureText(String.fromCharCode(n), t).width;
    var i = +/* @__PURE__ */ new Date() - r;
    return i > 16 ? xu = Rc : i > 2 && xu++, e;
  }
}
var xu = 0, Rc = 5;
function Vg(t, e) {
  return t.asciiWidthMapTried || (t.asciiWidthMap = B1(t.font), t.asciiWidthMapTried = !0), 0 <= e && e <= 127 ? t.asciiWidthMap != null ? t.asciiWidthMap[e] : t.asciiCharWidth : t.stWideCharWidth;
}
function Xt(t, e) {
  var r = t.strWidthCache, n = r.get(e);
  return n == null && (n = ut.measureText(e, t.font).width, r.put(e, n)), n;
}
function kc(t, e, r, n) {
  var i = Xt(Yt(e), t), a = Ks(e), o = di(0, i, r), s = Sn(0, a, n), u = new j(o, s, i, a);
  return u;
}
function Fg(t, e, r, n) {
  var i = ((t || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return kc(i[0], e, r, n);
  for (var o = new j(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = kc(i[s], e, r, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function di(t, e, r, n) {
  return r === "right" ? n ? t += e : t -= e : r === "center" && (n ? t += e / 2 : t -= e / 2), t;
}
function Sn(t, e, r, n) {
  return r === "middle" ? n ? t += e / 2 : t -= e / 2 : r === "bottom" && (n ? t += e : t -= e), t;
}
function Ks(t) {
  return Yt(t).stWideCharWidth;
}
function pi(t, e) {
  return typeof t == "string" ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
}
function zg(t, e, r) {
  var n = e.position || "inside", i = e.distance != null ? e.distance : 5, a = r.height, o = r.width, s = a / 2, u = r.x, l = r.y, f = "left", h = "top";
  if (n instanceof Array)
    u += pi(n[0], r.width), l += pi(n[1], r.height), f = null, h = null;
  else
    switch (n) {
      case "left":
        u -= i, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += i + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= i, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + i, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += i, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - i, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += i, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - i, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += i, l += i;
        break;
      case "insideTopRight":
        u += o - i, l += i, f = "right";
        break;
      case "insideBottomLeft":
        u += i, l += a - i, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - i, l += a - i, f = "right", h = "bottom";
        break;
    }
  return t = t || {}, t.x = u, t.y = l, t.align = f, t.verticalAlign = h, t;
}
var Cu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function V1(t, e, r, n, i, a) {
  if (!r) {
    t.text = "", t.isTruncated = !1;
    return;
  }
  var o = (e + "").split(`
`);
  a = Hg(r, n, i, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    Gg(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  t.text = o.join(`
`), t.isTruncated = s;
}
function Hg(t, e, r, n) {
  n = n || {};
  var i = k({}, n);
  r = Y(r, "..."), i.maxIterations = Y(n.maxIterations, 2);
  var a = i.minChar = Y(n.minChar, 0), o = i.fontMeasureInfo = Yt(e), s = o.asciiCharWidth;
  i.placeholder = Y(n.placeholder, "");
  for (var u = t = Math.max(0, t - 1), l = 0; l < a && u >= s; l++)
    u -= s;
  var f = Xt(o, r);
  return f > u && (r = "", f = 0), u = t - f, i.ellipsis = r, i.ellipsisWidth = f, i.contentWidth = u, i.containerWidth = t, i;
}
function Gg(t, e, r) {
  var n = r.containerWidth, i = r.contentWidth, a = r.fontMeasureInfo;
  if (!n) {
    t.textLine = "", t.isTruncated = !1;
    return;
  }
  var o = Xt(a, e);
  if (o <= n) {
    t.textLine = e, t.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= i || s >= r.maxIterations) {
      e += r.ellipsis;
      break;
    }
    var u = s === 0 ? F1(e, i, a) : o > 0 ? Math.floor(e.length * i / o) : 0;
    e = e.substr(0, u), o = Xt(a, e);
  }
  e === "" && (e = r.placeholder), t.textLine = e, t.isTruncated = !0;
}
function F1(t, e, r) {
  for (var n = 0, i = 0, a = t.length; i < a && n < e; i++)
    n += Vg(r, t.charCodeAt(i));
  return i;
}
function z1(t, e, r, n) {
  var i = ph(t), a = e.overflow, o = e.padding, s = o ? o[1] + o[3] : 0, u = o ? o[0] + o[2] : 0, l = e.font, f = a === "truncate", h = Ks(l), c = Y(e.lineHeight, h), v = e.lineOverflow === "truncate", d = !1, g = e.width;
  g == null && r != null && (g = r - s);
  var m = e.height;
  m == null && n != null && (m = n - u);
  var p;
  g != null && (a === "break" || a === "breakAll") ? p = i ? Ug(i, e.font, g, a === "breakAll", 0).lines : [] : p = i ? i.split(`
`) : [];
  var y = p.length * c;
  if (m == null && (m = y), y > m && v) {
    var _ = Math.floor(m / c);
    d = d || p.length > _, p = p.slice(0, _), y = p.length * c;
  }
  if (i && f && g != null)
    for (var S = Hg(g, l, e.ellipsis, {
      minChar: e.truncateMinChar,
      placeholder: e.placeholder
    }), b = {}, T = 0; T < p.length; T++)
      Gg(b, p[T], S), p[T] = b.textLine, d = d || b.isTruncated;
  for (var w = m, E = 0, D = Yt(l), T = 0; T < p.length; T++)
    E = Math.max(Xt(D, p[T]), E);
  g == null && (g = E);
  var C = g;
  return w += u, C += s, {
    lines: p,
    height: m,
    outerWidth: C,
    outerHeight: w,
    lineHeight: c,
    calculatedLineHeight: h,
    contentWidth: E,
    contentHeight: y,
    width: g,
    isTruncated: d
  };
}
var H1 = /* @__PURE__ */ (function() {
  function t() {
  }
  return t;
})(), Bc = /* @__PURE__ */ (function() {
  function t(e) {
    this.tokens = [], e && (this.tokens = e);
  }
  return t;
})(), G1 = /* @__PURE__ */ (function() {
  function t() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return t;
})();
function U1(t, e, r, n, i) {
  var a = new G1(), o = ph(t);
  if (!o)
    return a;
  var s = e.padding, u = s ? s[1] + s[3] : 0, l = s ? s[0] + s[2] : 0, f = e.width;
  f == null && r != null && (f = r - u);
  var h = e.height;
  h == null && n != null && (h = n - l);
  for (var c = e.overflow, v = (c === "break" || c === "breakAll") && f != null ? { width: f, accumWidth: 0, breakAll: c === "breakAll" } : null, d = Cu.lastIndex = 0, g; (g = Cu.exec(o)) != null; ) {
    var m = g.index;
    m > d && Du(a, o.substring(d, m), e, v), Du(a, g[2], e, v, g[1]), d = Cu.lastIndex;
  }
  d < o.length && Du(a, o.substring(d, o.length), e, v);
  var p = [], y = 0, _ = 0, S = c === "truncate", b = e.lineOverflow === "truncate", T = {};
  function w(ae, Ue, Mt) {
    ae.width = Ue, ae.lineHeight = Mt, y += Mt, _ = Math.max(_, Ue);
  }
  e: for (var E = 0; E < a.lines.length; E++) {
    for (var D = a.lines[E], C = 0, M = 0, L = 0; L < D.tokens.length; L++) {
      var A = D.tokens[L], I = A.styleName && e.rich[A.styleName] || {}, P = A.textPadding = I.padding, O = P ? P[1] + P[3] : 0, B = A.font = I.font || e.font;
      A.contentHeight = Ks(B);
      var G = Y(I.height, A.contentHeight);
      if (A.innerHeight = G, P && (G += P[0] + P[2]), A.height = G, A.lineHeight = Ar(I.lineHeight, e.lineHeight, G), A.align = I && I.align || i, A.verticalAlign = I && I.verticalAlign || "middle", b && h != null && y + A.lineHeight > h) {
        var U = a.lines.length;
        L > 0 ? (D.tokens = D.tokens.slice(0, L), w(D, M, C), a.lines = a.lines.slice(0, E + 1)) : a.lines = a.lines.slice(0, E), a.isTruncated = a.isTruncated || a.lines.length < U;
        break e;
      }
      var J = I.width, $ = J == null || J === "auto";
      if (typeof J == "string" && J.charAt(J.length - 1) === "%")
        A.percentWidth = J, p.push(A), A.contentWidth = Xt(Yt(B), A.text);
      else {
        if ($) {
          var te = I.backgroundColor, X = te && te.image;
          X && (X = x1(X), qs(X) && (A.width = Math.max(A.width, X.width * G / X.height)));
        }
        var F = S && f != null ? f - M : null;
        F != null && F < A.width ? !$ || F < O ? (A.text = "", A.width = A.contentWidth = 0) : (V1(T, A.text, F - O, B, e.ellipsis, { minChar: e.truncateMinChar }), A.text = T.text, a.isTruncated = a.isTruncated || T.isTruncated, A.width = A.contentWidth = Xt(Yt(B), A.text)) : A.contentWidth = Xt(Yt(B), A.text);
      }
      A.width += O, M += A.width, I && (C = Math.max(C, A.lineHeight));
    }
    w(D, M, C);
  }
  a.outerWidth = a.width = Y(f, _), a.outerHeight = a.height = Y(h, y), a.contentHeight = y, a.contentWidth = _, a.outerWidth += u, a.outerHeight += l;
  for (var E = 0; E < p.length; E++) {
    var A = p[E], ne = A.percentWidth;
    A.width = parseInt(ne, 10) / 100 * a.width;
  }
  return a;
}
function Du(t, e, r, n, i) {
  var a = e === "", o = i && r.rich[i] || {}, s = t.lines, u = o.font || r.font, l = !1, f, h;
  if (n) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = pi(o.width, n.width) + v;
      s.length > 0 && d + n.accumWidth > n.width && (f = e.split(`
`), l = !0), n.accumWidth = d;
    } else {
      var g = Ug(e, u, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = g.accumWidth + v, h = g.linesWidths, f = g.lines;
    }
  }
  f || (f = e.split(`
`));
  for (var m = Yt(u), p = 0; p < f.length; p++) {
    var y = f[p], _ = new H1();
    if (_.styleName = i, _.text = y, _.isLineHolder = !y && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[p] : Xt(m, y), !p && !l) {
      var S = (s[s.length - 1] || (s[0] = new Bc())).tokens, b = S.length;
      b === 1 && S[0].isLineHolder ? S[0] = _ : (y || !b || a) && S.push(_);
    } else
      s.push(new Bc([_]));
  }
}
function W1(t) {
  var e = t.charCodeAt(0);
  return e >= 32 && e <= 591 || e >= 880 && e <= 4351 || e >= 4608 && e <= 5119 || e >= 7680 && e <= 8303;
}
var Y1 = Di(",&?/;] ".split(""), function(t, e) {
  return t[e] = !0, t;
}, {});
function X1(t) {
  return W1(t) ? !!Y1[t] : !0;
}
function Ug(t, e, r, n, i) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = Yt(e), c = 0; c < t.length; c++) {
    var v = t.charAt(c);
    if (v === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var d = Vg(h, v.charCodeAt(0)), g = n ? !1 : !X1(v);
    if (a.length ? f + d > r : i + f + d > r) {
      f ? (s || u) && (g ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += v, l += d, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = v, f = d)) : g ? (a.push(u), o.push(l), u = v, l = d) : (a.push(v), o.push(d));
      continue;
    }
    f += d, g ? (u += v, l += d) : (u && (s += u, u = "", l = 0), s += v);
  }
  return u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
function Vc(t, e, r, n, i, a) {
  if (t.baseX = r, t.baseY = n, t.outerWidth = t.outerHeight = null, !!e) {
    var o = e.width * 2, s = e.height * 2;
    j.set(Fc, di(r, o, i), Sn(n, s, a), o, s), j.intersect(e, Fc, null, zc);
    var u = zc.outIntersectRect;
    t.outerWidth = u.width, t.outerHeight = u.height, t.baseX = di(u.x, u.width, i, !0), t.baseY = Sn(u.y, u.height, a, !0);
  }
}
var Fc = new j(0, 0, 0, 0), zc = { outIntersectRect: {}, clamp: !0 };
function ph(t) {
  return t != null ? t += "" : t = "";
}
function Z1(t) {
  var e = ph(t.text), r = t.font, n = Xt(Yt(r), e), i = Ks(r);
  return Ql(t, n, i, null);
}
function Ql(t, e, r, n) {
  var i = new j(di(t.x || 0, e, t.textAlign), Sn(t.y || 0, r, t.textBaseline), e, r), a = n ?? (Wg(t) ? t.lineWidth : 0);
  return a > 0 && (i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a), i;
}
function Wg(t) {
  var e = t.stroke;
  return e != null && e !== "none" && t.lineWidth > 0;
}
var Hc = Na, Gc = 5e-5;
function Zr(t) {
  return t > Gc || t < -Gc;
}
var $r = [], On = [], Eu = Wt(), Mu = Math.abs, ka = (function() {
  function t() {
  }
  return t.prototype.getLocalTransform = function(e) {
    return $1(this, e);
  }, t.prototype.setPosition = function(e) {
    this.x = e[0], this.y = e[1];
  }, t.prototype.setScale = function(e) {
    this.scaleX = e[0], this.scaleY = e[1];
  }, t.prototype.setSkew = function(e) {
    this.skewX = e[0], this.skewY = e[1];
  }, t.prototype.setOrigin = function(e) {
    this.originX = e[0], this.originY = e[1];
  }, t.prototype.needLocalTransform = function() {
    return Zr(this.rotation) || Zr(this.x) || Zr(this.y) || Zr(this.scaleX - 1) || Zr(this.scaleY - 1) || Zr(this.skewX) || Zr(this.skewY);
  }, t.prototype.updateTransform = function() {
    var e = this.parent && this.parent.transform, r = this.needLocalTransform(), n = this.transform;
    if (!(r || e)) {
      n && (Hc(n), this.invTransform = null);
      return;
    }
    n = n || Wt(), r ? this.getLocalTransform(n) : Hc(n), e && (r ? oa(n, e, n) : vh(n, e)), this.transform = n, this._resolveGlobalScaleRatio(n), this.invTransform = this.invTransform || Wt(), Ra(this.invTransform, n);
  }, t.prototype._resolveGlobalScaleRatio = function(e) {
    var r = this.globalScaleRatio;
    if (r != null && r !== 1) {
      this.getGlobalScale($r);
      var n = $r[0] < 0 ? -1 : 1, i = $r[1] < 0 ? -1 : 1, a = (($r[0] - n) * r + n) / $r[0] || 0, o = (($r[1] - i) * r + i) / $r[1] || 0;
      e[0] *= a, e[1] *= a, e[2] *= o, e[3] *= o;
    }
  }, t.prototype.getComputedTransform = function() {
    for (var e = this, r = []; e; )
      r.push(e), e = e.parent;
    for (; e = r.pop(); )
      e.updateTransform();
    return this.transform;
  }, t.prototype.setLocalTransform = function(e) {
    if (e) {
      var r = e[0] * e[0] + e[1] * e[1], n = e[2] * e[2] + e[3] * e[3], i = Math.atan2(e[1], e[0]), a = Math.PI / 2 + i - Math.atan2(e[3], e[2]);
      n = Math.sqrt(n) * Math.cos(a), r = Math.sqrt(r), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +e[4], this.y = +e[5], this.scaleX = r, this.scaleY = n, this.originX = 0, this.originY = 0;
    }
  }, t.prototype.decomposeTransform = function() {
    if (this.transform) {
      var e = this.parent, r = this.transform;
      e && e.transform && (e.invTransform = e.invTransform || Wt(), oa(On, e.invTransform, r), r = On);
      var n = this.originX, i = this.originY;
      (n || i) && (Eu[4] = n, Eu[5] = i, oa(On, r, Eu), On[4] -= n, On[5] -= i, r = On), this.setLocalTransform(r);
    }
  }, t.prototype.getGlobalScale = function(e) {
    var r = this.transform;
    return e = e || [], r ? (e[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), e[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (e[0] = -e[0]), r[3] < 0 && (e[1] = -e[1]), e) : (e[0] = 1, e[1] = 1, e);
  }, t.prototype.transformCoordToLocal = function(e, r) {
    var n = [e, r], i = this.invTransform;
    return i && Dt(n, n, i), n;
  }, t.prototype.transformCoordToGlobal = function(e, r) {
    var n = [e, r], i = this.transform;
    return i && Dt(n, n, i), n;
  }, t.prototype.getLineScale = function() {
    var e = this.transform;
    return e && Mu(e[0] - 1) > 1e-10 && Mu(e[3] - 1) > 1e-10 ? Math.sqrt(Mu(e[0] * e[3] - e[2] * e[1])) : 1;
  }, t.prototype.copyTransform = function(e) {
    ns(this, e);
  }, t.getLocalTransform = function(e, r) {
    r = r || [];
    var n = e.originX || 0, i = e.originY || 0, a = e.scaleX, o = e.scaleY, s = e.anchorX, u = e.anchorY, l = e.rotation || 0, f = e.x, h = e.y, c = e.skewX ? Math.tan(e.skewX) : 0, v = e.skewY ? Math.tan(-e.skewY) : 0;
    if (n || i || s || u) {
      var d = n + s, g = i + u;
      r[4] = -d * a - c * g * o, r[5] = -g * o - v * d * a;
    } else
      r[4] = r[5] = 0;
    return r[0] = a, r[3] = o, r[1] = v * a, r[2] = c * o, l && dh(r, r, l), r[4] += n + f, r[5] += i + h, r;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.scaleX = e.scaleY = e.globalScaleRatio = 1, e.x = e.y = e.originX = e.originY = e.skewX = e.skewY = e.rotation = e.anchorX = e.anchorY = 0;
  })(), t;
})(), $1 = ka.getLocalTransform, Qs = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function ns(t, e) {
  return J0(t, e, Qs);
}
var ua = {
  linear: function(t) {
    return t;
  },
  quadraticIn: function(t) {
    return t * t;
  },
  quadraticOut: function(t) {
    return t * (2 - t);
  },
  quadraticInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
  },
  cubicIn: function(t) {
    return t * t * t;
  },
  cubicOut: function(t) {
    return --t * t * t + 1;
  },
  cubicInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
  },
  quarticIn: function(t) {
    return t * t * t * t;
  },
  quarticOut: function(t) {
    return 1 - --t * t * t * t;
  },
  quarticInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
  },
  quinticIn: function(t) {
    return t * t * t * t * t;
  },
  quinticOut: function(t) {
    return --t * t * t * t * t + 1;
  },
  quinticInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
  },
  sinusoidalIn: function(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  },
  sinusoidalOut: function(t) {
    return Math.sin(t * Math.PI / 2);
  },
  sinusoidalInOut: function(t) {
    return 0.5 * (1 - Math.cos(Math.PI * t));
  },
  exponentialIn: function(t) {
    return t === 0 ? 0 : Math.pow(1024, t - 1);
  },
  exponentialOut: function(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  },
  exponentialInOut: function(t) {
    return t === 0 ? 0 : t === 1 ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
  },
  circularIn: function(t) {
    return 1 - Math.sqrt(1 - t * t);
  },
  circularOut: function(t) {
    return Math.sqrt(1 - --t * t);
  },
  circularInOut: function(t) {
    return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  elasticIn: function(t) {
    var e, r = 0.1, n = 0.4;
    return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)));
  },
  elasticOut: function(t) {
    var e, r = 0.1, n = 0.4;
    return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
  },
  elasticInOut: function(t) {
    var e, r = 0.1, n = 0.4;
    return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), (t *= 2) < 1 ? -0.5 * (r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * 0.5 + 1);
  },
  backIn: function(t) {
    var e = 1.70158;
    return t * t * ((e + 1) * t - e);
  },
  backOut: function(t) {
    var e = 1.70158;
    return --t * t * ((e + 1) * t + e) + 1;
  },
  backInOut: function(t) {
    var e = 2.5949095;
    return (t *= 2) < 1 ? 0.5 * (t * t * ((e + 1) * t - e)) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
  },
  bounceIn: function(t) {
    return 1 - ua.bounceOut(1 - t);
  },
  bounceOut: function(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  bounceInOut: function(t) {
    return t < 0.5 ? ua.bounceIn(t * 2) * 0.5 : ua.bounceOut(t * 2 - 1) * 0.5 + 0.5;
  }
}, Ka = Math.pow, Lr = Math.sqrt, is = 1e-8, Yg = 1e-4, Uc = Lr(3), Qa = 1 / 3, Ht = Ei(), _t = Ei(), ai = Ei();
function Er(t) {
  return t > -is && t < is;
}
function Xg(t) {
  return t > is || t < -is;
}
function Re(t, e, r, n, i) {
  var a = 1 - i;
  return a * a * (a * t + 3 * i * e) + i * i * (i * n + 3 * a * r);
}
function Wc(t, e, r, n, i) {
  var a = 1 - i;
  return 3 * (((e - t) * a + 2 * (r - e) * i) * a + (n - r) * i * i);
}
function as(t, e, r, n, i, a) {
  var o = n + 3 * (e - r) - t, s = 3 * (r - e * 2 + t), u = 3 * (e - t), l = t - i, f = s * s - 3 * o * u, h = s * u - 9 * o * l, c = u * u - 3 * s * l, v = 0;
  if (Er(f) && Er(h))
    if (Er(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var g = h * h - 4 * f * c;
    if (Er(g)) {
      var m = h / f, d = -s / o + m, p = -m / 2;
      d >= 0 && d <= 1 && (a[v++] = d), p >= 0 && p <= 1 && (a[v++] = p);
    } else if (g > 0) {
      var y = Lr(g), _ = f * s + 1.5 * o * (-h + y), S = f * s + 1.5 * o * (-h - y);
      _ < 0 ? _ = -Ka(-_, Qa) : _ = Ka(_, Qa), S < 0 ? S = -Ka(-S, Qa) : S = Ka(S, Qa);
      var d = (-s - (_ + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var b = (2 * f * s - 3 * o * h) / (2 * Lr(f * f * f)), T = Math.acos(b) / 3, w = Lr(f), E = Math.cos(T), d = (-s - 2 * w * E) / (3 * o), p = (-s + w * (E + Uc * Math.sin(T))) / (3 * o), D = (-s + w * (E - Uc * Math.sin(T))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), p >= 0 && p <= 1 && (a[v++] = p), D >= 0 && D <= 1 && (a[v++] = D);
    }
  }
  return v;
}
function Zg(t, e, r, n, i) {
  var a = 6 * r - 12 * e + 6 * t, o = 9 * e + 3 * n - 3 * t - 9 * r, s = 3 * e - 3 * t, u = 0;
  if (Er(o)) {
    if (Xg(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Er(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = Lr(f), l = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function os(t, e, r, n, i, a) {
  var o = (e - t) * i + t, s = (r - e) * i + e, u = (n - r) * i + r, l = (s - o) * i + o, f = (u - s) * i + s, h = (f - l) * i + l;
  a[0] = t, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = n;
}
function q1(t, e, r, n, i, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, g, m, p;
  Ht[0] = u, Ht[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    _t[0] = Re(t, r, i, o, y), _t[1] = Re(e, n, a, s, y), m = ii(Ht, _t), m < v && (h = y, v = m);
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(c < Yg); _++)
    d = h - c, g = h + c, _t[0] = Re(t, r, i, o, d), _t[1] = Re(e, n, a, s, d), m = ii(_t, Ht), d >= 0 && m < v ? (h = d, v = m) : (ai[0] = Re(t, r, i, o, g), ai[1] = Re(e, n, a, s, g), p = ii(ai, Ht), g <= 1 && p < v ? (h = g, v = p) : c *= 0.5);
  return Lr(v);
}
function K1(t, e, r, n, i, a, o, s, u) {
  for (var l = t, f = e, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, g = Re(t, r, i, o, d), m = Re(e, n, a, s, d), p = g - l, y = m - f;
    h += Math.sqrt(p * p + y * y), l = g, f = m;
  }
  return h;
}
function Je(t, e, r, n) {
  var i = 1 - n;
  return i * (i * t + 2 * n * e) + n * n * r;
}
function Yc(t, e, r, n) {
  return 2 * ((1 - n) * (e - t) + n * (r - e));
}
function Q1(t, e, r, n, i) {
  var a = t - 2 * e + r, o = 2 * (e - t), s = t - n, u = 0;
  if (Er(a)) {
    if (Xg(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Er(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var h = Lr(f), l = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function $g(t, e, r) {
  var n = t + r - 2 * e;
  return n === 0 ? 0.5 : (t - e) / n;
}
function ss(t, e, r, n, i) {
  var a = (e - t) * n + t, o = (r - e) * n + e, s = (o - a) * n + a;
  i[0] = t, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r;
}
function J1(t, e, r, n, i, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  Ht[0] = o, Ht[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    _t[0] = Je(t, r, i, c), _t[1] = Je(e, n, a, c);
    var v = ii(Ht, _t);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < Yg); d++) {
    var g = l - f, m = l + f;
    _t[0] = Je(t, r, i, g), _t[1] = Je(e, n, a, g);
    var v = ii(_t, Ht);
    if (g >= 0 && v < h)
      l = g, h = v;
    else {
      ai[0] = Je(t, r, i, m), ai[1] = Je(e, n, a, m);
      var p = ii(ai, Ht);
      m <= 1 && p < h ? (l = m, h = p) : f *= 0.5;
    }
  }
  return Lr(h);
}
function j1(t, e, r, n, i, a, o) {
  for (var s = t, u = e, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = Je(t, r, i, c), d = Je(e, n, a, c), g = v - s, m = d - u;
    l += Math.sqrt(g * g + m * m), s = v, u = d;
  }
  return l;
}
var eS = /cubic-bezier\(([0-9,\.e ]+)\)/;
function qg(t) {
  var e = t && eS.exec(t);
  if (e) {
    var r = e[1].split(","), n = +Gt(r[0]), i = +Gt(r[1]), a = +Gt(r[2]), o = +Gt(r[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : as(0, n, a, 1, u, s) && Re(0, i, o, 1, s[0]);
    };
  }
}
var tS = (function() {
  function t(e) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = e.life || 1e3, this._delay = e.delay || 0, this.loop = e.loop || !1, this.onframe = e.onframe || He, this.ondestroy = e.ondestroy || He, this.onrestart = e.onrestart || He, e.easing && this.setEasing(e.easing);
  }
  return t.prototype.step = function(e, r) {
    if (this._inited || (this._startTime = e + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += r;
      return;
    }
    var n = this._life, i = e - this._startTime - this._pausedTime, a = i / n;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = i % n;
        this._startTime = e - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, t.prototype.pause = function() {
    this._paused = !0;
  }, t.prototype.resume = function() {
    this._paused = !1;
  }, t.prototype.setEasing = function(e) {
    this.easing = e, this.easingFunc = Q(e) ? e : ua[e] || qg(e);
  }, t;
})(), Xc = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function Ir(t) {
  return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t;
}
function Jl(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function Au(t) {
  var e = t;
  return e.length && e.charAt(e.length - 1) === "%" ? Ir(parseFloat(e) / 100 * 255) : Ir(parseInt(e, 10));
}
function bn(t) {
  var e = t;
  return e.length && e.charAt(e.length - 1) === "%" ? Jl(parseFloat(e) / 100) : Jl(parseFloat(e));
}
function Lu(t, e, r) {
  return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? t + (e - t) * r * 6 : r * 2 < 1 ? e : r * 3 < 2 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function Ja(t, e, r) {
  return t + (e - t) * r;
}
function dt(t, e, r, n, i) {
  return t[0] = e, t[1] = r, t[2] = n, t[3] = i, t;
}
function jl(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
}
var Kg = new vi(20), ja = null;
function Pn(t, e) {
  ja && jl(ja, e), ja = Kg.put(t, ja || e.slice());
}
function Zt(t, e) {
  if (t) {
    e = e || [];
    var r = Kg.get(t);
    if (r)
      return jl(e, r);
    t = t + "";
    var n = t.replace(/ /g, "").toLowerCase();
    if (n in Xc)
      return jl(e, Xc[n]), Pn(t, e), e;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          dt(e, 0, 0, 0, 1);
          return;
        }
        return dt(e, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Pn(t, e), e;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          dt(e, 0, 0, 0, 1);
          return;
        }
        return dt(e, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Pn(t, e), e;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var u = n.substr(0, o), l = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? dt(e, +l[0], +l[1], +l[2], 1) : dt(e, 0, 0, 0, 1);
          f = bn(l.pop());
        case "rgb":
          if (l.length >= 3)
            return dt(e, Au(l[0]), Au(l[1]), Au(l[2]), l.length === 3 ? f : bn(l[3])), Pn(t, e), e;
          dt(e, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            dt(e, 0, 0, 0, 1);
            return;
          }
          return l[3] = bn(l[3]), ef(l, e), Pn(t, e), e;
        case "hsl":
          if (l.length !== 3) {
            dt(e, 0, 0, 0, 1);
            return;
          }
          return ef(l, e), Pn(t, e), e;
        default:
          return;
      }
    }
    dt(e, 0, 0, 0, 1);
  }
}
function ef(t, e) {
  var r = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = bn(t[1]), i = bn(t[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return e = e || [], dt(e, Ir(Lu(o, a, r + 1 / 3) * 255), Ir(Lu(o, a, r) * 255), Ir(Lu(o, a, r - 1 / 3) * 255), 1), t.length === 4 && (e[3] = t[3]), e;
}
function rS(t) {
  if (t) {
    var e = t[0] / 255, r = t[1] / 255, n = t[2] / 255, i = Math.min(e, r, n), a = Math.max(e, r, n), o = a - i, s = (a + i) / 2, u, l;
    if (o === 0)
      u = 0, l = 0;
    else {
      s < 0.5 ? l = o / (a + i) : l = o / (2 - a - i);
      var f = ((a - e) / 6 + o / 2) / o, h = ((a - r) / 6 + o / 2) / o, c = ((a - n) / 6 + o / 2) / o;
      e === a ? u = c - h : r === a ? u = 1 / 3 + f - c : n === a && (u = 2 / 3 + h - f), u < 0 && (u += 1), u > 1 && (u -= 1);
    }
    var v = [u * 360, l, s];
    return t[3] != null && v.push(t[3]), v;
  }
}
function Zc(t, e) {
  var r = Zt(t);
  if (r) {
    for (var n = 0; n < 3; n++)
      r[n] = r[n] * (1 - e) | 0, r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
    return Ba(r, r.length === 4 ? "rgba" : "rgb");
  }
}
function nS(t, e, r) {
  if (!(!(e && e.length) || !(t >= 0 && t <= 1))) {
    var n = t * (e.length - 1), i = Math.floor(n), a = Math.ceil(n), o = Zt(e[i]), s = Zt(e[a]), u = n - i, l = Ba([
      Ir(Ja(o[0], s[0], u)),
      Ir(Ja(o[1], s[1], u)),
      Ir(Ja(o[2], s[2], u)),
      Jl(Ja(o[3], s[3], u))
    ], "rgba");
    return r ? {
      color: l,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : l;
  }
}
function tf(t, e, r, n) {
  var i = Zt(t);
  if (t)
    return i = rS(i), r != null && (i[1] = bn(Q(r) ? r(i[1]) : r)), n != null && (i[2] = bn(Q(n) ? n(i[2]) : n)), Ba(ef(i), "rgba");
}
function Ba(t, e) {
  if (!(!t || !t.length)) {
    var r = t[0] + "," + t[1] + "," + t[2];
    return (e === "rgba" || e === "hsva" || e === "hsla") && (r += "," + t[3]), e + "(" + r + ")";
  }
}
function us(t, e) {
  var r = Zt(t);
  return r ? (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) * r[3] / 255 + (1 - r[3]) * e : 0;
}
var $c = new vi(100);
function qc(t) {
  if (H(t)) {
    var e = $c.get(t);
    return e || (e = Zc(t, -0.1), $c.put(t, e)), e;
  } else if (Xs(t)) {
    var r = k({}, t);
    return r.colorStops = q(t.colorStops, function(n) {
      return {
        offset: n.offset,
        color: Zc(n.color, -0.1)
      };
    }), r;
  }
  return t;
}
function iS(t) {
  return t.type === "linear";
}
function aS(t) {
  return t.type === "radial";
}
(function() {
  return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(t) {
    return Buffer.from(t).toString("base64");
  } : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(t) {
    return btoa(unescape(encodeURIComponent(t)));
  } : function(t) {
    return process.env.NODE_ENV !== "production" && _n("Base64 isn't natively supported in the current environment."), null;
  };
})();
var rf = Array.prototype.slice;
function lr(t, e, r) {
  return (e - t) * r + t;
}
function Iu(t, e, r, n) {
  for (var i = e.length, a = 0; a < i; a++)
    t[a] = lr(e[a], r[a], n);
  return t;
}
function oS(t, e, r, n) {
  for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
    t[o] || (t[o] = []);
    for (var s = 0; s < a; s++)
      t[o][s] = lr(e[o][s], r[o][s], n);
  }
  return t;
}
function eo(t, e, r, n) {
  for (var i = e.length, a = 0; a < i; a++)
    t[a] = e[a] + r[a] * n;
  return t;
}
function Kc(t, e, r, n) {
  for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
    t[o] || (t[o] = []);
    for (var s = 0; s < a; s++)
      t[o][s] = e[o][s] + r[o][s] * n;
  }
  return t;
}
function sS(t, e) {
  for (var r = t.length, n = e.length, i = r > n ? e : t, a = Math.min(r, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(r, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function uS(t, e, r) {
  var n = t, i = e;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var u = a; u < o; u++)
          n.push(r === 1 ? i[u] : rf.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (r === 1)
        isNaN(n[u]) && (n[u] = i[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function Vo(t) {
  if (nt(t)) {
    var e = t.length;
    if (nt(t[0])) {
      for (var r = [], n = 0; n < e; n++)
        r.push(rf.call(t[n]));
      return r;
    }
    return rf.call(t);
  }
  return t;
}
function Fo(t) {
  return t[0] = Math.floor(t[0]) || 0, t[1] = Math.floor(t[1]) || 0, t[2] = Math.floor(t[2]) || 0, t[3] = t[3] == null ? 1 : t[3], "rgba(" + t.join(",") + ")";
}
function lS(t) {
  return nt(t && t[0]) ? 2 : 1;
}
var to = 0, zo = 1, Qg = 2, Ji = 3, nf = 4, af = 5, Qc = 6;
function Jc(t) {
  return t === nf || t === af;
}
function ro(t) {
  return t === zo || t === Qg;
}
var Oi = [0, 0, 0, 0], fS = (function() {
  function t(e) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = e;
  }
  return t.prototype.isFinished = function() {
    return this._finished;
  }, t.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, t.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, t.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, t.prototype.addKeyframe = function(e, r, n) {
    this._needsSort = !0;
    var i = this.keyframes, a = i.length, o = !1, s = Qc, u = r;
    if (nt(r)) {
      var l = lS(r);
      s = l, (l === 1 && !we(r[0]) || l === 2 && !we(r[0][0])) && (o = !0);
    } else if (we(r) && !hi(r))
      s = to;
    else if (H(r))
      if (!isNaN(+r))
        s = to;
      else {
        var f = Zt(r);
        f && (u = f, s = Ji);
      }
    else if (Xs(r)) {
      var h = k({}, u);
      h.colorStops = q(r.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Zt(v.color)
        };
      }), iS(r) ? s = nf : aS(r) && (s = af), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Qc) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: e,
      value: u,
      rawValue: r,
      percent: 0
    };
    return n && (c.easing = n, c.easingFunc = Q(n) ? n : ua[n] || qg(n)), i.push(c), c;
  }, t.prototype.prepare = function(e, r) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(g, m) {
      return g.time - m.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = ro(i), l = Jc(i), f = 0; f < a; f++) {
      var h = n[f], c = h.value, v = o.value;
      h.percent = h.time / e, s || (u && f !== a - 1 ? uS(c, v, i) : l && sS(c.colorStops, v.colorStops));
    }
    if (!s && i !== af && r && this.needsAnimate() && r.needsAnimate() && i === r.valType && !r._finished) {
      this._additiveTrack = r;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === to ? n[f].additiveValue = n[f].value - d : i === Ji ? n[f].additiveValue = eo([], n[f].value, d, -1) : ro(i) && (n[f].additiveValue = i === zo ? eo([], n[f].value, d, -1) : Kc([], n[f].value, d, -1));
    }
  }, t.prototype.step = function(e, r) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === Ji, f, h = this._lastFr, c = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (r < 0)
          f = 0;
        else if (r < this._lastFrP) {
          var g = c(h + 1, s - 1);
          for (f = g; f >= 0 && !(o[f].percent <= r); f--)
            ;
          f = c(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > r); f++)
            ;
          f = c(f - 1, s - 2);
        }
        d = o[f + 1], v = o[f];
      }
      if (v && d) {
        this._lastFr = f, this._lastFrP = r;
        var m = d.percent - v.percent, p = m === 0 ? 1 : c((r - v.percent) / m, 1);
        d.easingFunc && (p = d.easingFunc(p));
        var y = n ? this._additiveValue : l ? Oi : e[u];
        if ((ro(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          e[u] = p < 1 ? v.rawValue : d.rawValue;
        else if (ro(a))
          a === zo ? Iu(y, v[i], d[i], p) : oS(y, v[i], d[i], p);
        else if (Jc(a)) {
          var _ = v[i], S = d[i], b = a === nf;
          e[u] = {
            type: b ? "linear" : "radial",
            x: lr(_.x, S.x, p),
            y: lr(_.y, S.y, p),
            colorStops: q(_.colorStops, function(w, E) {
              var D = S.colorStops[E];
              return {
                offset: lr(w.offset, D.offset, p),
                color: Fo(Iu([], w.color, D.color, p))
              };
            }),
            global: S.global
          }, b ? (e[u].x2 = lr(_.x2, S.x2, p), e[u].y2 = lr(_.y2, S.y2, p)) : e[u].r = lr(_.r, S.r, p);
        } else if (l)
          Iu(y, v[i], d[i], p), n || (e[u] = Fo(y));
        else {
          var T = lr(v[i], d[i], p);
          n ? this._additiveValue = T : e[u] = T;
        }
        n && this._addToTarget(e);
      }
    }
  }, t.prototype._addToTarget = function(e) {
    var r = this.valType, n = this.propName, i = this._additiveValue;
    r === to ? e[n] = e[n] + i : r === Ji ? (Zt(e[n], Oi), eo(Oi, Oi, i, 1), e[n] = Fo(Oi)) : r === zo ? eo(e[n], e[n], i, 1) : r === Qg && Kc(e[n], e[n], i, 1);
  }, t;
})(), gh = (function() {
  function t(e, r, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = e, this._loop = r, r && i) {
      _n("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = i, this._allowDiscrete = n;
  }
  return t.prototype.getMaxTime = function() {
    return this._maxTime;
  }, t.prototype.getDelay = function() {
    return this._delay;
  }, t.prototype.getLoop = function() {
    return this._loop;
  }, t.prototype.getTarget = function() {
    return this._target;
  }, t.prototype.changeTarget = function(e) {
    this._target = e;
  }, t.prototype.when = function(e, r, n) {
    return this.whenWithKeys(e, r, be(r), n);
  }, t.prototype.whenWithKeys = function(e, r, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], u = a[s];
      if (!u) {
        u = a[s] = new fS(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === Ji && l && (l = Fo(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        e > 0 && u.addKeyframe(0, Vo(l), i), this._trackKeys.push(s);
      }
      u.addKeyframe(e, Vo(r[s]), i);
    }
    return this._maxTime = Math.max(this._maxTime, e), this;
  }, t.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, t.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, t.prototype.isPaused = function() {
    return !!this._paused;
  }, t.prototype.duration = function(e) {
    return this._maxTime = e, this._force = !0, this;
  }, t.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var e = this._doneCbs;
    if (e)
      for (var r = e.length, n = 0; n < r; n++)
        e[n].call(this);
  }, t.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var e = this.animation, r = this._abortedCbs;
    if (e && e.removeClip(this._clip), this._clip = null, r)
      for (var n = 0; n < r.length; n++)
        r[n].call(this);
  }, t.prototype._setTracksFinished = function() {
    for (var e = this._tracks, r = this._trackKeys, n = 0; n < r.length; n++)
      e[r[n]].setFinished();
  }, t.prototype._getAdditiveTrack = function(e) {
    var r, n = this._additiveAnimators;
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i].getTrack(e);
        a && (r = a);
      }
    return r;
  }, t.prototype.start = function(e) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var r = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(i, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (r._target[s.propName] = h.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var c = new tS({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(v) {
            r._started = 2;
            var d = r._additiveAnimators;
            if (d) {
              for (var g = !1, m = 0; m < d.length; m++)
                if (d[m]._clip) {
                  g = !0;
                  break;
                }
              g || (r._additiveAnimators = null);
            }
            for (var m = 0; m < n.length; m++)
              n[m].step(r._target, v);
            var p = r._onframeCbs;
            if (p)
              for (var m = 0; m < p.length; m++)
                p[m](r._target, v);
          },
          ondestroy: function() {
            r._doneCallback();
          }
        });
        this._clip = c, this.animation && this.animation.addClip(c), e && c.setEasing(e);
      } else
        this._doneCallback();
      return this;
    }
  }, t.prototype.stop = function(e) {
    if (this._clip) {
      var r = this._clip;
      e && r.onframe(1), this._abortedCallback();
    }
  }, t.prototype.delay = function(e) {
    return this._delay = e, this;
  }, t.prototype.during = function(e) {
    return e && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(e)), this;
  }, t.prototype.done = function(e) {
    return e && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(e)), this;
  }, t.prototype.aborted = function(e) {
    return e && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(e)), this;
  }, t.prototype.getClip = function() {
    return this._clip;
  }, t.prototype.getTrack = function(e) {
    return this._tracks[e];
  }, t.prototype.getTracks = function() {
    var e = this;
    return q(this._trackKeys, function(r) {
      return e._tracks[r];
    });
  }, t.prototype.stopTracks = function(e, r) {
    if (!e.length || !this._clip)
      return !0;
    for (var n = this._tracks, i = this._trackKeys, a = 0; a < e.length; a++) {
      var o = n[e[a]];
      o && !o.isFinished() && (r ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < i.length; a++)
      if (!n[i[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, t.prototype.saveTo = function(e, r, n) {
    if (e) {
      r = r || this._trackKeys;
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[n ? 0 : s.length - 1];
          u && (e[a] = Vo(u.rawValue));
        }
      }
    }
  }, t.prototype.__changeFinalValue = function(e, r) {
    r = r || be(e);
    for (var n = 0; n < r.length; n++) {
      var i = r[n], a = this._tracks[i];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, e[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, t;
})(), rr = (function() {
  function t(e) {
    e && (this._$eventProcessor = e);
  }
  return t.prototype.on = function(e, r, n, i) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof r == "function" && (i = n, n = r, r = null), !n || !e)
      return this;
    var o = this._$eventProcessor;
    r != null && o && o.normalizeQuery && (r = o.normalizeQuery(r)), a[e] || (a[e] = []);
    for (var s = 0; s < a[e].length; s++)
      if (a[e][s].h === n)
        return this;
    var u = {
      h: n,
      query: r,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, l = a[e].length - 1, f = a[e][l];
    return f && f.callAtLast ? a[e].splice(l, 0, u) : a[e].push(u), this;
  }, t.prototype.isSilent = function(e) {
    var r = this._$handlers;
    return !r || !r[e] || !r[e].length;
  }, t.prototype.off = function(e, r) {
    var n = this._$handlers;
    if (!n)
      return this;
    if (!e)
      return this._$handlers = {}, this;
    if (r) {
      if (n[e]) {
        for (var i = [], a = 0, o = n[e].length; a < o; a++)
          n[e][a].h !== r && i.push(n[e][a]);
        n[e] = i;
      }
      n[e] && n[e].length === 0 && delete n[e];
    } else
      delete n[e];
    return this;
  }, t.prototype.trigger = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[e], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = i.length, u = 0; u < s; u++) {
        var l = i[u];
        if (!(a && a.filter && l.query != null && !a.filter(e, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, r[0]);
              break;
            case 2:
              l.h.call(l.ctx, r[0], r[1]);
              break;
            default:
              l.h.apply(l.ctx, r);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(e), this;
  }, t.prototype.triggerWithContext = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[e], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = r[o - 1], u = i.length, l = 0; l < u; l++) {
        var f = i[l];
        if (!(a && a.filter && f.query != null && !a.filter(e, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, r[0]);
              break;
            case 2:
              f.h.call(s, r[0], r[1]);
              break;
            default:
              f.h.apply(s, r.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(e), this;
  }, t;
})(), Jg = 1;
ee.hasGlobalWindow && (Jg = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var ls = Jg, of = 0.4, sf = "#333", uf = "#ccc", hS = "#eee", rt = 1, ji = 2, qn = 4, Ou = "__zr_normal__", Pu = Qs.concat(["ignore"]), cS = Di(Qs, function(t, e) {
  return t[e] = !0, t;
}, { ignore: !1 }), Nn = {}, vS = new j(0, 0, 0, 0), no = [], Ho = 0, Js = 1, js = (function() {
  function t(e) {
    this.id = Ag(), this.animators = [], this.currentStates = [], this.states = {}, this._init(e);
  }
  return t.prototype._init = function(e) {
    this.attr(e);
  }, t.prototype.drift = function(e, r, n) {
    switch (this.draggable) {
      case "horizontal":
        r = 0;
        break;
      case "vertical":
        e = 0;
        break;
    }
    var i = this.transform;
    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += e, i[5] += r, this.decomposeTransform(), this.markRedraw();
  }, t.prototype.beforeUpdate = function() {
  }, t.prototype.afterUpdate = function() {
  }, t.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, t.prototype.updateInnerText = function(e) {
    var r = this._textContent;
    if (r && (!r.ignore || e)) {
      this.textConfig || (this.textConfig = {});
      var n = this.textConfig, i = n.local, a = r.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = i ? this : null;
      var l = !1;
      a.copyTransform(r);
      var f = n.position != null, h = n.autoOverflowArea, c = void 0;
      if ((h || f) && (c = vS, n.layoutRect ? c.copy(n.layoutRect) : c.copy(this.getBoundingRect()), i || c.applyTransform(this.transform)), f) {
        this.calculateTextPosition ? this.calculateTextPosition(Nn, n, c) : zg(Nn, n, c), a.x = Nn.x, a.y = Nn.y, o = Nn.align, s = Nn.verticalAlign;
        var v = n.origin;
        if (v && n.rotation != null) {
          var d = void 0, g = void 0;
          v === "center" ? (d = c.width * 0.5, g = c.height * 0.5) : (d = pi(v[0], c.width), g = pi(v[1], c.height)), l = !0, a.originX = -a.x + d + (i ? 0 : c.x), a.originY = -a.y + g + (i ? 0 : c.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var m = n.offset;
      m && (a.x += m[0], a.y += m[1], l || (a.originX = -m[0], a.originY = -m[1]));
      var p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (h) {
        var y = p.overflowRect = p.overflowRect || new j(0, 0, 0, 0);
        a.getLocalTransform(no), Ra(no, no), j.copy(y, c), y.applyTransform(no);
      } else
        p.overflowRect = null;
      var _ = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, S = void 0, b = void 0, T = void 0;
      _ && this.canBeInsideText() ? (S = n.insideFill, b = n.insideStroke, (S == null || S === "auto") && (S = this.getInsideTextFill()), (b == null || b === "auto") && (b = this.getInsideTextStroke(S), T = !0)) : (S = n.outsideFill, b = n.outsideStroke, (S == null || S === "auto") && (S = this.getOutsideFill()), (b == null || b === "auto") && (b = this.getOutsideStroke(S), T = !0)), S = S || "#000", (S !== p.fill || b !== p.stroke || T !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = S, p.stroke = b, p.autoStroke = T, p.align = o, p.verticalAlign = s, r.setDefaultTextStyle(p)), r.__dirty |= rt, u && r.dirtyStyle(!0);
    }
  }, t.prototype.canBeInsideText = function() {
    return !0;
  }, t.prototype.getInsideTextFill = function() {
    return "#fff";
  }, t.prototype.getInsideTextStroke = function(e) {
    return "#000";
  }, t.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? uf : sf;
  }, t.prototype.getOutsideStroke = function(e) {
    var r = this.__zr && this.__zr.getBackgroundColor(), n = typeof r == "string" && Zt(r);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, Ba(n, "rgba");
  }, t.prototype.traverse = function(e, r) {
  }, t.prototype.attrKV = function(e, r) {
    e === "textConfig" ? this.setTextConfig(r) : e === "textContent" ? this.setTextContent(r) : e === "clipPath" ? this.setClipPath(r) : e === "extra" ? (this.extra = this.extra || {}, k(this.extra, r)) : this[e] = r;
  }, t.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, t.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, t.prototype.attr = function(e, r) {
    if (typeof e == "string")
      this.attrKV(e, r);
    else if (W(e))
      for (var n = e, i = be(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, e[o]);
      }
    return this.markRedraw(), this;
  }, t.prototype.saveCurrentToNormalState = function(e) {
    this._innerSaveToNormal(e);
    for (var r = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== Ou)) {
        var o = i.targetName, s = o ? r[o] : r;
        i.saveTo(s);
      }
    }
  }, t.prototype._innerSaveToNormal = function(e) {
    var r = this._normalState;
    r || (r = this._normalState = {}), e.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(e, r, Pu);
  }, t.prototype._savePrimaryToNormal = function(e, r, n) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      e[a] != null && !(a in r) && (r[a] = this[a]);
    }
  }, t.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, t.prototype.getState = function(e) {
    return this.states[e];
  }, t.prototype.ensureState = function(e) {
    var r = this.states;
    return r[e] || (r[e] = {}), r[e];
  }, t.prototype.clearStates = function(e) {
    this.useState(Ou, !1, e);
  }, t.prototype.useState = function(e, r, n, i) {
    var a = e === Ou, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(le(s, e) >= 0 && (r || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(e)), l || (l = this.states && this.states[e]), !l && !a) {
          _n("State " + e + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = this._textContent, h = jc(this, f, l, i);
        h && !this.__inHover && (this.__inHover = h), this._applyStateObj(e, l, this._normalState, r, tv(this, n, u), u);
        var c = this._textGuide;
        return f && f.useState(e, r, n, !!h), c && c.useState(e, r, n, !!h), a ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(e) : this.currentStates = [e], this._updateAnimationTargets(), this.markRedraw(), !h && this.__inHover && (this.__inHover = Ho, this.__dirty &= ~rt), l;
      }
    }
  }, t.prototype.useStates = function(e, r, n) {
    if (!e.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = e.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (e[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = e[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, e)), f || (f = this.states[l]), f && i.push(f);
      }
      var h = i[o - 1], c = this._textContent, v = jc(this, c, h, n);
      v && !this.__inHover && (this.__inHover = v);
      var d = this._mergeStates(i), g = this.stateTransition;
      this.saveCurrentToNormalState(d), this._applyStateObj(e.join(","), d, this._normalState, !1, tv(this, r, g), g);
      var m = this._textGuide;
      c && c.useStates(e, r, !!v), m && m.useStates(e, r, !!v), this._updateAnimationTargets(), this.currentStates = e.slice(), this.markRedraw(), !v && this.__inHover && (this.__inHover = Ho, this.__dirty &= ~rt);
    }
  }, t.prototype.isSilent = function() {
    for (var e = this; e; ) {
      if (e.silent)
        return !0;
      var r = e.__hostTarget;
      e = r ? e.ignoreHostSilent ? null : r : e.parent;
    }
    return !1;
  }, t.prototype._updateAnimationTargets = function() {
    for (var e = 0; e < this.animators.length; e++) {
      var r = this.animators[e];
      r.targetName && r.changeTarget(this[r.targetName]);
    }
  }, t.prototype.removeState = function(e) {
    var r = le(this.currentStates, e);
    if (r >= 0) {
      var n = this.currentStates.slice();
      n.splice(r, 1), this.useStates(n);
    }
  }, t.prototype.replaceState = function(e, r, n) {
    var i = this.currentStates.slice(), a = le(i, e), o = le(i, r) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = r : n && !o && i.push(r), this.useStates(i);
  }, t.prototype.toggleState = function(e, r) {
    r ? this.useState(e, !0) : this.removeState(e);
  }, t.prototype._mergeStates = function(e) {
    for (var r = {}, n, i = 0; i < e.length; i++) {
      var a = e[i];
      k(r, a), a.textConfig && (n = n || {}, k(n, a.textConfig));
    }
    return n && (r.textConfig = n), r;
  }, t.prototype._applyStateObj = function(e, r, n, i, a, o) {
    if (this.__inHover !== Js) {
      var s = !(r && i);
      r && r.textConfig ? (this.textConfig = k({}, i ? this.textConfig : n.textConfig), k(this.textConfig, r.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var u = {}, l = !1, f = 0; f < Pu.length; f++) {
        var h = Pu[f], c = a && cS[h];
        r && r[h] != null ? c ? (l = !0, u[h] = r[h]) : this[h] = r[h] : s && n[h] != null && (c ? (l = !0, u[h] = n[h]) : this[h] = n[h]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var v = this.animators[f], d = v.targetName;
          v.getLoop() || v.__changeFinalValue(d ? (r || n)[d] : r || n);
        }
      l && this._transitionState(e, u, o);
    }
  }, t.prototype._attachComponent = function(e) {
    if (e.__zr && !e.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (e === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var r = this.__zr;
    r && e.addSelfToZr(r), e.__zr = r, e.__hostTarget = this;
  }, t.prototype._detachComponent = function(e) {
    e.__zr && e.removeSelfFromZr(e.__zr), e.__zr = null, e.__hostTarget = null;
  }, t.prototype.getClipPath = function() {
    return this._clipPath;
  }, t.prototype.setClipPath = function(e) {
    this._clipPath && this._clipPath !== e && this.removeClipPath(), this._attachComponent(e), this._clipPath = e, this.markRedraw();
  }, t.prototype.removeClipPath = function() {
    var e = this._clipPath;
    e && (this._detachComponent(e), this._clipPath = null, this.markRedraw());
  }, t.prototype.getTextContent = function() {
    return this._textContent;
  }, t.prototype.setTextContent = function(e) {
    var r = this._textContent;
    if (r !== e) {
      if (r && r !== e && this.removeTextContent(), process.env.NODE_ENV !== "production" && e.__zr && !e.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      e.innerTransformable = new ka(), this._attachComponent(e), this._textContent = e, this.markRedraw();
    }
  }, t.prototype.setTextConfig = function(e) {
    this.textConfig || (this.textConfig = {}), k(this.textConfig, e), this.markRedraw();
  }, t.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, t.prototype.removeTextContent = function() {
    var e = this._textContent;
    e && (e.innerTransformable = null, this._detachComponent(e), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, t.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, t.prototype.setTextGuideLine = function(e) {
    this._textGuide && this._textGuide !== e && this.removeTextGuideLine(), this._attachComponent(e), this._textGuide = e, this.markRedraw();
  }, t.prototype.removeTextGuideLine = function() {
    var e = this._textGuide;
    e && (this._detachComponent(e), this._textGuide = null, this.markRedraw());
  }, t.prototype.markRedraw = function() {
    this.__dirty |= rt;
    var e = this.__zr;
    e && (this.__inHover ? e.refreshHover() : e.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, t.prototype.dirty = function() {
    this.markRedraw();
  }, t.prototype.addSelfToZr = function(e) {
    if (this.__zr !== e) {
      this.__zr = e;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          e.animation.addAnimator(r[n]);
      this._clipPath && this._clipPath.addSelfToZr(e), this._textContent && this._textContent.addSelfToZr(e), this._textGuide && this._textGuide.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    if (this.__zr) {
      this.__zr = null;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          e.animation.removeAnimator(r[n]);
      this._clipPath && this._clipPath.removeSelfFromZr(e), this._textContent && this._textContent.removeSelfFromZr(e), this._textGuide && this._textGuide.removeSelfFromZr(e);
    }
  }, t.prototype.animate = function(e, r, n) {
    var i = e ? this[e] : this;
    if (process.env.NODE_ENV !== "production" && !i) {
      _n('Property "' + e + '" is not existed in element ' + this.id);
      return;
    }
    var a = new gh(i, r, n);
    return e && (a.targetName = e), this.addAnimator(a, e), a;
  }, t.prototype.addAnimator = function(e, r) {
    var n = this.__zr, i = this;
    e.during(function() {
      i.updateDuringAnimation(r);
    }).done(function() {
      var a = i.animators, o = le(a, e);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(e), n && n.animation.addAnimator(e), n && n.wakeUp();
  }, t.prototype.updateDuringAnimation = function(e) {
    this.markRedraw();
  }, t.prototype.stopAnimation = function(e, r) {
    for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
      var s = n[o];
      !e || e === s.scope ? s.stop(r) : a.push(s);
    }
    return this.animators = a, this;
  }, t.prototype.animateTo = function(e, r, n) {
    Nu(this, e, r, n);
  }, t.prototype.animateFrom = function(e, r, n) {
    Nu(this, e, r, n, !0);
  }, t.prototype._transitionState = function(e, r, n, i) {
    for (var a = Nu(this, r, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = e;
  }, t.prototype.getBoundingRect = function() {
    return null;
  }, t.prototype.getPaintRect = function() {
    return null;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "element", e.name = "", e.ignore = e.silent = e.ignoreHostSilent = e.isGroup = e.draggable = e.dragging = e.ignoreClip = !1, e.__inHover = Ho, e.__dirty = rt;
    var r = {};
    function n(a, o, s) {
      r[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), r[a + o + s] = !0);
    }
    function i(a, o, s, u) {
      Object.defineProperty(e, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && n(a, s, u), !this[o]) {
            var f = this[o] = [];
            l(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && n(a, s, u), this[s] = f[0], this[u] = f[1], this[o] = f, l(this, f);
        }
      });
      function l(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(c) {
            f[s] = c;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[u];
          },
          set: function(c) {
            f[u] = c;
          }
        });
      }
    }
    Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
  })(), t;
})();
tr(js, rr);
tr(js, ka);
function Nu(t, e, r, n, i) {
  r = r || {};
  var a = [];
  jg(t, "", t, e, r, n, a, i);
  var o = a.length, s = !1, u = r.done, l = r.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && r.during && a[0].during(function(d, g) {
    r.during(g);
  });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f), h && v.aborted(h), r.force && v.duration(r.duration), v.start(r.easing);
  }
  return a;
}
function Ru(t, e, r) {
  for (var n = 0; n < r; n++)
    t[n] = e[n];
}
function dS(t) {
  return nt(t[0]);
}
function pS(t, e, r) {
  if (nt(e[r]))
    if (nt(t[r]) || (t[r] = []), qe(e[r])) {
      var n = e[r].length;
      t[r].length !== n && (t[r] = new e[r].constructor(n), Ru(t[r], e[r], n));
    } else {
      var i = e[r], a = t[r], o = i.length;
      if (dS(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? Ru(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
      else
        Ru(a, i, o);
      a.length = i.length;
    }
  else
    t[r] = e[r];
}
function gS(t, e) {
  return t === e || nt(t) && nt(e) && mS(t, e);
}
function mS(t, e) {
  var r = t.length;
  if (r !== e.length)
    return !1;
  for (var n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function jg(t, e, r, n, i, a, o, s) {
  for (var u = be(n), l = i.duration, f = i.delay, h = i.additive, c = i.setToFinal, v = !W(a), d = t.animators, g = [], m = 0; m < u.length; m++) {
    var p = u[m], y = n[p];
    if (y != null && r[p] != null && (v || a[p]))
      if (W(y) && !nt(y) && !Xs(y)) {
        if (e) {
          s || (r[p] = y, t.updateDuringAnimation(e));
          continue;
        }
        jg(t, p, r[p], y, i, a && a[p], o, s);
      } else
        g.push(p);
    else s || (r[p] = y, t.updateDuringAnimation(e), g.push(p));
  }
  var _ = g.length;
  if (!h && _)
    for (var S = 0; S < d.length; S++) {
      var b = d[S];
      if (b.targetName === e) {
        var T = b.stopTracks(g);
        if (T) {
          var w = le(d, b);
          d.splice(w, 1);
        }
      }
    }
  if (i.force || (g = ze(g, function(M) {
    return !gS(n[M], r[M]);
  }), _ = g.length), _ > 0 || i.force && !o.length) {
    var E = void 0, D = void 0, C = void 0;
    if (s) {
      D = {}, c && (E = {});
      for (var S = 0; S < _; S++) {
        var p = g[S];
        D[p] = r[p], c ? E[p] = n[p] : r[p] = n[p];
      }
    } else if (c) {
      C = {};
      for (var S = 0; S < _; S++) {
        var p = g[S];
        C[p] = Vo(r[p]), pS(r, n, p);
      }
    }
    var b = new gh(r, !1, !1, h ? ze(d, function(L) {
      return L.targetName === e;
    }) : null);
    b.targetName = e, i.scope && (b.scope = i.scope), c && E && b.whenWithKeys(0, E, g), C && b.whenWithKeys(0, C, g), b.whenWithKeys(l ?? 500, s ? D : n, g).delay(f || 0), t.addAnimator(b, e), o.push(b);
  }
}
function jc(t, e, r, n) {
  return !(r && r.hoverLayer || n) || ev(t) || e && ev(e) ? Ho : Js;
}
function ev(t) {
  return t.type === "text" || t.type === "tspan";
}
function tv(t, e, r) {
  return !e && !t.__inHover && r && r.duration > 0;
}
var lf = "__zr_style_" + Math.round(Math.random() * 10), Tn = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, eu = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
Tn[lf] = !0;
var rv = ["z", "z2", "invisible"], yS = ["invisible"], Va = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype._init = function(r) {
    for (var n = be(r), i = 0; i < n.length; i++) {
      var a = n[i];
      a === "style" ? this.useStyle(r[a]) : t.prototype.attrKV.call(this, a, r[a]);
    }
    this.style || this.useStyle({});
  }, e.prototype.beforeBrush = function(r) {
  }, e.prototype.afterBrush = function() {
  }, e.prototype.innerBeforeBrush = function() {
  }, e.prototype.innerAfterBrush = function() {
  }, e.prototype.shouldBePainted = function(r, n, i, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && _S(this, r, n) || o && !o[0] && !o[3])
      return !1;
    if (i && this.__clipPaths && this.__clipPaths.length) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, e.prototype.contain = function(r, n) {
    return this.rectContain(r, n);
  }, e.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, e.prototype.rectContain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    return a.contain(i[0], i[1]);
  }, e.prototype.getPaintRect = function() {
    var r = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      r = this._paintRect || (this._paintRect = new j(0, 0, 0, 0)), n ? j.applyTransform(r, i, n) : r.copy(i), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
      var l = this.dirtyRectTolerance;
      r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2));
    }
    return r;
  }, e.prototype.setPrevPaintRect = function(r) {
    r ? (this._prevPaintRect = this._prevPaintRect || new j(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null;
  }, e.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, e.prototype.animateStyle = function(r) {
    return this.animate("style", r);
  }, e.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : this.markRedraw();
  }, e.prototype.attrKV = function(r, n) {
    r !== "style" ? t.prototype.attrKV.call(this, r, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, e.prototype.setStyle = function(r, n) {
    return typeof r == "string" ? this.style[r] = n : k(this.style, r), this.dirtyStyle(), this;
  }, e.prototype.dirtyStyle = function(r) {
    r || this.markRedraw(), this.__dirty |= ji, this._rect && (this._rect = null);
  }, e.prototype.dirty = function() {
    this.dirtyStyle();
  }, e.prototype.styleChanged = function() {
    return !!(this.__dirty & ji);
  }, e.prototype.styleUpdated = function() {
    this.__dirty &= ~ji;
  }, e.prototype.createStyle = function(r) {
    return Zs(Tn, r);
  }, e.prototype.useStyle = function(r) {
    r[lf] || (r = this.createStyle(r)), this.style = r, this.dirtyStyle();
  }, e.prototype._useHoverStyle = function(r) {
    this.__hoverStyle = r;
  }, e.prototype.isStyleObject = function(r) {
    return r[lf];
  }, e.prototype._innerSaveToNormal = function(r) {
    t.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, n, rv);
  }, e.prototype._applyStateObj = function(r, n, i, a, o, s) {
    t.prototype._applyStateObj.call(this, r, n, i, a, o, s);
    var u = !(n && a), l = this.__inHover === Js, f;
    if (n && n.style ? o ? a ? f = n.style : (f = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(f, n.style)) : (f = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(f, n.style)) : u && (f = i.style), f)
      if (o) {
        var h = this.style;
        if (this.style = this.createStyle(u ? {} : h), u)
          for (var c = be(h), v = 0; v < c.length; v++) {
            var d = c[v];
            d in f && (f[d] = f[d], this.style[d] = h[d]);
          }
        for (var g = be(f), v = 0; v < g.length; v++) {
          var d = g[v];
          this.style[d] = this.style[d];
        }
        this._transitionState(r, {
          style: f
        }, s, this.getAnimationStyleProps());
      } else
        l ? this._useHoverStyle(f) : this.useStyle(f);
    if (!l)
      for (var m = this.__inHover ? yS : rv, v = 0; v < m.length; v++) {
        var d = m[v];
        n && n[d] != null ? this[d] = n[d] : u && i[d] != null && (this[d] = i[d]);
      }
  }, e.prototype._mergeStates = function(r) {
    for (var n = t.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, e.prototype._mergeStyle = function(r, n) {
    return k(r, n), r;
  }, e.prototype.getAnimationStyleProps = function() {
    return eu;
  }, e.initDefaultProps = (function() {
    var r = e.prototype;
    r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = 0, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = rt | ji;
  })(), e;
})(js), ku = new j(0, 0, 0, 0), Bu = new j(0, 0, 0, 0);
function _S(t, e, r) {
  return ku.copy(t.getBoundingRect()), t.transform && ku.applyTransform(t.transform), Bu.width = e, Bu.height = r, !ku.intersect(Bu);
}
var St = Math.min, bt = Math.max, Vu = Math.sin, Fu = Math.cos, qr = Math.PI * 2, io = Ei(), ao = Ei(), oo = Ei();
function nv(t, e, r, n, i, a) {
  i[0] = St(t, r), i[1] = St(e, n), a[0] = bt(t, r), a[1] = bt(e, n);
}
var iv = [], av = [];
function SS(t, e, r, n, i, a, o, s, u, l) {
  var f = Zg, h = Re, c = f(t, r, i, o, iv);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(t, r, i, o, iv[v]);
    u[0] = St(d, u[0]), l[0] = bt(d, l[0]);
  }
  c = f(e, n, a, s, av);
  for (var v = 0; v < c; v++) {
    var g = h(e, n, a, s, av[v]);
    u[1] = St(g, u[1]), l[1] = bt(g, l[1]);
  }
  u[0] = St(t, u[0]), l[0] = bt(t, l[0]), u[0] = St(o, u[0]), l[0] = bt(o, l[0]), u[1] = St(e, u[1]), l[1] = bt(e, l[1]), u[1] = St(s, u[1]), l[1] = bt(s, l[1]);
}
function bS(t, e, r, n, i, a, o, s) {
  var u = $g, l = Je, f = bt(St(u(t, r, i), 1), 0), h = bt(St(u(e, n, a), 1), 0), c = l(t, r, i, f), v = l(e, n, a, h);
  o[0] = St(t, i, c), o[1] = St(e, a, v), s[0] = bt(t, i, c), s[1] = bt(e, a, v);
}
function TS(t, e, r, n, i, a, o, s, u) {
  var l = Qn, f = Jn, h = Math.abs(i - a);
  if (h % qr < 1e-4 && h > 1e-4) {
    s[0] = t - r, s[1] = e - n, u[0] = t + r, u[1] = e + n;
    return;
  }
  if (io[0] = Fu(i) * r + t, io[1] = Vu(i) * n + e, ao[0] = Fu(a) * r + t, ao[1] = Vu(a) * n + e, l(s, io, ao), f(u, io, ao), i = i % qr, i < 0 && (i = i + qr), a = a % qr, a < 0 && (a = a + qr), i > a && !o ? a += qr : i < a && o && (i += qr), o) {
    var c = a;
    a = i, i = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > i && (oo[0] = Fu(v) * r + t, oo[1] = Vu(v) * n + e, l(s, oo, s), f(u, oo, u));
}
var he = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, Kr = [], Qr = [], Rt = [], mr = [], kt = [], Bt = [], zu = Math.min, Hu = Math.max, Jr = Math.cos, jr = Math.sin, ar = Math.abs, ff = Math.PI, Cr = ff * 2, Gu = typeof Float32Array < "u", Pi = [];
function Uu(t) {
  var e = Math.round(t / ff * 1e8) / 1e8;
  return e % 2 * ff;
}
function wS(t, e) {
  var r = Uu(t[0]);
  r < 0 && (r += Cr);
  var n = r - t[0], i = t[1];
  i += n, !e && i - r >= Cr ? i = r + Cr : e && r - i >= Cr ? i = r - Cr : !e && r > i ? i = r + (Cr - Uu(r - i)) : e && r < i && (i = r - (Cr - Uu(i - r))), t[0] = r, t[1] = i;
}
var xn = (function() {
  function t(e) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, e && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return t.prototype.increaseVersion = function() {
    this._version++;
  }, t.prototype.getVersion = function() {
    return this._version;
  }, t.prototype.setScale = function(e, r, n) {
    n = n || 0, n > 0 && (this._ux = ar(n / ls / e) || 0, this._uy = ar(n / ls / r) || 0);
  }, t.prototype.setDPR = function(e) {
    this.dpr = e;
  }, t.prototype.setContext = function(e) {
    this._ctx = e;
  }, t.prototype.getContext = function() {
    return this._ctx;
  }, t.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, t.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, t.prototype.moveTo = function(e, r) {
    return this._drawPendingPt(), this.addData(he.M, e, r), this._ctx && this._ctx.moveTo(e, r), this._x0 = e, this._y0 = r, this._xi = e, this._yi = r, this;
  }, t.prototype.lineTo = function(e, r) {
    var n = ar(e - this._xi), i = ar(r - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(he.L, e, r), this._ctx && a && this._ctx.lineTo(e, r), a)
      this._xi = e, this._yi = r, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = e, this._pendingPtY = r, this._pendingPtDist = o);
    }
    return this;
  }, t.prototype.bezierCurveTo = function(e, r, n, i, a, o) {
    return this._drawPendingPt(), this.addData(he.C, e, r, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(e, r, n, i, a, o), this._xi = a, this._yi = o, this;
  }, t.prototype.quadraticCurveTo = function(e, r, n, i) {
    return this._drawPendingPt(), this.addData(he.Q, e, r, n, i), this._ctx && this._ctx.quadraticCurveTo(e, r, n, i), this._xi = n, this._yi = i, this;
  }, t.prototype.arc = function(e, r, n, i, a, o) {
    this._drawPendingPt(), Pi[0] = i, Pi[1] = a, wS(Pi, o), i = Pi[0], a = Pi[1];
    var s = a - i;
    return this.addData(he.A, e, r, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(e, r, n, i, a, o), this._xi = Jr(a) * n + e, this._yi = jr(a) * n + r, this;
  }, t.prototype.arcTo = function(e, r, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(e, r, n, i, a), this;
  }, t.prototype.rect = function(e, r, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(e, r, n, i), this.addData(he.R, e, r, n, i), this;
  }, t.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(he.Z);
    var e = this._ctx, r = this._x0, n = this._y0;
    return e && e.closePath(), this._xi = r, this._yi = n, this;
  }, t.prototype.fill = function(e) {
    e && e.fill(), this.toStatic();
  }, t.prototype.stroke = function(e) {
    e && e.stroke(), this.toStatic();
  }, t.prototype.len = function() {
    return this._len;
  }, t.prototype.setData = function(e) {
    if (this._saveData) {
      var r = e.length;
      !(this.data && this.data.length === r) && Gu && (this.data = new Float32Array(r));
      for (var n = 0; n < r; n++)
        this.data[n] = e[n];
      this._len = r;
    }
  }, t.prototype.appendPath = function(e) {
    if (this._saveData) {
      e instanceof Array || (e = [e]);
      for (var r = e.length, n = 0, i = this._len, a = 0; a < r; a++)
        n += e[a].len();
      var o = this.data;
      if (Gu && (o instanceof Float32Array || !o) && (this.data = new Float32Array(i + n), i > 0 && o))
        for (var s = 0; s < i; s++)
          this.data[s] = o[s];
      for (var a = 0; a < r; a++)
        for (var u = e[a].data, s = 0; s < u.length; s++)
          this.data[i++] = u[s];
      this._len = i;
    }
  }, t.prototype.addData = function(e, r, n, i, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, t.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, t.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var e = [], r = 0; r < this._len; r++)
        e[r] = this.data[r];
      this.data = e;
    }
  }, t.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var e = this.data;
      e instanceof Array && (e.length = this._len, Gu && this._len > 11 && (this.data = new Float32Array(e)));
    }
  }, t.prototype.getBoundingRect = function() {
    Rt[0] = Rt[1] = kt[0] = kt[1] = Number.MAX_VALUE, mr[0] = mr[1] = Bt[0] = Bt[1] = -Number.MAX_VALUE;
    var e = this.data, r = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = e[o++], u = o === 1;
      switch (u && (r = e[o], n = e[o + 1], i = r, a = n), s) {
        case he.M:
          r = i = e[o++], n = a = e[o++], kt[0] = i, kt[1] = a, Bt[0] = i, Bt[1] = a;
          break;
        case he.L:
          nv(r, n, e[o], e[o + 1], kt, Bt), r = e[o++], n = e[o++];
          break;
        case he.C:
          SS(r, n, e[o++], e[o++], e[o++], e[o++], e[o], e[o + 1], kt, Bt), r = e[o++], n = e[o++];
          break;
        case he.Q:
          bS(r, n, e[o++], e[o++], e[o], e[o + 1], kt, Bt), r = e[o++], n = e[o++];
          break;
        case he.A:
          var l = e[o++], f = e[o++], h = e[o++], c = e[o++], v = e[o++], d = e[o++] + v;
          o += 1;
          var g = !e[o++];
          u && (i = Jr(v) * h + l, a = jr(v) * c + f), TS(l, f, h, c, v, d, g, kt, Bt), r = Jr(d) * h + l, n = jr(d) * c + f;
          break;
        case he.R:
          i = r = e[o++], a = n = e[o++];
          var m = e[o++], p = e[o++];
          nv(i, a, i + m, a + p, kt, Bt);
          break;
        case he.Z:
          r = i, n = a;
          break;
      }
      Qn(Rt, Rt, kt), Jn(mr, mr, Bt);
    }
    return o === 0 && (Rt[0] = Rt[1] = mr[0] = mr[1] = 0), new j(Rt[0], Rt[1], mr[0] - Rt[0], mr[1] - Rt[1]);
  }, t.prototype._calculateLength = function() {
    var e = this.data, r = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < r; ) {
      var v = e[c++], d = c === 1;
      d && (a = e[c], o = e[c + 1], s = a, u = o);
      var g = -1;
      switch (v) {
        case he.M:
          a = s = e[c++], o = u = e[c++];
          break;
        case he.L: {
          var m = e[c++], p = e[c++], y = m - a, _ = p - o;
          (ar(y) > n || ar(_) > i || c === r - 1) && (g = Math.sqrt(y * y + _ * _), a = m, o = p);
          break;
        }
        case he.C: {
          var S = e[c++], b = e[c++], m = e[c++], p = e[c++], T = e[c++], w = e[c++];
          g = K1(a, o, S, b, m, p, T, w, 10), a = T, o = w;
          break;
        }
        case he.Q: {
          var S = e[c++], b = e[c++], m = e[c++], p = e[c++];
          g = j1(a, o, S, b, m, p, 10), a = m, o = p;
          break;
        }
        case he.A:
          var E = e[c++], D = e[c++], C = e[c++], M = e[c++], L = e[c++], A = e[c++], I = A + L;
          c += 1, d && (s = Jr(L) * C + E, u = jr(L) * M + D), g = Hu(C, M) * zu(Cr, Math.abs(A)), a = Jr(I) * C + E, o = jr(I) * M + D;
          break;
        case he.R: {
          s = a = e[c++], u = o = e[c++];
          var P = e[c++], O = e[c++];
          g = P * 2 + O * 2;
          break;
        }
        case he.Z: {
          var y = s - a, _ = u - o;
          g = Math.sqrt(y * y + _ * _), a = s, o = u;
          break;
        }
      }
      g >= 0 && (l[h++] = g, f += g);
    }
    return this._pathLen = f, f;
  }, t.prototype.rebuildPath = function(e, r) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, u, l, f, h, c, v = r < 1, d, g, m = 0, p = 0, y, _ = 0, S, b;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, g = this._pathLen, y = r * g, !y)))
      e: for (var T = 0; T < o; ) {
        var w = n[T++], E = T === 1;
        switch (E && (l = n[T], f = n[T + 1], s = l, u = f), w !== he.L && _ > 0 && (e.lineTo(S, b), _ = 0), w) {
          case he.M:
            s = l = n[T++], u = f = n[T++], e.moveTo(l, f);
            break;
          case he.L: {
            h = n[T++], c = n[T++];
            var D = ar(h - l), C = ar(c - f);
            if (D > i || C > a) {
              if (v) {
                var M = d[p++];
                if (m + M > y) {
                  var L = (y - m) / M;
                  e.lineTo(l * (1 - L) + h * L, f * (1 - L) + c * L);
                  break e;
                }
                m += M;
              }
              e.lineTo(h, c), l = h, f = c, _ = 0;
            } else {
              var A = D * D + C * C;
              A > _ && (S = h, b = c, _ = A);
            }
            break;
          }
          case he.C: {
            var I = n[T++], P = n[T++], O = n[T++], B = n[T++], G = n[T++], U = n[T++];
            if (v) {
              var M = d[p++];
              if (m + M > y) {
                var L = (y - m) / M;
                os(l, I, O, G, L, Kr), os(f, P, B, U, L, Qr), e.bezierCurveTo(Kr[1], Qr[1], Kr[2], Qr[2], Kr[3], Qr[3]);
                break e;
              }
              m += M;
            }
            e.bezierCurveTo(I, P, O, B, G, U), l = G, f = U;
            break;
          }
          case he.Q: {
            var I = n[T++], P = n[T++], O = n[T++], B = n[T++];
            if (v) {
              var M = d[p++];
              if (m + M > y) {
                var L = (y - m) / M;
                ss(l, I, O, L, Kr), ss(f, P, B, L, Qr), e.quadraticCurveTo(Kr[1], Qr[1], Kr[2], Qr[2]);
                break e;
              }
              m += M;
            }
            e.quadraticCurveTo(I, P, O, B), l = O, f = B;
            break;
          }
          case he.A:
            var J = n[T++], $ = n[T++], te = n[T++], X = n[T++], F = n[T++], ne = n[T++], ae = n[T++], Ue = !n[T++], Mt = te > X ? te : X, Te = ar(te - X) > 1e-3, Me = F + ne, re = !1;
            if (v) {
              var M = d[p++];
              m + M > y && (Me = F + ne * (y - m) / M, re = !0), m += M;
            }
            if (Te && e.ellipse ? e.ellipse(J, $, te, X, ae, F, Me, Ue) : e.arc(J, $, Mt, F, Me, Ue), re)
              break e;
            E && (s = Jr(F) * te + J, u = jr(F) * X + $), l = Jr(Me) * te + J, f = jr(Me) * X + $;
            break;
          case he.R:
            s = l = n[T], u = f = n[T + 1], h = n[T++], c = n[T++];
            var oe = n[T++], Hr = n[T++];
            if (v) {
              var M = d[p++];
              if (m + M > y) {
                var We = y - m;
                e.moveTo(h, c), e.lineTo(h + zu(We, oe), c), We -= oe, We > 0 && e.lineTo(h + oe, c + zu(We, Hr)), We -= Hr, We > 0 && e.lineTo(h + Hu(oe - We, 0), c + Hr), We -= oe, We > 0 && e.lineTo(h, c + Hu(Hr - We, 0));
                break e;
              }
              m += M;
            }
            e.rect(h, c, oe, Hr);
            break;
          case he.Z:
            if (v) {
              var M = d[p++];
              if (m + M > y) {
                var L = (y - m) / M;
                e.lineTo(l * (1 - L) + s * L, f * (1 - L) + u * L);
                break e;
              }
              m += M;
            }
            e.closePath(), l = s, f = u;
        }
      }
  }, t.prototype.clone = function() {
    var e = new t(), r = this.data;
    return e.data = r.slice ? r.slice() : Array.prototype.slice.call(r), e._len = this._len, e;
  }, t.prototype.canSave = function() {
    return !!this._saveData;
  }, t.CMD = he, t.initDefaultProps = (function() {
    var e = t.prototype;
    e._saveData = !0, e._ux = 0, e._uy = 0, e._pendingPtDist = 0, e._version = 0;
  })(), t;
})();
function Rn(t, e, r, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, u = 0, l = t;
  if (o > e + s && o > n + s || o < e - s && o < n - s || a > t + s && a > r + s || a < t - s && a < r - s)
    return !1;
  if (t !== r)
    u = (e - n) / (t - r), l = (t * n - r * e) / (t - r);
  else
    return Math.abs(a - t) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function xS(t, e, r, n, i, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > e + h && f > n + h && f > a + h && f > s + h || f < e - h && f < n - h && f < a - h && f < s - h || l > t + h && l > r + h && l > i + h && l > o + h || l < t - h && l < r - h && l < i - h && l < o - h)
    return !1;
  var c = q1(t, e, r, n, i, a, o, s, l, f);
  return c <= h / 2;
}
function CS(t, e, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > e + l && u > n + l && u > a + l || u < e - l && u < n - l && u < a - l || s > t + l && s > r + l && s > i + l || s < t - l && s < r - l && s < i - l)
    return !1;
  var f = J1(t, e, r, n, i, a, s, u);
  return f <= l / 2;
}
var ov = Math.PI * 2;
function so(t) {
  return t %= ov, t < 0 && (t += ov), t;
}
var Ni = Math.PI * 2;
function DS(t, e, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= t, u -= e;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > r || f + l < r)
    return !1;
  if (Math.abs(n - i) % Ni < 1e-4)
    return !0;
  if (a) {
    var h = n;
    n = so(i), i = so(h);
  } else
    n = so(n), i = so(i);
  n > i && (i += Ni);
  var c = Math.atan2(u, s);
  return c < 0 && (c += Ni), c >= n && c <= i || c + Ni >= n && c + Ni <= i;
}
function en(t, e, r, n, i, a) {
  if (a > e && a > n || a < e && a < n || n === e)
    return 0;
  var o = (a - e) / (n - e), s = n < e ? 1 : -1;
  (o === 1 || o === 0) && (s = n < e ? 0.5 : -0.5);
  var u = o * (r - t) + t;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var yr = xn.CMD, tn = Math.PI * 2, ES = 1e-4;
function MS(t, e) {
  return Math.abs(t - e) < ES;
}
var Ye = [-1, -1, -1], yt = [-1, -1];
function AS() {
  var t = yt[0];
  yt[0] = yt[1], yt[1] = t;
}
function LS(t, e, r, n, i, a, o, s, u, l) {
  if (l > e && l > n && l > a && l > s || l < e && l < n && l < a && l < s)
    return 0;
  var f = as(e, n, a, s, l, Ye);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, g = 0; g < f; g++) {
    var m = Ye[g], p = m === 0 || m === 1 ? 0.5 : 1, y = Re(t, r, i, o, m);
    y < u || (c < 0 && (c = Zg(e, n, a, s, yt), yt[1] < yt[0] && c > 1 && AS(), v = Re(e, n, a, s, yt[0]), c > 1 && (d = Re(e, n, a, s, yt[1]))), c === 2 ? m < yt[0] ? h += v < e ? p : -p : m < yt[1] ? h += d < v ? p : -p : h += s < d ? p : -p : m < yt[0] ? h += v < e ? p : -p : h += s < v ? p : -p);
  }
  return h;
}
function IS(t, e, r, n, i, a, o, s) {
  if (s > e && s > n && s > a || s < e && s < n && s < a)
    return 0;
  var u = Q1(e, n, a, s, Ye);
  if (u === 0)
    return 0;
  var l = $g(e, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Je(e, n, a, l), c = 0; c < u; c++) {
      var v = Ye[c] === 0 || Ye[c] === 1 ? 0.5 : 1, d = Je(t, r, i, Ye[c]);
      d < o || (Ye[c] < l ? f += h < e ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = Ye[0] === 0 || Ye[0] === 1 ? 0.5 : 1, d = Je(t, r, i, Ye[0]);
    return d < o ? 0 : a < e ? v : -v;
  }
}
function OS(t, e, r, n, i, a, o, s) {
  if (s -= e, s > r || s < -r)
    return 0;
  var u = Math.sqrt(r * r - s * s);
  Ye[0] = -u, Ye[1] = u;
  var l = Math.abs(n - i);
  if (l < 1e-4)
    return 0;
  if (l >= tn - 1e-4) {
    n = 0, i = tn;
    var f = a ? 1 : -1;
    return o >= Ye[0] + t && o <= Ye[1] + t ? f : 0;
  }
  if (n > i) {
    var h = n;
    n = i, i = h;
  }
  n < 0 && (n += tn, i += tn);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = Ye[v];
    if (d + t > o) {
      var g = Math.atan2(s, d), f = a ? 1 : -1;
      g < 0 && (g = tn + g), (g >= n && g <= i || g + tn >= n && g + tn <= i) && (g > Math.PI / 2 && g < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function em(t, e, r, n, i) {
  for (var a = t.data, o = t.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var g = a[d++], m = d === 1;
    switch (g === yr.M && d > 1 && (r || (s += en(u, l, f, h, n, i))), m && (u = a[d], l = a[d + 1], f = u, h = l), g) {
      case yr.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case yr.L:
        if (r) {
          if (Rn(u, l, a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += en(u, l, a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case yr.C:
        if (r) {
          if (xS(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += LS(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case yr.Q:
        if (r) {
          if (CS(u, l, a[d++], a[d++], a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += IS(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case yr.A:
        var p = a[d++], y = a[d++], _ = a[d++], S = a[d++], b = a[d++], T = a[d++];
        d += 1;
        var w = !!(1 - a[d++]);
        c = Math.cos(b) * _ + p, v = Math.sin(b) * S + y, m ? (f = c, h = v) : s += en(u, l, c, v, n, i);
        var E = (n - p) * S / _ + p;
        if (r) {
          if (DS(p, y, S, b, b + T, w, e, E, i))
            return !0;
        } else
          s += OS(p, y, S, b, b + T, w, E, i);
        u = Math.cos(b + T) * _ + p, l = Math.sin(b + T) * S + y;
        break;
      case yr.R:
        f = u = a[d++], h = l = a[d++];
        var D = a[d++], C = a[d++];
        if (c = f + D, v = h + C, r) {
          if (Rn(f, h, c, h, e, n, i) || Rn(c, h, c, v, e, n, i) || Rn(c, v, f, v, e, n, i) || Rn(f, v, f, h, e, n, i))
            return !0;
        } else
          s += en(c, h, c, v, n, i), s += en(f, v, f, h, n, i);
        break;
      case yr.Z:
        if (r) {
          if (Rn(u, l, f, h, e, n, i))
            return !0;
        } else
          s += en(u, l, f, h, n, i);
        u = f, l = h;
        break;
    }
  }
  return !r && !MS(l, h) && (s += en(u, l, f, h, n, i) || 0), s !== 0;
}
function PS(t, e, r) {
  return em(t, 0, !1, e, r);
}
function NS(t, e, r, n) {
  return em(t, e, !0, r, n);
}
var tm = pe({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, Tn), RS = {
  style: pe({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, eu.style)
}, Wu = Qs.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), me = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.update = function() {
    var r = this;
    t.prototype.update.call(this);
    var n = this.style;
    if (n.decal) {
      var i = this._decalEl = this._decalEl || new e();
      i.buildPath === e.prototype.buildPath && (i.buildPath = function(u) {
        r.buildPath(u, r.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Wu.length; ++s)
        i[Wu[s]] = this[Wu[s]];
      i.__dirty |= rt;
    } else this._decalEl && (this._decalEl = null);
  }, e.prototype.getDecalElement = function() {
    return this._decalEl;
  }, e.prototype._init = function(r) {
    var n = be(r);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = r[o];
      o === "style" ? this.style ? k(this.style, s) : this.useStyle(s) : o === "shape" ? k(this.shape, s) : t.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, e.prototype.getDefaultStyle = function() {
    return null;
  }, e.prototype.getDefaultShape = function() {
    return {};
  }, e.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, e.prototype.getInsideTextFill = function() {
    var r = this.style.fill;
    if (r !== "none") {
      if (H(r)) {
        var n = us(r, 0);
        return n > 0.5 ? sf : n > 0.2 ? hS : uf;
      } else if (r)
        return uf;
    }
    return sf;
  }, e.prototype.getInsideTextStroke = function(r) {
    var n = this.style.fill;
    if (H(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = us(r, 0) < of;
      if (a === o)
        return n;
    }
  }, e.prototype.buildPath = function(r, n, i) {
  }, e.prototype.pathUpdated = function() {
    this.__dirty &= ~qn;
  }, e.prototype.getUpdatedPathProxy = function(r) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path;
  }, e.prototype.createPathProxy = function() {
    this.path = new xn(!1);
  }, e.prototype.hasStroke = function() {
    var r = this.style, n = r.stroke;
    return !(n == null || n === "none" || !(r.lineWidth > 0));
  }, e.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, e.prototype.getBoundingRect = function() {
    var r = this._rect, n = this.style, i = !r;
    if (i) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & qn) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect();
    }
    if (this._rect = r, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = r.clone());
      if (this.__dirty || i) {
        s.copy(r);
        var u = n.strokeNoScale ? this.getLineScale() : 1, l = n.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f ?? 4);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return r;
  }, e.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect(), o = this.style;
    if (r = i[0], n = i[1], a.contain(r, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), NS(s, u / l, r, n)))
          return !0;
      }
      if (this.hasFill())
        return PS(s, r, n);
    }
    return !1;
  }, e.prototype.dirtyShape = function() {
    this.__dirty |= qn, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, e.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, e.prototype.animateShape = function(r) {
    return this.animate("shape", r);
  }, e.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : r === "shape" ? this.dirtyShape() : this.markRedraw();
  }, e.prototype.attrKV = function(r, n) {
    r === "shape" ? this.setShape(n) : t.prototype.attrKV.call(this, r, n);
  }, e.prototype.setShape = function(r, n) {
    var i = this.shape;
    return i || (i = this.shape = {}), typeof r == "string" ? i[r] = n : k(i, r), this.dirtyShape(), this;
  }, e.prototype.shapeChanged = function() {
    return !!(this.__dirty & qn);
  }, e.prototype.createStyle = function(r) {
    return Zs(tm, r);
  }, e.prototype._innerSaveToNormal = function(r) {
    t.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.shape && !n.shape && (n.shape = k({}, this.shape));
  }, e.prototype._applyStateObj = function(r, n, i, a, o, s) {
    if (t.prototype._applyStateObj.call(this, r, n, i, a, o, s), this.__inHover !== Js) {
      var u = !(n && a), l;
      if (n && n.shape ? o ? a ? l = n.shape : (l = k({}, i.shape), k(l, n.shape)) : (l = k({}, a ? this.shape : i.shape), k(l, n.shape)) : u && (l = i.shape), l)
        if (o) {
          this.shape = k({}, this.shape);
          for (var f = {}, h = be(l), c = 0; c < h.length; c++) {
            var v = h[c];
            typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v];
          }
          this._transitionState(r, {
            shape: f
          }, s);
        } else
          this.shape = l, this.dirtyShape();
    }
  }, e.prototype._mergeStates = function(r) {
    for (var n = t.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, e.prototype.getAnimationStyleProps = function() {
    return RS;
  }, e.prototype.isZeroArea = function() {
    return !1;
  }, e.extend = function(r) {
    var n = (function(a) {
      z(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return r.init && r.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return ie(r.style);
      }, o.prototype.getDefaultShape = function() {
        return ie(r.shape);
      }, o;
    })(e);
    for (var i in r)
      typeof r[i] == "function" && (n.prototype[i] = r[i]);
    return n;
  }, e.initDefaultProps = (function() {
    var r = e.prototype;
    r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = rt | ji | qn;
  })(), e;
})(Va), kS = pe({
  strokeFirst: !0,
  font: Nr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, tm), fs = (function(t) {
  z(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.hasStroke = function() {
    return Wg(this.style);
  }, e.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, e.prototype.createStyle = function(r) {
    return Zs(kS, r);
  }, e.prototype.setBoundingRect = function(r) {
    this._rect = r;
  }, e.prototype.getBoundingRect = function() {
    return this._rect || (this._rect = Z1(this.style)), this._rect;
  }, e.initDefaultProps = (function() {
    var r = e.prototype;
    r.dirtyRectTolerance = 10;
  })(), e;
})(Va);
fs.prototype.type = "tspan";
var BS = pe({
  x: 0,
  y: 0
}, Tn), VS = {
  style: pe({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, eu.style)
};
function FS(t) {
  return !!(t && typeof t != "string" && t.width && t.height);
}
var zr = (function(t) {
  z(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.createStyle = function(r) {
    return Zs(BS, r);
  }, e.prototype._getSize = function(r) {
    var n = this.style, i = n[r];
    if (i != null)
      return i;
    var a = FS(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = r === "width" ? "height" : "width", s = n[o];
    return s == null ? a[r] : a[r] / a[o] * s;
  }, e.prototype.getWidth = function() {
    return this._getSize("width");
  }, e.prototype.getHeight = function() {
    return this._getSize("height");
  }, e.prototype.getAnimationStyleProps = function() {
    return VS;
  }, e.prototype.getBoundingRect = function() {
    var r = this.style;
    return this._rect || (this._rect = new j(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, e;
})(Va);
zr.prototype.type = "image";
function zS(t, e) {
  var r = e.x, n = e.y, i = e.width, a = e.height, o = e.r, s, u, l, f;
  i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > i && (h = s + u, s *= i / h, u *= i / h), l + f > i && (h = l + f, l *= i / h, f *= i / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), t.moveTo(r + s, n), t.lineTo(r + i - u, n), u !== 0 && t.arc(r + i - u, n + u, u, -Math.PI / 2, 0), t.lineTo(r + i, n + a - l), l !== 0 && t.arc(r + i - l, n + a - l, l, 0, Math.PI / 2), t.lineTo(r + f, n + a), f !== 0 && t.arc(r + f, n + a - f, f, Math.PI / 2, Math.PI), t.lineTo(r, n + s), s !== 0 && t.arc(r + s, n + s, s, Math.PI, Math.PI * 1.5), t.closePath();
}
var ei = Math.round;
function rm(t, e, r) {
  if (e) {
    var n = e.x1, i = e.x2, a = e.y1, o = e.y2;
    t.x1 = n, t.x2 = i, t.y1 = a, t.y2 = o;
    var s = r && r.lineWidth;
    return s && (ei(n * 2) === ei(i * 2) && (t.x1 = t.x2 = gn(n, s, !0)), ei(a * 2) === ei(o * 2) && (t.y1 = t.y2 = gn(a, s, !0))), t;
  }
}
function nm(t, e, r) {
  if (e) {
    var n = e.x, i = e.y, a = e.width, o = e.height;
    t.x = n, t.y = i, t.width = a, t.height = o;
    var s = r && r.lineWidth;
    return s && (t.x = gn(n, s, !0), t.y = gn(i, s, !0), t.width = Math.max(gn(n + a, s, !1) - t.x, a === 0 ? 0 : 1), t.height = Math.max(gn(i + o, s, !1) - t.y, o === 0 ? 0 : 1)), t;
  }
}
function gn(t, e, r) {
  if (!e)
    return t;
  var n = ei(t * 2);
  return (n + ei(e)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2;
}
var HS = /* @__PURE__ */ (function() {
  function t() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return t;
})(), GS = {}, Le = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new HS();
  }, e.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = nm(GS, n, this.style);
      i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? zS(r, n) : r.rect(i, a, o, s);
  }, e.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, e;
})(me);
Le.prototype.type = "rect";
var sv = {
  fill: "#000"
}, uv = 2, Vt = {}, US = {
  style: pe({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, eu.style)
}, it = (function(t) {
  z(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = sv, n.attr(r), n;
  }
  return e.prototype.childrenRef = function() {
    return this._children;
  }, e.prototype.update = function() {
    t.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var r = 0; r < this._children.length; r++) {
      var n = this._children[r];
      n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
    }
  }, e.prototype.updateTransform = function() {
    var r = this.innerTransformable;
    r ? (r.updateTransform(), r.transform && (this.transform = r.transform)) : t.prototype.updateTransform.call(this);
  }, e.prototype.getLocalTransform = function(r) {
    var n = this.innerTransformable;
    return n ? n.getLocalTransform(r) : t.prototype.getLocalTransform.call(this, r);
  }, e.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), t.prototype.getComputedTransform.call(this);
  }, e.prototype._updateSubTexts = function() {
    this._childCursor = 0, $S(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, e.prototype.addSelfToZr = function(r) {
    t.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = r;
  }, e.prototype.removeSelfFromZr = function(r) {
    t.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = null;
  }, e.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var r = new j(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], u = s.getBoundingRect(), l = s.getLocalTransform(i);
        l ? (r.copy(u), r.applyTransform(l), a = a || r.clone(), a.union(r)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || r;
    }
    return this._rect;
  }, e.prototype.setDefaultTextStyle = function(r) {
    this._defaultStyle = r || sv;
  }, e.prototype.setTextContent = function(r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, e.prototype._mergeStyle = function(r, n) {
    if (!n)
      return r;
    var i = n.rich, a = r.rich || i && {};
    return k(r, n), i && a ? (this._mergeRich(a, i), r.rich = a) : a && (r.rich = a), r;
  }, e.prototype._mergeRich = function(r, n) {
    for (var i = be(n), a = 0; a < i.length; a++) {
      var o = i[a];
      r[o] = r[o] || {}, k(r[o], n[o]);
    }
  }, e.prototype.getAnimationStyleProps = function() {
    return US;
  }, e.prototype._getOrCreateChild = function(r) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof r)) && (n = new r()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, e.prototype._updatePlainTexts = function() {
    var r = this.style, n = r.font || Nr, i = r.padding, a = this._defaultStyle, o = r.x || 0, s = r.y || 0, u = r.align || a.align || "left", l = r.verticalAlign || a.verticalAlign || "top";
    Vc(Vt, a.overflowRect, o, s, u, l), o = Vt.baseX, s = Vt.baseY;
    var f = pv(r), h = z1(f, r, Vt.outerWidth, Vt.outerHeight), c = Yu(r), v = !!r.backgroundColor, d = h.outerHeight, g = h.outerWidth, m = h.lines, p = h.lineHeight;
    this.isTruncated = !!h.isTruncated;
    var y = o, _ = Sn(s, h.contentHeight, l);
    if (c || i) {
      var S = di(o, g, u), b = Sn(s, d, l);
      c && this._renderBackground(r, r, S, b, g, d);
    }
    _ += p / 2, i && (y = dv(o, u, i), l === "top" ? _ += i[0] : l === "bottom" && (_ -= i[2]));
    for (var T = 0, w = !1, E = !1, D = vv("fill" in r ? r.fill : (E = !0, a.fill)), C = cv("stroke" in r ? r.stroke : !v && (!a.autoStroke || E) ? (T = uv, w = !0, a.stroke) : null), M = r.textShadowBlur > 0, L = 0; L < m.length; L++) {
      var A = this._getOrCreateChild(fs), I = A.createStyle();
      A.useStyle(I), I.text = m[L], I.x = y, I.y = _, I.textAlign = u, I.textBaseline = "middle", I.opacity = r.opacity, I.strokeFirst = !0, M && (I.shadowBlur = r.textShadowBlur || 0, I.shadowColor = r.textShadowColor || "transparent", I.shadowOffsetX = r.textShadowOffsetX || 0, I.shadowOffsetY = r.textShadowOffsetY || 0), I.stroke = C, I.fill = D, C && (I.lineWidth = r.lineWidth || T, I.lineDash = r.lineDash, I.lineDashOffset = r.lineDashOffset || 0), I.font = n, fv(I, r), _ += p, A.setBoundingRect(Ql(I, h.contentWidth, h.calculatedLineHeight, w ? 0 : null));
    }
  }, e.prototype._updateRichTexts = function() {
    var r = this.style, n = this._defaultStyle, i = r.align || n.align, a = r.verticalAlign || n.verticalAlign, o = r.x || 0, s = r.y || 0;
    Vc(Vt, n.overflowRect, o, s, i, a), o = Vt.baseX, s = Vt.baseY;
    var u = pv(r), l = U1(u, r, Vt.outerWidth, Vt.outerHeight, i), f = l.width, h = l.outerWidth, c = l.outerHeight, v = r.padding;
    this.isTruncated = !!l.isTruncated;
    var d = di(o, h, i), g = Sn(s, c, a), m = d, p = g;
    v && (m += v[3], p += v[0]);
    var y = m + f;
    Yu(r) && this._renderBackground(r, r, d, g, h, c);
    for (var _ = !!r.backgroundColor, S = 0; S < l.lines.length; S++) {
      for (var b = l.lines[S], T = b.tokens, w = T.length, E = b.lineHeight, D = b.width, C = 0, M = m, L = y, A = w - 1, I = void 0; C < w && (I = T[C], !I.align || I.align === "left"); )
        this._placeToken(I, r, E, p, M, "left", _), D -= I.width, M += I.width, C++;
      for (; A >= 0 && (I = T[A], I.align === "right"); )
        this._placeToken(I, r, E, p, L, "right", _), D -= I.width, L -= I.width, A--;
      for (M += (f - (M - m) - (y - L) - D) / 2; C <= A; )
        I = T[C], this._placeToken(I, r, E, p, M + I.width / 2, "center", _), M += I.width, C++;
      p += E;
    }
  }, e.prototype._placeToken = function(r, n, i, a, o, s, u) {
    var l = n.rich[r.styleName] || {};
    l.text = r.text;
    var f = r.verticalAlign, h = a + i / 2;
    f === "top" ? h = a + r.height / 2 : f === "bottom" && (h = a + i - r.height / 2);
    var c = !r.isLineHolder && Yu(l);
    c && this._renderBackground(l, n, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, h - r.height / 2, r.width, r.height);
    var v = !!l.backgroundColor, d = r.textPadding;
    d && (o = dv(o, s, d), h -= r.height / 2 - d[0] - r.innerHeight / 2);
    var g = this._getOrCreateChild(fs), m = g.createStyle();
    g.useStyle(m);
    var p = this._defaultStyle, y = !1, _ = 0, S = !1, b = vv("fill" in l ? l.fill : "fill" in n ? n.fill : (y = !0, p.fill)), T = cv("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !v && !u && (!p.autoStroke || y) ? (_ = uv, S = !0, p.stroke) : null), w = l.textShadowBlur > 0 || n.textShadowBlur > 0;
    m.text = r.text, m.x = o, m.y = h, w && (m.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, m.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", m.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, m.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), m.textAlign = s, m.textBaseline = "middle", m.font = r.font || Nr, m.opacity = Ar(l.opacity, n.opacity, 1), fv(m, l), T && (m.lineWidth = Ar(l.lineWidth, n.lineWidth, _), m.lineDash = Y(l.lineDash, n.lineDash), m.lineDashOffset = n.lineDashOffset || 0, m.stroke = T), b && (m.fill = b), g.setBoundingRect(Ql(m, r.contentWidth, r.contentHeight, S ? 0 : null));
  }, e.prototype._renderBackground = function(r, n, i, a, o, s) {
    var u = r.backgroundColor, l = r.borderWidth, f = r.borderColor, h = u && u.image, c = u && !h, v = r.borderRadius, d = this, g, m;
    if (c || r.lineHeight || l && f) {
      g = this._getOrCreateChild(Le), g.useStyle(g.createStyle()), g.style.fill = null;
      var p = g.shape;
      p.x = i, p.y = a, p.width = o, p.height = s, p.r = v, g.dirtyShape();
    }
    if (c) {
      var y = g.style;
      y.fill = u || null, y.fillOpacity = Y(r.fillOpacity, 1);
    } else if (h) {
      m = this._getOrCreateChild(zr), m.onload = function() {
        d.dirtyStyle();
      };
      var _ = m.style;
      _.image = u.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (l && f) {
      var y = g.style;
      y.lineWidth = l, y.stroke = f, y.strokeOpacity = Y(r.strokeOpacity, 1), y.lineDash = r.borderDash, y.lineDashOffset = r.borderDashOffset || 0, g.strokeContainThreshold = 0, g.hasFill() && g.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var S = (g || m).style;
    S.shadowBlur = r.shadowBlur || 0, S.shadowColor = r.shadowColor || "transparent", S.shadowOffsetX = r.shadowOffsetX || 0, S.shadowOffsetY = r.shadowOffsetY || 0, S.opacity = Ar(r.opacity, n.opacity, 1);
  }, e.makeFont = function(r) {
    var n = "";
    return ZS(r) && (n = [
      r.fontStyle,
      r.fontWeight,
      XS(r.fontSize),
      r.fontFamily || "sans-serif"
    ].join(" ")), n && Gt(n) || r.textFont || r.font;
  }, e;
})(Va), WS = { left: !0, right: 1, center: 1 }, YS = { top: 1, bottom: 1, middle: 1 }, lv = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function XS(t) {
  return typeof t == "string" && (t.indexOf("px") !== -1 || t.indexOf("rem") !== -1 || t.indexOf("em") !== -1) ? t : isNaN(+t) ? sh + "px" : t + "px";
}
function fv(t, e) {
  for (var r = 0; r < lv.length; r++) {
    var n = lv[r], i = e[n];
    i != null && (t[n] = i);
  }
}
function ZS(t) {
  return t.fontSize != null || t.fontFamily || t.fontWeight;
}
function $S(t) {
  return hv(t), x(t.rich, hv), t;
}
function hv(t) {
  if (t) {
    t.font = it.makeFont(t);
    var e = t.align;
    e === "middle" && (e = "center"), t.align = e == null || WS[e] ? e : "left";
    var r = t.verticalAlign;
    r === "center" && (r = "middle"), t.verticalAlign = r == null || YS[r] ? r : "top";
    var n = t.padding;
    n && (t.padding = hh(t.padding));
  }
}
function cv(t, e) {
  return t == null || e <= 0 || t === "transparent" || t === "none" ? null : t.image || t.colorStops ? "#000" : t;
}
function vv(t) {
  return t == null || t === "none" ? null : t.image || t.colorStops ? "#000" : t;
}
function dv(t, e, r) {
  return e === "right" ? t - r[1] : e === "center" ? t + r[3] / 2 - r[1] / 2 : t + r[3];
}
function pv(t) {
  var e = t.text;
  return e != null && (e += ""), e;
}
function Yu(t) {
  return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor);
}
var gv = 1e-4, im = 20;
function qS(t) {
  return t.replace(/^\s+|\s+$/g, "");
}
var ft = Math.min, de = Math.max, Ne = Math.abs, vr = Math.round, gi = Math.floor, Fa = Math.ceil, Mi = Math.pow, Sa = Math.log, hf = Math.LN10, KS = Math.PI, QS = Math.random;
function mv(t, e, r, n) {
  var i = e[0], a = e[1], o = r[0], s = r[1], u = a - i, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (n)
    if (u > 0) {
      if (t <= i)
        return o;
      if (t >= a)
        return s;
    } else {
      if (t >= i)
        return o;
      if (t <= a)
        return s;
    }
  else {
    if (t === i)
      return o;
    if (t === a)
      return s;
  }
  return (t - i) / u * l + o;
}
var zt = JS;
function JS(t, e, r) {
  switch (t) {
    case "center":
    case "middle":
      t = "50%";
      break;
    case "left":
    case "top":
      t = "0%";
      break;
    case "right":
    case "bottom":
      t = "100%";
      break;
  }
  return cf(t, e, r);
}
function cf(t, e, r) {
  return H(t) ? jS(t) ? parseFloat(t) / 100 * e + (r || 0) : parseFloat(t) : t == null ? NaN : +t;
}
function jS(t) {
  return !!qS(t).match(/%$/);
}
function se(t, e, r) {
  return process.env.NODE_ENV !== "production" && N(e != null), isNaN(e) ? r ? "" + t : +t : (e = ft(de(0, e), im), t = (+t).toFixed(e), r ? t : +t);
}
function am(t) {
  return t.sort(function(e, r) {
    return e - r;
  }), t;
}
function fr(t) {
  if (t = +t, isNaN(t))
    return 0;
  if (t > 1e-14) {
    for (var e = 1, r = 0; r < 15; r++, e *= 10)
      if (vr(t * e) / e === t)
        return r;
  }
  return eb(t);
}
function eb(t) {
  var e = t.toString().toLowerCase(), r = e.indexOf("e"), n = r > 0 ? +e.slice(r + 1) : 0, i = r > 0 ? r : e.length, a = e.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return de(0, o - n);
}
function tb(t, e, r) {
  var n = Ne(t[1] - t[0]);
  if (!isFinite(n) || n === 0)
    return NaN;
  var i = Sa(2 * Ne(r || 1) * Ne(n)) / hf, a = Sa(Ne(e)) / hf, o = de(0, Fa(-i + a));
  return isFinite(o) || (o = NaN), o;
}
function rb(t, e) {
  var r = de(fr(t), fr(e)), n = t + e;
  return r > im ? n : se(n, r);
}
var yv = Mi(2, 53) - 1;
function om(t) {
  var e = KS * 2;
  return (t % e + e) % e;
}
function hs(t) {
  return t > -gv && t < gv;
}
var nb = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Ai(t) {
  if (t instanceof Date)
    return t;
  if (H(t)) {
    var e = nb.exec(t);
    if (!e)
      return /* @__PURE__ */ new Date(NaN);
    if (e[8]) {
      var r = +e[4] || 0;
      return e[8].toUpperCase() !== "Z" && (r -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, r, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0));
    } else
      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0);
  } else if (t == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(vr(t));
}
function sm(t) {
  return Mi(10, mh(t));
}
function mh(t) {
  if (t === 0)
    return 0;
  var e = gi(Sa(t) / hf);
  return t / Mi(10, e) >= 10 && e++, e;
}
var um = 2;
function yh(t, e) {
  var r = mh(t), n = Mi(10, r), i = t / n, a;
  return e === um ? a = 1 : e ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, t = a * n, se(t, -r);
}
function cs(t) {
  var e = parseFloat(t);
  return e == t && (e !== 0 || !H(t) || t.indexOf("x") <= 0) ? e : NaN;
}
function lm(t) {
  return !isNaN(cs(t));
}
function fm() {
  return vr(QS() * 9);
}
function hm(t, e) {
  return e === 0 ? t : hm(e, t % e);
}
function _v(t, e) {
  return t == null ? e : e == null ? t : t * e / hm(t, e);
}
function Qt(t) {
  return t != null && isFinite(t);
}
var ib = "[ECharts] ", Sv = {}, ab = typeof console < "u" && console.warn && console.log;
function tu(t, e, r) {
  if (ab) {
    if (r) {
      if (Sv[e])
        return;
      Sv[e] = !0;
    }
    console[t](ib + e);
  }
}
function cm(t, e) {
  tu("log", t, e);
}
function je(t, e) {
  tu("warn", t, e);
}
function ue(t, e) {
  tu("error", t, e);
}
function dr(t) {
  process.env.NODE_ENV !== "production" && tu("warn", "DEPRECATED: " + t, !0);
}
function Pe(t, e, r) {
  process.env.NODE_ENV !== "production" && dr((r ? "[" + r + "]" : "") + (t + " is deprecated; use " + e + " instead."));
}
function vs() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = "";
  if (process.env.NODE_ENV !== "production") {
    var n = function(i) {
      return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : hi(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : Q(i) ? "function () { ... }" : n1(i) ? i + "" : null;
    };
    r = q(t, function(i) {
      if (H(i))
        return i;
      var a = n(i);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(i, function(o, s) {
            var u = n(s);
            return u ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return r;
}
function et(t) {
  throw new Error(t);
}
function bv(t, e, r) {
  return (e - t) * r + t;
}
var vm = "series\0", ob = "\0_ec_\0";
function $e(t) {
  return t instanceof Array ? t : t == null ? [] : [t];
}
function Tv(t, e, r) {
  if (t) {
    t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
    for (var n = 0, i = r.length; n < i; n++) {
      var a = r[n];
      !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
    }
  }
}
var wv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function za(t) {
  return W(t) && !V(t) && !(t instanceof Date) ? t.value : t;
}
function sb(t) {
  return W(t) && !(t instanceof Array);
}
function ub(t, e, r) {
  var n = r === "normalMerge", i = r === "replaceMerge", a = r === "replaceAll";
  t = t || [], e = (e || []).slice();
  var o = K();
  x(e, function(u, l) {
    if (!W(u)) {
      e[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !Cv(u.id) && xv(u.id), u.name != null && !Cv(u.name) && xv(u.name));
  });
  var s = lb(t, o, r);
  return (n || i) && fb(s, t, o, e), n && hb(s, e), n || i ? cb(s, e, i) : a && vb(s, e), db(s), s;
}
function lb(t, e, r) {
  var n = [];
  if (r === "replaceAll")
    return n;
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    a && a.id != null && e.set(a.id, i), n.push({
      existing: r === "replaceMerge" || mi(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function fb(t, e, r, n) {
  x(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = la(i.id), s = r.get(o);
      if (s != null) {
        var u = t[s];
        N(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = e[s], n[a] = null;
      }
    }
  });
}
function hb(t, e) {
  x(e, function(r, n) {
    if (!(!r || r.name == null))
      for (var i = 0; i < t.length; i++) {
        var a = t[i].existing;
        if (!t[i].newOption && a && (a.id == null || r.id == null) && !mi(r) && !mi(a) && dm("name", a, r)) {
          t[i].newOption = r, e[n] = null;
          return;
        }
      }
  });
}
function cb(t, e, r) {
  x(e, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = t[a]) && (i.newOption || mi(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !dm("id", n, i.existing));
      )
        a++;
      i ? (i.newOption = n, i.brandNew = r) : t.push({
        newOption: n,
        brandNew: r,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function vb(t, e) {
  x(e, function(r) {
    t.push({
      newOption: r,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function db(t) {
  var e = K();
  x(t, function(r) {
    var n = r.existing;
    n && e.set(n.id, r);
  }), x(t, function(r) {
    var n = r.newOption;
    N(!n || n.id == null || !e.get(n.id) || e.get(n.id) === r, "id duplicates: " + (n && n.id)), n && n.id != null && e.set(n.id, r), !r.keyInfo && (r.keyInfo = {});
  }), x(t, function(r, n) {
    var i = r.existing, a = r.newOption, o = r.keyInfo;
    if (W(a)) {
      if (o.name = a.name != null ? la(a.name) : i ? i.name : vm + n, i)
        o.id = la(i.id);
      else if (a.id != null)
        o.id = la(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (e.get(o.id));
      }
      e.set(o.id, r);
    }
  });
}
function dm(t, e, r) {
  var n = $t(e[t], null), i = $t(r[t], null);
  return n != null && i != null && n === i;
}
function la(t) {
  if (process.env.NODE_ENV !== "production" && t == null)
    throw new Error();
  return $t(t, "");
}
function $t(t, e) {
  return t == null ? e : H(t) ? t : we(t) || rs(t) ? t + "" : e;
}
function xv(t) {
  process.env.NODE_ENV !== "production" && je("`" + t + "` is invalid id or name. Must be a string or number.");
}
function Cv(t) {
  return rs(t) || lm(t);
}
function _h(t) {
  var e = t.name;
  return !!(e && e.indexOf(vm));
}
function mi(t) {
  return t && t.id != null && la(t.id).indexOf(ob) === 0;
}
function pb(t, e, r) {
  x(t, function(n) {
    var i = n.newOption;
    W(i) && (n.keyInfo.mainType = e, n.keyInfo.subType = gb(e, i, n.existing, r));
  });
}
function gb(t, e, r, n) {
  var i = e.type ? e.type : r ? r.subType : n.determineSubType(t, e);
  return i;
}
function Cn(t, e) {
  if (e.dataIndexInside != null)
    return e.dataIndexInside;
  if (e.dataIndex != null)
    return V(e.dataIndex) ? q(e.dataIndex, function(r) {
      return t.indexOfRawIndex(r);
    }) : t.indexOfRawIndex(e.dataIndex);
  if (e.name != null)
    return V(e.name) ? q(e.name, function(r) {
      return t.indexOfName(r);
    }) : t.indexOfName(e.name);
}
function ye() {
  var t = "__ec_inner_" + mb++;
  return function(e) {
    return e[t] || (e[t] = {});
  };
}
var mb = fm();
function Xu(t, e, r) {
  var n = Sh(e, r), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, u = r ? r.defaultMainType : null;
  return !i && u && a.set(u, {}), a.each(function(l, f) {
    var h = Ha(t, f, l, {
      useDefault: u === f,
      enableAll: r && r.enableAll != null ? r.enableAll : !0,
      enableNone: r && r.enableNone != null ? r.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Sh(t, e) {
  var r;
  if (H(t)) {
    var n = {};
    n[t + "Index"] = 0, r = n;
  } else
    r = t;
  var i = K(), a = {}, o = !1;
  return x(r, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || e && e.includeMainTypes && le(e.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var c = i.get(f) || i.set(f, {});
      c[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: i,
    others: a
  };
}
var wt = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function Ha(t, e, r, n) {
  n = n || wt;
  var i = r.index, a = r.id, o = r.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = n.useDefault && (u = t.getComponent(e)) ? [u] : [], s;
  }
  if (i === "none" || i === !1) {
    if (n.enableNone)
      return s.models = [], s;
    process.env.NODE_ENV !== "production" && ue('`"none"` or `false` is not a valid value on index option.'), i = -1;
  }
  return i === "all" && (n.enableAll ? i = a = o = null : (process.env.NODE_ENV !== "production" && ue('`"all"` is not a valid value on index option.'), i = -1)), s.models = t.queryComponents({
    mainType: e,
    index: i,
    id: a,
    name: o
  }), s;
}
function yb(t, e, r) {
  process.env.NODE_ENV !== "production" && N(e);
  var n = {};
  n[e + "Id"] = t[e + "Id"], n[e + "Index"] = t[e + "Index"], n[e + "Name"] = t[e + "Name"];
  var i = {
    mainType: e,
    query: n
  };
  return r && (i.subType = r), i;
}
function pm(t, e, r) {
  t.setAttribute ? t.setAttribute(e, r) : t[e] = r;
}
function _b(t, e) {
  return t.getAttribute ? t.getAttribute(e) : t[e];
}
function Sb(t) {
  return t === "auto" ? ee.domSupported ? "html" : "richText" : t || "html";
}
function bb(t, e, r, n, i) {
  var a = e == null || e === "auto";
  if (n == null)
    return n;
  if (we(n)) {
    var o = bv(r || 0, n, i);
    return se(o, a ? Math.max(fr(r || 0), fr(n)) : e);
  } else {
    if (H(n))
      return i < 1 ? r : n;
    for (var s = [], u = r, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var c = t.getDimensionInfo(h);
      if (c && c.type === "ordinal")
        s[h] = (i < 1 && u ? u : l)[h];
      else {
        var v = u && u[h] ? u[h] : 0, d = l[h], o = bv(v, d, i);
        s[h] = se(o, a ? Math.max(fr(v), fr(d)) : e);
      }
    }
    return s;
  }
}
function Tt() {
  return [1 / 0, -1 / 0];
}
function vf(t, e) {
  pr(e) && (e < t[0] && (t[0] = e), e > t[1] && (t[1] = e));
}
function gm(t, e) {
  pr(e) && e < t[0] && (t[0] = e);
}
function mm(t, e) {
  pr(e) && e > t[1] && (t[1] = e);
}
function Tb(t, e) {
  yi(e[0], e[1]) && (e[0] < t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1]));
}
function pr(t) {
  return t != null && isFinite(t);
}
function yi(t, e) {
  return pr(t) && pr(e) && t <= e;
}
function wb(t) {
  var e = t[1] - t[0];
  return isFinite(e) && e >= 0;
}
function xb(t) {
  yi(t[0], t[1]) && t[0] > t[1] && (t[0] = t[1]);
}
function bh(t, e, r) {
  var n = K(), i = 0;
  x(t, function(a) {
    var o = e(a);
    process.env.NODE_ENV !== "production" && N(H(o));
    var s = n.get(o) || 0;
    r && r(a, s), !s && !r && (t[i++] = a), n.set(o, s + 1);
  }), r || (t.length = i);
}
function Cb(t) {
  return process.env.NODE_ENV !== "production" && N(t.value != null), t.value + "";
}
function Db(t) {
  return process.env.NODE_ENV !== "production" && N(t != null), t + "";
}
function Eb(t, e, r) {
  var n = t.getData().count();
  return {
    progressiveRender: r.progressiveEnabled && e.incrementalPrepareRender && n >= r.threshold,
    large: t.get("large") && n >= t.get("largeThreshold"),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: t.get("progressiveChunkMode") === "mod" ? t.getData().count() : null
  };
}
function Th(t) {
  return {
    overallReset: t
  };
}
var ve = ye(), Mb = function(t, e, r, n) {
  if (n) {
    var i = ve(n);
    i.dataIndex = r, i.dataType = e, i.seriesIndex = t, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = ve(a);
      o.seriesIndex = t, o.dataIndex = r, o.dataType = e, o.ssrType = "chart";
    });
  }
}, Ga = "undefined", ym = "series", df = K(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), ht = "original", Ge = "arrayRows", Ot = "objectRows", nr = "keyedColumns", cr = "typedArray", _m = "unknown", qt = "column", Ln = "row", Ab = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], Sm = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      x(Ab, function(r) {
        this[r] = Se(e[r], e);
      }, this);
    }
    return t;
  })()
);
function Lb(t, e) {
  return e.mainType === ym ? t.getViewOfSeriesModel(e) : t.getViewOfComponentModel(e);
}
var Dv = 1, Ev = {}, bm = ye(), wh = ye(), xh = 0, ru = 1, nu = 2, Jt = ["emphasis", "blur", "select"], Mv = ["normal", "emphasis", "blur", "select"], Ib = 10, Ob = 9, wn = "highlight", Go = "downplay", ds = "select", pf = "unselect", ps = "toggleSelect", Ch = "selectchanged";
function kn(t) {
  return t != null && t !== "none";
}
function iu(t, e, r) {
  t.onHoverStateChange && (t.hoverState || 0) !== r && t.onHoverStateChange(e), t.hoverState = r;
}
function Tm(t) {
  iu(t, "emphasis", nu);
}
function wm(t) {
  t.hoverState === nu && iu(t, "normal", xh);
}
function Dh(t) {
  iu(t, "blur", ru);
}
function xm(t) {
  t.hoverState === ru && iu(t, "normal", xh);
}
function Pb(t) {
  t.selected = !0;
}
function Nb(t) {
  t.selected = !1;
}
function Av(t, e, r) {
  e(t, r);
}
function gr(t, e, r) {
  Av(t, e, r), t.isGroup && t.traverse(function(n) {
    Av(n, e, r);
  });
}
function Lv(t, e) {
  switch (e) {
    case "emphasis":
      t.hoverState = nu;
      break;
    case "normal":
      t.hoverState = xh;
      break;
    case "blur":
      t.hoverState = ru;
      break;
    case "select":
      t.selected = !0;
  }
}
function Rb(t, e, r, n) {
  for (var i = t.style, a = {}, o = 0; o < e.length; o++) {
    var s = e[o], u = i[s];
    a[s] = u ?? (n && n[s]);
  }
  for (var o = 0; o < t.animators.length; o++) {
    var l = t.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(r) < 0 && l.targetName === "style" && l.saveTo(a, e);
  }
  return a;
}
function kb(t, e, r, n) {
  var i = r && le(r, "select") >= 0, a = !1;
  if (t instanceof me) {
    var o = bm(t), s = i && o.selectFill || o.normalFill, u = i && o.selectStroke || o.normalStroke;
    if (kn(s) || kn(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit" ? (a = !0, n = k({}, n), l = k({}, l), l.fill = s) : !kn(l.fill) && kn(s) ? (a = !0, n = k({}, n), l = k({}, l), l.fill = qc(s)) : !kn(l.stroke) && kn(u) && (a || (n = k({}, n), l = k({}, l)), l.stroke = qc(u)), n.style = l;
    }
  }
  if (n && n.z2 == null) {
    a || (n = k({}, n));
    var f = t.z2EmphasisLift;
    n.z2 = t.z2 + (f ?? Ib);
  }
  return n;
}
function Bb(t, e, r) {
  if (r && r.z2 == null) {
    r = k({}, r);
    var n = t.z2SelectLift;
    r.z2 = t.z2 + (n ?? Ob);
  }
  return r;
}
function Vb(t, e, r) {
  var n = le(t.currentStates, e) >= 0, i = t.style.opacity, a = n ? null : Rb(t, ["opacity"], e, {
    opacity: 1
  });
  r = r || {};
  var o = r.style || {};
  return o.opacity == null && (r = k({}, r), o = k({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), r.style = o), r;
}
function Zu(t, e) {
  var r = this.states[t];
  if (this.style) {
    if (t === "emphasis")
      return kb(this, t, e, r);
    if (t === "blur")
      return Vb(this, t, r);
    if (t === "select")
      return Bb(this, t, r);
  }
  return r;
}
function Fb(t) {
  t.stateProxy = Zu;
  var e = t.getTextContent(), r = t.getTextGuideLine();
  e && (e.stateProxy = Zu), r && (r.stateProxy = Zu);
}
function Iv(t, e) {
  !Mm(t, e) && !t.__highByOuter && gr(t, Tm);
}
function Ov(t, e) {
  !Mm(t, e) && !t.__highByOuter && gr(t, wm);
}
function gs(t, e) {
  t.__highByOuter |= 1 << (e || 0), gr(t, Tm);
}
function ms(t, e) {
  !(t.__highByOuter &= ~(1 << (e || 0))) && gr(t, wm);
}
function zb(t) {
  gr(t, Dh);
}
function Cm(t) {
  gr(t, xm);
}
function Dm(t) {
  gr(t, Pb);
}
function Em(t) {
  gr(t, Nb);
}
function Mm(t, e) {
  return t.__highDownSilentOnTouch && e.zrByTouch;
}
function Am(t) {
  var e = t.getModel(), r = [], n = [];
  e.eachComponent(function(i, a) {
    var o = wh(a), s = Lb(t, a), u = i === "series";
    !u && n.push(s), o.isBlured && (s.group.traverse(function(l) {
      xm(l);
    }), u && r.push(a)), o.isBlured = !1;
  }), x(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(r, !1, e);
  });
}
function gf(t, e, r, n) {
  var i = n.getModel();
  r = r || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && Cm(c);
    }
  }
  if (t != null && !(!e || e === "none")) {
    var o = i.getSeriesByIndex(t), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    i.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var c = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (r === "series" && !f || r === "coordinateSystem" && !c || e === "series" && f)) {
        var v = n.getViewOfSeriesModel(l);
        if (v.group.traverse(function(m) {
          m.__highByOuter && f && e === "self" || Dh(m);
        }), nt(e))
          a(l.getData(), e);
        else if (W(e))
          for (var d = be(e), g = 0; g < d.length; g++)
            a(l.getData(d[g]), e[d[g]]);
        u.push(l), wh(l).isBlured = !0;
      }
    }), i.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = n.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i);
      }
    });
  }
}
function mf(t, e, r) {
  if (!(t == null || e == null)) {
    var n = r.getModel().getComponent(t, e);
    if (n) {
      wh(n).isBlured = !0;
      var i = r.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        Dh(a);
      });
    }
  }
}
function Hb(t, e, r) {
  var n = t.seriesIndex, i = t.getData(e.dataType);
  if (!i) {
    process.env.NODE_ENV !== "production" && ue("Unknown dataType " + e.dataType);
    return;
  }
  var a = Cn(i, e);
  a = (V(a) ? a[0] : a) || 0;
  var o = i.getItemGraphicEl(a);
  if (!o)
    for (var s = i.count(), u = 0; !o && u < s; )
      o = i.getItemGraphicEl(u++);
  if (o) {
    var l = ve(o);
    gf(n, l.focus, l.blurScope, r);
  } else {
    var f = t.get(["emphasis", "focus"]), h = t.get(["emphasis", "blurScope"]);
    f != null && gf(n, f, h, r);
  }
}
function Eh(t, e, r, n) {
  var i = {
    focusSelf: !1,
    dispatchers: null
  };
  if (t == null || t === "series" || e == null || r == null)
    return i;
  var a = n.getModel().getComponent(t, e);
  if (!a)
    return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return i;
  for (var s = o.findHighDownDispatchers(r), u, l = 0; l < s.length; l++)
    if (process.env.NODE_ENV !== "production" && !_i(s[l]) && ue("param should be highDownDispatcher"), ve(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function Gb(t, e, r) {
  process.env.NODE_ENV !== "production" && !_i(t) && ue("param should be highDownDispatcher");
  var n = ve(t), i = Eh(n.componentMainType, n.componentIndex, n.componentHighDownName, r), a = i.dispatchers, o = i.focusSelf;
  a ? (o && mf(n.componentMainType, n.componentIndex, r), x(a, function(s) {
    return Iv(s, e);
  })) : (gf(n.seriesIndex, n.focus, n.blurScope, r), n.focus === "self" && mf(n.componentMainType, n.componentIndex, r), Iv(t, e));
}
function Ub(t, e, r) {
  process.env.NODE_ENV !== "production" && !_i(t) && ue("param should be highDownDispatcher"), Am(r);
  var n = ve(t), i = Eh(n.componentMainType, n.componentIndex, n.componentHighDownName, r).dispatchers;
  i ? x(i, function(a) {
    return Ov(a, e);
  }) : Ov(t, e);
}
function Wb(t, e, r) {
  if (Sf(e)) {
    var n = e.dataType, i = t.getData(n), a = Cn(i, e);
    V(a) || (a = [a]), t[e.type === ps ? "toggleSelect" : e.type === ds ? "select" : "unselect"](a, n);
  }
}
function Pv(t) {
  var e = t.getAllData();
  x(e, function(r) {
    var n = r.data, i = r.type;
    n.eachItemGraphicEl(function(a, o) {
      t.isSelected(o, i) ? Dm(a) : Em(a);
    });
  });
}
function Yb(t) {
  var e = [];
  return t.eachSeries(function(r) {
    var n = r.getAllData();
    x(n, function(i) {
      i.data;
      var a = i.type, o = r.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: r.seriesIndex
        };
        a != null && (s.dataType = a), e.push(s);
      }
    });
  }), e;
}
function yf(t, e, r) {
  Lm(t, !0), gr(t, Fb), Zb(t, e, r);
}
function Xb(t) {
  Lm(t, !1);
}
function _f(t, e, r, n) {
  n ? Xb(t) : yf(t, e, r);
}
function Zb(t, e, r) {
  var n = ve(t);
  e != null ? (n.focus = e, n.blurScope = r) : n.focus && (n.focus = null);
}
var Nv = ["emphasis", "blur", "select"], $b = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function Rv(t, e, r, n) {
  r = r || "itemStyle";
  for (var i = 0; i < Nv.length; i++) {
    var a = Nv[i], o = e.getModel([a, r]), s = t.ensureState(a);
    s.style = o[$b[r]]();
  }
}
function Lm(t, e) {
  var r = e === !1, n = t;
  t.highDownSilentOnTouch && (n.__highDownSilentOnTouch = t.highDownSilentOnTouch), (!r || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !r);
}
function _i(t) {
  return !!(t && t.__highDownDispatcher);
}
function qb(t) {
  var e = Ev[t];
  return e == null && Dv <= 32 && (e = Ev[t] = Dv++), e;
}
function Sf(t) {
  var e = t.type;
  return e === ds || e === pf || e === ps;
}
function kv(t) {
  var e = t.type;
  return e === wn || e === Go;
}
function Kb(t) {
  var e = bm(t);
  e.normalFill = t.style.fill, e.normalStroke = t.style.stroke;
  var r = t.states.select || {};
  e.selectFill = r.style && r.style.fill || null, e.selectStroke = r.style && r.style.stroke || null;
}
var Bn = xn.CMD, Qb = [[], [], []], Bv = Math.sqrt, Jb = Math.atan2;
function jb(t, e) {
  if (e) {
    var r = t.data, n = t.len(), i, a, o, s, u, l, f = Bn.M, h = Bn.C, c = Bn.L, v = Bn.R, d = Bn.A, g = Bn.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (i = r[o++], s = o, a = 0, i) {
        case f:
          a = 1;
          break;
        case c:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case g:
          a = 2;
          break;
        case d:
          var m = e[4], p = e[5], y = Bv(e[0] * e[0] + e[1] * e[1]), _ = Bv(e[2] * e[2] + e[3] * e[3]), S = Jb(-e[1] / _, e[0] / y);
          r[o] *= y, r[o++] += m, r[o] *= _, r[o++] += p, r[o++] *= y, r[o++] *= _, r[o++] += S, r[o++] += S, o += 2, s = o;
          break;
        case v:
          l[0] = r[o++], l[1] = r[o++], Dt(l, l, e), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], Dt(l, l, e), r[s++] = l[0], r[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var b = Qb[u];
        b[0] = r[o++], b[1] = r[o++], Dt(b, b, e), r[s++] = b[0], r[s++] = b[1];
      }
    }
    t.increaseVersion();
  }
}
var $u = Math.sqrt, uo = Math.sin, lo = Math.cos, Ri = Math.PI;
function Vv(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function bf(t, e) {
  return (t[0] * e[0] + t[1] * e[1]) / (Vv(t) * Vv(e));
}
function Fv(t, e) {
  return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(bf(t, e));
}
function zv(t, e, r, n, i, a, o, s, u, l, f) {
  var h = u * (Ri / 180), c = lo(h) * (t - r) / 2 + uo(h) * (e - n) / 2, v = -1 * uo(h) * (t - r) / 2 + lo(h) * (e - n) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= $u(d), s *= $u(d));
  var g = (i === a ? -1 : 1) * $u((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, m = g * o * v / s, p = g * -s * c / o, y = (t + r) / 2 + lo(h) * m - uo(h) * p, _ = (e + n) / 2 + uo(h) * m + lo(h) * p, S = Fv([1, 0], [(c - m) / o, (v - p) / s]), b = [(c - m) / o, (v - p) / s], T = [(-1 * c - m) / o, (-1 * v - p) / s], w = Fv(b, T);
  if (bf(b, T) <= -1 && (w = Ri), bf(b, T) >= 1 && (w = 0), w < 0) {
    var E = Math.round(w / Ri * 1e6) / 1e6;
    w = Ri * 2 + E % 2 * Ri;
  }
  f.addData(l, y, _, o, s, S, w, h, a);
}
var eT = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, tT = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function rT(t) {
  var e = new xn();
  if (!t)
    return e;
  var r = 0, n = 0, i = r, a = n, o, s = xn.CMD, u = t.match(eT);
  if (!u)
    return e;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(tT) || [], d = v.length, g = 0; g < d; g++)
      v[g] = parseFloat(v[g]);
    for (var m = 0; m < d; ) {
      var p = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, T = void 0, w = void 0, E = r, D = n, C = void 0, M = void 0;
      switch (h) {
        case "l":
          r += v[m++], n += v[m++], c = s.L, e.addData(c, r, n);
          break;
        case "L":
          r = v[m++], n = v[m++], c = s.L, e.addData(c, r, n);
          break;
        case "m":
          r += v[m++], n += v[m++], c = s.M, e.addData(c, r, n), i = r, a = n, h = "l";
          break;
        case "M":
          r = v[m++], n = v[m++], c = s.M, e.addData(c, r, n), i = r, a = n, h = "L";
          break;
        case "h":
          r += v[m++], c = s.L, e.addData(c, r, n);
          break;
        case "H":
          r = v[m++], c = s.L, e.addData(c, r, n);
          break;
        case "v":
          n += v[m++], c = s.L, e.addData(c, r, n);
          break;
        case "V":
          n = v[m++], c = s.L, e.addData(c, r, n);
          break;
        case "C":
          c = s.C, e.addData(c, v[m++], v[m++], v[m++], v[m++], v[m++], v[m++]), r = v[m - 2], n = v[m - 1];
          break;
        case "c":
          c = s.C, e.addData(c, v[m++] + r, v[m++] + n, v[m++] + r, v[m++] + n, v[m++] + r, v[m++] + n), r += v[m - 2], n += v[m - 1];
          break;
        case "S":
          p = r, y = n, C = e.len(), M = e.data, o === s.C && (p += r - M[C - 4], y += n - M[C - 3]), c = s.C, E = v[m++], D = v[m++], r = v[m++], n = v[m++], e.addData(c, p, y, E, D, r, n);
          break;
        case "s":
          p = r, y = n, C = e.len(), M = e.data, o === s.C && (p += r - M[C - 4], y += n - M[C - 3]), c = s.C, E = r + v[m++], D = n + v[m++], r += v[m++], n += v[m++], e.addData(c, p, y, E, D, r, n);
          break;
        case "Q":
          E = v[m++], D = v[m++], r = v[m++], n = v[m++], c = s.Q, e.addData(c, E, D, r, n);
          break;
        case "q":
          E = v[m++] + r, D = v[m++] + n, r += v[m++], n += v[m++], c = s.Q, e.addData(c, E, D, r, n);
          break;
        case "T":
          p = r, y = n, C = e.len(), M = e.data, o === s.Q && (p += r - M[C - 4], y += n - M[C - 3]), r = v[m++], n = v[m++], c = s.Q, e.addData(c, p, y, r, n);
          break;
        case "t":
          p = r, y = n, C = e.len(), M = e.data, o === s.Q && (p += r - M[C - 4], y += n - M[C - 3]), r += v[m++], n += v[m++], c = s.Q, e.addData(c, p, y, r, n);
          break;
        case "A":
          _ = v[m++], S = v[m++], b = v[m++], T = v[m++], w = v[m++], E = r, D = n, r = v[m++], n = v[m++], c = s.A, zv(E, D, r, n, T, w, _, S, b, c, e);
          break;
        case "a":
          _ = v[m++], S = v[m++], b = v[m++], T = v[m++], w = v[m++], E = r, D = n, r += v[m++], n += v[m++], c = s.A, zv(E, D, r, n, T, w, _, S, b, c, e);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, e.addData(c), r = i, n = a), o = c;
  }
  return e.toStatic(), e;
}
var Im = (function(t) {
  z(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.applyTransform = function(r) {
  }, e;
})(me);
function Om(t) {
  return t.setData != null;
}
function Pm(t, e) {
  var r = rT(t), n = k({}, e);
  return n.buildPath = function(i) {
    var a = Om(i);
    if (a && i.canSave()) {
      i.appendPath(r);
      var o = i.getContext();
      o && i.rebuildPath(o, 1);
    } else {
      var o = a ? i.getContext() : i;
      o && r.rebuildPath(o, 1);
    }
  }, n.applyTransform = function(i) {
    jb(r, i), this.dirtyShape();
  }, n;
}
function nT(t, e) {
  return new Im(Pm(t, e));
}
function iT(t, e) {
  var r = Pm(t, e), n = (function(i) {
    z(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s;
    }
    return a;
  })(Im);
  return n;
}
function aT(t, e) {
  for (var r = [], n = t.length, i = 0; i < n; i++) {
    var a = t[i];
    r.push(a.getUpdatedPathProxy(!0));
  }
  var o = new me(e);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (Om(s)) {
      s.appendPath(r);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var ke = (function(t) {
  z(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isGroup = !0, n._children = [], n.attr(r), n;
  }
  return e.prototype.childrenRef = function() {
    return this._children;
  }, e.prototype.children = function() {
    return this._children.slice();
  }, e.prototype.childAt = function(r) {
    return this._children[r];
  }, e.prototype.childOfName = function(r) {
    for (var n = this._children, i = 0; i < n.length; i++)
      if (n[i].name === r)
        return n[i];
  }, e.prototype.childCount = function() {
    return this._children.length;
  }, e.prototype.add = function(r) {
    if (r && (r !== this && r.parent !== this && (this._children.push(r), this._doAdd(r)), process.env.NODE_ENV !== "production" && r.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, e.prototype.addBefore = function(r, n) {
    if (r && r !== this && r.parent !== this && n && n.parent === this) {
      var i = this._children, a = i.indexOf(n);
      a >= 0 && (i.splice(a, 0, r), this._doAdd(r));
    }
    return this;
  }, e.prototype.replace = function(r, n) {
    var i = le(this._children, r);
    return i >= 0 && this.replaceAt(n, i), this;
  }, e.prototype.replaceAt = function(r, n) {
    var i = this._children, a = i[n];
    if (r && r !== this && r.parent !== this && r !== a) {
      i[n] = r, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(r);
    }
    return this;
  }, e.prototype._doAdd = function(r) {
    r.parent && r.parent.remove(r), r.parent = this;
    var n = this.__zr;
    n && n !== r.__zr && r.addSelfToZr(n), n && n.refresh();
  }, e.prototype.remove = function(r) {
    var n = this.__zr, i = this._children, a = le(i, r);
    return a < 0 ? this : (i.splice(a, 1), r.parent = null, n && r.removeSelfFromZr(n), n && n.refresh(), this);
  }, e.prototype.removeAll = function() {
    for (var r = this._children, n = this.__zr, i = 0; i < r.length; i++) {
      var a = r[i];
      n && a.removeSelfFromZr(n), a.parent = null;
    }
    return r.length = 0, this;
  }, e.prototype.eachChild = function(r, n) {
    for (var i = this._children, a = 0; a < i.length; a++) {
      var o = i[a];
      r.call(n, o, a);
    }
    return this;
  }, e.prototype.traverse = function(r, n) {
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i], o = r.call(n, a);
      a.isGroup && !o && a.traverse(r, n);
    }
    return this;
  }, e.prototype.addSelfToZr = function(r) {
    t.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.addSelfToZr(r);
    }
  }, e.prototype.removeSelfFromZr = function(r) {
    t.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.removeSelfFromZr(r);
    }
  }, e.prototype.getBoundingRect = function(r) {
    for (var n = new j(0, 0, 0, 0), i = r || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var u = i[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (j.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || n;
  }, e;
})(js);
ke.prototype.type = "group";
var oT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return t;
})(), au = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new oT();
  }, e.prototype.buildPath = function(r, n) {
    r.moveTo(n.cx + n.r, n.cy), r.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, e;
})(me);
au.prototype.type = "circle";
var sT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return t;
})(), Mh = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new sT();
  }, e.prototype.buildPath = function(r, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, u = n.ry, l = s * i, f = u * i;
    r.moveTo(a - s, o), r.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), r.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), r.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), r.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), r.closePath();
  }, e;
})(me);
Mh.prototype.type = "ellipse";
var Nm = Math.PI, qu = Nm * 2, rn = Math.sin, Vn = Math.cos, uT = Math.acos, Be = Math.atan2, Hv = Math.abs, fa = Math.sqrt, ea = Math.max, Ft = Math.min, At = 1e-4;
function lT(t, e, r, n, i, a, o, s) {
  var u = r - t, l = n - e, f = o - i, h = s - a, c = h * u - f * l;
  if (!(c * c < At))
    return c = (f * (e - a) - h * (t - i)) / c, [t + c * u, e + c * l];
}
function fo(t, e, r, n, i, a, o) {
  var s = t - r, u = e - n, l = (o ? a : -a) / fa(s * s + u * u), f = l * u, h = -l * s, c = t + f, v = e + h, d = r + f, g = n + h, m = (c + d) / 2, p = (v + g) / 2, y = d - c, _ = g - v, S = y * y + _ * _, b = i - a, T = c * g - d * v, w = (_ < 0 ? -1 : 1) * fa(ea(0, b * b * S - T * T)), E = (T * _ - y * w) / S, D = (-T * y - _ * w) / S, C = (T * _ + y * w) / S, M = (-T * y + _ * w) / S, L = E - m, A = D - p, I = C - m, P = M - p;
  return L * L + A * A > I * I + P * P && (E = C, D = M), {
    cx: E,
    cy: D,
    x0: -f,
    y0: -h,
    x1: E * (i / b - 1),
    y1: D * (i / b - 1)
  };
}
function fT(t) {
  var e;
  if (V(t)) {
    var r = t.length;
    if (!r)
      return t;
    r === 1 ? e = [t[0], t[0], 0, 0] : r === 2 ? e = [t[0], t[0], t[1], t[1]] : r === 3 ? e = t.concat(t[2]) : e = t;
  } else
    e = [t, t, t, t];
  return e;
}
function hT(t, e) {
  var r, n = ea(e.r, 0), i = ea(e.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var u = e.startAngle, l = e.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = e.cx, h = e.cy, c = !!e.clockwise, v = Hv(l - u), d = v > qu && v % qu;
      if (d > At && (v = d), !(n > At))
        t.moveTo(f, h);
      else if (v > qu - At)
        t.moveTo(f + n * Vn(u), h + n * rn(u)), t.arc(f, h, n, u, l, !c), i > At && (t.moveTo(f + i * Vn(l), h + i * rn(l)), t.arc(f, h, i, l, u, c));
      else {
        var g = void 0, m = void 0, p = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, T = void 0, w = void 0, E = void 0, D = void 0, C = void 0, M = void 0, L = void 0, A = void 0, I = void 0, P = n * Vn(u), O = n * rn(u), B = i * Vn(l), G = i * rn(l), U = v > At;
        if (U) {
          var J = e.cornerRadius;
          J && (r = fT(J), g = r[0], m = r[1], p = r[2], y = r[3]);
          var $ = Hv(n - i) / 2;
          if (_ = Ft($, p), S = Ft($, y), b = Ft($, g), T = Ft($, m), D = w = ea(_, S), C = E = ea(b, T), (w > At || E > At) && (M = n * Vn(l), L = n * rn(l), A = i * Vn(u), I = i * rn(u), v < Nm)) {
            var te = lT(P, O, A, I, M, L, B, G);
            if (te) {
              var X = P - te[0], F = O - te[1], ne = M - te[0], ae = L - te[1], Ue = 1 / rn(uT((X * ne + F * ae) / (fa(X * X + F * F) * fa(ne * ne + ae * ae))) / 2), Mt = fa(te[0] * te[0] + te[1] * te[1]);
              D = Ft(w, (n - Mt) / (Ue + 1)), C = Ft(E, (i - Mt) / (Ue - 1));
            }
          }
        }
        if (!U)
          t.moveTo(f + P, h + O);
        else if (D > At) {
          var Te = Ft(p, D), Me = Ft(y, D), re = fo(A, I, P, O, n, Te, c), oe = fo(M, L, B, G, n, Me, c);
          t.moveTo(f + re.cx + re.x0, h + re.cy + re.y0), D < w && Te === Me ? t.arc(f + re.cx, h + re.cy, D, Be(re.y0, re.x0), Be(oe.y0, oe.x0), !c) : (Te > 0 && t.arc(f + re.cx, h + re.cy, Te, Be(re.y0, re.x0), Be(re.y1, re.x1), !c), t.arc(f, h, n, Be(re.cy + re.y1, re.cx + re.x1), Be(oe.cy + oe.y1, oe.cx + oe.x1), !c), Me > 0 && t.arc(f + oe.cx, h + oe.cy, Me, Be(oe.y1, oe.x1), Be(oe.y0, oe.x0), !c));
        } else
          t.moveTo(f + P, h + O), t.arc(f, h, n, u, l, !c);
        if (!(i > At) || !U)
          t.lineTo(f + B, h + G);
        else if (C > At) {
          var Te = Ft(g, C), Me = Ft(m, C), re = fo(B, G, M, L, i, -Me, c), oe = fo(P, O, A, I, i, -Te, c);
          t.lineTo(f + re.cx + re.x0, h + re.cy + re.y0), C < E && Te === Me ? t.arc(f + re.cx, h + re.cy, C, Be(re.y0, re.x0), Be(oe.y0, oe.x0), !c) : (Me > 0 && t.arc(f + re.cx, h + re.cy, Me, Be(re.y0, re.x0), Be(re.y1, re.x1), !c), t.arc(f, h, i, Be(re.cy + re.y1, re.cx + re.x1), Be(oe.cy + oe.y1, oe.cx + oe.x1), c), Te > 0 && t.arc(f + oe.cx, h + oe.cy, Te, Be(oe.y1, oe.x1), Be(oe.y0, oe.x0), !c));
        } else
          t.lineTo(f + B, h + G), t.arc(f, h, i, l, u, c);
      }
      t.closePath();
    }
  }
}
var cT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return t;
})(), ou = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new cT();
  }, e.prototype.buildPath = function(r, n) {
    hT(r, n);
  }, e.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, e;
})(me);
ou.prototype.type = "sector";
var vT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return t;
})(), Ah = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new vT();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    r.moveTo(i + n.r, a), r.arc(i, a, n.r, 0, o, !1), r.moveTo(i + n.r0, a), r.arc(i, a, n.r0, 0, o, !0);
  }, e;
})(me);
Ah.prototype.type = "ring";
function dT(t, e, r, n) {
  var i = [], a = [], o = [], s = [], u, l, f, h;
  if (n) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = t.length; c < v; c++)
      Qn(f, f, t[c]), Jn(h, h, t[c]);
    Qn(f, f, n[0]), Jn(h, h, n[1]);
  }
  for (var c = 0, v = t.length; c < v; c++) {
    var d = t[c];
    if (r)
      u = t[c ? c - 1 : v - 1], l = t[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      i.push(D1(t[c]));
      continue;
    } else
      u = t[c - 1], l = t[c + 1];
    E1(a, l, u), bu(a, a, e);
    var g = $l(d, u), m = $l(d, l), p = g + m;
    p !== 0 && (g /= p, m /= p), bu(o, a, -g), bu(s, a, m);
    var y = Ic([], d, o), _ = Ic([], d, s);
    n && (Jn(y, y, f), Qn(y, y, h), Jn(_, _, f), Qn(_, _, h)), i.push(y), i.push(_);
  }
  return r && i.push(i.shift()), i;
}
function Rm(t, e, r) {
  var n = e.smooth, i = e.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = dT(i, n, r, e.smoothConstraint);
      t.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (r ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = i[(s + 1) % o];
        t.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      t.moveTo(i[0][0], i[0][1]);
      for (var s = 1, h = i.length; s < h; s++)
        t.lineTo(i[s][0], i[s][1]);
    }
    r && t.closePath();
  }
}
var pT = /* @__PURE__ */ (function() {
  function t() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return t;
})(), Lh = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new pT();
  }, e.prototype.buildPath = function(r, n) {
    Rm(r, n, !0);
  }, e;
})(me);
Lh.prototype.type = "polygon";
var gT = /* @__PURE__ */ (function() {
  function t() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return t;
})(), Ih = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new gT();
  }, e.prototype.buildPath = function(r, n) {
    Rm(r, n, !1);
  }, e;
})(me);
Ih.prototype.type = "polyline";
var mT = {}, yT = /* @__PURE__ */ (function() {
  function t() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return t;
})(), Rr = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new yT();
  }, e.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = rm(mT, n, this.style);
      i = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var l = n.percent;
    l !== 0 && (r.moveTo(i, a), l < 1 && (o = i * (1 - l) + o * l, s = a * (1 - l) + s * l), r.lineTo(o, s));
  }, e.prototype.pointAt = function(r) {
    var n = this.shape;
    return [
      n.x1 * (1 - r) + n.x2 * r,
      n.y1 * (1 - r) + n.y2 * r
    ];
  }, e;
})(me);
Rr.prototype.type = "line";
var Ke = [], _T = /* @__PURE__ */ (function() {
  function t() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return t;
})();
function Gv(t, e, r) {
  var n = t.cpx2, i = t.cpy2;
  return n != null || i != null ? [
    (r ? Wc : Re)(t.x1, t.cpx1, t.cpx2, t.x2, e),
    (r ? Wc : Re)(t.y1, t.cpy1, t.cpy2, t.y2, e)
  ] : [
    (r ? Yc : Je)(t.x1, t.cpx1, t.x2, e),
    (r ? Yc : Je)(t.y1, t.cpy1, t.y2, e)
  ];
}
var Oh = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new _T();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, u = n.cpx1, l = n.cpy1, f = n.cpx2, h = n.cpy2, c = n.percent;
    c !== 0 && (r.moveTo(i, a), f == null || h == null ? (c < 1 && (ss(i, u, o, c, Ke), u = Ke[1], o = Ke[2], ss(a, l, s, c, Ke), l = Ke[1], s = Ke[2]), r.quadraticCurveTo(u, l, o, s)) : (c < 1 && (os(i, u, f, o, c, Ke), u = Ke[1], f = Ke[2], o = Ke[3], os(a, l, h, s, c, Ke), l = Ke[1], h = Ke[2], s = Ke[3]), r.bezierCurveTo(u, l, f, h, o, s)));
  }, e.prototype.pointAt = function(r) {
    return Gv(this.shape, r, !1);
  }, e.prototype.tangentAt = function(r) {
    var n = Gv(this.shape, r, !0);
    return L1(n, n);
  }, e;
})(me);
Oh.prototype.type = "bezier-curve";
var ST = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return t;
})(), su = (function(t) {
  z(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new ST();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, u = n.endAngle, l = n.clockwise, f = Math.cos(s), h = Math.sin(s);
    r.moveTo(f * o + i, h * o + a), r.arc(i, a, o, s, u, !l);
  }, e;
})(me);
su.prototype.type = "arc";
var bT = (function(t) {
  z(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.type = "compound", r;
  }
  return e.prototype._updatePathDirty = function() {
    for (var r = this.shape.paths, n = this.shapeChanged(), i = 0; i < r.length; i++)
      n = n || r[i].shapeChanged();
    n && this.dirtyShape();
  }, e.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var r = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < r.length; i++)
      r[i].path || r[i].createPathProxy(), r[i].path.setScale(n[0], n[1], r[i].segmentIgnoreThreshold);
  }, e.prototype.buildPath = function(r, n) {
    for (var i = n.paths || [], a = 0; a < i.length; a++)
      i[a].buildPath(r, i[a].shape, !0);
  }, e.prototype.afterBrush = function() {
    for (var r = this.shape.paths || [], n = 0; n < r.length; n++)
      r[n].pathUpdated();
  }, e.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), me.prototype.getBoundingRect.call(this);
  }, e;
})(me), km = (function() {
  function t(e) {
    this.colorStops = e || [];
  }
  return t.prototype.addColorStop = function(e, r) {
    this.colorStops.push({
      offset: e,
      color: r
    });
  }, t;
})(), Bm = (function(t) {
  z(e, t);
  function e(r, n, i, a, o, s) {
    var u = t.call(this, o) || this;
    return u.x = r ?? 0, u.y = n ?? 0, u.x2 = i ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return e;
})(km), TT = (function(t) {
  z(e, t);
  function e(r, n, i, a, o) {
    var s = t.call(this, a) || this;
    return s.x = r ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return e;
})(km), Ku = Math.min, wT = Math.max, ho = Math.abs, nn = [0, 0], an = [0, 0], Oe = Bg(), co = Oe.minTv, vo = Oe.maxTv, Vm = (function() {
  function t(e, r) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new ge();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new ge();
    e && this.fromBoundingRect(e, r);
  }
  return t.prototype.fromBoundingRect = function(e, r) {
    var n = this._corners, i = this._axes, a = e.x, o = e.y, s = a + e.width, u = o + e.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), r)
      for (var l = 0; l < 4; l++)
        n[l].transform(r);
    ge.sub(i[0], n[1], n[0]), ge.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = i[l].dot(n[0]);
  }, t.prototype.intersect = function(e, r, n) {
    var i = !0, a = !r;
    return r && ge.set(r, 0, 0), Oe.reset(n, !a), !this._intersectCheckOneSide(this, e, a, 1) && (i = !1, a) || !this._intersectCheckOneSide(e, this, a, -1) && (i = !1, a) || !a && !Oe.negativeSize && ge.copy(r, i ? Oe.useDir ? Oe.dirMinTv : co : vo), i;
  }, t.prototype._intersectCheckOneSide = function(e, r, n, i) {
    for (var a = !0, o = 0; o < 2; o++) {
      var s = e._axes[o];
      if (e._getProjMinMaxOnAxis(o, e._corners, nn), e._getProjMinMaxOnAxis(o, r._corners, an), Oe.negativeSize || nn[1] < an[0] || nn[0] > an[1]) {
        if (a = !1, Oe.negativeSize || n)
          return a;
        var u = ho(an[0] - nn[1]), l = ho(nn[0] - an[1]);
        Ku(u, l) > vo.len() && (u < l ? ge.scale(vo, s, -u * i) : ge.scale(vo, s, l * i));
      } else if (!n) {
        var u = ho(an[0] - nn[1]), l = ho(nn[0] - an[1]);
        (Oe.useDir || Ku(u, l) < co.len()) && ((u < l || !Oe.bidirectional) && (ge.scale(co, s, u * i), Oe.useDir && Oe.calcDirMTV()), (u >= l || !Oe.bidirectional) && (ge.scale(co, s, -l * i), Oe.useDir && Oe.calcDirMTV()));
      }
    }
    return a;
  }, t.prototype._getProjMinMaxOnAxis = function(e, r, n) {
    for (var i = this._axes[e], a = this._origin, o = r[0].dot(i) + a[e], s = o, u = o, l = 1; l < r.length; l++) {
      var f = r[l].dot(i) + a[e];
      s = Ku(f, s), u = wT(f, u);
    }
    n[0] = s + Oe.touchThreshold, n[1] = u - Oe.touchThreshold, Oe.negativeSize = n[1] < n[0];
  }, t;
})(), Fm = 0, xT = 1, CT = 2, DT = 1, Uo = 0, ET = [], MT = (function(t) {
  z(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.notClear = !0, r.incremental = xT, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r;
  }
  return e.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, e.prototype.useStyle = function() {
    this.style = {};
  }, e.prototype._useHoverStyle = function() {
    this.__hoverStyle = null;
  }, e.prototype.getCursor = function() {
    return this._cursor;
  }, e.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, e.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, e.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, e.prototype.addDisplayable = function(r, n) {
    n ? this._temporaryDisplayables.push(r) : this._displayables.push(r), this.markRedraw();
  }, e.prototype.addDisplayables = function(r, n) {
    n = n || !1;
    for (var i = 0; i < r.length; i++)
      this.addDisplayable(r[i], n);
  }, e.prototype.getDisplayables = function() {
    return this._displayables;
  }, e.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, e.prototype.eachPendingDisplayable = function(r) {
    for (var n = this._cursor; n < this._displayables.length; n++)
      r && r(this._displayables[n]);
    for (var n = 0; n < this._temporaryDisplayables.length; n++)
      r && r(this._temporaryDisplayables[n]);
  }, e.prototype.update = function() {
    this.updateTransform();
    for (var r = this._cursor; r < this._displayables.length; r++) {
      var n = this._displayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
    for (var r = 0; r < this._temporaryDisplayables.length; r++) {
      var n = this._temporaryDisplayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
  }, e.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var r = new j(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(ET)), r.union(a);
      }
      this._rect = r;
    }
    return this._rect;
  }, e.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    if (a.contain(i[0], i[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(r, n))
          return !0;
      }
    return !1;
  }, e;
})(Va), AT = ye();
function LT(t, e, r, n, i) {
  var a;
  if (e && e.ecModel) {
    var o = e.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = e && e.isAnimationEnabled(), u = t === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    n ? (l = Y(n.duration, 200), f = Y(n.easing, "cubicOut"), h = 0) : (l = e.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = e.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = e.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), Q(h) && (h = h(r, i)), Q(l) && (l = l(r));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function Ph(t, e, r, n, i, a, o) {
  var s = !1, u;
  Q(i) ? (o = a, a = i, i = null) : W(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
  var l = t === "leave";
  l || e.stopAnimation("leave");
  var f = LT(t, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(e, i) : null);
  if (f && f.duration > 0) {
    var h = f.duration, c = f.delay, v = f.easing, d = {
      duration: h,
      delay: c || 0,
      easing: v,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: t,
      during: o
    };
    s ? e.animateFrom(r, d) : e.animateTo(r, d);
  } else
    e.stopAnimation(), !s && e.attr(r), o && o(1), a && a();
}
function kr(t, e, r, n, i, a) {
  Ph("update", t, e, r, n, i, a);
}
function Ua(t, e, r, n, i, a) {
  Ph("enter", t, e, r, n, i, a);
}
function ha(t) {
  if (!t.__zr)
    return !0;
  for (var e = 0; e < t.animators.length; e++) {
    var r = t.animators[e];
    if (r.scope === "leave")
      return !0;
  }
  return !1;
}
function ys(t, e, r, n, i, a) {
  ha(t) || Ph("leave", t, e, r, n, i, a);
}
function Uv(t, e, r, n) {
  t.removeTextContent(), t.removeTextGuideLine(), ys(t, {
    style: {
      opacity: 0
    }
  }, e, r, n);
}
function IT(t, e, r) {
  function n() {
    t.parent && t.parent.remove(t);
  }
  t.isGroup ? t.traverse(function(i) {
    i.isGroup || Uv(i, e, r, n);
  }) : Uv(t, e, r, n);
}
function OT(t) {
  AT(t).oldStyle = t.style;
}
var Tf = {}, vn = ["x", "y"], ba = ["width", "height"], zm = 0, Hm = 1, Nh = 2;
function PT(t) {
  return me.extend(t);
}
var NT = iT;
function RT(t, e) {
  return NT(t, e);
}
function Pt(t, e) {
  Tf[t] = e;
}
function kT(t) {
  if (Tf.hasOwnProperty(t))
    return Tf[t];
}
function Rh(t, e, r, n) {
  var i = nT(t, e);
  return r && (n === "center" && (r = Um(r, i.getBoundingRect())), Wm(i, r)), i;
}
function Gm(t, e, r) {
  var n = new zr({
    style: {
      image: t,
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height
    },
    onload: function(i) {
      if (r === "center") {
        var a = {
          width: i.width,
          height: i.height
        };
        n.setStyle(Um(e, a));
      }
    }
  });
  return n;
}
function Um(t, e) {
  var r = e.width / e.height, n = t.height * r, i;
  n <= t.width ? i = t.height : (n = t.width, i = n / r);
  var a = t.x + t.width / 2, o = t.y + t.height / 2;
  return {
    x: a - n / 2,
    y: o - i / 2,
    width: n,
    height: i
  };
}
var BT = aT;
function Wm(t, e) {
  if (t.applyTransform) {
    var r = t.getBoundingRect(), n = r.calculateTransform(e);
    t.applyTransform(n);
  }
}
function Ta(t, e) {
  return rm(t, t, {
    lineWidth: e
  }), t;
}
function VT(t, e) {
  return nm(t, t, e), t;
}
var FT = gn;
function zT(t, e) {
  for (var r = Na([]); t && t !== e; )
    oa(r, t.getLocalTransform(), r), t = t.parent;
  return r;
}
function kh(t, e, r) {
  return e && !nt(e) && (e = ka.getLocalTransform(e)), r && (e = Ra([], e)), Dt([], t, e);
}
function HT(t, e, r) {
  var n = e[4] === 0 || e[5] === 0 || e[0] === 0 ? 1 : Ne(2 * e[4] / e[0]), i = e[4] === 0 || e[5] === 0 || e[2] === 0 ? 1 : Ne(2 * e[4] / e[2]), a = [t === "left" ? -n : t === "right" ? n : 0, t === "top" ? -i : t === "bottom" ? i : 0];
  return a = kh(a, e, r), Ne(a[0]) > Ne(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Wv(t) {
  return !t.isGroup;
}
function GT(t) {
  return t.shape != null;
}
function Ym(t, e, r) {
  if (!t || !e)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(u) {
      Wv(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return GT(o) && (s.shape = ie(o.shape)), s;
  }
  var a = n(t);
  e.traverse(function(o) {
    if (Wv(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), kr(o, u, r, ve(o).dataIndex);
      }
    }
  });
}
function UT(t, e) {
  return q(t, function(r) {
    var n = r[0];
    n = de(n, e.x), n = ft(n, e.x + e.width);
    var i = r[1];
    return i = de(i, e.y), i = ft(i, e.y + e.height), [n, i];
  });
}
function WT(t, e) {
  var r = de(t.x, e.x), n = ft(t.x + t.width, e.x + e.width), i = de(t.y, e.y), a = ft(t.y + t.height, e.y + e.height);
  if (n >= r && a >= i)
    return {
      x: r,
      y: i,
      width: n - r,
      height: a - i
    };
}
function Bh(t, e, r) {
  var n = k({
    rectHover: !0
  }, e), i = n.style = {
    strokeNoScale: !0
  };
  if (r = r || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, t)
    return t.indexOf("image://") === 0 ? (i.image = t.slice(8), pe(i, r), new zr(n)) : Rh(t.replace("path://", ""), n, r, "center");
}
function YT(t, e, r, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (Xm(t, e, r, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function Xm(t, e, r, n, i, a, o, s) {
  var u = r - t, l = n - e, f = o - i, h = s - a, c = Qu(f, h, u, l);
  if (XT(c))
    return !1;
  var v = t - i, d = e - a, g = Qu(v, d, u, l) / c;
  if (g < 0 || g > 1)
    return !1;
  var m = Qu(v, d, f, h) / c;
  return !(m < 0 || m > 1);
}
function Qu(t, e, r, n) {
  return t * n - r * e;
}
function XT(t) {
  return t <= 1e-6 && t >= -1e-6;
}
function _s(t, e, r, n, i) {
  return e == null || (we(e) ? _e[0] = _e[1] = _e[2] = _e[3] = e : (process.env.NODE_ENV !== "production" && N(e.length === 4), _e[0] = e[0], _e[1] = e[1], _e[2] = e[2], _e[3] = e[3]), n && (_e[0] = de(0, _e[0]), _e[1] = de(0, _e[1]), _e[2] = de(0, _e[2]), _e[3] = de(0, _e[3])), r && (_e[0] = -_e[0], _e[1] = -_e[1], _e[2] = -_e[2], _e[3] = -_e[3]), Yv(t, _e, "x", "width", 3, 1, i && i[0] || 0), Yv(t, _e, "y", "height", 0, 2, i && i[1] || 0)), t;
}
var _e = [0, 0, 0, 0];
function Yv(t, e, r, n, i, a, o) {
  var s = e[a] + e[i], u = t[n];
  t[n] += s, o = de(0, ft(o, u)), t[n] < o ? (t[n] = o, t[r] += e[i] >= 0 ? -e[i] : e[a] >= 0 ? u + e[a] : Ne(s) > 1e-8 ? (u - o) * e[i] / s : 0) : t[r] -= e[i];
}
function uu(t) {
  var e = t.itemTooltipOption, r = t.componentModel, n = t.itemName, i = H(e) ? {
    formatter: e
  } : e, a = r.mainType, o = r.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = t.formatterParamsExtra;
  u && x(be(u), function(f) {
    lt(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = ve(t.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: n,
    option: pe({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function wf(t, e) {
  var r;
  t.isGroup && (r = e(t)), r || t.traverse(e);
}
function Vh(t, e) {
  if (t)
    if (V(t))
      for (var r = 0; r < t.length; r++)
        wf(t[r], e);
    else
      wf(t, e);
}
function Fh(t) {
  return !t || Ne(t[1]) < po && Ne(t[2]) < po || Ne(t[0]) < po && Ne(t[3]) < po;
}
var po = 1e-5;
function wa(t, e) {
  return t ? j.copy(t, e) : e.clone();
}
function zh(t, e) {
  return e ? vh(t || Wt(), e) : void 0;
}
function Zm(t) {
  return {
    z: t.get("z") || 0,
    zlevel: t.get("zlevel") || 0
  };
}
function ZT(t) {
  var e = -1 / 0, r = 1 / 0;
  wf(t, function(a) {
    n(a), n(a.getTextContent()), n(a.getTextGuideLine());
  });
  function n(a) {
    if (!(!a || a.isGroup)) {
      var o = a.currentStates;
      if (o.length)
        for (var s = 0; s < o.length; s++)
          i(a.states[o[s]]);
      i(a);
    }
  }
  function i(a) {
    if (a) {
      var o = a.z2;
      o > e && (e = o), o < r && (r = o);
    }
  }
  return r > e && (r = e = 0), {
    min: r,
    max: e
  };
}
function $m(t, e, r) {
  qm(t, e, r, -1 / 0);
}
function qm(t, e, r, n) {
  if (t.ignoreModelZ)
    return n;
  var i = t.getTextContent(), a = t.getTextGuideLine(), o = t.isGroup;
  if (o)
    for (var s = t.childrenRef(), u = 0; u < s.length; u++)
      n = de(qm(s[u], e, r, n), n);
  else
    t.z = e, t.zlevel = r, n = de(t.z2 || 0, n);
  if (i && (i.z = e, i.zlevel = r, isFinite(n) && (i.z2 = n + 2)), a) {
    var l = t.textGuideLineConfig;
    a.z = e, a.zlevel = r, isFinite(n) && (a.z2 = n + (l && l.showAbove ? 1 : -1));
  }
  return n;
}
function $T(t) {
  return t.animation = {
    duration: 0
  }, t;
}
function qT(t, e) {
  return e ? vh(ta.transform, e) : Na(ta.transform), ta.decomposeTransform(), ns(t, ta), t;
}
var ta = new ka();
ta.transform = Wt();
function KT(t) {
  var e = t.getZr().painter;
  return e.getType() === "canvas" ? e : null;
}
Pt("circle", au);
Pt("ellipse", Mh);
Pt("sector", ou);
Pt("ring", Ah);
Pt("polygon", Lh);
Pt("polyline", Ih);
Pt("rect", Le);
Pt("line", Rr);
Pt("bezierCurve", Oh);
Pt("arc", su);
const QT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: su,
  BezierCurve: Oh,
  BoundingRect: j,
  Circle: au,
  CompoundPath: bT,
  Ellipse: Mh,
  Group: ke,
  HOVER_LAYER_FOR_INCREMENTAL: Nh,
  HOVER_LAYER_FROM_THRESHOLD: Hm,
  HOVER_LAYER_NO: zm,
  Image: zr,
  IncrementalDisplayable: MT,
  Line: Rr,
  LinearGradient: Bm,
  OrientedBoundingRect: Vm,
  Path: me,
  Point: ge,
  Polygon: Lh,
  Polyline: Ih,
  RadialGradient: TT,
  Rect: Le,
  Ring: Ah,
  Sector: ou,
  Text: it,
  WH: ba,
  XY: vn,
  applyTransform: kh,
  calcZ2Range: ZT,
  clipPointsByRect: UT,
  clipRectByRect: WT,
  createIcon: Bh,
  decomposeTransform: qT,
  ensureCopyRect: wa,
  ensureCopyTransform: zh,
  expandOrShrinkRect: _s,
  extendPath: RT,
  extendShape: PT,
  getCurrentCanvasPainter: KT,
  getShapeClass: kT,
  getTransform: zT,
  groupTransition: Ym,
  initProps: Ua,
  isBoundingRectAxisAligned: Fh,
  isElementRemoved: ha,
  lineLineIntersect: Xm,
  linePolygonIntersect: YT,
  makeImage: Gm,
  makePath: Rh,
  mergePath: BT,
  payloadDisableAnimation: $T,
  registerShape: Pt,
  removeElement: ys,
  removeElementWithFadeOut: IT,
  resizePath: Wm,
  retrieveZInfo: Zm,
  setTooltipConfig: uu,
  subPixelOptimize: FT,
  subPixelOptimizeLine: Ta,
  subPixelOptimizeRect: VT,
  transformDirection: HT,
  traverseElements: Vh,
  traverseUpdateZ: $m,
  updateProps: kr
}, Symbol.toStringTag, { value: "Module" }));
var lu = {};
function JT(t, e) {
  for (var r = 0; r < Jt.length; r++) {
    var n = Jt[r], i = e[n], a = t.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = t.currentStates.slice();
  t.clearStates(!0), t.setStyle({
    text: e.normal
  }), t.useStates(o, !0);
}
function Xv(t, e, r) {
  var n = t.labelFetcher, i = t.labelDataIndex, a = t.labelDimIndex, o = e.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), r != null ? {
    interpolatedValue: r
  } : null)), s == null && (s = Q(t.defaultText) ? t.defaultText(i, t, r) : t.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < Jt.length; l++) {
    var f = Jt[l], h = e[f];
    u[f] = Y(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function Hh(t, e, r, n) {
  r = r || lu;
  for (var i = t instanceof it, a = !1, o = 0; o < Mv.length; o++) {
    var s = e[Mv[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? t : t.getTextContent();
  if (a) {
    i || (u || (u = new it(), t.setTextContent(u)), t.stateProxy && (u.stateProxy = t.stateProxy));
    var l = Xv(r, e), f = e.normal, h = !!f.getShallow("show"), c = Si(f, n && n.normal, r, !1, !i);
    c.text = l.normal, i || t.setTextConfig(Zv(f, r, !1));
    for (var o = 0; o < Jt.length; o++) {
      var v = Jt[o], s = e[v];
      if (s) {
        var d = u.ensureState(v), g = !!Y(s.getShallow("show"), h);
        if (g !== h && (d.ignore = !g), d.style = Si(s, n && n[v], r, !0, !i), d.style.text = l[v], !i) {
          var m = t.ensureState(v);
          m.textConfig = Zv(s, r, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), r.enableTextSetter && (Km(u).setLabelText = function(p) {
      var y = Xv(r, e, p);
      JT(u, y);
    });
  } else u && (u.ignore = !0);
  t.dirty();
}
function Gh(t, e) {
  e = e || "label";
  for (var r = {
    normal: t.getModel(e)
  }, n = 0; n < Jt.length; n++) {
    var i = Jt[n];
    r[i] = t.getModel([i, e]);
  }
  return r;
}
function Si(t, e, r, n, i) {
  var a = {};
  return jT(a, t, r, n, i), e && k(a, e), a;
}
function Zv(t, e, r) {
  e = e || {};
  var n = {}, i, a = t.getShallow("rotate"), o = Y(t.getShallow("distance"), r ? null : 5), s = t.getShallow("offset");
  return i = t.getShallow("position") || (r ? null : "inside"), i === "outside" && (i = e.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = t.get("color") === "inherit" ? e.inheritColor || null : "auto", e.autoOverflowArea != null && (n.autoOverflowArea = e.autoOverflowArea), e.layoutRect != null && (n.layoutRect = e.layoutRect), n;
}
function jT(t, e, r, n, i) {
  r = r || lu;
  var a = e.ecModel, o = a && a.option.textStyle, s = ew(e), u;
  if (s) {
    u = {};
    var l = "richInheritPlainLabel", f = Y(e.get(l), a ? a.get(l) : void 0);
    for (var h in s)
      if (s.hasOwnProperty(h)) {
        var c = e.getModel(["rich", h]);
        Qv(u[h] = {}, c, o, e, f, r, n, i, !1, !0);
      }
  }
  u && (t.rich = u);
  var v = e.get("overflow");
  v && (t.overflow = v);
  var d = e.get("lineOverflow");
  d && (t.lineOverflow = d);
  var g = t, m = e.get("minMargin");
  if (m != null)
    m = we(m) ? m / 2 : 0, g.margin = [m, m, m, m], g.__marginType = ti.minMargin;
  else {
    var p = e.get("textMargin");
    p != null && (g.margin = hh(p), g.__marginType = ti.textMargin);
  }
  Qv(t, e, o, null, null, r, n, i, !0, !1);
}
function ew(t) {
  for (var e; t && t !== t.ecModel; ) {
    var r = (t.option || lu).rich;
    if (r) {
      e = e || {};
      for (var n = be(r), i = 0; i < n.length; i++) {
        var a = n[i];
        e[a] = 1;
      }
    }
    t = t.parentModel;
  }
  return e;
}
var $v = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], qv = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], Kv = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function Qv(t, e, r, n, i, a, o, s, u, l) {
  r = !o && r || lu;
  var f = a && a.inheritColor, h = e.getShallow("color"), c = e.getShallow("textBorderColor"), v = Y(e.getShallow("opacity"), r.opacity);
  (h === "inherit" || h === "auto") && (process.env.NODE_ENV !== "production" && h === "auto" && Pe("color: 'auto'", "color: 'inherit'"), f ? h = f : h = null), (c === "inherit" || c === "auto") && (process.env.NODE_ENV !== "production" && c === "auto" && Pe("color: 'auto'", "color: 'inherit'"), f ? c = f : c = null), s || (h = h || r.color, c = c || r.textBorderColor), h != null && (t.fill = h), c != null && (t.stroke = c);
  var d = Y(e.getShallow("textBorderWidth"), r.textBorderWidth);
  d != null && (t.lineWidth = d);
  var g = Y(e.getShallow("textBorderType"), r.textBorderType);
  g != null && (t.lineDash = g);
  var m = Y(e.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
  m != null && (t.lineDashOffset = m), !o && v == null && !l && (v = a && a.defaultOpacity), v != null && (t.opacity = v), !o && !s && t.fill == null && a.inheritColor && (t.fill = a.inheritColor);
  for (var p = 0; p < $v.length; p++) {
    var y = $v[p], _ = i !== !1 && n ? Ar(e.getShallow(y), n.getShallow(y), r[y]) : Y(e.getShallow(y), r[y]);
    _ != null && (t[y] = _);
  }
  for (var p = 0; p < qv.length; p++) {
    var y = qv[p], _ = e.getShallow(y);
    _ != null && (t[y] = _);
  }
  if (t.verticalAlign == null) {
    var S = e.getShallow("baseline");
    S != null && (t.verticalAlign = S);
  }
  if (!u || !a.disableBox) {
    for (var p = 0; p < Kv.length; p++) {
      var y = Kv[p], _ = e.getShallow(y);
      _ != null && (t[y] = _);
    }
    var b = e.getShallow("borderType");
    b != null && (t.borderDash = b), (t.backgroundColor === "auto" || t.backgroundColor === "inherit") && f && (process.env.NODE_ENV !== "production" && t.backgroundColor === "auto" && Pe("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), t.backgroundColor = f), (t.borderColor === "auto" || t.borderColor === "inherit") && f && (process.env.NODE_ENV !== "production" && t.borderColor === "auto" && Pe("borderColor: 'auto'", "borderColor: 'inherit'"), t.borderColor = f);
  }
}
function tw(t, e) {
  var r = e && e.getModel("textStyle");
  return Gt([
    // FIXME in node-canvas fontWeight is before fontStyle
    t.fontStyle || r && r.getShallow("fontStyle") || "",
    t.fontWeight || r && r.getShallow("fontWeight") || "",
    (t.fontSize || r && r.getShallow("fontSize") || 12) + "px",
    t.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Km = ye(), ti = {
  minMargin: 1,
  textMargin: 2
}, rw = ["textStyle", "color"], Ju = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], ju = new it(), nw = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getTextColor = function(e) {
      var r = this.ecModel;
      return this.getShallow("color") || (!e && r ? r.get(rw) : null);
    }, t.prototype.getFont = function() {
      return tw({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, t.prototype.getTextRect = function(e) {
      for (var r = {
        text: e,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < Ju.length; n++)
        r[Ju[n]] = this.getShallow(Ju[n]);
      return ju.useStyle(r), ju.update(), ju.getBoundingRect();
    }, t;
  })()
), Qm = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], iw = _a(Qm), aw = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getLineStyle = function(e) {
      return iw(this, e);
    }, t;
  })()
), Jm = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], ow = _a(Jm), sw = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getItemStyle = function(e, r) {
      return ow(this, e, r);
    }, t;
  })()
), xe = (
  /** @class */
  (function() {
    function t(e, r, n) {
      this.parentModel = r, this.ecModel = n, this.option = e;
    }
    return t.prototype.init = function(e, r, n) {
    }, t.prototype.mergeOption = function(e, r) {
      ce(this.option, e, !0);
    }, t.prototype.get = function(e, r) {
      return e == null ? this.option : this._doGet(this.parsePath(e), !r && this.parentModel);
    }, t.prototype.getShallow = function(e, r) {
      var n = this.option, i = n == null ? n : n[e];
      if (i == null && !r) {
        var a = this.parentModel;
        a && (i = a.getShallow(e));
      }
      return i;
    }, t.prototype.getModel = function(e, r) {
      var n = e != null, i = n ? this.parsePath(e) : null, a = n ? this._doGet(i) : this.option;
      return r = r || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new t(a, r, this.ecModel);
    }, t.prototype.isEmpty = function() {
      return this.option == null;
    }, t.prototype.restoreData = function() {
    }, t.prototype.clone = function() {
      var e = this.constructor;
      return new e(ie(this.option));
    }, t.prototype.parsePath = function(e) {
      return typeof e == "string" ? e.split(".") : e;
    }, t.prototype.resolveParentPath = function(e) {
      return e;
    }, t.prototype.isAnimationEnabled = function() {
      if (!ee.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, t.prototype._doGet = function(e, r) {
      var n = this.option;
      if (!e)
        return n;
      for (var i = 0; i < e.length && !(e[i] && (n = n && typeof n == "object" ? n[e[i]] : null, n == null)); i++)
        ;
      return n == null && r && (n = r._doGet(this.resolveParentPath(e), r.parentModel)), n;
    }, t;
  })()
);
ch(xe);
m1(xe);
tr(xe, aw);
tr(xe, sw);
tr(xe, T1);
tr(xe, nw);
function ki(t) {
  return t == null ? 0 : t.length || 1;
}
function Jv(t) {
  return t;
}
var uw = (
  /** @class */
  (function() {
    function t(e, r, n, i, a, o) {
      this._old = e, this._new = r, this._oldKeyGetter = n || Jv, this._newKeyGetter = i || Jv, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return t.prototype.add = function(e) {
      return this._add = e, this;
    }, t.prototype.update = function(e) {
      return this._update = e, this;
    }, t.prototype.updateManyToOne = function(e) {
      return this._updateManyToOne = e, this;
    }, t.prototype.updateOneToMany = function(e) {
      return this._updateOneToMany = e, this;
    }, t.prototype.updateManyToMany = function(e) {
      return this._updateManyToMany = e, this;
    }, t.prototype.remove = function(e) {
      return this._remove = e, this;
    }, t.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, t.prototype._executeOneToOne = function() {
      var e = this._old, r = this._new, n = {}, i = new Array(e.length), a = new Array(r.length);
      this._initIndexMap(e, null, i, "_oldKeyGetter"), this._initIndexMap(r, n, a, "_newKeyGetter");
      for (var o = 0; o < e.length; o++) {
        var s = i[o], u = n[s], l = ki(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o);
        } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, t.prototype._executeMultiple = function() {
      var e = this._old, r = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(e, n, a, "_oldKeyGetter"), this._initIndexMap(r, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = n[u], f = i[u], h = ki(l), c = ki(f);
        if (h > 1 && c === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), i[u] = null;
        else if (h === 1 && c > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), i[u] = null;
        else if (h === 1 && c === 1)
          this._update && this._update(f, l), i[u] = null;
        else if (h > 1 && c > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), i[u] = null;
        else if (h > 1)
          for (var v = 0; v < h; v++)
            this._remove && this._remove(l[v]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }, t.prototype._performRestAdd = function(e, r) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n], a = r[i], o = ki(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        r[i] = null;
      }
    }, t.prototype._initIndexMap = function(e, r, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < e.length; o++) {
        var s = "_ec_" + this[i](e[o], o);
        if (a || (n[o] = s), !!r) {
          var u = r[s], l = ki(u);
          l === 0 ? (r[s] = o, a && n.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o);
        }
      }
    }, t;
  })()
), at = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, jm = ye();
function lw(t) {
  jm(t).datasetMap = K();
}
function fw(t, e, r) {
  var n = {}, i = ey(e);
  if (!i || !t)
    return n;
  var a = [], o = [], s = e.ecModel, u = jm(s).datasetMap, l = i.uid + "_" + r.seriesLayoutBy, f, h;
  t = t.slice(), x(t, function(g, m) {
    var p = W(g) ? g : t[m] = {
      name: g
    };
    p.type === "ordinal" && f == null && (f = m, h = d(p)), n[p.name] = [];
  });
  var c = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  x(t, function(g, m) {
    var p = g.name, y = d(g);
    if (f == null) {
      var _ = c.valueWayDim;
      v(n[p], _, y), v(o, _, y), c.valueWayDim += y;
    } else if (f === m)
      v(n[p], 0, y), v(a, 0, y);
    else {
      var _ = c.categoryWayDim;
      v(n[p], _, y), v(o, _, y), c.categoryWayDim += y;
    }
  });
  function v(g, m, p) {
    for (var y = 0; y < p; y++)
      g.push(m + y);
  }
  function d(g) {
    var m = g.dimsDef;
    return m ? m.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function ey(t) {
  var e = t.get("data", !0);
  if (!e)
    return Ha(t.ecModel, "dataset", {
      index: t.get("datasetIndex", !0),
      id: t.get("datasetId", !0)
    }, wt).models[0];
}
function hw(t) {
  return !t.get("transform", !0) && !t.get("fromTransformResult", !0) ? [] : Ha(t.ecModel, "dataset", {
    index: t.get("fromDatasetIndex", !0),
    id: t.get("fromDatasetId", !0)
  }, wt).models;
}
function ty(t, e) {
  return cw(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
}
function cw(t, e, r, n, i, a) {
  var o, s = 5;
  if (qe(t))
    return at.Not;
  var u, l;
  if (n) {
    var f = n[a];
    W(f) ? (u = f.name, l = f.type) : H(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? at.Must : at.Not;
  if (e === Ge) {
    var h = t;
    if (r === Ln) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = S(c[i + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[i + v];
        if (d && (o = S(d[a])) != null)
          return o;
      }
  } else if (e === Ot) {
    var g = t;
    if (!u)
      return at.Not;
    for (var v = 0; v < g.length && v < s; v++) {
      var m = g[v];
      if (m && (o = S(m[u])) != null)
        return o;
    }
  } else if (e === nr) {
    var p = t;
    if (!u)
      return at.Not;
    var c = p[u];
    if (!c || qe(c))
      return at.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = S(c[v])) != null)
        return o;
  } else if (e === ht)
    for (var y = t, v = 0; v < y.length && v < s; v++) {
      var m = y[v], _ = za(m);
      if (!V(_))
        return at.Not;
      if ((o = S(_[a])) != null)
        return o;
    }
  function S(b) {
    var T = H(b);
    if (b != null && isFinite(Number(b)) && b !== "")
      return T ? at.Might : at.Not;
    if (T && b !== "-")
      return at.Must;
  }
  return at.Not;
}
var fu = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.data = e.data || (e.sourceFormat === nr ? {} : []), this.sourceFormat = e.sourceFormat || _m, this.seriesLayoutBy = e.seriesLayoutBy || qt, this.startIndex = e.startIndex || 0, this.dimensionsDetectedCount = e.dimensionsDetectedCount, this.metaRawOption = e.metaRawOption;
      var r = this.dimensionsDefine = e.dimensionsDefine;
      if (r)
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          i.type == null && ty(this, n) === at.Must && (i.type = "ordinal");
        }
    }
    return t;
  })()
);
function Uh(t) {
  return t instanceof fu;
}
function xf(t, e, r) {
  r = r || ny(t);
  var n = e.seriesLayoutBy, i = dw(t, r, n, e.sourceHeader, e.dimensions), a = new fu({
    data: t,
    sourceFormat: r,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: ie(e)
  });
  return a;
}
function ry(t) {
  return new fu({
    data: t,
    sourceFormat: qe(t) ? cr : ht
  });
}
function vw(t) {
  return new fu({
    data: t.data,
    sourceFormat: t.sourceFormat,
    seriesLayoutBy: t.seriesLayoutBy,
    dimensionsDefine: ie(t.dimensionsDefine),
    startIndex: t.startIndex,
    dimensionsDetectedCount: t.dimensionsDetectedCount
  });
}
function ny(t) {
  var e = _m;
  if (qe(t))
    e = cr;
  else if (V(t)) {
    t.length === 0 && (e = Ge);
    for (var r = 0, n = t.length; r < n; r++) {
      var i = t[r];
      if (i != null) {
        if (V(i) || qe(i)) {
          e = Ge;
          break;
        } else if (W(i)) {
          e = Ot;
          break;
        }
      }
    }
  } else if (W(t)) {
    for (var a in t)
      if (lt(t, a) && nt(t[a])) {
        e = nr;
        break;
      }
  }
  return e;
}
function dw(t, e, r, n, i) {
  var a, o;
  if (!t)
    return {
      dimensionsDefine: jv(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (e === Ge) {
    var s = t;
    n === "auto" || n == null ? ed(function(l) {
      l != null && l !== "-" && (H(l) ? o == null && (o = 1) : o = 0);
    }, r, s, 10) : o = we(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], ed(function(l, f) {
      i[f] = l != null ? l + "" : "";
    }, r, s, 1 / 0)), a = i ? i.length : r === Ln ? s.length : s[0] ? s[0].length : null;
  } else if (e === Ot)
    i || (i = pw(t));
  else if (e === nr)
    i || (i = [], x(t, function(l, f) {
      i.push(f);
    }));
  else if (e === ht) {
    var u = za(t[0]);
    a = V(u) && u.length || 1;
  } else e === cr && process.env.NODE_ENV !== "production" && N(!!i, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: jv(i),
    dimensionsDetectedCount: a
  };
}
function pw(t) {
  for (var e = 0, r; e < t.length && !(r = t[e++]); )
    ;
  if (r)
    return be(r);
}
function jv(t) {
  if (t) {
    var e = K();
    return q(t, function(r, n) {
      r = W(r) ? r : {
        name: r
      };
      var i = {
        name: r.name,
        displayName: r.displayName,
        type: r.type
      };
      if (i.name == null)
        return i;
      i.name += "", i.displayName == null && (i.displayName = i.name);
      var a = e.get(i.name);
      return a ? i.name += "-" + a.count++ : e.set(i.name, {
        count: 1
      }), i;
    });
  }
}
function ed(t, e, r, n) {
  if (e === Ln)
    for (var i = 0; i < r.length && i < n; i++)
      t(r[i] ? r[i][0] : null, i);
  else
    for (var a = r[0] || [], i = 0; i < a.length && i < n; i++)
      t(a[i], i);
}
function iy(t) {
  var e = t.sourceFormat;
  return e === Ot || e === nr;
}
var on, sn, un, ln, td, rd, ay = (
  /** @class */
  (function() {
    function t(e, r) {
      var n = Uh(e) ? e : ry(e);
      this._source = n;
      var i = this._data = n.data, a = n.sourceFormat, o = n.seriesLayoutBy;
      if (a === cr) {
        if (process.env.NODE_ENV !== "production" && r == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = r, this._data = i;
      }
      if (process.env.NODE_ENV !== "production") {
        var s = gw[Ss(a, o)];
        s && s(i, n.dimensionsDefine);
      }
      rd(this, i, n);
    }
    return t.prototype.getSource = function() {
      return this._source;
    }, t.prototype.count = function() {
      return 0;
    }, t.prototype.getItem = function(e, r) {
    }, t.prototype.appendData = function(e) {
    }, t.prototype.clean = function() {
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.pure = !1, e.persistent = !0;
    })(), t.internalField = (function() {
      var e;
      rd = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = td[Ss(l, f)];
        if (process.env.NODE_ENV !== "production" && N(v, "Invalide sourceFormat: " + l), k(o, v), l === cr)
          o.getItem = r, o.count = i, o.fillStorage = n;
        else {
          var d = oy(l, f);
          o.getItem = Se(d, null, s, h, c);
          var g = sy(l, f);
          o.count = Se(g, null, s, h, c);
        }
      };
      var r = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, n = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
          for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], g = v[1] == null ? -1 / 0 : v[1], m = s - o, p = u[c], y = 0; y < m; y++) {
            var _ = f[y * h + c];
            p[o + y] = _, _ < d && (d = _), _ > g && (g = _);
          }
          v[0] = d, v[1] = g;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      td = (e = {}, e[Ge + "_" + qt] = {
        pure: !0,
        appendData: a
      }, e[Ge + "_" + Ln] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, e[Ot] = {
        pure: !0,
        appendData: a
      }, e[nr] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          x(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, e[ht] = {
        appendData: a
      }, e[cr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && N(qe(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, e);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    })(), t;
  })()
), go = function(t) {
  V(t) || ue("series.data or dataset.source must be an array.");
}, gw = (on = {}, on[Ge + "_" + qt] = go, on[Ge + "_" + Ln] = go, on[Ot] = go, on[nr] = function(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r].name;
    n == null && ue("dimension name must not be null/undefined.");
  }
}, on[ht] = go, on), nd = function(t, e, r, n) {
  return t[n];
}, mw = (sn = {}, sn[Ge + "_" + qt] = function(t, e, r, n) {
  return t[n + e];
}, sn[Ge + "_" + Ln] = function(t, e, r, n, i) {
  n += e;
  for (var a = i || [], o = t, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[n] : null;
  }
  return a;
}, sn[Ot] = nd, sn[nr] = function(t, e, r, n, i) {
  for (var a = i || [], o = 0; o < r.length; o++) {
    var s = r[o].name, u = s != null ? t[s] : null;
    a[o] = u ? u[n] : null;
  }
  return a;
}, sn[ht] = nd, sn);
function oy(t, e) {
  var r = mw[Ss(t, e)];
  return process.env.NODE_ENV !== "production" && N(r, 'Do not support get item on "' + t + '", "' + e + '".'), r;
}
var id = function(t, e, r) {
  return t.length;
}, yw = (un = {}, un[Ge + "_" + qt] = function(t, e, r) {
  return Math.max(0, t.length - e);
}, un[Ge + "_" + Ln] = function(t, e, r) {
  var n = t[0];
  return n ? Math.max(0, n.length - e) : 0;
}, un[Ot] = id, un[nr] = function(t, e, r) {
  var n = r[0].name, i = n != null ? t[n] : null;
  return i ? i.length : 0;
}, un[ht] = id, un);
function sy(t, e) {
  var r = yw[Ss(t, e)];
  return process.env.NODE_ENV !== "production" && N(r, 'Do not support count on "' + t + '", "' + e + '".'), r;
}
var el = function(t, e, r) {
  return t[e];
}, _w = (ln = {}, ln[Ge] = el, ln[Ot] = function(t, e, r) {
  return t[r];
}, ln[nr] = el, ln[ht] = function(t, e, r) {
  var n = za(t);
  return n instanceof Array ? n[e] : n;
}, ln[cr] = el, ln);
function uy(t) {
  var e = _w[t];
  return process.env.NODE_ENV !== "production" && N(e, 'Do not support get value on "' + t + '".'), e;
}
function Ss(t, e) {
  return t === Ge ? t + "_" + e : t;
}
function bi(t, e, r) {
  if (t) {
    var n = t.getRawDataItem(e);
    if (n != null) {
      var i = t.getStore(), a = i.getSource().sourceFormat;
      if (r != null) {
        var o = t.getDimensionIndex(r), s = i.getDimensionProperty(o);
        return uy(a)(n, o, s);
      } else {
        var u = n;
        return a === ht && (u = za(n)), u;
      }
    }
  }
}
var Sw = (
  /** @class */
  (function() {
    function t(e, r) {
      this._encode = e, this._schema = r;
    }
    return t.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, t.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, t;
  })()
);
function bw(t, e) {
  var r = {}, n = r.encode = {}, i = K(), a = [], o = [], s = {};
  x(t.dimensions, function(c) {
    var v = t.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && N(df.get(d) == null);
      var g = v.coordDimIndex;
      tl(n, d)[g] = c, v.isExtraCoord || (i.set(d, 1), ww(v.type) && (a[0] = c), tl(s, d)[g] = t.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    df.each(function(m, p) {
      var y = tl(n, p), _ = v.otherDims[p];
      _ != null && _ !== !1 && (y[_] = v.name);
    });
  });
  var u = [], l = {};
  i.each(function(c, v) {
    var d = n[v];
    l[v] = d[0], u = u.concat(d);
  }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = q(u, function(c) {
    return t.getDimensionInfo(c).storeDimIndex;
  }), r.encodeFirstDimNotExtra = l;
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, r.userOutput = new Sw(s, e), r;
}
function tl(t, e) {
  return t.hasOwnProperty(e) || (t[e] = []), t[e];
}
function Tw(t) {
  return t === "category" ? "ordinal" : t === "time" ? "time" : "float";
}
function ww(t) {
  return !(t === "ordinal" || t === "time");
}
var Wo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.otherDims = {}, e != null && k(this, e);
    }
    return t;
  })()
);
function Yo(t, e) {
  var r = e && e.type;
  return r === "ordinal" ? t : (r === "time" && !we(t) && t != null && t !== "-" && (t = +Ai(t)), t == null || t === "" ? NaN : Number(t));
}
K({
  number: function(t) {
    return parseFloat(t);
  },
  time: function(t) {
    return +Ai(t);
  },
  trim: function(t) {
    return H(t) ? Gt(t) : t;
  }
});
var xw = (
  /** @class */
  (function() {
    function t(e, r) {
      var n = e === "desc";
      this._resultLT = n ? 1 : -1, r == null && (r = n ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0;
    }
    return t.prototype.evaluate = function(e, r) {
      var n = we(e) ? e : cs(e), i = we(r) ? r : cs(r), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = H(e), u = H(r);
        s && (n = u ? e : 0), u && (i = s ? r : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, t;
  })()
);
function Cw(t) {
  var e = "", r = -1 / 0, n = -1 / 0, i = 1 / 0, a = 1 / 0;
  return t && (t.g != null && (e += "G" + t.g, r = t.g), t.ge != null && (e += "GE" + t.ge, n = t.ge), t.l != null && (e += "L" + t.l, i = t.l), t.le != null && (e += "LE" + t.le, a = t.le)), {
    key: e,
    g: r,
    ge: n,
    l: i,
    le: a
  };
}
function Dw(t, e) {
  return e > t.g && e >= t.ge && e < t.l && e <= t.le;
}
var Ew = typeof Uint32Array === Ga ? Array : Uint32Array, Mw = typeof Uint16Array === Ga ? Array : Uint16Array, ly = typeof Int32Array === Ga ? Array : Int32Array, ad = typeof Float64Array === Ga ? Array : Float64Array, fy = {
  float: ad,
  int: ly,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: ad
}, rl;
function Fn(t) {
  return t > 65535 ? Ew : Mw;
}
function Aw(t) {
  var e = t.constructor;
  return e === Array ? t.slice() : new e(t);
}
function od(t, e, r, n, i) {
  var a = fy[r || "float"];
  if (i) {
    var o = t[e], s = o && o.length;
    if (s !== n) {
      for (var u = new a(n), l = 0; l < s; l++)
        u[l] = o[l];
      t[e] = u;
    }
  } else
    t[e] = new a(n);
}
var Cf = (
  /** @class */
  (function() {
    function t() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = K();
    }
    return t.prototype.initData = function(e, r, n) {
      process.env.NODE_ENV !== "production" && N(Q(e.getItem) && Q(e.count), "Invalid data provider."), this._provider = e, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = e.getSource(), a = this.defaultDimValueGetter = rl[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [];
      var o = iy(i);
      this._dimensions = q(r, function(s) {
        return process.env.NODE_ENV !== "production" && o && N(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, e.count());
    }, t.prototype.getProvider = function() {
      return this._provider;
    }, t.prototype.getSource = function() {
      return this._provider.getSource();
    }, t.prototype.ensureCalculationDimension = function(e, r) {
      var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(e);
      if (a != null) {
        if (i[a].type === r)
          return a;
      } else
        a = i.length;
      return i[a] = {
        type: r
      }, n.set(e, a), this._chunks[a] = new fy[r || "float"](this._rawCount), this._rawExtent[a] = Tt(), a;
    }, t.prototype.collectOrdinalMeta = function(e, r) {
      var n = this._chunks[e], i = this._dimensions[e], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[e] = Tt());
      for (var u = a[e], l = o; l < s; l++) {
        var f = n[l] = r.parseAndCollect(n[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      i.ordinalMeta = r, i.ordinalOffset = s, i.type = "ordinal";
    }, t.prototype.getOrdinalMeta = function(e) {
      var r = this._dimensions[e], n = r.ordinalMeta;
      return n;
    }, t.prototype.getDimensionProperty = function(e) {
      var r = this._dimensions[e];
      return r && r.property;
    }, t.prototype.appendData = function(e) {
      process.env.NODE_ENV !== "production" && N(!this._indices, "appendData can only be called on raw data.");
      var r = this._provider, n = this.count();
      r.appendData(e);
      var i = r.count();
      return r.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, t.prototype.appendValues = function(e, r) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(e.length, r || 0), l = 0; l < a; l++) {
        var f = i[l];
        od(n, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = i[d], g = rl.arrayRows.call(this, e[v] || h, f.property, v, d);
          n[d][c] = g;
          var m = o[d];
          g < m[0] && (m[0] = g), g > m[1] && (m[1] = g);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, t.prototype._initDataFromProvider = function(e, r, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = q(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = Tt()), od(a, f, h.type, r, n);
      }
      if (i.fillStorage)
        i.fillStorage(e, r, a, u);
      else
        for (var c = [], v = e; v < r; v++) {
          c = i.getItem(v, c);
          for (var d = 0; d < s; d++) {
            var g = a[d], m = this._dimValueGetter(c, l[d], v, d);
            g[v] = m;
            var p = u[d];
            m < p[0] && (p[0] = m), m > p[1] && (p[1] = m);
          }
        }
      !i.persistent && i.clean && i.clean(), this._rawCount = this._count = r, this._extent = [];
    }, t.prototype.count = function() {
      return this._count;
    }, t.prototype.get = function(e, r) {
      if (!(r >= 0 && r < this._count))
        return NaN;
      var n = this._chunks[e];
      return n ? n[this.getRawIndex(r)] : NaN;
    }, t.prototype.getValues = function(e, r) {
      var n = [], i = [];
      if (r == null) {
        r = e, e = [];
        for (var a = 0; a < this._dimensions.length; a++)
          i.push(a);
      } else
        i = e;
      for (var a = 0, o = i.length; a < o; a++)
        n.push(this.get(i[a], r));
      return n;
    }, t.prototype.getByRawIndex = function(e, r) {
      if (!(r >= 0 && r < this._rawCount))
        return NaN;
      var n = this._chunks[e];
      return n ? n[r] : NaN;
    }, t.prototype.getSum = function(e) {
      var r = this._chunks[e], n = 0;
      if (r)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(e, i);
          isNaN(o) || (n += o);
        }
      return n;
    }, t.prototype.getMedian = function(e) {
      var r = [];
      this.each([e], function(i) {
        isNaN(i) || r.push(i);
      }), am(r);
      var n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? r[(n - 1) / 2] : (r[n / 2] + r[n / 2 - 1]) / 2;
    }, t.prototype.indexOfRawIndex = function(e) {
      if (e >= this._rawCount || e < 0)
        return -1;
      if (!this._indices)
        return e;
      var r = this._indices, n = r[e];
      if (n != null && n < this._count && n === e)
        return e;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = (i + a) / 2 | 0;
        if (r[o] < e)
          i = o + 1;
        else if (r[o] > e)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, t.prototype.getIndices = function() {
      var e, r = this._indices;
      if (r) {
        var n = r.constructor, i = this._count;
        if (n === Array) {
          e = new n(i);
          for (var a = 0; a < i; a++)
            e[a] = r[a];
        } else
          e = new n(r.buffer, 0, i);
      } else {
        var n = Fn(this._rawCount);
        e = new n(this.count());
        for (var a = 0; a < e.length; a++)
          e[a] = a;
      }
      return e;
    }, t.prototype.filter = function(e, r) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = Fn(n._rawCount), o = new a(i), s = [], u = e.length, l = 0, f = e[0], h = n._chunks, c = 0; c < i; c++) {
        var v = void 0, d = n.getRawIndex(c);
        if (u === 0)
          v = r(c);
        else if (u === 1) {
          var g = h[f][d];
          v = r(g, c);
        } else {
          for (var m = 0; m < u; m++)
            s[m] = h[e[m]][d];
          s[m] = c, v = r.apply(null, s);
        }
        v && (o[l++] = d);
      }
      return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n;
    }, t.prototype.selectRange = function(e) {
      var r = this.clone(), n = r._count;
      if (!n)
        return this;
      var i = be(e), a = i.length;
      if (!a)
        return this;
      var o = r.count(), s = Fn(r._rawCount), u = new s(o), l = 0, f = i[0], h = e[f][0], c = e[f][1], v = r._chunks, d = !1;
      if (!r._indices) {
        var g = 0;
        if (a === 1) {
          for (var m = v[i[0]], p = 0; p < n; p++) {
            var y = m[p];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = g), g++;
          }
          d = !0;
        } else if (a === 2) {
          for (var m = v[i[0]], _ = v[i[1]], S = e[i[1]][0], b = e[i[1]][1], p = 0; p < n; p++) {
            var y = m[p], T = _[p];
            (y >= h && y <= c || isNaN(y)) && (T >= S && T <= b || isNaN(T)) && (u[l++] = g), g++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var p = 0; p < o; p++) {
            var w = r.getRawIndex(p), y = v[i[0]][w];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = w);
          }
        else
          for (var p = 0; p < o; p++) {
            for (var E = !0, w = r.getRawIndex(p), D = 0; D < a; D++) {
              var C = i[D], y = v[C][w];
              (y < e[C][0] || y > e[C][1]) && (E = !1);
            }
            E && (u[l++] = r.getRawIndex(p));
          }
      return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r;
    }, t.prototype.map = function(e, r) {
      var n = this.clone(e);
      return this._updateDims(n, e, r), n;
    }, t.prototype.modify = function(e, r) {
      this._updateDims(this, e, r);
    }, t.prototype._updateDims = function(e, r, n) {
      for (var i = e._chunks, a = [], o = r.length, s = e.count(), u = [], l = e._rawExtent, f = 0; f < r.length; f++)
        l[r[f]] = Tt();
      for (var h = 0; h < s; h++) {
        for (var c = e.getRawIndex(h), v = 0; v < o; v++)
          u[v] = i[r[v]][c];
        u[o] = h;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var g = r[f], m = d[f], p = l[g], y = i[g];
            y && (y[c] = m), m < p[0] && (p[0] = m), m > p[1] && (p[1] = m);
          }
        }
      }
    }, t.prototype.lttbDownSample = function(e, r) {
      var n = this.clone([e], !0), i = n._chunks, a = i[e], o = this.count(), s = 0, u = Math.floor(1 / r), l = this.getRawIndex(0), f, h, c, v = new (Fn(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var g = Math.min(d + u, o - 1), m = Math.min(d + u * 2, o), p = (m + g) / 2, y = 0, _ = g; _ < m; _++) {
          var S = this.getRawIndex(_), b = a[S];
          isNaN(b) || (y += b);
        }
        y /= m - g;
        var T = d, w = Math.min(d + u, o), E = d - 1, D = a[l];
        f = -1, c = T;
        for (var C = -1, M = 0, _ = T; _ < w; _++) {
          var S = this.getRawIndex(_), b = a[S];
          if (isNaN(b)) {
            M++, C < 0 && (C = S);
            continue;
          }
          h = Math.abs((E - p) * (b - D) - (E - _) * (y - D)), h > f && (f = h, c = S);
        }
        M > 0 && M < w - T && (v[s++] = Math.min(C, c), c = Math.max(C, c)), v[s++] = c, l = c;
      }
      return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n;
    }, t.prototype.minmaxDownSample = function(e, r) {
      for (var n = this.clone([e], !0), i = n._chunks, a = Math.floor(1 / r), o = i[e], s = this.count(), u = new (Fn(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, c = o[this.getRawIndex(h)], v = f, d = o[this.getRawIndex(v)], g = a;
        f + a > s && (g = s - f);
        for (var m = 0; m < g; m++) {
          var p = this.getRawIndex(f + m), y = o[p];
          y < c && (c = y, h = f + m), y > d && (d = y, v = f + m);
        }
        var _ = this.getRawIndex(h), S = this.getRawIndex(v);
        h < v ? (u[l++] = _, u[l++] = S) : (u[l++] = S, u[l++] = _);
      }
      return n._count = l, n._indices = u, n._updateGetRawIdx(), n;
    }, t.prototype.downSample = function(e, r, n, i) {
      for (var a = this.clone([e], !0), o = a._chunks, s = [], u = Math.floor(1 / r), l = o[e], f = this.count(), h = a._rawExtent[e] = Tt(), c = new (Fn(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var g = 0; g < u; g++) {
          var m = this.getRawIndex(d + g);
          s[g] = l[m];
        }
        var p = n(s), y = this.getRawIndex(Math.min(d + i(s, p) || 0, f - 1));
        l[y] = p, p < h[0] && (h[0] = p), p > h[1] && (h[1] = p), c[v++] = y;
      }
      return a._count = v, a._indices = c, a._updateGetRawIdx(), a;
    }, t.prototype.each = function(e, r) {
      if (this._count)
        for (var n = e.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              r(a);
              break;
            case 1:
              r(i[e[0]][s], a);
              break;
            case 2:
              r(i[e[0]][s], i[e[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < n; u++)
                l[u] = i[e[u]][s];
              l[u] = a, r.apply(null, l);
          }
        }
    }, t.prototype.getDataExtent = function(e, r) {
      var n = this._chunks[e], i = Tt();
      if (!n)
        return i;
      var a = this.count(), o = !this._indices && !r;
      if (o)
        return this._rawExtent[e].slice();
      var s = this._extent, u = s[e] || (s[e] = {}), l = Cw(r), f = l.key, h = u[f];
      if (h)
        return h.slice();
      for (var c = i[0], v = i[1], d = 0; d < a; d++) {
        var g = this.getRawIndex(d), m = n[g];
        (!r || Dw(l, m)) && (m < c && (c = m), m > v && (v = m));
      }
      return u[f] = [c, v];
    }, t.prototype.getRawDataItem = function(e) {
      var r = this.getRawIndex(e);
      if (this._provider.persistent)
        return this._provider.getItem(r);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][r]);
      return n;
    }, t.prototype.clone = function(e, r) {
      var n = new t(), i = this._chunks, a = e && Di(e, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? Aw(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), r || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, t.prototype._copyCommonProps = function(e) {
      e._count = this._count, e._rawCount = this._rawCount, e._provider = this._provider, e._dimensions = this._dimensions, e._extent = ie(this._extent), e._rawExtent = ie(this._rawExtent);
    }, t.prototype._cloneIndices = function() {
      if (this._indices) {
        var e = this._indices.constructor, r = void 0;
        if (e === Array) {
          var n = this._indices.length;
          r = new e(n);
          for (var i = 0; i < n; i++)
            r[i] = this._indices[i];
        } else
          r = new e(this._indices);
        return r;
      }
      return null;
    }, t.prototype._getRawIdxIdentity = function(e) {
      return e;
    }, t.prototype._getRawIdx = function(e) {
      return e < this._count && e >= 0 ? this._indices[e] : -1;
    }, t.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, t.internalField = (function() {
      function e(r, n, i, a) {
        return Yo(r[a], this._dimensions[a]);
      }
      rl = {
        arrayRows: e,
        objectRows: function(r, n, i, a) {
          return Yo(r[n], this._dimensions[a]);
        },
        keyedColumns: e,
        original: function(r, n, i, a) {
          var o = r && (r.value == null ? r : r.value);
          return Yo(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(r, n, i, a) {
          return r[a];
        }
      };
    })(), t;
  })()
), Lw = ye(), Iw = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, hy = (
  /** @class */
  (function() {
    function t(e) {
      this.dimensions = e.dimensions, this._dimOmitted = e.dimensionOmitted, this.source = e.source, this._fullDimCount = e.fullDimensionCount, this._updateDimOmitted(e.dimensionOmitted);
    }
    return t.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, t.prototype._updateDimOmitted = function(e) {
      this._dimOmitted = e, e && (this._dimNameMap || (this._dimNameMap = vy(this.source)));
    }, t.prototype.getSourceDimensionIndex = function(e) {
      return Y(this._dimNameMap.get(e), -1);
    }, t.prototype.getSourceDimension = function(e) {
      var r = this.source.dimensionsDefine;
      if (r)
        return r[e];
    }, t.prototype.makeStoreSchema = function() {
      for (var e = this._fullDimCount, r = iy(this.source), n = !dy(e), i = "", a = [], o = 0, s = 0; o < e; o++) {
        var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          u = r ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
        else {
          var c = this.getSourceDimension(o);
          c && (u = r ? c.name : null, l = c.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), r && u != null && (!h || !h.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += Iw[l] || "f", f && (i += f.uid), i += "$";
      }
      var v = this.source, d = [v.seriesLayoutBy, v.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, t.prototype.makeOutputDimensionNames = function() {
      for (var e = [], r = 0, n = 0; r < this._fullDimCount; r++) {
        var i = void 0, a = this.dimensions[n];
        if (a && a.storeDimIndex === r)
          a.isCalculationCoord || (i = a.name), n++;
        else {
          var o = this.getSourceDimension(r);
          o && (i = o.name);
        }
        e.push(i);
      }
      return e;
    }, t.prototype.appendCalculationDimension = function(e) {
      this.dimensions.push(e), e.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, t;
  })()
);
function cy(t) {
  return t instanceof hy;
}
function Wh(t) {
  for (var e = K(), r = 0; r < (t || []).length; r++) {
    var n = t[r], i = W(n) ? n.name : n;
    i != null && e.get(i) == null && e.set(i, r);
  }
  return e;
}
function vy(t) {
  var e = Lw(t);
  return e.dimNameMap || (e.dimNameMap = Wh(t.dimensionsDefine));
}
function dy(t) {
  return t > 30;
}
var Bi = W, _r = q, Ow = typeof Int32Array > "u" ? Array : Int32Array, Pw = "e\0\0", sd = -1, Nw = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], Rw = ["_approximateExtent"], ud, mo, Vi, zn, nl, Fi, il, kw = (
  /** @class */
  (function() {
    function t(e, r) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      cy(e) ? (n = e.dimensions, this._dimOmitted = e.isDimensionOmitted(), this._schema = e) : (i = !0, n = e), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
        var h = n[f], c = H(h) ? new Wo({
          name: h
        }) : h instanceof Wo ? h : new Wo(h), v = c.name;
        c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
        var d = c.otherDims = c.otherDims || {};
        o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), process.env.NODE_ENV !== "production" && N(i || c.storeDimIndex >= 0), i && (c.storeDimIndex = f), d.itemName === 0 && (this._nameDimIdx = c.storeDimIndex), d.itemId === 0 && (this._idDimIdx = c.storeDimIndex);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
        var g = this._dimIdxToName = K();
        x(o, function(m) {
          g.set(a[m].storeDimIndex, m);
        });
      }
    }
    return t.prototype.getDimension = function(e) {
      var r = this._recognizeDimIndex(e);
      if (r == null)
        return e;
      if (r = e, !this._dimOmitted)
        return this.dimensions[r];
      var n = this._dimIdxToName.get(r);
      if (n != null)
        return n;
      var i = this._schema.getSourceDimension(r);
      if (i)
        return i.name;
    }, t.prototype.getDimensionIndex = function(e) {
      var r = this._recognizeDimIndex(e);
      if (r != null)
        return r;
      if (e == null)
        return -1;
      var n = this._getDimInfo(e);
      return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(e) : -1;
    }, t.prototype._recognizeDimIndex = function(e) {
      if (we(e) || e != null && !isNaN(e) && !this._getDimInfo(e) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(e) < 0))
        return +e;
    }, t.prototype._getStoreDimIndex = function(e) {
      var r = this.getDimensionIndex(e);
      if (process.env.NODE_ENV !== "production" && r == null)
        throw new Error("Unknown dimension " + e);
      return r;
    }, t.prototype.getDimensionInfo = function(e) {
      return this._getDimInfo(this.getDimension(e));
    }, t.prototype._initGetDimensionInfo = function(e) {
      var r = this._dimInfos;
      this._getDimInfo = e ? function(n) {
        return r.hasOwnProperty(n) ? r[n] : void 0;
      } : function(n) {
        return r[n];
      };
    }, t.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, t.prototype.mapDimension = function(e, r) {
      var n = this._dimSummary;
      if (r == null)
        return n.encodeFirstDimNotExtra[e];
      var i = n.encode[e];
      return i ? i[r] : null;
    }, t.prototype.mapDimensionsAll = function(e) {
      var r = this._dimSummary, n = r.encode[e];
      return (n || []).slice();
    }, t.prototype.getStore = function() {
      return this._store;
    }, t.prototype.initData = function(e, r, n) {
      var i = this, a;
      if (e instanceof Cf && (a = e), !a) {
        var o = this.dimensions, s = Uh(e) || nt(e) ? new ay(e, o.length) : e;
        a = new Cf();
        var u = _r(o, function(l) {
          return {
            type: i._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, n);
      }
      this._store = a, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = bw(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, t.prototype.appendData = function(e) {
      var r = this._store.appendData(e);
      this._doInit(r[0], r[1]);
    }, t.prototype.appendValues = function(e, r) {
      var n = this._store.appendValues(e, r && r.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), r)
        for (var s = i; s < a; s++) {
          var u = s - i;
          this._nameList[s] = r[u], o && il(this, s);
        }
    }, t.prototype._updateOrdinalMeta = function() {
      for (var e = this._store, r = this.dimensions, n = 0; n < r.length; n++) {
        var i = this._dimInfos[r[n]];
        i.ordinalMeta && e.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, t.prototype._shouldMakeIdFromName = function() {
      var e = this._store.getProvider();
      return this._idDimIdx == null && e.getSource().sourceFormat !== cr && !e.fillStorage;
    }, t.prototype._doInit = function(e, r) {
      if (!(e >= r)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, u = s === ht;
        if (u && !i.pure)
          for (var l = [], f = e; f < r; f++) {
            var h = i.getItem(f, l);
            if (!this.hasItemOption && sb(h) && (this.hasItemOption = !0), h) {
              var c = h.name;
              a[f] == null && c != null && (a[f] = $t(c, null));
              var v = h.id;
              o[f] == null && v != null && (o[f] = $t(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = e; f < r; f++)
            il(this, f);
        ud(this);
      }
    }, t.prototype.getApproximateExtent = function(e, r) {
      return this._approximateExtent[e] || this._store.getDataExtent(this._getStoreDimIndex(e), r);
    }, t.prototype.setApproximateExtent = function(e, r) {
      r = this.getDimension(r), this._approximateExtent[r] = e.slice();
    }, t.prototype.getCalculationInfo = function(e) {
      return this._calculationInfo[e];
    }, t.prototype.setCalculationInfo = function(e, r) {
      Bi(e) ? k(this._calculationInfo, e) : this._calculationInfo[e] = r;
    }, t.prototype.getName = function(e) {
      var r = this.getRawIndex(e), n = this._nameList[r];
      return n == null && this._nameDimIdx != null && (n = Vi(this, this._nameDimIdx, r)), n == null && (n = ""), n;
    }, t.prototype._getCategory = function(e, r) {
      var n = this._store.get(e, r), i = this._store.getOrdinalMeta(e);
      return i ? i.categories[n] : n;
    }, t.prototype.getId = function(e) {
      return mo(this, this.getRawIndex(e));
    }, t.prototype.count = function() {
      return this._store.count();
    }, t.prototype.get = function(e, r) {
      var n = this._store, i = this._dimInfos[e];
      if (i)
        return n.get(i.storeDimIndex, r);
    }, t.prototype.getByRawIndex = function(e, r) {
      var n = this._store, i = this._dimInfos[e];
      if (i)
        return n.getByRawIndex(i.storeDimIndex, r);
    }, t.prototype.getIndices = function() {
      return this._store.getIndices();
    }, t.prototype.getDataExtent = function(e) {
      return this._store.getDataExtent(this._getStoreDimIndex(e), null);
    }, t.prototype.getSum = function(e) {
      return this._store.getSum(this._getStoreDimIndex(e));
    }, t.prototype.getMedian = function(e) {
      return this._store.getMedian(this._getStoreDimIndex(e));
    }, t.prototype.getValues = function(e, r) {
      var n = this, i = this._store;
      return V(e) ? i.getValues(_r(e, function(a) {
        return n._getStoreDimIndex(a);
      }), r) : i.getValues(e);
    }, t.prototype.hasValue = function(e) {
      for (var r = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = r.length; n < i; n++)
        if (isNaN(this._store.get(r[n], e)))
          return !1;
      return !0;
    }, t.prototype.indexOfName = function(e) {
      for (var r = 0, n = this._store.count(); r < n; r++)
        if (this.getName(r) === e)
          return r;
      return -1;
    }, t.prototype.getRawIndex = function(e) {
      return this._store.getRawIndex(e);
    }, t.prototype.indexOfRawIndex = function(e) {
      return this._store.indexOfRawIndex(e);
    }, t.prototype.rawIndexOf = function(e, r) {
      var n = e && this._invertedIndicesMap[e];
      if (process.env.NODE_ENV !== "production" && !n)
        throw new Error("Do not supported yet");
      var i = n && n[r];
      return i == null || isNaN(i) ? sd : i;
    }, t.prototype.each = function(e, r, n) {
      Q(e) && (n = r, r = e, e = []);
      var i = n || this, a = _r(zn(e), this._getStoreDimIndex, this);
      this._store.each(a, i ? Se(r, i) : r);
    }, t.prototype.filterSelf = function(e, r, n) {
      Q(e) && (n = r, r = e, e = []);
      var i = n || this, a = _r(zn(e), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? Se(r, i) : r), this;
    }, t.prototype.selectRange = function(e) {
      var r = this, n = {}, i = be(e);
      return x(i, function(a) {
        var o = r._getStoreDimIndex(a);
        n[o] = e[a];
      }), this._store = this._store.selectRange(n), this;
    }, t.prototype.mapArray = function(e, r, n) {
      Q(e) && (n = r, r = e, e = []), n = n || this;
      var i = [];
      return this.each(e, function() {
        i.push(r && r.apply(this, arguments));
      }, n), i;
    }, t.prototype.map = function(e, r, n, i) {
      var a = n || i || this, o = _r(zn(e), this._getStoreDimIndex, this), s = Fi(this);
      return s._store = this._store.map(o, a ? Se(r, a) : r), s;
    }, t.prototype.modify = function(e, r, n, i) {
      var a = this, o = n || i || this;
      process.env.NODE_ENV !== "production" && x(zn(e), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = _r(zn(e), this._getStoreDimIndex, this);
      this._store.modify(s, o ? Se(r, o) : r);
    }, t.prototype.downSample = function(e, r, n, i) {
      var a = Fi(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(e), r, n, i), a;
    }, t.prototype.minmaxDownSample = function(e, r) {
      var n = Fi(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(e), r), n;
    }, t.prototype.lttbDownSample = function(e, r) {
      var n = Fi(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(e), r), n;
    }, t.prototype.getRawDataItem = function(e) {
      return this._store.getRawDataItem(e);
    }, t.prototype.getItemModel = function(e) {
      var r = this.hostModel, n = this.getRawDataItem(e);
      return new xe(n, r, r && r.ecModel);
    }, t.prototype.diff = function(e) {
      var r = this;
      return new uw(e ? e.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return mo(e, n);
      }, function(n) {
        return mo(r, n);
      });
    }, t.prototype.getVisual = function(e) {
      var r = this._visual;
      return r && r[e];
    }, t.prototype.setVisual = function(e, r) {
      this._visual = this._visual || {}, Bi(e) ? k(this._visual, e) : this._visual[e] = r;
    }, t.prototype.getItemVisual = function(e, r) {
      var n = this._itemVisuals[e], i = n && n[r];
      return i ?? this.getVisual(r);
    }, t.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, t.prototype.ensureUniqueItemVisual = function(e, r) {
      var n = this._itemVisuals, i = n[e];
      i || (i = n[e] = {});
      var a = i[r];
      return a == null && (a = this.getVisual(r), V(a) ? a = a.slice() : Bi(a) && (a = k({}, a)), i[r] = a), a;
    }, t.prototype.setItemVisual = function(e, r, n) {
      var i = this._itemVisuals[e] || {};
      this._itemVisuals[e] = i, Bi(r) ? k(i, r) : i[r] = n;
    }, t.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, t.prototype.setLayout = function(e, r) {
      Bi(e) ? k(this._layout, e) : this._layout[e] = r;
    }, t.prototype.getLayout = function(e) {
      return this._layout[e];
    }, t.prototype.getItemLayout = function(e) {
      return this._itemLayouts[e];
    }, t.prototype.setItemLayout = function(e, r, n) {
      this._itemLayouts[e] = n ? k(this._itemLayouts[e] || {}, r) : r;
    }, t.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, t.prototype.setItemGraphicEl = function(e, r) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      Mb(n, this.dataType, e, r), this._graphicEls[e] = r;
    }, t.prototype.getItemGraphicEl = function(e) {
      return this._graphicEls[e];
    }, t.prototype.eachItemGraphicEl = function(e, r) {
      x(this._graphicEls, function(n, i) {
        n && e && e.call(r, n, i);
      });
    }, t.prototype.cloneShallow = function(e) {
      return e || (e = new t(this._schema ? this._schema : _r(this.dimensions, this._getDimInfo, this), this.hostModel)), nl(e, this), e._store = this._store, e;
    }, t.prototype.wrapMethod = function(e, r) {
      var n = this[e];
      Q(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(e), this[e] = function() {
        var i = n.apply(this, arguments);
        return r.apply(this, [i].concat(fh(arguments)));
      });
    }, t.internalField = (function() {
      ud = function(e) {
        var r = e._invertedIndicesMap;
        x(r, function(n, i) {
          var a = e._dimInfos[i], o = a.ordinalMeta, s = e._store;
          if (o) {
            n = r[i] = new Ow(o.categories.length);
            for (var u = 0; u < n.length; u++)
              n[u] = sd;
            for (var u = 0; u < s.count(); u++)
              n[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, Vi = function(e, r, n) {
        return $t(e._getCategory(r, n), null);
      }, mo = function(e, r) {
        var n = e._idList[r];
        return n == null && e._idDimIdx != null && (n = Vi(e, e._idDimIdx, r)), n == null && (n = Pw + r), n;
      }, zn = function(e) {
        return V(e) || (e = e != null ? [e] : []), e;
      }, Fi = function(e) {
        var r = new t(e._schema ? e._schema : _r(e.dimensions, e._getDimInfo, e), e.hostModel);
        return nl(r, e), r;
      }, nl = function(e, r) {
        x(Nw.concat(r.__wrappedMethods || []), function(n) {
          r.hasOwnProperty(n) && (e[n] = r[n]);
        }), e.__wrappedMethods = r.__wrappedMethods, x(Rw, function(n) {
          e[n] = ie(r[n]);
        }), e._calculationInfo = k({}, r._calculationInfo);
      }, il = function(e, r) {
        var n = e._nameList, i = e._idList, a = e._nameDimIdx, o = e._idDimIdx, s = n[r], u = i[r];
        if (s == null && a != null && (n[r] = s = Vi(e, a, r)), u == null && o != null && (i[r] = u = Vi(e, o, r)), u == null && s != null) {
          var l = e._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), i[r] = u;
        }
      };
    })(), t;
  })()
);
function Bw(t, e) {
  Uh(t) || (t = ry(t)), e = e || {};
  var r = e.coordDimensions || [], n = e.dimensionsDefine || t.dimensionsDefine || [], i = K(), a = [], o = Vw(t, r, n, e.dimensionsCount), s = e.canOmitUnusedDimensions && dy(o), u = n === t.dimensionsDefine, l = u ? vy(t) : Wh(n), f = e.encodeDefine;
  !f && e.encodeDefaulter && (f = e.encodeDefaulter(t, o));
  for (var h = K(f), c = new ly(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(D) {
    var C = c[D];
    if (C < 0) {
      var M = n[D], L = W(M) ? M : {
        name: M
      }, A = new Wo(), I = L.name;
      I != null && l.get(I) != null && (A.name = A.displayName = I), L.type != null && (A.type = L.type), L.displayName != null && (A.displayName = L.displayName);
      var P = a.length;
      return c[D] = P, A.storeDimIndex = D, a.push(A), A;
    }
    return a[C];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  h.each(function(D, C) {
    var M = $e(D).slice();
    if (M.length === 1 && !H(M[0]) && M[0] < 0) {
      h.set(C, !1);
      return;
    }
    var L = h.set(C, []);
    x(M, function(A, I) {
      var P = H(A) ? l.get(A) : A;
      P != null && P < o && (L[I] = P, m(d(P), C, I));
    });
  });
  var g = 0;
  x(r, function(D) {
    var C, M, L, A;
    if (H(D))
      C = D, A = {};
    else {
      A = D, C = A.name;
      var I = A.ordinalMeta;
      A.ordinalMeta = null, A = k({}, A), A.ordinalMeta = I, M = A.dimsDef, L = A.otherDims, A.name = A.coordDim = A.coordDimIndex = A.dimsDef = A.otherDims = null;
    }
    var P = h.get(C);
    if (P !== !1) {
      if (P = $e(P), !P.length)
        for (var O = 0; O < (M && M.length || 1); O++) {
          for (; g < o && d(g).coordDim != null; )
            g++;
          g < o && P.push(g++);
        }
      x(P, function(B, G) {
        var U = d(B);
        if (u && A.type != null && (U.type = A.type), m(pe(U, A), C, G), U.name == null && M) {
          var J = M[G];
          !W(J) && (J = {
            name: J
          }), U.name = U.displayName = J.name, U.defaultTooltip = J.defaultTooltip;
        }
        L && pe(U.otherDims, L);
      });
    }
  });
  function m(D, C, M) {
    df.get(C) != null ? D.otherDims[C] = M : (D.coordDim = C, D.coordDimIndex = M, i.set(C, !0));
  }
  var p = e.generateCoord, y = e.generateCoordCount, _ = y != null;
  y = p ? y || 1 : 0;
  var S = p || "value";
  function b(D) {
    D.name == null && (D.name = D.coordDim);
  }
  if (s)
    x(a, function(D) {
      b(D);
    }), a.sort(function(D, C) {
      return D.storeDimIndex - C.storeDimIndex;
    });
  else
    for (var T = 0; T < o; T++) {
      var w = d(T), E = w.coordDim;
      E == null && (w.coordDim = Fw(S, i, _), w.coordDimIndex = 0, (!p || y <= 0) && (w.isExtraCoord = !0), y--), b(w), w.type == null && (ty(t, T) === at.Must || w.isExtraCoord && (w.otherDims.itemName != null || w.otherDims.seriesName != null)) && (w.type = "ordinal");
    }
  return bh(a, function(D) {
    return D.name;
  }, function(D, C) {
    C > 0 && (D.name = D.name + (C - 1));
  }), new hy({
    source: t,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function Vw(t, e, r, n) {
  var i = Math.max(t.dimensionsDetectedCount || 1, e.length, r.length, n || 0);
  return x(e, function(a) {
    var o;
    W(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function Fw(t, e, r) {
  if (r || e.hasKey(t)) {
    for (var n = 0; e.hasKey(t + n); )
      n++;
    t += n;
  }
  return e.set(t, !0), t;
}
var Xo = {}, al = {}, Yh = (
  /** @class */
  (function() {
    function t() {
      this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
    }
    return t.prototype.create = function(e, r) {
      this._nonSeriesBoxMasterList = n(Xo, !0), this._normalMasterList = n(al, !1);
      function n(i, a) {
        var o = [];
        return x(i, function(s, u) {
          var l = s.create(e, r);
          o = o.concat(l || []), process.env.NODE_ENV !== "production" && a && x(l, function(f) {
            return N(!f.update);
          });
        }), o;
      }
    }, t.prototype.update = function(e, r) {
      x(this._normalMasterList, function(n) {
        n.update && n.update(e, r);
      });
    }, t.prototype.getCoordinateSystems = function() {
      return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
    }, t.register = function(e, r) {
      if (e === "matrix" || e === "calendar") {
        Xo[e] = r;
        return;
      }
      al[e] = r;
    }, t.get = function(e) {
      return al[e] || Xo[e];
    }, t;
  })()
);
function zw(t) {
  return !!Xo[t];
}
var Hw = 1, Gw = 2, Uw = K();
function py(t) {
  var e = t.getShallow("coord", !0), r = Hw;
  if (e == null) {
    var n = Uw.get(t.type);
    n && n.getCoord2 && (r = Gw, e = n.getCoord2(t));
  }
  return {
    coord: e,
    from: r
  };
}
var oi = 0, Zo = 1, Ww = 2;
function Yw(t, e) {
  var r = t.getShallow("coordinateSystem"), n = t.getShallow("coordinateSystemUsage", !0), i = n != null, a = oi;
  if (r) {
    var o = t.mainType === "series";
    n == null && (n = o ? "data" : "box"), n === "data" ? (a = Zo, o || (process.env.NODE_ENV !== "production" && i && e && ue('coordinateSystemUsage "data" is not supported in non-series components.'), a = oi)) : n === "box" && (a = Ww, !o && !zw(r) && (process.env.NODE_ENV !== "production" && i && e && ue('coordinateSystem "' + r + '" cannot be used' + (' as coordinateSystemUsage "box" for "' + t.type + '" yet.')), a = oi));
  }
  return {
    coordSysType: r,
    kind: a
  };
}
function Xw(t) {
  var e = t.targetModel, r = t.coordSysType, n = t.coordSysProvider, i = t.isDefaultDataCoordSys, a = t.allowNotFound;
  process.env.NODE_ENV !== "production" && N(!!r);
  var o = Yw(e, !0), s = o.kind, u = o.coordSysType;
  if (i && s !== Zo && (s = Zo, u = r), s === oi || u !== r)
    return oi;
  var l = n(r, e);
  return l ? (s === Zo ? (process.env.NODE_ENV !== "production" && N(e.mainType === "series"), e.coordinateSystem = l) : e.boxCoordinateSystem = l, s) : (process.env.NODE_ENV !== "production" && (a || ue(r + " cannot be found for" + (" " + e.type + " (index: " + e.componentIndex + ")."))), oi);
}
var Zw = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.coordSysDims = [], this.axisMap = K(), this.categoryAxisMap = K(), this.coordSysName = e;
    }
    return t;
  })()
);
function $w(t) {
  var e = t.get("coordinateSystem"), r = new Zw(e), n = qw[e];
  if (n)
    return n(t, r, r.axisMap, r.categoryAxisMap), r;
}
var qw = {
  cartesian2d: function(t, e, r, n) {
    var i = t.getReferringComponents("xAxis", wt).models[0], a = t.getReferringComponents("yAxis", wt).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error('xAxis "' + ci(t.get("xAxisIndex"), t.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + ci(t.get("xAxisIndex"), t.get("yAxisId"), 0) + '" not found');
    }
    e.coordSysDims = ["x", "y"], r.set("x", i), r.set("y", a), Hn(i) && (n.set("x", i), e.firstCategoryDimIndex = 0), Hn(a) && (n.set("y", a), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = 1));
  },
  singleAxis: function(t, e, r, n) {
    var i = t.getReferringComponents("singleAxis", wt).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("singleAxis should be specified.");
    e.coordSysDims = ["single"], r.set("single", i), Hn(i) && (n.set("single", i), e.firstCategoryDimIndex = 0);
  },
  polar: function(t, e, r, n) {
    var i = t.getReferringComponents("polar", wt).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    e.coordSysDims = ["radius", "angle"], r.set("radius", a), r.set("angle", o), Hn(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), Hn(o) && (n.set("angle", o), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = 1));
  },
  geo: function(t, e, r, n) {
    e.coordSysDims = ["lng", "lat"];
  },
  parallel: function(t, e, r, n) {
    var i = t.ecModel, a = i.getComponent("parallel", t.get("parallelIndex")), o = e.coordSysDims = a.dimensions.slice();
    x(a.parallelAxisIndex, function(s, u) {
      var l = i.getComponent("parallelAxis", s), f = o[u];
      r.set(f, l), Hn(l) && (n.set(f, l), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = u));
    });
  },
  matrix: function(t, e, r, n) {
    var i = t.getReferringComponents("matrix", wt).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("matrix coordinate system should be specified.");
    e.coordSysDims = ["x", "y"];
    var a = i.getDimensionModel("x"), o = i.getDimensionModel("y");
    r.set("x", a), r.set("y", o), n.set("x", a), n.set("y", o);
  }
};
function Hn(t) {
  return t.get("type") === "category";
}
function Kw(t, e, r) {
  r = r || {};
  var n = r.byIndex, i = r.stackedCoordDimension, a, o, s;
  Qw(e) ? a = e : (o = e.schema, a = o.dimensions, s = e.store);
  var u = !!(t && t.get("stack")), l, f, h, c, v = !0;
  function d(S) {
    return S.type !== "ordinal" && S.type !== "time";
  }
  if (x(a, function(S, b) {
    H(S) && (a[b] = S = {
      name: S
    }), d(S) || (v = !1);
  }), x(a, function(S, b) {
    u && !S.isExtraCoord && (!n && !l && S.ordinalMeta && (l = S), !f && d(S) && (!v || S.coordDim !== "x" && S.coordDim !== "angle") && (!i || i === S.coordDim) && (f = S));
  }), f && !n && !l && (n = !0), f) {
    h = "__\0ecstackresult_" + t.id, c = "__\0ecstackedover_" + t.id, l && (l.createInvertedIndices = !0);
    var g = f.coordDim, m = f.type, p = 0;
    x(a, function(S) {
      S.coordDim === g && p++;
    });
    var y = {
      name: h,
      coordDim: g,
      coordDimIndex: p,
      type: m,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, _ = {
      name: c,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: c,
      coordDimIndex: p + 1,
      type: m,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (y.storeDimIndex = s.ensureCalculationDimension(c, m), _.storeDimIndex = s.ensureCalculationDimension(h, m)), o.appendCalculationDimension(y), o.appendCalculationDimension(_)) : (a.push(y), a.push(_));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: c,
    stackResultDimension: h
  };
}
function Qw(t) {
  return !cy(t.schema);
}
function xa(t, e) {
  return !!e && e === t.getCalculationInfo("stackedDimension");
}
function Jw(t, e) {
  return xa(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
}
function jw(t, e) {
  var r = t.get("coordinateSystem"), n = Yh.get(r), i;
  return e && e.coordSysDims && (i = q(e.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = e.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = Tw(u);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function ex(t, e, r) {
  var n, i;
  return r && x(t, function(a, o) {
    var s = a.coordDim, u = r.categoryAxisMap.get(s);
    u && (n == null && (n = o), a.ordinalMeta = u.getOrdinalMeta(), e && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (t[n].otherDims.itemName = 0), n;
}
function tx(t, e, r) {
  r = r || {};
  var n = e.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === ht;
  var o = $w(e), s = jw(e, o), u = r.useEncodeDefaulter, l = Q(u) ? u : u ? Ae(fw, s, e) : null, f = {
    coordDimensions: s,
    generateCoord: r.generateCoord,
    encodeDefine: e.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = Bw(i, f), c = ex(h.dimensions, r.createInvertedIndices, o), v = a ? null : n.getSharedDataStore(h), d = Kw(e, {
    schema: h,
    store: v
  }), g = new kw(h, e);
  g.setCalculationInfo(d);
  var m = c != null && rx(i) ? function(p, y, _, S) {
    return S === c ? _ : this.defaultDimValueGetter(p, y, _, S);
  } : null;
  return g.hasItemOption = !1, g.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : v,
    null,
    m
  ), g;
}
function rx(t) {
  if (t.sourceFormat === ht) {
    var e = nx(t.data || []);
    return !V(za(e));
  }
}
function nx(t) {
  for (var e = 0; e < t.length && t[e] == null; )
    e++;
  return t[e];
}
var ix = Math.round(Math.random() * 10);
function hu(t) {
  return [t || "", ix++].join("_");
}
function ax(t) {
  var e = {};
  t.registerSubTypeDefaulter = function(r, n) {
    var i = Ut(r);
    e[i.main] = n;
  }, t.determineSubType = function(r, n) {
    var i = n.type;
    if (!i) {
      var a = Ut(r).main;
      t.hasSubTypes(r) && e[a] && (i = e[a](n));
    }
    return i;
  };
}
function ox(t, e) {
  t.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = r(o), f = l.graph, h = l.noEntryList, c = {};
    for (x(a, function(y) {
      c[y] = !0;
    }); h.length; ) {
      var v = h.pop(), d = f[v], g = !!c[v];
      g && (s.call(u, v, d.originalDeps.slice()), delete c[v]), x(d.successor, g ? p : m);
    }
    x(c, function() {
      var y = "";
      throw process.env.NODE_ENV !== "production" && (y = vs("Circular dependency may exists: ", c, a, o)), new Error(y);
    });
    function m(y) {
      f[y].entryCount--, f[y].entryCount === 0 && h.push(y);
    }
    function p(y) {
      c[y] = !0, m(y);
    }
  };
  function r(a) {
    var o = {}, s = [];
    return x(a, function(u) {
      var l = n(o, u), f = l.originalDeps = e(u), h = i(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), x(h, function(c) {
        le(l.predecessor, c) < 0 && l.predecessor.push(c);
        var v = n(o, c);
        le(v.successor, c) < 0 && v.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function n(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function i(a, o) {
    var s = [];
    return x(a, function(u) {
      le(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function sx(t, e) {
  return ce(ce({}, t, !0), e, !0);
}
var ux = Math.log(2);
function Df(t, e, r, n, i, a) {
  var o = n + "-" + i, s = t.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (e === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~i) / ux);
    return t[r][u];
  }
  for (var l = n | 1 << r, f = r + 1; n & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & i || (h += (v % 2 ? -1 : 1) * t[r][c] * Df(t, e - 1, f, l, i | d, a), v++);
  }
  return a[o] = h, h;
}
function ld(t, e) {
  var r = [
    [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
    [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
    [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
    [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
    [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
    [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
    [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
    [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]
  ], n = {}, i = Df(r, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Df(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * e[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var bs = "___zrEVENTSAVED", ol = [];
function lx(t, e, r, n, i) {
  return Ef(ol, e, n, i, !0) && Ef(t, r, ol[0], ol[1]);
}
function fx(t, e) {
  t && r(t), e && r(e);
  function r(n) {
    var i = n[bs];
    i && (i.clearMarkers && i.clearMarkers(), delete n[bs]);
  }
}
function Ef(t, e, r, n, i) {
  if (e.getBoundingClientRect && ee.domSupported && !gy(e)) {
    var a = e[bs] || (e[bs] = {}), o = hx(e, a), s = cx(o, a, i);
    if (s)
      return s(t, r, n), !0;
  }
  return !1;
}
function hx(t, e) {
  var r = e.markers;
  if (r)
    return r;
  r = e.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[u] + ":0",
      i[l] + ":0",
      n[1 - u] + ":auto",
      i[1 - l] + ":auto",
      ""
    ].join("!important;"), t.appendChild(o), r.push(o);
  }
  return e.clearMarkers = function() {
    x(r, function(f) {
      f.parentNode && f.parentNode.removeChild(f);
    });
  }, r;
}
function cx(t, e, r) {
  for (var n = r ? "invTrans" : "trans", i = e[n], a = e.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = t[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(t[l].offsetLeft, t[l].offsetTop);
  }
  return u && i ? i : (e.srcCoords = o, e[n] = r ? ld(s, o) : ld(o, s));
}
function gy(t) {
  return t.nodeName.toUpperCase() === "CANVAS";
}
var vx = /([&<>"'])/g, dx = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function tt(t) {
  return t == null ? "" : (t + "").replace(vx, function(e, r) {
    return dx[r];
  });
}
const px = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, gx = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var Ts = "ZH", Xh = "EN", si = Xh, $o = {}, Zh = {}, my = ee.domSupported ? (function() {
  var t = (document.documentElement.lang || navigator.language || navigator.browserLanguage || si).toUpperCase();
  return t.indexOf(Ts) > -1 ? Ts : si;
})() : si;
function yy(t, e) {
  t = t.toUpperCase(), Zh[t] = new xe(e), $o[t] = e;
}
function mx(t) {
  if (H(t)) {
    var e = $o[t.toUpperCase()] || {};
    return t === Ts || t === Xh ? ie(e) : ce(ie(e), ie($o[si]), !1);
  } else
    return ce(ie(t), ie($o[si]), !1);
}
function yx(t) {
  return Zh[t];
}
function _x() {
  return Zh[si];
}
yy(Xh, px);
yy(Ts, gx);
var Sx = null;
function Ze() {
  return Sx;
}
function _y(t, e) {
  var r = Ze(), n = e.breakOption, i = e.breakParsed;
  return !i && r && (i = r.parseAxisBreakOption(n, t)), i;
}
function ws(t) {
  var e = t.brk;
  return e ? e.breaks : [];
}
function Dn(t) {
  var e = t.brk;
  return e ? e.hasBreaks() : !1;
}
var $h = 1e3, qh = $h * 60, ca = qh * 60, xt = ca * 24, fd = xt * 365, bx = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
}, qo = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}"
}, Tx = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", yo = "{yyyy}-{MM}-{dd}", hd = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: yo,
  hour: yo + " " + qo.hour,
  minute: yo + " " + qo.minute,
  second: yo + " " + qo.second,
  millisecond: Tx
}, ot = ["year", "month", "day", "hour", "minute", "second", "millisecond"], xx = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function Cx(t) {
  return !H(t) && !Q(t) ? Dx(t) : t;
}
function Dx(t) {
  t = t || {};
  var e = {}, r = !0;
  return x(ot, function(n) {
    r && (r = t[n] == null);
  }), x(ot, function(n, i) {
    var a = t[n];
    e[n] = {};
    for (var o = null, s = i; s >= 0; s--) {
      var u = ot[s], l = W(a) && !V(a) ? a[u] : a, f = void 0;
      V(l) ? (f = l.slice(), o = f[0] || "") : H(l) ? (o = l, f = [o]) : (o == null ? o = qo[n] : bx[u].test(o) || (o = e[u][u][0] + " " + o), f = [o], r && (f[1] = "{primary|" + o + "}")), e[n][u] = f;
    }
  }), e;
}
function Sr(t, e) {
  return t += "", "0000".substr(0, e - t.length) + t;
}
function va(t) {
  switch (t) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return t;
  }
}
function Ex(t) {
  return t === va(t);
}
function Mx(t) {
  switch (t) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function cu(t, e, r, n) {
  var i = Ai(t), a = i[Sy(r)](), o = i[Kh(r)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = i[Qh(r)](), l = i["get" + (r ? "UTC" : "") + "Day"](), f = i[Jh(r)](), h = (f - 1) % 12 + 1, c = i[jh(r)](), v = i[ec(r)](), d = i[tc(r)](), g = f >= 12 ? "pm" : "am", m = g.toUpperCase(), p = n instanceof xe ? n : yx(n || my) || _x(), y = p.getModel("time"), _ = y.get("month"), S = y.get("monthAbbr"), b = y.get("dayOfWeek"), T = y.get("dayOfWeekAbbr");
  return (e || "").replace(/{a}/g, g + "").replace(/{A}/g, m + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Sr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, Sr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Sr(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, b[l]).replace(/{ee}/g, T[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Sr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Sr(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Sr(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, Sr(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Sr(d, 3)).replace(/{S}/g, d + "");
}
function Ax(t, e, r, n, i) {
  var a = null;
  if (H(r))
    a = r;
  else if (Q(r)) {
    var o = {
      time: t.time,
      level: t.time ? t.time.level : 0
    }, s = Ze();
    s && s.makeAxisLabelFormatterParamBreak(o, t.break), a = r(t.value, e, o);
  } else {
    var u = t.time;
    if (u) {
      var l = r[u.lowerTimeUnit][u.upperTimeUnit];
      a = l[Math.min(u.level, l.length - 1)] || "";
    } else {
      var f = ui(t.value, i);
      a = r[f][f][0];
    }
  }
  return cu(new Date(t.value), a, i, n);
}
function ui(t, e) {
  var r = Ai(t), n = r[Kh(e)]() + 1, i = r[Qh(e)](), a = r[Jh(e)](), o = r[jh(e)](), s = r[ec(e)](), u = r[tc(e)](), l = u === 0, f = l && s === 0, h = f && o === 0, c = h && a === 0, v = c && i === 1, d = v && n === 1;
  return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function Mf(t, e, r) {
  switch (e) {
    case "year":
      t[by(r)](0);
    case "month":
      t[Ty(r)](1);
    case "day":
      t[wy(r)](0);
    case "hour":
      t[xy(r)](0);
    case "minute":
      t[Cy(r)](0);
    case "second":
      t[Dy(r)](0);
  }
  return t;
}
function Sy(t) {
  return t ? "getUTCFullYear" : "getFullYear";
}
function Kh(t) {
  return t ? "getUTCMonth" : "getMonth";
}
function Qh(t) {
  return t ? "getUTCDate" : "getDate";
}
function Jh(t) {
  return t ? "getUTCHours" : "getHours";
}
function jh(t) {
  return t ? "getUTCMinutes" : "getMinutes";
}
function ec(t) {
  return t ? "getUTCSeconds" : "getSeconds";
}
function tc(t) {
  return t ? "getUTCMilliseconds" : "getMilliseconds";
}
function Lx(t) {
  return t ? "setUTCFullYear" : "setFullYear";
}
function by(t) {
  return t ? "setUTCMonth" : "setMonth";
}
function Ty(t) {
  return t ? "setUTCDate" : "setDate";
}
function wy(t) {
  return t ? "setUTCHours" : "setHours";
}
function xy(t) {
  return t ? "setUTCMinutes" : "setMinutes";
}
function Cy(t) {
  return t ? "setUTCSeconds" : "setSeconds";
}
function Dy(t) {
  return t ? "setUTCMilliseconds" : "setMilliseconds";
}
function Ey(t) {
  if (!lm(t))
    return H(t) ? t : "-";
  var e = (t + "").split(".");
  return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : "");
}
function My(t, e) {
  return t = (t || "").toLowerCase().replace(/-(.)/g, function(r, n) {
    return n.toUpperCase();
  }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
}
var vu = hh;
function Af(t, e, r) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && Gt(f) ? f : "-";
  }
  function a(f) {
    return Qt(f);
  }
  var o = e === "time", s = t instanceof Date;
  if (o || s) {
    var u = o ? Ai(t) : t;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else return cu(u, n, r);
  }
  if (e === "ordinal")
    return rs(t) ? i(t) : we(t) && a(t) ? t + "" : "-";
  var l = cs(t);
  return a(l) ? Ey(l) : rs(t) ? i(t) : typeof t == "boolean" ? t + "" : "-";
}
var cd = ["a", "b", "c", "d", "e", "f", "g"], sl = function(t, e) {
  return "{" + t + (e ?? "") + "}";
};
function Ay(t, e, r) {
  V(e) || (e = [e]);
  var n = e.length;
  if (!n)
    return "";
  for (var i = e[0].$vars || [], a = 0; a < i.length; a++) {
    var o = cd[a];
    t = t.replace(sl(o), sl(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = e[s][i[u]];
      t = t.replace(sl(cd[u], s), r ? tt(l) : l);
    }
  return t;
}
function Ix(t, e) {
  var r = H(t) ? {
    color: t,
    extraCssText: e
  } : t || {}, n = r.color, i = r.type;
  e = r.extraCssText;
  var a = r.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + tt(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + tt(n) + ";" + (e || "") + '"></span>';
  var o = r.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: i === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: n
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: n
    }
  };
}
function En(t, e) {
  return e = e || "transparent", H(t) ? t : W(t) && t.colorStops && (t.colorStops[0] || {}).color || e;
}
var Ko = x, Ox = ["left", "right", "top", "bottom", "width", "height"], _o = [["width", "left", "right"], ["height", "top", "bottom"]];
function rc(t, e, r, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  e.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = e.childAt(l + 1), c = h && h.getBoundingRect(), v, d;
    if (t === "horizontal") {
      var g = f.width + (c ? -c.x + f.x : 0);
      v = a + g, v > n || u.newline ? (a = 0, v = g, o += s + r, s = f.height) : s = Math.max(s, f.height);
    } else {
      var m = f.height + (c ? -c.y + f.y : 0);
      d = o + m, d > i || u.newline ? (a += s + r, o = 0, d = m, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), t === "horizontal" ? a = v + r : o = d + r);
  });
}
var da = rc;
Ae(rc, "vertical");
Ae(rc, "horizontal");
function Px(t, e) {
  return {
    left: t.getShallow("left", e),
    top: t.getShallow("top", e),
    right: t.getShallow("right", e),
    bottom: t.getShallow("bottom", e),
    width: t.getShallow("width", e),
    height: t.getShallow("height", e)
  };
}
function Ca(t, e, r) {
  r = vu(r || 0);
  var n = e.width, i = e.height, a = zt(t.left, n), o = zt(t.top, i), s = zt(t.right, n), u = zt(t.bottom, i), l = zt(t.width, n), f = zt(t.height, i), h = r[2] + r[0], c = r[1] + r[3], v = t.aspect;
  switch (isNaN(l) && (l = n - s - c - a), isNaN(f) && (f = i - u - h - o), v != null && (isNaN(l) && isNaN(f) && (v > n / i ? l = n * 0.8 : f = i * 0.8), isNaN(l) && (l = v * f), isNaN(f) && (f = l / v)), isNaN(a) && (a = n - s - l - c), isNaN(o) && (o = i - u - f - h), t.left || t.right) {
    case "center":
      a = n / 2 - l / 2 - r[3];
      break;
    case "right":
      a = n - l - c;
      break;
  }
  switch (t.top || t.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - r[0];
      break;
    case "bottom":
      o = i - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = n - c - a - (s || 0)), isNaN(f) && (f = i - h - o - (u || 0));
  var d = new j((e.x || 0) + a + r[3], (e.y || 0) + o + r[0], l, f);
  return d.margin = r, d;
}
var ul = {
  rect: 1
};
function Ly(t, e, r) {
  var n, i, a, o = t.boxCoordinateSystem, s;
  if (o) {
    var u = py(t), l = u.coord, f = u.from;
    if (o.dataToLayout) {
      a = ul.rect, s = f;
      var h = o.dataToLayout(l);
      n = h.contentRect || h.rect;
    } else
      process.env.NODE_ENV !== "production" && ue(t.type + "[" + t.componentIndex + "]" + (" layout based on " + o.type + " is not supported."));
  }
  return a == null && (a = ul.rect), a === ul.rect && (n || (n = {
    x: 0,
    y: 0,
    width: e.getWidth(),
    height: e.getHeight()
  }), i = [n.x + n.width / 2, n.y + n.height / 2]), {
    type: a,
    refContainer: n,
    refPoint: i,
    boxCoordFrom: s
  };
}
function Da(t) {
  var e = t.layoutMode || t.constructor.layoutMode;
  return W(e) ? e : e ? {
    type: e
  } : null;
}
function Br(t, e, r) {
  var n = r && r.ignoreSize;
  !V(n) && (n = [n, n]);
  var i = o(_o[0], 0), a = o(_o[1], 1);
  u(_o[0], t, i), u(_o[1], t, a);
  function o(l, f) {
    var h = {}, c = 0, v = {}, d = 0, g = 2;
    if (Ko(l, function(y) {
      v[y] = t[y];
    }), Ko(l, function(y) {
      lt(e, y) && (h[y] = v[y] = e[y]), s(h, y) && c++, s(v, y) && d++;
    }), n[f])
      return s(e, l[1]) ? v[l[2]] = null : s(e, l[2]) && (v[l[1]] = null), v;
    if (d === g || !c)
      return v;
    if (c >= g)
      return h;
    for (var m = 0; m < l.length; m++) {
      var p = l[m];
      if (!lt(h, p) && lt(t, p)) {
        h[p] = t[p];
        break;
      }
    }
    return h;
  }
  function s(l, f) {
    return l[f] != null && l[f] !== "auto";
  }
  function u(l, f, h) {
    Ko(l, function(c) {
      f[c] = h[c];
    });
  }
}
function Wa(t) {
  return Nx({}, t);
}
function Nx(t, e) {
  return e && t && Ko(Ox, function(r) {
    lt(e, r) && (t[r] = e[r]);
  }), t;
}
var Rx = ye(), fe = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r, n, i) {
      var a = t.call(this, r, n, i) || this;
      return a.uid = hu("ec_cpt_model"), a;
    }
    return e.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i);
    }, e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Da(this), a = i ? Wa(r) : {}, o = n.getTheme();
      ce(r, o.get(this.mainType)), ce(r, this.getDefaultOption()), i && Br(r, a, i);
    }, e.prototype.mergeOption = function(r, n) {
      ce(this.option, r, !0);
      var i = Da(this);
      i && Br(this.option, r, i);
    }, e.prototype.optionUpdated = function(r, n) {
    }, e.prototype.getDefaultOption = function() {
      var r = this.constructor;
      if (!d1(r))
        return r.defaultOption;
      var n = Rx(this);
      if (!n.defaultOption) {
        for (var i = [], a = r; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, u = i.length - 1; u >= 0; u--)
          s = ce(s, i[u], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, e.prototype.getReferringComponents = function(r, n) {
      var i = r + "Index", a = r + "Id";
      return Ha(this.ecModel, r, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, e.prototype.getBoxLayoutParams = function() {
      return Px(this, !1);
    }, e.prototype.getZLevelKey = function() {
      return "";
    }, e.prototype.setZLevel = function(r) {
      this.option.zlevel = r;
    }, e.protoInitialize = (function() {
      var r = e.prototype;
      r.type = "component", r.id = "", r.name = "", r.mainType = "", r.subType = "", r.componentIndex = 0;
    })(), e;
  })(xe)
);
Ng(fe, xe);
$s(fe);
ax(fe);
ox(fe, kx);
function kx(t) {
  var e = [];
  return x(fe.getClassesByMainType(t), function(r) {
    e = e.concat(r.dependencies || r.prototype.dependencies || []);
  }), e = q(e, function(r) {
    return Ut(r).main;
  }), t !== "dataset" && le(e, "dataset") <= 0 && e.unshift("dataset"), e;
}
var vd = ye();
ye();
var nc = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getColorFromPalette = function(e, r, n) {
      var i = $e(this.get("color", !0)), a = this.get("colorLayer", !0);
      return Vx(this, vd, i, a, e, r, n);
    }, t.prototype.clearColorPalette = function() {
      Fx(this, vd);
    }, t;
  })()
);
function Bx(t, e) {
  for (var r = t.length, n = 0; n < r; n++)
    if (t[n].length > e)
      return t[n];
  return t[r - 1];
}
function Vx(t, e, r, n, i, a, o) {
  a = a || t;
  var s = e(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(i))
    return l[i];
  var f = o == null || !n ? r : Bx(n, o);
  if (f = f || r, !(!f || !f.length)) {
    var h = f[u];
    return i && (l[i] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function Fx(t, e) {
  e(t).paletteIdx = 0, e(t).paletteNameMap = {};
}
var zx = /\{@(.+?)\}/g, Hx = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getDataParams = function(e, r) {
      var n = this.getData(r), i = this.getRawValue(e, r), a = n.getRawIndex(e), o = n.getName(e), s = n.getRawDataItem(e), u = n.getItemVisual(e, "style"), l = u && u[n.getItemVisual(e, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, c = h === "series", v = n.userOutput && n.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: c ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: c ? this.id : null,
        seriesName: c ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: r,
        value: i,
        color: l,
        borderColor: f,
        dimensionNames: v ? v.fullDimensions : null,
        encode: v ? v.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, t.prototype.getFormattedLabel = function(e, r, n, i, a, o) {
      r = r || "normal";
      var s = this.getData(n), u = this.getDataParams(e, n);
      if (o && (u.value = o.interpolatedValue), i != null && V(u.value) && (u.value = u.value[i]), !a) {
        var l = s.getItemModel(e);
        a = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"]);
      }
      if (Q(a))
        return u.status = r, u.dimensionIndex = i, a(u);
      if (H(a)) {
        var f = Ay(a, u);
        return f.replace(zx, function(h, c) {
          var v = c.length, d = c;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && ue("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
          var g = bi(s, e, d);
          if (o && V(o.interpolatedValue)) {
            var m = s.getDimensionIndex(d);
            m >= 0 && (g = o.interpolatedValue[m]);
          }
          return g != null ? g + "" : "";
        });
      }
    }, t.prototype.getRawValue = function(e, r) {
      return bi(this.getData(r), e);
    }, t.prototype.formatTooltip = function(e, r, n) {
    }, t;
  })()
);
function dd(t) {
  var e, r;
  return W(t) ? t.type ? r = t : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + vs(t)) : e = t, {
    text: e,
    // markers: markers || markersExisting,
    frag: r
  };
}
function pa(t) {
  return new Gx(t);
}
var Gx = (
  /** @class */
  (function() {
    function t(e) {
      e = e || {}, this._reset = e.reset, this._plan = e.plan, this._count = e.count, this._onDirty = e.onDirty, this._dirty = !0;
    }
    return t.prototype.perform = function(e) {
      var r = this._upstream, n = e && e.skip;
      if (this._dirty && r) {
        var i = this.context;
        i.data = i.outputData = r.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !n && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(e && e.modBy), l = e && e.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(y) {
        return !(y >= 1) && (y = 1), y;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = u, this._modDataCount = l;
      var c = e && e.step;
      if (r ? (process.env.NODE_ENV !== "production" && N(r._outputDueEnd != null), this._dueEnd = r._outputDueEnd) : (process.env.NODE_ENV !== "production" && N(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
        if (!n && (h || v < d)) {
          var g = this._progress;
          if (V(g))
            for (var m = 0; m < g.length; m++)
              this._doProgress(g[m], v, d, u, l);
          else
            this._doProgress(g, v, d, u, l);
        }
        this._dueIndex = d;
        var p = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && N(p >= this._outputDueEnd), this._outputDueEnd = p;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, t.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, t.prototype._doProgress = function(e, r, n, i, a) {
      pd.reset(r, n, i, a), this._callingProgress = e, this._callingProgress({
        start: r,
        end: n,
        count: n - r,
        next: pd.next
      }, this.context);
    }, t.prototype._doReset = function(e) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var r, n;
      !e && this._reset && (r = this._reset(this.context), r && r.progress && (n = r.forceFirstProgress, r = r.progress), V(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, t.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, t.prototype.pipe = function(e) {
      process.env.NODE_ENV !== "production" && N(e && !e._disposed && e !== this), (this._downstream !== e || this._dirty) && (this._downstream = e, e._upstream = this, e.dirty());
    }, t.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, t.prototype.getUpstream = function() {
      return this._upstream;
    }, t.prototype.getDownstream = function() {
      return this._downstream;
    }, t.prototype.setOutputEnd = function(e) {
      this._outputDueEnd = this._settedOutputEnd = e;
    }, t;
  })()
), pd = /* @__PURE__ */ (function() {
  var t, e, r, n, i, a = {
    reset: function(u, l, f, h) {
      e = u, t = l, r = f, n = h, i = Math.ceil(n / r), a.next = r > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return e < t ? e++ : null;
  }
  function s() {
    var u = e % i * r + Math.ceil(e / i), l = e >= t ? null : u < n ? u : e;
    return e++, l;
  }
})(), Ux = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getRawData = function() {
      throw new Error("not supported");
    }, t.prototype.getRawDataItem = function(e) {
      throw new Error("not supported");
    }, t.prototype.cloneRawData = function() {
    }, t.prototype.getDimensionInfo = function(e) {
    }, t.prototype.cloneAllDimensionInfo = function() {
    }, t.prototype.count = function() {
    }, t.prototype.retrieveValue = function(e, r) {
    }, t.prototype.retrieveValueFromItem = function(e, r) {
    }, t.prototype.convertValue = function(e, r) {
      return Yo(e, r);
    }, t;
  })()
);
function Wx(t, e) {
  var r = new Ux(), n = t.data, i = r.sourceFormat = t.sourceFormat, a = t.startIndex, o = "";
  t.seriesLayoutBy !== qt && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), et(o));
  var s = [], u = {}, l = t.dimensionsDefine;
  if (l)
    x(l, function(g, m) {
      var p = g.name, y = {
        index: m,
        name: p,
        displayName: g.displayName
      };
      if (s.push(y), p != null) {
        var _ = "";
        lt(u, p) && (process.env.NODE_ENV !== "production" && (_ = 'dimension name "' + p + '" duplicated.'), et(_)), u[p] = y;
      }
    });
  else
    for (var f = 0; f < t.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = oy(i, qt);
  e.__isBuiltIn && (r.getRawDataItem = function(g) {
    return h(n, a, s, g);
  }, r.getRawData = Se(Yx, null, t)), r.cloneRawData = Se(Xx, null, t);
  var c = sy(i, qt);
  r.count = Se(c, null, n, a, s);
  var v = uy(i);
  r.retrieveValue = function(g, m) {
    var p = h(n, a, s, g);
    return d(p, m);
  };
  var d = r.retrieveValueFromItem = function(g, m) {
    if (g != null) {
      var p = s[m];
      if (p)
        return v(g, m, p.name);
    }
  };
  return r.getDimensionInfo = Se(Zx, null, s, u), r.cloneAllDimensionInfo = Se($x, null, s), r;
}
function Yx(t) {
  var e = t.sourceFormat;
  if (!ic(e)) {
    var r = "";
    process.env.NODE_ENV !== "production" && (r = "`getRawData` is not supported in source format " + e), et(r);
  }
  return t.data;
}
function Xx(t) {
  var e = t.sourceFormat, r = t.data;
  if (!ic(e)) {
    var n = "";
    process.env.NODE_ENV !== "production" && (n = "`cloneRawData` is not supported in source format " + e), et(n);
  }
  if (e === Ge) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(r[a].slice());
    return i;
  } else if (e === Ot) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(k({}, r[a]));
    return i;
  }
}
function Zx(t, e, r) {
  if (r != null) {
    if (we(r) || !isNaN(r) && !lt(e, r))
      return t[r];
    if (lt(e, r))
      return e[r];
  }
}
function $x(t) {
  return ie(t);
}
var Iy = K();
function qx(t) {
  t = ie(t);
  var e = t.type, r = "";
  e || (process.env.NODE_ENV !== "production" && (r = "Must have a `type` when `registerTransform`."), et(r));
  var n = e.split(":");
  n.length !== 2 && (process.env.NODE_ENV !== "production" && (r = 'Name must include namespace like "ns:regression".'), et(r));
  var i = !1;
  n[0] === "echarts" && (e = n[1], i = !0), t.__isBuiltIn = i, Iy.set(e, t);
}
function Kx(t, e, r) {
  var n = $e(t), i = n.length, a = "";
  i || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), et(a));
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    e = Qx(u, e, r, i === 1 ? null : o), o !== s - 1 && (e.length = Math.max(e.length, 1));
  }
  return e;
}
function Qx(t, e, r, n) {
  var i = "";
  e.length || (process.env.NODE_ENV !== "production" && (i = "Must have at least one upstream dataset."), et(i)), W(t) || (process.env.NODE_ENV !== "production" && (i = "transform declaration must be an object rather than " + typeof t + "."), et(i));
  var a = t.type, o = Iy.get(a);
  o || (process.env.NODE_ENV !== "production" && (i = 'Can not find transform on type "' + a + '".'), et(i));
  var s = q(e, function(f) {
    return Wx(f, o);
  }), u = $e(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: ie(t.config)
  }));
  if (process.env.NODE_ENV !== "production" && t.print) {
    var l = q(u, function(f) {
      var h = n != null ? " === pipe index: " + n : "";
      return ["=== dataset index: " + r.datasetIndex + h + " ===", "- transform result data:", vs(f.data), "- transform result dimensions:", vs(f.dimensions)].join(`
`);
    }).join(`
`);
    cm(l);
  }
  return q(u, function(f, h) {
    var c = "";
    W(f) || (process.env.NODE_ENV !== "production" && (c = "A transform should not return some empty results."), et(c)), f.data || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be not be null or undefined"), et(c));
    var v = ny(f.data);
    ic(v) || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be array rows or object rows."), et(c));
    var d, g = e[0];
    if (g && h === 0 && !f.dimensions) {
      var m = g.startIndex;
      m && (f.data = g.data.slice(0, m).concat(f.data)), d = {
        seriesLayoutBy: qt,
        sourceHeader: m,
        dimensions: g.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: qt,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return xf(f.data, d, null);
  });
}
function ic(t) {
  return t === Ge || t === Ot;
}
var Jx = (
  /** @class */
  (function() {
    function t(e) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = e;
    }
    return t.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, t.prototype._setLocalSource = function(e, r) {
      this._sourceList = e, this._upstreamSignList = r, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, t.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, t.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, t.prototype._createSource = function() {
      this._setLocalSource([], []);
      var e = this._sourceHost, r = this._getUpstreamSourceManagers(), n = !!r.length, i, a;
      if (zi(e)) {
        var o = e, s = void 0, u = void 0, l = void 0;
        if (n) {
          var f = r[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = qe(s) ? cr : ht, a = [];
        var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = Y(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = Y(h.sourceHeader, c.sourceHeader), g = Y(h.dimensions, c.dimensions), m = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || g;
        i = m ? [xf(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: g
        }, u)] : [];
      } else {
        var p = e;
        if (n) {
          var y = this._applyTransform(r);
          i = y.sourceList, a = y.upstreamSignList;
        } else {
          var _ = p.get("source", !0);
          i = [xf(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && N(i && a), this._setLocalSource(i, a);
    }, t.prototype._applyTransform = function(e) {
      var r = this._sourceHost, n = r.get("transform", !0), i = r.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && N(i != null || n != null), i != null) {
        var a = "";
        e.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), gd(a));
      }
      var o, s = [], u = [];
      return x(e, function(l) {
        l.prepareSource();
        var f = l.getSource(i || 0), h = "";
        i != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + i), gd(h)), s.push(f), u.push(l._getVersionSign());
      }), n ? o = Kx(n, s, {
        datasetIndex: r.componentIndex
      }) : i != null && (o = [vw(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, t.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var e = this._getUpstreamSourceManagers(), r = 0; r < e.length; r++) {
        var n = e[r];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          n._isDirty() || this._upstreamSignList[r] !== n._getVersionSign()
        )
          return !0;
      }
    }, t.prototype.getSource = function(e) {
      e = e || 0;
      var r = this._sourceList[e];
      if (!r) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(e);
      }
      return r;
    }, t.prototype.getSharedDataStore = function(e) {
      process.env.NODE_ENV !== "production" && N(zi(this._sourceHost), "Can only call getDataStore on series source manager.");
      var r = e.makeStoreSchema();
      return this._innerGetDataStore(r.dimensions, e.source, r.hash);
    }, t.prototype._innerGetDataStore = function(e, r, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        zi(this._sourceHost) && u ? s = u._innerGetDataStore(e, r, n) : (s = new Cf(), s.initData(new ay(r, e.length), e)), o[n] = s;
      }
      return s;
    }, t.prototype._getUpstreamSourceManagers = function() {
      var e = this._sourceHost;
      if (zi(e)) {
        var r = ey(e);
        return r ? [r.getSourceManager()] : [];
      } else
        return q(hw(e), function(n) {
          return n.getSourceManager();
        });
    }, t.prototype._getSourceMetaRawOption = function() {
      var e = this._sourceHost, r, n, i;
      if (zi(e))
        r = e.get("seriesLayoutBy", !0), n = e.get("sourceHeader", !0), i = e.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = e;
        r = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: r,
        sourceHeader: n,
        dimensions: i
      };
    }, t;
  })()
);
function zi(t) {
  return t.mainType === "series";
}
function gd(t) {
  throw new Error(t);
}
var Z = {
  color: {},
  darkColor: {},
  size: {}
}, Ce = Z.color = {
  theme: ["#5070dd", "#b6d634", "#505372", "#ff994d", "#0ca8df", "#ffd10a", "#fb628b", "#785db0", "#3fbe95"],
  neutral00: "#fff",
  neutral05: "#f4f7fd",
  neutral10: "#e8ebf0",
  neutral15: "#dbdee4",
  neutral20: "#cfd2d7",
  neutral25: "#c3c5cb",
  neutral30: "#b7b9be",
  neutral35: "#aaacb2",
  neutral40: "#9ea0a5",
  neutral45: "#929399",
  neutral50: "#86878c",
  neutral55: "#797b7f",
  neutral60: "#6d6e73",
  neutral65: "#616266",
  neutral70: "#54555a",
  neutral75: "#48494d",
  neutral80: "#3c3c41",
  neutral85: "#303034",
  neutral90: "#232328",
  neutral95: "#17171b",
  neutral99: "#000",
  accent05: "#eff1f9",
  accent10: "#e0e4f2",
  accent15: "#d0d6ec",
  accent20: "#c0c9e6",
  accent25: "#b1bbdf",
  accent30: "#a1aed9",
  accent35: "#91a0d3",
  accent40: "#8292cc",
  accent45: "#7285c6",
  accent50: "#6578ba",
  accent55: "#5c6da9",
  accent60: "#536298",
  accent65: "#4a5787",
  accent70: "#404c76",
  accent75: "#374165",
  accent80: "#2e3654",
  accent85: "#252b43",
  accent90: "#1b2032",
  accent95: "#121521",
  transparent: "rgba(0,0,0,0)",
  highlight: "rgba(255,231,130,0.8)"
};
k(Ce, {
  primary: Ce.neutral80,
  secondary: Ce.neutral70,
  tertiary: Ce.neutral60,
  quaternary: Ce.neutral50,
  disabled: Ce.neutral20,
  border: Ce.neutral30,
  borderTint: Ce.neutral20,
  borderShade: Ce.neutral40,
  background: Ce.neutral05,
  backgroundTint: "rgba(234,237,245,0.5)",
  backgroundTransparent: "rgba(255,255,255,0)",
  backgroundShade: Ce.neutral10,
  shadow: "rgba(0,0,0,0.2)",
  shadowTint: "rgba(129,130,136,0.2)",
  axisLine: Ce.neutral70,
  axisLineTint: Ce.neutral40,
  axisTick: Ce.neutral70,
  axisTickMinor: Ce.neutral60,
  axisLabel: Ce.neutral70,
  axisSplitLine: Ce.neutral15,
  axisMinorSplitLine: Ce.neutral05
});
for (var fn in Ce)
  if (Ce.hasOwnProperty(fn)) {
    var md = Ce[fn];
    fn === "theme" ? Z.darkColor.theme = Ce.theme.slice() : fn === "highlight" ? Z.darkColor.highlight = "rgba(255,231,130,0.4)" : fn.indexOf("accent") === 0 ? Z.darkColor[fn] = tf(md, null, function(t) {
      return t * 0.5;
    }, function(t) {
      return Math.min(1, 1.3 - t);
    }) : Z.darkColor[fn] = tf(md, null, function(t) {
      return t * 0.9;
    }, function(t) {
      return 1 - Math.pow(t, 1.5);
    });
  }
Z.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
var jx = "line-height:1";
function Oy(t) {
  var e = t.lineHeight;
  return e == null ? jx : "line-height:" + tt(e + "") + "px";
}
function Py(t, e) {
  var r = t.color || Z.color.tertiary, n = t.fontSize || 12, i = t.fontWeight || "400", a = t.color || Z.color.secondary, o = t.fontSize || 14, s = t.fontWeight || "900";
  return e === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + tt(n + "") + "px;color:" + tt(r) + ";font-weight:" + tt(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + tt(o + "") + "px;color:" + tt(a) + ";font-weight:" + tt(s + "")
  } : {
    nameStyle: {
      fontSize: n,
      fill: r,
      fontWeight: i
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var eC = [0, 10, 20, 30], tC = ["", `
`, `

`, `


`];
function Ea(t, e) {
  return e.type = t, e;
}
function Lf(t) {
  return t.type === "section";
}
function Ny(t) {
  return Lf(t) ? rC : nC;
}
function Ry(t) {
  if (Lf(t)) {
    var e = 0, r = t.blocks.length, n = r > 1 || r > 0 && !t.noHeader;
    return x(t.blocks, function(i) {
      var a = Ry(i);
      a >= e && (e = a + +(n && // 0 always can not be readable gap level.
      (!a || Lf(i) && !i.noHeader)));
    }), e;
  }
  return 0;
}
function rC(t, e, r, n) {
  var i = e.noHeader, a = iC(Ry(e)), o = [], s = e.blocks || [];
  N(!s || V(s)), s = s || [];
  var u = t.orderMode;
  if (e.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (lt(l, u)) {
      var f = new xw(l[u], null);
      s.sort(function(g, m) {
        return f.evaluate(g.sortParam, m.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  x(s, function(g, m) {
    var p = e.valueFormatter, y = Ny(g)(
      // Inherit valueFormatter
      p ? k(k({}, t), {
        valueFormatter: p
      }) : t,
      g,
      m > 0 ? a.html : 0,
      n
    );
    y != null && o.push(y);
  });
  var h = t.renderMode === "richText" ? o.join(a.richText) : If(n, o.join(""), i ? r : a.html);
  if (i)
    return h;
  var c = Af(e.header, "ordinal", t.useUTC), v = Py(n, t.renderMode).nameStyle, d = Oy(n);
  return t.renderMode === "richText" ? ky(t, c, v) + a.richText + h : If(n, '<div style="' + v + ";" + d + ';">' + tt(c) + "</div>" + h, r);
}
function nC(t, e, r, n) {
  var i = t.renderMode, a = e.noName, o = e.noValue, s = !e.markerType, u = e.name, l = t.useUTC, f = e.valueFormatter || t.valueFormatter || function(S) {
    return S = V(S) ? S : [S], q(S, function(b, T) {
      return Af(b, V(v) ? v[T] : v, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : t.markupStyleCreator.makeTooltipMarker(e.markerType, e.markerColor || Z.color.secondary, i), c = a ? "" : Af(u, "ordinal", l), v = e.valueType, d = o ? [] : f(e.value, e.rawDataIndex), g = !s || !a, m = !s && a, p = Py(n, i), y = p.nameStyle, _ = p.valueStyle;
    return i === "richText" ? (s ? "" : h) + (a ? "" : ky(t, c, y)) + (o ? "" : sC(t, d, g, m, _)) : If(n, (s ? "" : h) + (a ? "" : aC(c, !s, y)) + (o ? "" : oC(d, g, m, _)), r);
  }
}
function yd(t, e, r, n, i, a) {
  if (t) {
    var o = Ny(t), s = {
      useUTC: i,
      renderMode: r,
      orderMode: n,
      markupStyleCreator: e,
      valueFormatter: t.valueFormatter
    };
    return o(s, t, 0, a);
  }
}
function iC(t) {
  return {
    html: eC[t],
    richText: tC[t]
  };
}
function If(t, e, r) {
  var n = '<div style="clear:both"></div>', i = "margin: " + r + "px 0 0", a = Oy(t);
  return '<div style="' + i + ";" + a + ';">' + e + n + "</div>";
}
function aC(t, e, r) {
  var n = e ? "margin-left:2px" : "";
  return '<span style="' + r + ";" + n + '">' + tt(t) + "</span>";
}
function oC(t, e, r, n) {
  var i = r ? "10px" : "20px", a = e ? "float:right;margin-left:" + i : "";
  return t = V(t) ? t : [t], '<span style="' + a + ";" + n + '">' + q(t, function(o) {
    return tt(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function ky(t, e, r) {
  return t.markupStyleCreator.wrapRichTextStyle(e, r);
}
function sC(t, e, r, n, i) {
  var a = [i], o = n ? 10 : 20;
  return r && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), t.markupStyleCreator.wrapRichTextStyle(V(e) ? e.join("  ") : e, a);
}
function uC(t, e) {
  var r = t.getData().getItemVisual(e, "style"), n = r[t.visualDrawType];
  return En(n);
}
function By(t, e) {
  var r = t.get("padding");
  return r ?? (e === "richText" ? [8, 10] : 10);
}
var ll = (
  /** @class */
  (function() {
    function t() {
      this.richTextStyles = {}, this._nextStyleNameId = fm();
    }
    return t.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, t.prototype.makeTooltipMarker = function(e, r, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = Ix({
        color: r,
        type: e,
        renderMode: n,
        markerId: i
      });
      return H(a) ? a : (process.env.NODE_ENV !== "production" && N(i), this.richTextStyles[i] = a.style, a.content);
    }, t.prototype.wrapRichTextStyle = function(e, r) {
      var n = {};
      V(r) ? x(r, function(a) {
        return k(n, a);
      }) : k(n, r);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + e + "}";
    }, t;
  })()
);
function lC(t) {
  var e = t.series, r = t.dataIndex, n = t.multipleSeries, i = e.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = e.getRawValue(r), u = V(s), l = uC(e, r), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = fC(s, e, r, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var g = i.getDimensionInfo(a[0]);
    v = f = bi(i, r, a[0]), h = g.type;
  } else
    v = f = u ? s[0] : s;
  var m = _h(e), p = m && e.name || "", y = i.getName(r), _ = n ? p : y;
  return Ea("section", {
    header: p,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !m,
    sortParam: v,
    blocks: [Ea("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Gt(_),
      value: f,
      valueType: h,
      rawDataIndex: i.getRawIndex(r)
    })].concat(c || [])
  });
}
function fC(t, e, r, n, i) {
  var a = e.getData(), o = Di(t, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  n.length ? x(n, function(h) {
    f(bi(a, r, h), h);
  }) : x(t, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(Ea("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: v.displayName,
      value: h,
      valueType: v.type
    })) : (s.push(h), u.push(v.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var br = ye();
function So(t, e) {
  return t.getName(e) || t.getId(e);
}
var hC = "__universalTransitionEnabled", Vr = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r._selectedDataIndicesMap = {}, r;
    }
    return e.prototype.init = function(r, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = pa({
        count: vC,
        reset: dC
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(r, i);
      var a = br(this).sourceManager = new Jx(this);
      a.prepareSource();
      var o = this.getInitialData(r, i);
      Sd(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && N(o, "getInitialData returned invalid data."), br(this).dataBeforeProcessed = o, _d(this), this._initSelectedMapFromData(o);
    }, e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Da(this), a = i ? Wa(r) : {}, o = this.subType;
      fe.hasClass(o) && (o += "Series"), ce(r, n.getTheme().get(this.subType)), ce(r, this.getDefaultOption()), Tv(r, "label", ["show"]), this.fillDataTextStyle(r.data), i && Br(r, a, i);
    }, e.prototype.mergeOption = function(r, n) {
      r = ce(this.option, r, !0), this.fillDataTextStyle(r.data);
      var i = Da(this);
      i && Br(this.option, r, i);
      var a = br(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(r, n);
      Sd(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, br(this).dataBeforeProcessed = o, _d(this), this._initSelectedMapFromData(o);
    }, e.prototype.fillDataTextStyle = function(r) {
      if (r && !qe(r))
        for (var n = ["show"], i = 0; i < r.length; i++)
          r[i] && r[i].label && Tv(r[i], "label", n);
    }, e.prototype.getInitialData = function(r, n) {
    }, e.prototype.appendData = function(r) {
      var n = this.getRawData();
      n.appendData(r.data);
    }, e.prototype.getData = function(r) {
      var n = Of(this);
      if (n) {
        var i = n.context.data;
        return r == null || !i.getLinkedData ? i : i.getLinkedData(r);
      } else
        return br(this).data;
    }, e.prototype.getAllData = function() {
      var r = this.getData();
      return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
        data: r
      }];
    }, e.prototype.setData = function(r) {
      var n = Of(this);
      if (n) {
        var i = n.context;
        i.outputData = r, n !== this.dataTask && (i.data = r);
      }
      br(this).data = r;
    }, e.prototype.getEncode = function() {
      var r = this.get("encode", !0);
      if (r)
        return K(r);
    }, e.prototype.getSourceManager = function() {
      return br(this).sourceManager;
    }, e.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, e.prototype.getRawData = function() {
      return br(this).dataBeforeProcessed;
    }, e.prototype.getColorBy = function() {
      var r = this.get("colorBy");
      return r || "series";
    }, e.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, e.prototype.getBaseAxis = function() {
      var r = this.coordinateSystem;
      return r && r.getBaseAxis && r.getBaseAxis();
    }, e.prototype.indicesOfNearest = function(r, n, i, a) {
      var o = this.getData(), s = this.coordinateSystem, u = s && s.getAxis(r);
      if (!s || !u)
        return [];
      var l = u.dataToCoord(i);
      a == null && (a = 1 / 0);
      for (var f = [], h = 1 / 0, c = -1, v = 0, d = o.getDimensionIndex(n), g = o.getStore(), m = 0, p = g.count(); m < p; m++) {
        var y = g.get(d, m), _ = u.dataToCoord(y), S = l - _, b = Math.abs(S);
        b <= a && ((b < h || b === h && S >= 0 && c < 0) && (h = b, c = S, v = 0), S === c && (f[v++] = m));
      }
      return f.length = v, f;
    }, e.prototype.formatTooltip = function(r, n, i) {
      return lC({
        series: this,
        dataIndex: r,
        multipleSeries: n
      });
    }, e.prototype.isAnimationEnabled = function() {
      var r = this.ecModel;
      if (ee.node && !(r && r.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, e.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, e.prototype.getColorFromPalette = function(r, n, i) {
      var a = this.ecModel, o = nc.prototype.getColorFromPalette.call(this, r, n, i);
      return o || (o = a.getColorFromPalette(r, n, i)), o;
    }, e.prototype.coordDimToDataDim = function(r) {
      return this.getRawData().mapDimensionsAll(r);
    }, e.prototype.getProgressive = function() {
      return this.get("progressive");
    }, e.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, e.prototype.select = function(r, n) {
      this._innerSelect(this.getData(n), r);
    }, e.prototype.unselect = function(r, n) {
      var i = this.option.selectedMap;
      if (i) {
        var a = this.option.selectedMode, o = this.getData(n);
        if (a === "series" || i === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < r.length; s++) {
          var u = r[s], l = So(o, u);
          i[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, e.prototype.toggleSelect = function(r, n) {
      for (var i = [], a = 0; a < r.length; a++)
        i[0] = r[a], this.isSelected(r[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, e.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var r = this._selectedDataIndicesMap, n = be(r), i = [], a = 0; a < n.length; a++) {
        var o = r[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, e.prototype.isSelected = function(r, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[So(a, r)]) && !a.getItemModel(r).get(["select", "disabled"]);
    }, e.prototype.isUniversalTransitionEnabled = function() {
      if (this[hC])
        return !0;
      var r = this.option.universalTransition;
      return r ? r === !0 ? !0 : r && r.enabled : !1;
    }, e.prototype._innerSelect = function(r, n) {
      var i, a, o = this.option, s = o.selectedMode, u = n.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          W(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = n[f], c = So(r, h);
            l[c] = !0, this._selectedDataIndicesMap[c] = r.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var v = n[u - 1], c = So(r, v);
          o.selectedMap = (i = {}, i[c] = !0, i), this._selectedDataIndicesMap = (a = {}, a[c] = r.getRawIndex(v), a);
        }
      }
    }, e.prototype._initSelectedMapFromData = function(r) {
      if (!this.option.selectedMap) {
        var n = [];
        r.hasItemOption && r.each(function(i) {
          var a = r.getRawDataItem(i);
          a && a.selected && n.push(i);
        }), n.length > 0 && this._innerSelect(r, n);
      }
    }, e.registerClass = function(r) {
      return fe.registerClass(r);
    }, e.protoInitialize = (function() {
      var r = e.prototype;
      r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill";
    })(), e;
  })(fe)
);
tr(Vr, Hx);
tr(Vr, nc);
Ng(Vr, fe);
function _d(t) {
  var e = t.name;
  _h(t) || (t.name = cC(t) || e);
}
function cC(t) {
  var e = t.getRawData(), r = e.mapDimensionsAll("seriesName"), n = [];
  return x(r, function(i) {
    var a = e.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function vC(t) {
  return t.model.getRawData().count();
}
function dC(t) {
  var e = t.model;
  return e.setData(e.getRawData().cloneShallow()), pC;
}
function pC(t, e) {
  e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
}
function Sd(t, e) {
  x(s1(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function(r) {
    t.wrapMethod(r, Ae(gC, e));
  });
}
function gC(t, e) {
  var r = Of(t);
  return r && r.setOutputEnd((e || this).count()), e;
}
function Of(t) {
  var e = (t.ecModel || {}).scheduler, r = e && e.getPipeline(t.uid);
  if (r) {
    var n = r.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(t.uid));
    }
    return n;
  }
}
var mC = me.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.cx, n = e.cy, i = e.width / 2, a = e.height / 2;
    t.moveTo(r, n - a), t.lineTo(r + i, n + a), t.lineTo(r - i, n + a), t.closePath();
  }
}), yC = me.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.cx, n = e.cy, i = e.width / 2, a = e.height / 2;
    t.moveTo(r, n - a), t.lineTo(r + i, n), t.lineTo(r, n + a), t.lineTo(r - i, n), t.closePath();
  }
}), _C = me.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.x, n = e.y, i = e.width / 5 * 3, a = Math.max(i, e.height), o = i / 2, s = o * o / (a - o), u = n - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), c = Math.cos(l), v = o * 0.6, d = o * 0.7;
    t.moveTo(r - f, u + s), t.arc(r, u, o, Math.PI - l, Math.PI * 2 + l), t.bezierCurveTo(r + f - h * v, u + s + c * v, r, n - d, r, n), t.bezierCurveTo(r, n - d, r - f + h * v, u + s + c * v, r - f, u + s), t.closePath();
  }
}), SC = me.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.height, n = e.width, i = e.x, a = e.y, o = n / 3 * 2;
    t.moveTo(i, a), t.lineTo(i + o, a + r), t.lineTo(i, a + r / 4 * 3), t.lineTo(i - o, a + r), t.lineTo(i, a), t.closePath();
  }
}), bC = {
  line: Rr,
  rect: Le,
  roundRect: Le,
  square: Le,
  circle: au,
  diamond: yC,
  pin: _C,
  arrow: SC,
  triangle: mC
}, TC = {
  line: function(t, e, r, n, i) {
    i.x1 = t, i.y1 = e + n / 2, i.x2 = t + r, i.y2 = e + n / 2;
  },
  rect: function(t, e, r, n, i) {
    i.x = t, i.y = e, i.width = r, i.height = n;
  },
  roundRect: function(t, e, r, n, i) {
    i.x = t, i.y = e, i.width = r, i.height = n, i.r = Math.min(r, n) / 4;
  },
  square: function(t, e, r, n, i) {
    var a = Math.min(r, n);
    i.x = t, i.y = e, i.width = a, i.height = a;
  },
  circle: function(t, e, r, n, i) {
    i.cx = t + r / 2, i.cy = e + n / 2, i.r = Math.min(r, n) / 2;
  },
  diamond: function(t, e, r, n, i) {
    i.cx = t + r / 2, i.cy = e + n / 2, i.width = r, i.height = n;
  },
  pin: function(t, e, r, n, i) {
    i.x = t + r / 2, i.y = e + n / 2, i.width = r, i.height = n;
  },
  arrow: function(t, e, r, n, i) {
    i.x = t + r / 2, i.y = e + n / 2, i.width = r, i.height = n;
  },
  triangle: function(t, e, r, n, i) {
    i.cx = t + r / 2, i.cy = e + n / 2, i.width = r, i.height = n;
  }
}, Pf = {};
x(bC, function(t, e) {
  Pf[e] = new t();
});
var wC = me.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(t, e, r) {
    var n = zg(t, e, r), i = this.shape;
    return i && i.symbolType === "pin" && e.position === "inside" && (n.y = r.y + r.height * 0.4), n;
  },
  buildPath: function(t, e, r) {
    var n = e.symbolType;
    if (n !== "none") {
      var i = Pf[n];
      i || (n = "rect", i = Pf[n]), TC[n](e.x, e.y, e.width, e.height, i.shape), i.buildPath(t, i.shape, r);
    }
  }
});
function xC(t, e) {
  if (this.type !== "image") {
    var r = this.style;
    this.__isEmptyBrush ? (r.stroke = t, r.fill = e || Z.color.neutral00, r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = t : r.fill = t, this.markRedraw();
  }
}
function Ti(t, e, r, n, i, a, o) {
  var s = t.indexOf("empty") === 0;
  s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
  var u;
  return t.indexOf("image://") === 0 ? u = Gm(t.slice(8), new j(e, r, n, i), o ? "center" : "cover") : t.indexOf("path://") === 0 ? u = Rh(t.slice(7), {}, new j(e, r, n, i), o ? "center" : "cover") : u = new wC({
    shape: {
      symbolType: t,
      x: e,
      y: r,
      width: n,
      height: i
    }
  }), u.__isEmptyBrush = s, u.setColor = xC, a && u.setColor(a), u;
}
function CC(t) {
  return V(t) || (t = [+t, +t]), [t[0] || 0, t[1] || 0];
}
function Vy(t, e) {
  if (t != null)
    return V(t) || (t = [t, t]), [zt(t[0], e[0]) || 0, zt(Y(t[1], t[0]), e[1]) || 0];
}
var DC = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.hasSymbolVisual = !0, r;
    }
    return e.prototype.getInitialData = function(r) {
      if (process.env.NODE_ENV !== "production") {
        var n = r.coordinateSystem;
        if (n !== "polar" && n !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return tx(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getLegendIcon = function(r) {
      var n = new ke(), i = Ti("line", 0, r.itemHeight / 2, r.itemWidth, 0, r.lineStyle.stroke, !1);
      n.add(i), i.setStyle(r.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, u = r.itemHeight * 0.8, l = Ti(s, (r.itemWidth - u) / 2, (r.itemHeight - u) / 2, u, u, r.itemStyle.fill);
      n.add(l), l.setStyle(r.itemStyle);
      var f = r.iconRotate === "inherit" ? o : r.iconRotate || 0;
      return l.rotation = f * Math.PI / 180, l.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), s.indexOf("empty") > -1 && (l.style.stroke = l.style.fill, l.style.fill = Z.color.neutral00, l.style.lineWidth = 2), n;
    }, e.type = "series.line", e.dependencies = ["grid", "polar"], e.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: !1,
        valueAnimation: !0,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: !0
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: !1,
      // Disabled if step is true
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 6,
      symbolRotate: null,
      showSymbol: !0,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point. (non-finite values)
      connectNulls: !1,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: {
        divideShape: "clone"
      },
      /**
       * @deprecated
       */
      triggerLineEvent: !1,
      triggerEvent: !1
    }, e;
  })(Vr)
);
function Fy(t, e) {
  var r = t.mapDimensionsAll("defaultedLabel"), n = r.length;
  if (n === 1) {
    var i = bi(t, e, r[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < r.length; o++)
      a.push(bi(t, e, r[o]));
    return a.join(" ");
  }
}
function EC(t, e) {
  var r = t.mapDimensionsAll("defaultedLabel");
  if (!V(e))
    return e + "";
  for (var n = [], i = 0; i < r.length; i++) {
    var a = t.getDimensionIndex(r[i]);
    a >= 0 && n.push(e[a]);
  }
  return n.join(" ");
}
var ac = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r, n, i, a) {
      var o = t.call(this) || this;
      return o.updateData(r, n, i, a), o;
    }
    return e.prototype._createSymbol = function(r, n, i, a, o, s) {
      this.removeAll();
      var u = Ti(r, -1, -1, 2, 2, null, s);
      u.attr({
        z2: Y(o, 100),
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), u.drift = MC, this._symbolType = r, this.add(u);
    }, e.prototype.stopSymbolAnimation = function(r) {
      this.childAt(0).stopAnimation(null, r);
    }, e.prototype.getSymbolType = function() {
      return this._symbolType;
    }, e.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, e.prototype.highlight = function() {
      gs(this.childAt(0));
    }, e.prototype.downplay = function() {
      ms(this.childAt(0));
    }, e.prototype.setZ = function(r, n) {
      var i = this.childAt(0);
      i.zlevel = r, i.z = n;
    }, e.prototype.setDraggable = function(r, n) {
      var i = this.childAt(0);
      i.draggable = r, i.cursor = !n && r ? "move" : i.cursor;
    }, e.prototype.updateData = function(r, n, i, a) {
      this.silent = !1;
      var o = r.getItemVisual(n, "symbol") || "circle", s = r.hostModel, u = e.getSymbolSize(r, n), l = e.getSymbolZ2(r, n), f = o !== this._symbolType, h = a && a.disableAnimation;
      if (f) {
        var c = r.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, r, n, u, l, c);
      } else {
        var v = this.childAt(0);
        v.silent = !1;
        var d = {
          scaleX: u[0] / 2,
          scaleY: u[1] / 2
        };
        h ? v.attr(d) : kr(v, d, s, n), OT(v);
      }
      if (this._updateCommon(r, n, u, i, a), f) {
        var v = this.childAt(0);
        if (!h) {
          var d = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: v.style.opacity
            }
          };
          v.scaleX = v.scaleY = 0, v.style.opacity = 0, Ua(v, d, s, n);
        }
      }
      h && this.childAt(0).stopAnimation("leave");
    }, e.prototype._updateCommon = function(r, n, i, a, o) {
      var s = this.childAt(0), u = r.hostModel, l, f, h, c, v, d, g, m, p;
      if (a && (l = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, c = a.focus, v = a.blurScope, g = a.labelStatesModels, m = a.hoverScale, p = a.cursorStyle, d = a.emphasisDisabled), !a || r.hasItemOption) {
        var y = a && a.itemModel ? a.itemModel : r.getItemModel(n), _ = y.getModel("emphasis");
        l = _.getModel("itemStyle").getItemStyle(), h = y.getModel(["select", "itemStyle"]).getItemStyle(), f = y.getModel(["blur", "itemStyle"]).getItemStyle(), c = _.get("focus"), v = _.get("blurScope"), d = _.get("disabled"), g = Gh(y), m = _.getShallow("scale"), p = y.getShallow("cursor");
      }
      var S = r.getItemVisual(n, "symbolRotate");
      s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
      var b = Vy(r.getItemVisual(n, "symbolOffset"), i);
      b && (s.x = b[0], s.y = b[1]), p && s.attr("cursor", p);
      var T = r.getItemVisual(n, "style"), w = T.fill;
      if (s instanceof zr) {
        var E = s.style;
        s.useStyle(k({
          // TODO other properties like x, y ?
          image: E.image,
          x: E.x,
          y: E.y,
          width: E.width,
          height: E.height
        }, T));
      } else
        s.__isEmptyBrush ? s.useStyle(k({}, T)) : s.useStyle(T), s.style.decal = null, s.setColor(w, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var D = r.getItemVisual(n, "liftZ"), C = this._z2;
      D != null ? C == null && (this._z2 = s.z2, s.z2 += D) : C != null && (s.z2 = C, this._z2 = null);
      var M = o && o.useNameLabel;
      Hh(s, g, {
        labelFetcher: u,
        labelDataIndex: n,
        defaultText: L,
        inheritColor: w,
        defaultOpacity: T.opacity
      });
      function L(P) {
        return M ? r.getName(P) : Fy(r, P);
      }
      this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
      var A = s.ensureState("emphasis");
      A.style = l, s.ensureState("select").style = h, s.ensureState("blur").style = f;
      var I = m == null || m === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(m) && m > 0 ? +m : 1;
      A.scaleX = this._sizeX * I, A.scaleY = this._sizeY * I, this.setSymbolScale(1), _f(this, c, v, d);
    }, e.prototype.setSymbolScale = function(r) {
      this.scaleX = this.scaleY = r;
    }, e.prototype.fadeOut = function(r, n, i) {
      var a = this.childAt(0), o = ve(this).dataIndex, s = i && i.animation;
      if (this.silent = a.silent = !0, i && i.fadeLabel) {
        var u = a.getTextContent();
        u && ys(u, {
          style: {
            opacity: 0
          }
        }, n, {
          dataIndex: o,
          removeOpt: s,
          cb: function() {
            a.removeTextContent();
          }
        });
      } else
        a.removeTextContent();
      ys(a, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, n, {
        dataIndex: o,
        cb: r,
        removeOpt: s
      });
    }, e.getSymbolSize = function(r, n) {
      return CC(r.getItemVisual(n, "symbolSize"));
    }, e.getSymbolZ2 = function(r, n) {
      return r.getItemVisual(n, "z2");
    }, e;
  })(ke)
);
function MC(t, e) {
  this.parent.drift(t, e);
}
function bo(t, e, r, n) {
  return e && !isNaN(e[0]) && !isNaN(e[1]) && !(n && n.isIgnore && n.isIgnore(r)) && !(n && n.clipShape && !n.clipShape.contain(e[0], e[1])) && t.getItemVisual(r, "symbol") !== "none";
}
function bd(t) {
  return t != null && !W(t) && (t = {
    isIgnore: t
  }), t || {};
}
function Td(t) {
  var e = t.hostModel, r = e.getModel("emphasis");
  return {
    emphasisItemStyle: r.getModel("itemStyle").getItemStyle(),
    blurItemStyle: e.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: e.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: r.get("focus"),
    blurScope: r.get("blurScope"),
    emphasisDisabled: r.get("disabled"),
    hoverScale: r.get("scale"),
    labelStatesModels: Gh(e),
    cursorStyle: e.get("cursor")
  };
}
function wd(t, e, r, n, i, a, o) {
  var s = new t(e, r, n, i);
  return s.setPosition(a), e.setItemGraphicEl(r, s), o.add(s), s;
}
var AC = (
  /** @class */
  (function() {
    function t(e) {
      this.group = new ke(), this._SymbolCtor = e || ac;
    }
    return t.prototype.updateData = function(e, r) {
      this._progressiveEls = null, r = bd(r);
      var n = this.group, i = e.hostModel, a = this._data, o = this._SymbolCtor, s = r.disableAnimation, u = this._seriesScope = Td(e), l = {
        disableAnimation: s
      }, f = r.getSymbolPoint || function(h) {
        return e.getItemLayout(h);
      };
      a || n.removeAll(), e.diff(a).add(function(h) {
        var c = f(h);
        bo(e, c, h, r) && wd(o, e, h, u, l, c, n);
      }).update(function(h, c) {
        var v = a.getItemGraphicEl(c), d = f(h);
        if (!bo(e, d, h, r)) {
          n.remove(v);
          return;
        }
        var g = e.getItemVisual(h, "symbol") || "circle", m = v && v.getSymbolType && v.getSymbolType();
        if (!v || m && m !== g)
          n.remove(v), v = new o(e, h, u, l), v.setPosition(d);
        else {
          v.updateData(e, h, u, l);
          var p = {
            x: d[0],
            y: d[1]
          };
          s ? v.attr(p) : kr(v, p, i);
        }
        n.add(v), e.setItemGraphicEl(h, v);
      }).remove(function(h) {
        var c = a.getItemGraphicEl(h);
        c && c.fadeOut(function() {
          n.remove(c);
        }, i);
      }).execute(), this._getSymbolPoint = f, this._data = e;
    }, t.prototype.updateLayout = function(e) {
      var r = this._data;
      if (r)
        for (var n = this, i = r.getStore(), a = 0, o = i.count(); a < o; a++) {
          var s = r.getItemGraphicEl(a), u = n._getSymbolPoint(a);
          bo(r, u, a, e) ? (s = s || wd(n._SymbolCtor, r, a, n._seriesScope, {
            disableAnimation: !0
          }, u, n.group), s.stopAnimation(), s.setPosition(u), s.markRedraw()) : s && (n.group.remove(s), r.setItemGraphicEl(a, null));
        }
    }, t.prototype.incrementalPrepareUpdate = function(e) {
      this._seriesScope = Td(e), this._data = null, this.group.removeAll();
    }, t.prototype.incrementalUpdate = function(e, r, n, i) {
      this._progressiveEls = [], i = bd(i);
      function a(l) {
        l.isGroup || (l.incremental = n, l.ensureState("emphasis").hoverLayer = Nh);
      }
      for (var o = e.start; o < e.end; o++) {
        var s = r.getItemLayout(o);
        if (bo(r, s, o, i)) {
          var u = new this._SymbolCtor(r, o, this._seriesScope);
          u.traverse(a), u.setPosition(s), this.group.add(u), r.setItemGraphicEl(o, u), this._progressiveEls.push(u);
        }
      }
    }, t.prototype.eachRendered = function(e) {
      Vh(this._progressiveEls || this.group, e);
    }, t.prototype.remove = function(e) {
      var r = this.group, n = this._data;
      n && e ? n.eachItemGraphicEl(function(i) {
        i.fadeOut(function() {
          r.remove(i);
        }, n.hostModel);
      }) : r.removeAll();
    }, t;
  })()
);
function zy(t, e, r) {
  var n = t.getBaseAxis(), i = t.getOtherAxis(n), a = LC(i, r), o = n.dim, s = i.dim, u = e.mapDimension(s), l = e.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = q(t.dimensions, function(d) {
    return e.mapDimension(d);
  }), c = !1, v = e.getCalculationInfo("stackResultDimension");
  return xa(
    e,
    h[0]
    /* , dims[1] */
  ) && (c = !0, h[0] = v), xa(
    e,
    h[1]
    /* , dims[0] */
  ) && (c = !0, h[1] = v), {
    dataDimsForPoint: h,
    valueStart: a,
    valueAxisDim: s,
    baseAxisDim: o,
    stacked: !!c,
    valueDim: u,
    baseDim: l,
    baseDataOffset: f,
    stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
  };
}
function LC(t, e) {
  var r = 0, n = t.scale.getExtent();
  return e === "start" ? r = n[0] : e === "end" ? r = n[1] : we(e) && !isNaN(e) ? r = e : n[0] > 0 ? r = n[0] : n[1] < 0 && (r = n[1]), r;
}
function Hy(t, e, r, n) {
  var i = NaN;
  t.stacked && (i = r.get(r.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = t.valueStart);
  var a = t.baseDataOffset, o = [];
  return o[a] = r.get(t.baseDim, n), o[1 - a] = i, e.dataToPoint(o);
}
function Et(t, e) {
  return !isFinite(t) || !isFinite(e);
}
var IC = typeof Float32Array !== Ga ? Float32Array : void 0;
function ri(t) {
  return OC({
    ctor: IC
  }, t).arr;
}
function OC(t, e) {
  process.env.NODE_ENV !== "production" && N(e != null && isFinite(e) && e >= 0 && t.hasOwnProperty("ctor"));
  var r = t.arr, n = t.ctor;
  if (e > yv && (e = yv), !r || t.typed && r.length < e) {
    var i = void 0;
    if (n)
      try {
        i = new n(e), t.typed = !0, r && i.set(r);
      } catch (s) {
        process.env.NODE_ENV !== "production" && ue(s);
      }
    if (!i && (i = [], t.typed = !1, r))
      for (var a = 0, o = r.length; a < o; a++)
        i[a] = r[a];
    t.arr = i;
  }
  return t;
}
function PC(t, e) {
  var r = [];
  return e.diff(t).add(function(n) {
    r.push({
      cmd: "+",
      idx: n
    });
  }).update(function(n, i) {
    r.push({
      cmd: "=",
      idx: i,
      idx1: n
    });
  }).remove(function(n) {
    r.push({
      cmd: "-",
      idx: n
    });
  }).execute(), r;
}
function NC(t, e, r, n, i, a, o, s) {
  for (var u = PC(t, e), l = [], f = [], h = [], c = [], v = [], d = [], g = [], m = zy(i, e, o), p = t.getLayout("points") || [], y = e.getLayout("points") || [], _ = 0; _ < u.length; _++) {
    var S = u[_], b = !0, T = void 0, w = void 0;
    switch (S.cmd) {
      case "=":
        T = S.idx * 2, w = S.idx1 * 2;
        var E = p[T], D = p[T + 1], C = y[w], M = y[w + 1];
        (isNaN(E) || isNaN(D)) && (E = C, D = M), l.push(E, D), f.push(C, M), h.push(r[T], r[T + 1]), c.push(n[w], n[w + 1]), g.push(e.getRawIndex(S.idx1));
        break;
      case "+":
        var L = S.idx, A = m.dataDimsForPoint, I = i.dataToPoint([e.get(A[0], L), e.get(A[1], L)]);
        w = L * 2, l.push(I[0], I[1]), f.push(y[w], y[w + 1]);
        var P = Hy(m, i, e, L);
        h.push(P[0], P[1]), c.push(n[w], n[w + 1]), g.push(e.getRawIndex(L));
        break;
      case "-":
        b = !1;
    }
    b && (v.push(S), d.push(d.length));
  }
  d.sort(function(ne, ae) {
    return g[ne] - g[ae];
  });
  for (var O = l.length, B = ri(O), G = ri(O), U = ri(O), J = ri(O), $ = [], _ = 0; _ < d.length; _++) {
    var te = d[_], X = _ * 2, F = te * 2;
    B[X] = l[F], B[X + 1] = l[F + 1], G[X] = f[F], G[X + 1] = f[F + 1], U[X] = h[F], U[X + 1] = h[F + 1], J[X] = c[F], J[X + 1] = c[F + 1], $[_] = v[te];
  }
  return {
    current: B,
    next: G,
    stackedOnCurrent: U,
    stackedOnNext: J,
    status: $
  };
}
var Tr = Math.min, wr = Math.max;
function Nf(t, e, r, n, i, a, o, s, u) {
  for (var l, f, h, c, v, d, g = r, m = 0; m < n; m++) {
    var p = e[g * 2], y = e[g * 2 + 1];
    if (g >= i || g < 0)
      break;
    if (Et(p, y)) {
      if (u) {
        g += a;
        continue;
      }
      break;
    }
    if (g === r)
      t[a > 0 ? "moveTo" : "lineTo"](p, y), h = p, c = y;
    else {
      var _ = p - l, S = y - f;
      if (_ * _ + S * S < 0.5) {
        g += a;
        continue;
      }
      if (o > 0) {
        for (var b = g + a, T = e[b * 2], w = e[b * 2 + 1]; T === p && w === y && m < n; )
          m++, b += a, g += a, T = e[b * 2], w = e[b * 2 + 1], p = e[g * 2], y = e[g * 2 + 1], _ = p - l, S = y - f;
        var E = m + 1;
        if (u)
          for (; Et(T, w) && E < n; )
            E++, b += a, T = e[b * 2], w = e[b * 2 + 1];
        var D = 0.5, C = 0, M = 0, L = void 0, A = void 0;
        if (E >= n || Et(T, w))
          v = p, d = y;
        else {
          C = T - l, M = w - f;
          var I = p - l, P = T - p, O = y - f, B = w - y, G = void 0, U = void 0;
          if (s === "x") {
            G = Math.abs(I), U = Math.abs(P);
            var J = C > 0 ? 1 : -1;
            v = p - J * G * o, d = y, L = p + J * U * o, A = y;
          } else if (s === "y") {
            G = Math.abs(O), U = Math.abs(B);
            var $ = M > 0 ? 1 : -1;
            v = p, d = y - $ * G * o, L = p, A = y + $ * U * o;
          } else
            G = Math.sqrt(I * I + O * O), U = Math.sqrt(P * P + B * B), D = U / (U + G), v = p - C * o * (1 - D), d = y - M * o * (1 - D), L = p + C * o * D, A = y + M * o * D, L = Tr(L, wr(T, p)), A = Tr(A, wr(w, y)), L = wr(L, Tr(T, p)), A = wr(A, Tr(w, y)), C = L - p, M = A - y, v = p - C * G / U, d = y - M * G / U, v = Tr(v, wr(l, p)), d = Tr(d, wr(f, y)), v = wr(v, Tr(l, p)), d = wr(d, Tr(f, y)), C = p - v, M = y - d, L = p + C * U / G, A = y + M * U / G;
        }
        t.bezierCurveTo(h, c, v, d, p, y), h = L, c = A;
      } else
        t.lineTo(p, y);
    }
    l = p, f = y, g += a;
  }
  return m;
}
var Gy = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return t;
  })()
), RC = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.type = "ec-polyline", n;
    }
    return e.prototype.getDefaultStyle = function() {
      return {
        stroke: Z.color.neutral99,
        fill: null
      };
    }, e.prototype.getDefaultShape = function() {
      return new Gy();
    }, e.prototype.buildPath = function(r, n) {
      var i = n.points, a = 0, o = i.length / 2;
      if (n.connectNulls) {
        for (; o > 0 && Et(i[o * 2 - 2], i[o * 2 - 1]); o--)
          ;
        for (; a < o && Et(i[a * 2], i[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += Nf(r, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
    }, e.prototype.getPointOn = function(r, n) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var i = this.path, a = i.data, o = xn.CMD, s, u, l = n === "x", f = [], h = 0; h < a.length; ) {
        var c = a[h++], v = void 0, d = void 0, g = void 0, m = void 0, p = void 0, y = void 0, _ = void 0;
        switch (c) {
          case o.M:
            s = a[h++], u = a[h++];
            break;
          case o.L:
            if (v = a[h++], d = a[h++], _ = l ? (r - s) / (v - s) : (r - u) / (d - u), _ <= 1 && _ >= 0) {
              var S = l ? (d - u) * _ + u : (v - s) * _ + s;
              return l ? [r, S] : [S, r];
            }
            s = v, u = d;
            break;
          case o.C:
            v = a[h++], d = a[h++], g = a[h++], m = a[h++], p = a[h++], y = a[h++];
            var b = l ? as(s, v, g, p, r, f) : as(u, d, m, y, r, f);
            if (b > 0)
              for (var T = 0; T < b; T++) {
                var w = f[T];
                if (w <= 1 && w >= 0) {
                  var S = l ? Re(u, d, m, y, w) : Re(s, v, g, p, w);
                  return l ? [r, S] : [S, r];
                }
              }
            s = p, u = y;
            break;
        }
      }
    }, e;
  })(me)
), kC = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  })(Gy)
), BC = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.type = "ec-polygon", n;
    }
    return e.prototype.getDefaultShape = function() {
      return new kC();
    }, e.prototype.buildPath = function(r, n) {
      var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, u = n.smoothMonotone;
      if (n.connectNulls) {
        for (; s > 0 && Et(i[s * 2 - 2], i[s * 2 - 1]); s--)
          ;
        for (; o < s && Et(i[o * 2], i[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var l = Nf(r, i, o, s, s, 1, n.smooth, u, n.connectNulls);
        Nf(r, a, o + l - 1, l, s, -1, n.stackedOnSmooth, u, n.connectNulls), o += l + 1, r.closePath();
      }
    }, e;
  })(me)
);
function Uy() {
  var t = ye();
  return function(e) {
    var r = t(e), n = e.pipelineContext, i = !!r.large, a = !!r.progressiveRender, o = r.large = !!(n && n.large), s = r.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var Wy = ye(), VC = Uy(), Kt = (
  /** @class */
  (function() {
    function t() {
      this.group = new ke(), this.uid = hu("viewChart"), this.renderTask = pa({
        plan: FC,
        reset: zC
      }), this.renderTask.context = {
        view: this
      };
    }
    return t.prototype.init = function(e, r) {
    }, t.prototype.render = function(e, r, n, i) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, t.prototype.highlight = function(e, r, n, i) {
      var a = e.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && ue("Unknown dataType " + i.dataType);
        return;
      }
      Cd(a, i, "emphasis");
    }, t.prototype.downplay = function(e, r, n, i) {
      var a = e.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && ue("Unknown dataType " + i.dataType);
        return;
      }
      Cd(a, i, "normal");
    }, t.prototype.remove = function(e, r) {
      this.group.removeAll();
    }, t.prototype.dispose = function(e, r) {
    }, t.prototype.updateView = function(e, r, n, i) {
      this.render(e, r, n, i);
    }, t.prototype.updateVisual = function(e, r, n, i) {
      this.render(e, r, n, i);
    }, t.prototype.eachRendered = function(e) {
      Vh(this.group, e);
    }, t.markUpdateMethod = function(e, r) {
      Wy(e).updateMethod = r;
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "chart";
    })(), t;
  })()
);
function xd(t, e, r) {
  t && _i(t) && (e === "emphasis" ? gs : ms)(t, r);
}
function Cd(t, e, r) {
  var n = Cn(t, e), i = e && e.highlightKey != null ? qb(e.highlightKey) : null;
  n != null ? x($e(n), function(a) {
    xd(t.getItemGraphicEl(a), r, i);
  }) : t.eachItemGraphicEl(function(a) {
    xd(a, r, i);
  });
}
ch(Kt, ["dispose"]);
$s(Kt);
function FC(t) {
  return VC(t.model);
}
function zC(t) {
  var e = t.model, r = t.ecModel, n = t.api, i = t.payload, a = e.pipelineContext.progressiveRender, o = t.view, s = i && Wy(i).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](e, r, n, i), HC[u];
}
var HC = {
  incrementalPrepareRender: {
    progress: function(t, e) {
      e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(t, e) {
      e.view.render(e.model, e.ecModel, e.api, e.payload);
    }
  }
};
function GC(t, e, r, n, i) {
  var a = t.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = r.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var h = new Le({
    shape: {
      x: o,
      y: s,
      width: u,
      height: l
    }
  });
  if (e) {
    var c = t.getBaseAxis(), v = c.isHorizontal(), d = c.inverse;
    v ? (d && (h.shape.x += u), h.shape.width = 0) : (d || (h.shape.y += l), h.shape.height = 0);
    var g = Q(i) ? function(m) {
      i(m, h);
    } : null;
    Ua(h, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, r, null, n, g);
  }
  return h;
}
function UC(t, e, r) {
  var n = t.getArea(), i = se(n.r0, 1), a = se(n.r, 1), o = new ou({
    shape: {
      cx: se(t.cx, 1),
      cy: se(t.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (e) {
    var s = t.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, Ua(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, r);
  }
  return o;
}
function WC(t, e) {
  return t.type === e;
}
var Dd = {};
function YC(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var r = t + "^_^" + e;
    Dd[r] || (console.warn('[ECharts] DEPRECATED: "' + t + '" has been deprecated. ' + e), Dd[r] = !0);
  }
}
var Nt = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.isBlank = function() {
      return this._isBlank;
    }, t.prototype.setBlank = function(e) {
      this._isBlank = e;
    }, t;
  })()
);
$s(Nt);
var XC = 0, Rf = (
  /** @class */
  (function() {
    function t(e) {
      this.categories = e.categories || [], this._needCollect = e.needCollect, this._deduplication = e.deduplication, this.uid = ++XC, this._onCollect = e.onCollect;
    }
    return t.createByAxisModel = function(e) {
      var r = e.option, n = r.data, i = n && q(n, ZC);
      return new t({
        categories: i,
        needCollect: !i,
        // deduplication is default in axis.
        deduplication: r.dedplication !== !1
      });
    }, t.prototype.getOrdinal = function(e) {
      return this._getOrCreateMap().get(e);
    }, t.prototype.parseAndCollect = function(e) {
      var r, n = this._needCollect;
      if (!H(e) && !n)
        return e;
      if (n && !this._deduplication)
        return r = this.categories.length, this.categories[r] = e, this._onCollect && this._onCollect(e, r), r;
      var i = this._getOrCreateMap();
      return r = i.get(e), r == null && (n ? (r = this.categories.length, this.categories[r] = e, i.set(e, r), this._onCollect && this._onCollect(e, r)) : r = NaN), r;
    }, t.prototype._getOrCreateMap = function() {
      return this._map || (this._map = K(this.categories));
    }, t;
  })()
);
function ZC(t) {
  return W(t) && t.value != null ? t.value : t + "";
}
var Ct = 0, Ma = 1, $C = {
  needTransform: 1,
  normalize: 1,
  scale: 1,
  transformIn: 1,
  transformOut: 1,
  contain: 1,
  getExtent: 1,
  getExtentUnsafe: 1,
  setExtent: 1,
  setExtent2: 1,
  getFilter: 1,
  sanitize: 1,
  getDefaultStartValue: 1,
  freeze: 1
}, Yy = be($C), xs = 2, Xy = 3;
function oc(t, e, r) {
  var n;
  t = t || {};
  var i = Ze();
  if (i) {
    var a = i.createBreakScaleMapper(e, r);
    a.hasBreaks() && (x(Yy, function(o) {
      a[o] && (t[o] = Se(a[o], a));
    }), n = a);
  }
  return n == null && KC(t, r), {
    brk: n,
    mapper: t
  };
}
function Zy(t, e) {
  x(Yy, function(r) {
    t[r] = e[r];
  });
}
function $y(t, e) {
  t.freeze = He, process.env.NODE_ENV !== "production" && (t.freeze = function() {
    e.freeze();
  });
}
function Aa(t) {
  return t.getExtentUnsafe(Ct, xs);
}
function Cs(t, e) {
  return t.getExtentUnsafe(Ma, e) || t.getExtentUnsafe(Ct, e);
}
function qC(t) {
  var e = Cs(t, Xy);
  return e[1] - e[0];
}
function du(t) {
  var e = t.getExtentUnsafe(Ct, Xy);
  return e[1] - e[0];
}
function KC(t, e) {
  var r = t || {}, n = [];
  return r._extents = n, n[Ct] = e ? e.slice() : Tt(), k(r, QC), r;
}
var QC = {
  needTransform: function() {
    return !1;
  },
  normalize: function(t) {
    var e = this._extents[Ma] || this._extents[Ct];
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
  },
  scale: function(t) {
    var e = this._extents[Ma] || this._extents[Ct];
    return t * (e[1] - e[0]) + e[0];
  },
  transformIn: function(t) {
    return t;
  },
  transformOut: function(t) {
    return t;
  },
  contain: function(t) {
    var e = Cs(this, null);
    return t >= e[0] && t <= e[1];
  },
  getExtent: function() {
    return this._extents[Ct].slice();
  },
  getExtentUnsafe: function(t) {
    return this._extents[t];
  },
  setExtent: function(t, e) {
    process.env.NODE_ENV !== "production" && N(!this._frozen), Ed(this._extents, Ct, t, e);
  },
  setExtent2: function(t, e, r) {
    process.env.NODE_ENV !== "production" && N(!this._frozen);
    var n = this._extents;
    n[t] || (n[t] = n[Ct].slice()), Ed(n, t, e, r);
  },
  freeze: function() {
    process.env.NODE_ENV !== "production" && (this._frozen = !0);
  }
};
function Ed(t, e, r, n) {
  yi(r, n) ? (t[e][0] = r, t[e][1] = n) : process.env.NODE_ENV !== "production" && r != null && n != null && r <= n && ue("Invalid setExtent call - start: " + r + ", end: " + n);
}
function qy(t) {
  return Ds(t) || wi(t);
}
function Ds(t) {
  return t.type === "interval";
}
function sc(t) {
  return t.type === "time";
}
function wi(t) {
  return t.type === "log";
}
function ir(t) {
  return t.type === "ordinal";
}
function JC(t) {
  var e = mh(t), r = Mi(10, e), n = vr(t / r);
  return n ? n === 2 ? n = 3 : n === 3 ? n = 5 : n *= 2 : n = 1, se(n * r, -e);
}
function Mn(t) {
  return fr(t) + 2;
}
function To(t, e) {
  return Sa(t) / Sa(e);
}
function fl(t, e, r) {
  var n = r && r.lookup;
  if (n) {
    for (var i = 0; i < n.from.length; i++)
      if (t === n.from[i])
        return n.to[i];
  }
  return Mi(e, t);
}
function Ky(t, e, r) {
  var n = t.slice();
  if (n[0] === n[1]) {
    var i = r && r.ctnShp;
    if (n[0] !== 0) {
      var a = Ne(n[0]);
      e[1] || (n[1] += a / 2), n[0] -= a / 2;
    } else
      i && (n[0] = -1), n[1] = 1;
  }
  return (!pr(n[0]) || !pr(n[1])) && (n[0] = 0, n[1] = 1), n[1] < n[0] && n.reverse(), n;
}
function jC(t, e) {
  return [t[0] !== e[0], t[1] !== e[1]];
}
function uc(t, e) {
  return t = t || e, vr(de(t, 1));
}
function Qy(t, e, r) {
  var n = Aa(t), i = n[0], a = t.count(), o = Math.max((e || 0) + 1, 1);
  i !== 0 && o > 1 && a / o > 2 && (i = Math.round(Math.ceil(i / o) * o)), i !== n[0] && u(n[0], !0, !0);
  for (var s = i; s <= n[1]; s += o)
    u(s, !1, s === n[0] || s === n[1]);
  s - o !== n[1] && u(n[1], !0, !0);
  function u(l, f, h) {
    r({
      value: l,
      offInterval: f
    }, h);
  }
}
var Jy = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "ordinal", n.parse = e.parse, Zy(n, e.decoratedMethods);
      var i = r.ordinalMeta;
      i || (i = new Rf({})), V(i) && (i = new Rf({
        categories: q(i, function(o) {
          return W(o) ? o.value : o;
        })
      })), n._ordinalMeta = i;
      var a = oc(
        null,
        null,
        // Do not support break in OrdinalScale yet.
        r.extent || [0, i.categories.length - 1]
      );
      return n._mapper = a.mapper, $y(n, a.mapper), n;
    }
    return e.parse = function(r) {
      return r == null ? r = NaN : H(r) ? (r = this._ordinalMeta.getOrdinal(r), r == null && (r = NaN)) : r = vr(r), r;
    }, e.prototype.getTicks = function() {
      var r = [];
      return Qy(this, 0, function(n) {
        r.push(n);
      }), r;
    }, e.prototype.getMinorTicks = function(r) {
    }, e.prototype.setSortInfo = function(r) {
      if (r == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = r.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = ft(s, n.length); o < u; ++o) {
        var l = i[o] = n[o];
        a[l] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        i[o] = f, a[f] = o;
      }
    }, e.prototype._getTickNumber = function(r) {
      var n = this._ticksByOrdinalNumber;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, e.prototype.getRawOrdinalNumber = function(r) {
      var n = this._ordinalNumbersByTick;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, e.prototype.getLabel = function(r) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(r.value), i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }, e.prototype.count = function() {
      var r = Aa(this._mapper);
      return r[1] - r[0] + 1;
    }, e.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, e.type = "ordinal", e.decoratedMethods = {
      needTransform: function() {
        return this._mapper.needTransform();
      },
      contain: function(r) {
        return this._mapper.contain(this._getTickNumber(r)) && r >= 0 && r < this._ordinalMeta.categories.length;
      },
      normalize: function(r) {
        return this._mapper.normalize(this._getTickNumber(r));
      },
      scale: function(r) {
        return this.getRawOrdinalNumber(vr(this._mapper.scale(r)));
      },
      transformIn: function(r, n) {
        return this._mapper.transformIn(this._getTickNumber(r), n);
      },
      transformOut: function(r, n) {
        return this.getRawOrdinalNumber(this._mapper.transformOut(r, n));
      },
      getExtent: function() {
        return this._mapper.getExtent();
      },
      getExtentUnsafe: function(r, n) {
        return this._mapper.getExtentUnsafe(r, n);
      },
      /**
       * NOTICE: OrdinalScale extent should always originates from
       * `[0, ordinalMeta.categories.length - 1]`, regardless of min/max of `series.data`.
       * But settings like `xxxAxis.min/max` can still modify the extent.
       * It is handled by constructor of `ScaleRawExtentInfo`.
       */
      setExtent: function(r, n) {
        return this._mapper.setExtent(r, n);
      },
      setExtent2: function(r, n, i) {
        return this._mapper.setExtent2(r, n, i);
      }
    }, e;
  })(Nt)
);
Nt.registerClass(Jy);
function lc(t, e, r, n) {
  for (var i = t.getTicks({
    expandToNicedExtent: !0
  }), a = [], o = t.getExtent(), s = 1; s < i.length; s++) {
    var u = i[s], l = i[s - 1];
    if (!(l.break || u.break)) {
      for (var f = 0, h = [], c = u.value - l.value, v = c / e, d = Mn(v); f < e - 1; ) {
        var g = se(l.value + (f + 1) * v, d);
        g > o[0] && g < o[1] && h.push(g), f++;
      }
      var m = Ze();
      m && m.pruneTicksByBreak("auto", h, r, function(p) {
        return p;
      }, n, o), a.push(h);
    }
  }
  return a;
}
var Or = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "interval", n.parse = e.parse, r = r || {};
      var i = _y(n, r), a = oc(n, i, null);
      return n.brk = a.brk, n._cfg = {
        interval: 0,
        intervalPrecision: 2,
        intervalCount: void 0,
        niceExtent: void 0
      }, n;
    }
    return e.parse = function(r) {
      return r == null || r === "" ? NaN : Number(r);
    }, e.prototype.getConfig = function() {
      return ie(this._cfg);
    }, e.prototype.setConfig = function(r) {
      var n = Aa(this);
      process.env.NODE_ENV !== "production" && (N(r.interval != null), r.intervalCount != null && N(r.intervalCount >= -1 && r.intervalPrecision != null && !Dn(this)), r.niceExtent != null && (N(isFinite(r.niceExtent[0]) && isFinite(r.niceExtent[1])), N(n[0] <= r.niceExtent[0] && r.niceExtent[1] <= n[1]), N(se(r.niceExtent[0] - r.niceExtent[1], fr(r.interval)) <= r.interval))), this._cfg = r = ie(r), r.niceExtent == null && (r.niceExtent = n.slice()), r.intervalPrecision == null && (r.intervalPrecision = Mn(r.interval));
    }, e.prototype.getTicks = function(r) {
      r = r || {};
      var n = this._cfg, i = n.interval, a = Aa(this), o = n.niceExtent, s = n.intervalPrecision, u = Ze(), l = this.brk, f = u && l, h = [];
      if (!i)
        return h;
      if (r.breakTicks === "only_break" && f)
        return u.addBreaksToTicks(h, l.breaks, a), h;
      process.env.NODE_ENV !== "production" && N(o != null);
      var c = 3e3;
      a[0] < o[0] && h.push({
        value: r.expandToNicedExtent ? se(o[0] - i, s) : a[0]
      });
      for (var v = function(_, S) {
        return vr((S - _) / i);
      }, d = n.intervalCount, g = o[0], m = 0; ; m++) {
        if (d == null) {
          if (g > o[1] || !isFinite(g) || !isFinite(o[1]))
            break;
        } else {
          if (m > d)
            break;
          g = ft(g, o[1]), m === d && (g = o[1]);
        }
        if (h.push({
          value: g
        }), g = se(g + i, s), l) {
          var p = l.calcNiceTickMultiple(g, v);
          p >= 0 && (g = se(g + p * i, s));
        }
        if (h.length > 0 && g === h[h.length - 1].value)
          break;
        if (h.length > c)
          return process.env.NODE_ENV !== "production" && je('Exceed safe limit in IntervalScale["getTicks"].'), [];
      }
      var y = h.length ? h[h.length - 1].value : o[1];
      return a[1] > y && h.push({
        value: r.expandToNicedExtent ? se(y + i, s) : a[1]
      }), f && u.pruneTicksByBreak(r.pruneByBreak, h, l.breaks, function(_) {
        return _.value;
      }, n.interval, a), f && r.breakTicks !== "none" && u.addBreaksToTicks(h, l.breaks, a), h;
    }, e.prototype.getMinorTicks = function(r) {
      return lc(this, r, ws(this), this._cfg.interval);
    }, e.prototype.getLabel = function(r, n) {
      if (r == null)
        return "";
      var i = n && n.precision;
      i == null ? i = fr(r.value) || 0 : i === "auto" && (i = this._cfg.intervalPrecision);
      var a = se(r.value, i, !0);
      return Ey(a);
    }, e.type = "interval", e;
  })(Nt)
);
Nt.registerClass(Or);
var eD = function(t, e, r, n) {
  for (; r < n; ) {
    var i = r + n >>> 1;
    t[i][1] < e ? r = i + 1 : n = i;
  }
  return r;
}, jy = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "time", n.parse = e.parse, n._locale = r.locale, n._useUTC = r.useUTC, n._interval = 0;
      var i = _y(n, r), a = oc(n, i, null);
      return n.brk = a.brk, n;
    }
    return e.prototype.getLabel = function(r) {
      return cu(r.value, hd[Mx(va(this._minLevelUnit))] || hd.second, this._useUTC, this._locale);
    }, e.prototype.getFormattedLabel = function(r, n, i) {
      return Ax(r, n, i, this._locale, this._useUTC);
    }, e.prototype.getTicks = function(r) {
      r = r || {};
      var n = this._interval, i = Aa(this), a = Ze(), o = this.brk, s = a && o, u = [];
      if (!n)
        return u;
      var l = this._useUTC;
      if (s && r.breakTicks === "only_break")
        return Ze().addBreaksToTicks(u, o.breaks, i), u;
      u = sD(this._minLevelUnit, this._approxInterval, l, i, du(this), o);
      var f = ot.length - 1, h = 0;
      return x(u, function(c) {
        c.time && (f = Math.min(f, le(ot, c.time.upperTimeUnit)), h = Math.max(h, c.time.level));
      }), s && Ze().pruneTicksByBreak(r.pruneByBreak, u, o.breaks, function(c) {
        return c.value;
      }, this._approxInterval, i), s && r.breakTicks !== "none" && Ze().addBreaksToTicks(u, o.breaks, i, function(c) {
        for (var v = Math.max(le(ot, ui(c.vmin, l)), le(ot, ui(c.vmax, l))), d = 0, g = 0; g < ot.length; g++)
          if (!e_(ot[g], c.vmin, c.vmax, l)) {
            d = g;
            break;
          }
        var m = Math.min(d, f), p = Math.max(m, v);
        return {
          level: h,
          lowerTimeUnit: ot[p],
          upperTimeUnit: ot[m]
        };
      }), u;
    }, e.prototype.getMinorTicks = function(r) {
      return lc(this, r, ws(this), this._interval);
    }, e.prototype.setTimeInterval = function(r) {
      this._interval = r.interval, this._approxInterval = r.approxInterval, this._minLevelUnit = r.minLevelUnit;
    }, e.parse = function(r) {
      return we(r) ? Math.round(r) : +Ai(r);
    }, e.type = "time", e;
  })(Nt)
), wo = [
  // Format                           interval
  ["second", $h],
  ["minute", qh],
  ["hour", ca],
  ["quarter-day", ca * 6],
  ["half-day", ca * 12],
  ["day", xt * 1.2],
  ["half-week", xt * 3.5],
  ["week", xt * 7],
  ["month", xt * 31],
  ["quarter", xt * 95],
  ["half-year", fd / 2],
  ["year", fd]
  // 1Y
];
function e_(t, e, r, n) {
  return Mf(new Date(e), t, n).getTime() === Mf(new Date(r), t, n).getTime();
}
function tD(t, e) {
  return t /= xt, t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1;
}
function rD(t) {
  var e = 30 * xt;
  return t /= e, t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1;
}
function nD(t) {
  return t /= ca, t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1;
}
function Md(t, e) {
  return t /= e ? qh : $h, t > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1;
}
function iD(t) {
  return de(yh(t, !0), 1);
}
function aD(t, e, r) {
  var n = Math.max(0, le(ot, e) - 1);
  return Mf(new Date(t), ot[n], r).getTime();
}
function oD(t, e) {
  var r = /* @__PURE__ */ new Date(0);
  r[t](1);
  var n = r.getTime();
  r[t](1 + e);
  var i = r.getTime() - n;
  return function(a, o) {
    return Math.max(0, Math.round((o - a) / i));
  };
}
function sD(t, e, r, n, i, a) {
  var o = 3e3, s = xx, u = 0;
  function l(O, B, G, U, J, $, te) {
    for (var X = oD(J, O), F = B, ne = new Date(F); F < G && F <= n[1]; ) {
      if (te.push({
        value: F
      }), u++ > o) {
        process.env.NODE_ENV !== "production" && je('Exceed safe limit in TimeScale["getTicks"].');
        break;
      }
      if (ne[J](ne[U]() + O), F = ne.getTime(), a) {
        var ae = a.calcNiceTickMultiple(F, X);
        ae > 0 && (ne[J](ne[U]() + ae * O), F = ne.getTime());
      }
    }
    te.push({
      value: F,
      // extent[1] should be added; deduplication will be performed later.
      notAdd: F > n[1]
    });
  }
  function f(O, B, G) {
    var U = [], J = !B.length;
    if (!e_(va(O), n[0], n[1], r)) {
      J && (B = [{
        value: aD(n[0], O, r)
      }, {
        value: n[1]
      }]);
      for (var $ = 0; $ < B.length - 1; $++) {
        var te = B[$].value, X = B[$ + 1].value;
        if (te !== X) {
          var F = void 0, ne = void 0, ae = void 0, Ue = !1;
          switch (O) {
            case "year":
              F = Math.max(1, Math.round(e / xt / 365)), ne = Sy(r), ae = Lx(r);
              break;
            case "half-year":
            case "quarter":
            case "month":
              F = rD(e), ne = Kh(r), ae = by(r);
              break;
            case "week":
            // PENDING If week is added. Ignore day.
            case "half-week":
            case "day":
              F = tD(e), ne = Qh(r), ae = Ty(r), Ue = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              F = nD(e), ne = Jh(r), ae = wy(r);
              break;
            case "minute":
              F = Md(e, !0), ne = jh(r), ae = xy(r);
              break;
            case "second":
              F = Md(e, !1), ne = ec(r), ae = Cy(r);
              break;
            case "millisecond":
              F = iD(e), ne = tc(r), ae = Dy(r);
              break;
          }
          X >= n[0] && te <= n[1] && l(F, te, X, ne, ae, Ue, U), O === "year" && G.length > 1 && $ === 0 && G.unshift({
            value: G[0].value - F
          });
        }
      }
      for (var $ = 0; $ < U.length; $++)
        G.push(U[$]);
    }
  }
  for (var h = [], c = [], v = 0, d = 0, g = 0; g < s.length; ++g) {
    var m = va(s[g]);
    if (Ex(s[g])) {
      f(s[g], h[h.length - 1] || [], c);
      var p = s[g + 1] ? va(s[g + 1]) : null;
      if (m !== p) {
        if (c.length) {
          d = v, c.sort(function(O, B) {
            return O.value - B.value;
          });
          for (var y = [], _ = 0; _ < c.length; ++_) {
            var S = c[_].value;
            (_ === 0 || c[_ - 1].value !== S) && (y.push(c[_]), S >= n[0] && S <= n[1] && v++);
          }
          var b = i / e;
          if (v > b * 1.5 && d > b / 1.5 || (h.push(y), v > b || t === s[g]))
            break;
        }
        c = [];
      }
    }
  }
  for (var T = ze(q(h, function(O) {
    return ze(O, function(B) {
      return B.value >= n[0] && B.value <= n[1] && !B.notAdd;
    });
  }), function(O) {
    return O.length > 0;
  }), w = T.length - 1, E = [], g = 0; g < T.length; ++g)
    for (var D = T[g], C = 0; C < D.length; ++C) {
      var M = ui(D[C].value, r);
      E.push({
        value: D[C].value,
        time: {
          level: w - g,
          upperTimeUnit: M,
          lowerTimeUnit: M
        }
      });
    }
  bh(E, Cb, null), E.sort(function(O, B) {
    return O.value - B.value;
  });
  var L = E[0], A = E[E.length - 1], I = ui(n[0], r), P = ui(n[1], r);
  return (!L || L.value > n[0]) && E.unshift({
    value: n[0],
    time: {
      level: 0,
      upperTimeUnit: I,
      lowerTimeUnit: I
    },
    notNice: !0
  }), (!A || A.value < n[1]) && E.push({
    value: n[1],
    time: {
      level: 0,
      upperTimeUnit: P,
      lowerTimeUnit: P
    },
    notNice: !0
  }), E;
}
var uD = function(t, e) {
  var r = t.getExtent();
  if (r[0] === r[1] && (r[0] -= xt, r[1] += xt), r[1] === -1 / 0 && r[0] === 1 / 0) {
    var n = /* @__PURE__ */ new Date();
    r[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), r[0] = r[1] - xt;
  }
  t.setExtent(r[0], r[1]);
  var i = uc(e.splitNumber, 10), a = du(t) / i, o = e.minInterval, s = e.maxInterval;
  o != null && a < o && (a = o), s != null && a > s && (a = s);
  var u = wo.length, l = Math.min(eD(wo, a, 0, u), u - 1), f = wo[l][1], h = wo[Math.max(l - 1, 0)][0];
  t.setTimeInterval({
    approxInterval: a,
    interval: f,
    minLevelUnit: h
  });
};
Nt.registerClass(jy);
var xo = 0, Co = 1, lD = 2, Es = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "log", n.parse = Or.parse, n.base = r.logBase || 10;
      var i = [], a = [], o = n._lookup = {
        from: i,
        to: a
      };
      i[xo] = i[Co] = a[xo] = a[Co] = NaN, Zy(n, e.mapperMethods);
      var s = Ze(), u = r.breakOption, l = {
        lookup: o
      };
      return s && s.parseAxisBreakOptionInwardTransform(u, n, {
        noNegative: !0
      }, lD, l), n.powStub = new Or({
        breakParsed: l.original
      }), n.intervalStub = new Or({
        breakParsed: l.transformed
      }), $y(n, n.intervalStub), n;
    }
    return e.prototype.getTicks = function(r) {
      var n = this.base, i = this.powStub, a = Ze(), o = this.intervalStub, s = o.getExtent(), u = i.getExtent(), l = {
        lookup: {
          from: s,
          to: u
        }
      };
      return q(o.getTicks(r || {}), function(f) {
        var h = f.value, c = fl(h, n, l), v;
        if (a) {
          var d = a.getTicksBreakOutwardTransform(this, f, ws(i), this._lookup);
          d && (v = d.vBreak, c = d.tickVal);
        }
        return {
          value: c,
          break: v
        };
      }, this);
    }, e.prototype.getMinorTicks = function(r) {
      return lc(
        this,
        r,
        ws(this.powStub),
        // NOTE: minor ticks are in the log scale value to visually hint users "logarithm".
        this.intervalStub.getConfig().interval
      );
    }, e.prototype.getLabel = function(r, n) {
      return this.intervalStub.getLabel(r, n);
    }, e.type = "log", e.mapperMethods = {
      needTransform: function() {
        return !0;
      },
      normalize: function(r) {
        return this.intervalStub.normalize(To(r, this.base));
      },
      scale: function(r) {
        return fl(this.intervalStub.scale(r), this.base, null);
      },
      transformIn: function(r, n) {
        return r = To(r, this.base), n && n.depth === xs ? r : this.intervalStub.transformIn(r, n);
      },
      transformOut: function(r, n) {
        var i = n ? n.depth : null;
        return Ad.depth = i, Ld.lookup = this._lookup, fl(i === xs ? r : this.intervalStub.transformOut(r, Ad), this.base, Ld);
      },
      contain: function(r) {
        return this.powStub.contain(r);
      },
      /**
       * NOTICE: The caller should ensure `start` and `end` are both non-negative.
       */
      setExtent: function(r, n) {
        this.setExtent2(Ct, r, n);
      },
      setExtent2: function(r, n, i) {
        if (!(!yi(n, i) || n <= 0 || i <= 0)) {
          var a = Id, o = Id;
          if (r === Ct) {
            var s = this._lookup;
            a = s.to, o = s.from;
          }
          this.powStub.setExtent2(r, a[xo] = n, a[Co] = i);
          var u = this.base;
          this.intervalStub.setExtent2(r, o[xo] = To(n, u), o[Co] = To(i, u));
        }
      },
      getFilter: function() {
        return {
          g: 0
        };
      },
      sanitize: function(r, n) {
        return yi(n[0], n[1]) && Qt(r) && r <= 0 && (r = n[0]), r;
      },
      getDefaultStartValue: function() {
        return 1;
      },
      getExtent: function() {
        return this.powStub.getExtent();
      },
      getExtentUnsafe: function(r, n) {
        return n === null ? this.powStub.getExtentUnsafe(r, null) : this.intervalStub.getExtentUnsafe(r, n);
      }
    }, e;
  })(Nt)
);
Nt.registerClass(Es);
var Ad = {}, Ld = {}, Id = [], t_ = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
}, r_ = ye();
function fD(t) {
  var e = t.get("type");
  return (
    // In ec option, `xxxAxis.type` may be undefined.
    (e == null || !lt(t_, e) && !Nt.getClass(e)) && (e = "value"), e
  );
}
function hD(t, e, r) {
  var n = Ze(), i;
  switch (n && (i = n_(t, e)), e) {
    case "category":
      return new Jy({
        ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
        extent: Tt()
      });
    case "time":
      return new jy({
        locale: t.ecModel.getLocaleModel(),
        useUTC: t.ecModel.get("useUTC"),
        breakOption: i
      });
    case "log":
      return new Es({
        logBase: t.get("logBase"),
        breakOption: i
      });
    case "value":
      return new Or({
        breakOption: i
      });
    default:
      return new (Nt.getClass(e) || Or)({});
  }
}
function cD(t, e, r) {
  var n = t.getExtentUnsafe(Ct, null), i = n[0], a = n[1];
  return yi(i, a) ? i === e || a === e ? dD : i < e && a > e ? vD : kf : kf;
}
var vD = 1, dD = 2, kf = 3;
function pD(t) {
  r_(t).noOnMyZero = !0;
}
function gD(t) {
  return r_(t).noOnMyZero;
}
function pu(t) {
  var e = t.getLabelModel().get("formatter");
  if (t.type === "time") {
    var r = Cx(e);
    return function(i, a) {
      return t.scale.getFormattedLabel(i, a, r);
    };
  } else {
    if (H(e))
      return function(i) {
        var a = t.scale.getLabel(i), o = e.replace("{value}", a ?? "");
        return o;
      };
    if (Q(e)) {
      if (t.type === "category")
        return function(i, a) {
          return e(
            Ms(t, i),
            i.value - t.scale.getExtent()[0],
            null
            // Using `null` just for backward compat.
          );
        };
      var n = Ze();
      return function(i, a) {
        var o = null;
        return n && (o = n.makeAxisLabelFormatterParamBreak(o, i.break)), e(Ms(t, i), a, o);
      };
    } else
      return function(i) {
        return t.scale.getLabel(i);
      };
  }
}
function Ms(t, e) {
  var r = t.scale;
  return ir(r) ? r.getLabel(e) : e.value;
}
function fc(t) {
  var e = t.get("interval");
  return e ?? "auto";
}
function mD(t) {
  return t.type === "category" && fc(t.getLabelModel()) === 0;
}
function yD(t, e) {
  var r = {};
  return x(t.mapDimensionsAll(e), function(n) {
    r[Jw(t, n)] = !0;
  }), be(r);
}
function xi(t) {
  return t === "middle" || t === "center";
}
function La(t) {
  return t.getShallow("show");
}
function n_(t, e, r) {
  var n = t.get("breaks", !0);
  if (n != null) {
    if (!Ze()) {
      process.env.NODE_ENV !== "production" && ue('Must `import {AxisBreak} from "echarts/features.js"; use(AxisBreak);` first if using breaks option.');
      return;
    }
    if (!_D(e)) {
      if (process.env.NODE_ENV !== "production") {
        var i = t instanceof fe ? " " + t.type + "[" + t.componentIndex + "]" : "";
        ue("Axis" + i + " does not support break.");
      }
      return;
    }
    return n;
  }
}
function _D(t) {
  return t !== "category";
}
function i_(t, e, r, n, i, a) {
  var o = wi(t), s = o ? t.intervalStub : t;
  if (s.setExtent(n[0], n[1]), o) {
    var u = t.powStub, l = {
      depth: xs
    }, f = t.transformOut(n[0], l), h = t.transformOut(n[1], l), c = jC(r, n);
    e[0] && !c[0] && (f = i[0]), e[1] && !c[1] && (h = i[1]), u.setExtent(f, h);
  }
  s.setConfig(a);
}
function Ya(t, e) {
  return ir(t) ? t.getRawOrdinalNumber(e.value) : e.value;
}
function a_(t, e) {
  return ir(t) && !!e.get("boundaryGap");
}
function Od(t, e) {
  if (t.length === e.length) {
    for (var r = 0; r < t.length; r++)
      if (t[r] !== e[r])
        return;
    return !0;
  }
}
function Pd(t) {
  for (var e = Tt(), r = Tt(), n = 0; n < t.length; ) {
    var i = t[n++], a = t[n++];
    Et(i, a) || (vf(e, i), vf(r, a));
  }
  return [e, r];
}
function Nd(t, e) {
  var r = Pd(t), n = r[0], i = r[1], a = Pd(e), o = a[0], s = a[1];
  return Math.max(Math.abs(n[0] - o[0]), Math.abs(i[0] - s[0]), Math.abs(n[1] - o[1]), Math.abs(i[1] - s[1]));
}
function Rd(t) {
  return we(t) ? t : t ? 0.5 : 0;
}
function SD(t, e, r) {
  if (r.valueDim == null)
    return [];
  for (var n = e.count(), i = ri(n * 2), a = 0; a < n; a++) {
    var o = Hy(r, t, e, a);
    i[a * 2] = o[0], i[a * 2 + 1] = o[1];
  }
  return i;
}
function xr(t, e, r, n, i) {
  var a = r.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], u = 0, l = [], f = [], h = [], c = [];
  if (i) {
    for (u = 0; u < t.length; u += 2) {
      var v = e || t;
      Et(v[u], v[u + 1]) || c.push(t[u], t[u + 1]);
    }
    t = c;
  }
  for (u = 0; u < t.length - 2; u += 2)
    switch (h[0] = t[u + 2], h[1] = t[u + 3], f[0] = t[u], f[1] = t[u + 1], s.push(f[0], f[1]), n) {
      case "end":
        l[o] = h[o], l[1 - o] = f[1 - o], s.push(l[0], l[1]);
        break;
      case "middle":
        var d = (f[o] + h[o]) / 2, g = [];
        l[o] = g[o] = d, l[1 - o] = f[1 - o], g[1 - o] = h[1 - o], s.push(l[0], l[1]), s.push(g[0], g[1]);
        break;
      default:
        l[o] = f[o], l[1 - o] = h[1 - o], s.push(l[0], l[1]);
    }
  return s.push(t[u++], t[u++]), s;
}
function bD(t, e) {
  var r = [], n = t.length, i, a;
  function o(f, h, c) {
    var v = f.coord, d = (c - v) / (h.coord - v), g = nS(d, [f.color, h.color]);
    return {
      coord: c,
      color: g
    };
  }
  for (var s = 0; s < n; s++) {
    var u = t[s], l = u.coord;
    if (l < 0)
      i = u;
    else if (l > e) {
      a ? r.push(o(a, u, e)) : i && r.push(o(i, u, 0), o(i, u, e));
      break;
    } else
      i && (r.push(o(i, u, 0)), i = null), r.push(u), a = u;
  }
  return r;
}
function TD(t, e, r) {
  var n = t.getVisual("visualMeta");
  if (!(!n || !n.length || !t.count())) {
    if (e.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var i, a, o = n.length - 1; o >= 0; o--) {
      var s = t.getDimensionInfo(n[o].dimension);
      if (i = s && s.coordDim, i === "x" || i === "y") {
        a = n[o];
        break;
      }
    }
    if (!a) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var u = e.getAxis(i), l = q(a.stops, function(_) {
      return {
        coord: u.toGlobalCoord(u.dataToCoord(_.value)),
        color: _.color
      };
    }), f = l.length, h = a.outerColors.slice();
    f && l[0].coord > l[f - 1].coord && (l.reverse(), h.reverse());
    var c = bD(l, i === "x" ? r.getWidth() : r.getHeight()), v = c.length;
    if (!v && f)
      return l[0].coord < 0 ? h[1] ? h[1] : l[f - 1].color : h[0] ? h[0] : l[0].color;
    var d = 10, g = c[0].coord - d, m = c[v - 1].coord + d, p = m - g;
    if (p < 1e-3)
      return "transparent";
    x(c, function(_) {
      _.offset = (_.coord - g) / p;
    }), c.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: v ? c[v - 1].offset : 0.5,
      color: h[1] || "transparent"
    }), c.unshift({
      offset: v ? c[0].offset : 0.5,
      color: h[0] || "transparent"
    });
    var y = new Bm(0, 0, 0, 0, c, !0);
    return y[i] = g, y[i + "2"] = m, y;
  }
}
function wD(t, e, r) {
  var n = t.get("showAllSymbol"), i = n === "auto";
  if (!(n && !i)) {
    var a = r.getAxesByScale("ordinal")[0];
    if (a && !(i && xD(a, e))) {
      var o = e.mapDimension(a.dim), s = {};
      return x(a.getViewLabels(), function(u) {
        u.tick.offInterval || (s[Ya(a.scale, u.tick)] = 1);
      }), function(u) {
        return !s.hasOwnProperty(e.get(o, u));
      };
    }
  }
}
function xD(t, e) {
  var r = t.getExtent(), n = Math.abs(r[1] - r[0]) / t.scale.count();
  isNaN(n) && (n = 0);
  for (var i = e.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
    if (ac.getSymbolSize(
      e,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[t.isHorizontal() ? 1 : 0] * 1.5 > n)
      return !1;
  return !0;
}
function CD(t) {
  for (var e = t.length / 2; e > 0 && Et(t[e * 2 - 2], t[e * 2 - 1]); e--)
    ;
  return e - 1;
}
function kd(t, e) {
  return [t[e * 2], t[e * 2 + 1]];
}
function DD(t, e, r) {
  for (var n = t.length / 2, i = r === "x" ? 0 : 1, a, o, s = 0, u = -1, l = 0; l < n; l++)
    if (o = t[l * 2 + i], !Et(o, t[l * 2 + 1 - i])) {
      if (l === 0) {
        a = o;
        continue;
      }
      if (a <= e && o >= e || a >= e && o <= e) {
        u = l;
        break;
      }
      s = l, a = o;
    }
  return {
    range: [s, u],
    t: (e - a) / (o - a)
  };
}
function o_(t) {
  if (t.get(["endLabel", "show"]))
    return !0;
  for (var e = 0; e < Jt.length; e++)
    if (t.get([Jt[e], "endLabel", "show"]))
      return !0;
  return !1;
}
function hl(t, e, r, n) {
  if (WC(e, "cartesian2d")) {
    var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
      lastFrameIndex: 0
    }, u = o_(n) ? function(v, d) {
      t._endLabelOnDuring(v, d, o, s, a, i, e);
    } : null, l = e.getBaseAxis().isHorizontal(), f = GC(e, r, n, function() {
      var v = t._endLabel;
      v && r && s.originalX != null && v.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, u);
    if (!n.get("clip", !0)) {
      var h = f.shape, c = Math.max(h.width, h.height);
      l ? (h.y -= c, h.height += c * 2) : (h.x -= c, h.width += c * 2);
    }
    return u && u(1, f), f;
  } else
    return process.env.NODE_ENV !== "production" && n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), UC(e, r, n);
}
function ED(t, e) {
  var r = e.getBaseAxis(), n = r.isHorizontal(), i = r.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: t.get("align") || a,
      verticalAlign: t.get("verticalAlign") || o
    }
  };
}
var MD = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.init = function() {
      var r = new ke(), n = new AC();
      this.group.add(n.group), this._symbolDraw = n, this._lineGroup = r, this._changePolyState = Se(this._changePolyState, this);
    }, e.prototype.render = function(r, n, i) {
      var a = r.coordinateSystem, o = this.group, s = r.getData(), u = r.getModel("lineStyle"), l = r.getModel("areaStyle"), f = s.getLayout("points") || [], h = a.type === "polar", c = this._coordSys, v = this._symbolDraw, d = this._polyline, g = this._polygon, m = this._lineGroup, p = !n.ssr && r.get("animation"), y = !l.isEmpty(), _ = l.get("origin"), S = zy(a, s, _), b = y && SD(a, s, S), T = r.get("showSymbol"), w = r.get("connectNulls"), E = T && !h && wD(r, s, a), D = this._data;
      D && D.eachItemGraphicEl(function(Te, Me) {
        Te.__temp && (o.remove(Te), D.setItemGraphicEl(Me, null));
      }), T || v.remove(), o.add(m);
      var C = h ? !1 : r.get("step"), M;
      a && a.getArea && r.get("clip", !0) && (M = a.getArea(), M.width != null ? (M.x -= 0.1, M.y -= 0.1, M.width += 0.2, M.height += 0.2) : M.r0 && (M.r0 -= 0.5, M.r += 0.5)), this._clipShapeForSymbol = M;
      var L = TD(s, a, i) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(d && c.type === a.type && C === this._step))
        T && v.updateData(s, {
          isIgnore: E,
          clipShape: M,
          disableAnimation: !0,
          getSymbolPoint: function(Te) {
            return [f[Te * 2], f[Te * 2 + 1]];
          }
        }), p && this._initSymbolLabelAnimation(s, a, M), C && (b && (b = xr(b, f, a, C, w)), f = xr(f, null, a, C, w)), d = this._newPolyline(f), y ? g = this._newPolygon(f, b) : g && (m.remove(g), g = this._polygon = null), h || this._initOrUpdateEndLabel(r, a, En(L)), m.setClipPath(hl(this, a, !0, r));
      else {
        y && !g ? g = this._newPolygon(f, b) : g && !y && (m.remove(g), g = this._polygon = null), h || this._initOrUpdateEndLabel(r, a, En(L));
        var A = m.getClipPath();
        if (A) {
          var I = hl(this, a, !1, r);
          Ua(A, {
            shape: I.shape
          }, r);
        } else
          m.setClipPath(hl(this, a, !0, r));
        T && v.updateData(s, {
          isIgnore: E,
          clipShape: M,
          disableAnimation: !0,
          getSymbolPoint: function(Te) {
            return [f[Te * 2], f[Te * 2 + 1]];
          }
        }), (!Od(this._stackedOnPoints, b) || !Od(this._points, f)) && (p ? this._doUpdateAnimation(s, b, a, i, C, _, w) : (C && (b && (b = xr(b, f, a, C, w)), f = xr(f, null, a, C, w)), d.setShape({
          points: f
        }), g && g.setShape({
          points: f,
          stackedOnPoints: b
        })));
      }
      var P = r.getModel("emphasis"), O = P.get("focus"), B = P.get("blurScope"), G = P.get("disabled");
      if (d.useStyle(pe(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: L,
          lineJoin: "bevel"
        }
      )), Rv(d, r, "lineStyle"), d.style.lineWidth > 0 && r.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var U = d.getState("emphasis").style;
        U.lineWidth = +d.style.lineWidth + 1;
      }
      ve(d).seriesIndex = r.seriesIndex, _f(d, O, B, G);
      var J = Rd(r.get("smooth")), $ = r.get("smoothMonotone");
      if (d.setShape({
        smooth: J,
        smoothMonotone: $,
        connectNulls: w
      }), g) {
        var te = s.getCalculationInfo("stackedOnSeries"), X = 0;
        g.useStyle(pe(l.getAreaStyle(), {
          fill: L,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), te && (X = Rd(te.get("smooth"))), g.setShape({
          smooth: J,
          stackedOnSmooth: X,
          smoothMonotone: $,
          connectNulls: w
        }), Rv(g, r, "areaStyle"), ve(g).seriesIndex = r.seriesIndex, _f(g, O, B, G);
      }
      var F = this._changePolyState;
      s.eachItemGraphicEl(function(Te) {
        Te && (Te.onHoverStateChange = F);
      }), this._polyline.onHoverStateChange = F, this._data = s, this._coordSys = a, this._stackedOnPoints = b, this._points = f, this._step = C, this._valueOrigin = _;
      var ne = r.get("triggerEvent"), ae = r.get("triggerLineEvent");
      process.env.NODE_ENV !== "production" && ae && YC("triggerLineEvent", "Use the `triggerEvent` option instead.");
      var Ue = ae === !0 || ne === !0 || ne === "line", Mt = ae === !0 || ne === !0 || ne === "area";
      this.packEventData(r, d, Ue), g && this.packEventData(r, g, Mt);
    }, e.prototype.packEventData = function(r, n, i) {
      ve(n).eventData = i ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: r.componentIndex,
        seriesIndex: r.seriesIndex,
        seriesName: r.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: n === this._polygon ? "area" : "line"
      } : null;
    }, e.prototype.highlight = function(r, n, i, a) {
      var o = r.getData(), s = Cn(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var u = o.getLayout("points"), l = o.getItemGraphicEl(s);
        if (!l) {
          var f = u[s * 2], h = u[s * 2 + 1];
          if (Et(f, h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
            return;
          var c = r.get("zlevel") || 0, v = r.get("z") || 0;
          l = new ac(o, s), l.x = f, l.y = h, l.setZ(c, v);
          var d = l.getSymbolPath().getTextContent();
          d && (d.zlevel = c, d.z = v, d.z2 = this._polyline.z2 + 1), l.__temp = !0, o.setItemGraphicEl(s, l), l.stopSymbolAnimation(!0), this.group.add(l);
        }
        l.highlight();
      } else
        Kt.prototype.highlight.call(this, r, n, i, a);
    }, e.prototype.downplay = function(r, n, i, a) {
      var o = r.getData(), s = Cn(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var u = o.getItemGraphicEl(s);
        u && (u.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(u)) : u.downplay());
      } else
        Kt.prototype.downplay.call(this, r, n, i, a);
    }, e.prototype._changePolyState = function(r) {
      var n = this._polygon;
      Lv(this._polyline, r), n && Lv(n, r);
    }, e.prototype._newPolyline = function(r) {
      var n = this._polyline;
      return n && this._lineGroup.remove(n), n = new RC({
        shape: {
          points: r
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(n), this._polyline = n, n;
    }, e.prototype._newPolygon = function(r, n) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new BC({
        shape: {
          points: r,
          stackedOnPoints: n
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(i), this._polygon = i, i;
    }, e.prototype._initSymbolLabelAnimation = function(r, n, i) {
      var a, o, s = n.getBaseAxis(), u = s.inverse;
      n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
      var l = r.hostModel, f = l.get("animationDuration");
      Q(f) && (f = f(null));
      var h = l.get("animationDelay") || 0, c = Q(h) ? h(null) : h;
      r.eachItemGraphicEl(function(v, d) {
        var g = v;
        if (g) {
          var m = [v.x, v.y], p = void 0, y = void 0, _ = void 0;
          if (i)
            if (o) {
              var S = i, b = n.pointToCoord(m);
              a ? (p = S.startAngle, y = S.endAngle, _ = -b[1] / 180 * Math.PI) : (p = S.r0, y = S.r, _ = b[0]);
            } else {
              var T = i;
              a ? (p = T.x, y = T.x + T.width, _ = v.x) : (p = T.y + T.height, y = T.y, _ = v.y);
            }
          var w = y === p ? 0 : (_ - p) / (y - p);
          u && (w = 1 - w);
          var E = Q(h) ? h(d) : f * w + c, D = g.getSymbolPath(), C = D.getTextContent();
          g.attr({
            scaleX: 0,
            scaleY: 0
          }), g.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: E
          }), C && C.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: E
          }), D.disableLabelAnimation = !0;
        }
      });
    }, e.prototype._initOrUpdateEndLabel = function(r, n, i) {
      var a = r.getModel("endLabel");
      if (o_(r)) {
        var o = r.getData(), s = this._polyline, u = o.getLayout("points");
        if (!u) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var l = this._endLabel;
        l || (l = this._endLabel = new it({
          z2: 200
          // should be higher than item symbol
        }), l.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = CD(u);
        f >= 0 && (Hh(s, Gh(r, "endLabel"), {
          inheritColor: i,
          labelFetcher: r,
          labelDataIndex: f,
          defaultText: function(h, c, v) {
            return v != null ? EC(o, v) : Fy(o, h);
          },
          enableTextSetter: !0
        }, ED(a, n)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, e.prototype._endLabelOnDuring = function(r, n, i, a, o, s, u) {
      var l = this._endLabel, f = this._polyline;
      if (l) {
        r < 1 && a.originalX == null && (a.originalX = l.x, a.originalY = l.y);
        var h = i.getLayout("points"), c = i.hostModel, v = c.get("connectNulls"), d = s.get("precision"), g = s.get("distance") || 0, m = u.getBaseAxis(), p = m.isHorizontal(), y = m.inverse, _ = n.shape, S = y ? p ? _.x : _.y + _.height : p ? _.x + _.width : _.y, b = (p ? g : 0) * (y ? -1 : 1), T = (p ? 0 : -g) * (y ? -1 : 1), w = p ? "x" : "y", E = DD(h, S, w), D = E.range, C = D[1] - D[0], M = void 0;
        if (C >= 1) {
          if (C > 1 && !v) {
            var L = kd(h, D[0]);
            l.attr({
              x: L[0] + b,
              y: L[1] + T
            }), o && (M = c.getRawValue(D[0]));
          } else {
            var L = f.getPointOn(S, w);
            L && l.attr({
              x: L[0] + b,
              y: L[1] + T
            });
            var A = c.getRawValue(D[0]), I = c.getRawValue(D[1]);
            o && (M = bb(i, d, A, I, E.t));
          }
          a.lastFrameIndex = D[0];
        } else {
          var P = r === 1 || a.lastFrameIndex > 0 ? D[0] : 0, L = kd(h, P);
          o && (M = c.getRawValue(P)), l.attr({
            x: L[0] + b,
            y: L[1] + T
          });
        }
        if (o) {
          var O = Km(l);
          typeof O.setLabelText == "function" && O.setLabelText(M);
        }
      }
    }, e.prototype._doUpdateAnimation = function(r, n, i, a, o, s, u) {
      var l = this._polyline, f = this._polygon, h = r.hostModel, c = NC(this._data, r, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), v = c.current, d = c.stackedOnCurrent, g = c.next, m = c.stackedOnNext;
      if (o && (d = xr(c.stackedOnCurrent, c.current, i, o, u), v = xr(c.current, null, i, o, u), m = xr(c.stackedOnNext, c.next, i, o, u), g = xr(c.next, null, i, o, u)), Nd(v, g) > 3e3 || f && Nd(d, m) > 3e3) {
        l.stopAnimation(), l.setShape({
          points: g
        }), f && (f.stopAnimation(), f.setShape({
          points: g,
          stackedOnPoints: m
        }));
        return;
      }
      l.shape.__points = c.current, l.shape.points = v;
      var p = {
        shape: {
          points: g
        }
      };
      c.current !== v && (p.shape.__points = c.next), l.stopAnimation(), kr(l, p, h), f && (f.setShape({
        // Reuse the points with polyline.
        points: v,
        stackedOnPoints: d
      }), f.stopAnimation(), kr(f, {
        shape: {
          stackedOnPoints: m
        }
      }, h), l.shape.points !== f.shape.points && (f.shape.points = l.shape.points));
      for (var y = [], _ = c.status, S = 0; S < _.length; S++) {
        var b = _[S].cmd;
        if (b === "=") {
          var T = r.getItemGraphicEl(_[S].idx1);
          T && y.push({
            el: T,
            ptIdx: S
            // Index of points
          });
        }
      }
      l.animators && l.animators.length && l.animators[0].during(function() {
        f && f.dirtyShape();
        for (var w = l.shape.__points, E = 0; E < y.length; E++) {
          var D = y[E].el, C = y[E].ptIdx * 2;
          D.x = w[C], D.y = w[C + 1], D.markRedraw();
        }
      });
    }, e.prototype.remove = function(r) {
      var n = this.group, i = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
        a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, e.type = "line", e;
  })(Kt)
);
function AD(t, e) {
  return {
    seriesType: t,
    plan: Uy(),
    reset: function(r) {
      var n = r.getData(), i = r.coordinateSystem;
      if (r.pipelineContext, !!i) {
        var a = q(i.dimensions, function(h) {
          return n.mapDimension(h);
        }).slice(0, 2), o = a.length, s = n.getCalculationInfo("stackResultDimension");
        xa(n, a[0]) && (a[0] = s), xa(n, a[1]) && (a[1] = s);
        var u = n.getStore(), l = n.getDimensionIndex(a[0]), f = n.getDimensionIndex(a[1]);
        return o && {
          progress: function(h, c) {
            for (var v = h.end - h.start, d = ri(v * o), g = [], m = [], p = h.start, y = 0; p < h.end; p++) {
              var _ = void 0;
              if (o === 1) {
                var S = u.get(l, p);
                _ = i.dataToPoint(S, null, m);
              } else
                g[0] = u.get(l, p), g[1] = u.get(f, p), _ = i.dataToPoint(g, null, m);
              d[y++] = _[0], d[y++] = _[1];
            }
            c.setLayout("points", d), c.setLayout("pointsRange", {
              start: h.start,
              end: h.end
            });
          }
        };
      }
    }
  };
}
var LD = {
  average: function(t) {
    for (var e = 0, r = 0, n = 0; n < t.length; n++)
      isNaN(t[n]) || (e += t[n], r++);
    return r === 0 ? NaN : e / r;
  },
  sum: function(t) {
    for (var e = 0, r = 0; r < t.length; r++)
      e += t[r] || 0;
    return e;
  },
  max: function(t) {
    for (var e = -1 / 0, r = 0; r < t.length; r++)
      t[r] > e && (e = t[r]);
    return isFinite(e) ? e : NaN;
  },
  min: function(t) {
    for (var e = 1 / 0, r = 0; r < t.length; r++)
      t[r] < e && (e = t[r]);
    return isFinite(e) ? e : NaN;
  },
  // TODO
  // Median
  nearest: function(t) {
    return t[0];
  }
}, ID = function(t) {
  return Math.round(t.length / 2);
};
function OD(t) {
  return {
    seriesType: t,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(e, r, n) {
      var i = e.getData(), a = e.get("sampling"), o = e.coordinateSystem, s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(), l = o.getOtherAxis(u), f = u.getExtent(), h = n.getDevicePixelRatio(), c = Math.abs(f[1] - f[0]) * (h || 1), v = Math.round(s / c);
        if (isFinite(v) && v > 1) {
          a === "lttb" ? e.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / v)) : a === "minmax" && e.setData(i.minmaxDownSample(i.mapDimension(l.dim), 1 / v));
          var d = void 0;
          H(a) ? d = LD[a] : Q(a) && (d = a), d && e.setData(i.downSample(i.mapDimension(l.dim), 1 / v, d, ID));
        }
      }
    }
  };
}
function PD(t) {
  t.registerChartView(MD), t.registerSeriesModel(DC), t.registerLayout(AD("line")), t.registerVisual({
    seriesType: "line",
    reset: function(e) {
      var r = e.getData(), n = e.getModel("lineStyle").getLineStyle();
      n && !n.stroke && (n.stroke = r.getVisual("style").fill), r.setVisual("legendLineStyle", n);
    }
  }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, OD("line"));
}
var ND = ye(), ga = ye(), It = {
  estimate: 1,
  determine: 2
};
function As(t) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: t
  };
}
function RD(t, e) {
  var r = t.getLabelModel().get("customValues");
  if (r) {
    var n = t.scale;
    return {
      labels: q(s_(r, n), function(i, a) {
        return {
          formattedLabel: pu(t)(i, a),
          rawLabel: n.getLabel(i),
          tick: i
        };
      })
    };
  }
  return t.type === "category" ? BD(t, e) : FD(t);
}
function kD(t, e, r) {
  var n = t.scale, i = t.getTickModel().get("customValues");
  return i ? {
    ticks: s_(i, n)
  } : t.type === "category" ? VD(t, e) : {
    ticks: n.getTicks(r)
  };
}
function s_(t, e) {
  var r = e.getExtent(), n = [];
  return x(t, function(i) {
    i = e.parse(i), i >= r[0] && i <= r[1] && n.push(i);
  }), bh(n, Db, null), am(n), q(n, function(i) {
    return {
      value: i
    };
  });
}
function BD(t, e) {
  var r = t.getLabelModel(), n = u_(t, r, e);
  return !r.get("show") || t.scale.isBlank() ? {
    labels: []
  } : n;
}
function u_(t, e, r) {
  var n = HD(t), i = fc(e), a = r.kind === It.estimate;
  if (!a) {
    var o = f_(n, i);
    if (o)
      return o;
  }
  var s, u;
  Q(i) ? s = Ls(t, i, !1) : (u = i === "auto" ? GD(t, r) : i, s = Ls(t, u, !1));
  var l = {
    labels: s,
    labelCategoryInterval: u
  };
  return a ? r.out.noPxChangeTryDetermine.push(function() {
    return Bf(n, i, l), !0;
  }) : Bf(n, i, l), l;
}
function VD(t, e) {
  var r = zD(t), n = fc(e), i = f_(r, n);
  if (i)
    return i;
  var a, o;
  if ((!e.get("show") || t.scale.isBlank()) && (a = []), Q(n))
    a = Ls(t, n, !0);
  else if (n === "auto") {
    var s = u_(t, t.getLabelModel(), As(It.determine));
    o = s.labelCategoryInterval, a = q(s.labels, function(u) {
      return u.tick;
    });
  } else
    o = n, a = Ls(t, o, !0);
  return Bf(r, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function FD(t) {
  var e = t.scale.getTicks(), r = pu(t);
  return {
    labels: q(e, function(n, i) {
      return {
        formattedLabel: r(n, i),
        rawLabel: t.scale.getLabel(n),
        tick: n
      };
    })
  };
}
var zD = l_("axisTick"), HD = l_("axisLabel");
function l_(t) {
  return function(r) {
    return ga(r)[t] || (ga(r)[t] = {
      list: []
    });
  };
}
function f_(t, e) {
  for (var r = 0; r < t.list.length; r++)
    if (t.list[r].key === e)
      return t.list[r].value;
}
function Bf(t, e, r) {
  return t.list.push({
    key: e,
    value: r
  }), r;
}
function GD(t, e) {
  if (e.kind === It.estimate) {
    var r = t.calculateCategoryInterval(e);
    return e.out.noPxChangeTryDetermine.push(function() {
      return ga(t).autoInterval = r, !0;
    }), r;
  }
  var n = ga(t).autoInterval;
  return n ?? (ga(t).autoInterval = t.calculateCategoryInterval(e));
}
function UD(t, e) {
  var r = e.kind, n = YD(t), i = pu(t), a = (n.axisRotate - n.labelRotate) / 180 * Math.PI, o = t.scale, s = o.getExtent(), u = o.count();
  if (s[1] - s[0] < 1)
    return 0;
  var l = 1, f = 40;
  u > f && (l = Math.max(1, Math.floor(u / f)));
  for (var h = s[0], c = t.dataToCoord(h + 1) - t.dataToCoord(h), v = Math.abs(c * Math.cos(a)), d = Math.abs(c * Math.sin(a)), g = 0, m = 0; h <= s[1]; h += l) {
    var p = 0, y = 0, _ = Fg(i({
      value: h
    }), n.font, "center", "top");
    p = _.width * 1.3, y = _.height * 1.3, g = Math.max(g, p, 7), m = Math.max(m, y, 7);
  }
  var S = g / v, b = m / d;
  isNaN(S) && (S = 1 / 0), isNaN(b) && (b = 1 / 0);
  var T = Math.max(0, Math.floor(Math.min(S, b)));
  if (r === It.estimate)
    return e.out.noPxChangeTryDetermine.push(Se(WD, null, t, T, u)), T;
  var w = h_(t, T, u);
  return w ?? T;
}
function WD(t, e, r) {
  return h_(t, e, r) == null;
}
function h_(t, e, r) {
  var n = ND(t.model), i = t.getExtent(), a = n.lastAutoInterval, o = n.lastTickCount;
  if (a != null && o != null && Math.abs(a - e) <= 1 && Math.abs(o - r) <= 1 && a > e && n.axisExtent0 === i[0] && n.axisExtent1 === i[1])
    return a;
  n.lastTickCount = r, n.lastAutoInterval = e, n.axisExtent0 = i[0], n.axisExtent1 = i[1];
}
function YD(t) {
  var e = t.getLabelModel();
  return {
    axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
    labelRotate: e.get("rotate") || 0,
    font: e.getFont()
  };
}
function Ls(t, e, r) {
  var n = pu(t), i = t.scale, a = [], o = Q(e);
  return Qy(i, o ? 0 : e, function(s, u) {
    var l = i.getLabel(s);
    if (o) {
      var f = !!e(s.value, l);
      if (s.offInterval = !f, !f && !u)
        return;
    }
    a.push(r ? s : {
      formattedLabel: n(s),
      rawLabel: l,
      tick: s
    });
  }), a;
}
var hc = ye();
function XD(t) {
  hc(t).prepare = {};
}
function ZD(t) {
  hc(t).fullUpdate = {};
}
function Xa(t) {
  return hc(t).fullUpdate;
}
var Vf = "|&", Za = ye(), $D = -2;
ye();
var Li;
process.env.NODE_ENV !== "production" && (Li = function(t) {
  N(t && t.model && t.model.uid && t.model.ecModel);
});
function c_(t, e) {
  var r = t.model, n = Za(Xa(r.ecModel)).keyed, i = n && n.get(e);
  return i && i.get(r.uid);
}
function qD(t, e) {
  return process.env.NODE_ENV !== "production" && (N(e != null), Li(t)), v_(c_(t, e));
}
function KD(t, e) {
  process.env.NODE_ENV !== "production" && Li(t);
  var r = [];
  return QD(t.model.ecModel, function(n) {
    for (var i = 0; i < e.length; i++)
      e[i] && n.serByIdx[e[i].seriesIndex] && r.push(v_(n));
  }), r;
}
function QD(t, e) {
  var r = Za(Xa(t)).keyed;
  r && r.each(function(n, i) {
    n.each(function(a, o) {
      e(a, i, o);
    });
  });
}
function v_(t) {
  return {
    liPosMinGap: t ? t.liPosMinGap : void 0
  };
}
function JD(t, e) {
  process.env.NODE_ENV !== "production" && Li(t);
  var r = t.model.ecModel, n = Za(Xa(r)).axSer;
  n && jD(r, n.get(t.model.uid), e);
}
function jD(t, e, r) {
  if (e)
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      t.isSeriesFiltered(i) || r(i);
    }
}
function d_(t, e) {
  process.env.NODE_ENV !== "production" && Li(t);
  var r = t.model, n = Za(Xa(r.ecModel)).keys;
  n && x(n.get(r.uid), function(i) {
    if (process.env.NODE_ENV !== "production") {
      var a = c_(t, i);
      N(a && a.sers.length > 0);
    }
    e(i);
  });
}
function Bd(t, e, r) {
  if (t) {
    var n = e.ecModel, i = Za(Xa(n)), a = t.model.uid;
    if (process.env.NODE_ENV !== "production") {
      Li(t);
      var o = i.axSerPairCheck || (i.axSerPairCheck = K()), s = "" + a + Vf + e.uid;
      N(!o.get(s)), o.set(s, 1);
    }
    var u = i.axSer || (i.axSer = K()), l = u.get(a) || u.set(a, []);
    if (process.env.NODE_ENV !== "production") {
      var f = l[l.length - 1];
      f && N(f.seriesIndex < e.seriesIndex);
    }
    l.push(e);
    var h = e.subType, c = e.getBaseAxis() === t, v = Fd.get(Vd(h, c, r)) || Fd.get(Vd(h, c, null));
    if (v) {
      var d = i.keyed || (i.keyed = K()), g = i.keys || (i.keys = K()), m = v.key, p = d.get(m) || d.set(m, K()), y = p.get(a);
      y || (y = p.set(a, {
        axis: t,
        sers: [],
        serByIdx: []
      }), y.metrics = v.getMetrics(t), (g.get(a) || g.set(a, [])).push(m)), y.sers.push(e), y.serByIdx[e.seriesIndex] = e;
    }
  }
}
function Vd(t, e, r) {
  return t + Vf + Y(e, !0) + Vf + (r || "");
}
process.env.NODE_ENV !== "production" && K();
var Fd = K(), eE = 0.8;
function gu(t, e) {
  e = e || {};
  var r = {
    w: NaN,
    w2: NaN
  }, n = t.scale, i = e.fromStat, a = e.min, o = qC(n);
  Qt(o) || (o = NaN);
  var s = t.getExtent(), u = Ne(s[1] - s[0]);
  return ir(n) ? tE(r, t, o, u) : i ? rE(r, t, o, u, i) : a == null && process.env.NODE_ENV !== "production" && N(!1), a != null && (r.w = Qt(r.w) ? de(a, r.w) : a), r;
}
function tE(t, e, r, n) {
  var i = e.onBand, a = r + (i ? 1 : 0);
  a === 0 && (a = 1), t.w = n / a, !i && r && n && (t.w2 = t.w * r / n);
}
function rE(t, e, r, n, i) {
  process.env.NODE_ENV !== "production" && N(i);
  var a = !1, o = -1 / 0;
  x(i.key ? [qD(e, i.key)] : KD(e, i.sers || []), function(s) {
    var u = s.liPosMinGap;
    u != null && (u > 0 ? (u > o && (o = u), a = !1) : u === $D && (a = !0));
  }), Qt(r) && r > 0 && Qt(o) ? (t.w = n / r * o, t.w2 = o) : a && (t.w = n * eE, t.w2 = t.w * r / n);
}
var zd = [0, 1], nE = (
  /** @class */
  (function() {
    function t(e, r, n) {
      this.onBand = !1, this.inverse = !1, this.dim = e, this.scale = r, this._extent = n || [0, 0];
    }
    return t.prototype.contain = function(e) {
      var r = this._extent, n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
      return e >= n && e <= i;
    }, t.prototype.containData = function(e) {
      return this.scale.contain(this.scale.parse(e));
    }, t.prototype.getExtent = function() {
      return this._extent.slice();
    }, t.prototype.setExtent = function(e, r) {
      var n = this._extent;
      n[0] = e, n[1] = r;
    }, t.prototype.dataToCoord = function(e, r) {
      var n = this.scale;
      return e = n.normalize(n.parse(e)), mv(e, zd, Hd(this), r);
    }, t.prototype.coordToData = function(e, r) {
      var n = mv(e, Hd(this), zd, r);
      return this.scale.scale(n);
    }, t.prototype.pointToData = function(e, r) {
    }, t.prototype.getTicksCoords = function(e) {
      e = e || {};
      var r = e.tickModel || this.getTickModel(), n = kD(this, r, {
        breakTicks: e.breakTicks,
        pruneByBreak: e.pruneByBreak
      }), i = q(n.ticks, function(s) {
        return {
          coord: this.dataToCoord(Ya(this.scale, s)),
          tick: s
        };
      }, this), a = r.get("alignWithLabel"), o = iE(this, i, a);
      return q(i, function(s) {
        return {
          coord: s.coord,
          tickValue: s.tick.value,
          onBand: o
        };
      });
    }, t.prototype.getMinorTicksCoords = function() {
      if (ir(this.scale))
        return [];
      var e = this.model.getModel("minorTick"), r = e.get("splitNumber");
      r > 0 && r < 100 || (r = 5);
      var n = this.scale.getMinorTicks(r), i = q(n, function(a) {
        return q(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, t.prototype.getViewLabels = function(e) {
      return e = e || As(It.determine), RD(this, e).labels;
    }, t.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, t.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, t.prototype.getBandWidth = function() {
      return gu(this, {
        min: 1
      }).w;
    }, t.prototype.calculateCategoryInterval = function(e) {
      return e = e || As(It.determine), UD(this, e);
    }, t;
  })()
);
function Hd(t) {
  var e = t.getExtent();
  if (t.onBand) {
    var r = e[1] - e[0], n = r / t.scale.count() / 2;
    e[0] += n, e[1] -= n;
  }
  return e;
}
function iE(t, e, r) {
  var n = e.length;
  if (!t.onBand || r || !n)
    return !1;
  var i = gu(t).w;
  if (!i)
    return !1;
  x(e, function(s) {
    s.coord -= i / 2;
  });
  var a = t.scale.getExtent(), o = e[n - 1];
  return o.tick.offInterval && e.pop(), e.push({
    coord: o.coord + i,
    tick: {
      value: a[1] + 1
    }
  }), !0;
}
var aE = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r, n, i, a, o) {
      var s = t.call(this, r, n, i) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return e.prototype.isHorizontal = function() {
      var r = this.position;
      return r === "top" || r === "bottom";
    }, e.prototype.getGlobalExtent = function(r) {
      var n = this.getExtent();
      return n[0] = this.toGlobalCoord(n[0]), n[1] = this.toGlobalCoord(n[1]), r && n[0] > n[1] && n.reverse(), n;
    }, e.prototype.pointToData = function(r, n) {
      return this.coordToData(this.toLocalCoord(r[this.dim === "x" ? 0 : 1]), n);
    }, e.prototype.setCategorySortInfo = function(r) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = r, this.scale.setSortInfo(r);
    }, e;
  })(nE)
), Gd = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"], oE = 1, Is = 2, p_ = oE | Is;
function Os(t, e, r) {
  r = r || p_, e ? t.dirty |= r : t.dirty &= ~r;
}
function g_(t, e) {
  return e = e || p_, t.dirty == null || !!(t.dirty & e);
}
function jt(t) {
  if (t)
    return g_(t) && sE(t, t.label, t), t;
}
function sE(t, e, r) {
  var n = e.getComputedTransform();
  t.transform = zh(t.transform, n);
  var i = t.localRect = wa(t.localRect, e.getBoundingRect()), a = e.style, o = a.margin, s = r && r.marginForce, u = r && r.minMarginForce, l = r && r.marginDefault, f = a.__marginType;
  f == null && l && (o = l, f = ti.textMargin);
  for (var h = 0; h < 4; h++)
    cl[h] = f === ti.minMargin && u && u[h] != null ? u[h] : s && s[h] != null ? s[h] : o ? o[h] : 0;
  f === ti.textMargin && _s(i, cl, !1, !1);
  var c = t.rect = wa(t.rect, i);
  return n && c.applyTransform(n), f === ti.minMargin && _s(c, cl, !1, !1), t.axisAligned = Fh(n), (t.label = t.label || {}).ignore = e.ignore, Os(t, !1), Os(t, !0, Is), t;
}
var cl = [0, 0, 0, 0];
function uE(t, e, r) {
  return t.transform = zh(t.transform, r), t.localRect = wa(t.localRect, e), t.rect = wa(t.rect, e), r && t.rect.applyTransform(r), t.axisAligned = Fh(r), t.obb = void 0, (t.label = t.label || {}).ignore = !1, t;
}
function lE(t, e) {
  if (t) {
    t.label.x += e.x, t.label.y += e.y, t.label.markRedraw();
    var r = t.transform;
    r && (r[4] += e.x, r[5] += e.y);
    var n = t.rect;
    n && (n.x += e.x, n.y += e.y);
    var i = t.obb;
    i && i.fromBoundingRect(t.localRect, r);
  }
}
function Ud(t, e) {
  for (var r = 0; r < Gd.length; r++) {
    var n = Gd[r];
    t[n] == null && (t[n] = e[n]);
  }
  return jt(t);
}
function Wd(t) {
  var e = t.obb;
  return (!e || g_(t, Is)) && (t.obb = e = e || new Vm(), e.fromBoundingRect(t.localRect, t.transform), Os(t, !1, Is)), e;
}
function fE(t) {
  var e = [];
  t.sort(function(l, f) {
    return (f.suggestIgnore ? 1 : 0) - (l.suggestIgnore ? 1 : 0) || f.priority - l.priority;
  });
  function r(l) {
    if (!l.ignore) {
      var f = l.ensureState("emphasis");
      f.ignore == null && (f.ignore = !1);
    }
    l.ignore = !0;
  }
  for (var n = 0; n < t.length; n++) {
    var i = jt(t[n]);
    if (!i.label.ignore) {
      for (var a = i.label, o = i.labelLine, s = !1, u = 0; u < e.length; u++)
        if (cc(i, e[u], null, {
          touchThreshold: 0.05
        })) {
          s = !0;
          break;
        }
      s ? (r(a), o && r(o)) : e.push(i);
    }
  }
}
function cc(t, e, r, n) {
  return !t || !e || t.label && t.label.ignore || e.label && e.label.ignore || !t.rect.intersect(e.rect, r, n) ? !1 : t.axisAligned && e.axisAligned ? !0 : Wd(t).intersect(Wd(e), r, n);
}
var hE = null;
function mu() {
  return hE;
}
var cE = "expandAxisBreak", Mr = Math.PI, vE = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], dE = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], An = ye(), m_ = ye(), y_ = (
  /** @class */
  (function() {
    function t(e) {
      this.recordMap = {}, this.resolveAxisNameOverlap = e;
    }
    return t.prototype.ensureRecord = function(e) {
      var r = e.axis.dim, n = e.componentIndex, i = this.recordMap, a = i[r] || (i[r] = []);
      return a[n] || (a[n] = {
        ready: {}
      });
    }, t;
  })()
);
function pE(t, e, r, n) {
  var i = r.axis, a = e.ensureRecord(r), o = [], s, u = vc(t.axisName) && xi(t.nameLocation);
  x(n, function(d) {
    var g = jt(d);
    if (!(!g || g.label.ignore)) {
      o.push(g);
      var m = a.transGroup;
      u && (m.transform ? Ra(Hi, m.transform) : Na(Hi), g.transform && oa(Hi, Hi, g.transform), j.copy(Do, g.localRect), Do.applyTransform(Hi), s ? s.union(Do) : j.copy(s = new j(0, 0, 0, 0), Do));
    }
  });
  var l = Math.abs(a.dirVec.x) > 0.1 ? "x" : "y", f = a.transGroup[l];
  if (o.sort(function(d, g) {
    return Math.abs(d.label[l] - f) - Math.abs(g.label[l] - f);
  }), u && s) {
    var h = i.getExtent(), c = Math.min(h[0], h[1]), v = Math.max(h[0], h[1]) - c;
    s.union(new j(c, 0, v, 1));
  }
  a.stOccupiedRect = s, a.labelInfoList = o;
}
var Hi = Wt(), Do = new j(0, 0, 0, 0), __ = function(t, e, r, n, i, a) {
  if (xi(t.nameLocation)) {
    var o = a.stOccupiedRect;
    o && S_(uE({}, o, a.transGroup.transform), n, i);
  } else
    b_(a.labelInfoList, a.dirVec, n, i);
};
function S_(t, e, r) {
  var n = new ge();
  cc(t, e, n, {
    direction: Math.atan2(r.y, r.x),
    bidirectional: !1,
    touchThreshold: 0.05
  }) && lE(e, n);
}
function b_(t, e, r, n) {
  for (var i = ge.dot(n, e) >= 0, a = 0, o = t.length; a < o; a++) {
    var s = t[i ? a : o - 1 - a];
    s.label.ignore || S_(s, r, n);
  }
}
var Pr = (
  /** @class */
  (function() {
    function t(e, r, n, i) {
      this.group = new ke(), this._axisModel = e, this._api = r, this._local = {}, this._shared = i || new y_(__), this._resetCfgDetermined(n);
    }
    return t.prototype.updateCfg = function(e) {
      if (process.env.NODE_ENV !== "production") {
        var r = this._shared.ensureRecord(this._axisModel).ready;
        N(!r.axisLine && !r.axisTickLabelDetermine), r.axisName = r.axisTickLabelEstimate = !1;
      }
      var n = this._cfg.raw;
      n.position = e.position, n.labelOffset = e.labelOffset, this._resetCfgDetermined(n);
    }, t.prototype.__getRawCfg = function() {
      return this._cfg.raw;
    }, t.prototype._resetCfgDetermined = function(e) {
      var r = this._axisModel, n = r.getDefaultOption ? r.getDefaultOption() : {}, i = Y(e.axisName, r.get("name")), a = r.get("nameMoveOverlap");
      (a == null || a === "auto") && (a = Y(e.defaultNameMoveOverlap, !0));
      var o = {
        raw: e,
        position: e.position,
        rotation: e.rotation,
        nameDirection: Y(e.nameDirection, 1),
        tickDirection: Y(e.tickDirection, 1),
        labelDirection: Y(e.labelDirection, 1),
        labelOffset: Y(e.labelOffset, 0),
        silent: Y(e.silent, !0),
        axisName: i,
        nameLocation: Ar(r.get("nameLocation"), n.nameLocation, "end"),
        shouldNameMoveOverlap: vc(i) && a,
        optionHideOverlap: r.get(["axisLabel", "hideOverlap"]),
        showMinorTicks: r.get(["minorTick", "show"])
      };
      process.env.NODE_ENV !== "production" && (N(o.position != null), N(o.rotation != null)), this._cfg = o;
      var s = new ke({
        x: o.position[0],
        y: o.position[1],
        rotation: o.rotation
      });
      s.updateTransform(), this._transformGroup = s;
      var u = this._shared.ensureRecord(r);
      u.transGroup = this._transformGroup, u.dirVec = new ge(Math.cos(-o.rotation), Math.sin(-o.rotation));
    }, t.prototype.build = function(e, r) {
      var n = this;
      return e || (e = {
        axisLine: !0,
        axisTickLabelEstimate: !1,
        axisTickLabelDetermine: !0,
        axisName: !0
      }), x(gE, function(i) {
        e[i] && mE[i](n._cfg, n._local, n._shared, n._axisModel, n.group, n._transformGroup, n._api, r || {});
      }), this;
    }, t.innerTextLayout = function(e, r, n) {
      var i = om(r - e), a, o;
      return hs(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : hs(i - Mr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < Mr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
        rotation: i,
        textAlign: a,
        textVerticalAlign: o
      };
    }, t.makeAxisEventDataBase = function(e) {
      var r = {
        componentType: e.mainType,
        componentIndex: e.componentIndex
      };
      return r[e.mainType + "Index"] = e.componentIndex, r;
    }, t.isLabelSilent = function(e) {
      var r = e.get("tooltip");
      return e.get("silent") || !(e.get("triggerEvent") || r && r.show);
    }, t;
  })()
), gE = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], mE = {
  axisLine: function(t, e, r, n, i, a, o) {
    if (process.env.NODE_ENV !== "production") {
      var s = r.ensureRecord(n).ready;
      N(!s.axisLine), s.axisLine = !0;
    }
    var u = n.get(["axisLine", "show"]);
    if (u === "auto" && (u = !0, t.raw.axisLineAutoShow != null && (u = !!t.raw.axisLineAutoShow)), !!u) {
      var l = n.axis.getExtent(), f = a.transform, h = [l[0], 0], c = [l[1], 0], v = h[0] > c[0];
      f && (Dt(h, h, f), Dt(c, c, f));
      var d = k({
        lineCap: "round"
      }, n.getModel(["axisLine", "lineStyle"]).getLineStyle()), g = {
        strokeContainThreshold: t.raw.strokeContainThreshold || 5,
        silent: !0,
        z2: 1,
        style: d
      };
      if (n.get(["axisLine", "breakLine"]) && Dn(n.axis.scale))
        mu().buildAxisBreakLine(n, i, a, g);
      else {
        var m = new Rr(k({
          shape: {
            x1: h[0],
            y1: h[1],
            x2: c[0],
            y2: c[1]
          }
        }, g));
        Ta(m.shape, m.style.lineWidth), m.anid = "line", i.add(m);
      }
      var p = n.get(["axisLine", "symbol"]);
      if (p != null) {
        var y = n.get(["axisLine", "symbolSize"]);
        H(p) && (p = [p, p]), (H(y) || we(y)) && (y = [y, y]);
        var _ = Vy(n.get(["axisLine", "symbolOffset"]) || 0, y), S = y[0], b = y[1];
        x([{
          rotate: t.rotation + Math.PI / 2,
          offset: _[0],
          r: 0
        }, {
          rotate: t.rotation - Math.PI / 2,
          offset: _[1],
          r: Math.sqrt((h[0] - c[0]) * (h[0] - c[0]) + (h[1] - c[1]) * (h[1] - c[1]))
        }], function(T, w) {
          if (p[w] !== "none" && p[w] != null) {
            var E = Ti(p[w], -S / 2, -b / 2, S, b, d.stroke, !0), D = T.r + T.offset, C = v ? c : h;
            E.attr({
              rotation: T.rotate,
              x: C[0] + D * Math.cos(t.rotation),
              y: C[1] - D * Math.sin(t.rotation),
              silent: !0,
              z2: 11
            }), i.add(E);
          }
        });
      }
    }
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisTickLabelEstimate: function(t, e, r, n, i, a, o, s) {
    if (process.env.NODE_ENV !== "production") {
      var u = r.ensureRecord(n).ready;
      N(!u.axisTickLabelDetermine), u.axisTickLabelEstimate = !0;
    }
    var l = Xd(e, i, s);
    l && Yd(t, e, r, n, i, a, o, It.estimate);
  },
  /**
   * Finish axis tick label build.
   * Can be only called once.
   */
  axisTickLabelDetermine: function(t, e, r, n, i, a, o, s) {
    if (process.env.NODE_ENV !== "production") {
      var u = r.ensureRecord(n).ready;
      u.axisTickLabelDetermine = !0;
    }
    var l = Xd(e, i, s);
    l && Yd(t, e, r, n, i, a, o, It.determine);
    var f = bE(t, i, a, n);
    SE(t, e.labelLayoutList, f), TE(t, i, a, n, t.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function(t, e, r, n, i, a, o, s) {
    var u = r.ensureRecord(n);
    if (process.env.NODE_ENV !== "production") {
      var l = u.ready;
      N(l.axisTickLabelEstimate || l.axisTickLabelDetermine), l.axisName = !0;
    }
    e.nameEl && (i.remove(e.nameEl), e.nameEl = u.nameLayout = u.nameLocation = null);
    var f = t.axisName;
    if (vc(f)) {
      var h = t.nameLocation, c = t.nameDirection, v = n.getModel("nameTextStyle"), d = n.get("nameGap") || 0, g = n.axis.getExtent(), m = n.axis.inverse ? -1 : 1, p = new ge(0, 0), y = new ge(0, 0);
      h === "start" ? (p.x = g[0] - m * d, y.x = -m) : h === "end" ? (p.x = g[1] + m * d, y.x = m) : (p.x = (g[0] + g[1]) / 2, p.y = t.labelOffset + c * d, y.y = c);
      var _ = Wt();
      y.transform(dh(_, _, t.rotation));
      var S = n.get("nameRotate");
      S != null && (S = S * Mr / 180);
      var b, T;
      xi(h) ? b = Pr.innerTextLayout(
        t.rotation,
        S ?? t.rotation,
        // Adapt to axis.
        c
      ) : (b = yE(t.rotation, h, S || 0, g), T = t.raw.axisNameAvailableWidth, T != null && (T = Math.abs(T / Math.sin(b.rotation)), !isFinite(T) && (T = null)));
      var w = v.getFont(), E = n.get("nameTruncate", !0) || {}, D = E.ellipsis, C = ci(t.raw.nameTruncateMaxWidth, E.maxWidth, T), M = s.nameMarginLevel || 0, L = new it({
        x: p.x,
        y: p.y,
        rotation: b.rotation,
        silent: Pr.isLabelSilent(n),
        style: Si(v, {
          text: f,
          font: w,
          overflow: "truncate",
          width: C,
          ellipsis: D,
          fill: v.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
          align: v.get("align") || b.textAlign,
          verticalAlign: v.get("verticalAlign") || b.textVerticalAlign
        }),
        z2: 1
      });
      if (uu({
        el: L,
        componentModel: n,
        itemName: f
      }), L.__fullText = f, L.anid = "name", n.get("triggerEvent")) {
        var A = Pr.makeAxisEventDataBase(n);
        A.targetType = "axisName", A.name = f, ve(L).eventData = A;
      }
      a.add(L), L.updateTransform(), e.nameEl = L;
      var I = u.nameLayout = jt({
        label: L,
        priority: L.z2,
        defaultAttr: {
          ignore: L.ignore
        },
        marginDefault: xi(h) ? vE[M] : dE[M]
      });
      if (u.nameLocation = h, i.add(L), L.decomposeTransform(), t.shouldNameMoveOverlap && I) {
        var P = r.ensureRecord(n);
        process.env.NODE_ENV !== "production" && N(P.labelInfoList), r.resolveAxisNameOverlap(t, r, n, I, y, P);
      }
    }
  }
};
function Yd(t, e, r, n, i, a, o, s) {
  w_(e) || wE(t, e, i, s, n, o);
  var u = e.labelLayoutList;
  xE(t, n, u, a), EE(n, t.rotation, u);
  var l = t.optionHideOverlap;
  _E(n, u, l), l && fE(
    // Filter the already ignored labels by the previous overlap resolving methods.
    ze(u, function(f) {
      return f && !f.label.ignore;
    })
  ), pE(t, r, n, u);
}
function yE(t, e, r, n) {
  var i = om(r - t), a, o, s = n[0] > n[1], u = e === "start" && !s || e !== "start" && s;
  return hs(i - Mr / 2) ? (o = u ? "bottom" : "top", a = "center") : hs(i - Mr * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", i < Mr * 1.5 && i > Mr / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function _E(t, e, r) {
  var n = t.axis, i = t.get(["axisLabel", "customValues"]);
  if (mD(n))
    return;
  function a(l, f, h) {
    var c = jt(e[f]), v = jt(e[h]), d = n.scale;
    if (!(!c || !v)) {
      if (l == null) {
        if (!r && i)
          return;
        var g = An(c.label).labelInfo.tick;
        if (
          // TimeScale does not expand extent to "nice", so eliminate labels that are not nice.
          sc(d) && g.notNice || ir(d) && g.offInterval
        ) {
          Kn(c.label);
          return;
        }
      }
      if (l === !1 || c.suggestIgnore) {
        Kn(c.label);
        return;
      }
      if (v.suggestIgnore) {
        Kn(v.label);
        return;
      }
      var m = 0.1;
      if (!r) {
        var p = [0, 0, 0, 0];
        c = Ud({
          marginForce: p
        }, c), v = Ud({
          marginForce: p
        }, v);
      }
      cc(c, v, null, {
        touchThreshold: m
      }) && Kn(l ? v.label : c.label);
    }
  }
  var o = t.get(["axisLabel", "showMinLabel"]), s = t.get(["axisLabel", "showMaxLabel"]), u = e.length;
  a(o, 0, 1), a(s, u - 1, u - 2);
}
function SE(t, e, r) {
  t.showMinorTicks || x(e, function(n) {
    if (n && n.label.ignore)
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = m_(a), s = An(n.label);
        if (o.tickValue != null && !o.onBand && o.tickValue === s.labelInfo.tick.value) {
          Kn(a);
          return;
        }
      }
  });
}
function Kn(t) {
  t && (t.ignore = !0);
}
function T_(t, e, r, n, i) {
  for (var a = [], o = [], s = [], u = 0; u < t.length; u++) {
    var l = t[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = r, e && (Dt(o, o, e), Dt(s, s, e));
    var f = new Rr({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: n,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    Ta(f.shape, f.style.lineWidth), f.anid = i + "_" + t[u].tickValue, a.push(f);
    var h = m_(f);
    h.onBand = !!t[u].onBand, h.tickValue = t[u].tickValue;
  }
  return a;
}
function bE(t, e, r, n) {
  var i = n.axis, a = n.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && (o = !0, t.raw.axisTickAutoShow != null && (o = !!t.raw.axisTickAutoShow)), !o || i.scale.isBlank())
    return [];
  for (var s = a.getModel("lineStyle"), u = t.tickDirection * a.get("length"), l = i.getTicksCoords(), f = T_(l, r.transform, u, pe(s.getLineStyle(), {
    stroke: n.get(["axisLine", "lineStyle", "color"])
  }), "ticks"), h = 0; h < f.length; h++)
    e.add(f[h]);
  return f;
}
function TE(t, e, r, n, i) {
  var a = n.axis, o = n.getModel("minorTick");
  if (!(!t.showMinorTicks || a.scale.isBlank())) {
    var s = a.getMinorTicksCoords();
    if (s.length)
      for (var u = o.getModel("lineStyle"), l = i * o.get("length"), f = pe(u.getLineStyle(), pe(n.getModel("axisTick").getLineStyle(), {
        stroke: n.get(["axisLine", "lineStyle", "color"])
      })), h = 0; h < s.length; h++)
        for (var c = T_(s[h], r.transform, l, f, "minorticks_" + h), v = 0; v < c.length; v++)
          e.add(c[v]);
  }
}
function Xd(t, e, r) {
  if (w_(t)) {
    var n = t.axisLabelsCreationContext;
    process.env.NODE_ENV !== "production" && N(t.labelGroup && n);
    var i = n.out.noPxChangeTryDetermine;
    if (r.noPxChange) {
      for (var a = !0, o = 0; o < i.length; o++)
        a = a && i[o]();
      if (a)
        return !1;
    }
    i.length && (e.remove(t.labelGroup), Ff(t, null, null, null));
  }
  return !0;
}
function wE(t, e, r, n, i, a) {
  var o = i.axis, s = ci(t.raw.axisLabelShow, i.get(["axisLabel", "show"])), u = new ke();
  r.add(u);
  var l = As(n);
  if (!s || o.scale.isBlank()) {
    Ff(e, [], u, l);
    return;
  }
  var f = i.getModel("axisLabel"), h = o.getViewLabels(l), c = (ci(t.raw.labelRotate, f.get("rotate")) || 0) * Mr / 180, v = Pr.innerTextLayout(t.rotation, c, t.labelDirection), d = i.getCategories && i.getCategories(!0), g = [], m = i.get("triggerEvent"), p = 1 / 0, y = -1 / 0;
  x(h, function(S, b) {
    var T, w = S.tick, E = S.formattedLabel, D = S.rawLabel, C = f, M = Ya(o.scale, w);
    if (d && d[M]) {
      var L = d[M];
      W(L) && L.textStyle && (C = new xe(L.textStyle, f, i.ecModel));
    }
    var A = C.getTextColor() || i.get(["axisLine", "lineStyle", "color"]), I = C.getShallow("align", !0) || v.textAlign, P = Y(C.getShallow("alignMinLabel", !0), I), O = Y(C.getShallow("alignMaxLabel", !0), I), B = C.getShallow("verticalAlign", !0) || C.getShallow("baseline", !0) || v.textVerticalAlign, G = Y(C.getShallow("verticalAlignMinLabel", !0), B), U = Y(C.getShallow("verticalAlignMaxLabel", !0), B), J = 10 + (((T = w.time) === null || T === void 0 ? void 0 : T.level) || 0);
    p = Math.min(p, J), y = Math.max(y, J);
    var $ = new it({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: Pr.isLabelSilent(i),
      z2: J,
      style: Si(C, {
        text: E,
        align: b === 0 ? P : b === h.length - 1 ? O : I,
        verticalAlign: b === 0 ? G : b === h.length - 1 ? U : B,
        fill: Q(A) ? A(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          o.type === "category" ? D : o.type === "value" ? M + "" : M,
          b
        ) : A
      })
    });
    $.anid = "label_" + M;
    var te = An($);
    if (te.labelInfo = S, te.layoutRotation = v.rotation, uu({
      el: $,
      componentModel: i,
      itemName: E,
      formatterParamsExtra: {
        isTruncated: function() {
          return $.isTruncated;
        },
        value: D,
        tickIndex: b
      }
    }), m) {
      var X = Pr.makeAxisEventDataBase(i);
      X.targetType = "axisLabel", X.value = D, X.tickIndex = b;
      var F = S.tick.break;
      if (F) {
        var ne = F.parsedBreak;
        X.break = {
          // type: labelItem.break.type,
          start: ne.vmin,
          end: ne.vmax
        };
      }
      o.type === "category" && (X.dataIndex = M), ve($).eventData = X, F && DE(i, a, $, F);
    }
    g.push($), u.add($);
  });
  var _ = q(g, function(S) {
    return {
      label: S,
      priority: An(S).labelInfo.tick.break ? S.z2 + (y - p + 1) : S.z2,
      defaultAttr: {
        ignore: S.ignore
      }
    };
  });
  Ff(e, _, u, l);
}
function w_(t) {
  return !!t.labelLayoutList;
}
function Ff(t, e, r, n) {
  t.labelLayoutList = e, t.labelGroup = r, t.axisLabelsCreationContext = n;
}
function xE(t, e, r, n) {
  var i = e.get(["axisLabel", "margin"]);
  x(r, function(a, o) {
    var s = jt(a);
    if (s) {
      var u = s.label, l = An(u);
      s.suggestIgnore = u.ignore, u.ignore = !1, ns(or, CE);
      var f = e.axis;
      or.x = f.dataToCoord(Ya(f.scale, l.labelInfo.tick)), or.y = t.labelOffset + t.labelDirection * i, or.rotation = l.layoutRotation, n.add(or), or.updateTransform(), n.remove(or), or.decomposeTransform(), ns(u, or), u.markRedraw(), Os(s, !0), jt(s);
    }
  });
}
var or = new Le(), CE = new Le();
function vc(t) {
  return !!t;
}
function DE(t, e, r, n) {
  r.on("click", function(i) {
    var a = {
      type: cE,
      breaks: [{
        start: n.parsedBreak.breakOption.start,
        end: n.parsedBreak.breakOption.end
      }]
    };
    a[t.axis.dim + "AxisIndex"] = t.componentIndex, e.dispatchAction(a);
  });
}
function EE(t, e, r) {
  var n = Ze();
  if (n) {
    var i = n.retrieveAxisBreakPairs(r, function(o) {
      return o && An(o.label).labelInfo.tick.break;
    }, !0), a = t.get(["breakLabelLayout", "moveOverlap"], !0);
    (a === !0 || a === "auto") && x(i, function(o) {
      mu().adjustBreakLabelPair(t.axis.inverse, e, [jt(r[o[0]]), jt(r[o[1]])]);
    });
  }
}
function Ps(t, e, r) {
  r = r || {};
  var n = e.axis, i = {}, a = n.getAxesOnZeroOf()[0], o = n.position, s = a ? "onZero" : o, u = n.dim, l = [t.x, t.x + t.width, t.y, t.y + t.height], f = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, h = e.get("offset") || 0, c = u === "x" ? [l[2] - h, l[3] + h] : [l[0] - h, l[1] + h];
  if (a) {
    var v = a.toGlobalCoord(a.dataToCoord(0));
    c[f.onZero] = Math.max(Math.min(v, c[1]), c[0]);
  }
  i.position = [u === "y" ? c[f[s]] : l[0], u === "x" ? c[f[s]] : l[3]], i.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
  var d = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  i.labelDirection = i.tickDirection = i.nameDirection = d[o], i.labelOffset = a ? c[f[o]] - c[f.onZero] : 0, e.get(["axisTick", "inside"]) && (i.tickDirection = -i.tickDirection), ci(r.labelInside, e.get(["axisLabel", "inside"])) && (i.labelDirection = -i.labelDirection);
  var g = e.get(["axisLabel", "rotate"]);
  return i.labelRotate = s === "top" ? -g : g, i.z2 = 1, i;
}
function ME(t) {
  var e = {
    xAxisModel: null,
    yAxisModel: null
  };
  return x(e, function(r, n) {
    var i = n.replace(/Model$/, ""), a = t.getReferringComponents(i, wt).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(i + ' "' + Ar(t.get(i + "Index"), t.get(i + "Id"), 0) + '" not found');
    e[n] = a;
  }), e;
}
function AE(t, e, r, n, i, a) {
  for (var o = Ps(t, r), s = !1, u = !1, l = 0; l < e.length; l++)
    qy(e[l].getOtherAxis(r.axis).scale) && (s = u = !0, r.axis.type === "category" && r.axis.onBand && (u = !1));
  return o.axisLineAutoShow = s, o.axisTickAutoShow = u, o.defaultNameMoveOverlap = a, new Pr(r, n, o, i);
}
function LE(t, e, r) {
  var n = Ps(e, r);
  if (process.env.NODE_ENV !== "production") {
    var i = t.__getRawCfg();
    x(be(n), function(a) {
      a !== "position" && a !== "labelOffset" && N(n[a] === i[a]);
    });
  }
  t.updateCfg(n);
}
var IE = ye(), OE = 1, PE = 2, NE = 3, x_ = (
  /** @class */
  (function() {
    function t(e, r, n, i, a) {
      var o = ir(e), s = o ? r.getCategories().length : null, u;
      if (o) {
        var l = r.getCategories(!0);
        u = l && !l.length;
      }
      var f = n.slice();
      (Ds(e) || wi(e) || sc(e)) && (gm(f, Gi(e, r.get("dataMin", !0))), mm(f, Gi(e, r.get("dataMax", !0)))), wb(f) || (f[0] = f[1] = NaN);
      var h = [], c = [!1, !1], v = r.get("min", !0);
      v === "dataMin" ? (h[0] = f[0], c[0] = !0) : (h[0] = Gi(e, Q(v) ? v({
        min: f[0],
        max: f[1]
      }) : v), c[0] = h[0] != null);
      var d = r.get("max", !0);
      d === "dataMax" ? (h[1] = f[1], c[1] = !0) : (h[1] = Gi(e, Q(d) ? d({
        min: f[0],
        max: f[1]
      }) : d), c[1] = h[1] != null);
      var g = RE(e, r), m = o ? null : f[1] - f[0] || Math.abs(f[0]);
      h[0] == null && (h[0] = o ? u ? f[0] : s ? 0 : NaN : f[0] - g[0] * m), h[1] == null && (h[1] = o ? u ? f[1] : s ? s - 1 : NaN : f[1] + g[1] * m), !pr(h[0]) && (h[0] = NaN), !pr(h[1]) && (h[1] = NaN);
      var p = u || hi(h[0]) || hi(h[1]) || o && !s, y = Ds(e), _ = y && r.needIncludeZero && r.needIncludeZero();
      _ && (h[0] > 0 && h[1] > 0 && !c[0] && (h[0] = 0), h[0] < 0 && h[1] < 0 && !c[1] && (h[1] = 0));
      var S = !1;
      h[0] > h[1] && (h.reverse(), S = !0);
      var b = Gi(e, r.get("startValue", !0)), T = b != null;
      !Qt(b) && i && (b = e.getDefaultStartValue ? e.getDefaultStartValue() : 0), Qt(b) && (T || !y || _) && (b < h[0] && !c[0] ? (h[0] = b, c[0] = !0) : b > h[1] && !c[1] && (h[1] = b, c[1] = !0));
      var w = this._i = {
        scale: e,
        dataMM: f,
        noZoomEffMM: h,
        zoomMM: [],
        fixMM: c,
        zoomFixMM: [!1, !1],
        startValue: b,
        isBlank: p,
        incl0: _,
        tggAxInv: S,
        ctnShp: a
      };
      Zd(w, h);
    }
    return t.prototype.makeNoZoom = function() {
      return this._i.noZoomEffMM.slice();
    }, t.prototype.makeFinal = function() {
      var e = this._i, r = e.zoomMM, n = e.noZoomEffMM, i = e.zoomFixMM, a = e.fixMM, o = {
        fixMM: a,
        zoomFixMM: i,
        isBlank: e.isBlank,
        incl0: e.incl0,
        tggAxInv: e.tggAxInv,
        ctnShp: e.ctnShp,
        effMM: n.slice()
      }, s = o.effMM;
      return r[0] != null && (s[0] = r[0], a[0] = i[0] = !0), r[1] != null && (s[1] = r[1], a[1] = i[1] = !0), Zd(e, s), o;
    }, t.prototype.makeRenderInfo = function() {
      return {
        startValue: this._i.startValue
      };
    }, t.prototype.setZoomMM = function(e, r) {
      this._i.zoomMM[e] = r;
    }, t;
  })()
);
function Zd(t, e) {
  var r = t.scale, n = t.dataMM;
  r.sanitize && (e[0] = r.sanitize(e[0], n), e[1] = r.sanitize(e[1], n), xb(e));
}
function Gi(t, e) {
  return e == null ? null : hi(e) ? NaN : t.parse(e);
}
function RE(t, e) {
  var r;
  if (ir(t))
    r = [0, 0];
  else {
    var n = e.get("boundaryGap");
    typeof n == "boolean" && (process.env.NODE_ENV !== "production" && n === !0 && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to 0.'), n = null), r = V(n) ? n : [n, n];
  }
  return [$d(r[0]), $d(r[1])];
}
function $d(t) {
  return pi(typeof t == "boolean" ? 0 : t, 1) || 0;
}
function C_(t) {
  var e = IE(t.scale);
  return e.extent || (e.extent = Tt()), e;
}
function kE(t, e) {
  C_(t).dimIdxInCoord = e.get(t.dim);
}
function BE(t, e) {
  var r = t.scale, n = t.model, i = t.dim;
  if (process.env.NODE_ENV !== "production" && N(r && n && i), r.rawExtentInfo) {
    process.env.NODE_ENV !== "production" && N(r.rawExtentInfo.from !== e || e === PE);
    return;
  }
  VE(r, t, i, n, e);
}
function VE(t, e, r, n, i) {
  var a = C_(e), o = a.extent, s = !1;
  JD(e, function(f) {
    if (f.boxCoordinateSystem) {
      var h = py(f).coord, c = a.dimIdxInCoord;
      if (!(c >= 0))
        process.env.NODE_ENV !== "production" && ue('Property "series.coord" is not supported on axis ' + f.boxCoordinateSystem.type + ".");
      else if (V(h)) {
        var v = h[c];
        v != null && !V(v) && vf(o, t.parse(v));
      }
    } else if (f.coordinateSystem) {
      var d = f.getData();
      if (d) {
        var g = t.getFilter ? t.getFilter() : null;
        x(yD(d, r), function(m) {
          Tb(o, d.getApproximateExtent(m, g));
        });
      }
      f.__requireStartValue && f.__requireStartValue(e) && (s = !0);
    }
  });
  var u = zE(t, e, n), l = new x_(t, n, o, s, u);
  D_(t, l, i), a.extent = null;
}
function FE(t, e) {
  var r = t.scale;
  process.env.NODE_ENV !== "production" && N(!r.rawExtentInfo), D_(r, new x_(r, t.model, e, !1, !1), NE);
}
function D_(t, e, r) {
  t.rawExtentInfo = e, e.from = r;
}
var E_ = K();
function M_(t, e, r, n, i) {
  process.env.NODE_ENV !== "production" && N(!0), t.rawExtentInfo || FE({
    scale: t,
    model: e
  }, Tt());
  var a = t.rawExtentInfo.makeFinal(), o = a.effMM;
  return t.setExtent(o[0], o[1]), t.setBlank(a.isBlank), n && a.tggAxInv && r && !r.get("legacyMinMaxDontInverseAxis") && (n.inverse = !n.inverse), a;
}
function zE(t, e, r) {
  var n = a_(t, r), i = r.get("containShape", !0);
  if (i == null && !n && (i = !0), !i)
    return !1;
  var a = !1;
  return d_(e, function(o) {
    a = !!E_.get(o) || a;
  }), a;
}
function HE(t, e, r, n) {
  if (r.ctnShp) {
    var i;
    if (d_(t, function(s) {
      var u = E_.get(s);
      if (u) {
        var l = u(t, n);
        l && (i = i || [0, 0], gm(i, l[0]), mm(i, l[1]), pD(t));
      }
    }), !!i) {
      var a = e.getExtent();
      if (ir(e))
        t.onBand || e.setExtent2(Ma, ft(a[0], a[0] + i[0]), de(a[1], a[1] + i[1]));
      else {
        var o = a.slice();
        r.zoomFixMM[0] || (o[0] = ft(o[0], e.transformOut(e.transformIn(o[0], null) + i[0], null))), r.zoomFixMM[1] || (o[1] = de(o[1], e.transformOut(e.transformIn(o[1], null) + i[1], null))), (o[0] < a[0] || o[1] > a[1]) && e.setExtent2(Ma, o[0], o[1]);
      }
    }
  }
}
var A_ = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, Ns = ["25%", "25%"], Qo = "cartesian2d", GE = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Wa(r.outerBounds);
      t.prototype.mergeDefaultAndTheme.apply(this, arguments), i && r.outerBounds && Br(r.outerBounds, i);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && r.outerBounds && Br(this.option.outerBounds, r.outerBounds);
    }, e.type = "grid", e.dependencies = ["xAxis", "yAxis"], e.layoutMode = "box", e.defaultOption = {
      show: !1,
      // zlevel: 0,
      z: 0,
      left: "15%",
      top: 65,
      right: "10%",
      bottom: 80,
      // If grid size contain label
      containLabel: !1,
      outerBoundsMode: "auto",
      outerBounds: A_,
      outerBoundsContain: "all",
      outerBoundsClampWidth: Ns[0],
      outerBoundsClampHeight: Ns[1],
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: Z.color.transparent,
      borderWidth: 1,
      borderColor: Z.color.neutral30
    }, e;
  })(fe)
), Rs = "\0__throttleOriginMethod", qd = "\0__throttleRate", Kd = "\0__throttleType";
function L_(t, e, r) {
  var n, i = 0, a = 0, o = null, s, u, l, f;
  e = e || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, t.apply(u, l || []);
  }
  var c = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), u = this, l = v;
    var g = f || e, m = f || r;
    f = null, s = n - (m ? i : a) - g, clearTimeout(o), m ? o = setTimeout(h, g) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
  };
  return c.clear = function() {
    o && (clearTimeout(o), o = null);
  }, c.debounceNextCall = function(v) {
    f = v;
  }, c;
}
function I_(t, e, r, n) {
  var i = t[e];
  if (i) {
    var a = i[Rs] || i, o = i[Kd], s = i[qd];
    if (s !== r || o !== n) {
      if (r == null || !n)
        return t[e] = a;
      i = t[e] = L_(a, r, n === "debounce"), i[Rs] = a, i[Kd] = n, i[qd] = r;
    }
    return i;
  }
}
function zf(t, e) {
  var r = t[e];
  r && r[Rs] && (r.clear && r.clear(), t[e] = r[Rs]);
}
function Gn(t, e, r, n, i) {
  var a = t + e;
  r.isSilent(a) || (process.env.NODE_ENV !== "production" && dr("event " + a + " is deprecated."), n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = Cn(h, i.fromActionPayload);
        r.trigger(a, {
          type: a,
          seriesId: o.id,
          name: V(c) ? h.getName(c[0]) : h.getName(c),
          selected: H(u) ? u : k({}, u)
        });
      }
  }));
}
function UE(t, e, r) {
  t.on("selectchanged", function(n) {
    var i = r.getModel();
    n.isFromClick ? (Gn("map", "selectchanged", e, i, n), Gn("pie", "selectchanged", e, i, n)) : n.fromAction === "select" ? (Gn("map", "selected", e, i, n), Gn("pie", "selected", e, i, n)) : n.fromAction === "unselect" && (Gn("map", "unselected", e, i, n), Gn("pie", "unselected", e, i, n));
  });
}
var Un = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.target = e, this.topTarget = r && r.topTarget;
  }
  return t;
})(), WE = (function() {
  function t(e) {
    this.handler = e, e.on("mousedown", this._dragStart, this), e.on("mousemove", this._drag, this), e.on("mouseup", this._dragEnd, this);
  }
  return t.prototype._dragStart = function(e) {
    for (var r = e.target; r && !r.draggable; )
      r = r.parent || r.__hostTarget;
    r && (this._draggingTarget = r, r.dragging = !0, this._x = e.offsetX, this._y = e.offsetY, this.handler.dispatchToElement(new Un(r, e), "dragstart", e.event));
  }, t.prototype._drag = function(e) {
    var r = this._draggingTarget;
    if (r) {
      var n = e.offsetX, i = e.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, r.drift(a, o, e), this.handler.dispatchToElement(new Un(r, e), "drag", e.event);
      var s = this.handler.findHover(n, i, r).target, u = this._dropTarget;
      this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new Un(u, e), "dragleave", e.event), s && s !== u && this.handler.dispatchToElement(new Un(s, e), "dragenter", e.event));
    }
  }, t.prototype._dragEnd = function(e) {
    var r = this._draggingTarget;
    r && (r.dragging = !1), this.handler.dispatchToElement(new Un(r, e), "dragend", e.event), this._dropTarget && this.handler.dispatchToElement(new Un(this._dropTarget, e), "drop", e.event), this._draggingTarget = null, this._dropTarget = null;
  }, t;
})(), YE = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, vl = [], XE = ee.browser.firefox && +ee.browser.version.split(".")[0] < 39;
function Hf(t, e, r, n) {
  return r = r || {}, n ? Qd(t, e, r) : XE && e.layerX != null && e.layerX !== e.offsetX ? (r.zrX = e.layerX, r.zrY = e.layerY) : e.offsetX != null ? (r.zrX = e.offsetX, r.zrY = e.offsetY) : Qd(t, e, r), r;
}
function Qd(t, e, r) {
  if (ee.domSupported && t.getBoundingClientRect) {
    var n = e.clientX, i = e.clientY;
    if (gy(t)) {
      var a = t.getBoundingClientRect();
      r.zrX = n - a.left, r.zrY = i - a.top;
      return;
    } else if (Ef(vl, t, n, i)) {
      r.zrX = vl[0], r.zrY = vl[1];
      return;
    }
  }
  r.zrX = r.zrY = 0;
}
function dc(t) {
  return t || window.event;
}
function gt(t, e, r) {
  if (e = dc(e), e.zrX != null)
    return e;
  var n = e.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? e.targetTouches[0] : e.changedTouches[0];
    o && Hf(t, o, e, r);
  } else {
    Hf(t, e, e, r);
    var a = ZE(e);
    e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3;
  }
  var s = e.button;
  return e.which == null && s !== void 0 && YE.test(e.type) && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e;
}
function ZE(t) {
  var e = t.wheelDelta;
  if (e)
    return e;
  var r = t.deltaX, n = t.deltaY;
  if (r == null || n == null)
    return e;
  var i = Math.abs(n !== 0 ? n : r), a = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
  return 3 * i * a;
}
function $E(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function qE(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
var O_ = function(t) {
  t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
}, KE = (function() {
  function t() {
    this._track = [];
  }
  return t.prototype.recognize = function(e, r, n) {
    return this._doTrack(e, r, n), this._recognize(e);
  }, t.prototype.clear = function() {
    return this._track.length = 0, this;
  }, t.prototype._doTrack = function(e, r, n) {
    var i = e.touches;
    if (i) {
      for (var a = {
        points: [],
        touches: [],
        target: r,
        event: e
      }, o = 0, s = i.length; o < s; o++) {
        var u = i[o], l = Hf(n, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, t.prototype._recognize = function(e) {
    for (var r in dl)
      if (dl.hasOwnProperty(r)) {
        var n = dl[r](this._track, e);
        if (n)
          return n;
      }
  }, t;
})();
function Jd(t) {
  var e = t[1][0] - t[0][0], r = t[1][1] - t[0][1];
  return Math.sqrt(e * e + r * r);
}
function QE(t) {
  return [
    (t[0][0] + t[1][0]) / 2,
    (t[0][1] + t[1][1]) / 2
  ];
}
var dl = {
  pinch: function(t, e) {
    var r = t.length;
    if (r) {
      var n = (t[r - 1] || {}).points, i = (t[r - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = Jd(n) / Jd(i);
        !isFinite(a) && (a = 1), e.pinchScale = a;
        var o = QE(n);
        return e.pinchX = o[0], e.pinchY = o[1], {
          type: "pinch",
          target: t[0].target,
          event: e
        };
      }
    }
  }
}, P_ = "silent";
function JE(t, e, r) {
  return {
    type: t,
    event: r,
    target: e.target,
    topTarget: e.topTarget,
    cancelBubble: !1,
    offsetX: r.zrX,
    offsetY: r.zrY,
    gestureEvent: r.gestureEvent,
    pinchX: r.pinchX,
    pinchY: r.pinchY,
    pinchScale: r.pinchScale,
    wheelDelta: r.zrDelta,
    zrByTouch: r.zrByTouch,
    which: r.which,
    stop: jE
  };
}
function jE() {
  O_(this.event);
}
var eM = (function(t) {
  z(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handler = null, r;
  }
  return e.prototype.dispose = function() {
  }, e.prototype.setCursor = function() {
  }, e;
})(rr), Ui = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.x = e, this.y = r;
  }
  return t;
})(), tM = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], pl = new j(0, 0, 0, 0), N_ = (function(t) {
  z(e, t);
  function e(r, n, i, a, o) {
    var s = t.call(this) || this;
    return s._hovered = new Ui(0, 0), s.storage = r, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new eM(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new WE(s), s;
  }
  return e.prototype.setHandlerProxy = function(r) {
    this.proxy && this.proxy.dispose(), r && (x(tM, function(n) {
      r.on && r.on(n, this[n], this);
    }, this), r.handler = this), this.proxy = r;
  }, e.prototype.mousemove = function(r) {
    var n = r.zrX, i = r.zrY, a = R_(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new Ui(n, i) : this.findHover(n, i), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r);
  }, e.prototype.mouseout = function(r) {
    var n = r.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: r });
  }, e.prototype.resize = function() {
    this._hovered = new Ui(0, 0);
  }, e.prototype.dispatch = function(r, n) {
    var i = this[r];
    i && i.call(this, n);
  }, e.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, e.prototype.setCursorStyle = function(r) {
    var n = this.proxy;
    n.setCursor && n.setCursor(r);
  }, e.prototype.dispatchToElement = function(r, n, i) {
    r = r || {};
    var a = r.target;
    if (!(a && a.silent)) {
      for (var o = "on" + n, s = JE(n, r, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s);
      }));
    }
  }, e.prototype.findHover = function(r, n, i) {
    var a = this.storage.getDisplayList(), o = new Ui(r, n);
    if (jd(a, o, r, n, i), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new j(r - l, n - l, u, u), h = a.length - 1; h >= 0; h--) {
        var c = a[h];
        c !== i && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (pl.copy(c.getBoundingRect()), c.transform && pl.applyTransform(c.transform), pl.intersect(f) && s.push(c));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, g = Math.PI * 2, m = 0; m < l; m += v)
          for (var p = 0; p < g; p += d) {
            var y = r + m * Math.cos(p), _ = n + m * Math.sin(p);
            if (jd(s, o, y, _, i), o.target)
              return o;
          }
    }
    return o;
  }, e.prototype.processGesture = function(r, n) {
    this._gestureMgr || (this._gestureMgr = new KE());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      r.gestureEvent = o;
      var s = new Ui();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, e;
})(rr);
x(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
  N_.prototype[t] = function(e) {
    var r = e.zrX, n = e.zrY, i = R_(this, r, n), a, o;
    if ((t !== "mouseup" || !i) && (a = this.findHover(r, n), o = a.target), t === "mousedown")
      this._downEl = o, this._downPoint = [e.zrX, e.zrY], this._upEl = o;
    else if (t === "mouseup")
      this._upEl = o;
    else if (t === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || I1(this._downPoint, [e.zrX, e.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, t, e);
  };
});
function rM(t, e, r) {
  if (t[t.rectHover ? "rectContain" : "contain"](e, r)) {
    for (var n = t, i = void 0, a = !1; n; ) {
      if (n.ignoreClip && (a = !0), !a) {
        var o = n.getClipPath();
        if (o && !o.contain(e, r))
          return !1;
      }
      n.silent && (i = !0);
      var s = n.__hostTarget;
      n = s ? n.ignoreHostSilent ? null : s : n.parent;
    }
    return i ? P_ : !0;
  }
  return !1;
}
function jd(t, e, r, n, i) {
  for (var a = t.length - 1; a >= 0; a--) {
    var o = t[a], s = void 0;
    if (o !== i && !o.ignore && (s = rM(o, r, n)) && (!e.topTarget && (e.topTarget = o), s !== P_)) {
      e.target = o;
      break;
    }
  }
}
function R_(t, e, r) {
  var n = t.painter;
  return e < 0 || e > n.getWidth() || r < 0 || r > n.getHeight();
}
var k_ = 32, Wi = 7;
function nM(t) {
  for (var e = 0; t >= k_; )
    e |= t & 1, t >>= 1;
  return t + e;
}
function ep(t, e, r, n) {
  var i = e + 1;
  if (i === r)
    return 1;
  if (n(t[i++], t[e]) < 0) {
    for (; i < r && n(t[i], t[i - 1]) < 0; )
      i++;
    iM(t, e, i);
  } else
    for (; i < r && n(t[i], t[i - 1]) >= 0; )
      i++;
  return i - e;
}
function iM(t, e, r) {
  for (r--; e < r; ) {
    var n = t[e];
    t[e++] = t[r], t[r--] = n;
  }
}
function tp(t, e, r, n, i) {
  for (n === e && n++; n < r; n++) {
    for (var a = t[n], o = e, s = n, u; o < s; )
      u = o + s >>> 1, i(a, t[u]) < 0 ? s = u : o = u + 1;
    var l = n - o;
    switch (l) {
      case 3:
        t[o + 3] = t[o + 2];
      case 2:
        t[o + 2] = t[o + 1];
      case 1:
        t[o + 1] = t[o];
        break;
      default:
        for (; l > 0; )
          t[o + l] = t[o + l - 1], l--;
    }
    t[o] = a;
  }
}
function gl(t, e, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(t, e[r + i]) > 0) {
    for (s = n - i; u < s && a(t, e[r + i + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  } else {
    for (s = i + 1; u < s && a(t, e[r + i - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(t, e[r + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function ml(t, e, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(t, e[r + i]) < 0) {
    for (s = i + 1; u < s && a(t, e[r + i - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  } else {
    for (s = n - i; u < s && a(t, e[r + i + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(t, e[r + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function aM(t, e) {
  var r = Wi, n, i, a = 0, o = [];
  n = [], i = [];
  function s(v, d) {
    n[a] = v, i[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      if (v >= 1 && i[v - 1] <= i[v] + i[v + 1] || v >= 2 && i[v - 2] <= i[v] + i[v - 1])
        i[v - 1] < i[v + 1] && v--;
      else if (i[v] > i[v + 1])
        break;
      f(v);
    }
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && i[v - 1] < i[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = n[v], g = i[v], m = n[v + 1], p = i[v + 1];
    i[v] = g + p, v === a - 3 && (n[v + 1] = n[v + 2], i[v + 1] = i[v + 2]), a--;
    var y = ml(t[m], t, d, g, 0, e);
    d += y, g -= y, g !== 0 && (p = gl(t[d + g - 1], t, m, p, p - 1, e), p !== 0 && (g <= p ? h(d, g, m, p) : c(d, g, m, p)));
  }
  function h(v, d, g, m) {
    var p = 0;
    for (p = 0; p < d; p++)
      o[p] = t[v + p];
    var y = 0, _ = g, S = v;
    if (t[S++] = t[_++], --m === 0) {
      for (p = 0; p < d; p++)
        t[S + p] = o[y + p];
      return;
    }
    if (d === 1) {
      for (p = 0; p < m; p++)
        t[S + p] = t[_ + p];
      t[S + m] = o[y];
      return;
    }
    for (var b = r, T, w, E; ; ) {
      T = 0, w = 0, E = !1;
      do
        if (e(t[_], o[y]) < 0) {
          if (t[S++] = t[_++], w++, T = 0, --m === 0) {
            E = !0;
            break;
          }
        } else if (t[S++] = o[y++], T++, w = 0, --d === 1) {
          E = !0;
          break;
        }
      while ((T | w) < b);
      if (E)
        break;
      do {
        if (T = ml(t[_], o, y, d, 0, e), T !== 0) {
          for (p = 0; p < T; p++)
            t[S + p] = o[y + p];
          if (S += T, y += T, d -= T, d <= 1) {
            E = !0;
            break;
          }
        }
        if (t[S++] = t[_++], --m === 0) {
          E = !0;
          break;
        }
        if (w = gl(o[y], t, _, m, 0, e), w !== 0) {
          for (p = 0; p < w; p++)
            t[S + p] = t[_ + p];
          if (S += w, _ += w, m -= w, m === 0) {
            E = !0;
            break;
          }
        }
        if (t[S++] = o[y++], --d === 1) {
          E = !0;
          break;
        }
        b--;
      } while (T >= Wi || w >= Wi);
      if (E)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (r = b, r < 1 && (r = 1), d === 1) {
      for (p = 0; p < m; p++)
        t[S + p] = t[_ + p];
      t[S + m] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (p = 0; p < d; p++)
        t[S + p] = o[y + p];
    }
  }
  function c(v, d, g, m) {
    var p = 0;
    for (p = 0; p < m; p++)
      o[p] = t[g + p];
    var y = v + d - 1, _ = m - 1, S = g + m - 1, b = 0, T = 0;
    if (t[S--] = t[y--], --d === 0) {
      for (b = S - (m - 1), p = 0; p < m; p++)
        t[b + p] = o[p];
      return;
    }
    if (m === 1) {
      for (S -= d, y -= d, T = S + 1, b = y + 1, p = d - 1; p >= 0; p--)
        t[T + p] = t[b + p];
      t[S] = o[_];
      return;
    }
    for (var w = r; ; ) {
      var E = 0, D = 0, C = !1;
      do
        if (e(o[_], t[y]) < 0) {
          if (t[S--] = t[y--], E++, D = 0, --d === 0) {
            C = !0;
            break;
          }
        } else if (t[S--] = o[_--], D++, E = 0, --m === 1) {
          C = !0;
          break;
        }
      while ((E | D) < w);
      if (C)
        break;
      do {
        if (E = d - ml(o[_], t, v, d, d - 1, e), E !== 0) {
          for (S -= E, y -= E, d -= E, T = S + 1, b = y + 1, p = E - 1; p >= 0; p--)
            t[T + p] = t[b + p];
          if (d === 0) {
            C = !0;
            break;
          }
        }
        if (t[S--] = o[_--], --m === 1) {
          C = !0;
          break;
        }
        if (D = m - gl(t[y], o, 0, m, m - 1, e), D !== 0) {
          for (S -= D, _ -= D, m -= D, T = S + 1, b = _ + 1, p = 0; p < D; p++)
            t[T + p] = o[b + p];
          if (m <= 1) {
            C = !0;
            break;
          }
        }
        if (t[S--] = t[y--], --d === 0) {
          C = !0;
          break;
        }
        w--;
      } while (E >= Wi || D >= Wi);
      if (C)
        break;
      w < 0 && (w = 0), w += 2;
    }
    if (r = w, r < 1 && (r = 1), m === 1) {
      for (S -= d, y -= d, T = S + 1, b = y + 1, p = d - 1; p >= 0; p--)
        t[T + p] = t[b + p];
      t[S] = o[_];
    } else {
      if (m === 0)
        throw new Error();
      for (b = S - (m - 1), p = 0; p < m; p++)
        t[b + p] = o[p];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function Jo(t, e, r, n) {
  r || (r = 0), n || (n = t.length);
  var i = n - r;
  if (!(i < 2)) {
    var a = 0;
    if (i < k_) {
      a = ep(t, r, n, e), tp(t, r, n, r + a, e);
      return;
    }
    var o = aM(t, e), s = nM(i);
    do {
      if (a = ep(t, r, n, e), a < s) {
        var u = i;
        u > s && (u = s), tp(t, r, r + u, r + a, e), a = u;
      }
      o.pushRun(r, a), o.mergeRuns(), i -= a, r += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var rp = !1;
function yl() {
  rp || (rp = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function np(t, e) {
  return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
}
var oM = (function() {
  function t() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = np;
  }
  return t.prototype.traverse = function(e, r) {
    for (var n = 0; n < this._roots.length; n++)
      this._roots[n].traverse(e, r);
  }, t.prototype.getDisplayList = function(e, r) {
    r = r || !1;
    var n = this._displayList;
    return (e || !n.length) && this.updateDisplayList(r), n;
  }, t.prototype.updateDisplayList = function(e) {
    this._displayListLen = 0;
    for (var r = this._roots, n = this._displayList, i = 0, a = r.length; i < a; i++)
      this._updateAndAddDisplayable(r[i], null, e);
    n.length = this._displayListLen, Jo(n, np);
  }, t.prototype._updateAndAddDisplayable = function(e, r, n) {
    if (!(e.ignore && !n)) {
      e.beforeUpdate(), e.update(), e.afterUpdate();
      var i = e.getClipPath(), a = r && r.length, o = 0, s = e.__clipPaths;
      if (!e.ignoreClip && (a || i)) {
        if (s || (s = e.__clipPaths = []), a)
          for (var u = 0; u < r.length; u++)
            s[o++] = r[u];
        for (var l = i, f = e; l; )
          l.parent = f, l.updateTransform(), s[o++] = l, f = l, l = l.getClipPath();
      }
      if (s && (s.length = o), e.childrenRef) {
        for (var h = e.childrenRef(), c = 0; c < h.length; c++) {
          var v = h[c];
          e.__dirty && (v.__dirty |= rt), this._updateAndAddDisplayable(v, s, n);
        }
        e.__dirty = 0;
      } else {
        var d = e;
        isNaN(d.z) && (yl(), d.z = 0), isNaN(d.z2) && (yl(), d.z2 = 0), isNaN(d.zlevel) && (yl(), d.zlevel = 0), this._displayList[this._displayListLen++] = d;
      }
      var g = e.getDecalElement && e.getDecalElement();
      g && this._updateAndAddDisplayable(g, s, n);
      var m = e.getTextGuideLine();
      m && this._updateAndAddDisplayable(m, s, n);
      var p = e.getTextContent();
      p && this._updateAndAddDisplayable(p, s, n);
    }
  }, t.prototype.addRoot = function(e) {
    e.__zr && e.__zr.storage === this || this._roots.push(e);
  }, t.prototype.delRoot = function(e) {
    if (e instanceof Array) {
      for (var r = 0, n = e.length; r < n; r++)
        this.delRoot(e[r]);
      return;
    }
    var i = le(this._roots, e);
    i >= 0 && this._roots.splice(i, 1);
  }, t.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, t.prototype.getRoots = function() {
    return this._roots;
  }, t.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, t;
})(), ks;
ks = ee.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
  return setTimeout(t, 16);
};
function ni() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var sM = (function(t) {
  z(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, r = r || {}, n.stage = r.stage || {}, n;
  }
  return e.prototype.addClip = function(r) {
    r.animation && this.removeClip(r), this._head ? (this._tail.next = r, r.prev = this._tail, r.next = null, this._tail = r) : this._head = this._tail = r, r.animation = this;
  }, e.prototype.addAnimator = function(r) {
    r.animation = this;
    var n = r.getClip();
    n && this.addClip(n);
  }, e.prototype.removeClip = function(r) {
    if (r.animation) {
      var n = r.prev, i = r.next;
      n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, r.next = r.prev = r.animation = null;
    }
  }, e.prototype.removeAnimator = function(r) {
    var n = r.getClip();
    n && this.removeClip(n), r.animation = null;
  }, e.prototype.update = function(r) {
    for (var n = ni() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, r || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, e.prototype._startLoop = function() {
    var r = this;
    this._running = !0;
    function n() {
      r._running && (ks(n), !r._paused && r.update());
    }
    ks(n);
  }, e.prototype.start = function() {
    this._running || (this._time = ni(), this._pausedTime = 0, this._startLoop());
  }, e.prototype.stop = function() {
    this._running = !1;
  }, e.prototype.pause = function() {
    this._paused || (this._pauseStart = ni(), this._paused = !0);
  }, e.prototype.resume = function() {
    this._paused && (this._pausedTime += ni() - this._pauseStart, this._paused = !1);
  }, e.prototype.clear = function() {
    for (var r = this._head; r; ) {
      var n = r.next;
      r.prev = r.next = r.animation = null, r = n;
    }
    this._head = this._tail = null;
  }, e.prototype.isFinished = function() {
    return this._head == null;
  }, e.prototype.animate = function(r, n) {
    n = n || {}, this.start();
    var i = new gh(r, n.loop);
    return this.addAnimator(i), i;
  }, e;
})(rr), uM = 300, _l = ee.domSupported, Sl = (function() {
  var t = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], e = [
    "touchstart",
    "touchend",
    "touchmove"
  ], r = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, n = q(t, function(i) {
    var a = i.replace("mouse", "pointer");
    return r.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: t,
    touch: e,
    pointer: n
  };
})(), ip = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, ap = !1;
function Gf(t) {
  var e = t.pointerType;
  return e === "pen" || e === "touch";
}
function lM(t) {
  t.touching = !0, t.touchTimer != null && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function() {
    t.touching = !1, t.touchTimer = null;
  }, 700);
}
function bl(t) {
  t && (t.zrByTouch = !0);
}
function fM(t, e) {
  return gt(t.dom, new hM(t, e), !0);
}
function B_(t, e) {
  for (var r = e, n = !1; r && r.nodeType !== 9 && !(n = r.domBelongToZr || r !== e && r === t.painterRoot); )
    r = r.parentNode;
  return n;
}
var hM = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.stopPropagation = He, this.stopImmediatePropagation = He, this.preventDefault = He, this.type = r.type, this.target = this.currentTarget = e.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY;
  }
  return t;
})(), Lt = {
  mousedown: function(t) {
    t = gt(this.dom, t), this.__mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t);
  },
  mousemove: function(t) {
    t = gt(this.dom, t);
    var e = this.__mayPointerCapture;
    e && (t.zrX !== e[0] || t.zrY !== e[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", t);
  },
  mouseup: function(t) {
    t = gt(this.dom, t), this.__togglePointerCapture(!1), this.trigger("mouseup", t);
  },
  mouseout: function(t) {
    t = gt(this.dom, t);
    var e = t.toElement || t.relatedTarget;
    B_(this, e) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), this.trigger("mouseout", t));
  },
  wheel: function(t) {
    ap = !0, t = gt(this.dom, t), this.trigger("mousewheel", t);
  },
  mousewheel: function(t) {
    ap || (t = gt(this.dom, t), this.trigger("mousewheel", t));
  },
  touchstart: function(t) {
    t = gt(this.dom, t), bl(t), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(t, "start"), Lt.mousemove.call(this, t), Lt.mousedown.call(this, t);
  },
  touchmove: function(t) {
    t = gt(this.dom, t), bl(t), this.handler.processGesture(t, "change"), Lt.mousemove.call(this, t);
  },
  touchend: function(t) {
    t = gt(this.dom, t), bl(t), this.handler.processGesture(t, "end"), Lt.mouseup.call(this, t), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < uM && Lt.click.call(this, t);
  },
  pointerdown: function(t) {
    Lt.mousedown.call(this, t);
  },
  pointermove: function(t) {
    Gf(t) || Lt.mousemove.call(this, t);
  },
  pointerup: function(t) {
    Lt.mouseup.call(this, t);
  },
  pointerout: function(t) {
    Gf(t) || Lt.mouseout.call(this, t);
  }
};
x(["click", "dblclick", "contextmenu"], function(t) {
  Lt[t] = function(e) {
    e = gt(this.dom, e), this.trigger(t, e);
  };
});
var Uf = {
  pointermove: function(t) {
    Gf(t) || Uf.mousemove.call(this, t);
  },
  pointerup: function(t) {
    Uf.mouseup.call(this, t);
  },
  mousemove: function(t) {
    this.trigger("mousemove", t);
  },
  mouseup: function(t) {
    var e = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t));
  }
};
function cM(t, e) {
  var r = e.domHandlers;
  ee.pointerEventsSupported ? x(Sl.pointer, function(n) {
    jo(e, n, function(i) {
      r[n].call(t, i);
    });
  }) : (ee.touchEventsSupported && x(Sl.touch, function(n) {
    jo(e, n, function(i) {
      r[n].call(t, i), lM(e);
    });
  }), x(Sl.mouse, function(n) {
    jo(e, n, function(i) {
      i = dc(i), e.touching || r[n].call(t, i);
    });
  }));
}
function vM(t, e) {
  ee.pointerEventsSupported ? x(ip.pointer, r) : ee.touchEventsSupported || x(ip.mouse, r);
  function r(n) {
    function i(a) {
      a = dc(a), B_(t, a.target) || (a = fM(t, a), e.domHandlers[n].call(t, a));
    }
    jo(e, n, i, { capture: !0 });
  }
}
function jo(t, e, r, n) {
  t.mounted[e] = r, t.listenerOpts[e] = n, $E(t.domTarget, e, r, n);
}
function Tl(t) {
  var e = t.mounted;
  for (var r in e)
    e.hasOwnProperty(r) && qE(t.domTarget, r, e[r], t.listenerOpts[r]);
  t.mounted = {};
}
var op = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = e, this.domHandlers = r;
  }
  return t;
})(), dM = (function(t) {
  z(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = r, i.painterRoot = n, i._localHandlerScope = new op(r, Lt), _l && (i._globalHandlerScope = new op(document, Uf)), cM(i, i._localHandlerScope), i;
  }
  return e.prototype.dispose = function() {
    Tl(this._localHandlerScope), _l && Tl(this._globalHandlerScope);
  }, e.prototype.setCursor = function(r) {
    this.dom.style && (this.dom.style.cursor = r || "default");
  }, e.prototype.__togglePointerCapture = function(r) {
    if (this.__mayPointerCapture = null, _l && +this.__pointerCapturing ^ +r) {
      this.__pointerCapturing = r;
      var n = this._globalHandlerScope;
      r ? vM(this, n) : Tl(n);
    }
  }, e;
})(rr);
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE
*/
var ra = {}, V_ = {};
function pM(t) {
  delete V_[t];
}
function gM(t) {
  if (!t)
    return !1;
  if (typeof t == "string")
    return us(t, 1) < of;
  if (t.colorStops) {
    for (var e = t.colorStops, r = 0, n = e.length, i = 0; i < n; i++)
      r += us(e[i].color, 1);
    return r /= n, r < of;
  }
  return !1;
}
var mM = (function() {
  function t(e, r, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, n = n || {}, this.dom = r, this.id = e;
    var a = new oM(), o = n.renderer || "canvas";
    if (ra[o] || (o = be(ra)[0]), process.env.NODE_ENV !== "production" && !ra[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new ra[o](r, a, n, e), u = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !ee.node && !ee.worker && !u ? new dM(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? ee.touchEventsSupported : !!f, c = 44, v;
    h && (v = Y(n.pointerSize, c)), this.handler = new N_(a, s, l, s.root, v), this.animation = new sM({
      stage: {
        update: u ? null : function() {
          return i._flush(!1);
        }
      }
    }), u || this.animation.start();
  }
  return t.prototype.add = function(e) {
    this._disposed || !e || (this.storage.addRoot(e), e.addSelfToZr(this), this.refresh());
  }, t.prototype.remove = function(e) {
    this._disposed || !e || (this.storage.delRoot(e), e.removeSelfFromZr(this), this.refresh());
  }, t.prototype.configLayer = function(e, r) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(e, r), this.refresh());
  }, t.prototype.setBackgroundColor = function(e) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(e), this.refresh(), this._backgroundColor = e, this._darkMode = gM(e));
  }, t.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, t.prototype.setDarkMode = function(e) {
    this._darkMode = e;
  }, t.prototype.isDarkMode = function() {
    return this._darkMode;
  }, t.prototype.refreshImmediately = function(e) {
    this._disposed || this._refresh({
      animUpdate: !e,
      refresh: !0,
      refreshHover: !1
    });
  }, t.prototype._refresh = function(e) {
    e.animUpdate && this.animation.update(!0), this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh({
      refresh: e.refresh,
      refreshHover: e.refreshHover
    }), this._needsRefresh = this._needsRefreshHover = !1;
  }, t.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, t.prototype.flush = function() {
    this._disposed || this._flush(!0);
  }, t.prototype._flush = function(e) {
    var r, n = ni(), i = this._needsRefresh, a = this._needsRefreshHover;
    (i || a) && (r = !0, this._refresh({
      animUpdate: e,
      refresh: i,
      refreshHover: a
    }));
    var o = ni();
    r ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: o - n
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, t.prototype.setSleepAfterStill = function(e) {
    this._sleepAfterStill = e;
  }, t.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, t.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, t.prototype.refreshHoverImmediately = function() {
    this._disposed || this._refresh({
      animUpdate: !1,
      refresh: !1,
      refreshHover: !0
    });
  }, t.prototype.resize = function(e) {
    this._disposed || (e = e || {}, this.painter.resize(e.width, e.height), this.handler.resize());
  }, t.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, t.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, t.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, t.prototype.setCursorStyle = function(e) {
    this._disposed || this.handler.setCursorStyle(e);
  }, t.prototype.findHover = function(e, r) {
    if (!this._disposed)
      return this.handler.findHover(e, r);
  }, t.prototype.on = function(e, r, n) {
    return this._disposed || this.handler.on(e, r, n), this;
  }, t.prototype.off = function(e, r) {
    this._disposed || this.handler.off(e, r);
  }, t.prototype.trigger = function(e, r) {
    this._disposed || this.handler.trigger(e, r);
  }, t.prototype.clear = function() {
    if (!this._disposed) {
      for (var e = this.storage.getRoots(), r = 0; r < e.length; r++)
        e[r] instanceof ke && e[r].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, t.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, pM(this.id));
  }, t;
})();
function sp(t, e) {
  var r = new mM(Ag(), t, e);
  return V_[r.id] = r, r;
}
function yM(t, e) {
  ra[t] = e;
}
var F_ = "";
typeof navigator < "u" && (F_ = navigator.platform || "");
var Wn = "rgba(0, 0, 0, 0.2)", z_ = Z.color.theme[0], _M = tf(z_, null, null, 0.9);
const H_ = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: Z.color.theme,
  gradientColor: [_M, z_],
  aria: {
    decal: {
      decals: [{
        color: Wn,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Wn,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Wn,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Wn,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Wn,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Wn,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: F_.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var SM = K();
function bM(t, e, r) {
  var n = SM.get(e);
  if (!n)
    return r;
  var i = n(t);
  if (!i)
    return r;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < i.length; a++)
      N(mi(i[a]));
  return r.concat(i);
}
var Eo, Yi, up, wl = "\0_ec_inner", lp = 1, TM = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  matrix: "MatrixComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, wM = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  chord: "ChordChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, Bs = {};
function xM(t) {
  x(t, function(e, r) {
    if (!fe.hasClass(r)) {
      var n = TM[r];
      n && !Bs[n] && (ue("Component " + r + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), Bs[n] = !0);
    }
  });
}
var pc = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.init = function(r, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new xe(a), this._locale = new xe(o), this._optionManager = s;
    }, e.prototype.setOption = function(r, n, i) {
      process.env.NODE_ENV !== "production" && (N(r != null, "option is null/undefined"), N(r[wl] !== lp, "please use chart.getOption()"));
      var a = cp(n);
      this._optionManager.setOption(r, i, a), this._resetOption(null, a);
    }, e.prototype.resetOption = function(r, n) {
      return this._resetOption(r, cp(n));
    }, e.prototype._resetOption = function(r, n) {
      var i = !1, a = this._optionManager;
      if (!r || r === "recreate") {
        var o = a.mountOption(r === "recreate");
        process.env.NODE_ENV !== "production" && xM(o), !this.option || r === "recreate" ? up(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!r || r === "recreate" || r === "media") {
        var u = a.getMediaOption(this);
        u.length && x(u, function(l) {
          i = !0, this._mergeOption(l, n);
        }, this);
      }
      return i;
    }, e.prototype.mergeOption = function(r) {
      this._mergeOption(r, null);
    }, e.prototype._mergeOption = function(r, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = K(), l = n && n.replaceMergeMainTypeMap;
      lw(this), x(r, function(h, c) {
        h != null && (fe.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : i[c] = i[c] == null ? ie(h) : ce(i[c], h, !0));
      }), l && l.each(function(h, c) {
        fe.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
      }), fe.topologicalTravel(s, fe.getAllClassMainTypes(), f, this);
      function f(h) {
        var c = bM(this, h, $e(r[h])), v = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), g = ub(v, c, d);
        pb(g, h, fe), i[h] = null, a.set(h, null), o.set(h, 0);
        var m = [], p = [], y = 0, _, S;
        x(g, function(b, T) {
          var w = b.existing, E = b.newOption;
          if (!E)
            w && (w.mergeOption({}, this), w.optionUpdated({}, !1));
          else {
            var D = h === "series", C = fe.getClass(
              h,
              b.keyInfo.subType,
              !D
              // Give a more detailed warn later if series don't exists
            );
            if (!C) {
              if (process.env.NODE_ENV !== "production") {
                var M = b.keyInfo.subType, L = wM[M];
                Bs[M] || (Bs[M] = !0, ue(L ? "Series " + M + ` is used but not imported.
import { ` + L + ` } from 'echarts/charts';
echarts.use([` + L + "]);" : "Unknown series " + M));
              }
              return;
            }
            if (h === "tooltip") {
              if (_) {
                process.env.NODE_ENV !== "production" && (S || (je("Currently only one tooltip component is allowed."), S = !0));
                return;
              }
              _ = !0;
            }
            if (w && w.constructor === C)
              w.name = b.keyInfo.name, w.mergeOption(E, this), w.optionUpdated(E, !1);
            else {
              var A = k({
                componentIndex: T
              }, b.keyInfo);
              w = new C(E, this, this, A), k(w, A), b.brandNew && (w.__requireNewView = !0), w.init(E, this, this), w.optionUpdated(null, !0);
            }
          }
          w ? (m.push(w.option), p.push(w), y++) : (m.push(void 0), p.push(void 0));
        }, this), i[h] = m, a.set(h, p), o.set(h, y), h === "series" && Eo(this);
      }
      this._seriesIndices || Eo(this);
    }, e.prototype.getOption = function() {
      var r = ie(this.option);
      return x(r, function(n, i) {
        if (fe.hasClass(i)) {
          for (var a = $e(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !mi(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, r[i] = a;
        }
      }), delete r[wl], r;
    }, e.prototype.setTheme = function(r) {
      this._theme = new xe(r), this._resetOption("recreate", null);
    }, e.prototype.getTheme = function() {
      return this._theme;
    }, e.prototype.getLocaleModel = function() {
      return this._locale;
    }, e.prototype.setUpdatePayload = function(r) {
      this._payload = r;
    }, e.prototype.getUpdatePayload = function() {
      return this._payload;
    }, e.prototype.getComponent = function(r, n) {
      var i = this._componentsMap.get(r);
      if (i) {
        var a = i[n || 0];
        if (a)
          return a;
        if (n == null) {
          for (var o = 0; o < i.length; o++)
            if (i[o])
              return i[o];
        }
      }
    }, e.prototype.queryComponents = function(r) {
      var n = r.mainType;
      if (!n)
        return [];
      var i = r.index, a = r.id, o = r.name, s = this._componentsMap.get(n);
      if (!s || !s.length)
        return [];
      var u;
      return i != null ? (u = [], x($e(i), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = fp("id", a, s) : o != null ? u = fp("name", o, s) : u = ze(s, function(l) {
        return !!l;
      }), hp(u, r);
    }, e.prototype.findComponents = function(r) {
      var n = r.query, i = r.mainType, a = s(n), o = a ? this.queryComponents(a) : ze(this._componentsMap.get(i), function(l) {
        return !!l;
      });
      return u(hp(o, r));
      function s(l) {
        var f = i + "Index", h = i + "Id", c = i + "Name";
        return l && (l[f] != null || l[h] != null || l[c] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: l[f],
          id: l[h],
          name: l[c]
        } : null;
      }
      function u(l) {
        return r.filter ? ze(l, r.filter) : l;
      }
    }, e.prototype.eachComponent = function(r, n, i) {
      var a = this._componentsMap;
      if (Q(r)) {
        var o = n, s = r;
        a.each(function(h, c) {
          for (var v = 0; h && v < h.length; v++) {
            var d = h[v];
            d && s.call(o, c, d, d.componentIndex);
          }
        });
      } else
        for (var u = H(r) ? a.get(r) : W(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && n.call(i, f, f.componentIndex);
        }
    }, e.prototype.getSeriesByName = function(r) {
      var n = $t(r, null);
      return ze(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, e.prototype.getSeriesByIndex = function(r) {
      return this._componentsMap.get("series")[r];
    }, e.prototype.getSeriesByType = function(r) {
      return ze(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === r;
      });
    }, e.prototype.getSeries = function() {
      return ze(this._componentsMap.get("series"), function(r) {
        return !!r;
      });
    }, e.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, e.prototype.eachSeries = function(r, n) {
      Yi(this), x(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        r.call(n, a, i);
      }, this);
    }, e.prototype.eachRawSeries = function(r, n) {
      x(this._componentsMap.get("series"), function(i) {
        i && r.call(n, i, i.componentIndex);
      });
    }, e.prototype.eachSeriesByType = function(r, n, i) {
      Yi(this), x(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === r && n.call(i, o, a);
      }, this);
    }, e.prototype.eachRawSeriesByType = function(r, n, i) {
      return x(this.getSeriesByType(r), n, i);
    }, e.prototype.isSeriesFiltered = function(r) {
      return Yi(this), this._seriesIndicesMap.get(r.componentIndex) == null;
    }, e.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, e.prototype.filterSeries = function(r, n) {
      Yi(this);
      var i = [];
      x(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        r.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = K(i);
    }, e.prototype.restoreData = function(r) {
      Eo(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        fe.hasClass(o) && i.push(o);
      }), fe.topologicalTravel(i, fe.getAllClassMainTypes(), function(a) {
        x(n.get(a), function(o) {
          o && (a !== "series" || !CM(o, r)) && o.restoreData();
        });
      });
    }, e.internalField = (function() {
      Eo = function(r) {
        var n = r._seriesIndices = [];
        x(r._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), r._seriesIndicesMap = K(n);
      }, Yi = function(r) {
        if (process.env.NODE_ENV !== "production" && !r._seriesIndices)
          throw new Error("Option should contains series.");
      }, up = function(r, n) {
        r.option = {}, r.option[wl] = lp, r._componentsMap = K({
          series: []
        }), r._componentsCount = K();
        var i = n.aria;
        W(i) && i.enabled == null && (i.enabled = !0), DM(n, r._theme.option), ce(n, H_, !1), r._mergeOption(n, null);
      };
    })(), e;
  })(xe)
);
function CM(t, e) {
  if (e) {
    var r = e.seriesIndex, n = e.seriesId, i = e.seriesName;
    return r != null && t.componentIndex !== r || n != null && t.id !== n || i != null && t.name !== i;
  }
}
function DM(t, e) {
  var r = t.color && !t.colorLayer;
  x(e, function(n, i) {
    i === "colorLayer" && r || i === "color" && t.color || fe.hasClass(i) || (typeof n == "object" ? t[i] = t[i] ? ce(t[i], n, !1) : ie(n) : t[i] == null && (t[i] = n));
  });
}
function fp(t, e, r) {
  if (V(e)) {
    var n = K();
    return x(e, function(a) {
      if (a != null) {
        var o = $t(a, null);
        o != null && n.set(a, !0);
      }
    }), ze(r, function(a) {
      return a && n.get(a[t]);
    });
  } else {
    var i = $t(e, null);
    return ze(r, function(a) {
      return a && i != null && a[t] === i;
    });
  }
}
function hp(t, e) {
  return e.hasOwnProperty("subType") ? ze(t, function(r) {
    return r && r.subType === e.subType;
  }) : t;
}
function cp(t) {
  var e = K();
  return t && x($e(t.replaceMerge), function(r) {
    process.env.NODE_ENV !== "production" && N(fe.hasClass(r), '"' + r + '" is not valid component main type in "replaceMerge"'), e.set(r, !0);
  }), {
    replaceMergeMainTypeMap: e
  };
}
tr(pc, nc);
var EM = /^(min|max)?(.+)$/, MM = (
  /** @class */
  (function() {
    function t(e) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = e;
    }
    return t.prototype.setOption = function(e, r, n) {
      e && (x($e(e.series), function(o) {
        o && o.data && qe(o.data) && Yl(o.data);
      }), x($e(e.dataset), function(o) {
        o && o.source && qe(o.source) && Yl(o.source);
      })), e = ie(e);
      var i = this._optionBackup, a = AM(e, r, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, t.prototype.mountOption = function(e) {
      var r = this._optionBackup;
      return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], ie(e ? r.baseOption : this._newBaseOption);
    }, t.prototype.getTimelineOption = function(e) {
      var r, n = this._timelineOptions;
      if (n.length) {
        var i = e.getComponent("timeline");
        i && (r = ie(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return r;
    }, t.prototype.getMediaOption = function(e) {
      var r = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var u = 0, l = i.length; u < l; u++)
        LM(i[u].query, r, n) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !OM(o, this._currentMediaIndices) && (s = q(o, function(f) {
        return ie(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, t;
  })()
);
function AM(t, e, r) {
  var n = [], i, a, o = t.baseOption, s = t.timeline, u = t.options, l = t.media, f = !!t.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (t.options = t.media = null), a = t), f && (V(l) ? x(l, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && W(v.query) && W(v.query.option) && ue("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? n.push(v) : i || (i = v));
  }) : process.env.NODE_ENV !== "production" && ue("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), x(u, function(v) {
    return c(v);
  }), x(n, function(v) {
    return c(v.option);
  });
  function c(v) {
    x(e, function(d) {
      d(v, r);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: i,
    mediaList: n
  };
}
function LM(t, e, r) {
  var n = {
    width: e,
    height: r,
    aspectratio: e / r
    // lower case for convenience.
  }, i = !0;
  return x(t, function(a, o) {
    var s = o.match(EM);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      IM(n[l], a, u) || (i = !1);
    }
  }), i;
}
function IM(t, e, r) {
  return r === "min" ? t >= e : r === "max" ? t <= e : t === e;
}
function OM(t, e) {
  return t.join(",") === e.join(",");
}
var ct = x, Ia = W, vp = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function xl(t) {
  var e = t && t.itemStyle;
  if (e)
    for (var r = 0, n = vp.length; r < n; r++) {
      var i = vp[r], a = e.normal, o = e.emphasis;
      a && a[i] && (process.env.NODE_ENV !== "production" && Pe("itemStyle.normal." + i, i), t[i] = t[i] || {}, t[i].normal ? ce(t[i].normal, a[i]) : t[i].normal = a[i], a[i] = null), o && o[i] && (process.env.NODE_ENV !== "production" && Pe("itemStyle.emphasis." + i, "emphasis." + i), t[i] = t[i] || {}, t[i].emphasis ? ce(t[i].emphasis, o[i]) : t[i].emphasis = o[i], o[i] = null);
    }
}
function Fe(t, e, r) {
  if (t && t[e] && (t[e].normal || t[e].emphasis)) {
    var n = t[e].normal, i = t[e].emphasis;
    n && (process.env.NODE_ENV !== "production" && dr("'normal' hierarchy in " + e + " has been removed since 4.0. All style properties are configured in " + e + " directly now."), r ? (t[e].normal = t[e].emphasis = null, pe(t[e], n)) : t[e] = n), i && (process.env.NODE_ENV !== "production" && dr(e + ".emphasis has been changed to emphasis." + e + " since 4.0"), t.emphasis = t.emphasis || {}, t.emphasis[e] = i, i.focus && (t.emphasis.focus = i.focus), i.blurScope && (t.emphasis.blurScope = i.blurScope));
  }
}
function na(t) {
  Fe(t, "itemStyle"), Fe(t, "lineStyle"), Fe(t, "areaStyle"), Fe(t, "label"), Fe(t, "labelLine"), Fe(t, "upperLabel"), Fe(t, "edgeLabel");
}
function De(t, e) {
  var r = Ia(t) && t[e], n = Ia(r) && r.textStyle;
  if (n) {
    process.env.NODE_ENV !== "production" && dr("textStyle hierarchy in " + e + " has been removed since 4.0. All textStyle properties are configured in " + e + " directly now.");
    for (var i = 0, a = wv.length; i < a; i++) {
      var o = wv[i];
      n.hasOwnProperty(o) && (r[o] = n[o]);
    }
  }
}
function mt(t) {
  t && (na(t), De(t, "label"), t.emphasis && De(t.emphasis, "label"));
}
function PM(t) {
  if (Ia(t)) {
    xl(t), na(t), De(t, "label"), De(t, "upperLabel"), De(t, "edgeLabel"), t.emphasis && (De(t.emphasis, "label"), De(t.emphasis, "upperLabel"), De(t.emphasis, "edgeLabel"));
    var e = t.markPoint;
    e && (xl(e), mt(e));
    var r = t.markLine;
    r && (xl(r), mt(r));
    var n = t.markArea;
    n && mt(n);
    var i = t.data;
    if (t.type === "graph") {
      i = i || t.nodes;
      var a = t.links || t.edges;
      if (a && !qe(a))
        for (var o = 0; o < a.length; o++)
          mt(a[o]);
      x(t.categories, function(l) {
        na(l);
      });
    }
    if (i && !qe(i))
      for (var o = 0; o < i.length; o++)
        mt(i[o]);
    if (e = t.markPoint, e && e.data)
      for (var s = e.data, o = 0; o < s.length; o++)
        mt(s[o]);
    if (r = t.markLine, r && r.data)
      for (var u = r.data, o = 0; o < u.length; o++)
        V(u[o]) ? (mt(u[o][0]), mt(u[o][1])) : mt(u[o]);
    t.type === "gauge" ? (De(t, "axisLabel"), De(t, "title"), De(t, "detail")) : t.type === "treemap" ? (Fe(t.breadcrumb, "itemStyle"), x(t.levels, function(l) {
      na(l);
    })) : t.type === "tree" && na(t.leaves);
  }
}
function sr(t) {
  return V(t) ? t : t ? [t] : [];
}
function dp(t) {
  return (V(t) ? t[0] : t) || {};
}
function NM(t, e) {
  ct(sr(t.series), function(n) {
    Ia(n) && PM(n);
  });
  var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  e && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ct(r, function(n) {
    ct(sr(t[n]), function(i) {
      i && (De(i, "axisLabel"), De(i.axisPointer, "label"));
    });
  }), ct(sr(t.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    De(i, "axisLabel"), De(i && i.axisPointer, "label");
  }), ct(sr(t.calendar), function(n) {
    Fe(n, "itemStyle"), De(n, "dayLabel"), De(n, "monthLabel"), De(n, "yearLabel");
  }), ct(sr(t.radar), function(n) {
    De(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, process.env.NODE_ENV !== "production" && dr("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, process.env.NODE_ENV !== "production" && dr("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && ct(n.indicator, function(i) {
      i.text && Pe("text", "name", "radar.indicator");
    });
  }), ct(sr(t.geo), function(n) {
    Ia(n) && (mt(n), ct(sr(n.regions), function(i) {
      mt(i);
    }));
  }), ct(sr(t.timeline), function(n) {
    mt(n), Fe(n, "label"), Fe(n, "itemStyle"), Fe(n, "controlStyle", !0);
    var i = n.data;
    V(i) && x(i, function(a) {
      W(a) && (Fe(a, "label"), Fe(a, "itemStyle"));
    });
  }), ct(sr(t.toolbox), function(n) {
    Fe(n, "iconStyle"), ct(n.feature, function(i) {
      Fe(i, "iconStyle");
    });
  }), De(dp(t.axisPointer), "label"), De(dp(t.tooltip).axisPointer, "label");
}
function RM(t, e) {
  for (var r = e.split(","), n = t, i = 0; i < r.length && (n = n && n[r[i]], n != null); i++)
    ;
  return n;
}
function kM(t, e, r, n) {
  for (var i = e.split(","), a = t, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = r);
}
function pp(t) {
  t && x(BM, function(e) {
    e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
  });
}
var BM = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], VM = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Cl = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Xi(t) {
  var e = t && t.itemStyle;
  if (e)
    for (var r = 0; r < Cl.length; r++) {
      var n = Cl[r][1], i = Cl[r][0];
      e[n] != null && (e[i] = e[n], process.env.NODE_ENV !== "production" && Pe(n, i));
    }
}
function gp(t) {
  t && t.alignTo === "edge" && t.margin != null && t.edgeDistance == null && (process.env.NODE_ENV !== "production" && Pe("label.margin", "label.edgeDistance", "pie"), t.edgeDistance = t.margin);
}
function mp(t) {
  t && t.downplay && !t.blur && (t.blur = t.downplay, process.env.NODE_ENV !== "production" && Pe("downplay", "blur", "sunburst"));
}
function FM(t) {
  t && t.focusNodeAdjacency != null && (t.emphasis = t.emphasis || {}, t.emphasis.focus == null && (process.env.NODE_ENV !== "production" && Pe("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), t.emphasis.focus = "adjacency"));
}
function G_(t, e) {
  if (t)
    for (var r = 0; r < t.length; r++)
      e(t[r]), t[r] && G_(t[r].children, e);
}
function U_(t, e) {
  NM(t, e), t.series = $e(t.series), x(t.series, function(r) {
    if (W(r)) {
      var n = r.type;
      if (n === "line")
        r.clipOverflow != null && (r.clip = r.clipOverflow, process.env.NODE_ENV !== "production" && Pe("clipOverflow", "clip", "line"));
      else if (n === "pie" || n === "gauge") {
        r.clockWise != null && (r.clockwise = r.clockWise, process.env.NODE_ENV !== "production" && Pe("clockWise", "clockwise")), gp(r.label);
        var i = r.data;
        if (i && !qe(i))
          for (var a = 0; a < i.length; a++)
            gp(i[a]);
        r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && Pe("hoverOffset", "emphasis.scaleSize"), r.emphasis.scaleSize = r.hoverOffset));
      } else if (n === "gauge") {
        var o = RM(r, "pointer.color");
        o != null && kM(r, "itemStyle.color", o);
      } else if (n === "bar") {
        Xi(r), Xi(r.backgroundStyle), Xi(r.emphasis);
        var i = r.data;
        if (i && !qe(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (Xi(i[a]), Xi(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = r.highlightPolicy;
        s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s, process.env.NODE_ENV !== "production" && Pe("highlightPolicy", "emphasis.focus", "sunburst"))), mp(r), G_(r.data, mp);
      } else n === "graph" || n === "sankey" ? FM(r) : n === "map" && (r.mapType && !r.map && (process.env.NODE_ENV !== "production" && Pe("mapType", "map", "map"), r.map = r.mapType), r.mapLocation && (process.env.NODE_ENV !== "production" && dr("`mapLocation` is not used anymore."), pe(r, r.mapLocation)));
      r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (process.env.NODE_ENV !== "production" && Pe("hoverAnimation", "emphasis.scale"), r.emphasis.scale = r.hoverAnimation)), pp(r);
    }
  }), t.dataRange && (t.visualMap = t.dataRange), x(VM, function(r) {
    var n = t[r];
    n && (V(n) || (n = [n]), x(n, function(i) {
      pp(i);
    }));
  });
}
var zM = Th(HM);
function HM(t) {
  var e = K();
  t.eachSeries(function(r) {
    var n = r.get("stack");
    if (n) {
      var i = e.get(n) || e.set(n, []), a = r.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: r
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      i.push(o);
    }
  }), e.each(function(r) {
    if (r.length !== 0) {
      var n = r[0].seriesModel, i = n.get("stackOrder") || "seriesAsc";
      i === "seriesDesc" && r.reverse(), x(r, function(a, o) {
        a.data.setCalculationInfo("stackedOnSeries", o > 0 ? r[o - 1].seriesModel : null);
      }), GM(r);
    }
  });
}
function GM(t) {
  x(t, function(e, r) {
    var n = [], i = [NaN, NaN], a = [e.stackResultDimension, e.stackedOverDimension], o = e.data, s = e.isStackedByIndex, u = e.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var c = o.get(e.stackedDimension, h);
      if (isNaN(c))
        return i;
      var v, d;
      s ? d = o.getRawIndex(h) : v = o.get(e.stackedByDimension, h);
      for (var g = NaN, m = r - 1; m >= 0; m--) {
        var p = t[m];
        if (s || (d = p.data.rawIndexOf(p.stackedByDimension, v)), d >= 0) {
          var y = p.data.getByRawIndex(p.stackResultDimension, d);
          if (u === "all" || u === "positive" && y > 0 || u === "negative" && y < 0 || u === "samesign" && c >= 0 && y > 0 || u === "samesign" && c <= 0 && y < 0) {
            c = rb(c, y), g = y;
            break;
          }
        }
      }
      return n[0] = c, n[1] = g, n;
    });
  });
}
var er = (
  /** @class */
  (function() {
    function t() {
      this.group = new ke(), this.uid = hu("viewComponent");
    }
    return t.prototype.init = function(e, r) {
    }, t.prototype.render = function(e, r, n, i) {
    }, t.prototype.dispose = function(e, r) {
    }, t.prototype.updateView = function(e, r, n, i) {
    }, t.prototype.updateLayout = function(e, r, n, i) {
    }, t.prototype.updateVisual = function(e, r, n, i) {
    }, t.prototype.toggleBlurSeries = function(e, r, n) {
    }, t.prototype.eachRendered = function(e) {
      var r = this.group;
      r && r.traverse(e);
    }, t;
  })()
);
ch(er);
$s(er);
var yp = ye(), _p = {
  itemStyle: _a(Jm, !0),
  lineStyle: _a(Qm, !0)
}, UM = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function W_(t, e) {
  var r = t.visualStyleMapper || _p[e];
  return r || (console.warn("Unknown style type '" + e + "'."), _p.itemStyle);
}
function Y_(t, e) {
  var r = t.visualDrawType || UM[e];
  return r || (console.warn("Unknown style type '" + e + "'."), "fill");
}
var WM = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(t, e) {
    var r = t.getData(), n = t.visualStyleAccessPath || "itemStyle", i = t.getModel(n), a = W_(t, n), o = a(i), s = i.getShallow("decal");
    s && (r.setVisual("decal", s), s.dirty = !0);
    var u = Y_(t, n), l = o[u], f = Q(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = t.getColorFromPalette(
        // TODO series count changed.
        t.name,
        null,
        e.getSeriesCount()
      );
      o[u] || (o[u] = c, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Q(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || Q(o.stroke) ? c : o.stroke;
    }
    if (r.setVisual("style", o), r.setVisual("drawType", u), !e.isSeriesFiltered(t) && f)
      return r.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var g = t.getDataParams(d), m = k({}, o);
          m[u] = f(g), v.setItemVisual(d, "style", m);
        }
      };
  }
}, Zi = new xe(), YM = {
  createOnAllSeries: !0,
  reset: function(t, e) {
    if (!t.ignoreStyleOnData) {
      var r = t.getData(), n = t.visualStyleAccessPath || "itemStyle", i = W_(t, n), a = r.getVisual("drawType");
      return {
        dataEach: r.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[n]) {
            Zi.option = u[n];
            var l = i(Zi), f = o.ensureUniqueItemVisual(s, "style");
            k(f, l), Zi.option.decal && (o.setItemVisual(s, "decal", Zi.option.decal), Zi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, XM = {
  performRawSeries: !0,
  overallReset: function(t) {
    var e = K();
    t.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.type + "-" + r.getColorBy();
        yp(r).scope = e.get(n) || e.set(n, {});
      }
    }), t.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.getRawData(), i = {}, a = r.getData(), o = yp(r).scope, s = r.visualStyleAccessPath || "itemStyle", u = Y_(r, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          i[f] = l;
        }), n.each(function(l) {
          var f = i[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var c = a.ensureUniqueItemVisual(f, "style"), v = n.getName(l) || l + "", d = n.count();
            c[u] = r.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, Mo = Math.PI;
function ZM(t, e) {
  e = e || {}, pe(e, {
    text: "loading",
    textColor: Z.color.primary,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255,255,255,0.8)",
    showSpinner: !0,
    color: Z.color.theme[0],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var r = new ke(), n = new Le({
    style: {
      fill: e.maskColor
    },
    zlevel: e.zlevel,
    z: 1e4
  });
  r.add(n);
  var i = new it({
    style: {
      text: e.text,
      fill: e.textColor,
      fontSize: e.fontSize,
      fontWeight: e.fontWeight,
      fontStyle: e.fontStyle,
      fontFamily: e.fontFamily
    },
    zlevel: e.zlevel,
    z: 10001
  }), a = new Le({
    style: {
      fill: "none"
    },
    textContent: i,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: e.zlevel,
    z: 10001
  });
  r.add(a);
  var o;
  return e.showSpinner && (o = new su({
    shape: {
      startAngle: -Mo / 2,
      endAngle: -Mo / 2 + 0.1,
      r: e.spinnerRadius
    },
    style: {
      stroke: e.color,
      lineCap: "round",
      lineWidth: e.lineWidth
    },
    zlevel: e.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: Mo * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: Mo * 3 / 2
  }).delay(300).start("circularInOut"), r.add(o)), r.resize = function() {
    var s = i.getBoundingRect().width, u = e.showSpinner ? e.spinnerRadius : 0, l = (t.getWidth() - u * 2 - (e.showSpinner && s ? 10 : 0) - s) / 2 - (e.showSpinner && s ? 0 : 5 + s / 2) + (e.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = t.getHeight() / 2;
    e.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), n.setShape({
      x: 0,
      y: 0,
      width: t.getWidth(),
      height: t.getHeight()
    });
  }, r.resize(), r;
}
var X_ = (
  /** @class */
  (function() {
    function t(e, r, n, i) {
      this._stageTaskMap = K(), this.ecInstance = e, this.api = r, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return t.prototype.restoreData = function(e, r) {
      e.restoreData(r), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, t.prototype.getPerformArgs = function(e, r) {
      if (e.__pipeline) {
        var n = this._pipelineMap.get(e.__pipeline.id), i = n.context, a = !r && n.progressiveEnabled && (!i || i.progressiveRender) && e.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, t.prototype.getPipeline = function(e) {
      return this._pipelineMap.get(e);
    }, t.prototype.updateStreamModes = function(e, r) {
      var n = this._pipelineMap.get(e.uid), i = e.__preparePipelineContext ? e.__preparePipelineContext(r, n) : Eb(e, r, n);
      e.pipelineContext = n.context = i;
    }, t.prototype.restorePipelines = function(e, r) {
      var n = this, i = n._pipelineMap = K();
      r.eachSeries(function(a) {
        var o = e.painter.type === "canvas" && a.getProgressive(), s = a.uid;
        i.set(s, {
          id: s,
          head: null,
          tail: null,
          threshold: a.getProgressiveThreshold(),
          progressiveEnabled: o && !(a.preventIncremental && a.preventIncremental()),
          blockIndex: -1,
          step: Math.round(o || 700),
          count: 0
        }), n._pipe(a, a.dataTask);
      });
    }, t.prototype.prepareStageTasks = function() {
      var e = this._stageTaskMap, r = this.api.getModel(), n = this.api;
      x(this._allHandlers, function(i) {
        var a = e.get(i.uid) || e.set(i.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), N(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, r, n), i.overallReset && this._createOverallStageTask(i, a, r, n);
      }, this);
    }, t.prototype.prepareView = function(e, r, n, i) {
      var a = e.renderTask, o = a.context;
      o.model = r, o.ecModel = n, o.api = i, a.__block = !e.incrementalPrepareRender, this._pipe(r, a);
    }, t.prototype.performDataProcessorTasks = function(e, r) {
      this._performStageTasks(this._dataProcessorHandlers, e, r, {
        block: !0
      });
    }, t.prototype.performVisualTasks = function(e, r, n) {
      this._performStageTasks(this._visualHandlers, e, r, n);
    }, t.prototype._performStageTasks = function(e, r, n, i) {
      i = i || {};
      var a = !1, o = this;
      x(e, function(u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, c = f.overallTask;
          if (c) {
            var v, d = c.agentStubMap;
            d.each(function(m) {
              s(i, m) && (m.dirty(), v = !0);
            }), v && c.dirty(), o.updatePayload(c, n);
            var g = o.getPerformArgs(c, i.block);
            d.each(function(m) {
              m.perform(g);
            }), c.perform(g) && (a = !0);
          } else h && h.each(function(m, p) {
            s(i, m) && m.dirty();
            var y = o.getPerformArgs(m, i.block);
            y.skip = !u.performRawSeries && r.isSeriesFiltered(m.context.model), o.updatePayload(m, n), m.perform(y) && (a = !0);
          });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, t.prototype.performSeriesTasks = function(e) {
      var r;
      e.eachSeries(function(n) {
        r = n.dataTask.perform() || r;
      }), this.unfinished = r || this.unfinished;
    }, t.prototype.plan = function() {
      this._pipelineMap.each(function(e) {
        var r = e.tail;
        do {
          if (r.__block) {
            e.blockIndex = r.__idxInPipeline;
            break;
          }
          r = r.getUpstream();
        } while (r);
      });
    }, t.prototype.updatePayload = function(e, r) {
      r !== "remain" && (e.context.payload = r);
    }, t.prototype._createSeriesStageTask = function(e, r, n, i) {
      var a = this, o = r.seriesTaskMap, s = r.seriesTaskMap = K(), u = e.seriesType, l = e.getTargetSeries;
      e.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);
      function f(h) {
        var c = h.uid, v = s.set(c, o && o.get(c) || pa({
          plan: JM,
          reset: jM,
          count: tA
        }));
        v.context = {
          model: h,
          ecModel: n,
          api: i,
          // PENDING: `useClearVisual` not used?
          useClearVisual: e.isVisual && !e.isLayout,
          plan: e.plan,
          reset: e.reset,
          scheduler: a
        }, a._pipe(h, v);
      }
    }, t.prototype._createOverallStageTask = function(e, r, n, i) {
      var a = this, o = r.overallTask = r.overallTask || pa({
        reset: $M
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: e.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = K(), l = e.seriesType, f = e.getTargetSeries, h = e.dirtyOnOverallProgress, c = !1, v = "";
      process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), N(!e.createOnAllSeries, v), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : x(n.getSeries(), d);
      function d(g) {
        var m = g.uid, p = u.set(m, s && s.get(m) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (c = !0, pa({
          reset: qM,
          onDirty: QM
        })));
        p.context = {
          model: g,
          dirtyOnOverallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, p.agent = o, p.__block = h, a._pipe(g, p);
      }
      c && o.dirty();
    }, t.prototype._pipe = function(e, r) {
      var n = e.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = r), i.tail && i.tail.pipe(r), i.tail = r, r.__idxInPipeline = i.count++, r.__pipeline = i;
    }, t.wrapStageHandler = function(e, r) {
      return Q(e) && (e = {
        overallReset: e,
        seriesType: rA(e)
      }), e.uid = hu("stageHandler"), r && (e.visualType = r), e;
    }, t;
  })()
);
function $M(t) {
  t.overallReset(t.ecModel, t.api, t.payload);
}
function qM(t) {
  return t.dirtyOnOverallProgress && KM;
}
function KM() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function QM() {
  this.agent && this.agent.dirty();
}
function JM(t) {
  return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
}
function jM(t) {
  t.useClearVisual && t.data.clearAllVisual();
  var e = t.resetDefines = $e(t.reset(t.model, t.ecModel, t.api, t.payload));
  return e.length > 1 ? q(e, function(r, n) {
    return Z_(n);
  }) : eA;
}
var eA = Z_(0);
function Z_(t) {
  return function(e, r) {
    var n = r.data, i = r.resetDefines[t];
    if (i && i.dataEach)
      for (var a = e.start; a < e.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(e, n);
  };
}
function tA(t) {
  return t.data.count();
}
function rA(t) {
  Vs = null;
  try {
    t(Oa, $_);
  } catch {
  }
  return Vs;
}
var Oa = {}, $_ = {}, Vs;
q_(Oa, pc);
q_($_, Sm);
Oa.eachSeriesByType = Oa.eachRawSeriesByType = function(t) {
  Vs = t;
};
Oa.eachComponent = function(t) {
  t.mainType === "series" && t.subType && (Vs = t.subType);
};
function q_(t, e) {
  for (var r in e.prototype)
    t[r] = He;
}
var R = Z.darkColor, Sp = R.background, $i = function() {
  return {
    axisLine: {
      lineStyle: {
        color: R.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: R.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [R.backgroundTint, R.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: R.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: R.axisLabel
    },
    axisName: {}
  };
}, bp = {
  label: {
    color: R.secondary
  },
  itemStyle: {
    borderColor: R.borderTint
  },
  dividerLineStyle: {
    color: R.border
  }
}, K_ = {
  darkMode: !0,
  color: R.theme,
  backgroundColor: Sp,
  axisPointer: {
    lineStyle: {
      color: R.border
    },
    crossStyle: {
      color: R.borderShade
    },
    label: {
      color: R.tertiary
    }
  },
  legend: {
    textStyle: {
      color: R.secondary
    },
    pageTextStyle: {
      color: R.tertiary
    }
  },
  textStyle: {
    color: R.secondary
  },
  title: {
    textStyle: {
      color: R.primary
    },
    subtextStyle: {
      color: R.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: R.accent50
    },
    feature: {
      dataView: {
        backgroundColor: Sp,
        textColor: R.primary,
        textareaColor: R.background,
        textareaBorderColor: R.border,
        buttonColor: R.accent50,
        buttonTextColor: R.neutral00
      }
    }
  },
  tooltip: {
    backgroundColor: R.neutral20,
    defaultBorderColor: R.border,
    textStyle: {
      color: R.tertiary
    }
  },
  dataZoom: {
    borderColor: R.accent10,
    textStyle: {
      color: R.tertiary
    },
    brushStyle: {
      color: R.backgroundTint
    },
    handleStyle: {
      color: R.neutral00,
      borderColor: R.accent20
    },
    moveHandleStyle: {
      color: R.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: R.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: R.accent30
      },
      areaStyle: {
        color: R.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: R.accent50
      },
      areaStyle: {
        color: R.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: R.secondary
    },
    handleStyle: {
      borderColor: R.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: R.accent10
    },
    label: {
      color: R.tertiary
    },
    controlStyle: {
      color: R.accent30,
      borderColor: R.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: R.neutral00,
      borderColor: R.neutral20
    },
    dayLabel: {
      color: R.tertiary
    },
    monthLabel: {
      color: R.secondary
    },
    yearLabel: {
      color: R.secondary
    }
  },
  matrix: {
    x: bp,
    y: bp,
    backgroundColor: {
      borderColor: R.axisLine
    },
    body: {
      itemStyle: {
        borderColor: R.borderTint
      }
    }
  },
  timeAxis: $i(),
  logAxis: $i(),
  valueAxis: $i(),
  categoryAxis: $i(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: R.theme
  },
  gauge: {
    title: {
      color: R.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, R.neutral05]]
      }
    },
    axisLabel: {
      color: R.axisLabel
    },
    detail: {
      color: R.primary
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  },
  funnel: {
    itemStyle: {
      borderColor: R.background
    }
  },
  radar: (function() {
    var t = $i();
    return t.axisName = {
      color: R.axisLabel
    }, t.axisLine.lineStyle.color = R.neutral20, t;
  })(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: R.neutral20,
        textStyle: {
          color: R.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: R.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: R.background
    }
  },
  map: {
    itemStyle: {
      borderColor: R.border,
      areaColor: R.neutral10
    },
    label: {
      color: R.tertiary
    },
    emphasis: {
      label: {
        color: R.primary
      },
      itemStyle: {
        areaColor: R.highlight
      }
    },
    select: {
      label: {
        color: R.primary
      },
      itemStyle: {
        areaColor: R.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: R.border,
      areaColor: R.neutral10
    },
    emphasis: {
      label: {
        color: R.primary
      },
      itemStyle: {
        areaColor: R.highlight
      }
    },
    select: {
      label: {
        color: R.primary
      },
      itemStyle: {
        color: R.highlight
      }
    }
  }
};
K_.categoryAxis.splitLine.show = !1;
var nA = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.normalizeQuery = function(e) {
      var r = {}, n = {}, i = {};
      if (H(e)) {
        var a = Ut(e);
        r.mainType = a.main || null, r.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        x(e, function(u, l) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var c = o[h], v = l.lastIndexOf(c);
            if (v > 0 && v === l.length - c.length) {
              var d = l.slice(0, v);
              d !== "data" && (r.mainType = d, r[c.toLowerCase()] = u, f = !0);
            }
          }
          s.hasOwnProperty(l) && (n[l] = u, f = !0), f || (i[l] = u);
        });
      }
      return {
        cptQuery: r,
        dataQuery: n,
        otherQuery: i
      };
    }, t.prototype.filter = function(e, r) {
      var n = this.eventInfo;
      if (!n)
        return !0;
      var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
      if (!o || !s)
        return !0;
      var u = r.cptQuery, l = r.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(e, r.otherQuery, i, a));
      function f(h, c, v, d) {
        return h[v] == null || c[d || v] === h[v];
      }
    }, t.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, t;
  })()
), Wf = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Tp = Wf.concat(["symbolKeepAspect"]), iA = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(t, e) {
    var r = t.getData();
    if (t.legendIcon && r.setVisual("legendIcon", t.legendIcon), !t.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < Wf.length; o++) {
      var s = Wf[o], u = t.get(s);
      Q(u) ? (a = !0, i[s] = u) : n[s] = u;
    }
    if (n.symbol = n.symbol || t.defaultSymbol, r.setVisual(k({
      legendIcon: t.legendIcon || n.symbol,
      symbolKeepAspect: t.get("symbolKeepAspect")
    }, n)), e.isSeriesFiltered(t))
      return;
    var l = be(i);
    function f(h, c) {
      for (var v = t.getRawValue(c), d = t.getDataParams(c), g = 0; g < l.length; g++) {
        var m = l[g];
        h.setItemVisual(c, m, i[m](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, aA = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(t, e) {
    if (!t.hasSymbolVisual || e.isSeriesFiltered(t))
      return;
    var r = t.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < Tp.length; s++) {
        var u = Tp[s], l = o.getShallow(u, !0);
        l != null && i.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: r.hasItemOption ? n : null
    };
  }
};
function oA(t, e, r) {
  switch (r) {
    case "color":
      var n = t.getItemVisual(e, "style");
      return n[t.getVisual("drawType")];
    case "opacity":
      return t.getItemVisual(e, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return t.getItemVisual(e, r);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + r);
  }
}
function sA(t, e) {
  switch (e) {
    case "color":
      var r = t.getVisual("style");
      return r[t.getVisual("drawType")];
    case "opacity":
      return t.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return t.getVisual(e);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function ia(t, e, r) {
  for (var n; t && !(e(t) && (n = t, r)); )
    t = t.__hostTarget || t.parent;
  return n;
}
var pt = new rr(), Fs = {};
function uA(t, e) {
  process.env.NODE_ENV !== "production" && Fs[t] && ue("Already has an implementation of " + t + "."), Fs[t] = e;
}
function lA(t) {
  return process.env.NODE_ENV !== "production" && (Fs[t] || ue("Implementation of " + t + " doesn't exists.")), Fs[t];
}
var fA = Math.round(Math.random() * 9), hA = typeof Object.defineProperty == "function", cA = (function() {
  function t() {
    this._id = "__ec_inner_" + fA++;
  }
  return t.prototype.get = function(e) {
    return this._guard(e)[this._id];
  }, t.prototype.set = function(e, r) {
    var n = this._guard(e);
    return hA ? Object.defineProperty(n, this._id, {
      value: r,
      enumerable: !1,
      configurable: !0
    }) : n[this._id] = r, this;
  }, t.prototype.delete = function(e) {
    return this.has(e) ? (delete this._guard(e)[this._id], !0) : !1;
  }, t.prototype.has = function(e) {
    return !!this._guard(e)[this._id];
  }, t.prototype._guard = function(e) {
    if (e !== Object(e))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return e;
  }, t;
})();
function mn(t) {
  return isFinite(t);
}
function vA(t, e, r) {
  var n = e.x == null ? 0 : e.x, i = e.x2 == null ? 1 : e.x2, a = e.y == null ? 0 : e.y, o = e.y2 == null ? 0 : e.y2;
  e.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), n = mn(n) ? n : 0, i = mn(i) ? i : 1, a = mn(a) ? a : 0, o = mn(o) ? o : 0;
  var s = t.createLinearGradient(n, a, i, o);
  return s;
}
function dA(t, e, r) {
  var n = r.width, i = r.height, a = Math.min(n, i), o = e.x == null ? 0.5 : e.x, s = e.y == null ? 0.5 : e.y, u = e.r == null ? 0.5 : e.r;
  e.global || (o = o * n + r.x, s = s * i + r.y, u = u * a), o = mn(o) ? o : 0.5, s = mn(s) ? s : 0.5, u = u >= 0 && mn(u) ? u : 0.5;
  var l = t.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function Yf(t, e, r) {
  for (var n = e.type === "radial" ? dA(t, e, r) : vA(t, e, r), i = e.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function pA(t, e) {
  if (t === e || !t && !e)
    return !1;
  if (!t || !e || t.length !== e.length)
    return !0;
  for (var r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !0;
  return !1;
}
function Ao(t) {
  return parseInt(t, 10);
}
function Lo(t, e, r) {
  var n = ["width", "height"][e], i = ["clientWidth", "clientHeight"][e], a = ["paddingLeft", "paddingTop"][e], o = ["paddingRight", "paddingBottom"][e];
  if (r[n] != null && r[n] !== "auto")
    return parseFloat(r[n]);
  var s = document.defaultView.getComputedStyle(t);
  return (t[i] || Ao(s[n]) || Ao(t.style[n])) - (Ao(s[a]) || 0) - (Ao(s[o]) || 0) || 0;
}
function gA(t, e) {
  return !t || t === "solid" || !(e > 0) ? null : t === "dashed" ? [4 * e, 2 * e] : t === "dotted" ? [e] : we(t) ? [t] : V(t) ? t : null;
}
function Q_(t) {
  var e = t.style, r = e.lineDash && e.lineWidth > 0 && gA(e.lineDash, e.lineWidth), n = e.lineDashOffset;
  if (r) {
    var i = e.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
    i && i !== 1 && (r = q(r, function(a) {
      return a / i;
    }), n /= i);
  }
  return [r, n];
}
var mA = new xn(!0);
function zs(t) {
  var e = t.stroke;
  return !(e == null || e === "none" || !(t.lineWidth > 0));
}
function wp(t) {
  return typeof t == "string" && t !== "none";
}
function Hs(t) {
  var e = t.fill;
  return e != null && e !== "none";
}
function xp(t, e) {
  if (e.fillOpacity != null && e.fillOpacity !== 1) {
    var r = t.globalAlpha;
    t.globalAlpha = e.fillOpacity * e.opacity, t.fill(), t.globalAlpha = r;
  } else
    t.fill();
}
function Cp(t, e) {
  if (e.strokeOpacity != null && e.strokeOpacity !== 1) {
    var r = t.globalAlpha;
    t.globalAlpha = e.strokeOpacity * e.opacity, t.stroke(), t.globalAlpha = r;
  } else
    t.stroke();
}
function Xf(t, e, r) {
  var n = kg(e.image, e.__image, r);
  if (qs(n)) {
    var i = t.createPattern(n, e.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(e.x || 0, e.y || 0), a.rotateSelf(0, 0, (e.rotation || 0) * u1), a.scaleSelf(e.scaleX || 1, e.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function yA(t, e, r, n, i) {
  var a, o = zs(r), s = Hs(r), u = r.strokePercent, l = u < 1, f = !e.path;
  (!e.silent || l) && f && e.createPathProxy();
  var h = e.path || mA, c = e.__dirty;
  if (!n) {
    var v = r.fill, d = r.stroke, g = s && !!v.colorStops, m = o && !!d.colorStops, p = s && !!v.image, y = o && !!d.image, _ = void 0, S = void 0, b = void 0, T = void 0, w = void 0;
    (g || m) && (w = e.getBoundingRect()), g && (_ = c ? Yf(t, v, w) : e.__canvasFillGradient, e.__canvasFillGradient = _), m && (S = c ? Yf(t, d, w) : e.__canvasStrokeGradient, e.__canvasStrokeGradient = S), p && (b = c || !e.__canvasFillPattern ? Xf(t, v, e) : e.__canvasFillPattern, e.__canvasFillPattern = b), y && (T = c || !e.__canvasStrokePattern ? Xf(t, d, e) : e.__canvasStrokePattern, e.__canvasStrokePattern = T), g ? t.fillStyle = _ : p && (b ? t.fillStyle = b : s = !1), m ? t.strokeStyle = S : y && (T ? t.strokeStyle = T : o = !1);
  }
  var E = e.getGlobalScale();
  h.setScale(E[0], E[1], e.segmentIgnoreThreshold);
  var D, C;
  t.setLineDash && r.lineDash && (a = Q_(e), D = a[0], C = a[1]);
  var M = !0;
  (f || c & qn) && (h.setDPR(t.dpr), l ? h.setContext(null) : (h.setContext(t), M = !1), h.reset(), e.buildPath(h, e.shape, n), h.toStatic(), e.pathUpdated()), M && h.rebuildPath(t, l ? u : 1), D && (t.setLineDash(D), t.lineDashOffset = C), n ? (i.batchFill = s, i.batchStroke = o) : r.strokeFirst ? (o && Cp(t, r), s && xp(t, r)) : (s && xp(t, r), o && Cp(t, r)), D && t.setLineDash([]);
}
function _A(t, e, r) {
  var n = e.__image = kg(r.image, e.__image, e, e.onload);
  if (!(!n || !qs(n))) {
    var i = r.x || 0, a = r.y || 0, o = e.getWidth(), s = e.getHeight(), u = n.width / n.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), r.sWidth && r.sHeight) {
      var l = r.sx || 0, f = r.sy || 0;
      t.drawImage(n, l, f, r.sWidth, r.sHeight, i, a, o, s);
    } else if (r.sx && r.sy) {
      var l = r.sx, f = r.sy, h = o - l, c = s - f;
      t.drawImage(n, l, f, h, c, i, a, o, s);
    } else
      t.drawImage(n, i, a, o, s);
  }
}
function SA(t, e, r) {
  var n, i = r.text;
  if (i != null && (i += ""), i) {
    t.font = r.font || Nr, t.textAlign = r.textAlign, t.textBaseline = r.textBaseline;
    var a = void 0, o = void 0;
    t.setLineDash && r.lineDash && (n = Q_(e), a = n[0], o = n[1]), a && (t.setLineDash(a), t.lineDashOffset = o), r.strokeFirst ? (zs(r) && t.strokeText(i, r.x, r.y), Hs(r) && t.fillText(i, r.x, r.y)) : (Hs(r) && t.fillText(i, r.x, r.y), zs(r) && t.strokeText(i, r.x, r.y)), a && t.setLineDash([]);
  }
}
var Dp = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Ep = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function J_(t, e, r, n, i) {
  var a = !1;
  if (!n && (r = r || {}, e === r))
    return !1;
  if (n || e.opacity !== r.opacity) {
    Xe(t, i), a = !0;
    var o = Math.max(Math.min(e.opacity, 1), 0);
    t.globalAlpha = isNaN(o) ? Tn.opacity : o;
  }
  (n || e.blend !== r.blend) && (a || (Xe(t, i), a = !0), t.globalCompositeOperation = e.blend || Tn.blend);
  for (var s = 0; s < Dp.length; s++) {
    var u = Dp[s];
    (n || e[u] !== r[u]) && (a || (Xe(t, i), a = !0), t[u] = t.dpr * (e[u] || 0));
  }
  return (n || e.shadowColor !== r.shadowColor) && (a || (Xe(t, i), a = !0), t.shadowColor = e.shadowColor || Tn.shadowColor), a;
}
function Mp(t, e, r, n, i) {
  var a = e.style, o = n ? null : r && r.style || {};
  if (a === o)
    return !1;
  var s = J_(t, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (Xe(t, i), s = !0), wp(a.fill) && (t.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Xe(t, i), s = !0), wp(a.stroke) && (t.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Xe(t, i), s = !0), t.globalAlpha = a.opacity == null ? 1 : a.opacity), e.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
    t.lineWidth !== l && (s || (Xe(t, i), s = !0), t.lineWidth = l);
  }
  for (var f = 0; f < Ep.length; f++) {
    var h = Ep[f], c = h[0];
    (n || a[c] !== o[c]) && (s || (Xe(t, i), s = !0), t[c] = a[c] || h[1]);
  }
  return s;
}
function bA(t, e, r, n, i) {
  return J_(t, e.style, r && r.style, n, i);
}
function j_(t, e) {
  var r = e.transform, n = t.dpr || 1;
  r ? t.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : t.setTransform(n, 0, 0, n, 0, 0);
}
function TA(t, e, r) {
  for (var n = !1, i = 0; i < t.length; i++) {
    var a = t[i];
    n = n || a.isZeroArea(), j_(e, a), e.beginPath(), a.buildPath(e, a.shape), e.clip();
  }
  r.allClipped = n;
}
function wA(t, e) {
  return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : !(!t && !e);
}
var Ap = 1, Lp = 2, Ip = 3, Op = 4;
function xA(t) {
  var e = Hs(t), r = zs(t);
  return !(t.lineDash || !(+e ^ +r) || e && typeof t.fill != "string" || r && typeof t.stroke != "string" || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1);
}
function Xe(t, e) {
  e.batchFill && (e.batchFill = !1, t.fill()), e.batchStroke && (e.batchStroke = !1, t.stroke());
}
function e0(t, e) {
  var r = { inHover: !1, viewWidth: 0, viewHeight: 0, beforeBrushParam: {} };
  yn(t, e, r), li(t, r);
}
function yn(t, e, r) {
  var n = e.transform;
  if (!e.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
    e.__dirty &= ~rt, e.__isRendered = !1;
    return;
  }
  var i = e.__clipPaths, a = r.prevElClipPaths, o = e.style, s = !1, u = !1;
  if ((!a || pA(i, a)) && (a && (Xe(t, r), t.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), i && i.length && (Xe(t, r), t.save(), TA(i, t, r), s = !0, r.prevElClipPaths = i)), r.allClipped) {
    e.__dirty &= ~rt, e.__isRendered = !1;
    return;
  }
  e.beforeBrush && e.beforeBrush(r.beforeBrushParam), e.innerBeforeBrush();
  var l = r.prevEl;
  l || (u = s = !0);
  var f = e instanceof me && e.autoBatch && xA(o);
  s || wA(n, l.transform) ? (Xe(t, r), j_(t, e)) : f || Xe(t, r), e instanceof me ? (r.lastDrawType !== Ap && (u = !0, r.lastDrawType = Ap), Mp(t, e, l, u, r), (!f || !r.batchFill && !r.batchStroke) && t.beginPath(), yA(t, e, o, f, r)) : e instanceof fs ? (r.lastDrawType !== Ip && (u = !0, r.lastDrawType = Ip), Mp(t, e, l, u, r), SA(t, e, o)) : e instanceof zr ? (r.lastDrawType !== Lp && (u = !0, r.lastDrawType = Lp), bA(t, e, l, u, r), _A(t, e, o)) : e.getTemporalDisplayables && (r.lastDrawType !== Op && (u = !0, r.lastDrawType = Op), CA(t, e, r)), e.innerAfterBrush(), e.afterBrush && (f && Xe(t, r), e.afterBrush()), r.prevEl = e, e.__dirty = 0, e.__isRendered = !0;
}
function li(t, e) {
  Xe(t, e), e.prevElClipPaths && t.restore();
}
function CA(t, e, r) {
  var n = e.getDisplayables(), i = e.getTemporalDisplayables();
  t.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: r.viewWidth,
    viewHeight: r.viewHeight,
    inHover: r.inHover,
    beforeBrushParam: {}
  }, o, s;
  for (o = e.getCursor(), s = n.length; o < s; o++) {
    var u = n[o];
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), yn(t, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  li(t, a);
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), yn(t, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  li(t, a), e.clearTemporalDisplayables(), e.notClear = !0, t.restore();
}
var Dl = new cA(), Pp = new vi(100), Np = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Zf(t, e) {
  if (t === "none")
    return null;
  var r = e.getDevicePixelRatio(), n = e.getZr(), i = n.painter.type === "svg";
  t.dirty && Dl.delete(t);
  var a = Dl.get(t);
  if (a)
    return a;
  var o = pe(t, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / r, Dl.set(t, s), t.dirty = !1, s;
  function u(l) {
    for (var f = [r], h = !0, c = 0; c < Np.length; ++c) {
      var v = o[Np[c]];
      if (v != null && !V(v) && !H(v) && !we(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (i ? "-svg" : "");
      var g = Pp.get(d);
      g && (i ? l.svgElement = g : l.image = g);
    }
    var m = r0(o.dashArrayX), p = DA(o.dashArrayY), y = t0(o.symbol), _ = EA(m), S = n0(p), b = !i && ut.createCanvas(), T = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, w = D(), E;
    b && (b.width = w.width * r, b.height = w.height * r, E = b.getContext("2d")), C(), h && Pp.put(d, b || T), l.image = b, l.svgElement = T, l.svgWidth = w.width, l.svgHeight = w.height;
    function D() {
      for (var M = 1, L = 0, A = _.length; L < A; ++L)
        M = _v(M, _[L]);
      for (var I = 1, L = 0, A = y.length; L < A; ++L)
        I = _v(I, y[L].length);
      M *= I;
      var P = S * _.length * y.length;
      if (process.env.NODE_ENV !== "production") {
        var O = function(B) {
          console.warn("Calculated decal size is greater than " + B + " due to decal option settings so " + B + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + B + " to be larger to avoid incontinuity.");
        };
        M > o.maxTileWidth && O("maxTileWidth"), P > o.maxTileHeight && O("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(M, o.maxTileWidth)),
        height: Math.max(1, Math.min(P, o.maxTileHeight))
      };
    }
    function C() {
      E && (E.clearRect(0, 0, b.width, b.height), o.backgroundColor && (E.fillStyle = o.backgroundColor, E.fillRect(0, 0, b.width, b.height)));
      for (var M = 0, L = 0; L < p.length; ++L)
        M += p[L];
      if (M <= 0)
        return;
      for (var A = -S, I = 0, P = 0, O = 0; A < w.height; ) {
        if (I % 2 === 0) {
          for (var B = P / 2 % y.length, G = 0, U = 0, J = 0; G < w.width * 2; ) {
            for (var $ = 0, L = 0; L < m[O].length; ++L)
              $ += m[O][L];
            if ($ <= 0)
              break;
            if (U % 2 === 0) {
              var te = (1 - o.symbolSize) * 0.5, X = G + m[O][U] * te, F = A + p[I] * te, ne = m[O][U] * o.symbolSize, ae = p[I] * o.symbolSize, Ue = J / 2 % y[B].length;
              Mt(X, F, ne, ae, y[B][Ue]);
            }
            G += m[O][U], ++J, ++U, U === m[O].length && (U = 0);
          }
          ++O, O === m.length && (O = 0);
        }
        A += p[I], ++P, ++I, I === p.length && (I = 0);
      }
      function Mt(Te, Me, re, oe, Hr) {
        var We = i ? 1 : r, Cc = Ti(Hr, Te * We, Me * We, re * We, oe * We, o.color, o.symbolKeepAspect);
        if (i) {
          var Dc = n.painter.renderOneToVNode(Cc);
          Dc && T.children.push(Dc);
        } else
          e0(E, Cc);
      }
    }
  }
}
function t0(t) {
  if (!t || t.length === 0)
    return [["rect"]];
  if (H(t))
    return [[t]];
  for (var e = !0, r = 0; r < t.length; ++r)
    if (!H(t[r])) {
      e = !1;
      break;
    }
  if (e)
    return t0([t]);
  for (var n = [], r = 0; r < t.length; ++r)
    H(t[r]) ? n.push([t[r]]) : n.push(t[r]);
  return n;
}
function r0(t) {
  if (!t || t.length === 0)
    return [[0, 0]];
  if (we(t)) {
    var e = Math.ceil(t);
    return [[e, e]];
  }
  for (var r = !0, n = 0; n < t.length; ++n)
    if (!we(t[n])) {
      r = !1;
      break;
    }
  if (r)
    return r0([t]);
  for (var i = [], n = 0; n < t.length; ++n)
    if (we(t[n])) {
      var e = Math.ceil(t[n]);
      i.push([e, e]);
    } else {
      var e = q(t[n], function(s) {
        return Math.ceil(s);
      });
      e.length % 2 === 1 ? i.push(e.concat(e)) : i.push(e);
    }
  return i;
}
function DA(t) {
  if (!t || typeof t == "object" && t.length === 0)
    return [0, 0];
  if (we(t)) {
    var e = Math.ceil(t);
    return [e, e];
  }
  var r = q(t, function(n) {
    return Math.ceil(n);
  });
  return t.length % 2 ? r.concat(r) : r;
}
function EA(t) {
  return q(t, function(e) {
    return n0(e);
  });
}
function n0(t) {
  for (var e = 0, r = 0; r < t.length; ++r)
    e += t[r];
  return t.length % 2 === 1 ? e * 2 : e;
}
var MA = Th(AA);
function AA(t, e) {
  t.eachRawSeries(function(r) {
    if (!t.isSeriesFiltered(r)) {
      var n = r.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var u = n.ensureUniqueItemVisual(o, "style");
          u.decal = Zf(s, e);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = Zf(i, e);
      }
    }
  });
}
var LA = 1, IA = 800, OA = 900, PA = 920, NA = 1e3, RA = 2e3, Rp = 5e3, i0 = 1e3, kA = 1100, gc = 2e3, a0 = 3e3, BA = 4e3, yu = 4500, VA = 4600, FA = 5e3, zA = 6e3, o0 = 7e3, HA = {
  PROCESSOR: {
    SERIES_FILTER: IA,
    AXIS_STATISTICS: PA,
    FILTER: NA,
    STATISTIC: Rp,
    STATISTICS: Rp
  },
  VISUAL: {
    LAYOUT: i0,
    PROGRESSIVE_LAYOUT: kA,
    GLOBAL: gc,
    CHART: a0,
    POST_CHART_LAYOUT: VA,
    COMPONENT: BA,
    BRUSH: FA,
    CHART_ITEM: yu,
    ARIA: zA,
    DECAL: o0
  }
}, Ee = "__flagInMainProcess", Io = "__mainProcessVersion", Ie = "__pendingUpdate", El = "__needsUpdateStatus", kp = /^[a-zA-Z0-9_]+$/, Ml = "__connectUpdateStatus", Bp = 0, GA = 1, UA = 2;
function s0(t) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    if (this.isDisposed()) {
      Qe(this.id);
      return;
    }
    return l0(this, t, e);
  };
}
function u0(t) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return l0(this, t, e);
  };
}
function l0(t, e, r) {
  return r[0] = r[0] && r[0].toLowerCase(), rr.prototype[e].apply(t, r);
}
var f0 = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  })(rr)
), h0 = f0.prototype;
h0.on = u0("on");
h0.off = u0("off");
var hn, Al, Oo, ur, Po, Ll, Il, Yn, Xn, Vp, Fp, Ol, zp, No, Hp, c0, vt, Gp, Zn, v0 = (
  /** @class */
  (function(t) {
    z(e, t);
    function e(r, n, i) {
      var a = t.call(this, new nA()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, a.__v_skip = !0, a._dom = r;
      var o = "canvas", s = "auto", u = !1;
      if (a[Io] = 1, process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          ee.hasGlobalWindow ? window : global
        );
        l && (o = Y(l.__ECHARTS__DEFAULT__RENDERER__, o), s = Y(l.__ECHARTS__DEFAULT__COARSE_POINTER, s), u = Y(l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, u));
      }
      i.ssr;
      var f = a._zr = sp(r, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: Y(i.useDirtyRect, u),
        useCoarsePointer: Y(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = L_(Se(f.flush, f), 17), a._updateTheme(n), a._locale = mx(i.locale || my), a._coordSysMgr = new Yh();
      var h = a._api = Hp(a);
      function c(v, d) {
        return v.__prio - d.__prio;
      }
      return Jo(Ws, c), Jo(qf, c), a._scheduler = new X_(a, h, qf, Ws), a._messageCenter = new f0(), a._initEvents(), a.resize = Se(a.resize, a), f.animation.on("frame", a._onframe, a), Vp(f, a), Fp(f, a), Yl(a), a;
    }
    return e.prototype._onframe = function() {
      if (!this._disposed) {
        var r = this._scheduler, n = this._model, i = this._api;
        if (Gp(this), this[Ie]) {
          var a = this[Ie].silent;
          this[Ee] = !0, Zn(this);
          try {
            hn(this), ur.update.call(this, null, this[Ie].updateParams);
          } catch (u) {
            throw this[Ee] = !1, this[Ie] = null, u;
          }
          this._zr.flush(), this[Ee] = !1, this[Ie] = null, Yn.call(this, a), Xn.call(this, a);
        } else if (r.unfinished) {
          var o = LA;
          do {
            r.unfinished = !1;
            var s = ut.getTime();
            r.performSeriesTasks(n), r.performDataProcessorTasks(n), Ll(this, n), r.performVisualTasks(n), No(this, this._model, i, "remain", {}), o -= ut.getTime() - s;
          } while (o > 0 && r.unfinished);
          r.unfinished || this._zr.flush();
        }
      }
    }, e.prototype.getDom = function() {
      return this._dom;
    }, e.prototype.getId = function() {
      return this.id;
    }, e.prototype.getZr = function() {
      return this._zr;
    }, e.prototype.isSSR = function() {
      return this._ssr;
    }, e.prototype.setOption = function(r, n, i) {
      if (this[Ee]) {
        process.env.NODE_ENV !== "production" && ue("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      var a, o, s;
      if (W(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Ee] = !0, Zn(this), !this._model || n) {
        var u = new MM(this._api), l = this._theme, f = this._model = new pc();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(r, {
        replaceMerge: o
      }, Kf);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (i)
        this[Ie] = {
          silent: a,
          updateParams: h
        }, this[Ee] = !1, this.getZr().wakeUp();
      else {
        try {
          hn(this), ur.update.call(this, null, h);
        } catch (c) {
          throw this[Ie] = null, this[Ee] = !1, c;
        }
        this._ssr || this._zr.flush(), this[Ie] = null, this[Ee] = !1, Yn.call(this, a), Xn.call(this, a);
      }
    }, e.prototype.setTheme = function(r, n) {
      if (this[Ee]) {
        process.env.NODE_ENV !== "production" && ue("`setTheme` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      var i = this._model;
      if (i) {
        var a = n && n.silent, o = null;
        this[Ie] && (a == null && (a = this[Ie].silent), o = this[Ie].updateParams, this[Ie] = null), this[Ee] = !0, Zn(this);
        try {
          this._updateTheme(r), i.setTheme(this._theme), hn(this), ur.update.call(this, {
            type: "setTheme"
          }, o);
        } catch (s) {
          throw this[Ee] = !1, s;
        }
        this[Ee] = !1, Yn.call(this, a), Xn.call(this, a);
      }
    }, e.prototype._updateTheme = function(r) {
      H(r) && (r = d0[r]), r && (r = ie(r), r && U_(r, !0), this._theme = r);
    }, e.prototype.getModel = function() {
      return this._model;
    }, e.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, e.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, e.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, e.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || ee.hasGlobalWindow && window.devicePixelRatio || 1;
    }, e.prototype.getRenderedCanvas = function(r) {
      return process.env.NODE_ENV !== "production" && Pe("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(r);
    }, e.prototype.renderToCanvas = function(r) {
      r = r || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return n.getRenderedCanvas({
        backgroundColor: r.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: r.pixelRatio || this.getDevicePixelRatio()
      });
    }, e.prototype.renderToSVGString = function(r) {
      r = r || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return n.renderToString({
        useViewBox: r.useViewBox
      });
    }, e.prototype.getSvgDataURL = function() {
      var r = this._zr, n = r.storage.getDisplayList();
      return x(n, function(i) {
        i.stopAnimation(null, !0);
      }), r.painter.toDataURL();
    }, e.prototype.getDataURL = function(r) {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      r = r || {};
      var n = r.excludeComponents, i = this._model, a = [], o = this;
      x(n, function(u) {
        i.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
      return x(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, e.prototype.getConnectedDataURL = function(r) {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      var n = r.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (Up[i]) {
        var u = s, l = s, f = -s, h = -s, c = [], v = r && r.pixelRatio || this.getDevicePixelRatio();
        x(ma, function(_, S) {
          if (_.group === i) {
            var b = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(ie(r)), T = _.getDom().getBoundingClientRect();
            u = a(T.left, u), l = a(T.top, l), f = o(T.right, f), h = o(T.bottom, h), c.push({
              dom: b,
              left: T.left,
              top: T.top
            });
          }
        }), u *= v, l *= v, f *= v, h *= v;
        var d = f - u, g = h - l, m = ut.createCanvas(), p = sp(m, {
          renderer: n ? "svg" : "canvas"
        });
        if (p.resize({
          width: d,
          height: g
        }), n) {
          var y = "";
          return x(c, function(_) {
            var S = _.left - u, b = _.top - l;
            y += '<g transform="translate(' + S + "," + b + ')">' + _.dom + "</g>";
          }), p.painter.getSvgRoot().innerHTML = y, r.connectedBackgroundColor && p.painter.setBackgroundColor(r.connectedBackgroundColor), p.refreshImmediately(), p.painter.toDataURL();
        } else
          return r.connectedBackgroundColor && p.add(new Le({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: g
            },
            style: {
              fill: r.connectedBackgroundColor
            }
          })), x(c, function(_) {
            var S = new zr({
              style: {
                x: _.left * v - u,
                y: _.top * v - l,
                image: _.dom
              }
            });
            p.add(S);
          }), p.refreshImmediately(), m.toDataURL("image/" + (r && r.type || "png"));
      } else
        return this.getDataURL(r);
    }, e.prototype.convertToPixel = function(r, n, i) {
      return Po(this, "convertToPixel", r, n, i);
    }, e.prototype.convertToLayout = function(r, n, i) {
      return Po(this, "convertToLayout", r, n, i);
    }, e.prototype.convertFromPixel = function(r, n, i) {
      return Po(this, "convertFromPixel", r, n, i);
    }, e.prototype.containPixel = function(r, n) {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      var i = this._model, a, o = Xu(i, r);
      return x(o, function(s, u) {
        u.indexOf("Models") >= 0 && x(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint ? a = a || h.containPoint(n, l) : process.env.NODE_ENV !== "production" && je(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && je(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, e.prototype.getVisual = function(r, n) {
      var i = this._model, a = Xu(i, r, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || je("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? oA(s, u, n) : sA(s, n);
    }, e.prototype.getViewOfComponentModel = function(r) {
      return this._componentsMap[r.__viewId];
    }, e.prototype.getViewOfSeriesModel = function(r) {
      return this._chartsMap[r.__viewId];
    }, e.prototype._initEvents = function() {
      var r = this;
      x(WA, function(i) {
        var a = function(o) {
          var s = r.getModel(), u = o.target, l, f = i === "globalout";
          if (f ? l = {} : u && ia(u, function(g) {
            var m = ve(g);
            if (m && m.dataIndex != null) {
              var p = m.dataModel || s.getSeriesByIndex(m.seriesIndex);
              return l = p && p.getDataParams(m.dataIndex, m.dataType, u) || {}, !0;
            } else if (m.eventData)
              return l = k({}, m.eventData), !0;
          }, !0), l) {
            var h = l.componentType, c = l.componentIndex;
            (h === "markLine" || h === "markPoint" || h === "markArea") && (h = "series", c = l.seriesIndex);
            var v = h && c != null && s.getComponent(h, c), d = v && r[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !f && !(v && d) && je("model or view can not be found by params"), l.event = o, l.type = i, r._$eventProcessor.eventInfo = {
              targetEl: u,
              packedEvent: l,
              model: v,
              view: d
            }, r.trigger(i, l);
          }
        };
        a.zrEventfulCallAtLast = !0, r._zr.on(i, a, r);
      });
      var n = this._messageCenter;
      x($f, function(i, a) {
        n.on(a, function(o) {
          r.trigger(a, o);
        });
      }), UE(n, this, this._api);
    }, e.prototype.isDisposed = function() {
      return this._disposed;
    }, e.prototype.clear = function() {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, e.prototype.dispose = function() {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      this._disposed = !0;
      var r = this.getDom();
      r && pm(this.getDom(), yc, "");
      var n = this, i = n._api, a = n._model;
      x(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), x(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete ma[n.id];
    }, e.prototype.resize = function(r) {
      if (this[Ee]) {
        process.env.NODE_ENV !== "production" && ue("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      this._zr.resize(r);
      var n = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!n) {
        var i = n.resetOption("media"), a = r && r.silent;
        this[Ie] && (a == null && (a = this[Ie].silent), i = !0, this[Ie] = null), this[Ee] = !0, Zn(this);
        try {
          i && hn(this), ur.update.call(this, {
            type: "resize",
            animation: k({
              // Disable animation
              duration: 0
            }, r && r.animation)
          });
        } catch (o) {
          throw this[Ee] = !1, o;
        }
        this[Ee] = !1, Yn.call(this, a), Xn.call(this, a);
      }
    }, e.prototype.showLoading = function(r, n) {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      if (W(r) && (n = r, r = ""), r = r || "default", this.hideLoading(), !Qf[r]) {
        process.env.NODE_ENV !== "production" && je("Loading effects " + r + " not exists.");
        return;
      }
      var i = Qf[r](this._api, n), a = this._zr;
      this._loadingFX = i, a.add(i);
    }, e.prototype.hideLoading = function() {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, e.prototype.makeActionFromEvent = function(r) {
      var n = k({}, r);
      return n.type = Us[r.type], n;
    }, e.prototype.dispatchAction = function(r, n) {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      if (W(n) || (n = {
        silent: !!n
      }), !!Gs[r.type] && this._model) {
        if (this[Ee]) {
          this._pendingActions.push(r);
          return;
        }
        var i = n.silent;
        Il.call(this, r, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && ee.browser.weChat && this._throttledZrFlush(), Yn.call(this, i), Xn.call(this, i);
      }
    }, e.prototype.updateLabelLayout = function() {
      pt.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, e.prototype.appendData = function(r) {
      if (this._disposed) {
        Qe(this.id);
        return;
      }
      var n = r.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      process.env.NODE_ENV !== "production" && N(r.data && a), a.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, e.internalField = (function() {
      hn = function(h) {
        XD(h._model);
        var c = h._scheduler;
        c.restorePipelines(h._zr, h._model), c.prepareStageTasks(), Al(h, !0), Al(h, !1), c.plan();
      }, Al = function(h, c) {
        for (var v = h._model, d = h._scheduler, g = c ? h._componentsViews : h._chartsViews, m = c ? h._componentsMap : h._chartsMap, p = h._zr, y = h._api, _ = 0; _ < g.length; _++)
          g[_].__alive = !1;
        c ? v.eachComponent(function(T, w) {
          T !== "series" && S(w);
        }) : v.eachSeries(S);
        function S(T) {
          var w = T.__requireNewView;
          T.__requireNewView = !1;
          var E = "_ec_" + T.id + "_" + T.type, D = !w && m[E];
          if (!D) {
            var C = Ut(T.type), M = c ? er.getClass(C.main, C.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              Kt.getClass(C.sub)
            );
            process.env.NODE_ENV !== "production" && N(M, C.sub + " does not exist."), D = new M(), D.init(v, y), m[E] = D, g.push(D), p.add(D.group);
          }
          T.__viewId = D.__id = E, D.__alive = !0, D.__model = T, D.group.__ecComponentInfo = {
            mainType: T.mainType,
            index: T.componentIndex
          }, !c && d.prepareView(D, T, v, y);
        }
        for (var _ = 0; _ < g.length; ) {
          var b = g[_];
          b.__alive ? _++ : (!c && b.renderTask.dispose(), p.remove(b.group), b.dispose(v, y), g.splice(_, 1), m[b.__id] === b && delete m[b.__id], b.__id = b.group.__ecComponentInfo = null);
        }
      }, Oo = function(h, c, v, d, g) {
        var m = h._model;
        if (m.setUpdatePayload(v), !d) {
          x([].concat(h._componentsViews).concat(h._chartsViews), S);
          return;
        }
        var p = yb(v, d, g), y = v.excludeSeriesId, _;
        y != null && (_ = K(), x($e(y), function(b) {
          var T = $t(b, null);
          T != null && _.set(T, !0);
        })), m && m.eachComponent(p, function(b) {
          var T = _ && _.get(b.id) != null;
          if (!T)
            if (kv(v))
              if (b instanceof Vr)
                v.type === wn && !v.notBlur && !b.get(["emphasis", "disabled"]) && Hb(b, v, h._api);
              else {
                var w = Eh(b.mainType, b.componentIndex, v.name, h._api), E = w.focusSelf, D = w.dispatchers;
                v.type === wn && E && !v.notBlur && mf(b.mainType, b.componentIndex, h._api), D && x(D, function(C) {
                  v.type === wn ? gs(C) : ms(C);
                });
              }
            else Sf(v) && b instanceof Vr && (Wb(b, v, h._api), Pv(b), vt(h));
        }, h), m && m.eachComponent(p, function(b) {
          var T = _ && _.get(b.id) != null;
          T || S(h[d === "series" ? "_chartsMap" : "_componentsMap"][b.__viewId]);
        }, h);
        function S(b) {
          b && b.__alive && b[c] && b[c](b.__model, m, h._api, v);
        }
      }, ur = {
        prepareAndUpdate: function(h) {
          hn(this), ur.update.call(this, h, h && {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, c) {
          var v = this._model, d = this._api, g = this._zr, m = this._coordSysMgr, p = this._scheduler;
          if (v) {
            ZD(v), v.setUpdatePayload(h), p.restoreData(v, h), p.performSeriesTasks(v), m.create(v, d), pt.trigger("coordsys:aftercreate", v, d), p.performDataProcessorTasks(v, h), Ll(this, v), m.update(v, d), n(v), p.performVisualTasks(v, h);
            var y = v.get("backgroundColor") || "transparent";
            g.setBackgroundColor(y);
            var _ = v.get("darkMode");
            _ != null && _ !== "auto" && g.setDarkMode(_), Ol(this, v, d, h, c), pt.trigger("afterupdate", v, d);
          }
        },
        /**
         * PENDING: See INCONSISTENCY_OF_BRUSH_SELECTED_EVENT_IN_UPDATE_TRANSFORM
         */
        updateTransform: function(h) {
          var c = this, v = c._model, d = c._api;
          if (v) {
            v.setUpdatePayload(h);
            var g = [];
            v.eachComponent(function(p, y) {
              if (p !== ym) {
                var _ = c.getViewOfComponentModel(y);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var S = _.updateTransform(y, v, d, h);
                    S && S.update && g.push(_);
                  } else
                    g.push(_);
              }
            });
            var m = K();
            v.eachSeries(function(p) {
              var y = c._chartsMap[p.__viewId], _ = p.pipelineContext;
              if (y.updateTransform && !_.progressiveRender) {
                var S = y.updateTransform(p, v, d, h);
                S && S.update && m.set(p.uid, 1);
              } else
                m.set(p.uid, 1);
            }), c._scheduler.performVisualTasks(v, h, {
              setDirty: !0,
              dirtyMap: m
            }), No(c, v, d, h, {}, m), pt.trigger("afterupdate", v, d);
          }
        },
        updateView: function(h) {
          var c = this._model;
          c && (c.setUpdatePayload(h), Kt.markUpdateMethod(h, "updateView"), n(c), this._scheduler.performVisualTasks(c, h, {
            setDirty: !0
          }), Ol(this, c, this._api, h, {}), pt.trigger("afterupdate", c, this._api));
        },
        updateVisual: function(h) {
          var c = this, v = this._model;
          v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), Kt.markUpdateMethod(h, "updateVisual"), n(v), this._scheduler.performVisualTasks(v, h, {
            visualType: "visual",
            setDirty: !0
          }), v.eachComponent(function(d, g) {
            if (d !== "series") {
              var m = c.getViewOfComponentModel(g);
              m && m.__alive && m.updateVisual(g, v, c._api, h);
            }
          }), v.eachSeries(function(d) {
            var g = c._chartsMap[d.__viewId];
            g.updateVisual(d, v, c._api, h);
          }), pt.trigger("afterupdate", v, this._api));
        },
        /**
         * @deprecated
         */
        updateLayout: function(h) {
          ur.update.call(this, h);
        }
      };
      function r(h, c, v, d, g) {
        if (h._disposed) {
          Qe(h.id);
          return;
        }
        for (var m = h._model, p = h._coordSysMgr.getCoordinateSystems(), y, _ = Xu(m, v), S = 0; S < p.length; S++) {
          var b = p[S];
          if (b[c] && (y = b[c](m, _, d, g)) != null)
            return y;
        }
        process.env.NODE_ENV !== "production" && je("No coordinate system that supports " + c + " found by the given finder.");
      }
      Po = r, Ll = function(h, c) {
        var v = h._chartsMap, d = h._scheduler;
        c.eachSeries(function(g) {
          d.updateStreamModes(g, v[g.__viewId]);
        });
      }, Il = function(h, c) {
        var v = this, d = this.getModel(), g = h.type, m = h.escapeConnect, p = Gs[g], y = (p.update || "update").split(":"), _ = y.pop(), S = y[0] != null && Ut(y[0]);
        this[Ee] = !0, Zn(this);
        var b = [h], T = !1;
        h.batch && (T = !0, b = q(h.batch, function(O) {
          return O = pe(k({}, O), h), O.batch = null, O;
        }));
        var w = [], E, D = [], C = p.nonRefinedEventType, M = Sf(h), L = kv(h);
        if (L && Am(this._api), x(b, function(O) {
          var B = p.action(O, d, v._api);
          if (p.refineEvent ? D.push(B) : E = B, E = E || k({}, O), E.type = C, w.push(E), L) {
            var G = Sh(h), U = G.queryOptionMap, J = G.mainTypeSpecified, $ = J ? U.keys()[0] : "series";
            Oo(v, _, O, $), vt(v);
          } else M ? (Oo(v, _, O, "series"), vt(v)) : S && Oo(v, _, O, S.main, S.sub);
        }), _ !== "none" && !L && !M && !S)
          try {
            this[Ie] ? (hn(this), ur.update.call(this, h), this[Ie] = null) : ur[_].call(this, h);
          } catch (O) {
            throw this[Ee] = !1, O;
          }
        if (T ? E = {
          type: C,
          escapeConnect: m,
          batch: w
        } : E = w[0], this[Ee] = !1, !c) {
          var A = void 0;
          if (p.refineEvent) {
            var I = p.refineEvent(D, h, d, this._api).eventContent;
            N(W(I)), A = pe({
              type: p.refinedEventType
            }, I), A.fromAction = h.type, A.fromActionPayload = h, A.escapeConnect = !0;
          }
          var P = this._messageCenter;
          P.trigger(E.type, E), A && P.trigger(A.type, A);
        }
      }, Yn = function(h) {
        for (var c = this._pendingActions; c.length; ) {
          var v = c.shift();
          Il.call(this, v, h);
        }
      }, Xn = function(h) {
        !h && this.trigger("updated");
      }, Vp = function(h, c) {
        h.on("rendered", function(v) {
          c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !c[Ie] && !c._scheduler.unfinished && !c._pendingActions.length ? c.trigger("finished") : h.refresh();
        });
      }, Fp = function(h, c) {
        h.on("mouseover", function(v) {
          var d = v.target, g = ia(d, _i);
          g && (Gb(g, v, c._api), vt(c));
        }).on("mouseout", function(v) {
          var d = v.target, g = ia(d, _i);
          g && (Ub(g, v, c._api), vt(c));
        }).on("click", function(v) {
          var d = v.target, g = ia(d, function(y) {
            return ve(y).dataIndex != null;
          }, !0);
          if (g) {
            var m = g.selected ? "unselect" : "select", p = ve(g);
            c._api.dispatchAction({
              type: m,
              dataType: p.dataType,
              dataIndexInside: p.dataIndex,
              seriesIndex: p.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function n(h) {
        h.clearColorPalette(), h.eachSeries(function(c) {
          c.clearColorPalette();
        });
      }
      function i(h) {
        var c = [], v = [], d = !1;
        if (h.eachComponent(function(y, _) {
          var S = _.get("zlevel") || 0, b = _.get("z") || 0, T = _.getZLevelKey();
          d = d || !!T, (y === "series" ? v : c).push({
            zlevel: S,
            z: b,
            idx: _.componentIndex,
            type: y,
            key: T
          });
        }), d) {
          var g = c.concat(v), m, p;
          Jo(g, function(y, _) {
            return y.zlevel === _.zlevel ? y.z - _.z : y.zlevel - _.zlevel;
          }), x(g, function(y) {
            var _ = h.getComponent(y.type, y.idx), S = y.zlevel, b = y.key;
            m != null && (S = Math.max(m, S)), b ? (S === m && b !== p && S++, p = b) : p && (S === m && S++, p = ""), m = S, _.setZLevel(S);
          });
        }
      }
      Ol = function(h, c, v, d, g) {
        i(c), zp(h, c, v, d, g), x(h._chartsViews, function(m) {
          m.__alive = !1;
        }), No(h, c, v, d, g), x(h._chartsViews, function(m) {
          m.__alive || m.remove(c, v);
        });
      }, zp = function(h, c, v, d, g, m) {
        x(m || h._componentsViews, function(p) {
          var y = p.__model;
          l(y, p), p.render(y, c, v, d), u(y, p), f(y, p);
        });
      }, No = function(h, c, v, d, g, m) {
        var p = h._scheduler;
        g = k(g || {}, {
          updatedSeries: c.getSeries()
        }), pt.trigger("series:beforeupdate", c, v, g);
        var y = !1;
        c.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          S.__alive = !0;
          var b = S.renderTask;
          p.updatePayload(b, d), l(_, S), m && m.get(_.uid) && b.dirty(), b.perform(p.getPerformArgs(b)) && (y = !0), S.group.silent = !!_.get("silent"), s(_, S), Pv(_);
        }), p.unfinished = y || p.unfinished, pt.trigger("series:layoutlabels", c, v, g), pt.trigger("series:transition", c, v, g), c.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          u(_, S), f(_, S);
        }), o(h, c), pt.trigger("series:afterupdate", c, v, g);
      }, vt = function(h) {
        h[El] = !0, h.getZr().wakeUp();
      }, Zn = function(h) {
        h[Io] = (h[Io] + 1) % 1e6;
      }, Gp = function(h) {
        h[El] && (h.getZr().storage.traverse(function(c) {
          ha(c) || a(c);
        }), h[El] = !1);
      };
      function a(h) {
        for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
          var g = v[d];
          g === "emphasis" || g === "blur" || g === "select" || c.push(g);
        }
        h.selected && h.states.select && c.push("select"), h.hoverState === nu && h.states.emphasis ? c.push("emphasis") : h.hoverState === ru && h.states.blur && c.push("blur"), h.useStates(c);
      }
      function o(h, c) {
        var v = h._zr;
        if (v.painter.type === "canvas") {
          var d = v.storage, g = 0;
          d.traverse(function(p) {
            p.isGroup || g++;
          });
          var m = g > Y(c.get("hoverLayerThreshold"), H_.hoverLayerThreshold) && !ee.node && !ee.worker;
          (h._usingTHL || m) && (c.eachSeries(function(p) {
            if (!p.preventUsingHoverLayer) {
              var y = h._chartsMap[p.__viewId];
              y.__alive && y.eachRendered(function(_) {
                var S = _.states.emphasis;
                S && S.hoverLayer !== Nh && (S.hoverLayer = m ? Hm : zm);
              });
            }
          }), h._usingTHL = m);
        }
      }
      function s(h, c) {
        var v = h.get("blendMode") || null;
        c.eachRendered(function(d) {
          d.isGroup || (d.style.blend = v);
        });
      }
      function u(h, c) {
        if (!h.preventAutoZ) {
          var v = Zm(h);
          c.eachRendered(function(d) {
            return $m(d, v.z, v.zlevel), !0;
          });
        }
      }
      function l(h, c) {
        c.eachRendered(function(v) {
          if (!ha(v)) {
            var d = v.getTextContent(), g = v.getTextGuideLine();
            v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), g && g.stateTransition && (g.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
          }
        });
      }
      function f(h, c) {
        var v = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), g = v.get("duration"), m = g > 0 ? {
          duration: g,
          delay: v.get("delay"),
          easing: v.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        c.eachRendered(function(p) {
          if (p.states && p.states.emphasis) {
            if (ha(p))
              return;
            if (p instanceof me && Kb(p), p.__dirty) {
              var y = p.prevStates;
              y && p.useStates(y);
            }
            if (d) {
              p.stateTransition = m;
              var _ = p.getTextContent(), S = p.getTextGuideLine();
              _ && (_.stateTransition = m), S && (S.stateTransition = m);
            }
            p.__dirty && a(p);
          }
        });
      }
      Hp = function(h) {
        return new /** @class */
        ((function(c) {
          z(v, c);
          function v() {
            return c !== null && c.apply(this, arguments) || this;
          }
          return v.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, v.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var g = d.__ecComponentInfo;
              if (g != null)
                return h._model.getComponent(g.mainType, g.index);
              d = d.parent;
            }
          }, v.prototype.enterEmphasis = function(d, g) {
            gs(d, g), vt(h);
          }, v.prototype.leaveEmphasis = function(d, g) {
            ms(d, g), vt(h);
          }, v.prototype.enterBlur = function(d) {
            zb(d), vt(h);
          }, v.prototype.leaveBlur = function(d) {
            Cm(d), vt(h);
          }, v.prototype.enterSelect = function(d) {
            Dm(d), vt(h);
          }, v.prototype.leaveSelect = function(d) {
            Em(d), vt(h);
          }, v.prototype.getModel = function() {
            return h.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, v.prototype.getECUpdateCycleVersion = function() {
            return h[Io];
          }, v.prototype.usingTHL = function() {
            return h._usingTHL;
          }, v;
        })(Sm))(h);
      }, c0 = function(h) {
        function c(v, d) {
          for (var g = 0; g < v.length; g++) {
            var m = v[g];
            m[Ml] = d;
          }
        }
        x(Us, function(v, d) {
          h._messageCenter.on(d, function(g) {
            if (Up[h.group] && h[Ml] !== Bp) {
              if (g && g.escapeConnect)
                return;
              var m = h.makeActionFromEvent(g), p = [];
              x(ma, function(y) {
                y !== h && y.group === h.group && p.push(y);
              }), c(p, Bp), x(p, function(y) {
                y[Ml] !== GA && y.dispatchAction(m);
              }), c(p, UA);
            }
          });
        });
      };
    })(), e;
  })(rr)
), mc = v0.prototype;
mc.on = s0("on");
mc.off = s0("off");
mc.one = function(t, e, r) {
  var n = this;
  dr("ECharts#one is deprecated.");
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    e && e.apply && e.apply(this, a), n.off(t, i);
  }
  this.on.call(this, t, i, r);
};
var WA = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function Qe(t) {
  process.env.NODE_ENV !== "production" && je("Instance " + t + " has been disposed");
}
var Gs = {}, Us = {}, $f = {}, qf = [], Kf = [], Ws = [], d0 = {}, Qf = {}, ma = {}, Up = {}, YA = +/* @__PURE__ */ new Date() - 0, yc = "_echarts_instance_";
function XA(t, e, r) {
  var n = !(r && r.ssr);
  if (n) {
    if (process.env.NODE_ENV !== "production" && !t)
      throw new Error("Initialize failed: invalid dom.");
    var i = ZA(t);
    if (i)
      return process.env.NODE_ENV !== "production" && je("There is a chart instance already initialized on the dom."), i;
    process.env.NODE_ENV !== "production" && fi(t) && t.nodeName.toUpperCase() !== "CANVAS" && (!t.clientWidth && (!r || r.width == null) || !t.clientHeight && (!r || r.height == null)) && je("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new v0(t, e, r);
  return a.id = "ec_" + YA++, ma[a.id] = a, n && pm(t, yc, a.id), c0(a), pt.trigger("afterinit", a), a;
}
function ZA(t) {
  return ma[_b(t, yc)];
}
function p0(t, e) {
  d0[t] = e;
}
function g0(t) {
  le(Kf, t) < 0 && Kf.push(t);
}
function m0(t, e) {
  Sc(qf, t, e, RA);
}
function $A(t) {
  _c("afterinit", t);
}
function qA(t) {
  _c("afterupdate", t);
}
function _c(t, e) {
  pt.on(t, e);
}
function Ii(t, e, r) {
  var n, i, a, o, s;
  Q(e) && (r = e, e = ""), W(t) ? (n = t.type, i = t.event, o = t.update, s = t.publishNonRefinedEvent, r || (r = t.action), a = t.refineEvent) : (n = t, i = e);
  function u(f) {
    return f.toLowerCase();
  }
  i = u(i || n);
  var l = a ? u(n) : i;
  Gs[n] || (N(kp.test(n) && kp.test(i)), a && N(i !== n), Gs[n] = {
    actionType: n,
    refinedEventType: i,
    nonRefinedEventType: l,
    update: o,
    action: r,
    refineEvent: a
  }, $f[i] = 1, a && s && ($f[l] = 1), process.env.NODE_ENV !== "production" && Us[l] && ue(l + ' must not be shared; use "refineEvent" if you intend to share an event name.'), Us[l] = n);
}
function KA(t, e) {
  Yh.register(t, e);
}
function QA(t, e) {
  Sc(Ws, t, e, i0, "layout", !0);
}
function In(t, e) {
  Sc(Ws, t, e, a0, "visual", !0);
}
var Wp = [];
function Sc(t, e, r, n, i, a) {
  if ((Q(e) || W(e)) && (r = e, e = n), process.env.NODE_ENV !== "production") {
    if (isNaN(e) || e == null)
      throw new Error("Illegal priority");
    x(t, function(s) {
      N(s.__raw !== r);
    });
  }
  if (!(le(Wp, r) >= 0)) {
    Wp.push(r);
    var o = X_.wrapStageHandler(r, i);
    o.__prio = e, o.__raw = r, t.push(o), process.env.NODE_ENV !== "production" && a && N(!o.dirtyOnOverallProgress, "dirtyOnOverallProgress is not allowed in " + i + " stage; otherwise progressive rendering is disabled on all series.");
  }
}
function y0(t, e) {
  Qf[t] = e;
}
function JA(t, e, r) {
  var n = lA("registerMap");
  n && n(t, e, r);
}
var jA = qx;
In(gc, WM);
In(yu, YM);
In(yu, XM);
In(gc, iA);
In(yu, aA);
In(o0, MA);
g0(U_);
m0(OA, zM);
y0("default", ZM);
Ii({
  type: wn,
  event: wn,
  update: wn
}, He);
Ii({
  type: Go,
  event: Go,
  update: Go
}, He);
Ii({
  type: ds,
  event: Ch,
  update: ds,
  action: He,
  refineEvent: bc,
  publishNonRefinedEvent: !0
});
Ii({
  type: pf,
  event: Ch,
  update: pf,
  action: He,
  refineEvent: bc,
  publishNonRefinedEvent: !0
});
Ii({
  type: ps,
  event: Ch,
  update: ps,
  action: He,
  refineEvent: bc,
  publishNonRefinedEvent: !0
});
function bc(t, e, r, n) {
  return {
    eventContent: {
      selected: Yb(r),
      isFromClick: e.isFromClick || !1
    }
  };
}
p0("default", {});
p0("dark", K_);
var Yp = [], eL = {
  registerPreprocessor: g0,
  registerProcessor: m0,
  registerPostInit: $A,
  registerPostUpdate: qA,
  registerUpdateLifecycle: _c,
  registerAction: Ii,
  registerCoordinateSystem: KA,
  registerLayout: QA,
  registerVisual: In,
  registerTransform: jA,
  registerLoading: y0,
  registerMap: JA,
  registerImpl: uA,
  PRIORITY: HA,
  ComponentModel: fe,
  ComponentView: er,
  SeriesModel: Vr,
  ChartView: Kt,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(t) {
    fe.registerClass(t);
  },
  registerComponentView: function(t) {
    er.registerClass(t);
  },
  registerSeriesModel: function(t) {
    Vr.registerClass(t);
  },
  registerChartView: function(t) {
    Kt.registerClass(t);
  },
  registerCustomSeries: function(t, e) {
  },
  registerSubTypeDefaulter: function(t, e) {
    fe.registerSubTypeDefaulter(t, e);
  },
  registerPainter: function(t, e) {
    yM(t, e);
  }
};
function Fr(t) {
  if (V(t)) {
    x(t, function(e) {
      Fr(e);
    });
    return;
  }
  le(Yp, t) >= 0 || (Yp.push(t), Q(t) && (t = {
    install: t
  }), t.install(eL));
}
var tL = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.needIncludeZero = function() {
      return !this.option.scale;
    }, t.prototype.getCoordSysModel = function() {
    }, t;
  })()
), Jf = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", wt).models[0];
    }, e.type = "cartesian2dAxis", e;
  })(fe)
);
tr(Jf, tL);
var _0 = {
  show: !0,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: !1,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {
    // textMargin: never, // The default value will be specified based on `nameLocation`.
  },
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: !1,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: !1,
  tooltip: {
    show: !1
  },
  axisPointer: {},
  axisLine: {
    show: !0,
    onZero: "auto",
    onZeroAxisIndex: null,
    lineStyle: {
      color: Z.color.axisLine,
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15],
    breakLine: !0
  },
  axisTick: {
    show: !0,
    // Whether axisTick is inside the grid or outside the grid.
    inside: !1,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: !0,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: !1,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12,
    color: Z.color.axisLabel,
    // In scenarios like axis labels, when labels text's progression direction matches the label
    // layout direction (e.g., when all letters are in a single line), extra start/end margin is
    // needed to prevent the text from appearing visually joined. In the other case, when lables
    // are stacked (e.g., having rotation or horizontal labels on yAxis), the layout needs to be
    // compact, so NO extra top/bottom margin should be applied.
    textMargin: [0, 3]
  },
  splitLine: {
    show: !0,
    showMinLine: !0,
    showMaxLine: !0,
    lineStyle: {
      color: Z.color.axisSplitLine,
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: [Z.color.backgroundTint, Z.color.backgroundTransparent]
    }
  },
  breakArea: {
    show: !0,
    itemStyle: {
      color: Z.color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: Z.color.border,
      borderWidth: 1,
      borderType: [3, 3],
      opacity: 0.6
    },
    zigzagAmplitude: 4,
    zigzagMinSpan: 4,
    zigzagMaxSpan: 20,
    zigzagZ: 100,
    expandOnClick: !0
  },
  breakLabelLayout: {
    moveOverlap: "auto"
  }
}, rL = ce({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: !0,
  // Set false to faster category collection.
  deduplication: null,
  jitter: 0,
  jitterOverlap: !0,
  jitterMargin: 2,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: !1
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: !1,
    interval: "auto",
    show: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, _0), Tc = ce({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: !1,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: !1,
    lineStyle: {
      color: Z.color.axisMinorSplitLine,
      width: 1
    }
  }
}, _0), nL = ce({
  splitNumber: 6,
  axisLabel: {
    // The default value of TimeScale is determined in `AxisBuilder`
    // showMinLabel: false,
    // showMaxLabel: false,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: !1
  }
}, Tc), iL = pe({
  logBase: 10
}, Tc);
const aL = {
  category: rL,
  value: Tc,
  time: nL,
  log: iL
};
function Xp(t, e, r, n) {
  x(t_, function(i, a) {
    var o = ce(ce({}, aL[a], !0), n, !0), s = (
      /** @class */
      (function(u) {
        z(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = e + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, h) {
          var c = Da(this), v = c ? Wa(f) : {}, d = h.getTheme();
          ce(f, d.get(a + "Axis")), ce(f, this.getDefaultOption()), f.type = Zp(f), c && Br(f, v, c);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = Rf.createByAxisModel(this));
        }, l.prototype.getCategories = function(f) {
          var h = this.option;
          if (h.type === "category")
            return f ? h.data : this.__ordinalMeta.categories;
        }, l.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, l.prototype.updateAxisBreaks = function(f) {
          var h = mu();
          return h ? h.updateModelAxisBreak(this, f) : {
            breaks: []
          };
        }, l.type = e + "Axis." + a, l.defaultOption = o, l;
      })(r)
    );
    t.registerComponentModel(s);
  }), t.registerSubTypeDefaulter(e + "Axis", Zp);
}
function Zp(t) {
  return t.type || (t.data ? "category" : "value");
}
var oL = (
  /** @class */
  (function() {
    function t(e) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = e || "";
    }
    return t.prototype.getAxis = function(e) {
      return this._axes[e];
    }, t.prototype.getAxes = function() {
      return q(this._dimList, function(e) {
        return this._axes[e];
      }, this);
    }, t.prototype.getAxesByScale = function(e) {
      return e = e.toLowerCase(), ze(this.getAxes(), function(r) {
        return r.scale.type === e;
      });
    }, t.prototype.addAxis = function(e) {
      var r = e.dim;
      this._axes[r] = e, this._dimList.push(r);
    }, t;
  })()
), es = ["x", "y"];
function $p(t) {
  return (t.type === "interval" || t.type === "time") && !Dn(t);
}
var sL = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Qo, r.dimensions = es, r;
    }
    return e.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var r = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!$p(r) || !$p(n))) {
        var i = Cs(r, null), a = Cs(n, null), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), u = i[1] - i[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, h = (s[1] - o[1]) / l, c = o[0] - i[0] * f, v = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, c, v];
          this._invTransform = Ra([], d);
        }
      }
    }, e.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, e.prototype.containPoint = function(r) {
      var n = this.getAxis("x"), i = this.getAxis("y");
      return n.contain(n.toLocalCoord(r[0])) && i.contain(i.toLocalCoord(r[1]));
    }, e.prototype.containData = function(r) {
      return this.getAxis("x").containData(r[0]) && this.getAxis("y").containData(r[1]);
    }, e.prototype.containZone = function(r, n) {
      var i = this.dataToPoint(r), a = this.dataToPoint(n), o = this.getArea(), s = new j(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, e.prototype.dataToPoint = function(r, n, i) {
      i = i || [];
      var a = r[0], o = r[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return Dt(i, r, this._transform);
      var s = this.getAxis("x"), u = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = u.toGlobalCoord(u.dataToCoord(o, n)), i;
    }, e.prototype.clampData = function(r, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), u = i.parse(r[0]), l = a.parse(r[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), u), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), l), Math.max(s[0], s[1])), n;
    }, e.prototype.pointToData = function(r, n, i) {
      if (i = i || [], this._invTransform)
        return Dt(i, r, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(r[0]), n), i[1] = o.coordToData(o.toLocalCoord(r[1]), n), i;
    }, e.prototype.getOtherAxis = function(r) {
      return this.getAxis(r.dim === "x" ? "y" : "x");
    }, e.prototype.getArea = function(r) {
      r = r || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - r, o = Math.min(i[0], i[1]) - r, s = Math.max(n[0], n[1]) - a + r, u = Math.max(i[0], i[1]) - o + r;
      return new j(a, o, s, u);
    }, e;
  })(oL)
);
function uL(t, e) {
  var r = t.scale, n = t.model;
  process.env.NODE_ENV !== "production" && N(r && n && (r instanceof Or || r instanceof Es) && (e instanceof Or || e instanceof Es));
  var i = M_(r, n, n.ecModel, t), a = wi(r), o = wi(e) ? e.intervalStub : e, s = a ? r.intervalStub : r, u = r.base, l = o.getTicks(), f = o.getTicks({
    expandToNicedExtent: !0
  }), h = l.length - 1;
  process.env.NODE_ENV !== "production" && (N(!Dn(e) && !Dn(r)), N(h > 0), N(f.length === l.length), N(l[0].value <= l[h].value), N(f[0].value <= l[0].value && l[h].value <= f[h].value), h >= 2 && (N(f[1].value === l[1].value), N(f[h - 1].value === l[h - 1].value)));
  var c, v, d;
  if (h === 1)
    c = v = 0, d = 1;
  else if (h === 2) {
    var g = Ne(l[0].value - l[1].value), m = Ne(l[1].value - l[2].value);
    c = v = 0, g === m ? d = 2 : (d = 1, g < m ? c = g / m : v = m / g);
  } else {
    var p = o.getConfig().interval;
    c = (1 - (l[0].value - f[0].value) / p) % 1, v = (1 - (f[h].value - l[h].value) / p) % 1, d = h - (c ? 1 : 0) - (v ? 1 : 0);
  }
  process.env.NODE_ENV !== "production" && N(d >= 1);
  var y = i.zoomFixMM, _ = y[0] || y[1], S = [i.fixMM[0] || _, i.fixMM[1] || _], b = r.getExtent(), T = s.getExtent(), w = Ky(T, S), E, D, C, M, L, A;
  function I(te) {
    for (var X = 50, F = 0; F < X && !te(); F++)
      C = a ? C * de(u, 2) : JC(C), M = Mn(C);
    process.env.NODE_ENV !== "production" && F >= X && je("incorrect impl in `scaleCalcAlign`.");
  }
  function P() {
    E = se(A - C * c, M);
  }
  function O() {
    D = se(L + C * v, M);
  }
  function B() {
    A = c ? se(E + C * c, M) : E;
  }
  function G() {
    L = v ? se(D - C * v, M) : D;
  }
  if (S[0] && S[1]) {
    E = w[0], D = w[1], C = (D - E) / (d + c + v);
    var U = t.getExtent(), J = Ne(U[1] - U[0]);
    M = tb([D, E], J, 0.5 / d), B(), G(), Qt(M) && (C = se(C, M));
  } else {
    var $ = w[1] - w[0];
    C = a ? de(sm($), 1) : yh($ / d, um), M = Mn(C), S[0] ? (E = w[0], I(function() {
      if (B(), L = se(A + C * d, M), O(), D >= w[1])
        return !0;
    })) : S[1] ? (D = w[1], I(function() {
      if (G(), A = se(L - C * d, M), P(), E <= w[0])
        return !0;
    })) : I(function() {
      A = se(Fa(w[0] / C) * C, M), L = se(gi(w[1] / C) * C, M);
      var te = vr((L - A) / C);
      if (te <= d) {
        var X = d - te, F = void 0, ne = i.incl0 || a;
        if (ne && w[0] === 0)
          F = [0, X];
        else if (ne && w[1] === 0)
          F = [X, 0];
        else {
          var ae = gi(X / 2);
          F = X % 2 === 0 ? [ae, ae] : E + D < w[0] + w[1] ? [ae, ae + 1] : [ae + 1, ae];
        }
        if (A = se(A - C * F[0], M), L = se(L + C * F[1], M), P(), O(), E <= w[0] && D >= w[1])
          return !0;
      }
    });
  }
  i_(r, S, T, [E, D], b, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: C,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: d,
    intervalPrecision: M,
    niceExtent: [A, L]
  }), process.env.NODE_ENV !== "production" && r.freeze();
}
function qp(t, e) {
  var r = wi(t), n = r ? t.intervalStub : t, i = e.fixMinMax || [], a = r ? t.getExtent() : null, o = n.getExtent(), s = Ky(o, i, e.rawExtentResult);
  n.setExtent(s[0], s[1]), s = n.getExtent();
  var u = r ? fL(n, e) : lL(n, e), l = u.intervalPrecision, f = u.interval, h = e.userInterval;
  h != null && (u.interval = h, u.intervalPrecision = Mn(h)), i[0] || (s[0] = se(gi(s[0] / f) * f, l)), i[1] || (s[1] = se(Fa(s[1] / f) * f, l)), h != null && (u.niceExtent = s.slice()), i_(t, i, o, s, a, u);
}
function lL(t, e) {
  var r = uc(e.splitNumber, 5), n = du(t);
  process.env.NODE_ENV !== "production" && N(isFinite(n) && n > 0);
  var i = e.minInterval, a = e.maxInterval, o = yh(n / r, !0);
  i != null && o < i && (o = i), a != null && o > a && (o = a);
  var s = Mn(o), u = t.getExtent(), l = [se(Fa(u[0] / o) * o, s), se(gi(u[1] / o) * o, s)];
  return {
    interval: o,
    intervalPrecision: s,
    niceExtent: l
  };
}
function fL(t, e) {
  var r = uc(e.splitNumber, 10), n = t.getExtent(), i = du(t);
  process.env.NODE_ENV !== "production" && N(isFinite(i) && i > 0);
  var a = de(sm(i), 1), o = r / i * a;
  o <= 0.5 && (a *= 10);
  var s = Mn(a), u = [se(Fa(n[0] / a) * a, s), se(gi(n[1] / a) * a, s)];
  return {
    intervalPrecision: s,
    interval: a,
    niceExtent: u
  };
}
function Kp(t) {
  var e = t.scale, r = t.model, n = r.axis, i = r.ecModel;
  process.env.NODE_ENV !== "production" && N(n && i), hL(e, r, n, i);
}
function hL(t, e, r, n, i) {
  var a = M_(t, e, n, r), o = Ds(t) || sc(t);
  cL(t, {
    splitNumber: e.get("splitNumber"),
    fixMinMax: a.fixMM,
    userInterval: e.get("interval"),
    minInterval: o ? e.get("minInterval") : null,
    maxInterval: o ? e.get("maxInterval") : null,
    rawExtentResult: a
  }), r && n && HE(r, t, a, n), process.env.NODE_ENV !== "production" && t.freeze();
}
function cL(t, e) {
  vL[t.type](t, e);
}
var vL = {
  interval: qp,
  log: qp,
  time: uD,
  ordinal: He
}, Qp = [
  [3, 1],
  [0, 2]
  // xyIdx 1 => 'y'
], dL = (
  /** @class */
  (function() {
    function t(e, r, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = es, this._initCartesian(e, r, n), this.model = e;
    }
    return t.prototype.getRect = function() {
      return this._rect;
    }, t.prototype.update = function(e, r) {
      var n = this._axesMap;
      x(this._axesList, function(o) {
        BE(o, OE);
        var s = o.scale;
        ir(s) && s.setSortInfo(o.model.get("categorySortInfo"));
      });
      function i(o) {
        for (var s = be(o), u = [], l = s.length - 1; l >= 0; l--) {
          var f = o[+s[l]];
          f.__alignTo ? u.push(f) : Kp(f);
        }
        x(u, function(h) {
          gL(h, h.__alignTo) ? Kp(h) : uL(h, h.__alignTo.scale);
        });
      }
      i(n.x), i(n.y);
      var a = {};
      x(n.x, function(o) {
        Jp(n, "y", o, a);
      }), x(n.y, function(o) {
        Jp(n, "x", o, a);
      }), this.resize(this.model, r);
    }, t.prototype.resize = function(e, r, n) {
      var i = Ly(e, r), a = this._rect = Ca(e.getBoxLayoutParams(), i.refContainer), o = this._axesMap, s = this._coordsList, u = e.get("containLabel");
      if (S0(o, a), !n) {
        var l = yL(a, s, o, u, r), f = void 0;
        if (u)
          process.env.NODE_ENV !== "production" && cm("Specified `grid.containLabel` but no `use(LegacyGridContainLabel)`;use `grid.outerBounds` instead.", !0), f = rg(a.clone(), "axisLabel", null, a, o, l, i);
        else {
          var h = _L(e, a, i), c = h.outerBoundsRect, v = h.parsedOuterBoundsContain, d = h.outerBoundsClamp;
          c && (f = rg(c, v, d, a, o, l, i));
        }
        b0(a, o, It.determine, null, f, i), x(this._coordsList, function(g) {
          g.calcAffineTransform();
        });
      }
    }, t.prototype.getAxis = function(e, r) {
      var n = this._axesMap[e];
      if (n != null)
        return n[r || 0];
    }, t.prototype.getAxes = function() {
      return this._axesList.slice();
    }, t.prototype.getCartesian = function(e, r) {
      if (e != null && r != null) {
        var n = "x" + e + "y" + r;
        return this._coordsMap[n];
      }
      W(e) && (r = e.yAxisIndex, e = e.xAxisIndex);
      for (var i = 0, a = this._coordsList; i < a.length; i++)
        if (a[i].getAxis("x").index === e || a[i].getAxis("y").index === r)
          return a[i];
    }, t.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, t.prototype.convertToPixel = function(e, r, n) {
      var i = this._findConvertTarget(r);
      return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
    }, t.prototype.convertFromPixel = function(e, r, n) {
      var i = this._findConvertTarget(r);
      return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
    }, t.prototype._findConvertTarget = function(e) {
      var r = e.seriesModel, n = e.xAxisModel || r && r.getReferringComponents("xAxis", wt).models[0], i = e.yAxisModel || r && r.getReferringComponents("yAxis", wt).models[0], a = e.gridModel, o = this._coordsList, s, u;
      if (r)
        s = r.coordinateSystem, le(o, s) < 0 && (s = null);
      else if (n && i)
        s = this.getCartesian(n.componentIndex, i.componentIndex);
      else if (n)
        u = this.getAxis("x", n.componentIndex);
      else if (i)
        u = this.getAxis("y", i.componentIndex);
      else if (a) {
        var l = a.coordinateSystem;
        l === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: u
      };
    }, t.prototype.containPoint = function(e) {
      var r = this._coordsList[0];
      if (r)
        return r.containPoint(e);
    }, t.prototype._initCartesian = function(e, r, n) {
      var i = this, a = this, o = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      }, s = {
        x: {},
        y: {}
      }, u = {
        x: 0,
        y: 0
      };
      if (r.eachComponent("xAxis", l("x"), this), r.eachComponent("yAxis", l("y"), this), !u.x || !u.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, x(s.x, function(f, h) {
        x(s.y, function(c, v) {
          var d = "x" + h + "y" + v, g = new sL(d);
          g.master = i, g.model = e, i._coordsMap[d] = g, i._coordsList.push(g), g.addAxis(f), g.addAxis(c);
        });
      }), eg(s.x), eg(s.y);
      function l(f) {
        return function(h, c) {
          if (pL(h, e)) {
            var v = h.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = fD(h), g = new aE(f, hD(h, d), [0, 0], d, v);
            g.onBand = a_(g.scale, h), g.inverse = h.get("inverse"), h.axis = g, g.model = h, g.grid = a, g.index = c, a._axesList.push(g), s[f][c] = g, u[f]++;
          }
        };
      }
    }, t.prototype.getTooltipAxes = function(e) {
      var r = [], n = [];
      return x(this.getCartesians(), function(i) {
        var a = e != null && e !== "auto" ? i.getAxis(e) : i.getBaseAxis(), o = i.getOtherAxis(a);
        le(r, a) < 0 && r.push(a), le(n, o) < 0 && n.push(o);
      }), {
        baseAxes: r,
        otherAxes: n
      };
    }, t.create = function(e, r) {
      var n = [];
      return e.eachComponent("grid", function(i, a) {
        var o = new t(i, e, r);
        o.name = "grid_" + a, o.resize(i, r, !0), i.coordinateSystem = o, n.push(o), x(o._axesList, function(s) {
          kE(s, t.dimIdxMap);
        });
      }), e.eachSeries(function(i) {
        var a, o;
        Xw({
          targetModel: i,
          coordSysType: Qo,
          coordSysProvider: s
        });
        function s() {
          var u = ME(i), l = u.xAxisModel, f = u.yAxisModel;
          a = l.axis, o = f.axis;
          var h = l.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!h)
              throw new Error('Grid "' + Ar(l.get("gridIndex"), l.get("gridId"), 0) + '" not found');
            if (l.getCoordSysModel() !== f.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var c = h.coordinateSystem;
          return c.getCartesian(l.componentIndex, f.componentIndex);
        }
        a && o && (Bd(a, i, Qo), Bd(o, i, Qo));
      }, this), n;
    }, t.dimensions = es, t.dimIdxMap = Wh(es), t;
  })()
);
function pL(t, e) {
  return t.getCoordSysModel() === e;
}
function Jp(t, e, r, n) {
  r.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = t[e], a, o = r.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    jp(s, i[u]) && (a = i[u]);
  else
    for (var l in i)
      if (lt(i, l) && jp(s, i[l]) && !n[f(i[l])]) {
        a = i[l];
        break;
      }
  a && (n[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function jp(t, e) {
  if (!e)
    return !1;
  var r = e.scale, n = cD(r, 0), i = e && e.type !== "category" && e.type !== "time" && n !== kf;
  return i && t === "auto" && gD(e) && (i = !1), i;
}
function eg(t) {
  for (var e = be(t), r, n = [], i = e.length - 1; i >= 0; i--) {
    var a = t[+e[i]];
    qy(a.scale) && n_(a.model, a.type) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? n.push(a) : r = a);
  }
  r || (r = n.pop()), r && x(n, function(o) {
    o.__alignTo = r;
  });
}
function gL(t, e) {
  return Dn(t.scale) || Dn(e.scale) || e.scale.getTicks().length < 2;
}
function mL(t, e) {
  var r = t.getExtent(), n = r[0] + r[1];
  t.toGlobalCoord = t.dim === "x" ? function(i) {
    return i + e;
  } : function(i) {
    return n - i + e;
  }, t.toLocalCoord = t.dim === "x" ? function(i) {
    return i - e;
  } : function(i) {
    return n - i + e;
  };
}
function S0(t, e) {
  x(t.x, function(r) {
    return tg(r, e.x, e.width);
  }), x(t.y, function(r) {
    return tg(r, e.y, e.height);
  });
}
function tg(t, e, r) {
  var n = [0, r], i = t.inverse ? 1 : 0;
  t.setExtent(n[i], n[1 - i]), mL(t, e);
}
function rg(t, e, r, n, i, a, o) {
  process.env.NODE_ENV !== "production" && N(e === "all" || e === "axisLabel"), b0(n, i, It.estimate, e, !1, o);
  var s = [0, 0, 0, 0];
  l(0), l(1), f(n, 0, NaN), f(n, 1, NaN);
  var u = e1(s, function(c) {
    return c > 0;
  }) == null;
  return _s(n, s, !0, !0, r), S0(i, n), u;
  function l(c) {
    x(i[vn[c]], function(v) {
      if (La(v.model)) {
        var d = a.ensureRecord(v.model), g = d.labelInfoList;
        if (g)
          for (var m = 0; m < g.length; m++) {
            var p = g[m], y = v.scale.normalize(Ya(v.scale, An(p.label).labelInfo.tick));
            y = c === 1 ? 1 - y : y, f(p.rect, c, y), f(p.rect, 1 - c, NaN);
          }
        var _ = d.nameLayout;
        if (_) {
          var y = xi(d.nameLocation) ? 0.5 : NaN;
          f(_.rect, c, y), f(_.rect, 1 - c, NaN);
        }
      }
    });
  }
  function f(c, v, d) {
    var g = t[vn[v]] - c[vn[v]], m = c[ba[v]] + c[vn[v]] - (t[ba[v]] + t[vn[v]]);
    g = h(g, 1 - d), m = h(m, d);
    var p = Qp[v][0], y = Qp[v][1];
    s[p] = de(s[p], g), s[y] = de(s[y], m);
  }
  function h(c, v) {
    return c > 0 && !hi(v) && v > 1e-4 && (c /= v), c;
  }
}
function yL(t, e, r, n, i) {
  var a = new y_(SL);
  return x(r, function(o) {
    return x(o, function(s) {
      if (La(s.model)) {
        var u = !n;
        s.axisBuilder = AE(t, e, s.model, i, a, u);
      }
    });
  }), a;
}
function b0(t, e, r, n, i, a) {
  var o = r === It.determine;
  x(e, function(l) {
    return x(l, function(f) {
      La(f.model) && (LE(f.axisBuilder, t, f.model), f.axisBuilder.build(o ? {
        axisTickLabelDetermine: !0
      } : {
        axisTickLabelEstimate: !0
      }, {
        noPxChange: i
      }));
    });
  });
  var s = {
    x: 0,
    y: 0
  };
  u(0), u(1);
  function u(l) {
    s[vn[1 - l]] = t[ba[l]] <= a.refContainer[ba[l]] * 0.5 ? 0 : 1 - l === 1 ? 2 : 1;
  }
  x(e, function(l, f) {
    return x(l, function(h) {
      La(h.model) && ((n === "all" || o) && h.axisBuilder.build({
        axisName: !0
      }, {
        nameMarginLevel: s[f]
      }), o && h.axisBuilder.build({
        axisLine: !0
      }));
    });
  });
}
function _L(t, e, r) {
  var n, i = t.get("outerBoundsMode", !0);
  i === "same" ? n = e.clone() : i == null || i === "auto" ? n = Ca(t.get("outerBounds", !0) || A_, r.refContainer) : i !== "none" && process.env.NODE_ENV !== "production" && ue("Invalid grid[" + t.componentIndex + "].outerBoundsMode.");
  var a = t.get("outerBoundsContain", !0), o;
  a == null || a === "auto" ? o = "all" : le(["all", "axisLabel"], a) < 0 ? (process.env.NODE_ENV !== "production" && ue("Invalid grid[" + t.componentIndex + "].outerBoundsContain."), o = "all") : o = a;
  var s = [cf(Y(t.get("outerBoundsClampWidth", !0), Ns[0]), e.width), cf(Y(t.get("outerBoundsClampHeight", !0), Ns[1]), e.height)];
  return {
    outerBoundsRect: n,
    parsedOuterBoundsContain: o,
    outerBoundsClamp: s
  };
}
var SL = function(t, e, r, n, i, a) {
  var o = r.axis.dim === "x" ? "y" : "x";
  __(t, e, r, n, i, a), xi(t.nameLocation) || x(e.recordMap[o], function(s) {
    s && s.labelInfoList && s.dirVec && b_(s.labelInfoList, s.dirVec, n, i);
  });
};
function bL(t, e) {
  var r = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return TL(r, t, e), r.seriesInvolved && xL(r, t), r;
}
function TL(t, e, r) {
  var n = e.getComponent("tooltip"), i = e.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  x(r.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = Pa(s.model), l = t.coordSysAxesInfo[u] = {};
    t.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", n);
    if (x(s.getAxes(), Ae(g, !1, null)), s.getTooltipAxes && n && h.get("show")) {
      var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && x(d.baseAxes, Ae(g, v ? "cross" : !0, c)), v && x(d.otherAxes, Ae(g, "cross", !1));
    }
    function g(m, p, y) {
      var _ = y.model.getModel("axisPointer", i), S = _.get("show");
      if (!(!S || S === "auto" && !m && !jf(_))) {
        p == null && (p = _.get("triggerTooltip")), _ = m ? wL(y, h, i, e, m, p) : _;
        var b = _.get("snap"), T = _.get("triggerEmphasis"), w = Pa(y.model), E = p || b || y.type === "category", D = t.axesInfo[w] = {
          key: w,
          axis: y,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: p,
          triggerEmphasis: T,
          involveSeries: E,
          snap: b,
          useHandle: jf(_),
          seriesModels: [],
          linkGroup: null
        };
        l[w] = D, t.seriesInvolved = t.seriesInvolved || E;
        var C = CL(a, y);
        if (C != null) {
          var M = o[C] || (o[C] = {
            axesInfo: {}
          });
          M.axesInfo[w] = D, M.mapper = a[C].mapper, D.linkGroup = M;
        }
      }
    }
  });
}
function wL(t, e, r, n, i, a) {
  var o = e.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  x(s, function(c) {
    u[c] = ie(o.get(c));
  }), u.snap = t.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f ?? !0, !a) {
      var h = u.lineStyle = o.get("crossStyle");
      h && pe(l, h.textStyle);
    }
  }
  return t.model.getModel("axisPointer", new xe(u, r, n));
}
function xL(t, e) {
  e.eachSeries(function(r) {
    var n = r.coordinateSystem, i = r.get(["tooltip", "trigger"], !0), a = r.get(["tooltip", "show"], !0);
    !n || !n.model || i === "none" || i === !1 || i === "item" || a === !1 || r.get(["axisPointer", "show"], !0) === !1 || x(t.coordSysAxesInfo[Pa(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(r), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += r.getData().count());
    });
  });
}
function CL(t, e) {
  for (var r = e.model, n = e.dim, i = 0; i < t.length; i++) {
    var a = t[i] || {};
    if (Pl(a[n + "AxisId"], r.id) || Pl(a[n + "AxisIndex"], r.componentIndex) || Pl(a[n + "AxisName"], r.name))
      return i;
  }
}
function Pl(t, e) {
  return t === "all" || V(t) && le(t, e) >= 0 || t === e;
}
function DL(t) {
  var e = wc(t);
  if (e) {
    var r = e.axisPointerModel, n = e.axis.scale, i = r.option, a = r.get("status"), o = r.get("value");
    o != null && (o = n.parse(o));
    var s = jf(r);
    a == null && (i.status = s ? "show" : "hide");
    var u = n.getExtent();
    // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), i.value = o, s && (i.status = e.axis.scale.isBlank() ? "hide" : "show");
  }
}
function wc(t) {
  var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return e && e.axesInfo[Pa(t)];
}
function EL(t) {
  var e = wc(t);
  return e && e.axisPointerModel;
}
function jf(t) {
  return !!t.get(["handle", "show"]);
}
function Pa(t) {
  return t.type + "||" + t.id;
}
var Nl = {}, T0 = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.render = function(r, n, i, a) {
      this.axisPointerClass && DL(r), t.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(r, i, !0);
    }, e.prototype.updateAxisPointer = function(r, n, i, a) {
      this._doUpdateAxisPointerClass(r, i, !1);
    }, e.prototype.remove = function(r, n) {
      var i = this._axisPointer;
      i && i.remove(n);
    }, e.prototype.dispose = function(r, n) {
      this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments);
    }, e.prototype._doUpdateAxisPointerClass = function(r, n, i) {
      var a = e.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = EL(r);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(r, o, n, i) : this._disposeAxisPointer(n);
      }
    }, e.prototype._disposeAxisPointer = function(r) {
      this._axisPointer && this._axisPointer.dispose(r), this._axisPointer = null;
    }, e.registerAxisPointerClass = function(r, n) {
      if (process.env.NODE_ENV !== "production" && Nl[r])
        throw new Error("axisPointer " + r + " exists");
      Nl[r] = n;
    }, e.getAxisPointerClass = function(r) {
      return r && Nl[r];
    }, e.type = "axis", e;
  })(er)
), eh = ye();
function ML(t, e, r, n) {
  var i = r.axis;
  if (!i.scale.isBlank()) {
    var a = r.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = n.coordinateSystem.getRect(), l = i.getTicksCoords({
      tickModel: a,
      breakTicks: "none",
      pruneByBreak: "preserve_extent_bound"
    });
    if (l.length) {
      var f = s.length, h = eh(t).splitAreaColors, c = K(), v = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var g = h.get(l[d].tickValue);
          if (g != null) {
            v = (g + (f - 1) * d) % f;
            break;
          }
        }
      var m = i.toGlobalCoord(l[0].coord), p = o.getAreaStyle();
      s = V(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var y = i.toGlobalCoord(l[d].coord), _ = void 0, S = void 0, b = void 0, T = void 0;
        i.isHorizontal() ? (_ = m, S = u.y, b = y - _, T = u.height, m = _ + b) : (_ = u.x, S = m, b = u.width, T = y - S, m = S + T);
        var w = l[d - 1].tickValue;
        w != null && c.set(w, v), e.add(new Le({
          anid: w != null ? "area_" + w : null,
          shape: {
            x: _,
            y: S,
            width: b,
            height: T
          },
          style: pe({
            fill: s[v]
          }, p),
          autoBatch: !0,
          silent: !0
        })), v = (v + 1) % f;
      }
      eh(t).splitAreaColors = c;
    }
  }
}
function AL(t) {
  eh(t).splitAreaColors = null;
}
var LL = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], w0 = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.axisPointerClass = "CartesianAxisPointer", r;
    }
    return e.prototype.render = function(r, n, i, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new ke(), this.group.add(this._axisGroup), !!La(r)) {
        this._axisGroup.add(r.axis.axisBuilder.group), x(LL, function(u) {
          r.get([u, "show"]) && IL[u](this, this._axisGroup, r, r.getCoordSysModel(), i);
        }, this);
        var s = a && a.type === "changeAxisOrder" && a.isInitSort;
        s || Ym(o, this._axisGroup, r), t.prototype.render.call(this, r, n, i, a);
      }
    }, e.prototype.remove = function() {
      AL(this);
    }, e.type = "cartesianAxis", e;
  })(T0)
), IL = {
  splitLine: function(t, e, r, n, i) {
    var a = r.axis;
    if (!a.scale.isBlank()) {
      var o = r.getModel("splitLine"), s = o.getModel("lineStyle"), u = s.get("color"), l = o.get("showMinLine") !== !1, f = o.get("showMaxLine") !== !1;
      u = V(u) ? u : [u];
      for (var h = n.coordinateSystem.getRect(), c = a.isHorizontal(), v = 0, d = a.getTicksCoords({
        tickModel: o,
        breakTicks: "none",
        pruneByBreak: "preserve_extent_bound"
      }), g = [], m = [], p = s.getLineStyle(), y = 0; y < d.length; y++) {
        var _ = a.toGlobalCoord(d[y].coord);
        if (!(y === 0 && !l || y === d.length - 1 && !f)) {
          var S = d[y].tickValue;
          c ? (g[0] = _, g[1] = h.y, m[0] = _, m[1] = h.y + h.height) : (g[0] = h.x, g[1] = _, m[0] = h.x + h.width, m[1] = _);
          var b = v++ % u.length, T = new Rr({
            anid: S != null ? "line_" + S : null,
            autoBatch: !0,
            shape: {
              x1: g[0],
              y1: g[1],
              x2: m[0],
              y2: m[1]
            },
            style: pe({
              stroke: u[b]
            }, p),
            silent: !0
          });
          Ta(T.shape, p.lineWidth), e.add(T);
        }
      }
    }
  },
  minorSplitLine: function(t, e, r, n, i) {
    var a = r.axis, o = r.getModel("minorSplitLine"), s = o.getModel("lineStyle"), u = n.coordinateSystem.getRect(), l = a.isHorizontal(), f = a.getMinorTicksCoords();
    if (f.length)
      for (var h = [], c = [], v = s.getLineStyle(), d = 0; d < f.length; d++)
        for (var g = 0; g < f[d].length; g++) {
          var m = a.toGlobalCoord(f[d][g].coord);
          l ? (h[0] = m, h[1] = u.y, c[0] = m, c[1] = u.y + u.height) : (h[0] = u.x, h[1] = m, c[0] = u.x + u.width, c[1] = m);
          var p = new Rr({
            anid: "minor_line_" + f[d][g].tickValue,
            autoBatch: !0,
            shape: {
              x1: h[0],
              y1: h[1],
              x2: c[0],
              y2: c[1]
            },
            style: v,
            silent: !0
          });
          Ta(p.shape, v.lineWidth), e.add(p);
        }
  },
  splitArea: function(t, e, r, n, i) {
    ML(t, e, r, n);
  },
  breakArea: function(t, e, r, n, i) {
    var a = mu(), o = r.axis.scale;
    a && o.type !== "ordinal" && a.rectCoordBuildBreakAxis(e, t, r, n.coordinateSystem.getRect(), i);
  }
}, x0 = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.type = "xAxis", e;
  })(w0)
), OL = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = x0.type, r;
    }
    return e.type = "yAxis", e;
  })(w0)
), PL = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = "grid", r;
    }
    return e.prototype.render = function(r, n) {
      this.group.removeAll(), r.get("show") && this.group.add(new Le({
        shape: r.coordinateSystem.getRect(),
        style: pe({
          fill: r.get("backgroundColor")
        }, r.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, e.type = "grid", e;
  })(er)
), ng = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function NL(t) {
  t.registerComponentView(PL), t.registerComponentModel(GE), t.registerCoordinateSystem("cartesian2d", dL), Xp(t, "x", Jf, ng), Xp(t, "y", Jf, ng), t.registerComponentView(x0), t.registerComponentView(OL), t.registerPreprocessor(function(e) {
    e.xAxis && e.yAxis && !e.grid && (e.grid = {});
  });
}
var dn = ye(), ig = ie, Rl = Se, RL = (
  /** @class */
  (function() {
    function t() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return t.prototype.render = function(e, r, n, i) {
      var a = r.get("value"), o = r.get("status");
      if (this._axisModel = e, this._axisPointerModel = r, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, u = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), u && u.hide();
          return;
        }
        s && s.show(), u && u.show();
        var l = {};
        this.makeElOption(l, a, e, r, n);
        var f = l.graphicKey;
        f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
        var h = this._moveAnimation = this.determineAnimation(e, r);
        if (!s)
          s = this._group = new ke(), this.createPointerEl(s, l, e, r), this.createLabelEl(s, l, e, r), n.getZr().add(s);
        else {
          var c = Ae(ag, r, h);
          this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, r);
        }
        sg(s, r, !0), this._renderHandle(a);
      }
    }, t.prototype.remove = function(e) {
      this.clear(e);
    }, t.prototype.dispose = function(e) {
      this.clear(e);
    }, t.prototype.determineAnimation = function(e, r) {
      var n = r.get("animation"), i = e.axis, a = i.type === "category", o = r.get("snap");
      if (!o && !a)
        return !1;
      if (n === "auto" || n == null) {
        var s = this.animationThreshold;
        if (a && gu(i).w > s)
          return !0;
        if (o) {
          var u = wc(e).seriesDataCount, l = i.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return n === !0;
    }, t.prototype.makeElOption = function(e, r, n, i, a) {
    }, t.prototype.createPointerEl = function(e, r, n, i) {
      var a = r.pointer;
      if (a) {
        var o = dn(e).pointerEl = new QT[a.type](ig(r.pointer));
        e.add(o);
      }
    }, t.prototype.createLabelEl = function(e, r, n, i) {
      if (r.label) {
        var a = dn(e).labelEl = new it(ig(r.label));
        e.add(a), og(a, i);
      }
    }, t.prototype.updatePointerEl = function(e, r, n) {
      var i = dn(e).pointerEl;
      i && r.pointer && (i.setStyle(r.pointer.style), n(i, {
        shape: r.pointer.shape
      }));
    }, t.prototype.updateLabelEl = function(e, r, n, i) {
      var a = dn(e).labelEl;
      a && (a.setStyle(r.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: r.label.x,
        y: r.label.y
      }), og(a, i));
    }, t.prototype._renderHandle = function(e) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var r = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = r.getModel("handle"), o = r.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = Bh(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            O_(l.event);
          },
          onmousedown: Rl(this._onHandleDragMove, this, 0, 0),
          drift: Rl(this._onHandleDragMove, this),
          ondragend: Rl(this._onHandleDragEnd, this)
        }), n.add(i)), sg(i, r, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        V(u) || (u = [u, u]), i.scaleX = u[0] / 2, i.scaleY = u[1] / 2, I_(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(e, s);
      }
    }, t.prototype._moveHandleToValue = function(e, r) {
      ag(this._axisPointerModel, !r && this._moveAnimation, this._handle, kl(this.getHandleTransform(e, this._axisModel, this._axisPointerModel)));
    }, t.prototype._onHandleDragMove = function(e, r) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(kl(n), [e, r], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(kl(i)), dn(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, t.prototype._doDispatchAxisPointer = function() {
      var e = this._handle;
      if (e) {
        var r = this._payloadInfo, n = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: r.cursorPoint[0],
          y: r.cursorPoint[1],
          tooltipOption: r.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        });
      }
    }, t.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var e = this._handle;
      if (e) {
        var r = this._axisPointerModel.get("value");
        this._moveHandleToValue(r), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, t.prototype.clear = function(e) {
      this._lastValue = null, this._lastStatus = null;
      var r = e.getZr(), n = this._group, i = this._handle;
      r && n && (this._lastGraphicKey = null, n && r.remove(n), i && r.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), zf(this, "_doDispatchAxisPointer");
    }, t.prototype.doClear = function() {
    }, t.prototype.buildLabel = function(e, r, n) {
      return n = n || 0, {
        x: e[n],
        y: e[1 - n],
        width: r[n],
        height: r[1 - n]
      };
    }, t;
  })()
);
function ag(t, e, r, n) {
  C0(dn(r).lastProp, n) || (dn(r).lastProp = n, e ? kr(r, n, t) : (r.stopAnimation(), r.attr(n)));
}
function C0(t, e) {
  if (W(t) && W(e)) {
    var r = !0;
    return x(e, function(n, i) {
      r = r && C0(t[i], n);
    }), !!r;
  } else
    return t === e;
}
function og(t, e) {
  t[e.get(["label", "show"]) ? "show" : "hide"]();
}
function kl(t) {
  return {
    x: t.x || 0,
    y: t.y || 0,
    rotation: t.rotation || 0
  };
}
function sg(t, e, r) {
  var n = e.get("z"), i = e.get("zlevel");
  t && t.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = r);
  });
}
function kL(t) {
  var e = t.get("type"), r = t.getModel(e + "Style"), n;
  return e === "line" ? (n = r.getLineStyle(), n.fill = null) : e === "shadow" && (n = r.getAreaStyle(), n.stroke = null), n;
}
function BL(t, e, r, n, i) {
  var a = r.get("value"), o = D0(a, e.axis, e.ecModel, r.get("seriesDataIndices"), {
    precision: r.get(["label", "precision"]),
    formatter: r.get(["label", "formatter"])
  }), s = r.getModel("label"), u = vu(s.get("padding") || 0), l = s.getFont(), f = Fg(o, l), h = i.position, c = f.width + u[1] + u[3], v = f.height + u[0] + u[2], d = i.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var g = i.verticalAlign;
  g === "bottom" && (h[1] -= v), g === "middle" && (h[1] -= v / 2), VL(h, c, v, n);
  var m = s.get("backgroundColor");
  (!m || m === "auto") && (m = e.get(["axisLine", "lineStyle", "color"])), t.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: Si(s, {
      text: o,
      font: l,
      fill: s.getTextColor(),
      padding: u,
      backgroundColor: m
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function VL(t, e, r, n) {
  var i = n.getWidth(), a = n.getHeight();
  t[0] = Math.min(t[0] + e, i) - e, t[1] = Math.min(t[1] + r, a) - r, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
}
function D0(t, e, r, n, i) {
  t = e.scale.parse(t);
  var a = e.scale.getLabel({
    value: t
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: i.precision
  }), o = i.formatter;
  if (o) {
    var s = {
      value: Ms(e, {
        value: t
      }),
      axisDimension: e.dim,
      axisIndex: e.index,
      seriesData: []
    };
    x(n, function(u) {
      var l = r.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), H(o) ? a = o.replace("{value}", a) : Q(o) && (a = o(s));
  }
  return a;
}
function E0(t, e, r) {
  var n = Wt();
  return dh(n, n, r.rotation), Zl(n, n, r.position), kh([t.dataToCoord(e), (r.labelOffset || 0) + (r.labelDirection || 1) * (r.labelMargin || 0)], n);
}
function FL(t, e, r, n, i, a) {
  var o = Pr.innerTextLayout(r.rotation, 0, r.labelDirection);
  r.labelMargin = i.get(["label", "margin"]), BL(e, n, i, a, {
    position: E0(n.axis, t, r),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function zL(t, e, r) {
  return r = r || 0, {
    x1: t[r],
    y1: t[1 - r],
    x2: e[r],
    y2: e[1 - r]
  };
}
function HL(t, e, r) {
  return r = r || 0, {
    x: t[r],
    y: t[1 - r],
    width: e[r],
    height: e[1 - r]
  };
}
function GL(t, e, r) {
  return gu(t, {
    fromStat: {
      sers: q(e, function(n) {
        return r.getSeriesByIndex(n.seriesIndex);
      })
    },
    min: 1
  }).w;
}
function UL(t, e, r) {
  return [de(ft(e[0], e[1]), t - r / 2), ft(t + r / 2, de(e[0], e[1]))];
}
var WL = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.makeElOption = function(r, n, i, a, o) {
      var s = i.axis, u = s.grid, l = a.get("type"), f = s.getGlobalExtent(), h = ug(u, s).getOtherAxis(s).getGlobalExtent(), c = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (l && l !== "none") {
        var v = kL(a), d = YL[l](s, c, f, h, a.get("seriesDataIndices"), a.ecModel);
        d.style = v, r.graphicKey = d.type, r.pointer = d;
      }
      var g = Ps(u.getRect(), i);
      FL(n, r, g, i, a, o);
    }, e.prototype.getHandleTransform = function(r, n, i) {
      var a = Ps(n.axis.grid.getRect(), n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = E0(n.axis, r, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, e.prototype.updateHandleTransform = function(r, n, i, a) {
      var o = i.axis, s = o.grid, u = o.getGlobalExtent(!0), l = ug(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [r.x, r.y];
      h[f] += n[f], h[f] = ft(u[1], h[f]), h[f] = de(u[0], h[f]);
      var c = (l[1] + l[0]) / 2, v = [c, c];
      v[f] = h[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: r.rotation,
        cursorPoint: v,
        tooltipOption: d[f]
      };
    }, e;
  })(RL)
);
function ug(t, e) {
  var r = {};
  return r[e.dim + "AxisIndex"] = e.index, t.getCartesian(r);
}
var YL = {
  line: function(t, e, r, n) {
    var i = zL([e, n[0]], [e, n[1]], lg(t));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(t, e, r, n, i, a) {
    var o = GL(t, i, a), s = n[1] - n[0], u = UL(e, r, o), l = u[0], f = u[1];
    return {
      type: "Rect",
      shape: HL([l, n[0]], [f - l, s], lg(t))
    };
  }
};
function lg(t) {
  return t.dim === "x" ? 0 : 1;
}
var XL = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.type = "axisPointer", e.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: Z.color.border,
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: Z.color.shadowTint
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: Z.color.neutral00,
        padding: [5, 7, 5, 7],
        backgroundColor: Z.color.accent60,
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: Z.color.accent40,
        // For mobile performance
        throttle: 40
      }
    }, e;
  })(fe)
), hr = ye(), ZL = x;
function M0(t, e, r) {
  if (!ee.node) {
    var n = e.getZr();
    hr(n).records || (hr(n).records = {}), $L(n, e);
    var i = hr(n).records[t] || (hr(n).records[t] = {});
    i.handler = r;
  }
}
function $L(t, e) {
  if (hr(t).initialized)
    return;
  hr(t).initialized = !0, r("click", Ae(Bl, "click")), r("mousemove", Ae(Bl, "mousemove")), r("mousewheel", Ae(Bl, "mousewheel")), r("globalout", KL);
  function r(n, i) {
    t.on(n, function(a) {
      var o = QL(e);
      ZL(hr(t).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), qL(o.pendings, e);
    });
  }
}
function qL(t, e) {
  var r = t.showTip.length, n = t.hideTip.length, i;
  r ? i = t.showTip[r - 1] : n && (i = t.hideTip[n - 1]), i && (i.dispatchAction = null, e.dispatchAction(i));
}
function KL(t, e, r) {
  t.handler("leave", null, r);
}
function Bl(t, e, r, n) {
  e.handler(t, r, n);
}
function QL(t) {
  var e = {
    showTip: [],
    hideTip: []
  }, r = function(n) {
    var i = e[n.type];
    i ? i.push(n) : (n.dispatchAction = r, t.dispatchAction(n));
  };
  return {
    dispatchAction: r,
    pendings: e
  };
}
function th(t, e) {
  if (!ee.node) {
    var r = e.getZr(), n = (hr(r).records || {})[t];
    n && (hr(r).records[t] = null);
  }
}
var JL = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.render = function(r, n, i) {
      var a = n.getComponent("tooltip"), o = r.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click|mousewheel";
      M0("axisPointer", i, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, e.prototype.remove = function(r, n) {
      th("axisPointer", n);
    }, e.prototype.dispose = function(r, n) {
      th("axisPointer", n);
    }, e.type = "axisPointer", e;
  })(er)
);
function A0(t, e) {
  var r = [], n = t.seriesIndex, i;
  if (n == null || !(i = e.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = Cn(a, t);
  if (o == null || o < 0 || V(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = i.coordinateSystem;
  if (i.getTooltipPosition)
    r = i.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (t.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), h = f.dim, c = l.dim, v = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(c), g = [];
      g[v] = a.get(d, o), g[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), r = u.dataToPoint(g) || [];
    } else
      r = u.dataToPoint(a.getValues(q(u.dimensions, function(p) {
        return a.mapDimension(p);
      }), o)) || [];
  else if (s) {
    var m = s.getBoundingRect().clone();
    m.applyTransform(s.transform), r = [m.x + m.width / 2, m.y + m.height / 2];
  }
  return {
    point: r,
    el: s
  };
}
var fg = ye();
function jL(t, e, r) {
  var n = t.currTrigger, i = [t.x, t.y], a = t, o = t.dispatchAction || Se(r.dispatchAction, r), s = e.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    ts(i) && (i = A0({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, e).point);
    var u = ts(i), l = a.axesInfo, f = s.axesInfo, h = n === "leave" || ts(i), c = {}, v = {}, d = {
      list: [],
      map: {}
    }, g = {
      showPointer: Ae(tI, v),
      showTooltip: Ae(rI, d)
    };
    x(s.coordSysMap, function(p, y) {
      var _ = u || p.containPoint(i);
      x(s.coordSysAxesInfo[y], function(S, b) {
        var T = S.axis, w = oI(l, S);
        if (!h && _ && (!l || w)) {
          var E = w && w.value;
          E == null && !u && (E = T.pointToData(i)), E != null && hg(S, E, g, !1, c);
        }
      });
    });
    var m = {};
    return x(f, function(p, y) {
      var _ = p.linkGroup;
      _ && !v[y] && x(_.axesInfo, function(S, b) {
        var T = v[b];
        if (S !== p && T) {
          var w = T.value;
          _.mapper && (w = p.axis.scale.parse(_.mapper(w, cg(S), cg(p)))), m[p.key] = w;
        }
      });
    }), x(m, function(p, y) {
      hg(f[y], p, g, !0, c);
    }), nI(v, f, c), iI(d, i, t, o), aI(f, o, r), c;
  }
}
function hg(t, e, r, n, i) {
  var a = t.axis;
  if (!(a.scale.isBlank() || !a.containData(e))) {
    if (!t.involveSeries) {
      r.showPointer(t, e);
      return;
    }
    var o = eI(e, t), s = o.payloadBatch, u = o.snapToValue;
    s[0] && i.seriesIndex == null && k(i, s[0]), !n && t.snap && a.containData(u) && u != null && (e = u), r.showPointer(t, e, s), r.showTooltip(t, o, u);
  }
}
function eI(t, e) {
  var r = e.axis, n = r.dim, i = t, a = [], o = Number.MAX_VALUE, s = -1;
  return x(e.seriesModels, function(u, l) {
    var f = u.getData().mapDimensionsAll(n), h, c;
    if (u.getAxisTooltipData) {
      var v = u.getAxisTooltipData(f, t, r);
      c = v.dataIndices, h = v.nestestValue;
    } else {
      if (c = u.indicesOfNearest(
        n,
        f[0],
        t,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        r.type === "category" ? 0.5 : null
      ), !c.length)
        return;
      h = u.getData().get(f[0], c[0]);
    }
    if (Qt(h)) {
      var d = t - h, g = Math.abs(d);
      g <= o && ((g < o || d >= 0 && s < 0) && (o = g, s = d, i = h, a.length = 0), x(c, function(m) {
        a.push({
          seriesIndex: u.seriesIndex,
          dataIndexInside: m,
          dataIndex: u.getData().getRawIndex(m)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: i
  };
}
function tI(t, e, r, n) {
  t[e.key] = {
    value: r,
    payloadBatch: n
  };
}
function rI(t, e, r, n) {
  var i = r.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
  if (!(!e.triggerTooltip || !i.length)) {
    var u = e.coordSys.model, l = Pa(u), f = t.map[l];
    f || (f = t.map[l] = {
      coordSysId: u.id,
      coordSysIndex: u.componentIndex,
      coordSysType: u.type,
      coordSysMainType: u.mainType,
      dataByAxis: []
    }, t.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: n,
      // Caution: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: i.slice()
    });
  }
}
function nI(t, e, r) {
  var n = r.axesInfo = [];
  x(e, function(i, a) {
    var o = i.axisPointerModel.option, s = t[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function iI(t, e, r, n) {
  if (ts(e) || !t.list.length) {
    n({
      type: "hideTip"
    });
    return;
  }
  var i = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  n({
    type: "showTip",
    escapeConnect: !0,
    x: e[0],
    y: e[1],
    tooltipOption: r.tooltipOption,
    position: r.position,
    dataIndexInside: i.dataIndexInside,
    dataIndex: i.dataIndex,
    seriesIndex: i.seriesIndex,
    dataByCoordSys: t.list
  });
}
function aI(t, e, r) {
  var n = r.getZr(), i = "axisPointerLastHighlights", a = fg(n)[i] || {}, o = fg(n)[i] = {};
  x(t, function(f, h) {
    var c = f.axisPointerModel.option;
    c.status === "show" && f.triggerEmphasis && x(c.seriesDataIndices, function(v) {
      o[v.seriesIndex + "|" + v.dataIndex] = v;
    });
  });
  var s = [], u = [];
  function l(f) {
    return {
      seriesIndex: f.seriesIndex,
      dataIndex: f.dataIndex
    };
  }
  x(a, function(f, h) {
    !o[h] && u.push(l(f));
  }), x(o, function(f, h) {
    !a[h] && s.push(l(f));
  }), u.length && r.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: u
  }), s.length && r.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function oI(t, e) {
  for (var r = 0; r < (t || []).length; r++) {
    var n = t[r];
    if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function cg(t) {
  var e = t.axis.model, r = {}, n = r.axisDim = t.axis.dim;
  return r.axisIndex = r[n + "AxisIndex"] = e.componentIndex, r.axisName = r[n + "AxisName"] = e.name, r.axisId = r[n + "AxisId"] = e.id, r;
}
function ts(t) {
  return !t || t[0] == null || isNaN(t[0]) || t[1] == null || isNaN(t[1]);
}
function L0(t) {
  T0.registerAxisPointerClass("CartesianAxisPointer", WL), t.registerComponentModel(XL), t.registerComponentView(JL), t.registerPreprocessor(function(e) {
    if (e) {
      (!e.axisPointer || e.axisPointer.length === 0) && (e.axisPointer = {});
      var r = e.axisPointer.link;
      r && !V(r) && (e.axisPointer.link = [r]);
    }
  }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, {
    overallReset: function(e, r) {
      e.getComponent("axisPointer").coordSysAxesInfo = bL(e, r);
    }
  }), t.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, jL);
}
function sI(t) {
  Fr(NL), Fr(L0);
}
function uI(t, e) {
  var r = vu(e.get("padding")), n = e.getItemStyle(["color", "opacity"]);
  n.fill = e.get("backgroundColor");
  var i = new Le({
    shape: {
      x: t.x - r[3],
      y: t.y - r[0],
      width: t.width + r[1] + r[3],
      height: t.height + r[0] + r[2],
      r: e.get("borderRadius")
    },
    style: n,
    silent: !0,
    z2: -1
  });
  return i;
}
var lI = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.type = "tooltip", e.dependencies = ["axisPointer"], e.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click|mousewheel",
      alwaysShowContent: !1,
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaults to `false` (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      displayTransition: !0,
      enterable: !1,
      backgroundColor: Z.color.neutral00,
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      defaultBorderColor: Z.color.border,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: Z.color.borderShade,
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: Z.color.tertiary,
        fontSize: 14
      }
    }, e;
  })(fe)
);
function I0(t) {
  var e = t.get("confine");
  return e != null ? !!e : t.get("renderMode") === "richText";
}
function O0(t) {
  if (ee.domSupported) {
    for (var e = document.documentElement.style, r = 0, n = t.length; r < n; r++)
      if (t[r] in e)
        return t[r];
  }
}
var P0 = O0(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), fI = O0(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function N0(t, e) {
  if (!t)
    return e;
  e = My(e, !0);
  var r = t.indexOf(e);
  return t = r === -1 ? e : "-" + t.slice(0, r) + "-" + e, t.toLowerCase();
}
function hI(t, e) {
  var r = t.currentStyle || document.defaultView && document.defaultView.getComputedStyle(t);
  return r ? r[e] : null;
}
var cI = N0(fI, "transition"), xc = N0(P0, "transform"), vI = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (ee.transform3dSupported ? "will-change:transform;" : "");
function dI(t) {
  return t = t === "left" ? "right" : t === "right" ? "left" : t === "top" ? "bottom" : "top", t;
}
function pI(t, e, r) {
  if (!H(r) || r === "inside")
    return "";
  var n = t.get("backgroundColor"), i = t.get("borderWidth");
  e = En(e);
  var a = dI(r), o = Math.max(Math.round(i) * 1.5, 6), s = "", u = xc + ":", l;
  le(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + i, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (c - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = e + " solid " + i + "px;", g = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
  return '<div style="' + g.join("") + '"></div>';
}
function gI(t, e, r) {
  var n = "cubic-bezier(0.23,1,0.32,1)", i = "", a = "";
  return r && (i = " " + t / 2 + "s " + n, a = "opacity" + i + ",visibility" + i), e || (i = " " + t + "s " + n, a += (a.length ? "," : "") + (ee.transformSupported ? "" + xc + i : ",left" + i + ",top" + i)), cI + ":" + a;
}
function vg(t, e, r) {
  var n = t.toFixed(0) + "px", i = e.toFixed(0) + "px";
  if (!ee.transformSupported)
    return r ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = ee.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return r ? "top:0;left:0;" + xc + ":" + o + ";" : [["top", 0], ["left", 0], [P0, o]];
}
function mI(t) {
  var e = [], r = t.get("fontSize"), n = t.getTextColor();
  n && e.push("color:" + n), e.push("font:" + t.getFont());
  var i = Y(t.get("lineHeight"), Math.round(r * 3 / 2));
  r && e.push("line-height:" + i + "px");
  var a = t.get("textShadowColor"), o = t.get("textShadowBlur") || 0, s = t.get("textShadowOffsetX") || 0, u = t.get("textShadowOffsetY") || 0;
  return a && o && e.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), x(["decoration", "align"], function(l) {
    var f = t.get(l);
    f && e.push("text-" + l + ":" + f);
  }), e.join(";");
}
function yI(t, e, r, n) {
  var i = [], a = t.get("transitionDuration"), o = t.get("backgroundColor"), s = t.get("shadowBlur"), u = t.get("shadowColor"), l = t.get("shadowOffsetX"), f = t.get("shadowOffsetY"), h = t.getModel("textStyle"), c = By(t, "html"), v = l + "px " + f + "px " + s + "px " + u;
  return i.push("box-shadow:" + v), e && a > 0 && i.push(gI(a, r, n)), o && i.push("background-color:" + o), x(["width", "color", "radius"], function(d) {
    var g = "border-" + d, m = My(g), p = t.get(m);
    p != null && i.push(g + ":" + p + (d === "color" ? "" : "px"));
  }), i.push(mI(h)), c != null && i.push("padding:" + vu(c).join("px ") + "px"), i.join(";") + ";";
}
function dg(t, e, r, n, i) {
  var a = e && e.painter;
  if (r) {
    var o = a && a.getViewportRoot();
    o && lx(t, o, r, n, i);
  } else {
    t[0] = n, t[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (t[0] += s.offsetLeft, t[1] += s.offsetTop);
  }
  t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
}
var _I = (
  /** @class */
  (function() {
    function t(e, r) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, ee.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = e.getZr(), a = r.appendTo, o = a && (H(a) ? document.querySelector(a) : fi(a) ? a : Q(a) && a(e.getDom()));
      dg(this._styleCoord, i, o, e.getWidth() / 2, e.getHeight() / 2), (o || e.getDom()).appendChild(n), this._api = e, this._container = o;
      var s = this;
      n.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, n.onmousemove = function(u) {
        if (u = u || window.event, !s._enterable) {
          var l = i.handler, f = i.painter.getViewportRoot();
          gt(f, u, !0), l.dispatch("mousemove", u);
        }
      }, n.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return t.prototype.update = function(e) {
      if (!this._container) {
        var r = this._api.getDom(), n = hI(r, "position"), i = r.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = e.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this._enableDisplayTransition = e.get("displayTransition") && e.get("transitionDuration") > 0, this.el.className = e.get("className") || "";
    }, t.prototype.show = function(e, r) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = vI + yI(e, !this._firstShow, this._longHide, this._enableDisplayTransition) + vg(a[0], a[1], !0) + ("border-color:" + En(r) + ";") + (e.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, t.prototype.setContent = function(e, r, n, i, a) {
      var o = this.el;
      if (e == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (H(a) && n.get("trigger") === "item" && !I0(n) && (s = pI(n, i, a)), H(e))
        o.innerHTML = e + s;
      else if (e) {
        o.innerHTML = "", V(e) || (e = [e]);
        for (var u = 0; u < e.length; u++)
          fi(e[u]) && e[u].parentNode !== o && o.appendChild(e[u]);
        if (s && o.childNodes.length) {
          var l = document.createElement("div");
          l.innerHTML = s, o.appendChild(l);
        }
      }
    }, t.prototype.setEnterable = function(e) {
      this._enterable = e;
    }, t.prototype.getSize = function() {
      var e = this.el;
      return e ? [e.offsetWidth, e.offsetHeight] : [0, 0];
    }, t.prototype.moveTo = function(e, r) {
      if (this.el) {
        var n = this._styleCoord;
        if (dg(n, this._zr, this._container, e, r), n[0] != null && n[1] != null) {
          var i = this.el.style, a = vg(n[0], n[1]);
          x(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, t.prototype._moveIfResized = function() {
      var e = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(e * this._zr.getWidth(), r * this._zr.getHeight());
    }, t.prototype.hide = function() {
      var e = this, r = this.el.style;
      this._enableDisplayTransition ? (r.visibility = "hidden", r.opacity = "0") : r.display = "none", ee.transform3dSupported && (r.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return e._longHide = !0;
      }, 500);
    }, t.prototype.hideLater = function(e) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(Se(this.hide, this), e)) : this.hide());
    }, t.prototype.isShow = function() {
      return this._show;
    }, t.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var e = this._zr;
      fx(e && e.painter && e.painter.getViewportRoot(), this._container);
      var r = this.el;
      if (r) {
        r.onmouseenter = r.onmousemove = r.onmouseleave = null;
        var n = r.parentNode;
        n && n.removeChild(r);
      }
      this.el = this._container = null;
    }, t;
  })()
), SI = (
  /** @class */
  (function() {
    function t(e) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = e.getZr(), gg(this._styleCoord, this._zr, e.getWidth() / 2, e.getHeight() / 2);
    }
    return t.prototype.update = function(e) {
      var r = e.get("alwaysShowContent");
      r && this._moveIfResized(), this._alwaysShowContent = r;
    }, t.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, t.prototype.setContent = function(e, r, n, i, a) {
      var o = this;
      W(e) && et(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new it({
        style: {
          rich: r.richTextStyles,
          text: e,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: By(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), x(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = n.get(l);
      }), x(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
        o.el.style[l] = s.get(l) || 0;
      }), this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function() {
        u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;
      }), this.el.on("mouseout", function() {
        u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;
      });
    }, t.prototype.setEnterable = function(e) {
      this._enterable = e;
    }, t.prototype.getSize = function() {
      var e = this.el, r = this.el.getBoundingRect(), n = pg(e.style);
      return [r.width + n.left + n.right, r.height + n.top + n.bottom];
    }, t.prototype.moveTo = function(e, r) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        gg(i, this._zr, e, r), e = i[0], r = i[1];
        var a = n.style, o = Dr(a.borderWidth || 0), s = pg(a);
        n.x = e + o + s.left, n.y = r + o + s.top, n.markRedraw();
      }
    }, t.prototype._moveIfResized = function() {
      var e = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(e * this._zr.getWidth(), r * this._zr.getHeight());
    }, t.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, t.prototype.hideLater = function(e) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(Se(this.hide, this), e)) : this.hide());
    }, t.prototype.isShow = function() {
      return this._show;
    }, t.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, t;
  })()
);
function Dr(t) {
  return Math.max(0, t);
}
function pg(t) {
  var e = Dr(t.shadowBlur || 0), r = Dr(t.shadowOffsetX || 0), n = Dr(t.shadowOffsetY || 0);
  return {
    left: Dr(e - r),
    right: Dr(e + r),
    top: Dr(e - n),
    bottom: Dr(e + n)
  };
}
function gg(t, e, r, n) {
  t[0] = r, t[1] = n, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
}
var bI = new Le({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), TI = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.init = function(r, n) {
      if (!(ee.node || !n.getDom())) {
        var i = r.getComponent("tooltip"), a = this._renderMode = Sb(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new SI(n) : new _I(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, e.prototype.render = function(r, n, i) {
      if (!(ee.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = r, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(r), a.setEnterable(r.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && r.get("transitionDuration") ? I_(this, "_updatePosition", 50, "fixRate") : zf(this, "_updatePosition");
      }
    }, e.prototype._initGlobalListener = function() {
      var r = this._tooltipModel, n = r.get("triggerOn");
      M0("itemTooltip", this._api, Se(function(i, a, o) {
        n !== "none" && (n.indexOf(i) >= 0 ? this._tryShow(a, o) : i === "leave" && this._hide(o));
      }, this));
    }, e.prototype._keepShow = function() {
      var r = this._tooltipModel, n = this._ecModel, i = this._api, a = r.get("triggerOn");
      if (r.get("trigger") !== "axis" && (this._lastDataByCoordSys = null, this._cbParamsList = null), this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !i.isDisposed() && o.manuallyShowTip(r, n, i, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, e.prototype.manuallyShowTip = function(r, n, i, a) {
      if (!(a.from === this.uid || ee.node || !i.getDom())) {
        var o = mg(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, u = DI(a, n, i);
        if (u) {
          var l = u.el.getBoundingRect().clone();
          l.applyTransform(u.el.transform), this._tryShow({
            offsetX: l.x + l.width / 2,
            offsetY: l.y + l.height / 2,
            target: u.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = bI;
          f.x = a.x, f.y = a.y, f.update(), ve(f).tooltipConfig = {
            name: null,
            option: a.tooltip
          }, this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            target: f
          }, o);
        } else if (s)
          this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            dataByCoordSys: s,
            tooltipOption: a.tooltipOption
          }, o);
        else if (a.seriesIndex != null) {
          if (this._manuallyAxisShowTip(r, n, i, a))
            return;
          var h = A0(a, n), c = h.point[0], v = h.point[1];
          c != null && v != null && this._tryShow({
            offsetX: c,
            offsetY: v,
            target: h.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else a.x != null && a.y != null && (i.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: i.getZr().findHover(a.x, a.y).target
        }, o));
      }
    }, e.prototype.manuallyHideTip = function(r, n, i, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, a.from !== this.uid && this._hide(mg(a, i));
    }, e.prototype._manuallyAxisShowTip = function(r, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = n.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), h = qi([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
          if (h.get("trigger") === "axis")
            return i.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, e.prototype._tryShow = function(r, n) {
      var i = r.target, a = this._tooltipModel;
      if (a) {
        this._lastX = r.offsetX, this._lastY = r.offsetY;
        var o = r.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, r);
        else if (i) {
          var s = ve(i);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null, this._cbParamsList = null;
          var u, l;
          ia(i, function(f) {
            if (f.tooltipDisabled)
              return u = l = null, !0;
            u || l || (ve(f).dataIndex != null ? u = f : ve(f).tooltipConfig != null && (l = f));
          }, !0), u ? this._showSeriesItemTooltip(r, u, n) : l ? this._showComponentItemTooltip(r, l, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(n);
      }
    }, e.prototype._showOrMove = function(r, n) {
      var i = r.get("showDelay");
      n = Se(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, e.prototype._showAxisTooltip = function(r, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = qi([n.tooltipOption], a), u = this._renderMode, l = [], f = Ea("section", {
        blocks: [],
        noHeader: !0
      }), h = [], c = new ll();
      x(r, function(y) {
        x(y.dataByAxis, function(_) {
          var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), b = _.value, T = S.axis, w = T.scale.parse(b);
          if (!(!S || b == null)) {
            var E = D0(b, T, i, _.seriesDataIndices, _.valueLabelOpt), D = Ea("section", {
              header: E,
              noHeader: !Gt(E),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(D), x(_.seriesDataIndices, function(C) {
              var M = i.getSeriesByIndex(C.seriesIndex), L = C.dataIndexInside, A = M.getDataParams(L);
              if (!(A.dataIndex < 0)) {
                A.axisDim = _.axisDim, A.axisIndex = _.axisIndex, A.axisType = _.axisType, A.axisId = _.axisId, A.axisValue = Ms(S.axis, {
                  value: w
                }), A.axisValueLabel = E, A.marker = c.makeTooltipMarker("item", En(A.color), u);
                var I = dd(M.formatTooltip(L, !0, null)), P = I.frag;
                if (P) {
                  var O = qi([M], a).get("valueFormatter");
                  D.blocks.push(O ? k({
                    valueFormatter: O
                  }, P) : P);
                }
                I.text && h.push(I.text), l.push(A);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var v = n.position, d = s.get("order"), g = yd(f, c, u, d, i.get("useUTC"), s.get("textStyle"));
      g && h.unshift(g);
      var m = u === "richText" ? `

` : "<br/>", p = h.join(m);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(r, l) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, p, l, Math.random() + "", o[0], o[1], v, null, c);
      });
    }, e.prototype._showSeriesItemTooltip = function(r, n, i) {
      var a = this._ecModel, o = ve(n), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, c = l.getData(h), v = this._renderMode, d = r.positionDefault, g = qi([c.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), m = g.get("trigger");
      if (!(m != null && m !== "item")) {
        var p = l.getDataParams(f, h), y = new ll();
        p.marker = y.makeTooltipMarker("item", En(p.color), v);
        var _ = dd(l.formatTooltip(f, !1, h)), S = g.get("order"), b = g.get("valueFormatter"), T = _.frag, w = T ? yd(b ? k({
          valueFormatter: b
        }, T) : T, y, v, S, a.get("useUTC"), g.get("textStyle")) : _.text, E = "item_" + l.name + "_" + f;
        this._showOrMove(g, function() {
          this._showTooltipContent(g, w, p, E, r.offsetX, r.offsetY, r.position, r.target, y);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: c.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, e.prototype._showComponentItemTooltip = function(r, n, i) {
      var a = this._renderMode === "html", o = ve(n), s = o.tooltipConfig, u = s.option || {}, l = u.encodeHTMLContent;
      if (H(u)) {
        var f = u;
        u = {
          content: f,
          // Fixed formatter
          formatter: f
        }, l = !0;
      }
      l && a && u.content && (u = ie(u), u.content = tt(u.content));
      var h = [u], c = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      c && h.push(c), h.push({
        formatter: u.content
      });
      var v = r.positionDefault, d = qi(h, this._tooltipModel, v ? {
        position: v
      } : null), g = d.get("content"), m = Math.random() + "", p = new ll();
      this._showOrMove(d, function() {
        var y = ie(d.get("formatterParams") || {});
        this._showTooltipContent(d, g, y, m, r.offsetX, r.offsetY, r.position, n, p);
      }), i({
        type: "showTip",
        from: this.uid
      });
    }, e.prototype._showTooltipContent = function(r, n, i, a, o, s, u, l, f) {
      if (this._ticket = "", !(!r.get("showContent") || !r.get("show"))) {
        var h = this._tooltipContent;
        h.setEnterable(r.get("enterable"));
        var c = r.get("formatter");
        u = u || r.get("position");
        var v = n, d = this._getNearestPoint([o, s], i, r.get("trigger"), r.get("borderColor"), r.get("defaultBorderColor", !0)), g = d.color;
        if (c)
          if (H(c)) {
            var m = r.ecModel.get("useUTC"), p = V(i) ? i[0] : i, y = p && p.axisType && p.axisType.indexOf("time") >= 0;
            v = c, y && (v = cu(p.axisValue, v, m)), v = Ay(v, i, !0);
          } else if (Q(c)) {
            var _ = Se(function(S, b) {
              S === this._ticket && (h.setContent(b, f, r, g, u), this._updatePosition(r, u, o, s, h, i, l));
            }, this);
            this._ticket = a, v = c(i, a, _);
          } else
            v = c;
        h.setContent(v, f, r, g, u), h.show(r, g), this._updatePosition(r, u, o, s, h, i, l);
      }
    }, e.prototype._getNearestPoint = function(r, n, i, a, o) {
      if (i === "axis" || V(n))
        return {
          color: a || o
        };
      if (!V(n))
        return {
          color: a || n.color || n.borderColor
        };
    }, e.prototype._updatePosition = function(r, n, i, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      n = n || r.get("position");
      var h = o.getSize(), c = r.get("align"), v = r.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), Q(n) && (n = n([i, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: h.slice()
      })), V(n))
        i = zt(n[0], l), a = zt(n[1], f);
      else if (W(n)) {
        var g = n;
        g.width = h[0], g.height = h[1];
        var m = Ca(g, {
          width: l,
          height: f
        });
        i = m.x, a = m.y, c = null, v = null;
      } else if (H(n) && u) {
        var p = CI(n, d, h, r.get("borderWidth"));
        i = p[0], a = p[1];
      } else {
        var p = wI(i, a, o, l, f, c ? null : 20, v ? null : 20);
        i = p[0], a = p[1];
      }
      if (c && (i -= yg(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= yg(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), I0(r)) {
        var p = xI(i, a, o, l, f);
        i = p[0], a = p[1];
      }
      o.moveTo(i, a);
    }, e.prototype._updateContentNotChangedOnAxis = function(r, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === r.length;
      return o && x(i, function(s, u) {
        var l = s.dataByAxis || [], f = r[u] || {}, h = f.dataByAxis || [];
        o = o && l.length === h.length, o && x(l, function(c, v) {
          var d = h[v] || {}, g = c.seriesDataIndices || [], m = d.seriesDataIndices || [];
          o = o && c.value === d.value && c.axisType === d.axisType && c.axisId === d.axisId && g.length === m.length, o && x(g, function(p, y) {
            var _ = m[y];
            o = o && p.seriesIndex === _.seriesIndex && p.dataIndex === _.dataIndex;
          }), a && x(c.seriesDataIndices, function(p) {
            var y = p.seriesIndex, _ = n[y], S = a[y];
            _ && S && S.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = r, this._cbParamsList = n, !!o;
    }, e.prototype._hide = function(r) {
      this._lastDataByCoordSys = null, this._cbParamsList = null, r({
        type: "hideTip",
        from: this.uid
      });
    }, e.prototype.dispose = function(r, n) {
      ee.node || !n.getDom() || (zf(this, "_updatePosition"), this._tooltipContent.dispose(), th("itemTooltip", n), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
    }, e.type = "tooltip", e;
  })(er)
);
function qi(t, e, r) {
  var n = e.ecModel, i;
  r ? (i = new xe(r, n, n), i = new xe(e.option, i, n)) : i = e;
  for (var a = t.length - 1; a >= 0; a--) {
    var o = t[a];
    o && (o instanceof xe && (o = o.get("tooltip", !0)), H(o) && (o = {
      formatter: o
    }), o && (i = new xe(o, i, n)));
  }
  return i;
}
function mg(t, e) {
  return t.dispatchAction || Se(e.dispatchAction, e);
}
function wI(t, e, r, n, i, a, o) {
  var s = r.getSize(), u = s[0], l = s[1];
  return a != null && (t + u + a + 2 > n ? t -= u + a : t += a), o != null && (e + l + o > i ? e -= l + o : e += o), [t, e];
}
function xI(t, e, r, n, i) {
  var a = r.getSize(), o = a[0], s = a[1];
  return t = Math.min(t + o, n) - o, e = Math.min(e + s, i) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
}
function CI(t, e, r, n) {
  var i = r[0], a = r[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, u = 0, l = e.width, f = e.height;
  switch (t) {
    case "inside":
      s = e.x + l / 2 - i / 2, u = e.y + f / 2 - a / 2;
      break;
    case "top":
      s = e.x + l / 2 - i / 2, u = e.y - a - o;
      break;
    case "bottom":
      s = e.x + l / 2 - i / 2, u = e.y + f + o;
      break;
    case "left":
      s = e.x - i - o, u = e.y + f / 2 - a / 2;
      break;
    case "right":
      s = e.x + l + o, u = e.y + f / 2 - a / 2;
  }
  return [s, u];
}
function yg(t) {
  return t === "center" || t === "middle";
}
function DI(t, e, r) {
  var n = Sh(t).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = Ha(e, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = r.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = ve(l).tooltipConfig;
        if (f && f.name === t.name)
          return u = l, !0;
      }), u)
        return {
          componentMainType: i,
          componentIndex: o.componentIndex,
          el: u
        };
    }
  }
}
function EI(t) {
  Fr(L0), t.registerComponentModel(lI), t.registerComponentView(TI), t.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, He), t.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, He);
}
var MI = function(t, e) {
  if (e === "all")
    return {
      type: "all",
      title: t.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (e === "inverse")
    return {
      type: "inverse",
      title: t.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, rh = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, r;
    }
    return e.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i), r.selected = r.selected || {}, this._updateSelector(r);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.call(this, r, n), this._updateSelector(r);
    }, e.prototype._updateSelector = function(r) {
      var n = r.selector, i = this.ecModel;
      n === !0 && (n = r.selector = ["all", "inverse"]), V(n) && x(n, function(a, o) {
        H(a) && (a = {
          type: a
        }), n[o] = ce(a, MI(i, a.type));
      });
    }, e.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var r = this._data;
      if (r[0] && this.get("selectedMode") === "single") {
        for (var n = !1, i = 0; i < r.length; i++) {
          var a = r[i].get("name");
          if (this.isSelected(a)) {
            this.select(a), n = !0;
            break;
          }
        }
        !n && this.select(r[0].get("name"));
      }
    }, e.prototype._updateData = function(r) {
      var n = [], i = [];
      r.eachRawSeries(function(u) {
        var l = u.name;
        i.push(l);
        var f;
        if (u.legendVisualProvider) {
          var h = u.legendVisualProvider, c = h.getAllNames();
          r.isSeriesFiltered(u) || (i = i.concat(c)), c.length ? n = n.concat(c) : f = !0;
        } else
          f = !0;
        f && _h(u) && n.push(u.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = K(), s = q(a, function(u) {
        return (H(u) || we(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new xe(u, this, this.ecModel));
      }, this);
      this._data = ze(s, function(u) {
        return !!u;
      });
    }, e.prototype.getData = function() {
      return this._data;
    }, e.prototype.select = function(r) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        x(a, function(o) {
          n[o.get("name")] = !1;
        });
      }
      n[r] = !0;
    }, e.prototype.unSelect = function(r) {
      this.get("selectedMode") !== "single" && (this.option.selected[r] = !1);
    }, e.prototype.toggleSelected = function(r) {
      var n = this.option.selected;
      n.hasOwnProperty(r) || (n[r] = !0), this[n[r] ? "unSelect" : "select"](r);
    }, e.prototype.allSelect = function() {
      var r = this._data, n = this.option.selected;
      x(r, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, e.prototype.inverseSelect = function() {
      var r = this._data, n = this.option.selected;
      x(r, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, e.prototype.isSelected = function(r) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(r) && !n[r]) && le(this._availableNames, r) >= 0;
    }, e.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, e.type = "legend.plain", e.dependencies = ["series"], e.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      // top: 0,
      bottom: Z.size.m,
      align: "auto",
      backgroundColor: Z.color.transparent,
      borderColor: Z.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 8,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: Z.color.disabled,
      inactiveBorderColor: Z.color.disabled,
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: Z.color.disabled,
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: Z.color.secondary
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: Z.color.tertiary,
        borderWidth: 1,
        borderColor: Z.color.border
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: Z.color.quaternary
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      },
      triggerEvent: !1
    }, e;
  })(fe)
), $n = Ae, nh = x, Ro = ke, R0 = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.newlineDisabled = !1, r;
    }
    return e.prototype.init = function() {
      this.group.add(this._contentGroup = new Ro()), this.group.add(this._selectorGroup = new Ro()), this._isFirstRender = !0;
    }, e.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, e.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, e.prototype.render = function(r, n, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!r.get("show", !0)) {
        var o = r.get("align"), s = r.get("orient");
        (!o || o === "auto") && (o = r.get("left") === "right" && s === "vertical" ? "right" : "left");
        var u = r.get("selector", !0), l = r.get("selectorPosition", !0);
        u && (!l || l === "auto") && (l = s === "horizontal" ? "end" : "start"), this.renderInner(o, r, n, i, u, s, l);
        var f = Ly(r, i).refContainer, h = r.getBoxLayoutParams(), c = r.get("padding"), v = Ca(h, f, c), d = this.layoutInner(r, o, v, a, u, l), g = Ca(pe({
          width: d.width,
          height: d.height
        }, h), f, c);
        this.group.x = g.x - d.x, this.group.y = g.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = uI(
          d,
          // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
          r
        ));
      }
    }, e.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, e.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this.getContentGroup(), f = K(), h = n.get("selectedMode"), c = n.get("triggerEvent"), v = [];
      i.eachRawSeries(function(d) {
        !d.get("legendHoverLink") && v.push(d.id);
      }), nh(n.getData(), function(d, g) {
        var m = this, p = d.get("name");
        if (!this.newlineDisabled && (p === "" || p === `
`)) {
          var y = new Ro();
          y.newline = !0, l.add(y);
          return;
        }
        var _ = i.getSeriesByName(p)[0];
        if (!f.get(p)) {
          if (_) {
            var S = _.getData(), b = S.getVisual("legendLineStyle") || {}, T = S.getVisual("legendIcon"), w = S.getVisual("style"), E = this._createItem(_, p, g, d, n, r, b, w, T, h, a);
            E.on("click", $n(_g, p, null, a, v)).on("mouseover", $n(ih, _.name, null, a, v)).on("mouseout", $n(ah, _.name, null, a, v)), i.ssr && E.eachChild(function(D) {
              var C = ve(D);
              C.seriesIndex = _.seriesIndex, C.dataIndex = g, C.ssrType = "legend";
            }), c && E.eachChild(function(D) {
              m.packEventData(D, n, _, g, p);
            }), f.set(p, !0);
          } else
            i.eachRawSeries(function(D) {
              var C = this;
              if (!f.get(p) && D.legendVisualProvider) {
                var M = D.legendVisualProvider;
                if (!M.containName(p))
                  return;
                var L = M.indexOfName(p), A = M.getItemVisual(L, "style"), I = M.getItemVisual(L, "legendIcon"), P = Zt(A.fill);
                P && P[3] === 0 && (P[3] = 0.2, A = k(k({}, A), {
                  fill: Ba(P, "rgba")
                }));
                var O = this._createItem(D, p, g, d, n, r, {}, A, I, h, a);
                O.on("click", $n(_g, null, p, a, v)).on("mouseover", $n(ih, null, p, a, v)).on("mouseout", $n(ah, null, p, a, v)), i.ssr && O.eachChild(function(B) {
                  var G = ve(B);
                  G.seriesIndex = D.seriesIndex, G.dataIndex = g, G.ssrType = "legend";
                }), c && O.eachChild(function(B) {
                  C.packEventData(B, n, D, g, p);
                }), f.set(p, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(p) || console.warn(p + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), o && this._createSelector(o, n, a, s, u);
    }, e.prototype.packEventData = function(r, n, i, a, o) {
      var s = {
        componentType: "legend",
        componentIndex: n.componentIndex,
        dataIndex: a,
        value: o,
        seriesIndex: i.seriesIndex
      };
      ve(r).eventData = s;
    }, e.prototype._createSelector = function(r, n, i, a, o) {
      var s = this.getSelectorGroup();
      nh(r, function(l) {
        var f = l.type, h = new it({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            i.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: n.id
            });
          }
        });
        s.add(h);
        var c = n.getModel("selectorLabel"), v = n.getModel(["emphasis", "selectorLabel"]);
        Hh(h, {
          normal: c,
          emphasis: v
        }, {
          defaultText: l.title
        }), yf(h);
      });
    }, e.prototype._createItem = function(r, n, i, a, o, s, u, l, f, h, c) {
      var v = r.visualDrawType, d = o.get("itemWidth"), g = o.get("itemHeight"), m = o.isSelected(n), p = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var S = AI(f, a, u, l, v, m, c), b = new Ro(), T = a.getModel("textStyle");
      if (Q(r.getLegendIcon) && (!_ || _ === "inherit"))
        b.add(r.getLegendIcon({
          itemWidth: d,
          itemHeight: g,
          icon: f,
          iconRotate: p,
          itemStyle: S.itemStyle,
          lineStyle: S.lineStyle,
          symbolKeepAspect: y
        }));
      else {
        var w = _ === "inherit" && r.getData().getVisual("symbol") ? p === "inherit" ? r.getData().getVisual("symbolRotate") : p : 0;
        b.add(LI({
          itemWidth: d,
          itemHeight: g,
          icon: f,
          iconRotate: w,
          itemStyle: S.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var E = s === "left" ? d + 5 : -5, D = s, C = o.get("formatter"), M = n;
      H(C) && C ? M = C.replace("{name}", n ?? "") : Q(C) && (M = C(n));
      var L = m ? T.getTextColor() : a.get("inactiveColor");
      b.add(new it({
        style: Si(T, {
          text: M,
          x: E,
          y: g / 2,
          fill: L,
          align: D,
          verticalAlign: "middle"
        }, {
          inheritColor: L
        })
      }));
      var A = new Le({
        shape: b.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), I = a.getModel("tooltip");
      return I.get("show") && uu({
        el: A,
        componentModel: o,
        itemName: n,
        itemTooltipOption: I.option
      }), b.add(A), b.eachChild(function(P) {
        P.silent = !0;
      }), A.silent = !h, this.getContentGroup().add(b), yf(b), b.__legendDataIndex = i, b;
    }, e.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      da(r.get("orient"), u, r.get("itemGap"), i.width, i.height);
      var f = u.getBoundingRect(), h = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        da(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          r.get("selectorItemGap", !0)
        );
        var c = l.getBoundingRect(), v = [-c.x, -c.y], d = r.get("selectorButtonGap", !0), g = r.getOrient().index, m = g === 0 ? "width" : "height", p = g === 0 ? "height" : "width", y = g === 0 ? "y" : "x";
        s === "end" ? v[g] += f[m] + d : h[g] += c[m] + d, v[1 - g] += f[p] / 2 - c[p] / 2, l.x = v[0], l.y = v[1], u.x = h[0], u.y = h[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[m] = f[m] + d + c[m], _[p] = Math.max(f[p], c[p]), _[y] = Math.min(0, c[y] + v[1 - g]), _;
      } else
        return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
    }, e.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, e.type = "legend.plain", e;
  })(er)
);
function AI(t, e, r, n, i, a, o) {
  function s(m, p) {
    m.lineWidth === "auto" && (m.lineWidth = p.lineWidth > 0 ? 2 : 0), nh(m, function(y, _) {
      m[_] === "inherit" && (m[_] = p[_]);
    });
  }
  var u = e.getModel("itemStyle"), l = u.getItemStyle(), f = t.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? n.decal : Zf(h, o), l.fill === "inherit" && (l.fill = n[i]), l.stroke === "inherit" && (l.stroke = n[f]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? n : r).opacity), s(l, n);
  var c = e.getModel("lineStyle"), v = c.getLineStyle();
  if (s(v, r), l.fill === "auto" && (l.fill = n.fill), l.stroke === "auto" && (l.stroke = n.fill), v.stroke === "auto" && (v.stroke = n.fill), !a) {
    var d = e.get("inactiveBorderWidth"), g = l[f];
    l.lineWidth = d === "auto" ? n.lineWidth > 0 && g ? 2 : 0 : l.lineWidth, l.fill = e.get("inactiveColor"), l.stroke = e.get("inactiveBorderColor"), v.stroke = c.get("inactiveColor"), v.lineWidth = c.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: v
  };
}
function LI(t) {
  var e = t.icon || "roundRect", r = Ti(e, 0, 0, t.itemWidth, t.itemHeight, t.itemStyle.fill, t.symbolKeepAspect);
  return r.setStyle(t.itemStyle), r.rotation = (t.iconRotate || 0) * Math.PI / 180, r.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), e.indexOf("empty") > -1 && (r.style.stroke = r.style.fill, r.style.fill = Z.color.neutral00, r.style.lineWidth = 2), r;
}
function _g(t, e, r, n) {
  ah(t, e, r, n), r.dispatchAction({
    type: "legendToggleSelect",
    name: t ?? e
  }), ih(t, e, r, n);
}
function ih(t, e, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "highlight",
    seriesName: t,
    name: e,
    excludeSeriesId: n
  });
}
function ah(t, e, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "downplay",
    seriesName: t,
    name: e,
    excludeSeriesId: n
  });
}
function Ki(t, e, r) {
  var n = t === "allSelect" || t === "inverseSelect", i = {}, a = [];
  r.eachComponent({
    mainType: "legend",
    query: e
  }, function(s) {
    n ? s[t]() : s[t](e.name), Sg(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return r.eachComponent("legend", function(s) {
    x(i, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), Sg(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: e.name,
    selected: o
  };
}
function Sg(t, e) {
  var r = e || {};
  return x(t.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = t.isSelected(i);
      lt(r, i) ? r[i] = r[i] && a : r[i] = a;
    }
  }), r;
}
function II(t) {
  t.registerAction("legendToggleSelect", "legendselectchanged", Ae(Ki, "toggleSelected")), t.registerAction("legendAllSelect", "legendselectall", Ae(Ki, "allSelect")), t.registerAction("legendInverseSelect", "legendinverseselect", Ae(Ki, "inverseSelect")), t.registerAction("legendSelect", "legendselected", Ae(Ki, "select")), t.registerAction("legendUnSelect", "legendunselected", Ae(Ki, "unSelect"));
}
var OI = Th(PI);
function PI(t) {
  var e = t.findComponents({
    mainType: "legend"
  });
  e && e.length && t.filterSeries(function(r) {
    for (var n = 0; n < e.length; n++)
      if (!e[n].isSelected(r.name))
        return !1;
    return !0;
  });
}
function k0(t) {
  t.registerComponentModel(rh), t.registerComponentView(R0), t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, OI), t.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), II(t);
}
var NI = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.setScrollDataIndex = function(r) {
      this.option.scrollDataIndex = r;
    }, e.prototype.init = function(r, n, i) {
      var a = Wa(r);
      t.prototype.init.call(this, r, n, i), bg(this, r, a);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.call(this, r, n), bg(this, this.option, r);
    }, e.type = "legend.scroll", e.defaultOption = sx(rh.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: Z.color.accent50,
      pageIconInactiveColor: Z.color.accent10,
      pageIconSize: 15,
      pageTextStyle: {
        color: Z.color.tertiary
      },
      animationDurationUpdate: 800
    }), e;
  })(rh)
);
function bg(t, e, r) {
  var n = t.getOrient(), i = [1, 1];
  i[n.index] = 0, Br(e, r, {
    type: "box",
    ignoreSize: !!i
  });
}
var Tg = ke, Vl = ["width", "height"], Fl = ["x", "y"], RI = (
  /** @class */
  (function(t) {
    z(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.newlineDisabled = !0, r._currentIndex = 0, r;
    }
    return e.prototype.init = function() {
      t.prototype.init.call(this), this.group.add(this._containerGroup = new Tg()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new Tg());
    }, e.prototype.resetInner = function() {
      t.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, e.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this;
      t.prototype.renderInner.call(this, r, n, i, a, o, s, u);
      var f = this._controllerGroup, h = n.get("pageIconSize", !0), c = V(h) ? h : [h, h];
      d("pagePrev", 0);
      var v = n.getModel("pageTextStyle");
      f.add(new it({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: v.getTextColor(),
          font: v.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(g, m) {
        var p = g + "DataIndex", y = Bh(n.get("pageIcons", !0)[n.getOrient().name][m], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: Se(l._pageGo, l, p, n, a)
        }, {
          x: -c[0] / 2,
          y: -c[1] / 2,
          width: c[0],
          height: c[1]
        });
        y.name = g, f.add(y);
      }
    }, e.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getSelectorGroup(), l = r.getOrient().index, f = Vl[l], h = Fl[l], c = Vl[1 - l], v = Fl[1 - l];
      o && da(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        r.get("selectorItemGap", !0)
      );
      var d = r.get("selectorButtonGap", !0), g = u.getBoundingRect(), m = [-g.x, -g.y], p = ie(i);
      o && (p[f] = i[f] - g[f] - d);
      var y = this._layoutContentAndController(r, a, p, l, f, c, v, h);
      if (o) {
        if (s === "end")
          m[l] += y[f] + d;
        else {
          var _ = g[f] + d;
          m[l] -= _, y[h] -= _;
        }
        y[f] += g[f] + d, m[1 - l] += y[v] + y[c] / 2 - g[c] / 2, y[c] = Math.max(y[c], g[c]), y[v] = Math.min(y[v], g[v] + m[1 - l]), u.x = m[0], u.y = m[1], u.markRedraw();
      }
      return y;
    }, e.prototype._layoutContentAndController = function(r, n, i, a, o, s, u, l) {
      var f = this.getContentGroup(), h = this._containerGroup, c = this._controllerGroup;
      da(r.get("orient"), f, r.get("itemGap"), a ? i.width : null, a ? null : i.height), da(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        c,
        r.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = c.getBoundingRect(), g = this._showController = v[o] > i[o], m = [-v.x, -v.y];
      n || (m[a] = f[l]);
      var p = [0, 0], y = [-d.x, -d.y], _ = Y(r.get("pageButtonGap", !0), r.get("itemGap", !0));
      if (g) {
        var S = r.get("pageButtonPosition", !0);
        S === "end" ? y[a] += i[o] - d[o] : p[a] += d[o] + _;
      }
      y[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(m), h.setPosition(p), c.setPosition(y);
      var b = {
        x: 0,
        y: 0
      };
      if (b[o] = g ? i[o] : v[o], b[s] = Math.max(v[s], d[s]), b[u] = Math.min(0, d[u] + y[1 - a]), h.__rectSize = i[o], g) {
        var T = {
          x: 0,
          y: 0
        };
        T[o] = Math.max(i[o] - d[o] - _, 0), T[s] = b[s], h.setClipPath(new Le({
          shape: T
        })), h.__rectSize = T[o];
      } else
        c.eachChild(function(E) {
          E.attr({
            invisible: !0,
            silent: !0
          });
        });
      var w = this._getPageInfo(r);
      return w.pageIndex != null && kr(
        f,
        {
          x: w.contentPosition[0],
          y: w.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        g ? r : null
      ), this._updatePageInfoView(r, w), b;
    }, e.prototype._pageGo = function(r, n, i) {
      var a = this._getPageInfo(n)[r];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: n.id
      });
    }, e.prototype._updatePageInfoView = function(r, n) {
      var i = this._controllerGroup;
      x(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", c = n[h] != null, v = i.childOfName(f);
        v && (v.setStyle("fill", c ? r.get("pageIconColor", !0) : r.get("pageIconInactiveColor", !0)), v.cursor = c ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = r.get("pageFormatter"), s = n.pageIndex, u = s != null ? s + 1 : 0, l = n.pageCount;
      a && o && a.setStyle("text", H(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, e.prototype._getPageInfo = function(r) {
      var n = r.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = r.getOrient().index, s = Vl[o], u = Fl[o], l = this._findTargetItemIndex(n), f = i.children(), h = f[l], c = f.length, v = c ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: v,
        pageIndex: v - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return d;
      var g = S(h);
      d.contentPosition[o] = -g.s;
      for (var m = l + 1, p = g, y = g, _ = null; m <= c; ++m)
        _ = S(f[m]), // Half of the last item is out of the window.
        (!_ && y.e > p.s + a || _ && !b(_, p.s)) && (y.i > p.i ? p = y : p = _, p && (d.pageNextDataIndex == null && (d.pageNextDataIndex = p.i), ++d.pageCount)), y = _;
      for (var m = l - 1, p = g, y = g, _ = null; m >= -1; --m)
        _ = S(f[m]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !b(y, _.s)) && p.i < y.i && (y = p, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = p.i), ++d.pageCount, ++d.pageIndex), p = _;
      return d;
      function S(T) {
        if (T) {
          var w = T.getBoundingRect(), E = w[u] + T[u];
          return {
            s: E,
            e: E + w[s],
            i: T.__legendDataIndex
          };
        }
      }
      function b(T, w) {
        return T.e >= w && T.s <= w + a;
      }
    }, e.prototype._findTargetItemIndex = function(r) {
      if (!this._showController)
        return 0;
      var n, i = this.getContentGroup(), a;
      return i.eachChild(function(o, s) {
        var u = o.__legendDataIndex;
        a == null && u != null && (a = s), u === r && (n = s);
      }), n ?? a;
    }, e.type = "legend.scroll", e;
  })(R0)
);
function kI(t) {
  t.registerAction("legendScroll", "legendscroll", function(e, r) {
    var n = e.scrollDataIndex;
    n != null && r.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: e
    }, function(i) {
      i.setScrollDataIndex(n);
    });
  });
}
function BI(t) {
  Fr(k0), t.registerComponentModel(NI), t.registerComponentView(RI), kI(t);
}
function VI(t) {
  Fr(k0), Fr(BI);
}
function wg(t, e, r) {
  var n = ut.createCanvas(), i = e.getWidth(), a = e.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = i * r, n.height = a * r, n;
}
function zl(t) {
  return !t.__cursors.get(Fm);
}
function xg(t) {
  var e = t.__cursors.get(Fm);
  return {
    startIdx: e ? e.startIdx : 0,
    endIdx: e ? e.endIdx : 0
  };
}
var B0 = (function(t) {
  z(e, t);
  function e(r, n, i) {
    var a = t.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.zlevel = 0, a.zlevel2 = Uo, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__prevIdx = { startIdx: 0, endIdx: 0 };
    var o;
    i = i || ls, typeof r == "string" ? o = wg(r, n, i) : W(r) && (o = r, r = o.id), a.id = r, a.dom = o;
    var s = o.style;
    return s && (Og(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
  }
  return e.prototype.afterBrush = function() {
    this.__prevIdx = xg(this);
  }, e.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, e.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, e.prototype.createBackBuffer = function() {
    var r = this.dpr;
    this.domBack = wg("back-" + this.id, this.painter, r), this.ctxBack = this.domBack.getContext("2d"), r !== 1 && this.ctxBack.scale(r, r);
  }, e.prototype.createRepaintRects = function(r, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new j(0, 0, 0, 0);
    function f(S) {
      if (!(!S.isFinite() || S.isZero()))
        if (o.length === 0) {
          var b = new j(0, 0, 0, 0);
          b.copy(S), o.push(b);
        } else {
          for (var T = !1, w = 1 / 0, E = 0, D = 0; D < o.length; ++D) {
            var C = o[D];
            if (C.intersect(S)) {
              var M = new j(0, 0, 0, 0);
              M.copy(C), M.union(S), o[D] = M, T = !0;
              break;
            } else if (u) {
              l.copy(S), l.union(C);
              var L = S.width * S.height, A = C.width * C.height, I = l.width * l.height, P = I - L - A;
              P < w && (w = P, E = D);
            }
          }
          if (u && (o[E].union(S), T = !0), !T) {
            var b = new j(0, 0, 0, 0);
            b.copy(S), o.push(b);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = xg(this), c = h.startIdx; c < h.endIdx; ++c) {
      var v = r[c];
      if (v) {
        var d = v.shouldBePainted(i, a, !0, !0), g = v.__isRendered && (v.__dirty & rt || !d) ? v.getPrevPaintRect() : null;
        g && f(g);
        var m = d && (v.__dirty & rt || !v.__isRendered) ? v.getPaintRect() : null;
        m && f(m);
      }
    }
    for (var p = this.__prevIdx, c = p.startIdx; c < p.endIdx; ++c) {
      var v = n[c], d = v && v.shouldBePainted(i, a, !0, !0);
      if (v && (!d || !v.__zr) && v.__isRendered) {
        var g = v.getPrevPaintRect();
        g && f(g);
      }
    }
    var y;
    do {
      y = !1;
      for (var c = 0; c < o.length; ) {
        if (o[c].isZero()) {
          o.splice(c, 1);
          continue;
        }
        for (var _ = c + 1; _ < o.length; )
          o[c].intersect(o[_]) ? (y = !0, o[c].union(o[_]), o.splice(_, 1)) : _++;
        c++;
      }
    } while (y);
    return this._paintRects = o, o;
  }, e.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, e.prototype.resize = function(r, n) {
    var i = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = r + "px", o.height = n + "px"), a.width = r * i, a.height = n * i, s && (s.width = r * i, s.height = n * i, i !== 1 && this.ctxBack.scale(i, i));
  }, e.prototype.clear = function(r, n, i) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    n = n || this.clearColor;
    var l = this.motionBlur && !r, f = this.lastFrameAlpha, h = this.dpr, c = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
    var v = this.domBack;
    function d(g, m, p, y) {
      if (o.clearRect(g, m, p, y), n && n !== "transparent") {
        var _ = void 0;
        if (Xs(n)) {
          var S = n.global || n.__width === p && n.__height === y;
          _ = S && n.__canvasGradient || Yf(o, n, {
            x: 0,
            y: 0,
            width: p,
            height: y
          }), n.__canvasGradient = _, n.__width = p, n.__height = y;
        } else r1(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = Xf(o, n, {
          dirty: function() {
            c.setUnpainted(), c.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(g, m, p, y), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, g, m, p, y), o.restore());
    }
    !i || l ? d(0, 0, s, u) : i.length && x(i, function(g) {
      d(g.x * h, g.y * h, g.width * h, g.height * h);
    });
  }, e;
})(rr), Cg = 1e5, cn = 314159, Hl = void 0, FI = 1, Gl = 2;
function zI(t) {
  return t ? t.__builtin__ ? !0 : !(typeof t.resize != "function" || typeof t.refresh != "function") : !1;
}
function HI(t, e) {
  var r = document.createElement("div");
  return r.style.cssText = [
    "position:relative",
    "width:" + t + "px",
    "height:" + e + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", r;
}
function Dg(t, e, r, n) {
  var i = new B0(t, e, e.dpr);
  return i.zlevel = r, i.zlevel2 = n, i.__builtin__ = !0, V0(i), i;
}
function V0(t) {
  t.__cursorStack = [], t.__cursors = K();
}
function GI(t) {
  return t.startIdx = t.drawIdx = t.endIdx = t.endIdxNew = 0, t.used = !1, t.first = t.last = NaN, t.notClearIdx = -1, t;
}
function UI(t, e) {
  var r = t.__cursors, n = +e;
  return r.get(n) || (t.__cursorStack.push(n), r.set(n, GI({ key: n })));
}
function ko(t, e) {
  for (var r = t.__cursorStack, n = 0; n < r.length; n++)
    e(t.__cursors.get(r[n]));
}
function Ul(t, e) {
  var r = t.layers;
  return r[e] || (r[e] = new Array(3));
}
function Ve(t, e, r) {
  for (var n = t.layerStack, i = 0; i < n.length; i++) {
    var a = n[i].zl, o = n[i].zl2, s = t.layers[a][o];
    (!r || (!(r & ya) || s.__builtin__) && (!(r & oh) || !s.__builtin__) && (!(r & F0) || s !== t.hoverlayer)) && e(s, a, o, i);
  }
}
var ya = 1, oh = 2, F0 = 4, Bo = ya | F0, WI = (function() {
  function t(e, r, n, i) {
    this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
      layerStack: [],
      layers: []
    };
    var a = !e.nodeName || e.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = k({}, n || {}), this.dpr = n.devicePixelRatio || ls, this._singleCanvas = a, this.root = e;
    var o = e.style;
    if (o && (Og(e), e.innerHTML = ""), this.storage = r, this._prevDisplayList = [], a) {
      var u = e, l = u.width, f = u.height;
      n.width != null && (l = n.width), n.height != null && (f = n.height), this.dpr = n.devicePixelRatio || 1, u.width = l * this.dpr, u.height = f * this.dpr, this._width = l, this._height = f;
      var h = Dg(u, this, cn, Uo);
      h.initContext(), this._insertLayer(h, cn, Uo, !0), this._domRoot = e;
    } else {
      this._width = Lo(e, 0, n), this._height = Lo(e, 1, n);
      var s = this._domRoot = HI(this._width, this._height);
      e.appendChild(s);
    }
  }
  return t.prototype.getType = function() {
    return "canvas";
  }, t.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, t.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, t.prototype.getViewportRootOffset = function() {
    var e = this.getViewportRoot();
    if (e)
      return {
        offsetLeft: e.offsetLeft || 0,
        offsetTop: e.offsetTop || 0
      };
  }, t.prototype.refresh = function(e) {
    var r;
    e && !W(e) ? r = { paintAll: !!e } : r = e || {};
    var n = Y(r.refresh, !0), i = Y(r.refreshHover, !1);
    if (i && (this._hoverLayerDirty = Gl), !n)
      return i && this._paintHoverList(this.storage.getDisplayList(!1)), this;
    var a = this.storage.getDisplayList(!0);
    this._updateLayerStatus(a, r.paintAll), this._redrawId = Math.random();
    var o = this._prevDisplayList;
    this._paintList(a, o, this._redrawId);
    var s = this._backgroundColor;
    return Ve(this._i, function(u, l, f, h) {
      u.refresh && u.refresh(h === 0 ? s : null);
    }, oh), this._opts.useDirtyRect && (this._prevDisplayList = a.slice()), this;
  }, t.prototype._paintHoverList = function(e) {
    var r = this._i.hoverlayer, n = this._hoverLayerDirty;
    if (this._hoverLayerDirty = Hl, n !== Hl && (!r && n === Gl && (r = this._i.hoverlayer = this._ensureLayer(Cg)), !!r)) {
      r.clear();
      for (var i = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, a, o = 0, s = e.length; o < s; o++) {
        var u = e[o];
        if (u.__inHover) {
          a || (a = r.ctx, a.save());
          var l = u.__hoverStyle, f = void 0;
          l && (f = u.style, u.style = l), yn(a, u, i), l && (u.style = f);
        }
      }
      a && (li(a, i), a.restore());
    }
  }, t.prototype.getHoverLayer = function() {
    return this._ensureLayer(Cg);
  }, t.prototype.paintOne = function(e, r) {
    e0(e, r);
  }, t.prototype._paintList = function(e, r, n) {
    if (this._redrawId === n) {
      var i = this._doPaintList(e, r);
      if (this._needsManuallyCompositing && this._compositeManually(), i)
        Ve(this._i, function(o) {
          o.afterBrush && o.afterBrush();
        }, Bo), this._paintHoverList(e);
      else {
        var a = this;
        ks(function() {
          a._paintList(e, r, n);
        });
      }
    }
  }, t.prototype._compositeManually = function() {
    var e = this._ensureLayer(cn).ctx, r = this._domRoot.width, n = this._domRoot.height;
    e.clearRect(0, 0, r, n), Ve(this._i, function(i) {
      i.virtual && e.drawImage(i.dom, 0, 0, r, n);
    }, ya);
  }, t.prototype._doPaintList = function(e, r) {
    var n = this, i = !0;
    return Ve(this._i, function(a) {
      var o = !1;
      if (ko(a, function(h) {
        (h.drawIdx < h.endIdx || h.notClearIdx >= 0) && (o = !0);
      }), !(!o && !a.__dirty)) {
        var s = n._opts.useDirtyRect && !zl(a) ? a.createRepaintRects(e, r, n._width, n._height) : null, u = n._i.layerStack[0], l = !0;
        if (a.__dirty) {
          l = !1, a.__dirty = !1;
          var f = a.zlevel === u.zl && a.zlevel2 === u.zl2 ? n._backgroundColor : null;
          a.clear(!1, f, s);
        }
        ko(a, function(h) {
          var c = n._paintPerCursor(a, h, e, s, l);
          i = i && c;
        });
      }
    }, Bo), ee.wxa && Ve(this._i, function(a) {
      a && a.ctx && a.ctx.draw && a.ctx.draw();
    }), i;
  }, t.prototype._paintPerCursor = function(e, r, n, i, a) {
    var o = e.ctx;
    if (i)
      if (!i.length)
        r.drawIdx = r.endIdx;
      else
        for (var s = this.dpr, u = 0; u < i.length; ++u) {
          var l = i[u];
          o.save(), o.beginPath(), o.rect(l.x * s, l.y * s, l.width * s, l.height * s), o.clip(), this._paintPerCursorInRect(e, r, n, l, a), o.restore();
        }
    else
      o.save(), this._paintPerCursorInRect(e, r, n, null, a), o.restore();
    return r.drawIdx >= r.endIdx;
  }, t.prototype._paintPerCursorInRect = function(e, r, n, i, a) {
    for (var o = {
      inHover: !1,
      allClipped: !1,
      prevEl: null,
      viewWidth: this._width,
      viewHeight: this._height,
      beforeBrushParam: { contentRetained: a }
    }, s = e.ctx, u = zl(e), l = u && ut.getTime(), f = r.drawIdx, h = r.notClearIdx, c = h >= 0 ? Math.min(h, f) : f; c < r.endIdx; c++) {
      var v = n[c];
      if (!(c < f && !v.notClear)) {
        if (v.__inHover && (this._hoverLayerDirty = Gl), i != null) {
          var d = v.getPaintRect();
          d && d.intersect(i) && (yn(s, v, o), v.setPrevPaintRect(d));
        } else
          yn(s, v, o);
        if (u) {
          var g = ut.getTime() - l;
          if (g > 15) {
            c++;
            break;
          }
        }
      }
    }
    li(s, o), r.drawIdx = Math.max(c, f);
  }, t.prototype.getLayer = function(e, r) {
    return this._ensureLayer(e, 0, r);
  }, t.prototype._ensureLayer = function(e, r, n) {
    r = r || 0;
    var i = this._singleCanvas;
    i && !this._needsManuallyCompositing && (e = cn, r = 0);
    var a = Ul(this._i, e)[r];
    return a || (a = Dg("zr_" + e + "." + r, this, e, r), this._layerConfig[e] && ce(a, this._layerConfig[e], !0), (n || i && e !== cn) && (a.virtual = !0), this._insertLayer(a, e, r, !1), a.initContext()), a;
  }, t.prototype.insertLayer = function(e, r) {
    this._insertLayer(r, e, 0, !1);
  }, t.prototype._insertLayer = function(e, r, n, i) {
    var a = this._i, o = a.layers, s = a.layerStack, u = this._domRoot, l = null;
    if (o[r] && o[r][n]) {
      process.env.NODE_ENV !== "production" && _n("ZLevel " + r + "." + n + " has been used already");
      return;
    }
    if (!zI(e)) {
      process.env.NODE_ENV !== "production" && _n("Layer of zlevel " + r + " is not valid");
      return;
    }
    for (var f = s.length, h = 0; h < f && (s[h].zl < r || s[h].zl === r && s[h].zl2 < n); )
      h++;
    if (h > 0 && (l = Ul(a, s[h - 1].zl)[s[h - 1].zl2]), s.splice(h, 0, { zl: r, zl2: n }), Ul(a, r)[n] = e, !i && !e.virtual)
      if (l) {
        var c = l.dom;
        c.nextSibling ? u.insertBefore(e.dom, c.nextSibling) : u.appendChild(e.dom);
      } else
        u.firstChild ? u.insertBefore(e.dom, u.firstChild) : u.appendChild(e.dom);
    e.painter || (e.painter = this);
  }, t.prototype.eachLayer = function(e, r) {
    return Ve(this._i, function(n, i) {
      e.call(r, n, i);
    });
  }, t.prototype.eachBuiltinLayer = function(e, r) {
    return Ve(this._i, function(n, i) {
      e.call(r, n, i);
    }, ya);
  }, t.prototype.eachOtherLayer = function(e, r) {
    return Ve(this._i, function(n, i) {
      e.call(r, n, i);
    }, oh);
  }, t.prototype.getLayers = function() {
    var e = {};
    return Ve(this._i, function(r, n, i) {
      e[r.id] = r;
    }), e;
  }, t.prototype._updateLayerStatus = function(e, r) {
    var n = this;
    if (n._singleCanvas)
      for (var i = 1; i < e.length; i++) {
        var a = e[i];
        if (a.zlevel !== e[i - 1].zlevel || a.incremental) {
          n._needsManuallyCompositing = !0;
          break;
        }
      }
    Ve(n._i, function(m) {
      m.__dirty = !1, ko(m, function(p) {
        p.used = !1, p.endIdxNew = 0, p.notClearIdx = -1;
      });
    }, Bo);
    for (var o, s = null, u = null, l = !1, f = 0, h = e.length; f < h; f++) {
      var a = e[f], c = a.zlevel, v = a.incremental, d = void 0;
      if (o !== c && (o = c, l = !1), v ? (l = !0, d = DT) : d = l ? CT : Uo, (!s || c !== s.zlevel || d !== s.zlevel2) && (s = n._ensureLayer(c, d), u = null, !s.__builtin__)) {
        _n("ZLevel " + c + " has been used by unknown layer " + s.id);
        continue;
      }
      if ((!u || v !== u.key) && (u = UI(s, v), !u.used))
        if (u.used = !0, !r && u.first === a.id) {
          var g = f - u.startIdx;
          u.startIdx = f, u.drawIdx += g, u.endIdx += g;
        } else
          s.__dirty = !0, u.first = a.id, u.startIdx = u.drawIdx = f, u.endIdx = f + 1;
      u.endIdxNew = f + 1, a.__dirty & rt && !a.__inHover && ((!v || !a.notClear && f < u.drawIdx) && (s.__dirty = !0), v && a.notClear && u.notClearIdx < 0 && (u.notClearIdx = f));
    }
    Ve(n._i, function(m) {
      for (var p = m.__cursorStack, y = m.__cursors, _ = p.length - 1; _ >= 0; _--) {
        var S = y.get(p[_]);
        if (!S.used)
          m.__dirty = !0, y.removeKey(p[_]), p.splice(_, 1);
        else {
          var b = S.endIdxNew;
          (zl(m) ? b < S.drawIdx : b !== S.endIdx || !b || e[b - 1].id !== S.last) && (m.__dirty = !0), S.endIdx = S.endIdxNew, S.last = b ? e[b - 1].id : NaN;
        }
      }
      m.__dirty && (ko(m, function(T) {
        T.drawIdx = T.startIdx;
      }), n._hoverLayerDirty === Hl && (n._hoverLayerDirty = FI));
    }, Bo);
  }, t.prototype.clear = function() {
    return Ve(this._i, function(e) {
      e.clear(), V0(e);
    }, ya), this;
  }, t.prototype.setBackgroundColor = function(e) {
    this._backgroundColor = e, Ve(this._i, function(r) {
      r.setUnpainted();
    });
  }, t.prototype.configLayer = function(e, r) {
    if (r) {
      var n = this._layerConfig;
      n[e] ? ce(n[e], r, !0) : n[e] = r, Ve(this._i, function(i, a) {
        ce(i, n[a], !0);
      });
    }
  }, t.prototype.delLayer = function(e) {
    for (var r = this._i.layerStack, n = this._i.layers, i = r.length - 1; i >= 0; i--) {
      var a = r[i];
      if (a.zl === e) {
        var o = n[e][a.zl2];
        if (o.__builtin__)
          continue;
        if (r.splice(i, 1), n[e][a.zl2] = void 0, !o.virtual) {
          var s = o.dom.parentNode;
          s && s.removeChild(o.dom);
        }
      }
    }
  }, t.prototype.resize = function(e, r) {
    if (this._domRoot.style) {
      var n = this._domRoot;
      n.style.display = "none";
      var i = this._opts, a = this.root;
      e != null && (i.width = e), r != null && (i.height = r), e = Lo(a, 0, i), r = Lo(a, 1, i), n.style.display = "", (this._width !== e || r !== this._height) && (n.style.width = e + "px", n.style.height = r + "px", Ve(this._i, function(o) {
        o.resize(e, r);
      }), this.refresh({ paintAll: !0 })), this._width = e, this._height = r;
    } else {
      if (e == null || r == null)
        return;
      this._width = e, this._height = r, this._ensureLayer(cn).resize(e, r);
    }
    return this;
  }, t.prototype.clearLayer = function(e) {
    x(this._i.layers[e], function(r) {
      r && !r.__builtin__ && r.clear();
    });
  }, t.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
  }, t.prototype.getRenderedCanvas = function(e) {
    if (e = e || {}, this._singleCanvas && !this._compositeManually)
      return this._i.layers[cn][0].dom;
    var r = new B0("image", this, e.pixelRatio || this.dpr);
    r.initContext(), r.clear(!1, e.backgroundColor || this._backgroundColor);
    var n = r.ctx;
    if (e.pixelRatio <= this.dpr) {
      this.refresh();
      var i = r.dom.width, a = r.dom.height;
      Ve(this._i, function(h) {
        h.__builtin__ ? n.drawImage(h.dom, 0, 0, i, a) : h.renderToCanvas && (n.save(), h.renderToCanvas(n), n.restore());
      });
    } else {
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        yn(n, f, o);
      }
      li(n, o);
    }
    return r.dom;
  }, t.prototype.getWidth = function() {
    return this._width;
  }, t.prototype.getHeight = function() {
    return this._height;
  }, t;
})();
function YI(t) {
  t.registerPainter("canvas", WI);
}
Fr([PD, sI, VI, EI, YI]);
class XI {
  constructor(e) {
    Ec(this, "chart");
    this.chart = XA(e, void 0, { renderer: "canvas" });
  }
  render(e, r) {
    if (!ZI(e))
      throw new Error("The line graph data is invalid.");
    const n = getComputedStyle(document.documentElement), i = n.getPropertyValue("--bs-body-color").trim() || "#212529", a = n.getPropertyValue("--cms-border").trim() || "#dee2e6", o = n.getPropertyValue("--cms-surface").trim() || "#ffffff", s = {
      animationDuration: 350,
      color: ["#457b9d", "#e76f51", "#2a9d8f", "#e9c46a"],
      grid: {
        top: 48,
        right: 24,
        bottom: 32,
        left: 52,
        containLabel: !0
      },
      legend: {
        top: 0,
        textStyle: { color: i }
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: o,
        borderColor: a,
        textStyle: { color: i }
      },
      xAxis: {
        type: "category",
        boundaryGap: !1,
        data: e.categories,
        axisLabel: { color: i },
        axisLine: { lineStyle: { color: a } }
      },
      yAxis: {
        type: r.scale === "logarithmic" ? "log" : "value",
        axisLabel: { color: i },
        splitLine: { lineStyle: { color: a } }
      },
      series: e.series.map((u) => ({
        type: "line",
        id: u.key,
        name: u.label,
        data: u.values,
        showSymbol: !1,
        smooth: !0,
        emphasis: { focus: "series" }
      }))
    };
    this.chart.setOption(s, !0);
  }
  resize() {
    this.chart.resize();
  }
  dispose() {
    this.chart.dispose();
  }
}
const qI = (t) => new XI(t);
function ZI(t) {
  if (typeof t != "object" || t === null || !("categories" in t) || !("series" in t))
    return !1;
  const e = t.categories, r = t.series;
  return !Array.isArray(e) || !e.every((n) => typeof n == "string") ? !1 : Array.isArray(r) && r.every((n) => typeof n != "object" || n === null || !("key" in n) || typeof n.key != "string" || !("label" in n) || typeof n.label != "string" || !("values" in n) || !Array.isArray(n.values) ? !1 : n.values.every((i) => typeof i == "number" || i === null) && n.values.length === e.length);
}
export {
  qI as createLineGraphRenderer
};
