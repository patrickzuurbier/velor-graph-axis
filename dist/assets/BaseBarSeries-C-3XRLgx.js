import { aq as ra, ar as ea, as as na, at as X, au as ia, av as sa, aw as q, ax as oa, ay as ua, az as va, aA as la, aB as fa, aC as ca, aD as J, aE as Q, aF as da, aG as ga, aH as ha, Y as ma, $ as U, aj as pa, aI as Sa, aJ as ya, aK as $, aL as K, aM as Ia, al as R, z as P, aN as ba, aO as Y, aP as C, aQ as N, _ as Aa, c as xa, M as Z } from "./installCanvasRenderer-C92rs6a1.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
function Da() {
  ra("liPosMinGap", _a);
}
function _a(r, t, a) {
  var e = ea(), f = a.serUids, i = a.liPosMinGap, g, m = t.axis, A = m.scale, b = A.needTransform(), p = A.getFilter ? A.getFilter() : null, x = na(p);
  function d(n) {
    ua(r, t.sers, function(S) {
      var l = S.getRawData(), h = l.getDimensionIndex(l.mapDimension(m.dim));
      h >= 0 && n(h, S, l.getStore());
    });
  }
  var I = 0;
  if (d(function(n, S, l) {
    e.set(S.uid, 1), (!f || !f.hasKey(S.uid)) && (g = !0), I += l.count();
  }), (!f || f.keys().length !== e.keys().length) && (g = !0), !g && i != null) {
    t.liPosMinGap = i;
    return;
  }
  X(w, I);
  var u = 0;
  d(function(n, S, l) {
    for (var h = 0, y = l.count(); h < y; ++h) {
      var D = l.get(n, h);
      isFinite(D) && (!p || va(x, D)) && (b && (D = A.transformIn(D, null)), w.arr[u++] = D);
    }
  });
  var o = w.typed ? w.arr.subarray(0, u) : (w.arr.length = u, w.arr);
  w.typed ? o.sort() : ia(o);
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
var w = X(
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
function H(r, t) {
  return r + fa + t;
}
function La(r) {
  return Da(), {
    // non-category scale do not use `liPosMinGap` to calculate `bandWidth`.
    liPosMinGap: !ca(r.scale)
  };
}
var ka = "bar", Ca = "pictorialBar";
function Ma(r, t, a, e) {
  da(r, {
    key: t,
    seriesType: a,
    coordSysType: e,
    getMetrics: La
  });
}
function wa(r) {
  var t = r.scale.rawExtentInfo.makeRenderInfo().startValue;
  return process.env.NODE_ENV !== "production" && Q(q(t)), t;
}
var Ba = Sa(), Oa = "__ec_stack_";
function j(r) {
  return r.get("stack") || Oa + r.seriesIndex;
}
function Wa(r, t) {
  var a = Ea(r, t);
  return a.columnMap = Pa(a), a;
}
function Ea(r, t) {
  var a = H(t, N), e = [], f = J(r, {
    fromStat: {
      key: a
    },
    min: 1
  });
  return $(r, a, function(i) {
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
  var t = r.bandWidthResult.w, a = t, e = 0, f, i, g = [], m = {};
  P(r.seriesInfo, function(o, s) {
    s || (i = o.defaultBarGap || 0);
    var c = o.stackId;
    ba(m, c) || e++;
    var v = m[c];
    v || (v = m[c] = {
      width: 0,
      maxWidth: 0
    }, g.push(c));
    var n = o.barWidth;
    n && !v.width && (v.width = n, n = Y(a, n), a -= n);
    var S = o.barMaxWidth;
    S && (v.maxWidth = S);
    var l = o.barMinWidth;
    l && (v.minWidth = l);
    var h = o.barGap;
    h != null && (i = h);
    var y = o.barCategoryGap;
    y != null && (f = y);
  }), f == null && (f = C(35 - g.length * 4, 15) + "%");
  var A = R(f, t), b = R(i, 1), p = (a - A) / (e + (e - 1) * b);
  p = C(p, 0), P(g, function(o) {
    var s = m[o], c = s.maxWidth, v = s.minWidth;
    if (s.width) {
      var n = s.width;
      c && (n = Y(n, c)), v && (n = C(n, v)), s.width = n, a -= n + b * n, e--;
    } else {
      var n = p;
      c && c < n && (n = Y(c, a)), v && v > n && (n = v), n !== p && (s.width = n, a -= n + b * n, e--);
    }
  }), p = (a - A) / (e + (e - 1) * b), p = C(p, 0);
  var x = 0, d;
  P(g, function(o) {
    var s = m[o];
    s.width || (s.width = p), d = s, x += s.width * (1 + b);
  }), d && (x -= d.width * b);
  var I = {}, u = -x / 2;
  return P(g, function(o) {
    var s = m[o];
    I[o] = I[o] || {
      bandWidth: t,
      offset: u,
      width: s.width
    }, u += s.width * (1 + b);
  }), I;
}
function Ha(r) {
  return {
    seriesType: r,
    overallReset: function(t) {
      var a = H(r, N);
      ga(t, a, function(e) {
        process.env.NODE_ENV !== "production" && Q(e instanceof ya);
        var f = Wa(e, r);
        $(e, a, function(i) {
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
function za(r) {
  return {
    seriesType: r,
    plan: pa(),
    reset: function(t) {
      if (ha(t)) {
        var a = t.getData(), e = t.coordinateSystem, f = e.getBaseAxis(), i = e.getOtherAxis(f), g = a.getDimensionIndex(a.mapDimension(i.dim)), m = a.getDimensionIndex(a.mapDimension(f.dim)), A = t.get("showBackground", !0), b = a.mapDimension(i.dim), p = a.getCalculationInfo("stackResultDimension"), x = ma(a, b) && !!a.getCalculationInfo("stackedOnSeries"), d = i.isHorizontal(), I = i.toGlobalCoord(i.dataToCoord(wa(i))), u = aa(t), o = t.get("barMinHeight") || 0, s = p && a.getDimensionIndex(p), c = a.getLayout("size"), v = a.getLayout("offset");
        return {
          progress: function(n, S) {
            for (var l = n.count, h = u && U(l * 3), y = u && A && U(l * 3), D = u && U(l), T = e.master.getRect(), ta = d ? T.width : T.height, _, z = S.getStore(), G = 0; (_ = n.next()) != null; ) {
              var F = z.get(x ? s : g, _), k = z.get(m, _), B = I, V = void 0;
              x && (V = +F - z.get(g, _));
              var O = void 0, W = void 0, L = void 0, M = void 0;
              if (d) {
                var E = e.dataToPoint([F, k]);
                x && (B = e.dataToPoint([V, k])[0]), O = B, W = E[1] + v, L = E[0] - B, M = c, K(L) < o && (L = (L < 0 ? -1 : 1) * o);
              } else {
                var E = e.dataToPoint([k, F]);
                x && (B = e.dataToPoint([k, V])[1]), O = E[0] + v, W = B, L = c, M = E[1] - B, K(M) < o && (M = (M <= 0 ? -1 : 1) * o);
              }
              u ? (h[G] = O, h[G + 1] = W, h[G + 2] = d ? L : M, y && (y[G] = d ? T.x : O, y[G + 1] = d ? W : T.y, y[G + 2] = ta), D[_] = _) : S.setItemLayout(_, {
                x: O,
                y: W,
                width: L,
                height: M
              }), G += 3;
            }
            u && S.setLayout({
              largePoints: h,
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
  return Ga(H(r, N));
}
function Fa(r) {
  Ba(r, function() {
    function t(a) {
      var e = H(a, N);
      Ma(r, e, a, N), Ia(e, Ra(a));
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
        var g = i.clampData(a), m = i.dataToPoint(g);
        if (f)
          P(i.getAxes(), function(d, I) {
            if (d.type === "category" && e != null) {
              var u = d.getTicksCoords(), o = d.getTickModel().get("alignWithLabel"), s = g[I], c = e[I] === "x1" || e[I] === "y1";
              if (c && !o && (s += 1), u.length < 2)
                return;
              if (u.length === 2) {
                m[I] = d.toGlobalCoord(d.getExtent()[c ? 1 : 0]);
                return;
              }
              for (var v = void 0, n = void 0, S = 1, l = 0; l < u.length; l++) {
                var h = u[l].coord, y = l === u.length - 1 ? u[l - 1].tickValue + S : u[l].tickValue;
                if (y === s) {
                  n = h;
                  break;
                } else if (y < s)
                  v = h;
                else if (v != null && y > s) {
                  n = (h + v) / 2;
                  break;
                }
                l === 1 && (S = y - u[0].tickValue);
              }
              n == null && (v ? v && (n = u[u.length - 1].coord) : n = u[0].coord), m[I] = d.toGlobalCoord(n);
            }
          });
        else {
          var A = this.getData(), b = A.getLayout("offset"), p = A.getLayout("size"), x = i.getBaseAxis().isHorizontal() ? 0 : 1;
          m[x] += b + p / 2;
        }
        return m;
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
  })(Z)
);
Z.registerClass(Na);
export {
  Na as B,
  ka as S,
  za as a,
  Ca as b,
  Ha as c,
  Fa as r
};
