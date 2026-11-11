var f = Object.defineProperty;
var p = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var s = (e, t, o) => p(e, typeof t != "symbol" ? t + "" : t, o);
import { i as y, u as m, a as g, b as h, c as v, d as b } from "./installCanvasRenderer-nrYOY0X5.js";
import { i as x } from "./install-Y7N4lAna.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
function d(e) {
  if (typeof e != "object" || e === null || !("categories" in e) || !("series" in e) || !("orientation" in e) || !("valueMode" in e))
    return !1;
  const t = e.categories, o = e.series;
  return !Array.isArray(t) || !t.every((r) => typeof r == "string") || e.orientation !== "horizontal" && e.orientation !== "vertical" || e.valueMode !== "percentage" && e.valueMode !== "value" ? !1 : Array.isArray(o) && o.every((r) => typeof r != "object" || r === null || !("key" in r) || typeof r.key != "string" || !("label" in r) || typeof r.label != "string" || !("values" in r) || !Array.isArray(r.values) || !("stack" in r) || r.stack !== null && typeof r.stack != "string" ? !1 : r.values.every((i) => typeof i == "number" || i === null) && r.values.length === t.length);
}
function A(e) {
  return e.map((t) => ({
    type: "bar",
    id: t.key,
    name: t.label,
    data: t.values,
    stack: t.stack ?? void 0,
    emphasis: { focus: "series" }
  }));
}
function k(e) {
  return {
    horizontal: e.orientation === "horizontal",
    maximum: e.valueMode === "percentage" ? 100 : void 0,
    formatter: e.valueMode === "percentage" ? "{value}%" : void 0
  };
}
m([x, g, h, v, b]);
class z {
  constructor(t) {
    s(this, "chart");
    this.chart = y(t, void 0, { renderer: "canvas" });
  }
  render(t) {
    if (!d(t))
      throw new Error("The bar graph data is invalid.");
    const o = getComputedStyle(document.documentElement), r = o.getPropertyValue("--bs-body-color").trim() || "#212529", i = o.getPropertyValue("--cms-border").trim() || "#dee2e6", c = o.getPropertyValue("--cms-surface").trim() || "#ffffff", n = k(t), a = {
      type: "category",
      data: t.categories,
      axisLabel: { color: r },
      axisLine: { lineStyle: { color: i } }
    }, l = {
      type: "value",
      max: n.maximum,
      axisLabel: { color: r, formatter: n.formatter },
      splitLine: { lineStyle: { color: i } }
    }, u = {
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
        backgroundColor: c,
        borderColor: i,
        textStyle: { color: r }
      },
      xAxis: n.horizontal ? l : a,
      yAxis: n.horizontal ? a : l,
      series: A(t.series)
    };
    this.chart.setOption(u, !0);
  }
  resize() {
    this.chart.resize();
  }
  dispose() {
    this.chart.dispose();
  }
}
const M = (e) => new z(e);
export {
  M as createBarGraphRenderer
};
