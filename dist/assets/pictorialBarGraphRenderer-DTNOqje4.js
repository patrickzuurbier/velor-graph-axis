var se = Object.defineProperty;
var ce = (t, a, e) => a in t ? se(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e;
var V = (t, a, e) => ce(t, typeof a != "symbol" ? a + "" : a, e);
import { _ as q, h as ue, j as ve, C as pe, T as de, G, o as he, q as fe, n as ge, x as me, u as F, z as J, U as ye, d as K, al as L, am as Se, an as xe, ao as _e, k as w, R as Q, ap as N, L as Pe, Z as Re, i as be, t as Ce, E as De, F as Ie, H as we, I as ze, J as Ae, K as Be } from "./installCanvasRenderer-C92rs6a1.js";
import { b, B as X, c as Le, a as Oe, r as Te } from "./BaseBarSeries-C-3XRLgx.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var Ee = ["itemStyle", "borderWidth"], k = [{
  xy: "x",
  wh: "width",
  index: 0,
  posDesc: ["left", "right"]
}, {
  xy: "y",
  wh: "height",
  index: 1,
  posDesc: ["top", "bottom"]
}], A = new Se(), Ye = (
  /** @class */
  (function(t) {
    q(a, t);
    function a() {
      var e = t !== null && t.apply(this, arguments) || this;
      return e.type = b, e;
    }
    return a.prototype.render = function(e, i, r) {
      var n = this.group, o = e.getData(), d = this._data, h = e.coordinateSystem, f = h.getBaseAxis(), v = f.isHorizontal(), p = h.master.getRect(), l = {
        ecSize: {
          width: r.getWidth(),
          height: r.getHeight()
        },
        seriesModel: e,
        coordSys: h,
        coordSysExtent: [[p.x, p.x + p.width], [p.y, p.y + p.height]],
        isHorizontal: v,
        valueDim: k[+v],
        categoryDim: k[1 - +v]
      };
      o.diff(d).add(function(s) {
        if (o.hasValue(s)) {
          var c = W(o, s), g = H(o, s, c, l), m = U(o, l, g);
          o.setItemGraphicEl(s, m), n.add(m), $(m, l, g);
        }
      }).update(function(s, c) {
        var g = d.getItemGraphicEl(c);
        if (!o.hasValue(s)) {
          n.remove(g);
          return;
        }
        var m = W(o, s), y = H(o, s, m, l), S = re(o, y);
        g && S !== g.__pictorialShapeStr && (n.remove(g), o.setItemGraphicEl(s, null), g = null), g ? Ue(g, l, y) : g = U(o, l, y, !0), o.setItemGraphicEl(s, g), g.__pictorialSymbolMeta = y, n.add(g), $(g, l, y);
      }).remove(function(s) {
        var c = d.getItemGraphicEl(s);
        c && j(d, s, c.__pictorialSymbolMeta.animationModel, c);
      }).execute();
      var u = e.get("clip", !0) ? ue(e.coordinateSystem, !1, e) : null;
      return u ? n.setClipPath(u) : n.removeClipPath(), this._data = o, this.group;
    }, a.prototype.remove = function(e, i) {
      var r = this.group, n = this._data;
      e.get("animation") ? n && n.eachItemGraphicEl(function(o) {
        j(n, ve(o).dataIndex, e, o);
      }) : r.removeAll();
    }, a.type = b, a;
  })(pe)
);
function H(t, a, e, i) {
  var r = t.getItemLayout(a), n = e.get("symbolRepeat"), o = e.get("symbolClip"), d = e.get("symbolPosition") || "start", h = e.get("symbolRotate"), f = (h || 0) * Math.PI / 180 || 0, v = e.get("symbolPatternSize") || 2, p = e.isAnimationEnabled(), l = {
    dataIndex: a,
    layout: r,
    itemModel: e,
    symbolType: t.getItemVisual(a, "symbol") || "circle",
    style: t.getItemVisual(a, "style"),
    symbolClip: o,
    symbolRepeat: n,
    symbolRepeatDirection: e.get("symbolRepeatDirection"),
    symbolPatternSize: v,
    rotation: f,
    animationModel: p ? e : null,
    hoverScale: p && e.get(["emphasis", "scale"]),
    z2: e.getShallow("z", !0) || 0
  };
  Ve(e, n, r, i, l), Ge(t, a, r, n, o, l.boundingLength, l.pxSign, v, i, l), Xe(e, l.symbolScale, f, i, l);
  var u = l.symbolSize, s = de(e.get("symbolOffset"), u);
  return ke(e, u, r, n, o, s, d, l.valueLineWidth, l.boundingLength, l.repeatCutLength, i, l), l;
}
function Ve(t, a, e, i, r) {
  var n = i.valueDim, o = t.get("symbolBoundingData"), d = i.coordSys.getOtherAxis(i.coordSys.getBaseAxis()), h = d.toGlobalCoord(d.dataToCoord(0)), f = 1 - +(e[n.wh] <= 0), v;
  if (K(o)) {
    var p = [B(d, o[0]) - h, B(d, o[1]) - h];
    p[1] < p[0] && p.reverse(), v = p[f];
  } else o != null ? v = B(d, o) - h : a ? v = i.coordSysExtent[n.index][f] - h : v = e[n.wh];
  r.boundingLength = v, a && (r.repeatCutLength = e[n.wh]);
  var l = n.xy === "x", u = d.inverse;
  r.pxSign = l && !u || !l && u ? v >= 0 ? 1 : -1 : v > 0 ? 1 : -1;
}
function B(t, a) {
  return t.toGlobalCoord(t.dataToCoord(t.scale.parse(a)));
}
function Ge(t, a, e, i, r, n, o, d, h, f) {
  var v = h.valueDim, p = h.categoryDim, l = Math.abs(e[p.wh]), u = t.getItemVisual(a, "symbolSize"), s;
  K(u) ? s = u.slice() : u == null ? s = ["100%", "100%"] : s = [u, u], s[p.index] = L(s[p.index], l), s[v.index] = L(s[v.index], i ? l : Math.abs(n)), f.symbolSize = s;
  var c = f.symbolScale = [s[0] / d, s[1] / d];
  c[v.index] *= (h.isHorizontal ? -1 : 1) * o;
}
function Xe(t, a, e, i, r) {
  var n = t.get(Ee) || 0;
  n && (A.attr({
    scaleX: a[0],
    scaleY: a[1],
    rotation: e
  }), A.updateTransform(), n /= A.getLineScale(), n *= a[i.valueDim.index]), r.valueLineWidth = n || 0;
}
function ke(t, a, e, i, r, n, o, d, h, f, v, p) {
  var l = v.categoryDim, u = v.valueDim, s = p.pxSign, c = Math.max(a[u.index] + d, 0), g = c;
  if (i) {
    var m = Math.abs(h), y = xe(t.get("symbolMargin"), "15%") + "", S = !1;
    y.lastIndexOf("!") === y.length - 1 && (S = !0, y = y.slice(0, y.length - 1));
    var x = L(y, a[u.index]), C = Math.max(c + x * 2, 0), D = S ? 0 : x * 2, T = _e(i), _ = T ? i : Z((m + D) / C), le = m - _ * c;
    x = le / 2 / (S ? _ : Math.max(_ - 1, 1)), C = c + x * 2, D = S ? 0 : x * 2, !T && i !== "fixed" && (_ = f ? Z((Math.abs(f) + D) / C) : 0), g = _ * C - D, p.repeatTimes = _, p.symbolMargin = x;
  }
  var z = s * (g / 2), R = p.pathPosition = [];
  R[l.index] = e[l.wh] / 2, R[u.index] = o === "start" ? z : o === "end" ? h - z : h / 2, n && (R[0] += n[0], R[1] += n[1]);
  var E = p.bundlePosition = [];
  E[l.index] = e[l.xy], E[u.index] = e[u.xy];
  var Y = p.barRectShape = w({}, e);
  Y[u.wh] = s * Math.max(Math.abs(e[u.wh]), Math.abs(R[u.index] + z)), Y[l.wh] = e[l.wh];
  var I = p.clipShape = {};
  I[l.xy] = -e[l.xy], I[l.wh] = v.ecSize[l.wh], I[u.xy] = 0, I[u.wh] = e[u.wh];
}
function M(t) {
  var a = t.symbolPatternSize, e = Pe(
    // Consider texture img, make a big size.
    t.symbolType,
    -a / 2,
    -a / 2,
    a,
    a
  );
  return e.attr({
    culling: !0
  }), e.type !== "image" && e.setStyle({
    strokeNoScale: !0
  }), e;
}
function ee(t, a, e, i) {
  var r = t.__pictorialBundle, n = e.symbolSize, o = e.valueLineWidth, d = e.pathPosition, h = a.valueDim, f = e.repeatTimes || 0, v = 0, p = n[a.valueDim.index] + o + e.symbolMargin * 2;
  for (O(t, function(c) {
    c.__pictorialAnimationIndex = v, c.__pictorialRepeatTimes = f, v < f ? P(c, null, s(v), e, i) : P(c, null, {
      scaleX: 0,
      scaleY: 0
    }, e, i, function() {
      r.remove(c);
    }), v++;
  }); v < f; v++) {
    var l = M(e);
    l.__pictorialAnimationIndex = v, l.__pictorialRepeatTimes = f, r.add(l);
    var u = s(v);
    P(l, {
      x: u.x,
      y: u.y,
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: u.scaleX,
      scaleY: u.scaleY,
      rotation: u.rotation
    }, e, i);
  }
  function s(c) {
    var g = d.slice(), m = e.pxSign, y = c;
    return (e.symbolRepeatDirection === "start" ? m > 0 : m < 0) && (y = f - 1 - c), g[h.index] = p * (y - f / 2 + 0.5) + d[h.index], {
      x: g[0],
      y: g[1],
      scaleX: e.symbolScale[0],
      scaleY: e.symbolScale[1],
      rotation: e.rotation
    };
  }
}
function te(t, a, e, i) {
  var r = t.__pictorialBundle, n = t.__pictorialMainPath;
  n ? P(n, null, {
    x: e.pathPosition[0],
    y: e.pathPosition[1],
    scaleX: e.symbolScale[0],
    scaleY: e.symbolScale[1],
    rotation: e.rotation
  }, e, i) : (n = t.__pictorialMainPath = M(e), r.add(n), P(n, {
    x: e.pathPosition[0],
    y: e.pathPosition[1],
    scaleX: 0,
    scaleY: 0,
    rotation: e.rotation
  }, {
    scaleX: e.symbolScale[0],
    scaleY: e.symbolScale[1]
  }, e, i));
}
function ae(t, a, e) {
  var i = w({}, a.barRectShape), r = t.__pictorialBarRect;
  r ? P(r, null, {
    shape: i
  }, a, e) : (r = t.__pictorialBarRect = new Q({
    z2: 2,
    shape: i,
    silent: !0,
    style: {
      stroke: "transparent",
      fill: "transparent",
      lineWidth: 0
    }
  }), r.disableMorphing = !0, t.add(r));
}
function ie(t, a, e, i) {
  if (e.symbolClip) {
    var r = t.__pictorialClipPath, n = w({}, e.clipShape), o = a.valueDim, d = e.animationModel, h = e.dataIndex;
    if (r)
      F(r, {
        shape: n
      }, d, h);
    else {
      n[o.wh] = 0, r = new Q({
        shape: n
      }), t.__pictorialBundle.setClipPath(r), t.__pictorialClipPath = r;
      var f = {};
      f[o.wh] = e.clipShape[o.wh], N[i ? "updateProps" : "initProps"](r, {
        shape: f
      }, d, h);
    }
  }
}
function W(t, a) {
  var e = t.getItemModel(a);
  return e.getAnimationDelayParams = He, e.isAnimationEnabled = We, e;
}
function He(t) {
  return {
    index: t.__pictorialAnimationIndex,
    count: t.__pictorialRepeatTimes
  };
}
function We() {
  return this.parentModel.isAnimationEnabled() && !!this.getShallow("animation");
}
function U(t, a, e, i) {
  var r = new G(), n = new G();
  return r.add(n), r.__pictorialBundle = n, n.x = e.bundlePosition[0], n.y = e.bundlePosition[1], e.symbolRepeat ? ee(r, a, e) : te(r, a, e), ae(r, e, i), ie(r, a, e, i), r.__pictorialShapeStr = re(t, e), r.__pictorialSymbolMeta = e, r;
}
function Ue(t, a, e) {
  var i = e.animationModel, r = e.dataIndex, n = t.__pictorialBundle;
  F(n, {
    x: e.bundlePosition[0],
    y: e.bundlePosition[1]
  }, i, r), e.symbolRepeat ? ee(t, a, e, !0) : te(t, a, e, !0), ae(t, e, !0), ie(t, a, e, !0);
}
function j(t, a, e, i) {
  var r = i.__pictorialBarRect;
  r && r.removeTextContent();
  var n = [];
  O(i, function(o) {
    n.push(o);
  }), i.__pictorialMainPath && n.push(i.__pictorialMainPath), i.__pictorialClipPath && (e = null), J(n, function(o) {
    ye(o, {
      scaleX: 0,
      scaleY: 0
    }, e, a, function() {
      i.parent && i.parent.remove(i);
    });
  }), t.setItemGraphicEl(a, null);
}
function re(t, a) {
  return [t.getItemVisual(a.dataIndex, "symbol") || "none", !!a.symbolRepeat, !!a.symbolClip].join(":");
}
function O(t, a, e) {
  J(t.__pictorialBundle.children(), function(i) {
    i !== t.__pictorialBarRect && a.call(e, i);
  });
}
function P(t, a, e, i, r, n) {
  a && t.attr(a), i.symbolClip && !r ? e && t.attr(e) : e && N[r ? "updateProps" : "initProps"](t, e, i.animationModel, i.dataIndex, n);
}
function $(t, a, e) {
  var i = e.dataIndex, r = e.itemModel, n = r.getModel("emphasis"), o = n.getModel("itemStyle").getItemStyle(), d = r.getModel(["blur", "itemStyle"]).getItemStyle(), h = r.getModel(["select", "itemStyle"]).getItemStyle(), f = r.getShallow("cursor"), v = n.get("focus"), p = n.get("blurScope"), l = n.get("scale");
  O(t, function(c) {
    if (c instanceof Re) {
      var g = c.style;
      c.useStyle(w({
        // TODO other properties like dx, dy ?
        image: g.image,
        x: g.x,
        y: g.y,
        width: g.width,
        height: g.height
      }, e.style));
    } else
      c.useStyle(e.style);
    var m = c.ensureState("emphasis");
    m.style = o, l && (m.scaleX = c.scaleX * 1.1, m.scaleY = c.scaleY * 1.1), c.ensureState("blur").style = d, c.ensureState("select").style = h, f && (c.cursor = f), c.z2 = e.z2;
  });
  var u = a.valueDim.posDesc[+(e.boundingLength > 0)], s = t.__pictorialBarRect;
  s.ignoreClip = !0, he(s, ge(r), {
    labelFetcher: a.seriesModel,
    labelDataIndex: i,
    defaultText: fe(a.seriesModel.getData(), i),
    inheritColor: e.style.fill,
    defaultOpacity: e.style.opacity,
    defaultOutsidePosition: u
  }), me(t, v, p, n.get("disabled"));
}
function Z(t) {
  var a = Math.round(t);
  return Math.abs(t - a) < 1e-4 ? a : Math.ceil(t);
}
var je = (
  /** @class */
  (function(t) {
    q(a, t);
    function a() {
      var e = t !== null && t.apply(this, arguments) || this;
      return e.type = a.type, e.hasSymbolVisual = !0, e.defaultSymbol = "roundRect", e;
    }
    return a.prototype.getInitialData = function(e) {
      return e.stack = null, t.prototype.getInitialData.apply(this, arguments);
    }, a.type = "series." + b, a.dependencies = ["grid"], a.defaultOption = be(X.defaultOption, {
      symbol: "circle",
      symbolSize: null,
      symbolRotate: null,
      symbolPosition: null,
      symbolOffset: null,
      symbolMargin: null,
      symbolRepeat: !1,
      symbolRepeatDirection: "end",
      symbolClip: !1,
      symbolBoundingData: null,
      symbolPatternSize: 400,
      barGap: "-100%",
      // Pictorial bar do not clip by default because in many cases
      // xAxis and yAxis are not displayed and it's expected not to clip
      clip: !1,
      // z can be set in data item, which is z2 actually.
      // Disable progressive
      progressive: 0,
      emphasis: {
        // By default pictorialBar do not hover scale. Hover scale is not suitable
        // for the case that both has foreground and background.
        scale: !1
      },
      select: {
        itemStyle: {
          borderColor: Ce.color.primary
        }
      }
    }), a;
  })(X)
);
function $e(t) {
  t.registerChartView(Ye), t.registerSeriesModel(je), t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, Le(b)), t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, Oe(b)), Te(t);
}
const ne = {
  arrow: "arrow",
  circle: "circle",
  diamond: "diamond",
  pin: "pin",
  rectangle: "rect",
  "rounded-rectangle": "roundRect",
  triangle: "triangle"
};
function Ze(t) {
  if (typeof t != "object" || t === null || !("categories" in t) || !("series" in t) || !("orientation" in t))
    return !1;
  const a = t.categories, e = t.series;
  return !Array.isArray(a) || !a.every((i) => typeof i == "string") || t.orientation !== "horizontal" && t.orientation !== "vertical" ? !1 : Array.isArray(e) && e.every((i) => typeof i != "object" || i === null || !("key" in i) || typeof i.key != "string" || !("label" in i) || typeof i.label != "string" || !("values" in i) || !Array.isArray(i.values) || !("symbol" in i) || typeof i.symbol != "string" || !(i.symbol in ne) || !("mode" in i) || i.mode !== "repeated" && i.mode !== "scaled" ? !1 : i.values.every((r) => typeof r == "number" && r >= 0 || r === null) && i.values.length === a.length);
}
function oe(t) {
  const a = t.series.flatMap((e) => e.values).filter((e) => e !== null);
  return Math.max(0, ...a);
}
function qe(t) {
  const a = oe(t);
  return t.series.map((e) => {
    const i = e.mode === "repeated";
    return {
      type: "pictorialBar",
      id: e.key,
      name: e.label,
      data: e.values,
      symbol: ne[e.symbol],
      symbolBoundingData: a,
      symbolClip: i,
      symbolMargin: i ? 4 : void 0,
      symbolRepeat: i,
      symbolSize: i ? 16 : ["60%", "100%"],
      emphasis: { focus: "series" }
    };
  });
}
Ie([$e, we, ze, Ae, Be]);
class Fe {
  constructor(a) {
    V(this, "chart");
    this.chart = De(a, void 0, { renderer: "canvas" });
  }
  render(a) {
    if (!Ze(a))
      throw new Error("The pictorial bar graph data is invalid.");
    const e = getComputedStyle(document.documentElement), i = e.getPropertyValue("--bs-body-color").trim() || "#212529", r = e.getPropertyValue("--cms-border").trim() || "#dee2e6", n = e.getPropertyValue("--cms-surface").trim() || "#ffffff", o = {
      type: "category",
      data: a.categories,
      axisLabel: { color: i },
      axisLine: { lineStyle: { color: r } }
    }, d = {
      type: "value",
      max: oe(a),
      axisLabel: { color: i },
      splitLine: { lineStyle: { color: r } }
    }, h = a.orientation === "horizontal", f = {
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
        backgroundColor: n,
        borderColor: r,
        textStyle: { color: i }
      },
      xAxis: h ? d : o,
      yAxis: h ? o : d,
      series: qe(a)
    };
    this.chart.setOption(f, !0);
  }
  resize() {
    this.chart.resize();
  }
  dispose() {
    this.chart.dispose();
  }
}
const Ne = (t) => new Fe(t);
export {
  Ne as createPictorialBarGraphRenderer
};
