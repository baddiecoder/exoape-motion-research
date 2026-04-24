const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./ljBm_VCx.js", "./BGjYj7bP.js", "./DKbNgrut.js", "./B_cpn0MM.js", "./Header.8eIZd0f0.css", "./Dkp8x4GF.js", "./DInpGGAu.js", "./BdBWOcvB.js", "./ChwHoJXA.js", "./_slug_.Cjmjh7gu.css", "./DhJ1f8NJ.js", "./Chp71_0j.js", "./about.BlYjKfkq.css", "./CP5oUK0P.js", "./CkTdvX_d.js", "./default.BF3Wj15t.css", "./DvwbKJp4.js", "./error-404.ygbHJO5Q.css", "./GEprlJgH.js", "./error-500.B11Ibp8J.css"]) => i.map(i => d[i]);
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /*! #__NO_SIDE_EFFECTS__ */
function Ea(t) {
  const e = Object.create(null);
  for (const n of t.split(",")) {
    e[n] = 1;
  }
  return n => n in e;
}
const pe = {};
const wr = [];
const Gt = () => {};
const jd = () => false;
const Cs = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
const Pa = t => t.startsWith("onUpdate:");
const Re = Object.assign;
const Ra = (t, e) => {
  const n = t.indexOf(e);
  if (n > -1) {
    t.splice(n, 1);
  }
};
const Ud = Object.prototype.hasOwnProperty;
const ae = (t, e) => Ud.call(t, e);
const X = Array.isArray;
const Tr = t => Es(t) === "[object Map]";
const Tu = t => Es(t) === "[object Set]";
const Vd = t => Es(t) === "[object RegExp]";
const Z = t => typeof t == "function";
const ve = t => typeof t == "string";
const un = t => typeof t == "symbol";
const me = t => t !== null && typeof t == "object";
const Oa = t => (me(t) || Z(t)) && Z(t.then) && Z(t.catch);
const ku = Object.prototype.toString;
const Es = t => ku.call(t);
const zd = t => Es(t).slice(8, -1);
const xu = t => Es(t) === "[object Object]";
const Aa = t => ve(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t;
const kr = Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const Ei = t => {
  const e = Object.create(null);
  return n => e[n] ||= t(n);
};
const Wd = /-(\w)/g;
const Rt = Ei(t => t.replace(Wd, (e, n) => n ? n.toUpperCase() : ""));
const Gd = /\B([A-Z])/g;
const ar = Ei(t => t.replace(Gd, "-$1").toLowerCase());
const Pi = Ei(t => t.charAt(0).toUpperCase() + t.slice(1));
const Wi = Ei(t => t ? `on${Pi(t)}` : "");
const Sn = (t, e) => !Object.is(t, e);
const Qr = (t, ...e) => {
  for (let n = 0; n < t.length; n++) {
    t[n](...e);
  }
};
const Su = (t, e, n, r = false) => {
  Object.defineProperty(t, e, {
    configurable: true,
    enumerable: false,
    writable: r,
    value: n
  });
};
const qd = t => {
  const e = parseFloat(t);
  if (isNaN(e)) {
    return t;
  } else {
    return e;
  }
};
const Cu = t => {
  const e = ve(t) ? Number(t) : NaN;
  if (isNaN(e)) {
    return t;
  } else {
    return e;
  }
};
let Al;
const Ri = () => Al ||= typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
function Oi(t) {
  if (X(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      const s = ve(r) ? Jd(r) : Oi(r);
      if (s) {
        for (const i in s) {
          e[i] = s[i];
        }
      }
    }
    return e;
  } else if (ve(t) || me(t)) {
    return t;
  }
}
const Kd = /;(?![^(]*\))/g;
const Yd = /:([^]+)/;
const Xd = /\/\*[^]*?\*\//g;
function Jd(t) {
  const e = {};
  t.replace(Xd, "").split(Kd).forEach(n => {
    if (n) {
      const r = n.split(Yd);
      if (r.length > 1) {
        e[r[0].trim()] = r[1].trim();
      }
    }
  });
  return e;
}
function Ai(t) {
  let e = "";
  if (ve(t)) {
    e = t;
  } else if (X(t)) {
    for (let n = 0; n < t.length; n++) {
      const r = Ai(t[n]);
      if (r) {
        e += r + " ";
      }
    }
  } else if (me(t)) {
    for (const n in t) {
      if (t[n]) {
        e += n + " ";
      }
    }
  }
  return e.trim();
}
function Qd(t) {
  if (!t) {
    return null;
  }
  let {
    class: e,
    style: n
  } = t;
  if (e && !ve(e)) {
    t.class = Ai(e);
  }
  if (n) {
    t.style = Oi(n);
  }
  return t;
}
const Zd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
const ep = Ea(Zd);
function Eu(t) {
  return !!t || t === "";
}
const Pu = t => !!t && t.__v_isRef === true;
const tp = t => ve(t) ? t : t == null ? "" : X(t) || me(t) && (t.toString === ku || !Z(t.toString)) ? Pu(t) ? tp(t.value) : JSON.stringify(t, Ru, 2) : String(t);
const Ru = (t, e) => Pu(e) ? Ru(t, e.value) : Tr(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, s], i) => {
    n[Gi(r, i) + " =>"] = s;
    return n;
  }, {})
} : Tu(e) ? {
  [`Set(${e.size})`]: [...e.values()].map(n => Gi(n))
} : un(e) ? Gi(e) : me(e) && !X(e) && !xu(e) ? String(e) : e;
const Gi = (t, e = "") => {
  if (un(t)) {
    return `Symbol(${t.description ?? e})`;
  } else {
    return t;
  }
};
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xe;
class Ou {
  constructor(e = false) {
    this.detached = e;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = Xe;
    if (!e && Xe) {
      this.index = (Xe.scopes ||= []).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let e;
      let n;
      if (this.scopes) {
        e = 0;
        n = this.scopes.length;
        for (; e < n; e++) {
          this.scopes[e].pause();
        }
      }
      e = 0;
      n = this.effects.length;
      for (; e < n; e++) {
        this.effects[e].pause();
      }
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let e;
      let n;
      if (this.scopes) {
        e = 0;
        n = this.scopes.length;
        for (; e < n; e++) {
          this.scopes[e].resume();
        }
      }
      e = 0;
      n = this.effects.length;
      for (; e < n; e++) {
        this.effects[e].resume();
      }
    }
  }
  run(e) {
    if (this._active) {
      const n = Xe;
      try {
        Xe = this;
        return e();
      } finally {
        Xe = n;
      }
    }
  }
  on() {
    Xe = this;
  }
  off() {
    Xe = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n;
      let r;
      n = 0;
      r = this.effects.length;
      for (; n < r; n++) {
        this.effects[n].stop();
      }
      n = 0;
      r = this.cleanups.length;
      for (; n < r; n++) {
        this.cleanups[n]();
      }
      if (this.scopes) {
        n = 0;
        r = this.scopes.length;
        for (; n < r; n++) {
          this.scopes[n].stop(true);
        }
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        if (s && s !== this) {
          this.parent.scopes[this.index] = s;
          s.index = this.index;
        }
      }
      this.parent = undefined;
      this._active = false;
    }
  }
}
function Ma(t) {
  return new Ou(t);
}
function Mi() {
  return Xe;
}
function xo(t, e = false) {
  if (Xe) {
    Xe.cleanups.push(t);
  }
}
let de;
const qi = new WeakSet();
class Au {
  constructor(e) {
    this.fn = e;
    this.deps = undefined;
    this.depsTail = undefined;
    this.flags = 5;
    this.next = undefined;
    this.cleanup = undefined;
    this.scheduler = undefined;
    if (Xe && Xe.active) {
      Xe.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (qi.has(this)) {
        qi.delete(this);
        this.trigger();
      }
    }
  }
  notify() {
    if ((!(this.flags & 2) || !!(this.flags & 32)) && !(this.flags & 8)) {
      Iu(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    Ml(this);
    Lu(this);
    const e = de;
    const n = Dt;
    de = this;
    Dt = true;
    try {
      return this.fn();
    } finally {
      Bu(this);
      de = e;
      Dt = n;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) {
        Ba(e);
      }
      this.deps = this.depsTail = undefined;
      Ml(this);
      if (this.onStop) {
        this.onStop();
      }
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      qi.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  runIfDirty() {
    if (So(this)) {
      this.run();
    }
  }
  get dirty() {
    return So(this);
  }
}
let Mu = 0;
let Zr;
let es;
function Iu(t, e = false) {
  t.flags |= 8;
  if (e) {
    t.next = es;
    es = t;
    return;
  }
  t.next = Zr;
  Zr = t;
}
function Ia() {
  Mu++;
}
function La() {
  if (--Mu > 0) {
    return;
  }
  if (es) {
    let e = es;
    for (es = undefined; e;) {
      const n = e.next;
      e.next = undefined;
      e.flags &= -9;
      e = n;
    }
  }
  let t;
  while (Zr) {
    let e = Zr;
    for (Zr = undefined; e;) {
      const n = e.next;
      e.next = undefined;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          e.trigger();
        } catch (r) {
          t ||= r;
        }
      }
      e = n;
    }
  }
  if (t) {
    throw t;
  }
}
function Lu(t) {
  for (let e = t.deps; e; e = e.nextDep) {
    e.version = -1;
    e.prevActiveLink = e.dep.activeLink;
    e.dep.activeLink = e;
  }
}
function Bu(t) {
  let e;
  let n = t.depsTail;
  let r = n;
  while (r) {
    const s = r.prevDep;
    if (r.version === -1) {
      if (r === n) {
        n = s;
      }
      Ba(r);
      np(r);
    } else {
      e = r;
    }
    r.dep.activeLink = r.prevActiveLink;
    r.prevActiveLink = undefined;
    r = s;
  }
  t.deps = e;
  t.depsTail = n;
}
function So(t) {
  for (let e = t.deps; e; e = e.nextDep) {
    if (e.dep.version !== e.version || e.dep.computed && (Du(e.dep.computed) || e.dep.version !== e.version)) {
      return true;
    }
  }
  return !!t._dirty;
}
function Du(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === hs)) {
    return;
  }
  t.globalVersion = hs;
  const e = t.dep;
  t.flags |= 2;
  if (e.version > 0 && !t.isSSR && t.deps && !So(t)) {
    t.flags &= -3;
    return;
  }
  const n = de;
  const r = Dt;
  de = t;
  Dt = true;
  try {
    Lu(t);
    const s = t.fn(t._value);
    if (e.version === 0 || Sn(s, t._value)) {
      t._value = s;
      e.version++;
    }
  } catch (s) {
    e.version++;
    throw s;
  } finally {
    de = n;
    Dt = r;
    Bu(t);
    t.flags &= -3;
  }
}
function Ba(t, e = false) {
  const {
    dep: n,
    prevSub: r,
    nextSub: s
  } = t;
  if (r) {
    r.nextSub = s;
    t.prevSub = undefined;
  }
  if (s) {
    s.prevSub = r;
    t.nextSub = undefined;
  }
  if (n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) {
      Ba(i, true);
    }
  }
  if (!e && ! --n.sc && n.map) {
    n.map.delete(n.key);
  }
}
function np(t) {
  const {
    prevDep: e,
    nextDep: n
  } = t;
  if (e) {
    e.nextDep = n;
    t.prevDep = undefined;
  }
  if (n) {
    n.prevDep = e;
    t.nextDep = undefined;
  }
}
let Dt = true;
const Nu = [];
function Ln() {
  Nu.push(Dt);
  Dt = false;
}
function Bn() {
  const t = Nu.pop();
  Dt = t === undefined ? true : t;
}
function Ml(t) {
  const {
    cleanup: e
  } = t;
  t.cleanup = undefined;
  if (e) {
    const n = de;
    de = undefined;
    try {
      e();
    } finally {
      de = n;
    }
  }
}
let hs = 0;
class rp {
  constructor(e, n) {
    this.sub = e;
    this.dep = n;
    this.version = n.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = undefined;
  }
}
class Da {
  constructor(e) {
    this.computed = e;
    this.version = 0;
    this.activeLink = undefined;
    this.subs = undefined;
    this.map = undefined;
    this.key = undefined;
    this.sc = 0;
  }
  track(e) {
    if (!de || !Dt || de === this.computed) {
      return;
    }
    let n = this.activeLink;
    if (n === undefined || n.sub !== de) {
      n = this.activeLink = new rp(de, this);
      if (de.deps) {
        n.prevDep = de.depsTail;
        de.depsTail.nextDep = n;
        de.depsTail = n;
      } else {
        de.deps = de.depsTail = n;
      }
      $u(n);
    } else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep;
      if (n.prevDep) {
        n.prevDep.nextDep = r;
      }
      n.prevDep = de.depsTail;
      n.nextDep = undefined;
      de.depsTail.nextDep = n;
      de.depsTail = n;
      if (de.deps === n) {
        de.deps = r;
      }
    }
    return n;
  }
  trigger(e) {
    this.version++;
    hs++;
    this.notify(e);
  }
  notify(e) {
    Ia();
    try {
      for (let n = this.subs; n; n = n.prevSub) {
        if (n.sub.notify()) {
          n.sub.dep.notify();
        }
      }
    } finally {
      La();
    }
  }
}
function $u(t) {
  t.dep.sc++;
  if (t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep) {
        $u(r);
      }
    }
    const n = t.dep.subs;
    if (n !== t) {
      t.prevSub = n;
      if (n) {
        n.nextSub = t;
      }
    }
    t.dep.subs = t;
  }
}
const ni = new WeakMap();
const Yn = Symbol("");
const Co = Symbol("");
const ds = Symbol("");
function Fe(t, e, n) {
  if (Dt && de) {
    let r = ni.get(t);
    if (!r) {
      ni.set(t, r = new Map());
    }
    let s = r.get(n);
    if (!s) {
      r.set(n, s = new Da());
      s.map = r;
      s.key = n;
    }
    s.track();
  }
}
function rn(t, e, n, r, s, i) {
  const o = ni.get(t);
  if (!o) {
    hs++;
    return;
  }
  const a = l => {
    if (l) {
      l.trigger();
    }
  };
  Ia();
  if (e === "clear") {
    o.forEach(a);
  } else {
    const l = X(t);
    const u = l && Aa(n);
    if (l && n === "length") {
      const c = Number(r);
      o.forEach((f, h) => {
        if (h === "length" || h === ds || !un(h) && h >= c) {
          a(f);
        }
      });
    } else {
      if (n !== undefined || o.has(undefined)) {
        a(o.get(n));
      }
      if (u) {
        a(o.get(ds));
      }
      switch (e) {
        case "add":
          if (l) {
            if (u) {
              a(o.get("length"));
            }
          } else {
            a(o.get(Yn));
            if (Tr(t)) {
              a(o.get(Co));
            }
          }
          break;
        case "delete":
          if (!l) {
            a(o.get(Yn));
            if (Tr(t)) {
              a(o.get(Co));
            }
          }
          break;
        case "set":
          if (Tr(t)) {
            a(o.get(Yn));
          }
          break;
      }
    }
  }
  La();
}
function sp(t, e) {
  const n = ni.get(t);
  return n && n.get(e);
}
function ur(t) {
  const e = re(t);
  if (e === t) {
    return e;
  } else {
    Fe(e, "iterate", ds);
    if (Pt(t)) {
      return e;
    } else {
      return e.map(je);
    }
  }
}
function Ii(t) {
  Fe(t = re(t), "iterate", ds);
  return t;
}
const ip = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ki(this, Symbol.iterator, je);
  },
  concat(...t) {
    return ur(this).concat(...t.map(e => X(e) ? ur(e) : e));
  },
  entries() {
    return Ki(this, "entries", t => {
      t[1] = je(t[1]);
      return t;
    });
  },
  every(t, e) {
    return Qt(this, "every", t, e, undefined, arguments);
  },
  filter(t, e) {
    return Qt(this, "filter", t, e, n => n.map(je), arguments);
  },
  find(t, e) {
    return Qt(this, "find", t, e, je, arguments);
  },
  findIndex(t, e) {
    return Qt(this, "findIndex", t, e, undefined, arguments);
  },
  findLast(t, e) {
    return Qt(this, "findLast", t, e, je, arguments);
  },
  findLastIndex(t, e) {
    return Qt(this, "findLastIndex", t, e, undefined, arguments);
  },
  forEach(t, e) {
    return Qt(this, "forEach", t, e, undefined, arguments);
  },
  includes(...t) {
    return Yi(this, "includes", t);
  },
  indexOf(...t) {
    return Yi(this, "indexOf", t);
  },
  join(t) {
    return ur(this).join(t);
  },
  lastIndexOf(...t) {
    return Yi(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Qt(this, "map", t, e, undefined, arguments);
  },
  pop() {
    return Vr(this, "pop");
  },
  push(...t) {
    return Vr(this, "push", t);
  },
  reduce(t, ...e) {
    return Il(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Il(this, "reduceRight", t, e);
  },
  shift() {
    return Vr(this, "shift");
  },
  some(t, e) {
    return Qt(this, "some", t, e, undefined, arguments);
  },
  splice(...t) {
    return Vr(this, "splice", t);
  },
  toReversed() {
    return ur(this).toReversed();
  },
  toSorted(t) {
    return ur(this).toSorted(t);
  },
  toSpliced(...t) {
    return ur(this).toSpliced(...t);
  },
  unshift(...t) {
    return Vr(this, "unshift", t);
  },
  values() {
    return Ki(this, "values", je);
  }
};
function Ki(t, e, n) {
  const r = Ii(t);
  const s = r[e]();
  if (r !== t && !Pt(t)) {
    s._next = s.next;
    s.next = () => {
      const i = s._next();
      i.value &&= n(i.value);
      return i;
    };
  }
  return s;
}
const op = Array.prototype;
function Qt(t, e, n, r, s, i) {
  const o = Ii(t);
  const a = o !== t && !Pt(t);
  const l = o[e];
  if (l !== op[e]) {
    const f = l.apply(t, i);
    if (a) {
      return je(f);
    } else {
      return f;
    }
  }
  let u = n;
  if (o !== t) {
    if (a) {
      u = function (f, h) {
        return n.call(this, je(f), h, t);
      };
    } else if (n.length > 2) {
      u = function (f, h) {
        return n.call(this, f, h, t);
      };
    }
  }
  const c = l.call(o, u, r);
  if (a && s) {
    return s(c);
  } else {
    return c;
  }
}
function Il(t, e, n, r) {
  const s = Ii(t);
  let i = n;
  if (s !== t) {
    if (Pt(t)) {
      if (n.length > 3) {
        i = function (o, a, l) {
          return n.call(this, o, a, l, t);
        };
      }
    } else {
      i = function (o, a, l) {
        return n.call(this, o, je(a), l, t);
      };
    }
  }
  return s[e](i, ...r);
}
function Yi(t, e, n) {
  const r = re(t);
  Fe(r, "iterate", ds);
  const s = r[e](...n);
  if ((s === -1 || s === false) && Ha(n[0])) {
    n[0] = re(n[0]);
    return r[e](...n);
  } else {
    return s;
  }
}
function Vr(t, e, n = []) {
  Ln();
  Ia();
  const r = re(t)[e].apply(t, n);
  La();
  Bn();
  return r;
}
const ap = Ea("__proto__,__v_isRef,__isVue");
const Hu = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(un));
function lp(t) {
  if (!un(t)) {
    t = String(t);
  }
  const e = re(this);
  Fe(e, "has", t);
  return e.hasOwnProperty(t);
}
class Fu {
  constructor(e = false, n = false) {
    this._isReadonly = e;
    this._isShallow = n;
  }
  get(e, n, r) {
    const s = this._isReadonly;
    const i = this._isShallow;
    if (n === "__v_isReactive") {
      return !s;
    }
    if (n === "__v_isReadonly") {
      return s;
    }
    if (n === "__v_isShallow") {
      return i;
    }
    if (n === "__v_raw") {
      if (r === (s ? i ? yp : zu : i ? Vu : Uu).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r)) {
        return e;
      } else {
        return undefined;
      }
    }
    const o = X(e);
    if (!s) {
      let l;
      if (o && (l = ip[n])) {
        return l;
      }
      if (n === "hasOwnProperty") {
        return lp;
      }
    }
    const a = Reflect.get(e, n, Ce(e) ? e : r);
    if ((un(n) ? Hu.has(n) : ap(n)) || (s || Fe(e, "get", n), i)) {
      return a;
    } else if (Ce(a)) {
      if (o && Aa(n)) {
        return a;
      } else {
        return a.value;
      }
    } else if (me(a)) {
      if (s) {
        return Wu(a);
      } else {
        return Yt(a);
      }
    } else {
      return a;
    }
  }
}
class ju extends Fu {
  constructor(e = false) {
    super(false, e);
  }
  set(e, n, r, s) {
    let i = e[n];
    if (!this._isShallow) {
      const l = On(i);
      if (!Pt(r) && !On(r)) {
        i = re(i);
        r = re(r);
      }
      if (!X(e) && Ce(i) && !Ce(r)) {
        if (l) {
          return false;
        } else {
          i.value = r;
          return true;
        }
      }
    }
    const o = X(e) && Aa(n) ? Number(n) < e.length : ae(e, n);
    const a = Reflect.set(e, n, r, Ce(e) ? e : s);
    if (e === re(s)) {
      if (o) {
        if (Sn(r, i)) {
          rn(e, "set", n, r);
        }
      } else {
        rn(e, "add", n, r);
      }
    }
    return a;
  }
  deleteProperty(e, n) {
    const r = ae(e, n);
    e[n];
    const s = Reflect.deleteProperty(e, n);
    if (s && r) {
      rn(e, "delete", n, undefined);
    }
    return s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    if (!un(n) || !Hu.has(n)) {
      Fe(e, "has", n);
    }
    return r;
  }
  ownKeys(e) {
    Fe(e, "iterate", X(e) ? "length" : Yn);
    return Reflect.ownKeys(e);
  }
}
class cp extends Fu {
  constructor(e = false) {
    super(true, e);
  }
  set(e, n) {
    return true;
  }
  deleteProperty(e, n) {
    return true;
  }
}
const up = new ju();
const fp = new cp();
const hp = new ju(true);
const Eo = t => t;
const Bs = t => Reflect.getPrototypeOf(t);
function dp(t, e, n) {
  return function (...r) {
    const s = this.__v_raw;
    const i = re(s);
    const o = Tr(i);
    const a = t === "entries" || t === Symbol.iterator && o;
    const l = t === "keys" && o;
    const u = s[t](...r);
    const c = n ? Eo : e ? Po : je;
    if (!e) {
      Fe(i, "iterate", l ? Co : Yn);
    }
    return {
      next() {
        const {
          value: f,
          done: h
        } = u.next();
        if (h) {
          return {
            value: f,
            done: h
          };
        } else {
          return {
            value: a ? [c(f[0]), c(f[1])] : c(f),
            done: h
          };
        }
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ds(t) {
  return function (...e) {
    if (t === "delete") {
      return false;
    } else if (t === "clear") {
      return undefined;
    } else {
      return this;
    }
  };
}
function pp(t, e) {
  const n = {
    get(s) {
      const i = this.__v_raw;
      const o = re(i);
      const a = re(s);
      if (!t) {
        if (Sn(s, a)) {
          Fe(o, "get", s);
        }
        Fe(o, "get", a);
      }
      const {
        has: l
      } = Bs(o);
      const u = e ? Eo : t ? Po : je;
      if (l.call(o, s)) {
        return u(i.get(s));
      }
      if (l.call(o, a)) {
        return u(i.get(a));
      }
      if (i !== o) {
        i.get(s);
      }
    },
    get size() {
      const s = this.__v_raw;
      if (!t) {
        Fe(re(s), "iterate", Yn);
      }
      return Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw;
      const o = re(i);
      const a = re(s);
      if (!t) {
        if (Sn(s, a)) {
          Fe(o, "has", s);
        }
        Fe(o, "has", a);
      }
      if (s === a) {
        return i.has(s);
      } else {
        return i.has(s) || i.has(a);
      }
    },
    forEach(s, i) {
      const o = this;
      const a = o.__v_raw;
      const l = re(a);
      const u = e ? Eo : t ? Po : je;
      if (!t) {
        Fe(l, "iterate", Yn);
      }
      return a.forEach((c, f) => s.call(i, u(c), u(f), o));
    }
  };
  Re(n, t ? {
    add: Ds("add"),
    set: Ds("set"),
    delete: Ds("delete"),
    clear: Ds("clear")
  } : {
    add(s) {
      if (!e && !Pt(s) && !On(s)) {
        s = re(s);
      }
      const i = re(this);
      if (!Bs(i).has.call(i, s)) {
        i.add(s);
        rn(i, "add", s, s);
      }
      return this;
    },
    set(s, i) {
      if (!e && !Pt(i) && !On(i)) {
        i = re(i);
      }
      const o = re(this);
      const {
        has: a,
        get: l
      } = Bs(o);
      let u = a.call(o, s);
      if (!u) {
        s = re(s);
        u = a.call(o, s);
      }
      const c = l.call(o, s);
      o.set(s, i);
      if (u) {
        if (Sn(i, c)) {
          rn(o, "set", s, i);
        }
      } else {
        rn(o, "add", s, i);
      }
      return this;
    },
    delete(s) {
      const i = re(this);
      const {
        has: o,
        get: a
      } = Bs(i);
      let l = o.call(i, s);
      if (!l) {
        s = re(s);
        l = o.call(i, s);
      }
      if (a) {
        a.call(i, s);
      }
      const u = i.delete(s);
      if (l) {
        rn(i, "delete", s, undefined);
      }
      return u;
    },
    clear() {
      const s = re(this);
      const i = s.size !== 0;
      const o = s.clear();
      if (i) {
        rn(s, "clear", undefined, undefined);
      }
      return o;
    }
  });
  ["keys", "values", "entries", Symbol.iterator].forEach(s => {
    n[s] = dp(s, t, e);
  });
  return n;
}
function Na(t, e) {
  const n = pp(t, e);
  return (r, s, i) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(ae(n, s) && s in r ? n : r, s, i);
}
const gp = {
  get: Na(false, false)
};
const mp = {
  get: Na(false, true)
};
const _p = {
  get: Na(true, false)
};
const Uu = new WeakMap();
const Vu = new WeakMap();
const zu = new WeakMap();
const yp = new WeakMap();
function bp(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function vp(t) {
  if (t.__v_skip || !Object.isExtensible(t)) {
    return 0;
  } else {
    return bp(zd(t));
  }
}
function Yt(t) {
  if (On(t)) {
    return t;
  } else {
    return $a(t, false, up, gp, Uu);
  }
}
function sn(t) {
  return $a(t, false, hp, mp, Vu);
}
function Wu(t) {
  return $a(t, true, fp, _p, zu);
}
function $a(t, e, n, r, s) {
  if (!me(t) || t.__v_raw && (!e || !t.__v_isReactive)) {
    return t;
  }
  const i = s.get(t);
  if (i) {
    return i;
  }
  const o = vp(t);
  if (o === 0) {
    return t;
  }
  const a = new Proxy(t, o === 2 ? r : n);
  s.set(t, a);
  return a;
}
function on(t) {
  if (On(t)) {
    return on(t.__v_raw);
  } else {
    return !!t && !!t.__v_isReactive;
  }
}
function On(t) {
  return !!t && !!t.__v_isReadonly;
}
function Pt(t) {
  return !!t && !!t.__v_isShallow;
}
function Ha(t) {
  if (t) {
    return !!t.__v_raw;
  } else {
    return false;
  }
}
function re(t) {
  const e = t && t.__v_raw;
  if (e) {
    return re(e);
  } else {
    return t;
  }
}
function Fa(t) {
  if (!ae(t, "__v_skip") && Object.isExtensible(t)) {
    Su(t, "__v_skip", true);
  }
  return t;
}
const je = t => me(t) ? Yt(t) : t;
const Po = t => me(t) ? Wu(t) : t;
function Ce(t) {
  if (t) {
    return t.__v_isRef === true;
  } else {
    return false;
  }
}
function We(t) {
  return Gu(t, false);
}
function Or(t) {
  return Gu(t, true);
}
function Gu(t, e) {
  if (Ce(t)) {
    return t;
  } else {
    return new wp(t, e);
  }
}
class wp {
  constructor(e, n) {
    this.dep = new Da();
    this.__v_isRef = true;
    this.__v_isShallow = false;
    this._rawValue = n ? e : re(e);
    this._value = n ? e : je(e);
    this.__v_isShallow = n;
  }
  get value() {
    this.dep.track();
    return this._value;
  }
  set value(e) {
    const n = this._rawValue;
    const r = this.__v_isShallow || Pt(e) || On(e);
    e = r ? e : re(e);
    if (Sn(e, n)) {
      this._rawValue = e;
      this._value = r ? e : je(e);
      this.dep.trigger();
    }
  }
}
function fe(t) {
  if (Ce(t)) {
    return t.value;
  } else {
    return t;
  }
}
const Tp = {
  get: (t, e, n) => e === "__v_raw" ? t : fe(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const s = t[e];
    if (Ce(s) && !Ce(n)) {
      s.value = n;
      return true;
    } else {
      return Reflect.set(t, e, n, r);
    }
  }
};
function qu(t) {
  if (on(t)) {
    return t;
  } else {
    return new Proxy(t, Tp);
  }
}
function kp(t) {
  const e = X(t) ? new Array(t.length) : {};
  for (const n in t) {
    e[n] = Yu(t, n);
  }
  return e;
}
class xp {
  constructor(e, n, r) {
    this._object = e;
    this._key = n;
    this._defaultValue = r;
    this.__v_isRef = true;
    this._value = undefined;
  }
  get value() {
    const e = this._object[this._key];
    return this._value = e === undefined ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return sp(re(this._object), this._key);
  }
}
class Sp {
  constructor(e) {
    this._getter = e;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
    this._value = undefined;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Ku(t, e, n) {
  if (Ce(t)) {
    return t;
  } else if (Z(t)) {
    return new Sp(t);
  } else if (me(t) && arguments.length > 1) {
    return Yu(t, e, n);
  } else {
    return We(t);
  }
}
function Yu(t, e, n) {
  const r = t[e];
  if (Ce(r)) {
    return r;
  } else {
    return new xp(t, e, n);
  }
}
class Cp {
  constructor(e, n, r) {
    this.fn = e;
    this.setter = n;
    this._value = undefined;
    this.dep = new Da(this);
    this.__v_isRef = true;
    this.deps = undefined;
    this.depsTail = undefined;
    this.flags = 16;
    this.globalVersion = hs - 1;
    this.next = undefined;
    this.effect = this;
    this.__v_isReadonly = !n;
    this.isSSR = r;
  }
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && de !== this) {
      Iu(this, true);
      return true;
    }
  }
  get value() {
    const e = this.dep.track();
    Du(this);
    if (e) {
      e.version = this.dep.version;
    }
    return this._value;
  }
  set value(e) {
    if (this.setter) {
      this.setter(e);
    }
  }
}
function Ep(t, e, n = false) {
  let r;
  let s;
  if (Z(t)) {
    r = t;
  } else {
    r = t.get;
    s = t.set;
  }
  return new Cp(r, s, n);
}
const Ns = {};
const ri = new WeakMap();
let Wn;
function Pp(t, e = false, n = Wn) {
  if (n) {
    let r = ri.get(n);
    if (!r) {
      ri.set(n, r = []);
    }
    r.push(t);
  }
}
function Rp(t, e, n = pe) {
  const {
    immediate: r,
    deep: s,
    once: i,
    scheduler: o,
    augmentJob: a,
    call: l
  } = n;
  const u = _ => s ? _ : Pt(_) || s === false || s === 0 ? vn(_, 1) : vn(_);
  let c;
  let f;
  let h;
  let d;
  let m = false;
  let g = false;
  if (Ce(t)) {
    f = () => t.value;
    m = Pt(t);
  } else if (on(t)) {
    f = () => u(t);
    m = true;
  } else if (X(t)) {
    g = true;
    m = t.some(_ => on(_) || Pt(_));
    f = () => t.map(_ => {
      if (Ce(_)) {
        return _.value;
      }
      if (on(_)) {
        return u(_);
      }
      if (Z(_)) {
        if (l) {
          return l(_, 2);
        } else {
          return _();
        }
      }
    });
  } else if (Z(t)) {
    if (e) {
      f = l ? () => l(t, 2) : t;
    } else {
      f = () => {
        if (h) {
          Ln();
          try {
            h();
          } finally {
            Bn();
          }
        }
        const _ = Wn;
        Wn = c;
        try {
          if (l) {
            return l(t, 3, [d]);
          } else {
            return t(d);
          }
        } finally {
          Wn = _;
        }
      };
    }
  } else {
    f = Gt;
  }
  if (e && s) {
    const _ = f;
    const y = s === true ? Infinity : s;
    f = () => vn(_(), y);
  }
  const w = Mi();
  const k = () => {
    c.stop();
    if (w) {
      Ra(w.effects, c);
    }
  };
  if (i && e) {
    const _ = e;
    e = (...y) => {
      _(...y);
      k();
    };
  }
  let v = g ? new Array(t.length).fill(Ns) : Ns;
  const p = _ => {
    if (!!(c.flags & 1) && (!!c.dirty || !!_)) {
      if (e) {
        const y = c.run();
        if (s || m || (g ? y.some((S, C) => Sn(S, v[C])) : Sn(y, v))) {
          if (h) {
            h();
          }
          const S = Wn;
          Wn = c;
          try {
            const C = [y, v === Ns ? undefined : g && v[0] === Ns ? [] : v, d];
            if (l) {
              l(e, 3, C);
            } else {
              e(...C);
            }
            v = y;
          } finally {
            Wn = S;
          }
        }
      } else {
        c.run();
      }
    }
  };
  if (a) {
    a(p);
  }
  c = new Au(f);
  c.scheduler = o ? () => o(p, false) : p;
  d = _ => Pp(_, false, c);
  h = c.onStop = () => {
    const _ = ri.get(c);
    if (_) {
      if (l) {
        l(_, 4);
      } else {
        for (const y of _) {
          y();
        }
      }
      ri.delete(c);
    }
  };
  if (e) {
    if (r) {
      p(true);
    } else {
      v = c.run();
    }
  } else if (o) {
    o(p.bind(null, true), true);
  } else {
    c.run();
  }
  k.pause = c.pause.bind(c);
  k.resume = c.resume.bind(c);
  k.stop = k;
  return k;
}
function vn(t, e = Infinity, n) {
  if (e <= 0 || !me(t) || t.__v_skip || (n = n || new Set(), n.has(t))) {
    return t;
  }
  n.add(t);
  e--;
  if (Ce(t)) {
    vn(t.value, e, n);
  } else if (X(t)) {
    for (let r = 0; r < t.length; r++) {
      vn(t[r], e, n);
    }
  } else if (Tu(t) || Tr(t)) {
    t.forEach(r => {
      vn(r, e, n);
    });
  } else if (xu(t)) {
    for (const r in t) {
      vn(t[r], e, n);
    }
    for (const r of Object.getOwnPropertySymbols(t)) {
      if (Object.prototype.propertyIsEnumerable.call(t, r)) {
        vn(t[r], e, n);
      }
    }
  }
  return t;
} /**
  * @vue/runtime-core v3.5.12
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/
function Ps(t, e, n, r) {
  try {
    if (r) {
      return t(...r);
    } else {
      return t();
    }
  } catch (s) {
    jr(s, e, n);
  }
}
function Nt(t, e, n, r) {
  if (Z(t)) {
    const s = Ps(t, e, n, r);
    if (s && Oa(s)) {
      s.catch(i => {
        jr(i, e, n);
      });
    }
    return s;
  }
  if (X(t)) {
    const s = [];
    for (let i = 0; i < t.length; i++) {
      s.push(Nt(t[i], e, n, r));
    }
    return s;
  }
}
function jr(t, e, n, r = true) {
  const s = e ? e.vnode : null;
  const {
    errorHandler: i,
    throwUnhandledErrorInProduction: o
  } = e && e.appContext.config || pe;
  if (e) {
    let a = e.parent;
    const l = e.proxy;
    const u = `https://vuejs.org/error-reference/#runtime-${n}`;
    while (a) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) {
          if (c[f](t, l, u) === false) {
            return;
          }
        }
      }
      a = a.parent;
    }
    if (i) {
      Ln();
      Ps(i, null, 10, [t, l, u]);
      Bn();
      return;
    }
  }
  Op(t, n, s, r, o);
}
function Op(t, e, n, r = true, s = false) {
  if (s) {
    throw t;
  }
  console.error(t);
}
const Je = [];
let jt = -1;
const xr = [];
let gn = null;
let pr = 0;
const Xu = Promise.resolve();
let si = null;
function Ht(t) {
  const e = si || Xu;
  if (t) {
    return e.then(this ? t.bind(this) : t);
  } else {
    return e;
  }
}
function Ap(t) {
  let e = jt + 1;
  let n = Je.length;
  while (e < n) {
    const r = e + n >>> 1;
    const s = Je[r];
    const i = ps(s);
    if (i < t || i === t && s.flags & 2) {
      e = r + 1;
    } else {
      n = r;
    }
  }
  return e;
}
function ja(t) {
  if (!(t.flags & 1)) {
    const e = ps(t);
    const n = Je[Je.length - 1];
    if (!n || !(t.flags & 2) && e >= ps(n)) {
      Je.push(t);
    } else {
      Je.splice(Ap(e), 0, t);
    }
    t.flags |= 1;
    Ju();
  }
}
function Ju() {
  si ||= Xu.then(Qu);
}
function Ro(t) {
  if (X(t)) {
    xr.push(...t);
  } else if (gn && t.id === -1) {
    gn.splice(pr + 1, 0, t);
  } else if (!(t.flags & 1)) {
    xr.push(t);
    t.flags |= 1;
  }
  Ju();
}
function Ll(t, e, n = jt + 1) {
  for (; n < Je.length; n++) {
    const r = Je[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid) {
        continue;
      }
      Je.splice(n, 1);
      n--;
      if (r.flags & 4) {
        r.flags &= -2;
      }
      r();
      if (!(r.flags & 4)) {
        r.flags &= -2;
      }
    }
  }
}
function ii(t) {
  if (xr.length) {
    const e = [...new Set(xr)].sort((n, r) => ps(n) - ps(r));
    xr.length = 0;
    if (gn) {
      gn.push(...e);
      return;
    }
    gn = e;
    pr = 0;
    for (; pr < gn.length; pr++) {
      const n = gn[pr];
      if (n.flags & 4) {
        n.flags &= -2;
      }
      if (!(n.flags & 8)) {
        n();
      }
      n.flags &= -2;
    }
    gn = null;
    pr = 0;
  }
}
const ps = t => t.id == null ? t.flags & 2 ? -1 : Infinity : t.id;
function Qu(t) {
  try {
    for (jt = 0; jt < Je.length; jt++) {
      const e = Je[jt];
      if (e && !(e.flags & 8)) {
        if (e.flags & 4) {
          e.flags &= -2;
        }
        Ps(e, e.i, e.i ? 15 : 14);
        if (!(e.flags & 4)) {
          e.flags &= -2;
        }
      }
    }
  } finally {
    for (; jt < Je.length; jt++) {
      const e = Je[jt];
      if (e) {
        e.flags &= -2;
      }
    }
    jt = -1;
    Je.length = 0;
    ii();
    si = null;
    if (Je.length || xr.length) {
      Qu();
    }
  }
}
let Be = null;
let Zu = null;
function oi(t) {
  const e = Be;
  Be = t;
  Zu = t && t.type.__scopeId || null;
  return e;
}
function Ua(t, e = Be, n) {
  if (!e || t._n) {
    return t;
  }
  const r = (...s) => {
    if (r._d) {
      Gl(-1);
    }
    const i = oi(e);
    let o;
    try {
      o = t(...s);
    } finally {
      oi(i);
      if (r._d) {
        Gl(1);
      }
    }
    return o;
  };
  r._n = true;
  r._c = true;
  r._d = true;
  return r;
}
function Ut(t, e, n, r) {
  const s = t.dirs;
  const i = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (i) {
      a.oldValue = i[o].value;
    }
    let l = a.dir[r];
    if (l) {
      Ln();
      Nt(l, n, 8, [t.el, a, t, e]);
      Bn();
    }
  }
}
const Mp = Symbol("_vte");
const ef = t => t.__isTeleport;
const mn = Symbol("_leaveCb");
const $s = Symbol("_enterCb");
function Ip() {
  const t = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  za(() => {
    t.isMounted = true;
  });
  Wa(() => {
    t.isUnmounting = true;
  });
  return t;
}
const Tt = [Function, Array];
const tf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: Tt,
  onEnter: Tt,
  onAfterEnter: Tt,
  onEnterCancelled: Tt,
  onBeforeLeave: Tt,
  onLeave: Tt,
  onAfterLeave: Tt,
  onLeaveCancelled: Tt,
  onBeforeAppear: Tt,
  onAppear: Tt,
  onAfterAppear: Tt,
  onAppearCancelled: Tt
};
const nf = t => {
  const e = t.subTree;
  if (e.component) {
    return nf(e.component);
  } else {
    return e;
  }
};
const Lp = {
  name: "BaseTransition",
  props: tf,
  setup(t, {
    slots: e
  }) {
    const n = Os();
    const r = Ip();
    return () => {
      const s = e.default && of(e.default(), true);
      if (!s || !s.length) {
        return;
      }
      const i = rf(s);
      const o = re(t);
      const {
        mode: a
      } = o;
      if (r.isLeaving) {
        return Xi(i);
      }
      const l = Bl(i);
      if (!l) {
        return Xi(i);
      }
      let u = Oo(l, o, r, n, h => u = h);
      if (l.type !== Oe) {
        Ar(l, u);
      }
      const c = n.subTree;
      const f = c && Bl(c);
      if (f && f.type !== Oe && !Bt(l, f) && nf(n).type !== Oe) {
        const h = Oo(f, o, r, n);
        Ar(f, h);
        if (a === "out-in" && l.type !== Oe) {
          r.isLeaving = true;
          h.afterLeave = () => {
            r.isLeaving = false;
            if (!(n.job.flags & 8)) {
              n.update();
            }
            delete h.afterLeave;
          };
          return Xi(i);
        }
        if (a === "in-out" && l.type !== Oe) {
          h.delayLeave = (d, m, g) => {
            const w = sf(r, f);
            w[String(f.key)] = f;
            d[mn] = () => {
              m();
              d[mn] = undefined;
              delete u.delayedLeave;
            };
            u.delayedLeave = g;
          };
        }
      }
      return i;
    };
  }
};
function rf(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const n of t) {
      if (n.type !== Oe) {
        e = n;
        break;
      }
    }
  }
  return e;
}
const Bp = Lp;
function sf(t, e) {
  const {
    leavingVNodes: n
  } = t;
  let r = n.get(e.type);
  if (!r) {
    r = Object.create(null);
    n.set(e.type, r);
  }
  return r;
}
function Oo(t, e, n, r, s) {
  const {
    appear: i,
    mode: o,
    persisted: a = false,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: d,
    onAfterLeave: m,
    onLeaveCancelled: g,
    onBeforeAppear: w,
    onAppear: k,
    onAfterAppear: v,
    onAppearCancelled: p
  } = e;
  const _ = String(t.key);
  const y = sf(n, t);
  const S = (x, R) => {
    if (x) {
      Nt(x, r, 9, R);
    }
  };
  const C = (x, R) => {
    const D = R[1];
    S(x, R);
    if (X(x)) {
      if (x.every(O => O.length <= 1)) {
        D();
      }
    } else if (x.length <= 1) {
      D();
    }
  };
  const E = {
    mode: o,
    persisted: a,
    beforeEnter(x) {
      let R = l;
      if (!n.isMounted) {
        if (i) {
          R = w || l;
        } else {
          return;
        }
      }
      if (x[mn]) {
        x[mn](true);
      }
      const D = y[_];
      if (D && Bt(t, D) && D.el[mn]) {
        D.el[mn]();
      }
      S(R, [x]);
    },
    enter(x) {
      let R = u;
      let D = c;
      let O = f;
      if (!n.isMounted) {
        if (i) {
          R = k || u;
          D = v || c;
          O = p || f;
        } else {
          return;
        }
      }
      let $ = false;
      const Y = x[$s] = J => {
        if (!$) {
          $ = true;
          if (J) {
            S(O, [x]);
          } else {
            S(D, [x]);
          }
          if (E.delayedLeave) {
            E.delayedLeave();
          }
          x[$s] = undefined;
        }
      };
      if (R) {
        C(R, [x, Y]);
      } else {
        Y();
      }
    },
    leave(x, R) {
      const D = String(t.key);
      if (x[$s]) {
        x[$s](true);
      }
      if (n.isUnmounting) {
        return R();
      }
      S(h, [x]);
      let O = false;
      const $ = x[mn] = Y => {
        if (!O) {
          O = true;
          R();
          if (Y) {
            S(g, [x]);
          } else {
            S(m, [x]);
          }
          x[mn] = undefined;
          if (y[D] === t) {
            delete y[D];
          }
        }
      };
      y[D] = t;
      if (d) {
        C(d, [x, $]);
      } else {
        $();
      }
    },
    clone(x) {
      const R = Oo(x, e, n, r, s);
      if (s) {
        s(R);
      }
      return R;
    }
  };
  return E;
}
function Xi(t) {
  if (Rs(t)) {
    t = an(t);
    t.children = null;
    return t;
  }
}
function Bl(t) {
  if (!Rs(t)) {
    if (ef(t.type) && t.children) {
      return rf(t.children);
    } else {
      return t;
    }
  }
  const {
    shapeFlag: e,
    children: n
  } = t;
  if (n) {
    if (e & 16) {
      return n[0];
    }
    if (e & 32 && Z(n.default)) {
      return n.default();
    }
  }
}
function Ar(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    Ar(t.component.subTree, e);
  } else if (t.shapeFlag & 128) {
    t.ssContent.transition = e.clone(t.ssContent);
    t.ssFallback.transition = e.clone(t.ssFallback);
  } else {
    t.transition = e;
  }
}
function of(t, e = false, n) {
  let r = [];
  let s = 0;
  for (let i = 0; i < t.length; i++) {
    let o = t[i];
    const a = n == null ? o.key : String(n) + String(o.key ?? i);
    if (o.type === Ue) {
      if (o.patchFlag & 128) {
        s++;
      }
      r = r.concat(of(o.children, e, a));
    } else if (e || o.type !== Oe) {
      r.push(a != null ? an(o, {
        key: a
      }) : o);
    }
  }
  if (s > 1) {
    for (let i = 0; i < r.length; i++) {
      r[i].patchFlag = -2;
    }
  }
  return r;
} /*! #__NO_SIDE_EFFECTS__ */
function Xt(t, e) {
  if (Z(t)) {
    return Re({
      name: t.name
    }, e, {
      setup: t
    });
  } else {
    return t;
  }
}
function Va(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function ai(t, e, n, r, s = false) {
  if (X(t)) {
    t.forEach((m, g) => ai(m, e && (X(e) ? e[g] : e), n, r, s));
    return;
  }
  if (Cn(r) && !s) {
    return;
  }
  const i = r.shapeFlag & 4 ? nl(r.component) : r.el;
  const o = s ? null : i;
  const {
    i: a,
    r: l
  } = t;
  const u = e && e.r;
  const c = a.refs === pe ? a.refs = {} : a.refs;
  const f = a.setupState;
  const h = re(f);
  const d = f === pe ? () => false : m => ae(h, m);
  if (u != null && u !== l) {
    if (ve(u)) {
      c[u] = null;
      if (d(u)) {
        f[u] = null;
      }
    } else if (Ce(u)) {
      u.value = null;
    }
  }
  if (Z(l)) {
    Ps(l, a, 12, [o, c]);
  } else {
    const m = ve(l);
    const g = Ce(l);
    if (m || g) {
      const w = () => {
        if (t.f) {
          const k = m ? d(l) ? f[l] : c[l] : l.value;
          if (s) {
            if (X(k)) {
              Ra(k, i);
            }
          } else if (X(k)) {
            if (!k.includes(i)) {
              k.push(i);
            }
          } else if (m) {
            c[l] = [i];
            if (d(l)) {
              f[l] = c[l];
            }
          } else {
            l.value = [i];
            if (t.k) {
              c[t.k] = l.value;
            }
          }
        } else if (m) {
          c[l] = o;
          if (d(l)) {
            f[l] = o;
          }
        } else if (g) {
          l.value = o;
          if (t.k) {
            c[t.k] = o;
          }
        }
      };
      if (o) {
        w.id = -1;
        Le(w, n);
      } else {
        w();
      }
    }
  }
}
let Dl = false;
const fr = () => {
  if (!Dl) {
    console.error("Hydration completed but contains mismatches.");
    Dl = true;
  }
};
const Dp = t => t.namespaceURI.includes("svg") && t.tagName !== "foreignObject";
const Np = t => t.namespaceURI.includes("MathML");
const Hs = t => {
  if (t.nodeType === 1) {
    if (Dp(t)) {
      return "svg";
    }
    if (Np(t)) {
      return "mathml";
    }
  }
};
const mr = t => t.nodeType === 8;
function $p(t) {
  const {
    mt: e,
    p: n,
    o: {
      patchProp: r,
      createText: s,
      nextSibling: i,
      parentNode: o,
      remove: a,
      insert: l,
      createComment: u
    }
  } = t;
  const c = (p, _) => {
    if (!_.hasChildNodes()) {
      n(null, p, _);
      ii();
      _._vnode = p;
      return;
    }
    f(_.firstChild, p, null, null, null);
    ii();
    _._vnode = p;
  };
  const f = (p, _, y, S, C, E = false) => {
    E = E || !!_.dynamicChildren;
    const x = mr(p) && p.data === "[";
    const R = () => g(p, _, y, S, C, x);
    const {
      type: D,
      ref: O,
      shapeFlag: $,
      patchFlag: Y
    } = _;
    let J = p.nodeType;
    _.el = p;
    if (Y === -2) {
      E = false;
      _.dynamicChildren = null;
    }
    let N = null;
    switch (D) {
      case Qn:
        if (J !== 3) {
          if (_.children === "") {
            l(_.el = s(""), o(p), p);
            N = p;
          } else {
            N = R();
          }
        } else {
          if (p.data !== _.children) {
            fr();
            p.data = _.children;
          }
          N = i(p);
        }
        break;
      case Oe:
        if (v(p)) {
          N = i(p);
          k(_.el = p.content.firstChild, p, y);
        } else if (J !== 8 || x) {
          N = R();
        } else {
          N = i(p);
        }
        break;
      case ns:
        if (x) {
          p = i(p);
          J = p.nodeType;
        }
        if (J === 1 || J === 3) {
          N = p;
          const j = !_.children.length;
          for (let z = 0; z < _.staticCount; z++) {
            if (j) {
              _.children += N.nodeType === 1 ? N.outerHTML : N.data;
            }
            if (z === _.staticCount - 1) {
              _.anchor = N;
            }
            N = i(N);
          }
          if (x) {
            return i(N);
          } else {
            return N;
          }
        } else {
          R();
        }
        break;
      case Ue:
        if (x) {
          N = m(p, _, y, S, C, E);
        } else {
          N = R();
        }
        break;
      default:
        if ($ & 1) {
          if ((J !== 1 || _.type.toLowerCase() !== p.tagName.toLowerCase()) && !v(p)) {
            N = R();
          } else {
            N = h(p, _, y, S, C, E);
          }
        } else if ($ & 6) {
          _.slotScopeIds = C;
          const j = o(p);
          if (x) {
            N = w(p);
          } else if (mr(p) && p.data === "teleport start") {
            N = w(p, p.data, "teleport end");
          } else {
            N = i(p);
          }
          e(_, j, null, y, S, Hs(j), E);
          if (Cn(_)) {
            let z;
            if (x) {
              z = ke(Ue);
              z.anchor = N ? N.previousSibling : j.lastChild;
            } else {
              z = p.nodeType === 3 ? Za("") : ke("div");
            }
            z.el = p;
            _.component.subTree = z;
          }
        } else if ($ & 64) {
          if (J !== 8) {
            N = R();
          } else {
            N = _.type.hydrate(p, _, y, S, C, E, t, d);
          }
        } else if ($ & 128) {
          N = _.type.hydrate(p, _, y, S, Hs(o(p)), C, E, t, f);
        }
    }
    if (O != null) {
      ai(O, null, S, _);
    }
    return N;
  };
  const h = (p, _, y, S, C, E) => {
    E = E || !!_.dynamicChildren;
    const {
      type: x,
      props: R,
      patchFlag: D,
      shapeFlag: O,
      dirs: $,
      transition: Y
    } = _;
    const J = x === "input" || x === "option";
    if (J || D !== -1) {
      if ($) {
        Ut(_, null, y, "created");
      }
      let N = false;
      if (v(p)) {
        N = Ef(null, Y) && y && y.vnode.props && y.vnode.props.appear;
        const z = p.content.firstChild;
        if (N) {
          Y.beforeEnter(z);
        }
        k(z, p, y);
        _.el = p = z;
      }
      if (O & 16 && (!R || !R.innerHTML && !R.textContent)) {
        let z = d(p.firstChild, _, p, y, S, C, E);
        while (z) {
          if (!Fs(p, 1)) {
            fr();
          }
          const _e = z;
          z = z.nextSibling;
          a(_e);
        }
      } else if (O & 8) {
        let z = _.children;
        if (z[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA")) {
          z = z.slice(1);
        }
        if (p.textContent !== z) {
          if (!Fs(p, 0)) {
            fr();
          }
          p.textContent = _.children;
        }
      }
      if (R) {
        if (J || !E || D & 48) {
          const z = p.tagName.includes("-");
          for (const _e in R) {
            if (J && (_e.endsWith("value") || _e === "indeterminate") || Cs(_e) && !kr(_e) || _e[0] === "." || z) {
              r(p, _e, null, R[_e], undefined, y);
            }
          }
        } else if (R.onClick) {
          r(p, "onClick", null, R.onClick, undefined, y);
        } else if (D & 4 && on(R.style)) {
          for (const z in R.style) {
            R.style[z];
          }
        }
      }
      let j;
      if (j = R && R.onVnodeBeforeMount) {
        tt(j, y, _);
      }
      if ($) {
        Ut(_, null, y, "beforeMount");
      }
      if ((j = R && R.onVnodeMounted) || $ || N) {
        If(() => {
          if (j) {
            tt(j, y, _);
          }
          if (N) {
            Y.enter(p);
          }
          if ($) {
            Ut(_, null, y, "mounted");
          }
        }, S);
      }
    }
    return p.nextSibling;
  };
  const d = (p, _, y, S, C, E, x) => {
    x = x || !!_.dynamicChildren;
    const R = _.children;
    const D = R.length;
    for (let O = 0; O < D; O++) {
      const $ = x ? R[O] : R[O] = pt(R[O]);
      const Y = $.type === Qn;
      if (p) {
        if (Y && !x && O + 1 < D && pt(R[O + 1]).type === Qn) {
          l(s(p.data.slice($.children.length)), y, i(p));
          p.data = $.children;
        }
        p = f(p, $, S, C, E, x);
      } else if (Y && !$.children) {
        l($.el = s(""), y);
      } else {
        if (!Fs(y, 1)) {
          fr();
        }
        n(null, $, y, null, S, C, Hs(y), E);
      }
    }
    return p;
  };
  const m = (p, _, y, S, C, E) => {
    const {
      slotScopeIds: x
    } = _;
    if (x) {
      C = C ? C.concat(x) : x;
    }
    const R = o(p);
    const D = d(i(p), _, R, y, S, C, E);
    if (D && mr(D) && D.data === "]") {
      return i(_.anchor = D);
    } else {
      fr();
      l(_.anchor = u("]"), R, D);
      return D;
    }
  };
  const g = (p, _, y, S, C, E) => {
    if (!Fs(p.parentElement, 1)) {
      fr();
    }
    _.el = null;
    if (E) {
      const D = w(p);
      while (true) {
        const O = i(p);
        if (O && O !== D) {
          a(O);
        } else {
          break;
        }
      }
    }
    const x = i(p);
    const R = o(p);
    a(p);
    n(null, _, R, x, y, S, Hs(R), C);
    return x;
  };
  const w = (p, _ = "[", y = "]") => {
    let S = 0;
    while (p) {
      p = i(p);
      if (p && mr(p) && (p.data === _ && S++, p.data === y)) {
        if (S === 0) {
          return i(p);
        }
        S--;
      }
    }
    return p;
  };
  const k = (p, _, y) => {
    const S = _.parentNode;
    if (S) {
      S.replaceChild(p, _);
    }
    let C = y;
    while (C) {
      if (C.vnode.el === _) {
        C.vnode.el = C.subTree.el = p;
      }
      C = C.parent;
    }
  };
  const v = p => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [c, f];
}
const Nl = "data-allow-mismatch";
const Hp = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Fs(t, e) {
  if (e === 0 || e === 1) {
    while (t && !t.hasAttribute(Nl)) {
      t = t.parentElement;
    }
  }
  const n = t && t.getAttribute(Nl);
  if (n == null) {
    return false;
  }
  if (n === "") {
    return true;
  }
  {
    const r = n.split(",");
    if (e === 0 && r.includes("children")) {
      return true;
    } else {
      return n.split(",").includes(Hp[e]);
    }
  }
}
Ri().requestIdleCallback;
Ri().cancelIdleCallback;
function Fp(t, e) {
  if (mr(t) && t.data === "[") {
    let n = 1;
    let r = t.nextSibling;
    while (r) {
      if (r.nodeType === 1) {
        if (e(r) === false) {
          break;
        }
      } else if (mr(r)) {
        if (r.data === "]") {
          if (--n === 0) {
            break;
          }
        } else if (r.data === "[") {
          n++;
        }
      }
      r = r.nextSibling;
    }
  } else {
    e(t);
  }
}
const Cn = t => !!t.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function Ao(t) {
  if (Z(t)) {
    t = {
      loader: t
    };
  }
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    hydrate: i,
    timeout: o,
    suspensible: a = true,
    onError: l
  } = t;
  let u = null;
  let c;
  let f = 0;
  const h = () => {
    f++;
    u = null;
    return d();
  };
  const d = () => {
    let m;
    return u || (m = u = e().catch(g => {
      g = g instanceof Error ? g : new Error(String(g));
      if (l) {
        return new Promise((w, k) => {
          l(g, () => w(h()), () => k(g), f + 1);
        });
      }
      throw g;
    }).then(g => m !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)));
  };
  return Xt({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    __asyncHydrate(m, g, w) {
      const k = i ? () => {
        const v = i(w, p => Fp(m, p));
        if (v) {
          (g.bum ||= []).push(v);
        }
      } : w;
      if (c) {
        k();
      } else {
        d().then(() => !g.isUnmounted && k());
      }
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const m = Ae;
      Va(m);
      if (c) {
        return () => Ji(c, m);
      }
      const g = p => {
        u = null;
        jr(p, m, 13, !r);
      };
      if (a && m.suspense || Ir) {
        return d().then(p => () => Ji(p, m)).catch(p => {
          g(p);
          return () => r ? ke(r, {
            error: p
          }) : null;
        });
      }
      const w = We(false);
      const k = We();
      const v = We(!!s);
      if (s) {
        setTimeout(() => {
          v.value = false;
        }, s);
      }
      if (o != null) {
        setTimeout(() => {
          if (!w.value && !k.value) {
            const p = new Error(`Async component timed out after ${o}ms.`);
            g(p);
            k.value = p;
          }
        }, o);
      }
      d().then(() => {
        w.value = true;
        if (m.parent && Rs(m.parent.vnode)) {
          m.parent.update();
        }
      }).catch(p => {
        g(p);
        k.value = p;
      });
      return () => {
        if (w.value && c) {
          return Ji(c, m);
        }
        if (k.value && r) {
          return ke(r, {
            error: k.value
          });
        }
        if (n && !v.value) {
          return ke(n);
        }
      };
    }
  });
}
function Ji(t, e) {
  const {
    ref: n,
    props: r,
    children: s,
    ce: i
  } = e.vnode;
  const o = ke(t, r, s);
  o.ref = n;
  o.ce = i;
  delete e.vnode.ce;
  return o;
}
const Rs = t => t.type.__isKeepAlive;
const jp = {
  name: "KeepAlive",
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(t, {
    slots: e
  }) {
    const n = Os();
    const r = n.ctx;
    if (!r.renderer) {
      return () => {
        const v = e.default && e.default();
        if (v && v.length === 1) {
          return v[0];
        } else {
          return v;
        }
      };
    }
    const s = new Map();
    const i = new Set();
    let o = null;
    const a = n.suspense;
    const {
      renderer: {
        p: l,
        m: u,
        um: c,
        o: {
          createElement: f
        }
      }
    } = r;
    const h = f("div");
    r.activate = (v, p, _, y, S) => {
      const C = v.component;
      u(v, p, _, 0, a);
      l(C.vnode, v, p, _, C, a, y, v.slotScopeIds, S);
      Le(() => {
        C.isDeactivated = false;
        if (C.a) {
          Qr(C.a);
        }
        const E = v.props && v.props.onVnodeMounted;
        if (E) {
          tt(E, C.parent, v);
        }
      }, a);
    };
    r.deactivate = v => {
      const p = v.component;
      ci(p.m);
      ci(p.a);
      u(v, h, null, 1, a);
      Le(() => {
        if (p.da) {
          Qr(p.da);
        }
        const _ = v.props && v.props.onVnodeUnmounted;
        if (_) {
          tt(_, p.parent, v);
        }
        p.isDeactivated = true;
      }, a);
    };
    function d(v) {
      Qi(v);
      c(v, n, a, true);
    }
    function m(v) {
      s.forEach((p, _) => {
        const y = Fo(p.type);
        if (y && !v(y)) {
          g(_);
        }
      });
    }
    function g(v) {
      const p = s.get(v);
      if (p && (!o || !Bt(p, o))) {
        d(p);
      } else if (o) {
        Qi(o);
      }
      s.delete(v);
      i.delete(v);
    }
    En(() => [t.include, t.exclude], ([v, p]) => {
      if (v) {
        m(_ => qr(v, _));
      }
      if (p) {
        m(_ => !qr(p, _));
      }
    }, {
      flush: "post",
      deep: true
    });
    let w = null;
    const k = () => {
      if (w != null) {
        if (ui(n.subTree.type)) {
          Le(() => {
            s.set(w, js(n.subTree));
          }, n.subTree.suspense);
        } else {
          s.set(w, js(n.subTree));
        }
      }
    };
    za(k);
    cf(k);
    Wa(() => {
      s.forEach(v => {
        const {
          subTree: p,
          suspense: _
        } = n;
        const y = js(p);
        if (v.type === y.type && v.key === y.key) {
          Qi(y);
          const S = y.component.da;
          if (S) {
            Le(S, _);
          }
          return;
        }
        d(v);
      });
    });
    return () => {
      w = null;
      if (!e.default) {
        return o = null;
      }
      const v = e.default();
      const p = v[0];
      if (v.length > 1) {
        o = null;
        return v;
      }
      if (!rr(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128)) {
        o = null;
        return p;
      }
      let _ = js(p);
      if (_.type === Oe) {
        o = null;
        return _;
      }
      const y = _.type;
      const S = Fo(Cn(_) ? _.type.__asyncResolved || {} : y);
      const {
        include: C,
        exclude: E,
        max: x
      } = t;
      if (C && (!S || !qr(C, S)) || E && S && qr(E, S)) {
        _.shapeFlag &= -257;
        o = _;
        return p;
      }
      const R = _.key == null ? y : _.key;
      const D = s.get(R);
      if (_.el) {
        _ = an(_);
        if (p.shapeFlag & 128) {
          p.ssContent = _;
        }
      }
      w = R;
      if (D) {
        _.el = D.el;
        _.component = D.component;
        if (_.transition) {
          Ar(_, _.transition);
        }
        _.shapeFlag |= 512;
        i.delete(R);
        i.add(R);
      } else {
        i.add(R);
        if (x && i.size > parseInt(x, 10)) {
          g(i.values().next().value);
        }
      }
      _.shapeFlag |= 256;
      o = _;
      if (ui(p.type)) {
        return p;
      } else {
        return _;
      }
    };
  }
};
const Up = jp;
function qr(t, e) {
  if (X(t)) {
    return t.some(n => qr(n, e));
  } else if (ve(t)) {
    return t.split(",").includes(e);
  } else if (Vd(t)) {
    t.lastIndex = 0;
    return t.test(e);
  } else {
    return false;
  }
}
function Vp(t, e) {
  af(t, "a", e);
}
function zp(t, e) {
  af(t, "da", e);
}
function af(t, e, n = Ae) {
  const r = t.__wdc ||= () => {
    let s = n;
    while (s) {
      if (s.isDeactivated) {
        return;
      }
      s = s.parent;
    }
    return t();
  };
  Li(e, r, n);
  if (n) {
    let s = n.parent;
    while (s && s.parent) {
      if (Rs(s.parent.vnode)) {
        Wp(r, e, n, s);
      }
      s = s.parent;
    }
  }
}
function Wp(t, e, n, r) {
  const s = Li(e, t, r, true);
  Ga(() => {
    Ra(r[e], s);
  }, n);
}
function Qi(t) {
  t.shapeFlag &= -257;
  t.shapeFlag &= -513;
}
function js(t) {
  if (t.shapeFlag & 128) {
    return t.ssContent;
  } else {
    return t;
  }
}
function Li(t, e, n = Ae, r = false) {
  if (n) {
    const s = n[t] ||= [];
    const i = e.__weh ||= (...o) => {
      Ln();
      const a = sr(n);
      const l = Nt(e, n, t, o);
      a();
      Bn();
      return l;
    };
    if (r) {
      s.unshift(i);
    } else {
      s.push(i);
    }
    return i;
  }
}
const fn = t => (e, n = Ae) => {
  if (!Ir || t === "sp") {
    Li(t, (...r) => e(...r), n);
  }
};
const lf = fn("bm");
const za = fn("m");
const Gp = fn("bu");
const cf = fn("u");
const Wa = fn("bum");
const Ga = fn("um");
const qp = fn("sp");
const Kp = fn("rtg");
const Yp = fn("rtc");
function uf(t, e = Ae) {
  Li("ec", t, e);
}
const ff = "components";
function E1(t, e) {
  return df(ff, t, true, e) || t;
}
const hf = Symbol.for("v-ndc");
function qs(t) {
  if (ve(t)) {
    return df(ff, t, false) || t;
  } else {
    return t || hf;
  }
}
function df(t, e, n = true, r = false) {
  const s = Be || Ae;
  if (s) {
    const i = s.type;
    {
      const a = Fo(i, false);
      if (a && (a === e || a === Rt(e) || a === Pi(Rt(e)))) {
        return i;
      }
    }
    const o = $l(s[t] || i[t], e) || $l(s.appContext[t], e);
    if (!o && r) {
      return i;
    } else {
      return o;
    }
  }
}
function $l(t, e) {
  return t && (t[e] || t[Rt(e)] || t[Pi(Rt(e))]);
}
function P1(t, e, n, r) {
  let s;
  const i = n;
  const o = X(t);
  if (o || ve(t)) {
    const a = o && on(t);
    let l = false;
    if (a) {
      l = !Pt(t);
      t = Ii(t);
    }
    s = new Array(t.length);
    for (let u = 0, c = t.length; u < c; u++) {
      s[u] = e(l ? je(t[u]) : t[u], u, undefined, i);
    }
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let a = 0; a < t; a++) {
      s[a] = e(a + 1, a, undefined, i);
    }
  } else if (me(t)) {
    if (t[Symbol.iterator]) {
      s = Array.from(t, (a, l) => e(a, l, undefined, i));
    } else {
      const a = Object.keys(t);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        s[l] = e(t[c], c, l, i);
      }
    }
  } else {
    s = [];
  }
  return s;
}
function R1(t, e, n = {}, r, s) {
  if (Be.ce || Be.parent && Cn(Be.parent) && Be.parent.ce) {
    nt();
    return St(Ue, null, [ke("slot", n, r)], 64);
  }
  let i = t[e];
  if (i && i._c) {
    i._d = false;
  }
  nt();
  const o = i && pf(i(n));
  const a = n.key || o && o.key;
  const l = St(Ue, {
    key: (a && !un(a) ? a : `_${e}`) + (!o && r ? "_fb" : "")
  }, o || [], o && t._ === 1 ? 64 : -2);
  if (l.scopeId) {
    l.slotScopeIds = [l.scopeId + "-s"];
  }
  if (i && i._c) {
    i._d = true;
  }
  return l;
}
function pf(t) {
  if (t.some(e => rr(e) ? e.type !== Oe && (e.type !== Ue || !!pf(e.children)) : true)) {
    return t;
  } else {
    return null;
  }
}
const Mo = t => t ? Hf(t) ? nl(t) : Mo(t.parent) : null;
const ts = Re(Object.create(null), {
  $: t => t,
  $el: t => t.vnode.el,
  $data: t => t.data,
  $props: t => t.props,
  $attrs: t => t.attrs,
  $slots: t => t.slots,
  $refs: t => t.refs,
  $parent: t => Mo(t.parent),
  $root: t => Mo(t.root),
  $host: t => t.ce,
  $emit: t => t.emit,
  $options: t => qa(t),
  $forceUpdate: t => t.f ||= () => {
    ja(t.update);
  },
  $nextTick: t => t.n ||= Ht.bind(t.proxy),
  $watch: t => gg.bind(t)
});
const Zi = (t, e) => t !== pe && !t.__isScriptSetup && ae(t, e);
const Xp = {
  get({
    _: t
  }, e) {
    if (e === "__v_skip") {
      return true;
    }
    const {
      ctx: n,
      setupState: r,
      data: s,
      props: i,
      accessCache: o,
      type: a,
      appContext: l
    } = t;
    let u;
    if (e[0] !== "$") {
      const d = o[e];
      if (d !== undefined) {
        switch (d) {
          case 1:
            return r[e];
          case 2:
            return s[e];
          case 4:
            return n[e];
          case 3:
            return i[e];
        }
      } else {
        if (Zi(r, e)) {
          o[e] = 1;
          return r[e];
        }
        if (s !== pe && ae(s, e)) {
          o[e] = 2;
          return s[e];
        }
        if ((u = t.propsOptions[0]) && ae(u, e)) {
          o[e] = 3;
          return i[e];
        }
        if (n !== pe && ae(n, e)) {
          o[e] = 4;
          return n[e];
        }
        if (Io) {
          o[e] = 0;
        }
      }
    }
    const c = ts[e];
    let f;
    let h;
    if (c) {
      if (e === "$attrs") {
        Fe(t.attrs, "get", "");
      }
      return c(t);
    }
    if ((f = a.__cssModules) && (f = f[e])) {
      return f;
    }
    if (n !== pe && ae(n, e)) {
      o[e] = 4;
      return n[e];
    }
    h = l.config.globalProperties;
    if (ae(h, e)) {
      return h[e];
    }
  },
  set({
    _: t
  }, e, n) {
    const {
      data: r,
      setupState: s,
      ctx: i
    } = t;
    if (Zi(s, e)) {
      s[e] = n;
      return true;
    } else if (r !== pe && ae(r, e)) {
      r[e] = n;
      return true;
    } else if (ae(t.props, e) || e[0] === "$" && e.slice(1) in t) {
      return false;
    } else {
      i[e] = n;
      return true;
    }
  },
  has({
    _: {
      data: t,
      setupState: e,
      accessCache: n,
      ctx: r,
      appContext: s,
      propsOptions: i
    }
  }, o) {
    let a;
    return !!n[o] || t !== pe && ae(t, o) || Zi(e, o) || (a = i[0]) && ae(a, o) || ae(r, o) || ae(ts, o) || ae(s.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    if (n.get != null) {
      t._.accessCache[e] = 0;
    } else if (ae(n, "value")) {
      this.set(t, e, n.value, null);
    }
    return Reflect.defineProperty(t, e, n);
  }
};
function Hl(t) {
  if (X(t)) {
    return t.reduce((e, n) => {
      e[n] = null;
      return e;
    }, {});
  } else {
    return t;
  }
}
function O1(t) {
  const e = Os();
  let n = t();
  $o();
  if (Oa(n)) {
    n = n.catch(r => {
      sr(e);
      throw r;
    });
  }
  return [n, () => sr(e)];
}
let Io = true;
function Jp(t) {
  const e = qa(t);
  const n = t.proxy;
  const r = t.ctx;
  Io = false;
  if (e.beforeCreate) {
    Fl(e.beforeCreate, t, "bc");
  }
  const {
    data: s,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: m,
    activated: g,
    deactivated: w,
    beforeDestroy: k,
    beforeUnmount: v,
    destroyed: p,
    unmounted: _,
    render: y,
    renderTracked: S,
    renderTriggered: C,
    errorCaptured: E,
    serverPrefetch: x,
    expose: R,
    inheritAttrs: D,
    components: O,
    directives: $,
    filters: Y
  } = e;
  if (u) {
    Qp(u, r, null);
  }
  if (o) {
    for (const j in o) {
      const z = o[j];
      if (Z(z)) {
        r[j] = z.bind(n);
      }
    }
  }
  if (s) {
    const j = s.call(n, n);
    if (me(j)) {
      t.data = Yt(j);
    }
  }
  Io = true;
  if (i) {
    for (const j in i) {
      const z = i[j];
      const _e = Z(z) ? z.bind(n, n) : Z(z.get) ? z.get.bind(n, n) : Gt;
      const et = !Z(z) && Z(z.set) ? z.set.bind(n) : Gt;
      const Ne = gt({
        get: _e,
        set: et
      });
      Object.defineProperty(r, j, {
        enumerable: true,
        configurable: true,
        get: () => Ne.value,
        set: xe => Ne.value = xe
      });
    }
  }
  if (a) {
    for (const j in a) {
      gf(a[j], r, n, j);
    }
  }
  if (l) {
    const j = Z(l) ? l.call(n) : l;
    Reflect.ownKeys(j).forEach(z => {
      Jn(z, j[z]);
    });
  }
  if (c) {
    Fl(c, t, "c");
  }
  function N(j, z) {
    if (X(z)) {
      z.forEach(_e => j(_e.bind(n)));
    } else if (z) {
      j(z.bind(n));
    }
  }
  N(lf, f);
  N(za, h);
  N(Gp, d);
  N(cf, m);
  N(Vp, g);
  N(zp, w);
  N(uf, E);
  N(Yp, S);
  N(Kp, C);
  N(Wa, v);
  N(Ga, _);
  N(qp, x);
  if (X(R)) {
    if (R.length) {
      const j = t.exposed ||= {};
      R.forEach(z => {
        Object.defineProperty(j, z, {
          get: () => n[z],
          set: _e => n[z] = _e
        });
      });
    } else {
      t.exposed ||= {};
    }
  }
  if (y && t.render === Gt) {
    t.render = y;
  }
  if (D != null) {
    t.inheritAttrs = D;
  }
  if (O) {
    t.components = O;
  }
  if ($) {
    t.directives = $;
  }
  if (x) {
    Va(t);
  }
}
function Qp(t, e, n = Gt) {
  if (X(t)) {
    t = Lo(t);
  }
  for (const r in t) {
    const s = t[r];
    let i;
    if (me(s)) {
      if ("default" in s) {
        i = De(s.from || r, s.default, true);
      } else {
        i = De(s.from || r);
      }
    } else {
      i = De(s);
    }
    if (Ce(i)) {
      Object.defineProperty(e, r, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: o => i.value = o
      });
    } else {
      e[r] = i;
    }
  }
}
function Fl(t, e, n) {
  Nt(X(t) ? t.map(r => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function gf(t, e, n, r) {
  let s = r.includes(".") ? Of(n, r) : () => n[r];
  if (ve(t)) {
    const i = e[t];
    if (Z(i)) {
      En(s, i);
    }
  } else if (Z(t)) {
    En(s, t.bind(n));
  } else if (me(t)) {
    if (X(t)) {
      t.forEach(i => gf(i, e, n, r));
    } else {
      const i = Z(t.handler) ? t.handler.bind(n) : e[t.handler];
      if (Z(i)) {
        En(s, i, t);
      }
    }
  }
}
function qa(t) {
  const e = t.type;
  const {
    mixins: n,
    extends: r
  } = e;
  const {
    mixins: s,
    optionsCache: i,
    config: {
      optionMergeStrategies: o
    }
  } = t.appContext;
  const a = i.get(e);
  let l;
  if (a) {
    l = a;
  } else if (!s.length && !n && !r) {
    l = e;
  } else {
    l = {};
    if (s.length) {
      s.forEach(u => li(l, u, o, true));
    }
    li(l, e, o);
  }
  if (me(e)) {
    i.set(e, l);
  }
  return l;
}
function li(t, e, n, r = false) {
  const {
    mixins: s,
    extends: i
  } = e;
  if (i) {
    li(t, i, n, true);
  }
  if (s) {
    s.forEach(o => li(t, o, n, true));
  }
  for (const o in e) {
    if (!r || o !== "expose") {
      const a = Zp[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  }
  return t;
}
const Zp = {
  data: jl,
  props: Ul,
  emits: Ul,
  methods: Kr,
  computed: Kr,
  beforeCreate: Ke,
  created: Ke,
  beforeMount: Ke,
  mounted: Ke,
  beforeUpdate: Ke,
  updated: Ke,
  beforeDestroy: Ke,
  beforeUnmount: Ke,
  destroyed: Ke,
  unmounted: Ke,
  activated: Ke,
  deactivated: Ke,
  errorCaptured: Ke,
  serverPrefetch: Ke,
  components: Kr,
  directives: Kr,
  watch: tg,
  provide: jl,
  inject: eg
};
function jl(t, e) {
  if (e) {
    if (t) {
      return function () {
        return Re(Z(t) ? t.call(this, this) : t, Z(e) ? e.call(this, this) : e);
      };
    } else {
      return e;
    }
  } else {
    return t;
  }
}
function eg(t, e) {
  return Kr(Lo(t), Lo(e));
}
function Lo(t) {
  if (X(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      e[t[n]] = t[n];
    }
    return e;
  }
  return t;
}
function Ke(t, e) {
  if (t) {
    return [...new Set([].concat(t, e))];
  } else {
    return e;
  }
}
function Kr(t, e) {
  if (t) {
    return Re(Object.create(null), t, e);
  } else {
    return e;
  }
}
function Ul(t, e) {
  if (t) {
    if (X(t) && X(e)) {
      return [...new Set([...t, ...e])];
    } else {
      return Re(Object.create(null), Hl(t), Hl(e ?? {}));
    }
  } else {
    return e;
  }
}
function tg(t, e) {
  if (!t) {
    return e;
  }
  if (!e) {
    return t;
  }
  const n = Re(Object.create(null), t);
  for (const r in e) {
    n[r] = Ke(t[r], e[r]);
  }
  return n;
}
function mf() {
  return {
    app: null,
    config: {
      isNativeTag: jd,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let ng = 0;
function rg(t, e) {
  return function (r, s = null) {
    if (!Z(r)) {
      r = Re({}, r);
    }
    if (s != null && !me(s)) {
      s = null;
    }
    const i = mf();
    const o = new WeakSet();
    const a = [];
    let l = false;
    const u = i.app = {
      _uid: ng++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: jf,
      get config() {
        return i.config;
      },
      set config(c) {},
      use(c, ...f) {
        if (!o.has(c)) {
          if (c && Z(c.install)) {
            o.add(c);
            c.install(u, ...f);
          } else if (Z(c)) {
            o.add(c);
            c(u, ...f);
          }
        }
        return u;
      },
      mixin(c) {
        if (!i.mixins.includes(c)) {
          i.mixins.push(c);
        }
        return u;
      },
      component(c, f) {
        if (f) {
          i.components[c] = f;
          return u;
        } else {
          return i.components[c];
        }
      },
      directive(c, f) {
        if (f) {
          i.directives[c] = f;
          return u;
        } else {
          return i.directives[c];
        }
      },
      mount(c, f, h) {
        if (!l) {
          const d = u._ceVNode || ke(r, s);
          d.appContext = i;
          if (h === true) {
            h = "svg";
          } else if (h === false) {
            h = undefined;
          }
          if (f && e) {
            e(d, c);
          } else {
            t(d, c, h);
          }
          l = true;
          u._container = c;
          c.__vue_app__ = u;
          return nl(d.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        if (l) {
          Nt(a, u._instance, 16);
          t(null, u._container);
          delete u._container.__vue_app__;
        }
      },
      provide(c, f) {
        i.provides[c] = f;
        return u;
      },
      runWithContext(c) {
        const f = Xn;
        Xn = u;
        try {
          return c();
        } finally {
          Xn = f;
        }
      }
    };
    return u;
  };
}
let Xn = null;
function Jn(t, e) {
  if (Ae) {
    let n = Ae.provides;
    const r = Ae.parent && Ae.parent.provides;
    if (r === n) {
      n = Ae.provides = Object.create(r);
    }
    n[t] = e;
  }
}
function De(t, e, n = false) {
  const r = Ae || Be;
  if (r || Xn) {
    const s = Xn ? Xn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : undefined;
    if (s && t in s) {
      return s[t];
    }
    if (arguments.length > 1) {
      if (n && Z(e)) {
        return e.call(r && r.proxy);
      } else {
        return e;
      }
    }
  }
}
function Ka() {
  return !!Ae || !!Be || !!Xn;
}
const _f = {};
const yf = () => Object.create(_f);
const bf = t => Object.getPrototypeOf(t) === _f;
function sg(t, e, n, r = false) {
  const s = {};
  const i = yf();
  t.propsDefaults = Object.create(null);
  vf(t, e, s, i);
  for (const o in t.propsOptions[0]) {
    if (!(o in s)) {
      s[o] = undefined;
    }
  }
  if (n) {
    t.props = r ? s : sn(s);
  } else if (t.type.props) {
    t.props = s;
  } else {
    t.props = i;
  }
  t.attrs = i;
}
function ig(t, e, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: {
      patchFlag: o
    }
  } = t;
  const a = re(s);
  const [l] = t.propsOptions;
  let u = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = t.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        if (Bi(t.emitsOptions, h)) {
          continue;
        }
        const d = e[h];
        if (l) {
          if (ae(i, h)) {
            if (d !== i[h]) {
              i[h] = d;
              u = true;
            }
          } else {
            const m = Rt(h);
            s[m] = Bo(l, a, m, d, t, false);
          }
        } else if (d !== i[h]) {
          i[h] = d;
          u = true;
        }
      }
    }
  } else {
    if (vf(t, e, s, i)) {
      u = true;
    }
    let c;
    for (const f in a) {
      if (!e || !ae(e, f) && ((c = ar(f)) === f || !ae(e, c))) {
        if (l) {
          if (n && (n[f] !== undefined || n[c] !== undefined)) {
            s[f] = Bo(l, a, f, undefined, t, true);
          }
        } else {
          delete s[f];
        }
      }
    }
    if (i !== a) {
      for (const f in i) {
        if (!e || !ae(e, f)) {
          delete i[f];
          u = true;
        }
      }
    }
  }
  if (u) {
    rn(t.attrs, "set", "");
  }
}
function vf(t, e, n, r) {
  const [s, i] = t.propsOptions;
  let o = false;
  let a;
  if (e) {
    for (let l in e) {
      if (kr(l)) {
        continue;
      }
      const u = e[l];
      let c;
      if (s && ae(s, c = Rt(l))) {
        if (!i || !i.includes(c)) {
          n[c] = u;
        } else {
          (a ||= {})[c] = u;
        }
      } else if (!Bi(t.emitsOptions, l)) {
        if (!(l in r) || u !== r[l]) {
          r[l] = u;
          o = true;
        }
      }
    }
  }
  if (i) {
    const l = re(n);
    const u = a || pe;
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      n[f] = Bo(s, l, f, u[f], t, !ae(u, f));
    }
  }
  return o;
}
function Bo(t, e, n, r, s, i) {
  const o = t[n];
  if (o != null) {
    const a = ae(o, "default");
    if (a && r === undefined) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && Z(l)) {
        const {
          propsDefaults: u
        } = s;
        if (n in u) {
          r = u[n];
        } else {
          const c = sr(s);
          r = u[n] = l.call(null, e);
          c();
        }
      } else {
        r = l;
      }
      if (s.ce) {
        s.ce._setProp(n, r);
      }
    }
    if (o[0]) {
      if (i && !a) {
        r = false;
      } else if (o[1] && (r === "" || r === ar(n))) {
        r = true;
      }
    }
  }
  return r;
}
const og = new WeakMap();
function wf(t, e, n = false) {
  const r = n ? og : e.propsCache;
  const s = r.get(t);
  if (s) {
    return s;
  }
  const i = t.props;
  const o = {};
  const a = [];
  let l = false;
  if (!Z(t)) {
    const c = f => {
      l = true;
      const [h, d] = wf(f, e, true);
      Re(o, h);
      if (d) {
        a.push(...d);
      }
    };
    if (!n && e.mixins.length) {
      e.mixins.forEach(c);
    }
    if (t.extends) {
      c(t.extends);
    }
    if (t.mixins) {
      t.mixins.forEach(c);
    }
  }
  if (!i && !l) {
    if (me(t)) {
      r.set(t, wr);
    }
    return wr;
  }
  if (X(i)) {
    for (let c = 0; c < i.length; c++) {
      const f = Rt(i[c]);
      if (Vl(f)) {
        o[f] = pe;
      }
    }
  } else if (i) {
    for (const c in i) {
      const f = Rt(c);
      if (Vl(f)) {
        const h = i[c];
        const d = o[f] = X(h) || Z(h) ? {
          type: h
        } : Re({}, h);
        const m = d.type;
        let g = false;
        let w = true;
        if (X(m)) {
          for (let k = 0; k < m.length; ++k) {
            const v = m[k];
            const p = Z(v) && v.name;
            if (p === "Boolean") {
              g = true;
              break;
            } else if (p === "String") {
              w = false;
            }
          }
        } else {
          g = Z(m) && m.name === "Boolean";
        }
        d[0] = g;
        d[1] = w;
        if (g || ae(d, "default")) {
          a.push(f);
        }
      }
    }
  }
  const u = [o, a];
  if (me(t)) {
    r.set(t, u);
  }
  return u;
}
function Vl(t) {
  return t[0] !== "$" && !kr(t);
}
const Tf = t => t[0] === "_" || t === "$stable";
const Ya = t => X(t) ? t.map(pt) : [pt(t)];
const ag = (t, e, n) => {
  if (e._n) {
    return e;
  }
  const r = Ua((...s) => Ya(e(...s)), n);
  r._c = false;
  return r;
};
const kf = (t, e, n) => {
  const r = t._ctx;
  for (const s in t) {
    if (Tf(s)) {
      continue;
    }
    const i = t[s];
    if (Z(i)) {
      e[s] = ag(s, i, r);
    } else if (i != null) {
      const o = Ya(i);
      e[s] = () => o;
    }
  }
};
const xf = (t, e) => {
  const n = Ya(e);
  t.slots.default = () => n;
};
const Sf = (t, e, n) => {
  for (const r in e) {
    if (n || r !== "_") {
      t[r] = e[r];
    }
  }
};
const lg = (t, e, n) => {
  const r = t.slots = yf();
  if (t.vnode.shapeFlag & 32) {
    const s = e._;
    if (s) {
      Sf(r, e, n);
      if (n) {
        Su(r, "_", s, true);
      }
    } else {
      kf(e, r);
    }
  } else if (e) {
    xf(t, e);
  }
};
const cg = (t, e, n) => {
  const {
    vnode: r,
    slots: s
  } = t;
  let i = true;
  let o = pe;
  if (r.shapeFlag & 32) {
    const a = e._;
    if (a) {
      if (n && a === 1) {
        i = false;
      } else {
        Sf(s, e, n);
      }
    } else {
      i = !e.$stable;
      kf(e, s);
    }
    o = e;
  } else if (e) {
    xf(t, e);
    o = {
      default: 1
    };
  }
  if (i) {
    for (const a in s) {
      if (!Tf(a) && o[a] == null) {
        delete s[a];
      }
    }
  }
};
const Le = If;
function ug(t) {
  return Cf(t);
}
function fg(t) {
  return Cf(t, $p);
}
function Cf(t, e) {
  const n = Ri();
  n.__VUE__ = true;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: h,
    setScopeId: d = Gt,
    insertStaticContent: m
  } = t;
  const g = (b, T, P, I = null, A = null, L = null, U = undefined, F = null, H = !!T.dynamicChildren) => {
    if (b === T) {
      return;
    }
    if (b && !Bt(b, T)) {
      I = M(b);
      xe(b, A, L, true);
      b = null;
    }
    if (T.patchFlag === -2) {
      H = false;
      T.dynamicChildren = null;
    }
    const {
      type: B,
      ref: Q,
      shapeFlag: W
    } = T;
    switch (B) {
      case Qn:
        w(b, T, P, I);
        break;
      case Oe:
        k(b, T, P, I);
        break;
      case ns:
        if (b == null) {
          v(T, P, I, U);
        }
        break;
      case Ue:
        O(b, T, P, I, A, L, U, F, H);
        break;
      default:
        if (W & 1) {
          y(b, T, P, I, A, L, U, F, H);
        } else if (W & 6) {
          $(b, T, P, I, A, L, U, F, H);
        } else if (W & 64 || W & 128) {
          B.process(b, T, P, I, A, L, U, F, H, q);
        }
    }
    if (Q != null && A) {
      ai(Q, b && b.ref, L, T || b, !T);
    }
  };
  const w = (b, T, P, I) => {
    if (b == null) {
      r(T.el = a(T.children), P, I);
    } else {
      const A = T.el = b.el;
      if (T.children !== b.children) {
        u(A, T.children);
      }
    }
  };
  const k = (b, T, P, I) => {
    if (b == null) {
      r(T.el = l(T.children || ""), P, I);
    } else {
      T.el = b.el;
    }
  };
  const v = (b, T, P, I) => {
    [b.el, b.anchor] = m(b.children, T, P, I, b.el, b.anchor);
  };
  const p = ({
    el: b,
    anchor: T
  }, P, I) => {
    let A;
    while (b && b !== T) {
      A = h(b);
      r(b, P, I);
      b = A;
    }
    r(T, P, I);
  };
  const _ = ({
    el: b,
    anchor: T
  }) => {
    let P;
    while (b && b !== T) {
      P = h(b);
      s(b);
      b = P;
    }
    s(T);
  };
  const y = (b, T, P, I, A, L, U, F, H) => {
    if (T.type === "svg") {
      U = "svg";
    } else if (T.type === "math") {
      U = "mathml";
    }
    if (b == null) {
      S(T, P, I, A, L, U, F, H);
    } else {
      x(b, T, A, L, U, F, H);
    }
  };
  const S = (b, T, P, I, A, L, U, F) => {
    let H;
    let B;
    const {
      props: Q,
      shapeFlag: W,
      transition: K,
      dirs: ee
    } = b;
    H = b.el = o(b.type, L, Q && Q.is, Q);
    if (W & 8) {
      c(H, b.children);
    } else if (W & 16) {
      E(b.children, H, null, I, A, eo(b, L), U, F);
    }
    if (ee) {
      Ut(b, null, I, "created");
    }
    C(H, b, b.scopeId, U, I);
    if (Q) {
      for (const he in Q) {
        if (he !== "value" && !kr(he)) {
          i(H, he, null, Q[he], L, I);
        }
      }
      if ("value" in Q) {
        i(H, "value", null, Q.value, L);
      }
      if (B = Q.onVnodeBeforeMount) {
        tt(B, I, b);
      }
    }
    if (ee) {
      Ut(b, null, I, "beforeMount");
    }
    const ne = Ef(A, K);
    if (ne) {
      K.beforeEnter(H);
    }
    r(H, T, P);
    if ((B = Q && Q.onVnodeMounted) || ne || ee) {
      Le(() => {
        if (B) {
          tt(B, I, b);
        }
        if (ne) {
          K.enter(H);
        }
        if (ee) {
          Ut(b, null, I, "mounted");
        }
      }, A);
    }
  };
  const C = (b, T, P, I, A) => {
    if (P) {
      d(b, P);
    }
    if (I) {
      for (let L = 0; L < I.length; L++) {
        d(b, I[L]);
      }
    }
    if (A) {
      let L = A.subTree;
      if (T === L || ui(L.type) && (L.ssContent === T || L.ssFallback === T)) {
        const U = A.vnode;
        C(b, U, U.scopeId, U.slotScopeIds, A.parent);
      }
    }
  };
  const E = (b, T, P, I, A, L, U, F, H = 0) => {
    for (let B = H; B < b.length; B++) {
      const Q = b[B] = F ? _n(b[B]) : pt(b[B]);
      g(null, Q, T, P, I, A, L, U, F);
    }
  };
  const x = (b, T, P, I, A, L, U) => {
    const F = T.el = b.el;
    let {
      patchFlag: H,
      dynamicChildren: B,
      dirs: Q
    } = T;
    H |= b.patchFlag & 16;
    const W = b.props || pe;
    const K = T.props || pe;
    let ee;
    if (P) {
      $n(P, false);
    }
    if (ee = K.onVnodeBeforeUpdate) {
      tt(ee, P, T, b);
    }
    if (Q) {
      Ut(T, b, P, "beforeUpdate");
    }
    if (P) {
      $n(P, true);
    }
    if (W.innerHTML && K.innerHTML == null || W.textContent && K.textContent == null) {
      c(F, "");
    }
    if (B) {
      R(b.dynamicChildren, B, F, P, I, eo(T, A), L);
    } else if (!U) {
      z(b, T, F, null, P, I, eo(T, A), L, false);
    }
    if (H > 0) {
      if (H & 16) {
        D(F, W, K, P, A);
      } else {
        if (H & 2 && W.class !== K.class) {
          i(F, "class", null, K.class, A);
        }
        if (H & 4) {
          i(F, "style", W.style, K.style, A);
        }
        if (H & 8) {
          const ne = T.dynamicProps;
          for (let he = 0; he < ne.length; he++) {
            const le = ne[he];
            const ct = W[le];
            const He = K[le];
            if (He !== ct || le === "value") {
              i(F, le, ct, He, A, P);
            }
          }
        }
      }
      if (H & 1 && b.children !== T.children) {
        c(F, T.children);
      }
    } else if (!U && B == null) {
      D(F, W, K, P, A);
    }
    if ((ee = K.onVnodeUpdated) || Q) {
      Le(() => {
        if (ee) {
          tt(ee, P, T, b);
        }
        if (Q) {
          Ut(T, b, P, "updated");
        }
      }, I);
    }
  };
  const R = (b, T, P, I, A, L, U) => {
    for (let F = 0; F < T.length; F++) {
      const H = b[F];
      const B = T[F];
      const Q = H.el && (H.type === Ue || !Bt(H, B) || H.shapeFlag & 70) ? f(H.el) : P;
      g(H, B, Q, null, I, A, L, U, true);
    }
  };
  const D = (b, T, P, I, A) => {
    if (T !== P) {
      if (T !== pe) {
        for (const L in T) {
          if (!kr(L) && !(L in P)) {
            i(b, L, T[L], null, A, I);
          }
        }
      }
      for (const L in P) {
        if (kr(L)) {
          continue;
        }
        const U = P[L];
        const F = T[L];
        if (U !== F && L !== "value") {
          i(b, L, F, U, A, I);
        }
      }
      if ("value" in P) {
        i(b, "value", T.value, P.value, A);
      }
    }
  };
  const O = (b, T, P, I, A, L, U, F, H) => {
    const B = T.el = b ? b.el : a("");
    const Q = T.anchor = b ? b.anchor : a("");
    let {
      patchFlag: W,
      dynamicChildren: K,
      slotScopeIds: ee
    } = T;
    if (ee) {
      F = F ? F.concat(ee) : ee;
    }
    if (b == null) {
      r(B, P, I);
      r(Q, P, I);
      E(T.children || [], P, Q, A, L, U, F, H);
    } else if (W > 0 && W & 64 && K && b.dynamicChildren) {
      R(b.dynamicChildren, K, P, A, L, U, F);
      if (T.key != null || A && T === A.subTree) {
        Pf(b, T, true);
      }
    } else {
      z(b, T, P, Q, A, L, U, F, H);
    }
  };
  const $ = (b, T, P, I, A, L, U, F, H) => {
    T.slotScopeIds = F;
    if (b == null) {
      if (T.shapeFlag & 512) {
        A.ctx.activate(T, P, I, U, H);
      } else {
        Y(T, P, I, A, L, U, H);
      }
    } else {
      J(b, T, H);
    }
  };
  const Y = (b, T, P, I, A, L, U) => {
    const F = b.component = Mg(b, I, A);
    if (Rs(b)) {
      F.ctx.renderer = q;
    }
    Ig(F, false, U);
    if (F.asyncDep) {
      if (A) {
        A.registerDep(F, N, U);
      }
      if (!b.el) {
        const H = F.subTree = ke(Oe);
        k(null, H, T, P);
      }
    } else {
      N(F, b, T, P, A, L, U);
    }
  };
  const J = (b, T, P) => {
    const I = T.component = b.component;
    if (wg(b, T, P)) {
      if (I.asyncDep && !I.asyncResolved) {
        j(I, T, P);
        return;
      } else {
        I.next = T;
        I.update();
      }
    } else {
      T.el = b.el;
      I.vnode = T;
    }
  };
  const N = (b, T, P, I, A, L, U) => {
    const F = () => {
      if (b.isMounted) {
        let {
          next: W,
          bu: K,
          u: ee,
          parent: ne,
          vnode: he
        } = b;
        {
          const ut = Rf(b);
          if (ut) {
            if (W) {
              W.el = he.el;
              j(b, W, U);
            }
            ut.asyncDep.then(() => {
              if (!b.isUnmounted) {
                F();
              }
            });
            return;
          }
        }
        let le = W;
        let ct;
        $n(b, false);
        if (W) {
          W.el = he.el;
          j(b, W, U);
        } else {
          W = he;
        }
        if (K) {
          Qr(K);
        }
        if (ct = W.props && W.props.onVnodeBeforeUpdate) {
          tt(ct, ne, W, he);
        }
        $n(b, true);
        const He = to(b);
        const Mt = b.subTree;
        b.subTree = He;
        g(Mt, He, f(Mt.el), M(Mt), b, A, L);
        W.el = He.el;
        if (le === null) {
          Ja(b, He.el);
        }
        if (ee) {
          Le(ee, A);
        }
        if (ct = W.props && W.props.onVnodeUpdated) {
          Le(() => tt(ct, ne, W, he), A);
        }
      } else {
        let W;
        const {
          el: K,
          props: ee
        } = T;
        const {
          bm: ne,
          m: he,
          parent: le,
          root: ct,
          type: He
        } = b;
        const Mt = Cn(T);
        $n(b, false);
        if (ne) {
          Qr(ne);
        }
        if (!Mt && (W = ee && ee.onVnodeBeforeMount)) {
          tt(W, le, T);
        }
        $n(b, true);
        if (K && ye) {
          const ut = () => {
            b.subTree = to(b);
            ye(K, b.subTree, b, A, null);
          };
          if (Mt && He.__asyncHydrate) {
            He.__asyncHydrate(K, b, ut);
          } else {
            ut();
          }
        } else {
          if (ct.ce) {
            ct.ce._injectChildStyle(He);
          }
          const ut = b.subTree = to(b);
          g(null, ut, P, I, b, A, L);
          T.el = ut.el;
        }
        if (he) {
          Le(he, A);
        }
        if (!Mt && (W = ee && ee.onVnodeMounted)) {
          const ut = T;
          Le(() => tt(W, le, ut), A);
        }
        if ((T.shapeFlag & 256 || le && Cn(le.vnode) && le.vnode.shapeFlag & 256) && b.a) {
          Le(b.a, A);
        }
        b.isMounted = true;
        T = P = I = null;
      }
    };
    b.scope.on();
    const H = b.effect = new Au(F);
    b.scope.off();
    const B = b.update = H.run.bind(H);
    const Q = b.job = H.runIfDirty.bind(H);
    Q.i = b;
    Q.id = b.uid;
    H.scheduler = () => ja(Q);
    $n(b, true);
    B();
  };
  const j = (b, T, P) => {
    T.component = b;
    const I = b.vnode.props;
    b.vnode = T;
    b.next = null;
    ig(b, T.props, I, P);
    cg(b, T.children, P);
    Ln();
    Ll(b);
    Bn();
  };
  const z = (b, T, P, I, A, L, U, F, H = false) => {
    const B = b && b.children;
    const Q = b ? b.shapeFlag : 0;
    const W = T.children;
    const {
      patchFlag: K,
      shapeFlag: ee
    } = T;
    if (K > 0) {
      if (K & 128) {
        et(B, W, P, I, A, L, U, F, H);
        return;
      } else if (K & 256) {
        _e(B, W, P, I, A, L, U, F, H);
        return;
      }
    }
    if (ee & 8) {
      if (Q & 16) {
        wt(B, A, L);
      }
      if (W !== B) {
        c(P, W);
      }
    } else if (Q & 16) {
      if (ee & 16) {
        et(B, W, P, I, A, L, U, F, H);
      } else {
        wt(B, A, L, true);
      }
    } else {
      if (Q & 8) {
        c(P, "");
      }
      if (ee & 16) {
        E(W, P, I, A, L, U, F, H);
      }
    }
  };
  const _e = (b, T, P, I, A, L, U, F, H) => {
    b = b || wr;
    T = T || wr;
    const B = b.length;
    const Q = T.length;
    const W = Math.min(B, Q);
    let K;
    for (K = 0; K < W; K++) {
      const ee = T[K] = H ? _n(T[K]) : pt(T[K]);
      g(b[K], ee, P, null, A, L, U, F, H);
    }
    if (B > Q) {
      wt(b, A, L, true, false, W);
    } else {
      E(T, P, I, A, L, U, F, H, W);
    }
  };
  const et = (b, T, P, I, A, L, U, F, H) => {
    let B = 0;
    const Q = T.length;
    let W = b.length - 1;
    let K = Q - 1;
    while (B <= W && B <= K) {
      const ee = b[B];
      const ne = T[B] = H ? _n(T[B]) : pt(T[B]);
      if (Bt(ee, ne)) {
        g(ee, ne, P, null, A, L, U, F, H);
      } else {
        break;
      }
      B++;
    }
    while (B <= W && B <= K) {
      const ee = b[W];
      const ne = T[K] = H ? _n(T[K]) : pt(T[K]);
      if (Bt(ee, ne)) {
        g(ee, ne, P, null, A, L, U, F, H);
      } else {
        break;
      }
      W--;
      K--;
    }
    if (B > W) {
      if (B <= K) {
        const ee = K + 1;
        const ne = ee < Q ? T[ee].el : I;
        while (B <= K) {
          g(null, T[B] = H ? _n(T[B]) : pt(T[B]), P, ne, A, L, U, F, H);
          B++;
        }
      }
    } else if (B > K) {
      while (B <= W) {
        xe(b[B], A, L, true);
        B++;
      }
    } else {
      const ee = B;
      const ne = B;
      const he = new Map();
      for (B = ne; B <= K; B++) {
        const ft = T[B] = H ? _n(T[B]) : pt(T[B]);
        if (ft.key != null) {
          he.set(ft.key, B);
        }
      }
      let le;
      let ct = 0;
      const He = K - ne + 1;
      let Mt = false;
      let ut = 0;
      const Ur = new Array(He);
      for (B = 0; B < He; B++) {
        Ur[B] = 0;
      }
      for (B = ee; B <= W; B++) {
        const ft = b[B];
        if (ct >= He) {
          xe(ft, A, L, true);
          continue;
        }
        let Ft;
        if (ft.key != null) {
          Ft = he.get(ft.key);
        } else {
          for (le = ne; le <= K; le++) {
            if (Ur[le - ne] === 0 && Bt(ft, T[le])) {
              Ft = le;
              break;
            }
          }
        }
        if (Ft === undefined) {
          xe(ft, A, L, true);
        } else {
          Ur[Ft - ne] = B + 1;
          if (Ft >= ut) {
            ut = Ft;
          } else {
            Mt = true;
          }
          g(ft, T[Ft], P, null, A, L, U, F, H);
          ct++;
        }
      }
      const Rl = Mt ? hg(Ur) : wr;
      le = Rl.length - 1;
      B = He - 1;
      for (; B >= 0; B--) {
        const ft = ne + B;
        const Ft = T[ft];
        const Ol = ft + 1 < Q ? T[ft + 1].el : I;
        if (Ur[B] === 0) {
          g(null, Ft, P, Ol, A, L, U, F, H);
        } else if (Mt) {
          if (le < 0 || B !== Rl[le]) {
            Ne(Ft, P, Ol, 2);
          } else {
            le--;
          }
        }
      }
    }
  };
  const Ne = (b, T, P, I, A = null) => {
    const {
      el: L,
      type: U,
      transition: F,
      children: H,
      shapeFlag: B
    } = b;
    if (B & 6) {
      Ne(b.component.subTree, T, P, I);
      return;
    }
    if (B & 128) {
      b.suspense.move(T, P, I);
      return;
    }
    if (B & 64) {
      U.move(b, T, P, q);
      return;
    }
    if (U === Ue) {
      r(L, T, P);
      for (let W = 0; W < H.length; W++) {
        Ne(H[W], T, P, I);
      }
      r(b.anchor, T, P);
      return;
    }
    if (U === ns) {
      p(b, T, P);
      return;
    }
    if (I !== 2 && B & 1 && F) {
      if (I === 0) {
        F.beforeEnter(L);
        r(L, T, P);
        Le(() => F.enter(L), A);
      } else {
        const {
          leave: W,
          delayLeave: K,
          afterLeave: ee
        } = F;
        const ne = () => r(L, T, P);
        const he = () => {
          W(L, () => {
            ne();
            if (ee) {
              ee();
            }
          });
        };
        if (K) {
          K(L, ne, he);
        } else {
          he();
        }
      }
    } else {
      r(L, T, P);
    }
  };
  const xe = (b, T, P, I = false, A = false) => {
    const {
      type: L,
      props: U,
      ref: F,
      children: H,
      dynamicChildren: B,
      shapeFlag: Q,
      patchFlag: W,
      dirs: K,
      cacheIndex: ee
    } = b;
    if (W === -2) {
      A = false;
    }
    if (F != null) {
      ai(F, null, P, b, true);
    }
    if (ee != null) {
      T.renderCache[ee] = undefined;
    }
    if (Q & 256) {
      T.ctx.deactivate(b);
      return;
    }
    const ne = Q & 1 && K;
    const he = !Cn(b);
    let le;
    if (he && (le = U && U.onVnodeBeforeUnmount)) {
      tt(le, T, b);
    }
    if (Q & 6) {
      vt(b.component, P, I);
    } else {
      if (Q & 128) {
        b.suspense.unmount(P, I);
        return;
      }
      if (ne) {
        Ut(b, null, T, "beforeUnmount");
      }
      if (Q & 64) {
        b.type.remove(b, T, P, q, I);
      } else if (B && !B.hasOnce && (L !== Ue || W > 0 && W & 64)) {
        wt(B, T, P, false, true);
      } else if (L === Ue && W & 384 || !A && Q & 16) {
        wt(H, T, P);
      }
      if (I) {
        Jt(b);
      }
    }
    if (he && (le = U && U.onVnodeUnmounted) || ne) {
      Le(() => {
        if (le) {
          tt(le, T, b);
        }
        if (ne) {
          Ut(b, null, T, "unmounted");
        }
      }, P);
    }
  };
  const Jt = b => {
    const {
      type: T,
      el: P,
      anchor: I,
      transition: A
    } = b;
    if (T === Ue) {
      $e(P, I);
      return;
    }
    if (T === ns) {
      _(b);
      return;
    }
    const L = () => {
      s(P);
      if (A && !A.persisted && A.afterLeave) {
        A.afterLeave();
      }
    };
    if (b.shapeFlag & 1 && A && !A.persisted) {
      const {
        leave: U,
        delayLeave: F
      } = A;
      const H = () => U(P, L);
      if (F) {
        F(b.el, L, H);
      } else {
        H();
      }
    } else {
      L();
    }
  };
  const $e = (b, T) => {
    let P;
    while (b !== T) {
      P = h(b);
      s(b);
      b = P;
    }
    s(T);
  };
  const vt = (b, T, P) => {
    const {
      bum: I,
      scope: A,
      job: L,
      subTree: U,
      um: F,
      m: H,
      a: B
    } = b;
    ci(H);
    ci(B);
    if (I) {
      Qr(I);
    }
    A.stop();
    if (L) {
      L.flags |= 8;
      xe(U, b, T, P);
    }
    if (F) {
      Le(F, T);
    }
    Le(() => {
      b.isUnmounted = true;
    }, T);
    if (T && T.pendingBranch && !T.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === T.pendingId) {
      T.deps--;
      if (T.deps === 0) {
        T.resolve();
      }
    }
  };
  const wt = (b, T, P, I = false, A = false, L = 0) => {
    for (let U = L; U < b.length; U++) {
      xe(b[U], T, P, I, A);
    }
  };
  const M = b => {
    if (b.shapeFlag & 6) {
      return M(b.component.subTree);
    }
    if (b.shapeFlag & 128) {
      return b.suspense.next();
    }
    const T = h(b.anchor || b.el);
    const P = T && T[Mp];
    if (P) {
      return h(P);
    } else {
      return T;
    }
  };
  let G = false;
  const V = (b, T, P) => {
    if (b == null) {
      if (T._vnode) {
        xe(T._vnode, null, null, true);
      }
    } else {
      g(T._vnode || null, b, T, null, null, null, P);
    }
    T._vnode = b;
    if (!G) {
      G = true;
      Ll();
      ii();
      G = false;
    }
  };
  const q = {
    p: g,
    um: xe,
    m: Ne,
    r: Jt,
    mt: Y,
    mc: E,
    pc: z,
    pbc: R,
    n: M,
    o: t
  };
  let oe;
  let ye;
  if (e) {
    [oe, ye] = e(q);
  }
  return {
    render: V,
    hydrate: oe,
    createApp: rg(V, oe)
  };
}
function eo({
  type: t,
  props: e
}, n) {
  if (n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html")) {
    return undefined;
  } else {
    return n;
  }
}
function $n({
  effect: t,
  job: e
}, n) {
  if (n) {
    t.flags |= 32;
    e.flags |= 4;
  } else {
    t.flags &= -33;
    e.flags &= -5;
  }
}
function Ef(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Pf(t, e, n = false) {
  const r = t.children;
  const s = e.children;
  if (X(r) && X(s)) {
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      if (a.shapeFlag & 1 && !a.dynamicChildren) {
        if (a.patchFlag <= 0 || a.patchFlag === 32) {
          a = s[i] = _n(s[i]);
          a.el = o.el;
        }
        if (!n && a.patchFlag !== -2) {
          Pf(o, a);
        }
      }
      if (a.type === Qn) {
        a.el = o.el;
      }
    }
  }
}
function hg(t) {
  const e = t.slice();
  const n = [0];
  let r;
  let s;
  let i;
  let o;
  let a;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const u = t[r];
    if (u !== 0) {
      s = n[n.length - 1];
      if (t[s] < u) {
        e[r] = s;
        n.push(r);
        continue;
      }
      i = 0;
      o = n.length - 1;
      while (i < o) {
        a = i + o >> 1;
        if (t[n[a]] < u) {
          i = a + 1;
        } else {
          o = a;
        }
      }
      if (u < t[n[i]]) {
        if (i > 0) {
          e[r] = n[i - 1];
        }
        n[i] = r;
      }
    }
  }
  i = n.length;
  o = n[i - 1];
  while (i-- > 0) {
    n[i] = o;
    o = e[o];
  }
  return n;
}
function Rf(t) {
  const e = t.subTree.component;
  if (e) {
    if (e.asyncDep && !e.asyncResolved) {
      return e;
    } else {
      return Rf(e);
    }
  }
}
function ci(t) {
  if (t) {
    for (let e = 0; e < t.length; e++) {
      t[e].flags |= 8;
    }
  }
}
const dg = Symbol.for("v-scx");
const pg = () => De(dg);
function A1(t, e) {
  return Xa(t, null, e);
}
function En(t, e, n) {
  return Xa(t, e, n);
}
function Xa(t, e, n = pe) {
  const {
    immediate: r,
    deep: s,
    flush: i,
    once: o
  } = n;
  const a = Re({}, n);
  const l = e && r || !e && i !== "post";
  let u;
  if (Ir) {
    if (i === "sync") {
      const d = pg();
      u = d.__watcherHandles ||= [];
    } else if (!l) {
      const d = () => {};
      d.stop = Gt;
      d.resume = Gt;
      d.pause = Gt;
      return d;
    }
  }
  const c = Ae;
  a.call = (d, m, g) => Nt(d, c, m, g);
  let f = false;
  if (i === "post") {
    a.scheduler = d => {
      Le(d, c && c.suspense);
    };
  } else if (i !== "sync") {
    f = true;
    a.scheduler = (d, m) => {
      if (m) {
        d();
      } else {
        ja(d);
      }
    };
  }
  a.augmentJob = d => {
    if (e) {
      d.flags |= 4;
    }
    if (f) {
      d.flags |= 2;
      if (c) {
        d.id = c.uid;
        d.i = c;
      }
    }
  };
  const h = Rp(t, e, a);
  if (Ir) {
    if (u) {
      u.push(h);
    } else if (l) {
      h();
    }
  }
  return h;
}
function gg(t, e, n) {
  const r = this.proxy;
  const s = ve(t) ? t.includes(".") ? Of(r, t) : () => r[t] : t.bind(r, r);
  let i;
  if (Z(e)) {
    i = e;
  } else {
    i = e.handler;
    n = e;
  }
  const o = sr(this);
  const a = Xa(s, i.bind(r), n);
  o();
  return a;
}
function Of(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let s = 0; s < n.length && r; s++) {
      r = r[n[s]];
    }
    return r;
  };
}
const mg = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Rt(e)}Modifiers`] || t[`${ar(e)}Modifiers`];
function _g(t, e, ...n) {
  if (t.isUnmounted) {
    return;
  }
  const r = t.vnode.props || pe;
  let s = n;
  const i = e.startsWith("update:");
  const o = i && mg(r, e.slice(7));
  if (o) {
    if (o.trim) {
      s = n.map(c => ve(c) ? c.trim() : c);
    }
    if (o.number) {
      s = n.map(qd);
    }
  }
  let a;
  let l = r[a = Wi(e)] || r[a = Wi(Rt(e))];
  if (!l && i) {
    l = r[a = Wi(ar(e))];
  }
  if (l) {
    Nt(l, t, 6, s);
  }
  const u = r[a + "Once"];
  if (u) {
    if (!t.emitted) {
      t.emitted = {};
    } else if (t.emitted[a]) {
      return;
    }
    t.emitted[a] = true;
    Nt(u, t, 6, s);
  }
}
function Af(t, e, n = false) {
  const r = e.emitsCache;
  const s = r.get(t);
  if (s !== undefined) {
    return s;
  }
  const i = t.emits;
  let o = {};
  let a = false;
  if (!Z(t)) {
    const l = u => {
      const c = Af(u, e, true);
      if (c) {
        a = true;
        Re(o, c);
      }
    };
    if (!n && e.mixins.length) {
      e.mixins.forEach(l);
    }
    if (t.extends) {
      l(t.extends);
    }
    if (t.mixins) {
      t.mixins.forEach(l);
    }
  }
  if (!i && !a) {
    if (me(t)) {
      r.set(t, null);
    }
    return null;
  } else {
    if (X(i)) {
      i.forEach(l => o[l] = null);
    } else {
      Re(o, i);
    }
    if (me(t)) {
      r.set(t, o);
    }
    return o;
  }
}
function Bi(t, e) {
  if (!t || !Cs(e)) {
    return false;
  } else {
    e = e.slice(2).replace(/Once$/, "");
    return ae(t, e[0].toLowerCase() + e.slice(1)) || ae(t, ar(e)) || ae(t, e);
  }
}
function to(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: a,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: h,
    setupState: d,
    ctx: m,
    inheritAttrs: g
  } = t;
  const w = oi(t);
  let k;
  let v;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r;
      const y = _;
      k = pt(u.call(y, _, c, f, d, h, m));
      v = a;
    } else {
      const _ = e;
      k = pt(_.length > 1 ? _(f, {
        attrs: a,
        slots: o,
        emit: l
      }) : _(f, null));
      v = e.props ? a : bg(a);
    }
  } catch (_) {
    rs.length = 0;
    jr(_, t, 1);
    k = ke(Oe);
  }
  let p = k;
  if (v && g !== false) {
    const _ = Object.keys(v);
    const {
      shapeFlag: y
    } = p;
    if (_.length && y & 7) {
      if (i && _.some(Pa)) {
        v = vg(v, i);
      }
      p = an(p, v, false, true);
    }
  }
  if (n.dirs) {
    p = an(p, null, false, true);
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs;
  }
  if (n.transition) {
    Ar(p, n.transition);
  }
  k = p;
  oi(w);
  return k;
}
function yg(t, e = true) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (rr(s)) {
      if (s.type !== Oe || s.children === "v-if") {
        if (n) {
          return;
        }
        n = s;
      }
    } else {
      return;
    }
  }
  return n;
}
const bg = t => {
  let e;
  for (const n in t) {
    if (n === "class" || n === "style" || Cs(n)) {
      (e ||= {})[n] = t[n];
    }
  }
  return e;
};
const vg = (t, e) => {
  const n = {};
  for (const r in t) {
    if (!Pa(r) || !(r.slice(9) in e)) {
      n[r] = t[r];
    }
  }
  return n;
};
function wg(t, e, n) {
  const {
    props: r,
    children: s,
    component: i
  } = t;
  const {
    props: o,
    children: a,
    patchFlag: l
  } = e;
  const u = i.emitsOptions;
  if (e.dirs || e.transition) {
    return true;
  }
  if (n && l >= 0) {
    if (l & 1024) {
      return true;
    }
    if (l & 16) {
      if (r) {
        return zl(r, o, u);
      } else {
        return !!o;
      }
    }
    if (l & 8) {
      const c = e.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (o[h] !== r[h] && !Bi(u, h)) {
          return true;
        }
      }
    }
  } else if ((s || a) && (!a || !a.$stable)) {
    return true;
  } else if (r === o) {
    return false;
  } else if (r) {
    if (o) {
      return zl(r, o, u);
    } else {
      return true;
    }
  } else {
    return !!o;
  }
  return false;
}
function zl(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) {
    return true;
  }
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (e[i] !== t[i] && !Bi(n, i)) {
      return true;
    }
  }
  return false;
}
function Ja({
  vnode: t,
  parent: e
}, n) {
  while (e) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t) {
      r.el = t.el;
    }
    if (r === t) {
      (t = e.vnode).el = n;
      e = e.parent;
    } else {
      break;
    }
  }
}
const ui = t => t.__isSuspense;
let Do = 0;
const Tg = {
  name: "Suspense",
  __isSuspense: true,
  process(t, e, n, r, s, i, o, a, l, u) {
    if (t == null) {
      kg(e, n, r, s, i, o, a, l, u);
    } else {
      if (i && i.deps > 0 && !t.suspense.isInFallback) {
        e.suspense = t.suspense;
        e.suspense.vnode = e;
        e.el = t.el;
        return;
      }
      xg(t, e, n, r, s, o, a, l, u);
    }
  },
  hydrate: Sg,
  normalize: Cg
};
const Qa = Tg;
function gs(t, e) {
  const n = t.props && t.props[e];
  if (Z(n)) {
    n();
  }
}
function kg(t, e, n, r, s, i, o, a, l) {
  const {
    p: u,
    o: {
      createElement: c
    }
  } = l;
  const f = c("div");
  const h = t.suspense = Mf(t, s, r, e, f, n, i, o, a, l);
  u(null, h.pendingBranch = t.ssContent, f, null, r, h, i, o);
  if (h.deps > 0) {
    gs(t, "onPending");
    gs(t, "onFallback");
    u(null, t.ssFallback, e, n, r, null, i, o);
    Sr(h, t.ssFallback);
  } else {
    h.resolve(false, true);
  }
}
function xg(t, e, n, r, s, i, o, a, {
  p: l,
  um: u,
  o: {
    createElement: c
  }
}) {
  const f = e.suspense = t.suspense;
  f.vnode = e;
  e.el = t.el;
  const h = e.ssContent;
  const d = e.ssFallback;
  const {
    activeBranch: m,
    pendingBranch: g,
    isInFallback: w,
    isHydrating: k
  } = f;
  if (g) {
    f.pendingBranch = h;
    if (Bt(h, g)) {
      l(g, h, f.hiddenContainer, null, s, f, i, o, a);
      if (f.deps <= 0) {
        f.resolve();
      } else if (w) {
        if (!k) {
          l(m, d, n, r, s, null, i, o, a);
          Sr(f, d);
        }
      }
    } else {
      f.pendingId = Do++;
      if (k) {
        f.isHydrating = false;
        f.activeBranch = g;
      } else {
        u(g, s, f);
      }
      f.deps = 0;
      f.effects.length = 0;
      f.hiddenContainer = c("div");
      if (w) {
        l(null, h, f.hiddenContainer, null, s, f, i, o, a);
        if (f.deps <= 0) {
          f.resolve();
        } else {
          l(m, d, n, r, s, null, i, o, a);
          Sr(f, d);
        }
      } else if (m && Bt(h, m)) {
        l(m, h, n, r, s, f, i, o, a);
        f.resolve(true);
      } else {
        l(null, h, f.hiddenContainer, null, s, f, i, o, a);
        if (f.deps <= 0) {
          f.resolve();
        }
      }
    }
  } else if (m && Bt(h, m)) {
    l(m, h, n, r, s, f, i, o, a);
    Sr(f, h);
  } else {
    gs(e, "onPending");
    f.pendingBranch = h;
    if (h.shapeFlag & 512) {
      f.pendingId = h.component.suspenseId;
    } else {
      f.pendingId = Do++;
    }
    l(null, h, f.hiddenContainer, null, s, f, i, o, a);
    if (f.deps <= 0) {
      f.resolve();
    } else {
      const {
        timeout: v,
        pendingId: p
      } = f;
      if (v > 0) {
        setTimeout(() => {
          if (f.pendingId === p) {
            f.fallback(d);
          }
        }, v);
      } else if (v === 0) {
        f.fallback(d);
      }
    }
  }
}
function Mf(t, e, n, r, s, i, o, a, l, u, c = false) {
  const {
    p: f,
    m: h,
    um: d,
    n: m,
    o: {
      parentNode: g,
      remove: w
    }
  } = u;
  let k;
  const v = Eg(t);
  if (v && e && e.pendingBranch) {
    k = e.pendingId;
    e.deps++;
  }
  const p = t.props ? Cu(t.props.timeout) : undefined;
  const _ = i;
  const y = {
    vnode: t,
    parent: e,
    parentComponent: n,
    namespace: o,
    container: r,
    hiddenContainer: s,
    deps: 0,
    pendingId: Do++,
    timeout: typeof p == "number" ? p : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !c,
    isHydrating: c,
    isUnmounted: false,
    effects: [],
    resolve(S = false, C = false) {
      const {
        vnode: E,
        activeBranch: x,
        pendingBranch: R,
        pendingId: D,
        effects: O,
        parentComponent: $,
        container: Y
      } = y;
      let J = false;
      if (y.isHydrating) {
        y.isHydrating = false;
      } else if (!S) {
        J = x && R.transition && R.transition.mode === "out-in";
        if (J) {
          x.transition.afterLeave = () => {
            if (D === y.pendingId) {
              h(R, Y, i === _ ? m(x) : i, 0);
              Ro(O);
            }
          };
        }
        if (x) {
          if (g(x.el) === Y) {
            i = m(x);
          }
          d(x, $, y, true);
        }
        if (!J) {
          h(R, Y, i, 0);
        }
      }
      Sr(y, R);
      y.pendingBranch = null;
      y.isInFallback = false;
      let N = y.parent;
      let j = false;
      while (N) {
        if (N.pendingBranch) {
          N.effects.push(...O);
          j = true;
          break;
        }
        N = N.parent;
      }
      if (!j && !J) {
        Ro(O);
      }
      y.effects = [];
      if (v && e && e.pendingBranch && k === e.pendingId) {
        e.deps--;
        if (e.deps === 0 && !C) {
          e.resolve();
        }
      }
      gs(E, "onResolve");
    },
    fallback(S) {
      if (!y.pendingBranch) {
        return;
      }
      const {
        vnode: C,
        activeBranch: E,
        parentComponent: x,
        container: R,
        namespace: D
      } = y;
      gs(C, "onFallback");
      const O = m(E);
      const $ = () => {
        if (y.isInFallback) {
          f(null, S, R, O, x, null, D, a, l);
          Sr(y, S);
        }
      };
      const Y = S.transition && S.transition.mode === "out-in";
      if (Y) {
        E.transition.afterLeave = $;
      }
      y.isInFallback = true;
      d(E, x, null, true);
      if (!Y) {
        $();
      }
    },
    move(S, C, E) {
      if (y.activeBranch) {
        h(y.activeBranch, S, C, E);
      }
      y.container = S;
    },
    next() {
      return y.activeBranch && m(y.activeBranch);
    },
    registerDep(S, C, E) {
      const x = !!y.pendingBranch;
      if (x) {
        y.deps++;
      }
      const R = S.vnode.el;
      S.asyncDep.catch(D => {
        jr(D, S, 0);
      }).then(D => {
        if (S.isUnmounted || y.isUnmounted || y.pendingId !== S.suspenseId) {
          return;
        }
        S.asyncResolved = true;
        const {
          vnode: O
        } = S;
        Ho(S, D, false);
        if (R) {
          O.el = R;
        }
        const $ = !R && S.subTree.el;
        C(S, O, g(R || S.subTree.el), R ? null : m(S.subTree), y, o, E);
        if ($) {
          w($);
        }
        Ja(S, O.el);
        if (x && --y.deps === 0) {
          y.resolve();
        }
      });
    },
    unmount(S, C) {
      y.isUnmounted = true;
      if (y.activeBranch) {
        d(y.activeBranch, n, S, C);
      }
      if (y.pendingBranch) {
        d(y.pendingBranch, n, S, C);
      }
    }
  };
  return y;
}
function Sg(t, e, n, r, s, i, o, a, l) {
  const u = e.suspense = Mf(e, r, n, t.parentNode, document.createElement("div"), null, s, i, o, a, true);
  const c = l(t, u.pendingBranch = e.ssContent, n, u, i, o);
  if (u.deps === 0) {
    u.resolve(false, true);
  }
  return c;
}
function Cg(t) {
  const {
    shapeFlag: e,
    children: n
  } = t;
  const r = e & 32;
  t.ssContent = Wl(r ? n.default : n);
  t.ssFallback = r ? Wl(n.fallback) : ke(Oe);
}
function Wl(t) {
  let e;
  if (Z(t)) {
    const n = Mr && t._c;
    if (n) {
      t._d = false;
      nt();
    }
    t = t();
    if (n) {
      t._d = true;
      e = rt;
      Lf();
    }
  }
  if (X(t)) {
    t = yg(t);
  }
  t = pt(t);
  if (e && !t.dynamicChildren) {
    t.dynamicChildren = e.filter(n => n !== t);
  }
  return t;
}
function If(t, e) {
  if (e && e.pendingBranch) {
    if (X(t)) {
      e.effects.push(...t);
    } else {
      e.effects.push(t);
    }
  } else {
    Ro(t);
  }
}
function Sr(t, e) {
  t.activeBranch = e;
  const {
    vnode: n,
    parentComponent: r
  } = t;
  let s = e.el;
  while (!s && e.component) {
    e = e.component.subTree;
    s = e.el;
  }
  n.el = s;
  if (r && r.subTree === n) {
    r.vnode.el = s;
    Ja(r, s);
  }
}
function Eg(t) {
  const e = t.props && t.props.suspensible;
  return e != null && e !== false;
}
const Ue = Symbol.for("v-fgt");
const Qn = Symbol.for("v-txt");
const Oe = Symbol.for("v-cmt");
const ns = Symbol.for("v-stc");
const rs = [];
let rt = null;
function nt(t = false) {
  rs.push(rt = t ? null : []);
}
function Lf() {
  rs.pop();
  rt = rs[rs.length - 1] || null;
}
let Mr = 1;
function Gl(t) {
  Mr += t;
  if (t < 0 && rt) {
    rt.hasOnce = true;
  }
}
function Bf(t) {
  t.dynamicChildren = Mr > 0 ? rt || wr : null;
  Lf();
  if (Mr > 0 && rt) {
    rt.push(t);
  }
  return t;
}
function Pg(t, e, n, r, s, i) {
  return Bf(Nf(t, e, n, r, s, i, true));
}
function St(t, e, n, r, s) {
  return Bf(ke(t, e, n, r, s, true));
}
function rr(t) {
  if (t) {
    return t.__v_isVNode === true;
  } else {
    return false;
  }
}
function Bt(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Df = ({
  key: t
}) => t ?? null;
const Ks = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => {
  if (typeof t == "number") {
    t = "" + t;
  }
  if (t != null) {
    if (ve(t) || Ce(t) || Z(t)) {
      return {
        i: Be,
        r: t,
        k: e,
        f: !!n
      };
    } else {
      return t;
    }
  } else {
    return null;
  }
};
function Nf(t, e = null, n = null, r = 0, s = null, i = t === Ue ? 0 : 1, o = false, a = false) {
  const l = {
    __v_isVNode: true,
    __v_skip: true,
    type: t,
    props: e,
    key: e && Df(e),
    ref: e && Ks(e),
    scopeId: Zu,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Be
  };
  if (a) {
    el(l, n);
    if (i & 128) {
      t.normalize(l);
    }
  } else if (n) {
    l.shapeFlag |= ve(n) ? 8 : 16;
  }
  if (Mr > 0 && !o && rt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32) {
    rt.push(l);
  }
  return l;
}
const ke = Rg;
function Rg(t, e = null, n = null, r = 0, s = null, i = false) {
  if (!t || t === hf) {
    t = Oe;
  }
  if (rr(t)) {
    const a = an(t, e, true);
    if (n) {
      el(a, n);
    }
    if (Mr > 0 && !i && rt) {
      if (a.shapeFlag & 6) {
        rt[rt.indexOf(t)] = a;
      } else {
        rt.push(a);
      }
    }
    a.patchFlag = -2;
    return a;
  }
  if (Ng(t)) {
    t = t.__vccOpts;
  }
  if (e) {
    e = $f(e);
    let {
      class: a,
      style: l
    } = e;
    if (a && !ve(a)) {
      e.class = Ai(a);
    }
    if (me(l)) {
      if (Ha(l) && !X(l)) {
        l = Re({}, l);
      }
      e.style = Oi(l);
    }
  }
  const o = ve(t) ? 1 : ui(t) ? 128 : ef(t) ? 64 : me(t) ? 4 : Z(t) ? 2 : 0;
  return Nf(t, e, n, r, s, o, i, true);
}
function $f(t) {
  if (t) {
    if (Ha(t) || bf(t)) {
      return Re({}, t);
    } else {
      return t;
    }
  } else {
    return null;
  }
}
function an(t, e, n = false, r = false) {
  const {
    props: s,
    ref: i,
    patchFlag: o,
    children: a,
    transition: l
  } = t;
  const u = e ? tl(s || {}, e) : s;
  const c = {
    __v_isVNode: true,
    __v_skip: true,
    type: t.type,
    props: u,
    key: u && Df(u),
    ref: e && e.ref ? n && i ? X(i) ? i.concat(Ks(e)) : [i, Ks(e)] : Ks(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: a,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Ue ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && an(t.ssContent),
    ssFallback: t.ssFallback && an(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  if (l && r) {
    Ar(c, l.clone(c));
  }
  return c;
}
function Za(t = " ", e = 0) {
  return ke(Qn, null, t, e);
}
function M1(t, e) {
  const n = ke(ns, null, t);
  n.staticCount = e;
  return n;
}
function I1(t = "", e = false) {
  if (e) {
    nt();
    return St(Oe, null, t);
  } else {
    return ke(Oe, null, t);
  }
}
function pt(t) {
  if (t == null || typeof t == "boolean") {
    return ke(Oe);
  } else if (X(t)) {
    return ke(Ue, null, t.slice());
  } else if (rr(t)) {
    return _n(t);
  } else {
    return ke(Qn, null, String(t));
  }
}
function _n(t) {
  if (t.el === null && t.patchFlag !== -1 || t.memo) {
    return t;
  } else {
    return an(t);
  }
}
function el(t, e) {
  let n = 0;
  const {
    shapeFlag: r
  } = t;
  if (e == null) {
    e = null;
  } else if (X(e)) {
    n = 16;
  } else if (typeof e == "object") {
    if (r & 65) {
      const s = e.default;
      if (s) {
        if (s._c) {
          s._d = false;
        }
        el(t, s());
        if (s._c) {
          s._d = true;
        }
      }
      return;
    } else {
      n = 32;
      const s = e._;
      if (!s && !bf(e)) {
        e._ctx = Be;
      } else if (s === 3 && Be) {
        if (Be.slots._ === 1) {
          e._ = 1;
        } else {
          e._ = 2;
          t.patchFlag |= 1024;
        }
      }
    }
  } else if (Z(e)) {
    e = {
      default: e,
      _ctx: Be
    };
    n = 32;
  } else {
    e = String(e);
    if (r & 64) {
      n = 16;
      e = [Za(e)];
    } else {
      n = 8;
    }
  }
  t.children = e;
  t.shapeFlag |= n;
}
function tl(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const s in r) {
      if (s === "class") {
        if (e.class !== r.class) {
          e.class = Ai([e.class, r.class]);
        }
      } else if (s === "style") {
        e.style = Oi([e.style, r.style]);
      } else if (Cs(s)) {
        const i = e[s];
        const o = r[s];
        if (o && i !== o && (!X(i) || !i.includes(o))) {
          e[s] = i ? [].concat(i, o) : o;
        }
      } else if (s !== "") {
        e[s] = r[s];
      }
    }
  }
  return e;
}
function tt(t, e, n, r = null) {
  Nt(t, e, 7, [n, r]);
}
const Og = mf();
let Ag = 0;
function Mg(t, e, n) {
  const r = t.type;
  const s = (e ? e.appContext : t.appContext) || Og;
  const i = {
    uid: Ag++,
    vnode: t,
    type: r,
    parent: e,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    job: null,
    scope: new Ou(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(s.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: wf(r, s),
    emitsOptions: Af(r, s),
    emit: null,
    emitted: null,
    propsDefaults: pe,
    inheritAttrs: r.inheritAttrs,
    ctx: pe,
    data: pe,
    props: pe,
    attrs: pe,
    slots: pe,
    refs: pe,
    setupState: pe,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  i.ctx = {
    _: i
  };
  i.root = e ? e.root : i;
  i.emit = _g.bind(null, i);
  if (t.ce) {
    t.ce(i);
  }
  return i;
}
let Ae = null;
const Os = () => Ae || Be;
let fi;
let No;
{
  const t = Ri();
  const e = (n, r) => {
    let s;
    if (!(s = t[n])) {
      s = t[n] = [];
    }
    s.push(r);
    return i => {
      if (s.length > 1) {
        s.forEach(o => o(i));
      } else {
        s[0](i);
      }
    };
  };
  fi = e("__VUE_INSTANCE_SETTERS__", n => Ae = n);
  No = e("__VUE_SSR_SETTERS__", n => Ir = n);
}
const sr = t => {
  const e = Ae;
  fi(t);
  t.scope.on();
  return () => {
    t.scope.off();
    fi(e);
  };
};
const $o = () => {
  if (Ae) {
    Ae.scope.off();
  }
  fi(null);
};
function Hf(t) {
  return t.vnode.shapeFlag & 4;
}
let Ir = false;
function Ig(t, e = false, n = false) {
  if (e) {
    No(e);
  }
  const {
    props: r,
    children: s
  } = t.vnode;
  const i = Hf(t);
  sg(t, r, i, e);
  lg(t, s, n);
  const o = i ? Lg(t, e) : undefined;
  if (e) {
    No(false);
  }
  return o;
}
function Lg(t, e) {
  const n = t.type;
  t.accessCache = Object.create(null);
  t.proxy = new Proxy(t.ctx, Xp);
  const {
    setup: r
  } = n;
  if (r) {
    Ln();
    const s = t.setupContext = r.length > 1 ? Dg(t) : null;
    const i = sr(t);
    const o = Ps(r, t, 0, [t.props, s]);
    const a = Oa(o);
    Bn();
    i();
    if ((a || t.sp) && !Cn(t)) {
      Va(t);
    }
    if (a) {
      o.then($o, $o);
      if (e) {
        return o.then(l => {
          Ho(t, l, e);
        }).catch(l => {
          jr(l, t, 0);
        });
      }
      t.asyncDep = o;
    } else {
      Ho(t, o, e);
    }
  } else {
    Ff(t, e);
  }
}
function Ho(t, e, n) {
  if (Z(e)) {
    if (t.type.__ssrInlineRender) {
      t.ssrRender = e;
    } else {
      t.render = e;
    }
  } else if (me(e)) {
    t.setupState = qu(e);
  }
  Ff(t, n);
}
let ql;
function Ff(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && ql && !r.render) {
      const s = r.template || qa(t).template;
      if (s) {
        const {
          isCustomElement: i,
          compilerOptions: o
        } = t.appContext.config;
        const {
          delimiters: a,
          compilerOptions: l
        } = r;
        const u = Re(Re({
          isCustomElement: i,
          delimiters: a
        }, o), l);
        r.render = ql(s, u);
      }
    }
    t.render = r.render || Gt;
  }
  {
    const s = sr(t);
    Ln();
    try {
      Jp(t);
    } finally {
      Bn();
      s();
    }
  }
}
const Bg = {
  get(t, e) {
    Fe(t, "get", "");
    return t[e];
  }
};
function Dg(t) {
  const e = n => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Bg),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function nl(t) {
  if (t.exposed) {
    return t.exposeProxy ||= new Proxy(qu(Fa(t.exposed)), {
      get(e, n) {
        if (n in e) {
          return e[n];
        }
        if (n in ts) {
          return ts[n](t);
        }
      },
      has(e, n) {
        return n in e || n in ts;
      }
    });
  } else {
    return t.proxy;
  }
}
function Fo(t, e = true) {
  if (Z(t)) {
    return t.displayName || t.name;
  } else {
    return t.name || e && t.__name;
  }
}
function Ng(t) {
  return Z(t) && "__vccOpts" in t;
}
const gt = (t, e) => Ep(t, e, Ir);
function ze(t, e, n) {
  const r = arguments.length;
  if (r === 2) {
    if (me(e) && !X(e)) {
      if (rr(e)) {
        return ke(t, null, [e]);
      } else {
        return ke(t, e);
      }
    } else {
      return ke(t, null, e);
    }
  } else {
    if (r > 3) {
      n = Array.prototype.slice.call(arguments, 2);
    } else if (r === 3 && rr(n)) {
      n = [n];
    }
    return ke(t, e, n);
  }
}
const jf = "3.5.12"; /**
                     * @vue/runtime-dom v3.5.12
                     * (c) 2018-present Yuxi (Evan) You and Vue contributors
                     * @license MIT
                     **/
let jo;
const Kl = typeof window !== "undefined" && window.trustedTypes;
if (Kl) {
  try {
    jo = Kl.createPolicy("vue", {
      createHTML: t => t
    });
  } catch {}
}
const Uf = jo ? t => jo.createHTML(t) : t => t;
const $g = "http://www.w3.org/2000/svg";
const Hg = "http://www.w3.org/1998/Math/MathML";
const en = typeof document !== "undefined" ? document : null;
const Yl = en && en.createElement("template");
const Fg = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: t => {
    const e = t.parentNode;
    if (e) {
      e.removeChild(t);
    }
  },
  createElement: (t, e, n, r) => {
    const s = e === "svg" ? en.createElementNS($g, t) : e === "mathml" ? en.createElementNS(Hg, t) : n ? en.createElement(t, {
      is: n
    }) : en.createElement(t);
    if (t === "select" && r && r.multiple != null) {
      s.setAttribute("multiple", r.multiple);
    }
    return s;
  },
  createText: t => en.createTextNode(t),
  createComment: t => en.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: t => t.parentNode,
  nextSibling: t => t.nextSibling,
  querySelector: t => en.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  insertStaticContent(t, e, n, r, s, i) {
    const o = n ? n.previousSibling : e.lastChild;
    if (s && (s === i || s.nextSibling)) {
      while (e.insertBefore(s.cloneNode(true), n), s !== i && !!(s = s.nextSibling));
    } else {
      Yl.innerHTML = Uf(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
      const a = Yl.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        while (l.firstChild) {
          a.appendChild(l.firstChild);
        }
        a.removeChild(l);
      }
      e.insertBefore(a, n);
    }
    return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
  }
};
const hn = "transition";
const zr = "animation";
const ms = Symbol("_vtc");
const Vf = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const jg = Re({}, tf, Vf);
const Ug = t => {
  t.displayName = "Transition";
  t.props = jg;
  return t;
};
const zf = Ug((t, {
  slots: e
}) => ze(Bp, Vg(t), e));
const Hn = (t, e = []) => {
  if (X(t)) {
    t.forEach(n => n(...e));
  } else if (t) {
    t(...e);
  }
};
const Xl = t => t ? X(t) ? t.some(e => e.length > 1) : t.length > 1 : false;
function Vg(t) {
  const e = {};
  for (const O in t) {
    if (!(O in Vf)) {
      e[O] = t[O];
    }
  }
  if (t.css === false) {
    return e;
  }
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: u = o,
    appearToClass: c = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = t;
  const m = zg(s);
  const g = m && m[0];
  const w = m && m[1];
  const {
    onBeforeEnter: k,
    onEnter: v,
    onEnterCancelled: p,
    onLeave: _,
    onLeaveCancelled: y,
    onBeforeAppear: S = k,
    onAppear: C = v,
    onAppearCancelled: E = p
  } = e;
  const x = (O, $, Y) => {
    Fn(O, $ ? c : a);
    Fn(O, $ ? u : o);
    if (Y) {
      Y();
    }
  };
  const R = (O, $) => {
    O._isLeaving = false;
    Fn(O, f);
    Fn(O, d);
    Fn(O, h);
    if ($) {
      $();
    }
  };
  const D = O => ($, Y) => {
    const J = O ? C : v;
    const N = () => x($, O, Y);
    Hn(J, [$, N]);
    Jl(() => {
      Fn($, O ? l : i);
      dn($, O ? c : a);
      if (!Xl(J)) {
        Ql($, r, g, N);
      }
    });
  };
  return Re(e, {
    onBeforeEnter(O) {
      Hn(k, [O]);
      dn(O, i);
      dn(O, o);
    },
    onBeforeAppear(O) {
      Hn(S, [O]);
      dn(O, l);
      dn(O, u);
    },
    onEnter: D(false),
    onAppear: D(true),
    onLeave(O, $) {
      O._isLeaving = true;
      const Y = () => R(O, $);
      dn(O, f);
      dn(O, h);
      qg();
      Jl(() => {
        if (O._isLeaving) {
          Fn(O, f);
          dn(O, d);
          if (!Xl(_)) {
            Ql(O, r, w, Y);
          }
        }
      });
      Hn(_, [O, Y]);
    },
    onEnterCancelled(O) {
      x(O, false);
      Hn(p, [O]);
    },
    onAppearCancelled(O) {
      x(O, true);
      Hn(E, [O]);
    },
    onLeaveCancelled(O) {
      R(O);
      Hn(y, [O]);
    }
  });
}
function zg(t) {
  if (t == null) {
    return null;
  }
  if (me(t)) {
    return [no(t.enter), no(t.leave)];
  }
  {
    const e = no(t);
    return [e, e];
  }
}
function no(t) {
  return Cu(t);
}
function dn(t, e) {
  e.split(/\s+/).forEach(n => n && t.classList.add(n));
  (t[ms] ||= new Set()).add(e);
}
function Fn(t, e) {
  e.split(/\s+/).forEach(r => r && t.classList.remove(r));
  const n = t[ms];
  if (n) {
    n.delete(e);
    if (!n.size) {
      t[ms] = undefined;
    }
  }
}
function Jl(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Wg = 0;
function Ql(t, e, n, r) {
  const s = t._endId = ++Wg;
  const i = () => {
    if (s === t._endId) {
      r();
    }
  };
  if (n != null) {
    return setTimeout(i, n);
  }
  const {
    type: o,
    timeout: a,
    propCount: l
  } = Gg(t, e);
  if (!o) {
    return r();
  }
  const u = o + "end";
  let c = 0;
  const f = () => {
    t.removeEventListener(u, h);
    i();
  };
  const h = d => {
    if (d.target === t && ++c >= l) {
      f();
    }
  };
  setTimeout(() => {
    if (c < l) {
      f();
    }
  }, a + 1);
  t.addEventListener(u, h);
}
function Gg(t, e) {
  const n = window.getComputedStyle(t);
  const r = m => (n[m] || "").split(", ");
  const s = r(`${hn}Delay`);
  const i = r(`${hn}Duration`);
  const o = Zl(s, i);
  const a = r(`${zr}Delay`);
  const l = r(`${zr}Duration`);
  const u = Zl(a, l);
  let c = null;
  let f = 0;
  let h = 0;
  if (e === hn) {
    if (o > 0) {
      c = hn;
      f = o;
      h = i.length;
    }
  } else if (e === zr) {
    if (u > 0) {
      c = zr;
      f = u;
      h = l.length;
    }
  } else {
    f = Math.max(o, u);
    c = f > 0 ? o > u ? hn : zr : null;
    h = c ? c === hn ? i.length : l.length : 0;
  }
  const d = c === hn && /\b(transform|all)(,|$)/.test(r(`${hn}Property`).toString());
  return {
    type: c,
    timeout: f,
    propCount: h,
    hasTransform: d
  };
}
function Zl(t, e) {
  while (t.length < e.length) {
    t = t.concat(t);
  }
  return Math.max(...e.map((n, r) => ec(n) + ec(t[r])));
}
function ec(t) {
  if (t === "auto") {
    return 0;
  } else {
    return Number(t.slice(0, -1).replace(",", ".")) * 1000;
  }
}
function qg() {
  return document.body.offsetHeight;
}
function Kg(t, e, n) {
  const r = t[ms];
  if (r) {
    e = (e ? [e, ...r] : [...r]).join(" ");
  }
  if (e == null) {
    t.removeAttribute("class");
  } else if (n) {
    t.setAttribute("class", e);
  } else {
    t.className = e;
  }
}
const tc = Symbol("_vod");
const Yg = Symbol("_vsh");
const Xg = Symbol("");
const Jg = /(^|;)\s*display\s*:/;
function Qg(t, e, n) {
  const r = t.style;
  const s = ve(n);
  let i = false;
  if (n && !s) {
    if (e) {
      if (ve(e)) {
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          if (n[a] == null) {
            Ys(r, a, "");
          }
        }
      } else {
        for (const o in e) {
          if (n[o] == null) {
            Ys(r, o, "");
          }
        }
      }
    }
    for (const o in n) {
      if (o === "display") {
        i = true;
      }
      Ys(r, o, n[o]);
    }
  } else if (s) {
    if (e !== n) {
      const o = r[Xg];
      if (o) {
        n += ";" + o;
      }
      r.cssText = n;
      i = Jg.test(n);
    }
  } else if (e) {
    t.removeAttribute("style");
  }
  if (tc in t) {
    t[tc] = i ? r.display : "";
    if (t[Yg]) {
      r.display = "none";
    }
  }
}
const nc = /\s*!important$/;
function Ys(t, e, n) {
  if (X(n)) {
    n.forEach(r => Ys(t, e, r));
  } else {
    if (n == null) {
      n = "";
    }
    if (e.startsWith("--")) {
      t.setProperty(e, n);
    } else {
      const r = Zg(t, e);
      if (nc.test(n)) {
        t.setProperty(ar(r), n.replace(nc, ""), "important");
      } else {
        t[r] = n;
      }
    }
  }
}
const rc = ["Webkit", "Moz", "ms"];
const ro = {};
function Zg(t, e) {
  const n = ro[e];
  if (n) {
    return n;
  }
  let r = Rt(e);
  if (r !== "filter" && r in t) {
    return ro[e] = r;
  }
  r = Pi(r);
  for (let s = 0; s < rc.length; s++) {
    const i = rc[s] + r;
    if (i in t) {
      return ro[e] = i;
    }
  }
  return e;
}
const sc = "http://www.w3.org/1999/xlink";
function ic(t, e, n, r, s, i = ep(e)) {
  if (r && e.startsWith("xlink:")) {
    if (n == null) {
      t.removeAttributeNS(sc, e.slice(6, e.length));
    } else {
      t.setAttributeNS(sc, e, n);
    }
  } else if (n == null || i && !Eu(n)) {
    t.removeAttribute(e);
  } else {
    t.setAttribute(e, i ? "" : un(n) ? String(n) : n);
  }
}
function oc(t, e, n, r, s) {
  if (e === "innerHTML" || e === "textContent") {
    if (n != null) {
      t[e] = e === "innerHTML" ? Uf(n) : n;
    }
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? t.getAttribute("value") || "" : t.value;
    const l = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
    if (a !== l || !("_value" in t)) {
      t.value = l;
    }
    if (n == null) {
      t.removeAttribute(e);
    }
    t._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const a = typeof t[e];
    if (a === "boolean") {
      n = Eu(n);
    } else if (n == null && a === "string") {
      n = "";
      o = true;
    } else if (a === "number") {
      n = 0;
      o = true;
    }
  }
  try {
    t[e] = n;
  } catch {}
  if (o) {
    t.removeAttribute(s || e);
  }
}
function em(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function tm(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const ac = Symbol("_vei");
function nm(t, e, n, r, s = null) {
  const i = t[ac] ||= {};
  const o = i[e];
  if (r && o) {
    o.value = r;
  } else {
    const [a, l] = rm(e);
    if (r) {
      const u = i[e] = om(r, s);
      em(t, a, u, l);
    } else if (o) {
      tm(t, a, o, l);
      i[e] = undefined;
    }
  }
}
const lc = /(?:Once|Passive|Capture)$/;
function rm(t) {
  let e;
  if (lc.test(t)) {
    e = {};
    let r;
    while (r = t.match(lc)) {
      t = t.slice(0, t.length - r[0].length);
      e[r[0].toLowerCase()] = true;
    }
  }
  return [t[2] === ":" ? t.slice(3) : ar(t.slice(2)), e];
}
let so = 0;
const sm = Promise.resolve();
const im = () => so || (sm.then(() => so = 0), so = Date.now());
function om(t, e) {
  const n = r => {
    if (!r._vts) {
      r._vts = Date.now();
    } else if (r._vts <= n.attached) {
      return;
    }
    Nt(am(r, n.value), e, 5, [r]);
  };
  n.value = t;
  n.attached = im();
  return n;
}
function am(t, e) {
  if (X(e)) {
    const n = t.stopImmediatePropagation;
    t.stopImmediatePropagation = () => {
      n.call(t);
      t._stopped = true;
    };
    return e.map(r => s => !s._stopped && r && r(s));
  } else {
    return e;
  }
}
const cc = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123;
const lm = (t, e, n, r, s, i) => {
  const o = s === "svg";
  if (e === "class") {
    Kg(t, r, o);
  } else if (e === "style") {
    Qg(t, n, r);
  } else if (Cs(e)) {
    if (!Pa(e)) {
      nm(t, e, n, r, i);
    }
  } else if (e[0] === "." ? (e = e.slice(1), true) : e[0] === "^" ? (e = e.slice(1), false) : cm(t, e, r, o)) {
    oc(t, e, r);
    if (!t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected")) {
      ic(t, e, r, o, i, e !== "value");
    }
  } else if (t._isVueCE && (/[A-Z]/.test(e) || !ve(r))) {
    oc(t, Rt(e), r, i, e);
  } else {
    if (e === "true-value") {
      t._trueValue = r;
    } else if (e === "false-value") {
      t._falseValue = r;
    }
    ic(t, e, r, o);
  }
};
function cm(t, e, n, r) {
  if (r) {
    return e === "innerHTML" || e === "textContent" || !!(e in t) && !!cc(e) && !!Z(n);
  }
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") {
    return false;
  }
  if (e === "width" || e === "height") {
    const s = t.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") {
      return false;
    }
  }
  if (cc(e) && ve(n)) {
    return false;
  } else {
    return e in t;
  }
}
const Wf = Re({
  patchProp: lm
}, Fg);
let ss;
let uc = false;
function um() {
  return ss ||= ug(Wf);
}
function fm() {
  ss = uc ? ss : fg(Wf);
  uc = true;
  return ss;
}
const hm = (...t) => {
  const e = um().createApp(...t);
  const {
    mount: n
  } = e;
  e.mount = r => {
    const s = qf(r);
    if (!s) {
      return;
    }
    const i = e._component;
    if (!Z(i) && !i.render && !i.template) {
      i.template = s.innerHTML;
    }
    if (s.nodeType === 1) {
      s.textContent = "";
    }
    const o = n(s, false, Gf(s));
    if (s instanceof Element) {
      s.removeAttribute("v-cloak");
      s.setAttribute("data-v-app", "");
    }
    return o;
  };
  return e;
};
const dm = (...t) => {
  const e = fm().createApp(...t);
  const {
    mount: n
  } = e;
  e.mount = r => {
    const s = qf(r);
    if (s) {
      return n(s, true, Gf(s));
    }
  };
  return e;
};
function Gf(t) {
  if (t instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement == "function" && t instanceof MathMLElement) {
    return "mathml";
  }
}
function qf(t) {
  if (ve(t)) {
    return document.querySelector(t);
  } else {
    return t;
  }
}
const pm = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const gm = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const mm = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function _m(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    ym(t);
    return;
  }
  return e;
}
function ym(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function hi(t, e = {}) {
  if (typeof t != "string") {
    return t;
  }
  const n = t.trim();
  if (t[0] === "\"" && t.endsWith("\"") && !t.includes("\\")) {
    return n.slice(1, -1);
  }
  if (n.length <= 9) {
    const r = n.toLowerCase();
    if (r === "true") {
      return true;
    }
    if (r === "false") {
      return false;
    }
    if (r === "undefined") {
      return;
    }
    if (r === "null") {
      return null;
    }
    if (r === "nan") {
      return Number.NaN;
    }
    if (r === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (r === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!mm.test(t)) {
    if (e.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return t;
  }
  try {
    if (pm.test(t) || gm.test(t)) {
      if (e.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(t, _m);
    }
    return JSON.parse(t);
  } catch (r) {
    if (e.strict) {
      throw r;
    }
    return t;
  }
}
const bm = /#/g;
const vm = /&/g;
const wm = /\//g;
const Tm = /=/g;
const rl = /\+/g;
const km = /%5e/gi;
const xm = /%60/gi;
const Sm = /%7c/gi;
const Cm = /%20/gi;
function Em(t) {
  return encodeURI("" + t).replace(Sm, "|");
}
function Uo(t) {
  return Em(typeof t == "string" ? t : JSON.stringify(t)).replace(rl, "%2B").replace(Cm, "+").replace(bm, "%23").replace(vm, "%26").replace(xm, "`").replace(km, "^").replace(wm, "%2F");
}
function io(t) {
  return Uo(t).replace(Tm, "%3D");
}
function di(t = "") {
  try {
    return decodeURIComponent("" + t);
  } catch {
    return "" + t;
  }
}
function Pm(t) {
  return di(t.replace(rl, " "));
}
function Rm(t) {
  return di(t.replace(rl, " "));
}
function Om(t = "") {
  const e = {};
  if (t[0] === "?") {
    t = t.slice(1);
  }
  for (const n of t.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) {
      continue;
    }
    const s = Pm(r[1]);
    if (s === "__proto__" || s === "constructor") {
      continue;
    }
    const i = Rm(r[2] || "");
    if (e[s] === undefined) {
      e[s] = i;
    } else if (Array.isArray(e[s])) {
      e[s].push(i);
    } else {
      e[s] = [e[s], i];
    }
  }
  return e;
}
function Am(t, e) {
  if (typeof e == "number" || typeof e == "boolean") {
    e = String(e);
  }
  if (e) {
    if (Array.isArray(e)) {
      return e.map(n => `${io(t)}=${Uo(n)}`).join("&");
    } else {
      return `${io(t)}=${Uo(e)}`;
    }
  } else {
    return io(t);
  }
}
function Mm(t) {
  return Object.keys(t).filter(e => t[e] !== undefined).map(e => Am(e, t[e])).filter(Boolean).join("&");
}
const Im = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const Lm = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const Bm = /^([/\\]\s*){2,}[^/\\]/;
const Dm = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const Nm = /\/$|\/\?|\/#/;
const $m = /^\.?\//;
function lr(t, e = {}) {
  if (typeof e == "boolean") {
    e = {
      acceptRelative: e
    };
  }
  if (e.strict) {
    return Im.test(t);
  } else {
    return Lm.test(t) || (e.acceptRelative ? Bm.test(t) : false);
  }
}
function Hm(t) {
  return !!t && Dm.test(t);
}
function Vo(t = "", e) {
  if (e) {
    return Nm.test(t);
  } else {
    return t.endsWith("/");
  }
}
function sl(t = "", e) {
  if (!e) {
    return (Vo(t) ? t.slice(0, -1) : t) || "/";
  }
  if (!Vo(t, true)) {
    return t || "/";
  }
  let n = t;
  let r = "";
  const s = t.indexOf("#");
  if (s >= 0) {
    n = t.slice(0, s);
    r = t.slice(s);
  }
  const [i, ...o] = n.split("?");
  return ((i.endsWith("/") ? i.slice(0, -1) : i) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r;
}
function zo(t = "", e) {
  if (!e) {
    if (t.endsWith("/")) {
      return t;
    } else {
      return t + "/";
    }
  }
  if (Vo(t, true)) {
    return t || "/";
  }
  let n = t;
  let r = "";
  const s = t.indexOf("#");
  if (s >= 0 && (n = t.slice(0, s), r = t.slice(s), !n)) {
    return r;
  }
  const [i, ...o] = n.split("?");
  return i + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r;
}
function Fm(t = "") {
  return t.startsWith("/");
}
function fc(t = "") {
  if (Fm(t)) {
    return t;
  } else {
    return "/" + t;
  }
}
function jm(t, e) {
  if (Yf(e) || lr(t)) {
    return t;
  }
  const n = sl(e);
  if (t.startsWith(n)) {
    return t;
  } else {
    return il(n, t);
  }
}
function hc(t, e) {
  if (Yf(e)) {
    return t;
  }
  const n = sl(e);
  if (!t.startsWith(n)) {
    return t;
  }
  const r = t.slice(n.length);
  if (r[0] === "/") {
    return r;
  } else {
    return "/" + r;
  }
}
function Kf(t, e) {
  const n = zm(t);
  const r = {
    ...Om(n.search),
    ...e
  };
  n.search = Mm(r);
  return Wm(n);
}
function Yf(t) {
  return !t || t === "/";
}
function Um(t) {
  return t && t !== "/";
}
function il(t, ...e) {
  let n = t || "";
  for (const r of e.filter(s => Um(s))) {
    if (n) {
      const s = r.replace($m, "");
      n = zo(n) + s;
    } else {
      n = r;
    }
  }
  return n;
}
function Xf(...t) {
  var o;
  var a;
  var l;
  var u;
  const e = /\/(?!\/)/;
  const n = t.filter(Boolean);
  const r = [];
  let s = 0;
  for (const c of n) {
    if (!!c && c !== "/") {
      for (const [f, h] of c.split(e).entries()) {
        if (!!h && h !== ".") {
          if (h === "..") {
            if (r.length === 1 && lr(r[0])) {
              continue;
            }
            r.pop();
            s--;
            continue;
          }
          if (f === 1 && (o = r[r.length - 1]) != null && o.endsWith(":/")) {
            r[r.length - 1] += "/" + h;
            continue;
          }
          r.push(h);
          s++;
        }
      }
    }
  }
  let i = r.join("/");
  if (s >= 0) {
    if ((a = n[0]) != null && a.startsWith("/") && !i.startsWith("/")) {
      i = "/" + i;
    } else if ((l = n[0]) != null && l.startsWith("./") && !i.startsWith("./")) {
      i = "./" + i;
    }
  } else {
    i = "../".repeat(s * -1) + i;
  }
  if ((u = n[n.length - 1]) != null && u.endsWith("/") && !i.endsWith("/")) {
    i += "/";
  }
  return i;
}
function Vm(t, e, n = {}) {
  if (!n.trailingSlash) {
    t = zo(t);
    e = zo(e);
  }
  if (!n.leadingSlash) {
    t = fc(t);
    e = fc(e);
  }
  if (!n.encoding) {
    t = di(t);
    e = di(e);
  }
  return t === e;
}
const Jf = Symbol.for("ufo:protocolRelative");
function zm(t = "", e) {
  const n = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, h = ""] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: h,
      href: f + h,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!lr(t, {
    acceptRelative: true
  })) {
    return dc(t);
  }
  const [, r = "", s, i = ""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, o = "", a = ""] = i.match(/([^#/?]*)(.*)?/) || [];
  if (r === "file:") {
    a = a.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const {
    pathname: l,
    search: u,
    hash: c
  } = dc(a);
  return {
    protocol: r.toLowerCase(),
    auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
    host: o,
    pathname: l,
    search: u,
    hash: c,
    [Jf]: !r
  };
}
function dc(t = "") {
  const [e = "", n = "", r = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: n,
    hash: r
  };
}
function Wm(t) {
  const e = t.pathname || "";
  const n = t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : "";
  const r = t.hash || "";
  const s = t.auth ? t.auth + "@" : "";
  const i = t.host || "";
  return (t.protocol || t[Jf] ? (t.protocol || "") + "//" : "") + s + i + e + n + r;
}
class Gm extends Error {
  constructor(e, n) {
    super(e, n);
    this.name = "FetchError";
    if (n != null && n.cause && !this.cause) {
      this.cause = n.cause;
    }
  }
}
function qm(t) {
  var l;
  var u;
  var c;
  var f;
  var h;
  const e = ((l = t.error) == null ? undefined : l.message) || ((u = t.error) == null ? undefined : u.toString()) || "";
  const n = ((c = t.request) == null ? undefined : c.method) || ((f = t.options) == null ? undefined : f.method) || "GET";
  const r = ((h = t.request) == null ? undefined : h.url) || String(t.request) || "/";
  const s = `[${n}] ${JSON.stringify(r)}`;
  const i = t.response ? `${t.response.status} ${t.response.statusText}` : "<no response>";
  const o = `${s}: ${i}${e ? ` ${e}` : ""}`;
  const a = new Gm(o, t.error ? {
    cause: t.error
  } : undefined);
  for (const d of ["request", "options", "response"]) {
    Object.defineProperty(a, d, {
      get() {
        return t[d];
      }
    });
  }
  for (const [d, m] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) {
    Object.defineProperty(a, d, {
      get() {
        return t.response && t.response[m];
      }
    });
  }
  return a;
}
const Km = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function pc(t = "GET") {
  return Km.has(t.toUpperCase());
}
function Ym(t) {
  if (t === undefined) {
    return false;
  }
  const e = typeof t;
  if (e === "string" || e === "number" || e === "boolean" || e === null) {
    return true;
  } else if (e !== "object") {
    return false;
  } else if (Array.isArray(t)) {
    return true;
  } else if (t.buffer) {
    return false;
  } else {
    return t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function";
  }
}
const Xm = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
const Jm = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Qm(t = "") {
  if (!t) {
    return "json";
  }
  const e = t.split(";").shift() || "";
  if (Jm.test(e)) {
    return "json";
  } else if (Xm.has(e) || e.startsWith("text/")) {
    return "text";
  } else {
    return "blob";
  }
}
function Zm(t, e, n, r) {
  const s = e_((e == null ? undefined : e.headers) ?? (t == null ? undefined : t.headers), n == null ? undefined : n.headers, r);
  let i;
  if (n != null && n.query || n != null && n.params || e != null && e.params || e != null && e.query) {
    i = {
      ...(n == null ? undefined : n.params),
      ...(n == null ? undefined : n.query),
      ...(e == null ? undefined : e.params),
      ...(e == null ? undefined : e.query)
    };
  }
  return {
    ...n,
    ...e,
    query: i,
    params: i,
    headers: s
  };
}
function e_(t, e, n) {
  if (!e) {
    return new n(t);
  }
  const r = new n(e);
  if (t) {
    for (const [s, i] of Symbol.iterator in t || Array.isArray(t) ? t : new n(t)) {
      r.set(s, i);
    }
  }
  return r;
}
async function Us(t, e) {
  if (e) {
    if (Array.isArray(e)) {
      for (const n of e) {
        await n(t);
      }
    } else {
      await e(t);
    }
  }
}
const t_ = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
const n_ = new Set([101, 204, 205, 304]);
function Qf(t = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController
  } = t;
  async function s(a) {
    const l = a.error && a.error.name === "AbortError" && !a.options.timeout || false;
    if (a.options.retry !== false && !l) {
      let c;
      if (typeof a.options.retry == "number") {
        c = a.options.retry;
      } else {
        c = pc(a.options.method) ? 0 : 1;
      }
      const f = a.response && a.response.status || 500;
      if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : t_.has(f))) {
        const h = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
        if (h > 0) {
          await new Promise(d => setTimeout(d, h));
        }
        return i(a.request, {
          ...a.options,
          retry: c - 1
        });
      }
    }
    const u = qm(a);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(u, i);
    }
    throw u;
  }
  const i = async function (l, u = {}) {
    const c = {
      request: l,
      options: Zm(l, u, t.defaults, n),
      response: undefined,
      error: undefined
    };
    c.options.method &&= c.options.method.toUpperCase();
    if (c.options.onRequest) {
      await Us(c, c.options.onRequest);
    }
    if (typeof c.request == "string") {
      if (c.options.baseURL) {
        c.request = jm(c.request, c.options.baseURL);
      }
      if (c.options.query) {
        c.request = Kf(c.request, c.options.query);
        delete c.options.query;
      }
      if ("query" in c.options) {
        delete c.options.query;
      }
      if ("params" in c.options) {
        delete c.options.params;
      }
    }
    if (c.options.body && pc(c.options.method)) {
      if (Ym(c.options.body)) {
        c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body);
        c.options.headers = new n(c.options.headers || {});
        if (!c.options.headers.has("content-type")) {
          c.options.headers.set("content-type", "application/json");
        }
        if (!c.options.headers.has("accept")) {
          c.options.headers.set("accept", "application/json");
        }
      } else if ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") {
        if (!("duplex" in c.options)) {
          c.options.duplex = "half";
        }
      }
    }
    let f;
    if (!c.options.signal && c.options.timeout) {
      const d = new r();
      f = setTimeout(() => {
        const m = new Error("[TimeoutError]: The operation was aborted due to timeout");
        m.name = "TimeoutError";
        m.code = 23;
        d.abort(m);
      }, c.options.timeout);
      c.options.signal = d.signal;
    }
    try {
      c.response = await e(c.request, c.options);
    } catch (d) {
      c.error = d;
      if (c.options.onRequestError) {
        await Us(c, c.options.onRequestError);
      }
      return await s(c);
    } finally {
      if (f) {
        clearTimeout(f);
      }
    }
    if ((c.response.body || c.response._bodyInit) && !n_.has(c.response.status) && c.options.method !== "HEAD") {
      const d = (c.options.parseResponse ? "json" : c.options.responseType) || Qm(c.response.headers.get("content-type") || "");
      switch (d) {
        case "json":
          {
            const m = await c.response.text();
            const g = c.options.parseResponse || hi;
            c.response._data = g(m);
            break;
          }
        case "stream":
          {
            c.response._data = c.response.body || c.response._bodyInit;
            break;
          }
        default:
          c.response._data = await c.response[d]();
      }
    }
    if (c.options.onResponse) {
      await Us(c, c.options.onResponse);
    }
    if (!c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600) {
      if (c.options.onResponseError) {
        await Us(c, c.options.onResponseError);
      }
      return await s(c);
    } else {
      return c.response;
    }
  };
  const o = async function (l, u) {
    return (await i(l, u))._data;
  };
  o.raw = i;
  o.native = (...a) => e(...a);
  o.create = (a = {}, l = {}) => Qf({
    ...t,
    ...l,
    defaults: {
      ...t.defaults,
      ...l.defaults,
      ...a
    }
  });
  return o;
}
const pi = function () {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const r_ = pi.fetch ? (...t) => pi.fetch(...t) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
const s_ = pi.Headers;
const i_ = pi.AbortController;
const o_ = Qf({
  fetch: r_,
  Headers: s_,
  AbortController: i_
});
const a_ = o_;
const l_ = () => {
  var t;
  return ((t = window == null ? undefined : window.__NUXT__) == null ? undefined : t.config) || {};
};
const gi = l_().app;
const c_ = () => gi.baseURL;
const u_ = () => gi.buildAssetsDir;
const ol = (...t) => Xf(Zf(), u_(), ...t);
const Zf = (...t) => {
  const e = gi.cdnURL || gi.baseURL;
  if (t.length) {
    return Xf(e, ...t);
  } else {
    return e;
  }
};
globalThis.__buildAssetsURL = ol;
globalThis.__publicAssetsURL = Zf;
globalThis.$fetch ||= a_.create({
  baseURL: c_()
});
function Wo(t, e = {}, n) {
  for (const r in t) {
    const s = t[r];
    const i = n ? `${n}:${r}` : r;
    if (typeof s == "object" && s !== null) {
      Wo(s, e, i);
    } else if (typeof s == "function") {
      e[i] = s;
    }
  }
  return e;
}
const f_ = {
  run: t => t()
};
const h_ = () => f_;
const eh = typeof console.createTask !== "undefined" ? console.createTask : h_;
function d_(t, e) {
  const n = e.shift();
  const r = eh(n);
  return t.reduce((s, i) => s.then(() => r.run(() => i(...e))), Promise.resolve());
}
function p_(t, e) {
  const n = e.shift();
  const r = eh(n);
  return Promise.all(t.map(s => r.run(() => s(...e))));
}
function oo(t, e) {
  for (const n of [...t]) {
    n(e);
  }
}
class g_ {
  constructor() {
    this._hooks = {};
    this._before = undefined;
    this._after = undefined;
    this._deprecatedMessages = undefined;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(e, n, r = {}) {
    if (!e || typeof n != "function") {
      return () => {};
    }
    const s = e;
    let i;
    while (this._deprecatedHooks[e]) {
      i = this._deprecatedHooks[e];
      e = i.to;
    }
    if (i && !r.allowDeprecated) {
      let o = i.message;
      o ||= `${s} hook has been deprecated${i.to ? `, please use ${i.to}` : ""}`;
      this._deprecatedMessages ||= new Set();
      if (!this._deprecatedMessages.has(o)) {
        console.warn(o);
        this._deprecatedMessages.add(o);
      }
    }
    if (!n.name) {
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {}
    }
    this._hooks[e] = this._hooks[e] || [];
    this._hooks[e].push(n);
    return () => {
      if (n) {
        this.removeHook(e, n);
        n = undefined;
      }
    };
  }
  hookOnce(e, n) {
    let r;
    let s = (...i) => {
      if (typeof r == "function") {
        r();
      }
      r = undefined;
      s = undefined;
      return n(...i);
    };
    r = this.hook(e, s);
    return r;
  }
  removeHook(e, n) {
    if (this._hooks[e]) {
      const r = this._hooks[e].indexOf(n);
      if (r !== -1) {
        this._hooks[e].splice(r, 1);
      }
      if (this._hooks[e].length === 0) {
        delete this._hooks[e];
      }
    }
  }
  deprecateHook(e, n) {
    this._deprecatedHooks[e] = typeof n == "string" ? {
      to: n
    } : n;
    const r = this._hooks[e] || [];
    delete this._hooks[e];
    for (const s of r) {
      this.hook(e, s);
    }
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e);
    for (const n in e) {
      this.deprecateHook(n, e[n]);
    }
  }
  addHooks(e) {
    const n = Wo(e);
    const r = Object.keys(n).map(s => this.hook(s, n[s]));
    return () => {
      for (const s of r.splice(0, r.length)) {
        s();
      }
    };
  }
  removeHooks(e) {
    const n = Wo(e);
    for (const r in n) {
      this.removeHook(r, n[r]);
    }
  }
  removeAllHooks() {
    for (const e in this._hooks) {
      delete this._hooks[e];
    }
  }
  callHook(e, ...n) {
    n.unshift(e);
    return this.callHookWith(d_, e, ...n);
  }
  callHookParallel(e, ...n) {
    n.unshift(e);
    return this.callHookWith(p_, e, ...n);
  }
  callHookWith(e, n, ...r) {
    const s = this._before || this._after ? {
      name: n,
      args: r,
      context: {}
    } : undefined;
    if (this._before) {
      oo(this._before, s);
    }
    const i = e(n in this._hooks ? [...this._hooks[n]] : [], r);
    if (i instanceof Promise) {
      return i.finally(() => {
        if (this._after && s) {
          oo(this._after, s);
        }
      });
    } else {
      if (this._after && s) {
        oo(this._after, s);
      }
      return i;
    }
  }
  beforeEach(e) {
    this._before = this._before || [];
    this._before.push(e);
    return () => {
      if (this._before !== undefined) {
        const n = this._before.indexOf(e);
        if (n !== -1) {
          this._before.splice(n, 1);
        }
      }
    };
  }
  afterEach(e) {
    this._after = this._after || [];
    this._after.push(e);
    return () => {
      if (this._after !== undefined) {
        const n = this._after.indexOf(e);
        if (n !== -1) {
          this._after.splice(n, 1);
        }
      }
    };
  }
}
function th() {
  return new g_();
}
function m_(t = {}) {
  let e;
  let n = false;
  const r = o => {
    if (e && e !== o) {
      throw new Error("Context conflict");
    }
  };
  let s;
  if (t.asyncContext) {
    const o = t.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (o) {
      s = new o();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const i = () => {
    if (s) {
      const o = s.getStore();
      if (o !== undefined) {
        return o;
      }
    }
    return e;
  };
  return {
    use: () => {
      const o = i();
      if (o === undefined) {
        throw new Error("Context is not available");
      }
      return o;
    },
    tryUse: () => i(),
    set: (o, a) => {
      if (!a) {
        r(o);
      }
      e = o;
      n = true;
    },
    unset: () => {
      e = undefined;
      n = false;
    },
    call: (o, a) => {
      r(o);
      e = o;
      try {
        if (s) {
          return s.run(o, a);
        } else {
          return a();
        }
      } finally {
        if (!n) {
          e = undefined;
        }
      }
    },
    async callAsync(o, a) {
      e = o;
      const l = () => {
        e = o;
      };
      const u = () => e === o ? l : undefined;
      Go.add(u);
      try {
        const c = s ? s.run(o, a) : a();
        if (!n) {
          e = undefined;
        }
        return await c;
      } finally {
        Go.delete(u);
      }
    }
  };
}
function __(t = {}) {
  const e = {};
  return {
    get(n, r = {}) {
      e[n] ||= m_({
        ...t,
        ...r
      });
      return e[n];
    }
  };
}
const mi = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {};
const gc = "__unctx__";
const y_ = mi[gc] ||= __();
const b_ = (t, e = {}) => y_.get(t, e);
const mc = "__unctx_async_handlers__";
const Go = mi[mc] ||= new Set();
function Cr(t) {
  const e = [];
  for (const s of Go) {
    const i = s();
    if (i) {
      e.push(i);
    }
  }
  const n = () => {
    for (const s of e) {
      s();
    }
  };
  let r = t();
  if (r && typeof r == "object" && "catch" in r) {
    r = r.catch(s => {
      n();
      throw s;
    });
  }
  return [r, n];
}
const v_ = false;
const qo = false;
const w_ = false;
const L1 = {
  componentName: "NuxtLink",
  prefetch: true,
  prefetchOn: {
    visibility: true
  }
};
const _r = {
  value: null,
  errorValue: null,
  deep: true
};
const T_ = null;
const k_ = "#__nuxt";
const nh = "nuxt-app";
const _c = 3600000;
const x_ = "vite:preloadError";
function rh(t = nh) {
  return b_(t, {
    asyncContext: false
  });
}
const S_ = "__nuxt_plugin";
function C_(t) {
  var s;
  let e = 0;
  const n = {
    _id: t.id || nh || "nuxt-app",
    _scope: Ma(),
    provide: undefined,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.13.2";
      },
      get vue() {
        return n.vueApp.version;
      }
    },
    payload: sn({
      ...(((s = t.ssrContext) == null ? undefined : s.payload) || {}),
      data: sn({}),
      state: Yt({}),
      once: new Set(),
      _errors: sn({})
    }),
    static: {
      data: {}
    },
    runWithContext(i) {
      if (n._scope.active && !Mi()) {
        return n._scope.run(() => yc(n, i));
      } else {
        return yc(n, i);
      }
    },
    isHydrating: true,
    deferHydration() {
      if (!n.isHydrating) {
        return () => {};
      }
      e++;
      let i = false;
      return () => {
        if (!i && (i = true, e--, e === 0)) {
          n.isHydrating = false;
          return n.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: sn({}),
    _payloadRevivers: {},
    ...t
  };
  {
    const i = window.__NUXT__;
    if (i) {
      for (const o in i) {
        switch (o) {
          case "data":
          case "state":
          case "_errors":
            Object.assign(n.payload[o], i[o]);
            break;
          default:
            n.payload[o] = i[o];
        }
      }
    }
  }
  n.hooks = th();
  n.hook = n.hooks.hook;
  n.callHook = n.hooks.callHook;
  n.provide = (i, o) => {
    const a = "$" + i;
    Vs(n, a, o);
    Vs(n.vueApp.config.globalProperties, a, o);
  };
  Vs(n.vueApp, "$nuxt", n);
  Vs(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener(x_, o => {
      n.callHook("app:chunkError", {
        error: o.payload
      });
      if (n.isHydrating || o.payload.message.includes("Unable to preload CSS")) {
        o.preventDefault();
      }
    });
    window.useNuxtApp = window.useNuxtApp || ie;
    const i = n.hook("app:error", (...o) => {
      console.error("[nuxt] error caught during app initialization", ...o);
    });
    n.hook("app:mounted", i);
  }
  const r = n.payload.config;
  n.provide("config", r);
  return n;
}
function E_(t, e) {
  if (e.hooks) {
    t.hooks.addHooks(e.hooks);
  }
}
async function P_(t, e) {
  if (typeof e == "function") {
    const {
      provide: n
    } = (await t.runWithContext(() => e(t))) || {};
    if (n && typeof n == "object") {
      for (const r in n) {
        t.provide(r, n[r]);
      }
    }
  }
}
async function R_(t, e) {
  const n = [];
  const r = [];
  const s = [];
  const i = [];
  let o = 0;
  async function a(l) {
    var c;
    const u = ((c = l.dependsOn) == null ? undefined : c.filter(f => e.some(h => h._name === f) && !n.includes(f))) ?? [];
    if (u.length > 0) {
      r.push([new Set(u), l]);
    } else {
      const f = P_(t, l).then(async () => {
        if (l._name) {
          n.push(l._name);
          await Promise.all(r.map(async ([h, d]) => {
            if (h.has(l._name)) {
              h.delete(l._name);
              if (h.size === 0) {
                o++;
                await a(d);
              }
            }
          }));
        }
      });
      if (l.parallel) {
        s.push(f.catch(h => i.push(h)));
      } else {
        await f;
      }
    }
  }
  for (const l of e) {
    E_(t, l);
  }
  for (const l of e) {
    await a(l);
  }
  await Promise.all(s);
  if (o) {
    for (let l = 0; l < o; l++) {
      await Promise.all(s);
    }
  }
  if (i.length) {
    throw i[0];
  }
}
function Ze(t) {
  if (typeof t == "function") {
    return t;
  }
  const e = t._name || t.name;
  delete t.name;
  return Object.assign(t.setup || (() => {}), t, {
    [S_]: true,
    _name: e
  });
}
function yc(t, e, n) {
  const r = () => e();
  rh(t._id).set(t);
  return t.vueApp.runWithContext(r);
}
function O_(t) {
  var n;
  let e;
  if (Ka()) {
    e = (n = Os()) == null ? undefined : n.appContext.app.$nuxt;
  }
  e = e || rh(t).tryUse();
  return e || null;
}
function ie(t) {
  const e = O_(t);
  if (!e) {
    throw new Error("[nuxt] instance unavailable");
  }
  return e;
}
function Dn(t) {
  return ie().$config;
}
function Vs(t, e, n) {
  Object.defineProperty(t, e, {
    get: () => n
  });
}
function A_(t, e) {
  return {
    ctx: {
      table: t
    },
    matchAll: n => ih(n, t)
  };
}
function sh(t) {
  const e = {};
  for (const n in t) {
    e[n] = n === "dynamic" ? new Map(Object.entries(t[n]).map(([r, s]) => [r, sh(s)])) : new Map(Object.entries(t[n]));
  }
  return e;
}
function M_(t) {
  return A_(sh(t));
}
function ih(t, e, n) {
  if (t.endsWith("/")) {
    t = t.slice(0, -1) || "/";
  }
  const r = [];
  for (const [i, o] of bc(e.wildcard)) {
    if (t === i || t.startsWith(i + "/")) {
      r.push(o);
    }
  }
  for (const [i, o] of bc(e.dynamic)) {
    if (t.startsWith(i + "/")) {
      const a = "/" + t.slice(i.length).split("/").splice(2).join("/");
      r.push(...ih(a, o));
    }
  }
  const s = e.static.get(t);
  if (s) {
    r.push(s);
  }
  return r.filter(Boolean);
}
function bc(t) {
  return [...t.entries()].sort((e, n) => e[0].length - n[0].length);
}
function ao(t) {
  if (t === null || typeof t != "object") {
    return false;
  }
  const e = Object.getPrototypeOf(t);
  if (e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t) {
    return false;
  } else if (Symbol.toStringTag in t) {
    return Object.prototype.toString.call(t) === "[object Module]";
  } else {
    return true;
  }
}
function Ko(t, e, n = ".", r) {
  if (!ao(e)) {
    return Ko(t, {}, n, r);
  }
  const s = Object.assign({}, e);
  for (const i in t) {
    if (i === "__proto__" || i === "constructor") {
      continue;
    }
    const o = t[i];
    if (o != null) {
      if (!r || !r(s, i, o, n)) {
        if (Array.isArray(o) && Array.isArray(s[i])) {
          s[i] = [...o, ...s[i]];
        } else if (ao(o) && ao(s[i])) {
          s[i] = Ko(o, s[i], (n ? `${n}.` : "") + i.toString(), r);
        } else {
          s[i] = o;
        }
      }
    }
  }
  return s;
}
function I_(t) {
  return (...e) => e.reduce((n, r) => Ko(n, r, "", t), {});
}
const oh = I_();
function L_(t, e) {
  try {
    return e in t;
  } catch {
    return false;
  }
}
var B_ = Object.defineProperty;
var D_ = (t, e, n) => e in t ? B_(t, e, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: n
}) : t[e] = n;
var Gn = (t, e, n) => {
  D_(t, typeof e != "symbol" ? e + "" : e, n);
  return n;
};
class Yo extends Error {
  constructor(e, n = {}) {
    super(e, n);
    Gn(this, "statusCode", 500);
    Gn(this, "fatal", false);
    Gn(this, "unhandled", false);
    Gn(this, "statusMessage");
    Gn(this, "data");
    Gn(this, "cause");
    if (n.cause && !this.cause) {
      this.cause = n.cause;
    }
  }
  toJSON() {
    const e = {
      message: this.message,
      statusCode: Jo(this.statusCode, 500)
    };
    if (this.statusMessage) {
      e.statusMessage = ah(this.statusMessage);
    }
    if (this.data !== undefined) {
      e.data = this.data;
    }
    return e;
  }
}
Gn(Yo, "__h3_error__", true);
function Xo(t) {
  if (typeof t == "string") {
    return new Yo(t);
  }
  if (N_(t)) {
    return t;
  }
  const e = new Yo(t.message ?? t.statusMessage ?? "", {
    cause: t.cause || t
  });
  if (L_(t, "stack")) {
    try {
      Object.defineProperty(e, "stack", {
        get() {
          return t.stack;
        }
      });
    } catch {
      try {
        e.stack = t.stack;
      } catch {}
    }
  }
  if (t.data) {
    e.data = t.data;
  }
  if (t.statusCode) {
    e.statusCode = Jo(t.statusCode, e.statusCode);
  } else if (t.status) {
    e.statusCode = Jo(t.status, e.statusCode);
  }
  if (t.statusMessage) {
    e.statusMessage = t.statusMessage;
  } else if (t.statusText) {
    e.statusMessage = t.statusText;
  }
  if (e.statusMessage) {
    const n = e.statusMessage;
    if (ah(e.statusMessage) !== n) {
      console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
  }
  if (t.fatal !== undefined) {
    e.fatal = t.fatal;
  }
  if (t.unhandled !== undefined) {
    e.unhandled = t.unhandled;
  }
  return e;
}
function N_(t) {
  var e;
  return ((e = t == null ? undefined : t.constructor) == null ? undefined : e.__h3_error__) === true;
}
const $_ = /[^\u0009\u0020-\u007E]/g;
function ah(t = "") {
  return t.replace($_, "");
}
function Jo(t, e = 200) {
  if (!t || (typeof t == "string" && (t = Number.parseInt(t, 10)), t < 100 || t > 999)) {
    return e;
  } else {
    return t;
  }
}
const lh = Symbol("layout-meta");
const As = Symbol("route");
const Ot = () => {
  var t;
  if ((t = ie()) == null) {
    return undefined;
  } else {
    return t.$router;
  }
};
const Di = () => Ka() ? De(As, ie()._route) : ie()._route;
function B1(t) {
  return t;
}
const H_ = () => {
  try {
    if (ie()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const D1 = (t, e) => {
  t ||= "/";
  const n = typeof t == "string" ? t : "path" in t ? F_(t) : Ot().resolve(t).href;
  if (e != null && e.open) {
    const {
      target: l = "_blank",
      windowFeatures: u = {}
    } = e.open;
    const c = Object.entries(u).filter(([f, h]) => h !== undefined).map(([f, h]) => `${f.toLowerCase()}=${h}`).join(", ");
    open(n, l, c);
    return Promise.resolve();
  }
  const r = lr(n, {
    acceptRelative: true
  });
  const s = (e == null ? undefined : e.external) || r;
  if (s) {
    if (e == null || !e.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const {
      protocol: l
    } = new URL(n, window.location.href);
    if (l && Hm(l)) {
      throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
  }
  const i = H_();
  if (!s && i) {
    return t;
  }
  const o = Ot();
  const a = ie();
  if (s) {
    a._scope.stop();
    if (e != null && e.replace) {
      location.replace(n);
    } else {
      location.href = n;
    }
    if (i) {
      if (a.isHydrating) {
        return new Promise(() => {});
      } else {
        return false;
      }
    } else {
      return Promise.resolve();
    }
  } else if (e != null && e.replace) {
    return o.replace(t);
  } else {
    return o.push(t);
  }
};
function F_(t) {
  return Kf(t.path || "", t.query || {}) + (t.hash || "");
}
const ch = "__nuxt_error";
const Ni = () => Ku(ie().payload, "error");
const yr = t => {
  const e = Ms(t);
  try {
    const n = ie();
    const r = Ni();
    n.hooks.callHook("app:error", e);
    r.value = r.value || e;
  } catch {
    throw e;
  }
  return e;
};
const j_ = async (t = {}) => {
  const e = ie();
  const n = Ni();
  e.callHook("app:error:cleared", t);
  if (t.redirect) {
    await Ot().replace(t.redirect);
  }
  n.value = T_;
};
const U_ = t => !!t && typeof t == "object" && ch in t;
const Ms = t => {
  const e = Xo(t);
  Object.defineProperty(e, ch, {
    value: true,
    configurable: false,
    writable: false
  });
  return e;
};
function vc(t) {
  const e = z_(t);
  const n = new ArrayBuffer(e.length);
  const r = new DataView(n);
  for (let s = 0; s < n.byteLength; s++) {
    r.setUint8(s, e.charCodeAt(s));
  }
  return n;
}
const V_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function z_(t) {
  if (t.length % 4 === 0) {
    t = t.replace(/==?$/, "");
  }
  let e = "";
  let n = 0;
  let r = 0;
  for (let s = 0; s < t.length; s++) {
    n <<= 6;
    n |= V_.indexOf(t[s]);
    r += 6;
    if (r === 24) {
      e += String.fromCharCode((n & 16711680) >> 16);
      e += String.fromCharCode((n & 65280) >> 8);
      e += String.fromCharCode(n & 255);
      n = r = 0;
    }
  }
  if (r === 12) {
    n >>= 4;
    e += String.fromCharCode(n);
  } else if (r === 18) {
    n >>= 2;
    e += String.fromCharCode((n & 65280) >> 8);
    e += String.fromCharCode(n & 255);
  }
  return e;
}
const W_ = -1;
const G_ = -2;
const q_ = -3;
const K_ = -4;
const Y_ = -5;
const X_ = -6;
function J_(t, e) {
  return Q_(JSON.parse(t), e);
}
function Q_(t, e) {
  if (typeof t == "number") {
    return s(t, true);
  }
  if (!Array.isArray(t) || t.length === 0) {
    throw new Error("Invalid input");
  }
  const n = t;
  const r = Array(n.length);
  function s(i, o = false) {
    if (i === W_) {
      return;
    }
    if (i === q_) {
      return NaN;
    }
    if (i === K_) {
      return Infinity;
    }
    if (i === Y_) {
      return -Infinity;
    }
    if (i === X_) {
      return -0;
    }
    if (o) {
      throw new Error("Invalid input");
    }
    if (i in r) {
      return r[i];
    }
    const a = n[i];
    if (!a || typeof a != "object") {
      r[i] = a;
    } else if (Array.isArray(a)) {
      if (typeof a[0] == "string") {
        const l = a[0];
        const u = e == null ? undefined : e[l];
        if (u) {
          return r[i] = u(s(a[1]));
        }
        switch (l) {
          case "Date":
            r[i] = new Date(a[1]);
            break;
          case "Set":
            const c = new Set();
            r[i] = c;
            for (let d = 1; d < a.length; d += 1) {
              c.add(s(a[d]));
            }
            break;
          case "Map":
            const f = new Map();
            r[i] = f;
            for (let d = 1; d < a.length; d += 2) {
              f.set(s(a[d]), s(a[d + 1]));
            }
            break;
          case "RegExp":
            r[i] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            r[i] = Object(a[1]);
            break;
          case "BigInt":
            r[i] = BigInt(a[1]);
            break;
          case "null":
            const h = Object.create(null);
            r[i] = h;
            for (let d = 1; d < a.length; d += 2) {
              h[a[d]] = s(a[d + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            {
              const d = globalThis[l];
              const m = a[1];
              const g = vc(m);
              const w = new d(g);
              r[i] = w;
              break;
            }
          case "ArrayBuffer":
            {
              const d = a[1];
              const m = vc(d);
              r[i] = m;
              break;
            }
          default:
            throw new Error(`Unknown type ${l}`);
        }
      } else {
        const l = new Array(a.length);
        r[i] = l;
        for (let u = 0; u < a.length; u += 1) {
          const c = a[u];
          if (c !== G_) {
            l[u] = s(c);
          }
        }
      }
    } else {
      const l = {};
      r[i] = l;
      for (const u in a) {
        const c = a[u];
        l[u] = s(c);
      }
    }
    return r[i];
  }
  return s(0);
}
const Z_ = new Set(["title", "titleTemplate", "script", "style", "noscript"]);
const Xs = new Set(["base", "meta", "link", "style", "script", "noscript"]);
const ey = new Set(["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]);
const ty = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
const uh = new Set(["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]);
const ny = typeof window !== "undefined";
function _i(t) {
  let e = 9;
  for (let n = 0; n < t.length;) {
    e = Math.imul(e ^ t.charCodeAt(n++), 387420489);
  }
  return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function Qo(t) {
  if (t._h) {
    return t._h;
  }
  if (t._d) {
    return _i(t._d);
  }
  let e = `${t.tag}:${t.textContent || t.innerHTML || ""}:`;
  for (const n in t.props) {
    e += `${n}:${String(t.props[n])},`;
  }
  return _i(e);
}
function ry(t, e) {
  if (t instanceof Promise) {
    return t.then(e);
  } else {
    return e(t);
  }
}
function Zo(t, e, n, r) {
  const s = r || hh(typeof e == "object" && typeof e != "function" && !(e instanceof Promise) ? {
    ...e
  } : {
    [t === "script" || t === "noscript" || t === "style" ? "innerHTML" : "textContent"]: e
  }, t === "templateParams" || t === "titleTemplate");
  if (s instanceof Promise) {
    return s.then(o => Zo(t, e, n, o));
  }
  const i = {
    tag: t,
    props: s
  };
  for (const o of uh) {
    const a = i.props[o] !== undefined ? i.props[o] : n[o];
    if (a !== undefined) {
      if (o !== "innerHTML" && o !== "textContent" && o !== "children" || Z_.has(i.tag)) {
        i[o === "children" ? "innerHTML" : o] = a;
      }
      delete i.props[o];
    }
  }
  if (i.props.body) {
    i.tagPosition = "bodyClose";
    delete i.props.body;
  }
  if (i.tag === "script" && typeof i.innerHTML == "object") {
    i.innerHTML = JSON.stringify(i.innerHTML);
    i.props.type = i.props.type || "application/json";
  }
  if (Array.isArray(i.props.content)) {
    return i.props.content.map(o => ({
      ...i,
      props: {
        ...i.props,
        content: o
      }
    }));
  } else {
    return i;
  }
}
function sy(t, e) {
  var r;
  const n = t === "class" ? " " : ";";
  if (e && typeof e == "object" && !Array.isArray(e)) {
    e = Object.entries(e).filter(([, s]) => s).map(([s, i]) => t === "style" ? `${s}:${i}` : s);
  }
  if ((r = String(Array.isArray(e) ? e.join(n) : e)) == null) {
    return undefined;
  } else {
    return r.split(n).filter(s => !!s.trim()).join(n);
  }
}
function fh(t, e, n, r) {
  for (let s = r; s < n.length; s += 1) {
    const i = n[s];
    if (i === "class" || i === "style") {
      t[i] = sy(i, t[i]);
      continue;
    }
    if (t[i] instanceof Promise) {
      return t[i].then(o => {
        t[i] = o;
        return fh(t, e, n, s);
      });
    }
    if (!e && !uh.has(i)) {
      const o = String(t[i]);
      const a = i.startsWith("data-");
      if (o === "true" || o === "") {
        t[i] = a ? "true" : true;
      } else if (!t[i]) {
        if (a && o === "false") {
          t[i] = "false";
        } else {
          delete t[i];
        }
      }
    }
  }
}
function hh(t, e = false) {
  const n = fh(t, e, Object.keys(t), 0);
  if (n instanceof Promise) {
    return n.then(() => t);
  } else {
    return t;
  }
}
const iy = 10;
function dh(t, e, n) {
  for (let r = n; r < e.length; r += 1) {
    const s = e[r];
    if (s instanceof Promise) {
      return s.then(i => {
        e[r] = i;
        return dh(t, e, r);
      });
    }
    if (Array.isArray(s)) {
      t.push(...s);
    } else {
      t.push(s);
    }
  }
}
function oy(t) {
  const e = [];
  const n = t.resolvedInput;
  for (const s in n) {
    if (!Object.prototype.hasOwnProperty.call(n, s)) {
      continue;
    }
    const i = n[s];
    if (i !== undefined && !!ey.has(s)) {
      if (Array.isArray(i)) {
        for (const o of i) {
          e.push(Zo(s, o, t));
        }
        continue;
      }
      e.push(Zo(s, i, t));
    }
  }
  if (e.length === 0) {
    return [];
  }
  const r = [];
  return ry(dh(r, e, 0), () => r.map((s, i) => {
    s._e = t._i;
    if (t.mode) {
      s._m = t.mode;
    }
    s._p = (t._i << iy) + i;
    return s;
  }));
}
const wc = new Set(["onload", "onerror", "onabort", "onprogress", "onloadstart"]);
const Tc = {
  base: -10,
  title: 10
};
const kc = {
  critical: -80,
  high: -10,
  low: 20
};
function yi(t) {
  const e = t.tagPriority;
  if (typeof e == "number") {
    return e;
  }
  let n = 100;
  if (t.tag === "meta") {
    if (t.props["http-equiv"] === "content-security-policy") {
      n = -30;
    } else if (t.props.charset) {
      n = -20;
    } else if (t.props.name === "viewport") {
      n = -15;
    }
  } else if (t.tag === "link" && t.props.rel === "preconnect") {
    n = 20;
  } else if (t.tag in Tc) {
    n = Tc[t.tag];
  }
  if (e && e in kc) {
    return n + kc[e];
  } else {
    return n;
  }
}
const ay = [{
  prefix: "before:",
  offset: -1
}, {
  prefix: "after:",
  offset: 1
}];
const ly = ["name", "property", "http-equiv"];
function ph(t) {
  const {
    props: e,
    tag: n
  } = t;
  if (ty.has(n)) {
    return n;
  }
  if (n === "link" && e.rel === "canonical") {
    return "canonical";
  }
  if (e.charset) {
    return "charset";
  }
  if (e.id) {
    return `${n}:id:${e.id}`;
  }
  for (const r of ly) {
    if (e[r] !== undefined) {
      return `${n}:${r}:${e[r]}`;
    }
  }
  return false;
}
const yn = "%separator";
function cy(t, e) {
  var r;
  let n;
  if (e === "s" || e === "pageTitle") {
    n = t.pageTitle;
  } else if (e.includes(".")) {
    const s = e.indexOf(".");
    n = (r = t[e.substring(0, s)]) == null ? undefined : r[e.substring(s + 1)];
  } else {
    n = t[e];
  }
  if (n !== undefined) {
    return (n || "").replace(/"/g, "\\\"");
  } else {
    return undefined;
  }
}
const uy = new RegExp(`${yn}(?:\\s*${yn})*`, "g");
function zs(t, e, n) {
  if (typeof t != "string" || !t.includes("%")) {
    return t;
  }
  let r = t;
  try {
    r = decodeURI(t);
  } catch {}
  const s = r.match(/%\w+(?:\.\w+)?/g);
  if (!s) {
    return t;
  }
  const i = t.includes(yn);
  t = t.replace(/%\w+(?:\.\w+)?/g, o => {
    if (o === yn || !s.includes(o)) {
      return o;
    }
    const a = cy(e, o.slice(1));
    if (a !== undefined) {
      return a;
    } else {
      return o;
    }
  }).trim();
  if (i) {
    if (t.endsWith(yn)) {
      t = t.slice(0, -yn.length);
    }
    if (t.startsWith(yn)) {
      t = t.slice(yn.length);
    }
    t = t.replace(uy, n).trim();
  }
  return t;
}
function xc(t, e) {
  if (t == null) {
    return e || null;
  } else if (typeof t == "function") {
    return t(e);
  } else {
    return t;
  }
}
async function gh(t, e = {}) {
  const n = e.document || t.resolvedOptions.document;
  if (!n || !t.dirty) {
    return;
  }
  const r = {
    shouldRender: true,
    tags: []
  };
  await t.hooks.callHook("dom:beforeRender", r);
  if (r.shouldRender) {
    t._domUpdatePromise ||= new Promise(async s => {
      var f;
      const i = (await t.resolveTags()).map(h => ({
        tag: h,
        id: Xs.has(h.tag) ? Qo(h) : h.tag,
        shouldRender: true
      }));
      let o = t._dom;
      if (!o) {
        o = {
          elMap: {
            htmlAttrs: n.documentElement,
            bodyAttrs: n.body
          }
        };
        const h = new Set();
        for (const d of ["body", "head"]) {
          const m = (f = n[d]) == null ? undefined : f.children;
          for (const g of m) {
            const w = g.tagName.toLowerCase();
            if (!Xs.has(w)) {
              continue;
            }
            const k = {
              tag: w,
              props: await hh(g.getAttributeNames().reduce((y, S) => ({
                ...y,
                [S]: g.getAttribute(S)
              }), {})),
              innerHTML: g.innerHTML
            };
            const v = ph(k);
            let p = v;
            let _ = 1;
            while (p && h.has(p)) {
              p = `${v}:${_++}`;
            }
            if (p) {
              k._d = p;
              h.add(p);
            }
            o.elMap[g.getAttribute("data-hid") || Qo(k)] = g;
          }
        }
      }
      o.pendingSideEffects = {
        ...o.sideEffects
      };
      o.sideEffects = {};
      function a(h, d, m) {
        const g = `${h}:${d}`;
        o.sideEffects[g] = m;
        delete o.pendingSideEffects[g];
      }
      function l({
        id: h,
        $el: d,
        tag: m
      }) {
        const g = m.tag.endsWith("Attrs");
        o.elMap[h] = d;
        if (!g) {
          if (m.textContent && m.textContent !== d.textContent) {
            d.textContent = m.textContent;
          }
          if (m.innerHTML && m.innerHTML !== d.innerHTML) {
            d.innerHTML = m.innerHTML;
          }
          a(h, "el", () => {
            var w;
            if ((w = o.elMap[h]) != null) {
              w.remove();
            }
            delete o.elMap[h];
          });
        }
        if (m._eventHandlers) {
          for (const w in m._eventHandlers) {
            if (Object.prototype.hasOwnProperty.call(m._eventHandlers, w) && d.getAttribute(`data-${w}`) !== "") {
              (m.tag === "bodyAttrs" ? n.defaultView : d).addEventListener(w.substring(2), m._eventHandlers[w].bind(d));
              d.setAttribute(`data-${w}`, "");
            }
          }
        }
        for (const w in m.props) {
          if (!Object.prototype.hasOwnProperty.call(m.props, w)) {
            continue;
          }
          const k = m.props[w];
          const v = `attr:${w}`;
          if (w === "class") {
            if (!k) {
              continue;
            }
            for (const p of k.split(" ")) {
              if (g) {
                a(h, `${v}:${p}`, () => d.classList.remove(p));
              }
              if (!d.classList.contains(p)) {
                d.classList.add(p);
              }
            }
          } else if (w === "style") {
            if (!k) {
              continue;
            }
            for (const p of k.split(";")) {
              const _ = p.indexOf(":");
              const y = p.substring(0, _).trim();
              const S = p.substring(_ + 1).trim();
              a(h, `${v}:${y}`, () => {
                d.style.removeProperty(y);
              });
              d.style.setProperty(y, S);
            }
          } else {
            if (d.getAttribute(w) !== k) {
              d.setAttribute(w, k === true ? "" : String(k));
            }
            if (g) {
              a(h, v, () => d.removeAttribute(w));
            }
          }
        }
      }
      const u = [];
      const c = {
        bodyClose: undefined,
        bodyOpen: undefined,
        head: undefined
      };
      for (const h of i) {
        const {
          tag: d,
          shouldRender: m,
          id: g
        } = h;
        if (m) {
          if (d.tag === "title") {
            n.title = d.textContent;
            continue;
          }
          h.$el = h.$el || o.elMap[g];
          if (h.$el) {
            l(h);
          } else if (Xs.has(d.tag)) {
            u.push(h);
          }
        }
      }
      for (const h of u) {
        const d = h.tag.tagPosition || "head";
        h.$el = n.createElement(h.tag.tag);
        l(h);
        c[d] = c[d] || n.createDocumentFragment();
        c[d].appendChild(h.$el);
      }
      for (const h of i) {
        await t.hooks.callHook("dom:renderTag", h, n, a);
      }
      if (c.head) {
        n.head.appendChild(c.head);
      }
      if (c.bodyOpen) {
        n.body.insertBefore(c.bodyOpen, n.body.firstChild);
      }
      if (c.bodyClose) {
        n.body.appendChild(c.bodyClose);
      }
      for (const h in o.pendingSideEffects) {
        o.pendingSideEffects[h]();
      }
      t._dom = o;
      await t.hooks.callHook("dom:rendered", {
        renders: i
      });
      s();
    }).finally(() => {
      t._domUpdatePromise = undefined;
      t.dirty = false;
    });
    return t._domUpdatePromise;
  }
}
function fy(t, e = {}) {
  const n = e.delayFn || (r => setTimeout(r, 10));
  return t._domDebouncedUpdatePromise = t._domDebouncedUpdatePromise || new Promise(r => n(() => gh(t, e).then(() => {
    delete t._domDebouncedUpdatePromise;
    r();
  })));
}
function hy(t) {
  return e => {
    var r;
    var s;
    const n = ((s = (r = e.resolvedOptions.document) == null ? undefined : r.head.querySelector("script[id=\"unhead:payload\"]")) == null ? undefined : s.innerHTML) || false;
    if (n) {
      e.push(JSON.parse(n));
    }
    return {
      mode: "client",
      hooks: {
        "entries:updated": i => {
          fy(i, t);
        }
      }
    };
  };
}
const dy = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
const py = {
  hooks: {
    "tag:normalise": ({
      tag: t
    }) => {
      if (t.props.hid) {
        t.key = t.props.hid;
        delete t.props.hid;
      }
      if (t.props.vmid) {
        t.key = t.props.vmid;
        delete t.props.vmid;
      }
      if (t.props.key) {
        t.key = t.props.key;
        delete t.props.key;
      }
      const e = ph(t);
      if (e && !e.startsWith("meta:og:") && !e.startsWith("meta:twitter:")) {
        delete t.key;
      }
      const n = e || (t.key ? `${t.tag}:${t.key}` : false);
      if (n) {
        t._d = n;
      }
    },
    "tags:resolve": t => {
      const e = Object.create(null);
      for (const r of t.tags) {
        const s = (r.key ? `${r.tag}:${r.key}` : r._d) || Qo(r);
        const i = e[s];
        if (i) {
          let a = r == null ? undefined : r.tagDuplicateStrategy;
          if (!a && dy.has(r.tag)) {
            a = "merge";
          }
          if (a === "merge") {
            const l = i.props;
            if (l.style && r.props.style) {
              if (l.style[l.style.length - 1] !== ";") {
                l.style += ";";
              }
              r.props.style = `${l.style} ${r.props.style}`;
            }
            if (l.class && r.props.class) {
              r.props.class = `${l.class} ${r.props.class}`;
            } else if (l.class) {
              r.props.class = l.class;
            }
            e[s].props = {
              ...l,
              ...r.props
            };
            continue;
          } else if (r._e === i._e) {
            i._duped = i._duped || [];
            r._d = `${i._d}:${i._duped.length + 1}`;
            i._duped.push(r);
            continue;
          } else if (yi(r) > yi(i)) {
            continue;
          }
        }
        if (!r.innerHTML && !r.textContent && Object.keys(r.props).length === 0 && Xs.has(r.tag)) {
          delete e[s];
          continue;
        }
        e[s] = r;
      }
      const n = [];
      for (const r in e) {
        const s = e[r];
        const i = s._duped;
        n.push(s);
        if (i) {
          delete s._duped;
          n.push(...i);
        }
      }
      t.tags = n;
      t.tags = t.tags.filter(r => r.tag !== "meta" || !r.props.name && !r.props.property || !!r.props.content);
    }
  }
};
const gy = new Set(["script", "link", "bodyAttrs"]);
const my = t => ({
  hooks: {
    "tags:resolve": e => {
      for (const n of e.tags) {
        if (!gy.has(n.tag)) {
          continue;
        }
        const r = n.props;
        for (const s in r) {
          if (s[0] !== "o" || s[1] !== "n" || !Object.prototype.hasOwnProperty.call(r, s)) {
            continue;
          }
          const i = r[s];
          if (typeof i == "function") {
            if (t.ssr && wc.has(s)) {
              r[s] = `this.dataset.${s}fired = true`;
            } else {
              delete r[s];
            }
            n._eventHandlers = n._eventHandlers || {};
            n._eventHandlers[s] = i;
          }
        }
        if (t.ssr && n._eventHandlers && (n.props.src || n.props.href)) {
          n.key = n.key || _i(n.props.src || n.props.href);
        }
      }
    },
    "dom:renderTag": ({
      $el: e,
      tag: n
    }) => {
      var s;
      var i;
      const r = e == null ? undefined : e.dataset;
      if (r) {
        for (const o in r) {
          if (!o.endsWith("fired")) {
            continue;
          }
          const a = o.slice(0, -5);
          if (wc.has(a)) {
            if ((i = (s = n._eventHandlers) == null ? undefined : s[a]) != null) {
              i.call(e, new Event(a.substring(2)));
            }
          }
        }
      }
    }
  }
});
const _y = new Set(["link", "style", "script", "noscript"]);
const yy = {
  hooks: {
    "tag:normalise": ({
      tag: t
    }) => {
      if (t.key && _y.has(t.tag)) {
        t.props["data-hid"] = t._h = _i(t.key);
      }
    }
  }
};
const by = {
  mode: "server",
  hooks: {
    "tags:beforeResolve": t => {
      const e = {};
      let n = false;
      for (const r of t.tags) {
        if (r._m === "server" && (r.tag === "titleTemplate" || r.tag === "templateParams" || r.tag === "title")) {
          e[r.tag] = r.tag === "title" || r.tag === "titleTemplate" ? r.textContent : r.props;
          n = true;
        }
      }
      if (n) {
        t.tags.push({
          tag: "script",
          innerHTML: JSON.stringify(e),
          props: {
            id: "unhead:payload",
            type: "application/json"
          }
        });
      }
    }
  }
};
const vy = {
  hooks: {
    "tags:resolve": t => {
      var e;
      for (const n of t.tags) {
        if (typeof n.tagPriority == "string") {
          for (const {
            prefix: r,
            offset: s
          } of ay) {
            if (!n.tagPriority.startsWith(r)) {
              continue;
            }
            const i = n.tagPriority.substring(r.length);
            const o = (e = t.tags.find(a => a._d === i)) == null ? undefined : e._p;
            if (o !== undefined) {
              n._p = o + s;
              break;
            }
          }
        }
      }
      t.tags.sort((n, r) => {
        const s = yi(n);
        const i = yi(r);
        if (s < i) {
          return -1;
        } else if (s > i) {
          return 1;
        } else {
          return n._p - r._p;
        }
      });
    }
  }
};
const wy = {
  meta: "content",
  link: "href",
  htmlAttrs: "lang"
};
const Ty = ["innerHTML", "textContent"];
const ky = t => ({
  hooks: {
    "tags:resolve": e => {
      var o;
      const {
        tags: n
      } = e;
      let r;
      for (let a = 0; a < n.length; a += 1) {
        if (n[a].tag === "templateParams") {
          r = e.tags.splice(a, 1)[0].props;
          a -= 1;
        }
      }
      const s = r || {};
      const i = s.separator || "|";
      delete s.separator;
      s.pageTitle = zs(s.pageTitle || ((o = n.find(a => a.tag === "title")) == null ? undefined : o.textContent) || "", s, i);
      for (const a of n) {
        if (a.processTemplateParams === false) {
          continue;
        }
        const l = wy[a.tag];
        if (l && typeof a.props[l] == "string") {
          a.props[l] = zs(a.props[l], s, i);
        } else if (a.processTemplateParams || a.tag === "titleTemplate" || a.tag === "title") {
          for (const u of Ty) {
            if (typeof a[u] == "string") {
              a[u] = zs(a[u], s, i);
            }
          }
        }
      }
      t._templateParams = s;
      t._separator = i;
    },
    "tags:afterResolve": ({
      tags: e
    }) => {
      let n;
      for (let r = 0; r < e.length; r += 1) {
        const s = e[r];
        if (s.tag === "title" && s.processTemplateParams !== false) {
          n = s;
        }
      }
      if (n != null && n.textContent) {
        n.textContent = zs(n.textContent, t._templateParams, t._separator);
      }
    }
  }
});
const xy = {
  hooks: {
    "tags:resolve": t => {
      const {
        tags: e
      } = t;
      let n;
      let r;
      for (let s = 0; s < e.length; s += 1) {
        const i = e[s];
        if (i.tag === "title") {
          n = i;
        } else if (i.tag === "titleTemplate") {
          r = i;
        }
      }
      if (r && n) {
        const s = xc(r.textContent, n.textContent);
        if (s !== null) {
          n.textContent = s || n.textContent;
        } else {
          t.tags.splice(t.tags.indexOf(n), 1);
        }
      } else if (r) {
        const s = xc(r.textContent);
        if (s !== null) {
          r.textContent = s;
          r.tag = "title";
          r = undefined;
        }
      }
      if (r) {
        t.tags.splice(t.tags.indexOf(r), 1);
      }
    }
  }
};
const Sy = {
  hooks: {
    "tags:afterResolve": t => {
      for (const e of t.tags) {
        if (typeof e.innerHTML == "string") {
          if (e.innerHTML && (e.props.type === "application/ld+json" || e.props.type === "application/json")) {
            e.innerHTML = e.innerHTML.replace(/</g, "\\u003C");
          } else {
            e.innerHTML = e.innerHTML.replace(new RegExp(`</${e.tag}`, "g"), `<\\/${e.tag}`);
          }
        }
      }
    }
  }
};
let mh;
function Cy(t = {}) {
  const e = Ey(t);
  e.use(hy());
  return mh = e;
}
function Sc(t, e) {
  return !t || t === "server" && e || t === "client" && !e;
}
function Ey(t = {}) {
  const e = th();
  e.addHooks(t.hooks || {});
  t.document = t.document || (ny ? document : undefined);
  const n = !t.document;
  const r = () => {
    a.dirty = true;
    e.callHook("entries:updated", a);
  };
  let s = 0;
  let i = [];
  const o = [];
  const a = {
    plugins: o,
    dirty: false,
    resolvedOptions: t,
    hooks: e,
    headEntries() {
      return i;
    },
    use(l) {
      const u = typeof l == "function" ? l(a) : l;
      if (!u.key || !o.some(c => c.key === u.key)) {
        o.push(u);
        if (Sc(u.mode, n)) {
          e.addHooks(u.hooks || {});
        }
      }
    },
    push(l, u) {
      if (u != null) {
        delete u.head;
      }
      const c = {
        _i: s++,
        input: l,
        ...u
      };
      if (Sc(c.mode, n)) {
        i.push(c);
        r();
      }
      return {
        dispose() {
          i = i.filter(f => f._i !== c._i);
          r();
        },
        patch(f) {
          for (const h of i) {
            if (h._i === c._i) {
              h.input = c.input = f;
            }
          }
          r();
        }
      };
    },
    async resolveTags() {
      const l = {
        tags: [],
        entries: [...i]
      };
      await e.callHook("entries:resolve", l);
      for (const u of l.entries) {
        const c = u.resolvedInput || u.input;
        u.resolvedInput = await (u.transform ? u.transform(c) : c);
        if (u.resolvedInput) {
          for (const f of await oy(u)) {
            const h = {
              tag: f,
              entry: u,
              resolvedOptions: a.resolvedOptions
            };
            await e.callHook("tag:normalise", h);
            l.tags.push(h.tag);
          }
        }
      }
      await e.callHook("tags:beforeResolve", l);
      await e.callHook("tags:resolve", l);
      await e.callHook("tags:afterResolve", l);
      return l.tags;
    },
    ssr: n
  };
  [py, by, my, yy, vy, ky, xy, Sy, ...((t == null ? undefined : t.plugins) || [])].forEach(l => a.use(l));
  a.hooks.callHook("init", a);
  return a;
}
function Py() {
  return mh;
}
const Ry = jf[0] === "3";
function Oy(t) {
  if (typeof t == "function") {
    return t();
  } else {
    return fe(t);
  }
}
function ea(t) {
  if (t instanceof Promise || t instanceof Date || t instanceof RegExp) {
    return t;
  }
  const e = Oy(t);
  if (!t || !e) {
    return e;
  }
  if (Array.isArray(e)) {
    return e.map(n => ea(n));
  }
  if (typeof e == "object") {
    const n = {};
    for (const r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        if (r === "titleTemplate" || r[0] === "o" && r[1] === "n") {
          n[r] = fe(e[r]);
          continue;
        }
        n[r] = ea(e[r]);
      }
    }
    return n;
  }
  return e;
}
const Ay = {
  hooks: {
    "entries:resolve": t => {
      for (const e of t.entries) {
        e.resolvedInput = ea(e.input);
      }
    }
  }
};
const _h = "usehead";
function My(t) {
  return {
    install(n) {
      if (Ry) {
        n.config.globalProperties.$unhead = t;
        n.config.globalProperties.$head = t;
        n.provide(_h, t);
      }
    }
  }.install;
}
function Iy(t = {}) {
  t.domDelayFn = t.domDelayFn || (n => Ht(() => setTimeout(() => n(), 0)));
  const e = Cy(t);
  e.use(Ay);
  e.install = My(e);
  return e;
}
const ta = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const na = "__unhead_injection_handler__";
function Ly(t) {
  ta[na] = t;
}
function N1() {
  if (na in ta) {
    return ta[na]();
  }
  const t = De(_h);
  return t || Py();
}
let Js;
let Qs;
function By() {
  Js = $fetch(ol(`builds/meta/${Dn().app.buildId}.json`), {
    responseType: "json"
  });
  Js.then(t => {
    Qs = M_(t.matcher);
  }).catch(t => {
    console.error("[nuxt] Error fetching app manifest.", t);
  });
  return Js;
}
function $i() {
  return Js || By();
}
async function al(t) {
  await $i();
  if (!Qs) {
    console.error("[nuxt] Error creating app manifest matcher.", Qs);
    return {};
  }
  try {
    return oh({}, ...Qs.matchAll(t).reverse());
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
async function Cc(t, e = {}) {
  const n = await Ny(t, e);
  const r = ie();
  const s = r._payloadCache = r._payloadCache || {};
  if (!(n in s)) {
    s[n] = bh(t).then(i => i ? yh(n).then(o => o || (delete s[n], null)) : (s[n] = null, null));
  }
  return s[n];
}
const Dy = "_payload.json";
async function Ny(t, e = {}) {
  const n = new URL(t, "http://localhost");
  if (n.host !== "localhost" || lr(n.pathname, {
    acceptRelative: true
  })) {
    throw new Error("Payload URL must not include hostname: " + t);
  }
  const r = Dn();
  const s = e.hash || (e.fresh ? Date.now() : r.app.buildId);
  const i = r.app.cdnURL;
  const o = i && (await bh(t)) ? i : r.app.baseURL;
  return il(o, n.pathname, Dy + (s ? `?${s}` : ""));
}
async function yh(t) {
  const e = fetch(t).then(n => n.text().then(vh));
  try {
    return await e;
  } catch (n) {
    console.warn("[nuxt] Cannot load payload ", t, n);
  }
  return null;
}
async function bh(t = Di().path) {
  t = sl(t);
  if ((await $i()).prerendered.includes(t)) {
    return true;
  }
  const n = await al(t);
  return !!n.prerender && !n.redirect;
}
let jn = null;
async function $y() {
  var r;
  if (jn) {
    return jn;
  }
  const t = document.getElementById("__NUXT_DATA__");
  if (!t) {
    return {};
  }
  const e = await vh(t.textContent || "");
  const n = t.dataset.src ? await yh(t.dataset.src) : undefined;
  jn = {
    ...e,
    ...n,
    ...window.__NUXT__
  };
  if ((r = jn.config) != null && r.public) {
    jn.config.public = Yt(jn.config.public);
  }
  return jn;
}
async function vh(t) {
  return await J_(t, ie()._payloadRevivers);
}
function Hy(t, e) {
  ie()._payloadRevivers[t] = e;
}
const Ec = {
  NuxtError: t => Ms(t),
  EmptyShallowRef: t => Or(t === "_" ? undefined : t === "0n" ? BigInt(0) : hi(t)),
  EmptyRef: t => We(t === "_" ? undefined : t === "0n" ? BigInt(0) : hi(t)),
  ShallowRef: t => Or(t),
  ShallowReactive: t => sn(t),
  Ref: t => We(t),
  Reactive: t => Yt(t)
};
const Fy = Ze({
  name: "nuxt:revive-payload:client",
  order: -30,
  async setup(t) {
    let e;
    let n;
    for (const r in Ec) {
      Hy(r, Ec[r]);
    }
    Object.assign(t.payload, ([e, n] = Cr(() => t.runWithContext($y)), e = await e, n(), e));
    window.__NUXT__ = t.payload;
  }
});
const jy = [];
const Uy = Ze({
  name: "nuxt:head",
  enforce: "pre",
  setup(t) {
    const e = Iy({
      plugins: jy
    });
    Ly(() => ie().vueApp._context.provides.usehead);
    t.vueApp.use(e);
    {
      let n = true;
      const r = async () => {
        n = false;
        await gh(e);
      };
      e.hooks.hook("dom:beforeRender", s => {
        s.shouldRender = !n;
      });
      t.hooks.hook("page:start", () => {
        n = true;
      });
      t.hooks.hook("page:finish", () => {
        if (!t.isHydrating) {
          r();
        }
      });
      t.hooks.hook("app:error", r);
      t.hooks.hook("app:suspense:resolve", r);
    }
  }
});
/*!
* vue-router v4.4.5
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const gr = typeof document !== "undefined";
function wh(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function Vy(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && wh(t.default);
}
const ce = Object.assign;
function lo(t, e) {
  const n = {};
  for (const r in e) {
    const s = e[r];
    n[r] = $t(s) ? s.map(t) : t(s);
  }
  return n;
}
const is = () => {};
const $t = Array.isArray;
const Th = /#/g;
const zy = /&/g;
const Wy = /\//g;
const Gy = /=/g;
const qy = /\?/g;
const kh = /\+/g;
const Ky = /%5B/g;
const Yy = /%5D/g;
const xh = /%5E/g;
const Xy = /%60/g;
const Sh = /%7B/g;
const Jy = /%7C/g;
const Ch = /%7D/g;
const Qy = /%20/g;
function ll(t) {
  return encodeURI("" + t).replace(Jy, "|").replace(Ky, "[").replace(Yy, "]");
}
function Zy(t) {
  return ll(t).replace(Sh, "{").replace(Ch, "}").replace(xh, "^");
}
function ra(t) {
  return ll(t).replace(kh, "%2B").replace(Qy, "+").replace(Th, "%23").replace(zy, "%26").replace(Xy, "`").replace(Sh, "{").replace(Ch, "}").replace(xh, "^");
}
function e0(t) {
  return ra(t).replace(Gy, "%3D");
}
function t0(t) {
  return ll(t).replace(Th, "%23").replace(qy, "%3F");
}
function n0(t) {
  if (t == null) {
    return "";
  } else {
    return t0(t).replace(Wy, "%2F");
  }
}
function _s(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
const r0 = /\/$/;
const s0 = t => t.replace(r0, "");
function co(t, e, n = "/") {
  let r;
  let s = {};
  let i = "";
  let o = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  if (a < l && a >= 0) {
    l = -1;
  }
  if (l > -1) {
    r = e.slice(0, l);
    i = e.slice(l + 1, a > -1 ? a : e.length);
    s = t(i);
  }
  if (a > -1) {
    r = r || e.slice(0, a);
    o = e.slice(a, e.length);
  }
  r = l0(r ?? e, n);
  return {
    fullPath: r + (i && "?") + i + o,
    path: r,
    query: s,
    hash: _s(o)
  };
}
function i0(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function Pc(t, e) {
  if (!e || !t.toLowerCase().startsWith(e.toLowerCase())) {
    return t;
  } else {
    return t.slice(e.length) || "/";
  }
}
function o0(t, e, n) {
  const r = e.matched.length - 1;
  const s = n.matched.length - 1;
  return r > -1 && r === s && Lr(e.matched[r], n.matched[s]) && Eh(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash;
}
function Lr(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function Eh(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) {
    return false;
  }
  for (const n in t) {
    if (!a0(t[n], e[n])) {
      return false;
    }
  }
  return true;
}
function a0(t, e) {
  if ($t(t)) {
    return Rc(t, e);
  } else if ($t(e)) {
    return Rc(e, t);
  } else {
    return t === e;
  }
}
function Rc(t, e) {
  if ($t(e)) {
    return t.length === e.length && t.every((n, r) => n === e[r]);
  } else {
    return t.length === 1 && t[0] === e;
  }
}
function l0(t, e) {
  if (t.startsWith("/")) {
    return t;
  }
  if (!t) {
    return e;
  }
  const n = e.split("/");
  const r = t.split("/");
  const s = r[r.length - 1];
  if (s === ".." || s === ".") {
    r.push("");
  }
  let i = n.length - 1;
  let o;
  let a;
  for (o = 0; o < r.length; o++) {
    a = r[o];
    if (a !== ".") {
      if (a === "..") {
        if (i > 1) {
          i--;
        }
      } else {
        break;
      }
    }
  }
  return n.slice(0, i).join("/") + "/" + r.slice(o).join("/");
}
const It = {
  path: "/",
  name: undefined,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: undefined
};
var ys;
(function (t) {
  t.pop = "pop";
  t.push = "push";
})(ys ||= {});
var os;
(function (t) {
  t.back = "back";
  t.forward = "forward";
  t.unknown = "";
})(os ||= {});
function c0(t) {
  if (!t) {
    if (gr) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/";
      t = t.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      t = "/";
    }
  }
  if (t[0] !== "/" && t[0] !== "#") {
    t = "/" + t;
  }
  return s0(t);
}
const u0 = /^[^#]+#/;
function f0(t, e) {
  return t.replace(u0, "#") + e;
}
function h0(t, e) {
  const n = document.documentElement.getBoundingClientRect();
  const r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0)
  };
}
const Hi = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function d0(t) {
  let e;
  if ("el" in t) {
    const n = t.el;
    const r = typeof n == "string" && n.startsWith("#");
    const s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      return;
    }
    e = h0(s, t);
  } else {
    e = t;
  }
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo(e);
  } else {
    window.scrollTo(e.left ?? window.scrollX, e.top ?? window.scrollY);
  }
}
function Oc(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const sa = new Map();
function p0(t, e) {
  sa.set(t, e);
}
function g0(t) {
  const e = sa.get(t);
  sa.delete(t);
  return e;
}
let m0 = () => location.protocol + "//" + location.host;
function Ph(t, e) {
  const {
    pathname: n,
    search: r,
    hash: s
  } = e;
  const i = t.indexOf("#");
  if (i > -1) {
    let a = s.includes(t.slice(i)) ? t.slice(i).length : 1;
    let l = s.slice(a);
    if (l[0] !== "/") {
      l = "/" + l;
    }
    return Pc(l, "");
  }
  return Pc(n, t) + r + s;
}
function _0(t, e, n, r) {
  let s = [];
  let i = [];
  let o = null;
  const a = ({
    state: h
  }) => {
    const d = Ph(t, location);
    const m = n.value;
    const g = e.value;
    let w = 0;
    if (h) {
      n.value = d;
      e.value = h;
      if (o && o === m) {
        o = null;
        return;
      }
      w = g ? h.position - g.position : 0;
    } else {
      r(d);
    }
    s.forEach(k => {
      k(n.value, m, {
        delta: w,
        type: ys.pop,
        direction: w ? w > 0 ? os.forward : os.back : os.unknown
      });
    });
  };
  function l() {
    o = n.value;
  }
  function u(h) {
    s.push(h);
    const d = () => {
      const m = s.indexOf(h);
      if (m > -1) {
        s.splice(m, 1);
      }
    };
    i.push(d);
    return d;
  }
  function c() {
    const {
      history: h
    } = window;
    if (h.state) {
      h.replaceState(ce({}, h.state, {
        scroll: Hi()
      }), "");
    }
  }
  function f() {
    for (const h of i) {
      h();
    }
    i = [];
    window.removeEventListener("popstate", a);
    window.removeEventListener("beforeunload", c);
  }
  window.addEventListener("popstate", a);
  window.addEventListener("beforeunload", c, {
    passive: true
  });
  return {
    pauseListeners: l,
    listen: u,
    destroy: f
  };
}
function Ac(t, e, n, r = false, s = false) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Hi() : null
  };
}
function y0(t) {
  const {
    history: e,
    location: n
  } = window;
  const r = {
    value: Ph(t, n)
  };
  const s = {
    value: e.state
  };
  if (!s.value) {
    i(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: e.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function i(l, u, c) {
    const f = t.indexOf("#");
    const h = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + l : m0() + t + l;
    try {
      e[c ? "replaceState" : "pushState"](u, "", h);
      s.value = u;
    } catch (d) {
      console.error(d);
      n[c ? "replace" : "assign"](h);
    }
  }
  function o(l, u) {
    const c = ce({}, e.state, Ac(s.value.back, l, s.value.forward, true), u, {
      position: s.value.position
    });
    i(l, c, true);
    r.value = l;
  }
  function a(l, u) {
    const c = ce({}, s.value, e.state, {
      forward: l,
      scroll: Hi()
    });
    i(c.current, c, true);
    const f = ce({}, Ac(r.value, l, null), {
      position: c.position + 1
    }, u);
    i(l, f, false);
    r.value = l;
  }
  return {
    location: r,
    state: s,
    push: a,
    replace: o
  };
}
function Rh(t) {
  t = c0(t);
  const e = y0(t);
  const n = _0(t, e.state, e.location, e.replace);
  function r(i, o = true) {
    if (!o) {
      n.pauseListeners();
    }
    history.go(i);
  }
  const s = ce({
    location: "",
    base: t,
    go: r,
    createHref: f0.bind(null, t)
  }, e, n);
  Object.defineProperty(s, "location", {
    enumerable: true,
    get: () => e.location.value
  });
  Object.defineProperty(s, "state", {
    enumerable: true,
    get: () => e.state.value
  });
  return s;
}
function b0(t) {
  t = location.host ? t || location.pathname + location.search : "";
  if (!t.includes("#")) {
    t += "#";
  }
  return Rh(t);
}
function v0(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function Oh(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const Ah = Symbol("");
var Mc;
(function (t) {
  t[t.aborted = 4] = "aborted";
  t[t.cancelled = 8] = "cancelled";
  t[t.duplicated = 16] = "duplicated";
})(Mc ||= {});
function Br(t, e) {
  return ce(new Error(), {
    type: t,
    [Ah]: true
  }, e);
}
function Zt(t, e) {
  return t instanceof Error && Ah in t && (e == null || !!(t.type & e));
}
const Ic = "[^/]+?";
const w0 = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const T0 = /[.+*?^${}()[\]/\\]/g;
function k0(t, e) {
  const n = ce({}, w0, e);
  const r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const u of t) {
    const c = u.length ? [] : [90];
    if (n.strict && !u.length) {
      s += "/";
    }
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let d = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) {
        if (!f) {
          s += "/";
        }
        s += h.value.replace(T0, "\\$&");
        d += 40;
      } else if (h.type === 1) {
        const {
          value: m,
          repeatable: g,
          optional: w,
          regexp: k
        } = h;
        i.push({
          name: m,
          repeatable: g,
          optional: w
        });
        const v = k || Ic;
        if (v !== Ic) {
          d += 10;
          try {
            new RegExp(`(${v})`);
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${v}): ${_.message}`);
          }
        }
        let p = g ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        if (!f) {
          p = w && u.length < 2 ? `(?:/${p})` : "/" + p;
        }
        if (w) {
          p += "?";
        }
        s += p;
        d += 20;
        if (w) {
          d += -8;
        }
        if (g) {
          d += -20;
        }
        if (v === ".*") {
          d += -50;
        }
      }
      c.push(d);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  if (!n.strict) {
    s += "/?";
  }
  if (n.end) {
    s += "$";
  } else if (n.strict) {
    s += "(?:/|$)";
  }
  const o = new RegExp(s, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(o);
    const f = {};
    if (!c) {
      return null;
    }
    for (let h = 1; h < c.length; h++) {
      const d = c[h] || "";
      const m = i[h - 1];
      f[m.name] = d && m.repeatable ? d.split("/") : d;
    }
    return f;
  }
  function l(u) {
    let c = "";
    let f = false;
    for (const h of t) {
      if (!f || !c.endsWith("/")) {
        c += "/";
      }
      f = false;
      for (const d of h) {
        if (d.type === 0) {
          c += d.value;
        } else if (d.type === 1) {
          const {
            value: m,
            repeatable: g,
            optional: w
          } = d;
          const k = m in u ? u[m] : "";
          if ($t(k) && !g) {
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const v = $t(k) ? k.join("/") : k;
          if (!v) {
            if (w) {
              if (h.length < 2) {
                if (c.endsWith("/")) {
                  c = c.slice(0, -1);
                } else {
                  f = true;
                }
              }
            } else {
              throw new Error(`Missing required param "${m}"`);
            }
          }
          c += v;
        }
      }
    }
    return c || "/";
  }
  return {
    re: o,
    score: r,
    keys: i,
    parse: a,
    stringify: l
  };
}
function x0(t, e) {
  let n = 0;
  while (n < t.length && n < e.length) {
    const r = e[n] - t[n];
    if (r) {
      return r;
    }
    n++;
  }
  if (t.length < e.length) {
    if (t.length === 1 && t[0] === 80) {
      return -1;
    } else {
      return 1;
    }
  } else if (t.length > e.length) {
    if (e.length === 1 && e[0] === 80) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
}
function Mh(t, e) {
  let n = 0;
  const r = t.score;
  const s = e.score;
  while (n < r.length && n < s.length) {
    const i = x0(r[n], s[n]);
    if (i) {
      return i;
    }
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Lc(r)) {
      return 1;
    }
    if (Lc(s)) {
      return -1;
    }
  }
  return s.length - r.length;
}
function Lc(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const S0 = {
  type: 0,
  value: ""
};
const C0 = /[a-zA-Z0-9_]/;
function E0(t) {
  if (!t) {
    return [[]];
  }
  if (t === "/") {
    return [[S0]];
  }
  if (!t.startsWith("/")) {
    throw new Error(`Invalid path "${t}"`);
  }
  function e(d) {
    throw new Error(`ERR (${n})/"${u}": ${d}`);
  }
  let n = 0;
  let r = n;
  const s = [];
  let i;
  function o() {
    if (i) {
      s.push(i);
    }
    i = [];
  }
  let a = 0;
  let l;
  let u = "";
  let c = "";
  function f() {
    if (u) {
      if (n === 0) {
        i.push({
          type: 0,
          value: u
        });
      } else if (n === 1 || n === 2 || n === 3) {
        if (i.length > 1 && (l === "*" || l === "+")) {
          e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`);
        }
        i.push({
          type: 1,
          value: u,
          regexp: c,
          repeatable: l === "*" || l === "+",
          optional: l === "*" || l === "?"
        });
      } else {
        e("Invalid state to consume buffer");
      }
      u = "";
    }
  }
  function h() {
    u += l;
  }
  while (a < t.length) {
    l = t[a++];
    if (l === "\\" && n !== 2) {
      r = n;
      n = 4;
      continue;
    }
    switch (n) {
      case 0:
        if (l === "/") {
          if (u) {
            f();
          }
          o();
        } else if (l === ":") {
          f();
          n = 1;
        } else {
          h();
        }
        break;
      case 4:
        h();
        n = r;
        break;
      case 1:
        if (l === "(") {
          n = 2;
        } else if (C0.test(l)) {
          h();
        } else {
          f();
          n = 0;
          if (l !== "*" && l !== "?" && l !== "+") {
            a--;
          }
        }
        break;
      case 2:
        if (l === ")") {
          if (c[c.length - 1] == "\\") {
            c = c.slice(0, -1) + l;
          } else {
            n = 3;
          }
        } else {
          c += l;
        }
        break;
      case 3:
        f();
        n = 0;
        if (l !== "*" && l !== "?" && l !== "+") {
          a--;
        }
        c = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  if (n === 2) {
    e(`Unfinished custom RegExp for param "${u}"`);
  }
  f();
  o();
  return s;
}
function P0(t, e, n) {
  const r = k0(E0(t.path), n);
  const s = ce(r, {
    record: t,
    parent: e,
    children: [],
    alias: []
  });
  if (e && !s.record.aliasOf == !e.record.aliasOf) {
    e.children.push(s);
  }
  return s;
}
function R0(t, e) {
  const n = [];
  const r = new Map();
  e = $c({
    strict: false,
    end: true,
    sensitive: false
  }, e);
  function s(f) {
    return r.get(f);
  }
  function i(f, h, d) {
    const m = !d;
    const g = Dc(f);
    g.aliasOf = d && d.record;
    const w = $c(e, f);
    const k = [g];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const y of _) {
        k.push(Dc(ce({}, g, {
          components: d ? d.record.components : g.components,
          path: y,
          aliasOf: d ? d.record : g
        })));
      }
    }
    let v;
    let p;
    for (const _ of k) {
      const {
        path: y
      } = _;
      if (h && y[0] !== "/") {
        const S = h.record.path;
        const C = S[S.length - 1] === "/" ? "" : "/";
        _.path = h.record.path + (y && C + y);
      }
      v = P0(_, h, w);
      if (d) {
        d.alias.push(v);
      } else {
        p = p || v;
        if (p !== v) {
          p.alias.push(v);
        }
        if (m && f.name && !Nc(v)) {
          o(f.name);
        }
      }
      if (Ih(v)) {
        l(v);
      }
      if (g.children) {
        const S = g.children;
        for (let C = 0; C < S.length; C++) {
          i(S[C], v, d && d.children[C]);
        }
      }
      d = d || v;
    }
    if (p) {
      return () => {
        o(p);
      };
    } else {
      return is;
    }
  }
  function o(f) {
    if (Oh(f)) {
      const h = r.get(f);
      if (h) {
        r.delete(f);
        n.splice(n.indexOf(h), 1);
        h.children.forEach(o);
        h.alias.forEach(o);
      }
    } else {
      const h = n.indexOf(f);
      if (h > -1) {
        n.splice(h, 1);
        if (f.record.name) {
          r.delete(f.record.name);
        }
        f.children.forEach(o);
        f.alias.forEach(o);
      }
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const h = M0(f, n);
    n.splice(h, 0, f);
    if (f.record.name && !Nc(f)) {
      r.set(f.record.name, f);
    }
  }
  function u(f, h) {
    let d;
    let m = {};
    let g;
    let w;
    if ("name" in f && f.name) {
      d = r.get(f.name);
      if (!d) {
        throw Br(1, {
          location: f
        });
      }
      w = d.record.name;
      m = ce(Bc(h.params, d.keys.filter(p => !p.optional).concat(d.parent ? d.parent.keys.filter(p => p.optional) : []).map(p => p.name)), f.params && Bc(f.params, d.keys.map(p => p.name)));
      g = d.stringify(m);
    } else if (f.path != null) {
      g = f.path;
      d = n.find(p => p.re.test(g));
      if (d) {
        m = d.parse(g);
        w = d.record.name;
      }
    } else {
      d = h.name ? r.get(h.name) : n.find(p => p.re.test(h.path));
      if (!d) {
        throw Br(1, {
          location: f,
          currentLocation: h
        });
      }
      w = d.record.name;
      m = ce({}, h.params, f.params);
      g = d.stringify(m);
    }
    const k = [];
    let v = d;
    while (v) {
      k.unshift(v.record);
      v = v.parent;
    }
    return {
      name: w,
      path: g,
      params: m,
      matched: k,
      meta: A0(k)
    };
  }
  t.forEach(f => i(f));
  function c() {
    n.length = 0;
    r.clear();
  }
  return {
    addRoute: i,
    resolve: u,
    removeRoute: o,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: s
  };
}
function Bc(t, e) {
  const n = {};
  for (const r of e) {
    if (r in t) {
      n[r] = t[r];
    }
  }
  return n;
}
function Dc(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: O0(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && {
      default: t.component
    }
  };
  Object.defineProperty(e, "mods", {
    value: {}
  });
  return e;
}
function O0(t) {
  const e = {};
  const n = t.props || false;
  if ("component" in t) {
    e.default = n;
  } else {
    for (const r in t.components) {
      e[r] = typeof n == "object" ? n[r] : n;
    }
  }
  return e;
}
function Nc(t) {
  while (t) {
    if (t.record.aliasOf) {
      return true;
    }
    t = t.parent;
  }
  return false;
}
function A0(t) {
  return t.reduce((e, n) => ce(e, n.meta), {});
}
function $c(t, e) {
  const n = {};
  for (const r in t) {
    n[r] = r in e ? e[r] : t[r];
  }
  return n;
}
function M0(t, e) {
  let n = 0;
  let r = e.length;
  while (n !== r) {
    const i = n + r >> 1;
    if (Mh(t, e[i]) < 0) {
      r = i;
    } else {
      n = i + 1;
    }
  }
  const s = I0(t);
  if (s) {
    r = e.lastIndexOf(s, r - 1);
  }
  return r;
}
function I0(t) {
  let e = t;
  while (e = e.parent) {
    if (Ih(e) && Mh(t, e) === 0) {
      return e;
    }
  }
}
function Ih({
  record: t
}) {
  return !!t.name || !!t.components && !!Object.keys(t.components).length || !!t.redirect;
}
function L0(t) {
  const e = {};
  if (t === "" || t === "?") {
    return e;
  }
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(kh, " ");
    const o = i.indexOf("=");
    const a = _s(o < 0 ? i : i.slice(0, o));
    const l = o < 0 ? null : _s(i.slice(o + 1));
    if (a in e) {
      let u = e[a];
      if (!$t(u)) {
        u = e[a] = [u];
      }
      u.push(l);
    } else {
      e[a] = l;
    }
  }
  return e;
}
function Hc(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    n = e0(n);
    if (r == null) {
      if (r !== undefined) {
        e += (e.length ? "&" : "") + n;
      }
      continue;
    }
    ($t(r) ? r.map(i => i && ra(i)) : [r && ra(r)]).forEach(i => {
      if (i !== undefined) {
        e += (e.length ? "&" : "") + n;
        if (i != null) {
          e += "=" + i;
        }
      }
    });
  }
  return e;
}
function B0(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    if (r !== undefined) {
      e[n] = $t(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r;
    }
  }
  return e;
}
const D0 = Symbol("");
const Fc = Symbol("");
const cl = Symbol("");
const ul = Symbol("");
const ia = Symbol("");
function Wr() {
  let t = [];
  function e(r) {
    t.push(r);
    return () => {
      const s = t.indexOf(r);
      if (s > -1) {
        t.splice(s, 1);
      }
    };
  }
  function n() {
    t = [];
  }
  return {
    add: e,
    list: () => t.slice(),
    reset: n
  };
}
function bn(t, e, n, r, s, i = o => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () => new Promise((a, l) => {
    const u = h => {
      if (h === false) {
        l(Br(4, {
          from: n,
          to: e
        }));
      } else if (h instanceof Error) {
        l(h);
      } else if (v0(h)) {
        l(Br(2, {
          from: e,
          to: h
        }));
      } else {
        if (o && r.enterCallbacks[s] === o && typeof h == "function") {
          o.push(h);
        }
        a();
      }
    };
    const c = i(() => t.call(r && r.instances[s], e, n, u));
    let f = Promise.resolve(c);
    if (t.length < 3) {
      f = f.then(u);
    }
    f.catch(h => l(h));
  });
}
function uo(t, e, n, r, s = i => i()) {
  const i = [];
  for (const o of t) {
    for (const a in o.components) {
      let l = o.components[a];
      if (e === "beforeRouteEnter" || !!o.instances[a]) {
        if (wh(l)) {
          const c = (l.__vccOpts || l)[e];
          if (c) {
            i.push(bn(c, n, r, o, a, s));
          }
        } else {
          let u = l();
          i.push(() => u.then(c => {
            if (!c) {
              throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
            }
            const f = Vy(c) ? c.default : c;
            o.mods[a] = c;
            o.components[a] = f;
            const d = (f.__vccOpts || f)[e];
            return d && bn(d, n, r, o, a, s)();
          }));
        }
      }
    }
  }
  return i;
}
function jc(t) {
  const e = De(cl);
  const n = De(ul);
  const r = gt(() => {
    const l = fe(t.to);
    return e.resolve(l);
  });
  const s = gt(() => {
    const {
      matched: l
    } = r.value;
    const {
      length: u
    } = l;
    const c = l[u - 1];
    const f = n.matched;
    if (!c || !f.length) {
      return -1;
    }
    const h = f.findIndex(Lr.bind(null, c));
    if (h > -1) {
      return h;
    }
    const d = Uc(l[u - 2]);
    if (u > 1 && Uc(c) === d && f[f.length - 1].path !== d) {
      return f.findIndex(Lr.bind(null, l[u - 2]));
    } else {
      return h;
    }
  });
  const i = gt(() => s.value > -1 && F0(n.params, r.value.params));
  const o = gt(() => s.value > -1 && s.value === n.matched.length - 1 && Eh(n.params, r.value.params));
  function a(l = {}) {
    if (H0(l)) {
      return e[fe(t.replace) ? "replace" : "push"](fe(t.to)).catch(is);
    } else {
      return Promise.resolve();
    }
  }
  return {
    route: r,
    href: gt(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: a
  };
}
const N0 = Xt({
  name: "RouterLink",
  compatConfig: {
    MODE: 3
  },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: jc,
  setup(t, {
    slots: e
  }) {
    const n = Yt(jc(t));
    const {
      options: r
    } = De(cl);
    const s = gt(() => ({
      [Vc(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [Vc(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = e.default && e.default(n);
      if (t.custom) {
        return i;
      } else {
        return ze("a", {
          "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, i);
      }
    };
  }
});
const $0 = N0;
function H0(t) {
  if (!t.metaKey && !t.altKey && !t.ctrlKey && !t.shiftKey && !t.defaultPrevented && (t.button === undefined || t.button === 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) {
        return;
      }
    }
    if (t.preventDefault) {
      t.preventDefault();
    }
    return true;
  }
}
function F0(t, e) {
  for (const n in e) {
    const r = e[n];
    const s = t[n];
    if (typeof r == "string") {
      if (r !== s) {
        return false;
      }
    } else if (!$t(s) || s.length !== r.length || r.some((i, o) => i !== s[o])) {
      return false;
    }
  }
  return true;
}
function Uc(t) {
  if (t) {
    if (t.aliasOf) {
      return t.aliasOf.path;
    } else {
      return t.path;
    }
  } else {
    return "";
  }
}
const Vc = (t, e, n) => t ?? e ?? n;
const j0 = Xt({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: {
    MODE: 3
  },
  setup(t, {
    attrs: e,
    slots: n
  }) {
    const r = De(ia);
    const s = gt(() => t.route || r.value);
    const i = De(Fc, 0);
    const o = gt(() => {
      let u = fe(i);
      const {
        matched: c
      } = s.value;
      let f;
      while ((f = c[u]) && !f.components) {
        u++;
      }
      return u;
    });
    const a = gt(() => s.value.matched[o.value]);
    Jn(Fc, gt(() => o.value + 1));
    Jn(D0, a);
    Jn(ia, s);
    const l = We();
    En(() => [l.value, a.value, t.name], ([u, c, f], [h, d, m]) => {
      if (c) {
        c.instances[f] = u;
        if (d && d !== c && u && u === h) {
          if (!c.leaveGuards.size) {
            c.leaveGuards = d.leaveGuards;
          }
          if (!c.updateGuards.size) {
            c.updateGuards = d.updateGuards;
          }
        }
      }
      if (u && c && (!d || !Lr(c, d) || !h)) {
        (c.enterCallbacks[f] || []).forEach(g => g(u));
      }
    }, {
      flush: "post"
    });
    return () => {
      const u = s.value;
      const c = t.name;
      const f = a.value;
      const h = f && f.components[c];
      if (!h) {
        return zc(n.default, {
          Component: h,
          route: u
        });
      }
      const d = f.props[c];
      const m = d ? d === true ? u.params : typeof d == "function" ? d(u) : d : null;
      const w = ze(h, ce({}, m, e, {
        onVnodeUnmounted: k => {
          if (k.component.isUnmounted) {
            f.instances[c] = null;
          }
        },
        ref: l
      }));
      return zc(n.default, {
        Component: w,
        route: u
      }) || w;
    };
  }
});
function zc(t, e) {
  if (!t) {
    return null;
  }
  const n = t(e);
  if (n.length === 1) {
    return n[0];
  } else {
    return n;
  }
}
const Lh = j0;
function U0(t) {
  const e = R0(t.routes, t);
  const n = t.parseQuery || L0;
  const r = t.stringifyQuery || Hc;
  const s = t.history;
  const i = Wr();
  const o = Wr();
  const a = Wr();
  const l = Or(It);
  let u = It;
  if (gr && t.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const c = lo.bind(null, M => "" + M);
  const f = lo.bind(null, n0);
  const h = lo.bind(null, _s);
  function d(M, G) {
    let V;
    let q;
    if (Oh(M)) {
      V = e.getRecordMatcher(M);
      q = G;
    } else {
      q = M;
    }
    return e.addRoute(q, V);
  }
  function m(M) {
    const G = e.getRecordMatcher(M);
    if (G) {
      e.removeRoute(G);
    }
  }
  function g() {
    return e.getRoutes().map(M => M.record);
  }
  function w(M) {
    return !!e.getRecordMatcher(M);
  }
  function k(M, G) {
    G = ce({}, G || l.value);
    if (typeof M == "string") {
      const T = co(n, M, G.path);
      const P = e.resolve({
        path: T.path
      }, G);
      const I = s.createHref(T.fullPath);
      return ce(T, P, {
        params: h(P.params),
        hash: _s(T.hash),
        redirectedFrom: undefined,
        href: I
      });
    }
    let V;
    if (M.path != null) {
      V = ce({}, M, {
        path: co(n, M.path, G.path).path
      });
    } else {
      const T = ce({}, M.params);
      for (const P in T) {
        if (T[P] == null) {
          delete T[P];
        }
      }
      V = ce({}, M, {
        params: f(T)
      });
      G.params = f(G.params);
    }
    const q = e.resolve(V, G);
    const oe = M.hash || "";
    q.params = c(h(q.params));
    const ye = i0(r, ce({}, M, {
      hash: Zy(oe),
      path: q.path
    }));
    const b = s.createHref(ye);
    return ce({
      fullPath: ye,
      hash: oe,
      query: r === Hc ? B0(M.query) : M.query || {}
    }, q, {
      redirectedFrom: undefined,
      href: b
    });
  }
  function v(M) {
    if (typeof M == "string") {
      return co(n, M, l.value.path);
    } else {
      return ce({}, M);
    }
  }
  function p(M, G) {
    if (u !== M) {
      return Br(8, {
        from: G,
        to: M
      });
    }
  }
  function _(M) {
    return C(M);
  }
  function y(M) {
    return _(ce(v(M), {
      replace: true
    }));
  }
  function S(M) {
    const G = M.matched[M.matched.length - 1];
    if (G && G.redirect) {
      const {
        redirect: V
      } = G;
      let q = typeof V == "function" ? V(M) : V;
      if (typeof q == "string") {
        q = q.includes("?") || q.includes("#") ? q = v(q) : {
          path: q
        };
        q.params = {};
      }
      return ce({
        query: M.query,
        hash: M.hash,
        params: q.path != null ? {} : M.params
      }, q);
    }
  }
  function C(M, G) {
    const V = u = k(M);
    const q = l.value;
    const oe = M.state;
    const ye = M.force;
    const b = M.replace === true;
    const T = S(V);
    if (T) {
      return C(ce(v(T), {
        state: typeof T == "object" ? ce({}, oe, T.state) : oe,
        force: ye,
        replace: b
      }), G || V);
    }
    const P = V;
    P.redirectedFrom = G;
    let I;
    if (!ye && o0(r, q, V)) {
      I = Br(16, {
        to: P,
        from: q
      });
      Ne(q, q, true, false);
    }
    return (I ? Promise.resolve(I) : R(P, q)).catch(A => Zt(A) ? Zt(A, 2) ? A : et(A) : z(A, P, q)).then(A => {
      if (A) {
        if (Zt(A, 2)) {
          return C(ce({
            replace: b
          }, v(A.to), {
            state: typeof A.to == "object" ? ce({}, oe, A.to.state) : oe,
            force: ye
          }), G || P);
        }
      } else {
        A = O(P, q, true, b, oe);
      }
      D(P, q, A);
      return A;
    });
  }
  function E(M, G) {
    const V = p(M, G);
    if (V) {
      return Promise.reject(V);
    } else {
      return Promise.resolve();
    }
  }
  function x(M) {
    const G = $e.values().next().value;
    if (G && typeof G.runWithContext == "function") {
      return G.runWithContext(M);
    } else {
      return M();
    }
  }
  function R(M, G) {
    let V;
    const [q, oe, ye] = V0(M, G);
    V = uo(q.reverse(), "beforeRouteLeave", M, G);
    for (const T of q) {
      T.leaveGuards.forEach(P => {
        V.push(bn(P, M, G));
      });
    }
    const b = E.bind(null, M, G);
    V.push(b);
    return wt(V).then(() => {
      V = [];
      for (const T of i.list()) {
        V.push(bn(T, M, G));
      }
      V.push(b);
      return wt(V);
    }).then(() => {
      V = uo(oe, "beforeRouteUpdate", M, G);
      for (const T of oe) {
        T.updateGuards.forEach(P => {
          V.push(bn(P, M, G));
        });
      }
      V.push(b);
      return wt(V);
    }).then(() => {
      V = [];
      for (const T of ye) {
        if (T.beforeEnter) {
          if ($t(T.beforeEnter)) {
            for (const P of T.beforeEnter) {
              V.push(bn(P, M, G));
            }
          } else {
            V.push(bn(T.beforeEnter, M, G));
          }
        }
      }
      V.push(b);
      return wt(V);
    }).then(() => {
      M.matched.forEach(T => T.enterCallbacks = {});
      V = uo(ye, "beforeRouteEnter", M, G, x);
      V.push(b);
      return wt(V);
    }).then(() => {
      V = [];
      for (const T of o.list()) {
        V.push(bn(T, M, G));
      }
      V.push(b);
      return wt(V);
    }).catch(T => Zt(T, 8) ? T : Promise.reject(T));
  }
  function D(M, G, V) {
    a.list().forEach(q => x(() => q(M, G, V)));
  }
  function O(M, G, V, q, oe) {
    const ye = p(M, G);
    if (ye) {
      return ye;
    }
    const b = G === It;
    const T = gr ? history.state : {};
    if (V) {
      if (q || b) {
        s.replace(M.fullPath, ce({
          scroll: b && T && T.scroll
        }, oe));
      } else {
        s.push(M.fullPath, oe);
      }
    }
    l.value = M;
    Ne(M, G, V, b);
    et();
  }
  let $;
  function Y() {
    $ ||= s.listen((M, G, V) => {
      if (!vt.listening) {
        return;
      }
      const q = k(M);
      const oe = S(q);
      if (oe) {
        C(ce(oe, {
          replace: true
        }), q).catch(is);
        return;
      }
      u = q;
      const ye = l.value;
      if (gr) {
        p0(Oc(ye.fullPath, V.delta), Hi());
      }
      R(q, ye).catch(b => Zt(b, 12) ? b : Zt(b, 2) ? (C(b.to, q).then(T => {
        if (Zt(T, 20) && !V.delta && V.type === ys.pop) {
          s.go(-1, false);
        }
      }).catch(is), Promise.reject()) : (V.delta && s.go(-V.delta, false), z(b, q, ye))).then(b => {
        b = b || O(q, ye, false);
        if (b) {
          if (V.delta && !Zt(b, 8)) {
            s.go(-V.delta, false);
          } else if (V.type === ys.pop && Zt(b, 20)) {
            s.go(-1, false);
          }
        }
        D(q, ye, b);
      }).catch(is);
    });
  }
  let J = Wr();
  let N = Wr();
  let j;
  function z(M, G, V) {
    et(M);
    const q = N.list();
    if (q.length) {
      q.forEach(oe => oe(M, G, V));
    } else {
      console.error(M);
    }
    return Promise.reject(M);
  }
  function _e() {
    if (j && l.value !== It) {
      return Promise.resolve();
    } else {
      return new Promise((M, G) => {
        J.add([M, G]);
      });
    }
  }
  function et(M) {
    if (!j) {
      j = !M;
      Y();
      J.list().forEach(([G, V]) => M ? V(M) : G());
      J.reset();
    }
    return M;
  }
  function Ne(M, G, V, q) {
    const {
      scrollBehavior: oe
    } = t;
    if (!gr || !oe) {
      return Promise.resolve();
    }
    const ye = !V && g0(Oc(M.fullPath, 0)) || (q || !V) && history.state && history.state.scroll || null;
    return Ht().then(() => oe(M, G, ye)).then(b => b && d0(b)).catch(b => z(b, M, G));
  }
  const xe = M => s.go(M);
  let Jt;
  const $e = new Set();
  const vt = {
    currentRoute: l,
    listening: true,
    addRoute: d,
    removeRoute: m,
    clearRoutes: e.clearRoutes,
    hasRoute: w,
    getRoutes: g,
    resolve: k,
    options: t,
    push: _,
    replace: y,
    go: xe,
    back: () => xe(-1),
    forward: () => xe(1),
    beforeEach: i.add,
    beforeResolve: o.add,
    afterEach: a.add,
    onError: N.add,
    isReady: _e,
    install(M) {
      const G = this;
      M.component("RouterLink", $0);
      M.component("RouterView", Lh);
      M.config.globalProperties.$router = G;
      Object.defineProperty(M.config.globalProperties, "$route", {
        enumerable: true,
        get: () => fe(l)
      });
      if (gr && !Jt && l.value === It) {
        Jt = true;
        _(s.location).catch(oe => {});
      }
      const V = {};
      for (const oe in It) {
        Object.defineProperty(V, oe, {
          get: () => l.value[oe],
          enumerable: true
        });
      }
      M.provide(cl, G);
      M.provide(ul, sn(V));
      M.provide(ia, l);
      const q = M.unmount;
      $e.add(M);
      M.unmount = function () {
        $e.delete(M);
        if ($e.size < 1) {
          u = It;
          if ($) {
            $();
          }
          $ = null;
          l.value = It;
          Jt = false;
          j = false;
        }
        q();
      };
    }
  };
  function wt(M) {
    return M.reduce((G, V) => G.then(() => x(V)), Promise.resolve());
  }
  return vt;
}
function V0(t, e) {
  const n = [];
  const r = [];
  const s = [];
  const i = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < i; o++) {
    const a = e.matched[o];
    if (a) {
      if (t.matched.find(u => Lr(u, a))) {
        r.push(a);
      } else {
        n.push(a);
      }
    }
    const l = t.matched[o];
    if (l) {
      if (!e.matched.find(u => Lr(u, l))) {
        s.push(l);
      }
    }
  }
  return [n, r, s];
}
function z0(t) {
  return De(ul);
}
const W0 = (t, e) => e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
  var r;
  return ((r = t.params[n.slice(1)]) == null ? undefined : r.toString()) || "";
});
const oa = (t, e) => {
  const n = t.route.matched.find(s => {
    var i;
    return ((i = s.components) == null ? undefined : i.default) === t.Component.type;
  });
  const r = e ?? (n == null ? undefined : n.meta.key) ?? (n && W0(t.route, n));
  if (typeof r == "function") {
    return r(t.route);
  } else {
    return r;
  }
};
const G0 = (t, e) => ({
  default: () => t ? ze(Up, t === true ? {} : t, e) : e
});
function fl(t) {
  if (Array.isArray(t)) {
    return t;
  } else {
    return [t];
  }
}
const q0 = "modulepreload";
const K0 = function (t, e) {
  return new URL(t, e).href;
};
const Wc = {};
const Lt = function (e, n, r) {
  let s = Promise.resolve();
  if (n && n.length > 0) {
    const o = document.getElementsByTagName("link");
    const a = document.querySelector("meta[property=csp-nonce]");
    const l = (a == null ? undefined : a.nonce) || (a == null ? undefined : a.getAttribute("nonce"));
    s = Promise.allSettled(n.map(u => {
      u = K0(u, r);
      if (u in Wc) {
        return;
      }
      Wc[u] = true;
      const c = u.endsWith(".css");
      const f = c ? "[rel=\"stylesheet\"]" : "";
      if (r) {
        for (let m = o.length - 1; m >= 0; m--) {
          const g = o[m];
          if (g.href === u && (!c || g.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${u}"]${f}`)) {
        return;
      }
      const d = document.createElement("link");
      d.rel = c ? "stylesheet" : q0;
      if (!c) {
        d.as = "script";
      }
      d.crossOrigin = "";
      d.href = u;
      if (l) {
        d.setAttribute("nonce", l);
      }
      document.head.appendChild(d);
      if (c) {
        return new Promise((m, g) => {
          d.addEventListener("load", m);
          d.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${u}`)));
        });
      }
    }));
  }
  function i(o) {
    const a = new Event("vite:preloadError", {
      cancelable: true
    });
    a.payload = o;
    window.dispatchEvent(a);
    if (!a.defaultPrevented) {
      throw o;
    }
  }
  return s.then(o => {
    for (const a of o || []) {
      if (a.status === "rejected") {
        i(a.reason);
      }
    }
    return e().catch(i);
  });
};
function tn(t) {
  if (t === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return t;
}
function Bh(t, e) {
  t.prototype = Object.create(e.prototype);
  t.prototype.constructor = t;
  t.__proto__ = e;
} /*!
  * GSAP 3.12.5
  * https://gsap.com
  *
  * @license Copyright 2008-2024, GreenSock. All rights reserved.
  * Subject to the terms at https://gsap.com/standard-license or for
  * Club GSAP members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
  */
var yt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
};
var Dr = {
  duration: 0.5,
  overwrite: false,
  delay: 0
};
var hl;
var Ge;
var be;
var Ct = 100000000;
var ge = 1 / Ct;
var aa = Math.PI * 2;
var Y0 = aa / 4;
var X0 = 0;
var Dh = Math.sqrt;
var J0 = Math.cos;
var Q0 = Math.sin;
function Ie(e) {
  return typeof e == "string";
}
function Se(e) {
  return typeof e == "function";
}
function ln(e) {
  return typeof e == "number";
}
function dl(e) {
  return typeof e === "undefined";
}
function Kt(e) {
  return typeof e == "object";
}
function st(e) {
  return e !== false;
}
function pl() {
  return typeof window !== "undefined";
}
function Ws(e) {
  return Se(e) || Ie(e);
}
var Nh = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {};
var qe = Array.isArray;
var la = /(?:-?\.?\d|\.)+/gi;
var $h = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var br = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var fo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var Hh = /[+-]=-?[.\d]+/;
var Fh = /[^,'"\[\]\s]+/gi;
var Z0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var we;
var Vt;
var ca;
var gl;
var bt = {};
var bi = {};
var jh;
function Uh(e) {
  return (bi = ir(e, bt)) && lt;
}
function ml(e, n) {
  return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()");
}
function bs(e, n) {
  return !n && console.warn(e);
}
function Vh(e, n) {
  return e && (bt[e] = n) && bi && (bi[e] = n) || bt;
}
function vs() {
  return 0;
}
var eb = {
  suppressEvents: true,
  isStart: true,
  kill: false
};
var Zs = {
  suppressEvents: true,
  kill: false
};
var tb = {
  suppressEvents: true
};
var _l = {};
var Pn = [];
var ua = {};
var zh;
var dt = {};
var ho = {};
var Gc = 30;
var ei = [];
var yl = "";
function bl(e) {
  var n = e[0];
  var r;
  var s;
  if (!Kt(n) && !Se(n)) {
    e = [e];
  }
  if (!(r = (n._gsap || {}).harness)) {
    for (s = ei.length; s-- && !ei[s].targetTest(n););
    r = ei[s];
  }
  for (s = e.length; s--;) {
    if (!e[s] || !(e[s]._gsap ||= new pd(e[s], r))) {
      e.splice(s, 1);
    }
  }
  return e;
}
function Zn(e) {
  return e._gsap || bl(Et(e))[0]._gsap;
}
function Wh(e, n, r) {
  if ((r = e[n]) && Se(r)) {
    return e[n]();
  } else {
    return dl(r) && e.getAttribute && e.getAttribute(n) || r;
  }
}
function it(e, n) {
  return (e = e.split(",")).forEach(n) || e;
}
function Ee(e) {
  return Math.round(e * 100000) / 100000 || 0;
}
function Me(e) {
  return Math.round(e * 10000000) / 10000000 || 0;
}
function Er(e, n) {
  var r = n.charAt(0);
  var s = parseFloat(n.substr(2));
  e = parseFloat(e);
  if (r === "+") {
    return e + s;
  } else if (r === "-") {
    return e - s;
  } else if (r === "*") {
    return e * s;
  } else {
    return e / s;
  }
}
function nb(e, n) {
  for (var r = n.length, s = 0; e.indexOf(n[s]) < 0 && ++s < r;);
  return s < r;
}
function vi() {
  var e = Pn.length;
  var n = Pn.slice(0);
  var r;
  var s;
  ua = {};
  Pn.length = 0;
  r = 0;
  for (; r < e; r++) {
    s = n[r];
    if (s && s._lazy) {
      s.render(s._lazy[0], s._lazy[1], true)._lazy = 0;
    }
  }
}
function Gh(e, n, r, s) {
  if (Pn.length && !Ge) {
    vi();
  }
  e.render(n, r, Ge && n < 0 && (e._initted || e._startAt));
  if (Pn.length && !Ge) {
    vi();
  }
}
function qh(e) {
  var n = parseFloat(e);
  if ((n || n === 0) && (e + "").match(Fh).length < 2) {
    return n;
  } else if (Ie(e)) {
    return e.trim();
  } else {
    return e;
  }
}
function Kh(e) {
  return e;
}
function At(e, n) {
  for (var r in n) {
    if (!(r in e)) {
      e[r] = n[r];
    }
  }
  return e;
}
function rb(e) {
  return function (n, r) {
    for (var s in r) {
      if (!(s in n) && (s !== "duration" || !e) && s !== "ease") {
        n[s] = r[s];
      }
    }
  };
}
function ir(e, n) {
  for (var r in n) {
    e[r] = n[r];
  }
  return e;
}
var qc = function t(e, n) {
  for (var r in n) {
    if (r !== "__proto__" && r !== "constructor" && r !== "prototype") {
      e[r] = Kt(n[r]) ? t(e[r] ||= {}, n[r]) : n[r];
    }
  }
  return e;
};
function wi(e, n) {
  var r = {};
  var s;
  for (s in e) {
    if (!(s in n)) {
      r[s] = e[s];
    }
  }
  return r;
}
function as(e) {
  var n = e.parent || we;
  var r = e.keyframes ? rb(qe(e.keyframes)) : At;
  if (st(e.inherit)) {
    while (n) {
      r(e, n.vars.defaults);
      n = n.parent || n._dp;
    }
  }
  return e;
}
function sb(e, n) {
  for (var r = e.length, s = r === n.length; s && r-- && e[r] === n[r];);
  return r < 0;
}
function Yh(e, n, r, s, i) {
  var o = e[s];
  var a;
  if (i) {
    for (a = n[i]; o && o[i] > a;) {
      o = o._prev;
    }
  }
  if (o) {
    n._next = o._next;
    o._next = n;
  } else {
    n._next = e[r];
    e[r] = n;
  }
  if (n._next) {
    n._next._prev = n;
  } else {
    e[s] = n;
  }
  n._prev = o;
  n.parent = n._dp = e;
  return n;
}
function Fi(e, n, r = "_first", s = "_last") {
  var i = n._prev;
  var o = n._next;
  if (i) {
    i._next = o;
  } else if (e[r] === n) {
    e[r] = o;
  }
  if (o) {
    o._prev = i;
  } else if (e[s] === n) {
    e[s] = i;
  }
  n._next = n._prev = n.parent = null;
}
function An(e, n) {
  if (e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove) {
    e.parent.remove(e);
  }
  e._act = 0;
}
function er(e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0)) {
    for (var r = e; r;) {
      r._dirty = 1;
      r = r.parent;
    }
  }
  return e;
}
function ib(e) {
  for (var n = e.parent; n && n.parent;) {
    n._dirty = 1;
    n.totalDuration();
    n = n.parent;
  }
  return e;
}
function fa(e, n, r, s) {
  return e._startAt && (Ge ? e._startAt.revert(Zs) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, true, s));
}
var ob = function t(e) {
  return !e || e._ts && t(e.parent);
};
function Kc(e) {
  if (e._repeat) {
    return Nr(e._tTime, e = e.duration() + e._rDelay) * e;
  } else {
    return 0;
  }
}
function Nr(e, n) {
  var r = Math.floor(e /= n);
  if (e && r === e) {
    return r - 1;
  } else {
    return r;
  }
}
function Ti(e, n) {
  return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
}
function ji(e) {
  return e._end = Me(e._start + (e._tDur / Math.abs(e._ts || e._rts || ge) || 0));
}
function Ui(e, n) {
  var r = e._dp;
  if (r && r.smoothChildTiming && e._ts) {
    e._start = Me(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts));
    ji(e);
    if (!r._dirty) {
      er(r, e);
    }
  }
  return e;
}
function Xh(e, n) {
  var r;
  if (n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) {
    r = Ti(e.rawTime(), n);
    if (!n._dur || Is(0, n.totalDuration(), r) - n._tTime > ge) {
      n.render(r, true);
    }
  }
  if (er(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration()) {
      for (r = e; r._dp;) {
        if (r.rawTime() >= 0) {
          r.totalTime(r._tTime);
        }
        r = r._dp;
      }
    }
    e._zTime = -ge;
  }
}
function zt(e, n, r, s) {
  if (n.parent) {
    An(n);
  }
  n._start = Me((ln(r) ? r : r || e !== we ? xt(e, r, n) : e._time) + n._delay);
  n._end = Me(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0));
  Yh(e, n, "_first", "_last", e._sort ? "_start" : 0);
  if (!ha(n)) {
    e._recent = n;
  }
  if (!s) {
    Xh(e, n);
  }
  if (e._ts < 0) {
    Ui(e, e._tTime);
  }
  return e;
}
function Jh(e, n) {
  return (bt.ScrollTrigger || ml("scrollTrigger", n)) && bt.ScrollTrigger.create(n, e);
}
function Qh(e, n, r, s, i) {
  wl(e, n, i);
  if (!e._initted) {
    return 1;
  }
  if (!r && e._pt && !Ge && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && zh !== mt.frame) {
    Pn.push(e);
    e._lazy = [i, s];
    return 1;
  }
}
var ab = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
};
function ha(e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart";
}
function lb(e, n, r, s) {
  var i = e.ratio;
  var o = n < 0 || !n && (!e._start && ab(e) && (!!e._initted || !ha(e)) || (e._ts < 0 || e._dp._ts < 0) && !ha(e)) ? 0 : 1;
  var a = e._rDelay;
  var l = 0;
  var u;
  var c;
  var f;
  if (a && e._repeat) {
    l = Is(0, e._tDur, n);
    c = Nr(l, a);
    if (e._yoyo && c & 1) {
      o = 1 - o;
    }
    if (c !== Nr(e._tTime, a)) {
      i = 1 - o;
      if (e.vars.repeatRefresh && e._initted) {
        e.invalidate();
      }
    }
  }
  if (o !== i || Ge || s || e._zTime === ge || !n && e._zTime) {
    if (!e._initted && Qh(e, n, s, r, l)) {
      return;
    }
    f = e._zTime;
    e._zTime = n || (r ? ge : 0);
    r ||= n && !f;
    e.ratio = o;
    if (e._from) {
      o = 1 - o;
    }
    e._time = 0;
    e._tTime = l;
    u = e._pt;
    while (u) {
      u.r(o, u.d);
      u = u._next;
    }
    if (n < 0) {
      fa(e, n, r, true);
    }
    if (e._onUpdate && !r) {
      _t(e, "onUpdate");
    }
    if (l && e._repeat && !r && e.parent) {
      _t(e, "onRepeat");
    }
    if ((n >= e._tDur || n < 0) && e.ratio === o) {
      if (o) {
        An(e, 1);
      }
      if (!r && !Ge) {
        _t(e, o ? "onComplete" : "onReverseComplete", true);
        if (e._prom) {
          e._prom();
        }
      }
    }
  } else {
    e._zTime ||= n;
  }
}
function cb(e, n, r) {
  var s;
  if (r > n) {
    for (s = e._first; s && s._start <= r;) {
      if (s.data === "isPause" && s._start > n) {
        return s;
      }
      s = s._next;
    }
  } else {
    for (s = e._last; s && s._start >= r;) {
      if (s.data === "isPause" && s._start < n) {
        return s;
      }
      s = s._prev;
    }
  }
}
function $r(e, n, r, s) {
  var i = e._repeat;
  var o = Me(n) || 0;
  var a = e._tTime / e._tDur;
  if (a && !s) {
    e._time *= o / e._dur;
  }
  e._dur = o;
  e._tDur = i ? i < 0 ? 10000000000 : Me(o * (i + 1) + e._rDelay * i) : o;
  if (a > 0 && !s) {
    Ui(e, e._tTime = e._tDur * a);
  }
  if (e.parent) {
    ji(e);
  }
  if (!r) {
    er(e.parent, e);
  }
  return e;
}
function Yc(e) {
  if (e instanceof Qe) {
    return er(e);
  } else {
    return $r(e, e._dur);
  }
}
var ub = {
  _start: 0,
  endTime: vs,
  totalDuration: vs
};
var xt = function t(e, n, r) {
  var s = e.labels;
  var i = e._recent || ub;
  var o = e.duration() >= Ct ? i.endTime(false) : e._dur;
  var a;
  var l;
  var u;
  if (Ie(n) && (isNaN(n) || n in s)) {
    l = n.charAt(0);
    u = n.substr(-1) === "%";
    a = n.indexOf("=");
    if (l === "<" || l === ">") {
      if (a >= 0) {
        n = n.replace(/=/, "");
      }
      return (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? i : r).totalDuration() / 100 : 1);
    } else if (a < 0) {
      if (!(n in s)) {
        s[n] = o;
      }
      return s[n];
    } else {
      l = parseFloat(n.charAt(a - 1) + n.substr(a + 1));
      if (u && r) {
        l = l / 100 * (qe(r) ? r[0] : r).totalDuration();
      }
      if (a > 1) {
        return t(e, n.substr(0, a - 1), r) + l;
      } else {
        return o + l;
      }
    }
  } else if (n == null) {
    return o;
  } else {
    return +n;
  }
};
function ls(e, n, r) {
  var s = ln(n[1]);
  var i = (s ? 2 : 1) + (e < 2 ? 0 : 1);
  var o = n[i];
  var a;
  var l;
  if (s) {
    o.duration = n[1];
  }
  o.parent = r;
  if (e) {
    a = o;
    l = r;
    while (l && !("immediateRender" in a)) {
      a = l.vars.defaults || {};
      l = st(l.vars.inherit) && l.parent;
    }
    o.immediateRender = st(a.immediateRender);
    if (e < 2) {
      o.runBackwards = 1;
    } else {
      o.startAt = n[i - 1];
    }
  }
  return new Pe(n[0], o, n[i + 1]);
}
function Nn(e, n) {
  if (e || e === 0) {
    return n(e);
  } else {
    return n;
  }
}
function Is(e, n, r) {
  if (r < e) {
    return e;
  } else if (r > n) {
    return n;
  } else {
    return r;
  }
}
function Ve(e, n) {
  if (!Ie(e) || !(n = Z0.exec(e))) {
    return "";
  } else {
    return n[1];
  }
}
function fb(e, n, r) {
  return Nn(r, function (s) {
    return Is(e, n, s);
  });
}
var da = [].slice;
function Zh(e, n) {
  return e && Kt(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Kt(e[0])) && !e.nodeType && e !== Vt;
}
function hb(e, n, r = []) {
  return e.forEach(function (s) {
    var i;
    if (Ie(s) && !n || Zh(s, 1)) {
      return (i = r).push.apply(i, Et(s));
    } else {
      return r.push(s);
    }
  }) || r;
}
function Et(e, n, r) {
  if (be && !n && be.selector) {
    return be.selector(e);
  } else if (Ie(e) && !r && (ca || !Hr())) {
    return da.call((n || gl).querySelectorAll(e), 0);
  } else if (qe(e)) {
    return hb(e, r);
  } else if (Zh(e)) {
    return da.call(e, 0);
  } else if (e) {
    return [e];
  } else {
    return [];
  }
}
function pa(e) {
  e = Et(e)[0] || bs("Invalid scope") || {};
  return function (n) {
    var r = e.current || e.nativeElement || e;
    return Et(n, r.querySelectorAll ? r : r === e ? bs("Invalid scope") || gl.createElement("div") : e);
  };
}
function ed(e) {
  return e.sort(function () {
    return 0.5 - Math.random();
  });
}
function td(e) {
  if (Se(e)) {
    return e;
  }
  var n = Kt(e) ? e : {
    each: e
  };
  var r = tr(n.ease);
  var s = n.from || 0;
  var i = parseFloat(n.base) || 0;
  var o = {};
  var a = s > 0 && s < 1;
  var l = isNaN(s) || a;
  var u = n.axis;
  var c = s;
  var f = s;
  if (Ie(s)) {
    c = f = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[s] || 0;
  } else if (!a && l) {
    c = s[0];
    f = s[1];
  }
  return function (h, d, m) {
    var g = (m || n).length;
    var w = o[g];
    var k;
    var v;
    var p;
    var _;
    var y;
    var S;
    var C;
    var E;
    var x;
    if (!w) {
      x = n.grid === "auto" ? 0 : (n.grid || [1, Ct])[1];
      if (!x) {
        for (C = -Ct; C < (C = m[x++].getBoundingClientRect().left) && x < g;);
        if (x < g) {
          x--;
        }
      }
      w = o[g] = [];
      k = l ? Math.min(x, g) * c - 0.5 : s % x;
      v = x === Ct ? 0 : l ? g * f / x - 0.5 : s / x | 0;
      C = 0;
      E = Ct;
      S = 0;
      for (; S < g; S++) {
        p = S % x - k;
        _ = v - (S / x | 0);
        w[S] = y = u ? Math.abs(u === "y" ? _ : p) : Dh(p * p + _ * _);
        if (y > C) {
          C = y;
        }
        if (y < E) {
          E = y;
        }
      }
      if (s === "random") {
        ed(w);
      }
      w.max = C - E;
      w.min = E;
      w.v = g = (parseFloat(n.amount) || parseFloat(n.each) * (x > g ? g - 1 : u ? u === "y" ? g / x : x : Math.max(x, g / x)) || 0) * (s === "edges" ? -1 : 1);
      w.b = g < 0 ? i - g : i;
      w.u = Ve(n.amount || n.each) || 0;
      r = r && g < 0 ? fd(r) : r;
    }
    g = (w[h] - w.min) / w.max || 0;
    return Me(w.b + (r ? r(g) : g) * w.v) + w.u;
  };
}
function ga(e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function (r) {
    var s = Me(Math.round(parseFloat(r) / e) * e * n);
    return (s - s % 1) / n + (ln(r) ? 0 : Ve(r));
  };
}
function nd(e, n) {
  var r = qe(e);
  var s;
  var i;
  if (!r && Kt(e)) {
    s = r = e.radius || Ct;
    if (e.values) {
      e = Et(e.values);
      if (i = !ln(e[0])) {
        s *= s;
      }
    } else {
      e = ga(e.increment);
    }
  }
  return Nn(n, r ? Se(e) ? function (o) {
    i = e(o);
    if (Math.abs(i - o) <= s) {
      return i;
    } else {
      return o;
    }
  } : function (o) {
    var a = parseFloat(i ? o.x : o);
    var l = parseFloat(i ? o.y : 0);
    for (var u = Ct, c = 0, f = e.length, h, d; f--;) {
      if (i) {
        h = e[f].x - a;
        d = e[f].y - l;
        h = h * h + d * d;
      } else {
        h = Math.abs(e[f] - a);
      }
      if (h < u) {
        u = h;
        c = f;
      }
    }
    c = !s || u <= s ? e[c] : o;
    if (i || c === o || ln(o)) {
      return c;
    } else {
      return c + Ve(o);
    }
  } : ga(e));
}
function rd(e, n, r, s) {
  return Nn(qe(e) ? !n : r === true ? !!(r = 0) : !s, function () {
    if (qe(e)) {
      return e[~~(Math.random() * e.length)];
    } else {
      return (r = r || 0.00001) && (s = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) * r * s) / s;
    }
  });
}
function db() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
    n[r] = arguments[r];
  }
  return function (s) {
    return n.reduce(function (i, o) {
      return o(i);
    }, s);
  };
}
function pb(e, n) {
  return function (r) {
    return e(parseFloat(r)) + (n || Ve(r));
  };
}
function gb(e, n, r) {
  return id(e, n, 0, 1, r);
}
function sd(e, n, r) {
  return Nn(r, function (s) {
    return e[~~n(s)];
  });
}
var mb = function t(e, n, r) {
  var s = n - e;
  if (qe(e)) {
    return sd(e, t(0, e.length), n);
  } else {
    return Nn(r, function (i) {
      return (s + (i - e) % s) % s + e;
    });
  }
};
var _b = function t(e, n, r) {
  var s = n - e;
  var i = s * 2;
  if (qe(e)) {
    return sd(e, t(0, e.length - 1), n);
  } else {
    return Nn(r, function (o) {
      o = (i + (o - e) % i) % i || 0;
      return e + (o > s ? i - o : o);
    });
  }
};
function ws(e) {
  for (var n = 0, r = "", s, i, o, a; ~(s = e.indexOf("random(", n));) {
    o = e.indexOf(")", s);
    a = e.charAt(s + 7) === "[";
    i = e.substr(s + 7, o - s - 7).match(a ? Fh : la);
    r += e.substr(n, s - n) + rd(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 0.00001);
    n = o + 1;
  }
  return r + e.substr(n, e.length - n);
}
function id(e, n, r, s, i) {
  var o = n - e;
  var a = s - r;
  return Nn(i, function (l) {
    return r + ((l - e) / o * a || 0);
  });
}
var yb = function t(e, n, r, s) {
  var i = isNaN(e + n) ? 0 : function (d) {
    return (1 - d) * e + d * n;
  };
  if (!i) {
    var o = Ie(e);
    var a = {};
    var l;
    var u;
    var c;
    var f;
    var h;
    if (r === true && (s = 1)) {
      r = null;
    }
    if (o) {
      e = {
        p: e
      };
      n = {
        p: n
      };
    } else if (qe(e) && !qe(n)) {
      c = [];
      f = e.length;
      h = f - 2;
      u = 1;
      for (; u < f; u++) {
        c.push(t(e[u - 1], e[u]));
      }
      f--;
      i = function (m) {
        m *= f;
        var g = Math.min(h, ~~m);
        return c[g](m - g);
      };
      r = n;
    } else if (!s) {
      e = ir(qe(e) ? [] : {}, e);
    }
    if (!c) {
      for (l in n) {
        vl.call(a, e, l, "get", n[l]);
      }
      i = function (m) {
        return xl(m, a) || (o ? e.p : e);
      };
    }
  }
  return Nn(r, i);
};
function Xc(e, n, r) {
  var s = e.labels;
  var i = Ct;
  var o;
  var a;
  var l;
  for (o in s) {
    a = s[o] - n;
    if (a < 0 == !!r && a && i > (a = Math.abs(a))) {
      l = o;
      i = a;
    }
  }
  return l;
}
function _t(e, n, r) {
  var s = e.vars;
  var i = s[n];
  var o = be;
  var a = e._ctx;
  var l;
  var u;
  var c;
  if (i) {
    l = s[n + "Params"];
    u = s.callbackScope || e;
    if (r && Pn.length) {
      vi();
    }
    if (a) {
      be = a;
    }
    c = l ? i.apply(u, l) : i.call(u);
    be = o;
    return c;
  }
}
function Yr(e) {
  An(e);
  if (e.scrollTrigger) {
    e.scrollTrigger.kill(!!Ge);
  }
  if (e.progress() < 1) {
    _t(e, "onInterrupt");
  }
  return e;
}
var vr;
var od = [];
function ad(e) {
  if (e) {
    e = !e.name && e.default || e;
    if (pl() || e.headless) {
      var n = e.name;
      var r = Se(e);
      var s = n && !r && e.init ? function () {
        this._props = [];
      } : e;
      var i = {
        init: vs,
        render: xl,
        add: vl,
        kill: Lb,
        modifier: Ib,
        rawVars: 0
      };
      var o = {
        targetTest: 0,
        get: 0,
        getSetter: kl,
        aliases: {},
        register: 0
      };
      Hr();
      if (e !== s) {
        if (dt[n]) {
          return;
        }
        At(s, At(wi(e, i), o));
        ir(s.prototype, ir(i, wi(e, o)));
        dt[s.prop = n] = s;
        if (e.targetTest) {
          ei.push(s);
          _l[n] = 1;
        }
        n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin";
      }
      Vh(n, s);
      if (e.register) {
        e.register(lt, s, ot);
      }
    } else {
      od.push(e);
    }
  }
}
var ue = 255;
var Xr = {
  aqua: [0, ue, ue],
  lime: [0, ue, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ue],
  navy: [0, 0, 128],
  white: [ue, ue, ue],
  olive: [128, 128, 0],
  yellow: [ue, ue, 0],
  orange: [ue, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ue, 0, 0],
  pink: [ue, 192, 203],
  cyan: [0, ue, ue],
  transparent: [ue, ue, ue, 0]
};
function po(e, n, r) {
  e += e < 0 ? 1 : e > 1 ? -1 : 0;
  return (e * 6 < 1 ? n + (r - n) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * ue + 0.5 | 0;
}
function ld(e, n, r) {
  var s = e ? ln(e) ? [e >> 16, e >> 8 & ue, e & ue] : 0 : Xr.black;
  var i;
  var o;
  var a;
  var l;
  var u;
  var c;
  var f;
  var h;
  var d;
  var m;
  if (!s) {
    if (e.substr(-1) === ",") {
      e = e.substr(0, e.length - 1);
    }
    if (Xr[e]) {
      s = Xr[e];
    } else if (e.charAt(0) === "#") {
      if (e.length < 6) {
        i = e.charAt(1);
        o = e.charAt(2);
        a = e.charAt(3);
        e = "#" + i + i + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "");
      }
      if (e.length === 9) {
        s = parseInt(e.substr(1, 6), 16);
        return [s >> 16, s >> 8 & ue, s & ue, parseInt(e.substr(7), 16) / 255];
      }
      e = parseInt(e.substr(1), 16);
      s = [e >> 16, e >> 8 & ue, e & ue];
    } else if (e.substr(0, 3) === "hsl") {
      s = m = e.match(la);
      if (!n) {
        l = +s[0] % 360 / 360;
        u = +s[1] / 100;
        c = +s[2] / 100;
        o = c <= 0.5 ? c * (u + 1) : c + u - c * u;
        i = c * 2 - o;
        if (s.length > 3) {
          s[3] *= 1;
        }
        s[0] = po(l + 1 / 3, i, o);
        s[1] = po(l, i, o);
        s[2] = po(l - 1 / 3, i, o);
      } else if (~e.indexOf("=")) {
        s = e.match($h);
        if (r && s.length < 4) {
          s[3] = 1;
        }
        return s;
      }
    } else {
      s = e.match(la) || Xr.transparent;
    }
    s = s.map(Number);
  }
  if (n && !m) {
    i = s[0] / ue;
    o = s[1] / ue;
    a = s[2] / ue;
    f = Math.max(i, o, a);
    h = Math.min(i, o, a);
    c = (f + h) / 2;
    if (f === h) {
      l = u = 0;
    } else {
      d = f - h;
      u = c > 0.5 ? d / (2 - f - h) : d / (f + h);
      l = f === i ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - i) / d + 2 : (i - o) / d + 4;
      l *= 60;
    }
    s[0] = ~~(l + 0.5);
    s[1] = ~~(u * 100 + 0.5);
    s[2] = ~~(c * 100 + 0.5);
  }
  if (r && s.length < 4) {
    s[3] = 1;
  }
  return s;
}
function cd(e) {
  var n = [];
  var r = [];
  var s = -1;
  e.split(Rn).forEach(function (i) {
    var o = i.match(br) || [];
    n.push.apply(n, o);
    r.push(s += o.length + 1);
  });
  n.c = r;
  return n;
}
function Jc(e, n, r) {
  var s = "";
  var i = (e + s).match(Rn);
  var o = n ? "hsla(" : "rgba(";
  var a = 0;
  var l;
  var u;
  var c;
  var f;
  if (!i) {
    return e;
  }
  i = i.map(function (h) {
    return (h = ld(h, n, 1)) && o + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  });
  if (r && (c = cd(e), l = r.c, l.join(s) !== c.c.join(s))) {
    u = e.replace(Rn, "1").split(br);
    f = u.length - 1;
    for (; a < f; a++) {
      s += u[a] + (~l.indexOf(a) ? i.shift() || o + "0,0,0,0)" : (c.length ? c : i.length ? i : r).shift());
    }
  }
  if (!u) {
    u = e.split(Rn);
    f = u.length - 1;
    for (; a < f; a++) {
      s += u[a] + i[a];
    }
  }
  return s + u[f];
}
var Rn = function () {
  var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
  var e;
  for (e in Xr) {
    t += "|" + e + "\\b";
  }
  return new RegExp(t + ")", "gi");
}();
var bb = /hsl[a]?\(/;
function ud(e) {
  var n = e.join(" ");
  var r;
  Rn.lastIndex = 0;
  if (Rn.test(n)) {
    r = bb.test(n);
    e[1] = Jc(e[1], r);
    e[0] = Jc(e[0], r, cd(e[1]));
    return true;
  }
}
var Ts;
var mt = function () {
  var t = Date.now;
  var e = 500;
  var n = 33;
  var r = t();
  var s = r;
  var i = 1000 / 240;
  var o = i;
  var a = [];
  var l;
  var u;
  var c;
  var f;
  var h;
  var d;
  var m = function g(w) {
    var k = t() - s;
    var v = w === true;
    var p;
    var _;
    var y;
    var S;
    if (k > e || k < 0) {
      r += k - n;
    }
    s += k;
    y = s - r;
    p = y - o;
    if (p > 0 || v) {
      S = ++f.frame;
      h = y - f.time * 1000;
      f.time = y = y / 1000;
      o += p + (p >= i ? 4 : i - p);
      _ = 1;
    }
    if (!v) {
      l = u(g);
    }
    if (_) {
      for (d = 0; d < a.length; d++) {
        a[d](y, h, S, w);
      }
    }
  };
  f = {
    time: 0,
    frame: 0,
    tick: function () {
      m(true);
    },
    deltaRatio: function (w) {
      return h / (1000 / (w || 60));
    },
    wake: function () {
      if (jh) {
        if (!ca && pl()) {
          Vt = ca = window;
          gl = Vt.document || {};
          bt.gsap = lt;
          (Vt.gsapVersions ||= []).push(lt.version);
          Uh(bi || Vt.GreenSockGlobals || !Vt.gsap && Vt || {});
          od.forEach(ad);
        }
        c = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        if (l) {
          f.sleep();
        }
        u = c || function (w) {
          return setTimeout(w, o - f.time * 1000 + 1 | 0);
        };
        Ts = 1;
        m(2);
      }
    },
    sleep: function () {
      (c ? cancelAnimationFrame : clearTimeout)(l);
      Ts = 0;
      u = vs;
    },
    lagSmoothing: function (w, k) {
      e = w || Infinity;
      n = Math.min(k || 33, e);
    },
    fps: function (w) {
      i = 1000 / (w || 240);
      o = f.time * 1000 + i;
    },
    add: function (w, k, v) {
      var p = k ? function (_, y, S, C) {
        w(_, y, S, C);
        f.remove(p);
      } : w;
      f.remove(w);
      a[v ? "unshift" : "push"](p);
      Hr();
      return p;
    },
    remove: function (w, k) {
      if (~(k = a.indexOf(w)) && a.splice(k, 1) && d >= k) {
        d--;
      }
    },
    _listeners: a
  };
  return f;
}();
function Hr() {
  return !Ts && mt.wake();
}
var te = {};
var vb = /^[\d.\-M][\d.\-,\s]/;
var wb = /["']/g;
function Tb(e) {
  var n = {};
  var r = e.substr(1, e.length - 3).split(":");
  var s = r[0];
  for (var i = 1, o = r.length, a, l, u; i < o; i++) {
    l = r[i];
    a = i !== o - 1 ? l.lastIndexOf(",") : l.length;
    u = l.substr(0, a);
    n[s] = isNaN(u) ? u.replace(wb, "").trim() : +u;
    s = l.substr(a + 1).trim();
  }
  return n;
}
function kb(e) {
  var n = e.indexOf("(") + 1;
  var r = e.indexOf(")");
  var s = e.indexOf("(", n);
  return e.substring(n, ~s && s < r ? e.indexOf(")", r + 1) : r);
}
function xb(e) {
  var n = (e + "").split("(");
  var r = te[n[0]];
  if (r && n.length > 1 && r.config) {
    return r.config.apply(null, ~e.indexOf("{") ? [Tb(n[1])] : kb(e).split(",").map(qh));
  } else if (te._CE && vb.test(e)) {
    return te._CE("", e);
  } else {
    return r;
  }
}
function fd(e) {
  return function (n) {
    return 1 - e(1 - n);
  };
}
var hd = function t(e, n) {
  for (var r = e._first, s; r;) {
    if (r instanceof Qe) {
      t(r, n);
    } else if (r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n) {
      if (r.timeline) {
        t(r.timeline, n);
      } else {
        s = r._ease;
        r._ease = r._yEase;
        r._yEase = s;
        r._yoyo = n;
      }
    }
    r = r._next;
  }
};
function tr(e, n) {
  return e && (Se(e) ? e : te[e] || xb(e)) || n;
}
function cr(e, n, r = function (l) {
  return 1 - n(1 - l);
}, s = function (l) {
  if (l < 0.5) {
    return n(l * 2) / 2;
  } else {
    return 1 - n((1 - l) * 2) / 2;
  }
}) {
  var i = {
    easeIn: n,
    easeOut: r,
    easeInOut: s
  };
  var o;
  it(e, function (a) {
    te[a] = bt[a] = i;
    te[o = a.toLowerCase()] = r;
    for (var l in i) {
      te[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = te[a + "." + l] = i[l];
    }
  });
  return i;
}
function dd(e) {
  return function (n) {
    if (n < 0.5) {
      return (1 - e(1 - n * 2)) / 2;
    } else {
      return 0.5 + e((n - 0.5) * 2) / 2;
    }
  };
}
var go = function t(e, n, r) {
  var s = n >= 1 ? n : 1;
  var i = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1);
  var o = i / aa * (Math.asin(1 / s) || 0);
  function a(c) {
    if (c === 1) {
      return 1;
    } else {
      return s * Math.pow(2, c * -10) * Q0((c - o) * i) + 1;
    }
  }
  var l = e === "out" ? a : e === "in" ? function (u) {
    return 1 - a(1 - u);
  } : dd(a);
  i = aa / i;
  l.config = function (u, c) {
    return t(e, u, c);
  };
  return l;
};
var mo = function t(e, n = 1.70158) {
  function r(o) {
    if (o) {
      return --o * o * ((n + 1) * o + n) + 1;
    } else {
      return 0;
    }
  }
  var s = e === "out" ? r : e === "in" ? function (i) {
    return 1 - r(1 - i);
  } : dd(r);
  s.config = function (i) {
    return t(e, i);
  };
  return s;
};
it("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  cr(t + ",Power" + (n - 1), e ? function (r) {
    return Math.pow(r, n);
  } : function (r) {
    return r;
  }, function (r) {
    return 1 - Math.pow(1 - r, n);
  }, function (r) {
    if (r < 0.5) {
      return Math.pow(r * 2, n) / 2;
    } else {
      return 1 - Math.pow((1 - r) * 2, n) / 2;
    }
  });
});
te.Linear.easeNone = te.none = te.Linear.easeIn;
cr("Elastic", go("in"), go("out"), go());
(function (t, e) {
  var n = 1 / e;
  var r = n * 2;
  var s = n * 2.5;
  function i(a) {
    if (a < n) {
      return t * a * a;
    } else if (a < r) {
      return t * Math.pow(a - 1.5 / e, 2) + 0.75;
    } else if (a < s) {
      return t * (a -= 2.25 / e) * a + 0.9375;
    } else {
      return t * Math.pow(a - 2.625 / e, 2) + 0.984375;
    }
  }
  cr("Bounce", function (o) {
    return 1 - i(1 - o);
  }, i);
})(7.5625, 2.75);
cr("Expo", function (t) {
  if (t) {
    return Math.pow(2, (t - 1) * 10);
  } else {
    return 0;
  }
});
cr("Circ", function (t) {
  return -(Dh(1 - t * t) - 1);
});
cr("Sine", function (t) {
  if (t === 1) {
    return 1;
  } else {
    return -J0(t * Y0) + 1;
  }
});
cr("Back", mo("in"), mo("out"), mo());
te.SteppedEase = te.steps = bt.SteppedEase = {
  config: function (e = 1, n) {
    var r = 1 / e;
    var s = e + (n ? 0 : 1);
    var i = n ? 1 : 0;
    var o = 1 - ge;
    return function (a) {
      return ((s * Is(0, o, a) | 0) + i) * r;
    };
  }
};
Dr.ease = te["quad.out"];
it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
  return yl += t + "," + t + "Params,";
});
function pd(e, n) {
  this.id = X0++;
  e._gsap = this;
  this.target = e;
  this.harness = n;
  this.get = n ? n.get : Wh;
  this.set = n ? n.getSetter : kl;
}
var ks = function () {
  function t(n) {
    this.vars = n;
    this._delay = +n.delay || 0;
    if (this._repeat = n.repeat === Infinity ? -2 : n.repeat || 0) {
      this._rDelay = n.repeatDelay || 0;
      this._yoyo = !!n.yoyo || !!n.yoyoEase;
    }
    this._ts = 1;
    $r(this, +n.duration, 1, 1);
    this.data = n.data;
    if (be) {
      this._ctx = be;
      be.data.push(this);
    }
    if (!Ts) {
      mt.wake();
    }
  }
  var e = t.prototype;
  e.delay = function (r) {
    if (r || r === 0) {
      if (this.parent && this.parent.smoothChildTiming) {
        this.startTime(this._start + r - this._delay);
      }
      this._delay = r;
      return this;
    } else {
      return this._delay;
    }
  };
  e.duration = function (r) {
    if (arguments.length) {
      return this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r);
    } else {
      return this.totalDuration() && this._dur;
    }
  };
  e.totalDuration = function (r) {
    if (arguments.length) {
      this._dirty = 0;
      return $r(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1));
    } else {
      return this._tDur;
    }
  };
  e.totalTime = function (r, s) {
    Hr();
    if (!arguments.length) {
      return this._tTime;
    }
    var i = this._dp;
    if (i && i.smoothChildTiming && this._ts) {
      Ui(this, r);
      if (!!i._dp && !i.parent) {
        Xh(i, this);
      }
      while (i && i.parent) {
        if (i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts)) {
          i.totalTime(i._tTime, true);
        }
        i = i.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r)) {
        zt(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== r || !this._dur && !s || this._initted && Math.abs(this._zTime) === ge || !r && !this._initted && (this.add || this._ptLookup)) {
      if (!this._ts) {
        this._pTime = r;
      }
      Gh(this, r, s);
    }
    return this;
  };
  e.time = function (r, s) {
    if (arguments.length) {
      return this.totalTime(Math.min(this.totalDuration(), r + Kc(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s);
    } else {
      return this._time;
    }
  };
  e.totalProgress = function (r, s) {
    if (arguments.length) {
      return this.totalTime(this.totalDuration() * r, s);
    } else if (this.totalDuration()) {
      return Math.min(1, this._tTime / this._tDur);
    } else if (this.rawTime() > 0) {
      return 1;
    } else {
      return 0;
    }
  };
  e.progress = function (r, s) {
    if (arguments.length) {
      return this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Kc(this), s);
    } else if (this.duration()) {
      return Math.min(1, this._time / this._dur);
    } else if (this.rawTime() > 0) {
      return 1;
    } else {
      return 0;
    }
  };
  e.iteration = function (r, s) {
    var i = this.duration() + this._rDelay;
    if (arguments.length) {
      return this.totalTime(this._time + (r - 1) * i, s);
    } else if (this._repeat) {
      return Nr(this._tTime, i) + 1;
    } else {
      return 1;
    }
  };
  e.timeScale = function (r, s) {
    if (!arguments.length) {
      if (this._rts === -ge) {
        return 0;
      } else {
        return this._rts;
      }
    }
    if (this._rts === r) {
      return this;
    }
    var i = this.parent && this._ts ? Ti(this.parent._time, this) : this._tTime;
    this._rts = +r || 0;
    this._ts = this._ps || r === -ge ? 0 : this._rts;
    this.totalTime(Is(-Math.abs(this._delay), this._tDur, i), s !== false);
    ji(this);
    return ib(this);
  };
  e.paused = function (r) {
    if (arguments.length) {
      if (this._ps !== r) {
        this._ps = r;
        if (r) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          Hr();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ge && (this._tTime -= ge));
        }
      }
      return this;
    } else {
      return this._ps;
    }
  };
  e.startTime = function (r) {
    if (arguments.length) {
      this._start = r;
      var s = this.parent || this._dp;
      if (s && (s._sort || !this.parent)) {
        zt(s, this, r - this._delay);
      }
      return this;
    }
    return this._start;
  };
  e.endTime = function (r) {
    return this._start + (st(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  e.rawTime = function (r) {
    var s = this.parent || this._dp;
    if (s) {
      if (r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1)) {
        return this._tTime % (this._dur + this._rDelay);
      } else if (this._ts) {
        return Ti(s.rawTime(r), this);
      } else {
        return this._tTime;
      }
    } else {
      return this._tTime;
    }
  };
  e.revert = function (r = tb) {
    var s = Ge;
    Ge = r;
    if (this._initted || this._startAt) {
      if (this.timeline) {
        this.timeline.revert(r);
      }
      this.totalTime(-0.01, r.suppressEvents);
    }
    if (this.data !== "nested" && r.kill !== false) {
      this.kill();
    }
    Ge = s;
    return this;
  };
  e.globalTime = function (r) {
    for (var s = this, i = arguments.length ? r : s.rawTime(); s;) {
      i = s._start + i / (Math.abs(s._ts) || 1);
      s = s._dp;
    }
    if (!this.parent && this._sat) {
      return this._sat.globalTime(r);
    } else {
      return i;
    }
  };
  e.repeat = function (r) {
    if (arguments.length) {
      this._repeat = r === Infinity ? -2 : r;
      return Yc(this);
    } else if (this._repeat === -2) {
      return Infinity;
    } else {
      return this._repeat;
    }
  };
  e.repeatDelay = function (r) {
    if (arguments.length) {
      var s = this._time;
      this._rDelay = r;
      Yc(this);
      if (s) {
        return this.time(s);
      } else {
        return this;
      }
    }
    return this._rDelay;
  };
  e.yoyo = function (r) {
    if (arguments.length) {
      this._yoyo = r;
      return this;
    } else {
      return this._yoyo;
    }
  };
  e.seek = function (r, s) {
    return this.totalTime(xt(this, r), st(s));
  };
  e.restart = function (r, s) {
    return this.play().totalTime(r ? -this._delay : 0, st(s));
  };
  e.play = function (r, s) {
    if (r != null) {
      this.seek(r, s);
    }
    return this.reversed(false).paused(false);
  };
  e.reverse = function (r, s) {
    if (r != null) {
      this.seek(r || this.totalDuration(), s);
    }
    return this.reversed(true).paused(false);
  };
  e.pause = function (r, s) {
    if (r != null) {
      this.seek(r, s);
    }
    return this.paused(true);
  };
  e.resume = function () {
    return this.paused(false);
  };
  e.reversed = function (r) {
    if (arguments.length) {
      if (!!r !== this.reversed()) {
        this.timeScale(-this._rts || (r ? -ge : 0));
      }
      return this;
    } else {
      return this._rts < 0;
    }
  };
  e.invalidate = function () {
    this._initted = this._act = 0;
    this._zTime = -ge;
    return this;
  };
  e.isActive = function () {
    var r = this.parent || this._dp;
    var s = this._start;
    var i;
    return !r || !!this._ts && !!this._initted && !!r.isActive() && !!((i = r.rawTime(true)) >= s) && !!(i < this.endTime(true) - ge);
  };
  e.eventCallback = function (r, s, i) {
    var o = this.vars;
    if (arguments.length > 1) {
      if (s) {
        o[r] = s;
        if (i) {
          o[r + "Params"] = i;
        }
        if (r === "onUpdate") {
          this._onUpdate = s;
        }
      } else {
        delete o[r];
      }
      return this;
    } else {
      return o[r];
    }
  };
  e.then = function (r) {
    var s = this;
    return new Promise(function (i) {
      var o = Se(r) ? r : Kh;
      function a() {
        var u = s.then;
        s.then = null;
        if (Se(o) && (o = o(s)) && (o.then || o === s)) {
          s.then = u;
        }
        i(o);
        s.then = u;
      }
      if (s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0) {
        a();
      } else {
        s._prom = a;
      }
    });
  };
  e.kill = function () {
    Yr(this);
  };
  return t;
}();
At(ks.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ge,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var Qe = function (t) {
  Bh(e, t);
  function e(r, s) {
    var i;
    if (r === undefined) {
      r = {};
    }
    i = t.call(this, r) || this;
    i.labels = {};
    i.smoothChildTiming = !!r.smoothChildTiming;
    i.autoRemoveChildren = !!r.autoRemoveChildren;
    i._sort = st(r.sortChildren);
    if (we) {
      zt(r.parent || we, tn(i), s);
    }
    if (r.reversed) {
      i.reverse();
    }
    if (r.paused) {
      i.paused(true);
    }
    if (r.scrollTrigger) {
      Jh(tn(i), r.scrollTrigger);
    }
    return i;
  }
  var n = e.prototype;
  n.to = function (s, i, o) {
    ls(0, arguments, this);
    return this;
  };
  n.from = function (s, i, o) {
    ls(1, arguments, this);
    return this;
  };
  n.fromTo = function (s, i, o, a) {
    ls(2, arguments, this);
    return this;
  };
  n.set = function (s, i, o) {
    i.duration = 0;
    i.parent = this;
    if (!as(i).repeatDelay) {
      i.repeat = 0;
    }
    i.immediateRender = !!i.immediateRender;
    new Pe(s, i, xt(this, o), 1);
    return this;
  };
  n.call = function (s, i, o) {
    return zt(this, Pe.delayedCall(0, s, i), o);
  };
  n.staggerTo = function (s, i, o, a, l, u, c) {
    o.duration = i;
    o.stagger = o.stagger || a;
    o.onComplete = u;
    o.onCompleteParams = c;
    o.parent = this;
    new Pe(s, o, xt(this, l));
    return this;
  };
  n.staggerFrom = function (s, i, o, a, l, u, c) {
    o.runBackwards = 1;
    as(o).immediateRender = st(o.immediateRender);
    return this.staggerTo(s, i, o, a, l, u, c);
  };
  n.staggerFromTo = function (s, i, o, a, l, u, c, f) {
    a.startAt = o;
    as(a).immediateRender = st(a.immediateRender);
    return this.staggerTo(s, i, a, l, u, c, f);
  };
  n.render = function (s, i, o) {
    var a = this._time;
    var l = this._dirty ? this.totalDuration() : this._tDur;
    var u = this._dur;
    var c = s <= 0 ? 0 : Me(s);
    var f = this._zTime < 0 != s < 0 && (this._initted || !u);
    var h;
    var d;
    var m;
    var g;
    var w;
    var k;
    var v;
    var p;
    var _;
    var y;
    var S;
    var C;
    if (this !== we && c > l && s >= 0) {
      c = l;
    }
    if (c !== this._tTime || o || f) {
      if (a !== this._time && u) {
        c += this._time - a;
        s += this._time - a;
      }
      h = c;
      _ = this._start;
      p = this._ts;
      k = !p;
      if (f) {
        if (!u) {
          a = this._zTime;
        }
        if (s || !i) {
          this._zTime = s;
        }
      }
      if (this._repeat) {
        S = this._yoyo;
        w = u + this._rDelay;
        if (this._repeat < -1 && s < 0) {
          return this.totalTime(w * 100 + s, i, o);
        }
        h = Me(c % w);
        if (c === l) {
          g = this._repeat;
          h = u;
        } else {
          g = ~~(c / w);
          if (g && g === c / w) {
            h = u;
            g--;
          }
          if (h > u) {
            h = u;
          }
        }
        y = Nr(this._tTime, w);
        if (!a && this._tTime && y !== g && this._tTime - y * w - this._dur <= 0) {
          y = g;
        }
        if (S && g & 1) {
          h = u - h;
          C = 1;
        }
        if (g !== y && !this._lock) {
          var E = S && y & 1;
          var x = E === (S && g & 1);
          if (g < y) {
            E = !E;
          }
          a = E ? 0 : c % u ? u : c;
          this._lock = 1;
          this.render(a || (C ? 0 : Me(g * w)), i, !u)._lock = 0;
          this._tTime = c;
          if (!i && this.parent) {
            _t(this, "onRepeat");
          }
          if (this.vars.repeatRefresh && !C) {
            this.invalidate()._lock = 1;
          }
          if (a && a !== this._time || k !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            return this;
          }
          u = this._dur;
          l = this._tDur;
          if (x) {
            this._lock = 2;
            a = E ? u : -0.0001;
            this.render(a, true);
            if (this.vars.repeatRefresh && !C) {
              this.invalidate();
            }
          }
          this._lock = 0;
          if (!this._ts && !k) {
            return this;
          }
          hd(this, C);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        v = cb(this, Me(a), Me(h));
        if (v) {
          c -= h - (h = v._start);
        }
      }
      this._tTime = c;
      this._time = h;
      this._act = !p;
      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = s;
        a = 0;
      }
      if (!a && h && !i && !g && (_t(this, "onStart"), this._tTime !== c)) {
        return this;
      }
      if (h >= a && s >= 0) {
        for (d = this._first; d;) {
          m = d._next;
          if ((d._act || h >= d._start) && d._ts && v !== d) {
            if (d.parent !== this) {
              return this.render(s, i, o);
            }
            d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, i, o);
            if (h !== this._time || !this._ts && !k) {
              v = 0;
              if (m) {
                c += this._zTime = -ge;
              }
              break;
            }
          }
          d = m;
        }
      } else {
        d = this._last;
        var R = s < 0 ? s : h;
        for (; d;) {
          m = d._prev;
          if ((d._act || R <= d._end) && d._ts && v !== d) {
            if (d.parent !== this) {
              return this.render(s, i, o);
            }
            d.render(d._ts > 0 ? (R - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (R - d._start) * d._ts, i, o || Ge && (d._initted || d._startAt));
            if (h !== this._time || !this._ts && !k) {
              v = 0;
              if (m) {
                c += this._zTime = R ? -ge : ge;
              }
              break;
            }
          }
          d = m;
        }
      }
      if (v && !i && (this.pause(), v.render(h >= a ? 0 : -ge)._zTime = h >= a ? 1 : -1, this._ts)) {
        this._start = _;
        ji(this);
        return this.render(s, i, o);
      }
      if (this._onUpdate && !i) {
        _t(this, "onUpdate", true);
      }
      if ((c === l && this._tTime >= this.totalDuration() || !c && a) && (_ === this._start || Math.abs(p) !== Math.abs(this._ts))) {
        if (!this._lock) {
          if ((s || !u) && (c === l && this._ts > 0 || !c && this._ts < 0)) {
            An(this, 1);
          }
          if (!i && (!(s < 0) || !!a) && (c || a || !l)) {
            _t(this, c === l && s >= 0 ? "onComplete" : "onReverseComplete", true);
            if (this._prom && (!(c < l) || !(this.timeScale() > 0))) {
              this._prom();
            }
          }
        }
      }
    }
    return this;
  };
  n.add = function (s, i) {
    var o = this;
    if (!ln(i)) {
      i = xt(this, i, s);
    }
    if (!(s instanceof ks)) {
      if (qe(s)) {
        s.forEach(function (a) {
          return o.add(a, i);
        });
        return this;
      }
      if (Ie(s)) {
        return this.addLabel(s, i);
      }
      if (Se(s)) {
        s = Pe.delayedCall(0, s);
      } else {
        return this;
      }
    }
    if (this !== s) {
      return zt(this, s, i);
    } else {
      return this;
    }
  };
  n.getChildren = function (s = true, i = true, o = true, a = -Ct) {
    var l = [];
    for (var u = this._first; u;) {
      if (u._start >= a) {
        if (u instanceof Pe) {
          if (i) {
            l.push(u);
          }
        } else {
          if (o) {
            l.push(u);
          }
          if (s) {
            l.push.apply(l, u.getChildren(true, i, o));
          }
        }
      }
      u = u._next;
    }
    return l;
  };
  n.getById = function (s) {
    var i = this.getChildren(1, 1, 1);
    for (var o = i.length; o--;) {
      if (i[o].vars.id === s) {
        return i[o];
      }
    }
  };
  n.remove = function (s) {
    if (Ie(s)) {
      return this.removeLabel(s);
    } else if (Se(s)) {
      return this.killTweensOf(s);
    } else {
      Fi(this, s);
      if (s === this._recent) {
        this._recent = this._last;
      }
      return er(this);
    }
  };
  n.totalTime = function (s, i) {
    if (arguments.length) {
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = Me(mt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts));
      }
      t.prototype.totalTime.call(this, s, i);
      this._forcing = 0;
      return this;
    } else {
      return this._tTime;
    }
  };
  n.addLabel = function (s, i) {
    this.labels[s] = xt(this, i);
    return this;
  };
  n.removeLabel = function (s) {
    delete this.labels[s];
    return this;
  };
  n.addPause = function (s, i, o) {
    var a = Pe.delayedCall(0, i || vs, o);
    a.data = "isPause";
    this._hasPause = 1;
    return zt(this, a, xt(this, s));
  };
  n.removePause = function (s) {
    var i = this._first;
    for (s = xt(this, s); i;) {
      if (i._start === s && i.data === "isPause") {
        An(i);
      }
      i = i._next;
    }
  };
  n.killTweensOf = function (s, i, o) {
    var a = this.getTweensOf(s, o);
    for (var l = a.length; l--;) {
      if (wn !== a[l]) {
        a[l].kill(s, i);
      }
    }
    return this;
  };
  n.getTweensOf = function (s, i) {
    var o = [];
    var a = Et(s);
    for (var l = this._first, u = ln(i), c; l;) {
      if (l instanceof Pe) {
        if (nb(l._targets, a) && (u ? (!wn || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive())) {
          o.push(l);
        }
      } else if ((c = l.getTweensOf(a, i)).length) {
        o.push.apply(o, c);
      }
      l = l._next;
    }
    return o;
  };
  n.tweenTo = function (s, i) {
    i = i || {};
    var o = this;
    var a = xt(o, s);
    var l = i;
    var u = l.startAt;
    var c = l.onStart;
    var f = l.onStartParams;
    var h = l.immediateRender;
    var d;
    var m = Pe.to(o, At({
      ease: i.ease || "none",
      lazy: false,
      immediateRender: false,
      time: a,
      overwrite: "auto",
      duration: i.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || ge,
      onStart: function () {
        o.pause();
        if (!d) {
          var w = i.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          if (m._dur !== w) {
            $r(m, w, 0, 1).render(m._time, true, true);
          }
          d = 1;
        }
        if (c) {
          c.apply(m, f || []);
        }
      }
    }, i));
    if (h) {
      return m.render(0);
    } else {
      return m;
    }
  };
  n.tweenFromTo = function (s, i, o) {
    return this.tweenTo(i, At({
      startAt: {
        time: xt(this, s)
      }
    }, o));
  };
  n.recent = function () {
    return this._recent;
  };
  n.nextLabel = function (s = this._time) {
    return Xc(this, xt(this, s));
  };
  n.previousLabel = function (s = this._time) {
    return Xc(this, xt(this, s), 1);
  };
  n.currentLabel = function (s) {
    if (arguments.length) {
      return this.seek(s, true);
    } else {
      return this.previousLabel(this._time + ge);
    }
  };
  n.shiftChildren = function (s, i, o = 0) {
    for (var a = this._first, l = this.labels, u; a;) {
      if (a._start >= o) {
        a._start += s;
        a._end += s;
      }
      a = a._next;
    }
    if (i) {
      for (u in l) {
        if (l[u] >= o) {
          l[u] += s;
        }
      }
    }
    return er(this);
  };
  n.invalidate = function (s) {
    var i = this._first;
    for (this._lock = 0; i;) {
      i.invalidate(s);
      i = i._next;
    }
    return t.prototype.invalidate.call(this, s);
  };
  n.clear = function (s = true) {
    for (var i = this._first, o; i;) {
      o = i._next;
      this.remove(i);
      i = o;
    }
    if (this._dp) {
      this._time = this._tTime = this._pTime = 0;
    }
    if (s) {
      this.labels = {};
    }
    return er(this);
  };
  n.totalDuration = function (s) {
    var i = 0;
    var o = this;
    var a = o._last;
    var l = Ct;
    var u;
    var c;
    var f;
    if (arguments.length) {
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
    }
    if (o._dirty) {
      for (f = o.parent; a;) {
        u = a._prev;
        if (a._dirty) {
          a.totalDuration();
        }
        c = a._start;
        if (c > l && o._sort && a._ts && !o._lock) {
          o._lock = 1;
          zt(o, a, c - a._delay, 1)._lock = 0;
        } else {
          l = c;
        }
        if (c < 0 && a._ts) {
          i -= c;
          if (!f && !o._dp || f && f.smoothChildTiming) {
            o._start += c / o._ts;
            o._time -= c;
            o._tTime -= c;
          }
          o.shiftChildren(-c, false, -Infinity);
          l = 0;
        }
        if (a._end > i && a._ts) {
          i = a._end;
        }
        a = u;
      }
      $r(o, o === we && o._time > i ? o._time : i, 1, 1);
      o._dirty = 0;
    }
    return o._tDur;
  };
  e.updateRoot = function (s) {
    if (we._ts) {
      Gh(we, Ti(s, we));
      zh = mt.frame;
    }
    if (mt.frame >= Gc) {
      Gc += yt.autoSleep || 120;
      var i = we._first;
      if ((!i || !i._ts) && yt.autoSleep && mt._listeners.length < 2) {
        while (i && !i._ts) {
          i = i._next;
        }
        if (!i) {
          mt.sleep();
        }
      }
    }
  };
  return e;
}(ks);
At(Qe.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
function Sb(e, n, r, s, i, o, a) {
  var l = new ot(this._pt, e, n, 0, 1, vd, null, i);
  var u = 0;
  var c = 0;
  var f;
  var h;
  var d;
  var m;
  var g;
  var w;
  var k;
  var v;
  l.b = r;
  l.e = s;
  r += "";
  s += "";
  if (k = ~s.indexOf("random(")) {
    s = ws(s);
  }
  if (o) {
    v = [r, s];
    o(v, e, n);
    r = v[0];
    s = v[1];
  }
  h = r.match(fo) || [];
  while (f = fo.exec(s)) {
    m = f[0];
    g = s.substring(u, f.index);
    if (d) {
      d = (d + 1) % 5;
    } else if (g.substr(-5) === "rgba(") {
      d = 1;
    }
    if (m !== h[c++]) {
      w = parseFloat(h[c - 1]) || 0;
      l._pt = {
        _next: l._pt,
        p: g || c === 1 ? g : ",",
        s: w,
        c: m.charAt(1) === "=" ? Er(w, m) - w : parseFloat(m) - w,
        m: d && d < 4 ? Math.round : 0
      };
      u = fo.lastIndex;
    }
  }
  l.c = u < s.length ? s.substring(u, s.length) : "";
  l.fp = a;
  if (Hh.test(s) || k) {
    l.e = 0;
  }
  this._pt = l;
  return l;
}
function vl(e, n, r, s, i, o, a, l, u, c) {
  if (Se(s)) {
    s = s(i || 0, e, o);
  }
  var f = e[n];
  var h = r !== "get" ? r : Se(f) ? u ? e[n.indexOf("set") || !Se(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f;
  var d = Se(f) ? u ? Ob : yd : Tl;
  var m;
  if (Ie(s)) {
    if (~s.indexOf("random(")) {
      s = ws(s);
    }
    if (s.charAt(1) === "=") {
      m = Er(h, s) + (Ve(h) || 0);
      if (m || m === 0) {
        s = m;
      }
    }
  }
  if (!c || h !== s || ma) {
    if (!isNaN(h * s) && s !== "") {
      m = new ot(this._pt, e, n, +h || 0, s - (h || 0), typeof f == "boolean" ? Mb : bd, 0, d);
      if (u) {
        m.fp = u;
      }
      if (a) {
        m.modifier(a, this, e);
      }
      return this._pt = m;
    } else {
      if (!f && !(n in e)) {
        ml(n, s);
      }
      return Sb.call(this, e, n, h, s, d, l || yt.stringFilter, u);
    }
  }
}
function Cb(e, n, r, s, i) {
  if (Se(e)) {
    e = cs(e, i, n, r, s);
  }
  if (!Kt(e) || e.style && e.nodeType || qe(e) || Nh(e)) {
    if (Ie(e)) {
      return cs(e, i, n, r, s);
    } else {
      return e;
    }
  }
  var o = {};
  var a;
  for (a in e) {
    o[a] = cs(e[a], i, n, r, s);
  }
  return o;
}
function gd(e, n, r, s, i, o) {
  var a;
  var l;
  var u;
  var c;
  if (dt[e] && (a = new dt[e]()).init(i, a.rawVars ? n[e] : Cb(n[e], s, i, o, r), r, s, o) !== false && (r._pt = l = new ot(r._pt, i, e, 0, 1, a.render, a, 0, a.priority), r !== vr)) {
    u = r._ptLookup[r._targets.indexOf(i)];
    c = a._props.length;
    while (c--) {
      u[a._props[c]] = l;
    }
  }
  return a;
}
var wn;
var ma;
var wl = function t(e, n, r) {
  var s = e.vars;
  var i = s.ease;
  var o = s.startAt;
  var a = s.immediateRender;
  var l = s.lazy;
  var u = s.onUpdate;
  var c = s.runBackwards;
  var f = s.yoyoEase;
  var h = s.keyframes;
  var d = s.autoRevert;
  var m = e._dur;
  var g = e._startAt;
  var w = e._targets;
  var k = e.parent;
  var v = k && k.data === "nested" ? k.vars.targets : w;
  var p = e._overwrite === "auto" && !hl;
  var _ = e.timeline;
  var y;
  var S;
  var C;
  var E;
  var x;
  var R;
  var D;
  var O;
  var $;
  var Y;
  var J;
  var N;
  var j;
  if (_ && (!h || !i)) {
    i = "none";
  }
  e._ease = tr(i, Dr.ease);
  e._yEase = f ? fd(tr(f === true ? i : f, Dr.ease)) : 0;
  if (f && e._yoyo && !e._repeat) {
    f = e._yEase;
    e._yEase = e._ease;
    e._ease = f;
  }
  e._from = !_ && !!s.runBackwards;
  if (!_ || h && !s.stagger) {
    O = w[0] ? Zn(w[0]).harness : 0;
    N = O && s[O.prop];
    y = wi(s, _l);
    if (g) {
      if (g._zTime < 0) {
        g.progress(1);
      }
      if (n < 0 && c && a && !d) {
        g.render(-1, true);
      } else {
        g.revert(c && m ? Zs : eb);
      }
      g._lazy = 0;
    }
    if (o) {
      An(e._startAt = Pe.set(w, At({
        data: "isStart",
        overwrite: false,
        parent: k,
        immediateRender: true,
        lazy: !g && st(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function () {
          return _t(e, "onUpdate");
        },
        stagger: 0
      }, o)));
      e._startAt._dp = 0;
      e._startAt._sat = e;
      if (n < 0 && (Ge || !a && !d)) {
        e._startAt.revert(Zs);
      }
      if (a && m && n <= 0 && r <= 0) {
        if (n) {
          e._zTime = n;
        }
        return;
      }
    } else if (c && m && !g) {
      if (n) {
        a = false;
      }
      C = At({
        overwrite: false,
        data: "isFromStart",
        lazy: a && !g && st(l),
        immediateRender: a,
        stagger: 0,
        parent: k
      }, y);
      if (N) {
        C[O.prop] = N;
      }
      An(e._startAt = Pe.set(w, C));
      e._startAt._dp = 0;
      e._startAt._sat = e;
      if (n < 0) {
        if (Ge) {
          e._startAt.revert(Zs);
        } else {
          e._startAt.render(-1, true);
        }
      }
      e._zTime = n;
      if (!a) {
        t(e._startAt, ge, ge);
      } else if (!n) {
        return;
      }
    }
    e._pt = e._ptCache = 0;
    l = m && st(l) || l && !m;
    S = 0;
    for (; S < w.length; S++) {
      x = w[S];
      D = x._gsap || bl(w)[S]._gsap;
      e._ptLookup[S] = Y = {};
      if (ua[D.id] && Pn.length) {
        vi();
      }
      J = v === w ? S : v.indexOf(x);
      if (O && ($ = new O()).init(x, N || y, e, J, v) !== false) {
        e._pt = E = new ot(e._pt, x, $.name, 0, 1, $.render, $, 0, $.priority);
        $._props.forEach(function (z) {
          Y[z] = E;
        });
        if ($.priority) {
          R = 1;
        }
      }
      if (!O || N) {
        for (C in y) {
          if (dt[C] && ($ = gd(C, y, e, J, x, v))) {
            if ($.priority) {
              R = 1;
            }
          } else {
            Y[C] = E = vl.call(e, x, C, "get", y[C], J, v, 0, s.stringFilter);
          }
        }
      }
      if (e._op && e._op[S]) {
        e.kill(x, e._op[S]);
      }
      if (p && e._pt) {
        wn = e;
        we.killTweensOf(x, Y, e.globalTime(n));
        j = !e.parent;
        wn = 0;
      }
      if (e._pt && l) {
        ua[D.id] = 1;
      }
    }
    if (R) {
      wd(e);
    }
    if (e._onInit) {
      e._onInit(e);
    }
  }
  e._onUpdate = u;
  e._initted = (!e._op || e._pt) && !j;
  if (h && n <= 0) {
    _.render(Ct, true, true);
  }
};
function Eb(e, n, r, s, i, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[n];
  var c;
  var f;
  var h;
  var d;
  if (!u) {
    u = e._ptCache[n] = [];
    h = e._ptLookup;
    d = e._targets.length;
    while (d--) {
      c = h[d][n];
      if (c && c.d && c.d._pt) {
        for (c = c.d._pt; c && c.p !== n && c.fp !== n;) {
          c = c._next;
        }
      }
      if (!c) {
        ma = 1;
        e.vars[n] = "+=0";
        wl(e, a);
        ma = 0;
        if (l) {
          return bs(n + " not eligible for reset");
        } else {
          return 1;
        }
      }
      u.push(c);
    }
  }
  for (d = u.length; d--;) {
    f = u[d];
    c = f._pt || f;
    c.s = (s || s === 0) && !i ? s : c.s + (s || 0) + o * c.c;
    c.c = r - c.s;
    f.e &&= Ee(r) + Ve(f.e);
    f.b &&= c.s + Ve(f.b);
  }
}
function Pb(e, n) {
  var r = e[0] ? Zn(e[0]).harness : 0;
  var s = r && r.aliases;
  var i;
  var o;
  var a;
  var l;
  if (!s) {
    return n;
  }
  i = ir({}, n);
  for (o in s) {
    if (o in i) {
      l = s[o].split(",");
      a = l.length;
      while (a--) {
        i[l[a]] = i[o];
      }
    }
  }
  return i;
}
function Rb(e, n, r, s) {
  var i = n.ease || s || "power1.inOut";
  var o;
  var a;
  if (qe(n)) {
    a = r[e] ||= [];
    n.forEach(function (l, u) {
      return a.push({
        t: u / (n.length - 1) * 100,
        v: l,
        e: i
      });
    });
  } else {
    for (o in n) {
      a = r[o] ||= [];
      if (o !== "ease") {
        a.push({
          t: parseFloat(e),
          v: n[o],
          e: i
        });
      }
    }
  }
}
function cs(e, n, r, s, i) {
  if (Se(e)) {
    return e.call(n, r, s, i);
  } else if (Ie(e) && ~e.indexOf("random(")) {
    return ws(e);
  } else {
    return e;
  }
}
var md = yl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
var _d = {};
it(md + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return _d[t] = 1;
});
var Pe = function (t) {
  Bh(e, t);
  function e(r, s, i, o) {
    var a;
    if (typeof s == "number") {
      i.duration = s;
      s = i;
      i = null;
    }
    a = t.call(this, o ? s : as(s)) || this;
    var l = a.vars;
    var u = l.duration;
    var c = l.delay;
    var f = l.immediateRender;
    var h = l.stagger;
    var d = l.overwrite;
    var m = l.keyframes;
    var g = l.defaults;
    var w = l.scrollTrigger;
    var k = l.yoyoEase;
    var v = s.parent || we;
    var p = (qe(r) || Nh(r) ? ln(r[0]) : "length" in s) ? [r] : Et(r);
    var _;
    var y;
    var S;
    var C;
    var E;
    var x;
    var R;
    var D;
    a._targets = p.length ? bl(p) : bs("GSAP target " + r + " not found. https://gsap.com", !yt.nullTargetWarn) || [];
    a._ptLookup = [];
    a._overwrite = d;
    if (m || h || Ws(u) || Ws(c)) {
      s = a.vars;
      _ = a.timeline = new Qe({
        data: "nested",
        defaults: g || {},
        targets: v && v.data === "nested" ? v.vars.targets : p
      });
      _.kill();
      _.parent = _._dp = tn(a);
      _._start = 0;
      if (h || Ws(u) || Ws(c)) {
        C = p.length;
        R = h && td(h);
        if (Kt(h)) {
          for (E in h) {
            if (~md.indexOf(E)) {
              D ||= {};
              D[E] = h[E];
            }
          }
        }
        for (y = 0; y < C; y++) {
          S = wi(s, _d);
          S.stagger = 0;
          if (k) {
            S.yoyoEase = k;
          }
          if (D) {
            ir(S, D);
          }
          x = p[y];
          S.duration = +cs(u, tn(a), y, x, p);
          S.delay = (+cs(c, tn(a), y, x, p) || 0) - a._delay;
          if (!h && C === 1 && S.delay) {
            a._delay = c = S.delay;
            a._start += c;
            S.delay = 0;
          }
          _.to(x, S, R ? R(y, x, p) : 0);
          _._ease = te.none;
        }
        if (_.duration()) {
          u = c = 0;
        } else {
          a.timeline = 0;
        }
      } else if (m) {
        as(At(_.vars.defaults, {
          ease: "none"
        }));
        _._ease = tr(m.ease || s.ease || "none");
        var O = 0;
        var $;
        var Y;
        var J;
        if (qe(m)) {
          m.forEach(function (N) {
            return _.to(p, N, ">");
          });
          _.duration();
        } else {
          S = {};
          for (E in m) {
            if (E !== "ease" && E !== "easeEach") {
              Rb(E, m[E], S, m.easeEach);
            }
          }
          for (E in S) {
            $ = S[E].sort(function (N, j) {
              return N.t - j.t;
            });
            O = 0;
            y = 0;
            for (; y < $.length; y++) {
              Y = $[y];
              J = {
                ease: Y.e,
                duration: (Y.t - (y ? $[y - 1].t : 0)) / 100 * u
              };
              J[E] = Y.v;
              _.to(p, J, O);
              O += J.duration;
            }
          }
          if (_.duration() < u) {
            _.to({}, {
              duration: u - _.duration()
            });
          }
        }
      }
      if (!u) {
        a.duration(u = _.duration());
      }
    } else {
      a.timeline = 0;
    }
    if (d === true && !hl) {
      wn = tn(a);
      we.killTweensOf(p);
      wn = 0;
    }
    zt(v, tn(a), i);
    if (s.reversed) {
      a.reverse();
    }
    if (s.paused) {
      a.paused(true);
    }
    if (f || !u && !m && a._start === Me(v._time) && st(f) && ob(tn(a)) && v.data !== "nested") {
      a._tTime = -ge;
      a.render(Math.max(0, -c) || 0);
    }
    if (w) {
      Jh(tn(a), w);
    }
    return a;
  }
  var n = e.prototype;
  n.render = function (s, i, o) {
    var a = this._time;
    var l = this._tDur;
    var u = this._dur;
    var c = s < 0;
    var f = s > l - ge && !c ? l : s < ge ? 0 : s;
    var h;
    var d;
    var m;
    var g;
    var w;
    var k;
    var v;
    var p;
    var _;
    if (!u) {
      lb(this, s, i, o);
    } else if (f !== this._tTime || !s || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      h = f;
      p = this.timeline;
      if (this._repeat) {
        g = u + this._rDelay;
        if (this._repeat < -1 && c) {
          return this.totalTime(g * 100 + s, i, o);
        }
        h = Me(f % g);
        if (f === l) {
          m = this._repeat;
          h = u;
        } else {
          m = ~~(f / g);
          if (m && m === Me(f / g)) {
            h = u;
            m--;
          }
          if (h > u) {
            h = u;
          }
        }
        k = this._yoyo && m & 1;
        if (k) {
          _ = this._yEase;
          h = u - h;
        }
        w = Nr(this._tTime, g);
        if (h === a && !o && this._initted && m === w) {
          this._tTime = f;
          return this;
        }
        if (m !== w) {
          if (p && this._yEase) {
            hd(p, k);
          }
          if (this.vars.repeatRefresh && !k && !this._lock && this._time !== g && this._initted) {
            this._lock = o = 1;
            this.render(Me(g * m), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (Qh(this, c ? s : h, o, i, f)) {
          this._tTime = 0;
          return this;
        }
        if (a !== this._time && (!o || !this.vars.repeatRefresh || m === w)) {
          return this;
        }
        if (u !== this._dur) {
          return this.render(s, i, o);
        }
      }
      this._tTime = f;
      this._time = h;
      if (!this._act && this._ts) {
        this._act = 1;
        this._lazy = 0;
      }
      this.ratio = v = (_ || this._ease)(h / u);
      if (this._from) {
        this.ratio = v = 1 - v;
      }
      if (h && !a && !i && !m && (_t(this, "onStart"), this._tTime !== f)) {
        return this;
      }
      for (d = this._pt; d;) {
        d.r(v, d.d);
        d = d._next;
      }
      if (!p || !p.render(s < 0 ? s : p._dur * p._ease(h / this._dur), i, o)) {
        if (this._startAt) {
          this._zTime = s;
        }
      }
      if (this._onUpdate && !i) {
        if (c) {
          fa(this, s, i, o);
        }
        _t(this, "onUpdate");
      }
      if (this._repeat && m !== w && this.vars.onRepeat && !i && this.parent) {
        _t(this, "onRepeat");
      }
      if ((f === this._tDur || !f) && this._tTime === f) {
        if (c && !this._onUpdate) {
          fa(this, s, true, true);
        }
        if ((s || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0)) {
          An(this, 1);
        }
        if (!i && (!c || !!a) && (f || a || k)) {
          _t(this, f === l ? "onComplete" : "onReverseComplete", true);
          if (this._prom && (!(f < l) || !(this.timeScale() > 0))) {
            this._prom();
          }
        }
      }
    }
    return this;
  };
  n.targets = function () {
    return this._targets;
  };
  n.invalidate = function (s) {
    if (!s || !this.vars.runBackwards) {
      this._startAt = 0;
    }
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    if (this.timeline) {
      this.timeline.invalidate(s);
    }
    return t.prototype.invalidate.call(this, s);
  };
  n.resetTo = function (s, i, o, a, l) {
    if (!Ts) {
      mt.wake();
    }
    if (!this._ts) {
      this.play();
    }
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
    var c;
    if (!this._initted) {
      wl(this, u);
    }
    c = this._ease(u / this._dur);
    if (Eb(this, s, i, o, a, c, u, l)) {
      return this.resetTo(s, i, o, a, 1);
    } else {
      Ui(this, 0);
      if (!this.parent) {
        Yh(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      }
      return this.render(0);
    }
  };
  n.kill = function (s, i = "all") {
    if (!s && (!i || i === "all")) {
      this._lazy = this._pt = 0;
      if (this.parent) {
        return Yr(this);
      } else {
        return this;
      }
    }
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      if (!this.timeline.killTweensOf(s, i, wn && wn.vars.overwrite !== true)._first) {
        Yr(this);
      }
      if (this.parent && o !== this.timeline.totalDuration()) {
        $r(this, this._dur * this.timeline._tDur / o, 0, 1);
      }
      return this;
    }
    var a = this._targets;
    var l = s ? Et(s) : a;
    var u = this._ptLookup;
    var c = this._pt;
    var f;
    var h;
    var d;
    var m;
    var g;
    var w;
    var k;
    if ((!i || i === "all") && sb(a, l)) {
      if (i === "all") {
        this._pt = 0;
      }
      return Yr(this);
    }
    f = this._op = this._op || [];
    if (i !== "all") {
      if (Ie(i)) {
        g = {};
        it(i, function (v) {
          return g[v] = 1;
        });
        i = g;
      }
      i = Pb(a, i);
    }
    k = a.length;
    while (k--) {
      if (~l.indexOf(a[k])) {
        h = u[k];
        if (i === "all") {
          f[k] = i;
          m = h;
          d = {};
        } else {
          d = f[k] = f[k] || {};
          m = i;
        }
        for (g in m) {
          w = h && h[g];
          if (w) {
            if (!("kill" in w.d) || w.d.kill(g) === true) {
              Fi(this, w, "_pt");
            }
            delete h[g];
          }
          if (d !== "all") {
            d[g] = 1;
          }
        }
      }
    }
    if (this._initted && !this._pt && c) {
      Yr(this);
    }
    return this;
  };
  e.to = function (s, i) {
    return new e(s, i, arguments[2]);
  };
  e.from = function (s, i) {
    return ls(1, arguments);
  };
  e.delayedCall = function (s, i, o, a) {
    return new e(i, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: s,
      onComplete: i,
      onReverseComplete: i,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  };
  e.fromTo = function (s, i, o) {
    return ls(2, arguments);
  };
  e.set = function (s, i) {
    i.duration = 0;
    if (!i.repeatDelay) {
      i.repeat = 0;
    }
    return new e(s, i);
  };
  e.killTweensOf = function (s, i, o) {
    return we.killTweensOf(s, i, o);
  };
  return e;
}(ks);
At(Pe.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
it("staggerTo,staggerFrom,staggerFromTo", function (t) {
  Pe[t] = function () {
    var e = new Qe();
    var n = da.call(arguments, 0);
    n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0);
    return e[t].apply(e, n);
  };
});
function Tl(e, n, r) {
  return e[n] = r;
}
function yd(e, n, r) {
  return e[n](r);
}
function Ob(e, n, r, s) {
  return e[n](s.fp, r);
}
function Ab(e, n, r) {
  return e.setAttribute(n, r);
}
function kl(e, n) {
  if (Se(e[n])) {
    return yd;
  } else if (dl(e[n]) && e.setAttribute) {
    return Ab;
  } else {
    return Tl;
  }
}
function bd(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1000000) / 1000000, n);
}
function Mb(e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n);
}
function vd(e, n) {
  var r = n._pt;
  var s = "";
  if (!e && n.b) {
    s = n.b;
  } else if (e === 1 && n.e) {
    s = n.e;
  } else {
    while (r) {
      s = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 10000) / 10000) + s;
      r = r._next;
    }
    s += n.c;
  }
  n.set(n.t, n.p, s, n);
}
function xl(e, n) {
  for (var r = n._pt; r;) {
    r.r(e, r.d);
    r = r._next;
  }
}
function Ib(e, n, r, s) {
  for (var i = this._pt, o; i;) {
    o = i._next;
    if (i.p === s) {
      i.modifier(e, n, r);
    }
    i = o;
  }
}
function Lb(e) {
  for (var n = this._pt, r, s; n;) {
    s = n._next;
    if (n.p === e && !n.op || n.op === e) {
      Fi(this, n, "_pt");
    } else if (!n.dep) {
      r = 1;
    }
    n = s;
  }
  return !r;
}
function Bb(e, n, r, s) {
  s.mSet(e, n, s.m.call(s.tween, r, s.mt), s);
}
function wd(e) {
  for (var n = e._pt, r, s, i, o; n;) {
    r = n._next;
    s = i;
    while (s && s.pr > n.pr) {
      s = s._next;
    }
    if (n._prev = s ? s._prev : o) {
      n._prev._next = n;
    } else {
      i = n;
    }
    if (n._next = s) {
      s._prev = n;
    } else {
      o = n;
    }
    n = r;
  }
  e._pt = i;
}
var ot = function () {
  function t(n, r, s, i, o, a, l, u, c) {
    this.t = r;
    this.s = i;
    this.c = o;
    this.p = s;
    this.r = a || bd;
    this.d = l || this;
    this.set = u || Tl;
    this.pr = c || 0;
    this._next = n;
    if (n) {
      n._prev = this;
    }
  }
  var e = t.prototype;
  e.modifier = function (r, s, i) {
    this.mSet = this.mSet || this.set;
    this.set = Bb;
    this.m = r;
    this.mt = i;
    this.tween = s;
  };
  return t;
}();
it(yl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
  return _l[t] = 1;
});
bt.TweenMax = bt.TweenLite = Pe;
bt.TimelineLite = bt.TimelineMax = Qe;
we = new Qe({
  sortChildren: false,
  defaults: Dr,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
yt.stringFilter = ud;
var nr = [];
var ti = {};
var Db = [];
var Qc = 0;
var Nb = 0;
function _o(e) {
  return (ti[e] || Db).map(function (n) {
    return n();
  });
}
function _a() {
  var e = Date.now();
  var n = [];
  if (e - Qc > 2) {
    _o("matchMediaInit");
    nr.forEach(function (r) {
      var s = r.queries;
      var i = r.conditions;
      var o;
      var a;
      var l;
      var u;
      for (a in s) {
        o = Vt.matchMedia(s[a]).matches;
        if (o) {
          l = 1;
        }
        if (o !== i[a]) {
          i[a] = o;
          u = 1;
        }
      }
      if (u) {
        r.revert();
        if (l) {
          n.push(r);
        }
      }
    });
    _o("matchMediaRevert");
    n.forEach(function (r) {
      return r.onMatch(r, function (s) {
        return r.add(null, s);
      });
    });
    Qc = e;
    _o("matchMedia");
  }
}
var Td = function () {
  function t(n, r) {
    this.selector = r && pa(r);
    this.data = [];
    this._r = [];
    this.isReverted = false;
    this.id = Nb++;
    if (n) {
      this.add(n);
    }
  }
  var e = t.prototype;
  e.add = function (r, s, i) {
    if (Se(r)) {
      i = s;
      s = r;
      r = Se;
    }
    var o = this;
    function a() {
      var u = be;
      var c = o.selector;
      var f;
      if (u && u !== o) {
        u.data.push(o);
      }
      if (i) {
        o.selector = pa(i);
      }
      be = o;
      f = s.apply(o, arguments);
      if (Se(f)) {
        o._r.push(f);
      }
      be = u;
      o.selector = c;
      o.isReverted = false;
      return f;
    }
    o.last = a;
    if (r === Se) {
      return a(o, function (l) {
        return o.add(null, l);
      });
    } else if (r) {
      return o[r] = a;
    } else {
      return a;
    }
  };
  e.ignore = function (r) {
    var s = be;
    be = null;
    r(this);
    be = s;
  };
  e.getTweens = function () {
    var r = [];
    this.data.forEach(function (s) {
      if (s instanceof t) {
        return r.push.apply(r, s.getTweens());
      } else {
        return s instanceof Pe && (!s.parent || s.parent.data !== "nested") && r.push(s);
      }
    });
    return r;
  };
  e.clear = function () {
    this._r.length = this.data.length = 0;
  };
  e.kill = function (r, s) {
    var i = this;
    if (r) {
      (function () {
        var a = i.getTweens();
        for (var l = i.data.length, u; l--;) {
          u = i.data[l];
          if (u.data === "isFlip") {
            u.revert();
            u.getChildren(true, true, false).forEach(function (c) {
              return a.splice(a.indexOf(c), 1);
            });
          }
        }
        a.map(function (c) {
          return {
            g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -Infinity,
            t: c
          };
        }).sort(function (c, f) {
          return f.g - c.g || -Infinity;
        }).forEach(function (c) {
          return c.t.revert(r);
        });
        l = i.data.length;
        while (l--) {
          u = i.data[l];
          if (u instanceof Qe) {
            if (u.data !== "nested") {
              if (u.scrollTrigger) {
                u.scrollTrigger.revert();
              }
              u.kill();
            }
          } else if (!(u instanceof Pe) && u.revert) {
            u.revert(r);
          }
        }
        i._r.forEach(function (c) {
          return c(r, i);
        });
        i.isReverted = true;
      })();
    } else {
      this.data.forEach(function (a) {
        return a.kill && a.kill();
      });
    }
    this.clear();
    if (s) {
      for (var o = nr.length; o--;) {
        if (nr[o].id === this.id) {
          nr.splice(o, 1);
        }
      }
    }
  };
  e.revert = function (r) {
    this.kill(r || {});
  };
  return t;
}();
var $b = function () {
  function t(n) {
    this.contexts = [];
    this.scope = n;
    if (be) {
      be.data.push(this);
    }
  }
  var e = t.prototype;
  e.add = function (r, s, i) {
    if (!Kt(r)) {
      r = {
        matches: r
      };
    }
    var o = new Td(0, i || this.scope);
    var a = o.conditions = {};
    var l;
    var u;
    var c;
    if (be && !o.selector) {
      o.selector = be.selector;
    }
    this.contexts.push(o);
    s = o.add("onMatch", s);
    o.queries = r;
    for (u in r) {
      if (u === "all") {
        c = 1;
      } else {
        l = Vt.matchMedia(r[u]);
        if (l) {
          if (nr.indexOf(o) < 0) {
            nr.push(o);
          }
          if (a[u] = l.matches) {
            c = 1;
          }
          if (l.addListener) {
            l.addListener(_a);
          } else {
            l.addEventListener("change", _a);
          }
        }
      }
    }
    if (c) {
      s(o, function (f) {
        return o.add(null, f);
      });
    }
    return this;
  };
  e.revert = function (r) {
    this.kill(r || {});
  };
  e.kill = function (r) {
    this.contexts.forEach(function (s) {
      return s.kill(r, true);
    });
  };
  return t;
}();
var ki = {
  registerPlugin: function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
      n[r] = arguments[r];
    }
    n.forEach(function (s) {
      return ad(s);
    });
  },
  timeline: function (e) {
    return new Qe(e);
  },
  getTweensOf: function (e, n) {
    return we.getTweensOf(e, n);
  },
  getProperty: function (e, n, r, s) {
    if (Ie(e)) {
      e = Et(e)[0];
    }
    var i = Zn(e || {}).get;
    var o = r ? Kh : qh;
    if (r === "native") {
      r = "";
    }
    return e && (n ? o((dt[n] && dt[n].get || i)(e, n, r, s)) : function (a, l, u) {
      return o((dt[a] && dt[a].get || i)(e, a, l, u));
    });
  },
  quickSetter: function (e, n, r) {
    e = Et(e);
    if (e.length > 1) {
      var s = e.map(function (c) {
        return lt.quickSetter(c, n, r);
      });
      var i = s.length;
      return function (c) {
        for (var f = i; f--;) {
          s[f](c);
        }
      };
    }
    e = e[0] || {};
    var o = dt[n];
    var a = Zn(e);
    var l = a.harness && (a.harness.aliases || {})[n] || n;
    var u = o ? function (c) {
      var f = new o();
      vr._pt = 0;
      f.init(e, r ? c + r : c, vr, 0, [e]);
      f.render(1, f);
      if (vr._pt) {
        xl(1, vr);
      }
    } : a.set(e, l);
    if (o) {
      return u;
    } else {
      return function (c) {
        return u(e, l, r ? c + r : c, a, 1);
      };
    }
  },
  quickTo: function (e, n, r) {
    var s;
    var i = lt.to(e, ir((s = {}, s[n] = "+=0.1", s.paused = true, s), r || {}));
    function o(l, u, c) {
      return i.resetTo(n, l, u, c);
    }
    o.tween = i;
    return o;
  },
  isTweening: function (e) {
    return we.getTweensOf(e, true).length > 0;
  },
  defaults: function (e) {
    if (e && e.ease) {
      e.ease = tr(e.ease, Dr.ease);
    }
    return qc(Dr, e || {});
  },
  config: function (e) {
    return qc(yt, e || {});
  },
  registerEffect: function (e) {
    var n = e.name;
    var r = e.effect;
    var s = e.plugins;
    var i = e.defaults;
    var o = e.extendTimeline;
    (s || "").split(",").forEach(function (a) {
      return a && !dt[a] && !bt[a] && bs(n + " effect requires " + a + " plugin.");
    });
    ho[n] = function (a, l, u) {
      return r(Et(a), At(l || {}, i), u);
    };
    if (o) {
      Qe.prototype[n] = function (a, l, u) {
        return this.add(ho[n](a, Kt(l) ? l : (u = l) && {}, this), u);
      };
    }
  },
  registerEase: function (e, n) {
    te[e] = tr(n);
  },
  parseEase: function (e, n) {
    if (arguments.length) {
      return tr(e, n);
    } else {
      return te;
    }
  },
  getById: function (e) {
    return we.getById(e);
  },
  exportRoot: function (e = {}, n) {
    var r = new Qe(e);
    var s;
    var i;
    r.smoothChildTiming = st(e.smoothChildTiming);
    we.remove(r);
    r._dp = 0;
    r._time = r._tTime = we._time;
    s = we._first;
    while (s) {
      i = s._next;
      if (n || !!s._dur || !(s instanceof Pe) || s.vars.onComplete !== s._targets[0]) {
        zt(r, s, s._start - s._delay);
      }
      s = i;
    }
    zt(we, r, 0);
    return r;
  },
  context: function (e, n) {
    if (e) {
      return new Td(e, n);
    } else {
      return be;
    }
  },
  matchMedia: function (e) {
    return new $b(e);
  },
  matchMediaRefresh: function () {
    return nr.forEach(function (e) {
      var n = e.conditions;
      var r;
      var s;
      for (s in n) {
        if (n[s]) {
          n[s] = false;
          r = 1;
        }
      }
      if (r) {
        e.revert();
      }
    }) || _a();
  },
  addEventListener: function (e, n) {
    var r = ti[e] ||= [];
    if (!~r.indexOf(n)) {
      r.push(n);
    }
  },
  removeEventListener: function (e, n) {
    var r = ti[e];
    var s = r && r.indexOf(n);
    if (s >= 0) {
      r.splice(s, 1);
    }
  },
  utils: {
    wrap: mb,
    wrapYoyo: _b,
    distribute: td,
    random: rd,
    snap: nd,
    normalize: gb,
    getUnit: Ve,
    clamp: fb,
    splitColor: ld,
    toArray: Et,
    selector: pa,
    mapRange: id,
    pipe: db,
    unitize: pb,
    interpolate: yb,
    shuffle: ed
  },
  install: Uh,
  effects: ho,
  ticker: mt,
  updateRoot: Qe.updateRoot,
  plugins: dt,
  globalTimeline: we,
  core: {
    PropTween: ot,
    globals: Vh,
    Tween: Pe,
    Timeline: Qe,
    Animation: ks,
    getCache: Zn,
    _removeLinkedListItem: Fi,
    reverting: function () {
      return Ge;
    },
    context: function (e) {
      if (e && be) {
        be.data.push(e);
        e._ctx = be;
      }
      return be;
    },
    suppressOverwrites: function (e) {
      return hl = e;
    }
  }
};
it("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return ki[t] = Pe[t];
});
mt.add(Qe.updateRoot);
vr = ki.to({}, {
  duration: 0
});
function Hb(e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n;) {
    r = r._next;
  }
  return r;
}
function Fb(e, n) {
  var r = e._targets;
  var s;
  var i;
  var o;
  for (s in n) {
    for (i = r.length; i--;) {
      o = e._ptLookup[i][s];
      if (o &&= o.d) {
        if (o._pt) {
          o = Hb(o, s);
        }
        if (o && o.modifier) {
          o.modifier(n[s], e, r[i], s);
        }
      }
    }
  }
}
function yo(e, n) {
  return {
    name: e,
    rawVars: 1,
    init: function (s, i, o) {
      o._onInit = function (a) {
        var l;
        var u;
        if (Ie(i)) {
          l = {};
          it(i, function (c) {
            return l[c] = 1;
          });
          i = l;
        }
        if (n) {
          l = {};
          for (u in i) {
            l[u] = n(i[u]);
          }
          i = l;
        }
        Fb(a, i);
      };
    }
  };
}
var lt = ki.registerPlugin({
  name: "attr",
  init: function (e, n, r, s, i) {
    var o;
    var a;
    var l;
    this.tween = r;
    for (o in n) {
      l = e.getAttribute(o) || "";
      a = this.add(e, "setAttribute", (l || 0) + "", n[o], s, i, 0, 0, o);
      a.op = o;
      a.b = l;
      this._props.push(o);
    }
  },
  render: function (e, n) {
    for (var r = n._pt; r;) {
      if (Ge) {
        r.set(r.t, r.p, r.b, r);
      } else {
        r.r(e, r.d);
      }
      r = r._next;
    }
  }
}, {
  name: "endArray",
  init: function (e, n) {
    for (var r = n.length; r--;) {
      this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
    }
  }
}, yo("roundProps", ga), yo("modifiers"), yo("snap", nd)) || ki;
Pe.version = Qe.version = lt.version = "3.12.5";
jh = 1;
if (pl()) {
  Hr();
}
te.Power0;
te.Power1;
te.Power2;
te.Power3;
te.Power4;
te.Linear;
te.Quad;
te.Cubic;
te.Quart;
te.Quint;
te.Strong;
te.Elastic;
te.Back;
te.SteppedEase;
te.Bounce;
te.Sine;
te.Expo;
te.Circ; /*!
         * CSSPlugin 3.12.5
         * https://gsap.com
         *
         * Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
var Zc;
var Tn;
var Pr;
var Sl;
var Kn;
var eu;
var Cl;
function jb() {
  return typeof window !== "undefined";
}
var cn = {};
var qn = 180 / Math.PI;
var Rr = Math.PI / 180;
var hr = Math.atan2;
var tu = 100000000;
var El = /([A-Z])/g;
var Ub = /(left|right|width|margin|padding|x)/i;
var Vb = /[\s,\(]\S/;
var Wt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
};
function ya(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 10000) / 10000 + n.u, n);
}
function zb(e, n) {
  return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 10000) / 10000 + n.u, n);
}
function Wb(e, n) {
  return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 10000) / 10000 + n.u : n.b, n);
}
function Gb(e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
}
function kd(e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n);
}
function xd(e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
}
function qb(e, n, r) {
  return e.style[n] = r;
}
function Kb(e, n, r) {
  return e.style.setProperty(n, r);
}
function Yb(e, n, r) {
  return e._gsap[n] = r;
}
function Xb(e, n, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}
function Jb(e, n, r, s, i) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r;
  o.renderTransform(i, o);
}
function Qb(e, n, r, s, i) {
  var o = e._gsap;
  o[n] = r;
  o.renderTransform(i, o);
}
var Te = "transform";
var at = Te + "Origin";
var Zb = function t(e, n) {
  var r = this;
  var s = this.target;
  var i = s.style;
  var o = s._gsap;
  if (e in cn && i) {
    this.tfm = this.tfm || {};
    if (e !== "transform") {
      e = Wt[e] || e;
      if (~e.indexOf(",")) {
        e.split(",").forEach(function (a) {
          return r.tfm[a] = nn(s, a);
        });
      } else {
        this.tfm[e] = o.x ? o[e] : nn(s, e);
      }
      if (e === at) {
        this.tfm.zOrigin = o.zOrigin;
      }
    } else {
      return Wt.transform.split(",").forEach(function (a) {
        return t.call(r, a, n);
      });
    }
    if (this.props.indexOf(Te) >= 0) {
      return;
    }
    if (o.svg) {
      this.svgo = s.getAttribute("data-svg-origin");
      this.props.push(at, n, "");
    }
    e = Te;
  }
  if (i || n) {
    this.props.push(e, n, i[e]);
  }
};
function Sd(e) {
  if (e.translate) {
    e.removeProperty("translate");
    e.removeProperty("scale");
    e.removeProperty("rotate");
  }
}
function ev() {
  var e = this.props;
  var n = this.target;
  var r = n.style;
  var s = n._gsap;
  var i;
  var o;
  for (i = 0; i < e.length; i += 3) {
    if (e[i + 1]) {
      n[e[i]] = e[i + 2];
    } else if (e[i + 2]) {
      r[e[i]] = e[i + 2];
    } else {
      r.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(El, "-$1").toLowerCase());
    }
  }
  if (this.tfm) {
    for (o in this.tfm) {
      s[o] = this.tfm[o];
    }
    if (s.svg) {
      s.renderTransform();
      n.setAttribute("data-svg-origin", this.svgo || "");
    }
    i = Cl();
    if ((!i || !i.isStart) && !r[Te]) {
      Sd(r);
      if (s.zOrigin && r[at]) {
        r[at] += " " + s.zOrigin + "px";
        s.zOrigin = 0;
        s.renderTransform();
      }
      s.uncache = 1;
    }
  }
}
function Cd(e, n) {
  var r = {
    target: e,
    props: [],
    revert: ev,
    save: Zb
  };
  if (!e._gsap) {
    lt.core.getCache(e);
  }
  if (n) {
    n.split(",").forEach(function (s) {
      return r.save(s);
    });
  }
  return r;
}
var Ed;
function ba(e, n) {
  var r = Tn.createElementNS ? Tn.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Tn.createElement(e);
  if (r && r.style) {
    return r;
  } else {
    return Tn.createElement(e);
  }
}
var qt = function t(e, n, r) {
  var s = getComputedStyle(e);
  return s[n] || s.getPropertyValue(n.replace(El, "-$1").toLowerCase()) || s.getPropertyValue(n) || !r && t(e, Fr(n) || n, 1) || "";
};
var nu = "O,Moz,ms,Ms,Webkit".split(",");
function Fr(e, n, r) {
  var s = n || Kn;
  var i = s.style;
  var o = 5;
  if (e in i && !r) {
    return e;
  }
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(nu[o] + e in i););
  if (o < 0) {
    return null;
  } else {
    return (o === 3 ? "ms" : o >= 0 ? nu[o] : "") + e;
  }
}
function va() {
  if (jb() && window.document) {
    Zc = window;
    Tn = Zc.document;
    Pr = Tn.documentElement;
    Kn = ba("div") || {
      style: {}
    };
    ba("div");
    Te = Fr(Te);
    at = Te + "Origin";
    Kn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
    Ed = !!Fr("perspective");
    Cl = lt.core.reverting;
    Sl = 1;
  }
}
var bo = function t(e) {
  var n = ba("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg");
  var r = this.parentNode;
  var s = this.nextSibling;
  var i = this.style.cssText;
  var o;
  Pr.appendChild(n);
  n.appendChild(this);
  this.style.display = "block";
  if (e) {
    try {
      o = this.getBBox();
      this._gsapBBox = this.getBBox;
      this.getBBox = t;
    } catch {}
  } else if (this._gsapBBox) {
    o = this._gsapBBox();
  }
  if (r) {
    if (s) {
      r.insertBefore(this, s);
    } else {
      r.appendChild(this);
    }
  }
  Pr.removeChild(n);
  this.style.cssText = i;
  return o;
};
function ru(e, n) {
  for (var r = n.length; r--;) {
    if (e.hasAttribute(n[r])) {
      return e.getAttribute(n[r]);
    }
  }
}
function Pd(e) {
  var n;
  try {
    n = e.getBBox();
  } catch {
    n = bo.call(e, true);
  }
  if ((!n || !n.width && !n.height) && e.getBBox !== bo) {
    n = bo.call(e, true);
  }
  if (n && !n.width && !n.x && !n.y) {
    return {
      x: +ru(e, ["x", "cx", "x1"]) || 0,
      y: +ru(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  } else {
    return n;
  }
}
function Rd(e) {
  return !!e.getCTM && (!e.parentNode || !!e.ownerSVGElement) && !!Pd(e);
}
function or(e, n) {
  if (n) {
    var r = e.style;
    var s;
    if (n in cn && n !== at) {
      n = Te;
    }
    if (r.removeProperty) {
      s = n.substr(0, 2);
      if (s === "ms" || n.substr(0, 6) === "webkit") {
        n = "-" + n;
      }
      r.removeProperty(s === "--" ? n : n.replace(El, "-$1").toLowerCase());
    } else {
      r.removeAttribute(n);
    }
  }
}
function kn(e, n, r, s, i, o) {
  var a = new ot(e._pt, n, r, 0, 1, o ? xd : kd);
  e._pt = a;
  a.b = s;
  a.e = i;
  e._props.push(r);
  return a;
}
var su = {
  deg: 1,
  rad: 1,
  turn: 1
};
var tv = {
  grid: 1,
  flex: 1
};
var Mn = function t(e, n, r, s) {
  var i = parseFloat(r) || 0;
  var o = (r + "").trim().substr((i + "").length) || "px";
  var a = Kn.style;
  var l = Ub.test(n);
  var u = e.tagName.toLowerCase() === "svg";
  var c = (u ? "client" : "offset") + (l ? "Width" : "Height");
  var f = 100;
  var h = s === "px";
  var d = s === "%";
  var m;
  var g;
  var w;
  var k;
  if (s === o || !i || su[s] || su[o]) {
    return i;
  }
  if (o !== "px" && !h) {
    i = t(e, n, r, "px");
  }
  k = e.getCTM && Rd(e);
  if ((d || o === "%") && (cn[n] || ~n.indexOf("adius"))) {
    m = k ? e.getBBox()[l ? "width" : "height"] : e[c];
    return Ee(d ? i / m * f : i / 100 * m);
  }
  a[l ? "width" : "height"] = f + (h ? o : s);
  g = ~n.indexOf("adius") || s === "em" && e.appendChild && !u ? e : e.parentNode;
  if (k) {
    g = (e.ownerSVGElement || {}).parentNode;
  }
  if (!g || g === Tn || !g.appendChild) {
    g = Tn.body;
  }
  w = g._gsap;
  if (w && d && w.width && l && w.time === mt.time && !w.uncache) {
    return Ee(i / w.width * f);
  }
  if (d && (n === "height" || n === "width")) {
    var v = e.style[n];
    e.style[n] = f + s;
    m = e[c];
    if (v) {
      e.style[n] = v;
    } else {
      or(e, n);
    }
  } else {
    if ((d || o === "%") && !tv[qt(g, "display")]) {
      a.position = qt(e, "position");
    }
    if (g === e) {
      a.position = "static";
    }
    g.appendChild(Kn);
    m = Kn[c];
    g.removeChild(Kn);
    a.position = "absolute";
  }
  if (l && d) {
    w = Zn(g);
    w.time = mt.time;
    w.width = g[c];
  }
  return Ee(h ? m * i / f : m && i ? f / m * i : 0);
};
function nn(e, n, r, s) {
  var i;
  if (!Sl) {
    va();
  }
  if (n in Wt && n !== "transform") {
    n = Wt[n];
    if (~n.indexOf(",")) {
      n = n.split(",")[0];
    }
  }
  if (cn[n] && n !== "transform") {
    i = Ss(e, s);
    i = n !== "transformOrigin" ? i[n] : i.svg ? i.origin : Si(qt(e, at)) + " " + i.zOrigin + "px";
  } else {
    i = e.style[n];
    if (!i || i === "auto" || s || ~(i + "").indexOf("calc(")) {
      i = xi[n] && xi[n](e, n, r) || qt(e, n) || Wh(e, n) || (n === "opacity" ? 1 : 0);
    }
  }
  if (r && !~(i + "").trim().indexOf(" ")) {
    return Mn(e, n, i, r) + r;
  } else {
    return i;
  }
}
function nv(e, n, r, s) {
  if (!r || r === "none") {
    var i = Fr(n, e, 1);
    var o = i && qt(e, i, 1);
    if (o && o !== r) {
      n = i;
      r = o;
    } else if (n === "borderColor") {
      r = qt(e, "borderTopColor");
    }
  }
  var a = new ot(this._pt, e.style, n, 0, 1, vd);
  var l = 0;
  var u = 0;
  var c;
  var f;
  var h;
  var d;
  var m;
  var g;
  var w;
  var k;
  var v;
  var p;
  var _;
  var y;
  a.b = r;
  a.e = s;
  r += "";
  s += "";
  if (s === "auto") {
    g = e.style[n];
    e.style[n] = s;
    s = qt(e, n) || s;
    if (g) {
      e.style[n] = g;
    } else {
      or(e, n);
    }
  }
  c = [r, s];
  ud(c);
  r = c[0];
  s = c[1];
  h = r.match(br) || [];
  y = s.match(br) || [];
  if (y.length) {
    while (f = br.exec(s)) {
      w = f[0];
      v = s.substring(l, f.index);
      if (m) {
        m = (m + 1) % 5;
      } else if (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") {
        m = 1;
      }
      if (w !== (g = h[u++] || "")) {
        d = parseFloat(g) || 0;
        _ = g.substr((d + "").length);
        if (w.charAt(1) === "=") {
          w = Er(d, w) + _;
        }
        k = parseFloat(w);
        p = w.substr((k + "").length);
        l = br.lastIndex - p.length;
        if (!p) {
          p = p || yt.units[n] || _;
          if (l === s.length) {
            s += p;
            a.e += p;
          }
        }
        if (_ !== p) {
          d = Mn(e, n, g, p) || 0;
        }
        a._pt = {
          _next: a._pt,
          p: v || u === 1 ? v : ",",
          s: d,
          c: k - d,
          m: m && m < 4 || n === "zIndex" ? Math.round : 0
        };
      }
    }
    a.c = l < s.length ? s.substring(l, s.length) : "";
  } else {
    a.r = n === "display" && s === "none" ? xd : kd;
  }
  if (Hh.test(s)) {
    a.e = 0;
  }
  this._pt = a;
  return a;
}
var iu = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
};
function rv(e) {
  var n = e.split(" ");
  var r = n[0];
  var s = n[1] || "50%";
  if (r === "top" || r === "bottom" || s === "left" || s === "right") {
    e = r;
    r = s;
    s = e;
  }
  n[0] = iu[r] || r;
  n[1] = iu[s] || s;
  return n.join(" ");
}
function sv(e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var r = n.t;
    var s = r.style;
    var i = n.u;
    var o = r._gsap;
    var a;
    var l;
    var u;
    if (i === "all" || i === true) {
      s.cssText = "";
      l = 1;
    } else {
      i = i.split(",");
      u = i.length;
      while (--u > -1) {
        a = i[u];
        if (cn[a]) {
          l = 1;
          a = a === "transformOrigin" ? at : Te;
        }
        or(r, a);
      }
    }
    if (l) {
      or(r, Te);
      if (o) {
        if (o.svg) {
          r.removeAttribute("transform");
        }
        Ss(r, 1);
        o.uncache = 1;
        Sd(s);
      }
    }
  }
}
var xi = {
  clearProps: function (e, n, r, s, i) {
    if (i.data !== "isFromStart") {
      var o = e._pt = new ot(e._pt, n, r, 0, 0, sv);
      o.u = s;
      o.pr = -10;
      o.tween = i;
      e._props.push(r);
      return 1;
    }
  }
};
var xs = [1, 0, 0, 1, 0, 0];
var Od = {};
function Ad(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}
function ou(e) {
  var n = qt(e, Te);
  if (Ad(n)) {
    return xs;
  } else {
    return n.substr(7).match($h).map(Ee);
  }
}
function Pl(e, n) {
  var r = e._gsap || Zn(e);
  var s = e.style;
  var i = ou(e);
  var o;
  var a;
  var l;
  var u;
  if (r.svg && e.getAttribute("transform")) {
    l = e.transform.baseVal.consolidate().matrix;
    i = [l.a, l.b, l.c, l.d, l.e, l.f];
    if (i.join(",") === "1,0,0,1,0,0") {
      return xs;
    } else {
      return i;
    }
  } else {
    if (i === xs && !e.offsetParent && e !== Pr && !r.svg) {
      l = s.display;
      s.display = "block";
      o = e.parentNode;
      if (!o || !e.offsetParent) {
        u = 1;
        a = e.nextElementSibling;
        Pr.appendChild(e);
      }
      i = ou(e);
      if (l) {
        s.display = l;
      } else {
        or(e, "display");
      }
      if (u) {
        if (a) {
          o.insertBefore(e, a);
        } else if (o) {
          o.appendChild(e);
        } else {
          Pr.removeChild(e);
        }
      }
    }
    if (n && i.length > 6) {
      return [i[0], i[1], i[4], i[5], i[12], i[13]];
    } else {
      return i;
    }
  }
}
function wa(e, n, r, s, i, o) {
  var a = e._gsap;
  var l = i || Pl(e, true);
  var u = a.xOrigin || 0;
  var c = a.yOrigin || 0;
  var f = a.xOffset || 0;
  var h = a.yOffset || 0;
  var d = l[0];
  var m = l[1];
  var g = l[2];
  var w = l[3];
  var k = l[4];
  var v = l[5];
  var p = n.split(" ");
  var _ = parseFloat(p[0]) || 0;
  var y = parseFloat(p[1]) || 0;
  var S;
  var C;
  var E;
  var x;
  if (r) {
    if (l !== xs && (C = d * w - m * g)) {
      E = _ * (w / C) + y * (-g / C) + (g * v - w * k) / C;
      x = _ * (-m / C) + y * (d / C) - (d * v - m * k) / C;
      _ = E;
      y = x;
    }
  } else {
    S = Pd(e);
    _ = S.x + (~p[0].indexOf("%") ? _ / 100 * S.width : _);
    y = S.y + (~(p[1] || p[0]).indexOf("%") ? y / 100 * S.height : y);
  }
  if (s || s !== false && a.smooth) {
    k = _ - u;
    v = y - c;
    a.xOffset = f + (k * d + v * g) - k;
    a.yOffset = h + (k * m + v * w) - v;
  } else {
    a.xOffset = a.yOffset = 0;
  }
  a.xOrigin = _;
  a.yOrigin = y;
  a.smooth = !!s;
  a.origin = n;
  a.originIsAbsolute = !!r;
  e.style[at] = "0px 0px";
  if (o) {
    kn(o, a, "xOrigin", u, _);
    kn(o, a, "yOrigin", c, y);
    kn(o, a, "xOffset", f, a.xOffset);
    kn(o, a, "yOffset", h, a.yOffset);
  }
  e.setAttribute("data-svg-origin", _ + " " + y);
}
function Ss(e, n) {
  var r = e._gsap || new pd(e);
  if ("x" in r && !n && !r.uncache) {
    return r;
  }
  var s = e.style;
  var i = r.scaleX < 0;
  var o = "px";
  var a = "deg";
  var l = getComputedStyle(e);
  var u = qt(e, at) || "0";
  var c;
  var f;
  var h;
  var d;
  var m;
  var g;
  var w;
  var k;
  var v;
  var p;
  var _;
  var y;
  var S;
  var C;
  var E;
  var x;
  var R;
  var D;
  var O;
  var $;
  var Y;
  var J;
  var N;
  var j;
  var z;
  var _e;
  var et;
  var Ne;
  var xe;
  var Jt;
  var $e;
  var vt;
  c = f = h = g = w = k = v = p = _ = 0;
  d = m = 1;
  r.svg = !!e.getCTM && !!Rd(e);
  if (l.translate) {
    if (l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") {
      s[Te] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Te] !== "none" ? l[Te] : "");
    }
    s.scale = s.rotate = s.translate = "none";
  }
  C = Pl(e, r.svg);
  if (r.svg) {
    if (r.uncache) {
      z = e.getBBox();
      u = r.xOrigin - z.x + "px " + (r.yOrigin - z.y) + "px";
      j = "";
    } else {
      j = !n && e.getAttribute("data-svg-origin");
    }
    wa(e, j || u, !!j || r.originIsAbsolute, r.smooth !== false, C);
  }
  y = r.xOrigin || 0;
  S = r.yOrigin || 0;
  if (C !== xs) {
    D = C[0];
    O = C[1];
    $ = C[2];
    Y = C[3];
    c = J = C[4];
    f = N = C[5];
    if (C.length === 6) {
      d = Math.sqrt(D * D + O * O);
      m = Math.sqrt(Y * Y + $ * $);
      g = D || O ? hr(O, D) * qn : 0;
      v = $ || Y ? hr($, Y) * qn + g : 0;
      if (v) {
        m *= Math.abs(Math.cos(v * Rr));
      }
      if (r.svg) {
        c -= y - (y * D + S * $);
        f -= S - (y * O + S * Y);
      }
    } else {
      vt = C[6];
      Jt = C[7];
      et = C[8];
      Ne = C[9];
      xe = C[10];
      $e = C[11];
      c = C[12];
      f = C[13];
      h = C[14];
      E = hr(vt, xe);
      w = E * qn;
      if (E) {
        x = Math.cos(-E);
        R = Math.sin(-E);
        j = J * x + et * R;
        z = N * x + Ne * R;
        _e = vt * x + xe * R;
        et = J * -R + et * x;
        Ne = N * -R + Ne * x;
        xe = vt * -R + xe * x;
        $e = Jt * -R + $e * x;
        J = j;
        N = z;
        vt = _e;
      }
      E = hr(-$, xe);
      k = E * qn;
      if (E) {
        x = Math.cos(-E);
        R = Math.sin(-E);
        j = D * x - et * R;
        z = O * x - Ne * R;
        _e = $ * x - xe * R;
        $e = Y * R + $e * x;
        D = j;
        O = z;
        $ = _e;
      }
      E = hr(O, D);
      g = E * qn;
      if (E) {
        x = Math.cos(E);
        R = Math.sin(E);
        j = D * x + O * R;
        z = J * x + N * R;
        O = O * x - D * R;
        N = N * x - J * R;
        D = j;
        J = z;
      }
      if (w && Math.abs(w) + Math.abs(g) > 359.9) {
        w = g = 0;
        k = 180 - k;
      }
      d = Ee(Math.sqrt(D * D + O * O + $ * $));
      m = Ee(Math.sqrt(N * N + vt * vt));
      E = hr(J, N);
      v = Math.abs(E) > 0.0002 ? E * qn : 0;
      _ = $e ? 1 / ($e < 0 ? -$e : $e) : 0;
    }
    if (r.svg) {
      j = e.getAttribute("transform");
      r.forceCSS = e.setAttribute("transform", "") || !Ad(qt(e, Te));
      if (j) {
        e.setAttribute("transform", j);
      }
    }
  }
  if (Math.abs(v) > 90 && Math.abs(v) < 270) {
    if (i) {
      d *= -1;
      v += g <= 0 ? 180 : -180;
      g += g <= 0 ? 180 : -180;
    } else {
      m *= -1;
      v += v <= 0 ? 180 : -180;
    }
  }
  n = n || r.uncache;
  r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o;
  r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o;
  r.z = h + o;
  r.scaleX = Ee(d);
  r.scaleY = Ee(m);
  r.rotation = Ee(g) + a;
  r.rotationX = Ee(w) + a;
  r.rotationY = Ee(k) + a;
  r.skewX = v + a;
  r.skewY = p + a;
  r.transformPerspective = _ + o;
  if (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) {
    s[at] = Si(u);
  }
  r.xOffset = r.yOffset = 0;
  r.force3D = yt.force3D;
  r.renderTransform = r.svg ? ov : Ed ? Md : iv;
  r.uncache = 0;
  return r;
}
function Si(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}
function vo(e, n, r) {
  var s = Ve(n);
  return Ee(parseFloat(n) + parseFloat(Mn(e, "x", r + "px", s))) + s;
}
function iv(e, n) {
  n.z = "0px";
  n.rotationY = n.rotationX = "0deg";
  n.force3D = 0;
  Md(e, n);
}
var Un = "0deg";
var Gr = "0px";
var Vn = ") ";
function Md(e, n) {
  var r = n || this;
  var s = r.xPercent;
  var i = r.yPercent;
  var o = r.x;
  var a = r.y;
  var l = r.z;
  var u = r.rotation;
  var c = r.rotationY;
  var f = r.rotationX;
  var h = r.skewX;
  var d = r.skewY;
  var m = r.scaleX;
  var g = r.scaleY;
  var w = r.transformPerspective;
  var k = r.force3D;
  var v = r.target;
  var p = r.zOrigin;
  var _ = "";
  var y = k === "auto" && e && e !== 1 || k === true;
  if (p && (f !== Un || c !== Un)) {
    var S = parseFloat(c) * Rr;
    var C = Math.sin(S);
    var E = Math.cos(S);
    var x;
    S = parseFloat(f) * Rr;
    x = Math.cos(S);
    o = vo(v, o, C * x * -p);
    a = vo(v, a, -Math.sin(S) * -p);
    l = vo(v, l, E * x * -p + p);
  }
  if (w !== Gr) {
    _ += "perspective(" + w + Vn;
  }
  if (s || i) {
    _ += "translate(" + s + "%, " + i + "%) ";
  }
  if (y || o !== Gr || a !== Gr || l !== Gr) {
    _ += l !== Gr || y ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Vn;
  }
  if (u !== Un) {
    _ += "rotate(" + u + Vn;
  }
  if (c !== Un) {
    _ += "rotateY(" + c + Vn;
  }
  if (f !== Un) {
    _ += "rotateX(" + f + Vn;
  }
  if (h !== Un || d !== Un) {
    _ += "skew(" + h + ", " + d + Vn;
  }
  if (m !== 1 || g !== 1) {
    _ += "scale(" + m + ", " + g + Vn;
  }
  v.style[Te] = _ || "translate(0, 0)";
}
function ov(e, n) {
  var r = n || this;
  var s = r.xPercent;
  var i = r.yPercent;
  var o = r.x;
  var a = r.y;
  var l = r.rotation;
  var u = r.skewX;
  var c = r.skewY;
  var f = r.scaleX;
  var h = r.scaleY;
  var d = r.target;
  var m = r.xOrigin;
  var g = r.yOrigin;
  var w = r.xOffset;
  var k = r.yOffset;
  var v = r.forceCSS;
  var p = parseFloat(o);
  var _ = parseFloat(a);
  var y;
  var S;
  var C;
  var E;
  var x;
  l = parseFloat(l);
  u = parseFloat(u);
  c = parseFloat(c);
  if (c) {
    c = parseFloat(c);
    u += c;
    l += c;
  }
  if (l || u) {
    l *= Rr;
    u *= Rr;
    y = Math.cos(l) * f;
    S = Math.sin(l) * f;
    C = Math.sin(l - u) * -h;
    E = Math.cos(l - u) * h;
    if (u) {
      c *= Rr;
      x = Math.tan(u - c);
      x = Math.sqrt(1 + x * x);
      C *= x;
      E *= x;
      if (c) {
        x = Math.tan(c);
        x = Math.sqrt(1 + x * x);
        y *= x;
        S *= x;
      }
    }
    y = Ee(y);
    S = Ee(S);
    C = Ee(C);
    E = Ee(E);
  } else {
    y = f;
    E = h;
    S = C = 0;
  }
  if (p && !~(o + "").indexOf("px") || _ && !~(a + "").indexOf("px")) {
    p = Mn(d, "x", o, "px");
    _ = Mn(d, "y", a, "px");
  }
  if (m || g || w || k) {
    p = Ee(p + m - (m * y + g * C) + w);
    _ = Ee(_ + g - (m * S + g * E) + k);
  }
  if (s || i) {
    x = d.getBBox();
    p = Ee(p + s / 100 * x.width);
    _ = Ee(_ + i / 100 * x.height);
  }
  x = "matrix(" + y + "," + S + "," + C + "," + E + "," + p + "," + _ + ")";
  d.setAttribute("transform", x);
  if (v) {
    d.style[Te] = x;
  }
}
function av(e, n, r, s, i) {
  var o = 360;
  var a = Ie(i);
  var l = parseFloat(i) * (a && ~i.indexOf("rad") ? qn : 1);
  var u = l - s;
  var c = s + u + "deg";
  var f;
  var h;
  if (a) {
    f = i.split("_")[1];
    if (f === "short") {
      u %= o;
      if (u !== u % (o / 2)) {
        u += u < 0 ? o : -o;
      }
    }
    if (f === "cw" && u < 0) {
      u = (u + o * tu) % o - ~~(u / o) * o;
    } else if (f === "ccw" && u > 0) {
      u = (u - o * tu) % o - ~~(u / o) * o;
    }
  }
  e._pt = h = new ot(e._pt, n, r, s, u, zb);
  h.e = c;
  h.u = "deg";
  e._props.push(r);
  return h;
}
function au(e, n) {
  for (var r in n) {
    e[r] = n[r];
  }
  return e;
}
function lv(e, n, r) {
  var s = au({}, r._gsap);
  var i = "perspective,force3D,transformOrigin,svgOrigin";
  var o = r.style;
  var a;
  var l;
  var u;
  var c;
  var f;
  var h;
  var d;
  var m;
  if (s.svg) {
    u = r.getAttribute("transform");
    r.setAttribute("transform", "");
    o[Te] = n;
    a = Ss(r, 1);
    or(r, Te);
    r.setAttribute("transform", u);
  } else {
    u = getComputedStyle(r)[Te];
    o[Te] = n;
    a = Ss(r, 1);
    o[Te] = u;
  }
  for (l in cn) {
    u = s[l];
    c = a[l];
    if (u !== c && i.indexOf(l) < 0) {
      d = Ve(u);
      m = Ve(c);
      f = d !== m ? Mn(r, l, u, m) : parseFloat(u);
      h = parseFloat(c);
      e._pt = new ot(e._pt, a, l, f, h - f, ya);
      e._pt.u = m || 0;
      e._props.push(l);
    }
  }
  au(a, s);
}
it("padding,margin,Width,Radius", function (t, e) {
  var n = "Top";
  var r = "Right";
  var s = "Bottom";
  var i = "Left";
  var o = (e < 3 ? [n, r, s, i] : [n + i, n + r, s + r, s + i]).map(function (a) {
    if (e < 2) {
      return t + a;
    } else {
      return "border" + a + t;
    }
  });
  xi[e > 1 ? "border" + t : t] = function (a, l, u, c, f) {
    var h;
    var d;
    if (arguments.length < 4) {
      h = o.map(function (m) {
        return nn(a, m, u);
      });
      d = h.join(" ");
      if (d.split(h[0]).length === 5) {
        return h[0];
      } else {
        return d;
      }
    }
    h = (c + "").split(" ");
    d = {};
    o.forEach(function (m, g) {
      return d[m] = h[g] = h[g] || h[(g - 1) / 2 | 0];
    });
    a.init(l, d, f);
  };
});
var Id = {
  name: "css",
  register: va,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, s, i) {
    var o = this._props;
    var a = e.style;
    var l = r.vars.startAt;
    var u;
    var c;
    var f;
    var h;
    var d;
    var m;
    var g;
    var w;
    var k;
    var v;
    var p;
    var _;
    var y;
    var S;
    var C;
    var E;
    if (!Sl) {
      va();
    }
    this.styles = this.styles || Cd(e);
    E = this.styles.props;
    this.tween = r;
    for (g in n) {
      if (g !== "autoRound" && (c = n[g], !dt[g] || !gd(g, n, r, s, e, i))) {
        d = typeof c;
        m = xi[g];
        if (d === "function") {
          c = c.call(r, s, e, i);
          d = typeof c;
        }
        if (d === "string" && ~c.indexOf("random(")) {
          c = ws(c);
        }
        if (m) {
          if (m(this, e, g, c, r)) {
            C = 1;
          }
        } else if (g.substr(0, 2) === "--") {
          u = (getComputedStyle(e).getPropertyValue(g) + "").trim();
          c += "";
          Rn.lastIndex = 0;
          if (!Rn.test(u)) {
            w = Ve(u);
            k = Ve(c);
          }
          if (k) {
            if (w !== k) {
              u = Mn(e, g, u, k) + k;
            }
          } else if (w) {
            c += w;
          }
          this.add(a, "setProperty", u, c, s, i, 0, 0, g);
          o.push(g);
          E.push(g, 0, a[g]);
        } else if (d !== "undefined") {
          if (l && g in l) {
            u = typeof l[g] == "function" ? l[g].call(r, s, e, i) : l[g];
            if (Ie(u) && ~u.indexOf("random(")) {
              u = ws(u);
            }
            if (!Ve(u + "") && u !== "auto") {
              u += yt.units[g] || Ve(nn(e, g)) || "";
            }
            if ((u + "").charAt(1) === "=") {
              u = nn(e, g);
            }
          } else {
            u = nn(e, g);
          }
          h = parseFloat(u);
          v = d === "string" && c.charAt(1) === "=" && c.substr(0, 2);
          if (v) {
            c = c.substr(2);
          }
          f = parseFloat(c);
          if (g in Wt) {
            if (g === "autoAlpha") {
              if (h === 1 && nn(e, "visibility") === "hidden" && f) {
                h = 0;
              }
              E.push("visibility", 0, a.visibility);
              kn(this, a, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f);
            }
            if (g !== "scale" && g !== "transform") {
              g = Wt[g];
              if (~g.indexOf(",")) {
                g = g.split(",")[0];
              }
            }
          }
          p = g in cn;
          if (p) {
            this.styles.save(g);
            if (!_) {
              y = e._gsap;
              if (!y.renderTransform || !!n.parseTransform) {
                Ss(e, n.parseTransform);
              }
              S = n.smoothOrigin !== false && y.smooth;
              _ = this._pt = new ot(this._pt, a, Te, 0, 1, y.renderTransform, y, 0, -1);
              _.dep = 1;
            }
            if (g === "scale") {
              this._pt = new ot(this._pt, y, "scaleY", y.scaleY, (v ? Er(y.scaleY, v + f) : f) - y.scaleY || 0, ya);
              this._pt.u = 0;
              o.push("scaleY", g);
              g += "X";
            } else if (g === "transformOrigin") {
              E.push(at, 0, a[at]);
              c = rv(c);
              if (y.svg) {
                wa(e, c, 0, S, 0, this);
              } else {
                k = parseFloat(c.split(" ")[2]) || 0;
                if (k !== y.zOrigin) {
                  kn(this, y, "zOrigin", y.zOrigin, k);
                }
                kn(this, a, g, Si(u), Si(c));
              }
              continue;
            } else if (g === "svgOrigin") {
              wa(e, c, 1, S, 0, this);
              continue;
            } else if (g in Od) {
              av(this, y, g, h, v ? Er(h, v + c) : c);
              continue;
            } else if (g === "smoothOrigin") {
              kn(this, y, "smooth", y.smooth, c);
              continue;
            } else if (g === "force3D") {
              y[g] = c;
              continue;
            } else if (g === "transform") {
              lv(this, c, e);
              continue;
            }
          } else if (!(g in a)) {
            g = Fr(g) || g;
          }
          if (p || (f || f === 0) && (h || h === 0) && !Vb.test(c) && g in a) {
            w = (u + "").substr((h + "").length);
            f ||= 0;
            k = Ve(c) || (g in yt.units ? yt.units[g] : w);
            if (w !== k) {
              h = Mn(e, g, u, k);
            }
            this._pt = new ot(this._pt, p ? y : a, g, h, (v ? Er(h, v + f) : f) - h, !p && (k === "px" || g === "zIndex") && n.autoRound !== false ? Gb : ya);
            this._pt.u = k || 0;
            if (w !== k && k !== "%") {
              this._pt.b = u;
              this._pt.r = Wb;
            }
          } else if (g in a) {
            nv.call(this, e, g, u, v ? v + c : c);
          } else if (g in e) {
            this.add(e, g, u || e[g], v ? v + c : c, s, i);
          } else if (g !== "parseTransform") {
            ml(g, c);
            continue;
          }
          if (!p) {
            if (g in a) {
              E.push(g, 0, a[g]);
            } else {
              E.push(g, 1, u || e[g]);
            }
          }
          o.push(g);
        }
      }
    }
    if (C) {
      wd(this);
    }
  },
  render: function (e, n) {
    if (n.tween._time || !Cl()) {
      for (var r = n._pt; r;) {
        r.r(e, r.d);
        r = r._next;
      }
    } else {
      n.styles.revert();
    }
  },
  get: nn,
  aliases: Wt,
  getSetter: function (e, n, r) {
    var s = Wt[n];
    if (s && s.indexOf(",") < 0) {
      n = s;
    }
    if (n in cn && n !== at && (e._gsap.x || nn(e, "x"))) {
      if (r && eu === r) {
        if (n === "scale") {
          return Xb;
        } else {
          return Yb;
        }
      } else {
        return (eu = r || {}) && (n === "scale" ? Jb : Qb);
      }
    } else if (e.style && !dl(e.style[n])) {
      return qb;
    } else if (~n.indexOf("-")) {
      return Kb;
    } else {
      return kl(e, n);
    }
  },
  core: {
    _removeProperty: or,
    _getMatrix: Pl
  }
};
lt.utils.checkPrefix = Fr;
lt.core.getStyleSaver = Cd;
(function (t, e, n, r) {
  var s = it(t + "," + e + "," + n, function (i) {
    cn[i] = 1;
  });
  it(e, function (i) {
    yt.units[i] = "deg";
    Od[i] = 1;
  });
  Wt[s[13]] = t + "," + e;
  it(r, function (i) {
    var o = i.split(":");
    Wt[o[1]] = s[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
  yt.units[t] = "px";
});
lt.registerPlugin(Id);
var Vi = lt.registerPlugin(Id) || lt;
Vi.core.Tween;
const cv = false; /*!
                  * pinia v2.2.4
                  * (c) 2024 Eduardo San Martin Morote
                  * @license MIT
                  */
let Ld;
const Ls = t => Ld = t;
const Bd = Symbol();
function Ta(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var us;
(function (t) {
  t.direct = "direct";
  t.patchObject = "patch object";
  t.patchFunction = "patch function";
})(us ||= {});
function uv() {
  const t = Ma(true);
  const e = t.run(() => We({}));
  let n = [];
  let r = [];
  const s = Fa({
    install(i) {
      Ls(s);
      s._a = i;
      i.provide(Bd, s);
      i.config.globalProperties.$pinia = s;
      r.forEach(o => n.push(o));
      r = [];
    },
    use(i) {
      if (!this._a && !cv) {
        r.push(i);
      } else {
        n.push(i);
      }
      return this;
    },
    _p: n,
    _a: null,
    _e: t,
    _s: new Map(),
    state: e
  });
  return s;
}
const Dd = () => {};
function lu(t, e, n, r = Dd) {
  t.push(e);
  const s = () => {
    const i = t.indexOf(e);
    if (i > -1) {
      t.splice(i, 1);
      r();
    }
  };
  if (!n && Mi()) {
    xo(s);
  }
  return s;
}
function dr(t, ...e) {
  t.slice().forEach(n => {
    n(...e);
  });
}
const fv = t => t();
const cu = Symbol();
const wo = Symbol();
function ka(t, e) {
  if (t instanceof Map && e instanceof Map) {
    e.forEach((n, r) => t.set(r, n));
  } else if (t instanceof Set && e instanceof Set) {
    e.forEach(t.add, t);
  }
  for (const n in e) {
    if (!e.hasOwnProperty(n)) {
      continue;
    }
    const r = e[n];
    const s = t[n];
    if (Ta(s) && Ta(r) && t.hasOwnProperty(n) && !Ce(r) && !on(r)) {
      t[n] = ka(s, r);
    } else {
      t[n] = r;
    }
  }
  return t;
}
const hv = Symbol();
function dv(t) {
  return !Ta(t) || !t.hasOwnProperty(hv);
}
const {
  assign: pn
} = Object;
function pv(t) {
  return !!Ce(t) && !!t.effect;
}
function gv(t, e, n, r) {
  const {
    state: s,
    actions: i,
    getters: o
  } = e;
  const a = n.state.value[t];
  let l;
  function u() {
    if (!a) {
      n.state.value[t] = s ? s() : {};
    }
    const c = kp(n.state.value[t]);
    return pn(c, i, Object.keys(o || {}).reduce((f, h) => {
      f[h] = Fa(gt(() => {
        Ls(n);
        const d = n._s.get(t);
        return o[h].call(d, d);
      }));
      return f;
    }, {}));
  }
  l = Nd(t, u, e, n, r, true);
  return l;
}
function Nd(t, e, n = {}, r, s, i) {
  let o;
  const a = pn({
    actions: {}
  }, n);
  const l = {
    deep: true
  };
  let u;
  let c;
  let f = [];
  let h = [];
  let d;
  const m = r.state.value[t];
  if (!i && !m) {
    r.state.value[t] = {};
  }
  We({});
  let g;
  function w(E) {
    let x;
    u = c = false;
    if (typeof E == "function") {
      E(r.state.value[t]);
      x = {
        type: us.patchFunction,
        storeId: t,
        events: d
      };
    } else {
      ka(r.state.value[t], E);
      x = {
        type: us.patchObject,
        payload: E,
        storeId: t,
        events: d
      };
    }
    const R = g = Symbol();
    Ht().then(() => {
      if (g === R) {
        u = true;
      }
    });
    c = true;
    dr(f, x, r.state.value[t]);
  }
  const k = i ? function () {
    const {
      state: x
    } = n;
    const R = x ? x() : {};
    this.$patch(D => {
      pn(D, R);
    });
  } : Dd;
  function v() {
    o.stop();
    f = [];
    h = [];
    r._s.delete(t);
  }
  const p = (E, x = "") => {
    if (cu in E) {
      E[wo] = x;
      return E;
    }
    const R = function () {
      Ls(r);
      const D = Array.from(arguments);
      const O = [];
      const $ = [];
      function Y(j) {
        O.push(j);
      }
      function J(j) {
        $.push(j);
      }
      dr(h, {
        args: D,
        name: R[wo],
        store: y,
        after: Y,
        onError: J
      });
      let N;
      try {
        N = E.apply(this && this.$id === t ? this : y, D);
      } catch (j) {
        dr($, j);
        throw j;
      }
      if (N instanceof Promise) {
        return N.then(j => {
          dr(O, j);
          return j;
        }).catch(j => {
          dr($, j);
          return Promise.reject(j);
        });
      } else {
        dr(O, N);
        return N;
      }
    };
    R[cu] = true;
    R[wo] = x;
    return R;
  };
  const _ = {
    _p: r,
    $id: t,
    $onAction: lu.bind(null, h),
    $patch: w,
    $reset: k,
    $subscribe(E, x = {}) {
      const R = lu(f, E, x.detached, () => D());
      const D = o.run(() => En(() => r.state.value[t], O => {
        if (x.flush === "sync" ? c : u) {
          E({
            storeId: t,
            type: us.direct,
            events: d
          }, O);
        }
      }, pn({}, l, x)));
      return R;
    },
    $dispose: v
  };
  const y = Yt(_);
  r._s.set(t, y);
  const C = (r._a && r._a.runWithContext || fv)(() => r._e.run(() => (o = Ma()).run(() => e({
    action: p
  }))));
  for (const E in C) {
    const x = C[E];
    if (Ce(x) && !pv(x) || on(x)) {
      if (!i) {
        if (m && dv(x)) {
          if (Ce(x)) {
            x.value = m[E];
          } else {
            ka(x, m[E]);
          }
        }
        r.state.value[t][E] = x;
      }
    } else if (typeof x == "function") {
      const R = p(x, E);
      C[E] = R;
      a.actions[E] = x;
    }
  }
  pn(y, C);
  pn(re(y), C);
  Object.defineProperty(y, "$state", {
    get: () => r.state.value[t],
    set: E => {
      w(x => {
        pn(x, E);
      });
    }
  });
  r._p.forEach(E => {
    pn(y, o.run(() => E({
      store: y,
      app: r._a,
      pinia: r,
      options: a
    })));
  });
  if (m && i && n.hydrate) {
    n.hydrate(y.$state, m);
  }
  u = true;
  c = true;
  return y;
}
function mv(t, e, n) {
  let r;
  let s;
  const i = typeof e == "function";
  r = t;
  s = i ? n : e;
  function o(a, l) {
    const u = Ka();
    a = a || (u ? De(Bd, null) : null);
    if (a) {
      Ls(a);
    }
    a = Ld;
    if (!a._s.has(r)) {
      if (i) {
        Nd(r, e, s, a);
      } else {
        gv(r, s, a);
      }
    }
    return a._s.get(r);
  }
  o.$id = r;
  return o;
}
const In = mv("app", {
  state: () => ({
    notification: 0,
    loader: 1,
    loading: 1,
    cursor: 0,
    navigation: 0,
    navigationActive: 0,
    categories: 0,
    categoriesNext: 0,
    category: 0,
    cases: [],
    case: 0,
    windowSize: {
      width: 0,
      height: 0
    },
    gallery: 0,
    galleryInstructions: 1,
    player: 0,
    popstate: 0,
    transition: 0,
    scrollCase: 0,
    scrollCategories: 0,
    isTouch: 0,
    pageTo: 0,
    pageFrom: 0
  }),
  actions: {
    setNotification(t) {
      this.notification = t;
    },
    setLoader(t) {
      this.loader = t;
    },
    setLoading(t) {
      this.loading = t;
    },
    setCursor(t) {
      this.cursor = t;
    },
    setNavigation(t) {
      this.navigation = t;
    },
    setNavigationActive(t) {
      this.navigationActive = t;
    },
    setCategories(t) {
      this.categories = t;
    },
    setCategoriesNext(t) {
      this.categoriesNext = t;
    },
    setCategory(t) {
      this.category = t;
    },
    setCases(t) {
      this.cases.push(t);
    },
    setCase(t) {
      this.case = t;
    },
    setWindowSize(t) {
      this.windowSize = t;
    },
    setGallery(t) {
      this.gallery = t;
    },
    setGalleryInstructions(t) {
      this.galleryInstructions = t;
    },
    setPlayer(t) {
      this.player = t;
    },
    setPopstate(t) {
      this.popstate = t;
    },
    setTransition(t) {
      this.transition = t;
    },
    setScrollCase(t) {
      this.scrollCase = t;
    },
    setScrollCategories(t) {
      this.scrollCategories = t;
    },
    setTouch(t) {
      this.isTouch = t;
    },
    setPageTo(t) {
      this.pageTo = t;
    },
    setPageFrom(t) {
      this.pageFrom = t;
    }
  }
});
const _v = {
  middleware: "page-transition",
  pageTransition: {
    css: false,
    mode: "",
    onEnter: (t, e) => {
      const n = In();
      const {
        callHook: r
      } = ie();
      Ht(() => {
        if (n.transition.type === "case-slide") {
          r("case:enterCase", t, e);
        } else if (n.transition.type === "categories-case") {
          r("case:enterCategories", t, e);
        } else {
          r("case:enter", t, e);
        }
      });
    },
    onLeave: (t, e) => {
      const n = In();
      Vi.delayedCall(n.popstate ? 0 : 1, e);
    }
  }
};
const yv = {
  middleware: "page-transition",
  pageTransition: {
    css: false,
    mode: "",
    onEnter: (t, e) => {
      const n = In();
      const {
        callHook: r
      } = ie();
      Ht(() => {
        if (n.transition.type === "case-categories") {
          r("categories:enterCase");
        }
        e();
      });
    },
    onLeave: (t, e) => {
      const n = In();
      const {
        callHook: r
      } = ie();
      if (n.transition.type === "categories-case") {
        r("categories:leaveCase");
      }
      Vi.delayedCall(n.popstate ? 0 : 1, e);
    }
  }
};
const bv = {
  middleware: "page-transition",
  pageTransition: {
    css: false,
    mode: "",
    onEnter: (t, e) => {
      const n = In();
      const {
        callHook: r
      } = ie();
      Ht(() => {
        r("about:enter", t, e);
        r("aboutOtto:enter");
        const s = n.pageFrom.name;
        if (s === "index" || s === "slug") {
          r("categories:leave");
        }
      });
    },
    onLeave: (t, e) => {
      const n = In();
      const {
        callHook: r
      } = ie();
      r("about:leave", t, e);
      const s = n.pageTo.name;
      if (s === "index" || s === "slug") {
        r("categories:enter");
      }
    }
  }
};
const vv = {
  middleware: "page-transition",
  pageTransition: {
    css: false,
    mode: "",
    onEnter: (t, e) => {
      const n = In();
      const {
        callHook: r
      } = ie();
      Ht(() => {
        if (n.transition.type === "case-categories") {
          r("categories:enterCase");
        }
        e();
      });
    },
    onLeave: (t, e) => {
      const n = In();
      const {
        callHook: r
      } = ie();
      if (n.transition.type === "categories-case") {
        r("categories:leaveCase");
      }
      Vi.delayedCall(n.popstate ? 0 : 1, e);
    }
  }
};
const To = [{
  name: "group-slug",
  path: "/:group()/:slug()",
  meta: _v || {},
  component: () => Lt(() => import("./ljBm_VCx.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), import.meta.url),
  children: [{
    name: "group-slug-gallery",
    path: "gallery",
    component: () => Lt(() => import("./C-KK0D4N.js"), [], import.meta.url)
  }, {
    name: "group-slug-player",
    path: "player",
    component: () => Lt(() => import("./BYKN7Fzr.js"), [], import.meta.url)
  }]
}, {
  name: "slug",
  path: "/:slug()",
  meta: yv || {},
  component: () => Lt(() => import("./DhJ1f8NJ.js"), __vite__mapDeps([10, 2, 3, 1, 4, 7, 8]), import.meta.url)
}, {
  name: "about",
  path: "/about",
  meta: bv || {},
  component: () => Lt(() => import("./Chp71_0j.js"), __vite__mapDeps([11, 1, 5, 3, 7, 8, 12]), import.meta.url)
}, {
  name: "index",
  path: "/",
  meta: vv || {},
  component: () => Lt(() => import("./CP5oUK0P.js"), __vite__mapDeps([13, 2, 3, 1, 4, 7, 8]), import.meta.url)
}];
const $d = (t, e, n) => {
  e = e === true ? {} : e;
  return {
    default: () => {
      var r;
      if (e) {
        return ze(t, e, n);
      } else if ((r = n.default) == null) {
        return undefined;
      } else {
        return r.call(n);
      }
    }
  };
};
function uu(t) {
  const e = (t == null ? undefined : t.meta.key) ?? t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
    var r;
    return ((r = t.params[n.slice(1)]) == null ? undefined : r.toString()) || "";
  });
  if (typeof e == "function") {
    return e(t);
  } else {
    return e;
  }
}
function wv(t, e) {
  if (t === e || e === It) {
    return false;
  } else if (uu(t) !== uu(e)) {
    return true;
  } else {
    return !t.matched.every((r, s) => {
      var i;
      var o;
      return r.components && r.components.default === ((o = (i = e.matched[s]) == null ? undefined : i.components) == null ? undefined : o.default);
    });
  }
}
const Tv = {
  scrollBehavior(t, e, n) {
    var u;
    const r = ie();
    const s = ((u = Ot().options) == null ? undefined : u.scrollBehaviorType) ?? "auto";
    let i = n || undefined;
    const o = typeof t.meta.scrollToTop == "function" ? t.meta.scrollToTop(t, e) : t.meta.scrollToTop;
    if (!i && e && t && o !== false && wv(t, e)) {
      i = {
        left: 0,
        top: 0
      };
    }
    if (t.path === e.path) {
      if (e.hash && !t.hash) {
        return {
          left: 0,
          top: 0
        };
      } else if (t.hash) {
        return {
          el: t.hash,
          top: fu(t.hash),
          behavior: s
        };
      } else {
        return false;
      }
    }
    const a = c => !!(c.meta.pageTransition ?? qo);
    const l = a(e) && a(t) ? "page:transition:finish" : "page:finish";
    return new Promise(c => {
      r.hooks.hookOnce(l, async () => {
        await new Promise(f => setTimeout(f, 0));
        if (t.hash) {
          i = {
            el: t.hash,
            top: fu(t.hash),
            behavior: s
          };
        }
        c(i);
      });
    });
  }
};
function fu(t) {
  try {
    const e = document.querySelector(t);
    if (e) {
      return (Number.parseFloat(getComputedStyle(e).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
    }
  } catch {}
  return 0;
}
const kv = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const kt = {
  ...kv,
  ...Tv
};
const xv = async t => {
  var l;
  let e;
  let n;
  if ((l = t.meta) == null || !l.validate) {
    return;
  }
  const r = ie();
  const s = Ot();
  [e, n] = Cr(() => Promise.resolve(t.meta.validate(t)));
  e = await e;
  n();
  const i = e;
  if (i === true) {
    return;
  }
  const o = Ms({
    statusCode: i && i.statusCode || 404,
    statusMessage: i && i.statusMessage || `Page Not Found: ${t.fullPath}`,
    data: {
      path: t.fullPath
    }
  });
  const a = s.beforeResolve(u => {
    a();
    if (u === t) {
      const c = s.afterEach(async () => {
        c();
        await r.runWithContext(() => yr(o));
        if (window != null) {
          window.history.pushState({}, "", t.fullPath);
        }
      });
      return false;
    }
  });
};
const Sv = async t => {
  let e;
  let n;
  [e, n] = Cr(() => al(t.path));
  e = await e;
  n();
  const r = e;
  if (r.redirect) {
    if (lr(r.redirect, {
      acceptRelative: true
    })) {
      window.location.href = r.redirect;
      return false;
    } else {
      return r.redirect;
    }
  }
};
const Cv = [xv, Sv];
const fs = {
  "page-transition": () => Lt(() => import("./DhDG5sPG.js"), [], import.meta.url)
};
function Ev(t, e, n) {
  const {
    pathname: r,
    search: s,
    hash: i
  } = e;
  const o = t.indexOf("#");
  if (o > -1) {
    const u = i.includes(t.slice(o)) ? t.slice(o).length : 1;
    let c = i.slice(u);
    if (c[0] !== "/") {
      c = "/" + c;
    }
    return hc(c, "");
  }
  const a = hc(r, t);
  const l = !n || Vm(a, n, {
    trailingSlash: true
  }) ? a : n;
  return l + (l.includes("?") ? "" : s) + i;
}
const Pv = Ze({
  name: "nuxt:router",
  enforce: "pre",
  async setup(t) {
    var w;
    let e;
    let n;
    let r = Dn().app.baseURL;
    if (kt.hashMode && !r.includes("#")) {
      r += "#";
    }
    const s = ((w = kt.history) == null ? undefined : w.call(kt, r)) ?? (kt.hashMode ? b0(r) : Rh(r));
    const i = kt.routes ? ([e, n] = Cr(() => kt.routes(To)), e = await e, n(), e ?? To) : To;
    let o;
    const a = U0({
      ...kt,
      scrollBehavior: (k, v, p) => {
        if (v === It) {
          o = p;
          return;
        }
        if (kt.scrollBehavior) {
          a.options.scrollBehavior = kt.scrollBehavior;
          if ("scrollRestoration" in window.history) {
            const _ = a.beforeEach(() => {
              _();
              window.history.scrollRestoration = "manual";
            });
          }
          return kt.scrollBehavior(k, It, o || p);
        }
      },
      history: s,
      routes: i
    });
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
    t.vueApp.use(a);
    const l = Or(a.currentRoute.value);
    a.afterEach((k, v) => {
      l.value = v;
    });
    Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
      get: () => l.value
    });
    const u = Ev(r, window.location, t.payload.path);
    const c = Or(a.currentRoute.value);
    const f = () => {
      c.value = a.currentRoute.value;
    };
    t.hook("page:finish", f);
    a.afterEach((k, v) => {
      var p;
      var _;
      var y;
      var S;
      if (((_ = (p = k.matched[0]) == null ? undefined : p.components) == null ? undefined : _.default) === ((S = (y = v.matched[0]) == null ? undefined : y.components) == null ? undefined : S.default)) {
        f();
      }
    });
    const h = {};
    for (const k in c.value) {
      Object.defineProperty(h, k, {
        get: () => c.value[k],
        enumerable: true
      });
    }
    t._route = sn(h);
    t._middleware = t._middleware || {
      global: [],
      named: {}
    };
    const d = Ni();
    a.afterEach(async (k, v, p) => {
      delete t._processingMiddleware;
      if (!t.isHydrating && d.value) {
        await t.runWithContext(j_);
      }
      if (p) {
        await t.callHook("page:loading:end");
      }
      if (k.matched.length === 0) {
        await t.runWithContext(() => yr(Xo({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${k.fullPath}`,
          data: {
            path: k.fullPath
          }
        })));
      }
    });
    try {
      [e, n] = Cr(() => a.isReady());
      await e;
      n();
    } catch (k) {
      [e, n] = Cr(() => t.runWithContext(() => yr(k)));
      await e;
      n();
    }
    const m = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
    f();
    const g = t.payload.state._layout;
    a.beforeEach(async (k, v) => {
      var p;
      await t.callHook("page:loading:start");
      k.meta = Yt(k.meta);
      if (t.isHydrating && g && !On(k.meta.layout)) {
        k.meta.layout = g;
      }
      t._processingMiddleware = true;
      {
        const _ = new Set([...Cv, ...t._middleware.global]);
        for (const y of k.matched) {
          const S = y.meta.middleware;
          if (S) {
            for (const C of fl(S)) {
              _.add(C);
            }
          }
        }
        {
          const y = await t.runWithContext(() => al(k.path));
          if (y.appMiddleware) {
            for (const S in y.appMiddleware) {
              if (y.appMiddleware[S]) {
                _.add(S);
              } else {
                _.delete(S);
              }
            }
          }
        }
        for (const y of _) {
          const S = typeof y == "string" ? t._middleware.named[y] || (await ((p = fs[y]) == null ? undefined : p.call(fs).then(E => E.default || E))) : y;
          if (!S) {
            throw new Error(`Unknown route middleware: '${y}'.`);
          }
          const C = await t.runWithContext(() => S(k, v));
          if (!t.payload.serverRendered && t.isHydrating && (C === false || C instanceof Error)) {
            const E = C || Xo({
              statusCode: 404,
              statusMessage: `Page Not Found: ${u}`
            });
            await t.runWithContext(() => yr(E));
            return false;
          }
          if (C !== true && (C || C === false)) {
            return C;
          }
        }
      }
    });
    a.onError(async () => {
      delete t._processingMiddleware;
      await t.callHook("page:loading:end");
    });
    t.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in m) {
          m.name = undefined;
        }
        await a.replace({
          ...m,
          force: true
        });
        a.options.scrollBehavior = kt.scrollBehavior;
      } catch (k) {
        await t.runWithContext(() => yr(k));
      }
    });
    return {
      provide: {
        router: a
      }
    };
  }
});
const hu = globalThis.requestIdleCallback || (t => {
  const e = Date.now();
  const n = {
    didTimeout: false,
    timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
  };
  return setTimeout(() => {
    t(n);
  }, 1);
});
const $1 = globalThis.cancelIdleCallback || (t => {
  clearTimeout(t);
});
const zi = t => {
  const e = ie();
  if (e.isHydrating) {
    e.hooks.hookOnce("app:suspense:resolve", () => {
      hu(() => t());
    });
  } else {
    hu(() => t());
  }
};
const Rv = Ze({
  name: "nuxt:payload",
  setup(t) {
    Ot().beforeResolve(async (e, n) => {
      if (e.path === n.path) {
        return;
      }
      const r = await Cc(e.path);
      if (r) {
        Object.assign(t.static.data, r.data);
      }
    });
    zi(() => {
      var e;
      t.hooks.hook("link:prefetch", async n => {
        const {
          hostname: r
        } = new URL(n, window.location.href);
        if (r === window.location.hostname) {
          await Cc(n);
        }
      });
      if (((e = navigator.connection) == null ? undefined : e.effectiveType) !== "slow-2g") {
        setTimeout($i, 1000);
      }
    });
  }
});
const Ov = Ze(() => {
  const t = Ot();
  zi(() => {
    t.beforeResolve(async () => {
      await new Promise(e => {
        setTimeout(e, 100);
        requestAnimationFrame(() => {
          setTimeout(e, 0);
        });
      });
    });
  });
});
const Av = Ze(t => {
  let e;
  async function n() {
    const r = await $i();
    if (e) {
      clearTimeout(e);
    }
    e = setTimeout(n, _c);
    try {
      const s = await $fetch(`${ol("builds/latest.json")}?${Date.now()}`);
      if (s.id !== r.id) {
        t.hooks.callHook("app:manifest:update", s);
      }
    } catch {}
  }
  zi(() => {
    e = setTimeout(n, _c);
  });
});
function Mv(t = {}) {
  const e = t.path || window.location.pathname;
  let n = {};
  try {
    n = hi(sessionStorage.getItem("nuxt:reload") || "{}");
  } catch {}
  if (t.force || (n == null ? undefined : n.path) !== e || (n == null ? undefined : n.expires) < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({
        path: e,
        expires: Date.now() + (t.ttl ?? 10000)
      }));
    } catch {}
    if (t.persistState) {
      try {
        sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
          state: ie().payload.state
        }));
      } catch {}
    }
    if (window.location.pathname !== e) {
      window.location.href = e;
    } else {
      window.location.reload();
    }
  }
}
const Iv = Ze({
  name: "nuxt:chunk-reload",
  setup(t) {
    const e = Ot();
    const n = Dn();
    const r = new Set();
    e.beforeEach(() => {
      r.clear();
    });
    t.hook("app:chunkError", ({
      error: i
    }) => {
      r.add(i);
    });
    function s(i) {
      const a = "href" in i && i.href[0] === "#" ? n.app.baseURL + i.href : il(n.app.baseURL, i.fullPath);
      Mv({
        path: a,
        persistState: true
      });
    }
    t.hook("app:manifest:update", () => {
      e.beforeResolve(s);
    });
    e.onError((i, o) => {
      if (r.has(i)) {
        s(o);
      }
    });
  }
});
const Lv = t => t === "defer" || t === false;
function H1(...t) {
  var g;
  const e = typeof t[t.length - 1] == "string" ? t.pop() : undefined;
  if (typeof t[0] != "string") {
    t.unshift(e);
  }
  let [n, r, s = {}] = t;
  if (typeof n != "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof r != "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const i = ie();
  const o = r;
  const a = () => _r.value;
  const l = () => i.isHydrating ? i.payload.data[n] : i.static.data[n];
  s.server = s.server ?? true;
  s.default = s.default ?? a;
  s.getCachedData = s.getCachedData ?? l;
  s.lazy = s.lazy ?? false;
  s.immediate = s.immediate ?? true;
  s.deep = s.deep ?? _r.deep;
  s.dedupe = s.dedupe ?? "cancel";
  const u = s.getCachedData(n, i);
  const c = u != null;
  if (!i._asyncData[n] || !s.immediate) {
    (g = i.payload._errors)[n] ?? (g[n] = _r.errorValue);
    const w = s.deep ? We : Or;
    i._asyncData[n] = {
      data: w(c ? u : s.default()),
      pending: We(!c),
      error: Ku(i.payload._errors, n),
      status: We("idle"),
      _default: s.default
    };
  }
  const f = {
    ...i._asyncData[n]
  };
  delete f._default;
  f.refresh = f.execute = (w = {}) => {
    if (i._asyncDataPromises[n]) {
      if (Lv(w.dedupe ?? s.dedupe)) {
        return i._asyncDataPromises[n];
      }
      i._asyncDataPromises[n].cancelled = true;
    }
    if (w._initial || i.isHydrating && w._initial !== false) {
      const v = w._initial ? u : s.getCachedData(n, i);
      if (v != null) {
        return Promise.resolve(v);
      }
    }
    f.pending.value = true;
    f.status.value = "pending";
    const k = new Promise((v, p) => {
      try {
        v(o(i));
      } catch (_) {
        p(_);
      }
    }).then(async v => {
      if (k.cancelled) {
        return i._asyncDataPromises[n];
      }
      let p = v;
      if (s.transform) {
        p = await s.transform(v);
      }
      if (s.pick) {
        p = Nv(p, s.pick);
      }
      i.payload.data[n] = p;
      f.data.value = p;
      f.error.value = _r.errorValue;
      f.status.value = "success";
    }).catch(v => {
      if (k.cancelled) {
        return i._asyncDataPromises[n];
      }
      f.error.value = Ms(v);
      f.data.value = fe(s.default());
      f.status.value = "error";
    }).finally(() => {
      if (!k.cancelled) {
        f.pending.value = false;
        delete i._asyncDataPromises[n];
      }
    });
    i._asyncDataPromises[n] = k;
    return i._asyncDataPromises[n];
  };
  f.clear = () => Dv(i, n);
  const h = () => f.refresh({
    _initial: true
  });
  const d = s.server !== false && i.payload.serverRendered;
  {
    const w = Os();
    if (w && !w._nuxtOnBeforeMountCbs) {
      w._nuxtOnBeforeMountCbs = [];
      const p = w._nuxtOnBeforeMountCbs;
      lf(() => {
        p.forEach(_ => {
          _();
        });
        p.splice(0, p.length);
      });
      Ga(() => p.splice(0, p.length));
    }
    if (d && i.isHydrating && (f.error.value || u != null)) {
      f.pending.value = false;
      f.status.value = f.error.value ? "error" : "success";
    } else if (w && (i.payload.serverRendered && i.isHydrating || s.lazy) && s.immediate) {
      w._nuxtOnBeforeMountCbs.push(h);
    } else if (s.immediate) {
      h();
    }
    const k = Mi();
    if (s.watch) {
      const p = En(s.watch, () => f.refresh());
      if (k) {
        xo(p);
      }
    }
    const v = i.hook("app:data:refresh", async p => {
      if (!p || p.includes(n)) {
        await f.refresh();
      }
    });
    if (k) {
      xo(v);
    }
  }
  const m = Promise.resolve(i._asyncDataPromises[n]).then(() => f);
  Object.assign(m, f);
  return m;
}
async function Bv(t) {
  await new Promise(n => zi(n));
  await ie().hooks.callHookParallel("app:data:refresh", undefined);
}
function Dv(t, e) {
  if (e in t.payload.data) {
    t.payload.data[e] = undefined;
  }
  if (e in t.payload._errors) {
    t.payload._errors[e] = _r.errorValue;
  }
  if (t._asyncData[e]) {
    t._asyncData[e].data.value = undefined;
    t._asyncData[e].error.value = _r.errorValue;
    t._asyncData[e].pending.value = false;
    t._asyncData[e].status.value = "idle";
  }
  if (e in t._asyncDataPromises) {
    if (t._asyncDataPromises[e]) {
      t._asyncDataPromises[e].cancelled = true;
    }
    t._asyncDataPromises[e] = undefined;
  }
}
function Nv(t, e) {
  const n = {};
  for (const r of e) {
    n[r] = t[r];
  }
  return n;
}
const $v = Ze({
  name: "pinia",
  setup(t) {
    const e = uv();
    t.vueApp.use(e);
    Ls(e);
    if (t.payload && t.payload.pinia) {
      e.state.value = t.payload.pinia;
    }
    return {
      provide: {
        pinia: e
      }
    };
  }
});
const Hv = Ze({
  name: "nuxt:global-components"
});
const xn = {
  default: () => Lt(() => import("./CkTdvX_d.js"), __vite__mapDeps([14, 1, 3, 5, 6, 15]), import.meta.url)
};
const Fv = Ze({
  name: "nuxt:prefetch",
  setup(t) {
    const e = Ot();
    t.hooks.hook("app:mounted", () => {
      e.beforeEach(async n => {
        var s;
        const r = (s = n == null ? undefined : n.meta) == null ? undefined : s.layout;
        if (r && typeof xn[r] == "function") {
          await xn[r]();
        }
      });
    });
    t.hooks.hook("link:prefetch", n => {
      if (lr(n)) {
        return;
      }
      const r = e.resolve(n);
      if (!r) {
        return;
      }
      const s = r.meta.layout;
      let i = fl(r.meta.middleware);
      i = i.filter(o => typeof o == "string");
      for (const o of i) {
        if (typeof fs[o] == "function") {
          fs[o]();
        }
      }
      if (s && typeof xn[s] == "function") {
        xn[s]();
      }
    });
  }
});
let du = false;
const pu = [];
const jv = t => new Promise((e, n) => {
  if (typeof window === "undefined" || (window.storyblokRegisterEvent = s => {
    if (window.location === window.parent.location) {
      console.warn("You are not in Draft Mode or in the Visual Editor.");
      return;
    }
    if (du) {
      s();
    } else {
      pu.push(s);
    }
  }, document.getElementById("storyblok-javascript-bridge"))) {
    return;
  }
  const r = document.createElement("script");
  r.async = true;
  r.src = t;
  r.id = "storyblok-javascript-bridge";
  r.onerror = s => n(s);
  r.onload = s => {
    pu.forEach(i => i());
    du = true;
    e(s);
  };
  document.getElementsByTagName("head")[0].appendChild(r);
});
var Uv = Object.defineProperty;
var Vv = (t, e, n) => e in t ? Uv(t, e, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: n
}) : t[e] = n;
var se = (t, e, n) => Vv(t, typeof e != "symbol" ? e + "" : e, n);
function gu(t) {
  return t === t && t !== Infinity && t !== -Infinity;
}
function zv(t, e, n) {
  if (!gu(e)) {
    throw new TypeError("Expected `limit` to be a finite number");
  }
  if (!gu(n)) {
    throw new TypeError("Expected `interval` to be a finite number");
  }
  const r = [];
  let s = [];
  let i = 0;
  const o = function () {
    i++;
    const l = setTimeout(function () {
      i--;
      if (r.length > 0) {
        o();
      }
      s = s.filter(function (c) {
        return c !== l;
      });
    }, n);
    if (s.indexOf(l) < 0) {
      s.push(l);
    }
    const u = r.shift();
    u.resolve(t.apply(u.self, u.args));
  };
  const a = function (...l) {
    const u = this;
    return new Promise(function (c, f) {
      r.push({
        resolve: c,
        reject: f,
        args: l,
        self: u
      });
      if (i < e) {
        o();
      }
    });
  };
  a.abort = function () {
    s.forEach(clearTimeout);
    s = [];
    r.forEach(function (l) {
      l.reject(function () {
        Error.call(this, "Throttled function aborted");
        this.name = "AbortError";
      });
    });
    r.length = 0;
  };
  return a;
}
class Ci {
  constructor() {
    se(this, "isCDNUrl", (e = "") => e.indexOf("/cdn/") > -1);
    se(this, "getOptionsPage", (e, n = 25, r = 1) => ({
      ...e,
      per_page: n,
      page: r
    }));
    se(this, "delay", e => new Promise(n => setTimeout(n, e)));
    se(this, "arrayFrom", (e = 0, n) => [...Array(e)].map(n));
    se(this, "range", (e = 0, n = e) => {
      const r = Math.abs(n - e) || 0;
      const s = e < n ? 1 : -1;
      return this.arrayFrom(r, (i, o) => o * s + e);
    });
    se(this, "asyncMap", async (e, n) => Promise.all(e.map(n)));
    se(this, "flatMap", (e = [], n) => e.map(n).reduce((r, s) => [...r, ...s], []));
    se(this, "escapeHTML", function (e) {
      const n = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      };
      const r = /[&<>"']/g;
      const s = RegExp(r.source);
      if (e && s.test(e)) {
        return e.replace(r, i => n[i]);
      } else {
        return e;
      }
    });
  }
  stringify(e, n, r) {
    const s = [];
    for (const i in e) {
      if (!Object.prototype.hasOwnProperty.call(e, i)) {
        continue;
      }
      const o = e[i];
      const a = r ? "" : encodeURIComponent(i);
      let l;
      if (typeof o == "object") {
        l = this.stringify(o, n ? n + encodeURIComponent("[" + a + "]") : a, Array.isArray(o));
      } else {
        l = (n ? n + encodeURIComponent("[" + a + "]") : a) + "=" + encodeURIComponent(o);
      }
      s.push(l);
    }
    return s.join("&");
  }
  getRegionURL(e) {
    const n = "api.storyblok.com";
    const r = "api-us.storyblok.com";
    const s = "app.storyblokchina.cn";
    const i = "api-ap.storyblok.com";
    const o = "api-ca.storyblok.com";
    switch (e) {
      case "us":
        return r;
      case "cn":
        return s;
      case "ap":
        return i;
      case "ca":
        return o;
      default:
        return n;
    }
  }
}
const Wv = function (t, e) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    if (e.indexOf(r) > -1 && s !== null) {
      n[r] = s;
    }
  }
  return n;
};
const Gv = t => t === "email";
const qv = () => ({
  singleTag: "hr"
});
const Kv = () => ({
  tag: "blockquote"
});
const Yv = () => ({
  tag: "ul"
});
const Xv = t => ({
  tag: ["pre", {
    tag: "code",
    attrs: t.attrs
  }]
});
const Jv = () => ({
  singleTag: "br"
});
const Qv = t => ({
  tag: `h${t.attrs.level}`
});
const Zv = t => ({
  singleTag: [{
    tag: "img",
    attrs: Wv(t.attrs, ["src", "alt", "title"])
  }]
});
const ew = () => ({
  tag: "li"
});
const tw = () => ({
  tag: "ol"
});
const nw = () => ({
  tag: "p"
});
const rw = t => ({
  tag: [{
    tag: "span",
    attrs: {
      "data-type": "emoji",
      "data-name": t.attrs.name,
      emoji: t.attrs.emoji
    }
  }]
});
const sw = () => ({
  tag: "b"
});
const iw = () => ({
  tag: "s"
});
const ow = () => ({
  tag: "u"
});
const aw = () => ({
  tag: "strong"
});
const lw = () => ({
  tag: "code"
});
const cw = () => ({
  tag: "i"
});
const uw = t => {
  if (!t.attrs) {
    return {
      tag: ""
    };
  }
  const e = new Ci().escapeHTML;
  const n = {
    ...t.attrs
  };
  const {
    linktype: r = "url"
  } = t.attrs;
  delete n.linktype;
  n.href &&= e(t.attrs.href || "");
  if (Gv(r)) {
    n.href = `mailto:${n.href}`;
  }
  if (n.anchor) {
    n.href = `${n.href}#${n.anchor}`;
    delete n.anchor;
  }
  if (n.custom) {
    for (const s in n.custom) {
      n[s] = n.custom[s];
    }
    delete n.custom;
  }
  return {
    tag: [{
      tag: "a",
      attrs: n
    }]
  };
};
const fw = t => ({
  tag: [{
    tag: "span",
    attrs: t.attrs
  }]
});
const hw = () => ({
  tag: "sub"
});
const dw = () => ({
  tag: "sup"
});
const pw = t => ({
  tag: [{
    tag: "span",
    attrs: t.attrs
  }]
});
const gw = t => {
  var e;
  if ((e = t.attrs) != null && e.color) {
    return {
      tag: [{
        tag: "span",
        attrs: {
          style: `background-color:${t.attrs.color};`
        }
      }]
    };
  } else {
    return {
      tag: ""
    };
  }
};
const mw = t => {
  var e;
  if ((e = t.attrs) != null && e.color) {
    return {
      tag: [{
        tag: "span",
        attrs: {
          style: `color:${t.attrs.color}`
        }
      }]
    };
  } else {
    return {
      tag: ""
    };
  }
};
const _w = {
  nodes: {
    horizontal_rule: qv,
    blockquote: Kv,
    bullet_list: Yv,
    code_block: Xv,
    hard_break: Jv,
    heading: Qv,
    image: Zv,
    list_item: ew,
    ordered_list: tw,
    paragraph: nw,
    emoji: rw
  },
  marks: {
    bold: sw,
    strike: iw,
    underline: ow,
    strong: aw,
    code: lw,
    italic: cw,
    link: uw,
    styled: fw,
    subscript: hw,
    superscript: dw,
    anchor: pw,
    highlight: gw,
    textStyle: mw
  }
};
const yw = function (t) {
  const e = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };
  const n = /[&<>"']/g;
  const r = RegExp(n.source);
  if (t && r.test(t)) {
    return t.replace(n, s => e[s]);
  } else {
    return t;
  }
};
let mu = false;
class bw {
  constructor(e) {
    se(this, "marks");
    se(this, "nodes");
    e ||= _w;
    this.marks = e.marks || [];
    this.nodes = e.nodes || [];
  }
  addNode(e, n) {
    this.nodes[e] = n;
  }
  addMark(e, n) {
    this.marks[e] = n;
  }
  render(e, n = {
    optimizeImages: false
  }, r = true) {
    if (!mu && r) {
      console.warn("Warning ⚠️: The RichTextResolver class is deprecated and will be removed in the next major release. Please use the `@storyblok/richtext` package instead. https://github.com/storyblok/richtext/");
      mu = true;
    }
    if (e && e.content && Array.isArray(e.content)) {
      let s = "";
      e.content.forEach(i => {
        s += this.renderNode(i);
      });
      if (n.optimizeImages) {
        return this.optimizeImages(s, n.optimizeImages);
      } else {
        return s;
      }
    }
    console.warn(`The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`);
    return "";
  }
  optimizeImages(e, n) {
    let r = 0;
    let s = 0;
    let i = "";
    let o = "";
    if (typeof n != "boolean") {
      if (typeof n.width == "number" && n.width > 0) {
        i += `width="${n.width}" `;
        r = n.width;
      }
      if (typeof n.height == "number" && n.height > 0) {
        i += `height="${n.height}" `;
        s = n.height;
      }
      if (n.loading === "lazy" || n.loading === "eager") {
        i += `loading="${n.loading}" `;
      }
      if (typeof n.class == "string" && n.class.length > 0) {
        i += `class="${n.class}" `;
      }
      if (n.filters) {
        if (typeof n.filters.blur == "number" && n.filters.blur >= 0 && n.filters.blur <= 100) {
          o += `:blur(${n.filters.blur})`;
        }
        if (typeof n.filters.brightness == "number" && n.filters.brightness >= -100 && n.filters.brightness <= 100) {
          o += `:brightness(${n.filters.brightness})`;
        }
        if (n.filters.fill && (n.filters.fill.match(/[0-9A-Fa-f]{6}/g) || n.filters.fill === "transparent")) {
          o += `:fill(${n.filters.fill})`;
        }
        if (n.filters.format && ["webp", "png", "jpeg"].includes(n.filters.format)) {
          o += `:format(${n.filters.format})`;
        }
        if (typeof n.filters.grayscale == "boolean" && n.filters.grayscale) {
          o += ":grayscale()";
        }
        if (typeof n.filters.quality == "number" && n.filters.quality >= 0 && n.filters.quality <= 100) {
          o += `:quality(${n.filters.quality})`;
        }
        if (n.filters.rotate && [90, 180, 270].includes(n.filters.rotate)) {
          o += `:rotate(${n.filters.rotate})`;
        }
        if (o.length > 0) {
          o = "/filters" + o;
        }
      }
    }
    if (i.length > 0) {
      e = e.replace(/<img/g, `<img ${i.trim()}`);
    }
    const a = r > 0 || s > 0 || o.length > 0 ? `${r}x${s}${o}` : "";
    e = e.replace(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g, `a.storyblok.com/f/$1/$2.$3/m/${a}`);
    if (typeof n != "boolean" && (n.sizes || n.srcset)) {
      e = e.replace(/<img.*?src=["|'](.*?)["|']/g, l => {
        var u;
        var c;
        const f = l.match(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g);
        if (f && f.length > 0) {
          const h = {
            srcset: (u = n.srcset) == null ? undefined : u.map(m => {
              if (typeof m == "number") {
                return `//${f}/m/${m}x0${o} ${m}w`;
              }
              if (typeof m == "object" && m.length === 2) {
                let g = 0;
                let w = 0;
                if (typeof m[0] == "number") {
                  g = m[0];
                }
                if (typeof m[1] == "number") {
                  w = m[1];
                }
                return `//${f}/m/${g}x${w}${o} ${g}w`;
              }
            }).join(", "),
            sizes: (c = n.sizes) == null ? undefined : c.map(m => m).join(", ")
          };
          let d = "";
          if (h.srcset) {
            d += `srcset="${h.srcset}" `;
          }
          if (h.sizes) {
            d += `sizes="${h.sizes}" `;
          }
          return l.replace(/<img/g, `<img ${d.trim()}`);
        }
        return l;
      });
    }
    return e;
  }
  renderNode(e) {
    const n = [];
    if (e.marks) {
      e.marks.forEach(s => {
        const i = this.getMatchingMark(s);
        if (i && i.tag !== "") {
          n.push(this.renderOpeningTag(i.tag));
        }
      });
    }
    const r = this.getMatchingNode(e);
    if (r && r.tag) {
      n.push(this.renderOpeningTag(r.tag));
    }
    if (e.content) {
      e.content.forEach(s => {
        n.push(this.renderNode(s));
      });
    } else if (e.text) {
      n.push(yw(e.text));
    } else if (r && r.singleTag) {
      n.push(this.renderTag(r.singleTag, " /"));
    } else if (r && r.html) {
      n.push(r.html);
    } else if (e.type === "emoji") {
      n.push(this.renderEmoji(e));
    }
    if (r && r.tag) {
      n.push(this.renderClosingTag(r.tag));
    }
    if (e.marks) {
      e.marks.slice(0).reverse().forEach(s => {
        const i = this.getMatchingMark(s);
        if (i && i.tag !== "") {
          n.push(this.renderClosingTag(i.tag));
        }
      });
    }
    return n.join("");
  }
  renderTag(e, n) {
    if (e.constructor === String) {
      return `<${e}${n}>`;
    } else {
      return e.map(r => {
        if (r.constructor === String) {
          return `<${r}${n}>`;
        }
        {
          let s = `<${r.tag}`;
          if (r.attrs) {
            for (const i in r.attrs) {
              if (Object.prototype.hasOwnProperty.call(r.attrs, i)) {
                const o = r.attrs[i];
                if (o !== null) {
                  s += ` ${i}="${o}"`;
                }
              }
            }
          }
          return `${s}${n}>`;
        }
      }).join("");
    }
  }
  renderOpeningTag(e) {
    return this.renderTag(e, "");
  }
  renderClosingTag(e) {
    if (e.constructor === String) {
      return `</${e}>`;
    } else {
      return e.slice(0).reverse().map(n => n.constructor === String ? `</${n}>` : `</${n.tag}>`).join("");
    }
  }
  getMatchingNode(e) {
    const n = this.nodes[e.type];
    if (typeof n == "function") {
      return n(e);
    }
  }
  getMatchingMark(e) {
    const n = this.marks[e.type];
    if (typeof n == "function") {
      return n(e);
    }
  }
  renderEmoji(e) {
    if (e.attrs.emoji) {
      return e.attrs.emoji;
    }
    const n = [{
      tag: "img",
      attrs: {
        src: e.attrs.fallbackImage,
        draggable: "false",
        loading: "lazy",
        align: "absmiddle"
      }
    }];
    return this.renderTag(n, " /");
  }
}
const xa = bw;
class vw {
  constructor(e) {
    se(this, "baseURL");
    se(this, "timeout");
    se(this, "headers");
    se(this, "responseInterceptor");
    se(this, "fetch");
    se(this, "ejectInterceptor");
    se(this, "url");
    se(this, "parameters");
    se(this, "fetchOptions");
    this.baseURL = e.baseURL;
    this.headers = e.headers || new Headers();
    this.timeout = e != null && e.timeout ? e.timeout * 1000 : 0;
    this.responseInterceptor = e.responseInterceptor;
    this.fetch = (...n) => e.fetch ? e.fetch(...n) : fetch(...n);
    this.ejectInterceptor = false;
    this.url = "";
    this.parameters = {};
    this.fetchOptions = {};
  }
  get(e, n) {
    this.url = e;
    this.parameters = n;
    return this._methodHandler("get");
  }
  post(e, n) {
    this.url = e;
    this.parameters = n;
    return this._methodHandler("post");
  }
  put(e, n) {
    this.url = e;
    this.parameters = n;
    return this._methodHandler("put");
  }
  delete(e, n) {
    this.url = e;
    this.parameters = n;
    return this._methodHandler("delete");
  }
  async _responseHandler(e) {
    const n = [];
    const r = {
      data: {},
      headers: {},
      status: 0,
      statusText: ""
    };
    if (e.status !== 204) {
      await e.json().then(s => {
        r.data = s;
      });
    }
    for (const s of e.headers.entries()) {
      n[s[0]] = s[1];
    }
    r.headers = {
      ...n
    };
    r.status = e.status;
    r.statusText = e.statusText;
    return r;
  }
  async _methodHandler(e) {
    let n = `${this.baseURL}${this.url}`;
    let r = null;
    if (e === "get") {
      const l = new Ci();
      n = `${this.baseURL}${this.url}?${l.stringify(this.parameters)}`;
    } else {
      r = JSON.stringify(this.parameters);
    }
    const s = new URL(n);
    const i = new AbortController();
    const {
      signal: o
    } = i;
    let a;
    if (this.timeout) {
      a = setTimeout(() => i.abort(), this.timeout);
    }
    try {
      const l = await this.fetch(`${s}`, {
        method: e,
        headers: this.headers,
        body: r,
        signal: o,
        ...this.fetchOptions
      });
      if (this.timeout) {
        clearTimeout(a);
      }
      const u = await this._responseHandler(l);
      if (this.responseInterceptor && !this.ejectInterceptor) {
        return this._statusHandler(this.responseInterceptor(u));
      } else {
        return this._statusHandler(u);
      }
    } catch (l) {
      return {
        message: l
      };
    }
  }
  setFetchOptions(e = {}) {
    if (Object.keys(e).length > 0 && "method" in e) {
      delete e.method;
    }
    this.fetchOptions = {
      ...e
    };
  }
  eject() {
    this.ejectInterceptor = true;
  }
  _statusHandler(e) {
    const n = /20[0-6]/g;
    return new Promise((r, s) => {
      if (n.test(`${e.status}`)) {
        return r(e);
      }
      const i = {
        message: e.statusText,
        status: e.status,
        response: Array.isArray(e.data) ? e.data[0] : e.data.error || e.data.slug
      };
      s(i);
    });
  }
}
const ww = vw;
const _u = "SB-Agent";
const ko = {
  defaultAgentName: "SB-JS-CLIENT",
  defaultAgentVersion: "SB-Agent-Version",
  packageVersion: "6.0.0"
};
let Gs = {};
const zn = {};
class Tw {
  constructor(e, n) {
    se(this, "client");
    se(this, "maxRetries");
    se(this, "retriesDelay");
    se(this, "throttle");
    se(this, "accessToken");
    se(this, "cache");
    se(this, "helpers");
    se(this, "resolveCounter");
    se(this, "relations");
    se(this, "links");
    se(this, "richTextResolver");
    se(this, "resolveNestedRelations");
    se(this, "stringifiedStoriesCache");
    let r = e.endpoint || n;
    if (!r) {
      const o = new Ci().getRegionURL;
      const a = e.https === false ? "http" : "https";
      if (e.oauthToken) {
        r = `${a}://${o(e.region)}/v1`;
      } else {
        r = `${a}://${o(e.region)}/v2`;
      }
    }
    const s = new Headers();
    s.set("Content-Type", "application/json");
    s.set("Accept", "application/json");
    if (e.headers) {
      (e.headers.constructor.name === "Headers" ? e.headers.entries().toArray() : Object.entries(e.headers)).forEach(([o, a]) => {
        s.set(o, a);
      });
    }
    if (!s.has(_u)) {
      s.set(_u, ko.defaultAgentName);
      s.set(ko.defaultAgentVersion, ko.packageVersion);
    }
    let i = 5;
    if (e.oauthToken) {
      s.set("Authorization", e.oauthToken);
      i = 3;
    }
    if (e.rateLimit) {
      i = e.rateLimit;
    }
    if (e.richTextSchema) {
      this.richTextResolver = new xa(e.richTextSchema);
    } else {
      this.richTextResolver = new xa();
    }
    if (e.componentResolver) {
      this.setComponentResolver(e.componentResolver);
    }
    this.maxRetries = e.maxRetries || 10;
    this.retriesDelay = 300;
    this.throttle = zv(this.throttledRequest, i, 1000);
    this.accessToken = e.accessToken || "";
    this.relations = {};
    this.links = {};
    this.cache = e.cache || {
      clear: "manual"
    };
    this.helpers = new Ci();
    this.resolveCounter = 0;
    this.resolveNestedRelations = e.resolveNestedRelations || true;
    this.stringifiedStoriesCache = {};
    this.client = new ww({
      baseURL: r,
      timeout: e.timeout || 0,
      headers: s,
      responseInterceptor: e.responseInterceptor,
      fetch: e.fetch
    });
  }
  setComponentResolver(e) {
    this.richTextResolver.addNode("blok", n => {
      let r = "";
      if (n.attrs.body) {
        n.attrs.body.forEach(s => {
          r += e(s.component, s);
        });
      }
      return {
        html: r
      };
    });
  }
  parseParams(e) {
    e.token ||= this.getToken();
    e.cv ||= zn[e.token];
    if (Array.isArray(e.resolve_relations)) {
      e.resolve_relations = e.resolve_relations.join(",");
    }
    if (typeof e.resolve_relations !== "undefined") {
      e.resolve_level = 2;
    }
    return e;
  }
  factoryParamOptions(e, n) {
    if (this.helpers.isCDNUrl(e)) {
      return this.parseParams(n);
    } else {
      return n;
    }
  }
  makeRequest(e, n, r, s, i) {
    const o = this.factoryParamOptions(e, this.helpers.getOptionsPage(n, r, s));
    return this.cacheResponse(e, o, undefined, i);
  }
  get(e, n, r) {
    n ||= {};
    const s = `/${e}`;
    const i = this.factoryParamOptions(s, n);
    return this.cacheResponse(s, i, undefined, r);
  }
  async getAll(e, n, r, s) {
    const i = (n == null ? undefined : n.per_page) || 25;
    const o = `/${e}`;
    const a = o.split("/");
    const l = r || a[a.length - 1];
    const u = 1;
    const c = await this.makeRequest(o, n, i, u, s);
    const f = c.total ? Math.ceil(c.total / i) : 1;
    const h = await this.helpers.asyncMap(this.helpers.range(u, f), d => this.makeRequest(o, n, i, d + 1, s));
    return this.helpers.flatMap([c, ...h], d => Object.values(d.data[l]));
  }
  post(e, n, r) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("post", s, n, r));
  }
  put(e, n, r) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("put", s, n, r));
  }
  delete(e, n, r) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("delete", s, n, r));
  }
  getStories(e, n) {
    this._addResolveLevel(e);
    return this.get("cdn/stories", e, n);
  }
  getStory(e, n, r) {
    this._addResolveLevel(n);
    return this.get(`cdn/stories/${e}`, n, r);
  }
  getToken() {
    return this.accessToken;
  }
  ejectInterceptor() {
    this.client.eject();
  }
  _addResolveLevel(e) {
    if (typeof e.resolve_relations !== "undefined") {
      e.resolve_level = 2;
    }
  }
  _cleanCopy(e) {
    return JSON.parse(JSON.stringify(e));
  }
  _insertLinks(e, n, r) {
    const s = e[n];
    if (s && s.fieldtype == "multilink" && s.linktype == "story" && typeof s.id == "string" && this.links[r][s.id]) {
      s.story = this._cleanCopy(this.links[r][s.id]);
    } else if (s && s.linktype === "story" && typeof s.uuid == "string" && this.links[r][s.uuid]) {
      s.story = this._cleanCopy(this.links[r][s.uuid]);
    }
  }
  getStoryReference(e, n) {
    if (this.relations[e][n]) {
      this.stringifiedStoriesCache[n] ||= JSON.stringify(this.relations[e][n]);
      return JSON.parse(this.stringifiedStoriesCache[n]);
    } else {
      return n;
    }
  }
  _insertRelations(e, n, r, s) {
    if (r.indexOf(`${e.component}.${n}`) > -1) {
      if (typeof e[n] == "string") {
        e[n] = this.getStoryReference(s, e[n]);
      } else if (Array.isArray(e[n])) {
        e[n] = e[n].map(i => this.getStoryReference(s, i)).filter(Boolean);
      }
    }
  }
  iterateTree(e, n, r) {
    const s = i => {
      if (i != null) {
        if (i.constructor === Array) {
          for (let o = 0; o < i.length; o++) {
            s(i[o]);
          }
        } else if (i.constructor === Object) {
          if (i._stopResolving) {
            return;
          }
          for (const o in i) {
            if (i.component && i._uid || i.type === "link") {
              this._insertRelations(i, o, n, r);
              this._insertLinks(i, o, r);
            }
            s(i[o]);
          }
        }
      }
    };
    s(e.content);
  }
  async resolveLinks(e, n, r) {
    let s = [];
    if (e.link_uuids) {
      const i = e.link_uuids.length;
      const o = [];
      const a = 50;
      for (let l = 0; l < i; l += a) {
        const u = Math.min(i, l + a);
        o.push(e.link_uuids.slice(l, u));
      }
      for (let l = 0; l < o.length; l++) {
        (await this.getStories({
          per_page: a,
          language: n.language,
          version: n.version,
          by_uuids: o[l].join(",")
        })).data.stories.forEach(u => {
          s.push(u);
        });
      }
    } else {
      s = e.links;
    }
    s.forEach(i => {
      this.links[r][i.uuid] = {
        ...i,
        _stopResolving: true
      };
    });
  }
  async resolveRelations(e, n, r) {
    let s = [];
    if (e.rel_uuids) {
      const i = e.rel_uuids.length;
      const o = [];
      const a = 50;
      for (let l = 0; l < i; l += a) {
        const u = Math.min(i, l + a);
        o.push(e.rel_uuids.slice(l, u));
      }
      for (let l = 0; l < o.length; l++) {
        (await this.getStories({
          per_page: a,
          language: n.language,
          version: n.version,
          by_uuids: o[l].join(","),
          excluding_fields: n.excluding_fields
        })).data.stories.forEach(u => {
          s.push(u);
        });
      }
    } else {
      s = e.rels;
    }
    if (s && s.length > 0) {
      s.forEach(i => {
        this.relations[r][i.uuid] = {
          ...i,
          _stopResolving: true
        };
      });
    }
  }
  async resolveStories(e, n, r) {
    var s;
    var i;
    let o = [];
    this.links[r] = {};
    this.relations[r] = {};
    if (typeof n.resolve_relations !== "undefined" && n.resolve_relations.length > 0) {
      if (typeof n.resolve_relations == "string") {
        o = n.resolve_relations.split(",");
      }
      await this.resolveRelations(e, n, r);
    }
    if (n.resolve_links && ["1", "story", "url", "link"].indexOf(n.resolve_links) > -1 && ((s = e.links) != null && s.length || (i = e.link_uuids) != null && i.length)) {
      await this.resolveLinks(e, n, r);
    }
    if (this.resolveNestedRelations) {
      for (const a in this.relations[r]) {
        this.iterateTree(this.relations[r][a], o, r);
      }
    }
    if (e.story) {
      this.iterateTree(e.story, o, r);
    } else {
      e.stories.forEach(a => {
        this.iterateTree(a, o, r);
      });
    }
    this.stringifiedStoriesCache = {};
    delete this.links[r];
    delete this.relations[r];
  }
  async cacheResponse(e, n, r, s) {
    const i = this.helpers.stringify({
      url: e,
      params: n
    });
    const o = this.cacheProvider();
    if (this.cache.clear === "auto" && n.version === "draft") {
      await this.flushCache();
    }
    if (n.version === "published" && e != "/cdn/spaces/me") {
      const a = await o.get(i);
      if (a) {
        return Promise.resolve(a);
      }
    }
    return new Promise(async (a, l) => {
      var u;
      try {
        const c = await this.throttle("get", e, n, s);
        if (c.status !== 200) {
          return l(c);
        }
        let f = {
          data: c.data,
          headers: c.headers
        };
        if ((u = c.headers) != null && u["per-page"]) {
          f = Object.assign({}, f, {
            perPage: c.headers["per-page"] ? parseInt(c.headers["per-page"]) : 0,
            total: c.headers["per-page"] ? parseInt(c.headers.total) : 0
          });
        }
        if (f.data.story || f.data.stories) {
          const h = this.resolveCounter = ++this.resolveCounter % 1000;
          await this.resolveStories(f.data, n, `${h}`);
        }
        if (n.version === "published" && e != "/cdn/spaces/me") {
          await o.set(i, f);
        }
        if (f.data.cv && n.token && zn[n.token] != f.data.cv) {
          await this.flushCache();
          zn[n.token] = f.data.cv;
        }
        return a(f);
      } catch (c) {
        if (c.response && c.status === 429 && (r = typeof r === "undefined" ? 0 : r + 1, r < this.maxRetries)) {
          console.log(`Hit rate limit. Retrying in ${this.retriesDelay / 1000} seconds.`);
          await this.helpers.delay(this.retriesDelay);
          return this.cacheResponse(e, n, r).then(a).catch(l);
        }
        l(c);
      }
    });
  }
  throttledRequest(e, n, r, s) {
    this.client.setFetchOptions(s);
    return this.client[e](n, r);
  }
  cacheVersions() {
    return zn;
  }
  cacheVersion() {
    return zn[this.accessToken];
  }
  setCacheVersion(e) {
    if (this.accessToken) {
      zn[this.accessToken] = e;
    }
  }
  clearCacheVersion() {
    if (this.accessToken) {
      zn[this.accessToken] = 0;
    }
  }
  cacheProvider() {
    switch (this.cache.type) {
      case "memory":
        return {
          get(e) {
            return Promise.resolve(Gs[e]);
          },
          getAll() {
            return Promise.resolve(Gs);
          },
          set(e, n) {
            Gs[e] = n;
            return Promise.resolve(undefined);
          },
          flush() {
            Gs = {};
            return Promise.resolve(undefined);
          }
        };
      case "custom":
        if (this.cache.custom) {
          return this.cache.custom;
        }
      default:
        return {
          get() {
            return Promise.resolve();
          },
          getAll() {
            return Promise.resolve(undefined);
          },
          set() {
            return Promise.resolve(undefined);
          },
          flush() {
            return Promise.resolve(undefined);
          }
        };
    }
  }
  async flushCache() {
    await this.cacheProvider().flush();
    this.clearCacheVersion();
    return this;
  }
}
const kw = (t = {}) => {
  const {
    apiOptions: e
  } = t;
  if (!e.accessToken) {
    console.error("You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication");
    return;
  }
  return {
    storyblokApi: new Tw(e)
  };
};
const xw = t => {
  if (typeof t != "object" || typeof t._editable === "undefined") {
    return {};
  }
  try {
    const e = JSON.parse(t._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
    if (e) {
      return {
        "data-blok-c": JSON.stringify(e),
        "data-blok-uid": e.id + "-" + e.uid
      };
    } else {
      return {};
    }
  } catch {
    return {};
  }
};
var Ye = (t => {
  t.DOCUMENT = "doc";
  t.HEADING = "heading";
  t.PARAGRAPH = "paragraph";
  t.QUOTE = "blockquote";
  t.OL_LIST = "ordered_list";
  t.UL_LIST = "bullet_list";
  t.LIST_ITEM = "list_item";
  t.CODE_BLOCK = "code_block";
  t.HR = "horizontal_rule";
  t.BR = "hard_break";
  t.IMAGE = "image";
  t.EMOJI = "emoji";
  t.COMPONENT = "blok";
  return t;
})(Ye || {});
var ht = (t => {
  t.BOLD = "bold";
  t.STRONG = "strong";
  t.STRIKE = "strike";
  t.UNDERLINE = "underline";
  t.ITALIC = "italic";
  t.CODE = "code";
  t.LINK = "link";
  t.ANCHOR = "anchor";
  t.STYLED = "styled";
  t.SUPERSCRIPT = "superscript";
  t.SUBSCRIPT = "subscript";
  t.TEXT_STYLE = "textStyle";
  t.HIGHLIGHT = "highlight";
  return t;
})(ht || {});
var Hd = (t => {
  t.TEXT = "text";
  return t;
})(Hd || {});
var Jr = (t => {
  t.URL = "url";
  t.STORY = "story";
  t.ASSET = "asset";
  t.EMAIL = "email";
  return t;
})(Jr || {});
function Sw(t, e) {
  if (!e) {
    return {
      src: t,
      attrs: {}
    };
  }
  let n = 0;
  let r = 0;
  const s = {};
  const i = [];
  function o(l, u, c, f, h) {
    if (typeof l != "number" || l <= u || l >= c) {
      console.warn(`[StoryblokRichText] - ${f.charAt(0).toUpperCase() + f.slice(1)} value must be a number between ${u} and ${c} (inclusive)`);
    } else {
      h.push(`${f}(${l})`);
    }
  }
  if (typeof e == "object") {
    if (typeof e.width == "number" && e.width > 0) {
      s.width = e.width;
      n = e.width;
    } else {
      console.warn("[StoryblokRichText] - Width value must be a number greater than 0");
    }
    if (e.height && typeof e.height == "number" && e.height > 0) {
      s.height = e.height;
      r = e.height;
    } else {
      console.warn("[StoryblokRichText] - Height value must be a number greater than 0");
    }
    if (e.loading && ["lazy", "eager"].includes(e.loading)) {
      s.loading = e.loading;
    }
    if (e.class) {
      s.class = e.class;
    }
    if (e.filters) {
      const {
        filters: l
      } = e || {};
      const {
        blur: u,
        brightness: c,
        fill: f,
        format: h,
        grayscale: d,
        quality: m,
        rotate: g
      } = l || {};
      if (u) {
        o(u, 0, 100, "blur", i);
      }
      if (m) {
        o(m, 0, 100, "quality", i);
      }
      if (c) {
        o(c, 0, 100, "brightness", i);
      }
      if (f) {
        i.push(`fill(${f})`);
      }
      if (d) {
        i.push("grayscale()");
      }
      if (g && [0, 90, 180, 270].includes(e.filters.rotate || 0)) {
        i.push(`rotate(${g})`);
      }
      if (h && ["webp", "png", "jpeg"].includes(h)) {
        i.push(`format(${h})`);
      }
    }
    if (e.srcset) {
      s.srcset = e.srcset.map(l => {
        if (typeof l == "number") {
          return `${t}/m/${l}x0/${i.length > 0 ? "filters:" + i.join(":") : ""} ${l}w`;
        }
        if (Array.isArray(l) && l.length === 2) {
          const [u, c] = l;
          return `${t}/m/${u}x${c}/${i.length > 0 ? "filters:" + i.join(":") : ""} ${u}w`;
        }
      }).join(", ");
    }
    if (e.sizes) {
      s.sizes = e.sizes.join(", ");
    }
  }
  let a = `${t}/m/`;
  if (n > 0 && r > 0) {
    a = `${a}${n}x${r}/`;
  }
  if (i.length > 0) {
    a = `${a}filters:${i.join(":")}`;
  }
  return {
    src: a,
    attrs: s
  };
}
const Cw = (t = {}) => Object.keys(t).map(e => `${e}="${t[e]}"`).join(" ");
const Ew = (t = {}) => Object.keys(t).map(e => `${e}: ${t[e]}`).join("; ");
function Pw(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function Rw(t, e = {}, n) {
  const r = Cw(e);
  return `<${r ? `${t} ${r}` : t}>${Array.isArray(n) ? n.join("") : n || ""}</${t}>`;
}
function Ow(t = {}) {
  let e = 0;
  const {
    renderFn: n = Rw,
    textFn: r = Pw,
    resolvers: s = {},
    optimizeImages: i = false
  } = t;
  const o = p => _ => n(p, {
    ..._.attrs,
    key: `${p}-${e}`
  }, _.children || null);
  const a = p => {
    const {
      src: _,
      alt: y,
      ...S
    } = p.attrs || {};
    let C = _;
    let E = {};
    if (i) {
      const {
        src: R,
        attrs: D
      } = Sw(_, i);
      C = R;
      E = D;
    }
    const x = {
      src: C,
      alt: y || "",
      key: `img-${e}`,
      ...S,
      ...E
    };
    return n("img", x, "");
  };
  const l = p => {
    const {
      level: _,
      ...y
    } = p.attrs || {};
    return n(`h${_}`, {
      ...y,
      key: `h${_}-${e}`
    }, p.children);
  };
  const u = p => {
    var _;
    var y;
    var S;
    var C;
    return n("span", {
      "data-type": "emoji",
      "data-name": (_ = p.attrs) == null ? undefined : _.name,
      emoji: (y = p.attrs) == null ? undefined : y.emoji,
      key: `emoji-${e}`
    }, n("img", {
      src: (S = p.attrs) == null ? undefined : S.fallbackImage,
      alt: (C = p.attrs) == null ? undefined : C.alt,
      style: "width: 1.25em; height: 1.25em; vertical-align: text-top",
      draggable: "false",
      loading: "lazy"
    }, ""));
  };
  const c = p => n("pre", {
    ...p.attrs,
    key: `code-${e}`
  }, n("code", {
    key: `code-${e}`
  }, p.children || ""));
  const f = (p, _ = false) => ({
    text: y,
    attrs: S
  }) => n(p, _ ? {
    style: Ew(S),
    key: `${p}-${e}`
  } : {
    ...S,
    key: `${p}-${e}`
  }, y);
  const h = p => v(p);
  const d = p => {
    const {
      marks: _,
      ...y
    } = p;
    if ("text" in p) {
      if (_) {
        return _.reduce((S, C) => h({
          ...C,
          text: S
        }), h({
          ...y,
          children: y.children
        }));
      } else {
        return r(y.text);
      }
    } else {
      return "";
    }
  };
  const m = p => {
    const {
      linktype: _,
      href: y,
      anchor: S,
      ...C
    } = p.attrs || {};
    let E = "";
    switch (_) {
      case Jr.ASSET:
      case Jr.URL:
        E = y;
        break;
      case Jr.EMAIL:
        E = `mailto:${y}`;
        break;
      case Jr.STORY:
        E = y;
        break;
    }
    if (S) {
      E = `${E}#${S}`;
    }
    return n("a", {
      ...C,
      href: E,
      key: `a-${e}`
    }, p.text);
  };
  const g = p => {
    var _;
    var y;
    console.warn("[StoryblokRichtText] - BLOK resolver is not available for vanilla usage");
    return n("span", {
      blok: (_ = p == null ? undefined : p.attrs) == null ? undefined : _.body[0],
      id: (y = p.attrs) == null ? undefined : y.id,
      key: `component-${e}`,
      style: "display: none"
    }, "");
  };
  const w = new Map([[Ye.DOCUMENT, o("div")], [Ye.HEADING, l], [Ye.PARAGRAPH, o("p")], [Ye.UL_LIST, o("ul")], [Ye.OL_LIST, o("ol")], [Ye.LIST_ITEM, o("li")], [Ye.IMAGE, a], [Ye.EMOJI, u], [Ye.CODE_BLOCK, c], [Ye.HR, o("hr")], [Ye.BR, o("br")], [Ye.QUOTE, o("blockquote")], [Ye.COMPONENT, g], [Hd.TEXT, d], [ht.LINK, m], [ht.ANCHOR, m], [ht.STYLED, f("span", true)], [ht.BOLD, f("strong")], [ht.TEXT_STYLE, f("span", true)], [ht.ITALIC, f("em")], [ht.UNDERLINE, f("u")], [ht.STRIKE, f("s")], [ht.CODE, f("code")], [ht.SUPERSCRIPT, f("sup")], [ht.SUBSCRIPT, f("sub")], [ht.HIGHLIGHT, f("mark")], ...Object.entries(s).map(([p, _]) => [p, _])]);
  function k(p) {
    e += 1;
    const _ = w.get(p.type);
    if (!_) {
      console.error("<Storyblok>", `No resolver found for node type ${p.type}`);
      return "";
    }
    if (p.type === "text") {
      return _(p);
    }
    const y = p.content ? p.content.map(v) : undefined;
    return _({
      ...p,
      children: y
    });
  }
  function v(p) {
    if (Array.isArray(p)) {
      return p.map(k);
    } else {
      return k(p);
    }
  }
  return {
    render: v
  };
}
let Sa;
let yu = "https://app.storyblok.com/f/storyblok-v2-latest.js";
const F1 = (t, e, n = {}) => {
  var r;
  const s = typeof window !== "undefined" && typeof window.storyblokRegisterEvent !== "undefined";
  const i = +new URL((r = window.location) == null ? undefined : r.href).searchParams.get("_storyblok") === t;
  if (!!s && !!i) {
    if (!t) {
      console.warn("Story ID is not defined. Please provide a valid ID.");
      return;
    }
    window.storyblokRegisterEvent(() => {
      new window.StoryblokBridge(n).on(["input", "published", "change"], o => {
        if (o.action === "input" && o.story.id === t) {
          e(o.story);
        } else if ((o.action === "change" || o.action === "published") && o.storyId === t) {
          window.location.reload();
        }
      });
    });
  }
};
const Aw = (t = {}) => {
  var e;
  var n;
  const {
    bridge: r,
    accessToken: s,
    use: i = [],
    apiOptions: o = {},
    richText: a = {},
    bridgeUrl: l
  } = t;
  o.accessToken = o.accessToken || s;
  const u = {
    bridge: r,
    apiOptions: o
  };
  let c = {};
  i.forEach(h => {
    c = {
      ...c,
      ...h(u)
    };
  });
  if (l) {
    yu = l;
  }
  const f = typeof window !== "undefined" && ((n = (e = window.location) == null ? undefined : e.search) == null ? undefined : n.includes("_storyblok_tk"));
  if (r !== false && f) {
    jv(yu);
  }
  Sa = new xa(a.schema);
  if (a.resolver) {
    Mw(Sa, a.resolver);
  }
  return c;
};
const Mw = (t, e) => {
  t.addNode("blok", n => {
    let r = "";
    n.attrs.body.forEach(s => {
      r += e(s.component, s);
    });
    return {
      html: r
    };
  });
};
const Iw = t => !t || t == null || !t.content.some(e => e.content || e.type === "blok" || e.type === "horizontal_rule");
const j1 = (t, e, n) => {
  let r = Sa;
  if (!r) {
    console.error("Please initialize the Storyblok SDK before calling the renderRichText function");
    return;
  }
  if (Iw(t)) {
    return "";
  } else {
    return r.render(t, {}, false);
  }
};
const Fd = Xt({
  __name: "StoryblokComponent",
  props: {
    blok: {}
  },
  setup(t, {
    expose: e
  }) {
    const n = t;
    const r = We();
    e({
      value: r
    });
    const s = typeof qs(n.blok.component) != "string";
    const i = De("VueSDKOptions");
    const o = We(n.blok.component);
    if (!s) {
      if (i.enableFallbackComponent) {
        o.value = i.customFallbackComponent ?? "FallbackComponent";
        if (typeof qs(o.value) == "string") {
          console.error(`Is the Fallback component "${o.value}" registered properly?`);
        }
      } else {
        console.error(`Component could not be found for blok "${n.blok.component}"! Is it defined in main.ts as "app.component("${n.blok.component}", ${n.blok.component});"?`);
      }
    }
    return (a, l) => {
      nt();
      return St(qs(o.value), tl({
        ref_key: "blokRef",
        ref: r
      }, {
        ...a.$props,
        ...a.$attrs
      }), null, 16);
    };
  }
});
const Lw = t => {
  var e;
  var n;
  return ze(Fd, {
    blok: (e = t == null ? undefined : t.attrs) == null ? undefined : e.body[0],
    id: (n = t.attrs) == null ? undefined : n.id
  }, t.children);
};
function Bw(t) {
  const e = {
    renderFn: ze,
    textFn: Za,
    resolvers: {
      [Ye.COMPONENT]: Lw,
      ...t.resolvers
    }
  };
  return Ow(e);
}
const Dw = Xt({
  __name: "StoryblokRichText",
  props: {
    doc: {},
    resolvers: {}
  },
  setup(t) {
    const e = t;
    const {
      render: n
    } = Bw({
      resolvers: e.resolvers ?? {}
    });
    const r = () => n(e.doc);
    return (s, i) => {
      nt();
      return St(r);
    };
  }
});
const Nw = {
  beforeMount(t, e) {
    if (e.value) {
      const n = xw(e.value);
      if (Object.keys(n).length > 0) {
        t.setAttribute("data-blok-c", n["data-blok-c"]);
        t.setAttribute("data-blok-uid", n["data-blok-uid"]);
        t.classList.add("storyblok__outline");
      }
    }
  }
};
const $w = t => {
  console.error(`You can't use ${t} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};
let Ca = null;
const U1 = () => {
  if (!Ca) {
    $w("useStoryblokApi");
  }
  return Ca;
};
const Hw = {
  install(t, e = {}) {
    t.directive("editable", Nw);
    t.component("StoryblokComponent", Fd);
    t.component("StoryblokRichText", Dw);
    if (e.enableFallbackComponent && !e.customFallbackComponent) {
      t.component("FallbackComponent", Ao(() => Lt(() => import("./B9liywfG.js"), [], import.meta.url)));
    }
    const {
      storyblokApi: n
    } = Aw(e);
    Ca = n;
    t.provide("VueSDKOptions", e);
  }
};
const Fw = Ze(({
  vueApp: t
}) => {
  let {
    storyblok: e
  } = Dn().public;
  e = JSON.parse(JSON.stringify(e));
  t.use(Hw, {
    ...e,
    use: [kw]
  });
});
function jw(t) {
  return t === "file:";
}
function Uw(t, e, n) {
  if (n) {
    return e.some(r => t === r || t.endsWith(`.${r}`));
  } else {
    return e.includes(t);
  }
}
function Vw() {
  try {
    return localStorage.getItem("plausible_ignore") === "true";
  } catch {
    return false;
  }
}
function zw(t = {}) {
  const {
    url: e,
    referrer: n,
    deviceWidth: r
  } = t;
  return {
    url: e ?? window.location.href,
    referrer: n ?? document.referrer,
    deviceWidth: r ?? window.innerWidth
  };
}
function Ww(t, e, n) {
  return fetch(`${t}/api/event`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify(e)
  }).then(r => {
    if (n != null) {
      n({
        status: r.status
      });
    }
  }).catch(() => {});
}
function Gw(t, e, n, r) {
  return {
    n: t,
    u: n.url,
    d: e.domain,
    r: n.referrer,
    w: n.deviceWidth,
    h: e.hashMode ? 1 : 0,
    p: r && r.props ? JSON.stringify(r.props) : undefined,
    $: r && r.revenue ? r.revenue : undefined
  };
}
function qw(t) {
  const e = window.location.protocol;
  const r = {
    ...{
      enabled: true,
      hashMode: false,
      domain: window.location.hostname,
      apiHost: "https://plausible.io",
      ignoredHostnames: ["localhost"],
      ignoreSubDomains: false,
      logIgnored: false
    },
    ...t
  };
  const s = (a, l) => Ww(r.apiHost, a, l);
  function i(a, l) {
    var f;
    if (!r.enabled) {
      return;
    }
    const u = zw(l == null ? undefined : l.data);
    const c = Gw(a, r, u, l);
    if (jw(e) || Uw(r.domain, r.ignoredHostnames, r.ignoreSubDomains) || Vw()) {
      if (r.logIgnored) {
        console.info(`[Plausible] ${a}`, c);
      }
      if ((f = l == null ? undefined : l.callback) != null) {
        f.call(l, {
          status: null
        });
      }
    } else {
      return s(c, l == null ? undefined : l.callback);
    }
  }
  function o(a) {
    return i("pageview", a);
  }
  window.plausible = i;
  return {
    trackEvent: i,
    trackPageview: o,
    options: r
  };
}
const Kw = Ze({
  name: "plausible",
  setup() {
    const t = Dn().public.plausible;
    if (t.enabled) {
      return {
        provide: {
          plausible: qw({
            ...t,
            logIgnored: t.logIgnoredEvents,
            domain: t.domain || window.location.hostname,
            apiHost: t.proxy ? t.proxyBaseEndpoint : t.apiHost
          })
        }
      };
    } else {
      return undefined;
    }
  }
});
const Yw = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/);
const Xw = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const Jw = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const Qw = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const Zw = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function e1(t) {
  return Xw.test(t) || Jw.test(t.slice(0, 4));
}
function t1(t) {
  return Qw.test(t) || Zw.test(t.slice(0, 4));
}
function n1(t) {
  return /iPad|iPhone|iPod/.test(t);
}
function r1(t) {
  return /android/i.test(t);
}
function s1(t) {
  return /Windows/.test(t);
}
function i1(t) {
  return /Mac OS X/.test(t);
}
const o1 = [{
  name: "Samsung",
  regex: /SamsungBrowser/i
}, {
  name: "Edge",
  regex: /edg(?:[ea]|ios)?\//i
}, {
  name: "Firefox",
  regex: /firefox|iceweasel|fxios/i
}, {
  name: "Chrome",
  regex: /chrome|crios|crmo/i
}, {
  name: "Safari",
  regex: /safari|applewebkit/i
}];
function a1(t) {
  for (const e of o1) {
    if (e.regex.test(t)) {
      return e.name;
    }
  }
  return "";
}
function bu(t, e = {}) {
  let n = false;
  let r = false;
  let s = false;
  let i = false;
  if (t === "Amazon CloudFront") {
    if (e["cloudfront-is-mobile-viewer"] === "true") {
      n = true;
      r = true;
    }
    if (e["cloudfront-is-tablet-viewer"] === "true") {
      n = false;
      r = true;
    }
    if (e["cloudfront-is-desktop-viewer"] === "true") {
      n = false;
      r = false;
    }
    if (e["cloudfront-is-ios-viewer"] === "true") {
      s = true;
    }
    if (e["cloudfront-is-android-viewer"] === "true") {
      i = true;
    }
  } else if (e && e["cf-device-type"]) {
    switch (e["cf-device-type"]) {
      case "mobile":
        n = true;
        r = true;
        break;
      case "tablet":
        n = false;
        r = true;
        break;
      case "desktop":
        n = false;
        r = false;
        break;
    }
  } else {
    n = e1(t);
    r = t1(t);
    s = n1(t);
    i = r1(t);
  }
  const o = s1(t);
  const a = i1(t);
  const l = a1(t);
  const u = l === "Safari";
  const c = l === "Firefox";
  const f = l === "Edge";
  const h = l === "Chrome";
  const d = l === "Samsung";
  const m = Yw.test(t);
  return {
    userAgent: t,
    isMobile: n,
    isMobileOrTablet: r,
    isTablet: !n && r,
    isDesktop: !r,
    isIos: s,
    isAndroid: i,
    isWindows: o,
    isMacOS: a,
    isApple: a || s,
    isDesktopOrTablet: !n,
    isSafari: u,
    isFirefox: c,
    isEdge: f,
    isChrome: h,
    isSamsung: d,
    isCrawler: m
  };
}
const l1 = Ze(() => {
  const t = Dn();
  const e = t.public.device.defaultUserAgent;
  let n;
  {
    const r = navigator.userAgent || e;
    n = Yt(bu(r));
    if (t.public.device.refreshOnResize) {
      window.addEventListener("resize", () => {
        setTimeout(() => {
          const s = bu(navigator.userAgent || r);
          Object.entries(s).forEach(([i, o]) => {
            n[i] = o;
          });
        }, 50);
      });
    }
  }
  return {
    provide: {
      device: n
    }
  };
});
const c1 = Ze(t => {
  var r;
  const n = ((r = Di().query) == null ? undefined : r._storyblok) || false;
  if (n) {
    t.hook("page:finish", () => {
      Bv();
    });
  }
  return {
    provide: {
      preview: n
    }
  };
});
function u1(t, e) {
  const n = {
    ...e
  };
  function r(l) {
    Object.assign(n, l);
  }
  function s() {
    t.trackPageview(n);
  }
  const i = history.pushState;
  function o() {
    if (i) {
      history.pushState = function (...l) {
        i.apply(this, l);
        s();
      };
      window.addEventListener("popstate", s);
    }
    if (t.options.hashMode) {
      window.addEventListener("hashchange", s);
    }
    s();
  }
  function a() {
    if (i) {
      history.pushState = i;
      window.removeEventListener("popstate", s);
    }
    if (t.options.hashMode) {
      window.removeEventListener("hashchange", s);
    }
  }
  return {
    install: o,
    cleanup: a,
    setEventOptions: r
  };
}
const f1 = Ze({
  setup() {
    const t = Dn().public.plausible;
    const {
      $plausible: e
    } = ie();
    if (t.enabled && t.autoPageviews) {
      u1(e).install();
    }
  }
});
const h1 = [Fy, Uy, Pv, Rv, Ov, Av, Iv, $v, Hv, Fv, Fw, Kw, l1, c1, f1];
const d1 = Xt({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(t) {
    const e = t.renderKey;
    const n = t.route;
    const r = {};
    for (const s in t.route) {
      Object.defineProperty(r, s, {
        get: () => e === t.renderKey ? t.route[s] : n[s],
        enumerable: true
      });
    }
    Jn(As, sn(r));
    return () => ze(t.vnode, {
      ref: t.vnodeRef
    });
  }
});
const p1 = Xt({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: undefined
    },
    keepalive: {
      type: [Boolean, Object],
      default: undefined
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(t, {
    attrs: e,
    slots: n,
    expose: r
  }) {
    const s = ie();
    const i = We();
    const o = De(As, null);
    let a;
    r({
      pageRef: i
    });
    const l = De(lh, null);
    let u;
    const c = s.deferHydration();
    if (s.isHydrating) {
      const f = s.hooks.hookOnce("app:error", c);
      Ot().beforeEach(f);
    }
    if (t.pageKey) {
      En(() => t.pageKey, (f, h) => {
        if (f !== h) {
          s.callHook("page:loading:start");
        }
      });
    }
    return () => ze(Lh, {
      name: t.name,
      route: t.route,
      ...e
    }, {
      default: f => {
        const h = m1(o, f.route, f.Component);
        const d = o && o.matched.length === f.route.matched.length;
        if (!f.Component) {
          if (u && !d) {
            return u;
          }
          c();
          return;
        }
        if (u && l && !l.isCurrent(f.route)) {
          return u;
        }
        if (h && o && (!l || l != null && l.isCurrent(o))) {
          if (d) {
            return u;
          } else {
            return null;
          }
        }
        const m = oa(f, t.pageKey);
        if (!s.isHydrating && !_1(o, f.route, f.Component) && a === m) {
          s.callHook("page:loading:end");
        }
        a = m;
        const g = !!(t.transition ?? f.route.meta.pageTransition ?? qo);
        const w = g && g1([t.transition, f.route.meta.pageTransition, qo, {
          onAfterLeave: () => {
            s.callHook("page:transition:finish", f.Component);
          }
        }].filter(Boolean));
        const k = t.keepalive ?? f.route.meta.keepalive ?? w_;
        u = $d(zf, g && w, G0(k, ze(Qa, {
          suspensible: true,
          onPending: () => s.callHook("page:start", f.Component),
          onResolve: () => {
            Ht(() => s.callHook("page:finish", f.Component).then(() => s.callHook("page:loading:end")).finally(c));
          }
        }, {
          default: () => {
            const v = ze(d1, {
              key: m || undefined,
              vnode: n.default ? ze(Ue, undefined, n.default(f)) : f.Component,
              route: f.route,
              renderKey: m || undefined,
              trackRootNodes: g,
              vnodeRef: i
            });
            if (k) {
              v.type.name = f.Component.type.name || f.Component.type.__name || "RouteProvider";
            }
            return v;
          }
        }))).default();
        return u;
      }
    });
  }
});
function g1(t) {
  const e = t.map(n => ({
    ...n,
    onAfterLeave: n.onAfterLeave ? fl(n.onAfterLeave) : undefined
  }));
  return oh(...e);
}
function m1(t, e, n) {
  if (!t) {
    return false;
  }
  const r = e.matched.findIndex(s => {
    var i;
    return ((i = s.components) == null ? undefined : i.default) === (n == null ? undefined : n.type);
  });
  if (!r || r === -1) {
    return false;
  } else {
    return e.matched.slice(0, r).some((s, i) => {
      var o;
      var a;
      var l;
      return ((o = s.components) == null ? undefined : o.default) !== ((l = (a = t.matched[i]) == null ? undefined : a.components) == null ? undefined : l.default);
    }) || n && oa({
      route: e,
      Component: n
    }) !== oa({
      route: t,
      Component: n
    });
  }
}
function _1(t, e, n) {
  if (t) {
    return e.matched.findIndex(s => {
      var i;
      return ((i = s.components) == null ? undefined : i.default) === (n == null ? undefined : n.type);
    }) < e.matched.length - 1;
  } else {
    return false;
  }
}
const y1 = Xt({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(t, e) {
    const n = await xn[t.name]().then(r => r.default || r);
    return () => ze(n, t.layoutProps, e.slots);
  }
});
const b1 = Xt({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(t, e) {
    const n = ie();
    const r = De(As);
    const s = r === Di() ? z0() : r;
    const i = gt(() => {
      let l = fe(t.name) ?? s.meta.layout ?? "default";
      if (l && !(l in xn) && t.fallback) {
        l = fe(t.fallback);
      }
      return l;
    });
    const o = We();
    e.expose({
      layoutRef: o
    });
    const a = n.deferHydration();
    if (n.isHydrating) {
      const l = n.hooks.hookOnce("app:error", a);
      Ot().beforeEach(l);
    }
    return () => {
      const l = i.value && i.value in xn;
      const u = s.meta.layoutTransition ?? v_;
      return $d(zf, l && u, {
        default: () => ze(Qa, {
          suspensible: true,
          onResolve: () => {
            Ht(a);
          }
        }, {
          default: () => ze(v1, {
            layoutProps: tl(e.attrs, {
              ref: o
            }),
            key: i.value || undefined,
            name: i.value,
            shouldProvide: !t.name,
            hasTransition: !!u
          }, e.slots)
        })
      }).default();
    };
  }
});
const v1 = Xt({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(t, e) {
    const n = t.name;
    if (t.shouldProvide) {
      Jn(lh, {
        isCurrent: r => n === (r.meta.layout ?? "default")
      });
    }
    return () => {
      var r;
      var s;
      if (!n || typeof n == "string" && !(n in xn)) {
        if ((s = (r = e.slots).default) == null) {
          return undefined;
        } else {
          return s.call(r);
        }
      } else {
        return ze(y1, {
          key: n,
          layoutProps: t.layoutProps,
          name: n
        }, e.slots);
      }
    };
  }
});
const w1 = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, s] of e) {
    n[r] = s;
  }
  return n;
};
const T1 = {};
function k1(t, e) {
  const n = p1;
  const r = b1;
  nt();
  return St(r, null, {
    default: Ua(() => [ke(n)]),
    _: 1
  });
}
const x1 = w1(T1, [["render", k1]]);
const S1 = {
  __name: "nuxt-error-page",
  props: {
    error: Object
  },
  setup(t) {
    const n = t.error;
    if (n.stack) {
      n.stack.split(`
`).splice(1).map(f => ({
        text: f.replace("webpack:/", "").replace(".vue", ".js").trim(),
        internal: f.includes("node_modules") && !f.includes(".cache") || f.includes("internal") || f.includes("new Promise")
      })).map(f => `<span class="stack${f.internal ? " internal" : ""}">${f.text}</span>`).join(`
`);
    }
    const r = Number(n.statusCode || 500);
    const s = r === 404;
    const i = n.statusMessage ?? (s ? "Page Not Found" : "Internal Server Error");
    const o = n.message || n.toString();
    const a = undefined;
    const c = s ? Ao(() => Lt(() => import("./DvwbKJp4.js"), __vite__mapDeps([16, 3, 7, 17]), import.meta.url)) : Ao(() => Lt(() => import("./GEprlJgH.js"), __vite__mapDeps([18, 7, 19]), import.meta.url));
    return (f, h) => {
      nt();
      return St(fe(c), Qd($f({
        statusCode: fe(r),
        statusMessage: fe(i),
        description: fe(o),
        stack: fe(a)
      })), null, 16);
    };
  }
};
const C1 = {
  key: 0
};
const vu = {
  __name: "nuxt-root",
  setup(t) {
    const e = () => null;
    const n = ie();
    const r = n.deferHydration();
    if (n.isHydrating) {
      const l = n.hooks.hookOnce("app:error", r);
      Ot().beforeEach(l);
    }
    const s = false;
    Jn(As, Di());
    n.hooks.callHookWith(l => l.map(u => u()), "vue:setup");
    const i = Ni();
    const o = false;
    uf((l, u, c) => {
      n.hooks.callHook("vue:error", l, u, c).catch(f => console.error("[nuxt] Error in `vue:error` hook", f));
      if (U_(l) && (l.fatal || l.unhandled)) {
        n.runWithContext(() => yr(l));
        return false;
      }
    });
    const a = false;
    return (l, u) => {
      nt();
      return St(Qa, {
        onResolve: fe(r)
      }, {
        default: Ua(() => [fe(o) ? (nt(), Pg("div", C1)) : fe(i) ? (nt(), St(fe(S1), {
          key: 1,
          error: fe(i)
        }, null, 8, ["error"])) : fe(a) ? (nt(), St(fe(e), {
          key: 2,
          context: fe(a)
        }, null, 8, ["context"])) : fe(s) ? (nt(), St(qs(fe(s)), {
          key: 3
        })) : (nt(), St(fe(x1), {
          key: 4
        }))]),
        _: 1
      }, 8, ["onResolve"]);
    };
  }
};
let wu;
{
  let t;
  wu = async function () {
    var o;
    var a;
    if (t) {
      return t;
    }
    const r = ((o = window.__NUXT__) == null ? undefined : o.serverRendered) ?? ((a = document.getElementById("__NUXT_DATA__")) == null ? undefined : a.dataset.ssr) === "true" ? dm(vu) : hm(vu);
    const s = C_({
      vueApp: r
    });
    async function i(l) {
      await s.callHook("app:error", l);
      s.payload.error = s.payload.error || Ms(l);
    }
    r.config.errorHandler = i;
    try {
      await R_(s, h1);
    } catch (l) {
      i(l);
    }
    try {
      await s.hooks.callHook("app:created", r);
      await s.hooks.callHook("app:beforeMount", r);
      r.mount(k_);
      await s.hooks.callHook("app:mounted", r);
      await Ht();
    } catch (l) {
      i(l);
    }
    if (r.config.errorHandler === i) {
      r.config.errorHandler = undefined;
    }
    return r;
  };
  t = wu().catch(e => {
    console.error("Error while mounting app:", e);
    throw e;
  });
}
export { Om as $, O1 as A, H1 as B, U1 as C, j1 as D, R1 as E, Ue as F, N1 as G, A1 as H, En as I, zp as J, Vp as K, ea as L, Os as M, B1 as N, Ku as O, Ce as P, M1 as Q, p1 as R, Ot as S, Xt as T, zi as U, hu as V, $1 as W, ze as X, F1 as Y, E1 as Z, w1 as _, Nf as a, L1 as a0, lr as a1, F_ as a2, il as a3, Dn as a4, zo as a5, sl as a6, ke as b, Pg as c, Za as d, ie as e, za as f, Ga as g, Vi as h, fe as i, Oi as j, I1 as k, St as l, Ai as m, Ht as n, nt as o, Di as p, gt as q, We as r, P1 as s, tp as t, In as u, Wa as v, Ua as w, D1 as x, qs as y, lf as z };