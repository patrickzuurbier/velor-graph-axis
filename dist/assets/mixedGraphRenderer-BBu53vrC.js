var u = Object.defineProperty;
var f = (t, r, e) => r in t ? u(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var s = (t, r, e) => f(t, typeof r != "symbol" ? r + "" : r, e);
import { i as x } from "./install-Y7N4lAna.js";
import { i as m } from "./install-dQSk1FG6.js";
import { i as b, u as d, a as g, b as h, c as A, d as L } from "./installCanvasRenderer-nrYOY0X5.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
function v(t) {
  if (typeof t != "object" || t === null || !("categories" in t) || !("series" in t) || !("primaryAxisLabel" in t) || !("secondaryAxisLabel" in t) || t.primaryAxisLabel !== null && typeof t.primaryAxisLabel != "string" || t.secondaryAxisLabel !== null && typeof t.secondaryAxisLabel != "string")
    return !1;
  const r = t.categories;
  return !Array.isArray(r) || !r.every((e) => typeof e == "string") ? !1 : Array.isArray(t.series) && t.series.every((e) => typeof e != "object" || e === null || !("key" in e) || typeof e.key != "string" || !("label" in e) || typeof e.label != "string" || !("values" in e) || !Array.isArray(e.values) || !("type" in e) || e.type !== "bar" && e.type !== "line" || !("axis" in e) || e.axis !== "primary" && e.axis !== "secondary" || !("stack" in e) || e.stack !== null && typeof e.stack != "string" || e.type === "line" && e.stack !== null ? !1 : e.values.length === r.length && e.values.every((o) => typeof o == "number" || o === null));
}
function k(t) {
  return t.some((r) => r.axis === "secondary");
}
function S(t) {
  return t.map((r) => {
    const e = {
      id: r.key,
      name: r.label,
      data: r.values,
      yAxisIndex: r.axis === "secondary" ? 1 : 0,
      emphasis: { focus: "series" }
    };
    return r.type === "line" ? {
      ...e,
      type: "line",
      showSymbol: !1,
      smooth: !0
    } : {
      ...e,
      type: "bar",
      stack: r.stack ?? void 0
    };
  });
}
d([x, m, g, h, A, L]);
class w {
  constructor(r) {
    s(this, "chart");
    this.chart = b(r, void 0, { renderer: "canvas" });
  }
  render(r) {
    if (!v(r))
      throw new Error("The mixed graph data is invalid.");
    const e = getComputedStyle(document.documentElement), o = e.getPropertyValue("--bs-body-color").trim() || "#212529", i = e.getPropertyValue("--cms-border").trim() || "#dee2e6", c = e.getPropertyValue("--cms-surface").trim() || "#ffffff", l = k(r.series), n = (p, a) => ({
      type: "value",
      name: p ?? void 0,
      position: a,
      nameTextStyle: { color: o },
      axisLabel: { color: o },
      axisLine: { show: !0, lineStyle: { color: i } },
      splitLine: { show: a === "left", lineStyle: { color: i } }
    }), y = {
      animationDuration: 350,
      color: ["#457b9d", "#e76f51", "#2a9d8f", "#e9c46a"],
      grid: {
        top: 48,
        right: l ? 52 : 24,
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
        backgroundColor: c,
        borderColor: i,
        textStyle: { color: o }
      },
      xAxis: {
        type: "category",
        data: r.categories,
        axisLabel: { color: o },
        axisLine: { lineStyle: { color: i } }
      },
      yAxis: l ? [n(r.primaryAxisLabel, "left"), n(r.secondaryAxisLabel, "right")] : n(r.primaryAxisLabel, "left"),
      series: S(r.series)
    };
    this.chart.setOption(y, !0);
  }
  resize() {
    this.chart.resize();
  }
  dispose() {
    this.chart.dispose();
  }
}
const P = (t) => new w(t);
export {
  P as createMixedGraphRenderer
};
