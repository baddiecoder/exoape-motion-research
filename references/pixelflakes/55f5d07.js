(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
  648: function (n, e, t) {
    "use strict";

    t.r(e);
    var r = t(11);
    t(48);
    var o = t(534);
    var c = t(523);
    var l = t(525);
    var f = t(68);
    var m = t(527);
    var _ = t(524);
    var d = {
      name: "HomePage",
      components: {
        AppFooter: m.a,
        Scroll: _.a
      },
      mixins: [o.a, c.a, l.a],
      asyncData: function () {
        return Object(r.a)(regeneratorRuntime.mark(function n() {
          var e;
          return regeneratorRuntime.wrap(function (n) {
            while (true) {
              switch (n.prev = n.next) {
                case 0:
                  n.next = 1;
                  return Object(f.c)("home");
                case 1:
                  e = n.sent;
                  return n.abrupt("return", {
                    page: e
                  });
                case 2:
                case "end":
                  return n.stop();
              }
            }
          }, n);
        }))();
      },
      data: function () {
        return {
          page: {}
        };
      },
      mounted: function () {
        this.$nuxt.$emit("appHeader:dark");
      }
    };
    var w = t(14);
    var component = Object(w.a)(d, function () {
      var n = this;
      var e = n._self._c;
      return e("main", {
        staticClass: "main"
      }, [e("Scroll", [n._l(n.components, function (component, t) {
        return e(component.acf_fc_layout, n._b({
          key: t + component.acf_fc_layout,
          tag: "component"
        }, "component", component, false));
      }), n._v(" "), e("AppFooter")], 2)], 1);
    }, [], false, null, null, null);
    e.default = component.exports;
  }
}]);