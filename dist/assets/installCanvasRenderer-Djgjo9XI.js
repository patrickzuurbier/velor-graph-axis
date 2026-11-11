/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
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
var Nl = function(t, e) {
  return Nl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Nl(t, e);
};
function F(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Nl(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Qf = 12, f0 = "sans-serif", Mr = Qf + "px " + f0, h0 = 20, c0 = 100, v0 = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function d0(t) {
  var e = {};
  if (typeof JSON > "u")
    return e;
  for (var r = 0; r < t.length; r++) {
    var n = String.fromCharCode(r + 32), i = (t.charCodeAt(r) - h0) / c0;
    e[n] = i;
  }
  return e;
}
var p0 = d0(v0), st = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ (function() {
    var t, e;
    return function(r, n) {
      if (!t) {
        var i = st.createCanvas();
        t = i && i.getContext("2d");
      }
      if (t)
        return e !== n && (e = t.font = n || Mr), t.measureText(r);
      r = r || "", n = n || Mr;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || Qf, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * r.length;
      else
        for (var u = 0; u < r.length; u++) {
          var l = p0[r[u]];
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
}, tg = yi([
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
}, {}), rg = yi([
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
}, {}), mi = Object.prototype.toString, Os = Array.prototype, g0 = Os.forEach, m0 = Os.filter, Jf = Os.slice, y0 = Os.map, pc = (function() {
}).constructor, Va = pc ? pc.prototype : null, jf = "__proto__", lu = 2311, _0 = Math.pow(2, 53) - 1;
function ng() {
  return lu >= _0 && (lu = 0), lu++;
}
function fn() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  typeof console < "u" && console.error.apply(console, t);
}
function ne(t) {
  if (t == null || typeof t != "object")
    return t;
  var e = t, r = mi.call(t);
  if (r === "[object Array]") {
    if (!ji(t)) {
      e = [];
      for (var n = 0, i = t.length; n < i; n++)
        e[n] = ne(t[n]);
    }
  } else if (rg[r]) {
    if (!ji(t)) {
      var a = t.constructor;
      if (a.from)
        e = a.from(t);
      else {
        e = new a(t.length);
        for (var n = 0, i = t.length; n < i; n++)
          e[n] = t[n];
      }
    }
  } else if (!tg[r] && !ji(t) && !ri(t)) {
    e = {};
    for (var o in t)
      t.hasOwnProperty(o) && o !== jf && (e[o] = ne(t[o]));
  }
  return e;
}
function ce(t, e, r) {
  if (!H(e) || !H(t))
    return r ? ne(e) : t;
  for (var n in e)
    if (e.hasOwnProperty(n) && n !== jf) {
      var i = t[n], a = e[n];
      H(a) && H(i) && !B(a) && !B(i) && !ri(a) && !ri(i) && !gc(a) && !gc(i) && !ji(a) && !ji(i) ? ce(i, a, r) : (r || !(n in t)) && (t[n] = ne(e[n]));
    }
  return t;
}
function R(t, e) {
  if (Object.assign)
    Object.assign(t, e);
  else
    for (var r in e)
      e.hasOwnProperty(r) && r !== jf && (t[r] = e[r]);
  return t;
}
function S0(t, e, r) {
  t = t || {};
  for (var n = 0; n < r.length; n++) {
    var i = r[n];
    t[i] = e[i];
  }
  return t;
}
function ye(t, e, r) {
  for (var n = me(e), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    t[o] == null && (t[o] = e[o]);
  }
  return t;
}
function ue(t, e) {
  if (t) {
    if (t.indexOf)
      return t.indexOf(e);
    for (var r = 0, n = t.length; r < n; r++)
      if (t[r] === e)
        return r;
  }
  return -1;
}
function T0(t, e) {
  var r = t.prototype;
  function n() {
  }
  n.prototype = e.prototype, t.prototype = new n();
  for (var i in r)
    r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
  t.prototype.constructor = t, t.superClass = e;
}
function Qt(t, e, r) {
  if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && t[a] == null && (t[a] = e[a]);
    }
  else
    ye(t, e);
}
function tt(t) {
  return !t || typeof t == "string" ? !1 : typeof t.length == "number";
}
function w(t, e, r) {
  if (t && e)
    if (t.forEach && t.forEach === g0)
      t.forEach(e, r);
    else if (t.length === +t.length)
      for (var n = 0, i = t.length; n < i; n++)
        e.call(r, t[n], n, t);
    else
      for (var a in t)
        t.hasOwnProperty(a) && e.call(r, t[a], a, t);
}
function X(t, e, r) {
  if (!t)
    return [];
  if (!e)
    return eh(t);
  if (t.map && t.map === y0)
    return t.map(e, r);
  for (var n = [], i = 0, a = t.length; i < a; i++)
    n.push(e.call(r, t[i], i, t));
  return n;
}
function yi(t, e, r, n) {
  if (t && e) {
    for (var i = 0, a = t.length; i < a; i++)
      r = e.call(n, r, t[i], i, t);
    return r;
  }
}
function Be(t, e, r) {
  if (!t)
    return [];
  if (!e)
    return eh(t);
  if (t.filter && t.filter === m0)
    return t.filter(e, r);
  for (var n = [], i = 0, a = t.length; i < a; i++)
    e.call(r, t[i], i, t) && n.push(t[i]);
  return n;
}
function x0(t, e, r) {
  if (t && e) {
    for (var n = 0, i = t.length; n < i; n++)
      if (e.call(r, t[n], n, t))
        return t[n];
  }
}
function me(t) {
  if (!t)
    return [];
  if (Object.keys)
    return Object.keys(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(r);
  return e;
}
function w0(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return function() {
    return t.apply(e, r.concat(Jf.call(arguments)));
  };
}
var _e = Va && $(Va.bind) ? Va.call.bind(Va.bind) : w0;
function Ee(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return function() {
    return t.apply(this, e.concat(Jf.call(arguments)));
  };
}
function B(t) {
  return Array.isArray ? Array.isArray(t) : mi.call(t) === "[object Array]";
}
function $(t) {
  return typeof t == "function";
}
function V(t) {
  return typeof t == "string";
}
function Yo(t) {
  return mi.call(t) === "[object String]";
}
function we(t) {
  return typeof t == "number";
}
function H(t) {
  var e = typeof t;
  return e === "function" || !!t && e === "object";
}
function gc(t) {
  return !!tg[mi.call(t)];
}
function Xe(t) {
  return !!rg[mi.call(t)];
}
function ri(t) {
  return typeof t == "object" && typeof t.nodeType == "number" && typeof t.ownerDocument == "object";
}
function Ns(t) {
  return t.colorStops != null;
}
function b0(t) {
  return t.image != null;
}
function C0(t) {
  return mi.call(t) === "[object RegExp]";
}
function ni(t) {
  return t !== t;
}
function ii() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] != null)
      return t[r];
}
function G(t, e) {
  return t ?? e;
}
function wr(t, e, r) {
  return t ?? e ?? r;
}
function eh(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return Jf.apply(t, e);
}
function th(t) {
  if (typeof t == "number")
    return [t, t, t, t];
  var e = t.length;
  return e === 2 ? [t[0], t[1], t[0], t[1]] : e === 3 ? [t[0], t[1], t[2], t[1]] : t;
}
function O(t, e) {
  if (!t)
    throw new Error(e);
}
function zt(t) {
  return t == null ? null : typeof t.trim == "function" ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var ig = "__ec_primitive__";
function Pl(t) {
  t[ig] = !0;
}
function ji(t) {
  return t[ig];
}
var D0 = (function() {
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
    return me(this.data);
  }, t.prototype.forEach = function(e) {
    var r = this.data;
    for (var n in r)
      r.hasOwnProperty(n) && e(r[n], n);
  }, t;
})(), ag = typeof Map == "function";
function E0() {
  return ag ? /* @__PURE__ */ new Map() : new D0();
}
var M0 = (function() {
  function t(e) {
    var r = B(e);
    this.data = E0();
    var n = this;
    e instanceof t ? e.each(i) : e && w(e, i);
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
    return ag ? Array.from(e) : e;
  }, t.prototype.removeKey = function(e) {
    this.data.delete(e);
  }, t;
})();
function W(t) {
  return new M0(t);
}
function A0(t, e) {
  for (var r = new t.constructor(t.length + e.length), n = 0; n < t.length; n++)
    r[n] = t[n];
  for (var i = t.length, n = 0; n < e.length; n++)
    r[n + i] = e[n];
  return r;
}
function Ps(t, e) {
  var r;
  if (Object.create)
    r = Object.create(t);
  else {
    var n = function() {
    };
    n.prototype = t, r = new n();
  }
  return e && R(r, e), r;
}
function og(t) {
  var e = t.style;
  e.webkitUserSelect = "none", e.userSelect = "none", e.webkitTapHighlightColor = "rgba(0,0,0,0)", e["-webkit-touch-callout"] = "none";
}
function et(t, e) {
  return t.hasOwnProperty(e);
}
function Ve() {
}
var I0 = 180 / Math.PI, L0 = /* @__PURE__ */ (function() {
  function t() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return t;
})(), O0 = /* @__PURE__ */ (function() {
  function t() {
    this.browser = new L0(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return t;
})(), q = new O0();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (q.wxa = !0, q.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? q.worker = !0 : !q.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (q.node = !0, q.svgSupported = !0) : N0(navigator.userAgent, q);
function N0(t, e) {
  var r = e.browser, n = t.match(/Firefox\/([\d.]+)/), i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(t);
  n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1], r.newEdge = +a[1].split(".")[0] > 18), o && (r.weChat = !0), e.svgSupported = typeof SVGRect < "u", e.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, e.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11);
  var s = e.domSupported = typeof document < "u";
  if (s) {
    var u = document.documentElement.style;
    e.transform3dSupported = (r.ie && "transition" in u || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in u) && !("OTransition" in u), e.transformSupported = e.transform3dSupported || r.ie && +r.version >= 9;
  }
}
var P0 = ".", Nr = "___EC__COMPONENT__CONTAINER___", sg = "___EC__EXTENDED_CLASS___";
function Ht(t) {
  var e = {
    main: "",
    sub: ""
  };
  if (t) {
    var r = t.split(P0);
    e.main = r[0] || "", e.sub = r[1] || "";
  }
  return e;
}
function R0(t) {
  O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
}
function k0(t) {
  return !!(t && t[sg]);
}
function rh(t, e) {
  t.$constructor = t, t.extend = function(r) {
    process.env.NODE_ENV !== "production" && w(e, function(a) {
      r[a] || console.warn("Method `" + a + "` should be implemented" + (r.type ? " in " + r.type : "") + ".");
    });
    var n = this, i;
    return B0(n) ? i = /** @class */
    (function(a) {
      F(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    })(n) : (i = function() {
      (r.$constructor || n).apply(this, arguments);
    }, T0(i, this)), R(i.prototype, r), i[sg] = !0, i.extend = this.extend, i.superCall = z0, i.superApply = H0, i.superClass = n, i;
  };
}
function B0(t) {
  return $(t) && /^class\s/.test(Function.prototype.toString.call(t));
}
function ug(t, e) {
  t.extend = e.extend;
}
var V0 = Math.round(Math.random() * 10);
function F0(t) {
  var e = ["__\0is_clz", V0++].join("_");
  t.prototype[e] = !0, process.env.NODE_ENV !== "production" && O(!t.isInstance, 'The method "is" can not be defined.'), t.isInstance = function(r) {
    return !!(r && r[e]);
  };
}
function z0(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return this.superClass.prototype[e].apply(t, r);
}
function H0(t, e, r) {
  return this.superClass.prototype[e].apply(t, r);
}
function Rs(t) {
  var e = {};
  t.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      R0(i), n.prototype.type = i;
      var a = Ht(i);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && e[a.main] && console.warn(a.main + " exists."), e[a.main] = n;
      else if (a.sub !== Nr) {
        var o = r(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, t.getClass = function(n, i, a) {
    var o = e[n];
    if (o && o[Nr] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, t.getClassesByMainType = function(n) {
    var i = Ht(n), a = [], o = e[i.main];
    return o && o[Nr] ? w(o, function(s, u) {
      u !== Nr && a.push(s);
    }) : a.push(o), a;
  }, t.hasClass = function(n) {
    var i = Ht(n);
    return !!e[i.main];
  }, t.getAllClassMainTypes = function() {
    var n = [];
    return w(e, function(i, a) {
      n.push(a);
    }), n;
  }, t.hasSubTypes = function(n) {
    var i = Ht(n), a = e[i.main];
    return a && a[Nr];
  };
  function r(n) {
    var i = e[n.main];
    return (!i || !i[Nr]) && (i = e[n.main] = {}, i[Nr] = !0), i;
  }
}
function va(t, e) {
  for (var r = 0; r < t.length; r++)
    t[r][1] || (t[r][1] = t[r][0]);
  return e = e || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < t.length; s++) {
      var u = t[s][1];
      if (!(i && ue(i, u) >= 0 || a && ue(a, u) < 0)) {
        var l = n.getShallow(u, e);
        l != null && (o[t[s][0]] = l);
      }
    }
    return o;
  };
}
var G0 = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], U0 = va(G0), W0 = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getAreaStyle = function(e, r) {
      return U0(this, e, r);
    }, t;
  })()
), lg = /* @__PURE__ */ (function() {
  function t(e) {
    this.value = e;
  }
  return t;
})(), Y0 = (function() {
  function t() {
    this._len = 0;
  }
  return t.prototype.insert = function(e) {
    var r = new lg(e);
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
})(), ai = (function() {
  function t(e) {
    this._list = new Y0(), this._maxSize = 10, this._map = {}, this._maxSize = e;
  }
  return t.prototype.put = function(e, r) {
    var n = this._list, i = this._map, a = null;
    if (i[e] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = n.head;
        n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = r : s = new lg(r), s.key = e, n.insertEntry(s), i[e] = s;
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
})(), Rl = new ai(50);
function X0(t) {
  if (typeof t == "string") {
    var e = Rl.get(t);
    return e && e.image;
  } else
    return t;
}
function fg(t, e, r, n, i) {
  if (t)
    if (typeof t == "string") {
      if (e && e.__zrImageSrc === t || !r)
        return e;
      var a = Rl.get(t), o = { hostEl: r, cb: n, cbPayload: i };
      return a ? (e = a.image, !ks(e) && a.pending.push(o)) : (e = st.loadImage(t, mc, mc), e.__zrImageSrc = t, Rl.put(t, e.__cachedImgObj = {
        image: e,
        pending: [o]
      })), e;
    } else
      return t;
  else return e;
}
function mc() {
  var t = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var e = 0; e < t.pending.length; e++) {
    var r = t.pending[e], n = r.cb;
    n && n(this, r.cbPayload), r.hostEl.dirty();
  }
  t.pending.length = 0;
}
function ks(t) {
  return t && t.width && t.height;
}
function Gt() {
  return [1, 0, 0, 1, 0, 0];
}
function Ma(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
}
function nh(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
}
function ea(t, e, r) {
  var n = e[0] * r[0] + e[2] * r[1], i = e[1] * r[0] + e[3] * r[1], a = e[0] * r[2] + e[2] * r[3], o = e[1] * r[2] + e[3] * r[3], s = e[0] * r[4] + e[2] * r[5] + e[4], u = e[1] * r[4] + e[3] * r[5] + e[5];
  return t[0] = n, t[1] = i, t[2] = a, t[3] = o, t[4] = s, t[5] = u, t;
}
function kl(t, e, r) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + r[0], t[5] = e[5] + r[1], t;
}
function ih(t, e, r, n) {
  n === void 0 && (n = [0, 0]);
  var i = e[0], a = e[2], o = e[4], s = e[1], u = e[3], l = e[5], f = Math.sin(r), h = Math.cos(r);
  return t[0] = i * h + s * f, t[1] = -i * f + s * h, t[2] = a * h + u * f, t[3] = -a * f + h * u, t[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], t[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], t;
}
function Z0(t, e, r) {
  var n = r[0], i = r[1];
  return t[0] = e[0] * n, t[1] = e[1] * i, t[2] = e[2] * n, t[3] = e[3] * i, t[4] = e[4] * n, t[5] = e[5] * i, t;
}
function Aa(t, e) {
  var r = e[0], n = e[2], i = e[4], a = e[1], o = e[3], s = e[5], u = r * o - a * n;
  return u ? (u = 1 / u, t[0] = o * u, t[1] = -a * u, t[2] = -n * u, t[3] = r * u, t[4] = (n * s - o * i) * u, t[5] = (a * i - r * s) * u, t) : null;
}
function _i(t, e) {
  return t == null && (t = 0), e == null && (e = 0), [t, e];
}
function $0(t) {
  return [t[0], t[1]];
}
function fu(t, e, r) {
  return t[0] = e, t[1] = r, t;
}
function yc(t, e, r) {
  return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t;
}
function q0(t, e, r) {
  return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t;
}
function K0(t) {
  return Math.sqrt(Q0(t));
}
function Q0(t) {
  return t[0] * t[0] + t[1] * t[1];
}
function hu(t, e, r) {
  return t[0] = e[0] * r, t[1] = e[1] * r, t;
}
function J0(t, e) {
  var r = K0(e);
  return r === 0 ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / r, t[1] = e[1] / r), t;
}
function Bl(t, e) {
  return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
}
var j0 = Bl;
function e1(t, e) {
  return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
}
var Kn = e1;
function Ct(t, e, r) {
  var n = e[0], i = e[1];
  return t[0] = r[0] * n + r[2] * i + r[4], t[1] = r[1] * n + r[3] * i + r[5], t;
}
function Wn(t, e, r) {
  return t[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t;
}
function Yn(t, e, r) {
  return t[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t;
}
var de = (function() {
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
})(), on = Math.min, Xn = Math.max, Vl = Math.abs, _c = ["x", "y"], t1 = ["width", "height"], Pr = new de(), Rr = new de(), kr = new de(), Br = new de(), ot = hg(), Yi = ot.minTv, Fl = ot.maxTv, ta = [0, 0], Z = (function() {
  function t(e, r, n, i) {
    cu(this, e, r, n, i);
  }
  return t.set = function(e, r, n, i, a) {
    return i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), e.x = r, e.y = n, e.width = i, e.height = a, e;
  }, t.prototype.union = function(e) {
    var r = on(e.x, this.x), n = on(e.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = Xn(e.x + e.width, this.x + this.width) - r : this.width = e.width, isFinite(this.y) && isFinite(this.height) ? this.height = Xn(e.y + e.height, this.y + this.height) - n : this.height = e.height, this.x = r, this.y = n;
  }, t.prototype.applyTransform = function(e) {
    t.applyTransform(this, this, e);
  }, t.prototype.calculateTransform = function(e) {
    return r1(Gt(), this, e);
  }, t.prototype.intersect = function(e, r, n) {
    return t.intersect(this, e, r, n);
  }, t.intersect = function(e, r, n, i) {
    n && de.set(n, 0, 0);
    var a = i && i.outIntersectRect || null, o = i && i.clamp;
    if (a && (a.x = a.y = a.width = a.height = NaN), !e || !r)
      return !1;
    e instanceof t || (e = cu(n1, e.x, e.y, e.width, e.height)), r instanceof t || (r = cu(i1, r.x, r.y, r.width, r.height));
    var s = !!n;
    ot.reset(i, s);
    var u = ot.touchThreshold, l = e.x + u, f = e.x + e.width - u, h = e.y + u, c = e.y + e.height - u, v = r.x + u, d = r.x + r.width - u, m = r.y + u, p = r.y + r.height - u;
    if (l > f || h > c || v > d || m > p)
      return !1;
    var g = !(f < v || d < l || c < m || p < h);
    return (s || a) && (ta[0] = 1 / 0, ta[1] = 0, Tc(l, f, v, d, 0, s, a, o), Tc(h, c, m, p, 1, s, a, o), s && de.copy(n, g ? ot.useDir ? ot.dirMinTv : Yi : Fl)), g;
  }, t.contain = function(e, r, n) {
    return r >= e.x && r <= e.x + e.width && n >= e.y && n <= e.y + e.height;
  }, t.prototype.contain = function(e, r) {
    return t.contain(this, e, r);
  }, t.prototype.clone = function() {
    return new t(this.x, this.y, this.width, this.height);
  }, t.prototype.copy = function(e) {
    Sc(this, e);
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
      e !== r && Sc(e, r);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      e.x = r.x * i + o, e.y = r.y * a + s, e.width = r.width * i, e.height = r.height * a, e.width < 0 && (e.x += e.width, e.width = -e.width), e.height < 0 && (e.y += e.height, e.height = -e.height);
      return;
    }
    Pr.x = kr.x = r.x, Pr.y = Br.y = r.y, Rr.x = Br.x = r.x + r.width, Rr.y = kr.y = r.y + r.height, Pr.transform(n), Br.transform(n), Rr.transform(n), kr.transform(n), e.x = on(Pr.x, Rr.x, kr.x, Br.x), e.y = on(Pr.y, Rr.y, kr.y, Br.y);
    var u = Xn(Pr.x, Rr.x, kr.x, Br.x), l = Xn(Pr.y, Rr.y, kr.y, Br.y);
    e.width = u - e.x, e.height = l - e.y;
  }, t.calculateTransform = function(e, r, n) {
    var i = n.width / r.width, a = n.height / r.height;
    return e = Ma(e || []), kl(e, e, fu(vu, -r.x, -r.y)), Z0(e, e, fu(vu, i, a)), kl(e, e, fu(vu, n.x, n.y)), e;
  }, t;
})();
Z.create;
var cu = Z.set, Sc = Z.copy, r1 = Z.calculateTransform;
Z.applyTransform;
Z.contain;
var n1 = new Z(0, 0, 0, 0), i1 = new Z(0, 0, 0, 0), vu = [];
function Tc(t, e, r, n, i, a, o, s) {
  var u = Vl(e - r), l = Vl(n - t), f = on(u, l), h = _c[i], c = _c[1 - i], v = t1[i];
  e < r || n < t ? u < l ? (a && (Fl[h] = -u), s && (o[h] = e, o[v] = 0)) : (a && (Fl[h] = l), s && (o[h] = t, o[v] = 0)) : (o && (o[h] = Xn(t, r), o[v] = on(e, n) - o[h]), a && (f < ta[0] || ot.useDir) && (ta[0] = on(f, ta[0]), (u < l || !ot.bidirectional) && (Yi[h] = u, Yi[c] = 0, ot.useDir && ot.calcDirMTV()), (u >= l || !ot.bidirectional) && (Yi[h] = -l, Yi[c] = 0, ot.useDir && ot.calcDirMTV())));
}
function hg() {
  var t = 0, e = new de(), r = new de(), n = {
    minTv: new de(),
    maxTv: new de(),
    useDir: !1,
    dirMinTv: new de(),
    touchThreshold: 0,
    bidirectional: !0,
    negativeSize: !1,
    reset: function(a, o) {
      n.touchThreshold = 0, a && a.touchThreshold != null && (n.touchThreshold = Xn(0, a.touchThreshold)), n.negativeSize = !1, o && (n.minTv.set(1 / 0, 1 / 0), n.maxTv.set(0, 0), n.useDir = !1, a && a.direction != null && (n.useDir = !0, n.dirMinTv.copy(n.minTv), r.copy(n.minTv), t = a.direction, n.bidirectional = a.bidirectional == null || !!a.bidirectional, n.bidirectional || e.set(Math.cos(t), Math.sin(t))));
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
    return Vl(a) < 1e-10;
  }
  return n;
}
function Ut(t) {
  Fa || (Fa = new ai(100)), t = t || Mr;
  var e = Fa.get(t);
  return e || (e = {
    font: t,
    strWidthCache: new ai(500),
    asciiWidthMap: null,
    asciiWidthMapTried: !1,
    stWideCharWidth: st.measureText("国", t).width,
    asciiCharWidth: st.measureText("a", t).width
  }, Fa.put(t, e)), e;
}
var Fa;
function a1(t) {
  if (!(du >= xc)) {
    t = t || Mr;
    for (var e = [], r = +/* @__PURE__ */ new Date(), n = 0; n <= 127; n++)
      e[n] = st.measureText(String.fromCharCode(n), t).width;
    var i = +/* @__PURE__ */ new Date() - r;
    return i > 16 ? du = xc : i > 2 && du++, e;
  }
}
var du = 0, xc = 5;
function cg(t, e) {
  return t.asciiWidthMapTried || (t.asciiWidthMap = a1(t.font), t.asciiWidthMapTried = !0), 0 <= e && e <= 127 ? t.asciiWidthMap != null ? t.asciiWidthMap[e] : t.asciiCharWidth : t.stWideCharWidth;
}
function Wt(t, e) {
  var r = t.strWidthCache, n = r.get(e);
  return n == null && (n = st.measureText(e, t.font).width, r.put(e, n)), n;
}
function wc(t, e, r, n) {
  var i = Wt(Ut(e), t), a = Bs(e), o = oi(0, i, r), s = hn(0, a, n), u = new Z(o, s, i, a);
  return u;
}
function vg(t, e, r, n) {
  var i = ((t || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return wc(i[0], e, r, n);
  for (var o = new Z(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = wc(i[s], e, r, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function oi(t, e, r, n) {
  return r === "right" ? n ? t += e : t -= e : r === "center" && (n ? t += e / 2 : t -= e / 2), t;
}
function hn(t, e, r, n) {
  return r === "middle" ? n ? t += e / 2 : t -= e / 2 : r === "bottom" && (n ? t += e : t -= e), t;
}
function Bs(t) {
  return Ut(t).stWideCharWidth;
}
function si(t, e) {
  return typeof t == "string" ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
}
function dg(t, e, r) {
  var n = e.position || "inside", i = e.distance != null ? e.distance : 5, a = r.height, o = r.width, s = a / 2, u = r.x, l = r.y, f = "left", h = "top";
  if (n instanceof Array)
    u += si(n[0], r.width), l += si(n[1], r.height), f = null, h = null;
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
var pu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function o1(t, e, r, n, i, a) {
  if (!r) {
    t.text = "", t.isTruncated = !1;
    return;
  }
  var o = (e + "").split(`
`);
  a = pg(r, n, i, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    gg(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  t.text = o.join(`
`), t.isTruncated = s;
}
function pg(t, e, r, n) {
  n = n || {};
  var i = R({}, n);
  r = G(r, "..."), i.maxIterations = G(n.maxIterations, 2);
  var a = i.minChar = G(n.minChar, 0), o = i.fontMeasureInfo = Ut(e), s = o.asciiCharWidth;
  i.placeholder = G(n.placeholder, "");
  for (var u = t = Math.max(0, t - 1), l = 0; l < a && u >= s; l++)
    u -= s;
  var f = Wt(o, r);
  return f > u && (r = "", f = 0), u = t - f, i.ellipsis = r, i.ellipsisWidth = f, i.contentWidth = u, i.containerWidth = t, i;
}
function gg(t, e, r) {
  var n = r.containerWidth, i = r.contentWidth, a = r.fontMeasureInfo;
  if (!n) {
    t.textLine = "", t.isTruncated = !1;
    return;
  }
  var o = Wt(a, e);
  if (o <= n) {
    t.textLine = e, t.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= i || s >= r.maxIterations) {
      e += r.ellipsis;
      break;
    }
    var u = s === 0 ? s1(e, i, a) : o > 0 ? Math.floor(e.length * i / o) : 0;
    e = e.substr(0, u), o = Wt(a, e);
  }
  e === "" && (e = r.placeholder), t.textLine = e, t.isTruncated = !0;
}
function s1(t, e, r) {
  for (var n = 0, i = 0, a = t.length; i < a && n < e; i++)
    n += cg(r, t.charCodeAt(i));
  return i;
}
function u1(t, e, r, n) {
  var i = ah(t), a = e.overflow, o = e.padding, s = o ? o[1] + o[3] : 0, u = o ? o[0] + o[2] : 0, l = e.font, f = a === "truncate", h = Bs(l), c = G(e.lineHeight, h), v = e.lineOverflow === "truncate", d = !1, m = e.width;
  m == null && r != null && (m = r - s);
  var p = e.height;
  p == null && n != null && (p = n - u);
  var g;
  m != null && (a === "break" || a === "breakAll") ? g = i ? mg(i, e.font, m, a === "breakAll", 0).lines : [] : g = i ? i.split(`
`) : [];
  var y = g.length * c;
  if (p == null && (p = y), y > p && v) {
    var _ = Math.floor(p / c);
    d = d || g.length > _, g = g.slice(0, _), y = g.length * c;
  }
  if (i && f && m != null)
    for (var S = pg(m, l, e.ellipsis, {
      minChar: e.truncateMinChar,
      placeholder: e.placeholder
    }), T = {}, x = 0; x < g.length; x++)
      gg(T, g[x], S), g[x] = T.textLine, d = d || T.isTruncated;
  for (var b = p, C = 0, E = Ut(l), x = 0; x < g.length; x++)
    C = Math.max(Wt(E, g[x]), C);
  m == null && (m = C);
  var D = m;
  return b += u, D += s, {
    lines: g,
    height: p,
    outerWidth: D,
    outerHeight: b,
    lineHeight: c,
    calculatedLineHeight: h,
    contentWidth: C,
    contentHeight: y,
    width: m,
    isTruncated: d
  };
}
var l1 = /* @__PURE__ */ (function() {
  function t() {
  }
  return t;
})(), bc = /* @__PURE__ */ (function() {
  function t(e) {
    this.tokens = [], e && (this.tokens = e);
  }
  return t;
})(), f1 = /* @__PURE__ */ (function() {
  function t() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return t;
})();
function h1(t, e, r, n, i) {
  var a = new f1(), o = ah(t);
  if (!o)
    return a;
  var s = e.padding, u = s ? s[1] + s[3] : 0, l = s ? s[0] + s[2] : 0, f = e.width;
  f == null && r != null && (f = r - u);
  var h = e.height;
  h == null && n != null && (h = n - l);
  for (var c = e.overflow, v = (c === "break" || c === "breakAll") && f != null ? { width: f, accumWidth: 0, breakAll: c === "breakAll" } : null, d = pu.lastIndex = 0, m; (m = pu.exec(o)) != null; ) {
    var p = m.index;
    p > d && gu(a, o.substring(d, p), e, v), gu(a, m[2], e, v, m[1]), d = pu.lastIndex;
  }
  d < o.length && gu(a, o.substring(d, o.length), e, v);
  var g = [], y = 0, _ = 0, S = c === "truncate", T = e.lineOverflow === "truncate", x = {};
  function b(he, rt, tr) {
    he.width = rt, he.lineHeight = tr, y += tr, _ = Math.max(_, rt);
  }
  e: for (var C = 0; C < a.lines.length; C++) {
    for (var E = a.lines[C], D = 0, M = 0, I = 0; I < E.tokens.length; I++) {
      var A = E.tokens[I], L = A.styleName && e.rich[A.styleName] || {}, k = A.textPadding = L.padding, N = k ? k[1] + k[3] : 0, z = A.font = L.font || e.font;
      A.contentHeight = Bs(z);
      var Q = G(L.height, A.contentHeight);
      if (A.innerHeight = Q, k && (Q += k[0] + k[2]), A.height = Q, A.lineHeight = wr(L.lineHeight, e.lineHeight, Q), A.align = L && L.align || i, A.verticalAlign = L && L.verticalAlign || "middle", T && h != null && y + A.lineHeight > h) {
        var ee = a.lines.length;
        I > 0 ? (E.tokens = E.tokens.slice(0, I), b(E, M, D), a.lines = a.lines.slice(0, C + 1)) : a.lines = a.lines.slice(0, C), a.isTruncated = a.isTruncated || a.lines.length < ee;
        break e;
      }
      var te = L.width, J = te == null || te === "auto";
      if (typeof te == "string" && te.charAt(te.length - 1) === "%")
        A.percentWidth = te, g.push(A), A.contentWidth = Wt(Ut(z), A.text);
      else {
        if (J) {
          var re = L.backgroundColor, j = re && re.image;
          j && (j = X0(j), ks(j) && (A.width = Math.max(A.width, j.width * Q / j.height)));
        }
        var U = S && f != null ? f - M : null;
        U != null && U < A.width ? !J || U < N ? (A.text = "", A.width = A.contentWidth = 0) : (o1(x, A.text, U - N, z, e.ellipsis, { minChar: e.truncateMinChar }), A.text = x.text, a.isTruncated = a.isTruncated || x.isTruncated, A.width = A.contentWidth = Wt(Ut(z), A.text)) : A.contentWidth = Wt(Ut(z), A.text);
      }
      A.width += N, M += A.width, L && (D = Math.max(D, A.lineHeight));
    }
    b(E, M, D);
  }
  a.outerWidth = a.width = G(f, _), a.outerHeight = a.height = G(h, y), a.contentHeight = y, a.contentWidth = _, a.outerWidth += u, a.outerHeight += l;
  for (var C = 0; C < g.length; C++) {
    var A = g[C], se = A.percentWidth;
    A.width = parseInt(se, 10) / 100 * a.width;
  }
  return a;
}
function gu(t, e, r, n, i) {
  var a = e === "", o = i && r.rich[i] || {}, s = t.lines, u = o.font || r.font, l = !1, f, h;
  if (n) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = si(o.width, n.width) + v;
      s.length > 0 && d + n.accumWidth > n.width && (f = e.split(`
`), l = !0), n.accumWidth = d;
    } else {
      var m = mg(e, u, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = m.accumWidth + v, h = m.linesWidths, f = m.lines;
    }
  }
  f || (f = e.split(`
`));
  for (var p = Ut(u), g = 0; g < f.length; g++) {
    var y = f[g], _ = new l1();
    if (_.styleName = i, _.text = y, _.isLineHolder = !y && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[g] : Wt(p, y), !g && !l) {
      var S = (s[s.length - 1] || (s[0] = new bc())).tokens, T = S.length;
      T === 1 && S[0].isLineHolder ? S[0] = _ : (y || !T || a) && S.push(_);
    } else
      s.push(new bc([_]));
  }
}
function c1(t) {
  var e = t.charCodeAt(0);
  return e >= 32 && e <= 591 || e >= 880 && e <= 4351 || e >= 4608 && e <= 5119 || e >= 7680 && e <= 8303;
}
var v1 = yi(",&?/;] ".split(""), function(t, e) {
  return t[e] = !0, t;
}, {});
function d1(t) {
  return c1(t) ? !!v1[t] : !0;
}
function mg(t, e, r, n, i) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = Ut(e), c = 0; c < t.length; c++) {
    var v = t.charAt(c);
    if (v === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var d = cg(h, v.charCodeAt(0)), m = n ? !1 : !d1(v);
    if (a.length ? f + d > r : i + f + d > r) {
      f ? (s || u) && (m ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += v, l += d, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = v, f = d)) : m ? (a.push(u), o.push(l), u = v, l = d) : (a.push(v), o.push(d));
      continue;
    }
    f += d, m ? (u += v, l += d) : (u && (s += u, u = "", l = 0), s += v);
  }
  return u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
function Cc(t, e, r, n, i, a) {
  if (t.baseX = r, t.baseY = n, t.outerWidth = t.outerHeight = null, !!e) {
    var o = e.width * 2, s = e.height * 2;
    Z.set(Dc, oi(r, o, i), hn(n, s, a), o, s), Z.intersect(e, Dc, null, Ec);
    var u = Ec.outIntersectRect;
    t.outerWidth = u.width, t.outerHeight = u.height, t.baseX = oi(u.x, u.width, i, !0), t.baseY = hn(u.y, u.height, a, !0);
  }
}
var Dc = new Z(0, 0, 0, 0), Ec = { outIntersectRect: {}, clamp: !0 };
function ah(t) {
  return t != null ? t += "" : t = "";
}
function p1(t) {
  var e = ah(t.text), r = t.font, n = Wt(Ut(r), e), i = Bs(r);
  return zl(t, n, i, null);
}
function zl(t, e, r, n) {
  var i = new Z(oi(t.x || 0, e, t.textAlign), hn(t.y || 0, r, t.textBaseline), e, r), a = n ?? (yg(t) ? t.lineWidth : 0);
  return a > 0 && (i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a), i;
}
function yg(t) {
  var e = t.stroke;
  return e != null && e !== "none" && t.lineWidth > 0;
}
var Mc = Ma, Ac = 5e-5;
function Vr(t) {
  return t > Ac || t < -Ac;
}
var Fr = [], Cn = [], mu = Gt(), yu = Math.abs, Ia = (function() {
  function t() {
  }
  return t.prototype.getLocalTransform = function(e) {
    return g1(this, e);
  }, t.prototype.setPosition = function(e) {
    this.x = e[0], this.y = e[1];
  }, t.prototype.setScale = function(e) {
    this.scaleX = e[0], this.scaleY = e[1];
  }, t.prototype.setSkew = function(e) {
    this.skewX = e[0], this.skewY = e[1];
  }, t.prototype.setOrigin = function(e) {
    this.originX = e[0], this.originY = e[1];
  }, t.prototype.needLocalTransform = function() {
    return Vr(this.rotation) || Vr(this.x) || Vr(this.y) || Vr(this.scaleX - 1) || Vr(this.scaleY - 1) || Vr(this.skewX) || Vr(this.skewY);
  }, t.prototype.updateTransform = function() {
    var e = this.parent && this.parent.transform, r = this.needLocalTransform(), n = this.transform;
    if (!(r || e)) {
      n && (Mc(n), this.invTransform = null);
      return;
    }
    n = n || Gt(), r ? this.getLocalTransform(n) : Mc(n), e && (r ? ea(n, e, n) : nh(n, e)), this.transform = n, this._resolveGlobalScaleRatio(n), this.invTransform = this.invTransform || Gt(), Aa(this.invTransform, n);
  }, t.prototype._resolveGlobalScaleRatio = function(e) {
    var r = this.globalScaleRatio;
    if (r != null && r !== 1) {
      this.getGlobalScale(Fr);
      var n = Fr[0] < 0 ? -1 : 1, i = Fr[1] < 0 ? -1 : 1, a = ((Fr[0] - n) * r + n) / Fr[0] || 0, o = ((Fr[1] - i) * r + i) / Fr[1] || 0;
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
      e && e.transform && (e.invTransform = e.invTransform || Gt(), ea(Cn, e.invTransform, r), r = Cn);
      var n = this.originX, i = this.originY;
      (n || i) && (mu[4] = n, mu[5] = i, ea(Cn, r, mu), Cn[4] -= n, Cn[5] -= i, r = Cn), this.setLocalTransform(r);
    }
  }, t.prototype.getGlobalScale = function(e) {
    var r = this.transform;
    return e = e || [], r ? (e[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), e[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (e[0] = -e[0]), r[3] < 0 && (e[1] = -e[1]), e) : (e[0] = 1, e[1] = 1, e);
  }, t.prototype.transformCoordToLocal = function(e, r) {
    var n = [e, r], i = this.invTransform;
    return i && Ct(n, n, i), n;
  }, t.prototype.transformCoordToGlobal = function(e, r) {
    var n = [e, r], i = this.transform;
    return i && Ct(n, n, i), n;
  }, t.prototype.getLineScale = function() {
    var e = this.transform;
    return e && yu(e[0] - 1) > 1e-10 && yu(e[3] - 1) > 1e-10 ? Math.sqrt(yu(e[0] * e[3] - e[2] * e[1])) : 1;
  }, t.prototype.copyTransform = function(e) {
    Xo(this, e);
  }, t.getLocalTransform = function(e, r) {
    r = r || [];
    var n = e.originX || 0, i = e.originY || 0, a = e.scaleX, o = e.scaleY, s = e.anchorX, u = e.anchorY, l = e.rotation || 0, f = e.x, h = e.y, c = e.skewX ? Math.tan(e.skewX) : 0, v = e.skewY ? Math.tan(-e.skewY) : 0;
    if (n || i || s || u) {
      var d = n + s, m = i + u;
      r[4] = -d * a - c * m * o, r[5] = -m * o - v * d * a;
    } else
      r[4] = r[5] = 0;
    return r[0] = a, r[3] = o, r[1] = v * a, r[2] = c * o, l && ih(r, r, l), r[4] += n + f, r[5] += i + h, r;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.scaleX = e.scaleY = e.globalScaleRatio = 1, e.x = e.y = e.originX = e.originY = e.skewX = e.skewY = e.rotation = e.anchorX = e.anchorY = 0;
  })(), t;
})(), g1 = Ia.getLocalTransform, Vs = [
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
function Xo(t, e) {
  return S0(t, e, Vs);
}
var ra = {
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
    return 1 - ra.bounceOut(1 - t);
  },
  bounceOut: function(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  bounceInOut: function(t) {
    return t < 0.5 ? ra.bounceIn(t * 2) * 0.5 : ra.bounceOut(t * 2 - 1) * 0.5 + 0.5;
  }
}, za = Math.pow, br = Math.sqrt, Zo = 1e-8, _g = 1e-4, Ic = br(3), Ha = 1 / 3, Ft = _i(), _t = _i(), Qn = _i();
function Tr(t) {
  return t > -Zo && t < Zo;
}
function Sg(t) {
  return t > Zo || t < -Zo;
}
function Ge(t, e, r, n, i) {
  var a = 1 - i;
  return a * a * (a * t + 3 * i * e) + i * i * (i * n + 3 * a * r);
}
function Lc(t, e, r, n, i) {
  var a = 1 - i;
  return 3 * (((e - t) * a + 2 * (r - e) * i) * a + (n - r) * i * i);
}
function Tg(t, e, r, n, i, a) {
  var o = n + 3 * (e - r) - t, s = 3 * (r - e * 2 + t), u = 3 * (e - t), l = t - i, f = s * s - 3 * o * u, h = s * u - 9 * o * l, c = u * u - 3 * s * l, v = 0;
  if (Tr(f) && Tr(h))
    if (Tr(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var m = h * h - 4 * f * c;
    if (Tr(m)) {
      var p = h / f, d = -s / o + p, g = -p / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (m > 0) {
      var y = br(m), _ = f * s + 1.5 * o * (-h + y), S = f * s + 1.5 * o * (-h - y);
      _ < 0 ? _ = -za(-_, Ha) : _ = za(_, Ha), S < 0 ? S = -za(-S, Ha) : S = za(S, Ha);
      var d = (-s - (_ + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var T = (2 * f * s - 3 * o * h) / (2 * br(f * f * f)), x = Math.acos(T) / 3, b = br(f), C = Math.cos(x), d = (-s - 2 * b * C) / (3 * o), g = (-s + b * (C + Ic * Math.sin(x))) / (3 * o), E = (-s + b * (C - Ic * Math.sin(x))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), E >= 0 && E <= 1 && (a[v++] = E);
    }
  }
  return v;
}
function xg(t, e, r, n, i) {
  var a = 6 * r - 12 * e + 6 * t, o = 9 * e + 3 * n - 3 * t - 9 * r, s = 3 * e - 3 * t, u = 0;
  if (Tr(o)) {
    if (Sg(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Tr(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = br(f), l = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function $o(t, e, r, n, i, a) {
  var o = (e - t) * i + t, s = (r - e) * i + e, u = (n - r) * i + r, l = (s - o) * i + o, f = (u - s) * i + s, h = (f - l) * i + l;
  a[0] = t, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = n;
}
function m1(t, e, r, n, i, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, m, p, g;
  Ft[0] = u, Ft[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    _t[0] = Ge(t, r, i, o, y), _t[1] = Ge(e, n, a, s, y), p = Kn(Ft, _t), p < v && (h = y, v = p);
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(c < _g); _++)
    d = h - c, m = h + c, _t[0] = Ge(t, r, i, o, d), _t[1] = Ge(e, n, a, s, d), p = Kn(_t, Ft), d >= 0 && p < v ? (h = d, v = p) : (Qn[0] = Ge(t, r, i, o, m), Qn[1] = Ge(e, n, a, s, m), g = Kn(Qn, Ft), m <= 1 && g < v ? (h = m, v = g) : c *= 0.5);
  return br(v);
}
function y1(t, e, r, n, i, a, o, s, u) {
  for (var l = t, f = e, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, m = Ge(t, r, i, o, d), p = Ge(e, n, a, s, d), g = m - l, y = p - f;
    h += Math.sqrt(g * g + y * y), l = m, f = p;
  }
  return h;
}
function qe(t, e, r, n) {
  var i = 1 - n;
  return i * (i * t + 2 * n * e) + n * n * r;
}
function Oc(t, e, r, n) {
  return 2 * ((1 - n) * (e - t) + n * (r - e));
}
function _1(t, e, r, n, i) {
  var a = t - 2 * e + r, o = 2 * (e - t), s = t - n, u = 0;
  if (Tr(a)) {
    if (Sg(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Tr(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var h = br(f), l = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function wg(t, e, r) {
  var n = t + r - 2 * e;
  return n === 0 ? 0.5 : (t - e) / n;
}
function qo(t, e, r, n, i) {
  var a = (e - t) * n + t, o = (r - e) * n + e, s = (o - a) * n + a;
  i[0] = t, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r;
}
function S1(t, e, r, n, i, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  Ft[0] = o, Ft[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    _t[0] = qe(t, r, i, c), _t[1] = qe(e, n, a, c);
    var v = Kn(Ft, _t);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < _g); d++) {
    var m = l - f, p = l + f;
    _t[0] = qe(t, r, i, m), _t[1] = qe(e, n, a, m);
    var v = Kn(_t, Ft);
    if (m >= 0 && v < h)
      l = m, h = v;
    else {
      Qn[0] = qe(t, r, i, p), Qn[1] = qe(e, n, a, p);
      var g = Kn(Qn, Ft);
      p <= 1 && g < h ? (l = p, h = g) : f *= 0.5;
    }
  }
  return br(h);
}
function T1(t, e, r, n, i, a, o) {
  for (var s = t, u = e, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = qe(t, r, i, c), d = qe(e, n, a, c), m = v - s, p = d - u;
    l += Math.sqrt(m * m + p * p), s = v, u = d;
  }
  return l;
}
var x1 = /cubic-bezier\(([0-9,\.e ]+)\)/;
function bg(t) {
  var e = t && x1.exec(t);
  if (e) {
    var r = e[1].split(","), n = +zt(r[0]), i = +zt(r[1]), a = +zt(r[2]), o = +zt(r[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : Tg(0, n, a, 1, u, s) && Ge(0, i, o, 1, s[0]);
    };
  }
}
var w1 = (function() {
  function t(e) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = e.life || 1e3, this._delay = e.delay || 0, this.loop = e.loop || !1, this.onframe = e.onframe || Ve, this.ondestroy = e.ondestroy || Ve, this.onrestart = e.onrestart || Ve, e.easing && this.setEasing(e.easing);
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
    this.easing = e, this.easingFunc = $(e) ? e : ra[e] || bg(e);
  }, t;
})(), Nc = {
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
function Cr(t) {
  return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t;
}
function Hl(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function _u(t) {
  var e = t;
  return e.length && e.charAt(e.length - 1) === "%" ? Cr(parseFloat(e) / 100 * 255) : Cr(parseInt(e, 10));
}
function cn(t) {
  var e = t;
  return e.length && e.charAt(e.length - 1) === "%" ? Hl(parseFloat(e) / 100) : Hl(parseFloat(e));
}
function Su(t, e, r) {
  return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? t + (e - t) * r * 6 : r * 2 < 1 ? e : r * 3 < 2 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function Ga(t, e, r) {
  return t + (e - t) * r;
}
function dt(t, e, r, n, i) {
  return t[0] = e, t[1] = r, t[2] = n, t[3] = i, t;
}
function Gl(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
}
var Cg = new ai(20), Ua = null;
function Dn(t, e) {
  Ua && Gl(Ua, e), Ua = Cg.put(t, Ua || e.slice());
}
function Yt(t, e) {
  if (t) {
    e = e || [];
    var r = Cg.get(t);
    if (r)
      return Gl(e, r);
    t = t + "";
    var n = t.replace(/ /g, "").toLowerCase();
    if (n in Nc)
      return Gl(e, Nc[n]), Dn(t, e), e;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          dt(e, 0, 0, 0, 1);
          return;
        }
        return dt(e, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Dn(t, e), e;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          dt(e, 0, 0, 0, 1);
          return;
        }
        return dt(e, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Dn(t, e), e;
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
          f = cn(l.pop());
        case "rgb":
          if (l.length >= 3)
            return dt(e, _u(l[0]), _u(l[1]), _u(l[2]), l.length === 3 ? f : cn(l[3])), Dn(t, e), e;
          dt(e, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            dt(e, 0, 0, 0, 1);
            return;
          }
          return l[3] = cn(l[3]), Ul(l, e), Dn(t, e), e;
        case "hsl":
          if (l.length !== 3) {
            dt(e, 0, 0, 0, 1);
            return;
          }
          return Ul(l, e), Dn(t, e), e;
        default:
          return;
      }
    }
    dt(e, 0, 0, 0, 1);
  }
}
function Ul(t, e) {
  var r = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = cn(t[1]), i = cn(t[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return e = e || [], dt(e, Cr(Su(o, a, r + 1 / 3) * 255), Cr(Su(o, a, r) * 255), Cr(Su(o, a, r - 1 / 3) * 255), 1), t.length === 4 && (e[3] = t[3]), e;
}
function b1(t) {
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
function Pc(t, e) {
  var r = Yt(t);
  if (r) {
    for (var n = 0; n < 3; n++)
      r[n] = r[n] * (1 - e) | 0, r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
    return La(r, r.length === 4 ? "rgba" : "rgb");
  }
}
function WI(t, e, r) {
  if (!(!(e && e.length) || !(t >= 0 && t <= 1))) {
    var n = t * (e.length - 1), i = Math.floor(n), a = Math.ceil(n), o = Yt(e[i]), s = Yt(e[a]), u = n - i, l = La([
      Cr(Ga(o[0], s[0], u)),
      Cr(Ga(o[1], s[1], u)),
      Cr(Ga(o[2], s[2], u)),
      Hl(Ga(o[3], s[3], u))
    ], "rgba");
    return r ? {
      color: l,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : l;
  }
}
function Wl(t, e, r, n) {
  var i = Yt(t);
  if (t)
    return i = b1(i), r != null && (i[1] = cn($(r) ? r(i[1]) : r)), n != null && (i[2] = cn($(n) ? n(i[2]) : n)), La(Ul(i), "rgba");
}
function La(t, e) {
  if (!(!t || !t.length)) {
    var r = t[0] + "," + t[1] + "," + t[2];
    return (e === "rgba" || e === "hsva" || e === "hsla") && (r += "," + t[3]), e + "(" + r + ")";
  }
}
function Ko(t, e) {
  var r = Yt(t);
  return r ? (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) * r[3] / 255 + (1 - r[3]) * e : 0;
}
var Rc = new ai(100);
function kc(t) {
  if (V(t)) {
    var e = Rc.get(t);
    return e || (e = Pc(t, -0.1), Rc.put(t, e)), e;
  } else if (Ns(t)) {
    var r = R({}, t);
    return r.colorStops = X(t.colorStops, function(n) {
      return {
        offset: n.offset,
        color: Pc(n.color, -0.1)
      };
    }), r;
  }
  return t;
}
function C1(t) {
  return t.type === "linear";
}
function D1(t) {
  return t.type === "radial";
}
(function() {
  return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(t) {
    return Buffer.from(t).toString("base64");
  } : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(t) {
    return btoa(unescape(encodeURIComponent(t)));
  } : function(t) {
    return process.env.NODE_ENV !== "production" && fn("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Yl = Array.prototype.slice;
function or(t, e, r) {
  return (e - t) * r + t;
}
function Tu(t, e, r, n) {
  for (var i = e.length, a = 0; a < i; a++)
    t[a] = or(e[a], r[a], n);
  return t;
}
function E1(t, e, r, n) {
  for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
    t[o] || (t[o] = []);
    for (var s = 0; s < a; s++)
      t[o][s] = or(e[o][s], r[o][s], n);
  }
  return t;
}
function Wa(t, e, r, n) {
  for (var i = e.length, a = 0; a < i; a++)
    t[a] = e[a] + r[a] * n;
  return t;
}
function Bc(t, e, r, n) {
  for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
    t[o] || (t[o] = []);
    for (var s = 0; s < a; s++)
      t[o][s] = e[o][s] + r[o][s] * n;
  }
  return t;
}
function M1(t, e) {
  for (var r = t.length, n = e.length, i = r > n ? e : t, a = Math.min(r, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(r, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function A1(t, e, r) {
  var n = t, i = e;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var u = a; u < o; u++)
          n.push(r === 1 ? i[u] : Yl.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (r === 1)
        isNaN(n[u]) && (n[u] = i[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function Eo(t) {
  if (tt(t)) {
    var e = t.length;
    if (tt(t[0])) {
      for (var r = [], n = 0; n < e; n++)
        r.push(Yl.call(t[n]));
      return r;
    }
    return Yl.call(t);
  }
  return t;
}
function Mo(t) {
  return t[0] = Math.floor(t[0]) || 0, t[1] = Math.floor(t[1]) || 0, t[2] = Math.floor(t[2]) || 0, t[3] = t[3] == null ? 1 : t[3], "rgba(" + t.join(",") + ")";
}
function I1(t) {
  return tt(t && t[0]) ? 2 : 1;
}
var Ya = 0, Ao = 1, Dg = 2, Xi = 3, Xl = 4, Zl = 5, Vc = 6;
function Fc(t) {
  return t === Xl || t === Zl;
}
function Xa(t) {
  return t === Ao || t === Dg;
}
var Di = [0, 0, 0, 0], L1 = (function() {
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
    var i = this.keyframes, a = i.length, o = !1, s = Vc, u = r;
    if (tt(r)) {
      var l = I1(r);
      s = l, (l === 1 && !we(r[0]) || l === 2 && !we(r[0][0])) && (o = !0);
    } else if (we(r) && !ni(r))
      s = Ya;
    else if (V(r))
      if (!isNaN(+r))
        s = Ya;
      else {
        var f = Yt(r);
        f && (u = f, s = Xi);
      }
    else if (Ns(r)) {
      var h = R({}, u);
      h.colorStops = X(r.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Yt(v.color)
        };
      }), C1(r) ? s = Xl : D1(r) && (s = Zl), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Vc) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: e,
      value: u,
      rawValue: r,
      percent: 0
    };
    return n && (c.easing = n, c.easingFunc = $(n) ? n : ra[n] || bg(n)), i.push(c), c;
  }, t.prototype.prepare = function(e, r) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(m, p) {
      return m.time - p.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = Xa(i), l = Fc(i), f = 0; f < a; f++) {
      var h = n[f], c = h.value, v = o.value;
      h.percent = h.time / e, s || (u && f !== a - 1 ? A1(c, v, i) : l && M1(c.colorStops, v.colorStops));
    }
    if (!s && i !== Zl && r && this.needsAnimate() && r.needsAnimate() && i === r.valType && !r._finished) {
      this._additiveTrack = r;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === Ya ? n[f].additiveValue = n[f].value - d : i === Xi ? n[f].additiveValue = Wa([], n[f].value, d, -1) : Xa(i) && (n[f].additiveValue = i === Ao ? Wa([], n[f].value, d, -1) : Bc([], n[f].value, d, -1));
    }
  }, t.prototype.step = function(e, r) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === Xi, f, h = this._lastFr, c = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (r < 0)
          f = 0;
        else if (r < this._lastFrP) {
          var m = c(h + 1, s - 1);
          for (f = m; f >= 0 && !(o[f].percent <= r); f--)
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
        var p = d.percent - v.percent, g = p === 0 ? 1 : c((r - v.percent) / p, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var y = n ? this._additiveValue : l ? Di : e[u];
        if ((Xa(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          e[u] = g < 1 ? v.rawValue : d.rawValue;
        else if (Xa(a))
          a === Ao ? Tu(y, v[i], d[i], g) : E1(y, v[i], d[i], g);
        else if (Fc(a)) {
          var _ = v[i], S = d[i], T = a === Xl;
          e[u] = {
            type: T ? "linear" : "radial",
            x: or(_.x, S.x, g),
            y: or(_.y, S.y, g),
            colorStops: X(_.colorStops, function(b, C) {
              var E = S.colorStops[C];
              return {
                offset: or(b.offset, E.offset, g),
                color: Mo(Tu([], b.color, E.color, g))
              };
            }),
            global: S.global
          }, T ? (e[u].x2 = or(_.x2, S.x2, g), e[u].y2 = or(_.y2, S.y2, g)) : e[u].r = or(_.r, S.r, g);
        } else if (l)
          Tu(y, v[i], d[i], g), n || (e[u] = Mo(y));
        else {
          var x = or(v[i], d[i], g);
          n ? this._additiveValue = x : e[u] = x;
        }
        n && this._addToTarget(e);
      }
    }
  }, t.prototype._addToTarget = function(e) {
    var r = this.valType, n = this.propName, i = this._additiveValue;
    r === Ya ? e[n] = e[n] + i : r === Xi ? (Yt(e[n], Di), Wa(Di, Di, i, 1), e[n] = Mo(Di)) : r === Ao ? Wa(e[n], e[n], i, 1) : r === Dg && Bc(e[n], e[n], i, 1);
  }, t;
})(), oh = (function() {
  function t(e, r, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = e, this._loop = r, r && i) {
      fn("Can' use additive animation on looped animation.");
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
    return this.whenWithKeys(e, r, me(r), n);
  }, t.prototype.whenWithKeys = function(e, r, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], u = a[s];
      if (!u) {
        u = a[s] = new L1(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === Xi && l && (l = Mo(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        e > 0 && u.addKeyframe(0, Eo(l), i), this._trackKeys.push(s);
      }
      u.addKeyframe(e, Eo(r[s]), i);
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
        var c = new w1({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(v) {
            r._started = 2;
            var d = r._additiveAnimators;
            if (d) {
              for (var m = !1, p = 0; p < d.length; p++)
                if (d[p]._clip) {
                  m = !0;
                  break;
                }
              m || (r._additiveAnimators = null);
            }
            for (var p = 0; p < n.length; p++)
              n[p].step(r._target, v);
            var g = r._onframeCbs;
            if (g)
              for (var p = 0; p < g.length; p++)
                g[p](r._target, v);
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
    return X(this._trackKeys, function(r) {
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
          u && (e[a] = Eo(u.rawValue));
        }
      }
    }
  }, t.prototype.__changeFinalValue = function(e, r) {
    r = r || me(e);
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
})(), Jt = (function() {
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
})(), Eg = 1;
q.hasGlobalWindow && (Eg = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Qo = Eg, $l = 0.4, ql = "#333", Kl = "#ccc", O1 = "#eee", je = 1, Zi = 2, Gn = 4, xu = "__zr_normal__", wu = Vs.concat(["ignore"]), N1 = yi(Vs, function(t, e) {
  return t[e] = !0, t;
}, { ignore: !1 }), En = {}, P1 = new Z(0, 0, 0, 0), Za = [], Io = 0, Fs = 1, zs = (function() {
  function t(e) {
    this.id = ng(), this.animators = [], this.currentStates = [], this.states = {}, this._init(e);
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
      if ((h || f) && (c = P1, n.layoutRect ? c.copy(n.layoutRect) : c.copy(this.getBoundingRect()), i || c.applyTransform(this.transform)), f) {
        this.calculateTextPosition ? this.calculateTextPosition(En, n, c) : dg(En, n, c), a.x = En.x, a.y = En.y, o = En.align, s = En.verticalAlign;
        var v = n.origin;
        if (v && n.rotation != null) {
          var d = void 0, m = void 0;
          v === "center" ? (d = c.width * 0.5, m = c.height * 0.5) : (d = si(v[0], c.width), m = si(v[1], c.height)), l = !0, a.originX = -a.x + d + (i ? 0 : c.x), a.originY = -a.y + m + (i ? 0 : c.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var p = n.offset;
      p && (a.x += p[0], a.y += p[1], l || (a.originX = -p[0], a.originY = -p[1]));
      var g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (h) {
        var y = g.overflowRect = g.overflowRect || new Z(0, 0, 0, 0);
        a.getLocalTransform(Za), Aa(Za, Za), Z.copy(y, c), y.applyTransform(Za);
      } else
        g.overflowRect = null;
      var _ = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, S = void 0, T = void 0, x = void 0;
      _ && this.canBeInsideText() ? (S = n.insideFill, T = n.insideStroke, (S == null || S === "auto") && (S = this.getInsideTextFill()), (T == null || T === "auto") && (T = this.getInsideTextStroke(S), x = !0)) : (S = n.outsideFill, T = n.outsideStroke, (S == null || S === "auto") && (S = this.getOutsideFill()), (T == null || T === "auto") && (T = this.getOutsideStroke(S), x = !0)), S = S || "#000", (S !== g.fill || T !== g.stroke || x !== g.autoStroke || o !== g.align || s !== g.verticalAlign) && (u = !0, g.fill = S, g.stroke = T, g.autoStroke = x, g.align = o, g.verticalAlign = s, r.setDefaultTextStyle(g)), r.__dirty |= je, u && r.dirtyStyle(!0);
    }
  }, t.prototype.canBeInsideText = function() {
    return !0;
  }, t.prototype.getInsideTextFill = function() {
    return "#fff";
  }, t.prototype.getInsideTextStroke = function(e) {
    return "#000";
  }, t.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Kl : ql;
  }, t.prototype.getOutsideStroke = function(e) {
    var r = this.__zr && this.__zr.getBackgroundColor(), n = typeof r == "string" && Yt(r);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, La(n, "rgba");
  }, t.prototype.traverse = function(e, r) {
  }, t.prototype.attrKV = function(e, r) {
    e === "textConfig" ? this.setTextConfig(r) : e === "textContent" ? this.setTextContent(r) : e === "clipPath" ? this.setClipPath(r) : e === "extra" ? (this.extra = this.extra || {}, R(this.extra, r)) : this[e] = r;
  }, t.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, t.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, t.prototype.attr = function(e, r) {
    if (typeof e == "string")
      this.attrKV(e, r);
    else if (H(e))
      for (var n = e, i = me(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, e[o]);
      }
    return this.markRedraw(), this;
  }, t.prototype.saveCurrentToNormalState = function(e) {
    this._innerSaveToNormal(e);
    for (var r = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== xu)) {
        var o = i.targetName, s = o ? r[o] : r;
        i.saveTo(s);
      }
    }
  }, t.prototype._innerSaveToNormal = function(e) {
    var r = this._normalState;
    r || (r = this._normalState = {}), e.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(e, r, wu);
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
    this.useState(xu, !1, e);
  }, t.prototype.useState = function(e, r, n, i) {
    var a = e === xu, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(ue(s, e) >= 0 && (r || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(e)), l || (l = this.states && this.states[e]), !l && !a) {
          fn("State " + e + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = this._textContent, h = zc(this, f, l, i);
        h && !this.__inHover && (this.__inHover = h), this._applyStateObj(e, l, this._normalState, r, Gc(this, n, u), u);
        var c = this._textGuide;
        return f && f.useState(e, r, n, !!h), c && c.useState(e, r, n, !!h), a ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(e) : this.currentStates = [e], this._updateAnimationTargets(), this.markRedraw(), !h && this.__inHover && (this.__inHover = Io, this.__dirty &= ~je), l;
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
      var h = i[o - 1], c = this._textContent, v = zc(this, c, h, n);
      v && !this.__inHover && (this.__inHover = v);
      var d = this._mergeStates(i), m = this.stateTransition;
      this.saveCurrentToNormalState(d), this._applyStateObj(e.join(","), d, this._normalState, !1, Gc(this, r, m), m);
      var p = this._textGuide;
      c && c.useStates(e, r, !!v), p && p.useStates(e, r, !!v), this._updateAnimationTargets(), this.currentStates = e.slice(), this.markRedraw(), !v && this.__inHover && (this.__inHover = Io, this.__dirty &= ~je);
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
    var r = ue(this.currentStates, e);
    if (r >= 0) {
      var n = this.currentStates.slice();
      n.splice(r, 1), this.useStates(n);
    }
  }, t.prototype.replaceState = function(e, r, n) {
    var i = this.currentStates.slice(), a = ue(i, e), o = ue(i, r) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = r : n && !o && i.push(r), this.useStates(i);
  }, t.prototype.toggleState = function(e, r) {
    r ? this.useState(e, !0) : this.removeState(e);
  }, t.prototype._mergeStates = function(e) {
    for (var r = {}, n, i = 0; i < e.length; i++) {
      var a = e[i];
      R(r, a), a.textConfig && (n = n || {}, R(n, a.textConfig));
    }
    return n && (r.textConfig = n), r;
  }, t.prototype._applyStateObj = function(e, r, n, i, a, o) {
    if (this.__inHover !== Fs) {
      var s = !(r && i);
      r && r.textConfig ? (this.textConfig = R({}, i ? this.textConfig : n.textConfig), R(this.textConfig, r.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var u = {}, l = !1, f = 0; f < wu.length; f++) {
        var h = wu[f], c = a && N1[h];
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
      e.innerTransformable = new Ia(), this._attachComponent(e), this._textContent = e, this.markRedraw();
    }
  }, t.prototype.setTextConfig = function(e) {
    this.textConfig || (this.textConfig = {}), R(this.textConfig, e), this.markRedraw();
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
    this.__dirty |= je;
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
      fn('Property "' + e + '" is not existed in element ' + this.id);
      return;
    }
    var a = new oh(i, r, n);
    return e && (a.targetName = e), this.addAnimator(a, e), a;
  }, t.prototype.addAnimator = function(e, r) {
    var n = this.__zr, i = this;
    e.during(function() {
      i.updateDuringAnimation(r);
    }).done(function() {
      var a = i.animators, o = ue(a, e);
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
    bu(this, e, r, n);
  }, t.prototype.animateFrom = function(e, r, n) {
    bu(this, e, r, n, !0);
  }, t.prototype._transitionState = function(e, r, n, i) {
    for (var a = bu(this, r, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = e;
  }, t.prototype.getBoundingRect = function() {
    return null;
  }, t.prototype.getPaintRect = function() {
    return null;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "element", e.name = "", e.ignore = e.silent = e.ignoreHostSilent = e.isGroup = e.draggable = e.dragging = e.ignoreClip = !1, e.__inHover = Io, e.__dirty = je;
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
Qt(zs, Jt);
Qt(zs, Ia);
function bu(t, e, r, n, i) {
  r = r || {};
  var a = [];
  Mg(t, "", t, e, r, n, a, i);
  var o = a.length, s = !1, u = r.done, l = r.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && r.during && a[0].during(function(d, m) {
    r.during(m);
  });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f), h && v.aborted(h), r.force && v.duration(r.duration), v.start(r.easing);
  }
  return a;
}
function Cu(t, e, r) {
  for (var n = 0; n < r; n++)
    t[n] = e[n];
}
function R1(t) {
  return tt(t[0]);
}
function k1(t, e, r) {
  if (tt(e[r]))
    if (tt(t[r]) || (t[r] = []), Xe(e[r])) {
      var n = e[r].length;
      t[r].length !== n && (t[r] = new e[r].constructor(n), Cu(t[r], e[r], n));
    } else {
      var i = e[r], a = t[r], o = i.length;
      if (R1(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? Cu(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
      else
        Cu(a, i, o);
      a.length = i.length;
    }
  else
    t[r] = e[r];
}
function B1(t, e) {
  return t === e || tt(t) && tt(e) && V1(t, e);
}
function V1(t, e) {
  var r = t.length;
  if (r !== e.length)
    return !1;
  for (var n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Mg(t, e, r, n, i, a, o, s) {
  for (var u = me(n), l = i.duration, f = i.delay, h = i.additive, c = i.setToFinal, v = !H(a), d = t.animators, m = [], p = 0; p < u.length; p++) {
    var g = u[p], y = n[g];
    if (y != null && r[g] != null && (v || a[g]))
      if (H(y) && !tt(y) && !Ns(y)) {
        if (e) {
          s || (r[g] = y, t.updateDuringAnimation(e));
          continue;
        }
        Mg(t, g, r[g], y, i, a && a[g], o, s);
      } else
        m.push(g);
    else s || (r[g] = y, t.updateDuringAnimation(e), m.push(g));
  }
  var _ = m.length;
  if (!h && _)
    for (var S = 0; S < d.length; S++) {
      var T = d[S];
      if (T.targetName === e) {
        var x = T.stopTracks(m);
        if (x) {
          var b = ue(d, T);
          d.splice(b, 1);
        }
      }
    }
  if (i.force || (m = Be(m, function(M) {
    return !B1(n[M], r[M]);
  }), _ = m.length), _ > 0 || i.force && !o.length) {
    var C = void 0, E = void 0, D = void 0;
    if (s) {
      E = {}, c && (C = {});
      for (var S = 0; S < _; S++) {
        var g = m[S];
        E[g] = r[g], c ? C[g] = n[g] : r[g] = n[g];
      }
    } else if (c) {
      D = {};
      for (var S = 0; S < _; S++) {
        var g = m[S];
        D[g] = Eo(r[g]), k1(r, n, g);
      }
    }
    var T = new oh(r, !1, !1, h ? Be(d, function(I) {
      return I.targetName === e;
    }) : null);
    T.targetName = e, i.scope && (T.scope = i.scope), c && C && T.whenWithKeys(0, C, m), D && T.whenWithKeys(0, D, m), T.whenWithKeys(l ?? 500, s ? E : n, m).delay(f || 0), t.addAnimator(T, e), o.push(T);
  }
}
function zc(t, e, r, n) {
  return !(r && r.hoverLayer || n) || Hc(t) || e && Hc(e) ? Io : Fs;
}
function Hc(t) {
  return t.type === "text" || t.type === "tspan";
}
function Gc(t, e, r) {
  return !e && !t.__inHover && r && r.duration > 0;
}
var Ql = "__zr_style_" + Math.round(Math.random() * 10), vn = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, Hs = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
vn[Ql] = !0;
var Uc = ["z", "z2", "invisible"], F1 = ["invisible"], Oa = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype._init = function(r) {
    for (var n = me(r), i = 0; i < n.length; i++) {
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
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && z1(this, r, n) || o && !o[0] && !o[3])
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
      r = this._paintRect || (this._paintRect = new Z(0, 0, 0, 0)), n ? Z.applyTransform(r, i, n) : r.copy(i), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
      var l = this.dirtyRectTolerance;
      r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2));
    }
    return r;
  }, e.prototype.setPrevPaintRect = function(r) {
    r ? (this._prevPaintRect = this._prevPaintRect || new Z(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null;
  }, e.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, e.prototype.animateStyle = function(r) {
    return this.animate("style", r);
  }, e.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : this.markRedraw();
  }, e.prototype.attrKV = function(r, n) {
    r !== "style" ? t.prototype.attrKV.call(this, r, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, e.prototype.setStyle = function(r, n) {
    return typeof r == "string" ? this.style[r] = n : R(this.style, r), this.dirtyStyle(), this;
  }, e.prototype.dirtyStyle = function(r) {
    r || this.markRedraw(), this.__dirty |= Zi, this._rect && (this._rect = null);
  }, e.prototype.dirty = function() {
    this.dirtyStyle();
  }, e.prototype.styleChanged = function() {
    return !!(this.__dirty & Zi);
  }, e.prototype.styleUpdated = function() {
    this.__dirty &= ~Zi;
  }, e.prototype.createStyle = function(r) {
    return Ps(vn, r);
  }, e.prototype.useStyle = function(r) {
    r[Ql] || (r = this.createStyle(r)), this.style = r, this.dirtyStyle();
  }, e.prototype._useHoverStyle = function(r) {
    this.__hoverStyle = r;
  }, e.prototype.isStyleObject = function(r) {
    return r[Ql];
  }, e.prototype._innerSaveToNormal = function(r) {
    t.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, n, Uc);
  }, e.prototype._applyStateObj = function(r, n, i, a, o, s) {
    t.prototype._applyStateObj.call(this, r, n, i, a, o, s);
    var u = !(n && a), l = this.__inHover === Fs, f;
    if (n && n.style ? o ? a ? f = n.style : (f = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(f, n.style)) : (f = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(f, n.style)) : u && (f = i.style), f)
      if (o) {
        var h = this.style;
        if (this.style = this.createStyle(u ? {} : h), u)
          for (var c = me(h), v = 0; v < c.length; v++) {
            var d = c[v];
            d in f && (f[d] = f[d], this.style[d] = h[d]);
          }
        for (var m = me(f), v = 0; v < m.length; v++) {
          var d = m[v];
          this.style[d] = this.style[d];
        }
        this._transitionState(r, {
          style: f
        }, s, this.getAnimationStyleProps());
      } else
        l ? this._useHoverStyle(f) : this.useStyle(f);
    if (!l)
      for (var p = this.__inHover ? F1 : Uc, v = 0; v < p.length; v++) {
        var d = p[v];
        n && n[d] != null ? this[d] = n[d] : u && i[d] != null && (this[d] = i[d]);
      }
  }, e.prototype._mergeStates = function(r) {
    for (var n = t.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, e.prototype._mergeStyle = function(r, n) {
    return R(r, n), r;
  }, e.prototype.getAnimationStyleProps = function() {
    return Hs;
  }, e.initDefaultProps = (function() {
    var r = e.prototype;
    r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = 0, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = je | Zi;
  })(), e;
})(zs), Du = new Z(0, 0, 0, 0), Eu = new Z(0, 0, 0, 0);
function z1(t, e, r) {
  return Du.copy(t.getBoundingRect()), t.transform && Du.applyTransform(t.transform), Eu.width = e, Eu.height = r, !Du.intersect(Eu);
}
var St = Math.min, Tt = Math.max, Mu = Math.sin, Au = Math.cos, zr = Math.PI * 2, $a = _i(), qa = _i(), Ka = _i();
function Wc(t, e, r, n, i, a) {
  i[0] = St(t, r), i[1] = St(e, n), a[0] = Tt(t, r), a[1] = Tt(e, n);
}
var Yc = [], Xc = [];
function H1(t, e, r, n, i, a, o, s, u, l) {
  var f = xg, h = Ge, c = f(t, r, i, o, Yc);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(t, r, i, o, Yc[v]);
    u[0] = St(d, u[0]), l[0] = Tt(d, l[0]);
  }
  c = f(e, n, a, s, Xc);
  for (var v = 0; v < c; v++) {
    var m = h(e, n, a, s, Xc[v]);
    u[1] = St(m, u[1]), l[1] = Tt(m, l[1]);
  }
  u[0] = St(t, u[0]), l[0] = Tt(t, l[0]), u[0] = St(o, u[0]), l[0] = Tt(o, l[0]), u[1] = St(e, u[1]), l[1] = Tt(e, l[1]), u[1] = St(s, u[1]), l[1] = Tt(s, l[1]);
}
function G1(t, e, r, n, i, a, o, s) {
  var u = wg, l = qe, f = Tt(St(u(t, r, i), 1), 0), h = Tt(St(u(e, n, a), 1), 0), c = l(t, r, i, f), v = l(e, n, a, h);
  o[0] = St(t, i, c), o[1] = St(e, a, v), s[0] = Tt(t, i, c), s[1] = Tt(e, a, v);
}
function U1(t, e, r, n, i, a, o, s, u) {
  var l = Wn, f = Yn, h = Math.abs(i - a);
  if (h % zr < 1e-4 && h > 1e-4) {
    s[0] = t - r, s[1] = e - n, u[0] = t + r, u[1] = e + n;
    return;
  }
  if ($a[0] = Au(i) * r + t, $a[1] = Mu(i) * n + e, qa[0] = Au(a) * r + t, qa[1] = Mu(a) * n + e, l(s, $a, qa), f(u, $a, qa), i = i % zr, i < 0 && (i = i + zr), a = a % zr, a < 0 && (a = a + zr), i > a && !o ? a += zr : i < a && o && (i += zr), o) {
    var c = a;
    a = i, i = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > i && (Ka[0] = Au(v) * r + t, Ka[1] = Mu(v) * n + e, l(s, Ka, s), f(u, Ka, u));
}
var fe = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, Hr = [], Gr = [], Ot = [], dr = [], Nt = [], Pt = [], Iu = Math.min, Lu = Math.max, Ur = Math.cos, Wr = Math.sin, rr = Math.abs, Jl = Math.PI, _r = Jl * 2, Ou = typeof Float32Array < "u", Ei = [];
function Nu(t) {
  var e = Math.round(t / Jl * 1e8) / 1e8;
  return e % 2 * Jl;
}
function W1(t, e) {
  var r = Nu(t[0]);
  r < 0 && (r += _r);
  var n = r - t[0], i = t[1];
  i += n, !e && i - r >= _r ? i = r + _r : e && r - i >= _r ? i = r - _r : !e && r > i ? i = r + (_r - Nu(r - i)) : e && r < i && (i = r - (_r - Nu(i - r))), t[0] = r, t[1] = i;
}
var ui = (function() {
  function t(e) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, e && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return t.prototype.increaseVersion = function() {
    this._version++;
  }, t.prototype.getVersion = function() {
    return this._version;
  }, t.prototype.setScale = function(e, r, n) {
    n = n || 0, n > 0 && (this._ux = rr(n / Qo / e) || 0, this._uy = rr(n / Qo / r) || 0);
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
    return this._drawPendingPt(), this.addData(fe.M, e, r), this._ctx && this._ctx.moveTo(e, r), this._x0 = e, this._y0 = r, this._xi = e, this._yi = r, this;
  }, t.prototype.lineTo = function(e, r) {
    var n = rr(e - this._xi), i = rr(r - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(fe.L, e, r), this._ctx && a && this._ctx.lineTo(e, r), a)
      this._xi = e, this._yi = r, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = e, this._pendingPtY = r, this._pendingPtDist = o);
    }
    return this;
  }, t.prototype.bezierCurveTo = function(e, r, n, i, a, o) {
    return this._drawPendingPt(), this.addData(fe.C, e, r, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(e, r, n, i, a, o), this._xi = a, this._yi = o, this;
  }, t.prototype.quadraticCurveTo = function(e, r, n, i) {
    return this._drawPendingPt(), this.addData(fe.Q, e, r, n, i), this._ctx && this._ctx.quadraticCurveTo(e, r, n, i), this._xi = n, this._yi = i, this;
  }, t.prototype.arc = function(e, r, n, i, a, o) {
    this._drawPendingPt(), Ei[0] = i, Ei[1] = a, W1(Ei, o), i = Ei[0], a = Ei[1];
    var s = a - i;
    return this.addData(fe.A, e, r, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(e, r, n, i, a, o), this._xi = Ur(a) * n + e, this._yi = Wr(a) * n + r, this;
  }, t.prototype.arcTo = function(e, r, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(e, r, n, i, a), this;
  }, t.prototype.rect = function(e, r, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(e, r, n, i), this.addData(fe.R, e, r, n, i), this;
  }, t.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(fe.Z);
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
      !(this.data && this.data.length === r) && Ou && (this.data = new Float32Array(r));
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
      if (Ou && (o instanceof Float32Array || !o) && (this.data = new Float32Array(i + n), i > 0 && o))
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
      e instanceof Array && (e.length = this._len, Ou && this._len > 11 && (this.data = new Float32Array(e)));
    }
  }, t.prototype.getBoundingRect = function() {
    Ot[0] = Ot[1] = Nt[0] = Nt[1] = Number.MAX_VALUE, dr[0] = dr[1] = Pt[0] = Pt[1] = -Number.MAX_VALUE;
    var e = this.data, r = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = e[o++], u = o === 1;
      switch (u && (r = e[o], n = e[o + 1], i = r, a = n), s) {
        case fe.M:
          r = i = e[o++], n = a = e[o++], Nt[0] = i, Nt[1] = a, Pt[0] = i, Pt[1] = a;
          break;
        case fe.L:
          Wc(r, n, e[o], e[o + 1], Nt, Pt), r = e[o++], n = e[o++];
          break;
        case fe.C:
          H1(r, n, e[o++], e[o++], e[o++], e[o++], e[o], e[o + 1], Nt, Pt), r = e[o++], n = e[o++];
          break;
        case fe.Q:
          G1(r, n, e[o++], e[o++], e[o], e[o + 1], Nt, Pt), r = e[o++], n = e[o++];
          break;
        case fe.A:
          var l = e[o++], f = e[o++], h = e[o++], c = e[o++], v = e[o++], d = e[o++] + v;
          o += 1;
          var m = !e[o++];
          u && (i = Ur(v) * h + l, a = Wr(v) * c + f), U1(l, f, h, c, v, d, m, Nt, Pt), r = Ur(d) * h + l, n = Wr(d) * c + f;
          break;
        case fe.R:
          i = r = e[o++], a = n = e[o++];
          var p = e[o++], g = e[o++];
          Wc(i, a, i + p, a + g, Nt, Pt);
          break;
        case fe.Z:
          r = i, n = a;
          break;
      }
      Wn(Ot, Ot, Nt), Yn(dr, dr, Pt);
    }
    return o === 0 && (Ot[0] = Ot[1] = dr[0] = dr[1] = 0), new Z(Ot[0], Ot[1], dr[0] - Ot[0], dr[1] - Ot[1]);
  }, t.prototype._calculateLength = function() {
    var e = this.data, r = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < r; ) {
      var v = e[c++], d = c === 1;
      d && (a = e[c], o = e[c + 1], s = a, u = o);
      var m = -1;
      switch (v) {
        case fe.M:
          a = s = e[c++], o = u = e[c++];
          break;
        case fe.L: {
          var p = e[c++], g = e[c++], y = p - a, _ = g - o;
          (rr(y) > n || rr(_) > i || c === r - 1) && (m = Math.sqrt(y * y + _ * _), a = p, o = g);
          break;
        }
        case fe.C: {
          var S = e[c++], T = e[c++], p = e[c++], g = e[c++], x = e[c++], b = e[c++];
          m = y1(a, o, S, T, p, g, x, b, 10), a = x, o = b;
          break;
        }
        case fe.Q: {
          var S = e[c++], T = e[c++], p = e[c++], g = e[c++];
          m = T1(a, o, S, T, p, g, 10), a = p, o = g;
          break;
        }
        case fe.A:
          var C = e[c++], E = e[c++], D = e[c++], M = e[c++], I = e[c++], A = e[c++], L = A + I;
          c += 1, d && (s = Ur(I) * D + C, u = Wr(I) * M + E), m = Lu(D, M) * Iu(_r, Math.abs(A)), a = Ur(L) * D + C, o = Wr(L) * M + E;
          break;
        case fe.R: {
          s = a = e[c++], u = o = e[c++];
          var k = e[c++], N = e[c++];
          m = k * 2 + N * 2;
          break;
        }
        case fe.Z: {
          var y = s - a, _ = u - o;
          m = Math.sqrt(y * y + _ * _), a = s, o = u;
          break;
        }
      }
      m >= 0 && (l[h++] = m, f += m);
    }
    return this._pathLen = f, f;
  }, t.prototype.rebuildPath = function(e, r) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, u, l, f, h, c, v = r < 1, d, m, p = 0, g = 0, y, _ = 0, S, T;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, m = this._pathLen, y = r * m, !y)))
      e: for (var x = 0; x < o; ) {
        var b = n[x++], C = x === 1;
        switch (C && (l = n[x], f = n[x + 1], s = l, u = f), b !== fe.L && _ > 0 && (e.lineTo(S, T), _ = 0), b) {
          case fe.M:
            s = l = n[x++], u = f = n[x++], e.moveTo(l, f);
            break;
          case fe.L: {
            h = n[x++], c = n[x++];
            var E = rr(h - l), D = rr(c - f);
            if (E > i || D > a) {
              if (v) {
                var M = d[g++];
                if (p + M > y) {
                  var I = (y - p) / M;
                  e.lineTo(l * (1 - I) + h * I, f * (1 - I) + c * I);
                  break e;
                }
                p += M;
              }
              e.lineTo(h, c), l = h, f = c, _ = 0;
            } else {
              var A = E * E + D * D;
              A > _ && (S = h, T = c, _ = A);
            }
            break;
          }
          case fe.C: {
            var L = n[x++], k = n[x++], N = n[x++], z = n[x++], Q = n[x++], ee = n[x++];
            if (v) {
              var M = d[g++];
              if (p + M > y) {
                var I = (y - p) / M;
                $o(l, L, N, Q, I, Hr), $o(f, k, z, ee, I, Gr), e.bezierCurveTo(Hr[1], Gr[1], Hr[2], Gr[2], Hr[3], Gr[3]);
                break e;
              }
              p += M;
            }
            e.bezierCurveTo(L, k, N, z, Q, ee), l = Q, f = ee;
            break;
          }
          case fe.Q: {
            var L = n[x++], k = n[x++], N = n[x++], z = n[x++];
            if (v) {
              var M = d[g++];
              if (p + M > y) {
                var I = (y - p) / M;
                qo(l, L, N, I, Hr), qo(f, k, z, I, Gr), e.quadraticCurveTo(Hr[1], Gr[1], Hr[2], Gr[2]);
                break e;
              }
              p += M;
            }
            e.quadraticCurveTo(L, k, N, z), l = N, f = z;
            break;
          }
          case fe.A:
            var te = n[x++], J = n[x++], re = n[x++], j = n[x++], U = n[x++], se = n[x++], he = n[x++], rt = !n[x++], tr = re > j ? re : j, nt = rr(re - j) > 1e-3, Ne = U + se, K = !1;
            if (v) {
              var M = d[g++];
              p + M > y && (Ne = U + se * (y - p) / M, K = !0), p += M;
            }
            if (nt && e.ellipse ? e.ellipse(te, J, re, j, he, U, Ne, rt) : e.arc(te, J, tr, U, Ne, rt), K)
              break e;
            C && (s = Ur(U) * re + te, u = Wr(U) * j + J), l = Ur(Ne) * re + te, f = Wr(Ne) * j + J;
            break;
          case fe.R:
            s = l = n[x], u = f = n[x + 1], h = n[x++], c = n[x++];
            var ie = n[x++], Or = n[x++];
            if (v) {
              var M = d[g++];
              if (p + M > y) {
                var ze = y - p;
                e.moveTo(h, c), e.lineTo(h + Iu(ze, ie), c), ze -= ie, ze > 0 && e.lineTo(h + ie, c + Iu(ze, Or)), ze -= Or, ze > 0 && e.lineTo(h + Lu(ie - ze, 0), c + Or), ze -= ie, ze > 0 && e.lineTo(h, c + Lu(Or - ze, 0));
                break e;
              }
              p += M;
            }
            e.rect(h, c, ie, Or);
            break;
          case fe.Z:
            if (v) {
              var M = d[g++];
              if (p + M > y) {
                var I = (y - p) / M;
                e.lineTo(l * (1 - I) + s * I, f * (1 - I) + u * I);
                break e;
              }
              p += M;
            }
            e.closePath(), l = s, f = u;
        }
      }
  }, t.prototype.clone = function() {
    var e = new t(), r = this.data;
    return e.data = r.slice ? r.slice() : Array.prototype.slice.call(r), e._len = this._len, e;
  }, t.prototype.canSave = function() {
    return !!this._saveData;
  }, t.CMD = fe, t.initDefaultProps = (function() {
    var e = t.prototype;
    e._saveData = !0, e._ux = 0, e._uy = 0, e._pendingPtDist = 0, e._version = 0;
  })(), t;
})();
function Mn(t, e, r, n, i, a, o) {
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
function Y1(t, e, r, n, i, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > e + h && f > n + h && f > a + h && f > s + h || f < e - h && f < n - h && f < a - h && f < s - h || l > t + h && l > r + h && l > i + h && l > o + h || l < t - h && l < r - h && l < i - h && l < o - h)
    return !1;
  var c = m1(t, e, r, n, i, a, o, s, l, f);
  return c <= h / 2;
}
function X1(t, e, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > e + l && u > n + l && u > a + l || u < e - l && u < n - l && u < a - l || s > t + l && s > r + l && s > i + l || s < t - l && s < r - l && s < i - l)
    return !1;
  var f = S1(t, e, r, n, i, a, s, u);
  return f <= l / 2;
}
var Zc = Math.PI * 2;
function Qa(t) {
  return t %= Zc, t < 0 && (t += Zc), t;
}
var Mi = Math.PI * 2;
function Z1(t, e, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= t, u -= e;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > r || f + l < r)
    return !1;
  if (Math.abs(n - i) % Mi < 1e-4)
    return !0;
  if (a) {
    var h = n;
    n = Qa(i), i = Qa(h);
  } else
    n = Qa(n), i = Qa(i);
  n > i && (i += Mi);
  var c = Math.atan2(u, s);
  return c < 0 && (c += Mi), c >= n && c <= i || c + Mi >= n && c + Mi <= i;
}
function Yr(t, e, r, n, i, a) {
  if (a > e && a > n || a < e && a < n || n === e)
    return 0;
  var o = (a - e) / (n - e), s = n < e ? 1 : -1;
  (o === 1 || o === 0) && (s = n < e ? 0.5 : -0.5);
  var u = o * (r - t) + t;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var pr = ui.CMD, Xr = Math.PI * 2, $1 = 1e-4;
function q1(t, e) {
  return Math.abs(t - e) < $1;
}
var He = [-1, -1, -1], yt = [-1, -1];
function K1() {
  var t = yt[0];
  yt[0] = yt[1], yt[1] = t;
}
function Q1(t, e, r, n, i, a, o, s, u, l) {
  if (l > e && l > n && l > a && l > s || l < e && l < n && l < a && l < s)
    return 0;
  var f = Tg(e, n, a, s, l, He);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, m = 0; m < f; m++) {
    var p = He[m], g = p === 0 || p === 1 ? 0.5 : 1, y = Ge(t, r, i, o, p);
    y < u || (c < 0 && (c = xg(e, n, a, s, yt), yt[1] < yt[0] && c > 1 && K1(), v = Ge(e, n, a, s, yt[0]), c > 1 && (d = Ge(e, n, a, s, yt[1]))), c === 2 ? p < yt[0] ? h += v < e ? g : -g : p < yt[1] ? h += d < v ? g : -g : h += s < d ? g : -g : p < yt[0] ? h += v < e ? g : -g : h += s < v ? g : -g);
  }
  return h;
}
function J1(t, e, r, n, i, a, o, s) {
  if (s > e && s > n && s > a || s < e && s < n && s < a)
    return 0;
  var u = _1(e, n, a, s, He);
  if (u === 0)
    return 0;
  var l = wg(e, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = qe(e, n, a, l), c = 0; c < u; c++) {
      var v = He[c] === 0 || He[c] === 1 ? 0.5 : 1, d = qe(t, r, i, He[c]);
      d < o || (He[c] < l ? f += h < e ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = He[0] === 0 || He[0] === 1 ? 0.5 : 1, d = qe(t, r, i, He[0]);
    return d < o ? 0 : a < e ? v : -v;
  }
}
function j1(t, e, r, n, i, a, o, s) {
  if (s -= e, s > r || s < -r)
    return 0;
  var u = Math.sqrt(r * r - s * s);
  He[0] = -u, He[1] = u;
  var l = Math.abs(n - i);
  if (l < 1e-4)
    return 0;
  if (l >= Xr - 1e-4) {
    n = 0, i = Xr;
    var f = a ? 1 : -1;
    return o >= He[0] + t && o <= He[1] + t ? f : 0;
  }
  if (n > i) {
    var h = n;
    n = i, i = h;
  }
  n < 0 && (n += Xr, i += Xr);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = He[v];
    if (d + t > o) {
      var m = Math.atan2(s, d), f = a ? 1 : -1;
      m < 0 && (m = Xr + m), (m >= n && m <= i || m + Xr >= n && m + Xr <= i) && (m > Math.PI / 2 && m < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function Ag(t, e, r, n, i) {
  for (var a = t.data, o = t.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var m = a[d++], p = d === 1;
    switch (m === pr.M && d > 1 && (r || (s += Yr(u, l, f, h, n, i))), p && (u = a[d], l = a[d + 1], f = u, h = l), m) {
      case pr.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case pr.L:
        if (r) {
          if (Mn(u, l, a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += Yr(u, l, a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case pr.C:
        if (r) {
          if (Y1(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += Q1(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case pr.Q:
        if (r) {
          if (X1(u, l, a[d++], a[d++], a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += J1(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case pr.A:
        var g = a[d++], y = a[d++], _ = a[d++], S = a[d++], T = a[d++], x = a[d++];
        d += 1;
        var b = !!(1 - a[d++]);
        c = Math.cos(T) * _ + g, v = Math.sin(T) * S + y, p ? (f = c, h = v) : s += Yr(u, l, c, v, n, i);
        var C = (n - g) * S / _ + g;
        if (r) {
          if (Z1(g, y, S, T, T + x, b, e, C, i))
            return !0;
        } else
          s += j1(g, y, S, T, T + x, b, C, i);
        u = Math.cos(T + x) * _ + g, l = Math.sin(T + x) * S + y;
        break;
      case pr.R:
        f = u = a[d++], h = l = a[d++];
        var E = a[d++], D = a[d++];
        if (c = f + E, v = h + D, r) {
          if (Mn(f, h, c, h, e, n, i) || Mn(c, h, c, v, e, n, i) || Mn(c, v, f, v, e, n, i) || Mn(f, v, f, h, e, n, i))
            return !0;
        } else
          s += Yr(c, h, c, v, n, i), s += Yr(f, v, f, h, n, i);
        break;
      case pr.Z:
        if (r) {
          if (Mn(u, l, f, h, e, n, i))
            return !0;
        } else
          s += Yr(u, l, f, h, n, i);
        u = f, l = h;
        break;
    }
  }
  return !r && !q1(l, h) && (s += Yr(u, l, f, h, n, i) || 0), s !== 0;
}
function eS(t, e, r) {
  return Ag(t, 0, !1, e, r);
}
function tS(t, e, r, n) {
  return Ag(t, e, !0, r, n);
}
var Ig = ye({
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
}, vn), rS = {
  style: ye({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, Hs.style)
}, Pu = Vs.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), Se = (function(t) {
  F(e, t);
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
      for (var s = 0; s < Pu.length; ++s)
        i[Pu[s]] = this[Pu[s]];
      i.__dirty |= je;
    } else this._decalEl && (this._decalEl = null);
  }, e.prototype.getDecalElement = function() {
    return this._decalEl;
  }, e.prototype._init = function(r) {
    var n = me(r);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = r[o];
      o === "style" ? this.style ? R(this.style, s) : this.useStyle(s) : o === "shape" ? R(this.shape, s) : t.prototype.attrKV.call(this, o, s);
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
      if (V(r)) {
        var n = Ko(r, 0);
        return n > 0.5 ? ql : n > 0.2 ? O1 : Kl;
      } else if (r)
        return Kl;
    }
    return ql;
  }, e.prototype.getInsideTextStroke = function(r) {
    var n = this.style.fill;
    if (V(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = Ko(r, 0) < $l;
      if (a === o)
        return n;
    }
  }, e.prototype.buildPath = function(r, n, i) {
  }, e.prototype.pathUpdated = function() {
    this.__dirty &= ~Gn;
  }, e.prototype.getUpdatedPathProxy = function(r) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path;
  }, e.prototype.createPathProxy = function() {
    this.path = new ui(!1);
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
      (a || this.__dirty & Gn) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect();
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
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), tS(s, u / l, r, n)))
          return !0;
      }
      if (this.hasFill())
        return eS(s, r, n);
    }
    return !1;
  }, e.prototype.dirtyShape = function() {
    this.__dirty |= Gn, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
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
    return i || (i = this.shape = {}), typeof r == "string" ? i[r] = n : R(i, r), this.dirtyShape(), this;
  }, e.prototype.shapeChanged = function() {
    return !!(this.__dirty & Gn);
  }, e.prototype.createStyle = function(r) {
    return Ps(Ig, r);
  }, e.prototype._innerSaveToNormal = function(r) {
    t.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.shape && !n.shape && (n.shape = R({}, this.shape));
  }, e.prototype._applyStateObj = function(r, n, i, a, o, s) {
    if (t.prototype._applyStateObj.call(this, r, n, i, a, o, s), this.__inHover !== Fs) {
      var u = !(n && a), l;
      if (n && n.shape ? o ? a ? l = n.shape : (l = R({}, i.shape), R(l, n.shape)) : (l = R({}, a ? this.shape : i.shape), R(l, n.shape)) : u && (l = i.shape), l)
        if (o) {
          this.shape = R({}, this.shape);
          for (var f = {}, h = me(l), c = 0; c < h.length; c++) {
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
    return rS;
  }, e.prototype.isZeroArea = function() {
    return !1;
  }, e.extend = function(r) {
    var n = (function(a) {
      F(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return r.init && r.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return ne(r.style);
      }, o.prototype.getDefaultShape = function() {
        return ne(r.shape);
      }, o;
    })(e);
    for (var i in r)
      typeof r[i] == "function" && (n.prototype[i] = r[i]);
    return n;
  }, e.initDefaultProps = (function() {
    var r = e.prototype;
    r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = je | Zi | Gn;
  })(), e;
})(Oa), nS = ye({
  strokeFirst: !0,
  font: Mr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Ig), Jo = (function(t) {
  F(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.hasStroke = function() {
    return yg(this.style);
  }, e.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, e.prototype.createStyle = function(r) {
    return Ps(nS, r);
  }, e.prototype.setBoundingRect = function(r) {
    this._rect = r;
  }, e.prototype.getBoundingRect = function() {
    return this._rect || (this._rect = p1(this.style)), this._rect;
  }, e.initDefaultProps = (function() {
    var r = e.prototype;
    r.dirtyRectTolerance = 10;
  })(), e;
})(Oa);
Jo.prototype.type = "tspan";
var iS = ye({
  x: 0,
  y: 0
}, vn), aS = {
  style: ye({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, Hs.style)
};
function oS(t) {
  return !!(t && typeof t != "string" && t.width && t.height);
}
var Tn = (function(t) {
  F(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.createStyle = function(r) {
    return Ps(iS, r);
  }, e.prototype._getSize = function(r) {
    var n = this.style, i = n[r];
    if (i != null)
      return i;
    var a = oS(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = r === "width" ? "height" : "width", s = n[o];
    return s == null ? a[r] : a[r] / a[o] * s;
  }, e.prototype.getWidth = function() {
    return this._getSize("width");
  }, e.prototype.getHeight = function() {
    return this._getSize("height");
  }, e.prototype.getAnimationStyleProps = function() {
    return aS;
  }, e.prototype.getBoundingRect = function() {
    var r = this.style;
    return this._rect || (this._rect = new Z(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, e;
})(Oa);
Tn.prototype.type = "image";
function sS(t, e) {
  var r = e.x, n = e.y, i = e.width, a = e.height, o = e.r, s, u, l, f;
  i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > i && (h = s + u, s *= i / h, u *= i / h), l + f > i && (h = l + f, l *= i / h, f *= i / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), t.moveTo(r + s, n), t.lineTo(r + i - u, n), u !== 0 && t.arc(r + i - u, n + u, u, -Math.PI / 2, 0), t.lineTo(r + i, n + a - l), l !== 0 && t.arc(r + i - l, n + a - l, l, 0, Math.PI / 2), t.lineTo(r + f, n + a), f !== 0 && t.arc(r + f, n + a - f, f, Math.PI / 2, Math.PI), t.lineTo(r, n + s), s !== 0 && t.arc(r + s, n + s, s, Math.PI, Math.PI * 1.5), t.closePath();
}
var Zn = Math.round;
function Lg(t, e, r) {
  if (e) {
    var n = e.x1, i = e.x2, a = e.y1, o = e.y2;
    t.x1 = n, t.x2 = i, t.y1 = a, t.y2 = o;
    var s = r && r.lineWidth;
    return s && (Zn(n * 2) === Zn(i * 2) && (t.x1 = t.x2 = sn(n, s, !0)), Zn(a * 2) === Zn(o * 2) && (t.y1 = t.y2 = sn(a, s, !0))), t;
  }
}
function Og(t, e, r) {
  if (e) {
    var n = e.x, i = e.y, a = e.width, o = e.height;
    t.x = n, t.y = i, t.width = a, t.height = o;
    var s = r && r.lineWidth;
    return s && (t.x = sn(n, s, !0), t.y = sn(i, s, !0), t.width = Math.max(sn(n + a, s, !1) - t.x, a === 0 ? 0 : 1), t.height = Math.max(sn(i + o, s, !1) - t.y, o === 0 ? 0 : 1)), t;
  }
}
function sn(t, e, r) {
  if (!e)
    return t;
  var n = Zn(t * 2);
  return (n + Zn(e)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2;
}
var uS = /* @__PURE__ */ (function() {
  function t() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return t;
})(), lS = {}, Me = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new uS();
  }, e.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Og(lS, n, this.style);
      i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? sS(r, n) : r.rect(i, a, o, s);
  }, e.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, e;
})(Se);
Me.prototype.type = "rect";
var $c = {
  fill: "#000"
}, qc = 2, Rt = {}, fS = {
  style: ye({
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
  }, Hs.style)
}, ut = (function(t) {
  F(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = $c, n.attr(r), n;
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
    this._childCursor = 0, pS(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
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
      for (var r = new Z(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], u = s.getBoundingRect(), l = s.getLocalTransform(i);
        l ? (r.copy(u), r.applyTransform(l), a = a || r.clone(), a.union(r)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || r;
    }
    return this._rect;
  }, e.prototype.setDefaultTextStyle = function(r) {
    this._defaultStyle = r || $c;
  }, e.prototype.setTextContent = function(r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, e.prototype._mergeStyle = function(r, n) {
    if (!n)
      return r;
    var i = n.rich, a = r.rich || i && {};
    return R(r, n), i && a ? (this._mergeRich(a, i), r.rich = a) : a && (r.rich = a), r;
  }, e.prototype._mergeRich = function(r, n) {
    for (var i = me(n), a = 0; a < i.length; a++) {
      var o = i[a];
      r[o] = r[o] || {}, R(r[o], n[o]);
    }
  }, e.prototype.getAnimationStyleProps = function() {
    return fS;
  }, e.prototype._getOrCreateChild = function(r) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof r)) && (n = new r()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, e.prototype._updatePlainTexts = function() {
    var r = this.style, n = r.font || Mr, i = r.padding, a = this._defaultStyle, o = r.x || 0, s = r.y || 0, u = r.align || a.align || "left", l = r.verticalAlign || a.verticalAlign || "top";
    Cc(Rt, a.overflowRect, o, s, u, l), o = Rt.baseX, s = Rt.baseY;
    var f = rv(r), h = u1(f, r, Rt.outerWidth, Rt.outerHeight), c = Ru(r), v = !!r.backgroundColor, d = h.outerHeight, m = h.outerWidth, p = h.lines, g = h.lineHeight;
    this.isTruncated = !!h.isTruncated;
    var y = o, _ = hn(s, h.contentHeight, l);
    if (c || i) {
      var S = oi(o, m, u), T = hn(s, d, l);
      c && this._renderBackground(r, r, S, T, m, d);
    }
    _ += g / 2, i && (y = tv(o, u, i), l === "top" ? _ += i[0] : l === "bottom" && (_ -= i[2]));
    for (var x = 0, b = !1, C = !1, E = ev("fill" in r ? r.fill : (C = !0, a.fill)), D = jc("stroke" in r ? r.stroke : !v && (!a.autoStroke || C) ? (x = qc, b = !0, a.stroke) : null), M = r.textShadowBlur > 0, I = 0; I < p.length; I++) {
      var A = this._getOrCreateChild(Jo), L = A.createStyle();
      A.useStyle(L), L.text = p[I], L.x = y, L.y = _, L.textAlign = u, L.textBaseline = "middle", L.opacity = r.opacity, L.strokeFirst = !0, M && (L.shadowBlur = r.textShadowBlur || 0, L.shadowColor = r.textShadowColor || "transparent", L.shadowOffsetX = r.textShadowOffsetX || 0, L.shadowOffsetY = r.textShadowOffsetY || 0), L.stroke = D, L.fill = E, D && (L.lineWidth = r.lineWidth || x, L.lineDash = r.lineDash, L.lineDashOffset = r.lineDashOffset || 0), L.font = n, Qc(L, r), _ += g, A.setBoundingRect(zl(L, h.contentWidth, h.calculatedLineHeight, b ? 0 : null));
    }
  }, e.prototype._updateRichTexts = function() {
    var r = this.style, n = this._defaultStyle, i = r.align || n.align, a = r.verticalAlign || n.verticalAlign, o = r.x || 0, s = r.y || 0;
    Cc(Rt, n.overflowRect, o, s, i, a), o = Rt.baseX, s = Rt.baseY;
    var u = rv(r), l = h1(u, r, Rt.outerWidth, Rt.outerHeight, i), f = l.width, h = l.outerWidth, c = l.outerHeight, v = r.padding;
    this.isTruncated = !!l.isTruncated;
    var d = oi(o, h, i), m = hn(s, c, a), p = d, g = m;
    v && (p += v[3], g += v[0]);
    var y = p + f;
    Ru(r) && this._renderBackground(r, r, d, m, h, c);
    for (var _ = !!r.backgroundColor, S = 0; S < l.lines.length; S++) {
      for (var T = l.lines[S], x = T.tokens, b = x.length, C = T.lineHeight, E = T.width, D = 0, M = p, I = y, A = b - 1, L = void 0; D < b && (L = x[D], !L.align || L.align === "left"); )
        this._placeToken(L, r, C, g, M, "left", _), E -= L.width, M += L.width, D++;
      for (; A >= 0 && (L = x[A], L.align === "right"); )
        this._placeToken(L, r, C, g, I, "right", _), E -= L.width, I -= L.width, A--;
      for (M += (f - (M - p) - (y - I) - E) / 2; D <= A; )
        L = x[D], this._placeToken(L, r, C, g, M + L.width / 2, "center", _), M += L.width, D++;
      g += C;
    }
  }, e.prototype._placeToken = function(r, n, i, a, o, s, u) {
    var l = n.rich[r.styleName] || {};
    l.text = r.text;
    var f = r.verticalAlign, h = a + i / 2;
    f === "top" ? h = a + r.height / 2 : f === "bottom" && (h = a + i - r.height / 2);
    var c = !r.isLineHolder && Ru(l);
    c && this._renderBackground(l, n, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, h - r.height / 2, r.width, r.height);
    var v = !!l.backgroundColor, d = r.textPadding;
    d && (o = tv(o, s, d), h -= r.height / 2 - d[0] - r.innerHeight / 2);
    var m = this._getOrCreateChild(Jo), p = m.createStyle();
    m.useStyle(p);
    var g = this._defaultStyle, y = !1, _ = 0, S = !1, T = ev("fill" in l ? l.fill : "fill" in n ? n.fill : (y = !0, g.fill)), x = jc("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !v && !u && (!g.autoStroke || y) ? (_ = qc, S = !0, g.stroke) : null), b = l.textShadowBlur > 0 || n.textShadowBlur > 0;
    p.text = r.text, p.x = o, p.y = h, b && (p.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, p.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = r.font || Mr, p.opacity = wr(l.opacity, n.opacity, 1), Qc(p, l), x && (p.lineWidth = wr(l.lineWidth, n.lineWidth, _), p.lineDash = G(l.lineDash, n.lineDash), p.lineDashOffset = n.lineDashOffset || 0, p.stroke = x), T && (p.fill = T), m.setBoundingRect(zl(p, r.contentWidth, r.contentHeight, S ? 0 : null));
  }, e.prototype._renderBackground = function(r, n, i, a, o, s) {
    var u = r.backgroundColor, l = r.borderWidth, f = r.borderColor, h = u && u.image, c = u && !h, v = r.borderRadius, d = this, m, p;
    if (c || r.lineHeight || l && f) {
      m = this._getOrCreateChild(Me), m.useStyle(m.createStyle()), m.style.fill = null;
      var g = m.shape;
      g.x = i, g.y = a, g.width = o, g.height = s, g.r = v, m.dirtyShape();
    }
    if (c) {
      var y = m.style;
      y.fill = u || null, y.fillOpacity = G(r.fillOpacity, 1);
    } else if (h) {
      p = this._getOrCreateChild(Tn), p.onload = function() {
        d.dirtyStyle();
      };
      var _ = p.style;
      _.image = u.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (l && f) {
      var y = m.style;
      y.lineWidth = l, y.stroke = f, y.strokeOpacity = G(r.strokeOpacity, 1), y.lineDash = r.borderDash, y.lineDashOffset = r.borderDashOffset || 0, m.strokeContainThreshold = 0, m.hasFill() && m.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var S = (m || p).style;
    S.shadowBlur = r.shadowBlur || 0, S.shadowColor = r.shadowColor || "transparent", S.shadowOffsetX = r.shadowOffsetX || 0, S.shadowOffsetY = r.shadowOffsetY || 0, S.opacity = wr(r.opacity, n.opacity, 1);
  }, e.makeFont = function(r) {
    var n = "";
    return dS(r) && (n = [
      r.fontStyle,
      r.fontWeight,
      vS(r.fontSize),
      r.fontFamily || "sans-serif"
    ].join(" ")), n && zt(n) || r.textFont || r.font;
  }, e;
})(Oa), hS = { left: !0, right: 1, center: 1 }, cS = { top: 1, bottom: 1, middle: 1 }, Kc = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function vS(t) {
  return typeof t == "string" && (t.indexOf("px") !== -1 || t.indexOf("rem") !== -1 || t.indexOf("em") !== -1) ? t : isNaN(+t) ? Qf + "px" : t + "px";
}
function Qc(t, e) {
  for (var r = 0; r < Kc.length; r++) {
    var n = Kc[r], i = e[n];
    i != null && (t[n] = i);
  }
}
function dS(t) {
  return t.fontSize != null || t.fontFamily || t.fontWeight;
}
function pS(t) {
  return Jc(t), w(t.rich, Jc), t;
}
function Jc(t) {
  if (t) {
    t.font = ut.makeFont(t);
    var e = t.align;
    e === "middle" && (e = "center"), t.align = e == null || hS[e] ? e : "left";
    var r = t.verticalAlign;
    r === "center" && (r = "middle"), t.verticalAlign = r == null || cS[r] ? r : "top";
    var n = t.padding;
    n && (t.padding = th(t.padding));
  }
}
function jc(t, e) {
  return t == null || e <= 0 || t === "transparent" || t === "none" ? null : t.image || t.colorStops ? "#000" : t;
}
function ev(t) {
  return t == null || t === "none" ? null : t.image || t.colorStops ? "#000" : t;
}
function tv(t, e, r) {
  return e === "right" ? t - r[1] : e === "center" ? t + r[3] / 2 - r[1] / 2 : t + r[3];
}
function rv(t) {
  var e = t.text;
  return e != null && (e += ""), e;
}
function Ru(t) {
  return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor);
}
var nv = 1e-4, Ng = 20;
function gS(t) {
  return t.replace(/^\s+|\s+$/g, "");
}
var lt = Math.min, ve = Math.max, Oe = Math.abs, fr = Math.round, li = Math.floor, Na = Math.ceil, Si = Math.pow, da = Math.log, jl = Math.LN10, mS = Math.PI, yS = Math.random;
function iv(t, e, r, n) {
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
var Bt = _S;
function _S(t, e, r) {
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
  return ef(t, e, r);
}
function ef(t, e, r) {
  return V(t) ? SS(t) ? parseFloat(t) / 100 * e + (r || 0) : parseFloat(t) : t == null ? NaN : +t;
}
function SS(t) {
  return !!gS(t).match(/%$/);
}
function ae(t, e, r) {
  return process.env.NODE_ENV !== "production" && O(e != null), isNaN(e) ? r ? "" + t : +t : (e = lt(ve(0, e), Ng), t = (+t).toFixed(e), r ? t : +t);
}
function Pg(t) {
  return t.sort(function(e, r) {
    return e - r;
  }), t;
}
function sr(t) {
  if (t = +t, isNaN(t))
    return 0;
  if (t > 1e-14) {
    for (var e = 1, r = 0; r < 15; r++, e *= 10)
      if (fr(t * e) / e === t)
        return r;
  }
  return TS(t);
}
function TS(t) {
  var e = t.toString().toLowerCase(), r = e.indexOf("e"), n = r > 0 ? +e.slice(r + 1) : 0, i = r > 0 ? r : e.length, a = e.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return ve(0, o - n);
}
function xS(t, e, r) {
  var n = Oe(t[1] - t[0]);
  if (!isFinite(n) || n === 0)
    return NaN;
  var i = da(2 * Oe(r || 1) * Oe(n)) / jl, a = da(Oe(e)) / jl, o = ve(0, Na(-i + a));
  return isFinite(o) || (o = NaN), o;
}
function wS(t, e) {
  var r = ve(sr(t), sr(e)), n = t + e;
  return r > Ng ? n : ae(n, r);
}
var av = Si(2, 53) - 1;
function Rg(t) {
  var e = mS * 2;
  return (t % e + e) % e;
}
function jo(t) {
  return t > -nv && t < nv;
}
var bS = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Ti(t) {
  if (t instanceof Date)
    return t;
  if (V(t)) {
    var e = bS.exec(t);
    if (!e)
      return /* @__PURE__ */ new Date(NaN);
    if (e[8]) {
      var r = +e[4] || 0;
      return e[8].toUpperCase() !== "Z" && (r -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, r, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0));
    } else
      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0);
  } else if (t == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(fr(t));
}
function kg(t) {
  return Si(10, sh(t));
}
function sh(t) {
  if (t === 0)
    return 0;
  var e = li(da(t) / jl);
  return t / Si(10, e) >= 10 && e++, e;
}
var Bg = 2;
function uh(t, e) {
  var r = sh(t), n = Si(10, r), i = t / n, a;
  return e === Bg ? a = 1 : e ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, t = a * n, ae(t, -r);
}
function es(t) {
  var e = parseFloat(t);
  return e == t && (e !== 0 || !V(t) || t.indexOf("x") <= 0) ? e : NaN;
}
function Vg(t) {
  return !isNaN(es(t));
}
function lh() {
  return fr(yS() * 9);
}
function Fg(t, e) {
  return e === 0 ? t : Fg(e, t % e);
}
function ov(t, e) {
  return t == null ? e : e == null ? t : t * e / Fg(t, e);
}
function $t(t) {
  return t != null && isFinite(t);
}
var CS = "[ECharts] ", sv = {}, DS = typeof console < "u" && console.warn && console.log;
function Gs(t, e, r) {
  if (DS) {
    if (r) {
      if (sv[e])
        return;
      sv[e] = !0;
    }
    console[t](CS + e);
  }
}
function zg(t, e) {
  Gs("log", t, e);
}
function Ke(t, e) {
  Gs("warn", t, e);
}
function oe(t, e) {
  Gs("error", t, e);
}
function hr(t) {
  process.env.NODE_ENV !== "production" && Gs("warn", "DEPRECATED: " + t, !0);
}
function Le(t, e, r) {
  process.env.NODE_ENV !== "production" && hr((r ? "[" + r + "]" : "") + (t + " is deprecated; use " + e + " instead."));
}
function ts() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = "";
  if (process.env.NODE_ENV !== "production") {
    var n = function(i) {
      return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : ni(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : $(i) ? "function () { ... }" : C0(i) ? i + "" : null;
    };
    r = X(t, function(i) {
      if (V(i))
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
function Qe(t) {
  throw new Error(t);
}
function uv(t, e, r) {
  return (e - t) * r + t;
}
var Hg = "series\0", ES = "\0_ec_\0";
function Ye(t) {
  return t instanceof Array ? t : t == null ? [] : [t];
}
function lv(t, e, r) {
  if (t) {
    t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
    for (var n = 0, i = r.length; n < i; n++) {
      var a = r[n];
      !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
    }
  }
}
var fv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function Pa(t) {
  return H(t) && !B(t) && !(t instanceof Date) ? t.value : t;
}
function MS(t) {
  return H(t) && !(t instanceof Array);
}
function AS(t, e, r) {
  var n = r === "normalMerge", i = r === "replaceMerge", a = r === "replaceAll";
  t = t || [], e = (e || []).slice();
  var o = W();
  w(e, function(u, l) {
    if (!H(u)) {
      e[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !cv(u.id) && hv(u.id), u.name != null && !cv(u.name) && hv(u.name));
  });
  var s = IS(t, o, r);
  return (n || i) && LS(s, t, o, e), n && OS(s, e), n || i ? NS(s, e, i) : a && PS(s, e), RS(s), s;
}
function IS(t, e, r) {
  var n = [];
  if (r === "replaceAll")
    return n;
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    a && a.id != null && e.set(a.id, i), n.push({
      existing: r === "replaceMerge" || fi(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function LS(t, e, r, n) {
  w(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = na(i.id), s = r.get(o);
      if (s != null) {
        var u = t[s];
        O(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = e[s], n[a] = null;
      }
    }
  });
}
function OS(t, e) {
  w(e, function(r, n) {
    if (!(!r || r.name == null))
      for (var i = 0; i < t.length; i++) {
        var a = t[i].existing;
        if (!t[i].newOption && a && (a.id == null || r.id == null) && !fi(r) && !fi(a) && Gg("name", a, r)) {
          t[i].newOption = r, e[n] = null;
          return;
        }
      }
  });
}
function NS(t, e, r) {
  w(e, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = t[a]) && (i.newOption || fi(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !Gg("id", n, i.existing));
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
function PS(t, e) {
  w(e, function(r) {
    t.push({
      newOption: r,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function RS(t) {
  var e = W();
  w(t, function(r) {
    var n = r.existing;
    n && e.set(n.id, r);
  }), w(t, function(r) {
    var n = r.newOption;
    O(!n || n.id == null || !e.get(n.id) || e.get(n.id) === r, "id duplicates: " + (n && n.id)), n && n.id != null && e.set(n.id, r), !r.keyInfo && (r.keyInfo = {});
  }), w(t, function(r, n) {
    var i = r.existing, a = r.newOption, o = r.keyInfo;
    if (H(a)) {
      if (o.name = a.name != null ? na(a.name) : i ? i.name : Hg + n, i)
        o.id = na(i.id);
      else if (a.id != null)
        o.id = na(a.id);
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
function Gg(t, e, r) {
  var n = Xt(e[t], null), i = Xt(r[t], null);
  return n != null && i != null && n === i;
}
function na(t) {
  if (process.env.NODE_ENV !== "production" && t == null)
    throw new Error();
  return Xt(t, "");
}
function Xt(t, e) {
  return t == null ? e : V(t) ? t : we(t) || Yo(t) ? t + "" : e;
}
function hv(t) {
  process.env.NODE_ENV !== "production" && Ke("`" + t + "` is invalid id or name. Must be a string or number.");
}
function cv(t) {
  return Yo(t) || Vg(t);
}
function fh(t) {
  var e = t.name;
  return !!(e && e.indexOf(Hg));
}
function fi(t) {
  return t && t.id != null && na(t.id).indexOf(ES) === 0;
}
function kS(t, e, r) {
  w(t, function(n) {
    var i = n.newOption;
    H(i) && (n.keyInfo.mainType = e, n.keyInfo.subType = BS(e, i, n.existing, r));
  });
}
function BS(t, e, r, n) {
  var i = e.type ? e.type : r ? r.subType : n.determineSubType(t, e);
  return i;
}
function Ra(t, e) {
  if (e.dataIndexInside != null)
    return e.dataIndexInside;
  if (e.dataIndex != null)
    return B(e.dataIndex) ? X(e.dataIndex, function(r) {
      return t.indexOfRawIndex(r);
    }) : t.indexOfRawIndex(e.dataIndex);
  if (e.name != null)
    return B(e.name) ? X(e.name, function(r) {
      return t.indexOfName(r);
    }) : t.indexOfName(e.name);
}
function pe() {
  var t = "__ec_inner_" + VS++;
  return function(e) {
    return e[t] || (e[t] = {});
  };
}
var VS = lh();
function ku(t, e, r) {
  var n = hh(e, r), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, u = r ? r.defaultMainType : null;
  return !i && u && a.set(u, {}), a.each(function(l, f) {
    var h = ka(t, f, l, {
      useDefault: u === f,
      enableAll: r && r.enableAll != null ? r.enableAll : !0,
      enableNone: r && r.enableNone != null ? r.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function hh(t, e) {
  var r;
  if (V(t)) {
    var n = {};
    n[t + "Index"] = 0, r = n;
  } else
    r = t;
  var i = W(), a = {}, o = !1;
  return w(r, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || e && e.includeMainTypes && ue(e.includeMainTypes, f) < 0)) {
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
var xt = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function ka(t, e, r, n) {
  n = n || xt;
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
    process.env.NODE_ENV !== "production" && oe('`"none"` or `false` is not a valid value on index option.'), i = -1;
  }
  return i === "all" && (n.enableAll ? i = a = o = null : (process.env.NODE_ENV !== "production" && oe('`"all"` is not a valid value on index option.'), i = -1)), s.models = t.queryComponents({
    mainType: e,
    index: i,
    id: a,
    name: o
  }), s;
}
function FS(t, e, r) {
  process.env.NODE_ENV !== "production" && O(e);
  var n = {};
  n[e + "Id"] = t[e + "Id"], n[e + "Index"] = t[e + "Index"], n[e + "Name"] = t[e + "Name"];
  var i = {
    mainType: e,
    query: n
  };
  return r && (i.subType = r), i;
}
function Ug(t, e, r) {
  t.setAttribute ? t.setAttribute(e, r) : t[e] = r;
}
function zS(t, e) {
  return t.getAttribute ? t.getAttribute(e) : t[e];
}
function HS(t) {
  return t === "auto" ? q.domSupported ? "html" : "richText" : t || "html";
}
function YI(t, e, r, n, i) {
  var a = e == null || e === "auto";
  if (n == null)
    return n;
  if (we(n)) {
    var o = uv(r || 0, n, i);
    return ae(o, a ? Math.max(sr(r || 0), sr(n)) : e);
  } else {
    if (V(n))
      return i < 1 ? r : n;
    for (var s = [], u = r, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var c = t.getDimensionInfo(h);
      if (c && c.type === "ordinal")
        s[h] = (i < 1 && u ? u : l)[h];
      else {
        var v = u && u[h] ? u[h] : 0, d = l[h], o = uv(v, d, i);
        s[h] = ae(o, a ? Math.max(sr(v), sr(d)) : e);
      }
    }
    return s;
  }
}
function Vt() {
  return [1 / 0, -1 / 0];
}
function GS(t, e) {
  cr(e) && (e < t[0] && (t[0] = e), e > t[1] && (t[1] = e));
}
function Wg(t, e) {
  cr(e) && e < t[0] && (t[0] = e);
}
function Yg(t, e) {
  cr(e) && e > t[1] && (t[1] = e);
}
function US(t, e) {
  hi(e[0], e[1]) && (e[0] < t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1]));
}
function cr(t) {
  return t != null && isFinite(t);
}
function hi(t, e) {
  return cr(t) && cr(e) && t <= e;
}
function WS(t) {
  var e = t[1] - t[0];
  return isFinite(e) && e >= 0;
}
function YS(t) {
  hi(t[0], t[1]) && t[0] > t[1] && (t[0] = t[1]);
}
function XS() {
  var t = "__ec_once_" + ZS++;
  return function(e, r) {
    process.env.NODE_ENV !== "production" && O(e), et(e, t) || (e[t] = 1, r());
  };
}
var ZS = lh();
function ch(t, e, r) {
  var n = W(), i = 0;
  w(t, function(a) {
    var o = e(a);
    process.env.NODE_ENV !== "production" && O(V(o));
    var s = n.get(o) || 0;
    r && r(a, s), !s && !r && (t[i++] = a), n.set(o, s + 1);
  }), r || (t.length = i);
}
function $S(t) {
  return process.env.NODE_ENV !== "production" && O(t.value != null), t.value + "";
}
function qS(t) {
  return process.env.NODE_ENV !== "production" && O(t != null), t + "";
}
function XI(t, e) {
  return G(e, !0) ? t.seriesIndex + 2 : 0;
}
function KS(t, e, r) {
  var n = t.getData().count();
  return {
    progressiveRender: r.progressiveEnabled && e.incrementalPrepareRender && n >= r.threshold,
    large: t.get("large") && n >= t.get("largeThreshold"),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: t.get("progressiveChunkMode") === "mod" ? t.getData().count() : null
  };
}
function vh(t) {
  return {
    overallReset: t
  };
}
var Te = pe(), QS = function(t, e, r, n) {
  if (n) {
    var i = Te(n);
    i.dataIndex = r, i.dataType = e, i.seriesIndex = t, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = Te(a);
      o.seriesIndex = t, o.dataIndex = r, o.dataType = e, o.ssrType = "chart";
    });
  }
}, xi = "undefined", Xg = "series", tf = W(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), ht = "original", Fe = "arrayRows", At = "objectRows", jt = "keyedColumns", lr = "typedArray", Zg = "unknown", Zt = "column", xn = "row", JS = [
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
], $g = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      w(JS, function(r) {
        this[r] = _e(e[r], e);
      }, this);
    }
    return t;
  })()
);
function jS(t, e) {
  return e.mainType === Xg ? t.getViewOfSeriesModel(e) : t.getViewOfComponentModel(e);
}
var vv = 1, dv = {}, qg = pe(), dh = pe(), ph = 0, Us = 1, Ws = 2, Ar = ["emphasis", "blur", "select"], pv = ["normal", "emphasis", "blur", "select"], eT = 10, tT = 9, dn = "highlight", Lo = "downplay", rs = "select", rf = "unselect", ns = "toggleSelect", gh = "selectchanged";
function An(t) {
  return t != null && t !== "none";
}
function Ys(t, e, r) {
  t.onHoverStateChange && (t.hoverState || 0) !== r && t.onHoverStateChange(e), t.hoverState = r;
}
function Kg(t) {
  Ys(t, "emphasis", Ws);
}
function Qg(t) {
  t.hoverState === Ws && Ys(t, "normal", ph);
}
function mh(t) {
  Ys(t, "blur", Us);
}
function Jg(t) {
  t.hoverState === Us && Ys(t, "normal", ph);
}
function rT(t) {
  t.selected = !0;
}
function nT(t) {
  t.selected = !1;
}
function gv(t, e, r) {
  e(t, r);
}
function vr(t, e, r) {
  gv(t, e, r), t.isGroup && t.traverse(function(n) {
    gv(n, e, r);
  });
}
function ZI(t, e) {
  switch (e) {
    case "emphasis":
      t.hoverState = Ws;
      break;
    case "normal":
      t.hoverState = ph;
      break;
    case "blur":
      t.hoverState = Us;
      break;
    case "select":
      t.selected = !0;
  }
}
function iT(t, e, r, n) {
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
function aT(t, e, r, n) {
  var i = r && ue(r, "select") >= 0, a = !1;
  if (t instanceof Se) {
    var o = qg(t), s = i && o.selectFill || o.normalFill, u = i && o.selectStroke || o.normalStroke;
    if (An(s) || An(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit" ? (a = !0, n = R({}, n), l = R({}, l), l.fill = s) : !An(l.fill) && An(s) ? (a = !0, n = R({}, n), l = R({}, l), l.fill = kc(s)) : !An(l.stroke) && An(u) && (a || (n = R({}, n), l = R({}, l)), l.stroke = kc(u)), n.style = l;
    }
  }
  if (n && n.z2 == null) {
    a || (n = R({}, n));
    var f = t.z2EmphasisLift;
    n.z2 = t.z2 + (f ?? eT);
  }
  return n;
}
function oT(t, e, r) {
  if (r && r.z2 == null) {
    r = R({}, r);
    var n = t.z2SelectLift;
    r.z2 = t.z2 + (n ?? tT);
  }
  return r;
}
function sT(t, e, r) {
  var n = ue(t.currentStates, e) >= 0, i = t.style.opacity, a = n ? null : iT(t, ["opacity"], e, {
    opacity: 1
  });
  r = r || {};
  var o = r.style || {};
  return o.opacity == null && (r = R({}, r), o = R({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), r.style = o), r;
}
function Bu(t, e) {
  var r = this.states[t];
  if (this.style) {
    if (t === "emphasis")
      return aT(this, t, e, r);
    if (t === "blur")
      return sT(this, t, r);
    if (t === "select")
      return oT(this, t, r);
  }
  return r;
}
function uT(t) {
  t.stateProxy = Bu;
  var e = t.getTextContent(), r = t.getTextGuideLine();
  e && (e.stateProxy = Bu), r && (r.stateProxy = Bu);
}
function mv(t, e) {
  !rm(t, e) && !t.__highByOuter && vr(t, Kg);
}
function yv(t, e) {
  !rm(t, e) && !t.__highByOuter && vr(t, Qg);
}
function nf(t, e) {
  t.__highByOuter |= 1 << (e || 0), vr(t, Kg);
}
function af(t, e) {
  !(t.__highByOuter &= ~(1 << (e || 0))) && vr(t, Qg);
}
function lT(t) {
  vr(t, mh);
}
function jg(t) {
  vr(t, Jg);
}
function em(t) {
  vr(t, rT);
}
function tm(t) {
  vr(t, nT);
}
function rm(t, e) {
  return t.__highDownSilentOnTouch && e.zrByTouch;
}
function nm(t) {
  var e = t.getModel(), r = [], n = [];
  e.eachComponent(function(i, a) {
    var o = dh(a), s = jS(t, a), u = i === "series";
    !u && n.push(s), o.isBlured && (s.group.traverse(function(l) {
      Jg(l);
    }), u && r.push(a)), o.isBlured = !1;
  }), w(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(r, !1, e);
  });
}
function of(t, e, r, n) {
  var i = n.getModel();
  r = r || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && jg(c);
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
        if (v.group.traverse(function(p) {
          p.__highByOuter && f && e === "self" || mh(p);
        }), tt(e))
          a(l.getData(), e);
        else if (H(e))
          for (var d = me(e), m = 0; m < d.length; m++)
            a(l.getData(d[m]), e[d[m]]);
        u.push(l), dh(l).isBlured = !0;
      }
    }), i.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = n.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i);
      }
    });
  }
}
function sf(t, e, r) {
  if (!(t == null || e == null)) {
    var n = r.getModel().getComponent(t, e);
    if (n) {
      dh(n).isBlured = !0;
      var i = r.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        mh(a);
      });
    }
  }
}
function fT(t, e, r) {
  var n = t.seriesIndex, i = t.getData(e.dataType);
  if (!i) {
    process.env.NODE_ENV !== "production" && oe("Unknown dataType " + e.dataType);
    return;
  }
  var a = Ra(i, e);
  a = (B(a) ? a[0] : a) || 0;
  var o = i.getItemGraphicEl(a);
  if (!o)
    for (var s = i.count(), u = 0; !o && u < s; )
      o = i.getItemGraphicEl(u++);
  if (o) {
    var l = Te(o);
    of(n, l.focus, l.blurScope, r);
  } else {
    var f = t.get(["emphasis", "focus"]), h = t.get(["emphasis", "blurScope"]);
    f != null && of(n, f, h, r);
  }
}
function yh(t, e, r, n) {
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
    if (process.env.NODE_ENV !== "production" && !ci(s[l]) && oe("param should be highDownDispatcher"), Te(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function hT(t, e, r) {
  process.env.NODE_ENV !== "production" && !ci(t) && oe("param should be highDownDispatcher");
  var n = Te(t), i = yh(n.componentMainType, n.componentIndex, n.componentHighDownName, r), a = i.dispatchers, o = i.focusSelf;
  a ? (o && sf(n.componentMainType, n.componentIndex, r), w(a, function(s) {
    return mv(s, e);
  })) : (of(n.seriesIndex, n.focus, n.blurScope, r), n.focus === "self" && sf(n.componentMainType, n.componentIndex, r), mv(t, e));
}
function cT(t, e, r) {
  process.env.NODE_ENV !== "production" && !ci(t) && oe("param should be highDownDispatcher"), nm(r);
  var n = Te(t), i = yh(n.componentMainType, n.componentIndex, n.componentHighDownName, r).dispatchers;
  i ? w(i, function(a) {
    return yv(a, e);
  }) : yv(t, e);
}
function vT(t, e, r) {
  if (lf(e)) {
    var n = e.dataType, i = t.getData(n), a = Ra(i, e);
    B(a) || (a = [a]), t[e.type === ns ? "toggleSelect" : e.type === rs ? "select" : "unselect"](a, n);
  }
}
function _v(t) {
  var e = t.getAllData();
  w(e, function(r) {
    var n = r.data, i = r.type;
    n.eachItemGraphicEl(function(a, o) {
      t.isSelected(o, i) ? em(a) : tm(a);
    });
  });
}
function dT(t) {
  var e = [];
  return t.eachSeries(function(r) {
    var n = r.getAllData();
    w(n, function(i) {
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
function uf(t, e, r) {
  im(t, !0), vr(t, uT), gT(t, e, r);
}
function pT(t) {
  im(t, !1);
}
function $I(t, e, r, n) {
  n ? pT(t) : uf(t, e, r);
}
function gT(t, e, r) {
  var n = Te(t);
  e != null ? (n.focus = e, n.blurScope = r) : n.focus && (n.focus = null);
}
var Sv = ["emphasis", "blur", "select"], mT = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function qI(t, e, r, n) {
  r = r || "itemStyle";
  for (var i = 0; i < Sv.length; i++) {
    var a = Sv[i], o = e.getModel([a, r]), s = t.ensureState(a);
    s.style = o[mT[r]]();
  }
}
function im(t, e) {
  var r = e === !1, n = t;
  t.highDownSilentOnTouch && (n.__highDownSilentOnTouch = t.highDownSilentOnTouch), (!r || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !r);
}
function ci(t) {
  return !!(t && t.__highDownDispatcher);
}
function yT(t) {
  var e = dv[t];
  return e == null && vv <= 32 && (e = dv[t] = vv++), e;
}
function lf(t) {
  var e = t.type;
  return e === rs || e === rf || e === ns;
}
function Tv(t) {
  var e = t.type;
  return e === dn || e === Lo;
}
function _T(t) {
  var e = qg(t);
  e.normalFill = t.style.fill, e.normalStroke = t.style.stroke;
  var r = t.states.select || {};
  e.selectFill = r.style && r.style.fill || null, e.selectStroke = r.style && r.style.stroke || null;
}
var In = ui.CMD, ST = [[], [], []], xv = Math.sqrt, TT = Math.atan2;
function xT(t, e) {
  if (e) {
    var r = t.data, n = t.len(), i, a, o, s, u, l, f = In.M, h = In.C, c = In.L, v = In.R, d = In.A, m = In.Q;
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
        case m:
          a = 2;
          break;
        case d:
          var p = e[4], g = e[5], y = xv(e[0] * e[0] + e[1] * e[1]), _ = xv(e[2] * e[2] + e[3] * e[3]), S = TT(-e[1] / _, e[0] / y);
          r[o] *= y, r[o++] += p, r[o] *= _, r[o++] += g, r[o++] *= y, r[o++] *= _, r[o++] += S, r[o++] += S, o += 2, s = o;
          break;
        case v:
          l[0] = r[o++], l[1] = r[o++], Ct(l, l, e), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], Ct(l, l, e), r[s++] = l[0], r[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var T = ST[u];
        T[0] = r[o++], T[1] = r[o++], Ct(T, T, e), r[s++] = T[0], r[s++] = T[1];
      }
    }
    t.increaseVersion();
  }
}
var Vu = Math.sqrt, Ja = Math.sin, ja = Math.cos, Ai = Math.PI;
function wv(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function ff(t, e) {
  return (t[0] * e[0] + t[1] * e[1]) / (wv(t) * wv(e));
}
function bv(t, e) {
  return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(ff(t, e));
}
function Cv(t, e, r, n, i, a, o, s, u, l, f) {
  var h = u * (Ai / 180), c = ja(h) * (t - r) / 2 + Ja(h) * (e - n) / 2, v = -1 * Ja(h) * (t - r) / 2 + ja(h) * (e - n) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= Vu(d), s *= Vu(d));
  var m = (i === a ? -1 : 1) * Vu((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = m * o * v / s, g = m * -s * c / o, y = (t + r) / 2 + ja(h) * p - Ja(h) * g, _ = (e + n) / 2 + Ja(h) * p + ja(h) * g, S = bv([1, 0], [(c - p) / o, (v - g) / s]), T = [(c - p) / o, (v - g) / s], x = [(-1 * c - p) / o, (-1 * v - g) / s], b = bv(T, x);
  if (ff(T, x) <= -1 && (b = Ai), ff(T, x) >= 1 && (b = 0), b < 0) {
    var C = Math.round(b / Ai * 1e6) / 1e6;
    b = Ai * 2 + C % 2 * Ai;
  }
  f.addData(l, y, _, o, s, S, b, h, a);
}
var wT = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, bT = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function CT(t) {
  var e = new ui();
  if (!t)
    return e;
  var r = 0, n = 0, i = r, a = n, o, s = ui.CMD, u = t.match(wT);
  if (!u)
    return e;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(bT) || [], d = v.length, m = 0; m < d; m++)
      v[m] = parseFloat(v[m]);
    for (var p = 0; p < d; ) {
      var g = void 0, y = void 0, _ = void 0, S = void 0, T = void 0, x = void 0, b = void 0, C = r, E = n, D = void 0, M = void 0;
      switch (h) {
        case "l":
          r += v[p++], n += v[p++], c = s.L, e.addData(c, r, n);
          break;
        case "L":
          r = v[p++], n = v[p++], c = s.L, e.addData(c, r, n);
          break;
        case "m":
          r += v[p++], n += v[p++], c = s.M, e.addData(c, r, n), i = r, a = n, h = "l";
          break;
        case "M":
          r = v[p++], n = v[p++], c = s.M, e.addData(c, r, n), i = r, a = n, h = "L";
          break;
        case "h":
          r += v[p++], c = s.L, e.addData(c, r, n);
          break;
        case "H":
          r = v[p++], c = s.L, e.addData(c, r, n);
          break;
        case "v":
          n += v[p++], c = s.L, e.addData(c, r, n);
          break;
        case "V":
          n = v[p++], c = s.L, e.addData(c, r, n);
          break;
        case "C":
          c = s.C, e.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]), r = v[p - 2], n = v[p - 1];
          break;
        case "c":
          c = s.C, e.addData(c, v[p++] + r, v[p++] + n, v[p++] + r, v[p++] + n, v[p++] + r, v[p++] + n), r += v[p - 2], n += v[p - 1];
          break;
        case "S":
          g = r, y = n, D = e.len(), M = e.data, o === s.C && (g += r - M[D - 4], y += n - M[D - 3]), c = s.C, C = v[p++], E = v[p++], r = v[p++], n = v[p++], e.addData(c, g, y, C, E, r, n);
          break;
        case "s":
          g = r, y = n, D = e.len(), M = e.data, o === s.C && (g += r - M[D - 4], y += n - M[D - 3]), c = s.C, C = r + v[p++], E = n + v[p++], r += v[p++], n += v[p++], e.addData(c, g, y, C, E, r, n);
          break;
        case "Q":
          C = v[p++], E = v[p++], r = v[p++], n = v[p++], c = s.Q, e.addData(c, C, E, r, n);
          break;
        case "q":
          C = v[p++] + r, E = v[p++] + n, r += v[p++], n += v[p++], c = s.Q, e.addData(c, C, E, r, n);
          break;
        case "T":
          g = r, y = n, D = e.len(), M = e.data, o === s.Q && (g += r - M[D - 4], y += n - M[D - 3]), r = v[p++], n = v[p++], c = s.Q, e.addData(c, g, y, r, n);
          break;
        case "t":
          g = r, y = n, D = e.len(), M = e.data, o === s.Q && (g += r - M[D - 4], y += n - M[D - 3]), r += v[p++], n += v[p++], c = s.Q, e.addData(c, g, y, r, n);
          break;
        case "A":
          _ = v[p++], S = v[p++], T = v[p++], x = v[p++], b = v[p++], C = r, E = n, r = v[p++], n = v[p++], c = s.A, Cv(C, E, r, n, x, b, _, S, T, c, e);
          break;
        case "a":
          _ = v[p++], S = v[p++], T = v[p++], x = v[p++], b = v[p++], C = r, E = n, r += v[p++], n += v[p++], c = s.A, Cv(C, E, r, n, x, b, _, S, T, c, e);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, e.addData(c), r = i, n = a), o = c;
  }
  return e.toStatic(), e;
}
var am = (function(t) {
  F(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.applyTransform = function(r) {
  }, e;
})(Se);
function om(t) {
  return t.setData != null;
}
function sm(t, e) {
  var r = CT(t), n = R({}, e);
  return n.buildPath = function(i) {
    var a = om(i);
    if (a && i.canSave()) {
      i.appendPath(r);
      var o = i.getContext();
      o && i.rebuildPath(o, 1);
    } else {
      var o = a ? i.getContext() : i;
      o && r.rebuildPath(o, 1);
    }
  }, n.applyTransform = function(i) {
    xT(r, i), this.dirtyShape();
  }, n;
}
function DT(t, e) {
  return new am(sm(t, e));
}
function ET(t, e) {
  var r = sm(t, e), n = (function(i) {
    F(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s;
    }
    return a;
  })(am);
  return n;
}
function MT(t, e) {
  for (var r = [], n = t.length, i = 0; i < n; i++) {
    var a = t[i];
    r.push(a.getUpdatedPathProxy(!0));
  }
  var o = new Se(e);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (om(s)) {
      s.appendPath(r);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var ft = (function(t) {
  F(e, t);
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
    var i = ue(this._children, r);
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
    var n = this.__zr, i = this._children, a = ue(i, r);
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
    for (var n = new Z(0, 0, 0, 0), i = r || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var u = i[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (Z.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || n;
  }, e;
})(zs);
ft.prototype.type = "group";
var AT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return t;
})(), Xs = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new AT();
  }, e.prototype.buildPath = function(r, n) {
    r.moveTo(n.cx + n.r, n.cy), r.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, e;
})(Se);
Xs.prototype.type = "circle";
var IT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return t;
})(), _h = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new IT();
  }, e.prototype.buildPath = function(r, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, u = n.ry, l = s * i, f = u * i;
    r.moveTo(a - s, o), r.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), r.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), r.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), r.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), r.closePath();
  }, e;
})(Se);
_h.prototype.type = "ellipse";
var um = Math.PI, Fu = um * 2, Zr = Math.sin, Ln = Math.cos, LT = Math.acos, Pe = Math.atan2, Dv = Math.abs, ia = Math.sqrt, $i = Math.max, kt = Math.min, Dt = 1e-4;
function OT(t, e, r, n, i, a, o, s) {
  var u = r - t, l = n - e, f = o - i, h = s - a, c = h * u - f * l;
  if (!(c * c < Dt))
    return c = (f * (e - a) - h * (t - i)) / c, [t + c * u, e + c * l];
}
function eo(t, e, r, n, i, a, o) {
  var s = t - r, u = e - n, l = (o ? a : -a) / ia(s * s + u * u), f = l * u, h = -l * s, c = t + f, v = e + h, d = r + f, m = n + h, p = (c + d) / 2, g = (v + m) / 2, y = d - c, _ = m - v, S = y * y + _ * _, T = i - a, x = c * m - d * v, b = (_ < 0 ? -1 : 1) * ia($i(0, T * T * S - x * x)), C = (x * _ - y * b) / S, E = (-x * y - _ * b) / S, D = (x * _ + y * b) / S, M = (-x * y + _ * b) / S, I = C - p, A = E - g, L = D - p, k = M - g;
  return I * I + A * A > L * L + k * k && (C = D, E = M), {
    cx: C,
    cy: E,
    x0: -f,
    y0: -h,
    x1: C * (i / T - 1),
    y1: E * (i / T - 1)
  };
}
function NT(t) {
  var e;
  if (B(t)) {
    var r = t.length;
    if (!r)
      return t;
    r === 1 ? e = [t[0], t[0], 0, 0] : r === 2 ? e = [t[0], t[0], t[1], t[1]] : r === 3 ? e = t.concat(t[2]) : e = t;
  } else
    e = [t, t, t, t];
  return e;
}
function PT(t, e) {
  var r, n = $i(e.r, 0), i = $i(e.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var u = e.startAngle, l = e.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = e.cx, h = e.cy, c = !!e.clockwise, v = Dv(l - u), d = v > Fu && v % Fu;
      if (d > Dt && (v = d), !(n > Dt))
        t.moveTo(f, h);
      else if (v > Fu - Dt)
        t.moveTo(f + n * Ln(u), h + n * Zr(u)), t.arc(f, h, n, u, l, !c), i > Dt && (t.moveTo(f + i * Ln(l), h + i * Zr(l)), t.arc(f, h, i, l, u, c));
      else {
        var m = void 0, p = void 0, g = void 0, y = void 0, _ = void 0, S = void 0, T = void 0, x = void 0, b = void 0, C = void 0, E = void 0, D = void 0, M = void 0, I = void 0, A = void 0, L = void 0, k = n * Ln(u), N = n * Zr(u), z = i * Ln(l), Q = i * Zr(l), ee = v > Dt;
        if (ee) {
          var te = e.cornerRadius;
          te && (r = NT(te), m = r[0], p = r[1], g = r[2], y = r[3]);
          var J = Dv(n - i) / 2;
          if (_ = kt(J, g), S = kt(J, y), T = kt(J, m), x = kt(J, p), E = b = $i(_, S), D = C = $i(T, x), (b > Dt || C > Dt) && (M = n * Ln(l), I = n * Zr(l), A = i * Ln(u), L = i * Zr(u), v < um)) {
            var re = OT(k, N, A, L, M, I, z, Q);
            if (re) {
              var j = k - re[0], U = N - re[1], se = M - re[0], he = I - re[1], rt = 1 / Zr(LT((j * se + U * he) / (ia(j * j + U * U) * ia(se * se + he * he))) / 2), tr = ia(re[0] * re[0] + re[1] * re[1]);
              E = kt(b, (n - tr) / (rt + 1)), D = kt(C, (i - tr) / (rt - 1));
            }
          }
        }
        if (!ee)
          t.moveTo(f + k, h + N);
        else if (E > Dt) {
          var nt = kt(g, E), Ne = kt(y, E), K = eo(A, L, k, N, n, nt, c), ie = eo(M, I, z, Q, n, Ne, c);
          t.moveTo(f + K.cx + K.x0, h + K.cy + K.y0), E < b && nt === Ne ? t.arc(f + K.cx, h + K.cy, E, Pe(K.y0, K.x0), Pe(ie.y0, ie.x0), !c) : (nt > 0 && t.arc(f + K.cx, h + K.cy, nt, Pe(K.y0, K.x0), Pe(K.y1, K.x1), !c), t.arc(f, h, n, Pe(K.cy + K.y1, K.cx + K.x1), Pe(ie.cy + ie.y1, ie.cx + ie.x1), !c), Ne > 0 && t.arc(f + ie.cx, h + ie.cy, Ne, Pe(ie.y1, ie.x1), Pe(ie.y0, ie.x0), !c));
        } else
          t.moveTo(f + k, h + N), t.arc(f, h, n, u, l, !c);
        if (!(i > Dt) || !ee)
          t.lineTo(f + z, h + Q);
        else if (D > Dt) {
          var nt = kt(m, D), Ne = kt(p, D), K = eo(z, Q, M, I, i, -Ne, c), ie = eo(k, N, A, L, i, -nt, c);
          t.lineTo(f + K.cx + K.x0, h + K.cy + K.y0), D < C && nt === Ne ? t.arc(f + K.cx, h + K.cy, D, Pe(K.y0, K.x0), Pe(ie.y0, ie.x0), !c) : (Ne > 0 && t.arc(f + K.cx, h + K.cy, Ne, Pe(K.y0, K.x0), Pe(K.y1, K.x1), !c), t.arc(f, h, i, Pe(K.cy + K.y1, K.cx + K.x1), Pe(ie.cy + ie.y1, ie.cx + ie.x1), c), nt > 0 && t.arc(f + ie.cx, h + ie.cy, nt, Pe(ie.y1, ie.x1), Pe(ie.y0, ie.x0), !c));
        } else
          t.lineTo(f + z, h + Q), t.arc(f, h, i, l, u, c);
      }
      t.closePath();
    }
  }
}
var RT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return t;
})(), Zs = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new RT();
  }, e.prototype.buildPath = function(r, n) {
    PT(r, n);
  }, e.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, e;
})(Se);
Zs.prototype.type = "sector";
var kT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return t;
})(), Sh = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new kT();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    r.moveTo(i + n.r, a), r.arc(i, a, n.r, 0, o, !1), r.moveTo(i + n.r0, a), r.arc(i, a, n.r0, 0, o, !0);
  }, e;
})(Se);
Sh.prototype.type = "ring";
function BT(t, e, r, n) {
  var i = [], a = [], o = [], s = [], u, l, f, h;
  if (n) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = t.length; c < v; c++)
      Wn(f, f, t[c]), Yn(h, h, t[c]);
    Wn(f, f, n[0]), Yn(h, h, n[1]);
  }
  for (var c = 0, v = t.length; c < v; c++) {
    var d = t[c];
    if (r)
      u = t[c ? c - 1 : v - 1], l = t[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      i.push($0(t[c]));
      continue;
    } else
      u = t[c - 1], l = t[c + 1];
    q0(a, l, u), hu(a, a, e);
    var m = Bl(d, u), p = Bl(d, l), g = m + p;
    g !== 0 && (m /= g, p /= g), hu(o, a, -m), hu(s, a, p);
    var y = yc([], d, o), _ = yc([], d, s);
    n && (Yn(y, y, f), Wn(y, y, h), Yn(_, _, f), Wn(_, _, h)), i.push(y), i.push(_);
  }
  return r && i.push(i.shift()), i;
}
function lm(t, e, r) {
  var n = e.smooth, i = e.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = BT(i, n, r, e.smoothConstraint);
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
var VT = /* @__PURE__ */ (function() {
  function t() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return t;
})(), Th = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new VT();
  }, e.prototype.buildPath = function(r, n) {
    lm(r, n, !0);
  }, e;
})(Se);
Th.prototype.type = "polygon";
var FT = /* @__PURE__ */ (function() {
  function t() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return t;
})(), xh = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new FT();
  }, e.prototype.buildPath = function(r, n) {
    lm(r, n, !1);
  }, e;
})(Se);
xh.prototype.type = "polyline";
var zT = {}, HT = /* @__PURE__ */ (function() {
  function t() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return t;
})(), Ir = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new HT();
  }, e.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Lg(zT, n, this.style);
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
})(Se);
Ir.prototype.type = "line";
var Ze = [], GT = /* @__PURE__ */ (function() {
  function t() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return t;
})();
function Ev(t, e, r) {
  var n = t.cpx2, i = t.cpy2;
  return n != null || i != null ? [
    (r ? Lc : Ge)(t.x1, t.cpx1, t.cpx2, t.x2, e),
    (r ? Lc : Ge)(t.y1, t.cpy1, t.cpy2, t.y2, e)
  ] : [
    (r ? Oc : qe)(t.x1, t.cpx1, t.x2, e),
    (r ? Oc : qe)(t.y1, t.cpy1, t.y2, e)
  ];
}
var wh = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new GT();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, u = n.cpx1, l = n.cpy1, f = n.cpx2, h = n.cpy2, c = n.percent;
    c !== 0 && (r.moveTo(i, a), f == null || h == null ? (c < 1 && (qo(i, u, o, c, Ze), u = Ze[1], o = Ze[2], qo(a, l, s, c, Ze), l = Ze[1], s = Ze[2]), r.quadraticCurveTo(u, l, o, s)) : (c < 1 && ($o(i, u, f, o, c, Ze), u = Ze[1], f = Ze[2], o = Ze[3], $o(a, l, h, s, c, Ze), l = Ze[1], h = Ze[2], s = Ze[3]), r.bezierCurveTo(u, l, f, h, o, s)));
  }, e.prototype.pointAt = function(r) {
    return Ev(this.shape, r, !1);
  }, e.prototype.tangentAt = function(r) {
    var n = Ev(this.shape, r, !0);
    return J0(n, n);
  }, e;
})(Se);
wh.prototype.type = "bezier-curve";
var UT = /* @__PURE__ */ (function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return t;
})(), $s = (function(t) {
  F(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new UT();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, u = n.endAngle, l = n.clockwise, f = Math.cos(s), h = Math.sin(s);
    r.moveTo(f * o + i, h * o + a), r.arc(i, a, o, s, u, !l);
  }, e;
})(Se);
$s.prototype.type = "arc";
var WT = (function(t) {
  F(e, t);
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
    return this._updatePathDirty.call(this), Se.prototype.getBoundingRect.call(this);
  }, e;
})(Se), fm = (function() {
  function t(e) {
    this.colorStops = e || [];
  }
  return t.prototype.addColorStop = function(e, r) {
    this.colorStops.push({
      offset: e,
      color: r
    });
  }, t;
})(), YT = (function(t) {
  F(e, t);
  function e(r, n, i, a, o, s) {
    var u = t.call(this, o) || this;
    return u.x = r ?? 0, u.y = n ?? 0, u.x2 = i ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return e;
})(fm), XT = (function(t) {
  F(e, t);
  function e(r, n, i, a, o) {
    var s = t.call(this, a) || this;
    return s.x = r ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return e;
})(fm), zu = Math.min, ZT = Math.max, to = Math.abs, $r = [0, 0], qr = [0, 0], Ie = hg(), ro = Ie.minTv, no = Ie.maxTv, hm = (function() {
  function t(e, r) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new de();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new de();
    e && this.fromBoundingRect(e, r);
  }
  return t.prototype.fromBoundingRect = function(e, r) {
    var n = this._corners, i = this._axes, a = e.x, o = e.y, s = a + e.width, u = o + e.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), r)
      for (var l = 0; l < 4; l++)
        n[l].transform(r);
    de.sub(i[0], n[1], n[0]), de.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = i[l].dot(n[0]);
  }, t.prototype.intersect = function(e, r, n) {
    var i = !0, a = !r;
    return r && de.set(r, 0, 0), Ie.reset(n, !a), !this._intersectCheckOneSide(this, e, a, 1) && (i = !1, a) || !this._intersectCheckOneSide(e, this, a, -1) && (i = !1, a) || !a && !Ie.negativeSize && de.copy(r, i ? Ie.useDir ? Ie.dirMinTv : ro : no), i;
  }, t.prototype._intersectCheckOneSide = function(e, r, n, i) {
    for (var a = !0, o = 0; o < 2; o++) {
      var s = e._axes[o];
      if (e._getProjMinMaxOnAxis(o, e._corners, $r), e._getProjMinMaxOnAxis(o, r._corners, qr), Ie.negativeSize || $r[1] < qr[0] || $r[0] > qr[1]) {
        if (a = !1, Ie.negativeSize || n)
          return a;
        var u = to(qr[0] - $r[1]), l = to($r[0] - qr[1]);
        zu(u, l) > no.len() && (u < l ? de.scale(no, s, -u * i) : de.scale(no, s, l * i));
      } else if (!n) {
        var u = to(qr[0] - $r[1]), l = to($r[0] - qr[1]);
        (Ie.useDir || zu(u, l) < ro.len()) && ((u < l || !Ie.bidirectional) && (de.scale(ro, s, u * i), Ie.useDir && Ie.calcDirMTV()), (u >= l || !Ie.bidirectional) && (de.scale(ro, s, -l * i), Ie.useDir && Ie.calcDirMTV()));
      }
    }
    return a;
  }, t.prototype._getProjMinMaxOnAxis = function(e, r, n) {
    for (var i = this._axes[e], a = this._origin, o = r[0].dot(i) + a[e], s = o, u = o, l = 1; l < r.length; l++) {
      var f = r[l].dot(i) + a[e];
      s = zu(f, s), u = ZT(f, u);
    }
    n[0] = s + Ie.touchThreshold, n[1] = u - Ie.touchThreshold, Ie.negativeSize = n[1] < n[0];
  }, t;
})(), cm = 0, $T = 1, qT = 2, KT = 1, Oo = 0, QT = [], JT = (function(t) {
  F(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.notClear = !0, r.incremental = $T, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r;
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
      for (var r = new Z(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(QT)), r.union(a);
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
})(Oa), jT = pe();
function ex(t, e, r, n, i) {
  var a;
  if (e && e.ecModel) {
    var o = e.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = e && e.isAnimationEnabled(), u = t === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    n ? (l = G(n.duration, 200), f = G(n.easing, "cubicOut"), h = 0) : (l = e.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = e.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = e.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), $(h) && (h = h(r, i)), $(l) && (l = l(r));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function bh(t, e, r, n, i, a, o) {
  var s = !1, u;
  $(i) ? (o = a, a = i, i = null) : H(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
  var l = t === "leave";
  l || e.stopAnimation("leave");
  var f = ex(t, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(e, i) : null);
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
function qs(t, e, r, n, i, a) {
  bh("update", t, e, r, n, i, a);
}
function Ch(t, e, r, n, i, a) {
  bh("enter", t, e, r, n, i, a);
}
function aa(t) {
  if (!t.__zr)
    return !0;
  for (var e = 0; e < t.animators.length; e++) {
    var r = t.animators[e];
    if (r.scope === "leave")
      return !0;
  }
  return !1;
}
function vm(t, e, r, n, i, a) {
  aa(t) || bh("leave", t, e, r, n, i, a);
}
function Mv(t, e, r, n) {
  t.removeTextContent(), t.removeTextGuideLine(), vm(t, {
    style: {
      opacity: 0
    }
  }, e, r, n);
}
function tx(t, e, r) {
  function n() {
    t.parent && t.parent.remove(t);
  }
  t.isGroup ? t.traverse(function(i) {
    i.isGroup || Mv(i, e, r, n);
  }) : Mv(t, e, r, n);
}
function KI(t) {
  jT(t).oldStyle = t.style;
}
var hf = {}, nn = ["x", "y"], pa = ["width", "height"], dm = 0, pm = 1, gm = 2;
function rx(t) {
  return Se.extend(t);
}
var nx = ET;
function ix(t, e) {
  return nx(t, e);
}
function It(t, e) {
  hf[t] = e;
}
function ax(t) {
  if (hf.hasOwnProperty(t))
    return hf[t];
}
function Dh(t, e, r, n) {
  var i = DT(t, e);
  return r && (n === "center" && (r = ym(r, i.getBoundingRect())), _m(i, r)), i;
}
function mm(t, e, r) {
  var n = new Tn({
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
        n.setStyle(ym(e, a));
      }
    }
  });
  return n;
}
function ym(t, e) {
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
var ox = MT;
function _m(t, e) {
  if (t.applyTransform) {
    var r = t.getBoundingRect(), n = r.calculateTransform(e);
    t.applyTransform(n);
  }
}
function ga(t, e) {
  return Lg(t, t, {
    lineWidth: e
  }), t;
}
function sx(t, e) {
  return Og(t, t, e), t;
}
var ux = sn;
function lx(t, e) {
  for (var r = Ma([]); t && t !== e; )
    ea(r, t.getLocalTransform(), r), t = t.parent;
  return r;
}
function Eh(t, e, r) {
  return e && !tt(e) && (e = Ia.getLocalTransform(e)), r && (e = Aa([], e)), Ct([], t, e);
}
function fx(t, e, r) {
  var n = e[4] === 0 || e[5] === 0 || e[0] === 0 ? 1 : Oe(2 * e[4] / e[0]), i = e[4] === 0 || e[5] === 0 || e[2] === 0 ? 1 : Oe(2 * e[4] / e[2]), a = [t === "left" ? -n : t === "right" ? n : 0, t === "top" ? -i : t === "bottom" ? i : 0];
  return a = Eh(a, e, r), Oe(a[0]) > Oe(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Av(t) {
  return !t.isGroup;
}
function hx(t) {
  return t.shape != null;
}
function Sm(t, e, r) {
  if (!t || !e)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(u) {
      Av(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return hx(o) && (s.shape = ne(o.shape)), s;
  }
  var a = n(t);
  e.traverse(function(o) {
    if (Av(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), qs(o, u, r, Te(o).dataIndex);
      }
    }
  });
}
function cx(t, e) {
  return X(t, function(r) {
    var n = r[0];
    n = ve(n, e.x), n = lt(n, e.x + e.width);
    var i = r[1];
    return i = ve(i, e.y), i = lt(i, e.y + e.height), [n, i];
  });
}
function vx(t, e) {
  var r = ve(t.x, e.x), n = lt(t.x + t.width, e.x + e.width), i = ve(t.y, e.y), a = lt(t.y + t.height, e.y + e.height);
  if (n >= r && a >= i)
    return {
      x: r,
      y: i,
      width: n - r,
      height: a - i
    };
}
function Mh(t, e, r) {
  var n = R({
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
    return t.indexOf("image://") === 0 ? (i.image = t.slice(8), ye(i, r), new Tn(n)) : Dh(t.replace("path://", ""), n, r, "center");
}
function dx(t, e, r, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (Tm(t, e, r, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function Tm(t, e, r, n, i, a, o, s) {
  var u = r - t, l = n - e, f = o - i, h = s - a, c = Hu(f, h, u, l);
  if (px(c))
    return !1;
  var v = t - i, d = e - a, m = Hu(v, d, u, l) / c;
  if (m < 0 || m > 1)
    return !1;
  var p = Hu(v, d, f, h) / c;
  return !(p < 0 || p > 1);
}
function Hu(t, e, r, n) {
  return t * n - r * e;
}
function px(t) {
  return t <= 1e-6 && t >= -1e-6;
}
function is(t, e, r, n, i) {
  return e == null || (we(e) ? ge[0] = ge[1] = ge[2] = ge[3] = e : (process.env.NODE_ENV !== "production" && O(e.length === 4), ge[0] = e[0], ge[1] = e[1], ge[2] = e[2], ge[3] = e[3]), n && (ge[0] = ve(0, ge[0]), ge[1] = ve(0, ge[1]), ge[2] = ve(0, ge[2]), ge[3] = ve(0, ge[3])), r && (ge[0] = -ge[0], ge[1] = -ge[1], ge[2] = -ge[2], ge[3] = -ge[3]), Iv(t, ge, "x", "width", 3, 1, i && i[0] || 0), Iv(t, ge, "y", "height", 0, 2, i && i[1] || 0)), t;
}
var ge = [0, 0, 0, 0];
function Iv(t, e, r, n, i, a, o) {
  var s = e[a] + e[i], u = t[n];
  t[n] += s, o = ve(0, lt(o, u)), t[n] < o ? (t[n] = o, t[r] += e[i] >= 0 ? -e[i] : e[a] >= 0 ? u + e[a] : Oe(s) > 1e-8 ? (u - o) * e[i] / s : 0) : t[r] -= e[i];
}
function Ks(t) {
  var e = t.itemTooltipOption, r = t.componentModel, n = t.itemName, i = V(e) ? {
    formatter: e
  } : e, a = r.mainType, o = r.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = t.formatterParamsExtra;
  u && w(me(u), function(f) {
    et(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = Te(t.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: n,
    option: ye({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function cf(t, e) {
  var r;
  t.isGroup && (r = e(t)), r || t.traverse(e);
}
function xm(t, e) {
  if (t)
    if (B(t))
      for (var r = 0; r < t.length; r++)
        cf(t[r], e);
    else
      cf(t, e);
}
function Ah(t) {
  return !t || Oe(t[1]) < io && Oe(t[2]) < io || Oe(t[0]) < io && Oe(t[3]) < io;
}
var io = 1e-5;
function ma(t, e) {
  return t ? Z.copy(t, e) : e.clone();
}
function Ih(t, e) {
  return e ? nh(t || Gt(), e) : void 0;
}
function wm(t) {
  return {
    z: t.get("z") || 0,
    zlevel: t.get("zlevel") || 0
  };
}
function gx(t) {
  var e = -1 / 0, r = 1 / 0;
  cf(t, function(a) {
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
function bm(t, e, r) {
  Cm(t, e, r, -1 / 0);
}
function Cm(t, e, r, n) {
  if (t.ignoreModelZ)
    return n;
  var i = t.getTextContent(), a = t.getTextGuideLine(), o = t.isGroup;
  if (o)
    for (var s = t.childrenRef(), u = 0; u < s.length; u++)
      n = ve(Cm(s[u], e, r, n), n);
  else
    t.z = e, t.zlevel = r, n = ve(t.z2 || 0, n);
  if (i && (i.z = e, i.zlevel = r, isFinite(n) && (i.z2 = n + 2)), a) {
    var l = t.textGuideLineConfig;
    a.z = e, a.zlevel = r, isFinite(n) && (a.z2 = n + (l && l.showAbove ? 1 : -1));
  }
  return n;
}
function mx(t) {
  return t.animation = {
    duration: 0
  }, t;
}
function yx(t, e) {
  return e ? nh(qi.transform, e) : Ma(qi.transform), qi.decomposeTransform(), Xo(t, qi), t;
}
var qi = new Ia();
qi.transform = Gt();
function _x(t) {
  var e = t.getZr().painter;
  return e.getType() === "canvas" ? e : null;
}
It("circle", Xs);
It("ellipse", _h);
It("sector", Zs);
It("ring", Sh);
It("polygon", Th);
It("polyline", xh);
It("rect", Me);
It("line", Ir);
It("bezierCurve", wh);
It("arc", $s);
const Sx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: $s,
  BezierCurve: wh,
  BoundingRect: Z,
  Circle: Xs,
  CompoundPath: WT,
  Ellipse: _h,
  Group: ft,
  HOVER_LAYER_FOR_INCREMENTAL: gm,
  HOVER_LAYER_FROM_THRESHOLD: pm,
  HOVER_LAYER_NO: dm,
  Image: Tn,
  IncrementalDisplayable: JT,
  Line: Ir,
  LinearGradient: YT,
  OrientedBoundingRect: hm,
  Path: Se,
  Point: de,
  Polygon: Th,
  Polyline: xh,
  RadialGradient: XT,
  Rect: Me,
  Ring: Sh,
  Sector: Zs,
  Text: ut,
  WH: pa,
  XY: nn,
  applyTransform: Eh,
  calcZ2Range: gx,
  clipPointsByRect: cx,
  clipRectByRect: vx,
  createIcon: Mh,
  decomposeTransform: yx,
  ensureCopyRect: ma,
  ensureCopyTransform: Ih,
  expandOrShrinkRect: is,
  extendPath: ix,
  extendShape: rx,
  getCurrentCanvasPainter: _x,
  getShapeClass: ax,
  getTransform: lx,
  groupTransition: Sm,
  initProps: Ch,
  isBoundingRectAxisAligned: Ah,
  isElementRemoved: aa,
  lineLineIntersect: Tm,
  linePolygonIntersect: dx,
  makeImage: mm,
  makePath: Dh,
  mergePath: ox,
  payloadDisableAnimation: mx,
  registerShape: It,
  removeElement: vm,
  removeElementWithFadeOut: tx,
  resizePath: _m,
  retrieveZInfo: wm,
  setTooltipConfig: Ks,
  subPixelOptimize: ux,
  subPixelOptimizeLine: ga,
  subPixelOptimizeRect: sx,
  transformDirection: fx,
  traverseElements: xm,
  traverseUpdateZ: bm,
  updateProps: qs
}, Symbol.toStringTag, { value: "Module" }));
var Qs = {};
function Tx(t, e) {
  for (var r = 0; r < Ar.length; r++) {
    var n = Ar[r], i = e[n], a = t.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = t.currentStates.slice();
  t.clearStates(!0), t.setStyle({
    text: e.normal
  }), t.useStates(o, !0);
}
function Lv(t, e, r) {
  var n = t.labelFetcher, i = t.labelDataIndex, a = t.labelDimIndex, o = e.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), r != null ? {
    interpolatedValue: r
  } : null)), s == null && (s = $(t.defaultText) ? t.defaultText(i, t, r) : t.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < Ar.length; l++) {
    var f = Ar[l], h = e[f];
    u[f] = G(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function xx(t, e, r, n) {
  r = r || Qs;
  for (var i = t instanceof ut, a = !1, o = 0; o < pv.length; o++) {
    var s = e[pv[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? t : t.getTextContent();
  if (a) {
    i || (u || (u = new ut(), t.setTextContent(u)), t.stateProxy && (u.stateProxy = t.stateProxy));
    var l = Lv(r, e), f = e.normal, h = !!f.getShallow("show"), c = vi(f, n && n.normal, r, !1, !i);
    c.text = l.normal, i || t.setTextConfig(Ov(f, r, !1));
    for (var o = 0; o < Ar.length; o++) {
      var v = Ar[o], s = e[v];
      if (s) {
        var d = u.ensureState(v), m = !!G(s.getShallow("show"), h);
        if (m !== h && (d.ignore = !m), d.style = vi(s, n && n[v], r, !0, !i), d.style.text = l[v], !i) {
          var p = t.ensureState(v);
          p.textConfig = Ov(s, r, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), r.enableTextSetter && (Dm(u).setLabelText = function(g) {
      var y = Lv(r, e, g);
      Tx(u, y);
    });
  } else u && (u.ignore = !0);
  t.dirty();
}
function QI(t, e) {
  e = e || "label";
  for (var r = {
    normal: t.getModel(e)
  }, n = 0; n < Ar.length; n++) {
    var i = Ar[n];
    r[i] = t.getModel([i, e]);
  }
  return r;
}
function vi(t, e, r, n, i) {
  var a = {};
  return bx(a, t, r, n, i), e && R(a, e), a;
}
function Ov(t, e, r) {
  e = e || {};
  var n = {}, i, a = t.getShallow("rotate"), o = G(t.getShallow("distance"), r ? null : 5), s = t.getShallow("offset");
  return i = t.getShallow("position") || (r ? null : "inside"), i === "outside" && (i = e.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = t.get("color") === "inherit" ? e.inheritColor || null : "auto", e.autoOverflowArea != null && (n.autoOverflowArea = e.autoOverflowArea), e.layoutRect != null && (n.layoutRect = e.layoutRect), n;
}
function bx(t, e, r, n, i) {
  r = r || Qs;
  var a = e.ecModel, o = a && a.option.textStyle, s = Cx(e), u;
  if (s) {
    u = {};
    var l = "richInheritPlainLabel", f = G(e.get(l), a ? a.get(l) : void 0);
    for (var h in s)
      if (s.hasOwnProperty(h)) {
        var c = e.getModel(["rich", h]);
        kv(u[h] = {}, c, o, e, f, r, n, i, !1, !0);
      }
  }
  u && (t.rich = u);
  var v = e.get("overflow");
  v && (t.overflow = v);
  var d = e.get("lineOverflow");
  d && (t.lineOverflow = d);
  var m = t, p = e.get("minMargin");
  if (p != null)
    p = we(p) ? p / 2 : 0, m.margin = [p, p, p, p], m.__marginType = $n.minMargin;
  else {
    var g = e.get("textMargin");
    g != null && (m.margin = th(g), m.__marginType = $n.textMargin);
  }
  kv(t, e, o, null, null, r, n, i, !0, !1);
}
function Cx(t) {
  for (var e; t && t !== t.ecModel; ) {
    var r = (t.option || Qs).rich;
    if (r) {
      e = e || {};
      for (var n = me(r), i = 0; i < n.length; i++) {
        var a = n[i];
        e[a] = 1;
      }
    }
    t = t.parentModel;
  }
  return e;
}
var Nv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], Pv = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], Rv = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function kv(t, e, r, n, i, a, o, s, u, l) {
  r = !o && r || Qs;
  var f = a && a.inheritColor, h = e.getShallow("color"), c = e.getShallow("textBorderColor"), v = G(e.getShallow("opacity"), r.opacity);
  (h === "inherit" || h === "auto") && (process.env.NODE_ENV !== "production" && h === "auto" && Le("color: 'auto'", "color: 'inherit'"), f ? h = f : h = null), (c === "inherit" || c === "auto") && (process.env.NODE_ENV !== "production" && c === "auto" && Le("color: 'auto'", "color: 'inherit'"), f ? c = f : c = null), s || (h = h || r.color, c = c || r.textBorderColor), h != null && (t.fill = h), c != null && (t.stroke = c);
  var d = G(e.getShallow("textBorderWidth"), r.textBorderWidth);
  d != null && (t.lineWidth = d);
  var m = G(e.getShallow("textBorderType"), r.textBorderType);
  m != null && (t.lineDash = m);
  var p = G(e.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
  p != null && (t.lineDashOffset = p), !o && v == null && !l && (v = a && a.defaultOpacity), v != null && (t.opacity = v), !o && !s && t.fill == null && a.inheritColor && (t.fill = a.inheritColor);
  for (var g = 0; g < Nv.length; g++) {
    var y = Nv[g], _ = i !== !1 && n ? wr(e.getShallow(y), n.getShallow(y), r[y]) : G(e.getShallow(y), r[y]);
    _ != null && (t[y] = _);
  }
  for (var g = 0; g < Pv.length; g++) {
    var y = Pv[g], _ = e.getShallow(y);
    _ != null && (t[y] = _);
  }
  if (t.verticalAlign == null) {
    var S = e.getShallow("baseline");
    S != null && (t.verticalAlign = S);
  }
  if (!u || !a.disableBox) {
    for (var g = 0; g < Rv.length; g++) {
      var y = Rv[g], _ = e.getShallow(y);
      _ != null && (t[y] = _);
    }
    var T = e.getShallow("borderType");
    T != null && (t.borderDash = T), (t.backgroundColor === "auto" || t.backgroundColor === "inherit") && f && (process.env.NODE_ENV !== "production" && t.backgroundColor === "auto" && Le("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), t.backgroundColor = f), (t.borderColor === "auto" || t.borderColor === "inherit") && f && (process.env.NODE_ENV !== "production" && t.borderColor === "auto" && Le("borderColor: 'auto'", "borderColor: 'inherit'"), t.borderColor = f);
  }
}
function Dx(t, e) {
  var r = e && e.getModel("textStyle");
  return zt([
    // FIXME in node-canvas fontWeight is before fontStyle
    t.fontStyle || r && r.getShallow("fontStyle") || "",
    t.fontWeight || r && r.getShallow("fontWeight") || "",
    (t.fontSize || r && r.getShallow("fontSize") || 12) + "px",
    t.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Dm = pe();
function JI(t, e, r, n) {
  if (t) {
    var i = Dm(t);
    i.prevValue = i.value, i.value = r;
    var a = e.normal;
    i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = e);
  }
}
var $n = {
  minMargin: 1,
  textMargin: 2
}, Ex = ["textStyle", "color"], Gu = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Uu = new ut(), Mx = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getTextColor = function(e) {
      var r = this.ecModel;
      return this.getShallow("color") || (!e && r ? r.get(Ex) : null);
    }, t.prototype.getFont = function() {
      return Dx({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, t.prototype.getTextRect = function(e) {
      for (var r = {
        text: e,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < Gu.length; n++)
        r[Gu[n]] = this.getShallow(Gu[n]);
      return Uu.useStyle(r), Uu.update(), Uu.getBoundingRect();
    }, t;
  })()
), Em = [
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
], Ax = va(Em), Ix = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getLineStyle = function(e) {
      return Ax(this, e);
    }, t;
  })()
), Mm = [
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
], Lx = va(Mm), Ox = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getItemStyle = function(e, r) {
      return Lx(this, e, r);
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
      return new e(ne(this.option));
    }, t.prototype.parsePath = function(e) {
      return typeof e == "string" ? e.split(".") : e;
    }, t.prototype.resolveParentPath = function(e) {
      return e;
    }, t.prototype.isAnimationEnabled = function() {
      if (!q.node && this.option) {
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
rh(xe);
F0(xe);
Qt(xe, Ix);
Qt(xe, Ox);
Qt(xe, W0);
Qt(xe, Mx);
function Ii(t) {
  return t == null ? 0 : t.length || 1;
}
function Bv(t) {
  return t;
}
var Nx = (
  /** @class */
  (function() {
    function t(e, r, n, i, a, o) {
      this._old = e, this._new = r, this._oldKeyGetter = n || Bv, this._newKeyGetter = i || Bv, this.context = a, this._diffModeMultiple = o === "multiple";
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
        var s = i[o], u = n[s], l = Ii(u);
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
        var u = a[s], l = n[u], f = i[u], h = Ii(l), c = Ii(f);
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
        var i = e[n], a = r[i], o = Ii(a);
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
          var u = r[s], l = Ii(u);
          l === 0 ? (r[s] = o, a && n.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o);
        }
      }
    }, t;
  })()
), it = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, Am = pe();
function Px(t) {
  Am(t).datasetMap = W();
}
function Rx(t, e, r) {
  var n = {}, i = Im(e);
  if (!i || !t)
    return n;
  var a = [], o = [], s = e.ecModel, u = Am(s).datasetMap, l = i.uid + "_" + r.seriesLayoutBy, f, h;
  t = t.slice(), w(t, function(m, p) {
    var g = H(m) ? m : t[p] = {
      name: m
    };
    g.type === "ordinal" && f == null && (f = p, h = d(g)), n[g.name] = [];
  });
  var c = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  w(t, function(m, p) {
    var g = m.name, y = d(m);
    if (f == null) {
      var _ = c.valueWayDim;
      v(n[g], _, y), v(o, _, y), c.valueWayDim += y;
    } else if (f === p)
      v(n[g], 0, y), v(a, 0, y);
    else {
      var _ = c.categoryWayDim;
      v(n[g], _, y), v(o, _, y), c.categoryWayDim += y;
    }
  });
  function v(m, p, g) {
    for (var y = 0; y < g; y++)
      m.push(p + y);
  }
  function d(m) {
    var p = m.dimsDef;
    return p ? p.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function Im(t) {
  var e = t.get("data", !0);
  if (!e)
    return ka(t.ecModel, "dataset", {
      index: t.get("datasetIndex", !0),
      id: t.get("datasetId", !0)
    }, xt).models[0];
}
function kx(t) {
  return !t.get("transform", !0) && !t.get("fromTransformResult", !0) ? [] : ka(t.ecModel, "dataset", {
    index: t.get("fromDatasetIndex", !0),
    id: t.get("fromDatasetId", !0)
  }, xt).models;
}
function Lm(t, e) {
  return Bx(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
}
function Bx(t, e, r, n, i, a) {
  var o, s = 5;
  if (Xe(t))
    return it.Not;
  var u, l;
  if (n) {
    var f = n[a];
    H(f) ? (u = f.name, l = f.type) : V(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? it.Must : it.Not;
  if (e === Fe) {
    var h = t;
    if (r === xn) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = S(c[i + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[i + v];
        if (d && (o = S(d[a])) != null)
          return o;
      }
  } else if (e === At) {
    var m = t;
    if (!u)
      return it.Not;
    for (var v = 0; v < m.length && v < s; v++) {
      var p = m[v];
      if (p && (o = S(p[u])) != null)
        return o;
    }
  } else if (e === jt) {
    var g = t;
    if (!u)
      return it.Not;
    var c = g[u];
    if (!c || Xe(c))
      return it.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = S(c[v])) != null)
        return o;
  } else if (e === ht)
    for (var y = t, v = 0; v < y.length && v < s; v++) {
      var p = y[v], _ = Pa(p);
      if (!B(_))
        return it.Not;
      if ((o = S(_[a])) != null)
        return o;
    }
  function S(T) {
    var x = V(T);
    if (T != null && isFinite(Number(T)) && T !== "")
      return x ? it.Might : it.Not;
    if (x && T !== "-")
      return it.Must;
  }
  return it.Not;
}
var Js = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.data = e.data || (e.sourceFormat === jt ? {} : []), this.sourceFormat = e.sourceFormat || Zg, this.seriesLayoutBy = e.seriesLayoutBy || Zt, this.startIndex = e.startIndex || 0, this.dimensionsDetectedCount = e.dimensionsDetectedCount, this.metaRawOption = e.metaRawOption;
      var r = this.dimensionsDefine = e.dimensionsDefine;
      if (r)
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          i.type == null && Lm(this, n) === it.Must && (i.type = "ordinal");
        }
    }
    return t;
  })()
);
function Lh(t) {
  return t instanceof Js;
}
function vf(t, e, r) {
  r = r || Nm(t);
  var n = e.seriesLayoutBy, i = Fx(t, r, n, e.sourceHeader, e.dimensions), a = new Js({
    data: t,
    sourceFormat: r,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: ne(e)
  });
  return a;
}
function Om(t) {
  return new Js({
    data: t,
    sourceFormat: Xe(t) ? lr : ht
  });
}
function Vx(t) {
  return new Js({
    data: t.data,
    sourceFormat: t.sourceFormat,
    seriesLayoutBy: t.seriesLayoutBy,
    dimensionsDefine: ne(t.dimensionsDefine),
    startIndex: t.startIndex,
    dimensionsDetectedCount: t.dimensionsDetectedCount
  });
}
function Nm(t) {
  var e = Zg;
  if (Xe(t))
    e = lr;
  else if (B(t)) {
    t.length === 0 && (e = Fe);
    for (var r = 0, n = t.length; r < n; r++) {
      var i = t[r];
      if (i != null) {
        if (B(i) || Xe(i)) {
          e = Fe;
          break;
        } else if (H(i)) {
          e = At;
          break;
        }
      }
    }
  } else if (H(t)) {
    for (var a in t)
      if (et(t, a) && tt(t[a])) {
        e = jt;
        break;
      }
  }
  return e;
}
function Fx(t, e, r, n, i) {
  var a, o;
  if (!t)
    return {
      dimensionsDefine: Vv(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (e === Fe) {
    var s = t;
    n === "auto" || n == null ? Fv(function(l) {
      l != null && l !== "-" && (V(l) ? o == null && (o = 1) : o = 0);
    }, r, s, 10) : o = we(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], Fv(function(l, f) {
      i[f] = l != null ? l + "" : "";
    }, r, s, 1 / 0)), a = i ? i.length : r === xn ? s.length : s[0] ? s[0].length : null;
  } else if (e === At)
    i || (i = zx(t));
  else if (e === jt)
    i || (i = [], w(t, function(l, f) {
      i.push(f);
    }));
  else if (e === ht) {
    var u = Pa(t[0]);
    a = B(u) && u.length || 1;
  } else e === lr && process.env.NODE_ENV !== "production" && O(!!i, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: Vv(i),
    dimensionsDetectedCount: a
  };
}
function zx(t) {
  for (var e = 0, r; e < t.length && !(r = t[e++]); )
    ;
  if (r)
    return me(r);
}
function Vv(t) {
  if (t) {
    var e = W();
    return X(t, function(r, n) {
      r = H(r) ? r : {
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
function Fv(t, e, r, n) {
  if (e === xn)
    for (var i = 0; i < r.length && i < n; i++)
      t(r[i] ? r[i][0] : null, i);
  else
    for (var a = r[0] || [], i = 0; i < a.length && i < n; i++)
      t(a[i], i);
}
function Pm(t) {
  var e = t.sourceFormat;
  return e === At || e === jt;
}
var Kr, Qr, Jr, jr, zv, Hv, Rm = (
  /** @class */
  (function() {
    function t(e, r) {
      var n = Lh(e) ? e : Om(e);
      this._source = n;
      var i = this._data = n.data, a = n.sourceFormat, o = n.seriesLayoutBy;
      if (a === lr) {
        if (process.env.NODE_ENV !== "production" && r == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = r, this._data = i;
      }
      if (process.env.NODE_ENV !== "production") {
        var s = Hx[as(a, o)];
        s && s(i, n.dimensionsDefine);
      }
      Hv(this, i, n);
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
      Hv = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = zv[as(l, f)];
        if (process.env.NODE_ENV !== "production" && O(v, "Invalide sourceFormat: " + l), R(o, v), l === lr)
          o.getItem = r, o.count = i, o.fillStorage = n;
        else {
          var d = km(l, f);
          o.getItem = _e(d, null, s, h, c);
          var m = Bm(l, f);
          o.count = _e(m, null, s, h, c);
        }
      };
      var r = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, n = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
          for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], m = v[1] == null ? -1 / 0 : v[1], p = s - o, g = u[c], y = 0; y < p; y++) {
            var _ = f[y * h + c];
            g[o + y] = _, _ < d && (d = _), _ > m && (m = _);
          }
          v[0] = d, v[1] = m;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      zv = (e = {}, e[Fe + "_" + Zt] = {
        pure: !0,
        appendData: a
      }, e[Fe + "_" + xn] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, e[At] = {
        pure: !0,
        appendData: a
      }, e[jt] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          w(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, e[ht] = {
        appendData: a
      }, e[lr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && O(Xe(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
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
), ao = function(t) {
  B(t) || oe("series.data or dataset.source must be an array.");
}, Hx = (Kr = {}, Kr[Fe + "_" + Zt] = ao, Kr[Fe + "_" + xn] = ao, Kr[At] = ao, Kr[jt] = function(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r].name;
    n == null && oe("dimension name must not be null/undefined.");
  }
}, Kr[ht] = ao, Kr), Gv = function(t, e, r, n) {
  return t[n];
}, Gx = (Qr = {}, Qr[Fe + "_" + Zt] = function(t, e, r, n) {
  return t[n + e];
}, Qr[Fe + "_" + xn] = function(t, e, r, n, i) {
  n += e;
  for (var a = i || [], o = t, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[n] : null;
  }
  return a;
}, Qr[At] = Gv, Qr[jt] = function(t, e, r, n, i) {
  for (var a = i || [], o = 0; o < r.length; o++) {
    var s = r[o].name, u = s != null ? t[s] : null;
    a[o] = u ? u[n] : null;
  }
  return a;
}, Qr[ht] = Gv, Qr);
function km(t, e) {
  var r = Gx[as(t, e)];
  return process.env.NODE_ENV !== "production" && O(r, 'Do not support get item on "' + t + '", "' + e + '".'), r;
}
var Uv = function(t, e, r) {
  return t.length;
}, Ux = (Jr = {}, Jr[Fe + "_" + Zt] = function(t, e, r) {
  return Math.max(0, t.length - e);
}, Jr[Fe + "_" + xn] = function(t, e, r) {
  var n = t[0];
  return n ? Math.max(0, n.length - e) : 0;
}, Jr[At] = Uv, Jr[jt] = function(t, e, r) {
  var n = r[0].name, i = n != null ? t[n] : null;
  return i ? i.length : 0;
}, Jr[ht] = Uv, Jr);
function Bm(t, e) {
  var r = Ux[as(t, e)];
  return process.env.NODE_ENV !== "production" && O(r, 'Do not support count on "' + t + '", "' + e + '".'), r;
}
var Wu = function(t, e, r) {
  return t[e];
}, Wx = (jr = {}, jr[Fe] = Wu, jr[At] = function(t, e, r) {
  return t[r];
}, jr[jt] = Wu, jr[ht] = function(t, e, r) {
  var n = Pa(t);
  return n instanceof Array ? n[e] : n;
}, jr[lr] = Wu, jr);
function Vm(t) {
  var e = Wx[t];
  return process.env.NODE_ENV !== "production" && O(e, 'Do not support get value on "' + t + '".'), e;
}
function as(t, e) {
  return t === Fe ? t + "_" + e : t;
}
function di(t, e, r) {
  if (t) {
    var n = t.getRawDataItem(e);
    if (n != null) {
      var i = t.getStore(), a = i.getSource().sourceFormat;
      if (r != null) {
        var o = t.getDimensionIndex(r), s = i.getDimensionProperty(o);
        return Vm(a)(n, o, s);
      } else {
        var u = n;
        return a === ht && (u = Pa(n)), u;
      }
    }
  }
}
var Yx = (
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
function Xx(t, e) {
  var r = {}, n = r.encode = {}, i = W(), a = [], o = [], s = {};
  w(t.dimensions, function(c) {
    var v = t.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && O(tf.get(d) == null);
      var m = v.coordDimIndex;
      Yu(n, d)[m] = c, v.isExtraCoord || (i.set(d, 1), $x(v.type) && (a[0] = c), Yu(s, d)[m] = t.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    tf.each(function(p, g) {
      var y = Yu(n, g), _ = v.otherDims[g];
      _ != null && _ !== !1 && (y[_] = v.name);
    });
  });
  var u = [], l = {};
  i.each(function(c, v) {
    var d = n[v];
    l[v] = d[0], u = u.concat(d);
  }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = X(u, function(c) {
    return t.getDimensionInfo(c).storeDimIndex;
  }), r.encodeFirstDimNotExtra = l;
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, r.userOutput = new Yx(s, e), r;
}
function Yu(t, e) {
  return t.hasOwnProperty(e) || (t[e] = []), t[e];
}
function Zx(t) {
  return t === "category" ? "ordinal" : t === "time" ? "time" : "float";
}
function $x(t) {
  return !(t === "ordinal" || t === "time");
}
var No = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.otherDims = {}, e != null && R(this, e);
    }
    return t;
  })()
);
function Po(t, e) {
  var r = e && e.type;
  return r === "ordinal" ? t : (r === "time" && !we(t) && t != null && t !== "-" && (t = +Ti(t)), t == null || t === "" ? NaN : Number(t));
}
W({
  number: function(t) {
    return parseFloat(t);
  },
  time: function(t) {
    return +Ti(t);
  },
  trim: function(t) {
    return V(t) ? zt(t) : t;
  }
});
var qx = (
  /** @class */
  (function() {
    function t(e, r) {
      var n = e === "desc";
      this._resultLT = n ? 1 : -1, r == null && (r = n ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0;
    }
    return t.prototype.evaluate = function(e, r) {
      var n = we(e) ? e : es(e), i = we(r) ? r : es(r), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = V(e), u = V(r);
        s && (n = u ? e : 0), u && (i = s ? r : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, t;
  })()
);
function Kx(t) {
  var e = "", r = -1 / 0, n = -1 / 0, i = 1 / 0, a = 1 / 0;
  return t && (t.g != null && (e += "G" + t.g, r = t.g), t.ge != null && (e += "GE" + t.ge, n = t.ge), t.l != null && (e += "L" + t.l, i = t.l), t.le != null && (e += "LE" + t.le, a = t.le)), {
    key: e,
    g: r,
    ge: n,
    l: i,
    le: a
  };
}
function Qx(t, e) {
  return e > t.g && e >= t.ge && e < t.l && e <= t.le;
}
var Jx = typeof Uint32Array === xi ? Array : Uint32Array, jx = typeof Uint16Array === xi ? Array : Uint16Array, Fm = typeof Int32Array === xi ? Array : Int32Array, Wv = typeof Float64Array === xi ? Array : Float64Array, zm = {
  float: Wv,
  int: Fm,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Wv
}, Xu;
function On(t) {
  return t > 65535 ? Jx : jx;
}
function ew(t) {
  var e = t.constructor;
  return e === Array ? t.slice() : new e(t);
}
function Yv(t, e, r, n, i) {
  var a = zm[r || "float"];
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
var df = (
  /** @class */
  (function() {
    function t() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = W();
    }
    return t.prototype.initData = function(e, r, n) {
      process.env.NODE_ENV !== "production" && O($(e.getItem) && $(e.count), "Invalid data provider."), this._provider = e, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = e.getSource(), a = this.defaultDimValueGetter = Xu[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [];
      var o = Pm(i);
      this._dimensions = X(r, function(s) {
        return process.env.NODE_ENV !== "production" && o && O(s.property != null), {
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
      }, n.set(e, a), this._chunks[a] = new zm[r || "float"](this._rawCount), this._rawExtent[a] = Vt(), a;
    }, t.prototype.collectOrdinalMeta = function(e, r) {
      var n = this._chunks[e], i = this._dimensions[e], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[e] = Vt());
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
      process.env.NODE_ENV !== "production" && O(!this._indices, "appendData can only be called on raw data.");
      var r = this._provider, n = this.count();
      r.appendData(e);
      var i = r.count();
      return r.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, t.prototype.appendValues = function(e, r) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(e.length, r || 0), l = 0; l < a; l++) {
        var f = i[l];
        Yv(n, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = i[d], m = Xu.arrayRows.call(this, e[v] || h, f.property, v, d);
          n[d][c] = m;
          var p = o[d];
          m < p[0] && (p[0] = m), m > p[1] && (p[1] = m);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, t.prototype._initDataFromProvider = function(e, r, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = X(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = Vt()), Yv(a, f, h.type, r, n);
      }
      if (i.fillStorage)
        i.fillStorage(e, r, a, u);
      else
        for (var c = [], v = e; v < r; v++) {
          c = i.getItem(v, c);
          for (var d = 0; d < s; d++) {
            var m = a[d], p = this._dimValueGetter(c, l[d], v, d);
            m[v] = p;
            var g = u[d];
            p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
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
      }), Pg(r);
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
        var n = On(this._rawCount);
        e = new n(this.count());
        for (var a = 0; a < e.length; a++)
          e[a] = a;
      }
      return e;
    }, t.prototype.filter = function(e, r) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = On(n._rawCount), o = new a(i), s = [], u = e.length, l = 0, f = e[0], h = n._chunks, c = 0; c < i; c++) {
        var v = void 0, d = n.getRawIndex(c);
        if (u === 0)
          v = r(c);
        else if (u === 1) {
          var m = h[f][d];
          v = r(m, c);
        } else {
          for (var p = 0; p < u; p++)
            s[p] = h[e[p]][d];
          s[p] = c, v = r.apply(null, s);
        }
        v && (o[l++] = d);
      }
      return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n;
    }, t.prototype.selectRange = function(e) {
      var r = this.clone(), n = r._count;
      if (!n)
        return this;
      var i = me(e), a = i.length;
      if (!a)
        return this;
      var o = r.count(), s = On(r._rawCount), u = new s(o), l = 0, f = i[0], h = e[f][0], c = e[f][1], v = r._chunks, d = !1;
      if (!r._indices) {
        var m = 0;
        if (a === 1) {
          for (var p = v[i[0]], g = 0; g < n; g++) {
            var y = p[g];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = m), m++;
          }
          d = !0;
        } else if (a === 2) {
          for (var p = v[i[0]], _ = v[i[1]], S = e[i[1]][0], T = e[i[1]][1], g = 0; g < n; g++) {
            var y = p[g], x = _[g];
            (y >= h && y <= c || isNaN(y)) && (x >= S && x <= T || isNaN(x)) && (u[l++] = m), m++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var b = r.getRawIndex(g), y = v[i[0]][b];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = b);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var C = !0, b = r.getRawIndex(g), E = 0; E < a; E++) {
              var D = i[E], y = v[D][b];
              (y < e[D][0] || y > e[D][1]) && (C = !1);
            }
            C && (u[l++] = r.getRawIndex(g));
          }
      return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r;
    }, t.prototype.map = function(e, r) {
      var n = this.clone(e);
      return this._updateDims(n, e, r), n;
    }, t.prototype.modify = function(e, r) {
      this._updateDims(this, e, r);
    }, t.prototype._updateDims = function(e, r, n) {
      for (var i = e._chunks, a = [], o = r.length, s = e.count(), u = [], l = e._rawExtent, f = 0; f < r.length; f++)
        l[r[f]] = Vt();
      for (var h = 0; h < s; h++) {
        for (var c = e.getRawIndex(h), v = 0; v < o; v++)
          u[v] = i[r[v]][c];
        u[o] = h;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var m = r[f], p = d[f], g = l[m], y = i[m];
            y && (y[c] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      }
    }, t.prototype.lttbDownSample = function(e, r) {
      var n = this.clone([e], !0), i = n._chunks, a = i[e], o = this.count(), s = 0, u = Math.floor(1 / r), l = this.getRawIndex(0), f, h, c, v = new (On(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var m = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), g = (p + m) / 2, y = 0, _ = m; _ < p; _++) {
          var S = this.getRawIndex(_), T = a[S];
          isNaN(T) || (y += T);
        }
        y /= p - m;
        var x = d, b = Math.min(d + u, o), C = d - 1, E = a[l];
        f = -1, c = x;
        for (var D = -1, M = 0, _ = x; _ < b; _++) {
          var S = this.getRawIndex(_), T = a[S];
          if (isNaN(T)) {
            M++, D < 0 && (D = S);
            continue;
          }
          h = Math.abs((C - g) * (T - E) - (C - _) * (y - E)), h > f && (f = h, c = S);
        }
        M > 0 && M < b - x && (v[s++] = Math.min(D, c), c = Math.max(D, c)), v[s++] = c, l = c;
      }
      return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n;
    }, t.prototype.minmaxDownSample = function(e, r) {
      for (var n = this.clone([e], !0), i = n._chunks, a = Math.floor(1 / r), o = i[e], s = this.count(), u = new (On(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, c = o[this.getRawIndex(h)], v = f, d = o[this.getRawIndex(v)], m = a;
        f + a > s && (m = s - f);
        for (var p = 0; p < m; p++) {
          var g = this.getRawIndex(f + p), y = o[g];
          y < c && (c = y, h = f + p), y > d && (d = y, v = f + p);
        }
        var _ = this.getRawIndex(h), S = this.getRawIndex(v);
        h < v ? (u[l++] = _, u[l++] = S) : (u[l++] = S, u[l++] = _);
      }
      return n._count = l, n._indices = u, n._updateGetRawIdx(), n;
    }, t.prototype.downSample = function(e, r, n, i) {
      for (var a = this.clone([e], !0), o = a._chunks, s = [], u = Math.floor(1 / r), l = o[e], f = this.count(), h = a._rawExtent[e] = Vt(), c = new (On(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var m = 0; m < u; m++) {
          var p = this.getRawIndex(d + m);
          s[m] = l[p];
        }
        var g = n(s), y = this.getRawIndex(Math.min(d + i(s, g) || 0, f - 1));
        l[y] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), c[v++] = y;
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
      var n = this._chunks[e], i = Vt();
      if (!n)
        return i;
      var a = this.count(), o = !this._indices && !r;
      if (o)
        return this._rawExtent[e].slice();
      var s = this._extent, u = s[e] || (s[e] = {}), l = Kx(r), f = l.key, h = u[f];
      if (h)
        return h.slice();
      for (var c = i[0], v = i[1], d = 0; d < a; d++) {
        var m = this.getRawIndex(d), p = n[m];
        (!r || Qx(l, p)) && (p < c && (c = p), p > v && (v = p));
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
      var n = new t(), i = this._chunks, a = e && yi(e, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? ew(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), r || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, t.prototype._copyCommonProps = function(e) {
      e._count = this._count, e._rawCount = this._rawCount, e._provider = this._provider, e._dimensions = this._dimensions, e._extent = ne(this._extent), e._rawExtent = ne(this._rawExtent);
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
        return Po(r[a], this._dimensions[a]);
      }
      Xu = {
        arrayRows: e,
        objectRows: function(r, n, i, a) {
          return Po(r[n], this._dimensions[a]);
        },
        keyedColumns: e,
        original: function(r, n, i, a) {
          var o = r && (r.value == null ? r : r.value);
          return Po(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(r, n, i, a) {
          return r[a];
        }
      };
    })(), t;
  })()
), tw = pe(), rw = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, Hm = (
  /** @class */
  (function() {
    function t(e) {
      this.dimensions = e.dimensions, this._dimOmitted = e.dimensionOmitted, this.source = e.source, this._fullDimCount = e.fullDimensionCount, this._updateDimOmitted(e.dimensionOmitted);
    }
    return t.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, t.prototype._updateDimOmitted = function(e) {
      this._dimOmitted = e, e && (this._dimNameMap || (this._dimNameMap = Um(this.source)));
    }, t.prototype.getSourceDimensionIndex = function(e) {
      return G(this._dimNameMap.get(e), -1);
    }, t.prototype.getSourceDimension = function(e) {
      var r = this.source.dimensionsDefine;
      if (r)
        return r[e];
    }, t.prototype.makeStoreSchema = function() {
      for (var e = this._fullDimCount, r = Pm(this.source), n = !Wm(e), i = "", a = [], o = 0, s = 0; o < e; o++) {
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
        }), r && u != null && (!h || !h.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += rw[l] || "f", f && (i += f.uid), i += "$";
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
function Gm(t) {
  return t instanceof Hm;
}
function Oh(t) {
  for (var e = W(), r = 0; r < (t || []).length; r++) {
    var n = t[r], i = H(n) ? n.name : n;
    i != null && e.get(i) == null && e.set(i, r);
  }
  return e;
}
function Um(t) {
  var e = tw(t);
  return e.dimNameMap || (e.dimNameMap = Oh(t.dimensionsDefine));
}
function Wm(t) {
  return t > 30;
}
var Li = H, gr = X, nw = typeof Int32Array > "u" ? Array : Int32Array, iw = "e\0\0", Xv = -1, aw = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], ow = ["_approximateExtent"], Zv, oo, Oi, Nn, Zu, Ni, $u, sw = (
  /** @class */
  (function() {
    function t(e, r) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      Gm(e) ? (n = e.dimensions, this._dimOmitted = e.isDimensionOmitted(), this._schema = e) : (i = !0, n = e), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
        var h = n[f], c = V(h) ? new No({
          name: h
        }) : h instanceof No ? h : new No(h), v = c.name;
        c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
        var d = c.otherDims = c.otherDims || {};
        o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), process.env.NODE_ENV !== "production" && O(i || c.storeDimIndex >= 0), i && (c.storeDimIndex = f), d.itemName === 0 && (this._nameDimIdx = c.storeDimIndex), d.itemId === 0 && (this._idDimIdx = c.storeDimIndex);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
        var m = this._dimIdxToName = W();
        w(o, function(p) {
          m.set(a[p].storeDimIndex, p);
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
      if (e instanceof df && (a = e), !a) {
        var o = this.dimensions, s = Lh(e) || tt(e) ? new Rm(e, o.length) : e;
        a = new df();
        var u = gr(o, function(l) {
          return {
            type: i._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, n);
      }
      this._store = a, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = Xx(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, t.prototype.appendData = function(e) {
      var r = this._store.appendData(e);
      this._doInit(r[0], r[1]);
    }, t.prototype.appendValues = function(e, r) {
      var n = this._store.appendValues(e, r && r.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), r)
        for (var s = i; s < a; s++) {
          var u = s - i;
          this._nameList[s] = r[u], o && $u(this, s);
        }
    }, t.prototype._updateOrdinalMeta = function() {
      for (var e = this._store, r = this.dimensions, n = 0; n < r.length; n++) {
        var i = this._dimInfos[r[n]];
        i.ordinalMeta && e.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, t.prototype._shouldMakeIdFromName = function() {
      var e = this._store.getProvider();
      return this._idDimIdx == null && e.getSource().sourceFormat !== lr && !e.fillStorage;
    }, t.prototype._doInit = function(e, r) {
      if (!(e >= r)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, u = s === ht;
        if (u && !i.pure)
          for (var l = [], f = e; f < r; f++) {
            var h = i.getItem(f, l);
            if (!this.hasItemOption && MS(h) && (this.hasItemOption = !0), h) {
              var c = h.name;
              a[f] == null && c != null && (a[f] = Xt(c, null));
              var v = h.id;
              o[f] == null && v != null && (o[f] = Xt(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = e; f < r; f++)
            $u(this, f);
        Zv(this);
      }
    }, t.prototype.getApproximateExtent = function(e, r) {
      return this._approximateExtent[e] || this._store.getDataExtent(this._getStoreDimIndex(e), r);
    }, t.prototype.setApproximateExtent = function(e, r) {
      r = this.getDimension(r), this._approximateExtent[r] = e.slice();
    }, t.prototype.getCalculationInfo = function(e) {
      return this._calculationInfo[e];
    }, t.prototype.setCalculationInfo = function(e, r) {
      Li(e) ? R(this._calculationInfo, e) : this._calculationInfo[e] = r;
    }, t.prototype.getName = function(e) {
      var r = this.getRawIndex(e), n = this._nameList[r];
      return n == null && this._nameDimIdx != null && (n = Oi(this, this._nameDimIdx, r)), n == null && (n = ""), n;
    }, t.prototype._getCategory = function(e, r) {
      var n = this._store.get(e, r), i = this._store.getOrdinalMeta(e);
      return i ? i.categories[n] : n;
    }, t.prototype.getId = function(e) {
      return oo(this, this.getRawIndex(e));
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
      return B(e) ? i.getValues(gr(e, function(a) {
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
      return i == null || isNaN(i) ? Xv : i;
    }, t.prototype.each = function(e, r, n) {
      $(e) && (n = r, r = e, e = []);
      var i = n || this, a = gr(Nn(e), this._getStoreDimIndex, this);
      this._store.each(a, i ? _e(r, i) : r);
    }, t.prototype.filterSelf = function(e, r, n) {
      $(e) && (n = r, r = e, e = []);
      var i = n || this, a = gr(Nn(e), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? _e(r, i) : r), this;
    }, t.prototype.selectRange = function(e) {
      var r = this, n = {}, i = me(e);
      return w(i, function(a) {
        var o = r._getStoreDimIndex(a);
        n[o] = e[a];
      }), this._store = this._store.selectRange(n), this;
    }, t.prototype.mapArray = function(e, r, n) {
      $(e) && (n = r, r = e, e = []), n = n || this;
      var i = [];
      return this.each(e, function() {
        i.push(r && r.apply(this, arguments));
      }, n), i;
    }, t.prototype.map = function(e, r, n, i) {
      var a = n || i || this, o = gr(Nn(e), this._getStoreDimIndex, this), s = Ni(this);
      return s._store = this._store.map(o, a ? _e(r, a) : r), s;
    }, t.prototype.modify = function(e, r, n, i) {
      var a = this, o = n || i || this;
      process.env.NODE_ENV !== "production" && w(Nn(e), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = gr(Nn(e), this._getStoreDimIndex, this);
      this._store.modify(s, o ? _e(r, o) : r);
    }, t.prototype.downSample = function(e, r, n, i) {
      var a = Ni(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(e), r, n, i), a;
    }, t.prototype.minmaxDownSample = function(e, r) {
      var n = Ni(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(e), r), n;
    }, t.prototype.lttbDownSample = function(e, r) {
      var n = Ni(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(e), r), n;
    }, t.prototype.getRawDataItem = function(e) {
      return this._store.getRawDataItem(e);
    }, t.prototype.getItemModel = function(e) {
      var r = this.hostModel, n = this.getRawDataItem(e);
      return new xe(n, r, r && r.ecModel);
    }, t.prototype.diff = function(e) {
      var r = this;
      return new Nx(e ? e.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return oo(e, n);
      }, function(n) {
        return oo(r, n);
      });
    }, t.prototype.getVisual = function(e) {
      var r = this._visual;
      return r && r[e];
    }, t.prototype.setVisual = function(e, r) {
      this._visual = this._visual || {}, Li(e) ? R(this._visual, e) : this._visual[e] = r;
    }, t.prototype.getItemVisual = function(e, r) {
      var n = this._itemVisuals[e], i = n && n[r];
      return i ?? this.getVisual(r);
    }, t.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, t.prototype.ensureUniqueItemVisual = function(e, r) {
      var n = this._itemVisuals, i = n[e];
      i || (i = n[e] = {});
      var a = i[r];
      return a == null && (a = this.getVisual(r), B(a) ? a = a.slice() : Li(a) && (a = R({}, a)), i[r] = a), a;
    }, t.prototype.setItemVisual = function(e, r, n) {
      var i = this._itemVisuals[e] || {};
      this._itemVisuals[e] = i, Li(r) ? R(i, r) : i[r] = n;
    }, t.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, t.prototype.setLayout = function(e, r) {
      Li(e) ? R(this._layout, e) : this._layout[e] = r;
    }, t.prototype.getLayout = function(e) {
      return this._layout[e];
    }, t.prototype.getItemLayout = function(e) {
      return this._itemLayouts[e];
    }, t.prototype.setItemLayout = function(e, r, n) {
      this._itemLayouts[e] = n ? R(this._itemLayouts[e] || {}, r) : r;
    }, t.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, t.prototype.setItemGraphicEl = function(e, r) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      QS(n, this.dataType, e, r), this._graphicEls[e] = r;
    }, t.prototype.getItemGraphicEl = function(e) {
      return this._graphicEls[e];
    }, t.prototype.eachItemGraphicEl = function(e, r) {
      w(this._graphicEls, function(n, i) {
        n && e && e.call(r, n, i);
      });
    }, t.prototype.cloneShallow = function(e) {
      return e || (e = new t(this._schema ? this._schema : gr(this.dimensions, this._getDimInfo, this), this.hostModel)), Zu(e, this), e._store = this._store, e;
    }, t.prototype.wrapMethod = function(e, r) {
      var n = this[e];
      $(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(e), this[e] = function() {
        var i = n.apply(this, arguments);
        return r.apply(this, [i].concat(eh(arguments)));
      });
    }, t.internalField = (function() {
      Zv = function(e) {
        var r = e._invertedIndicesMap;
        w(r, function(n, i) {
          var a = e._dimInfos[i], o = a.ordinalMeta, s = e._store;
          if (o) {
            n = r[i] = new nw(o.categories.length);
            for (var u = 0; u < n.length; u++)
              n[u] = Xv;
            for (var u = 0; u < s.count(); u++)
              n[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, Oi = function(e, r, n) {
        return Xt(e._getCategory(r, n), null);
      }, oo = function(e, r) {
        var n = e._idList[r];
        return n == null && e._idDimIdx != null && (n = Oi(e, e._idDimIdx, r)), n == null && (n = iw + r), n;
      }, Nn = function(e) {
        return B(e) || (e = e != null ? [e] : []), e;
      }, Ni = function(e) {
        var r = new t(e._schema ? e._schema : gr(e.dimensions, e._getDimInfo, e), e.hostModel);
        return Zu(r, e), r;
      }, Zu = function(e, r) {
        w(aw.concat(r.__wrappedMethods || []), function(n) {
          r.hasOwnProperty(n) && (e[n] = r[n]);
        }), e.__wrappedMethods = r.__wrappedMethods, w(ow, function(n) {
          e[n] = ne(r[n]);
        }), e._calculationInfo = R({}, r._calculationInfo);
      }, $u = function(e, r) {
        var n = e._nameList, i = e._idList, a = e._nameDimIdx, o = e._idDimIdx, s = n[r], u = i[r];
        if (s == null && a != null && (n[r] = s = Oi(e, a, r)), u == null && o != null && (i[r] = u = Oi(e, o, r)), u == null && s != null) {
          var l = e._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), i[r] = u;
        }
      };
    })(), t;
  })()
);
function uw(t, e) {
  Lh(t) || (t = Om(t)), e = e || {};
  var r = e.coordDimensions || [], n = e.dimensionsDefine || t.dimensionsDefine || [], i = W(), a = [], o = lw(t, r, n, e.dimensionsCount), s = e.canOmitUnusedDimensions && Wm(o), u = n === t.dimensionsDefine, l = u ? Um(t) : Oh(n), f = e.encodeDefine;
  !f && e.encodeDefaulter && (f = e.encodeDefaulter(t, o));
  for (var h = W(f), c = new Fm(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(E) {
    var D = c[E];
    if (D < 0) {
      var M = n[E], I = H(M) ? M : {
        name: M
      }, A = new No(), L = I.name;
      L != null && l.get(L) != null && (A.name = A.displayName = L), I.type != null && (A.type = I.type), I.displayName != null && (A.displayName = I.displayName);
      var k = a.length;
      return c[E] = k, A.storeDimIndex = E, a.push(A), A;
    }
    return a[D];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  h.each(function(E, D) {
    var M = Ye(E).slice();
    if (M.length === 1 && !V(M[0]) && M[0] < 0) {
      h.set(D, !1);
      return;
    }
    var I = h.set(D, []);
    w(M, function(A, L) {
      var k = V(A) ? l.get(A) : A;
      k != null && k < o && (I[L] = k, p(d(k), D, L));
    });
  });
  var m = 0;
  w(r, function(E) {
    var D, M, I, A;
    if (V(E))
      D = E, A = {};
    else {
      A = E, D = A.name;
      var L = A.ordinalMeta;
      A.ordinalMeta = null, A = R({}, A), A.ordinalMeta = L, M = A.dimsDef, I = A.otherDims, A.name = A.coordDim = A.coordDimIndex = A.dimsDef = A.otherDims = null;
    }
    var k = h.get(D);
    if (k !== !1) {
      if (k = Ye(k), !k.length)
        for (var N = 0; N < (M && M.length || 1); N++) {
          for (; m < o && d(m).coordDim != null; )
            m++;
          m < o && k.push(m++);
        }
      w(k, function(z, Q) {
        var ee = d(z);
        if (u && A.type != null && (ee.type = A.type), p(ye(ee, A), D, Q), ee.name == null && M) {
          var te = M[Q];
          !H(te) && (te = {
            name: te
          }), ee.name = ee.displayName = te.name, ee.defaultTooltip = te.defaultTooltip;
        }
        I && ye(ee.otherDims, I);
      });
    }
  });
  function p(E, D, M) {
    tf.get(D) != null ? E.otherDims[D] = M : (E.coordDim = D, E.coordDimIndex = M, i.set(D, !0));
  }
  var g = e.generateCoord, y = e.generateCoordCount, _ = y != null;
  y = g ? y || 1 : 0;
  var S = g || "value";
  function T(E) {
    E.name == null && (E.name = E.coordDim);
  }
  if (s)
    w(a, function(E) {
      T(E);
    }), a.sort(function(E, D) {
      return E.storeDimIndex - D.storeDimIndex;
    });
  else
    for (var x = 0; x < o; x++) {
      var b = d(x), C = b.coordDim;
      C == null && (b.coordDim = fw(S, i, _), b.coordDimIndex = 0, (!g || y <= 0) && (b.isExtraCoord = !0), y--), T(b), b.type == null && (Lm(t, x) === it.Must || b.isExtraCoord && (b.otherDims.itemName != null || b.otherDims.seriesName != null)) && (b.type = "ordinal");
    }
  return ch(a, function(E) {
    return E.name;
  }, function(E, D) {
    D > 0 && (E.name = E.name + (D - 1));
  }), new Hm({
    source: t,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function lw(t, e, r, n) {
  var i = Math.max(t.dimensionsDetectedCount || 1, e.length, r.length, n || 0);
  return w(e, function(a) {
    var o;
    H(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function fw(t, e, r) {
  if (r || e.hasKey(t)) {
    for (var n = 0; e.hasKey(t + n); )
      n++;
    t += n;
  }
  return e.set(t, !0), t;
}
var Ro = {}, qu = {}, Nh = (
  /** @class */
  (function() {
    function t() {
      this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
    }
    return t.prototype.create = function(e, r) {
      this._nonSeriesBoxMasterList = n(Ro, !0), this._normalMasterList = n(qu, !1);
      function n(i, a) {
        var o = [];
        return w(i, function(s, u) {
          var l = s.create(e, r);
          o = o.concat(l || []), process.env.NODE_ENV !== "production" && a && w(l, function(f) {
            return O(!f.update);
          });
        }), o;
      }
    }, t.prototype.update = function(e, r) {
      w(this._normalMasterList, function(n) {
        n.update && n.update(e, r);
      });
    }, t.prototype.getCoordinateSystems = function() {
      return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
    }, t.register = function(e, r) {
      if (e === "matrix" || e === "calendar") {
        Ro[e] = r;
        return;
      }
      qu[e] = r;
    }, t.get = function(e) {
      return qu[e] || Ro[e];
    }, t;
  })()
);
function hw(t) {
  return !!Ro[t];
}
var cw = 1, vw = 2, dw = W();
function Ym(t) {
  var e = t.getShallow("coord", !0), r = cw;
  if (e == null) {
    var n = dw.get(t.type);
    n && n.getCoord2 && (r = vw, e = n.getCoord2(t));
  }
  return {
    coord: e,
    from: r
  };
}
var Jn = 0, ko = 1, pw = 2;
function gw(t, e) {
  var r = t.getShallow("coordinateSystem"), n = t.getShallow("coordinateSystemUsage", !0), i = n != null, a = Jn;
  if (r) {
    var o = t.mainType === "series";
    n == null && (n = o ? "data" : "box"), n === "data" ? (a = ko, o || (process.env.NODE_ENV !== "production" && i && e && oe('coordinateSystemUsage "data" is not supported in non-series components.'), a = Jn)) : n === "box" && (a = pw, !o && !hw(r) && (process.env.NODE_ENV !== "production" && i && e && oe('coordinateSystem "' + r + '" cannot be used' + (' as coordinateSystemUsage "box" for "' + t.type + '" yet.')), a = Jn));
  }
  return {
    coordSysType: r,
    kind: a
  };
}
function mw(t) {
  var e = t.targetModel, r = t.coordSysType, n = t.coordSysProvider, i = t.isDefaultDataCoordSys, a = t.allowNotFound;
  process.env.NODE_ENV !== "production" && O(!!r);
  var o = gw(e, !0), s = o.kind, u = o.coordSysType;
  if (i && s !== ko && (s = ko, u = r), s === Jn || u !== r)
    return Jn;
  var l = n(r, e);
  return l ? (s === ko ? (process.env.NODE_ENV !== "production" && O(e.mainType === "series"), e.coordinateSystem = l) : e.boxCoordinateSystem = l, s) : (process.env.NODE_ENV !== "production" && (a || oe(r + " cannot be found for" + (" " + e.type + " (index: " + e.componentIndex + ")."))), Jn);
}
var yw = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.coordSysDims = [], this.axisMap = W(), this.categoryAxisMap = W(), this.coordSysName = e;
    }
    return t;
  })()
);
function _w(t) {
  var e = t.get("coordinateSystem"), r = new yw(e), n = Sw[e];
  if (n)
    return n(t, r, r.axisMap, r.categoryAxisMap), r;
}
var Sw = {
  cartesian2d: function(t, e, r, n) {
    var i = t.getReferringComponents("xAxis", xt).models[0], a = t.getReferringComponents("yAxis", xt).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error('xAxis "' + ii(t.get("xAxisIndex"), t.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + ii(t.get("xAxisIndex"), t.get("yAxisId"), 0) + '" not found');
    }
    e.coordSysDims = ["x", "y"], r.set("x", i), r.set("y", a), Pn(i) && (n.set("x", i), e.firstCategoryDimIndex = 0), Pn(a) && (n.set("y", a), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = 1));
  },
  singleAxis: function(t, e, r, n) {
    var i = t.getReferringComponents("singleAxis", xt).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("singleAxis should be specified.");
    e.coordSysDims = ["single"], r.set("single", i), Pn(i) && (n.set("single", i), e.firstCategoryDimIndex = 0);
  },
  polar: function(t, e, r, n) {
    var i = t.getReferringComponents("polar", xt).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    e.coordSysDims = ["radius", "angle"], r.set("radius", a), r.set("angle", o), Pn(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), Pn(o) && (n.set("angle", o), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = 1));
  },
  geo: function(t, e, r, n) {
    e.coordSysDims = ["lng", "lat"];
  },
  parallel: function(t, e, r, n) {
    var i = t.ecModel, a = i.getComponent("parallel", t.get("parallelIndex")), o = e.coordSysDims = a.dimensions.slice();
    w(a.parallelAxisIndex, function(s, u) {
      var l = i.getComponent("parallelAxis", s), f = o[u];
      r.set(f, l), Pn(l) && (n.set(f, l), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = u));
    });
  },
  matrix: function(t, e, r, n) {
    var i = t.getReferringComponents("matrix", xt).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("matrix coordinate system should be specified.");
    e.coordSysDims = ["x", "y"];
    var a = i.getDimensionModel("x"), o = i.getDimensionModel("y");
    r.set("x", a), r.set("y", o), n.set("x", a), n.set("y", o);
  }
};
function Pn(t) {
  return t.get("type") === "category";
}
function Tw(t, e, r) {
  r = r || {};
  var n = r.byIndex, i = r.stackedCoordDimension, a, o, s;
  xw(e) ? a = e : (o = e.schema, a = o.dimensions, s = e.store);
  var u = !!(t && t.get("stack")), l, f, h, c, v = !0;
  function d(S) {
    return S.type !== "ordinal" && S.type !== "time";
  }
  if (w(a, function(S, T) {
    V(S) && (a[T] = S = {
      name: S
    }), d(S) || (v = !1);
  }), w(a, function(S, T) {
    u && !S.isExtraCoord && (!n && !l && S.ordinalMeta && (l = S), !f && d(S) && (!v || S.coordDim !== "x" && S.coordDim !== "angle") && (!i || i === S.coordDim) && (f = S));
  }), f && !n && !l && (n = !0), f) {
    h = "__\0ecstackresult_" + t.id, c = "__\0ecstackedover_" + t.id, l && (l.createInvertedIndices = !0);
    var m = f.coordDim, p = f.type, g = 0;
    w(a, function(S) {
      S.coordDim === m && g++;
    });
    var y = {
      name: h,
      coordDim: m,
      coordDimIndex: g,
      type: p,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, _ = {
      name: c,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: c,
      coordDimIndex: g + 1,
      type: p,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (y.storeDimIndex = s.ensureCalculationDimension(c, p), _.storeDimIndex = s.ensureCalculationDimension(h, p)), o.appendCalculationDimension(y), o.appendCalculationDimension(_)) : (a.push(y), a.push(_));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: c,
    stackResultDimension: h
  };
}
function xw(t) {
  return !Gm(t.schema);
}
function ww(t, e) {
  return !!e && e === t.getCalculationInfo("stackedDimension");
}
function bw(t, e) {
  return ww(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
}
function Cw(t, e) {
  var r = t.get("coordinateSystem"), n = Nh.get(r), i;
  return e && e.coordSysDims && (i = X(e.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = e.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = Zx(u);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function Dw(t, e, r) {
  var n, i;
  return r && w(t, function(a, o) {
    var s = a.coordDim, u = r.categoryAxisMap.get(s);
    u && (n == null && (n = o), a.ordinalMeta = u.getOrdinalMeta(), e && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (t[n].otherDims.itemName = 0), n;
}
function jI(t, e, r) {
  r = r || {};
  var n = e.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === ht;
  var o = _w(e), s = Cw(e, o), u = r.useEncodeDefaulter, l = $(u) ? u : u ? Ee(Rx, s, e) : null, f = {
    coordDimensions: s,
    generateCoord: r.generateCoord,
    encodeDefine: e.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = uw(i, f), c = Dw(h.dimensions, r.createInvertedIndices, o), v = a ? null : n.getSharedDataStore(h), d = Tw(e, {
    schema: h,
    store: v
  }), m = new sw(h, e);
  m.setCalculationInfo(d);
  var p = c != null && Ew(i) ? function(g, y, _, S) {
    return S === c ? _ : this.defaultDimValueGetter(g, y, _, S);
  } : null;
  return m.hasItemOption = !1, m.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : v,
    null,
    p
  ), m;
}
function Ew(t) {
  if (t.sourceFormat === ht) {
    var e = Mw(t.data || []);
    return !B(Pa(e));
  }
}
function Mw(t) {
  for (var e = 0; e < t.length && t[e] == null; )
    e++;
  return t[e];
}
var Aw = Math.round(Math.random() * 10);
function js(t) {
  return [t || "", Aw++].join("_");
}
function Iw(t) {
  var e = {};
  t.registerSubTypeDefaulter = function(r, n) {
    var i = Ht(r);
    e[i.main] = n;
  }, t.determineSubType = function(r, n) {
    var i = n.type;
    if (!i) {
      var a = Ht(r).main;
      t.hasSubTypes(r) && e[a] && (i = e[a](n));
    }
    return i;
  };
}
function Lw(t, e) {
  t.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = r(o), f = l.graph, h = l.noEntryList, c = {};
    for (w(a, function(y) {
      c[y] = !0;
    }); h.length; ) {
      var v = h.pop(), d = f[v], m = !!c[v];
      m && (s.call(u, v, d.originalDeps.slice()), delete c[v]), w(d.successor, m ? g : p);
    }
    w(c, function() {
      var y = "";
      throw process.env.NODE_ENV !== "production" && (y = ts("Circular dependency may exists: ", c, a, o)), new Error(y);
    });
    function p(y) {
      f[y].entryCount--, f[y].entryCount === 0 && h.push(y);
    }
    function g(y) {
      c[y] = !0, p(y);
    }
  };
  function r(a) {
    var o = {}, s = [];
    return w(a, function(u) {
      var l = n(o, u), f = l.originalDeps = e(u), h = i(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), w(h, function(c) {
        ue(l.predecessor, c) < 0 && l.predecessor.push(c);
        var v = n(o, c);
        ue(v.successor, c) < 0 && v.successor.push(u);
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
    return w(a, function(u) {
      ue(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function Ow(t, e) {
  return ce(ce({}, t, !0), e, !0);
}
var Nw = Math.log(2);
function pf(t, e, r, n, i, a) {
  var o = n + "-" + i, s = t.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (e === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~i) / Nw);
    return t[r][u];
  }
  for (var l = n | 1 << r, f = r + 1; n & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & i || (h += (v % 2 ? -1 : 1) * t[r][c] * pf(t, e - 1, f, l, i | d, a), v++);
  }
  return a[o] = h, h;
}
function $v(t, e) {
  var r = [
    [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
    [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
    [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
    [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
    [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
    [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
    [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
    [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]
  ], n = {}, i = pf(r, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * pf(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * e[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var os = "___zrEVENTSAVED", Ku = [];
function Pw(t, e, r, n, i) {
  return gf(Ku, e, n, i, !0) && gf(t, r, Ku[0], Ku[1]);
}
function Rw(t, e) {
  t && r(t), e && r(e);
  function r(n) {
    var i = n[os];
    i && (i.clearMarkers && i.clearMarkers(), delete n[os]);
  }
}
function gf(t, e, r, n, i) {
  if (e.getBoundingClientRect && q.domSupported && !Xm(e)) {
    var a = e[os] || (e[os] = {}), o = kw(e, a), s = Bw(o, a, i);
    if (s)
      return s(t, r, n), !0;
  }
  return !1;
}
function kw(t, e) {
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
    w(r, function(f) {
      f.parentNode && f.parentNode.removeChild(f);
    });
  }, r;
}
function Bw(t, e, r) {
  for (var n = r ? "invTrans" : "trans", i = e[n], a = e.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = t[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(t[l].offsetLeft, t[l].offsetTop);
  }
  return u && i ? i : (e.srcCoords = o, e[n] = r ? $v(s, o) : $v(o, s));
}
function Xm(t) {
  return t.nodeName.toUpperCase() === "CANVAS";
}
var Vw = /([&<>"'])/g, Fw = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function Je(t) {
  return t == null ? "" : (t + "").replace(Vw, function(e, r) {
    return Fw[r];
  });
}
const zw = {
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
}, Hw = {
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
var ss = "ZH", Ph = "EN", jn = Ph, Bo = {}, Rh = {}, Zm = q.domSupported ? (function() {
  var t = (document.documentElement.lang || navigator.language || navigator.browserLanguage || jn).toUpperCase();
  return t.indexOf(ss) > -1 ? ss : jn;
})() : jn;
function $m(t, e) {
  t = t.toUpperCase(), Rh[t] = new xe(e), Bo[t] = e;
}
function Gw(t) {
  if (V(t)) {
    var e = Bo[t.toUpperCase()] || {};
    return t === ss || t === Ph ? ne(e) : ce(ne(e), ne(Bo[jn]), !1);
  } else
    return ce(ne(t), ne(Bo[jn]), !1);
}
function Uw(t) {
  return Rh[t];
}
function Ww() {
  return Rh[jn];
}
$m(Ph, zw);
$m(ss, Hw);
var Yw = null;
function We() {
  return Yw;
}
function qm(t, e) {
  var r = We(), n = e.breakOption, i = e.breakParsed;
  return !i && r && (i = r.parseAxisBreakOption(n, t)), i;
}
function us(t) {
  var e = t.brk;
  return e ? e.breaks : [];
}
function gn(t) {
  var e = t.brk;
  return e ? e.hasBreaks() : !1;
}
var kh = 1e3, Bh = kh * 60, oa = Bh * 60, wt = oa * 24, qv = wt * 365, Xw = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
}, Vo = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}"
}, Zw = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", so = "{yyyy}-{MM}-{dd}", Kv = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: so,
  hour: so + " " + Vo.hour,
  minute: so + " " + Vo.minute,
  second: so + " " + Vo.second,
  millisecond: Zw
}, at = ["year", "month", "day", "hour", "minute", "second", "millisecond"], $w = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function qw(t) {
  return !V(t) && !$(t) ? Kw(t) : t;
}
function Kw(t) {
  t = t || {};
  var e = {}, r = !0;
  return w(at, function(n) {
    r && (r = t[n] == null);
  }), w(at, function(n, i) {
    var a = t[n];
    e[n] = {};
    for (var o = null, s = i; s >= 0; s--) {
      var u = at[s], l = H(a) && !B(a) ? a[u] : a, f = void 0;
      B(l) ? (f = l.slice(), o = f[0] || "") : V(l) ? (o = l, f = [o]) : (o == null ? o = Vo[n] : Xw[u].test(o) || (o = e[u][u][0] + " " + o), f = [o], r && (f[1] = "{primary|" + o + "}")), e[n][u] = f;
    }
  }), e;
}
function mr(t, e) {
  return t += "", "0000".substr(0, e - t.length) + t;
}
function sa(t) {
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
function Qw(t) {
  return t === sa(t);
}
function Jw(t) {
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
function eu(t, e, r, n) {
  var i = Ti(t), a = i[Km(r)](), o = i[Vh(r)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = i[Fh(r)](), l = i["get" + (r ? "UTC" : "") + "Day"](), f = i[zh(r)](), h = (f - 1) % 12 + 1, c = i[Hh(r)](), v = i[Gh(r)](), d = i[Uh(r)](), m = f >= 12 ? "pm" : "am", p = m.toUpperCase(), g = n instanceof xe ? n : Uw(n || Zm) || Ww(), y = g.getModel("time"), _ = y.get("month"), S = y.get("monthAbbr"), T = y.get("dayOfWeek"), x = y.get("dayOfWeekAbbr");
  return (e || "").replace(/{a}/g, m + "").replace(/{A}/g, p + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, mr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, mr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, mr(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, T[l]).replace(/{ee}/g, x[l]).replace(/{e}/g, l + "").replace(/{HH}/g, mr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, mr(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, mr(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, mr(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, mr(d, 3)).replace(/{S}/g, d + "");
}
function jw(t, e, r, n, i) {
  var a = null;
  if (V(r))
    a = r;
  else if ($(r)) {
    var o = {
      time: t.time,
      level: t.time ? t.time.level : 0
    }, s = We();
    s && s.makeAxisLabelFormatterParamBreak(o, t.break), a = r(t.value, e, o);
  } else {
    var u = t.time;
    if (u) {
      var l = r[u.lowerTimeUnit][u.upperTimeUnit];
      a = l[Math.min(u.level, l.length - 1)] || "";
    } else {
      var f = ei(t.value, i);
      a = r[f][f][0];
    }
  }
  return eu(new Date(t.value), a, i, n);
}
function ei(t, e) {
  var r = Ti(t), n = r[Vh(e)]() + 1, i = r[Fh(e)](), a = r[zh(e)](), o = r[Hh(e)](), s = r[Gh(e)](), u = r[Uh(e)](), l = u === 0, f = l && s === 0, h = f && o === 0, c = h && a === 0, v = c && i === 1, d = v && n === 1;
  return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function mf(t, e, r) {
  switch (e) {
    case "year":
      t[Qm(r)](0);
    case "month":
      t[Jm(r)](1);
    case "day":
      t[jm(r)](0);
    case "hour":
      t[ey(r)](0);
    case "minute":
      t[ty(r)](0);
    case "second":
      t[ry(r)](0);
  }
  return t;
}
function Km(t) {
  return t ? "getUTCFullYear" : "getFullYear";
}
function Vh(t) {
  return t ? "getUTCMonth" : "getMonth";
}
function Fh(t) {
  return t ? "getUTCDate" : "getDate";
}
function zh(t) {
  return t ? "getUTCHours" : "getHours";
}
function Hh(t) {
  return t ? "getUTCMinutes" : "getMinutes";
}
function Gh(t) {
  return t ? "getUTCSeconds" : "getSeconds";
}
function Uh(t) {
  return t ? "getUTCMilliseconds" : "getMilliseconds";
}
function eb(t) {
  return t ? "setUTCFullYear" : "setFullYear";
}
function Qm(t) {
  return t ? "setUTCMonth" : "setMonth";
}
function Jm(t) {
  return t ? "setUTCDate" : "setDate";
}
function jm(t) {
  return t ? "setUTCHours" : "setHours";
}
function ey(t) {
  return t ? "setUTCMinutes" : "setMinutes";
}
function ty(t) {
  return t ? "setUTCSeconds" : "setSeconds";
}
function ry(t) {
  return t ? "setUTCMilliseconds" : "setMilliseconds";
}
function ny(t) {
  if (!Vg(t))
    return V(t) ? t : "-";
  var e = (t + "").split(".");
  return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : "");
}
function iy(t, e) {
  return t = (t || "").toLowerCase().replace(/-(.)/g, function(r, n) {
    return n.toUpperCase();
  }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
}
var tu = th;
function yf(t, e, r) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && zt(f) ? f : "-";
  }
  function a(f) {
    return $t(f);
  }
  var o = e === "time", s = t instanceof Date;
  if (o || s) {
    var u = o ? Ti(t) : t;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else return eu(u, n, r);
  }
  if (e === "ordinal")
    return Yo(t) ? i(t) : we(t) && a(t) ? t + "" : "-";
  var l = es(t);
  return a(l) ? ny(l) : Yo(t) ? i(t) : typeof t == "boolean" ? t + "" : "-";
}
var Qv = ["a", "b", "c", "d", "e", "f", "g"], Qu = function(t, e) {
  return "{" + t + (e ?? "") + "}";
};
function ay(t, e, r) {
  B(e) || (e = [e]);
  var n = e.length;
  if (!n)
    return "";
  for (var i = e[0].$vars || [], a = 0; a < i.length; a++) {
    var o = Qv[a];
    t = t.replace(Qu(o), Qu(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = e[s][i[u]];
      t = t.replace(Qu(Qv[u], s), r ? Je(l) : l);
    }
  return t;
}
function tb(t, e) {
  var r = V(t) ? {
    color: t,
    extraCssText: e
  } : t || {}, n = r.color, i = r.type;
  e = r.extraCssText;
  var a = r.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Je(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Je(n) + ";" + (e || "") + '"></span>';
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
function ya(t, e) {
  return e = e || "transparent", V(t) ? t : H(t) && t.colorStops && (t.colorStops[0] || {}).color || e;
}
var Fo = w, rb = ["left", "right", "top", "bottom", "width", "height"], uo = [["width", "left", "right"], ["height", "top", "bottom"]];
function Wh(t, e, r, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  e.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = e.childAt(l + 1), c = h && h.getBoundingRect(), v, d;
    if (t === "horizontal") {
      var m = f.width + (c ? -c.x + f.x : 0);
      v = a + m, v > n || u.newline ? (a = 0, v = m, o += s + r, s = f.height) : s = Math.max(s, f.height);
    } else {
      var p = f.height + (c ? -c.y + f.y : 0);
      d = o + p, d > i || u.newline ? (a += s + r, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), t === "horizontal" ? a = v + r : o = d + r);
  });
}
var ua = Wh;
Ee(Wh, "vertical");
Ee(Wh, "horizontal");
function nb(t, e) {
  return {
    left: t.getShallow("left", e),
    top: t.getShallow("top", e),
    right: t.getShallow("right", e),
    bottom: t.getShallow("bottom", e),
    width: t.getShallow("width", e),
    height: t.getShallow("height", e)
  };
}
function _a(t, e, r) {
  r = tu(r || 0);
  var n = e.width, i = e.height, a = Bt(t.left, n), o = Bt(t.top, i), s = Bt(t.right, n), u = Bt(t.bottom, i), l = Bt(t.width, n), f = Bt(t.height, i), h = r[2] + r[0], c = r[1] + r[3], v = t.aspect;
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
  var d = new Z((e.x || 0) + a + r[3], (e.y || 0) + o + r[0], l, f);
  return d.margin = r, d;
}
var Ju = {
  rect: 1
};
function oy(t, e, r) {
  var n, i, a, o = t.boxCoordinateSystem, s;
  if (o) {
    var u = Ym(t), l = u.coord, f = u.from;
    if (o.dataToLayout) {
      a = Ju.rect, s = f;
      var h = o.dataToLayout(l);
      n = h.contentRect || h.rect;
    } else
      process.env.NODE_ENV !== "production" && oe(t.type + "[" + t.componentIndex + "]" + (" layout based on " + o.type + " is not supported."));
  }
  return a == null && (a = Ju.rect), a === Ju.rect && (n || (n = {
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
function Sa(t) {
  var e = t.layoutMode || t.constructor.layoutMode;
  return H(e) ? e : e ? {
    type: e
  } : null;
}
function Lr(t, e, r) {
  var n = r && r.ignoreSize;
  !B(n) && (n = [n, n]);
  var i = o(uo[0], 0), a = o(uo[1], 1);
  u(uo[0], t, i), u(uo[1], t, a);
  function o(l, f) {
    var h = {}, c = 0, v = {}, d = 0, m = 2;
    if (Fo(l, function(y) {
      v[y] = t[y];
    }), Fo(l, function(y) {
      et(e, y) && (h[y] = v[y] = e[y]), s(h, y) && c++, s(v, y) && d++;
    }), n[f])
      return s(e, l[1]) ? v[l[2]] = null : s(e, l[2]) && (v[l[1]] = null), v;
    if (d === m || !c)
      return v;
    if (c >= m)
      return h;
    for (var p = 0; p < l.length; p++) {
      var g = l[p];
      if (!et(h, g) && et(t, g)) {
        h[g] = t[g];
        break;
      }
    }
    return h;
  }
  function s(l, f) {
    return l[f] != null && l[f] !== "auto";
  }
  function u(l, f, h) {
    Fo(l, function(c) {
      f[c] = h[c];
    });
  }
}
function Ba(t) {
  return ib({}, t);
}
function ib(t, e) {
  return e && t && Fo(rb, function(r) {
    et(e, r) && (t[r] = e[r]);
  }), t;
}
var ab = pe(), le = (
  /** @class */
  (function(t) {
    F(e, t);
    function e(r, n, i) {
      var a = t.call(this, r, n, i) || this;
      return a.uid = js("ec_cpt_model"), a;
    }
    return e.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i);
    }, e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Sa(this), a = i ? Ba(r) : {}, o = n.getTheme();
      ce(r, o.get(this.mainType)), ce(r, this.getDefaultOption()), i && Lr(r, a, i);
    }, e.prototype.mergeOption = function(r, n) {
      ce(this.option, r, !0);
      var i = Sa(this);
      i && Lr(this.option, r, i);
    }, e.prototype.optionUpdated = function(r, n) {
    }, e.prototype.getDefaultOption = function() {
      var r = this.constructor;
      if (!k0(r))
        return r.defaultOption;
      var n = ab(this);
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
      return ka(this.ecModel, r, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, e.prototype.getBoxLayoutParams = function() {
      return nb(this, !1);
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
ug(le, xe);
Rs(le);
Iw(le);
Lw(le, ob);
function ob(t) {
  var e = [];
  return w(le.getClassesByMainType(t), function(r) {
    e = e.concat(r.dependencies || r.prototype.dependencies || []);
  }), e = X(e, function(r) {
    return Ht(r).main;
  }), t !== "dataset" && ue(e, "dataset") <= 0 && e.unshift("dataset"), e;
}
var Jv = pe();
pe();
var Yh = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.getColorFromPalette = function(e, r, n) {
      var i = Ye(this.get("color", !0)), a = this.get("colorLayer", !0);
      return ub(this, Jv, i, a, e, r, n);
    }, t.prototype.clearColorPalette = function() {
      lb(this, Jv);
    }, t;
  })()
);
function sb(t, e) {
  for (var r = t.length, n = 0; n < r; n++)
    if (t[n].length > e)
      return t[n];
  return t[r - 1];
}
function ub(t, e, r, n, i, a, o) {
  a = a || t;
  var s = e(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(i))
    return l[i];
  var f = o == null || !n ? r : sb(n, o);
  if (f = f || r, !(!f || !f.length)) {
    var h = f[u];
    return i && (l[i] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function lb(t, e) {
  e(t).paletteIdx = 0, e(t).paletteNameMap = {};
}
var fb = /\{@(.+?)\}/g, hb = (
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
      if (o && (u.value = o.interpolatedValue), i != null && B(u.value) && (u.value = u.value[i]), !a) {
        var l = s.getItemModel(e);
        a = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"]);
      }
      if ($(a))
        return u.status = r, u.dimensionIndex = i, a(u);
      if (V(a)) {
        var f = ay(a, u);
        return f.replace(fb, function(h, c) {
          var v = c.length, d = c;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && oe("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
          var m = di(s, e, d);
          if (o && B(o.interpolatedValue)) {
            var p = s.getDimensionIndex(d);
            p >= 0 && (m = o.interpolatedValue[p]);
          }
          return m != null ? m + "" : "";
        });
      }
    }, t.prototype.getRawValue = function(e, r) {
      return di(this.getData(r), e);
    }, t.prototype.formatTooltip = function(e, r, n) {
    }, t;
  })()
);
function jv(t) {
  var e, r;
  return H(t) ? t.type ? r = t : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + ts(t)) : e = t, {
    text: e,
    // markers: markers || markersExisting,
    frag: r
  };
}
function la(t) {
  return new cb(t);
}
var cb = (
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
      if (r ? (process.env.NODE_ENV !== "production" && O(r._outputDueEnd != null), this._dueEnd = r._outputDueEnd) : (process.env.NODE_ENV !== "production" && O(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
        if (!n && (h || v < d)) {
          var m = this._progress;
          if (B(m))
            for (var p = 0; p < m.length; p++)
              this._doProgress(m[p], v, d, u, l);
          else
            this._doProgress(m, v, d, u, l);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && O(g >= this._outputDueEnd), this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, t.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, t.prototype._doProgress = function(e, r, n, i, a) {
      ed.reset(r, n, i, a), this._callingProgress = e, this._callingProgress({
        start: r,
        end: n,
        count: n - r,
        next: ed.next
      }, this.context);
    }, t.prototype._doReset = function(e) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var r, n;
      !e && this._reset && (r = this._reset(this.context), r && r.progress && (n = r.forceFirstProgress, r = r.progress), B(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, t.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, t.prototype.pipe = function(e) {
      process.env.NODE_ENV !== "production" && O(e && !e._disposed && e !== this), (this._downstream !== e || this._dirty) && (this._downstream = e, e._upstream = this, e.dirty());
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
), ed = /* @__PURE__ */ (function() {
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
})(), vb = (
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
      return Po(e, r);
    }, t;
  })()
);
function db(t, e) {
  var r = new vb(), n = t.data, i = r.sourceFormat = t.sourceFormat, a = t.startIndex, o = "";
  t.seriesLayoutBy !== Zt && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), Qe(o));
  var s = [], u = {}, l = t.dimensionsDefine;
  if (l)
    w(l, function(m, p) {
      var g = m.name, y = {
        index: p,
        name: g,
        displayName: m.displayName
      };
      if (s.push(y), g != null) {
        var _ = "";
        et(u, g) && (process.env.NODE_ENV !== "production" && (_ = 'dimension name "' + g + '" duplicated.'), Qe(_)), u[g] = y;
      }
    });
  else
    for (var f = 0; f < t.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = km(i, Zt);
  e.__isBuiltIn && (r.getRawDataItem = function(m) {
    return h(n, a, s, m);
  }, r.getRawData = _e(pb, null, t)), r.cloneRawData = _e(gb, null, t);
  var c = Bm(i, Zt);
  r.count = _e(c, null, n, a, s);
  var v = Vm(i);
  r.retrieveValue = function(m, p) {
    var g = h(n, a, s, m);
    return d(g, p);
  };
  var d = r.retrieveValueFromItem = function(m, p) {
    if (m != null) {
      var g = s[p];
      if (g)
        return v(m, p, g.name);
    }
  };
  return r.getDimensionInfo = _e(mb, null, s, u), r.cloneAllDimensionInfo = _e(yb, null, s), r;
}
function pb(t) {
  var e = t.sourceFormat;
  if (!Xh(e)) {
    var r = "";
    process.env.NODE_ENV !== "production" && (r = "`getRawData` is not supported in source format " + e), Qe(r);
  }
  return t.data;
}
function gb(t) {
  var e = t.sourceFormat, r = t.data;
  if (!Xh(e)) {
    var n = "";
    process.env.NODE_ENV !== "production" && (n = "`cloneRawData` is not supported in source format " + e), Qe(n);
  }
  if (e === Fe) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(r[a].slice());
    return i;
  } else if (e === At) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(R({}, r[a]));
    return i;
  }
}
function mb(t, e, r) {
  if (r != null) {
    if (we(r) || !isNaN(r) && !et(e, r))
      return t[r];
    if (et(e, r))
      return e[r];
  }
}
function yb(t) {
  return ne(t);
}
var sy = W();
function _b(t) {
  t = ne(t);
  var e = t.type, r = "";
  e || (process.env.NODE_ENV !== "production" && (r = "Must have a `type` when `registerTransform`."), Qe(r));
  var n = e.split(":");
  n.length !== 2 && (process.env.NODE_ENV !== "production" && (r = 'Name must include namespace like "ns:regression".'), Qe(r));
  var i = !1;
  n[0] === "echarts" && (e = n[1], i = !0), t.__isBuiltIn = i, sy.set(e, t);
}
function Sb(t, e, r) {
  var n = Ye(t), i = n.length, a = "";
  i || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), Qe(a));
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    e = Tb(u, e, r, i === 1 ? null : o), o !== s - 1 && (e.length = Math.max(e.length, 1));
  }
  return e;
}
function Tb(t, e, r, n) {
  var i = "";
  e.length || (process.env.NODE_ENV !== "production" && (i = "Must have at least one upstream dataset."), Qe(i)), H(t) || (process.env.NODE_ENV !== "production" && (i = "transform declaration must be an object rather than " + typeof t + "."), Qe(i));
  var a = t.type, o = sy.get(a);
  o || (process.env.NODE_ENV !== "production" && (i = 'Can not find transform on type "' + a + '".'), Qe(i));
  var s = X(e, function(f) {
    return db(f, o);
  }), u = Ye(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: ne(t.config)
  }));
  if (process.env.NODE_ENV !== "production" && t.print) {
    var l = X(u, function(f) {
      var h = n != null ? " === pipe index: " + n : "";
      return ["=== dataset index: " + r.datasetIndex + h + " ===", "- transform result data:", ts(f.data), "- transform result dimensions:", ts(f.dimensions)].join(`
`);
    }).join(`
`);
    zg(l);
  }
  return X(u, function(f, h) {
    var c = "";
    H(f) || (process.env.NODE_ENV !== "production" && (c = "A transform should not return some empty results."), Qe(c)), f.data || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be not be null or undefined"), Qe(c));
    var v = Nm(f.data);
    Xh(v) || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be array rows or object rows."), Qe(c));
    var d, m = e[0];
    if (m && h === 0 && !f.dimensions) {
      var p = m.startIndex;
      p && (f.data = m.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: Zt,
        sourceHeader: p,
        dimensions: m.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: Zt,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return vf(f.data, d, null);
  });
}
function Xh(t) {
  return t === Fe || t === At;
}
var xb = (
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
      if (Pi(e)) {
        var o = e, s = void 0, u = void 0, l = void 0;
        if (n) {
          var f = r[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = Xe(s) ? lr : ht, a = [];
        var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = G(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = G(h.sourceHeader, c.sourceHeader), m = G(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || m;
        i = p ? [vf(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: m
        }, u)] : [];
      } else {
        var g = e;
        if (n) {
          var y = this._applyTransform(r);
          i = y.sourceList, a = y.upstreamSignList;
        } else {
          var _ = g.get("source", !0);
          i = [vf(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && O(i && a), this._setLocalSource(i, a);
    }, t.prototype._applyTransform = function(e) {
      var r = this._sourceHost, n = r.get("transform", !0), i = r.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && O(i != null || n != null), i != null) {
        var a = "";
        e.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), td(a));
      }
      var o, s = [], u = [];
      return w(e, function(l) {
        l.prepareSource();
        var f = l.getSource(i || 0), h = "";
        i != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + i), td(h)), s.push(f), u.push(l._getVersionSign());
      }), n ? o = Sb(n, s, {
        datasetIndex: r.componentIndex
      }) : i != null && (o = [Vx(s[0])]), {
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
      process.env.NODE_ENV !== "production" && O(Pi(this._sourceHost), "Can only call getDataStore on series source manager.");
      var r = e.makeStoreSchema();
      return this._innerGetDataStore(r.dimensions, e.source, r.hash);
    }, t.prototype._innerGetDataStore = function(e, r, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        Pi(this._sourceHost) && u ? s = u._innerGetDataStore(e, r, n) : (s = new df(), s.initData(new Rm(r, e.length), e)), o[n] = s;
      }
      return s;
    }, t.prototype._getUpstreamSourceManagers = function() {
      var e = this._sourceHost;
      if (Pi(e)) {
        var r = Im(e);
        return r ? [r.getSourceManager()] : [];
      } else
        return X(kx(e), function(n) {
          return n.getSourceManager();
        });
    }, t.prototype._getSourceMetaRawOption = function() {
      var e = this._sourceHost, r, n, i;
      if (Pi(e))
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
function Pi(t) {
  return t.mainType === "series";
}
function td(t) {
  throw new Error(t);
}
var Y = {
  color: {},
  darkColor: {},
  size: {}
}, be = Y.color = {
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
R(be, {
  primary: be.neutral80,
  secondary: be.neutral70,
  tertiary: be.neutral60,
  quaternary: be.neutral50,
  disabled: be.neutral20,
  border: be.neutral30,
  borderTint: be.neutral20,
  borderShade: be.neutral40,
  background: be.neutral05,
  backgroundTint: "rgba(234,237,245,0.5)",
  backgroundTransparent: "rgba(255,255,255,0)",
  backgroundShade: be.neutral10,
  shadow: "rgba(0,0,0,0.2)",
  shadowTint: "rgba(129,130,136,0.2)",
  axisLine: be.neutral70,
  axisLineTint: be.neutral40,
  axisTick: be.neutral70,
  axisTickMinor: be.neutral60,
  axisLabel: be.neutral70,
  axisSplitLine: be.neutral15,
  axisMinorSplitLine: be.neutral05
});
for (var en in be)
  if (be.hasOwnProperty(en)) {
    var rd = be[en];
    en === "theme" ? Y.darkColor.theme = be.theme.slice() : en === "highlight" ? Y.darkColor.highlight = "rgba(255,231,130,0.4)" : en.indexOf("accent") === 0 ? Y.darkColor[en] = Wl(rd, null, function(t) {
      return t * 0.5;
    }, function(t) {
      return Math.min(1, 1.3 - t);
    }) : Y.darkColor[en] = Wl(rd, null, function(t) {
      return t * 0.9;
    }, function(t) {
      return 1 - Math.pow(t, 1.5);
    });
  }
Y.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
var wb = "line-height:1";
function uy(t) {
  var e = t.lineHeight;
  return e == null ? wb : "line-height:" + Je(e + "") + "px";
}
function ly(t, e) {
  var r = t.color || Y.color.tertiary, n = t.fontSize || 12, i = t.fontWeight || "400", a = t.color || Y.color.secondary, o = t.fontSize || 14, s = t.fontWeight || "900";
  return e === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + Je(n + "") + "px;color:" + Je(r) + ";font-weight:" + Je(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + Je(o + "") + "px;color:" + Je(a) + ";font-weight:" + Je(s + "")
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
var bb = [0, 10, 20, 30], Cb = ["", `
`, `

`, `


`];
function Ta(t, e) {
  return e.type = t, e;
}
function _f(t) {
  return t.type === "section";
}
function fy(t) {
  return _f(t) ? Db : Eb;
}
function hy(t) {
  if (_f(t)) {
    var e = 0, r = t.blocks.length, n = r > 1 || r > 0 && !t.noHeader;
    return w(t.blocks, function(i) {
      var a = hy(i);
      a >= e && (e = a + +(n && // 0 always can not be readable gap level.
      (!a || _f(i) && !i.noHeader)));
    }), e;
  }
  return 0;
}
function Db(t, e, r, n) {
  var i = e.noHeader, a = Mb(hy(e)), o = [], s = e.blocks || [];
  O(!s || B(s)), s = s || [];
  var u = t.orderMode;
  if (e.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (et(l, u)) {
      var f = new qx(l[u], null);
      s.sort(function(m, p) {
        return f.evaluate(m.sortParam, p.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  w(s, function(m, p) {
    var g = e.valueFormatter, y = fy(m)(
      // Inherit valueFormatter
      g ? R(R({}, t), {
        valueFormatter: g
      }) : t,
      m,
      p > 0 ? a.html : 0,
      n
    );
    y != null && o.push(y);
  });
  var h = t.renderMode === "richText" ? o.join(a.richText) : Sf(n, o.join(""), i ? r : a.html);
  if (i)
    return h;
  var c = yf(e.header, "ordinal", t.useUTC), v = ly(n, t.renderMode).nameStyle, d = uy(n);
  return t.renderMode === "richText" ? cy(t, c, v) + a.richText + h : Sf(n, '<div style="' + v + ";" + d + ';">' + Je(c) + "</div>" + h, r);
}
function Eb(t, e, r, n) {
  var i = t.renderMode, a = e.noName, o = e.noValue, s = !e.markerType, u = e.name, l = t.useUTC, f = e.valueFormatter || t.valueFormatter || function(S) {
    return S = B(S) ? S : [S], X(S, function(T, x) {
      return yf(T, B(v) ? v[x] : v, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : t.markupStyleCreator.makeTooltipMarker(e.markerType, e.markerColor || Y.color.secondary, i), c = a ? "" : yf(u, "ordinal", l), v = e.valueType, d = o ? [] : f(e.value, e.rawDataIndex), m = !s || !a, p = !s && a, g = ly(n, i), y = g.nameStyle, _ = g.valueStyle;
    return i === "richText" ? (s ? "" : h) + (a ? "" : cy(t, c, y)) + (o ? "" : Lb(t, d, m, p, _)) : Sf(n, (s ? "" : h) + (a ? "" : Ab(c, !s, y)) + (o ? "" : Ib(d, m, p, _)), r);
  }
}
function nd(t, e, r, n, i, a) {
  if (t) {
    var o = fy(t), s = {
      useUTC: i,
      renderMode: r,
      orderMode: n,
      markupStyleCreator: e,
      valueFormatter: t.valueFormatter
    };
    return o(s, t, 0, a);
  }
}
function Mb(t) {
  return {
    html: bb[t],
    richText: Cb[t]
  };
}
function Sf(t, e, r) {
  var n = '<div style="clear:both"></div>', i = "margin: " + r + "px 0 0", a = uy(t);
  return '<div style="' + i + ";" + a + ';">' + e + n + "</div>";
}
function Ab(t, e, r) {
  var n = e ? "margin-left:2px" : "";
  return '<span style="' + r + ";" + n + '">' + Je(t) + "</span>";
}
function Ib(t, e, r, n) {
  var i = r ? "10px" : "20px", a = e ? "float:right;margin-left:" + i : "";
  return t = B(t) ? t : [t], '<span style="' + a + ";" + n + '">' + X(t, function(o) {
    return Je(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function cy(t, e, r) {
  return t.markupStyleCreator.wrapRichTextStyle(e, r);
}
function Lb(t, e, r, n, i) {
  var a = [i], o = n ? 10 : 20;
  return r && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), t.markupStyleCreator.wrapRichTextStyle(B(e) ? e.join("  ") : e, a);
}
function Ob(t, e) {
  var r = t.getData().getItemVisual(e, "style"), n = r[t.visualDrawType];
  return ya(n);
}
function vy(t, e) {
  var r = t.get("padding");
  return r ?? (e === "richText" ? [8, 10] : 10);
}
var ju = (
  /** @class */
  (function() {
    function t() {
      this.richTextStyles = {}, this._nextStyleNameId = lh();
    }
    return t.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, t.prototype.makeTooltipMarker = function(e, r, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = tb({
        color: r,
        type: e,
        renderMode: n,
        markerId: i
      });
      return V(a) ? a : (process.env.NODE_ENV !== "production" && O(i), this.richTextStyles[i] = a.style, a.content);
    }, t.prototype.wrapRichTextStyle = function(e, r) {
      var n = {};
      B(r) ? w(r, function(a) {
        return R(n, a);
      }) : R(n, r);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + e + "}";
    }, t;
  })()
);
function Nb(t) {
  var e = t.series, r = t.dataIndex, n = t.multipleSeries, i = e.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = e.getRawValue(r), u = B(s), l = Ob(e, r), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = Pb(s, e, r, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var m = i.getDimensionInfo(a[0]);
    v = f = di(i, r, a[0]), h = m.type;
  } else
    v = f = u ? s[0] : s;
  var p = fh(e), g = p && e.name || "", y = i.getName(r), _ = n ? g : y;
  return Ta("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !p,
    sortParam: v,
    blocks: [Ta("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !zt(_),
      value: f,
      valueType: h,
      rawDataIndex: i.getRawIndex(r)
    })].concat(c || [])
  });
}
function Pb(t, e, r, n, i) {
  var a = e.getData(), o = yi(t, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  n.length ? w(n, function(h) {
    f(di(a, r, h), h);
  }) : w(t, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(Ta("nameValue", {
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
var yr = pe();
function lo(t, e) {
  return t.getName(e) || t.getId(e);
}
var Rb = "__universalTransitionEnabled", mn = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r._selectedDataIndicesMap = {}, r;
    }
    return e.prototype.init = function(r, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = la({
        count: Bb,
        reset: Vb
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(r, i);
      var a = yr(this).sourceManager = new xb(this);
      a.prepareSource();
      var o = this.getInitialData(r, i);
      ad(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && O(o, "getInitialData returned invalid data."), yr(this).dataBeforeProcessed = o, id(this), this._initSelectedMapFromData(o);
    }, e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Sa(this), a = i ? Ba(r) : {}, o = this.subType;
      le.hasClass(o) && (o += "Series"), ce(r, n.getTheme().get(this.subType)), ce(r, this.getDefaultOption()), lv(r, "label", ["show"]), this.fillDataTextStyle(r.data), i && Lr(r, a, i);
    }, e.prototype.mergeOption = function(r, n) {
      r = ce(this.option, r, !0), this.fillDataTextStyle(r.data);
      var i = Sa(this);
      i && Lr(this.option, r, i);
      var a = yr(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(r, n);
      ad(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, yr(this).dataBeforeProcessed = o, id(this), this._initSelectedMapFromData(o);
    }, e.prototype.fillDataTextStyle = function(r) {
      if (r && !Xe(r))
        for (var n = ["show"], i = 0; i < r.length; i++)
          r[i] && r[i].label && lv(r[i], "label", n);
    }, e.prototype.getInitialData = function(r, n) {
    }, e.prototype.appendData = function(r) {
      var n = this.getRawData();
      n.appendData(r.data);
    }, e.prototype.getData = function(r) {
      var n = Tf(this);
      if (n) {
        var i = n.context.data;
        return r == null || !i.getLinkedData ? i : i.getLinkedData(r);
      } else
        return yr(this).data;
    }, e.prototype.getAllData = function() {
      var r = this.getData();
      return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
        data: r
      }];
    }, e.prototype.setData = function(r) {
      var n = Tf(this);
      if (n) {
        var i = n.context;
        i.outputData = r, n !== this.dataTask && (i.data = r);
      }
      yr(this).data = r;
    }, e.prototype.getEncode = function() {
      var r = this.get("encode", !0);
      if (r)
        return W(r);
    }, e.prototype.getSourceManager = function() {
      return yr(this).sourceManager;
    }, e.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, e.prototype.getRawData = function() {
      return yr(this).dataBeforeProcessed;
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
      for (var f = [], h = 1 / 0, c = -1, v = 0, d = o.getDimensionIndex(n), m = o.getStore(), p = 0, g = m.count(); p < g; p++) {
        var y = m.get(d, p), _ = u.dataToCoord(y), S = l - _, T = Math.abs(S);
        T <= a && ((T < h || T === h && S >= 0 && c < 0) && (h = T, c = S, v = 0), S === c && (f[v++] = p));
      }
      return f.length = v, f;
    }, e.prototype.formatTooltip = function(r, n, i) {
      return Nb({
        series: this,
        dataIndex: r,
        multipleSeries: n
      });
    }, e.prototype.isAnimationEnabled = function() {
      var r = this.ecModel;
      if (q.node && !(r && r.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, e.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, e.prototype.getColorFromPalette = function(r, n, i) {
      var a = this.ecModel, o = Yh.prototype.getColorFromPalette.call(this, r, n, i);
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
          var u = r[s], l = lo(o, u);
          i[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, e.prototype.toggleSelect = function(r, n) {
      for (var i = [], a = 0; a < r.length; a++)
        i[0] = r[a], this.isSelected(r[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, e.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var r = this._selectedDataIndicesMap, n = me(r), i = [], a = 0; a < n.length; a++) {
        var o = r[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, e.prototype.isSelected = function(r, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[lo(a, r)]) && !a.getItemModel(r).get(["select", "disabled"]);
    }, e.prototype.isUniversalTransitionEnabled = function() {
      if (this[Rb])
        return !0;
      var r = this.option.universalTransition;
      return r ? r === !0 ? !0 : r && r.enabled : !1;
    }, e.prototype._innerSelect = function(r, n) {
      var i, a, o = this.option, s = o.selectedMode, u = n.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          H(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = n[f], c = lo(r, h);
            l[c] = !0, this._selectedDataIndicesMap[c] = r.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var v = n[u - 1], c = lo(r, v);
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
      return le.registerClass(r);
    }, e.protoInitialize = (function() {
      var r = e.prototype;
      r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill";
    })(), e;
  })(le)
);
Qt(mn, hb);
Qt(mn, Yh);
ug(mn, le);
function id(t) {
  var e = t.name;
  fh(t) || (t.name = kb(t) || e);
}
function kb(t) {
  var e = t.getRawData(), r = e.mapDimensionsAll("seriesName"), n = [];
  return w(r, function(i) {
    var a = e.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function Bb(t) {
  return t.model.getRawData().count();
}
function Vb(t) {
  var e = t.model;
  return e.setData(e.getRawData().cloneShallow()), Fb;
}
function Fb(t, e) {
  e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
}
function ad(t, e) {
  w(A0(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function(r) {
    t.wrapMethod(r, Ee(zb, e));
  });
}
function zb(t, e) {
  var r = Tf(t);
  return r && r.setOutputEnd((e || this).count()), e;
}
function Tf(t) {
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
var Hb = Se.extend({
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
}), Gb = Se.extend({
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
}), Ub = Se.extend({
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
}), Wb = Se.extend({
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
}), Yb = {
  line: Ir,
  rect: Me,
  roundRect: Me,
  square: Me,
  circle: Xs,
  diamond: Gb,
  pin: Ub,
  arrow: Wb,
  triangle: Hb
}, Xb = {
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
}, xf = {};
w(Yb, function(t, e) {
  xf[e] = new t();
});
var Zb = Se.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(t, e, r) {
    var n = dg(t, e, r), i = this.shape;
    return i && i.symbolType === "pin" && e.position === "inside" && (n.y = r.y + r.height * 0.4), n;
  },
  buildPath: function(t, e, r) {
    var n = e.symbolType;
    if (n !== "none") {
      var i = xf[n];
      i || (n = "rect", i = xf[n]), Xb[n](e.x, e.y, e.width, e.height, i.shape), i.buildPath(t, i.shape, r);
    }
  }
});
function $b(t, e) {
  if (this.type !== "image") {
    var r = this.style;
    this.__isEmptyBrush ? (r.stroke = t, r.fill = e || Y.color.neutral00, r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = t : r.fill = t, this.markRedraw();
  }
}
function Zh(t, e, r, n, i, a, o) {
  var s = t.indexOf("empty") === 0;
  s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
  var u;
  return t.indexOf("image://") === 0 ? u = mm(t.slice(8), new Z(e, r, n, i), o ? "center" : "cover") : t.indexOf("path://") === 0 ? u = Dh(t.slice(7), {}, new Z(e, r, n, i), o ? "center" : "cover") : u = new Zb({
    shape: {
      symbolType: t,
      x: e,
      y: r,
      width: n,
      height: i
    }
  }), u.__isEmptyBrush = s, u.setColor = $b, a && u.setColor(a), u;
}
function eL(t) {
  return B(t) || (t = [+t, +t]), [t[0] || 0, t[1] || 0];
}
function qb(t, e) {
  if (t != null)
    return B(t) || (t = [t, t]), [Bt(t[0], e[0]) || 0, Bt(G(t[1], t[0]), e[1]) || 0];
}
function tL(t, e) {
  var r = t.mapDimensionsAll("defaultedLabel"), n = r.length;
  if (n === 1) {
    var i = di(t, e, r[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < r.length; o++)
      a.push(di(t, e, r[o]));
    return a.join(" ");
  }
}
function rL(t, e) {
  var r = t.mapDimensionsAll("defaultedLabel");
  if (!B(e))
    return e + "";
  for (var n = [], i = 0; i < r.length; i++) {
    var a = t.getDimensionIndex(r[i]);
    a >= 0 && n.push(e[a]);
  }
  return n.join(" ");
}
var Kb = typeof Float32Array !== xi ? Float32Array : void 0, nL = typeof Float64Array !== xi ? Float64Array : void 0;
function iL(t) {
  return Qb({
    ctor: Kb
  }, t).arr;
}
function Qb(t, e) {
  process.env.NODE_ENV !== "production" && O(e != null && isFinite(e) && e >= 0 && t.hasOwnProperty("ctor"));
  var r = t.arr, n = t.ctor;
  if (e > av && (e = av), !r || t.typed && r.length < e) {
    var i = void 0;
    if (n)
      try {
        i = new n(e), t.typed = !0, r && i.set(r);
      } catch (s) {
        process.env.NODE_ENV !== "production" && oe(s);
      }
    if (!i && (i = [], t.typed = !1, r))
      for (var a = 0, o = r.length; a < o; a++)
        i[a] = r[a];
    t.arr = i;
  }
  return t;
}
function Jb() {
  var t = pe();
  return function(e) {
    var r = t(e), n = e.pipelineContext, i = !!r.large, a = !!r.progressiveRender, o = r.large = !!(n && n.large), s = r.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var dy = pe(), jb = Jb(), pn = (
  /** @class */
  (function() {
    function t() {
      this.group = new ft(), this.uid = js("viewChart"), this.renderTask = la({
        plan: eC,
        reset: tC
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
        process.env.NODE_ENV !== "production" && oe("Unknown dataType " + i.dataType);
        return;
      }
      sd(a, i, "emphasis");
    }, t.prototype.downplay = function(e, r, n, i) {
      var a = e.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && oe("Unknown dataType " + i.dataType);
        return;
      }
      sd(a, i, "normal");
    }, t.prototype.remove = function(e, r) {
      this.group.removeAll();
    }, t.prototype.dispose = function(e, r) {
    }, t.prototype.updateView = function(e, r, n, i) {
      this.render(e, r, n, i);
    }, t.prototype.updateVisual = function(e, r, n, i) {
      this.render(e, r, n, i);
    }, t.prototype.eachRendered = function(e) {
      xm(this.group, e);
    }, t.markUpdateMethod = function(e, r) {
      dy(e).updateMethod = r;
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "chart";
    })(), t;
  })()
);
function od(t, e, r) {
  t && ci(t) && (e === "emphasis" ? nf : af)(t, r);
}
function sd(t, e, r) {
  var n = Ra(t, e), i = e && e.highlightKey != null ? yT(e.highlightKey) : null;
  n != null ? w(Ye(n), function(a) {
    od(t.getItemGraphicEl(a), r, i);
  }) : t.eachItemGraphicEl(function(a) {
    od(a, r, i);
  });
}
rh(pn, ["dispose"]);
Rs(pn);
function eC(t) {
  return jb(t.model);
}
function tC(t) {
  var e = t.model, r = t.ecModel, n = t.api, i = t.payload, a = e.pipelineContext.progressiveRender, o = t.view, s = i && dy(i).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](e, r, n, i), rC[u];
}
var rC = {
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
function nC(t, e, r, n, i) {
  var a = t.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = r.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var h = new Me({
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
    var m = $(i) ? function(p) {
      i(p, h);
    } : null;
    Ch(h, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, r, null, n, m);
  }
  return h;
}
function iC(t, e, r) {
  var n = t.getArea(), i = ae(n.r0, 1), a = ae(n.r, 1), o = new Zs({
    shape: {
      cx: ae(t.cx, 1),
      cy: ae(t.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (e) {
    var s = t.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, Ch(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, r);
  }
  return o;
}
function aL(t, e, r, n, i) {
  if (t) {
    if (t.type === "polar")
      return iC(t, e, r);
    if (t.type === "cartesian2d")
      return nC(t, e, r, n, i);
  } else return null;
  return null;
}
function oL(t, e) {
  return t.type === e;
}
var Lt = (
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
Rs(Lt);
var aC = 0, wf = (
  /** @class */
  (function() {
    function t(e) {
      this.categories = e.categories || [], this._needCollect = e.needCollect, this._deduplication = e.deduplication, this.uid = ++aC, this._onCollect = e.onCollect;
    }
    return t.createByAxisModel = function(e) {
      var r = e.option, n = r.data, i = n && X(n, oC);
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
      if (!V(e) && !n)
        return e;
      if (n && !this._deduplication)
        return r = this.categories.length, this.categories[r] = e, this._onCollect && this._onCollect(e, r), r;
      var i = this._getOrCreateMap();
      return r = i.get(e), r == null && (n ? (r = this.categories.length, this.categories[r] = e, i.set(e, r), this._onCollect && this._onCollect(e, r)) : r = NaN), r;
    }, t.prototype._getOrCreateMap = function() {
      return this._map || (this._map = W(this.categories));
    }, t;
  })()
);
function oC(t) {
  return H(t) && t.value != null ? t.value : t + "";
}
var bt = 0, xa = 1, sC = {
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
}, py = me(sC), ls = 2, gy = 3;
function $h(t, e, r) {
  var n;
  t = t || {};
  var i = We();
  if (i) {
    var a = i.createBreakScaleMapper(e, r);
    a.hasBreaks() && (w(py, function(o) {
      a[o] && (t[o] = _e(a[o], a));
    }), n = a);
  }
  return n == null && lC(t, r), {
    brk: n,
    mapper: t
  };
}
function my(t, e) {
  w(py, function(r) {
    t[r] = e[r];
  });
}
function yy(t, e) {
  t.freeze = Ve, process.env.NODE_ENV !== "production" && (t.freeze = function() {
    e.freeze();
  });
}
function wa(t) {
  return t.getExtentUnsafe(bt, ls);
}
function fs(t, e) {
  return t.getExtentUnsafe(xa, e) || t.getExtentUnsafe(bt, e);
}
function uC(t) {
  var e = fs(t, gy);
  return e[1] - e[0];
}
function ru(t) {
  var e = t.getExtentUnsafe(bt, gy);
  return e[1] - e[0];
}
function lC(t, e) {
  var r = t || {}, n = [];
  return r._extents = n, n[bt] = e ? e.slice() : Vt(), R(r, fC), r;
}
var fC = {
  needTransform: function() {
    return !1;
  },
  normalize: function(t) {
    var e = this._extents[xa] || this._extents[bt];
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
  },
  scale: function(t) {
    var e = this._extents[xa] || this._extents[bt];
    return t * (e[1] - e[0]) + e[0];
  },
  transformIn: function(t) {
    return t;
  },
  transformOut: function(t) {
    return t;
  },
  contain: function(t) {
    var e = fs(this, null);
    return t >= e[0] && t <= e[1];
  },
  getExtent: function() {
    return this._extents[bt].slice();
  },
  getExtentUnsafe: function(t) {
    return this._extents[t];
  },
  setExtent: function(t, e) {
    process.env.NODE_ENV !== "production" && O(!this._frozen), ud(this._extents, bt, t, e);
  },
  setExtent2: function(t, e, r) {
    process.env.NODE_ENV !== "production" && O(!this._frozen);
    var n = this._extents;
    n[t] || (n[t] = n[bt].slice()), ud(n, t, e, r);
  },
  freeze: function() {
    process.env.NODE_ENV !== "production" && (this._frozen = !0);
  }
};
function ud(t, e, r, n) {
  hi(r, n) ? (t[e][0] = r, t[e][1] = n) : process.env.NODE_ENV !== "production" && r != null && n != null && r <= n && oe("Invalid setExtent call - start: " + r + ", end: " + n);
}
function _y(t) {
  return hs(t) || pi(t);
}
function hs(t) {
  return t.type === "interval";
}
function qh(t) {
  return t.type === "time";
}
function pi(t) {
  return t.type === "log";
}
function er(t) {
  return t.type === "ordinal";
}
function hC(t) {
  var e = sh(t), r = Si(10, e), n = fr(t / r);
  return n ? n === 2 ? n = 3 : n === 3 ? n = 5 : n *= 2 : n = 1, ae(n * r, -e);
}
function yn(t) {
  return sr(t) + 2;
}
function fo(t, e) {
  return da(t) / da(e);
}
function el(t, e, r) {
  var n = r && r.lookup;
  if (n) {
    for (var i = 0; i < n.from.length; i++)
      if (t === n.from[i])
        return n.to[i];
  }
  return Si(e, t);
}
function Sy(t, e, r) {
  var n = t.slice();
  if (n[0] === n[1]) {
    var i = r && r.ctnShp;
    if (n[0] !== 0) {
      var a = Oe(n[0]);
      e[1] || (n[1] += a / 2), n[0] -= a / 2;
    } else
      i && (n[0] = -1), n[1] = 1;
  }
  return (!cr(n[0]) || !cr(n[1])) && (n[0] = 0, n[1] = 1), n[1] < n[0] && n.reverse(), n;
}
function cC(t, e) {
  return [t[0] !== e[0], t[1] !== e[1]];
}
function Kh(t, e) {
  return t = t || e, fr(ve(t, 1));
}
function Ty(t, e, r) {
  var n = wa(t), i = n[0], a = t.count(), o = Math.max((e || 0) + 1, 1);
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
var xy = (
  /** @class */
  (function(t) {
    F(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "ordinal", n.parse = e.parse, my(n, e.decoratedMethods);
      var i = r.ordinalMeta;
      i || (i = new wf({})), B(i) && (i = new wf({
        categories: X(i, function(o) {
          return H(o) ? o.value : o;
        })
      })), n._ordinalMeta = i;
      var a = $h(
        null,
        null,
        // Do not support break in OrdinalScale yet.
        r.extent || [0, i.categories.length - 1]
      );
      return n._mapper = a.mapper, yy(n, a.mapper), n;
    }
    return e.parse = function(r) {
      return r == null ? r = NaN : V(r) ? (r = this._ordinalMeta.getOrdinal(r), r == null && (r = NaN)) : r = fr(r), r;
    }, e.prototype.getTicks = function() {
      var r = [];
      return Ty(this, 0, function(n) {
        r.push(n);
      }), r;
    }, e.prototype.getMinorTicks = function(r) {
    }, e.prototype.setSortInfo = function(r) {
      if (r == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = r.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = lt(s, n.length); o < u; ++o) {
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
      var r = wa(this._mapper);
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
        return this.getRawOrdinalNumber(fr(this._mapper.scale(r)));
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
  })(Lt)
);
Lt.registerClass(xy);
function Qh(t, e, r, n) {
  for (var i = t.getTicks({
    expandToNicedExtent: !0
  }), a = [], o = t.getExtent(), s = 1; s < i.length; s++) {
    var u = i[s], l = i[s - 1];
    if (!(l.break || u.break)) {
      for (var f = 0, h = [], c = u.value - l.value, v = c / e, d = yn(v); f < e - 1; ) {
        var m = ae(l.value + (f + 1) * v, d);
        m > o[0] && m < o[1] && h.push(m), f++;
      }
      var p = We();
      p && p.pruneTicksByBreak("auto", h, r, function(g) {
        return g;
      }, n, o), a.push(h);
    }
  }
  return a;
}
var Dr = (
  /** @class */
  (function(t) {
    F(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "interval", n.parse = e.parse, r = r || {};
      var i = qm(n, r), a = $h(n, i, null);
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
      return ne(this._cfg);
    }, e.prototype.setConfig = function(r) {
      var n = wa(this);
      process.env.NODE_ENV !== "production" && (O(r.interval != null), r.intervalCount != null && O(r.intervalCount >= -1 && r.intervalPrecision != null && !gn(this)), r.niceExtent != null && (O(isFinite(r.niceExtent[0]) && isFinite(r.niceExtent[1])), O(n[0] <= r.niceExtent[0] && r.niceExtent[1] <= n[1]), O(ae(r.niceExtent[0] - r.niceExtent[1], sr(r.interval)) <= r.interval))), this._cfg = r = ne(r), r.niceExtent == null && (r.niceExtent = n.slice()), r.intervalPrecision == null && (r.intervalPrecision = yn(r.interval));
    }, e.prototype.getTicks = function(r) {
      r = r || {};
      var n = this._cfg, i = n.interval, a = wa(this), o = n.niceExtent, s = n.intervalPrecision, u = We(), l = this.brk, f = u && l, h = [];
      if (!i)
        return h;
      if (r.breakTicks === "only_break" && f)
        return u.addBreaksToTicks(h, l.breaks, a), h;
      process.env.NODE_ENV !== "production" && O(o != null);
      var c = 3e3;
      a[0] < o[0] && h.push({
        value: r.expandToNicedExtent ? ae(o[0] - i, s) : a[0]
      });
      for (var v = function(_, S) {
        return fr((S - _) / i);
      }, d = n.intervalCount, m = o[0], p = 0; ; p++) {
        if (d == null) {
          if (m > o[1] || !isFinite(m) || !isFinite(o[1]))
            break;
        } else {
          if (p > d)
            break;
          m = lt(m, o[1]), p === d && (m = o[1]);
        }
        if (h.push({
          value: m
        }), m = ae(m + i, s), l) {
          var g = l.calcNiceTickMultiple(m, v);
          g >= 0 && (m = ae(m + g * i, s));
        }
        if (h.length > 0 && m === h[h.length - 1].value)
          break;
        if (h.length > c)
          return process.env.NODE_ENV !== "production" && Ke('Exceed safe limit in IntervalScale["getTicks"].'), [];
      }
      var y = h.length ? h[h.length - 1].value : o[1];
      return a[1] > y && h.push({
        value: r.expandToNicedExtent ? ae(y + i, s) : a[1]
      }), f && u.pruneTicksByBreak(r.pruneByBreak, h, l.breaks, function(_) {
        return _.value;
      }, n.interval, a), f && r.breakTicks !== "none" && u.addBreaksToTicks(h, l.breaks, a), h;
    }, e.prototype.getMinorTicks = function(r) {
      return Qh(this, r, us(this), this._cfg.interval);
    }, e.prototype.getLabel = function(r, n) {
      if (r == null)
        return "";
      var i = n && n.precision;
      i == null ? i = sr(r.value) || 0 : i === "auto" && (i = this._cfg.intervalPrecision);
      var a = ae(r.value, i, !0);
      return ny(a);
    }, e.type = "interval", e;
  })(Lt)
);
Lt.registerClass(Dr);
var vC = function(t, e, r, n) {
  for (; r < n; ) {
    var i = r + n >>> 1;
    t[i][1] < e ? r = i + 1 : n = i;
  }
  return r;
}, wy = (
  /** @class */
  (function(t) {
    F(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "time", n.parse = e.parse, n._locale = r.locale, n._useUTC = r.useUTC, n._interval = 0;
      var i = qm(n, r), a = $h(n, i, null);
      return n.brk = a.brk, n;
    }
    return e.prototype.getLabel = function(r) {
      return eu(r.value, Kv[Jw(sa(this._minLevelUnit))] || Kv.second, this._useUTC, this._locale);
    }, e.prototype.getFormattedLabel = function(r, n, i) {
      return jw(r, n, i, this._locale, this._useUTC);
    }, e.prototype.getTicks = function(r) {
      r = r || {};
      var n = this._interval, i = wa(this), a = We(), o = this.brk, s = a && o, u = [];
      if (!n)
        return u;
      var l = this._useUTC;
      if (s && r.breakTicks === "only_break")
        return We().addBreaksToTicks(u, o.breaks, i), u;
      u = SC(this._minLevelUnit, this._approxInterval, l, i, ru(this), o);
      var f = at.length - 1, h = 0;
      return w(u, function(c) {
        c.time && (f = Math.min(f, ue(at, c.time.upperTimeUnit)), h = Math.max(h, c.time.level));
      }), s && We().pruneTicksByBreak(r.pruneByBreak, u, o.breaks, function(c) {
        return c.value;
      }, this._approxInterval, i), s && r.breakTicks !== "none" && We().addBreaksToTicks(u, o.breaks, i, function(c) {
        for (var v = Math.max(ue(at, ei(c.vmin, l)), ue(at, ei(c.vmax, l))), d = 0, m = 0; m < at.length; m++)
          if (!by(at[m], c.vmin, c.vmax, l)) {
            d = m;
            break;
          }
        var p = Math.min(d, f), g = Math.max(p, v);
        return {
          level: h,
          lowerTimeUnit: at[g],
          upperTimeUnit: at[p]
        };
      }), u;
    }, e.prototype.getMinorTicks = function(r) {
      return Qh(this, r, us(this), this._interval);
    }, e.prototype.setTimeInterval = function(r) {
      this._interval = r.interval, this._approxInterval = r.approxInterval, this._minLevelUnit = r.minLevelUnit;
    }, e.parse = function(r) {
      return we(r) ? Math.round(r) : +Ti(r);
    }, e.type = "time", e;
  })(Lt)
), ho = [
  // Format                           interval
  ["second", kh],
  ["minute", Bh],
  ["hour", oa],
  ["quarter-day", oa * 6],
  ["half-day", oa * 12],
  ["day", wt * 1.2],
  ["half-week", wt * 3.5],
  ["week", wt * 7],
  ["month", wt * 31],
  ["quarter", wt * 95],
  ["half-year", qv / 2],
  ["year", qv]
  // 1Y
];
function by(t, e, r, n) {
  return mf(new Date(e), t, n).getTime() === mf(new Date(r), t, n).getTime();
}
function dC(t, e) {
  return t /= wt, t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1;
}
function pC(t) {
  var e = 30 * wt;
  return t /= e, t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1;
}
function gC(t) {
  return t /= oa, t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1;
}
function ld(t, e) {
  return t /= e ? Bh : kh, t > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1;
}
function mC(t) {
  return ve(uh(t, !0), 1);
}
function yC(t, e, r) {
  var n = Math.max(0, ue(at, e) - 1);
  return mf(new Date(t), at[n], r).getTime();
}
function _C(t, e) {
  var r = /* @__PURE__ */ new Date(0);
  r[t](1);
  var n = r.getTime();
  r[t](1 + e);
  var i = r.getTime() - n;
  return function(a, o) {
    return Math.max(0, Math.round((o - a) / i));
  };
}
function SC(t, e, r, n, i, a) {
  var o = 3e3, s = $w, u = 0;
  function l(N, z, Q, ee, te, J, re) {
    for (var j = _C(te, N), U = z, se = new Date(U); U < Q && U <= n[1]; ) {
      if (re.push({
        value: U
      }), u++ > o) {
        process.env.NODE_ENV !== "production" && Ke('Exceed safe limit in TimeScale["getTicks"].');
        break;
      }
      if (se[te](se[ee]() + N), U = se.getTime(), a) {
        var he = a.calcNiceTickMultiple(U, j);
        he > 0 && (se[te](se[ee]() + he * N), U = se.getTime());
      }
    }
    re.push({
      value: U,
      // extent[1] should be added; deduplication will be performed later.
      notAdd: U > n[1]
    });
  }
  function f(N, z, Q) {
    var ee = [], te = !z.length;
    if (!by(sa(N), n[0], n[1], r)) {
      te && (z = [{
        value: yC(n[0], N, r)
      }, {
        value: n[1]
      }]);
      for (var J = 0; J < z.length - 1; J++) {
        var re = z[J].value, j = z[J + 1].value;
        if (re !== j) {
          var U = void 0, se = void 0, he = void 0, rt = !1;
          switch (N) {
            case "year":
              U = Math.max(1, Math.round(e / wt / 365)), se = Km(r), he = eb(r);
              break;
            case "half-year":
            case "quarter":
            case "month":
              U = pC(e), se = Vh(r), he = Qm(r);
              break;
            case "week":
            // PENDING If week is added. Ignore day.
            case "half-week":
            case "day":
              U = dC(e), se = Fh(r), he = Jm(r), rt = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              U = gC(e), se = zh(r), he = jm(r);
              break;
            case "minute":
              U = ld(e, !0), se = Hh(r), he = ey(r);
              break;
            case "second":
              U = ld(e, !1), se = Gh(r), he = ty(r);
              break;
            case "millisecond":
              U = mC(e), se = Uh(r), he = ry(r);
              break;
          }
          j >= n[0] && re <= n[1] && l(U, re, j, se, he, rt, ee), N === "year" && Q.length > 1 && J === 0 && Q.unshift({
            value: Q[0].value - U
          });
        }
      }
      for (var J = 0; J < ee.length; J++)
        Q.push(ee[J]);
    }
  }
  for (var h = [], c = [], v = 0, d = 0, m = 0; m < s.length; ++m) {
    var p = sa(s[m]);
    if (Qw(s[m])) {
      f(s[m], h[h.length - 1] || [], c);
      var g = s[m + 1] ? sa(s[m + 1]) : null;
      if (p !== g) {
        if (c.length) {
          d = v, c.sort(function(N, z) {
            return N.value - z.value;
          });
          for (var y = [], _ = 0; _ < c.length; ++_) {
            var S = c[_].value;
            (_ === 0 || c[_ - 1].value !== S) && (y.push(c[_]), S >= n[0] && S <= n[1] && v++);
          }
          var T = i / e;
          if (v > T * 1.5 && d > T / 1.5 || (h.push(y), v > T || t === s[m]))
            break;
        }
        c = [];
      }
    }
  }
  for (var x = Be(X(h, function(N) {
    return Be(N, function(z) {
      return z.value >= n[0] && z.value <= n[1] && !z.notAdd;
    });
  }), function(N) {
    return N.length > 0;
  }), b = x.length - 1, C = [], m = 0; m < x.length; ++m)
    for (var E = x[m], D = 0; D < E.length; ++D) {
      var M = ei(E[D].value, r);
      C.push({
        value: E[D].value,
        time: {
          level: b - m,
          upperTimeUnit: M,
          lowerTimeUnit: M
        }
      });
    }
  ch(C, $S, null), C.sort(function(N, z) {
    return N.value - z.value;
  });
  var I = C[0], A = C[C.length - 1], L = ei(n[0], r), k = ei(n[1], r);
  return (!I || I.value > n[0]) && C.unshift({
    value: n[0],
    time: {
      level: 0,
      upperTimeUnit: L,
      lowerTimeUnit: L
    },
    notNice: !0
  }), (!A || A.value < n[1]) && C.push({
    value: n[1],
    time: {
      level: 0,
      upperTimeUnit: k,
      lowerTimeUnit: k
    },
    notNice: !0
  }), C;
}
var TC = function(t, e) {
  var r = t.getExtent();
  if (r[0] === r[1] && (r[0] -= wt, r[1] += wt), r[1] === -1 / 0 && r[0] === 1 / 0) {
    var n = /* @__PURE__ */ new Date();
    r[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), r[0] = r[1] - wt;
  }
  t.setExtent(r[0], r[1]);
  var i = Kh(e.splitNumber, 10), a = ru(t) / i, o = e.minInterval, s = e.maxInterval;
  o != null && a < o && (a = o), s != null && a > s && (a = s);
  var u = ho.length, l = Math.min(vC(ho, a, 0, u), u - 1), f = ho[l][1], h = ho[Math.max(l - 1, 0)][0];
  t.setTimeInterval({
    approxInterval: a,
    interval: f,
    minLevelUnit: h
  });
};
Lt.registerClass(wy);
var co = 0, vo = 1, xC = 2, cs = (
  /** @class */
  (function(t) {
    F(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "log", n.parse = Dr.parse, n.base = r.logBase || 10;
      var i = [], a = [], o = n._lookup = {
        from: i,
        to: a
      };
      i[co] = i[vo] = a[co] = a[vo] = NaN, my(n, e.mapperMethods);
      var s = We(), u = r.breakOption, l = {
        lookup: o
      };
      return s && s.parseAxisBreakOptionInwardTransform(u, n, {
        noNegative: !0
      }, xC, l), n.powStub = new Dr({
        breakParsed: l.original
      }), n.intervalStub = new Dr({
        breakParsed: l.transformed
      }), yy(n, n.intervalStub), n;
    }
    return e.prototype.getTicks = function(r) {
      var n = this.base, i = this.powStub, a = We(), o = this.intervalStub, s = o.getExtent(), u = i.getExtent(), l = {
        lookup: {
          from: s,
          to: u
        }
      };
      return X(o.getTicks(r || {}), function(f) {
        var h = f.value, c = el(h, n, l), v;
        if (a) {
          var d = a.getTicksBreakOutwardTransform(this, f, us(i), this._lookup);
          d && (v = d.vBreak, c = d.tickVal);
        }
        return {
          value: c,
          break: v
        };
      }, this);
    }, e.prototype.getMinorTicks = function(r) {
      return Qh(
        this,
        r,
        us(this.powStub),
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
        return this.intervalStub.normalize(fo(r, this.base));
      },
      scale: function(r) {
        return el(this.intervalStub.scale(r), this.base, null);
      },
      transformIn: function(r, n) {
        return r = fo(r, this.base), n && n.depth === ls ? r : this.intervalStub.transformIn(r, n);
      },
      transformOut: function(r, n) {
        var i = n ? n.depth : null;
        return fd.depth = i, hd.lookup = this._lookup, el(i === ls ? r : this.intervalStub.transformOut(r, fd), this.base, hd);
      },
      contain: function(r) {
        return this.powStub.contain(r);
      },
      /**
       * NOTICE: The caller should ensure `start` and `end` are both non-negative.
       */
      setExtent: function(r, n) {
        this.setExtent2(bt, r, n);
      },
      setExtent2: function(r, n, i) {
        if (!(!hi(n, i) || n <= 0 || i <= 0)) {
          var a = cd, o = cd;
          if (r === bt) {
            var s = this._lookup;
            a = s.to, o = s.from;
          }
          this.powStub.setExtent2(r, a[co] = n, a[vo] = i);
          var u = this.base;
          this.intervalStub.setExtent2(r, o[co] = fo(n, u), o[vo] = fo(i, u));
        }
      },
      getFilter: function() {
        return {
          g: 0
        };
      },
      sanitize: function(r, n) {
        return hi(n[0], n[1]) && $t(r) && r <= 0 && (r = n[0]), r;
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
  })(Lt)
);
Lt.registerClass(cs);
var fd = {}, hd = {}, cd = [], Cy = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
}, Dy = pe();
function wC(t) {
  var e = t.get("type");
  return (
    // In ec option, `xxxAxis.type` may be undefined.
    (e == null || !et(Cy, e) && !Lt.getClass(e)) && (e = "value"), e
  );
}
function bC(t, e, r) {
  var n = We(), i;
  switch (n && (i = Ey(t, e)), e) {
    case "category":
      return new xy({
        ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
        extent: Vt()
      });
    case "time":
      return new wy({
        locale: t.ecModel.getLocaleModel(),
        useUTC: t.ecModel.get("useUTC"),
        breakOption: i
      });
    case "log":
      return new cs({
        logBase: t.get("logBase"),
        breakOption: i
      });
    case "value":
      return new Dr({
        breakOption: i
      });
    default:
      return new (Lt.getClass(e) || Dr)({});
  }
}
function CC(t, e, r) {
  var n = t.getExtentUnsafe(bt, null), i = n[0], a = n[1];
  return hi(i, a) ? i === e || a === e ? EC : i < e && a > e ? DC : bf : bf;
}
var DC = 1, EC = 2, bf = 3;
function MC(t) {
  Dy(t).noOnMyZero = !0;
}
function AC(t) {
  return Dy(t).noOnMyZero;
}
function nu(t) {
  var e = t.getLabelModel().get("formatter");
  if (t.type === "time") {
    var r = qw(e);
    return function(i, a) {
      return t.scale.getFormattedLabel(i, a, r);
    };
  } else {
    if (V(e))
      return function(i) {
        var a = t.scale.getLabel(i), o = e.replace("{value}", a ?? "");
        return o;
      };
    if ($(e)) {
      if (t.type === "category")
        return function(i, a) {
          return e(
            vs(t, i),
            i.value - t.scale.getExtent()[0],
            null
            // Using `null` just for backward compat.
          );
        };
      var n = We();
      return function(i, a) {
        var o = null;
        return n && (o = n.makeAxisLabelFormatterParamBreak(o, i.break)), e(vs(t, i), a, o);
      };
    } else
      return function(i) {
        return t.scale.getLabel(i);
      };
  }
}
function vs(t, e) {
  var r = t.scale;
  return er(r) ? r.getLabel(e) : e.value;
}
function Jh(t) {
  var e = t.get("interval");
  return e ?? "auto";
}
function IC(t) {
  return t.type === "category" && Jh(t.getLabelModel()) === 0;
}
function LC(t, e) {
  var r = {};
  return w(t.mapDimensionsAll(e), function(n) {
    r[bw(t, n)] = !0;
  }), me(r);
}
function gi(t) {
  return t === "middle" || t === "center";
}
function ba(t) {
  return t.getShallow("show");
}
function Ey(t, e, r) {
  var n = t.get("breaks", !0);
  if (n != null) {
    if (!We()) {
      process.env.NODE_ENV !== "production" && oe('Must `import {AxisBreak} from "echarts/features.js"; use(AxisBreak);` first if using breaks option.');
      return;
    }
    if (!OC(e)) {
      if (process.env.NODE_ENV !== "production") {
        var i = t instanceof le ? " " + t.type + "[" + t.componentIndex + "]" : "";
        oe("Axis" + i + " does not support break.");
      }
      return;
    }
    return n;
  }
}
function OC(t) {
  return t !== "category";
}
function My(t, e, r, n, i, a) {
  var o = pi(t), s = o ? t.intervalStub : t;
  if (s.setExtent(n[0], n[1]), o) {
    var u = t.powStub, l = {
      depth: ls
    }, f = t.transformOut(n[0], l), h = t.transformOut(n[1], l), c = cC(r, n);
    e[0] && !c[0] && (f = i[0]), e[1] && !c[1] && (h = i[1]), u.setExtent(f, h);
  }
  s.setConfig(a);
}
function iu(t, e) {
  return er(t) ? t.getRawOrdinalNumber(e.value) : e.value;
}
function Ay(t, e) {
  return er(t) && !!e.get("boundaryGap");
}
var NC = {
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
}, PC = function(t) {
  return Math.round(t.length / 2);
};
function sL(t) {
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
          V(a) ? d = NC[a] : $(a) && (d = a), d && e.setData(i.downSample(i.mapDimension(l.dim), 1 / v, d, PC));
        }
      }
    }
  };
}
var RC = pe(), fa = pe(), Mt = {
  estimate: 1,
  determine: 2
};
function ds(t) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: t
  };
}
function kC(t, e) {
  var r = t.getLabelModel().get("customValues");
  if (r) {
    var n = t.scale;
    return {
      labels: X(Iy(r, n), function(i, a) {
        return {
          formattedLabel: nu(t)(i, a),
          rawLabel: n.getLabel(i),
          tick: i
        };
      })
    };
  }
  return t.type === "category" ? VC(t, e) : zC(t);
}
function BC(t, e, r) {
  var n = t.scale, i = t.getTickModel().get("customValues");
  return i ? {
    ticks: Iy(i, n)
  } : t.type === "category" ? FC(t, e) : {
    ticks: n.getTicks(r)
  };
}
function Iy(t, e) {
  var r = e.getExtent(), n = [];
  return w(t, function(i) {
    i = e.parse(i), i >= r[0] && i <= r[1] && n.push(i);
  }), ch(n, qS, null), Pg(n), X(n, function(i) {
    return {
      value: i
    };
  });
}
function VC(t, e) {
  var r = t.getLabelModel(), n = Ly(t, r, e);
  return !r.get("show") || t.scale.isBlank() ? {
    labels: []
  } : n;
}
function Ly(t, e, r) {
  var n = GC(t), i = Jh(e), a = r.kind === Mt.estimate;
  if (!a) {
    var o = Ny(n, i);
    if (o)
      return o;
  }
  var s, u;
  $(i) ? s = ps(t, i, !1) : (u = i === "auto" ? UC(t, r) : i, s = ps(t, u, !1));
  var l = {
    labels: s,
    labelCategoryInterval: u
  };
  return a ? r.out.noPxChangeTryDetermine.push(function() {
    return Cf(n, i, l), !0;
  }) : Cf(n, i, l), l;
}
function FC(t, e) {
  var r = HC(t), n = Jh(e), i = Ny(r, n);
  if (i)
    return i;
  var a, o;
  if ((!e.get("show") || t.scale.isBlank()) && (a = []), $(n))
    a = ps(t, n, !0);
  else if (n === "auto") {
    var s = Ly(t, t.getLabelModel(), ds(Mt.determine));
    o = s.labelCategoryInterval, a = X(s.labels, function(u) {
      return u.tick;
    });
  } else
    o = n, a = ps(t, o, !0);
  return Cf(r, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function zC(t) {
  var e = t.scale.getTicks(), r = nu(t);
  return {
    labels: X(e, function(n, i) {
      return {
        formattedLabel: r(n, i),
        rawLabel: t.scale.getLabel(n),
        tick: n
      };
    })
  };
}
var HC = Oy("axisTick"), GC = Oy("axisLabel");
function Oy(t) {
  return function(r) {
    return fa(r)[t] || (fa(r)[t] = {
      list: []
    });
  };
}
function Ny(t, e) {
  for (var r = 0; r < t.list.length; r++)
    if (t.list[r].key === e)
      return t.list[r].value;
}
function Cf(t, e, r) {
  return t.list.push({
    key: e,
    value: r
  }), r;
}
function UC(t, e) {
  if (e.kind === Mt.estimate) {
    var r = t.calculateCategoryInterval(e);
    return e.out.noPxChangeTryDetermine.push(function() {
      return fa(t).autoInterval = r, !0;
    }), r;
  }
  var n = fa(t).autoInterval;
  return n ?? (fa(t).autoInterval = t.calculateCategoryInterval(e));
}
function WC(t, e) {
  var r = e.kind, n = XC(t), i = nu(t), a = (n.axisRotate - n.labelRotate) / 180 * Math.PI, o = t.scale, s = o.getExtent(), u = o.count();
  if (s[1] - s[0] < 1)
    return 0;
  var l = 1, f = 40;
  u > f && (l = Math.max(1, Math.floor(u / f)));
  for (var h = s[0], c = t.dataToCoord(h + 1) - t.dataToCoord(h), v = Math.abs(c * Math.cos(a)), d = Math.abs(c * Math.sin(a)), m = 0, p = 0; h <= s[1]; h += l) {
    var g = 0, y = 0, _ = vg(i({
      value: h
    }), n.font, "center", "top");
    g = _.width * 1.3, y = _.height * 1.3, m = Math.max(m, g, 7), p = Math.max(p, y, 7);
  }
  var S = m / v, T = p / d;
  isNaN(S) && (S = 1 / 0), isNaN(T) && (T = 1 / 0);
  var x = Math.max(0, Math.floor(Math.min(S, T)));
  if (r === Mt.estimate)
    return e.out.noPxChangeTryDetermine.push(_e(YC, null, t, x, u)), x;
  var b = Py(t, x, u);
  return b ?? x;
}
function YC(t, e, r) {
  return Py(t, e, r) == null;
}
function Py(t, e, r) {
  var n = RC(t.model), i = t.getExtent(), a = n.lastAutoInterval, o = n.lastTickCount;
  if (a != null && o != null && Math.abs(a - e) <= 1 && Math.abs(o - r) <= 1 && a > e && n.axisExtent0 === i[0] && n.axisExtent1 === i[1])
    return a;
  n.lastTickCount = r, n.lastAutoInterval = e, n.axisExtent0 = i[0], n.axisExtent1 = i[1];
}
function XC(t) {
  var e = t.getLabelModel();
  return {
    axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
    labelRotate: e.get("rotate") || 0,
    font: e.getFont()
  };
}
function ps(t, e, r) {
  var n = nu(t), i = t.scale, a = [], o = $(e);
  return Ty(i, o ? 0 : e, function(s, u) {
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
var au = pe();
function ZC(t) {
  au(t).prepare = {};
}
function $C(t) {
  au(t).fullUpdate = {};
}
function qC(t) {
  return au(t).prepare;
}
function wi(t) {
  return au(t).fullUpdate;
}
var KC = XS(), Df = "|&", bi = pe(), QC = -2, uL = -1, JC = pe(), wn;
process.env.NODE_ENV !== "production" && (wn = function(t) {
  O(t && t.model && t.model.uid && t.model.ecModel);
});
function jh(t, e) {
  var r = t.model, n = bi(wi(r.ecModel)).keyed, i = n && n.get(e);
  return i && i.get(r.uid);
}
function jC(t, e) {
  return process.env.NODE_ENV !== "production" && (O(e != null), wn(t)), ky(jh(t, e));
}
function eD(t, e) {
  process.env.NODE_ENV !== "production" && wn(t);
  var r = [];
  return Ry(t.model.ecModel, function(n) {
    for (var i = 0; i < e.length; i++)
      e[i] && n.serByIdx[e[i].seriesIndex] && r.push(ky(n));
  }), r;
}
function Ry(t, e) {
  var r = bi(wi(t)).keyed;
  r && r.each(function(n, i) {
    n.each(function(a, o) {
      e(a, i, o);
    });
  });
}
function ky(t) {
  return {
    liPosMinGap: t ? t.liPosMinGap : void 0
  };
}
function tD(t, e) {
  process.env.NODE_ENV !== "production" && wn(t);
  var r = t.model.ecModel, n = bi(wi(r)).axSer;
  n && By(r, n.get(t.model.uid), e);
}
function lL(t, e, r) {
  process.env.NODE_ENV !== "production" && (O(e != null), wn(t));
  var n = jh(t, e);
  n && By(t.model.ecModel, n.sers, r);
}
function By(t, e, r) {
  if (e)
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      t.isSeriesFiltered(i) || r(i);
    }
}
function fL(t, e, r) {
  process.env.NODE_ENV !== "production" && O(e != null);
  var n = bi(wi(t)).keyed, i = n && n.get(e);
  i && i.each(function(a) {
    process.env.NODE_ENV !== "production" && O(a.sers.length > 0), r(a.axis);
  });
}
function Vy(t, e) {
  process.env.NODE_ENV !== "production" && wn(t);
  var r = t.model, n = bi(wi(r.ecModel)).keys;
  n && w(n.get(r.uid), function(i) {
    if (process.env.NODE_ENV !== "production") {
      var a = jh(t, i);
      O(a && a.sers.length > 0);
    }
    e(i);
  });
}
function rD(t) {
  var e = JC(qC(t)), r = e.keyed || (e.keyed = W());
  Ry(t, function(n, i, a) {
    var o = r.get(i) || r.set(i, W()), s = o.get(a) || o.set(a, {});
    n.metrics.liPosMinGap && Fy.liPosMinGap(t, n, s);
  });
}
function hL(t, e) {
  Fy[t] = e;
}
var Fy = {};
function vd(t, e, r) {
  if (t) {
    var n = e.ecModel, i = bi(wi(n)), a = t.model.uid;
    if (process.env.NODE_ENV !== "production") {
      wn(t);
      var o = i.axSerPairCheck || (i.axSerPairCheck = W()), s = "" + a + Df + e.uid;
      O(!o.get(s)), o.set(s, 1);
    }
    var u = i.axSer || (i.axSer = W()), l = u.get(a) || u.set(a, []);
    if (process.env.NODE_ENV !== "production") {
      var f = l[l.length - 1];
      f && O(f.seriesIndex < e.seriesIndex);
    }
    l.push(e);
    var h = e.subType, c = e.getBaseAxis() === t, v = gs.get(Ef(h, c, r)) || gs.get(Ef(h, c, null));
    if (v) {
      var d = i.keyed || (i.keyed = W()), m = i.keys || (i.keys = W()), p = v.key, g = d.get(p) || d.set(p, W()), y = g.get(a);
      y || (y = g.set(a, {
        axis: t,
        sers: [],
        serByIdx: []
      }), y.metrics = v.getMetrics(t), (m.get(a) || m.set(a, [])).push(p)), y.sers.push(e), y.serByIdx[e.seriesIndex] = e;
    }
  }
}
function Ef(t, e, r) {
  return t + Df + G(e, !0) + Df + (r || "");
}
function cL(t, e) {
  var r = Ef(e.seriesType, e.baseAxis, e.coordSysType);
  process.env.NODE_ENV !== "production" && (O(e.seriesType && e.key && !Mf.get(e.key) && !gs.get(r)), Mf.set(e.key, 1)), gs.set(r, e), KC(t, function() {
    t.registerProcessor(t.PRIORITY.PROCESSOR.AXIS_STATISTICS, {
      // NOTE: Theoretically, `appendData` requires `dirtyOnOverallProgress: true` here to re-calculate them.
      // But this OVERALL_STAGE_TASK is applied to all series (no `getTargetSeries` specified),
      // `dirtyOnOverallProgress: true` can cause irrelevant series (e.g., series on geo)
      // to be re-rendered when `appendData` is called, which cause `appendData` meaningless,
      // thereby not setting `dirtyOnOverallProgress: true`.
      overallReset: rD
    });
  });
}
var Mf;
process.env.NODE_ENV !== "production" && (Mf = W());
var gs = W(), nD = 0.8;
function ou(t, e) {
  e = e || {};
  var r = {
    w: NaN,
    w2: NaN
  }, n = t.scale, i = e.fromStat, a = e.min, o = uC(n);
  $t(o) || (o = NaN);
  var s = t.getExtent(), u = Oe(s[1] - s[0]);
  return er(n) ? iD(r, t, o, u) : i ? aD(r, t, o, u, i) : a == null && process.env.NODE_ENV !== "production" && O(!1), a != null && (r.w = $t(r.w) ? ve(a, r.w) : a), r;
}
function iD(t, e, r, n) {
  var i = e.onBand, a = r + (i ? 1 : 0);
  a === 0 && (a = 1), t.w = n / a, !i && r && n && (t.w2 = t.w * r / n);
}
function aD(t, e, r, n, i) {
  process.env.NODE_ENV !== "production" && O(i);
  var a = !1, o = -1 / 0;
  w(i.key ? [jC(e, i.key)] : eD(e, i.sers || []), function(s) {
    var u = s.liPosMinGap;
    u != null && (u > 0 ? (u > o && (o = u), a = !1) : u === QC && (a = !0));
  }), $t(r) && r > 0 && $t(o) ? (t.w = n / r * o, t.w2 = o) : a && (t.w = n * nD, t.w2 = t.w * r / n);
}
var dd = [0, 1], oD = (
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
      return e = n.normalize(n.parse(e)), iv(e, dd, pd(this), r);
    }, t.prototype.coordToData = function(e, r) {
      var n = iv(e, pd(this), dd, r);
      return this.scale.scale(n);
    }, t.prototype.pointToData = function(e, r) {
    }, t.prototype.getTicksCoords = function(e) {
      e = e || {};
      var r = e.tickModel || this.getTickModel(), n = BC(this, r, {
        breakTicks: e.breakTicks,
        pruneByBreak: e.pruneByBreak
      }), i = X(n.ticks, function(s) {
        return {
          coord: this.dataToCoord(iu(this.scale, s)),
          tick: s
        };
      }, this), a = r.get("alignWithLabel"), o = sD(this, i, a);
      return X(i, function(s) {
        return {
          coord: s.coord,
          tickValue: s.tick.value,
          onBand: o
        };
      });
    }, t.prototype.getMinorTicksCoords = function() {
      if (er(this.scale))
        return [];
      var e = this.model.getModel("minorTick"), r = e.get("splitNumber");
      r > 0 && r < 100 || (r = 5);
      var n = this.scale.getMinorTicks(r), i = X(n, function(a) {
        return X(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, t.prototype.getViewLabels = function(e) {
      return e = e || ds(Mt.determine), kC(this, e).labels;
    }, t.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, t.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, t.prototype.getBandWidth = function() {
      return ou(this, {
        min: 1
      }).w;
    }, t.prototype.calculateCategoryInterval = function(e) {
      return e = e || ds(Mt.determine), WC(this, e);
    }, t;
  })()
);
function pd(t) {
  var e = t.getExtent();
  if (t.onBand) {
    var r = e[1] - e[0], n = r / t.scale.count() / 2;
    e[0] += n, e[1] -= n;
  }
  return e;
}
function sD(t, e, r) {
  var n = e.length;
  if (!t.onBand || r || !n)
    return !1;
  var i = ou(t).w;
  if (!i)
    return !1;
  w(e, function(s) {
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
var uD = (
  /** @class */
  (function(t) {
    F(e, t);
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
  })(oD)
), gd = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"], lD = 1, ms = 2, zy = lD | ms;
function ys(t, e, r) {
  r = r || zy, e ? t.dirty |= r : t.dirty &= ~r;
}
function Hy(t, e) {
  return e = e || zy, t.dirty == null || !!(t.dirty & e);
}
function qt(t) {
  if (t)
    return Hy(t) && fD(t, t.label, t), t;
}
function fD(t, e, r) {
  var n = e.getComputedTransform();
  t.transform = Ih(t.transform, n);
  var i = t.localRect = ma(t.localRect, e.getBoundingRect()), a = e.style, o = a.margin, s = r && r.marginForce, u = r && r.minMarginForce, l = r && r.marginDefault, f = a.__marginType;
  f == null && l && (o = l, f = $n.textMargin);
  for (var h = 0; h < 4; h++)
    tl[h] = f === $n.minMargin && u && u[h] != null ? u[h] : s && s[h] != null ? s[h] : o ? o[h] : 0;
  f === $n.textMargin && is(i, tl, !1, !1);
  var c = t.rect = ma(t.rect, i);
  return n && c.applyTransform(n), f === $n.minMargin && is(c, tl, !1, !1), t.axisAligned = Ah(n), (t.label = t.label || {}).ignore = e.ignore, ys(t, !1), ys(t, !0, ms), t;
}
var tl = [0, 0, 0, 0];
function hD(t, e, r) {
  return t.transform = Ih(t.transform, r), t.localRect = ma(t.localRect, e), t.rect = ma(t.rect, e), r && t.rect.applyTransform(r), t.axisAligned = Ah(r), t.obb = void 0, (t.label = t.label || {}).ignore = !1, t;
}
function cD(t, e) {
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
function md(t, e) {
  for (var r = 0; r < gd.length; r++) {
    var n = gd[r];
    t[n] == null && (t[n] = e[n]);
  }
  return qt(t);
}
function yd(t) {
  var e = t.obb;
  return (!e || Hy(t, ms)) && (t.obb = e = e || new hm(), e.fromBoundingRect(t.localRect, t.transform), ys(t, !1, ms)), e;
}
function vD(t) {
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
    var i = qt(t[n]);
    if (!i.label.ignore) {
      for (var a = i.label, o = i.labelLine, s = !1, u = 0; u < e.length; u++)
        if (ec(i, e[u], null, {
          touchThreshold: 0.05
        })) {
          s = !0;
          break;
        }
      s ? (r(a), o && r(o)) : e.push(i);
    }
  }
}
function ec(t, e, r, n) {
  return !t || !e || t.label && t.label.ignore || e.label && e.label.ignore || !t.rect.intersect(e.rect, r, n) ? !1 : t.axisAligned && e.axisAligned ? !0 : yd(t).intersect(yd(e), r, n);
}
var dD = null;
function su() {
  return dD;
}
var pD = "expandAxisBreak", xr = Math.PI, gD = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], mD = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], _n = pe(), Gy = pe(), Uy = (
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
function yD(t, e, r, n) {
  var i = r.axis, a = e.ensureRecord(r), o = [], s, u = tc(t.axisName) && gi(t.nameLocation);
  w(n, function(d) {
    var m = qt(d);
    if (!(!m || m.label.ignore)) {
      o.push(m);
      var p = a.transGroup;
      u && (p.transform ? Aa(Ri, p.transform) : Ma(Ri), m.transform && ea(Ri, Ri, m.transform), Z.copy(po, m.localRect), po.applyTransform(Ri), s ? s.union(po) : Z.copy(s = new Z(0, 0, 0, 0), po));
    }
  });
  var l = Math.abs(a.dirVec.x) > 0.1 ? "x" : "y", f = a.transGroup[l];
  if (o.sort(function(d, m) {
    return Math.abs(d.label[l] - f) - Math.abs(m.label[l] - f);
  }), u && s) {
    var h = i.getExtent(), c = Math.min(h[0], h[1]), v = Math.max(h[0], h[1]) - c;
    s.union(new Z(c, 0, v, 1));
  }
  a.stOccupiedRect = s, a.labelInfoList = o;
}
var Ri = Gt(), po = new Z(0, 0, 0, 0), Wy = function(t, e, r, n, i, a) {
  if (gi(t.nameLocation)) {
    var o = a.stOccupiedRect;
    o && Yy(hD({}, o, a.transGroup.transform), n, i);
  } else
    Xy(a.labelInfoList, a.dirVec, n, i);
};
function Yy(t, e, r) {
  var n = new de();
  ec(t, e, n, {
    direction: Math.atan2(r.y, r.x),
    bidirectional: !1,
    touchThreshold: 0.05
  }) && cD(e, n);
}
function Xy(t, e, r, n) {
  for (var i = de.dot(n, e) >= 0, a = 0, o = t.length; a < o; a++) {
    var s = t[i ? a : o - 1 - a];
    s.label.ignore || Yy(s, r, n);
  }
}
var Er = (
  /** @class */
  (function() {
    function t(e, r, n, i) {
      this.group = new ft(), this._axisModel = e, this._api = r, this._local = {}, this._shared = i || new Uy(Wy), this._resetCfgDetermined(n);
    }
    return t.prototype.updateCfg = function(e) {
      if (process.env.NODE_ENV !== "production") {
        var r = this._shared.ensureRecord(this._axisModel).ready;
        O(!r.axisLine && !r.axisTickLabelDetermine), r.axisName = r.axisTickLabelEstimate = !1;
      }
      var n = this._cfg.raw;
      n.position = e.position, n.labelOffset = e.labelOffset, this._resetCfgDetermined(n);
    }, t.prototype.__getRawCfg = function() {
      return this._cfg.raw;
    }, t.prototype._resetCfgDetermined = function(e) {
      var r = this._axisModel, n = r.getDefaultOption ? r.getDefaultOption() : {}, i = G(e.axisName, r.get("name")), a = r.get("nameMoveOverlap");
      (a == null || a === "auto") && (a = G(e.defaultNameMoveOverlap, !0));
      var o = {
        raw: e,
        position: e.position,
        rotation: e.rotation,
        nameDirection: G(e.nameDirection, 1),
        tickDirection: G(e.tickDirection, 1),
        labelDirection: G(e.labelDirection, 1),
        labelOffset: G(e.labelOffset, 0),
        silent: G(e.silent, !0),
        axisName: i,
        nameLocation: wr(r.get("nameLocation"), n.nameLocation, "end"),
        shouldNameMoveOverlap: tc(i) && a,
        optionHideOverlap: r.get(["axisLabel", "hideOverlap"]),
        showMinorTicks: r.get(["minorTick", "show"])
      };
      process.env.NODE_ENV !== "production" && (O(o.position != null), O(o.rotation != null)), this._cfg = o;
      var s = new ft({
        x: o.position[0],
        y: o.position[1],
        rotation: o.rotation
      });
      s.updateTransform(), this._transformGroup = s;
      var u = this._shared.ensureRecord(r);
      u.transGroup = this._transformGroup, u.dirVec = new de(Math.cos(-o.rotation), Math.sin(-o.rotation));
    }, t.prototype.build = function(e, r) {
      var n = this;
      return e || (e = {
        axisLine: !0,
        axisTickLabelEstimate: !1,
        axisTickLabelDetermine: !0,
        axisName: !0
      }), w(_D, function(i) {
        e[i] && SD[i](n._cfg, n._local, n._shared, n._axisModel, n.group, n._transformGroup, n._api, r || {});
      }), this;
    }, t.innerTextLayout = function(e, r, n) {
      var i = Rg(r - e), a, o;
      return jo(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : jo(i - xr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < xr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
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
), _D = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], SD = {
  axisLine: function(t, e, r, n, i, a, o) {
    if (process.env.NODE_ENV !== "production") {
      var s = r.ensureRecord(n).ready;
      O(!s.axisLine), s.axisLine = !0;
    }
    var u = n.get(["axisLine", "show"]);
    if (u === "auto" && (u = !0, t.raw.axisLineAutoShow != null && (u = !!t.raw.axisLineAutoShow)), !!u) {
      var l = n.axis.getExtent(), f = a.transform, h = [l[0], 0], c = [l[1], 0], v = h[0] > c[0];
      f && (Ct(h, h, f), Ct(c, c, f));
      var d = R({
        lineCap: "round"
      }, n.getModel(["axisLine", "lineStyle"]).getLineStyle()), m = {
        strokeContainThreshold: t.raw.strokeContainThreshold || 5,
        silent: !0,
        z2: 1,
        style: d
      };
      if (n.get(["axisLine", "breakLine"]) && gn(n.axis.scale))
        su().buildAxisBreakLine(n, i, a, m);
      else {
        var p = new Ir(R({
          shape: {
            x1: h[0],
            y1: h[1],
            x2: c[0],
            y2: c[1]
          }
        }, m));
        ga(p.shape, p.style.lineWidth), p.anid = "line", i.add(p);
      }
      var g = n.get(["axisLine", "symbol"]);
      if (g != null) {
        var y = n.get(["axisLine", "symbolSize"]);
        V(g) && (g = [g, g]), (V(y) || we(y)) && (y = [y, y]);
        var _ = qb(n.get(["axisLine", "symbolOffset"]) || 0, y), S = y[0], T = y[1];
        w([{
          rotate: t.rotation + Math.PI / 2,
          offset: _[0],
          r: 0
        }, {
          rotate: t.rotation - Math.PI / 2,
          offset: _[1],
          r: Math.sqrt((h[0] - c[0]) * (h[0] - c[0]) + (h[1] - c[1]) * (h[1] - c[1]))
        }], function(x, b) {
          if (g[b] !== "none" && g[b] != null) {
            var C = Zh(g[b], -S / 2, -T / 2, S, T, d.stroke, !0), E = x.r + x.offset, D = v ? c : h;
            C.attr({
              rotation: x.rotate,
              x: D[0] + E * Math.cos(t.rotation),
              y: D[1] - E * Math.sin(t.rotation),
              silent: !0,
              z2: 11
            }), i.add(C);
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
      O(!u.axisTickLabelDetermine), u.axisTickLabelEstimate = !0;
    }
    var l = Sd(e, i, s);
    l && _d(t, e, r, n, i, a, o, Mt.estimate);
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
    var l = Sd(e, i, s);
    l && _d(t, e, r, n, i, a, o, Mt.determine);
    var f = bD(t, i, a, n);
    wD(t, e.labelLayoutList, f), CD(t, i, a, n, t.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function(t, e, r, n, i, a, o, s) {
    var u = r.ensureRecord(n);
    if (process.env.NODE_ENV !== "production") {
      var l = u.ready;
      O(l.axisTickLabelEstimate || l.axisTickLabelDetermine), l.axisName = !0;
    }
    e.nameEl && (i.remove(e.nameEl), e.nameEl = u.nameLayout = u.nameLocation = null);
    var f = t.axisName;
    if (tc(f)) {
      var h = t.nameLocation, c = t.nameDirection, v = n.getModel("nameTextStyle"), d = n.get("nameGap") || 0, m = n.axis.getExtent(), p = n.axis.inverse ? -1 : 1, g = new de(0, 0), y = new de(0, 0);
      h === "start" ? (g.x = m[0] - p * d, y.x = -p) : h === "end" ? (g.x = m[1] + p * d, y.x = p) : (g.x = (m[0] + m[1]) / 2, g.y = t.labelOffset + c * d, y.y = c);
      var _ = Gt();
      y.transform(ih(_, _, t.rotation));
      var S = n.get("nameRotate");
      S != null && (S = S * xr / 180);
      var T, x;
      gi(h) ? T = Er.innerTextLayout(
        t.rotation,
        S ?? t.rotation,
        // Adapt to axis.
        c
      ) : (T = TD(t.rotation, h, S || 0, m), x = t.raw.axisNameAvailableWidth, x != null && (x = Math.abs(x / Math.sin(T.rotation)), !isFinite(x) && (x = null)));
      var b = v.getFont(), C = n.get("nameTruncate", !0) || {}, E = C.ellipsis, D = ii(t.raw.nameTruncateMaxWidth, C.maxWidth, x), M = s.nameMarginLevel || 0, I = new ut({
        x: g.x,
        y: g.y,
        rotation: T.rotation,
        silent: Er.isLabelSilent(n),
        style: vi(v, {
          text: f,
          font: b,
          overflow: "truncate",
          width: D,
          ellipsis: E,
          fill: v.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
          align: v.get("align") || T.textAlign,
          verticalAlign: v.get("verticalAlign") || T.textVerticalAlign
        }),
        z2: 1
      });
      if (Ks({
        el: I,
        componentModel: n,
        itemName: f
      }), I.__fullText = f, I.anid = "name", n.get("triggerEvent")) {
        var A = Er.makeAxisEventDataBase(n);
        A.targetType = "axisName", A.name = f, Te(I).eventData = A;
      }
      a.add(I), I.updateTransform(), e.nameEl = I;
      var L = u.nameLayout = qt({
        label: I,
        priority: I.z2,
        defaultAttr: {
          ignore: I.ignore
        },
        marginDefault: gi(h) ? gD[M] : mD[M]
      });
      if (u.nameLocation = h, i.add(I), I.decomposeTransform(), t.shouldNameMoveOverlap && L) {
        var k = r.ensureRecord(n);
        process.env.NODE_ENV !== "production" && O(k.labelInfoList), r.resolveAxisNameOverlap(t, r, n, L, y, k);
      }
    }
  }
};
function _d(t, e, r, n, i, a, o, s) {
  $y(e) || DD(t, e, i, s, n, o);
  var u = e.labelLayoutList;
  ED(t, n, u, a), ID(n, t.rotation, u);
  var l = t.optionHideOverlap;
  xD(n, u, l), l && vD(
    // Filter the already ignored labels by the previous overlap resolving methods.
    Be(u, function(f) {
      return f && !f.label.ignore;
    })
  ), yD(t, r, n, u);
}
function TD(t, e, r, n) {
  var i = Rg(r - t), a, o, s = n[0] > n[1], u = e === "start" && !s || e !== "start" && s;
  return jo(i - xr / 2) ? (o = u ? "bottom" : "top", a = "center") : jo(i - xr * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", i < xr * 1.5 && i > xr / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function xD(t, e, r) {
  var n = t.axis, i = t.get(["axisLabel", "customValues"]);
  if (IC(n))
    return;
  function a(l, f, h) {
    var c = qt(e[f]), v = qt(e[h]), d = n.scale;
    if (!(!c || !v)) {
      if (l == null) {
        if (!r && i)
          return;
        var m = _n(c.label).labelInfo.tick;
        if (
          // TimeScale does not expand extent to "nice", so eliminate labels that are not nice.
          qh(d) && m.notNice || er(d) && m.offInterval
        ) {
          Un(c.label);
          return;
        }
      }
      if (l === !1 || c.suggestIgnore) {
        Un(c.label);
        return;
      }
      if (v.suggestIgnore) {
        Un(v.label);
        return;
      }
      var p = 0.1;
      if (!r) {
        var g = [0, 0, 0, 0];
        c = md({
          marginForce: g
        }, c), v = md({
          marginForce: g
        }, v);
      }
      ec(c, v, null, {
        touchThreshold: p
      }) && Un(l ? v.label : c.label);
    }
  }
  var o = t.get(["axisLabel", "showMinLabel"]), s = t.get(["axisLabel", "showMaxLabel"]), u = e.length;
  a(o, 0, 1), a(s, u - 1, u - 2);
}
function wD(t, e, r) {
  t.showMinorTicks || w(e, function(n) {
    if (n && n.label.ignore)
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = Gy(a), s = _n(n.label);
        if (o.tickValue != null && !o.onBand && o.tickValue === s.labelInfo.tick.value) {
          Un(a);
          return;
        }
      }
  });
}
function Un(t) {
  t && (t.ignore = !0);
}
function Zy(t, e, r, n, i) {
  for (var a = [], o = [], s = [], u = 0; u < t.length; u++) {
    var l = t[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = r, e && (Ct(o, o, e), Ct(s, s, e));
    var f = new Ir({
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
    ga(f.shape, f.style.lineWidth), f.anid = i + "_" + t[u].tickValue, a.push(f);
    var h = Gy(f);
    h.onBand = !!t[u].onBand, h.tickValue = t[u].tickValue;
  }
  return a;
}
function bD(t, e, r, n) {
  var i = n.axis, a = n.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && (o = !0, t.raw.axisTickAutoShow != null && (o = !!t.raw.axisTickAutoShow)), !o || i.scale.isBlank())
    return [];
  for (var s = a.getModel("lineStyle"), u = t.tickDirection * a.get("length"), l = i.getTicksCoords(), f = Zy(l, r.transform, u, ye(s.getLineStyle(), {
    stroke: n.get(["axisLine", "lineStyle", "color"])
  }), "ticks"), h = 0; h < f.length; h++)
    e.add(f[h]);
  return f;
}
function CD(t, e, r, n, i) {
  var a = n.axis, o = n.getModel("minorTick");
  if (!(!t.showMinorTicks || a.scale.isBlank())) {
    var s = a.getMinorTicksCoords();
    if (s.length)
      for (var u = o.getModel("lineStyle"), l = i * o.get("length"), f = ye(u.getLineStyle(), ye(n.getModel("axisTick").getLineStyle(), {
        stroke: n.get(["axisLine", "lineStyle", "color"])
      })), h = 0; h < s.length; h++)
        for (var c = Zy(s[h], r.transform, l, f, "minorticks_" + h), v = 0; v < c.length; v++)
          e.add(c[v]);
  }
}
function Sd(t, e, r) {
  if ($y(t)) {
    var n = t.axisLabelsCreationContext;
    process.env.NODE_ENV !== "production" && O(t.labelGroup && n);
    var i = n.out.noPxChangeTryDetermine;
    if (r.noPxChange) {
      for (var a = !0, o = 0; o < i.length; o++)
        a = a && i[o]();
      if (a)
        return !1;
    }
    i.length && (e.remove(t.labelGroup), Af(t, null, null, null));
  }
  return !0;
}
function DD(t, e, r, n, i, a) {
  var o = i.axis, s = ii(t.raw.axisLabelShow, i.get(["axisLabel", "show"])), u = new ft();
  r.add(u);
  var l = ds(n);
  if (!s || o.scale.isBlank()) {
    Af(e, [], u, l);
    return;
  }
  var f = i.getModel("axisLabel"), h = o.getViewLabels(l), c = (ii(t.raw.labelRotate, f.get("rotate")) || 0) * xr / 180, v = Er.innerTextLayout(t.rotation, c, t.labelDirection), d = i.getCategories && i.getCategories(!0), m = [], p = i.get("triggerEvent"), g = 1 / 0, y = -1 / 0;
  w(h, function(S, T) {
    var x, b = S.tick, C = S.formattedLabel, E = S.rawLabel, D = f, M = iu(o.scale, b);
    if (d && d[M]) {
      var I = d[M];
      H(I) && I.textStyle && (D = new xe(I.textStyle, f, i.ecModel));
    }
    var A = D.getTextColor() || i.get(["axisLine", "lineStyle", "color"]), L = D.getShallow("align", !0) || v.textAlign, k = G(D.getShallow("alignMinLabel", !0), L), N = G(D.getShallow("alignMaxLabel", !0), L), z = D.getShallow("verticalAlign", !0) || D.getShallow("baseline", !0) || v.textVerticalAlign, Q = G(D.getShallow("verticalAlignMinLabel", !0), z), ee = G(D.getShallow("verticalAlignMaxLabel", !0), z), te = 10 + (((x = b.time) === null || x === void 0 ? void 0 : x.level) || 0);
    g = Math.min(g, te), y = Math.max(y, te);
    var J = new ut({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: Er.isLabelSilent(i),
      z2: te,
      style: vi(D, {
        text: C,
        align: T === 0 ? k : T === h.length - 1 ? N : L,
        verticalAlign: T === 0 ? Q : T === h.length - 1 ? ee : z,
        fill: $(A) ? A(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          o.type === "category" ? E : o.type === "value" ? M + "" : M,
          T
        ) : A
      })
    });
    J.anid = "label_" + M;
    var re = _n(J);
    if (re.labelInfo = S, re.layoutRotation = v.rotation, Ks({
      el: J,
      componentModel: i,
      itemName: C,
      formatterParamsExtra: {
        isTruncated: function() {
          return J.isTruncated;
        },
        value: E,
        tickIndex: T
      }
    }), p) {
      var j = Er.makeAxisEventDataBase(i);
      j.targetType = "axisLabel", j.value = E, j.tickIndex = T;
      var U = S.tick.break;
      if (U) {
        var se = U.parsedBreak;
        j.break = {
          // type: labelItem.break.type,
          start: se.vmin,
          end: se.vmax
        };
      }
      o.type === "category" && (j.dataIndex = M), Te(J).eventData = j, U && AD(i, a, J, U);
    }
    m.push(J), u.add(J);
  });
  var _ = X(m, function(S) {
    return {
      label: S,
      priority: _n(S).labelInfo.tick.break ? S.z2 + (y - g + 1) : S.z2,
      defaultAttr: {
        ignore: S.ignore
      }
    };
  });
  Af(e, _, u, l);
}
function $y(t) {
  return !!t.labelLayoutList;
}
function Af(t, e, r, n) {
  t.labelLayoutList = e, t.labelGroup = r, t.axisLabelsCreationContext = n;
}
function ED(t, e, r, n) {
  var i = e.get(["axisLabel", "margin"]);
  w(r, function(a, o) {
    var s = qt(a);
    if (s) {
      var u = s.label, l = _n(u);
      s.suggestIgnore = u.ignore, u.ignore = !1, Xo(nr, MD);
      var f = e.axis;
      nr.x = f.dataToCoord(iu(f.scale, l.labelInfo.tick)), nr.y = t.labelOffset + t.labelDirection * i, nr.rotation = l.layoutRotation, n.add(nr), nr.updateTransform(), n.remove(nr), nr.decomposeTransform(), Xo(u, nr), u.markRedraw(), ys(s, !0), qt(s);
    }
  });
}
var nr = new Me(), MD = new Me();
function tc(t) {
  return !!t;
}
function AD(t, e, r, n) {
  r.on("click", function(i) {
    var a = {
      type: pD,
      breaks: [{
        start: n.parsedBreak.breakOption.start,
        end: n.parsedBreak.breakOption.end
      }]
    };
    a[t.axis.dim + "AxisIndex"] = t.componentIndex, e.dispatchAction(a);
  });
}
function ID(t, e, r) {
  var n = We();
  if (n) {
    var i = n.retrieveAxisBreakPairs(r, function(o) {
      return o && _n(o.label).labelInfo.tick.break;
    }, !0), a = t.get(["breakLabelLayout", "moveOverlap"], !0);
    (a === !0 || a === "auto") && w(i, function(o) {
      su().adjustBreakLabelPair(t.axis.inverse, e, [qt(r[o[0]]), qt(r[o[1]])]);
    });
  }
}
function _s(t, e, r) {
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
  i.labelDirection = i.tickDirection = i.nameDirection = d[o], i.labelOffset = a ? c[f[o]] - c[f.onZero] : 0, e.get(["axisTick", "inside"]) && (i.tickDirection = -i.tickDirection), ii(r.labelInside, e.get(["axisLabel", "inside"])) && (i.labelDirection = -i.labelDirection);
  var m = e.get(["axisLabel", "rotate"]);
  return i.labelRotate = s === "top" ? -m : m, i.z2 = 1, i;
}
function vL(t) {
  return t.coordinateSystem && t.coordinateSystem.type === "cartesian2d";
}
function LD(t) {
  var e = {
    xAxisModel: null,
    yAxisModel: null
  };
  return w(e, function(r, n) {
    var i = n.replace(/Model$/, ""), a = t.getReferringComponents(i, xt).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(i + ' "' + wr(t.get(i + "Index"), t.get(i + "Id"), 0) + '" not found');
    e[n] = a;
  }), e;
}
function OD(t, e, r, n, i, a) {
  for (var o = _s(t, r), s = !1, u = !1, l = 0; l < e.length; l++)
    _y(e[l].getOtherAxis(r.axis).scale) && (s = u = !0, r.axis.type === "category" && r.axis.onBand && (u = !1));
  return o.axisLineAutoShow = s, o.axisTickAutoShow = u, o.defaultNameMoveOverlap = a, new Er(r, n, o, i);
}
function ND(t, e, r) {
  var n = _s(e, r);
  if (process.env.NODE_ENV !== "production") {
    var i = t.__getRawCfg();
    w(me(n), function(a) {
      a !== "position" && a !== "labelOffset" && O(n[a] === i[a]);
    });
  }
  t.updateCfg(n);
}
var PD = pe(), RD = 1, kD = 2, BD = 3, qy = (
  /** @class */
  (function() {
    function t(e, r, n, i, a) {
      var o = er(e), s = o ? r.getCategories().length : null, u;
      if (o) {
        var l = r.getCategories(!0);
        u = l && !l.length;
      }
      var f = n.slice();
      (hs(e) || pi(e) || qh(e)) && (Wg(f, ki(e, r.get("dataMin", !0))), Yg(f, ki(e, r.get("dataMax", !0)))), WS(f) || (f[0] = f[1] = NaN);
      var h = [], c = [!1, !1], v = r.get("min", !0);
      v === "dataMin" ? (h[0] = f[0], c[0] = !0) : (h[0] = ki(e, $(v) ? v({
        min: f[0],
        max: f[1]
      }) : v), c[0] = h[0] != null);
      var d = r.get("max", !0);
      d === "dataMax" ? (h[1] = f[1], c[1] = !0) : (h[1] = ki(e, $(d) ? d({
        min: f[0],
        max: f[1]
      }) : d), c[1] = h[1] != null);
      var m = VD(e, r), p = o ? null : f[1] - f[0] || Math.abs(f[0]);
      h[0] == null && (h[0] = o ? u ? f[0] : s ? 0 : NaN : f[0] - m[0] * p), h[1] == null && (h[1] = o ? u ? f[1] : s ? s - 1 : NaN : f[1] + m[1] * p), !cr(h[0]) && (h[0] = NaN), !cr(h[1]) && (h[1] = NaN);
      var g = u || ni(h[0]) || ni(h[1]) || o && !s, y = hs(e), _ = y && r.needIncludeZero && r.needIncludeZero();
      _ && (h[0] > 0 && h[1] > 0 && !c[0] && (h[0] = 0), h[0] < 0 && h[1] < 0 && !c[1] && (h[1] = 0));
      var S = !1;
      h[0] > h[1] && (h.reverse(), S = !0);
      var T = ki(e, r.get("startValue", !0)), x = T != null;
      !$t(T) && i && (T = e.getDefaultStartValue ? e.getDefaultStartValue() : 0), $t(T) && (x || !y || _) && (T < h[0] && !c[0] ? (h[0] = T, c[0] = !0) : T > h[1] && !c[1] && (h[1] = T, c[1] = !0));
      var b = this._i = {
        scale: e,
        dataMM: f,
        noZoomEffMM: h,
        zoomMM: [],
        fixMM: c,
        zoomFixMM: [!1, !1],
        startValue: T,
        isBlank: g,
        incl0: _,
        tggAxInv: S,
        ctnShp: a
      };
      Td(b, h);
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
      return r[0] != null && (s[0] = r[0], a[0] = i[0] = !0), r[1] != null && (s[1] = r[1], a[1] = i[1] = !0), Td(e, s), o;
    }, t.prototype.makeRenderInfo = function() {
      return {
        startValue: this._i.startValue
      };
    }, t.prototype.setZoomMM = function(e, r) {
      this._i.zoomMM[e] = r;
    }, t;
  })()
);
function Td(t, e) {
  var r = t.scale, n = t.dataMM;
  r.sanitize && (e[0] = r.sanitize(e[0], n), e[1] = r.sanitize(e[1], n), YS(e));
}
function ki(t, e) {
  return e == null ? null : ni(e) ? NaN : t.parse(e);
}
function VD(t, e) {
  var r;
  if (er(t))
    r = [0, 0];
  else {
    var n = e.get("boundaryGap");
    typeof n == "boolean" && (process.env.NODE_ENV !== "production" && n === !0 && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to 0.'), n = null), r = B(n) ? n : [n, n];
  }
  return [xd(r[0]), xd(r[1])];
}
function xd(t) {
  return si(typeof t == "boolean" ? 0 : t, 1) || 0;
}
function Ky(t) {
  var e = PD(t.scale);
  return e.extent || (e.extent = Vt()), e;
}
function FD(t, e) {
  Ky(t).dimIdxInCoord = e.get(t.dim);
}
function zD(t, e) {
  var r = t.scale, n = t.model, i = t.dim;
  if (process.env.NODE_ENV !== "production" && O(r && n && i), r.rawExtentInfo) {
    process.env.NODE_ENV !== "production" && O(r.rawExtentInfo.from !== e || e === kD);
    return;
  }
  HD(r, t, i, n, e);
}
function HD(t, e, r, n, i) {
  var a = Ky(e), o = a.extent, s = !1;
  tD(e, function(f) {
    if (f.boxCoordinateSystem) {
      var h = Ym(f).coord, c = a.dimIdxInCoord;
      if (!(c >= 0))
        process.env.NODE_ENV !== "production" && oe('Property "series.coord" is not supported on axis ' + f.boxCoordinateSystem.type + ".");
      else if (B(h)) {
        var v = h[c];
        v != null && !B(v) && GS(o, t.parse(v));
      }
    } else if (f.coordinateSystem) {
      var d = f.getData();
      if (d) {
        var m = t.getFilter ? t.getFilter() : null;
        w(LC(d, r), function(p) {
          US(o, d.getApproximateExtent(p, m));
        });
      }
      f.__requireStartValue && f.__requireStartValue(e) && (s = !0);
    }
  });
  var u = UD(t, e, n), l = new qy(t, n, o, s, u);
  Qy(t, l, i), a.extent = null;
}
function GD(t, e) {
  var r = t.scale;
  process.env.NODE_ENV !== "production" && O(!r.rawExtentInfo), Qy(r, new qy(r, t.model, e, !1, !1), BD);
}
function Qy(t, e, r) {
  t.rawExtentInfo = e, e.from = r;
}
function dL(t, e) {
  process.env.NODE_ENV !== "production" && O(!Ss.get(t)), Ss.set(t, e);
}
var Ss = W();
function Jy(t, e, r, n, i) {
  process.env.NODE_ENV !== "production" && O(!0), t.rawExtentInfo || GD({
    scale: t,
    model: e
  }, Vt());
  var a = t.rawExtentInfo.makeFinal(), o = a.effMM;
  return t.setExtent(o[0], o[1]), t.setBlank(a.isBlank), n && a.tggAxInv && r && !r.get("legacyMinMaxDontInverseAxis") && (n.inverse = !n.inverse), a;
}
function UD(t, e, r) {
  var n = Ay(t, r), i = r.get("containShape", !0);
  if (i == null && !n && (i = !0), !i)
    return !1;
  var a = !1;
  return Vy(e, function(o) {
    a = !!Ss.get(o) || a;
  }), a;
}
function WD(t, e, r, n) {
  if (r.ctnShp) {
    var i;
    if (Vy(t, function(s) {
      var u = Ss.get(s);
      if (u) {
        var l = u(t, n);
        l && (i = i || [0, 0], Wg(i, l[0]), Yg(i, l[1]), MC(t));
      }
    }), !!i) {
      var a = e.getExtent();
      if (er(e))
        t.onBand || e.setExtent2(xa, lt(a[0], a[0] + i[0]), ve(a[1], a[1] + i[1]));
      else {
        var o = a.slice();
        r.zoomFixMM[0] || (o[0] = lt(o[0], e.transformOut(e.transformIn(o[0], null) + i[0], null))), r.zoomFixMM[1] || (o[1] = ve(o[1], e.transformOut(e.transformIn(o[1], null) + i[1], null))), (o[0] < a[0] || o[1] > a[1]) && e.setExtent2(xa, o[0], o[1]);
      }
    }
  }
}
var jy = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, Ts = ["25%", "25%"], zo = "cartesian2d", YD = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Ba(r.outerBounds);
      t.prototype.mergeDefaultAndTheme.apply(this, arguments), i && r.outerBounds && Lr(r.outerBounds, i);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && r.outerBounds && Lr(this.option.outerBounds, r.outerBounds);
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
      outerBounds: jy,
      outerBoundsContain: "all",
      outerBoundsClampWidth: Ts[0],
      outerBoundsClampHeight: Ts[1],
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: Y.color.transparent,
      borderWidth: 1,
      borderColor: Y.color.neutral30
    }, e;
  })(le)
), xs = "\0__throttleOriginMethod", wd = "\0__throttleRate", bd = "\0__throttleType";
function e_(t, e, r) {
  var n, i = 0, a = 0, o = null, s, u, l, f;
  e = e || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, t.apply(u, l || []);
  }
  var c = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), u = this, l = v;
    var m = f || e, p = f || r;
    f = null, s = n - (p ? i : a) - m, clearTimeout(o), p ? o = setTimeout(h, m) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
  };
  return c.clear = function() {
    o && (clearTimeout(o), o = null);
  }, c.debounceNextCall = function(v) {
    f = v;
  }, c;
}
function t_(t, e, r, n) {
  var i = t[e];
  if (i) {
    var a = i[xs] || i, o = i[bd], s = i[wd];
    if (s !== r || o !== n) {
      if (r == null || !n)
        return t[e] = a;
      i = t[e] = e_(a, r, n === "debounce"), i[xs] = a, i[bd] = n, i[wd] = r;
    }
    return i;
  }
}
function If(t, e) {
  var r = t[e];
  r && r[xs] && (r.clear && r.clear(), t[e] = r[xs]);
}
function Rn(t, e, r, n, i) {
  var a = t + e;
  r.isSilent(a) || (process.env.NODE_ENV !== "production" && hr("event " + a + " is deprecated."), n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = Ra(h, i.fromActionPayload);
        r.trigger(a, {
          type: a,
          seriesId: o.id,
          name: B(c) ? h.getName(c[0]) : h.getName(c),
          selected: V(u) ? u : R({}, u)
        });
      }
  }));
}
function XD(t, e, r) {
  t.on("selectchanged", function(n) {
    var i = r.getModel();
    n.isFromClick ? (Rn("map", "selectchanged", e, i, n), Rn("pie", "selectchanged", e, i, n)) : n.fromAction === "select" ? (Rn("map", "selected", e, i, n), Rn("pie", "selected", e, i, n)) : n.fromAction === "unselect" && (Rn("map", "unselected", e, i, n), Rn("pie", "unselected", e, i, n));
  });
}
var kn = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.target = e, this.topTarget = r && r.topTarget;
  }
  return t;
})(), ZD = (function() {
  function t(e) {
    this.handler = e, e.on("mousedown", this._dragStart, this), e.on("mousemove", this._drag, this), e.on("mouseup", this._dragEnd, this);
  }
  return t.prototype._dragStart = function(e) {
    for (var r = e.target; r && !r.draggable; )
      r = r.parent || r.__hostTarget;
    r && (this._draggingTarget = r, r.dragging = !0, this._x = e.offsetX, this._y = e.offsetY, this.handler.dispatchToElement(new kn(r, e), "dragstart", e.event));
  }, t.prototype._drag = function(e) {
    var r = this._draggingTarget;
    if (r) {
      var n = e.offsetX, i = e.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, r.drift(a, o, e), this.handler.dispatchToElement(new kn(r, e), "drag", e.event);
      var s = this.handler.findHover(n, i, r).target, u = this._dropTarget;
      this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new kn(u, e), "dragleave", e.event), s && s !== u && this.handler.dispatchToElement(new kn(s, e), "dragenter", e.event));
    }
  }, t.prototype._dragEnd = function(e) {
    var r = this._draggingTarget;
    r && (r.dragging = !1), this.handler.dispatchToElement(new kn(r, e), "dragend", e.event), this._dropTarget && this.handler.dispatchToElement(new kn(this._dropTarget, e), "drop", e.event), this._draggingTarget = null, this._dropTarget = null;
  }, t;
})(), $D = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rl = [], qD = q.browser.firefox && +q.browser.version.split(".")[0] < 39;
function Lf(t, e, r, n) {
  return r = r || {}, n ? Cd(t, e, r) : qD && e.layerX != null && e.layerX !== e.offsetX ? (r.zrX = e.layerX, r.zrY = e.layerY) : e.offsetX != null ? (r.zrX = e.offsetX, r.zrY = e.offsetY) : Cd(t, e, r), r;
}
function Cd(t, e, r) {
  if (q.domSupported && t.getBoundingClientRect) {
    var n = e.clientX, i = e.clientY;
    if (Xm(t)) {
      var a = t.getBoundingClientRect();
      r.zrX = n - a.left, r.zrY = i - a.top;
      return;
    } else if (gf(rl, t, n, i)) {
      r.zrX = rl[0], r.zrY = rl[1];
      return;
    }
  }
  r.zrX = r.zrY = 0;
}
function rc(t) {
  return t || window.event;
}
function gt(t, e, r) {
  if (e = rc(e), e.zrX != null)
    return e;
  var n = e.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? e.targetTouches[0] : e.changedTouches[0];
    o && Lf(t, o, e, r);
  } else {
    Lf(t, e, e, r);
    var a = KD(e);
    e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3;
  }
  var s = e.button;
  return e.which == null && s !== void 0 && $D.test(e.type) && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e;
}
function KD(t) {
  var e = t.wheelDelta;
  if (e)
    return e;
  var r = t.deltaX, n = t.deltaY;
  if (r == null || n == null)
    return e;
  var i = Math.abs(n !== 0 ? n : r), a = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
  return 3 * i * a;
}
function QD(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function JD(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
var r_ = function(t) {
  t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
}, jD = (function() {
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
        var u = i[o], l = Lf(n, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, t.prototype._recognize = function(e) {
    for (var r in nl)
      if (nl.hasOwnProperty(r)) {
        var n = nl[r](this._track, e);
        if (n)
          return n;
      }
  }, t;
})();
function Dd(t) {
  var e = t[1][0] - t[0][0], r = t[1][1] - t[0][1];
  return Math.sqrt(e * e + r * r);
}
function eE(t) {
  return [
    (t[0][0] + t[1][0]) / 2,
    (t[0][1] + t[1][1]) / 2
  ];
}
var nl = {
  pinch: function(t, e) {
    var r = t.length;
    if (r) {
      var n = (t[r - 1] || {}).points, i = (t[r - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = Dd(n) / Dd(i);
        !isFinite(a) && (a = 1), e.pinchScale = a;
        var o = eE(n);
        return e.pinchX = o[0], e.pinchY = o[1], {
          type: "pinch",
          target: t[0].target,
          event: e
        };
      }
    }
  }
}, n_ = "silent";
function tE(t, e, r) {
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
    stop: rE
  };
}
function rE() {
  r_(this.event);
}
var nE = (function(t) {
  F(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handler = null, r;
  }
  return e.prototype.dispose = function() {
  }, e.prototype.setCursor = function() {
  }, e;
})(Jt), Bi = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.x = e, this.y = r;
  }
  return t;
})(), iE = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], il = new Z(0, 0, 0, 0), i_ = (function(t) {
  F(e, t);
  function e(r, n, i, a, o) {
    var s = t.call(this) || this;
    return s._hovered = new Bi(0, 0), s.storage = r, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new nE(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new ZD(s), s;
  }
  return e.prototype.setHandlerProxy = function(r) {
    this.proxy && this.proxy.dispose(), r && (w(iE, function(n) {
      r.on && r.on(n, this[n], this);
    }, this), r.handler = this), this.proxy = r;
  }, e.prototype.mousemove = function(r) {
    var n = r.zrX, i = r.zrY, a = a_(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new Bi(n, i) : this.findHover(n, i), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r);
  }, e.prototype.mouseout = function(r) {
    var n = r.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: r });
  }, e.prototype.resize = function() {
    this._hovered = new Bi(0, 0);
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
      for (var o = "on" + n, s = tE(n, r, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s);
      }));
    }
  }, e.prototype.findHover = function(r, n, i) {
    var a = this.storage.getDisplayList(), o = new Bi(r, n);
    if (Ed(a, o, r, n, i), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new Z(r - l, n - l, u, u), h = a.length - 1; h >= 0; h--) {
        var c = a[h];
        c !== i && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (il.copy(c.getBoundingRect()), c.transform && il.applyTransform(c.transform), il.intersect(f) && s.push(c));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, m = Math.PI * 2, p = 0; p < l; p += v)
          for (var g = 0; g < m; g += d) {
            var y = r + p * Math.cos(g), _ = n + p * Math.sin(g);
            if (Ed(s, o, y, _, i), o.target)
              return o;
          }
    }
    return o;
  }, e.prototype.processGesture = function(r, n) {
    this._gestureMgr || (this._gestureMgr = new jD());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      r.gestureEvent = o;
      var s = new Bi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, e;
})(Jt);
w(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
  i_.prototype[t] = function(e) {
    var r = e.zrX, n = e.zrY, i = a_(this, r, n), a, o;
    if ((t !== "mouseup" || !i) && (a = this.findHover(r, n), o = a.target), t === "mousedown")
      this._downEl = o, this._downPoint = [e.zrX, e.zrY], this._upEl = o;
    else if (t === "mouseup")
      this._upEl = o;
    else if (t === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || j0(this._downPoint, [e.zrX, e.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, t, e);
  };
});
function aE(t, e, r) {
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
    return i ? n_ : !0;
  }
  return !1;
}
function Ed(t, e, r, n, i) {
  for (var a = t.length - 1; a >= 0; a--) {
    var o = t[a], s = void 0;
    if (o !== i && !o.ignore && (s = aE(o, r, n)) && (!e.topTarget && (e.topTarget = o), s !== n_)) {
      e.target = o;
      break;
    }
  }
}
function a_(t, e, r) {
  var n = t.painter;
  return e < 0 || e > n.getWidth() || r < 0 || r > n.getHeight();
}
var o_ = 32, Vi = 7;
function oE(t) {
  for (var e = 0; t >= o_; )
    e |= t & 1, t >>= 1;
  return t + e;
}
function Md(t, e, r, n) {
  var i = e + 1;
  if (i === r)
    return 1;
  if (n(t[i++], t[e]) < 0) {
    for (; i < r && n(t[i], t[i - 1]) < 0; )
      i++;
    sE(t, e, i);
  } else
    for (; i < r && n(t[i], t[i - 1]) >= 0; )
      i++;
  return i - e;
}
function sE(t, e, r) {
  for (r--; e < r; ) {
    var n = t[e];
    t[e++] = t[r], t[r--] = n;
  }
}
function Ad(t, e, r, n, i) {
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
function al(t, e, r, n, i, a) {
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
function ol(t, e, r, n, i, a) {
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
function uE(t, e) {
  var r = Vi, n, i, a = 0, o = [];
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
    var d = n[v], m = i[v], p = n[v + 1], g = i[v + 1];
    i[v] = m + g, v === a - 3 && (n[v + 1] = n[v + 2], i[v + 1] = i[v + 2]), a--;
    var y = ol(t[p], t, d, m, 0, e);
    d += y, m -= y, m !== 0 && (g = al(t[d + m - 1], t, p, g, g - 1, e), g !== 0 && (m <= g ? h(d, m, p, g) : c(d, m, p, g)));
  }
  function h(v, d, m, p) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = t[v + g];
    var y = 0, _ = m, S = v;
    if (t[S++] = t[_++], --p === 0) {
      for (g = 0; g < d; g++)
        t[S + g] = o[y + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++)
        t[S + g] = t[_ + g];
      t[S + p] = o[y];
      return;
    }
    for (var T = r, x, b, C; ; ) {
      x = 0, b = 0, C = !1;
      do
        if (e(t[_], o[y]) < 0) {
          if (t[S++] = t[_++], b++, x = 0, --p === 0) {
            C = !0;
            break;
          }
        } else if (t[S++] = o[y++], x++, b = 0, --d === 1) {
          C = !0;
          break;
        }
      while ((x | b) < T);
      if (C)
        break;
      do {
        if (x = ol(t[_], o, y, d, 0, e), x !== 0) {
          for (g = 0; g < x; g++)
            t[S + g] = o[y + g];
          if (S += x, y += x, d -= x, d <= 1) {
            C = !0;
            break;
          }
        }
        if (t[S++] = t[_++], --p === 0) {
          C = !0;
          break;
        }
        if (b = al(o[y], t, _, p, 0, e), b !== 0) {
          for (g = 0; g < b; g++)
            t[S + g] = t[_ + g];
          if (S += b, _ += b, p -= b, p === 0) {
            C = !0;
            break;
          }
        }
        if (t[S++] = o[y++], --d === 1) {
          C = !0;
          break;
        }
        T--;
      } while (x >= Vi || b >= Vi);
      if (C)
        break;
      T < 0 && (T = 0), T += 2;
    }
    if (r = T, r < 1 && (r = 1), d === 1) {
      for (g = 0; g < p; g++)
        t[S + g] = t[_ + g];
      t[S + p] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        t[S + g] = o[y + g];
    }
  }
  function c(v, d, m, p) {
    var g = 0;
    for (g = 0; g < p; g++)
      o[g] = t[m + g];
    var y = v + d - 1, _ = p - 1, S = m + p - 1, T = 0, x = 0;
    if (t[S--] = t[y--], --d === 0) {
      for (T = S - (p - 1), g = 0; g < p; g++)
        t[T + g] = o[g];
      return;
    }
    if (p === 1) {
      for (S -= d, y -= d, x = S + 1, T = y + 1, g = d - 1; g >= 0; g--)
        t[x + g] = t[T + g];
      t[S] = o[_];
      return;
    }
    for (var b = r; ; ) {
      var C = 0, E = 0, D = !1;
      do
        if (e(o[_], t[y]) < 0) {
          if (t[S--] = t[y--], C++, E = 0, --d === 0) {
            D = !0;
            break;
          }
        } else if (t[S--] = o[_--], E++, C = 0, --p === 1) {
          D = !0;
          break;
        }
      while ((C | E) < b);
      if (D)
        break;
      do {
        if (C = d - ol(o[_], t, v, d, d - 1, e), C !== 0) {
          for (S -= C, y -= C, d -= C, x = S + 1, T = y + 1, g = C - 1; g >= 0; g--)
            t[x + g] = t[T + g];
          if (d === 0) {
            D = !0;
            break;
          }
        }
        if (t[S--] = o[_--], --p === 1) {
          D = !0;
          break;
        }
        if (E = p - al(t[y], o, 0, p, p - 1, e), E !== 0) {
          for (S -= E, _ -= E, p -= E, x = S + 1, T = _ + 1, g = 0; g < E; g++)
            t[x + g] = o[T + g];
          if (p <= 1) {
            D = !0;
            break;
          }
        }
        if (t[S--] = t[y--], --d === 0) {
          D = !0;
          break;
        }
        b--;
      } while (C >= Vi || E >= Vi);
      if (D)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (r = b, r < 1 && (r = 1), p === 1) {
      for (S -= d, y -= d, x = S + 1, T = y + 1, g = d - 1; g >= 0; g--)
        t[x + g] = t[T + g];
      t[S] = o[_];
    } else {
      if (p === 0)
        throw new Error();
      for (T = S - (p - 1), g = 0; g < p; g++)
        t[T + g] = o[g];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function Ho(t, e, r, n) {
  r || (r = 0), n || (n = t.length);
  var i = n - r;
  if (!(i < 2)) {
    var a = 0;
    if (i < o_) {
      a = Md(t, r, n, e), Ad(t, r, n, r + a, e);
      return;
    }
    var o = uE(t, e), s = oE(i);
    do {
      if (a = Md(t, r, n, e), a < s) {
        var u = i;
        u > s && (u = s), Ad(t, r, r + u, r + a, e), a = u;
      }
      o.pushRun(r, a), o.mergeRuns(), i -= a, r += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var Id = !1;
function sl() {
  Id || (Id = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Ld(t, e) {
  return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
}
var lE = (function() {
  function t() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Ld;
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
    n.length = this._displayListLen, Ho(n, Ld);
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
          e.__dirty && (v.__dirty |= je), this._updateAndAddDisplayable(v, s, n);
        }
        e.__dirty = 0;
      } else {
        var d = e;
        isNaN(d.z) && (sl(), d.z = 0), isNaN(d.z2) && (sl(), d.z2 = 0), isNaN(d.zlevel) && (sl(), d.zlevel = 0), this._displayList[this._displayListLen++] = d;
      }
      var m = e.getDecalElement && e.getDecalElement();
      m && this._updateAndAddDisplayable(m, s, n);
      var p = e.getTextGuideLine();
      p && this._updateAndAddDisplayable(p, s, n);
      var g = e.getTextContent();
      g && this._updateAndAddDisplayable(g, s, n);
    }
  }, t.prototype.addRoot = function(e) {
    e.__zr && e.__zr.storage === this || this._roots.push(e);
  }, t.prototype.delRoot = function(e) {
    if (e instanceof Array) {
      for (var r = 0, n = e.length; r < n; r++)
        this.delRoot(e[r]);
      return;
    }
    var i = ue(this._roots, e);
    i >= 0 && this._roots.splice(i, 1);
  }, t.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, t.prototype.getRoots = function() {
    return this._roots;
  }, t.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, t;
})(), ws;
ws = q.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
  return setTimeout(t, 16);
};
function qn() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var fE = (function(t) {
  F(e, t);
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
    for (var n = qn() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, r || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, e.prototype._startLoop = function() {
    var r = this;
    this._running = !0;
    function n() {
      r._running && (ws(n), !r._paused && r.update());
    }
    ws(n);
  }, e.prototype.start = function() {
    this._running || (this._time = qn(), this._pausedTime = 0, this._startLoop());
  }, e.prototype.stop = function() {
    this._running = !1;
  }, e.prototype.pause = function() {
    this._paused || (this._pauseStart = qn(), this._paused = !0);
  }, e.prototype.resume = function() {
    this._paused && (this._pausedTime += qn() - this._pauseStart, this._paused = !1);
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
    var i = new oh(r, n.loop);
    return this.addAnimator(i), i;
  }, e;
})(Jt), hE = 300, ul = q.domSupported, ll = (function() {
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
  }, n = X(t, function(i) {
    var a = i.replace("mouse", "pointer");
    return r.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: t,
    touch: e,
    pointer: n
  };
})(), Od = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Nd = !1;
function Of(t) {
  var e = t.pointerType;
  return e === "pen" || e === "touch";
}
function cE(t) {
  t.touching = !0, t.touchTimer != null && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function() {
    t.touching = !1, t.touchTimer = null;
  }, 700);
}
function fl(t) {
  t && (t.zrByTouch = !0);
}
function vE(t, e) {
  return gt(t.dom, new dE(t, e), !0);
}
function s_(t, e) {
  for (var r = e, n = !1; r && r.nodeType !== 9 && !(n = r.domBelongToZr || r !== e && r === t.painterRoot); )
    r = r.parentNode;
  return n;
}
var dE = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.stopPropagation = Ve, this.stopImmediatePropagation = Ve, this.preventDefault = Ve, this.type = r.type, this.target = this.currentTarget = e.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY;
  }
  return t;
})(), Et = {
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
    s_(this, e) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), this.trigger("mouseout", t));
  },
  wheel: function(t) {
    Nd = !0, t = gt(this.dom, t), this.trigger("mousewheel", t);
  },
  mousewheel: function(t) {
    Nd || (t = gt(this.dom, t), this.trigger("mousewheel", t));
  },
  touchstart: function(t) {
    t = gt(this.dom, t), fl(t), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(t, "start"), Et.mousemove.call(this, t), Et.mousedown.call(this, t);
  },
  touchmove: function(t) {
    t = gt(this.dom, t), fl(t), this.handler.processGesture(t, "change"), Et.mousemove.call(this, t);
  },
  touchend: function(t) {
    t = gt(this.dom, t), fl(t), this.handler.processGesture(t, "end"), Et.mouseup.call(this, t), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < hE && Et.click.call(this, t);
  },
  pointerdown: function(t) {
    Et.mousedown.call(this, t);
  },
  pointermove: function(t) {
    Of(t) || Et.mousemove.call(this, t);
  },
  pointerup: function(t) {
    Et.mouseup.call(this, t);
  },
  pointerout: function(t) {
    Of(t) || Et.mouseout.call(this, t);
  }
};
w(["click", "dblclick", "contextmenu"], function(t) {
  Et[t] = function(e) {
    e = gt(this.dom, e), this.trigger(t, e);
  };
});
var Nf = {
  pointermove: function(t) {
    Of(t) || Nf.mousemove.call(this, t);
  },
  pointerup: function(t) {
    Nf.mouseup.call(this, t);
  },
  mousemove: function(t) {
    this.trigger("mousemove", t);
  },
  mouseup: function(t) {
    var e = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t));
  }
};
function pE(t, e) {
  var r = e.domHandlers;
  q.pointerEventsSupported ? w(ll.pointer, function(n) {
    Go(e, n, function(i) {
      r[n].call(t, i);
    });
  }) : (q.touchEventsSupported && w(ll.touch, function(n) {
    Go(e, n, function(i) {
      r[n].call(t, i), cE(e);
    });
  }), w(ll.mouse, function(n) {
    Go(e, n, function(i) {
      i = rc(i), e.touching || r[n].call(t, i);
    });
  }));
}
function gE(t, e) {
  q.pointerEventsSupported ? w(Od.pointer, r) : q.touchEventsSupported || w(Od.mouse, r);
  function r(n) {
    function i(a) {
      a = rc(a), s_(t, a.target) || (a = vE(t, a), e.domHandlers[n].call(t, a));
    }
    Go(e, n, i, { capture: !0 });
  }
}
function Go(t, e, r, n) {
  t.mounted[e] = r, t.listenerOpts[e] = n, QD(t.domTarget, e, r, n);
}
function hl(t) {
  var e = t.mounted;
  for (var r in e)
    e.hasOwnProperty(r) && JD(t.domTarget, r, e[r], t.listenerOpts[r]);
  t.mounted = {};
}
var Pd = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = e, this.domHandlers = r;
  }
  return t;
})(), mE = (function(t) {
  F(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = r, i.painterRoot = n, i._localHandlerScope = new Pd(r, Et), ul && (i._globalHandlerScope = new Pd(document, Nf)), pE(i, i._localHandlerScope), i;
  }
  return e.prototype.dispose = function() {
    hl(this._localHandlerScope), ul && hl(this._globalHandlerScope);
  }, e.prototype.setCursor = function(r) {
    this.dom.style && (this.dom.style.cursor = r || "default");
  }, e.prototype.__togglePointerCapture = function(r) {
    if (this.__mayPointerCapture = null, ul && +this.__pointerCapturing ^ +r) {
      this.__pointerCapturing = r;
      var n = this._globalHandlerScope;
      r ? gE(this, n) : hl(n);
    }
  }, e;
})(Jt);
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE
*/
var Ki = {}, u_ = {};
function yE(t) {
  delete u_[t];
}
function _E(t) {
  if (!t)
    return !1;
  if (typeof t == "string")
    return Ko(t, 1) < $l;
  if (t.colorStops) {
    for (var e = t.colorStops, r = 0, n = e.length, i = 0; i < n; i++)
      r += Ko(e[i].color, 1);
    return r /= n, r < $l;
  }
  return !1;
}
var SE = (function() {
  function t(e, r, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, n = n || {}, this.dom = r, this.id = e;
    var a = new lE(), o = n.renderer || "canvas";
    if (Ki[o] || (o = me(Ki)[0]), process.env.NODE_ENV !== "production" && !Ki[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new Ki[o](r, a, n, e), u = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !q.node && !q.worker && !u ? new mE(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? q.touchEventsSupported : !!f, c = 44, v;
    h && (v = G(n.pointerSize, c)), this.handler = new i_(a, s, l, s.root, v), this.animation = new fE({
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
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(e), this.refresh(), this._backgroundColor = e, this._darkMode = _E(e));
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
    var r, n = qn(), i = this._needsRefresh, a = this._needsRefreshHover;
    (i || a) && (r = !0, this._refresh({
      animUpdate: e,
      refresh: i,
      refreshHover: a
    }));
    var o = qn();
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
        e[r] instanceof ft && e[r].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, t.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, yE(this.id));
  }, t;
})();
function Rd(t, e) {
  var r = new SE(ng(), t, e);
  return u_[r.id] = r, r;
}
function TE(t, e) {
  Ki[t] = e;
}
var l_ = "";
typeof navigator < "u" && (l_ = navigator.platform || "");
var Bn = "rgba(0, 0, 0, 0.2)", f_ = Y.color.theme[0], xE = Wl(f_, null, null, 0.9);
const h_ = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: Y.color.theme,
  gradientColor: [xE, f_],
  aria: {
    decal: {
      decals: [{
        color: Bn,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Bn,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Bn,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Bn,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Bn,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Bn,
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
    fontFamily: l_.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
var wE = W();
function bE(t, e, r) {
  var n = wE.get(e);
  if (!n)
    return r;
  var i = n(t);
  if (!i)
    return r;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < i.length; a++)
      O(fi(i[a]));
  return r.concat(i);
}
var go, Fi, kd, cl = "\0_ec_inner", Bd = 1, CE = {
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
}, DE = {
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
}, bs = {};
function EE(t) {
  w(t, function(e, r) {
    if (!le.hasClass(r)) {
      var n = CE[r];
      n && !bs[n] && (oe("Component " + r + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), bs[n] = !0);
    }
  });
}
var nc = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.init = function(r, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new xe(a), this._locale = new xe(o), this._optionManager = s;
    }, e.prototype.setOption = function(r, n, i) {
      process.env.NODE_ENV !== "production" && (O(r != null, "option is null/undefined"), O(r[cl] !== Bd, "please use chart.getOption()"));
      var a = zd(n);
      this._optionManager.setOption(r, i, a), this._resetOption(null, a);
    }, e.prototype.resetOption = function(r, n) {
      return this._resetOption(r, zd(n));
    }, e.prototype._resetOption = function(r, n) {
      var i = !1, a = this._optionManager;
      if (!r || r === "recreate") {
        var o = a.mountOption(r === "recreate");
        process.env.NODE_ENV !== "production" && EE(o), !this.option || r === "recreate" ? kd(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!r || r === "recreate" || r === "media") {
        var u = a.getMediaOption(this);
        u.length && w(u, function(l) {
          i = !0, this._mergeOption(l, n);
        }, this);
      }
      return i;
    }, e.prototype.mergeOption = function(r) {
      this._mergeOption(r, null);
    }, e.prototype._mergeOption = function(r, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = W(), l = n && n.replaceMergeMainTypeMap;
      Px(this), w(r, function(h, c) {
        h != null && (le.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : i[c] = i[c] == null ? ne(h) : ce(i[c], h, !0));
      }), l && l.each(function(h, c) {
        le.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
      }), le.topologicalTravel(s, le.getAllClassMainTypes(), f, this);
      function f(h) {
        var c = bE(this, h, Ye(r[h])), v = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), m = AS(v, c, d);
        kS(m, h, le), i[h] = null, a.set(h, null), o.set(h, 0);
        var p = [], g = [], y = 0, _, S;
        w(m, function(T, x) {
          var b = T.existing, C = T.newOption;
          if (!C)
            b && (b.mergeOption({}, this), b.optionUpdated({}, !1));
          else {
            var E = h === "series", D = le.getClass(
              h,
              T.keyInfo.subType,
              !E
              // Give a more detailed warn later if series don't exists
            );
            if (!D) {
              if (process.env.NODE_ENV !== "production") {
                var M = T.keyInfo.subType, I = DE[M];
                bs[M] || (bs[M] = !0, oe(I ? "Series " + M + ` is used but not imported.
import { ` + I + ` } from 'echarts/charts';
echarts.use([` + I + "]);" : "Unknown series " + M));
              }
              return;
            }
            if (h === "tooltip") {
              if (_) {
                process.env.NODE_ENV !== "production" && (S || (Ke("Currently only one tooltip component is allowed."), S = !0));
                return;
              }
              _ = !0;
            }
            if (b && b.constructor === D)
              b.name = T.keyInfo.name, b.mergeOption(C, this), b.optionUpdated(C, !1);
            else {
              var A = R({
                componentIndex: x
              }, T.keyInfo);
              b = new D(C, this, this, A), R(b, A), T.brandNew && (b.__requireNewView = !0), b.init(C, this, this), b.optionUpdated(null, !0);
            }
          }
          b ? (p.push(b.option), g.push(b), y++) : (p.push(void 0), g.push(void 0));
        }, this), i[h] = p, a.set(h, g), o.set(h, y), h === "series" && go(this);
      }
      this._seriesIndices || go(this);
    }, e.prototype.getOption = function() {
      var r = ne(this.option);
      return w(r, function(n, i) {
        if (le.hasClass(i)) {
          for (var a = Ye(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !fi(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, r[i] = a;
        }
      }), delete r[cl], r;
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
      return i != null ? (u = [], w(Ye(i), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = Vd("id", a, s) : o != null ? u = Vd("name", o, s) : u = Be(s, function(l) {
        return !!l;
      }), Fd(u, r);
    }, e.prototype.findComponents = function(r) {
      var n = r.query, i = r.mainType, a = s(n), o = a ? this.queryComponents(a) : Be(this._componentsMap.get(i), function(l) {
        return !!l;
      });
      return u(Fd(o, r));
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
        return r.filter ? Be(l, r.filter) : l;
      }
    }, e.prototype.eachComponent = function(r, n, i) {
      var a = this._componentsMap;
      if ($(r)) {
        var o = n, s = r;
        a.each(function(h, c) {
          for (var v = 0; h && v < h.length; v++) {
            var d = h[v];
            d && s.call(o, c, d, d.componentIndex);
          }
        });
      } else
        for (var u = V(r) ? a.get(r) : H(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && n.call(i, f, f.componentIndex);
        }
    }, e.prototype.getSeriesByName = function(r) {
      var n = Xt(r, null);
      return Be(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, e.prototype.getSeriesByIndex = function(r) {
      return this._componentsMap.get("series")[r];
    }, e.prototype.getSeriesByType = function(r) {
      return Be(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === r;
      });
    }, e.prototype.getSeries = function() {
      return Be(this._componentsMap.get("series"), function(r) {
        return !!r;
      });
    }, e.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, e.prototype.eachSeries = function(r, n) {
      Fi(this), w(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        r.call(n, a, i);
      }, this);
    }, e.prototype.eachRawSeries = function(r, n) {
      w(this._componentsMap.get("series"), function(i) {
        i && r.call(n, i, i.componentIndex);
      });
    }, e.prototype.eachSeriesByType = function(r, n, i) {
      Fi(this), w(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === r && n.call(i, o, a);
      }, this);
    }, e.prototype.eachRawSeriesByType = function(r, n, i) {
      return w(this.getSeriesByType(r), n, i);
    }, e.prototype.isSeriesFiltered = function(r) {
      return Fi(this), this._seriesIndicesMap.get(r.componentIndex) == null;
    }, e.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, e.prototype.filterSeries = function(r, n) {
      Fi(this);
      var i = [];
      w(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        r.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = W(i);
    }, e.prototype.restoreData = function(r) {
      go(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        le.hasClass(o) && i.push(o);
      }), le.topologicalTravel(i, le.getAllClassMainTypes(), function(a) {
        w(n.get(a), function(o) {
          o && (a !== "series" || !ME(o, r)) && o.restoreData();
        });
      });
    }, e.internalField = (function() {
      go = function(r) {
        var n = r._seriesIndices = [];
        w(r._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), r._seriesIndicesMap = W(n);
      }, Fi = function(r) {
        if (process.env.NODE_ENV !== "production" && !r._seriesIndices)
          throw new Error("Option should contains series.");
      }, kd = function(r, n) {
        r.option = {}, r.option[cl] = Bd, r._componentsMap = W({
          series: []
        }), r._componentsCount = W();
        var i = n.aria;
        H(i) && i.enabled == null && (i.enabled = !0), AE(n, r._theme.option), ce(n, h_, !1), r._mergeOption(n, null);
      };
    })(), e;
  })(xe)
);
function ME(t, e) {
  if (e) {
    var r = e.seriesIndex, n = e.seriesId, i = e.seriesName;
    return r != null && t.componentIndex !== r || n != null && t.id !== n || i != null && t.name !== i;
  }
}
function AE(t, e) {
  var r = t.color && !t.colorLayer;
  w(e, function(n, i) {
    i === "colorLayer" && r || i === "color" && t.color || le.hasClass(i) || (typeof n == "object" ? t[i] = t[i] ? ce(t[i], n, !1) : ne(n) : t[i] == null && (t[i] = n));
  });
}
function Vd(t, e, r) {
  if (B(e)) {
    var n = W();
    return w(e, function(a) {
      if (a != null) {
        var o = Xt(a, null);
        o != null && n.set(a, !0);
      }
    }), Be(r, function(a) {
      return a && n.get(a[t]);
    });
  } else {
    var i = Xt(e, null);
    return Be(r, function(a) {
      return a && i != null && a[t] === i;
    });
  }
}
function Fd(t, e) {
  return e.hasOwnProperty("subType") ? Be(t, function(r) {
    return r && r.subType === e.subType;
  }) : t;
}
function zd(t) {
  var e = W();
  return t && w(Ye(t.replaceMerge), function(r) {
    process.env.NODE_ENV !== "production" && O(le.hasClass(r), '"' + r + '" is not valid component main type in "replaceMerge"'), e.set(r, !0);
  }), {
    replaceMergeMainTypeMap: e
  };
}
Qt(nc, Yh);
var IE = /^(min|max)?(.+)$/, LE = (
  /** @class */
  (function() {
    function t(e) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = e;
    }
    return t.prototype.setOption = function(e, r, n) {
      e && (w(Ye(e.series), function(o) {
        o && o.data && Xe(o.data) && Pl(o.data);
      }), w(Ye(e.dataset), function(o) {
        o && o.source && Xe(o.source) && Pl(o.source);
      })), e = ne(e);
      var i = this._optionBackup, a = OE(e, r, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, t.prototype.mountOption = function(e) {
      var r = this._optionBackup;
      return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], ne(e ? r.baseOption : this._newBaseOption);
    }, t.prototype.getTimelineOption = function(e) {
      var r, n = this._timelineOptions;
      if (n.length) {
        var i = e.getComponent("timeline");
        i && (r = ne(
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
        NE(i[u].query, r, n) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !RE(o, this._currentMediaIndices) && (s = X(o, function(f) {
        return ne(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, t;
  })()
);
function OE(t, e, r) {
  var n = [], i, a, o = t.baseOption, s = t.timeline, u = t.options, l = t.media, f = !!t.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (t.options = t.media = null), a = t), f && (B(l) ? w(l, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && H(v.query) && H(v.query.option) && oe("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? n.push(v) : i || (i = v));
  }) : process.env.NODE_ENV !== "production" && oe("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), w(u, function(v) {
    return c(v);
  }), w(n, function(v) {
    return c(v.option);
  });
  function c(v) {
    w(e, function(d) {
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
function NE(t, e, r) {
  var n = {
    width: e,
    height: r,
    aspectratio: e / r
    // lower case for convenience.
  }, i = !0;
  return w(t, function(a, o) {
    var s = o.match(IE);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      PE(n[l], a, u) || (i = !1);
    }
  }), i;
}
function PE(t, e, r) {
  return r === "min" ? t >= e : r === "max" ? t <= e : t === e;
}
function RE(t, e) {
  return t.join(",") === e.join(",");
}
var ct = w, Ca = H, Hd = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function vl(t) {
  var e = t && t.itemStyle;
  if (e)
    for (var r = 0, n = Hd.length; r < n; r++) {
      var i = Hd[r], a = e.normal, o = e.emphasis;
      a && a[i] && (process.env.NODE_ENV !== "production" && Le("itemStyle.normal." + i, i), t[i] = t[i] || {}, t[i].normal ? ce(t[i].normal, a[i]) : t[i].normal = a[i], a[i] = null), o && o[i] && (process.env.NODE_ENV !== "production" && Le("itemStyle.emphasis." + i, "emphasis." + i), t[i] = t[i] || {}, t[i].emphasis ? ce(t[i].emphasis, o[i]) : t[i].emphasis = o[i], o[i] = null);
    }
}
function ke(t, e, r) {
  if (t && t[e] && (t[e].normal || t[e].emphasis)) {
    var n = t[e].normal, i = t[e].emphasis;
    n && (process.env.NODE_ENV !== "production" && hr("'normal' hierarchy in " + e + " has been removed since 4.0. All style properties are configured in " + e + " directly now."), r ? (t[e].normal = t[e].emphasis = null, ye(t[e], n)) : t[e] = n), i && (process.env.NODE_ENV !== "production" && hr(e + ".emphasis has been changed to emphasis." + e + " since 4.0"), t.emphasis = t.emphasis || {}, t.emphasis[e] = i, i.focus && (t.emphasis.focus = i.focus), i.blurScope && (t.emphasis.blurScope = i.blurScope));
  }
}
function Qi(t) {
  ke(t, "itemStyle"), ke(t, "lineStyle"), ke(t, "areaStyle"), ke(t, "label"), ke(t, "labelLine"), ke(t, "upperLabel"), ke(t, "edgeLabel");
}
function Ce(t, e) {
  var r = Ca(t) && t[e], n = Ca(r) && r.textStyle;
  if (n) {
    process.env.NODE_ENV !== "production" && hr("textStyle hierarchy in " + e + " has been removed since 4.0. All textStyle properties are configured in " + e + " directly now.");
    for (var i = 0, a = fv.length; i < a; i++) {
      var o = fv[i];
      n.hasOwnProperty(o) && (r[o] = n[o]);
    }
  }
}
function mt(t) {
  t && (Qi(t), Ce(t, "label"), t.emphasis && Ce(t.emphasis, "label"));
}
function kE(t) {
  if (Ca(t)) {
    vl(t), Qi(t), Ce(t, "label"), Ce(t, "upperLabel"), Ce(t, "edgeLabel"), t.emphasis && (Ce(t.emphasis, "label"), Ce(t.emphasis, "upperLabel"), Ce(t.emphasis, "edgeLabel"));
    var e = t.markPoint;
    e && (vl(e), mt(e));
    var r = t.markLine;
    r && (vl(r), mt(r));
    var n = t.markArea;
    n && mt(n);
    var i = t.data;
    if (t.type === "graph") {
      i = i || t.nodes;
      var a = t.links || t.edges;
      if (a && !Xe(a))
        for (var o = 0; o < a.length; o++)
          mt(a[o]);
      w(t.categories, function(l) {
        Qi(l);
      });
    }
    if (i && !Xe(i))
      for (var o = 0; o < i.length; o++)
        mt(i[o]);
    if (e = t.markPoint, e && e.data)
      for (var s = e.data, o = 0; o < s.length; o++)
        mt(s[o]);
    if (r = t.markLine, r && r.data)
      for (var u = r.data, o = 0; o < u.length; o++)
        B(u[o]) ? (mt(u[o][0]), mt(u[o][1])) : mt(u[o]);
    t.type === "gauge" ? (Ce(t, "axisLabel"), Ce(t, "title"), Ce(t, "detail")) : t.type === "treemap" ? (ke(t.breadcrumb, "itemStyle"), w(t.levels, function(l) {
      Qi(l);
    })) : t.type === "tree" && Qi(t.leaves);
  }
}
function ir(t) {
  return B(t) ? t : t ? [t] : [];
}
function Gd(t) {
  return (B(t) ? t[0] : t) || {};
}
function BE(t, e) {
  ct(ir(t.series), function(n) {
    Ca(n) && kE(n);
  });
  var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  e && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ct(r, function(n) {
    ct(ir(t[n]), function(i) {
      i && (Ce(i, "axisLabel"), Ce(i.axisPointer, "label"));
    });
  }), ct(ir(t.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    Ce(i, "axisLabel"), Ce(i && i.axisPointer, "label");
  }), ct(ir(t.calendar), function(n) {
    ke(n, "itemStyle"), Ce(n, "dayLabel"), Ce(n, "monthLabel"), Ce(n, "yearLabel");
  }), ct(ir(t.radar), function(n) {
    Ce(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, process.env.NODE_ENV !== "production" && hr("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, process.env.NODE_ENV !== "production" && hr("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && ct(n.indicator, function(i) {
      i.text && Le("text", "name", "radar.indicator");
    });
  }), ct(ir(t.geo), function(n) {
    Ca(n) && (mt(n), ct(ir(n.regions), function(i) {
      mt(i);
    }));
  }), ct(ir(t.timeline), function(n) {
    mt(n), ke(n, "label"), ke(n, "itemStyle"), ke(n, "controlStyle", !0);
    var i = n.data;
    B(i) && w(i, function(a) {
      H(a) && (ke(a, "label"), ke(a, "itemStyle"));
    });
  }), ct(ir(t.toolbox), function(n) {
    ke(n, "iconStyle"), ct(n.feature, function(i) {
      ke(i, "iconStyle");
    });
  }), Ce(Gd(t.axisPointer), "label"), Ce(Gd(t.tooltip).axisPointer, "label");
}
function VE(t, e) {
  for (var r = e.split(","), n = t, i = 0; i < r.length && (n = n && n[r[i]], n != null); i++)
    ;
  return n;
}
function FE(t, e, r, n) {
  for (var i = e.split(","), a = t, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = r);
}
function Ud(t) {
  t && w(zE, function(e) {
    e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
  });
}
var zE = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], HE = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], dl = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function zi(t) {
  var e = t && t.itemStyle;
  if (e)
    for (var r = 0; r < dl.length; r++) {
      var n = dl[r][1], i = dl[r][0];
      e[n] != null && (e[i] = e[n], process.env.NODE_ENV !== "production" && Le(n, i));
    }
}
function Wd(t) {
  t && t.alignTo === "edge" && t.margin != null && t.edgeDistance == null && (process.env.NODE_ENV !== "production" && Le("label.margin", "label.edgeDistance", "pie"), t.edgeDistance = t.margin);
}
function Yd(t) {
  t && t.downplay && !t.blur && (t.blur = t.downplay, process.env.NODE_ENV !== "production" && Le("downplay", "blur", "sunburst"));
}
function GE(t) {
  t && t.focusNodeAdjacency != null && (t.emphasis = t.emphasis || {}, t.emphasis.focus == null && (process.env.NODE_ENV !== "production" && Le("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), t.emphasis.focus = "adjacency"));
}
function c_(t, e) {
  if (t)
    for (var r = 0; r < t.length; r++)
      e(t[r]), t[r] && c_(t[r].children, e);
}
function v_(t, e) {
  BE(t, e), t.series = Ye(t.series), w(t.series, function(r) {
    if (H(r)) {
      var n = r.type;
      if (n === "line")
        r.clipOverflow != null && (r.clip = r.clipOverflow, process.env.NODE_ENV !== "production" && Le("clipOverflow", "clip", "line"));
      else if (n === "pie" || n === "gauge") {
        r.clockWise != null && (r.clockwise = r.clockWise, process.env.NODE_ENV !== "production" && Le("clockWise", "clockwise")), Wd(r.label);
        var i = r.data;
        if (i && !Xe(i))
          for (var a = 0; a < i.length; a++)
            Wd(i[a]);
        r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && Le("hoverOffset", "emphasis.scaleSize"), r.emphasis.scaleSize = r.hoverOffset));
      } else if (n === "gauge") {
        var o = VE(r, "pointer.color");
        o != null && FE(r, "itemStyle.color", o);
      } else if (n === "bar") {
        zi(r), zi(r.backgroundStyle), zi(r.emphasis);
        var i = r.data;
        if (i && !Xe(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (zi(i[a]), zi(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = r.highlightPolicy;
        s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s, process.env.NODE_ENV !== "production" && Le("highlightPolicy", "emphasis.focus", "sunburst"))), Yd(r), c_(r.data, Yd);
      } else n === "graph" || n === "sankey" ? GE(r) : n === "map" && (r.mapType && !r.map && (process.env.NODE_ENV !== "production" && Le("mapType", "map", "map"), r.map = r.mapType), r.mapLocation && (process.env.NODE_ENV !== "production" && hr("`mapLocation` is not used anymore."), ye(r, r.mapLocation)));
      r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (process.env.NODE_ENV !== "production" && Le("hoverAnimation", "emphasis.scale"), r.emphasis.scale = r.hoverAnimation)), Ud(r);
    }
  }), t.dataRange && (t.visualMap = t.dataRange), w(HE, function(r) {
    var n = t[r];
    n && (B(n) || (n = [n]), w(n, function(i) {
      Ud(i);
    }));
  });
}
var UE = vh(WE);
function WE(t) {
  var e = W();
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
      i === "seriesDesc" && r.reverse(), w(r, function(a, o) {
        a.data.setCalculationInfo("stackedOnSeries", o > 0 ? r[o - 1].seriesModel : null);
      }), YE(r);
    }
  });
}
function YE(t) {
  w(t, function(e, r) {
    var n = [], i = [NaN, NaN], a = [e.stackResultDimension, e.stackedOverDimension], o = e.data, s = e.isStackedByIndex, u = e.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var c = o.get(e.stackedDimension, h);
      if (isNaN(c))
        return i;
      var v, d;
      s ? d = o.getRawIndex(h) : v = o.get(e.stackedByDimension, h);
      for (var m = NaN, p = r - 1; p >= 0; p--) {
        var g = t[p];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0) {
          var y = g.data.getByRawIndex(g.stackResultDimension, d);
          if (u === "all" || u === "positive" && y > 0 || u === "negative" && y < 0 || u === "samesign" && c >= 0 && y > 0 || u === "samesign" && c <= 0 && y < 0) {
            c = wS(c, y), m = y;
            break;
          }
        }
      }
      return n[0] = c, n[1] = m, n;
    });
  });
}
var Kt = (
  /** @class */
  (function() {
    function t() {
      this.group = new ft(), this.uid = js("viewComponent");
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
rh(Kt);
Rs(Kt);
var Xd = pe(), Zd = {
  itemStyle: va(Mm, !0),
  lineStyle: va(Em, !0)
}, XE = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function d_(t, e) {
  var r = t.visualStyleMapper || Zd[e];
  return r || (console.warn("Unknown style type '" + e + "'."), Zd.itemStyle);
}
function p_(t, e) {
  var r = t.visualDrawType || XE[e];
  return r || (console.warn("Unknown style type '" + e + "'."), "fill");
}
var ZE = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(t, e) {
    var r = t.getData(), n = t.visualStyleAccessPath || "itemStyle", i = t.getModel(n), a = d_(t, n), o = a(i), s = i.getShallow("decal");
    s && (r.setVisual("decal", s), s.dirty = !0);
    var u = p_(t, n), l = o[u], f = $(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = t.getColorFromPalette(
        // TODO series count changed.
        t.name,
        null,
        e.getSeriesCount()
      );
      o[u] || (o[u] = c, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || $(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || $(o.stroke) ? c : o.stroke;
    }
    if (r.setVisual("style", o), r.setVisual("drawType", u), !e.isSeriesFiltered(t) && f)
      return r.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var m = t.getDataParams(d), p = R({}, o);
          p[u] = f(m), v.setItemVisual(d, "style", p);
        }
      };
  }
}, Hi = new xe(), $E = {
  createOnAllSeries: !0,
  reset: function(t, e) {
    if (!t.ignoreStyleOnData) {
      var r = t.getData(), n = t.visualStyleAccessPath || "itemStyle", i = d_(t, n), a = r.getVisual("drawType");
      return {
        dataEach: r.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[n]) {
            Hi.option = u[n];
            var l = i(Hi), f = o.ensureUniqueItemVisual(s, "style");
            R(f, l), Hi.option.decal && (o.setItemVisual(s, "decal", Hi.option.decal), Hi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, qE = {
  performRawSeries: !0,
  overallReset: function(t) {
    var e = W();
    t.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.type + "-" + r.getColorBy();
        Xd(r).scope = e.get(n) || e.set(n, {});
      }
    }), t.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.getRawData(), i = {}, a = r.getData(), o = Xd(r).scope, s = r.visualStyleAccessPath || "itemStyle", u = p_(r, s);
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
}, mo = Math.PI;
function KE(t, e) {
  e = e || {}, ye(e, {
    text: "loading",
    textColor: Y.color.primary,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255,255,255,0.8)",
    showSpinner: !0,
    color: Y.color.theme[0],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var r = new ft(), n = new Me({
    style: {
      fill: e.maskColor
    },
    zlevel: e.zlevel,
    z: 1e4
  });
  r.add(n);
  var i = new ut({
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
  }), a = new Me({
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
  return e.showSpinner && (o = new $s({
    shape: {
      startAngle: -mo / 2,
      endAngle: -mo / 2 + 0.1,
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
    endAngle: mo * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: mo * 3 / 2
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
var g_ = (
  /** @class */
  (function() {
    function t(e, r, n, i) {
      this._stageTaskMap = W(), this.ecInstance = e, this.api = r, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
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
      var n = this._pipelineMap.get(e.uid), i = e.__preparePipelineContext ? e.__preparePipelineContext(r, n) : KS(e, r, n);
      e.pipelineContext = n.context = i;
    }, t.prototype.restorePipelines = function(e, r) {
      var n = this, i = n._pipelineMap = W();
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
      w(this._allHandlers, function(i) {
        var a = e.get(i.uid) || e.set(i.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), O(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, r, n), i.overallReset && this._createOverallStageTask(i, a, r, n);
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
      w(e, function(u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, c = f.overallTask;
          if (c) {
            var v, d = c.agentStubMap;
            d.each(function(p) {
              s(i, p) && (p.dirty(), v = !0);
            }), v && c.dirty(), o.updatePayload(c, n);
            var m = o.getPerformArgs(c, i.block);
            d.each(function(p) {
              p.perform(m);
            }), c.perform(m) && (a = !0);
          } else h && h.each(function(p, g) {
            s(i, p) && p.dirty();
            var y = o.getPerformArgs(p, i.block);
            y.skip = !u.performRawSeries && r.isSeriesFiltered(p.context.model), o.updatePayload(p, n), p.perform(y) && (a = !0);
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
      var a = this, o = r.seriesTaskMap, s = r.seriesTaskMap = W(), u = e.seriesType, l = e.getTargetSeries;
      e.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);
      function f(h) {
        var c = h.uid, v = s.set(c, o && o.get(c) || la({
          plan: tM,
          reset: rM,
          count: iM
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
      var a = this, o = r.overallTask = r.overallTask || la({
        reset: QE
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: e.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = W(), l = e.seriesType, f = e.getTargetSeries, h = e.dirtyOnOverallProgress, c = !1, v = "";
      process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), O(!e.createOnAllSeries, v), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : w(n.getSeries(), d);
      function d(m) {
        var p = m.uid, g = u.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (c = !0, la({
          reset: JE,
          onDirty: eM
        })));
        g.context = {
          model: m,
          dirtyOnOverallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, g.agent = o, g.__block = h, a._pipe(m, g);
      }
      c && o.dirty();
    }, t.prototype._pipe = function(e, r) {
      var n = e.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = r), i.tail && i.tail.pipe(r), i.tail = r, r.__idxInPipeline = i.count++, r.__pipeline = i;
    }, t.wrapStageHandler = function(e, r) {
      return $(e) && (e = {
        overallReset: e,
        seriesType: aM(e)
      }), e.uid = js("stageHandler"), r && (e.visualType = r), e;
    }, t;
  })()
);
function QE(t) {
  t.overallReset(t.ecModel, t.api, t.payload);
}
function JE(t) {
  return t.dirtyOnOverallProgress && jE;
}
function jE() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function eM() {
  this.agent && this.agent.dirty();
}
function tM(t) {
  return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
}
function rM(t) {
  t.useClearVisual && t.data.clearAllVisual();
  var e = t.resetDefines = Ye(t.reset(t.model, t.ecModel, t.api, t.payload));
  return e.length > 1 ? X(e, function(r, n) {
    return m_(n);
  }) : nM;
}
var nM = m_(0);
function m_(t) {
  return function(e, r) {
    var n = r.data, i = r.resetDefines[t];
    if (i && i.dataEach)
      for (var a = e.start; a < e.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(e, n);
  };
}
function iM(t) {
  return t.data.count();
}
function aM(t) {
  Cs = null;
  try {
    t(Da, y_);
  } catch {
  }
  return Cs;
}
var Da = {}, y_ = {}, Cs;
__(Da, nc);
__(y_, $g);
Da.eachSeriesByType = Da.eachRawSeriesByType = function(t) {
  Cs = t;
};
Da.eachComponent = function(t) {
  t.mainType === "series" && t.subType && (Cs = t.subType);
};
function __(t, e) {
  for (var r in e.prototype)
    t[r] = Ve;
}
var P = Y.darkColor, $d = P.background, Gi = function() {
  return {
    axisLine: {
      lineStyle: {
        color: P.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: P.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [P.backgroundTint, P.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: P.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: P.axisLabel
    },
    axisName: {}
  };
}, qd = {
  label: {
    color: P.secondary
  },
  itemStyle: {
    borderColor: P.borderTint
  },
  dividerLineStyle: {
    color: P.border
  }
}, S_ = {
  darkMode: !0,
  color: P.theme,
  backgroundColor: $d,
  axisPointer: {
    lineStyle: {
      color: P.border
    },
    crossStyle: {
      color: P.borderShade
    },
    label: {
      color: P.tertiary
    }
  },
  legend: {
    textStyle: {
      color: P.secondary
    },
    pageTextStyle: {
      color: P.tertiary
    }
  },
  textStyle: {
    color: P.secondary
  },
  title: {
    textStyle: {
      color: P.primary
    },
    subtextStyle: {
      color: P.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: P.accent50
    },
    feature: {
      dataView: {
        backgroundColor: $d,
        textColor: P.primary,
        textareaColor: P.background,
        textareaBorderColor: P.border,
        buttonColor: P.accent50,
        buttonTextColor: P.neutral00
      }
    }
  },
  tooltip: {
    backgroundColor: P.neutral20,
    defaultBorderColor: P.border,
    textStyle: {
      color: P.tertiary
    }
  },
  dataZoom: {
    borderColor: P.accent10,
    textStyle: {
      color: P.tertiary
    },
    brushStyle: {
      color: P.backgroundTint
    },
    handleStyle: {
      color: P.neutral00,
      borderColor: P.accent20
    },
    moveHandleStyle: {
      color: P.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: P.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: P.accent30
      },
      areaStyle: {
        color: P.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: P.accent50
      },
      areaStyle: {
        color: P.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: P.secondary
    },
    handleStyle: {
      borderColor: P.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: P.accent10
    },
    label: {
      color: P.tertiary
    },
    controlStyle: {
      color: P.accent30,
      borderColor: P.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: P.neutral00,
      borderColor: P.neutral20
    },
    dayLabel: {
      color: P.tertiary
    },
    monthLabel: {
      color: P.secondary
    },
    yearLabel: {
      color: P.secondary
    }
  },
  matrix: {
    x: qd,
    y: qd,
    backgroundColor: {
      borderColor: P.axisLine
    },
    body: {
      itemStyle: {
        borderColor: P.borderTint
      }
    }
  },
  timeAxis: Gi(),
  logAxis: Gi(),
  valueAxis: Gi(),
  categoryAxis: Gi(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: P.theme
  },
  gauge: {
    title: {
      color: P.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, P.neutral05]]
      }
    },
    axisLabel: {
      color: P.axisLabel
    },
    detail: {
      color: P.primary
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
      borderColor: P.background
    }
  },
  radar: (function() {
    var t = Gi();
    return t.axisName = {
      color: P.axisLabel
    }, t.axisLine.lineStyle.color = P.neutral20, t;
  })(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: P.neutral20,
        textStyle: {
          color: P.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: P.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: P.background
    }
  },
  map: {
    itemStyle: {
      borderColor: P.border,
      areaColor: P.neutral10
    },
    label: {
      color: P.tertiary
    },
    emphasis: {
      label: {
        color: P.primary
      },
      itemStyle: {
        areaColor: P.highlight
      }
    },
    select: {
      label: {
        color: P.primary
      },
      itemStyle: {
        areaColor: P.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: P.border,
      areaColor: P.neutral10
    },
    emphasis: {
      label: {
        color: P.primary
      },
      itemStyle: {
        areaColor: P.highlight
      }
    },
    select: {
      label: {
        color: P.primary
      },
      itemStyle: {
        color: P.highlight
      }
    }
  }
};
S_.categoryAxis.splitLine.show = !1;
var oM = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.normalizeQuery = function(e) {
      var r = {}, n = {}, i = {};
      if (V(e)) {
        var a = Ht(e);
        r.mainType = a.main || null, r.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        w(e, function(u, l) {
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
), Pf = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Kd = Pf.concat(["symbolKeepAspect"]), sM = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(t, e) {
    var r = t.getData();
    if (t.legendIcon && r.setVisual("legendIcon", t.legendIcon), !t.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < Pf.length; o++) {
      var s = Pf[o], u = t.get(s);
      $(u) ? (a = !0, i[s] = u) : n[s] = u;
    }
    if (n.symbol = n.symbol || t.defaultSymbol, r.setVisual(R({
      legendIcon: t.legendIcon || n.symbol,
      symbolKeepAspect: t.get("symbolKeepAspect")
    }, n)), e.isSeriesFiltered(t))
      return;
    var l = me(i);
    function f(h, c) {
      for (var v = t.getRawValue(c), d = t.getDataParams(c), m = 0; m < l.length; m++) {
        var p = l[m];
        h.setItemVisual(c, p, i[p](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, uM = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(t, e) {
    if (!t.hasSymbolVisual || e.isSeriesFiltered(t))
      return;
    var r = t.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < Kd.length; s++) {
        var u = Kd[s], l = o.getShallow(u, !0);
        l != null && i.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: r.hasItemOption ? n : null
    };
  }
};
function lM(t, e, r) {
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
function fM(t, e) {
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
function Ji(t, e, r) {
  for (var n; t && !(e(t) && (n = t, r)); )
    t = t.__hostTarget || t.parent;
  return n;
}
var pt = new Jt(), Ds = {};
function hM(t, e) {
  process.env.NODE_ENV !== "production" && Ds[t] && oe("Already has an implementation of " + t + "."), Ds[t] = e;
}
function cM(t) {
  return process.env.NODE_ENV !== "production" && (Ds[t] || oe("Implementation of " + t + " doesn't exists.")), Ds[t];
}
var vM = Math.round(Math.random() * 9), dM = typeof Object.defineProperty == "function", pM = (function() {
  function t() {
    this._id = "__ec_inner_" + vM++;
  }
  return t.prototype.get = function(e) {
    return this._guard(e)[this._id];
  }, t.prototype.set = function(e, r) {
    var n = this._guard(e);
    return dM ? Object.defineProperty(n, this._id, {
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
function un(t) {
  return isFinite(t);
}
function gM(t, e, r) {
  var n = e.x == null ? 0 : e.x, i = e.x2 == null ? 1 : e.x2, a = e.y == null ? 0 : e.y, o = e.y2 == null ? 0 : e.y2;
  e.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), n = un(n) ? n : 0, i = un(i) ? i : 1, a = un(a) ? a : 0, o = un(o) ? o : 0;
  var s = t.createLinearGradient(n, a, i, o);
  return s;
}
function mM(t, e, r) {
  var n = r.width, i = r.height, a = Math.min(n, i), o = e.x == null ? 0.5 : e.x, s = e.y == null ? 0.5 : e.y, u = e.r == null ? 0.5 : e.r;
  e.global || (o = o * n + r.x, s = s * i + r.y, u = u * a), o = un(o) ? o : 0.5, s = un(s) ? s : 0.5, u = u >= 0 && un(u) ? u : 0.5;
  var l = t.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function Rf(t, e, r) {
  for (var n = e.type === "radial" ? mM(t, e, r) : gM(t, e, r), i = e.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function yM(t, e) {
  if (t === e || !t && !e)
    return !1;
  if (!t || !e || t.length !== e.length)
    return !0;
  for (var r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !0;
  return !1;
}
function yo(t) {
  return parseInt(t, 10);
}
function _o(t, e, r) {
  var n = ["width", "height"][e], i = ["clientWidth", "clientHeight"][e], a = ["paddingLeft", "paddingTop"][e], o = ["paddingRight", "paddingBottom"][e];
  if (r[n] != null && r[n] !== "auto")
    return parseFloat(r[n]);
  var s = document.defaultView.getComputedStyle(t);
  return (t[i] || yo(s[n]) || yo(t.style[n])) - (yo(s[a]) || 0) - (yo(s[o]) || 0) || 0;
}
function _M(t, e) {
  return !t || t === "solid" || !(e > 0) ? null : t === "dashed" ? [4 * e, 2 * e] : t === "dotted" ? [e] : we(t) ? [t] : B(t) ? t : null;
}
function T_(t) {
  var e = t.style, r = e.lineDash && e.lineWidth > 0 && _M(e.lineDash, e.lineWidth), n = e.lineDashOffset;
  if (r) {
    var i = e.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
    i && i !== 1 && (r = X(r, function(a) {
      return a / i;
    }), n /= i);
  }
  return [r, n];
}
var SM = new ui(!0);
function Es(t) {
  var e = t.stroke;
  return !(e == null || e === "none" || !(t.lineWidth > 0));
}
function Qd(t) {
  return typeof t == "string" && t !== "none";
}
function Ms(t) {
  var e = t.fill;
  return e != null && e !== "none";
}
function Jd(t, e) {
  if (e.fillOpacity != null && e.fillOpacity !== 1) {
    var r = t.globalAlpha;
    t.globalAlpha = e.fillOpacity * e.opacity, t.fill(), t.globalAlpha = r;
  } else
    t.fill();
}
function jd(t, e) {
  if (e.strokeOpacity != null && e.strokeOpacity !== 1) {
    var r = t.globalAlpha;
    t.globalAlpha = e.strokeOpacity * e.opacity, t.stroke(), t.globalAlpha = r;
  } else
    t.stroke();
}
function kf(t, e, r) {
  var n = fg(e.image, e.__image, r);
  if (ks(n)) {
    var i = t.createPattern(n, e.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(e.x || 0, e.y || 0), a.rotateSelf(0, 0, (e.rotation || 0) * I0), a.scaleSelf(e.scaleX || 1, e.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function TM(t, e, r, n, i) {
  var a, o = Es(r), s = Ms(r), u = r.strokePercent, l = u < 1, f = !e.path;
  (!e.silent || l) && f && e.createPathProxy();
  var h = e.path || SM, c = e.__dirty;
  if (!n) {
    var v = r.fill, d = r.stroke, m = s && !!v.colorStops, p = o && !!d.colorStops, g = s && !!v.image, y = o && !!d.image, _ = void 0, S = void 0, T = void 0, x = void 0, b = void 0;
    (m || p) && (b = e.getBoundingRect()), m && (_ = c ? Rf(t, v, b) : e.__canvasFillGradient, e.__canvasFillGradient = _), p && (S = c ? Rf(t, d, b) : e.__canvasStrokeGradient, e.__canvasStrokeGradient = S), g && (T = c || !e.__canvasFillPattern ? kf(t, v, e) : e.__canvasFillPattern, e.__canvasFillPattern = T), y && (x = c || !e.__canvasStrokePattern ? kf(t, d, e) : e.__canvasStrokePattern, e.__canvasStrokePattern = x), m ? t.fillStyle = _ : g && (T ? t.fillStyle = T : s = !1), p ? t.strokeStyle = S : y && (x ? t.strokeStyle = x : o = !1);
  }
  var C = e.getGlobalScale();
  h.setScale(C[0], C[1], e.segmentIgnoreThreshold);
  var E, D;
  t.setLineDash && r.lineDash && (a = T_(e), E = a[0], D = a[1]);
  var M = !0;
  (f || c & Gn) && (h.setDPR(t.dpr), l ? h.setContext(null) : (h.setContext(t), M = !1), h.reset(), e.buildPath(h, e.shape, n), h.toStatic(), e.pathUpdated()), M && h.rebuildPath(t, l ? u : 1), E && (t.setLineDash(E), t.lineDashOffset = D), n ? (i.batchFill = s, i.batchStroke = o) : r.strokeFirst ? (o && jd(t, r), s && Jd(t, r)) : (s && Jd(t, r), o && jd(t, r)), E && t.setLineDash([]);
}
function xM(t, e, r) {
  var n = e.__image = fg(r.image, e.__image, e, e.onload);
  if (!(!n || !ks(n))) {
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
function wM(t, e, r) {
  var n, i = r.text;
  if (i != null && (i += ""), i) {
    t.font = r.font || Mr, t.textAlign = r.textAlign, t.textBaseline = r.textBaseline;
    var a = void 0, o = void 0;
    t.setLineDash && r.lineDash && (n = T_(e), a = n[0], o = n[1]), a && (t.setLineDash(a), t.lineDashOffset = o), r.strokeFirst ? (Es(r) && t.strokeText(i, r.x, r.y), Ms(r) && t.fillText(i, r.x, r.y)) : (Ms(r) && t.fillText(i, r.x, r.y), Es(r) && t.strokeText(i, r.x, r.y)), a && t.setLineDash([]);
  }
}
var ep = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], tp = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function x_(t, e, r, n, i) {
  var a = !1;
  if (!n && (r = r || {}, e === r))
    return !1;
  if (n || e.opacity !== r.opacity) {
    Ue(t, i), a = !0;
    var o = Math.max(Math.min(e.opacity, 1), 0);
    t.globalAlpha = isNaN(o) ? vn.opacity : o;
  }
  (n || e.blend !== r.blend) && (a || (Ue(t, i), a = !0), t.globalCompositeOperation = e.blend || vn.blend);
  for (var s = 0; s < ep.length; s++) {
    var u = ep[s];
    (n || e[u] !== r[u]) && (a || (Ue(t, i), a = !0), t[u] = t.dpr * (e[u] || 0));
  }
  return (n || e.shadowColor !== r.shadowColor) && (a || (Ue(t, i), a = !0), t.shadowColor = e.shadowColor || vn.shadowColor), a;
}
function rp(t, e, r, n, i) {
  var a = e.style, o = n ? null : r && r.style || {};
  if (a === o)
    return !1;
  var s = x_(t, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (Ue(t, i), s = !0), Qd(a.fill) && (t.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Ue(t, i), s = !0), Qd(a.stroke) && (t.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Ue(t, i), s = !0), t.globalAlpha = a.opacity == null ? 1 : a.opacity), e.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
    t.lineWidth !== l && (s || (Ue(t, i), s = !0), t.lineWidth = l);
  }
  for (var f = 0; f < tp.length; f++) {
    var h = tp[f], c = h[0];
    (n || a[c] !== o[c]) && (s || (Ue(t, i), s = !0), t[c] = a[c] || h[1]);
  }
  return s;
}
function bM(t, e, r, n, i) {
  return x_(t, e.style, r && r.style, n, i);
}
function w_(t, e) {
  var r = e.transform, n = t.dpr || 1;
  r ? t.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : t.setTransform(n, 0, 0, n, 0, 0);
}
function CM(t, e, r) {
  for (var n = !1, i = 0; i < t.length; i++) {
    var a = t[i];
    n = n || a.isZeroArea(), w_(e, a), e.beginPath(), a.buildPath(e, a.shape), e.clip();
  }
  r.allClipped = n;
}
function DM(t, e) {
  return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : !(!t && !e);
}
var np = 1, ip = 2, ap = 3, op = 4;
function EM(t) {
  var e = Ms(t), r = Es(t);
  return !(t.lineDash || !(+e ^ +r) || e && typeof t.fill != "string" || r && typeof t.stroke != "string" || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1);
}
function Ue(t, e) {
  e.batchFill && (e.batchFill = !1, t.fill()), e.batchStroke && (e.batchStroke = !1, t.stroke());
}
function b_(t, e) {
  var r = { inHover: !1, viewWidth: 0, viewHeight: 0, beforeBrushParam: {} };
  ln(t, e, r), ti(t, r);
}
function ln(t, e, r) {
  var n = e.transform;
  if (!e.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
    e.__dirty &= ~je, e.__isRendered = !1;
    return;
  }
  var i = e.__clipPaths, a = r.prevElClipPaths, o = e.style, s = !1, u = !1;
  if ((!a || yM(i, a)) && (a && (Ue(t, r), t.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), i && i.length && (Ue(t, r), t.save(), CM(i, t, r), s = !0, r.prevElClipPaths = i)), r.allClipped) {
    e.__dirty &= ~je, e.__isRendered = !1;
    return;
  }
  e.beforeBrush && e.beforeBrush(r.beforeBrushParam), e.innerBeforeBrush();
  var l = r.prevEl;
  l || (u = s = !0);
  var f = e instanceof Se && e.autoBatch && EM(o);
  s || DM(n, l.transform) ? (Ue(t, r), w_(t, e)) : f || Ue(t, r), e instanceof Se ? (r.lastDrawType !== np && (u = !0, r.lastDrawType = np), rp(t, e, l, u, r), (!f || !r.batchFill && !r.batchStroke) && t.beginPath(), TM(t, e, o, f, r)) : e instanceof Jo ? (r.lastDrawType !== ap && (u = !0, r.lastDrawType = ap), rp(t, e, l, u, r), wM(t, e, o)) : e instanceof Tn ? (r.lastDrawType !== ip && (u = !0, r.lastDrawType = ip), bM(t, e, l, u, r), xM(t, e, o)) : e.getTemporalDisplayables && (r.lastDrawType !== op && (u = !0, r.lastDrawType = op), MM(t, e, r)), e.innerAfterBrush(), e.afterBrush && (f && Ue(t, r), e.afterBrush()), r.prevEl = e, e.__dirty = 0, e.__isRendered = !0;
}
function ti(t, e) {
  Ue(t, e), e.prevElClipPaths && t.restore();
}
function MM(t, e, r) {
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
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), ln(t, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  ti(t, a);
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), ln(t, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  ti(t, a), e.clearTemporalDisplayables(), e.notClear = !0, t.restore();
}
var pl = new pM(), sp = new ai(100), up = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Bf(t, e) {
  if (t === "none")
    return null;
  var r = e.getDevicePixelRatio(), n = e.getZr(), i = n.painter.type === "svg";
  t.dirty && pl.delete(t);
  var a = pl.get(t);
  if (a)
    return a;
  var o = ye(t, {
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
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / r, pl.set(t, s), t.dirty = !1, s;
  function u(l) {
    for (var f = [r], h = !0, c = 0; c < up.length; ++c) {
      var v = o[up[c]];
      if (v != null && !B(v) && !V(v) && !we(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (i ? "-svg" : "");
      var m = sp.get(d);
      m && (i ? l.svgElement = m : l.image = m);
    }
    var p = D_(o.dashArrayX), g = AM(o.dashArrayY), y = C_(o.symbol), _ = IM(p), S = E_(g), T = !i && st.createCanvas(), x = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, b = E(), C;
    T && (T.width = b.width * r, T.height = b.height * r, C = T.getContext("2d")), D(), h && sp.put(d, T || x), l.image = T, l.svgElement = x, l.svgWidth = b.width, l.svgHeight = b.height;
    function E() {
      for (var M = 1, I = 0, A = _.length; I < A; ++I)
        M = ov(M, _[I]);
      for (var L = 1, I = 0, A = y.length; I < A; ++I)
        L = ov(L, y[I].length);
      M *= L;
      var k = S * _.length * y.length;
      if (process.env.NODE_ENV !== "production") {
        var N = function(z) {
          console.warn("Calculated decal size is greater than " + z + " due to decal option settings so " + z + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + z + " to be larger to avoid incontinuity.");
        };
        M > o.maxTileWidth && N("maxTileWidth"), k > o.maxTileHeight && N("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(M, o.maxTileWidth)),
        height: Math.max(1, Math.min(k, o.maxTileHeight))
      };
    }
    function D() {
      C && (C.clearRect(0, 0, T.width, T.height), o.backgroundColor && (C.fillStyle = o.backgroundColor, C.fillRect(0, 0, T.width, T.height)));
      for (var M = 0, I = 0; I < g.length; ++I)
        M += g[I];
      if (M <= 0)
        return;
      for (var A = -S, L = 0, k = 0, N = 0; A < b.height; ) {
        if (L % 2 === 0) {
          for (var z = k / 2 % y.length, Q = 0, ee = 0, te = 0; Q < b.width * 2; ) {
            for (var J = 0, I = 0; I < p[N].length; ++I)
              J += p[N][I];
            if (J <= 0)
              break;
            if (ee % 2 === 0) {
              var re = (1 - o.symbolSize) * 0.5, j = Q + p[N][ee] * re, U = A + g[L] * re, se = p[N][ee] * o.symbolSize, he = g[L] * o.symbolSize, rt = te / 2 % y[z].length;
              tr(j, U, se, he, y[z][rt]);
            }
            Q += p[N][ee], ++te, ++ee, ee === p[N].length && (ee = 0);
          }
          ++N, N === p.length && (N = 0);
        }
        A += g[L], ++k, ++L, L === g.length && (L = 0);
      }
      function tr(nt, Ne, K, ie, Or) {
        var ze = i ? 1 : r, vc = Zh(Or, nt * ze, Ne * ze, K * ze, ie * ze, o.color, o.symbolKeepAspect);
        if (i) {
          var dc = n.painter.renderOneToVNode(vc);
          dc && x.children.push(dc);
        } else
          b_(C, vc);
      }
    }
  }
}
function C_(t) {
  if (!t || t.length === 0)
    return [["rect"]];
  if (V(t))
    return [[t]];
  for (var e = !0, r = 0; r < t.length; ++r)
    if (!V(t[r])) {
      e = !1;
      break;
    }
  if (e)
    return C_([t]);
  for (var n = [], r = 0; r < t.length; ++r)
    V(t[r]) ? n.push([t[r]]) : n.push(t[r]);
  return n;
}
function D_(t) {
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
    return D_([t]);
  for (var i = [], n = 0; n < t.length; ++n)
    if (we(t[n])) {
      var e = Math.ceil(t[n]);
      i.push([e, e]);
    } else {
      var e = X(t[n], function(s) {
        return Math.ceil(s);
      });
      e.length % 2 === 1 ? i.push(e.concat(e)) : i.push(e);
    }
  return i;
}
function AM(t) {
  if (!t || typeof t == "object" && t.length === 0)
    return [0, 0];
  if (we(t)) {
    var e = Math.ceil(t);
    return [e, e];
  }
  var r = X(t, function(n) {
    return Math.ceil(n);
  });
  return t.length % 2 ? r.concat(r) : r;
}
function IM(t) {
  return X(t, function(e) {
    return E_(e);
  });
}
function E_(t) {
  for (var e = 0, r = 0; r < t.length; ++r)
    e += t[r];
  return t.length % 2 === 1 ? e * 2 : e;
}
var LM = vh(OM);
function OM(t, e) {
  t.eachRawSeries(function(r) {
    if (!t.isSeriesFiltered(r)) {
      var n = r.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var u = n.ensureUniqueItemVisual(o, "style");
          u.decal = Bf(s, e);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = Bf(i, e);
      }
    }
  });
}
var NM = 1, PM = 800, RM = 900, kM = 920, BM = 1e3, VM = 2e3, lp = 5e3, M_ = 1e3, FM = 1100, ic = 2e3, A_ = 3e3, zM = 4e3, uu = 4500, HM = 4600, GM = 5e3, UM = 6e3, I_ = 7e3, WM = {
  PROCESSOR: {
    SERIES_FILTER: PM,
    AXIS_STATISTICS: kM,
    FILTER: BM,
    STATISTIC: lp,
    STATISTICS: lp
  },
  VISUAL: {
    LAYOUT: M_,
    PROGRESSIVE_LAYOUT: FM,
    GLOBAL: ic,
    CHART: A_,
    POST_CHART_LAYOUT: HM,
    COMPONENT: zM,
    BRUSH: GM,
    CHART_ITEM: uu,
    ARIA: UM,
    DECAL: I_
  }
}, De = "__flagInMainProcess", So = "__mainProcessVersion", Ae = "__pendingUpdate", gl = "__needsUpdateStatus", fp = /^[a-zA-Z0-9_]+$/, ml = "__connectUpdateStatus", hp = 0, YM = 1, XM = 2;
function L_(t) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    if (this.isDisposed()) {
      $e(this.id);
      return;
    }
    return N_(this, t, e);
  };
}
function O_(t) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return N_(this, t, e);
  };
}
function N_(t, e, r) {
  return r[0] = r[0] && r[0].toLowerCase(), Jt.prototype[e].apply(t, r);
}
var P_ = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  })(Jt)
), R_ = P_.prototype;
R_.on = O_("on");
R_.off = O_("off");
var tn, yl, To, ar, xo, _l, Sl, Vn, Fn, cp, vp, Tl, dp, wo, pp, k_, vt, gp, zn, B_ = (
  /** @class */
  (function(t) {
    F(e, t);
    function e(r, n, i) {
      var a = t.call(this, new oM()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, a.__v_skip = !0, a._dom = r;
      var o = "canvas", s = "auto", u = !1;
      if (a[So] = 1, process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          q.hasGlobalWindow ? window : global
        );
        l && (o = G(l.__ECHARTS__DEFAULT__RENDERER__, o), s = G(l.__ECHARTS__DEFAULT__COARSE_POINTER, s), u = G(l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, u));
      }
      i.ssr;
      var f = a._zr = Rd(r, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: G(i.useDirtyRect, u),
        useCoarsePointer: G(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = e_(_e(f.flush, f), 17), a._updateTheme(n), a._locale = Gw(i.locale || Zm), a._coordSysMgr = new Nh();
      var h = a._api = pp(a);
      function c(v, d) {
        return v.__prio - d.__prio;
      }
      return Ho(Ls, c), Ho(Ff, c), a._scheduler = new g_(a, h, Ff, Ls), a._messageCenter = new P_(), a._initEvents(), a.resize = _e(a.resize, a), f.animation.on("frame", a._onframe, a), cp(f, a), vp(f, a), Pl(a), a;
    }
    return e.prototype._onframe = function() {
      if (!this._disposed) {
        var r = this._scheduler, n = this._model, i = this._api;
        if (gp(this), this[Ae]) {
          var a = this[Ae].silent;
          this[De] = !0, zn(this);
          try {
            tn(this), ar.update.call(this, null, this[Ae].updateParams);
          } catch (u) {
            throw this[De] = !1, this[Ae] = null, u;
          }
          this._zr.flush(), this[De] = !1, this[Ae] = null, Vn.call(this, a), Fn.call(this, a);
        } else if (r.unfinished) {
          var o = NM;
          do {
            r.unfinished = !1;
            var s = st.getTime();
            r.performSeriesTasks(n), r.performDataProcessorTasks(n), _l(this, n), r.performVisualTasks(n), wo(this, this._model, i, "remain", {}), o -= st.getTime() - s;
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
      if (this[De]) {
        process.env.NODE_ENV !== "production" && oe("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        $e(this.id);
        return;
      }
      var a, o, s;
      if (H(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[De] = !0, zn(this), !this._model || n) {
        var u = new LE(this._api), l = this._theme, f = this._model = new nc();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(r, {
        replaceMerge: o
      }, zf);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (i)
        this[Ae] = {
          silent: a,
          updateParams: h
        }, this[De] = !1, this.getZr().wakeUp();
      else {
        try {
          tn(this), ar.update.call(this, null, h);
        } catch (c) {
          throw this[Ae] = null, this[De] = !1, c;
        }
        this._ssr || this._zr.flush(), this[Ae] = null, this[De] = !1, Vn.call(this, a), Fn.call(this, a);
      }
    }, e.prototype.setTheme = function(r, n) {
      if (this[De]) {
        process.env.NODE_ENV !== "production" && oe("`setTheme` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        $e(this.id);
        return;
      }
      var i = this._model;
      if (i) {
        var a = n && n.silent, o = null;
        this[Ae] && (a == null && (a = this[Ae].silent), o = this[Ae].updateParams, this[Ae] = null), this[De] = !0, zn(this);
        try {
          this._updateTheme(r), i.setTheme(this._theme), tn(this), ar.update.call(this, {
            type: "setTheme"
          }, o);
        } catch (s) {
          throw this[De] = !1, s;
        }
        this[De] = !1, Vn.call(this, a), Fn.call(this, a);
      }
    }, e.prototype._updateTheme = function(r) {
      V(r) && (r = V_[r]), r && (r = ne(r), r && v_(r, !0), this._theme = r);
    }, e.prototype.getModel = function() {
      return this._model;
    }, e.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, e.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, e.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, e.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || q.hasGlobalWindow && window.devicePixelRatio || 1;
    }, e.prototype.getRenderedCanvas = function(r) {
      return process.env.NODE_ENV !== "production" && Le("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(r);
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
      return w(n, function(i) {
        i.stopAnimation(null, !0);
      }), r.painter.toDataURL();
    }, e.prototype.getDataURL = function(r) {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      r = r || {};
      var n = r.excludeComponents, i = this._model, a = [], o = this;
      w(n, function(u) {
        i.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
      return w(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, e.prototype.getConnectedDataURL = function(r) {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      var n = r.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (mp[i]) {
        var u = s, l = s, f = -s, h = -s, c = [], v = r && r.pixelRatio || this.getDevicePixelRatio();
        w(ha, function(_, S) {
          if (_.group === i) {
            var T = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(ne(r)), x = _.getDom().getBoundingClientRect();
            u = a(x.left, u), l = a(x.top, l), f = o(x.right, f), h = o(x.bottom, h), c.push({
              dom: T,
              left: x.left,
              top: x.top
            });
          }
        }), u *= v, l *= v, f *= v, h *= v;
        var d = f - u, m = h - l, p = st.createCanvas(), g = Rd(p, {
          renderer: n ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: m
        }), n) {
          var y = "";
          return w(c, function(_) {
            var S = _.left - u, T = _.top - l;
            y += '<g transform="translate(' + S + "," + T + ')">' + _.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = y, r.connectedBackgroundColor && g.painter.setBackgroundColor(r.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return r.connectedBackgroundColor && g.add(new Me({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: m
            },
            style: {
              fill: r.connectedBackgroundColor
            }
          })), w(c, function(_) {
            var S = new Tn({
              style: {
                x: _.left * v - u,
                y: _.top * v - l,
                image: _.dom
              }
            });
            g.add(S);
          }), g.refreshImmediately(), p.toDataURL("image/" + (r && r.type || "png"));
      } else
        return this.getDataURL(r);
    }, e.prototype.convertToPixel = function(r, n, i) {
      return xo(this, "convertToPixel", r, n, i);
    }, e.prototype.convertToLayout = function(r, n, i) {
      return xo(this, "convertToLayout", r, n, i);
    }, e.prototype.convertFromPixel = function(r, n, i) {
      return xo(this, "convertFromPixel", r, n, i);
    }, e.prototype.containPixel = function(r, n) {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      var i = this._model, a, o = ku(i, r);
      return w(o, function(s, u) {
        u.indexOf("Models") >= 0 && w(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint ? a = a || h.containPoint(n, l) : process.env.NODE_ENV !== "production" && Ke(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && Ke(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, e.prototype.getVisual = function(r, n) {
      var i = this._model, a = ku(i, r, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || Ke("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? lM(s, u, n) : fM(s, n);
    }, e.prototype.getViewOfComponentModel = function(r) {
      return this._componentsMap[r.__viewId];
    }, e.prototype.getViewOfSeriesModel = function(r) {
      return this._chartsMap[r.__viewId];
    }, e.prototype._initEvents = function() {
      var r = this;
      w(ZM, function(i) {
        var a = function(o) {
          var s = r.getModel(), u = o.target, l, f = i === "globalout";
          if (f ? l = {} : u && Ji(u, function(m) {
            var p = Te(m);
            if (p && p.dataIndex != null) {
              var g = p.dataModel || s.getSeriesByIndex(p.seriesIndex);
              return l = g && g.getDataParams(p.dataIndex, p.dataType, u) || {}, !0;
            } else if (p.eventData)
              return l = R({}, p.eventData), !0;
          }, !0), l) {
            var h = l.componentType, c = l.componentIndex;
            (h === "markLine" || h === "markPoint" || h === "markArea") && (h = "series", c = l.seriesIndex);
            var v = h && c != null && s.getComponent(h, c), d = v && r[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !f && !(v && d) && Ke("model or view can not be found by params"), l.event = o, l.type = i, r._$eventProcessor.eventInfo = {
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
      w(Vf, function(i, a) {
        n.on(a, function(o) {
          r.trigger(a, o);
        });
      }), XD(n, this, this._api);
    }, e.prototype.isDisposed = function() {
      return this._disposed;
    }, e.prototype.clear = function() {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, e.prototype.dispose = function() {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      this._disposed = !0;
      var r = this.getDom();
      r && Ug(this.getDom(), oc, "");
      var n = this, i = n._api, a = n._model;
      w(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), w(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete ha[n.id];
    }, e.prototype.resize = function(r) {
      if (this[De]) {
        process.env.NODE_ENV !== "production" && oe("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        $e(this.id);
        return;
      }
      this._zr.resize(r);
      var n = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!n) {
        var i = n.resetOption("media"), a = r && r.silent;
        this[Ae] && (a == null && (a = this[Ae].silent), i = !0, this[Ae] = null), this[De] = !0, zn(this);
        try {
          i && tn(this), ar.update.call(this, {
            type: "resize",
            animation: R({
              // Disable animation
              duration: 0
            }, r && r.animation)
          });
        } catch (o) {
          throw this[De] = !1, o;
        }
        this[De] = !1, Vn.call(this, a), Fn.call(this, a);
      }
    }, e.prototype.showLoading = function(r, n) {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      if (H(r) && (n = r, r = ""), r = r || "default", this.hideLoading(), !Hf[r]) {
        process.env.NODE_ENV !== "production" && Ke("Loading effects " + r + " not exists.");
        return;
      }
      var i = Hf[r](this._api, n), a = this._zr;
      this._loadingFX = i, a.add(i);
    }, e.prototype.hideLoading = function() {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, e.prototype.makeActionFromEvent = function(r) {
      var n = R({}, r);
      return n.type = Is[r.type], n;
    }, e.prototype.dispatchAction = function(r, n) {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      if (H(n) || (n = {
        silent: !!n
      }), !!As[r.type] && this._model) {
        if (this[De]) {
          this._pendingActions.push(r);
          return;
        }
        var i = n.silent;
        Sl.call(this, r, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && q.browser.weChat && this._throttledZrFlush(), Vn.call(this, i), Fn.call(this, i);
      }
    }, e.prototype.updateLabelLayout = function() {
      pt.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, e.prototype.appendData = function(r) {
      if (this._disposed) {
        $e(this.id);
        return;
      }
      var n = r.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      process.env.NODE_ENV !== "production" && O(r.data && a), a.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, e.internalField = (function() {
      tn = function(h) {
        ZC(h._model);
        var c = h._scheduler;
        c.restorePipelines(h._zr, h._model), c.prepareStageTasks(), yl(h, !0), yl(h, !1), c.plan();
      }, yl = function(h, c) {
        for (var v = h._model, d = h._scheduler, m = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, g = h._zr, y = h._api, _ = 0; _ < m.length; _++)
          m[_].__alive = !1;
        c ? v.eachComponent(function(x, b) {
          x !== "series" && S(b);
        }) : v.eachSeries(S);
        function S(x) {
          var b = x.__requireNewView;
          x.__requireNewView = !1;
          var C = "_ec_" + x.id + "_" + x.type, E = !b && p[C];
          if (!E) {
            var D = Ht(x.type), M = c ? Kt.getClass(D.main, D.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              pn.getClass(D.sub)
            );
            process.env.NODE_ENV !== "production" && O(M, D.sub + " does not exist."), E = new M(), E.init(v, y), p[C] = E, m.push(E), g.add(E.group);
          }
          x.__viewId = E.__id = C, E.__alive = !0, E.__model = x, E.group.__ecComponentInfo = {
            mainType: x.mainType,
            index: x.componentIndex
          }, !c && d.prepareView(E, x, v, y);
        }
        for (var _ = 0; _ < m.length; ) {
          var T = m[_];
          T.__alive ? _++ : (!c && T.renderTask.dispose(), g.remove(T.group), T.dispose(v, y), m.splice(_, 1), p[T.__id] === T && delete p[T.__id], T.__id = T.group.__ecComponentInfo = null);
        }
      }, To = function(h, c, v, d, m) {
        var p = h._model;
        if (p.setUpdatePayload(v), !d) {
          w([].concat(h._componentsViews).concat(h._chartsViews), S);
          return;
        }
        var g = FS(v, d, m), y = v.excludeSeriesId, _;
        y != null && (_ = W(), w(Ye(y), function(T) {
          var x = Xt(T, null);
          x != null && _.set(x, !0);
        })), p && p.eachComponent(g, function(T) {
          var x = _ && _.get(T.id) != null;
          if (!x)
            if (Tv(v))
              if (T instanceof mn)
                v.type === dn && !v.notBlur && !T.get(["emphasis", "disabled"]) && fT(T, v, h._api);
              else {
                var b = yh(T.mainType, T.componentIndex, v.name, h._api), C = b.focusSelf, E = b.dispatchers;
                v.type === dn && C && !v.notBlur && sf(T.mainType, T.componentIndex, h._api), E && w(E, function(D) {
                  v.type === dn ? nf(D) : af(D);
                });
              }
            else lf(v) && T instanceof mn && (vT(T, v, h._api), _v(T), vt(h));
        }, h), p && p.eachComponent(g, function(T) {
          var x = _ && _.get(T.id) != null;
          x || S(h[d === "series" ? "_chartsMap" : "_componentsMap"][T.__viewId]);
        }, h);
        function S(T) {
          T && T.__alive && T[c] && T[c](T.__model, p, h._api, v);
        }
      }, ar = {
        prepareAndUpdate: function(h) {
          tn(this), ar.update.call(this, h, h && {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, c) {
          var v = this._model, d = this._api, m = this._zr, p = this._coordSysMgr, g = this._scheduler;
          if (v) {
            $C(v), v.setUpdatePayload(h), g.restoreData(v, h), g.performSeriesTasks(v), p.create(v, d), pt.trigger("coordsys:aftercreate", v, d), g.performDataProcessorTasks(v, h), _l(this, v), p.update(v, d), n(v), g.performVisualTasks(v, h);
            var y = v.get("backgroundColor") || "transparent";
            m.setBackgroundColor(y);
            var _ = v.get("darkMode");
            _ != null && _ !== "auto" && m.setDarkMode(_), Tl(this, v, d, h, c), pt.trigger("afterupdate", v, d);
          }
        },
        /**
         * PENDING: See INCONSISTENCY_OF_BRUSH_SELECTED_EVENT_IN_UPDATE_TRANSFORM
         */
        updateTransform: function(h) {
          var c = this, v = c._model, d = c._api;
          if (v) {
            v.setUpdatePayload(h);
            var m = [];
            v.eachComponent(function(g, y) {
              if (g !== Xg) {
                var _ = c.getViewOfComponentModel(y);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var S = _.updateTransform(y, v, d, h);
                    S && S.update && m.push(_);
                  } else
                    m.push(_);
              }
            });
            var p = W();
            v.eachSeries(function(g) {
              var y = c._chartsMap[g.__viewId], _ = g.pipelineContext;
              if (y.updateTransform && !_.progressiveRender) {
                var S = y.updateTransform(g, v, d, h);
                S && S.update && p.set(g.uid, 1);
              } else
                p.set(g.uid, 1);
            }), c._scheduler.performVisualTasks(v, h, {
              setDirty: !0,
              dirtyMap: p
            }), wo(c, v, d, h, {}, p), pt.trigger("afterupdate", v, d);
          }
        },
        updateView: function(h) {
          var c = this._model;
          c && (c.setUpdatePayload(h), pn.markUpdateMethod(h, "updateView"), n(c), this._scheduler.performVisualTasks(c, h, {
            setDirty: !0
          }), Tl(this, c, this._api, h, {}), pt.trigger("afterupdate", c, this._api));
        },
        updateVisual: function(h) {
          var c = this, v = this._model;
          v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), pn.markUpdateMethod(h, "updateVisual"), n(v), this._scheduler.performVisualTasks(v, h, {
            visualType: "visual",
            setDirty: !0
          }), v.eachComponent(function(d, m) {
            if (d !== "series") {
              var p = c.getViewOfComponentModel(m);
              p && p.__alive && p.updateVisual(m, v, c._api, h);
            }
          }), v.eachSeries(function(d) {
            var m = c._chartsMap[d.__viewId];
            m.updateVisual(d, v, c._api, h);
          }), pt.trigger("afterupdate", v, this._api));
        },
        /**
         * @deprecated
         */
        updateLayout: function(h) {
          ar.update.call(this, h);
        }
      };
      function r(h, c, v, d, m) {
        if (h._disposed) {
          $e(h.id);
          return;
        }
        for (var p = h._model, g = h._coordSysMgr.getCoordinateSystems(), y, _ = ku(p, v), S = 0; S < g.length; S++) {
          var T = g[S];
          if (T[c] && (y = T[c](p, _, d, m)) != null)
            return y;
        }
        process.env.NODE_ENV !== "production" && Ke("No coordinate system that supports " + c + " found by the given finder.");
      }
      xo = r, _l = function(h, c) {
        var v = h._chartsMap, d = h._scheduler;
        c.eachSeries(function(m) {
          d.updateStreamModes(m, v[m.__viewId]);
        });
      }, Sl = function(h, c) {
        var v = this, d = this.getModel(), m = h.type, p = h.escapeConnect, g = As[m], y = (g.update || "update").split(":"), _ = y.pop(), S = y[0] != null && Ht(y[0]);
        this[De] = !0, zn(this);
        var T = [h], x = !1;
        h.batch && (x = !0, T = X(h.batch, function(N) {
          return N = ye(R({}, N), h), N.batch = null, N;
        }));
        var b = [], C, E = [], D = g.nonRefinedEventType, M = lf(h), I = Tv(h);
        if (I && nm(this._api), w(T, function(N) {
          var z = g.action(N, d, v._api);
          if (g.refineEvent ? E.push(z) : C = z, C = C || R({}, N), C.type = D, b.push(C), I) {
            var Q = hh(h), ee = Q.queryOptionMap, te = Q.mainTypeSpecified, J = te ? ee.keys()[0] : "series";
            To(v, _, N, J), vt(v);
          } else M ? (To(v, _, N, "series"), vt(v)) : S && To(v, _, N, S.main, S.sub);
        }), _ !== "none" && !I && !M && !S)
          try {
            this[Ae] ? (tn(this), ar.update.call(this, h), this[Ae] = null) : ar[_].call(this, h);
          } catch (N) {
            throw this[De] = !1, N;
          }
        if (x ? C = {
          type: D,
          escapeConnect: p,
          batch: b
        } : C = b[0], this[De] = !1, !c) {
          var A = void 0;
          if (g.refineEvent) {
            var L = g.refineEvent(E, h, d, this._api).eventContent;
            O(H(L)), A = ye({
              type: g.refinedEventType
            }, L), A.fromAction = h.type, A.fromActionPayload = h, A.escapeConnect = !0;
          }
          var k = this._messageCenter;
          k.trigger(C.type, C), A && k.trigger(A.type, A);
        }
      }, Vn = function(h) {
        for (var c = this._pendingActions; c.length; ) {
          var v = c.shift();
          Sl.call(this, v, h);
        }
      }, Fn = function(h) {
        !h && this.trigger("updated");
      }, cp = function(h, c) {
        h.on("rendered", function(v) {
          c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !c[Ae] && !c._scheduler.unfinished && !c._pendingActions.length ? c.trigger("finished") : h.refresh();
        });
      }, vp = function(h, c) {
        h.on("mouseover", function(v) {
          var d = v.target, m = Ji(d, ci);
          m && (hT(m, v, c._api), vt(c));
        }).on("mouseout", function(v) {
          var d = v.target, m = Ji(d, ci);
          m && (cT(m, v, c._api), vt(c));
        }).on("click", function(v) {
          var d = v.target, m = Ji(d, function(y) {
            return Te(y).dataIndex != null;
          }, !0);
          if (m) {
            var p = m.selected ? "unselect" : "select", g = Te(m);
            c._api.dispatchAction({
              type: p,
              dataType: g.dataType,
              dataIndexInside: g.dataIndex,
              seriesIndex: g.seriesIndex,
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
          var S = _.get("zlevel") || 0, T = _.get("z") || 0, x = _.getZLevelKey();
          d = d || !!x, (y === "series" ? v : c).push({
            zlevel: S,
            z: T,
            idx: _.componentIndex,
            type: y,
            key: x
          });
        }), d) {
          var m = c.concat(v), p, g;
          Ho(m, function(y, _) {
            return y.zlevel === _.zlevel ? y.z - _.z : y.zlevel - _.zlevel;
          }), w(m, function(y) {
            var _ = h.getComponent(y.type, y.idx), S = y.zlevel, T = y.key;
            p != null && (S = Math.max(p, S)), T ? (S === p && T !== g && S++, g = T) : g && (S === p && S++, g = ""), p = S, _.setZLevel(S);
          });
        }
      }
      Tl = function(h, c, v, d, m) {
        i(c), dp(h, c, v, d, m), w(h._chartsViews, function(p) {
          p.__alive = !1;
        }), wo(h, c, v, d, m), w(h._chartsViews, function(p) {
          p.__alive || p.remove(c, v);
        });
      }, dp = function(h, c, v, d, m, p) {
        w(p || h._componentsViews, function(g) {
          var y = g.__model;
          l(y, g), g.render(y, c, v, d), u(y, g), f(y, g);
        });
      }, wo = function(h, c, v, d, m, p) {
        var g = h._scheduler;
        m = R(m || {}, {
          updatedSeries: c.getSeries()
        }), pt.trigger("series:beforeupdate", c, v, m);
        var y = !1;
        c.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          S.__alive = !0;
          var T = S.renderTask;
          g.updatePayload(T, d), l(_, S), p && p.get(_.uid) && T.dirty(), T.perform(g.getPerformArgs(T)) && (y = !0), S.group.silent = !!_.get("silent"), s(_, S), _v(_);
        }), g.unfinished = y || g.unfinished, pt.trigger("series:layoutlabels", c, v, m), pt.trigger("series:transition", c, v, m), c.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          u(_, S), f(_, S);
        }), o(h, c), pt.trigger("series:afterupdate", c, v, m);
      }, vt = function(h) {
        h[gl] = !0, h.getZr().wakeUp();
      }, zn = function(h) {
        h[So] = (h[So] + 1) % 1e6;
      }, gp = function(h) {
        h[gl] && (h.getZr().storage.traverse(function(c) {
          aa(c) || a(c);
        }), h[gl] = !1);
      };
      function a(h) {
        for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
          var m = v[d];
          m === "emphasis" || m === "blur" || m === "select" || c.push(m);
        }
        h.selected && h.states.select && c.push("select"), h.hoverState === Ws && h.states.emphasis ? c.push("emphasis") : h.hoverState === Us && h.states.blur && c.push("blur"), h.useStates(c);
      }
      function o(h, c) {
        var v = h._zr;
        if (v.painter.type === "canvas") {
          var d = v.storage, m = 0;
          d.traverse(function(g) {
            g.isGroup || m++;
          });
          var p = m > G(c.get("hoverLayerThreshold"), h_.hoverLayerThreshold) && !q.node && !q.worker;
          (h._usingTHL || p) && (c.eachSeries(function(g) {
            if (!g.preventUsingHoverLayer) {
              var y = h._chartsMap[g.__viewId];
              y.__alive && y.eachRendered(function(_) {
                var S = _.states.emphasis;
                S && S.hoverLayer !== gm && (S.hoverLayer = p ? pm : dm);
              });
            }
          }), h._usingTHL = p);
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
          var v = wm(h);
          c.eachRendered(function(d) {
            return bm(d, v.z, v.zlevel), !0;
          });
        }
      }
      function l(h, c) {
        c.eachRendered(function(v) {
          if (!aa(v)) {
            var d = v.getTextContent(), m = v.getTextGuideLine();
            v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), m && m.stateTransition && (m.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
          }
        });
      }
      function f(h, c) {
        var v = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), m = v.get("duration"), p = m > 0 ? {
          duration: m,
          delay: v.get("delay"),
          easing: v.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        c.eachRendered(function(g) {
          if (g.states && g.states.emphasis) {
            if (aa(g))
              return;
            if (g instanceof Se && _T(g), g.__dirty) {
              var y = g.prevStates;
              y && g.useStates(y);
            }
            if (d) {
              g.stateTransition = p;
              var _ = g.getTextContent(), S = g.getTextGuideLine();
              _ && (_.stateTransition = p), S && (S.stateTransition = p);
            }
            g.__dirty && a(g);
          }
        });
      }
      pp = function(h) {
        return new /** @class */
        ((function(c) {
          F(v, c);
          function v() {
            return c !== null && c.apply(this, arguments) || this;
          }
          return v.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, v.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var m = d.__ecComponentInfo;
              if (m != null)
                return h._model.getComponent(m.mainType, m.index);
              d = d.parent;
            }
          }, v.prototype.enterEmphasis = function(d, m) {
            nf(d, m), vt(h);
          }, v.prototype.leaveEmphasis = function(d, m) {
            af(d, m), vt(h);
          }, v.prototype.enterBlur = function(d) {
            lT(d), vt(h);
          }, v.prototype.leaveBlur = function(d) {
            jg(d), vt(h);
          }, v.prototype.enterSelect = function(d) {
            em(d), vt(h);
          }, v.prototype.leaveSelect = function(d) {
            tm(d), vt(h);
          }, v.prototype.getModel = function() {
            return h.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, v.prototype.getECUpdateCycleVersion = function() {
            return h[So];
          }, v.prototype.usingTHL = function() {
            return h._usingTHL;
          }, v;
        })($g))(h);
      }, k_ = function(h) {
        function c(v, d) {
          for (var m = 0; m < v.length; m++) {
            var p = v[m];
            p[ml] = d;
          }
        }
        w(Is, function(v, d) {
          h._messageCenter.on(d, function(m) {
            if (mp[h.group] && h[ml] !== hp) {
              if (m && m.escapeConnect)
                return;
              var p = h.makeActionFromEvent(m), g = [];
              w(ha, function(y) {
                y !== h && y.group === h.group && g.push(y);
              }), c(g, hp), w(g, function(y) {
                y[ml] !== YM && y.dispatchAction(p);
              }), c(g, XM);
            }
          });
        });
      };
    })(), e;
  })(Jt)
), ac = B_.prototype;
ac.on = L_("on");
ac.off = L_("off");
ac.one = function(t, e, r) {
  var n = this;
  hr("ECharts#one is deprecated.");
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    e && e.apply && e.apply(this, a), n.off(t, i);
  }
  this.on.call(this, t, i, r);
};
var ZM = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function $e(t) {
  process.env.NODE_ENV !== "production" && Ke("Instance " + t + " has been disposed");
}
var As = {}, Is = {}, Vf = {}, Ff = [], zf = [], Ls = [], V_ = {}, Hf = {}, ha = {}, mp = {}, $M = +/* @__PURE__ */ new Date() - 0, oc = "_echarts_instance_";
function pL(t, e, r) {
  var n = !(r && r.ssr);
  if (n) {
    if (process.env.NODE_ENV !== "production" && !t)
      throw new Error("Initialize failed: invalid dom.");
    var i = qM(t);
    if (i)
      return process.env.NODE_ENV !== "production" && Ke("There is a chart instance already initialized on the dom."), i;
    process.env.NODE_ENV !== "production" && ri(t) && t.nodeName.toUpperCase() !== "CANVAS" && (!t.clientWidth && (!r || r.width == null) || !t.clientHeight && (!r || r.height == null)) && Ke("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new B_(t, e, r);
  return a.id = "ec_" + $M++, ha[a.id] = a, n && Ug(t, oc, a.id), k_(a), pt.trigger("afterinit", a), a;
}
function qM(t) {
  return ha[zS(t, oc)];
}
function F_(t, e) {
  V_[t] = e;
}
function z_(t) {
  ue(zf, t) < 0 && zf.push(t);
}
function H_(t, e) {
  uc(Ff, t, e, VM);
}
function KM(t) {
  sc("afterinit", t);
}
function QM(t) {
  sc("afterupdate", t);
}
function sc(t, e) {
  pt.on(t, e);
}
function Ci(t, e, r) {
  var n, i, a, o, s;
  $(e) && (r = e, e = ""), H(t) ? (n = t.type, i = t.event, o = t.update, s = t.publishNonRefinedEvent, r || (r = t.action), a = t.refineEvent) : (n = t, i = e);
  function u(f) {
    return f.toLowerCase();
  }
  i = u(i || n);
  var l = a ? u(n) : i;
  As[n] || (O(fp.test(n) && fp.test(i)), a && O(i !== n), As[n] = {
    actionType: n,
    refinedEventType: i,
    nonRefinedEventType: l,
    update: o,
    action: r,
    refineEvent: a
  }, Vf[i] = 1, a && s && (Vf[l] = 1), process.env.NODE_ENV !== "production" && Is[l] && oe(l + ' must not be shared; use "refineEvent" if you intend to share an event name.'), Is[l] = n);
}
function JM(t, e) {
  Nh.register(t, e);
}
function jM(t, e) {
  uc(Ls, t, e, M_, "layout", !0);
}
function bn(t, e) {
  uc(Ls, t, e, A_, "visual", !0);
}
var yp = [];
function uc(t, e, r, n, i, a) {
  if (($(e) || H(e)) && (r = e, e = n), process.env.NODE_ENV !== "production") {
    if (isNaN(e) || e == null)
      throw new Error("Illegal priority");
    w(t, function(s) {
      O(s.__raw !== r);
    });
  }
  if (!(ue(yp, r) >= 0)) {
    yp.push(r);
    var o = g_.wrapStageHandler(r, i);
    o.__prio = e, o.__raw = r, t.push(o), process.env.NODE_ENV !== "production" && a && O(!o.dirtyOnOverallProgress, "dirtyOnOverallProgress is not allowed in " + i + " stage; otherwise progressive rendering is disabled on all series.");
  }
}
function G_(t, e) {
  Hf[t] = e;
}
function eA(t, e, r) {
  var n = cM("registerMap");
  n && n(t, e, r);
}
var tA = _b;
bn(ic, ZE);
bn(uu, $E);
bn(uu, qE);
bn(ic, sM);
bn(uu, uM);
bn(I_, LM);
z_(v_);
H_(RM, UE);
G_("default", KE);
Ci({
  type: dn,
  event: dn,
  update: dn
}, Ve);
Ci({
  type: Lo,
  event: Lo,
  update: Lo
}, Ve);
Ci({
  type: rs,
  event: gh,
  update: rs,
  action: Ve,
  refineEvent: lc,
  publishNonRefinedEvent: !0
});
Ci({
  type: rf,
  event: gh,
  update: rf,
  action: Ve,
  refineEvent: lc,
  publishNonRefinedEvent: !0
});
Ci({
  type: ns,
  event: gh,
  update: ns,
  action: Ve,
  refineEvent: lc,
  publishNonRefinedEvent: !0
});
function lc(t, e, r, n) {
  return {
    eventContent: {
      selected: dT(r),
      isFromClick: e.isFromClick || !1
    }
  };
}
F_("default", {});
F_("dark", S_);
var _p = [], rA = {
  registerPreprocessor: z_,
  registerProcessor: H_,
  registerPostInit: KM,
  registerPostUpdate: QM,
  registerUpdateLifecycle: sc,
  registerAction: Ci,
  registerCoordinateSystem: JM,
  registerLayout: jM,
  registerVisual: bn,
  registerTransform: tA,
  registerLoading: G_,
  registerMap: eA,
  registerImpl: hM,
  PRIORITY: WM,
  ComponentModel: le,
  ComponentView: Kt,
  SeriesModel: mn,
  ChartView: pn,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(t) {
    le.registerClass(t);
  },
  registerComponentView: function(t) {
    Kt.registerClass(t);
  },
  registerSeriesModel: function(t) {
    mn.registerClass(t);
  },
  registerChartView: function(t) {
    pn.registerClass(t);
  },
  registerCustomSeries: function(t, e) {
  },
  registerSubTypeDefaulter: function(t, e) {
    le.registerSubTypeDefaulter(t, e);
  },
  registerPainter: function(t, e) {
    TE(t, e);
  }
};
function Sn(t) {
  if (B(t)) {
    w(t, function(e) {
      Sn(e);
    });
    return;
  }
  ue(_p, t) >= 0 || (_p.push(t), $(t) && (t = {
    install: t
  }), t.install(rA));
}
var nA = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.needIncludeZero = function() {
      return !this.option.scale;
    }, t.prototype.getCoordSysModel = function() {
    }, t;
  })()
), Gf = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", xt).models[0];
    }, e.type = "cartesian2dAxis", e;
  })(le)
);
Qt(Gf, nA);
var U_ = {
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
      color: Y.color.axisLine,
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
    color: Y.color.axisLabel,
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
      color: Y.color.axisSplitLine,
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: [Y.color.backgroundTint, Y.color.backgroundTransparent]
    }
  },
  breakArea: {
    show: !0,
    itemStyle: {
      color: Y.color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: Y.color.border,
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
}, iA = ce({
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
}, U_), fc = ce({
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
      color: Y.color.axisMinorSplitLine,
      width: 1
    }
  }
}, U_), aA = ce({
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
}, fc), oA = ye({
  logBase: 10
}, fc);
const sA = {
  category: iA,
  value: fc,
  time: aA,
  log: oA
};
function Sp(t, e, r, n) {
  w(Cy, function(i, a) {
    var o = ce(ce({}, sA[a], !0), n, !0), s = (
      /** @class */
      (function(u) {
        F(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = e + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, h) {
          var c = Sa(this), v = c ? Ba(f) : {}, d = h.getTheme();
          ce(f, d.get(a + "Axis")), ce(f, this.getDefaultOption()), f.type = Tp(f), c && Lr(f, v, c);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = wf.createByAxisModel(this));
        }, l.prototype.getCategories = function(f) {
          var h = this.option;
          if (h.type === "category")
            return f ? h.data : this.__ordinalMeta.categories;
        }, l.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, l.prototype.updateAxisBreaks = function(f) {
          var h = su();
          return h ? h.updateModelAxisBreak(this, f) : {
            breaks: []
          };
        }, l.type = e + "Axis." + a, l.defaultOption = o, l;
      })(r)
    );
    t.registerComponentModel(s);
  }), t.registerSubTypeDefaulter(e + "Axis", Tp);
}
function Tp(t) {
  return t.type || (t.data ? "category" : "value");
}
var uA = (
  /** @class */
  (function() {
    function t(e) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = e || "";
    }
    return t.prototype.getAxis = function(e) {
      return this._axes[e];
    }, t.prototype.getAxes = function() {
      return X(this._dimList, function(e) {
        return this._axes[e];
      }, this);
    }, t.prototype.getAxesByScale = function(e) {
      return e = e.toLowerCase(), Be(this.getAxes(), function(r) {
        return r.scale.type === e;
      });
    }, t.prototype.addAxis = function(e) {
      var r = e.dim;
      this._axes[r] = e, this._dimList.push(r);
    }, t;
  })()
), Uo = ["x", "y"];
function xp(t) {
  return (t.type === "interval" || t.type === "time") && !gn(t);
}
var lA = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = zo, r.dimensions = Uo, r;
    }
    return e.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var r = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!xp(r) || !xp(n))) {
        var i = fs(r, null), a = fs(n, null), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), u = i[1] - i[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, h = (s[1] - o[1]) / l, c = o[0] - i[0] * f, v = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, c, v];
          this._invTransform = Aa([], d);
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
      var i = this.dataToPoint(r), a = this.dataToPoint(n), o = this.getArea(), s = new Z(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, e.prototype.dataToPoint = function(r, n, i) {
      i = i || [];
      var a = r[0], o = r[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return Ct(i, r, this._transform);
      var s = this.getAxis("x"), u = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = u.toGlobalCoord(u.dataToCoord(o, n)), i;
    }, e.prototype.clampData = function(r, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), u = i.parse(r[0]), l = a.parse(r[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), u), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), l), Math.max(s[0], s[1])), n;
    }, e.prototype.pointToData = function(r, n, i) {
      if (i = i || [], this._invTransform)
        return Ct(i, r, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(r[0]), n), i[1] = o.coordToData(o.toLocalCoord(r[1]), n), i;
    }, e.prototype.getOtherAxis = function(r) {
      return this.getAxis(r.dim === "x" ? "y" : "x");
    }, e.prototype.getArea = function(r) {
      r = r || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - r, o = Math.min(i[0], i[1]) - r, s = Math.max(n[0], n[1]) - a + r, u = Math.max(i[0], i[1]) - o + r;
      return new Z(a, o, s, u);
    }, e;
  })(uA)
);
function fA(t, e) {
  var r = t.scale, n = t.model;
  process.env.NODE_ENV !== "production" && O(r && n && (r instanceof Dr || r instanceof cs) && (e instanceof Dr || e instanceof cs));
  var i = Jy(r, n, n.ecModel, t), a = pi(r), o = pi(e) ? e.intervalStub : e, s = a ? r.intervalStub : r, u = r.base, l = o.getTicks(), f = o.getTicks({
    expandToNicedExtent: !0
  }), h = l.length - 1;
  process.env.NODE_ENV !== "production" && (O(!gn(e) && !gn(r)), O(h > 0), O(f.length === l.length), O(l[0].value <= l[h].value), O(f[0].value <= l[0].value && l[h].value <= f[h].value), h >= 2 && (O(f[1].value === l[1].value), O(f[h - 1].value === l[h - 1].value)));
  var c, v, d;
  if (h === 1)
    c = v = 0, d = 1;
  else if (h === 2) {
    var m = Oe(l[0].value - l[1].value), p = Oe(l[1].value - l[2].value);
    c = v = 0, m === p ? d = 2 : (d = 1, m < p ? c = m / p : v = p / m);
  } else {
    var g = o.getConfig().interval;
    c = (1 - (l[0].value - f[0].value) / g) % 1, v = (1 - (f[h].value - l[h].value) / g) % 1, d = h - (c ? 1 : 0) - (v ? 1 : 0);
  }
  process.env.NODE_ENV !== "production" && O(d >= 1);
  var y = i.zoomFixMM, _ = y[0] || y[1], S = [i.fixMM[0] || _, i.fixMM[1] || _], T = r.getExtent(), x = s.getExtent(), b = Sy(x, S), C, E, D, M, I, A;
  function L(re) {
    for (var j = 50, U = 0; U < j && !re(); U++)
      D = a ? D * ve(u, 2) : hC(D), M = yn(D);
    process.env.NODE_ENV !== "production" && U >= j && Ke("incorrect impl in `scaleCalcAlign`.");
  }
  function k() {
    C = ae(A - D * c, M);
  }
  function N() {
    E = ae(I + D * v, M);
  }
  function z() {
    A = c ? ae(C + D * c, M) : C;
  }
  function Q() {
    I = v ? ae(E - D * v, M) : E;
  }
  if (S[0] && S[1]) {
    C = b[0], E = b[1], D = (E - C) / (d + c + v);
    var ee = t.getExtent(), te = Oe(ee[1] - ee[0]);
    M = xS([E, C], te, 0.5 / d), z(), Q(), $t(M) && (D = ae(D, M));
  } else {
    var J = b[1] - b[0];
    D = a ? ve(kg(J), 1) : uh(J / d, Bg), M = yn(D), S[0] ? (C = b[0], L(function() {
      if (z(), I = ae(A + D * d, M), N(), E >= b[1])
        return !0;
    })) : S[1] ? (E = b[1], L(function() {
      if (Q(), A = ae(I - D * d, M), k(), C <= b[0])
        return !0;
    })) : L(function() {
      A = ae(Na(b[0] / D) * D, M), I = ae(li(b[1] / D) * D, M);
      var re = fr((I - A) / D);
      if (re <= d) {
        var j = d - re, U = void 0, se = i.incl0 || a;
        if (se && b[0] === 0)
          U = [0, j];
        else if (se && b[1] === 0)
          U = [j, 0];
        else {
          var he = li(j / 2);
          U = j % 2 === 0 ? [he, he] : C + E < b[0] + b[1] ? [he, he + 1] : [he + 1, he];
        }
        if (A = ae(A - D * U[0], M), I = ae(I + D * U[1], M), k(), N(), C <= b[0] && E >= b[1])
          return !0;
      }
    });
  }
  My(r, S, x, [C, E], T, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: D,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: d,
    intervalPrecision: M,
    niceExtent: [A, I]
  }), process.env.NODE_ENV !== "production" && r.freeze();
}
function wp(t, e) {
  var r = pi(t), n = r ? t.intervalStub : t, i = e.fixMinMax || [], a = r ? t.getExtent() : null, o = n.getExtent(), s = Sy(o, i, e.rawExtentResult);
  n.setExtent(s[0], s[1]), s = n.getExtent();
  var u = r ? cA(n, e) : hA(n, e), l = u.intervalPrecision, f = u.interval, h = e.userInterval;
  h != null && (u.interval = h, u.intervalPrecision = yn(h)), i[0] || (s[0] = ae(li(s[0] / f) * f, l)), i[1] || (s[1] = ae(Na(s[1] / f) * f, l)), h != null && (u.niceExtent = s.slice()), My(t, i, o, s, a, u);
}
function hA(t, e) {
  var r = Kh(e.splitNumber, 5), n = ru(t);
  process.env.NODE_ENV !== "production" && O(isFinite(n) && n > 0);
  var i = e.minInterval, a = e.maxInterval, o = uh(n / r, !0);
  i != null && o < i && (o = i), a != null && o > a && (o = a);
  var s = yn(o), u = t.getExtent(), l = [ae(Na(u[0] / o) * o, s), ae(li(u[1] / o) * o, s)];
  return {
    interval: o,
    intervalPrecision: s,
    niceExtent: l
  };
}
function cA(t, e) {
  var r = Kh(e.splitNumber, 10), n = t.getExtent(), i = ru(t);
  process.env.NODE_ENV !== "production" && O(isFinite(i) && i > 0);
  var a = ve(kg(i), 1), o = r / i * a;
  o <= 0.5 && (a *= 10);
  var s = yn(a), u = [ae(Na(n[0] / a) * a, s), ae(li(n[1] / a) * a, s)];
  return {
    intervalPrecision: s,
    interval: a,
    niceExtent: u
  };
}
function bp(t) {
  var e = t.scale, r = t.model, n = r.axis, i = r.ecModel;
  process.env.NODE_ENV !== "production" && O(n && i), vA(e, r, n, i);
}
function vA(t, e, r, n, i) {
  var a = Jy(t, e, n, r), o = hs(t) || qh(t);
  dA(t, {
    splitNumber: e.get("splitNumber"),
    fixMinMax: a.fixMM,
    userInterval: e.get("interval"),
    minInterval: o ? e.get("minInterval") : null,
    maxInterval: o ? e.get("maxInterval") : null,
    rawExtentResult: a
  }), r && n && WD(r, t, a, n), process.env.NODE_ENV !== "production" && t.freeze();
}
function dA(t, e) {
  pA[t.type](t, e);
}
var pA = {
  interval: wp,
  log: wp,
  time: TC,
  ordinal: Ve
}, Cp = [
  [3, 1],
  [0, 2]
  // xyIdx 1 => 'y'
], gA = (
  /** @class */
  (function() {
    function t(e, r, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Uo, this._initCartesian(e, r, n), this.model = e;
    }
    return t.prototype.getRect = function() {
      return this._rect;
    }, t.prototype.update = function(e, r) {
      var n = this._axesMap;
      w(this._axesList, function(o) {
        zD(o, RD);
        var s = o.scale;
        er(s) && s.setSortInfo(o.model.get("categorySortInfo"));
      });
      function i(o) {
        for (var s = me(o), u = [], l = s.length - 1; l >= 0; l--) {
          var f = o[+s[l]];
          f.__alignTo ? u.push(f) : bp(f);
        }
        w(u, function(h) {
          yA(h, h.__alignTo) ? bp(h) : fA(h, h.__alignTo.scale);
        });
      }
      i(n.x), i(n.y);
      var a = {};
      w(n.x, function(o) {
        Dp(n, "y", o, a);
      }), w(n.y, function(o) {
        Dp(n, "x", o, a);
      }), this.resize(this.model, r);
    }, t.prototype.resize = function(e, r, n) {
      var i = oy(e, r), a = this._rect = _a(e.getBoxLayoutParams(), i.refContainer), o = this._axesMap, s = this._coordsList, u = e.get("containLabel");
      if (W_(o, a), !n) {
        var l = SA(a, s, o, u, r), f = void 0;
        if (u)
          process.env.NODE_ENV !== "production" && zg("Specified `grid.containLabel` but no `use(LegacyGridContainLabel)`;use `grid.outerBounds` instead.", !0), f = Ip(a.clone(), "axisLabel", null, a, o, l, i);
        else {
          var h = TA(e, a, i), c = h.outerBoundsRect, v = h.parsedOuterBoundsContain, d = h.outerBoundsClamp;
          c && (f = Ip(c, v, d, a, o, l, i));
        }
        Y_(a, o, Mt.determine, null, f, i), w(this._coordsList, function(m) {
          m.calcAffineTransform();
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
      H(e) && (r = e.yAxisIndex, e = e.xAxisIndex);
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
      var r = e.seriesModel, n = e.xAxisModel || r && r.getReferringComponents("xAxis", xt).models[0], i = e.yAxisModel || r && r.getReferringComponents("yAxis", xt).models[0], a = e.gridModel, o = this._coordsList, s, u;
      if (r)
        s = r.coordinateSystem, ue(o, s) < 0 && (s = null);
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
      this._axesMap = s, w(s.x, function(f, h) {
        w(s.y, function(c, v) {
          var d = "x" + h + "y" + v, m = new lA(d);
          m.master = i, m.model = e, i._coordsMap[d] = m, i._coordsList.push(m), m.addAxis(f), m.addAxis(c);
        });
      }), Mp(s.x), Mp(s.y);
      function l(f) {
        return function(h, c) {
          if (mA(h, e)) {
            var v = h.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = wC(h), m = new uD(f, bC(h, d), [0, 0], d, v);
            m.onBand = Ay(m.scale, h), m.inverse = h.get("inverse"), h.axis = m, m.model = h, m.grid = a, m.index = c, a._axesList.push(m), s[f][c] = m, u[f]++;
          }
        };
      }
    }, t.prototype.getTooltipAxes = function(e) {
      var r = [], n = [];
      return w(this.getCartesians(), function(i) {
        var a = e != null && e !== "auto" ? i.getAxis(e) : i.getBaseAxis(), o = i.getOtherAxis(a);
        ue(r, a) < 0 && r.push(a), ue(n, o) < 0 && n.push(o);
      }), {
        baseAxes: r,
        otherAxes: n
      };
    }, t.create = function(e, r) {
      var n = [];
      return e.eachComponent("grid", function(i, a) {
        var o = new t(i, e, r);
        o.name = "grid_" + a, o.resize(i, r, !0), i.coordinateSystem = o, n.push(o), w(o._axesList, function(s) {
          FD(s, t.dimIdxMap);
        });
      }), e.eachSeries(function(i) {
        var a, o;
        mw({
          targetModel: i,
          coordSysType: zo,
          coordSysProvider: s
        });
        function s() {
          var u = LD(i), l = u.xAxisModel, f = u.yAxisModel;
          a = l.axis, o = f.axis;
          var h = l.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!h)
              throw new Error('Grid "' + wr(l.get("gridIndex"), l.get("gridId"), 0) + '" not found');
            if (l.getCoordSysModel() !== f.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var c = h.coordinateSystem;
          return c.getCartesian(l.componentIndex, f.componentIndex);
        }
        a && o && (vd(a, i, zo), vd(o, i, zo));
      }, this), n;
    }, t.dimensions = Uo, t.dimIdxMap = Oh(Uo), t;
  })()
);
function mA(t, e) {
  return t.getCoordSysModel() === e;
}
function Dp(t, e, r, n) {
  r.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = t[e], a, o = r.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    Ep(s, i[u]) && (a = i[u]);
  else
    for (var l in i)
      if (et(i, l) && Ep(s, i[l]) && !n[f(i[l])]) {
        a = i[l];
        break;
      }
  a && (n[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function Ep(t, e) {
  if (!e)
    return !1;
  var r = e.scale, n = CC(r, 0), i = e && e.type !== "category" && e.type !== "time" && n !== bf;
  return i && t === "auto" && AC(e) && (i = !1), i;
}
function Mp(t) {
  for (var e = me(t), r, n = [], i = e.length - 1; i >= 0; i--) {
    var a = t[+e[i]];
    _y(a.scale) && Ey(a.model, a.type) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? n.push(a) : r = a);
  }
  r || (r = n.pop()), r && w(n, function(o) {
    o.__alignTo = r;
  });
}
function yA(t, e) {
  return gn(t.scale) || gn(e.scale) || e.scale.getTicks().length < 2;
}
function _A(t, e) {
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
function W_(t, e) {
  w(t.x, function(r) {
    return Ap(r, e.x, e.width);
  }), w(t.y, function(r) {
    return Ap(r, e.y, e.height);
  });
}
function Ap(t, e, r) {
  var n = [0, r], i = t.inverse ? 1 : 0;
  t.setExtent(n[i], n[1 - i]), _A(t, e);
}
function Ip(t, e, r, n, i, a, o) {
  process.env.NODE_ENV !== "production" && O(e === "all" || e === "axisLabel"), Y_(n, i, Mt.estimate, e, !1, o);
  var s = [0, 0, 0, 0];
  l(0), l(1), f(n, 0, NaN), f(n, 1, NaN);
  var u = x0(s, function(c) {
    return c > 0;
  }) == null;
  return is(n, s, !0, !0, r), W_(i, n), u;
  function l(c) {
    w(i[nn[c]], function(v) {
      if (ba(v.model)) {
        var d = a.ensureRecord(v.model), m = d.labelInfoList;
        if (m)
          for (var p = 0; p < m.length; p++) {
            var g = m[p], y = v.scale.normalize(iu(v.scale, _n(g.label).labelInfo.tick));
            y = c === 1 ? 1 - y : y, f(g.rect, c, y), f(g.rect, 1 - c, NaN);
          }
        var _ = d.nameLayout;
        if (_) {
          var y = gi(d.nameLocation) ? 0.5 : NaN;
          f(_.rect, c, y), f(_.rect, 1 - c, NaN);
        }
      }
    });
  }
  function f(c, v, d) {
    var m = t[nn[v]] - c[nn[v]], p = c[pa[v]] + c[nn[v]] - (t[pa[v]] + t[nn[v]]);
    m = h(m, 1 - d), p = h(p, d);
    var g = Cp[v][0], y = Cp[v][1];
    s[g] = ve(s[g], m), s[y] = ve(s[y], p);
  }
  function h(c, v) {
    return c > 0 && !ni(v) && v > 1e-4 && (c /= v), c;
  }
}
function SA(t, e, r, n, i) {
  var a = new Uy(xA);
  return w(r, function(o) {
    return w(o, function(s) {
      if (ba(s.model)) {
        var u = !n;
        s.axisBuilder = OD(t, e, s.model, i, a, u);
      }
    });
  }), a;
}
function Y_(t, e, r, n, i, a) {
  var o = r === Mt.determine;
  w(e, function(l) {
    return w(l, function(f) {
      ba(f.model) && (ND(f.axisBuilder, t, f.model), f.axisBuilder.build(o ? {
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
    s[nn[1 - l]] = t[pa[l]] <= a.refContainer[pa[l]] * 0.5 ? 0 : 1 - l === 1 ? 2 : 1;
  }
  w(e, function(l, f) {
    return w(l, function(h) {
      ba(h.model) && ((n === "all" || o) && h.axisBuilder.build({
        axisName: !0
      }, {
        nameMarginLevel: s[f]
      }), o && h.axisBuilder.build({
        axisLine: !0
      }));
    });
  });
}
function TA(t, e, r) {
  var n, i = t.get("outerBoundsMode", !0);
  i === "same" ? n = e.clone() : i == null || i === "auto" ? n = _a(t.get("outerBounds", !0) || jy, r.refContainer) : i !== "none" && process.env.NODE_ENV !== "production" && oe("Invalid grid[" + t.componentIndex + "].outerBoundsMode.");
  var a = t.get("outerBoundsContain", !0), o;
  a == null || a === "auto" ? o = "all" : ue(["all", "axisLabel"], a) < 0 ? (process.env.NODE_ENV !== "production" && oe("Invalid grid[" + t.componentIndex + "].outerBoundsContain."), o = "all") : o = a;
  var s = [ef(G(t.get("outerBoundsClampWidth", !0), Ts[0]), e.width), ef(G(t.get("outerBoundsClampHeight", !0), Ts[1]), e.height)];
  return {
    outerBoundsRect: n,
    parsedOuterBoundsContain: o,
    outerBoundsClamp: s
  };
}
var xA = function(t, e, r, n, i, a) {
  var o = r.axis.dim === "x" ? "y" : "x";
  Wy(t, e, r, n, i, a), gi(t.nameLocation) || w(e.recordMap[o], function(s) {
    s && s.labelInfoList && s.dirVec && Xy(s.labelInfoList, s.dirVec, n, i);
  });
};
function wA(t, e) {
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
  return bA(r, t, e), r.seriesInvolved && DA(r, t), r;
}
function bA(t, e, r) {
  var n = e.getComponent("tooltip"), i = e.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  w(r.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = Ea(s.model), l = t.coordSysAxesInfo[u] = {};
    t.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", n);
    if (w(s.getAxes(), Ee(m, !1, null)), s.getTooltipAxes && n && h.get("show")) {
      var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && w(d.baseAxes, Ee(m, v ? "cross" : !0, c)), v && w(d.otherAxes, Ee(m, "cross", !1));
    }
    function m(p, g, y) {
      var _ = y.model.getModel("axisPointer", i), S = _.get("show");
      if (!(!S || S === "auto" && !p && !Uf(_))) {
        g == null && (g = _.get("triggerTooltip")), _ = p ? CA(y, h, i, e, p, g) : _;
        var T = _.get("snap"), x = _.get("triggerEmphasis"), b = Ea(y.model), C = g || T || y.type === "category", E = t.axesInfo[b] = {
          key: b,
          axis: y,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: g,
          triggerEmphasis: x,
          involveSeries: C,
          snap: T,
          useHandle: Uf(_),
          seriesModels: [],
          linkGroup: null
        };
        l[b] = E, t.seriesInvolved = t.seriesInvolved || C;
        var D = EA(a, y);
        if (D != null) {
          var M = o[D] || (o[D] = {
            axesInfo: {}
          });
          M.axesInfo[b] = E, M.mapper = a[D].mapper, E.linkGroup = M;
        }
      }
    }
  });
}
function CA(t, e, r, n, i, a) {
  var o = e.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  w(s, function(c) {
    u[c] = ne(o.get(c));
  }), u.snap = t.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f ?? !0, !a) {
      var h = u.lineStyle = o.get("crossStyle");
      h && ye(l, h.textStyle);
    }
  }
  return t.model.getModel("axisPointer", new xe(u, r, n));
}
function DA(t, e) {
  e.eachSeries(function(r) {
    var n = r.coordinateSystem, i = r.get(["tooltip", "trigger"], !0), a = r.get(["tooltip", "show"], !0);
    !n || !n.model || i === "none" || i === !1 || i === "item" || a === !1 || r.get(["axisPointer", "show"], !0) === !1 || w(t.coordSysAxesInfo[Ea(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(r), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += r.getData().count());
    });
  });
}
function EA(t, e) {
  for (var r = e.model, n = e.dim, i = 0; i < t.length; i++) {
    var a = t[i] || {};
    if (xl(a[n + "AxisId"], r.id) || xl(a[n + "AxisIndex"], r.componentIndex) || xl(a[n + "AxisName"], r.name))
      return i;
  }
}
function xl(t, e) {
  return t === "all" || B(t) && ue(t, e) >= 0 || t === e;
}
function MA(t) {
  var e = hc(t);
  if (e) {
    var r = e.axisPointerModel, n = e.axis.scale, i = r.option, a = r.get("status"), o = r.get("value");
    o != null && (o = n.parse(o));
    var s = Uf(r);
    a == null && (i.status = s ? "show" : "hide");
    var u = n.getExtent();
    // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), i.value = o, s && (i.status = e.axis.scale.isBlank() ? "hide" : "show");
  }
}
function hc(t) {
  var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return e && e.axesInfo[Ea(t)];
}
function AA(t) {
  var e = hc(t);
  return e && e.axisPointerModel;
}
function Uf(t) {
  return !!t.get(["handle", "show"]);
}
function Ea(t) {
  return t.type + "||" + t.id;
}
var wl = {}, X_ = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.render = function(r, n, i, a) {
      this.axisPointerClass && MA(r), t.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(r, i, !0);
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
        var o = AA(r);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(r, o, n, i) : this._disposeAxisPointer(n);
      }
    }, e.prototype._disposeAxisPointer = function(r) {
      this._axisPointer && this._axisPointer.dispose(r), this._axisPointer = null;
    }, e.registerAxisPointerClass = function(r, n) {
      if (process.env.NODE_ENV !== "production" && wl[r])
        throw new Error("axisPointer " + r + " exists");
      wl[r] = n;
    }, e.getAxisPointerClass = function(r) {
      return r && wl[r];
    }, e.type = "axis", e;
  })(Kt)
), Wf = pe();
function IA(t, e, r, n) {
  var i = r.axis;
  if (!i.scale.isBlank()) {
    var a = r.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = n.coordinateSystem.getRect(), l = i.getTicksCoords({
      tickModel: a,
      breakTicks: "none",
      pruneByBreak: "preserve_extent_bound"
    });
    if (l.length) {
      var f = s.length, h = Wf(t).splitAreaColors, c = W(), v = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var m = h.get(l[d].tickValue);
          if (m != null) {
            v = (m + (f - 1) * d) % f;
            break;
          }
        }
      var p = i.toGlobalCoord(l[0].coord), g = o.getAreaStyle();
      s = B(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var y = i.toGlobalCoord(l[d].coord), _ = void 0, S = void 0, T = void 0, x = void 0;
        i.isHorizontal() ? (_ = p, S = u.y, T = y - _, x = u.height, p = _ + T) : (_ = u.x, S = p, T = u.width, x = y - S, p = S + x);
        var b = l[d - 1].tickValue;
        b != null && c.set(b, v), e.add(new Me({
          anid: b != null ? "area_" + b : null,
          shape: {
            x: _,
            y: S,
            width: T,
            height: x
          },
          style: ye({
            fill: s[v]
          }, g),
          autoBatch: !0,
          silent: !0
        })), v = (v + 1) % f;
      }
      Wf(t).splitAreaColors = c;
    }
  }
}
function LA(t) {
  Wf(t).splitAreaColors = null;
}
var OA = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], Z_ = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.axisPointerClass = "CartesianAxisPointer", r;
    }
    return e.prototype.render = function(r, n, i, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new ft(), this.group.add(this._axisGroup), !!ba(r)) {
        this._axisGroup.add(r.axis.axisBuilder.group), w(OA, function(u) {
          r.get([u, "show"]) && NA[u](this, this._axisGroup, r, r.getCoordSysModel(), i);
        }, this);
        var s = a && a.type === "changeAxisOrder" && a.isInitSort;
        s || Sm(o, this._axisGroup, r), t.prototype.render.call(this, r, n, i, a);
      }
    }, e.prototype.remove = function() {
      LA(this);
    }, e.type = "cartesianAxis", e;
  })(X_)
), NA = {
  splitLine: function(t, e, r, n, i) {
    var a = r.axis;
    if (!a.scale.isBlank()) {
      var o = r.getModel("splitLine"), s = o.getModel("lineStyle"), u = s.get("color"), l = o.get("showMinLine") !== !1, f = o.get("showMaxLine") !== !1;
      u = B(u) ? u : [u];
      for (var h = n.coordinateSystem.getRect(), c = a.isHorizontal(), v = 0, d = a.getTicksCoords({
        tickModel: o,
        breakTicks: "none",
        pruneByBreak: "preserve_extent_bound"
      }), m = [], p = [], g = s.getLineStyle(), y = 0; y < d.length; y++) {
        var _ = a.toGlobalCoord(d[y].coord);
        if (!(y === 0 && !l || y === d.length - 1 && !f)) {
          var S = d[y].tickValue;
          c ? (m[0] = _, m[1] = h.y, p[0] = _, p[1] = h.y + h.height) : (m[0] = h.x, m[1] = _, p[0] = h.x + h.width, p[1] = _);
          var T = v++ % u.length, x = new Ir({
            anid: S != null ? "line_" + S : null,
            autoBatch: !0,
            shape: {
              x1: m[0],
              y1: m[1],
              x2: p[0],
              y2: p[1]
            },
            style: ye({
              stroke: u[T]
            }, g),
            silent: !0
          });
          ga(x.shape, g.lineWidth), e.add(x);
        }
      }
    }
  },
  minorSplitLine: function(t, e, r, n, i) {
    var a = r.axis, o = r.getModel("minorSplitLine"), s = o.getModel("lineStyle"), u = n.coordinateSystem.getRect(), l = a.isHorizontal(), f = a.getMinorTicksCoords();
    if (f.length)
      for (var h = [], c = [], v = s.getLineStyle(), d = 0; d < f.length; d++)
        for (var m = 0; m < f[d].length; m++) {
          var p = a.toGlobalCoord(f[d][m].coord);
          l ? (h[0] = p, h[1] = u.y, c[0] = p, c[1] = u.y + u.height) : (h[0] = u.x, h[1] = p, c[0] = u.x + u.width, c[1] = p);
          var g = new Ir({
            anid: "minor_line_" + f[d][m].tickValue,
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
          ga(g.shape, v.lineWidth), e.add(g);
        }
  },
  splitArea: function(t, e, r, n, i) {
    IA(t, e, r, n);
  },
  breakArea: function(t, e, r, n, i) {
    var a = su(), o = r.axis.scale;
    a && o.type !== "ordinal" && a.rectCoordBuildBreakAxis(e, t, r, n.coordinateSystem.getRect(), i);
  }
}, $_ = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.type = "xAxis", e;
  })(Z_)
), PA = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = $_.type, r;
    }
    return e.type = "yAxis", e;
  })(Z_)
), RA = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = "grid", r;
    }
    return e.prototype.render = function(r, n) {
      this.group.removeAll(), r.get("show") && this.group.add(new Me({
        shape: r.coordinateSystem.getRect(),
        style: ye({
          fill: r.get("backgroundColor")
        }, r.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, e.type = "grid", e;
  })(Kt)
), Lp = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function kA(t) {
  t.registerComponentView(RA), t.registerComponentModel(YD), t.registerCoordinateSystem("cartesian2d", gA), Sp(t, "x", Gf, Lp), Sp(t, "y", Gf, Lp), t.registerComponentView($_), t.registerComponentView(PA), t.registerPreprocessor(function(e) {
    e.xAxis && e.yAxis && !e.grid && (e.grid = {});
  });
}
var an = pe(), Op = ne, bl = _e, BA = (
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
          s = this._group = new ft(), this.createPointerEl(s, l, e, r), this.createLabelEl(s, l, e, r), n.getZr().add(s);
        else {
          var c = Ee(Np, r, h);
          this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, r);
        }
        Rp(s, r, !0), this._renderHandle(a);
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
        if (a && ou(i).w > s)
          return !0;
        if (o) {
          var u = hc(e).seriesDataCount, l = i.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return n === !0;
    }, t.prototype.makeElOption = function(e, r, n, i, a) {
    }, t.prototype.createPointerEl = function(e, r, n, i) {
      var a = r.pointer;
      if (a) {
        var o = an(e).pointerEl = new Sx[a.type](Op(r.pointer));
        e.add(o);
      }
    }, t.prototype.createLabelEl = function(e, r, n, i) {
      if (r.label) {
        var a = an(e).labelEl = new ut(Op(r.label));
        e.add(a), Pp(a, i);
      }
    }, t.prototype.updatePointerEl = function(e, r, n) {
      var i = an(e).pointerEl;
      i && r.pointer && (i.setStyle(r.pointer.style), n(i, {
        shape: r.pointer.shape
      }));
    }, t.prototype.updateLabelEl = function(e, r, n, i) {
      var a = an(e).labelEl;
      a && (a.setStyle(r.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: r.label.x,
        y: r.label.y
      }), Pp(a, i));
    }, t.prototype._renderHandle = function(e) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var r = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = r.getModel("handle"), o = r.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = Mh(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            r_(l.event);
          },
          onmousedown: bl(this._onHandleDragMove, this, 0, 0),
          drift: bl(this._onHandleDragMove, this),
          ondragend: bl(this._onHandleDragEnd, this)
        }), n.add(i)), Rp(i, r, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        B(u) || (u = [u, u]), i.scaleX = u[0] / 2, i.scaleY = u[1] / 2, t_(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(e, s);
      }
    }, t.prototype._moveHandleToValue = function(e, r) {
      Np(this._axisPointerModel, !r && this._moveAnimation, this._handle, Cl(this.getHandleTransform(e, this._axisModel, this._axisPointerModel)));
    }, t.prototype._onHandleDragMove = function(e, r) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(Cl(n), [e, r], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(Cl(i)), an(n).lastProp = null, this._doDispatchAxisPointer();
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
      r && n && (this._lastGraphicKey = null, n && r.remove(n), i && r.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), If(this, "_doDispatchAxisPointer");
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
function Np(t, e, r, n) {
  q_(an(r).lastProp, n) || (an(r).lastProp = n, e ? qs(r, n, t) : (r.stopAnimation(), r.attr(n)));
}
function q_(t, e) {
  if (H(t) && H(e)) {
    var r = !0;
    return w(e, function(n, i) {
      r = r && q_(t[i], n);
    }), !!r;
  } else
    return t === e;
}
function Pp(t, e) {
  t[e.get(["label", "show"]) ? "show" : "hide"]();
}
function Cl(t) {
  return {
    x: t.x || 0,
    y: t.y || 0,
    rotation: t.rotation || 0
  };
}
function Rp(t, e, r) {
  var n = e.get("z"), i = e.get("zlevel");
  t && t.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = r);
  });
}
function VA(t) {
  var e = t.get("type"), r = t.getModel(e + "Style"), n;
  return e === "line" ? (n = r.getLineStyle(), n.fill = null) : e === "shadow" && (n = r.getAreaStyle(), n.stroke = null), n;
}
function FA(t, e, r, n, i) {
  var a = r.get("value"), o = K_(a, e.axis, e.ecModel, r.get("seriesDataIndices"), {
    precision: r.get(["label", "precision"]),
    formatter: r.get(["label", "formatter"])
  }), s = r.getModel("label"), u = tu(s.get("padding") || 0), l = s.getFont(), f = vg(o, l), h = i.position, c = f.width + u[1] + u[3], v = f.height + u[0] + u[2], d = i.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var m = i.verticalAlign;
  m === "bottom" && (h[1] -= v), m === "middle" && (h[1] -= v / 2), zA(h, c, v, n);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = e.get(["axisLine", "lineStyle", "color"])), t.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: vi(s, {
      text: o,
      font: l,
      fill: s.getTextColor(),
      padding: u,
      backgroundColor: p
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function zA(t, e, r, n) {
  var i = n.getWidth(), a = n.getHeight();
  t[0] = Math.min(t[0] + e, i) - e, t[1] = Math.min(t[1] + r, a) - r, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
}
function K_(t, e, r, n, i) {
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
      value: vs(e, {
        value: t
      }),
      axisDimension: e.dim,
      axisIndex: e.index,
      seriesData: []
    };
    w(n, function(u) {
      var l = r.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), V(o) ? a = o.replace("{value}", a) : $(o) && (a = o(s));
  }
  return a;
}
function Q_(t, e, r) {
  var n = Gt();
  return ih(n, n, r.rotation), kl(n, n, r.position), Eh([t.dataToCoord(e), (r.labelOffset || 0) + (r.labelDirection || 1) * (r.labelMargin || 0)], n);
}
function HA(t, e, r, n, i, a) {
  var o = Er.innerTextLayout(r.rotation, 0, r.labelDirection);
  r.labelMargin = i.get(["label", "margin"]), FA(e, n, i, a, {
    position: Q_(n.axis, t, r),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function GA(t, e, r) {
  return r = r || 0, {
    x1: t[r],
    y1: t[1 - r],
    x2: e[r],
    y2: e[1 - r]
  };
}
function UA(t, e, r) {
  return r = r || 0, {
    x: t[r],
    y: t[1 - r],
    width: e[r],
    height: e[1 - r]
  };
}
function WA(t, e, r) {
  return ou(t, {
    fromStat: {
      sers: X(e, function(n) {
        return r.getSeriesByIndex(n.seriesIndex);
      })
    },
    min: 1
  }).w;
}
function YA(t, e, r) {
  return [ve(lt(e[0], e[1]), t - r / 2), lt(t + r / 2, ve(e[0], e[1]))];
}
var XA = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.makeElOption = function(r, n, i, a, o) {
      var s = i.axis, u = s.grid, l = a.get("type"), f = s.getGlobalExtent(), h = kp(u, s).getOtherAxis(s).getGlobalExtent(), c = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (l && l !== "none") {
        var v = VA(a), d = ZA[l](s, c, f, h, a.get("seriesDataIndices"), a.ecModel);
        d.style = v, r.graphicKey = d.type, r.pointer = d;
      }
      var m = _s(u.getRect(), i);
      HA(n, r, m, i, a, o);
    }, e.prototype.getHandleTransform = function(r, n, i) {
      var a = _s(n.axis.grid.getRect(), n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = Q_(n.axis, r, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, e.prototype.updateHandleTransform = function(r, n, i, a) {
      var o = i.axis, s = o.grid, u = o.getGlobalExtent(!0), l = kp(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [r.x, r.y];
      h[f] += n[f], h[f] = lt(u[1], h[f]), h[f] = ve(u[0], h[f]);
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
  })(BA)
);
function kp(t, e) {
  var r = {};
  return r[e.dim + "AxisIndex"] = e.index, t.getCartesian(r);
}
var ZA = {
  line: function(t, e, r, n) {
    var i = GA([e, n[0]], [e, n[1]], Bp(t));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(t, e, r, n, i, a) {
    var o = WA(t, i, a), s = n[1] - n[0], u = YA(e, r, o), l = u[0], f = u[1];
    return {
      type: "Rect",
      shape: UA([l, n[0]], [f - l, s], Bp(t))
    };
  }
};
function Bp(t) {
  return t.dim === "x" ? 0 : 1;
}
var $A = (
  /** @class */
  (function(t) {
    F(e, t);
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
        color: Y.color.border,
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: Y.color.shadowTint
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: Y.color.neutral00,
        padding: [5, 7, 5, 7],
        backgroundColor: Y.color.accent60,
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
        color: Y.color.accent40,
        // For mobile performance
        throttle: 40
      }
    }, e;
  })(le)
), ur = pe(), qA = w;
function J_(t, e, r) {
  if (!q.node) {
    var n = e.getZr();
    ur(n).records || (ur(n).records = {}), KA(n, e);
    var i = ur(n).records[t] || (ur(n).records[t] = {});
    i.handler = r;
  }
}
function KA(t, e) {
  if (ur(t).initialized)
    return;
  ur(t).initialized = !0, r("click", Ee(Dl, "click")), r("mousemove", Ee(Dl, "mousemove")), r("mousewheel", Ee(Dl, "mousewheel")), r("globalout", JA);
  function r(n, i) {
    t.on(n, function(a) {
      var o = jA(e);
      qA(ur(t).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), QA(o.pendings, e);
    });
  }
}
function QA(t, e) {
  var r = t.showTip.length, n = t.hideTip.length, i;
  r ? i = t.showTip[r - 1] : n && (i = t.hideTip[n - 1]), i && (i.dispatchAction = null, e.dispatchAction(i));
}
function JA(t, e, r) {
  t.handler("leave", null, r);
}
function Dl(t, e, r, n) {
  e.handler(t, r, n);
}
function jA(t) {
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
function Yf(t, e) {
  if (!q.node) {
    var r = e.getZr(), n = (ur(r).records || {})[t];
    n && (ur(r).records[t] = null);
  }
}
var eI = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.render = function(r, n, i) {
      var a = n.getComponent("tooltip"), o = r.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click|mousewheel";
      J_("axisPointer", i, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, e.prototype.remove = function(r, n) {
      Yf("axisPointer", n);
    }, e.prototype.dispose = function(r, n) {
      Yf("axisPointer", n);
    }, e.type = "axisPointer", e;
  })(Kt)
);
function j_(t, e) {
  var r = [], n = t.seriesIndex, i;
  if (n == null || !(i = e.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = Ra(a, t);
  if (o == null || o < 0 || B(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = i.coordinateSystem;
  if (i.getTooltipPosition)
    r = i.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (t.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), h = f.dim, c = l.dim, v = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(c), m = [];
      m[v] = a.get(d, o), m[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), r = u.dataToPoint(m) || [];
    } else
      r = u.dataToPoint(a.getValues(X(u.dimensions, function(g) {
        return a.mapDimension(g);
      }), o)) || [];
  else if (s) {
    var p = s.getBoundingRect().clone();
    p.applyTransform(s.transform), r = [p.x + p.width / 2, p.y + p.height / 2];
  }
  return {
    point: r,
    el: s
  };
}
var Vp = pe();
function tI(t, e, r) {
  var n = t.currTrigger, i = [t.x, t.y], a = t, o = t.dispatchAction || _e(r.dispatchAction, r), s = e.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    Wo(i) && (i = j_({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, e).point);
    var u = Wo(i), l = a.axesInfo, f = s.axesInfo, h = n === "leave" || Wo(i), c = {}, v = {}, d = {
      list: [],
      map: {}
    }, m = {
      showPointer: Ee(nI, v),
      showTooltip: Ee(iI, d)
    };
    w(s.coordSysMap, function(g, y) {
      var _ = u || g.containPoint(i);
      w(s.coordSysAxesInfo[y], function(S, T) {
        var x = S.axis, b = uI(l, S);
        if (!h && _ && (!l || b)) {
          var C = b && b.value;
          C == null && !u && (C = x.pointToData(i)), C != null && Fp(S, C, m, !1, c);
        }
      });
    });
    var p = {};
    return w(f, function(g, y) {
      var _ = g.linkGroup;
      _ && !v[y] && w(_.axesInfo, function(S, T) {
        var x = v[T];
        if (S !== g && x) {
          var b = x.value;
          _.mapper && (b = g.axis.scale.parse(_.mapper(b, zp(S), zp(g)))), p[g.key] = b;
        }
      });
    }), w(p, function(g, y) {
      Fp(f[y], g, m, !0, c);
    }), aI(v, f, c), oI(d, i, t, o), sI(f, o, r), c;
  }
}
function Fp(t, e, r, n, i) {
  var a = t.axis;
  if (!(a.scale.isBlank() || !a.containData(e))) {
    if (!t.involveSeries) {
      r.showPointer(t, e);
      return;
    }
    var o = rI(e, t), s = o.payloadBatch, u = o.snapToValue;
    s[0] && i.seriesIndex == null && R(i, s[0]), !n && t.snap && a.containData(u) && u != null && (e = u), r.showPointer(t, e, s), r.showTooltip(t, o, u);
  }
}
function rI(t, e) {
  var r = e.axis, n = r.dim, i = t, a = [], o = Number.MAX_VALUE, s = -1;
  return w(e.seriesModels, function(u, l) {
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
    if ($t(h)) {
      var d = t - h, m = Math.abs(d);
      m <= o && ((m < o || d >= 0 && s < 0) && (o = m, s = d, i = h, a.length = 0), w(c, function(p) {
        a.push({
          seriesIndex: u.seriesIndex,
          dataIndexInside: p,
          dataIndex: u.getData().getRawIndex(p)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: i
  };
}
function nI(t, e, r, n) {
  t[e.key] = {
    value: r,
    payloadBatch: n
  };
}
function iI(t, e, r, n) {
  var i = r.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
  if (!(!e.triggerTooltip || !i.length)) {
    var u = e.coordSys.model, l = Ea(u), f = t.map[l];
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
function aI(t, e, r) {
  var n = r.axesInfo = [];
  w(e, function(i, a) {
    var o = i.axisPointerModel.option, s = t[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function oI(t, e, r, n) {
  if (Wo(e) || !t.list.length) {
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
function sI(t, e, r) {
  var n = r.getZr(), i = "axisPointerLastHighlights", a = Vp(n)[i] || {}, o = Vp(n)[i] = {};
  w(t, function(f, h) {
    var c = f.axisPointerModel.option;
    c.status === "show" && f.triggerEmphasis && w(c.seriesDataIndices, function(v) {
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
  w(a, function(f, h) {
    !o[h] && u.push(l(f));
  }), w(o, function(f, h) {
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
function uI(t, e) {
  for (var r = 0; r < (t || []).length; r++) {
    var n = t[r];
    if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function zp(t) {
  var e = t.axis.model, r = {}, n = r.axisDim = t.axis.dim;
  return r.axisIndex = r[n + "AxisIndex"] = e.componentIndex, r.axisName = r[n + "AxisName"] = e.name, r.axisId = r[n + "AxisId"] = e.id, r;
}
function Wo(t) {
  return !t || t[0] == null || isNaN(t[0]) || t[1] == null || isNaN(t[1]);
}
function e0(t) {
  X_.registerAxisPointerClass("CartesianAxisPointer", XA), t.registerComponentModel($A), t.registerComponentView(eI), t.registerPreprocessor(function(e) {
    if (e) {
      (!e.axisPointer || e.axisPointer.length === 0) && (e.axisPointer = {});
      var r = e.axisPointer.link;
      r && !B(r) && (e.axisPointer.link = [r]);
    }
  }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, {
    overallReset: function(e, r) {
      e.getComponent("axisPointer").coordSysAxesInfo = wA(e, r);
    }
  }), t.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, tI);
}
function gL(t) {
  Sn(kA), Sn(e0);
}
function lI(t, e) {
  var r = tu(e.get("padding")), n = e.getItemStyle(["color", "opacity"]);
  n.fill = e.get("backgroundColor");
  var i = new Me({
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
var fI = (
  /** @class */
  (function(t) {
    F(e, t);
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
      backgroundColor: Y.color.neutral00,
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      defaultBorderColor: Y.color.border,
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
          color: Y.color.borderShade,
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: Y.color.tertiary,
        fontSize: 14
      }
    }, e;
  })(le)
);
function t0(t) {
  var e = t.get("confine");
  return e != null ? !!e : t.get("renderMode") === "richText";
}
function r0(t) {
  if (q.domSupported) {
    for (var e = document.documentElement.style, r = 0, n = t.length; r < n; r++)
      if (t[r] in e)
        return t[r];
  }
}
var n0 = r0(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), hI = r0(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function i0(t, e) {
  if (!t)
    return e;
  e = iy(e, !0);
  var r = t.indexOf(e);
  return t = r === -1 ? e : "-" + t.slice(0, r) + "-" + e, t.toLowerCase();
}
function cI(t, e) {
  var r = t.currentStyle || document.defaultView && document.defaultView.getComputedStyle(t);
  return r ? r[e] : null;
}
var vI = i0(hI, "transition"), cc = i0(n0, "transform"), dI = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (q.transform3dSupported ? "will-change:transform;" : "");
function pI(t) {
  return t = t === "left" ? "right" : t === "right" ? "left" : t === "top" ? "bottom" : "top", t;
}
function gI(t, e, r) {
  if (!V(r) || r === "inside")
    return "";
  var n = t.get("backgroundColor"), i = t.get("borderWidth");
  e = ya(e);
  var a = pI(r), o = Math.max(Math.round(i) * 1.5, 6), s = "", u = cc + ":", l;
  ue(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + i, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (c - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = e + " solid " + i + "px;", m = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
  return '<div style="' + m.join("") + '"></div>';
}
function mI(t, e, r) {
  var n = "cubic-bezier(0.23,1,0.32,1)", i = "", a = "";
  return r && (i = " " + t / 2 + "s " + n, a = "opacity" + i + ",visibility" + i), e || (i = " " + t + "s " + n, a += (a.length ? "," : "") + (q.transformSupported ? "" + cc + i : ",left" + i + ",top" + i)), vI + ":" + a;
}
function Hp(t, e, r) {
  var n = t.toFixed(0) + "px", i = e.toFixed(0) + "px";
  if (!q.transformSupported)
    return r ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = q.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return r ? "top:0;left:0;" + cc + ":" + o + ";" : [["top", 0], ["left", 0], [n0, o]];
}
function yI(t) {
  var e = [], r = t.get("fontSize"), n = t.getTextColor();
  n && e.push("color:" + n), e.push("font:" + t.getFont());
  var i = G(t.get("lineHeight"), Math.round(r * 3 / 2));
  r && e.push("line-height:" + i + "px");
  var a = t.get("textShadowColor"), o = t.get("textShadowBlur") || 0, s = t.get("textShadowOffsetX") || 0, u = t.get("textShadowOffsetY") || 0;
  return a && o && e.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), w(["decoration", "align"], function(l) {
    var f = t.get(l);
    f && e.push("text-" + l + ":" + f);
  }), e.join(";");
}
function _I(t, e, r, n) {
  var i = [], a = t.get("transitionDuration"), o = t.get("backgroundColor"), s = t.get("shadowBlur"), u = t.get("shadowColor"), l = t.get("shadowOffsetX"), f = t.get("shadowOffsetY"), h = t.getModel("textStyle"), c = vy(t, "html"), v = l + "px " + f + "px " + s + "px " + u;
  return i.push("box-shadow:" + v), e && a > 0 && i.push(mI(a, r, n)), o && i.push("background-color:" + o), w(["width", "color", "radius"], function(d) {
    var m = "border-" + d, p = iy(m), g = t.get(p);
    g != null && i.push(m + ":" + g + (d === "color" ? "" : "px"));
  }), i.push(yI(h)), c != null && i.push("padding:" + tu(c).join("px ") + "px"), i.join(";") + ";";
}
function Gp(t, e, r, n, i) {
  var a = e && e.painter;
  if (r) {
    var o = a && a.getViewportRoot();
    o && Pw(t, o, r, n, i);
  } else {
    t[0] = n, t[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (t[0] += s.offsetLeft, t[1] += s.offsetTop);
  }
  t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
}
var SI = (
  /** @class */
  (function() {
    function t(e, r) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, q.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = e.getZr(), a = r.appendTo, o = a && (V(a) ? document.querySelector(a) : ri(a) ? a : $(a) && a(e.getDom()));
      Gp(this._styleCoord, i, o, e.getWidth() / 2, e.getHeight() / 2), (o || e.getDom()).appendChild(n), this._api = e, this._container = o;
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
        var r = this._api.getDom(), n = cI(r, "position"), i = r.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = e.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this._enableDisplayTransition = e.get("displayTransition") && e.get("transitionDuration") > 0, this.el.className = e.get("className") || "";
    }, t.prototype.show = function(e, r) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = dI + _I(e, !this._firstShow, this._longHide, this._enableDisplayTransition) + Hp(a[0], a[1], !0) + ("border-color:" + ya(r) + ";") + (e.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, t.prototype.setContent = function(e, r, n, i, a) {
      var o = this.el;
      if (e == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (V(a) && n.get("trigger") === "item" && !t0(n) && (s = gI(n, i, a)), V(e))
        o.innerHTML = e + s;
      else if (e) {
        o.innerHTML = "", B(e) || (e = [e]);
        for (var u = 0; u < e.length; u++)
          ri(e[u]) && e[u].parentNode !== o && o.appendChild(e[u]);
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
        if (Gp(n, this._zr, this._container, e, r), n[0] != null && n[1] != null) {
          var i = this.el.style, a = Hp(n[0], n[1]);
          w(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, t.prototype._moveIfResized = function() {
      var e = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(e * this._zr.getWidth(), r * this._zr.getHeight());
    }, t.prototype.hide = function() {
      var e = this, r = this.el.style;
      this._enableDisplayTransition ? (r.visibility = "hidden", r.opacity = "0") : r.display = "none", q.transform3dSupported && (r.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return e._longHide = !0;
      }, 500);
    }, t.prototype.hideLater = function(e) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(_e(this.hide, this), e)) : this.hide());
    }, t.prototype.isShow = function() {
      return this._show;
    }, t.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var e = this._zr;
      Rw(e && e.painter && e.painter.getViewportRoot(), this._container);
      var r = this.el;
      if (r) {
        r.onmouseenter = r.onmousemove = r.onmouseleave = null;
        var n = r.parentNode;
        n && n.removeChild(r);
      }
      this.el = this._container = null;
    }, t;
  })()
), TI = (
  /** @class */
  (function() {
    function t(e) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = e.getZr(), Wp(this._styleCoord, this._zr, e.getWidth() / 2, e.getHeight() / 2);
    }
    return t.prototype.update = function(e) {
      var r = e.get("alwaysShowContent");
      r && this._moveIfResized(), this._alwaysShowContent = r;
    }, t.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, t.prototype.setContent = function(e, r, n, i, a) {
      var o = this;
      H(e) && Qe(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new ut({
        style: {
          rich: r.richTextStyles,
          text: e,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: vy(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), w(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = n.get(l);
      }), w(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
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
      var e = this.el, r = this.el.getBoundingRect(), n = Up(e.style);
      return [r.width + n.left + n.right, r.height + n.top + n.bottom];
    }, t.prototype.moveTo = function(e, r) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        Wp(i, this._zr, e, r), e = i[0], r = i[1];
        var a = n.style, o = Sr(a.borderWidth || 0), s = Up(a);
        n.x = e + o + s.left, n.y = r + o + s.top, n.markRedraw();
      }
    }, t.prototype._moveIfResized = function() {
      var e = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(e * this._zr.getWidth(), r * this._zr.getHeight());
    }, t.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, t.prototype.hideLater = function(e) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(_e(this.hide, this), e)) : this.hide());
    }, t.prototype.isShow = function() {
      return this._show;
    }, t.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, t;
  })()
);
function Sr(t) {
  return Math.max(0, t);
}
function Up(t) {
  var e = Sr(t.shadowBlur || 0), r = Sr(t.shadowOffsetX || 0), n = Sr(t.shadowOffsetY || 0);
  return {
    left: Sr(e - r),
    right: Sr(e + r),
    top: Sr(e - n),
    bottom: Sr(e + n)
  };
}
function Wp(t, e, r, n) {
  t[0] = r, t[1] = n, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
}
var xI = new Me({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), wI = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.init = function(r, n) {
      if (!(q.node || !n.getDom())) {
        var i = r.getComponent("tooltip"), a = this._renderMode = HS(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new TI(n) : new SI(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, e.prototype.render = function(r, n, i) {
      if (!(q.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = r, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(r), a.setEnterable(r.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && r.get("transitionDuration") ? t_(this, "_updatePosition", 50, "fixRate") : If(this, "_updatePosition");
      }
    }, e.prototype._initGlobalListener = function() {
      var r = this._tooltipModel, n = r.get("triggerOn");
      J_("itemTooltip", this._api, _e(function(i, a, o) {
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
      if (!(a.from === this.uid || q.node || !i.getDom())) {
        var o = Yp(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, u = EI(a, n, i);
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
          var f = xI;
          f.x = a.x, f.y = a.y, f.update(), Te(f).tooltipConfig = {
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
          var h = j_(a, n), c = h.point[0], v = h.point[1];
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
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, a.from !== this.uid && this._hide(Yp(a, i));
    }, e.prototype._manuallyAxisShowTip = function(r, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = n.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), h = Ui([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
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
          var s = Te(i);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null, this._cbParamsList = null;
          var u, l;
          Ji(i, function(f) {
            if (f.tooltipDisabled)
              return u = l = null, !0;
            u || l || (Te(f).dataIndex != null ? u = f : Te(f).tooltipConfig != null && (l = f));
          }, !0), u ? this._showSeriesItemTooltip(r, u, n) : l ? this._showComponentItemTooltip(r, l, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(n);
      }
    }, e.prototype._showOrMove = function(r, n) {
      var i = r.get("showDelay");
      n = _e(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, e.prototype._showAxisTooltip = function(r, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = Ui([n.tooltipOption], a), u = this._renderMode, l = [], f = Ta("section", {
        blocks: [],
        noHeader: !0
      }), h = [], c = new ju();
      w(r, function(y) {
        w(y.dataByAxis, function(_) {
          var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), T = _.value, x = S.axis, b = x.scale.parse(T);
          if (!(!S || T == null)) {
            var C = K_(T, x, i, _.seriesDataIndices, _.valueLabelOpt), E = Ta("section", {
              header: C,
              noHeader: !zt(C),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(E), w(_.seriesDataIndices, function(D) {
              var M = i.getSeriesByIndex(D.seriesIndex), I = D.dataIndexInside, A = M.getDataParams(I);
              if (!(A.dataIndex < 0)) {
                A.axisDim = _.axisDim, A.axisIndex = _.axisIndex, A.axisType = _.axisType, A.axisId = _.axisId, A.axisValue = vs(S.axis, {
                  value: b
                }), A.axisValueLabel = C, A.marker = c.makeTooltipMarker("item", ya(A.color), u);
                var L = jv(M.formatTooltip(I, !0, null)), k = L.frag;
                if (k) {
                  var N = Ui([M], a).get("valueFormatter");
                  E.blocks.push(N ? R({
                    valueFormatter: N
                  }, k) : k);
                }
                L.text && h.push(L.text), l.push(A);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var v = n.position, d = s.get("order"), m = nd(f, c, u, d, i.get("useUTC"), s.get("textStyle"));
      m && h.unshift(m);
      var p = u === "richText" ? `

` : "<br/>", g = h.join(p);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(r, l) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, g, l, Math.random() + "", o[0], o[1], v, null, c);
      });
    }, e.prototype._showSeriesItemTooltip = function(r, n, i) {
      var a = this._ecModel, o = Te(n), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, c = l.getData(h), v = this._renderMode, d = r.positionDefault, m = Ui([c.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), p = m.get("trigger");
      if (!(p != null && p !== "item")) {
        var g = l.getDataParams(f, h), y = new ju();
        g.marker = y.makeTooltipMarker("item", ya(g.color), v);
        var _ = jv(l.formatTooltip(f, !1, h)), S = m.get("order"), T = m.get("valueFormatter"), x = _.frag, b = x ? nd(T ? R({
          valueFormatter: T
        }, x) : x, y, v, S, a.get("useUTC"), m.get("textStyle")) : _.text, C = "item_" + l.name + "_" + f;
        this._showOrMove(m, function() {
          this._showTooltipContent(m, b, g, C, r.offsetX, r.offsetY, r.position, r.target, y);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: c.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, e.prototype._showComponentItemTooltip = function(r, n, i) {
      var a = this._renderMode === "html", o = Te(n), s = o.tooltipConfig, u = s.option || {}, l = u.encodeHTMLContent;
      if (V(u)) {
        var f = u;
        u = {
          content: f,
          // Fixed formatter
          formatter: f
        }, l = !0;
      }
      l && a && u.content && (u = ne(u), u.content = Je(u.content));
      var h = [u], c = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      c && h.push(c), h.push({
        formatter: u.content
      });
      var v = r.positionDefault, d = Ui(h, this._tooltipModel, v ? {
        position: v
      } : null), m = d.get("content"), p = Math.random() + "", g = new ju();
      this._showOrMove(d, function() {
        var y = ne(d.get("formatterParams") || {});
        this._showTooltipContent(d, m, y, p, r.offsetX, r.offsetY, r.position, n, g);
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
        var v = n, d = this._getNearestPoint([o, s], i, r.get("trigger"), r.get("borderColor"), r.get("defaultBorderColor", !0)), m = d.color;
        if (c)
          if (V(c)) {
            var p = r.ecModel.get("useUTC"), g = B(i) ? i[0] : i, y = g && g.axisType && g.axisType.indexOf("time") >= 0;
            v = c, y && (v = eu(g.axisValue, v, p)), v = ay(v, i, !0);
          } else if ($(c)) {
            var _ = _e(function(S, T) {
              S === this._ticket && (h.setContent(T, f, r, m, u), this._updatePosition(r, u, o, s, h, i, l));
            }, this);
            this._ticket = a, v = c(i, a, _);
          } else
            v = c;
        h.setContent(v, f, r, m, u), h.show(r, m), this._updatePosition(r, u, o, s, h, i, l);
      }
    }, e.prototype._getNearestPoint = function(r, n, i, a, o) {
      if (i === "axis" || B(n))
        return {
          color: a || o
        };
      if (!B(n))
        return {
          color: a || n.color || n.borderColor
        };
    }, e.prototype._updatePosition = function(r, n, i, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      n = n || r.get("position");
      var h = o.getSize(), c = r.get("align"), v = r.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), $(n) && (n = n([i, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: h.slice()
      })), B(n))
        i = Bt(n[0], l), a = Bt(n[1], f);
      else if (H(n)) {
        var m = n;
        m.width = h[0], m.height = h[1];
        var p = _a(m, {
          width: l,
          height: f
        });
        i = p.x, a = p.y, c = null, v = null;
      } else if (V(n) && u) {
        var g = DI(n, d, h, r.get("borderWidth"));
        i = g[0], a = g[1];
      } else {
        var g = bI(i, a, o, l, f, c ? null : 20, v ? null : 20);
        i = g[0], a = g[1];
      }
      if (c && (i -= Xp(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= Xp(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), t0(r)) {
        var g = CI(i, a, o, l, f);
        i = g[0], a = g[1];
      }
      o.moveTo(i, a);
    }, e.prototype._updateContentNotChangedOnAxis = function(r, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === r.length;
      return o && w(i, function(s, u) {
        var l = s.dataByAxis || [], f = r[u] || {}, h = f.dataByAxis || [];
        o = o && l.length === h.length, o && w(l, function(c, v) {
          var d = h[v] || {}, m = c.seriesDataIndices || [], p = d.seriesDataIndices || [];
          o = o && c.value === d.value && c.axisType === d.axisType && c.axisId === d.axisId && m.length === p.length, o && w(m, function(g, y) {
            var _ = p[y];
            o = o && g.seriesIndex === _.seriesIndex && g.dataIndex === _.dataIndex;
          }), a && w(c.seriesDataIndices, function(g) {
            var y = g.seriesIndex, _ = n[y], S = a[y];
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
      q.node || !n.getDom() || (If(this, "_updatePosition"), this._tooltipContent.dispose(), Yf("itemTooltip", n), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
    }, e.type = "tooltip", e;
  })(Kt)
);
function Ui(t, e, r) {
  var n = e.ecModel, i;
  r ? (i = new xe(r, n, n), i = new xe(e.option, i, n)) : i = e;
  for (var a = t.length - 1; a >= 0; a--) {
    var o = t[a];
    o && (o instanceof xe && (o = o.get("tooltip", !0)), V(o) && (o = {
      formatter: o
    }), o && (i = new xe(o, i, n)));
  }
  return i;
}
function Yp(t, e) {
  return t.dispatchAction || _e(e.dispatchAction, e);
}
function bI(t, e, r, n, i, a, o) {
  var s = r.getSize(), u = s[0], l = s[1];
  return a != null && (t + u + a + 2 > n ? t -= u + a : t += a), o != null && (e + l + o > i ? e -= l + o : e += o), [t, e];
}
function CI(t, e, r, n, i) {
  var a = r.getSize(), o = a[0], s = a[1];
  return t = Math.min(t + o, n) - o, e = Math.min(e + s, i) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
}
function DI(t, e, r, n) {
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
function Xp(t) {
  return t === "center" || t === "middle";
}
function EI(t, e, r) {
  var n = hh(t).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = ka(e, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = r.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = Te(l).tooltipConfig;
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
function mL(t) {
  Sn(e0), t.registerComponentModel(fI), t.registerComponentView(wI), t.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Ve), t.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Ve);
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
}, Xf = (
  /** @class */
  (function(t) {
    F(e, t);
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
      n === !0 && (n = r.selector = ["all", "inverse"]), B(n) && w(n, function(a, o) {
        V(a) && (a = {
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
        f && fh(u) && n.push(u.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = W(), s = X(a, function(u) {
        return (V(u) || we(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new xe(u, this, this.ecModel));
      }, this);
      this._data = Be(s, function(u) {
        return !!u;
      });
    }, e.prototype.getData = function() {
      return this._data;
    }, e.prototype.select = function(r) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        w(a, function(o) {
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
      w(r, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, e.prototype.inverseSelect = function() {
      var r = this._data, n = this.option.selected;
      w(r, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, e.prototype.isSelected = function(r) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(r) && !n[r]) && ue(this._availableNames, r) >= 0;
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
      bottom: Y.size.m,
      align: "auto",
      backgroundColor: Y.color.transparent,
      borderColor: Y.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 8,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: Y.color.disabled,
      inactiveBorderColor: Y.color.disabled,
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
        inactiveColor: Y.color.disabled,
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: Y.color.secondary
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: Y.color.tertiary,
        borderWidth: 1,
        borderColor: Y.color.border
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: Y.color.quaternary
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
  })(le)
), Hn = Ee, Zf = w, bo = ft, a0 = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.newlineDisabled = !1, r;
    }
    return e.prototype.init = function() {
      this.group.add(this._contentGroup = new bo()), this.group.add(this._selectorGroup = new bo()), this._isFirstRender = !0;
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
        var f = oy(r, i).refContainer, h = r.getBoxLayoutParams(), c = r.get("padding"), v = _a(h, f, c), d = this.layoutInner(r, o, v, a, u, l), m = _a(ye({
          width: d.width,
          height: d.height
        }, h), f, c);
        this.group.x = m.x - d.x, this.group.y = m.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = lI(
          d,
          // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
          r
        ));
      }
    }, e.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, e.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this.getContentGroup(), f = W(), h = n.get("selectedMode"), c = n.get("triggerEvent"), v = [];
      i.eachRawSeries(function(d) {
        !d.get("legendHoverLink") && v.push(d.id);
      }), Zf(n.getData(), function(d, m) {
        var p = this, g = d.get("name");
        if (!this.newlineDisabled && (g === "" || g === `
`)) {
          var y = new bo();
          y.newline = !0, l.add(y);
          return;
        }
        var _ = i.getSeriesByName(g)[0];
        if (!f.get(g)) {
          if (_) {
            var S = _.getData(), T = S.getVisual("legendLineStyle") || {}, x = S.getVisual("legendIcon"), b = S.getVisual("style"), C = this._createItem(_, g, m, d, n, r, T, b, x, h, a);
            C.on("click", Hn(Zp, g, null, a, v)).on("mouseover", Hn($f, _.name, null, a, v)).on("mouseout", Hn(qf, _.name, null, a, v)), i.ssr && C.eachChild(function(E) {
              var D = Te(E);
              D.seriesIndex = _.seriesIndex, D.dataIndex = m, D.ssrType = "legend";
            }), c && C.eachChild(function(E) {
              p.packEventData(E, n, _, m, g);
            }), f.set(g, !0);
          } else
            i.eachRawSeries(function(E) {
              var D = this;
              if (!f.get(g) && E.legendVisualProvider) {
                var M = E.legendVisualProvider;
                if (!M.containName(g))
                  return;
                var I = M.indexOfName(g), A = M.getItemVisual(I, "style"), L = M.getItemVisual(I, "legendIcon"), k = Yt(A.fill);
                k && k[3] === 0 && (k[3] = 0.2, A = R(R({}, A), {
                  fill: La(k, "rgba")
                }));
                var N = this._createItem(E, g, m, d, n, r, {}, A, L, h, a);
                N.on("click", Hn(Zp, null, g, a, v)).on("mouseover", Hn($f, null, g, a, v)).on("mouseout", Hn(qf, null, g, a, v)), i.ssr && N.eachChild(function(z) {
                  var Q = Te(z);
                  Q.seriesIndex = E.seriesIndex, Q.dataIndex = m, Q.ssrType = "legend";
                }), c && N.eachChild(function(z) {
                  D.packEventData(z, n, E, m, g);
                }), f.set(g, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(g) || console.warn(g + " series not exists. Legend data should be same with series name or data name."));
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
      Te(r).eventData = s;
    }, e.prototype._createSelector = function(r, n, i, a, o) {
      var s = this.getSelectorGroup();
      Zf(r, function(l) {
        var f = l.type, h = new ut({
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
        xx(h, {
          normal: c,
          emphasis: v
        }, {
          defaultText: l.title
        }), uf(h);
      });
    }, e.prototype._createItem = function(r, n, i, a, o, s, u, l, f, h, c) {
      var v = r.visualDrawType, d = o.get("itemWidth"), m = o.get("itemHeight"), p = o.isSelected(n), g = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var S = AI(f, a, u, l, v, p, c), T = new bo(), x = a.getModel("textStyle");
      if ($(r.getLegendIcon) && (!_ || _ === "inherit"))
        T.add(r.getLegendIcon({
          itemWidth: d,
          itemHeight: m,
          icon: f,
          iconRotate: g,
          itemStyle: S.itemStyle,
          lineStyle: S.lineStyle,
          symbolKeepAspect: y
        }));
      else {
        var b = _ === "inherit" && r.getData().getVisual("symbol") ? g === "inherit" ? r.getData().getVisual("symbolRotate") : g : 0;
        T.add(II({
          itemWidth: d,
          itemHeight: m,
          icon: f,
          iconRotate: b,
          itemStyle: S.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var C = s === "left" ? d + 5 : -5, E = s, D = o.get("formatter"), M = n;
      V(D) && D ? M = D.replace("{name}", n ?? "") : $(D) && (M = D(n));
      var I = p ? x.getTextColor() : a.get("inactiveColor");
      T.add(new ut({
        style: vi(x, {
          text: M,
          x: C,
          y: m / 2,
          fill: I,
          align: E,
          verticalAlign: "middle"
        }, {
          inheritColor: I
        })
      }));
      var A = new Me({
        shape: T.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), L = a.getModel("tooltip");
      return L.get("show") && Ks({
        el: A,
        componentModel: o,
        itemName: n,
        itemTooltipOption: L.option
      }), T.add(A), T.eachChild(function(k) {
        k.silent = !0;
      }), A.silent = !h, this.getContentGroup().add(T), uf(T), T.__legendDataIndex = i, T;
    }, e.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      ua(r.get("orient"), u, r.get("itemGap"), i.width, i.height);
      var f = u.getBoundingRect(), h = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        ua(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          r.get("selectorItemGap", !0)
        );
        var c = l.getBoundingRect(), v = [-c.x, -c.y], d = r.get("selectorButtonGap", !0), m = r.getOrient().index, p = m === 0 ? "width" : "height", g = m === 0 ? "height" : "width", y = m === 0 ? "y" : "x";
        s === "end" ? v[m] += f[p] + d : h[m] += c[p] + d, v[1 - m] += f[g] / 2 - c[g] / 2, l.x = v[0], l.y = v[1], u.x = h[0], u.y = h[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[p] = f[p] + d + c[p], _[g] = Math.max(f[g], c[g]), _[y] = Math.min(0, c[y] + v[1 - m]), _;
      } else
        return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
    }, e.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, e.type = "legend.plain", e;
  })(Kt)
);
function AI(t, e, r, n, i, a, o) {
  function s(p, g) {
    p.lineWidth === "auto" && (p.lineWidth = g.lineWidth > 0 ? 2 : 0), Zf(p, function(y, _) {
      p[_] === "inherit" && (p[_] = g[_]);
    });
  }
  var u = e.getModel("itemStyle"), l = u.getItemStyle(), f = t.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? n.decal : Bf(h, o), l.fill === "inherit" && (l.fill = n[i]), l.stroke === "inherit" && (l.stroke = n[f]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? n : r).opacity), s(l, n);
  var c = e.getModel("lineStyle"), v = c.getLineStyle();
  if (s(v, r), l.fill === "auto" && (l.fill = n.fill), l.stroke === "auto" && (l.stroke = n.fill), v.stroke === "auto" && (v.stroke = n.fill), !a) {
    var d = e.get("inactiveBorderWidth"), m = l[f];
    l.lineWidth = d === "auto" ? n.lineWidth > 0 && m ? 2 : 0 : l.lineWidth, l.fill = e.get("inactiveColor"), l.stroke = e.get("inactiveBorderColor"), v.stroke = c.get("inactiveColor"), v.lineWidth = c.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: v
  };
}
function II(t) {
  var e = t.icon || "roundRect", r = Zh(e, 0, 0, t.itemWidth, t.itemHeight, t.itemStyle.fill, t.symbolKeepAspect);
  return r.setStyle(t.itemStyle), r.rotation = (t.iconRotate || 0) * Math.PI / 180, r.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), e.indexOf("empty") > -1 && (r.style.stroke = r.style.fill, r.style.fill = Y.color.neutral00, r.style.lineWidth = 2), r;
}
function Zp(t, e, r, n) {
  qf(t, e, r, n), r.dispatchAction({
    type: "legendToggleSelect",
    name: t ?? e
  }), $f(t, e, r, n);
}
function $f(t, e, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "highlight",
    seriesName: t,
    name: e,
    excludeSeriesId: n
  });
}
function qf(t, e, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "downplay",
    seriesName: t,
    name: e,
    excludeSeriesId: n
  });
}
function Wi(t, e, r) {
  var n = t === "allSelect" || t === "inverseSelect", i = {}, a = [];
  r.eachComponent({
    mainType: "legend",
    query: e
  }, function(s) {
    n ? s[t]() : s[t](e.name), $p(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return r.eachComponent("legend", function(s) {
    w(i, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), $p(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: e.name,
    selected: o
  };
}
function $p(t, e) {
  var r = e || {};
  return w(t.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = t.isSelected(i);
      et(r, i) ? r[i] = r[i] && a : r[i] = a;
    }
  }), r;
}
function LI(t) {
  t.registerAction("legendToggleSelect", "legendselectchanged", Ee(Wi, "toggleSelected")), t.registerAction("legendAllSelect", "legendselectall", Ee(Wi, "allSelect")), t.registerAction("legendInverseSelect", "legendinverseselect", Ee(Wi, "inverseSelect")), t.registerAction("legendSelect", "legendselected", Ee(Wi, "select")), t.registerAction("legendUnSelect", "legendunselected", Ee(Wi, "unSelect"));
}
var OI = vh(NI);
function NI(t) {
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
function o0(t) {
  t.registerComponentModel(Xf), t.registerComponentView(a0), t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, OI), t.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), LI(t);
}
var PI = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.setScrollDataIndex = function(r) {
      this.option.scrollDataIndex = r;
    }, e.prototype.init = function(r, n, i) {
      var a = Ba(r);
      t.prototype.init.call(this, r, n, i), qp(this, r, a);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.call(this, r, n), qp(this, this.option, r);
    }, e.type = "legend.scroll", e.defaultOption = Ow(Xf.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: Y.color.accent50,
      pageIconInactiveColor: Y.color.accent10,
      pageIconSize: 15,
      pageTextStyle: {
        color: Y.color.tertiary
      },
      animationDurationUpdate: 800
    }), e;
  })(Xf)
);
function qp(t, e, r) {
  var n = t.getOrient(), i = [1, 1];
  i[n.index] = 0, Lr(e, r, {
    type: "box",
    ignoreSize: !!i
  });
}
var Kp = ft, El = ["width", "height"], Ml = ["x", "y"], RI = (
  /** @class */
  (function(t) {
    F(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.newlineDisabled = !0, r._currentIndex = 0, r;
    }
    return e.prototype.init = function() {
      t.prototype.init.call(this), this.group.add(this._containerGroup = new Kp()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new Kp());
    }, e.prototype.resetInner = function() {
      t.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, e.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this;
      t.prototype.renderInner.call(this, r, n, i, a, o, s, u);
      var f = this._controllerGroup, h = n.get("pageIconSize", !0), c = B(h) ? h : [h, h];
      d("pagePrev", 0);
      var v = n.getModel("pageTextStyle");
      f.add(new ut({
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
      function d(m, p) {
        var g = m + "DataIndex", y = Mh(n.get("pageIcons", !0)[n.getOrient().name][p], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: _e(l._pageGo, l, g, n, a)
        }, {
          x: -c[0] / 2,
          y: -c[1] / 2,
          width: c[0],
          height: c[1]
        });
        y.name = m, f.add(y);
      }
    }, e.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getSelectorGroup(), l = r.getOrient().index, f = El[l], h = Ml[l], c = El[1 - l], v = Ml[1 - l];
      o && ua(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        r.get("selectorItemGap", !0)
      );
      var d = r.get("selectorButtonGap", !0), m = u.getBoundingRect(), p = [-m.x, -m.y], g = ne(i);
      o && (g[f] = i[f] - m[f] - d);
      var y = this._layoutContentAndController(r, a, g, l, f, c, v, h);
      if (o) {
        if (s === "end")
          p[l] += y[f] + d;
        else {
          var _ = m[f] + d;
          p[l] -= _, y[h] -= _;
        }
        y[f] += m[f] + d, p[1 - l] += y[v] + y[c] / 2 - m[c] / 2, y[c] = Math.max(y[c], m[c]), y[v] = Math.min(y[v], m[v] + p[1 - l]), u.x = p[0], u.y = p[1], u.markRedraw();
      }
      return y;
    }, e.prototype._layoutContentAndController = function(r, n, i, a, o, s, u, l) {
      var f = this.getContentGroup(), h = this._containerGroup, c = this._controllerGroup;
      ua(r.get("orient"), f, r.get("itemGap"), a ? i.width : null, a ? null : i.height), ua(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        c,
        r.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = c.getBoundingRect(), m = this._showController = v[o] > i[o], p = [-v.x, -v.y];
      n || (p[a] = f[l]);
      var g = [0, 0], y = [-d.x, -d.y], _ = G(r.get("pageButtonGap", !0), r.get("itemGap", !0));
      if (m) {
        var S = r.get("pageButtonPosition", !0);
        S === "end" ? y[a] += i[o] - d[o] : g[a] += d[o] + _;
      }
      y[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(p), h.setPosition(g), c.setPosition(y);
      var T = {
        x: 0,
        y: 0
      };
      if (T[o] = m ? i[o] : v[o], T[s] = Math.max(v[s], d[s]), T[u] = Math.min(0, d[u] + y[1 - a]), h.__rectSize = i[o], m) {
        var x = {
          x: 0,
          y: 0
        };
        x[o] = Math.max(i[o] - d[o] - _, 0), x[s] = T[s], h.setClipPath(new Me({
          shape: x
        })), h.__rectSize = x[o];
      } else
        c.eachChild(function(C) {
          C.attr({
            invisible: !0,
            silent: !0
          });
        });
      var b = this._getPageInfo(r);
      return b.pageIndex != null && qs(
        f,
        {
          x: b.contentPosition[0],
          y: b.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        m ? r : null
      ), this._updatePageInfoView(r, b), T;
    }, e.prototype._pageGo = function(r, n, i) {
      var a = this._getPageInfo(n)[r];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: n.id
      });
    }, e.prototype._updatePageInfoView = function(r, n) {
      var i = this._controllerGroup;
      w(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", c = n[h] != null, v = i.childOfName(f);
        v && (v.setStyle("fill", c ? r.get("pageIconColor", !0) : r.get("pageIconInactiveColor", !0)), v.cursor = c ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = r.get("pageFormatter"), s = n.pageIndex, u = s != null ? s + 1 : 0, l = n.pageCount;
      a && o && a.setStyle("text", V(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, e.prototype._getPageInfo = function(r) {
      var n = r.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = r.getOrient().index, s = El[o], u = Ml[o], l = this._findTargetItemIndex(n), f = i.children(), h = f[l], c = f.length, v = c ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: v,
        pageIndex: v - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return d;
      var m = S(h);
      d.contentPosition[o] = -m.s;
      for (var p = l + 1, g = m, y = m, _ = null; p <= c; ++p)
        _ = S(f[p]), // Half of the last item is out of the window.
        (!_ && y.e > g.s + a || _ && !T(_, g.s)) && (y.i > g.i ? g = y : g = _, g && (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i), ++d.pageCount)), y = _;
      for (var p = l - 1, g = m, y = m, _ = null; p >= -1; --p)
        _ = S(f[p]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !T(y, _.s)) && g.i < y.i && (y = g, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i), ++d.pageCount, ++d.pageIndex), g = _;
      return d;
      function S(x) {
        if (x) {
          var b = x.getBoundingRect(), C = b[u] + x[u];
          return {
            s: C,
            e: C + b[s],
            i: x.__legendDataIndex
          };
        }
      }
      function T(x, b) {
        return x.e >= b && x.s <= b + a;
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
  })(a0)
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
  Sn(o0), t.registerComponentModel(PI), t.registerComponentView(RI), kI(t);
}
function yL(t) {
  Sn(o0), Sn(BI);
}
function Qp(t, e, r) {
  var n = st.createCanvas(), i = e.getWidth(), a = e.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = i * r, n.height = a * r, n;
}
function Al(t) {
  return !t.__cursors.get(cm);
}
function Jp(t) {
  var e = t.__cursors.get(cm);
  return {
    startIdx: e ? e.startIdx : 0,
    endIdx: e ? e.endIdx : 0
  };
}
var s0 = (function(t) {
  F(e, t);
  function e(r, n, i) {
    var a = t.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.zlevel = 0, a.zlevel2 = Oo, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__prevIdx = { startIdx: 0, endIdx: 0 };
    var o;
    i = i || Qo, typeof r == "string" ? o = Qp(r, n, i) : H(r) && (o = r, r = o.id), a.id = r, a.dom = o;
    var s = o.style;
    return s && (og(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
  }
  return e.prototype.afterBrush = function() {
    this.__prevIdx = Jp(this);
  }, e.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, e.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, e.prototype.createBackBuffer = function() {
    var r = this.dpr;
    this.domBack = Qp("back-" + this.id, this.painter, r), this.ctxBack = this.domBack.getContext("2d"), r !== 1 && this.ctxBack.scale(r, r);
  }, e.prototype.createRepaintRects = function(r, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new Z(0, 0, 0, 0);
    function f(S) {
      if (!(!S.isFinite() || S.isZero()))
        if (o.length === 0) {
          var T = new Z(0, 0, 0, 0);
          T.copy(S), o.push(T);
        } else {
          for (var x = !1, b = 1 / 0, C = 0, E = 0; E < o.length; ++E) {
            var D = o[E];
            if (D.intersect(S)) {
              var M = new Z(0, 0, 0, 0);
              M.copy(D), M.union(S), o[E] = M, x = !0;
              break;
            } else if (u) {
              l.copy(S), l.union(D);
              var I = S.width * S.height, A = D.width * D.height, L = l.width * l.height, k = L - I - A;
              k < b && (b = k, C = E);
            }
          }
          if (u && (o[C].union(S), x = !0), !x) {
            var T = new Z(0, 0, 0, 0);
            T.copy(S), o.push(T);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = Jp(this), c = h.startIdx; c < h.endIdx; ++c) {
      var v = r[c];
      if (v) {
        var d = v.shouldBePainted(i, a, !0, !0), m = v.__isRendered && (v.__dirty & je || !d) ? v.getPrevPaintRect() : null;
        m && f(m);
        var p = d && (v.__dirty & je || !v.__isRendered) ? v.getPaintRect() : null;
        p && f(p);
      }
    }
    for (var g = this.__prevIdx, c = g.startIdx; c < g.endIdx; ++c) {
      var v = n[c], d = v && v.shouldBePainted(i, a, !0, !0);
      if (v && (!d || !v.__zr) && v.__isRendered) {
        var m = v.getPrevPaintRect();
        m && f(m);
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
    function d(m, p, g, y) {
      if (o.clearRect(m, p, g, y), n && n !== "transparent") {
        var _ = void 0;
        if (Ns(n)) {
          var S = n.global || n.__width === g && n.__height === y;
          _ = S && n.__canvasGradient || Rf(o, n, {
            x: 0,
            y: 0,
            width: g,
            height: y
          }), n.__canvasGradient = _, n.__width = g, n.__height = y;
        } else b0(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = kf(o, n, {
          dirty: function() {
            c.setUnpainted(), c.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(m, p, g, y), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, m, p, g, y), o.restore());
    }
    !i || l ? d(0, 0, s, u) : i.length && w(i, function(m) {
      d(m.x * h, m.y * h, m.width * h, m.height * h);
    });
  }, e;
})(Jt), jp = 1e5, rn = 314159, Il = void 0, VI = 1, Ll = 2;
function FI(t) {
  return t ? t.__builtin__ ? !0 : !(typeof t.resize != "function" || typeof t.refresh != "function") : !1;
}
function zI(t, e) {
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
function eg(t, e, r, n) {
  var i = new s0(t, e, e.dpr);
  return i.zlevel = r, i.zlevel2 = n, i.__builtin__ = !0, u0(i), i;
}
function u0(t) {
  t.__cursorStack = [], t.__cursors = W();
}
function HI(t) {
  return t.startIdx = t.drawIdx = t.endIdx = t.endIdxNew = 0, t.used = !1, t.first = t.last = NaN, t.notClearIdx = -1, t;
}
function GI(t, e) {
  var r = t.__cursors, n = +e;
  return r.get(n) || (t.__cursorStack.push(n), r.set(n, HI({ key: n })));
}
function Co(t, e) {
  for (var r = t.__cursorStack, n = 0; n < r.length; n++)
    e(t.__cursors.get(r[n]));
}
function Ol(t, e) {
  var r = t.layers;
  return r[e] || (r[e] = new Array(3));
}
function Re(t, e, r) {
  for (var n = t.layerStack, i = 0; i < n.length; i++) {
    var a = n[i].zl, o = n[i].zl2, s = t.layers[a][o];
    (!r || (!(r & ca) || s.__builtin__) && (!(r & Kf) || !s.__builtin__) && (!(r & l0) || s !== t.hoverlayer)) && e(s, a, o, i);
  }
}
var ca = 1, Kf = 2, l0 = 4, Do = ca | l0, UI = (function() {
  function t(e, r, n, i) {
    this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
      layerStack: [],
      layers: []
    };
    var a = !e.nodeName || e.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = R({}, n || {}), this.dpr = n.devicePixelRatio || Qo, this._singleCanvas = a, this.root = e;
    var o = e.style;
    if (o && (og(e), e.innerHTML = ""), this.storage = r, this._prevDisplayList = [], a) {
      var u = e, l = u.width, f = u.height;
      n.width != null && (l = n.width), n.height != null && (f = n.height), this.dpr = n.devicePixelRatio || 1, u.width = l * this.dpr, u.height = f * this.dpr, this._width = l, this._height = f;
      var h = eg(u, this, rn, Oo);
      h.initContext(), this._insertLayer(h, rn, Oo, !0), this._domRoot = e;
    } else {
      this._width = _o(e, 0, n), this._height = _o(e, 1, n);
      var s = this._domRoot = zI(this._width, this._height);
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
    e && !H(e) ? r = { paintAll: !!e } : r = e || {};
    var n = G(r.refresh, !0), i = G(r.refreshHover, !1);
    if (i && (this._hoverLayerDirty = Ll), !n)
      return i && this._paintHoverList(this.storage.getDisplayList(!1)), this;
    var a = this.storage.getDisplayList(!0);
    this._updateLayerStatus(a, r.paintAll), this._redrawId = Math.random();
    var o = this._prevDisplayList;
    this._paintList(a, o, this._redrawId);
    var s = this._backgroundColor;
    return Re(this._i, function(u, l, f, h) {
      u.refresh && u.refresh(h === 0 ? s : null);
    }, Kf), this._opts.useDirtyRect && (this._prevDisplayList = a.slice()), this;
  }, t.prototype._paintHoverList = function(e) {
    var r = this._i.hoverlayer, n = this._hoverLayerDirty;
    if (this._hoverLayerDirty = Il, n !== Il && (!r && n === Ll && (r = this._i.hoverlayer = this._ensureLayer(jp)), !!r)) {
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
          l && (f = u.style, u.style = l), ln(a, u, i), l && (u.style = f);
        }
      }
      a && (ti(a, i), a.restore());
    }
  }, t.prototype.getHoverLayer = function() {
    return this._ensureLayer(jp);
  }, t.prototype.paintOne = function(e, r) {
    b_(e, r);
  }, t.prototype._paintList = function(e, r, n) {
    if (this._redrawId === n) {
      var i = this._doPaintList(e, r);
      if (this._needsManuallyCompositing && this._compositeManually(), i)
        Re(this._i, function(o) {
          o.afterBrush && o.afterBrush();
        }, Do), this._paintHoverList(e);
      else {
        var a = this;
        ws(function() {
          a._paintList(e, r, n);
        });
      }
    }
  }, t.prototype._compositeManually = function() {
    var e = this._ensureLayer(rn).ctx, r = this._domRoot.width, n = this._domRoot.height;
    e.clearRect(0, 0, r, n), Re(this._i, function(i) {
      i.virtual && e.drawImage(i.dom, 0, 0, r, n);
    }, ca);
  }, t.prototype._doPaintList = function(e, r) {
    var n = this, i = !0;
    return Re(this._i, function(a) {
      var o = !1;
      if (Co(a, function(h) {
        (h.drawIdx < h.endIdx || h.notClearIdx >= 0) && (o = !0);
      }), !(!o && !a.__dirty)) {
        var s = n._opts.useDirtyRect && !Al(a) ? a.createRepaintRects(e, r, n._width, n._height) : null, u = n._i.layerStack[0], l = !0;
        if (a.__dirty) {
          l = !1, a.__dirty = !1;
          var f = a.zlevel === u.zl && a.zlevel2 === u.zl2 ? n._backgroundColor : null;
          a.clear(!1, f, s);
        }
        Co(a, function(h) {
          var c = n._paintPerCursor(a, h, e, s, l);
          i = i && c;
        });
      }
    }, Do), q.wxa && Re(this._i, function(a) {
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
    }, s = e.ctx, u = Al(e), l = u && st.getTime(), f = r.drawIdx, h = r.notClearIdx, c = h >= 0 ? Math.min(h, f) : f; c < r.endIdx; c++) {
      var v = n[c];
      if (!(c < f && !v.notClear)) {
        if (v.__inHover && (this._hoverLayerDirty = Ll), i != null) {
          var d = v.getPaintRect();
          d && d.intersect(i) && (ln(s, v, o), v.setPrevPaintRect(d));
        } else
          ln(s, v, o);
        if (u) {
          var m = st.getTime() - l;
          if (m > 15) {
            c++;
            break;
          }
        }
      }
    }
    ti(s, o), r.drawIdx = Math.max(c, f);
  }, t.prototype.getLayer = function(e, r) {
    return this._ensureLayer(e, 0, r);
  }, t.prototype._ensureLayer = function(e, r, n) {
    r = r || 0;
    var i = this._singleCanvas;
    i && !this._needsManuallyCompositing && (e = rn, r = 0);
    var a = Ol(this._i, e)[r];
    return a || (a = eg("zr_" + e + "." + r, this, e, r), this._layerConfig[e] && ce(a, this._layerConfig[e], !0), (n || i && e !== rn) && (a.virtual = !0), this._insertLayer(a, e, r, !1), a.initContext()), a;
  }, t.prototype.insertLayer = function(e, r) {
    this._insertLayer(r, e, 0, !1);
  }, t.prototype._insertLayer = function(e, r, n, i) {
    var a = this._i, o = a.layers, s = a.layerStack, u = this._domRoot, l = null;
    if (o[r] && o[r][n]) {
      process.env.NODE_ENV !== "production" && fn("ZLevel " + r + "." + n + " has been used already");
      return;
    }
    if (!FI(e)) {
      process.env.NODE_ENV !== "production" && fn("Layer of zlevel " + r + " is not valid");
      return;
    }
    for (var f = s.length, h = 0; h < f && (s[h].zl < r || s[h].zl === r && s[h].zl2 < n); )
      h++;
    if (h > 0 && (l = Ol(a, s[h - 1].zl)[s[h - 1].zl2]), s.splice(h, 0, { zl: r, zl2: n }), Ol(a, r)[n] = e, !i && !e.virtual)
      if (l) {
        var c = l.dom;
        c.nextSibling ? u.insertBefore(e.dom, c.nextSibling) : u.appendChild(e.dom);
      } else
        u.firstChild ? u.insertBefore(e.dom, u.firstChild) : u.appendChild(e.dom);
    e.painter || (e.painter = this);
  }, t.prototype.eachLayer = function(e, r) {
    return Re(this._i, function(n, i) {
      e.call(r, n, i);
    });
  }, t.prototype.eachBuiltinLayer = function(e, r) {
    return Re(this._i, function(n, i) {
      e.call(r, n, i);
    }, ca);
  }, t.prototype.eachOtherLayer = function(e, r) {
    return Re(this._i, function(n, i) {
      e.call(r, n, i);
    }, Kf);
  }, t.prototype.getLayers = function() {
    var e = {};
    return Re(this._i, function(r, n, i) {
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
    Re(n._i, function(p) {
      p.__dirty = !1, Co(p, function(g) {
        g.used = !1, g.endIdxNew = 0, g.notClearIdx = -1;
      });
    }, Do);
    for (var o, s = null, u = null, l = !1, f = 0, h = e.length; f < h; f++) {
      var a = e[f], c = a.zlevel, v = a.incremental, d = void 0;
      if (o !== c && (o = c, l = !1), v ? (l = !0, d = KT) : d = l ? qT : Oo, (!s || c !== s.zlevel || d !== s.zlevel2) && (s = n._ensureLayer(c, d), u = null, !s.__builtin__)) {
        fn("ZLevel " + c + " has been used by unknown layer " + s.id);
        continue;
      }
      if ((!u || v !== u.key) && (u = GI(s, v), !u.used))
        if (u.used = !0, !r && u.first === a.id) {
          var m = f - u.startIdx;
          u.startIdx = f, u.drawIdx += m, u.endIdx += m;
        } else
          s.__dirty = !0, u.first = a.id, u.startIdx = u.drawIdx = f, u.endIdx = f + 1;
      u.endIdxNew = f + 1, a.__dirty & je && !a.__inHover && ((!v || !a.notClear && f < u.drawIdx) && (s.__dirty = !0), v && a.notClear && u.notClearIdx < 0 && (u.notClearIdx = f));
    }
    Re(n._i, function(p) {
      for (var g = p.__cursorStack, y = p.__cursors, _ = g.length - 1; _ >= 0; _--) {
        var S = y.get(g[_]);
        if (!S.used)
          p.__dirty = !0, y.removeKey(g[_]), g.splice(_, 1);
        else {
          var T = S.endIdxNew;
          (Al(p) ? T < S.drawIdx : T !== S.endIdx || !T || e[T - 1].id !== S.last) && (p.__dirty = !0), S.endIdx = S.endIdxNew, S.last = T ? e[T - 1].id : NaN;
        }
      }
      p.__dirty && (Co(p, function(x) {
        x.drawIdx = x.startIdx;
      }), n._hoverLayerDirty === Il && (n._hoverLayerDirty = VI));
    }, Do);
  }, t.prototype.clear = function() {
    return Re(this._i, function(e) {
      e.clear(), u0(e);
    }, ca), this;
  }, t.prototype.setBackgroundColor = function(e) {
    this._backgroundColor = e, Re(this._i, function(r) {
      r.setUnpainted();
    });
  }, t.prototype.configLayer = function(e, r) {
    if (r) {
      var n = this._layerConfig;
      n[e] ? ce(n[e], r, !0) : n[e] = r, Re(this._i, function(i, a) {
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
      e != null && (i.width = e), r != null && (i.height = r), e = _o(a, 0, i), r = _o(a, 1, i), n.style.display = "", (this._width !== e || r !== this._height) && (n.style.width = e + "px", n.style.height = r + "px", Re(this._i, function(o) {
        o.resize(e, r);
      }), this.refresh({ paintAll: !0 })), this._width = e, this._height = r;
    } else {
      if (e == null || r == null)
        return;
      this._width = e, this._height = r, this._ensureLayer(rn).resize(e, r);
    }
    return this;
  }, t.prototype.clearLayer = function(e) {
    w(this._i.layers[e], function(r) {
      r && !r.__builtin__ && r.clear();
    });
  }, t.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
  }, t.prototype.getRenderedCanvas = function(e) {
    if (e = e || {}, this._singleCanvas && !this._compositeManually)
      return this._i.layers[rn][0].dom;
    var r = new s0("image", this, e.pixelRatio || this.dpr);
    r.initContext(), r.clear(!1, e.backgroundColor || this._backgroundColor);
    var n = r.ctx;
    if (e.pixelRatio <= this.dpr) {
      this.refresh();
      var i = r.dom.width, a = r.dom.height;
      Re(this._i, function(h) {
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
        ln(n, f, o);
      }
      ti(n, o);
    }
    return r.dom;
  }, t.prototype.getWidth = function() {
    return this._width;
  }, t.prototype.getHeight = function() {
    return this._height;
  }, t;
})();
function _L(t) {
  t.registerPainter("canvas", UI);
}
export {
  Te as $,
  Df as A,
  lt as B,
  ve as C,
  zo as D,
  jI as E,
  nL as F,
  KS as G,
  Ow as H,
  Y as I,
  dg as J,
  we as K,
  uL as L,
  B as M,
  X as N,
  si as O,
  Se as P,
  Ke as Q,
  xm as R,
  mn as S,
  Ch as T,
  qs as U,
  tx as V,
  KI as W,
  Dm as X,
  ft as Y,
  aL as Z,
  F as _,
  Pg as a,
  pn as a0,
  Zs as a1,
  Me as a2,
  R as a3,
  QI as a4,
  xx as a5,
  tL as a6,
  JI as a7,
  $I as a8,
  qI as a9,
  ye as aA,
  Ra as aB,
  ZI as aC,
  $ as aD,
  ut as aE,
  YI as aF,
  iu as aG,
  YT as aH,
  nC as aI,
  iC as aJ,
  Ar as aK,
  GS as aL,
  WI as aM,
  Vt as aN,
  oL as aa,
  XI as ab,
  e_ as ac,
  rL as ad,
  sL as ae,
  pL as af,
  Sn as ag,
  gL as ah,
  yL as ai,
  mL as aj,
  _L as ak,
  Zh as al,
  G as am,
  nf as an,
  af as ao,
  qb as ap,
  Tn as aq,
  vm as ar,
  eL as as,
  gm as at,
  H as au,
  ui as av,
  Tg as aw,
  Ge as ax,
  _e as ay,
  ya as az,
  Qx as b,
  W as c,
  QC as d,
  By as e,
  er as f,
  ou as g,
  O as h,
  $t as i,
  cL as j,
  fL as k,
  vL as l,
  ww as m,
  iL as n,
  Jb as o,
  Kx as p,
  XS as q,
  hL as r,
  uD as s,
  Qb as t,
  lL as u,
  Oe as v,
  dL as w,
  Bt as x,
  w as y,
  et as z
};
