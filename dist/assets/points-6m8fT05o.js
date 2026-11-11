import { _ as U, L as F, aP as B, aQ as H, aR as j, o as V, s as K, n as Q, z as X, ab as $, ai as q, y as T, A as J, E as W, x, ac as M, aS as ee, G as w, B as te, l as ae, aT as se, aU as re, m as le, N as R, O as ie, aB as oe } from "./installCanvasRenderer-nrYOY0X5.js";
/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
var ne = (
  /** @class */
  (function(u) {
    U(a, u);
    function a(e, t, l, r) {
      var o = u.call(this) || this;
      return o.updateData(e, t, l, r), o;
    }
    return a.prototype._createSymbol = function(e, t, l, r, o, s) {
      this.removeAll();
      var n = F(e, -1, -1, 2, 2, null, s);
      n.attr({
        z2: B(o, 100),
        culling: !0,
        scaleX: r[0] / 2,
        scaleY: r[1] / 2
      }), n.drift = ue, this._symbolType = e, this.add(n);
    }, a.prototype.stopSymbolAnimation = function(e) {
      this.childAt(0).stopAnimation(null, e);
    }, a.prototype.getSymbolType = function() {
      return this._symbolType;
    }, a.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, a.prototype.highlight = function() {
      H(this.childAt(0));
    }, a.prototype.downplay = function() {
      j(this.childAt(0));
    }, a.prototype.setZ = function(e, t) {
      var l = this.childAt(0);
      l.zlevel = e, l.z = t;
    }, a.prototype.setDraggable = function(e, t) {
      var l = this.childAt(0);
      l.draggable = e, l.cursor = !t && e ? "move" : l.cursor;
    }, a.prototype.updateData = function(e, t, l, r) {
      this.silent = !1;
      var o = e.getItemVisual(t, "symbol") || "circle", s = e.hostModel, n = a.getSymbolSize(e, t), y = a.getSymbolZ2(e, t), h = o !== this._symbolType, m = r && r.disableAnimation;
      if (h) {
        var v = e.getItemVisual(t, "symbolKeepAspect");
        this._createSymbol(o, e, t, n, y, v);
      } else {
        var i = this.childAt(0);
        i.silent = !1;
        var c = {
          scaleX: n[0] / 2,
          scaleY: n[1] / 2
        };
        m ? i.attr(c) : V(i, c, s, t), K(i);
      }
      if (this._updateCommon(e, t, n, l, r), h) {
        var i = this.childAt(0);
        if (!m) {
          var c = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: i.style.opacity
            }
          };
          i.scaleX = i.scaleY = 0, i.style.opacity = 0, Q(i, c, s, t);
        }
      }
      m && this.childAt(0).stopAnimation("leave");
    }, a.prototype._updateCommon = function(e, t, l, r, o) {
      var s = this.childAt(0), n = e.hostModel, y, h, m, v, i, c, d, f, p;
      if (r && (y = r.emphasisItemStyle, h = r.blurItemStyle, m = r.selectItemStyle, v = r.focus, i = r.blurScope, d = r.labelStatesModels, f = r.hoverScale, p = r.cursorStyle, c = r.emphasisDisabled), !r || e.hasItemOption) {
        var S = r && r.itemModel ? r.itemModel : e.getItemModel(t), g = S.getModel("emphasis");
        y = g.getModel("itemStyle").getItemStyle(), m = S.getModel(["select", "itemStyle"]).getItemStyle(), h = S.getModel(["blur", "itemStyle"]).getItemStyle(), v = g.get("focus"), i = g.get("blurScope"), c = g.get("disabled"), d = X(S), f = g.getShallow("scale"), p = S.getShallow("cursor");
      }
      var A = e.getItemVisual(t, "symbolRotate");
      s.attr("rotation", (A || 0) * Math.PI / 180 || 0);
      var b = $(e.getItemVisual(t, "symbolOffset"), l);
      b && (s.x = b[0], s.y = b[1]), p && s.attr("cursor", p);
      var I = e.getItemVisual(t, "style"), O = I.fill;
      if (s instanceof q) {
        var _ = s.style;
        s.useStyle(T({
          // TODO other properties like x, y ?
          image: _.image,
          x: _.x,
          y: _.y,
          width: _.width,
          height: _.height
        }, I));
      } else
        s.__isEmptyBrush ? s.useStyle(T({}, I)) : s.useStyle(I), s.style.decal = null, s.setColor(O, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var C = e.getItemVisual(t, "liftZ"), z = this._z2;
      C != null ? z == null && (this._z2 = s.z2, s.z2 += C) : z != null && (s.z2 = z, this._z2 = null);
      var Z = o && o.useNameLabel;
      J(s, d, {
        labelFetcher: n,
        labelDataIndex: t,
        defaultText: k,
        inheritColor: O,
        defaultOpacity: I.opacity
      });
      function k(P) {
        return Z ? e.getName(P) : te(e, P);
      }
      this._sizeX = l[0] / 2, this._sizeY = l[1] / 2;
      var D = s.ensureState("emphasis");
      D.style = y, s.ensureState("select").style = m, s.ensureState("blur").style = h;
      var L = f == null || f === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(f) && f > 0 ? +f : 1;
      D.scaleX = this._sizeX * L, D.scaleY = this._sizeY * L, this.setSymbolScale(1), W(this, v, i, c);
    }, a.prototype.setSymbolScale = function(e) {
      this.scaleX = this.scaleY = e;
    }, a.prototype.fadeOut = function(e, t, l) {
      var r = this.childAt(0), o = x(this).dataIndex, s = l && l.animation;
      if (this.silent = r.silent = !0, l && l.fadeLabel) {
        var n = r.getTextContent();
        n && M(n, {
          style: {
            opacity: 0
          }
        }, t, {
          dataIndex: o,
          removeOpt: s,
          cb: function() {
            r.removeTextContent();
          }
        });
      } else
        r.removeTextContent();
      M(r, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, t, {
        dataIndex: o,
        cb: e,
        removeOpt: s
      });
    }, a.getSymbolSize = function(e, t) {
      return ee(e.getItemVisual(t, "symbolSize"));
    }, a.getSymbolZ2 = function(e, t) {
      return e.getItemVisual(t, "z2");
    }, a;
  })(w)
);
function ue(u, a) {
  this.parent.drift(u, a);
}
function E(u, a, e, t) {
  return a && !isNaN(a[0]) && !isNaN(a[1]) && !(t && t.isIgnore && t.isIgnore(e)) && !(t && t.clipShape && !t.clipShape.contain(a[0], a[1])) && u.getItemVisual(e, "symbol") !== "none";
}
function N(u) {
  return u != null && !re(u) && (u = {
    isIgnore: u
  }), u || {};
}
function Y(u) {
  var a = u.hostModel, e = a.getModel("emphasis");
  return {
    emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
    blurItemStyle: a.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: a.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: e.get("focus"),
    blurScope: e.get("blurScope"),
    emphasisDisabled: e.get("disabled"),
    hoverScale: e.get("scale"),
    labelStatesModels: X(a),
    cursorStyle: a.get("cursor")
  };
}
function G(u, a, e, t, l, r, o) {
  var s = new u(a, e, t, l);
  return s.setPosition(r), a.setItemGraphicEl(e, s), o.add(s), s;
}
var ce = (
  /** @class */
  (function() {
    function u(a) {
      this.group = new w(), this._SymbolCtor = a || ne;
    }
    return u.prototype.updateData = function(a, e) {
      this._progressiveEls = null, e = N(e);
      var t = this.group, l = a.hostModel, r = this._data, o = this._SymbolCtor, s = e.disableAnimation, n = this._seriesScope = Y(a), y = {
        disableAnimation: s
      }, h = e.getSymbolPoint || function(m) {
        return a.getItemLayout(m);
      };
      r || t.removeAll(), a.diff(r).add(function(m) {
        var v = h(m);
        E(a, v, m, e) && G(o, a, m, n, y, v, t);
      }).update(function(m, v) {
        var i = r.getItemGraphicEl(v), c = h(m);
        if (!E(a, c, m, e)) {
          t.remove(i);
          return;
        }
        var d = a.getItemVisual(m, "symbol") || "circle", f = i && i.getSymbolType && i.getSymbolType();
        if (!i || f && f !== d)
          t.remove(i), i = new o(a, m, n, y), i.setPosition(c);
        else {
          i.updateData(a, m, n, y);
          var p = {
            x: c[0],
            y: c[1]
          };
          s ? i.attr(p) : V(i, p, l);
        }
        t.add(i), a.setItemGraphicEl(m, i);
      }).remove(function(m) {
        var v = r.getItemGraphicEl(m);
        v && v.fadeOut(function() {
          t.remove(v);
        }, l);
      }).execute(), this._getSymbolPoint = h, this._data = a;
    }, u.prototype.updateLayout = function(a) {
      var e = this._data;
      if (e)
        for (var t = this, l = e.getStore(), r = 0, o = l.count(); r < o; r++) {
          var s = e.getItemGraphicEl(r), n = t._getSymbolPoint(r);
          E(e, n, r, a) ? (s = s || G(t._SymbolCtor, e, r, t._seriesScope, {
            disableAnimation: !0
          }, n, t.group), s.stopAnimation(), s.setPosition(n), s.markRedraw()) : s && (t.group.remove(s), e.setItemGraphicEl(r, null));
        }
    }, u.prototype.incrementalPrepareUpdate = function(a) {
      this._seriesScope = Y(a), this._data = null, this.group.removeAll();
    }, u.prototype.incrementalUpdate = function(a, e, t, l) {
      this._progressiveEls = [], l = N(l);
      function r(y) {
        y.isGroup || (y.incremental = t, y.ensureState("emphasis").hoverLayer = se);
      }
      for (var o = a.start; o < a.end; o++) {
        var s = e.getItemLayout(o);
        if (E(e, s, o, l)) {
          var n = new this._SymbolCtor(e, o, this._seriesScope);
          n.traverse(r), n.setPosition(s), this.group.add(n), e.setItemGraphicEl(o, n), this._progressiveEls.push(n);
        }
      }
    }, u.prototype.eachRendered = function(a) {
      ae(this._progressiveEls || this.group, a);
    }, u.prototype.remove = function(a) {
      var e = this.group, t = this._data;
      t && a ? t.eachItemGraphicEl(function(l) {
        l.fadeOut(function() {
          e.remove(l);
        }, t.hostModel);
      }) : e.removeAll();
    }, u;
  })()
);
function ye(u, a) {
  return {
    seriesType: u,
    plan: oe(),
    reset: function(e) {
      var t = e.getData(), l = e.coordinateSystem, r = e.pipelineContext, o = a || r.large;
      if (l) {
        var s = le(l.dimensions, function(i) {
          return t.mapDimension(i);
        }).slice(0, 2), n = s.length, y = t.getCalculationInfo("stackResultDimension");
        R(t, s[0]) && (s[0] = y), R(t, s[1]) && (s[1] = y);
        var h = t.getStore(), m = t.getDimensionIndex(s[0]), v = t.getDimensionIndex(s[1]);
        return n && {
          progress: function(i, c) {
            for (var d = i.end - i.start, f = o && ie(d * n), p = [], S = [], g = i.start, A = 0; g < i.end; g++) {
              var b = void 0;
              if (n === 1) {
                var I = h.get(m, g);
                b = l.dataToPoint(I, null, S);
              } else
                p[0] = h.get(m, g), p[1] = h.get(v, g), b = l.dataToPoint(p, null, S);
              o ? (f[A++] = b[0], f[A++] = b[1]) : c.setItemLayout(g, b.slice());
            }
            o && (c.setLayout("points", f), c.setLayout("pointsRange", {
              start: i.start,
              end: i.end
            }));
          }
        };
      }
    }
  };
}
export {
  ce as S,
  ne as a,
  ye as p
};
