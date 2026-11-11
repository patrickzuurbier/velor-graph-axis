var x = Object.defineProperty;
var _ = (a, e, t) => e in a ? x(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var m = (a, e, t) => _(a, typeof e != "symbol" ? e + "" : e, t);
import { _ as y, c as D, t as w, M as L, G as C, aL as A, P as I, aM as z, L as P, j as R, A as M, C as T, aN as V, F as g, aO as N, E as O, H as B, I as G, J as U, K as $ } from "./installCanvasRenderer-CJsrED7t.js";
import { p as S, S as j } from "./points-CEhG5zM5.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var H = (
  /** @class */
  (function(a) {
    y(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = e.type, t.hasSymbolVisual = !0, t;
    }
    return e.prototype.getInitialData = function(t, r) {
      return D(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getProgressive = function() {
      var t = this.option.progressive;
      return t ?? (this.option.large ? 5e3 : this.get("progressive"));
    }, e.prototype.getProgressiveThreshold = function() {
      var t = this.option.progressiveThreshold;
      return t ?? (this.option.large ? 1e4 : this.get("progressiveThreshold"));
    }, e.prototype.brushSelector = function(t, r, o) {
      return o.point(r.getItemLayout(t));
    }, e.prototype.getZLevelKey = function() {
      return this.getData().count() > this.getProgressiveThreshold() ? this.id : "";
    }, e.type = "series.scatter", e.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar", "matrix"], e.defaultOption = {
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
    }, e;
  })(L)
), b = 4, F = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a() {
    }
    return a;
  })()
), k = (
  /** @class */
  (function(a) {
    y(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return r._off = 0, r.hoverDataIdx = -1, r;
    }
    return e.prototype.getDefaultShape = function() {
      return new F();
    }, e.prototype.reset = function() {
      this.notClear = !1, this._off = 0;
    }, e.prototype.beforeBrush = function(t) {
      t && !t.contentRetained && this.reset();
    }, e.prototype.buildPath = function(t, r) {
      var o = r.points, i = r.size, n = this.symbolProxy, s = n.shape, u = t.getContext ? t.getContext() : t, l = u && i[0] < b, p = this.softClipShape, c;
      if (l) {
        this._ctx = u;
        return;
      }
      for (this._ctx = null, c = this._off; c < o.length; ) {
        var h = o[c++], f = o[c++];
        isNaN(h) || isNaN(f) || p && !p.contain(h, f) || (s.x = h - i[0] / 2, s.y = f - i[1] / 2, s.width = i[0], s.height = i[1], n.buildPath(t, s, !0));
      }
      this.incremental && (this._off = c, this.notClear = !0);
    }, e.prototype.afterBrush = function() {
      var t = this.shape, r = t.points, o = t.size, i = this._ctx, n = this.softClipShape, s;
      if (i) {
        for (s = this._off; s < r.length; ) {
          var u = r[s++], l = r[s++];
          isNaN(u) || isNaN(l) || n && !n.contain(u, l) || i.fillRect(u - o[0] / 2, l - o[1] / 2, o[0], o[1]);
        }
        this.incremental && (this._off = s, this.notClear = !0);
      }
    }, e.prototype.findDataIndex = function(t, r) {
      for (var o = this.shape, i = o.points, n = o.size, s = Math.max(n[0], 4), u = Math.max(n[1], 4), l = i.length / 2 - 1; l >= 0; l--) {
        var p = l * 2, c = i[p] - s / 2, h = i[p + 1] - u / 2;
        if (t >= c && r >= h && t <= c + s && r <= h + u)
          return l;
      }
      return -1;
    }, e.prototype.contain = function(t, r) {
      var o = this.transformCoordToLocal(t, r), i = this.getBoundingRect();
      if (t = o[0], r = o[1], i.contain(t, r)) {
        var n = this.hoverDataIdx = this.findDataIndex(t, r);
        return n >= 0;
      }
      return this.hoverDataIdx = -1, !1;
    }, e.prototype.getBoundingRect = function() {
      var t = this._rect;
      if (!t) {
        for (var r = this.shape, o = r.points, i = r.size, n = i[0], s = i[1], u = 1 / 0, l = 1 / 0, p = -1 / 0, c = -1 / 0, h = 0; h < o.length; ) {
          var f = o[h++], v = o[h++];
          u = Math.min(f, u), p = Math.max(f, p), l = Math.min(v, l), c = Math.max(v, c);
        }
        t = this._rect = new A(u - n / 2, l - s / 2, p - u + n, c - l + s);
      }
      return t;
    }, e;
  })(I)
), K = (
  /** @class */
  (function() {
    function a() {
      this.group = new C();
    }
    return a.prototype.updateData = function(e, t) {
      this._clear(), this._data = e;
      var r = this._create();
      r.setShape({
        points: e.getLayout("points")
      }), this._setCommon(r, e, t);
    }, a.prototype.updateLayout = function(e) {
      var t = this._data;
      if (t) {
        var r = t.getLayout("points");
        this.group.eachChild(function(o) {
          if (o.startIndex != null) {
            var i = (o.endIndex - o.startIndex) * 2, n = o.startIndex * 4 * 2;
            r = new Float32Array(r.buffer, n, i);
          }
          o.setShape("points", r), o.reset(), o.stopAnimation();
        });
      }
    }, a.prototype.incrementalPrepareUpdate = function(e) {
      this._clear();
    }, a.prototype.incrementalUpdate = function(e, t, r, o) {
      var i = this._newAdded[0], n = t.getLayout("points"), s = i && i.shape.points;
      if (process.env.NODE_ENV !== "production" && z(t.getLayout("pointsRange"), e), s && s.length < 2e4) {
        var u = s.length, l = new Float32Array(u + n.length);
        l.set(s), l.set(n, u), i.endIndex = e.end, i.setShape({
          points: l
        });
      } else {
        this._newAdded = [];
        var p = this._create();
        p.startIndex = e.start, p.endIndex = e.end, p.incremental = r, p.setShape({
          points: n
        }), this._setCommon(p, t, o);
      }
    }, a.prototype.eachRendered = function(e) {
      this._newAdded[0] && e(this._newAdded[0]);
    }, a.prototype._create = function() {
      var e = new k({
        cursor: "default"
      });
      return e.ignoreCoarsePointer = !0, this.group.add(e), this._newAdded.push(e), e;
    }, a.prototype._setCommon = function(e, t, r) {
      var o = t.hostModel;
      r = r || {};
      var i = t.getVisual("symbolSize");
      e.setShape("size", i instanceof Array ? i : [i, i]), e.softClipShape = r.clipShape || null, e.symbolProxy = P(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor = e.symbolProxy.setColor;
      var n = e.shape.size[0] < b;
      e.useStyle(
        // Draw shadow when doing fillRect is extremely slow.
        o.getModel("itemStyle").getItemStyle(n ? ["color", "shadowBlur", "shadowColor"] : ["color"])
      );
      var s = t.getVisual("style"), u = s && s.fill;
      u && e.setColor(u);
      var l = R(e);
      l.seriesIndex = o.seriesIndex, e.on("mousemove", function(p) {
        l.dataIndex = null;
        var c = e.hoverDataIdx;
        c >= 0 && (l.dataIndex = c + (e.startIndex || 0));
      });
    }, a.prototype.remove = function() {
      this._clear();
    }, a.prototype._clear = function() {
      this._newAdded = [], this.group.removeAll();
    }, a;
  })()
), Z = (
  /** @class */
  (function(a) {
    y(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.prototype.render = function(t, r, o) {
      var i = t.getData(), n = this._updateSymbolDraw(i, t);
      n.updateData(i, d(t)), this._finished = !0;
    }, e.prototype.incrementalPrepareRender = function(t, r, o) {
      var i = t.getData(), n = this._updateSymbolDraw(i, t);
      n.incrementalPrepareUpdate(i), this._finished = !1;
    }, e.prototype.incrementalRender = function(t, r, o) {
      this._symbolDraw.incrementalUpdate(t, r.getData(), M(r), d(r)), this._finished = t.end === r.getData().count();
    }, e.prototype.updateTransform = function(t, r, o) {
      var i = t.getData();
      if (this.group.dirty(), this._finished) {
        var n = S("").reset(t, r, o);
        n.progress && n.progress({
          start: 0,
          end: i.count(),
          count: i.count()
        }, i), this._symbolDraw.updateLayout(d(t));
      } else
        return {
          update: !0
        };
    }, e.prototype.eachRendered = function(t) {
      this._symbolDraw && this._symbolDraw.eachRendered(t);
    }, e.prototype._updateSymbolDraw = function(t, r) {
      var o = this._symbolDraw, i = r.pipelineContext, n = i.large;
      return (!o || n !== this._isLargeDraw) && (o && o.remove(), o = this._symbolDraw = n ? new K() : new j(), this._isLargeDraw = n, this.group.removeAll()), this.group.add(o.group), o;
    }, e.prototype.remove = function(t, r) {
      this._symbolDraw && this._symbolDraw.remove(!0), this._symbolDraw = null;
    }, e.prototype.dispose = function() {
    }, e.type = "scatter", e;
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
function J(a) {
  g(N), a.registerSeriesModel(H), a.registerChartView(Z), a.registerLayout(S("scatter"));
}
function q(a) {
  return typeof a != "object" || a === null || !("series" in a) || !("xAxisLabel" in a) || !("yAxisLabel" in a) || a.xAxisLabel !== null && typeof a.xAxisLabel != "string" || a.yAxisLabel !== null && typeof a.yAxisLabel != "string" ? !1 : Array.isArray(a.series) && a.series.every((e) => typeof e != "object" || e === null || !("key" in e) || typeof e.key != "string" || !("label" in e) || typeof e.label != "string" || !("points" in e) || !Array.isArray(e.points) ? !1 : e.points.every((t) => typeof t == "object" && t !== null && "x" in t && typeof t.x == "number" && "y" in t && typeof t.y == "number" && "size" in t && (t.size === null || typeof t.size == "number" && t.size >= 0) && "label" in t && (t.label === null || typeof t.label == "string")));
}
function Q(a) {
  const e = a.flatMap((t) => t.points).map((t) => t.size).filter((t) => t !== null);
  return e.length === 0 ? null : {
    minimum: Math.min(...e),
    maximum: Math.max(...e)
  };
}
function W(a, e) {
  return a === null || e === null ? 12 : e.minimum === e.maximum ? 24 : 10 + (a - e.minimum) / (e.maximum - e.minimum) * 30;
}
function E(a) {
  const e = Q(a);
  return a.map((t) => ({
    type: "scatter",
    id: t.key,
    name: t.label,
    data: t.points.map((r) => ({
      name: r.label ?? void 0,
      value: [r.x, r.y, r.size]
    })),
    symbolSize: (r) => W(
      Array.isArray(r) && typeof r[2] == "number" ? r[2] : null,
      e
    ),
    emphasis: { focus: "series" }
  }));
}
g([J, B, G, U, $]);
class X {
  constructor(e) {
    m(this, "chart");
    this.chart = O(e, void 0, { renderer: "canvas" });
  }
  render(e) {
    if (!q(e))
      throw new Error("The scatter graph data is invalid.");
    const t = getComputedStyle(document.documentElement), r = t.getPropertyValue("--bs-body-color").trim() || "#212529", o = t.getPropertyValue("--cms-border").trim() || "#dee2e6", i = t.getPropertyValue("--cms-surface").trim() || "#ffffff", n = {
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
        name: e.xAxisLabel ?? void 0,
        nameLocation: "middle",
        nameGap: 30,
        nameTextStyle: { color: r },
        axisLabel: { color: r },
        axisLine: { lineStyle: { color: o } },
        splitLine: { lineStyle: { color: o } }
      },
      yAxis: {
        type: "value",
        name: e.yAxisLabel ?? void 0,
        nameLocation: "middle",
        nameGap: 40,
        nameTextStyle: { color: r },
        axisLabel: { color: r },
        axisLine: { lineStyle: { color: o } },
        splitLine: { lineStyle: { color: o } }
      },
      series: E(e.series)
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
const rt = (a) => new X(a);
export {
  rt as createScatterGraphRenderer
};
