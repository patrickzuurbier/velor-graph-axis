var Ft = Object.defineProperty;
var Rt = (r, e, t) => e in r ? Ft(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var et = (r, e, t) => Rt(r, typeof e != "symbol" ? e + "" : e, t);
import { _ as Q, c as zt, G as _t, L as at, t as Et, M as Ht, m as Pt, N as rt, b as Lt, O as Z, Q as Wt, T as nt, P as kt, U as it, V as Ut, W as ot, g as Bt, X as st, y as lt, j as K, x as ut, Y as vt, C as X, Z as ht, $ as Y, a0 as Mt, o as $t, n as qt, a1 as jt, l as Jt, u as ft, z as wt, a2 as Zt, a3 as Qt, a4 as Kt, a5 as Xt, a6 as ct, a7 as gt, a8 as Yt, a9 as pt, D as xt, q as te, E as ee, F as ae, H as re, I as ne, J as ie, K as oe } from "./installCanvasRenderer-CJsrED7t.js";
import { S as se, a as At, p as le } from "./points-CEhG5zM5.js";
import { i as ue, d as ve } from "./dataSample-DvPwzGQe.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var he = (
  /** @class */
  (function(r) {
    Q(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.type = e.type, t.hasSymbolVisual = !0, t;
    }
    return e.prototype.getInitialData = function(t) {
      if (process.env.NODE_ENV !== "production") {
        var a = t.coordinateSystem;
        if (a !== "polar" && a !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return zt(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getLegendIcon = function(t) {
      var a = new _t(), o = at("line", 0, t.itemHeight / 2, t.itemWidth, 0, t.lineStyle.stroke, !1);
      a.add(o), o.setStyle(t.lineStyle);
      var n = this.getData().getVisual("symbol"), i = this.getData().getVisual("symbolRotate"), l = n === "none" ? "circle" : n, u = t.itemHeight * 0.8, s = at(l, (t.itemWidth - u) / 2, (t.itemHeight - u) / 2, u, u, t.itemStyle.fill);
      a.add(s), s.setStyle(t.itemStyle);
      var v = t.iconRotate === "inherit" ? i : t.iconRotate || 0;
      return s.rotation = v * Math.PI / 180, s.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), l.indexOf("empty") > -1 && (s.style.stroke = s.style.fill, s.style.fill = Et.color.neutral00, s.style.lineWidth = 2), a;
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
  })(Ht)
);
function Tt(r, e, t) {
  var a = r.getBaseAxis(), o = r.getOtherAxis(a), n = fe(o, t), i = a.dim, l = o.dim, u = e.mapDimension(l), s = e.mapDimension(i), v = l === "x" || l === "radius" ? 1 : 0, h = Pt(r.dimensions, function(p) {
    return e.mapDimension(p);
  }), g = !1, f = e.getCalculationInfo("stackResultDimension");
  return rt(
    e,
    h[0]
    /* , dims[1] */
  ) && (g = !0, h[0] = f), rt(
    e,
    h[1]
    /* , dims[0] */
  ) && (g = !0, h[1] = f), {
    dataDimsForPoint: h,
    valueStart: n,
    valueAxisDim: l,
    baseAxisDim: i,
    stacked: !!g,
    valueDim: u,
    baseDim: s,
    baseDataOffset: v,
    stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
  };
}
function fe(r, e) {
  var t = 0, a = r.scale.getExtent();
  return e === "start" ? t = a[0] : e === "end" ? t = a[1] : Lt(e) && !isNaN(e) ? t = e : a[0] > 0 ? t = a[0] : a[1] < 0 && (t = a[1]), t;
}
function Ct(r, e, t, a) {
  var o = NaN;
  r.stacked && (o = t.get(t.getCalculationInfo("stackedOverDimension"), a)), isNaN(o) && (o = r.valueStart);
  var n = r.baseDataOffset, i = [];
  return i[n] = t.get(r.baseDim, a), i[1 - n] = o, e.dataToPoint(i);
}
function G(r, e) {
  return !isFinite(r) || !isFinite(e);
}
function ce(r, e) {
  var t = [];
  return e.diff(r).add(function(a) {
    t.push({
      cmd: "+",
      idx: a
    });
  }).update(function(a, o) {
    t.push({
      cmd: "=",
      idx: o,
      idx1: a
    });
  }).remove(function(a) {
    t.push({
      cmd: "-",
      idx: a
    });
  }).execute(), t;
}
function ge(r, e, t, a, o, n, i, l) {
  for (var u = ce(r, e), s = [], v = [], h = [], g = [], f = [], p = [], c = [], _ = Tt(o, e, i), y = r.getLayout("points") || [], m = e.getLayout("points") || [], d = 0; d < u.length; d++) {
    var E = u[d], D = !0, S = void 0, b = void 0;
    switch (E.cmd) {
      case "=":
        S = E.idx * 2, b = E.idx1 * 2;
        var A = y[S], w = y[S + 1], L = m[b], k = m[b + 1];
        (isNaN(A) || isNaN(w)) && (A = L, w = k), s.push(A, w), v.push(L, k), h.push(t[S], t[S + 1]), g.push(a[b], a[b + 1]), c.push(e.getRawIndex(E.idx1));
        break;
      case "+":
        var P = E.idx, T = _.dataDimsForPoint, z = o.dataToPoint([e.get(T[0], P), e.get(T[1], P)]);
        b = P * 2, s.push(z[0], z[1]), v.push(m[b], m[b + 1]);
        var I = Ct(_, o, e, P);
        h.push(I[0], I[1]), g.push(a[b], a[b + 1]), c.push(e.getRawIndex(P));
        break;
      case "-":
        D = !1;
    }
    D && (f.push(E), p.push(p.length));
  }
  p.sort(function(q, J) {
    return c[q] - c[J];
  });
  for (var V = s.length, H = Z(V), C = Z(V), O = Z(V), W = Z(V), U = [], d = 0; d < p.length; d++) {
    var j = p[d], N = d * 2, F = j * 2;
    H[N] = s[F], H[N + 1] = s[F + 1], C[N] = v[F], C[N + 1] = v[F + 1], O[N] = h[F], O[N + 1] = h[F + 1], W[N] = g[F], W[N + 1] = g[F + 1], U[d] = f[j];
  }
  return {
    current: H,
    next: C,
    stackedOnCurrent: O,
    stackedOnNext: W,
    status: U
  };
}
var B = Math.min, M = Math.max;
function tt(r, e, t, a, o, n, i, l, u) {
  for (var s, v, h, g, f, p, c = t, _ = 0; _ < a; _++) {
    var y = e[c * 2], m = e[c * 2 + 1];
    if (c >= o || c < 0)
      break;
    if (G(y, m)) {
      if (u) {
        c += n;
        continue;
      }
      break;
    }
    if (c === t)
      r[n > 0 ? "moveTo" : "lineTo"](y, m), h = y, g = m;
    else {
      var d = y - s, E = m - v;
      if (d * d + E * E < 0.5) {
        c += n;
        continue;
      }
      if (i > 0) {
        for (var D = c + n, S = e[D * 2], b = e[D * 2 + 1]; S === y && b === m && _ < a; )
          _++, D += n, c += n, S = e[D * 2], b = e[D * 2 + 1], y = e[c * 2], m = e[c * 2 + 1], d = y - s, E = m - v;
        var A = _ + 1;
        if (u)
          for (; G(S, b) && A < a; )
            A++, D += n, S = e[D * 2], b = e[D * 2 + 1];
        var w = 0.5, L = 0, k = 0, P = void 0, T = void 0;
        if (A >= a || G(S, b))
          f = y, p = m;
        else {
          L = S - s, k = b - v;
          var z = y - s, I = S - y, V = m - v, H = b - m, C = void 0, O = void 0;
          if (l === "x") {
            C = Math.abs(z), O = Math.abs(I);
            var W = L > 0 ? 1 : -1;
            f = y - W * C * i, p = m, P = y + W * O * i, T = m;
          } else if (l === "y") {
            C = Math.abs(V), O = Math.abs(H);
            var U = k > 0 ? 1 : -1;
            f = y, p = m - U * C * i, P = y, T = m + U * O * i;
          } else
            C = Math.sqrt(z * z + V * V), O = Math.sqrt(I * I + H * H), w = O / (O + C), f = y - L * i * (1 - w), p = m - k * i * (1 - w), P = y + L * i * w, T = m + k * i * w, P = B(P, M(S, y)), T = B(T, M(b, m)), P = M(P, B(S, y)), T = M(T, B(b, m)), L = P - y, k = T - m, f = y - L * C / O, p = m - k * C / O, f = B(f, M(s, y)), p = B(p, M(v, m)), f = M(f, B(s, y)), p = M(p, B(v, m)), L = y - f, k = m - p, P = y + L * O / C, T = m + k * O / C;
        }
        r.bezierCurveTo(h, g, f, p, y, m), h = P, g = T;
      } else
        r.lineTo(y, m);
    }
    s = y, v = m, c += n;
  }
  return _;
}
var Ot = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return r;
  })()
), pe = (
  /** @class */
  (function(r) {
    Q(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return a.type = "ec-polyline", a;
    }
    return e.prototype.getDefaultStyle = function() {
      return {
        stroke: Et.color.neutral99,
        fill: null
      };
    }, e.prototype.getDefaultShape = function() {
      return new Ot();
    }, e.prototype.buildPath = function(t, a) {
      var o = a.points, n = 0, i = o.length / 2;
      if (a.connectNulls) {
        for (; i > 0 && G(o[i * 2 - 2], o[i * 2 - 1]); i--)
          ;
        for (; n < i && G(o[n * 2], o[n * 2 + 1]); n++)
          ;
      }
      for (; n < i; )
        n += tt(t, o, n, i, i, 1, a.smooth, a.smoothMonotone, a.connectNulls) + 1;
    }, e.prototype.getPointOn = function(t, a) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var o = this.path, n = o.data, i = Wt.CMD, l, u, s = a === "x", v = [], h = 0; h < n.length; ) {
        var g = n[h++], f = void 0, p = void 0, c = void 0, _ = void 0, y = void 0, m = void 0, d = void 0;
        switch (g) {
          case i.M:
            l = n[h++], u = n[h++];
            break;
          case i.L:
            if (f = n[h++], p = n[h++], d = s ? (t - l) / (f - l) : (t - u) / (p - u), d <= 1 && d >= 0) {
              var E = s ? (p - u) * d + u : (f - l) * d + l;
              return s ? [t, E] : [E, t];
            }
            l = f, u = p;
            break;
          case i.C:
            f = n[h++], p = n[h++], c = n[h++], _ = n[h++], y = n[h++], m = n[h++];
            var D = s ? nt(l, f, c, y, t, v) : nt(u, p, _, m, t, v);
            if (D > 0)
              for (var S = 0; S < D; S++) {
                var b = v[S];
                if (b <= 1 && b >= 0) {
                  var E = s ? it(u, p, _, m, b) : it(l, f, c, y, b);
                  return s ? [t, E] : [E, t];
                }
              }
            l = y, u = m;
            break;
        }
      }
    }, e;
  })(kt)
), me = (
  /** @class */
  (function(r) {
    Q(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e;
  })(Ot)
), ye = (
  /** @class */
  (function(r) {
    Q(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return a.type = "ec-polygon", a;
    }
    return e.prototype.getDefaultShape = function() {
      return new me();
    }, e.prototype.buildPath = function(t, a) {
      var o = a.points, n = a.stackedOnPoints, i = 0, l = o.length / 2, u = a.smoothMonotone;
      if (a.connectNulls) {
        for (; l > 0 && G(o[l * 2 - 2], o[l * 2 - 1]); l--)
          ;
        for (; i < l && G(o[i * 2], o[i * 2 + 1]); i++)
          ;
      }
      for (; i < l; ) {
        var s = tt(t, o, i, l, l, 1, a.smooth, u, a.connectNulls);
        tt(t, n, i + s - 1, s, l, -1, a.stackedOnSmooth, u, a.connectNulls), i += s + 1, t.closePath();
      }
    }, e;
  })(kt)
), mt = {};
function de(r, e) {
  if (process.env.NODE_ENV !== "production") {
    var t = r + "^_^" + e;
    mt[t] || (console.warn('[ECharts] DEPRECATED: "' + r + '" has been deprecated. ' + e), mt[t] = !0);
  }
}
function yt(r, e) {
  if (r.length === e.length) {
    for (var t = 0; t < r.length; t++)
      if (r[t] !== e[t])
        return;
    return !0;
  }
}
function dt(r) {
  for (var e = pt(), t = pt(), a = 0; a < r.length; ) {
    var o = r[a++], n = r[a++];
    G(o, n) || (gt(e, o), gt(t, n));
  }
  return [e, t];
}
function bt(r, e) {
  var t = dt(r), a = t[0], o = t[1], n = dt(e), i = n[0], l = n[1];
  return Math.max(Math.abs(a[0] - i[0]), Math.abs(o[0] - l[0]), Math.abs(a[1] - i[1]), Math.abs(o[1] - l[1]));
}
function St(r) {
  return Lt(r) ? r : r ? 0.5 : 0;
}
function be(r, e, t) {
  if (t.valueDim == null)
    return [];
  for (var a = e.count(), o = Z(a * 2), n = 0; n < a; n++) {
    var i = Ct(t, r, e, n);
    o[n * 2] = i[0], o[n * 2 + 1] = i[1];
  }
  return o;
}
function $(r, e, t, a, o) {
  var n = t.getBaseAxis(), i = n.dim === "x" || n.dim === "radius" ? 0 : 1, l = [], u = 0, s = [], v = [], h = [], g = [];
  if (o) {
    for (u = 0; u < r.length; u += 2) {
      var f = e || r;
      G(f[u], f[u + 1]) || g.push(r[u], r[u + 1]);
    }
    r = g;
  }
  for (u = 0; u < r.length - 2; u += 2)
    switch (h[0] = r[u + 2], h[1] = r[u + 3], v[0] = r[u], v[1] = r[u + 1], l.push(v[0], v[1]), a) {
      case "end":
        s[i] = h[i], s[1 - i] = v[1 - i], l.push(s[0], s[1]);
        break;
      case "middle":
        var p = (v[i] + h[i]) / 2, c = [];
        s[i] = c[i] = p, s[1 - i] = v[1 - i], c[1 - i] = h[1 - i], l.push(s[0], s[1]), l.push(c[0], c[1]);
        break;
      default:
        s[i] = v[i], s[1 - i] = h[1 - i], l.push(s[0], s[1]);
    }
  return l.push(r[u++], r[u++]), l;
}
function Se(r, e) {
  var t = [], a = r.length, o, n;
  function i(v, h, g) {
    var f = v.coord, p = (g - f) / (h.coord - f), c = Yt(p, [v.color, h.color]);
    return {
      coord: g,
      color: c
    };
  }
  for (var l = 0; l < a; l++) {
    var u = r[l], s = u.coord;
    if (s < 0)
      o = u;
    else if (s > e) {
      n ? t.push(i(n, u, e)) : o && t.push(i(o, u, 0), i(o, u, e));
      break;
    } else
      o && (t.push(i(o, u, 0)), o = null), t.push(u), n = u;
  }
  return t;
}
function De(r, e, t) {
  var a = r.getVisual("visualMeta");
  if (!(!a || !a.length || !r.count())) {
    if (e.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var o, n, i = a.length - 1; i >= 0; i--) {
      var l = r.getDimensionInfo(a[i].dimension);
      if (o = l && l.coordDim, o === "x" || o === "y") {
        n = a[i];
        break;
      }
    }
    if (!n) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var u = e.getAxis(o), s = Pt(n.stops, function(d) {
      return {
        coord: u.toGlobalCoord(u.dataToCoord(d.value)),
        color: d.color
      };
    }), v = s.length, h = n.outerColors.slice();
    v && s[0].coord > s[v - 1].coord && (s.reverse(), h.reverse());
    var g = Se(s, o === "x" ? t.getWidth() : t.getHeight()), f = g.length;
    if (!f && v)
      return s[0].coord < 0 ? h[1] ? h[1] : s[v - 1].color : h[0] ? h[0] : s[0].color;
    var p = 10, c = g[0].coord - p, _ = g[f - 1].coord + p, y = _ - c;
    if (y < 1e-3)
      return "transparent";
    wt(g, function(d) {
      d.offset = (d.coord - c) / y;
    }), g.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: f ? g[f - 1].offset : 0.5,
      color: h[1] || "transparent"
    }), g.unshift({
      offset: f ? g[0].offset : 0.5,
      color: h[0] || "transparent"
    });
    var m = new Qt(0, 0, 0, 0, g, !0);
    return m[o] = c, m[o + "2"] = _, m;
  }
}
function _e(r, e, t) {
  var a = r.get("showAllSymbol"), o = a === "auto";
  if (!(a && !o)) {
    var n = t.getAxesByScale("ordinal")[0];
    if (n && !(o && Ee(n, e))) {
      var i = e.mapDimension(n.dim), l = {};
      return wt(n.getViewLabels(), function(u) {
        u.tick.offInterval || (l[Zt(n.scale, u.tick)] = 1);
      }), function(u) {
        return !l.hasOwnProperty(e.get(i, u));
      };
    }
  }
}
function Ee(r, e) {
  var t = r.getExtent(), a = Math.abs(t[1] - t[0]) / r.scale.count();
  isNaN(a) && (a = 0);
  for (var o = e.count(), n = Math.max(1, Math.round(o / 5)), i = 0; i < o; i += n)
    if (At.getSymbolSize(
      e,
      i
      // Only for cartesian, where `isHorizontal` exists.
    )[r.isHorizontal() ? 1 : 0] * 1.5 > a)
      return !1;
  return !0;
}
function Pe(r) {
  for (var e = r.length / 2; e > 0 && G(r[e * 2 - 2], r[e * 2 - 1]); e--)
    ;
  return e - 1;
}
function Dt(r, e) {
  return [r[e * 2], r[e * 2 + 1]];
}
function Le(r, e, t) {
  for (var a = r.length / 2, o = t === "x" ? 0 : 1, n, i, l = 0, u = -1, s = 0; s < a; s++)
    if (i = r[s * 2 + o], !G(i, r[s * 2 + 1 - o])) {
      if (s === 0) {
        n = i;
        continue;
      }
      if (n <= e && i >= e || n >= e && i <= e) {
        u = s;
        break;
      }
      l = s, n = i;
    }
  return {
    range: [l, u],
    t: (e - n) / (i - n)
  };
}
function Vt(r) {
  if (r.get(["endLabel", "show"]))
    return !0;
  for (var e = 0; e < ct.length; e++)
    if (r.get([ct[e], "endLabel", "show"]))
      return !0;
  return !1;
}
function x(r, e, t, a) {
  if (ue(e, "cartesian2d")) {
    var o = a.getModel("endLabel"), n = o.get("valueAnimation"), i = a.getData(), l = {
      lastFrameIndex: 0
    }, u = Vt(a) ? function(f, p) {
      r._endLabelOnDuring(f, p, i, l, n, o, e);
    } : null, s = e.getBaseAxis().isHorizontal(), v = Kt(e, t, a, function() {
      var f = r._endLabel;
      f && t && l.originalX != null && f.attr({
        x: l.originalX,
        y: l.originalY
      });
    }, u);
    if (!a.get("clip", !0)) {
      var h = v.shape, g = Math.max(h.width, h.height);
      s ? (h.y -= g, h.height += g * 2) : (h.x -= g, h.width += g * 2);
    }
    return u && u(1, v), v;
  } else
    return process.env.NODE_ENV !== "production" && a.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), Xt(e, t, a);
}
function ke(r, e) {
  var t = e.getBaseAxis(), a = t.isHorizontal(), o = t.inverse, n = a ? o ? "right" : "left" : "center", i = a ? "middle" : o ? "top" : "bottom";
  return {
    normal: {
      align: r.get("align") || n,
      verticalAlign: r.get("verticalAlign") || i
    }
  };
}
var we = (
  /** @class */
  (function(r) {
    Q(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.init = function() {
      var t = new _t(), a = new se();
      this.group.add(a.group), this._symbolDraw = a, this._lineGroup = t, this._changePolyState = Ut(this._changePolyState, this);
    }, e.prototype.render = function(t, a, o) {
      var n = t.coordinateSystem, i = this.group, l = t.getData(), u = t.getModel("lineStyle"), s = t.getModel("areaStyle"), v = l.getLayout("points") || [], h = n.type === "polar", g = this._coordSys, f = this._symbolDraw, p = this._polyline, c = this._polygon, _ = this._lineGroup, y = !a.ssr && t.get("animation"), m = !s.isEmpty(), d = s.get("origin"), E = Tt(n, l, d), D = m && be(n, l, E), S = t.get("showSymbol"), b = t.get("connectNulls"), A = S && !h && _e(t, l, n), w = this._data;
      w && w.eachItemGraphicEl(function(R, Nt) {
        R.__temp && (i.remove(R), w.setItemGraphicEl(Nt, null));
      }), S || f.remove(), i.add(_);
      var L = h ? !1 : t.get("step"), k;
      n && n.getArea && t.get("clip", !0) && (k = n.getArea(), k.width != null ? (k.x -= 0.1, k.y -= 0.1, k.width += 0.2, k.height += 0.2) : k.r0 && (k.r0 -= 0.5, k.r += 0.5)), this._clipShapeForSymbol = k;
      var P = De(l, n, o) || l.getVisual("style")[l.getVisual("drawType")];
      if (!(p && g.type === n.type && L === this._step))
        S && f.updateData(l, {
          isIgnore: A,
          clipShape: k,
          disableAnimation: !0,
          getSymbolPoint: function(R) {
            return [v[R * 2], v[R * 2 + 1]];
          }
        }), y && this._initSymbolLabelAnimation(l, n, k), L && (D && (D = $(D, v, n, L, b)), v = $(v, null, n, L, b)), p = this._newPolyline(v), m ? c = this._newPolygon(v, D) : c && (_.remove(c), c = this._polygon = null), h || this._initOrUpdateEndLabel(t, n, ot(P)), _.setClipPath(x(this, n, !0, t));
      else {
        m && !c ? c = this._newPolygon(v, D) : c && !m && (_.remove(c), c = this._polygon = null), h || this._initOrUpdateEndLabel(t, n, ot(P));
        var T = _.getClipPath();
        if (T) {
          var z = x(this, n, !1, t);
          Bt(T, {
            shape: z.shape
          }, t);
        } else
          _.setClipPath(x(this, n, !0, t));
        S && f.updateData(l, {
          isIgnore: A,
          clipShape: k,
          disableAnimation: !0,
          getSymbolPoint: function(R) {
            return [v[R * 2], v[R * 2 + 1]];
          }
        }), (!yt(this._stackedOnPoints, D) || !yt(this._points, v)) && (y ? this._doUpdateAnimation(l, D, n, o, L, d, b) : (L && (D && (D = $(D, v, n, L, b)), v = $(v, null, n, L, b)), p.setShape({
          points: v
        }), c && c.setShape({
          points: v,
          stackedOnPoints: D
        })));
      }
      var I = t.getModel("emphasis"), V = I.get("focus"), H = I.get("blurScope"), C = I.get("disabled");
      if (p.useStyle(st(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: P,
          lineJoin: "bevel"
        }
      )), lt(p, t, "lineStyle"), p.style.lineWidth > 0 && t.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var O = p.getState("emphasis").style;
        O.lineWidth = +p.style.lineWidth + 1;
      }
      K(p).seriesIndex = t.seriesIndex, ut(p, V, H, C);
      var W = St(t.get("smooth")), U = t.get("smoothMonotone");
      if (p.setShape({
        smooth: W,
        smoothMonotone: U,
        connectNulls: b
      }), c) {
        var j = l.getCalculationInfo("stackedOnSeries"), N = 0;
        c.useStyle(st(s.getAreaStyle(), {
          fill: P,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: l.getVisual("style").decal
        })), j && (N = St(j.get("smooth"))), c.setShape({
          smooth: W,
          stackedOnSmooth: N,
          smoothMonotone: U,
          connectNulls: b
        }), lt(c, t, "areaStyle"), K(c).seriesIndex = t.seriesIndex, ut(c, V, H, C);
      }
      var F = this._changePolyState;
      l.eachItemGraphicEl(function(R) {
        R && (R.onHoverStateChange = F);
      }), this._polyline.onHoverStateChange = F, this._data = l, this._coordSys = n, this._stackedOnPoints = D, this._points = v, this._step = L, this._valueOrigin = d;
      var q = t.get("triggerEvent"), J = t.get("triggerLineEvent");
      process.env.NODE_ENV !== "production" && J && de("triggerLineEvent", "Use the `triggerEvent` option instead.");
      var It = J === !0 || q === !0 || q === "line", Gt = J === !0 || q === !0 || q === "area";
      this.packEventData(t, p, It), c && this.packEventData(t, c, Gt);
    }, e.prototype.packEventData = function(t, a, o) {
      K(a).eventData = o ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: t.componentIndex,
        seriesIndex: t.seriesIndex,
        seriesName: t.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: a === this._polygon ? "area" : "line"
      } : null;
    }, e.prototype.highlight = function(t, a, o, n) {
      var i = t.getData(), l = vt(i, n);
      if (this._changePolyState("emphasis"), !(l instanceof Array) && l != null && l >= 0) {
        var u = i.getLayout("points"), s = i.getItemGraphicEl(l);
        if (!s) {
          var v = u[l * 2], h = u[l * 2 + 1];
          if (G(v, h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(v, h))
            return;
          var g = t.get("zlevel") || 0, f = t.get("z") || 0;
          s = new At(i, l), s.x = v, s.y = h, s.setZ(g, f);
          var p = s.getSymbolPath().getTextContent();
          p && (p.zlevel = g, p.z = f, p.z2 = this._polyline.z2 + 1), s.__temp = !0, i.setItemGraphicEl(l, s), s.stopSymbolAnimation(!0), this.group.add(s);
        }
        s.highlight();
      } else
        X.prototype.highlight.call(this, t, a, o, n);
    }, e.prototype.downplay = function(t, a, o, n) {
      var i = t.getData(), l = vt(i, n);
      if (this._changePolyState("normal"), l != null && l >= 0) {
        var u = i.getItemGraphicEl(l);
        u && (u.__temp ? (i.setItemGraphicEl(l, null), this.group.remove(u)) : u.downplay());
      } else
        X.prototype.downplay.call(this, t, a, o, n);
    }, e.prototype._changePolyState = function(t) {
      var a = this._polygon;
      ht(this._polyline, t), a && ht(a, t);
    }, e.prototype._newPolyline = function(t) {
      var a = this._polyline;
      return a && this._lineGroup.remove(a), a = new pe({
        shape: {
          points: t
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(a), this._polyline = a, a;
    }, e.prototype._newPolygon = function(t, a) {
      var o = this._polygon;
      return o && this._lineGroup.remove(o), o = new ye({
        shape: {
          points: t,
          stackedOnPoints: a
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(o), this._polygon = o, o;
    }, e.prototype._initSymbolLabelAnimation = function(t, a, o) {
      var n, i, l = a.getBaseAxis(), u = l.inverse;
      a.type === "cartesian2d" ? (n = l.isHorizontal(), i = !1) : a.type === "polar" && (n = l.dim === "angle", i = !0);
      var s = t.hostModel, v = s.get("animationDuration");
      Y(v) && (v = v(null));
      var h = s.get("animationDelay") || 0, g = Y(h) ? h(null) : h;
      t.eachItemGraphicEl(function(f, p) {
        var c = f;
        if (c) {
          var _ = [f.x, f.y], y = void 0, m = void 0, d = void 0;
          if (o)
            if (i) {
              var E = o, D = a.pointToCoord(_);
              n ? (y = E.startAngle, m = E.endAngle, d = -D[1] / 180 * Math.PI) : (y = E.r0, m = E.r, d = D[0]);
            } else {
              var S = o;
              n ? (y = S.x, m = S.x + S.width, d = f.x) : (y = S.y + S.height, m = S.y, d = f.y);
            }
          var b = m === y ? 0 : (d - y) / (m - y);
          u && (b = 1 - b);
          var A = Y(h) ? h(p) : v * b + g, w = c.getSymbolPath(), L = w.getTextContent();
          c.attr({
            scaleX: 0,
            scaleY: 0
          }), c.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: A
          }), L && L.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: A
          }), w.disableLabelAnimation = !0;
        }
      });
    }, e.prototype._initOrUpdateEndLabel = function(t, a, o) {
      var n = t.getModel("endLabel");
      if (Vt(t)) {
        var i = t.getData(), l = this._polyline, u = i.getLayout("points");
        if (!u) {
          l.removeTextContent(), this._endLabel = null;
          return;
        }
        var s = this._endLabel;
        s || (s = this._endLabel = new Mt({
          z2: 200
          // should be higher than item symbol
        }), s.ignoreClip = !0, l.setTextContent(this._endLabel), l.disableLabelAnimation = !0);
        var v = Pe(u);
        v >= 0 && ($t(l, qt(t, "endLabel"), {
          inheritColor: o,
          labelFetcher: t,
          labelDataIndex: v,
          defaultText: function(h, g, f) {
            return f != null ? xt(i, f) : te(i, h);
          },
          enableTextSetter: !0
        }, ke(n, a)), l.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, e.prototype._endLabelOnDuring = function(t, a, o, n, i, l, u) {
      var s = this._endLabel, v = this._polyline;
      if (s) {
        t < 1 && n.originalX == null && (n.originalX = s.x, n.originalY = s.y);
        var h = o.getLayout("points"), g = o.hostModel, f = g.get("connectNulls"), p = l.get("precision"), c = l.get("distance") || 0, _ = u.getBaseAxis(), y = _.isHorizontal(), m = _.inverse, d = a.shape, E = m ? y ? d.x : d.y + d.height : y ? d.x + d.width : d.y, D = (y ? c : 0) * (m ? -1 : 1), S = (y ? 0 : -c) * (m ? -1 : 1), b = y ? "x" : "y", A = Le(h, E, b), w = A.range, L = w[1] - w[0], k = void 0;
        if (L >= 1) {
          if (L > 1 && !f) {
            var P = Dt(h, w[0]);
            s.attr({
              x: P[0] + D,
              y: P[1] + S
            }), i && (k = g.getRawValue(w[0]));
          } else {
            var P = v.getPointOn(E, b);
            P && s.attr({
              x: P[0] + D,
              y: P[1] + S
            });
            var T = g.getRawValue(w[0]), z = g.getRawValue(w[1]);
            i && (k = jt(o, p, T, z, A.t));
          }
          n.lastFrameIndex = w[0];
        } else {
          var I = t === 1 || n.lastFrameIndex > 0 ? w[0] : 0, P = Dt(h, I);
          i && (k = g.getRawValue(I)), s.attr({
            x: P[0] + D,
            y: P[1] + S
          });
        }
        if (i) {
          var V = Jt(s);
          typeof V.setLabelText == "function" && V.setLabelText(k);
        }
      }
    }, e.prototype._doUpdateAnimation = function(t, a, o, n, i, l, u) {
      var s = this._polyline, v = this._polygon, h = t.hostModel, g = ge(this._data, t, this._stackedOnPoints, a, this._coordSys, o, this._valueOrigin), f = g.current, p = g.stackedOnCurrent, c = g.next, _ = g.stackedOnNext;
      if (i && (p = $(g.stackedOnCurrent, g.current, o, i, u), f = $(g.current, null, o, i, u), _ = $(g.stackedOnNext, g.next, o, i, u), c = $(g.next, null, o, i, u)), bt(f, c) > 3e3 || v && bt(p, _) > 3e3) {
        s.stopAnimation(), s.setShape({
          points: c
        }), v && (v.stopAnimation(), v.setShape({
          points: c,
          stackedOnPoints: _
        }));
        return;
      }
      s.shape.__points = g.current, s.shape.points = f;
      var y = {
        shape: {
          points: c
        }
      };
      g.current !== f && (y.shape.__points = g.next), s.stopAnimation(), ft(s, y, h), v && (v.setShape({
        // Reuse the points with polyline.
        points: f,
        stackedOnPoints: p
      }), v.stopAnimation(), ft(v, {
        shape: {
          stackedOnPoints: _
        }
      }, h), s.shape.points !== v.shape.points && (v.shape.points = s.shape.points));
      for (var m = [], d = g.status, E = 0; E < d.length; E++) {
        var D = d[E].cmd;
        if (D === "=") {
          var S = t.getItemGraphicEl(d[E].idx1);
          S && m.push({
            el: S,
            ptIdx: E
            // Index of points
          });
        }
      }
      s.animators && s.animators.length && s.animators[0].during(function() {
        v && v.dirtyShape();
        for (var b = s.shape.__points, A = 0; A < m.length; A++) {
          var w = m[A].el, L = m[A].ptIdx * 2;
          w.x = b[L], w.y = b[L + 1], w.markRedraw();
        }
      });
    }, e.prototype.remove = function(t) {
      var a = this.group, o = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), o && o.eachItemGraphicEl(function(n, i) {
        n.__temp && (a.remove(n), o.setItemGraphicEl(i, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, e.type = "line", e;
  })(X)
);
function Ae(r) {
  r.registerChartView(we), r.registerSeriesModel(he), r.registerLayout(le("line", !0)), r.registerVisual({
    seriesType: "line",
    reset: function(e) {
      var t = e.getData(), a = e.getModel("lineStyle").getLineStyle();
      a && !a.stroke && (a.stroke = t.getVisual("style").fill), t.setVisual("legendLineStyle", a);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, ve("line"));
}
function Te(r) {
  if (typeof r != "object" || r === null || !("categories" in r) || !("series" in r))
    return !1;
  const e = r.categories, t = r.series;
  return !Array.isArray(e) || !e.every((a) => typeof a == "string") ? !1 : Array.isArray(t) && t.every((a) => typeof a != "object" || a === null || !("key" in a) || typeof a.key != "string" || !("label" in a) || typeof a.label != "string" || !("values" in a) || !Array.isArray(a.values) ? !1 : a.values.every((o) => typeof o == "number" || o === null) && a.values.length === e.length);
}
function Ce(r) {
  return r.map((e) => ({
    type: "line",
    id: e.key,
    name: e.label,
    data: e.values,
    showSymbol: !1,
    smooth: !0,
    emphasis: { focus: "series" }
  }));
}
function Oe(r) {
  return r.scale === "logarithmic" ? "log" : "value";
}
ae([Ae, re, ne, ie, oe]);
class Ve {
  constructor(e) {
    et(this, "chart");
    this.chart = ee(e, void 0, { renderer: "canvas" });
  }
  render(e, t) {
    if (!Te(e))
      throw new Error("The line graph data is invalid.");
    const a = getComputedStyle(document.documentElement), o = a.getPropertyValue("--bs-body-color").trim() || "#212529", n = a.getPropertyValue("--cms-border").trim() || "#dee2e6", i = a.getPropertyValue("--cms-surface").trim() || "#ffffff", l = {
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
        textStyle: { color: o }
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: i,
        borderColor: n,
        textStyle: { color: o }
      },
      xAxis: {
        type: "category",
        boundaryGap: !1,
        data: e.categories,
        axisLabel: { color: o },
        axisLine: { lineStyle: { color: n } }
      },
      yAxis: {
        type: Oe(t),
        axisLabel: { color: o },
        splitLine: { lineStyle: { color: n } }
      },
      series: Ce(e.series)
    };
    this.chart.setOption(l, !0);
  }
  resize() {
    this.chart.resize();
  }
  dispose() {
    this.chart.dispose();
  }
}
const Re = (r) => new Ve(r);
export {
  Re as createLineGraphRenderer
};
