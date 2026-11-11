var Ge = Object.defineProperty;
var Te = (a, e, t) => e in a ? Ge(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var oe = (a, e, t) => Te(a, typeof e != "symbol" ? e + "" : e, t);
import { r as We, c as Ne, p as Ve, t as Ae, a as Fe, L as ze, i as ie, F as Ye, e as Ue, b as He, d as Xe, A as $e, f as qe, g as Se, h as xe, j as je, k as Ke, l as Ze, m as Je, n as J, o as Qe, q as et, s as tt, u as _e, v as le, w as rt, x as z, y as W, z as at, B as Q, C as X, D as Y, _ as H, E as Ie, S as we, G as nt, H as it, I as st, P as De, J as ue, K as ot, M as Le, N as Pe, O as lt, Q as ae, R as ut, T as K, U, V as ee, W as ct, X as ht, Y as dt, Z as vt, $ as se, a0 as ft, a1 as ke, a2 as Ce, a3 as Oe, a4 as gt, a5 as pt, a6 as mt, a7 as yt, a8 as bt, a9 as At, aa as St, ab as xt, ac as _t, ad as It, ae as wt, af as Dt, ag as Lt, ah as Pt, ai as kt, aj as Ct, ak as Ot } from "./installCanvasRenderer-Djgjo9XI.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
function Rt() {
  We("liPosMinGap", Mt);
}
function Mt(a, e, t) {
  var r = Ne(), n = t.serUids, i = t.liPosMinGap, s, o = e.axis, l = o.scale, c = l.needTransform(), u = l.getFilter ? l.getFilter() : null, h = Ve(u);
  function d(v) {
    Ue(a, e.sers, function(x) {
      var A = x.getRawData(), _ = A.getDimensionIndex(A.mapDimension(o.dim));
      _ >= 0 && v(_, x, A.getStore());
    });
  }
  var y = 0;
  if (d(function(v, x, A) {
    r.set(x.uid, 1), (!n || !n.hasKey(x.uid)) && (s = !0), y += A.count();
  }), (!n || n.keys().length !== r.keys().length) && (s = !0), !s && i != null) {
    e.liPosMinGap = i;
    return;
  }
  Ae(T, y);
  var g = 0;
  d(function(v, x, A) {
    for (var _ = 0, I = A.count(); _ < I; ++_) {
      var L = A.get(v, _);
      isFinite(L) && (!u || He(h, L)) && (c && (L = l.transformIn(L, null)), T.arr[g++] = L);
    }
  });
  var p = T.typed ? T.arr.subarray(0, g) : (T.arr.length = g, T.arr);
  T.typed ? p.sort() : Fe(p);
  for (var f = 1 / 0, b = 1; b < g; ++b) {
    var m = p[b] - p[b - 1];
    // - Different series normally have the same values (e.g., barA, barB, barC),
    //   which should be ignored.
    // - A single series with multiple same values is often not meaningful to
    //   create `bandWidth`, so it is also ignored.
    m > 0 && m < f && (f = m);
  }
  t.liPosMinGap = e.liPosMinGap = ie(f) ? f : g > 0 ? Xe : ze, t.serUids = r;
}
var T = Ae(
  {
    ctor: Ye
  },
  50
  // An arbitrary initial capability.
);
function Et(a) {
  return function(e, t) {
    var r = Se(e, {
      fromStat: {
        key: a
      }
    });
    if (ie(r.w2))
      return [-r.w2 / 2, r.w2 / 2];
  };
}
function Z(a, e) {
  return a + $e + e;
}
function Bt(a) {
  return Rt(), {
    // non-category scale do not use `liPosMinGap` to calculate `bandWidth`.
    liPosMinGap: !qe(a.scale)
  };
}
var N = "bar";
function Gt(a, e, t, r) {
  je(a, {
    key: e,
    seriesType: t,
    coordSysType: r,
    getMetrics: Bt
  });
}
function Tt(a) {
  var e = a.scale.rawExtentInfo.makeRenderInfo().startValue;
  return process.env.NODE_ENV !== "production" && xe(ie(e)), e;
}
var Wt = et(), Nt = "__ec_stack_";
function Re(a) {
  return a.get("stack") || Nt + a.seriesIndex;
}
function Vt(a, e) {
  var t = Ft(a, e);
  return t.columnMap = zt(t), t;
}
function Ft(a, e) {
  var t = Z(e, Y), r = [], n = Se(a, {
    fromStat: {
      key: t
    },
    min: 1
  });
  return _e(a, t, function(i) {
    r.push({
      barWidth: z(i.get("barWidth"), n.w),
      barMaxWidth: z(i.get("barMaxWidth"), n.w),
      barMinWidth: z(
        // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        i.get("barMinWidth") || (Me(i) ? 0.5 : 1),
        n.w
      ),
      barGap: i.get("barGap"),
      barCategoryGap: i.get("barCategoryGap"),
      defaultBarGap: i.get("defaultBarGap"),
      stackId: Re(i)
    });
  }), {
    bandWidthResult: n,
    seriesInfo: r
  };
}
function zt(a) {
  var e = a.bandWidthResult.w, t = e, r = 0, n, i, s = [], o = {};
  W(a.seriesInfo, function(p, f) {
    f || (i = p.defaultBarGap || 0);
    var b = p.stackId;
    at(o, b) || r++;
    var m = o[b];
    m || (m = o[b] = {
      width: 0,
      maxWidth: 0
    }, s.push(b));
    var v = p.barWidth;
    v && !m.width && (m.width = v, v = Q(t, v), t -= v);
    var x = p.barMaxWidth;
    x && (m.maxWidth = x);
    var A = p.barMinWidth;
    A && (m.minWidth = A);
    var _ = p.barGap;
    _ != null && (i = _);
    var I = p.barCategoryGap;
    I != null && (n = I);
  }), n == null && (n = X(35 - s.length * 4, 15) + "%");
  var l = z(n, e), c = z(i, 1), u = (t - l) / (r + (r - 1) * c);
  u = X(u, 0), W(s, function(p) {
    var f = o[p], b = f.maxWidth, m = f.minWidth;
    if (f.width) {
      var v = f.width;
      b && (v = Q(v, b)), m && (v = X(v, m)), f.width = v, t -= v + c * v, r--;
    } else {
      var v = u;
      b && b < v && (v = Q(b, t)), m && m > v && (v = m), v !== u && (f.width = v, t -= v + c * v, r--);
    }
  }), u = (t - l) / (r + (r - 1) * c), u = X(u, 0);
  var h = 0, d;
  W(s, function(p) {
    var f = o[p];
    f.width || (f.width = u), d = f, h += f.width * (1 + c);
  }), d && (h -= d.width * c);
  var y = {}, g = -h / 2;
  return W(s, function(p) {
    var f = o[p];
    y[p] = y[p] || {
      bandWidth: e,
      offset: g,
      width: f.width
    }, g += f.width * (1 + c);
  }), y;
}
function Yt(a) {
  return {
    seriesType: a,
    overallReset: function(e) {
      var t = Z(a, Y);
      Ke(e, t, function(r) {
        process.env.NODE_ENV !== "production" && xe(r instanceof tt);
        var n = Vt(r, a);
        _e(r, t, function(i) {
          var s = n.columnMap[Re(i)];
          i.getData().setLayout({
            bandWidth: s.bandWidth,
            offset: s.offset,
            size: s.width
          });
        });
      });
    }
  };
}
function Ut(a) {
  return {
    seriesType: a,
    plan: Qe(),
    reset: function(e) {
      if (Ze(e)) {
        var t = e.getData(), r = e.coordinateSystem, n = r.getBaseAxis(), i = r.getOtherAxis(n), s = t.getDimensionIndex(t.mapDimension(i.dim)), o = t.getDimensionIndex(t.mapDimension(n.dim)), l = e.get("showBackground", !0), c = t.mapDimension(i.dim), u = t.getCalculationInfo("stackResultDimension"), h = Je(t, c) && !!t.getCalculationInfo("stackedOnSeries"), d = i.isHorizontal(), y = i.toGlobalCoord(i.dataToCoord(Tt(i))), g = Me(e), p = e.get("barMinHeight") || 0, f = u && t.getDimensionIndex(u), b = t.getLayout("size"), m = t.getLayout("offset");
        return {
          progress: function(v, x) {
            for (var A = v.count, _ = g && J(A * 3), I = g && l && J(A * 3), L = g && J(A), B = r.master.getRect(), V = d ? B.width : B.height, S, k = x.getStore(), D = 0; (S = v.next()) != null; ) {
              var C = k.get(h ? f : s, S), P = k.get(o, S), G = y, F = void 0;
              h && (F = +C - k.get(s, S));
              var w = void 0, R = void 0, M = void 0, O = void 0;
              if (d) {
                var E = r.dataToPoint([C, P]);
                h && (G = r.dataToPoint([F, P])[0]), w = G, R = E[1] + m, M = E[0] - G, O = b, le(M) < p && (M = (M < 0 ? -1 : 1) * p);
              } else {
                var E = r.dataToPoint([P, C]);
                h && (G = r.dataToPoint([P, F])[1]), w = E[0] + m, R = G, M = b, O = E[1] - G, le(O) < p && (O = (O <= 0 ? -1 : 1) * p);
              }
              g ? (_[D] = w, _[D + 1] = R, _[D + 2] = d ? M : O, I && (I[D] = d ? B.x : w, I[D + 1] = d ? R : B.y, I[D + 2] = V), L[S] = S) : x.setItemLayout(S, {
                x: w,
                y: R,
                width: M,
                height: O
              }), D += 3;
            }
            g && x.setLayout({
              largePoints: _,
              largeDataIndices: L,
              largeBackgroundPoints: I,
              valueAxisHorizontal: d
            });
          }
        };
      }
    }
  };
}
function Me(a) {
  return a.pipelineContext && a.pipelineContext.large;
}
function Ht(a) {
  return Et(Z(a, Y));
}
function Xt(a) {
  Wt(a, function() {
    function e(t) {
      var r = Z(t, Y);
      Gt(a, r, t, Y), rt(r, Ht(t));
    }
    e("bar"), e("pictorialBar");
  });
}
var ne = (
  /** @class */
  (function(a) {
    H(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.prototype.getInitialData = function(t, r) {
      return Ie(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getMarkerPosition = function(t, r, n) {
      var i = this.coordinateSystem;
      if (i && i.clampData) {
        var s = i.clampData(t), o = i.dataToPoint(s);
        if (n)
          W(i.getAxes(), function(d, y) {
            if (d.type === "category" && r != null) {
              var g = d.getTicksCoords(), p = d.getTickModel().get("alignWithLabel"), f = s[y], b = r[y] === "x1" || r[y] === "y1";
              if (b && !p && (f += 1), g.length < 2)
                return;
              if (g.length === 2) {
                o[y] = d.toGlobalCoord(d.getExtent()[b ? 1 : 0]);
                return;
              }
              for (var m = void 0, v = void 0, x = 1, A = 0; A < g.length; A++) {
                var _ = g[A].coord, I = A === g.length - 1 ? g[A - 1].tickValue + x : g[A].tickValue;
                if (I === f) {
                  v = _;
                  break;
                } else if (I < f)
                  m = _;
                else if (m != null && I > f) {
                  v = (_ + m) / 2;
                  break;
                }
                A === 1 && (x = I - g[0].tickValue);
              }
              v == null && (m ? m && (v = g[g.length - 1].coord) : v = g[0].coord), o[y] = d.toGlobalCoord(v);
            }
          });
        else {
          var l = this.getData(), c = l.getLayout("offset"), u = l.getLayout("size"), h = i.getBaseAxis().isHorizontal() ? 0 : 1;
          o[h] += c + u / 2;
        }
        return o;
      }
      return [NaN, NaN];
    }, e.prototype.__requireStartValue = function(t) {
      return this.getBaseAxis() !== t;
    }, e.type = "series.__base_bar__", e.defaultOption = {
      // zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      // stack: null
      // Cartesian coordinate system
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      barMinHeight: 0,
      barMinAngle: 0,
      // cursor: null,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod",
      defaultBarGap: "10%"
    }, e;
  })(we)
);
we.registerClass(ne);
var $t = (
  /** @class */
  (function(a) {
    H(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.prototype.getInitialData = function() {
      return Ie(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, e.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, e.prototype.__preparePipelineContext = function(t, r) {
      var n = nt(this, t, r);
      return n.progressiveRender && (n.large = !0), n;
    }, e.prototype.brushSelector = function(t, r, n) {
      return n.rect(r.getItemLayout(t));
    }, e.type = "series." + N, e.dependencies = ["grid", "polar"], e.defaultOption = it(ne.defaultOption, {
      // If clipped
      // Only available on cartesian2d
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      },
      select: {
        itemStyle: {
          borderColor: st.color.primary,
          borderWidth: 2
        }
      },
      realtimeSort: !1
    }), e;
  })(ne)
), qt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return a;
  })()
), ce = (
  /** @class */
  (function(a) {
    H(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return r.type = "sausage", r;
    }
    return e.prototype.getDefaultShape = function() {
      return new qt();
    }, e.prototype.buildPath = function(t, r) {
      var n = r.cx, i = r.cy, s = Math.max(r.r0 || 0, 0), o = Math.max(r.r, 0), l = (o - s) * 0.5, c = s + l, u = r.startAngle, h = r.endAngle, d = r.clockwise, y = Math.PI * 2, g = d ? h - u < y : u - h < y;
      g || (u = h - (d ? y : -y));
      var p = Math.cos(u), f = Math.sin(u), b = Math.cos(h), m = Math.sin(h);
      g ? (t.moveTo(p * s + n, f * s + i), t.arc(p * c + n, f * c + i, l, -Math.PI + u, u, !d)) : t.moveTo(p * o + n, f * o + i), t.arc(n, i, o, u, h, !d), t.arc(b * c + n, m * c + i, l, h - Math.PI * 2, h - Math.PI, !d), s !== 0 && t.arc(n, i, s, h, u, d);
    }, e;
  })(De)
);
function jt(a, e) {
  e = e || {};
  var t = e.isRoundCap;
  return function(r, n, i) {
    var s = n.position;
    if (!s || s instanceof Array)
      return ue(r, n, i);
    var o = a(s), l = n.distance != null ? n.distance : 5, c = this.shape, u = c.cx, h = c.cy, d = c.r, y = c.r0, g = (d + y) / 2, p = c.startAngle, f = c.endAngle, b = (p + f) / 2, m = t ? Math.abs(d - y) / 2 : 0, v = Math.cos, x = Math.sin, A = u + d * v(p), _ = h + d * x(p), I = "left", L = "top";
    switch (o) {
      case "startArc":
        A = u + (y - l) * v(b), _ = h + (y - l) * x(b), I = "center", L = "top";
        break;
      case "insideStartArc":
        A = u + (y + l) * v(b), _ = h + (y + l) * x(b), I = "center", L = "bottom";
        break;
      case "startAngle":
        A = u + g * v(p) + $(p, l + m, !1), _ = h + g * x(p) + q(p, l + m, !1), I = "right", L = "middle";
        break;
      case "insideStartAngle":
        A = u + g * v(p) + $(p, -l + m, !1), _ = h + g * x(p) + q(p, -l + m, !1), I = "left", L = "middle";
        break;
      case "middle":
        A = u + g * v(b), _ = h + g * x(b), I = "center", L = "middle";
        break;
      case "endArc":
        A = u + (d + l) * v(b), _ = h + (d + l) * x(b), I = "center", L = "bottom";
        break;
      case "insideEndArc":
        A = u + (d - l) * v(b), _ = h + (d - l) * x(b), I = "center", L = "top";
        break;
      case "endAngle":
        A = u + g * v(f) + $(f, l + m, !0), _ = h + g * x(f) + q(f, l + m, !0), I = "left", L = "middle";
        break;
      case "insideEndAngle":
        A = u + g * v(f) + $(f, -l + m, !0), _ = h + g * x(f) + q(f, -l + m, !0), I = "right", L = "middle";
        break;
      default:
        return ue(r, n, i);
    }
    return r = r || {}, r.x = A, r.y = _, r.align = I, r.verticalAlign = L, r;
  };
}
function Kt(a, e, t, r) {
  if (ot(r)) {
    a.setTextConfig({
      rotation: r
    });
    return;
  } else if (Le(e)) {
    a.setTextConfig({
      rotation: 0
    });
    return;
  }
  var n = a.shape, i = n.clockwise ? n.startAngle : n.endAngle, s = n.clockwise ? n.endAngle : n.startAngle, o = (i + s) / 2, l, c = t(e);
  switch (c) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      l = o;
      break;
    case "startAngle":
    case "insideStartAngle":
      l = i;
      break;
    case "endAngle":
    case "insideEndAngle":
      l = s;
      break;
    default:
      a.setTextConfig({
        rotation: 0
      });
      return;
  }
  var u = Math.PI * 1.5 - l;
  c === "middle" && u > Math.PI / 2 && u < Math.PI * 1.5 && (u -= Math.PI), a.setTextConfig({
    rotation: u
  });
}
function $(a, e, t) {
  return e * Math.sin(a) * (t ? -1 : 1);
}
function q(a, e, t) {
  return e * Math.cos(a) * (t ? 1 : -1);
}
function Zt(a, e, t) {
  var r = a.get("borderRadius");
  if (r == null)
    return {
      cornerRadius: 0
    };
  Le(r) || (r = [r, r, r, r]);
  var n = Math.abs(e.r || 0 - e.r0 || 0);
  return {
    cornerRadius: Pe(r, function(i) {
      return lt(i, n);
    })
  };
}
var te = Math.max, re = Math.min, Jt = (
  /** @class */
  (function(a) {
    H(e, a);
    function e() {
      var t = a.call(this) || this;
      return t.type = N, t._isFirstFrame = !0, t;
    }
    return e.prototype.render = function(t, r, n, i) {
      this._model = t, this._removeOnRenderedListener(n), this._updateDrawMode(t);
      var s = t.get("coordinateSystem");
      s === "cartesian2d" || s === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(t, r, n) : this._renderNormal(t, r, n, i)) : process.env.NODE_ENV !== "production" && ae("Only cartesian2d and polar supported for bar.");
    }, e.prototype.incrementalPrepareRender = function(t) {
      this._clear(), this._updateDrawMode(t), this._updateLargeClip(t);
    }, e.prototype.incrementalRender = function(t, r) {
      this._progressiveEls = [], this._incrementalRenderLarge(t, r);
    }, e.prototype.eachRendered = function(t) {
      ut(this._progressiveEls || this.group, t);
    }, e.prototype._updateDrawMode = function(t) {
      var r = t.pipelineContext.large;
      (this._isLargeDraw == null || r !== this._isLargeDraw) && (this._isLargeDraw = r, this._clear());
    }, e.prototype._renderNormal = function(t, r, n, i) {
      var s = this.group, o = t.getData(), l = this._data, c = t.coordinateSystem, u = c.getBaseAxis(), h;
      c.type === "cartesian2d" ? h = u.isHorizontal() : c.type === "polar" && (h = u.dim === "angle");
      var d = t.isAnimationEnabled() ? t : null, y = Qt(t, c);
      y && this._enableRealtimeSort(y, o, n);
      var g = t.get("clip", !0) || y, p = c.getArea();
      s.removeClipPath();
      var f = t.get("roundCap", !0), b = t.get("showBackground", !0), m = t.getModel("backgroundStyle"), v = m.get("borderRadius") || 0, x = [], A = this._backgroundEls, _ = i && i.isInitSort, I = i && i.type === "changeAxisOrder";
      function L(S) {
        var k = j[c.type](o, S);
        if (!k)
          return null;
        var D = sr(c, h, k);
        return D.useStyle(m.getItemStyle()), c.type === "cartesian2d" ? D.setShape("r", v) : D.setShape("cornerRadius", v), x[S] = D, D;
      }
      o.diff(l).add(function(S) {
        var k = o.getItemModel(S), D = j[c.type](o, S, k);
        if (D && (b && L(S), !(!o.hasValue(S) || !ge[c.type](D)))) {
          var C = !1;
          g && (C = he[c.type](p, D));
          var P = de[c.type](t, o, S, D, h, d, u.model, !1, f);
          y && (P.forceLabelAnimation = !0), pe(P, o, S, k, D, t, h, c.type === "polar"), _ ? P.attr({
            shape: D
          }) : y ? ve(y, d, P, D, S, h, !1, !1) : K(P, {
            shape: D
          }, t, S), o.setItemGraphicEl(S, P), s.add(P), P.ignore = C;
        }
      }).update(function(S, k) {
        var D = o.getItemModel(S), C = j[c.type](o, S, D);
        if (C) {
          if (b) {
            var P = void 0;
            A.length === 0 ? P = L(k) : (P = A[k], P.useStyle(m.getItemStyle()), c.type === "cartesian2d" ? P.setShape("r", v) : P.setShape("cornerRadius", v), x[S] = P);
            var G = j[c.type](o, S), F = Be(h, G, c);
            U(P, {
              shape: F
            }, d, S);
          }
          var w = l.getItemGraphicEl(k);
          if (!o.hasValue(S) || !ge[c.type](C)) {
            s.remove(w);
            return;
          }
          var R = !1;
          g && (R = he[c.type](p, C), R && s.remove(w));
          var M = w && (w.type === "sector" && f || w.type === "sausage" && !f);
          if (M && (w && ee(w, t, k), w = null), w ? ct(w) : w = de[c.type](t, o, S, C, h, d, u.model, !0, f), y && (w.forceLabelAnimation = !0), I) {
            var O = w.getTextContent();
            if (O) {
              var E = ht(O);
              E.prevValue != null && (E.prevValue = E.value);
            }
          } else
            pe(w, o, S, D, C, t, h, c.type === "polar");
          _ ? w.attr({
            shape: C
          }) : y ? ve(y, d, w, C, S, h, !0, I) : U(w, {
            shape: C
          }, t, S, null), o.setItemGraphicEl(S, w), w.ignore = R, s.add(w);
        }
      }).remove(function(S) {
        var k = l.getItemGraphicEl(S);
        k && ee(k, t, S);
      }).execute();
      var B = this._backgroundGroup || (this._backgroundGroup = new dt());
      B.removeAll();
      for (var V = 0; V < x.length; ++V)
        B.add(x[V]);
      s.add(B), this._backgroundEls = x, this._data = o;
    }, e.prototype._renderLarge = function(t, r, n) {
      this._clear(), ye(t, this.group), this._updateLargeClip(t);
    }, e.prototype._incrementalRenderLarge = function(t, r) {
      this._removeBackground(), ye(r, this.group, this._progressiveEls, !0);
    }, e.prototype._updateLargeClip = function(t) {
      var r = t.get("clip", !0) && vt(t.coordinateSystem, !1, t), n = this.group;
      r ? n.setClipPath(r) : n.removeClipPath();
    }, e.prototype._enableRealtimeSort = function(t, r, n) {
      var i = this;
      if (r.count()) {
        var s = t.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(r, t, n), this._isFirstFrame = !1;
        else {
          var o = function(l) {
            var c = r.getItemGraphicEl(l), u = c && c.shape;
            return u && // The result should be consistent with the initial sort by data value.
            // Do not support the case that both positive and negative exist.
            Math.abs(s.isHorizontal() ? u.height : u.width) || 0;
          };
          this._onRendered = function() {
            i._updateSortWithinSameData(r, o, s, n);
          }, n.getZr().on("rendered", this._onRendered);
        }
      }
    }, e.prototype._dataSort = function(t, r, n) {
      var i = [];
      return t.each(t.mapDimension(r.dim), function(s, o) {
        var l = n(o);
        l = l ?? NaN, i.push({
          dataIndex: o,
          mappedValue: l,
          ordinalNumber: s
        });
      }), i.sort(function(s, o) {
        return o.mappedValue - s.mappedValue;
      }), {
        ordinalNumbers: Pe(i, function(s) {
          return s.ordinalNumber;
        })
      };
    }, e.prototype._isOrderChangedWithinSameData = function(t, r, n) {
      for (var i = n.scale, s = t.mapDimension(n.dim), o = Number.MAX_VALUE, l = 0, c = i.getOrdinalMeta().categories.length; l < c; ++l) {
        var u = t.rawIndexOf(s, i.getRawOrdinalNumber(l)), h = u < 0 ? Number.MIN_VALUE : r(t.indexOfRawIndex(u));
        if (h > o)
          return !0;
        o = h;
      }
      return !1;
    }, e.prototype._isOrderDifferentInView = function(t, r) {
      for (var n = r.scale, i = n.getExtent(), s = Math.max(0, i[0]), o = Math.min(i[1], n.getOrdinalMeta().categories.length - 1); s <= o; ++s)
        if (t.ordinalNumbers[s] !== n.getRawOrdinalNumber(s))
          return !0;
    }, e.prototype._updateSortWithinSameData = function(t, r, n, i) {
      if (this._isOrderChangedWithinSameData(t, r, n)) {
        var s = this._dataSort(t, n, r);
        this._isOrderDifferentInView(s, n) && (this._removeOnRenderedListener(i), i.dispatchAction({
          type: "changeAxisOrder",
          componentType: n.dim + "Axis",
          axisId: n.index,
          sortInfo: s
        }));
      }
    }, e.prototype._dispatchInitSort = function(t, r, n) {
      var i = r.baseAxis, s = this._dataSort(t, i, function(o) {
        return t.get(t.mapDimension(r.otherAxis.dim), o);
      });
      n.dispatchAction({
        type: "changeAxisOrder",
        componentType: i.dim + "Axis",
        isInitSort: !0,
        axisId: i.index,
        sortInfo: s
      });
    }, e.prototype.remove = function(t, r) {
      this._clear(this._model), this._removeOnRenderedListener(r);
    }, e.prototype.dispose = function(t, r) {
      this._removeOnRenderedListener(r);
    }, e.prototype._removeOnRenderedListener = function(t) {
      this._onRendered && (t.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, e.prototype._clear = function(t) {
      var r = this.group, n = this._data;
      t && t.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function(i) {
        ee(i, t, se(i).dataIndex);
      })) : r.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, e.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, e.type = N, e;
  })(ft)
), he = {
  cartesian2d: function(a, e) {
    var t = e.width < 0 ? -1 : 1, r = e.height < 0 ? -1 : 1;
    t < 0 && (e.x += e.width, e.width = -e.width), r < 0 && (e.y += e.height, e.height = -e.height);
    var n = a.x + a.width, i = a.y + a.height, s = te(e.x, a.x), o = re(e.x + e.width, n), l = te(e.y, a.y), c = re(e.y + e.height, i), u = o < s, h = c < l;
    return e.x = u && s > n ? o : s, e.y = h && l > i ? c : l, e.width = u ? 0 : o - s, e.height = h ? 0 : c - l, t < 0 && (e.x += e.width, e.width = -e.width), r < 0 && (e.y += e.height, e.height = -e.height), u || h;
  },
  polar: function(a, e) {
    var t = e.r0 <= e.r ? 1 : -1;
    if (t < 0) {
      var r = e.r;
      e.r = e.r0, e.r0 = r;
    }
    var n = re(e.r, a.r), i = te(e.r0, a.r0);
    e.r = n, e.r0 = i;
    var s = n - i < 0;
    if (t < 0) {
      var r = e.r;
      e.r = e.r0, e.r0 = r;
    }
    return s;
  }
}, de = {
  cartesian2d: function(a, e, t, r, n, i, s, o, l) {
    var c = new Ce({
      shape: Oe({}, r),
      z2: 1
    });
    if (c.__dataIndex = t, c.name = "item", i) {
      var u = c.shape, h = n ? "height" : "width";
      u[h] = 0;
    }
    return c;
  },
  polar: function(a, e, t, r, n, i, s, o, l) {
    var c = !n && l ? ce : ke, u = new c({
      shape: r,
      z2: 1
    });
    u.name = "item";
    var h = Ee(n);
    if (u.calculateTextPosition = jt(h, {
      isRoundCap: c === ce
    }), i) {
      var d = u.shape, y = n ? "r" : "endAngle", g = {};
      d[y] = n ? r.r0 : r.startAngle, g[y] = r[y], (o ? U : K)(u, {
        shape: g
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, i);
    }
    return u;
  }
};
function Qt(a, e) {
  var t = a.get("realtimeSort", !0), r = e.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && t && (r.type !== "category" && ae("`realtimeSort` will not work because this bar series is not based on a category axis."), e.type !== "cartesian2d" && ae("`realtimeSort` will not work because this bar series is not on cartesian2d.")), t && r.type === "category" && e.type === "cartesian2d")
    return {
      baseAxis: r,
      otherAxis: e.getOtherAxis(r)
    };
}
function ve(a, e, t, r, n, i, s, o) {
  var l, c;
  i ? (c = {
    x: r.x,
    width: r.width
  }, l = {
    y: r.y,
    height: r.height
  }) : (c = {
    y: r.y,
    height: r.height
  }, l = {
    x: r.x,
    width: r.width
  }), o || (s ? U : K)(t, {
    shape: l
  }, e, n, null);
  var u = e ? a.baseAxis.model : null;
  (s ? U : K)(t, {
    shape: c
  }, u, n);
}
function fe(a, e) {
  for (var t = 0; t < e.length; t++)
    if (!isFinite(a[e[t]]))
      return !0;
  return !1;
}
var er = ["x", "y", "width", "height"], tr = ["cx", "cy", "r", "startAngle", "endAngle"], ge = {
  cartesian2d: function(a) {
    return !fe(a, er);
  },
  polar: function(a) {
    return !fe(a, tr);
  }
}, j = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(a, e, t) {
    var r = a.getItemLayout(e);
    if (!r)
      return null;
    var n = t ? ar(t, r) : 0, i = r.width > 0 ? 1 : -1, s = r.height > 0 ? 1 : -1;
    return {
      x: r.x + i * n / 2,
      y: r.y + s * n / 2,
      width: r.width - i * n,
      height: r.height - s * n
    };
  },
  polar: function(a, e, t) {
    var r = a.getItemLayout(e);
    return {
      cx: r.cx,
      cy: r.cy,
      r0: r.r0,
      r: r.r,
      startAngle: r.startAngle,
      endAngle: r.endAngle,
      clockwise: r.clockwise
    };
  }
};
function rr(a) {
  return a.startAngle != null && a.endAngle != null && a.startAngle === a.endAngle;
}
function Ee(a) {
  return /* @__PURE__ */ (function(e) {
    var t = e ? "Arc" : "Angle";
    return function(r) {
      switch (r) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return r + t;
        default:
          return r;
      }
    };
  })(a);
}
function pe(a, e, t, r, n, i, s, o) {
  var l = e.getItemVisual(t, "style");
  if (o) {
    if (!i.get("roundCap")) {
      var u = a.shape, h = Zt(r.getModel("itemStyle"), u);
      Oe(u, h), a.setShape(u);
    }
  } else {
    var c = r.get(["itemStyle", "borderRadius"]) || 0;
    a.setShape("r", c);
  }
  a.useStyle(l);
  var d = r.getShallow("cursor");
  d && a.attr("cursor", d);
  var y = o ? s ? n.r >= n.r0 ? "endArc" : "startArc" : n.endAngle >= n.startAngle ? "endAngle" : "startAngle" : s ? or(n, i.coordinateSystem) : lr(n, i.coordinateSystem), g = gt(r);
  pt(a, g, {
    labelFetcher: i,
    labelDataIndex: t,
    defaultText: mt(i.getData(), t),
    inheritColor: l.fill,
    defaultOpacity: l.opacity,
    defaultOutsidePosition: y
  });
  var p = a.getTextContent();
  if (o && p) {
    var f = r.get(["label", "position"]);
    a.textConfig.inside = f === "middle" ? !0 : null, Kt(a, f === "outside" ? y : f, Ee(s), r.get(["label", "rotate"]));
  }
  yt(p, g, i.getRawValue(t), function(m) {
    return It(e, m);
  });
  var b = r.getModel(["emphasis"]);
  bt(a, b.get("focus"), b.get("blurScope"), b.get("disabled")), At(a, r), rr(n) && (a.style.fill = "none", a.style.stroke = "none", W(a.states, function(m) {
    m.style && (m.style.fill = m.style.stroke = "none");
  }));
}
function ar(a, e) {
  var t = a.get(["itemStyle", "borderColor"]);
  if (!t || t === "none")
    return 0;
  var r = a.get(["itemStyle", "borderWidth"]) || 0, n = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width), i = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
  return Math.min(r, n, i);
}
var nr = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a() {
    }
    return a;
  })()
), me = (
  /** @class */
  (function(a) {
    H(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return r.type = "largeBar", r;
    }
    return e.prototype.getDefaultShape = function() {
      return new nr();
    }, e.prototype.buildPath = function(t, r) {
      for (var n = r.points, i = this.baseDimIdx, s = 1 - this.baseDimIdx, o = [], l = [], c = this.barWidth, u = 0; u < n.length; u += 3)
        l[i] = c, l[s] = n[u + 2], o[i] = n[u + i], o[s] = n[u + s], t.rect(o[0], o[1], l[0], l[1]);
    }, e;
  })(De)
);
function ye(a, e, t, r) {
  var n = a.getData(), i = n.getLayout("valueAxisHorizontal") ? 1 : 0, s = n.getLayout("largeDataIndices"), o = n.getLayout("size"), l = a.getModel("backgroundStyle"), c = n.getLayout("largeBackgroundPoints"), u = r ? xt(a) : 0;
  if (c) {
    var h = new me({
      shape: {
        points: c
      },
      incremental: u,
      silent: !0,
      z2: 0
    });
    h.baseDimIdx = i, h.largeDataIndices = s, h.barWidth = o, h.useStyle(l.getItemStyle()), e.add(h), t && t.push(h);
  }
  var d = new me({
    shape: {
      points: n.getLayout("largePoints")
    },
    incremental: u,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  d.baseDimIdx = i, d.largeDataIndices = s, d.barWidth = o, e.add(d), d.useStyle(n.getVisual("style")), d.style.stroke = null, se(d).seriesIndex = a.seriesIndex, a.get("silent") || (d.on("mousedown", be), d.on("mousemove", be)), t && t.push(d);
}
var be = _t(function(a) {
  var e = this, t = ir(e, a.offsetX, a.offsetY);
  se(e).dataIndex = t >= 0 ? t : null;
}, 30, !1);
function ir(a, e, t) {
  for (var r = a.baseDimIdx, n = 1 - r, i = a.shape.points, s = a.largeDataIndices, o = [], l = [], c = a.barWidth, u = 0, h = i.length / 3; u < h; u++) {
    var d = u * 3;
    if (l[r] = c, l[n] = i[d + 2], o[r] = i[d + r], o[n] = i[d + n], l[n] < 0 && (o[n] += l[n], l[n] = -l[n]), e >= o[0] && e <= o[0] + l[0] && t >= o[1] && t <= o[1] + l[1])
      return s[u];
  }
  return -1;
}
function Be(a, e, t) {
  if (St(t, "cartesian2d")) {
    var r = e, n = t.getArea();
    return {
      x: a ? r.x : n.x,
      y: a ? n.y : r.y,
      width: a ? r.width : n.width,
      height: a ? n.height : r.height
    };
  } else {
    var n = t.getArea(), i = e;
    return {
      cx: n.cx,
      cy: n.cy,
      r0: a ? n.r0 : i.r0,
      r: a ? n.r : i.r,
      startAngle: a ? i.startAngle : 0,
      endAngle: a ? i.endAngle : Math.PI * 2
    };
  }
}
function sr(a, e, t) {
  var r = a.type === "polar" ? ke : Ce;
  return new r({
    shape: Be(e, t, a),
    silent: !0,
    z2: 0
  });
}
function or(a, e) {
  if (a.height === 0) {
    var t = e.getOtherAxis(e.getBaseAxis());
    return t.inverse ? "bottom" : "top";
  }
  return a.height > 0 ? "bottom" : "top";
}
function lr(a, e) {
  if (a.width === 0) {
    var t = e.getOtherAxis(e.getBaseAxis());
    return t.inverse ? "left" : "right";
  }
  return a.width >= 0 ? "right" : "left";
}
function ur(a) {
  a.registerChartView(Jt), a.registerSeriesModel($t), a.registerLayout(a.PRIORITY.VISUAL.LAYOUT, Yt(N)), a.registerLayout(a.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, Ut(N)), a.registerProcessor(a.PRIORITY.PROCESSOR.STATISTIC, wt(N)), a.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(e, t) {
    var r = e.componentType || "series";
    t.eachComponent({
      mainType: r,
      query: e
    }, function(n) {
      e.sortInfo && n.axis.setCategorySortInfo(e.sortInfo);
    });
  }), Xt(a);
}
function cr(a) {
  if (typeof a != "object" || a === null || !("categories" in a) || !("series" in a) || !("orientation" in a) || !("valueMode" in a))
    return !1;
  const e = a.categories, t = a.series;
  return !Array.isArray(e) || !e.every((r) => typeof r == "string") || a.orientation !== "horizontal" && a.orientation !== "vertical" || a.valueMode !== "percentage" && a.valueMode !== "value" ? !1 : Array.isArray(t) && t.every((r) => typeof r != "object" || r === null || !("key" in r) || typeof r.key != "string" || !("label" in r) || typeof r.label != "string" || !("values" in r) || !Array.isArray(r.values) || !("stack" in r) || r.stack !== null && typeof r.stack != "string" ? !1 : r.values.every((n) => typeof n == "number" || n === null) && r.values.length === e.length);
}
function hr(a) {
  return a.map((e) => ({
    type: "bar",
    id: e.key,
    name: e.label,
    data: e.values,
    stack: e.stack ?? void 0,
    emphasis: { focus: "series" }
  }));
}
function dr(a) {
  return {
    horizontal: a.orientation === "horizontal",
    maximum: a.valueMode === "percentage" ? 100 : void 0,
    formatter: a.valueMode === "percentage" ? "{value}%" : void 0
  };
}
Lt([ur, Pt, kt, Ct, Ot]);
class vr {
  constructor(e) {
    oe(this, "chart");
    this.chart = Dt(e, void 0, { renderer: "canvas" });
  }
  render(e) {
    if (!cr(e))
      throw new Error("The bar graph data is invalid.");
    const t = getComputedStyle(document.documentElement), r = t.getPropertyValue("--bs-body-color").trim() || "#212529", n = t.getPropertyValue("--cms-border").trim() || "#dee2e6", i = t.getPropertyValue("--cms-surface").trim() || "#ffffff", s = dr(e), o = {
      type: "category",
      data: e.categories,
      axisLabel: { color: r },
      axisLine: { lineStyle: { color: n } }
    }, l = {
      type: "value",
      max: s.maximum,
      axisLabel: { color: r, formatter: s.formatter },
      splitLine: { lineStyle: { color: n } }
    }, c = {
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
        textStyle: { color: r }
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: i,
        borderColor: n,
        textStyle: { color: r }
      },
      xAxis: s.horizontal ? l : o,
      yAxis: s.horizontal ? o : l,
      series: hr(e.series)
    };
    this.chart.setOption(c, !0);
  }
  resize() {
    this.chart.resize();
  }
  dispose() {
    this.chart.dispose();
  }
}
const pr = (a) => new vr(a);
export {
  pr as createBarGraphRenderer
};
