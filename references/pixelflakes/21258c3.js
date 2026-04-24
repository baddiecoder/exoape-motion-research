(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  523: function (t, o, e) {
    "use strict";

    e(65);
    var n = e(3);
    var r = ["transform", "zIndex", "opacity", "visibility"].join(",");
    o.a = {
      transition: {
        mode: "",
        css: false,
        enter: function (t) {
          n.a.fromTo(t, {
            yPercent: 100,
            zIndex: 86,
            autoAlpha: 1
          }, {
            yPercent: 0,
            duration: 1,
            ease: "expo.inOut",
            clearProps: r
          });
        },
        leave: function (t, o) {
          n.a.fromTo(t, {
            scale: 1,
            zIndex: 1
          }, {
            scale: 0.95,
            autoAlpha: 0.3,
            duration: 1,
            ease: "expo.inOut",
            onComplete: o,
            clearProps: r
          });
        }
      }
    };
  },
  524: function (t, o, e) {
    "use strict";

    function n(t, i) {
      for (var o = 0; o < i.length; o++) {
        var e = i[o];
        e.enumerable = e.enumerable || false;
        e.configurable = true;
        if ("value" in e) {
          e.writable = true;
        }
        Object.defineProperty(t, typeof (n = function (t) {
          if (typeof t != "object" || t === null) {
            return t;
          }
          var o = t[Symbol.toPrimitive];
          if (o !== undefined) {
            var e = o.call(t, "string");
            if (typeof e != "object") {
              return e;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        }(e.key)) == "symbol" ? n : String(n), e);
      }
      var n;
    }
    function i(i, t, o) {
      if (t) {
        n(i.prototype, t);
      }
      if (o) {
        n(i, o);
      }
      Object.defineProperty(i, "prototype", {
        writable: false
      });
      return i;
    }
    function r() {
      r = Object.assign ? Object.assign.bind() : function (t) {
        for (var i = 1; i < arguments.length; i++) {
          var o = arguments[i];
          for (var e in o) {
            if (Object.prototype.hasOwnProperty.call(o, e)) {
              t[e] = o[e];
            }
          }
        }
        return t;
      };
      return r.apply(this, arguments);
    }
    function l(t, i, o) {
      return Math.max(t, Math.min(i, o));
    }
    var c = function () {
      function t() {}
      var i = t.prototype;
      i.advance = function (t) {
        var i;
        var o;
        var e;
        var s;
        if (this.isRunning) {
          var n = false;
          if (this.lerp) {
            this.value = (o = this.value, e = this.to, (1 - (s = 1 - Math.exp(this.lerp * -60 * t))) * o + s * e);
            if (Math.round(this.value) === this.to) {
              this.value = this.to;
              n = true;
            }
          } else {
            this.currentTime += t;
            var r = l(0, this.currentTime / this.duration, 1);
            var c = (n = r >= 1) ? 1 : this.easing(r);
            this.value = this.from + (this.to - this.from) * c;
          }
          if ((i = this.onUpdate) != null) {
            i.call(this, this.value, n);
          }
          if (n) {
            this.stop();
          }
        }
      };
      i.stop = function () {
        this.isRunning = false;
      };
      i.fromTo = function (t, i, o) {
        var e = o.lerp;
        var n = e === undefined ? 0.1 : e;
        var s = o.duration;
        var r = s === undefined ? 1 : s;
        var l = o.easing;
        var c = l === undefined ? function (t) {
          return t;
        } : l;
        var a = o.onStart;
        var h = o.onUpdate;
        this.from = this.value = t;
        this.to = i;
        this.lerp = n;
        this.duration = r;
        this.easing = c;
        this.currentTime = 0;
        this.isRunning = true;
        if (a != null) {
          a();
        }
        this.onUpdate = h;
      };
      return t;
    }();
    var s = function () {
      function t(t) {
        var i;
        var o;
        var e = this;
        var n = t === undefined ? {} : t;
        var s = n.wrapper;
        var r = n.content;
        var l = n.autoResize;
        var c = l === undefined || l;
        this.resize = function () {
          e.onWrapperResize();
          e.onContentResize();
        };
        this.onWrapperResize = function () {
          if (e.wrapper === window) {
            e.width = window.innerWidth;
            e.height = window.innerHeight;
          } else {
            e.width = e.wrapper.clientWidth;
            e.height = e.wrapper.clientHeight;
          }
        };
        this.onContentResize = function () {
          e.scrollHeight = e.content.scrollHeight;
          e.scrollWidth = e.content.scrollWidth;
        };
        this.wrapper = s;
        this.content = r;
        if (c) {
          i = this.resize;
          function a() {
            var t = arguments;
            var e = this;
            clearTimeout(o);
            o = setTimeout(function () {
              i.apply(e, t);
            }, 250);
          }
          if (this.wrapper !== window) {
            this.wrapperResizeObserver = new ResizeObserver(a);
            this.wrapperResizeObserver.observe(this.wrapper);
          }
          this.contentResizeObserver = new ResizeObserver(a);
          this.contentResizeObserver.observe(this.content);
        }
        this.resize();
      }
      t.prototype.destroy = function () {
        var t;
        var i;
        if ((t = this.wrapperResizeObserver) != null) {
          t.disconnect();
        }
        if ((i = this.contentResizeObserver) != null) {
          i.disconnect();
        }
      };
      i(t, [{
        key: "limit",
        get: function () {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
          };
        }
      }]);
      return t;
    }();
    var h = function () {
      function t() {
        this.events = {};
      }
      var i = t.prototype;
      i.emit = function (t) {
        var i = this.events[t] || [];
        for (var o = 0, e = i.length; o < e; o++) {
          i[o].apply(i, [].slice.call(arguments, 1));
        }
      };
      i.on = function (t, i) {
        var o;
        var e = this;
        if (!((o = this.events[t]) == null ? undefined : o.push(i))) {
          this.events[t] = [i];
        }
        return function () {
          var o;
          e.events[t] = (o = e.events[t]) == null ? undefined : o.filter(function (t) {
            return i !== t;
          });
        };
      };
      i.off = function (t, i) {
        var o;
        this.events[t] = (o = this.events[t]) == null ? undefined : o.filter(function (t) {
          return i !== t;
        });
      };
      i.destroy = function () {
        this.events = {};
      };
      return t;
    }();
    var v = function () {
      function t(t, i) {
        var o = this;
        var e = i.wheelMultiplier;
        var s = e === undefined ? 1 : e;
        var n = i.touchMultiplier;
        var r = n === undefined ? 2 : n;
        var a = i.normalizeWheel;
        var c = a !== undefined && a;
        this.onTouchStart = function (t) {
          var i = t.targetTouches ? t.targetTouches[0] : t;
          var e = i.clientY;
          o.touchStart.x = i.clientX;
          o.touchStart.y = e;
          o.lastDelta = {
            x: 0,
            y: 0
          };
        };
        this.onTouchMove = function (t) {
          var i = t.targetTouches ? t.targetTouches[0] : t;
          var e = i.clientX;
          var n = i.clientY;
          var s = -(e - o.touchStart.x) * o.touchMultiplier;
          var r = -(n - o.touchStart.y) * o.touchMultiplier;
          o.touchStart.x = e;
          o.touchStart.y = n;
          o.lastDelta = {
            x: s,
            y: r
          };
          o.emitter.emit("scroll", {
            deltaX: s,
            deltaY: r,
            event: t
          });
        };
        this.onTouchEnd = function (t) {
          o.emitter.emit("scroll", {
            deltaX: o.lastDelta.x,
            deltaY: o.lastDelta.y,
            event: t
          });
        };
        this.onWheel = function (t) {
          var i = t.deltaX;
          var e = t.deltaY;
          if (o.normalizeWheel) {
            i = l(-100, i, 100);
            e = l(-100, e, 100);
          }
          o.emitter.emit("scroll", {
            deltaX: i *= o.wheelMultiplier,
            deltaY: e *= o.wheelMultiplier,
            event: t
          });
        };
        this.element = t;
        this.wheelMultiplier = s;
        this.touchMultiplier = r;
        this.normalizeWheel = c;
        this.touchStart = {
          x: null,
          y: null
        };
        this.emitter = new h();
        this.element.addEventListener("wheel", this.onWheel, {
          passive: false
        });
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: false
        });
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: false
        });
        this.element.addEventListener("touchend", this.onTouchEnd, {
          passive: false
        });
      }
      var i = t.prototype;
      i.on = function (t, i) {
        return this.emitter.on(t, i);
      };
      i.destroy = function () {
        this.emitter.destroy();
        this.element.removeEventListener("wheel", this.onWheel, {
          passive: false
        });
        this.element.removeEventListener("touchstart", this.onTouchStart, {
          passive: false
        });
        this.element.removeEventListener("touchmove", this.onTouchMove, {
          passive: false
        });
        this.element.removeEventListener("touchend", this.onTouchEnd, {
          passive: false
        });
      };
      return t;
    }();
    var f = function () {
      function t(t) {
        var i = this;
        var o = t === undefined ? {} : t;
        var e = o.wrapper;
        var a = e === undefined ? window : e;
        var n = o.content;
        var u = n === undefined ? document.documentElement : n;
        var p = o.wheelEventsTarget;
        var l = p === undefined ? a : p;
        var f = o.eventsTarget;
        var d = f === undefined ? l : f;
        var w = o.smoothWheel;
        var g = w === undefined || w;
        var m = o.smoothTouch;
        var y = m !== undefined && m;
        var x = o.syncTouch;
        var C = x !== undefined && x;
        var b = o.syncTouchLerp;
        var S = b === undefined ? 0.1 : b;
        var k = o.__iosNoInertiaSyncTouchLerp;
        var _ = k === undefined ? 0.4 : k;
        var O = o.touchInertiaMultiplier;
        var z = O === undefined ? 35 : O;
        var M = o.duration;
        var L = o.easing;
        var j = L === undefined ? function (t) {
          return Math.min(1, 1.001 - Math.pow(2, t * -10));
        } : L;
        var T = o.lerp;
        var P = T === undefined ? !M && 0.1 : T;
        var E = o.infinite;
        var A = E !== undefined && E;
        var H = o.orientation;
        var R = H === undefined ? "vertical" : H;
        var $ = o.gestureOrientation;
        var D = $ === undefined ? "vertical" : $;
        var W = o.touchMultiplier;
        var X = W === undefined ? 1 : W;
        var N = o.wheelMultiplier;
        var B = N === undefined ? 1 : N;
        var I = o.normalizeWheel;
        var Z = I !== undefined && I;
        var q = o.autoResize;
        var Y = q === undefined || q;
        this.onVirtualScroll = function (t) {
          var o = t.deltaX;
          var e = t.deltaY;
          var s = t.event;
          if (!s.ctrlKey) {
            var n = s.type.includes("touch");
            var l = s.type.includes("wheel");
            if ((i.options.gestureOrientation !== "both" || o !== 0 || e !== 0) && (i.options.gestureOrientation !== "vertical" || e !== 0) && (i.options.gestureOrientation !== "horizontal" || o !== 0) && (!n || i.options.gestureOrientation !== "vertical" || i.scroll !== 0 || !!i.options.infinite || !(e <= 0))) {
              var c = s.composedPath();
              if (!(c = c.slice(0, c.indexOf(i.rootElement))).find(function (t) {
                var i;
                return (t.hasAttribute == null ? undefined : t.hasAttribute("data-lenis-prevent")) || n && (t.hasAttribute == null ? undefined : t.hasAttribute("data-lenis-prevent-touch")) || l && (t.hasAttribute == null ? undefined : t.hasAttribute("data-lenis-prevent-wheel")) || ((i = t.classList) == null ? undefined : i.contains("lenis"));
              })) {
                if (i.isStopped || i.isLocked) {
                  s.preventDefault();
                } else {
                  i.isSmooth = (i.options.smoothTouch || i.options.syncTouch) && n || i.options.smoothWheel && l;
                  if (!i.isSmooth) {
                    i.isScrolling = false;
                    i.animate.stop();
                    return;
                  }
                  s.preventDefault();
                  var a = e;
                  if (i.options.gestureOrientation === "both") {
                    a = Math.abs(e) > Math.abs(o) ? e : o;
                  } else if (i.options.gestureOrientation === "horizontal") {
                    a = o;
                  }
                  var h = n && i.options.syncTouch;
                  var u = n && s.type === "touchend" && Math.abs(a) > 1;
                  if (u) {
                    a = i.velocity * i.options.touchInertiaMultiplier;
                  }
                  i.scrollTo(i.targetScroll + a, r({
                    programmatic: false
                  }, h && {
                    lerp: u ? i.syncTouchLerp : i.options.__iosNoInertiaSyncTouchLerp
                  }));
                }
              }
            }
          }
        };
        this.onScroll = function () {
          if (!i.isScrolling) {
            var t = i.animatedScroll;
            i.animatedScroll = i.targetScroll = i.actualScroll;
            i.velocity = 0;
            i.direction = Math.sign(i.animatedScroll - t);
            i.emit();
          }
        };
        window.lenisVersion = "1.0.27";
        if (a === document.documentElement || a === document.body) {
          a = window;
        }
        this.options = {
          wrapper: a,
          content: u,
          wheelEventsTarget: l,
          eventsTarget: d,
          smoothWheel: g,
          smoothTouch: y,
          syncTouch: C,
          syncTouchLerp: S,
          __iosNoInertiaSyncTouchLerp: _,
          touchInertiaMultiplier: z,
          duration: M,
          easing: j,
          lerp: P,
          infinite: A,
          gestureOrientation: D,
          orientation: R,
          touchMultiplier: X,
          wheelMultiplier: B,
          normalizeWheel: Z,
          autoResize: Y
        };
        this.animate = new c();
        this.emitter = new h();
        this.dimensions = new s({
          wrapper: a,
          content: u,
          autoResize: Y
        });
        this.toggleClass("lenis", true);
        this.velocity = 0;
        this.isLocked = false;
        this.isStopped = false;
        this.isSmooth = C || g || y;
        this.isScrolling = false;
        this.targetScroll = this.animatedScroll = this.actualScroll;
        this.options.wrapper.addEventListener("scroll", this.onScroll, {
          passive: false
        });
        this.virtualScroll = new v(d, {
          touchMultiplier: X,
          wheelMultiplier: B,
          normalizeWheel: Z
        });
        this.virtualScroll.on("scroll", this.onVirtualScroll);
      }
      var o = t.prototype;
      o.destroy = function () {
        this.emitter.destroy();
        this.options.wrapper.removeEventListener("scroll", this.onScroll, {
          passive: false
        });
        this.virtualScroll.destroy();
        this.dimensions.destroy();
        this.toggleClass("lenis", false);
        this.toggleClass("lenis-smooth", false);
        this.toggleClass("lenis-scrolling", false);
        this.toggleClass("lenis-stopped", false);
        this.toggleClass("lenis-locked", false);
      };
      o.on = function (t, i) {
        return this.emitter.on(t, i);
      };
      o.off = function (t, i) {
        return this.emitter.off(t, i);
      };
      o.setScroll = function (t) {
        if (this.isHorizontal) {
          this.rootElement.scrollLeft = t;
        } else {
          this.rootElement.scrollTop = t;
        }
      };
      o.resize = function () {
        this.dimensions.resize();
      };
      o.emit = function () {
        this.emitter.emit("scroll", this);
      };
      o.reset = function () {
        this.isLocked = false;
        this.isScrolling = false;
        this.velocity = 0;
        this.animate.stop();
      };
      o.start = function () {
        this.isStopped = false;
        this.reset();
      };
      o.stop = function () {
        this.isStopped = true;
        this.animate.stop();
        this.reset();
      };
      o.raf = function (t) {
        var i = t - (this.time || t);
        this.time = t;
        this.animate.advance(i * 0.001);
      };
      o.scrollTo = function (t, i) {
        var o = this;
        var e = i === undefined ? {} : i;
        var s = e.offset;
        var n = s === undefined ? 0 : s;
        var r = e.immediate;
        var c = r !== undefined && r;
        var a = e.lock;
        var h = a !== undefined && a;
        var u = e.duration;
        var p = u === undefined ? this.options.duration : u;
        var v = e.easing;
        var f = v === undefined ? this.options.easing : v;
        var d = e.lerp;
        var w = d === undefined ? !p && this.options.lerp : d;
        var g = e.onComplete;
        var m = g === undefined ? null : g;
        var y = e.force;
        var x = e.programmatic;
        var C = x === undefined || x;
        if (!this.isStopped && !this.isLocked || y !== undefined && y) {
          if (["top", "left", "start"].includes(t)) {
            t = 0;
          } else if (["bottom", "right", "end"].includes(t)) {
            t = this.limit;
          } else {
            var b;
            var S;
            if (typeof t == "string") {
              S = document.querySelector(t);
            } else if ((b = t) != null && b.nodeType) {
              S = t;
            }
            if (S) {
              if (this.options.wrapper !== window) {
                var k = this.options.wrapper.getBoundingClientRect();
                n -= this.isHorizontal ? k.left : k.top;
              }
              var _ = S.getBoundingClientRect();
              t = (this.isHorizontal ? _.left : _.top) + this.animatedScroll;
            }
          }
          if (typeof t == "number") {
            t += n;
            t = Math.round(t);
            if (this.options.infinite) {
              if (C) {
                this.targetScroll = this.animatedScroll = this.scroll;
              }
            } else {
              t = l(0, t, this.limit);
            }
            if (c) {
              this.animatedScroll = this.targetScroll = t;
              this.setScroll(this.scroll);
              this.reset();
              if (m != null) {
                m(this);
              }
              return;
            }
            if (!C) {
              if (t === this.targetScroll) {
                return;
              }
              this.targetScroll = t;
            }
            this.animate.fromTo(this.animatedScroll, t, {
              duration: p,
              easing: f,
              lerp: w,
              onStart: function () {
                if (h) {
                  o.isLocked = true;
                }
                o.isScrolling = true;
              },
              onUpdate: function (t, i) {
                o.isScrolling = true;
                o.velocity = t - o.animatedScroll;
                o.direction = Math.sign(o.velocity);
                o.animatedScroll = t;
                o.setScroll(o.scroll);
                if (C) {
                  o.targetScroll = t;
                }
                if (!i) {
                  o.emit();
                }
                if (i) {
                  requestAnimationFrame(function () {
                    o.reset();
                    o.emit();
                    if (m != null) {
                      m(o);
                    }
                  });
                }
              }
            });
          }
        }
      };
      o.toggleClass = function (t, i) {
        this.rootElement.classList.toggle(t, i);
        this.emitter.emit("className change", this);
      };
      i(t, [{
        key: "rootElement",
        get: function () {
          if (this.options.wrapper === window) {
            return this.options.content;
          } else {
            return this.options.wrapper;
          }
        }
      }, {
        key: "limit",
        get: function () {
          return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
      }, {
        key: "isHorizontal",
        get: function () {
          return this.options.orientation === "horizontal";
        }
      }, {
        key: "actualScroll",
        get: function () {
          if (this.isHorizontal) {
            return this.rootElement.scrollLeft;
          } else {
            return this.rootElement.scrollTop;
          }
        }
      }, {
        key: "scroll",
        get: function () {
          if (this.options.infinite) {
            return (this.animatedScroll % (t = this.limit) + t) % t;
          } else {
            return this.animatedScroll;
          }
          var t;
        }
      }, {
        key: "progress",
        get: function () {
          if (this.limit === 0) {
            return 1;
          } else {
            return this.scroll / this.limit;
          }
        }
      }, {
        key: "isSmooth",
        get: function () {
          return this.__isSmooth;
        },
        set: function (t) {
          if (this.__isSmooth !== t) {
            this.__isSmooth = t;
            this.toggleClass("lenis-smooth", t);
          }
        }
      }, {
        key: "isScrolling",
        get: function () {
          return this.__isScrolling;
        },
        set: function (t) {
          if (this.__isScrolling !== t) {
            this.__isScrolling = t;
            this.toggleClass("lenis-scrolling", t);
          }
        }
      }, {
        key: "isStopped",
        get: function () {
          return this.__isStopped;
        },
        set: function (t) {
          if (this.__isStopped !== t) {
            this.__isStopped = t;
            this.toggleClass("lenis-stopped", t);
          }
        }
      }, {
        key: "isLocked",
        get: function () {
          return this.__isLocked;
        },
        set: function (t) {
          if (this.__isLocked !== t) {
            this.__isLocked = t;
            this.toggleClass("lenis-locked", t);
          }
        }
      }, {
        key: "className",
        get: function () {
          var t = "lenis";
          if (this.isStopped) {
            t += " lenis-stopped";
          }
          if (this.isLocked) {
            t += " lenis-locked";
          }
          if (this.isScrolling) {
            t += " lenis-scrolling";
          }
          if (this.isSmooth) {
            t += " lenis-smooth";
          }
          return t;
        }
      }]);
      return t;
    }();
    var d = {
      name: "ScrollComponent",
      mounted: function () {
        this.$nuxt.$on("window:raf", this.onRaf);
        this.setScroll();
        this.$root.wrapper = this.$el;
      },
      beforeDestroy: function () {
        this.$nuxt.$off("window:raf", this.onRaf);
        this.$root.scroll.destroy();
      },
      methods: {
        setScroll: function () {
          var t = this;
          var o = this.$refs;
          var e = o.wrapper;
          var content = o.content;
          this.$root.scroll = new f({
            wrapper: e,
            content: content,
            duration: 1,
            easing: function (t) {
              return Math.min(1, 1.001 - Math.pow(2, t * -10));
            }
          });
          this.$root.scroll.on("scroll", function (o) {
            o.scroll;
            var e = o.targetScroll;
            t.$nuxt.$emit("appHeader:scroll", e);
            t.$nuxt.$emit("appLogo:scroll", e);
            t.$nuxt.$emit("appNav:scroll", e);
          });
        },
        onRaf: function (time) {
          this.$root.scroll.raf(time);
        }
      }
    };
    var w = d;
    e(532);
    var m = e(14);
    var component = Object(m.a)(w, function () {
      var t = this._self._c;
      return t("div", {
        ref: "wrapper",
        staticClass: "wrapper",
        attrs: {
          "data-wrapper": ""
        }
      }, [t("div", {
        ref: "content",
        staticClass: "content"
      }, [this._t("default")], 2)]);
    }, [], false, null, "31bf8ba3", null);
    o.a = component.exports;
  },
  525: function (t, o, e) {
    "use strict";

    e(65);
    e(34);
    e(58);
    o.a = {
      head: function () {
        var t;
        var o;
        var n;
        var l;
        var h;
        var f;
        var d = "https://www.pixelflakes.com" + this.$route.path;
        if (this.page) {
          t = ((n = this.page) === null || n === undefined || (n = n.title) === null || n === undefined ? undefined : n.rendered) ?? "";
          o = ((l = this.page) === null || l === undefined || (l = l.acf) === null || l === undefined ? undefined : l.seoDescription) ?? "";
        }
        if (this.post) {
          t = ((h = this.post) === null || h === undefined || (h = h.title) === null || h === undefined ? undefined : h.rendered) ?? "";
          o = ((f = this.post) === null || f === undefined || (f = f.acf) === null || f === undefined ? undefined : f.seoDescription) ?? "";
        }
        var title = t.replace(/&#(\d+);/g, function (t, o) {
          return String.fromCharCode(o);
        });
        return {
          title: title,
          meta: [{
            hid: "description",
            name: "description",
            content: o
          }, {
            hid: "og:title",
            property: "og:title",
            content: title + " — Pixelflakes"
          }, {
            hid: "og:url",
            property: "og:url",
            content: d
          }, {
            hid: "og:description",
            property: "og:description",
            content: o
          }, {
            hid: "twitter:title",
            name: "twitter:title",
            content: title + " — Pixelflakes"
          }, {
            hid: "twitter:url",
            name: "twitter:url",
            content: d
          }, {
            hid: "twitter:description",
            name: "twitter:description",
            content: o
          }],
          link: [{
            rel: "canonical",
            href: d
          }]
        };
      }
    };
  },
  526: function (t, o, e) {
    "use strict";

    e(522);
    e(16);
    e(15);
    e(20);
    e(21);
    e(18);
    e(13);
    var n = e(5);
    e(9);
    e(57);
    e(49);
    e(566);
    e(569);
    e(217);
    var r = e(3);
    var l = e(17);
    var c = e(219);
    function h(t, o) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        if (o) {
          n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          });
        }
        e.push.apply(e, n);
      }
      return e;
    }
    function v(t) {
      for (var o = 1; o < arguments.length; o++) {
        var e = arguments[o] ?? {};
        if (o % 2) {
          h(Object(e), true).forEach(function (o) {
            Object(n.a)(t, o, e[o]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(t, Object.getOwnPropertyDescriptors(e));
        } else {
          h(Object(e)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o));
          });
        }
      }
      return t;
    }
    var f = {
      name: "BaseButtonComponent",
      components: {
        Arrow: e.n(c).a
      },
      props: {
        title: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        },
        target: {
          type: String,
          required: false,
          default: ""
        },
        light: {
          type: Boolean,
          required: false,
          default: false
        },
        type: {
          type: String,
          require: false,
          default: ""
        }
      },
      computed: v(v({}, Object(l.c)("app", ["windowSize"])), {}, {
        tag: function () {
          if (this.type === "button") {
            return "button";
          } else if (this.target === "_blank") {
            return "a";
          } else {
            return "NuxtLink";
          }
        },
        link: function () {
          if (this.type !== "button") {
            if (this.target === "_blank" || this.url.split("#")[1]) {
              return this.url;
            } else {
              return new URL(this.url).pathname;
            }
          }
        }
      }),
      methods: {
        onClick: function () {},
        onMouseEnter: function () {
          if (!this.$device.isMobileOrTablet) {
            r.a.to(this.$refs.icon, {
              scale: 0.12,
              duration: 0.7,
              ease: "expo.out"
            });
            r.a.to(this.$refs.square, {
              backgroundColor: `rgba(${this.light ? "228, 221, 212" : "36, 35, 32"}, 1)`,
              duration: 0.7,
              ease: "expo.out"
            });
            r.a.to(this.$refs.title, {
              x: -this.windowSize.width * 0.017,
              duration: 0.7,
              ease: "expo.out"
            });
            r.a.to(this.$refs.line, {
              scaleX: 0,
              duration: 0.7,
              ease: "expo.out"
            });
          }
        },
        onMouseLeave: function () {
          if (!this.$device.isMobileOrTablet) {
            r.a.to(this.$refs.icon, {
              scale: 1,
              duration: 0.7,
              ease: "expo.out"
            });
            r.a.to(this.$refs.square, {
              backgroundColor: `rgba(${this.light ? "228, 221, 212" : "36, 35, 32"}, 0)`,
              duration: 0.7,
              ease: "expo.out"
            });
            r.a.to(this.$refs.title, {
              x: 0,
              duration: 0.7,
              ease: "expo.out"
            });
            r.a.to(this.$refs.line, {
              scaleX: 1,
              duration: 0.7,
              ease: "expo.out"
            });
          }
        }
      }
    };
    e(570);
    var d = e(14);
    var component = Object(d.a)(f, function () {
      var t = this;
      var o = t._self._c;
      return o(t.tag, {
        tag: "button",
        staticClass: "base-button",
        class: {
          "is-light": t.light
        },
        attrs: {
          to: t.link,
          href: t.link,
          target: t.target
        },
        on: {
          click: t.onClick,
          mouseenter: t.onMouseEnter,
          mouseleave: t.onMouseLeave
        }
      }, [o("div", {
        ref: "icon",
        staticClass: "icon"
      }, [o("Arrow", {
        staticClass: "arrow"
      }), t._v(" "), o("div", {
        ref: "square",
        staticClass: "square"
      })], 1), t._v(" "), o("div", {
        ref: "title",
        staticClass: "title"
      }, [t._v("\n    " + t._s(t.title) + "\n    "), o("div", {
        ref: "line",
        staticClass: "line"
      })])]);
    }, [], false, null, "bea92d2a", null);
    o.a = component.exports;
  },
  527: function (t, o, e) {
    "use strict";

    e(16);
    e(15);
    e(20);
    e(21);
    e(18);
    e(9);
    e(13);
    var n = e(5);
    var r = e(17);
    var l = e(597);
    var c = e.n(l);
    e(522);
    var h = {
      name: "NewsletterComponent",
      components: {
        BaseButton: e(526).a
      },
      computed: {
        link: function () {
          return {
            title: "Sign up",
            url: "#"
          };
        }
      }
    };
    e(598);
    var v = e(14);
    var f = Object(v.a)(h, function () {
      var t = this;
      var o = t._self._c;
      return o("div", {
        staticClass: "newsletter"
      }, [o("p", {
        staticClass: "text"
      }, [t._v("Sign up for our newsletter to receive updates and content.")]), t._v(" "), o("h3", {
        staticClass: "title"
      }, [t._v("Newsletter")]), t._v(" "), o("form", {
        staticClass: "form",
        attrs: {
          action: "https://pixelflakes.us5.list-manage.com/subscribe/post?u=b4d0fe1d8eb3dae74f73ba2d1&id=d1d1424303&f_id=00a00febf0",
          method: "post",
          target: "_self"
        }
      }, [o("input", {
        staticClass: "input",
        attrs: {
          type: "email",
          value: "",
          name: "EMAIL",
          placeholder: "Email Address",
          required: ""
        }
      }), t._v(" "), o("BaseButton", t._b({
        attrs: {
          type: "button"
        }
      }, "BaseButton", t.link, false))], 1)]);
    }, [], false, null, "4d54a738", null).exports;
    var d = e(311);
    function w(t, o) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        if (o) {
          n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          });
        }
        e.push.apply(e, n);
      }
      return e;
    }
    var m = {
      name: "AppFooterComponent",
      components: {
        ExoApe: c.a,
        Newsletter: f,
        Socials: d.a
      },
      props: {
        full: {
          type: Boolean,
          required: false,
          default: true
        }
      },
      computed: function (t) {
        for (var o = 1; o < arguments.length; o++) {
          var e = arguments[o] ?? {};
          if (o % 2) {
            w(Object(e), true).forEach(function (o) {
              Object(n.a)(t, o, e[o]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(t, Object.getOwnPropertyDescriptors(e));
          } else {
            w(Object(e)).forEach(function (o) {
              Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o));
            });
          }
        }
        return t;
      }({
        video: function () {
          var t;
          if ((t = this.options) === null || t === undefined || (t = t.footer) === null || t === undefined) {
            return undefined;
          } else {
            return t.video.url;
          }
        },
        text: function () {
          var t;
          if ((t = this.options) === null || t === undefined || (t = t.footer) === null || t === undefined) {
            return undefined;
          } else {
            return t.text;
          }
        },
        copyright: function () {
          var t;
          if ((t = this.options) === null || t === undefined || (t = t.footer) === null || t === undefined) {
            return undefined;
          } else {
            return t.copyright;
          }
        },
        link: function () {
          return {
            title: "Work with us",
            url: "#"
          };
        }
      }, Object(r.c)("globalData", ["menu", "options"])),
      methods: {
        onClick: function () {
          this.$router.push("/contact");
        }
      }
    };
    var y = m;
    e(600);
    var x = Object(v.a)(y, function () {
      var t = this;
      var o = t._self._c;
      return o("footer", {
        staticClass: "footer",
        class: {
          "is-full": t.full
        }
      }, [t.full ? o("div", {
        staticClass: "row"
      }, [o("div", {
        staticClass: "media"
      }, [o("video", {
        attrs: {
          autoplay: "",
          muted: "",
          loop: "",
          playsinline: ""
        },
        domProps: {
          muted: true
        }
      }, [o("source", {
        attrs: {
          src: t.video,
          type: "video/mp4"
        }
      })])]), t._v(" "), o("div", {
        staticClass: "text",
        domProps: {
          innerHTML: t._s(t.text)
        }
      }), t._v(" "), o("div", {
        staticClass: "contact",
        on: {
          click: t.onClick
        }
      }, [t._m(0)])]) : t._e(), t._v(" "), o("div", {
        staticClass: "row"
      }, [o("ul", {
        staticClass: "nav"
      }, t._l(t.menu, function (e) {
        return o("li", {
          key: e.slug,
          staticClass: "nav-item"
        }, [o("NuxtLink", {
          staticClass: "nav-link",
          attrs: {
            to: `/${e.slug}/`
          }
        }, [t._v("\n          " + t._s(e.title) + "\n        ")])], 1);
      }), 0), t._v(" "), o("Socials"), t._v(" "), o("Newsletter")], 1), t._v(" "), o("ul", {
        staticClass: "bottom"
      }, [o("li", {
        staticClass: "bottom-item"
      }, [t._v("\n      " + t._s(t.copyright) + "\n    ")]), t._v(" "), o("li", {
        staticClass: "bottom-item"
      }, [o("NuxtLink", {
        staticClass: "bottom-link",
        attrs: {
          to: "/privacy-notice/"
        }
      }, [t._v("\n        Privacy Notice\n      ")])], 1), t._v(" "), o("li", {
        staticClass: "bottom-item"
      }, [o("ExoApe", {
        staticClass: "exoape-svg"
      }), t._v(" "), o("a", {
        staticClass: "bottom-link",
        attrs: {
          href: "https://exoape.com",
          target: "_blank",
          rel: "noopener"
        }
      }, [t._v("\n        Handcrafted by exo ape\n      ")])], 1)])]);
    }, [function () {
      var t = this;
      var o = t._self._c;
      return o("div", {
        staticClass: "button"
      }, [o("div", {
        staticClass: "arrow"
      }, [t._v("↗")]), t._v(" "), o("div", {
        staticClass: "label"
      }, [t._v("Work with us")]), t._v(" "), o("div", {
        staticClass: "arrow"
      }, [t._v("↗")])]);
    }], false, null, "3c177c28", null);
    o.a = x.exports;
  },
  529: function (t, o, e) {
    var content = e(533);
    if (content.__esModule) {
      content = content.default;
    }
    if (typeof content == "string") {
      content = [[t.i, content, ""]];
    }
    if (content.locals) {
      t.exports = content.locals;
    }
    (0, e(36).default)("4d6a8a57", content, true, {
      sourceMap: false
    });
  },
  532: function (t, o, e) {
    "use strict";

    e(529);
  },
  533: function (t, o, e) {
    var n = e(35)(function (i) {
      return i[1];
    });
    n.push([t.i, "[data-v-31bf8ba3]:root{--color-white:#fff;--color-white-02:hsla(0,0%,100%,.2);--color-black:#040508;--color-sand:#e4ddd4;--color-sand-02:hsla(34,23%,86%,.2);--color-sand-06:hsla(34,23%,86%,.6);--color-sand-light:#faf9f5;--color-grey-dark:#242320;--color-grey-dark-02:rgba(36,35,32,.2);--color-grey-dark-04:rgba(36,35,32,.4);--color-grey-dark-05:rgba(36,35,32,.5);--color-grey-dark-06:rgba(36,35,32,.6);--color-grey-dark-08:rgba(36,35,32,.8);--font-f-at-hauss-std:\"At Hauss Std\";--font-f-at-hauss-std-retina:\"At Hauss Std Retina\";--font-s-h1:25.6vw;--font-lh-h1:25.6vw;--font-ls-h1:-1.2vw;--font-s-h2:17.0666666667vw;--font-lh-h2:18.6666666667vw;--font-ls-h2:-0.6666666667vw;--font-s-h3:8.5333333333vw;--font-lh-h3:10.6666666667vw;--font-ls-h3:-0.2666666667vw;--font-s-h3-m:12.8vw;--font-lh-h3-m:14.9333333333vw;--font-ls-h3-m:-0.5333333333vw;--font-s-h4:5.3333333333vw;--font-lh-h4:6.9333333333vw;--font-ls-h4:-0.1333333333vw;--font-s-p1:4.2666666667vw;--font-lh-p1:5.8666666667vw;--font-ls-p1:0vw;--font-s-p2:4.2666666667vw;--font-lh-p2:5.3333333333vw;--font-ls-p2:0vw;--font-s-label:4vw;--font-lh-label:4vw;--font-ls-label:0.0533333333vw;--font-s-nav:4.2666666667vw;--font-lh-nav:5.8666666667vw;--font-ls-nav:0vw;--font-s-button:5.3333333333vw;--font-lh-button:6.9333333333vw;--font-ls-button:-0.1333333333vw}@media(min-width:601px){[data-v-31bf8ba3]:root{--font-s-h1:6.6666666667vw;--font-lh-h1:6.6666666667vw;--font-ls-h1:-0.3125vw;--font-s-h2:4.4444444444vw;--font-lh-h2:4.8611111111vw;--font-ls-h2:-0.1736111111vw;--font-s-h3:2.2222222222vw;--font-lh-h3:2.7777777778vw;--font-ls-h3:-0.0694444444vw;--font-s-h3-m:3.3333333333vw;--font-lh-h3-m:3.8888888889vw;--font-ls-h3-m:-0.1388888889vw;--font-s-h4:1.3888888889vw;--font-lh-h4:1.8055555556vw;--font-ls-h4:-0.0347222222vw;--font-s-p1:1.1111111111vw;--font-lh-p1:1.5277777778vw;--font-ls-p1:0vw;--font-s-p2:1.1111111111vw;--font-lh-p2:1.3888888889vw;--font-ls-p2:0vw;--font-s-label:1.0416666667vw;--font-lh-label:1.0416666667vw;--font-ls-label:0.0138888889vw;--font-s-nav:1.1111111111vw;--font-lh-nav:1.5277777778vw;--font-ls-nav:0vw;--font-s-button:1.3888888889vw;--font-lh-button:1.8055555556vw;--font-ls-button:-0.0347222222vw}}.wrapper[data-v-31bf8ba3]{background:#fff;background:var(--color-white);bottom:0;left:0;overflow:hidden;overflow-y:auto;position:fixed;right:0;top:0;width:100%}", ""]);
    n.locals = {};
    t.exports = n;
  },
  536: function (t, o, e) {
    var content = e(571);
    if (content.__esModule) {
      content = content.default;
    }
    if (typeof content == "string") {
      content = [[t.i, content, ""]];
    }
    if (content.locals) {
      t.exports = content.locals;
    }
    (0, e(36).default)("585d9d5f", content, true, {
      sourceMap: false
    });
  },
  549: function (t, o, e) {
    var content = e(599);
    if (content.__esModule) {
      content = content.default;
    }
    if (typeof content == "string") {
      content = [[t.i, content, ""]];
    }
    if (content.locals) {
      t.exports = content.locals;
    }
    (0, e(36).default)("0b0699d7", content, true, {
      sourceMap: false
    });
  },
  550: function (t, o, e) {
    var content = e(601);
    if (content.__esModule) {
      content = content.default;
    }
    if (typeof content == "string") {
      content = [[t.i, content, ""]];
    }
    if (content.locals) {
      t.exports = content.locals;
    }
    (0, e(36).default)("6c8d40ec", content, true, {
      sourceMap: false
    });
  },
  570: function (t, o, e) {
    "use strict";

    e(536);
  },
  571: function (t, o, e) {
    var n = e(35)(function (i) {
      return i[1];
    });
    n.push([t.i, "[data-v-bea92d2a]:root{--color-white:#fff;--color-white-02:hsla(0,0%,100%,.2);--color-black:#040508;--color-sand:#e4ddd4;--color-sand-02:hsla(34,23%,86%,.2);--color-sand-06:hsla(34,23%,86%,.6);--color-sand-light:#faf9f5;--color-grey-dark:#242320;--color-grey-dark-02:rgba(36,35,32,.2);--color-grey-dark-04:rgba(36,35,32,.4);--color-grey-dark-05:rgba(36,35,32,.5);--color-grey-dark-06:rgba(36,35,32,.6);--color-grey-dark-08:rgba(36,35,32,.8);--font-f-at-hauss-std:\"At Hauss Std\";--font-f-at-hauss-std-retina:\"At Hauss Std Retina\";--font-s-h1:25.6vw;--font-lh-h1:25.6vw;--font-ls-h1:-1.2vw;--font-s-h2:17.0666666667vw;--font-lh-h2:18.6666666667vw;--font-ls-h2:-0.6666666667vw;--font-s-h3:8.5333333333vw;--font-lh-h3:10.6666666667vw;--font-ls-h3:-0.2666666667vw;--font-s-h3-m:12.8vw;--font-lh-h3-m:14.9333333333vw;--font-ls-h3-m:-0.5333333333vw;--font-s-h4:5.3333333333vw;--font-lh-h4:6.9333333333vw;--font-ls-h4:-0.1333333333vw;--font-s-p1:4.2666666667vw;--font-lh-p1:5.8666666667vw;--font-ls-p1:0vw;--font-s-p2:4.2666666667vw;--font-lh-p2:5.3333333333vw;--font-ls-p2:0vw;--font-s-label:4vw;--font-lh-label:4vw;--font-ls-label:0.0533333333vw;--font-s-nav:4.2666666667vw;--font-lh-nav:5.8666666667vw;--font-ls-nav:0vw;--font-s-button:5.3333333333vw;--font-lh-button:6.9333333333vw;--font-ls-button:-0.1333333333vw}@media(min-width:601px){[data-v-bea92d2a]:root{--font-s-h1:6.6666666667vw;--font-lh-h1:6.6666666667vw;--font-ls-h1:-0.3125vw;--font-s-h2:4.4444444444vw;--font-lh-h2:4.8611111111vw;--font-ls-h2:-0.1736111111vw;--font-s-h3:2.2222222222vw;--font-lh-h3:2.7777777778vw;--font-ls-h3:-0.0694444444vw;--font-s-h3-m:3.3333333333vw;--font-lh-h3-m:3.8888888889vw;--font-ls-h3-m:-0.1388888889vw;--font-s-h4:1.3888888889vw;--font-lh-h4:1.8055555556vw;--font-ls-h4:-0.0347222222vw;--font-s-p1:1.1111111111vw;--font-lh-p1:1.5277777778vw;--font-ls-p1:0vw;--font-s-p2:1.1111111111vw;--font-lh-p2:1.3888888889vw;--font-ls-p2:0vw;--font-s-label:1.0416666667vw;--font-lh-label:1.0416666667vw;--font-ls-label:0.0138888889vw;--font-s-nav:1.1111111111vw;--font-lh-nav:1.5277777778vw;--font-ls-nav:0vw;--font-s-button:1.3888888889vw;--font-lh-button:1.8055555556vw;--font-ls-button:-0.0347222222vw}}.base-button[data-v-bea92d2a]{align-items:center;color:currentColor;display:flex}.arrow[data-v-bea92d2a]{height:2.6666666667vw;width:2.6666666667vw}@media(min-width:601px){.arrow[data-v-bea92d2a]{height:.6944444444vw;width:.6944444444vw}}.icon[data-v-bea92d2a]{align-items:center;display:flex;height:10.9333333333vw;justify-content:center;margin-right:3.7333333333vw;position:relative;width:10.9333333333vw}@media(min-width:601px){.icon[data-v-bea92d2a]{height:2.8472222222vw;margin-right:.9722222222vw;width:2.8472222222vw;will-change:transform}}.square[data-v-bea92d2a]{border:1px solid rgba(36,35,32,.2);border:1px solid var(--color-grey-dark-02);bottom:0;left:0;position:absolute;right:0;top:0}.is-light .square[data-v-bea92d2a]{border-color:hsla(34,23%,86%,.2);border-color:var(--color-sand-02)}.title[data-v-bea92d2a]{font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:5.3333333333vw;font-size:var(--font-s-button);font-weight:400;letter-spacing:-.1333333333vw;letter-spacing:var(--font-ls-button);line-height:6.9333333333vw;line-height:var(--font-lh-button);position:relative}.line[data-v-bea92d2a]{background:currentColor;display:block;height:1px;margin-top:-2px;transform-origin:right}", ""]);
    n.locals = {};
    t.exports = n;
  },
  597: function (t, o, e) {
    var n = e(69);
    var r = e(70);
    var l = ["class", "staticClass", "style", "staticStyle", "attrs"];
    function c(t, o) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        if (o) {
          n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          });
        }
        e.push.apply(e, n);
      }
      return e;
    }
    e(16);
    e(29);
    e(15);
    e(20);
    e(21);
    e(18);
    e(9);
    e(13);
    t.exports = {
      functional: true,
      render: function (t, o) {
        var e = o._c;
        o._v;
        var data = o.data;
        var h = o.children;
        var v = h === undefined ? [] : h;
        var f = data.class;
        var d = data.staticClass;
        var style = data.style;
        var w = data.staticStyle;
        var m = data.attrs;
        var y = m === undefined ? {} : m;
        var x = r(data, l);
        return e("svg", function (t) {
          for (var o = 1; o < arguments.length; o++) {
            var e = arguments[o] ?? {};
            if (o % 2) {
              c(Object(e), true).forEach(function (o) {
                n(t, o, e[o]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(t, Object.getOwnPropertyDescriptors(e));
            } else {
              c(Object(e)).forEach(function (o) {
                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o));
              });
            }
          }
          return t;
        }({
          class: [f, d],
          style: [style, w],
          attrs: Object.assign({
            viewBox: "0 0 29 29",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, y)
        }, x), v.concat([e("path", {
          attrs: {
            d: "M26.3484 4.61374C26.3673 4.56416 26.3973 4.56416 26.4151 4.61374L26.9962 6.16817C27.0743 6.34527 27.2167 6.48681 27.395 6.56477L28.9639 7.13983C29.0128 7.15746 29.0128 7.18721 28.9639 7.20593L27.395 7.781C27.2163 7.85841 27.0737 8.00013 26.9962 8.17759L26.4151 9.72763C26.3973 9.7772 26.3673 9.7772 26.3484 9.72763L25.7684 8.17319C25.6909 7.99572 25.5483 7.854 25.3696 7.77659L23.8007 7.20153C23.7518 7.1828 23.7518 7.15306 23.8007 7.13543L25.3696 6.56036C25.548 6.4824 25.6903 6.34086 25.7684 6.16377L26.3484 4.61374ZM22.783 3.26972C22.7361 3.37593 22.6503 3.46056 22.543 3.50657L21.6019 3.85249C21.573 3.86351 21.573 3.88114 21.6019 3.89215L22.543 4.23697C22.6507 4.28306 22.7365 4.36818 22.783 4.47493L23.1308 5.40803C23.1419 5.43667 23.1596 5.43667 23.1708 5.40803L23.5196 4.47493C23.566 4.3685 23.6514 4.28347 23.7585 4.23697L24.6996 3.88885C24.7296 3.87783 24.7296 3.8602 24.6996 3.84919L23.7585 3.50327C23.6517 3.45685 23.5665 3.3723 23.5196 3.26641L23.1708 2.33331C23.1596 2.30356 23.1419 2.30356 23.1308 2.33331L22.783 3.26972ZM24.5729 20.179C24.4118 23.8222 21.0375 26.9443 19.0398 28.4811C18.6025 28.816 18.0657 28.998 17.5132 28.9989C17.2237 28.999 16.9365 28.9491 16.6643 28.8513C11.1357 26.8683 4.25148 22.3669 0.791617 19.1622C0.516816 18.9091 0.303541 18.5974 0.167858 18.2507C0.0321748 17.9039 -0.0223792 17.5312 0.00831121 17.1605C0.61051 9.66924 7.06138 0 13.0889 0C16.5566 0 17.4221 1.13581 18.9965 4.38349C19.5131 5.44439 20.2686 6.35215 20.9964 7.22907C22.7197 9.29578 24.3474 11.249 21.8853 14.4692C23.7585 16.2373 24.6618 18.1586 24.5729 20.179ZM20.6997 14.6289C20.9731 14.4086 21.2686 13.8875 21.4119 13.5019C20.0909 14.1287 19.4998 13.2562 18.5232 13.4611C16.9288 13.7916 16.3466 14.5176 14.1489 14.0296C14.8266 14.4901 15.7722 15.0475 16.5455 15.2888C15.5722 16.2649 14.9511 17.5604 14.6 19.2812C15.5155 19.4035 16.5766 19.1248 17.761 18.8637C17.3076 18.1399 17.0854 17.1726 17.0065 16.0566C17.4527 17.0723 18.1605 17.9537 19.0587 18.6125C20.4731 18.3922 22.0308 18.3811 23.6974 19.1633C22.8874 15.9994 20.6997 14.6289 20.6997 14.6289ZM2.97487 10.1529C3.37559 10.9314 3.80002 11.6992 4.24815 12.4564C5.75031 9.19332 7.77913 5.95666 11.0957 3.35565C8.07578 6.57799 6.24696 10.1925 5.14145 13.9029C5.3844 14.2797 5.63328 14.6531 5.88809 15.0233C6.90694 11.9838 8.39688 8.92342 11.0823 6.29156C8.69909 9.46984 7.42247 12.8839 6.80472 16.3166C7.05249 16.6471 7.30692 16.9853 7.56469 17.3158C8.12022 14.5859 9.07574 11.7998 11.0701 9.23298C9.37462 12.2791 8.64465 15.4023 8.48577 18.4572C9.41462 19.5713 10.4009 20.6465 11.4445 21.6828C12.3001 22.5311 13.1834 23.3412 14.0944 24.1131L14.1522 24.134C12.7667 21.8756 11.3812 19.1369 10.7079 16.7066C11.5112 14.7236 12.6223 12.5842 13.9422 11.8891C15.2622 11.1939 16.871 12.7979 18.6276 12.5413C19.5553 12.4058 20.642 10.8469 21.8253 12.4619C23.7907 10.534 18.9298 7.12882 17.2265 3.09786C16.4843 1.33521 14.9877 0.808616 12.7656 0.909968C7.67913 1.13471 3.33707 9.37179 2.97487 10.1529ZM17.3488 28.0416C11.1087 23.7975 5.97956 18.1389 2.38711 11.5354C2.06955 12.355 1.79913 13.1918 1.57714 14.0417C3.28152 16.8509 4.76369 18.5111 7.25026 21.0846C4.79702 19.4222 2.89376 17.4392 1.25604 15.4342C1.18271 15.8088 1.07383 16.4081 0.983829 17.1704C0.956565 17.4044 0.985316 17.6414 1.06775 17.8623C1.15018 18.0832 1.28397 18.2817 1.45826 18.4417C6.05544 22.6617 11.4586 25.9258 17.3488 28.0416ZM23.7152 20.2297C21.4264 18.5607 17.5299 20.287 14.1511 20.5514C16.8399 21.3567 19.7864 20.0887 22.3808 20.8819C22.0119 22.6049 21.1908 24.4006 20.1964 26.2238C21.8575 24.6297 23.2319 22.584 23.7152 20.2297ZM19.5887 16.2373C19.111 16.1159 18.6496 15.9384 18.2143 15.7085L17.7899 16.4797C18.091 16.6295 19.4109 16.8311 19.9664 16.7925C20.046 16.7873 20.1205 16.7518 20.1742 16.6934C20.5342 16.3045 20.8175 15.8121 21.0819 15.3593C20.6622 15.6933 20.2078 15.9821 19.7264 16.2208C19.684 16.2426 19.6351 16.2485 19.5887 16.2373Z",
            fill: "currentColor"
          }
        })]));
      }
    };
  },
  598: function (t, o, e) {
    "use strict";

    e(549);
  },
  599: function (t, o, e) {
    var n = e(35)(function (i) {
      return i[1];
    });
    n.push([t.i, "[data-v-4d54a738]:root{--color-white:#fff;--color-white-02:hsla(0,0%,100%,.2);--color-black:#040508;--color-sand:#e4ddd4;--color-sand-02:hsla(34,23%,86%,.2);--color-sand-06:hsla(34,23%,86%,.6);--color-sand-light:#faf9f5;--color-grey-dark:#242320;--color-grey-dark-02:rgba(36,35,32,.2);--color-grey-dark-04:rgba(36,35,32,.4);--color-grey-dark-05:rgba(36,35,32,.5);--color-grey-dark-06:rgba(36,35,32,.6);--color-grey-dark-08:rgba(36,35,32,.8);--font-f-at-hauss-std:\"At Hauss Std\";--font-f-at-hauss-std-retina:\"At Hauss Std Retina\";--font-s-h1:25.6vw;--font-lh-h1:25.6vw;--font-ls-h1:-1.2vw;--font-s-h2:17.0666666667vw;--font-lh-h2:18.6666666667vw;--font-ls-h2:-0.6666666667vw;--font-s-h3:8.5333333333vw;--font-lh-h3:10.6666666667vw;--font-ls-h3:-0.2666666667vw;--font-s-h3-m:12.8vw;--font-lh-h3-m:14.9333333333vw;--font-ls-h3-m:-0.5333333333vw;--font-s-h4:5.3333333333vw;--font-lh-h4:6.9333333333vw;--font-ls-h4:-0.1333333333vw;--font-s-p1:4.2666666667vw;--font-lh-p1:5.8666666667vw;--font-ls-p1:0vw;--font-s-p2:4.2666666667vw;--font-lh-p2:5.3333333333vw;--font-ls-p2:0vw;--font-s-label:4vw;--font-lh-label:4vw;--font-ls-label:0.0533333333vw;--font-s-nav:4.2666666667vw;--font-lh-nav:5.8666666667vw;--font-ls-nav:0vw;--font-s-button:5.3333333333vw;--font-lh-button:6.9333333333vw;--font-ls-button:-0.1333333333vw}@media(min-width:601px){[data-v-4d54a738]:root{--font-s-h1:6.6666666667vw;--font-lh-h1:6.6666666667vw;--font-ls-h1:-0.3125vw;--font-s-h2:4.4444444444vw;--font-lh-h2:4.8611111111vw;--font-ls-h2:-0.1736111111vw;--font-s-h3:2.2222222222vw;--font-lh-h3:2.7777777778vw;--font-ls-h3:-0.0694444444vw;--font-s-h3-m:3.3333333333vw;--font-lh-h3-m:3.8888888889vw;--font-ls-h3-m:-0.1388888889vw;--font-s-h4:1.3888888889vw;--font-lh-h4:1.8055555556vw;--font-ls-h4:-0.0347222222vw;--font-s-p1:1.1111111111vw;--font-lh-p1:1.5277777778vw;--font-ls-p1:0vw;--font-s-p2:1.1111111111vw;--font-lh-p2:1.3888888889vw;--font-ls-p2:0vw;--font-s-label:1.0416666667vw;--font-lh-label:1.0416666667vw;--font-ls-label:0.0138888889vw;--font-s-nav:1.1111111111vw;--font-lh-nav:1.5277777778vw;--font-ls-nav:0vw;--font-s-button:1.3888888889vw;--font-lh-button:1.8055555556vw;--font-ls-button:-0.0347222222vw}}.text[data-v-4d54a738]{font-family:\"At Hauss Std Retina\";font-family:var(--font-f-at-hauss-std-retina);font-size:4.2666666667vw;font-size:var(--font-s-p1);font-weight:400;letter-spacing:0;letter-spacing:var(--font-ls-p1);line-height:5.8666666667vw;line-height:var(--font-lh-p1);margin-bottom:9.3333333333vw;width:69.3333333333vw}@media(min-width:601px){.text[data-v-4d54a738]{margin-bottom:3.4722222222vw;width:18.0555555556vw}}.title[data-v-4d54a738]{font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:4vw;font-size:var(--font-s-label);font-weight:500;letter-spacing:.0533333333vw;letter-spacing:var(--font-ls-label);line-height:4vw;line-height:var(--font-lh-label);text-transform:uppercase}.form[data-v-4d54a738]{display:flex}.input[data-v-4d54a738]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-bottom:1px solid rgba(36,35,32,.2);border-bottom:1px solid var(--color-grey-dark-02);font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:5.3333333333vw;font-size:var(--font-s-h4);font-weight:400;letter-spacing:-.1333333333vw;letter-spacing:var(--font-ls-h4);line-height:6.9333333333vw;line-height:var(--font-lh-h4);line-height:16vw;margin-right:5.3333333333vw;outline:0;padding:0;width:52vw}@media(min-width:601px){.input[data-v-4d54a738]{line-height:4.1666666667vw;margin-right:1.3888888889vw;width:18.0555555556vw}}.input[data-v-4d54a738]::-moz-placeholder{color:rgba(36,35,32,.5);color:var(--color-grey-dark-05);font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:5.3333333333vw;font-size:var(--font-s-h4);font-weight:400;letter-spacing:-.1333333333vw;letter-spacing:var(--font-ls-h4);line-height:6.9333333333vw;line-height:var(--font-lh-h4)}.input[data-v-4d54a738]::placeholder{color:rgba(36,35,32,.5);color:var(--color-grey-dark-05);font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:5.3333333333vw;font-size:var(--font-s-h4);font-weight:400;letter-spacing:-.1333333333vw;letter-spacing:var(--font-ls-h4);line-height:6.9333333333vw;line-height:var(--font-lh-h4)}", ""]);
    n.locals = {};
    t.exports = n;
  },
  600: function (t, o, e) {
    "use strict";

    e(550);
  },
  601: function (t, o, e) {
    var n = e(35)(function (i) {
      return i[1];
    });
    n.push([t.i, "[data-v-3c177c28]:root{--color-white:#fff;--color-white-02:hsla(0,0%,100%,.2);--color-black:#040508;--color-sand:#e4ddd4;--color-sand-02:hsla(34,23%,86%,.2);--color-sand-06:hsla(34,23%,86%,.6);--color-sand-light:#faf9f5;--color-grey-dark:#242320;--color-grey-dark-02:rgba(36,35,32,.2);--color-grey-dark-04:rgba(36,35,32,.4);--color-grey-dark-05:rgba(36,35,32,.5);--color-grey-dark-06:rgba(36,35,32,.6);--color-grey-dark-08:rgba(36,35,32,.8);--font-f-at-hauss-std:\"At Hauss Std\";--font-f-at-hauss-std-retina:\"At Hauss Std Retina\";--font-s-h1:25.6vw;--font-lh-h1:25.6vw;--font-ls-h1:-1.2vw;--font-s-h2:17.0666666667vw;--font-lh-h2:18.6666666667vw;--font-ls-h2:-0.6666666667vw;--font-s-h3:8.5333333333vw;--font-lh-h3:10.6666666667vw;--font-ls-h3:-0.2666666667vw;--font-s-h3-m:12.8vw;--font-lh-h3-m:14.9333333333vw;--font-ls-h3-m:-0.5333333333vw;--font-s-h4:5.3333333333vw;--font-lh-h4:6.9333333333vw;--font-ls-h4:-0.1333333333vw;--font-s-p1:4.2666666667vw;--font-lh-p1:5.8666666667vw;--font-ls-p1:0vw;--font-s-p2:4.2666666667vw;--font-lh-p2:5.3333333333vw;--font-ls-p2:0vw;--font-s-label:4vw;--font-lh-label:4vw;--font-ls-label:0.0533333333vw;--font-s-nav:4.2666666667vw;--font-lh-nav:5.8666666667vw;--font-ls-nav:0vw;--font-s-button:5.3333333333vw;--font-lh-button:6.9333333333vw;--font-ls-button:-0.1333333333vw}@media(min-width:601px){[data-v-3c177c28]:root{--font-s-h1:6.6666666667vw;--font-lh-h1:6.6666666667vw;--font-ls-h1:-0.3125vw;--font-s-h2:4.4444444444vw;--font-lh-h2:4.8611111111vw;--font-ls-h2:-0.1736111111vw;--font-s-h3:2.2222222222vw;--font-lh-h3:2.7777777778vw;--font-ls-h3:-0.0694444444vw;--font-s-h3-m:3.3333333333vw;--font-lh-h3-m:3.8888888889vw;--font-ls-h3-m:-0.1388888889vw;--font-s-h4:1.3888888889vw;--font-lh-h4:1.8055555556vw;--font-ls-h4:-0.0347222222vw;--font-s-p1:1.1111111111vw;--font-lh-p1:1.5277777778vw;--font-ls-p1:0vw;--font-s-p2:1.1111111111vw;--font-lh-p2:1.3888888889vw;--font-ls-p2:0vw;--font-s-label:1.0416666667vw;--font-lh-label:1.0416666667vw;--font-ls-label:0.0138888889vw;--font-s-nav:1.1111111111vw;--font-lh-nav:1.5277777778vw;--font-ls-nav:0vw;--font-s-button:1.3888888889vw;--font-lh-button:1.8055555556vw;--font-ls-button:-0.0347222222vw}}.footer[data-v-3c177c28]{overflow:hidden}.row[data-v-3c177c28]{margin-left:5.3333333333vw;margin-right:5.3333333333vw}@media(min-width:601px){.row[data-v-3c177c28]{align-items:flex-start;display:grid;margin-left:2.0833333333vw;margin-right:2.0833333333vw;grid-column-gap:5.3333333333vw;grid-template-columns:repeat(6,1fr)}}@media(min-width:601px)and (min-width:601px){.row[data-v-3c177c28]{grid-column-gap:1.3888888889vw;grid-template-columns:repeat(15,1fr)}}@media(max-width:600px){.media[data-v-3c177c28]{margin-bottom:3.7333333333vw}}@media(min-width:601px){.media[data-v-3c177c28]{grid-column:3/10}}.text[data-v-3c177c28]{font-family:\"At Hauss Std Retina\";font-family:var(--font-f-at-hauss-std-retina);font-size:4.2666666667vw;font-size:var(--font-s-p1);font-weight:400;letter-spacing:0;letter-spacing:var(--font-ls-p1);line-height:5.8666666667vw;line-height:var(--font-lh-p1)}@media(max-width:600px){.text[data-v-3c177c28]{text-indent:15.7333333333vw}}@media(min-width:601px){.text[data-v-3c177c28]{grid-column:10/14;text-indent:6.4583333333vw}}.contact[data-v-3c177c28]{cursor:pointer}@media(max-width:600px){.contact[data-v-3c177c28]{display:flex;margin:9.3333333333vw 0 18.1333333333vw}}@media(min-width:601px){.contact[data-v-3c177c28]{align-items:center;aspect-ratio:1/1;background:#242320;background:var(--color-grey-dark);color:#e4ddd4;color:var(--color-sand);display:flex;grid-column:10/14;justify-content:center;margin-top:1.3888888889vw}.contact:hover .label[data-v-3c177c28]{transform:translateX(-1.25vw)}.contact:hover .label[data-v-3c177c28]:after{transform:scaleX(0);transform-origin:left}.contact:hover .arrow[data-v-3c177c28]:first-child{opacity:0;transform:scale(0)}.contact:hover .arrow[data-v-3c177c28]:last-child{opacity:1;transform:scale(1)}}.button[data-v-3c177c28]{display:flex;font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:5.3333333333vw;font-size:var(--font-s-button);font-weight:400;letter-spacing:-.1333333333vw;letter-spacing:var(--font-ls-button);line-height:6.9333333333vw;line-height:var(--font-lh-button)}.button[data-v-3c177c28],.label[data-v-3c177c28]{position:relative}.label[data-v-3c177c28],.label[data-v-3c177c28]:after{will-change:transform}.label[data-v-3c177c28]:after{background:currentColor;bottom:1px;content:\"\";height:1px;left:0;position:absolute;transform:scaleX(0);transform-origin:right center;transition:transform .5s cubic-bezier(1,0,0,1);width:100%}@media(hover:hover){.label[data-v-3c177c28]:hover:after{transform:scaleX(1);transform-origin:left center}}.label[data-v-3c177c28]:after{transform:scaleX(1)}@media(min-width:601px){.arrow[data-v-3c177c28],.label[data-v-3c177c28]{transition:all .75s cubic-bezier(.19,1,.22,1)}}.arrow[data-v-3c177c28]:first-child{margin-right:1.3333333333vw}@media(min-width:601px){.arrow[data-v-3c177c28]:first-child{margin-right:.3472222222vw;transform-origin:center center}}@media(max-width:600px){.arrow[data-v-3c177c28]:last-child{display:none}}@media(min-width:601px){.arrow[data-v-3c177c28]:last-child{opacity:0;position:absolute;right:0;transform:scale(0);transform-origin:bottom left}.nav[data-v-3c177c28]{grid-column:3/10}.is-full .nav[data-v-3c177c28]{margin-top:-5.5555555556vw}}@media(max-width:600px){.nav-link[data-v-3c177c28]{font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:12.8vw;font-size:var(--font-s-h3-m);font-weight:400;letter-spacing:-.5333333333vw;letter-spacing:var(--font-ls-h3-m);line-height:14.9333333333vw;line-height:var(--font-lh-h3-m)}}@media(min-width:601px){.nav-link[data-v-3c177c28]{font-family:\"At Hauss Std\";font-family:var(--font-f-at-hauss-std);font-size:17.0666666667vw;font-size:var(--font-s-h2);font-weight:400;letter-spacing:-.6666666667vw;letter-spacing:var(--font-ls-h2);line-height:18.6666666667vw;line-height:var(--font-lh-h2);position:relative;will-change:transform}.nav-link[data-v-3c177c28]:after{background:currentColor;bottom:1px;content:\"\";height:1px;left:0;position:absolute;transform:scaleX(0);transform-origin:right center;transition:transform .5s cubic-bezier(1,0,0,1);width:100%;will-change:transform}}@media(min-width:601px)and (hover:hover){.nav-link[data-v-3c177c28]:hover:after{transform:scaleX(1);transform-origin:left center}}@media(min-width:601px){.nav-link[data-v-3c177c28]:after{bottom:.4166666667vw;height:.2777777778vw}}.is-current[data-v-3c177c28]{pointer-events:none}.is-current[data-v-3c177c28]:after{transform:scaleX(1)}@media(max-width:600px){.socials[data-v-3c177c28]{border-bottom:1px solid rgba(36,35,32,.2);border-bottom:1px solid var(--color-grey-dark-02);margin:13.3333333333vw 0 14.6666666667vw;padding-bottom:15.4666666667vw}}@media(min-width:601px){.socials[data-v-3c177c28]{grid-column:3/10;margin:5.5555555556vw 0 0}.newsletter[data-v-3c177c28]{align-self:flex-end;grid-column:10/15;margin-top:-6.9444444444vw}}.bottom[data-v-3c177c28]{margin-left:5.3333333333vw;margin-right:5.3333333333vw}@media(min-width:601px){.bottom[data-v-3c177c28]{margin-left:2.0833333333vw;margin-right:2.0833333333vw}}@media(max-width:600px){.bottom[data-v-3c177c28]{display:flex;margin-bottom:8vw;margin-top:17.6vw}}@media(min-width:601px){.bottom[data-v-3c177c28]{align-items:flex-start;display:grid;grid-column-gap:5.3333333333vw;grid-template-columns:repeat(6,1fr);margin-bottom:2.0833333333vw;margin-top:13.1944444444vw}}@media(min-width:601px)and (min-width:601px){.bottom[data-v-3c177c28]{grid-column-gap:1.3888888889vw;grid-template-columns:repeat(15,1fr)}}.bottom-item[data-v-3c177c28]{font-family:\"At Hauss Std Retina\";font-family:var(--font-f-at-hauss-std-retina);font-size:4.2666666667vw;font-size:var(--font-s-p1);font-weight:400;letter-spacing:0;letter-spacing:var(--font-ls-p1);line-height:5.8666666667vw;line-height:var(--font-lh-p1)}@media(max-width:600px){.bottom-item[data-v-3c177c28]:first-child{display:none}}@media(min-width:601px){.bottom-item[data-v-3c177c28]:first-child{grid-column:1/10}.bottom-item[data-v-3c177c28]:nth-child(2){grid-column:10/13}}.bottom-item[data-v-3c177c28]:nth-child(3){margin-left:auto}@media(min-width:601px){.bottom-item[data-v-3c177c28]:nth-child(3){align-items:center;display:inline-flex;grid-column:13/16;text-align:right}.bottom-link[data-v-3c177c28]{position:relative;will-change:transform}.bottom-link[data-v-3c177c28]:after{background:currentColor;bottom:1px;content:\"\";height:1px;left:0;position:absolute;transform:scaleX(0);transform-origin:right center;transition:transform .5s cubic-bezier(1,0,0,1);width:100%;will-change:transform}}@media(min-width:601px)and (hover:hover){.bottom-link[data-v-3c177c28]:hover:after{transform:scaleX(1);transform-origin:left center}}@media(max-width:600px){.exoape-svg[data-v-3c177c28]{display:none}}@media(min-width:601px){.exoape-svg[data-v-3c177c28]{height:2.0138888889vw;margin-right:.2777777778vw;width:2.0138888889vw}}", ""]);
    n.locals = {};
    t.exports = n;
  }
}]);