import { S as R, B as q, c as me, a as Ae, r as be } from "./BaseBarSeries-DYc5uKGI.js";
import { i as Se, d as ye } from "./dataSample-BudHJdDG.js";
import { _ as M, e as _e, p as xe, f as we, t as Ie, P as se, g as H, h as De, j as oe, m as he, k as Pe, w as z, l as Ce, n as B, o as O, r as Y, s as Le, q as ke, G as Re, v as Oe, x as j, C as Ee, S as ce, R as le, y as ue, z as Ve, A as Te, B as Be, D as Me, E as Ne, F as We, H as Fe, I as Ge, J as Ye, K as Xe } from "./installCanvasRenderer-nrYOY0X5.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var Ue = (
  /** @class */
  (function(n) {
    M(r, n);
    function r() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = r.type, e;
    }
    return r.prototype.getInitialData = function() {
      return _e(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, r.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, r.prototype.__preparePipelineContext = function(e, t) {
      var a = xe(this, e, t);
      return a.progressiveRender && (a.large = !0), a;
    }, r.prototype.brushSelector = function(e, t, a) {
      return a.rect(t.getItemLayout(e));
    }, r.type = "series." + R, r.dependencies = ["grid", "polar"], r.defaultOption = we(q.defaultOption, {
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
          borderColor: Ie.color.primary,
          borderWidth: 2
        }
      },
      realtimeSort: !1
    }), r;
  })(q)
), ze = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return n;
  })()
), J = (
  /** @class */
  (function(n) {
    M(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return t.type = "sausage", t;
    }
    return r.prototype.getDefaultShape = function() {
      return new ze();
    }, r.prototype.buildPath = function(e, t) {
      var a = t.cx, i = t.cy, s = Math.max(t.r0 || 0, 0), h = Math.max(t.r, 0), o = (h - s) * 0.5, l = s + o, c = t.startAngle, u = t.endAngle, d = t.clockwise, g = Math.PI * 2, v = d ? u - c < g : c - u < g;
      v || (c = u - (d ? g : -g));
      var m = Math.cos(c), f = Math.sin(c), S = Math.cos(u), A = Math.sin(u);
      v ? (e.moveTo(m * s + a, f * s + i), e.arc(m * l + a, f * l + i, o, -Math.PI + c, c, !d)) : e.moveTo(m * h + a, f * h + i), e.arc(a, i, h, c, u, !d), e.arc(S * l + a, A * l + i, o, u - Math.PI * 2, u - Math.PI, !d), s !== 0 && e.arc(a, i, s, u, c, d);
    }, r;
  })(se)
);
function je(n, r) {
  r = r || {};
  var e = r.isRoundCap;
  return function(t, a, i) {
    var s = a.position;
    if (!s || s instanceof Array)
      return H(t, a, i);
    var h = n(s), o = a.distance != null ? a.distance : 5, l = this.shape, c = l.cx, u = l.cy, d = l.r, g = l.r0, v = (d + g) / 2, m = l.startAngle, f = l.endAngle, S = (m + f) / 2, A = e ? Math.abs(d - g) / 2 : 0, w = Math.cos, _ = Math.sin, I = c + d * w(m), D = u + d * _(m), P = "left", C = "top";
    switch (h) {
      case "startArc":
        I = c + (g - o) * w(S), D = u + (g - o) * _(S), P = "center", C = "top";
        break;
      case "insideStartArc":
        I = c + (g + o) * w(S), D = u + (g + o) * _(S), P = "center", C = "bottom";
        break;
      case "startAngle":
        I = c + v * w(m) + E(m, o + A, !1), D = u + v * _(m) + V(m, o + A, !1), P = "right", C = "middle";
        break;
      case "insideStartAngle":
        I = c + v * w(m) + E(m, -o + A, !1), D = u + v * _(m) + V(m, -o + A, !1), P = "left", C = "middle";
        break;
      case "middle":
        I = c + v * w(S), D = u + v * _(S), P = "center", C = "middle";
        break;
      case "endArc":
        I = c + (d + o) * w(S), D = u + (d + o) * _(S), P = "center", C = "bottom";
        break;
      case "insideEndArc":
        I = c + (d - o) * w(S), D = u + (d - o) * _(S), P = "center", C = "top";
        break;
      case "endAngle":
        I = c + v * w(f) + E(f, o + A, !0), D = u + v * _(f) + V(f, o + A, !0), P = "left", C = "middle";
        break;
      case "insideEndAngle":
        I = c + v * w(f) + E(f, -o + A, !0), D = u + v * _(f) + V(f, -o + A, !0), P = "right", C = "middle";
        break;
      default:
        return H(t, a, i);
    }
    return t = t || {}, t.x = I, t.y = D, t.align = P, t.verticalAlign = C, t;
  };
}
function Ze(n, r, e, t) {
  if (De(t)) {
    n.setTextConfig({
      rotation: t
    });
    return;
  } else if (oe(r)) {
    n.setTextConfig({
      rotation: 0
    });
    return;
  }
  var a = n.shape, i = a.clockwise ? a.startAngle : a.endAngle, s = a.clockwise ? a.endAngle : a.startAngle, h = (i + s) / 2, o, l = e(r);
  switch (l) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      o = h;
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
      n.setTextConfig({
        rotation: 0
      });
      return;
  }
  var c = Math.PI * 1.5 - o;
  l === "middle" && c > Math.PI / 2 && c < Math.PI * 1.5 && (c -= Math.PI), n.setTextConfig({
    rotation: c
  });
}
function E(n, r, e) {
  return r * Math.sin(n) * (e ? -1 : 1);
}
function V(n, r, e) {
  return r * Math.cos(n) * (e ? 1 : -1);
}
function qe(n, r, e) {
  var t = n.get("borderRadius");
  if (t == null)
    return {
      cornerRadius: 0
    };
  oe(t) || (t = [t, t, t, t]);
  var a = Math.abs(r.r || 0 - r.r0 || 0);
  return {
    cornerRadius: he(t, function(i) {
      return Pe(i, a);
    })
  };
}
var X = Math.max, U = Math.min, He = (
  /** @class */
  (function(n) {
    M(r, n);
    function r() {
      var e = n.call(this) || this;
      return e.type = R, e._isFirstFrame = !0, e;
    }
    return r.prototype.render = function(e, t, a, i) {
      this._model = e, this._removeOnRenderedListener(a), this._updateDrawMode(e);
      var s = e.get("coordinateSystem");
      s === "cartesian2d" || s === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, t, a) : this._renderNormal(e, t, a, i)) : process.env.NODE_ENV !== "production" && z("Only cartesian2d and polar supported for bar.");
    }, r.prototype.incrementalPrepareRender = function(e) {
      this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
    }, r.prototype.incrementalRender = function(e, t) {
      this._progressiveEls = [], this._incrementalRenderLarge(e, t);
    }, r.prototype.eachRendered = function(e) {
      Ce(this._progressiveEls || this.group, e);
    }, r.prototype._updateDrawMode = function(e) {
      var t = e.pipelineContext.large;
      (this._isLargeDraw == null || t !== this._isLargeDraw) && (this._isLargeDraw = t, this._clear());
    }, r.prototype._renderNormal = function(e, t, a, i) {
      var s = this.group, h = e.getData(), o = this._data, l = e.coordinateSystem, c = l.getBaseAxis(), u;
      l.type === "cartesian2d" ? u = c.isHorizontal() : l.type === "polar" && (u = c.dim === "angle");
      var d = e.isAnimationEnabled() ? e : null, g = Je(e, l);
      g && this._enableRealtimeSort(g, h, a);
      var v = e.get("clip", !0) || g, m = l.getArea();
      s.removeClipPath();
      var f = e.get("roundCap", !0), S = e.get("showBackground", !0), A = e.getModel("backgroundStyle"), w = A.get("borderRadius") || 0, _ = [], I = this._backgroundEls, D = i && i.isInitSort, P = i && i.type === "changeAxisOrder";
      function C(p) {
        var L = T[l.type](h, p);
        if (!L)
          return null;
        var y = at(l, u, L);
        return y.useStyle(A.getItemStyle()), l.type === "cartesian2d" ? y.setShape("r", w) : y.setShape("cornerRadius", w), _[p] = y, y;
      }
      h.diff(o).add(function(p) {
        var L = h.getItemModel(p), y = T[l.type](h, p, L);
        if (y && (S && C(p), !(!h.hasValue(p) || !te[l.type](y)))) {
          var k = !1;
          v && (k = K[l.type](m, y));
          var x = Q[l.type](e, h, p, y, u, d, c.model, !1, f);
          g && (x.forceLabelAnimation = !0), re(x, h, p, L, y, e, u, l.type === "polar"), D ? x.attr({
            shape: y
          }) : g ? $(g, d, x, y, p, u, !1, !1) : B(x, {
            shape: y
          }, e, p), h.setItemGraphicEl(p, x), s.add(x), x.ignore = k;
        }
      }).update(function(p, L) {
        var y = h.getItemModel(p), k = T[l.type](h, p, y);
        if (k) {
          if (S) {
            var x = void 0;
            I.length === 0 ? x = C(L) : (x = I[L], x.useStyle(A.getItemStyle()), l.type === "cartesian2d" ? x.setShape("r", w) : x.setShape("cornerRadius", w), _[p] = x);
            var pe = T[l.type](h, p), ve = ge(u, pe, l);
            O(x, {
              shape: ve
            }, d, p);
          }
          var b = o.getItemGraphicEl(L);
          if (!h.hasValue(p) || !te[l.type](k)) {
            s.remove(b);
            return;
          }
          var F = !1;
          v && (F = K[l.type](m, k), F && s.remove(b));
          var fe = b && (b.type === "sector" && f || b.type === "sausage" && !f);
          if (fe && (b && Y(b, e, L), b = null), b ? Le(b) : b = Q[l.type](e, h, p, k, u, d, c.model, !0, f), g && (b.forceLabelAnimation = !0), P) {
            var Z = b.getTextContent();
            if (Z) {
              var G = ke(Z);
              G.prevValue != null && (G.prevValue = G.value);
            }
          } else
            re(b, h, p, y, k, e, u, l.type === "polar");
          D ? b.attr({
            shape: k
          }) : g ? $(g, d, b, k, p, u, !0, P) : O(b, {
            shape: k
          }, e, p, null), h.setItemGraphicEl(p, b), b.ignore = F, s.add(b);
        }
      }).remove(function(p) {
        var L = o.getItemGraphicEl(p);
        L && Y(L, e, p);
      }).execute();
      var N = this._backgroundGroup || (this._backgroundGroup = new Re());
      N.removeAll();
      for (var W = 0; W < _.length; ++W)
        N.add(_[W]);
      s.add(N), this._backgroundEls = _, this._data = h;
    }, r.prototype._renderLarge = function(e, t, a) {
      this._clear(), ne(e, this.group), this._updateLargeClip(e);
    }, r.prototype._incrementalRenderLarge = function(e, t) {
      this._removeBackground(), ne(t, this.group, this._progressiveEls, !0);
    }, r.prototype._updateLargeClip = function(e) {
      var t = e.get("clip", !0) && Oe(e.coordinateSystem, !1, e), a = this.group;
      t ? a.setClipPath(t) : a.removeClipPath();
    }, r.prototype._enableRealtimeSort = function(e, t, a) {
      var i = this;
      if (t.count()) {
        var s = e.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(t, e, a), this._isFirstFrame = !1;
        else {
          var h = function(o) {
            var l = t.getItemGraphicEl(o), c = l && l.shape;
            return c && // The result should be consistent with the initial sort by data value.
            // Do not support the case that both positive and negative exist.
            Math.abs(s.isHorizontal() ? c.height : c.width) || 0;
          };
          this._onRendered = function() {
            i._updateSortWithinSameData(t, h, s, a);
          }, a.getZr().on("rendered", this._onRendered);
        }
      }
    }, r.prototype._dataSort = function(e, t, a) {
      var i = [];
      return e.each(e.mapDimension(t.dim), function(s, h) {
        var o = a(h);
        o = o ?? NaN, i.push({
          dataIndex: h,
          mappedValue: o,
          ordinalNumber: s
        });
      }), i.sort(function(s, h) {
        return h.mappedValue - s.mappedValue;
      }), {
        ordinalNumbers: he(i, function(s) {
          return s.ordinalNumber;
        })
      };
    }, r.prototype._isOrderChangedWithinSameData = function(e, t, a) {
      for (var i = a.scale, s = e.mapDimension(a.dim), h = Number.MAX_VALUE, o = 0, l = i.getOrdinalMeta().categories.length; o < l; ++o) {
        var c = e.rawIndexOf(s, i.getRawOrdinalNumber(o)), u = c < 0 ? Number.MIN_VALUE : t(e.indexOfRawIndex(c));
        if (u > h)
          return !0;
        h = u;
      }
      return !1;
    }, r.prototype._isOrderDifferentInView = function(e, t) {
      for (var a = t.scale, i = a.getExtent(), s = Math.max(0, i[0]), h = Math.min(i[1], a.getOrdinalMeta().categories.length - 1); s <= h; ++s)
        if (e.ordinalNumbers[s] !== a.getRawOrdinalNumber(s))
          return !0;
    }, r.prototype._updateSortWithinSameData = function(e, t, a, i) {
      if (this._isOrderChangedWithinSameData(e, t, a)) {
        var s = this._dataSort(e, a, t);
        this._isOrderDifferentInView(s, a) && (this._removeOnRenderedListener(i), i.dispatchAction({
          type: "changeAxisOrder",
          componentType: a.dim + "Axis",
          axisId: a.index,
          sortInfo: s
        }));
      }
    }, r.prototype._dispatchInitSort = function(e, t, a) {
      var i = t.baseAxis, s = this._dataSort(e, i, function(h) {
        return e.get(e.mapDimension(t.otherAxis.dim), h);
      });
      a.dispatchAction({
        type: "changeAxisOrder",
        componentType: i.dim + "Axis",
        isInitSort: !0,
        axisId: i.index,
        sortInfo: s
      });
    }, r.prototype.remove = function(e, t) {
      this._clear(this._model), this._removeOnRenderedListener(t);
    }, r.prototype.dispose = function(e, t) {
      this._removeOnRenderedListener(t);
    }, r.prototype._removeOnRenderedListener = function(e) {
      this._onRendered && (e.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, r.prototype._clear = function(e) {
      var t = this.group, a = this._data;
      e && e.isAnimationEnabled() && a && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], a.eachItemGraphicEl(function(i) {
        Y(i, e, j(i).dataIndex);
      })) : t.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, r.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, r.type = R, r;
  })(Ee)
), K = {
  cartesian2d: function(n, r) {
    var e = r.width < 0 ? -1 : 1, t = r.height < 0 ? -1 : 1;
    e < 0 && (r.x += r.width, r.width = -r.width), t < 0 && (r.y += r.height, r.height = -r.height);
    var a = n.x + n.width, i = n.y + n.height, s = X(r.x, n.x), h = U(r.x + r.width, a), o = X(r.y, n.y), l = U(r.y + r.height, i), c = h < s, u = l < o;
    return r.x = c && s > a ? h : s, r.y = u && o > i ? l : o, r.width = c ? 0 : h - s, r.height = u ? 0 : l - o, e < 0 && (r.x += r.width, r.width = -r.width), t < 0 && (r.y += r.height, r.height = -r.height), c || u;
  },
  polar: function(n, r) {
    var e = r.r0 <= r.r ? 1 : -1;
    if (e < 0) {
      var t = r.r;
      r.r = r.r0, r.r0 = t;
    }
    var a = U(r.r, n.r), i = X(r.r0, n.r0);
    r.r = a, r.r0 = i;
    var s = a - i < 0;
    if (e < 0) {
      var t = r.r;
      r.r = r.r0, r.r0 = t;
    }
    return s;
  }
}, Q = {
  cartesian2d: function(n, r, e, t, a, i, s, h, o) {
    var l = new le({
      shape: ue({}, t),
      z2: 1
    });
    if (l.__dataIndex = e, l.name = "item", i) {
      var c = l.shape, u = a ? "height" : "width";
      c[u] = 0;
    }
    return l;
  },
  polar: function(n, r, e, t, a, i, s, h, o) {
    var l = !a && o ? J : ce, c = new l({
      shape: t,
      z2: 1
    });
    c.name = "item";
    var u = de(a);
    if (c.calculateTextPosition = je(u, {
      isRoundCap: l === J
    }), i) {
      var d = c.shape, g = a ? "r" : "endAngle", v = {};
      d[g] = a ? t.r0 : t.startAngle, v[g] = t[g], (h ? O : B)(c, {
        shape: v
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, i);
    }
    return c;
  }
};
function Je(n, r) {
  var e = n.get("realtimeSort", !0), t = r.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && e && (t.type !== "category" && z("`realtimeSort` will not work because this bar series is not based on a category axis."), r.type !== "cartesian2d" && z("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && t.type === "category" && r.type === "cartesian2d")
    return {
      baseAxis: t,
      otherAxis: r.getOtherAxis(t)
    };
}
function $(n, r, e, t, a, i, s, h) {
  var o, l;
  i ? (l = {
    x: t.x,
    width: t.width
  }, o = {
    y: t.y,
    height: t.height
  }) : (l = {
    y: t.y,
    height: t.height
  }, o = {
    x: t.x,
    width: t.width
  }), h || (s ? O : B)(e, {
    shape: o
  }, r, a, null);
  var c = r ? n.baseAxis.model : null;
  (s ? O : B)(e, {
    shape: l
  }, c, a);
}
function ee(n, r) {
  for (var e = 0; e < r.length; e++)
    if (!isFinite(n[r[e]]))
      return !0;
  return !1;
}
var Ke = ["x", "y", "width", "height"], Qe = ["cx", "cy", "r", "startAngle", "endAngle"], te = {
  cartesian2d: function(n) {
    return !ee(n, Ke);
  },
  polar: function(n) {
    return !ee(n, Qe);
  }
}, T = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(n, r, e) {
    var t = n.getItemLayout(r);
    if (!t)
      return null;
    var a = e ? et(e, t) : 0, i = t.width > 0 ? 1 : -1, s = t.height > 0 ? 1 : -1;
    return {
      x: t.x + i * a / 2,
      y: t.y + s * a / 2,
      width: t.width - i * a,
      height: t.height - s * a
    };
  },
  polar: function(n, r, e) {
    var t = n.getItemLayout(r);
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
function $e(n) {
  return n.startAngle != null && n.endAngle != null && n.startAngle === n.endAngle;
}
function de(n) {
  return /* @__PURE__ */ (function(r) {
    var e = r ? "Arc" : "Angle";
    return function(t) {
      switch (t) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return t + e;
        default:
          return t;
      }
    };
  })(n);
}
function re(n, r, e, t, a, i, s, h) {
  var o = r.getItemVisual(e, "style");
  if (h) {
    if (!i.get("roundCap")) {
      var c = n.shape, u = qe(t.getModel("itemStyle"), c);
      ue(c, u), n.setShape(c);
    }
  } else {
    var l = t.get(["itemStyle", "borderRadius"]) || 0;
    n.setShape("r", l);
  }
  n.useStyle(o);
  var d = t.getShallow("cursor");
  d && n.attr("cursor", d);
  var g = h ? s ? a.r >= a.r0 ? "endArc" : "startArc" : a.endAngle >= a.startAngle ? "endAngle" : "startAngle" : s ? nt(a, i.coordinateSystem) : it(a, i.coordinateSystem), v = Ve(t);
  Te(n, v, {
    labelFetcher: i,
    labelDataIndex: e,
    defaultText: Be(i.getData(), e),
    inheritColor: o.fill,
    defaultOpacity: o.opacity,
    defaultOutsidePosition: g
  });
  var m = n.getTextContent();
  if (h && m) {
    var f = t.get(["label", "position"]);
    n.textConfig.inside = f === "middle" ? !0 : null, Ze(n, f === "outside" ? g : f, de(s), t.get(["label", "rotate"]));
  }
  Me(m, v, i.getRawValue(e), function(A) {
    return Xe(r, A);
  });
  var S = t.getModel(["emphasis"]);
  Ne(n, S.get("focus"), S.get("blurScope"), S.get("disabled")), We(n, t), $e(a) && (n.style.fill = "none", n.style.stroke = "none", Fe(n.states, function(A) {
    A.style && (A.style.fill = A.style.stroke = "none");
  }));
}
function et(n, r) {
  var e = n.get(["itemStyle", "borderColor"]);
  if (!e || e === "none")
    return 0;
  var t = n.get(["itemStyle", "borderWidth"]) || 0, a = isNaN(r.width) ? Number.MAX_VALUE : Math.abs(r.width), i = isNaN(r.height) ? Number.MAX_VALUE : Math.abs(r.height);
  return Math.min(t, a, i);
}
var tt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n() {
    }
    return n;
  })()
), ae = (
  /** @class */
  (function(n) {
    M(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return t.type = "largeBar", t;
    }
    return r.prototype.getDefaultShape = function() {
      return new tt();
    }, r.prototype.buildPath = function(e, t) {
      for (var a = t.points, i = this.baseDimIdx, s = 1 - this.baseDimIdx, h = [], o = [], l = this.barWidth, c = 0; c < a.length; c += 3)
        o[i] = l, o[s] = a[c + 2], h[i] = a[c + i], h[s] = a[c + s], e.rect(h[0], h[1], o[0], o[1]);
    }, r;
  })(se)
);
function ne(n, r, e, t) {
  var a = n.getData(), i = a.getLayout("valueAxisHorizontal") ? 1 : 0, s = a.getLayout("largeDataIndices"), h = a.getLayout("size"), o = n.getModel("backgroundStyle"), l = a.getLayout("largeBackgroundPoints"), c = t ? Ge(n) : 0;
  if (l) {
    var u = new ae({
      shape: {
        points: l
      },
      incremental: c,
      silent: !0,
      z2: 0
    });
    u.baseDimIdx = i, u.largeDataIndices = s, u.barWidth = h, u.useStyle(o.getItemStyle()), r.add(u), e && e.push(u);
  }
  var d = new ae({
    shape: {
      points: a.getLayout("largePoints")
    },
    incremental: c,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  d.baseDimIdx = i, d.largeDataIndices = s, d.barWidth = h, r.add(d), d.useStyle(a.getVisual("style")), d.style.stroke = null, j(d).seriesIndex = n.seriesIndex, n.get("silent") || (d.on("mousedown", ie), d.on("mousemove", ie)), e && e.push(d);
}
var ie = Ye(function(n) {
  var r = this, e = rt(r, n.offsetX, n.offsetY);
  j(r).dataIndex = e >= 0 ? e : null;
}, 30, !1);
function rt(n, r, e) {
  for (var t = n.baseDimIdx, a = 1 - t, i = n.shape.points, s = n.largeDataIndices, h = [], o = [], l = n.barWidth, c = 0, u = i.length / 3; c < u; c++) {
    var d = c * 3;
    if (o[t] = l, o[a] = i[d + 2], h[t] = i[d + t], h[a] = i[d + a], o[a] < 0 && (h[a] += o[a], o[a] = -o[a]), r >= h[0] && r <= h[0] + o[0] && e >= h[1] && e <= h[1] + o[1])
      return s[c];
  }
  return -1;
}
function ge(n, r, e) {
  if (Se(e, "cartesian2d")) {
    var t = r, a = e.getArea();
    return {
      x: n ? t.x : a.x,
      y: n ? a.y : t.y,
      width: n ? t.width : a.width,
      height: n ? a.height : t.height
    };
  } else {
    var a = e.getArea(), i = r;
    return {
      cx: a.cx,
      cy: a.cy,
      r0: n ? a.r0 : i.r0,
      r: n ? a.r : i.r,
      startAngle: n ? i.startAngle : 0,
      endAngle: n ? i.endAngle : Math.PI * 2
    };
  }
}
function at(n, r, e) {
  var t = n.type === "polar" ? ce : le;
  return new t({
    shape: ge(r, e, n),
    silent: !0,
    z2: 0
  });
}
function nt(n, r) {
  if (n.height === 0) {
    var e = r.getOtherAxis(r.getBaseAxis());
    return e.inverse ? "bottom" : "top";
  }
  return n.height > 0 ? "bottom" : "top";
}
function it(n, r) {
  if (n.width === 0) {
    var e = r.getOtherAxis(r.getBaseAxis());
    return e.inverse ? "left" : "right";
  }
  return n.width >= 0 ? "right" : "left";
}
function ct(n) {
  n.registerChartView(He), n.registerSeriesModel(Ue), n.registerLayout(n.PRIORITY.VISUAL.LAYOUT, me(R)), n.registerLayout(n.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, Ae(R)), n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC, ye(R)), n.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(r, e) {
    var t = r.componentType || "series";
    e.eachComponent({
      mainType: t,
      query: r
    }, function(a) {
      r.sortInfo && a.axis.setCategorySortInfo(r.sortInfo);
    });
  }), be(n);
}
export {
  ct as i
};
