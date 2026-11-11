import { aa as d, $ as D } from "./installCanvasRenderer-nrYOY0X5.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
function S(t, n) {
  return t.type === n;
}
var h = {
  average: function(t) {
    for (var n = 0, a = 0, o = 0; o < t.length; o++)
      isNaN(t[o]) || (n += t[o], a++);
    return a === 0 ? NaN : n / a;
  },
  sum: function(t) {
    for (var n = 0, a = 0; a < t.length; a++)
      n += t[a] || 0;
    return n;
  },
  max: function(t) {
    for (var n = -1 / 0, a = 0; a < t.length; a++)
      t[a] > n && (n = t[a]);
    return isFinite(n) ? n : NaN;
  },
  min: function(t) {
    for (var n = 1 / 0, a = 0; a < t.length; a++)
      t[a] < n && (n = t[a]);
    return isFinite(n) ? n : NaN;
  },
  // TODO
  // Median
  nearest: function(t) {
    return t[0];
  }
}, l = function(t) {
  return Math.round(t.length / 2);
};
function N(t) {
  return {
    seriesType: t,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(n, a, o) {
      var i = n.getData(), r = n.get("sampling"), v = n.coordinateSystem, s = i.count();
      if (s > 10 && v.type === "cartesian2d" && r) {
        var c = v.getBaseAxis(), m = v.getOtherAxis(c), f = c.getExtent(), g = o.getDevicePixelRatio(), p = Math.abs(f[1] - f[0]) * (g || 1), e = Math.round(s / p);
        if (isFinite(e) && e > 1) {
          r === "lttb" ? n.setData(i.lttbDownSample(i.mapDimension(m.dim), 1 / e)) : r === "minmax" && n.setData(i.minmaxDownSample(i.mapDimension(m.dim), 1 / e));
          var u = void 0;
          d(r) ? u = h[r] : D(r) && (u = r), u && n.setData(i.downSample(i.mapDimension(m.dim), 1 / e, u, l));
        }
      }
    }
  };
}
export {
  N as d,
  S as i
};
