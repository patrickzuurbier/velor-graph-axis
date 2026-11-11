var $t = Object.defineProperty;
var jt = (o, e, t) => e in o ? $t(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var vt = (o, e, t) => jt(o, typeof e != "symbol" ? e + "" : e, t);
import { _ as j, c as qt, G as tt, L as it, t as Ct, M as Jt, N as Qt, O as Kt, Q as Yt, u as Y, s as xt, g as Vt, n as st, T as te, Z as ee, k as ht, o as Nt, x as nt, j as K, U as ct, V as ae, q as Gt, f as re, W as ie, X as ne, m as lt, Y as x, b as zt, $, a0 as oe, a1 as ft, P as Rt, a2 as gt, a3 as se, a4 as pt, a5 as mt, y as yt, a6 as bt, C as et, a7 as dt, a8 as at, a9 as le, aa as ue, l as ve, z as Ft, ab as he, ac as ce, ad as fe, ae as ge, af as St, ag as _t, ah as pe, ai as Dt, D as me, aj as ye, E as be, F as de, H as Se, I as _e, J as De, K as Ee } from "./installCanvasRenderer-C92rs6a1.js";
import { i as Ae, d as Pe } from "./dataSample-D3lKG9P-.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var Ie = (
  /** @class */
  (function(o) {
    j(e, o);
    function e() {
      var t = o !== null && o.apply(this, arguments) || this;
      return t.type = e.type, t.hasSymbolVisual = !0, t;
    }
    return e.prototype.getInitialData = function(t) {
      if (process.env.NODE_ENV !== "production") {
        var a = t.coordinateSystem;
        if (a !== "polar" && a !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return qt(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getLegendIcon = function(t) {
      var a = new tt(), n = it("line", 0, t.itemHeight / 2, t.itemWidth, 0, t.lineStyle.stroke, !1);
      a.add(n), n.setStyle(t.lineStyle);
      var r = this.getData().getVisual("symbol"), i = this.getData().getVisual("symbolRotate"), s = r === "none" ? "circle" : r, u = t.itemHeight * 0.8, l = it(s, (t.itemWidth - u) / 2, (t.itemHeight - u) / 2, u, u, t.itemStyle.fill);
      a.add(l), l.setStyle(t.itemStyle);
      var h = t.iconRotate === "inherit" ? i : t.iconRotate || 0;
      return l.rotation = h * Math.PI / 180, l.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), s.indexOf("empty") > -1 && (l.style.stroke = l.style.fill, l.style.fill = Ct.color.neutral00, l.style.lineWidth = 2), a;
    }, e.type = "series.line", e.dependencies = ["grid", "polar"], e.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: !1,
        valueAnimation: !0,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: !0
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: !1,
      // Disabled if step is true
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 6,
      symbolRotate: null,
      showSymbol: !0,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point. (non-finite values)
      connectNulls: !1,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: {
        divideShape: "clone"
      },
      /**
       * @deprecated
       */
      triggerLineEvent: !1,
      triggerEvent: !1
    }, e;
  })(Jt)
), ut = (
  /** @class */
  (function(o) {
    j(e, o);
    function e(t, a, n, r) {
      var i = o.call(this) || this;
      return i.updateData(t, a, n, r), i;
    }
    return e.prototype._createSymbol = function(t, a, n, r, i, s) {
      this.removeAll();
      var u = it(t, -1, -1, 2, 2, null, s);
      u.attr({
        z2: Qt(i, 100),
        culling: !0,
        scaleX: r[0] / 2,
        scaleY: r[1] / 2
      }), u.drift = Le, this._symbolType = t, this.add(u);
    }, e.prototype.stopSymbolAnimation = function(t) {
      this.childAt(0).stopAnimation(null, t);
    }, e.prototype.getSymbolType = function() {
      return this._symbolType;
    }, e.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, e.prototype.highlight = function() {
      Kt(this.childAt(0));
    }, e.prototype.downplay = function() {
      Yt(this.childAt(0));
    }, e.prototype.setZ = function(t, a) {
      var n = this.childAt(0);
      n.zlevel = t, n.z = a;
    }, e.prototype.setDraggable = function(t, a) {
      var n = this.childAt(0);
      n.draggable = t, n.cursor = !a && t ? "move" : n.cursor;
    }, e.prototype.updateData = function(t, a, n, r) {
      this.silent = !1;
      var i = t.getItemVisual(a, "symbol") || "circle", s = t.hostModel, u = e.getSymbolSize(t, a), l = e.getSymbolZ2(t, a), h = i !== this._symbolType, v = r && r.disableAnimation;
      if (h) {
        var f = t.getItemVisual(a, "symbolKeepAspect");
        this._createSymbol(i, t, a, u, l, f);
      } else {
        var c = this.childAt(0);
        c.silent = !1;
        var g = {
          scaleX: u[0] / 2,
          scaleY: u[1] / 2
        };
        v ? c.attr(g) : Y(c, g, s, a), xt(c);
      }
      if (this._updateCommon(t, a, u, n, r), h) {
        var c = this.childAt(0);
        if (!v) {
          var g = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: c.style.opacity
            }
          };
          c.scaleX = c.scaleY = 0, c.style.opacity = 0, Vt(c, g, s, a);
        }
      }
      v && this.childAt(0).stopAnimation("leave");
    }, e.prototype._updateCommon = function(t, a, n, r, i) {
      var s = this.childAt(0), u = t.hostModel, l, h, v, f, c, g, p, d, m;
      if (r && (l = r.emphasisItemStyle, h = r.blurItemStyle, v = r.selectItemStyle, f = r.focus, c = r.blurScope, p = r.labelStatesModels, d = r.hoverScale, m = r.cursorStyle, g = r.emphasisDisabled), !r || t.hasItemOption) {
        var y = r && r.itemModel ? r.itemModel : t.getItemModel(a), b = y.getModel("emphasis");
        l = b.getModel("itemStyle").getItemStyle(), v = y.getModel(["select", "itemStyle"]).getItemStyle(), h = y.getModel(["blur", "itemStyle"]).getItemStyle(), f = b.get("focus"), c = b.get("blurScope"), g = b.get("disabled"), p = st(y), d = b.getShallow("scale"), m = y.getShallow("cursor");
      }
      var E = t.getItemVisual(a, "symbolRotate");
      s.attr("rotation", (E || 0) * Math.PI / 180 || 0);
      var D = te(t.getItemVisual(a, "symbolOffset"), n);
      D && (s.x = D[0], s.y = D[1]), m && s.attr("cursor", m);
      var _ = t.getItemVisual(a, "style"), S = _.fill;
      if (s instanceof ee) {
        var k = s.style;
        s.useStyle(ht({
          // TODO other properties like x, y ?
          image: k.image,
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        }, _));
      } else
        s.__isEmptyBrush ? s.useStyle(ht({}, _)) : s.useStyle(_), s.style.decal = null, s.setColor(S, i && i.symbolInnerColor), s.style.strokeNoScale = !0;
      var I = t.getItemVisual(a, "liftZ"), A = this._z2;
      I != null ? A == null && (this._z2 = s.z2, s.z2 += I) : A != null && (s.z2 = A, this._z2 = null);
      var L = i && i.useNameLabel;
      Nt(s, p, {
        labelFetcher: u,
        labelDataIndex: a,
        defaultText: P,
        inheritColor: S,
        defaultOpacity: _.opacity
      });
      function P(C) {
        return L ? t.getName(C) : Gt(t, C);
      }
      this._sizeX = n[0] / 2, this._sizeY = n[1] / 2;
      var w = s.ensureState("emphasis");
      w.style = l, s.ensureState("select").style = v, s.ensureState("blur").style = h;
      var N = d == null || d === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(d) && d > 0 ? +d : 1;
      w.scaleX = this._sizeX * N, w.scaleY = this._sizeY * N, this.setSymbolScale(1), nt(this, f, c, g);
    }, e.prototype.setSymbolScale = function(t) {
      this.scaleX = this.scaleY = t;
    }, e.prototype.fadeOut = function(t, a, n) {
      var r = this.childAt(0), i = K(this).dataIndex, s = n && n.animation;
      if (this.silent = r.silent = !0, n && n.fadeLabel) {
        var u = r.getTextContent();
        u && ct(u, {
          style: {
            opacity: 0
          }
        }, a, {
          dataIndex: i,
          removeOpt: s,
          cb: function() {
            r.removeTextContent();
          }
        });
      } else
        r.removeTextContent();
      ct(r, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, a, {
        dataIndex: i,
        cb: t,
        removeOpt: s
      });
    }, e.getSymbolSize = function(t, a) {
      return ae(t.getItemVisual(a, "symbolSize"));
    }, e.getSymbolZ2 = function(t, a) {
      return t.getItemVisual(a, "z2");
    }, e;
  })(tt)
);
function Le(o, e) {
  this.parent.drift(o, e);
}
function Q(o, e, t, a) {
  return e && !isNaN(e[0]) && !isNaN(e[1]) && !(a && a.isIgnore && a.isIgnore(t)) && !(a && a.clipShape && !a.clipShape.contain(e[0], e[1])) && o.getItemVisual(t, "symbol") !== "none";
}
function Et(o) {
  return o != null && !ne(o) && (o = {
    isIgnore: o
  }), o || {};
}
function At(o) {
  var e = o.hostModel, t = e.getModel("emphasis");
  return {
    emphasisItemStyle: t.getModel("itemStyle").getItemStyle(),
    blurItemStyle: e.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: e.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: t.get("focus"),
    blurScope: t.get("blurScope"),
    emphasisDisabled: t.get("disabled"),
    hoverScale: t.get("scale"),
    labelStatesModels: st(e),
    cursorStyle: e.get("cursor")
  };
}
function Pt(o, e, t, a, n, r, i) {
  var s = new o(e, t, a, n);
  return s.setPosition(r), e.setItemGraphicEl(t, s), i.add(s), s;
}
var ke = (
  /** @class */
  (function() {
    function o(e) {
      this.group = new tt(), this._SymbolCtor = e || ut;
    }
    return o.prototype.updateData = function(e, t) {
      this._progressiveEls = null, t = Et(t);
      var a = this.group, n = e.hostModel, r = this._data, i = this._SymbolCtor, s = t.disableAnimation, u = this._seriesScope = At(e), l = {
        disableAnimation: s
      }, h = t.getSymbolPoint || function(v) {
        return e.getItemLayout(v);
      };
      r || a.removeAll(), e.diff(r).add(function(v) {
        var f = h(v);
        Q(e, f, v, t) && Pt(i, e, v, u, l, f, a);
      }).update(function(v, f) {
        var c = r.getItemGraphicEl(f), g = h(v);
        if (!Q(e, g, v, t)) {
          a.remove(c);
          return;
        }
        var p = e.getItemVisual(v, "symbol") || "circle", d = c && c.getSymbolType && c.getSymbolType();
        if (!c || d && d !== p)
          a.remove(c), c = new i(e, v, u, l), c.setPosition(g);
        else {
          c.updateData(e, v, u, l);
          var m = {
            x: g[0],
            y: g[1]
          };
          s ? c.attr(m) : Y(c, m, n);
        }
        a.add(c), e.setItemGraphicEl(v, c);
      }).remove(function(v) {
        var f = r.getItemGraphicEl(v);
        f && f.fadeOut(function() {
          a.remove(f);
        }, n);
      }).execute(), this._getSymbolPoint = h, this._data = e;
    }, o.prototype.updateLayout = function(e) {
      var t = this._data;
      if (t)
        for (var a = this, n = t.getStore(), r = 0, i = n.count(); r < i; r++) {
          var s = t.getItemGraphicEl(r), u = a._getSymbolPoint(r);
          Q(t, u, r, e) ? (s = s || Pt(a._SymbolCtor, t, r, a._seriesScope, {
            disableAnimation: !0
          }, u, a.group), s.stopAnimation(), s.setPosition(u), s.markRedraw()) : s && (a.group.remove(s), t.setItemGraphicEl(r, null));
        }
    }, o.prototype.incrementalPrepareUpdate = function(e) {
      this._seriesScope = At(e), this._data = null, this.group.removeAll();
    }, o.prototype.incrementalUpdate = function(e, t, a, n) {
      this._progressiveEls = [], n = Et(n);
      function r(l) {
        l.isGroup || (l.incremental = a, l.ensureState("emphasis").hoverLayer = ie);
      }
      for (var i = e.start; i < e.end; i++) {
        var s = t.getItemLayout(i);
        if (Q(t, s, i, n)) {
          var u = new this._SymbolCtor(t, i, this._seriesScope);
          u.traverse(r), u.setPosition(s), this.group.add(u), t.setItemGraphicEl(i, u), this._progressiveEls.push(u);
        }
      }
    }, o.prototype.eachRendered = function(e) {
      re(this._progressiveEls || this.group, e);
    }, o.prototype.remove = function(e) {
      var t = this.group, a = this._data;
      a && e ? a.eachItemGraphicEl(function(n) {
        n.fadeOut(function() {
          t.remove(n);
        }, a.hostModel);
      }) : t.removeAll();
    }, o;
  })()
);
function Mt(o, e, t) {
  var a = o.getBaseAxis(), n = o.getOtherAxis(a), r = we(n, t), i = a.dim, s = n.dim, u = e.mapDimension(s), l = e.mapDimension(i), h = s === "x" || s === "radius" ? 1 : 0, v = lt(o.dimensions, function(g) {
    return e.mapDimension(g);
  }), f = !1, c = e.getCalculationInfo("stackResultDimension");
  return x(
    e,
    v[0]
    /* , dims[1] */
  ) && (f = !0, v[0] = c), x(
    e,
    v[1]
    /* , dims[0] */
  ) && (f = !0, v[1] = c), {
    dataDimsForPoint: v,
    valueStart: r,
    valueAxisDim: s,
    baseAxisDim: i,
    stacked: !!f,
    valueDim: u,
    baseDim: l,
    baseDataOffset: h,
    stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
  };
}
function we(o, e) {
  var t = 0, a = o.scale.getExtent();
  return e === "start" ? t = a[0] : e === "end" ? t = a[1] : zt(e) && !isNaN(e) ? t = e : a[0] > 0 ? t = a[0] : a[1] < 0 && (t = a[1]), t;
}
function Ht(o, e, t, a) {
  var n = NaN;
  o.stacked && (n = t.get(t.getCalculationInfo("stackedOverDimension"), a)), isNaN(n) && (n = o.valueStart);
  var r = o.baseDataOffset, i = [];
  return i[r] = t.get(o.baseDim, a), i[1 - r] = n, e.dataToPoint(i);
}
function G(o, e) {
  return !isFinite(o) || !isFinite(e);
}
function Te(o, e) {
  var t = [];
  return e.diff(o).add(function(a) {
    t.push({
      cmd: "+",
      idx: a
    });
  }).update(function(a, n) {
    t.push({
      cmd: "=",
      idx: n,
      idx1: a
    });
  }).remove(function(a) {
    t.push({
      cmd: "-",
      idx: a
    });
  }).execute(), t;
}
function Oe(o, e, t, a, n, r, i, s) {
  for (var u = Te(o, e), l = [], h = [], v = [], f = [], c = [], g = [], p = [], d = Mt(n, e, i), m = o.getLayout("points") || [], y = e.getLayout("points") || [], b = 0; b < u.length; b++) {
    var E = u[b], D = !0, _ = void 0, S = void 0;
    switch (E.cmd) {
      case "=":
        _ = E.idx * 2, S = E.idx1 * 2;
        var k = m[_], I = m[_ + 1], A = y[S], L = y[S + 1];
        (isNaN(k) || isNaN(I)) && (k = A, I = L), l.push(k, I), h.push(A, L), v.push(t[_], t[_ + 1]), f.push(a[S], a[S + 1]), p.push(e.getRawIndex(E.idx1));
        break;
      case "+":
        var P = E.idx, w = d.dataDimsForPoint, N = n.dataToPoint([e.get(w[0], P), e.get(w[1], P)]);
        S = P * 2, l.push(N[0], N[1]), h.push(y[S], y[S + 1]);
        var C = Ht(d, n, e, P);
        v.push(C[0], C[1]), f.push(a[S], a[S + 1]), p.push(e.getRawIndex(P));
        break;
      case "-":
        D = !1;
    }
    D && (c.push(E), g.push(g.length));
  }
  g.sort(function(X, J) {
    return p[X] - p[J];
  });
  for (var V = l.length, M = $(V), T = $(V), O = $(V), H = $(V), U = [], b = 0; b < g.length; b++) {
    var q = g[b], z = b * 2, R = q * 2;
    M[z] = l[R], M[z + 1] = l[R + 1], T[z] = h[R], T[z + 1] = h[R + 1], O[z] = v[R], O[z + 1] = v[R + 1], H[z] = f[R], H[z + 1] = f[R + 1], U[b] = c[q];
  }
  return {
    current: M,
    next: T,
    stackedOnCurrent: O,
    stackedOnNext: H,
    status: U
  };
}
var W = Math.min, Z = Math.max;
function ot(o, e, t, a, n, r, i, s, u) {
  for (var l, h, v, f, c, g, p = t, d = 0; d < a; d++) {
    var m = e[p * 2], y = e[p * 2 + 1];
    if (p >= n || p < 0)
      break;
    if (G(m, y)) {
      if (u) {
        p += r;
        continue;
      }
      break;
    }
    if (p === t)
      o[r > 0 ? "moveTo" : "lineTo"](m, y), v = m, f = y;
    else {
      var b = m - l, E = y - h;
      if (b * b + E * E < 0.5) {
        p += r;
        continue;
      }
      if (i > 0) {
        for (var D = p + r, _ = e[D * 2], S = e[D * 2 + 1]; _ === m && S === y && d < a; )
          d++, D += r, p += r, _ = e[D * 2], S = e[D * 2 + 1], m = e[p * 2], y = e[p * 2 + 1], b = m - l, E = y - h;
        var k = d + 1;
        if (u)
          for (; G(_, S) && k < a; )
            k++, D += r, _ = e[D * 2], S = e[D * 2 + 1];
        var I = 0.5, A = 0, L = 0, P = void 0, w = void 0;
        if (k >= a || G(_, S))
          c = m, g = y;
        else {
          A = _ - l, L = S - h;
          var N = m - l, C = _ - m, V = y - h, M = S - y, T = void 0, O = void 0;
          if (s === "x") {
            T = Math.abs(N), O = Math.abs(C);
            var H = A > 0 ? 1 : -1;
            c = m - H * T * i, g = y, P = m + H * O * i, w = y;
          } else if (s === "y") {
            T = Math.abs(V), O = Math.abs(M);
            var U = L > 0 ? 1 : -1;
            c = m, g = y - U * T * i, P = m, w = y + U * O * i;
          } else
            T = Math.sqrt(N * N + V * V), O = Math.sqrt(C * C + M * M), I = O / (O + T), c = m - A * i * (1 - I), g = y - L * i * (1 - I), P = m + A * i * I, w = y + L * i * I, P = W(P, Z(_, m)), w = W(w, Z(S, y)), P = Z(P, W(_, m)), w = Z(w, W(S, y)), A = P - m, L = w - y, c = m - A * T / O, g = y - L * T / O, c = W(c, Z(l, m)), g = W(g, Z(h, y)), c = Z(c, W(l, m)), g = Z(g, W(h, y)), A = m - c, L = y - g, P = m + A * O / T, w = y + L * O / T;
        }
        o.bezierCurveTo(v, f, c, g, m, y), v = P, f = w;
      } else
        o.lineTo(m, y);
    }
    l = m, h = y, p += r;
  }
  return d;
}
var Ut = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return o;
  })()
), Ce = (
  /** @class */
  (function(o) {
    j(e, o);
    function e(t) {
      var a = o.call(this, t) || this;
      return a.type = "ec-polyline", a;
    }
    return e.prototype.getDefaultStyle = function() {
      return {
        stroke: Ct.color.neutral99,
        fill: null
      };
    }, e.prototype.getDefaultShape = function() {
      return new Ut();
    }, e.prototype.buildPath = function(t, a) {
      var n = a.points, r = 0, i = n.length / 2;
      if (a.connectNulls) {
        for (; i > 0 && G(n[i * 2 - 2], n[i * 2 - 1]); i--)
          ;
        for (; r < i && G(n[r * 2], n[r * 2 + 1]); r++)
          ;
      }
      for (; r < i; )
        r += ot(t, n, r, i, i, 1, a.smooth, a.smoothMonotone, a.connectNulls) + 1;
    }, e.prototype.getPointOn = function(t, a) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var n = this.path, r = n.data, i = oe.CMD, s, u, l = a === "x", h = [], v = 0; v < r.length; ) {
        var f = r[v++], c = void 0, g = void 0, p = void 0, d = void 0, m = void 0, y = void 0, b = void 0;
        switch (f) {
          case i.M:
            s = r[v++], u = r[v++];
            break;
          case i.L:
            if (c = r[v++], g = r[v++], b = l ? (t - s) / (c - s) : (t - u) / (g - u), b <= 1 && b >= 0) {
              var E = l ? (g - u) * b + u : (c - s) * b + s;
              return l ? [t, E] : [E, t];
            }
            s = c, u = g;
            break;
          case i.C:
            c = r[v++], g = r[v++], p = r[v++], d = r[v++], m = r[v++], y = r[v++];
            var D = l ? ft(s, c, p, m, t, h) : ft(u, g, d, y, t, h);
            if (D > 0)
              for (var _ = 0; _ < D; _++) {
                var S = h[_];
                if (S <= 1 && S >= 0) {
                  var E = l ? gt(u, g, d, y, S) : gt(s, c, p, m, S);
                  return l ? [t, E] : [E, t];
                }
              }
            s = m, u = y;
            break;
        }
      }
    }, e;
  })(Rt)
), Ve = (
  /** @class */
  (function(o) {
    j(e, o);
    function e() {
      return o !== null && o.apply(this, arguments) || this;
    }
    return e;
  })(Ut)
), Ne = (
  /** @class */
  (function(o) {
    j(e, o);
    function e(t) {
      var a = o.call(this, t) || this;
      return a.type = "ec-polygon", a;
    }
    return e.prototype.getDefaultShape = function() {
      return new Ve();
    }, e.prototype.buildPath = function(t, a) {
      var n = a.points, r = a.stackedOnPoints, i = 0, s = n.length / 2, u = a.smoothMonotone;
      if (a.connectNulls) {
        for (; s > 0 && G(n[s * 2 - 2], n[s * 2 - 1]); s--)
          ;
        for (; i < s && G(n[i * 2], n[i * 2 + 1]); i++)
          ;
      }
      for (; i < s; ) {
        var l = ot(t, n, i, s, s, 1, a.smooth, u, a.connectNulls);
        ot(t, r, i + l - 1, l, s, -1, a.stackedOnSmooth, u, a.connectNulls), i += l + 1, t.closePath();
      }
    }, e;
  })(Rt)
), It = {};
function Ge(o, e) {
  if (process.env.NODE_ENV !== "production") {
    var t = o + "^_^" + e;
    It[t] || (console.warn('[ECharts] DEPRECATED: "' + o + '" has been deprecated. ' + e), It[t] = !0);
  }
}
function Lt(o, e) {
  if (o.length === e.length) {
    for (var t = 0; t < o.length; t++)
      if (o[t] !== e[t])
        return;
    return !0;
  }
}
function kt(o) {
  for (var e = Dt(), t = Dt(), a = 0; a < o.length; ) {
    var n = o[a++], r = o[a++];
    G(n, r) || (_t(e, n), _t(t, r));
  }
  return [e, t];
}
function wt(o, e) {
  var t = kt(o), a = t[0], n = t[1], r = kt(e), i = r[0], s = r[1];
  return Math.max(Math.abs(a[0] - i[0]), Math.abs(n[0] - s[0]), Math.abs(a[1] - i[1]), Math.abs(n[1] - s[1]));
}
function Tt(o) {
  return zt(o) ? o : o ? 0.5 : 0;
}
function ze(o, e, t) {
  if (t.valueDim == null)
    return [];
  for (var a = e.count(), n = $(a * 2), r = 0; r < a; r++) {
    var i = Ht(t, o, e, r);
    n[r * 2] = i[0], n[r * 2 + 1] = i[1];
  }
  return n;
}
function B(o, e, t, a, n) {
  var r = t.getBaseAxis(), i = r.dim === "x" || r.dim === "radius" ? 0 : 1, s = [], u = 0, l = [], h = [], v = [], f = [];
  if (n) {
    for (u = 0; u < o.length; u += 2) {
      var c = e || o;
      G(c[u], c[u + 1]) || f.push(o[u], o[u + 1]);
    }
    o = f;
  }
  for (u = 0; u < o.length - 2; u += 2)
    switch (v[0] = o[u + 2], v[1] = o[u + 3], h[0] = o[u], h[1] = o[u + 1], s.push(h[0], h[1]), a) {
      case "end":
        l[i] = v[i], l[1 - i] = h[1 - i], s.push(l[0], l[1]);
        break;
      case "middle":
        var g = (h[i] + v[i]) / 2, p = [];
        l[i] = p[i] = g, l[1 - i] = h[1 - i], p[1 - i] = v[1 - i], s.push(l[0], l[1]), s.push(p[0], p[1]);
        break;
      default:
        l[i] = h[i], l[1 - i] = v[1 - i], s.push(l[0], l[1]);
    }
  return s.push(o[u++], o[u++]), s;
}
function Re(o, e) {
  var t = [], a = o.length, n, r;
  function i(h, v, f) {
    var c = h.coord, g = (f - c) / (v.coord - c), p = pe(g, [h.color, v.color]);
    return {
      coord: f,
      color: p
    };
  }
  for (var s = 0; s < a; s++) {
    var u = o[s], l = u.coord;
    if (l < 0)
      n = u;
    else if (l > e) {
      r ? t.push(i(r, u, e)) : n && t.push(i(n, u, 0), i(n, u, e));
      break;
    } else
      n && (t.push(i(n, u, 0)), n = null), t.push(u), r = u;
  }
  return t;
}
function Fe(o, e, t) {
  var a = o.getVisual("visualMeta");
  if (!(!a || !a.length || !o.count())) {
    if (e.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var n, r, i = a.length - 1; i >= 0; i--) {
      var s = o.getDimensionInfo(a[i].dimension);
      if (n = s && s.coordDim, n === "x" || n === "y") {
        r = a[i];
        break;
      }
    }
    if (!r) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var u = e.getAxis(n), l = lt(r.stops, function(b) {
      return {
        coord: u.toGlobalCoord(u.dataToCoord(b.value)),
        color: b.color
      };
    }), h = l.length, v = r.outerColors.slice();
    h && l[0].coord > l[h - 1].coord && (l.reverse(), v.reverse());
    var f = Re(l, n === "x" ? t.getWidth() : t.getHeight()), c = f.length;
    if (!c && h)
      return l[0].coord < 0 ? v[1] ? v[1] : l[h - 1].color : v[0] ? v[0] : l[0].color;
    var g = 10, p = f[0].coord - g, d = f[c - 1].coord + g, m = d - p;
    if (m < 1e-3)
      return "transparent";
    Ft(f, function(b) {
      b.offset = (b.coord - p) / m;
    }), f.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: c ? f[c - 1].offset : 0.5,
      color: v[1] || "transparent"
    }), f.unshift({
      offset: c ? f[0].offset : 0.5,
      color: v[0] || "transparent"
    });
    var y = new ce(0, 0, 0, 0, f, !0);
    return y[n] = p, y[n + "2"] = d, y;
  }
}
function Me(o, e, t) {
  var a = o.get("showAllSymbol"), n = a === "auto";
  if (!(a && !n)) {
    var r = t.getAxesByScale("ordinal")[0];
    if (r && !(n && He(r, e))) {
      var i = e.mapDimension(r.dim), s = {};
      return Ft(r.getViewLabels(), function(u) {
        u.tick.offInterval || (s[he(r.scale, u.tick)] = 1);
      }), function(u) {
        return !s.hasOwnProperty(e.get(i, u));
      };
    }
  }
}
function He(o, e) {
  var t = o.getExtent(), a = Math.abs(t[1] - t[0]) / o.scale.count();
  isNaN(a) && (a = 0);
  for (var n = e.count(), r = Math.max(1, Math.round(n / 5)), i = 0; i < n; i += r)
    if (ut.getSymbolSize(
      e,
      i
      // Only for cartesian, where `isHorizontal` exists.
    )[o.isHorizontal() ? 1 : 0] * 1.5 > a)
      return !1;
  return !0;
}
function Ue(o) {
  for (var e = o.length / 2; e > 0 && G(o[e * 2 - 2], o[e * 2 - 1]); e--)
    ;
  return e - 1;
}
function Ot(o, e) {
  return [o[e * 2], o[e * 2 + 1]];
}
function We(o, e, t) {
  for (var a = o.length / 2, n = t === "x" ? 0 : 1, r, i, s = 0, u = -1, l = 0; l < a; l++)
    if (i = o[l * 2 + n], !G(i, o[l * 2 + 1 - n])) {
      if (l === 0) {
        r = i;
        continue;
      }
      if (r <= e && i >= e || r >= e && i <= e) {
        u = l;
        break;
      }
      s = l, r = i;
    }
  return {
    range: [s, u],
    t: (e - r) / (i - r)
  };
}
function Wt(o) {
  if (o.get(["endLabel", "show"]))
    return !0;
  for (var e = 0; e < St.length; e++)
    if (o.get([St[e], "endLabel", "show"]))
      return !0;
  return !1;
}
function rt(o, e, t, a) {
  if (Ae(e, "cartesian2d")) {
    var n = a.getModel("endLabel"), r = n.get("valueAnimation"), i = a.getData(), s = {
      lastFrameIndex: 0
    }, u = Wt(a) ? function(c, g) {
      o._endLabelOnDuring(c, g, i, s, r, n, e);
    } : null, l = e.getBaseAxis().isHorizontal(), h = fe(e, t, a, function() {
      var c = o._endLabel;
      c && t && s.originalX != null && c.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, u);
    if (!a.get("clip", !0)) {
      var v = h.shape, f = Math.max(v.width, v.height);
      l ? (v.y -= f, v.height += f * 2) : (v.x -= f, v.width += f * 2);
    }
    return u && u(1, h), h;
  } else
    return process.env.NODE_ENV !== "production" && a.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), ge(e, t, a);
}
function Ze(o, e) {
  var t = e.getBaseAxis(), a = t.isHorizontal(), n = t.inverse, r = a ? n ? "right" : "left" : "center", i = a ? "middle" : n ? "top" : "bottom";
  return {
    normal: {
      align: o.get("align") || r,
      verticalAlign: o.get("verticalAlign") || i
    }
  };
}
var Be = (
  /** @class */
  (function(o) {
    j(e, o);
    function e() {
      return o !== null && o.apply(this, arguments) || this;
    }
    return e.prototype.init = function() {
      var t = new tt(), a = new ke();
      this.group.add(a.group), this._symbolDraw = a, this._lineGroup = t, this._changePolyState = se(this._changePolyState, this);
    }, e.prototype.render = function(t, a, n) {
      var r = t.coordinateSystem, i = this.group, s = t.getData(), u = t.getModel("lineStyle"), l = t.getModel("areaStyle"), h = s.getLayout("points") || [], v = r.type === "polar", f = this._coordSys, c = this._symbolDraw, g = this._polyline, p = this._polygon, d = this._lineGroup, m = !a.ssr && t.get("animation"), y = !l.isEmpty(), b = l.get("origin"), E = Mt(r, s, b), D = y && ze(r, s, E), _ = t.get("showSymbol"), S = t.get("connectNulls"), k = _ && !v && Me(t, s, r), I = this._data;
      I && I.eachItemGraphicEl(function(F, Xt) {
        F.__temp && (i.remove(F), I.setItemGraphicEl(Xt, null));
      }), _ || c.remove(), i.add(d);
      var A = v ? !1 : t.get("step"), L;
      r && r.getArea && t.get("clip", !0) && (L = r.getArea(), L.width != null ? (L.x -= 0.1, L.y -= 0.1, L.width += 0.2, L.height += 0.2) : L.r0 && (L.r0 -= 0.5, L.r += 0.5)), this._clipShapeForSymbol = L;
      var P = Fe(s, r, n) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(g && f.type === r.type && A === this._step))
        _ && c.updateData(s, {
          isIgnore: k,
          clipShape: L,
          disableAnimation: !0,
          getSymbolPoint: function(F) {
            return [h[F * 2], h[F * 2 + 1]];
          }
        }), m && this._initSymbolLabelAnimation(s, r, L), A && (D && (D = B(D, h, r, A, S)), h = B(h, null, r, A, S)), g = this._newPolyline(h), y ? p = this._newPolygon(h, D) : p && (d.remove(p), p = this._polygon = null), v || this._initOrUpdateEndLabel(t, r, pt(P)), d.setClipPath(rt(this, r, !0, t));
      else {
        y && !p ? p = this._newPolygon(h, D) : p && !y && (d.remove(p), p = this._polygon = null), v || this._initOrUpdateEndLabel(t, r, pt(P));
        var w = d.getClipPath();
        if (w) {
          var N = rt(this, r, !1, t);
          Vt(w, {
            shape: N.shape
          }, t);
        } else
          d.setClipPath(rt(this, r, !0, t));
        _ && c.updateData(s, {
          isIgnore: k,
          clipShape: L,
          disableAnimation: !0,
          getSymbolPoint: function(F) {
            return [h[F * 2], h[F * 2 + 1]];
          }
        }), (!Lt(this._stackedOnPoints, D) || !Lt(this._points, h)) && (m ? this._doUpdateAnimation(s, D, r, n, A, b, S) : (A && (D && (D = B(D, h, r, A, S)), h = B(h, null, r, A, S)), g.setShape({
          points: h
        }), p && p.setShape({
          points: h,
          stackedOnPoints: D
        })));
      }
      var C = t.getModel("emphasis"), V = C.get("focus"), M = C.get("blurScope"), T = C.get("disabled");
      if (g.useStyle(mt(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: P,
          lineJoin: "bevel"
        }
      )), yt(g, t, "lineStyle"), g.style.lineWidth > 0 && t.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var O = g.getState("emphasis").style;
        O.lineWidth = +g.style.lineWidth + 1;
      }
      K(g).seriesIndex = t.seriesIndex, nt(g, V, M, T);
      var H = Tt(t.get("smooth")), U = t.get("smoothMonotone");
      if (g.setShape({
        smooth: H,
        smoothMonotone: U,
        connectNulls: S
      }), p) {
        var q = s.getCalculationInfo("stackedOnSeries"), z = 0;
        p.useStyle(mt(l.getAreaStyle(), {
          fill: P,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), q && (z = Tt(q.get("smooth"))), p.setShape({
          smooth: H,
          stackedOnSmooth: z,
          smoothMonotone: U,
          connectNulls: S
        }), yt(p, t, "areaStyle"), K(p).seriesIndex = t.seriesIndex, nt(p, V, M, T);
      }
      var R = this._changePolyState;
      s.eachItemGraphicEl(function(F) {
        F && (F.onHoverStateChange = R);
      }), this._polyline.onHoverStateChange = R, this._data = s, this._coordSys = r, this._stackedOnPoints = D, this._points = h, this._step = A, this._valueOrigin = b;
      var X = t.get("triggerEvent"), J = t.get("triggerLineEvent");
      process.env.NODE_ENV !== "production" && J && Ge("triggerLineEvent", "Use the `triggerEvent` option instead.");
      var Zt = J === !0 || X === !0 || X === "line", Bt = J === !0 || X === !0 || X === "area";
      this.packEventData(t, g, Zt), p && this.packEventData(t, p, Bt);
    }, e.prototype.packEventData = function(t, a, n) {
      K(a).eventData = n ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: t.componentIndex,
        seriesIndex: t.seriesIndex,
        seriesName: t.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: a === this._polygon ? "area" : "line"
      } : null;
    }, e.prototype.highlight = function(t, a, n, r) {
      var i = t.getData(), s = bt(i, r);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var u = i.getLayout("points"), l = i.getItemGraphicEl(s);
        if (!l) {
          var h = u[s * 2], v = u[s * 2 + 1];
          if (G(h, v) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(h, v))
            return;
          var f = t.get("zlevel") || 0, c = t.get("z") || 0;
          l = new ut(i, s), l.x = h, l.y = v, l.setZ(f, c);
          var g = l.getSymbolPath().getTextContent();
          g && (g.zlevel = f, g.z = c, g.z2 = this._polyline.z2 + 1), l.__temp = !0, i.setItemGraphicEl(s, l), l.stopSymbolAnimation(!0), this.group.add(l);
        }
        l.highlight();
      } else
        et.prototype.highlight.call(this, t, a, n, r);
    }, e.prototype.downplay = function(t, a, n, r) {
      var i = t.getData(), s = bt(i, r);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var u = i.getItemGraphicEl(s);
        u && (u.__temp ? (i.setItemGraphicEl(s, null), this.group.remove(u)) : u.downplay());
      } else
        et.prototype.downplay.call(this, t, a, n, r);
    }, e.prototype._changePolyState = function(t) {
      var a = this._polygon;
      dt(this._polyline, t), a && dt(a, t);
    }, e.prototype._newPolyline = function(t) {
      var a = this._polyline;
      return a && this._lineGroup.remove(a), a = new Ce({
        shape: {
          points: t
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(a), this._polyline = a, a;
    }, e.prototype._newPolygon = function(t, a) {
      var n = this._polygon;
      return n && this._lineGroup.remove(n), n = new Ne({
        shape: {
          points: t,
          stackedOnPoints: a
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(n), this._polygon = n, n;
    }, e.prototype._initSymbolLabelAnimation = function(t, a, n) {
      var r, i, s = a.getBaseAxis(), u = s.inverse;
      a.type === "cartesian2d" ? (r = s.isHorizontal(), i = !1) : a.type === "polar" && (r = s.dim === "angle", i = !0);
      var l = t.hostModel, h = l.get("animationDuration");
      at(h) && (h = h(null));
      var v = l.get("animationDelay") || 0, f = at(v) ? v(null) : v;
      t.eachItemGraphicEl(function(c, g) {
        var p = c;
        if (p) {
          var d = [c.x, c.y], m = void 0, y = void 0, b = void 0;
          if (n)
            if (i) {
              var E = n, D = a.pointToCoord(d);
              r ? (m = E.startAngle, y = E.endAngle, b = -D[1] / 180 * Math.PI) : (m = E.r0, y = E.r, b = D[0]);
            } else {
              var _ = n;
              r ? (m = _.x, y = _.x + _.width, b = c.x) : (m = _.y + _.height, y = _.y, b = c.y);
            }
          var S = y === m ? 0 : (b - m) / (y - m);
          u && (S = 1 - S);
          var k = at(v) ? v(g) : h * S + f, I = p.getSymbolPath(), A = I.getTextContent();
          p.attr({
            scaleX: 0,
            scaleY: 0
          }), p.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: k
          }), A && A.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: k
          }), I.disableLabelAnimation = !0;
        }
      });
    }, e.prototype._initOrUpdateEndLabel = function(t, a, n) {
      var r = t.getModel("endLabel");
      if (Wt(t)) {
        var i = t.getData(), s = this._polyline, u = i.getLayout("points");
        if (!u) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var l = this._endLabel;
        l || (l = this._endLabel = new le({
          z2: 200
          // should be higher than item symbol
        }), l.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var h = Ue(u);
        h >= 0 && (Nt(s, st(t, "endLabel"), {
          inheritColor: n,
          labelFetcher: t,
          labelDataIndex: h,
          defaultText: function(v, f, c) {
            return c != null ? me(i, c) : Gt(i, v);
          },
          enableTextSetter: !0
        }, Ze(r, a)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, e.prototype._endLabelOnDuring = function(t, a, n, r, i, s, u) {
      var l = this._endLabel, h = this._polyline;
      if (l) {
        t < 1 && r.originalX == null && (r.originalX = l.x, r.originalY = l.y);
        var v = n.getLayout("points"), f = n.hostModel, c = f.get("connectNulls"), g = s.get("precision"), p = s.get("distance") || 0, d = u.getBaseAxis(), m = d.isHorizontal(), y = d.inverse, b = a.shape, E = y ? m ? b.x : b.y + b.height : m ? b.x + b.width : b.y, D = (m ? p : 0) * (y ? -1 : 1), _ = (m ? 0 : -p) * (y ? -1 : 1), S = m ? "x" : "y", k = We(v, E, S), I = k.range, A = I[1] - I[0], L = void 0;
        if (A >= 1) {
          if (A > 1 && !c) {
            var P = Ot(v, I[0]);
            l.attr({
              x: P[0] + D,
              y: P[1] + _
            }), i && (L = f.getRawValue(I[0]));
          } else {
            var P = h.getPointOn(E, S);
            P && l.attr({
              x: P[0] + D,
              y: P[1] + _
            });
            var w = f.getRawValue(I[0]), N = f.getRawValue(I[1]);
            i && (L = ue(n, g, w, N, k.t));
          }
          r.lastFrameIndex = I[0];
        } else {
          var C = t === 1 || r.lastFrameIndex > 0 ? I[0] : 0, P = Ot(v, C);
          i && (L = f.getRawValue(C)), l.attr({
            x: P[0] + D,
            y: P[1] + _
          });
        }
        if (i) {
          var V = ve(l);
          typeof V.setLabelText == "function" && V.setLabelText(L);
        }
      }
    }, e.prototype._doUpdateAnimation = function(t, a, n, r, i, s, u) {
      var l = this._polyline, h = this._polygon, v = t.hostModel, f = Oe(this._data, t, this._stackedOnPoints, a, this._coordSys, n, this._valueOrigin), c = f.current, g = f.stackedOnCurrent, p = f.next, d = f.stackedOnNext;
      if (i && (g = B(f.stackedOnCurrent, f.current, n, i, u), c = B(f.current, null, n, i, u), d = B(f.stackedOnNext, f.next, n, i, u), p = B(f.next, null, n, i, u)), wt(c, p) > 3e3 || h && wt(g, d) > 3e3) {
        l.stopAnimation(), l.setShape({
          points: p
        }), h && (h.stopAnimation(), h.setShape({
          points: p,
          stackedOnPoints: d
        }));
        return;
      }
      l.shape.__points = f.current, l.shape.points = c;
      var m = {
        shape: {
          points: p
        }
      };
      f.current !== c && (m.shape.__points = f.next), l.stopAnimation(), Y(l, m, v), h && (h.setShape({
        // Reuse the points with polyline.
        points: c,
        stackedOnPoints: g
      }), h.stopAnimation(), Y(h, {
        shape: {
          stackedOnPoints: d
        }
      }, v), l.shape.points !== h.shape.points && (h.shape.points = l.shape.points));
      for (var y = [], b = f.status, E = 0; E < b.length; E++) {
        var D = b[E].cmd;
        if (D === "=") {
          var _ = t.getItemGraphicEl(b[E].idx1);
          _ && y.push({
            el: _,
            ptIdx: E
            // Index of points
          });
        }
      }
      l.animators && l.animators.length && l.animators[0].during(function() {
        h && h.dirtyShape();
        for (var S = l.shape.__points, k = 0; k < y.length; k++) {
          var I = y[k].el, A = y[k].ptIdx * 2;
          I.x = S[A], I.y = S[A + 1], I.markRedraw();
        }
      });
    }, e.prototype.remove = function(t) {
      var a = this.group, n = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function(r, i) {
        r.__temp && (a.remove(r), n.setItemGraphicEl(i, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, e.type = "line", e;
  })(et)
);
function Xe(o, e) {
  return {
    seriesType: o,
    plan: ye(),
    reset: function(t) {
      var a = t.getData(), n = t.coordinateSystem;
      if (t.pipelineContext, !!n) {
        var r = lt(n.dimensions, function(v) {
          return a.mapDimension(v);
        }).slice(0, 2), i = r.length, s = a.getCalculationInfo("stackResultDimension");
        x(a, r[0]) && (r[0] = s), x(a, r[1]) && (r[1] = s);
        var u = a.getStore(), l = a.getDimensionIndex(r[0]), h = a.getDimensionIndex(r[1]);
        return i && {
          progress: function(v, f) {
            for (var c = v.end - v.start, g = $(c * i), p = [], d = [], m = v.start, y = 0; m < v.end; m++) {
              var b = void 0;
              if (i === 1) {
                var E = u.get(l, m);
                b = n.dataToPoint(E, null, d);
              } else
                p[0] = u.get(l, m), p[1] = u.get(h, m), b = n.dataToPoint(p, null, d);
              g[y++] = b[0], g[y++] = b[1];
            }
            f.setLayout("points", g), f.setLayout("pointsRange", {
              start: v.start,
              end: v.end
            });
          }
        };
      }
    }
  };
}
function $e(o) {
  o.registerChartView(Be), o.registerSeriesModel(Ie), o.registerLayout(Xe("line")), o.registerVisual({
    seriesType: "line",
    reset: function(e) {
      var t = e.getData(), a = e.getModel("lineStyle").getLineStyle();
      a && !a.stroke && (a.stroke = t.getVisual("style").fill), t.setVisual("legendLineStyle", a);
    }
  }), o.registerProcessor(o.PRIORITY.PROCESSOR.STATISTIC, Pe("line"));
}
function je(o) {
  if (typeof o != "object" || o === null || !("categories" in o) || !("series" in o))
    return !1;
  const e = o.categories, t = o.series;
  return !Array.isArray(e) || !e.every((a) => typeof a == "string") ? !1 : Array.isArray(t) && t.every((a) => typeof a != "object" || a === null || !("key" in a) || typeof a.key != "string" || !("label" in a) || typeof a.label != "string" || !("values" in a) || !Array.isArray(a.values) ? !1 : a.values.every((n) => typeof n == "number" || n === null) && a.values.length === e.length);
}
function qe(o) {
  return o.map((e) => ({
    type: "line",
    id: e.key,
    name: e.label,
    data: e.values,
    showSymbol: !1,
    smooth: !0,
    emphasis: { focus: "series" }
  }));
}
function Je(o) {
  return o.scale === "logarithmic" ? "log" : "value";
}
de([$e, Se, _e, De, Ee]);
class Qe {
  constructor(e) {
    vt(this, "chart");
    this.chart = be(e, void 0, { renderer: "canvas" });
  }
  render(e, t) {
    if (!je(e))
      throw new Error("The line graph data is invalid.");
    const a = getComputedStyle(document.documentElement), n = a.getPropertyValue("--bs-body-color").trim() || "#212529", r = a.getPropertyValue("--cms-border").trim() || "#dee2e6", i = a.getPropertyValue("--cms-surface").trim() || "#ffffff", s = {
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
        textStyle: { color: n }
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: i,
        borderColor: r,
        textStyle: { color: n }
      },
      xAxis: {
        type: "category",
        boundaryGap: !1,
        data: e.categories,
        axisLabel: { color: n },
        axisLine: { lineStyle: { color: r } }
      },
      yAxis: {
        type: Je(t),
        axisLabel: { color: n },
        splitLine: { lineStyle: { color: r } }
      },
      series: qe(e.series)
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
const ta = (o) => new Qe(o);
export {
  ta as createLineGraphRenderer
};
