import { aj as ra, ak as ea, al as na, am as X, an as ia, ao as sa, ap as q, aq as oa, ar as ua, as as va, at as la, au as fa, av as ca, aw as J, ax as Q, ay as da, az as ga, aA as ma, N as ha, O as U, aB as pa, aC as Sa, aD as ya, aE as Z, aF as K, aG as Ia, ad as R, H as P, aH as ba, aI as Y, aJ as H, aK as N, _ as Aa, e as xa, M as $ } from "./installCanvasRenderer-nrYOY0X5.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
function Da() {
  ra("liPosMinGap", _a);
}
function _a(r, t, a) {
  var e = ea(), f = a.serUids, i = a.liPosMinGap, g, h = t.axis, A = h.scale, b = A.needTransform(), p = A.getFilter ? A.getFilter() : null, x = na(p);
  function d(n) {
    ua(r, t.sers, function(S) {
      var l = S.getRawData(), m = l.getDimensionIndex(l.mapDimension(h.dim));
      m >= 0 && n(m, S, l.getStore());
    });
  }
  var I = 0;
  if (d(function(n, S, l) {
    e.set(S.uid, 1), (!f || !f.hasKey(S.uid)) && (g = !0), I += l.count();
  }), (!f || f.keys().length !== e.keys().length) && (g = !0), !g && i != null) {
    t.liPosMinGap = i;
    return;
  }
  X(B, I);
  var u = 0;
  d(function(n, S, l) {
    for (var m = 0, y = l.count(); m < y; ++m) {
      var D = l.get(n, m);
      isFinite(D) && (!p || va(x, D)) && (b && (D = A.transformIn(D, null)), B.arr[u++] = D);
    }
  });
  var o = B.typed ? B.arr.subarray(0, u) : (B.arr.length = u, B.arr);
  B.typed ? o.sort() : ia(o);
  for (var s = 1 / 0, c = 1; c < u; ++c) {
    var v = o[c] - o[c - 1];
    // - Different series normally have the same values (e.g., barA, barB, barC),
    //   which should be ignored.
    // - A single series with multiple same values is often not meaningful to
    //   create `bandWidth`, so it is also ignored.
    v > 0 && v < s && (s = v);
  }
  a.liPosMinGap = t.liPosMinGap = q(s) ? s : u > 0 ? la : sa, a.serUids = e;
}
var B = X(
  {
    ctor: oa
  },
  50
  // An arbitrary initial capability.
);
function Ga(r) {
  return function(t, a) {
    var e = J(t, {
      fromStat: {
        key: r
      }
    });
    if (q(e.w2))
      return [-e.w2 / 2, e.w2 / 2];
  };
}
function C(r, t) {
  return r + fa + t;
}
function La(r) {
  return Da(), {
    // non-category scale do not use `liPosMinGap` to calculate `bandWidth`.
    liPosMinGap: !ca(r.scale)
  };
}
var ka = "bar", Ha = "pictorialBar";
function wa(r, t, a, e) {
  da(r, {
    key: t,
    seriesType: a,
    coordSysType: e,
    getMetrics: La
  });
}
function Ba(r) {
  var t = r.scale.rawExtentInfo.makeRenderInfo().startValue;
  return process.env.NODE_ENV !== "production" && Q(q(t)), t;
}
var Ma = Sa(), Oa = "__ec_stack_";
function j(r) {
  return r.get("stack") || Oa + r.seriesIndex;
}
function Wa(r, t) {
  var a = Ea(r, t);
  return a.columnMap = Pa(a), a;
}
function Ea(r, t) {
  var a = C(t, N), e = [], f = J(r, {
    fromStat: {
      key: a
    },
    min: 1
  });
  return Z(r, a, function(i) {
    e.push({
      barWidth: R(i.get("barWidth"), f.w),
      barMaxWidth: R(i.get("barMaxWidth"), f.w),
      barMinWidth: R(
        // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        i.get("barMinWidth") || (aa(i) ? 0.5 : 1),
        f.w
      ),
      barGap: i.get("barGap"),
      barCategoryGap: i.get("barCategoryGap"),
      defaultBarGap: i.get("defaultBarGap"),
      stackId: j(i)
    });
  }), {
    bandWidthResult: f,
    seriesInfo: e
  };
}
function Pa(r) {
  var t = r.bandWidthResult.w, a = t, e = 0, f, i, g = [], h = {};
  P(r.seriesInfo, function(o, s) {
    s || (i = o.defaultBarGap || 0);
    var c = o.stackId;
    ba(h, c) || e++;
    var v = h[c];
    v || (v = h[c] = {
      width: 0,
      maxWidth: 0
    }, g.push(c));
    var n = o.barWidth;
    n && !v.width && (v.width = n, n = Y(a, n), a -= n);
    var S = o.barMaxWidth;
    S && (v.maxWidth = S);
    var l = o.barMinWidth;
    l && (v.minWidth = l);
    var m = o.barGap;
    m != null && (i = m);
    var y = o.barCategoryGap;
    y != null && (f = y);
  }), f == null && (f = H(35 - g.length * 4, 15) + "%");
  var A = R(f, t), b = R(i, 1), p = (a - A) / (e + (e - 1) * b);
  p = H(p, 0), P(g, function(o) {
    var s = h[o], c = s.maxWidth, v = s.minWidth;
    if (s.width) {
      var n = s.width;
      c && (n = Y(n, c)), v && (n = H(n, v)), s.width = n, a -= n + b * n, e--;
    } else {
      var n = p;
      c && c < n && (n = Y(c, a)), v && v > n && (n = v), n !== p && (s.width = n, a -= n + b * n, e--);
    }
  }), p = (a - A) / (e + (e - 1) * b), p = H(p, 0);
  var x = 0, d;
  P(g, function(o) {
    var s = h[o];
    s.width || (s.width = p), d = s, x += s.width * (1 + b);
  }), d && (x -= d.width * b);
  var I = {}, u = -x / 2;
  return P(g, function(o) {
    var s = h[o];
    I[o] = I[o] || {
      bandWidth: t,
      offset: u,
      width: s.width
    }, u += s.width * (1 + b);
  }), I;
}
function Ca(r) {
  return {
    seriesType: r,
    overallReset: function(t) {
      var a = C(r, N);
      ga(t, a, function(e) {
        process.env.NODE_ENV !== "production" && Q(e instanceof ya);
        var f = Wa(e, r);
        Z(e, a, function(i) {
          var g = f.columnMap[j(i)];
          i.getData().setLayout({
            bandWidth: g.bandWidth,
            offset: g.offset,
            size: g.width
          });
        });
      });
    }
  };
}
function Fa(r) {
  return {
    seriesType: r,
    plan: pa(),
    reset: function(t) {
      if (ma(t)) {
        var a = t.getData(), e = t.coordinateSystem, f = e.getBaseAxis(), i = e.getOtherAxis(f), g = a.getDimensionIndex(a.mapDimension(i.dim)), h = a.getDimensionIndex(a.mapDimension(f.dim)), A = t.get("showBackground", !0), b = a.mapDimension(i.dim), p = a.getCalculationInfo("stackResultDimension"), x = ha(a, b) && !!a.getCalculationInfo("stackedOnSeries"), d = i.isHorizontal(), I = i.toGlobalCoord(i.dataToCoord(Ba(i))), u = aa(t), o = t.get("barMinHeight") || 0, s = p && a.getDimensionIndex(p), c = a.getLayout("size"), v = a.getLayout("offset");
        return {
          progress: function(n, S) {
            for (var l = n.count, m = u && U(l * 3), y = u && A && U(l * 3), D = u && U(l), T = e.master.getRect(), ta = d ? T.width : T.height, _, F = S.getStore(), G = 0; (_ = n.next()) != null; ) {
              var z = F.get(x ? s : g, _), k = F.get(h, _), M = I, V = void 0;
              x && (V = +z - F.get(g, _));
              var O = void 0, W = void 0, L = void 0, w = void 0;
              if (d) {
                var E = e.dataToPoint([z, k]);
                x && (M = e.dataToPoint([V, k])[0]), O = M, W = E[1] + v, L = E[0] - M, w = c, K(L) < o && (L = (L < 0 ? -1 : 1) * o);
              } else {
                var E = e.dataToPoint([k, z]);
                x && (M = e.dataToPoint([k, V])[1]), O = E[0] + v, W = M, L = c, w = E[1] - M, K(w) < o && (w = (w <= 0 ? -1 : 1) * o);
              }
              u ? (m[G] = O, m[G + 1] = W, m[G + 2] = d ? L : w, y && (y[G] = d ? T.x : O, y[G + 1] = d ? W : T.y, y[G + 2] = ta), D[_] = _) : S.setItemLayout(_, {
                x: O,
                y: W,
                width: L,
                height: w
              }), G += 3;
            }
            u && S.setLayout({
              largePoints: m,
              largeDataIndices: D,
              largeBackgroundPoints: y,
              valueAxisHorizontal: d
            });
          }
        };
      }
    }
  };
}
function aa(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
function Ra(r) {
  return Ga(C(r, N));
}
function za(r) {
  Ma(r, function() {
    function t(a) {
      var e = C(a, N);
      wa(r, e, a, N), Ia(e, Ra(a));
    }
    t("bar"), t("pictorialBar");
  });
}
var Na = (
  /** @class */
  (function(r) {
    Aa(t, r);
    function t() {
      var a = r !== null && r.apply(this, arguments) || this;
      return a.type = t.type, a;
    }
    return t.prototype.getInitialData = function(a, e) {
      return xa(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getMarkerPosition = function(a, e, f) {
      var i = this.coordinateSystem;
      if (i && i.clampData) {
        var g = i.clampData(a), h = i.dataToPoint(g);
        if (f)
          P(i.getAxes(), function(d, I) {
            if (d.type === "category" && e != null) {
              var u = d.getTicksCoords(), o = d.getTickModel().get("alignWithLabel"), s = g[I], c = e[I] === "x1" || e[I] === "y1";
              if (c && !o && (s += 1), u.length < 2)
                return;
              if (u.length === 2) {
                h[I] = d.toGlobalCoord(d.getExtent()[c ? 1 : 0]);
                return;
              }
              for (var v = void 0, n = void 0, S = 1, l = 0; l < u.length; l++) {
                var m = u[l].coord, y = l === u.length - 1 ? u[l - 1].tickValue + S : u[l].tickValue;
                if (y === s) {
                  n = m;
                  break;
                } else if (y < s)
                  v = m;
                else if (v != null && y > s) {
                  n = (m + v) / 2;
                  break;
                }
                l === 1 && (S = y - u[0].tickValue);
              }
              n == null && (v ? v && (n = u[u.length - 1].coord) : n = u[0].coord), h[I] = d.toGlobalCoord(n);
            }
          });
        else {
          var A = this.getData(), b = A.getLayout("offset"), p = A.getLayout("size"), x = i.getBaseAxis().isHorizontal() ? 0 : 1;
          h[x] += b + p / 2;
        }
        return h;
      }
      return [NaN, NaN];
    }, t.prototype.__requireStartValue = function(a) {
      return this.getBaseAxis() !== a;
    }, t.type = "series.__base_bar__", t.defaultOption = {
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
    }, t;
  })($)
);
$.registerClass(Na);
export {
  Na as B,
  ka as S,
  Fa as a,
  Ha as b,
  Ca as c,
  za as r
};
