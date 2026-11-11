import { _ as j, e as Gt, G as _t, L as at, t as Dt, M as Ft, m as Et, N as et, h as Pt, O as Q, Q as Rt, T as rt, P as kt, U as nt, V as Ht, W as it, n as zt, X as ot, F as st, x as K, E as lt, Y as vt, C as X, Z as ut, $ as Y, a0 as Wt, A as Bt, z as Ut, a1 as Mt, q as qt, o as ht, H as Lt, a2 as Zt, a3 as Jt, a4 as $t, a5 as Qt, a6 as ft, a7 as ct, a8 as jt, a9 as gt, K as Kt, B as Xt } from "./installCanvasRenderer-nrYOY0X5.js";
import { S as Yt, a as wt, p as xt } from "./points-6m8fT05o.js";
import { i as ta, d as aa } from "./dataSample-BudHJdDG.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var ea = (
  /** @class */
  (function(o) {
    j(a, o);
    function a() {
      var t = o !== null && o.apply(this, arguments) || this;
      return t.type = a.type, t.hasSymbolVisual = !0, t;
    }
    return a.prototype.getInitialData = function(t) {
      if (process.env.NODE_ENV !== "production") {
        var e = t.coordinateSystem;
        if (e !== "polar" && e !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return Gt(null, this, {
        useEncodeDefaulter: !0
      });
    }, a.prototype.getLegendIcon = function(t) {
      var e = new _t(), s = at("line", 0, t.itemHeight / 2, t.itemWidth, 0, t.lineStyle.stroke, !1);
      e.add(s), s.setStyle(t.lineStyle);
      var r = this.getData().getVisual("symbol"), n = this.getData().getVisual("symbolRotate"), l = r === "none" ? "circle" : r, v = t.itemHeight * 0.8, i = at(l, (t.itemWidth - v) / 2, (t.itemHeight - v) / 2, v, v, t.itemStyle.fill);
      e.add(i), i.setStyle(t.itemStyle);
      var u = t.iconRotate === "inherit" ? n : t.iconRotate || 0;
      return i.rotation = u * Math.PI / 180, i.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), l.indexOf("empty") > -1 && (i.style.stroke = i.style.fill, i.style.fill = Dt.color.neutral00, i.style.lineWidth = 2), e;
    }, a.type = "series.line", a.dependencies = ["grid", "polar"], a.defaultOption = {
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
    }, a;
  })(Ft)
);
function At(o, a, t) {
  var e = o.getBaseAxis(), s = o.getOtherAxis(e), r = ra(s, t), n = e.dim, l = s.dim, v = a.mapDimension(l), i = a.mapDimension(n), u = l === "x" || l === "radius" ? 1 : 0, h = Et(o.dimensions, function(p) {
    return a.mapDimension(p);
  }), g = !1, f = a.getCalculationInfo("stackResultDimension");
  return et(
    a,
    h[0]
    /* , dims[1] */
  ) && (g = !0, h[0] = f), et(
    a,
    h[1]
    /* , dims[0] */
  ) && (g = !0, h[1] = f), {
    dataDimsForPoint: h,
    valueStart: r,
    valueAxisDim: l,
    baseAxisDim: n,
    stacked: !!g,
    valueDim: v,
    baseDim: i,
    baseDataOffset: u,
    stackedOverDimension: a.getCalculationInfo("stackedOverDimension")
  };
}
function ra(o, a) {
  var t = 0, e = o.scale.getExtent();
  return a === "start" ? t = e[0] : a === "end" ? t = e[1] : Pt(a) && !isNaN(a) ? t = a : e[0] > 0 ? t = e[0] : e[1] < 0 && (t = e[1]), t;
}
function Tt(o, a, t, e) {
  var s = NaN;
  o.stacked && (s = t.get(t.getCalculationInfo("stackedOverDimension"), e)), isNaN(s) && (s = o.valueStart);
  var r = o.baseDataOffset, n = [];
  return n[r] = t.get(o.baseDim, e), n[1 - r] = s, a.dataToPoint(n);
}
function N(o, a) {
  return !isFinite(o) || !isFinite(a);
}
function na(o, a) {
  var t = [];
  return a.diff(o).add(function(e) {
    t.push({
      cmd: "+",
      idx: e
    });
  }).update(function(e, s) {
    t.push({
      cmd: "=",
      idx: s,
      idx1: e
    });
  }).remove(function(e) {
    t.push({
      cmd: "-",
      idx: e
    });
  }).execute(), t;
}
function ia(o, a, t, e, s, r, n, l) {
  for (var v = na(o, a), i = [], u = [], h = [], g = [], f = [], p = [], c = [], D = At(s, a, n), y = o.getLayout("points") || [], m = a.getLayout("points") || [], d = 0; d < v.length; d++) {
    var E = v[d], _ = !0, S = void 0, b = void 0;
    switch (E.cmd) {
      case "=":
        S = E.idx * 2, b = E.idx1 * 2;
        var A = y[S], w = y[S + 1], k = m[b], L = m[b + 1];
        (isNaN(A) || isNaN(w)) && (A = k, w = L), i.push(A, w), u.push(k, L), h.push(t[S], t[S + 1]), g.push(e[b], e[b + 1]), c.push(a.getRawIndex(E.idx1));
        break;
      case "+":
        var P = E.idx, T = D.dataDimsForPoint, H = s.dataToPoint([a.get(T[0], P), a.get(T[1], P)]);
        b = P * 2, i.push(H[0], H[1]), u.push(m[b], m[b + 1]);
        var V = Tt(D, s, a, P);
        h.push(V[0], V[1]), g.push(e[b], e[b + 1]), c.push(a.getRawIndex(P));
        break;
      case "-":
        _ = !1;
    }
    _ && (f.push(E), p.push(p.length));
  }
  p.sort(function(Z, $) {
    return c[Z] - c[$];
  });
  for (var I = i.length, z = Q(I), O = Q(I), C = Q(I), W = Q(I), B = [], d = 0; d < p.length; d++) {
    var J = p[d], G = d * 2, F = J * 2;
    z[G] = i[F], z[G + 1] = i[F + 1], O[G] = u[F], O[G + 1] = u[F + 1], C[G] = h[F], C[G + 1] = h[F + 1], W[G] = g[F], W[G + 1] = g[F + 1], B[d] = f[J];
  }
  return {
    current: z,
    next: O,
    stackedOnCurrent: C,
    stackedOnNext: W,
    status: B
  };
}
var U = Math.min, M = Math.max;
function tt(o, a, t, e, s, r, n, l, v) {
  for (var i, u, h, g, f, p, c = t, D = 0; D < e; D++) {
    var y = a[c * 2], m = a[c * 2 + 1];
    if (c >= s || c < 0)
      break;
    if (N(y, m)) {
      if (v) {
        c += r;
        continue;
      }
      break;
    }
    if (c === t)
      o[r > 0 ? "moveTo" : "lineTo"](y, m), h = y, g = m;
    else {
      var d = y - i, E = m - u;
      if (d * d + E * E < 0.5) {
        c += r;
        continue;
      }
      if (n > 0) {
        for (var _ = c + r, S = a[_ * 2], b = a[_ * 2 + 1]; S === y && b === m && D < e; )
          D++, _ += r, c += r, S = a[_ * 2], b = a[_ * 2 + 1], y = a[c * 2], m = a[c * 2 + 1], d = y - i, E = m - u;
        var A = D + 1;
        if (v)
          for (; N(S, b) && A < e; )
            A++, _ += r, S = a[_ * 2], b = a[_ * 2 + 1];
        var w = 0.5, k = 0, L = 0, P = void 0, T = void 0;
        if (A >= e || N(S, b))
          f = y, p = m;
        else {
          k = S - i, L = b - u;
          var H = y - i, V = S - y, I = m - u, z = b - m, O = void 0, C = void 0;
          if (l === "x") {
            O = Math.abs(H), C = Math.abs(V);
            var W = k > 0 ? 1 : -1;
            f = y - W * O * n, p = m, P = y + W * C * n, T = m;
          } else if (l === "y") {
            O = Math.abs(I), C = Math.abs(z);
            var B = L > 0 ? 1 : -1;
            f = y, p = m - B * O * n, P = y, T = m + B * C * n;
          } else
            O = Math.sqrt(H * H + I * I), C = Math.sqrt(V * V + z * z), w = C / (C + O), f = y - k * n * (1 - w), p = m - L * n * (1 - w), P = y + k * n * w, T = m + L * n * w, P = U(P, M(S, y)), T = U(T, M(b, m)), P = M(P, U(S, y)), T = M(T, U(b, m)), k = P - y, L = T - m, f = y - k * O / C, p = m - L * O / C, f = U(f, M(i, y)), p = U(p, M(u, m)), f = M(f, U(i, y)), p = M(p, U(u, m)), k = y - f, L = m - p, P = y + k * C / O, T = m + L * C / O;
        }
        o.bezierCurveTo(h, g, f, p, y, m), h = P, g = T;
      } else
        o.lineTo(y, m);
    }
    i = y, u = m, c += r;
  }
  return D;
}
var Ot = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return o;
  })()
), oa = (
  /** @class */
  (function(o) {
    j(a, o);
    function a(t) {
      var e = o.call(this, t) || this;
      return e.type = "ec-polyline", e;
    }
    return a.prototype.getDefaultStyle = function() {
      return {
        stroke: Dt.color.neutral99,
        fill: null
      };
    }, a.prototype.getDefaultShape = function() {
      return new Ot();
    }, a.prototype.buildPath = function(t, e) {
      var s = e.points, r = 0, n = s.length / 2;
      if (e.connectNulls) {
        for (; n > 0 && N(s[n * 2 - 2], s[n * 2 - 1]); n--)
          ;
        for (; r < n && N(s[r * 2], s[r * 2 + 1]); r++)
          ;
      }
      for (; r < n; )
        r += tt(t, s, r, n, n, 1, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
    }, a.prototype.getPointOn = function(t, e) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var s = this.path, r = s.data, n = Rt.CMD, l, v, i = e === "x", u = [], h = 0; h < r.length; ) {
        var g = r[h++], f = void 0, p = void 0, c = void 0, D = void 0, y = void 0, m = void 0, d = void 0;
        switch (g) {
          case n.M:
            l = r[h++], v = r[h++];
            break;
          case n.L:
            if (f = r[h++], p = r[h++], d = i ? (t - l) / (f - l) : (t - v) / (p - v), d <= 1 && d >= 0) {
              var E = i ? (p - v) * d + v : (f - l) * d + l;
              return i ? [t, E] : [E, t];
            }
            l = f, v = p;
            break;
          case n.C:
            f = r[h++], p = r[h++], c = r[h++], D = r[h++], y = r[h++], m = r[h++];
            var _ = i ? rt(l, f, c, y, t, u) : rt(v, p, D, m, t, u);
            if (_ > 0)
              for (var S = 0; S < _; S++) {
                var b = u[S];
                if (b <= 1 && b >= 0) {
                  var E = i ? nt(v, p, D, m, b) : nt(l, f, c, y, b);
                  return i ? [t, E] : [E, t];
                }
              }
            l = y, v = m;
            break;
        }
      }
    }, a;
  })(kt)
), sa = (
  /** @class */
  (function(o) {
    j(a, o);
    function a() {
      return o !== null && o.apply(this, arguments) || this;
    }
    return a;
  })(Ot)
), la = (
  /** @class */
  (function(o) {
    j(a, o);
    function a(t) {
      var e = o.call(this, t) || this;
      return e.type = "ec-polygon", e;
    }
    return a.prototype.getDefaultShape = function() {
      return new sa();
    }, a.prototype.buildPath = function(t, e) {
      var s = e.points, r = e.stackedOnPoints, n = 0, l = s.length / 2, v = e.smoothMonotone;
      if (e.connectNulls) {
        for (; l > 0 && N(s[l * 2 - 2], s[l * 2 - 1]); l--)
          ;
        for (; n < l && N(s[n * 2], s[n * 2 + 1]); n++)
          ;
      }
      for (; n < l; ) {
        var i = tt(t, s, n, l, l, 1, e.smooth, v, e.connectNulls);
        tt(t, r, n + i - 1, i, l, -1, e.stackedOnSmooth, v, e.connectNulls), n += i + 1, t.closePath();
      }
    }, a;
  })(kt)
), pt = {};
function va(o, a) {
  if (process.env.NODE_ENV !== "production") {
    var t = o + "^_^" + a;
    pt[t] || (console.warn('[ECharts] DEPRECATED: "' + o + '" has been deprecated. ' + a), pt[t] = !0);
  }
}
function mt(o, a) {
  if (o.length === a.length) {
    for (var t = 0; t < o.length; t++)
      if (o[t] !== a[t])
        return;
    return !0;
  }
}
function yt(o) {
  for (var a = gt(), t = gt(), e = 0; e < o.length; ) {
    var s = o[e++], r = o[e++];
    N(s, r) || (ct(a, s), ct(t, r));
  }
  return [a, t];
}
function dt(o, a) {
  var t = yt(o), e = t[0], s = t[1], r = yt(a), n = r[0], l = r[1];
  return Math.max(Math.abs(e[0] - n[0]), Math.abs(s[0] - l[0]), Math.abs(e[1] - n[1]), Math.abs(s[1] - l[1]));
}
function bt(o) {
  return Pt(o) ? o : o ? 0.5 : 0;
}
function ua(o, a, t) {
  if (t.valueDim == null)
    return [];
  for (var e = a.count(), s = Q(e * 2), r = 0; r < e; r++) {
    var n = Tt(t, o, a, r);
    s[r * 2] = n[0], s[r * 2 + 1] = n[1];
  }
  return s;
}
function q(o, a, t, e, s) {
  var r = t.getBaseAxis(), n = r.dim === "x" || r.dim === "radius" ? 0 : 1, l = [], v = 0, i = [], u = [], h = [], g = [];
  if (s) {
    for (v = 0; v < o.length; v += 2) {
      var f = a || o;
      N(f[v], f[v + 1]) || g.push(o[v], o[v + 1]);
    }
    o = g;
  }
  for (v = 0; v < o.length - 2; v += 2)
    switch (h[0] = o[v + 2], h[1] = o[v + 3], u[0] = o[v], u[1] = o[v + 1], l.push(u[0], u[1]), e) {
      case "end":
        i[n] = h[n], i[1 - n] = u[1 - n], l.push(i[0], i[1]);
        break;
      case "middle":
        var p = (u[n] + h[n]) / 2, c = [];
        i[n] = c[n] = p, i[1 - n] = u[1 - n], c[1 - n] = h[1 - n], l.push(i[0], i[1]), l.push(c[0], c[1]);
        break;
      default:
        i[n] = u[n], i[1 - n] = h[1 - n], l.push(i[0], i[1]);
    }
  return l.push(o[v++], o[v++]), l;
}
function ha(o, a) {
  var t = [], e = o.length, s, r;
  function n(u, h, g) {
    var f = u.coord, p = (g - f) / (h.coord - f), c = jt(p, [u.color, h.color]);
    return {
      coord: g,
      color: c
    };
  }
  for (var l = 0; l < e; l++) {
    var v = o[l], i = v.coord;
    if (i < 0)
      s = v;
    else if (i > a) {
      r ? t.push(n(r, v, a)) : s && t.push(n(s, v, 0), n(s, v, a));
      break;
    } else
      s && (t.push(n(s, v, 0)), s = null), t.push(v), r = v;
  }
  return t;
}
function fa(o, a, t) {
  var e = o.getVisual("visualMeta");
  if (!(!e || !e.length || !o.count())) {
    if (a.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var s, r, n = e.length - 1; n >= 0; n--) {
      var l = o.getDimensionInfo(e[n].dimension);
      if (s = l && l.coordDim, s === "x" || s === "y") {
        r = e[n];
        break;
      }
    }
    if (!r) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var v = a.getAxis(s), i = Et(r.stops, function(d) {
      return {
        coord: v.toGlobalCoord(v.dataToCoord(d.value)),
        color: d.color
      };
    }), u = i.length, h = r.outerColors.slice();
    u && i[0].coord > i[u - 1].coord && (i.reverse(), h.reverse());
    var g = ha(i, s === "x" ? t.getWidth() : t.getHeight()), f = g.length;
    if (!f && u)
      return i[0].coord < 0 ? h[1] ? h[1] : i[u - 1].color : h[0] ? h[0] : i[0].color;
    var p = 10, c = g[0].coord - p, D = g[f - 1].coord + p, y = D - c;
    if (y < 1e-3)
      return "transparent";
    Lt(g, function(d) {
      d.offset = (d.coord - c) / y;
    }), g.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: f ? g[f - 1].offset : 0.5,
      color: h[1] || "transparent"
    }), g.unshift({
      offset: f ? g[0].offset : 0.5,
      color: h[0] || "transparent"
    });
    var m = new Jt(0, 0, 0, 0, g, !0);
    return m[s] = c, m[s + "2"] = D, m;
  }
}
function ca(o, a, t) {
  var e = o.get("showAllSymbol"), s = e === "auto";
  if (!(e && !s)) {
    var r = t.getAxesByScale("ordinal")[0];
    if (r && !(s && ga(r, a))) {
      var n = a.mapDimension(r.dim), l = {};
      return Lt(r.getViewLabels(), function(v) {
        v.tick.offInterval || (l[Zt(r.scale, v.tick)] = 1);
      }), function(v) {
        return !l.hasOwnProperty(a.get(n, v));
      };
    }
  }
}
function ga(o, a) {
  var t = o.getExtent(), e = Math.abs(t[1] - t[0]) / o.scale.count();
  isNaN(e) && (e = 0);
  for (var s = a.count(), r = Math.max(1, Math.round(s / 5)), n = 0; n < s; n += r)
    if (wt.getSymbolSize(
      a,
      n
      // Only for cartesian, where `isHorizontal` exists.
    )[o.isHorizontal() ? 1 : 0] * 1.5 > e)
      return !1;
  return !0;
}
function pa(o) {
  for (var a = o.length / 2; a > 0 && N(o[a * 2 - 2], o[a * 2 - 1]); a--)
    ;
  return a - 1;
}
function St(o, a) {
  return [o[a * 2], o[a * 2 + 1]];
}
function ma(o, a, t) {
  for (var e = o.length / 2, s = t === "x" ? 0 : 1, r, n, l = 0, v = -1, i = 0; i < e; i++)
    if (n = o[i * 2 + s], !N(n, o[i * 2 + 1 - s])) {
      if (i === 0) {
        r = n;
        continue;
      }
      if (r <= a && n >= a || r >= a && n <= a) {
        v = i;
        break;
      }
      l = i, r = n;
    }
  return {
    range: [l, v],
    t: (a - r) / (n - r)
  };
}
function Ct(o) {
  if (o.get(["endLabel", "show"]))
    return !0;
  for (var a = 0; a < ft.length; a++)
    if (o.get([ft[a], "endLabel", "show"]))
      return !0;
  return !1;
}
function x(o, a, t, e) {
  if (ta(a, "cartesian2d")) {
    var s = e.getModel("endLabel"), r = s.get("valueAnimation"), n = e.getData(), l = {
      lastFrameIndex: 0
    }, v = Ct(e) ? function(f, p) {
      o._endLabelOnDuring(f, p, n, l, r, s, a);
    } : null, i = a.getBaseAxis().isHorizontal(), u = $t(a, t, e, function() {
      var f = o._endLabel;
      f && t && l.originalX != null && f.attr({
        x: l.originalX,
        y: l.originalY
      });
    }, v);
    if (!e.get("clip", !0)) {
      var h = u.shape, g = Math.max(h.width, h.height);
      i ? (h.y -= g, h.height += g * 2) : (h.x -= g, h.width += g * 2);
    }
    return v && v(1, u), u;
  } else
    return process.env.NODE_ENV !== "production" && e.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), Qt(a, t, e);
}
function ya(o, a) {
  var t = a.getBaseAxis(), e = t.isHorizontal(), s = t.inverse, r = e ? s ? "right" : "left" : "center", n = e ? "middle" : s ? "top" : "bottom";
  return {
    normal: {
      align: o.get("align") || r,
      verticalAlign: o.get("verticalAlign") || n
    }
  };
}
var da = (
  /** @class */
  (function(o) {
    j(a, o);
    function a() {
      return o !== null && o.apply(this, arguments) || this;
    }
    return a.prototype.init = function() {
      var t = new _t(), e = new Yt();
      this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t, this._changePolyState = Ht(this._changePolyState, this);
    }, a.prototype.render = function(t, e, s) {
      var r = t.coordinateSystem, n = this.group, l = t.getData(), v = t.getModel("lineStyle"), i = t.getModel("areaStyle"), u = l.getLayout("points") || [], h = r.type === "polar", g = this._coordSys, f = this._symbolDraw, p = this._polyline, c = this._polygon, D = this._lineGroup, y = !e.ssr && t.get("animation"), m = !i.isEmpty(), d = i.get("origin"), E = At(r, l, d), _ = m && ua(r, l, E), S = t.get("showSymbol"), b = t.get("connectNulls"), A = S && !h && ca(t, l, r), w = this._data;
      w && w.eachItemGraphicEl(function(R, Nt) {
        R.__temp && (n.remove(R), w.setItemGraphicEl(Nt, null));
      }), S || f.remove(), n.add(D);
      var k = h ? !1 : t.get("step"), L;
      r && r.getArea && t.get("clip", !0) && (L = r.getArea(), L.width != null ? (L.x -= 0.1, L.y -= 0.1, L.width += 0.2, L.height += 0.2) : L.r0 && (L.r0 -= 0.5, L.r += 0.5)), this._clipShapeForSymbol = L;
      var P = fa(l, r, s) || l.getVisual("style")[l.getVisual("drawType")];
      if (!(p && g.type === r.type && k === this._step))
        S && f.updateData(l, {
          isIgnore: A,
          clipShape: L,
          disableAnimation: !0,
          getSymbolPoint: function(R) {
            return [u[R * 2], u[R * 2 + 1]];
          }
        }), y && this._initSymbolLabelAnimation(l, r, L), k && (_ && (_ = q(_, u, r, k, b)), u = q(u, null, r, k, b)), p = this._newPolyline(u), m ? c = this._newPolygon(u, _) : c && (D.remove(c), c = this._polygon = null), h || this._initOrUpdateEndLabel(t, r, it(P)), D.setClipPath(x(this, r, !0, t));
      else {
        m && !c ? c = this._newPolygon(u, _) : c && !m && (D.remove(c), c = this._polygon = null), h || this._initOrUpdateEndLabel(t, r, it(P));
        var T = D.getClipPath();
        if (T) {
          var H = x(this, r, !1, t);
          zt(T, {
            shape: H.shape
          }, t);
        } else
          D.setClipPath(x(this, r, !0, t));
        S && f.updateData(l, {
          isIgnore: A,
          clipShape: L,
          disableAnimation: !0,
          getSymbolPoint: function(R) {
            return [u[R * 2], u[R * 2 + 1]];
          }
        }), (!mt(this._stackedOnPoints, _) || !mt(this._points, u)) && (y ? this._doUpdateAnimation(l, _, r, s, k, d, b) : (k && (_ && (_ = q(_, u, r, k, b)), u = q(u, null, r, k, b)), p.setShape({
          points: u
        }), c && c.setShape({
          points: u,
          stackedOnPoints: _
        })));
      }
      var V = t.getModel("emphasis"), I = V.get("focus"), z = V.get("blurScope"), O = V.get("disabled");
      if (p.useStyle(ot(
        // Use color in lineStyle first
        v.getLineStyle(),
        {
          fill: "none",
          stroke: P,
          lineJoin: "bevel"
        }
      )), st(p, t, "lineStyle"), p.style.lineWidth > 0 && t.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var C = p.getState("emphasis").style;
        C.lineWidth = +p.style.lineWidth + 1;
      }
      K(p).seriesIndex = t.seriesIndex, lt(p, I, z, O);
      var W = bt(t.get("smooth")), B = t.get("smoothMonotone");
      if (p.setShape({
        smooth: W,
        smoothMonotone: B,
        connectNulls: b
      }), c) {
        var J = l.getCalculationInfo("stackedOnSeries"), G = 0;
        c.useStyle(ot(i.getAreaStyle(), {
          fill: P,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: l.getVisual("style").decal
        })), J && (G = bt(J.get("smooth"))), c.setShape({
          smooth: W,
          stackedOnSmooth: G,
          smoothMonotone: B,
          connectNulls: b
        }), st(c, t, "areaStyle"), K(c).seriesIndex = t.seriesIndex, lt(c, I, z, O);
      }
      var F = this._changePolyState;
      l.eachItemGraphicEl(function(R) {
        R && (R.onHoverStateChange = F);
      }), this._polyline.onHoverStateChange = F, this._data = l, this._coordSys = r, this._stackedOnPoints = _, this._points = u, this._step = k, this._valueOrigin = d;
      var Z = t.get("triggerEvent"), $ = t.get("triggerLineEvent");
      process.env.NODE_ENV !== "production" && $ && va("triggerLineEvent", "Use the `triggerEvent` option instead.");
      var It = $ === !0 || Z === !0 || Z === "line", Vt = $ === !0 || Z === !0 || Z === "area";
      this.packEventData(t, p, It), c && this.packEventData(t, c, Vt);
    }, a.prototype.packEventData = function(t, e, s) {
      K(e).eventData = s ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: t.componentIndex,
        seriesIndex: t.seriesIndex,
        seriesName: t.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: e === this._polygon ? "area" : "line"
      } : null;
    }, a.prototype.highlight = function(t, e, s, r) {
      var n = t.getData(), l = vt(n, r);
      if (this._changePolyState("emphasis"), !(l instanceof Array) && l != null && l >= 0) {
        var v = n.getLayout("points"), i = n.getItemGraphicEl(l);
        if (!i) {
          var u = v[l * 2], h = v[l * 2 + 1];
          if (N(u, h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(u, h))
            return;
          var g = t.get("zlevel") || 0, f = t.get("z") || 0;
          i = new wt(n, l), i.x = u, i.y = h, i.setZ(g, f);
          var p = i.getSymbolPath().getTextContent();
          p && (p.zlevel = g, p.z = f, p.z2 = this._polyline.z2 + 1), i.__temp = !0, n.setItemGraphicEl(l, i), i.stopSymbolAnimation(!0), this.group.add(i);
        }
        i.highlight();
      } else
        X.prototype.highlight.call(this, t, e, s, r);
    }, a.prototype.downplay = function(t, e, s, r) {
      var n = t.getData(), l = vt(n, r);
      if (this._changePolyState("normal"), l != null && l >= 0) {
        var v = n.getItemGraphicEl(l);
        v && (v.__temp ? (n.setItemGraphicEl(l, null), this.group.remove(v)) : v.downplay());
      } else
        X.prototype.downplay.call(this, t, e, s, r);
    }, a.prototype._changePolyState = function(t) {
      var e = this._polygon;
      ut(this._polyline, t), e && ut(e, t);
    }, a.prototype._newPolyline = function(t) {
      var e = this._polyline;
      return e && this._lineGroup.remove(e), e = new oa({
        shape: {
          points: t
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(e), this._polyline = e, e;
    }, a.prototype._newPolygon = function(t, e) {
      var s = this._polygon;
      return s && this._lineGroup.remove(s), s = new la({
        shape: {
          points: t,
          stackedOnPoints: e
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(s), this._polygon = s, s;
    }, a.prototype._initSymbolLabelAnimation = function(t, e, s) {
      var r, n, l = e.getBaseAxis(), v = l.inverse;
      e.type === "cartesian2d" ? (r = l.isHorizontal(), n = !1) : e.type === "polar" && (r = l.dim === "angle", n = !0);
      var i = t.hostModel, u = i.get("animationDuration");
      Y(u) && (u = u(null));
      var h = i.get("animationDelay") || 0, g = Y(h) ? h(null) : h;
      t.eachItemGraphicEl(function(f, p) {
        var c = f;
        if (c) {
          var D = [f.x, f.y], y = void 0, m = void 0, d = void 0;
          if (s)
            if (n) {
              var E = s, _ = e.pointToCoord(D);
              r ? (y = E.startAngle, m = E.endAngle, d = -_[1] / 180 * Math.PI) : (y = E.r0, m = E.r, d = _[0]);
            } else {
              var S = s;
              r ? (y = S.x, m = S.x + S.width, d = f.x) : (y = S.y + S.height, m = S.y, d = f.y);
            }
          var b = m === y ? 0 : (d - y) / (m - y);
          v && (b = 1 - b);
          var A = Y(h) ? h(p) : u * b + g, w = c.getSymbolPath(), k = w.getTextContent();
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
          }), k && k.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: A
          }), w.disableLabelAnimation = !0;
        }
      });
    }, a.prototype._initOrUpdateEndLabel = function(t, e, s) {
      var r = t.getModel("endLabel");
      if (Ct(t)) {
        var n = t.getData(), l = this._polyline, v = n.getLayout("points");
        if (!v) {
          l.removeTextContent(), this._endLabel = null;
          return;
        }
        var i = this._endLabel;
        i || (i = this._endLabel = new Wt({
          z2: 200
          // should be higher than item symbol
        }), i.ignoreClip = !0, l.setTextContent(this._endLabel), l.disableLabelAnimation = !0);
        var u = pa(v);
        u >= 0 && (Bt(l, Ut(t, "endLabel"), {
          inheritColor: s,
          labelFetcher: t,
          labelDataIndex: u,
          defaultText: function(h, g, f) {
            return f != null ? Kt(n, f) : Xt(n, h);
          },
          enableTextSetter: !0
        }, ya(r, e)), l.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, a.prototype._endLabelOnDuring = function(t, e, s, r, n, l, v) {
      var i = this._endLabel, u = this._polyline;
      if (i) {
        t < 1 && r.originalX == null && (r.originalX = i.x, r.originalY = i.y);
        var h = s.getLayout("points"), g = s.hostModel, f = g.get("connectNulls"), p = l.get("precision"), c = l.get("distance") || 0, D = v.getBaseAxis(), y = D.isHorizontal(), m = D.inverse, d = e.shape, E = m ? y ? d.x : d.y + d.height : y ? d.x + d.width : d.y, _ = (y ? c : 0) * (m ? -1 : 1), S = (y ? 0 : -c) * (m ? -1 : 1), b = y ? "x" : "y", A = ma(h, E, b), w = A.range, k = w[1] - w[0], L = void 0;
        if (k >= 1) {
          if (k > 1 && !f) {
            var P = St(h, w[0]);
            i.attr({
              x: P[0] + _,
              y: P[1] + S
            }), n && (L = g.getRawValue(w[0]));
          } else {
            var P = u.getPointOn(E, b);
            P && i.attr({
              x: P[0] + _,
              y: P[1] + S
            });
            var T = g.getRawValue(w[0]), H = g.getRawValue(w[1]);
            n && (L = Mt(s, p, T, H, A.t));
          }
          r.lastFrameIndex = w[0];
        } else {
          var V = t === 1 || r.lastFrameIndex > 0 ? w[0] : 0, P = St(h, V);
          n && (L = g.getRawValue(V)), i.attr({
            x: P[0] + _,
            y: P[1] + S
          });
        }
        if (n) {
          var I = qt(i);
          typeof I.setLabelText == "function" && I.setLabelText(L);
        }
      }
    }, a.prototype._doUpdateAnimation = function(t, e, s, r, n, l, v) {
      var i = this._polyline, u = this._polygon, h = t.hostModel, g = ia(this._data, t, this._stackedOnPoints, e, this._coordSys, s, this._valueOrigin), f = g.current, p = g.stackedOnCurrent, c = g.next, D = g.stackedOnNext;
      if (n && (p = q(g.stackedOnCurrent, g.current, s, n, v), f = q(g.current, null, s, n, v), D = q(g.stackedOnNext, g.next, s, n, v), c = q(g.next, null, s, n, v)), dt(f, c) > 3e3 || u && dt(p, D) > 3e3) {
        i.stopAnimation(), i.setShape({
          points: c
        }), u && (u.stopAnimation(), u.setShape({
          points: c,
          stackedOnPoints: D
        }));
        return;
      }
      i.shape.__points = g.current, i.shape.points = f;
      var y = {
        shape: {
          points: c
        }
      };
      g.current !== f && (y.shape.__points = g.next), i.stopAnimation(), ht(i, y, h), u && (u.setShape({
        // Reuse the points with polyline.
        points: f,
        stackedOnPoints: p
      }), u.stopAnimation(), ht(u, {
        shape: {
          stackedOnPoints: D
        }
      }, h), i.shape.points !== u.shape.points && (u.shape.points = i.shape.points));
      for (var m = [], d = g.status, E = 0; E < d.length; E++) {
        var _ = d[E].cmd;
        if (_ === "=") {
          var S = t.getItemGraphicEl(d[E].idx1);
          S && m.push({
            el: S,
            ptIdx: E
            // Index of points
          });
        }
      }
      i.animators && i.animators.length && i.animators[0].during(function() {
        u && u.dirtyShape();
        for (var b = i.shape.__points, A = 0; A < m.length; A++) {
          var w = m[A].el, k = m[A].ptIdx * 2;
          w.x = b[k], w.y = b[k + 1], w.markRedraw();
        }
      });
    }, a.prototype.remove = function(t) {
      var e = this.group, s = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), s && s.eachItemGraphicEl(function(r, n) {
        r.__temp && (e.remove(r), s.setItemGraphicEl(n, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, a.type = "line", a;
  })(X)
);
function Da(o) {
  o.registerChartView(da), o.registerSeriesModel(ea), o.registerLayout(xt("line", !0)), o.registerVisual({
    seriesType: "line",
    reset: function(a) {
      var t = a.getData(), e = a.getModel("lineStyle").getLineStyle();
      e && !e.stroke && (e.stroke = t.getVisual("style").fill), t.setVisual("legendLineStyle", e);
    }
  }), o.registerProcessor(o.PRIORITY.PROCESSOR.STATISTIC, aa("line"));
}
export {
  Da as i
};
