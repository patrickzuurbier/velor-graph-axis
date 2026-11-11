var ye = Object.defineProperty;
var Ae = (a, e, r) => e in a ? ye(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r;
var Z = (a, e, r) => Ae(a, typeof e != "symbol" ? e + "" : e, r);
import { _ as B, c as be, p as xe, i as Se, t as _e, P as oe, a as q, b as we, d as le, m as ce, e as Ie, w as U, f as Ce, g as T, u as O, r as z, s as Pe, l as De, G as ke, h as Le, j, C as Re, S as ue, R as he, k as de, n as Oe, o as Ee, q as Ve, v as Me, x as Te, y as Be, z as Ne, A as We, B as Ge, D as Fe, E as ze, F as Ye, H as Xe, I as Ue, J as je, K as $e } from "./installCanvasRenderer-CJsrED7t.js";
import { S as R, B as H, c as Ze, a as qe, r as He } from "./BaseBarSeries-vN-5r6zc.js";
import { i as Je, d as Ke } from "./dataSample-DvPwzGQe.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var Qe = (
  /** @class */
  (function(a) {
    B(e, a);
    function e() {
      var r = a !== null && a.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.getInitialData = function() {
      return be(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, e.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, e.prototype.__preparePipelineContext = function(r, t) {
      var n = xe(this, r, t);
      return n.progressiveRender && (n.large = !0), n;
    }, e.prototype.brushSelector = function(r, t, n) {
      return n.rect(t.getItemLayout(r));
    }, e.type = "series." + R, e.dependencies = ["grid", "polar"], e.defaultOption = Se(H.defaultOption, {
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
          borderColor: _e.color.primary,
          borderWidth: 2
        }
      },
      realtimeSort: !1
    }), e;
  })(H)
), et = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return a;
  })()
), J = (
  /** @class */
  (function(a) {
    B(e, a);
    function e(r) {
      var t = a.call(this, r) || this;
      return t.type = "sausage", t;
    }
    return e.prototype.getDefaultShape = function() {
      return new et();
    }, e.prototype.buildPath = function(r, t) {
      var n = t.cx, i = t.cy, s = Math.max(t.r0 || 0, 0), l = Math.max(t.r, 0), o = (l - s) * 0.5, u = s + o, c = t.startAngle, h = t.endAngle, d = t.clockwise, g = Math.PI * 2, f = d ? h - c < g : c - h < g;
      f || (c = h - (d ? g : -g));
      var m = Math.cos(c), v = Math.sin(c), b = Math.cos(h), y = Math.sin(h);
      f ? (r.moveTo(m * s + n, v * s + i), r.arc(m * u + n, v * u + i, o, -Math.PI + c, c, !d)) : r.moveTo(m * l + n, v * l + i), r.arc(n, i, l, c, h, !d), r.arc(b * u + n, y * u + i, o, h - Math.PI * 2, h - Math.PI, !d), s !== 0 && r.arc(n, i, s, h, c, d);
    }, e;
  })(oe)
);
function tt(a, e) {
  e = e || {};
  var r = e.isRoundCap;
  return function(t, n, i) {
    var s = n.position;
    if (!s || s instanceof Array)
      return q(t, n, i);
    var l = a(s), o = n.distance != null ? n.distance : 5, u = this.shape, c = u.cx, h = u.cy, d = u.r, g = u.r0, f = (d + g) / 2, m = u.startAngle, v = u.endAngle, b = (m + v) / 2, y = r ? Math.abs(d - g) / 2 : 0, w = Math.cos, S = Math.sin, I = c + d * w(m), C = h + d * S(m), P = "left", D = "top";
    switch (l) {
      case "startArc":
        I = c + (g - o) * w(b), C = h + (g - o) * S(b), P = "center", D = "top";
        break;
      case "insideStartArc":
        I = c + (g + o) * w(b), C = h + (g + o) * S(b), P = "center", D = "bottom";
        break;
      case "startAngle":
        I = c + f * w(m) + E(m, o + y, !1), C = h + f * S(m) + V(m, o + y, !1), P = "right", D = "middle";
        break;
      case "insideStartAngle":
        I = c + f * w(m) + E(m, -o + y, !1), C = h + f * S(m) + V(m, -o + y, !1), P = "left", D = "middle";
        break;
      case "middle":
        I = c + f * w(b), C = h + f * S(b), P = "center", D = "middle";
        break;
      case "endArc":
        I = c + (d + o) * w(b), C = h + (d + o) * S(b), P = "center", D = "bottom";
        break;
      case "insideEndArc":
        I = c + (d - o) * w(b), C = h + (d - o) * S(b), P = "center", D = "top";
        break;
      case "endAngle":
        I = c + f * w(v) + E(v, o + y, !0), C = h + f * S(v) + V(v, o + y, !0), P = "left", D = "middle";
        break;
      case "insideEndAngle":
        I = c + f * w(v) + E(v, -o + y, !0), C = h + f * S(v) + V(v, -o + y, !0), P = "right", D = "middle";
        break;
      default:
        return q(t, n, i);
    }
    return t = t || {}, t.x = I, t.y = C, t.align = P, t.verticalAlign = D, t;
  };
}
function rt(a, e, r, t) {
  if (we(t)) {
    a.setTextConfig({
      rotation: t
    });
    return;
  } else if (le(e)) {
    a.setTextConfig({
      rotation: 0
    });
    return;
  }
  var n = a.shape, i = n.clockwise ? n.startAngle : n.endAngle, s = n.clockwise ? n.endAngle : n.startAngle, l = (i + s) / 2, o, u = r(e);
  switch (u) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      o = l;
      break;
    case "startAngle":
    case "insideStartAngle":
      o = i;
      break;
    case "endAngle":
    case "insideEndAngle":
      o = s;
      break;
    default:
      a.setTextConfig({
        rotation: 0
      });
      return;
  }
  var c = Math.PI * 1.5 - o;
  u === "middle" && c > Math.PI / 2 && c < Math.PI * 1.5 && (c -= Math.PI), a.setTextConfig({
    rotation: c
  });
}
function E(a, e, r) {
  return e * Math.sin(a) * (r ? -1 : 1);
}
function V(a, e, r) {
  return e * Math.cos(a) * (r ? 1 : -1);
}
function at(a, e, r) {
  var t = a.get("borderRadius");
  if (t == null)
    return {
      cornerRadius: 0
    };
  le(t) || (t = [t, t, t, t]);
  var n = Math.abs(e.r || 0 - e.r0 || 0);
  return {
    cornerRadius: ce(t, function(i) {
      return Ie(i, n);
    })
  };
}
var Y = Math.max, X = Math.min, nt = (
  /** @class */
  (function(a) {
    B(e, a);
    function e() {
      var r = a.call(this) || this;
      return r.type = R, r._isFirstFrame = !0, r;
    }
    return e.prototype.render = function(r, t, n, i) {
      this._model = r, this._removeOnRenderedListener(n), this._updateDrawMode(r);
      var s = r.get("coordinateSystem");
      s === "cartesian2d" || s === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(r, t, n) : this._renderNormal(r, t, n, i)) : process.env.NODE_ENV !== "production" && U("Only cartesian2d and polar supported for bar.");
    }, e.prototype.incrementalPrepareRender = function(r) {
      this._clear(), this._updateDrawMode(r), this._updateLargeClip(r);
    }, e.prototype.incrementalRender = function(r, t) {
      this._progressiveEls = [], this._incrementalRenderLarge(r, t);
    }, e.prototype.eachRendered = function(r) {
      Ce(this._progressiveEls || this.group, r);
    }, e.prototype._updateDrawMode = function(r) {
      var t = r.pipelineContext.large;
      (this._isLargeDraw == null || t !== this._isLargeDraw) && (this._isLargeDraw = t, this._clear());
    }, e.prototype._renderNormal = function(r, t, n, i) {
      var s = this.group, l = r.getData(), o = this._data, u = r.coordinateSystem, c = u.getBaseAxis(), h;
      u.type === "cartesian2d" ? h = c.isHorizontal() : u.type === "polar" && (h = c.dim === "angle");
      var d = r.isAnimationEnabled() ? r : null, g = it(r, u);
      g && this._enableRealtimeSort(g, l, n);
      var f = r.get("clip", !0) || g, m = u.getArea();
      s.removeClipPath();
      var v = r.get("roundCap", !0), b = r.get("showBackground", !0), y = r.getModel("backgroundStyle"), w = y.get("borderRadius") || 0, S = [], I = this._backgroundEls, C = i && i.isInitSort, P = i && i.type === "changeAxisOrder";
      function D(p) {
        var k = M[u.type](l, p);
        if (!k)
          return null;
        var x = dt(u, h, k);
        return x.useStyle(y.getItemStyle()), u.type === "cartesian2d" ? x.setShape("r", w) : x.setShape("cornerRadius", w), S[p] = x, x;
      }
      l.diff(o).add(function(p) {
        var k = l.getItemModel(p), x = M[u.type](l, p, k);
        if (x && (b && D(p), !(!l.hasValue(p) || !re[u.type](x)))) {
          var L = !1;
          f && (L = K[u.type](m, x));
          var _ = Q[u.type](r, l, p, x, h, d, c.model, !1, v);
          g && (_.forceLabelAnimation = !0), ae(_, l, p, k, x, r, h, u.type === "polar"), C ? _.attr({
            shape: x
          }) : g ? ee(g, d, _, x, p, h, !1, !1) : T(_, {
            shape: x
          }, r, p), l.setItemGraphicEl(p, _), s.add(_), _.ignore = L;
        }
      }).update(function(p, k) {
        var x = l.getItemModel(p), L = M[u.type](l, p, x);
        if (L) {
          if (b) {
            var _ = void 0;
            I.length === 0 ? _ = D(k) : (_ = I[k], _.useStyle(y.getItemStyle()), u.type === "cartesian2d" ? _.setShape("r", w) : _.setShape("cornerRadius", w), S[p] = _);
            var fe = M[u.type](l, p), ve = pe(h, fe, u);
            O(_, {
              shape: ve
            }, d, p);
          }
          var A = o.getItemGraphicEl(k);
          if (!l.hasValue(p) || !re[u.type](L)) {
            s.remove(A);
            return;
          }
          var G = !1;
          f && (G = K[u.type](m, L), G && s.remove(A));
          var me = A && (A.type === "sector" && v || A.type === "sausage" && !v);
          if (me && (A && z(A, r, k), A = null), A ? Pe(A) : A = Q[u.type](r, l, p, L, h, d, c.model, !0, v), g && (A.forceLabelAnimation = !0), P) {
            var $ = A.getTextContent();
            if ($) {
              var F = De($);
              F.prevValue != null && (F.prevValue = F.value);
            }
          } else
            ae(A, l, p, x, L, r, h, u.type === "polar");
          C ? A.attr({
            shape: L
          }) : g ? ee(g, d, A, L, p, h, !0, P) : O(A, {
            shape: L
          }, r, p, null), l.setItemGraphicEl(p, A), A.ignore = G, s.add(A);
        }
      }).remove(function(p) {
        var k = o.getItemGraphicEl(p);
        k && z(k, r, p);
      }).execute();
      var N = this._backgroundGroup || (this._backgroundGroup = new ke());
      N.removeAll();
      for (var W = 0; W < S.length; ++W)
        N.add(S[W]);
      s.add(N), this._backgroundEls = S, this._data = l;
    }, e.prototype._renderLarge = function(r, t, n) {
      this._clear(), ie(r, this.group), this._updateLargeClip(r);
    }, e.prototype._incrementalRenderLarge = function(r, t) {
      this._removeBackground(), ie(t, this.group, this._progressiveEls, !0);
    }, e.prototype._updateLargeClip = function(r) {
      var t = r.get("clip", !0) && Le(r.coordinateSystem, !1, r), n = this.group;
      t ? n.setClipPath(t) : n.removeClipPath();
    }, e.prototype._enableRealtimeSort = function(r, t, n) {
      var i = this;
      if (t.count()) {
        var s = r.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(t, r, n), this._isFirstFrame = !1;
        else {
          var l = function(o) {
            var u = t.getItemGraphicEl(o), c = u && u.shape;
            return c && // The result should be consistent with the initial sort by data value.
            // Do not support the case that both positive and negative exist.
            Math.abs(s.isHorizontal() ? c.height : c.width) || 0;
          };
          this._onRendered = function() {
            i._updateSortWithinSameData(t, l, s, n);
          }, n.getZr().on("rendered", this._onRendered);
        }
      }
    }, e.prototype._dataSort = function(r, t, n) {
      var i = [];
      return r.each(r.mapDimension(t.dim), function(s, l) {
        var o = n(l);
        o = o ?? NaN, i.push({
          dataIndex: l,
          mappedValue: o,
          ordinalNumber: s
        });
      }), i.sort(function(s, l) {
        return l.mappedValue - s.mappedValue;
      }), {
        ordinalNumbers: ce(i, function(s) {
          return s.ordinalNumber;
        })
      };
    }, e.prototype._isOrderChangedWithinSameData = function(r, t, n) {
      for (var i = n.scale, s = r.mapDimension(n.dim), l = Number.MAX_VALUE, o = 0, u = i.getOrdinalMeta().categories.length; o < u; ++o) {
        var c = r.rawIndexOf(s, i.getRawOrdinalNumber(o)), h = c < 0 ? Number.MIN_VALUE : t(r.indexOfRawIndex(c));
        if (h > l)
          return !0;
        l = h;
      }
      return !1;
    }, e.prototype._isOrderDifferentInView = function(r, t) {
      for (var n = t.scale, i = n.getExtent(), s = Math.max(0, i[0]), l = Math.min(i[1], n.getOrdinalMeta().categories.length - 1); s <= l; ++s)
        if (r.ordinalNumbers[s] !== n.getRawOrdinalNumber(s))
          return !0;
    }, e.prototype._updateSortWithinSameData = function(r, t, n, i) {
      if (this._isOrderChangedWithinSameData(r, t, n)) {
        var s = this._dataSort(r, n, t);
        this._isOrderDifferentInView(s, n) && (this._removeOnRenderedListener(i), i.dispatchAction({
          type: "changeAxisOrder",
          componentType: n.dim + "Axis",
          axisId: n.index,
          sortInfo: s
        }));
      }
    }, e.prototype._dispatchInitSort = function(r, t, n) {
      var i = t.baseAxis, s = this._dataSort(r, i, function(l) {
        return r.get(r.mapDimension(t.otherAxis.dim), l);
      });
      n.dispatchAction({
        type: "changeAxisOrder",
        componentType: i.dim + "Axis",
        isInitSort: !0,
        axisId: i.index,
        sortInfo: s
      });
    }, e.prototype.remove = function(r, t) {
      this._clear(this._model), this._removeOnRenderedListener(t);
    }, e.prototype.dispose = function(r, t) {
      this._removeOnRenderedListener(t);
    }, e.prototype._removeOnRenderedListener = function(r) {
      this._onRendered && (r.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, e.prototype._clear = function(r) {
      var t = this.group, n = this._data;
      r && r.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function(i) {
        z(i, r, j(i).dataIndex);
      })) : t.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, e.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, e.type = R, e;
  })(Re)
), K = {
  cartesian2d: function(a, e) {
    var r = e.width < 0 ? -1 : 1, t = e.height < 0 ? -1 : 1;
    r < 0 && (e.x += e.width, e.width = -e.width), t < 0 && (e.y += e.height, e.height = -e.height);
    var n = a.x + a.width, i = a.y + a.height, s = Y(e.x, a.x), l = X(e.x + e.width, n), o = Y(e.y, a.y), u = X(e.y + e.height, i), c = l < s, h = u < o;
    return e.x = c && s > n ? l : s, e.y = h && o > i ? u : o, e.width = c ? 0 : l - s, e.height = h ? 0 : u - o, r < 0 && (e.x += e.width, e.width = -e.width), t < 0 && (e.y += e.height, e.height = -e.height), c || h;
  },
  polar: function(a, e) {
    var r = e.r0 <= e.r ? 1 : -1;
    if (r < 0) {
      var t = e.r;
      e.r = e.r0, e.r0 = t;
    }
    var n = X(e.r, a.r), i = Y(e.r0, a.r0);
    e.r = n, e.r0 = i;
    var s = n - i < 0;
    if (r < 0) {
      var t = e.r;
      e.r = e.r0, e.r0 = t;
    }
    return s;
  }
}, Q = {
  cartesian2d: function(a, e, r, t, n, i, s, l, o) {
    var u = new he({
      shape: de({}, t),
      z2: 1
    });
    if (u.__dataIndex = r, u.name = "item", i) {
      var c = u.shape, h = n ? "height" : "width";
      c[h] = 0;
    }
    return u;
  },
  polar: function(a, e, r, t, n, i, s, l, o) {
    var u = !n && o ? J : ue, c = new u({
      shape: t,
      z2: 1
    });
    c.name = "item";
    var h = ge(n);
    if (c.calculateTextPosition = tt(h, {
      isRoundCap: u === J
    }), i) {
      var d = c.shape, g = n ? "r" : "endAngle", f = {};
      d[g] = n ? t.r0 : t.startAngle, f[g] = t[g], (l ? O : T)(c, {
        shape: f
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, i);
    }
    return c;
  }
};
function it(a, e) {
  var r = a.get("realtimeSort", !0), t = e.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && r && (t.type !== "category" && U("`realtimeSort` will not work because this bar series is not based on a category axis."), e.type !== "cartesian2d" && U("`realtimeSort` will not work because this bar series is not on cartesian2d.")), r && t.type === "category" && e.type === "cartesian2d")
    return {
      baseAxis: t,
      otherAxis: e.getOtherAxis(t)
    };
}
function ee(a, e, r, t, n, i, s, l) {
  var o, u;
  i ? (u = {
    x: t.x,
    width: t.width
  }, o = {
    y: t.y,
    height: t.height
  }) : (u = {
    y: t.y,
    height: t.height
  }, o = {
    x: t.x,
    width: t.width
  }), l || (s ? O : T)(r, {
    shape: o
  }, e, n, null);
  var c = e ? a.baseAxis.model : null;
  (s ? O : T)(r, {
    shape: u
  }, c, n);
}
function te(a, e) {
  for (var r = 0; r < e.length; r++)
    if (!isFinite(a[e[r]]))
      return !0;
  return !1;
}
var st = ["x", "y", "width", "height"], ot = ["cx", "cy", "r", "startAngle", "endAngle"], re = {
  cartesian2d: function(a) {
    return !te(a, st);
  },
  polar: function(a) {
    return !te(a, ot);
  }
}, M = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(a, e, r) {
    var t = a.getItemLayout(e);
    if (!t)
      return null;
    var n = r ? ct(r, t) : 0, i = t.width > 0 ? 1 : -1, s = t.height > 0 ? 1 : -1;
    return {
      x: t.x + i * n / 2,
      y: t.y + s * n / 2,
      width: t.width - i * n,
      height: t.height - s * n
    };
  },
  polar: function(a, e, r) {
    var t = a.getItemLayout(e);
    return {
      cx: t.cx,
      cy: t.cy,
      r0: t.r0,
      r: t.r,
      startAngle: t.startAngle,
      endAngle: t.endAngle,
      clockwise: t.clockwise
    };
  }
};
function lt(a) {
  return a.startAngle != null && a.endAngle != null && a.startAngle === a.endAngle;
}
function ge(a) {
  return /* @__PURE__ */ (function(e) {
    var r = e ? "Arc" : "Angle";
    return function(t) {
      switch (t) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return t + r;
        default:
          return t;
      }
    };
  })(a);
}
function ae(a, e, r, t, n, i, s, l) {
  var o = e.getItemVisual(r, "style");
  if (l) {
    if (!i.get("roundCap")) {
      var c = a.shape, h = at(t.getModel("itemStyle"), c);
      de(c, h), a.setShape(c);
    }
  } else {
    var u = t.get(["itemStyle", "borderRadius"]) || 0;
    a.setShape("r", u);
  }
  a.useStyle(o);
  var d = t.getShallow("cursor");
  d && a.attr("cursor", d);
  var g = l ? s ? n.r >= n.r0 ? "endArc" : "startArc" : n.endAngle >= n.startAngle ? "endAngle" : "startAngle" : s ? gt(n, i.coordinateSystem) : pt(n, i.coordinateSystem), f = Oe(t);
  Ee(a, f, {
    labelFetcher: i,
    labelDataIndex: r,
    defaultText: Ve(i.getData(), r),
    inheritColor: o.fill,
    defaultOpacity: o.opacity,
    defaultOutsidePosition: g
  });
  var m = a.getTextContent();
  if (l && m) {
    var v = t.get(["label", "position"]);
    a.textConfig.inside = v === "middle" ? !0 : null, rt(a, v === "outside" ? g : v, ge(s), t.get(["label", "rotate"]));
  }
  Me(m, f, i.getRawValue(r), function(y) {
    return Fe(e, y);
  });
  var b = t.getModel(["emphasis"]);
  Te(a, b.get("focus"), b.get("blurScope"), b.get("disabled")), Be(a, t), lt(n) && (a.style.fill = "none", a.style.stroke = "none", Ne(a.states, function(y) {
    y.style && (y.style.fill = y.style.stroke = "none");
  }));
}
function ct(a, e) {
  var r = a.get(["itemStyle", "borderColor"]);
  if (!r || r === "none")
    return 0;
  var t = a.get(["itemStyle", "borderWidth"]) || 0, n = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width), i = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
  return Math.min(t, n, i);
}
var ut = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a() {
    }
    return a;
  })()
), ne = (
  /** @class */
  (function(a) {
    B(e, a);
    function e(r) {
      var t = a.call(this, r) || this;
      return t.type = "largeBar", t;
    }
    return e.prototype.getDefaultShape = function() {
      return new ut();
    }, e.prototype.buildPath = function(r, t) {
      for (var n = t.points, i = this.baseDimIdx, s = 1 - this.baseDimIdx, l = [], o = [], u = this.barWidth, c = 0; c < n.length; c += 3)
        o[i] = u, o[s] = n[c + 2], l[i] = n[c + i], l[s] = n[c + s], r.rect(l[0], l[1], o[0], o[1]);
    }, e;
  })(oe)
);
function ie(a, e, r, t) {
  var n = a.getData(), i = n.getLayout("valueAxisHorizontal") ? 1 : 0, s = n.getLayout("largeDataIndices"), l = n.getLayout("size"), o = a.getModel("backgroundStyle"), u = n.getLayout("largeBackgroundPoints"), c = t ? We(a) : 0;
  if (u) {
    var h = new ne({
      shape: {
        points: u
      },
      incremental: c,
      silent: !0,
      z2: 0
    });
    h.baseDimIdx = i, h.largeDataIndices = s, h.barWidth = l, h.useStyle(o.getItemStyle()), e.add(h), r && r.push(h);
  }
  var d = new ne({
    shape: {
      points: n.getLayout("largePoints")
    },
    incremental: c,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  d.baseDimIdx = i, d.largeDataIndices = s, d.barWidth = l, e.add(d), d.useStyle(n.getVisual("style")), d.style.stroke = null, j(d).seriesIndex = a.seriesIndex, a.get("silent") || (d.on("mousedown", se), d.on("mousemove", se)), r && r.push(d);
}
var se = Ge(function(a) {
  var e = this, r = ht(e, a.offsetX, a.offsetY);
  j(e).dataIndex = r >= 0 ? r : null;
}, 30, !1);
function ht(a, e, r) {
  for (var t = a.baseDimIdx, n = 1 - t, i = a.shape.points, s = a.largeDataIndices, l = [], o = [], u = a.barWidth, c = 0, h = i.length / 3; c < h; c++) {
    var d = c * 3;
    if (o[t] = u, o[n] = i[d + 2], l[t] = i[d + t], l[n] = i[d + n], o[n] < 0 && (l[n] += o[n], o[n] = -o[n]), e >= l[0] && e <= l[0] + o[0] && r >= l[1] && r <= l[1] + o[1])
      return s[c];
  }
  return -1;
}
function pe(a, e, r) {
  if (Je(r, "cartesian2d")) {
    var t = e, n = r.getArea();
    return {
      x: a ? t.x : n.x,
      y: a ? n.y : t.y,
      width: a ? t.width : n.width,
      height: a ? n.height : t.height
    };
  } else {
    var n = r.getArea(), i = e;
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
function dt(a, e, r) {
  var t = a.type === "polar" ? ue : he;
  return new t({
    shape: pe(e, r, a),
    silent: !0,
    z2: 0
  });
}
function gt(a, e) {
  if (a.height === 0) {
    var r = e.getOtherAxis(e.getBaseAxis());
    return r.inverse ? "bottom" : "top";
  }
  return a.height > 0 ? "bottom" : "top";
}
function pt(a, e) {
  if (a.width === 0) {
    var r = e.getOtherAxis(e.getBaseAxis());
    return r.inverse ? "left" : "right";
  }
  return a.width >= 0 ? "right" : "left";
}
function ft(a) {
  a.registerChartView(nt), a.registerSeriesModel(Qe), a.registerLayout(a.PRIORITY.VISUAL.LAYOUT, Ze(R)), a.registerLayout(a.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, qe(R)), a.registerProcessor(a.PRIORITY.PROCESSOR.STATISTIC, Ke(R)), a.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(e, r) {
    var t = e.componentType || "series";
    r.eachComponent({
      mainType: t,
      query: e
    }, function(n) {
      e.sortInfo && n.axis.setCategorySortInfo(e.sortInfo);
    });
  }), He(a);
}
function vt(a) {
  if (typeof a != "object" || a === null || !("categories" in a) || !("series" in a) || !("orientation" in a) || !("valueMode" in a))
    return !1;
  const e = a.categories, r = a.series;
  return !Array.isArray(e) || !e.every((t) => typeof t == "string") || a.orientation !== "horizontal" && a.orientation !== "vertical" || a.valueMode !== "percentage" && a.valueMode !== "value" ? !1 : Array.isArray(r) && r.every((t) => typeof t != "object" || t === null || !("key" in t) || typeof t.key != "string" || !("label" in t) || typeof t.label != "string" || !("values" in t) || !Array.isArray(t.values) || !("stack" in t) || t.stack !== null && typeof t.stack != "string" ? !1 : t.values.every((n) => typeof n == "number" || n === null) && t.values.length === e.length);
}
function mt(a) {
  return a.map((e) => ({
    type: "bar",
    id: e.key,
    name: e.label,
    data: e.values,
    stack: e.stack ?? void 0,
    emphasis: { focus: "series" }
  }));
}
function yt(a) {
  return {
    horizontal: a.orientation === "horizontal",
    maximum: a.valueMode === "percentage" ? 100 : void 0,
    formatter: a.valueMode === "percentage" ? "{value}%" : void 0
  };
}
Ye([ft, Xe, Ue, je, $e]);
class At {
  constructor(e) {
    Z(this, "chart");
    this.chart = ze(e, void 0, { renderer: "canvas" });
  }
  render(e) {
    if (!vt(e))
      throw new Error("The bar graph data is invalid.");
    const r = getComputedStyle(document.documentElement), t = r.getPropertyValue("--bs-body-color").trim() || "#212529", n = r.getPropertyValue("--cms-border").trim() || "#dee2e6", i = r.getPropertyValue("--cms-surface").trim() || "#ffffff", s = yt(e), l = {
      type: "category",
      data: e.categories,
      axisLabel: { color: t },
      axisLine: { lineStyle: { color: n } }
    }, o = {
      type: "value",
      max: s.maximum,
      axisLabel: { color: t, formatter: s.formatter },
      splitLine: { lineStyle: { color: n } }
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
        textStyle: { color: t }
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: i,
        borderColor: n,
        textStyle: { color: t }
      },
      xAxis: s.horizontal ? o : l,
      yAxis: s.horizontal ? l : o,
      series: mt(e.series)
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
const wt = (a) => new At(a);
export {
  wt as createBarGraphRenderer
};
