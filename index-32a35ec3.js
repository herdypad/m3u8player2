(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = i(n);
    fetch(n.href, r);
  }
})();
function Eu(t, e) {
  const i = Object.create(null),
    s = t.split(",");
  for (let n = 0; n < s.length; n++) i[s[n]] = !0;
  return e ? (n) => !!i[n.toLowerCase()] : (n) => !!i[n];
}
function Cu(t) {
  if (me(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++) {
      const s = t[i],
        n = Qe(s) ? Iy(s) : Cu(s);
      if (n) for (const r in n) e[r] = n[r];
    }
    return e;
  } else {
    if (Qe(t)) return t;
    if ($e(t)) return t;
  }
}
const wy = /;(?![^(]*\))/g,
  Ay = /:([^]+)/,
  ky = /\/\*.*?\*\//gs;
function Iy(t) {
  const e = {};
  return (
    t
      .replace(ky, "")
      .split(wy)
      .forEach((i) => {
        if (i) {
          const s = i.split(Ay);
          s.length > 1 && (e[s[0].trim()] = s[1].trim());
        }
      }),
    e
  );
}
function js(t) {
  let e = "";
  if (Qe(t)) e = t;
  else if (me(t))
    for (let i = 0; i < t.length; i++) {
      const s = js(t[i]);
      s && (e += s + " ");
    }
  else if ($e(t)) for (const i in t) t[i] && (e += i + " ");
  return e.trim();
}
const Oy =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Py = Eu(Oy);
function Mf(t) {
  return !!t || t === "";
}
const Dy = (t) =>
    Qe(t)
      ? t
      : t == null
      ? ""
      : me(t) || ($e(t) && (t.toString === $f || !_e(t.toString)))
      ? JSON.stringify(t, Uf, 2)
      : String(t),
  Uf = (t, e) =>
    e && e.__v_isRef
      ? Uf(t, e.value)
      : Vs(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (i, [s, n]) => ((i[`${s} =>`] = n), i),
            {}
          ),
        }
      : Ff(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : $e(e) && !me(e) && !jf(e)
      ? String(e)
      : e,
  Fe = {},
  Hs = [],
  Yt = () => {},
  Ly = () => !1,
  Ry = /^on[^a-z]/,
  ho = (t) => Ry.test(t),
  wu = (t) => t.startsWith("onUpdate:"),
  vt = Object.assign,
  Au = (t, e) => {
    const i = t.indexOf(e);
    i > -1 && t.splice(i, 1);
  },
  Ny = Object.prototype.hasOwnProperty,
  Se = (t, e) => Ny.call(t, e),
  me = Array.isArray,
  Vs = (t) => fo(t) === "[object Map]",
  Ff = (t) => fo(t) === "[object Set]",
  _e = (t) => typeof t == "function",
  Qe = (t) => typeof t == "string",
  ku = (t) => typeof t == "symbol",
  $e = (t) => t !== null && typeof t == "object",
  Bf = (t) => $e(t) && _e(t.then) && _e(t.catch),
  $f = Object.prototype.toString,
  fo = (t) => $f.call(t),
  My = (t) => fo(t).slice(8, -1),
  jf = (t) => fo(t) === "[object Object]",
  Iu = (t) =>
    Qe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  xa = Eu(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  po = (t) => {
    const e = Object.create(null);
    return (i) => e[i] || (e[i] = t(i));
  },
  Uy = /-(\w)/g,
  Zs = po((t) => t.replace(Uy, (e, i) => (i ? i.toUpperCase() : ""))),
  Fy = /\B([A-Z])/g,
  mn = po((t) => t.replace(Fy, "-$1").toLowerCase()),
  Hf = po((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  ol = po((t) => (t ? `on${Hf(t)}` : "")),
  or = (t, e) => !Object.is(t, e),
  ll = (t, e) => {
    for (let i = 0; i < t.length; i++) t[i](e);
  },
  Da = (t, e, i) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: i });
  },
  By = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let Bd;
const $y = () =>
  Bd ||
  (Bd =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let zt;
class jy {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = zt),
      !e && zt && (this.index = (zt.scopes || (zt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const i = zt;
      try {
        return (zt = this), e();
      } finally {
        zt = i;
      }
    }
  }
  on() {
    zt = this;
  }
  off() {
    zt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let i, s;
      for (i = 0, s = this.effects.length; i < s; i++) this.effects[i].stop();
      for (i = 0, s = this.cleanups.length; i < s; i++) this.cleanups[i]();
      if (this.scopes)
        for (i = 0, s = this.scopes.length; i < s; i++) this.scopes[i].stop(!0);
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n &&
          n !== this &&
          ((this.parent.scopes[this.index] = n), (n.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Hy(t, e = zt) {
  e && e.active && e.effects.push(t);
}
function Vy() {
  return zt;
}
const Ou = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  Vf = (t) => (t.w & zi) > 0,
  Wf = (t) => (t.n & zi) > 0,
  Wy = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= zi;
  },
  qy = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let i = 0;
      for (let s = 0; s < e.length; s++) {
        const n = e[s];
        Vf(n) && !Wf(n) ? n.delete(t) : (e[i++] = n),
          (n.w &= ~zi),
          (n.n &= ~zi);
      }
      e.length = i;
    }
  },
  Ul = new WeakMap();
let qn = 0,
  zi = 1;
const Fl = 30;
let Kt;
const ms = Symbol(""),
  Bl = Symbol("");
class Pu {
  constructor(e, i = null, s) {
    (this.fn = e),
      (this.scheduler = i),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Hy(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Kt,
      i = Wi;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Kt),
        (Kt = this),
        (Wi = !0),
        (zi = 1 << ++qn),
        qn <= Fl ? Wy(this) : $d(this),
        this.fn()
      );
    } finally {
      qn <= Fl && qy(this),
        (zi = 1 << --qn),
        (Kt = this.parent),
        (Wi = i),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Kt === this
      ? (this.deferStop = !0)
      : this.active &&
        ($d(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function $d(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let i = 0; i < e.length; i++) e[i].delete(t);
    e.length = 0;
  }
}
let Wi = !0;
const qf = [];
function gn() {
  qf.push(Wi), (Wi = !1);
}
function _n() {
  const t = qf.pop();
  Wi = t === void 0 ? !0 : t;
}
function kt(t, e, i) {
  if (Wi && Kt) {
    let s = Ul.get(t);
    s || Ul.set(t, (s = new Map()));
    let n = s.get(i);
    n || s.set(i, (n = Ou())), zf(n);
  }
}
function zf(t, e) {
  let i = !1;
  qn <= Fl ? Wf(t) || ((t.n |= zi), (i = !Vf(t))) : (i = !t.has(Kt)),
    i && (t.add(Kt), Kt.deps.push(t));
}
function Pi(t, e, i, s, n, r) {
  const a = Ul.get(t);
  if (!a) return;
  let o = [];
  if (e === "clear") o = [...a.values()];
  else if (i === "length" && me(t)) {
    const u = Number(s);
    a.forEach((f, p) => {
      (p === "length" || p >= u) && o.push(f);
    });
  } else
    switch ((i !== void 0 && o.push(a.get(i)), e)) {
      case "add":
        me(t)
          ? Iu(i) && o.push(a.get("length"))
          : (o.push(a.get(ms)), Vs(t) && o.push(a.get(Bl)));
        break;
      case "delete":
        me(t) || (o.push(a.get(ms)), Vs(t) && o.push(a.get(Bl)));
        break;
      case "set":
        Vs(t) && o.push(a.get(ms));
        break;
    }
  if (o.length === 1) o[0] && $l(o[0]);
  else {
    const u = [];
    for (const f of o) f && u.push(...f);
    $l(Ou(u));
  }
}
function $l(t, e) {
  const i = me(t) ? t : [...t];
  for (const s of i) s.computed && jd(s);
  for (const s of i) s.computed || jd(s);
}
function jd(t, e) {
  (t !== Kt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const zy = Eu("__proto__,__v_isRef,__isVue"),
  Gf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(ku)
  ),
  Gy = Du(),
  Ky = Du(!1, !0),
  Xy = Du(!0),
  Hd = Yy();
function Yy() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...i) {
        const s = Ce(this);
        for (let r = 0, a = this.length; r < a; r++) kt(s, "get", r + "");
        const n = s[e](...i);
        return n === -1 || n === !1 ? s[e](...i.map(Ce)) : n;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...i) {
        gn();
        const s = Ce(this)[e].apply(this, i);
        return _n(), s;
      };
    }),
    t
  );
}
function Qy(t) {
  const e = Ce(this);
  return kt(e, "has", t), e.hasOwnProperty(t);
}
function Du(t = !1, e = !1) {
  return function (s, n, r) {
    if (n === "__v_isReactive") return !t;
    if (n === "__v_isReadonly") return t;
    if (n === "__v_isShallow") return e;
    if (n === "__v_raw" && r === (t ? (e ? fv : Jf) : e ? Qf : Yf).get(s))
      return s;
    const a = me(s);
    if (!t) {
      if (a && Se(Hd, n)) return Reflect.get(Hd, n, r);
      if (n === "hasOwnProperty") return Qy;
    }
    const o = Reflect.get(s, n, r);
    return (ku(n) ? Gf.has(n) : zy(n)) || (t || kt(s, "get", n), e)
      ? o
      : st(o)
      ? a && Iu(n)
        ? o
        : o.value
      : $e(o)
      ? t
        ? Mu(o)
        : Nu(o)
      : o;
  };
}
const Jy = Kf(),
  Zy = Kf(!0);
function Kf(t = !1) {
  return function (i, s, n, r) {
    let a = i[s];
    if (en(a) && st(a) && !st(n)) return !1;
    if (
      !t &&
      (!La(n) && !en(n) && ((a = Ce(a)), (n = Ce(n))),
      !me(i) && st(a) && !st(n))
    )
      return (a.value = n), !0;
    const o = me(i) && Iu(s) ? Number(s) < i.length : Se(i, s),
      u = Reflect.set(i, s, n, r);
    return (
      i === Ce(r) && (o ? or(n, a) && Pi(i, "set", s, n) : Pi(i, "add", s, n)),
      u
    );
  };
}
function ev(t, e) {
  const i = Se(t, e);
  t[e];
  const s = Reflect.deleteProperty(t, e);
  return s && i && Pi(t, "delete", e, void 0), s;
}
function tv(t, e) {
  const i = Reflect.has(t, e);
  return (!ku(e) || !Gf.has(e)) && kt(t, "has", e), i;
}
function iv(t) {
  return kt(t, "iterate", me(t) ? "length" : ms), Reflect.ownKeys(t);
}
const Xf = { get: Gy, set: Jy, deleteProperty: ev, has: tv, ownKeys: iv },
  sv = {
    get: Xy,
    set(t, e) {
      return !0;
    },
    deleteProperty(t, e) {
      return !0;
    },
  },
  nv = vt({}, Xf, { get: Ky, set: Zy }),
  Lu = (t) => t,
  mo = (t) => Reflect.getPrototypeOf(t);
function la(t, e, i = !1, s = !1) {
  t = t.__v_raw;
  const n = Ce(t),
    r = Ce(e);
  i || (e !== r && kt(n, "get", e), kt(n, "get", r));
  const { has: a } = mo(n),
    o = s ? Lu : i ? Fu : lr;
  if (a.call(n, e)) return o(t.get(e));
  if (a.call(n, r)) return o(t.get(r));
  t !== n && t.get(e);
}
function ua(t, e = !1) {
  const i = this.__v_raw,
    s = Ce(i),
    n = Ce(t);
  return (
    e || (t !== n && kt(s, "has", t), kt(s, "has", n)),
    t === n ? i.has(t) : i.has(t) || i.has(n)
  );
}
function ca(t, e = !1) {
  return (
    (t = t.__v_raw), !e && kt(Ce(t), "iterate", ms), Reflect.get(t, "size", t)
  );
}
function Vd(t) {
  t = Ce(t);
  const e = Ce(this);
  return mo(e).has.call(e, t) || (e.add(t), Pi(e, "add", t, t)), this;
}
function Wd(t, e) {
  e = Ce(e);
  const i = Ce(this),
    { has: s, get: n } = mo(i);
  let r = s.call(i, t);
  r || ((t = Ce(t)), (r = s.call(i, t)));
  const a = n.call(i, t);
  return (
    i.set(t, e), r ? or(e, a) && Pi(i, "set", t, e) : Pi(i, "add", t, e), this
  );
}
function qd(t) {
  const e = Ce(this),
    { has: i, get: s } = mo(e);
  let n = i.call(e, t);
  n || ((t = Ce(t)), (n = i.call(e, t))), s && s.call(e, t);
  const r = e.delete(t);
  return n && Pi(e, "delete", t, void 0), r;
}
function zd() {
  const t = Ce(this),
    e = t.size !== 0,
    i = t.clear();
  return e && Pi(t, "clear", void 0, void 0), i;
}
function da(t, e) {
  return function (s, n) {
    const r = this,
      a = r.__v_raw,
      o = Ce(a),
      u = e ? Lu : t ? Fu : lr;
    return (
      !t && kt(o, "iterate", ms), a.forEach((f, p) => s.call(n, u(f), u(p), r))
    );
  };
}
function ha(t, e, i) {
  return function (...s) {
    const n = this.__v_raw,
      r = Ce(n),
      a = Vs(r),
      o = t === "entries" || (t === Symbol.iterator && a),
      u = t === "keys" && a,
      f = n[t](...s),
      p = i ? Lu : e ? Fu : lr;
    return (
      !e && kt(r, "iterate", u ? Bl : ms),
      {
        next() {
          const { value: _, done: v } = f.next();
          return v
            ? { value: _, done: v }
            : { value: o ? [p(_[0]), p(_[1])] : p(_), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function $i(t) {
  return function (...e) {
    return t === "delete" ? !1 : this;
  };
}
function rv() {
  const t = {
      get(r) {
        return la(this, r);
      },
      get size() {
        return ca(this);
      },
      has: ua,
      add: Vd,
      set: Wd,
      delete: qd,
      clear: zd,
      forEach: da(!1, !1),
    },
    e = {
      get(r) {
        return la(this, r, !1, !0);
      },
      get size() {
        return ca(this);
      },
      has: ua,
      add: Vd,
      set: Wd,
      delete: qd,
      clear: zd,
      forEach: da(!1, !0),
    },
    i = {
      get(r) {
        return la(this, r, !0);
      },
      get size() {
        return ca(this, !0);
      },
      has(r) {
        return ua.call(this, r, !0);
      },
      add: $i("add"),
      set: $i("set"),
      delete: $i("delete"),
      clear: $i("clear"),
      forEach: da(!0, !1),
    },
    s = {
      get(r) {
        return la(this, r, !0, !0);
      },
      get size() {
        return ca(this, !0);
      },
      has(r) {
        return ua.call(this, r, !0);
      },
      add: $i("add"),
      set: $i("set"),
      delete: $i("delete"),
      clear: $i("clear"),
      forEach: da(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (t[r] = ha(r, !1, !1)),
        (i[r] = ha(r, !0, !1)),
        (e[r] = ha(r, !1, !0)),
        (s[r] = ha(r, !0, !0));
    }),
    [t, i, e, s]
  );
}
const [av, ov, lv, uv] = rv();
function Ru(t, e) {
  const i = e ? (t ? uv : lv) : t ? ov : av;
  return (s, n, r) =>
    n === "__v_isReactive"
      ? !t
      : n === "__v_isReadonly"
      ? t
      : n === "__v_raw"
      ? s
      : Reflect.get(Se(i, n) && n in s ? i : s, n, r);
}
const cv = { get: Ru(!1, !1) },
  dv = { get: Ru(!1, !0) },
  hv = { get: Ru(!0, !1) },
  Yf = new WeakMap(),
  Qf = new WeakMap(),
  Jf = new WeakMap(),
  fv = new WeakMap();
function pv(t) {
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
function mv(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : pv(My(t));
}
function Nu(t) {
  return en(t) ? t : Uu(t, !1, Xf, cv, Yf);
}
function gv(t) {
  return Uu(t, !1, nv, dv, Qf);
}
function Mu(t) {
  return Uu(t, !0, sv, hv, Jf);
}
function Uu(t, e, i, s, n) {
  if (!$e(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const r = n.get(t);
  if (r) return r;
  const a = mv(t);
  if (a === 0) return t;
  const o = new Proxy(t, a === 2 ? s : i);
  return n.set(t, o), o;
}
function Ws(t) {
  return en(t) ? Ws(t.__v_raw) : !!(t && t.__v_isReactive);
}
function en(t) {
  return !!(t && t.__v_isReadonly);
}
function La(t) {
  return !!(t && t.__v_isShallow);
}
function Zf(t) {
  return Ws(t) || en(t);
}
function Ce(t) {
  const e = t && t.__v_raw;
  return e ? Ce(e) : t;
}
function ep(t) {
  return Da(t, "__v_skip", !0), t;
}
const lr = (t) => ($e(t) ? Nu(t) : t),
  Fu = (t) => ($e(t) ? Mu(t) : t);
function tp(t) {
  Wi && Kt && ((t = Ce(t)), zf(t.dep || (t.dep = Ou())));
}
function ip(t, e) {
  t = Ce(t);
  const i = t.dep;
  i && $l(i);
}
function st(t) {
  return !!(t && t.__v_isRef === !0);
}
function zn(t) {
  return sp(t, !1);
}
function Sa(t) {
  return sp(t, !0);
}
function sp(t, e) {
  return st(t) ? t : new _v(t, e);
}
class _v {
  constructor(e, i) {
    (this.__v_isShallow = i),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = i ? e : Ce(e)),
      (this._value = i ? e : lr(e));
  }
  get value() {
    return tp(this), this._value;
  }
  set value(e) {
    const i = this.__v_isShallow || La(e) || en(e);
    (e = i ? e : Ce(e)),
      or(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = i ? e : lr(e)), ip(this));
  }
}
function jl(t) {
  return st(t) ? t.value : t;
}
const yv = {
  get: (t, e, i) => jl(Reflect.get(t, e, i)),
  set: (t, e, i, s) => {
    const n = t[e];
    return st(n) && !st(i) ? ((n.value = i), !0) : Reflect.set(t, e, i, s);
  },
};
function np(t) {
  return Ws(t) ? t : new Proxy(t, yv);
}
var rp;
class vv {
  constructor(e, i, s, n) {
    (this._setter = i),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[rp] = !1),
      (this._dirty = !0),
      (this.effect = new Pu(e, () => {
        this._dirty || ((this._dirty = !0), ip(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !n),
      (this.__v_isReadonly = s);
  }
  get value() {
    const e = Ce(this);
    return (
      tp(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
rp = "__v_isReadonly";
function Tv(t, e, i = !1) {
  let s, n;
  const r = _e(t);
  return (
    r ? ((s = t), (n = Yt)) : ((s = t.get), (n = t.set)),
    new vv(s, n, r || !n, i)
  );
}
function qi(t, e, i, s) {
  let n;
  try {
    n = s ? t(...s) : t();
  } catch (r) {
    go(r, e, i);
  }
  return n;
}
function Qt(t, e, i, s) {
  if (_e(t)) {
    const r = qi(t, e, i, s);
    return (
      r &&
        Bf(r) &&
        r.catch((a) => {
          go(a, e, i);
        }),
      r
    );
  }
  const n = [];
  for (let r = 0; r < t.length; r++) n.push(Qt(t[r], e, i, s));
  return n;
}
function go(t, e, i, s = !0) {
  const n = e ? e.vnode : null;
  if (e) {
    let r = e.parent;
    const a = e.proxy,
      o = i;
    for (; r; ) {
      const f = r.ec;
      if (f) {
        for (let p = 0; p < f.length; p++) if (f[p](t, a, o) === !1) return;
      }
      r = r.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      qi(u, null, 10, [t, a, o]);
      return;
    }
  }
}
let ur = !1,
  Hl = !1;
const tt = [];
let li = 0;
const qs = [];
let wi = null,
  ds = 0;
const ap = Promise.resolve();
let Bu = null;
function bv(t) {
  const e = Bu || ap;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function xv(t) {
  let e = li + 1,
    i = tt.length;
  for (; e < i; ) {
    const s = (e + i) >>> 1;
    cr(tt[s]) < t ? (e = s + 1) : (i = s);
  }
  return e;
}
function $u(t) {
  (!tt.length || !tt.includes(t, ur && t.allowRecurse ? li + 1 : li)) &&
    (t.id == null ? tt.push(t) : tt.splice(xv(t.id), 0, t), op());
}
function op() {
  !ur && !Hl && ((Hl = !0), (Bu = ap.then(up)));
}
function Sv(t) {
  const e = tt.indexOf(t);
  e > li && tt.splice(e, 1);
}
function Ev(t) {
  me(t)
    ? qs.push(...t)
    : (!wi || !wi.includes(t, t.allowRecurse ? ds + 1 : ds)) && qs.push(t),
    op();
}
function Gd(t, e = ur ? li + 1 : 0) {
  for (; e < tt.length; e++) {
    const i = tt[e];
    i && i.pre && (tt.splice(e, 1), e--, i());
  }
}
function lp(t) {
  if (qs.length) {
    const e = [...new Set(qs)];
    if (((qs.length = 0), wi)) {
      wi.push(...e);
      return;
    }
    for (wi = e, wi.sort((i, s) => cr(i) - cr(s)), ds = 0; ds < wi.length; ds++)
      wi[ds]();
    (wi = null), (ds = 0);
  }
}
const cr = (t) => (t.id == null ? 1 / 0 : t.id),
  Cv = (t, e) => {
    const i = cr(t) - cr(e);
    if (i === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return i;
  };
function up(t) {
  (Hl = !1), (ur = !0), tt.sort(Cv);
  const e = Yt;
  try {
    for (li = 0; li < tt.length; li++) {
      const i = tt[li];
      i && i.active !== !1 && qi(i, null, 14);
    }
  } finally {
    (li = 0),
      (tt.length = 0),
      lp(),
      (ur = !1),
      (Bu = null),
      (tt.length || qs.length) && up();
  }
}
function wv(t, e, ...i) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || Fe;
  let n = i;
  const r = e.startsWith("update:"),
    a = r && e.slice(7);
  if (a && a in s) {
    const p = `${a === "modelValue" ? "model" : a}Modifiers`,
      { number: _, trim: v } = s[p] || Fe;
    v && (n = i.map((y) => (Qe(y) ? y.trim() : y))), _ && (n = i.map(By));
  }
  let o,
    u = s[(o = ol(e))] || s[(o = ol(Zs(e)))];
  !u && r && (u = s[(o = ol(mn(e)))]), u && Qt(u, t, 6, n);
  const f = s[o + "Once"];
  if (f) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[o]) return;
    (t.emitted[o] = !0), Qt(f, t, 6, n);
  }
}
function cp(t, e, i = !1) {
  const s = e.emitsCache,
    n = s.get(t);
  if (n !== void 0) return n;
  const r = t.emits;
  let a = {},
    o = !1;
  if (!_e(t)) {
    const u = (f) => {
      const p = cp(f, e, !0);
      p && ((o = !0), vt(a, p));
    };
    !i && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  return !r && !o
    ? ($e(t) && s.set(t, null), null)
    : (me(r) ? r.forEach((u) => (a[u] = null)) : vt(a, r),
      $e(t) && s.set(t, a),
      a);
}
function _o(t, e) {
  return !t || !ho(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      Se(t, e[0].toLowerCase() + e.slice(1)) || Se(t, mn(e)) || Se(t, e));
}
let ui = null,
  dp = null;
function Ra(t) {
  const e = ui;
  return (ui = t), (dp = (t && t.type.__scopeId) || null), e;
}
function Av(t, e = ui, i) {
  if (!e || t._n) return t;
  const s = (...n) => {
    s._d && th(-1);
    const r = Ra(e);
    let a;
    try {
      a = t(...n);
    } finally {
      Ra(r), s._d && th(1);
    }
    return a;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function ul(t) {
  const {
    type: e,
    vnode: i,
    proxy: s,
    withProxy: n,
    props: r,
    propsOptions: [a],
    slots: o,
    attrs: u,
    emit: f,
    render: p,
    renderCache: _,
    data: v,
    setupState: y,
    ctx: A,
    inheritAttrs: S,
  } = t;
  let E, k;
  const D = Ra(t);
  try {
    if (i.shapeFlag & 4) {
      const N = n || s;
      (E = ai(p.call(N, N, _, r, y, v, A))), (k = u);
    } else {
      const N = e;
      (E = ai(
        N.length > 1 ? N(r, { attrs: u, slots: o, emit: f }) : N(r, null)
      )),
        (k = e.props ? u : kv(u));
    }
  } catch (N) {
    (er.length = 0), go(N, t, 1), (E = wt(dr));
  }
  let R = E;
  if (k && S !== !1) {
    const N = Object.keys(k),
      { shapeFlag: L } = R;
    N.length && L & 7 && (a && N.some(wu) && (k = Iv(k, a)), (R = tn(R, k)));
  }
  return (
    i.dirs && ((R = tn(R)), (R.dirs = R.dirs ? R.dirs.concat(i.dirs) : i.dirs)),
    i.transition && (R.transition = i.transition),
    (E = R),
    Ra(D),
    E
  );
}
const kv = (t) => {
    let e;
    for (const i in t)
      (i === "class" || i === "style" || ho(i)) && ((e || (e = {}))[i] = t[i]);
    return e;
  },
  Iv = (t, e) => {
    const i = {};
    for (const s in t) (!wu(s) || !(s.slice(9) in e)) && (i[s] = t[s]);
    return i;
  };
function Ov(t, e, i) {
  const { props: s, children: n, component: r } = t,
    { props: a, children: o, patchFlag: u } = e,
    f = r.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (i && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? Kd(s, a, f) : !!a;
    if (u & 8) {
      const p = e.dynamicProps;
      for (let _ = 0; _ < p.length; _++) {
        const v = p[_];
        if (a[v] !== s[v] && !_o(f, v)) return !0;
      }
    }
  } else
    return (n || o) && (!o || !o.$stable)
      ? !0
      : s === a
      ? !1
      : s
      ? a
        ? Kd(s, a, f)
        : !0
      : !!a;
  return !1;
}
function Kd(t, e, i) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let n = 0; n < s.length; n++) {
    const r = s[n];
    if (e[r] !== t[r] && !_o(i, r)) return !0;
  }
  return !1;
}
function Pv({ vnode: t, parent: e }, i) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = i), (e = e.parent);
}
const Dv = (t) => t.__isSuspense;
function Lv(t, e) {
  e && e.pendingBranch
    ? me(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Ev(t);
}
function Rv(t, e) {
  if (Ge) {
    let i = Ge.provides;
    const s = Ge.parent && Ge.parent.provides;
    s === i && (i = Ge.provides = Object.create(s)), (i[t] = e);
  }
}
function Ea(t, e, i = !1) {
  const s = Ge || ui;
  if (s) {
    const n =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (n && t in n) return n[t];
    if (arguments.length > 1) return i && _e(e) ? e.call(s.proxy) : e;
  }
}
const fa = {};
function zs(t, e, i) {
  return hp(t, e, i);
}
function hp(
  t,
  e,
  { immediate: i, deep: s, flush: n, onTrack: r, onTrigger: a } = Fe
) {
  const o = Vy() === (Ge == null ? void 0 : Ge.scope) ? Ge : null;
  let u,
    f = !1,
    p = !1;
  if (
    (st(t)
      ? ((u = () => t.value), (f = La(t)))
      : Ws(t)
      ? ((u = () => t), (s = !0))
      : me(t)
      ? ((p = !0),
        (f = t.some((R) => Ws(R) || La(R))),
        (u = () =>
          t.map((R) => {
            if (st(R)) return R.value;
            if (Ws(R)) return Ms(R);
            if (_e(R)) return qi(R, o, 2);
          })))
      : _e(t)
      ? e
        ? (u = () => qi(t, o, 2))
        : (u = () => {
            if (!(o && o.isUnmounted)) return _ && _(), Qt(t, o, 3, [v]);
          })
      : (u = Yt),
    e && s)
  ) {
    const R = u;
    u = () => Ms(R());
  }
  let _,
    v = (R) => {
      _ = k.onStop = () => {
        qi(R, o, 4);
      };
    },
    y;
  if (fr)
    if (
      ((v = Yt),
      e ? i && Qt(e, o, 3, [u(), p ? [] : void 0, v]) : u(),
      n === "sync")
    ) {
      const R = wT();
      y = R.__watcherHandles || (R.__watcherHandles = []);
    } else return Yt;
  let A = p ? new Array(t.length).fill(fa) : fa;
  const S = () => {
    if (k.active)
      if (e) {
        const R = k.run();
        (s || f || (p ? R.some((N, L) => or(N, A[L])) : or(R, A))) &&
          (_ && _(),
          Qt(e, o, 3, [R, A === fa ? void 0 : p && A[0] === fa ? [] : A, v]),
          (A = R));
      } else k.run();
  };
  S.allowRecurse = !!e;
  let E;
  n === "sync"
    ? (E = S)
    : n === "post"
    ? (E = () => xt(S, o && o.suspense))
    : ((S.pre = !0), o && (S.id = o.uid), (E = () => $u(S)));
  const k = new Pu(u, E);
  e
    ? i
      ? S()
      : (A = k.run())
    : n === "post"
    ? xt(k.run.bind(k), o && o.suspense)
    : k.run();
  const D = () => {
    k.stop(), o && o.scope && Au(o.scope.effects, k);
  };
  return y && y.push(D), D;
}
function Nv(t, e, i) {
  const s = this.proxy,
    n = Qe(t) ? (t.includes(".") ? fp(s, t) : () => s[t]) : t.bind(s, s);
  let r;
  _e(e) ? (r = e) : ((r = e.handler), (i = e));
  const a = Ge;
  sn(this);
  const o = hp(n, r.bind(s), i);
  return a ? sn(a) : gs(), o;
}
function fp(t, e) {
  const i = e.split(".");
  return () => {
    let s = t;
    for (let n = 0; n < i.length && s; n++) s = s[i[n]];
    return s;
  };
}
function Ms(t, e) {
  if (!$e(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), st(t))) Ms(t.value, e);
  else if (me(t)) for (let i = 0; i < t.length; i++) Ms(t[i], e);
  else if (Ff(t) || Vs(t))
    t.forEach((i) => {
      Ms(i, e);
    });
  else if (jf(t)) for (const i in t) Ms(t[i], e);
  return t;
}
function Mv(t) {
  return _e(t) ? { setup: t, name: t.name } : t;
}
const Ca = (t) => !!t.type.__asyncLoader,
  pp = (t) => t.type.__isKeepAlive;
function Uv(t, e) {
  mp(t, "a", e);
}
function Fv(t, e) {
  mp(t, "da", e);
}
function mp(t, e, i = Ge) {
  const s =
    t.__wdc ||
    (t.__wdc = () => {
      let n = i;
      for (; n; ) {
        if (n.isDeactivated) return;
        n = n.parent;
      }
      return t();
    });
  if ((yo(e, s, i), i)) {
    let n = i.parent;
    for (; n && n.parent; )
      pp(n.parent.vnode) && Bv(s, e, i, n), (n = n.parent);
  }
}
function Bv(t, e, i, s) {
  const n = yo(e, t, s, !0);
  yp(() => {
    Au(s[e], n);
  }, i);
}
function yo(t, e, i = Ge, s = !1) {
  if (i) {
    const n = i[t] || (i[t] = []),
      r =
        e.__weh ||
        (e.__weh = (...a) => {
          if (i.isUnmounted) return;
          gn(), sn(i);
          const o = Qt(e, i, t, a);
          return gs(), _n(), o;
        });
    return s ? n.unshift(r) : n.push(r), r;
  }
}
const Ui =
    (t) =>
    (e, i = Ge) =>
      (!fr || t === "sp") && yo(t, (...s) => e(...s), i),
  $v = Ui("bm"),
  gp = Ui("m"),
  jv = Ui("bu"),
  Hv = Ui("u"),
  _p = Ui("bum"),
  yp = Ui("um"),
  Vv = Ui("sp"),
  Wv = Ui("rtg"),
  qv = Ui("rtc");
function zv(t, e = Ge) {
  yo("ec", t, e);
}
function as(t, e, i, s) {
  const n = t.dirs,
    r = e && e.dirs;
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    r && (o.oldValue = r[a].value);
    let u = o.dir[s];
    u && (gn(), Qt(u, i, 8, [t.el, o, t, e]), _n());
  }
}
const Gv = Symbol(),
  Vl = (t) => (t ? (Op(t) ? qu(t) || t.proxy : Vl(t.parent)) : null),
  Zn = vt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Vl(t.parent),
    $root: (t) => Vl(t.root),
    $emit: (t) => t.emit,
    $options: (t) => ju(t),
    $forceUpdate: (t) => t.f || (t.f = () => $u(t.update)),
    $nextTick: (t) => t.n || (t.n = bv.bind(t.proxy)),
    $watch: (t) => Nv.bind(t),
  }),
  cl = (t, e) => t !== Fe && !t.__isScriptSetup && Se(t, e),
  Kv = {
    get({ _: t }, e) {
      const {
        ctx: i,
        setupState: s,
        data: n,
        props: r,
        accessCache: a,
        type: o,
        appContext: u,
      } = t;
      let f;
      if (e[0] !== "$") {
        const y = a[e];
        if (y !== void 0)
          switch (y) {
            case 1:
              return s[e];
            case 2:
              return n[e];
            case 4:
              return i[e];
            case 3:
              return r[e];
          }
        else {
          if (cl(s, e)) return (a[e] = 1), s[e];
          if (n !== Fe && Se(n, e)) return (a[e] = 2), n[e];
          if ((f = t.propsOptions[0]) && Se(f, e)) return (a[e] = 3), r[e];
          if (i !== Fe && Se(i, e)) return (a[e] = 4), i[e];
          Wl && (a[e] = 0);
        }
      }
      const p = Zn[e];
      let _, v;
      if (p) return e === "$attrs" && kt(t, "get", e), p(t);
      if ((_ = o.__cssModules) && (_ = _[e])) return _;
      if (i !== Fe && Se(i, e)) return (a[e] = 4), i[e];
      if (((v = u.config.globalProperties), Se(v, e))) return v[e];
    },
    set({ _: t }, e, i) {
      const { data: s, setupState: n, ctx: r } = t;
      return cl(n, e)
        ? ((n[e] = i), !0)
        : s !== Fe && Se(s, e)
        ? ((s[e] = i), !0)
        : Se(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((r[e] = i), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: i,
          ctx: s,
          appContext: n,
          propsOptions: r,
        },
      },
      a
    ) {
      let o;
      return (
        !!i[a] ||
        (t !== Fe && Se(t, a)) ||
        cl(e, a) ||
        ((o = r[0]) && Se(o, a)) ||
        Se(s, a) ||
        Se(Zn, a) ||
        Se(n.config.globalProperties, a)
      );
    },
    defineProperty(t, e, i) {
      return (
        i.get != null
          ? (t._.accessCache[e] = 0)
          : Se(i, "value") && this.set(t, e, i.value, null),
        Reflect.defineProperty(t, e, i)
      );
    },
  };
let Wl = !0;
function Xv(t) {
  const e = ju(t),
    i = t.proxy,
    s = t.ctx;
  (Wl = !1), e.beforeCreate && Xd(e.beforeCreate, t, "bc");
  const {
    data: n,
    computed: r,
    methods: a,
    watch: o,
    provide: u,
    inject: f,
    created: p,
    beforeMount: _,
    mounted: v,
    beforeUpdate: y,
    updated: A,
    activated: S,
    deactivated: E,
    beforeDestroy: k,
    beforeUnmount: D,
    destroyed: R,
    unmounted: N,
    render: L,
    renderTracked: z,
    renderTriggered: Z,
    errorCaptured: ae,
    serverPrefetch: ne,
    expose: ve,
    inheritAttrs: de,
    components: xe,
    directives: Y,
    filters: oe,
  } = e;
  if ((f && Yv(f, s, null, t.appContext.config.unwrapInjectedRef), a))
    for (const ue in a) {
      const Te = a[ue];
      _e(Te) && (s[ue] = Te.bind(i));
    }
  if (n) {
    const ue = n.call(i, i);
    $e(ue) && (t.data = Nu(ue));
  }
  if (((Wl = !0), r))
    for (const ue in r) {
      const Te = r[ue],
        ot = _e(Te) ? Te.bind(i, i) : _e(Te.get) ? Te.get.bind(i, i) : Yt,
        Nt = !_e(Te) && _e(Te.set) ? Te.set.bind(i) : Yt,
        lt = Xl({ get: ot, set: Nt });
      Object.defineProperty(s, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (Ke) => (lt.value = Ke),
      });
    }
  if (o) for (const ue in o) vp(o[ue], s, i, ue);
  if (u) {
    const ue = _e(u) ? u.call(i) : u;
    Reflect.ownKeys(ue).forEach((Te) => {
      Rv(Te, ue[Te]);
    });
  }
  p && Xd(p, t, "c");
  function re(ue, Te) {
    me(Te) ? Te.forEach((ot) => ue(ot.bind(i))) : Te && ue(Te.bind(i));
  }
  if (
    (re($v, _),
    re(gp, v),
    re(jv, y),
    re(Hv, A),
    re(Uv, S),
    re(Fv, E),
    re(zv, ae),
    re(qv, z),
    re(Wv, Z),
    re(_p, D),
    re(yp, N),
    re(Vv, ne),
    me(ve))
  )
    if (ve.length) {
      const ue = t.exposed || (t.exposed = {});
      ve.forEach((Te) => {
        Object.defineProperty(ue, Te, {
          get: () => i[Te],
          set: (ot) => (i[Te] = ot),
        });
      });
    } else t.exposed || (t.exposed = {});
  L && t.render === Yt && (t.render = L),
    de != null && (t.inheritAttrs = de),
    xe && (t.components = xe),
    Y && (t.directives = Y);
}
function Yv(t, e, i = Yt, s = !1) {
  me(t) && (t = ql(t));
  for (const n in t) {
    const r = t[n];
    let a;
    $e(r)
      ? "default" in r
        ? (a = Ea(r.from || n, r.default, !0))
        : (a = Ea(r.from || n))
      : (a = Ea(r)),
      st(a) && s
        ? Object.defineProperty(e, n, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (o) => (a.value = o),
          })
        : (e[n] = a);
  }
}
function Xd(t, e, i) {
  Qt(me(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, i);
}
function vp(t, e, i, s) {
  const n = s.includes(".") ? fp(i, s) : () => i[s];
  if (Qe(t)) {
    const r = e[t];
    _e(r) && zs(n, r);
  } else if (_e(t)) zs(n, t.bind(i));
  else if ($e(t))
    if (me(t)) t.forEach((r) => vp(r, e, i, s));
    else {
      const r = _e(t.handler) ? t.handler.bind(i) : e[t.handler];
      _e(r) && zs(n, r, t);
    }
}
function ju(t) {
  const e = t.type,
    { mixins: i, extends: s } = e,
    {
      mixins: n,
      optionsCache: r,
      config: { optionMergeStrategies: a },
    } = t.appContext,
    o = r.get(e);
  let u;
  return (
    o
      ? (u = o)
      : !n.length && !i && !s
      ? (u = e)
      : ((u = {}), n.length && n.forEach((f) => Na(u, f, a, !0)), Na(u, e, a)),
    $e(e) && r.set(e, u),
    u
  );
}
function Na(t, e, i, s = !1) {
  const { mixins: n, extends: r } = e;
  r && Na(t, r, i, !0), n && n.forEach((a) => Na(t, a, i, !0));
  for (const a in e)
    if (!(s && a === "expose")) {
      const o = Qv[a] || (i && i[a]);
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const Qv = {
  data: Yd,
  props: us,
  emits: us,
  methods: us,
  computed: us,
  beforeCreate: ht,
  created: ht,
  beforeMount: ht,
  mounted: ht,
  beforeUpdate: ht,
  updated: ht,
  beforeDestroy: ht,
  beforeUnmount: ht,
  destroyed: ht,
  unmounted: ht,
  activated: ht,
  deactivated: ht,
  errorCaptured: ht,
  serverPrefetch: ht,
  components: us,
  directives: us,
  watch: Zv,
  provide: Yd,
  inject: Jv,
};
function Yd(t, e) {
  return e
    ? t
      ? function () {
          return vt(
            _e(t) ? t.call(this, this) : t,
            _e(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function Jv(t, e) {
  return us(ql(t), ql(e));
}
function ql(t) {
  if (me(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++) e[t[i]] = t[i];
    return e;
  }
  return t;
}
function ht(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function us(t, e) {
  return t ? vt(vt(Object.create(null), t), e) : e;
}
function Zv(t, e) {
  if (!t) return e;
  if (!e) return t;
  const i = vt(Object.create(null), t);
  for (const s in e) i[s] = ht(t[s], e[s]);
  return i;
}
function eT(t, e, i, s = !1) {
  const n = {},
    r = {};
  Da(r, To, 1), (t.propsDefaults = Object.create(null)), Tp(t, e, n, r);
  for (const a in t.propsOptions[0]) a in n || (n[a] = void 0);
  i ? (t.props = s ? n : gv(n)) : t.type.props ? (t.props = n) : (t.props = r),
    (t.attrs = r);
}
function tT(t, e, i, s) {
  const {
      props: n,
      attrs: r,
      vnode: { patchFlag: a },
    } = t,
    o = Ce(n),
    [u] = t.propsOptions;
  let f = !1;
  if ((s || a > 0) && !(a & 16)) {
    if (a & 8) {
      const p = t.vnode.dynamicProps;
      for (let _ = 0; _ < p.length; _++) {
        let v = p[_];
        if (_o(t.emitsOptions, v)) continue;
        const y = e[v];
        if (u)
          if (Se(r, v)) y !== r[v] && ((r[v] = y), (f = !0));
          else {
            const A = Zs(v);
            n[A] = zl(u, o, A, y, t, !1);
          }
        else y !== r[v] && ((r[v] = y), (f = !0));
      }
    }
  } else {
    Tp(t, e, n, r) && (f = !0);
    let p;
    for (const _ in o)
      (!e || (!Se(e, _) && ((p = mn(_)) === _ || !Se(e, p)))) &&
        (u
          ? i &&
            (i[_] !== void 0 || i[p] !== void 0) &&
            (n[_] = zl(u, o, _, void 0, t, !0))
          : delete n[_]);
    if (r !== o)
      for (const _ in r) (!e || !Se(e, _)) && (delete r[_], (f = !0));
  }
  f && Pi(t, "set", "$attrs");
}
function Tp(t, e, i, s) {
  const [n, r] = t.propsOptions;
  let a = !1,
    o;
  if (e)
    for (let u in e) {
      if (xa(u)) continue;
      const f = e[u];
      let p;
      n && Se(n, (p = Zs(u)))
        ? !r || !r.includes(p)
          ? (i[p] = f)
          : ((o || (o = {}))[p] = f)
        : _o(t.emitsOptions, u) ||
          ((!(u in s) || f !== s[u]) && ((s[u] = f), (a = !0)));
    }
  if (r) {
    const u = Ce(i),
      f = o || Fe;
    for (let p = 0; p < r.length; p++) {
      const _ = r[p];
      i[_] = zl(n, u, _, f[_], t, !Se(f, _));
    }
  }
  return a;
}
function zl(t, e, i, s, n, r) {
  const a = t[i];
  if (a != null) {
    const o = Se(a, "default");
    if (o && s === void 0) {
      const u = a.default;
      if (a.type !== Function && _e(u)) {
        const { propsDefaults: f } = n;
        i in f ? (s = f[i]) : (sn(n), (s = f[i] = u.call(null, e)), gs());
      } else s = u;
    }
    a[0] &&
      (r && !o ? (s = !1) : a[1] && (s === "" || s === mn(i)) && (s = !0));
  }
  return s;
}
function bp(t, e, i = !1) {
  const s = e.propsCache,
    n = s.get(t);
  if (n) return n;
  const r = t.props,
    a = {},
    o = [];
  let u = !1;
  if (!_e(t)) {
    const p = (_) => {
      u = !0;
      const [v, y] = bp(_, e, !0);
      vt(a, v), y && o.push(...y);
    };
    !i && e.mixins.length && e.mixins.forEach(p),
      t.extends && p(t.extends),
      t.mixins && t.mixins.forEach(p);
  }
  if (!r && !u) return $e(t) && s.set(t, Hs), Hs;
  if (me(r))
    for (let p = 0; p < r.length; p++) {
      const _ = Zs(r[p]);
      Qd(_) && (a[_] = Fe);
    }
  else if (r)
    for (const p in r) {
      const _ = Zs(p);
      if (Qd(_)) {
        const v = r[p],
          y = (a[_] = me(v) || _e(v) ? { type: v } : Object.assign({}, v));
        if (y) {
          const A = eh(Boolean, y.type),
            S = eh(String, y.type);
          (y[0] = A > -1),
            (y[1] = S < 0 || A < S),
            (A > -1 || Se(y, "default")) && o.push(_);
        }
      }
    }
  const f = [a, o];
  return $e(t) && s.set(t, f), f;
}
function Qd(t) {
  return t[0] !== "$";
}
function Jd(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function Zd(t, e) {
  return Jd(t) === Jd(e);
}
function eh(t, e) {
  return me(e) ? e.findIndex((i) => Zd(i, t)) : _e(e) && Zd(e, t) ? 0 : -1;
}
const xp = (t) => t[0] === "_" || t === "$stable",
  Hu = (t) => (me(t) ? t.map(ai) : [ai(t)]),
  iT = (t, e, i) => {
    if (e._n) return e;
    const s = Av((...n) => Hu(e(...n)), i);
    return (s._c = !1), s;
  },
  Sp = (t, e, i) => {
    const s = t._ctx;
    for (const n in t) {
      if (xp(n)) continue;
      const r = t[n];
      if (_e(r)) e[n] = iT(n, r, s);
      else if (r != null) {
        const a = Hu(r);
        e[n] = () => a;
      }
    }
  },
  Ep = (t, e) => {
    const i = Hu(e);
    t.slots.default = () => i;
  },
  sT = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const i = e._;
      i ? ((t.slots = Ce(e)), Da(e, "_", i)) : Sp(e, (t.slots = {}));
    } else (t.slots = {}), e && Ep(t, e);
    Da(t.slots, To, 1);
  },
  nT = (t, e, i) => {
    const { vnode: s, slots: n } = t;
    let r = !0,
      a = Fe;
    if (s.shapeFlag & 32) {
      const o = e._;
      o
        ? i && o === 1
          ? (r = !1)
          : (vt(n, e), !i && o === 1 && delete n._)
        : ((r = !e.$stable), Sp(e, n)),
        (a = e);
    } else e && (Ep(t, e), (a = { default: 1 }));
    if (r) for (const o in n) !xp(o) && !(o in a) && delete n[o];
  };
function Cp() {
  return {
    app: null,
    config: {
      isNativeTag: Ly,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let rT = 0;
function aT(t, e) {
  return function (s, n = null) {
    _e(s) || (s = Object.assign({}, s)), n != null && !$e(n) && (n = null);
    const r = Cp(),
      a = new Set();
    let o = !1;
    const u = (r.app = {
      _uid: rT++,
      _component: s,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: AT,
      get config() {
        return r.config;
      },
      set config(f) {},
      use(f, ...p) {
        return (
          a.has(f) ||
            (f && _e(f.install)
              ? (a.add(f), f.install(u, ...p))
              : _e(f) && (a.add(f), f(u, ...p))),
          u
        );
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), u;
      },
      component(f, p) {
        return p ? ((r.components[f] = p), u) : r.components[f];
      },
      directive(f, p) {
        return p ? ((r.directives[f] = p), u) : r.directives[f];
      },
      mount(f, p, _) {
        if (!o) {
          const v = wt(s, n);
          return (
            (v.appContext = r),
            p && e ? e(v, f) : t(v, f, _),
            (o = !0),
            (u._container = f),
            (f.__vue_app__ = u),
            qu(v.component) || v.component.proxy
          );
        }
      },
      unmount() {
        o && (t(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, p) {
        return (r.provides[f] = p), u;
      },
    });
    return u;
  };
}
function Gl(t, e, i, s, n = !1) {
  if (me(t)) {
    t.forEach((v, y) => Gl(v, e && (me(e) ? e[y] : e), i, s, n));
    return;
  }
  if (Ca(s) && !n) return;
  const r = s.shapeFlag & 4 ? qu(s.component) || s.component.proxy : s.el,
    a = n ? null : r,
    { i: o, r: u } = t,
    f = e && e.r,
    p = o.refs === Fe ? (o.refs = {}) : o.refs,
    _ = o.setupState;
  if (
    (f != null &&
      f !== u &&
      (Qe(f)
        ? ((p[f] = null), Se(_, f) && (_[f] = null))
        : st(f) && (f.value = null)),
    _e(u))
  )
    qi(u, o, 12, [a, p]);
  else {
    const v = Qe(u),
      y = st(u);
    if (v || y) {
      const A = () => {
        if (t.f) {
          const S = v ? (Se(_, u) ? _[u] : p[u]) : u.value;
          n
            ? me(S) && Au(S, r)
            : me(S)
            ? S.includes(r) || S.push(r)
            : v
            ? ((p[u] = [r]), Se(_, u) && (_[u] = p[u]))
            : ((u.value = [r]), t.k && (p[t.k] = u.value));
        } else
          v
            ? ((p[u] = a), Se(_, u) && (_[u] = a))
            : y && ((u.value = a), t.k && (p[t.k] = a));
      };
      a ? ((A.id = -1), xt(A, i)) : A();
    }
  }
}
const xt = Lv;
function oT(t) {
  return lT(t);
}
function lT(t, e) {
  const i = $y();
  i.__VUE__ = !0;
  const {
      insert: s,
      remove: n,
      patchProp: r,
      createElement: a,
      createText: o,
      createComment: u,
      setText: f,
      setElementText: p,
      parentNode: _,
      nextSibling: v,
      setScopeId: y = Yt,
      insertStaticContent: A,
    } = t,
    S = (
      I,
      O,
      F,
      V = null,
      H = null,
      G = null,
      X = !1,
      q = null,
      j = !!O.dynamicChildren
    ) => {
      if (I === O) return;
      I && !Un(I, O) && ((V = Ss(I)), Ke(I, H, G, !0), (I = null)),
        O.patchFlag === -2 && ((j = !1), (O.dynamicChildren = null));
      const { type: W, ref: te, shapeFlag: ee } = O;
      switch (W) {
        case vo:
          E(I, O, F, V);
          break;
        case dr:
          k(I, O, F, V);
          break;
        case wa:
          I == null && D(O, F, V, X);
          break;
        case ri:
          xe(I, O, F, V, H, G, X, q, j);
          break;
        default:
          ee & 1
            ? L(I, O, F, V, H, G, X, q, j)
            : ee & 6
            ? Y(I, O, F, V, H, G, X, q, j)
            : (ee & 64 || ee & 128) && W.process(I, O, F, V, H, G, X, q, j, Bi);
      }
      te != null && H && Gl(te, I && I.ref, G, O || I, !O);
    },
    E = (I, O, F, V) => {
      if (I == null) s((O.el = o(O.children)), F, V);
      else {
        const H = (O.el = I.el);
        O.children !== I.children && f(H, O.children);
      }
    },
    k = (I, O, F, V) => {
      I == null ? s((O.el = u(O.children || "")), F, V) : (O.el = I.el);
    },
    D = (I, O, F, V) => {
      [I.el, I.anchor] = A(I.children, O, F, V, I.el, I.anchor);
    },
    R = ({ el: I, anchor: O }, F, V) => {
      let H;
      for (; I && I !== O; ) (H = v(I)), s(I, F, V), (I = H);
      s(O, F, V);
    },
    N = ({ el: I, anchor: O }) => {
      let F;
      for (; I && I !== O; ) (F = v(I)), n(I), (I = F);
      n(O);
    },
    L = (I, O, F, V, H, G, X, q, j) => {
      (X = X || O.type === "svg"),
        I == null ? z(O, F, V, H, G, X, q, j) : ne(I, O, H, G, X, q, j);
    },
    z = (I, O, F, V, H, G, X, q) => {
      let j, W;
      const {
        type: te,
        props: ee,
        shapeFlag: ie,
        transition: ce,
        dirs: ge,
      } = I;
      if (
        ((j = I.el = a(I.type, G, ee && ee.is, ee)),
        ie & 8
          ? p(j, I.children)
          : ie & 16 &&
            ae(I.children, j, null, V, H, G && te !== "foreignObject", X, q),
        ge && as(I, null, V, "created"),
        Z(j, I, I.scopeId, X, V),
        ee)
      ) {
        for (const Ee in ee)
          Ee !== "value" &&
            !xa(Ee) &&
            r(j, Ee, null, ee[Ee], G, I.children, V, H, Mt);
        "value" in ee && r(j, "value", null, ee.value),
          (W = ee.onVnodeBeforeMount) && si(W, V, I);
      }
      ge && as(I, null, V, "beforeMount");
      const we = (!H || (H && !H.pendingBranch)) && ce && !ce.persisted;
      we && ce.beforeEnter(j),
        s(j, O, F),
        ((W = ee && ee.onVnodeMounted) || we || ge) &&
          xt(() => {
            W && si(W, V, I),
              we && ce.enter(j),
              ge && as(I, null, V, "mounted");
          }, H);
    },
    Z = (I, O, F, V, H) => {
      if ((F && y(I, F), V)) for (let G = 0; G < V.length; G++) y(I, V[G]);
      if (H) {
        let G = H.subTree;
        if (O === G) {
          const X = H.vnode;
          Z(I, X, X.scopeId, X.slotScopeIds, H.parent);
        }
      }
    },
    ae = (I, O, F, V, H, G, X, q, j = 0) => {
      for (let W = j; W < I.length; W++) {
        const te = (I[W] = q ? Hi(I[W]) : ai(I[W]));
        S(null, te, O, F, V, H, G, X, q);
      }
    },
    ne = (I, O, F, V, H, G, X) => {
      const q = (O.el = I.el);
      let { patchFlag: j, dynamicChildren: W, dirs: te } = O;
      j |= I.patchFlag & 16;
      const ee = I.props || Fe,
        ie = O.props || Fe;
      let ce;
      F && os(F, !1),
        (ce = ie.onVnodeBeforeUpdate) && si(ce, F, O, I),
        te && as(O, I, F, "beforeUpdate"),
        F && os(F, !0);
      const ge = H && O.type !== "foreignObject";
      if (
        (W
          ? ve(I.dynamicChildren, W, q, F, V, ge, G)
          : X || Te(I, O, q, null, F, V, ge, G, !1),
        j > 0)
      ) {
        if (j & 16) de(q, O, ee, ie, F, V, H);
        else if (
          (j & 2 && ee.class !== ie.class && r(q, "class", null, ie.class, H),
          j & 4 && r(q, "style", ee.style, ie.style, H),
          j & 8)
        ) {
          const we = O.dynamicProps;
          for (let Ee = 0; Ee < we.length; Ee++) {
            const Be = we[Ee],
              Tt = ee[Be],
              xi = ie[Be];
            (xi !== Tt || Be === "value") &&
              r(q, Be, Tt, xi, H, I.children, F, V, Mt);
          }
        }
        j & 1 && I.children !== O.children && p(q, O.children);
      } else !X && W == null && de(q, O, ee, ie, F, V, H);
      ((ce = ie.onVnodeUpdated) || te) &&
        xt(() => {
          ce && si(ce, F, O, I), te && as(O, I, F, "updated");
        }, V);
    },
    ve = (I, O, F, V, H, G, X) => {
      for (let q = 0; q < O.length; q++) {
        const j = I[q],
          W = O[q],
          te =
            j.el && (j.type === ri || !Un(j, W) || j.shapeFlag & 70)
              ? _(j.el)
              : F;
        S(j, W, te, null, V, H, G, X, !0);
      }
    },
    de = (I, O, F, V, H, G, X) => {
      if (F !== V) {
        if (F !== Fe)
          for (const q in F)
            !xa(q) && !(q in V) && r(I, q, F[q], null, X, O.children, H, G, Mt);
        for (const q in V) {
          if (xa(q)) continue;
          const j = V[q],
            W = F[q];
          j !== W && q !== "value" && r(I, q, W, j, X, O.children, H, G, Mt);
        }
        "value" in V && r(I, "value", F.value, V.value);
      }
    },
    xe = (I, O, F, V, H, G, X, q, j) => {
      const W = (O.el = I ? I.el : o("")),
        te = (O.anchor = I ? I.anchor : o(""));
      let { patchFlag: ee, dynamicChildren: ie, slotScopeIds: ce } = O;
      ce && (q = q ? q.concat(ce) : ce),
        I == null
          ? (s(W, F, V), s(te, F, V), ae(O.children, F, te, H, G, X, q, j))
          : ee > 0 && ee & 64 && ie && I.dynamicChildren
          ? (ve(I.dynamicChildren, ie, F, H, G, X, q),
            (O.key != null || (H && O === H.subTree)) && wp(I, O, !0))
          : Te(I, O, F, te, H, G, X, q, j);
    },
    Y = (I, O, F, V, H, G, X, q, j) => {
      (O.slotScopeIds = q),
        I == null
          ? O.shapeFlag & 512
            ? H.ctx.activate(O, F, V, X, j)
            : oe(O, F, V, H, G, X, j)
          : Ne(I, O, j);
    },
    oe = (I, O, F, V, H, G, X) => {
      const q = (I.component = vT(I, V, H));
      if ((pp(I) && (q.ctx.renderer = Bi), TT(q), q.asyncDep)) {
        if ((H && H.registerDep(q, re), !I.el)) {
          const j = (q.subTree = wt(dr));
          k(null, j, O, F);
        }
        return;
      }
      re(q, I, O, F, H, G, X);
    },
    Ne = (I, O, F) => {
      const V = (O.component = I.component);
      if (Ov(I, O, F))
        if (V.asyncDep && !V.asyncResolved) {
          ue(V, O, F);
          return;
        } else (V.next = O), Sv(V.update), V.update();
      else (O.el = I.el), (V.vnode = O);
    },
    re = (I, O, F, V, H, G, X) => {
      const q = () => {
          if (I.isMounted) {
            let { next: te, bu: ee, u: ie, parent: ce, vnode: ge } = I,
              we = te,
              Ee;
            os(I, !1),
              te ? ((te.el = ge.el), ue(I, te, X)) : (te = ge),
              ee && ll(ee),
              (Ee = te.props && te.props.onVnodeBeforeUpdate) &&
                si(Ee, ce, te, ge),
              os(I, !0);
            const Be = ul(I),
              Tt = I.subTree;
            (I.subTree = Be),
              S(Tt, Be, _(Tt.el), Ss(Tt), I, H, G),
              (te.el = Be.el),
              we === null && Pv(I, Be.el),
              ie && xt(ie, H),
              (Ee = te.props && te.props.onVnodeUpdated) &&
                xt(() => si(Ee, ce, te, ge), H);
          } else {
            let te;
            const { el: ee, props: ie } = O,
              { bm: ce, m: ge, parent: we } = I,
              Ee = Ca(O);
            if (
              (os(I, !1),
              ce && ll(ce),
              !Ee && (te = ie && ie.onVnodeBeforeMount) && si(te, we, O),
              os(I, !0),
              ee && wn)
            ) {
              const Be = () => {
                (I.subTree = ul(I)), wn(ee, I.subTree, I, H, null);
              };
              Ee
                ? O.type.__asyncLoader().then(() => !I.isUnmounted && Be())
                : Be();
            } else {
              const Be = (I.subTree = ul(I));
              S(null, Be, F, V, I, H, G), (O.el = Be.el);
            }
            if ((ge && xt(ge, H), !Ee && (te = ie && ie.onVnodeMounted))) {
              const Be = O;
              xt(() => si(te, we, Be), H);
            }
            (O.shapeFlag & 256 ||
              (we && Ca(we.vnode) && we.vnode.shapeFlag & 256)) &&
              I.a &&
              xt(I.a, H),
              (I.isMounted = !0),
              (O = F = V = null);
          }
        },
        j = (I.effect = new Pu(q, () => $u(W), I.scope)),
        W = (I.update = () => j.run());
      (W.id = I.uid), os(I, !0), W();
    },
    ue = (I, O, F) => {
      O.component = I;
      const V = I.vnode.props;
      (I.vnode = O),
        (I.next = null),
        tT(I, O.props, V, F),
        nT(I, O.children, F),
        gn(),
        Gd(),
        _n();
    },
    Te = (I, O, F, V, H, G, X, q, j = !1) => {
      const W = I && I.children,
        te = I ? I.shapeFlag : 0,
        ee = O.children,
        { patchFlag: ie, shapeFlag: ce } = O;
      if (ie > 0) {
        if (ie & 128) {
          Nt(W, ee, F, V, H, G, X, q, j);
          return;
        } else if (ie & 256) {
          ot(W, ee, F, V, H, G, X, q, j);
          return;
        }
      }
      ce & 8
        ? (te & 16 && Mt(W, H, G), ee !== W && p(F, ee))
        : te & 16
        ? ce & 16
          ? Nt(W, ee, F, V, H, G, X, q, j)
          : Mt(W, H, G, !0)
        : (te & 8 && p(F, ""), ce & 16 && ae(ee, F, V, H, G, X, q, j));
    },
    ot = (I, O, F, V, H, G, X, q, j) => {
      (I = I || Hs), (O = O || Hs);
      const W = I.length,
        te = O.length,
        ee = Math.min(W, te);
      let ie;
      for (ie = 0; ie < ee; ie++) {
        const ce = (O[ie] = j ? Hi(O[ie]) : ai(O[ie]));
        S(I[ie], ce, F, null, H, G, X, q, j);
      }
      W > te ? Mt(I, H, G, !0, !1, ee) : ae(O, F, V, H, G, X, q, j, ee);
    },
    Nt = (I, O, F, V, H, G, X, q, j) => {
      let W = 0;
      const te = O.length;
      let ee = I.length - 1,
        ie = te - 1;
      for (; W <= ee && W <= ie; ) {
        const ce = I[W],
          ge = (O[W] = j ? Hi(O[W]) : ai(O[W]));
        if (Un(ce, ge)) S(ce, ge, F, null, H, G, X, q, j);
        else break;
        W++;
      }
      for (; W <= ee && W <= ie; ) {
        const ce = I[ee],
          ge = (O[ie] = j ? Hi(O[ie]) : ai(O[ie]));
        if (Un(ce, ge)) S(ce, ge, F, null, H, G, X, q, j);
        else break;
        ee--, ie--;
      }
      if (W > ee) {
        if (W <= ie) {
          const ce = ie + 1,
            ge = ce < te ? O[ce].el : V;
          for (; W <= ie; )
            S(null, (O[W] = j ? Hi(O[W]) : ai(O[W])), F, ge, H, G, X, q, j),
              W++;
        }
      } else if (W > ie) for (; W <= ee; ) Ke(I[W], H, G, !0), W++;
      else {
        const ce = W,
          ge = W,
          we = new Map();
        for (W = ge; W <= ie; W++) {
          const ut = (O[W] = j ? Hi(O[W]) : ai(O[W]));
          ut.key != null && we.set(ut.key, W);
        }
        let Ee,
          Be = 0;
        const Tt = ie - ge + 1;
        let xi = !1,
          Ie = 0;
        const Zi = new Array(Tt);
        for (W = 0; W < Tt; W++) Zi[W] = 0;
        for (W = ce; W <= ee; W++) {
          const ut = I[W];
          if (Be >= Tt) {
            Ke(ut, H, G, !0);
            continue;
          }
          let Ut;
          if (ut.key != null) Ut = we.get(ut.key);
          else
            for (Ee = ge; Ee <= ie; Ee++)
              if (Zi[Ee - ge] === 0 && Un(ut, O[Ee])) {
                Ut = Ee;
                break;
              }
          Ut === void 0
            ? Ke(ut, H, G, !0)
            : ((Zi[Ut - ge] = W + 1),
              Ut >= Ie ? (Ie = Ut) : (xi = !0),
              S(ut, O[Ut], F, null, H, G, X, q, j),
              Be++);
        }
        const es = xi ? uT(Zi) : Hs;
        for (Ee = es.length - 1, W = Tt - 1; W >= 0; W--) {
          const ut = ge + W,
            Ut = O[ut],
            Ur = ut + 1 < te ? O[ut + 1].el : V;
          Zi[W] === 0
            ? S(null, Ut, F, Ur, H, G, X, q, j)
            : xi && (Ee < 0 || W !== es[Ee] ? lt(Ut, F, Ur, 2) : Ee--);
        }
      }
    },
    lt = (I, O, F, V, H = null) => {
      const { el: G, type: X, transition: q, children: j, shapeFlag: W } = I;
      if (W & 6) {
        lt(I.component.subTree, O, F, V);
        return;
      }
      if (W & 128) {
        I.suspense.move(O, F, V);
        return;
      }
      if (W & 64) {
        X.move(I, O, F, Bi);
        return;
      }
      if (X === ri) {
        s(G, O, F);
        for (let ee = 0; ee < j.length; ee++) lt(j[ee], O, F, V);
        s(I.anchor, O, F);
        return;
      }
      if (X === wa) {
        R(I, O, F);
        return;
      }
      if (V !== 2 && W & 1 && q)
        if (V === 0) q.beforeEnter(G), s(G, O, F), xt(() => q.enter(G), H);
        else {
          const { leave: ee, delayLeave: ie, afterLeave: ce } = q,
            ge = () => s(G, O, F),
            we = () => {
              ee(G, () => {
                ge(), ce && ce();
              });
            };
          ie ? ie(G, ge, we) : we();
        }
      else s(G, O, F);
    },
    Ke = (I, O, F, V = !1, H = !1) => {
      const {
        type: G,
        props: X,
        ref: q,
        children: j,
        dynamicChildren: W,
        shapeFlag: te,
        patchFlag: ee,
        dirs: ie,
      } = I;
      if ((q != null && Gl(q, null, F, I, !0), te & 256)) {
        O.ctx.deactivate(I);
        return;
      }
      const ce = te & 1 && ie,
        ge = !Ca(I);
      let we;
      if ((ge && (we = X && X.onVnodeBeforeUnmount) && si(we, O, I), te & 6))
        Nr(I.component, F, V);
      else {
        if (te & 128) {
          I.suspense.unmount(F, V);
          return;
        }
        ce && as(I, null, O, "beforeUnmount"),
          te & 64
            ? I.type.remove(I, O, F, H, Bi, V)
            : W && (G !== ri || (ee > 0 && ee & 64))
            ? Mt(W, O, F, !1, !0)
            : ((G === ri && ee & 384) || (!H && te & 16)) && Mt(j, O, F),
          V && Ji(I);
      }
      ((ge && (we = X && X.onVnodeUnmounted)) || ce) &&
        xt(() => {
          we && si(we, O, I), ce && as(I, null, O, "unmounted");
        }, F);
    },
    Ji = (I) => {
      const { type: O, el: F, anchor: V, transition: H } = I;
      if (O === ri) {
        Rr(F, V);
        return;
      }
      if (O === wa) {
        N(I);
        return;
      }
      const G = () => {
        n(F), H && !H.persisted && H.afterLeave && H.afterLeave();
      };
      if (I.shapeFlag & 1 && H && !H.persisted) {
        const { leave: X, delayLeave: q } = H,
          j = () => X(F, G);
        q ? q(I.el, G, j) : j();
      } else G();
    },
    Rr = (I, O) => {
      let F;
      for (; I !== O; ) (F = v(I)), n(I), (I = F);
      n(O);
    },
    Nr = (I, O, F) => {
      const { bum: V, scope: H, update: G, subTree: X, um: q } = I;
      V && ll(V),
        H.stop(),
        G && ((G.active = !1), Ke(X, I, O, F)),
        q && xt(q, O),
        xt(() => {
          I.isUnmounted = !0;
        }, O),
        O &&
          O.pendingBranch &&
          !O.isUnmounted &&
          I.asyncDep &&
          !I.asyncResolved &&
          I.suspenseId === O.pendingId &&
          (O.deps--, O.deps === 0 && O.resolve());
    },
    Mt = (I, O, F, V = !1, H = !1, G = 0) => {
      for (let X = G; X < I.length; X++) Ke(I[X], O, F, V, H);
    },
    Ss = (I) =>
      I.shapeFlag & 6
        ? Ss(I.component.subTree)
        : I.shapeFlag & 128
        ? I.suspense.next()
        : v(I.anchor || I.el),
    Mr = (I, O, F) => {
      I == null
        ? O._vnode && Ke(O._vnode, null, null, !0)
        : S(O._vnode || null, I, O, null, null, null, F),
        Gd(),
        lp(),
        (O._vnode = I);
    },
    Bi = {
      p: S,
      um: Ke,
      m: lt,
      r: Ji,
      mt: oe,
      mc: ae,
      pc: Te,
      pbc: ve,
      n: Ss,
      o: t,
    };
  let Cn, wn;
  return (
    e && ([Cn, wn] = e(Bi)), { render: Mr, hydrate: Cn, createApp: aT(Mr, Cn) }
  );
}
function os({ effect: t, update: e }, i) {
  t.allowRecurse = e.allowRecurse = i;
}
function wp(t, e, i = !1) {
  const s = t.children,
    n = e.children;
  if (me(s) && me(n))
    for (let r = 0; r < s.length; r++) {
      const a = s[r];
      let o = n[r];
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = n[r] = Hi(n[r])), (o.el = a.el)),
        i || wp(a, o)),
        o.type === vo && (o.el = a.el);
    }
}
function uT(t) {
  const e = t.slice(),
    i = [0];
  let s, n, r, a, o;
  const u = t.length;
  for (s = 0; s < u; s++) {
    const f = t[s];
    if (f !== 0) {
      if (((n = i[i.length - 1]), t[n] < f)) {
        (e[s] = n), i.push(s);
        continue;
      }
      for (r = 0, a = i.length - 1; r < a; )
        (o = (r + a) >> 1), t[i[o]] < f ? (r = o + 1) : (a = o);
      f < t[i[r]] && (r > 0 && (e[s] = i[r - 1]), (i[r] = s));
    }
  }
  for (r = i.length, a = i[r - 1]; r-- > 0; ) (i[r] = a), (a = e[a]);
  return i;
}
const cT = (t) => t.__isTeleport,
  ri = Symbol(void 0),
  vo = Symbol(void 0),
  dr = Symbol(void 0),
  wa = Symbol(void 0),
  er = [];
let Xt = null;
function Ap(t = !1) {
  er.push((Xt = t ? null : []));
}
function dT() {
  er.pop(), (Xt = er[er.length - 1] || null);
}
let hr = 1;
function th(t) {
  hr += t;
}
function hT(t) {
  return (
    (t.dynamicChildren = hr > 0 ? Xt || Hs : null),
    dT(),
    hr > 0 && Xt && Xt.push(t),
    t
  );
}
function kp(t, e, i, s, n, r) {
  return hT(Xe(t, e, i, s, n, r, !0));
}
function Kl(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Un(t, e) {
  return t.type === e.type && t.key === e.key;
}
const To = "__vInternal",
  Ip = ({ key: t }) => t ?? null,
  Aa = ({ ref: t, ref_key: e, ref_for: i }) =>
    t != null
      ? Qe(t) || st(t) || _e(t)
        ? { i: ui, r: t, k: e, f: !!i }
        : t
      : null;
function Xe(
  t,
  e = null,
  i = null,
  s = 0,
  n = null,
  r = t === ri ? 0 : 1,
  a = !1,
  o = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ip(e),
    ref: e && Aa(e),
    scopeId: dp,
    slotScopeIds: null,
    children: i,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: ui,
  };
  return (
    o
      ? (Wu(u, i), r & 128 && t.normalize(u))
      : i && (u.shapeFlag |= Qe(i) ? 8 : 16),
    hr > 0 &&
      !a &&
      Xt &&
      (u.patchFlag > 0 || r & 6) &&
      u.patchFlag !== 32 &&
      Xt.push(u),
    u
  );
}
const wt = fT;
function fT(t, e = null, i = null, s = 0, n = null, r = !1) {
  if (((!t || t === Gv) && (t = dr), Kl(t))) {
    const o = tn(t, e, !0);
    return (
      i && Wu(o, i),
      hr > 0 &&
        !r &&
        Xt &&
        (o.shapeFlag & 6 ? (Xt[Xt.indexOf(t)] = o) : Xt.push(o)),
      (o.patchFlag |= -2),
      o
    );
  }
  if ((ET(t) && (t = t.__vccOpts), e)) {
    e = pT(e);
    let { class: o, style: u } = e;
    o && !Qe(o) && (e.class = js(o)),
      $e(u) && (Zf(u) && !me(u) && (u = vt({}, u)), (e.style = Cu(u)));
  }
  const a = Qe(t) ? 1 : Dv(t) ? 128 : cT(t) ? 64 : $e(t) ? 4 : _e(t) ? 2 : 0;
  return Xe(t, e, i, s, n, a, r, !0);
}
function pT(t) {
  return t ? (Zf(t) || To in t ? vt({}, t) : t) : null;
}
function tn(t, e, i = !1) {
  const { props: s, ref: n, patchFlag: r, children: a } = t,
    o = e ? gT(s || {}, e) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && Ip(o),
    ref:
      e && e.ref
        ? i && n
          ? me(n)
            ? n.concat(Aa(e))
            : [n, Aa(e)]
          : Aa(e)
        : n,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: a,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== ri ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && tn(t.ssContent),
    ssFallback: t.ssFallback && tn(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function mT(t = " ", e = 0) {
  return wt(vo, null, t, e);
}
function Vu(t, e) {
  const i = wt(wa, null, t);
  return (i.staticCount = e), i;
}
function ai(t) {
  return t == null || typeof t == "boolean"
    ? wt(dr)
    : me(t)
    ? wt(ri, null, t.slice())
    : typeof t == "object"
    ? Hi(t)
    : wt(vo, null, String(t));
}
function Hi(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : tn(t);
}
function Wu(t, e) {
  let i = 0;
  const { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (me(e)) i = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Wu(t, n()), n._c && (n._d = !0));
      return;
    } else {
      i = 32;
      const n = e._;
      !n && !(To in e)
        ? (e._ctx = ui)
        : n === 3 &&
          ui &&
          (ui.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    _e(e)
      ? ((e = { default: e, _ctx: ui }), (i = 32))
      : ((e = String(e)), s & 64 ? ((i = 16), (e = [mT(e)])) : (i = 8));
  (t.children = e), (t.shapeFlag |= i);
}
function gT(...t) {
  const e = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    for (const n in s)
      if (n === "class")
        e.class !== s.class && (e.class = js([e.class, s.class]));
      else if (n === "style") e.style = Cu([e.style, s.style]);
      else if (ho(n)) {
        const r = e[n],
          a = s[n];
        a &&
          r !== a &&
          !(me(r) && r.includes(a)) &&
          (e[n] = r ? [].concat(r, a) : a);
      } else n !== "" && (e[n] = s[n]);
  }
  return e;
}
function si(t, e, i, s = null) {
  Qt(t, e, 7, [i, s]);
}
const _T = Cp();
let yT = 0;
function vT(t, e, i) {
  const s = t.type,
    n = (e ? e.appContext : t.appContext) || _T,
    r = {
      uid: yT++,
      vnode: t,
      type: s,
      parent: e,
      appContext: n,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new jy(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(n.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: bp(s, n),
      emitsOptions: cp(s, n),
      emit: null,
      emitted: null,
      propsDefaults: Fe,
      inheritAttrs: s.inheritAttrs,
      ctx: Fe,
      data: Fe,
      props: Fe,
      attrs: Fe,
      slots: Fe,
      refs: Fe,
      setupState: Fe,
      setupContext: null,
      suspense: i,
      suspenseId: i ? i.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
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
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = e ? e.root : r),
    (r.emit = wv.bind(null, r)),
    t.ce && t.ce(r),
    r
  );
}
let Ge = null;
const sn = (t) => {
    (Ge = t), t.scope.on();
  },
  gs = () => {
    Ge && Ge.scope.off(), (Ge = null);
  };
function Op(t) {
  return t.vnode.shapeFlag & 4;
}
let fr = !1;
function TT(t, e = !1) {
  fr = e;
  const { props: i, children: s } = t.vnode,
    n = Op(t);
  eT(t, i, n, e), sT(t, s);
  const r = n ? bT(t, e) : void 0;
  return (fr = !1), r;
}
function bT(t, e) {
  const i = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = ep(new Proxy(t.ctx, Kv)));
  const { setup: s } = i;
  if (s) {
    const n = (t.setupContext = s.length > 1 ? ST(t) : null);
    sn(t), gn();
    const r = qi(s, t, 0, [t.props, n]);
    if ((_n(), gs(), Bf(r))) {
      if ((r.then(gs, gs), e))
        return r
          .then((a) => {
            ih(t, a, e);
          })
          .catch((a) => {
            go(a, t, 0);
          });
      t.asyncDep = r;
    } else ih(t, r, e);
  } else Pp(t, e);
}
function ih(t, e, i) {
  _e(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : $e(e) && (t.setupState = np(e)),
    Pp(t, i);
}
let sh;
function Pp(t, e, i) {
  const s = t.type;
  if (!t.render) {
    if (!e && sh && !s.render) {
      const n = s.template || ju(t).template;
      if (n) {
        const { isCustomElement: r, compilerOptions: a } = t.appContext.config,
          { delimiters: o, compilerOptions: u } = s,
          f = vt(vt({ isCustomElement: r, delimiters: o }, a), u);
        s.render = sh(n, f);
      }
    }
    t.render = s.render || Yt;
  }
  sn(t), gn(), Xv(t), _n(), gs();
}
function xT(t) {
  return new Proxy(t.attrs, {
    get(e, i) {
      return kt(t, "get", "$attrs"), e[i];
    },
  });
}
function ST(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  let i;
  return {
    get attrs() {
      return i || (i = xT(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function qu(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(np(ep(t.exposed)), {
        get(e, i) {
          if (i in e) return e[i];
          if (i in Zn) return Zn[i](t);
        },
        has(e, i) {
          return i in e || i in Zn;
        },
      }))
    );
}
function ET(t) {
  return _e(t) && "__vccOpts" in t;
}
const Xl = (t, e) => Tv(t, e, fr);
function nh(t, e, i) {
  const s = arguments.length;
  return s === 2
    ? $e(e) && !me(e)
      ? Kl(e)
        ? wt(t, null, [e])
        : wt(t, e)
      : wt(t, null, e)
    : (s > 3
        ? (i = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Kl(i) && (i = [i]),
      wt(t, e, i));
}
const CT = Symbol(""),
  wT = () => Ea(CT),
  AT = "3.2.47",
  kT = "http://www.w3.org/2000/svg",
  hs = typeof document < "u" ? document : null,
  rh = hs && hs.createElement("template"),
  IT = {
    insert: (t, e, i) => {
      e.insertBefore(t, i || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, i, s) => {
      const n = e
        ? hs.createElementNS(kT, t)
        : hs.createElement(t, i ? { is: i } : void 0);
      return (
        t === "select" &&
          s &&
          s.multiple != null &&
          n.setAttribute("multiple", s.multiple),
        n
      );
    },
    createText: (t) => hs.createTextNode(t),
    createComment: (t) => hs.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => hs.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, i, s, n, r) {
      const a = i ? i.previousSibling : e.lastChild;
      if (n && (n === r || n.nextSibling))
        for (
          ;
          e.insertBefore(n.cloneNode(!0), i),
            !(n === r || !(n = n.nextSibling));

        );
      else {
        rh.innerHTML = s ? `<svg>${t}</svg>` : t;
        const o = rh.content;
        if (s) {
          const u = o.firstChild;
          for (; u.firstChild; ) o.appendChild(u.firstChild);
          o.removeChild(u);
        }
        e.insertBefore(o, i);
      }
      return [
        a ? a.nextSibling : e.firstChild,
        i ? i.previousSibling : e.lastChild,
      ];
    },
  };
function OT(t, e, i) {
  const s = t._vtc;
  s && (e = (e ? [e, ...s] : [...s]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : i
      ? t.setAttribute("class", e)
      : (t.className = e);
}
function PT(t, e, i) {
  const s = t.style,
    n = Qe(i);
  if (i && !n) {
    if (e && !Qe(e)) for (const r in e) i[r] == null && Yl(s, r, "");
    for (const r in i) Yl(s, r, i[r]);
  } else {
    const r = s.display;
    n ? e !== i && (s.cssText = i) : e && t.removeAttribute("style"),
      "_vod" in t && (s.display = r);
  }
}
const ah = /\s*!important$/;
function Yl(t, e, i) {
  if (me(i)) i.forEach((s) => Yl(t, e, s));
  else if ((i == null && (i = ""), e.startsWith("--"))) t.setProperty(e, i);
  else {
    const s = DT(t, e);
    ah.test(i)
      ? t.setProperty(mn(s), i.replace(ah, ""), "important")
      : (t[s] = i);
  }
}
const oh = ["Webkit", "Moz", "ms"],
  dl = {};
function DT(t, e) {
  const i = dl[e];
  if (i) return i;
  let s = Zs(e);
  if (s !== "filter" && s in t) return (dl[e] = s);
  s = Hf(s);
  for (let n = 0; n < oh.length; n++) {
    const r = oh[n] + s;
    if (r in t) return (dl[e] = r);
  }
  return e;
}
const lh = "http://www.w3.org/1999/xlink";
function LT(t, e, i, s, n) {
  if (s && e.startsWith("xlink:"))
    i == null
      ? t.removeAttributeNS(lh, e.slice(6, e.length))
      : t.setAttributeNS(lh, e, i);
  else {
    const r = Py(e);
    i == null || (r && !Mf(i))
      ? t.removeAttribute(e)
      : t.setAttribute(e, r ? "" : i);
  }
}
function RT(t, e, i, s, n, r, a) {
  if (e === "innerHTML" || e === "textContent") {
    s && a(s, n, r), (t[e] = i ?? "");
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
    t._value = i;
    const u = i ?? "";
    (t.value !== u || t.tagName === "OPTION") && (t.value = u),
      i == null && t.removeAttribute(e);
    return;
  }
  let o = !1;
  if (i === "" || i == null) {
    const u = typeof t[e];
    u === "boolean"
      ? (i = Mf(i))
      : i == null && u === "string"
      ? ((i = ""), (o = !0))
      : u === "number" && ((i = 0), (o = !0));
  }
  try {
    t[e] = i;
  } catch {}
  o && t.removeAttribute(e);
}
function NT(t, e, i, s) {
  t.addEventListener(e, i, s);
}
function MT(t, e, i, s) {
  t.removeEventListener(e, i, s);
}
function UT(t, e, i, s, n = null) {
  const r = t._vei || (t._vei = {}),
    a = r[e];
  if (s && a) a.value = s;
  else {
    const [o, u] = FT(e);
    if (s) {
      const f = (r[e] = jT(s, n));
      NT(t, o, f, u);
    } else a && (MT(t, o, a, u), (r[e] = void 0));
  }
}
const uh = /(?:Once|Passive|Capture)$/;
function FT(t) {
  let e;
  if (uh.test(t)) {
    e = {};
    let s;
    for (; (s = t.match(uh)); )
      (t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : mn(t.slice(2)), e];
}
let hl = 0;
const BT = Promise.resolve(),
  $T = () => hl || (BT.then(() => (hl = 0)), (hl = Date.now()));
function jT(t, e) {
  const i = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= i.attached) return;
    Qt(HT(s, i.value), e, 5, [s]);
  };
  return (i.value = t), (i.attached = $T()), i;
}
function HT(t, e) {
  if (me(e)) {
    const i = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        i.call(t), (t._stopped = !0);
      }),
      e.map((s) => (n) => !n._stopped && s && s(n))
    );
  } else return e;
}
const ch = /^on[a-z]/,
  VT = (t, e, i, s, n = !1, r, a, o, u) => {
    e === "class"
      ? OT(t, s, n)
      : e === "style"
      ? PT(t, i, s)
      : ho(e)
      ? wu(e) || UT(t, e, i, s, a)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : WT(t, e, s, n)
        )
      ? RT(t, e, s, r, a, o, u)
      : (e === "true-value"
          ? (t._trueValue = s)
          : e === "false-value" && (t._falseValue = s),
        LT(t, e, s, n));
  };
function WT(t, e, i, s) {
  return s
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && ch.test(e) && _e(i))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (ch.test(e) && Qe(i))
    ? !1
    : e in t;
}
const qT = vt({ patchProp: VT }, IT);
let dh;
function zT() {
  return dh || (dh = oT(qT));
}
const GT = (...t) => {
  const e = zT().createApp(...t),
    { mount: i } = e;
  return (
    (e.mount = (s) => {
      const n = KT(s);
      if (!n) return;
      const r = e._component;
      !_e(r) && !r.render && !r.template && (r.template = n.innerHTML),
        (n.innerHTML = "");
      const a = i(n, !1, n instanceof SVGElement);
      return (
        n instanceof Element &&
          (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")),
        a
      );
    }),
    e
  );
};
function KT(t) {
  return Qe(t) ? document.querySelector(t) : t;
}
var Ma =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Dp(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var i = function s() {
      if (this instanceof s) {
        var n = [null];
        n.push.apply(n, arguments);
        var r = Function.bind.apply(e, n);
        return new r();
      }
      return e.apply(this, arguments);
    };
    i.prototype = e.prototype;
  } else i = {};
  return (
    Object.defineProperty(i, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (s) {
      var n = Object.getOwnPropertyDescriptor(t, s);
      Object.defineProperty(
        i,
        s,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return t[s];
              },
            }
      );
    }),
    i
  );
}
var Gn;
typeof window < "u"
  ? (Gn = window)
  : typeof Ma < "u"
  ? (Gn = Ma)
  : typeof self < "u"
  ? (Gn = self)
  : (Gn = {});
var C = Gn;
const XT = {},
  YT = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: XT },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  QT = Dp(YT);
var hh = typeof Ma < "u" ? Ma : typeof window < "u" ? window : {},
  JT = QT,
  Kn;
typeof document < "u"
  ? (Kn = document)
  : ((Kn = hh["__GLOBAL_DOCUMENT_CACHE@4"]),
    Kn || (Kn = hh["__GLOBAL_DOCUMENT_CACHE@4"] = JT));
var K = Kn,
  he = {},
  ZT = {
    get exports() {
      return he;
    },
    set exports(t) {
      he = t;
    },
  };
(function (t, e) {
  function i(u) {
    if (u && typeof u == "object") {
      var f = u.which || u.keyCode || u.charCode;
      f && (u = f);
    }
    if (typeof u == "number") return a[u];
    var p = String(u),
      _ = s[p.toLowerCase()];
    if (_) return _;
    var _ = n[p.toLowerCase()];
    if (_) return _;
    if (p.length === 1) return p.charCodeAt(0);
  }
  (i.isEventKey = function (f, p) {
    if (f && typeof f == "object") {
      var _ = f.which || f.keyCode || f.charCode;
      if (_ == null) return !1;
      if (typeof p == "string") {
        var v = s[p.toLowerCase()];
        if (v) return v === _;
        var v = n[p.toLowerCase()];
        if (v) return v === _;
      } else if (typeof p == "number") return p === _;
      return !1;
    }
  }),
    (e = t.exports = i);
  var s =
      (e.code =
      e.codes =
        {
          backspace: 8,
          tab: 9,
          enter: 13,
          shift: 16,
          ctrl: 17,
          alt: 18,
          "pause/break": 19,
          "caps lock": 20,
          esc: 27,
          space: 32,
          "page up": 33,
          "page down": 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          insert: 45,
          delete: 46,
          command: 91,
          "left command": 91,
          "right command": 93,
          "numpad *": 106,
          "numpad +": 107,
          "numpad -": 109,
          "numpad .": 110,
          "numpad /": 111,
          "num lock": 144,
          "scroll lock": 145,
          "my computer": 182,
          "my calculator": 183,
          ";": 186,
          "=": 187,
          ",": 188,
          "-": 189,
          ".": 190,
          "/": 191,
          "`": 192,
          "[": 219,
          "\\": 220,
          "]": 221,
          "'": 222,
        }),
    n = (e.aliases = {
      windows: 91,
      "⇧": 16,
      "⌥": 18,
      "⌃": 17,
      "⌘": 91,
      ctl: 17,
      control: 17,
      option: 18,
      pause: 19,
      break: 19,
      caps: 20,
      return: 13,
      escape: 27,
      spc: 32,
      spacebar: 32,
      pgup: 33,
      pgdn: 34,
      ins: 45,
      del: 46,
      cmd: 91,
    });
  /*!
   * Programatically add the following
   */ for (r = 97; r < 123; r++) s[String.fromCharCode(r)] = r - 32;
  for (var r = 48; r < 58; r++) s[r - 48] = r;
  for (r = 1; r < 13; r++) s["f" + r] = r + 111;
  for (r = 0; r < 10; r++) s["numpad " + r] = r + 96;
  var a = (e.names = e.title = {});
  for (r in s) a[s[r]] = r;
  for (var o in n) s[o] = n[o];
})(ZT, he);
var eb = tb;
function tb(t, e) {
  var i,
    s = null;
  try {
    i = JSON.parse(t, e);
  } catch (n) {
    s = n;
  }
  return [s, i];
}
var pr = {},
  ib = {
    get exports() {
      return pr;
    },
    set exports(t) {
      pr = t;
    },
  };
function Di() {
  return (
    (Di = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
          }
          return t;
        }),
    Di.apply(this, arguments)
  );
}
const sb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Di },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nb = Dp(sb);
var rb = ob,
  ab = Object.prototype.toString;
function ob(t) {
  if (!t) return !1;
  var e = ab.call(t);
  return (
    e === "[object Function]" ||
    (typeof t == "function" && e !== "[object RegExp]") ||
    (typeof window < "u" &&
      (t === window.setTimeout ||
        t === window.alert ||
        t === window.confirm ||
        t === window.prompt))
  );
}
var lb = C,
  ub = function (e, i) {
    return (
      i === void 0 && (i = !1),
      function (s, n, r) {
        if (s) {
          e(s);
          return;
        }
        if (n.statusCode >= 400 && n.statusCode <= 599) {
          var a = r;
          if (i)
            if (lb.TextDecoder) {
              var o = cb(n.headers && n.headers["content-type"]);
              try {
                a = new TextDecoder(o).decode(r);
              } catch {}
            } else a = String.fromCharCode.apply(null, new Uint8Array(r));
          e({ cause: a });
          return;
        }
        e(null, r);
      }
    );
  };
function cb(t) {
  return (
    t === void 0 && (t = ""),
    t
      .toLowerCase()
      .split(";")
      .reduce(function (e, i) {
        var s = i.split("="),
          n = s[0],
          r = s[1];
        return n.trim() === "charset" ? r.trim() : e;
      }, "utf-8")
  );
}
var db = ub,
  Lp = C,
  hb = nb,
  fb = rb;
fi.httpHandler = db;
var pb = function (e) {
  var i = {};
  return (
    e &&
      e
        .trim()
        .split(
          `
`
        )
        .forEach(function (s) {
          var n = s.indexOf(":"),
            r = s.slice(0, n).trim().toLowerCase(),
            a = s.slice(n + 1).trim();
          typeof i[r] > "u"
            ? (i[r] = a)
            : Array.isArray(i[r])
            ? i[r].push(a)
            : (i[r] = [i[r], a]);
        }),
    i
  );
};
ib.exports = fi;
pr.default = fi;
fi.XMLHttpRequest = Lp.XMLHttpRequest || yb;
fi.XDomainRequest =
  "withCredentials" in new fi.XMLHttpRequest()
    ? fi.XMLHttpRequest
    : Lp.XDomainRequest;
mb(["get", "put", "post", "patch", "head", "delete"], function (t) {
  fi[t === "delete" ? "del" : t] = function (e, i, s) {
    return (i = Rp(e, i, s)), (i.method = t.toUpperCase()), Np(i);
  };
});
function mb(t, e) {
  for (var i = 0; i < t.length; i++) e(t[i]);
}
function gb(t) {
  for (var e in t) if (t.hasOwnProperty(e)) return !1;
  return !0;
}
function Rp(t, e, i) {
  var s = t;
  return (
    fb(e)
      ? ((i = e), typeof t == "string" && (s = { uri: t }))
      : (s = hb({}, e, { uri: t })),
    (s.callback = i),
    s
  );
}
function fi(t, e, i) {
  return (e = Rp(t, e, i)), Np(e);
}
function Np(t) {
  if (typeof t.callback > "u") throw new Error("callback argument missing");
  var e = !1,
    i = function (R, N, L) {
      e || ((e = !0), t.callback(R, N, L));
    };
  function s() {
    o.readyState === 4 && setTimeout(a, 0);
  }
  function n() {
    var D = void 0;
    if ((o.response ? (D = o.response) : (D = o.responseText || _b(o)), S))
      try {
        D = JSON.parse(D);
      } catch {}
    return D;
  }
  function r(D) {
    return (
      clearTimeout(E),
      D instanceof Error ||
        (D = new Error("" + (D || "Unknown XMLHttpRequest Error"))),
      (D.statusCode = 0),
      i(D, k)
    );
  }
  function a() {
    if (!f) {
      var D;
      clearTimeout(E),
        t.useXDR && o.status === void 0
          ? (D = 200)
          : (D = o.status === 1223 ? 204 : o.status);
      var R = k,
        N = null;
      return (
        D !== 0
          ? ((R = {
              body: n(),
              statusCode: D,
              method: _,
              headers: {},
              url: p,
              rawRequest: o,
            }),
            o.getAllResponseHeaders &&
              (R.headers = pb(o.getAllResponseHeaders())))
          : (N = new Error("Internal XMLHttpRequest Error")),
        i(N, R, R.body)
      );
    }
  }
  var o = t.xhr || null;
  o ||
    (t.cors || t.useXDR
      ? (o = new fi.XDomainRequest())
      : (o = new fi.XMLHttpRequest()));
  var u,
    f,
    p = (o.url = t.uri || t.url),
    _ = (o.method = t.method || "GET"),
    v = t.body || t.data,
    y = (o.headers = t.headers || {}),
    A = !!t.sync,
    S = !1,
    E,
    k = {
      body: void 0,
      headers: {},
      statusCode: 0,
      method: _,
      url: p,
      rawRequest: o,
    };
  if (
    ("json" in t &&
      t.json !== !1 &&
      ((S = !0),
      y.accept || y.Accept || (y.Accept = "application/json"),
      _ !== "GET" &&
        _ !== "HEAD" &&
        (y["content-type"] ||
          y["Content-Type"] ||
          (y["Content-Type"] = "application/json"),
        (v = JSON.stringify(t.json === !0 ? v : t.json)))),
    (o.onreadystatechange = s),
    (o.onload = a),
    (o.onerror = r),
    (o.onprogress = function () {}),
    (o.onabort = function () {
      f = !0;
    }),
    (o.ontimeout = r),
    o.open(_, p, !A, t.username, t.password),
    A || (o.withCredentials = !!t.withCredentials),
    !A &&
      t.timeout > 0 &&
      (E = setTimeout(function () {
        if (!f) {
          (f = !0), o.abort("timeout");
          var D = new Error("XMLHttpRequest timeout");
          (D.code = "ETIMEDOUT"), r(D);
        }
      }, t.timeout)),
    o.setRequestHeader)
  )
    for (u in y) y.hasOwnProperty(u) && o.setRequestHeader(u, y[u]);
  else if (t.headers && !gb(t.headers))
    throw new Error("Headers cannot be set on an XDomainRequest object");
  return (
    "responseType" in t && (o.responseType = t.responseType),
    "beforeSend" in t && typeof t.beforeSend == "function" && t.beforeSend(o),
    o.send(v || null),
    o
  );
}
function _b(t) {
  try {
    if (t.responseType === "document") return t.responseXML;
    var e =
      t.responseXML && t.responseXML.documentElement.nodeName === "parsererror";
    if (t.responseType === "" && !e) return t.responseXML;
  } catch {}
  return null;
}
function yb() {}
var Ua = {},
  vb = {
    get exports() {
      return Ua;
    },
    set exports(t) {
      Ua = t;
    },
  },
  fh = K,
  zu =
    Object.create ||
    (function () {
      function t() {}
      return function (e) {
        if (arguments.length !== 1)
          throw new Error("Object.create shim only accepts one parameter.");
        return (t.prototype = e), new t();
      };
    })();
function Lt(t, e) {
  (this.name = "ParsingError"),
    (this.code = t.code),
    (this.message = e || t.message);
}
Lt.prototype = zu(Error.prototype);
Lt.prototype.constructor = Lt;
Lt.Errors = {
  BadSignature: { code: 0, message: "Malformed WebVTT signature." },
  BadTimeStamp: { code: 1, message: "Malformed time stamp." },
};
function Gu(t) {
  function e(s, n, r, a) {
    return (s | 0) * 3600 + (n | 0) * 60 + (r | 0) + (a | 0) / 1e3;
  }
  var i = t.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
  return i
    ? i[3]
      ? e(i[1], i[2], i[3].replace(":", ""), i[4])
      : i[1] > 59
      ? e(i[1], i[2], 0, i[4])
      : e(0, i[1], i[2], i[4])
    : null;
}
function tr() {
  this.values = zu(null);
}
tr.prototype = {
  set: function (t, e) {
    !this.get(t) && e !== "" && (this.values[t] = e);
  },
  get: function (t, e, i) {
    return i
      ? this.has(t)
        ? this.values[t]
        : e[i]
      : this.has(t)
      ? this.values[t]
      : e;
  },
  has: function (t) {
    return t in this.values;
  },
  alt: function (t, e, i) {
    for (var s = 0; s < i.length; ++s)
      if (e === i[s]) {
        this.set(t, e);
        break;
      }
  },
  integer: function (t, e) {
    /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10));
  },
  percent: function (t, e) {
    return e.match(/^([\d]{1,3})(\.[\d]*)?%$/) &&
      ((e = parseFloat(e)), e >= 0 && e <= 100)
      ? (this.set(t, e), !0)
      : !1;
  },
};
function Xn(t, e, i, s) {
  var n = s ? t.split(s) : [t];
  for (var r in n)
    if (typeof n[r] == "string") {
      var a = n[r].split(i);
      if (a.length === 2) {
        var o = a[0].trim(),
          u = a[1].trim();
        e(o, u);
      }
    }
}
function Tb(t, e, i) {
  var s = t;
  function n() {
    var o = Gu(t);
    if (o === null)
      throw new Lt(Lt.Errors.BadTimeStamp, "Malformed timestamp: " + s);
    return (t = t.replace(/^[^\sa-zA-Z-]+/, "")), o;
  }
  function r(o, u) {
    var f = new tr();
    Xn(
      o,
      function (p, _) {
        switch (p) {
          case "region":
            for (var v = i.length - 1; v >= 0; v--)
              if (i[v].id === _) {
                f.set(p, i[v].region);
                break;
              }
            break;
          case "vertical":
            f.alt(p, _, ["rl", "lr"]);
            break;
          case "line":
            var y = _.split(","),
              A = y[0];
            f.integer(p, A),
              f.percent(p, A) && f.set("snapToLines", !1),
              f.alt(p, A, ["auto"]),
              y.length === 2 &&
                f.alt("lineAlign", y[1], ["start", "center", "end"]);
            break;
          case "position":
            (y = _.split(",")),
              f.percent(p, y[0]),
              y.length === 2 &&
                f.alt("positionAlign", y[1], ["start", "center", "end"]);
            break;
          case "size":
            f.percent(p, _);
            break;
          case "align":
            f.alt(p, _, ["start", "center", "end", "left", "right"]);
            break;
        }
      },
      /:/,
      /\s/
    ),
      (u.region = f.get("region", null)),
      (u.vertical = f.get("vertical", ""));
    try {
      u.line = f.get("line", "auto");
    } catch {}
    (u.lineAlign = f.get("lineAlign", "start")),
      (u.snapToLines = f.get("snapToLines", !0)),
      (u.size = f.get("size", 100));
    try {
      u.align = f.get("align", "center");
    } catch {
      u.align = f.get("align", "middle");
    }
    try {
      u.position = f.get("position", "auto");
    } catch {
      u.position = f.get(
        "position",
        { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 },
        u.align
      );
    }
    u.positionAlign = f.get(
      "positionAlign",
      {
        start: "start",
        left: "start",
        center: "center",
        middle: "center",
        end: "end",
        right: "end",
      },
      u.align
    );
  }
  function a() {
    t = t.replace(/^\s+/, "");
  }
  if ((a(), (e.startTime = n()), a(), t.substr(0, 3) !== "-->"))
    throw new Lt(
      Lt.Errors.BadTimeStamp,
      "Malformed time stamp (time stamps must be separated by '-->'): " + s
    );
  (t = t.substr(3)), a(), (e.endTime = n()), a(), r(t, e);
}
var fl = fh.createElement && fh.createElement("textarea"),
  bb = {
    c: "span",
    i: "i",
    b: "b",
    u: "u",
    ruby: "ruby",
    rt: "rt",
    v: "span",
    lang: "span",
  },
  ph = {
    white: "rgba(255,255,255,1)",
    lime: "rgba(0,255,0,1)",
    cyan: "rgba(0,255,255,1)",
    red: "rgba(255,0,0,1)",
    yellow: "rgba(255,255,0,1)",
    magenta: "rgba(255,0,255,1)",
    blue: "rgba(0,0,255,1)",
    black: "rgba(0,0,0,1)",
  },
  xb = { v: "title", lang: "lang" },
  mh = { rt: "ruby" };
function Mp(t, e) {
  function i() {
    if (!e) return null;
    function A(E) {
      return (e = e.substr(E.length)), E;
    }
    var S = e.match(/^([^<]*)(<[^>]*>?)?/);
    return A(S[1] ? S[1] : S[2]);
  }
  function s(A) {
    return (fl.innerHTML = A), (A = fl.textContent), (fl.textContent = ""), A;
  }
  function n(A, S) {
    return !mh[S.localName] || mh[S.localName] === A.localName;
  }
  function r(A, S) {
    var E = bb[A];
    if (!E) return null;
    var k = t.document.createElement(E),
      D = xb[A];
    return D && S && (k[D] = S.trim()), k;
  }
  for (
    var a = t.document.createElement("div"), o = a, u, f = [];
    (u = i()) !== null;

  ) {
    if (u[0] === "<") {
      if (u[1] === "/") {
        f.length &&
          f[f.length - 1] === u.substr(2).replace(">", "") &&
          (f.pop(), (o = o.parentNode));
        continue;
      }
      var p = Gu(u.substr(1, u.length - 2)),
        _;
      if (p) {
        (_ = t.document.createProcessingInstruction("timestamp", p)),
          o.appendChild(_);
        continue;
      }
      var v = u.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
      if (!v || ((_ = r(v[1], v[3])), !_) || !n(o, _)) continue;
      if (v[2]) {
        var y = v[2].split(".");
        y.forEach(function (A) {
          var S = /^bg_/.test(A),
            E = S ? A.slice(3) : A;
          if (ph.hasOwnProperty(E)) {
            var k = S ? "background-color" : "color",
              D = ph[E];
            _.style[k] = D;
          }
        }),
          (_.className = y.join(" "));
      }
      f.push(v[1]), o.appendChild(_), (o = _);
      continue;
    }
    o.appendChild(t.document.createTextNode(s(u)));
  }
  return a;
}
var gh = [
  [1470, 1470],
  [1472, 1472],
  [1475, 1475],
  [1478, 1478],
  [1488, 1514],
  [1520, 1524],
  [1544, 1544],
  [1547, 1547],
  [1549, 1549],
  [1563, 1563],
  [1566, 1610],
  [1645, 1647],
  [1649, 1749],
  [1765, 1766],
  [1774, 1775],
  [1786, 1805],
  [1807, 1808],
  [1810, 1839],
  [1869, 1957],
  [1969, 1969],
  [1984, 2026],
  [2036, 2037],
  [2042, 2042],
  [2048, 2069],
  [2074, 2074],
  [2084, 2084],
  [2088, 2088],
  [2096, 2110],
  [2112, 2136],
  [2142, 2142],
  [2208, 2208],
  [2210, 2220],
  [8207, 8207],
  [64285, 64285],
  [64287, 64296],
  [64298, 64310],
  [64312, 64316],
  [64318, 64318],
  [64320, 64321],
  [64323, 64324],
  [64326, 64449],
  [64467, 64829],
  [64848, 64911],
  [64914, 64967],
  [65008, 65020],
  [65136, 65140],
  [65142, 65276],
  [67584, 67589],
  [67592, 67592],
  [67594, 67637],
  [67639, 67640],
  [67644, 67644],
  [67647, 67669],
  [67671, 67679],
  [67840, 67867],
  [67872, 67897],
  [67903, 67903],
  [67968, 68023],
  [68030, 68031],
  [68096, 68096],
  [68112, 68115],
  [68117, 68119],
  [68121, 68147],
  [68160, 68167],
  [68176, 68184],
  [68192, 68223],
  [68352, 68405],
  [68416, 68437],
  [68440, 68466],
  [68472, 68479],
  [68608, 68680],
  [126464, 126467],
  [126469, 126495],
  [126497, 126498],
  [126500, 126500],
  [126503, 126503],
  [126505, 126514],
  [126516, 126519],
  [126521, 126521],
  [126523, 126523],
  [126530, 126530],
  [126535, 126535],
  [126537, 126537],
  [126539, 126539],
  [126541, 126543],
  [126545, 126546],
  [126548, 126548],
  [126551, 126551],
  [126553, 126553],
  [126555, 126555],
  [126557, 126557],
  [126559, 126559],
  [126561, 126562],
  [126564, 126564],
  [126567, 126570],
  [126572, 126578],
  [126580, 126583],
  [126585, 126588],
  [126590, 126590],
  [126592, 126601],
  [126603, 126619],
  [126625, 126627],
  [126629, 126633],
  [126635, 126651],
  [1114109, 1114109],
];
function Sb(t) {
  for (var e = 0; e < gh.length; e++) {
    var i = gh[e];
    if (t >= i[0] && t <= i[1]) return !0;
  }
  return !1;
}
function Eb(t) {
  var e = [],
    i = "",
    s;
  if (!t || !t.childNodes) return "ltr";
  function n(o, u) {
    for (var f = u.childNodes.length - 1; f >= 0; f--) o.push(u.childNodes[f]);
  }
  function r(o) {
    if (!o || !o.length) return null;
    var u = o.pop(),
      f = u.textContent || u.innerText;
    if (f) {
      var p = f.match(/^.*(\n|\r)/);
      return p ? ((o.length = 0), p[0]) : f;
    }
    if (u.tagName === "ruby") return r(o);
    if (u.childNodes) return n(o, u), r(o);
  }
  for (n(e, t); (i = r(e)); )
    for (var a = 0; a < i.length; a++)
      if (((s = i.charCodeAt(a)), Sb(s))) return "rtl";
  return "ltr";
}
function Cb(t) {
  if (
    typeof t.line == "number" &&
    (t.snapToLines || (t.line >= 0 && t.line <= 100))
  )
    return t.line;
  if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement)
    return -1;
  for (
    var e = t.track, i = e.textTrackList, s = 0, n = 0;
    n < i.length && i[n] !== e;
    n++
  )
    i[n].mode === "showing" && s++;
  return ++s * -1;
}
function bo() {}
bo.prototype.applyStyles = function (t, e) {
  e = e || this.div;
  for (var i in t) t.hasOwnProperty(i) && (e.style[i] = t[i]);
};
bo.prototype.formatStyle = function (t, e) {
  return t === 0 ? 0 : t + e;
};
function Fa(t, e, i) {
  bo.call(this), (this.cue = e), (this.cueDiv = Mp(t, e.text));
  var s = {
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "inline",
    writingMode:
      e.vertical === ""
        ? "horizontal-tb"
        : e.vertical === "lr"
        ? "vertical-lr"
        : "vertical-rl",
    unicodeBidi: "plaintext",
  };
  this.applyStyles(s, this.cueDiv),
    (this.div = t.document.createElement("div")),
    (s = {
      direction: Eb(this.cueDiv),
      writingMode:
        e.vertical === ""
          ? "horizontal-tb"
          : e.vertical === "lr"
          ? "vertical-lr"
          : "vertical-rl",
      unicodeBidi: "plaintext",
      textAlign: e.align === "middle" ? "center" : e.align,
      font: i.font,
      whiteSpace: "pre-line",
      position: "absolute",
    }),
    this.applyStyles(s),
    this.div.appendChild(this.cueDiv);
  var n = 0;
  switch (e.positionAlign) {
    case "start":
      n = e.position;
      break;
    case "center":
      n = e.position - e.size / 2;
      break;
    case "end":
      n = e.position - e.size;
      break;
  }
  e.vertical === ""
    ? this.applyStyles({
        left: this.formatStyle(n, "%"),
        width: this.formatStyle(e.size, "%"),
      })
    : this.applyStyles({
        top: this.formatStyle(n, "%"),
        height: this.formatStyle(e.size, "%"),
      }),
    (this.move = function (r) {
      this.applyStyles({
        top: this.formatStyle(r.top, "px"),
        bottom: this.formatStyle(r.bottom, "px"),
        left: this.formatStyle(r.left, "px"),
        right: this.formatStyle(r.right, "px"),
        height: this.formatStyle(r.height, "px"),
        width: this.formatStyle(r.width, "px"),
      });
    });
}
Fa.prototype = zu(bo.prototype);
Fa.prototype.constructor = Fa;
function pt(t) {
  var e, i, s, n;
  if (t.div) {
    (i = t.div.offsetHeight), (s = t.div.offsetWidth), (n = t.div.offsetTop);
    var r =
      (r = t.div.childNodes) &&
      (r = r[0]) &&
      r.getClientRects &&
      r.getClientRects();
    (t = t.div.getBoundingClientRect()),
      (e = r ? Math.max((r[0] && r[0].height) || 0, t.height / r.length) : 0);
  }
  (this.left = t.left),
    (this.right = t.right),
    (this.top = t.top || n),
    (this.height = t.height || i),
    (this.bottom = t.bottom || n + (t.height || i)),
    (this.width = t.width || s),
    (this.lineHeight = e !== void 0 ? e : t.lineHeight);
}
pt.prototype.move = function (t, e) {
  switch (((e = e !== void 0 ? e : this.lineHeight), t)) {
    case "+x":
      (this.left += e), (this.right += e);
      break;
    case "-x":
      (this.left -= e), (this.right -= e);
      break;
    case "+y":
      (this.top += e), (this.bottom += e);
      break;
    case "-y":
      (this.top -= e), (this.bottom -= e);
      break;
  }
};
pt.prototype.overlaps = function (t) {
  return (
    this.left < t.right &&
    this.right > t.left &&
    this.top < t.bottom &&
    this.bottom > t.top
  );
};
pt.prototype.overlapsAny = function (t) {
  for (var e = 0; e < t.length; e++) if (this.overlaps(t[e])) return !0;
  return !1;
};
pt.prototype.within = function (t) {
  return (
    this.top >= t.top &&
    this.bottom <= t.bottom &&
    this.left >= t.left &&
    this.right <= t.right
  );
};
pt.prototype.overlapsOppositeAxis = function (t, e) {
  switch (e) {
    case "+x":
      return this.left < t.left;
    case "-x":
      return this.right > t.right;
    case "+y":
      return this.top < t.top;
    case "-y":
      return this.bottom > t.bottom;
  }
};
pt.prototype.intersectPercentage = function (t) {
  var e = Math.max(
      0,
      Math.min(this.right, t.right) - Math.max(this.left, t.left)
    ),
    i = Math.max(
      0,
      Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)
    ),
    s = e * i;
  return s / (this.height * this.width);
};
pt.prototype.toCSSCompatValues = function (t) {
  return {
    top: this.top - t.top,
    bottom: t.bottom - this.bottom,
    left: this.left - t.left,
    right: t.right - this.right,
    height: this.height,
    width: this.width,
  };
};
pt.getSimpleBoxPosition = function (t) {
  var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
    i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
    s = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
  t = t.div
    ? t.div.getBoundingClientRect()
    : t.tagName
    ? t.getBoundingClientRect()
    : t;
  var n = {
    left: t.left,
    right: t.right,
    top: t.top || s,
    height: t.height || e,
    bottom: t.bottom || s + (t.height || e),
    width: t.width || i,
  };
  return n;
};
function wb(t, e, i, s) {
  function n(E, k) {
    for (var D, R = new pt(E), N = 1, L = 0; L < k.length; L++) {
      for (
        ;
        E.overlapsOppositeAxis(i, k[L]) || (E.within(i) && E.overlapsAny(s));

      )
        E.move(k[L]);
      if (E.within(i)) return E;
      var z = E.intersectPercentage(i);
      N > z && ((D = new pt(E)), (N = z)), (E = new pt(R));
    }
    return D || R;
  }
  var r = new pt(e),
    a = e.cue,
    o = Cb(a),
    u = [];
  if (a.snapToLines) {
    var f;
    switch (a.vertical) {
      case "":
        (u = ["+y", "-y"]), (f = "height");
        break;
      case "rl":
        (u = ["+x", "-x"]), (f = "width");
        break;
      case "lr":
        (u = ["-x", "+x"]), (f = "width");
        break;
    }
    var p = r.lineHeight,
      _ = p * Math.round(o),
      v = i[f] + p,
      y = u[0];
    Math.abs(_) > v && ((_ = _ < 0 ? -1 : 1), (_ *= Math.ceil(v / p) * p)),
      o < 0 &&
        ((_ += a.vertical === "" ? i.height : i.width), (u = u.reverse())),
      r.move(y, _);
  } else {
    var A = (r.lineHeight / i.height) * 100;
    switch (a.lineAlign) {
      case "center":
        o -= A / 2;
        break;
      case "end":
        o -= A;
        break;
    }
    switch (a.vertical) {
      case "":
        e.applyStyles({ top: e.formatStyle(o, "%") });
        break;
      case "rl":
        e.applyStyles({ left: e.formatStyle(o, "%") });
        break;
      case "lr":
        e.applyStyles({ right: e.formatStyle(o, "%") });
        break;
    }
    (u = ["+y", "-x", "+x", "-y"]), (r = new pt(e));
  }
  var S = n(r, u);
  e.move(S.toCSSCompatValues(i));
}
function yn() {}
yn.StringDecoder = function () {
  return {
    decode: function (t) {
      if (!t) return "";
      if (typeof t != "string")
        throw new Error("Error - expected string data.");
      return decodeURIComponent(encodeURIComponent(t));
    },
  };
};
yn.convertCueToDOMTree = function (t, e) {
  return !t || !e ? null : Mp(t, e);
};
var Ab = 0.05,
  kb = "sans-serif",
  Ib = "1.5%";
yn.processCues = function (t, e, i) {
  if (!t || !e || !i) return null;
  for (; i.firstChild; ) i.removeChild(i.firstChild);
  var s = t.document.createElement("div");
  (s.style.position = "absolute"),
    (s.style.left = "0"),
    (s.style.right = "0"),
    (s.style.top = "0"),
    (s.style.bottom = "0"),
    (s.style.margin = Ib),
    i.appendChild(s);
  function n(p) {
    for (var _ = 0; _ < p.length; _++)
      if (p[_].hasBeenReset || !p[_].displayState) return !0;
    return !1;
  }
  if (!n(e)) {
    for (var r = 0; r < e.length; r++) s.appendChild(e[r].displayState);
    return;
  }
  var a = [],
    o = pt.getSimpleBoxPosition(s),
    u = Math.round(o.height * Ab * 100) / 100,
    f = { font: u + "px " + kb };
  (function () {
    for (var p, _, v = 0; v < e.length; v++)
      (_ = e[v]),
        (p = new Fa(t, _, f)),
        s.appendChild(p.div),
        wb(t, p, o, a),
        (_.displayState = p.div),
        a.push(pt.getSimpleBoxPosition(p));
  })();
};
yn.Parser = function (t, e, i) {
  i || ((i = e), (e = {})),
    e || (e = {}),
    (this.window = t),
    (this.vttjs = e),
    (this.state = "INITIAL"),
    (this.buffer = ""),
    (this.decoder = i || new TextDecoder("utf8")),
    (this.regionList = []);
};
yn.Parser.prototype = {
  reportOrThrowError: function (t) {
    if (t instanceof Lt) this.onparsingerror && this.onparsingerror(t);
    else throw t;
  },
  parse: function (t) {
    var e = this;
    t && (e.buffer += e.decoder.decode(t, { stream: !0 }));
    function i() {
      for (
        var p = e.buffer, _ = 0;
        _ < p.length &&
        p[_] !== "\r" &&
        p[_] !==
          `
`;

      )
        ++_;
      var v = p.substr(0, _);
      return (
        p[_] === "\r" && ++_,
        p[_] ===
          `
` && ++_,
        (e.buffer = p.substr(_)),
        v
      );
    }
    function s(p) {
      var _ = new tr();
      if (
        (Xn(
          p,
          function (y, A) {
            switch (y) {
              case "id":
                _.set(y, A);
                break;
              case "width":
                _.percent(y, A);
                break;
              case "lines":
                _.integer(y, A);
                break;
              case "regionanchor":
              case "viewportanchor":
                var S = A.split(",");
                if (S.length !== 2) break;
                var E = new tr();
                if (
                  (E.percent("x", S[0]),
                  E.percent("y", S[1]),
                  !E.has("x") || !E.has("y"))
                )
                  break;
                _.set(y + "X", E.get("x")), _.set(y + "Y", E.get("y"));
                break;
              case "scroll":
                _.alt(y, A, ["up"]);
                break;
            }
          },
          /=/,
          /\s/
        ),
        _.has("id"))
      ) {
        var v = new (e.vttjs.VTTRegion || e.window.VTTRegion)();
        (v.width = _.get("width", 100)),
          (v.lines = _.get("lines", 3)),
          (v.regionAnchorX = _.get("regionanchorX", 0)),
          (v.regionAnchorY = _.get("regionanchorY", 100)),
          (v.viewportAnchorX = _.get("viewportanchorX", 0)),
          (v.viewportAnchorY = _.get("viewportanchorY", 100)),
          (v.scroll = _.get("scroll", "")),
          e.onregion && e.onregion(v),
          e.regionList.push({ id: _.get("id"), region: v });
      }
    }
    function n(p) {
      var _ = new tr();
      Xn(
        p,
        function (v, y) {
          switch (v) {
            case "MPEGT":
              _.integer(v + "S", y);
              break;
            case "LOCA":
              _.set(v + "L", Gu(y));
              break;
          }
        },
        /[^\d]:/,
        /,/
      ),
        e.ontimestampmap &&
          e.ontimestampmap({ MPEGTS: _.get("MPEGTS"), LOCAL: _.get("LOCAL") });
    }
    function r(p) {
      p.match(/X-TIMESTAMP-MAP/)
        ? Xn(
            p,
            function (_, v) {
              switch (_) {
                case "X-TIMESTAMP-MAP":
                  n(v);
                  break;
              }
            },
            /=/
          )
        : Xn(
            p,
            function (_, v) {
              switch (_) {
                case "Region":
                  s(v);
                  break;
              }
            },
            /:/
          );
    }
    try {
      var a;
      if (e.state === "INITIAL") {
        if (!/\r\n|\n/.test(e.buffer)) return this;
        a = i();
        var o = a.match(/^WEBVTT([ \t].*)?$/);
        if (!o || !o[0]) throw new Lt(Lt.Errors.BadSignature);
        e.state = "HEADER";
      }
      for (var u = !1; e.buffer; ) {
        if (!/\r\n|\n/.test(e.buffer)) return this;
        switch ((u ? (u = !1) : (a = i()), e.state)) {
          case "HEADER":
            /:/.test(a) ? r(a) : a || (e.state = "ID");
            continue;
          case "NOTE":
            a || (e.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(a)) {
              e.state = "NOTE";
              break;
            }
            if (!a) continue;
            e.cue = new (e.vttjs.VTTCue || e.window.VTTCue)(0, 0, "");
            try {
              e.cue.align = "center";
            } catch {
              e.cue.align = "middle";
            }
            if (((e.state = "CUE"), a.indexOf("-->") === -1)) {
              e.cue.id = a;
              continue;
            }
          case "CUE":
            try {
              Tb(a, e.cue, e.regionList);
            } catch (p) {
              e.reportOrThrowError(p), (e.cue = null), (e.state = "BADCUE");
              continue;
            }
            e.state = "CUETEXT";
            continue;
          case "CUETEXT":
            var f = a.indexOf("-->") !== -1;
            if (!a || (f && (u = !0))) {
              e.oncue && e.oncue(e.cue), (e.cue = null), (e.state = "ID");
              continue;
            }
            e.cue.text &&
              (e.cue.text += `
`),
              (e.cue.text += a
                .replace(
                  /\u2028/g,
                  `
`
                )
                .replace(
                  /u2029/g,
                  `
`
                ));
            continue;
          case "BADCUE":
            a || (e.state = "ID");
            continue;
        }
      }
    } catch (p) {
      e.reportOrThrowError(p),
        e.state === "CUETEXT" && e.cue && e.oncue && e.oncue(e.cue),
        (e.cue = null),
        (e.state = e.state === "INITIAL" ? "BADWEBVTT" : "BADCUE");
    }
    return this;
  },
  flush: function () {
    var t = this;
    try {
      if (
        ((t.buffer += t.decoder.decode()),
        (t.cue || t.state === "HEADER") &&
          ((t.buffer += `

`),
          t.parse()),
        t.state === "INITIAL")
      )
        throw new Lt(Lt.Errors.BadSignature);
    } catch (e) {
      t.reportOrThrowError(e);
    }
    return t.onflush && t.onflush(), this;
  },
};
var Ob = yn,
  Pb = "auto",
  Db = { "": 1, lr: 1, rl: 1 },
  Lb = {
    start: 1,
    center: 1,
    end: 1,
    left: 1,
    right: 1,
    auto: 1,
    "line-left": 1,
    "line-right": 1,
  };
function Rb(t) {
  if (typeof t != "string") return !1;
  var e = Db[t.toLowerCase()];
  return e ? t.toLowerCase() : !1;
}
function pl(t) {
  if (typeof t != "string") return !1;
  var e = Lb[t.toLowerCase()];
  return e ? t.toLowerCase() : !1;
}
function Up(t, e, i) {
  this.hasBeenReset = !1;
  var s = "",
    n = !1,
    r = t,
    a = e,
    o = i,
    u = null,
    f = "",
    p = !0,
    _ = "auto",
    v = "start",
    y = "auto",
    A = "auto",
    S = 100,
    E = "center";
  Object.defineProperties(this, {
    id: {
      enumerable: !0,
      get: function () {
        return s;
      },
      set: function (k) {
        s = "" + k;
      },
    },
    pauseOnExit: {
      enumerable: !0,
      get: function () {
        return n;
      },
      set: function (k) {
        n = !!k;
      },
    },
    startTime: {
      enumerable: !0,
      get: function () {
        return r;
      },
      set: function (k) {
        if (typeof k != "number")
          throw new TypeError("Start time must be set to a number.");
        (r = k), (this.hasBeenReset = !0);
      },
    },
    endTime: {
      enumerable: !0,
      get: function () {
        return a;
      },
      set: function (k) {
        if (typeof k != "number")
          throw new TypeError("End time must be set to a number.");
        (a = k), (this.hasBeenReset = !0);
      },
    },
    text: {
      enumerable: !0,
      get: function () {
        return o;
      },
      set: function (k) {
        (o = "" + k), (this.hasBeenReset = !0);
      },
    },
    region: {
      enumerable: !0,
      get: function () {
        return u;
      },
      set: function (k) {
        (u = k), (this.hasBeenReset = !0);
      },
    },
    vertical: {
      enumerable: !0,
      get: function () {
        return f;
      },
      set: function (k) {
        var D = Rb(k);
        if (D === !1)
          throw new SyntaxError(
            "Vertical: an invalid or illegal direction string was specified."
          );
        (f = D), (this.hasBeenReset = !0);
      },
    },
    snapToLines: {
      enumerable: !0,
      get: function () {
        return p;
      },
      set: function (k) {
        (p = !!k), (this.hasBeenReset = !0);
      },
    },
    line: {
      enumerable: !0,
      get: function () {
        return _;
      },
      set: function (k) {
        if (typeof k != "number" && k !== Pb)
          throw new SyntaxError(
            "Line: an invalid number or illegal string was specified."
          );
        (_ = k), (this.hasBeenReset = !0);
      },
    },
    lineAlign: {
      enumerable: !0,
      get: function () {
        return v;
      },
      set: function (k) {
        var D = pl(k);
        D && ((v = D), (this.hasBeenReset = !0));
      },
    },
    position: {
      enumerable: !0,
      get: function () {
        return y;
      },
      set: function (k) {
        if (k < 0 || k > 100)
          throw new Error("Position must be between 0 and 100.");
        (y = k), (this.hasBeenReset = !0);
      },
    },
    positionAlign: {
      enumerable: !0,
      get: function () {
        return A;
      },
      set: function (k) {
        var D = pl(k);
        D && ((A = D), (this.hasBeenReset = !0));
      },
    },
    size: {
      enumerable: !0,
      get: function () {
        return S;
      },
      set: function (k) {
        if (k < 0 || k > 100)
          throw new Error("Size must be between 0 and 100.");
        (S = k), (this.hasBeenReset = !0);
      },
    },
    align: {
      enumerable: !0,
      get: function () {
        return E;
      },
      set: function (k) {
        var D = pl(k);
        if (!D)
          throw new SyntaxError(
            "align: an invalid or illegal alignment string was specified."
          );
        (E = D), (this.hasBeenReset = !0);
      },
    },
  }),
    (this.displayState = void 0);
}
Up.prototype.getCueAsHTML = function () {
  return WebVTT.convertCueToDOMTree(window, this.text);
};
var Nb = Up,
  Mb = { "": !0, up: !0 };
function Ub(t) {
  if (typeof t != "string") return !1;
  var e = Mb[t.toLowerCase()];
  return e ? t.toLowerCase() : !1;
}
function Fn(t) {
  return typeof t == "number" && t >= 0 && t <= 100;
}
function Fb() {
  var t = 100,
    e = 3,
    i = 0,
    s = 100,
    n = 0,
    r = 100,
    a = "";
  Object.defineProperties(this, {
    width: {
      enumerable: !0,
      get: function () {
        return t;
      },
      set: function (o) {
        if (!Fn(o)) throw new Error("Width must be between 0 and 100.");
        t = o;
      },
    },
    lines: {
      enumerable: !0,
      get: function () {
        return e;
      },
      set: function (o) {
        if (typeof o != "number")
          throw new TypeError("Lines must be set to a number.");
        e = o;
      },
    },
    regionAnchorY: {
      enumerable: !0,
      get: function () {
        return s;
      },
      set: function (o) {
        if (!Fn(o)) throw new Error("RegionAnchorX must be between 0 and 100.");
        s = o;
      },
    },
    regionAnchorX: {
      enumerable: !0,
      get: function () {
        return i;
      },
      set: function (o) {
        if (!Fn(o)) throw new Error("RegionAnchorY must be between 0 and 100.");
        i = o;
      },
    },
    viewportAnchorY: {
      enumerable: !0,
      get: function () {
        return r;
      },
      set: function (o) {
        if (!Fn(o))
          throw new Error("ViewportAnchorY must be between 0 and 100.");
        r = o;
      },
    },
    viewportAnchorX: {
      enumerable: !0,
      get: function () {
        return n;
      },
      set: function (o) {
        if (!Fn(o))
          throw new Error("ViewportAnchorX must be between 0 and 100.");
        n = o;
      },
    },
    scroll: {
      enumerable: !0,
      get: function () {
        return a;
      },
      set: function (o) {
        var u = Ub(o);
        u === !1 || (a = u);
      },
    },
  });
}
var Bb = Fb,
  Li = C,
  xs = (vb.exports = { WebVTT: Ob, VTTCue: Nb, VTTRegion: Bb });
Li.vttjs = xs;
Li.WebVTT = xs.WebVTT;
var $b = xs.VTTCue,
  jb = xs.VTTRegion,
  Hb = Li.VTTCue,
  Vb = Li.VTTRegion;
xs.shim = function () {
  (Li.VTTCue = $b), (Li.VTTRegion = jb);
};
xs.restore = function () {
  (Li.VTTCue = Hb), (Li.VTTRegion = Vb);
};
Li.VTTCue || xs.shim();
var Ql = {},
  Wb = {
    get exports() {
      return Ql;
    },
    set exports(t) {
      Ql = t;
    },
  };
(function (t, e) {
  (function (i) {
    var s =
        /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
      n = /^(?=([^\/?#]*))\1([^]*)$/,
      r = /(?:\/|^)\.(?=\/)/g,
      a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
      o = {
        buildAbsoluteURL: function (u, f, p) {
          if (((p = p || {}), (u = u.trim()), (f = f.trim()), !f)) {
            if (!p.alwaysNormalize) return u;
            var _ = o.parseURL(u);
            if (!_) throw new Error("Error trying to parse base URL.");
            return (_.path = o.normalizePath(_.path)), o.buildURLFromParts(_);
          }
          var v = o.parseURL(f);
          if (!v) throw new Error("Error trying to parse relative URL.");
          if (v.scheme)
            return p.alwaysNormalize
              ? ((v.path = o.normalizePath(v.path)), o.buildURLFromParts(v))
              : f;
          var y = o.parseURL(u);
          if (!y) throw new Error("Error trying to parse base URL.");
          if (!y.netLoc && y.path && y.path[0] !== "/") {
            var A = n.exec(y.path);
            (y.netLoc = A[1]), (y.path = A[2]);
          }
          y.netLoc && !y.path && (y.path = "/");
          var S = {
            scheme: y.scheme,
            netLoc: v.netLoc,
            path: null,
            params: v.params,
            query: v.query,
            fragment: v.fragment,
          };
          if (!v.netLoc && ((S.netLoc = y.netLoc), v.path[0] !== "/"))
            if (!v.path)
              (S.path = y.path),
                v.params ||
                  ((S.params = y.params), v.query || (S.query = y.query));
            else {
              var E = y.path,
                k = E.substring(0, E.lastIndexOf("/") + 1) + v.path;
              S.path = o.normalizePath(k);
            }
          return (
            S.path === null &&
              (S.path = p.alwaysNormalize ? o.normalizePath(v.path) : v.path),
            o.buildURLFromParts(S)
          );
        },
        parseURL: function (u) {
          var f = s.exec(u);
          return f
            ? {
                scheme: f[1] || "",
                netLoc: f[2] || "",
                path: f[3] || "",
                params: f[4] || "",
                query: f[5] || "",
                fragment: f[6] || "",
              }
            : null;
        },
        normalizePath: function (u) {
          for (
            u = u.split("").reverse().join("").replace(r, "");
            u.length !== (u = u.replace(a, "")).length;

          );
          return u.split("").reverse().join("");
        },
        buildURLFromParts: function (u) {
          return u.scheme + u.netLoc + u.path + u.params + u.query + u.fragment;
        },
      };
    t.exports = o;
  })();
})(Wb);
const Ba = Ql;
var _h = "http://example.com",
  qb = function (e, i) {
    if (/^[a-z]+:/i.test(i)) return i;
    /^data:/.test(e) && (e = (C.location && C.location.href) || "");
    var s = typeof C.URL == "function",
      n = /^\/\//.test(e),
      r = !C.location && !/\/\//i.test(e);
    if (
      (s
        ? (e = new C.URL(e, C.location || _h))
        : /\/\//i.test(e) ||
          (e = Ba.buildAbsoluteURL((C.location && C.location.href) || "", e)),
      s)
    ) {
      var a = new URL(i, e);
      return r
        ? a.href.slice(_h.length)
        : n
        ? a.href.slice(a.protocol.length)
        : a.href;
    }
    return Ba.buildAbsoluteURL(e, i);
  },
  Ku = (function () {
    function t() {
      this.listeners = {};
    }
    var e = t.prototype;
    return (
      (e.on = function (s, n) {
        this.listeners[s] || (this.listeners[s] = []),
          this.listeners[s].push(n);
      }),
      (e.off = function (s, n) {
        if (!this.listeners[s]) return !1;
        var r = this.listeners[s].indexOf(n);
        return (
          (this.listeners[s] = this.listeners[s].slice(0)),
          this.listeners[s].splice(r, 1),
          r > -1
        );
      }),
      (e.trigger = function (s) {
        var n = this.listeners[s];
        if (n)
          if (arguments.length === 2)
            for (var r = n.length, a = 0; a < r; ++a)
              n[a].call(this, arguments[1]);
          else
            for (
              var o = Array.prototype.slice.call(arguments, 1),
                u = n.length,
                f = 0;
              f < u;
              ++f
            )
              n[f].apply(this, o);
      }),
      (e.dispose = function () {
        this.listeners = {};
      }),
      (e.pipe = function (s) {
        this.on("data", function (n) {
          s.push(n);
        });
      }),
      t
    );
  })(),
  zb = function (e) {
    return C.atob ? C.atob(e) : Buffer.from(e, "base64").toString("binary");
  };
function Fp(t) {
  for (var e = zb(t), i = new Uint8Array(e.length), s = 0; s < e.length; s++)
    i[s] = e.charCodeAt(s);
  return i;
}
/*!@name m3u8-parser @version 6.0.0 @license Apache-2.0*/ class Gb extends Ku {
  constructor() {
    super(), (this.buffer = "");
  }
  push(e) {
    let i;
    for (
      this.buffer += e,
        i = this.buffer.indexOf(`
`);
      i > -1;
      i = this.buffer.indexOf(`
`)
    )
      this.trigger("data", this.buffer.substring(0, i)),
        (this.buffer = this.buffer.substring(i + 1));
  }
}
const Kb = String.fromCharCode(9),
  ml = function (t) {
    const e = /([0-9.]*)?@?([0-9.]*)?/.exec(t || ""),
      i = {};
    return (
      e[1] && (i.length = parseInt(e[1], 10)),
      e[2] && (i.offset = parseInt(e[2], 10)),
      i
    );
  },
  Xb = function () {
    const t = "[^=]*",
      e = '"[^"]*"|[^,]*',
      i = "(?:" + t + ")=(?:" + e + ")";
    return new RegExp("(?:^|,)(" + i + ")");
  },
  qt = function (t) {
    const e = {};
    if (!t) return e;
    const i = t.split(Xb());
    let s = i.length,
      n;
    for (; s--; )
      i[s] !== "" &&
        ((n = /([^=]*)=(.*)/.exec(i[s]).slice(1)),
        (n[0] = n[0].replace(/^\s+|\s+$/g, "")),
        (n[1] = n[1].replace(/^\s+|\s+$/g, "")),
        (n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1")),
        (e[n[0]] = n[1]));
    return e;
  };
class Yb extends Ku {
  constructor() {
    super(), (this.customParsers = []), (this.tagMappers = []);
  }
  push(e) {
    let i, s;
    if (((e = e.trim()), e.length === 0)) return;
    if (e[0] !== "#") {
      this.trigger("data", { type: "uri", uri: e });
      return;
    }
    this.tagMappers
      .reduce(
        (r, a) => {
          const o = a(e);
          return o === e ? r : r.concat([o]);
        },
        [e]
      )
      .forEach((r) => {
        for (let a = 0; a < this.customParsers.length; a++)
          if (this.customParsers[a].call(this, r)) return;
        if (r.indexOf("#EXT") !== 0) {
          this.trigger("data", { type: "comment", text: r.slice(1) });
          return;
        }
        if (((r = r.replace("\r", "")), (i = /^#EXTM3U/.exec(r)), i)) {
          this.trigger("data", { type: "tag", tagType: "m3u" });
          return;
        }
        if (((i = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "inf" }),
            i[1] && (s.duration = parseFloat(i[1])),
            i[2] && (s.title = i[2]),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(r)), i)) {
          (s = { type: "tag", tagType: "targetduration" }),
            i[1] && (s.duration = parseInt(i[1], 10)),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-VERSION:([0-9.]*)?/.exec(r)), i)) {
          (s = { type: "tag", tagType: "version" }),
            i[1] && (s.version = parseInt(i[1], 10)),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(r)), i)) {
          (s = { type: "tag", tagType: "media-sequence" }),
            i[1] && (s.number = parseInt(i[1], 10)),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(r)), i)) {
          (s = { type: "tag", tagType: "discontinuity-sequence" }),
            i[1] && (s.number = parseInt(i[1], 10)),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "playlist-type" }),
            i[1] && (s.playlistType = i[1]),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-BYTERANGE:(.*)?$/.exec(r)), i)) {
          (s = Di(ml(i[1]), { type: "tag", tagType: "byterange" })),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(r)), i)) {
          (s = { type: "tag", tagType: "allow-cache" }),
            i[1] && (s.allowed = !/NO/.test(i[1])),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-MAP:(.*)$/.exec(r)), i)) {
          if (((s = { type: "tag", tagType: "map" }), i[1])) {
            const a = qt(i[1]);
            a.URI && (s.uri = a.URI),
              a.BYTERANGE && (s.byterange = ml(a.BYTERANGE));
          }
          this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-STREAM-INF:(.*)$/.exec(r)), i)) {
          if (((s = { type: "tag", tagType: "stream-inf" }), i[1])) {
            if (((s.attributes = qt(i[1])), s.attributes.RESOLUTION)) {
              const a = s.attributes.RESOLUTION.split("x"),
                o = {};
              a[0] && (o.width = parseInt(a[0], 10)),
                a[1] && (o.height = parseInt(a[1], 10)),
                (s.attributes.RESOLUTION = o);
            }
            s.attributes.BANDWIDTH &&
              (s.attributes.BANDWIDTH = parseInt(s.attributes.BANDWIDTH, 10)),
              s.attributes["FRAME-RATE"] &&
                (s.attributes["FRAME-RATE"] = parseFloat(
                  s.attributes["FRAME-RATE"]
                )),
              s.attributes["PROGRAM-ID"] &&
                (s.attributes["PROGRAM-ID"] = parseInt(
                  s.attributes["PROGRAM-ID"],
                  10
                ));
          }
          this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-MEDIA:(.*)$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "media" }),
            i[1] && (s.attributes = qt(i[1])),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-ENDLIST/.exec(r)), i)) {
          this.trigger("data", { type: "tag", tagType: "endlist" });
          return;
        }
        if (((i = /^#EXT-X-DISCONTINUITY/.exec(r)), i)) {
          this.trigger("data", { type: "tag", tagType: "discontinuity" });
          return;
        }
        if (((i = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "program-date-time" }),
            i[1] &&
              ((s.dateTimeString = i[1]), (s.dateTimeObject = new Date(i[1]))),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-KEY:(.*)$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "key" }),
            i[1] &&
              ((s.attributes = qt(i[1])),
              s.attributes.IV &&
                (s.attributes.IV.substring(0, 2).toLowerCase() === "0x" &&
                  (s.attributes.IV = s.attributes.IV.substring(2)),
                (s.attributes.IV = s.attributes.IV.match(/.{8}/g)),
                (s.attributes.IV[0] = parseInt(s.attributes.IV[0], 16)),
                (s.attributes.IV[1] = parseInt(s.attributes.IV[1], 16)),
                (s.attributes.IV[2] = parseInt(s.attributes.IV[2], 16)),
                (s.attributes.IV[3] = parseInt(s.attributes.IV[3], 16)),
                (s.attributes.IV = new Uint32Array(s.attributes.IV)))),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-START:(.*)$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "start" }),
            i[1] &&
              ((s.attributes = qt(i[1])),
              (s.attributes["TIME-OFFSET"] = parseFloat(
                s.attributes["TIME-OFFSET"]
              )),
              (s.attributes.PRECISE = /YES/.test(s.attributes.PRECISE))),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "cue-out-cont" }),
            i[1] ? (s.data = i[1]) : (s.data = ""),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-CUE-OUT:(.*)?$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "cue-out" }),
            i[1] ? (s.data = i[1]) : (s.data = ""),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-CUE-IN:(.*)?$/.exec(r)), i)) {
          (s = { type: "tag", tagType: "cue-in" }),
            i[1] ? (s.data = i[1]) : (s.data = ""),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-SKIP:(.*)$/.exec(r)), i && i[1])) {
          (s = { type: "tag", tagType: "skip" }),
            (s.attributes = qt(i[1])),
            s.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
              (s.attributes["SKIPPED-SEGMENTS"] = parseInt(
                s.attributes["SKIPPED-SEGMENTS"],
                10
              )),
            s.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
              (s.attributes["RECENTLY-REMOVED-DATERANGES"] =
                s.attributes["RECENTLY-REMOVED-DATERANGES"].split(Kb)),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-PART:(.*)$/.exec(r)), i && i[1])) {
          (s = { type: "tag", tagType: "part" }),
            (s.attributes = qt(i[1])),
            ["DURATION"].forEach(function (a) {
              s.attributes.hasOwnProperty(a) &&
                (s.attributes[a] = parseFloat(s.attributes[a]));
            }),
            ["INDEPENDENT", "GAP"].forEach(function (a) {
              s.attributes.hasOwnProperty(a) &&
                (s.attributes[a] = /YES/.test(s.attributes[a]));
            }),
            s.attributes.hasOwnProperty("BYTERANGE") &&
              (s.attributes.byterange = ml(s.attributes.BYTERANGE)),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(r)), i && i[1])) {
          (s = { type: "tag", tagType: "server-control" }),
            (s.attributes = qt(i[1])),
            ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (
              a
            ) {
              s.attributes.hasOwnProperty(a) &&
                (s.attributes[a] = parseFloat(s.attributes[a]));
            }),
            ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (a) {
              s.attributes.hasOwnProperty(a) &&
                (s.attributes[a] = /YES/.test(s.attributes[a]));
            }),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-PART-INF:(.*)$/.exec(r)), i && i[1])) {
          (s = { type: "tag", tagType: "part-inf" }),
            (s.attributes = qt(i[1])),
            ["PART-TARGET"].forEach(function (a) {
              s.attributes.hasOwnProperty(a) &&
                (s.attributes[a] = parseFloat(s.attributes[a]));
            }),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(r)), i && i[1])) {
          (s = { type: "tag", tagType: "preload-hint" }),
            (s.attributes = qt(i[1])),
            ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (a) {
              if (s.attributes.hasOwnProperty(a)) {
                s.attributes[a] = parseInt(s.attributes[a], 10);
                const o = a === "BYTERANGE-LENGTH" ? "length" : "offset";
                (s.attributes.byterange = s.attributes.byterange || {}),
                  (s.attributes.byterange[o] = s.attributes[a]),
                  delete s.attributes[a];
              }
            }),
            this.trigger("data", s);
          return;
        }
        if (((i = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(r)), i && i[1])) {
          (s = { type: "tag", tagType: "rendition-report" }),
            (s.attributes = qt(i[1])),
            ["LAST-MSN", "LAST-PART"].forEach(function (a) {
              s.attributes.hasOwnProperty(a) &&
                (s.attributes[a] = parseInt(s.attributes[a], 10));
            }),
            this.trigger("data", s);
          return;
        }
        this.trigger("data", { type: "tag", data: r.slice(4) });
      });
  }
  addParser({ expression: e, customType: i, dataParser: s, segment: n }) {
    typeof s != "function" && (s = (r) => r),
      this.customParsers.push((r) => {
        if (e.exec(r))
          return (
            this.trigger("data", {
              type: "custom",
              data: s(r),
              customType: i,
              segment: n,
            }),
            !0
          );
      });
  }
  addTagMapper({ expression: e, map: i }) {
    const s = (n) => (e.test(n) ? i(n) : n);
    this.tagMappers.push(s);
  }
}
const Qb = (t) => t.toLowerCase().replace(/-(\w)/g, (e) => e[1].toUpperCase()),
  ks = function (t) {
    const e = {};
    return (
      Object.keys(t).forEach(function (i) {
        e[Qb(i)] = t[i];
      }),
      e
    );
  },
  gl = function (t) {
    const { serverControl: e, targetDuration: i, partTargetDuration: s } = t;
    if (!e) return;
    const n = "#EXT-X-SERVER-CONTROL",
      r = "holdBack",
      a = "partHoldBack",
      o = i && i * 3,
      u = s && s * 2;
    i &&
      !e.hasOwnProperty(r) &&
      ((e[r] = o),
      this.trigger("info", {
        message: `${n} defaulting HOLD-BACK to targetDuration * 3 (${o}).`,
      })),
      o &&
        e[r] < o &&
        (this.trigger("warn", {
          message: `${n} clamping HOLD-BACK (${e[r]}) to targetDuration * 3 (${o})`,
        }),
        (e[r] = o)),
      s &&
        !e.hasOwnProperty(a) &&
        ((e[a] = s * 3),
        this.trigger("info", {
          message: `${n} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${e[a]}).`,
        })),
      s &&
        e[a] < u &&
        (this.trigger("warn", {
          message: `${n} clamping PART-HOLD-BACK (${e[a]}) to partTargetDuration * 2 (${u}).`,
        }),
        (e[a] = u));
  };
class Jb extends Ku {
  constructor() {
    super(),
      (this.lineStream = new Gb()),
      (this.parseStream = new Yb()),
      this.lineStream.pipe(this.parseStream);
    const e = this,
      i = [];
    let s = {},
      n,
      r,
      a = !1;
    const o = function () {},
      u = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
      f = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
    let p = 0;
    this.manifest = { allowCache: !0, discontinuityStarts: [], segments: [] };
    let _ = 0,
      v = 0;
    this.on("end", () => {
      s.uri ||
        (!s.parts && !s.preloadHints) ||
        (!s.map && n && (s.map = n),
        !s.key && r && (s.key = r),
        !s.timeline && typeof p == "number" && (s.timeline = p),
        (this.manifest.preloadSegment = s));
    }),
      this.parseStream.on("data", function (y) {
        let A, S;
        ({
          tag() {
            (
              ({
                version() {
                  y.version && (this.manifest.version = y.version);
                },
                "allow-cache"() {
                  (this.manifest.allowCache = y.allowed),
                    "allowed" in y ||
                      (this.trigger("info", {
                        message: "defaulting allowCache to YES",
                      }),
                      (this.manifest.allowCache = !0));
                },
                byterange() {
                  const E = {};
                  "length" in y &&
                    ((s.byterange = E),
                    (E.length = y.length),
                    "offset" in y || (y.offset = _)),
                    "offset" in y && ((s.byterange = E), (E.offset = y.offset)),
                    (_ = E.offset + E.length);
                },
                endlist() {
                  this.manifest.endList = !0;
                },
                inf() {
                  "mediaSequence" in this.manifest ||
                    ((this.manifest.mediaSequence = 0),
                    this.trigger("info", {
                      message: "defaulting media sequence to zero",
                    })),
                    "discontinuitySequence" in this.manifest ||
                      ((this.manifest.discontinuitySequence = 0),
                      this.trigger("info", {
                        message: "defaulting discontinuity sequence to zero",
                      })),
                    y.duration > 0 && (s.duration = y.duration),
                    y.duration === 0 &&
                      ((s.duration = 0.01),
                      this.trigger("info", {
                        message:
                          "updating zero segment duration to a small value",
                      })),
                    (this.manifest.segments = i);
                },
                key() {
                  if (!y.attributes) {
                    this.trigger("warn", {
                      message:
                        "ignoring key declaration without attribute list",
                    });
                    return;
                  }
                  if (y.attributes.METHOD === "NONE") {
                    r = null;
                    return;
                  }
                  if (!y.attributes.URI) {
                    this.trigger("warn", {
                      message: "ignoring key declaration without URI",
                    });
                    return;
                  }
                  if (
                    y.attributes.KEYFORMAT === "com.apple.streamingkeydelivery"
                  ) {
                    (this.manifest.contentProtection =
                      this.manifest.contentProtection || {}),
                      (this.manifest.contentProtection["com.apple.fps.1_0"] = {
                        attributes: y.attributes,
                      });
                    return;
                  }
                  if (y.attributes.KEYFORMAT === "com.microsoft.playready") {
                    (this.manifest.contentProtection =
                      this.manifest.contentProtection || {}),
                      (this.manifest.contentProtection[
                        "com.microsoft.playready"
                      ] = { uri: y.attributes.URI });
                    return;
                  }
                  if (y.attributes.KEYFORMAT === f) {
                    if (
                      [
                        "SAMPLE-AES",
                        "SAMPLE-AES-CTR",
                        "SAMPLE-AES-CENC",
                      ].indexOf(y.attributes.METHOD) === -1
                    ) {
                      this.trigger("warn", {
                        message: "invalid key method provided for Widevine",
                      });
                      return;
                    }
                    if (
                      (y.attributes.METHOD === "SAMPLE-AES-CENC" &&
                        this.trigger("warn", {
                          message:
                            "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                        }),
                      y.attributes.URI.substring(0, 23) !==
                        "data:text/plain;base64,")
                    ) {
                      this.trigger("warn", {
                        message: "invalid key URI provided for Widevine",
                      });
                      return;
                    }
                    if (
                      !(
                        y.attributes.KEYID &&
                        y.attributes.KEYID.substring(0, 2) === "0x"
                      )
                    ) {
                      this.trigger("warn", {
                        message: "invalid key ID provided for Widevine",
                      });
                      return;
                    }
                    (this.manifest.contentProtection =
                      this.manifest.contentProtection || {}),
                      (this.manifest.contentProtection["com.widevine.alpha"] = {
                        attributes: {
                          schemeIdUri: y.attributes.KEYFORMAT,
                          keyId: y.attributes.KEYID.substring(2),
                        },
                        pssh: Fp(y.attributes.URI.split(",")[1]),
                      });
                    return;
                  }
                  y.attributes.METHOD ||
                    this.trigger("warn", {
                      message: "defaulting key method to AES-128",
                    }),
                    (r = {
                      method: y.attributes.METHOD || "AES-128",
                      uri: y.attributes.URI,
                    }),
                    typeof y.attributes.IV < "u" && (r.iv = y.attributes.IV);
                },
                "media-sequence"() {
                  if (!isFinite(y.number)) {
                    this.trigger("warn", {
                      message: "ignoring invalid media sequence: " + y.number,
                    });
                    return;
                  }
                  this.manifest.mediaSequence = y.number;
                },
                "discontinuity-sequence"() {
                  if (!isFinite(y.number)) {
                    this.trigger("warn", {
                      message:
                        "ignoring invalid discontinuity sequence: " + y.number,
                    });
                    return;
                  }
                  (this.manifest.discontinuitySequence = y.number),
                    (p = y.number);
                },
                "playlist-type"() {
                  if (!/VOD|EVENT/.test(y.playlistType)) {
                    this.trigger("warn", {
                      message: "ignoring unknown playlist type: " + y.playlist,
                    });
                    return;
                  }
                  this.manifest.playlistType = y.playlistType;
                },
                map() {
                  (n = {}),
                    y.uri && (n.uri = y.uri),
                    y.byterange && (n.byterange = y.byterange),
                    r && (n.key = r);
                },
                "stream-inf"() {
                  if (
                    ((this.manifest.playlists = i),
                    (this.manifest.mediaGroups =
                      this.manifest.mediaGroups || u),
                    !y.attributes)
                  ) {
                    this.trigger("warn", {
                      message: "ignoring empty stream-inf attributes",
                    });
                    return;
                  }
                  s.attributes || (s.attributes = {}),
                    Di(s.attributes, y.attributes);
                },
                media() {
                  if (
                    ((this.manifest.mediaGroups =
                      this.manifest.mediaGroups || u),
                    !(
                      y.attributes &&
                      y.attributes.TYPE &&
                      y.attributes["GROUP-ID"] &&
                      y.attributes.NAME
                    ))
                  ) {
                    this.trigger("warn", {
                      message: "ignoring incomplete or missing media group",
                    });
                    return;
                  }
                  const E = this.manifest.mediaGroups[y.attributes.TYPE];
                  (E[y.attributes["GROUP-ID"]] =
                    E[y.attributes["GROUP-ID"]] || {}),
                    (A = E[y.attributes["GROUP-ID"]]),
                    (S = { default: /yes/i.test(y.attributes.DEFAULT) }),
                    S.default
                      ? (S.autoselect = !0)
                      : (S.autoselect = /yes/i.test(y.attributes.AUTOSELECT)),
                    y.attributes.LANGUAGE &&
                      (S.language = y.attributes.LANGUAGE),
                    y.attributes.URI && (S.uri = y.attributes.URI),
                    y.attributes["INSTREAM-ID"] &&
                      (S.instreamId = y.attributes["INSTREAM-ID"]),
                    y.attributes.CHARACTERISTICS &&
                      (S.characteristics = y.attributes.CHARACTERISTICS),
                    y.attributes.FORCED &&
                      (S.forced = /yes/i.test(y.attributes.FORCED)),
                    (A[y.attributes.NAME] = S);
                },
                discontinuity() {
                  (p += 1),
                    (s.discontinuity = !0),
                    this.manifest.discontinuityStarts.push(i.length);
                },
                "program-date-time"() {
                  typeof this.manifest.dateTimeString > "u" &&
                    ((this.manifest.dateTimeString = y.dateTimeString),
                    (this.manifest.dateTimeObject = y.dateTimeObject)),
                    (s.dateTimeString = y.dateTimeString),
                    (s.dateTimeObject = y.dateTimeObject);
                },
                targetduration() {
                  if (!isFinite(y.duration) || y.duration < 0) {
                    this.trigger("warn", {
                      message:
                        "ignoring invalid target duration: " + y.duration,
                    });
                    return;
                  }
                  (this.manifest.targetDuration = y.duration),
                    gl.call(this, this.manifest);
                },
                start() {
                  if (!y.attributes || isNaN(y.attributes["TIME-OFFSET"])) {
                    this.trigger("warn", {
                      message:
                        "ignoring start declaration without appropriate attribute list",
                    });
                    return;
                  }
                  this.manifest.start = {
                    timeOffset: y.attributes["TIME-OFFSET"],
                    precise: y.attributes.PRECISE,
                  };
                },
                "cue-out"() {
                  s.cueOut = y.data;
                },
                "cue-out-cont"() {
                  s.cueOutCont = y.data;
                },
                "cue-in"() {
                  s.cueIn = y.data;
                },
                skip() {
                  (this.manifest.skip = ks(y.attributes)),
                    this.warnOnMissingAttributes_("#EXT-X-SKIP", y.attributes, [
                      "SKIPPED-SEGMENTS",
                    ]);
                },
                part() {
                  a = !0;
                  const E = this.manifest.segments.length,
                    k = ks(y.attributes);
                  (s.parts = s.parts || []),
                    s.parts.push(k),
                    k.byterange &&
                      (k.byterange.hasOwnProperty("offset") ||
                        (k.byterange.offset = v),
                      (v = k.byterange.offset + k.byterange.length));
                  const D = s.parts.length - 1;
                  this.warnOnMissingAttributes_(
                    `#EXT-X-PART #${D} for segment #${E}`,
                    y.attributes,
                    ["URI", "DURATION"]
                  ),
                    this.manifest.renditionReports &&
                      this.manifest.renditionReports.forEach((R, N) => {
                        R.hasOwnProperty("lastPart") ||
                          this.trigger("warn", {
                            message: `#EXT-X-RENDITION-REPORT #${N} lacks required attribute(s): LAST-PART`,
                          });
                      });
                },
                "server-control"() {
                  const E = (this.manifest.serverControl = ks(y.attributes));
                  E.hasOwnProperty("canBlockReload") ||
                    ((E.canBlockReload = !1),
                    this.trigger("info", {
                      message:
                        "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                    })),
                    gl.call(this, this.manifest),
                    E.canSkipDateranges &&
                      !E.hasOwnProperty("canSkipUntil") &&
                      this.trigger("warn", {
                        message:
                          "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                      });
                },
                "preload-hint"() {
                  const E = this.manifest.segments.length,
                    k = ks(y.attributes),
                    D = k.type && k.type === "PART";
                  (s.preloadHints = s.preloadHints || []),
                    s.preloadHints.push(k),
                    k.byterange &&
                      (k.byterange.hasOwnProperty("offset") ||
                        ((k.byterange.offset = D ? v : 0),
                        D && (v = k.byterange.offset + k.byterange.length)));
                  const R = s.preloadHints.length - 1;
                  if (
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PRELOAD-HINT #${R} for segment #${E}`,
                      y.attributes,
                      ["TYPE", "URI"]
                    ),
                    !!k.type)
                  )
                    for (let N = 0; N < s.preloadHints.length - 1; N++) {
                      const L = s.preloadHints[N];
                      L.type &&
                        L.type === k.type &&
                        this.trigger("warn", {
                          message: `#EXT-X-PRELOAD-HINT #${R} for segment #${E} has the same TYPE ${k.type} as preload hint #${N}`,
                        });
                    }
                },
                "rendition-report"() {
                  const E = ks(y.attributes);
                  (this.manifest.renditionReports =
                    this.manifest.renditionReports || []),
                    this.manifest.renditionReports.push(E);
                  const k = this.manifest.renditionReports.length - 1,
                    D = ["LAST-MSN", "URI"];
                  a && D.push("LAST-PART"),
                    this.warnOnMissingAttributes_(
                      `#EXT-X-RENDITION-REPORT #${k}`,
                      y.attributes,
                      D
                    );
                },
                "part-inf"() {
                  (this.manifest.partInf = ks(y.attributes)),
                    this.warnOnMissingAttributes_(
                      "#EXT-X-PART-INF",
                      y.attributes,
                      ["PART-TARGET"]
                    ),
                    this.manifest.partInf.partTarget &&
                      (this.manifest.partTargetDuration =
                        this.manifest.partInf.partTarget),
                    gl.call(this, this.manifest);
                },
              })[y.tagType] || o
            ).call(e);
          },
          uri() {
            (s.uri = y.uri),
              i.push(s),
              this.manifest.targetDuration &&
                !("duration" in s) &&
                (this.trigger("warn", {
                  message: "defaulting segment duration to the target duration",
                }),
                (s.duration = this.manifest.targetDuration)),
              r && (s.key = r),
              (s.timeline = p),
              n && (s.map = n),
              (v = 0),
              (s = {});
          },
          comment() {},
          custom() {
            y.segment
              ? ((s.custom = s.custom || {}), (s.custom[y.customType] = y.data))
              : ((this.manifest.custom = this.manifest.custom || {}),
                (this.manifest.custom[y.customType] = y.data));
          },
        })[y.type].call(e);
      });
  }
  warnOnMissingAttributes_(e, i, s) {
    const n = [];
    s.forEach(function (r) {
      i.hasOwnProperty(r) || n.push(r);
    }),
      n.length &&
        this.trigger("warn", {
          message: `${e} lacks required attribute(s): ${n.join(", ")}`,
        });
  }
  push(e) {
    this.lineStream.push(e);
  }
  end() {
    this.lineStream.push(`
`),
      this.trigger("end");
  }
  addParser(e) {
    this.parseStream.addParser(e);
  }
  addTagMapper(e) {
    this.parseStream.addTagMapper(e);
  }
}
var _s = {
    mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
    webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
    ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
    video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
    audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,
    text: /^(stpp.ttml.im1t)/,
    muxerVideo: /^(avc0?1)/,
    muxerAudio: /^(mp4a)/,
    muxerText: /a^/,
  },
  Zb = ["video", "audio", "text"],
  yh = ["Video", "Audio", "Text"],
  Bp = function (e) {
    return (
      e &&
      e.replace(/avc1\.(\d+)\.(\d+)/i, function (i, s, n) {
        var r = ("00" + Number(s).toString(16)).slice(-2),
          a = ("00" + Number(n).toString(16)).slice(-2);
        return "avc1." + r + "00" + a;
      })
    );
  },
  ni = function (e) {
    e === void 0 && (e = "");
    var i = e.split(","),
      s = [];
    return (
      i.forEach(function (n) {
        n = n.trim();
        var r;
        Zb.forEach(function (a) {
          var o = _s[a].exec(n.toLowerCase());
          if (!(!o || o.length <= 1)) {
            r = a;
            var u = n.substring(0, o[1].length),
              f = n.replace(u, "");
            s.push({ type: u, details: f, mediaType: a });
          }
        }),
          r || s.push({ type: n, details: "", mediaType: "unknown" });
      }),
      s
    );
  },
  ex = function (e, i) {
    if (!e.mediaGroups.AUDIO || !i) return null;
    var s = e.mediaGroups.AUDIO[i];
    if (!s) return null;
    for (var n in s) {
      var r = s[n];
      if (r.default && r.playlists) return ni(r.playlists[0].attributes.CODECS);
    }
    return null;
  },
  $p = function (e) {
    return e === void 0 && (e = ""), _s.audio.test(e.trim().toLowerCase());
  },
  tx = function (e) {
    return e === void 0 && (e = ""), _s.text.test(e.trim().toLowerCase());
  },
  mr = function (e) {
    if (!(!e || typeof e != "string")) {
      var i = e
          .toLowerCase()
          .split(",")
          .map(function (r) {
            return Bp(r.trim());
          }),
        s = "video";
      i.length === 1 && $p(i[0])
        ? (s = "audio")
        : i.length === 1 && tx(i[0]) && (s = "application");
      var n = "mp4";
      return (
        i.every(function (r) {
          return _s.mp4.test(r);
        })
          ? (n = "mp4")
          : i.every(function (r) {
              return _s.webm.test(r);
            })
          ? (n = "webm")
          : i.every(function (r) {
              return _s.ogg.test(r);
            }) && (n = "ogg"),
        s + "/" + n + ';codecs="' + e + '"'
      );
    }
  },
  ka = function (e) {
    return (
      e === void 0 && (e = ""),
      (C.MediaSource &&
        C.MediaSource.isTypeSupported &&
        C.MediaSource.isTypeSupported(mr(e))) ||
        !1
    );
  },
  _l = function (e) {
    return (
      e === void 0 && (e = ""),
      e
        .toLowerCase()
        .split(",")
        .every(function (i) {
          i = i.trim();
          for (var s = 0; s < yh.length; s++) {
            var n = yh[s];
            if (_s["muxer" + n].test(i)) return !0;
          }
          return !1;
        })
    );
  },
  vh = "mp4a.40.2",
  ix = "avc1.4d400d",
  sx = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,
  nx = /^application\/dash\+xml/i,
  jp = function (e) {
    return sx.test(e)
      ? "hls"
      : nx.test(e)
      ? "dash"
      : e === "application/vnd.videojs.vhs+json"
      ? "vhs-json"
      : null;
  },
  rx = function (e) {
    return e.toString(2).length;
  },
  ax = function (e) {
    return Math.ceil(rx(e) / 8);
  },
  Hp = function (e) {
    return ArrayBuffer.isView === "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer;
  },
  ox = function (e) {
    return Hp(e);
  },
  se = function (e) {
    return e instanceof Uint8Array
      ? e
      : (!Array.isArray(e) &&
          !ox(e) &&
          !(e instanceof ArrayBuffer) &&
          (typeof e != "number" || (typeof e == "number" && e !== e)
            ? (e = 0)
            : (e = [e])),
        new Uint8Array(
          (e && e.buffer) || e,
          (e && e.byteOffset) || 0,
          (e && e.byteLength) || 0
        ));
  },
  Ze = C.BigInt || Number,
  Jl = [
    Ze("0x1"),
    Ze("0x100"),
    Ze("0x10000"),
    Ze("0x1000000"),
    Ze("0x100000000"),
    Ze("0x10000000000"),
    Ze("0x1000000000000"),
    Ze("0x100000000000000"),
    Ze("0x10000000000000000"),
  ];
(function () {
  var t = new Uint16Array([65484]),
    e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  return e[0] === 255 ? "big" : e[0] === 204 ? "little" : "unknown";
})();
var lx = function (e, i) {
    var s = i === void 0 ? {} : i,
      n = s.signed,
      r = n === void 0 ? !1 : n,
      a = s.le,
      o = a === void 0 ? !1 : a;
    e = se(e);
    var u = o ? "reduce" : "reduceRight",
      f = e[u] ? e[u] : Array.prototype[u],
      p = f.call(
        e,
        function (v, y, A) {
          var S = o ? A : Math.abs(A + 1 - e.length);
          return v + Ze(y) * Jl[S];
        },
        Ze(0)
      );
    if (r) {
      var _ = Jl[e.length] / Ze(2) - Ze(1);
      (p = Ze(p)), p > _ && ((p -= _), (p -= _), (p -= Ze(2)));
    }
    return Number(p);
  },
  ux = function (e, i) {
    var s = i === void 0 ? {} : i,
      n = s.le,
      r = n === void 0 ? !1 : n;
    ((typeof e != "bigint" && typeof e != "number") ||
      (typeof e == "number" && e !== e)) &&
      (e = 0),
      (e = Ze(e));
    for (
      var a = ax(e), o = new Uint8Array(new ArrayBuffer(a)), u = 0;
      u < a;
      u++
    ) {
      var f = r ? u : Math.abs(u + 1 - o.length);
      (o[f] = Number((e / Jl[u]) & Ze(255))),
        e < 0 && ((o[f] = Math.abs(~o[f])), (o[f] -= u === 0 ? 1 : 2));
    }
    return o;
  },
  Vp = function (e, i) {
    if (
      (typeof e != "string" &&
        e &&
        typeof e.toString == "function" &&
        (e = e.toString()),
      typeof e != "string")
    )
      return new Uint8Array();
    i || (e = unescape(encodeURIComponent(e)));
    for (var s = new Uint8Array(e.length), n = 0; n < e.length; n++)
      s[n] = e.charCodeAt(n);
    return s;
  },
  cx = function () {
    for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
      i[s] = arguments[s];
    if (
      ((i = i.filter(function (o) {
        return o && (o.byteLength || o.length) && typeof o != "string";
      })),
      i.length <= 1)
    )
      return se(i[0]);
    var n = i.reduce(function (o, u, f) {
        return o + (u.byteLength || u.length);
      }, 0),
      r = new Uint8Array(n),
      a = 0;
    return (
      i.forEach(function (o) {
        (o = se(o)), r.set(o, a), (a += o.byteLength);
      }),
      r
    );
  },
  Ue = function (e, i, s) {
    var n = s === void 0 ? {} : s,
      r = n.offset,
      a = r === void 0 ? 0 : r,
      o = n.mask,
      u = o === void 0 ? [] : o;
    (e = se(e)), (i = se(i));
    var f = i.every ? i.every : Array.prototype.every;
    return (
      i.length &&
      e.length - a >= i.length &&
      f.call(i, function (p, _) {
        var v = u[_] ? u[_] & e[a + _] : e[a + _];
        return p === v;
      })
    );
  },
  Th = "http://example.com",
  Xu = function (e, i) {
    if (/^[a-z]+:/i.test(i)) return i;
    /^data:/.test(e) && (e = (C.location && C.location.href) || "");
    var s = typeof C.URL == "function",
      n = /^\/\//.test(e),
      r = !C.location && !/\/\//i.test(e);
    if (
      (s
        ? (e = new C.URL(e, C.location || Th))
        : /\/\//i.test(e) ||
          (e = Ba.buildAbsoluteURL((C.location && C.location.href) || "", e)),
      s)
    ) {
      var a = new URL(i, e);
      return r
        ? a.href.slice(Th.length)
        : n
        ? a.href.slice(a.protocol.length)
        : a.href;
    }
    return Ba.buildAbsoluteURL(e, i);
  },
  dx = function (e, i, s) {
    i.forEach(function (n) {
      for (var r in e.mediaGroups[n])
        for (var a in e.mediaGroups[n][r]) {
          var o = e.mediaGroups[n][r][a];
          s(o, n, r, a);
        }
    });
  },
  Yi = {},
  Fi = {};
function hx(t, e, i) {
  if ((i === void 0 && (i = Array.prototype), t && typeof i.find == "function"))
    return i.find.call(t, e);
  for (var s = 0; s < t.length; s++)
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      var n = t[s];
      if (e.call(void 0, n, s, t)) return n;
    }
}
function Yu(t, e) {
  return (
    e === void 0 && (e = Object),
    e && typeof e.freeze == "function" ? e.freeze(t) : t
  );
}
function fx(t, e) {
  if (t === null || typeof t != "object")
    throw new TypeError("target is not an object");
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
  return t;
}
var Wp = Yu({
    HTML: "text/html",
    isHTML: function (t) {
      return t === Wp.HTML;
    },
    XML_APPLICATION: "application/xml",
    XML_TEXT: "text/xml",
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    XML_SVG_IMAGE: "image/svg+xml",
  }),
  qp = Yu({
    HTML: "http://www.w3.org/1999/xhtml",
    isHTML: function (t) {
      return t === qp.HTML;
    },
    SVG: "http://www.w3.org/2000/svg",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/",
  });
Fi.assign = fx;
Fi.find = hx;
Fi.freeze = Yu;
Fi.MIME_TYPE = Wp;
Fi.NAMESPACE = qp;
var zp = Fi,
  pi = zp.find,
  gr = zp.NAMESPACE;
function px(t) {
  return t !== "";
}
function mx(t) {
  return t ? t.split(/[\t\n\f\r ]+/).filter(px) : [];
}
function gx(t, e) {
  return t.hasOwnProperty(e) || (t[e] = !0), t;
}
function bh(t) {
  if (!t) return [];
  var e = mx(t);
  return Object.keys(e.reduce(gx, {}));
}
function _x(t) {
  return function (e) {
    return t && t.indexOf(e) !== -1;
  };
}
function Er(t, e) {
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
function It(t, e) {
  var i = t.prototype;
  if (!(i instanceof e)) {
    let n = function () {};
    var s = n;
    (n.prototype = e.prototype), (n = new n()), Er(i, n), (t.prototype = i = n);
  }
  i.constructor != t && (i.constructor = t);
}
var Ot = {},
  Jt = (Ot.ELEMENT_NODE = 1),
  nn = (Ot.ATTRIBUTE_NODE = 2),
  $a = (Ot.TEXT_NODE = 3),
  Gp = (Ot.CDATA_SECTION_NODE = 4),
  Kp = (Ot.ENTITY_REFERENCE_NODE = 5),
  yx = (Ot.ENTITY_NODE = 6),
  Xp = (Ot.PROCESSING_INSTRUCTION_NODE = 7),
  Yp = (Ot.COMMENT_NODE = 8),
  Qp = (Ot.DOCUMENT_NODE = 9),
  Jp = (Ot.DOCUMENT_TYPE_NODE = 10),
  Ri = (Ot.DOCUMENT_FRAGMENT_NODE = 11),
  vx = (Ot.NOTATION_NODE = 12),
  at = {},
  Je = {};
at.INDEX_SIZE_ERR = ((Je[1] = "Index size error"), 1);
at.DOMSTRING_SIZE_ERR = ((Je[2] = "DOMString size error"), 2);
var Et = (at.HIERARCHY_REQUEST_ERR = ((Je[3] = "Hierarchy request error"), 3));
at.WRONG_DOCUMENT_ERR = ((Je[4] = "Wrong document"), 4);
at.INVALID_CHARACTER_ERR = ((Je[5] = "Invalid character"), 5);
at.NO_DATA_ALLOWED_ERR = ((Je[6] = "No data allowed"), 6);
at.NO_MODIFICATION_ALLOWED_ERR = ((Je[7] = "No modification allowed"), 7);
var Zp = (at.NOT_FOUND_ERR = ((Je[8] = "Not found"), 8));
at.NOT_SUPPORTED_ERR = ((Je[9] = "Not supported"), 9);
var xh = (at.INUSE_ATTRIBUTE_ERR = ((Je[10] = "Attribute in use"), 10));
at.INVALID_STATE_ERR = ((Je[11] = "Invalid state"), 11);
at.SYNTAX_ERR = ((Je[12] = "Syntax error"), 12);
at.INVALID_MODIFICATION_ERR = ((Je[13] = "Invalid modification"), 13);
at.NAMESPACE_ERR = ((Je[14] = "Invalid namespace"), 14);
at.INVALID_ACCESS_ERR = ((Je[15] = "Invalid access"), 15);
function We(t, e) {
  if (e instanceof Error) var i = e;
  else
    (i = this),
      Error.call(this, Je[t]),
      (this.message = Je[t]),
      Error.captureStackTrace && Error.captureStackTrace(this, We);
  return (i.code = t), e && (this.message = this.message + ": " + e), i;
}
We.prototype = Error.prototype;
Er(at, We);
function Ii() {}
Ii.prototype = {
  length: 0,
  item: function (t) {
    return this[t] || null;
  },
  toString: function (t, e) {
    for (var i = [], s = 0; s < this.length; s++) Us(this[s], i, t, e);
    return i.join("");
  },
  filter: function (t) {
    return Array.prototype.filter.call(this, t);
  },
  indexOf: function (t) {
    return Array.prototype.indexOf.call(this, t);
  },
};
function rn(t, e) {
  (this._node = t), (this._refresh = e), Qu(this);
}
function Qu(t) {
  var e = t._node._inc || t._node.ownerDocument._inc;
  if (t._inc != e) {
    var i = t._refresh(t._node);
    dm(t, "length", i.length), Er(i, t), (t._inc = e);
  }
}
rn.prototype.item = function (t) {
  return Qu(this), this[t];
};
It(rn, Ii);
function ja() {}
function em(t, e) {
  for (var i = t.length; i--; ) if (t[i] === e) return i;
}
function Sh(t, e, i, s) {
  if ((s ? (e[em(e, s)] = i) : (e[e.length++] = i), t)) {
    i.ownerElement = t;
    var n = t.ownerDocument;
    n && (s && sm(n, t, s), Tx(n, t, i));
  }
}
function Eh(t, e, i) {
  var s = em(e, i);
  if (s >= 0) {
    for (var n = e.length - 1; s < n; ) e[s] = e[++s];
    if (((e.length = n), t)) {
      var r = t.ownerDocument;
      r && (sm(r, t, i), (i.ownerElement = null));
    }
  } else throw new We(Zp, new Error(t.tagName + "@" + i));
}
ja.prototype = {
  length: 0,
  item: Ii.prototype.item,
  getNamedItem: function (t) {
    for (var e = this.length; e--; ) {
      var i = this[e];
      if (i.nodeName == t) return i;
    }
  },
  setNamedItem: function (t) {
    var e = t.ownerElement;
    if (e && e != this._ownerElement) throw new We(xh);
    var i = this.getNamedItem(t.nodeName);
    return Sh(this._ownerElement, this, t, i), i;
  },
  setNamedItemNS: function (t) {
    var e = t.ownerElement,
      i;
    if (e && e != this._ownerElement) throw new We(xh);
    return (
      (i = this.getNamedItemNS(t.namespaceURI, t.localName)),
      Sh(this._ownerElement, this, t, i),
      i
    );
  },
  removeNamedItem: function (t) {
    var e = this.getNamedItem(t);
    return Eh(this._ownerElement, this, e), e;
  },
  removeNamedItemNS: function (t, e) {
    var i = this.getNamedItemNS(t, e);
    return Eh(this._ownerElement, this, i), i;
  },
  getNamedItemNS: function (t, e) {
    for (var i = this.length; i--; ) {
      var s = this[i];
      if (s.localName == e && s.namespaceURI == t) return s;
    }
    return null;
  },
};
function tm() {}
tm.prototype = {
  hasFeature: function (t, e) {
    return !0;
  },
  createDocument: function (t, e, i) {
    var s = new Cr();
    if (
      ((s.implementation = this),
      (s.childNodes = new Ii()),
      (s.doctype = i || null),
      i && s.appendChild(i),
      e)
    ) {
      var n = s.createElementNS(t, e);
      s.appendChild(n);
    }
    return s;
  },
  createDocumentType: function (t, e, i) {
    var s = new xo();
    return (
      (s.name = t),
      (s.nodeName = t),
      (s.publicId = e || ""),
      (s.systemId = i || ""),
      s
    );
  },
};
function ke() {}
ke.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  insertBefore: function (t, e) {
    return Ha(this, t, e);
  },
  replaceChild: function (t, e) {
    Ha(this, t, e, rm), e && this.removeChild(e);
  },
  removeChild: function (t) {
    return nm(this, t);
  },
  appendChild: function (t) {
    return this.insertBefore(t, null);
  },
  hasChildNodes: function () {
    return this.firstChild != null;
  },
  cloneNode: function (t) {
    return Zl(this.ownerDocument || this, this, t);
  },
  normalize: function () {
    for (var t = this.firstChild; t; ) {
      var e = t.nextSibling;
      e && e.nodeType == $a && t.nodeType == $a
        ? (this.removeChild(e), t.appendData(e.data))
        : (t.normalize(), (t = e));
    }
  },
  isSupported: function (t, e) {
    return this.ownerDocument.implementation.hasFeature(t, e);
  },
  hasAttributes: function () {
    return this.attributes.length > 0;
  },
  lookupPrefix: function (t) {
    for (var e = this; e; ) {
      var i = e._nsMap;
      if (i) {
        for (var s in i)
          if (Object.prototype.hasOwnProperty.call(i, s) && i[s] === t)
            return s;
      }
      e = e.nodeType == nn ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  lookupNamespaceURI: function (t) {
    for (var e = this; e; ) {
      var i = e._nsMap;
      if (i && Object.prototype.hasOwnProperty.call(i, t)) return i[t];
      e = e.nodeType == nn ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  isDefaultNamespace: function (t) {
    var e = this.lookupPrefix(t);
    return e == null;
  },
};
function im(t) {
  return (
    (t == "<" && "&lt;") ||
    (t == ">" && "&gt;") ||
    (t == "&" && "&amp;") ||
    (t == '"' && "&quot;") ||
    "&#" + t.charCodeAt() + ";"
  );
}
Er(Ot, ke);
Er(Ot, ke.prototype);
function _r(t, e) {
  if (e(t)) return !0;
  if ((t = t.firstChild))
    do if (_r(t, e)) return !0;
    while ((t = t.nextSibling));
}
function Cr() {
  this.ownerDocument = this;
}
function Tx(t, e, i) {
  t && t._inc++;
  var s = i.namespaceURI;
  s === gr.XMLNS && (e._nsMap[i.prefix ? i.localName : ""] = i.value);
}
function sm(t, e, i, s) {
  t && t._inc++;
  var n = i.namespaceURI;
  n === gr.XMLNS && delete e._nsMap[i.prefix ? i.localName : ""];
}
function Ju(t, e, i) {
  if (t && t._inc) {
    t._inc++;
    var s = e.childNodes;
    if (i) s[s.length++] = i;
    else {
      for (var n = e.firstChild, r = 0; n; ) (s[r++] = n), (n = n.nextSibling);
      (s.length = r), delete s[s.length];
    }
  }
}
function nm(t, e) {
  var i = e.previousSibling,
    s = e.nextSibling;
  return (
    i ? (i.nextSibling = s) : (t.firstChild = s),
    s ? (s.previousSibling = i) : (t.lastChild = i),
    (e.parentNode = null),
    (e.previousSibling = null),
    (e.nextSibling = null),
    Ju(t.ownerDocument, t),
    e
  );
}
function bx(t) {
  return (
    t &&
    (t.nodeType === ke.DOCUMENT_NODE ||
      t.nodeType === ke.DOCUMENT_FRAGMENT_NODE ||
      t.nodeType === ke.ELEMENT_NODE)
  );
}
function xx(t) {
  return (
    t &&
    (mi(t) ||
      Zu(t) ||
      Ni(t) ||
      t.nodeType === ke.DOCUMENT_FRAGMENT_NODE ||
      t.nodeType === ke.COMMENT_NODE ||
      t.nodeType === ke.PROCESSING_INSTRUCTION_NODE)
  );
}
function Ni(t) {
  return t && t.nodeType === ke.DOCUMENT_TYPE_NODE;
}
function mi(t) {
  return t && t.nodeType === ke.ELEMENT_NODE;
}
function Zu(t) {
  return t && t.nodeType === ke.TEXT_NODE;
}
function Ch(t, e) {
  var i = t.childNodes || [];
  if (pi(i, mi) || Ni(e)) return !1;
  var s = pi(i, Ni);
  return !(e && s && i.indexOf(s) > i.indexOf(e));
}
function wh(t, e) {
  var i = t.childNodes || [];
  function s(r) {
    return mi(r) && r !== e;
  }
  if (pi(i, s)) return !1;
  var n = pi(i, Ni);
  return !(e && n && i.indexOf(n) > i.indexOf(e));
}
function Sx(t, e, i) {
  if (!bx(t)) throw new We(Et, "Unexpected parent node type " + t.nodeType);
  if (i && i.parentNode !== t) throw new We(Zp, "child not in parent");
  if (!xx(e) || (Ni(e) && t.nodeType !== ke.DOCUMENT_NODE))
    throw new We(
      Et,
      "Unexpected node type " +
        e.nodeType +
        " for parent node type " +
        t.nodeType
    );
}
function Ex(t, e, i) {
  var s = t.childNodes || [],
    n = e.childNodes || [];
  if (e.nodeType === ke.DOCUMENT_FRAGMENT_NODE) {
    var r = n.filter(mi);
    if (r.length > 1 || pi(n, Zu))
      throw new We(Et, "More than one element or text in fragment");
    if (r.length === 1 && !Ch(t, i))
      throw new We(
        Et,
        "Element in fragment can not be inserted before doctype"
      );
  }
  if (mi(e) && !Ch(t, i))
    throw new We(Et, "Only one element can be added and only after doctype");
  if (Ni(e)) {
    if (pi(s, Ni)) throw new We(Et, "Only one doctype is allowed");
    var a = pi(s, mi);
    if (i && s.indexOf(a) < s.indexOf(i))
      throw new We(Et, "Doctype can only be inserted before an element");
    if (!i && a)
      throw new We(Et, "Doctype can not be appended since element is present");
  }
}
function rm(t, e, i) {
  var s = t.childNodes || [],
    n = e.childNodes || [];
  if (e.nodeType === ke.DOCUMENT_FRAGMENT_NODE) {
    var r = n.filter(mi);
    if (r.length > 1 || pi(n, Zu))
      throw new We(Et, "More than one element or text in fragment");
    if (r.length === 1 && !wh(t, i))
      throw new We(
        Et,
        "Element in fragment can not be inserted before doctype"
      );
  }
  if (mi(e) && !wh(t, i))
    throw new We(Et, "Only one element can be added and only after doctype");
  if (Ni(e)) {
    let u = function (f) {
      return Ni(f) && f !== i;
    };
    var o = u;
    if (pi(s, u)) throw new We(Et, "Only one doctype is allowed");
    var a = pi(s, mi);
    if (i && s.indexOf(a) < s.indexOf(i))
      throw new We(Et, "Doctype can only be inserted before an element");
  }
}
function Ha(t, e, i, s) {
  Sx(t, e, i), t.nodeType === ke.DOCUMENT_NODE && (s || Ex)(t, e, i);
  var n = e.parentNode;
  if ((n && n.removeChild(e), e.nodeType === Ri)) {
    var r = e.firstChild;
    if (r == null) return e;
    var a = e.lastChild;
  } else r = a = e;
  var o = i ? i.previousSibling : t.lastChild;
  (r.previousSibling = o),
    (a.nextSibling = i),
    o ? (o.nextSibling = r) : (t.firstChild = r),
    i == null ? (t.lastChild = a) : (i.previousSibling = a);
  do r.parentNode = t;
  while (r !== a && (r = r.nextSibling));
  return (
    Ju(t.ownerDocument || t, t),
    e.nodeType == Ri && (e.firstChild = e.lastChild = null),
    e
  );
}
function Cx(t, e) {
  return (
    e.parentNode && e.parentNode.removeChild(e),
    (e.parentNode = t),
    (e.previousSibling = t.lastChild),
    (e.nextSibling = null),
    e.previousSibling
      ? (e.previousSibling.nextSibling = e)
      : (t.firstChild = e),
    (t.lastChild = e),
    Ju(t.ownerDocument, t, e),
    e
  );
}
Cr.prototype = {
  nodeName: "#document",
  nodeType: Qp,
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function (t, e) {
    if (t.nodeType == Ri) {
      for (var i = t.firstChild; i; ) {
        var s = i.nextSibling;
        this.insertBefore(i, e), (i = s);
      }
      return t;
    }
    return (
      Ha(this, t, e),
      (t.ownerDocument = this),
      this.documentElement === null &&
        t.nodeType === Jt &&
        (this.documentElement = t),
      t
    );
  },
  removeChild: function (t) {
    return (
      this.documentElement == t && (this.documentElement = null), nm(this, t)
    );
  },
  replaceChild: function (t, e) {
    Ha(this, t, e, rm),
      (t.ownerDocument = this),
      e && this.removeChild(e),
      mi(t) && (this.documentElement = t);
  },
  importNode: function (t, e) {
    return cm(this, t, e);
  },
  getElementById: function (t) {
    var e = null;
    return (
      _r(this.documentElement, function (i) {
        if (i.nodeType == Jt && i.getAttribute("id") == t) return (e = i), !0;
      }),
      e
    );
  },
  getElementsByClassName: function (t) {
    var e = bh(t);
    return new rn(this, function (i) {
      var s = [];
      return (
        e.length > 0 &&
          _r(i.documentElement, function (n) {
            if (n !== i && n.nodeType === Jt) {
              var r = n.getAttribute("class");
              if (r) {
                var a = t === r;
                if (!a) {
                  var o = bh(r);
                  a = e.every(_x(o));
                }
                a && s.push(n);
              }
            }
          }),
        s
      );
    });
  },
  createElement: function (t) {
    var e = new Ts();
    (e.ownerDocument = this),
      (e.nodeName = t),
      (e.tagName = t),
      (e.localName = t),
      (e.childNodes = new Ii());
    var i = (e.attributes = new ja());
    return (i._ownerElement = e), e;
  },
  createDocumentFragment: function () {
    var t = new So();
    return (t.ownerDocument = this), (t.childNodes = new Ii()), t;
  },
  createTextNode: function (t) {
    var e = new ec();
    return (e.ownerDocument = this), e.appendData(t), e;
  },
  createComment: function (t) {
    var e = new tc();
    return (e.ownerDocument = this), e.appendData(t), e;
  },
  createCDATASection: function (t) {
    var e = new ic();
    return (e.ownerDocument = this), e.appendData(t), e;
  },
  createProcessingInstruction: function (t, e) {
    var i = new nc();
    return (
      (i.ownerDocument = this),
      (i.tagName = i.target = t),
      (i.nodeValue = i.data = e),
      i
    );
  },
  createAttribute: function (t) {
    var e = new Va();
    return (
      (e.ownerDocument = this),
      (e.name = t),
      (e.nodeName = t),
      (e.localName = t),
      (e.specified = !0),
      e
    );
  },
  createEntityReference: function (t) {
    var e = new sc();
    return (e.ownerDocument = this), (e.nodeName = t), e;
  },
  createElementNS: function (t, e) {
    var i = new Ts(),
      s = e.split(":"),
      n = (i.attributes = new ja());
    return (
      (i.childNodes = new Ii()),
      (i.ownerDocument = this),
      (i.nodeName = e),
      (i.tagName = e),
      (i.namespaceURI = t),
      s.length == 2
        ? ((i.prefix = s[0]), (i.localName = s[1]))
        : (i.localName = e),
      (n._ownerElement = i),
      i
    );
  },
  createAttributeNS: function (t, e) {
    var i = new Va(),
      s = e.split(":");
    return (
      (i.ownerDocument = this),
      (i.nodeName = e),
      (i.name = e),
      (i.namespaceURI = t),
      (i.specified = !0),
      s.length == 2
        ? ((i.prefix = s[0]), (i.localName = s[1]))
        : (i.localName = e),
      i
    );
  },
};
It(Cr, ke);
function Ts() {
  this._nsMap = {};
}
Ts.prototype = {
  nodeType: Jt,
  hasAttribute: function (t) {
    return this.getAttributeNode(t) != null;
  },
  getAttribute: function (t) {
    var e = this.getAttributeNode(t);
    return (e && e.value) || "";
  },
  getAttributeNode: function (t) {
    return this.attributes.getNamedItem(t);
  },
  setAttribute: function (t, e) {
    var i = this.ownerDocument.createAttribute(t);
    (i.value = i.nodeValue = "" + e), this.setAttributeNode(i);
  },
  removeAttribute: function (t) {
    var e = this.getAttributeNode(t);
    e && this.removeAttributeNode(e);
  },
  appendChild: function (t) {
    return t.nodeType === Ri ? this.insertBefore(t, null) : Cx(this, t);
  },
  setAttributeNode: function (t) {
    return this.attributes.setNamedItem(t);
  },
  setAttributeNodeNS: function (t) {
    return this.attributes.setNamedItemNS(t);
  },
  removeAttributeNode: function (t) {
    return this.attributes.removeNamedItem(t.nodeName);
  },
  removeAttributeNS: function (t, e) {
    var i = this.getAttributeNodeNS(t, e);
    i && this.removeAttributeNode(i);
  },
  hasAttributeNS: function (t, e) {
    return this.getAttributeNodeNS(t, e) != null;
  },
  getAttributeNS: function (t, e) {
    var i = this.getAttributeNodeNS(t, e);
    return (i && i.value) || "";
  },
  setAttributeNS: function (t, e, i) {
    var s = this.ownerDocument.createAttributeNS(t, e);
    (s.value = s.nodeValue = "" + i), this.setAttributeNode(s);
  },
  getAttributeNodeNS: function (t, e) {
    return this.attributes.getNamedItemNS(t, e);
  },
  getElementsByTagName: function (t) {
    return new rn(this, function (e) {
      var i = [];
      return (
        _r(e, function (s) {
          s !== e &&
            s.nodeType == Jt &&
            (t === "*" || s.tagName == t) &&
            i.push(s);
        }),
        i
      );
    });
  },
  getElementsByTagNameNS: function (t, e) {
    return new rn(this, function (i) {
      var s = [];
      return (
        _r(i, function (n) {
          n !== i &&
            n.nodeType === Jt &&
            (t === "*" || n.namespaceURI === t) &&
            (e === "*" || n.localName == e) &&
            s.push(n);
        }),
        s
      );
    });
  },
};
Cr.prototype.getElementsByTagName = Ts.prototype.getElementsByTagName;
Cr.prototype.getElementsByTagNameNS = Ts.prototype.getElementsByTagNameNS;
It(Ts, ke);
function Va() {}
Va.prototype.nodeType = nn;
It(Va, ke);
function wr() {}
wr.prototype = {
  data: "",
  substringData: function (t, e) {
    return this.data.substring(t, t + e);
  },
  appendData: function (t) {
    (t = this.data + t),
      (this.nodeValue = this.data = t),
      (this.length = t.length);
  },
  insertData: function (t, e) {
    this.replaceData(t, 0, e);
  },
  appendChild: function (t) {
    throw new Error(Je[Et]);
  },
  deleteData: function (t, e) {
    this.replaceData(t, e, "");
  },
  replaceData: function (t, e, i) {
    var s = this.data.substring(0, t),
      n = this.data.substring(t + e);
    (i = s + i + n), (this.nodeValue = this.data = i), (this.length = i.length);
  },
};
It(wr, ke);
function ec() {}
ec.prototype = {
  nodeName: "#text",
  nodeType: $a,
  splitText: function (t) {
    var e = this.data,
      i = e.substring(t);
    (e = e.substring(0, t)),
      (this.data = this.nodeValue = e),
      (this.length = e.length);
    var s = this.ownerDocument.createTextNode(i);
    return (
      this.parentNode && this.parentNode.insertBefore(s, this.nextSibling), s
    );
  },
};
It(ec, wr);
function tc() {}
tc.prototype = { nodeName: "#comment", nodeType: Yp };
It(tc, wr);
function ic() {}
ic.prototype = { nodeName: "#cdata-section", nodeType: Gp };
It(ic, wr);
function xo() {}
xo.prototype.nodeType = Jp;
It(xo, ke);
function am() {}
am.prototype.nodeType = vx;
It(am, ke);
function om() {}
om.prototype.nodeType = yx;
It(om, ke);
function sc() {}
sc.prototype.nodeType = Kp;
It(sc, ke);
function So() {}
So.prototype.nodeName = "#document-fragment";
So.prototype.nodeType = Ri;
It(So, ke);
function nc() {}
nc.prototype.nodeType = Xp;
It(nc, ke);
function lm() {}
lm.prototype.serializeToString = function (t, e, i) {
  return um.call(t, e, i);
};
ke.prototype.toString = um;
function um(t, e) {
  var i = [],
    s = (this.nodeType == 9 && this.documentElement) || this,
    n = s.prefix,
    r = s.namespaceURI;
  if (r && n == null) {
    var n = s.lookupPrefix(r);
    if (n == null) var a = [{ namespace: r, prefix: null }];
  }
  return Us(this, i, t, e, a), i.join("");
}
function Ah(t, e, i) {
  var s = t.prefix || "",
    n = t.namespaceURI;
  if (!n || (s === "xml" && n === gr.XML) || n === gr.XMLNS) return !1;
  for (var r = i.length; r--; ) {
    var a = i[r];
    if (a.prefix === s) return a.namespace !== n;
  }
  return !0;
}
function yl(t, e, i) {
  t.push(" ", e, '="', i.replace(/[<>&"\t\n\r]/g, im), '"');
}
function Us(t, e, i, s, n) {
  if ((n || (n = []), s))
    if (((t = s(t)), t)) {
      if (typeof t == "string") {
        e.push(t);
        return;
      }
    } else return;
  switch (t.nodeType) {
    case Jt:
      var r = t.attributes,
        a = r.length,
        k = t.firstChild,
        o = t.tagName;
      i = gr.isHTML(t.namespaceURI) || i;
      var u = o;
      if (!i && !t.prefix && t.namespaceURI) {
        for (var f, p = 0; p < r.length; p++)
          if (r.item(p).name === "xmlns") {
            f = r.item(p).value;
            break;
          }
        if (!f)
          for (var _ = n.length - 1; _ >= 0; _--) {
            var v = n[_];
            if (v.prefix === "" && v.namespace === t.namespaceURI) {
              f = v.namespace;
              break;
            }
          }
        if (f !== t.namespaceURI)
          for (var _ = n.length - 1; _ >= 0; _--) {
            var v = n[_];
            if (v.namespace === t.namespaceURI) {
              v.prefix && (u = v.prefix + ":" + o);
              break;
            }
          }
      }
      e.push("<", u);
      for (var y = 0; y < a; y++) {
        var A = r.item(y);
        A.prefix == "xmlns"
          ? n.push({ prefix: A.localName, namespace: A.value })
          : A.nodeName == "xmlns" && n.push({ prefix: "", namespace: A.value });
      }
      for (var y = 0; y < a; y++) {
        var A = r.item(y);
        if (Ah(A, i, n)) {
          var S = A.prefix || "",
            E = A.namespaceURI;
          yl(e, S ? "xmlns:" + S : "xmlns", E),
            n.push({ prefix: S, namespace: E });
        }
        Us(A, e, i, s, n);
      }
      if (o === u && Ah(t, i, n)) {
        var S = t.prefix || "",
          E = t.namespaceURI;
        yl(e, S ? "xmlns:" + S : "xmlns", E),
          n.push({ prefix: S, namespace: E });
      }
      if (k || (i && !/^(?:meta|link|img|br|hr|input)$/i.test(o))) {
        if ((e.push(">"), i && /^script$/i.test(o)))
          for (; k; )
            k.data ? e.push(k.data) : Us(k, e, i, s, n.slice()),
              (k = k.nextSibling);
        else for (; k; ) Us(k, e, i, s, n.slice()), (k = k.nextSibling);
        e.push("</", u, ">");
      } else e.push("/>");
      return;
    case Qp:
    case Ri:
      for (var k = t.firstChild; k; )
        Us(k, e, i, s, n.slice()), (k = k.nextSibling);
      return;
    case nn:
      return yl(e, t.name, t.value);
    case $a:
      return e.push(t.data.replace(/[<&>]/g, im));
    case Gp:
      return e.push("<![CDATA[", t.data, "]]>");
    case Yp:
      return e.push("<!--", t.data, "-->");
    case Jp:
      var D = t.publicId,
        R = t.systemId;
      if ((e.push("<!DOCTYPE ", t.name), D))
        e.push(" PUBLIC ", D), R && R != "." && e.push(" ", R), e.push(">");
      else if (R && R != ".") e.push(" SYSTEM ", R, ">");
      else {
        var N = t.internalSubset;
        N && e.push(" [", N, "]"), e.push(">");
      }
      return;
    case Xp:
      return e.push("<?", t.target, " ", t.data, "?>");
    case Kp:
      return e.push("&", t.nodeName, ";");
    default:
      e.push("??", t.nodeName);
  }
}
function cm(t, e, i) {
  var s;
  switch (e.nodeType) {
    case Jt:
      (s = e.cloneNode(!1)), (s.ownerDocument = t);
    case Ri:
      break;
    case nn:
      i = !0;
      break;
  }
  if (
    (s || (s = e.cloneNode(!1)),
    (s.ownerDocument = t),
    (s.parentNode = null),
    i)
  )
    for (var n = e.firstChild; n; )
      s.appendChild(cm(t, n, i)), (n = n.nextSibling);
  return s;
}
function Zl(t, e, i) {
  var s = new e.constructor();
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      var r = e[n];
      typeof r != "object" && r != s[n] && (s[n] = r);
    }
  switch (
    (e.childNodes && (s.childNodes = new Ii()),
    (s.ownerDocument = t),
    s.nodeType)
  ) {
    case Jt:
      var a = e.attributes,
        o = (s.attributes = new ja()),
        u = a.length;
      o._ownerElement = s;
      for (var f = 0; f < u; f++) s.setAttributeNode(Zl(t, a.item(f), !0));
      break;
    case nn:
      i = !0;
  }
  if (i)
    for (var p = e.firstChild; p; )
      s.appendChild(Zl(t, p, i)), (p = p.nextSibling);
  return s;
}
function dm(t, e, i) {
  t[e] = i;
}
try {
  if (Object.defineProperty) {
    let t = function (e) {
      switch (e.nodeType) {
        case Jt:
        case Ri:
          var i = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && i.push(t(e)),
              (e = e.nextSibling);
          return i.join("");
        default:
          return e.nodeValue;
      }
    };
    var getTextContent = t;
    Object.defineProperty(rn.prototype, "length", {
      get: function () {
        return Qu(this), this.$$length;
      },
    }),
      Object.defineProperty(ke.prototype, "textContent", {
        get: function () {
          return t(this);
        },
        set: function (e) {
          switch (this.nodeType) {
            case Jt:
            case Ri:
              for (; this.firstChild; ) this.removeChild(this.firstChild);
              (e || String(e)) &&
                this.appendChild(this.ownerDocument.createTextNode(e));
              break;
            default:
              (this.data = e), (this.value = e), (this.nodeValue = e);
          }
        },
      }),
      (dm = function (e, i, s) {
        e["$$" + i] = s;
      });
  }
} catch {}
Yi.DocumentType = xo;
Yi.DOMException = We;
Yi.DOMImplementation = tm;
Yi.Element = Ts;
Yi.Node = ke;
Yi.NodeList = Ii;
Yi.XMLSerializer = lm;
var Eo = {},
  hm = {};
(function (t) {
  var e = Fi.freeze;
  (t.XML_ENTITIES = e({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' })),
    (t.HTML_ENTITIES = e({
      lt: "<",
      gt: ">",
      amp: "&",
      quot: '"',
      apos: "'",
      Agrave: "À",
      Aacute: "Á",
      Acirc: "Â",
      Atilde: "Ã",
      Auml: "Ä",
      Aring: "Å",
      AElig: "Æ",
      Ccedil: "Ç",
      Egrave: "È",
      Eacute: "É",
      Ecirc: "Ê",
      Euml: "Ë",
      Igrave: "Ì",
      Iacute: "Í",
      Icirc: "Î",
      Iuml: "Ï",
      ETH: "Ð",
      Ntilde: "Ñ",
      Ograve: "Ò",
      Oacute: "Ó",
      Ocirc: "Ô",
      Otilde: "Õ",
      Ouml: "Ö",
      Oslash: "Ø",
      Ugrave: "Ù",
      Uacute: "Ú",
      Ucirc: "Û",
      Uuml: "Ü",
      Yacute: "Ý",
      THORN: "Þ",
      szlig: "ß",
      agrave: "à",
      aacute: "á",
      acirc: "â",
      atilde: "ã",
      auml: "ä",
      aring: "å",
      aelig: "æ",
      ccedil: "ç",
      egrave: "è",
      eacute: "é",
      ecirc: "ê",
      euml: "ë",
      igrave: "ì",
      iacute: "í",
      icirc: "î",
      iuml: "ï",
      eth: "ð",
      ntilde: "ñ",
      ograve: "ò",
      oacute: "ó",
      ocirc: "ô",
      otilde: "õ",
      ouml: "ö",
      oslash: "ø",
      ugrave: "ù",
      uacute: "ú",
      ucirc: "û",
      uuml: "ü",
      yacute: "ý",
      thorn: "þ",
      yuml: "ÿ",
      nbsp: " ",
      iexcl: "¡",
      cent: "¢",
      pound: "£",
      curren: "¤",
      yen: "¥",
      brvbar: "¦",
      sect: "§",
      uml: "¨",
      copy: "©",
      ordf: "ª",
      laquo: "«",
      not: "¬",
      shy: "­­",
      reg: "®",
      macr: "¯",
      deg: "°",
      plusmn: "±",
      sup2: "²",
      sup3: "³",
      acute: "´",
      micro: "µ",
      para: "¶",
      middot: "·",
      cedil: "¸",
      sup1: "¹",
      ordm: "º",
      raquo: "»",
      frac14: "¼",
      frac12: "½",
      frac34: "¾",
      iquest: "¿",
      times: "×",
      divide: "÷",
      forall: "∀",
      part: "∂",
      exist: "∃",
      empty: "∅",
      nabla: "∇",
      isin: "∈",
      notin: "∉",
      ni: "∋",
      prod: "∏",
      sum: "∑",
      minus: "−",
      lowast: "∗",
      radic: "√",
      prop: "∝",
      infin: "∞",
      ang: "∠",
      and: "∧",
      or: "∨",
      cap: "∩",
      cup: "∪",
      int: "∫",
      there4: "∴",
      sim: "∼",
      cong: "≅",
      asymp: "≈",
      ne: "≠",
      equiv: "≡",
      le: "≤",
      ge: "≥",
      sub: "⊂",
      sup: "⊃",
      nsub: "⊄",
      sube: "⊆",
      supe: "⊇",
      oplus: "⊕",
      otimes: "⊗",
      perp: "⊥",
      sdot: "⋅",
      Alpha: "Α",
      Beta: "Β",
      Gamma: "Γ",
      Delta: "Δ",
      Epsilon: "Ε",
      Zeta: "Ζ",
      Eta: "Η",
      Theta: "Θ",
      Iota: "Ι",
      Kappa: "Κ",
      Lambda: "Λ",
      Mu: "Μ",
      Nu: "Ν",
      Xi: "Ξ",
      Omicron: "Ο",
      Pi: "Π",
      Rho: "Ρ",
      Sigma: "Σ",
      Tau: "Τ",
      Upsilon: "Υ",
      Phi: "Φ",
      Chi: "Χ",
      Psi: "Ψ",
      Omega: "Ω",
      alpha: "α",
      beta: "β",
      gamma: "γ",
      delta: "δ",
      epsilon: "ε",
      zeta: "ζ",
      eta: "η",
      theta: "θ",
      iota: "ι",
      kappa: "κ",
      lambda: "λ",
      mu: "μ",
      nu: "ν",
      xi: "ξ",
      omicron: "ο",
      pi: "π",
      rho: "ρ",
      sigmaf: "ς",
      sigma: "σ",
      tau: "τ",
      upsilon: "υ",
      phi: "φ",
      chi: "χ",
      psi: "ψ",
      omega: "ω",
      thetasym: "ϑ",
      upsih: "ϒ",
      piv: "ϖ",
      OElig: "Œ",
      oelig: "œ",
      Scaron: "Š",
      scaron: "š",
      Yuml: "Ÿ",
      fnof: "ƒ",
      circ: "ˆ",
      tilde: "˜",
      ensp: " ",
      emsp: " ",
      thinsp: " ",
      zwnj: "‌",
      zwj: "‍",
      lrm: "‎",
      rlm: "‏",
      ndash: "–",
      mdash: "—",
      lsquo: "‘",
      rsquo: "’",
      sbquo: "‚",
      ldquo: "“",
      rdquo: "”",
      bdquo: "„",
      dagger: "†",
      Dagger: "‡",
      bull: "•",
      hellip: "…",
      permil: "‰",
      prime: "′",
      Prime: "″",
      lsaquo: "‹",
      rsaquo: "›",
      oline: "‾",
      euro: "€",
      trade: "™",
      larr: "←",
      uarr: "↑",
      rarr: "→",
      darr: "↓",
      harr: "↔",
      crarr: "↵",
      lceil: "⌈",
      rceil: "⌉",
      lfloor: "⌊",
      rfloor: "⌋",
      loz: "◊",
      spades: "♠",
      clubs: "♣",
      hearts: "♥",
      diams: "♦",
    })),
    (t.entityMap = t.HTML_ENTITIES);
})(hm);
var rc = {},
  yr = Fi.NAMESPACE,
  eu =
    /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
  kh = new RegExp(
    "[\\-\\.0-9" +
      eu.source.slice(1, -1) +
      "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"
  ),
  Ih = new RegExp(
    "^" + eu.source + kh.source + "*(?::" + eu.source + kh.source + "*)?$"
  ),
  Bn = 0,
  ji = 1,
  Is = 2,
  $n = 3,
  Os = 4,
  Ps = 5,
  jn = 6,
  pa = 7;
function an(t, e) {
  (this.message = t),
    (this.locator = e),
    Error.captureStackTrace && Error.captureStackTrace(this, an);
}
an.prototype = new Error();
an.prototype.name = an.name;
function fm() {}
fm.prototype = {
  parse: function (t, e, i) {
    var s = this.domBuilder;
    s.startDocument(),
      pm(e, (e = {})),
      wx(t, e, i, s, this.errorHandler),
      s.endDocument();
  },
};
function wx(t, e, i, s, n) {
  function r(re) {
    if (re > 65535) {
      re -= 65536;
      var ue = 55296 + (re >> 10),
        Te = 56320 + (re & 1023);
      return String.fromCharCode(ue, Te);
    } else return String.fromCharCode(re);
  }
  function a(re) {
    var ue = re.slice(1, -1);
    return Object.hasOwnProperty.call(i, ue)
      ? i[ue]
      : ue.charAt(0) === "#"
      ? r(parseInt(ue.substr(1).replace("x", "0x")))
      : (n.error("entity not found:" + re), re);
  }
  function o(re) {
    if (re > S) {
      var ue = t.substring(S, re).replace(/&#?\w+;/g, a);
      v && u(S), s.characters(ue, 0, re - S), (S = re);
    }
  }
  function u(re, ue) {
    for (; re >= p && (ue = _.exec(t)); )
      (f = ue.index), (p = f + ue[0].length), v.lineNumber++;
    v.columnNumber = re - f + 1;
  }
  for (
    var f = 0,
      p = 0,
      _ = /.*(?:\r\n?|\n)|.*$/g,
      v = s.locator,
      y = [{ currentNSMap: e }],
      A = {},
      S = 0;
    ;

  ) {
    try {
      var E = t.indexOf("<", S);
      if (E < 0) {
        if (!t.substr(S).match(/^\s*$/)) {
          var k = s.doc,
            D = k.createTextNode(t.substr(S));
          k.appendChild(D), (s.currentElement = D);
        }
        return;
      }
      switch ((E > S && o(E), t.charAt(E + 1))) {
        case "/":
          var de = t.indexOf(">", E + 3),
            R = t.substring(E + 2, de).replace(/[ \t\n\r]+$/g, ""),
            N = y.pop();
          de < 0
            ? ((R = t.substring(E + 2).replace(/[\s<].*/, "")),
              n.error("end tag name: " + R + " is not complete:" + N.tagName),
              (de = E + 1 + R.length))
            : R.match(/\s</) &&
              ((R = R.replace(/[\s<].*/, "")),
              n.error("end tag name: " + R + " maybe not complete"),
              (de = E + 1 + R.length));
          var L = N.localNSMap,
            z = N.tagName == R,
            Z = z || (N.tagName && N.tagName.toLowerCase() == R.toLowerCase());
          if (Z) {
            if ((s.endElement(N.uri, N.localName, R), L))
              for (var ae in L)
                Object.prototype.hasOwnProperty.call(L, ae) &&
                  s.endPrefixMapping(ae);
            z ||
              n.fatalError(
                "end tag name: " +
                  R +
                  " is not match the current start tagName:" +
                  N.tagName
              );
          } else y.push(N);
          de++;
          break;
        case "?":
          v && u(E), (de = Px(t, E, s));
          break;
        case "!":
          v && u(E), (de = Ox(t, E, s, n));
          break;
        default:
          v && u(E);
          var ne = new mm(),
            ve = y[y.length - 1].currentNSMap,
            de = Ax(t, E, ne, ve, a, n),
            xe = ne.length;
          if (
            (!ne.closed &&
              Ix(t, de, ne.tagName, A) &&
              ((ne.closed = !0), i.nbsp || n.warning("unclosed xml attribute")),
            v && xe)
          ) {
            for (var Y = Oh(v, {}), oe = 0; oe < xe; oe++) {
              var Ne = ne[oe];
              u(Ne.offset), (Ne.locator = Oh(v, {}));
            }
            (s.locator = Y), Ph(ne, s, ve) && y.push(ne), (s.locator = v);
          } else Ph(ne, s, ve) && y.push(ne);
          yr.isHTML(ne.uri) && !ne.closed
            ? (de = kx(t, de, ne.tagName, a, s))
            : de++;
      }
    } catch (re) {
      if (re instanceof an) throw re;
      n.error("element parse error: " + re), (de = -1);
    }
    de > S ? (S = de) : o(Math.max(E, S) + 1);
  }
}
function Oh(t, e) {
  return (e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber), e;
}
function Ax(t, e, i, s, n, r) {
  function a(v, y, A) {
    i.attributeNames.hasOwnProperty(v) &&
      r.fatalError("Attribute " + v + " redefined"),
      i.addValue(v, y.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, n), A);
  }
  for (var o, u, f = ++e, p = Bn; ; ) {
    var _ = t.charAt(f);
    switch (_) {
      case "=":
        if (p === ji) (o = t.slice(e, f)), (p = $n);
        else if (p === Is) p = $n;
        else throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (p === $n || p === ji)
          if (
            (p === ji &&
              (r.warning('attribute value must after "="'),
              (o = t.slice(e, f))),
            (e = f + 1),
            (f = t.indexOf(_, e)),
            f > 0)
          )
            (u = t.slice(e, f)), a(o, u, e - 1), (p = Ps);
          else throw new Error("attribute value no end '" + _ + "' match");
        else if (p == Os)
          (u = t.slice(e, f)),
            a(o, u, e),
            r.warning('attribute "' + o + '" missed start quot(' + _ + ")!!"),
            (e = f + 1),
            (p = Ps);
        else throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (p) {
          case Bn:
            i.setTagName(t.slice(e, f));
          case Ps:
          case jn:
          case pa:
            (p = pa), (i.closed = !0);
          case Os:
          case ji:
          case Is:
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return (
          r.error("unexpected end of input"),
          p == Bn && i.setTagName(t.slice(e, f)),
          f
        );
      case ">":
        switch (p) {
          case Bn:
            i.setTagName(t.slice(e, f));
          case Ps:
          case jn:
          case pa:
            break;
          case Os:
          case ji:
            (u = t.slice(e, f)),
              u.slice(-1) === "/" && ((i.closed = !0), (u = u.slice(0, -1)));
          case Is:
            p === Is && (u = o),
              p == Os
                ? (r.warning('attribute "' + u + '" missed quot(")!'),
                  a(o, u, e))
                : ((!yr.isHTML(s[""]) ||
                    !u.match(/^(?:disabled|checked|selected)$/i)) &&
                    r.warning(
                      'attribute "' +
                        u +
                        '" missed value!! "' +
                        u +
                        '" instead!!'
                    ),
                  a(u, u, e));
            break;
          case $n:
            throw new Error("attribute value missed!!");
        }
        return f;
      case "":
        _ = " ";
      default:
        if (_ <= " ")
          switch (p) {
            case Bn:
              i.setTagName(t.slice(e, f)), (p = jn);
              break;
            case ji:
              (o = t.slice(e, f)), (p = Is);
              break;
            case Os:
              var u = t.slice(e, f);
              r.warning('attribute "' + u + '" missed quot(")!!'), a(o, u, e);
            case Ps:
              p = jn;
              break;
          }
        else
          switch (p) {
            case Is:
              i.tagName,
                (!yr.isHTML(s[""]) ||
                  !o.match(/^(?:disabled|checked|selected)$/i)) &&
                  r.warning(
                    'attribute "' +
                      o +
                      '" missed value!! "' +
                      o +
                      '" instead2!!'
                  ),
                a(o, o, e),
                (e = f),
                (p = ji);
              break;
            case Ps:
              r.warning('attribute space is required"' + o + '"!!');
            case jn:
              (p = ji), (e = f);
              break;
            case $n:
              (p = Os), (e = f);
              break;
            case pa:
              throw new Error(
                "elements closed character '/' and '>' must be connected to"
              );
          }
    }
    f++;
  }
}
function Ph(t, e, i) {
  for (var s = t.tagName, n = null, _ = t.length; _--; ) {
    var r = t[_],
      a = r.qName,
      o = r.value,
      v = a.indexOf(":");
    if (v > 0)
      var u = (r.prefix = a.slice(0, v)),
        f = a.slice(v + 1),
        p = u === "xmlns" && f;
    else (f = a), (u = null), (p = a === "xmlns" && "");
    (r.localName = f),
      p !== !1 &&
        (n == null && ((n = {}), pm(i, (i = {}))),
        (i[p] = n[p] = o),
        (r.uri = yr.XMLNS),
        e.startPrefixMapping(p, o));
  }
  for (var _ = t.length; _--; ) {
    r = t[_];
    var u = r.prefix;
    u &&
      (u === "xml" && (r.uri = yr.XML), u !== "xmlns" && (r.uri = i[u || ""]));
  }
  var v = s.indexOf(":");
  v > 0
    ? ((u = t.prefix = s.slice(0, v)), (f = t.localName = s.slice(v + 1)))
    : ((u = null), (f = t.localName = s));
  var y = (t.uri = i[u || ""]);
  if ((e.startElement(y, f, s, t), t.closed)) {
    if ((e.endElement(y, f, s), n))
      for (u in n)
        Object.prototype.hasOwnProperty.call(n, u) && e.endPrefixMapping(u);
  } else return (t.currentNSMap = i), (t.localNSMap = n), !0;
}
function kx(t, e, i, s, n) {
  if (/^(?:script|textarea)$/i.test(i)) {
    var r = t.indexOf("</" + i + ">", e),
      a = t.substring(e + 1, r);
    if (/[&<]/.test(a))
      return /^script$/i.test(i)
        ? (n.characters(a, 0, a.length), r)
        : ((a = a.replace(/&#?\w+;/g, s)), n.characters(a, 0, a.length), r);
  }
  return e + 1;
}
function Ix(t, e, i, s) {
  var n = s[i];
  return (
    n == null &&
      ((n = t.lastIndexOf("</" + i + ">")),
      n < e && (n = t.lastIndexOf("</" + i)),
      (s[i] = n)),
    n < e
  );
}
function pm(t, e) {
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
function Ox(t, e, i, s) {
  var n = t.charAt(e + 2);
  switch (n) {
    case "-":
      if (t.charAt(e + 3) === "-") {
        var r = t.indexOf("-->", e + 4);
        return r > e
          ? (i.comment(t, e + 4, r - e - 4), r + 3)
          : (s.error("Unclosed comment"), -1);
      } else return -1;
    default:
      if (t.substr(e + 3, 6) == "CDATA[") {
        var r = t.indexOf("]]>", e + 9);
        return (
          i.startCDATA(), i.characters(t, e + 9, r - e - 9), i.endCDATA(), r + 3
        );
      }
      var a = Dx(t, e),
        o = a.length;
      if (o > 1 && /!doctype/i.test(a[0][0])) {
        var u = a[1][0],
          f = !1,
          p = !1;
        o > 3 &&
          (/^public$/i.test(a[2][0])
            ? ((f = a[3][0]), (p = o > 4 && a[4][0]))
            : /^system$/i.test(a[2][0]) && (p = a[3][0]));
        var _ = a[o - 1];
        return i.startDTD(u, f, p), i.endDTD(), _.index + _[0].length;
      }
  }
  return -1;
}
function Px(t, e, i) {
  var s = t.indexOf("?>", e);
  if (s) {
    var n = t.substring(e, s).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return n ? (n[0].length, i.processingInstruction(n[1], n[2]), s + 2) : -1;
  }
  return -1;
}
function mm() {
  this.attributeNames = {};
}
mm.prototype = {
  setTagName: function (t) {
    if (!Ih.test(t)) throw new Error("invalid tagName:" + t);
    this.tagName = t;
  },
  addValue: function (t, e, i) {
    if (!Ih.test(t)) throw new Error("invalid attribute:" + t);
    (this.attributeNames[t] = this.length),
      (this[this.length++] = { qName: t, value: e, offset: i });
  },
  length: 0,
  getLocalName: function (t) {
    return this[t].localName;
  },
  getLocator: function (t) {
    return this[t].locator;
  },
  getQName: function (t) {
    return this[t].qName;
  },
  getURI: function (t) {
    return this[t].uri;
  },
  getValue: function (t) {
    return this[t].value;
  },
};
function Dx(t, e) {
  var i,
    s = [],
    n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (n.lastIndex = e, n.exec(t); (i = n.exec(t)); )
    if ((s.push(i), i[1])) return s;
}
rc.XMLReader = fm;
rc.ParseError = an;
var Lx = Fi,
  Rx = Yi,
  Dh = hm,
  gm = rc,
  Nx = Rx.DOMImplementation,
  Lh = Lx.NAMESPACE,
  Mx = gm.ParseError,
  Ux = gm.XMLReader;
function _m(t) {
  return t
    .replace(
      /\r[\n\u0085]/g,
      `
`
    )
    .replace(
      /[\r\u0085\u2028]/g,
      `
`
    );
}
function ym(t) {
  this.options = t || { locator: {} };
}
ym.prototype.parseFromString = function (t, e) {
  var i = this.options,
    s = new Ux(),
    n = i.domBuilder || new Ar(),
    r = i.errorHandler,
    a = i.locator,
    o = i.xmlns || {},
    u = /\/x?html?$/.test(e),
    f = u ? Dh.HTML_ENTITIES : Dh.XML_ENTITIES;
  a && n.setDocumentLocator(a),
    (s.errorHandler = Fx(r, n, a)),
    (s.domBuilder = i.domBuilder || n),
    u && (o[""] = Lh.HTML),
    (o.xml = o.xml || Lh.XML);
  var p = i.normalizeLineEndings || _m;
  return (
    t && typeof t == "string"
      ? s.parse(p(t), o, f)
      : s.errorHandler.error("invalid doc source"),
    n.doc
  );
};
function Fx(t, e, i) {
  if (!t) {
    if (e instanceof Ar) return e;
    t = e;
  }
  var s = {},
    n = t instanceof Function;
  i = i || {};
  function r(a) {
    var o = t[a];
    !o &&
      n &&
      (o =
        t.length == 2
          ? function (u) {
              t(a, u);
            }
          : t),
      (s[a] =
        (o &&
          function (u) {
            o("[xmldom " + a + "]	" + u + Bx(i));
          }) ||
        function () {});
  }
  return r("warning"), r("error"), r("fatalError"), s;
}
function Ar() {
  this.cdata = !1;
}
function Ds(t, e) {
  (e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber);
}
Ar.prototype = {
  startDocument: function () {
    (this.doc = new Nx().createDocument(null, null, null)),
      this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function (t, e, i, s) {
    var n = this.doc,
      r = n.createElementNS(t, i || e),
      a = s.length;
    ma(this, r), (this.currentElement = r), this.locator && Ds(this.locator, r);
    for (var o = 0; o < a; o++) {
      var t = s.getURI(o),
        u = s.getValue(o),
        i = s.getQName(o),
        f = n.createAttributeNS(t, i);
      this.locator && Ds(s.getLocator(o), f),
        (f.value = f.nodeValue = u),
        r.setAttributeNode(f);
    }
  },
  endElement: function (t, e, i) {
    var s = this.currentElement;
    s.tagName, (this.currentElement = s.parentNode);
  },
  startPrefixMapping: function (t, e) {},
  endPrefixMapping: function (t) {},
  processingInstruction: function (t, e) {
    var i = this.doc.createProcessingInstruction(t, e);
    this.locator && Ds(this.locator, i), ma(this, i);
  },
  ignorableWhitespace: function (t, e, i) {},
  characters: function (t, e, i) {
    if (((t = Rh.apply(this, arguments)), t)) {
      if (this.cdata) var s = this.doc.createCDATASection(t);
      else var s = this.doc.createTextNode(t);
      this.currentElement
        ? this.currentElement.appendChild(s)
        : /^\s*$/.test(t) && this.doc.appendChild(s),
        this.locator && Ds(this.locator, s);
    }
  },
  skippedEntity: function (t) {},
  endDocument: function () {
    this.doc.normalize();
  },
  setDocumentLocator: function (t) {
    (this.locator = t) && (t.lineNumber = 0);
  },
  comment: function (t, e, i) {
    t = Rh.apply(this, arguments);
    var s = this.doc.createComment(t);
    this.locator && Ds(this.locator, s), ma(this, s);
  },
  startCDATA: function () {
    this.cdata = !0;
  },
  endCDATA: function () {
    this.cdata = !1;
  },
  startDTD: function (t, e, i) {
    var s = this.doc.implementation;
    if (s && s.createDocumentType) {
      var n = s.createDocumentType(t, e, i);
      this.locator && Ds(this.locator, n), ma(this, n), (this.doc.doctype = n);
    }
  },
  warning: function (t) {},
  error: function (t) {},
  fatalError: function (t) {
    throw new Mx(t, this.locator);
  },
};
function Bx(t) {
  if (t)
    return (
      `
@` +
      (t.systemId || "") +
      "#[line:" +
      t.lineNumber +
      ",col:" +
      t.columnNumber +
      "]"
    );
}
function Rh(t, e, i) {
  return typeof t == "string"
    ? t.substr(e, i)
    : t.length >= e + i || e
    ? new java.lang.String(t, e, i) + ""
    : t;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
  /\w+/g,
  function (t) {
    Ar.prototype[t] = function () {
      return null;
    };
  }
);
function ma(t, e) {
  t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
}
Eo.__DOMHandler = Ar;
Eo.normalizeLineEndings = _m;
Eo.DOMParser = ym;
var $x = Eo.DOMParser;
/*!@name mpd-parser @version 1.0.1 @license Apache-2.0*/ const Nh = (t) =>
    !!t && typeof t == "object",
  it = (...t) =>
    t.reduce(
      (e, i) => (
        typeof i != "object" ||
          Object.keys(i).forEach((s) => {
            Array.isArray(e[s]) && Array.isArray(i[s])
              ? (e[s] = e[s].concat(i[s]))
              : Nh(e[s]) && Nh(i[s])
              ? (e[s] = it(e[s], i[s]))
              : (e[s] = i[s]);
          }),
        e
      ),
      {}
    ),
  vm = (t) => Object.keys(t).map((e) => t[e]),
  jx = (t, e) => {
    const i = [];
    for (let s = t; s < e; s++) i.push(s);
    return i;
  },
  Co = (t) => t.reduce((e, i) => e.concat(i), []),
  Tm = (t) => {
    if (!t.length) return [];
    const e = [];
    for (let i = 0; i < t.length; i++) e.push(t[i]);
    return e;
  },
  Hx = (t, e) => t.reduce((i, s, n) => (s[e] && i.push(n), i), []),
  Vx = (t, e) =>
    vm(
      t.reduce(
        (i, s) => (
          s.forEach((n) => {
            i[e(n)] = n;
          }),
          i
        ),
        {}
      )
    );
var on = {
  INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
  DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
  DASH_INVALID_XML: "DASH_INVALID_XML",
  NO_BASE_URL: "NO_BASE_URL",
  MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
  SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
  UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME",
};
const vr = ({
    baseUrl: t = "",
    source: e = "",
    range: i = "",
    indexRange: s = "",
  }) => {
    const n = { uri: e, resolvedUri: Xu(t || "", e) };
    if (i || s) {
      const a = (i || s).split("-");
      let o = C.BigInt ? C.BigInt(a[0]) : parseInt(a[0], 10),
        u = C.BigInt ? C.BigInt(a[1]) : parseInt(a[1], 10);
      o < Number.MAX_SAFE_INTEGER && typeof o == "bigint" && (o = Number(o)),
        u < Number.MAX_SAFE_INTEGER && typeof u == "bigint" && (u = Number(u));
      let f;
      typeof u == "bigint" || typeof o == "bigint"
        ? (f = C.BigInt(u) - C.BigInt(o) + C.BigInt(1))
        : (f = u - o + 1),
        typeof f == "bigint" && f < Number.MAX_SAFE_INTEGER && (f = Number(f)),
        (n.byterange = { length: f, offset: o });
    }
    return n;
  },
  Wx = (t) => {
    let e;
    return (
      typeof t.offset == "bigint" || typeof t.length == "bigint"
        ? (e = C.BigInt(t.offset) + C.BigInt(t.length) - C.BigInt(1))
        : (e = t.offset + t.length - 1),
      `${t.offset}-${e}`
    );
  },
  Mh = (t) => (
    t && typeof t != "number" && (t = parseInt(t, 10)), isNaN(t) ? null : t
  ),
  qx = {
    static(t) {
      const {
          duration: e,
          timescale: i = 1,
          sourceDuration: s,
          periodDuration: n,
        } = t,
        r = Mh(t.endNumber),
        a = e / i;
      return typeof r == "number"
        ? { start: 0, end: r }
        : typeof n == "number"
        ? { start: 0, end: n / a }
        : { start: 0, end: s / a };
    },
    dynamic(t) {
      const {
          NOW: e,
          clientOffset: i,
          availabilityStartTime: s,
          timescale: n = 1,
          duration: r,
          periodStart: a = 0,
          minimumUpdatePeriod: o = 0,
          timeShiftBufferDepth: u = 1 / 0,
        } = t,
        f = Mh(t.endNumber),
        p = (e + i) / 1e3,
        _ = s + a,
        y = p + o - _,
        A = Math.ceil((y * n) / r),
        S = Math.floor(((p - _ - u) * n) / r),
        E = Math.floor(((p - _) * n) / r);
      return {
        start: Math.max(0, S),
        end: typeof f == "number" ? f : Math.min(A, E),
      };
    },
  },
  zx = (t) => (e) => {
    const {
      duration: i,
      timescale: s = 1,
      periodStart: n,
      startNumber: r = 1,
    } = t;
    return { number: r + e, duration: i / s, timeline: n, time: e * i };
  },
  ac = (t) => {
    const {
        type: e,
        duration: i,
        timescale: s = 1,
        periodDuration: n,
        sourceDuration: r,
      } = t,
      { start: a, end: o } = qx[e](t),
      u = jx(a, o).map(zx(t));
    if (e === "static") {
      const f = u.length - 1,
        p = typeof n == "number" ? n : r;
      u[f].duration = p - (i / s) * f;
    }
    return u;
  },
  bm = (t) => {
    const {
      baseUrl: e,
      initialization: i = {},
      sourceDuration: s,
      indexRange: n = "",
      periodStart: r,
      presentationTime: a,
      number: o = 0,
      duration: u,
    } = t;
    if (!e) throw new Error(on.NO_BASE_URL);
    const f = vr({ baseUrl: e, source: i.sourceURL, range: i.range }),
      p = vr({ baseUrl: e, source: e, indexRange: n });
    if (((p.map = f), u)) {
      const _ = ac(t);
      _.length && ((p.duration = _[0].duration), (p.timeline = _[0].timeline));
    } else s && ((p.duration = s), (p.timeline = r));
    return (p.presentationTime = a || r), (p.number = o), [p];
  },
  oc = (t, e, i) => {
    const s = t.sidx.map ? t.sidx.map : null,
      n = t.sidx.duration,
      r = t.timeline || 0,
      a = t.sidx.byterange,
      o = a.offset + a.length,
      u = e.timescale,
      f = e.references.filter((E) => E.referenceType !== 1),
      p = [],
      _ = t.endList ? "static" : "dynamic",
      v = t.sidx.timeline;
    let y = v,
      A = t.mediaSequence || 0,
      S;
    typeof e.firstOffset == "bigint"
      ? (S = C.BigInt(o) + e.firstOffset)
      : (S = o + e.firstOffset);
    for (let E = 0; E < f.length; E++) {
      const k = e.references[E],
        D = k.referencedSize,
        R = k.subsegmentDuration;
      let N;
      typeof S == "bigint"
        ? (N = S + C.BigInt(D) - C.BigInt(1))
        : (N = S + D - 1);
      const L = `${S}-${N}`,
        Z = bm({
          baseUrl: i,
          timescale: u,
          timeline: r,
          periodStart: v,
          presentationTime: y,
          number: A,
          duration: R,
          sourceDuration: n,
          indexRange: L,
          type: _,
        })[0];
      s && (Z.map = s),
        p.push(Z),
        typeof S == "bigint" ? (S += C.BigInt(D)) : (S += D),
        (y += R / u),
        A++;
    }
    return (t.segments = p), t;
  },
  Gx = ["AUDIO", "SUBTITLES"],
  Kx = 1 / 60,
  xm = (t) =>
    Vx(t, ({ timeline: e }) => e).sort((e, i) =>
      e.timeline > i.timeline ? 1 : -1
    ),
  Xx = (t, e) => {
    for (let i = 0; i < t.length; i++)
      if (t[i].attributes.NAME === e) return t[i];
    return null;
  },
  Uh = (t) => {
    let e = [];
    return (
      dx(t, Gx, (i, s, n, r) => {
        e = e.concat(i.playlists || []);
      }),
      e
    );
  },
  Fh = ({ playlist: t, mediaSequence: e }) => {
    (t.mediaSequence = e),
      t.segments.forEach((i, s) => {
        i.number = t.mediaSequence + s;
      });
  },
  Yx = ({ oldPlaylists: t, newPlaylists: e, timelineStarts: i }) => {
    e.forEach((s) => {
      s.discontinuitySequence = i.findIndex(function ({ timeline: u }) {
        return u === s.timeline;
      });
      const n = Xx(t, s.attributes.NAME);
      if (!n || s.sidx) return;
      const r = s.segments[0],
        a = n.segments.findIndex(function (u) {
          return Math.abs(u.presentationTime - r.presentationTime) < Kx;
        });
      if (a === -1) {
        Fh({ playlist: s, mediaSequence: n.mediaSequence + n.segments.length }),
          (s.segments[0].discontinuity = !0),
          s.discontinuityStarts.unshift(0),
          ((!n.segments.length && s.timeline > n.timeline) ||
            (n.segments.length &&
              s.timeline > n.segments[n.segments.length - 1].timeline)) &&
            s.discontinuitySequence--;
        return;
      }
      n.segments[a].discontinuity &&
        !r.discontinuity &&
        ((r.discontinuity = !0),
        s.discontinuityStarts.unshift(0),
        s.discontinuitySequence--),
        Fh({ playlist: s, mediaSequence: n.segments[a].number });
    });
  },
  Qx = ({ oldManifest: t, newManifest: e }) => {
    const i = t.playlists.concat(Uh(t)),
      s = e.playlists.concat(Uh(e));
    return (
      (e.timelineStarts = xm([t.timelineStarts, e.timelineStarts])),
      Yx({
        oldPlaylists: i,
        newPlaylists: s,
        timelineStarts: e.timelineStarts,
      }),
      e
    );
  },
  wo = (t) => t && t.uri + "-" + Wx(t.byterange),
  vl = (t) =>
    vm(
      t.reduce((i, s) => {
        const n = s.attributes.id + (s.attributes.lang || "");
        return (
          i[n]
            ? (s.segments &&
                (s.segments[0] && (s.segments[0].discontinuity = !0),
                i[n].segments.push(...s.segments)),
              s.attributes.contentProtection &&
                (i[n].attributes.contentProtection =
                  s.attributes.contentProtection))
            : ((i[n] = s), (i[n].attributes.timelineStarts = [])),
          i[n].attributes.timelineStarts.push({
            start: s.attributes.periodStart,
            timeline: s.attributes.periodStart,
          }),
          i
        );
      }, {})
    ).map(
      (i) => (
        (i.discontinuityStarts = Hx(i.segments || [], "discontinuity")), i
      )
    ),
  lc = (t, e) => {
    const i = wo(t.sidx),
      s = i && e[i] && e[i].sidx;
    return s && oc(t, s, t.sidx.resolvedUri), t;
  },
  Jx = (t, e = {}) => {
    if (!Object.keys(e).length) return t;
    for (const i in t) t[i] = lc(t[i], e);
    return t;
  },
  Zx = (
    {
      attributes: t,
      segments: e,
      sidx: i,
      mediaSequence: s,
      discontinuitySequence: n,
      discontinuityStarts: r,
    },
    a
  ) => {
    const o = {
      attributes: {
        NAME: t.id,
        BANDWIDTH: t.bandwidth,
        CODECS: t.codecs,
        ["PROGRAM-ID"]: 1,
      },
      uri: "",
      endList: t.type === "static",
      timeline: t.periodStart,
      resolvedUri: "",
      targetDuration: t.duration,
      discontinuitySequence: n,
      discontinuityStarts: r,
      timelineStarts: t.timelineStarts,
      mediaSequence: s,
      segments: e,
    };
    return (
      t.contentProtection && (o.contentProtection = t.contentProtection),
      i && (o.sidx = i),
      a && ((o.attributes.AUDIO = "audio"), (o.attributes.SUBTITLES = "subs")),
      o
    );
  },
  eS = ({
    attributes: t,
    segments: e,
    mediaSequence: i,
    discontinuityStarts: s,
    discontinuitySequence: n,
  }) => {
    typeof e > "u" &&
      ((e = [
        {
          uri: t.baseUrl,
          timeline: t.periodStart,
          resolvedUri: t.baseUrl || "",
          duration: t.sourceDuration,
          number: 0,
        },
      ]),
      (t.duration = t.sourceDuration));
    const r = { NAME: t.id, BANDWIDTH: t.bandwidth, ["PROGRAM-ID"]: 1 };
    return (
      t.codecs && (r.CODECS = t.codecs),
      {
        attributes: r,
        uri: "",
        endList: t.type === "static",
        timeline: t.periodStart,
        resolvedUri: t.baseUrl || "",
        targetDuration: t.duration,
        timelineStarts: t.timelineStarts,
        discontinuityStarts: s,
        discontinuitySequence: n,
        mediaSequence: i,
        segments: e,
      }
    );
  },
  tS = (t, e = {}, i = !1) => {
    let s;
    const n = t.reduce((r, a) => {
      const o = (a.attributes.role && a.attributes.role.value) || "",
        u = a.attributes.lang || "";
      let f = a.attributes.label || "main";
      if (u && !a.attributes.label) {
        const _ = o ? ` (${o})` : "";
        f = `${a.attributes.lang}${_}`;
      }
      r[f] ||
        (r[f] = {
          language: u,
          autoselect: !0,
          default: o === "main",
          playlists: [],
          uri: "",
        });
      const p = lc(Zx(a, i), e);
      return (
        r[f].playlists.push(p),
        typeof s > "u" && o === "main" && ((s = a), (s.default = !0)),
        r
      );
    }, {});
    if (!s) {
      const r = Object.keys(n)[0];
      n[r].default = !0;
    }
    return n;
  },
  iS = (t, e = {}) =>
    t.reduce((i, s) => {
      const n = s.attributes.lang || "text";
      return (
        i[n] ||
          (i[n] = {
            language: n,
            default: !1,
            autoselect: !1,
            playlists: [],
            uri: "",
          }),
        i[n].playlists.push(lc(eS(s), e)),
        i
      );
    }, {}),
  sS = (t) =>
    t.reduce(
      (e, i) => (
        i &&
          i.forEach((s) => {
            const { channel: n, language: r } = s;
            (e[r] = {
              autoselect: !1,
              default: !1,
              instreamId: n,
              language: r,
            }),
              s.hasOwnProperty("aspectRatio") &&
                (e[r].aspectRatio = s.aspectRatio),
              s.hasOwnProperty("easyReader") &&
                (e[r].easyReader = s.easyReader),
              s.hasOwnProperty("3D") && (e[r]["3D"] = s["3D"]);
          }),
        e
      ),
      {}
    ),
  nS = ({ attributes: t, segments: e, sidx: i, discontinuityStarts: s }) => {
    const n = {
      attributes: {
        NAME: t.id,
        AUDIO: "audio",
        SUBTITLES: "subs",
        RESOLUTION: { width: t.width, height: t.height },
        CODECS: t.codecs,
        BANDWIDTH: t.bandwidth,
        ["PROGRAM-ID"]: 1,
      },
      uri: "",
      endList: t.type === "static",
      timeline: t.periodStart,
      resolvedUri: "",
      targetDuration: t.duration,
      discontinuityStarts: s,
      timelineStarts: t.timelineStarts,
      segments: e,
    };
    return (
      t.frameRate && (n.attributes["FRAME-RATE"] = t.frameRate),
      t.contentProtection && (n.contentProtection = t.contentProtection),
      i && (n.sidx = i),
      n
    );
  },
  rS = ({ attributes: t }) =>
    t.mimeType === "video/mp4" ||
    t.mimeType === "video/webm" ||
    t.contentType === "video",
  aS = ({ attributes: t }) =>
    t.mimeType === "audio/mp4" ||
    t.mimeType === "audio/webm" ||
    t.contentType === "audio",
  oS = ({ attributes: t }) =>
    t.mimeType === "text/vtt" || t.contentType === "text",
  lS = (t, e) => {
    t.forEach((i) => {
      (i.mediaSequence = 0),
        (i.discontinuitySequence = e.findIndex(function ({ timeline: s }) {
          return s === i.timeline;
        })),
        i.segments &&
          i.segments.forEach((s, n) => {
            s.number = n;
          });
    });
  },
  Bh = (t) =>
    t
      ? Object.keys(t).reduce((e, i) => {
          const s = t[i];
          return e.concat(s.playlists);
        }, [])
      : [],
  uS = ({
    dashPlaylists: t,
    locations: e,
    sidxMapping: i = {},
    previousManifest: s,
  }) => {
    if (!t.length) return {};
    const {
        sourceDuration: n,
        type: r,
        suggestedPresentationDelay: a,
        minimumUpdatePeriod: o,
      } = t[0].attributes,
      u = vl(t.filter(rS)).map(nS),
      f = vl(t.filter(aS)),
      p = vl(t.filter(oS)),
      _ = t.map((D) => D.attributes.captionServices).filter(Boolean),
      v = {
        allowCache: !0,
        discontinuityStarts: [],
        segments: [],
        endList: !0,
        mediaGroups: {
          AUDIO: {},
          VIDEO: {},
          ["CLOSED-CAPTIONS"]: {},
          SUBTITLES: {},
        },
        uri: "",
        duration: n,
        playlists: Jx(u, i),
      };
    o >= 0 && (v.minimumUpdatePeriod = o * 1e3),
      e && (v.locations = e),
      r === "dynamic" && (v.suggestedPresentationDelay = a);
    const y = v.playlists.length === 0,
      A = f.length ? tS(f, i, y) : null,
      S = p.length ? iS(p, i) : null,
      E = u.concat(Bh(A), Bh(S)),
      k = E.map(({ timelineStarts: D }) => D);
    return (
      (v.timelineStarts = xm(k)),
      lS(E, v.timelineStarts),
      A && (v.mediaGroups.AUDIO.audio = A),
      S && (v.mediaGroups.SUBTITLES.subs = S),
      _.length && (v.mediaGroups["CLOSED-CAPTIONS"].cc = sS(_)),
      s ? Qx({ oldManifest: s, newManifest: v }) : v
    );
  },
  cS = (t, e, i) => {
    const {
        NOW: s,
        clientOffset: n,
        availabilityStartTime: r,
        timescale: a = 1,
        periodStart: o = 0,
        minimumUpdatePeriod: u = 0,
      } = t,
      f = (s + n) / 1e3,
      p = r + o,
      v = f + u - p;
    return Math.ceil((v * a - e) / i);
  },
  Sm = (t, e) => {
    const {
        type: i,
        minimumUpdatePeriod: s = 0,
        media: n = "",
        sourceDuration: r,
        timescale: a = 1,
        startNumber: o = 1,
        periodStart: u,
      } = t,
      f = [];
    let p = -1;
    for (let _ = 0; _ < e.length; _++) {
      const v = e[_],
        y = v.d,
        A = v.r || 0,
        S = v.t || 0;
      p < 0 && (p = S), S && S > p && (p = S);
      let E;
      if (A < 0) {
        const R = _ + 1;
        R === e.length
          ? i === "dynamic" && s > 0 && n.indexOf("$Number$") > 0
            ? (E = cS(t, p, y))
            : (E = (r * a - p) / y)
          : (E = (e[R].t - p) / y);
      } else E = A + 1;
      const k = o + f.length + E;
      let D = o + f.length;
      for (; D < k; )
        f.push({ number: D, duration: y / a, time: p, timeline: u }),
          (p += y),
          D++;
    }
    return f;
  },
  dS = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
  hS = (t) => (e, i, s, n) => {
    if (e === "$$") return "$";
    if (typeof t[i] > "u") return e;
    const r = "" + t[i];
    return i === "RepresentationID" ||
      (s ? (n = parseInt(n, 10)) : (n = 1), r.length >= n)
      ? r
      : `${new Array(n - r.length + 1).join("0")}${r}`;
  },
  $h = (t, e) => t.replace(dS, hS(e)),
  fS = (t, e) =>
    !t.duration && !e
      ? [
          {
            number: t.startNumber || 1,
            duration: t.sourceDuration,
            time: 0,
            timeline: t.periodStart,
          },
        ]
      : t.duration
      ? ac(t)
      : Sm(t, e),
  pS = (t, e) => {
    const i = { RepresentationID: t.id, Bandwidth: t.bandwidth || 0 },
      { initialization: s = { sourceURL: "", range: "" } } = t,
      n = vr({
        baseUrl: t.baseUrl,
        source: $h(s.sourceURL, i),
        range: s.range,
      });
    return fS(t, e).map((a) => {
      (i.Number = a.number), (i.Time = a.time);
      const o = $h(t.media || "", i),
        u = t.timescale || 1,
        f = t.presentationTimeOffset || 0,
        p = t.periodStart + (a.time - f) / u;
      return {
        uri: o,
        timeline: a.timeline,
        duration: a.duration,
        resolvedUri: Xu(t.baseUrl || "", o),
        map: n,
        number: a.number,
        presentationTime: p,
      };
    });
  },
  mS = (t, e) => {
    const { baseUrl: i, initialization: s = {} } = t,
      n = vr({ baseUrl: i, source: s.sourceURL, range: s.range }),
      r = vr({ baseUrl: i, source: e.media, range: e.mediaRange });
    return (r.map = n), r;
  },
  gS = (t, e) => {
    const { duration: i, segmentUrls: s = [], periodStart: n } = t;
    if ((!i && !e) || (i && e)) throw new Error(on.SEGMENT_TIME_UNSPECIFIED);
    const r = s.map((u) => mS(t, u));
    let a;
    return (
      i && (a = ac(t)),
      e && (a = Sm(t, e)),
      a
        .map((u, f) => {
          if (r[f]) {
            const p = r[f],
              _ = t.timescale || 1,
              v = t.presentationTimeOffset || 0;
            return (
              (p.timeline = u.timeline),
              (p.duration = u.duration),
              (p.number = u.number),
              (p.presentationTime = n + (u.time - v) / _),
              p
            );
          }
        })
        .filter((u) => u)
    );
  },
  _S = ({ attributes: t, segmentInfo: e }) => {
    let i, s;
    e.template
      ? ((s = pS), (i = it(t, e.template)))
      : e.base
      ? ((s = bm), (i = it(t, e.base)))
      : e.list && ((s = gS), (i = it(t, e.list)));
    const n = { attributes: t };
    if (!s) return n;
    const r = s(i, e.segmentTimeline);
    if (i.duration) {
      const { duration: a, timescale: o = 1 } = i;
      i.duration = a / o;
    } else
      r.length
        ? (i.duration = r.reduce(
            (a, o) => Math.max(a, Math.ceil(o.duration)),
            0
          ))
        : (i.duration = 0);
    return (
      (n.attributes = i),
      (n.segments = r),
      e.base && i.indexRange && ((n.sidx = r[0]), (n.segments = [])),
      n
    );
  },
  yS = (t) => t.map(_S),
  Ve = (t, e) => Tm(t.childNodes).filter(({ tagName: i }) => i === e),
  uc = (t) => t.textContent.trim(),
  vS = (t) => parseFloat(t.split("/").reduce((e, i) => e / i)),
  Ls = (t) => {
    const o =
      /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(
        t
      );
    if (!o) return 0;
    const [u, f, p, _, v, y] = o.slice(1);
    return (
      parseFloat(u || 0) * 31536e3 +
      parseFloat(f || 0) * 2592e3 +
      parseFloat(p || 0) * 86400 +
      parseFloat(_ || 0) * 3600 +
      parseFloat(v || 0) * 60 +
      parseFloat(y || 0)
    );
  },
  TS = (t) => (
    /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t) && (t += "Z"), Date.parse(t)
  ),
  jh = {
    mediaPresentationDuration(t) {
      return Ls(t);
    },
    availabilityStartTime(t) {
      return TS(t) / 1e3;
    },
    minimumUpdatePeriod(t) {
      return Ls(t);
    },
    suggestedPresentationDelay(t) {
      return Ls(t);
    },
    type(t) {
      return t;
    },
    timeShiftBufferDepth(t) {
      return Ls(t);
    },
    start(t) {
      return Ls(t);
    },
    width(t) {
      return parseInt(t, 10);
    },
    height(t) {
      return parseInt(t, 10);
    },
    bandwidth(t) {
      return parseInt(t, 10);
    },
    frameRate(t) {
      return vS(t);
    },
    startNumber(t) {
      return parseInt(t, 10);
    },
    timescale(t) {
      return parseInt(t, 10);
    },
    presentationTimeOffset(t) {
      return parseInt(t, 10);
    },
    duration(t) {
      const e = parseInt(t, 10);
      return isNaN(e) ? Ls(t) : e;
    },
    d(t) {
      return parseInt(t, 10);
    },
    t(t) {
      return parseInt(t, 10);
    },
    r(t) {
      return parseInt(t, 10);
    },
    DEFAULT(t) {
      return t;
    },
  },
  et = (t) =>
    t && t.attributes
      ? Tm(t.attributes).reduce((e, i) => {
          const s = jh[i.name] || jh.DEFAULT;
          return (e[i.name] = s(i.value)), e;
        }, {})
      : {},
  bS = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
  },
  Ao = (t, e) =>
    e.length
      ? Co(
          t.map(function (i) {
            return e.map(function (s) {
              return Xu(i, uc(s));
            });
          })
        )
      : t,
  cc = (t) => {
    const e = Ve(t, "SegmentTemplate")[0],
      i = Ve(t, "SegmentList")[0],
      s = i && Ve(i, "SegmentURL").map((_) => it({ tag: "SegmentURL" }, et(_))),
      n = Ve(t, "SegmentBase")[0],
      r = i || e,
      a = r && Ve(r, "SegmentTimeline")[0],
      o = i || n || e,
      u = o && Ve(o, "Initialization")[0],
      f = e && et(e);
    f && u
      ? (f.initialization = u && et(u))
      : f &&
        f.initialization &&
        (f.initialization = { sourceURL: f.initialization });
    const p = {
      template: f,
      segmentTimeline: a && Ve(a, "S").map((_) => et(_)),
      list: i && it(et(i), { segmentUrls: s, initialization: et(u) }),
      base: n && it(et(n), { initialization: et(u) }),
    };
    return (
      Object.keys(p).forEach((_) => {
        p[_] || delete p[_];
      }),
      p
    );
  },
  xS = (t, e, i) => (s) => {
    const n = Ve(s, "BaseURL"),
      r = Ao(e, n),
      a = it(t, et(s)),
      o = cc(s);
    return r.map((u) => ({
      segmentInfo: it(i, o),
      attributes: it(a, { baseUrl: u }),
    }));
  },
  SS = (t) =>
    t.reduce((e, i) => {
      const s = et(i);
      s.schemeIdUri && (s.schemeIdUri = s.schemeIdUri.toLowerCase());
      const n = bS[s.schemeIdUri];
      if (n) {
        e[n] = { attributes: s };
        const r = Ve(i, "cenc:pssh")[0];
        if (r) {
          const a = uc(r);
          e[n].pssh = a && Fp(a);
        }
      }
      return e;
    }, {}),
  ES = (t) => {
    if (t.schemeIdUri === "urn:scte:dash:cc:cea-608:2015")
      return (typeof t.value != "string" ? [] : t.value.split(";")).map((i) => {
        let s, n;
        return (
          (n = i),
          /^CC\d=/.test(i)
            ? ([s, n] = i.split("="))
            : /^CC\d$/.test(i) && (s = i),
          { channel: s, language: n }
        );
      });
    if (t.schemeIdUri === "urn:scte:dash:cc:cea-708:2015")
      return (typeof t.value != "string" ? [] : t.value.split(";")).map((i) => {
        const s = {
          channel: void 0,
          language: void 0,
          aspectRatio: 1,
          easyReader: 0,
          "3D": 0,
        };
        if (/=/.test(i)) {
          const [n, r = ""] = i.split("=");
          (s.channel = n),
            (s.language = i),
            r.split(",").forEach((a) => {
              const [o, u] = a.split(":");
              o === "lang"
                ? (s.language = u)
                : o === "er"
                ? (s.easyReader = Number(u))
                : o === "war"
                ? (s.aspectRatio = Number(u))
                : o === "3D" && (s["3D"] = Number(u));
            });
        } else s.language = i;
        return s.channel && (s.channel = "SERVICE" + s.channel), s;
      });
  },
  CS = (t, e, i) => (s) => {
    const n = et(s),
      r = Ao(e, Ve(s, "BaseURL")),
      a = Ve(s, "Role")[0],
      o = { role: et(a) };
    let u = it(t, n, o);
    const f = Ve(s, "Accessibility")[0],
      p = ES(et(f));
    p && (u = it(u, { captionServices: p }));
    const _ = Ve(s, "Label")[0];
    if (_ && _.childNodes.length) {
      const E = _.childNodes[0].nodeValue.trim();
      u = it(u, { label: E });
    }
    const v = SS(Ve(s, "ContentProtection"));
    Object.keys(v).length && (u = it(u, { contentProtection: v }));
    const y = cc(s),
      A = Ve(s, "Representation"),
      S = it(i, y);
    return Co(A.map(xS(u, r, S)));
  },
  wS = (t, e) => (i, s) => {
    const n = Ao(e, Ve(i.node, "BaseURL")),
      r = it(t, { periodStart: i.attributes.start });
    typeof i.attributes.duration == "number" &&
      (r.periodDuration = i.attributes.duration);
    const a = Ve(i.node, "AdaptationSet"),
      o = cc(i.node);
    return Co(a.map(CS(r, n, o)));
  },
  AS = ({ attributes: t, priorPeriodAttributes: e, mpdType: i }) =>
    typeof t.start == "number"
      ? t.start
      : e && typeof e.start == "number" && typeof e.duration == "number"
      ? e.start + e.duration
      : !e && i === "static"
      ? 0
      : null,
  kS = (t, e = {}) => {
    const { manifestUri: i = "", NOW: s = Date.now(), clientOffset: n = 0 } = e,
      r = Ve(t, "Period");
    if (!r.length) throw new Error(on.INVALID_NUMBER_OF_PERIOD);
    const a = Ve(t, "Location"),
      o = et(t),
      u = Ao([i], Ve(t, "BaseURL"));
    (o.type = o.type || "static"),
      (o.sourceDuration = o.mediaPresentationDuration || 0),
      (o.NOW = s),
      (o.clientOffset = n),
      a.length && (o.locations = a.map(uc));
    const f = [];
    return (
      r.forEach((p, _) => {
        const v = et(p),
          y = f[_ - 1];
        (v.start = AS({
          attributes: v,
          priorPeriodAttributes: y ? y.attributes : null,
          mpdType: o.type,
        })),
          f.push({ node: p, attributes: v });
      }),
      { locations: o.locations, representationInfo: Co(f.map(wS(o, u))) }
    );
  },
  Em = (t) => {
    if (t === "") throw new Error(on.DASH_EMPTY_MANIFEST);
    const e = new $x();
    let i, s;
    try {
      (i = e.parseFromString(t, "application/xml")),
        (s =
          i && i.documentElement.tagName === "MPD" ? i.documentElement : null);
    } catch {}
    if (!s || (s && s.getElementsByTagName("parsererror").length > 0))
      throw new Error(on.DASH_INVALID_XML);
    return s;
  },
  IS = (t) => {
    const e = Ve(t, "UTCTiming")[0];
    if (!e) return null;
    const i = et(e);
    switch (i.schemeIdUri) {
      case "urn:mpeg:dash:utc:http-head:2014":
      case "urn:mpeg:dash:utc:http-head:2012":
        i.method = "HEAD";
        break;
      case "urn:mpeg:dash:utc:http-xsdate:2014":
      case "urn:mpeg:dash:utc:http-iso:2014":
      case "urn:mpeg:dash:utc:http-xsdate:2012":
      case "urn:mpeg:dash:utc:http-iso:2012":
        i.method = "GET";
        break;
      case "urn:mpeg:dash:utc:direct:2014":
      case "urn:mpeg:dash:utc:direct:2012":
        (i.method = "DIRECT"), (i.value = Date.parse(i.value));
        break;
      case "urn:mpeg:dash:utc:http-ntp:2014":
      case "urn:mpeg:dash:utc:ntp:2014":
      case "urn:mpeg:dash:utc:sntp:2014":
      default:
        throw new Error(on.UNSUPPORTED_UTC_TIMING_SCHEME);
    }
    return i;
  },
  OS = (t, e = {}) => {
    const i = kS(Em(t), e),
      s = yS(i.representationInfo);
    return uS({
      dashPlaylists: s,
      locations: i.locations,
      sidxMapping: e.sidxMapping,
      previousManifest: e.previousManifest,
    });
  },
  PS = (t) => IS(Em(t));
var Cm = Math.pow(2, 32),
  DS = function (t) {
    var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
      i;
    return e.getBigUint64
      ? ((i = e.getBigUint64(0)), i < Number.MAX_SAFE_INTEGER ? Number(i) : i)
      : e.getUint32(0) * Cm + e.getUint32(4);
  },
  LS = { getUint64: DS, MAX_UINT32: Cm },
  Hh = LS.getUint64,
  RS = function (t) {
    var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
      i = {
        version: t[0],
        flags: new Uint8Array(t.subarray(1, 4)),
        references: [],
        referenceId: e.getUint32(4),
        timescale: e.getUint32(8),
      },
      s = 12;
    i.version === 0
      ? ((i.earliestPresentationTime = e.getUint32(s)),
        (i.firstOffset = e.getUint32(s + 4)),
        (s += 8))
      : ((i.earliestPresentationTime = Hh(t.subarray(s))),
        (i.firstOffset = Hh(t.subarray(s + 8))),
        (s += 16)),
      (s += 2);
    var n = e.getUint16(s);
    for (s += 2; n > 0; s += 12, n--)
      i.references.push({
        referenceType: (t[s] & 128) >>> 7,
        referencedSize: e.getUint32(s) & 2147483647,
        subsegmentDuration: e.getUint32(s + 4),
        startsWithSap: !!(t[s + 8] & 128),
        sapType: (t[s + 8] & 112) >>> 4,
        sapDeltaTime: e.getUint32(s + 8) & 268435455,
      });
    return i;
  },
  NS = RS,
  MS = se([73, 68, 51]),
  US = function (e, i) {
    i === void 0 && (i = 0), (e = se(e));
    var s = e[i + 5],
      n = (e[i + 6] << 21) | (e[i + 7] << 14) | (e[i + 8] << 7) | e[i + 9],
      r = (s & 16) >> 4;
    return r ? n + 20 : n + 10;
  },
  Yn = function t(e, i) {
    return (
      i === void 0 && (i = 0),
      (e = se(e)),
      e.length - i < 10 || !Ue(e, MS, { offset: i })
        ? i
        : ((i += US(e, i)), t(e, i))
    );
  },
  Vh = function (e) {
    return typeof e == "string" ? Vp(e) : e;
  },
  FS = function (e) {
    return Array.isArray(e)
      ? e.map(function (i) {
          return Vh(i);
        })
      : [Vh(e)];
  },
  BS = function t(e, i, s) {
    s === void 0 && (s = !1), (i = FS(i)), (e = se(e));
    var n = [];
    if (!i.length) return n;
    for (var r = 0; r < e.length; ) {
      var a =
          ((e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]) >>> 0,
        o = e.subarray(r + 4, r + 8);
      if (a === 0) break;
      var u = r + a;
      if (u > e.length) {
        if (s) break;
        u = e.length;
      }
      var f = e.subarray(r + 8, u);
      Ue(o, i[0]) &&
        (i.length === 1 ? n.push(f) : n.push.apply(n, t(f, i.slice(1), s))),
        (r = u);
    }
    return n;
  },
  ga = {
    EBML: se([26, 69, 223, 163]),
    DocType: se([66, 130]),
    Segment: se([24, 83, 128, 103]),
    SegmentInfo: se([21, 73, 169, 102]),
    Tracks: se([22, 84, 174, 107]),
    Track: se([174]),
    TrackNumber: se([215]),
    DefaultDuration: se([35, 227, 131]),
    TrackEntry: se([174]),
    TrackType: se([131]),
    FlagDefault: se([136]),
    CodecID: se([134]),
    CodecPrivate: se([99, 162]),
    VideoTrack: se([224]),
    AudioTrack: se([225]),
    Cluster: se([31, 67, 182, 117]),
    Timestamp: se([231]),
    TimestampScale: se([42, 215, 177]),
    BlockGroup: se([160]),
    BlockDuration: se([155]),
    Block: se([161]),
    SimpleBlock: se([163]),
  },
  tu = [128, 64, 32, 16, 8, 4, 2, 1],
  $S = function (e) {
    for (var i = 1, s = 0; s < tu.length && !(e & tu[s]); s++) i++;
    return i;
  },
  Wa = function (e, i, s, n) {
    s === void 0 && (s = !0), n === void 0 && (n = !1);
    var r = $S(e[i]),
      a = e.subarray(i, i + r);
    return (
      s && ((a = Array.prototype.slice.call(e, i, i + r)), (a[0] ^= tu[r - 1])),
      { length: r, value: lx(a, { signed: n }), bytes: a }
    );
  },
  Wh = function t(e) {
    return typeof e == "string"
      ? e.match(/.{1,2}/g).map(function (i) {
          return t(i);
        })
      : typeof e == "number"
      ? ux(e)
      : e;
  },
  jS = function (e) {
    return Array.isArray(e)
      ? e.map(function (i) {
          return Wh(i);
        })
      : [Wh(e)];
  },
  HS = function t(e, i, s) {
    if (s >= i.length) return i.length;
    var n = Wa(i, s, !1);
    if (Ue(e.bytes, n.bytes)) return s;
    var r = Wa(i, s + n.length);
    return t(e, i, s + r.length + r.value + n.length);
  },
  qh = function t(e, i) {
    (i = jS(i)), (e = se(e));
    var s = [];
    if (!i.length) return s;
    for (var n = 0; n < e.length; ) {
      var r = Wa(e, n, !1),
        a = Wa(e, n + r.length),
        o = n + r.length + a.length;
      a.value === 127 &&
        ((a.value = HS(r, e, o)), a.value !== e.length && (a.value -= o));
      var u = o + a.value > e.length ? e.length : o + a.value,
        f = e.subarray(o, u);
      Ue(i[0], r.bytes) &&
        (i.length === 1 ? s.push(f) : (s = s.concat(t(f, i.slice(1)))));
      var p = r.length + a.length + f.length;
      n += p;
    }
    return s;
  },
  VS = se([0, 0, 0, 1]),
  WS = se([0, 0, 1]),
  qS = se([0, 0, 3]),
  zS = function (e) {
    for (var i = [], s = 1; s < e.length - 2; )
      Ue(e.subarray(s, s + 3), qS) && (i.push(s + 2), s++), s++;
    if (i.length === 0) return e;
    var n = e.length - i.length,
      r = new Uint8Array(n),
      a = 0;
    for (s = 0; s < n; a++, s++) a === i[0] && (a++, i.shift()), (r[s] = e[a]);
    return r;
  },
  wm = function (e, i, s, n) {
    n === void 0 && (n = 1 / 0), (e = se(e)), (s = [].concat(s));
    for (var r = 0, a, o = 0; r < e.length && (o < n || a); ) {
      var u = void 0;
      if (
        (Ue(e.subarray(r), VS) ? (u = 4) : Ue(e.subarray(r), WS) && (u = 3), !u)
      ) {
        r++;
        continue;
      }
      if ((o++, a)) return zS(e.subarray(a, r));
      var f = void 0;
      i === "h264"
        ? (f = e[r + u] & 31)
        : i === "h265" && (f = (e[r + u] >> 1) & 63),
        s.indexOf(f) !== -1 && (a = r + u),
        (r += u + (i === "h264" ? 1 : 2));
    }
    return e.subarray(0, 0);
  },
  GS = function (e, i, s) {
    return wm(e, "h264", i, s);
  },
  KS = function (e, i, s) {
    return wm(e, "h265", i, s);
  },
  dt = {
    webm: se([119, 101, 98, 109]),
    matroska: se([109, 97, 116, 114, 111, 115, 107, 97]),
    flac: se([102, 76, 97, 67]),
    ogg: se([79, 103, 103, 83]),
    ac3: se([11, 119]),
    riff: se([82, 73, 70, 70]),
    avi: se([65, 86, 73]),
    wav: se([87, 65, 86, 69]),
    "3gp": se([102, 116, 121, 112, 51, 103]),
    mp4: se([102, 116, 121, 112]),
    fmp4: se([115, 116, 121, 112]),
    mov: se([102, 116, 121, 112, 113, 116]),
    moov: se([109, 111, 111, 118]),
    moof: se([109, 111, 111, 102]),
  },
  ln = {
    aac: function (e) {
      var i = Yn(e);
      return Ue(e, [255, 16], { offset: i, mask: [255, 22] });
    },
    mp3: function (e) {
      var i = Yn(e);
      return Ue(e, [255, 2], { offset: i, mask: [255, 6] });
    },
    webm: function (e) {
      var i = qh(e, [ga.EBML, ga.DocType])[0];
      return Ue(i, dt.webm);
    },
    mkv: function (e) {
      var i = qh(e, [ga.EBML, ga.DocType])[0];
      return Ue(i, dt.matroska);
    },
    mp4: function (e) {
      if (ln["3gp"](e) || ln.mov(e)) return !1;
      if (
        Ue(e, dt.mp4, { offset: 4 }) ||
        Ue(e, dt.fmp4, { offset: 4 }) ||
        Ue(e, dt.moof, { offset: 4 }) ||
        Ue(e, dt.moov, { offset: 4 })
      )
        return !0;
    },
    mov: function (e) {
      return Ue(e, dt.mov, { offset: 4 });
    },
    "3gp": function (e) {
      return Ue(e, dt["3gp"], { offset: 4 });
    },
    ac3: function (e) {
      var i = Yn(e);
      return Ue(e, dt.ac3, { offset: i });
    },
    ts: function (e) {
      if (e.length < 189 && e.length >= 1) return e[0] === 71;
      for (var i = 0; i + 188 < e.length && i < 188; ) {
        if (e[i] === 71 && e[i + 188] === 71) return !0;
        i += 1;
      }
      return !1;
    },
    flac: function (e) {
      var i = Yn(e);
      return Ue(e, dt.flac, { offset: i });
    },
    ogg: function (e) {
      return Ue(e, dt.ogg);
    },
    avi: function (e) {
      return Ue(e, dt.riff) && Ue(e, dt.avi, { offset: 8 });
    },
    wav: function (e) {
      return Ue(e, dt.riff) && Ue(e, dt.wav, { offset: 8 });
    },
    h264: function (e) {
      return GS(e, 7, 3).length;
    },
    h265: function (e) {
      return KS(e, [32, 33], 3).length;
    },
  },
  iu = Object.keys(ln)
    .filter(function (t) {
      return t !== "ts" && t !== "h264" && t !== "h265";
    })
    .concat(["ts", "h264", "h265"]);
iu.forEach(function (t) {
  var e = ln[t];
  ln[t] = function (i) {
    return e(se(i));
  };
});
var XS = ln,
  dc = function (e) {
    e = se(e);
    for (var i = 0; i < iu.length; i++) {
      var s = iu[i];
      if (XS[s](e)) return s;
    }
    return "";
  },
  YS = function (e) {
    return BS(e, ["moof"]).length > 0;
  },
  hc = 9e4,
  fc,
  pc,
  ko,
  mc,
  Am,
  km,
  Im;
fc = function (t) {
  return t * hc;
};
pc = function (t, e) {
  return t * e;
};
ko = function (t) {
  return t / hc;
};
mc = function (t, e) {
  return t / e;
};
Am = function (t, e) {
  return fc(mc(t, e));
};
km = function (t, e) {
  return pc(ko(t), e);
};
Im = function (t, e, i) {
  return ko(i ? t : t - e);
};
var qa = {
  ONE_SECOND_IN_TS: hc,
  secondsToVideoTs: fc,
  secondsToAudioTs: pc,
  videoTsToSeconds: ko,
  audioTsToSeconds: mc,
  audioTsToVideoTs: Am,
  videoTsToAudioTs: km,
  metadataTsToSeconds: Im,
};
var Om = "8.0.4";
const Ai = {},
  Gi = function (t, e) {
    return (Ai[t] = Ai[t] || []), e && (Ai[t] = Ai[t].concat(e)), Ai[t];
  },
  QS = function (t, e) {
    Gi(t, e);
  },
  Pm = function (t, e) {
    const i = Gi(t).indexOf(e);
    return i <= -1 ? !1 : ((Ai[t] = Ai[t].slice()), Ai[t].splice(i, 1), !0);
  },
  JS = function (t, e) {
    Gi(
      t,
      [].concat(e).map((i) => {
        const s = (...n) => (Pm(t, s), i(...n));
        return s;
      })
    );
  },
  za = { prefixed: !0 },
  Ia = [
    [
      "requestFullscreen",
      "exitFullscreen",
      "fullscreenElement",
      "fullscreenEnabled",
      "fullscreenchange",
      "fullscreenerror",
      "fullscreen",
    ],
    [
      "webkitRequestFullscreen",
      "webkitExitFullscreen",
      "webkitFullscreenElement",
      "webkitFullscreenEnabled",
      "webkitfullscreenchange",
      "webkitfullscreenerror",
      "-webkit-full-screen",
    ],
    [
      "mozRequestFullScreen",
      "mozCancelFullScreen",
      "mozFullScreenElement",
      "mozFullScreenEnabled",
      "mozfullscreenchange",
      "mozfullscreenerror",
      "-moz-full-screen",
    ],
    [
      "msRequestFullscreen",
      "msExitFullscreen",
      "msFullscreenElement",
      "msFullscreenEnabled",
      "MSFullscreenChange",
      "MSFullscreenError",
      "-ms-fullscreen",
    ],
  ],
  zh = Ia[0];
let Qn;
for (let t = 0; t < Ia.length; t++)
  if (Ia[t][1] in K) {
    Qn = Ia[t];
    break;
  }
if (Qn) {
  for (let t = 0; t < Qn.length; t++) za[zh[t]] = Qn[t];
  za.prefixed = Qn[0] !== zh[0];
}
let St = [];
const ZS = (t, e) => (i, s, n) => {
  const r = e.levels[s],
    a = new RegExp(`^(${r})$`);
  if (
    (i !== "log" && n.unshift(i.toUpperCase() + ":"), n.unshift(t + ":"), St)
  ) {
    St.push([].concat(n));
    const u = St.length - 1e3;
    St.splice(0, u > 0 ? u : 0);
  }
  if (!C.console) return;
  let o = C.console[i];
  !o && i === "debug" && (o = C.console.info || C.console.log),
    !(!o || !r || !a.test(i)) &&
      o[Array.isArray(n) ? "apply" : "call"](C.console, n);
};
function Dm(t) {
  let e = "info",
    i;
  const s = function (...n) {
    i("log", e, n);
  };
  return (
    (i = ZS(t, s)),
    (s.createLogger = (n) => Dm(t + ": " + n)),
    (s.levels = {
      all: "debug|log|warn|error",
      off: "",
      debug: "debug|log|warn|error",
      info: "log|warn|error",
      warn: "warn|error",
      error: "error",
      DEFAULT: e,
    }),
    (s.level = (n) => {
      if (typeof n == "string") {
        if (!s.levels.hasOwnProperty(n))
          throw new Error(`"${n}" in not a valid log level`);
        e = n;
      }
      return e;
    }),
    (s.history = () => (St ? [].concat(St) : [])),
    (s.history.filter = (n) =>
      (St || []).filter((r) => new RegExp(`.*${n}.*`).test(r[0]))),
    (s.history.clear = () => {
      St && (St.length = 0);
    }),
    (s.history.disable = () => {
      St !== null && ((St.length = 0), (St = null));
    }),
    (s.history.enable = () => {
      St === null && (St = []);
    }),
    (s.error = (...n) => i("error", e, n)),
    (s.warn = (...n) => i("warn", e, n)),
    (s.debug = (...n) => i("debug", e, n)),
    s
  );
}
const be = Dm("VIDEOJS"),
  Lm = be.createLogger,
  eE = Object.prototype.toString,
  Rm = function (t) {
    return _i(t) ? Object.keys(t) : [];
  };
function Gs(t, e) {
  Rm(t).forEach((i) => e(t[i], i));
}
function Nm(t, e, i = 0) {
  return Rm(t).reduce((s, n) => e(s, t[n], n), i);
}
function _i(t) {
  return !!t && typeof t == "object";
}
function un(t) {
  return _i(t) && eE.call(t) === "[object Object]" && t.constructor === Object;
}
function De(...t) {
  const e = {};
  return (
    t.forEach((i) => {
      i &&
        Gs(i, (s, n) => {
          if (!un(s)) {
            e[n] = s;
            return;
          }
          un(e[n]) || (e[n] = {}), (e[n] = De(e[n], s));
        });
    }),
    e
  );
}
function Io(t, e, i, s = !0) {
  const n = (a) =>
      Object.defineProperty(t, e, { value: a, enumerable: !0, writable: !0 }),
    r = {
      configurable: !0,
      enumerable: !0,
      get() {
        const a = i();
        return n(a), a;
      },
    };
  return s && (r.set = n), Object.defineProperty(t, e, r);
}
var tE = Object.freeze({
  __proto__: null,
  each: Gs,
  reduce: Nm,
  isObject: _i,
  isPlain: un,
  merge: De,
  defineLazyProperty: Io,
});
let gc = !1,
  Mm = null,
  yi = !1,
  Um,
  Fm = !1,
  Ks = !1,
  Xs = !1,
  vi = !1,
  _c = null,
  Oo = null,
  Bm = null,
  Ga = !1,
  Po = !1,
  Ka = !1,
  Do = !1;
const Tr = Boolean(
    vn() &&
      ("ontouchstart" in C ||
        C.navigator.maxTouchPoints ||
        (C.DocumentTouch && C.document instanceof C.DocumentTouch))
  ),
  Rs = C.navigator && C.navigator.userAgentData;
Rs &&
  ((yi = Rs.platform === "Android"),
  (Ks = Boolean(Rs.brands.find((t) => t.brand === "Microsoft Edge"))),
  (Xs = Boolean(Rs.brands.find((t) => t.brand === "Chromium"))),
  (vi = !Ks && Xs),
  (_c = Oo =
    (Rs.brands.find((t) => t.brand === "Chromium") || {}).version || null),
  (Po = Rs.platform === "Windows"));
if (!Xs) {
  const t = (C.navigator && C.navigator.userAgent) || "";
  (gc = /iPod/i.test(t)),
    (Mm = (function () {
      const e = t.match(/OS (\d+)_/i);
      return e && e[1] ? e[1] : null;
    })()),
    (yi = /Android/i.test(t)),
    (Um = (function () {
      const e = t.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
      if (!e) return null;
      const i = e[1] && parseFloat(e[1]),
        s = e[2] && parseFloat(e[2]);
      return i && s ? parseFloat(e[1] + "." + e[2]) : i || null;
    })()),
    (Fm = /Firefox/i.test(t)),
    (Ks = /Edg/i.test(t)),
    (Xs = /Chrome/i.test(t) || /CriOS/i.test(t)),
    (vi = !Ks && Xs),
    (_c = Oo =
      (function () {
        const e = t.match(/(Chrome|CriOS)\/(\d+)/);
        return e && e[2] ? parseFloat(e[2]) : null;
      })()),
    (Bm = (function () {
      const e = /MSIE\s(\d+)\.\d/.exec(t);
      let i = e && parseFloat(e[1]);
      return !i && /Trident\/7.0/i.test(t) && /rv:11.0/.test(t) && (i = 11), i;
    })()),
    (Ga = /Safari/i.test(t) && !vi && !yi && !Ks),
    (Po = /Windows/i.test(t)),
    (Ka = /iPad/i.test(t) || (Ga && Tr && !/iPhone/i.test(t))),
    (Do = /iPhone/i.test(t) && !Ka);
}
const yt = Do || Ka || gc,
  Lo = (Ga || yt) && !vi;
var iE = Object.freeze({
  __proto__: null,
  get IS_IPOD() {
    return gc;
  },
  get IOS_VERSION() {
    return Mm;
  },
  get IS_ANDROID() {
    return yi;
  },
  get ANDROID_VERSION() {
    return Um;
  },
  get IS_FIREFOX() {
    return Fm;
  },
  get IS_EDGE() {
    return Ks;
  },
  get IS_CHROMIUM() {
    return Xs;
  },
  get IS_CHROME() {
    return vi;
  },
  get CHROMIUM_VERSION() {
    return _c;
  },
  get CHROME_VERSION() {
    return Oo;
  },
  get IE_VERSION() {
    return Bm;
  },
  get IS_SAFARI() {
    return Ga;
  },
  get IS_WINDOWS() {
    return Po;
  },
  get IS_IPAD() {
    return Ka;
  },
  get IS_IPHONE() {
    return Do;
  },
  TOUCH_ENABLED: Tr,
  IS_IOS: yt,
  IS_ANY_SAFARI: Lo,
});
function Gh(t) {
  return typeof t == "string" && Boolean(t.trim());
}
function sE(t) {
  if (t.indexOf(" ") >= 0)
    throw new Error("class has illegal whitespace characters");
}
function vn() {
  return K === C.document;
}
function Tn(t) {
  return _i(t) && t.nodeType === 1;
}
function $m() {
  try {
    return C.parent !== C.self;
  } catch {
    return !0;
  }
}
function jm(t) {
  return function (e, i) {
    if (!Gh(e)) return K[t](null);
    Gh(i) && (i = K.querySelector(i));
    const s = Tn(i) ? i : K;
    return s[t] && s[t](e);
  };
}
function ye(t = "div", e = {}, i = {}, s) {
  const n = K.createElement(t);
  return (
    Object.getOwnPropertyNames(e).forEach(function (r) {
      const a = e[r];
      r === "textContent"
        ? Qi(n, a)
        : (n[r] !== a || r === "tabIndex") && (n[r] = a);
    }),
    Object.getOwnPropertyNames(i).forEach(function (r) {
      n.setAttribute(r, i[r]);
    }),
    s && yc(n, s),
    n
  );
}
function Qi(t, e) {
  return (
    typeof t.textContent > "u" ? (t.innerText = e) : (t.textContent = e), t
  );
}
function su(t, e) {
  e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
}
function ir(t, e) {
  return sE(e), t.classList.contains(e);
}
function ys(t, ...e) {
  return (
    t.classList.add(...e.reduce((i, s) => i.concat(s.split(/\s+/)), [])), t
  );
}
function Ro(t, ...e) {
  return t
    ? (t.classList.remove(...e.reduce((i, s) => i.concat(s.split(/\s+/)), [])),
      t)
    : (be.warn("removeClass was called with an element that doesn't exist"),
      null);
}
function Hm(t, e, i) {
  return (
    typeof i == "function" && (i = i(t, e)),
    typeof i != "boolean" && (i = void 0),
    e.split(/\s+/).forEach((s) => t.classList.toggle(s, i)),
    t
  );
}
function Vm(t, e) {
  Object.getOwnPropertyNames(e).forEach(function (i) {
    const s = e[i];
    s === null || typeof s > "u" || s === !1
      ? t.removeAttribute(i)
      : t.setAttribute(i, s === !0 ? "" : s);
  });
}
function Vi(t) {
  const e = {},
    i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
  if (t && t.attributes && t.attributes.length > 0) {
    const s = t.attributes;
    for (let n = s.length - 1; n >= 0; n--) {
      const r = s[n].name;
      let a = s[n].value;
      (typeof t[r] == "boolean" || i.indexOf("," + r + ",") !== -1) &&
        (a = a !== null),
        (e[r] = a);
    }
  }
  return e;
}
function Wm(t, e) {
  return t.getAttribute(e);
}
function cn(t, e, i) {
  t.setAttribute(e, i);
}
function No(t, e) {
  t.removeAttribute(e);
}
function qm() {
  K.body.focus(),
    (K.onselectstart = function () {
      return !1;
    });
}
function zm() {
  K.onselectstart = function () {
    return !0;
  };
}
function dn(t) {
  if (t && t.getBoundingClientRect && t.parentNode) {
    const e = t.getBoundingClientRect(),
      i = {};
    return (
      ["bottom", "height", "left", "right", "top", "width"].forEach((s) => {
        e[s] !== void 0 && (i[s] = e[s]);
      }),
      i.height || (i.height = parseFloat(hn(t, "height"))),
      i.width || (i.width = parseFloat(hn(t, "width"))),
      i
    );
  }
}
function br(t) {
  if (!t || (t && !t.offsetParent))
    return { left: 0, top: 0, width: 0, height: 0 };
  const e = t.offsetWidth,
    i = t.offsetHeight;
  let s = 0,
    n = 0;
  for (; t.offsetParent && t !== K[za.fullscreenElement]; )
    (s += t.offsetLeft), (n += t.offsetTop), (t = t.offsetParent);
  return { left: s, top: n, width: e, height: i };
}
function Mo(t, e) {
  const i = { x: 0, y: 0 };
  if (yt) {
    let p = t;
    for (; p && p.nodeName.toLowerCase() !== "html"; ) {
      const _ = hn(p, "transform");
      if (/^matrix/.test(_)) {
        const v = _.slice(7, -1).split(/,\s/).map(Number);
        (i.x += v[4]), (i.y += v[5]);
      } else if (/^matrix3d/.test(_)) {
        const v = _.slice(9, -1).split(/,\s/).map(Number);
        (i.x += v[12]), (i.y += v[13]);
      }
      p = p.parentNode;
    }
  }
  const s = {},
    n = br(e.target),
    r = br(t),
    a = r.width,
    o = r.height;
  let u = e.offsetY - (r.top - n.top),
    f = e.offsetX - (r.left - n.left);
  return (
    e.changedTouches &&
      ((f = e.changedTouches[0].pageX - r.left),
      (u = e.changedTouches[0].pageY + r.top),
      yt && ((f -= i.x), (u -= i.y))),
    (s.y = 1 - Math.max(0, Math.min(1, u / o))),
    (s.x = Math.max(0, Math.min(1, f / a))),
    s
  );
}
function Gm(t) {
  return _i(t) && t.nodeType === 3;
}
function Uo(t) {
  for (; t.firstChild; ) t.removeChild(t.firstChild);
  return t;
}
function Km(t) {
  return (
    typeof t == "function" && (t = t()),
    (Array.isArray(t) ? t : [t])
      .map((e) => {
        if ((typeof e == "function" && (e = e()), Tn(e) || Gm(e))) return e;
        if (typeof e == "string" && /\S/.test(e)) return K.createTextNode(e);
      })
      .filter((e) => e)
  );
}
function yc(t, e) {
  return Km(e).forEach((i) => t.appendChild(i)), t;
}
function Xm(t, e) {
  return yc(Uo(t), e);
}
function xr(t) {
  return (t.button === void 0 && t.buttons === void 0) ||
    (t.button === 0 && t.buttons === void 0) ||
    (t.type === "mouseup" && t.button === 0 && t.buttons === 0)
    ? !0
    : !(t.button !== 0 || t.buttons !== 1);
}
const Ki = jm("querySelector"),
  Ym = jm("querySelectorAll");
function hn(t, e) {
  if (!t || !e) return "";
  if (typeof C.getComputedStyle == "function") {
    let i;
    try {
      i = C.getComputedStyle(t);
    } catch {
      return "";
    }
    return i ? i.getPropertyValue(e) || i[e] : "";
  }
  return "";
}
var Qm = Object.freeze({
  __proto__: null,
  isReal: vn,
  isEl: Tn,
  isInFrame: $m,
  createEl: ye,
  textContent: Qi,
  prependTo: su,
  hasClass: ir,
  addClass: ys,
  removeClass: Ro,
  toggleClass: Hm,
  setAttributes: Vm,
  getAttributes: Vi,
  getAttribute: Wm,
  setAttribute: cn,
  removeAttribute: No,
  blockTextSelection: qm,
  unblockTextSelection: zm,
  getBoundingClientRect: dn,
  findPosition: br,
  getPointerPosition: Mo,
  isTextNode: Gm,
  emptyEl: Uo,
  normalizeContent: Km,
  appendContent: yc,
  insertContent: Xm,
  isSingleLeftClick: xr,
  $: Ki,
  $$: Ym,
  computedStyle: hn,
});
let Jm = !1,
  nu;
const nE = function () {
  if (nu.options.autoSetup === !1) return;
  const t = Array.prototype.slice.call(K.getElementsByTagName("video")),
    e = Array.prototype.slice.call(K.getElementsByTagName("audio")),
    i = Array.prototype.slice.call(K.getElementsByTagName("video-js")),
    s = t.concat(e, i);
  if (s && s.length > 0)
    for (let n = 0, r = s.length; n < r; n++) {
      const a = s[n];
      if (a && a.getAttribute)
        a.player === void 0 && a.getAttribute("data-setup") !== null && nu(a);
      else {
        ru(1);
        break;
      }
    }
  else Jm || ru(1);
};
function ru(t, e) {
  vn() && (e && (nu = e), C.setTimeout(nE, t));
}
function au() {
  (Jm = !0), C.removeEventListener("load", au);
}
vn() && (K.readyState === "complete" ? au() : C.addEventListener("load", au));
const Zm = function (t) {
    const e = K.createElement("style");
    return (e.className = t), e;
  },
  eg = function (t, e) {
    t.styleSheet ? (t.styleSheet.cssText = e) : (t.textContent = e);
  };
var mt = new WeakMap();
const rE = 3;
let aE = rE;
function Ti() {
  return aE++;
}
function Kh(t, e) {
  if (!mt.has(t)) return;
  const i = mt.get(t);
  i.handlers[e].length === 0 &&
    (delete i.handlers[e],
    t.removeEventListener
      ? t.removeEventListener(e, i.dispatcher, !1)
      : t.detachEvent && t.detachEvent("on" + e, i.dispatcher)),
    Object.getOwnPropertyNames(i.handlers).length <= 0 &&
      (delete i.handlers, delete i.dispatcher, delete i.disabled),
    Object.getOwnPropertyNames(i).length === 0 && mt.delete(t);
}
function vc(t, e, i, s) {
  i.forEach(function (n) {
    t(e, n, s);
  });
}
function Fo(t) {
  if (t.fixed_) return t;
  function e() {
    return !0;
  }
  function i() {
    return !1;
  }
  if (!t || !t.isPropagationStopped || !t.isImmediatePropagationStopped) {
    const s = t || C.event;
    t = {};
    for (const n in s)
      n !== "layerX" &&
        n !== "layerY" &&
        n !== "keyLocation" &&
        n !== "webkitMovementX" &&
        n !== "webkitMovementY" &&
        n !== "path" &&
        ((n === "returnValue" && s.preventDefault) || (t[n] = s[n]));
    if (
      (t.target || (t.target = t.srcElement || K),
      t.relatedTarget ||
        (t.relatedTarget =
          t.fromElement === t.target ? t.toElement : t.fromElement),
      (t.preventDefault = function () {
        s.preventDefault && s.preventDefault(),
          (t.returnValue = !1),
          (s.returnValue = !1),
          (t.defaultPrevented = !0);
      }),
      (t.defaultPrevented = !1),
      (t.stopPropagation = function () {
        s.stopPropagation && s.stopPropagation(),
          (t.cancelBubble = !0),
          (s.cancelBubble = !0),
          (t.isPropagationStopped = e);
      }),
      (t.isPropagationStopped = i),
      (t.stopImmediatePropagation = function () {
        s.stopImmediatePropagation && s.stopImmediatePropagation(),
          (t.isImmediatePropagationStopped = e),
          t.stopPropagation();
      }),
      (t.isImmediatePropagationStopped = i),
      t.clientX !== null && t.clientX !== void 0)
    ) {
      const n = K.documentElement,
        r = K.body;
      (t.pageX =
        t.clientX +
        ((n && n.scrollLeft) || (r && r.scrollLeft) || 0) -
        ((n && n.clientLeft) || (r && r.clientLeft) || 0)),
        (t.pageY =
          t.clientY +
          ((n && n.scrollTop) || (r && r.scrollTop) || 0) -
          ((n && n.clientTop) || (r && r.clientTop) || 0));
    }
    (t.which = t.charCode || t.keyCode),
      t.button !== null &&
        t.button !== void 0 &&
        (t.button = t.button & 1 ? 0 : t.button & 4 ? 1 : t.button & 2 ? 2 : 0);
  }
  return (t.fixed_ = !0), t;
}
let _a;
const oE = function () {
    if (typeof _a != "boolean") {
      _a = !1;
      try {
        const t = Object.defineProperty({}, "passive", {
          get() {
            _a = !0;
          },
        });
        C.addEventListener("test", null, t),
          C.removeEventListener("test", null, t);
      } catch {}
    }
    return _a;
  },
  lE = ["touchstart", "touchmove"];
function Rt(t, e, i) {
  if (Array.isArray(e)) return vc(Rt, t, e, i);
  mt.has(t) || mt.set(t, {});
  const s = mt.get(t);
  if (
    (s.handlers || (s.handlers = {}),
    s.handlers[e] || (s.handlers[e] = []),
    i.guid || (i.guid = Ti()),
    s.handlers[e].push(i),
    s.dispatcher ||
      ((s.disabled = !1),
      (s.dispatcher = function (n, r) {
        if (s.disabled) return;
        n = Fo(n);
        const a = s.handlers[n.type];
        if (a) {
          const o = a.slice(0);
          for (
            let u = 0, f = o.length;
            u < f && !n.isImmediatePropagationStopped();
            u++
          )
            try {
              o[u].call(t, n, r);
            } catch (p) {
              be.error(p);
            }
        }
      })),
    s.handlers[e].length === 1)
  )
    if (t.addEventListener) {
      let n = !1;
      oE() && lE.indexOf(e) > -1 && (n = { passive: !0 }),
        t.addEventListener(e, s.dispatcher, n);
    } else t.attachEvent && t.attachEvent("on" + e, s.dispatcher);
}
function rt(t, e, i) {
  if (!mt.has(t)) return;
  const s = mt.get(t);
  if (!s.handlers) return;
  if (Array.isArray(e)) return vc(rt, t, e, i);
  const n = function (a, o) {
    (s.handlers[o] = []), Kh(a, o);
  };
  if (e === void 0) {
    for (const a in s.handlers)
      Object.prototype.hasOwnProperty.call(s.handlers || {}, a) && n(t, a);
    return;
  }
  const r = s.handlers[e];
  if (r) {
    if (!i) {
      n(t, e);
      return;
    }
    if (i.guid)
      for (let a = 0; a < r.length; a++)
        r[a].guid === i.guid && r.splice(a--, 1);
    Kh(t, e);
  }
}
function bn(t, e, i) {
  const s = mt.has(t) ? mt.get(t) : {},
    n = t.parentNode || t.ownerDocument;
  if (
    (typeof e == "string"
      ? (e = { type: e, target: t })
      : e.target || (e.target = t),
    (e = Fo(e)),
    s.dispatcher && s.dispatcher.call(t, e, i),
    n && !e.isPropagationStopped() && e.bubbles === !0)
  )
    bn.call(null, n, e, i);
  else if (!n && !e.defaultPrevented && e.target && e.target[e.type]) {
    mt.has(e.target) || mt.set(e.target, {});
    const r = mt.get(e.target);
    e.target[e.type] &&
      ((r.disabled = !0),
      typeof e.target[e.type] == "function" && e.target[e.type](),
      (r.disabled = !1));
  }
  return !e.defaultPrevented;
}
function Bo(t, e, i) {
  if (Array.isArray(e)) return vc(Bo, t, e, i);
  const s = function () {
    rt(t, e, s), i.apply(this, arguments);
  };
  (s.guid = i.guid = i.guid || Ti()), Rt(t, e, s);
}
function Tc(t, e, i) {
  const s = function () {
    rt(t, e, s), i.apply(this, arguments);
  };
  (s.guid = i.guid = i.guid || Ti()), Rt(t, e, s);
}
var uE = Object.freeze({
  __proto__: null,
  fixEvent: Fo,
  on: Rt,
  off: rt,
  trigger: bn,
  one: Bo,
  any: Tc,
});
const jt = 30,
  Le = function (t, e, i) {
    e.guid || (e.guid = Ti());
    const s = e.bind(t);
    return (s.guid = i ? i + "_" + e.guid : e.guid), s;
  },
  bi = function (t, e) {
    let i = C.performance.now();
    return function (...n) {
      const r = C.performance.now();
      r - i >= e && (t(...n), (i = r));
    };
  },
  tg = function (t, e, i, s = C) {
    let n;
    const r = () => {
        s.clearTimeout(n), (n = null);
      },
      a = function () {
        const o = this,
          u = arguments;
        let f = function () {
          (n = null), (f = null), i || t.apply(o, u);
        };
        !n && i && t.apply(o, u), s.clearTimeout(n), (n = s.setTimeout(f, e));
      };
    return (a.cancel = r), a;
  };
var cE = Object.freeze({
  __proto__: null,
  UPDATE_REFRESH_INTERVAL: jt,
  bind_: Le,
  throttle: bi,
  debounce: tg,
});
let Hn;
class Ht {
  on(e, i) {
    const s = this.addEventListener;
    (this.addEventListener = () => {}),
      Rt(this, e, i),
      (this.addEventListener = s);
  }
  off(e, i) {
    rt(this, e, i);
  }
  one(e, i) {
    const s = this.addEventListener;
    (this.addEventListener = () => {}),
      Bo(this, e, i),
      (this.addEventListener = s);
  }
  any(e, i) {
    const s = this.addEventListener;
    (this.addEventListener = () => {}),
      Tc(this, e, i),
      (this.addEventListener = s);
  }
  trigger(e) {
    const i = e.type || e;
    typeof e == "string" && (e = { type: i }),
      (e = Fo(e)),
      this.allowedEvents_[i] && this["on" + i] && this["on" + i](e),
      bn(this, e);
  }
  queueTrigger(e) {
    Hn || (Hn = new Map());
    const i = e.type || e;
    let s = Hn.get(this);
    s || ((s = new Map()), Hn.set(this, s));
    const n = s.get(i);
    s.delete(i), C.clearTimeout(n);
    const r = C.setTimeout(() => {
      s.delete(i),
        s.size === 0 && ((s = null), Hn.delete(this)),
        this.trigger(e);
    }, 0);
    s.set(i, r);
  }
}
Ht.prototype.allowedEvents_ = {};
Ht.prototype.addEventListener = Ht.prototype.on;
Ht.prototype.removeEventListener = Ht.prototype.off;
Ht.prototype.dispatchEvent = Ht.prototype.trigger;
const $o = (t) =>
    typeof t.name == "function"
      ? t.name()
      : typeof t.name == "string"
      ? t.name
      : t.name_
      ? t.name_
      : t.constructor && t.constructor.name
      ? t.constructor.name
      : typeof t,
  Oi = (t) =>
    t instanceof Ht ||
    (!!t.eventBusEl_ &&
      ["on", "one", "off", "trigger"].every((e) => typeof t[e] == "function")),
  dE = (t, e) => {
    Oi(t)
      ? e()
      : (t.eventedCallbacks || (t.eventedCallbacks = []),
        t.eventedCallbacks.push(e));
  },
  ou = (t) =>
    (typeof t == "string" && /\S/.test(t)) || (Array.isArray(t) && !!t.length),
  Xa = (t, e, i) => {
    if (!t || (!t.nodeName && !Oi(t)))
      throw new Error(
        `Invalid target for ${$o(
          e
        )}#${i}; must be a DOM node or evented object.`
      );
  },
  ig = (t, e, i) => {
    if (!ou(t))
      throw new Error(
        `Invalid event type for ${$o(
          e
        )}#${i}; must be a non-empty string or array.`
      );
  },
  sg = (t, e, i) => {
    if (typeof t != "function")
      throw new Error(
        `Invalid listener for ${$o(e)}#${i}; must be a function.`
      );
  },
  Tl = (t, e, i) => {
    const s = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_;
    let n, r, a;
    return (
      s
        ? ((n = t.eventBusEl_), e.length >= 3 && e.shift(), ([r, a] = e))
        : ([n, r, a] = e),
      Xa(n, t, i),
      ig(r, t, i),
      sg(a, t, i),
      (a = Le(t, a)),
      { isTargetingSelf: s, target: n, type: r, listener: a }
    );
  },
  ls = (t, e, i, s) => {
    Xa(t, t, e), t.nodeName ? uE[e](t, i, s) : t[e](i, s);
  },
  hE = {
    on(...t) {
      const {
        isTargetingSelf: e,
        target: i,
        type: s,
        listener: n,
      } = Tl(this, t, "on");
      if ((ls(i, "on", s, n), !e)) {
        const r = () => this.off(i, s, n);
        r.guid = n.guid;
        const a = () => this.off("dispose", r);
        (a.guid = n.guid),
          ls(this, "on", "dispose", r),
          ls(i, "on", "dispose", a);
      }
    },
    one(...t) {
      const {
        isTargetingSelf: e,
        target: i,
        type: s,
        listener: n,
      } = Tl(this, t, "one");
      if (e) ls(i, "one", s, n);
      else {
        const r = (...a) => {
          this.off(i, s, r), n.apply(null, a);
        };
        (r.guid = n.guid), ls(i, "one", s, r);
      }
    },
    any(...t) {
      const {
        isTargetingSelf: e,
        target: i,
        type: s,
        listener: n,
      } = Tl(this, t, "any");
      if (e) ls(i, "any", s, n);
      else {
        const r = (...a) => {
          this.off(i, s, r), n.apply(null, a);
        };
        (r.guid = n.guid), ls(i, "any", s, r);
      }
    },
    off(t, e, i) {
      if (!t || ou(t)) rt(this.eventBusEl_, t, e);
      else {
        const s = t,
          n = e;
        Xa(s, this, "off"),
          ig(n, this, "off"),
          sg(i, this, "off"),
          (i = Le(this, i)),
          this.off("dispose", i),
          s.nodeName
            ? (rt(s, n, i), rt(s, "dispose", i))
            : Oi(s) && (s.off(n, i), s.off("dispose", i));
      }
    },
    trigger(t, e) {
      Xa(this.eventBusEl_, this, "trigger");
      const i = t && typeof t != "string" ? t.type : t;
      if (!ou(i))
        throw new Error(
          `Invalid event type for ${$o(
            this
          )}#trigger; must be a non-empty string or object with a type key that has a non-empty value.`
        );
      return bn(this.eventBusEl_, t, e);
    },
  };
function bc(t, e = {}) {
  const { eventBusKey: i } = e;
  if (i) {
    if (!t[i].nodeName)
      throw new Error(`The eventBusKey "${i}" does not refer to an element.`);
    t.eventBusEl_ = t[i];
  } else t.eventBusEl_ = ye("span", { className: "vjs-event-bus" });
  return (
    Object.assign(t, hE),
    t.eventedCallbacks &&
      t.eventedCallbacks.forEach((s) => {
        s();
      }),
    t.on("dispose", () => {
      t.off(),
        [t, t.el_, t.eventBusEl_].forEach(function (s) {
          s && mt.has(s) && mt.delete(s);
        }),
        C.setTimeout(() => {
          t.eventBusEl_ = null;
        }, 0);
    }),
    t
  );
}
const fE = {
  state: {},
  setState(t) {
    typeof t == "function" && (t = t());
    let e;
    return (
      Gs(t, (i, s) => {
        this.state[s] !== i &&
          ((e = e || {}), (e[s] = { from: this.state[s], to: i })),
          (this.state[s] = i);
      }),
      e && Oi(this) && this.trigger({ changes: e, type: "statechanged" }),
      e
    );
  },
};
function ng(t, e) {
  return (
    Object.assign(t, fE),
    (t.state = Object.assign({}, t.state, e)),
    typeof t.handleStateChanged == "function" &&
      Oi(t) &&
      t.on("statechanged", t.handleStateChanged),
    t
  );
}
const sr = function (t) {
    return typeof t != "string" ? t : t.replace(/./, (e) => e.toLowerCase());
  },
  je = function (t) {
    return typeof t != "string" ? t : t.replace(/./, (e) => e.toUpperCase());
  },
  rg = function (t, e) {
    return je(t) === je(e);
  };
var pE = Object.freeze({
  __proto__: null,
  toLowerCase: sr,
  toTitleCase: je,
  titleCaseEquals: rg,
});
class B {
  constructor(e, i, s) {
    if (
      (!e && this.play ? (this.player_ = e = this) : (this.player_ = e),
      (this.isDisposed_ = !1),
      (this.parentComponent_ = null),
      (this.options_ = De({}, this.options_)),
      (i = this.options_ = De(this.options_, i)),
      (this.id_ = i.id || (i.el && i.el.id)),
      !this.id_)
    ) {
      const n = (e && e.id && e.id()) || "no_player";
      this.id_ = `${n}_component_${Ti()}`;
    }
    (this.name_ = i.name || null),
      i.el
        ? (this.el_ = i.el)
        : i.createEl !== !1 && (this.el_ = this.createEl()),
      i.className &&
        this.el_ &&
        i.className.split(" ").forEach((n) => this.addClass(n)),
      i.evented !== !1 &&
        (bc(this, { eventBusKey: this.el_ ? "el_" : null }),
        (this.handleLanguagechange = this.handleLanguagechange.bind(this)),
        this.on(this.player_, "languagechange", this.handleLanguagechange)),
      ng(this, this.constructor.defaultState),
      (this.children_ = []),
      (this.childIndex_ = {}),
      (this.childNameIndex_ = {}),
      (this.setTimeoutIds_ = new Set()),
      (this.setIntervalIds_ = new Set()),
      (this.rafIds_ = new Set()),
      (this.namedRafs_ = new Map()),
      (this.clearingTimersOnDispose_ = !1),
      i.initChildren !== !1 && this.initChildren(),
      this.ready(s),
      i.reportTouchActivity !== !1 && this.enableTouchActivity();
  }
  dispose(e = {}) {
    if (!this.isDisposed_) {
      if (
        (this.readyQueue_ && (this.readyQueue_.length = 0),
        this.trigger({ type: "dispose", bubbles: !1 }),
        (this.isDisposed_ = !0),
        this.children_)
      )
        for (let i = this.children_.length - 1; i >= 0; i--)
          this.children_[i].dispose && this.children_[i].dispose();
      (this.children_ = null),
        (this.childIndex_ = null),
        (this.childNameIndex_ = null),
        (this.parentComponent_ = null),
        this.el_ &&
          (this.el_.parentNode &&
            (e.restoreEl
              ? this.el_.parentNode.replaceChild(e.restoreEl, this.el_)
              : this.el_.parentNode.removeChild(this.el_)),
          (this.el_ = null)),
        (this.player_ = null);
    }
  }
  isDisposed() {
    return Boolean(this.isDisposed_);
  }
  player() {
    return this.player_;
  }
  options(e) {
    return e
      ? ((this.options_ = De(this.options_, e)), this.options_)
      : this.options_;
  }
  el() {
    return this.el_;
  }
  createEl(e, i, s) {
    return ye(e, i, s);
  }
  localize(e, i, s = e) {
    const n = this.player_.language && this.player_.language(),
      r = this.player_.languages && this.player_.languages(),
      a = r && r[n],
      o = n && n.split("-")[0],
      u = r && r[o];
    let f = s;
    return (
      a && a[e] ? (f = a[e]) : u && u[e] && (f = u[e]),
      i &&
        (f = f.replace(/\{(\d+)\}/g, function (p, _) {
          const v = i[_ - 1];
          let y = v;
          return typeof v > "u" && (y = p), y;
        })),
      f
    );
  }
  handleLanguagechange() {}
  contentEl() {
    return this.contentEl_ || this.el_;
  }
  id() {
    return this.id_;
  }
  name() {
    return this.name_;
  }
  children() {
    return this.children_;
  }
  getChildById(e) {
    return this.childIndex_[e];
  }
  getChild(e) {
    if (e) return this.childNameIndex_[e];
  }
  getDescendant(...e) {
    e = e.reduce((s, n) => s.concat(n), []);
    let i = this;
    for (let s = 0; s < e.length; s++)
      if (((i = i.getChild(e[s])), !i || !i.getChild)) return;
    return i;
  }
  addChild(e, i = {}, s = this.children_.length) {
    let n, r;
    if (typeof e == "string") {
      r = je(e);
      const a = i.componentClass || r;
      i.name = r;
      const o = B.getComponent(a);
      if (!o) throw new Error(`Component ${a} does not exist`);
      if (typeof o != "function") return null;
      n = new o(this.player_ || this, i);
    } else n = e;
    if (
      (n.parentComponent_ && n.parentComponent_.removeChild(n),
      this.children_.splice(s, 0, n),
      (n.parentComponent_ = this),
      typeof n.id == "function" && (this.childIndex_[n.id()] = n),
      (r = r || (n.name && je(n.name()))),
      r && ((this.childNameIndex_[r] = n), (this.childNameIndex_[sr(r)] = n)),
      typeof n.el == "function" && n.el())
    ) {
      let a = null;
      this.children_[s + 1] &&
        (this.children_[s + 1].el_
          ? (a = this.children_[s + 1].el_)
          : Tn(this.children_[s + 1]) && (a = this.children_[s + 1])),
        this.contentEl().insertBefore(n.el(), a);
    }
    return n;
  }
  removeChild(e) {
    if ((typeof e == "string" && (e = this.getChild(e)), !e || !this.children_))
      return;
    let i = !1;
    for (let n = this.children_.length - 1; n >= 0; n--)
      if (this.children_[n] === e) {
        (i = !0), this.children_.splice(n, 1);
        break;
      }
    if (!i) return;
    (e.parentComponent_ = null),
      (this.childIndex_[e.id()] = null),
      (this.childNameIndex_[je(e.name())] = null),
      (this.childNameIndex_[sr(e.name())] = null);
    const s = e.el();
    s &&
      s.parentNode === this.contentEl() &&
      this.contentEl().removeChild(e.el());
  }
  initChildren() {
    const e = this.options_.children;
    if (e) {
      const i = this.options_,
        s = (a) => {
          const o = a.name;
          let u = a.opts;
          if ((i[o] !== void 0 && (u = i[o]), u === !1)) return;
          u === !0 && (u = {}), (u.playerOptions = this.options_.playerOptions);
          const f = this.addChild(o, u);
          f && (this[o] = f);
        };
      let n;
      const r = B.getComponent("Tech");
      Array.isArray(e) ? (n = e) : (n = Object.keys(e)),
        n
          .concat(
            Object.keys(this.options_).filter(function (a) {
              return !n.some(function (o) {
                return typeof o == "string" ? a === o : a === o.name;
              });
            })
          )
          .map((a) => {
            let o, u;
            return (
              typeof a == "string"
                ? ((o = a), (u = e[o] || this.options_[o] || {}))
                : ((o = a.name), (u = a)),
              { name: o, opts: u }
            );
          })
          .filter((a) => {
            const o = B.getComponent(a.opts.componentClass || je(a.name));
            return o && !r.isTech(o);
          })
          .forEach(s);
    }
  }
  buildCSSClass() {
    return "";
  }
  ready(e, i = !1) {
    if (e) {
      if (!this.isReady_) {
        (this.readyQueue_ = this.readyQueue_ || []), this.readyQueue_.push(e);
        return;
      }
      i ? e.call(this) : this.setTimeout(e, 1);
    }
  }
  triggerReady() {
    (this.isReady_ = !0),
      this.setTimeout(function () {
        const e = this.readyQueue_;
        (this.readyQueue_ = []),
          e &&
            e.length > 0 &&
            e.forEach(function (i) {
              i.call(this);
            }, this),
          this.trigger("ready");
      }, 1);
  }
  $(e, i) {
    return Ki(e, i || this.contentEl());
  }
  $$(e, i) {
    return Ym(e, i || this.contentEl());
  }
  hasClass(e) {
    return ir(this.el_, e);
  }
  addClass(...e) {
    ys(this.el_, ...e);
  }
  removeClass(...e) {
    Ro(this.el_, ...e);
  }
  toggleClass(e, i) {
    Hm(this.el_, e, i);
  }
  show() {
    this.removeClass("vjs-hidden");
  }
  hide() {
    this.addClass("vjs-hidden");
  }
  lockShowing() {
    this.addClass("vjs-lock-showing");
  }
  unlockShowing() {
    this.removeClass("vjs-lock-showing");
  }
  getAttribute(e) {
    return Wm(this.el_, e);
  }
  setAttribute(e, i) {
    cn(this.el_, e, i);
  }
  removeAttribute(e) {
    No(this.el_, e);
  }
  width(e, i) {
    return this.dimension("width", e, i);
  }
  height(e, i) {
    return this.dimension("height", e, i);
  }
  dimensions(e, i) {
    this.width(e, !0), this.height(i);
  }
  dimension(e, i, s) {
    if (i !== void 0) {
      (i === null || i !== i) && (i = 0),
        ("" + i).indexOf("%") !== -1 || ("" + i).indexOf("px") !== -1
          ? (this.el_.style[e] = i)
          : i === "auto"
          ? (this.el_.style[e] = "")
          : (this.el_.style[e] = i + "px"),
        s || this.trigger("componentresize");
      return;
    }
    if (!this.el_) return 0;
    const n = this.el_.style[e],
      r = n.indexOf("px");
    return parseInt(r !== -1 ? n.slice(0, r) : this.el_["offset" + je(e)], 10);
  }
  currentDimension(e) {
    let i = 0;
    if (e !== "width" && e !== "height")
      throw new Error("currentDimension only accepts width or height value");
    if (((i = hn(this.el_, e)), (i = parseFloat(i)), i === 0 || isNaN(i))) {
      const s = `offset${je(e)}`;
      i = this.el_[s];
    }
    return i;
  }
  currentDimensions() {
    return {
      width: this.currentDimension("width"),
      height: this.currentDimension("height"),
    };
  }
  currentWidth() {
    return this.currentDimension("width");
  }
  currentHeight() {
    return this.currentDimension("height");
  }
  focus() {
    this.el_.focus();
  }
  blur() {
    this.el_.blur();
  }
  handleKeyDown(e) {
    this.player_ &&
      (he.isEventKey(e, "Tab") || e.stopPropagation(),
      this.player_.handleKeyDown(e));
  }
  handleKeyPress(e) {
    this.handleKeyDown(e);
  }
  emitTapEvents() {
    let e = 0,
      i = null;
    const s = 10,
      n = 200;
    let r;
    this.on("touchstart", function (o) {
      o.touches.length === 1 &&
        ((i = { pageX: o.touches[0].pageX, pageY: o.touches[0].pageY }),
        (e = C.performance.now()),
        (r = !0));
    }),
      this.on("touchmove", function (o) {
        if (o.touches.length > 1) r = !1;
        else if (i) {
          const u = o.touches[0].pageX - i.pageX,
            f = o.touches[0].pageY - i.pageY;
          Math.sqrt(u * u + f * f) > s && (r = !1);
        }
      });
    const a = function () {
      r = !1;
    };
    this.on("touchleave", a),
      this.on("touchcancel", a),
      this.on("touchend", function (o) {
        (i = null),
          r === !0 &&
            C.performance.now() - e < n &&
            (o.preventDefault(), this.trigger("tap"));
      });
  }
  enableTouchActivity() {
    if (!this.player() || !this.player().reportUserActivity) return;
    const e = Le(this.player(), this.player().reportUserActivity);
    let i;
    this.on("touchstart", function () {
      e(), this.clearInterval(i), (i = this.setInterval(e, 250));
    });
    const s = function (n) {
      e(), this.clearInterval(i);
    };
    this.on("touchmove", e), this.on("touchend", s), this.on("touchcancel", s);
  }
  setTimeout(e, i) {
    var s;
    return (
      (e = Le(this, e)),
      this.clearTimersOnDispose_(),
      (s = C.setTimeout(() => {
        this.setTimeoutIds_.has(s) && this.setTimeoutIds_.delete(s), e();
      }, i)),
      this.setTimeoutIds_.add(s),
      s
    );
  }
  clearTimeout(e) {
    return (
      this.setTimeoutIds_.has(e) &&
        (this.setTimeoutIds_.delete(e), C.clearTimeout(e)),
      e
    );
  }
  setInterval(e, i) {
    (e = Le(this, e)), this.clearTimersOnDispose_();
    const s = C.setInterval(e, i);
    return this.setIntervalIds_.add(s), s;
  }
  clearInterval(e) {
    return (
      this.setIntervalIds_.has(e) &&
        (this.setIntervalIds_.delete(e), C.clearInterval(e)),
      e
    );
  }
  requestAnimationFrame(e) {
    this.clearTimersOnDispose_();
    var i;
    return (
      (e = Le(this, e)),
      (i = C.requestAnimationFrame(() => {
        this.rafIds_.has(i) && this.rafIds_.delete(i), e();
      })),
      this.rafIds_.add(i),
      i
    );
  }
  requestNamedAnimationFrame(e, i) {
    if (this.namedRafs_.has(e)) return;
    this.clearTimersOnDispose_(), (i = Le(this, i));
    const s = this.requestAnimationFrame(() => {
      i(), this.namedRafs_.has(e) && this.namedRafs_.delete(e);
    });
    return this.namedRafs_.set(e, s), e;
  }
  cancelNamedAnimationFrame(e) {
    this.namedRafs_.has(e) &&
      (this.cancelAnimationFrame(this.namedRafs_.get(e)),
      this.namedRafs_.delete(e));
  }
  cancelAnimationFrame(e) {
    return (
      this.rafIds_.has(e) &&
        (this.rafIds_.delete(e), C.cancelAnimationFrame(e)),
      e
    );
  }
  clearTimersOnDispose_() {
    this.clearingTimersOnDispose_ ||
      ((this.clearingTimersOnDispose_ = !0),
      this.one("dispose", () => {
        [
          ["namedRafs_", "cancelNamedAnimationFrame"],
          ["rafIds_", "cancelAnimationFrame"],
          ["setTimeoutIds_", "clearTimeout"],
          ["setIntervalIds_", "clearInterval"],
        ].forEach(([e, i]) => {
          this[e].forEach((s, n) => this[i](n));
        }),
          (this.clearingTimersOnDispose_ = !1);
      }));
  }
  static registerComponent(e, i) {
    if (typeof e != "string" || !e)
      throw new Error(
        `Illegal component name, "${e}"; must be a non-empty string.`
      );
    const s = B.getComponent("Tech"),
      n = s && s.isTech(i),
      r = B === i || B.prototype.isPrototypeOf(i.prototype);
    if (n || !r) {
      let o;
      throw (
        (n
          ? (o = "techs must be registered using Tech.registerTech()")
          : (o = "must be a Component subclass"),
        new Error(`Illegal component, "${e}"; ${o}.`))
      );
    }
    (e = je(e)), B.components_ || (B.components_ = {});
    const a = B.getComponent("Player");
    if (e === "Player" && a && a.players) {
      const o = a.players,
        u = Object.keys(o);
      if (o && u.length > 0 && u.map((f) => o[f]).every(Boolean))
        throw new Error(
          "Can not register Player component after player has been created."
        );
    }
    return (B.components_[e] = i), (B.components_[sr(e)] = i), i;
  }
  static getComponent(e) {
    if (!(!e || !B.components_)) return B.components_[e];
  }
}
B.registerComponent("Component", B);
function mE(t, e, i) {
  if (typeof e != "number" || e < 0 || e > i)
    throw new Error(
      `Failed to execute '${t}' on 'TimeRanges': The index provided (${e}) is non-numeric or out of bounds (0-${i}).`
    );
}
function Xh(t, e, i, s) {
  return mE(t, s, i.length - 1), i[s][e];
}
function bl(t) {
  let e;
  return (
    t === void 0 || t.length === 0
      ? (e = {
          length: 0,
          start() {
            throw new Error("This TimeRanges object is empty");
          },
          end() {
            throw new Error("This TimeRanges object is empty");
          },
        })
      : (e = {
          length: t.length,
          start: Xh.bind(null, "start", 0, t),
          end: Xh.bind(null, "end", 1, t),
        }),
    C.Symbol &&
      C.Symbol.iterator &&
      (e[C.Symbol.iterator] = () => (t || []).values()),
    e
  );
}
function gi(t, e) {
  return Array.isArray(t)
    ? bl(t)
    : t === void 0 || e === void 0
    ? bl()
    : bl([[t, e]]);
}
const ag = function (t, e) {
  t = t < 0 ? 0 : t;
  let i = Math.floor(t % 60),
    s = Math.floor((t / 60) % 60),
    n = Math.floor(t / 3600);
  const r = Math.floor((e / 60) % 60),
    a = Math.floor(e / 3600);
  return (
    (isNaN(t) || t === 1 / 0) && (n = s = i = "-"),
    (n = n > 0 || a > 0 ? n + ":" : ""),
    (s = ((n || r >= 10) && s < 10 ? "0" + s : s) + ":"),
    (i = i < 10 ? "0" + i : i),
    n + s + i
  );
};
let xc = ag;
function og(t) {
  xc = t;
}
function lg() {
  xc = ag;
}
function bs(t, e = t) {
  return xc(t, e);
}
var gE = Object.freeze({
  __proto__: null,
  createTimeRanges: gi,
  createTimeRange: gi,
  setFormatTime: og,
  resetFormatTime: lg,
  formatTime: bs,
});
function ug(t, e) {
  let i = 0,
    s,
    n;
  if (!e) return 0;
  (!t || !t.length) && (t = gi(0, 0));
  for (let r = 0; r < t.length; r++)
    (s = t.start(r)), (n = t.end(r)), n > e && (n = e), (i += n - s);
  return i / e;
}
function gt(t) {
  if (t instanceof gt) return t;
  typeof t == "number"
    ? (this.code = t)
    : typeof t == "string"
    ? (this.message = t)
    : _i(t) &&
      (typeof t.code == "number" && (this.code = t.code),
      Object.assign(this, t)),
    this.message || (this.message = gt.defaultMessages[this.code] || "");
}
gt.prototype.code = 0;
gt.prototype.message = "";
gt.prototype.status = null;
gt.errorTypes = [
  "MEDIA_ERR_CUSTOM",
  "MEDIA_ERR_ABORTED",
  "MEDIA_ERR_NETWORK",
  "MEDIA_ERR_DECODE",
  "MEDIA_ERR_SRC_NOT_SUPPORTED",
  "MEDIA_ERR_ENCRYPTED",
];
gt.defaultMessages = {
  1: "You aborted the media playback",
  2: "A network error caused the media download to fail part-way.",
  3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
  4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
  5: "The media is encrypted and we do not have the keys to decrypt it.",
};
for (let t = 0; t < gt.errorTypes.length; t++)
  (gt[gt.errorTypes[t]] = t), (gt.prototype[gt.errorTypes[t]] = t);
function nr(t) {
  return t != null && typeof t.then == "function";
}
function ci(t) {
  nr(t) && t.then(null, (e) => {});
}
const lu = function (t) {
    return [
      "kind",
      "label",
      "language",
      "id",
      "inBandMetadataTrackDispatchType",
      "mode",
      "src",
    ].reduce((i, s, n) => (t[s] && (i[s] = t[s]), i), {
      cues:
        t.cues &&
        Array.prototype.map.call(t.cues, function (i) {
          return {
            startTime: i.startTime,
            endTime: i.endTime,
            text: i.text,
            id: i.id,
          };
        }),
    });
  },
  _E = function (t) {
    const e = t.$$("track"),
      i = Array.prototype.map.call(e, (n) => n.track);
    return Array.prototype.map
      .call(e, function (n) {
        const r = lu(n.track);
        return n.src && (r.src = n.src), r;
      })
      .concat(
        Array.prototype.filter
          .call(t.textTracks(), function (n) {
            return i.indexOf(n) === -1;
          })
          .map(lu)
      );
  },
  yE = function (t, e) {
    return (
      t.forEach(function (i) {
        const s = e.addRemoteTextTrack(i).track;
        !i.src && i.cues && i.cues.forEach((n) => s.addCue(n));
      }),
      e.textTracks()
    );
  };
var Yh = { textTracksToJson: _E, jsonToTextTracks: yE, trackToJson_: lu };
const xl = "vjs-modal-dialog";
class xn extends B {
  constructor(e, i) {
    super(e, i),
      (this.handleKeyDown_ = (s) => this.handleKeyDown(s)),
      (this.close_ = (s) => this.close(s)),
      (this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1),
      this.closeable(!this.options_.uncloseable),
      this.content(this.options_.content),
      (this.contentEl_ = ye(
        "div",
        { className: `${xl}-content` },
        { role: "document" }
      )),
      (this.descEl_ = ye("p", {
        className: `${xl}-description vjs-control-text`,
        id: this.el().getAttribute("aria-describedby"),
      })),
      Qi(this.descEl_, this.description()),
      this.el_.appendChild(this.descEl_),
      this.el_.appendChild(this.contentEl_);
  }
  createEl() {
    return super.createEl(
      "div",
      { className: this.buildCSSClass(), tabIndex: -1 },
      {
        "aria-describedby": `${this.id()}_description`,
        "aria-hidden": "true",
        "aria-label": this.label(),
        role: "dialog",
      }
    );
  }
  dispose() {
    (this.contentEl_ = null),
      (this.descEl_ = null),
      (this.previouslyActiveEl_ = null),
      super.dispose();
  }
  buildCSSClass() {
    return `${xl} vjs-hidden ${super.buildCSSClass()}`;
  }
  label() {
    return this.localize(this.options_.label || "Modal Window");
  }
  description() {
    let e =
      this.options_.description || this.localize("This is a modal window.");
    return (
      this.closeable() &&
        (e +=
          " " +
          this.localize(
            "This modal can be closed by pressing the Escape key or activating the close button."
          )),
      e
    );
  }
  open() {
    if (!this.opened_) {
      const e = this.player();
      this.trigger("beforemodalopen"),
        (this.opened_ = !0),
        (this.options_.fillAlways ||
          (!this.hasBeenOpened_ && !this.hasBeenFilled_)) &&
          this.fill(),
        (this.wasPlaying_ = !e.paused()),
        this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
        this.on("keydown", this.handleKeyDown_),
        (this.hadControls_ = e.controls()),
        e.controls(!1),
        this.show(),
        this.conditionalFocus_(),
        this.el().setAttribute("aria-hidden", "false"),
        this.trigger("modalopen"),
        (this.hasBeenOpened_ = !0);
    }
  }
  opened(e) {
    return typeof e == "boolean" && this[e ? "open" : "close"](), this.opened_;
  }
  close() {
    if (!this.opened_) return;
    const e = this.player();
    this.trigger("beforemodalclose"),
      (this.opened_ = !1),
      this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
      this.off("keydown", this.handleKeyDown_),
      this.hadControls_ && e.controls(!0),
      this.hide(),
      this.el().setAttribute("aria-hidden", "true"),
      this.trigger("modalclose"),
      this.conditionalBlur_(),
      this.options_.temporary && this.dispose();
  }
  closeable(e) {
    if (typeof e == "boolean") {
      const i = (this.closeable_ = !!e);
      let s = this.getChild("closeButton");
      if (i && !s) {
        const n = this.contentEl_;
        (this.contentEl_ = this.el_),
          (s = this.addChild("closeButton", {
            controlText: "Close Modal Dialog",
          })),
          (this.contentEl_ = n),
          this.on(s, "close", this.close_);
      }
      !i &&
        s &&
        (this.off(s, "close", this.close_), this.removeChild(s), s.dispose());
    }
    return this.closeable_;
  }
  fill() {
    this.fillWith(this.content());
  }
  fillWith(e) {
    const i = this.contentEl(),
      s = i.parentNode,
      n = i.nextSibling;
    this.trigger("beforemodalfill"),
      (this.hasBeenFilled_ = !0),
      s.removeChild(i),
      this.empty(),
      Xm(i, e),
      this.trigger("modalfill"),
      n ? s.insertBefore(i, n) : s.appendChild(i);
    const r = this.getChild("closeButton");
    r && s.appendChild(r.el_);
  }
  empty() {
    this.trigger("beforemodalempty"),
      Uo(this.contentEl()),
      this.trigger("modalempty");
  }
  content(e) {
    return typeof e < "u" && (this.content_ = e), this.content_;
  }
  conditionalFocus_() {
    const e = K.activeElement,
      i = this.player_.el_;
    (this.previouslyActiveEl_ = null),
      (i.contains(e) || i === e) &&
        ((this.previouslyActiveEl_ = e), this.focus());
  }
  conditionalBlur_() {
    this.previouslyActiveEl_ &&
      (this.previouslyActiveEl_.focus(), (this.previouslyActiveEl_ = null));
  }
  handleKeyDown(e) {
    if ((e.stopPropagation(), he.isEventKey(e, "Escape") && this.closeable())) {
      e.preventDefault(), this.close();
      return;
    }
    if (!he.isEventKey(e, "Tab")) return;
    const i = this.focusableEls_(),
      s = this.el_.querySelector(":focus");
    let n;
    for (let r = 0; r < i.length; r++)
      if (s === i[r]) {
        n = r;
        break;
      }
    K.activeElement === this.el_ && (n = 0),
      e.shiftKey && n === 0
        ? (i[i.length - 1].focus(), e.preventDefault())
        : !e.shiftKey &&
          n === i.length - 1 &&
          (i[0].focus(), e.preventDefault());
  }
  focusableEls_() {
    const e = this.el_.querySelectorAll("*");
    return Array.prototype.filter.call(
      e,
      (i) =>
        ((i instanceof C.HTMLAnchorElement || i instanceof C.HTMLAreaElement) &&
          i.hasAttribute("href")) ||
        ((i instanceof C.HTMLInputElement ||
          i instanceof C.HTMLSelectElement ||
          i instanceof C.HTMLTextAreaElement ||
          i instanceof C.HTMLButtonElement) &&
          !i.hasAttribute("disabled")) ||
        i instanceof C.HTMLIFrameElement ||
        i instanceof C.HTMLObjectElement ||
        i instanceof C.HTMLEmbedElement ||
        (i.hasAttribute("tabindex") && i.getAttribute("tabindex") !== -1) ||
        i.hasAttribute("contenteditable")
    );
  }
}
xn.prototype.options_ = { pauseOnOpen: !0, temporary: !0 };
B.registerComponent("ModalDialog", xn);
class fn extends Ht {
  constructor(e = []) {
    super(),
      (this.tracks_ = []),
      Object.defineProperty(this, "length", {
        get() {
          return this.tracks_.length;
        },
      });
    for (let i = 0; i < e.length; i++) this.addTrack(e[i]);
  }
  addTrack(e) {
    const i = this.tracks_.length;
    "" + i in this ||
      Object.defineProperty(this, i, {
        get() {
          return this.tracks_[i];
        },
      }),
      this.tracks_.indexOf(e) === -1 &&
        (this.tracks_.push(e),
        this.trigger({ track: e, type: "addtrack", target: this })),
      (e.labelchange_ = () => {
        this.trigger({ track: e, type: "labelchange", target: this });
      }),
      Oi(e) && e.addEventListener("labelchange", e.labelchange_);
  }
  removeTrack(e) {
    let i;
    for (let s = 0, n = this.length; s < n; s++)
      if (this[s] === e) {
        (i = this[s]), i.off && i.off(), this.tracks_.splice(s, 1);
        break;
      }
    i && this.trigger({ track: i, type: "removetrack", target: this });
  }
  getTrackById(e) {
    let i = null;
    for (let s = 0, n = this.length; s < n; s++) {
      const r = this[s];
      if (r.id === e) {
        i = r;
        break;
      }
    }
    return i;
  }
}
fn.prototype.allowedEvents_ = {
  change: "change",
  addtrack: "addtrack",
  removetrack: "removetrack",
  labelchange: "labelchange",
};
for (const t in fn.prototype.allowedEvents_) fn.prototype["on" + t] = null;
const Sl = function (t, e) {
  for (let i = 0; i < t.length; i++)
    !Object.keys(t[i]).length || e.id === t[i].id || (t[i].enabled = !1);
};
class vE extends fn {
  constructor(e = []) {
    for (let i = e.length - 1; i >= 0; i--)
      if (e[i].enabled) {
        Sl(e, e[i]);
        break;
      }
    super(e), (this.changing_ = !1);
  }
  addTrack(e) {
    e.enabled && Sl(this, e),
      super.addTrack(e),
      e.addEventListener &&
        ((e.enabledChange_ = () => {
          this.changing_ ||
            ((this.changing_ = !0),
            Sl(this, e),
            (this.changing_ = !1),
            this.trigger("change"));
        }),
        e.addEventListener("enabledchange", e.enabledChange_));
  }
  removeTrack(e) {
    super.removeTrack(e),
      e.removeEventListener &&
        e.enabledChange_ &&
        (e.removeEventListener("enabledchange", e.enabledChange_),
        (e.enabledChange_ = null));
  }
}
const El = function (t, e) {
  for (let i = 0; i < t.length; i++)
    !Object.keys(t[i]).length || e.id === t[i].id || (t[i].selected = !1);
};
class TE extends fn {
  constructor(e = []) {
    for (let i = e.length - 1; i >= 0; i--)
      if (e[i].selected) {
        El(e, e[i]);
        break;
      }
    super(e),
      (this.changing_ = !1),
      Object.defineProperty(this, "selectedIndex", {
        get() {
          for (let i = 0; i < this.length; i++) if (this[i].selected) return i;
          return -1;
        },
        set() {},
      });
  }
  addTrack(e) {
    e.selected && El(this, e),
      super.addTrack(e),
      e.addEventListener &&
        ((e.selectedChange_ = () => {
          this.changing_ ||
            ((this.changing_ = !0),
            El(this, e),
            (this.changing_ = !1),
            this.trigger("change"));
        }),
        e.addEventListener("selectedchange", e.selectedChange_));
  }
  removeTrack(e) {
    super.removeTrack(e),
      e.removeEventListener &&
        e.selectedChange_ &&
        (e.removeEventListener("selectedchange", e.selectedChange_),
        (e.selectedChange_ = null));
  }
}
class cg extends fn {
  addTrack(e) {
    super.addTrack(e),
      this.queueChange_ ||
        (this.queueChange_ = () => this.queueTrigger("change")),
      this.triggerSelectedlanguagechange ||
        (this.triggerSelectedlanguagechange_ = () =>
          this.trigger("selectedlanguagechange")),
      e.addEventListener("modechange", this.queueChange_),
      ["metadata", "chapters"].indexOf(e.kind) === -1 &&
        e.addEventListener("modechange", this.triggerSelectedlanguagechange_);
  }
  removeTrack(e) {
    super.removeTrack(e),
      e.removeEventListener &&
        (this.queueChange_ &&
          e.removeEventListener("modechange", this.queueChange_),
        this.selectedlanguagechange_ &&
          e.removeEventListener(
            "modechange",
            this.triggerSelectedlanguagechange_
          ));
  }
}
class bE {
  constructor(e = []) {
    (this.trackElements_ = []),
      Object.defineProperty(this, "length", {
        get() {
          return this.trackElements_.length;
        },
      });
    for (let i = 0, s = e.length; i < s; i++) this.addTrackElement_(e[i]);
  }
  addTrackElement_(e) {
    const i = this.trackElements_.length;
    "" + i in this ||
      Object.defineProperty(this, i, {
        get() {
          return this.trackElements_[i];
        },
      }),
      this.trackElements_.indexOf(e) === -1 && this.trackElements_.push(e);
  }
  getTrackElementByTrack_(e) {
    let i;
    for (let s = 0, n = this.trackElements_.length; s < n; s++)
      if (e === this.trackElements_[s].track) {
        i = this.trackElements_[s];
        break;
      }
    return i;
  }
  removeTrackElement_(e) {
    for (let i = 0, s = this.trackElements_.length; i < s; i++)
      if (e === this.trackElements_[i]) {
        this.trackElements_[i].track &&
          typeof this.trackElements_[i].track.off == "function" &&
          this.trackElements_[i].track.off(),
          typeof this.trackElements_[i].off == "function" &&
            this.trackElements_[i].off(),
          this.trackElements_.splice(i, 1);
        break;
      }
  }
}
class Ya {
  constructor(e) {
    Ya.prototype.setCues_.call(this, e),
      Object.defineProperty(this, "length", {
        get() {
          return this.length_;
        },
      });
  }
  setCues_(e) {
    const i = this.length || 0;
    let s = 0;
    const n = e.length;
    (this.cues_ = e), (this.length_ = e.length);
    const r = function (a) {
      "" + a in this ||
        Object.defineProperty(this, "" + a, {
          get() {
            return this.cues_[a];
          },
        });
    };
    if (i < n) for (s = i; s < n; s++) r.call(this, s);
  }
  getCueById(e) {
    let i = null;
    for (let s = 0, n = this.length; s < n; s++) {
      const r = this[s];
      if (r.id === e) {
        i = r;
        break;
      }
    }
    return i;
  }
}
const xE = {
    alternative: "alternative",
    captions: "captions",
    main: "main",
    sign: "sign",
    subtitles: "subtitles",
    commentary: "commentary",
  },
  SE = {
    alternative: "alternative",
    descriptions: "descriptions",
    main: "main",
    "main-desc": "main-desc",
    translation: "translation",
    commentary: "commentary",
  },
  EE = {
    subtitles: "subtitles",
    captions: "captions",
    descriptions: "descriptions",
    chapters: "chapters",
    metadata: "metadata",
  },
  Qh = { disabled: "disabled", hidden: "hidden", showing: "showing" };
class Sc extends Ht {
  constructor(e = {}) {
    super();
    const i = {
      id: e.id || "vjs_track_" + Ti(),
      kind: e.kind || "",
      language: e.language || "",
    };
    let s = e.label || "";
    for (const n in i)
      Object.defineProperty(this, n, {
        get() {
          return i[n];
        },
        set() {},
      });
    Object.defineProperty(this, "label", {
      get() {
        return s;
      },
      set(n) {
        n !== s && ((s = n), this.trigger("labelchange"));
      },
    });
  }
}
const Ec = function (t) {
    const e = [
        "protocol",
        "hostname",
        "port",
        "pathname",
        "search",
        "hash",
        "host",
      ],
      i = K.createElement("a");
    i.href = t;
    const s = {};
    for (let n = 0; n < e.length; n++) s[e[n]] = i[e[n]];
    return (
      s.protocol === "http:" && (s.host = s.host.replace(/:80$/, "")),
      s.protocol === "https:" && (s.host = s.host.replace(/:443$/, "")),
      s.protocol || (s.protocol = C.location.protocol),
      s.host || (s.host = C.location.host),
      s
    );
  },
  dg = function (t) {
    if (!t.match(/^https?:\/\//)) {
      const e = K.createElement("a");
      (e.href = t), (t = e.href);
    }
    return t;
  },
  Cc = function (t) {
    if (typeof t == "string") {
      const i =
        /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(
          t
        );
      if (i) return i.pop().toLowerCase();
    }
    return "";
  },
  jo = function (t, e = C.location) {
    const i = Ec(t);
    return (
      (i.protocol === ":" ? e.protocol : i.protocol) + i.host !==
      e.protocol + e.host
    );
  };
var CE = Object.freeze({
  __proto__: null,
  parseUrl: Ec,
  getAbsoluteURL: dg,
  getFileExtension: Cc,
  isCrossOrigin: jo,
});
const Jh = function (t, e) {
    const i = new C.WebVTT.Parser(C, C.vttjs, C.WebVTT.StringDecoder()),
      s = [];
    (i.oncue = function (n) {
      e.addCue(n);
    }),
      (i.onparsingerror = function (n) {
        s.push(n);
      }),
      (i.onflush = function () {
        e.trigger({ type: "loadeddata", target: e });
      }),
      i.parse(t),
      s.length > 0 &&
        (C.console &&
          C.console.groupCollapsed &&
          C.console.groupCollapsed(`Text Track parsing errors for ${e.src}`),
        s.forEach((n) => be.error(n)),
        C.console && C.console.groupEnd && C.console.groupEnd()),
      i.flush();
  },
  Zh = function (t, e) {
    const i = { uri: t },
      s = jo(t);
    s && (i.cors = s);
    const n = e.tech_.crossOrigin() === "use-credentials";
    n && (i.withCredentials = n),
      pr(
        i,
        Le(this, function (r, a, o) {
          if (r) return be.error(r, a);
          (e.loaded_ = !0),
            typeof C.WebVTT != "function"
              ? e.tech_ &&
                e.tech_.any(["vttjsloaded", "vttjserror"], (u) => {
                  if (u.type === "vttjserror") {
                    be.error(
                      `vttjs failed to load, stopping trying to process ${e.src}`
                    );
                    return;
                  }
                  return Jh(o, e);
                })
              : Jh(o, e);
        })
      );
  };
class kr extends Sc {
  constructor(e = {}) {
    if (!e.tech) throw new Error("A tech was not provided.");
    const i = De(e, {
      kind: EE[e.kind] || "subtitles",
      language: e.language || e.srclang || "",
    });
    let s = Qh[i.mode] || "disabled";
    const n = i.default;
    (i.kind === "metadata" || i.kind === "chapters") && (s = "hidden"),
      super(i),
      (this.tech_ = i.tech),
      (this.cues_ = []),
      (this.activeCues_ = []),
      (this.preload_ = this.tech_.preloadTextTracks !== !1);
    const r = new Ya(this.cues_),
      a = new Ya(this.activeCues_);
    let o = !1;
    this.timeupdateHandler = Le(this, function (f = {}) {
      if (!this.tech_.isDisposed()) {
        if (!this.tech_.isReady_) {
          f.type !== "timeupdate" &&
            (this.rvf_ = this.tech_.requestVideoFrameCallback(
              this.timeupdateHandler
            ));
          return;
        }
        (this.activeCues = this.activeCues),
          o && (this.trigger("cuechange"), (o = !1)),
          f.type !== "timeupdate" &&
            (this.rvf_ = this.tech_.requestVideoFrameCallback(
              this.timeupdateHandler
            ));
      }
    });
    const u = () => {
      this.stopTracking();
    };
    this.tech_.one("dispose", u),
      s !== "disabled" && this.startTracking(),
      Object.defineProperties(this, {
        default: {
          get() {
            return n;
          },
          set() {},
        },
        mode: {
          get() {
            return s;
          },
          set(f) {
            Qh[f] &&
              s !== f &&
              ((s = f),
              !this.preload_ &&
                s !== "disabled" &&
                this.cues.length === 0 &&
                Zh(this.src, this),
              this.stopTracking(),
              s !== "disabled" && this.startTracking(),
              this.trigger("modechange"));
          },
        },
        cues: {
          get() {
            return this.loaded_ ? r : null;
          },
          set() {},
        },
        activeCues: {
          get() {
            if (!this.loaded_) return null;
            if (this.cues.length === 0) return a;
            const f = this.tech_.currentTime(),
              p = [];
            for (let _ = 0, v = this.cues.length; _ < v; _++) {
              const y = this.cues[_];
              y.startTime <= f && y.endTime >= f && p.push(y);
            }
            if (((o = !1), p.length !== this.activeCues_.length)) o = !0;
            else
              for (let _ = 0; _ < p.length; _++)
                this.activeCues_.indexOf(p[_]) === -1 && (o = !0);
            return (this.activeCues_ = p), a.setCues_(this.activeCues_), a;
          },
          set() {},
        },
      }),
      i.src
        ? ((this.src = i.src),
          this.preload_ || (this.loaded_ = !0),
          (this.preload_ ||
            (i.kind !== "subtitles" && i.kind !== "captions")) &&
            Zh(this.src, this))
        : (this.loaded_ = !0);
  }
  startTracking() {
    (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler)),
      this.tech_.on("timeupdate", this.timeupdateHandler);
  }
  stopTracking() {
    this.rvf_ &&
      (this.tech_.cancelVideoFrameCallback(this.rvf_), (this.rvf_ = void 0)),
      this.tech_.off("timeupdate", this.timeupdateHandler);
  }
  addCue(e) {
    let i = e;
    if (C.vttjs && !(e instanceof C.vttjs.VTTCue)) {
      i = new C.vttjs.VTTCue(e.startTime, e.endTime, e.text);
      for (const n in e) n in i || (i[n] = e[n]);
      (i.id = e.id), (i.originalCue_ = e);
    }
    const s = this.tech_.textTracks();
    for (let n = 0; n < s.length; n++) s[n] !== this && s[n].removeCue(i);
    this.cues_.push(i), this.cues.setCues_(this.cues_);
  }
  removeCue(e) {
    let i = this.cues_.length;
    for (; i--; ) {
      const s = this.cues_[i];
      if (s === e || (s.originalCue_ && s.originalCue_ === e)) {
        this.cues_.splice(i, 1), this.cues.setCues_(this.cues_);
        break;
      }
    }
  }
}
kr.prototype.allowedEvents_ = { cuechange: "cuechange" };
class hg extends Sc {
  constructor(e = {}) {
    const i = De(e, { kind: SE[e.kind] || "" });
    super(i);
    let s = !1;
    Object.defineProperty(this, "enabled", {
      get() {
        return s;
      },
      set(n) {
        typeof n != "boolean" ||
          n === s ||
          ((s = n), this.trigger("enabledchange"));
      },
    }),
      i.enabled && (this.enabled = i.enabled),
      (this.loaded_ = !0);
  }
}
class fg extends Sc {
  constructor(e = {}) {
    const i = De(e, { kind: xE[e.kind] || "" });
    super(i);
    let s = !1;
    Object.defineProperty(this, "selected", {
      get() {
        return s;
      },
      set(n) {
        typeof n != "boolean" ||
          n === s ||
          ((s = n), this.trigger("selectedchange"));
      },
    }),
      i.selected && (this.selected = i.selected);
  }
}
class Mi extends Ht {
  constructor(e = {}) {
    super();
    let i;
    const s = new kr(e);
    (this.kind = s.kind),
      (this.src = s.src),
      (this.srclang = s.language),
      (this.label = s.label),
      (this.default = s.default),
      Object.defineProperties(this, {
        readyState: {
          get() {
            return i;
          },
        },
        track: {
          get() {
            return s;
          },
        },
      }),
      (i = Mi.NONE),
      s.addEventListener("loadeddata", () => {
        (i = Mi.LOADED), this.trigger({ type: "load", target: this });
      });
  }
}
Mi.prototype.allowedEvents_ = { load: "load" };
Mi.NONE = 0;
Mi.LOADING = 1;
Mi.LOADED = 2;
Mi.ERROR = 3;
const $t = {
  audio: { ListClass: vE, TrackClass: hg, capitalName: "Audio" },
  video: { ListClass: TE, TrackClass: fg, capitalName: "Video" },
  text: { ListClass: cg, TrackClass: kr, capitalName: "Text" },
};
Object.keys($t).forEach(function (t) {
  ($t[t].getterName = `${t}Tracks`), ($t[t].privateName = `${t}Tracks_`);
});
const pn = {
    remoteText: {
      ListClass: cg,
      TrackClass: kr,
      capitalName: "RemoteText",
      getterName: "remoteTextTracks",
      privateName: "remoteTextTracks_",
    },
    remoteTextEl: {
      ListClass: bE,
      TrackClass: Mi,
      capitalName: "RemoteTextTrackEls",
      getterName: "remoteTextTrackEls",
      privateName: "remoteTextTrackEls_",
    },
  },
  ft = Object.assign({}, $t, pn);
pn.names = Object.keys(pn);
$t.names = Object.keys($t);
ft.names = [].concat(pn.names).concat($t.names);
function wE(t, e, i, s, n = {}) {
  const r = t.textTracks();
  (n.kind = e), i && (n.label = i), s && (n.language = s), (n.tech = t);
  const a = new ft.text.TrackClass(n);
  return r.addTrack(a), a;
}
class pe extends B {
  constructor(e = {}, i = function () {}) {
    (e.reportTouchActivity = !1),
      super(null, e, i),
      (this.onDurationChange_ = (s) => this.onDurationChange(s)),
      (this.trackProgress_ = (s) => this.trackProgress(s)),
      (this.trackCurrentTime_ = (s) => this.trackCurrentTime(s)),
      (this.stopTrackingCurrentTime_ = (s) => this.stopTrackingCurrentTime(s)),
      (this.disposeSourceHandler_ = (s) => this.disposeSourceHandler(s)),
      (this.queuedHanders_ = new Set()),
      (this.hasStarted_ = !1),
      this.on("playing", function () {
        this.hasStarted_ = !0;
      }),
      this.on("loadstart", function () {
        this.hasStarted_ = !1;
      }),
      ft.names.forEach((s) => {
        const n = ft[s];
        e && e[n.getterName] && (this[n.privateName] = e[n.getterName]);
      }),
      this.featuresProgressEvents || this.manualProgressOn(),
      this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(),
      ["Text", "Audio", "Video"].forEach((s) => {
        e[`native${s}Tracks`] === !1 && (this[`featuresNative${s}Tracks`] = !1);
      }),
      e.nativeCaptions === !1 || e.nativeTextTracks === !1
        ? (this.featuresNativeTextTracks = !1)
        : (e.nativeCaptions === !0 || e.nativeTextTracks === !0) &&
          (this.featuresNativeTextTracks = !0),
      this.featuresNativeTextTracks || this.emulateTextTracks(),
      (this.preloadTextTracks = e.preloadTextTracks !== !1),
      (this.autoRemoteTextTracks_ = new ft.text.ListClass()),
      this.initTrackListeners(),
      e.nativeControlsForTouch || this.emitTapEvents(),
      this.constructor &&
        (this.name_ = this.constructor.name || "Unknown Tech");
  }
  triggerSourceset(e) {
    this.isReady_ ||
      this.one("ready", () =>
        this.setTimeout(() => this.triggerSourceset(e), 1)
      ),
      this.trigger({ src: e, type: "sourceset" });
  }
  manualProgressOn() {
    this.on("durationchange", this.onDurationChange_),
      (this.manualProgress = !0),
      this.one("ready", this.trackProgress_);
  }
  manualProgressOff() {
    (this.manualProgress = !1),
      this.stopTrackingProgress(),
      this.off("durationchange", this.onDurationChange_);
  }
  trackProgress(e) {
    this.stopTrackingProgress(),
      (this.progressInterval = this.setInterval(
        Le(this, function () {
          const i = this.bufferedPercent();
          this.bufferedPercent_ !== i && this.trigger("progress"),
            (this.bufferedPercent_ = i),
            i === 1 && this.stopTrackingProgress();
        }),
        500
      ));
  }
  onDurationChange(e) {
    this.duration_ = this.duration();
  }
  buffered() {
    return gi(0, 0);
  }
  bufferedPercent() {
    return ug(this.buffered(), this.duration_);
  }
  stopTrackingProgress() {
    this.clearInterval(this.progressInterval);
  }
  manualTimeUpdatesOn() {
    (this.manualTimeUpdates = !0),
      this.on("play", this.trackCurrentTime_),
      this.on("pause", this.stopTrackingCurrentTime_);
  }
  manualTimeUpdatesOff() {
    (this.manualTimeUpdates = !1),
      this.stopTrackingCurrentTime(),
      this.off("play", this.trackCurrentTime_),
      this.off("pause", this.stopTrackingCurrentTime_);
  }
  trackCurrentTime() {
    this.currentTimeInterval && this.stopTrackingCurrentTime(),
      (this.currentTimeInterval = this.setInterval(function () {
        this.trigger({
          type: "timeupdate",
          target: this,
          manuallyTriggered: !0,
        });
      }, 250));
  }
  stopTrackingCurrentTime() {
    this.clearInterval(this.currentTimeInterval),
      this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
  }
  dispose() {
    this.clearTracks($t.names),
      this.manualProgress && this.manualProgressOff(),
      this.manualTimeUpdates && this.manualTimeUpdatesOff(),
      super.dispose();
  }
  clearTracks(e) {
    (e = [].concat(e)),
      e.forEach((i) => {
        const s = this[`${i}Tracks`]() || [];
        let n = s.length;
        for (; n--; ) {
          const r = s[n];
          i === "text" && this.removeRemoteTextTrack(r), s.removeTrack(r);
        }
      });
  }
  cleanupAutoTextTracks() {
    const e = this.autoRemoteTextTracks_ || [];
    let i = e.length;
    for (; i--; ) {
      const s = e[i];
      this.removeRemoteTextTrack(s);
    }
  }
  reset() {}
  crossOrigin() {}
  setCrossOrigin() {}
  error(e) {
    return (
      e !== void 0 && ((this.error_ = new gt(e)), this.trigger("error")),
      this.error_
    );
  }
  played() {
    return this.hasStarted_ ? gi(0, 0) : gi();
  }
  play() {}
  setScrubbing() {}
  scrubbing() {}
  setCurrentTime() {
    this.manualTimeUpdates &&
      this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
  }
  initTrackListeners() {
    $t.names.forEach((e) => {
      const i = $t[e],
        s = () => {
          this.trigger(`${e}trackchange`);
        },
        n = this[i.getterName]();
      n.addEventListener("removetrack", s),
        n.addEventListener("addtrack", s),
        this.on("dispose", () => {
          n.removeEventListener("removetrack", s),
            n.removeEventListener("addtrack", s);
        });
    });
  }
  addWebVttScript_() {
    if (!C.WebVTT)
      if (K.body.contains(this.el())) {
        if (!this.options_["vtt.js"] && un(Ua) && Object.keys(Ua).length > 0) {
          this.trigger("vttjsloaded");
          return;
        }
        const e = K.createElement("script");
        (e.src =
          this.options_["vtt.js"] ||
          "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js"),
          (e.onload = () => {
            this.trigger("vttjsloaded");
          }),
          (e.onerror = () => {
            this.trigger("vttjserror");
          }),
          this.on("dispose", () => {
            (e.onload = null), (e.onerror = null);
          }),
          (C.WebVTT = !0),
          this.el().parentNode.appendChild(e);
      } else this.ready(this.addWebVttScript_);
  }
  emulateTextTracks() {
    const e = this.textTracks(),
      i = this.remoteTextTracks(),
      s = (o) => e.addTrack(o.track),
      n = (o) => e.removeTrack(o.track);
    i.on("addtrack", s), i.on("removetrack", n), this.addWebVttScript_();
    const r = () => this.trigger("texttrackchange"),
      a = () => {
        r();
        for (let o = 0; o < e.length; o++) {
          const u = e[o];
          u.removeEventListener("cuechange", r),
            u.mode === "showing" && u.addEventListener("cuechange", r);
        }
      };
    a(),
      e.addEventListener("change", a),
      e.addEventListener("addtrack", a),
      e.addEventListener("removetrack", a),
      this.on("dispose", function () {
        i.off("addtrack", s),
          i.off("removetrack", n),
          e.removeEventListener("change", a),
          e.removeEventListener("addtrack", a),
          e.removeEventListener("removetrack", a);
        for (let o = 0; o < e.length; o++)
          e[o].removeEventListener("cuechange", r);
      });
  }
  addTextTrack(e, i, s) {
    if (!e) throw new Error("TextTrack kind is required but was not provided");
    return wE(this, e, i, s);
  }
  createRemoteTextTrack(e) {
    const i = De(e, { tech: this });
    return new pn.remoteTextEl.TrackClass(i);
  }
  addRemoteTextTrack(e = {}, i) {
    const s = this.createRemoteTextTrack(e);
    return (
      typeof i != "boolean" && (i = !1),
      this.remoteTextTrackEls().addTrackElement_(s),
      this.remoteTextTracks().addTrack(s.track),
      i === !1 &&
        this.ready(() => this.autoRemoteTextTracks_.addTrack(s.track)),
      s
    );
  }
  removeRemoteTextTrack(e) {
    const i = this.remoteTextTrackEls().getTrackElementByTrack_(e);
    this.remoteTextTrackEls().removeTrackElement_(i),
      this.remoteTextTracks().removeTrack(e),
      this.autoRemoteTextTracks_.removeTrack(e);
  }
  getVideoPlaybackQuality() {
    return {};
  }
  requestPictureInPicture() {
    return Promise.reject();
  }
  disablePictureInPicture() {
    return !0;
  }
  setDisablePictureInPicture() {}
  requestVideoFrameCallback(e) {
    const i = Ti();
    return (
      !this.isReady_ || this.paused()
        ? (this.queuedHanders_.add(i),
          this.one("playing", () => {
            this.queuedHanders_.has(i) && (this.queuedHanders_.delete(i), e());
          }))
        : this.requestNamedAnimationFrame(i, e),
      i
    );
  }
  cancelVideoFrameCallback(e) {
    this.queuedHanders_.has(e)
      ? this.queuedHanders_.delete(e)
      : this.cancelNamedAnimationFrame(e);
  }
  setPoster() {}
  playsinline() {}
  setPlaysinline() {}
  overrideNativeAudioTracks() {}
  overrideNativeVideoTracks() {}
  canPlayType() {
    return "";
  }
  static canPlayType() {
    return "";
  }
  static canPlaySource(e, i) {
    return pe.canPlayType(e.type);
  }
  static isTech(e) {
    return e.prototype instanceof pe || e instanceof pe || e === pe;
  }
  static registerTech(e, i) {
    if ((pe.techs_ || (pe.techs_ = {}), !pe.isTech(i)))
      throw new Error(`Tech ${e} must be a Tech`);
    if (!pe.canPlayType)
      throw new Error("Techs must have a static canPlayType method on them");
    if (!pe.canPlaySource)
      throw new Error("Techs must have a static canPlaySource method on them");
    return (
      (e = je(e)),
      (pe.techs_[e] = i),
      (pe.techs_[sr(e)] = i),
      e !== "Tech" && pe.defaultTechOrder_.push(e),
      i
    );
  }
  static getTech(e) {
    if (e) {
      if (pe.techs_ && pe.techs_[e]) return pe.techs_[e];
      if (((e = je(e)), C && C.videojs && C.videojs[e]))
        return (
          be.warn(
            `The ${e} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`
          ),
          C.videojs[e]
        );
    }
  }
}
ft.names.forEach(function (t) {
  const e = ft[t];
  pe.prototype[e.getterName] = function () {
    return (
      (this[e.privateName] = this[e.privateName] || new e.ListClass()),
      this[e.privateName]
    );
  };
});
pe.prototype.featuresVolumeControl = !0;
pe.prototype.featuresMuteControl = !0;
pe.prototype.featuresFullscreenResize = !1;
pe.prototype.featuresPlaybackRate = !1;
pe.prototype.featuresProgressEvents = !1;
pe.prototype.featuresSourceset = !1;
pe.prototype.featuresTimeupdateEvents = !1;
pe.prototype.featuresNativeTextTracks = !1;
pe.prototype.featuresVideoFrameCallback = !1;
pe.withSourceHandlers = function (t) {
  (t.registerSourceHandler = function (i, s) {
    let n = t.sourceHandlers;
    n || (n = t.sourceHandlers = []),
      s === void 0 && (s = n.length),
      n.splice(s, 0, i);
  }),
    (t.canPlayType = function (i) {
      const s = t.sourceHandlers || [];
      let n;
      for (let r = 0; r < s.length; r++)
        if (((n = s[r].canPlayType(i)), n)) return n;
      return "";
    }),
    (t.selectSourceHandler = function (i, s) {
      const n = t.sourceHandlers || [];
      let r;
      for (let a = 0; a < n.length; a++)
        if (((r = n[a].canHandleSource(i, s)), r)) return n[a];
      return null;
    }),
    (t.canPlaySource = function (i, s) {
      const n = t.selectSourceHandler(i, s);
      return n ? n.canHandleSource(i, s) : "";
    }),
    ["seekable", "seeking", "duration"].forEach(function (i) {
      const s = this[i];
      typeof s == "function" &&
        (this[i] = function () {
          return this.sourceHandler_ && this.sourceHandler_[i]
            ? this.sourceHandler_[i].apply(this.sourceHandler_, arguments)
            : s.apply(this, arguments);
        });
    }, t.prototype),
    (t.prototype.setSource = function (i) {
      let s = t.selectSourceHandler(i, this.options_);
      s ||
        (t.nativeSourceHandler
          ? (s = t.nativeSourceHandler)
          : be.error("No source handler found for the current source.")),
        this.disposeSourceHandler(),
        this.off("dispose", this.disposeSourceHandler_),
        s !== t.nativeSourceHandler && (this.currentSource_ = i),
        (this.sourceHandler_ = s.handleSource(i, this, this.options_)),
        this.one("dispose", this.disposeSourceHandler_);
    }),
    (t.prototype.disposeSourceHandler = function () {
      this.currentSource_ &&
        (this.clearTracks(["audio", "video"]), (this.currentSource_ = null)),
        this.cleanupAutoTextTracks(),
        this.sourceHandler_ &&
          (this.sourceHandler_.dispose && this.sourceHandler_.dispose(),
          (this.sourceHandler_ = null));
    });
};
B.registerComponent("Tech", pe);
pe.registerTech("Tech", pe);
pe.defaultTechOrder_ = [];
const vs = {},
  uu = {},
  Qa = {};
function AE(t, e) {
  (vs[t] = vs[t] || []), vs[t].push(e);
}
function kE(t, e, i) {
  t.setTimeout(() => cs(e, vs[e.type], i, t), 1);
}
function IE(t, e) {
  t.forEach((i) => i.setTech && i.setTech(e));
}
function OE(t, e, i) {
  return t.reduceRight(wc(i), e[i]());
}
function PE(t, e, i, s) {
  return e[i](t.reduce(wc(i), s));
}
function ef(t, e, i, s = null) {
  const n = "call" + je(i),
    r = t.reduce(wc(n), s),
    a = r === Qa,
    o = a ? null : e[i](r);
  return RE(t, i, o, a), o;
}
const DE = {
    buffered: 1,
    currentTime: 1,
    duration: 1,
    muted: 1,
    played: 1,
    paused: 1,
    seekable: 1,
    volume: 1,
    ended: 1,
  },
  LE = { setCurrentTime: 1, setMuted: 1, setVolume: 1 },
  tf = { play: 1, pause: 1 };
function wc(t) {
  return (e, i) => (e === Qa ? Qa : i[t] ? i[t](e) : e);
}
function RE(t, e, i, s) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n];
    r[e] && r[e](s, i);
  }
}
function NE(t) {
  uu[t.id()] = null;
}
function ME(t, e) {
  const i = uu[t.id()];
  let s = null;
  if (i == null) return (s = e(t)), (uu[t.id()] = [[e, s]]), s;
  for (let n = 0; n < i.length; n++) {
    const [r, a] = i[n];
    r === e && (s = a);
  }
  return s === null && ((s = e(t)), i.push([e, s])), s;
}
function cs(t = {}, e = [], i, s, n = [], r = !1) {
  const [a, ...o] = e;
  if (typeof a == "string") cs(t, vs[a], i, s, n, r);
  else if (a) {
    const u = ME(s, a);
    if (!u.setSource) return n.push(u), cs(t, o, i, s, n, r);
    u.setSource(Object.assign({}, t), function (f, p) {
      if (f) return cs(t, o, i, s, n, r);
      n.push(u), cs(p, t.type === p.type ? o : vs[p.type], i, s, n, r);
    });
  } else
    o.length ? cs(t, o, i, s, n, r) : r ? i(t, n) : cs(t, vs["*"], i, s, n, !0);
}
const UE = {
    opus: "video/ogg",
    ogv: "video/ogg",
    mp4: "video/mp4",
    mov: "video/mp4",
    m4v: "video/mp4",
    mkv: "video/x-matroska",
    m4a: "audio/mp4",
    mp3: "audio/mpeg",
    aac: "audio/aac",
    caf: "audio/x-caf",
    flac: "audio/flac",
    oga: "audio/ogg",
    wav: "audio/wav",
    m3u8: "application/x-mpegURL",
    mpd: "application/dash+xml",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    png: "image/png",
    svg: "image/svg+xml",
    webp: "image/webp",
  },
  Ja = function (t = "") {
    const e = Cc(t);
    return UE[e.toLowerCase()] || "";
  },
  FE = (t, e) => {
    if (!e) return "";
    if (t.cache_.source.src === e && t.cache_.source.type)
      return t.cache_.source.type;
    const i = t.cache_.sources.filter((n) => n.src === e);
    if (i.length) return i[0].type;
    const s = t.$$("source");
    for (let n = 0; n < s.length; n++) {
      const r = s[n];
      if (r.type && r.src && r.src === e) return r.type;
    }
    return Ja(e);
  },
  pg = function (t) {
    if (Array.isArray(t)) {
      let e = [];
      t.forEach(function (i) {
        (i = pg(i)), Array.isArray(i) ? (e = e.concat(i)) : _i(i) && e.push(i);
      }),
        (t = e);
    } else
      typeof t == "string" && t.trim()
        ? (t = [sf({ src: t })])
        : _i(t) && typeof t.src == "string" && t.src && t.src.trim()
        ? (t = [sf(t)])
        : (t = []);
    return t;
  };
function sf(t) {
  if (!t.type) {
    const e = Ja(t.src);
    e && (t.type = e);
  }
  return t;
}
class BE extends B {
  constructor(e, i, s) {
    const n = De({ createEl: !1 }, i);
    if (
      (super(e, n, s),
      !i.playerOptions.sources || i.playerOptions.sources.length === 0)
    )
      for (let r = 0, a = i.playerOptions.techOrder; r < a.length; r++) {
        const o = je(a[r]);
        let u = pe.getTech(o);
        if ((o || (u = B.getComponent(o)), u && u.isSupported())) {
          e.loadTech_(o);
          break;
        }
      }
    else e.src(i.playerOptions.sources);
  }
}
B.registerComponent("MediaLoader", BE);
class Ho extends B {
  constructor(e, i) {
    super(e, i),
      this.options_.controlText && this.controlText(this.options_.controlText),
      (this.handleMouseOver_ = (s) => this.handleMouseOver(s)),
      (this.handleMouseOut_ = (s) => this.handleMouseOut(s)),
      (this.handleClick_ = (s) => this.handleClick(s)),
      (this.handleKeyDown_ = (s) => this.handleKeyDown(s)),
      this.emitTapEvents(),
      this.enable();
  }
  createEl(e = "div", i = {}, s = {}) {
    (i = Object.assign({ className: this.buildCSSClass(), tabIndex: 0 }, i)),
      e === "button" &&
        be.error(
          `Creating a ClickableComponent with an HTML element of ${e} is not supported; use a Button instead.`
        ),
      (s = Object.assign({ role: "button" }, s)),
      (this.tabIndex_ = i.tabIndex);
    const n = ye(e, i, s);
    return (
      n.appendChild(
        ye("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": !0 })
      ),
      this.createControlTextEl(n),
      n
    );
  }
  dispose() {
    (this.controlTextEl_ = null), super.dispose();
  }
  createControlTextEl(e) {
    return (
      (this.controlTextEl_ = ye(
        "span",
        { className: "vjs-control-text" },
        { "aria-live": "polite" }
      )),
      e && e.appendChild(this.controlTextEl_),
      this.controlText(this.controlText_, e),
      this.controlTextEl_
    );
  }
  controlText(e, i = this.el()) {
    if (e === void 0) return this.controlText_ || "Need Text";
    const s = this.localize(e);
    (this.controlText_ = e),
      Qi(this.controlTextEl_, s),
      !this.nonIconControl &&
        !this.player_.options_.noUITitleAttributes &&
        i.setAttribute("title", s);
  }
  buildCSSClass() {
    return `vjs-control vjs-button ${super.buildCSSClass()}`;
  }
  enable() {
    this.enabled_ ||
      ((this.enabled_ = !0),
      this.removeClass("vjs-disabled"),
      this.el_.setAttribute("aria-disabled", "false"),
      typeof this.tabIndex_ < "u" &&
        this.el_.setAttribute("tabIndex", this.tabIndex_),
      this.on(["tap", "click"], this.handleClick_),
      this.on("keydown", this.handleKeyDown_));
  }
  disable() {
    (this.enabled_ = !1),
      this.addClass("vjs-disabled"),
      this.el_.setAttribute("aria-disabled", "true"),
      typeof this.tabIndex_ < "u" && this.el_.removeAttribute("tabIndex"),
      this.off("mouseover", this.handleMouseOver_),
      this.off("mouseout", this.handleMouseOut_),
      this.off(["tap", "click"], this.handleClick_),
      this.off("keydown", this.handleKeyDown_);
  }
  handleLanguagechange() {
    this.controlText(this.controlText_);
  }
  handleClick(e) {
    this.options_.clickHandler &&
      this.options_.clickHandler.call(this, arguments);
  }
  handleKeyDown(e) {
    he.isEventKey(e, "Space") || he.isEventKey(e, "Enter")
      ? (e.preventDefault(), e.stopPropagation(), this.trigger("click"))
      : super.handleKeyDown(e);
  }
}
B.registerComponent("ClickableComponent", Ho);
class cu extends Ho {
  constructor(e, i) {
    super(e, i),
      this.update(),
      (this.update_ = (s) => this.update(s)),
      e.on("posterchange", this.update_);
  }
  dispose() {
    this.player().off("posterchange", this.update_), super.dispose();
  }
  createEl() {
    return ye(
      "picture",
      { className: "vjs-poster", tabIndex: -1 },
      {},
      ye(
        "img",
        { loading: "lazy", crossOrigin: this.crossOrigin() },
        { alt: "" }
      )
    );
  }
  crossOrigin(e) {
    if (typeof e > "u")
      return this.el_
        ? this.el_.querySelector("img").crossOrigin
        : this.player_.tech_ && this.player_.tech_.isReady_
        ? this.player_.crossOrigin()
        : this.player_.options_.crossOrigin ||
          this.player_.options_.crossorigin ||
          null;
    if (e !== null && e !== "anonymous" && e !== "use-credentials") {
      this.player_.log.warn(
        `crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`
      );
      return;
    }
    this.el_.querySelector("img").crossOrigin = e;
  }
  update(e) {
    const i = this.player().poster();
    this.setSrc(i), i ? this.show() : this.hide();
  }
  setSrc(e) {
    this.el_.querySelector("img").src = e;
  }
  handleClick(e) {
    this.player_.controls() &&
      (this.player_.tech(!0) && this.player_.tech(!0).focus(),
      this.player_.paused() ? ci(this.player_.play()) : this.player_.pause());
  }
}
cu.prototype.crossorigin = cu.prototype.crossOrigin;
B.registerComponent("PosterImage", cu);
const Bt = "#222",
  nf = "#ccc",
  $E = {
    monospace: "monospace",
    sansSerif: "sans-serif",
    serif: "serif",
    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
    monospaceSerif: '"Courier New", monospace',
    proportionalSansSerif: "sans-serif",
    proportionalSerif: "serif",
    casual: '"Comic Sans MS", Impact, fantasy',
    script: '"Monotype Corsiva", cursive',
    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif',
  };
function Cl(t, e) {
  let i;
  if (t.length === 4) i = t[1] + t[1] + t[2] + t[2] + t[3] + t[3];
  else if (t.length === 7) i = t.slice(1);
  else
    throw new Error(
      "Invalid color code provided, " +
        t +
        "; must be formatted as e.g. #f0e or #f604e2."
    );
  return (
    "rgba(" +
    parseInt(i.slice(0, 2), 16) +
    "," +
    parseInt(i.slice(2, 4), 16) +
    "," +
    parseInt(i.slice(4, 6), 16) +
    "," +
    e +
    ")"
  );
}
function wl(t, e, i) {
  try {
    t.style[e] = i;
  } catch {
    return;
  }
}
class jE extends B {
  constructor(e, i, s) {
    super(e, i, s);
    const n = (r) => this.updateDisplay(r);
    e.on("loadstart", (r) => this.toggleDisplay(r)),
      e.on("texttrackchange", n),
      e.on("loadedmetadata", (r) => this.preselectTrack(r)),
      e.ready(
        Le(this, function () {
          if (e.tech_ && e.tech_.featuresNativeTextTracks) {
            this.hide();
            return;
          }
          e.on("fullscreenchange", n), e.on("playerresize", n);
          const r = C.screen.orientation || C,
            a = C.screen.orientation ? "change" : "orientationchange";
          r.addEventListener(a, n),
            e.on("dispose", () => r.removeEventListener(a, n));
          const o = this.options_.playerOptions.tracks || [];
          for (let u = 0; u < o.length; u++)
            this.player_.addRemoteTextTrack(o[u], !0);
          this.preselectTrack();
        })
      );
  }
  preselectTrack() {
    const e = { captions: 1, subtitles: 1 },
      i = this.player_.textTracks(),
      s = this.player_.cache_.selectedLanguage;
    let n, r, a;
    for (let o = 0; o < i.length; o++) {
      const u = i[o];
      s && s.enabled && s.language && s.language === u.language && u.kind in e
        ? u.kind === s.kind
          ? (a = u)
          : a || (a = u)
        : s && !s.enabled
        ? ((a = null), (n = null), (r = null))
        : u.default &&
          (u.kind === "descriptions" && !n
            ? (n = u)
            : u.kind in e && !r && (r = u));
    }
    a
      ? (a.mode = "showing")
      : r
      ? (r.mode = "showing")
      : n && (n.mode = "showing");
  }
  toggleDisplay() {
    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks
      ? this.hide()
      : this.show();
  }
  createEl() {
    return super.createEl(
      "div",
      { className: "vjs-text-track-display" },
      { translate: "yes", "aria-live": "off", "aria-atomic": "true" }
    );
  }
  clearDisplay() {
    typeof C.WebVTT == "function" && C.WebVTT.processCues(C, [], this.el_);
  }
  updateDisplay() {
    const e = this.player_.textTracks(),
      i = this.options_.allowMultipleShowingTracks;
    if ((this.clearDisplay(), i)) {
      const a = [];
      for (let o = 0; o < e.length; ++o) {
        const u = e[o];
        u.mode === "showing" && a.push(u);
      }
      this.updateForTrack(a);
      return;
    }
    let s = null,
      n = null,
      r = e.length;
    for (; r--; ) {
      const a = e[r];
      a.mode === "showing" && (a.kind === "descriptions" ? (s = a) : (n = a));
    }
    n
      ? (this.getAttribute("aria-live") !== "off" &&
          this.setAttribute("aria-live", "off"),
        this.updateForTrack(n))
      : s &&
        (this.getAttribute("aria-live") !== "assertive" &&
          this.setAttribute("aria-live", "assertive"),
        this.updateForTrack(s));
  }
  updateDisplayState(e) {
    const i = this.player_.textTrackSettings.getValues(),
      s = e.activeCues;
    let n = s.length;
    for (; n--; ) {
      const r = s[n];
      if (!r) continue;
      const a = r.displayState;
      if (
        (i.color && (a.firstChild.style.color = i.color),
        i.textOpacity &&
          wl(a.firstChild, "color", Cl(i.color || "#fff", i.textOpacity)),
        i.backgroundColor &&
          (a.firstChild.style.backgroundColor = i.backgroundColor),
        i.backgroundOpacity &&
          wl(
            a.firstChild,
            "backgroundColor",
            Cl(i.backgroundColor || "#000", i.backgroundOpacity)
          ),
        i.windowColor &&
          (i.windowOpacity
            ? wl(a, "backgroundColor", Cl(i.windowColor, i.windowOpacity))
            : (a.style.backgroundColor = i.windowColor)),
        i.edgeStyle &&
          (i.edgeStyle === "dropshadow"
            ? (a.firstChild.style.textShadow = `2px 2px 3px ${Bt}, 2px 2px 4px ${Bt}, 2px 2px 5px ${Bt}`)
            : i.edgeStyle === "raised"
            ? (a.firstChild.style.textShadow = `1px 1px ${Bt}, 2px 2px ${Bt}, 3px 3px ${Bt}`)
            : i.edgeStyle === "depressed"
            ? (a.firstChild.style.textShadow = `1px 1px ${nf}, 0 1px ${nf}, -1px -1px ${Bt}, 0 -1px ${Bt}`)
            : i.edgeStyle === "uniform" &&
              (a.firstChild.style.textShadow = `0 0 4px ${Bt}, 0 0 4px ${Bt}, 0 0 4px ${Bt}, 0 0 4px ${Bt}`)),
        i.fontPercent && i.fontPercent !== 1)
      ) {
        const o = C.parseFloat(a.style.fontSize);
        (a.style.fontSize = o * i.fontPercent + "px"),
          (a.style.height = "auto"),
          (a.style.top = "auto");
      }
      i.fontFamily &&
        i.fontFamily !== "default" &&
        (i.fontFamily === "small-caps"
          ? (a.firstChild.style.fontVariant = "small-caps")
          : (a.firstChild.style.fontFamily = $E[i.fontFamily]));
    }
  }
  updateForTrack(e) {
    if (
      (Array.isArray(e) || (e = [e]),
      typeof C.WebVTT != "function" || e.every((s) => !s.activeCues))
    )
      return;
    const i = [];
    for (let s = 0; s < e.length; ++s) {
      const n = e[s];
      for (let r = 0; r < n.activeCues.length; ++r) i.push(n.activeCues[r]);
    }
    C.WebVTT.processCues(C, i, this.el_);
    for (let s = 0; s < e.length; ++s) {
      const n = e[s];
      for (let r = 0; r < n.activeCues.length; ++r) {
        const a = n.activeCues[r].displayState;
        ys(
          a,
          "vjs-text-track-cue",
          "vjs-text-track-cue-" + (n.language ? n.language : s)
        ),
          n.language && cn(a, "lang", n.language);
      }
      this.player_.textTrackSettings && this.updateDisplayState(n);
    }
  }
}
B.registerComponent("TextTrackDisplay", jE);
class HE extends B {
  createEl() {
    const e = this.player_.isAudio(),
      i = this.localize(e ? "Audio Player" : "Video Player"),
      s = ye("span", {
        className: "vjs-control-text",
        textContent: this.localize("{1} is loading.", [i]),
      }),
      n = super.createEl("div", {
        className: "vjs-loading-spinner",
        dir: "ltr",
      });
    return n.appendChild(s), n;
  }
}
B.registerComponent("LoadingSpinner", HE);
class Zt extends Ho {
  createEl(e, i = {}, s = {}) {
    (e = "button"),
      (i = Object.assign({ className: this.buildCSSClass() }, i)),
      (s = Object.assign({ type: "button" }, s));
    const n = ye(e, i, s);
    return (
      n.appendChild(
        ye("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": !0 })
      ),
      this.createControlTextEl(n),
      n
    );
  }
  addChild(e, i = {}) {
    const s = this.constructor.name;
    return (
      be.warn(
        `Adding an actionable (user controllable) child to a Button (${s}) is not supported; use a ClickableComponent instead.`
      ),
      B.prototype.addChild.call(this, e, i)
    );
  }
  enable() {
    super.enable(), this.el_.removeAttribute("disabled");
  }
  disable() {
    super.disable(), this.el_.setAttribute("disabled", "disabled");
  }
  handleKeyDown(e) {
    if (he.isEventKey(e, "Space") || he.isEventKey(e, "Enter")) {
      e.stopPropagation();
      return;
    }
    super.handleKeyDown(e);
  }
}
B.registerComponent("Button", Zt);
class mg extends Zt {
  constructor(e, i) {
    super(e, i),
      (this.mouseused_ = !1),
      this.on("mousedown", (s) => this.handleMouseDown(s));
  }
  buildCSSClass() {
    return "vjs-big-play-button";
  }
  handleClick(e) {
    const i = this.player_.play();
    if (this.mouseused_ && e.clientX && e.clientY) {
      ci(i), this.player_.tech(!0) && this.player_.tech(!0).focus();
      return;
    }
    const s = this.player_.getChild("controlBar"),
      n = s && s.getChild("playToggle");
    if (!n) {
      this.player_.tech(!0).focus();
      return;
    }
    const r = () => n.focus();
    nr(i) ? i.then(r, () => {}) : this.setTimeout(r, 1);
  }
  handleKeyDown(e) {
    (this.mouseused_ = !1), super.handleKeyDown(e);
  }
  handleMouseDown(e) {
    this.mouseused_ = !0;
  }
}
mg.prototype.controlText_ = "Play Video";
B.registerComponent("BigPlayButton", mg);
class VE extends Zt {
  constructor(e, i) {
    super(e, i),
      this.controlText((i && i.controlText) || this.localize("Close"));
  }
  buildCSSClass() {
    return `vjs-close-button ${super.buildCSSClass()}`;
  }
  handleClick(e) {
    this.trigger({ type: "close", bubbles: !1 });
  }
  handleKeyDown(e) {
    he.isEventKey(e, "Esc")
      ? (e.preventDefault(), e.stopPropagation(), this.trigger("click"))
      : super.handleKeyDown(e);
  }
}
B.registerComponent("CloseButton", VE);
class gg extends Zt {
  constructor(e, i = {}) {
    super(e, i),
      (i.replay = i.replay === void 0 || i.replay),
      this.on(e, "play", (s) => this.handlePlay(s)),
      this.on(e, "pause", (s) => this.handlePause(s)),
      i.replay && this.on(e, "ended", (s) => this.handleEnded(s));
  }
  buildCSSClass() {
    return `vjs-play-control ${super.buildCSSClass()}`;
  }
  handleClick(e) {
    this.player_.paused() ? ci(this.player_.play()) : this.player_.pause();
  }
  handleSeeked(e) {
    this.removeClass("vjs-ended"),
      this.player_.paused() ? this.handlePause(e) : this.handlePlay(e);
  }
  handlePlay(e) {
    this.removeClass("vjs-ended", "vjs-paused"),
      this.addClass("vjs-playing"),
      this.controlText("Pause");
  }
  handlePause(e) {
    this.removeClass("vjs-playing"),
      this.addClass("vjs-paused"),
      this.controlText("Play");
  }
  handleEnded(e) {
    this.removeClass("vjs-playing"),
      this.addClass("vjs-ended"),
      this.controlText("Replay"),
      this.one(this.player_, "seeked", (i) => this.handleSeeked(i));
  }
}
gg.prototype.controlText_ = "Play";
B.registerComponent("PlayToggle", gg);
class Sn extends B {
  constructor(e, i) {
    super(e, i),
      this.on(e, ["timeupdate", "ended"], (s) => this.updateContent(s)),
      this.updateTextNode_();
  }
  createEl() {
    const e = this.buildCSSClass(),
      i = super.createEl("div", {
        className: `${e} vjs-time-control vjs-control`,
      }),
      s = ye(
        "span",
        {
          className: "vjs-control-text",
          textContent: `${this.localize(this.labelText_)} `,
        },
        { role: "presentation" }
      );
    return (
      i.appendChild(s),
      (this.contentEl_ = ye(
        "span",
        { className: `${e}-display` },
        { "aria-live": "off", role: "presentation" }
      )),
      i.appendChild(this.contentEl_),
      i
    );
  }
  dispose() {
    (this.contentEl_ = null), (this.textNode_ = null), super.dispose();
  }
  updateTextNode_(e = 0) {
    (e = bs(e)),
      this.formattedTime_ !== e &&
        ((this.formattedTime_ = e),
        this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", () => {
          if (!this.contentEl_) return;
          let i = this.textNode_;
          i &&
            this.contentEl_.firstChild !== i &&
            ((i = null),
            be.warn(
              "TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead."
            )),
            (this.textNode_ = K.createTextNode(this.formattedTime_)),
            this.textNode_ &&
              (i
                ? this.contentEl_.replaceChild(this.textNode_, i)
                : this.contentEl_.appendChild(this.textNode_));
        }));
  }
  updateContent(e) {}
}
Sn.prototype.labelText_ = "Time";
Sn.prototype.controlText_ = "Time";
B.registerComponent("TimeDisplay", Sn);
class Ac extends Sn {
  buildCSSClass() {
    return "vjs-current-time";
  }
  updateContent(e) {
    let i;
    this.player_.ended()
      ? (i = this.player_.duration())
      : (i = this.player_.scrubbing()
          ? this.player_.getCache().currentTime
          : this.player_.currentTime()),
      this.updateTextNode_(i);
  }
}
Ac.prototype.labelText_ = "Current Time";
Ac.prototype.controlText_ = "Current Time";
B.registerComponent("CurrentTimeDisplay", Ac);
class kc extends Sn {
  constructor(e, i) {
    super(e, i);
    const s = (n) => this.updateContent(n);
    this.on(e, "durationchange", s),
      this.on(e, "loadstart", s),
      this.on(e, "loadedmetadata", s);
  }
  buildCSSClass() {
    return "vjs-duration";
  }
  updateContent(e) {
    const i = this.player_.duration();
    this.updateTextNode_(i);
  }
}
kc.prototype.labelText_ = "Duration";
kc.prototype.controlText_ = "Duration";
B.registerComponent("DurationDisplay", kc);
class WE extends B {
  createEl() {
    const e = super.createEl(
        "div",
        { className: "vjs-time-control vjs-time-divider" },
        { "aria-hidden": !0 }
      ),
      i = super.createEl("div"),
      s = super.createEl("span", { textContent: "/" });
    return i.appendChild(s), e.appendChild(i), e;
  }
}
B.registerComponent("TimeDivider", WE);
class Ic extends Sn {
  constructor(e, i) {
    super(e, i), this.on(e, "durationchange", (s) => this.updateContent(s));
  }
  buildCSSClass() {
    return "vjs-remaining-time";
  }
  createEl() {
    const e = super.createEl();
    return (
      this.options_.displayNegative !== !1 &&
        e.insertBefore(
          ye("span", {}, { "aria-hidden": !0 }, "-"),
          this.contentEl_
        ),
      e
    );
  }
  updateContent(e) {
    if (typeof this.player_.duration() != "number") return;
    let i;
    this.player_.ended()
      ? (i = 0)
      : this.player_.remainingTimeDisplay
      ? (i = this.player_.remainingTimeDisplay())
      : (i = this.player_.remainingTime()),
      this.updateTextNode_(i);
  }
}
Ic.prototype.labelText_ = "Remaining Time";
Ic.prototype.controlText_ = "Remaining Time";
B.registerComponent("RemainingTimeDisplay", Ic);
class qE extends B {
  constructor(e, i) {
    super(e, i),
      this.updateShowing(),
      this.on(this.player(), "durationchange", (s) => this.updateShowing(s));
  }
  createEl() {
    const e = super.createEl("div", {
      className: "vjs-live-control vjs-control",
    });
    return (
      (this.contentEl_ = ye(
        "div",
        { className: "vjs-live-display" },
        { "aria-live": "off" }
      )),
      this.contentEl_.appendChild(
        ye("span", {
          className: "vjs-control-text",
          textContent: `${this.localize("Stream Type")} `,
        })
      ),
      this.contentEl_.appendChild(K.createTextNode(this.localize("LIVE"))),
      e.appendChild(this.contentEl_),
      e
    );
  }
  dispose() {
    (this.contentEl_ = null), super.dispose();
  }
  updateShowing(e) {
    this.player().duration() === 1 / 0 ? this.show() : this.hide();
  }
}
B.registerComponent("LiveDisplay", qE);
class _g extends Zt {
  constructor(e, i) {
    super(e, i),
      this.updateLiveEdgeStatus(),
      this.player_.liveTracker &&
        ((this.updateLiveEdgeStatusHandler_ = (s) =>
          this.updateLiveEdgeStatus(s)),
        this.on(
          this.player_.liveTracker,
          "liveedgechange",
          this.updateLiveEdgeStatusHandler_
        ));
  }
  createEl() {
    const e = super.createEl("button", {
      className: "vjs-seek-to-live-control vjs-control",
    });
    return (
      (this.textEl_ = ye(
        "span",
        {
          className: "vjs-seek-to-live-text",
          textContent: this.localize("LIVE"),
        },
        { "aria-hidden": "true" }
      )),
      e.appendChild(this.textEl_),
      e
    );
  }
  updateLiveEdgeStatus() {
    !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge()
      ? (this.setAttribute("aria-disabled", !0),
        this.addClass("vjs-at-live-edge"),
        this.controlText("Seek to live, currently playing live"))
      : (this.setAttribute("aria-disabled", !1),
        this.removeClass("vjs-at-live-edge"),
        this.controlText("Seek to live, currently behind live"));
  }
  handleClick() {
    this.player_.liveTracker.seekToLiveEdge();
  }
  dispose() {
    this.player_.liveTracker &&
      this.off(
        this.player_.liveTracker,
        "liveedgechange",
        this.updateLiveEdgeStatusHandler_
      ),
      (this.textEl_ = null),
      super.dispose();
  }
}
_g.prototype.controlText_ = "Seek to live, currently playing live";
B.registerComponent("SeekToLive", _g);
function Ir(t, e, i) {
  return (t = Number(t)), Math.min(i, Math.max(e, isNaN(t) ? e : t));
}
var zE = Object.freeze({ __proto__: null, clamp: Ir });
class Oc extends B {
  constructor(e, i) {
    super(e, i),
      (this.handleMouseDown_ = (s) => this.handleMouseDown(s)),
      (this.handleMouseUp_ = (s) => this.handleMouseUp(s)),
      (this.handleKeyDown_ = (s) => this.handleKeyDown(s)),
      (this.handleClick_ = (s) => this.handleClick(s)),
      (this.handleMouseMove_ = (s) => this.handleMouseMove(s)),
      (this.update_ = (s) => this.update(s)),
      (this.bar = this.getChild(this.options_.barName)),
      this.vertical(!!this.options_.vertical),
      this.enable();
  }
  enabled() {
    return this.enabled_;
  }
  enable() {
    this.enabled() ||
      (this.on("mousedown", this.handleMouseDown_),
      this.on("touchstart", this.handleMouseDown_),
      this.on("keydown", this.handleKeyDown_),
      this.on("click", this.handleClick_),
      this.on(this.player_, "controlsvisible", this.update),
      this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
      this.removeClass("disabled"),
      this.setAttribute("tabindex", 0),
      (this.enabled_ = !0));
  }
  disable() {
    if (!this.enabled()) return;
    const e = this.bar.el_.ownerDocument;
    this.off("mousedown", this.handleMouseDown_),
      this.off("touchstart", this.handleMouseDown_),
      this.off("keydown", this.handleKeyDown_),
      this.off("click", this.handleClick_),
      this.off(this.player_, "controlsvisible", this.update_),
      this.off(e, "mousemove", this.handleMouseMove_),
      this.off(e, "mouseup", this.handleMouseUp_),
      this.off(e, "touchmove", this.handleMouseMove_),
      this.off(e, "touchend", this.handleMouseUp_),
      this.removeAttribute("tabindex"),
      this.addClass("disabled"),
      this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
      (this.enabled_ = !1);
  }
  createEl(e, i = {}, s = {}) {
    return (
      (i.className = i.className + " vjs-slider"),
      (i = Object.assign({ tabIndex: 0 }, i)),
      (s = Object.assign(
        {
          role: "slider",
          "aria-valuenow": 0,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
        },
        s
      )),
      super.createEl(e, i, s)
    );
  }
  handleMouseDown(e) {
    const i = this.bar.el_.ownerDocument;
    e.type === "mousedown" && e.preventDefault(),
      e.type === "touchstart" && !vi && e.preventDefault(),
      qm(),
      this.addClass("vjs-sliding"),
      this.trigger("slideractive"),
      this.on(i, "mousemove", this.handleMouseMove_),
      this.on(i, "mouseup", this.handleMouseUp_),
      this.on(i, "touchmove", this.handleMouseMove_),
      this.on(i, "touchend", this.handleMouseUp_),
      this.handleMouseMove(e, !0);
  }
  handleMouseMove(e) {}
  handleMouseUp() {
    const e = this.bar.el_.ownerDocument;
    zm(),
      this.removeClass("vjs-sliding"),
      this.trigger("sliderinactive"),
      this.off(e, "mousemove", this.handleMouseMove_),
      this.off(e, "mouseup", this.handleMouseUp_),
      this.off(e, "touchmove", this.handleMouseMove_),
      this.off(e, "touchend", this.handleMouseUp_),
      this.update();
  }
  update() {
    if (!this.el_ || !this.bar) return;
    const e = this.getProgress();
    return (
      e === this.progress_ ||
        ((this.progress_ = e),
        this.requestNamedAnimationFrame("Slider#update", () => {
          const i = this.vertical() ? "height" : "width";
          this.bar.el().style[i] = (e * 100).toFixed(2) + "%";
        })),
      e
    );
  }
  getProgress() {
    return Number(Ir(this.getPercent(), 0, 1).toFixed(4));
  }
  calculateDistance(e) {
    const i = Mo(this.el_, e);
    return this.vertical() ? i.y : i.x;
  }
  handleKeyDown(e) {
    he.isEventKey(e, "Left") || he.isEventKey(e, "Down")
      ? (e.preventDefault(), e.stopPropagation(), this.stepBack())
      : he.isEventKey(e, "Right") || he.isEventKey(e, "Up")
      ? (e.preventDefault(), e.stopPropagation(), this.stepForward())
      : super.handleKeyDown(e);
  }
  handleClick(e) {
    e.stopPropagation(), e.preventDefault();
  }
  vertical(e) {
    if (e === void 0) return this.vertical_ || !1;
    (this.vertical_ = !!e),
      this.vertical_
        ? this.addClass("vjs-slider-vertical")
        : this.addClass("vjs-slider-horizontal");
  }
}
B.registerComponent("Slider", Oc);
const Al = (t, e) => Ir((t / e) * 100, 0, 100).toFixed(2) + "%";
class GE extends B {
  constructor(e, i) {
    super(e, i),
      (this.partEls_ = []),
      this.on(e, "progress", (s) => this.update(s));
  }
  createEl() {
    const e = super.createEl("div", { className: "vjs-load-progress" }),
      i = ye("span", { className: "vjs-control-text" }),
      s = ye("span", { textContent: this.localize("Loaded") }),
      n = K.createTextNode(": ");
    return (
      (this.percentageEl_ = ye("span", {
        className: "vjs-control-text-loaded-percentage",
        textContent: "0%",
      })),
      e.appendChild(i),
      i.appendChild(s),
      i.appendChild(n),
      i.appendChild(this.percentageEl_),
      e
    );
  }
  dispose() {
    (this.partEls_ = null), (this.percentageEl_ = null), super.dispose();
  }
  update(e) {
    this.requestNamedAnimationFrame("LoadProgressBar#update", () => {
      const i = this.player_.liveTracker,
        s = this.player_.buffered(),
        n = i && i.isLive() ? i.seekableEnd() : this.player_.duration(),
        r = this.player_.bufferedEnd(),
        a = this.partEls_,
        o = Al(r, n);
      this.percent_ !== o &&
        ((this.el_.style.width = o),
        Qi(this.percentageEl_, o),
        (this.percent_ = o));
      for (let u = 0; u < s.length; u++) {
        const f = s.start(u),
          p = s.end(u);
        let _ = a[u];
        _ || ((_ = this.el_.appendChild(ye())), (a[u] = _)),
          !(_.dataset.start === f && _.dataset.end === p) &&
            ((_.dataset.start = f),
            (_.dataset.end = p),
            (_.style.left = Al(f, r)),
            (_.style.width = Al(p - f, r)));
      }
      for (let u = a.length; u > s.length; u--) this.el_.removeChild(a[u - 1]);
      a.length = s.length;
    });
  }
}
B.registerComponent("LoadProgressBar", GE);
class KE extends B {
  constructor(e, i) {
    super(e, i), (this.update = bi(Le(this, this.update), jt));
  }
  createEl() {
    return super.createEl(
      "div",
      { className: "vjs-time-tooltip" },
      { "aria-hidden": "true" }
    );
  }
  update(e, i, s) {
    const n = br(this.el_),
      r = dn(this.player_.el()),
      a = e.width * i;
    if (!r || !n) return;
    const o = e.left - r.left + a,
      u = e.width - a + (r.right - e.right);
    let f = n.width / 2;
    o < f ? (f += f - o) : u < f && (f = u),
      f < 0 ? (f = 0) : f > n.width && (f = n.width),
      (f = Math.round(f)),
      (this.el_.style.right = `-${f}px`),
      this.write(s);
  }
  write(e) {
    Qi(this.el_, e);
  }
  updateTime(e, i, s, n) {
    this.requestNamedAnimationFrame("TimeTooltip#updateTime", () => {
      let r;
      const a = this.player_.duration();
      if (this.player_.liveTracker && this.player_.liveTracker.isLive()) {
        const o = this.player_.liveTracker.liveWindow(),
          u = o - i * o;
        r = (u < 1 ? "" : "-") + bs(u, o);
      } else r = bs(s, a);
      this.update(e, i, r), n && n();
    });
  }
}
B.registerComponent("TimeTooltip", KE);
class Pc extends B {
  constructor(e, i) {
    super(e, i), (this.update = bi(Le(this, this.update), jt));
  }
  createEl() {
    return super.createEl(
      "div",
      { className: "vjs-play-progress vjs-slider-bar" },
      { "aria-hidden": "true" }
    );
  }
  update(e, i) {
    const s = this.getChild("timeTooltip");
    if (!s) return;
    const n = this.player_.scrubbing()
      ? this.player_.getCache().currentTime
      : this.player_.currentTime();
    s.updateTime(e, i, n);
  }
}
Pc.prototype.options_ = { children: [] };
!yt && !yi && Pc.prototype.options_.children.push("timeTooltip");
B.registerComponent("PlayProgressBar", Pc);
class yg extends B {
  constructor(e, i) {
    super(e, i), (this.update = bi(Le(this, this.update), jt));
  }
  createEl() {
    return super.createEl("div", { className: "vjs-mouse-display" });
  }
  update(e, i) {
    const s = i * this.player_.duration();
    this.getChild("timeTooltip").updateTime(e, i, s, () => {
      this.el_.style.left = `${e.width * i}px`;
    });
  }
}
yg.prototype.options_ = { children: ["timeTooltip"] };
B.registerComponent("MouseTimeDisplay", yg);
const ya = 5,
  rf = 12;
class Dc extends Oc {
  constructor(e, i) {
    super(e, i), this.setEventHandlers_();
  }
  setEventHandlers_() {
    (this.update_ = Le(this, this.update)),
      (this.update = bi(this.update_, jt)),
      this.on(
        this.player_,
        ["ended", "durationchange", "timeupdate"],
        this.update
      ),
      this.player_.liveTracker &&
        this.on(this.player_.liveTracker, "liveedgechange", this.update),
      (this.updateInterval = null),
      (this.enableIntervalHandler_ = (e) => this.enableInterval_(e)),
      (this.disableIntervalHandler_ = (e) => this.disableInterval_(e)),
      this.on(this.player_, ["playing"], this.enableIntervalHandler_),
      this.on(
        this.player_,
        ["ended", "pause", "waiting"],
        this.disableIntervalHandler_
      ),
      "hidden" in K &&
        "visibilityState" in K &&
        this.on(K, "visibilitychange", this.toggleVisibility_);
  }
  toggleVisibility_(e) {
    K.visibilityState === "hidden"
      ? (this.cancelNamedAnimationFrame("SeekBar#update"),
        this.cancelNamedAnimationFrame("Slider#update"),
        this.disableInterval_(e))
      : (!this.player_.ended() &&
          !this.player_.paused() &&
          this.enableInterval_(),
        this.update());
  }
  enableInterval_() {
    this.updateInterval ||
      (this.updateInterval = this.setInterval(this.update, jt));
  }
  disableInterval_(e) {
    (this.player_.liveTracker &&
      this.player_.liveTracker.isLive() &&
      e &&
      e.type !== "ended") ||
      (this.updateInterval &&
        (this.clearInterval(this.updateInterval),
        (this.updateInterval = null)));
  }
  createEl() {
    return super.createEl(
      "div",
      { className: "vjs-progress-holder" },
      { "aria-label": this.localize("Progress Bar") }
    );
  }
  update(e) {
    if (K.visibilityState === "hidden") return;
    const i = super.update();
    return (
      this.requestNamedAnimationFrame("SeekBar#update", () => {
        const s = this.player_.ended()
            ? this.player_.duration()
            : this.getCurrentTime_(),
          n = this.player_.liveTracker;
        let r = this.player_.duration();
        n && n.isLive() && (r = this.player_.liveTracker.liveCurrentTime()),
          this.percent_ !== i &&
            (this.el_.setAttribute("aria-valuenow", (i * 100).toFixed(2)),
            (this.percent_ = i)),
          (this.currentTime_ !== s || this.duration_ !== r) &&
            (this.el_.setAttribute(
              "aria-valuetext",
              this.localize(
                "progress bar timing: currentTime={1} duration={2}",
                [bs(s, r), bs(r, r)],
                "{1} of {2}"
              )
            ),
            (this.currentTime_ = s),
            (this.duration_ = r)),
          this.bar && this.bar.update(dn(this.el()), this.getProgress());
      }),
      i
    );
  }
  userSeek_(e) {
    this.player_.liveTracker &&
      this.player_.liveTracker.isLive() &&
      this.player_.liveTracker.nextSeekedFromUser(),
      this.player_.currentTime(e);
  }
  getCurrentTime_() {
    return this.player_.scrubbing()
      ? this.player_.getCache().currentTime
      : this.player_.currentTime();
  }
  getPercent() {
    const e = this.getCurrentTime_();
    let i;
    const s = this.player_.liveTracker;
    return (
      s && s.isLive()
        ? ((i = (e - s.seekableStart()) / s.liveWindow()),
          s.atLiveEdge() && (i = 1))
        : (i = e / this.player_.duration()),
      i
    );
  }
  handleMouseDown(e) {
    xr(e) &&
      (e.stopPropagation(),
      (this.videoWasPlaying = !this.player_.paused()),
      this.player_.pause(),
      super.handleMouseDown(e));
  }
  handleMouseMove(e, i = !1) {
    if (!xr(e)) return;
    !i && !this.player_.scrubbing() && this.player_.scrubbing(!0);
    let s;
    const n = this.calculateDistance(e),
      r = this.player_.liveTracker;
    if (!r || !r.isLive())
      (s = n * this.player_.duration()),
        s === this.player_.duration() && (s = s - 0.1);
    else {
      if (n >= 0.99) {
        r.seekToLiveEdge();
        return;
      }
      const a = r.seekableStart(),
        o = r.liveCurrentTime();
      if (
        ((s = a + n * r.liveWindow()),
        s >= o && (s = o),
        s <= a && (s = a + 0.1),
        s === 1 / 0)
      )
        return;
    }
    this.userSeek_(s);
  }
  enable() {
    super.enable();
    const e = this.getChild("mouseTimeDisplay");
    e && e.show();
  }
  disable() {
    super.disable();
    const e = this.getChild("mouseTimeDisplay");
    e && e.hide();
  }
  handleMouseUp(e) {
    super.handleMouseUp(e),
      e && e.stopPropagation(),
      this.player_.scrubbing(!1),
      this.player_.trigger({
        type: "timeupdate",
        target: this,
        manuallyTriggered: !0,
      }),
      this.videoWasPlaying ? ci(this.player_.play()) : this.update_();
  }
  stepForward() {
    this.userSeek_(this.player_.currentTime() + ya);
  }
  stepBack() {
    this.userSeek_(this.player_.currentTime() - ya);
  }
  handleAction(e) {
    this.player_.paused() ? this.player_.play() : this.player_.pause();
  }
  handleKeyDown(e) {
    const i = this.player_.liveTracker;
    if (he.isEventKey(e, "Space") || he.isEventKey(e, "Enter"))
      e.preventDefault(), e.stopPropagation(), this.handleAction(e);
    else if (he.isEventKey(e, "Home"))
      e.preventDefault(), e.stopPropagation(), this.userSeek_(0);
    else if (he.isEventKey(e, "End"))
      e.preventDefault(),
        e.stopPropagation(),
        i && i.isLive()
          ? this.userSeek_(i.liveCurrentTime())
          : this.userSeek_(this.player_.duration());
    else if (/^[0-9]$/.test(he(e))) {
      e.preventDefault(), e.stopPropagation();
      const s = ((he.codes[he(e)] - he.codes[0]) * 10) / 100;
      i && i.isLive()
        ? this.userSeek_(i.seekableStart() + i.liveWindow() * s)
        : this.userSeek_(this.player_.duration() * s);
    } else
      he.isEventKey(e, "PgDn")
        ? (e.preventDefault(),
          e.stopPropagation(),
          this.userSeek_(this.player_.currentTime() - ya * rf))
        : he.isEventKey(e, "PgUp")
        ? (e.preventDefault(),
          e.stopPropagation(),
          this.userSeek_(this.player_.currentTime() + ya * rf))
        : super.handleKeyDown(e);
  }
  dispose() {
    this.disableInterval_(),
      this.off(
        this.player_,
        ["ended", "durationchange", "timeupdate"],
        this.update
      ),
      this.player_.liveTracker &&
        this.off(this.player_.liveTracker, "liveedgechange", this.update),
      this.off(this.player_, ["playing"], this.enableIntervalHandler_),
      this.off(
        this.player_,
        ["ended", "pause", "waiting"],
        this.disableIntervalHandler_
      ),
      "hidden" in K &&
        "visibilityState" in K &&
        this.off(K, "visibilitychange", this.toggleVisibility_),
      super.dispose();
  }
}
Dc.prototype.options_ = {
  children: ["loadProgressBar", "playProgressBar"],
  barName: "playProgressBar",
};
!yt && !yi && Dc.prototype.options_.children.splice(1, 0, "mouseTimeDisplay");
B.registerComponent("SeekBar", Dc);
class vg extends B {
  constructor(e, i) {
    super(e, i),
      (this.handleMouseMove = bi(Le(this, this.handleMouseMove), jt)),
      (this.throttledHandleMouseSeek = bi(Le(this, this.handleMouseSeek), jt)),
      (this.handleMouseUpHandler_ = (s) => this.handleMouseUp(s)),
      (this.handleMouseDownHandler_ = (s) => this.handleMouseDown(s)),
      this.enable();
  }
  createEl() {
    return super.createEl("div", {
      className: "vjs-progress-control vjs-control",
    });
  }
  handleMouseMove(e) {
    const i = this.getChild("seekBar");
    if (!i) return;
    const s = i.getChild("playProgressBar"),
      n = i.getChild("mouseTimeDisplay");
    if (!s && !n) return;
    const r = i.el(),
      a = br(r);
    let o = Mo(r, e).x;
    (o = Ir(o, 0, 1)), n && n.update(a, o), s && s.update(a, i.getProgress());
  }
  handleMouseSeek(e) {
    const i = this.getChild("seekBar");
    i && i.handleMouseMove(e);
  }
  enabled() {
    return this.enabled_;
  }
  disable() {
    if (
      (this.children().forEach((e) => e.disable && e.disable()),
      !!this.enabled() &&
        (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_),
        this.off(this.el_, "mousemove", this.handleMouseMove),
        this.removeListenersAddedOnMousedownAndTouchstart(),
        this.addClass("disabled"),
        (this.enabled_ = !1),
        this.player_.scrubbing()))
    ) {
      const e = this.getChild("seekBar");
      this.player_.scrubbing(!1), e.videoWasPlaying && ci(this.player_.play());
    }
  }
  enable() {
    this.children().forEach((e) => e.enable && e.enable()),
      !this.enabled() &&
        (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_),
        this.on(this.el_, "mousemove", this.handleMouseMove),
        this.removeClass("disabled"),
        (this.enabled_ = !0));
  }
  removeListenersAddedOnMousedownAndTouchstart() {
    const e = this.el_.ownerDocument;
    this.off(e, "mousemove", this.throttledHandleMouseSeek),
      this.off(e, "touchmove", this.throttledHandleMouseSeek),
      this.off(e, "mouseup", this.handleMouseUpHandler_),
      this.off(e, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseDown(e) {
    const i = this.el_.ownerDocument,
      s = this.getChild("seekBar");
    s && s.handleMouseDown(e),
      this.on(i, "mousemove", this.throttledHandleMouseSeek),
      this.on(i, "touchmove", this.throttledHandleMouseSeek),
      this.on(i, "mouseup", this.handleMouseUpHandler_),
      this.on(i, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseUp(e) {
    const i = this.getChild("seekBar");
    i && i.handleMouseUp(e),
      this.removeListenersAddedOnMousedownAndTouchstart();
  }
}
vg.prototype.options_ = { children: ["seekBar"] };
B.registerComponent("ProgressControl", vg);
class Tg extends Zt {
  constructor(e, i) {
    super(e, i),
      this.on(e, ["enterpictureinpicture", "leavepictureinpicture"], (s) =>
        this.handlePictureInPictureChange(s)
      ),
      this.on(e, ["disablepictureinpicturechanged", "loadedmetadata"], (s) =>
        this.handlePictureInPictureEnabledChange(s)
      ),
      this.on(
        e,
        ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"],
        () => {
          e.currentType().substring(0, 5) === "audio" ||
          e.audioPosterMode() ||
          e.audioOnlyMode()
            ? (e.isInPictureInPicture() && e.exitPictureInPicture(),
              this.hide())
            : this.show();
        }
      ),
      this.disable();
  }
  buildCSSClass() {
    return `vjs-picture-in-picture-control ${super.buildCSSClass()}`;
  }
  handlePictureInPictureEnabledChange() {
    K.pictureInPictureEnabled && this.player_.disablePictureInPicture() === !1
      ? this.enable()
      : this.disable();
  }
  handlePictureInPictureChange(e) {
    this.player_.isInPictureInPicture()
      ? this.controlText("Exit Picture-in-Picture")
      : this.controlText("Picture-in-Picture"),
      this.handlePictureInPictureEnabledChange();
  }
  handleClick(e) {
    this.player_.isInPictureInPicture()
      ? this.player_.exitPictureInPicture()
      : this.player_.requestPictureInPicture();
  }
}
Tg.prototype.controlText_ = "Picture-in-Picture";
B.registerComponent("PictureInPictureToggle", Tg);
class bg extends Zt {
  constructor(e, i) {
    super(e, i),
      this.on(e, "fullscreenchange", (s) => this.handleFullscreenChange(s)),
      K[e.fsApi_.fullscreenEnabled] === !1 && this.disable();
  }
  buildCSSClass() {
    return `vjs-fullscreen-control ${super.buildCSSClass()}`;
  }
  handleFullscreenChange(e) {
    this.player_.isFullscreen()
      ? this.controlText("Exit Fullscreen")
      : this.controlText("Fullscreen");
  }
  handleClick(e) {
    this.player_.isFullscreen()
      ? this.player_.exitFullscreen()
      : this.player_.requestFullscreen();
  }
}
bg.prototype.controlText_ = "Fullscreen";
B.registerComponent("FullscreenToggle", bg);
const XE = function (t, e) {
  e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"),
    t.on(e, "loadstart", function () {
      e.tech_.featuresVolumeControl
        ? t.removeClass("vjs-hidden")
        : t.addClass("vjs-hidden");
    });
};
class YE extends B {
  createEl() {
    const e = super.createEl("div", { className: "vjs-volume-level" });
    return (
      e.appendChild(super.createEl("span", { className: "vjs-control-text" })),
      e
    );
  }
}
B.registerComponent("VolumeLevel", YE);
class QE extends B {
  constructor(e, i) {
    super(e, i), (this.update = bi(Le(this, this.update), jt));
  }
  createEl() {
    return super.createEl(
      "div",
      { className: "vjs-volume-tooltip" },
      { "aria-hidden": "true" }
    );
  }
  update(e, i, s, n) {
    if (!s) {
      const r = dn(this.el_),
        a = dn(this.player_.el()),
        o = e.width * i;
      if (!a || !r) return;
      const u = e.left - a.left + o,
        f = e.width - o + (a.right - e.right);
      let p = r.width / 2;
      u < p ? (p += p - u) : f < p && (p = f),
        p < 0 ? (p = 0) : p > r.width && (p = r.width),
        (this.el_.style.right = `-${p}px`);
    }
    this.write(`${n}%`);
  }
  write(e) {
    Qi(this.el_, e);
  }
  updateVolume(e, i, s, n, r) {
    this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", () => {
      this.update(e, i, s, n.toFixed(0)), r && r();
    });
  }
}
B.registerComponent("VolumeLevelTooltip", QE);
class xg extends B {
  constructor(e, i) {
    super(e, i), (this.update = bi(Le(this, this.update), jt));
  }
  createEl() {
    return super.createEl("div", { className: "vjs-mouse-display" });
  }
  update(e, i, s) {
    const n = 100 * i;
    this.getChild("volumeLevelTooltip").updateVolume(e, i, s, n, () => {
      s
        ? (this.el_.style.bottom = `${e.height * i}px`)
        : (this.el_.style.left = `${e.width * i}px`);
    });
  }
}
xg.prototype.options_ = { children: ["volumeLevelTooltip"] };
B.registerComponent("MouseVolumeLevelDisplay", xg);
class Vo extends Oc {
  constructor(e, i) {
    super(e, i),
      this.on("slideractive", (s) => this.updateLastVolume_(s)),
      this.on(e, "volumechange", (s) => this.updateARIAAttributes(s)),
      e.ready(() => this.updateARIAAttributes());
  }
  createEl() {
    return super.createEl(
      "div",
      { className: "vjs-volume-bar vjs-slider-bar" },
      { "aria-label": this.localize("Volume Level"), "aria-live": "polite" }
    );
  }
  handleMouseDown(e) {
    xr(e) && super.handleMouseDown(e);
  }
  handleMouseMove(e) {
    const i = this.getChild("mouseVolumeLevelDisplay");
    if (i) {
      const s = this.el(),
        n = dn(s),
        r = this.vertical();
      let a = Mo(s, e);
      (a = r ? a.y : a.x), (a = Ir(a, 0, 1)), i.update(n, a, r);
    }
    xr(e) &&
      (this.checkMuted(), this.player_.volume(this.calculateDistance(e)));
  }
  checkMuted() {
    this.player_.muted() && this.player_.muted(!1);
  }
  getPercent() {
    return this.player_.muted() ? 0 : this.player_.volume();
  }
  stepForward() {
    this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1);
  }
  stepBack() {
    this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1);
  }
  updateARIAAttributes(e) {
    const i = this.player_.muted() ? 0 : this.volumeAsPercentage_();
    this.el_.setAttribute("aria-valuenow", i),
      this.el_.setAttribute("aria-valuetext", i + "%");
  }
  volumeAsPercentage_() {
    return Math.round(this.player_.volume() * 100);
  }
  updateLastVolume_() {
    const e = this.player_.volume();
    this.one("sliderinactive", () => {
      this.player_.volume() === 0 && this.player_.lastVolume_(e);
    });
  }
}
Vo.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" };
!yt &&
  !yi &&
  Vo.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay");
Vo.prototype.playerEvent = "volumechange";
B.registerComponent("VolumeBar", Vo);
class Sg extends B {
  constructor(e, i = {}) {
    (i.vertical = i.vertical || !1),
      (typeof i.volumeBar > "u" || un(i.volumeBar)) &&
        ((i.volumeBar = i.volumeBar || {}),
        (i.volumeBar.vertical = i.vertical)),
      super(e, i),
      XE(this, e),
      (this.throttledHandleMouseMove = bi(Le(this, this.handleMouseMove), jt)),
      (this.handleMouseUpHandler_ = (s) => this.handleMouseUp(s)),
      this.on("mousedown", (s) => this.handleMouseDown(s)),
      this.on("touchstart", (s) => this.handleMouseDown(s)),
      this.on("mousemove", (s) => this.handleMouseMove(s)),
      this.on(this.volumeBar, ["focus", "slideractive"], () => {
        this.volumeBar.addClass("vjs-slider-active"),
          this.addClass("vjs-slider-active"),
          this.trigger("slideractive");
      }),
      this.on(this.volumeBar, ["blur", "sliderinactive"], () => {
        this.volumeBar.removeClass("vjs-slider-active"),
          this.removeClass("vjs-slider-active"),
          this.trigger("sliderinactive");
      });
  }
  createEl() {
    let e = "vjs-volume-horizontal";
    return (
      this.options_.vertical && (e = "vjs-volume-vertical"),
      super.createEl("div", {
        className: `vjs-volume-control vjs-control ${e}`,
      })
    );
  }
  handleMouseDown(e) {
    const i = this.el_.ownerDocument;
    this.on(i, "mousemove", this.throttledHandleMouseMove),
      this.on(i, "touchmove", this.throttledHandleMouseMove),
      this.on(i, "mouseup", this.handleMouseUpHandler_),
      this.on(i, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseUp(e) {
    const i = this.el_.ownerDocument;
    this.off(i, "mousemove", this.throttledHandleMouseMove),
      this.off(i, "touchmove", this.throttledHandleMouseMove),
      this.off(i, "mouseup", this.handleMouseUpHandler_),
      this.off(i, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseMove(e) {
    this.volumeBar.handleMouseMove(e);
  }
}
Sg.prototype.options_ = { children: ["volumeBar"] };
B.registerComponent("VolumeControl", Sg);
const JE = function (t, e) {
  e.tech_ && !e.tech_.featuresMuteControl && t.addClass("vjs-hidden"),
    t.on(e, "loadstart", function () {
      e.tech_.featuresMuteControl
        ? t.removeClass("vjs-hidden")
        : t.addClass("vjs-hidden");
    });
};
class Eg extends Zt {
  constructor(e, i) {
    super(e, i),
      JE(this, e),
      this.on(e, ["loadstart", "volumechange"], (s) => this.update(s));
  }
  buildCSSClass() {
    return `vjs-mute-control ${super.buildCSSClass()}`;
  }
  handleClick(e) {
    const i = this.player_.volume(),
      s = this.player_.lastVolume_();
    if (i === 0) {
      const n = s < 0.1 ? 0.1 : s;
      this.player_.volume(n), this.player_.muted(!1);
    } else this.player_.muted(!this.player_.muted());
  }
  update(e) {
    this.updateIcon_(), this.updateControlText_();
  }
  updateIcon_() {
    const e = this.player_.volume();
    let i = 3;
    yt &&
      this.player_.tech_ &&
      this.player_.tech_.el_ &&
      this.player_.muted(this.player_.tech_.el_.muted),
      e === 0 || this.player_.muted()
        ? (i = 0)
        : e < 0.33
        ? (i = 1)
        : e < 0.67 && (i = 2),
      Ro(
        this.el_,
        [0, 1, 2, 3].reduce((s, n) => s + `${n ? " " : ""}vjs-vol-${n}`, "")
      ),
      ys(this.el_, `vjs-vol-${i}`);
  }
  updateControlText_() {
    const i =
      this.player_.muted() || this.player_.volume() === 0 ? "Unmute" : "Mute";
    this.controlText() !== i && this.controlText(i);
  }
}
Eg.prototype.controlText_ = "Mute";
B.registerComponent("MuteToggle", Eg);
class Cg extends B {
  constructor(e, i = {}) {
    typeof i.inline < "u" ? (i.inline = i.inline) : (i.inline = !0),
      (typeof i.volumeControl > "u" || un(i.volumeControl)) &&
        ((i.volumeControl = i.volumeControl || {}),
        (i.volumeControl.vertical = !i.inline)),
      super(e, i),
      (this.handleKeyPressHandler_ = (s) => this.handleKeyPress(s)),
      this.on(e, ["loadstart"], (s) => this.volumePanelState_(s)),
      this.on(this.muteToggle, "keyup", (s) => this.handleKeyPress(s)),
      this.on(this.volumeControl, "keyup", (s) =>
        this.handleVolumeControlKeyUp(s)
      ),
      this.on("keydown", (s) => this.handleKeyPress(s)),
      this.on("mouseover", (s) => this.handleMouseOver(s)),
      this.on("mouseout", (s) => this.handleMouseOut(s)),
      this.on(this.volumeControl, ["slideractive"], this.sliderActive_),
      this.on(this.volumeControl, ["sliderinactive"], this.sliderInactive_);
  }
  sliderActive_() {
    this.addClass("vjs-slider-active");
  }
  sliderInactive_() {
    this.removeClass("vjs-slider-active");
  }
  volumePanelState_() {
    this.volumeControl.hasClass("vjs-hidden") &&
      this.muteToggle.hasClass("vjs-hidden") &&
      this.addClass("vjs-hidden"),
      this.volumeControl.hasClass("vjs-hidden") &&
        !this.muteToggle.hasClass("vjs-hidden") &&
        this.addClass("vjs-mute-toggle-only");
  }
  createEl() {
    let e = "vjs-volume-panel-horizontal";
    return (
      this.options_.inline || (e = "vjs-volume-panel-vertical"),
      super.createEl("div", { className: `vjs-volume-panel vjs-control ${e}` })
    );
  }
  dispose() {
    this.handleMouseOut(), super.dispose();
  }
  handleVolumeControlKeyUp(e) {
    he.isEventKey(e, "Esc") && this.muteToggle.focus();
  }
  handleMouseOver(e) {
    this.addClass("vjs-hover"), Rt(K, "keyup", this.handleKeyPressHandler_);
  }
  handleMouseOut(e) {
    this.removeClass("vjs-hover"), rt(K, "keyup", this.handleKeyPressHandler_);
  }
  handleKeyPress(e) {
    he.isEventKey(e, "Esc") && this.handleMouseOut();
  }
}
Cg.prototype.options_ = { children: ["muteToggle", "volumeControl"] };
B.registerComponent("VolumePanel", Cg);
class wg extends B {
  constructor(e, i) {
    super(e, i),
      i && (this.menuButton_ = i.menuButton),
      (this.focusedChild_ = -1),
      this.on("keydown", (s) => this.handleKeyDown(s)),
      (this.boundHandleBlur_ = (s) => this.handleBlur(s)),
      (this.boundHandleTapClick_ = (s) => this.handleTapClick(s));
  }
  addEventListenerForItem(e) {
    e instanceof B &&
      (this.on(e, "blur", this.boundHandleBlur_),
      this.on(e, ["tap", "click"], this.boundHandleTapClick_));
  }
  removeEventListenerForItem(e) {
    e instanceof B &&
      (this.off(e, "blur", this.boundHandleBlur_),
      this.off(e, ["tap", "click"], this.boundHandleTapClick_));
  }
  removeChild(e) {
    typeof e == "string" && (e = this.getChild(e)),
      this.removeEventListenerForItem(e),
      super.removeChild(e);
  }
  addItem(e) {
    const i = this.addChild(e);
    i && this.addEventListenerForItem(i);
  }
  createEl() {
    const e = this.options_.contentElType || "ul";
    (this.contentEl_ = ye(e, { className: "vjs-menu-content" })),
      this.contentEl_.setAttribute("role", "menu");
    const i = super.createEl("div", {
      append: this.contentEl_,
      className: "vjs-menu",
    });
    return (
      i.appendChild(this.contentEl_),
      Rt(i, "click", function (s) {
        s.preventDefault(), s.stopImmediatePropagation();
      }),
      i
    );
  }
  dispose() {
    (this.contentEl_ = null),
      (this.boundHandleBlur_ = null),
      (this.boundHandleTapClick_ = null),
      super.dispose();
  }
  handleBlur(e) {
    const i = e.relatedTarget || K.activeElement;
    if (!this.children().some((s) => s.el() === i)) {
      const s = this.menuButton_;
      s && s.buttonPressed_ && i !== s.el().firstChild && s.unpressButton();
    }
  }
  handleTapClick(e) {
    if (this.menuButton_) {
      this.menuButton_.unpressButton();
      const i = this.children();
      if (!Array.isArray(i)) return;
      const s = i.filter((n) => n.el() === e.target)[0];
      if (!s) return;
      s.name() !== "CaptionSettingsMenuItem" && this.menuButton_.focus();
    }
  }
  handleKeyDown(e) {
    he.isEventKey(e, "Left") || he.isEventKey(e, "Down")
      ? (e.preventDefault(), e.stopPropagation(), this.stepForward())
      : (he.isEventKey(e, "Right") || he.isEventKey(e, "Up")) &&
        (e.preventDefault(), e.stopPropagation(), this.stepBack());
  }
  stepForward() {
    let e = 0;
    this.focusedChild_ !== void 0 && (e = this.focusedChild_ + 1),
      this.focus(e);
  }
  stepBack() {
    let e = 0;
    this.focusedChild_ !== void 0 && (e = this.focusedChild_ - 1),
      this.focus(e);
  }
  focus(e = 0) {
    const i = this.children().slice();
    i.length && i[0].hasClass("vjs-menu-title") && i.shift(),
      i.length > 0 &&
        (e < 0 ? (e = 0) : e >= i.length && (e = i.length - 1),
        (this.focusedChild_ = e),
        i[e].el_.focus());
  }
}
B.registerComponent("Menu", wg);
class Lc extends B {
  constructor(e, i = {}) {
    super(e, i),
      (this.menuButton_ = new Zt(e, i)),
      this.menuButton_.controlText(this.controlText_),
      this.menuButton_.el_.setAttribute("aria-haspopup", "true");
    const s = Zt.prototype.buildCSSClass();
    (this.menuButton_.el_.className = this.buildCSSClass() + " " + s),
      this.menuButton_.removeClass("vjs-control"),
      this.addChild(this.menuButton_),
      this.update(),
      (this.enabled_ = !0);
    const n = (r) => this.handleClick(r);
    (this.handleMenuKeyUp_ = (r) => this.handleMenuKeyUp(r)),
      this.on(this.menuButton_, "tap", n),
      this.on(this.menuButton_, "click", n),
      this.on(this.menuButton_, "keydown", (r) => this.handleKeyDown(r)),
      this.on(this.menuButton_, "mouseenter", () => {
        this.addClass("vjs-hover"),
          this.menu.show(),
          Rt(K, "keyup", this.handleMenuKeyUp_);
      }),
      this.on("mouseleave", (r) => this.handleMouseLeave(r)),
      this.on("keydown", (r) => this.handleSubmenuKeyDown(r));
  }
  update() {
    const e = this.createMenu();
    this.menu && (this.menu.dispose(), this.removeChild(this.menu)),
      (this.menu = e),
      this.addChild(e),
      (this.buttonPressed_ = !1),
      this.menuButton_.el_.setAttribute("aria-expanded", "false"),
      this.items && this.items.length <= this.hideThreshold_
        ? (this.hide(), this.menu.contentEl_.removeAttribute("role"))
        : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"));
  }
  createMenu() {
    const e = new wg(this.player_, { menuButton: this });
    if (((this.hideThreshold_ = 0), this.options_.title)) {
      const i = ye("li", {
          className: "vjs-menu-title",
          textContent: je(this.options_.title),
          tabIndex: -1,
        }),
        s = new B(this.player_, { el: i });
      e.addItem(s);
    }
    if (((this.items = this.createItems()), this.items))
      for (let i = 0; i < this.items.length; i++) e.addItem(this.items[i]);
    return e;
  }
  createItems() {}
  createEl() {
    return super.createEl(
      "div",
      { className: this.buildWrapperCSSClass() },
      {}
    );
  }
  buildWrapperCSSClass() {
    let e = "vjs-menu-button";
    this.options_.inline === !0 ? (e += "-inline") : (e += "-popup");
    const i = Zt.prototype.buildCSSClass();
    return `vjs-menu-button ${e} ${i} ${super.buildCSSClass()}`;
  }
  buildCSSClass() {
    let e = "vjs-menu-button";
    return (
      this.options_.inline === !0 ? (e += "-inline") : (e += "-popup"),
      `vjs-menu-button ${e} ${super.buildCSSClass()}`
    );
  }
  controlText(e, i = this.menuButton_.el()) {
    return this.menuButton_.controlText(e, i);
  }
  dispose() {
    this.handleMouseLeave(), super.dispose();
  }
  handleClick(e) {
    this.buttonPressed_ ? this.unpressButton() : this.pressButton();
  }
  handleMouseLeave(e) {
    this.removeClass("vjs-hover"), rt(K, "keyup", this.handleMenuKeyUp_);
  }
  focus() {
    this.menuButton_.focus();
  }
  blur() {
    this.menuButton_.blur();
  }
  handleKeyDown(e) {
    he.isEventKey(e, "Esc") || he.isEventKey(e, "Tab")
      ? (this.buttonPressed_ && this.unpressButton(),
        he.isEventKey(e, "Tab") ||
          (e.preventDefault(), this.menuButton_.focus()))
      : (he.isEventKey(e, "Up") || he.isEventKey(e, "Down")) &&
        (this.buttonPressed_ || (e.preventDefault(), this.pressButton()));
  }
  handleMenuKeyUp(e) {
    (he.isEventKey(e, "Esc") || he.isEventKey(e, "Tab")) &&
      this.removeClass("vjs-hover");
  }
  handleSubmenuKeyPress(e) {
    this.handleSubmenuKeyDown(e);
  }
  handleSubmenuKeyDown(e) {
    (he.isEventKey(e, "Esc") || he.isEventKey(e, "Tab")) &&
      (this.buttonPressed_ && this.unpressButton(),
      he.isEventKey(e, "Tab") ||
        (e.preventDefault(), this.menuButton_.focus()));
  }
  pressButton() {
    if (this.enabled_) {
      if (
        ((this.buttonPressed_ = !0),
        this.menu.show(),
        this.menu.lockShowing(),
        this.menuButton_.el_.setAttribute("aria-expanded", "true"),
        yt && $m())
      )
        return;
      this.menu.focus();
    }
  }
  unpressButton() {
    this.enabled_ &&
      ((this.buttonPressed_ = !1),
      this.menu.unlockShowing(),
      this.menu.hide(),
      this.menuButton_.el_.setAttribute("aria-expanded", "false"));
  }
  disable() {
    this.unpressButton(),
      (this.enabled_ = !1),
      this.addClass("vjs-disabled"),
      this.menuButton_.disable();
  }
  enable() {
    (this.enabled_ = !0),
      this.removeClass("vjs-disabled"),
      this.menuButton_.enable();
  }
}
B.registerComponent("MenuButton", Lc);
class Rc extends Lc {
  constructor(e, i) {
    const s = i.tracks;
    if ((super(e, i), this.items.length <= 1 && this.hide(), !s)) return;
    const n = Le(this, this.update);
    s.addEventListener("removetrack", n),
      s.addEventListener("addtrack", n),
      s.addEventListener("labelchange", n),
      this.player_.on("ready", n),
      this.player_.on("dispose", function () {
        s.removeEventListener("removetrack", n),
          s.removeEventListener("addtrack", n),
          s.removeEventListener("labelchange", n);
      });
  }
}
B.registerComponent("TrackButton", Rc);
const ZE = ["Tab", "Esc", "Up", "Down", "Right", "Left"];
class Or extends Ho {
  constructor(e, i) {
    super(e, i),
      (this.selectable = i.selectable),
      (this.isSelected_ = i.selected || !1),
      (this.multiSelectable = i.multiSelectable),
      this.selected(this.isSelected_),
      this.selectable
        ? this.multiSelectable
          ? this.el_.setAttribute("role", "menuitemcheckbox")
          : this.el_.setAttribute("role", "menuitemradio")
        : this.el_.setAttribute("role", "menuitem");
  }
  createEl(e, i, s) {
    this.nonIconControl = !0;
    const n = super.createEl(
      "li",
      Object.assign({ className: "vjs-menu-item", tabIndex: -1 }, i),
      s
    );
    return (
      n.replaceChild(
        ye("span", {
          className: "vjs-menu-item-text",
          textContent: this.localize(this.options_.label),
        }),
        n.querySelector(".vjs-icon-placeholder")
      ),
      n
    );
  }
  handleKeyDown(e) {
    ZE.some((i) => he.isEventKey(e, i)) || super.handleKeyDown(e);
  }
  handleClick(e) {
    this.selected(!0);
  }
  selected(e) {
    this.selectable &&
      (e
        ? (this.addClass("vjs-selected"),
          this.el_.setAttribute("aria-checked", "true"),
          this.controlText(", selected"),
          (this.isSelected_ = !0))
        : (this.removeClass("vjs-selected"),
          this.el_.setAttribute("aria-checked", "false"),
          this.controlText(""),
          (this.isSelected_ = !1)));
  }
}
B.registerComponent("MenuItem", Or);
class Pr extends Or {
  constructor(e, i) {
    const s = i.track,
      n = e.textTracks();
    (i.label = s.label || s.language || "Unknown"),
      (i.selected = s.mode === "showing"),
      super(e, i),
      (this.track = s),
      (this.kinds = (i.kinds || [i.kind || this.track.kind]).filter(Boolean));
    const r = (...o) => {
        this.handleTracksChange.apply(this, o);
      },
      a = (...o) => {
        this.handleSelectedLanguageChange.apply(this, o);
      };
    if (
      (e.on(["loadstart", "texttrackchange"], r),
      n.addEventListener("change", r),
      n.addEventListener("selectedlanguagechange", a),
      this.on("dispose", function () {
        e.off(["loadstart", "texttrackchange"], r),
          n.removeEventListener("change", r),
          n.removeEventListener("selectedlanguagechange", a);
      }),
      n.onchange === void 0)
    ) {
      let o;
      this.on(["tap", "click"], function () {
        if (typeof C.Event != "object")
          try {
            o = new C.Event("change");
          } catch {}
        o || ((o = K.createEvent("Event")), o.initEvent("change", !0, !0)),
          n.dispatchEvent(o);
      });
    }
    this.handleTracksChange();
  }
  handleClick(e) {
    const i = this.track,
      s = this.player_.textTracks();
    if ((super.handleClick(e), !!s))
      for (let n = 0; n < s.length; n++) {
        const r = s[n];
        this.kinds.indexOf(r.kind) !== -1 &&
          (r === i
            ? r.mode !== "showing" && (r.mode = "showing")
            : r.mode !== "disabled" && (r.mode = "disabled"));
      }
  }
  handleTracksChange(e) {
    const i = this.track.mode === "showing";
    i !== this.isSelected_ && this.selected(i);
  }
  handleSelectedLanguageChange(e) {
    if (this.track.mode === "showing") {
      const i = this.player_.cache_.selectedLanguage;
      if (
        i &&
        i.enabled &&
        i.language === this.track.language &&
        i.kind !== this.track.kind
      )
        return;
      this.player_.cache_.selectedLanguage = {
        enabled: !0,
        language: this.track.language,
        kind: this.track.kind,
      };
    }
  }
  dispose() {
    (this.track = null), super.dispose();
  }
}
B.registerComponent("TextTrackMenuItem", Pr);
class Ag extends Pr {
  constructor(e, i) {
    (i.track = {
      player: e,
      kind: i.kind,
      kinds: i.kinds,
      default: !1,
      mode: "disabled",
    }),
      i.kinds || (i.kinds = [i.kind]),
      i.label
        ? (i.track.label = i.label)
        : (i.track.label = i.kinds.join(" and ") + " off"),
      (i.selectable = !0),
      (i.multiSelectable = !1),
      super(e, i);
  }
  handleTracksChange(e) {
    const i = this.player().textTracks();
    let s = !0;
    for (let n = 0, r = i.length; n < r; n++) {
      const a = i[n];
      if (this.options_.kinds.indexOf(a.kind) > -1 && a.mode === "showing") {
        s = !1;
        break;
      }
    }
    s !== this.isSelected_ && this.selected(s);
  }
  handleSelectedLanguageChange(e) {
    const i = this.player().textTracks();
    let s = !0;
    for (let n = 0, r = i.length; n < r; n++) {
      const a = i[n];
      if (
        ["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 &&
        a.mode === "showing"
      ) {
        s = !1;
        break;
      }
    }
    s && (this.player_.cache_.selectedLanguage = { enabled: !1 });
  }
}
B.registerComponent("OffTextTrackMenuItem", Ag);
class En extends Rc {
  constructor(e, i = {}) {
    (i.tracks = e.textTracks()), super(e, i);
  }
  createItems(e = [], i = Pr) {
    let s;
    this.label_ && (s = `${this.label_} off`),
      e.push(
        new Ag(this.player_, { kinds: this.kinds_, kind: this.kind_, label: s })
      ),
      (this.hideThreshold_ += 1);
    const n = this.player_.textTracks();
    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
    for (let r = 0; r < n.length; r++) {
      const a = n[r];
      if (this.kinds_.indexOf(a.kind) > -1) {
        const o = new i(this.player_, {
          track: a,
          kinds: this.kinds_,
          kind: this.kind_,
          selectable: !0,
          multiSelectable: !1,
        });
        o.addClass(`vjs-${a.kind}-menu-item`), e.push(o);
      }
    }
    return e;
  }
}
B.registerComponent("TextTrackButton", En);
class kg extends Or {
  constructor(e, i) {
    const s = i.track,
      n = i.cue,
      r = e.currentTime();
    (i.selectable = !0),
      (i.multiSelectable = !1),
      (i.label = n.text),
      (i.selected = n.startTime <= r && r < n.endTime),
      super(e, i),
      (this.track = s),
      (this.cue = n);
  }
  handleClick(e) {
    super.handleClick(), this.player_.currentTime(this.cue.startTime);
  }
}
B.registerComponent("ChaptersTrackMenuItem", kg);
class Nc extends En {
  constructor(e, i, s) {
    super(e, i, s),
      (this.selectCurrentItem_ = () => {
        this.items.forEach((n) => {
          n.selected(this.track_.activeCues[0] === n.cue);
        });
      });
  }
  buildCSSClass() {
    return `vjs-chapters-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-chapters-button ${super.buildWrapperCSSClass()}`;
  }
  update(e) {
    if (e && e.track && e.track.kind !== "chapters") return;
    const i = this.findChaptersTrack();
    i !== this.track_
      ? (this.setTrack(i), super.update())
      : (!this.items || (i && i.cues && i.cues.length !== this.items.length)) &&
        super.update();
  }
  setTrack(e) {
    if (this.track_ !== e) {
      if (
        (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)),
        this.track_)
      ) {
        const i = this.player_
          .remoteTextTrackEls()
          .getTrackElementByTrack_(this.track_);
        i && i.removeEventListener("load", this.updateHandler_),
          this.track_.removeEventListener("cuechange", this.selectCurrentItem_),
          (this.track_ = null);
      }
      if (((this.track_ = e), this.track_)) {
        this.track_.mode = "hidden";
        const i = this.player_
          .remoteTextTrackEls()
          .getTrackElementByTrack_(this.track_);
        i && i.addEventListener("load", this.updateHandler_),
          this.track_.addEventListener("cuechange", this.selectCurrentItem_);
      }
    }
  }
  findChaptersTrack() {
    const e = this.player_.textTracks() || [];
    for (let i = e.length - 1; i >= 0; i--) {
      const s = e[i];
      if (s.kind === this.kind_) return s;
    }
  }
  getMenuCaption() {
    return this.track_ && this.track_.label
      ? this.track_.label
      : this.localize(je(this.kind_));
  }
  createMenu() {
    return (this.options_.title = this.getMenuCaption()), super.createMenu();
  }
  createItems() {
    const e = [];
    if (!this.track_) return e;
    const i = this.track_.cues;
    if (!i) return e;
    for (let s = 0, n = i.length; s < n; s++) {
      const r = i[s],
        a = new kg(this.player_, { track: this.track_, cue: r });
      e.push(a);
    }
    return e;
  }
}
Nc.prototype.kind_ = "chapters";
Nc.prototype.controlText_ = "Chapters";
B.registerComponent("ChaptersButton", Nc);
class Mc extends En {
  constructor(e, i, s) {
    super(e, i, s);
    const n = e.textTracks(),
      r = Le(this, this.handleTracksChange);
    n.addEventListener("change", r),
      this.on("dispose", function () {
        n.removeEventListener("change", r);
      });
  }
  handleTracksChange(e) {
    const i = this.player().textTracks();
    let s = !1;
    for (let n = 0, r = i.length; n < r; n++) {
      const a = i[n];
      if (a.kind !== this.kind_ && a.mode === "showing") {
        s = !0;
        break;
      }
    }
    s ? this.disable() : this.enable();
  }
  buildCSSClass() {
    return `vjs-descriptions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-descriptions-button ${super.buildWrapperCSSClass()}`;
  }
}
Mc.prototype.kind_ = "descriptions";
Mc.prototype.controlText_ = "Descriptions";
B.registerComponent("DescriptionsButton", Mc);
class Uc extends En {
  constructor(e, i, s) {
    super(e, i, s);
  }
  buildCSSClass() {
    return `vjs-subtitles-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subtitles-button ${super.buildWrapperCSSClass()}`;
  }
}
Uc.prototype.kind_ = "subtitles";
Uc.prototype.controlText_ = "Subtitles";
B.registerComponent("SubtitlesButton", Uc);
class Fc extends Pr {
  constructor(e, i) {
    (i.track = {
      player: e,
      kind: i.kind,
      label: i.kind + " settings",
      selectable: !1,
      default: !1,
      mode: "disabled",
    }),
      (i.selectable = !1),
      (i.name = "CaptionSettingsMenuItem"),
      super(e, i),
      this.addClass("vjs-texttrack-settings"),
      this.controlText(", opens " + i.kind + " settings dialog");
  }
  handleClick(e) {
    this.player().getChild("textTrackSettings").open();
  }
}
B.registerComponent("CaptionSettingsMenuItem", Fc);
class Bc extends En {
  constructor(e, i, s) {
    super(e, i, s);
  }
  buildCSSClass() {
    return `vjs-captions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-captions-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    const e = [];
    return (
      !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) &&
        this.player().getChild("textTrackSettings") &&
        (e.push(new Fc(this.player_, { kind: this.kind_ })),
        (this.hideThreshold_ += 1)),
      super.createItems(e)
    );
  }
}
Bc.prototype.kind_ = "captions";
Bc.prototype.controlText_ = "Captions";
B.registerComponent("CaptionsButton", Bc);
class Ig extends Pr {
  createEl(e, i, s) {
    const n = super.createEl(e, i, s),
      r = n.querySelector(".vjs-menu-item-text");
    return (
      this.options_.track.kind === "captions" &&
        (r.appendChild(
          ye(
            "span",
            { className: "vjs-icon-placeholder" },
            { "aria-hidden": !0 }
          )
        ),
        r.appendChild(
          ye("span", {
            className: "vjs-control-text",
            textContent: ` ${this.localize("Captions")}`,
          })
        )),
      n
    );
  }
}
B.registerComponent("SubsCapsMenuItem", Ig);
class $c extends En {
  constructor(e, i = {}) {
    super(e, i),
      (this.label_ = "subtitles"),
      ["en", "en-us", "en-ca", "fr-ca"].indexOf(this.player_.language_) > -1 &&
        (this.label_ = "captions"),
      this.menuButton_.controlText(je(this.label_));
  }
  buildCSSClass() {
    return `vjs-subs-caps-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subs-caps-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    let e = [];
    return (
      !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) &&
        this.player().getChild("textTrackSettings") &&
        (e.push(new Fc(this.player_, { kind: this.label_ })),
        (this.hideThreshold_ += 1)),
      (e = super.createItems(e, Ig)),
      e
    );
  }
}
$c.prototype.kinds_ = ["captions", "subtitles"];
$c.prototype.controlText_ = "Subtitles";
B.registerComponent("SubsCapsButton", $c);
class Og extends Or {
  constructor(e, i) {
    const s = i.track,
      n = e.audioTracks();
    (i.label = s.label || s.language || "Unknown"),
      (i.selected = s.enabled),
      super(e, i),
      (this.track = s),
      this.addClass(`vjs-${s.kind}-menu-item`);
    const r = (...a) => {
      this.handleTracksChange.apply(this, a);
    };
    n.addEventListener("change", r),
      this.on("dispose", () => {
        n.removeEventListener("change", r);
      });
  }
  createEl(e, i, s) {
    const n = super.createEl(e, i, s),
      r = n.querySelector(".vjs-menu-item-text");
    return (
      this.options_.track.kind === "main-desc" &&
        (r.appendChild(
          ye(
            "span",
            { className: "vjs-icon-placeholder" },
            { "aria-hidden": !0 }
          )
        ),
        r.appendChild(
          ye("span", {
            className: "vjs-control-text",
            textContent: " " + this.localize("Descriptions"),
          })
        )),
      n
    );
  }
  handleClick(e) {
    if (
      (super.handleClick(e),
      (this.track.enabled = !0),
      this.player_.tech_.featuresNativeAudioTracks)
    ) {
      const i = this.player_.audioTracks();
      for (let s = 0; s < i.length; s++) {
        const n = i[s];
        n !== this.track && (n.enabled = n === this.track);
      }
    }
  }
  handleTracksChange(e) {
    this.selected(this.track.enabled);
  }
}
B.registerComponent("AudioTrackMenuItem", Og);
class Pg extends Rc {
  constructor(e, i = {}) {
    (i.tracks = e.audioTracks()), super(e, i);
  }
  buildCSSClass() {
    return `vjs-audio-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-audio-button ${super.buildWrapperCSSClass()}`;
  }
  createItems(e = []) {
    this.hideThreshold_ = 1;
    const i = this.player_.audioTracks();
    for (let s = 0; s < i.length; s++) {
      const n = i[s];
      e.push(
        new Og(this.player_, { track: n, selectable: !0, multiSelectable: !1 })
      );
    }
    return e;
  }
}
Pg.prototype.controlText_ = "Audio Track";
B.registerComponent("AudioTrackButton", Pg);
class jc extends Or {
  constructor(e, i) {
    const s = i.rate,
      n = parseFloat(s, 10);
    (i.label = s),
      (i.selected = n === e.playbackRate()),
      (i.selectable = !0),
      (i.multiSelectable = !1),
      super(e, i),
      (this.label = s),
      (this.rate = n),
      this.on(e, "ratechange", (r) => this.update(r));
  }
  handleClick(e) {
    super.handleClick(), this.player().playbackRate(this.rate);
  }
  update(e) {
    this.selected(this.player().playbackRate() === this.rate);
  }
}
jc.prototype.contentElType = "button";
B.registerComponent("PlaybackRateMenuItem", jc);
class Dg extends Lc {
  constructor(e, i) {
    super(e, i),
      this.menuButton_.el_.setAttribute("aria-describedby", this.labelElId_),
      this.updateVisibility(),
      this.updateLabel(),
      this.on(e, "loadstart", (s) => this.updateVisibility(s)),
      this.on(e, "ratechange", (s) => this.updateLabel(s)),
      this.on(e, "playbackrateschange", (s) =>
        this.handlePlaybackRateschange(s)
      );
  }
  createEl() {
    const e = super.createEl();
    return (
      (this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_),
      (this.labelEl_ = ye("div", {
        className: "vjs-playback-rate-value",
        id: this.labelElId_,
        textContent: "1x",
      })),
      e.appendChild(this.labelEl_),
      e
    );
  }
  dispose() {
    (this.labelEl_ = null), super.dispose();
  }
  buildCSSClass() {
    return `vjs-playback-rate ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-playback-rate ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    const e = this.playbackRates(),
      i = [];
    for (let s = e.length - 1; s >= 0; s--)
      i.push(new jc(this.player(), { rate: e[s] + "x" }));
    return i;
  }
  handlePlaybackRateschange(e) {
    this.update();
  }
  playbackRates() {
    const e = this.player();
    return (e.playbackRates && e.playbackRates()) || [];
  }
  playbackRateSupported() {
    return (
      this.player().tech_ &&
      this.player().tech_.featuresPlaybackRate &&
      this.playbackRates() &&
      this.playbackRates().length > 0
    );
  }
  updateVisibility(e) {
    this.playbackRateSupported()
      ? this.removeClass("vjs-hidden")
      : this.addClass("vjs-hidden");
  }
  updateLabel(e) {
    this.playbackRateSupported() &&
      (this.labelEl_.textContent = this.player().playbackRate() + "x");
  }
}
Dg.prototype.controlText_ = "Playback Rate";
B.registerComponent("PlaybackRateMenuButton", Dg);
class Lg extends B {
  buildCSSClass() {
    return `vjs-spacer ${super.buildCSSClass()}`;
  }
  createEl(e = "div", i = {}, s = {}) {
    return (
      i.className || (i.className = this.buildCSSClass()),
      super.createEl(e, i, s)
    );
  }
}
B.registerComponent("Spacer", Lg);
class eC extends Lg {
  buildCSSClass() {
    return `vjs-custom-control-spacer ${super.buildCSSClass()}`;
  }
  createEl() {
    return super.createEl("div", {
      className: this.buildCSSClass(),
      textContent: " ",
    });
  }
}
B.registerComponent("CustomControlSpacer", eC);
class Za extends B {
  createEl() {
    return super.createEl("div", { className: "vjs-control-bar", dir: "ltr" });
  }
}
Za.prototype.options_ = {
  children: [
    "playToggle",
    "volumePanel",
    "currentTimeDisplay",
    "timeDivider",
    "durationDisplay",
    "progressControl",
    "liveDisplay",
    "seekToLive",
    "remainingTimeDisplay",
    "customControlSpacer",
    "playbackRateMenuButton",
    "chaptersButton",
    "descriptionsButton",
    "subsCapsButton",
    "audioTrackButton",
    "fullscreenToggle",
  ],
};
"exitPictureInPicture" in K &&
  Za.prototype.options_.children.splice(
    Za.prototype.options_.children.length - 1,
    0,
    "pictureInPictureToggle"
  );
B.registerComponent("ControlBar", Za);
class Rg extends xn {
  constructor(e, i) {
    super(e, i), this.on(e, "error", (s) => this.open(s));
  }
  buildCSSClass() {
    return `vjs-error-display ${super.buildCSSClass()}`;
  }
  content() {
    const e = this.player().error();
    return e ? this.localize(e.message) : "";
  }
}
Rg.prototype.options_ = Object.assign({}, xn.prototype.options_, {
  pauseOnOpen: !1,
  fillAlways: !0,
  temporary: !1,
  uncloseable: !0,
});
B.registerComponent("ErrorDisplay", Rg);
const kl = "vjs-text-track-settings",
  af = ["#000", "Black"],
  of = ["#00F", "Blue"],
  lf = ["#0FF", "Cyan"],
  uf = ["#0F0", "Green"],
  cf = ["#F0F", "Magenta"],
  df = ["#F00", "Red"],
  hf = ["#FFF", "White"],
  ff = ["#FF0", "Yellow"],
  Il = ["1", "Opaque"],
  Ol = ["0.5", "Semi-Transparent"],
  pf = ["0", "Transparent"],
  fs = {
    backgroundColor: {
      selector: ".vjs-bg-color > select",
      id: "captions-background-color-%s",
      label: "Color",
      options: [af, hf, df, uf, of, ff, cf, lf],
    },
    backgroundOpacity: {
      selector: ".vjs-bg-opacity > select",
      id: "captions-background-opacity-%s",
      label: "Transparency",
      options: [Il, Ol, pf],
    },
    color: {
      selector: ".vjs-fg-color > select",
      id: "captions-foreground-color-%s",
      label: "Color",
      options: [hf, af, df, uf, of, ff, cf, lf],
    },
    edgeStyle: {
      selector: ".vjs-edge-style > select",
      id: "%s",
      label: "Text Edge Style",
      options: [
        ["none", "None"],
        ["raised", "Raised"],
        ["depressed", "Depressed"],
        ["uniform", "Uniform"],
        ["dropshadow", "Dropshadow"],
      ],
    },
    fontFamily: {
      selector: ".vjs-font-family > select",
      id: "captions-font-family-%s",
      label: "Font Family",
      options: [
        ["proportionalSansSerif", "Proportional Sans-Serif"],
        ["monospaceSansSerif", "Monospace Sans-Serif"],
        ["proportionalSerif", "Proportional Serif"],
        ["monospaceSerif", "Monospace Serif"],
        ["casual", "Casual"],
        ["script", "Script"],
        ["small-caps", "Small Caps"],
      ],
    },
    fontPercent: {
      selector: ".vjs-font-percent > select",
      id: "captions-font-size-%s",
      label: "Font Size",
      options: [
        ["0.50", "50%"],
        ["0.75", "75%"],
        ["1.00", "100%"],
        ["1.25", "125%"],
        ["1.50", "150%"],
        ["1.75", "175%"],
        ["2.00", "200%"],
        ["3.00", "300%"],
        ["4.00", "400%"],
      ],
      default: 2,
      parser: (t) => (t === "1.00" ? null : Number(t)),
    },
    textOpacity: {
      selector: ".vjs-text-opacity > select",
      id: "captions-foreground-opacity-%s",
      label: "Transparency",
      options: [Il, Ol],
    },
    windowColor: {
      selector: ".vjs-window-color > select",
      id: "captions-window-color-%s",
      label: "Color",
    },
    windowOpacity: {
      selector: ".vjs-window-opacity > select",
      id: "captions-window-opacity-%s",
      label: "Transparency",
      options: [pf, Ol, Il],
    },
  };
fs.windowColor.options = fs.backgroundColor.options;
function Ng(t, e) {
  if ((e && (t = e(t)), t && t !== "none")) return t;
}
function tC(t, e) {
  const i = t.options[t.options.selectedIndex].value;
  return Ng(i, e);
}
function iC(t, e, i) {
  if (e) {
    for (let s = 0; s < t.options.length; s++)
      if (Ng(t.options[s].value, i) === e) {
        t.selectedIndex = s;
        break;
      }
  }
}
class sC extends xn {
  constructor(e, i) {
    (i.temporary = !1),
      super(e, i),
      (this.updateDisplay = this.updateDisplay.bind(this)),
      this.fill(),
      (this.hasBeenOpened_ = this.hasBeenFilled_ = !0),
      (this.endDialog = ye("p", {
        className: "vjs-control-text",
        textContent: this.localize("End of dialog window."),
      })),
      this.el().appendChild(this.endDialog),
      this.setDefaults(),
      i.persistTextTrackSettings === void 0 &&
        (this.options_.persistTextTrackSettings =
          this.options_.playerOptions.persistTextTrackSettings),
      this.on(this.$(".vjs-done-button"), "click", () => {
        this.saveSettings(), this.close();
      }),
      this.on(this.$(".vjs-default-button"), "click", () => {
        this.setDefaults(), this.updateDisplay();
      }),
      Gs(fs, (s) => {
        this.on(this.$(s.selector), "change", this.updateDisplay);
      }),
      this.options_.persistTextTrackSettings && this.restoreSettings();
  }
  dispose() {
    (this.endDialog = null), super.dispose();
  }
  createElSelect_(e, i = "", s = "label") {
    const n = fs[e],
      r = n.id.replace("%s", this.id_),
      a = [i, r].join(" ").trim();
    return [
      `<${s} id="${r}" class="${s === "label" ? "vjs-label" : ""}">`,
      this.localize(n.label),
      `</${s}>`,
      `<select aria-labelledby="${a}">`,
    ]
      .concat(
        n.options.map((o) => {
          const u = r + "-" + o[1].replace(/\W+/g, "");
          return [
            `<option id="${u}" value="${o[0]}" `,
            `aria-labelledby="${a} ${u}">`,
            this.localize(o[1]),
            "</option>",
          ].join("");
        })
      )
      .concat("</select>")
      .join("");
  }
  createElFgColor_() {
    const e = `captions-text-legend-${this.id_}`;
    return [
      '<fieldset class="vjs-fg-color vjs-track-setting">',
      `<legend id="${e}">`,
      this.localize("Text"),
      "</legend>",
      this.createElSelect_("color", e),
      '<span class="vjs-text-opacity vjs-opacity">',
      this.createElSelect_("textOpacity", e),
      "</span>",
      "</fieldset>",
    ].join("");
  }
  createElBgColor_() {
    const e = `captions-background-${this.id_}`;
    return [
      '<fieldset class="vjs-bg-color vjs-track-setting">',
      `<legend id="${e}">`,
      this.localize("Background"),
      "</legend>",
      this.createElSelect_("backgroundColor", e),
      '<span class="vjs-bg-opacity vjs-opacity">',
      this.createElSelect_("backgroundOpacity", e),
      "</span>",
      "</fieldset>",
    ].join("");
  }
  createElWinColor_() {
    const e = `captions-window-${this.id_}`;
    return [
      '<fieldset class="vjs-window-color vjs-track-setting">',
      `<legend id="${e}">`,
      this.localize("Window"),
      "</legend>",
      this.createElSelect_("windowColor", e),
      '<span class="vjs-window-opacity vjs-opacity">',
      this.createElSelect_("windowOpacity", e),
      "</span>",
      "</fieldset>",
    ].join("");
  }
  createElColors_() {
    return ye("div", {
      className: "vjs-track-settings-colors",
      innerHTML: [
        this.createElFgColor_(),
        this.createElBgColor_(),
        this.createElWinColor_(),
      ].join(""),
    });
  }
  createElFont_() {
    return ye("div", {
      className: "vjs-track-settings-font",
      innerHTML: [
        '<fieldset class="vjs-font-percent vjs-track-setting">',
        this.createElSelect_("fontPercent", "", "legend"),
        "</fieldset>",
        '<fieldset class="vjs-edge-style vjs-track-setting">',
        this.createElSelect_("edgeStyle", "", "legend"),
        "</fieldset>",
        '<fieldset class="vjs-font-family vjs-track-setting">',
        this.createElSelect_("fontFamily", "", "legend"),
        "</fieldset>",
      ].join(""),
    });
  }
  createElControls_() {
    const e = this.localize("restore all settings to the default values");
    return ye("div", {
      className: "vjs-track-settings-controls",
      innerHTML: [
        `<button type="button" class="vjs-default-button" title="${e}">`,
        this.localize("Reset"),
        `<span class="vjs-control-text"> ${e}</span>`,
        "</button>",
        `<button type="button" class="vjs-done-button">${this.localize(
          "Done"
        )}</button>`,
      ].join(""),
    });
  }
  content() {
    return [
      this.createElColors_(),
      this.createElFont_(),
      this.createElControls_(),
    ];
  }
  label() {
    return this.localize("Caption Settings Dialog");
  }
  description() {
    return this.localize(
      "Beginning of dialog window. Escape will cancel and close the window."
    );
  }
  buildCSSClass() {
    return super.buildCSSClass() + " vjs-text-track-settings";
  }
  getValues() {
    return Nm(
      fs,
      (e, i, s) => {
        const n = tC(this.$(i.selector), i.parser);
        return n !== void 0 && (e[s] = n), e;
      },
      {}
    );
  }
  setValues(e) {
    Gs(fs, (i, s) => {
      iC(this.$(i.selector), e[s], i.parser);
    });
  }
  setDefaults() {
    Gs(fs, (e) => {
      const i = e.hasOwnProperty("default") ? e.default : 0;
      this.$(e.selector).selectedIndex = i;
    });
  }
  restoreSettings() {
    let e;
    try {
      e = JSON.parse(C.localStorage.getItem(kl));
    } catch (i) {
      be.warn(i);
    }
    e && this.setValues(e);
  }
  saveSettings() {
    if (!this.options_.persistTextTrackSettings) return;
    const e = this.getValues();
    try {
      Object.keys(e).length
        ? C.localStorage.setItem(kl, JSON.stringify(e))
        : C.localStorage.removeItem(kl);
    } catch (i) {
      be.warn(i);
    }
  }
  updateDisplay() {
    const e = this.player_.getChild("textTrackDisplay");
    e && e.updateDisplay();
  }
  conditionalBlur_() {
    this.previouslyActiveEl_ = null;
    const e = this.player_.controlBar,
      i = e && e.subsCapsButton,
      s = e && e.captionsButton;
    i ? i.focus() : s && s.focus();
  }
}
B.registerComponent("TextTrackSettings", sC);
class nC extends B {
  constructor(e, i) {
    let s = i.ResizeObserver || C.ResizeObserver;
    i.ResizeObserver === null && (s = !1);
    const n = De({ createEl: !s, reportTouchActivity: !1 }, i);
    super(e, n),
      (this.ResizeObserver = i.ResizeObserver || C.ResizeObserver),
      (this.loadListener_ = null),
      (this.resizeObserver_ = null),
      (this.debouncedHandler_ = tg(
        () => {
          this.resizeHandler();
        },
        100,
        !1,
        this
      )),
      s
        ? ((this.resizeObserver_ = new this.ResizeObserver(
            this.debouncedHandler_
          )),
          this.resizeObserver_.observe(e.el()))
        : ((this.loadListener_ = () => {
            if (!this.el_ || !this.el_.contentWindow) return;
            const r = this.debouncedHandler_;
            let a = (this.unloadListener_ = function () {
              rt(this, "resize", r), rt(this, "unload", a), (a = null);
            });
            Rt(this.el_.contentWindow, "unload", a),
              Rt(this.el_.contentWindow, "resize", r);
          }),
          this.one("load", this.loadListener_));
  }
  createEl() {
    return super.createEl(
      "iframe",
      {
        className: "vjs-resize-manager",
        tabIndex: -1,
        title: this.localize("No content"),
      },
      { "aria-hidden": "true" }
    );
  }
  resizeHandler() {
    !this.player_ ||
      !this.player_.trigger ||
      this.player_.trigger("playerresize");
  }
  dispose() {
    this.debouncedHandler_ && this.debouncedHandler_.cancel(),
      this.resizeObserver_ &&
        (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()),
        this.resizeObserver_.disconnect()),
      this.loadListener_ && this.off("load", this.loadListener_),
      this.el_ &&
        this.el_.contentWindow &&
        this.unloadListener_ &&
        this.unloadListener_.call(this.el_.contentWindow),
      (this.ResizeObserver = null),
      (this.resizeObserver = null),
      (this.debouncedHandler_ = null),
      (this.loadListener_ = null),
      super.dispose();
  }
}
B.registerComponent("ResizeManager", nC);
const rC = { trackingThreshold: 20, liveTolerance: 15 };
class aC extends B {
  constructor(e, i) {
    const s = De(rC, i, { createEl: !1 });
    super(e, s),
      (this.trackLiveHandler_ = () => this.trackLive_()),
      (this.handlePlay_ = (n) => this.handlePlay(n)),
      (this.handleFirstTimeupdate_ = (n) => this.handleFirstTimeupdate(n)),
      (this.handleSeeked_ = (n) => this.handleSeeked(n)),
      (this.seekToLiveEdge_ = (n) => this.seekToLiveEdge(n)),
      this.reset_(),
      this.on(this.player_, "durationchange", (n) =>
        this.handleDurationchange(n)
      ),
      this.on(this.player_, "canplay", () => this.toggleTracking());
  }
  trackLive_() {
    const e = this.player_.seekable();
    if (!e || !e.length) return;
    const i = Number(C.performance.now().toFixed(4)),
      s = this.lastTime_ === -1 ? 0 : (i - this.lastTime_) / 1e3;
    (this.lastTime_ = i), (this.pastSeekEnd_ = this.pastSeekEnd() + s);
    const n = this.liveCurrentTime(),
      r = this.player_.currentTime();
    let a =
      this.player_.paused() ||
      this.seekedBehindLive_ ||
      Math.abs(n - r) > this.options_.liveTolerance;
    (!this.timeupdateSeen_ || n === 1 / 0) && (a = !1),
      a !== this.behindLiveEdge_ &&
        ((this.behindLiveEdge_ = a), this.trigger("liveedgechange"));
  }
  handleDurationchange() {
    this.toggleTracking();
  }
  toggleTracking() {
    this.player_.duration() === 1 / 0 &&
    this.liveWindow() >= this.options_.trackingThreshold
      ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"),
        this.startTracking())
      : (this.player_.removeClass("vjs-liveui"), this.stopTracking());
  }
  startTracking() {
    this.isTracking() ||
      (this.timeupdateSeen_ ||
        (this.timeupdateSeen_ = this.player_.hasStarted()),
      (this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, jt)),
      this.trackLive_(),
      this.on(this.player_, ["play", "pause"], this.trackLiveHandler_),
      this.timeupdateSeen_
        ? this.on(this.player_, "seeked", this.handleSeeked_)
        : (this.one(this.player_, "play", this.handlePlay_),
          this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)));
  }
  handleFirstTimeupdate() {
    (this.timeupdateSeen_ = !0),
      this.on(this.player_, "seeked", this.handleSeeked_);
  }
  handleSeeked() {
    const e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
    (this.seekedBehindLive_ = this.nextSeekedFromUser_ && e > 2),
      (this.nextSeekedFromUser_ = !1),
      this.trackLive_();
  }
  handlePlay() {
    this.one(this.player_, "timeupdate", this.seekToLiveEdge_);
  }
  reset_() {
    (this.lastTime_ = -1),
      (this.pastSeekEnd_ = 0),
      (this.lastSeekEnd_ = -1),
      (this.behindLiveEdge_ = !0),
      (this.timeupdateSeen_ = !1),
      (this.seekedBehindLive_ = !1),
      (this.nextSeekedFromUser_ = !1),
      this.clearInterval(this.trackingInterval_),
      (this.trackingInterval_ = null),
      this.off(this.player_, ["play", "pause"], this.trackLiveHandler_),
      this.off(this.player_, "seeked", this.handleSeeked_),
      this.off(this.player_, "play", this.handlePlay_),
      this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_),
      this.off(this.player_, "timeupdate", this.seekToLiveEdge_);
  }
  nextSeekedFromUser() {
    this.nextSeekedFromUser_ = !0;
  }
  stopTracking() {
    this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
  }
  seekableEnd() {
    const e = this.player_.seekable(),
      i = [];
    let s = e ? e.length : 0;
    for (; s--; ) i.push(e.end(s));
    return i.length ? i.sort()[i.length - 1] : 1 / 0;
  }
  seekableStart() {
    const e = this.player_.seekable(),
      i = [];
    let s = e ? e.length : 0;
    for (; s--; ) i.push(e.start(s));
    return i.length ? i.sort()[0] : 0;
  }
  liveWindow() {
    const e = this.liveCurrentTime();
    return e === 1 / 0 ? 0 : e - this.seekableStart();
  }
  isLive() {
    return this.isTracking();
  }
  atLiveEdge() {
    return !this.behindLiveEdge();
  }
  liveCurrentTime() {
    return this.pastSeekEnd() + this.seekableEnd();
  }
  pastSeekEnd() {
    const e = this.seekableEnd();
    return (
      this.lastSeekEnd_ !== -1 &&
        e !== this.lastSeekEnd_ &&
        (this.pastSeekEnd_ = 0),
      (this.lastSeekEnd_ = e),
      this.pastSeekEnd_
    );
  }
  behindLiveEdge() {
    return this.behindLiveEdge_;
  }
  isTracking() {
    return typeof this.trackingInterval_ == "number";
  }
  seekToLiveEdge() {
    (this.seekedBehindLive_ = !1),
      !this.atLiveEdge() &&
        ((this.nextSeekedFromUser_ = !1),
        this.player_.currentTime(this.liveCurrentTime()));
  }
  dispose() {
    this.stopTracking(), super.dispose();
  }
}
B.registerComponent("LiveTracker", aC);
class oC extends B {
  constructor(e, i) {
    super(e, i),
      this.on("statechanged", (s) => this.updateDom_()),
      this.updateDom_();
  }
  createEl() {
    return (
      (this.els = {
        title: ye("div", {
          className: "vjs-title-bar-title",
          id: `vjs-title-bar-title-${Ti()}`,
        }),
        description: ye("div", {
          className: "vjs-title-bar-description",
          id: `vjs-title-bar-description-${Ti()}`,
        }),
      }),
      ye("div", { className: "vjs-title-bar" }, {}, Object.values(this.els))
    );
  }
  updateDom_() {
    const e = this.player_.tech_,
      i = e && e.el_,
      s = { title: "aria-labelledby", description: "aria-describedby" };
    ["title", "description"].forEach((n) => {
      const r = this.state[n],
        a = this.els[n],
        o = s[n];
      Uo(a),
        r && Qi(a, r),
        i && (i.removeAttribute(o), r && i.setAttribute(o, a.id));
    }),
      this.state.title || this.state.description ? this.show() : this.hide();
  }
  update(e) {
    this.setState(e);
  }
  dispose() {
    const e = this.player_.tech_,
      i = e && e.el_;
    i &&
      (i.removeAttribute("aria-labelledby"),
      i.removeAttribute("aria-describedby")),
      super.dispose(),
      (this.els = null);
  }
}
B.registerComponent("TitleBar", oC);
const du = (t) => {
    const e = t.el();
    if (e.hasAttribute("src")) return t.triggerSourceset(e.src), !0;
    const i = t.$$("source"),
      s = [];
    let n = "";
    if (!i.length) return !1;
    for (let r = 0; r < i.length; r++) {
      const a = i[r].src;
      a && s.indexOf(a) === -1 && s.push(a);
    }
    return s.length
      ? (s.length === 1 && (n = s[0]), t.triggerSourceset(n), !0)
      : !1;
  },
  lC = Object.defineProperty({}, "innerHTML", {
    get() {
      return this.cloneNode(!0).innerHTML;
    },
    set(t) {
      const e = K.createElement(this.nodeName.toLowerCase());
      e.innerHTML = t;
      const i = K.createDocumentFragment();
      for (; e.childNodes.length; ) i.appendChild(e.childNodes[0]);
      return (
        (this.innerText = ""),
        C.Element.prototype.appendChild.call(this, i),
        this.innerHTML
      );
    },
  }),
  Mg = (t, e) => {
    let i = {};
    for (
      let s = 0;
      s < t.length &&
      ((i = Object.getOwnPropertyDescriptor(t[s], e)), !(i && i.set && i.get));
      s++
    );
    return (i.enumerable = !0), (i.configurable = !0), i;
  },
  uC = (t) =>
    Mg(
      [t.el(), C.HTMLMediaElement.prototype, C.Element.prototype, lC],
      "innerHTML"
    ),
  mf = function (t) {
    const e = t.el();
    if (e.resetSourceWatch_) return;
    const i = {},
      s = uC(t),
      n =
        (r) =>
        (...a) => {
          const o = r.apply(e, a);
          return du(t), o;
        };
    ["append", "appendChild", "insertAdjacentHTML"].forEach((r) => {
      e[r] && ((i[r] = e[r]), (e[r] = n(i[r])));
    }),
      Object.defineProperty(e, "innerHTML", De(s, { set: n(s.set) })),
      (e.resetSourceWatch_ = () => {
        (e.resetSourceWatch_ = null),
          Object.keys(i).forEach((r) => {
            e[r] = i[r];
          }),
          Object.defineProperty(e, "innerHTML", s);
      }),
      t.one("sourceset", e.resetSourceWatch_);
  },
  cC = Object.defineProperty({}, "src", {
    get() {
      return this.hasAttribute("src")
        ? dg(C.Element.prototype.getAttribute.call(this, "src"))
        : "";
    },
    set(t) {
      return C.Element.prototype.setAttribute.call(this, "src", t), t;
    },
  }),
  dC = (t) => Mg([t.el(), C.HTMLMediaElement.prototype, cC], "src"),
  hC = function (t) {
    if (!t.featuresSourceset) return;
    const e = t.el();
    if (e.resetSourceset_) return;
    const i = dC(t),
      s = e.setAttribute,
      n = e.load;
    Object.defineProperty(
      e,
      "src",
      De(i, {
        set: (r) => {
          const a = i.set.call(e, r);
          return t.triggerSourceset(e.src), a;
        },
      })
    ),
      (e.setAttribute = (r, a) => {
        const o = s.call(e, r, a);
        return /src/i.test(r) && t.triggerSourceset(e.src), o;
      }),
      (e.load = () => {
        const r = n.call(e);
        return du(t) || (t.triggerSourceset(""), mf(t)), r;
      }),
      e.currentSrc ? t.triggerSourceset(e.currentSrc) : du(t) || mf(t),
      (e.resetSourceset_ = () => {
        (e.resetSourceset_ = null),
          (e.load = n),
          (e.setAttribute = s),
          Object.defineProperty(e, "src", i),
          e.resetSourceWatch_ && e.resetSourceWatch_();
      });
  };
class Q extends pe {
  constructor(e, i) {
    super(e, i);
    const s = e.source;
    let n = !1;
    if (
      ((this.featuresVideoFrameCallback =
        this.featuresVideoFrameCallback && this.el_.tagName === "VIDEO"),
      s &&
      (this.el_.currentSrc !== s.src ||
        (e.tag && e.tag.initNetworkState_ === 3))
        ? this.setSource(s)
        : this.handleLateInit_(this.el_),
      e.enableSourceset && this.setupSourcesetHandling_(),
      (this.isScrubbing_ = !1),
      this.el_.hasChildNodes())
    ) {
      const r = this.el_.childNodes;
      let a = r.length;
      const o = [];
      for (; a--; ) {
        const u = r[a];
        u.nodeName.toLowerCase() === "track" &&
          (this.featuresNativeTextTracks
            ? (this.remoteTextTrackEls().addTrackElement_(u),
              this.remoteTextTracks().addTrack(u.track),
              this.textTracks().addTrack(u.track),
              !n &&
                !this.el_.hasAttribute("crossorigin") &&
                jo(u.src) &&
                (n = !0))
            : o.push(u));
      }
      for (let u = 0; u < o.length; u++) this.el_.removeChild(o[u]);
    }
    this.proxyNativeTracks_(),
      this.featuresNativeTextTracks &&
        n &&
        be.warn(`Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.
This may prevent text tracks from loading.`),
      this.restoreMetadataTracksInIOSNativePlayer_(),
      (Tr || Do) && e.nativeControlsForTouch === !0 && this.setControls(!0),
      this.proxyWebkitFullscreen_(),
      this.triggerReady();
  }
  dispose() {
    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(),
      Q.disposeMediaElement(this.el_),
      (this.options_ = null),
      super.dispose();
  }
  setupSourcesetHandling_() {
    hC(this);
  }
  restoreMetadataTracksInIOSNativePlayer_() {
    const e = this.textTracks();
    let i;
    const s = () => {
      i = [];
      for (let r = 0; r < e.length; r++) {
        const a = e[r];
        a.kind === "metadata" && i.push({ track: a, storedMode: a.mode });
      }
    };
    s(),
      e.addEventListener("change", s),
      this.on("dispose", () => e.removeEventListener("change", s));
    const n = () => {
      for (let r = 0; r < i.length; r++) {
        const a = i[r];
        a.track.mode === "disabled" &&
          a.track.mode !== a.storedMode &&
          (a.track.mode = a.storedMode);
      }
      e.removeEventListener("change", n);
    };
    this.on("webkitbeginfullscreen", () => {
      e.removeEventListener("change", s),
        e.removeEventListener("change", n),
        e.addEventListener("change", n);
    }),
      this.on("webkitendfullscreen", () => {
        e.removeEventListener("change", s),
          e.addEventListener("change", s),
          e.removeEventListener("change", n);
      });
  }
  overrideNative_(e, i) {
    if (i !== this[`featuresNative${e}Tracks`]) return;
    const s = e.toLowerCase();
    this[`${s}TracksListeners_`] &&
      Object.keys(this[`${s}TracksListeners_`]).forEach((n) => {
        this.el()[`${s}Tracks`].removeEventListener(
          n,
          this[`${s}TracksListeners_`][n]
        );
      }),
      (this[`featuresNative${e}Tracks`] = !i),
      (this[`${s}TracksListeners_`] = null),
      this.proxyNativeTracksForType_(s);
  }
  overrideNativeAudioTracks(e) {
    this.overrideNative_("Audio", e);
  }
  overrideNativeVideoTracks(e) {
    this.overrideNative_("Video", e);
  }
  proxyNativeTracksForType_(e) {
    const i = $t[e],
      s = this.el()[i.getterName],
      n = this[i.getterName]();
    if (
      !this[`featuresNative${i.capitalName}Tracks`] ||
      !s ||
      !s.addEventListener
    )
      return;
    const r = {
        change: (o) => {
          const u = {
            type: "change",
            target: n,
            currentTarget: n,
            srcElement: n,
          };
          n.trigger(u),
            e === "text" && this[pn.remoteText.getterName]().trigger(u);
        },
        addtrack(o) {
          n.addTrack(o.track);
        },
        removetrack(o) {
          n.removeTrack(o.track);
        },
      },
      a = function () {
        const o = [];
        for (let u = 0; u < n.length; u++) {
          let f = !1;
          for (let p = 0; p < s.length; p++)
            if (s[p] === n[u]) {
              f = !0;
              break;
            }
          f || o.push(n[u]);
        }
        for (; o.length; ) n.removeTrack(o.shift());
      };
    (this[i.getterName + "Listeners_"] = r),
      Object.keys(r).forEach((o) => {
        const u = r[o];
        s.addEventListener(o, u),
          this.on("dispose", (f) => s.removeEventListener(o, u));
      }),
      this.on("loadstart", a),
      this.on("dispose", (o) => this.off("loadstart", a));
  }
  proxyNativeTracks_() {
    $t.names.forEach((e) => {
      this.proxyNativeTracksForType_(e);
    });
  }
  createEl() {
    let e = this.options_.tag;
    if (!e || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {
      if (e) {
        const s = e.cloneNode(!0);
        e.parentNode && e.parentNode.insertBefore(s, e),
          Q.disposeMediaElement(e),
          (e = s);
      } else {
        e = K.createElement("video");
        const s = this.options_.tag && Vi(this.options_.tag),
          n = De({}, s);
        (!Tr || this.options_.nativeControlsForTouch !== !0) &&
          delete n.controls,
          Vm(
            e,
            Object.assign(n, { id: this.options_.techId, class: "vjs-tech" })
          );
      }
      e.playerId = this.options_.playerId;
    }
    typeof this.options_.preload < "u" &&
      cn(e, "preload", this.options_.preload),
      this.options_.disablePictureInPicture !== void 0 &&
        (e.disablePictureInPicture = this.options_.disablePictureInPicture);
    const i = ["loop", "muted", "playsinline", "autoplay"];
    for (let s = 0; s < i.length; s++) {
      const n = i[s],
        r = this.options_[n];
      typeof r < "u" && (r ? cn(e, n, n) : No(e, n), (e[n] = r));
    }
    return e;
  }
  handleLateInit_(e) {
    if (e.networkState === 0 || e.networkState === 3) return;
    if (e.readyState === 0) {
      let s = !1;
      const n = function () {
        s = !0;
      };
      this.on("loadstart", n);
      const r = function () {
        s || this.trigger("loadstart");
      };
      this.on("loadedmetadata", r),
        this.ready(function () {
          this.off("loadstart", n),
            this.off("loadedmetadata", r),
            s || this.trigger("loadstart");
        });
      return;
    }
    const i = ["loadstart"];
    i.push("loadedmetadata"),
      e.readyState >= 2 && i.push("loadeddata"),
      e.readyState >= 3 && i.push("canplay"),
      e.readyState >= 4 && i.push("canplaythrough"),
      this.ready(function () {
        i.forEach(function (s) {
          this.trigger(s);
        }, this);
      });
  }
  setScrubbing(e) {
    this.isScrubbing_ = e;
  }
  scrubbing() {
    return this.isScrubbing_;
  }
  setCurrentTime(e) {
    try {
      this.isScrubbing_ && this.el_.fastSeek && Lo
        ? this.el_.fastSeek(e)
        : (this.el_.currentTime = e);
    } catch (i) {
      be(i, "Video is not ready. (Video.js)");
    }
  }
  duration() {
    if (this.el_.duration === 1 / 0 && yi && vi && this.el_.currentTime === 0) {
      const e = () => {
        this.el_.currentTime > 0 &&
          (this.el_.duration === 1 / 0 && this.trigger("durationchange"),
          this.off("timeupdate", e));
      };
      return this.on("timeupdate", e), NaN;
    }
    return this.el_.duration || NaN;
  }
  width() {
    return this.el_.offsetWidth;
  }
  height() {
    return this.el_.offsetHeight;
  }
  proxyWebkitFullscreen_() {
    if (!("webkitDisplayingFullscreen" in this.el_)) return;
    const e = function () {
        this.trigger("fullscreenchange", { isFullscreen: !1 }),
          this.el_.controls &&
            !this.options_.nativeControlsForTouch &&
            this.controls() &&
            (this.el_.controls = !1);
      },
      i = function () {
        "webkitPresentationMode" in this.el_ &&
          this.el_.webkitPresentationMode !== "picture-in-picture" &&
          (this.one("webkitendfullscreen", e),
          this.trigger("fullscreenchange", {
            isFullscreen: !0,
            nativeIOSFullscreen: !0,
          }));
      };
    this.on("webkitbeginfullscreen", i),
      this.on("dispose", () => {
        this.off("webkitbeginfullscreen", i),
          this.off("webkitendfullscreen", e);
      });
  }
  supportsFullScreen() {
    return typeof this.el_.webkitEnterFullScreen == "function";
  }
  enterFullScreen() {
    const e = this.el_;
    if (e.paused && e.networkState <= e.HAVE_METADATA)
      ci(this.el_.play()),
        this.setTimeout(function () {
          e.pause();
          try {
            e.webkitEnterFullScreen();
          } catch (i) {
            this.trigger("fullscreenerror", i);
          }
        }, 0);
    else
      try {
        e.webkitEnterFullScreen();
      } catch (i) {
        this.trigger("fullscreenerror", i);
      }
  }
  exitFullScreen() {
    if (!this.el_.webkitDisplayingFullscreen) {
      this.trigger("fullscreenerror", new Error("The video is not fullscreen"));
      return;
    }
    this.el_.webkitExitFullScreen();
  }
  requestPictureInPicture() {
    return this.el_.requestPictureInPicture();
  }
  requestVideoFrameCallback(e) {
    return this.featuresVideoFrameCallback && !this.el_.webkitKeys
      ? this.el_.requestVideoFrameCallback(e)
      : super.requestVideoFrameCallback(e);
  }
  cancelVideoFrameCallback(e) {
    this.featuresVideoFrameCallback && !this.el_.webkitKeys
      ? this.el_.cancelVideoFrameCallback(e)
      : super.cancelVideoFrameCallback(e);
  }
  src(e) {
    if (e === void 0) return this.el_.src;
    this.setSrc(e);
  }
  reset() {
    Q.resetMediaElement(this.el_);
  }
  currentSrc() {
    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
  }
  setControls(e) {
    this.el_.controls = !!e;
  }
  addTextTrack(e, i, s) {
    return this.featuresNativeTextTracks
      ? this.el_.addTextTrack(e, i, s)
      : super.addTextTrack(e, i, s);
  }
  createRemoteTextTrack(e) {
    if (!this.featuresNativeTextTracks) return super.createRemoteTextTrack(e);
    const i = K.createElement("track");
    return (
      e.kind && (i.kind = e.kind),
      e.label && (i.label = e.label),
      (e.language || e.srclang) && (i.srclang = e.language || e.srclang),
      e.default && (i.default = e.default),
      e.id && (i.id = e.id),
      e.src && (i.src = e.src),
      i
    );
  }
  addRemoteTextTrack(e, i) {
    const s = super.addRemoteTextTrack(e, i);
    return this.featuresNativeTextTracks && this.el().appendChild(s), s;
  }
  removeRemoteTextTrack(e) {
    if ((super.removeRemoteTextTrack(e), this.featuresNativeTextTracks)) {
      const i = this.$$("track");
      let s = i.length;
      for (; s--; )
        (e === i[s] || e === i[s].track) && this.el().removeChild(i[s]);
    }
  }
  getVideoPlaybackQuality() {
    if (typeof this.el().getVideoPlaybackQuality == "function")
      return this.el().getVideoPlaybackQuality();
    const e = {};
    return (
      typeof this.el().webkitDroppedFrameCount < "u" &&
        typeof this.el().webkitDecodedFrameCount < "u" &&
        ((e.droppedVideoFrames = this.el().webkitDroppedFrameCount),
        (e.totalVideoFrames = this.el().webkitDecodedFrameCount)),
      C.performance && (e.creationTime = C.performance.now()),
      e
    );
  }
}
Io(Q, "TEST_VID", function () {
  if (!vn()) return;
  const t = K.createElement("video"),
    e = K.createElement("track");
  return (
    (e.kind = "captions"),
    (e.srclang = "en"),
    (e.label = "English"),
    t.appendChild(e),
    t
  );
});
Q.isSupported = function () {
  try {
    Q.TEST_VID.volume = 0.5;
  } catch {
    return !1;
  }
  return !!(Q.TEST_VID && Q.TEST_VID.canPlayType);
};
Q.canPlayType = function (t) {
  return Q.TEST_VID.canPlayType(t);
};
Q.canPlaySource = function (t, e) {
  return Q.canPlayType(t.type);
};
Q.canControlVolume = function () {
  try {
    const t = Q.TEST_VID.volume;
    Q.TEST_VID.volume = t / 2 + 0.1;
    const e = t !== Q.TEST_VID.volume;
    return e && yt
      ? (C.setTimeout(() => {
          Q &&
            Q.prototype &&
            (Q.prototype.featuresVolumeControl = t !== Q.TEST_VID.volume);
        }),
        !1)
      : e;
  } catch {
    return !1;
  }
};
Q.canMuteVolume = function () {
  try {
    const t = Q.TEST_VID.muted;
    return (
      (Q.TEST_VID.muted = !t),
      Q.TEST_VID.muted
        ? cn(Q.TEST_VID, "muted", "muted")
        : No(Q.TEST_VID, "muted", "muted"),
      t !== Q.TEST_VID.muted
    );
  } catch {
    return !1;
  }
};
Q.canControlPlaybackRate = function () {
  if (yi && vi && Oo < 58) return !1;
  try {
    const t = Q.TEST_VID.playbackRate;
    return (
      (Q.TEST_VID.playbackRate = t / 2 + 0.1), t !== Q.TEST_VID.playbackRate
    );
  } catch {
    return !1;
  }
};
Q.canOverrideAttributes = function () {
  try {
    const t = () => {};
    Object.defineProperty(K.createElement("video"), "src", { get: t, set: t }),
      Object.defineProperty(K.createElement("audio"), "src", {
        get: t,
        set: t,
      }),
      Object.defineProperty(K.createElement("video"), "innerHTML", {
        get: t,
        set: t,
      }),
      Object.defineProperty(K.createElement("audio"), "innerHTML", {
        get: t,
        set: t,
      });
  } catch {
    return !1;
  }
  return !0;
};
Q.supportsNativeTextTracks = function () {
  return Lo || (yt && vi);
};
Q.supportsNativeVideoTracks = function () {
  return !!(Q.TEST_VID && Q.TEST_VID.videoTracks);
};
Q.supportsNativeAudioTracks = function () {
  return !!(Q.TEST_VID && Q.TEST_VID.audioTracks);
};
Q.Events = [
  "loadstart",
  "suspend",
  "abort",
  "error",
  "emptied",
  "stalled",
  "loadedmetadata",
  "loadeddata",
  "canplay",
  "canplaythrough",
  "playing",
  "waiting",
  "seeking",
  "seeked",
  "ended",
  "durationchange",
  "timeupdate",
  "progress",
  "play",
  "pause",
  "ratechange",
  "resize",
  "volumechange",
];
[
  ["featuresMuteControl", "canMuteVolume"],
  ["featuresPlaybackRate", "canControlPlaybackRate"],
  ["featuresSourceset", "canOverrideAttributes"],
  ["featuresNativeTextTracks", "supportsNativeTextTracks"],
  ["featuresNativeVideoTracks", "supportsNativeVideoTracks"],
  ["featuresNativeAudioTracks", "supportsNativeAudioTracks"],
].forEach(function ([t, e]) {
  Io(Q.prototype, t, () => Q[e](), !0);
});
Q.prototype.featuresVolumeControl = Q.canControlVolume();
Q.prototype.movingMediaElementInDOM = !yt;
Q.prototype.featuresFullscreenResize = !0;
Q.prototype.featuresProgressEvents = !0;
Q.prototype.featuresTimeupdateEvents = !0;
Q.prototype.featuresVideoFrameCallback = !!(
  Q.TEST_VID && Q.TEST_VID.requestVideoFrameCallback
);
Q.disposeMediaElement = function (t) {
  if (t) {
    for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes(); )
      t.removeChild(t.firstChild);
    t.removeAttribute("src"),
      typeof t.load == "function" &&
        (function () {
          try {
            t.load();
          } catch {}
        })();
  }
};
Q.resetMediaElement = function (t) {
  if (!t) return;
  const e = t.querySelectorAll("source");
  let i = e.length;
  for (; i--; ) t.removeChild(e[i]);
  t.removeAttribute("src"),
    typeof t.load == "function" &&
      (function () {
        try {
          t.load();
        } catch {}
      })();
};
[
  "muted",
  "defaultMuted",
  "autoplay",
  "controls",
  "loop",
  "playsinline",
].forEach(function (t) {
  Q.prototype[t] = function () {
    return this.el_[t] || this.el_.hasAttribute(t);
  };
});
["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (
  t
) {
  Q.prototype["set" + je(t)] = function (e) {
    (this.el_[t] = e),
      e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t);
  };
});
[
  "paused",
  "currentTime",
  "buffered",
  "volume",
  "poster",
  "preload",
  "error",
  "seeking",
  "seekable",
  "ended",
  "playbackRate",
  "defaultPlaybackRate",
  "disablePictureInPicture",
  "played",
  "networkState",
  "readyState",
  "videoWidth",
  "videoHeight",
  "crossOrigin",
].forEach(function (t) {
  Q.prototype[t] = function () {
    return this.el_[t];
  };
});
[
  "volume",
  "src",
  "poster",
  "preload",
  "playbackRate",
  "defaultPlaybackRate",
  "disablePictureInPicture",
  "crossOrigin",
].forEach(function (t) {
  Q.prototype["set" + je(t)] = function (e) {
    this.el_[t] = e;
  };
});
["pause", "load", "play"].forEach(function (t) {
  Q.prototype[t] = function () {
    return this.el_[t]();
  };
});
pe.withSourceHandlers(Q);
Q.nativeSourceHandler = {};
Q.nativeSourceHandler.canPlayType = function (t) {
  try {
    return Q.TEST_VID.canPlayType(t);
  } catch {
    return "";
  }
};
Q.nativeSourceHandler.canHandleSource = function (t, e) {
  if (t.type) return Q.nativeSourceHandler.canPlayType(t.type);
  if (t.src) {
    const i = Cc(t.src);
    return Q.nativeSourceHandler.canPlayType(`video/${i}`);
  }
  return "";
};
Q.nativeSourceHandler.handleSource = function (t, e, i) {
  e.setSrc(t.src);
};
Q.nativeSourceHandler.dispose = function () {};
Q.registerSourceHandler(Q.nativeSourceHandler);
pe.registerTech("Html5", Q);
const Ug = [
    "progress",
    "abort",
    "suspend",
    "emptied",
    "stalled",
    "loadedmetadata",
    "loadeddata",
    "timeupdate",
    "resize",
    "volumechange",
    "texttrackchange",
  ],
  Pl = {
    canplay: "CanPlay",
    canplaythrough: "CanPlayThrough",
    playing: "Playing",
    seeked: "Seeked",
  },
  hu = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
  Oa = {};
hu.forEach((t) => {
  const e = t.charAt(0) === "x" ? `x-${t.substring(1)}` : t;
  Oa[t] = `vjs-layout-${e}`;
});
const fC = {
  tiny: 210,
  xsmall: 320,
  small: 425,
  medium: 768,
  large: 1440,
  xlarge: 2560,
  huge: 1 / 0,
};
class Re extends B {
  constructor(e, i, s) {
    if (
      ((e.id = e.id || i.id || `vjs_video_${Ti()}`),
      (i = Object.assign(Re.getTagSettings(e), i)),
      (i.initChildren = !1),
      (i.createEl = !1),
      (i.evented = !1),
      (i.reportTouchActivity = !1),
      !i.language)
    ) {
      const a = e.closest("[lang]");
      a && (i.language = a.getAttribute("lang"));
    }
    if (
      (super(null, i, s),
      (this.boundDocumentFullscreenChange_ = (a) =>
        this.documentFullscreenChange_(a)),
      (this.boundFullWindowOnEscKey_ = (a) => this.fullWindowOnEscKey(a)),
      (this.boundUpdateStyleEl_ = (a) => this.updateStyleEl_(a)),
      (this.boundApplyInitTime_ = (a) => this.applyInitTime_(a)),
      (this.boundUpdateCurrentBreakpoint_ = (a) =>
        this.updateCurrentBreakpoint_(a)),
      (this.boundHandleTechClick_ = (a) => this.handleTechClick_(a)),
      (this.boundHandleTechDoubleClick_ = (a) =>
        this.handleTechDoubleClick_(a)),
      (this.boundHandleTechTouchStart_ = (a) => this.handleTechTouchStart_(a)),
      (this.boundHandleTechTouchMove_ = (a) => this.handleTechTouchMove_(a)),
      (this.boundHandleTechTouchEnd_ = (a) => this.handleTechTouchEnd_(a)),
      (this.boundHandleTechTap_ = (a) => this.handleTechTap_(a)),
      (this.isFullscreen_ = !1),
      (this.log = Lm(this.id_)),
      (this.fsApi_ = za),
      (this.isPosterFromTech_ = !1),
      (this.queuedCallbacks_ = []),
      (this.isReady_ = !1),
      (this.hasStarted_ = !1),
      (this.userActive_ = !1),
      (this.debugEnabled_ = !1),
      (this.audioOnlyMode_ = !1),
      (this.audioPosterMode_ = !1),
      (this.audioOnlyCache_ = { playerHeight: null, hiddenChildren: [] }),
      !this.options_ ||
        !this.options_.techOrder ||
        !this.options_.techOrder.length)
    )
      throw new Error(
        "No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?"
      );
    if (
      ((this.tag = e),
      (this.tagAttributes = e && Vi(e)),
      this.language(this.options_.language),
      i.languages)
    ) {
      const a = {};
      Object.getOwnPropertyNames(i.languages).forEach(function (o) {
        a[o.toLowerCase()] = i.languages[o];
      }),
        (this.languages_ = a);
    } else this.languages_ = Re.prototype.options_.languages;
    this.resetCache_(),
      (this.poster_ = i.poster || ""),
      (this.controls_ = !!i.controls),
      (e.controls = !1),
      e.removeAttribute("controls"),
      (this.changingSrc_ = !1),
      (this.playCallbacks_ = []),
      (this.playTerminatedQueue_ = []),
      e.hasAttribute("autoplay")
        ? this.autoplay(!0)
        : this.autoplay(this.options_.autoplay),
      i.plugins &&
        Object.keys(i.plugins).forEach((a) => {
          if (typeof this[a] != "function")
            throw new Error(`plugin "${a}" does not exist`);
        }),
      (this.scrubbing_ = !1),
      (this.el_ = this.createEl()),
      bc(this, { eventBusKey: "el_" }),
      this.fsApi_.requestFullscreen &&
        (Rt(
          K,
          this.fsApi_.fullscreenchange,
          this.boundDocumentFullscreenChange_
        ),
        this.on(
          this.fsApi_.fullscreenchange,
          this.boundDocumentFullscreenChange_
        )),
      this.fluid_ &&
        this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
    const n = De(this.options_);
    i.plugins &&
      Object.keys(i.plugins).forEach((a) => {
        this[a](i.plugins[a]);
      }),
      i.debug && this.debug(!0),
      (this.options_.playerOptions = n),
      (this.middleware_ = []),
      this.playbackRates(i.playbackRates),
      this.initChildren(),
      this.isAudio(e.nodeName.toLowerCase() === "audio"),
      this.controls()
        ? this.addClass("vjs-controls-enabled")
        : this.addClass("vjs-controls-disabled"),
      this.el_.setAttribute("role", "region"),
      this.isAudio()
        ? this.el_.setAttribute("aria-label", this.localize("Audio Player"))
        : this.el_.setAttribute("aria-label", this.localize("Video Player")),
      this.isAudio() && this.addClass("vjs-audio"),
      Tr && this.addClass("vjs-touch-enabled"),
      yt || this.addClass("vjs-workinghover"),
      (Re.players[this.id_] = this);
    const r = Om.split(".")[0];
    this.addClass(`vjs-v${r}`),
      this.userActive(!0),
      this.reportUserActivity(),
      this.one("play", (a) => this.listenForUserActivity_(a)),
      this.on("keydown", (a) => this.handleKeyDown(a)),
      this.on("languagechange", (a) => this.handleLanguagechange(a)),
      this.breakpoints(this.options_.breakpoints),
      this.responsive(this.options_.responsive),
      this.on("ready", () => {
        this.audioPosterMode(this.options_.audioPosterMode),
          this.audioOnlyMode(this.options_.audioOnlyMode);
      });
  }
  dispose() {
    this.trigger("dispose"),
      this.off("dispose"),
      rt(K, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_),
      rt(K, "keydown", this.boundFullWindowOnEscKey_),
      this.styleEl_ &&
        this.styleEl_.parentNode &&
        (this.styleEl_.parentNode.removeChild(this.styleEl_),
        (this.styleEl_ = null)),
      (Re.players[this.id_] = null),
      this.tag && this.tag.player && (this.tag.player = null),
      this.el_ && this.el_.player && (this.el_.player = null),
      this.tech_ &&
        (this.tech_.dispose(),
        (this.isPosterFromTech_ = !1),
        (this.poster_ = "")),
      this.playerElIngest_ && (this.playerElIngest_ = null),
      this.tag && (this.tag = null),
      NE(this),
      ft.names.forEach((e) => {
        const i = ft[e],
          s = this[i.getterName]();
        s && s.off && s.off();
      }),
      super.dispose({ restoreEl: this.options_.restoreEl });
  }
  createEl() {
    let e = this.tag,
      i,
      s = (this.playerElIngest_ =
        e.parentNode &&
        e.parentNode.hasAttribute &&
        e.parentNode.hasAttribute("data-vjs-player"));
    const n = this.tag.tagName.toLowerCase() === "video-js";
    s
      ? (i = this.el_ = e.parentNode)
      : n || (i = this.el_ = super.createEl("div"));
    const r = Vi(e);
    if (n) {
      for (
        i = this.el_ = e, e = this.tag = K.createElement("video");
        i.children.length;

      )
        e.appendChild(i.firstChild);
      ir(i, "video-js") || ys(i, "video-js"),
        i.appendChild(e),
        (s = this.playerElIngest_ = i),
        Object.keys(i).forEach((o) => {
          try {
            e[o] = i[o];
          } catch {}
        });
    }
    if (
      (e.setAttribute("tabindex", "-1"),
      (r.tabindex = "-1"),
      vi &&
        Po &&
        (e.setAttribute("role", "application"), (r.role = "application")),
      e.removeAttribute("width"),
      e.removeAttribute("height"),
      "width" in r && delete r.width,
      "height" in r && delete r.height,
      Object.getOwnPropertyNames(r).forEach(function (o) {
        (n && o === "class") || i.setAttribute(o, r[o]),
          n && e.setAttribute(o, r[o]);
      }),
      (e.playerId = e.id),
      (e.id += "_html5_api"),
      (e.className = "vjs-tech"),
      (e.player = i.player = this),
      this.addClass("vjs-paused"),
      C.VIDEOJS_NO_DYNAMIC_STYLE !== !0)
    ) {
      this.styleEl_ = Zm("vjs-styles-dimensions");
      const o = Ki(".vjs-styles-defaults"),
        u = Ki("head");
      u.insertBefore(this.styleEl_, o ? o.nextSibling : u.firstChild);
    }
    (this.fill_ = !1),
      (this.fluid_ = !1),
      this.width(this.options_.width),
      this.height(this.options_.height),
      this.fill(this.options_.fill),
      this.fluid(this.options_.fluid),
      this.aspectRatio(this.options_.aspectRatio),
      this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
    const a = e.getElementsByTagName("a");
    for (let o = 0; o < a.length; o++) {
      const u = a.item(o);
      ys(u, "vjs-hidden"), u.setAttribute("hidden", "hidden");
    }
    return (
      (e.initNetworkState_ = e.networkState),
      e.parentNode && !s && e.parentNode.insertBefore(i, e),
      su(e, i),
      this.children_.unshift(e),
      this.el_.setAttribute("lang", this.language_),
      this.el_.setAttribute("translate", "no"),
      (this.el_ = i),
      i
    );
  }
  crossOrigin(e) {
    if (typeof e > "u") return this.techGet_("crossOrigin");
    if (e !== null && e !== "anonymous" && e !== "use-credentials") {
      be.warn(
        `crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`
      );
      return;
    }
    this.techCall_("setCrossOrigin", e),
      this.posterImage && this.posterImage.crossOrigin(e);
  }
  width(e) {
    return this.dimension("width", e);
  }
  height(e) {
    return this.dimension("height", e);
  }
  dimension(e, i) {
    const s = e + "_";
    if (i === void 0) return this[s] || 0;
    if (i === "" || i === "auto") {
      (this[s] = void 0), this.updateStyleEl_();
      return;
    }
    const n = parseFloat(i);
    if (isNaN(n)) {
      be.error(`Improper value "${i}" supplied for for ${e}`);
      return;
    }
    (this[s] = n), this.updateStyleEl_();
  }
  fluid(e) {
    if (e === void 0) return !!this.fluid_;
    (this.fluid_ = !!e),
      Oi(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_),
      e
        ? (this.addClass("vjs-fluid"),
          this.fill(!1),
          dE(this, () => {
            this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
          }))
        : this.removeClass("vjs-fluid"),
      this.updateStyleEl_();
  }
  fill(e) {
    if (e === void 0) return !!this.fill_;
    (this.fill_ = !!e),
      e
        ? (this.addClass("vjs-fill"), this.fluid(!1))
        : this.removeClass("vjs-fill");
  }
  aspectRatio(e) {
    if (e === void 0) return this.aspectRatio_;
    if (!/^\d+\:\d+$/.test(e))
      throw new Error(
        "Improper value supplied for aspect ratio. The format should be width:height, for example 16:9."
      );
    (this.aspectRatio_ = e), this.fluid(!0), this.updateStyleEl_();
  }
  updateStyleEl_() {
    if (C.VIDEOJS_NO_DYNAMIC_STYLE === !0) {
      const o =
          typeof this.width_ == "number" ? this.width_ : this.options_.width,
        u =
          typeof this.height_ == "number" ? this.height_ : this.options_.height,
        f = this.tech_ && this.tech_.el();
      f && (o >= 0 && (f.width = o), u >= 0 && (f.height = u));
      return;
    }
    let e, i, s, n;
    this.aspectRatio_ !== void 0 && this.aspectRatio_ !== "auto"
      ? (s = this.aspectRatio_)
      : this.videoWidth() > 0
      ? (s = this.videoWidth() + ":" + this.videoHeight())
      : (s = "16:9");
    const r = s.split(":"),
      a = r[1] / r[0];
    this.width_ !== void 0
      ? (e = this.width_)
      : this.height_ !== void 0
      ? (e = this.height_ / a)
      : (e = this.videoWidth() || 300),
      this.height_ !== void 0 ? (i = this.height_) : (i = e * a),
      /^[^a-zA-Z]/.test(this.id())
        ? (n = "dimensions-" + this.id())
        : (n = this.id() + "-dimensions"),
      this.addClass(n),
      eg(
        this.styleEl_,
        `
      .${n} {
        width: ${e}px;
        height: ${i}px;
      }

      .${n}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${a * 100}%;
      }
    `
      );
  }
  loadTech_(e, i) {
    this.tech_ && this.unloadTech_();
    const s = je(e),
      n = e.charAt(0).toLowerCase() + e.slice(1);
    s !== "Html5" &&
      this.tag &&
      (pe.getTech("Html5").disposeMediaElement(this.tag),
      (this.tag.player = null),
      (this.tag = null)),
      (this.techName_ = s),
      (this.isReady_ = !1);
    let r = this.autoplay();
    (typeof this.autoplay() == "string" ||
      (this.autoplay() === !0 && this.options_.normalizeAutoplay)) &&
      (r = !1);
    const a = {
      source: i,
      autoplay: r,
      nativeControlsForTouch: this.options_.nativeControlsForTouch,
      playerId: this.id(),
      techId: `${this.id()}_${n}_api`,
      playsinline: this.options_.playsinline,
      preload: this.options_.preload,
      loop: this.options_.loop,
      disablePictureInPicture: this.options_.disablePictureInPicture,
      muted: this.options_.muted,
      poster: this.poster(),
      language: this.language(),
      playerElIngest: this.playerElIngest_ || !1,
      "vtt.js": this.options_["vtt.js"],
      canOverridePoster: !!this.options_.techCanOverridePoster,
      enableSourceset: this.options_.enableSourceset,
    };
    ft.names.forEach((u) => {
      const f = ft[u];
      a[f.getterName] = this[f.privateName];
    }),
      Object.assign(a, this.options_[s]),
      Object.assign(a, this.options_[n]),
      Object.assign(a, this.options_[e.toLowerCase()]),
      this.tag && (a.tag = this.tag),
      i &&
        i.src === this.cache_.src &&
        this.cache_.currentTime > 0 &&
        (a.startTime = this.cache_.currentTime);
    const o = pe.getTech(e);
    if (!o)
      throw new Error(
        `No Tech named '${s}' exists! '${s}' should be registered using videojs.registerTech()'`
      );
    (this.tech_ = new o(a)),
      this.tech_.ready(Le(this, this.handleTechReady_), !0),
      Yh.jsonToTextTracks(this.textTracksJson_ || [], this.tech_),
      Ug.forEach((u) => {
        this.on(this.tech_, u, (f) => this[`handleTech${je(u)}_`](f));
      }),
      Object.keys(Pl).forEach((u) => {
        this.on(this.tech_, u, (f) => {
          if (this.tech_.playbackRate() === 0 && this.tech_.seeking()) {
            this.queuedCallbacks_.push({
              callback: this[`handleTech${Pl[u]}_`].bind(this),
              event: f,
            });
            return;
          }
          this[`handleTech${Pl[u]}_`](f);
        });
      }),
      this.on(this.tech_, "loadstart", (u) => this.handleTechLoadStart_(u)),
      this.on(this.tech_, "sourceset", (u) => this.handleTechSourceset_(u)),
      this.on(this.tech_, "waiting", (u) => this.handleTechWaiting_(u)),
      this.on(this.tech_, "ended", (u) => this.handleTechEnded_(u)),
      this.on(this.tech_, "seeking", (u) => this.handleTechSeeking_(u)),
      this.on(this.tech_, "play", (u) => this.handleTechPlay_(u)),
      this.on(this.tech_, "pause", (u) => this.handleTechPause_(u)),
      this.on(this.tech_, "durationchange", (u) =>
        this.handleTechDurationChange_(u)
      ),
      this.on(this.tech_, "fullscreenchange", (u, f) =>
        this.handleTechFullscreenChange_(u, f)
      ),
      this.on(this.tech_, "fullscreenerror", (u, f) =>
        this.handleTechFullscreenError_(u, f)
      ),
      this.on(this.tech_, "enterpictureinpicture", (u) =>
        this.handleTechEnterPictureInPicture_(u)
      ),
      this.on(this.tech_, "leavepictureinpicture", (u) =>
        this.handleTechLeavePictureInPicture_(u)
      ),
      this.on(this.tech_, "error", (u) => this.handleTechError_(u)),
      this.on(this.tech_, "posterchange", (u) =>
        this.handleTechPosterChange_(u)
      ),
      this.on(this.tech_, "textdata", (u) => this.handleTechTextData_(u)),
      this.on(this.tech_, "ratechange", (u) => this.handleTechRateChange_(u)),
      this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_),
      this.usingNativeControls(this.techGet_("controls")),
      this.controls() &&
        !this.usingNativeControls() &&
        this.addTechControlsListeners_(),
      this.tech_.el().parentNode !== this.el() &&
        (s !== "Html5" || !this.tag) &&
        su(this.tech_.el(), this.el()),
      this.tag && ((this.tag.player = null), (this.tag = null));
  }
  unloadTech_() {
    ft.names.forEach((e) => {
      const i = ft[e];
      this[i.privateName] = this[i.getterName]();
    }),
      (this.textTracksJson_ = Yh.textTracksToJson(this.tech_)),
      (this.isReady_ = !1),
      this.tech_.dispose(),
      (this.tech_ = !1),
      this.isPosterFromTech_ &&
        ((this.poster_ = ""), this.trigger("posterchange")),
      (this.isPosterFromTech_ = !1);
  }
  tech(e) {
    return (
      e === void 0 &&
        be.warn(`Using the tech directly can be dangerous. I hope you know what you're doing.
See https://github.com/videojs/video.js/issues/2617 for more info.
`),
      this.tech_
    );
  }
  addTechControlsListeners_() {
    this.removeTechControlsListeners_(),
      this.on(this.tech_, "click", this.boundHandleTechClick_),
      this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_),
      this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
      this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
      this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
      this.on(this.tech_, "tap", this.boundHandleTechTap_);
  }
  removeTechControlsListeners_() {
    this.off(this.tech_, "tap", this.boundHandleTechTap_),
      this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
      this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
      this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
      this.off(this.tech_, "click", this.boundHandleTechClick_),
      this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_);
  }
  handleTechReady_() {
    this.triggerReady(),
      this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
      this.handleTechPosterChange_(),
      this.handleTechDurationChange_();
  }
  handleTechLoadStart_() {
    this.removeClass("vjs-ended", "vjs-seeking"),
      this.error(null),
      this.handleTechDurationChange_(),
      this.paused()
        ? (this.hasStarted(!1), this.trigger("loadstart"))
        : this.trigger("loadstart"),
      this.manualAutoplay_(
        this.autoplay() === !0 && this.options_.normalizeAutoplay
          ? "play"
          : this.autoplay()
      );
  }
  manualAutoplay_(e) {
    if (!this.tech_ || typeof e != "string") return;
    const i = () => {
      const n = this.muted();
      this.muted(!0);
      const r = () => {
        this.muted(n);
      };
      this.playTerminatedQueue_.push(r);
      const a = this.play();
      if (nr(a))
        return a.catch((o) => {
          throw (
            (r(),
            new Error(
              `Rejection at manualAutoplay. Restoring muted value. ${o || ""}`
            ))
          );
        });
    };
    let s;
    if (
      (e === "any" && !this.muted()
        ? ((s = this.play()), nr(s) && (s = s.catch(i)))
        : e === "muted" && !this.muted()
        ? (s = i())
        : (s = this.play()),
      !!nr(s))
    )
      return s
        .then(() => {
          this.trigger({ type: "autoplay-success", autoplay: e });
        })
        .catch(() => {
          this.trigger({ type: "autoplay-failure", autoplay: e });
        });
  }
  updateSourceCaches_(e = "") {
    let i = e,
      s = "";
    typeof i != "string" && ((i = e.src), (s = e.type)),
      (this.cache_.source = this.cache_.source || {}),
      (this.cache_.sources = this.cache_.sources || []),
      i && !s && (s = FE(this, i)),
      (this.cache_.source = De({}, e, { src: i, type: s }));
    const n = this.cache_.sources.filter((u) => u.src && u.src === i),
      r = [],
      a = this.$$("source"),
      o = [];
    for (let u = 0; u < a.length; u++) {
      const f = Vi(a[u]);
      r.push(f), f.src && f.src === i && o.push(f.src);
    }
    o.length && !n.length
      ? (this.cache_.sources = r)
      : n.length || (this.cache_.sources = [this.cache_.source]),
      (this.cache_.src = i);
  }
  handleTechSourceset_(e) {
    if (!this.changingSrc_) {
      let i = (r) => this.updateSourceCaches_(r);
      const s = this.currentSource().src,
        n = e.src;
      s &&
        !/^blob:/.test(s) &&
        /^blob:/.test(n) &&
        (!this.lastSource_ ||
          (this.lastSource_.tech !== n && this.lastSource_.player !== s)) &&
        (i = () => {}),
        i(n),
        e.src ||
          this.tech_.any(["sourceset", "loadstart"], (r) => {
            if (r.type === "sourceset") return;
            const a = this.techGet("currentSrc");
            (this.lastSource_.tech = a), this.updateSourceCaches_(a);
          });
    }
    (this.lastSource_ = { player: this.currentSource().src, tech: e.src }),
      this.trigger({ src: e.src, type: "sourceset" });
  }
  hasStarted(e) {
    if (e === void 0) return this.hasStarted_;
    e !== this.hasStarted_ &&
      ((this.hasStarted_ = e),
      this.hasStarted_
        ? this.addClass("vjs-has-started")
        : this.removeClass("vjs-has-started"));
  }
  handleTechPlay_() {
    this.removeClass("vjs-ended", "vjs-paused"),
      this.addClass("vjs-playing"),
      this.hasStarted(!0),
      this.trigger("play");
  }
  handleTechRateChange_() {
    this.tech_.playbackRate() > 0 &&
      this.cache_.lastPlaybackRate === 0 &&
      (this.queuedCallbacks_.forEach((e) => e.callback(e.event)),
      (this.queuedCallbacks_ = [])),
      (this.cache_.lastPlaybackRate = this.tech_.playbackRate()),
      this.trigger("ratechange");
  }
  handleTechWaiting_() {
    this.addClass("vjs-waiting"), this.trigger("waiting");
    const e = this.currentTime(),
      i = () => {
        e !== this.currentTime() &&
          (this.removeClass("vjs-waiting"), this.off("timeupdate", i));
      };
    this.on("timeupdate", i);
  }
  handleTechCanPlay_() {
    this.removeClass("vjs-waiting"), this.trigger("canplay");
  }
  handleTechCanPlayThrough_() {
    this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
  }
  handleTechPlaying_() {
    this.removeClass("vjs-waiting"), this.trigger("playing");
  }
  handleTechSeeking_() {
    this.addClass("vjs-seeking"), this.trigger("seeking");
  }
  handleTechSeeked_() {
    this.removeClass("vjs-seeking", "vjs-ended"), this.trigger("seeked");
  }
  handleTechPause_() {
    this.removeClass("vjs-playing"),
      this.addClass("vjs-paused"),
      this.trigger("pause");
  }
  handleTechEnded_() {
    this.addClass("vjs-ended"),
      this.removeClass("vjs-waiting"),
      this.options_.loop
        ? (this.currentTime(0), this.play())
        : this.paused() || this.pause(),
      this.trigger("ended");
  }
  handleTechDurationChange_() {
    this.duration(this.techGet_("duration"));
  }
  handleTechClick_(e) {
    this.controls_ &&
      (this.options_ === void 0 ||
        this.options_.userActions === void 0 ||
        this.options_.userActions.click === void 0 ||
        this.options_.userActions.click !== !1) &&
      (this.options_ !== void 0 &&
      this.options_.userActions !== void 0 &&
      typeof this.options_.userActions.click == "function"
        ? this.options_.userActions.click.call(this, e)
        : this.paused()
        ? ci(this.play())
        : this.pause());
  }
  handleTechDoubleClick_(e) {
    if (!this.controls_) return;
    Array.prototype.some.call(
      this.$$(".vjs-control-bar, .vjs-modal-dialog"),
      (s) => s.contains(e.target)
    ) ||
      ((this.options_ === void 0 ||
        this.options_.userActions === void 0 ||
        this.options_.userActions.doubleClick === void 0 ||
        this.options_.userActions.doubleClick !== !1) &&
        (this.options_ !== void 0 &&
        this.options_.userActions !== void 0 &&
        typeof this.options_.userActions.doubleClick == "function"
          ? this.options_.userActions.doubleClick.call(this, e)
          : this.isFullscreen()
          ? this.exitFullscreen()
          : this.requestFullscreen()));
  }
  handleTechTap_() {
    this.userActive(!this.userActive());
  }
  handleTechTouchStart_() {
    this.userWasActive = this.userActive();
  }
  handleTechTouchMove_() {
    this.userWasActive && this.reportUserActivity();
  }
  handleTechTouchEnd_(e) {
    e.cancelable && e.preventDefault();
  }
  toggleFullscreenClass_() {
    this.isFullscreen()
      ? this.addClass("vjs-fullscreen")
      : this.removeClass("vjs-fullscreen");
  }
  documentFullscreenChange_(e) {
    const i = e.target.player;
    if (i && i !== this) return;
    const s = this.el();
    let n = K[this.fsApi_.fullscreenElement] === s;
    !n && s.matches
      ? (n = s.matches(":" + this.fsApi_.fullscreen))
      : !n &&
        s.msMatchesSelector &&
        (n = s.msMatchesSelector(":" + this.fsApi_.fullscreen)),
      this.isFullscreen(n);
  }
  handleTechFullscreenChange_(e, i) {
    i &&
      (i.nativeIOSFullscreen &&
        (this.addClass("vjs-ios-native-fs"),
        this.tech_.one("webkitendfullscreen", () => {
          this.removeClass("vjs-ios-native-fs");
        })),
      this.isFullscreen(i.isFullscreen));
  }
  handleTechFullscreenError_(e, i) {
    this.trigger("fullscreenerror", i);
  }
  togglePictureInPictureClass_() {
    this.isInPictureInPicture()
      ? this.addClass("vjs-picture-in-picture")
      : this.removeClass("vjs-picture-in-picture");
  }
  handleTechEnterPictureInPicture_(e) {
    this.isInPictureInPicture(!0);
  }
  handleTechLeavePictureInPicture_(e) {
    this.isInPictureInPicture(!1);
  }
  handleTechError_() {
    const e = this.tech_.error();
    this.error(e);
  }
  handleTechTextData_() {
    let e = null;
    arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e);
  }
  getCache() {
    return this.cache_;
  }
  resetCache_() {
    this.cache_ = {
      currentTime: 0,
      initTime: 0,
      inactivityTimeout: this.options_.inactivityTimeout,
      duration: NaN,
      lastVolume: 1,
      lastPlaybackRate: this.defaultPlaybackRate(),
      media: null,
      src: "",
      source: {},
      sources: [],
      playbackRates: [],
      volume: 1,
    };
  }
  techCall_(e, i) {
    this.ready(function () {
      if (e in LE) return PE(this.middleware_, this.tech_, e, i);
      if (e in tf) return ef(this.middleware_, this.tech_, e, i);
      try {
        this.tech_ && this.tech_[e](i);
      } catch (s) {
        throw (be(s), s);
      }
    }, !0);
  }
  techGet_(e) {
    if (!(!this.tech_ || !this.tech_.isReady_)) {
      if (e in DE) return OE(this.middleware_, this.tech_, e);
      if (e in tf) return ef(this.middleware_, this.tech_, e);
      try {
        return this.tech_[e]();
      } catch (i) {
        throw this.tech_[e] === void 0
          ? (be(
              `Video.js: ${e} method not defined for ${this.techName_} playback technology.`,
              i
            ),
            i)
          : i.name === "TypeError"
          ? (be(
              `Video.js: ${e} unavailable on ${this.techName_} playback technology element.`,
              i
            ),
            (this.tech_.isReady_ = !1),
            i)
          : (be(i), i);
      }
    }
  }
  play() {
    return new Promise((e) => {
      this.play_(e);
    });
  }
  play_(e = ci) {
    this.playCallbacks_.push(e);
    const i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
    if (
      (this.waitToPlay_ &&
        (this.off(["ready", "loadstart"], this.waitToPlay_),
        (this.waitToPlay_ = null)),
      !this.isReady_ || !i)
    ) {
      (this.waitToPlay_ = (n) => {
        this.play_();
      }),
        this.one(["ready", "loadstart"], this.waitToPlay_),
        !i && (Lo || yt) && this.load();
      return;
    }
    const s = this.techGet_("play");
    s === null ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(s);
  }
  runPlayTerminatedQueue_() {
    const e = this.playTerminatedQueue_.slice(0);
    (this.playTerminatedQueue_ = []),
      e.forEach(function (i) {
        i();
      });
  }
  runPlayCallbacks_(e) {
    const i = this.playCallbacks_.slice(0);
    (this.playCallbacks_ = []),
      (this.playTerminatedQueue_ = []),
      i.forEach(function (s) {
        s(e);
      });
  }
  pause() {
    this.techCall_("pause");
  }
  paused() {
    return this.techGet_("paused") !== !1;
  }
  played() {
    return this.techGet_("played") || gi(0, 0);
  }
  scrubbing(e) {
    if (typeof e > "u") return this.scrubbing_;
    (this.scrubbing_ = !!e),
      this.techCall_("setScrubbing", this.scrubbing_),
      e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
  }
  currentTime(e) {
    if (typeof e < "u") {
      if (
        (e < 0 && (e = 0),
        !this.isReady_ ||
          this.changingSrc_ ||
          !this.tech_ ||
          !this.tech_.isReady_)
      ) {
        (this.cache_.initTime = e),
          this.off("canplay", this.boundApplyInitTime_),
          this.one("canplay", this.boundApplyInitTime_);
        return;
      }
      this.techCall_("setCurrentTime", e), (this.cache_.initTime = 0);
      return;
    }
    return (
      (this.cache_.currentTime = this.techGet_("currentTime") || 0),
      this.cache_.currentTime
    );
  }
  applyInitTime_() {
    this.currentTime(this.cache_.initTime);
  }
  duration(e) {
    if (e === void 0)
      return this.cache_.duration !== void 0 ? this.cache_.duration : NaN;
    (e = parseFloat(e)),
      e < 0 && (e = 1 / 0),
      e !== this.cache_.duration &&
        ((this.cache_.duration = e),
        e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"),
        isNaN(e) || this.trigger("durationchange"));
  }
  remainingTime() {
    return this.duration() - this.currentTime();
  }
  remainingTimeDisplay() {
    return Math.floor(this.duration()) - Math.floor(this.currentTime());
  }
  buffered() {
    let e = this.techGet_("buffered");
    return (!e || !e.length) && (e = gi(0, 0)), e;
  }
  bufferedPercent() {
    return ug(this.buffered(), this.duration());
  }
  bufferedEnd() {
    const e = this.buffered(),
      i = this.duration();
    let s = e.end(e.length - 1);
    return s > i && (s = i), s;
  }
  volume(e) {
    let i;
    if (e !== void 0) {
      (i = Math.max(0, Math.min(1, parseFloat(e)))),
        (this.cache_.volume = i),
        this.techCall_("setVolume", i),
        i > 0 && this.lastVolume_(i);
      return;
    }
    return (i = parseFloat(this.techGet_("volume"))), isNaN(i) ? 1 : i;
  }
  muted(e) {
    if (e !== void 0) {
      this.techCall_("setMuted", e);
      return;
    }
    return this.techGet_("muted") || !1;
  }
  defaultMuted(e) {
    return e !== void 0
      ? this.techCall_("setDefaultMuted", e)
      : this.techGet_("defaultMuted") || !1;
  }
  lastVolume_(e) {
    if (e !== void 0 && e !== 0) {
      this.cache_.lastVolume = e;
      return;
    }
    return this.cache_.lastVolume;
  }
  supportsFullScreen() {
    return this.techGet_("supportsFullScreen") || !1;
  }
  isFullscreen(e) {
    if (e !== void 0) {
      const i = this.isFullscreen_;
      (this.isFullscreen_ = Boolean(e)),
        this.isFullscreen_ !== i &&
          this.fsApi_.prefixed &&
          this.trigger("fullscreenchange"),
        this.toggleFullscreenClass_();
      return;
    }
    return this.isFullscreen_;
  }
  requestFullscreen(e) {
    this.isInPictureInPicture() && this.exitPictureInPicture();
    const i = this;
    return new Promise((s, n) => {
      function r() {
        i.off("fullscreenerror", o), i.off("fullscreenchange", a);
      }
      function a() {
        r(), s();
      }
      function o(f, p) {
        r(), n(p);
      }
      i.one("fullscreenchange", a), i.one("fullscreenerror", o);
      const u = i.requestFullscreenHelper_(e);
      u && (u.then(r, r), u.then(s, n));
    });
  }
  requestFullscreenHelper_(e) {
    let i;
    if (
      (this.fsApi_.prefixed ||
        ((i =
          (this.options_.fullscreen && this.options_.fullscreen.options) || {}),
        e !== void 0 && (i = e)),
      this.fsApi_.requestFullscreen)
    ) {
      const s = this.el_[this.fsApi_.requestFullscreen](i);
      return (
        s &&
          s.then(
            () => this.isFullscreen(!0),
            () => this.isFullscreen(!1)
          ),
        s
      );
    } else
      this.tech_.supportsFullScreen() && !this.options_.preferFullWindow
        ? this.techCall_("enterFullScreen")
        : this.enterFullWindow();
  }
  exitFullscreen() {
    const e = this;
    return new Promise((i, s) => {
      function n() {
        e.off("fullscreenerror", a), e.off("fullscreenchange", r);
      }
      function r() {
        n(), i();
      }
      function a(u, f) {
        n(), s(f);
      }
      e.one("fullscreenchange", r), e.one("fullscreenerror", a);
      const o = e.exitFullscreenHelper_();
      o && (o.then(n, n), o.then(i, s));
    });
  }
  exitFullscreenHelper_() {
    if (this.fsApi_.requestFullscreen) {
      const e = K[this.fsApi_.exitFullscreen]();
      return e && ci(e.then(() => this.isFullscreen(!1))), e;
    } else
      this.tech_.supportsFullScreen() && !this.options_.preferFullWindow
        ? this.techCall_("exitFullScreen")
        : this.exitFullWindow();
  }
  enterFullWindow() {
    this.isFullscreen(!0),
      (this.isFullWindow = !0),
      (this.docOrigOverflow = K.documentElement.style.overflow),
      Rt(K, "keydown", this.boundFullWindowOnEscKey_),
      (K.documentElement.style.overflow = "hidden"),
      ys(K.body, "vjs-full-window"),
      this.trigger("enterFullWindow");
  }
  fullWindowOnEscKey(e) {
    he.isEventKey(e, "Esc") &&
      this.isFullscreen() === !0 &&
      (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen());
  }
  exitFullWindow() {
    this.isFullscreen(!1),
      (this.isFullWindow = !1),
      rt(K, "keydown", this.boundFullWindowOnEscKey_),
      (K.documentElement.style.overflow = this.docOrigOverflow),
      Ro(K.body, "vjs-full-window"),
      this.trigger("exitFullWindow");
  }
  disablePictureInPicture(e) {
    if (e === void 0) return this.techGet_("disablePictureInPicture");
    this.techCall_("setDisablePictureInPicture", e),
      (this.options_.disablePictureInPicture = e),
      this.trigger("disablepictureinpicturechanged");
  }
  isInPictureInPicture(e) {
    if (e !== void 0) {
      (this.isInPictureInPicture_ = !!e), this.togglePictureInPictureClass_();
      return;
    }
    return !!this.isInPictureInPicture_;
  }
  requestPictureInPicture() {
    if ("pictureInPictureEnabled" in K && this.disablePictureInPicture() === !1)
      return this.techGet_("requestPictureInPicture");
  }
  exitPictureInPicture() {
    if ("pictureInPictureEnabled" in K) return K.exitPictureInPicture();
  }
  handleKeyDown(e) {
    const { userActions: i } = this.options_;
    !i ||
      !i.hotkeys ||
      ((n) => {
        const r = n.tagName.toLowerCase();
        if (n.isContentEditable) return !0;
        const a = ["button", "checkbox", "hidden", "radio", "reset", "submit"];
        return r === "input"
          ? a.indexOf(n.type) === -1
          : ["textarea"].indexOf(r) !== -1;
      })(this.el_.ownerDocument.activeElement) ||
      (typeof i.hotkeys == "function"
        ? i.hotkeys.call(this, e)
        : this.handleHotkeys(e));
  }
  handleHotkeys(e) {
    const i = this.options_.userActions
        ? this.options_.userActions.hotkeys
        : {},
      {
        fullscreenKey: s = (a) => he.isEventKey(a, "f"),
        muteKey: n = (a) => he.isEventKey(a, "m"),
        playPauseKey: r = (a) =>
          he.isEventKey(a, "k") || he.isEventKey(a, "Space"),
      } = i;
    if (s.call(this, e)) {
      e.preventDefault(), e.stopPropagation();
      const a = B.getComponent("FullscreenToggle");
      K[this.fsApi_.fullscreenEnabled] !== !1 &&
        a.prototype.handleClick.call(this, e);
    } else
      n.call(this, e)
        ? (e.preventDefault(),
          e.stopPropagation(),
          B.getComponent("MuteToggle").prototype.handleClick.call(this, e))
        : r.call(this, e) &&
          (e.preventDefault(),
          e.stopPropagation(),
          B.getComponent("PlayToggle").prototype.handleClick.call(this, e));
  }
  canPlayType(e) {
    let i;
    for (let s = 0, n = this.options_.techOrder; s < n.length; s++) {
      const r = n[s];
      let a = pe.getTech(r);
      if ((a || (a = B.getComponent(r)), !a)) {
        be.error(
          `The "${r}" tech is undefined. Skipped browser support check for that tech.`
        );
        continue;
      }
      if (a.isSupported() && ((i = a.canPlayType(e)), i)) return i;
    }
    return "";
  }
  selectSource(e) {
    const i = this.options_.techOrder
        .map((o) => [o, pe.getTech(o)])
        .filter(([o, u]) =>
          u
            ? u.isSupported()
            : (be.error(
                `The "${o}" tech is undefined. Skipped browser support check for that tech.`
              ),
              !1)
        ),
      s = function (o, u, f) {
        let p;
        return (
          o.some((_) =>
            u.some((v) => {
              if (((p = f(_, v)), p)) return !0;
            })
          ),
          p
        );
      };
    let n;
    const r = (o) => (u, f) => o(f, u),
      a = ([o, u], f) => {
        if (u.canPlaySource(f, this.options_[o.toLowerCase()]))
          return { source: f, tech: o };
      };
    return (
      this.options_.sourceOrder ? (n = s(e, i, r(a))) : (n = s(i, e, a)),
      n || !1
    );
  }
  handleSrc_(e, i) {
    if (typeof e > "u") return this.cache_.src || "";
    this.resetRetryOnError_ && this.resetRetryOnError_();
    const s = pg(e);
    if (!s.length) {
      this.setTimeout(function () {
        this.error({ code: 4, message: this.options_.notSupportedMessage });
      }, 0);
      return;
    }
    if (
      ((this.changingSrc_ = !0),
      i || (this.cache_.sources = s),
      this.updateSourceCaches_(s[0]),
      kE(this, s[0], (n, r) => {
        if (
          ((this.middleware_ = r),
          i || (this.cache_.sources = s),
          this.updateSourceCaches_(n),
          this.src_(n))
        ) {
          if (s.length > 1) return this.handleSrc_(s.slice(1));
          (this.changingSrc_ = !1),
            this.setTimeout(function () {
              this.error({
                code: 4,
                message: this.options_.notSupportedMessage,
              });
            }, 0),
            this.triggerReady();
          return;
        }
        IE(r, this.tech_);
      }),
      s.length > 1)
    ) {
      const n = () => {
          this.error(null), this.handleSrc_(s.slice(1), !0);
        },
        r = () => {
          this.off("error", n);
        };
      this.one("error", n),
        this.one("playing", r),
        (this.resetRetryOnError_ = () => {
          this.off("error", n), this.off("playing", r);
        });
    }
  }
  src(e) {
    return this.handleSrc_(e, !1);
  }
  src_(e) {
    const i = this.selectSource([e]);
    return i
      ? rg(i.tech, this.techName_)
        ? (this.ready(function () {
            this.tech_.constructor.prototype.hasOwnProperty("setSource")
              ? this.techCall_("setSource", e)
              : this.techCall_("src", e.src),
              (this.changingSrc_ = !1);
          }, !0),
          !1)
        : ((this.changingSrc_ = !0),
          this.loadTech_(i.tech, i.source),
          this.tech_.ready(() => {
            this.changingSrc_ = !1;
          }),
          !1)
      : !0;
  }
  load() {
    this.techCall_("load");
  }
  reset() {
    if (this.paused()) this.doReset_();
    else {
      const e = this.play();
      ci(e.then(() => this.doReset_()));
    }
  }
  doReset_() {
    this.tech_ && this.tech_.clearTracks("text"),
      this.resetCache_(),
      this.poster(""),
      this.loadTech_(this.options_.techOrder[0], null),
      this.techCall_("reset"),
      this.resetControlBarUI_(),
      Oi(this) && this.trigger("playerreset");
  }
  resetControlBarUI_() {
    this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_();
  }
  resetProgressBar_() {
    this.currentTime(0);
    const { durationDisplay: e, remainingTimeDisplay: i } =
      this.controlBar || {};
    e && e.updateContent(), i && i.updateContent();
  }
  resetPlaybackRate_() {
    this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_();
  }
  resetVolumeBar_() {
    this.volume(1), this.trigger("volumechange");
  }
  currentSources() {
    const e = this.currentSource(),
      i = [];
    return Object.keys(e).length !== 0 && i.push(e), this.cache_.sources || i;
  }
  currentSource() {
    return this.cache_.source || {};
  }
  currentSrc() {
    return (this.currentSource() && this.currentSource().src) || "";
  }
  currentType() {
    return (this.currentSource() && this.currentSource().type) || "";
  }
  preload(e) {
    if (e !== void 0) {
      this.techCall_("setPreload", e), (this.options_.preload = e);
      return;
    }
    return this.techGet_("preload");
  }
  autoplay(e) {
    if (e === void 0) return this.options_.autoplay || !1;
    let i;
    (typeof e == "string" && /(any|play|muted)/.test(e)) ||
    (e === !0 && this.options_.normalizeAutoplay)
      ? ((this.options_.autoplay = e),
        this.manualAutoplay_(typeof e == "string" ? e : "play"),
        (i = !1))
      : e
      ? (this.options_.autoplay = !0)
      : (this.options_.autoplay = !1),
      (i = typeof i > "u" ? this.options_.autoplay : i),
      this.tech_ && this.techCall_("setAutoplay", i);
  }
  playsinline(e) {
    return e !== void 0
      ? (this.techCall_("setPlaysinline", e),
        (this.options_.playsinline = e),
        this)
      : this.techGet_("playsinline");
  }
  loop(e) {
    if (e !== void 0) {
      this.techCall_("setLoop", e), (this.options_.loop = e);
      return;
    }
    return this.techGet_("loop");
  }
  poster(e) {
    if (e === void 0) return this.poster_;
    e || (e = ""),
      e !== this.poster_ &&
        ((this.poster_ = e),
        this.techCall_("setPoster", e),
        (this.isPosterFromTech_ = !1),
        this.trigger("posterchange"));
  }
  handleTechPosterChange_() {
    if (
      (!this.poster_ || this.options_.techCanOverridePoster) &&
      this.tech_ &&
      this.tech_.poster
    ) {
      const e = this.tech_.poster() || "";
      e !== this.poster_ &&
        ((this.poster_ = e),
        (this.isPosterFromTech_ = !0),
        this.trigger("posterchange"));
    }
  }
  controls(e) {
    if (e === void 0) return !!this.controls_;
    (e = !!e),
      this.controls_ !== e &&
        ((this.controls_ = e),
        this.usingNativeControls() && this.techCall_("setControls", e),
        this.controls_
          ? (this.removeClass("vjs-controls-disabled"),
            this.addClass("vjs-controls-enabled"),
            this.trigger("controlsenabled"),
            this.usingNativeControls() || this.addTechControlsListeners_())
          : (this.removeClass("vjs-controls-enabled"),
            this.addClass("vjs-controls-disabled"),
            this.trigger("controlsdisabled"),
            this.usingNativeControls() || this.removeTechControlsListeners_()));
  }
  usingNativeControls(e) {
    if (e === void 0) return !!this.usingNativeControls_;
    (e = !!e),
      this.usingNativeControls_ !== e &&
        ((this.usingNativeControls_ = e),
        this.usingNativeControls_
          ? (this.addClass("vjs-using-native-controls"),
            this.trigger("usingnativecontrols"))
          : (this.removeClass("vjs-using-native-controls"),
            this.trigger("usingcustomcontrols")));
  }
  error(e) {
    if (e === void 0) return this.error_ || null;
    if (
      (Gi("beforeerror").forEach((i) => {
        const s = i(this, e);
        if (
          !(
            (_i(s) && !Array.isArray(s)) ||
            typeof s == "string" ||
            typeof s == "number" ||
            s === null
          )
        ) {
          this.log.error(
            "please return a value that MediaError expects in beforeerror hooks"
          );
          return;
        }
        e = s;
      }),
      this.options_.suppressNotSupportedError && e && e.code === 4)
    ) {
      const i = function () {
        this.error(e);
      };
      (this.options_.suppressNotSupportedError = !1),
        this.any(["click", "touchstart"], i),
        this.one("loadstart", function () {
          this.off(["click", "touchstart"], i);
        });
      return;
    }
    if (e === null) {
      (this.error_ = e),
        this.removeClass("vjs-error"),
        this.errorDisplay && this.errorDisplay.close();
      return;
    }
    (this.error_ = new gt(e)),
      this.addClass("vjs-error"),
      be.error(
        `(CODE:${this.error_.code} ${gt.errorTypes[this.error_.code]})`,
        this.error_.message,
        this.error_
      ),
      this.trigger("error"),
      Gi("error").forEach((i) => i(this, this.error_));
  }
  reportUserActivity(e) {
    this.userActivity_ = !0;
  }
  userActive(e) {
    if (e === void 0) return this.userActive_;
    if (((e = !!e), e !== this.userActive_)) {
      if (((this.userActive_ = e), this.userActive_)) {
        (this.userActivity_ = !0),
          this.removeClass("vjs-user-inactive"),
          this.addClass("vjs-user-active"),
          this.trigger("useractive");
        return;
      }
      this.tech_ &&
        this.tech_.one("mousemove", function (i) {
          i.stopPropagation(), i.preventDefault();
        }),
        (this.userActivity_ = !1),
        this.removeClass("vjs-user-active"),
        this.addClass("vjs-user-inactive"),
        this.trigger("userinactive");
    }
  }
  listenForUserActivity_() {
    let e, i, s;
    const n = Le(this, this.reportUserActivity),
      r = function (p) {
        (p.screenX !== i || p.screenY !== s) &&
          ((i = p.screenX), (s = p.screenY), n());
      },
      a = function () {
        n(), this.clearInterval(e), (e = this.setInterval(n, 250));
      },
      o = function (p) {
        n(), this.clearInterval(e);
      };
    this.on("mousedown", a),
      this.on("mousemove", r),
      this.on("mouseup", o),
      this.on("mouseleave", o);
    const u = this.getChild("controlBar");
    u &&
      !yt &&
      !yi &&
      (u.on("mouseenter", function (p) {
        this.player().options_.inactivityTimeout !== 0 &&
          (this.player().cache_.inactivityTimeout =
            this.player().options_.inactivityTimeout),
          (this.player().options_.inactivityTimeout = 0);
      }),
      u.on("mouseleave", function (p) {
        this.player().options_.inactivityTimeout =
          this.player().cache_.inactivityTimeout;
      })),
      this.on("keydown", n),
      this.on("keyup", n);
    let f;
    this.setInterval(function () {
      if (!this.userActivity_) return;
      (this.userActivity_ = !1), this.userActive(!0), this.clearTimeout(f);
      const p = this.options_.inactivityTimeout;
      p <= 0 ||
        (f = this.setTimeout(function () {
          this.userActivity_ || this.userActive(!1);
        }, p));
    }, 250);
  }
  playbackRate(e) {
    if (e !== void 0) {
      this.techCall_("setPlaybackRate", e);
      return;
    }
    return this.tech_ && this.tech_.featuresPlaybackRate
      ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate")
      : 1;
  }
  defaultPlaybackRate(e) {
    return e !== void 0
      ? this.techCall_("setDefaultPlaybackRate", e)
      : this.tech_ && this.tech_.featuresPlaybackRate
      ? this.techGet_("defaultPlaybackRate")
      : 1;
  }
  isAudio(e) {
    if (e !== void 0) {
      this.isAudio_ = !!e;
      return;
    }
    return !!this.isAudio_;
  }
  enableAudioOnlyUI_() {
    this.addClass("vjs-audio-only-mode");
    const e = this.children(),
      i = this.getChild("ControlBar"),
      s = i && i.currentHeight();
    e.forEach((n) => {
      n !== i &&
        n.el_ &&
        !n.hasClass("vjs-hidden") &&
        (n.hide(), this.audioOnlyCache_.hiddenChildren.push(n));
    }),
      (this.audioOnlyCache_.playerHeight = this.currentHeight()),
      this.height(s),
      this.trigger("audioonlymodechange");
  }
  disableAudioOnlyUI_() {
    this.removeClass("vjs-audio-only-mode"),
      this.audioOnlyCache_.hiddenChildren.forEach((e) => e.show()),
      this.height(this.audioOnlyCache_.playerHeight),
      this.trigger("audioonlymodechange");
  }
  audioOnlyMode(e) {
    if (typeof e != "boolean" || e === this.audioOnlyMode_)
      return this.audioOnlyMode_;
    if (((this.audioOnlyMode_ = e), e)) {
      const i = [];
      return (
        this.isInPictureInPicture() && i.push(this.exitPictureInPicture()),
        this.isFullscreen() && i.push(this.exitFullscreen()),
        this.audioPosterMode() && i.push(this.audioPosterMode(!1)),
        Promise.all(i).then(() => this.enableAudioOnlyUI_())
      );
    }
    return Promise.resolve().then(() => this.disableAudioOnlyUI_());
  }
  enablePosterModeUI_() {
    (this.tech_ && this.tech_).hide(),
      this.addClass("vjs-audio-poster-mode"),
      this.trigger("audiopostermodechange");
  }
  disablePosterModeUI_() {
    (this.tech_ && this.tech_).show(),
      this.removeClass("vjs-audio-poster-mode"),
      this.trigger("audiopostermodechange");
  }
  audioPosterMode(e) {
    return typeof e != "boolean" || e === this.audioPosterMode_
      ? this.audioPosterMode_
      : ((this.audioPosterMode_ = e),
        e
          ? this.audioOnlyMode()
            ? this.audioOnlyMode(!1).then(() => {
                this.enablePosterModeUI_();
              })
            : Promise.resolve().then(() => {
                this.enablePosterModeUI_();
              })
          : Promise.resolve().then(() => {
              this.disablePosterModeUI_();
            }));
  }
  addTextTrack(e, i, s) {
    if (this.tech_) return this.tech_.addTextTrack(e, i, s);
  }
  addRemoteTextTrack(e, i) {
    if (this.tech_) return this.tech_.addRemoteTextTrack(e, i);
  }
  removeRemoteTextTrack(e = {}) {
    let { track: i } = e;
    if ((i || (i = e), this.tech_)) return this.tech_.removeRemoteTextTrack(i);
  }
  getVideoPlaybackQuality() {
    return this.techGet_("getVideoPlaybackQuality");
  }
  videoWidth() {
    return (
      (this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth()) || 0
    );
  }
  videoHeight() {
    return (
      (this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight()) || 0
    );
  }
  language(e) {
    if (e === void 0) return this.language_;
    this.language_ !== String(e).toLowerCase() &&
      ((this.language_ = String(e).toLowerCase()),
      Oi(this) && this.trigger("languagechange"));
  }
  languages() {
    return De(Re.prototype.options_.languages, this.languages_);
  }
  toJSON() {
    const e = De(this.options_),
      i = e.tracks;
    e.tracks = [];
    for (let s = 0; s < i.length; s++) {
      let n = i[s];
      (n = De(n)), (n.player = void 0), (e.tracks[s] = n);
    }
    return e;
  }
  createModal(e, i) {
    (i = i || {}), (i.content = e || "");
    const s = new xn(this, i);
    return (
      this.addChild(s),
      s.on("dispose", () => {
        this.removeChild(s);
      }),
      s.open(),
      s
    );
  }
  updateCurrentBreakpoint_() {
    if (!this.responsive()) return;
    const e = this.currentBreakpoint(),
      i = this.currentWidth();
    for (let s = 0; s < hu.length; s++) {
      const n = hu[s],
        r = this.breakpoints_[n];
      if (i <= r) {
        if (e === n) return;
        e && this.removeClass(Oa[e]),
          this.addClass(Oa[n]),
          (this.breakpoint_ = n);
        break;
      }
    }
  }
  removeCurrentBreakpoint_() {
    const e = this.currentBreakpointClass();
    (this.breakpoint_ = ""), e && this.removeClass(e);
  }
  breakpoints(e) {
    return e === void 0
      ? Object.assign(this.breakpoints_)
      : ((this.breakpoint_ = ""),
        (this.breakpoints_ = Object.assign({}, fC, e)),
        this.updateCurrentBreakpoint_(),
        Object.assign(this.breakpoints_));
  }
  responsive(e) {
    if (e === void 0) return this.responsive_;
    e = Boolean(e);
    const i = this.responsive_;
    if (e !== i)
      return (
        (this.responsive_ = e),
        e
          ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_),
            this.updateCurrentBreakpoint_())
          : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_),
            this.removeCurrentBreakpoint_()),
        e
      );
  }
  currentBreakpoint() {
    return this.breakpoint_;
  }
  currentBreakpointClass() {
    return Oa[this.breakpoint_] || "";
  }
  loadMedia(e, i) {
    if (!e || typeof e != "object") return;
    this.reset(), (this.cache_.media = De(e));
    const {
      artist: s,
      artwork: n,
      description: r,
      poster: a,
      src: o,
      textTracks: u,
      title: f,
    } = this.cache_.media;
    !n && a && (this.cache_.media.artwork = [{ src: a, type: Ja(a) }]),
      o && this.src(o),
      a && this.poster(a),
      Array.isArray(u) && u.forEach((p) => this.addRemoteTextTrack(p, !1)),
      this.titleBar &&
        this.titleBar.update({ title: f, description: r || s || "" }),
      this.ready(i);
  }
  getMedia() {
    if (!this.cache_.media) {
      const e = this.poster(),
        i = this.currentSources(),
        s = Array.prototype.map.call(this.remoteTextTracks(), (r) => ({
          kind: r.kind,
          label: r.label,
          language: r.language,
          src: r.src,
        })),
        n = { src: i, textTracks: s };
      return (
        e &&
          ((n.poster = e),
          (n.artwork = [{ src: n.poster, type: Ja(n.poster) }])),
        n
      );
    }
    return De(this.cache_.media);
  }
  static getTagSettings(e) {
    const i = { sources: [], tracks: [] },
      s = Vi(e),
      n = s["data-setup"];
    if (
      (ir(e, "vjs-fill") && (s.fill = !0),
      ir(e, "vjs-fluid") && (s.fluid = !0),
      n !== null)
    ) {
      const [r, a] = eb(n || "{}");
      r && be.error(r), Object.assign(s, a);
    }
    if ((Object.assign(i, s), e.hasChildNodes())) {
      const r = e.childNodes;
      for (let a = 0, o = r.length; a < o; a++) {
        const u = r[a],
          f = u.nodeName.toLowerCase();
        f === "source"
          ? i.sources.push(Vi(u))
          : f === "track" && i.tracks.push(Vi(u));
      }
    }
    return i;
  }
  debug(e) {
    if (e === void 0) return this.debugEnabled_;
    e
      ? (this.trigger("debugon"),
        (this.previousLogLevel_ = this.log.level),
        this.log.level("debug"),
        (this.debugEnabled_ = !0))
      : (this.trigger("debugoff"),
        this.log.level(this.previousLogLevel_),
        (this.previousLogLevel_ = void 0),
        (this.debugEnabled_ = !1));
  }
  playbackRates(e) {
    if (e === void 0) return this.cache_.playbackRates;
    Array.isArray(e) &&
      e.every((i) => typeof i == "number") &&
      ((this.cache_.playbackRates = e), this.trigger("playbackrateschange"));
  }
}
ft.names.forEach(function (t) {
  const e = ft[t];
  Re.prototype[e.getterName] = function () {
    return this.tech_
      ? this.tech_[e.getterName]()
      : ((this[e.privateName] = this[e.privateName] || new e.ListClass()),
        this[e.privateName]);
  };
});
Re.prototype.crossorigin = Re.prototype.crossOrigin;
Re.players = {};
const Vn = C.navigator;
Re.prototype.options_ = {
  techOrder: pe.defaultTechOrder_,
  html5: {},
  enableSourceset: !0,
  inactivityTimeout: 2e3,
  playbackRates: [],
  liveui: !1,
  children: [
    "mediaLoader",
    "posterImage",
    "titleBar",
    "textTrackDisplay",
    "loadingSpinner",
    "bigPlayButton",
    "liveTracker",
    "controlBar",
    "errorDisplay",
    "textTrackSettings",
    "resizeManager",
  ],
  language:
    (Vn &&
      ((Vn.languages && Vn.languages[0]) || Vn.userLanguage || Vn.language)) ||
    "en",
  languages: {},
  notSupportedMessage: "No compatible source was found for this media.",
  normalizeAutoplay: !1,
  fullscreen: { options: { navigationUI: "hide" } },
  breakpoints: {},
  responsive: !1,
  audioOnlyMode: !1,
  audioPosterMode: !1,
};
["ended", "seeking", "seekable", "networkState", "readyState"].forEach(
  function (t) {
    Re.prototype[t] = function () {
      return this.techGet_(t);
    };
  }
);
Ug.forEach(function (t) {
  Re.prototype[`handleTech${je(t)}_`] = function () {
    return this.trigger(t);
  };
});
B.registerComponent("Player", Re);
const eo = "plugin",
  Ys = "activePlugins_",
  Fs = {},
  to = (t) => Fs.hasOwnProperty(t),
  Pa = (t) => (to(t) ? Fs[t] : void 0),
  Fg = (t, e) => {
    (t[Ys] = t[Ys] || {}), (t[Ys][e] = !0);
  },
  io = (t, e, i) => {
    const s = (i ? "before" : "") + "pluginsetup";
    t.trigger(s, e), t.trigger(s + ":" + e.name, e);
  },
  pC = function (t, e) {
    const i = function () {
      io(this, { name: t, plugin: e, instance: null }, !0);
      const s = e.apply(this, arguments);
      return Fg(this, t), io(this, { name: t, plugin: e, instance: s }), s;
    };
    return (
      Object.keys(e).forEach(function (s) {
        i[s] = e[s];
      }),
      i
    );
  },
  gf = (t, e) => (
    (e.prototype.name = t),
    function (...i) {
      io(this, { name: t, plugin: e, instance: null }, !0);
      const s = new e(this, ...i);
      return (this[t] = () => s), io(this, s.getEventHash()), s;
    }
  );
class At {
  constructor(e) {
    if (this.constructor === At)
      throw new Error("Plugin must be sub-classed; not directly instantiated.");
    (this.player = e),
      this.log || (this.log = this.player.log.createLogger(this.name)),
      bc(this),
      delete this.trigger,
      ng(this, this.constructor.defaultState),
      Fg(e, this.name),
      (this.dispose = this.dispose.bind(this)),
      e.on("dispose", this.dispose);
  }
  version() {
    return this.constructor.VERSION;
  }
  getEventHash(e = {}) {
    return (
      (e.name = this.name),
      (e.plugin = this.constructor),
      (e.instance = this),
      e
    );
  }
  trigger(e, i = {}) {
    return bn(this.eventBusEl_, e, this.getEventHash(i));
  }
  handleStateChanged(e) {}
  dispose() {
    const { name: e, player: i } = this;
    this.trigger("dispose"),
      this.off(),
      i.off("dispose", this.dispose),
      (i[Ys][e] = !1),
      (this.player = this.state = null),
      (i[e] = gf(e, Fs[e]));
  }
  static isBasic(e) {
    const i = typeof e == "string" ? Pa(e) : e;
    return typeof i == "function" && !At.prototype.isPrototypeOf(i.prototype);
  }
  static registerPlugin(e, i) {
    if (typeof e != "string")
      throw new Error(
        `Illegal plugin name, "${e}", must be a string, was ${typeof e}.`
      );
    if (to(e))
      be.warn(
        `A plugin named "${e}" already exists. You may want to avoid re-registering plugins!`
      );
    else if (Re.prototype.hasOwnProperty(e))
      throw new Error(
        `Illegal plugin name, "${e}", cannot share a name with an existing player method!`
      );
    if (typeof i != "function")
      throw new Error(
        `Illegal plugin for "${e}", must be a function, was ${typeof i}.`
      );
    return (
      (Fs[e] = i),
      e !== eo &&
        (At.isBasic(i)
          ? (Re.prototype[e] = pC(e, i))
          : (Re.prototype[e] = gf(e, i))),
      i
    );
  }
  static deregisterPlugin(e) {
    if (e === eo) throw new Error("Cannot de-register base plugin.");
    to(e) && (delete Fs[e], delete Re.prototype[e]);
  }
  static getPlugins(e = Object.keys(Fs)) {
    let i;
    return (
      e.forEach((s) => {
        const n = Pa(s);
        n && ((i = i || {}), (i[s] = n));
      }),
      i
    );
  }
  static getPluginVersion(e) {
    const i = Pa(e);
    return (i && i.VERSION) || "";
  }
}
At.getPlugin = Pa;
At.BASE_PLUGIN_NAME = eo;
At.registerPlugin(eo, At);
Re.prototype.usingPlugin = function (t) {
  return !!this[Ys] && this[Ys][t] === !0;
};
Re.prototype.hasPlugin = function (t) {
  return !!to(t);
};
function mC(t, e) {
  let i = !1;
  return function (...s) {
    return i || be.warn(t), (i = !0), e.apply(this, s);
  };
}
function ei(t, e, i, s) {
  return mC(
    `${e} is deprecated and will be removed in ${t}.0; please use ${i} instead.`,
    s
  );
}
const Bg = (t) => (t.indexOf("#") === 0 ? t.slice(1) : t);
function M(t, e, i) {
  let s = M.getPlayer(t);
  if (s)
    return (
      e &&
        be.warn(
          `Player "${t}" is already initialised. Options will not be applied.`
        ),
      i && s.ready(i),
      s
    );
  const n = typeof t == "string" ? Ki("#" + Bg(t)) : t;
  if (!Tn(n))
    throw new TypeError("The element or ID supplied is not valid. (videojs)");
  (!n.ownerDocument.defaultView || !n.ownerDocument.body.contains(n)) &&
    be.warn("The element supplied is not included in the DOM"),
    (e = e || {}),
    e.restoreEl === !0 &&
      (e.restoreEl = (
        n.parentNode && n.parentNode.hasAttribute("data-vjs-player")
          ? n.parentNode
          : n
      ).cloneNode(!0)),
    Gi("beforesetup").forEach((a) => {
      const o = a(n, De(e));
      if (!_i(o) || Array.isArray(o)) {
        be.error("please return an object in beforesetup hooks");
        return;
      }
      e = De(e, o);
    });
  const r = B.getComponent("Player");
  return (s = new r(n, e, i)), Gi("setup").forEach((a) => a(s)), s;
}
M.hooks_ = Ai;
M.hooks = Gi;
M.hook = QS;
M.hookOnce = JS;
M.removeHook = Pm;
if (C.VIDEOJS_NO_DYNAMIC_STYLE !== !0 && vn()) {
  let t = Ki(".vjs-styles-defaults");
  if (!t) {
    t = Zm("vjs-styles-defaults");
    const e = Ki("head");
    e && e.insertBefore(t, e.firstChild),
      eg(
        t,
        `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `
      );
  }
}
ru(1, M);
M.VERSION = Om;
M.options = Re.prototype.options_;
M.getPlayers = () => Re.players;
M.getPlayer = (t) => {
  const e = Re.players;
  let i;
  if (typeof t == "string") {
    const s = Bg(t),
      n = e[s];
    if (n) return n;
    i = Ki("#" + s);
  } else i = t;
  if (Tn(i)) {
    const { player: s, playerId: n } = i;
    if (s || e[n]) return s || e[n];
  }
};
M.getAllPlayers = () =>
  Object.keys(Re.players)
    .map((t) => Re.players[t])
    .filter(Boolean);
M.players = Re.players;
M.getComponent = B.getComponent;
M.registerComponent = (t, e) => {
  pe.isTech(e) &&
    be.warn(
      `The ${t} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`
    ),
    B.registerComponent.call(B, t, e);
};
M.getTech = pe.getTech;
M.registerTech = pe.registerTech;
M.use = AE;
Object.defineProperty(M, "middleware", {
  value: {},
  writeable: !1,
  enumerable: !0,
});
Object.defineProperty(M.middleware, "TERMINATOR", {
  value: Qa,
  writeable: !1,
  enumerable: !0,
});
M.browser = iE;
M.obj = tE;
M.mergeOptions = ei(9, "videojs.mergeOptions", "videojs.obj.merge", De);
M.defineLazyProperty = ei(
  9,
  "videojs.defineLazyProperty",
  "videojs.obj.defineLazyProperty",
  Io
);
M.bind = ei(9, "videojs.bind", "native Function.prototype.bind", Le);
M.registerPlugin = At.registerPlugin;
M.deregisterPlugin = At.deregisterPlugin;
M.plugin = (t, e) => (
  be.warn(
    "videojs.plugin() is deprecated; use videojs.registerPlugin() instead"
  ),
  At.registerPlugin(t, e)
);
M.getPlugins = At.getPlugins;
M.getPlugin = At.getPlugin;
M.getPluginVersion = At.getPluginVersion;
M.addLanguage = function (t, e) {
  return (
    (t = ("" + t).toLowerCase()),
    (M.options.languages = De(M.options.languages, { [t]: e })),
    M.options.languages[t]
  );
};
M.log = be;
M.createLogger = Lm;
M.time = gE;
M.createTimeRange = ei(
  9,
  "videojs.createTimeRange",
  "videojs.time.createTimeRanges",
  gi
);
M.createTimeRanges = ei(
  9,
  "videojs.createTimeRanges",
  "videojs.time.createTimeRanges",
  gi
);
M.formatTime = ei(9, "videojs.formatTime", "videojs.time.formatTime", bs);
M.setFormatTime = ei(
  9,
  "videojs.setFormatTime",
  "videojs.time.setFormatTime",
  og
);
M.resetFormatTime = ei(
  9,
  "videojs.resetFormatTime",
  "videojs.time.resetFormatTime",
  lg
);
M.parseUrl = ei(9, "videojs.parseUrl", "videojs.url.parseUrl", Ec);
M.isCrossOrigin = ei(
  9,
  "videojs.isCrossOrigin",
  "videojs.url.isCrossOrigin",
  jo
);
M.EventTarget = Ht;
M.any = Tc;
M.on = Rt;
M.one = Bo;
M.off = rt;
M.trigger = bn;
M.xhr = pr;
M.TextTrack = kr;
M.AudioTrack = hg;
M.VideoTrack = fg;
[
  "isEl",
  "isTextNode",
  "createEl",
  "hasClass",
  "addClass",
  "removeClass",
  "toggleClass",
  "setAttributes",
  "getAttributes",
  "emptyEl",
  "appendContent",
  "insertContent",
].forEach((t) => {
  M[t] = function () {
    return (
      be.warn(`videojs.${t}() is deprecated; use videojs.dom.${t}() instead`),
      Qm[t].apply(null, arguments)
    );
  };
});
M.computedStyle = ei(
  9,
  "videojs.computedStyle",
  "videojs.dom.computedStyle",
  hn
);
M.dom = Qm;
M.fn = cE;
M.num = zE;
M.str = pE;
M.url = CE;
/*!@name videojs-contrib-quality-levels @version 3.0.0 @license Apache-2.0*/ class gC {
  constructor(e) {
    let i = this;
    return (
      (i.id = e.id),
      (i.label = i.id),
      (i.width = e.width),
      (i.height = e.height),
      (i.bitrate = e.bandwidth),
      (i.frameRate = e.frameRate),
      (i.enabled_ = e.enabled),
      Object.defineProperty(i, "enabled", {
        get() {
          return i.enabled_();
        },
        set(s) {
          i.enabled_(s);
        },
      }),
      i
    );
  }
}
class so extends M.EventTarget {
  constructor() {
    super();
    let e = this;
    return (
      (e.levels_ = []),
      (e.selectedIndex_ = -1),
      Object.defineProperty(e, "selectedIndex", {
        get() {
          return e.selectedIndex_;
        },
      }),
      Object.defineProperty(e, "length", {
        get() {
          return e.levels_.length;
        },
      }),
      e
    );
  }
  addQualityLevel(e) {
    let i = this.getQualityLevelById(e.id);
    if (i) return i;
    const s = this.levels_.length;
    return (
      (i = new gC(e)),
      "" + s in this ||
        Object.defineProperty(this, s, {
          get() {
            return this.levels_[s];
          },
        }),
      this.levels_.push(i),
      this.trigger({ qualityLevel: i, type: "addqualitylevel" }),
      i
    );
  }
  removeQualityLevel(e) {
    let i = null;
    for (let s = 0, n = this.length; s < n; s++)
      if (this[s] === e) {
        (i = this.levels_.splice(s, 1)[0]),
          this.selectedIndex_ === s
            ? (this.selectedIndex_ = -1)
            : this.selectedIndex_ > s && this.selectedIndex_--;
        break;
      }
    return (
      i && this.trigger({ qualityLevel: e, type: "removequalitylevel" }), i
    );
  }
  getQualityLevelById(e) {
    for (let i = 0, s = this.length; i < s; i++) {
      const n = this[i];
      if (n.id === e) return n;
    }
    return null;
  }
  dispose() {
    (this.selectedIndex_ = -1), (this.levels_.length = 0);
  }
}
so.prototype.allowedEvents_ = {
  change: "change",
  addqualitylevel: "addqualitylevel",
  removequalitylevel: "removequalitylevel",
};
for (const t in so.prototype.allowedEvents_) so.prototype["on" + t] = null;
var $g = "3.0.0";
const _C = M.registerPlugin || M.plugin,
  yC = function (t, e) {
    const i = t.qualityLevels,
      s = new so(),
      n = function () {
        s.dispose(), (t.qualityLevels = i), t.off("dispose", n);
      };
    return (
      t.on("dispose", n),
      (t.qualityLevels = () => s),
      (t.qualityLevels.VERSION = $g),
      s
    );
  },
  jg = function (t) {
    return yC(this, M.mergeOptions({}, t));
  };
_C("qualityLevels", jg);
jg.VERSION = $g;
/*!@name @videojs/http-streaming @version 3.0.0 @license Apache-2.0*/ const Gt =
    qb,
  no = (t, e) =>
    e && e.responseURL && t !== e.responseURL ? e.responseURL : t,
  ti = (t) =>
    M.log.debug ? M.log.debug.bind(M, "VHS:", `${t} >`) : function () {};
function Pe(...t) {
  const e = M.obj || M;
  return (e.merge || e.mergeOptions).apply(e, t);
}
function nt(...t) {
  const e = M.time || M;
  return (e.createTimeRanges || e.createTimeRanges).apply(e, t);
}
const Xi = 1 / 30,
  di = Xi * 3,
  Hg = function (t, e) {
    const i = [];
    let s;
    if (t && t.length)
      for (s = 0; s < t.length; s++)
        e(t.start(s), t.end(s)) && i.push([t.start(s), t.end(s)]);
    return nt(i);
  },
  Bs = function (t, e) {
    return Hg(t, function (i, s) {
      return i - di <= e && s + di >= e;
    });
  },
  va = function (t, e) {
    return Hg(t, function (i) {
      return i - Xi >= e;
    });
  },
  vC = function (t) {
    if (t.length < 2) return nt();
    const e = [];
    for (let i = 1; i < t.length; i++) {
      const s = t.end(i - 1),
        n = t.start(i);
      e.push([s, n]);
    }
    return nt(e);
  },
  TC = function (t, e) {
    let i = null,
      s = null,
      n = 0;
    const r = [],
      a = [];
    if (!t || !t.length || !e || !e.length) return nt();
    let o = t.length;
    for (; o--; )
      r.push({ time: t.start(o), type: "start" }),
        r.push({ time: t.end(o), type: "end" });
    for (o = e.length; o--; )
      r.push({ time: e.start(o), type: "start" }),
        r.push({ time: e.end(o), type: "end" });
    for (
      r.sort(function (u, f) {
        return u.time - f.time;
      }),
        o = 0;
      o < r.length;
      o++
    )
      r[o].type === "start"
        ? (n++, n === 2 && (i = r[o].time))
        : r[o].type === "end" && (n--, n === 1 && (s = r[o].time)),
        i !== null && s !== null && (a.push([i, s]), (i = null), (s = null));
    return nt(a);
  },
  Vg = (t) => {
    const e = [];
    if (!t || !t.length) return "";
    for (let i = 0; i < t.length; i++) e.push(t.start(i) + " => " + t.end(i));
    return e.join(", ");
  },
  bC = function (t, e, i = 1) {
    return ((t.length ? t.end(t.length - 1) : 0) - e) / i;
  },
  ps = (t) => {
    const e = [];
    for (let i = 0; i < t.length; i++)
      e.push({ start: t.start(i), end: t.end(i) });
    return e;
  },
  xC = function (t, e) {
    if (t === e) return !1;
    if ((!t && e) || (!e && t) || t.length !== e.length) return !0;
    for (let i = 0; i < t.length; i++)
      if (t.start(i) !== e.start(i) || t.end(i) !== e.end(i)) return !0;
    return !1;
  },
  _f = function (t) {
    if (!(!t || !t.length || !t.end)) return t.end(t.length - 1);
  },
  Hc = function (t, e) {
    let i = 0;
    if (!t || !t.length) return i;
    for (let s = 0; s < t.length; s++) {
      const n = t.start(s),
        r = t.end(s);
      if (!(e > r)) {
        if (e > n && e <= r) {
          i += r - e;
          continue;
        }
        i += r - n;
      }
    }
    return i;
  },
  Vc = (t, e) => {
    if (!e.preload) return e.duration;
    let i = 0;
    return (
      (e.parts || []).forEach(function (s) {
        i += s.duration;
      }),
      (e.preloadHints || []).forEach(function (s) {
        s.type === "PART" && (i += t.partTargetDuration);
      }),
      i
    );
  },
  fu = (t) =>
    (t.segments || []).reduce(
      (e, i, s) => (
        i.parts
          ? i.parts.forEach(function (n, r) {
              e.push({
                duration: n.duration,
                segmentIndex: s,
                partIndex: r,
                part: n,
                segment: i,
              });
            })
          : e.push({
              duration: i.duration,
              segmentIndex: s,
              partIndex: null,
              segment: i,
              part: null,
            }),
        e
      ),
      []
    ),
  Wg = (t) => {
    const e =
      t.segments && t.segments.length && t.segments[t.segments.length - 1];
    return (e && e.parts) || [];
  },
  qg = ({ preloadSegment: t }) => {
    if (!t) return;
    const { parts: e, preloadHints: i } = t;
    let s = (i || []).reduce((n, r) => n + (r.type === "PART" ? 1 : 0), 0);
    return (s += e && e.length ? e.length : 0), s;
  },
  zg = (t, e) => {
    if (e.endList) return 0;
    if (t && t.suggestedPresentationDelay) return t.suggestedPresentationDelay;
    const i = Wg(e).length > 0;
    return i && e.serverControl && e.serverControl.partHoldBack
      ? e.serverControl.partHoldBack
      : i && e.partTargetDuration
      ? e.partTargetDuration * 3
      : e.serverControl && e.serverControl.holdBack
      ? e.serverControl.holdBack
      : e.targetDuration
      ? e.targetDuration * 3
      : 0;
  },
  SC = function (t, e) {
    let i = 0,
      s = e - t.mediaSequence,
      n = t.segments[s];
    if (n) {
      if (typeof n.start < "u") return { result: n.start, precise: !0 };
      if (typeof n.end < "u")
        return { result: n.end - n.duration, precise: !0 };
    }
    for (; s--; ) {
      if (((n = t.segments[s]), typeof n.end < "u"))
        return { result: i + n.end, precise: !0 };
      if (((i += Vc(t, n)), typeof n.start < "u"))
        return { result: i + n.start, precise: !0 };
    }
    return { result: i, precise: !1 };
  },
  EC = function (t, e) {
    let i = 0,
      s,
      n = e - t.mediaSequence;
    for (; n < t.segments.length; n++) {
      if (((s = t.segments[n]), typeof s.start < "u"))
        return { result: s.start - i, precise: !0 };
      if (((i += Vc(t, s)), typeof s.end < "u"))
        return { result: s.end - i, precise: !0 };
    }
    return { result: -1, precise: !1 };
  },
  Gg = function (t, e, i) {
    if (
      (typeof e > "u" && (e = t.mediaSequence + t.segments.length),
      e < t.mediaSequence)
    )
      return 0;
    const s = SC(t, e);
    if (s.precise) return s.result;
    const n = EC(t, e);
    return n.precise ? n.result : s.result + i;
  },
  Kg = function (t, e, i) {
    if (!t) return 0;
    if ((typeof i != "number" && (i = 0), typeof e > "u")) {
      if (t.totalDuration) return t.totalDuration;
      if (!t.endList) return C.Infinity;
    }
    return Gg(t, e, i);
  },
  rr = function ({
    defaultDuration: t,
    durationList: e,
    startIndex: i,
    endIndex: s,
  }) {
    let n = 0;
    if ((i > s && ([i, s] = [s, i]), i < 0)) {
      for (let r = i; r < Math.min(0, s); r++) n += t;
      i = 0;
    }
    for (let r = i; r < s; r++) n += e[r].duration;
    return n;
  },
  Xg = function (t, e, i, s) {
    if (!t || !t.segments) return null;
    if (t.endList) return Kg(t);
    if (e === null) return null;
    e = e || 0;
    let n = Gg(t, t.mediaSequence + t.segments.length, e);
    return (
      i && ((s = typeof s == "number" ? s : zg(null, t)), (n -= s)),
      Math.max(0, n)
    );
  },
  CC = function (t, e, i) {
    const n = e || 0,
      r = Xg(t, e, !0, i);
    return r === null ? nt() : nt(n, r);
  },
  wC = function ({
    playlist: t,
    currentTime: e,
    startingSegmentIndex: i,
    startingPartIndex: s,
    startTime: n,
    exactManifestTimings: r,
  }) {
    let a = e - n;
    const o = fu(t);
    let u = 0;
    for (let f = 0; f < o.length; f++) {
      const p = o[f];
      if (
        i === p.segmentIndex &&
        !(
          typeof s == "number" &&
          typeof p.partIndex == "number" &&
          s !== p.partIndex
        )
      ) {
        u = f;
        break;
      }
    }
    if (a < 0) {
      if (u > 0)
        for (let f = u - 1; f >= 0; f--) {
          const p = o[f];
          if (((a += p.duration), r)) {
            if (a < 0) continue;
          } else if (a + Xi <= 0) continue;
          return {
            partIndex: p.partIndex,
            segmentIndex: p.segmentIndex,
            startTime:
              n -
              rr({
                defaultDuration: t.targetDuration,
                durationList: o,
                startIndex: u,
                endIndex: f,
              }),
          };
        }
      return {
        partIndex: (o[0] && o[0].partIndex) || null,
        segmentIndex: (o[0] && o[0].segmentIndex) || 0,
        startTime: e,
      };
    }
    if (u < 0) {
      for (let f = u; f < 0; f++)
        if (((a -= t.targetDuration), a < 0))
          return {
            partIndex: (o[0] && o[0].partIndex) || null,
            segmentIndex: (o[0] && o[0].segmentIndex) || 0,
            startTime: e,
          };
      u = 0;
    }
    for (let f = u; f < o.length; f++) {
      const p = o[f];
      if (((a -= p.duration), r)) {
        if (a > 0) continue;
      } else if (a - Xi >= 0) continue;
      return {
        partIndex: p.partIndex,
        segmentIndex: p.segmentIndex,
        startTime:
          n +
          rr({
            defaultDuration: t.targetDuration,
            durationList: o,
            startIndex: u,
            endIndex: f,
          }),
      };
    }
    return {
      segmentIndex: o[o.length - 1].segmentIndex,
      partIndex: o[o.length - 1].partIndex,
      startTime: e,
    };
  },
  Yg = function (t) {
    return t.excludeUntil && t.excludeUntil > Date.now();
  },
  Wc = function (t) {
    return t.excludeUntil && t.excludeUntil === 1 / 0;
  },
  Wo = function (t) {
    const e = Yg(t);
    return !t.disabled && !e;
  },
  AC = function (t) {
    return t.disabled;
  },
  kC = function (t) {
    for (let e = 0; e < t.segments.length; e++)
      if (t.segments[e].key) return !0;
    return !1;
  },
  Qg = function (t, e) {
    return e.attributes && e.attributes[t];
  },
  IC = function (t, e, i, s = 0) {
    return Qg("BANDWIDTH", i) ? (t * i.attributes.BANDWIDTH - s * 8) / e : NaN;
  },
  pu = (t, e) => {
    if (t.playlists.length === 1) return !0;
    const i = e.attributes.BANDWIDTH || Number.MAX_VALUE;
    return (
      t.playlists.filter((s) =>
        Wo(s) ? (s.attributes.BANDWIDTH || 0) < i : !1
      ).length === 0
    );
  },
  qc = (t, e) =>
    (!t && !e) || (!t && e) || (t && !e)
      ? !1
      : !!(
          t === e ||
          (t.id && e.id && t.id === e.id) ||
          (t.resolvedUri && e.resolvedUri && t.resolvedUri === e.resolvedUri) ||
          (t.uri && e.uri && t.uri === e.uri)
        ),
  yf = function (t, e) {
    const i = (t && t.mediaGroups && t.mediaGroups.AUDIO) || {};
    let s = !1;
    for (const n in i) {
      for (const r in i[n]) if (((s = e(i[n][r])), s)) break;
      if (s) break;
    }
    return !!s;
  },
  Dr = (t) => {
    if (!t || !t.playlists || !t.playlists.length)
      return yf(t, (i) => (i.playlists && i.playlists.length) || i.uri);
    for (let e = 0; e < t.playlists.length; e++) {
      const i = t.playlists[e],
        s = i.attributes && i.attributes.CODECS;
      if (!((s && s.split(",").every((r) => $p(r))) || yf(t, (r) => qc(i, r))))
        return !1;
    }
    return !0;
  };
var Ct = {
  liveEdgeDelay: zg,
  duration: Kg,
  seekable: CC,
  getMediaInfoForTime: wC,
  isEnabled: Wo,
  isDisabled: AC,
  isExcluded: Yg,
  isIncompatible: Wc,
  playlistEnd: Xg,
  isAes: kC,
  hasAttribute: Qg,
  estimateSegmentRequestTime: IC,
  isLowestEnabledRendition: pu,
  isAudioOnly: Dr,
  playlistMatch: qc,
  segmentDurationWithParts: Vc,
};
const { log: Jg } = M,
  zc = (t, e) => `${t}-${e}`,
  OC = ({
    onwarn: t,
    oninfo: e,
    manifestString: i,
    customTagParsers: s = [],
    customTagMappers: n = [],
    llhls: r,
  }) => {
    const a = new Jb();
    t && a.on("warn", t),
      e && a.on("info", e),
      s.forEach((f) => a.addParser(f)),
      n.forEach((f) => a.addTagMapper(f)),
      a.push(i),
      a.end();
    const o = a.manifest;
    if (
      (r ||
        ([
          "preloadSegment",
          "skip",
          "serverControl",
          "renditionReports",
          "partInf",
          "partTargetDuration",
        ].forEach(function (f) {
          o.hasOwnProperty(f) && delete o[f];
        }),
        o.segments &&
          o.segments.forEach(function (f) {
            ["parts", "preloadHints"].forEach(function (p) {
              f.hasOwnProperty(p) && delete f[p];
            });
          })),
      !o.targetDuration)
    ) {
      let f = 10;
      o.segments &&
        o.segments.length &&
        (f = o.segments.reduce((p, _) => Math.max(p, _.duration), 0)),
        t && t(`manifest has no targetDuration defaulting to ${f}`),
        (o.targetDuration = f);
    }
    const u = Wg(o);
    if (u.length && !o.partTargetDuration) {
      const f = u.reduce((p, _) => Math.max(p, _.duration), 0);
      t &&
        (t(`manifest has no partTargetDuration defaulting to ${f}`),
        Jg.error(
          "LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed."
        )),
        (o.partTargetDuration = f);
    }
    return o;
  },
  Lr = (t, e) => {
    t.mediaGroups &&
      ["AUDIO", "SUBTITLES"].forEach((i) => {
        if (t.mediaGroups[i])
          for (const s in t.mediaGroups[i])
            for (const n in t.mediaGroups[i][s]) {
              const r = t.mediaGroups[i][s][n];
              e(r, i, s, n);
            }
      });
  },
  Zg = ({ playlist: t, uri: e, id: i }) => {
    (t.id = i),
      (t.playlistErrors_ = 0),
      e && (t.uri = e),
      (t.attributes = t.attributes || {});
  },
  PC = (t) => {
    let e = t.playlists.length;
    for (; e--; ) {
      const i = t.playlists[e];
      Zg({ playlist: i, id: zc(e, i.uri) }),
        (i.resolvedUri = Gt(t.uri, i.uri)),
        (t.playlists[i.id] = i),
        (t.playlists[i.uri] = i),
        i.attributes.BANDWIDTH ||
          Jg.warn(
            "Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."
          );
    }
  },
  DC = (t) => {
    Lr(t, (e) => {
      e.uri && (e.resolvedUri = Gt(t.uri, e.uri));
    });
  },
  LC = (t, e) => {
    const i = zc(0, e),
      s = {
        mediaGroups: {
          AUDIO: {},
          VIDEO: {},
          "CLOSED-CAPTIONS": {},
          SUBTITLES: {},
        },
        uri: C.location.href,
        resolvedUri: C.location.href,
        playlists: [{ uri: e, id: i, resolvedUri: e, attributes: {} }],
      };
    return (
      (s.playlists[i] = s.playlists[0]), (s.playlists[e] = s.playlists[0]), s
    );
  },
  e0 = (t, e) => {
    t.uri = e;
    for (let s = 0; s < t.playlists.length; s++)
      if (!t.playlists[s].uri) {
        const n = `placeholder-uri-${s}`;
        t.playlists[s].uri = n;
      }
    const i = Dr(t);
    Lr(t, (s, n, r, a) => {
      const o = `placeholder-uri-${n}-${r}-${a}`;
      if (!s.playlists || !s.playlists.length) {
        if (i && n === "AUDIO" && !s.uri)
          for (let u = 0; u < t.playlists.length; u++) {
            const f = t.playlists[u];
            if (f.attributes && f.attributes.AUDIO && f.attributes.AUDIO === r)
              return;
          }
        s.playlists = [Di({}, s)];
      }
      s.playlists.forEach(function (u, f) {
        const p = zc(f, o);
        u.uri
          ? (u.resolvedUri = u.resolvedUri || Gt(t.uri, u.uri))
          : ((u.uri = f === 0 ? o : p), (u.resolvedUri = u.uri)),
          (u.id = u.id || p),
          (u.attributes = u.attributes || {}),
          (t.playlists[u.id] = u),
          (t.playlists[u.uri] = u);
      });
    }),
      PC(t),
      DC(t);
  },
  { EventTarget: RC } = M,
  NC = (t, e) => {
    if (e.endList || !e.serverControl) return t;
    const i = {};
    if (e.serverControl.canBlockReload) {
      const { preloadSegment: s } = e;
      let n = e.mediaSequence + e.segments.length;
      if (s) {
        const r = s.parts || [],
          a = qg(e) - 1;
        a > -1 && a !== r.length - 1 && (i._HLS_part = a),
          (a > -1 || r.length) && n--;
      }
      i._HLS_msn = n;
    }
    if (
      (e.serverControl &&
        e.serverControl.canSkipUntil &&
        (i._HLS_skip = e.serverControl.canSkipDateranges ? "v2" : "YES"),
      Object.keys(i).length)
    ) {
      const s = new C.URL(t);
      ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function (n) {
        i.hasOwnProperty(n) && s.searchParams.set(n, i[n]);
      }),
        (t = s.toString());
    }
    return t;
  },
  MC = (t, e) => {
    if (!t) return e;
    const i = Pe(t, e);
    if (
      (t.preloadHints && !e.preloadHints && delete i.preloadHints,
      t.parts && !e.parts)
    )
      delete i.parts;
    else if (t.parts && e.parts)
      for (let s = 0; s < e.parts.length; s++)
        t.parts && t.parts[s] && (i.parts[s] = Pe(t.parts[s], e.parts[s]));
    return (
      !t.skipped && e.skipped && (i.skipped = !1),
      t.preload && !e.preload && (i.preload = !1),
      i
    );
  },
  UC = (t, e, i) => {
    const s = t.slice(),
      n = e.slice();
    i = i || 0;
    const r = [];
    let a;
    for (let o = 0; o < n.length; o++) {
      const u = s[o + i],
        f = n[o];
      u
        ? ((a = u.map || a), r.push(MC(u, f)))
        : (a && !f.map && (f.map = a), r.push(f));
    }
    return r;
  },
  t0 = (t, e) => {
    !t.resolvedUri && t.uri && (t.resolvedUri = Gt(e, t.uri)),
      t.key && !t.key.resolvedUri && (t.key.resolvedUri = Gt(e, t.key.uri)),
      t.map && !t.map.resolvedUri && (t.map.resolvedUri = Gt(e, t.map.uri)),
      t.map &&
        t.map.key &&
        !t.map.key.resolvedUri &&
        (t.map.key.resolvedUri = Gt(e, t.map.key.uri)),
      t.parts &&
        t.parts.length &&
        t.parts.forEach((i) => {
          i.resolvedUri || (i.resolvedUri = Gt(e, i.uri));
        }),
      t.preloadHints &&
        t.preloadHints.length &&
        t.preloadHints.forEach((i) => {
          i.resolvedUri || (i.resolvedUri = Gt(e, i.uri));
        });
  },
  i0 = function (t) {
    const e = t.segments || [],
      i = t.preloadSegment;
    if (i && i.parts && i.parts.length) {
      if (i.preloadHints) {
        for (let s = 0; s < i.preloadHints.length; s++)
          if (i.preloadHints[s].type === "MAP") return e;
      }
      (i.duration = t.targetDuration), (i.preload = !0), e.push(i);
    }
    return e;
  },
  s0 = (t, e) =>
    t === e ||
    (t.segments &&
      e.segments &&
      t.segments.length === e.segments.length &&
      t.endList === e.endList &&
      t.mediaSequence === e.mediaSequence &&
      t.preloadSegment === e.preloadSegment),
  mu = (t, e, i = s0) => {
    const s = Pe(t, {}),
      n = s.playlists[e.id];
    if (!n || i(n, e)) return null;
    e.segments = i0(e);
    const r = Pe(n, e);
    if (
      (r.preloadSegment && !e.preloadSegment && delete r.preloadSegment,
      n.segments)
    ) {
      if (e.skip) {
        e.segments = e.segments || [];
        for (let a = 0; a < e.skip.skippedSegments; a++)
          e.segments.unshift({ skipped: !0 });
      }
      r.segments = UC(
        n.segments,
        e.segments,
        e.mediaSequence - n.mediaSequence
      );
    }
    r.segments.forEach((a) => {
      t0(a, r.resolvedUri);
    });
    for (let a = 0; a < s.playlists.length; a++)
      s.playlists[a].id === e.id && (s.playlists[a] = r);
    return (
      (s.playlists[e.id] = r),
      (s.playlists[e.uri] = r),
      Lr(t, (a, o, u, f) => {
        if (a.playlists)
          for (let p = 0; p < a.playlists.length; p++)
            e.id === a.playlists[p].id && (a.playlists[p] = r);
      }),
      s
    );
  },
  gu = (t, e) => {
    const i = t.segments || [],
      s = i[i.length - 1],
      n = s && s.parts && s.parts[s.parts.length - 1],
      r = (n && n.duration) || (s && s.duration);
    return e && r
      ? r * 1e3
      : (t.partTargetDuration || t.targetDuration || 10) * 500;
  };
class $s extends RC {
  constructor(e, i, s = {}) {
    if ((super(), !e))
      throw new Error("A non-empty playlist URL or object is required");
    this.logger_ = ti("PlaylistLoader");
    const { withCredentials: n = !1 } = s;
    (this.src = e), (this.vhs_ = i), (this.withCredentials = n);
    const r = i.options_;
    (this.customTagParsers = (r && r.customTagParsers) || []),
      (this.customTagMappers = (r && r.customTagMappers) || []),
      (this.llhls = r && r.llhls),
      (this.state = "HAVE_NOTHING"),
      (this.handleMediaupdatetimeout_ =
        this.handleMediaupdatetimeout_.bind(this)),
      this.on("mediaupdatetimeout", this.handleMediaupdatetimeout_);
  }
  handleMediaupdatetimeout_() {
    if (this.state !== "HAVE_METADATA") return;
    const e = this.media();
    let i = Gt(this.main.uri, e.uri);
    this.llhls && (i = NC(i, e)),
      (this.state = "HAVE_CURRENT_METADATA"),
      (this.request = this.vhs_.xhr(
        { uri: i, withCredentials: this.withCredentials },
        (s, n) => {
          if (this.request) {
            if (s)
              return this.playlistRequestError(
                this.request,
                this.media(),
                "HAVE_METADATA"
              );
            this.haveMetadata({
              playlistString: this.request.responseText,
              url: this.media().uri,
              id: this.media().id,
            });
          }
        }
      ));
  }
  playlistRequestError(e, i, s) {
    const { uri: n, id: r } = i;
    (this.request = null),
      s && (this.state = s),
      (this.error = {
        playlist: this.main.playlists[r],
        status: e.status,
        message: `HLS playlist request error at URL: ${n}.`,
        responseText: e.responseText,
        code: e.status >= 500 ? 4 : 2,
      }),
      this.trigger("error");
  }
  parseManifest_({ url: e, manifestString: i }) {
    return OC({
      onwarn: ({ message: s }) =>
        this.logger_(`m3u8-parser warn for ${e}: ${s}`),
      oninfo: ({ message: s }) =>
        this.logger_(`m3u8-parser info for ${e}: ${s}`),
      manifestString: i,
      customTagParsers: this.customTagParsers,
      customTagMappers: this.customTagMappers,
      llhls: this.llhls,
    });
  }
  haveMetadata({ playlistString: e, playlistObject: i, url: s, id: n }) {
    (this.request = null), (this.state = "HAVE_METADATA");
    const r = i || this.parseManifest_({ url: s, manifestString: e });
    (r.lastRequest = Date.now()), Zg({ playlist: r, uri: s, id: n });
    const a = mu(this.main, r);
    (this.targetDuration = r.partTargetDuration || r.targetDuration),
      (this.pendingMedia_ = null),
      a
        ? ((this.main = a), (this.media_ = this.main.playlists[n]))
        : this.trigger("playlistunchanged"),
      this.updateMediaUpdateTimeout_(gu(this.media(), !!a)),
      this.trigger("loadedplaylist");
  }
  dispose() {
    this.trigger("dispose"),
      this.stopRequest(),
      C.clearTimeout(this.mediaUpdateTimeout),
      C.clearTimeout(this.finalRenditionTimeout),
      this.off();
  }
  stopRequest() {
    if (this.request) {
      const e = this.request;
      (this.request = null), (e.onreadystatechange = null), e.abort();
    }
  }
  media(e, i) {
    if (!e) return this.media_;
    if (this.state === "HAVE_NOTHING")
      throw new Error("Cannot switch media playlist from " + this.state);
    if (typeof e == "string") {
      if (!this.main.playlists[e])
        throw new Error("Unknown playlist URI: " + e);
      e = this.main.playlists[e];
    }
    if ((C.clearTimeout(this.finalRenditionTimeout), i)) {
      const a = ((e.partTargetDuration || e.targetDuration) / 2) * 1e3 || 5e3;
      this.finalRenditionTimeout = C.setTimeout(
        this.media.bind(this, e, !1),
        a
      );
      return;
    }
    const s = this.state,
      n = !this.media_ || e.id !== this.media_.id,
      r = this.main.playlists[e.id];
    if ((r && r.endList) || (e.endList && e.segments.length)) {
      this.request &&
        ((this.request.onreadystatechange = null),
        this.request.abort(),
        (this.request = null)),
        (this.state = "HAVE_METADATA"),
        (this.media_ = e),
        n &&
          (this.trigger("mediachanging"),
          s === "HAVE_MAIN_MANIFEST"
            ? this.trigger("loadedmetadata")
            : this.trigger("mediachange"));
      return;
    }
    if ((this.updateMediaUpdateTimeout_(gu(e, !0)), !!n)) {
      if (((this.state = "SWITCHING_MEDIA"), this.request)) {
        if (e.resolvedUri === this.request.url) return;
        (this.request.onreadystatechange = null),
          this.request.abort(),
          (this.request = null);
      }
      this.media_ && this.trigger("mediachanging"),
        (this.pendingMedia_ = e),
        (this.request = this.vhs_.xhr(
          { uri: e.resolvedUri, withCredentials: this.withCredentials },
          (a, o) => {
            if (this.request) {
              if (
                ((e.lastRequest = Date.now()),
                (e.resolvedUri = no(e.resolvedUri, o)),
                a)
              )
                return this.playlistRequestError(this.request, e, s);
              this.haveMetadata({
                playlistString: o.responseText,
                url: e.uri,
                id: e.id,
              }),
                s === "HAVE_MAIN_MANIFEST"
                  ? this.trigger("loadedmetadata")
                  : this.trigger("mediachange");
            }
          }
        ));
    }
  }
  pause() {
    this.mediaUpdateTimeout &&
      (C.clearTimeout(this.mediaUpdateTimeout),
      (this.mediaUpdateTimeout = null)),
      this.stopRequest(),
      this.state === "HAVE_NOTHING" && (this.started = !1),
      this.state === "SWITCHING_MEDIA"
        ? this.media_
          ? (this.state = "HAVE_METADATA")
          : (this.state = "HAVE_MAIN_MANIFEST")
        : this.state === "HAVE_CURRENT_METADATA" &&
          (this.state = "HAVE_METADATA");
  }
  load(e) {
    this.mediaUpdateTimeout &&
      (C.clearTimeout(this.mediaUpdateTimeout),
      (this.mediaUpdateTimeout = null));
    const i = this.media();
    if (e) {
      const s = i
        ? ((i.partTargetDuration || i.targetDuration) / 2) * 1e3
        : 5e3;
      this.mediaUpdateTimeout = C.setTimeout(() => {
        (this.mediaUpdateTimeout = null), this.load();
      }, s);
      return;
    }
    if (!this.started) {
      this.start();
      return;
    }
    i && !i.endList
      ? this.trigger("mediaupdatetimeout")
      : this.trigger("loadedplaylist");
  }
  updateMediaUpdateTimeout_(e) {
    this.mediaUpdateTimeout &&
      (C.clearTimeout(this.mediaUpdateTimeout),
      (this.mediaUpdateTimeout = null)),
      !(!this.media() || this.media().endList) &&
        (this.mediaUpdateTimeout = C.setTimeout(() => {
          (this.mediaUpdateTimeout = null),
            this.trigger("mediaupdatetimeout"),
            this.updateMediaUpdateTimeout_(e);
        }, e));
  }
  start() {
    if (((this.started = !0), typeof this.src == "object")) {
      this.src.uri || (this.src.uri = C.location.href),
        (this.src.resolvedUri = this.src.uri),
        setTimeout(() => {
          this.setupInitialPlaylist(this.src);
        }, 0);
      return;
    }
    this.request = this.vhs_.xhr(
      { uri: this.src, withCredentials: this.withCredentials },
      (e, i) => {
        if (!this.request) return;
        if (((this.request = null), e))
          return (
            (this.error = {
              status: i.status,
              message: `HLS playlist request error at URL: ${this.src}.`,
              responseText: i.responseText,
              code: 2,
            }),
            this.state === "HAVE_NOTHING" && (this.started = !1),
            this.trigger("error")
          );
        this.src = no(this.src, i);
        const s = this.parseManifest_({
          manifestString: i.responseText,
          url: this.src,
        });
        this.setupInitialPlaylist(s);
      }
    );
  }
  srcUri() {
    return typeof this.src == "string" ? this.src : this.src.uri;
  }
  setupInitialPlaylist(e) {
    if (((this.state = "HAVE_MAIN_MANIFEST"), e.playlists)) {
      (this.main = e),
        e0(this.main, this.srcUri()),
        e.playlists.forEach((s) => {
          (s.segments = i0(s)),
            s.segments.forEach((n) => {
              t0(n, s.resolvedUri);
            });
        }),
        this.trigger("loadedplaylist"),
        this.request || this.media(this.main.playlists[0]);
      return;
    }
    const i = this.srcUri() || C.location.href;
    (this.main = LC(e, i)),
      this.haveMetadata({
        playlistObject: e,
        url: i,
        id: this.main.playlists[0].id,
      }),
      this.trigger("loadedmetadata");
  }
}
const { xhr: FC } = M,
  _u = function (t, e, i, s) {
    const n = t.responseType === "arraybuffer" ? t.response : t.responseText;
    !e &&
      n &&
      ((t.responseTime = Date.now()),
      (t.roundTripTime = t.responseTime - t.requestTime),
      (t.bytesReceived = n.byteLength || n.length),
      t.bandwidth ||
        (t.bandwidth = Math.floor(
          (t.bytesReceived / t.roundTripTime) * 8 * 1e3
        ))),
      i.headers && (t.responseHeaders = i.headers),
      e && e.code === "ETIMEDOUT" && (t.timedout = !0),
      !e &&
        !t.aborted &&
        i.statusCode !== 200 &&
        i.statusCode !== 206 &&
        i.statusCode !== 0 &&
        (e = new Error(
          "XHR Failed with a response of: " + (t && (n || t.responseText))
        )),
      s(e, t);
  },
  n0 = function () {
    const t = function e(i, s) {
      i = Pe({ timeout: 45e3 }, i);
      const n = e.beforeRequest || M.Vhs.xhr.beforeRequest;
      if (n && typeof n == "function") {
        const u = n(i);
        u && (i = u);
      }
      const a = (M.Vhs.xhr.original === !0 ? FC : M.Vhs.xhr)(
          i,
          function (u, f) {
            return _u(a, u, f, s);
          }
        ),
        o = a.abort;
      return (
        (a.abort = function () {
          return (a.aborted = !0), o.apply(a, arguments);
        }),
        (a.uri = i.uri),
        (a.requestTime = Date.now()),
        a
      );
    };
    return (t.original = !0), t;
  },
  BC = function (t) {
    let e;
    const i = t.offset;
    return (
      typeof t.offset == "bigint" || typeof t.length == "bigint"
        ? (e = C.BigInt(t.offset) + C.BigInt(t.length) - C.BigInt(1))
        : (e = t.offset + t.length - 1),
      "bytes=" + i + "-" + e
    );
  },
  yu = function (t) {
    const e = {};
    return t.byterange && (e.Range = BC(t.byterange)), e;
  },
  $C = function (t, e) {
    return t.start(e) + "-" + t.end(e);
  },
  jC = function (t, e) {
    const i = t.toString(16);
    return "00".substring(0, 2 - i.length) + i + (e % 2 ? " " : "");
  },
  HC = function (t) {
    return t >= 32 && t < 126 ? String.fromCharCode(t) : ".";
  },
  r0 = function (t) {
    const e = {};
    return (
      Object.keys(t).forEach((i) => {
        const s = t[i];
        Hp(s)
          ? (e[i] = {
              bytes: s.buffer,
              byteOffset: s.byteOffset,
              byteLength: s.byteLength,
            })
          : (e[i] = s);
      }),
      e
    );
  },
  ro = function (t) {
    const e = t.byterange || { length: 1 / 0, offset: 0 };
    return [e.length, e.offset, t.resolvedUri].join(",");
  },
  a0 = function (t) {
    return t.resolvedUri;
  },
  o0 = (t) => {
    const e = Array.prototype.slice.call(t),
      i = 16;
    let s = "",
      n,
      r;
    for (let a = 0; a < e.length / i; a++)
      (n = e
        .slice(a * i, a * i + i)
        .map(jC)
        .join("")),
        (r = e
          .slice(a * i, a * i + i)
          .map(HC)
          .join("")),
        (s +=
          n +
          " " +
          r +
          `
`);
    return s;
  },
  VC = ({ bytes: t }) => o0(t),
  WC = (t) => {
    let e = "",
      i;
    for (i = 0; i < t.length; i++) e += $C(t, i) + " ";
    return e;
  };
var qC = Object.freeze({
  __proto__: null,
  createTransferableMessage: r0,
  initSegmentId: ro,
  segmentKeyId: a0,
  hexDump: o0,
  tagDump: VC,
  textRanges: WC,
});
const l0 = 0.25,
  zC = (t, e) => {
    if (!e.dateTimeObject) return null;
    const i = e.videoTimingInfo.transmuxerPrependedSeconds,
      n = e.videoTimingInfo.transmuxedPresentationStart + i,
      r = t - n;
    return new Date(e.dateTimeObject.getTime() + r * 1e3);
  },
  GC = (t) =>
    t.transmuxedPresentationEnd -
    t.transmuxedPresentationStart -
    t.transmuxerPrependedSeconds,
  KC = (t, e) => {
    let i;
    try {
      i = new Date(t);
    } catch {
      return null;
    }
    if (!e || !e.segments || e.segments.length === 0) return null;
    let s = e.segments[0];
    if (i < s.dateTimeObject) return null;
    for (let u = 0; u < e.segments.length - 1; u++) {
      s = e.segments[u];
      const f = e.segments[u + 1].dateTimeObject;
      if (i < f) break;
    }
    const n = e.segments[e.segments.length - 1],
      r = n.dateTimeObject,
      a = n.videoTimingInfo
        ? GC(n.videoTimingInfo)
        : n.duration + n.duration * l0,
      o = new Date(r.getTime() + a * 1e3);
    return i > o
      ? null
      : (i > r && (s = n),
        {
          segment: s,
          estimatedStart: s.videoTimingInfo
            ? s.videoTimingInfo.transmuxedPresentationStart
            : Ct.duration(e, e.mediaSequence + e.segments.indexOf(s)),
          type: s.videoTimingInfo ? "accurate" : "estimate",
        });
  },
  XC = (t, e) => {
    if (!e || !e.segments || e.segments.length === 0) return null;
    let i = 0,
      s;
    for (
      let r = 0;
      r < e.segments.length &&
      ((s = e.segments[r]),
      (i = s.videoTimingInfo
        ? s.videoTimingInfo.transmuxedPresentationEnd
        : i + s.duration),
      !(t <= i));
      r++
    );
    const n = e.segments[e.segments.length - 1];
    if (n.videoTimingInfo && n.videoTimingInfo.transmuxedPresentationEnd < t)
      return null;
    if (t > i) {
      if (t > i + n.duration * l0) return null;
      s = n;
    }
    return {
      segment: s,
      estimatedStart: s.videoTimingInfo
        ? s.videoTimingInfo.transmuxedPresentationStart
        : i - s.duration,
      type: s.videoTimingInfo ? "accurate" : "estimate",
    };
  },
  YC = (t, e) => {
    let i, s;
    try {
      (i = new Date(t)), (s = new Date(e));
    } catch {}
    const n = i.getTime();
    return (s.getTime() - n) / 1e3;
  },
  QC = (t) => {
    if (!t.segments || t.segments.length === 0) return !1;
    for (let e = 0; e < t.segments.length; e++)
      if (!t.segments[e].dateTimeObject) return !1;
    return !0;
  },
  JC = ({ playlist: t, time: e = void 0, callback: i }) => {
    if (!i) throw new Error("getProgramTime: callback must be provided");
    if (!t || e === void 0)
      return i({
        message: "getProgramTime: playlist and time must be provided",
      });
    const s = XC(e, t);
    if (!s) return i({ message: "valid programTime was not found" });
    if (s.type === "estimate")
      return i({
        message:
          "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
        seekTime: s.estimatedStart,
      });
    const n = { mediaSeconds: e },
      r = zC(e, s.segment);
    return r && (n.programDateTime = r.toISOString()), i(null, n);
  },
  u0 = ({
    programTime: t,
    playlist: e,
    retryCount: i = 2,
    seekTo: s,
    pauseAfterSeek: n = !0,
    tech: r,
    callback: a,
  }) => {
    if (!a) throw new Error("seekToProgramTime: callback must be provided");
    if (typeof t > "u" || !e || !s)
      return a({
        message:
          "seekToProgramTime: programTime, seekTo and playlist must be provided",
      });
    if (!e.endList && !r.hasStarted_)
      return a({
        message: "player must be playing a live stream to start buffering",
      });
    if (!QC(e))
      return a({
        message:
          "programDateTime tags must be provided in the manifest " +
          e.resolvedUri,
      });
    const o = KC(t, e);
    if (!o) return a({ message: `${t} was not found in the stream` });
    const u = o.segment,
      f = YC(u.dateTimeObject, t);
    if (o.type === "estimate") {
      if (i === 0) return a({ message: `${t} is not buffered yet. Try again` });
      s(o.estimatedStart + f),
        r.one("seeked", () => {
          u0({
            programTime: t,
            playlist: e,
            retryCount: i - 1,
            seekTo: s,
            pauseAfterSeek: n,
            tech: r,
            callback: a,
          });
        });
      return;
    }
    const p = u.start + f,
      _ = () => a(null, r.currentTime());
    r.one("seeked", _), n && r.pause(), s(p);
  },
  Dl = (t, e) => {
    if (t.readyState === 4) return e();
  },
  ZC = (t, e, i) => {
    let s = [],
      n,
      r = !1;
    const a = function (p, _, v, y) {
        return _.abort(), (r = !0), i(p, _, v, y);
      },
      o = function (p, _) {
        if (r) return;
        if (p) return a(p, _, "", s);
        const v = _.responseText.substring(
          (s && s.byteLength) || 0,
          _.responseText.length
        );
        if (
          ((s = cx(s, Vp(v, !0))),
          (n = n || Yn(s)),
          s.length < 10 || (n && s.length < n + 2))
        )
          return Dl(_, () => a(p, _, "", s));
        const y = dc(s);
        return y === "ts" && s.length < 188
          ? Dl(_, () => a(p, _, "", s))
          : !y && s.length < 376
          ? Dl(_, () => a(p, _, "", s))
          : a(null, _, y, s);
      },
      f = e(
        {
          uri: t,
          beforeSend(p) {
            p.overrideMimeType("text/plain; charset=x-user-defined"),
              p.addEventListener(
                "progress",
                function ({ total: _, loaded: v }) {
                  return _u(p, null, { statusCode: p.status }, o);
                }
              );
          },
        },
        function (p, _) {
          return _u(f, p, _, o);
        }
      );
    return f;
  },
  { EventTarget: ew } = M,
  vf = function (t, e) {
    if (
      !s0(t, e) ||
      (t.sidx &&
        e.sidx &&
        (t.sidx.offset !== e.sidx.offset || t.sidx.length !== e.sidx.length))
    )
      return !1;
    if (
      (!t.sidx && e.sidx) ||
      (t.sidx && !e.sidx) ||
      (t.segments && !e.segments) ||
      (!t.segments && e.segments)
    )
      return !1;
    if (!t.segments && !e.segments) return !0;
    for (let i = 0; i < t.segments.length; i++) {
      const s = t.segments[i],
        n = e.segments[i];
      if (s.uri !== n.uri) return !1;
      if (!s.byterange && !n.byterange) continue;
      const r = s.byterange,
        a = n.byterange;
      if (
        (r && !a) ||
        (!r && a) ||
        r.offset !== a.offset ||
        r.length !== a.length
      )
        return !1;
    }
    return !0;
  },
  tw = ({
    mainXml: t,
    srcUrl: e,
    clientOffset: i,
    sidxMapping: s,
    previousManifest: n,
  }) => {
    const r = OS(t, {
      manifestUri: e,
      clientOffset: i,
      sidxMapping: s,
      previousManifest: n,
    });
    return e0(r, e), r;
  },
  iw = (t, e, i) => {
    let s = !0,
      n = Pe(t, {
        duration: e.duration,
        minimumUpdatePeriod: e.minimumUpdatePeriod,
        timelineStarts: e.timelineStarts,
      });
    for (let r = 0; r < e.playlists.length; r++) {
      const a = e.playlists[r];
      if (a.sidx) {
        const u = wo(a.sidx);
        i && i[u] && i[u].sidx && oc(a, i[u].sidx, a.sidx.resolvedUri);
      }
      const o = mu(n, a, vf);
      o && ((n = o), (s = !1));
    }
    return (
      Lr(e, (r, a, o, u) => {
        if (r.playlists && r.playlists.length) {
          const f = r.playlists[0].id,
            p = mu(n, r.playlists[0], vf);
          p &&
            ((n = p),
            (n.mediaGroups[a][o][u].playlists[0] = n.playlists[f]),
            (s = !1));
        }
      }),
      e.minimumUpdatePeriod !== t.minimumUpdatePeriod && (s = !1),
      s ? null : n
    );
  },
  sw = (t, e) =>
    (Boolean(!t.map && !e.map) ||
      Boolean(
        t.map &&
          e.map &&
          t.map.byterange.offset === e.map.byterange.offset &&
          t.map.byterange.length === e.map.byterange.length
      )) &&
    t.uri === e.uri &&
    t.byterange.offset === e.byterange.offset &&
    t.byterange.length === e.byterange.length,
  Tf = (t, e) => {
    const i = {};
    for (const s in t) {
      const r = t[s].sidx;
      if (r) {
        const a = wo(r);
        if (!e[a]) break;
        const o = e[a].sidxInfo;
        sw(o, r) && (i[a] = e[a]);
      }
    }
    return i;
  },
  nw = (t, e) => {
    let s = Tf(t.playlists, e);
    return (
      Lr(t, (n, r, a, o) => {
        if (n.playlists && n.playlists.length) {
          const u = n.playlists;
          s = Pe(s, Tf(u, e));
        }
      }),
      s
    );
  };
class vu extends ew {
  constructor(e, i, s = {}, n) {
    super(), (this.mainPlaylistLoader_ = n || this), n || (this.isMain_ = !0);
    const { withCredentials: r = !1 } = s;
    if (((this.vhs_ = i), (this.withCredentials = r), !e))
      throw new Error("A non-empty playlist URL or object is required");
    this.on("minimumUpdatePeriod", () => {
      this.refreshXml_();
    }),
      this.on("mediaupdatetimeout", () => {
        this.refreshMedia_(this.media().id);
      }),
      (this.state = "HAVE_NOTHING"),
      (this.loadedPlaylists_ = {}),
      (this.logger_ = ti("DashPlaylistLoader")),
      this.isMain_
        ? ((this.mainPlaylistLoader_.srcUrl = e),
          (this.mainPlaylistLoader_.sidxMapping_ = {}))
        : (this.childPlaylist_ = e);
  }
  requestErrored_(e, i, s) {
    if (!this.request) return !0;
    if (((this.request = null), e))
      return (
        (this.error =
          typeof e == "object" && !(e instanceof Error)
            ? e
            : {
                status: i.status,
                message: "DASH request error at URL: " + i.uri,
                response: i.response,
                code: 2,
              }),
        s && (this.state = s),
        this.trigger("error"),
        !0
      );
  }
  addSidxSegments_(e, i, s) {
    const n = e.sidx && wo(e.sidx);
    if (!e.sidx || !n || this.mainPlaylistLoader_.sidxMapping_[n]) {
      this.mediaRequest_ = C.setTimeout(() => s(!1), 0);
      return;
    }
    const r = no(e.sidx.resolvedUri),
      a = (o, u) => {
        if (this.requestErrored_(o, u, i)) return;
        const f = this.mainPlaylistLoader_.sidxMapping_;
        let p;
        try {
          p = NS(se(u.response).subarray(8));
        } catch (_) {
          this.requestErrored_(_, u, i);
          return;
        }
        return (
          (f[n] = { sidxInfo: e.sidx, sidx: p }),
          oc(e, p, e.sidx.resolvedUri),
          s(!0)
        );
      };
    this.request = ZC(r, this.vhs_.xhr, (o, u, f, p) => {
      if (o) return a(o, u);
      if (!f || f !== "mp4")
        return a(
          {
            status: u.status,
            message: `Unsupported ${
              f || "unknown"
            } container type for sidx segment at URL: ${r}`,
            response: "",
            playlist: e,
            internal: !0,
            playlistExclusionDuration: 1 / 0,
            code: 2,
          },
          u
        );
      const { offset: _, length: v } = e.sidx.byterange;
      if (p.length >= v + _)
        return a(o, {
          response: p.subarray(_, _ + v),
          status: u.status,
          uri: u.uri,
        });
      this.request = this.vhs_.xhr(
        {
          uri: r,
          responseType: "arraybuffer",
          headers: yu({ byterange: e.sidx.byterange }),
        },
        a
      );
    });
  }
  dispose() {
    this.trigger("dispose"),
      this.stopRequest(),
      (this.loadedPlaylists_ = {}),
      C.clearTimeout(this.minimumUpdatePeriodTimeout_),
      C.clearTimeout(this.mediaRequest_),
      C.clearTimeout(this.mediaUpdateTimeout),
      (this.mediaUpdateTimeout = null),
      (this.mediaRequest_ = null),
      (this.minimumUpdatePeriodTimeout_ = null),
      this.mainPlaylistLoader_.createMupOnMedia_ &&
        (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_),
        (this.mainPlaylistLoader_.createMupOnMedia_ = null)),
      this.off();
  }
  hasPendingRequest() {
    return this.request || this.mediaRequest_;
  }
  stopRequest() {
    if (this.request) {
      const e = this.request;
      (this.request = null), (e.onreadystatechange = null), e.abort();
    }
  }
  media(e) {
    if (!e) return this.media_;
    if (this.state === "HAVE_NOTHING")
      throw new Error("Cannot switch media playlist from " + this.state);
    const i = this.state;
    if (typeof e == "string") {
      if (!this.mainPlaylistLoader_.main.playlists[e])
        throw new Error("Unknown playlist URI: " + e);
      e = this.mainPlaylistLoader_.main.playlists[e];
    }
    const s = !this.media_ || e.id !== this.media_.id;
    if (
      s &&
      this.loadedPlaylists_[e.id] &&
      this.loadedPlaylists_[e.id].endList
    ) {
      (this.state = "HAVE_METADATA"),
        (this.media_ = e),
        s && (this.trigger("mediachanging"), this.trigger("mediachange"));
      return;
    }
    s &&
      (this.media_ && this.trigger("mediachanging"),
      this.addSidxSegments_(e, i, (n) => {
        this.haveMetadata({ startingState: i, playlist: e });
      }));
  }
  haveMetadata({ startingState: e, playlist: i }) {
    (this.state = "HAVE_METADATA"),
      (this.loadedPlaylists_[i.id] = i),
      (this.mediaRequest_ = null),
      this.refreshMedia_(i.id),
      e === "HAVE_MAIN_MANIFEST"
        ? this.trigger("loadedmetadata")
        : this.trigger("mediachange");
  }
  pause() {
    this.mainPlaylistLoader_.createMupOnMedia_ &&
      (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_),
      (this.mainPlaylistLoader_.createMupOnMedia_ = null)),
      this.stopRequest(),
      C.clearTimeout(this.mediaUpdateTimeout),
      (this.mediaUpdateTimeout = null),
      this.isMain_ &&
        (C.clearTimeout(this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_),
        (this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null)),
      this.state === "HAVE_NOTHING" && (this.started = !1);
  }
  load(e) {
    C.clearTimeout(this.mediaUpdateTimeout), (this.mediaUpdateTimeout = null);
    const i = this.media();
    if (e) {
      const s = i ? (i.targetDuration / 2) * 1e3 : 5e3;
      this.mediaUpdateTimeout = C.setTimeout(() => this.load(), s);
      return;
    }
    if (!this.started) {
      this.start();
      return;
    }
    i && !i.endList
      ? (this.isMain_ &&
          !this.minimumUpdatePeriodTimeout_ &&
          (this.trigger("minimumUpdatePeriod"),
          this.updateMinimumUpdatePeriodTimeout_()),
        this.trigger("mediaupdatetimeout"))
      : this.trigger("loadedplaylist");
  }
  start() {
    if (((this.started = !0), !this.isMain_)) {
      this.mediaRequest_ = C.setTimeout(() => this.haveMain_(), 0);
      return;
    }
    this.requestMain_((e, i) => {
      this.haveMain_(),
        !this.hasPendingRequest() &&
          !this.media_ &&
          this.media(this.mainPlaylistLoader_.main.playlists[0]);
    });
  }
  requestMain_(e) {
    this.request = this.vhs_.xhr(
      {
        uri: this.mainPlaylistLoader_.srcUrl,
        withCredentials: this.withCredentials,
      },
      (i, s) => {
        if (this.requestErrored_(i, s)) {
          this.state === "HAVE_NOTHING" && (this.started = !1);
          return;
        }
        const n = s.responseText !== this.mainPlaylistLoader_.mainXml_;
        if (
          ((this.mainPlaylistLoader_.mainXml_ = s.responseText),
          s.responseHeaders && s.responseHeaders.date
            ? (this.mainLoaded_ = Date.parse(s.responseHeaders.date))
            : (this.mainLoaded_ = Date.now()),
          (this.mainPlaylistLoader_.srcUrl = no(
            this.mainPlaylistLoader_.srcUrl,
            s
          )),
          n)
        ) {
          this.handleMain_(), this.syncClientServerClock_(() => e(s, n));
          return;
        }
        return e(s, n);
      }
    );
  }
  syncClientServerClock_(e) {
    const i = PS(this.mainPlaylistLoader_.mainXml_);
    if (i === null)
      return (
        (this.mainPlaylistLoader_.clientOffset_ =
          this.mainLoaded_ - Date.now()),
        e()
      );
    if (i.method === "DIRECT")
      return (
        (this.mainPlaylistLoader_.clientOffset_ = i.value - Date.now()), e()
      );
    this.request = this.vhs_.xhr(
      {
        uri: Gt(this.mainPlaylistLoader_.srcUrl, i.value),
        method: i.method,
        withCredentials: this.withCredentials,
      },
      (s, n) => {
        if (!this.request) return;
        if (s)
          return (
            (this.mainPlaylistLoader_.clientOffset_ =
              this.mainLoaded_ - Date.now()),
            e()
          );
        let r;
        i.method === "HEAD"
          ? !n.responseHeaders || !n.responseHeaders.date
            ? (r = this.mainLoaded_)
            : (r = Date.parse(n.responseHeaders.date))
          : (r = Date.parse(n.responseText)),
          (this.mainPlaylistLoader_.clientOffset_ = r - Date.now()),
          e();
      }
    );
  }
  haveMain_() {
    (this.state = "HAVE_MAIN_MANIFEST"),
      this.isMain_
        ? this.trigger("loadedplaylist")
        : this.media_ || this.media(this.childPlaylist_);
  }
  handleMain_() {
    this.mediaRequest_ = null;
    const e = this.mainPlaylistLoader_.main;
    let i = tw({
      mainXml: this.mainPlaylistLoader_.mainXml_,
      srcUrl: this.mainPlaylistLoader_.srcUrl,
      clientOffset: this.mainPlaylistLoader_.clientOffset_,
      sidxMapping: this.mainPlaylistLoader_.sidxMapping_,
      previousManifest: e,
    });
    e && (i = iw(e, i, this.mainPlaylistLoader_.sidxMapping_)),
      (this.mainPlaylistLoader_.main = i || e);
    const s =
      this.mainPlaylistLoader_.main.locations &&
      this.mainPlaylistLoader_.main.locations[0];
    return (
      s &&
        s !== this.mainPlaylistLoader_.srcUrl &&
        (this.mainPlaylistLoader_.srcUrl = s),
      (!e || (i && i.minimumUpdatePeriod !== e.minimumUpdatePeriod)) &&
        this.updateMinimumUpdatePeriodTimeout_(),
      Boolean(i)
    );
  }
  updateMinimumUpdatePeriodTimeout_() {
    const e = this.mainPlaylistLoader_;
    e.createMupOnMedia_ &&
      (e.off("loadedmetadata", e.createMupOnMedia_),
      (e.createMupOnMedia_ = null)),
      e.minimumUpdatePeriodTimeout_ &&
        (C.clearTimeout(e.minimumUpdatePeriodTimeout_),
        (e.minimumUpdatePeriodTimeout_ = null));
    let i = e.main && e.main.minimumUpdatePeriod;
    if (
      (i === 0 &&
        (e.media()
          ? (i = e.media().targetDuration * 1e3)
          : ((e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_),
            e.one("loadedmetadata", e.createMupOnMedia_))),
      typeof i != "number" || i <= 0)
    ) {
      i < 0 &&
        this.logger_(
          `found invalid minimumUpdatePeriod of ${i}, not setting a timeout`
        );
      return;
    }
    this.createMUPTimeout_(i);
  }
  createMUPTimeout_(e) {
    const i = this.mainPlaylistLoader_;
    i.minimumUpdatePeriodTimeout_ = C.setTimeout(() => {
      (i.minimumUpdatePeriodTimeout_ = null),
        i.trigger("minimumUpdatePeriod"),
        i.createMUPTimeout_(e);
    }, e);
  }
  refreshXml_() {
    this.requestMain_((e, i) => {
      i &&
        (this.media_ &&
          (this.media_ =
            this.mainPlaylistLoader_.main.playlists[this.media_.id]),
        (this.mainPlaylistLoader_.sidxMapping_ = nw(
          this.mainPlaylistLoader_.main,
          this.mainPlaylistLoader_.sidxMapping_
        )),
        this.addSidxSegments_(this.media(), this.state, (s) => {
          this.refreshMedia_(this.media().id);
        }));
    });
  }
  refreshMedia_(e) {
    if (!e) throw new Error("refreshMedia_ must take a media id");
    this.media_ && this.isMain_ && this.handleMain_();
    const i = this.mainPlaylistLoader_.main.playlists,
      s = !this.media_ || this.media_ !== i[e];
    if (
      (s ? (this.media_ = i[e]) : this.trigger("playlistunchanged"),
      !this.mediaUpdateTimeout)
    ) {
      const n = () => {
        this.media().endList ||
          (this.mediaUpdateTimeout = C.setTimeout(() => {
            this.trigger("mediaupdatetimeout"), n();
          }, gu(this.media(), Boolean(s))));
      };
      n();
    }
    this.trigger("loadedplaylist");
  }
}
var Ye = {
  GOAL_BUFFER_LENGTH: 30,
  MAX_GOAL_BUFFER_LENGTH: 60,
  BACK_BUFFER_LENGTH: 30,
  GOAL_BUFFER_LENGTH_RATE: 1,
  INITIAL_BANDWIDTH: 4194304,
  BANDWIDTH_VARIANCE: 1.2,
  BUFFER_LOW_WATER_LINE: 0,
  MAX_BUFFER_LOW_WATER_LINE: 30,
  EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16,
  BUFFER_LOW_WATER_LINE_RATE: 1,
  BUFFER_HIGH_WATER_LINE: 30,
};
const rw = (t) => {
    const e = new Uint8Array(new ArrayBuffer(t.length));
    for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
    return e.buffer;
  },
  c0 = function (t) {
    return (t.on = t.addEventListener), (t.off = t.removeEventListener), t;
  },
  aw = function (t) {
    try {
      return URL.createObjectURL(
        new Blob([t], { type: "application/javascript" })
      );
    } catch {
      const i = new BlobBuilder();
      return i.append(t), URL.createObjectURL(i.getBlob());
    }
  },
  d0 = function (t) {
    return function () {
      const e = aw(t),
        i = c0(new Worker(e));
      i.objURL = e;
      const s = i.terminate;
      return (
        (i.on = i.addEventListener),
        (i.off = i.removeEventListener),
        (i.terminate = function () {
          return URL.revokeObjectURL(e), s.call(this);
        }),
        i
      );
    };
  },
  h0 = function (t) {
    return (
      `var browserWorkerPolyFill = ${c0.toString()};
browserWorkerPolyFill(self);
` + t
    );
  },
  f0 = function (t) {
    return t
      .toString()
      .replace(/^function.+?{/, "")
      .slice(0, -1);
  },
  ow = h0(
    f0(function () {
      var t =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : typeof self < "u"
            ? self
            : {},
        e = function () {
          this.init = function () {
            var l = {};
            (this.on = function (c, d) {
              l[c] || (l[c] = []), (l[c] = l[c].concat(d));
            }),
              (this.off = function (c, d) {
                var h;
                return l[c]
                  ? ((h = l[c].indexOf(d)),
                    (l[c] = l[c].slice()),
                    l[c].splice(h, 1),
                    h > -1)
                  : !1;
              }),
              (this.trigger = function (c) {
                var d, h, m, g;
                if (((d = l[c]), !!d))
                  if (arguments.length === 2)
                    for (m = d.length, h = 0; h < m; ++h)
                      d[h].call(this, arguments[1]);
                  else {
                    for (
                      g = [], h = arguments.length, h = 1;
                      h < arguments.length;
                      ++h
                    )
                      g.push(arguments[h]);
                    for (m = d.length, h = 0; h < m; ++h) d[h].apply(this, g);
                  }
              }),
              (this.dispose = function () {
                l = {};
              });
          };
        };
      (e.prototype.pipe = function (l) {
        return (
          this.on("data", function (c) {
            l.push(c);
          }),
          this.on("done", function (c) {
            l.flush(c);
          }),
          this.on("partialdone", function (c) {
            l.partialFlush(c);
          }),
          this.on("endedtimeline", function (c) {
            l.endTimeline(c);
          }),
          this.on("reset", function (c) {
            l.reset(c);
          }),
          l
        );
      }),
        (e.prototype.push = function (l) {
          this.trigger("data", l);
        }),
        (e.prototype.flush = function (l) {
          this.trigger("done", l);
        }),
        (e.prototype.partialFlush = function (l) {
          this.trigger("partialdone", l);
        }),
        (e.prototype.endTimeline = function (l) {
          this.trigger("endedtimeline", l);
        }),
        (e.prototype.reset = function (l) {
          this.trigger("reset", l);
        });
      var i = e,
        s = Math.pow(2, 32),
        n = function (l) {
          var c = new DataView(l.buffer, l.byteOffset, l.byteLength),
            d;
          return c.getBigUint64
            ? ((d = c.getBigUint64(0)),
              d < Number.MAX_SAFE_INTEGER ? Number(d) : d)
            : c.getUint32(0) * s + c.getUint32(4);
        },
        r = { getUint64: n, MAX_UINT32: s },
        a = r.MAX_UINT32,
        o,
        u,
        f,
        p,
        _,
        v,
        y,
        A,
        S,
        E,
        k,
        D,
        R,
        N,
        L,
        z,
        Z,
        ae,
        ne,
        ve,
        de,
        xe,
        Y,
        oe,
        Ne,
        re,
        ue,
        Te,
        ot,
        Nt,
        lt,
        Ke,
        Ji,
        Rr,
        Nr,
        Mt;
      (function () {
        var l;
        if (
          ((Y = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            mvex: [],
            mvhd: [],
            pasp: [],
            sdtp: [],
            smhd: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            styp: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: [],
          }),
          !(typeof Uint8Array > "u"))
        ) {
          for (l in Y)
            Y.hasOwnProperty(l) &&
              (Y[l] = [
                l.charCodeAt(0),
                l.charCodeAt(1),
                l.charCodeAt(2),
                l.charCodeAt(3),
              ]);
          (oe = new Uint8Array([
            "i".charCodeAt(0),
            "s".charCodeAt(0),
            "o".charCodeAt(0),
            "m".charCodeAt(0),
          ])),
            (re = new Uint8Array([
              "a".charCodeAt(0),
              "v".charCodeAt(0),
              "c".charCodeAt(0),
              "1".charCodeAt(0),
            ])),
            (Ne = new Uint8Array([0, 0, 0, 1])),
            (ue = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101,
              114, 0,
            ])),
            (Te = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101,
              114, 0,
            ])),
            (ot = { video: ue, audio: Te }),
            (Ke = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0,
              1,
            ])),
            (lt = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (Ji = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (Rr = Ji),
            (Nr = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (Mt = Ji),
            (Nt = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
        }
      })(),
        (o = function (l) {
          var c = [],
            d = 0,
            h,
            m,
            g;
          for (h = 1; h < arguments.length; h++) c.push(arguments[h]);
          for (h = c.length; h--; ) d += c[h].byteLength;
          for (
            m = new Uint8Array(d + 8),
              g = new DataView(m.buffer, m.byteOffset, m.byteLength),
              g.setUint32(0, m.byteLength),
              m.set(l, 4),
              h = 0,
              d = 8;
            h < c.length;
            h++
          )
            m.set(c[h], d), (d += c[h].byteLength);
          return m;
        }),
        (u = function () {
          return o(Y.dinf, o(Y.dref, Ke));
        }),
        (f = function (l) {
          return o(
            Y.esds,
            new Uint8Array([
              0,
              0,
              0,
              0,
              3,
              25,
              0,
              0,
              0,
              4,
              17,
              64,
              21,
              0,
              6,
              0,
              0,
              0,
              218,
              192,
              0,
              0,
              218,
              192,
              5,
              2,
              (l.audioobjecttype << 3) | (l.samplingfrequencyindex >>> 1),
              (l.samplingfrequencyindex << 7) | (l.channelcount << 3),
              6,
              1,
              2,
            ])
          );
        }),
        (p = function () {
          return o(Y.ftyp, oe, Ne, oe, re);
        }),
        (z = function (l) {
          return o(Y.hdlr, ot[l]);
        }),
        (_ = function (l) {
          return o(Y.mdat, l);
        }),
        (L = function (l) {
          var c = new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            3,
            0,
            1,
            95,
            144,
            (l.duration >>> 24) & 255,
            (l.duration >>> 16) & 255,
            (l.duration >>> 8) & 255,
            l.duration & 255,
            85,
            196,
            0,
            0,
          ]);
          return (
            l.samplerate &&
              ((c[12] = (l.samplerate >>> 24) & 255),
              (c[13] = (l.samplerate >>> 16) & 255),
              (c[14] = (l.samplerate >>> 8) & 255),
              (c[15] = l.samplerate & 255)),
            o(Y.mdhd, c)
          );
        }),
        (N = function (l) {
          return o(Y.mdia, L(l), z(l.type), y(l));
        }),
        (v = function (l) {
          return o(
            Y.mfhd,
            new Uint8Array([
              0,
              0,
              0,
              0,
              (l & 4278190080) >> 24,
              (l & 16711680) >> 16,
              (l & 65280) >> 8,
              l & 255,
            ])
          );
        }),
        (y = function (l) {
          return o(
            Y.minf,
            l.type === "video" ? o(Y.vmhd, Nt) : o(Y.smhd, lt),
            u(),
            ae(l)
          );
        }),
        (A = function (l, c) {
          for (var d = [], h = c.length; h--; ) d[h] = ve(c[h]);
          return o.apply(null, [Y.moof, v(l)].concat(d));
        }),
        (S = function (l) {
          for (var c = l.length, d = []; c--; ) d[c] = D(l[c]);
          return o.apply(null, [Y.moov, k(4294967295)].concat(d).concat(E(l)));
        }),
        (E = function (l) {
          for (var c = l.length, d = []; c--; ) d[c] = de(l[c]);
          return o.apply(null, [Y.mvex].concat(d));
        }),
        (k = function (l) {
          var c = new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            2,
            0,
            1,
            95,
            144,
            (l & 4278190080) >> 24,
            (l & 16711680) >> 16,
            (l & 65280) >> 8,
            l & 255,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            64,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            255,
            255,
            255,
            255,
          ]);
          return o(Y.mvhd, c);
        }),
        (Z = function (l) {
          var c = l.samples || [],
            d = new Uint8Array(4 + c.length),
            h,
            m;
          for (m = 0; m < c.length; m++)
            (h = c[m].flags),
              (d[m + 4] =
                (h.dependsOn << 4) | (h.isDependedOn << 2) | h.hasRedundancy);
          return o(Y.sdtp, d);
        }),
        (ae = function (l) {
          return o(
            Y.stbl,
            ne(l),
            o(Y.stts, Mt),
            o(Y.stsc, Rr),
            o(Y.stsz, Nr),
            o(Y.stco, Ji)
          );
        }),
        (function () {
          var l, c;
          (ne = function (d) {
            return o(
              Y.stsd,
              new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
              d.type === "video" ? l(d) : c(d)
            );
          }),
            (l = function (d) {
              var h = d.sps || [],
                m = d.pps || [],
                g = [],
                T = [],
                b,
                x;
              for (b = 0; b < h.length; b++)
                g.push((h[b].byteLength & 65280) >>> 8),
                  g.push(h[b].byteLength & 255),
                  (g = g.concat(Array.prototype.slice.call(h[b])));
              for (b = 0; b < m.length; b++)
                T.push((m[b].byteLength & 65280) >>> 8),
                  T.push(m[b].byteLength & 255),
                  (T = T.concat(Array.prototype.slice.call(m[b])));
              if (
                ((x = [
                  Y.avc1,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (d.width & 65280) >> 8,
                    d.width & 255,
                    (d.height & 65280) >> 8,
                    d.height & 255,
                    0,
                    72,
                    0,
                    0,
                    0,
                    72,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    19,
                    118,
                    105,
                    100,
                    101,
                    111,
                    106,
                    115,
                    45,
                    99,
                    111,
                    110,
                    116,
                    114,
                    105,
                    98,
                    45,
                    104,
                    108,
                    115,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    24,
                    17,
                    17,
                  ]),
                  o(
                    Y.avcC,
                    new Uint8Array(
                      [
                        1,
                        d.profileIdc,
                        d.profileCompatibility,
                        d.levelIdc,
                        255,
                      ].concat([h.length], g, [m.length], T)
                    )
                  ),
                  o(
                    Y.btrt,
                    new Uint8Array([
                      0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192,
                    ])
                  ),
                ]),
                d.sarRatio)
              ) {
                var w = d.sarRatio[0],
                  P = d.sarRatio[1];
                x.push(
                  o(
                    Y.pasp,
                    new Uint8Array([
                      (w & 4278190080) >> 24,
                      (w & 16711680) >> 16,
                      (w & 65280) >> 8,
                      w & 255,
                      (P & 4278190080) >> 24,
                      (P & 16711680) >> 16,
                      (P & 65280) >> 8,
                      P & 255,
                    ])
                  )
                );
              }
              return o.apply(null, x);
            }),
            (c = function (d) {
              return o(
                Y.mp4a,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (d.channelcount & 65280) >> 8,
                  d.channelcount & 255,
                  (d.samplesize & 65280) >> 8,
                  d.samplesize & 255,
                  0,
                  0,
                  0,
                  0,
                  (d.samplerate & 65280) >> 8,
                  d.samplerate & 255,
                  0,
                  0,
                ]),
                f(d)
              );
            });
        })(),
        (R = function (l) {
          var c = new Uint8Array([
            0,
            0,
            0,
            7,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            (l.id & 4278190080) >> 24,
            (l.id & 16711680) >> 16,
            (l.id & 65280) >> 8,
            l.id & 255,
            0,
            0,
            0,
            0,
            (l.duration & 4278190080) >> 24,
            (l.duration & 16711680) >> 16,
            (l.duration & 65280) >> 8,
            l.duration & 255,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            64,
            0,
            0,
            0,
            (l.width & 65280) >> 8,
            l.width & 255,
            0,
            0,
            (l.height & 65280) >> 8,
            l.height & 255,
            0,
            0,
          ]);
          return o(Y.tkhd, c);
        }),
        (ve = function (l) {
          var c, d, h, m, g, T, b;
          return (
            (c = o(
              Y.tfhd,
              new Uint8Array([
                0,
                0,
                0,
                58,
                (l.id & 4278190080) >> 24,
                (l.id & 16711680) >> 16,
                (l.id & 65280) >> 8,
                l.id & 255,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
              ])
            )),
            (T = Math.floor(l.baseMediaDecodeTime / a)),
            (b = Math.floor(l.baseMediaDecodeTime % a)),
            (d = o(
              Y.tfdt,
              new Uint8Array([
                1,
                0,
                0,
                0,
                (T >>> 24) & 255,
                (T >>> 16) & 255,
                (T >>> 8) & 255,
                T & 255,
                (b >>> 24) & 255,
                (b >>> 16) & 255,
                (b >>> 8) & 255,
                b & 255,
              ])
            )),
            (g = 32 + 20 + 8 + 16 + 8 + 8),
            l.type === "audio"
              ? ((h = xe(l, g)), o(Y.traf, c, d, h))
              : ((m = Z(l)), (h = xe(l, m.length + g)), o(Y.traf, c, d, h, m))
          );
        }),
        (D = function (l) {
          return (l.duration = l.duration || 4294967295), o(Y.trak, R(l), N(l));
        }),
        (de = function (l) {
          var c = new Uint8Array([
            0,
            0,
            0,
            0,
            (l.id & 4278190080) >> 24,
            (l.id & 16711680) >> 16,
            (l.id & 65280) >> 8,
            l.id & 255,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1,
          ]);
          return l.type !== "video" && (c[c.length - 1] = 0), o(Y.trex, c);
        }),
        (function () {
          var l, c, d;
          (d = function (h, m) {
            var g = 0,
              T = 0,
              b = 0,
              x = 0;
            return (
              h.length &&
                (h[0].duration !== void 0 && (g = 1),
                h[0].size !== void 0 && (T = 2),
                h[0].flags !== void 0 && (b = 4),
                h[0].compositionTimeOffset !== void 0 && (x = 8)),
              [
                0,
                0,
                g | T | b | x,
                1,
                (h.length & 4278190080) >>> 24,
                (h.length & 16711680) >>> 16,
                (h.length & 65280) >>> 8,
                h.length & 255,
                (m & 4278190080) >>> 24,
                (m & 16711680) >>> 16,
                (m & 65280) >>> 8,
                m & 255,
              ]
            );
          }),
            (c = function (h, m) {
              var g, T, b, x, w, P;
              for (
                x = h.samples || [],
                  m += 8 + 12 + 16 * x.length,
                  b = d(x, m),
                  T = new Uint8Array(b.length + x.length * 16),
                  T.set(b),
                  g = b.length,
                  P = 0;
                P < x.length;
                P++
              )
                (w = x[P]),
                  (T[g++] = (w.duration & 4278190080) >>> 24),
                  (T[g++] = (w.duration & 16711680) >>> 16),
                  (T[g++] = (w.duration & 65280) >>> 8),
                  (T[g++] = w.duration & 255),
                  (T[g++] = (w.size & 4278190080) >>> 24),
                  (T[g++] = (w.size & 16711680) >>> 16),
                  (T[g++] = (w.size & 65280) >>> 8),
                  (T[g++] = w.size & 255),
                  (T[g++] = (w.flags.isLeading << 2) | w.flags.dependsOn),
                  (T[g++] =
                    (w.flags.isDependedOn << 6) |
                    (w.flags.hasRedundancy << 4) |
                    (w.flags.paddingValue << 1) |
                    w.flags.isNonSyncSample),
                  (T[g++] = w.flags.degradationPriority & (240 << 8)),
                  (T[g++] = w.flags.degradationPriority & 15),
                  (T[g++] = (w.compositionTimeOffset & 4278190080) >>> 24),
                  (T[g++] = (w.compositionTimeOffset & 16711680) >>> 16),
                  (T[g++] = (w.compositionTimeOffset & 65280) >>> 8),
                  (T[g++] = w.compositionTimeOffset & 255);
              return o(Y.trun, T);
            }),
            (l = function (h, m) {
              var g, T, b, x, w, P;
              for (
                x = h.samples || [],
                  m += 8 + 12 + 8 * x.length,
                  b = d(x, m),
                  g = new Uint8Array(b.length + x.length * 8),
                  g.set(b),
                  T = b.length,
                  P = 0;
                P < x.length;
                P++
              )
                (w = x[P]),
                  (g[T++] = (w.duration & 4278190080) >>> 24),
                  (g[T++] = (w.duration & 16711680) >>> 16),
                  (g[T++] = (w.duration & 65280) >>> 8),
                  (g[T++] = w.duration & 255),
                  (g[T++] = (w.size & 4278190080) >>> 24),
                  (g[T++] = (w.size & 16711680) >>> 16),
                  (g[T++] = (w.size & 65280) >>> 8),
                  (g[T++] = w.size & 255);
              return o(Y.trun, g);
            }),
            (xe = function (h, m) {
              return h.type === "audio" ? l(h, m) : c(h, m);
            });
        })();
      var Ss = {
          ftyp: p,
          mdat: _,
          moof: A,
          moov: S,
          initSegment: function (l) {
            var c = p(),
              d = S(l),
              h;
            return (
              (h = new Uint8Array(c.byteLength + d.byteLength)),
              h.set(c),
              h.set(d, c.byteLength),
              h
            );
          },
        },
        Mr = function (l) {
          var c,
            d,
            h = [],
            m = [];
          for (
            m.byteLength = 0,
              m.nalCount = 0,
              m.duration = 0,
              h.byteLength = 0,
              c = 0;
            c < l.length;
            c++
          )
            (d = l[c]),
              d.nalUnitType === "access_unit_delimiter_rbsp"
                ? (h.length &&
                    ((h.duration = d.dts - h.dts),
                    (m.byteLength += h.byteLength),
                    (m.nalCount += h.length),
                    (m.duration += h.duration),
                    m.push(h)),
                  (h = [d]),
                  (h.byteLength = d.data.byteLength),
                  (h.pts = d.pts),
                  (h.dts = d.dts))
                : (d.nalUnitType ===
                    "slice_layer_without_partitioning_rbsp_idr" &&
                    (h.keyFrame = !0),
                  (h.duration = d.dts - h.dts),
                  (h.byteLength += d.data.byteLength),
                  h.push(d));
          return (
            m.length &&
              (!h.duration || h.duration <= 0) &&
              (h.duration = m[m.length - 1].duration),
            (m.byteLength += h.byteLength),
            (m.nalCount += h.length),
            (m.duration += h.duration),
            m.push(h),
            m
          );
        },
        Bi = function (l) {
          var c,
            d,
            h = [],
            m = [];
          for (
            h.byteLength = 0,
              h.nalCount = 0,
              h.duration = 0,
              h.pts = l[0].pts,
              h.dts = l[0].dts,
              m.byteLength = 0,
              m.nalCount = 0,
              m.duration = 0,
              m.pts = l[0].pts,
              m.dts = l[0].dts,
              c = 0;
            c < l.length;
            c++
          )
            (d = l[c]),
              d.keyFrame
                ? (h.length &&
                    (m.push(h),
                    (m.byteLength += h.byteLength),
                    (m.nalCount += h.nalCount),
                    (m.duration += h.duration)),
                  (h = [d]),
                  (h.nalCount = d.length),
                  (h.byteLength = d.byteLength),
                  (h.pts = d.pts),
                  (h.dts = d.dts),
                  (h.duration = d.duration))
                : ((h.duration += d.duration),
                  (h.nalCount += d.length),
                  (h.byteLength += d.byteLength),
                  h.push(d));
          return (
            m.length &&
              h.duration <= 0 &&
              (h.duration = m[m.length - 1].duration),
            (m.byteLength += h.byteLength),
            (m.nalCount += h.nalCount),
            (m.duration += h.duration),
            m.push(h),
            m
          );
        },
        Cn = function (l) {
          var c;
          return (
            !l[0][0].keyFrame &&
              l.length > 1 &&
              ((c = l.shift()),
              (l.byteLength -= c.byteLength),
              (l.nalCount -= c.nalCount),
              (l[0][0].dts = c.dts),
              (l[0][0].pts = c.pts),
              (l[0][0].duration += c.duration)),
            l
          );
        },
        wn = function () {
          return {
            size: 0,
            flags: {
              isLeading: 0,
              dependsOn: 1,
              isDependedOn: 0,
              hasRedundancy: 0,
              degradationPriority: 0,
              isNonSyncSample: 1,
            },
          };
        },
        I = function (l, c) {
          var d = wn();
          return (
            (d.dataOffset = c),
            (d.compositionTimeOffset = l.pts - l.dts),
            (d.duration = l.duration),
            (d.size = 4 * l.length),
            (d.size += l.byteLength),
            l.keyFrame &&
              ((d.flags.dependsOn = 2), (d.flags.isNonSyncSample = 0)),
            d
          );
        },
        O = function (l, c) {
          var d,
            h,
            m,
            g,
            T,
            b = c || 0,
            x = [];
          for (d = 0; d < l.length; d++)
            for (g = l[d], h = 0; h < g.length; h++)
              (T = g[h]), (m = I(T, b)), (b += m.size), x.push(m);
          return x;
        },
        F = function (l) {
          var c,
            d,
            h,
            m,
            g,
            T,
            b = 0,
            x = l.byteLength,
            w = l.nalCount,
            P = x + 4 * w,
            U = new Uint8Array(P),
            J = new DataView(U.buffer);
          for (c = 0; c < l.length; c++)
            for (m = l[c], d = 0; d < m.length; d++)
              for (g = m[d], h = 0; h < g.length; h++)
                (T = g[h]),
                  J.setUint32(b, T.data.byteLength),
                  (b += 4),
                  U.set(T.data, b),
                  (b += T.data.byteLength);
          return U;
        },
        V = function (l, c) {
          var d,
            h = c || 0,
            m = [];
          return (d = I(l, h)), m.push(d), m;
        },
        H = function (l) {
          var c,
            d,
            h = 0,
            m = l.byteLength,
            g = l.length,
            T = m + 4 * g,
            b = new Uint8Array(T),
            x = new DataView(b.buffer);
          for (c = 0; c < l.length; c++)
            (d = l[c]),
              x.setUint32(h, d.data.byteLength),
              (h += 4),
              b.set(d.data, h),
              (h += d.data.byteLength);
          return b;
        },
        G = {
          groupNalsIntoFrames: Mr,
          groupFramesIntoGops: Bi,
          extendFirstKeyFrame: Cn,
          generateSampleTable: O,
          concatenateNalData: F,
          generateSampleTableForFrame: V,
          concatenateNalDataForFrame: H,
        },
        X = [33, 16, 5, 32, 164, 27],
        q = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
        j = function (l) {
          for (var c = []; l--; ) c.push(0);
          return c;
        },
        W = function (l) {
          return Object.keys(l).reduce(function (c, d) {
            return (
              (c[d] = new Uint8Array(
                l[d].reduce(function (h, m) {
                  return h.concat(m);
                }, [])
              )),
              c
            );
          }, {});
        },
        te,
        ee = function () {
          if (!te) {
            var l = {
              96e3: [X, [227, 64], j(154), [56]],
              88200: [X, [231], j(170), [56]],
              64e3: [X, [248, 192], j(240), [56]],
              48e3: [X, [255, 192], j(268), [55, 148, 128], j(54), [112]],
              44100: [X, [255, 192], j(268), [55, 163, 128], j(84), [112]],
              32e3: [X, [255, 192], j(268), [55, 234], j(226), [112]],
              24e3: [
                X,
                [255, 192],
                j(268),
                [55, 255, 128],
                j(268),
                [111, 112],
                j(126),
                [224],
              ],
              16e3: [
                X,
                [255, 192],
                j(268),
                [55, 255, 128],
                j(268),
                [111, 255],
                j(269),
                [223, 108],
                j(195),
                [1, 192],
              ],
              12e3: [
                q,
                j(268),
                [3, 127, 248],
                j(268),
                [6, 255, 240],
                j(268),
                [13, 255, 224],
                j(268),
                [27, 253, 128],
                j(259),
                [56],
              ],
              11025: [
                q,
                j(268),
                [3, 127, 248],
                j(268),
                [6, 255, 240],
                j(268),
                [13, 255, 224],
                j(268),
                [27, 255, 192],
                j(268),
                [55, 175, 128],
                j(108),
                [112],
              ],
              8e3: [q, j(268), [3, 121, 16], j(47), [7]],
            };
            te = W(l);
          }
          return te;
        },
        ie = 9e4,
        ce,
        ge,
        we,
        Ee,
        Be,
        Tt,
        xi;
      (ce = function (l) {
        return l * ie;
      }),
        (ge = function (l, c) {
          return l * c;
        }),
        (we = function (l) {
          return l / ie;
        }),
        (Ee = function (l, c) {
          return l / c;
        }),
        (Be = function (l, c) {
          return ce(Ee(l, c));
        }),
        (Tt = function (l, c) {
          return ge(we(l), c);
        }),
        (xi = function (l, c, d) {
          return we(d ? l : l - c);
        });
      var Ie = {
          ONE_SECOND_IN_TS: ie,
          secondsToVideoTs: ce,
          secondsToAudioTs: ge,
          videoTsToSeconds: we,
          audioTsToSeconds: Ee,
          audioTsToVideoTs: Be,
          videoTsToAudioTs: Tt,
          metadataTsToSeconds: xi,
        },
        Zi = ee,
        es = Ie,
        ut = function (l) {
          var c,
            d,
            h = 0;
          for (c = 0; c < l.length; c++) (d = l[c]), (h += d.data.byteLength);
          return h;
        },
        Ut = function (l, c, d, h) {
          var m,
            g = 0,
            T = 0,
            b = 0,
            x = 0,
            w,
            P,
            U;
          if (
            c.length &&
            ((m = es.audioTsToVideoTs(l.baseMediaDecodeTime, l.samplerate)),
            (g = Math.ceil(es.ONE_SECOND_IN_TS / (l.samplerate / 1024))),
            d &&
              h &&
              ((T = m - Math.max(d, h)), (b = Math.floor(T / g)), (x = b * g)),
            !(b < 1 || x > es.ONE_SECOND_IN_TS / 2))
          ) {
            for (
              w = Zi()[l.samplerate], w || (w = c[0].data), P = 0;
              P < b;
              P++
            )
              (U = c[0]),
                c.splice(0, 0, { data: w, dts: U.dts - g, pts: U.pts - g });
            return (
              (l.baseMediaDecodeTime -= Math.floor(
                es.videoTsToAudioTs(x, l.samplerate)
              )),
              x
            );
          }
        },
        Ur = function (l, c, d) {
          return c.minSegmentDts >= d
            ? l
            : ((c.minSegmentDts = 1 / 0),
              l.filter(function (h) {
                return h.dts >= d
                  ? ((c.minSegmentDts = Math.min(c.minSegmentDts, h.dts)),
                    (c.minSegmentPts = c.minSegmentDts),
                    !0)
                  : !1;
              }));
        },
        F0 = function (l) {
          var c,
            d,
            h = [];
          for (c = 0; c < l.length; c++)
            (d = l[c]), h.push({ size: d.data.byteLength, duration: 1024 });
          return h;
        },
        B0 = function (l) {
          var c,
            d,
            h = 0,
            m = new Uint8Array(ut(l));
          for (c = 0; c < l.length; c++)
            (d = l[c]), m.set(d.data, h), (h += d.data.byteLength);
          return m;
        },
        $0 = {
          prefixWithSilence: Ut,
          trimAdtsFramesByEarliestDts: Ur,
          generateSampleTable: F0,
          concatenateFrameData: B0,
        },
        j0 = Ie.ONE_SECOND_IN_TS,
        H0 = function (l, c) {
          typeof c.pts == "number" &&
            (l.timelineStartInfo.pts === void 0 &&
              (l.timelineStartInfo.pts = c.pts),
            l.minSegmentPts === void 0
              ? (l.minSegmentPts = c.pts)
              : (l.minSegmentPts = Math.min(l.minSegmentPts, c.pts)),
            l.maxSegmentPts === void 0
              ? (l.maxSegmentPts = c.pts)
              : (l.maxSegmentPts = Math.max(l.maxSegmentPts, c.pts))),
            typeof c.dts == "number" &&
              (l.timelineStartInfo.dts === void 0 &&
                (l.timelineStartInfo.dts = c.dts),
              l.minSegmentDts === void 0
                ? (l.minSegmentDts = c.dts)
                : (l.minSegmentDts = Math.min(l.minSegmentDts, c.dts)),
              l.maxSegmentDts === void 0
                ? (l.maxSegmentDts = c.dts)
                : (l.maxSegmentDts = Math.max(l.maxSegmentDts, c.dts)));
        },
        V0 = function (l) {
          delete l.minSegmentDts,
            delete l.maxSegmentDts,
            delete l.minSegmentPts,
            delete l.maxSegmentPts;
        },
        W0 = function (l, c) {
          var d,
            h,
            m = l.minSegmentDts;
          return (
            c || (m -= l.timelineStartInfo.dts),
            (d = l.timelineStartInfo.baseMediaDecodeTime),
            (d += m),
            (d = Math.max(0, d)),
            l.type === "audio" &&
              ((h = l.samplerate / j0), (d *= h), (d = Math.floor(d))),
            d
          );
        },
        q0 = {
          clearDtsInfo: V0,
          calculateTrackBaseMediaDecodeTime: W0,
          collectDtsInfo: H0,
        },
        Qc = 4,
        z0 = 128,
        G0 = function (l) {
          for (
            var c = 0, d = { payloadType: -1, payloadSize: 0 }, h = 0, m = 0;
            c < l.byteLength && l[c] !== z0;

          ) {
            for (; l[c] === 255; ) (h += 255), c++;
            for (h += l[c++]; l[c] === 255; ) (m += 255), c++;
            if (((m += l[c++]), !d.payload && h === Qc)) {
              var g = String.fromCharCode(
                l[c + 3],
                l[c + 4],
                l[c + 5],
                l[c + 6]
              );
              if (g === "GA94") {
                (d.payloadType = h),
                  (d.payloadSize = m),
                  (d.payload = l.subarray(c, c + m));
                break;
              } else d.payload = void 0;
            }
            (c += m), (h = 0), (m = 0);
          }
          return d;
        },
        K0 = function (l) {
          return l.payload[0] !== 181 ||
            ((l.payload[1] << 8) | l.payload[2]) !== 49 ||
            String.fromCharCode(
              l.payload[3],
              l.payload[4],
              l.payload[5],
              l.payload[6]
            ) !== "GA94" ||
            l.payload[7] !== 3
            ? null
            : l.payload.subarray(8, l.payload.length - 1);
        },
        X0 = function (l, c) {
          var d = [],
            h,
            m,
            g,
            T;
          if (!(c[0] & 64)) return d;
          for (m = c[0] & 31, h = 0; h < m; h++)
            (g = h * 3),
              (T = { type: c[g + 2] & 3, pts: l }),
              c[g + 2] & 4 &&
                ((T.ccData = (c[g + 3] << 8) | c[g + 4]), d.push(T));
          return d;
        },
        Y0 = function (l) {
          for (var c = l.byteLength, d = [], h = 1, m, g; h < c - 2; )
            l[h] === 0 && l[h + 1] === 0 && l[h + 2] === 3
              ? (d.push(h + 2), (h += 2))
              : h++;
          if (d.length === 0) return l;
          (m = c - d.length), (g = new Uint8Array(m));
          var T = 0;
          for (h = 0; h < m; T++, h++)
            T === d[0] && (T++, d.shift()), (g[h] = l[T]);
          return g;
        },
        Jc = {
          parseSei: G0,
          parseUserData: K0,
          parseCaptionPackets: X0,
          discardEmulationPreventionBytes: Y0,
          USER_DATA_REGISTERED_ITU_T_T35: Qc,
        },
        qo = i,
        Fr = Jc,
        bt = function (l) {
          (l = l || {}),
            bt.prototype.init.call(this),
            (this.parse708captions_ =
              typeof l.parse708captions == "boolean" ? l.parse708captions : !0),
            (this.captionPackets_ = []),
            (this.ccStreams_ = [
              new Me(0, 0),
              new Me(0, 1),
              new Me(1, 0),
              new Me(1, 1),
            ]),
            this.parse708captions_ &&
              (this.cc708Stream_ = new Oe({
                captionServices: l.captionServices,
              })),
            this.reset(),
            this.ccStreams_.forEach(function (c) {
              c.on("data", this.trigger.bind(this, "data")),
                c.on("partialdone", this.trigger.bind(this, "partialdone")),
                c.on("done", this.trigger.bind(this, "done"));
            }, this),
            this.parse708captions_ &&
              (this.cc708Stream_.on("data", this.trigger.bind(this, "data")),
              this.cc708Stream_.on(
                "partialdone",
                this.trigger.bind(this, "partialdone")
              ),
              this.cc708Stream_.on("done", this.trigger.bind(this, "done")));
        };
      (bt.prototype = new qo()),
        (bt.prototype.push = function (l) {
          var c, d, h;
          if (
            l.nalUnitType === "sei_rbsp" &&
            ((c = Fr.parseSei(l.escapedRBSP)),
            !!c.payload &&
              c.payloadType === Fr.USER_DATA_REGISTERED_ITU_T_T35 &&
              ((d = Fr.parseUserData(c)), !!d))
          ) {
            if (l.dts < this.latestDts_) {
              this.ignoreNextEqualDts_ = !0;
              return;
            } else if (l.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
              this.numSameDts_--,
                this.numSameDts_ || (this.ignoreNextEqualDts_ = !1);
              return;
            }
            (h = Fr.parseCaptionPackets(l.pts, d)),
              (this.captionPackets_ = this.captionPackets_.concat(h)),
              this.latestDts_ !== l.dts && (this.numSameDts_ = 0),
              this.numSameDts_++,
              (this.latestDts_ = l.dts);
          }
        }),
        (bt.prototype.flushCCStreams = function (l) {
          this.ccStreams_.forEach(function (c) {
            return l === "flush" ? c.flush() : c.partialFlush();
          }, this);
        }),
        (bt.prototype.flushStream = function (l) {
          if (!this.captionPackets_.length) {
            this.flushCCStreams(l);
            return;
          }
          this.captionPackets_.forEach(function (c, d) {
            c.presortIndex = d;
          }),
            this.captionPackets_.sort(function (c, d) {
              return c.pts === d.pts
                ? c.presortIndex - d.presortIndex
                : c.pts - d.pts;
            }),
            this.captionPackets_.forEach(function (c) {
              c.type < 2
                ? this.dispatchCea608Packet(c)
                : this.dispatchCea708Packet(c);
            }, this),
            (this.captionPackets_.length = 0),
            this.flushCCStreams(l);
        }),
        (bt.prototype.flush = function () {
          return this.flushStream("flush");
        }),
        (bt.prototype.partialFlush = function () {
          return this.flushStream("partialFlush");
        }),
        (bt.prototype.reset = function () {
          (this.latestDts_ = null),
            (this.ignoreNextEqualDts_ = !1),
            (this.numSameDts_ = 0),
            (this.activeCea608Channel_ = [null, null]),
            this.ccStreams_.forEach(function (l) {
              l.reset();
            });
        }),
        (bt.prototype.dispatchCea608Packet = function (l) {
          this.setsTextOrXDSActive(l)
            ? (this.activeCea608Channel_[l.type] = null)
            : this.setsChannel1Active(l)
            ? (this.activeCea608Channel_[l.type] = 0)
            : this.setsChannel2Active(l) &&
              (this.activeCea608Channel_[l.type] = 1),
            this.activeCea608Channel_[l.type] !== null &&
              this.ccStreams_[
                (l.type << 1) + this.activeCea608Channel_[l.type]
              ].push(l);
        }),
        (bt.prototype.setsChannel1Active = function (l) {
          return (l.ccData & 30720) === 4096;
        }),
        (bt.prototype.setsChannel2Active = function (l) {
          return (l.ccData & 30720) === 6144;
        }),
        (bt.prototype.setsTextOrXDSActive = function (l) {
          return (
            (l.ccData & 28928) === 256 ||
            (l.ccData & 30974) === 4138 ||
            (l.ccData & 30974) === 6186
          );
        }),
        (bt.prototype.dispatchCea708Packet = function (l) {
          this.parse708captions_ && this.cc708Stream_.push(l);
        });
      var Q0 = {
          127: 9834,
          4128: 32,
          4129: 160,
          4133: 8230,
          4138: 352,
          4140: 338,
          4144: 9608,
          4145: 8216,
          4146: 8217,
          4147: 8220,
          4148: 8221,
          4149: 8226,
          4153: 8482,
          4154: 353,
          4156: 339,
          4157: 8480,
          4159: 376,
          4214: 8539,
          4215: 8540,
          4216: 8541,
          4217: 8542,
          4218: 9168,
          4219: 9124,
          4220: 9123,
          4221: 9135,
          4222: 9126,
          4223: 9121,
          4256: 12600,
        },
        J0 = function (l) {
          var c = Q0[l] || l;
          return l & 4096 && l === c ? "" : String.fromCharCode(c);
        },
        Br = function (l) {
          return (32 <= l && l <= 127) || (160 <= l && l <= 255);
        },
        Si = function (l) {
          (this.windowNum = l), this.reset();
        };
      (Si.prototype.reset = function () {
        this.clearText(),
          (this.pendingNewLine = !1),
          (this.winAttr = {}),
          (this.penAttr = {}),
          (this.penLoc = {}),
          (this.penColor = {}),
          (this.visible = 0),
          (this.rowLock = 0),
          (this.columnLock = 0),
          (this.priority = 0),
          (this.relativePositioning = 0),
          (this.anchorVertical = 0),
          (this.anchorHorizontal = 0),
          (this.anchorPoint = 0),
          (this.rowCount = 1),
          (this.virtualRowCount = this.rowCount + 1),
          (this.columnCount = 41),
          (this.windowStyle = 0),
          (this.penStyle = 0);
      }),
        (Si.prototype.getText = function () {
          return this.rows.join(`
`);
        }),
        (Si.prototype.clearText = function () {
          (this.rows = [""]), (this.rowIdx = 0);
        }),
        (Si.prototype.newLine = function (l) {
          for (
            this.rows.length >= this.virtualRowCount &&
              typeof this.beforeRowOverflow == "function" &&
              this.beforeRowOverflow(l),
              this.rows.length > 0 && (this.rows.push(""), this.rowIdx++);
            this.rows.length > this.virtualRowCount;

          )
            this.rows.shift(), this.rowIdx--;
        }),
        (Si.prototype.isEmpty = function () {
          return this.rows.length === 0
            ? !0
            : this.rows.length === 1
            ? this.rows[0] === ""
            : !1;
        }),
        (Si.prototype.addText = function (l) {
          this.rows[this.rowIdx] += l;
        }),
        (Si.prototype.backspace = function () {
          if (!this.isEmpty()) {
            var l = this.rows[this.rowIdx];
            this.rows[this.rowIdx] = l.substr(0, l.length - 1);
          }
        });
      var $r = function (l, c, d) {
        (this.serviceNum = l),
          (this.text = ""),
          (this.currentWindow = new Si(-1)),
          (this.windows = []),
          (this.stream = d),
          typeof c == "string" && this.createTextDecoder(c);
      };
      ($r.prototype.init = function (l, c) {
        this.startPts = l;
        for (var d = 0; d < 8; d++)
          (this.windows[d] = new Si(d)),
            typeof c == "function" && (this.windows[d].beforeRowOverflow = c);
      }),
        ($r.prototype.setCurrentWindow = function (l) {
          this.currentWindow = this.windows[l];
        }),
        ($r.prototype.createTextDecoder = function (l) {
          if (typeof TextDecoder > "u")
            this.stream.trigger("log", {
              level: "warn",
              message:
                "The `encoding` option is unsupported without TextDecoder support",
            });
          else
            try {
              this.textDecoder_ = new TextDecoder(l);
            } catch (c) {
              this.stream.trigger("log", {
                level: "warn",
                message:
                  "TextDecoder could not be created with " +
                  l +
                  " encoding. " +
                  c,
              });
            }
        });
      var Oe = function (l) {
        (l = l || {}), Oe.prototype.init.call(this);
        var c = this,
          d = l.captionServices || {},
          h = {},
          m;
        Object.keys(d).forEach((g) => {
          (m = d[g]), /^SERVICE/.test(g) && (h[g] = m.encoding);
        }),
          (this.serviceEncodings = h),
          (this.current708Packet = null),
          (this.services = {}),
          (this.push = function (g) {
            g.type === 3
              ? (c.new708Packet(), c.add708Bytes(g))
              : (c.current708Packet === null && c.new708Packet(),
                c.add708Bytes(g));
          });
      };
      (Oe.prototype = new qo()),
        (Oe.prototype.new708Packet = function () {
          this.current708Packet !== null && this.push708Packet(),
            (this.current708Packet = { data: [], ptsVals: [] });
        }),
        (Oe.prototype.add708Bytes = function (l) {
          var c = l.ccData,
            d = c >>> 8,
            h = c & 255;
          this.current708Packet.ptsVals.push(l.pts),
            this.current708Packet.data.push(d),
            this.current708Packet.data.push(h);
        }),
        (Oe.prototype.push708Packet = function () {
          var l = this.current708Packet,
            c = l.data,
            d = null,
            h = null,
            m = 0,
            g = c[m++];
          for (l.seq = g >> 6, l.sizeCode = g & 63; m < c.length; m++)
            (g = c[m++]),
              (d = g >> 5),
              (h = g & 31),
              d === 7 && h > 0 && ((g = c[m++]), (d = g)),
              this.pushServiceBlock(d, m, h),
              h > 0 && (m += h - 1);
        }),
        (Oe.prototype.pushServiceBlock = function (l, c, d) {
          var h,
            m = c,
            g = this.current708Packet.data,
            T = this.services[l];
          for (
            T || (T = this.initService(l, m));
            m < c + d && m < g.length;
            m++
          )
            (h = g[m]),
              Br(h)
                ? (m = this.handleText(m, T))
                : h === 24
                ? (m = this.multiByteCharacter(m, T))
                : h === 16
                ? (m = this.extendedCommands(m, T))
                : 128 <= h && h <= 135
                ? (m = this.setCurrentWindow(m, T))
                : 152 <= h && h <= 159
                ? (m = this.defineWindow(m, T))
                : h === 136
                ? (m = this.clearWindows(m, T))
                : h === 140
                ? (m = this.deleteWindows(m, T))
                : h === 137
                ? (m = this.displayWindows(m, T))
                : h === 138
                ? (m = this.hideWindows(m, T))
                : h === 139
                ? (m = this.toggleWindows(m, T))
                : h === 151
                ? (m = this.setWindowAttributes(m, T))
                : h === 144
                ? (m = this.setPenAttributes(m, T))
                : h === 145
                ? (m = this.setPenColor(m, T))
                : h === 146
                ? (m = this.setPenLocation(m, T))
                : h === 143
                ? (T = this.reset(m, T))
                : h === 8
                ? T.currentWindow.backspace()
                : h === 12
                ? T.currentWindow.clearText()
                : h === 13
                ? (T.currentWindow.pendingNewLine = !0)
                : h === 14
                ? T.currentWindow.clearText()
                : h === 141 && m++;
        }),
        (Oe.prototype.extendedCommands = function (l, c) {
          var d = this.current708Packet.data,
            h = d[++l];
          return Br(h) && (l = this.handleText(l, c, { isExtended: !0 })), l;
        }),
        (Oe.prototype.getPts = function (l) {
          return this.current708Packet.ptsVals[Math.floor(l / 2)];
        }),
        (Oe.prototype.initService = function (l, c) {
          var h = "SERVICE" + l,
            d = this,
            h,
            m;
          return (
            h in this.serviceEncodings && (m = this.serviceEncodings[h]),
            (this.services[l] = new $r(l, m, d)),
            this.services[l].init(this.getPts(c), function (g) {
              d.flushDisplayed(g, d.services[l]);
            }),
            this.services[l]
          );
        }),
        (Oe.prototype.handleText = function (l, c, d) {
          var h = d && d.isExtended,
            m = d && d.isMultiByte,
            g = this.current708Packet.data,
            T = h ? 4096 : 0,
            b = g[l],
            x = g[l + 1],
            w = c.currentWindow,
            P,
            U;
          return (
            c.textDecoder_ && !h
              ? (m ? ((U = [b, x]), l++) : (U = [b]),
                (P = c.textDecoder_.decode(new Uint8Array(U))))
              : (P = J0(T | b)),
            w.pendingNewLine && !w.isEmpty() && w.newLine(this.getPts(l)),
            (w.pendingNewLine = !1),
            w.addText(P),
            l
          );
        }),
        (Oe.prototype.multiByteCharacter = function (l, c) {
          var d = this.current708Packet.data,
            h = d[l + 1],
            m = d[l + 2];
          return (
            Br(h) &&
              Br(m) &&
              (l = this.handleText(++l, c, { isMultiByte: !0 })),
            l
          );
        }),
        (Oe.prototype.setCurrentWindow = function (l, c) {
          var d = this.current708Packet.data,
            h = d[l],
            m = h & 7;
          return c.setCurrentWindow(m), l;
        }),
        (Oe.prototype.defineWindow = function (l, c) {
          var d = this.current708Packet.data,
            h = d[l],
            m = h & 7;
          c.setCurrentWindow(m);
          var g = c.currentWindow;
          return (
            (h = d[++l]),
            (g.visible = (h & 32) >> 5),
            (g.rowLock = (h & 16) >> 4),
            (g.columnLock = (h & 8) >> 3),
            (g.priority = h & 7),
            (h = d[++l]),
            (g.relativePositioning = (h & 128) >> 7),
            (g.anchorVertical = h & 127),
            (h = d[++l]),
            (g.anchorHorizontal = h),
            (h = d[++l]),
            (g.anchorPoint = (h & 240) >> 4),
            (g.rowCount = h & 15),
            (h = d[++l]),
            (g.columnCount = h & 63),
            (h = d[++l]),
            (g.windowStyle = (h & 56) >> 3),
            (g.penStyle = h & 7),
            (g.virtualRowCount = g.rowCount + 1),
            l
          );
        }),
        (Oe.prototype.setWindowAttributes = function (l, c) {
          var d = this.current708Packet.data,
            h = d[l],
            m = c.currentWindow.winAttr;
          return (
            (h = d[++l]),
            (m.fillOpacity = (h & 192) >> 6),
            (m.fillRed = (h & 48) >> 4),
            (m.fillGreen = (h & 12) >> 2),
            (m.fillBlue = h & 3),
            (h = d[++l]),
            (m.borderType = (h & 192) >> 6),
            (m.borderRed = (h & 48) >> 4),
            (m.borderGreen = (h & 12) >> 2),
            (m.borderBlue = h & 3),
            (h = d[++l]),
            (m.borderType += (h & 128) >> 5),
            (m.wordWrap = (h & 64) >> 6),
            (m.printDirection = (h & 48) >> 4),
            (m.scrollDirection = (h & 12) >> 2),
            (m.justify = h & 3),
            (h = d[++l]),
            (m.effectSpeed = (h & 240) >> 4),
            (m.effectDirection = (h & 12) >> 2),
            (m.displayEffect = h & 3),
            l
          );
        }),
        (Oe.prototype.flushDisplayed = function (l, c) {
          for (var d = [], h = 0; h < 8; h++)
            c.windows[h].visible &&
              !c.windows[h].isEmpty() &&
              d.push(c.windows[h].getText());
          (c.endPts = l),
            (c.text = d.join(`

`)),
            this.pushCaption(c),
            (c.startPts = l);
        }),
        (Oe.prototype.pushCaption = function (l) {
          l.text !== "" &&
            (this.trigger("data", {
              startPts: l.startPts,
              endPts: l.endPts,
              text: l.text,
              stream: "cc708_" + l.serviceNum,
            }),
            (l.text = ""),
            (l.startPts = l.endPts));
        }),
        (Oe.prototype.displayWindows = function (l, c) {
          var d = this.current708Packet.data,
            h = d[++l],
            m = this.getPts(l);
          this.flushDisplayed(m, c);
          for (var g = 0; g < 8; g++)
            h & (1 << g) && (c.windows[g].visible = 1);
          return l;
        }),
        (Oe.prototype.hideWindows = function (l, c) {
          var d = this.current708Packet.data,
            h = d[++l],
            m = this.getPts(l);
          this.flushDisplayed(m, c);
          for (var g = 0; g < 8; g++)
            h & (1 << g) && (c.windows[g].visible = 0);
          return l;
        }),
        (Oe.prototype.toggleWindows = function (l, c) {
          var d = this.current708Packet.data,
            h = d[++l],
            m = this.getPts(l);
          this.flushDisplayed(m, c);
          for (var g = 0; g < 8; g++)
            h & (1 << g) && (c.windows[g].visible ^= 1);
          return l;
        }),
        (Oe.prototype.clearWindows = function (l, c) {
          var d = this.current708Packet.data,
            h = d[++l],
            m = this.getPts(l);
          this.flushDisplayed(m, c);
          for (var g = 0; g < 8; g++) h & (1 << g) && c.windows[g].clearText();
          return l;
        }),
        (Oe.prototype.deleteWindows = function (l, c) {
          var d = this.current708Packet.data,
            h = d[++l],
            m = this.getPts(l);
          this.flushDisplayed(m, c);
          for (var g = 0; g < 8; g++) h & (1 << g) && c.windows[g].reset();
          return l;
        }),
        (Oe.prototype.setPenAttributes = function (l, c) {
          var d = this.current708Packet.data,
            h = d[l],
            m = c.currentWindow.penAttr;
          return (
            (h = d[++l]),
            (m.textTag = (h & 240) >> 4),
            (m.offset = (h & 12) >> 2),
            (m.penSize = h & 3),
            (h = d[++l]),
            (m.italics = (h & 128) >> 7),
            (m.underline = (h & 64) >> 6),
            (m.edgeType = (h & 56) >> 3),
            (m.fontStyle = h & 7),
            l
          );
        }),
        (Oe.prototype.setPenColor = function (l, c) {
          var d = this.current708Packet.data,
            h = d[l],
            m = c.currentWindow.penColor;
          return (
            (h = d[++l]),
            (m.fgOpacity = (h & 192) >> 6),
            (m.fgRed = (h & 48) >> 4),
            (m.fgGreen = (h & 12) >> 2),
            (m.fgBlue = h & 3),
            (h = d[++l]),
            (m.bgOpacity = (h & 192) >> 6),
            (m.bgRed = (h & 48) >> 4),
            (m.bgGreen = (h & 12) >> 2),
            (m.bgBlue = h & 3),
            (h = d[++l]),
            (m.edgeRed = (h & 48) >> 4),
            (m.edgeGreen = (h & 12) >> 2),
            (m.edgeBlue = h & 3),
            l
          );
        }),
        (Oe.prototype.setPenLocation = function (l, c) {
          var d = this.current708Packet.data,
            h = d[l],
            m = c.currentWindow.penLoc;
          return (
            (c.currentWindow.pendingNewLine = !0),
            (h = d[++l]),
            (m.row = h & 15),
            (h = d[++l]),
            (m.column = h & 63),
            l
          );
        }),
        (Oe.prototype.reset = function (l, c) {
          var d = this.getPts(l);
          return this.flushDisplayed(d, c), this.initService(c.serviceNum, l);
        });
      var Z0 = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          304: 174,
          305: 176,
          306: 189,
          307: 191,
          308: 8482,
          309: 162,
          310: 163,
          311: 9834,
          312: 224,
          313: 160,
          314: 232,
          315: 226,
          316: 234,
          317: 238,
          318: 244,
          319: 251,
          544: 193,
          545: 201,
          546: 211,
          547: 218,
          548: 220,
          549: 252,
          550: 8216,
          551: 161,
          552: 42,
          553: 39,
          554: 8212,
          555: 169,
          556: 8480,
          557: 8226,
          558: 8220,
          559: 8221,
          560: 192,
          561: 194,
          562: 199,
          563: 200,
          564: 202,
          565: 203,
          566: 235,
          567: 206,
          568: 207,
          569: 239,
          570: 212,
          571: 217,
          572: 249,
          573: 219,
          574: 171,
          575: 187,
          800: 195,
          801: 227,
          802: 205,
          803: 204,
          804: 236,
          805: 210,
          806: 242,
          807: 213,
          808: 245,
          809: 123,
          810: 125,
          811: 92,
          812: 94,
          813: 95,
          814: 124,
          815: 126,
          816: 196,
          817: 228,
          818: 214,
          819: 246,
          820: 223,
          821: 165,
          822: 164,
          823: 9474,
          824: 197,
          825: 229,
          826: 216,
          827: 248,
          828: 9484,
          829: 9488,
          830: 9492,
          831: 9496,
        },
        jr = function (l) {
          return l === null ? "" : ((l = Z0[l] || l), String.fromCharCode(l));
        },
        Hr = 14,
        e_ = [
          4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096,
          4864, 4896, 5120, 5152,
        ],
        ts = function () {
          for (var l = [], c = Hr + 1; c--; ) l.push("");
          return l;
        },
        Me = function (l, c) {
          Me.prototype.init.call(this),
            (this.field_ = l || 0),
            (this.dataChannel_ = c || 0),
            (this.name_ =
              "CC" + (((this.field_ << 1) | this.dataChannel_) + 1)),
            this.setConstants(),
            this.reset(),
            (this.push = function (d) {
              var h, m, g, T, b;
              if (((h = d.ccData & 32639), h === this.lastControlCode_)) {
                this.lastControlCode_ = null;
                return;
              }
              if (
                ((h & 61440) === 4096
                  ? (this.lastControlCode_ = h)
                  : h !== this.PADDING_ && (this.lastControlCode_ = null),
                (g = h >>> 8),
                (T = h & 255),
                h !== this.PADDING_)
              )
                if (h === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                else if (h === this.END_OF_CAPTION_)
                  (this.mode_ = "popOn"),
                    this.clearFormatting(d.pts),
                    this.flushDisplayed(d.pts),
                    (m = this.displayed_),
                    (this.displayed_ = this.nonDisplayed_),
                    (this.nonDisplayed_ = m),
                    (this.startPts_ = d.pts);
                else if (h === this.ROLL_UP_2_ROWS_)
                  (this.rollUpRows_ = 2), this.setRollUp(d.pts);
                else if (h === this.ROLL_UP_3_ROWS_)
                  (this.rollUpRows_ = 3), this.setRollUp(d.pts);
                else if (h === this.ROLL_UP_4_ROWS_)
                  (this.rollUpRows_ = 4), this.setRollUp(d.pts);
                else if (h === this.CARRIAGE_RETURN_)
                  this.clearFormatting(d.pts),
                    this.flushDisplayed(d.pts),
                    this.shiftRowsUp_(),
                    (this.startPts_ = d.pts);
                else if (h === this.BACKSPACE_)
                  this.mode_ === "popOn"
                    ? (this.nonDisplayed_[this.row_] = this.nonDisplayed_[
                        this.row_
                      ].slice(0, -1))
                    : (this.displayed_[this.row_] = this.displayed_[
                        this.row_
                      ].slice(0, -1));
                else if (h === this.ERASE_DISPLAYED_MEMORY_)
                  this.flushDisplayed(d.pts), (this.displayed_ = ts());
                else if (h === this.ERASE_NON_DISPLAYED_MEMORY_)
                  this.nonDisplayed_ = ts();
                else if (h === this.RESUME_DIRECT_CAPTIONING_)
                  this.mode_ !== "paintOn" &&
                    (this.flushDisplayed(d.pts), (this.displayed_ = ts())),
                    (this.mode_ = "paintOn"),
                    (this.startPts_ = d.pts);
                else if (this.isSpecialCharacter(g, T))
                  (g = (g & 3) << 8),
                    (b = jr(g | T)),
                    this[this.mode_](d.pts, b),
                    this.column_++;
                else if (this.isExtCharacter(g, T))
                  this.mode_ === "popOn"
                    ? (this.nonDisplayed_[this.row_] = this.nonDisplayed_[
                        this.row_
                      ].slice(0, -1))
                    : (this.displayed_[this.row_] = this.displayed_[
                        this.row_
                      ].slice(0, -1)),
                    (g = (g & 3) << 8),
                    (b = jr(g | T)),
                    this[this.mode_](d.pts, b),
                    this.column_++;
                else if (this.isMidRowCode(g, T))
                  this.clearFormatting(d.pts),
                    this[this.mode_](d.pts, " "),
                    this.column_++,
                    (T & 14) === 14 && this.addFormatting(d.pts, ["i"]),
                    (T & 1) === 1 && this.addFormatting(d.pts, ["u"]);
                else if (this.isOffsetControlCode(g, T)) this.column_ += T & 3;
                else if (this.isPAC(g, T)) {
                  var x = e_.indexOf(h & 7968);
                  this.mode_ === "rollUp" &&
                    (x - this.rollUpRows_ + 1 < 0 && (x = this.rollUpRows_ - 1),
                    this.setRollUp(d.pts, x)),
                    x !== this.row_ &&
                      (this.clearFormatting(d.pts), (this.row_ = x)),
                    T & 1 &&
                      this.formatting_.indexOf("u") === -1 &&
                      this.addFormatting(d.pts, ["u"]),
                    (h & 16) === 16 && (this.column_ = ((h & 14) >> 1) * 4),
                    this.isColorPAC(T) &&
                      (T & 14) === 14 &&
                      this.addFormatting(d.pts, ["i"]);
                } else
                  this.isNormalChar(g) &&
                    (T === 0 && (T = null),
                    (b = jr(g)),
                    (b += jr(T)),
                    this[this.mode_](d.pts, b),
                    (this.column_ += b.length));
            });
        };
      (Me.prototype = new qo()),
        (Me.prototype.flushDisplayed = function (l) {
          var c = this.displayed_
            .map(function (d, h) {
              try {
                return d.trim();
              } catch {
                return (
                  this.trigger("log", {
                    level: "warn",
                    message:
                      "Skipping a malformed 608 caption at index " + h + ".",
                  }),
                  ""
                );
              }
            }, this)
            .join(
              `
`
            )
            .replace(/^\n+|\n+$/g, "");
          c.length &&
            this.trigger("data", {
              startPts: this.startPts_,
              endPts: l,
              text: c,
              stream: this.name_,
            });
        }),
        (Me.prototype.reset = function () {
          (this.mode_ = "popOn"),
            (this.topRow_ = 0),
            (this.startPts_ = 0),
            (this.displayed_ = ts()),
            (this.nonDisplayed_ = ts()),
            (this.lastControlCode_ = null),
            (this.column_ = 0),
            (this.row_ = Hr),
            (this.rollUpRows_ = 2),
            (this.formatting_ = []);
        }),
        (Me.prototype.setConstants = function () {
          this.dataChannel_ === 0
            ? ((this.BASE_ = 16),
              (this.EXT_ = 17),
              (this.CONTROL_ = (20 | this.field_) << 8),
              (this.OFFSET_ = 23))
            : this.dataChannel_ === 1 &&
              ((this.BASE_ = 24),
              (this.EXT_ = 25),
              (this.CONTROL_ = (28 | this.field_) << 8),
              (this.OFFSET_ = 31)),
            (this.PADDING_ = 0),
            (this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 32),
            (this.END_OF_CAPTION_ = this.CONTROL_ | 47),
            (this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 37),
            (this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 38),
            (this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 39),
            (this.CARRIAGE_RETURN_ = this.CONTROL_ | 45),
            (this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 41),
            (this.BACKSPACE_ = this.CONTROL_ | 33),
            (this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 44),
            (this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 46);
        }),
        (Me.prototype.isSpecialCharacter = function (l, c) {
          return l === this.EXT_ && c >= 48 && c <= 63;
        }),
        (Me.prototype.isExtCharacter = function (l, c) {
          return (
            (l === this.EXT_ + 1 || l === this.EXT_ + 2) && c >= 32 && c <= 63
          );
        }),
        (Me.prototype.isMidRowCode = function (l, c) {
          return l === this.EXT_ && c >= 32 && c <= 47;
        }),
        (Me.prototype.isOffsetControlCode = function (l, c) {
          return l === this.OFFSET_ && c >= 33 && c <= 35;
        }),
        (Me.prototype.isPAC = function (l, c) {
          return l >= this.BASE_ && l < this.BASE_ + 8 && c >= 64 && c <= 127;
        }),
        (Me.prototype.isColorPAC = function (l) {
          return (l >= 64 && l <= 79) || (l >= 96 && l <= 127);
        }),
        (Me.prototype.isNormalChar = function (l) {
          return l >= 32 && l <= 127;
        }),
        (Me.prototype.setRollUp = function (l, c) {
          if (
            (this.mode_ !== "rollUp" &&
              ((this.row_ = Hr),
              (this.mode_ = "rollUp"),
              this.flushDisplayed(l),
              (this.nonDisplayed_ = ts()),
              (this.displayed_ = ts())),
            c !== void 0 && c !== this.row_)
          )
            for (var d = 0; d < this.rollUpRows_; d++)
              (this.displayed_[c - d] = this.displayed_[this.row_ - d]),
                (this.displayed_[this.row_ - d] = "");
          c === void 0 && (c = this.row_),
            (this.topRow_ = c - this.rollUpRows_ + 1);
        }),
        (Me.prototype.addFormatting = function (l, c) {
          this.formatting_ = this.formatting_.concat(c);
          var d = c.reduce(function (h, m) {
            return h + "<" + m + ">";
          }, "");
          this[this.mode_](l, d);
        }),
        (Me.prototype.clearFormatting = function (l) {
          if (this.formatting_.length) {
            var c = this.formatting_.reverse().reduce(function (d, h) {
              return d + "</" + h + ">";
            }, "");
            (this.formatting_ = []), this[this.mode_](l, c);
          }
        }),
        (Me.prototype.popOn = function (l, c) {
          var d = this.nonDisplayed_[this.row_];
          (d += c), (this.nonDisplayed_[this.row_] = d);
        }),
        (Me.prototype.rollUp = function (l, c) {
          var d = this.displayed_[this.row_];
          (d += c), (this.displayed_[this.row_] = d);
        }),
        (Me.prototype.shiftRowsUp_ = function () {
          var l;
          for (l = 0; l < this.topRow_; l++) this.displayed_[l] = "";
          for (l = this.row_ + 1; l < Hr + 1; l++) this.displayed_[l] = "";
          for (l = this.topRow_; l < this.row_; l++)
            this.displayed_[l] = this.displayed_[l + 1];
          this.displayed_[this.row_] = "";
        }),
        (Me.prototype.paintOn = function (l, c) {
          var d = this.displayed_[this.row_];
          (d += c), (this.displayed_[this.row_] = d);
        });
      var Zc = { CaptionStream: bt, Cea608Stream: Me, Cea708Stream: Oe },
        Vr = {
          H264_STREAM_TYPE: 27,
          ADTS_STREAM_TYPE: 15,
          METADATA_STREAM_TYPE: 21,
        },
        t_ = i,
        i_ = 8589934592,
        s_ = 4294967296,
        ed = "shared",
        zo = function (l, c) {
          var d = 1;
          for (l > c && (d = -1); Math.abs(c - l) > s_; ) l += d * i_;
          return l;
        },
        Go = function (l) {
          var c, d;
          Go.prototype.init.call(this),
            (this.type_ = l || ed),
            (this.push = function (h) {
              (this.type_ !== ed && h.type !== this.type_) ||
                (d === void 0 && (d = h.dts),
                (h.dts = zo(h.dts, d)),
                (h.pts = zo(h.pts, d)),
                (c = h.dts),
                this.trigger("data", h));
            }),
            (this.flush = function () {
              (d = c), this.trigger("done");
            }),
            (this.endTimeline = function () {
              this.flush(), this.trigger("endedtimeline");
            }),
            (this.discontinuity = function () {
              (d = void 0), (c = void 0);
            }),
            (this.reset = function () {
              this.discontinuity(), this.trigger("reset");
            });
        };
      Go.prototype = new t_();
      var td = { TimestampRolloverStream: Go, handleRollover: zo },
        n_ = (l, c, d) => {
          if (!l) return -1;
          for (var h = d; h < l.length; h++) if (l[h] === c) return h;
          return -1;
        },
        r_ = { typedArrayIndexOf: n_ },
        a_ = i,
        o_ = Vr,
        Wr = r_.typedArrayIndexOf,
        qr = { Iso88591: 0, Utf16: 1, Utf16be: 2, Utf8: 3 },
        id = function (l, c, d) {
          var h,
            m = "";
          for (h = c; h < d; h++)
            m += "%" + ("00" + l[h].toString(16)).slice(-2);
          return m;
        },
        An = function (l, c, d) {
          return decodeURIComponent(id(l, c, d));
        },
        kn = function (l, c, d) {
          return unescape(id(l, c, d));
        },
        zr = function (l) {
          return (l[0] << 21) | (l[1] << 14) | (l[2] << 7) | l[3];
        },
        Gr = {
          APIC: function (l) {
            var c = 1,
              d,
              h,
              m = "-->";
            l.data[0] === qr.Utf8 &&
              ((d = Wr(l.data, 0, c)),
              !(d < 0) &&
                ((l.mimeType = kn(l.data, c, d)),
                (c = d + 1),
                (l.pictureType = l.data[c]),
                c++,
                (h = Wr(l.data, 0, c)),
                !(h < 0) &&
                  ((l.description = An(l.data, c, h)),
                  (c = h + 1),
                  l.mimeType === m
                    ? (l.url = kn(l.data, c, l.data.length))
                    : (l.pictureData = l.data.subarray(c, l.data.length)))));
          },
          "T*": function (l) {
            l.data[0] === qr.Utf8 &&
              ((l.value = An(l.data, 1, l.data.length).replace(/\0*$/, "")),
              (l.values = l.value.split("\0")));
          },
          TXXX: function (l) {
            var c;
            l.data[0] === qr.Utf8 &&
              ((c = Wr(l.data, 0, 1)),
              c !== -1 &&
                ((l.description = An(l.data, 1, c)),
                (l.value = An(l.data, c + 1, l.data.length).replace(
                  /\0*$/,
                  ""
                )),
                (l.data = l.value)));
          },
          "W*": function (l) {
            l.url = kn(l.data, 0, l.data.length).replace(/\0.*$/, "");
          },
          WXXX: function (l) {
            var c;
            l.data[0] === qr.Utf8 &&
              ((c = Wr(l.data, 0, 1)),
              c !== -1 &&
                ((l.description = An(l.data, 1, c)),
                (l.url = kn(l.data, c + 1, l.data.length).replace(
                  /\0.*$/,
                  ""
                ))));
          },
          PRIV: function (l) {
            var c;
            for (c = 0; c < l.data.length; c++)
              if (l.data[c] === 0) {
                l.owner = kn(l.data, 0, c);
                break;
              }
            (l.privateData = l.data.subarray(c + 1)), (l.data = l.privateData);
          },
        },
        Kr;
      (Kr = function (l) {
        var c = { descriptor: l && l.descriptor },
          d = 0,
          h = [],
          m = 0,
          g;
        if (
          (Kr.prototype.init.call(this),
          (this.dispatchType = o_.METADATA_STREAM_TYPE.toString(16)),
          c.descriptor)
        )
          for (g = 0; g < c.descriptor.length; g++)
            this.dispatchType += ("00" + c.descriptor[g].toString(16)).slice(
              -2
            );
        this.push = function (T) {
          var b, x, w, P, U, J;
          if (T.type === "timed-metadata") {
            if (
              (T.dataAlignmentIndicator && ((m = 0), (h.length = 0)),
              h.length === 0 &&
                (T.data.length < 10 ||
                  T.data[0] !== "I".charCodeAt(0) ||
                  T.data[1] !== "D".charCodeAt(0) ||
                  T.data[2] !== "3".charCodeAt(0)))
            ) {
              this.trigger("log", {
                level: "warn",
                message: "Skipping unrecognized metadata packet",
              });
              return;
            }
            if (
              (h.push(T),
              (m += T.data.byteLength),
              h.length === 1 && ((d = zr(T.data.subarray(6, 10))), (d += 10)),
              !(m < d))
            ) {
              for (
                b = {
                  data: new Uint8Array(d),
                  frames: [],
                  pts: h[0].pts,
                  dts: h[0].dts,
                },
                  U = 0;
                U < d;

              )
                b.data.set(h[0].data.subarray(0, d - U), U),
                  (U += h[0].data.byteLength),
                  (m -= h[0].data.byteLength),
                  h.shift();
              (x = 10),
                b.data[5] & 64 &&
                  ((x += 4),
                  (x += zr(b.data.subarray(10, 14))),
                  (d -= zr(b.data.subarray(16, 20))));
              do {
                if (((w = zr(b.data.subarray(x + 4, x + 8))), w < 1)) {
                  this.trigger("log", {
                    level: "warn",
                    message:
                      "Malformed ID3 frame encountered. Skipping remaining metadata parsing.",
                  });
                  break;
                }
                if (
                  ((J = String.fromCharCode(
                    b.data[x],
                    b.data[x + 1],
                    b.data[x + 2],
                    b.data[x + 3]
                  )),
                  (P = { id: J, data: b.data.subarray(x + 10, x + w + 10) }),
                  (P.key = P.id),
                  Gr[P.id]
                    ? Gr[P.id](P)
                    : P.id[0] === "T"
                    ? Gr["T*"](P)
                    : P.id[0] === "W" && Gr["W*"](P),
                  P.owner === "com.apple.streaming.transportStreamTimestamp")
                ) {
                  var $ = P.data,
                    le =
                      (($[3] & 1) << 30) |
                      ($[4] << 22) |
                      ($[5] << 14) |
                      ($[6] << 6) |
                      ($[7] >>> 2);
                  (le *= 4),
                    (le += $[7] & 3),
                    (P.timeStamp = le),
                    b.pts === void 0 &&
                      b.dts === void 0 &&
                      ((b.pts = P.timeStamp), (b.dts = P.timeStamp)),
                    this.trigger("timestamp", P);
                }
                b.frames.push(P), (x += 10), (x += w);
              } while (x < d);
              this.trigger("data", b);
            }
          }
        };
      }),
        (Kr.prototype = new a_());
      var l_ = Kr,
        Ko = i,
        Xo = Zc,
        Vt = Vr,
        u_ = td.TimestampRolloverStream,
        Xr,
        In,
        Yr,
        Es = 188,
        Yo = 71;
      (Xr = function () {
        var l = new Uint8Array(Es),
          c = 0;
        Xr.prototype.init.call(this),
          (this.push = function (d) {
            var h = 0,
              m = Es,
              g;
            for (
              c
                ? ((g = new Uint8Array(d.byteLength + c)),
                  g.set(l.subarray(0, c)),
                  g.set(d, c),
                  (c = 0))
                : (g = d);
              m < g.byteLength;

            ) {
              if (g[h] === Yo && g[m] === Yo) {
                this.trigger("data", g.subarray(h, m)), (h += Es), (m += Es);
                continue;
              }
              h++, m++;
            }
            h < g.byteLength &&
              (l.set(g.subarray(h), 0), (c = g.byteLength - h));
          }),
          (this.flush = function () {
            c === Es && l[0] === Yo && (this.trigger("data", l), (c = 0)),
              this.trigger("done");
          }),
          (this.endTimeline = function () {
            this.flush(), this.trigger("endedtimeline");
          }),
          (this.reset = function () {
            (c = 0), this.trigger("reset");
          });
      }),
        (Xr.prototype = new Ko()),
        (In = function () {
          var l, c, d, h;
          In.prototype.init.call(this),
            (h = this),
            (this.packetsWaitingForPmt = []),
            (this.programMapTable = void 0),
            (l = function (m, g) {
              var T = 0;
              g.payloadUnitStartIndicator && (T += m[T] + 1),
                g.type === "pat" ? c(m.subarray(T), g) : d(m.subarray(T), g);
            }),
            (c = function (m, g) {
              (g.section_number = m[7]),
                (g.last_section_number = m[8]),
                (h.pmtPid = ((m[10] & 31) << 8) | m[11]),
                (g.pmtPid = h.pmtPid);
            }),
            (d = function (m, g) {
              var T, b, x, w;
              if (m[5] & 1) {
                for (
                  h.programMapTable = {
                    video: null,
                    audio: null,
                    "timed-metadata": {},
                  },
                    T = ((m[1] & 15) << 8) | m[2],
                    b = 3 + T - 4,
                    x = ((m[10] & 15) << 8) | m[11],
                    w = 12 + x;
                  w < b;

                ) {
                  var P = m[w],
                    U = ((m[w + 1] & 31) << 8) | m[w + 2];
                  P === Vt.H264_STREAM_TYPE && h.programMapTable.video === null
                    ? (h.programMapTable.video = U)
                    : P === Vt.ADTS_STREAM_TYPE &&
                      h.programMapTable.audio === null
                    ? (h.programMapTable.audio = U)
                    : P === Vt.METADATA_STREAM_TYPE &&
                      (h.programMapTable["timed-metadata"][U] = P),
                    (w += (((m[w + 3] & 15) << 8) | m[w + 4]) + 5);
                }
                g.programMapTable = h.programMapTable;
              }
            }),
            (this.push = function (m) {
              var g = {},
                T = 4;
              if (
                ((g.payloadUnitStartIndicator = !!(m[1] & 64)),
                (g.pid = m[1] & 31),
                (g.pid <<= 8),
                (g.pid |= m[2]),
                (m[3] & 48) >>> 4 > 1 && (T += m[T] + 1),
                g.pid === 0)
              )
                (g.type = "pat"), l(m.subarray(T), g), this.trigger("data", g);
              else if (g.pid === this.pmtPid)
                for (
                  g.type = "pmt", l(m.subarray(T), g), this.trigger("data", g);
                  this.packetsWaitingForPmt.length;

                )
                  this.processPes_.apply(
                    this,
                    this.packetsWaitingForPmt.shift()
                  );
              else
                this.programMapTable === void 0
                  ? this.packetsWaitingForPmt.push([m, T, g])
                  : this.processPes_(m, T, g);
            }),
            (this.processPes_ = function (m, g, T) {
              T.pid === this.programMapTable.video
                ? (T.streamType = Vt.H264_STREAM_TYPE)
                : T.pid === this.programMapTable.audio
                ? (T.streamType = Vt.ADTS_STREAM_TYPE)
                : (T.streamType =
                    this.programMapTable["timed-metadata"][T.pid]),
                (T.type = "pes"),
                (T.data = m.subarray(g)),
                this.trigger("data", T);
            });
        }),
        (In.prototype = new Ko()),
        (In.STREAM_TYPES = { h264: 27, adts: 15 }),
        (Yr = function () {
          var l = this,
            c = !1,
            d = { data: [], size: 0 },
            h = { data: [], size: 0 },
            m = { data: [], size: 0 },
            g,
            T = function (x, w) {
              var P;
              const U = (x[0] << 16) | (x[1] << 8) | x[2];
              (w.data = new Uint8Array()),
                U === 1 &&
                  ((w.packetLength = 6 + ((x[4] << 8) | x[5])),
                  (w.dataAlignmentIndicator = (x[6] & 4) !== 0),
                  (P = x[7]),
                  P & 192 &&
                    ((w.pts =
                      ((x[9] & 14) << 27) |
                      ((x[10] & 255) << 20) |
                      ((x[11] & 254) << 12) |
                      ((x[12] & 255) << 5) |
                      ((x[13] & 254) >>> 3)),
                    (w.pts *= 4),
                    (w.pts += (x[13] & 6) >>> 1),
                    (w.dts = w.pts),
                    P & 64 &&
                      ((w.dts =
                        ((x[14] & 14) << 27) |
                        ((x[15] & 255) << 20) |
                        ((x[16] & 254) << 12) |
                        ((x[17] & 255) << 5) |
                        ((x[18] & 254) >>> 3)),
                      (w.dts *= 4),
                      (w.dts += (x[18] & 6) >>> 1))),
                  (w.data = x.subarray(9 + x[8])));
            },
            b = function (x, w, P) {
              var U = new Uint8Array(x.size),
                J = { type: w },
                $ = 0,
                le = 0,
                fe = !1,
                ze;
              if (!(!x.data.length || x.size < 9)) {
                for (J.trackId = x.data[0].pid, $ = 0; $ < x.data.length; $++)
                  (ze = x.data[$]),
                    U.set(ze.data, le),
                    (le += ze.data.byteLength);
                T(U, J),
                  (fe = w === "video" || J.packetLength <= x.size),
                  (P || fe) && ((x.size = 0), (x.data.length = 0)),
                  fe && l.trigger("data", J);
              }
            };
          Yr.prototype.init.call(this),
            (this.push = function (x) {
              ({
                pat: function () {},
                pes: function () {
                  var w, P;
                  switch (x.streamType) {
                    case Vt.H264_STREAM_TYPE:
                      (w = d), (P = "video");
                      break;
                    case Vt.ADTS_STREAM_TYPE:
                      (w = h), (P = "audio");
                      break;
                    case Vt.METADATA_STREAM_TYPE:
                      (w = m), (P = "timed-metadata");
                      break;
                    default:
                      return;
                  }
                  x.payloadUnitStartIndicator && b(w, P, !0),
                    w.data.push(x),
                    (w.size += x.data.byteLength);
                },
                pmt: function () {
                  var w = { type: "metadata", tracks: [] };
                  (g = x.programMapTable),
                    g.video !== null &&
                      w.tracks.push({
                        timelineStartInfo: { baseMediaDecodeTime: 0 },
                        id: +g.video,
                        codec: "avc",
                        type: "video",
                      }),
                    g.audio !== null &&
                      w.tracks.push({
                        timelineStartInfo: { baseMediaDecodeTime: 0 },
                        id: +g.audio,
                        codec: "adts",
                        type: "audio",
                      }),
                    (c = !0),
                    l.trigger("data", w);
                },
              })[x.type]();
            }),
            (this.reset = function () {
              (d.size = 0),
                (d.data.length = 0),
                (h.size = 0),
                (h.data.length = 0),
                this.trigger("reset");
            }),
            (this.flushStreams_ = function () {
              b(d, "video"), b(h, "audio"), b(m, "timed-metadata");
            }),
            (this.flush = function () {
              if (!c && g) {
                var x = { type: "metadata", tracks: [] };
                g.video !== null &&
                  x.tracks.push({
                    timelineStartInfo: { baseMediaDecodeTime: 0 },
                    id: +g.video,
                    codec: "avc",
                    type: "video",
                  }),
                  g.audio !== null &&
                    x.tracks.push({
                      timelineStartInfo: { baseMediaDecodeTime: 0 },
                      id: +g.audio,
                      codec: "adts",
                      type: "audio",
                    }),
                  l.trigger("data", x);
              }
              (c = !1), this.flushStreams_(), this.trigger("done");
            });
        }),
        (Yr.prototype = new Ko());
      var sd = {
        PAT_PID: 0,
        MP2T_PACKET_LENGTH: Es,
        TransportPacketStream: Xr,
        TransportParseStream: In,
        ElementaryStream: Yr,
        TimestampRolloverStream: u_,
        CaptionStream: Xo.CaptionStream,
        Cea608Stream: Xo.Cea608Stream,
        Cea708Stream: Xo.Cea708Stream,
        MetadataStream: l_,
      };
      for (var Qo in Vt) Vt.hasOwnProperty(Qo) && (sd[Qo] = Vt[Qo]);
      var c_ = sd,
        d_ = i,
        h_ = Ie.ONE_SECOND_IN_TS,
        Qr,
        nd = [
          96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025,
          8e3, 7350,
        ];
      (Qr = function (l) {
        var c,
          d = 0;
        Qr.prototype.init.call(this),
          (this.skipWarn_ = function (h, m) {
            this.trigger("log", {
              level: "warn",
              message: `adts skiping bytes ${h} to ${m} in frame ${d} outside syncword`,
            });
          }),
          (this.push = function (h) {
            var m = 0,
              g,
              T,
              b,
              x,
              w;
            if ((l || (d = 0), h.type === "audio")) {
              c && c.length
                ? ((b = c),
                  (c = new Uint8Array(b.byteLength + h.data.byteLength)),
                  c.set(b),
                  c.set(h.data, b.byteLength))
                : (c = h.data);
              for (var P; m + 7 < c.length; ) {
                if (c[m] !== 255 || (c[m + 1] & 246) !== 240) {
                  typeof P != "number" && (P = m), m++;
                  continue;
                }
                if (
                  (typeof P == "number" && (this.skipWarn_(P, m), (P = null)),
                  (T = (~c[m + 1] & 1) * 2),
                  (g =
                    ((c[m + 3] & 3) << 11) |
                    (c[m + 4] << 3) |
                    ((c[m + 5] & 224) >> 5)),
                  (x = ((c[m + 6] & 3) + 1) * 1024),
                  (w = (x * h_) / nd[(c[m + 2] & 60) >>> 2]),
                  c.byteLength - m < g)
                )
                  break;
                this.trigger("data", {
                  pts: h.pts + d * w,
                  dts: h.dts + d * w,
                  sampleCount: x,
                  audioobjecttype: ((c[m + 2] >>> 6) & 3) + 1,
                  channelcount:
                    ((c[m + 2] & 1) << 2) | ((c[m + 3] & 192) >>> 6),
                  samplerate: nd[(c[m + 2] & 60) >>> 2],
                  samplingfrequencyindex: (c[m + 2] & 60) >>> 2,
                  samplesize: 16,
                  data: c.subarray(m + 7 + T, m + g),
                }),
                  d++,
                  (m += g);
              }
              typeof P == "number" && (this.skipWarn_(P, m), (P = null)),
                (c = c.subarray(m));
            }
          }),
          (this.flush = function () {
            (d = 0), this.trigger("done");
          }),
          (this.reset = function () {
            (c = void 0), this.trigger("reset");
          }),
          (this.endTimeline = function () {
            (c = void 0), this.trigger("endedtimeline");
          });
      }),
        (Qr.prototype = new d_());
      var f_ = Qr,
        rd;
      rd = function (l) {
        var c = l.byteLength,
          d = 0,
          h = 0;
        (this.length = function () {
          return 8 * c;
        }),
          (this.bitsAvailable = function () {
            return 8 * c + h;
          }),
          (this.loadWord = function () {
            var m = l.byteLength - c,
              g = new Uint8Array(4),
              T = Math.min(4, c);
            if (T === 0) throw new Error("no bytes available");
            g.set(l.subarray(m, m + T)),
              (d = new DataView(g.buffer).getUint32(0)),
              (h = T * 8),
              (c -= T);
          }),
          (this.skipBits = function (m) {
            var g;
            h > m
              ? ((d <<= m), (h -= m))
              : ((m -= h),
                (g = Math.floor(m / 8)),
                (m -= g * 8),
                (c -= g),
                this.loadWord(),
                (d <<= m),
                (h -= m));
          }),
          (this.readBits = function (m) {
            var g = Math.min(h, m),
              T = d >>> (32 - g);
            return (
              (h -= g),
              h > 0 ? (d <<= g) : c > 0 && this.loadWord(),
              (g = m - g),
              g > 0 ? (T << g) | this.readBits(g) : T
            );
          }),
          (this.skipLeadingZeros = function () {
            var m;
            for (m = 0; m < h; ++m)
              if (d & (2147483648 >>> m)) return (d <<= m), (h -= m), m;
            return this.loadWord(), m + this.skipLeadingZeros();
          }),
          (this.skipUnsignedExpGolomb = function () {
            this.skipBits(1 + this.skipLeadingZeros());
          }),
          (this.skipExpGolomb = function () {
            this.skipBits(1 + this.skipLeadingZeros());
          }),
          (this.readUnsignedExpGolomb = function () {
            var m = this.skipLeadingZeros();
            return this.readBits(m + 1) - 1;
          }),
          (this.readExpGolomb = function () {
            var m = this.readUnsignedExpGolomb();
            return 1 & m ? (1 + m) >>> 1 : -1 * (m >>> 1);
          }),
          (this.readBoolean = function () {
            return this.readBits(1) === 1;
          }),
          (this.readUnsignedByte = function () {
            return this.readBits(8);
          }),
          this.loadWord();
      };
      var p_ = rd,
        ad = i,
        m_ = p_,
        Jr,
        On,
        od;
      (On = function () {
        var l = 0,
          c,
          d;
        On.prototype.init.call(this),
          (this.push = function (h) {
            var m;
            d
              ? ((m = new Uint8Array(d.byteLength + h.data.byteLength)),
                m.set(d),
                m.set(h.data, d.byteLength),
                (d = m))
              : (d = h.data);
            for (var g = d.byteLength; l < g - 3; l++)
              if (d[l + 2] === 1) {
                c = l + 5;
                break;
              }
            for (; c < g; )
              switch (d[c]) {
                case 0:
                  if (d[c - 1] !== 0) {
                    c += 2;
                    break;
                  } else if (d[c - 2] !== 0) {
                    c++;
                    break;
                  }
                  l + 3 !== c - 2 &&
                    this.trigger("data", d.subarray(l + 3, c - 2));
                  do c++;
                  while (d[c] !== 1 && c < g);
                  (l = c - 2), (c += 3);
                  break;
                case 1:
                  if (d[c - 1] !== 0 || d[c - 2] !== 0) {
                    c += 3;
                    break;
                  }
                  this.trigger("data", d.subarray(l + 3, c - 2)),
                    (l = c - 2),
                    (c += 3);
                  break;
                default:
                  c += 3;
                  break;
              }
            (d = d.subarray(l)), (c -= l), (l = 0);
          }),
          (this.reset = function () {
            (d = null), (l = 0), this.trigger("reset");
          }),
          (this.flush = function () {
            d && d.byteLength > 3 && this.trigger("data", d.subarray(l + 3)),
              (d = null),
              (l = 0),
              this.trigger("done");
          }),
          (this.endTimeline = function () {
            this.flush(), this.trigger("endedtimeline");
          });
      }),
        (On.prototype = new ad()),
        (od = {
          100: !0,
          110: !0,
          122: !0,
          244: !0,
          44: !0,
          83: !0,
          86: !0,
          118: !0,
          128: !0,
          138: !0,
          139: !0,
          134: !0,
        }),
        (Jr = function () {
          var l = new On(),
            c,
            d,
            h,
            m,
            g,
            T,
            b;
          Jr.prototype.init.call(this),
            (c = this),
            (this.push = function (x) {
              x.type === "video" &&
                ((d = x.trackId), (h = x.pts), (m = x.dts), l.push(x));
            }),
            l.on("data", function (x) {
              var w = {
                trackId: d,
                pts: h,
                dts: m,
                data: x,
                nalUnitTypeCode: x[0] & 31,
              };
              switch (w.nalUnitTypeCode) {
                case 5:
                  w.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                  break;
                case 6:
                  (w.nalUnitType = "sei_rbsp"),
                    (w.escapedRBSP = g(x.subarray(1)));
                  break;
                case 7:
                  (w.nalUnitType = "seq_parameter_set_rbsp"),
                    (w.escapedRBSP = g(x.subarray(1))),
                    (w.config = T(w.escapedRBSP));
                  break;
                case 8:
                  w.nalUnitType = "pic_parameter_set_rbsp";
                  break;
                case 9:
                  w.nalUnitType = "access_unit_delimiter_rbsp";
                  break;
              }
              c.trigger("data", w);
            }),
            l.on("done", function () {
              c.trigger("done");
            }),
            l.on("partialdone", function () {
              c.trigger("partialdone");
            }),
            l.on("reset", function () {
              c.trigger("reset");
            }),
            l.on("endedtimeline", function () {
              c.trigger("endedtimeline");
            }),
            (this.flush = function () {
              l.flush();
            }),
            (this.partialFlush = function () {
              l.partialFlush();
            }),
            (this.reset = function () {
              l.reset();
            }),
            (this.endTimeline = function () {
              l.endTimeline();
            }),
            (b = function (x, w) {
              var P = 8,
                U = 8,
                J,
                $;
              for (J = 0; J < x; J++)
                U !== 0 && (($ = w.readExpGolomb()), (U = (P + $ + 256) % 256)),
                  (P = U === 0 ? P : U);
            }),
            (g = function (x) {
              for (var w = x.byteLength, P = [], U = 1, J, $; U < w - 2; )
                x[U] === 0 && x[U + 1] === 0 && x[U + 2] === 3
                  ? (P.push(U + 2), (U += 2))
                  : U++;
              if (P.length === 0) return x;
              (J = w - P.length), ($ = new Uint8Array(J));
              var le = 0;
              for (U = 0; U < J; le++, U++)
                le === P[0] && (le++, P.shift()), ($[U] = x[le]);
              return $;
            }),
            (T = function (x) {
              var w = 0,
                P = 0,
                U = 0,
                J = 0,
                $,
                le,
                fe,
                ze,
                Ft,
                ns,
                Rd,
                Nd,
                Md,
                al,
                Ud,
                He = [1, 1],
                Fd,
                rs;
              if (
                (($ = new m_(x)),
                (le = $.readUnsignedByte()),
                (ze = $.readUnsignedByte()),
                (fe = $.readUnsignedByte()),
                $.skipUnsignedExpGolomb(),
                od[le] &&
                  ((Ft = $.readUnsignedExpGolomb()),
                  Ft === 3 && $.skipBits(1),
                  $.skipUnsignedExpGolomb(),
                  $.skipUnsignedExpGolomb(),
                  $.skipBits(1),
                  $.readBoolean()))
              )
                for (Ud = Ft !== 3 ? 8 : 12, rs = 0; rs < Ud; rs++)
                  $.readBoolean() && (rs < 6 ? b(16, $) : b(64, $));
              if (
                ($.skipUnsignedExpGolomb(),
                (ns = $.readUnsignedExpGolomb()),
                ns === 0)
              )
                $.readUnsignedExpGolomb();
              else if (ns === 1)
                for (
                  $.skipBits(1),
                    $.skipExpGolomb(),
                    $.skipExpGolomb(),
                    Rd = $.readUnsignedExpGolomb(),
                    rs = 0;
                  rs < Rd;
                  rs++
                )
                  $.skipExpGolomb();
              if (
                ($.skipUnsignedExpGolomb(),
                $.skipBits(1),
                (Nd = $.readUnsignedExpGolomb()),
                (Md = $.readUnsignedExpGolomb()),
                (al = $.readBits(1)),
                al === 0 && $.skipBits(1),
                $.skipBits(1),
                $.readBoolean() &&
                  ((w = $.readUnsignedExpGolomb()),
                  (P = $.readUnsignedExpGolomb()),
                  (U = $.readUnsignedExpGolomb()),
                  (J = $.readUnsignedExpGolomb())),
                $.readBoolean() && $.readBoolean())
              ) {
                switch (((Fd = $.readUnsignedByte()), Fd)) {
                  case 1:
                    He = [1, 1];
                    break;
                  case 2:
                    He = [12, 11];
                    break;
                  case 3:
                    He = [10, 11];
                    break;
                  case 4:
                    He = [16, 11];
                    break;
                  case 5:
                    He = [40, 33];
                    break;
                  case 6:
                    He = [24, 11];
                    break;
                  case 7:
                    He = [20, 11];
                    break;
                  case 8:
                    He = [32, 11];
                    break;
                  case 9:
                    He = [80, 33];
                    break;
                  case 10:
                    He = [18, 11];
                    break;
                  case 11:
                    He = [15, 11];
                    break;
                  case 12:
                    He = [64, 33];
                    break;
                  case 13:
                    He = [160, 99];
                    break;
                  case 14:
                    He = [4, 3];
                    break;
                  case 15:
                    He = [3, 2];
                    break;
                  case 16:
                    He = [2, 1];
                    break;
                  case 255: {
                    He = [
                      ($.readUnsignedByte() << 8) | $.readUnsignedByte(),
                      ($.readUnsignedByte() << 8) | $.readUnsignedByte(),
                    ];
                    break;
                  }
                }
                He && He[0] / He[1];
              }
              return {
                profileIdc: le,
                levelIdc: fe,
                profileCompatibility: ze,
                width: (Nd + 1) * 16 - w * 2 - P * 2,
                height: (2 - al) * (Md + 1) * 16 - U * 2 - J * 2,
                sarRatio: He,
              };
            });
        }),
        (Jr.prototype = new ad());
      var g_ = { H264Stream: Jr, NalByteStream: On },
        __ = [
          96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025,
          8e3, 7350,
        ],
        ld = function (l, c) {
          var d =
              (l[c + 6] << 21) | (l[c + 7] << 14) | (l[c + 8] << 7) | l[c + 9],
            h = l[c + 5],
            m = (h & 16) >> 4;
          return (d = d >= 0 ? d : 0), m ? d + 20 : d + 10;
        },
        ud = function (l, c) {
          return l.length - c < 10 ||
            l[c] !== "I".charCodeAt(0) ||
            l[c + 1] !== "D".charCodeAt(0) ||
            l[c + 2] !== "3".charCodeAt(0)
            ? c
            : ((c += ld(l, c)), ud(l, c));
        },
        y_ = function (l) {
          var c = ud(l, 0);
          return (
            l.length >= c + 2 &&
            (l[c] & 255) === 255 &&
            (l[c + 1] & 240) === 240 &&
            (l[c + 1] & 22) === 16
          );
        },
        cd = function (l) {
          return (l[0] << 21) | (l[1] << 14) | (l[2] << 7) | l[3];
        },
        v_ = function (l, c, d) {
          var h,
            m = "";
          for (h = c; h < d; h++)
            m += "%" + ("00" + l[h].toString(16)).slice(-2);
          return m;
        },
        T_ = function (l, c, d) {
          return unescape(v_(l, c, d));
        },
        b_ = function (l, c) {
          var d = (l[c + 5] & 224) >> 5,
            h = l[c + 4] << 3,
            m = l[c + 3] & (3 << 11);
          return m | h | d;
        },
        x_ = function (l, c) {
          return l[c] === "I".charCodeAt(0) &&
            l[c + 1] === "D".charCodeAt(0) &&
            l[c + 2] === "3".charCodeAt(0)
            ? "timed-metadata"
            : l[c] & !0 && (l[c + 1] & 240) === 240
            ? "audio"
            : null;
        },
        S_ = function (l) {
          for (var c = 0; c + 5 < l.length; ) {
            if (l[c] !== 255 || (l[c + 1] & 246) !== 240) {
              c++;
              continue;
            }
            return __[(l[c + 2] & 60) >>> 2];
          }
          return null;
        },
        E_ = function (l) {
          var c, d, h, m;
          (c = 10), l[5] & 64 && ((c += 4), (c += cd(l.subarray(10, 14))));
          do {
            if (((d = cd(l.subarray(c + 4, c + 8))), d < 1)) return null;
            if (
              ((m = String.fromCharCode(l[c], l[c + 1], l[c + 2], l[c + 3])),
              m === "PRIV")
            ) {
              h = l.subarray(c + 10, c + d + 10);
              for (var g = 0; g < h.byteLength; g++)
                if (h[g] === 0) {
                  var T = T_(h, 0, g);
                  if (T === "com.apple.streaming.transportStreamTimestamp") {
                    var b = h.subarray(g + 1),
                      x =
                        ((b[3] & 1) << 30) |
                        (b[4] << 22) |
                        (b[5] << 14) |
                        (b[6] << 6) |
                        (b[7] >>> 2);
                    return (x *= 4), (x += b[7] & 3), x;
                  }
                  break;
                }
            }
            (c += 10), (c += d);
          } while (c < l.byteLength);
          return null;
        },
        Jo = {
          isLikelyAacData: y_,
          parseId3TagSize: ld,
          parseAdtsSize: b_,
          parseType: x_,
          parseSampleRate: S_,
          parseAacTimestamp: E_,
        },
        C_ = i,
        dd = Jo,
        Zr;
      (Zr = function () {
        var l = new Uint8Array(),
          c = 0;
        Zr.prototype.init.call(this),
          (this.setTimestamp = function (d) {
            c = d;
          }),
          (this.push = function (d) {
            var h = 0,
              m = 0,
              g,
              T,
              b,
              x;
            for (
              l.length
                ? ((x = l.length),
                  (l = new Uint8Array(d.byteLength + x)),
                  l.set(l.subarray(0, x)),
                  l.set(d, x))
                : (l = d);
              l.length - m >= 3;

            ) {
              if (
                l[m] === "I".charCodeAt(0) &&
                l[m + 1] === "D".charCodeAt(0) &&
                l[m + 2] === "3".charCodeAt(0)
              ) {
                if (
                  l.length - m < 10 ||
                  ((h = dd.parseId3TagSize(l, m)), m + h > l.length)
                )
                  break;
                (T = { type: "timed-metadata", data: l.subarray(m, m + h) }),
                  this.trigger("data", T),
                  (m += h);
                continue;
              } else if ((l[m] & 255) === 255 && (l[m + 1] & 240) === 240) {
                if (
                  l.length - m < 7 ||
                  ((h = dd.parseAdtsSize(l, m)), m + h > l.length)
                )
                  break;
                (b = {
                  type: "audio",
                  data: l.subarray(m, m + h),
                  pts: c,
                  dts: c,
                }),
                  this.trigger("data", b),
                  (m += h);
                continue;
              }
              m++;
            }
            (g = l.length - m),
              g > 0 ? (l = l.subarray(m)) : (l = new Uint8Array());
          }),
          (this.reset = function () {
            (l = new Uint8Array()), this.trigger("reset");
          }),
          (this.endTimeline = function () {
            (l = new Uint8Array()), this.trigger("endedtimeline");
          });
      }),
        (Zr.prototype = new C_());
      var w_ = Zr,
        A_ = [
          "audioobjecttype",
          "channelcount",
          "samplerate",
          "samplingfrequencyindex",
          "samplesize",
        ],
        k_ = A_,
        I_ = [
          "width",
          "height",
          "profileIdc",
          "levelIdc",
          "profileCompatibility",
          "sarRatio",
        ],
        O_ = I_,
        ea = i,
        Pn = Ss,
        Dn = G,
        ta = $0,
        Wt = q0,
        Ei = c_,
        ia = Ie,
        hd = f_,
        P_ = g_.H264Stream,
        D_ = w_,
        L_ = Jo.isLikelyAacData,
        R_ = Ie.ONE_SECOND_IN_TS,
        Zo = k_,
        el = O_,
        Ln,
        Cs,
        sa,
        is,
        N_ = function (l, c) {
          (c.stream = l), this.trigger("log", c);
        },
        fd = function (l, c) {
          for (var d = Object.keys(c), h = 0; h < d.length; h++) {
            var m = d[h];
            m === "headOfPipeline" || !c[m].on || c[m].on("log", N_.bind(l, m));
          }
        },
        pd = function (l, c) {
          var d;
          if (l.length !== c.length) return !1;
          for (d = 0; d < l.length; d++) if (l[d] !== c[d]) return !1;
          return !0;
        },
        tl = function (l, c, d, h, m, g) {
          var T = d - c,
            b = h - c,
            x = m - d;
          return {
            start: { dts: l, pts: l + T },
            end: { dts: l + b, pts: l + x },
            prependedContentDuration: g,
            baseMediaDecodeTime: l,
          };
        };
      (Cs = function (l, c) {
        var d = [],
          h,
          m = 0,
          g = 0,
          T = 1 / 0;
        (c = c || {}),
          (h = c.firstSequenceNumber || 0),
          Cs.prototype.init.call(this),
          (this.push = function (b) {
            Wt.collectDtsInfo(l, b),
              l &&
                Zo.forEach(function (x) {
                  l[x] = b[x];
                }),
              d.push(b);
          }),
          (this.setEarliestDts = function (b) {
            m = b;
          }),
          (this.setVideoBaseMediaDecodeTime = function (b) {
            T = b;
          }),
          (this.setAudioAppendStart = function (b) {
            g = b;
          }),
          (this.flush = function () {
            var b, x, w, P, U, J, $;
            if (d.length === 0) {
              this.trigger("done", "AudioSegmentStream");
              return;
            }
            (b = ta.trimAdtsFramesByEarliestDts(d, l, m)),
              (l.baseMediaDecodeTime = Wt.calculateTrackBaseMediaDecodeTime(
                l,
                c.keepOriginalTimestamps
              )),
              ($ = ta.prefixWithSilence(l, b, g, T)),
              (l.samples = ta.generateSampleTable(b)),
              (w = Pn.mdat(ta.concatenateFrameData(b))),
              (d = []),
              (x = Pn.moof(h, [l])),
              (P = new Uint8Array(x.byteLength + w.byteLength)),
              h++,
              P.set(x),
              P.set(w, x.byteLength),
              Wt.clearDtsInfo(l),
              (U = Math.ceil((R_ * 1024) / l.samplerate)),
              b.length &&
                ((J = b.length * U),
                this.trigger(
                  "segmentTimingInfo",
                  tl(
                    ia.audioTsToVideoTs(l.baseMediaDecodeTime, l.samplerate),
                    b[0].dts,
                    b[0].pts,
                    b[0].dts + J,
                    b[0].pts + J,
                    $ || 0
                  )
                ),
                this.trigger("timingInfo", {
                  start: b[0].pts,
                  end: b[0].pts + J,
                })),
              this.trigger("data", { track: l, boxes: P }),
              this.trigger("done", "AudioSegmentStream");
          }),
          (this.reset = function () {
            Wt.clearDtsInfo(l), (d = []), this.trigger("reset");
          });
      }),
        (Cs.prototype = new ea()),
        (Ln = function (l, c) {
          var d,
            h = [],
            m = [],
            g,
            T;
          (c = c || {}),
            (d = c.firstSequenceNumber || 0),
            Ln.prototype.init.call(this),
            delete l.minPTS,
            (this.gopCache_ = []),
            (this.push = function (b) {
              Wt.collectDtsInfo(l, b),
                b.nalUnitType === "seq_parameter_set_rbsp" &&
                  !g &&
                  ((g = b.config),
                  (l.sps = [b.data]),
                  el.forEach(function (x) {
                    l[x] = g[x];
                  }, this)),
                b.nalUnitType === "pic_parameter_set_rbsp" &&
                  !T &&
                  ((T = b.data), (l.pps = [b.data])),
                h.push(b);
            }),
            (this.flush = function () {
              for (
                var b, x, w, P, U, J, $ = 0, le, fe;
                h.length && h[0].nalUnitType !== "access_unit_delimiter_rbsp";

              )
                h.shift();
              if (h.length === 0) {
                this.resetStream_(), this.trigger("done", "VideoSegmentStream");
                return;
              }
              if (
                ((b = Dn.groupNalsIntoFrames(h)),
                (w = Dn.groupFramesIntoGops(b)),
                w[0][0].keyFrame ||
                  ((x = this.getGopForFusion_(h[0], l)),
                  x
                    ? (($ = x.duration),
                      w.unshift(x),
                      (w.byteLength += x.byteLength),
                      (w.nalCount += x.nalCount),
                      (w.pts = x.pts),
                      (w.dts = x.dts),
                      (w.duration += x.duration))
                    : (w = Dn.extendFirstKeyFrame(w))),
                m.length)
              ) {
                var ze;
                if (
                  (c.alignGopsAtEnd
                    ? (ze = this.alignGopsAtEnd_(w))
                    : (ze = this.alignGopsAtStart_(w)),
                  !ze)
                ) {
                  this.gopCache_.unshift({
                    gop: w.pop(),
                    pps: l.pps,
                    sps: l.sps,
                  }),
                    (this.gopCache_.length = Math.min(
                      6,
                      this.gopCache_.length
                    )),
                    (h = []),
                    this.resetStream_(),
                    this.trigger("done", "VideoSegmentStream");
                  return;
                }
                Wt.clearDtsInfo(l), (w = ze);
              }
              Wt.collectDtsInfo(l, w),
                (l.samples = Dn.generateSampleTable(w)),
                (U = Pn.mdat(Dn.concatenateNalData(w))),
                (l.baseMediaDecodeTime = Wt.calculateTrackBaseMediaDecodeTime(
                  l,
                  c.keepOriginalTimestamps
                )),
                this.trigger(
                  "processedGopsInfo",
                  w.map(function (Ft) {
                    return {
                      pts: Ft.pts,
                      dts: Ft.dts,
                      byteLength: Ft.byteLength,
                    };
                  })
                ),
                (le = w[0]),
                (fe = w[w.length - 1]),
                this.trigger(
                  "segmentTimingInfo",
                  tl(
                    l.baseMediaDecodeTime,
                    le.dts,
                    le.pts,
                    fe.dts + fe.duration,
                    fe.pts + fe.duration,
                    $
                  )
                ),
                this.trigger("timingInfo", {
                  start: w[0].pts,
                  end: w[w.length - 1].pts + w[w.length - 1].duration,
                }),
                this.gopCache_.unshift({
                  gop: w.pop(),
                  pps: l.pps,
                  sps: l.sps,
                }),
                (this.gopCache_.length = Math.min(6, this.gopCache_.length)),
                (h = []),
                this.trigger("baseMediaDecodeTime", l.baseMediaDecodeTime),
                this.trigger("timelineStartInfo", l.timelineStartInfo),
                (P = Pn.moof(d, [l])),
                (J = new Uint8Array(P.byteLength + U.byteLength)),
                d++,
                J.set(P),
                J.set(U, P.byteLength),
                this.trigger("data", { track: l, boxes: J }),
                this.resetStream_(),
                this.trigger("done", "VideoSegmentStream");
            }),
            (this.reset = function () {
              this.resetStream_(),
                (h = []),
                (this.gopCache_.length = 0),
                (m.length = 0),
                this.trigger("reset");
            }),
            (this.resetStream_ = function () {
              Wt.clearDtsInfo(l), (g = void 0), (T = void 0);
            }),
            (this.getGopForFusion_ = function (b) {
              var x = 45e3,
                w = 1e4,
                P = 1 / 0,
                U,
                J,
                $,
                le,
                fe;
              for (fe = 0; fe < this.gopCache_.length; fe++)
                (le = this.gopCache_[fe]),
                  ($ = le.gop),
                  !(
                    !(l.pps && pd(l.pps[0], le.pps[0])) ||
                    !(l.sps && pd(l.sps[0], le.sps[0]))
                  ) &&
                    ($.dts < l.timelineStartInfo.dts ||
                      ((U = b.dts - $.dts - $.duration),
                      U >= -w &&
                        U <= x &&
                        (!J || P > U) &&
                        ((J = le), (P = U))));
              return J ? J.gop : null;
            }),
            (this.alignGopsAtStart_ = function (b) {
              var x, w, P, U, J, $, le, fe;
              for (
                J = b.byteLength, $ = b.nalCount, le = b.duration, x = w = 0;
                x < m.length &&
                w < b.length &&
                ((P = m[x]), (U = b[w]), P.pts !== U.pts);

              ) {
                if (U.pts > P.pts) {
                  x++;
                  continue;
                }
                w++, (J -= U.byteLength), ($ -= U.nalCount), (le -= U.duration);
              }
              return w === 0
                ? b
                : w === b.length
                ? null
                : ((fe = b.slice(w)),
                  (fe.byteLength = J),
                  (fe.duration = le),
                  (fe.nalCount = $),
                  (fe.pts = fe[0].pts),
                  (fe.dts = fe[0].dts),
                  fe);
            }),
            (this.alignGopsAtEnd_ = function (b) {
              var x, w, P, U, J, $;
              for (
                x = m.length - 1, w = b.length - 1, J = null, $ = !1;
                x >= 0 && w >= 0;

              ) {
                if (((P = m[x]), (U = b[w]), P.pts === U.pts)) {
                  $ = !0;
                  break;
                }
                if (P.pts > U.pts) {
                  x--;
                  continue;
                }
                x === m.length - 1 && (J = w), w--;
              }
              if (!$ && J === null) return null;
              var le;
              if (($ ? (le = w) : (le = J), le === 0)) return b;
              var fe = b.slice(le),
                ze = fe.reduce(
                  function (Ft, ns) {
                    return (
                      (Ft.byteLength += ns.byteLength),
                      (Ft.duration += ns.duration),
                      (Ft.nalCount += ns.nalCount),
                      Ft
                    );
                  },
                  { byteLength: 0, duration: 0, nalCount: 0 }
                );
              return (
                (fe.byteLength = ze.byteLength),
                (fe.duration = ze.duration),
                (fe.nalCount = ze.nalCount),
                (fe.pts = fe[0].pts),
                (fe.dts = fe[0].dts),
                fe
              );
            }),
            (this.alignGopsWith = function (b) {
              m = b;
            });
        }),
        (Ln.prototype = new ea()),
        (is = function (l, c) {
          (this.numberOfTracks = 0),
            (this.metadataStream = c),
            (l = l || {}),
            typeof l.remux < "u"
              ? (this.remuxTracks = !!l.remux)
              : (this.remuxTracks = !0),
            typeof l.keepOriginalTimestamps == "boolean"
              ? (this.keepOriginalTimestamps = l.keepOriginalTimestamps)
              : (this.keepOriginalTimestamps = !1),
            (this.pendingTracks = []),
            (this.videoTrack = null),
            (this.pendingBoxes = []),
            (this.pendingCaptions = []),
            (this.pendingMetadata = []),
            (this.pendingBytes = 0),
            (this.emittedTracks = 0),
            is.prototype.init.call(this),
            (this.push = function (d) {
              if (d.text) return this.pendingCaptions.push(d);
              if (d.frames) return this.pendingMetadata.push(d);
              this.pendingTracks.push(d.track),
                (this.pendingBytes += d.boxes.byteLength),
                d.track.type === "video" &&
                  ((this.videoTrack = d.track),
                  this.pendingBoxes.push(d.boxes)),
                d.track.type === "audio" &&
                  ((this.audioTrack = d.track),
                  this.pendingBoxes.unshift(d.boxes));
            });
        }),
        (is.prototype = new ea()),
        (is.prototype.flush = function (l) {
          var c = 0,
            d = { captions: [], captionStreams: {}, metadata: [], info: {} },
            h,
            m,
            g,
            T = 0,
            b;
          if (this.pendingTracks.length < this.numberOfTracks) {
            if (l !== "VideoSegmentStream" && l !== "AudioSegmentStream")
              return;
            if (this.remuxTracks) return;
            if (this.pendingTracks.length === 0) {
              this.emittedTracks++,
                this.emittedTracks >= this.numberOfTracks &&
                  (this.trigger("done"), (this.emittedTracks = 0));
              return;
            }
          }
          if (
            (this.videoTrack
              ? ((T = this.videoTrack.timelineStartInfo.pts),
                el.forEach(function (x) {
                  d.info[x] = this.videoTrack[x];
                }, this))
              : this.audioTrack &&
                ((T = this.audioTrack.timelineStartInfo.pts),
                Zo.forEach(function (x) {
                  d.info[x] = this.audioTrack[x];
                }, this)),
            this.videoTrack || this.audioTrack)
          ) {
            for (
              this.pendingTracks.length === 1
                ? (d.type = this.pendingTracks[0].type)
                : (d.type = "combined"),
                this.emittedTracks += this.pendingTracks.length,
                g = Pn.initSegment(this.pendingTracks),
                d.initSegment = new Uint8Array(g.byteLength),
                d.initSegment.set(g),
                d.data = new Uint8Array(this.pendingBytes),
                b = 0;
              b < this.pendingBoxes.length;
              b++
            )
              d.data.set(this.pendingBoxes[b], c),
                (c += this.pendingBoxes[b].byteLength);
            for (b = 0; b < this.pendingCaptions.length; b++)
              (h = this.pendingCaptions[b]),
                (h.startTime = ia.metadataTsToSeconds(
                  h.startPts,
                  T,
                  this.keepOriginalTimestamps
                )),
                (h.endTime = ia.metadataTsToSeconds(
                  h.endPts,
                  T,
                  this.keepOriginalTimestamps
                )),
                (d.captionStreams[h.stream] = !0),
                d.captions.push(h);
            for (b = 0; b < this.pendingMetadata.length; b++)
              (m = this.pendingMetadata[b]),
                (m.cueTime = ia.metadataTsToSeconds(
                  m.pts,
                  T,
                  this.keepOriginalTimestamps
                )),
                d.metadata.push(m);
            for (
              d.metadata.dispatchType = this.metadataStream.dispatchType,
                this.pendingTracks.length = 0,
                this.videoTrack = null,
                this.pendingBoxes.length = 0,
                this.pendingCaptions.length = 0,
                this.pendingBytes = 0,
                this.pendingMetadata.length = 0,
                this.trigger("data", d),
                b = 0;
              b < d.captions.length;
              b++
            )
              (h = d.captions[b]), this.trigger("caption", h);
            for (b = 0; b < d.metadata.length; b++)
              (m = d.metadata[b]), this.trigger("id3Frame", m);
          }
          this.emittedTracks >= this.numberOfTracks &&
            (this.trigger("done"), (this.emittedTracks = 0));
        }),
        (is.prototype.setRemux = function (l) {
          this.remuxTracks = l;
        }),
        (sa = function (l) {
          var c = this,
            d = !0,
            h,
            m;
          sa.prototype.init.call(this),
            (l = l || {}),
            (this.baseMediaDecodeTime = l.baseMediaDecodeTime || 0),
            (this.transmuxPipeline_ = {}),
            (this.setupAacPipeline = function () {
              var g = {};
              (this.transmuxPipeline_ = g),
                (g.type = "aac"),
                (g.metadataStream = new Ei.MetadataStream()),
                (g.aacStream = new D_()),
                (g.audioTimestampRolloverStream =
                  new Ei.TimestampRolloverStream("audio")),
                (g.timedMetadataTimestampRolloverStream =
                  new Ei.TimestampRolloverStream("timed-metadata")),
                (g.adtsStream = new hd()),
                (g.coalesceStream = new is(l, g.metadataStream)),
                (g.headOfPipeline = g.aacStream),
                g.aacStream
                  .pipe(g.audioTimestampRolloverStream)
                  .pipe(g.adtsStream),
                g.aacStream
                  .pipe(g.timedMetadataTimestampRolloverStream)
                  .pipe(g.metadataStream)
                  .pipe(g.coalesceStream),
                g.metadataStream.on("timestamp", function (T) {
                  g.aacStream.setTimestamp(T.timeStamp);
                }),
                g.aacStream.on("data", function (T) {
                  (T.type !== "timed-metadata" && T.type !== "audio") ||
                    g.audioSegmentStream ||
                    ((m = m || {
                      timelineStartInfo: {
                        baseMediaDecodeTime: c.baseMediaDecodeTime,
                      },
                      codec: "adts",
                      type: "audio",
                    }),
                    g.coalesceStream.numberOfTracks++,
                    (g.audioSegmentStream = new Cs(m, l)),
                    g.audioSegmentStream.on(
                      "log",
                      c.getLogTrigger_("audioSegmentStream")
                    ),
                    g.audioSegmentStream.on(
                      "timingInfo",
                      c.trigger.bind(c, "audioTimingInfo")
                    ),
                    g.adtsStream
                      .pipe(g.audioSegmentStream)
                      .pipe(g.coalesceStream),
                    c.trigger("trackinfo", { hasAudio: !!m, hasVideo: !!h }));
                }),
                g.coalesceStream.on("data", this.trigger.bind(this, "data")),
                g.coalesceStream.on("done", this.trigger.bind(this, "done")),
                fd(this, g);
            }),
            (this.setupTsPipeline = function () {
              var g = {};
              (this.transmuxPipeline_ = g),
                (g.type = "ts"),
                (g.metadataStream = new Ei.MetadataStream()),
                (g.packetStream = new Ei.TransportPacketStream()),
                (g.parseStream = new Ei.TransportParseStream()),
                (g.elementaryStream = new Ei.ElementaryStream()),
                (g.timestampRolloverStream = new Ei.TimestampRolloverStream()),
                (g.adtsStream = new hd()),
                (g.h264Stream = new P_()),
                (g.captionStream = new Ei.CaptionStream(l)),
                (g.coalesceStream = new is(l, g.metadataStream)),
                (g.headOfPipeline = g.packetStream),
                g.packetStream
                  .pipe(g.parseStream)
                  .pipe(g.elementaryStream)
                  .pipe(g.timestampRolloverStream),
                g.timestampRolloverStream.pipe(g.h264Stream),
                g.timestampRolloverStream.pipe(g.adtsStream),
                g.timestampRolloverStream
                  .pipe(g.metadataStream)
                  .pipe(g.coalesceStream),
                g.h264Stream.pipe(g.captionStream).pipe(g.coalesceStream),
                g.elementaryStream.on("data", function (T) {
                  var b;
                  if (T.type === "metadata") {
                    for (b = T.tracks.length; b--; )
                      !h && T.tracks[b].type === "video"
                        ? ((h = T.tracks[b]),
                          (h.timelineStartInfo.baseMediaDecodeTime =
                            c.baseMediaDecodeTime))
                        : !m &&
                          T.tracks[b].type === "audio" &&
                          ((m = T.tracks[b]),
                          (m.timelineStartInfo.baseMediaDecodeTime =
                            c.baseMediaDecodeTime));
                    h &&
                      !g.videoSegmentStream &&
                      (g.coalesceStream.numberOfTracks++,
                      (g.videoSegmentStream = new Ln(h, l)),
                      g.videoSegmentStream.on(
                        "log",
                        c.getLogTrigger_("videoSegmentStream")
                      ),
                      g.videoSegmentStream.on(
                        "timelineStartInfo",
                        function (x) {
                          m &&
                            !l.keepOriginalTimestamps &&
                            ((m.timelineStartInfo = x),
                            g.audioSegmentStream.setEarliestDts(
                              x.dts - c.baseMediaDecodeTime
                            ));
                        }
                      ),
                      g.videoSegmentStream.on(
                        "processedGopsInfo",
                        c.trigger.bind(c, "gopInfo")
                      ),
                      g.videoSegmentStream.on(
                        "segmentTimingInfo",
                        c.trigger.bind(c, "videoSegmentTimingInfo")
                      ),
                      g.videoSegmentStream.on(
                        "baseMediaDecodeTime",
                        function (x) {
                          m &&
                            g.audioSegmentStream.setVideoBaseMediaDecodeTime(x);
                        }
                      ),
                      g.videoSegmentStream.on(
                        "timingInfo",
                        c.trigger.bind(c, "videoTimingInfo")
                      ),
                      g.h264Stream
                        .pipe(g.videoSegmentStream)
                        .pipe(g.coalesceStream)),
                      m &&
                        !g.audioSegmentStream &&
                        (g.coalesceStream.numberOfTracks++,
                        (g.audioSegmentStream = new Cs(m, l)),
                        g.audioSegmentStream.on(
                          "log",
                          c.getLogTrigger_("audioSegmentStream")
                        ),
                        g.audioSegmentStream.on(
                          "timingInfo",
                          c.trigger.bind(c, "audioTimingInfo")
                        ),
                        g.audioSegmentStream.on(
                          "segmentTimingInfo",
                          c.trigger.bind(c, "audioSegmentTimingInfo")
                        ),
                        g.adtsStream
                          .pipe(g.audioSegmentStream)
                          .pipe(g.coalesceStream)),
                      c.trigger("trackinfo", { hasAudio: !!m, hasVideo: !!h });
                  }
                }),
                g.coalesceStream.on("data", this.trigger.bind(this, "data")),
                g.coalesceStream.on("id3Frame", function (T) {
                  (T.dispatchType = g.metadataStream.dispatchType),
                    c.trigger("id3Frame", T);
                }),
                g.coalesceStream.on(
                  "caption",
                  this.trigger.bind(this, "caption")
                ),
                g.coalesceStream.on("done", this.trigger.bind(this, "done")),
                fd(this, g);
            }),
            (this.setBaseMediaDecodeTime = function (g) {
              var T = this.transmuxPipeline_;
              l.keepOriginalTimestamps || (this.baseMediaDecodeTime = g),
                m &&
                  ((m.timelineStartInfo.dts = void 0),
                  (m.timelineStartInfo.pts = void 0),
                  Wt.clearDtsInfo(m),
                  T.audioTimestampRolloverStream &&
                    T.audioTimestampRolloverStream.discontinuity()),
                h &&
                  (T.videoSegmentStream &&
                    (T.videoSegmentStream.gopCache_ = []),
                  (h.timelineStartInfo.dts = void 0),
                  (h.timelineStartInfo.pts = void 0),
                  Wt.clearDtsInfo(h),
                  T.captionStream.reset()),
                T.timestampRolloverStream &&
                  T.timestampRolloverStream.discontinuity();
            }),
            (this.setAudioAppendStart = function (g) {
              m &&
                this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(
                  g
                );
            }),
            (this.setRemux = function (g) {
              var T = this.transmuxPipeline_;
              (l.remux = g),
                T && T.coalesceStream && T.coalesceStream.setRemux(g);
            }),
            (this.alignGopsWith = function (g) {
              h &&
                this.transmuxPipeline_.videoSegmentStream &&
                this.transmuxPipeline_.videoSegmentStream.alignGopsWith(g);
            }),
            (this.getLogTrigger_ = function (g) {
              var T = this;
              return function (b) {
                (b.stream = g), T.trigger("log", b);
              };
            }),
            (this.push = function (g) {
              if (d) {
                var T = L_(g);
                T && this.transmuxPipeline_.type !== "aac"
                  ? this.setupAacPipeline()
                  : !T &&
                    this.transmuxPipeline_.type !== "ts" &&
                    this.setupTsPipeline(),
                  (d = !1);
              }
              this.transmuxPipeline_.headOfPipeline.push(g);
            }),
            (this.flush = function () {
              (d = !0), this.transmuxPipeline_.headOfPipeline.flush();
            }),
            (this.endTimeline = function () {
              this.transmuxPipeline_.headOfPipeline.endTimeline();
            }),
            (this.reset = function () {
              this.transmuxPipeline_.headOfPipeline &&
                this.transmuxPipeline_.headOfPipeline.reset();
            }),
            (this.resetCaptions = function () {
              this.transmuxPipeline_.captionStream &&
                this.transmuxPipeline_.captionStream.reset();
            });
        }),
        (sa.prototype = new ea());
      var M_ = {
          Transmuxer: sa,
          VideoSegmentStream: Ln,
          AudioSegmentStream: Cs,
          AUDIO_PROPERTIES: Zo,
          VIDEO_PROPERTIES: el,
          generateSegmentTimingInfo: tl,
        },
        U_ = function (l) {
          return l >>> 0;
        },
        F_ = function (l) {
          return ("00" + l.toString(16)).slice(-2);
        },
        na = { toUnsigned: U_, toHexString: F_ },
        B_ = function (l) {
          var c = "";
          return (
            (c += String.fromCharCode(l[0])),
            (c += String.fromCharCode(l[1])),
            (c += String.fromCharCode(l[2])),
            (c += String.fromCharCode(l[3])),
            c
          );
        },
        md = B_,
        $_ = na.toUnsigned,
        j_ = md,
        gd = function (l, c) {
          var d = [],
            h,
            m,
            g,
            T,
            b;
          if (!c.length) return null;
          for (h = 0; h < l.byteLength; )
            (m = $_(
              (l[h] << 24) | (l[h + 1] << 16) | (l[h + 2] << 8) | l[h + 3]
            )),
              (g = j_(l.subarray(h + 4, h + 8))),
              (T = m > 1 ? h + m : l.byteLength),
              g === c[0] &&
                (c.length === 1
                  ? d.push(l.subarray(h + 8, T))
                  : ((b = gd(l.subarray(h + 8, T), c.slice(1))),
                    b.length && (d = d.concat(b)))),
              (h = T);
          return d;
        },
        _d = gd,
        H_ = na.toUnsigned,
        V_ = r.getUint64,
        W_ = function (l) {
          var c = { version: l[0], flags: new Uint8Array(l.subarray(1, 4)) };
          return (
            c.version === 1
              ? (c.baseMediaDecodeTime = V_(l.subarray(4)))
              : (c.baseMediaDecodeTime = H_(
                  (l[4] << 24) | (l[5] << 16) | (l[6] << 8) | l[7]
                )),
            c
          );
        },
        yd = W_,
        q_ = function (l) {
          return {
            isLeading: (l[0] & 12) >>> 2,
            dependsOn: l[0] & 3,
            isDependedOn: (l[1] & 192) >>> 6,
            hasRedundancy: (l[1] & 48) >>> 4,
            paddingValue: (l[1] & 14) >>> 1,
            isNonSyncSample: l[1] & 1,
            degradationPriority: (l[2] << 8) | l[3],
          };
        },
        z_ = q_,
        vd = z_,
        G_ = function (l) {
          var c = {
              version: l[0],
              flags: new Uint8Array(l.subarray(1, 4)),
              samples: [],
            },
            d = new DataView(l.buffer, l.byteOffset, l.byteLength),
            h = c.flags[2] & 1,
            m = c.flags[2] & 4,
            g = c.flags[1] & 1,
            T = c.flags[1] & 2,
            b = c.flags[1] & 4,
            x = c.flags[1] & 8,
            w = d.getUint32(4),
            P = 8,
            U;
          for (
            h && ((c.dataOffset = d.getInt32(P)), (P += 4)),
              m &&
                w &&
                ((U = { flags: vd(l.subarray(P, P + 4)) }),
                (P += 4),
                g && ((U.duration = d.getUint32(P)), (P += 4)),
                T && ((U.size = d.getUint32(P)), (P += 4)),
                x &&
                  (c.version === 1
                    ? (U.compositionTimeOffset = d.getInt32(P))
                    : (U.compositionTimeOffset = d.getUint32(P)),
                  (P += 4)),
                c.samples.push(U),
                w--);
            w--;

          )
            (U = {}),
              g && ((U.duration = d.getUint32(P)), (P += 4)),
              T && ((U.size = d.getUint32(P)), (P += 4)),
              b && ((U.flags = vd(l.subarray(P, P + 4))), (P += 4)),
              x &&
                (c.version === 1
                  ? (U.compositionTimeOffset = d.getInt32(P))
                  : (U.compositionTimeOffset = d.getUint32(P)),
                (P += 4)),
              c.samples.push(U);
          return c;
        },
        Td = G_,
        K_ = function (l) {
          var c = new DataView(l.buffer, l.byteOffset, l.byteLength),
            d = {
              version: l[0],
              flags: new Uint8Array(l.subarray(1, 4)),
              trackId: c.getUint32(4),
            },
            h = d.flags[2] & 1,
            m = d.flags[2] & 2,
            g = d.flags[2] & 8,
            T = d.flags[2] & 16,
            b = d.flags[2] & 32,
            x = d.flags[0] & 65536,
            w = d.flags[0] & 131072,
            P;
          return (
            (P = 8),
            h && ((P += 4), (d.baseDataOffset = c.getUint32(12)), (P += 4)),
            m && ((d.sampleDescriptionIndex = c.getUint32(P)), (P += 4)),
            g && ((d.defaultSampleDuration = c.getUint32(P)), (P += 4)),
            T && ((d.defaultSampleSize = c.getUint32(P)), (P += 4)),
            b && (d.defaultSampleFlags = c.getUint32(P)),
            x && (d.durationIsEmpty = !0),
            !h && w && (d.baseDataOffsetIsMoof = !0),
            d
          );
        },
        bd = K_,
        Rn;
      typeof window < "u"
        ? (Rn = window)
        : typeof t < "u"
        ? (Rn = t)
        : typeof self < "u"
        ? (Rn = self)
        : (Rn = {});
      var xd = Rn,
        X_ = Jc.discardEmulationPreventionBytes,
        Y_ = Zc.CaptionStream,
        Nn = _d,
        Q_ = yd,
        J_ = Td,
        Z_ = bd,
        Sd = xd,
        ey = function (l, c) {
          for (var d = l, h = 0; h < c.length; h++) {
            var m = c[h];
            if (d < m.size) return m;
            d -= m.size;
          }
          return null;
        },
        ty = function (l, c, d) {
          var h = new DataView(l.buffer, l.byteOffset, l.byteLength),
            m = { logs: [], seiNals: [] },
            g,
            T,
            b,
            x;
          for (T = 0; T + 4 < l.length; T += b)
            if (((b = h.getUint32(T)), (T += 4), !(b <= 0)))
              switch (l[T] & 31) {
                case 6:
                  var w = l.subarray(T + 1, T + 1 + b),
                    P = ey(T, c);
                  if (
                    ((g = {
                      nalUnitType: "sei_rbsp",
                      size: b,
                      data: w,
                      escapedRBSP: X_(w),
                      trackId: d,
                    }),
                    P)
                  )
                    (g.pts = P.pts), (g.dts = P.dts), (x = P);
                  else if (x) (g.pts = x.pts), (g.dts = x.dts);
                  else {
                    m.logs.push({
                      level: "warn",
                      message:
                        "We've encountered a nal unit without data at " +
                        T +
                        " for trackId " +
                        d +
                        ". See mux.js#223.",
                    });
                    break;
                  }
                  m.seiNals.push(g);
                  break;
              }
          return m;
        },
        iy = function (l, c, d) {
          var h = c,
            m = d.defaultSampleDuration || 0,
            g = d.defaultSampleSize || 0,
            T = d.trackId,
            b = [];
          return (
            l.forEach(function (x) {
              var w = J_(x),
                P = w.samples;
              P.forEach(function (U) {
                U.duration === void 0 && (U.duration = m),
                  U.size === void 0 && (U.size = g),
                  (U.trackId = T),
                  (U.dts = h),
                  U.compositionTimeOffset === void 0 &&
                    (U.compositionTimeOffset = 0),
                  typeof h == "bigint"
                    ? ((U.pts = h + Sd.BigInt(U.compositionTimeOffset)),
                      (h += Sd.BigInt(U.duration)))
                    : ((U.pts = h + U.compositionTimeOffset),
                      (h += U.duration));
              }),
                (b = b.concat(P));
            }),
            b
          );
        },
        sy = function (l, c) {
          var d = Nn(l, ["moof", "traf"]),
            h = Nn(l, ["mdat"]),
            m = {},
            g = [];
          return (
            h.forEach(function (T, b) {
              var x = d[b];
              g.push({ mdat: T, traf: x });
            }),
            g.forEach(function (T) {
              var b = T.mdat,
                x = T.traf,
                w = Nn(x, ["tfhd"]),
                P = Z_(w[0]),
                U = P.trackId,
                J = Nn(x, ["tfdt"]),
                $ = J.length > 0 ? Q_(J[0]).baseMediaDecodeTime : 0,
                le = Nn(x, ["trun"]),
                fe,
                ze;
              c === U &&
                le.length > 0 &&
                ((fe = iy(le, $, P)),
                (ze = ty(b, fe, U)),
                m[U] || (m[U] = { seiNals: [], logs: [] }),
                (m[U].seiNals = m[U].seiNals.concat(ze.seiNals)),
                (m[U].logs = m[U].logs.concat(ze.logs)));
            }),
            m
          );
        },
        ny = function (l, c, d) {
          var h;
          if (c === null) return null;
          h = sy(l, c);
          var m = h[c] || {};
          return { seiNals: m.seiNals, logs: m.logs, timescale: d };
        },
        ry = function () {
          var l = !1,
            c,
            d,
            h,
            m,
            g,
            T;
          (this.isInitialized = function () {
            return l;
          }),
            (this.init = function (b) {
              (c = new Y_()),
                (l = !0),
                (T = b ? b.isPartial : !1),
                c.on("data", function (x) {
                  (x.startTime = x.startPts / m),
                    (x.endTime = x.endPts / m),
                    g.captions.push(x),
                    (g.captionStreams[x.stream] = !0);
                }),
                c.on("log", function (x) {
                  g.logs.push(x);
                });
            }),
            (this.isNewInit = function (b, x) {
              return (b && b.length === 0) ||
                (x && typeof x == "object" && Object.keys(x).length === 0)
                ? !1
                : h !== b[0] || m !== x[h];
            }),
            (this.parse = function (b, x, w) {
              var P;
              if (this.isInitialized()) {
                if (!x || !w) return null;
                if (this.isNewInit(x, w)) (h = x[0]), (m = w[h]);
                else if (h === null || !m) return d.push(b), null;
              } else return null;
              for (; d.length > 0; ) {
                var U = d.shift();
                this.parse(U, x, w);
              }
              return (
                (P = ny(b, h, m)),
                P && P.logs && (g.logs = g.logs.concat(P.logs)),
                P === null || !P.seiNals
                  ? g.logs.length
                    ? { logs: g.logs, captions: [], captionStreams: [] }
                    : null
                  : (this.pushNals(P.seiNals), this.flushStream(), g)
              );
            }),
            (this.pushNals = function (b) {
              if (!this.isInitialized() || !b || b.length === 0) return null;
              b.forEach(function (x) {
                c.push(x);
              });
            }),
            (this.flushStream = function () {
              if (!this.isInitialized()) return null;
              T ? c.partialFlush() : c.flush();
            }),
            (this.clearParsedCaptions = function () {
              (g.captions = []), (g.captionStreams = {}), (g.logs = []);
            }),
            (this.resetCaptionStream = function () {
              if (!this.isInitialized()) return null;
              c.reset();
            }),
            (this.clearAllCaptions = function () {
              this.clearParsedCaptions(), this.resetCaptionStream();
            }),
            (this.reset = function () {
              (d = []),
                (h = null),
                (m = null),
                g
                  ? this.clearParsedCaptions()
                  : (g = { captions: [], captionStreams: {}, logs: [] }),
                this.resetCaptionStream();
            }),
            this.reset();
        },
        ay = ry,
        ra = na.toUnsigned,
        Mn = na.toHexString,
        qe = _d,
        ws = md,
        oy = bd,
        ly = Td,
        uy = yd,
        cy = r.getUint64,
        Ed,
        Cd,
        wd,
        Ad,
        kd,
        il,
        sl = xd;
      (Ed = function (l) {
        var c = {},
          d = qe(l, ["moov", "trak"]);
        return d.reduce(function (h, m) {
          var g, T, b, x, w;
          return (
            (g = qe(m, ["tkhd"])[0]),
            !g ||
            ((T = g[0]),
            (b = T === 0 ? 12 : 20),
            (x = ra(
              (g[b] << 24) | (g[b + 1] << 16) | (g[b + 2] << 8) | g[b + 3]
            )),
            (w = qe(m, ["mdia", "mdhd"])[0]),
            !w)
              ? null
              : ((T = w[0]),
                (b = T === 0 ? 12 : 20),
                (h[x] = ra(
                  (w[b] << 24) | (w[b + 1] << 16) | (w[b + 2] << 8) | w[b + 3]
                )),
                h)
          );
        }, c);
      }),
        (Cd = function (l, c) {
          var d;
          d = qe(c, ["moof", "traf"]);
          var h = d.reduce(function (m, g) {
            var T = qe(g, ["tfhd"])[0],
              b = ra((T[4] << 24) | (T[5] << 16) | (T[6] << 8) | T[7]),
              x = l[b] || 9e4,
              w = qe(g, ["tfdt"])[0],
              P = new DataView(w.buffer, w.byteOffset, w.byteLength),
              U;
            w[0] === 1 ? (U = cy(w.subarray(4, 12))) : (U = P.getUint32(4));
            let J;
            return (
              typeof U == "bigint"
                ? (J = U / sl.BigInt(x))
                : typeof U == "number" && !isNaN(U) && (J = U / x),
              J < Number.MAX_SAFE_INTEGER && (J = Number(J)),
              J < m && (m = J),
              m
            );
          }, 1 / 0);
          return typeof h == "bigint" || isFinite(h) ? h : 0;
        }),
        (wd = function (l, c) {
          var d = qe(c, ["moof", "traf"]),
            h = 0,
            m = 0,
            g;
          if (d && d.length) {
            var T = qe(d[0], ["tfhd"])[0],
              b = qe(d[0], ["trun"])[0],
              x = qe(d[0], ["tfdt"])[0];
            if (T) {
              var w = oy(T);
              g = w.trackId;
            }
            if (x) {
              var P = uy(x);
              h = P.baseMediaDecodeTime;
            }
            if (b) {
              var U = ly(b);
              U.samples &&
                U.samples.length &&
                (m = U.samples[0].compositionTimeOffset || 0);
            }
          }
          var J = l[g] || 9e4;
          typeof h == "bigint" && ((m = sl.BigInt(m)), (J = sl.BigInt(J)));
          var $ = (h + m) / J;
          return (
            typeof $ == "bigint" &&
              $ < Number.MAX_SAFE_INTEGER &&
              ($ = Number($)),
            $
          );
        }),
        (Ad = function (l) {
          var c = qe(l, ["moov", "trak"]),
            d = [];
          return (
            c.forEach(function (h) {
              var m = qe(h, ["mdia", "hdlr"]),
                g = qe(h, ["tkhd"]);
              m.forEach(function (T, b) {
                var x = ws(T.subarray(8, 12)),
                  w = g[b],
                  P,
                  U,
                  J;
                x === "vide" &&
                  ((P = new DataView(w.buffer, w.byteOffset, w.byteLength)),
                  (U = P.getUint8(0)),
                  (J = U === 0 ? P.getUint32(12) : P.getUint32(20)),
                  d.push(J));
              });
            }),
            d
          );
        }),
        (il = function (l) {
          var c = l[0],
            d = c === 0 ? 12 : 20;
          return ra(
            (l[d] << 24) | (l[d + 1] << 16) | (l[d + 2] << 8) | l[d + 3]
          );
        }),
        (kd = function (l) {
          var c = qe(l, ["moov", "trak"]),
            d = [];
          return (
            c.forEach(function (h) {
              var m = {},
                g = qe(h, ["tkhd"])[0],
                T,
                b;
              g &&
                ((T = new DataView(g.buffer, g.byteOffset, g.byteLength)),
                (b = T.getUint8(0)),
                (m.id = b === 0 ? T.getUint32(12) : T.getUint32(20)));
              var x = qe(h, ["mdia", "hdlr"])[0];
              if (x) {
                var w = ws(x.subarray(8, 12));
                w === "vide"
                  ? (m.type = "video")
                  : w === "soun"
                  ? (m.type = "audio")
                  : (m.type = w);
              }
              var P = qe(h, ["mdia", "minf", "stbl", "stsd"])[0];
              if (P) {
                var U = P.subarray(8);
                m.codec = ws(U.subarray(4, 8));
                var J = qe(U, [m.codec])[0],
                  $,
                  le;
                J &&
                  (/^[asm]vc[1-9]$/i.test(m.codec)
                    ? (($ = J.subarray(78)),
                      (le = ws($.subarray(4, 8))),
                      le === "avcC" && $.length > 11
                        ? ((m.codec += "."),
                          (m.codec += Mn($[9])),
                          (m.codec += Mn($[10])),
                          (m.codec += Mn($[11])))
                        : (m.codec = "avc1.4d400d"))
                    : /^mp4[a,v]$/i.test(m.codec)
                    ? (($ = J.subarray(28)),
                      (le = ws($.subarray(4, 8))),
                      le === "esds" && $.length > 20 && $[19] !== 0
                        ? ((m.codec += "." + Mn($[19])),
                          (m.codec +=
                            "." + Mn(($[20] >>> 2) & 63).replace(/^0/, "")))
                        : (m.codec = "mp4a.40.2"))
                    : (m.codec = m.codec.toLowerCase()));
              }
              var fe = qe(h, ["mdia", "mdhd"])[0];
              fe && (m.timescale = il(fe)), d.push(m);
            }),
            d
          );
        });
      var Id = {
          findBox: qe,
          parseType: ws,
          timescale: Ed,
          startTime: Cd,
          compositionStartTime: wd,
          videoTrackIds: Ad,
          tracks: kd,
          getTimescaleFromMediaHeader: il,
        },
        nl = Vr,
        Od = function (l) {
          var c = l[1] & 31;
          return (c <<= 8), (c |= l[2]), c;
        },
        aa = function (l) {
          return !!(l[1] & 64);
        },
        oa = function (l) {
          var c = 0;
          return (l[3] & 48) >>> 4 > 1 && (c += l[4] + 1), c;
        },
        dy = function (l, c) {
          var d = Od(l);
          return d === 0 ? "pat" : d === c ? "pmt" : c ? "pes" : null;
        },
        hy = function (l) {
          var c = aa(l),
            d = 4 + oa(l);
          return c && (d += l[d] + 1), ((l[d + 10] & 31) << 8) | l[d + 11];
        },
        fy = function (l) {
          var c = {},
            d = aa(l),
            h = 4 + oa(l);
          if ((d && (h += l[h] + 1), !!(l[h + 5] & 1))) {
            var m, g, T;
            (m = ((l[h + 1] & 15) << 8) | l[h + 2]),
              (g = 3 + m - 4),
              (T = ((l[h + 10] & 15) << 8) | l[h + 11]);
            for (var b = 12 + T; b < g; ) {
              var x = h + b;
              (c[((l[x + 1] & 31) << 8) | l[x + 2]] = l[x]),
                (b += (((l[x + 3] & 15) << 8) | l[x + 4]) + 5);
            }
            return c;
          }
        },
        py = function (l, c) {
          var d = Od(l),
            h = c[d];
          switch (h) {
            case nl.H264_STREAM_TYPE:
              return "video";
            case nl.ADTS_STREAM_TYPE:
              return "audio";
            case nl.METADATA_STREAM_TYPE:
              return "timed-metadata";
            default:
              return null;
          }
        },
        my = function (l) {
          var c = aa(l);
          if (!c) return null;
          var d = 4 + oa(l);
          if (d >= l.byteLength) return null;
          var h = null,
            m;
          return (
            (m = l[d + 7]),
            m & 192 &&
              ((h = {}),
              (h.pts =
                ((l[d + 9] & 14) << 27) |
                ((l[d + 10] & 255) << 20) |
                ((l[d + 11] & 254) << 12) |
                ((l[d + 12] & 255) << 5) |
                ((l[d + 13] & 254) >>> 3)),
              (h.pts *= 4),
              (h.pts += (l[d + 13] & 6) >>> 1),
              (h.dts = h.pts),
              m & 64 &&
                ((h.dts =
                  ((l[d + 14] & 14) << 27) |
                  ((l[d + 15] & 255) << 20) |
                  ((l[d + 16] & 254) << 12) |
                  ((l[d + 17] & 255) << 5) |
                  ((l[d + 18] & 254) >>> 3)),
                (h.dts *= 4),
                (h.dts += (l[d + 18] & 6) >>> 1))),
            h
          );
        },
        rl = function (l) {
          switch (l) {
            case 5:
              return "slice_layer_without_partitioning_rbsp_idr";
            case 6:
              return "sei_rbsp";
            case 7:
              return "seq_parameter_set_rbsp";
            case 8:
              return "pic_parameter_set_rbsp";
            case 9:
              return "access_unit_delimiter_rbsp";
            default:
              return null;
          }
        },
        gy = function (l) {
          for (
            var c = 4 + oa(l), d = l.subarray(c), h = 0, m = 0, g = !1, T;
            m < d.byteLength - 3;
            m++
          )
            if (d[m + 2] === 1) {
              h = m + 5;
              break;
            }
          for (; h < d.byteLength; )
            switch (d[h]) {
              case 0:
                if (d[h - 1] !== 0) {
                  h += 2;
                  break;
                } else if (d[h - 2] !== 0) {
                  h++;
                  break;
                }
                m + 3 !== h - 2 &&
                  ((T = rl(d[m + 3] & 31)),
                  T === "slice_layer_without_partitioning_rbsp_idr" &&
                    (g = !0));
                do h++;
                while (d[h] !== 1 && h < d.length);
                (m = h - 2), (h += 3);
                break;
              case 1:
                if (d[h - 1] !== 0 || d[h - 2] !== 0) {
                  h += 3;
                  break;
                }
                (T = rl(d[m + 3] & 31)),
                  T === "slice_layer_without_partitioning_rbsp_idr" && (g = !0),
                  (m = h - 2),
                  (h += 3);
                break;
              default:
                h += 3;
                break;
            }
          return (
            (d = d.subarray(m)),
            (h -= m),
            (m = 0),
            d &&
              d.byteLength > 3 &&
              ((T = rl(d[m + 3] & 31)),
              T === "slice_layer_without_partitioning_rbsp_idr" && (g = !0)),
            g
          );
        },
        _y = {
          parseType: dy,
          parsePat: hy,
          parsePmt: fy,
          parsePayloadUnitStartIndicator: aa,
          parsePesType: py,
          parsePesTime: my,
          videoPacketContainsKeyFrame: gy,
        },
        Pd = Vr,
        As = td.handleRollover,
        Ae = {};
      (Ae.ts = _y), (Ae.aac = Jo);
      var ss = Ie.ONE_SECOND_IN_TS,
        ct = 188,
        ii = 71,
        yy = function (l, c) {
          for (var d = 0, h = ct, m, g; h < l.byteLength; ) {
            if (l[d] === ii && l[h] === ii) {
              switch (
                ((m = l.subarray(d, h)), (g = Ae.ts.parseType(m, c.pid)), g)
              ) {
                case "pat":
                  c.pid = Ae.ts.parsePat(m);
                  break;
                case "pmt":
                  var T = Ae.ts.parsePmt(m);
                  (c.table = c.table || {}),
                    Object.keys(T).forEach(function (b) {
                      c.table[b] = T[b];
                    });
                  break;
              }
              (d += ct), (h += ct);
              continue;
            }
            d++, h++;
          }
        },
        Dd = function (l, c, d) {
          for (var h = 0, m = ct, g, T, b, x, w, P = !1; m <= l.byteLength; ) {
            if (l[h] === ii && (l[m] === ii || m === l.byteLength)) {
              switch (
                ((g = l.subarray(h, m)), (T = Ae.ts.parseType(g, c.pid)), T)
              ) {
                case "pes":
                  (b = Ae.ts.parsePesType(g, c.table)),
                    (x = Ae.ts.parsePayloadUnitStartIndicator(g)),
                    b === "audio" &&
                      x &&
                      ((w = Ae.ts.parsePesTime(g)),
                      w && ((w.type = "audio"), d.audio.push(w), (P = !0)));
                  break;
              }
              if (P) break;
              (h += ct), (m += ct);
              continue;
            }
            h++, m++;
          }
          for (m = l.byteLength, h = m - ct, P = !1; h >= 0; ) {
            if (l[h] === ii && (l[m] === ii || m === l.byteLength)) {
              switch (
                ((g = l.subarray(h, m)), (T = Ae.ts.parseType(g, c.pid)), T)
              ) {
                case "pes":
                  (b = Ae.ts.parsePesType(g, c.table)),
                    (x = Ae.ts.parsePayloadUnitStartIndicator(g)),
                    b === "audio" &&
                      x &&
                      ((w = Ae.ts.parsePesTime(g)),
                      w && ((w.type = "audio"), d.audio.push(w), (P = !0)));
                  break;
              }
              if (P) break;
              (h -= ct), (m -= ct);
              continue;
            }
            h--, m--;
          }
        },
        vy = function (l, c, d) {
          for (
            var h = 0,
              m = ct,
              g,
              T,
              b,
              x,
              w,
              P,
              U,
              J,
              $ = !1,
              le = { data: [], size: 0 };
            m < l.byteLength;

          ) {
            if (l[h] === ii && l[m] === ii) {
              switch (
                ((g = l.subarray(h, m)), (T = Ae.ts.parseType(g, c.pid)), T)
              ) {
                case "pes":
                  if (
                    ((b = Ae.ts.parsePesType(g, c.table)),
                    (x = Ae.ts.parsePayloadUnitStartIndicator(g)),
                    b === "video" &&
                      (x &&
                        !$ &&
                        ((w = Ae.ts.parsePesTime(g)),
                        w && ((w.type = "video"), d.video.push(w), ($ = !0))),
                      !d.firstKeyFrame))
                  ) {
                    if (x && le.size !== 0) {
                      for (P = new Uint8Array(le.size), U = 0; le.data.length; )
                        (J = le.data.shift()), P.set(J, U), (U += J.byteLength);
                      if (Ae.ts.videoPacketContainsKeyFrame(P)) {
                        var fe = Ae.ts.parsePesTime(P);
                        fe &&
                          ((d.firstKeyFrame = fe),
                          (d.firstKeyFrame.type = "video"));
                      }
                      le.size = 0;
                    }
                    le.data.push(g), (le.size += g.byteLength);
                  }
                  break;
              }
              if ($ && d.firstKeyFrame) break;
              (h += ct), (m += ct);
              continue;
            }
            h++, m++;
          }
          for (m = l.byteLength, h = m - ct, $ = !1; h >= 0; ) {
            if (l[h] === ii && l[m] === ii) {
              switch (
                ((g = l.subarray(h, m)), (T = Ae.ts.parseType(g, c.pid)), T)
              ) {
                case "pes":
                  (b = Ae.ts.parsePesType(g, c.table)),
                    (x = Ae.ts.parsePayloadUnitStartIndicator(g)),
                    b === "video" &&
                      x &&
                      ((w = Ae.ts.parsePesTime(g)),
                      w && ((w.type = "video"), d.video.push(w), ($ = !0)));
                  break;
              }
              if ($) break;
              (h -= ct), (m -= ct);
              continue;
            }
            h--, m--;
          }
        },
        Ty = function (l, c) {
          if (l.audio && l.audio.length) {
            var d = c;
            (typeof d > "u" || isNaN(d)) && (d = l.audio[0].dts),
              l.audio.forEach(function (g) {
                (g.dts = As(g.dts, d)),
                  (g.pts = As(g.pts, d)),
                  (g.dtsTime = g.dts / ss),
                  (g.ptsTime = g.pts / ss);
              });
          }
          if (l.video && l.video.length) {
            var h = c;
            if (
              ((typeof h > "u" || isNaN(h)) && (h = l.video[0].dts),
              l.video.forEach(function (g) {
                (g.dts = As(g.dts, h)),
                  (g.pts = As(g.pts, h)),
                  (g.dtsTime = g.dts / ss),
                  (g.ptsTime = g.pts / ss);
              }),
              l.firstKeyFrame)
            ) {
              var m = l.firstKeyFrame;
              (m.dts = As(m.dts, h)),
                (m.pts = As(m.pts, h)),
                (m.dtsTime = m.dts / ss),
                (m.ptsTime = m.pts / ss);
            }
          }
        },
        by = function (l) {
          for (
            var c = !1, d = 0, h = null, m = null, g = 0, T = 0, b;
            l.length - T >= 3;

          ) {
            var x = Ae.aac.parseType(l, T);
            switch (x) {
              case "timed-metadata":
                if (l.length - T < 10) {
                  c = !0;
                  break;
                }
                if (((g = Ae.aac.parseId3TagSize(l, T)), g > l.length)) {
                  c = !0;
                  break;
                }
                m === null &&
                  ((b = l.subarray(T, T + g)),
                  (m = Ae.aac.parseAacTimestamp(b))),
                  (T += g);
                break;
              case "audio":
                if (l.length - T < 7) {
                  c = !0;
                  break;
                }
                if (((g = Ae.aac.parseAdtsSize(l, T)), g > l.length)) {
                  c = !0;
                  break;
                }
                h === null &&
                  ((b = l.subarray(T, T + g)), (h = Ae.aac.parseSampleRate(b))),
                  d++,
                  (T += g);
                break;
              default:
                T++;
                break;
            }
            if (c) return null;
          }
          if (h === null || m === null) return null;
          var w = ss / h,
            P = {
              audio: [
                { type: "audio", dts: m, pts: m },
                { type: "audio", dts: m + d * 1024 * w, pts: m + d * 1024 * w },
              ],
            };
          return P;
        },
        xy = function (l) {
          var c = { pid: null, table: null },
            d = {};
          yy(l, c);
          for (var h in c.table)
            if (c.table.hasOwnProperty(h)) {
              var m = c.table[h];
              switch (m) {
                case Pd.H264_STREAM_TYPE:
                  (d.video = []),
                    vy(l, c, d),
                    d.video.length === 0 && delete d.video;
                  break;
                case Pd.ADTS_STREAM_TYPE:
                  (d.audio = []),
                    Dd(l, c, d),
                    d.audio.length === 0 && delete d.audio;
                  break;
              }
            }
          return d;
        },
        Sy = function (l, c) {
          var d = Ae.aac.isLikelyAacData(l),
            h;
          return (
            d ? (h = by(l)) : (h = xy(l)),
            !h || (!h.audio && !h.video) ? null : (Ty(h, c), h)
          );
        },
        Ey = { inspect: Sy, parseAudioPes_: Dd };
      const Cy = function (l, c) {
        c.on("data", function (d) {
          const h = d.initSegment;
          d.initSegment = {
            data: h.buffer,
            byteOffset: h.byteOffset,
            byteLength: h.byteLength,
          };
          const m = d.data;
          (d.data = m.buffer),
            l.postMessage(
              {
                action: "data",
                segment: d,
                byteOffset: m.byteOffset,
                byteLength: m.byteLength,
              },
              [d.data]
            );
        }),
          c.on("done", function (d) {
            l.postMessage({ action: "done" });
          }),
          c.on("gopInfo", function (d) {
            l.postMessage({ action: "gopInfo", gopInfo: d });
          }),
          c.on("videoSegmentTimingInfo", function (d) {
            const h = {
              start: {
                decode: Ie.videoTsToSeconds(d.start.dts),
                presentation: Ie.videoTsToSeconds(d.start.pts),
              },
              end: {
                decode: Ie.videoTsToSeconds(d.end.dts),
                presentation: Ie.videoTsToSeconds(d.end.pts),
              },
              baseMediaDecodeTime: Ie.videoTsToSeconds(d.baseMediaDecodeTime),
            };
            d.prependedContentDuration &&
              (h.prependedContentDuration = Ie.videoTsToSeconds(
                d.prependedContentDuration
              )),
              l.postMessage({
                action: "videoSegmentTimingInfo",
                videoSegmentTimingInfo: h,
              });
          }),
          c.on("audioSegmentTimingInfo", function (d) {
            const h = {
              start: {
                decode: Ie.videoTsToSeconds(d.start.dts),
                presentation: Ie.videoTsToSeconds(d.start.pts),
              },
              end: {
                decode: Ie.videoTsToSeconds(d.end.dts),
                presentation: Ie.videoTsToSeconds(d.end.pts),
              },
              baseMediaDecodeTime: Ie.videoTsToSeconds(d.baseMediaDecodeTime),
            };
            d.prependedContentDuration &&
              (h.prependedContentDuration = Ie.videoTsToSeconds(
                d.prependedContentDuration
              )),
              l.postMessage({
                action: "audioSegmentTimingInfo",
                audioSegmentTimingInfo: h,
              });
          }),
          c.on("id3Frame", function (d) {
            l.postMessage({ action: "id3Frame", id3Frame: d });
          }),
          c.on("caption", function (d) {
            l.postMessage({ action: "caption", caption: d });
          }),
          c.on("trackinfo", function (d) {
            l.postMessage({ action: "trackinfo", trackInfo: d });
          }),
          c.on("audioTimingInfo", function (d) {
            l.postMessage({
              action: "audioTimingInfo",
              audioTimingInfo: {
                start: Ie.videoTsToSeconds(d.start),
                end: Ie.videoTsToSeconds(d.end),
              },
            });
          }),
          c.on("videoTimingInfo", function (d) {
            l.postMessage({
              action: "videoTimingInfo",
              videoTimingInfo: {
                start: Ie.videoTsToSeconds(d.start),
                end: Ie.videoTsToSeconds(d.end),
              },
            });
          }),
          c.on("log", function (d) {
            l.postMessage({ action: "log", log: d });
          });
      };
      class Ld {
        constructor(c, d) {
          (this.options = d || {}), (this.self = c), this.init();
        }
        init() {
          this.transmuxer && this.transmuxer.dispose(),
            (this.transmuxer = new M_.Transmuxer(this.options)),
            Cy(this.self, this.transmuxer);
        }
        pushMp4Captions(c) {
          this.captionParser ||
            ((this.captionParser = new ay()), this.captionParser.init());
          const d = new Uint8Array(c.data, c.byteOffset, c.byteLength),
            h = this.captionParser.parse(d, c.trackIds, c.timescales);
          this.self.postMessage(
            {
              action: "mp4Captions",
              captions: (h && h.captions) || [],
              logs: (h && h.logs) || [],
              data: d.buffer,
            },
            [d.buffer]
          );
        }
        probeMp4StartTime({ timescales: c, data: d }) {
          const h = Id.startTime(c, d);
          this.self.postMessage(
            { action: "probeMp4StartTime", startTime: h, data: d },
            [d.buffer]
          );
        }
        probeMp4Tracks({ data: c }) {
          const d = Id.tracks(c);
          this.self.postMessage(
            { action: "probeMp4Tracks", tracks: d, data: c },
            [c.buffer]
          );
        }
        probeTs({ data: c, baseStartTime: d }) {
          const h =
              typeof d == "number" && !isNaN(d)
                ? d * Ie.ONE_SECOND_IN_TS
                : void 0,
            m = Ey.inspect(c, h);
          let g = null;
          m &&
            ((g = {
              hasVideo: (m.video && m.video.length === 2) || !1,
              hasAudio: (m.audio && m.audio.length === 2) || !1,
            }),
            g.hasVideo && (g.videoStart = m.video[0].ptsTime),
            g.hasAudio && (g.audioStart = m.audio[0].ptsTime)),
            this.self.postMessage({ action: "probeTs", result: g, data: c }, [
              c.buffer,
            ]);
        }
        clearAllMp4Captions() {
          this.captionParser && this.captionParser.clearAllCaptions();
        }
        clearParsedMp4Captions() {
          this.captionParser && this.captionParser.clearParsedCaptions();
        }
        push(c) {
          const d = new Uint8Array(c.data, c.byteOffset, c.byteLength);
          this.transmuxer.push(d);
        }
        reset() {
          this.transmuxer.reset();
        }
        setTimestampOffset(c) {
          const d = c.timestampOffset || 0;
          this.transmuxer.setBaseMediaDecodeTime(
            Math.round(Ie.secondsToVideoTs(d))
          );
        }
        setAudioAppendStart(c) {
          this.transmuxer.setAudioAppendStart(
            Math.ceil(Ie.secondsToVideoTs(c.appendStart))
          );
        }
        setRemux(c) {
          this.transmuxer.setRemux(c.remux);
        }
        flush(c) {
          this.transmuxer.flush(),
            self.postMessage({ action: "done", type: "transmuxed" });
        }
        endTimeline() {
          this.transmuxer.endTimeline(),
            self.postMessage({ action: "endedtimeline", type: "transmuxed" });
        }
        alignGopsWith(c) {
          this.transmuxer.alignGopsWith(c.gopsToAlignWith.slice());
        }
      }
      self.onmessage = function (l) {
        if (l.data.action === "init" && l.data.options) {
          this.messageHandlers = new Ld(self, l.data.options);
          return;
        }
        this.messageHandlers || (this.messageHandlers = new Ld(self)),
          l.data &&
            l.data.action &&
            l.data.action !== "init" &&
            this.messageHandlers[l.data.action] &&
            this.messageHandlers[l.data.action](l.data);
      };
    })
  );
var lw = d0(ow);
const uw = (t, e, i) => {
    const {
      type: s,
      initSegment: n,
      captions: r,
      captionStreams: a,
      metadata: o,
      videoFrameDtsTime: u,
      videoFramePtsTime: f,
    } = t.data.segment;
    e.buffer.push({ captions: r, captionStreams: a, metadata: o });
    const p = t.data.segment.boxes || { data: t.data.segment.data },
      _ = {
        type: s,
        data: new Uint8Array(p.data, p.data.byteOffset, p.data.byteLength),
        initSegment: new Uint8Array(n.data, n.byteOffset, n.byteLength),
      };
    typeof u < "u" && (_.videoFrameDtsTime = u),
      typeof f < "u" && (_.videoFramePtsTime = f),
      i(_);
  },
  cw = ({ transmuxedData: t, callback: e }) => {
    (t.buffer = []), e(t);
  },
  dw = (t, e) => {
    e.gopInfo = t.data.gopInfo;
  },
  p0 = (t) => {
    const {
        transmuxer: e,
        bytes: i,
        audioAppendStart: s,
        gopsToAlignWith: n,
        remux: r,
        onData: a,
        onTrackInfo: o,
        onAudioTimingInfo: u,
        onVideoTimingInfo: f,
        onVideoSegmentTimingInfo: p,
        onAudioSegmentTimingInfo: _,
        onId3: v,
        onCaptions: y,
        onDone: A,
        onEndedTimeline: S,
        onTransmuxerLog: E,
        isEndOfTimeline: k,
      } = t,
      D = { buffer: [] };
    let R = k;
    const N = (L) => {
      e.currentTransmux === t &&
        (L.data.action === "data" && uw(L, D, a),
        L.data.action === "trackinfo" && o(L.data.trackInfo),
        L.data.action === "gopInfo" && dw(L, D),
        L.data.action === "audioTimingInfo" && u(L.data.audioTimingInfo),
        L.data.action === "videoTimingInfo" && f(L.data.videoTimingInfo),
        L.data.action === "videoSegmentTimingInfo" &&
          p(L.data.videoSegmentTimingInfo),
        L.data.action === "audioSegmentTimingInfo" &&
          _(L.data.audioSegmentTimingInfo),
        L.data.action === "id3Frame" &&
          v([L.data.id3Frame], L.data.id3Frame.dispatchType),
        L.data.action === "caption" && y(L.data.caption),
        L.data.action === "endedtimeline" && ((R = !1), S()),
        L.data.action === "log" && E(L.data.log),
        L.data.type === "transmuxed" &&
          (R ||
            ((e.onmessage = null),
            cw({ transmuxedData: D, callback: A }),
            m0(e))));
    };
    if (
      ((e.onmessage = N),
      s && e.postMessage({ action: "setAudioAppendStart", appendStart: s }),
      Array.isArray(n) &&
        e.postMessage({ action: "alignGopsWith", gopsToAlignWith: n }),
      typeof r < "u" && e.postMessage({ action: "setRemux", remux: r }),
      i.byteLength)
    ) {
      const L = i instanceof ArrayBuffer ? i : i.buffer,
        z = i instanceof ArrayBuffer ? 0 : i.byteOffset;
      e.postMessage(
        { action: "push", data: L, byteOffset: z, byteLength: i.byteLength },
        [L]
      );
    }
    k && e.postMessage({ action: "endTimeline" }),
      e.postMessage({ action: "flush" });
  },
  m0 = (t) => {
    (t.currentTransmux = null),
      t.transmuxQueue.length &&
        ((t.currentTransmux = t.transmuxQueue.shift()),
        typeof t.currentTransmux == "function"
          ? t.currentTransmux()
          : p0(t.currentTransmux));
  },
  bf = (t, e) => {
    t.postMessage({ action: e }), m0(t);
  },
  g0 = (t, e) => {
    if (!e.currentTransmux) {
      (e.currentTransmux = t), bf(e, t);
      return;
    }
    e.transmuxQueue.push(bf.bind(null, e, t));
  },
  hw = (t) => {
    g0("reset", t);
  },
  fw = (t) => {
    g0("endTimeline", t);
  },
  _0 = (t) => {
    if (!t.transmuxer.currentTransmux) {
      (t.transmuxer.currentTransmux = t), p0(t);
      return;
    }
    t.transmuxer.transmuxQueue.push(t);
  },
  pw = (t) => {
    const e = new lw();
    (e.currentTransmux = null), (e.transmuxQueue = []);
    const i = e.terminate;
    return (
      (e.terminate = () => (
        (e.currentTransmux = null), (e.transmuxQueue.length = 0), i.call(e)
      )),
      e.postMessage({ action: "init", options: t }),
      e
    );
  };
var Ll = { reset: hw, endTimeline: fw, transmux: _0, createTransmuxer: pw };
const ao = function (t) {
    const e = t.transmuxer,
      i = t.endAction || t.action,
      s = t.callback,
      n = Di({}, t, { endAction: null, transmuxer: null, callback: null }),
      r = (a) => {
        a.data.action === i &&
          (e.removeEventListener("message", r),
          a.data.data &&
            ((a.data.data = new Uint8Array(
              a.data.data,
              t.byteOffset || 0,
              t.byteLength || a.data.data.byteLength
            )),
            t.data && (t.data = a.data.data)),
          s(a.data));
      };
    if ((e.addEventListener("message", r), t.data)) {
      const a = t.data instanceof ArrayBuffer;
      (n.byteOffset = a ? 0 : t.data.byteOffset),
        (n.byteLength = t.data.byteLength);
      const o = [a ? t.data : t.data.buffer];
      e.postMessage(n, o);
    } else e.postMessage(n);
  },
  hi = { FAILURE: 2, TIMEOUT: -101, ABORTED: -102 },
  Tu = (t) => {
    t.forEach((e) => {
      e.abort();
    });
  },
  mw = (t) => ({
    bandwidth: t.bandwidth,
    bytesReceived: t.bytesReceived || 0,
    roundTripTime: t.roundTripTime || 0,
  }),
  gw = (t) => {
    const e = t.target,
      s = {
        bandwidth: 1 / 0,
        bytesReceived: 0,
        roundTripTime: Date.now() - e.requestTime || 0,
      };
    return (
      (s.bytesReceived = t.loaded),
      (s.bandwidth = Math.floor((s.bytesReceived / s.roundTripTime) * 8 * 1e3)),
      s
    );
  },
  Gc = (t, e) =>
    e.timedout
      ? {
          status: e.status,
          message: "HLS request timed-out at URL: " + e.uri,
          code: hi.TIMEOUT,
          xhr: e,
        }
      : e.aborted
      ? {
          status: e.status,
          message: "HLS request aborted at URL: " + e.uri,
          code: hi.ABORTED,
          xhr: e,
        }
      : t
      ? {
          status: e.status,
          message: "HLS request errored at URL: " + e.uri,
          code: hi.FAILURE,
          xhr: e,
        }
      : e.responseType === "arraybuffer" && e.response.byteLength === 0
      ? {
          status: e.status,
          message: "Empty HLS response at URL: " + e.uri,
          code: hi.FAILURE,
          xhr: e,
        }
      : null,
  xf = (t, e, i) => (s, n) => {
    const r = n.response,
      a = Gc(s, n);
    if (a) return i(a, t);
    if (r.byteLength !== 16)
      return i(
        {
          status: n.status,
          message: "Invalid HLS key at URL: " + n.uri,
          code: hi.FAILURE,
          xhr: n,
        },
        t
      );
    const o = new DataView(r),
      u = new Uint32Array([
        o.getUint32(0),
        o.getUint32(4),
        o.getUint32(8),
        o.getUint32(12),
      ]);
    for (let f = 0; f < e.length; f++) e[f].bytes = u;
    return i(null, t);
  },
  y0 = (t, e) => {
    const i = dc(t.map.bytes);
    if (i !== "mp4") {
      const s = t.map.resolvedUri || t.map.uri;
      return e({
        internal: !0,
        message: `Found unsupported ${
          i || "unknown"
        } container for initialization segment at URL: ${s}`,
        code: hi.FAILURE,
      });
    }
    ao({
      action: "probeMp4Tracks",
      data: t.map.bytes,
      transmuxer: t.transmuxer,
      callback: ({ tracks: s, data: n }) => (
        (t.map.bytes = n),
        s.forEach(function (r) {
          (t.map.tracks = t.map.tracks || {}),
            !t.map.tracks[r.type] &&
              ((t.map.tracks[r.type] = r),
              typeof r.id == "number" &&
                r.timescale &&
                ((t.map.timescales = t.map.timescales || {}),
                (t.map.timescales[r.id] = r.timescale)));
        }),
        e(null)
      ),
    });
  },
  _w =
    ({ segment: t, finishProcessingFn: e }) =>
    (i, s) => {
      const n = Gc(i, s);
      if (n) return e(n, t);
      const r = new Uint8Array(s.response);
      if (t.map.key) return (t.map.encryptedBytes = r), e(null, t);
      (t.map.bytes = r),
        y0(t, function (a) {
          if (a) return (a.xhr = s), (a.status = s.status), e(a, t);
          e(null, t);
        });
    },
  yw =
    ({ segment: t, finishProcessingFn: e, responseType: i }) =>
    (s, n) => {
      const r = Gc(s, n);
      if (r) return e(r, t);
      const a =
        i === "arraybuffer" || !n.responseText
          ? n.response
          : rw(n.responseText.substring(t.lastReachedChar || 0));
      return (
        (t.stats = mw(n)),
        t.key
          ? (t.encryptedBytes = new Uint8Array(a))
          : (t.bytes = new Uint8Array(a)),
        e(null, t)
      );
    },
  vw = ({
    segment: t,
    bytes: e,
    trackInfoFn: i,
    timingInfoFn: s,
    videoSegmentTimingInfoFn: n,
    audioSegmentTimingInfoFn: r,
    id3Fn: a,
    captionsFn: o,
    isEndOfTimeline: u,
    endedTimelineFn: f,
    dataFn: p,
    doneFn: _,
    onTransmuxerLog: v,
  }) => {
    const y = (t.map && t.map.tracks) || {},
      A = Boolean(y.audio && y.video);
    let S = s.bind(null, t, "audio", "start");
    const E = s.bind(null, t, "audio", "end");
    let k = s.bind(null, t, "video", "start");
    const D = s.bind(null, t, "video", "end"),
      R = () =>
        _0({
          bytes: e,
          transmuxer: t.transmuxer,
          audioAppendStart: t.audioAppendStart,
          gopsToAlignWith: t.gopsToAlignWith,
          remux: A,
          onData: (N) => {
            (N.type = N.type === "combined" ? "video" : N.type), p(t, N);
          },
          onTrackInfo: (N) => {
            i && (A && (N.isMuxed = !0), i(t, N));
          },
          onAudioTimingInfo: (N) => {
            S && typeof N.start < "u" && (S(N.start), (S = null)),
              E && typeof N.end < "u" && E(N.end);
          },
          onVideoTimingInfo: (N) => {
            k && typeof N.start < "u" && (k(N.start), (k = null)),
              D && typeof N.end < "u" && D(N.end);
          },
          onVideoSegmentTimingInfo: (N) => {
            n(N);
          },
          onAudioSegmentTimingInfo: (N) => {
            r(N);
          },
          onId3: (N, L) => {
            a(t, N, L);
          },
          onCaptions: (N) => {
            o(t, [N]);
          },
          isEndOfTimeline: u,
          onEndedTimeline: () => {
            f();
          },
          onTransmuxerLog: v,
          onDone: (N) => {
            _ &&
              ((N.type = N.type === "combined" ? "video" : N.type),
              _(null, t, N));
          },
        });
    ao({
      action: "probeTs",
      transmuxer: t.transmuxer,
      data: e,
      baseStartTime: t.baseStartTime,
      callback: (N) => {
        t.bytes = e = N.data;
        const L = N.result;
        L &&
          (i(t, { hasAudio: L.hasAudio, hasVideo: L.hasVideo, isMuxed: A }),
          (i = null),
          L.hasAudio && !A && S(L.audioStart),
          L.hasVideo && k(L.videoStart),
          (S = null),
          (k = null)),
          R();
      },
    });
  },
  v0 = ({
    segment: t,
    bytes: e,
    trackInfoFn: i,
    timingInfoFn: s,
    videoSegmentTimingInfoFn: n,
    audioSegmentTimingInfoFn: r,
    id3Fn: a,
    captionsFn: o,
    isEndOfTimeline: u,
    endedTimelineFn: f,
    dataFn: p,
    doneFn: _,
    onTransmuxerLog: v,
  }) => {
    let y = new Uint8Array(e);
    if (YS(y)) {
      t.isFmp4 = !0;
      const { tracks: A } = t.map,
        S = { isFmp4: !0, hasVideo: !!A.video, hasAudio: !!A.audio };
      A.audio &&
        A.audio.codec &&
        A.audio.codec !== "enca" &&
        (S.audioCodec = A.audio.codec),
        A.video &&
          A.video.codec &&
          A.video.codec !== "encv" &&
          (S.videoCodec = A.video.codec),
        A.video && A.audio && (S.isMuxed = !0),
        i(t, S);
      const E = (k) => {
        p(t, { data: y, type: S.hasAudio && !S.isMuxed ? "audio" : "video" }),
          k && k.length && o(t, k),
          _(null, t, {});
      };
      ao({
        action: "probeMp4StartTime",
        timescales: t.map.timescales,
        data: y,
        transmuxer: t.transmuxer,
        callback: ({ data: k, startTime: D }) => {
          if (
            ((e = k.buffer),
            (t.bytes = y = k),
            S.hasAudio && !S.isMuxed && s(t, "audio", "start", D),
            S.hasVideo && s(t, "video", "start", D),
            !A.video || !k.byteLength || !t.transmuxer)
          ) {
            E();
            return;
          }
          ao({
            action: "pushMp4Captions",
            endAction: "mp4Captions",
            transmuxer: t.transmuxer,
            data: y,
            timescales: t.map.timescales,
            trackIds: [A.video.id],
            callback: (R) => {
              (e = R.data.buffer),
                (t.bytes = y = R.data),
                R.logs.forEach(function (N) {
                  v(Pe(N, { stream: "mp4CaptionParser" }));
                }),
                E(R.captions);
            },
          });
        },
      });
      return;
    }
    if (!t.transmuxer) {
      _(null, t, {});
      return;
    }
    if (
      (typeof t.container > "u" && (t.container = dc(y)),
      t.container !== "ts" && t.container !== "aac")
    ) {
      i(t, { hasAudio: !1, hasVideo: !1 }), _(null, t, {});
      return;
    }
    vw({
      segment: t,
      bytes: e,
      trackInfoFn: i,
      timingInfoFn: s,
      videoSegmentTimingInfoFn: n,
      audioSegmentTimingInfoFn: r,
      id3Fn: a,
      captionsFn: o,
      isEndOfTimeline: u,
      endedTimelineFn: f,
      dataFn: p,
      doneFn: _,
      onTransmuxerLog: v,
    });
  },
  T0 = function ({ id: t, key: e, encryptedBytes: i, decryptionWorker: s }, n) {
    const r = (o) => {
      if (o.data.source === t) {
        s.removeEventListener("message", r);
        const u = o.data.decrypted;
        n(new Uint8Array(u.bytes, u.byteOffset, u.byteLength));
      }
    };
    s.addEventListener("message", r);
    let a;
    e.bytes.slice
      ? (a = e.bytes.slice())
      : (a = new Uint32Array(Array.prototype.slice.call(e.bytes))),
      s.postMessage(r0({ source: t, encrypted: i, key: a, iv: e.iv }), [
        i.buffer,
        a.buffer,
      ]);
  },
  Tw = ({
    decryptionWorker: t,
    segment: e,
    trackInfoFn: i,
    timingInfoFn: s,
    videoSegmentTimingInfoFn: n,
    audioSegmentTimingInfoFn: r,
    id3Fn: a,
    captionsFn: o,
    isEndOfTimeline: u,
    endedTimelineFn: f,
    dataFn: p,
    doneFn: _,
    onTransmuxerLog: v,
  }) => {
    T0(
      {
        id: e.requestId,
        key: e.key,
        encryptedBytes: e.encryptedBytes,
        decryptionWorker: t,
      },
      (y) => {
        (e.bytes = y),
          v0({
            segment: e,
            bytes: e.bytes,
            trackInfoFn: i,
            timingInfoFn: s,
            videoSegmentTimingInfoFn: n,
            audioSegmentTimingInfoFn: r,
            id3Fn: a,
            captionsFn: o,
            isEndOfTimeline: u,
            endedTimelineFn: f,
            dataFn: p,
            doneFn: _,
            onTransmuxerLog: v,
          });
      }
    );
  },
  bw = ({
    activeXhrs: t,
    decryptionWorker: e,
    trackInfoFn: i,
    timingInfoFn: s,
    videoSegmentTimingInfoFn: n,
    audioSegmentTimingInfoFn: r,
    id3Fn: a,
    captionsFn: o,
    isEndOfTimeline: u,
    endedTimelineFn: f,
    dataFn: p,
    doneFn: _,
    onTransmuxerLog: v,
  }) => {
    let y = 0,
      A = !1;
    return (S, E) => {
      if (!A) {
        if (S) return (A = !0), Tu(t), _(S, E);
        if (((y += 1), y === t.length)) {
          const k = function () {
            if (E.encryptedBytes)
              return Tw({
                decryptionWorker: e,
                segment: E,
                trackInfoFn: i,
                timingInfoFn: s,
                videoSegmentTimingInfoFn: n,
                audioSegmentTimingInfoFn: r,
                id3Fn: a,
                captionsFn: o,
                isEndOfTimeline: u,
                endedTimelineFn: f,
                dataFn: p,
                doneFn: _,
                onTransmuxerLog: v,
              });
            v0({
              segment: E,
              bytes: E.bytes,
              trackInfoFn: i,
              timingInfoFn: s,
              videoSegmentTimingInfoFn: n,
              audioSegmentTimingInfoFn: r,
              id3Fn: a,
              captionsFn: o,
              isEndOfTimeline: u,
              endedTimelineFn: f,
              dataFn: p,
              doneFn: _,
              onTransmuxerLog: v,
            });
          };
          if (
            ((E.endOfAllRequests = Date.now()),
            E.map && E.map.encryptedBytes && !E.map.bytes)
          )
            return T0(
              {
                decryptionWorker: e,
                id: E.requestId + "-init",
                encryptedBytes: E.map.encryptedBytes,
                key: E.map.key,
              },
              (D) => {
                (E.map.bytes = D),
                  y0(E, (R) => {
                    if (R) return Tu(t), _(R, E);
                    k();
                  });
              }
            );
          k();
        }
      }
    };
  },
  xw =
    ({ loadendState: t, abortFn: e }) =>
    (i) => {
      i.target.aborted &&
        e &&
        !t.calledAbortFn &&
        (e(), (t.calledAbortFn = !0));
    },
  Sw =
    ({
      segment: t,
      progressFn: e,
      trackInfoFn: i,
      timingInfoFn: s,
      videoSegmentTimingInfoFn: n,
      audioSegmentTimingInfoFn: r,
      id3Fn: a,
      captionsFn: o,
      isEndOfTimeline: u,
      endedTimelineFn: f,
      dataFn: p,
    }) =>
    (_) => {
      if (!_.target.aborted)
        return (
          (t.stats = Pe(t.stats, gw(_))),
          !t.stats.firstBytesReceivedAt &&
            t.stats.bytesReceived &&
            (t.stats.firstBytesReceivedAt = Date.now()),
          e(_, t)
        );
    },
  Ew = ({
    xhr: t,
    xhrOptions: e,
    decryptionWorker: i,
    segment: s,
    abortFn: n,
    progressFn: r,
    trackInfoFn: a,
    timingInfoFn: o,
    videoSegmentTimingInfoFn: u,
    audioSegmentTimingInfoFn: f,
    id3Fn: p,
    captionsFn: _,
    isEndOfTimeline: v,
    endedTimelineFn: y,
    dataFn: A,
    doneFn: S,
    onTransmuxerLog: E,
  }) => {
    const k = [],
      D = bw({
        activeXhrs: k,
        decryptionWorker: i,
        trackInfoFn: a,
        timingInfoFn: o,
        videoSegmentTimingInfoFn: u,
        audioSegmentTimingInfoFn: f,
        id3Fn: p,
        captionsFn: _,
        isEndOfTimeline: v,
        endedTimelineFn: y,
        dataFn: A,
        doneFn: S,
        onTransmuxerLog: E,
      });
    if (s.key && !s.key.bytes) {
      const Z = [s.key];
      s.map &&
        !s.map.bytes &&
        s.map.key &&
        s.map.key.resolvedUri === s.key.resolvedUri &&
        Z.push(s.map.key);
      const ae = Pe(e, { uri: s.key.resolvedUri, responseType: "arraybuffer" }),
        ne = xf(s, Z, D),
        ve = t(ae, ne);
      k.push(ve);
    }
    if (s.map && !s.map.bytes) {
      if (
        s.map.key &&
        (!s.key || s.key.resolvedUri !== s.map.key.resolvedUri)
      ) {
        const de = Pe(e, {
            uri: s.map.key.resolvedUri,
            responseType: "arraybuffer",
          }),
          xe = xf(s, [s.map.key], D),
          Y = t(de, xe);
        k.push(Y);
      }
      const ae = Pe(e, {
          uri: s.map.resolvedUri,
          responseType: "arraybuffer",
          headers: yu(s.map),
        }),
        ne = _w({ segment: s, finishProcessingFn: D }),
        ve = t(ae, ne);
      k.push(ve);
    }
    const R = Pe(e, {
        uri: (s.part && s.part.resolvedUri) || s.resolvedUri,
        responseType: "arraybuffer",
        headers: yu(s),
      }),
      N = yw({
        segment: s,
        finishProcessingFn: D,
        responseType: R.responseType,
      }),
      L = t(R, N);
    L.addEventListener(
      "progress",
      Sw({
        segment: s,
        progressFn: r,
        trackInfoFn: a,
        timingInfoFn: o,
        videoSegmentTimingInfoFn: u,
        audioSegmentTimingInfoFn: f,
        id3Fn: p,
        captionsFn: _,
        isEndOfTimeline: v,
        endedTimelineFn: y,
        dataFn: A,
      })
    ),
      k.push(L);
    const z = {};
    return (
      k.forEach((Z) => {
        Z.addEventListener("loadend", xw({ loadendState: z, abortFn: n }));
      }),
      () => Tu(k)
    );
  },
  Cw = ti("CodecUtils"),
  ww = function (t) {
    const e = t.attributes || {};
    if (e.CODECS) return ni(e.CODECS);
  },
  b0 = (t, e) => {
    const i = e.attributes || {};
    return (
      t &&
      t.mediaGroups &&
      t.mediaGroups.AUDIO &&
      i.AUDIO &&
      t.mediaGroups.AUDIO[i.AUDIO]
    );
  },
  Aw = (t, e) => {
    if (!b0(t, e)) return !0;
    const i = e.attributes || {},
      s = t.mediaGroups.AUDIO[i.AUDIO];
    for (const n in s) if (!s[n].uri && !s[n].playlists) return !0;
    return !1;
  },
  oo = function (t) {
    const e = {};
    return (
      t.forEach(({ mediaType: i, type: s, details: n }) => {
        (e[i] = e[i] || []), e[i].push(Bp(`${s}${n}`));
      }),
      Object.keys(e).forEach(function (i) {
        if (e[i].length > 1) {
          Cw(
            `multiple ${i} codecs found as attributes: ${e[i].join(
              ", "
            )}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`
          ),
            (e[i] = null);
          return;
        }
        e[i] = e[i][0];
      }),
      e
    );
  },
  Sf = function (t) {
    let e = 0;
    return t.audio && e++, t.video && e++, e;
  },
  ar = function (t, e) {
    const i = e.attributes || {},
      s = oo(ww(e) || []);
    if (b0(t, e) && !s.audio && !Aw(t, e)) {
      const n = oo(ex(t, i.AUDIO) || []);
      n.audio && (s.audio = n.audio);
    }
    return s;
  },
  Ta = ti("PlaylistSelector"),
  Ef = function (t) {
    if (!t || !t.playlist) return;
    const e = t.playlist;
    return JSON.stringify({
      id: e.id,
      bandwidth: t.bandwidth,
      width: t.width,
      height: t.height,
      codecs: (e.attributes && e.attributes.CODECS) || "",
    });
  },
  lo = function (t, e) {
    if (!t) return "";
    const i = C.getComputedStyle(t);
    return i ? i[e] : "";
  },
  Qs = function (t, e) {
    const i = t.slice();
    t.sort(function (s, n) {
      const r = e(s, n);
      return r === 0 ? i.indexOf(s) - i.indexOf(n) : r;
    });
  },
  Kc = function (t, e) {
    let i, s;
    return (
      t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH),
      (i = i || C.Number.MAX_VALUE),
      e.attributes.BANDWIDTH && (s = e.attributes.BANDWIDTH),
      (s = s || C.Number.MAX_VALUE),
      i - s
    );
  },
  kw = function (t, e) {
    let i, s;
    return (
      t.attributes.RESOLUTION &&
        t.attributes.RESOLUTION.width &&
        (i = t.attributes.RESOLUTION.width),
      (i = i || C.Number.MAX_VALUE),
      e.attributes.RESOLUTION &&
        e.attributes.RESOLUTION.width &&
        (s = e.attributes.RESOLUTION.width),
      (s = s || C.Number.MAX_VALUE),
      i === s && t.attributes.BANDWIDTH && e.attributes.BANDWIDTH
        ? t.attributes.BANDWIDTH - e.attributes.BANDWIDTH
        : i - s
    );
  };
let x0 = function (t, e, i, s, n, r) {
  if (!t) return;
  const a = {
    bandwidth: e,
    width: i,
    height: s,
    limitRenditionByPlayerDimensions: n,
  };
  let o = t.playlists;
  Ct.isAudioOnly(t) && ((o = r.getAudioTrackPlaylists_()), (a.audioOnly = !0));
  let u = o.map((L) => {
    let z;
    const Z =
        L.attributes &&
        L.attributes.RESOLUTION &&
        L.attributes.RESOLUTION.width,
      ae =
        L.attributes &&
        L.attributes.RESOLUTION &&
        L.attributes.RESOLUTION.height;
    return (
      (z = L.attributes && L.attributes.BANDWIDTH),
      (z = z || C.Number.MAX_VALUE),
      { bandwidth: z, width: Z, height: ae, playlist: L }
    );
  });
  Qs(u, (L, z) => L.bandwidth - z.bandwidth),
    (u = u.filter((L) => !Ct.isIncompatible(L.playlist)));
  let f = u.filter((L) => Ct.isEnabled(L.playlist));
  f.length || (f = u.filter((L) => !Ct.isDisabled(L.playlist)));
  const p = f.filter((L) => L.bandwidth * Ye.BANDWIDTH_VARIANCE < e);
  let _ = p[p.length - 1];
  const v = p.filter((L) => L.bandwidth === _.bandwidth)[0];
  if (n === !1) {
    const L = v || f[0] || u[0];
    if (L && L.playlist) {
      let z = "sortedPlaylistReps";
      return (
        v && (z = "bandwidthBestRep"),
        f[0] && (z = "enabledPlaylistReps"),
        Ta(`choosing ${Ef(L)} using ${z} with options`, a),
        L.playlist
      );
    }
    return Ta("could not choose a playlist with options", a), null;
  }
  const y = p.filter((L) => L.width && L.height);
  Qs(y, (L, z) => L.width - z.width);
  const A = y.filter((L) => L.width === i && L.height === s);
  _ = A[A.length - 1];
  const S = A.filter((L) => L.bandwidth === _.bandwidth)[0];
  let E, k, D;
  S ||
    ((E = y.filter((L) => L.width > i || L.height > s)),
    (k = E.filter((L) => L.width === E[0].width && L.height === E[0].height)),
    (_ = k[k.length - 1]),
    (D = k.filter((L) => L.bandwidth === _.bandwidth)[0]));
  let R;
  if (r.leastPixelDiffSelector) {
    const L = y.map(
      (z) => ((z.pixelDiff = Math.abs(z.width - i) + Math.abs(z.height - s)), z)
    );
    Qs(L, (z, Z) =>
      z.pixelDiff === Z.pixelDiff
        ? Z.bandwidth - z.bandwidth
        : z.pixelDiff - Z.pixelDiff
    ),
      (R = L[0]);
  }
  const N = R || D || S || v || f[0] || u[0];
  if (N && N.playlist) {
    let L = "sortedPlaylistReps";
    return (
      R
        ? (L = "leastPixelDiffRep")
        : D
        ? (L = "resolutionPlusOneRep")
        : S
        ? (L = "resolutionBestRep")
        : v
        ? (L = "bandwidthBestRep")
        : f[0] && (L = "enabledPlaylistReps"),
      Ta(`choosing ${Ef(N)} using ${L} with options`, a),
      N.playlist
    );
  }
  return Ta("could not choose a playlist with options", a), null;
};
const Cf = function () {
    const t = (this.useDevicePixelRatio && C.devicePixelRatio) || 1;
    return x0(
      this.playlists.main,
      this.systemBandwidth,
      parseInt(lo(this.tech_.el(), "width"), 10) * t,
      parseInt(lo(this.tech_.el(), "height"), 10) * t,
      this.limitRenditionByPlayerDimensions,
      this.playlistController_
    );
  },
  Iw = function (t) {
    let e = -1,
      i = -1;
    if (t < 0 || t > 1)
      throw new Error(
        "Moving average bandwidth decay must be between 0 and 1."
      );
    return function () {
      const s = (this.useDevicePixelRatio && C.devicePixelRatio) || 1;
      return (
        e < 0 && ((e = this.systemBandwidth), (i = this.systemBandwidth)),
        this.systemBandwidth > 0 &&
          this.systemBandwidth !== i &&
          ((e = t * this.systemBandwidth + (1 - t) * e),
          (i = this.systemBandwidth)),
        x0(
          this.playlists.main,
          e,
          parseInt(lo(this.tech_.el(), "width"), 10) * s,
          parseInt(lo(this.tech_.el(), "height"), 10) * s,
          this.limitRenditionByPlayerDimensions,
          this.playlistController_
        )
      );
    };
  },
  Ow = function (t) {
    const {
        main: e,
        currentTime: i,
        bandwidth: s,
        duration: n,
        segmentDuration: r,
        timeUntilRebuffer: a,
        currentTimeline: o,
        syncController: u,
      } = t,
      f = e.playlists.filter((A) => !Ct.isIncompatible(A));
    let p = f.filter(Ct.isEnabled);
    p.length || (p = f.filter((A) => !Ct.isDisabled(A)));
    const v = p.filter(Ct.hasAttribute.bind(null, "BANDWIDTH")).map((A) => {
        const E = u.getSyncPoint(A, n, o, i) ? 1 : 2,
          D = Ct.estimateSegmentRequestTime(r, s, A) * E - a;
        return { playlist: A, rebufferingImpact: D };
      }),
      y = v.filter((A) => A.rebufferingImpact <= 0);
    return (
      Qs(y, (A, S) => Kc(S.playlist, A.playlist)),
      y.length
        ? y[0]
        : (Qs(v, (A, S) => A.rebufferingImpact - S.rebufferingImpact),
          v[0] || null)
    );
  },
  Pw = function () {
    const t = this.playlists.main.playlists.filter(Ct.isEnabled);
    return (
      Qs(t, (i, s) => Kc(i, s)),
      t.filter((i) => !!ar(this.playlists.main, i).video)[0] || null
    );
  },
  Dw = (t) => {
    let e = 0,
      i;
    return (
      t.bytes &&
        ((i = new Uint8Array(t.bytes)),
        t.segments.forEach((s) => {
          i.set(s, e), (e += s.byteLength);
        })),
      i
    );
  },
  Lw = function (t, e, i) {
    if (!t[i]) {
      e.trigger({ type: "usage", name: "vhs-608" });
      let s = i;
      /^cc708_/.test(i) && (s = "SERVICE" + i.split("_")[1]);
      const n = e.textTracks().getTrackById(s);
      if (n) t[i] = n;
      else {
        const r = (e.options_.vhs && e.options_.vhs.captionServices) || {};
        let a = i,
          o = i,
          u = !1;
        const f = r[s];
        f && ((a = f.label), (o = f.language), (u = f.default)),
          (t[i] = e.addRemoteTextTrack(
            { kind: "captions", id: s, default: u, label: a, language: o },
            !1
          ).track);
      }
    }
  },
  Rw = function ({ inbandTextTracks: t, captionArray: e, timestampOffset: i }) {
    if (!e) return;
    const s = C.WebKitDataCue || C.VTTCue;
    e.forEach((n) => {
      const r = n.stream;
      t[r].addCue(new s(n.startTime + i, n.endTime + i, n.text));
    });
  },
  Nw = function (t) {
    Object.defineProperties(t.frame, {
      id: {
        get() {
          return (
            M.log.warn(
              "cue.frame.id is deprecated. Use cue.value.key instead."
            ),
            t.value.key
          );
        },
      },
      value: {
        get() {
          return (
            M.log.warn(
              "cue.frame.value is deprecated. Use cue.value.data instead."
            ),
            t.value.data
          );
        },
      },
      privateData: {
        get() {
          return (
            M.log.warn(
              "cue.frame.privateData is deprecated. Use cue.value.data instead."
            ),
            t.value.data
          );
        },
      },
    });
  },
  Mw = ({
    inbandTextTracks: t,
    metadataArray: e,
    timestampOffset: i,
    videoDuration: s,
  }) => {
    if (!e) return;
    const n = C.WebKitDataCue || C.VTTCue,
      r = t.metadataTrack_;
    if (
      !r ||
      (e.forEach((p) => {
        const _ = p.cueTime + i;
        typeof _ != "number" ||
          C.isNaN(_) ||
          _ < 0 ||
          !(_ < 1 / 0) ||
          p.frames.forEach((v) => {
            const y = new n(_, _, v.value || v.url || v.data || "");
            (y.frame = v), (y.value = v), Nw(y), r.addCue(y);
          });
      }),
      !r.cues || !r.cues.length)
    )
      return;
    const a = r.cues,
      o = [];
    for (let p = 0; p < a.length; p++) a[p] && o.push(a[p]);
    const u = o.reduce((p, _) => {
        const v = p[_.startTime] || [];
        return v.push(_), (p[_.startTime] = v), p;
      }, {}),
      f = Object.keys(u).sort((p, _) => Number(p) - Number(_));
    f.forEach((p, _) => {
      const v = u[p],
        y = Number(f[_ + 1]) || s;
      v.forEach((A) => {
        A.endTime = y;
      });
    });
  },
  Uw = (t, e, i) => {
    t.metadataTrack_ ||
      ((t.metadataTrack_ = i.addRemoteTextTrack(
        { kind: "metadata", label: "Timed Metadata" },
        !1
      ).track),
      (t.metadataTrack_.inBandMetadataTrackDispatchType = e));
  },
  Jn = function (t, e, i) {
    let s, n;
    if (i && i.cues)
      for (s = i.cues.length; s--; )
        (n = i.cues[s]), n.startTime >= t && n.endTime <= e && i.removeCue(n);
  },
  Fw = function (t) {
    const e = t.cues;
    if (e)
      for (let i = 0; i < e.length; i++) {
        const s = [];
        let n = 0;
        for (let r = 0; r < e.length; r++)
          e[i].startTime === e[r].startTime &&
            e[i].endTime === e[r].endTime &&
            e[i].text === e[r].text &&
            (n++, n > 1 && s.push(e[r]));
        s.length && s.forEach((r) => t.removeCue(r));
      }
  },
  Bw = (t, e, i) => {
    if (typeof e > "u" || e === null || !t.length) return [];
    const s = Math.ceil((e - i + 3) * qa.ONE_SECOND_IN_TS);
    let n;
    for (n = 0; n < t.length && !(t[n].pts > s); n++);
    return t.slice(n);
  },
  $w = (t, e, i) => {
    if (!e.length) return t;
    if (i) return e.slice();
    const s = e[0].pts;
    let n = 0;
    for (n; n < t.length && !(t[n].pts >= s); n++);
    return t.slice(0, n).concat(e);
  },
  jw = (t, e, i, s) => {
    const n = Math.ceil((e - s) * qa.ONE_SECOND_IN_TS),
      r = Math.ceil((i - s) * qa.ONE_SECOND_IN_TS),
      a = t.slice();
    let o = t.length;
    for (; o-- && !(t[o].pts <= r); );
    if (o === -1) return a;
    let u = o + 1;
    for (; u-- && !(t[u].pts <= n); );
    return (u = Math.max(u, 0)), a.splice(u, o - u + 1), a;
  },
  Hw = function (t, e) {
    if ((!t && !e) || (!t && e) || (t && !e)) return !1;
    if (t === e) return !0;
    const i = Object.keys(t).sort(),
      s = Object.keys(e).sort();
    if (i.length !== s.length) return !1;
    for (let n = 0; n < i.length; n++) {
      const r = i[n];
      if (r !== s[n] || t[r] !== e[r]) return !1;
    }
    return !0;
  },
  S0 = 22,
  Vw = function (t, e, i) {
    e = e || [];
    const s = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const a = e[r];
      if (t === a.timeline && (s.push(r), (n += a.duration), n > i)) return r;
    }
    return s.length === 0 ? 0 : s[s.length - 1];
  },
  Wn = 1,
  Ww = 500,
  wf = (t) => typeof t == "number" && isFinite(t),
  ba = 1 / 60,
  qw = (t, e, i) =>
    t !== "main" || !e || !i
      ? null
      : !i.hasAudio && !i.hasVideo
      ? "Neither audio nor video found in segment."
      : e.hasVideo && !i.hasVideo
      ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest."
      : !e.hasVideo && i.hasVideo
      ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest."
      : null,
  zw = (t, e, i) => {
    let s = e - Ye.BACK_BUFFER_LENGTH;
    t.length && (s = Math.max(s, t.start(0)));
    const n = e - i;
    return Math.min(n, s);
  },
  Ns = (t) => {
    const {
        startOfSegment: e,
        duration: i,
        segment: s,
        part: n,
        playlist: { mediaSequence: r, id: a, segments: o = [] },
        mediaIndex: u,
        partIndex: f,
        timeline: p,
      } = t,
      _ = o.length - 1;
    let v = "mediaIndex/partIndex increment";
    t.getMediaInfoForTime
      ? (v = `getMediaInfoForTime (${t.getMediaInfoForTime})`)
      : t.isSyncRequest && (v = "getSyncSegmentCandidate (isSyncRequest)"),
      t.independent && (v += ` with independent ${t.independent}`);
    const y = typeof f == "number",
      A = t.segment.uri ? "segment" : "pre-segment",
      S = y ? qg({ preloadSegment: s }) - 1 : 0;
    return (
      `${A} [${r + u}/${r + _}]` +
      (y ? ` part [${f}/${S}]` : "") +
      ` segment start/end [${s.start} => ${s.end}]` +
      (y ? ` part start/end [${n.start} => ${n.end}]` : "") +
      ` startOfSegment [${e}] duration [${i}] timeline [${p}] selected by [${v}] playlist [${a}]`
    );
  },
  Af = (t) => `${t}TimingInfo`,
  Gw = ({
    segmentTimeline: t,
    currentTimeline: e,
    startOfSegment: i,
    buffered: s,
    overrideCheck: n,
  }) => (!n && t === e ? null : t < e ? i : s.length ? s.end(s.length - 1) : i),
  kf = ({
    timelineChangeController: t,
    currentTimeline: e,
    segmentTimeline: i,
    loaderType: s,
    audioDisabled: n,
  }) => {
    if (e === i) return !1;
    if (s === "audio") {
      const r = t.lastTimelineChange({ type: "main" });
      return !r || r.to !== i;
    }
    if (s === "main" && n) {
      const r = t.pendingTimelineChange({ type: "audio" });
      return !(r && r.to === i);
    }
    return !1;
  },
  Kw = (t) => {
    let e = 0;
    return (
      ["video", "audio"].forEach(function (i) {
        const s = t[`${i}TimingInfo`];
        if (!s) return;
        const { start: n, end: r } = s;
        let a;
        typeof n == "bigint" || typeof r == "bigint"
          ? (a = C.BigInt(r) - C.BigInt(n))
          : typeof n == "number" && typeof r == "number" && (a = r - n),
          typeof a < "u" && a > e && (e = a);
      }),
      typeof e == "bigint" && e < Number.MAX_SAFE_INTEGER && (e = Number(e)),
      e
    );
  },
  If = ({ segmentDuration: t, maxDuration: e }) =>
    t ? Math.round(t) > e + Xi : !1,
  Xw = (t, e) => {
    if (e !== "hls") return null;
    const i = Kw({
      audioTimingInfo: t.audioTimingInfo,
      videoTimingInfo: t.videoTimingInfo,
    });
    if (!i) return null;
    const s = t.playlist.targetDuration,
      n = If({ segmentDuration: i, maxDuration: s * 2 }),
      r = If({ segmentDuration: i, maxDuration: s }),
      a = `Segment with index ${t.mediaIndex} from playlist ${t.playlist.id} has a duration of ${i} when the reported duration is ${t.duration} and the target duration is ${s}. For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1`;
    return n || r ? { severity: n ? "warn" : "info", message: a } : null;
  };
class bu extends M.EventTarget {
  constructor(e, i = {}) {
    if ((super(), !e))
      throw new TypeError("Initialization settings are required");
    if (typeof e.currentTime != "function")
      throw new TypeError("No currentTime getter specified");
    if (!e.mediaSource) throw new TypeError("No MediaSource specified");
    (this.bandwidth = e.bandwidth),
      (this.throughput = { rate: 0, count: 0 }),
      (this.roundTrip = NaN),
      this.resetStats_(),
      (this.mediaIndex = null),
      (this.partIndex = null),
      (this.hasPlayed_ = e.hasPlayed),
      (this.currentTime_ = e.currentTime),
      (this.seekable_ = e.seekable),
      (this.seeking_ = e.seeking),
      (this.duration_ = e.duration),
      (this.mediaSource_ = e.mediaSource),
      (this.vhs_ = e.vhs),
      (this.loaderType_ = e.loaderType),
      (this.currentMediaInfo_ = void 0),
      (this.startingMediaInfo_ = void 0),
      (this.segmentMetadataTrack_ = e.segmentMetadataTrack),
      (this.goalBufferLength_ = e.goalBufferLength),
      (this.sourceType_ = e.sourceType),
      (this.sourceUpdater_ = e.sourceUpdater),
      (this.inbandTextTracks_ = e.inbandTextTracks),
      (this.state_ = "INIT"),
      (this.timelineChangeController_ = e.timelineChangeController),
      (this.shouldSaveSegmentTimingInfo_ = !0),
      (this.parse708captions_ = e.parse708captions),
      (this.useDtsForTimestampOffset_ = e.useDtsForTimestampOffset),
      (this.captionServices_ = e.captionServices),
      (this.exactManifestTimings = e.exactManifestTimings),
      (this.checkBufferTimeout_ = null),
      (this.error_ = void 0),
      (this.currentTimeline_ = -1),
      (this.pendingSegment_ = null),
      (this.xhrOptions_ = null),
      (this.pendingSegments_ = []),
      (this.audioDisabled_ = !1),
      (this.isPendingTimestampOffset_ = !1),
      (this.gopBuffer_ = []),
      (this.timeMapping_ = 0),
      (this.safeAppend_ = M.browser.IE_VERSION >= 11),
      (this.appendInitSegment_ = { audio: !0, video: !0 }),
      (this.playlistOfLastInitSegment_ = { audio: null, video: null }),
      (this.callQueue_ = []),
      (this.loadQueue_ = []),
      (this.metadataQueue_ = { id3: [], caption: [] }),
      (this.waitingOnRemove_ = !1),
      (this.quotaExceededErrorRetryTimeout_ = null),
      (this.activeInitSegmentId_ = null),
      (this.initSegments_ = {}),
      (this.cacheEncryptionKeys_ = e.cacheEncryptionKeys),
      (this.keyCache_ = {}),
      (this.decrypter_ = e.decrypter),
      (this.syncController_ = e.syncController),
      (this.syncPoint_ = { segmentIndex: 0, time: 0 }),
      (this.transmuxer_ = this.createTransmuxer_()),
      (this.triggerSyncInfoUpdate_ = () => this.trigger("syncinfoupdate")),
      this.syncController_.on("syncinfoupdate", this.triggerSyncInfoUpdate_),
      this.mediaSource_.addEventListener("sourceopen", () => {
        this.isEndOfStream_() || (this.ended_ = !1);
      }),
      (this.fetchAtBuffer_ = !1),
      (this.logger_ = ti(`SegmentLoader[${this.loaderType_}]`)),
      Object.defineProperty(this, "state", {
        get() {
          return this.state_;
        },
        set(s) {
          s !== this.state_ &&
            (this.logger_(`${this.state_} -> ${s}`),
            (this.state_ = s),
            this.trigger("statechange"));
        },
      }),
      this.sourceUpdater_.on("ready", () => {
        this.hasEnoughInfoToAppend_() && this.processCallQueue_();
      }),
      this.loaderType_ === "main" &&
        this.timelineChangeController_.on("pendingtimelinechange", () => {
          this.hasEnoughInfoToAppend_() && this.processCallQueue_();
        }),
      this.loaderType_ === "audio" &&
        this.timelineChangeController_.on("timelinechange", () => {
          this.hasEnoughInfoToLoad_() && this.processLoadQueue_(),
            this.hasEnoughInfoToAppend_() && this.processCallQueue_();
        });
  }
  createTransmuxer_() {
    return Ll.createTransmuxer({
      remux: !1,
      alignGopsAtEnd: this.safeAppend_,
      keepOriginalTimestamps: !0,
      parse708captions: this.parse708captions_,
      captionServices: this.captionServices_,
    });
  }
  resetStats_() {
    (this.mediaBytesTransferred = 0),
      (this.mediaRequests = 0),
      (this.mediaRequestsAborted = 0),
      (this.mediaRequestsTimedout = 0),
      (this.mediaRequestsErrored = 0),
      (this.mediaTransferDuration = 0),
      (this.mediaSecondsLoaded = 0),
      (this.mediaAppends = 0);
  }
  dispose() {
    this.trigger("dispose"),
      (this.state = "DISPOSED"),
      this.pause(),
      this.abort_(),
      this.transmuxer_ && this.transmuxer_.terminate(),
      this.resetStats_(),
      this.checkBufferTimeout_ && C.clearTimeout(this.checkBufferTimeout_),
      this.syncController_ &&
        this.triggerSyncInfoUpdate_ &&
        this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_),
      this.off();
  }
  setAudio(e) {
    (this.audioDisabled_ = !e),
      e
        ? (this.appendInitSegment_.audio = !0)
        : this.sourceUpdater_.removeAudio(0, this.duration_());
  }
  abort() {
    if (this.state !== "WAITING") {
      this.pendingSegment_ && (this.pendingSegment_ = null);
      return;
    }
    this.abort_(),
      (this.state = "READY"),
      this.paused() || this.monitorBuffer_();
  }
  abort_() {
    this.pendingSegment_ &&
      this.pendingSegment_.abortRequests &&
      this.pendingSegment_.abortRequests(),
      (this.pendingSegment_ = null),
      (this.callQueue_ = []),
      (this.loadQueue_ = []),
      (this.metadataQueue_.id3 = []),
      (this.metadataQueue_.caption = []),
      this.timelineChangeController_.clearPendingTimelineChange(
        this.loaderType_
      ),
      (this.waitingOnRemove_ = !1),
      C.clearTimeout(this.quotaExceededErrorRetryTimeout_),
      (this.quotaExceededErrorRetryTimeout_ = null);
  }
  checkForAbort_(e) {
    return this.state === "APPENDING" && !this.pendingSegment_
      ? ((this.state = "READY"), !0)
      : !this.pendingSegment_ || this.pendingSegment_.requestId !== e;
  }
  error(e) {
    return (
      typeof e < "u" && (this.logger_("error occurred:", e), (this.error_ = e)),
      (this.pendingSegment_ = null),
      this.error_
    );
  }
  endOfStream() {
    (this.ended_ = !0),
      this.transmuxer_ && Ll.reset(this.transmuxer_),
      (this.gopBuffer_.length = 0),
      this.pause(),
      this.trigger("ended");
  }
  buffered_() {
    const e = this.getMediaInfo_();
    if (!this.sourceUpdater_ || !e) return nt();
    if (this.loaderType_ === "main") {
      const { hasAudio: i, hasVideo: s, isMuxed: n } = e;
      if (s && i && !this.audioDisabled_ && !n)
        return this.sourceUpdater_.buffered();
      if (s) return this.sourceUpdater_.videoBuffered();
    }
    return this.sourceUpdater_.audioBuffered();
  }
  initSegmentForMap(e, i = !1) {
    if (!e) return null;
    const s = ro(e);
    let n = this.initSegments_[s];
    return (
      i &&
        !n &&
        e.bytes &&
        (this.initSegments_[s] = n =
          {
            resolvedUri: e.resolvedUri,
            byterange: e.byterange,
            bytes: e.bytes,
            tracks: e.tracks,
            timescales: e.timescales,
          }),
      n || e
    );
  }
  segmentKey(e, i = !1) {
    if (!e) return null;
    const s = a0(e);
    let n = this.keyCache_[s];
    this.cacheEncryptionKeys_ &&
      i &&
      !n &&
      e.bytes &&
      (this.keyCache_[s] = n = { resolvedUri: e.resolvedUri, bytes: e.bytes });
    const r = { resolvedUri: (n || e).resolvedUri };
    return n && (r.bytes = n.bytes), r;
  }
  couldBeginLoading_() {
    return this.playlist_ && !this.paused();
  }
  load() {
    if ((this.monitorBuffer_(), !!this.playlist_)) {
      if (this.state === "INIT" && this.couldBeginLoading_())
        return this.init_();
      !this.couldBeginLoading_() ||
        (this.state !== "READY" && this.state !== "INIT") ||
        (this.state = "READY");
    }
  }
  init_() {
    return (
      (this.state = "READY"), this.resetEverything(), this.monitorBuffer_()
    );
  }
  playlist(e, i = {}) {
    if (!e) return;
    const s = this.playlist_,
      n = this.pendingSegment_;
    (this.playlist_ = e),
      (this.xhrOptions_ = i),
      this.state === "INIT" &&
        ((e.syncInfo = { mediaSequence: e.mediaSequence, time: 0 }),
        this.loaderType_ === "main" &&
          this.syncController_.setDateTimeMappingForStart(e));
    let r = null;
    if (
      (s && (s.id ? (r = s.id) : s.uri && (r = s.uri)),
      this.logger_(`playlist update [${r} => ${e.id || e.uri}]`),
      this.trigger("syncinfoupdate"),
      this.state === "INIT" && this.couldBeginLoading_())
    )
      return this.init_();
    if (!s || s.uri !== e.uri) {
      this.mediaIndex !== null &&
        (e.endList ? this.resyncLoader() : this.resetLoader()),
        (this.currentMediaInfo_ = void 0),
        this.trigger("playlistupdate");
      return;
    }
    const a = e.mediaSequence - s.mediaSequence;
    if ((this.logger_(`live window shift [${a}]`), this.mediaIndex !== null))
      if (((this.mediaIndex -= a), this.mediaIndex < 0))
        (this.mediaIndex = null), (this.partIndex = null);
      else {
        const o = this.playlist_.segments[this.mediaIndex];
        if (
          this.partIndex &&
          (!o.parts || !o.parts.length || !o.parts[this.partIndex])
        ) {
          const u = this.mediaIndex;
          this.logger_(
            `currently processing part (index ${this.partIndex}) no longer exists.`
          ),
            this.resetLoader(),
            (this.mediaIndex = u);
        }
      }
    n &&
      ((n.mediaIndex -= a),
      n.mediaIndex < 0
        ? ((n.mediaIndex = null), (n.partIndex = null))
        : (n.mediaIndex >= 0 && (n.segment = e.segments[n.mediaIndex]),
          n.partIndex >= 0 &&
            n.segment.parts &&
            (n.part = n.segment.parts[n.partIndex]))),
      this.syncController_.saveExpiredSegmentInfo(s, e);
  }
  pause() {
    this.checkBufferTimeout_ &&
      (C.clearTimeout(this.checkBufferTimeout_),
      (this.checkBufferTimeout_ = null));
  }
  paused() {
    return this.checkBufferTimeout_ === null;
  }
  resetEverything(e) {
    (this.ended_ = !1),
      (this.appendInitSegment_ = { audio: !0, video: !0 }),
      this.resetLoader(),
      this.remove(0, 1 / 0, e),
      this.transmuxer_ &&
        (this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }),
        this.transmuxer_.postMessage({ action: "reset" }));
  }
  resetLoader() {
    (this.fetchAtBuffer_ = !1), this.resyncLoader();
  }
  resyncLoader() {
    this.transmuxer_ && Ll.reset(this.transmuxer_),
      (this.mediaIndex = null),
      (this.partIndex = null),
      (this.syncPoint_ = null),
      (this.isPendingTimestampOffset_ = !1),
      (this.callQueue_ = []),
      (this.loadQueue_ = []),
      (this.metadataQueue_.id3 = []),
      (this.metadataQueue_.caption = []),
      this.abort(),
      this.transmuxer_ &&
        this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
  }
  remove(e, i, s = () => {}, n = !1) {
    if ((i === 1 / 0 && (i = this.duration_()), i <= e)) {
      this.logger_("skipping remove because end ${end} is <= start ${start}");
      return;
    }
    if (!this.sourceUpdater_ || !this.getMediaInfo_()) {
      this.logger_(
        "skipping remove because no source updater or starting media info"
      );
      return;
    }
    let r = 1;
    const a = () => {
      r--, r === 0 && s();
    };
    (n || !this.audioDisabled_) &&
      (r++, this.sourceUpdater_.removeAudio(e, i, a)),
      (n || this.loaderType_ === "main") &&
        ((this.gopBuffer_ = jw(this.gopBuffer_, e, i, this.timeMapping_)),
        r++,
        this.sourceUpdater_.removeVideo(e, i, a));
    for (const o in this.inbandTextTracks_) Jn(e, i, this.inbandTextTracks_[o]);
    Jn(e, i, this.segmentMetadataTrack_), a();
  }
  monitorBuffer_() {
    this.checkBufferTimeout_ && C.clearTimeout(this.checkBufferTimeout_),
      (this.checkBufferTimeout_ = C.setTimeout(
        this.monitorBufferTick_.bind(this),
        1
      ));
  }
  monitorBufferTick_() {
    this.state === "READY" && this.fillBuffer_(),
      this.checkBufferTimeout_ && C.clearTimeout(this.checkBufferTimeout_),
      (this.checkBufferTimeout_ = C.setTimeout(
        this.monitorBufferTick_.bind(this),
        Ww
      ));
  }
  fillBuffer_() {
    if (this.sourceUpdater_.updating()) return;
    const e = this.chooseNextRequest_();
    e &&
      (typeof e.timestampOffset == "number" &&
        ((this.isPendingTimestampOffset_ = !1),
        this.timelineChangeController_.pendingTimelineChange({
          type: this.loaderType_,
          from: this.currentTimeline_,
          to: e.timeline,
        })),
      this.loadSegment_(e));
  }
  isEndOfStream_(e = this.mediaIndex, i = this.playlist_, s = this.partIndex) {
    if (!i || !this.mediaSource_) return !1;
    const n = typeof e == "number" && i.segments[e],
      r = e + 1 === i.segments.length,
      a = !n || !n.parts || s + 1 === n.parts.length;
    return i.endList && this.mediaSource_.readyState === "open" && r && a;
  }
  chooseNextRequest_() {
    const e = this.buffered_(),
      i = _f(e) || 0,
      s = Hc(e, this.currentTime_()),
      n = !this.hasPlayed_() && s >= 1,
      r = s >= this.goalBufferLength_(),
      a = this.playlist_.segments;
    if (!a.length || n || r) return null;
    this.syncPoint_ =
      this.syncPoint_ ||
      this.syncController_.getSyncPoint(
        this.playlist_,
        this.duration_(),
        this.currentTimeline_,
        this.currentTime_()
      );
    const o = {
      partIndex: null,
      mediaIndex: null,
      startOfSegment: null,
      playlist: this.playlist_,
      isSyncRequest: Boolean(!this.syncPoint_),
    };
    if (o.isSyncRequest) o.mediaIndex = Vw(this.currentTimeline_, a, i);
    else if (this.mediaIndex !== null) {
      const _ = a[this.mediaIndex],
        v = typeof this.partIndex == "number" ? this.partIndex : -1;
      (o.startOfSegment = _.end ? _.end : i),
        _.parts && _.parts[v + 1]
          ? ((o.mediaIndex = this.mediaIndex), (o.partIndex = v + 1))
          : (o.mediaIndex = this.mediaIndex + 1);
    } else {
      const {
        segmentIndex: _,
        startTime: v,
        partIndex: y,
      } = Ct.getMediaInfoForTime({
        exactManifestTimings: this.exactManifestTimings,
        playlist: this.playlist_,
        currentTime: this.fetchAtBuffer_ ? i : this.currentTime_(),
        startingPartIndex: this.syncPoint_.partIndex,
        startingSegmentIndex: this.syncPoint_.segmentIndex,
        startTime: this.syncPoint_.time,
      });
      (o.getMediaInfoForTime = this.fetchAtBuffer_
        ? `bufferedEnd ${i}`
        : `currentTime ${this.currentTime_()}`),
        (o.mediaIndex = _),
        (o.startOfSegment = v),
        (o.partIndex = y);
    }
    const u = a[o.mediaIndex];
    let f =
      u && typeof o.partIndex == "number" && u.parts && u.parts[o.partIndex];
    if (!u || (typeof o.partIndex == "number" && !f)) return null;
    if (
      (typeof o.partIndex != "number" &&
        u.parts &&
        ((o.partIndex = 0), (f = u.parts[0])),
      !s && f && !f.independent)
    )
      if (o.partIndex === 0) {
        const _ = a[o.mediaIndex - 1],
          v = _.parts && _.parts.length && _.parts[_.parts.length - 1];
        v &&
          v.independent &&
          ((o.mediaIndex -= 1),
          (o.partIndex = _.parts.length - 1),
          (o.independent = "previous segment"));
      } else
        u.parts[o.partIndex - 1].independent &&
          ((o.partIndex -= 1), (o.independent = "previous part"));
    const p = this.mediaSource_ && this.mediaSource_.readyState === "ended";
    return o.mediaIndex >= a.length - 1 && p && !this.seeking_()
      ? null
      : this.generateSegmentInfo_(o);
  }
  generateSegmentInfo_(e) {
    const {
        independent: i,
        playlist: s,
        mediaIndex: n,
        startOfSegment: r,
        isSyncRequest: a,
        partIndex: o,
        forceTimestampOffset: u,
        getMediaInfoForTime: f,
      } = e,
      p = s.segments[n],
      _ = typeof o == "number" && p.parts[o],
      v = {
        requestId: "segment-loader-" + Math.random(),
        uri: (_ && _.resolvedUri) || p.resolvedUri,
        mediaIndex: n,
        partIndex: _ ? o : null,
        isSyncRequest: a,
        startOfSegment: r,
        playlist: s,
        bytes: null,
        encryptedBytes: null,
        timestampOffset: null,
        timeline: p.timeline,
        duration: (_ && _.duration) || p.duration,
        segment: p,
        part: _,
        byteLength: 0,
        transmuxer: this.transmuxer_,
        getMediaInfoForTime: f,
        independent: i,
      },
      y = typeof u < "u" ? u : this.isPendingTimestampOffset_;
    v.timestampOffset = this.timestampOffsetForSegment_({
      segmentTimeline: p.timeline,
      currentTimeline: this.currentTimeline_,
      startOfSegment: r,
      buffered: this.buffered_(),
      overrideCheck: y,
    });
    const A = _f(this.sourceUpdater_.audioBuffered());
    return (
      typeof A == "number" &&
        (v.audioAppendStart = A - this.sourceUpdater_.audioTimestampOffset()),
      this.sourceUpdater_.videoBuffered().length &&
        (v.gopsToAlignWith = Bw(
          this.gopBuffer_,
          this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(),
          this.timeMapping_
        )),
      v
    );
  }
  timestampOffsetForSegment_(e) {
    return Gw(e);
  }
  earlyAbortWhenNeeded_(e) {
    if (
      this.vhs_.tech_.paused() ||
      !this.xhrOptions_.timeout ||
      !this.playlist_.attributes.BANDWIDTH ||
      Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3
    )
      return;
    const i = this.currentTime_(),
      s = e.bandwidth,
      n = this.pendingSegment_.duration,
      r = Ct.estimateSegmentRequestTime(n, s, this.playlist_, e.bytesReceived),
      a = bC(this.buffered_(), i, this.vhs_.tech_.playbackRate()) - 1;
    if (r <= a) return;
    const o = Ow({
      main: this.vhs_.playlists.main,
      currentTime: i,
      bandwidth: s,
      duration: this.duration_(),
      segmentDuration: n,
      timeUntilRebuffer: a,
      currentTimeline: this.currentTimeline_,
      syncController: this.syncController_,
    });
    if (!o) return;
    const f = r - a - o.rebufferingImpact;
    let p = 0.5;
    a <= Xi && (p = 1),
      !(!o.playlist || o.playlist.uri === this.playlist_.uri || f < p) &&
        ((this.bandwidth =
          o.playlist.attributes.BANDWIDTH * Ye.BANDWIDTH_VARIANCE + 1),
        this.trigger("earlyabort"));
  }
  handleAbort_(e) {
    this.logger_(`Aborting ${Ns(e)}`), (this.mediaRequestsAborted += 1);
  }
  handleProgress_(e, i) {
    this.earlyAbortWhenNeeded_(i.stats),
      !this.checkForAbort_(i.requestId) && this.trigger("progress");
  }
  handleTrackInfo_(e, i) {
    this.earlyAbortWhenNeeded_(e.stats),
      !this.checkForAbort_(e.requestId) &&
        (this.checkForIllegalMediaSwitch(i) ||
          ((i = i || {}),
          Hw(this.currentMediaInfo_, i) ||
            ((this.appendInitSegment_ = { audio: !0, video: !0 }),
            (this.startingMediaInfo_ = i),
            (this.currentMediaInfo_ = i),
            this.logger_("trackinfo update", i),
            this.trigger("trackinfo")),
          !this.checkForAbort_(e.requestId) &&
            ((this.pendingSegment_.trackInfo = i),
            this.hasEnoughInfoToAppend_() && this.processCallQueue_())));
  }
  handleTimingInfo_(e, i, s, n) {
    if ((this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId)))
      return;
    const r = this.pendingSegment_,
      a = Af(i);
    (r[a] = r[a] || {}),
      (r[a][s] = n),
      this.logger_(`timinginfo: ${i} - ${s} - ${n}`),
      this.hasEnoughInfoToAppend_() && this.processCallQueue_();
  }
  handleCaptions_(e, i) {
    if ((this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId)))
      return;
    if (i.length === 0) {
      this.logger_("SegmentLoader received no captions from a caption event");
      return;
    }
    if (!this.pendingSegment_.hasAppendedData_) {
      this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, i));
      return;
    }
    const n =
        this.sourceUpdater_.videoTimestampOffset() === null
          ? this.sourceUpdater_.audioTimestampOffset()
          : this.sourceUpdater_.videoTimestampOffset(),
      r = {};
    i.forEach((a) => {
      r[a.stream] = r[a.stream] || {
        startTime: 1 / 0,
        captions: [],
        endTime: 0,
      };
      const o = r[a.stream];
      (o.startTime = Math.min(o.startTime, a.startTime + n)),
        (o.endTime = Math.max(o.endTime, a.endTime + n)),
        o.captions.push(a);
    }),
      Object.keys(r).forEach((a) => {
        const { startTime: o, endTime: u, captions: f } = r[a],
          p = this.inbandTextTracks_;
        this.logger_(`adding cues from ${o} -> ${u} for ${a}`),
          Lw(p, this.vhs_.tech_, a),
          Jn(o, u, p[a]),
          Rw({ captionArray: f, inbandTextTracks: p, timestampOffset: n });
      }),
      this.transmuxer_ &&
        this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
  }
  handleId3_(e, i, s) {
    if ((this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId)))
      return;
    if (!this.pendingSegment_.hasAppendedData_) {
      this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, i, s));
      return;
    }
    const r =
      this.sourceUpdater_.videoTimestampOffset() === null
        ? this.sourceUpdater_.audioTimestampOffset()
        : this.sourceUpdater_.videoTimestampOffset();
    Uw(this.inbandTextTracks_, s, this.vhs_.tech_),
      Mw({
        inbandTextTracks: this.inbandTextTracks_,
        metadataArray: i,
        timestampOffset: r,
        videoDuration: this.duration_(),
      });
  }
  processMetadataQueue_() {
    this.metadataQueue_.id3.forEach((e) => e()),
      this.metadataQueue_.caption.forEach((e) => e()),
      (this.metadataQueue_.id3 = []),
      (this.metadataQueue_.caption = []);
  }
  processCallQueue_() {
    const e = this.callQueue_;
    (this.callQueue_ = []), e.forEach((i) => i());
  }
  processLoadQueue_() {
    const e = this.loadQueue_;
    (this.loadQueue_ = []), e.forEach((i) => i());
  }
  hasEnoughInfoToLoad_() {
    if (this.loaderType_ !== "audio") return !0;
    const e = this.pendingSegment_;
    return e
      ? this.getCurrentMediaInfo_()
        ? !kf({
            timelineChangeController: this.timelineChangeController_,
            currentTimeline: this.currentTimeline_,
            segmentTimeline: e.timeline,
            loaderType: this.loaderType_,
            audioDisabled: this.audioDisabled_,
          })
        : !0
      : !1;
  }
  getCurrentMediaInfo_(e = this.pendingSegment_) {
    return (e && e.trackInfo) || this.currentMediaInfo_;
  }
  getMediaInfo_(e = this.pendingSegment_) {
    return this.getCurrentMediaInfo_(e) || this.startingMediaInfo_;
  }
  hasEnoughInfoToAppend_() {
    if (
      !this.sourceUpdater_.ready() ||
      this.waitingOnRemove_ ||
      this.quotaExceededErrorRetryTimeout_
    )
      return !1;
    const e = this.pendingSegment_,
      i = this.getCurrentMediaInfo_();
    if (!e || !i) return !1;
    const { hasAudio: s, hasVideo: n, isMuxed: r } = i;
    return !(
      (n && !e.videoTimingInfo) ||
      (s && !this.audioDisabled_ && !r && !e.audioTimingInfo) ||
      kf({
        timelineChangeController: this.timelineChangeController_,
        currentTimeline: this.currentTimeline_,
        segmentTimeline: e.timeline,
        loaderType: this.loaderType_,
        audioDisabled: this.audioDisabled_,
      })
    );
  }
  handleData_(e, i) {
    if ((this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId)))
      return;
    if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) {
      this.callQueue_.push(this.handleData_.bind(this, e, i));
      return;
    }
    const s = this.pendingSegment_;
    if (
      (this.setTimeMapping_(s.timeline),
      this.updateMediaSecondsLoaded_(s.part || s.segment),
      this.mediaSource_.readyState !== "closed")
    ) {
      if (
        (e.map &&
          ((e.map = this.initSegmentForMap(e.map, !0)),
          (s.segment.map = e.map)),
        e.key && this.segmentKey(e.key, !0),
        (s.isFmp4 = e.isFmp4),
        (s.timingInfo = s.timingInfo || {}),
        s.isFmp4)
      )
        this.trigger("fmp4"), (s.timingInfo.start = s[Af(i.type)].start);
      else {
        const n = this.getCurrentMediaInfo_(),
          r = this.loaderType_ === "main" && n && n.hasVideo;
        let a;
        r && (a = s.videoTimingInfo.start),
          (s.timingInfo.start = this.trueSegmentStart_({
            currentStart: s.timingInfo.start,
            playlist: s.playlist,
            mediaIndex: s.mediaIndex,
            currentVideoTimestampOffset:
              this.sourceUpdater_.videoTimestampOffset(),
            useVideoTimingInfo: r,
            firstVideoFrameTimeForData: a,
            videoTimingInfo: s.videoTimingInfo,
            audioTimingInfo: s.audioTimingInfo,
          }));
      }
      if (
        (this.updateAppendInitSegmentStatus(s, i.type),
        this.updateSourceBufferTimestampOffset_(s),
        s.isSyncRequest)
      ) {
        this.updateTimingInfoEnd_(s),
          this.syncController_.saveSegmentTimingInfo({
            segmentInfo: s,
            shouldSaveTimelineMapping: this.loaderType_ === "main",
          });
        const n = this.chooseNextRequest_();
        if (n.mediaIndex !== s.mediaIndex || n.partIndex !== s.partIndex) {
          this.logger_("sync segment was incorrect, not appending");
          return;
        }
        this.logger_("sync segment was correct, appending");
      }
      (s.hasAppendedData_ = !0),
        this.processMetadataQueue_(),
        this.appendData_(s, i);
    }
  }
  updateAppendInitSegmentStatus(e, i) {
    this.loaderType_ === "main" &&
      typeof e.timestampOffset == "number" &&
      !e.changedTimestampOffset &&
      (this.appendInitSegment_ = { audio: !0, video: !0 }),
      this.playlistOfLastInitSegment_[i] !== e.playlist &&
        (this.appendInitSegment_[i] = !0);
  }
  getInitSegmentAndUpdateState_({
    type: e,
    initSegment: i,
    map: s,
    playlist: n,
  }) {
    if (s) {
      const r = ro(s);
      if (this.activeInitSegmentId_ === r) return null;
      (i = this.initSegmentForMap(s, !0).bytes),
        (this.activeInitSegmentId_ = r);
    }
    return i && this.appendInitSegment_[e]
      ? ((this.playlistOfLastInitSegment_[e] = n),
        (this.appendInitSegment_[e] = !1),
        (this.activeInitSegmentId_ = null),
        i)
      : null;
  }
  handleQuotaExceededError_({ segmentInfo: e, type: i, bytes: s }, n) {
    const r = this.sourceUpdater_.audioBuffered(),
      a = this.sourceUpdater_.videoBuffered();
    r.length > 1 &&
      this.logger_(
        "On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " +
          ps(r).join(", ")
      ),
      a.length > 1 &&
        this.logger_(
          "On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " +
            ps(a).join(", ")
        );
    const o = r.length ? r.start(0) : 0,
      u = r.length ? r.end(r.length - 1) : 0,
      f = a.length ? a.start(0) : 0,
      p = a.length ? a.end(a.length - 1) : 0;
    if (u - o <= Wn && p - f <= Wn) {
      this.logger_(
        `On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: ${
          s.byteLength
        }, audio buffer: ${ps(r).join(", ")}, video buffer: ${ps(a).join(
          ", "
        )}, `
      ),
        this.error({
          message:
            "Quota exceeded error with append of a single segment of content",
          excludeUntil: 1 / 0,
        }),
        this.trigger("error");
      return;
    }
    (this.waitingOnRemove_ = !0),
      this.callQueue_.push(
        this.appendToSourceBuffer_.bind(this, {
          segmentInfo: e,
          type: i,
          bytes: s,
        })
      );
    const v = this.currentTime_() - Wn;
    this.logger_(`On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to ${v}`),
      this.remove(
        0,
        v,
        () => {
          this.logger_(`On QUOTA_EXCEEDED_ERR, retrying append in ${Wn}s`),
            (this.waitingOnRemove_ = !1),
            (this.quotaExceededErrorRetryTimeout_ = C.setTimeout(() => {
              this.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"),
                (this.quotaExceededErrorRetryTimeout_ = null),
                this.processCallQueue_();
            }, Wn * 1e3));
        },
        !0
      );
  }
  handleAppendError_({ segmentInfo: e, type: i, bytes: s }, n) {
    if (n) {
      if (n.code === S0) {
        this.handleQuotaExceededError_({ segmentInfo: e, type: i, bytes: s });
        return;
      }
      this.logger_("Received non QUOTA_EXCEEDED_ERR on append", n),
        this.error(
          `${i} append of ${s.length}b failed for segment #${e.mediaIndex} in playlist ${e.playlist.id}`
        ),
        this.trigger("appenderror");
    }
  }
  appendToSourceBuffer_({
    segmentInfo: e,
    type: i,
    initSegment: s,
    data: n,
    bytes: r,
  }) {
    if (!r) {
      const a = [n];
      let o = n.byteLength;
      s && (a.unshift(s), (o += s.byteLength)),
        (r = Dw({ bytes: o, segments: a }));
    }
    this.sourceUpdater_.appendBuffer(
      { segmentInfo: e, type: i, bytes: r },
      this.handleAppendError_.bind(this, { segmentInfo: e, type: i, bytes: r })
    );
  }
  handleSegmentTimingInfo_(e, i, s) {
    if (!this.pendingSegment_ || i !== this.pendingSegment_.requestId) return;
    const n = this.pendingSegment_.segment,
      r = `${e}TimingInfo`;
    n[r] || (n[r] = {}),
      (n[r].transmuxerPrependedSeconds = s.prependedContentDuration || 0),
      (n[r].transmuxedPresentationStart = s.start.presentation),
      (n[r].transmuxedDecodeStart = s.start.decode),
      (n[r].transmuxedPresentationEnd = s.end.presentation),
      (n[r].transmuxedDecodeEnd = s.end.decode),
      (n[r].baseMediaDecodeTime = s.baseMediaDecodeTime);
  }
  appendData_(e, i) {
    const { type: s, data: n } = i;
    if (!n || !n.byteLength || (s === "audio" && this.audioDisabled_)) return;
    const r = this.getInitSegmentAndUpdateState_({
      type: s,
      initSegment: i.initSegment,
      playlist: e.playlist,
      map: e.isFmp4 ? e.segment.map : null,
    });
    this.appendToSourceBuffer_({
      segmentInfo: e,
      type: s,
      initSegment: r,
      data: n,
    });
  }
  loadSegment_(e) {
    if (
      ((this.state = "WAITING"),
      (this.pendingSegment_ = e),
      this.trimBackBuffer_(e),
      typeof e.timestampOffset == "number" &&
        this.transmuxer_ &&
        this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }),
      !this.hasEnoughInfoToLoad_())
    ) {
      this.loadQueue_.push(() => {
        const i = Di({}, e, { forceTimestampOffset: !0 });
        Di(e, this.generateSegmentInfo_(i)),
          (this.isPendingTimestampOffset_ = !1),
          this.updateTransmuxerAndRequestSegment_(e);
      });
      return;
    }
    this.updateTransmuxerAndRequestSegment_(e);
  }
  updateTransmuxerAndRequestSegment_(e) {
    this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) &&
      ((this.gopBuffer_.length = 0),
      (e.gopsToAlignWith = []),
      (this.timeMapping_ = 0),
      this.transmuxer_.postMessage({ action: "reset" }),
      this.transmuxer_.postMessage({
        action: "setTimestampOffset",
        timestampOffset: e.timestampOffset,
      }));
    const i = this.createSimplifiedSegmentObj_(e),
      s = this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex),
      n = this.mediaIndex !== null,
      r = e.timeline !== this.currentTimeline_ && e.timeline > 0,
      a = s || (n && r);
    this.logger_(`Requesting ${Ns(e)}`),
      i.map &&
        !i.map.bytes &&
        (this.logger_("going to request init segment."),
        (this.appendInitSegment_ = { video: !0, audio: !0 })),
      (e.abortRequests = Ew({
        xhr: this.vhs_.xhr,
        xhrOptions: this.xhrOptions_,
        decryptionWorker: this.decrypter_,
        segment: i,
        abortFn: this.handleAbort_.bind(this, e),
        progressFn: this.handleProgress_.bind(this),
        trackInfoFn: this.handleTrackInfo_.bind(this),
        timingInfoFn: this.handleTimingInfo_.bind(this),
        videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(
          this,
          "video",
          e.requestId
        ),
        audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(
          this,
          "audio",
          e.requestId
        ),
        captionsFn: this.handleCaptions_.bind(this),
        isEndOfTimeline: a,
        endedTimelineFn: () => {
          this.logger_("received endedtimeline callback");
        },
        id3Fn: this.handleId3_.bind(this),
        dataFn: this.handleData_.bind(this),
        doneFn: this.segmentRequestFinished_.bind(this),
        onTransmuxerLog: ({ message: o, level: u, stream: f }) => {
          this.logger_(
            `${Ns(e)} logged from transmuxer stream ${f} as a ${u}: ${o}`
          );
        },
      }));
  }
  trimBackBuffer_(e) {
    const i = zw(
      this.seekable_(),
      this.currentTime_(),
      this.playlist_.targetDuration || 10
    );
    i > 0 && this.remove(0, i);
  }
  createSimplifiedSegmentObj_(e) {
    const i = e.segment,
      s = e.part,
      n = {
        resolvedUri: s ? s.resolvedUri : i.resolvedUri,
        byterange: s ? s.byterange : i.byterange,
        requestId: e.requestId,
        transmuxer: e.transmuxer,
        audioAppendStart: e.audioAppendStart,
        gopsToAlignWith: e.gopsToAlignWith,
        part: e.part,
      },
      r = e.playlist.segments[e.mediaIndex - 1];
    if (
      (r &&
        r.timeline === i.timeline &&
        (r.videoTimingInfo
          ? (n.baseStartTime = r.videoTimingInfo.transmuxedDecodeEnd)
          : r.audioTimingInfo &&
            (n.baseStartTime = r.audioTimingInfo.transmuxedDecodeEnd)),
      i.key)
    ) {
      const a =
        i.key.iv ||
        new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
      (n.key = this.segmentKey(i.key)), (n.key.iv = a);
    }
    return i.map && (n.map = this.initSegmentForMap(i.map)), n;
  }
  saveTransferStats_(e) {
    (this.mediaRequests += 1),
      e &&
        ((this.mediaBytesTransferred += e.bytesReceived),
        (this.mediaTransferDuration += e.roundTripTime));
  }
  saveBandwidthRelatedStats_(e, i) {
    if (((this.pendingSegment_.byteLength = i.bytesReceived), e < ba)) {
      this.logger_(
        `Ignoring segment's bandwidth because its duration of ${e} is less than the min to record ${ba}`
      );
      return;
    }
    (this.bandwidth = i.bandwidth), (this.roundTrip = i.roundTripTime);
  }
  handleTimeout_() {
    (this.mediaRequestsTimedout += 1),
      (this.bandwidth = 1),
      (this.roundTrip = NaN),
      this.trigger("bandwidthupdate"),
      this.trigger("timeout");
  }
  segmentRequestFinished_(e, i, s) {
    if (this.callQueue_.length) {
      this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, i, s));
      return;
    }
    if (
      (this.saveTransferStats_(i.stats),
      !this.pendingSegment_ || i.requestId !== this.pendingSegment_.requestId)
    )
      return;
    if (e) {
      if (
        ((this.pendingSegment_ = null),
        (this.state = "READY"),
        e.code === hi.ABORTED)
      )
        return;
      if ((this.pause(), e.code === hi.TIMEOUT)) {
        this.handleTimeout_();
        return;
      }
      (this.mediaRequestsErrored += 1), this.error(e), this.trigger("error");
      return;
    }
    const n = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(n.duration, i.stats),
      (n.endOfAllRequests = i.endOfAllRequests),
      s.gopInfo &&
        (this.gopBuffer_ = $w(this.gopBuffer_, s.gopInfo, this.safeAppend_)),
      (this.state = "APPENDING"),
      this.trigger("appending"),
      this.waitForAppendsToComplete_(n);
  }
  setTimeMapping_(e) {
    const i = this.syncController_.mappingForTimeline(e);
    i !== null && (this.timeMapping_ = i);
  }
  updateMediaSecondsLoaded_(e) {
    typeof e.start == "number" && typeof e.end == "number"
      ? (this.mediaSecondsLoaded += e.end - e.start)
      : (this.mediaSecondsLoaded += e.duration);
  }
  shouldUpdateTransmuxerTimestampOffset_(e) {
    return e === null
      ? !1
      : (this.loaderType_ === "main" &&
          e !== this.sourceUpdater_.videoTimestampOffset()) ||
          (!this.audioDisabled_ &&
            e !== this.sourceUpdater_.audioTimestampOffset());
  }
  trueSegmentStart_({
    currentStart: e,
    playlist: i,
    mediaIndex: s,
    firstVideoFrameTimeForData: n,
    currentVideoTimestampOffset: r,
    useVideoTimingInfo: a,
    videoTimingInfo: o,
    audioTimingInfo: u,
  }) {
    if (typeof e < "u") return e;
    if (!a) return u.start;
    const f = i.segments[s - 1];
    return s === 0 || !f || typeof f.start > "u" || f.end !== n + r
      ? n
      : o.start;
  }
  waitForAppendsToComplete_(e) {
    const i = this.getCurrentMediaInfo_(e);
    if (!i) {
      this.error({
        message:
          "No starting media returned, likely due to an unsupported media format.",
        playlistExclusionDuration: 1 / 0,
      }),
        this.trigger("error");
      return;
    }
    const { hasAudio: s, hasVideo: n, isMuxed: r } = i,
      a = this.loaderType_ === "main" && n,
      o = !this.audioDisabled_ && s && !r;
    if (((e.waitingOnAppends = 0), !e.hasAppendedData_)) {
      !e.timingInfo &&
        typeof e.timestampOffset == "number" &&
        (this.isPendingTimestampOffset_ = !0),
        (e.timingInfo = { start: 0 }),
        e.waitingOnAppends++,
        this.isPendingTimestampOffset_ ||
          (this.updateSourceBufferTimestampOffset_(e),
          this.processMetadataQueue_()),
        this.checkAppendsDone_(e);
      return;
    }
    a && e.waitingOnAppends++,
      o && e.waitingOnAppends++,
      a &&
        this.sourceUpdater_.videoQueueCallback(
          this.checkAppendsDone_.bind(this, e)
        ),
      o &&
        this.sourceUpdater_.audioQueueCallback(
          this.checkAppendsDone_.bind(this, e)
        );
  }
  checkAppendsDone_(e) {
    this.checkForAbort_(e.requestId) ||
      (e.waitingOnAppends--,
      e.waitingOnAppends === 0 && this.handleAppendsDone_());
  }
  checkForIllegalMediaSwitch(e) {
    const i = qw(this.loaderType_, this.getCurrentMediaInfo_(), e);
    return i
      ? (this.error({ message: i, playlistExclusionDuration: 1 / 0 }),
        this.trigger("error"),
        !0)
      : !1;
  }
  updateSourceBufferTimestampOffset_(e) {
    if (
      e.timestampOffset === null ||
      typeof e.timingInfo.start != "number" ||
      e.changedTimestampOffset ||
      this.loaderType_ !== "main"
    )
      return;
    let i = !1;
    (e.timestampOffset -=
      this.getSegmentStartTimeForTimestampOffsetCalculation_({
        videoTimingInfo: e.segment.videoTimingInfo,
        audioTimingInfo: e.segment.audioTimingInfo,
        timingInfo: e.timingInfo,
      })),
      (e.changedTimestampOffset = !0),
      e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() &&
        (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), (i = !0)),
      e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() &&
        (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), (i = !0)),
      i && this.trigger("timestampoffset");
  }
  getSegmentStartTimeForTimestampOffsetCalculation_({
    videoTimingInfo: e,
    audioTimingInfo: i,
    timingInfo: s,
  }) {
    return this.useDtsForTimestampOffset_
      ? e && typeof e.transmuxedDecodeStart == "number"
        ? e.transmuxedDecodeStart
        : i && typeof i.transmuxedDecodeStart == "number"
        ? i.transmuxedDecodeStart
        : s.start
      : s.start;
  }
  updateTimingInfoEnd_(e) {
    e.timingInfo = e.timingInfo || {};
    const i = this.getMediaInfo_(),
      n =
        this.loaderType_ === "main" && i && i.hasVideo && e.videoTimingInfo
          ? e.videoTimingInfo
          : e.audioTimingInfo;
    n &&
      (e.timingInfo.end =
        typeof n.end == "number" ? n.end : n.start + e.duration);
  }
  handleAppendsDone_() {
    if (
      (this.pendingSegment_ && this.trigger("appendsdone"),
      !this.pendingSegment_)
    ) {
      (this.state = "READY"), this.paused() || this.monitorBuffer_();
      return;
    }
    const e = this.pendingSegment_;
    this.updateTimingInfoEnd_(e),
      this.shouldSaveSegmentTimingInfo_ &&
        this.syncController_.saveSegmentTimingInfo({
          segmentInfo: e,
          shouldSaveTimelineMapping: this.loaderType_ === "main",
        });
    const i = Xw(e, this.sourceType_);
    if (
      (i &&
        (i.severity === "warn"
          ? M.log.warn(i.message)
          : this.logger_(i.message)),
      this.recordThroughput_(e),
      (this.pendingSegment_ = null),
      (this.state = "READY"),
      e.isSyncRequest && (this.trigger("syncinfoupdate"), !e.hasAppendedData_))
    ) {
      this.logger_(`Throwing away un-appended sync request ${Ns(e)}`);
      return;
    }
    this.logger_(`Appended ${Ns(e)}`),
      this.addSegmentMetadataCue_(e),
      (this.fetchAtBuffer_ = !0),
      this.currentTimeline_ !== e.timeline &&
        (this.timelineChangeController_.lastTimelineChange({
          type: this.loaderType_,
          from: this.currentTimeline_,
          to: e.timeline,
        }),
        this.loaderType_ === "main" &&
          !this.audioDisabled_ &&
          this.timelineChangeController_.lastTimelineChange({
            type: "audio",
            from: this.currentTimeline_,
            to: e.timeline,
          })),
      (this.currentTimeline_ = e.timeline),
      this.trigger("syncinfoupdate");
    const s = e.segment,
      n = e.part,
      r = s.end && this.currentTime_() - s.end > e.playlist.targetDuration * 3,
      a =
        n &&
        n.end &&
        this.currentTime_() - n.end > e.playlist.partTargetDuration * 3;
    if (r || a) {
      this.logger_(`bad ${r ? "segment" : "part"} ${Ns(e)}`),
        this.resetEverything();
      return;
    }
    this.mediaIndex !== null && this.trigger("bandwidthupdate"),
      this.trigger("progress"),
      (this.mediaIndex = e.mediaIndex),
      (this.partIndex = e.partIndex),
      this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex) &&
        this.endOfStream(),
      this.trigger("appended"),
      e.hasAppendedData_ && this.mediaAppends++,
      this.paused() || this.monitorBuffer_();
  }
  recordThroughput_(e) {
    if (e.duration < ba) {
      this.logger_(
        `Ignoring segment's throughput because its duration of ${e.duration} is less than the min to record ${ba}`
      );
      return;
    }
    const i = this.throughput.rate,
      s = Date.now() - e.endOfAllRequests + 1,
      n = Math.floor((e.byteLength / s) * 8 * 1e3);
    this.throughput.rate += (n - i) / ++this.throughput.count;
  }
  addSegmentMetadataCue_(e) {
    if (!this.segmentMetadataTrack_) return;
    const i = e.segment,
      s = i.start,
      n = i.end;
    if (!wf(s) || !wf(n)) return;
    Jn(s, n, this.segmentMetadataTrack_);
    const r = C.WebKitDataCue || C.VTTCue,
      a = {
        custom: i.custom,
        dateTimeObject: i.dateTimeObject,
        dateTimeString: i.dateTimeString,
        bandwidth: e.playlist.attributes.BANDWIDTH,
        resolution: e.playlist.attributes.RESOLUTION,
        codecs: e.playlist.attributes.CODECS,
        byteLength: e.byteLength,
        uri: e.uri,
        timeline: e.timeline,
        playlist: e.playlist.id,
        start: s,
        end: n,
      },
      o = JSON.stringify(a),
      u = new r(s, n, o);
    (u.value = a), this.segmentMetadataTrack_.addCue(u);
  }
}
function ki() {}
const E0 = function (t) {
    return typeof t != "string" ? t : t.replace(/./, (e) => e.toUpperCase());
  },
  Yw = ["video", "audio"],
  xu = (t, e) => {
    const i = e[`${t}Buffer`];
    return (i && i.updating) || e.queuePending[t];
  },
  Qw = (t, e) => {
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      if (s.type === "mediaSource") return null;
      if (s.type === t) return i;
    }
    return null;
  },
  Js = (t, e) => {
    if (e.queue.length === 0) return;
    let i = 0,
      s = e.queue[i];
    if (s.type === "mediaSource") {
      !e.updating() &&
        e.mediaSource.readyState !== "closed" &&
        (e.queue.shift(),
        s.action(e),
        s.doneFn && s.doneFn(),
        Js("audio", e),
        Js("video", e));
      return;
    }
    if (
      t !== "mediaSource" &&
      !(!e.ready() || e.mediaSource.readyState === "closed" || xu(t, e))
    ) {
      if (s.type !== t) {
        if (((i = Qw(t, e.queue)), i === null)) return;
        s = e.queue[i];
      }
      if (
        (e.queue.splice(i, 1),
        (e.queuePending[t] = s),
        s.action(t, e),
        !s.doneFn)
      ) {
        (e.queuePending[t] = null), Js(t, e);
        return;
      }
    }
  },
  C0 = (t, e) => {
    const i = e[`${t}Buffer`],
      s = E0(t);
    i &&
      (i.removeEventListener("updateend", e[`on${s}UpdateEnd_`]),
      i.removeEventListener("error", e[`on${s}Error_`]),
      (e.codecs[t] = null),
      (e[`${t}Buffer`] = null));
  },
  oi = (t, e) =>
    t && e && Array.prototype.indexOf.call(t.sourceBuffers, e) !== -1,
  Pt = {
    appendBuffer: (t, e, i) => (s, n) => {
      const r = n[`${s}Buffer`];
      if (oi(n.mediaSource, r)) {
        n.logger_(
          `Appending segment ${e.mediaIndex}'s ${t.length} bytes to ${s}Buffer`
        );
        try {
          r.appendBuffer(t);
        } catch (a) {
          n.logger_(
            `Error with code ${a.code} ` +
              (a.code === S0 ? "(QUOTA_EXCEEDED_ERR) " : "") +
              `when appending segment ${e.mediaIndex} to ${s}Buffer`
          ),
            (n.queuePending[s] = null),
            i(a);
        }
      }
    },
    remove: (t, e) => (i, s) => {
      const n = s[`${i}Buffer`];
      if (oi(s.mediaSource, n)) {
        s.logger_(`Removing ${t} to ${e} from ${i}Buffer`);
        try {
          n.remove(t, e);
        } catch {
          s.logger_(`Remove ${t} to ${e} from ${i}Buffer failed`);
        }
      }
    },
    timestampOffset: (t) => (e, i) => {
      const s = i[`${e}Buffer`];
      oi(i.mediaSource, s) &&
        (i.logger_(`Setting ${e}timestampOffset to ${t}`),
        (s.timestampOffset = t));
    },
    callback: (t) => (e, i) => {
      t();
    },
    endOfStream: (t) => (e) => {
      if (e.mediaSource.readyState === "open") {
        e.logger_(`Calling mediaSource endOfStream(${t || ""})`);
        try {
          e.mediaSource.endOfStream(t);
        } catch (i) {
          M.log.warn("Failed to call media source endOfStream", i);
        }
      }
    },
    duration: (t) => (e) => {
      e.logger_(`Setting mediaSource duration to ${t}`);
      try {
        e.mediaSource.duration = t;
      } catch (i) {
        M.log.warn("Failed to set media source duration", i);
      }
    },
    abort: () => (t, e) => {
      if (e.mediaSource.readyState !== "open") return;
      const i = e[`${t}Buffer`];
      if (oi(e.mediaSource, i)) {
        e.logger_(`calling abort on ${t}Buffer`);
        try {
          i.abort();
        } catch (s) {
          M.log.warn(`Failed to abort on ${t}Buffer`, s);
        }
      }
    },
    addSourceBuffer: (t, e) => (i) => {
      const s = E0(t),
        n = mr(e);
      i.logger_(`Adding ${t}Buffer with codec ${e} to mediaSource`);
      const r = i.mediaSource.addSourceBuffer(n);
      r.addEventListener("updateend", i[`on${s}UpdateEnd_`]),
        r.addEventListener("error", i[`on${s}Error_`]),
        (i.codecs[t] = e),
        (i[`${t}Buffer`] = r);
    },
    removeSourceBuffer: (t) => (e) => {
      const i = e[`${t}Buffer`];
      if ((C0(t, e), !!oi(e.mediaSource, i))) {
        e.logger_(
          `Removing ${t}Buffer with codec ${e.codecs[t]} from mediaSource`
        );
        try {
          e.mediaSource.removeSourceBuffer(i);
        } catch (s) {
          M.log.warn(`Failed to removeSourceBuffer ${t}Buffer`, s);
        }
      }
    },
    changeType: (t) => (e, i) => {
      const s = i[`${e}Buffer`],
        n = mr(t);
      oi(i.mediaSource, s) &&
        i.codecs[e] !== t &&
        (i.logger_(`changing ${e}Buffer codec from ${i.codecs[e]} to ${t}`),
        s.changeType(n),
        (i.codecs[e] = t));
    },
  },
  Dt = ({ type: t, sourceUpdater: e, action: i, doneFn: s, name: n }) => {
    e.queue.push({ type: t, action: i, doneFn: s, name: n }), Js(t, e);
  },
  Of = (t, e) => (i) => {
    if (e.queuePending[t]) {
      const s = e.queuePending[t].doneFn;
      (e.queuePending[t] = null), s && s(e[`${t}Error_`]);
    }
    Js(t, e);
  };
class w0 extends M.EventTarget {
  constructor(e) {
    super(),
      (this.mediaSource = e),
      (this.sourceopenListener_ = () => Js("mediaSource", this)),
      this.mediaSource.addEventListener("sourceopen", this.sourceopenListener_),
      (this.logger_ = ti("SourceUpdater")),
      (this.audioTimestampOffset_ = 0),
      (this.videoTimestampOffset_ = 0),
      (this.queue = []),
      (this.queuePending = { audio: null, video: null }),
      (this.delayedAudioAppendQueue_ = []),
      (this.videoAppendQueued_ = !1),
      (this.codecs = {}),
      (this.onVideoUpdateEnd_ = Of("video", this)),
      (this.onAudioUpdateEnd_ = Of("audio", this)),
      (this.onVideoError_ = (i) => {
        this.videoError_ = i;
      }),
      (this.onAudioError_ = (i) => {
        this.audioError_ = i;
      }),
      (this.createdSourceBuffers_ = !1),
      (this.initializedEme_ = !1),
      (this.triggeredReady_ = !1);
  }
  initializedEme() {
    (this.initializedEme_ = !0), this.triggerReady();
  }
  hasCreatedSourceBuffers() {
    return this.createdSourceBuffers_;
  }
  hasInitializedAnyEme() {
    return this.initializedEme_;
  }
  ready() {
    return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
  }
  createSourceBuffers(e) {
    this.hasCreatedSourceBuffers() ||
      (this.addOrChangeSourceBuffers(e),
      (this.createdSourceBuffers_ = !0),
      this.trigger("createdsourcebuffers"),
      this.triggerReady());
  }
  triggerReady() {
    this.ready() &&
      !this.triggeredReady_ &&
      ((this.triggeredReady_ = !0), this.trigger("ready"));
  }
  addSourceBuffer(e, i) {
    Dt({
      type: "mediaSource",
      sourceUpdater: this,
      action: Pt.addSourceBuffer(e, i),
      name: "addSourceBuffer",
    });
  }
  abort(e) {
    Dt({ type: e, sourceUpdater: this, action: Pt.abort(e), name: "abort" });
  }
  removeSourceBuffer(e) {
    if (!this.canRemoveSourceBuffer()) {
      M.log.error("removeSourceBuffer is not supported!");
      return;
    }
    Dt({
      type: "mediaSource",
      sourceUpdater: this,
      action: Pt.removeSourceBuffer(e),
      name: "removeSourceBuffer",
    });
  }
  canRemoveSourceBuffer() {
    return (
      !M.browser.IE_VERSION &&
      !M.browser.IS_FIREFOX &&
      C.MediaSource &&
      C.MediaSource.prototype &&
      typeof C.MediaSource.prototype.removeSourceBuffer == "function"
    );
  }
  static canChangeType() {
    return (
      C.SourceBuffer &&
      C.SourceBuffer.prototype &&
      typeof C.SourceBuffer.prototype.changeType == "function"
    );
  }
  canChangeType() {
    return this.constructor.canChangeType();
  }
  changeType(e, i) {
    if (!this.canChangeType()) {
      M.log.error("changeType is not supported!");
      return;
    }
    Dt({
      type: e,
      sourceUpdater: this,
      action: Pt.changeType(i),
      name: "changeType",
    });
  }
  addOrChangeSourceBuffers(e) {
    if (!e || typeof e != "object" || Object.keys(e).length === 0)
      throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
    Object.keys(e).forEach((i) => {
      const s = e[i];
      if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(i, s);
      this.canChangeType() && this.changeType(i, s);
    });
  }
  appendBuffer(e, i) {
    const { segmentInfo: s, type: n, bytes: r } = e;
    if (
      ((this.processedAppend_ = !0),
      n === "audio" && this.videoBuffer && !this.videoAppendQueued_)
    ) {
      this.delayedAudioAppendQueue_.push([e, i]),
        this.logger_(`delayed audio append of ${r.length} until video append`);
      return;
    }
    const a = i;
    if (
      (Dt({
        type: n,
        sourceUpdater: this,
        action: Pt.appendBuffer(r, s || { mediaIndex: -1 }, a),
        doneFn: i,
        name: "appendBuffer",
      }),
      n === "video")
    ) {
      if (
        ((this.videoAppendQueued_ = !0), !this.delayedAudioAppendQueue_.length)
      )
        return;
      const o = this.delayedAudioAppendQueue_.slice();
      this.logger_(`queuing delayed audio ${o.length} appendBuffers`),
        (this.delayedAudioAppendQueue_.length = 0),
        o.forEach((u) => {
          this.appendBuffer.apply(this, u);
        });
    }
  }
  audioBuffered() {
    return oi(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered
      ? this.audioBuffer.buffered
      : nt();
  }
  videoBuffered() {
    return oi(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered
      ? this.videoBuffer.buffered
      : nt();
  }
  buffered() {
    const e = oi(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null,
      i = oi(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
    return i && !e
      ? this.audioBuffered()
      : e && !i
      ? this.videoBuffered()
      : TC(this.audioBuffered(), this.videoBuffered());
  }
  setDuration(e, i = ki) {
    Dt({
      type: "mediaSource",
      sourceUpdater: this,
      action: Pt.duration(e),
      name: "duration",
      doneFn: i,
    });
  }
  endOfStream(e = null, i = ki) {
    typeof e != "string" && (e = void 0),
      Dt({
        type: "mediaSource",
        sourceUpdater: this,
        action: Pt.endOfStream(e),
        name: "endOfStream",
        doneFn: i,
      });
  }
  removeAudio(e, i, s = ki) {
    if (!this.audioBuffered().length || this.audioBuffered().end(0) === 0) {
      s();
      return;
    }
    Dt({
      type: "audio",
      sourceUpdater: this,
      action: Pt.remove(e, i),
      doneFn: s,
      name: "remove",
    });
  }
  removeVideo(e, i, s = ki) {
    if (!this.videoBuffered().length || this.videoBuffered().end(0) === 0) {
      s();
      return;
    }
    Dt({
      type: "video",
      sourceUpdater: this,
      action: Pt.remove(e, i),
      doneFn: s,
      name: "remove",
    });
  }
  updating() {
    return !!(xu("audio", this) || xu("video", this));
  }
  audioTimestampOffset(e) {
    return (
      typeof e < "u" &&
        this.audioBuffer &&
        this.audioTimestampOffset_ !== e &&
        (Dt({
          type: "audio",
          sourceUpdater: this,
          action: Pt.timestampOffset(e),
          name: "timestampOffset",
        }),
        (this.audioTimestampOffset_ = e)),
      this.audioTimestampOffset_
    );
  }
  videoTimestampOffset(e) {
    return (
      typeof e < "u" &&
        this.videoBuffer &&
        this.videoTimestampOffset !== e &&
        (Dt({
          type: "video",
          sourceUpdater: this,
          action: Pt.timestampOffset(e),
          name: "timestampOffset",
        }),
        (this.videoTimestampOffset_ = e)),
      this.videoTimestampOffset_
    );
  }
  audioQueueCallback(e) {
    this.audioBuffer &&
      Dt({
        type: "audio",
        sourceUpdater: this,
        action: Pt.callback(e),
        name: "callback",
      });
  }
  videoQueueCallback(e) {
    this.videoBuffer &&
      Dt({
        type: "video",
        sourceUpdater: this,
        action: Pt.callback(e),
        name: "callback",
      });
  }
  dispose() {
    this.trigger("dispose"),
      Yw.forEach((e) => {
        this.abort(e),
          this.canRemoveSourceBuffer()
            ? this.removeSourceBuffer(e)
            : this[`${e}QueueCallback`](() => C0(e, this));
      }),
      (this.videoAppendQueued_ = !1),
      (this.delayedAudioAppendQueue_.length = 0),
      this.sourceopenListener_ &&
        this.mediaSource.removeEventListener(
          "sourceopen",
          this.sourceopenListener_
        ),
      this.off();
  }
}
const Pf = (t) =>
    decodeURIComponent(escape(String.fromCharCode.apply(null, t))),
  Df = new Uint8Array(
    `

`
      .split("")
      .map((t) => t.charCodeAt(0))
  );
class Jw extends bu {
  constructor(e, i = {}) {
    super(e, i),
      (this.mediaSource_ = null),
      (this.subtitlesTrack_ = null),
      (this.loaderType_ = "subtitle"),
      (this.featuresNativeTextTracks_ = e.featuresNativeTextTracks),
      (this.shouldSaveSegmentTimingInfo_ = !1);
  }
  createTransmuxer_() {
    return null;
  }
  buffered_() {
    if (
      !this.subtitlesTrack_ ||
      !this.subtitlesTrack_.cues ||
      !this.subtitlesTrack_.cues.length
    )
      return nt();
    const e = this.subtitlesTrack_.cues,
      i = e[0].startTime,
      s = e[e.length - 1].startTime;
    return nt([[i, s]]);
  }
  initSegmentForMap(e, i = !1) {
    if (!e) return null;
    const s = ro(e);
    let n = this.initSegments_[s];
    if (i && !n && e.bytes) {
      const r = Df.byteLength + e.bytes.byteLength,
        a = new Uint8Array(r);
      a.set(e.bytes),
        a.set(Df, e.bytes.byteLength),
        (this.initSegments_[s] = n =
          { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: a });
    }
    return n || e;
  }
  couldBeginLoading_() {
    return this.playlist_ && this.subtitlesTrack_ && !this.paused();
  }
  init_() {
    return (
      (this.state = "READY"), this.resetEverything(), this.monitorBuffer_()
    );
  }
  track(e) {
    return typeof e > "u"
      ? this.subtitlesTrack_
      : ((this.subtitlesTrack_ = e),
        this.state === "INIT" && this.couldBeginLoading_() && this.init_(),
        this.subtitlesTrack_);
  }
  remove(e, i) {
    Jn(e, i, this.subtitlesTrack_);
  }
  fillBuffer_() {
    const e = this.chooseNextRequest_();
    if (e) {
      if (
        this.syncController_.timestampOffsetForTimeline(e.timeline) === null
      ) {
        const i = () => {
          (this.state = "READY"), this.paused() || this.monitorBuffer_();
        };
        this.syncController_.one("timestampoffset", i),
          (this.state = "WAITING_ON_TIMELINE");
        return;
      }
      this.loadSegment_(e);
    }
  }
  timestampOffsetForSegment_() {
    return null;
  }
  chooseNextRequest_() {
    return this.skipEmptySegments_(super.chooseNextRequest_());
  }
  skipEmptySegments_(e) {
    for (; e && e.segment.empty; ) {
      if (e.mediaIndex + 1 >= e.playlist.segments.length) {
        e = null;
        break;
      }
      e = this.generateSegmentInfo_({
        playlist: e.playlist,
        mediaIndex: e.mediaIndex + 1,
        startOfSegment: e.startOfSegment + e.duration,
        isSyncRequest: e.isSyncRequest,
      });
    }
    return e;
  }
  stopForError(e) {
    this.error(e), (this.state = "READY"), this.pause(), this.trigger("error");
  }
  segmentRequestFinished_(e, i, s) {
    if (!this.subtitlesTrack_) {
      this.state = "READY";
      return;
    }
    if ((this.saveTransferStats_(i.stats), !this.pendingSegment_)) {
      (this.state = "READY"), (this.mediaRequestsAborted += 1);
      return;
    }
    if (e) {
      e.code === hi.TIMEOUT && this.handleTimeout_(),
        e.code === hi.ABORTED
          ? (this.mediaRequestsAborted += 1)
          : (this.mediaRequestsErrored += 1),
        this.stopForError(e);
      return;
    }
    const n = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(n.duration, i.stats),
      i.key && this.segmentKey(i.key, !0),
      (this.state = "APPENDING"),
      this.trigger("appending");
    const r = n.segment;
    if (
      (r.map && (r.map.bytes = i.map.bytes),
      (n.bytes = i.bytes),
      typeof C.WebVTT != "function" &&
        this.subtitlesTrack_ &&
        this.subtitlesTrack_.tech_)
    ) {
      let a;
      const o = () => {
        this.subtitlesTrack_.tech_.off("vttjsloaded", a),
          this.stopForError({ message: "Error loading vtt.js" });
      };
      (a = () => {
        this.subtitlesTrack_.tech_.off("vttjserror", o),
          this.segmentRequestFinished_(e, i, s);
      }),
        (this.state = "WAITING_ON_VTTJS"),
        this.subtitlesTrack_.tech_.one("vttjsloaded", a),
        this.subtitlesTrack_.tech_.one("vttjserror", o);
      return;
    }
    r.requested = !0;
    try {
      this.parseVTTCues_(n);
    } catch (a) {
      this.stopForError({ message: a.message });
      return;
    }
    if (
      (this.updateTimeMapping_(
        n,
        this.syncController_.timelines[n.timeline],
        this.playlist_
      ),
      n.cues.length
        ? (n.timingInfo = {
            start: n.cues[0].startTime,
            end: n.cues[n.cues.length - 1].endTime,
          })
        : (n.timingInfo = {
            start: n.startOfSegment,
            end: n.startOfSegment + n.duration,
          }),
      n.isSyncRequest)
    ) {
      this.trigger("syncinfoupdate"),
        (this.pendingSegment_ = null),
        (this.state = "READY");
      return;
    }
    (n.byteLength = n.bytes.byteLength),
      (this.mediaSecondsLoaded += r.duration),
      n.cues.forEach((a) => {
        this.subtitlesTrack_.addCue(
          this.featuresNativeTextTracks_
            ? new C.VTTCue(a.startTime, a.endTime, a.text)
            : a
        );
      }),
      Fw(this.subtitlesTrack_),
      this.handleAppendsDone_();
  }
  handleData_() {}
  updateTimingInfoEnd_() {}
  parseVTTCues_(e) {
    let i,
      s = !1;
    typeof C.TextDecoder == "function"
      ? (i = new C.TextDecoder("utf8"))
      : ((i = C.WebVTT.StringDecoder()), (s = !0));
    const n = new C.WebVTT.Parser(C, C.vttjs, i);
    if (
      ((e.cues = []),
      (e.timestampmap = { MPEGTS: 0, LOCAL: 0 }),
      (n.oncue = e.cues.push.bind(e.cues)),
      (n.ontimestampmap = (a) => {
        e.timestampmap = a;
      }),
      (n.onparsingerror = (a) => {
        M.log.warn("Error encountered when parsing cues: " + a.message);
      }),
      e.segment.map)
    ) {
      let a = e.segment.map.bytes;
      s && (a = Pf(a)), n.parse(a);
    }
    let r = e.bytes;
    s && (r = Pf(r)), n.parse(r), n.flush();
  }
  updateTimeMapping_(e, i, s) {
    const n = e.segment;
    if (!i) return;
    if (!e.cues.length) {
      n.empty = !0;
      return;
    }
    const r = e.timestampmap,
      a = r.MPEGTS / qa.ONE_SECOND_IN_TS - r.LOCAL + i.mapping;
    if (
      (e.cues.forEach((o) => {
        (o.startTime += a), (o.endTime += a);
      }),
      !s.syncInfo)
    ) {
      const o = e.cues[0].startTime,
        u = e.cues[e.cues.length - 1].startTime;
      s.syncInfo = {
        mediaSequence: s.mediaSequence + e.mediaIndex,
        time: Math.min(o, u - n.duration),
      };
    }
  }
}
const Zw = function (t, e) {
    const i = t.cues;
    for (let s = 0; s < i.length; s++) {
      const n = i[s];
      if (e >= n.adStartTime && e <= n.adEndTime) return n;
    }
    return null;
  },
  e1 = function (t, e, i = 0) {
    if (!t.segments) return;
    let s = i,
      n;
    for (let r = 0; r < t.segments.length; r++) {
      const a = t.segments[r];
      if ((n || (n = Zw(e, s + a.duration / 2)), n)) {
        if ("cueIn" in a) {
          (n.endTime = s), (n.adEndTime = s), (s += a.duration), (n = null);
          continue;
        }
        if (s < n.endTime) {
          s += a.duration;
          continue;
        }
        n.endTime += a.duration;
      } else if (
        ("cueOut" in a &&
          ((n = new C.VTTCue(s, s + a.duration, a.cueOut)),
          (n.adStartTime = s),
          (n.adEndTime = s + parseFloat(a.cueOut)),
          e.addCue(n)),
        "cueOutCont" in a)
      ) {
        const [o, u] = a.cueOutCont.split("/").map(parseFloat);
        (n = new C.VTTCue(s, s + a.duration, "")),
          (n.adStartTime = s - o),
          (n.adEndTime = n.adStartTime + u),
          e.addCue(n);
      }
      s += a.duration;
    }
  },
  t1 = 86400,
  Lf = [
    {
      name: "VOD",
      run: (t, e, i, s, n) =>
        i !== 1 / 0 ? { time: 0, segmentIndex: 0, partIndex: null } : null,
    },
    {
      name: "ProgramDateTime",
      run: (t, e, i, s, n) => {
        if (!Object.keys(t.timelineToDatetimeMappings).length) return null;
        let r = null,
          a = null;
        const o = fu(e);
        n = n || 0;
        for (let u = 0; u < o.length; u++) {
          const f = e.endList || n === 0 ? u : o.length - (u + 1),
            p = o[f],
            _ = p.segment,
            v = t.timelineToDatetimeMappings[_.timeline];
          if (!v || !_.dateTimeObject) continue;
          let A = _.dateTimeObject.getTime() / 1e3 + v;
          if (_.parts && typeof p.partIndex == "number")
            for (let E = 0; E < p.partIndex; E++) A += _.parts[E].duration;
          const S = Math.abs(n - A);
          if (a !== null && (S === 0 || a < S)) break;
          (a = S),
            (r = {
              time: A,
              segmentIndex: p.segmentIndex,
              partIndex: p.partIndex,
            });
        }
        return r;
      },
    },
    {
      name: "Segment",
      run: (t, e, i, s, n) => {
        let r = null,
          a = null;
        n = n || 0;
        const o = fu(e);
        for (let u = 0; u < o.length; u++) {
          const f = e.endList || n === 0 ? u : o.length - (u + 1),
            p = o[f],
            _ = p.segment,
            v = (p.part && p.part.start) || (_ && _.start);
          if (_.timeline === s && typeof v < "u") {
            const y = Math.abs(n - v);
            if (a !== null && a < y) break;
            (!r || a === null || a >= y) &&
              ((a = y),
              (r = {
                time: v,
                segmentIndex: p.segmentIndex,
                partIndex: p.partIndex,
              }));
          }
        }
        return r;
      },
    },
    {
      name: "Discontinuity",
      run: (t, e, i, s, n) => {
        let r = null;
        if (
          ((n = n || 0), e.discontinuityStarts && e.discontinuityStarts.length)
        ) {
          let a = null;
          for (let o = 0; o < e.discontinuityStarts.length; o++) {
            const u = e.discontinuityStarts[o],
              f = e.discontinuitySequence + o + 1,
              p = t.discontinuities[f];
            if (p) {
              const _ = Math.abs(n - p.time);
              if (a !== null && a < _) break;
              (!r || a === null || a >= _) &&
                ((a = _),
                (r = { time: p.time, segmentIndex: u, partIndex: null }));
            }
          }
        }
        return r;
      },
    },
    {
      name: "Playlist",
      run: (t, e, i, s, n) =>
        e.syncInfo
          ? {
              time: e.syncInfo.time,
              segmentIndex: e.syncInfo.mediaSequence - e.mediaSequence,
              partIndex: null,
            }
          : null,
    },
  ];
class i1 extends M.EventTarget {
  constructor(e = {}) {
    super(),
      (this.timelines = []),
      (this.discontinuities = []),
      (this.timelineToDatetimeMappings = {}),
      (this.logger_ = ti("SyncController"));
  }
  getSyncPoint(e, i, s, n) {
    const r = this.runStrategies_(e, i, s, n);
    return r.length
      ? this.selectSyncPoint_(r, { key: "time", value: n })
      : null;
  }
  getExpiredTime(e, i) {
    if (!e || !e.segments) return null;
    const s = this.runStrategies_(e, i, e.discontinuitySequence, 0);
    if (!s.length) return null;
    const n = this.selectSyncPoint_(s, { key: "segmentIndex", value: 0 });
    return (
      n.segmentIndex > 0 && (n.time *= -1),
      Math.abs(
        n.time +
          rr({
            defaultDuration: e.targetDuration,
            durationList: e.segments,
            startIndex: n.segmentIndex,
            endIndex: 0,
          })
      )
    );
  }
  runStrategies_(e, i, s, n) {
    const r = [];
    for (let a = 0; a < Lf.length; a++) {
      const o = Lf[a],
        u = o.run(this, e, i, s, n);
      u && ((u.strategy = o.name), r.push({ strategy: o.name, syncPoint: u }));
    }
    return r;
  }
  selectSyncPoint_(e, i) {
    let s = e[0].syncPoint,
      n = Math.abs(e[0].syncPoint[i.key] - i.value),
      r = e[0].strategy;
    for (let a = 1; a < e.length; a++) {
      const o = Math.abs(e[a].syncPoint[i.key] - i.value);
      o < n && ((n = o), (s = e[a].syncPoint), (r = e[a].strategy));
    }
    return (
      this.logger_(
        `syncPoint for [${i.key}: ${i.value}] chosen with strategy [${r}]: [time:${s.time}, segmentIndex:${s.segmentIndex}` +
          (typeof s.partIndex == "number" ? `,partIndex:${s.partIndex}` : "") +
          "]"
      ),
      s
    );
  }
  saveExpiredSegmentInfo(e, i) {
    const s = i.mediaSequence - e.mediaSequence;
    if (s > t1) {
      M.log.warn(
        `Not saving expired segment info. Media sequence gap ${s} is too large.`
      );
      return;
    }
    for (let n = s - 1; n >= 0; n--) {
      const r = e.segments[n];
      if (r && typeof r.start < "u") {
        (i.syncInfo = { mediaSequence: e.mediaSequence + n, time: r.start }),
          this.logger_(
            `playlist refresh sync: [time:${i.syncInfo.time}, mediaSequence: ${i.syncInfo.mediaSequence}]`
          ),
          this.trigger("syncinfoupdate");
        break;
      }
    }
  }
  setDateTimeMappingForStart(e) {
    if (
      ((this.timelineToDatetimeMappings = {}),
      e.segments && e.segments.length && e.segments[0].dateTimeObject)
    ) {
      const i = e.segments[0],
        s = i.dateTimeObject.getTime() / 1e3;
      this.timelineToDatetimeMappings[i.timeline] = -s;
    }
  }
  saveSegmentTimingInfo({ segmentInfo: e, shouldSaveTimelineMapping: i }) {
    const s = this.calculateSegmentTimeMapping_(e, e.timingInfo, i),
      n = e.segment;
    s &&
      (this.saveDiscontinuitySyncInfo_(e),
      e.playlist.syncInfo ||
        (e.playlist.syncInfo = {
          mediaSequence: e.playlist.mediaSequence + e.mediaIndex,
          time: n.start,
        }));
    const r = n.dateTimeObject;
    n.discontinuity &&
      i &&
      r &&
      (this.timelineToDatetimeMappings[n.timeline] = -(r.getTime() / 1e3));
  }
  timestampOffsetForTimeline(e) {
    return typeof this.timelines[e] > "u" ? null : this.timelines[e].time;
  }
  mappingForTimeline(e) {
    return typeof this.timelines[e] > "u" ? null : this.timelines[e].mapping;
  }
  calculateSegmentTimeMapping_(e, i, s) {
    const n = e.segment,
      r = e.part;
    let a = this.timelines[e.timeline],
      o,
      u;
    if (typeof e.timestampOffset == "number")
      (a = { time: e.startOfSegment, mapping: e.startOfSegment - i.start }),
        s &&
          ((this.timelines[e.timeline] = a),
          this.trigger("timestampoffset"),
          this.logger_(
            `time mapping for timeline ${e.timeline}: [time: ${a.time}] [mapping: ${a.mapping}]`
          )),
        (o = e.startOfSegment),
        (u = i.end + a.mapping);
    else if (a) (o = i.start + a.mapping), (u = i.end + a.mapping);
    else return !1;
    return (
      r && ((r.start = o), (r.end = u)),
      (!n.start || o < n.start) && (n.start = o),
      (n.end = u),
      !0
    );
  }
  saveDiscontinuitySyncInfo_(e) {
    const i = e.playlist,
      s = e.segment;
    if (s.discontinuity)
      this.discontinuities[s.timeline] = { time: s.start, accuracy: 0 };
    else if (i.discontinuityStarts && i.discontinuityStarts.length)
      for (let n = 0; n < i.discontinuityStarts.length; n++) {
        const r = i.discontinuityStarts[n],
          a = i.discontinuitySequence + n + 1,
          o = r - e.mediaIndex,
          u = Math.abs(o);
        if (!this.discontinuities[a] || this.discontinuities[a].accuracy > u) {
          let f;
          o < 0
            ? (f =
                s.start -
                rr({
                  defaultDuration: i.targetDuration,
                  durationList: i.segments,
                  startIndex: e.mediaIndex,
                  endIndex: r,
                }))
            : (f =
                s.end +
                rr({
                  defaultDuration: i.targetDuration,
                  durationList: i.segments,
                  startIndex: e.mediaIndex + 1,
                  endIndex: r,
                })),
            (this.discontinuities[a] = { time: f, accuracy: u });
        }
      }
  }
  dispose() {
    this.trigger("dispose"), this.off();
  }
}
class s1 extends M.EventTarget {
  constructor() {
    super(),
      (this.pendingTimelineChanges_ = {}),
      (this.lastTimelineChanges_ = {});
  }
  clearPendingTimelineChange(e) {
    (this.pendingTimelineChanges_[e] = null),
      this.trigger("pendingtimelinechange");
  }
  pendingTimelineChange({ type: e, from: i, to: s }) {
    return (
      typeof i == "number" &&
        typeof s == "number" &&
        ((this.pendingTimelineChanges_[e] = { type: e, from: i, to: s }),
        this.trigger("pendingtimelinechange")),
      this.pendingTimelineChanges_[e]
    );
  }
  lastTimelineChange({ type: e, from: i, to: s }) {
    return (
      typeof i == "number" &&
        typeof s == "number" &&
        ((this.lastTimelineChanges_[e] = { type: e, from: i, to: s }),
        delete this.pendingTimelineChanges_[e],
        this.trigger("timelinechange")),
      this.lastTimelineChanges_[e]
    );
  }
  dispose() {
    this.trigger("dispose"),
      (this.pendingTimelineChanges_ = {}),
      (this.lastTimelineChanges_ = {}),
      this.off();
  }
}
const n1 = h0(
  f0(function () {
    var t = (function () {
      function S() {
        this.listeners = {};
      }
      var E = S.prototype;
      return (
        (E.on = function (D, R) {
          this.listeners[D] || (this.listeners[D] = []),
            this.listeners[D].push(R);
        }),
        (E.off = function (D, R) {
          if (!this.listeners[D]) return !1;
          var N = this.listeners[D].indexOf(R);
          return (
            (this.listeners[D] = this.listeners[D].slice(0)),
            this.listeners[D].splice(N, 1),
            N > -1
          );
        }),
        (E.trigger = function (D) {
          var R = this.listeners[D];
          if (R)
            if (arguments.length === 2)
              for (var N = R.length, L = 0; L < N; ++L)
                R[L].call(this, arguments[1]);
            else
              for (
                var z = Array.prototype.slice.call(arguments, 1),
                  Z = R.length,
                  ae = 0;
                ae < Z;
                ++ae
              )
                R[ae].apply(this, z);
        }),
        (E.dispose = function () {
          this.listeners = {};
        }),
        (E.pipe = function (D) {
          this.on("data", function (R) {
            D.push(R);
          });
        }),
        S
      );
    })();
    /*!@name pkcs7 @version 1.0.4 @license Apache-2.0*/ function e(S) {
      return S.subarray(0, S.byteLength - S[S.byteLength - 1]);
    }
    /*!@name aes-decrypter @version 4.0.1 @license Apache-2.0*/ const i =
      function () {
        const S = [
            [[], [], [], [], []],
            [[], [], [], [], []],
          ],
          E = S[0],
          k = S[1],
          D = E[4],
          R = k[4];
        let N, L, z;
        const Z = [],
          ae = [];
        let ne, ve, de, xe, Y, oe;
        for (N = 0; N < 256; N++)
          ae[(Z[N] = (N << 1) ^ ((N >> 7) * 283)) ^ N] = N;
        for (L = z = 0; !D[L]; L ^= ne || 1, z = ae[z] || 1)
          for (
            xe = z ^ (z << 1) ^ (z << 2) ^ (z << 3) ^ (z << 4),
              xe = (xe >> 8) ^ (xe & 255) ^ 99,
              D[L] = xe,
              R[xe] = L,
              de = Z[(ve = Z[(ne = Z[L])])],
              oe = (de * 16843009) ^ (ve * 65537) ^ (ne * 257) ^ (L * 16843008),
              Y = (Z[xe] * 257) ^ (xe * 16843008),
              N = 0;
            N < 4;
            N++
          )
            (E[N][L] = Y = (Y << 24) ^ (Y >>> 8)),
              (k[N][xe] = oe = (oe << 24) ^ (oe >>> 8));
        for (N = 0; N < 5; N++) (E[N] = E[N].slice(0)), (k[N] = k[N].slice(0));
        return S;
      };
    let s = null;
    class n {
      constructor(E) {
        s || (s = i()),
          (this._tables = [
            [
              s[0][0].slice(),
              s[0][1].slice(),
              s[0][2].slice(),
              s[0][3].slice(),
              s[0][4].slice(),
            ],
            [
              s[1][0].slice(),
              s[1][1].slice(),
              s[1][2].slice(),
              s[1][3].slice(),
              s[1][4].slice(),
            ],
          ]);
        let k, D, R;
        const N = this._tables[0][4],
          L = this._tables[1],
          z = E.length;
        let Z = 1;
        if (z !== 4 && z !== 6 && z !== 8)
          throw new Error("Invalid aes key size");
        const ae = E.slice(0),
          ne = [];
        for (this._key = [ae, ne], k = z; k < 4 * z + 28; k++)
          (R = ae[k - 1]),
            (k % z === 0 || (z === 8 && k % z === 4)) &&
              ((R =
                (N[R >>> 24] << 24) ^
                (N[(R >> 16) & 255] << 16) ^
                (N[(R >> 8) & 255] << 8) ^
                N[R & 255]),
              k % z === 0 &&
                ((R = (R << 8) ^ (R >>> 24) ^ (Z << 24)),
                (Z = (Z << 1) ^ ((Z >> 7) * 283)))),
            (ae[k] = ae[k - z] ^ R);
        for (D = 0; k; D++, k--)
          (R = ae[D & 3 ? k : k - 4]),
            k <= 4 || D < 4
              ? (ne[D] = R)
              : (ne[D] =
                  L[0][N[R >>> 24]] ^
                  L[1][N[(R >> 16) & 255]] ^
                  L[2][N[(R >> 8) & 255]] ^
                  L[3][N[R & 255]]);
      }
      decrypt(E, k, D, R, N, L) {
        const z = this._key[1];
        let Z = E ^ z[0],
          ae = R ^ z[1],
          ne = D ^ z[2],
          ve = k ^ z[3],
          de,
          xe,
          Y;
        const oe = z.length / 4 - 2;
        let Ne,
          re = 4;
        const ue = this._tables[1],
          Te = ue[0],
          ot = ue[1],
          Nt = ue[2],
          lt = ue[3],
          Ke = ue[4];
        for (Ne = 0; Ne < oe; Ne++)
          (de =
            Te[Z >>> 24] ^
            ot[(ae >> 16) & 255] ^
            Nt[(ne >> 8) & 255] ^
            lt[ve & 255] ^
            z[re]),
            (xe =
              Te[ae >>> 24] ^
              ot[(ne >> 16) & 255] ^
              Nt[(ve >> 8) & 255] ^
              lt[Z & 255] ^
              z[re + 1]),
            (Y =
              Te[ne >>> 24] ^
              ot[(ve >> 16) & 255] ^
              Nt[(Z >> 8) & 255] ^
              lt[ae & 255] ^
              z[re + 2]),
            (ve =
              Te[ve >>> 24] ^
              ot[(Z >> 16) & 255] ^
              Nt[(ae >> 8) & 255] ^
              lt[ne & 255] ^
              z[re + 3]),
            (re += 4),
            (Z = de),
            (ae = xe),
            (ne = Y);
        for (Ne = 0; Ne < 4; Ne++)
          (N[(3 & -Ne) + L] =
            (Ke[Z >>> 24] << 24) ^
            (Ke[(ae >> 16) & 255] << 16) ^
            (Ke[(ne >> 8) & 255] << 8) ^
            Ke[ve & 255] ^
            z[re++]),
            (de = Z),
            (Z = ae),
            (ae = ne),
            (ne = ve),
            (ve = de);
      }
    }
    class r extends t {
      constructor() {
        super(t), (this.jobs = []), (this.delay = 1), (this.timeout_ = null);
      }
      processJob_() {
        this.jobs.shift()(),
          this.jobs.length
            ? (this.timeout_ = setTimeout(
                this.processJob_.bind(this),
                this.delay
              ))
            : (this.timeout_ = null);
      }
      push(E) {
        this.jobs.push(E),
          this.timeout_ ||
            (this.timeout_ = setTimeout(
              this.processJob_.bind(this),
              this.delay
            ));
      }
    }
    const a = function (S) {
        return (
          (S << 24) | ((S & 65280) << 8) | ((S & 16711680) >> 8) | (S >>> 24)
        );
      },
      o = function (S, E, k) {
        const D = new Int32Array(S.buffer, S.byteOffset, S.byteLength >> 2),
          R = new n(Array.prototype.slice.call(E)),
          N = new Uint8Array(S.byteLength),
          L = new Int32Array(N.buffer);
        let z, Z, ae, ne, ve, de, xe, Y, oe;
        for (
          z = k[0], Z = k[1], ae = k[2], ne = k[3], oe = 0;
          oe < D.length;
          oe += 4
        )
          (ve = a(D[oe])),
            (de = a(D[oe + 1])),
            (xe = a(D[oe + 2])),
            (Y = a(D[oe + 3])),
            R.decrypt(ve, de, xe, Y, L, oe),
            (L[oe] = a(L[oe] ^ z)),
            (L[oe + 1] = a(L[oe + 1] ^ Z)),
            (L[oe + 2] = a(L[oe + 2] ^ ae)),
            (L[oe + 3] = a(L[oe + 3] ^ ne)),
            (z = ve),
            (Z = de),
            (ae = xe),
            (ne = Y);
        return N;
      };
    class u {
      constructor(E, k, D, R) {
        const N = u.STEP,
          L = new Int32Array(E.buffer),
          z = new Uint8Array(E.byteLength);
        let Z = 0;
        for (
          this.asyncStream_ = new r(),
            this.asyncStream_.push(
              this.decryptChunk_(L.subarray(Z, Z + N), k, D, z)
            ),
            Z = N;
          Z < L.length;
          Z += N
        )
          (D = new Uint32Array([
            a(L[Z - 4]),
            a(L[Z - 3]),
            a(L[Z - 2]),
            a(L[Z - 1]),
          ])),
            this.asyncStream_.push(
              this.decryptChunk_(L.subarray(Z, Z + N), k, D, z)
            );
        this.asyncStream_.push(function () {
          R(null, e(z));
        });
      }
      static get STEP() {
        return 32e3;
      }
      decryptChunk_(E, k, D, R) {
        return function () {
          const N = o(E, k, D);
          R.set(N, E.byteOffset);
        };
      }
    }
    var f =
        typeof globalThis < "u"
          ? globalThis
          : typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      p;
    typeof window < "u"
      ? (p = window)
      : typeof f < "u"
      ? (p = f)
      : typeof self < "u"
      ? (p = self)
      : (p = {});
    var _ = p,
      v = function (E) {
        return ArrayBuffer.isView === "function"
          ? ArrayBuffer.isView(E)
          : E && E.buffer instanceof ArrayBuffer;
      },
      y = _.BigInt || Number;
    y("0x1"),
      y("0x100"),
      y("0x10000"),
      y("0x1000000"),
      y("0x100000000"),
      y("0x10000000000"),
      y("0x1000000000000"),
      y("0x100000000000000"),
      y("0x10000000000000000"),
      (function () {
        var S = new Uint16Array([65484]),
          E = new Uint8Array(S.buffer, S.byteOffset, S.byteLength);
        return E[0] === 255 ? "big" : E[0] === 204 ? "little" : "unknown";
      })();
    const A = function (S) {
      const E = {};
      return (
        Object.keys(S).forEach((k) => {
          const D = S[k];
          v(D)
            ? (E[k] = {
                bytes: D.buffer,
                byteOffset: D.byteOffset,
                byteLength: D.byteLength,
              })
            : (E[k] = D);
        }),
        E
      );
    };
    self.onmessage = function (S) {
      const E = S.data,
        k = new Uint8Array(
          E.encrypted.bytes,
          E.encrypted.byteOffset,
          E.encrypted.byteLength
        ),
        D = new Uint32Array(
          E.key.bytes,
          E.key.byteOffset,
          E.key.byteLength / 4
        ),
        R = new Uint32Array(E.iv.bytes, E.iv.byteOffset, E.iv.byteLength / 4);
      new u(k, D, R, function (N, L) {
        self.postMessage(A({ source: E.source, decrypted: L }), [L.buffer]);
      });
    };
  })
);
var r1 = d0(n1);
const a1 = (t) => {
    let e = t.default ? "main" : "alternative";
    return (
      t.characteristics &&
        t.characteristics.indexOf("public.accessibility.describes-video") >=
          0 &&
        (e = "main-desc"),
      e
    );
  },
  uo = (t, e) => {
    t.abort(),
      t.pause(),
      e &&
        e.activePlaylistLoader &&
        (e.activePlaylistLoader.pause(), (e.activePlaylistLoader = null));
  },
  Su = (t, e) => {
    (e.activePlaylistLoader = t), t.load();
  },
  o1 = (t, e) => () => {
    const {
        segmentLoaders: { [t]: i, main: s },
        mediaTypes: { [t]: n },
      } = e,
      r = n.activeTrack(),
      a = n.getActiveGroup(),
      o = n.activePlaylistLoader,
      u = n.lastGroup_;
    if (
      !(a && u && a.id === u.id) &&
      ((n.lastGroup_ = a),
      (n.lastTrack_ = r),
      uo(i, n),
      !(!a || a.isMainPlaylist))
    ) {
      if (!a.playlistLoader) {
        o && s.resetEverything();
        return;
      }
      i.resyncLoader(), Su(a.playlistLoader, n);
    }
  },
  l1 = (t, e) => () => {
    const {
      segmentLoaders: { [t]: i },
      mediaTypes: { [t]: s },
    } = e;
    (s.lastGroup_ = null), i.abort(), i.pause();
  },
  u1 = (t, e) => () => {
    const {
        mainPlaylistLoader: i,
        segmentLoaders: { [t]: s, main: n },
        mediaTypes: { [t]: r },
      } = e,
      a = r.activeTrack(),
      o = r.getActiveGroup(),
      u = r.activePlaylistLoader,
      f = r.lastTrack_;
    if (
      !(f && a && f.id === a.id) &&
      ((r.lastGroup_ = o), (r.lastTrack_ = a), uo(s, r), !!o)
    ) {
      if (o.isMainPlaylist) {
        if (!a || !f || a.id === f.id) return;
        const p = e.vhs.playlistController_,
          _ = p.selectPlaylist();
        if (p.media() === _) return;
        r.logger_(`track change. Switching main audio from ${f.id} to ${a.id}`),
          i.pause(),
          n.resetEverything(),
          p.fastQualityChange_(_);
        return;
      }
      if (t === "AUDIO") {
        if (!o.playlistLoader) {
          n.setAudio(!0), n.resetEverything();
          return;
        }
        s.setAudio(!0), n.setAudio(!1);
      }
      if (u === o.playlistLoader) {
        Su(o.playlistLoader, r);
        return;
      }
      s.track && s.track(a), s.resetEverything(), Su(o.playlistLoader, r);
    }
  },
  co = {
    AUDIO: (t, e) => () => {
      const {
        segmentLoaders: { [t]: i },
        mediaTypes: { [t]: s },
        excludePlaylist: n,
      } = e;
      uo(i, s);
      const r = s.activeTrack(),
        a = s.activeGroup(),
        o = (a.filter((f) => f.default)[0] || a[0]).id,
        u = s.tracks[o];
      if (r === u) {
        n({
          error: {
            message: "Problem encountered loading the default audio track.",
          },
        });
        return;
      }
      M.log.warn(
        "Problem encountered loading the alternate audio track.Switching back to default."
      );
      for (const f in s.tracks) s.tracks[f].enabled = s.tracks[f] === u;
      s.onTrackChanged();
    },
    SUBTITLES: (t, e) => () => {
      const {
        segmentLoaders: { [t]: i },
        mediaTypes: { [t]: s },
      } = e;
      M.log.warn(
        "Problem encountered loading the subtitle track.Disabling subtitle track."
      ),
        uo(i, s);
      const n = s.activeTrack();
      n && (n.mode = "disabled"), s.onTrackChanged();
    },
  },
  Rf = {
    AUDIO: (t, e, i) => {
      if (!e) return;
      const {
        tech: s,
        requestOptions: n,
        segmentLoaders: { [t]: r },
      } = i;
      e.on("loadedmetadata", () => {
        const a = e.media();
        r.playlist(a, n),
          (!s.paused() || (a.endList && s.preload() !== "none")) && r.load();
      }),
        e.on("loadedplaylist", () => {
          r.playlist(e.media(), n), s.paused() || r.load();
        }),
        e.on("error", co[t](t, i));
    },
    SUBTITLES: (t, e, i) => {
      const {
        tech: s,
        requestOptions: n,
        segmentLoaders: { [t]: r },
        mediaTypes: { [t]: a },
      } = i;
      e.on("loadedmetadata", () => {
        const o = e.media();
        r.playlist(o, n),
          r.track(a.activeTrack()),
          (!s.paused() || (o.endList && s.preload() !== "none")) && r.load();
      }),
        e.on("loadedplaylist", () => {
          r.playlist(e.media(), n), s.paused() || r.load();
        }),
        e.on("error", co[t](t, i));
    },
  },
  c1 = {
    AUDIO: (t, e) => {
      const {
          vhs: i,
          sourceType: s,
          segmentLoaders: { [t]: n },
          requestOptions: r,
          main: { mediaGroups: a },
          mediaTypes: {
            [t]: { groups: o, tracks: u, logger_: f },
          },
          mainPlaylistLoader: p,
        } = e,
        _ = Dr(p.main);
      (!a[t] || Object.keys(a[t]).length === 0) &&
        ((a[t] = { main: { default: { default: !0 } } }),
        _ && (a[t].main.default.playlists = p.main.playlists));
      for (const v in a[t]) {
        o[v] || (o[v] = []);
        for (const y in a[t][v]) {
          let A = a[t][v][y],
            S;
          if (
            (_
              ? (f(`AUDIO group '${v}' label '${y}' is a main playlist`),
                (A.isMainPlaylist = !0),
                (S = null))
              : s === "vhs-json" && A.playlists
              ? (S = new $s(A.playlists[0], i, r))
              : A.resolvedUri
              ? (S = new $s(A.resolvedUri, i, r))
              : A.playlists && s === "dash"
              ? (S = new vu(A.playlists[0], i, r, p))
              : (S = null),
            (A = Pe({ id: y, playlistLoader: S }, A)),
            Rf[t](t, A.playlistLoader, e),
            o[v].push(A),
            typeof u[y] > "u")
          ) {
            const E = new M.AudioTrack({
              id: y,
              kind: a1(A),
              enabled: !1,
              language: A.language,
              default: A.default,
              label: y,
            });
            u[y] = E;
          }
        }
      }
      n.on("error", co[t](t, e));
    },
    SUBTITLES: (t, e) => {
      const {
        tech: i,
        vhs: s,
        sourceType: n,
        segmentLoaders: { [t]: r },
        requestOptions: a,
        main: { mediaGroups: o },
        mediaTypes: {
          [t]: { groups: u, tracks: f },
        },
        mainPlaylistLoader: p,
      } = e;
      for (const _ in o[t]) {
        u[_] || (u[_] = []);
        for (const v in o[t][_]) {
          if (o[t][_][v].forced) continue;
          let y = o[t][_][v],
            A;
          if (n === "hls") A = new $s(y.resolvedUri, s, a);
          else if (n === "dash") {
            if (!y.playlists.filter((E) => E.excludeUntil !== 1 / 0).length)
              return;
            A = new vu(y.playlists[0], s, a, p);
          } else
            n === "vhs-json" &&
              (A = new $s(y.playlists ? y.playlists[0] : y.resolvedUri, s, a));
          if (
            ((y = Pe({ id: v, playlistLoader: A }, y)),
            Rf[t](t, y.playlistLoader, e),
            u[_].push(y),
            typeof f[v] > "u")
          ) {
            const S = i.addRemoteTextTrack(
              {
                id: v,
                kind: "subtitles",
                default: y.default && y.autoselect,
                language: y.language,
                label: v,
              },
              !1
            ).track;
            f[v] = S;
          }
        }
      }
      r.on("error", co[t](t, e));
    },
    "CLOSED-CAPTIONS": (t, e) => {
      const {
        tech: i,
        main: { mediaGroups: s },
        mediaTypes: {
          [t]: { groups: n, tracks: r },
        },
      } = e;
      for (const a in s[t]) {
        n[a] || (n[a] = []);
        for (const o in s[t][a]) {
          const u = s[t][a][o];
          if (!/^(?:CC|SERVICE)/.test(u.instreamId)) continue;
          const f = (i.options_.vhs && i.options_.vhs.captionServices) || {};
          let p = {
            label: o,
            language: u.language,
            instreamId: u.instreamId,
            default: u.default && u.autoselect,
          };
          if (
            (f[p.instreamId] && (p = Pe(p, f[p.instreamId])),
            p.default === void 0 && delete p.default,
            n[a].push(Pe({ id: o }, u)),
            typeof r[o] > "u")
          ) {
            const _ = i.addRemoteTextTrack(
              {
                id: p.instreamId,
                kind: "captions",
                default: p.default,
                language: p.language,
                label: p.label,
              },
              !1
            ).track;
            r[o] = _;
          }
        }
      }
    },
  },
  A0 = (t, e) => {
    for (let i = 0; i < t.length; i++)
      if (qc(e, t[i]) || (t[i].playlists && A0(t[i].playlists, e))) return !0;
    return !1;
  },
  d1 = (t, e) => (i) => {
    const {
        mainPlaylistLoader: s,
        mediaTypes: {
          [t]: { groups: n },
        },
      } = e,
      r = s.media();
    if (!r) return null;
    let a = null;
    r.attributes[t] && (a = n[r.attributes[t]]);
    const o = Object.keys(n);
    if (!a)
      if (t === "AUDIO" && o.length > 1 && Dr(e.main))
        for (let u = 0; u < o.length; u++) {
          const f = n[o[u]];
          if (A0(f, r)) {
            a = f;
            break;
          }
        }
      else n.main ? (a = n.main) : o.length === 1 && (a = n[o[0]]);
    return typeof i > "u"
      ? a
      : i === null || !a
      ? null
      : a.filter((u) => u.id === i.id)[0] || null;
  },
  h1 = {
    AUDIO: (t, e) => () => {
      const {
        mediaTypes: {
          [t]: { tracks: i },
        },
      } = e;
      for (const s in i) if (i[s].enabled) return i[s];
      return null;
    },
    SUBTITLES: (t, e) => () => {
      const {
        mediaTypes: {
          [t]: { tracks: i },
        },
      } = e;
      for (const s in i)
        if (i[s].mode === "showing" || i[s].mode === "hidden") return i[s];
      return null;
    },
  },
  f1 =
    (t, { mediaTypes: e }) =>
    () => {
      const i = e[t].activeTrack();
      return i ? e[t].activeGroup(i) : null;
    },
  p1 = (t) => {
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((f) => {
      c1[f](f, t);
    });
    const {
      mediaTypes: e,
      mainPlaylistLoader: i,
      tech: s,
      vhs: n,
      segmentLoaders: { ["AUDIO"]: r, main: a },
    } = t;
    ["AUDIO", "SUBTITLES"].forEach((f) => {
      (e[f].activeGroup = d1(f, t)),
        (e[f].activeTrack = h1[f](f, t)),
        (e[f].onGroupChanged = o1(f, t)),
        (e[f].onGroupChanging = l1(f, t)),
        (e[f].onTrackChanged = u1(f, t)),
        (e[f].getActiveGroup = f1(f, t));
    });
    const o = e.AUDIO.activeGroup();
    if (o) {
      const f = (o.filter((_) => _.default)[0] || o[0]).id;
      (e.AUDIO.tracks[f].enabled = !0),
        e.AUDIO.onGroupChanged(),
        e.AUDIO.onTrackChanged(),
        e.AUDIO.getActiveGroup().playlistLoader
          ? (a.setAudio(!1), r.setAudio(!0))
          : a.setAudio(!0);
    }
    i.on("mediachange", () => {
      ["AUDIO", "SUBTITLES"].forEach((f) => e[f].onGroupChanged());
    }),
      i.on("mediachanging", () => {
        ["AUDIO", "SUBTITLES"].forEach((f) => e[f].onGroupChanging());
      });
    const u = () => {
      e.AUDIO.onTrackChanged(),
        s.trigger({ type: "usage", name: "vhs-audio-change" });
    };
    s.audioTracks().addEventListener("change", u),
      s
        .remoteTextTracks()
        .addEventListener("change", e.SUBTITLES.onTrackChanged),
      n.on("dispose", () => {
        s.audioTracks().removeEventListener("change", u),
          s
            .remoteTextTracks()
            .removeEventListener("change", e.SUBTITLES.onTrackChanged);
      }),
      s.clearTracks("audio");
    for (const f in e.AUDIO.tracks) s.audioTracks().addTrack(e.AUDIO.tracks[f]);
  },
  m1 = () => {
    const t = {};
    return (
      ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((e) => {
        t[e] = {
          groups: {},
          tracks: {},
          activePlaylistLoader: null,
          activeGroup: ki,
          activeTrack: ki,
          getActiveGroup: ki,
          onGroupChanged: ki,
          onTrackChanged: ki,
          lastTrack_: null,
          logger_: ti(`MediaGroups[${e}]`),
        };
      }),
      t
    );
  },
  g1 = 60 * 2;
let Ci;
const _1 = [
    "mediaRequests",
    "mediaRequestsAborted",
    "mediaRequestsTimedout",
    "mediaRequestsErrored",
    "mediaTransferDuration",
    "mediaBytesTransferred",
    "mediaAppends",
  ],
  y1 = function (t) {
    return this.audioSegmentLoader_[t] + this.mainSegmentLoader_[t];
  },
  v1 = function ({
    currentPlaylist: t,
    buffered: e,
    currentTime: i,
    nextPlaylist: s,
    bufferLowWaterLine: n,
    bufferHighWaterLine: r,
    duration: a,
    bufferBasedABR: o,
    log: u,
  }) {
    if (!s)
      return (
        M.log.warn(
          "We received no playlist to switch to. Please check your stream."
        ),
        !1
      );
    const f = `allowing switch ${(t && t.id) || "null"} -> ${s.id}`;
    if (!t) return u(`${f} as current playlist is not set`), !0;
    if (s.id === t.id) return !1;
    const p = Boolean(Bs(e, i).length);
    if (!t.endList)
      return !p && typeof t.partTargetDuration == "number"
        ? (u(
            `not ${f} as current playlist is live llhls, but currentTime isn't in buffered.`
          ),
          !1)
        : (u(`${f} as current playlist is live`), !0);
    const _ = Hc(e, i),
      v = o
        ? Ye.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE
        : Ye.MAX_BUFFER_LOW_WATER_LINE;
    if (a < v)
      return u(`${f} as duration < max low water line (${a} < ${v})`), !0;
    const y = s.attributes.BANDWIDTH,
      A = t.attributes.BANDWIDTH;
    if (y < A && (!o || _ < r)) {
      let S = `${f} as next bandwidth < current bandwidth (${y} < ${A})`;
      return (
        o && (S += ` and forwardBuffer < bufferHighWaterLine (${_} < ${r})`),
        u(S),
        !0
      );
    }
    if ((!o || y > A) && _ >= n) {
      let S = `${f} as forwardBuffer >= bufferLowWaterLine (${_} >= ${n})`;
      return (
        o && (S += ` and next bandwidth > current bandwidth (${y} > ${A})`),
        u(S),
        !0
      );
    }
    return u(`not ${f} as no switching criteria met`), !1;
  };
class T1 extends M.EventTarget {
  constructor(e) {
    super();
    const {
      src: i,
      withCredentials: s,
      tech: n,
      bandwidth: r,
      externVhs: a,
      useCueTags: o,
      playlistExclusionDuration: u,
      enableLowInitialPlaylist: f,
      sourceType: p,
      cacheEncryptionKeys: _,
      bufferBasedABR: v,
      leastPixelDiffSelector: y,
      captionServices: A,
    } = e;
    if (!i)
      throw new Error(
        "A non-empty playlist URL or JSON manifest string is required"
      );
    let { maxPlaylistRetries: S } = e;
    (S === null || typeof S > "u") && (S = 1 / 0),
      (Ci = a),
      (this.bufferBasedABR = Boolean(v)),
      (this.leastPixelDiffSelector = Boolean(y)),
      (this.withCredentials = s),
      (this.tech_ = n),
      (this.vhs_ = n.vhs),
      (this.sourceType_ = p),
      (this.useCueTags_ = o),
      (this.playlistExclusionDuration = u),
      (this.maxPlaylistRetries = S),
      (this.enableLowInitialPlaylist = f),
      this.useCueTags_ &&
        ((this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues")),
        (this.cueTagsTrack_.inBandMetadataTrackDispatchType = "")),
      (this.requestOptions_ = {
        withCredentials: s,
        maxPlaylistRetries: S,
        timeout: null,
      }),
      this.on("error", this.pauseLoading),
      (this.mediaTypes_ = m1()),
      (this.mediaSource = new C.MediaSource()),
      (this.handleDurationChange_ = this.handleDurationChange_.bind(this)),
      (this.handleSourceOpen_ = this.handleSourceOpen_.bind(this)),
      (this.handleSourceEnded_ = this.handleSourceEnded_.bind(this)),
      this.mediaSource.addEventListener(
        "durationchange",
        this.handleDurationChange_
      ),
      this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_),
      this.mediaSource.addEventListener("sourceended", this.handleSourceEnded_),
      (this.seekable_ = nt()),
      (this.hasPlayed_ = !1),
      (this.syncController_ = new i1(e)),
      (this.segmentMetadataTrack_ = n.addRemoteTextTrack(
        { kind: "metadata", label: "segment-metadata" },
        !1
      ).track),
      (this.decrypter_ = new r1()),
      (this.sourceUpdater_ = new w0(this.mediaSource)),
      (this.inbandTextTracks_ = {}),
      (this.timelineChangeController_ = new s1());
    const E = {
      vhs: this.vhs_,
      parse708captions: e.parse708captions,
      useDtsForTimestampOffset: e.useDtsForTimestampOffset,
      captionServices: A,
      mediaSource: this.mediaSource,
      currentTime: this.tech_.currentTime.bind(this.tech_),
      seekable: () => this.seekable(),
      seeking: () => this.tech_.seeking(),
      duration: () => this.duration(),
      hasPlayed: () => this.hasPlayed_,
      goalBufferLength: () => this.goalBufferLength(),
      bandwidth: r,
      syncController: this.syncController_,
      decrypter: this.decrypter_,
      sourceType: this.sourceType_,
      inbandTextTracks: this.inbandTextTracks_,
      cacheEncryptionKeys: _,
      sourceUpdater: this.sourceUpdater_,
      timelineChangeController: this.timelineChangeController_,
      exactManifestTimings: e.exactManifestTimings,
    };
    (this.mainPlaylistLoader_ =
      this.sourceType_ === "dash"
        ? new vu(i, this.vhs_, this.requestOptions_)
        : new $s(i, this.vhs_, this.requestOptions_)),
      this.setupMainPlaylistLoaderListeners_(),
      (this.mainSegmentLoader_ = new bu(
        Pe(E, {
          segmentMetadataTrack: this.segmentMetadataTrack_,
          loaderType: "main",
        }),
        e
      )),
      (this.audioSegmentLoader_ = new bu(Pe(E, { loaderType: "audio" }), e)),
      (this.subtitleSegmentLoader_ = new Jw(
        Pe(E, {
          loaderType: "vtt",
          featuresNativeTextTracks: this.tech_.featuresNativeTextTracks,
        }),
        e
      )),
      this.setupSegmentLoaderListeners_(),
      this.bufferBasedABR &&
        (this.mainPlaylistLoader_.one("loadedplaylist", () =>
          this.startABRTimer_()
        ),
        this.tech_.on("pause", () => this.stopABRTimer_()),
        this.tech_.on("play", () => this.startABRTimer_())),
      _1.forEach((D) => {
        this[D + "_"] = y1.bind(this, D);
      }),
      (this.logger_ = ti("pc")),
      (this.triggeredFmp4Usage = !1),
      this.tech_.preload() === "none"
        ? ((this.loadOnPlay_ = () => {
            (this.loadOnPlay_ = null), this.mainPlaylistLoader_.load();
          }),
          this.tech_.one("play", this.loadOnPlay_))
        : this.mainPlaylistLoader_.load(),
      (this.timeToLoadedData__ = -1),
      (this.mainAppendsToLoadedData__ = -1),
      (this.audioAppendsToLoadedData__ = -1);
    const k = this.tech_.preload() === "none" ? "play" : "loadstart";
    this.tech_.one(k, () => {
      const D = Date.now();
      this.tech_.one("loadeddata", () => {
        (this.timeToLoadedData__ = Date.now() - D),
          (this.mainAppendsToLoadedData__ =
            this.mainSegmentLoader_.mediaAppends),
          (this.audioAppendsToLoadedData__ =
            this.audioSegmentLoader_.mediaAppends);
      });
    });
  }
  mainAppendsToLoadedData_() {
    return this.mainAppendsToLoadedData__;
  }
  audioAppendsToLoadedData_() {
    return this.audioAppendsToLoadedData__;
  }
  appendsToLoadedData_() {
    const e = this.mainAppendsToLoadedData_(),
      i = this.audioAppendsToLoadedData_();
    return e === -1 || i === -1 ? -1 : e + i;
  }
  timeToLoadedData_() {
    return this.timeToLoadedData__;
  }
  checkABR_(e = "abr") {
    const i = this.selectPlaylist();
    i && this.shouldSwitchToMedia_(i) && this.switchMedia_(i, e);
  }
  switchMedia_(e, i, s) {
    const n = this.media(),
      r = n && (n.id || n.uri),
      a = e.id || e.uri;
    r &&
      r !== a &&
      (this.logger_(`switch media ${r} -> ${a} from ${i}`),
      this.tech_.trigger({ type: "usage", name: `vhs-rendition-change-${i}` })),
      this.mainPlaylistLoader_.media(e, s);
  }
  startABRTimer_() {
    this.stopABRTimer_(),
      (this.abrTimer_ = C.setInterval(() => this.checkABR_(), 250));
  }
  stopABRTimer_() {
    (this.tech_.scrubbing && this.tech_.scrubbing()) ||
      (C.clearInterval(this.abrTimer_), (this.abrTimer_ = null));
  }
  getAudioTrackPlaylists_() {
    const e = this.main(),
      i = (e && e.playlists) || [];
    if (!e || !e.mediaGroups || !e.mediaGroups.AUDIO) return i;
    const s = e.mediaGroups.AUDIO,
      n = Object.keys(s);
    let r;
    if (Object.keys(this.mediaTypes_.AUDIO.groups).length)
      r = this.mediaTypes_.AUDIO.activeTrack();
    else {
      const o = s.main || (n.length && s[n[0]]);
      for (const u in o)
        if (o[u].default) {
          r = { label: u };
          break;
        }
    }
    if (!r) return i;
    const a = [];
    for (const o in s)
      if (s[o][r.label]) {
        const u = s[o][r.label];
        if (u.playlists && u.playlists.length) a.push.apply(a, u.playlists);
        else if (u.uri) a.push(u);
        else if (e.playlists.length)
          for (let f = 0; f < e.playlists.length; f++) {
            const p = e.playlists[f];
            p.attributes &&
              p.attributes.AUDIO &&
              p.attributes.AUDIO === o &&
              a.push(p);
          }
      }
    return a.length ? a : i;
  }
  setupMainPlaylistLoaderListeners_() {
    this.mainPlaylistLoader_.on("loadedmetadata", () => {
      const e = this.mainPlaylistLoader_.media(),
        i = e.targetDuration * 1.5 * 1e3;
      pu(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media())
        ? (this.requestOptions_.timeout = 0)
        : (this.requestOptions_.timeout = i),
        e.endList &&
          this.tech_.preload() !== "none" &&
          (this.mainSegmentLoader_.playlist(e, this.requestOptions_),
          this.mainSegmentLoader_.load()),
        p1({
          sourceType: this.sourceType_,
          segmentLoaders: {
            AUDIO: this.audioSegmentLoader_,
            SUBTITLES: this.subtitleSegmentLoader_,
            main: this.mainSegmentLoader_,
          },
          tech: this.tech_,
          requestOptions: this.requestOptions_,
          mainPlaylistLoader: this.mainPlaylistLoader_,
          vhs: this.vhs_,
          main: this.main(),
          mediaTypes: this.mediaTypes_,
          excludePlaylist: this.excludePlaylist.bind(this),
        }),
        this.triggerPresenceUsage_(this.main(), e),
        this.setupFirstPlay(),
        !this.mediaTypes_.AUDIO.activePlaylistLoader ||
        this.mediaTypes_.AUDIO.activePlaylistLoader.media()
          ? this.trigger("selectedinitialmedia")
          : this.mediaTypes_.AUDIO.activePlaylistLoader.one(
              "loadedmetadata",
              () => {
                this.trigger("selectedinitialmedia");
              }
            );
    }),
      this.mainPlaylistLoader_.on("loadedplaylist", () => {
        this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
        let e = this.mainPlaylistLoader_.media();
        if (!e) {
          this.excludeUnsupportedVariants_();
          let i;
          if (
            (this.enableLowInitialPlaylist &&
              (i = this.selectInitialPlaylist()),
            i || (i = this.selectPlaylist()),
            !i ||
              !this.shouldSwitchToMedia_(i) ||
              ((this.initialMedia_ = i),
              this.switchMedia_(this.initialMedia_, "initial"),
              !(
                this.sourceType_ === "vhs-json" && this.initialMedia_.segments
              )))
          )
            return;
          e = this.initialMedia_;
        }
        this.handleUpdatedMediaPlaylist(e);
      }),
      this.mainPlaylistLoader_.on("error", () => {
        const e = this.mainPlaylistLoader_.error;
        this.excludePlaylist({ playlistToExclude: e.playlist, error: e });
      }),
      this.mainPlaylistLoader_.on("mediachanging", () => {
        this.mainSegmentLoader_.abort(), this.mainSegmentLoader_.pause();
      }),
      this.mainPlaylistLoader_.on("mediachange", () => {
        const e = this.mainPlaylistLoader_.media(),
          i = e.targetDuration * 1.5 * 1e3;
        pu(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media())
          ? (this.requestOptions_.timeout = 0)
          : (this.requestOptions_.timeout = i),
          this.mainPlaylistLoader_.load(),
          this.mainSegmentLoader_.playlist(e, this.requestOptions_),
          this.mainSegmentLoader_.load(),
          this.tech_.trigger({ type: "mediachange", bubbles: !0 });
      }),
      this.mainPlaylistLoader_.on("playlistunchanged", () => {
        const e = this.mainPlaylistLoader_.media();
        if (e.lastExcludeReason_ === "playlist-unchanged") return;
        this.stuckAtPlaylistEnd_(e) &&
          (this.excludePlaylist({
            error: {
              message: "Playlist no longer updating.",
              reason: "playlist-unchanged",
            },
          }),
          this.tech_.trigger("playliststuck"));
      }),
      this.mainPlaylistLoader_.on("renditiondisabled", () => {
        this.tech_.trigger({ type: "usage", name: "vhs-rendition-disabled" });
      }),
      this.mainPlaylistLoader_.on("renditionenabled", () => {
        this.tech_.trigger({ type: "usage", name: "vhs-rendition-enabled" });
      });
  }
  handleUpdatedMediaPlaylist(e) {
    this.useCueTags_ && this.updateAdCues_(e),
      this.mainSegmentLoader_.playlist(e, this.requestOptions_),
      this.updateDuration(!e.endList),
      this.tech_.paused() ||
        (this.mainSegmentLoader_.load(),
        this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
  }
  triggerPresenceUsage_(e, i) {
    const s = e.mediaGroups || {};
    let n = !0;
    const r = Object.keys(s.AUDIO);
    for (const a in s.AUDIO)
      for (const o in s.AUDIO[a]) s.AUDIO[a][o].uri || (n = !1);
    n && this.tech_.trigger({ type: "usage", name: "vhs-demuxed" }),
      Object.keys(s.SUBTITLES).length &&
        this.tech_.trigger({ type: "usage", name: "vhs-webvtt" }),
      Ci.Playlist.isAes(i) &&
        this.tech_.trigger({ type: "usage", name: "vhs-aes" }),
      r.length &&
        Object.keys(s.AUDIO[r[0]]).length > 1 &&
        this.tech_.trigger({ type: "usage", name: "vhs-alternate-audio" }),
      this.useCueTags_ &&
        this.tech_.trigger({ type: "usage", name: "vhs-playlist-cue-tags" });
  }
  shouldSwitchToMedia_(e) {
    const i =
        this.mainPlaylistLoader_.media() ||
        this.mainPlaylistLoader_.pendingMedia_,
      s = this.tech_.currentTime(),
      n = this.bufferLowWaterLine(),
      r = this.bufferHighWaterLine(),
      a = this.tech_.buffered();
    return v1({
      buffered: a,
      currentTime: s,
      currentPlaylist: i,
      nextPlaylist: e,
      bufferLowWaterLine: n,
      bufferHighWaterLine: r,
      duration: this.duration(),
      bufferBasedABR: this.bufferBasedABR,
      log: this.logger_,
    });
  }
  setupSegmentLoaderListeners_() {
    this.mainSegmentLoader_.on("bandwidthupdate", () => {
      this.checkABR_("bandwidthupdate"), this.tech_.trigger("bandwidthupdate");
    }),
      this.mainSegmentLoader_.on("timeout", () => {
        this.bufferBasedABR && this.mainSegmentLoader_.load();
      }),
      this.bufferBasedABR ||
        this.mainSegmentLoader_.on("progress", () => {
          this.trigger("progress");
        }),
      this.mainSegmentLoader_.on("error", () => {
        const i = this.mainSegmentLoader_.error();
        this.excludePlaylist({ playlistToExclude: i.playlist, error: i });
      }),
      this.mainSegmentLoader_.on("appenderror", () => {
        (this.error = this.mainSegmentLoader_.error_), this.trigger("error");
      }),
      this.mainSegmentLoader_.on("syncinfoupdate", () => {
        this.onSyncInfoUpdate_();
      }),
      this.mainSegmentLoader_.on("timestampoffset", () => {
        this.tech_.trigger({ type: "usage", name: "vhs-timestamp-offset" });
      }),
      this.audioSegmentLoader_.on("syncinfoupdate", () => {
        this.onSyncInfoUpdate_();
      }),
      this.audioSegmentLoader_.on("appenderror", () => {
        (this.error = this.audioSegmentLoader_.error_), this.trigger("error");
      }),
      this.mainSegmentLoader_.on("ended", () => {
        this.logger_("main segment loader ended"), this.onEndOfStream();
      }),
      this.mainSegmentLoader_.on("earlyabort", (i) => {
        this.bufferBasedABR ||
          (this.delegateLoaders_("all", ["abort"]),
          this.excludePlaylist({
            error: {
              message:
                "Aborted early because there isn't enough bandwidth to complete the request without rebuffering.",
            },
            playlistExclusionDuration: g1,
          }));
      });
    const e = () => {
      if (!this.sourceUpdater_.hasCreatedSourceBuffers())
        return this.tryToCreateSourceBuffers_();
      const i = this.getCodecsOrExclude_();
      i && this.sourceUpdater_.addOrChangeSourceBuffers(i);
    };
    this.mainSegmentLoader_.on("trackinfo", e),
      this.audioSegmentLoader_.on("trackinfo", e),
      this.mainSegmentLoader_.on("fmp4", () => {
        this.triggeredFmp4Usage ||
          (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }),
          (this.triggeredFmp4Usage = !0));
      }),
      this.audioSegmentLoader_.on("fmp4", () => {
        this.triggeredFmp4Usage ||
          (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }),
          (this.triggeredFmp4Usage = !0));
      }),
      this.audioSegmentLoader_.on("ended", () => {
        this.logger_("audioSegmentLoader ended"), this.onEndOfStream();
      });
  }
  mediaSecondsLoaded_() {
    return Math.max(
      this.audioSegmentLoader_.mediaSecondsLoaded +
        this.mainSegmentLoader_.mediaSecondsLoaded
    );
  }
  load() {
    this.mainSegmentLoader_.load(),
      this.mediaTypes_.AUDIO.activePlaylistLoader &&
        this.audioSegmentLoader_.load(),
      this.mediaTypes_.SUBTITLES.activePlaylistLoader &&
        this.subtitleSegmentLoader_.load();
  }
  fastQualityChange_(e = this.selectPlaylist()) {
    if (e === this.mainPlaylistLoader_.media()) {
      this.logger_(
        "skipping fastQualityChange because new media is same as old"
      );
      return;
    }
    this.switchMedia_(e, "fast-quality"),
      this.mainSegmentLoader_.resetEverything(() => {
        M.browser.IE_VERSION || M.browser.IS_EDGE
          ? this.tech_.setCurrentTime(this.tech_.currentTime() + 0.04)
          : this.tech_.setCurrentTime(this.tech_.currentTime());
      });
  }
  play() {
    if (this.setupFirstPlay()) return;
    this.tech_.ended() && this.tech_.setCurrentTime(0),
      this.hasPlayed_ && this.load();
    const e = this.tech_.seekable();
    if (
      this.tech_.duration() === 1 / 0 &&
      this.tech_.currentTime() < e.start(0)
    )
      return this.tech_.setCurrentTime(e.end(e.length - 1));
  }
  setupFirstPlay() {
    const e = this.mainPlaylistLoader_.media();
    if (!e || this.tech_.paused() || this.hasPlayed_) return !1;
    if (!e.endList) {
      const i = this.seekable();
      if (!i.length) return !1;
      if (M.browser.IE_VERSION && this.tech_.readyState() === 0)
        return (
          this.tech_.one("loadedmetadata", () => {
            this.trigger("firstplay"),
              this.tech_.setCurrentTime(i.end(0)),
              (this.hasPlayed_ = !0);
          }),
          !1
        );
      this.trigger("firstplay"), this.tech_.setCurrentTime(i.end(0));
    }
    return (this.hasPlayed_ = !0), this.load(), !0;
  }
  handleSourceOpen_() {
    if ((this.tryToCreateSourceBuffers_(), this.tech_.autoplay())) {
      const e = this.tech_.play();
      typeof e < "u" && typeof e.then == "function" && e.then(null, (i) => {});
    }
    this.trigger("sourceopen");
  }
  handleSourceEnded_() {
    if (!this.inbandTextTracks_.metadataTrack_) return;
    const e = this.inbandTextTracks_.metadataTrack_.cues;
    if (!e || !e.length) return;
    const i = this.duration();
    e[e.length - 1].endTime =
      isNaN(i) || Math.abs(i) === 1 / 0 ? Number.MAX_VALUE : i;
  }
  handleDurationChange_() {
    this.tech_.trigger("durationchange");
  }
  onEndOfStream() {
    let e = this.mainSegmentLoader_.ended_;
    if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
      const i = this.mainSegmentLoader_.getCurrentMediaInfo_();
      !i || i.hasVideo
        ? (e = e && this.audioSegmentLoader_.ended_)
        : (e = this.audioSegmentLoader_.ended_);
    }
    e && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
  }
  stuckAtPlaylistEnd_(e) {
    if (!this.seekable().length) return !1;
    const s = this.syncController_.getExpiredTime(e, this.duration());
    if (s === null) return !1;
    const n = Ci.Playlist.playlistEnd(e, s),
      r = this.tech_.currentTime(),
      a = this.tech_.buffered();
    if (!a.length) return n - r <= di;
    const o = a.end(a.length - 1);
    return o - r <= di && n - o <= di;
  }
  excludePlaylist({
    playlistToExclude: e = this.mainPlaylistLoader_.media(),
    error: i = {},
    playlistExclusionDuration: s,
  }) {
    if (
      ((e = e || this.mainPlaylistLoader_.media()),
      (s = s || i.playlistExclusionDuration || this.playlistExclusionDuration),
      !e)
    ) {
      (this.error = i),
        this.mediaSource.readyState !== "open"
          ? this.trigger("error")
          : this.sourceUpdater_.endOfStream("network");
      return;
    }
    e.playlistErrors_++;
    const n = this.mainPlaylistLoader_.main.playlists,
      r = n.filter(Wo),
      a = r.length === 1 && r[0] === e;
    if (n.length === 1 && s !== 1 / 0)
      return (
        M.log.warn(
          `Problem encountered with playlist ${e.id}. Trying again since it is the only playlist.`
        ),
        this.tech_.trigger("retryplaylist"),
        this.mainPlaylistLoader_.load(a)
      );
    if (a) {
      let y = !1;
      n.forEach((A) => {
        if (A === e) return;
        const S = A.excludeUntil;
        typeof S < "u" && S !== 1 / 0 && ((y = !0), delete A.excludeUntil);
      }),
        y &&
          (M.log.warn(
            "Removing other playlists from the exclusion list because the last rendition is about to be excluded."
          ),
          this.tech_.trigger("retryplaylist"));
    }
    let o;
    e.playlistErrors_ > this.maxPlaylistRetries
      ? (o = 1 / 0)
      : (o = Date.now() + s * 1e3),
      (e.excludeUntil = o),
      i.reason && (e.lastExcludeReason_ = i.reason),
      this.tech_.trigger("excludeplaylist"),
      this.tech_.trigger({ type: "usage", name: "vhs-rendition-excluded" });
    const u = this.selectPlaylist();
    if (!u) {
      (this.error =
        "Playback cannot continue. No available working or supported playlists."),
        this.trigger("error");
      return;
    }
    const f = i.internal ? this.logger_ : M.log.warn,
      p = i.message ? " " + i.message : "";
    f(
      `${
        i.internal ? "Internal problem" : "Problem"
      } encountered with playlist ${e.id}.${p} Switching to playlist ${u.id}.`
    ),
      u.attributes.AUDIO !== e.attributes.AUDIO &&
        this.delegateLoaders_("audio", ["abort", "pause"]),
      u.attributes.SUBTITLES !== e.attributes.SUBTITLES &&
        this.delegateLoaders_("subtitle", ["abort", "pause"]),
      this.delegateLoaders_("main", ["abort", "pause"]);
    const _ = (u.targetDuration / 2) * 1e3 || 5 * 1e3,
      v = typeof u.lastRequest == "number" && Date.now() - u.lastRequest <= _;
    return this.switchMedia_(u, "exclude", a || v);
  }
  pauseLoading() {
    this.delegateLoaders_("all", ["abort", "pause"]), this.stopABRTimer_();
  }
  delegateLoaders_(e, i) {
    const s = [],
      n = e === "all";
    (n || e === "main") && s.push(this.mainPlaylistLoader_);
    const r = [];
    (n || e === "audio") && r.push("AUDIO"),
      (n || e === "subtitle") &&
        (r.push("CLOSED-CAPTIONS"), r.push("SUBTITLES")),
      r.forEach((a) => {
        const o =
          this.mediaTypes_[a] && this.mediaTypes_[a].activePlaylistLoader;
        o && s.push(o);
      }),
      ["main", "audio", "subtitle"].forEach((a) => {
        const o = this[`${a}SegmentLoader_`];
        o && (e === a || e === "all") && s.push(o);
      }),
      s.forEach((a) =>
        i.forEach((o) => {
          typeof a[o] == "function" && a[o]();
        })
      );
  }
  setCurrentTime(e) {
    const i = Bs(this.tech_.buffered(), e);
    if (
      !(this.mainPlaylistLoader_ && this.mainPlaylistLoader_.media()) ||
      !this.mainPlaylistLoader_.media().segments
    )
      return 0;
    if (i && i.length) return e;
    this.mainSegmentLoader_.resetEverything(),
      this.mainSegmentLoader_.abort(),
      this.mediaTypes_.AUDIO.activePlaylistLoader &&
        (this.audioSegmentLoader_.resetEverything(),
        this.audioSegmentLoader_.abort()),
      this.mediaTypes_.SUBTITLES.activePlaylistLoader &&
        (this.subtitleSegmentLoader_.resetEverything(),
        this.subtitleSegmentLoader_.abort()),
      this.load();
  }
  duration() {
    if (!this.mainPlaylistLoader_) return 0;
    const e = this.mainPlaylistLoader_.media();
    return e
      ? e.endList
        ? this.mediaSource
          ? this.mediaSource.duration
          : Ci.Playlist.duration(e)
        : 1 / 0
      : 0;
  }
  seekable() {
    return this.seekable_;
  }
  onSyncInfoUpdate_() {
    let e;
    if (!this.mainPlaylistLoader_) return;
    let i = this.mainPlaylistLoader_.media();
    if (!i) return;
    let s = this.syncController_.getExpiredTime(i, this.duration());
    if (s === null) return;
    const n = this.mainPlaylistLoader_.main,
      r = Ci.Playlist.seekable(i, s, Ci.Playlist.liveEdgeDelay(n, i));
    if (
      r.length === 0 ||
      (this.mediaTypes_.AUDIO.activePlaylistLoader &&
        ((i = this.mediaTypes_.AUDIO.activePlaylistLoader.media()),
        (s = this.syncController_.getExpiredTime(i, this.duration())),
        s === null ||
          ((e = Ci.Playlist.seekable(i, s, Ci.Playlist.liveEdgeDelay(n, i))),
          e.length === 0)))
    )
      return;
    let a, o;
    this.seekable_ &&
      this.seekable_.length &&
      ((a = this.seekable_.end(0)), (o = this.seekable_.start(0))),
      e
        ? e.start(0) > r.end(0) || r.start(0) > e.end(0)
          ? (this.seekable_ = r)
          : (this.seekable_ = nt([
              [
                e.start(0) > r.start(0) ? e.start(0) : r.start(0),
                e.end(0) < r.end(0) ? e.end(0) : r.end(0),
              ],
            ]))
        : (this.seekable_ = r),
      !(
        this.seekable_ &&
        this.seekable_.length &&
        this.seekable_.end(0) === a &&
        this.seekable_.start(0) === o
      ) &&
        (this.logger_(`seekable updated [${Vg(this.seekable_)}]`),
        this.tech_.trigger("seekablechanged"));
  }
  updateDuration(e) {
    if (
      (this.updateDuration_ &&
        (this.mediaSource.removeEventListener(
          "sourceopen",
          this.updateDuration_
        ),
        (this.updateDuration_ = null)),
      this.mediaSource.readyState !== "open")
    ) {
      (this.updateDuration_ = this.updateDuration.bind(this, e)),
        this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
      return;
    }
    if (e) {
      const n = this.seekable();
      if (!n.length) return;
      (isNaN(this.mediaSource.duration) ||
        this.mediaSource.duration < n.end(n.length - 1)) &&
        this.sourceUpdater_.setDuration(n.end(n.length - 1));
      return;
    }
    const i = this.tech_.buffered();
    let s = Ci.Playlist.duration(this.mainPlaylistLoader_.media());
    i.length > 0 && (s = Math.max(s, i.end(i.length - 1))),
      this.mediaSource.duration !== s && this.sourceUpdater_.setDuration(s);
  }
  dispose() {
    this.trigger("dispose"),
      this.decrypter_.terminate(),
      this.mainPlaylistLoader_.dispose(),
      this.mainSegmentLoader_.dispose(),
      this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_),
      ["AUDIO", "SUBTITLES"].forEach((e) => {
        const i = this.mediaTypes_[e].groups;
        for (const s in i)
          i[s].forEach((n) => {
            n.playlistLoader && n.playlistLoader.dispose();
          });
      }),
      this.audioSegmentLoader_.dispose(),
      this.subtitleSegmentLoader_.dispose(),
      this.sourceUpdater_.dispose(),
      this.timelineChangeController_.dispose(),
      this.stopABRTimer_(),
      this.updateDuration_ &&
        this.mediaSource.removeEventListener(
          "sourceopen",
          this.updateDuration_
        ),
      this.mediaSource.removeEventListener(
        "durationchange",
        this.handleDurationChange_
      ),
      this.mediaSource.removeEventListener(
        "sourceopen",
        this.handleSourceOpen_
      ),
      this.mediaSource.removeEventListener(
        "sourceended",
        this.handleSourceEnded_
      ),
      this.off();
  }
  main() {
    return this.mainPlaylistLoader_.main;
  }
  media() {
    return this.mainPlaylistLoader_.media() || this.initialMedia_;
  }
  areMediaTypesKnown_() {
    const e = !!this.mediaTypes_.AUDIO.activePlaylistLoader,
      i = !!this.mainSegmentLoader_.getCurrentMediaInfo_(),
      s = e ? !!this.audioSegmentLoader_.getCurrentMediaInfo_() : !0;
    return !(!i || !s);
  }
  getCodecsOrExclude_() {
    const e = {
      main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {},
      audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {},
    };
    e.video = e.main;
    const i = ar(this.main(), this.media()),
      s = {},
      n = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
    if (
      (e.main.hasVideo && (s.video = i.video || e.main.videoCodec || ix),
      e.main.isMuxed && (s.video += `,${i.audio || e.main.audioCodec || vh}`),
      ((e.main.hasAudio && !e.main.isMuxed) || e.audio.hasAudio || n) &&
        ((s.audio = i.audio || e.main.audioCodec || e.audio.audioCodec || vh),
        (e.audio.isFmp4 =
          e.main.hasAudio && !e.main.isMuxed ? e.main.isFmp4 : e.audio.isFmp4)),
      !s.audio && !s.video)
    ) {
      this.excludePlaylist({
        playlistToExclude: this.media(),
        error: { message: "Could not determine codecs for playlist." },
        playlistExclusionDuration: 1 / 0,
      });
      return;
    }
    const r = (u, f) => (u ? ka(f) : _l(f)),
      a = {};
    let o;
    if (
      (["video", "audio"].forEach(function (u) {
        if (s.hasOwnProperty(u) && !r(e[u].isFmp4, s[u])) {
          const f = e[u].isFmp4 ? "browser" : "muxer";
          (a[f] = a[f] || []), a[f].push(s[u]), u === "audio" && (o = f);
        }
      }),
      n && o && this.media().attributes.AUDIO)
    ) {
      const u = this.media().attributes.AUDIO;
      this.main().playlists.forEach((f) => {
        (f.attributes && f.attributes.AUDIO) === u &&
          f !== this.media() &&
          (f.excludeUntil = 1 / 0);
      }),
        this.logger_(
          `excluding audio group ${u} as ${o} does not support codec(s): "${s.audio}"`
        );
    }
    if (Object.keys(a).length) {
      const u =
        Object.keys(a).reduce(
          (f, p) => (
            f && (f += ", "),
            (f += `${p} does not support codec(s): "${a[p].join(",")}"`),
            f
          ),
          ""
        ) + ".";
      this.excludePlaylist({
        playlistToExclude: this.media(),
        error: { internal: !0, message: u },
        playlistExclusionDuration: 1 / 0,
      });
      return;
    }
    if (
      this.sourceUpdater_.hasCreatedSourceBuffers() &&
      !this.sourceUpdater_.canChangeType()
    ) {
      const u = [];
      if (
        (["video", "audio"].forEach((f) => {
          const p = (ni(this.sourceUpdater_.codecs[f] || "")[0] || {}).type,
            _ = (ni(s[f] || "")[0] || {}).type;
          p &&
            _ &&
            p.toLowerCase() !== _.toLowerCase() &&
            u.push(`"${this.sourceUpdater_.codecs[f]}" -> "${s[f]}"`);
        }),
        u.length)
      ) {
        this.excludePlaylist({
          playlistToExclude: this.media(),
          error: {
            message: `Codec switching not supported: ${u.join(", ")}.`,
            internal: !0,
          },
          playlistExclusionDuration: 1 / 0,
        });
        return;
      }
    }
    return s;
  }
  tryToCreateSourceBuffers_() {
    if (
      this.mediaSource.readyState !== "open" ||
      this.sourceUpdater_.hasCreatedSourceBuffers() ||
      !this.areMediaTypesKnown_()
    )
      return;
    const e = this.getCodecsOrExclude_();
    if (!e) return;
    this.sourceUpdater_.createSourceBuffers(e);
    const i = [e.video, e.audio].filter(Boolean).join(",");
    this.excludeIncompatibleVariants_(i);
  }
  excludeUnsupportedVariants_() {
    const e = this.main().playlists,
      i = [];
    Object.keys(e).forEach((s) => {
      const n = e[s];
      if (i.indexOf(n.id) !== -1) return;
      i.push(n.id);
      const r = ar(this.main, n),
        a = [];
      r.audio &&
        !_l(r.audio) &&
        !ka(r.audio) &&
        a.push(`audio codec ${r.audio}`),
        r.video &&
          !_l(r.video) &&
          !ka(r.video) &&
          a.push(`video codec ${r.video}`),
        r.text && r.text === "stpp.ttml.im1t" && a.push(`text codec ${r.text}`),
        a.length &&
          ((n.excludeUntil = 1 / 0),
          this.logger_(`excluding ${n.id} for unsupported: ${a.join(", ")}`));
    });
  }
  excludeIncompatibleVariants_(e) {
    const i = [],
      s = this.main().playlists,
      n = oo(ni(e)),
      r = Sf(n),
      a = (n.video && ni(n.video)[0]) || null,
      o = (n.audio && ni(n.audio)[0]) || null;
    Object.keys(s).forEach((u) => {
      const f = s[u];
      if (i.indexOf(f.id) !== -1 || f.excludeUntil === 1 / 0) return;
      i.push(f.id);
      const p = [],
        _ = ar(this.mainPlaylistLoader_.main, f),
        v = Sf(_);
      if (!(!_.audio && !_.video)) {
        if (
          (v !== r && p.push(`codec count "${v}" !== "${r}"`),
          !this.sourceUpdater_.canChangeType())
        ) {
          const y = (_.video && ni(_.video)[0]) || null,
            A = (_.audio && ni(_.audio)[0]) || null;
          y &&
            a &&
            y.type.toLowerCase() !== a.type.toLowerCase() &&
            p.push(`video codec "${y.type}" !== "${a.type}"`),
            A &&
              o &&
              A.type.toLowerCase() !== o.type.toLowerCase() &&
              p.push(`audio codec "${A.type}" !== "${o.type}"`);
        }
        p.length &&
          ((f.excludeUntil = 1 / 0),
          this.logger_(`excluding ${f.id}: ${p.join(" && ")}`));
      }
    });
  }
  updateAdCues_(e) {
    let i = 0;
    const s = this.seekable();
    s.length && (i = s.start(0)), e1(e, this.cueTagsTrack_, i);
  }
  goalBufferLength() {
    const e = this.tech_.currentTime(),
      i = Ye.GOAL_BUFFER_LENGTH,
      s = Ye.GOAL_BUFFER_LENGTH_RATE,
      n = Math.max(i, Ye.MAX_GOAL_BUFFER_LENGTH);
    return Math.min(i + e * s, n);
  }
  bufferLowWaterLine() {
    const e = this.tech_.currentTime(),
      i = Ye.BUFFER_LOW_WATER_LINE,
      s = Ye.BUFFER_LOW_WATER_LINE_RATE,
      n = Math.max(i, Ye.MAX_BUFFER_LOW_WATER_LINE),
      r = Math.max(i, Ye.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
    return Math.min(i + e * s, this.bufferBasedABR ? r : n);
  }
  bufferHighWaterLine() {
    return Ye.BUFFER_HIGH_WATER_LINE;
  }
}
const b1 = (t, e, i) => (s) => {
  const n = t.main.playlists[e],
    r = Wc(n),
    a = Wo(n);
  return typeof s > "u"
    ? a
    : (s ? delete n.disabled : (n.disabled = !0),
      s !== a &&
        !r &&
        (i(),
        s ? t.trigger("renditionenabled") : t.trigger("renditiondisabled")),
      s);
};
class x1 {
  constructor(e, i, s) {
    const { playlistController_: n } = e,
      r = n.fastQualityChange_.bind(n);
    if (i.attributes) {
      const a = i.attributes.RESOLUTION;
      (this.width = a && a.width),
        (this.height = a && a.height),
        (this.bandwidth = i.attributes.BANDWIDTH),
        (this.frameRate = i.attributes["FRAME-RATE"]);
    }
    (this.codecs = ar(n.main(), i)),
      (this.playlist = i),
      (this.id = s),
      (this.enabled = b1(e.playlists, i.id, r));
  }
}
const S1 = function (t) {
    t.representations = () => {
      const e = t.playlistController_.main(),
        i = Dr(e)
          ? t.playlistController_.getAudioTrackPlaylists_()
          : e.playlists;
      return i ? i.filter((s) => !Wc(s)).map((s, n) => new x1(t, s, s.id)) : [];
    };
  },
  Nf = ["seeking", "seeked", "pause", "playing", "error"];
class E1 {
  constructor(e) {
    (this.playlistController_ = e.playlistController),
      (this.tech_ = e.tech),
      (this.seekable = e.seekable),
      (this.allowSeeksWithinUnsafeLiveWindow =
        e.allowSeeksWithinUnsafeLiveWindow),
      (this.liveRangeSafeTimeDelta = e.liveRangeSafeTimeDelta),
      (this.media = e.media),
      (this.consecutiveUpdates = 0),
      (this.lastRecordedTime = null),
      (this.checkCurrentTimeTimeout_ = null),
      (this.logger_ = ti("PlaybackWatcher")),
      this.logger_("initialize");
    const i = () => this.monitorCurrentTime_(),
      s = () => this.monitorCurrentTime_(),
      n = () => this.techWaiting_(),
      r = () => this.resetTimeUpdate_(),
      a = this.playlistController_,
      o = ["main", "subtitle", "audio"],
      u = {};
    o.forEach((p) => {
      (u[p] = {
        reset: () => this.resetSegmentDownloads_(p),
        updateend: () => this.checkSegmentDownloads_(p),
      }),
        a[`${p}SegmentLoader_`].on("appendsdone", u[p].updateend),
        a[`${p}SegmentLoader_`].on("playlistupdate", u[p].reset),
        this.tech_.on(["seeked", "seeking"], u[p].reset);
    });
    const f = (p) => {
      ["main", "audio"].forEach((_) => {
        a[`${_}SegmentLoader_`][p]("appended", this.seekingAppendCheck_);
      });
    };
    (this.seekingAppendCheck_ = () => {
      this.fixesBadSeeks_() &&
        ((this.consecutiveUpdates = 0),
        (this.lastRecordedTime = this.tech_.currentTime()),
        f("off"));
    }),
      (this.clearSeekingAppendCheck_ = () => f("off")),
      (this.watchForBadSeeking_ = () => {
        this.clearSeekingAppendCheck_(), f("on");
      }),
      this.tech_.on("seeked", this.clearSeekingAppendCheck_),
      this.tech_.on("seeking", this.watchForBadSeeking_),
      this.tech_.on("waiting", n),
      this.tech_.on(Nf, r),
      this.tech_.on("canplay", s),
      this.tech_.one("play", i),
      (this.dispose = () => {
        this.clearSeekingAppendCheck_(),
          this.logger_("dispose"),
          this.tech_.off("waiting", n),
          this.tech_.off(Nf, r),
          this.tech_.off("canplay", s),
          this.tech_.off("play", i),
          this.tech_.off("seeking", this.watchForBadSeeking_),
          this.tech_.off("seeked", this.clearSeekingAppendCheck_),
          o.forEach((p) => {
            a[`${p}SegmentLoader_`].off("appendsdone", u[p].updateend),
              a[`${p}SegmentLoader_`].off("playlistupdate", u[p].reset),
              this.tech_.off(["seeked", "seeking"], u[p].reset);
          }),
          this.checkCurrentTimeTimeout_ &&
            C.clearTimeout(this.checkCurrentTimeTimeout_),
          this.resetTimeUpdate_();
      });
  }
  monitorCurrentTime_() {
    this.checkCurrentTime_(),
      this.checkCurrentTimeTimeout_ &&
        C.clearTimeout(this.checkCurrentTimeTimeout_),
      (this.checkCurrentTimeTimeout_ = C.setTimeout(
        this.monitorCurrentTime_.bind(this),
        250
      ));
  }
  resetSegmentDownloads_(e) {
    const i = this.playlistController_[`${e}SegmentLoader_`];
    this[`${e}StalledDownloads_`] > 0 &&
      this.logger_(`resetting possible stalled download count for ${e} loader`),
      (this[`${e}StalledDownloads_`] = 0),
      (this[`${e}Buffered_`] = i.buffered_());
  }
  checkSegmentDownloads_(e) {
    const i = this.playlistController_,
      s = i[`${e}SegmentLoader_`],
      n = s.buffered_(),
      r = xC(this[`${e}Buffered_`], n);
    if (((this[`${e}Buffered_`] = n), r)) {
      this.resetSegmentDownloads_(e);
      return;
    }
    this[`${e}StalledDownloads_`]++,
      this.logger_(
        `found #${
          this[`${e}StalledDownloads_`]
        } ${e} appends that did not increase buffer (possible stalled download)`,
        { playlistId: s.playlist_ && s.playlist_.id, buffered: ps(n) }
      ),
      !(this[`${e}StalledDownloads_`] < 10) &&
        (this.logger_(`${e} loader stalled download exclusion`),
        this.resetSegmentDownloads_(e),
        this.tech_.trigger({
          type: "usage",
          name: `vhs-${e}-download-exclusion`,
        }),
        e !== "subtitle" &&
          i.excludePlaylist({
            error: { message: `Excessive ${e} segment downloading detected.` },
            playlistExclusionDuration: 1 / 0,
          }));
  }
  checkCurrentTime_() {
    if (this.tech_.paused() || this.tech_.seeking()) return;
    const e = this.tech_.currentTime(),
      i = this.tech_.buffered();
    if (
      this.lastRecordedTime === e &&
      (!i.length || e + di >= i.end(i.length - 1))
    )
      return this.techWaiting_();
    this.consecutiveUpdates >= 5 && e === this.lastRecordedTime
      ? (this.consecutiveUpdates++, this.waiting_())
      : e === this.lastRecordedTime
      ? this.consecutiveUpdates++
      : ((this.consecutiveUpdates = 0), (this.lastRecordedTime = e));
  }
  resetTimeUpdate_() {
    this.consecutiveUpdates = 0;
  }
  fixesBadSeeks_() {
    if (!this.tech_.seeking()) return !1;
    const i = this.seekable(),
      s = this.tech_.currentTime(),
      n = this.afterSeekableWindow_(
        i,
        s,
        this.media(),
        this.allowSeeksWithinUnsafeLiveWindow
      );
    let r;
    if ((n && (r = i.end(i.length - 1)), this.beforeSeekableWindow_(i, s))) {
      const A = i.start(0);
      r = A + (A === i.end(0) ? 0 : di);
    }
    if (typeof r < "u")
      return (
        this.logger_(
          `Trying to seek outside of seekable at time ${s} with seekable range ${Vg(
            i
          )}. Seeking to ${r}.`
        ),
        this.tech_.setCurrentTime(r),
        !0
      );
    const a = this.playlistController_.sourceUpdater_,
      o = this.tech_.buffered(),
      u = a.audioBuffer ? a.audioBuffered() : null,
      f = a.videoBuffer ? a.videoBuffered() : null,
      p = this.media(),
      _ = p.partTargetDuration
        ? p.partTargetDuration
        : (p.targetDuration - Xi) * 2,
      v = [u, f];
    for (let A = 0; A < v.length; A++) {
      if (!v[A]) continue;
      if (Hc(v[A], s) < _) return !1;
    }
    const y = va(o, s);
    return y.length === 0
      ? !1
      : ((r = y.start(0) + di),
        this.logger_(
          `Buffered region starts (${y.start(
            0
          )})  just beyond seek point (${s}). Seeking to ${r}.`
        ),
        this.tech_.setCurrentTime(r),
        !0);
  }
  waiting_() {
    if (this.techWaiting_()) return;
    const e = this.tech_.currentTime(),
      i = this.tech_.buffered(),
      s = Bs(i, e);
    if (s.length && e + 3 <= s.end(0)) {
      this.resetTimeUpdate_(),
        this.tech_.setCurrentTime(e),
        this.logger_(
          `Stopped at ${e} while inside a buffered region [${s.start(
            0
          )} -> ${s.end(
            0
          )}]. Attempting to resume playback by seeking to the current time.`
        ),
        this.tech_.trigger({ type: "usage", name: "vhs-unknown-waiting" });
      return;
    }
  }
  techWaiting_() {
    const e = this.seekable(),
      i = this.tech_.currentTime();
    if (this.tech_.seeking()) return !0;
    if (this.beforeSeekableWindow_(e, i)) {
      const o = e.end(e.length - 1);
      return (
        this.logger_(
          `Fell out of live window at time ${i}. Seeking to live point (seekable end) ${o}`
        ),
        this.resetTimeUpdate_(),
        this.tech_.setCurrentTime(o),
        this.tech_.trigger({ type: "usage", name: "vhs-live-resync" }),
        !0
      );
    }
    const s = this.tech_.vhs.playlistController_.sourceUpdater_,
      n = this.tech_.buffered();
    if (
      this.videoUnderflow_({
        audioBuffered: s.audioBuffered(),
        videoBuffered: s.videoBuffered(),
        currentTime: i,
      })
    )
      return (
        this.resetTimeUpdate_(),
        this.tech_.setCurrentTime(i),
        this.tech_.trigger({ type: "usage", name: "vhs-video-underflow" }),
        !0
      );
    const a = va(n, i);
    return a.length > 0
      ? (this.logger_(`Stopped at ${i} and seeking to ${a.start(0)}`),
        this.resetTimeUpdate_(),
        this.skipTheGap_(i),
        !0)
      : !1;
  }
  afterSeekableWindow_(e, i, s, n = !1) {
    if (!e.length) return !1;
    let r = e.end(e.length - 1) + di;
    return (
      !s.endList && n && (r = e.end(e.length - 1) + s.targetDuration * 3), i > r
    );
  }
  beforeSeekableWindow_(e, i) {
    return !!(
      e.length &&
      e.start(0) > 0 &&
      i < e.start(0) - this.liveRangeSafeTimeDelta
    );
  }
  videoUnderflow_({ videoBuffered: e, audioBuffered: i, currentTime: s }) {
    if (!e) return;
    let n;
    if (e.length && i.length) {
      const r = Bs(e, s - 3),
        a = Bs(e, s),
        o = Bs(i, s);
      o.length &&
        !a.length &&
        r.length &&
        (n = { start: r.end(0), end: o.end(0) });
    } else va(e, s).length || (n = this.gapFromVideoUnderflow_(e, s));
    return n
      ? (this.logger_(
          `Encountered a gap in video from ${n.start} to ${n.end}. Seeking to current time ${s}`
        ),
        !0)
      : !1;
  }
  skipTheGap_(e) {
    const i = this.tech_.buffered(),
      s = this.tech_.currentTime(),
      n = va(i, s);
    this.resetTimeUpdate_(),
      !(n.length === 0 || s !== e) &&
        (this.logger_(
          "skipTheGap_:",
          "currentTime:",
          s,
          "scheduled currentTime:",
          e,
          "nextRange start:",
          n.start(0)
        ),
        this.tech_.setCurrentTime(n.start(0) + Xi),
        this.tech_.trigger({ type: "usage", name: "vhs-gap-skip" }));
  }
  gapFromVideoUnderflow_(e, i) {
    const s = vC(e);
    for (let n = 0; n < s.length; n++) {
      const r = s.start(n),
        a = s.end(n);
      if (i - r < 4 && i - r > 2) return { start: r, end: a };
    }
    return null;
  }
}
const C1 = {
    errorInterval: 30,
    getSource(t) {
      const i =
        this.tech({ IWillNotUseThisInPlugins: !0 }).currentSource_ ||
        this.currentSource();
      return t(i);
    },
  },
  k0 = function (t, e) {
    let i = 0,
      s = 0;
    const n = Pe(C1, e);
    t.ready(() => {
      t.trigger({ type: "usage", name: "vhs-error-reload-initialized" });
    });
    const r = function () {
        s && t.currentTime(s);
      },
      a = function (p) {
        p != null &&
          ((s = (t.duration() !== 1 / 0 && t.currentTime()) || 0),
          t.one("loadedmetadata", r),
          t.src(p),
          t.trigger({ type: "usage", name: "vhs-error-reload" }),
          t.play());
      },
      o = function () {
        if (Date.now() - i < n.errorInterval * 1e3) {
          t.trigger({ type: "usage", name: "vhs-error-reload-canceled" });
          return;
        }
        if (!n.getSource || typeof n.getSource != "function") {
          M.log.error(
            "ERROR: reloadSourceOnError - The option getSource must be a function!"
          );
          return;
        }
        return (i = Date.now()), n.getSource.call(t, a);
      },
      u = function () {
        t.off("loadedmetadata", r), t.off("error", o), t.off("dispose", u);
      },
      f = function (p) {
        u(), k0(t, p);
      };
    t.on("error", o), t.on("dispose", u), (t.reloadSourceOnError = f);
  },
  w1 = function (t) {
    k0(this, t);
  };
var I0 = "3.0.0",
  A1 = "6.2.0",
  k1 = "1.0.1",
  I1 = "6.0.0",
  O1 = "4.0.1";
const _t = {
  PlaylistLoader: $s,
  Playlist: Ct,
  utils: qC,
  STANDARD_PLAYLIST_SELECTOR: Cf,
  INITIAL_PLAYLIST_SELECTOR: Pw,
  lastBandwidthSelector: Cf,
  movingAverageBandwidthSelector: Iw,
  comparePlaylistBandwidth: Kc,
  comparePlaylistResolution: kw,
  xhr: n0(),
};
Object.keys(Ye).forEach((t) => {
  Object.defineProperty(_t, t, {
    get() {
      return (
        M.log.warn(
          `using Vhs.${t} is UNSAFE be sure you know what you are doing`
        ),
        Ye[t]
      );
    },
    set(e) {
      if (
        (M.log.warn(
          `using Vhs.${t} is UNSAFE be sure you know what you are doing`
        ),
        typeof e != "number" || e < 0)
      ) {
        M.log.warn(`value of Vhs.${t} must be greater than or equal to 0`);
        return;
      }
      Ye[t] = e;
    },
  });
});
const O0 = "videojs-vhs",
  P0 = function (t, e) {
    const i = e.media();
    let s = -1;
    for (let n = 0; n < t.length; n++)
      if (t[n].id === i.id) {
        s = n;
        break;
      }
    (t.selectedIndex_ = s), t.trigger({ selectedIndex: s, type: "change" });
  },
  P1 = function (t, e) {
    e.representations().forEach((i) => {
      t.addQualityLevel(i);
    }),
      P0(t, e.playlists);
  };
_t.canPlaySource = function () {
  return M.log.warn(
    "VHS is no longer a tech. Please remove it from your player's techOrder."
  );
};
const D1 = (t, e, i) => {
    if (!t) return t;
    let s = {};
    e &&
      e.attributes &&
      e.attributes.CODECS &&
      (s = oo(ni(e.attributes.CODECS))),
      i &&
        i.attributes &&
        i.attributes.CODECS &&
        (s.audio = i.attributes.CODECS);
    const n = mr(s.video),
      r = mr(s.audio),
      a = {};
    for (const o in t)
      (a[o] = {}),
        r && (a[o].audioContentType = r),
        n && (a[o].videoContentType = n),
        e.contentProtection &&
          e.contentProtection[o] &&
          e.contentProtection[o].pssh &&
          (a[o].pssh = e.contentProtection[o].pssh),
        typeof t[o] == "string" && (a[o].url = t[o]);
    return Pe(t, a);
  },
  L1 = (t, e) =>
    t.reduce((i, s) => {
      if (!s.contentProtection) return i;
      const n = e.reduce((r, a) => {
        const o = s.contentProtection[a];
        return o && o.pssh && (r[a] = { pssh: o.pssh }), r;
      }, {});
      return Object.keys(n).length && i.push(n), i;
    }, []),
  R1 = ({
    player: t,
    sourceKeySystems: e,
    audioMedia: i,
    mainPlaylists: s,
  }) => {
    if (!t.eme.initializeMediaKeys) return Promise.resolve();
    const n = i ? s.concat([i]) : s,
      r = L1(n, Object.keys(e)),
      a = [],
      o = [];
    return (
      r.forEach((u) => {
        o.push(
          new Promise((f, p) => {
            t.tech_.one("keysessioncreated", f);
          })
        ),
          a.push(
            new Promise((f, p) => {
              t.eme.initializeMediaKeys({ keySystems: u }, (_) => {
                if (_) {
                  p(_);
                  return;
                }
                f();
              });
            })
          );
      }),
      Promise.race([Promise.all(a), Promise.race(o)])
    );
  },
  N1 = ({ player: t, sourceKeySystems: e, media: i, audioMedia: s }) => {
    const n = D1(e, i, s);
    return n
      ? ((t.currentSource().keySystems = n),
        n && !t.eme
          ? (M.log.warn(
              "DRM encrypted source cannot be decrypted without a DRM plugin"
            ),
            !1)
          : !0)
      : !1;
  },
  D0 = () => {
    if (!C.localStorage) return null;
    const t = C.localStorage.getItem(O0);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return null;
    }
  },
  M1 = (t) => {
    if (!C.localStorage) return !1;
    let e = D0();
    e = e ? Pe(e, t) : t;
    try {
      C.localStorage.setItem(O0, JSON.stringify(e));
    } catch {
      return !1;
    }
    return e;
  },
  U1 = (t) =>
    t.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") === 0
      ? JSON.parse(t.substring(t.indexOf(",") + 1))
      : t;
_t.supportsNativeHls = (function () {
  if (!K || !K.createElement) return !1;
  const t = K.createElement("video");
  return M.getTech("Html5").isSupported()
    ? [
        "application/vnd.apple.mpegurl",
        "audio/mpegurl",
        "audio/x-mpegurl",
        "application/x-mpegurl",
        "video/x-mpegurl",
        "video/mpegurl",
        "application/mpegurl",
      ].some(function (i) {
        return /maybe|probably/i.test(t.canPlayType(i));
      })
    : !1;
})();
_t.supportsNativeDash = (function () {
  return !K || !K.createElement || !M.getTech("Html5").isSupported()
    ? !1
    : /maybe|probably/i.test(
        K.createElement("video").canPlayType("application/dash+xml")
      );
})();
_t.supportsTypeNatively = (t) =>
  t === "hls"
    ? _t.supportsNativeHls
    : t === "dash"
    ? _t.supportsNativeDash
    : !1;
_t.isSupported = function () {
  return M.log.warn(
    "VHS is no longer a tech. Please remove it from your player's techOrder."
  );
};
const F1 = M.getComponent("Component");
class L0 extends F1 {
  constructor(e, i, s) {
    if (
      (super(i, s.vhs),
      typeof s.initialBandwidth == "number" &&
        (this.options_.bandwidth = s.initialBandwidth),
      (this.logger_ = ti("VhsHandler")),
      i.options_ && i.options_.playerId)
    ) {
      const n = M.getPlayer(i.options_.playerId);
      this.player_ = n;
    }
    if (
      ((this.tech_ = i),
      (this.source_ = e),
      (this.stats = {}),
      (this.ignoreNextSeekingEvent_ = !1),
      this.setOptions_(),
      this.options_.overrideNative &&
        i.overrideNativeAudioTracks &&
        i.overrideNativeVideoTracks)
    )
      i.overrideNativeAudioTracks(!0), i.overrideNativeVideoTracks(!0);
    else if (
      this.options_.overrideNative &&
      (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks)
    )
      throw new Error(
        "Overriding native VHS requires emulated tracks. See https://git.io/vMpjB"
      );
    this.on(
      K,
      [
        "fullscreenchange",
        "webkitfullscreenchange",
        "mozfullscreenchange",
        "MSFullscreenChange",
      ],
      (n) => {
        const r =
          K.fullscreenElement ||
          K.webkitFullscreenElement ||
          K.mozFullScreenElement ||
          K.msFullscreenElement;
        r && r.contains(this.tech_.el())
          ? this.playlistController_.fastQualityChange_()
          : this.playlistController_.checkABR_();
      }
    ),
      this.on(this.tech_, "seeking", function () {
        if (this.ignoreNextSeekingEvent_) {
          this.ignoreNextSeekingEvent_ = !1;
          return;
        }
        this.setCurrentTime(this.tech_.currentTime());
      }),
      this.on(this.tech_, "error", function () {
        this.tech_.error() &&
          this.playlistController_ &&
          this.playlistController_.pauseLoading();
      }),
      this.on(this.tech_, "play", this.play);
  }
  setOptions_() {
    if (
      ((this.options_.withCredentials = this.options_.withCredentials || !1),
      (this.options_.limitRenditionByPlayerDimensions =
        this.options_.limitRenditionByPlayerDimensions !== !1),
      (this.options_.useDevicePixelRatio =
        this.options_.useDevicePixelRatio || !1),
      (this.options_.useBandwidthFromLocalStorage =
        typeof this.source_.useBandwidthFromLocalStorage < "u"
          ? this.source_.useBandwidthFromLocalStorage
          : this.options_.useBandwidthFromLocalStorage || !1),
      (this.options_.useNetworkInformationApi =
        this.options_.useNetworkInformationApi || !1),
      (this.options_.useDtsForTimestampOffset =
        this.options_.useDtsForTimestampOffset || !1),
      (this.options_.customTagParsers = this.options_.customTagParsers || []),
      (this.options_.customTagMappers = this.options_.customTagMappers || []),
      (this.options_.cacheEncryptionKeys =
        this.options_.cacheEncryptionKeys || !1),
      (this.options_.llhls = this.options_.llhls !== !1),
      (this.options_.bufferBasedABR = this.options_.bufferBasedABR || !1),
      typeof this.options_.playlistExclusionDuration != "number" &&
        (this.options_.playlistExclusionDuration = 5 * 60),
      typeof this.options_.bandwidth != "number" &&
        this.options_.useBandwidthFromLocalStorage)
    ) {
      const e = D0();
      e &&
        e.bandwidth &&
        ((this.options_.bandwidth = e.bandwidth),
        this.tech_.trigger({
          type: "usage",
          name: "vhs-bandwidth-from-local-storage",
        })),
        e &&
          e.throughput &&
          ((this.options_.throughput = e.throughput),
          this.tech_.trigger({
            type: "usage",
            name: "vhs-throughput-from-local-storage",
          }));
    }
    typeof this.options_.bandwidth != "number" &&
      (this.options_.bandwidth = Ye.INITIAL_BANDWIDTH),
      (this.options_.enableLowInitialPlaylist =
        this.options_.enableLowInitialPlaylist &&
        this.options_.bandwidth === Ye.INITIAL_BANDWIDTH),
      [
        "withCredentials",
        "useDevicePixelRatio",
        "limitRenditionByPlayerDimensions",
        "bandwidth",
        "customTagParsers",
        "customTagMappers",
        "cacheEncryptionKeys",
        "playlistSelector",
        "initialPlaylistSelector",
        "bufferBasedABR",
        "liveRangeSafeTimeDelta",
        "llhls",
        "useNetworkInformationApi",
        "useDtsForTimestampOffset",
        "exactManifestTimings",
        "leastPixelDiffSelector",
      ].forEach((e) => {
        typeof this.source_[e] < "u" && (this.options_[e] = this.source_[e]);
      }),
      (this.limitRenditionByPlayerDimensions =
        this.options_.limitRenditionByPlayerDimensions),
      (this.useDevicePixelRatio = this.options_.useDevicePixelRatio);
  }
  src(e, i) {
    if (!e) return;
    this.setOptions_(),
      (this.options_.src = U1(this.source_.src)),
      (this.options_.tech = this.tech_),
      (this.options_.externVhs = _t),
      (this.options_.sourceType = jp(i)),
      (this.options_.seekTo = (r) => {
        this.tech_.setCurrentTime(r);
      }),
      (this.playlistController_ = new T1(this.options_));
    const s = Pe({ liveRangeSafeTimeDelta: di }, this.options_, {
      seekable: () => this.seekable(),
      media: () => this.playlistController_.media(),
      playlistController: this.playlistController_,
    });
    (this.playbackWatcher_ = new E1(s)),
      this.playlistController_.on("error", () => {
        const r = M.players[this.tech_.options_.playerId];
        let a = this.playlistController_.error;
        typeof a == "object" && !a.code
          ? (a.code = 3)
          : typeof a == "string" && (a = { message: a, code: 3 }),
          r.error(a);
      });
    const n = this.options_.bufferBasedABR
      ? _t.movingAverageBandwidthSelector(0.55)
      : _t.STANDARD_PLAYLIST_SELECTOR;
    (this.playlistController_.selectPlaylist = this.selectPlaylist
      ? this.selectPlaylist.bind(this)
      : n.bind(this)),
      (this.playlistController_.selectInitialPlaylist =
        _t.INITIAL_PLAYLIST_SELECTOR.bind(this)),
      (this.playlists = this.playlistController_.mainPlaylistLoader_),
      (this.mediaSource = this.playlistController_.mediaSource),
      Object.defineProperties(this, {
        selectPlaylist: {
          get() {
            return this.playlistController_.selectPlaylist;
          },
          set(r) {
            this.playlistController_.selectPlaylist = r.bind(this);
          },
        },
        throughput: {
          get() {
            return this.playlistController_.mainSegmentLoader_.throughput.rate;
          },
          set(r) {
            (this.playlistController_.mainSegmentLoader_.throughput.rate = r),
              (this.playlistController_.mainSegmentLoader_.throughput.count = 1);
          },
        },
        bandwidth: {
          get() {
            let r = this.playlistController_.mainSegmentLoader_.bandwidth;
            const a =
                C.navigator.connection ||
                C.navigator.mozConnection ||
                C.navigator.webkitConnection,
              o = 1e7;
            if (this.options_.useNetworkInformationApi && a) {
              const u = a.downlink * 1e3 * 1e3;
              u >= o && r >= o ? (r = Math.max(r, u)) : (r = u);
            }
            return r;
          },
          set(r) {
            (this.playlistController_.mainSegmentLoader_.bandwidth = r),
              (this.playlistController_.mainSegmentLoader_.throughput = {
                rate: 0,
                count: 0,
              });
          },
        },
        systemBandwidth: {
          get() {
            const r = 1 / (this.bandwidth || 1);
            let a;
            return (
              this.throughput > 0 ? (a = 1 / this.throughput) : (a = 0),
              Math.floor(1 / (r + a))
            );
          },
          set() {
            M.log.error('The "systemBandwidth" property is read-only');
          },
        },
      }),
      this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth),
      this.options_.throughput && (this.throughput = this.options_.throughput),
      Object.defineProperties(this.stats, {
        bandwidth: { get: () => this.bandwidth || 0, enumerable: !0 },
        mediaRequests: {
          get: () => this.playlistController_.mediaRequests_() || 0,
          enumerable: !0,
        },
        mediaRequestsAborted: {
          get: () => this.playlistController_.mediaRequestsAborted_() || 0,
          enumerable: !0,
        },
        mediaRequestsTimedout: {
          get: () => this.playlistController_.mediaRequestsTimedout_() || 0,
          enumerable: !0,
        },
        mediaRequestsErrored: {
          get: () => this.playlistController_.mediaRequestsErrored_() || 0,
          enumerable: !0,
        },
        mediaTransferDuration: {
          get: () => this.playlistController_.mediaTransferDuration_() || 0,
          enumerable: !0,
        },
        mediaBytesTransferred: {
          get: () => this.playlistController_.mediaBytesTransferred_() || 0,
          enumerable: !0,
        },
        mediaSecondsLoaded: {
          get: () => this.playlistController_.mediaSecondsLoaded_() || 0,
          enumerable: !0,
        },
        mediaAppends: {
          get: () => this.playlistController_.mediaAppends_() || 0,
          enumerable: !0,
        },
        mainAppendsToLoadedData: {
          get: () => this.playlistController_.mainAppendsToLoadedData_() || 0,
          enumerable: !0,
        },
        audioAppendsToLoadedData: {
          get: () => this.playlistController_.audioAppendsToLoadedData_() || 0,
          enumerable: !0,
        },
        appendsToLoadedData: {
          get: () => this.playlistController_.appendsToLoadedData_() || 0,
          enumerable: !0,
        },
        timeToLoadedData: {
          get: () => this.playlistController_.timeToLoadedData_() || 0,
          enumerable: !0,
        },
        buffered: { get: () => ps(this.tech_.buffered()), enumerable: !0 },
        currentTime: { get: () => this.tech_.currentTime(), enumerable: !0 },
        currentSource: { get: () => this.tech_.currentSource_, enumerable: !0 },
        currentTech: { get: () => this.tech_.name_, enumerable: !0 },
        duration: { get: () => this.tech_.duration(), enumerable: !0 },
        main: { get: () => this.playlists.main, enumerable: !0 },
        playerDimensions: {
          get: () => this.tech_.currentDimensions(),
          enumerable: !0,
        },
        seekable: { get: () => ps(this.tech_.seekable()), enumerable: !0 },
        timestamp: { get: () => Date.now(), enumerable: !0 },
        videoPlaybackQuality: {
          get: () => this.tech_.getVideoPlaybackQuality(),
          enumerable: !0,
        },
      }),
      this.tech_.one(
        "canplay",
        this.playlistController_.setupFirstPlay.bind(this.playlistController_)
      ),
      this.tech_.on("bandwidthupdate", () => {
        this.options_.useBandwidthFromLocalStorage &&
          M1({
            bandwidth: this.bandwidth,
            throughput: Math.round(this.throughput),
          });
      }),
      this.playlistController_.on("selectedinitialmedia", () => {
        S1(this);
      }),
      this.playlistController_.sourceUpdater_.on("createdsourcebuffers", () => {
        this.setupEme_();
      }),
      this.on(this.playlistController_, "progress", function () {
        this.tech_.trigger("progress");
      }),
      this.on(this.playlistController_, "firstplay", function () {
        this.ignoreNextSeekingEvent_ = !0;
      }),
      this.setupQualityLevels_(),
      this.tech_.el() &&
        ((this.mediaSourceUrl_ = C.URL.createObjectURL(
          this.playlistController_.mediaSource
        )),
        this.tech_.src(this.mediaSourceUrl_));
  }
  createKeySessions_() {
    const e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
    this.logger_("waiting for EME key session creation"),
      R1({
        player: this.player_,
        sourceKeySystems: this.source_.keySystems,
        audioMedia: e && e.media(),
        mainPlaylists: this.playlists.main.playlists,
      })
        .then(() => {
          this.logger_("created EME key session"),
            this.playlistController_.sourceUpdater_.initializedEme();
        })
        .catch((i) => {
          this.logger_("error while creating EME key session", i),
            this.player_.error({
              message: "Failed to initialize media keys for EME",
              code: 3,
            });
        });
  }
  handleWaitingForKey_() {
    this.logger_(
      "waitingforkey fired, attempting to create any new key sessions"
    ),
      this.createKeySessions_();
  }
  setupEme_() {
    const e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader,
      i = N1({
        player: this.player_,
        sourceKeySystems: this.source_.keySystems,
        media: this.playlists.media(),
        audioMedia: e && e.media(),
      });
    if (
      (this.player_.tech_.on("keystatuschange", (s) => {
        if (s.status !== "output-restricted") return;
        const n = this.playlistController_.main();
        if (!n || !n.playlists) return;
        const r = [];
        n.playlists.forEach((a) => {
          a &&
            a.attributes &&
            a.attributes.RESOLUTION &&
            a.attributes.RESOLUTION.height >= 720 &&
            (!a.excludeUntil || a.excludeUntil < 1 / 0) &&
            ((a.excludeUntil = 1 / 0), r.push(a));
        }),
          r.length &&
            (M.log.warn(
              'DRM keystatus changed to "output-restricted." Removing the following HD playlists that will most likely fail to play and clearing the buffer. This may be due to HDCP restrictions on the stream and the capabilities of the current device.',
              ...r
            ),
            this.playlistController_.fastQualityChange_());
      }),
      (this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this)),
      this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_),
      M.browser.IE_VERSION === 11 || !i)
    ) {
      this.playlistController_.sourceUpdater_.initializedEme();
      return;
    }
    this.createKeySessions_();
  }
  setupQualityLevels_() {
    const e = M.players[this.tech_.options_.playerId];
    !e ||
      !e.qualityLevels ||
      this.qualityLevels_ ||
      ((this.qualityLevels_ = e.qualityLevels()),
      this.playlistController_.on("selectedinitialmedia", () => {
        P1(this.qualityLevels_, this);
      }),
      this.playlists.on("mediachange", () => {
        P0(this.qualityLevels_, this.playlists);
      }));
  }
  static version() {
    return {
      "@videojs/http-streaming": I0,
      "mux.js": A1,
      "mpd-parser": k1,
      "m3u8-parser": I1,
      "aes-decrypter": O1,
    };
  }
  version() {
    return this.constructor.version();
  }
  canChangeType() {
    return w0.canChangeType();
  }
  play() {
    this.playlistController_.play();
  }
  setCurrentTime(e) {
    this.playlistController_.setCurrentTime(e);
  }
  duration() {
    return this.playlistController_.duration();
  }
  seekable() {
    return this.playlistController_.seekable();
  }
  dispose() {
    this.playbackWatcher_ && this.playbackWatcher_.dispose(),
      this.playlistController_ && this.playlistController_.dispose(),
      this.qualityLevels_ && this.qualityLevels_.dispose(),
      this.tech_ && this.tech_.vhs && delete this.tech_.vhs,
      this.mediaSourceUrl_ &&
        C.URL.revokeObjectURL &&
        (C.URL.revokeObjectURL(this.mediaSourceUrl_),
        (this.mediaSourceUrl_ = null)),
      this.tech_ && this.tech_.off("waitingforkey", this.handleWaitingForKey_),
      super.dispose();
  }
  convertToProgramTime(e, i) {
    return JC({
      playlist: this.playlistController_.media(),
      time: e,
      callback: i,
    });
  }
  seekToProgramTime(e, i, s = !0, n = 2) {
    return u0({
      programTime: e,
      playlist: this.playlistController_.media(),
      retryCount: n,
      pauseAfterSeek: s,
      seekTo: this.options_.seekTo,
      tech: this.options_.tech,
      callback: i,
    });
  }
}
const Xc = {
    name: "videojs-http-streaming",
    VERSION: I0,
    canHandleSource(t, e = {}) {
      const i = Pe(M.options, e);
      return Xc.canPlayType(t.type, i);
    },
    handleSource(t, e, i = {}) {
      const s = Pe(M.options, i);
      return (
        (e.vhs = new L0(t, e, s)),
        (e.vhs.xhr = n0()),
        e.vhs.src(t.src, t.type),
        e.vhs
      );
    },
    canPlayType(t, e = {}) {
      const { vhs: { overrideNative: i = !M.browser.IS_ANY_SAFARI } = {} } = Pe(
          M.options,
          e
        ),
        s = jp(t);
      return s && (!_t.supportsTypeNatively(s) || i) ? "maybe" : "";
    },
  },
  B1 = () => ka("avc1.4d400d,mp4a.40.2");
B1() && M.getTech("Html5").registerSourceHandler(Xc, 0);
M.VhsHandler = L0;
M.VhsSourceHandler = Xc;
M.Vhs = _t;
M.use || M.registerComponent("Vhs", _t);
M.options.vhs = M.options.vhs || {};
(!M.getPlugin || !M.getPlugin("reloadSourceOnError")) &&
  M.registerPlugin("reloadSourceOnError", w1);
function Rl(t, e) {
  var i = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) &&
      e.indexOf(s) < 0 &&
      (i[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var n = 0;
    for (s = Object.getOwnPropertySymbols(t); n < s.length; n++)
      e.indexOf(s[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, s[n]) &&
        (i[s[n]] = t[s[n]]);
  }
  return i;
}
var $1 = {
    src: {
      type: String,
      onChange: function (t, e) {
        return t.src(e);
      },
    },
    width: {
      type: Number,
      onChange: function (t, e) {
        return t.width(e);
      },
      onEvent: function (t, e) {
        t.on(["playerresize", "resize"], function () {
          return e(t.width());
        });
      },
    },
    height: {
      type: Number,
      onChange: function (t, e) {
        return t.height(e);
      },
      onEvent: function (t, e) {
        t.on(["playerresize", "resize"], function () {
          return e(t.height());
        });
      },
    },
    preload: {
      type: String,
      onChange: function (t, e) {
        return t.preload(e);
      },
    },
    loop: {
      type: Boolean,
      onChange: function (t, e) {
        return t.loop(e);
      },
    },
    muted: {
      type: Boolean,
      onChange: function (t, e) {
        return t.muted(e);
      },
      onEvent: function (t, e) {
        return t.on("volumechange", function () {
          return e(t.muted());
        });
      },
    },
    poster: {
      type: String,
      onChange: function (t, e) {
        return t.poster(e);
      },
      onEvent: function (t, e) {
        return t.on("posterchange", function () {
          return e(t.poster());
        });
      },
    },
    controls: {
      type: Boolean,
      onChange: function (t, e) {
        return t.controls(e);
      },
      onEvent: function (t, e) {
        t.on("controlsenabled", function () {
          return e(!0);
        }),
          t.on("controlsdisabled", function () {
            return e(!1);
          });
      },
    },
    autoplay: {
      type: [Boolean, String],
      onChange: function (t, e) {
        return t.autoplay(e);
      },
    },
    crossorigin: {
      type: String,
      onChange: function (t, e) {
        return t.crossOrigin(e);
      },
    },
    crossOrigin: {
      type: String,
      onChange: function (t, e) {
        return t.crossOrigin(e);
      },
    },
    playsinline: {
      type: Boolean,
      onChange: function (t, e) {
        return t.playsinline(e);
      },
    },
    playsInline: {
      type: Boolean,
      onChange: function (t, e) {
        return t.playsinline(e);
      },
    },
  },
  j1 = {
    id: { type: String },
    sources: {
      type: Array,
      onChange: function (t, e) {
        return t.src(e);
      },
    },
    tracks: {
      type: Array,
      onChange: function (t, e) {
        for (
          var i = t.remoteTextTracks(),
            s = (i == null ? void 0 : i.length) || 0;
          s--;

        )
          t.removeRemoteTextTrack(i[s]);
        t.ready(function () {
          e.forEach(function (n) {
            return t.addRemoteTextTrack(n, !1);
          });
        });
      },
    },
    textTrackSettings: {
      type: Object,
      onChange: function (t, e) {
        return t.textTrackSettings.options(e);
      },
    },
    language: {
      type: String,
      onChange: function (t, e) {
        return t.language(e);
      },
      onEvent: function (t, e) {
        return t.on("languagechange", function () {
          return e(t.language());
        });
      },
    },
    languages: { type: Object },
    playbackRates: {
      type: Array,
      onChange: function (t, e) {
        return t.playbackRates(e ?? []);
      },
      onEvent: function (t, e) {
        t.on("playbackrateschange", function () {
          return e(t.playbackRates());
        });
      },
    },
    audioOnlyMode: {
      type: Boolean,
      onChange: function (t, e) {
        return t.audioOnlyMode(e);
      },
    },
    audioPosterMode: {
      type: Boolean,
      onChange: function (t, e) {
        return t.audioPosterMode(e);
      },
    },
    responsive: {
      type: Boolean,
      onChange: function (t, e) {
        return t.responsive(e);
      },
    },
    breakpoints: {
      type: Object,
      onChange: function (t, e) {
        return t.breakpoints(e);
      },
    },
    fluid: {
      type: Boolean,
      onChange: function (t, e) {
        return t.fluid(e);
      },
    },
    fill: {
      type: Boolean,
      onChange: function (t, e) {
        return t.fill(e);
      },
    },
    aspectRatio: {
      type: String,
      onChange: function (t, e) {
        return t.aspectRatio(e);
      },
    },
    fullscreen: { type: Object },
    liveui: { type: Boolean },
    liveTracker: { type: Object },
    disablePictureInPicture: {
      type: Boolean,
      onChange: function (t, e) {
        return t.disablePictureInPicture(e);
      },
    },
    notSupportedMessage: { type: String },
    normalizeAutoplay: { type: Boolean },
    noUITitleAttributes: { type: Boolean },
    preferFullWindow: { type: Boolean },
    suppressNotSupportedError: { type: Boolean },
    techCanOverridePoster: { type: Boolean },
    reportTouchActivity: { type: Boolean },
    techOrder: { type: Array },
    inactivityTimeout: { type: Number },
    userActions: { type: Object },
    plugins: { type: Object },
    restoreEl: { type: [Boolean, Object] },
    "vtt.js": { type: String },
  },
  H1 = {
    children: { type: [Array, Object] },
    controlBar: {
      type: Object,
      onChange: function (t, e) {
        return t.controlBar.options(e);
      },
    },
  },
  V1 = { html5: { type: Object } },
  W1 = {
    volume: {
      type: Number,
      onChange: function (t, e) {
        return t.volume(e);
      },
      onEvent: function (t, e) {
        return t.on("volumechange", function () {
          return e(t.volume());
        });
      },
    },
    playbackRate: {
      type: Number,
      onChange: function (t, e) {
        t.playbackRate(e), t.defaultPlaybackRate(e);
      },
      onEvent: function (t, e) {
        t.on("ratechange", function () {
          e(t.playbackRate());
        });
      },
    },
    options: { type: Object },
  },
  Sr = Object.assign(
    Object.assign(
      Object.assign(Object.assign(Object.assign({}, $1), j1), H1),
      V1
    ),
    W1
  ),
  Yc = Object.keys(Sr),
  R0 = Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          {
            loadstart: "onLoadStart",
            suspend: "onSuspend",
            abort: "onAbort",
            error: "onError",
            emptied: "onEmptied",
            stalled: "onStalled",
            loadedmetadata: "onLoadedMetadata",
            loadeddata: "onLoadedData",
            canplay: "onCanPlay",
            canplaythrough: "onCanPlayThrough",
            playing: "onPlaying",
            waiting: "onWaiting",
            seeking: "onSeeking",
            seeked: "onSeeked",
            ended: "onEnded",
            durationchange: "onDurationChange",
            timeupdate: "onTimeUpdate",
            progress: "onProgress",
            play: "onPlay",
            pause: "onpause",
            ratechange: "onRateChange",
            resize: "onResize",
            volumechange: "onVolumeChange",
          }
        ),
        {
          posterchange: "onPosterChange",
          languagechange: "onLanguageChange",
          fullscreenchange: "onFullscreenChange",
          playbackrateschange: "onPlaybackRatesChange",
          controlsdisabled: "onControlsDisabled",
          controlsenabled: "onControlsEnabled",
          enterFullWindow: "onEnterFullWindow",
          exitFullWindow: "onExitFullWindow",
          enterpictureinpicture: "onEnterPictureInPicture",
          leavepictureinpicture: "onLeavePictureInPicture",
          sourceset: "onSourceSet",
          texttrackchange: "onTextTrackChange",
          textdata: "onTextData",
          useractive: "onUserActive",
          userinactive: "onUserInactive",
          usingcustomcontrols: "onUsingCustomControls",
          usingnativecontrols: "onUsingNativeControls",
          dispose: "onDispose",
        }
      ),
      { beforepluginsetup: "onBeforePluginSetup", pluginsetup: "onPluginSetup" }
    ),
    {
      componentresize: "onComponentResize",
      playerresize: "onPlayerResize",
      ready: "onReady",
      tap: "onTap",
    }
  ),
  N0 = Object.keys(R0);
Object.values(R0);
var Nl = function (t) {
    var e,
      i = t == null ? void 0 : t.trim().replace(/\s+/g, " ");
    return i && (e = i.split(" ")) !== null && e !== void 0 ? e : [];
  },
  Ml = {
    src: {
      getter: function (t) {
        return t.src();
      },
    },
    currentSrc: {
      getter: function (t) {
        return t.currentSrc();
      },
    },
    currentSource: {
      getter: function (t) {
        return t.currentSource();
      },
    },
    width: {
      events: ["resize", "playerresize"],
      getter: function (t) {
        return t.width();
      },
    },
    height: {
      events: ["resize", "playerresize"],
      getter: function (t) {
        return t.height();
      },
    },
    currentWidth: {
      events: ["resize", "playerresize"],
      getter: function (t) {
        return t.currentWidth();
      },
    },
    currentHeight: {
      events: ["resize", "playerresize"],
      getter: function (t) {
        return t.currentHeight();
      },
    },
    videoWidth: {
      events: ["resize", "playerresize"],
      getter: function (t) {
        return t.videoWidth();
      },
    },
    videoHeight: {
      events: ["resize", "playerresize"],
      getter: function (t) {
        return t.videoHeight();
      },
    },
    controls: {
      events: ["controlsdisabled", "controlsenabled"],
      getter: function (t) {
        return t.controls();
      },
    },
    volume: {
      events: ["volumechange"],
      getter: function (t) {
        return t.volume();
      },
    },
    muted: {
      events: ["volumechange"],
      getter: function (t) {
        return t.muted();
      },
    },
    poster: {
      events: ["posterchange"],
      getter: function (t) {
        return t.poster();
      },
    },
    seeking: {
      events: ["seeking"],
      getter: function (t) {
        return t.seeking();
      },
    },
    paused: {
      events: ["pause", "play", "playing"],
      getter: function (t) {
        return t.paused();
      },
    },
    ended: {
      events: ["ended", "play"],
      getter: function (t) {
        return t.ended();
      },
    },
    currentTime: {
      events: ["timeupdate"],
      getter: function (t) {
        return t.currentTime();
      },
    },
    duration: {
      events: ["durationchange"],
      getter: function (t) {
        return t.duration();
      },
    },
    playbackRate: {
      events: ["ratechange"],
      getter: function (t) {
        return t.playbackRate();
      },
    },
    playbackRates: {
      events: ["playbackrateschange"],
      getter: function (t) {
        return t.playbackRates();
      },
    },
    isFullscreen: {
      events: ["fullscreenchange"],
      getter: function (t) {
        return t.isFullscreen();
      },
    },
    isInPictureInPicture: {
      events: ["enterpictureinpicture", "leavepictureinpicture"],
      getter: function (t) {
        return t.isInPictureInPicture();
      },
    },
    isLive: {
      getter: function (t) {
        var e;
        return (e = t.liveTracker) === null || e === void 0
          ? void 0
          : e.isLive();
      },
    },
    language: {
      events: ["languagechange"],
      getter: function (t) {
        return t.language();
      },
    },
    userActive: {
      events: ["useractive", "userinactive"],
      getter: function (t) {
        return t.userActive();
      },
    },
    readyState: {
      events: ["loadeddata"],
      getter: function (t) {
        return t.readyState();
      },
    },
    networkState: {
      events: ["loadeddata", "error"],
      getter: function (t) {
        return t.networkState();
      },
    },
    error: {
      events: ["loadeddata", "error"],
      getter: function (t) {
        return t.error();
      },
    },
    buffered: {
      events: ["progress"],
      getter: function (t) {
        return t.buffered();
      },
    },
    bufferedPercent: {
      events: ["progress"],
      getter: function (t) {
        return t.bufferedPercent();
      },
    },
    played: {
      events: ["timeupdate"],
      getter: function (t) {
        return t.played();
      },
    },
    seekable: {
      events: ["progress", "seeked"],
      getter: function (t) {
        return t.seekable();
      },
    },
    audioTracks: {
      getter: function (t) {
        var e;
        return (e = t.audioTracks) === null || e === void 0
          ? void 0
          : e.call(t);
      },
    },
    videoTracks: {
      getter: function (t) {
        var e;
        return (e = t.videoTracks) === null || e === void 0
          ? void 0
          : e.call(t);
      },
    },
    textTracks: {
      getter: function (t) {
        var e;
        return (e = t.textTracks) === null || e === void 0 ? void 0 : e.call(t);
      },
    },
  },
  M0 = Yc.filter(function (t) {
    return Boolean(Sr[t].onEvent);
  }),
  U0 = function (t) {
    return "update:" + t;
  },
  q1 = N0.concat(M0.map(U0)),
  z1 = Yc.reduce(function (t, e) {
    var i,
      s = Sr[e],
      n = Array.isArray(s.type) ? s.type : [s.type],
      r = Object.assign({}, s);
    return (
      n.includes(Boolean) && (r.default = void 0),
      Object.assign(Object.assign({}, t), (((i = {})[e] = r), i))
    );
  }, {}),
  G1 = Mv({
    name: "VueVideoPlayer",
    props: Object.assign(Object.assign({}, z1), {
      class: [String, Object, Array],
    }),
    emits: q1.concat(["mounted"], ["unmounted"]),
    setup: function (t, e) {
      var i = Ce(t),
        s = i.class,
        n = Rl(i, ["class"]),
        r = Sa(!1),
        a = Sa(null),
        o = Sa(null),
        u = Xl(function () {
          return o.value ? o.value.player : null;
        }),
        f = zn(null),
        p = Xl(function () {
          return f.value ? Mu(f.value) : null;
        });
      return (
        gp(function () {
          var _,
            v = (function (y) {
              var A,
                S = y.props,
                E = y.element,
                k = y.className,
                D = y.onEvent,
                R = S.options;
              R === void 0 && (R = {});
              var N = Rl(S, ["options"]),
                L = {};
              Object.keys(N).forEach(function (Y) {
                var oe = N[Y];
                oe !== void 0 && (L[Y] = oe);
              });
              var z = Object.assign(Object.assign({}, L), R),
                Z = z.volume,
                ae = z.playbackRate,
                ne = Rl(z, ["volume", "playbackRate"]),
                ve = Object.assign(Object.assign({}, ne), {
                  playsinline:
                    (A = ne.playsinline) !== null && A !== void 0
                      ? A
                      : ne.playsInline,
                }),
                de = M(E, ve, function () {
                  var Y = this;
                  N0.forEach(function (oe) {
                    Y.on(oe, function (Ne) {
                      D(oe, Ne);
                    });
                  }),
                    ne.src && !ne.sources && this.src(ne.src),
                    Z && Number.isFinite(Z) && this.volume(Z),
                    ae &&
                      Number.isFinite(ae) &&
                      (this.defaultPlaybackRate(ae),
                      setTimeout(function () {
                        Y.playbackRate(ae);
                      }, 0));
                });
              k &&
                Nl(k).map(function (Y) {
                  return de.addClass(Y);
                });
              var xe = function (Y) {
                var oe;
                (oe = de.options) === null ||
                  oe === void 0 ||
                  oe.call(de, Y ?? {});
              };
              return {
                player: de,
                dispose: function () {
                  return de.dispose();
                },
                updateClassNames: function (Y, oe) {
                  Nl(Y).map(function (Ne) {
                    return de.removeClass(Ne);
                  }),
                    Nl(oe).map(function (Ne) {
                      return de.addClass(Ne);
                    });
                },
                updateOptions: xe,
                updatePropOption: function (Y, oe) {
                  var Ne, re, ue;
                  xe((((Ne = {})[Y] = oe), Ne)),
                    (ue =
                      (re = Sr[Y]) === null || re === void 0
                        ? void 0
                        : re.onChange) === null ||
                      ue === void 0 ||
                      ue.call(re, de, oe);
                },
              };
            })({ element: a.value, props: n, onEvent: e.emit });
          (_ = { player: v.player, onEvent: e.emit }),
            M0.forEach(function (y) {
              var A, S;
              (S =
                (A = Sr[y]) === null || A === void 0 ? void 0 : A.onEvent) ===
                null ||
                S === void 0 ||
                S.call(A, _.player, function (E) {
                  _.onEvent(U0(y), E);
                });
            }),
            zs(
              function () {
                return t.class;
              },
              function (y, A) {
                var S = js(A),
                  E = js(y);
                v.updateClassNames(S, E);
              },
              { immediate: !0 }
            ),
            zs(
              function () {
                return t.options;
              },
              function (y) {
                return v.updateOptions(y ?? {});
              },
              { deep: !0 }
            ),
            Yc.filter(function (y) {
              return y !== "options";
            }).forEach(function (y) {
              zs(
                function () {
                  return t[y];
                },
                function (A) {
                  return v.updatePropOption(y, A);
                },
                { deep: !0 }
              );
            }),
            (function (y, A) {
              var S = Object.keys(Ml),
                E = S.reduce(
                  function (D, R) {
                    var N;
                    return Object.assign(
                      Object.assign({}, D),
                      (((N = {})[R] = Ml[R].getter(y)), N)
                    );
                  },
                  { playing: !1, waiting: !1 }
                ),
                k = function (D, R) {
                  (E[D] = R), A.onUpdate(D, R, Object.assign({}, E));
                };
              y.on(["pause", "ended"], function () {
                k("playing", !1);
              }),
                y.on(["play", "playing"], function () {
                  k("playing", !0);
                }),
                y.on("waiting", function () {
                  k("waiting", !0);
                  var D = y.currentTime(),
                    R = function () {
                      D !== y.currentTime() &&
                        (k("waiting", !1), y.off("timeupdate", R));
                    };
                  y.on("timeupdate", R);
                }),
                S.forEach(function (D) {
                  var R,
                    N = Ml[D];
                  y.on(
                    ["loadstart", "loadedmetadata"].concat(
                      (R = N.events) !== null && R !== void 0 ? R : []
                    ),
                    function () {
                      k(D, N.getter(y));
                    }
                  );
                }),
                A.onInit(Object.assign({}, E));
            })(v.player, {
              onInit: function (y) {
                f.value = y;
              },
              onUpdate: function (y, A) {
                f.value && (f.value[y] = A);
              },
            }),
            (o.value = v),
            (r.value = !0),
            e.emit("mounted", {
              video: a.value,
              player: u.value,
              state: p.value,
            });
        }),
        _p(function () {
          o.value &&
            (o.value.dispose(),
            (o.value = null),
            (f.value = null),
            e.emit("unmounted"));
        }),
        function () {
          var _, v;
          return nh("div", { "data-vjs-player": "", class: js(s) }, [
            nh("video", { class: ["video-js", "v-video-player"], ref: a }),
            r.value &&
              ((v = (_ = e.slots).default) === null || v === void 0
                ? void 0
                : v.call(_, {
                    video: a.value,
                    player: u.value,
                    state: p.value,
                  })),
          ]);
        }
      );
    },
  }),
  K1 = G1;
const X1 = "/assets/128-2237767f.png",
  Y1 = (t, e) => {
    const i = t.__vccOpts || t;
    for (const [s, n] of e) i[s] = n;
    return i;
  },
  Q1 = {},
  J1 = { class: "relative bg-white" },
  Z1 = Vu(
    // '<div class="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true"></div><div class="relative z-20"><div class="mx-auto flex flex-row max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8"><div><a href="/" class="flex"><img class="h-8 w-auto sm:h-10" src="' +
    //   X1 +
    //   '" alt=""></a></div><div class="hidden md:flex md:flex-1 md:items-center md:justify-between"><nav class="flex space-x-10"><a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Extension</a></nav><div class="hidden flex items-center md:ml-12"><a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a><a href="#" class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a></div></div></div></div>',
    // 2
  ),
  eA = [Z1];
function tA(t, e) {
  return Ap(), kp("div", J1, eA);
}
const iA = Y1(Q1, [["render", tA]]),
  sA = { class: "max-w-7xl mx-auto p-6 box-border bg-white shadow-sm mt-5" },
  nA = { class: "flex justify-center items-center" },
  rA = { class: "max-w-7xl mx-auto p-6 box-border bg-white shadow-sm mt-5" },
  aA = Xe(
    "label",
    {
      for: "search",
      class: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
    },
    "Search",
    -1
  ),
  oA = { class: "relative mb-5" },
  lA = Vu(
    '<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></div>',
    1
  ),
  uA = ["value"],
  cA = { class: "text-gray-400 py-1 text-sm" },
  dA = ["href"],
  hA = { class: "text-gray-400 py-1 text-sm" },
  fA = ["href"],
  pA = { id: "footer", class: "mt-16" },
  mA = { class: "bg-white" },
  gA = {
    class:
      "mx-auto max-w-7xl py-5 px-6 md:flex md:items-center md:justify-between lg:px-8",
  },
  _A = Vu(
    '<div class="flex justify-center space-x-6 md:order-2"><a href="mailto:contact@m3u8.dev" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Email</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a></div>',
    1
  ),
  yA = { class: "mt-8 md:order-1 md:mt-0" },
  vA = { class: "text-center text-xs leading-5 text-gray-500" },
  TA = {
    __name: "App",
    setup(t) {
      const i = `${new URL(window.location.href).origin}?url=`,
        s = new Date().getFullYear(),
        n = (E) => `${i}${E}`,
        r = (E) => {
          const k = new URL(window.location.href);
          return new URLSearchParams(k.search).get(E);
        },
        a = (E) =>
          E.endsWith(".m3u8") || E.includes(".m3u8")
            ? { src: E, type: "application/x-mpegurl" }
            : { src: E, type: "video/mp4" },
        o = zn(!0),
        u = zn();
      u.value = r("url") ?? "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
      const f = zn(),
        p = zn();
      (p.value = a(u.value)), (f.value = u.value);
      const _ = Sa(),
        v = (E) => {
          _.value = E.player;
        },
        y = () => {
          var k;
          const { vhs: E } = (k = _.value) == null ? void 0 : k.tech();
        },
        A = (E) => {
          const k = E.target.value;
          k && (f.value = k);
        },
        S = () => {
          window.location.href = `${i}${f.value}`;
        };
      return (E, k) => (
        Ap(),
        kp(
          ri,
          null,
          [
            wt(iA),
            Xe("div", sA, [
              Xe("div", nA, [
                wt(
                  jl(K1),
                  {
                    class: "video-player",
                    crossorigin: "anonymous",
                    playsinline: "",
                    controls: "",
                    autoplay: o.value,
                    sources: [p.value],
                    volume: 1,
                    width: 1200,
                    height: 540,
                    "playback-rates": [0.5, 1, 1.25, 1.5, 1.75, 2],
                    "control-bar": {
                      progressControl: !0,
                      currentTimeDisplay: !0,
                      remainingTimeDisplay: !0,
                      volumePanel: !0,
                    },
                    html5: {
                      vhs: {
                        overrideNative: !E.isSafari,
                        maxPlaylistRetries: 1 / 0,
                      },
                      nativeAudioTracks: !1,
                      nativeVideoTracks: !1,
                    },
                    onMounted: v,
                    onReady: y,
                  },
                  null,
                  8,
                  ["autoplay", "sources", "playback-rates", "html5"]
                ),
              ]),
            ]),
      
       
          ],
          64
        )
      );
    },
  };
const bA = GT(TA);
bA.mount("#app");
