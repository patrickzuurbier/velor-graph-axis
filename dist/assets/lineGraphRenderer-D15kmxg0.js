var c = Object.defineProperty;
var u = (t, e, o) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var n = (t, e, o) => u(t, typeof e != "symbol" ? e + "" : e, o);
import { i as y } from "./install-dQSk1FG6.js";
import { i as p, u as f, a as g, b as h, c as m, d as b } from "./installCanvasRenderer-nrYOY0X5.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
function d(t) {
  if (typeof t != "object" || t === null || !("categories" in t) || !("series" in t))
    return !1;
  const e = t.categories, o = t.series;
  return !Array.isArray(e) || !e.every((r) => typeof r == "string") ? !1 : Array.isArray(o) && o.every((r) => typeof r != "object" || r === null || !("key" in r) || typeof r.key != "string" || !("label" in r) || typeof r.label != "string" || !("values" in r) || !Array.isArray(r.values) ? !1 : r.values.every((i) => typeof i == "number" || i === null) && r.values.length === e.length);
}
function x(t) {
  return t.map((e) => ({
    type: "line",
    id: e.key,
    name: e.label,
    data: e.values,
    showSymbol: !1,
    smooth: !0,
    emphasis: { focus: "series" }
  }));
}
function v(t) {
  return t.scale === "logarithmic" ? "log" : "value";
}
f([y, g, h, m, b]);
class A {
  constructor(e) {
    n(this, "chart");
    this.chart = p(e, void 0, { renderer: "canvas" });
  }
  render(e, o) {
    if (!d(e))
      throw new Error("The line graph data is invalid.");
    const r = getComputedStyle(document.documentElement), i = r.getPropertyValue("--bs-body-color").trim() || "#212529", l = r.getPropertyValue("--cms-border").trim() || "#dee2e6", a = r.getPropertyValue("--cms-surface").trim() || "#ffffff", s = {
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
        backgroundColor: a,
        borderColor: l,
        textStyle: { color: i }
      },
      xAxis: {
        type: "category",
        boundaryGap: !1,
        data: e.categories,
        axisLabel: { color: i },
        axisLine: { lineStyle: { color: l } }
      },
      yAxis: {
        type: v(o),
        axisLabel: { color: i },
        splitLine: { lineStyle: { color: l } }
      },
      series: x(e.series)
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
const k = (t) => new A(t);
export {
  k as createLineGraphRenderer
};
