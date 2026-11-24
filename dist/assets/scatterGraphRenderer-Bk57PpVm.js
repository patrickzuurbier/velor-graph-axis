var x = Object.defineProperty;
var _ = (a, t, e) => t in a ? x(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var m = (a, t, e) => _(a, typeof t != "symbol" ? t + "" : t, e);
import { _ as y, e as D, t as w, M as L, G as C, aL as A, P as I, aM as z, L as P, x as R, I as M, C as T, aN as V, u as g, aO as N, i as O, a as B, b as G, c as U, d as $ } from "./installCanvasRenderer-nrYOY0X5.js";
import { p as S, S as j } from "./points-6m8fT05o.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var H = (
  /** @class */
  (function(a) {
    y(t, a);
    function t() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.type = t.type, e.hasSymbolVisual = !0, e;
    }
    return t.prototype.getInitialData = function(e, r) {
      return D(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getProgressive = function() {
      var e = this.option.progressive;
      return e ?? (this.option.large ? 5e3 : this.get("progressive"));
    }, t.prototype.getProgressiveThreshold = function() {
      var e = this.option.progressiveThreshold;
      return e ?? (this.option.large ? 1e4 : this.get("progressiveThreshold"));
    }, t.prototype.brushSelector = function(e, r, o) {
      return o.point(r.getItemLayout(e));
    }, t.prototype.getZLevelKey = function() {
      return this.getData().count() > this.getProgressiveThreshold() ? this.id : "";
    }, t.type = "series.scatter", t.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar", "matrix"], t.defaultOption = {
      coordinateSystem: "cartesian2d",
      // zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      symbolSize: 10,
      // symbolRotate: null,
      large: !1,
      // Available when large is true
      largeThreshold: 2e3,
      // cursor: null,
      itemStyle: {
        opacity: 0.8
      },
      emphasis: {
        scale: !0
      },
      clip: !0,
      select: {
        itemStyle: {
          borderColor: w.color.primary
        }
      },
      universalTransition: {
        divideShape: "clone"
      }
      // progressive: null
    }, t;
  })(L)
), b = 4, k = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a() {
    }
    return a;
  })()
), F = (
  /** @class */
  (function(a) {
    y(t, a);
    function t(e) {
      var r = a.call(this, e) || this;
      return r._off = 0, r.hoverDataIdx = -1, r;
    }
    return t.prototype.getDefaultShape = function() {
      return new k();
    }, t.prototype.reset = function() {
      this.notClear = !1, this._off = 0;
    }, t.prototype.beforeBrush = function(e) {
      e && !e.contentRetained && this.reset();
    }, t.prototype.buildPath = function(e, r) {
      var o = r.points, i = r.size, n = this.symbolProxy, s = n.shape, u = e.getContext ? e.getContext() : e, l = u && i[0] < b, p = this.softClipShape, c;
      if (l) {
        this._ctx = u;
        return;
      }
      for (this._ctx = null, c = this._off; c < o.length; ) {
        var h = o[c++], f = o[c++];
        isNaN(h) || isNaN(f) || p && !p.contain(h, f) || (s.x = h - i[0] / 2, s.y = f - i[1] / 2, s.width = i[0], s.height = i[1], n.buildPath(e, s, !0));
      }
      this.incremental && (this._off = c, this.notClear = !0);
    }, t.prototype.afterBrush = function() {
      var e = this.shape, r = e.points, o = e.size, i = this._ctx, n = this.softClipShape, s;
      if (i) {
        for (s = this._off; s < r.length; ) {
          var u = r[s++], l = r[s++];
          isNaN(u) || isNaN(l) || n && !n.contain(u, l) || i.fillRect(u - o[0] / 2, l - o[1] / 2, o[0], o[1]);
        }
        this.incremental && (this._off = s, this.notClear = !0);
      }
    }, t.prototype.findDataIndex = function(e, r) {
      for (var o = this.shape, i = o.points, n = o.size, s = Math.max(n[0], 4), u = Math.max(n[1], 4), l = i.length / 2 - 1; l >= 0; l--) {
        var p = l * 2, c = i[p] - s / 2, h = i[p + 1] - u / 2;
        if (e >= c && r >= h && e <= c + s && r <= h + u)
          return l;
      }
      return -1;
    }, t.prototype.contain = function(e, r) {
      var o = this.transformCoordToLocal(e, r), i = this.getBoundingRect();
      if (e = o[0], r = o[1], i.contain(e, r)) {
        var n = this.hoverDataIdx = this.findDataIndex(e, r);
        return n >= 0;
      }
      return this.hoverDataIdx = -1, !1;
    }, t.prototype.getBoundingRect = function() {
      var e = this._rect;
      if (!e) {
        for (var r = this.shape, o = r.points, i = r.size, n = i[0], s = i[1], u = 1 / 0, l = 1 / 0, p = -1 / 0, c = -1 / 0, h = 0; h < o.length; ) {
          var f = o[h++], v = o[h++];
          u = Math.min(f, u), p = Math.max(f, p), l = Math.min(v, l), c = Math.max(v, c);
        }
        e = this._rect = new A(u - n / 2, l - s / 2, p - u + n, c - l + s);
      }
      return e;
    }, t;
  })(I)
), Z = (
  /** @class */
  (function() {
    function a() {
      this.group = new C();
    }
    return a.prototype.updateData = function(t, e) {
      this._clear(), this._data = t;
      var r = this._create();
      r.setShape({
        points: t.getLayout("points")
      }), this._setCommon(r, t, e);
    }, a.prototype.updateLayout = function(t) {
      var e = this._data;
      if (e) {
        var r = e.getLayout("points");
        this.group.eachChild(function(o) {
          if (o.startIndex != null) {
            var i = (o.endIndex - o.startIndex) * 2, n = o.startIndex * 4 * 2;
            r = new Float32Array(r.buffer, n, i);
          }
          o.setShape("points", r), o.reset(), o.stopAnimation();
        });
      }
    }, a.prototype.incrementalPrepareUpdate = function(t) {
      this._clear();
    }, a.prototype.incrementalUpdate = function(t, e, r, o) {
      var i = this._newAdded[0], n = e.getLayout("points"), s = i && i.shape.points;
      if (process.env.NODE_ENV !== "production" && z(e.getLayout("pointsRange"), t), s && s.length < 2e4) {
        var u = s.length, l = new Float32Array(u + n.length);
        l.set(s), l.set(n, u), i.endIndex = t.end, i.setShape({
          points: l
        });
      } else {
        this._newAdded = [];
        var p = this._create();
        p.startIndex = t.start, p.endIndex = t.end, p.incremental = r, p.setShape({
          points: n
        }), this._setCommon(p, e, o);
      }
    }, a.prototype.eachRendered = function(t) {
      this._newAdded[0] && t(this._newAdded[0]);
    }, a.prototype._create = function() {
      var t = new F({
        cursor: "default"
      });
      return t.ignoreCoarsePointer = !0, this.group.add(t), this._newAdded.push(t), t;
    }, a.prototype._setCommon = function(t, e, r) {
      var o = e.hostModel;
      r = r || {};
      var i = e.getVisual("symbolSize");
      t.setShape("size", i instanceof Array ? i : [i, i]), t.softClipShape = r.clipShape || null, t.symbolProxy = P(e.getVisual("symbol"), 0, 0, 0, 0), t.setColor = t.symbolProxy.setColor;
      var n = t.shape.size[0] < b;
      t.useStyle(
        // Draw shadow when doing fillRect is extremely slow.
        o.getModel("itemStyle").getItemStyle(n ? ["color", "shadowBlur", "shadowColor"] : ["color"])
      );
      var s = e.getVisual("style"), u = s && s.fill;
      u && t.setColor(u);
      var l = R(t);
      l.seriesIndex = o.seriesIndex, t.on("mousemove", function(p) {
        l.dataIndex = null;
        var c = t.hoverDataIdx;
        c >= 0 && (l.dataIndex = c + (t.startIndex || 0));
      });
    }, a.prototype.remove = function() {
      this._clear();
    }, a.prototype._clear = function() {
      this._newAdded = [], this.group.removeAll();
    }, a;
  })()
), K = (
  /** @class */
  (function(a) {
    y(t, a);
    function t() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, r, o) {
      var i = e.getData(), n = this._updateSymbolDraw(i, e);
      n.updateData(i, d(e)), this._finished = !0;
    }, t.prototype.incrementalPrepareRender = function(e, r, o) {
      var i = e.getData(), n = this._updateSymbolDraw(i, e);
      n.incrementalPrepareUpdate(i), this._finished = !1;
    }, t.prototype.incrementalRender = function(e, r, o) {
      this._symbolDraw.incrementalUpdate(e, r.getData(), M(r), d(r)), this._finished = e.end === r.getData().count();
    }, t.prototype.updateTransform = function(e, r, o) {
      var i = e.getData();
      if (this.group.dirty(), this._finished) {
        var n = S("").reset(e, r, o);
        n.progress && n.progress({
          start: 0,
          end: i.count(),
          count: i.count()
        }, i), this._symbolDraw.updateLayout(d(e));
      } else
        return {
          update: !0
        };
    }, t.prototype.eachRendered = function(e) {
      this._symbolDraw && this._symbolDraw.eachRendered(e);
    }, t.prototype._updateSymbolDraw = function(e, r) {
      var o = this._symbolDraw, i = r.pipelineContext, n = i.large;
      return (!o || n !== this._isLargeDraw) && (o && o.remove(), o = this._symbolDraw = n ? new Z() : new j(), this._isLargeDraw = n, this.group.removeAll()), this.group.add(o.group), o;
    }, t.prototype.remove = function(e, r) {
      this._symbolDraw && this._symbolDraw.remove(!0), this._symbolDraw = null;
    }, t.prototype.dispose = function() {
    }, t.type = "scatter", t;
  })(T)
);
function d(a) {
  return {
    // TODO
    // If this parameter should be a shape or a bounding volume
    // shape will be more general.
    // But bounding volume like bounding rect will be much faster in the contain calculation
    clipShape: V(a)
  };
}
function q(a) {
  g(N), a.registerSeriesModel(H), a.registerChartView(K), a.registerLayout(S("scatter"));
}
function J(a) {
  return typeof a != "object" || a === null || !("series" in a) || !("xAxisLabel" in a) || !("yAxisLabel" in a) || a.xAxisLabel !== null && typeof a.xAxisLabel != "string" || a.yAxisLabel !== null && typeof a.yAxisLabel != "string" ? !1 : Array.isArray(a.series) && a.series.every((t) => typeof t != "object" || t === null || !("key" in t) || typeof t.key != "string" || !("label" in t) || typeof t.label != "string" || !("points" in t) || !Array.isArray(t.points) ? !1 : t.points.every((e) => typeof e == "object" && e !== null && "x" in e && typeof e.x == "number" && "y" in e && typeof e.y == "number" && "size" in e && (e.size === null || typeof e.size == "number" && e.size >= 0) && "label" in e && (e.label === null || typeof e.label == "string")));
}
function Q(a) {
  const t = a.flatMap((e) => e.points).map((e) => e.size).filter((e) => e !== null);
  return t.length === 0 ? null : {
    minimum: Math.min(...t),
    maximum: Math.max(...t)
  };
}
function W(a, t) {
  return a === null || t === null ? 12 : t.minimum === t.maximum ? 24 : 10 + (a - t.minimum) / (t.maximum - t.minimum) * 30;
}
function E(a) {
  const t = Q(a);
  return a.map((e) => ({
    type: "scatter",
    id: e.key,
    name: e.label,
    data: e.points.map((r) => ({
      name: r.label ?? void 0,
      value: [r.x, r.y, r.size]
    })),
    symbolSize: (r) => W(
      Array.isArray(r) && typeof r[2] == "number" ? r[2] : null,
      t
    ),
    emphasis: { focus: "series" }
  }));
}
g([q, B, G, U, $]);
class X {
  constructor(t) {
    m(this, "chart");
    this.chart = O(t, void 0, { renderer: "canvas" });
  }
  render(t) {
    if (!J(t))
      throw new Error("The scatter graph data is invalid.");
    const e = getComputedStyle(document.documentElement), r = e.getPropertyValue("--bs-body-color").trim() || "#212529", o = e.getPropertyValue("--velor-border").trim() || "#dee2e6", i = e.getPropertyValue("--velor-surface").trim() || "#ffffff", n = {
      animationDuration: 350,
      color: ["#457b9d", "#e76f51", "#2a9d8f", "#e9c46a"],
      grid: {
        top: 48,
        right: 24,
        bottom: 44,
        left: 52,
        containLabel: !0
      },
      legend: {
        top: 0,
        textStyle: { color: r }
      },
      tooltip: {
        trigger: "item",
        backgroundColor: i,
        borderColor: o,
        textStyle: { color: r }
      },
      xAxis: {
        type: "value",
        name: t.xAxisLabel ?? void 0,
        nameLocation: "middle",
        nameGap: 30,
        nameTextStyle: { color: r },
        axisLabel: { color: r },
        axisLine: { lineStyle: { color: o } },
        splitLine: { lineStyle: { color: o } }
      },
      yAxis: {
        type: "value",
        name: t.yAxisLabel ?? void 0,
        nameLocation: "middle",
        nameGap: 40,
        nameTextStyle: { color: r },
        axisLabel: { color: r },
        axisLine: { lineStyle: { color: o } },
        splitLine: { lineStyle: { color: o } }
      },
      series: E(t.series)
    };
    this.chart.setOption(n, !0);
  }
  resize() {
    this.chart.resize();
  }
  dispose() {
    this.chart.dispose();
  }
}
const re = (a) => new X(a);
export {
  re as createScatterGraphRenderer
};
