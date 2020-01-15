"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * stencilredux: Core, es5
 * Built with http://stenciljs.com
 */
function n(n, t) { for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
    m.push(arguments[f]); for (; m.length > 0;) {
    var c = m.pop();
    if (c && void 0 !== c.pop)
        for (f = c.length; f--;)
            m.push(c[f]);
    else
        "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (f in t.class)
            t.class[f] && m.push(f);
        t.class = m.join(" "), m.length = 0;
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
} return "function" == typeof n ? n(t, i || [], b) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, t: void 0, i: !1 }; }
exports.h = n;
function t(n, t, e) { void 0 === e && (e = {}); var r = Array.isArray(t) ? t : [t], i = n.document, u = e.hydratedCssClass || "hydrated", f = e.exclude; f && (r = r.filter(function (n) { return -1 === f.indexOf(n[0]); })); var c = r.map(function (n) { return n[0]; }); if (c.length > 0) {
    var s = i.createElement("style");
    s.innerHTML = c.join() + "{visibility:hidden}." + u + "{visibility:inherit}", s.setAttribute("data-styles", ""), i.head.insertBefore(s, i.head.firstChild);
} var l = e.namespace || "stencilredux"; return _ || (_ = !0, function v(n, t, e) { (n["s-apps"] = n["s-apps"] || []).push(t), e.componentOnReady || (e.componentOnReady = function t() { function e(t) { if (r.nodeName.indexOf("-") > 0) {
    for (var e = n["s-apps"], i = 0, o = 0; o < e.length; o++)
        if (n[e[o]].componentOnReady) {
            if (n[e[o]].componentOnReady(r, t))
                return;
            i++;
        }
    if (i < e.length)
        return void (n["s-cr"] = n["s-cr"] || []).push([r, t]);
} t(null); } var r = this; return n.Promise ? new n.Promise(e) : { then: e }; }); }(n, l, n.HTMLElement.prototype)), applyPolyfills(n).then(function () { function t() { r.forEach(function (t) { var e; !function r(n) { return /\{\s*\[native code\]\s*\}/.test("" + n); }(n.customElements.define) ? (e = function (t) { return n.HTMLElement.call(this, t); }).prototype = Object.create(n.HTMLElement.prototype, { constructor: { value: e, configurable: !0 } }) : e = new Function("w", "return class extends w.HTMLElement{}")(n), S[l].o(function i(n) { var t = M(n), e = t.u, r = a(n[0]); return t.u = function (n) { var t = n.mode, i = n.scoped; return function o(n, t, e) { return Promise.resolve().then(function () { return require("./build/" + n + (t ? ".sc" : "") + ".entry.js"); }).then(function (n) { return n[e]; }); }("string" == typeof e ? e : e[t], i, r); }, t; }(t), e); }); } if (!S[l]) {
    var f = {}, c = e.resourcesUrl || "./";
    stencilredux_global_js_1.default(l, f, n, i, c, u), S[l] = C(l, f, n, i, c, u, r);
} if (window.customStyleShim)
    return S[l].s = window.customStyleShim, S[l].s.initShim().then(t); t(); }); }
exports.defineCustomElement = t;
this && this.l;
var e = this && this.v || function (n, t, e, r) { return new (e || (e = Promise))(function (i, o) { function u(n) { try {
    c(r.next(n));
}
catch (n) {
    o(n);
} } function f(n) { try {
    c(r.throw(n));
}
catch (n) {
    o(n);
} } function c(n) { n.done ? i(n.value) : new e(function (t) { t(n.value); }).then(u, f); } c((r = r.apply(n, t || [])).next()); }); }, r = this && this.p || function (n, t) { function e(e) { return function (u) { return function c(e) { if (r)
    throw new TypeError("Generator is already executing."); for (; f;)
    try {
        if (r = 1, i && (o = 2 & e[0] ? i.return : e[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, e[1])).done)
            return o;
        switch (i = 0, o && (e = [2 & e[0], o.value]), e[0]) {
            case 0:
            case 1:
                o = e;
                break;
            case 4: return f.label++, { value: e[1], done: !1 };
            case 5:
                f.label++, i = e[1], e = [0];
                continue;
            case 7:
                e = f.m.pop(), f.M.pop();
                continue;
            default:
                if (!(o = (o = f.M).length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    f = 0;
                    continue;
                }
                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                    f.label = e[1];
                    break;
                }
                if (6 === e[0] && f.label < o[1]) {
                    f.label = o[1], o = e;
                    break;
                }
                if (o && f.label < o[2]) {
                    f.label = o[2], f.m.push(e);
                    break;
                }
                o[2] && f.m.pop(), f.M.pop();
                continue;
        }
        e = t.call(n, f);
    }
    catch (n) {
        e = [6, n], i = 0;
    }
    finally {
        r = o = 0;
    } if (5 & e[0])
    throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 }; }([e, u]); }; } var r, i, o, u, f = { label: 0, g: function () { if (1 & o[0])
        throw o[1]; return o[1]; }, M: [], m: [] }; return u = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (u[Symbol.iterator] = function () { return this; }), u; }, i = this;
var stencilredux_global_js_1 = require("./stencilredux.global.js");
function applyPolyfills(n) { n.k = function () { function t() { var n = setTimeout; return function () { return n(e, 1); }; } function e() { for (var n = 0; n < m; n += 2)
    (0, S[n])(S[n + 1]), S[n] = void 0, S[n + 1] = void 0; m = 0; } function r(n, t) { var e = this, r = new this.constructor(o); void 0 === r[x] && h(r); var i = e.j; if (i) {
    var u = arguments[i - 1];
    g(function () { return d(i, r, u, e.A); });
}
else
    v(e, r, n, t); return r; } function i(n) { if (n && "object" == typeof n && n.constructor === this)
    return n; var t = new this(o); return c(t, n), t; } function o() { } function u(n) { try {
    return n.then;
}
catch (n) {
    return T.error = n, T;
} } function f(n, t, e) { t.constructor === n.constructor && e === r && t.constructor.resolve === i ? function (n, t) { t.j === P ? s(n, t.A) : t.j === O ? l(n, t.A) : v(t, void 0, function (t) { return c(n, t); }, function (t) { return l(n, t); }); }(n, t) : e === T ? (l(n, T.error), T.error = null) : void 0 === e ? s(n, t) : "function" == typeof e ? function (n, t, e) { g(function (n) { var r = !1, i = function (n, t, e, r) { try {
    n.call(t, e, r);
}
catch (n) {
    return n;
} }(e, t, function (e) { r || (r = !0, t !== e ? c(n, e) : s(n, e)); }, function (t) { r || (r = !0, l(n, t)); }, n.C); !r && i && (r = !0, l(n, i)); }, n); }(n, t, e) : s(n, t); } function c(n, t) { if (n === t)
    l(n, new TypeError("cannot resolve promise w/ itself"));
else {
    var e = typeof t;
    null === t || "object" !== e && "function" !== e ? s(n, t) : f(n, t, u(t));
} } function a(n) { n.S && n.S(n.A), p(n); } function s(n, t) { n.j === W && (n.A = t, n.j = P, 0 !== n._.length && g(p, n)); } function l(n, t) { n.j === W && (n.j = O, n.A = t, g(a, n)); } function v(n, t, e, r) { var i = n._, o = i.length; n.S = null, i[o] = t, i[o + P] = e, i[o + O] = r, 0 === o && n.j && g(p, n); } function p(n) { var t = n._, e = n.j; if (0 !== t.length) {
    for (var r, i, o = n.A, u = 0; u < t.length; u += 3)
        r = t[u], i = t[u + e], r ? d(e, r, i, o) : i(o);
    n._.length = 0;
} } function d(n, t, e, r) { var i = "function" == typeof e, o = void 0, u = void 0, f = void 0, a = void 0; if (i) {
    try {
        o = e(r);
    }
    catch (n) {
        T.error = n, o = T;
    }
    if (o === T ? (a = !0, u = o.error, o.error = null) : f = !0, t === o)
        return void l(t, new TypeError("Cannot return same promise"));
}
else
    o = r, f = !0; t.j === W && (i && f ? c(t, o) : a ? l(t, u) : n === P ? s(t, o) : n === O && l(t, o)); } function h(n) { n[x] = N++, n.j = void 0, n.A = void 0, n._ = []; } var y, w = Array.isArray ? Array.isArray : function (n) { return "[object Array]" === Object.prototype.toString.call(n); }, m = 0, b = void 0, M = void 0, g = function (n, t) { S[m] = n, S[m + 1] = t, 2 === (m += 2) && (M ? M(e) : _()); }, k = (y = void 0 !== n ? n : void 0) || {}, $ = k.MutationObserver || k.WebKitMutationObserver; k = "undefined" == typeof self; var E, j, A, C = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, S = Array(1e3), _ = void 0; _ = $ ? (E = 0, j = new $(e), A = document.createTextNode(""), j.observe(A, { characterData: !0 }), function () { A.data = E = ++E % 2; }) : C ? function () { var n = new MessageChannel; return n.port1.onmessage = e, function () { return n.port2.postMessage(0); }; }() : void 0 === y && "function" == typeof require ? function () { try {
    var n = Function("return this")().require("vertx");
    return void 0 !== (b = n.W || n.P) ? function () { b(e); } : t();
}
catch (n) {
    return t();
} }() : t(); var x = Math.random().toString(36).substring(2), W = void 0, P = 1, O = 2, T = { error: null }, N = 0, R = function () { function n(n, t) { this.O = n, this.T = new n(o), this.T[x] || h(this.T), w(t) ? (this.N = this.length = t.length, this.A = Array(this.length), 0 === this.length ? s(this.T, this.A) : (this.length = this.length || 0, this.R(t), 0 === this.N && s(this.T, this.A))) : l(this.T, Error("Array Methods must be provided an Array")); } return n.prototype.R = function (n) { for (var t = 0; this.j === W && t < n.length; t++)
    this.L(n[t], t); }, n.prototype.L = function (n, t) { var e = this.O, c = e.resolve; c === i ? (c = u(n)) === r && n.j !== W ? this.D(n.j, t, n.A) : "function" != typeof c ? (this.N--, this.A[t] = n) : e === L ? (f(e = new e(o), n, c), this.F(e, t)) : this.F(new e(function (t) { return t(n); }), t) : this.F(c(n), t); }, n.prototype.D = function (n, t, e) { var r = this.T; r.j === W && (this.N--, n === O ? l(r, e) : this.A[t] = e), 0 === this.N && s(r, this.A); }, n.prototype.F = function (n, t) { var e = this; v(n, void 0, function (n) { return e.D(P, t, n); }, function (n) { return e.D(O, t, n); }); }, n; }(), L = function () { function n(t) { if (this[x] = N++, this.A = this.j = void 0, this._ = [], o !== t) {
    if ("function" != typeof t)
        throw new TypeError("Must pass a resolver fn as 1st arg");
    if (!(this instanceof n))
        throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");
    !function (n, t) { try {
        t(function (t) { c(n, t); }, function (t) { l(n, t); });
    }
    catch (t) {
        l(n, t);
    } }(this, t);
} } return n.prototype.catch = function (n) { return this.then(null, n); }, n.prototype.finally = function (n) { var t = this.constructor; return this.then(function (e) { return t.resolve(n()).then(function () { return e; }); }, function (e) { return t.resolve(n()).then(function () { throw e; }); }); }, n; }(); return L.prototype.then = r, L.all = function (n) { return new R(this, n).T; }, L.race = function (n) { var t = this; return w(n) ? new t(function (e, r) { for (var i = n.length, o = 0; o < i; o++)
    t.resolve(n[o]).then(e, r); }) : new t(function (n, t) { return t(new TypeError("Must pass array to race")); }); }, L.resolve = i, L.reject = function (n) { var t = new this(o); return l(t, n), t; }, L.H = function (n) { M = n; }, L.q = function (n) { g = n; }, L.U = g, L.B = function () { var n = void 0; if ("undefined" != typeof global)
    n = global;
else if ("undefined" != typeof self)
    n = self;
else
    try {
        n = Function("return this")();
    }
    catch (n) {
        throw Error("polyfill failed");
    } var t = n.Promise; if (t) {
    var e = null;
    try {
        e = Object.prototype.toString.call(t.resolve());
    }
    catch (n) { }
    if ("[object Promise]" === e && !t.cast)
        return;
} n.Promise = L; }, L.Promise = L, L.B(), L; }(); var t = []; return n.customElements && (!n.Element || n.Element.prototype.closest && n.Element.prototype.matches && n.Element.prototype.remove) || t.push(Promise.resolve().then(function () { return require("./polyfills/dom.js"); })), "function" == typeof Object.assign && Object.entries || t.push(Promise.resolve().then(function () { return require("./polyfills/object.js"); })), Array.prototype.find && Array.prototype.includes || t.push(Promise.resolve().then(function () { return require("./polyfills/array.js"); })), String.prototype.startsWith && String.prototype.endsWith || t.push(Promise.resolve().then(function () { return require("./polyfills/string.js"); })), n.fetch || t.push(Promise.resolve().then(function () { return require("./polyfills/fetch.js"); })), "undefined" != typeof WeakMap && n.CSS && n.CSS.supports && n.CSS.supports("color", "var(--c)") || t.push(Promise.resolve().then(function () { return require("./polyfills/css-shim.js"); })), function e() { try {
    var n = new URL("b", "http://a");
    return n.pathname = "c%20d", "http://a/c%20d" === n.href && n.searchParams;
}
catch (n) {
    return !1;
} } || t.push(Promise.resolve().then(function () { return require("./polyfills/url.js"); })), Promise.all(t).then(function (t) { t.forEach(function (t) { try {
    t.applyPolyfill(n, n.document);
}
catch (n) {
    console.error(n);
} }); }); }
var u = {}, f = function (n) { return null != n; }, c = function (n) { return n.toLowerCase(); }, a = function (n) { return c(n).split("-").map(function (n) { return n.charAt(0).toUpperCase() + n.slice(1); }).join(""); }, s = "http://www.w3.org/1999/xlink", l = function (n, t, e, r, i, o) { if ("class" !== e || o)
    if ("style" === e)
        for (var u in i)
            r && i[u] === r[u] || (/-/.test(u) ? t.style.setProperty(u, i[u]) : t.style[u] = i[u]);
    else
        "o" !== e[0] || "n" !== e[1] || !/[A-Z]/.test(e[2]) || e in t ? "list" !== e && "type" !== e && !o && (e in t || -1 !== ["object", "function"].indexOf(typeof i) && null !== i) ? (n.I(t), "ref" !== e && (v(t, e, null == i ? "" : i), null != i && !1 !== i || n.Y.G(t, e))) : null != i && "key" !== e ? function (n, t, e, r, i) { void 0 === r && (r = "boolean" == typeof e), i = t !== (t = t.replace(/^xlink\:?/, "")), null == e || r && (!e || "false" === e) ? i ? n.removeAttributeNS(s, c(t)) : n.removeAttribute(t) : "function" != typeof e && (e = r ? "" : e.toString(), i ? n.setAttributeNS(s, c(t), e) : n.setAttribute(t, e)); }(t, e, i) : (o || n.Y.Z(t, e) && (null == i || !1 === i)) && n.Y.G(t, e) : (e = c(e) in t ? c(e.substring(2)) : c(e[2]) + e.substring(3), i && i !== r && n.Y.J(t, e, i, 0));
else
    t.className = i; }, v = function (n, t, e) { try {
    n[t] = e;
}
catch (n) { } }, p = function (n, t, e, r, i) { var o = 11 === e.t.nodeType && e.t.host ? e.t.host : e.t, f = t && t.vattrs || u, c = e.vattrs || u; for (i in c)
    i in f && c[i] === ("value" === i || "checked" === i ? o[i] : f[i]) || l(n, o, i, f[i], c[i], r, e.i); }, d = !1, h = function (n, t) { var e, r, i, o, u, c, a, s = function (i, v, h, y, w, m, b, M, g) { if (M = v.vchildren[h], e || (o = !0, "slot" === M.vtag && (r && t.K(y, r + "-s"), M.vchildren ? M.V = !0 : M.X = !0)), f(M.vtext))
    M.t = t.nn(M.vtext);
else if (M.X)
    M.t = t.nn("");
else {
    if (m = M.t = d || "svg" === M.vtag ? t.tn("http://www.w3.org/2000/svg", M.vtag) : t.en(M.V ? "slot-fb" : M.vtag), n.rn(m) && n.in.delete(a), d = "svg" === M.vtag || "foreignObject" !== M.vtag && d, p(n, null, M, d), f(r) && m["s-si"] !== r && t.K(m, m["s-si"] = r), M.vchildren)
        for (w = 0; w < M.vchildren.length; ++w)
            (b = s(i, M, w, m)) && t.on(m, b);
    "svg" === M.vtag && (d = !1);
} return M.t["s-hn"] = c, (M.V || M.X) && (M.t["s-sr"] = !0, M.t["s-cr"] = u, M.t["s-sn"] = M.vname || "", (g = i && i.vchildren && i.vchildren[h]) && g.vtag === M.vtag && i.t && l(i.t)), M.t; }, l = function (e, r, i, u) { n.un = !0; var f = t.fn(e); for (i = f.length - 1; i >= 0; i--)
    (u = f[i])["s-hn"] !== c && u["s-ol"] && (t.cn(u), t.an(h(u), u, v(u)), t.cn(u["s-ol"]), u["s-ol"] = null, o = !0), r && l(u, r); n.un = !1; }, v = function (n) { return n && n["s-ol"] ? n["s-ol"] : n; }, h = function (n) { return t.sn(n["s-ol"] ? n["s-ol"] : n); }, y = function (n, e, r, i, o, u, f, c) { for (i = 0, o = (r = t.fn(n)).length; i < o; i++)
    if (e = r[i], 1 === t.ln(e)) {
        if (e["s-sr"])
            for (f = e["s-sn"], e.hidden = !1, u = 0; u < o; u++)
                if (r[u]["s-hn"] !== e["s-hn"])
                    if (c = t.ln(r[u]), "" !== f) {
                        if (1 === c && f === t.vn(r[u], "slot")) {
                            e.hidden = !0;
                            break;
                        }
                    }
                    else if (1 === c || 3 === c && "" !== t.pn(r[u]).trim()) {
                        e.hidden = !0;
                        break;
                    }
        y(e);
    } }, w = [], m = function (n, e, r, o, u, f, c, a, s, l) { for (u = 0, f = (e = t.fn(n)).length; u < f; u++) {
    if ((r = e[u])["s-sr"] && (o = r["s-cr"]))
        for (a = t.fn(t.sn(o)), s = r["s-sn"], c = a.length - 1; c >= 0; c--)
            (o = a[c])["s-cn"] || o["s-nr"] || o["s-hn"] === r["s-hn"] || ((3 === (l = t.ln(o)) || 8 === l) && "" === s || 1 === l && null === t.vn(o, "slot") && "" === s || 1 === l && t.vn(o, "slot") === s) && (w.some(function (n) { return n.dn === o; }) || (i = !0, o["s-sn"] = s, w.push({ hn: r, dn: o })));
    1 === t.ln(r) && m(r);
} }; return function (l, h, b, M, g, k, $, E, j, A, C, S) { if (a = l, c = t.yn(a), u = a["s-cr"], e = M, r = a["s-sc"], o = i = !1, function (e, r, i) { var o = r.t = e.t, u = (e.vchildren, r.vchildren); d = r.t && f(t.wn(r.t)) && void 0 !== r.t.ownerSVGElement, d = "svg" === r.vtag || "foreignObject" !== r.vtag && d, f(r.vtext) ? (i = o["s-cr"]) ? t.mn(t.sn(i), r.vtext) : e.vtext !== r.vtext && t.mn(o, r.vtext) : ("slot" !== r.vtag && p(n, e, r, d), f(u) && function (n, e, r, i, o, u, a, l) { var p = n["s-cr"]; for ((a = p && t.sn(p) || n).shadowRoot && t.yn(a) === c && (a = a.shadowRoot); o <= u; ++o)
    i[o] && (l = f(i[o].vtext) ? t.nn(i[o].vtext) : s(null, r, o, n)) && (i[o].t = l, t.an(a, l, v(null))); }(o, 0, r, u, 0, u.length - 1)), d && "svg" === r.vtag && (d = !1); }(h, b), o) {
    for (m(b.t), $ = 0; $ < w.length; $++)
        (E = w[$]).dn["s-ol"] || ((j = t.nn(""))["s-nr"] = E.dn, t.an(t.sn(E.dn), E.dn["s-ol"] = j, E.dn));
    for (n.un = !0, $ = 0; $ < w.length; $++) {
        for (E = w[$], C = t.sn(E.hn), S = t.bn(E.hn), j = E.dn["s-ol"]; j = t.Mn(j);)
            if ((A = j["s-nr"]) && A && A["s-sn"] === E.dn["s-sn"] && C === t.sn(A) && (A = t.bn(A)) && A && !A["s-nr"]) {
                S = A;
                break;
            }
        (!S && C !== t.sn(E.dn) || t.bn(E.dn) !== S) && E.dn !== S && (t.cn(E.dn), t.an(C, E.dn, S));
    }
    n.un = !1;
} return i && y(b.t), w.length = 0, b; }; }, y = function (n, t) { n && (n.vattrs && n.vattrs.ref && n.vattrs.ref(t ? null : n.t), n.vchildren && n.vchildren.forEach(function (n) { y(n, t); })); }, w = function (n, t) { var e = Promise.resolve(), r = function (n) { e.then(function () { try {
    n(t.performance.now());
}
catch (n) {
    console.error(n);
} }); }; return { tick: r, read: r, write: r }; }, m = [], b = { forEach: function (n, t) { return n.forEach(t); }, map: function (n, t) { return n.map(t); } }, M = function (n) { var t = n[0], e = n[1], r = (n[3], n[4]), i = n[5]; return { gn: t, u: e, kn: Object.assign({}, { color: { $n: "color" } }), En: r, jn: i ? i.map(g) : void 0 }; }, g = function (n) { return { An: n[0], Cn: n[1], Sn: !!n[2], _n: !!n[3], xn: !!n[4] }; }, k = function (n, t, e) { n.Wn.add(t), n.Pn.has(t) || (n.Pn.set(t, !0), n.On ? n.queue.write(function () { return $(n, t, e); }) : n.queue.tick(function () { return $(n, t, e); })); }, $ = function (t, o, u, f, c, a) { return e(i, void 0, void 0, function () { var e, i; return r(this, function (r) { switch (r.label) {
    case 0: return t.Pn.delete(o), t.Tn.has(o) ? [3, 12] : (c = t.Nn.get(o)) ? [3, 6] : (a = t.Rn.get(o)) && !a["s-rn"] ? ((a["s-rc"] = a["s-rc"] || []).push(function () { $(t, o, u); }), [2]) : (c = E(t, o, t.Ln.get(o), u), [3, 5]);
    case 1: return r.M.push([1, 4, , 5]), c.componentWillLoad ? [4, c.componentWillLoad()] : [3, 3];
    case 2: r.g(), r.label = 3;
    case 3: return [3, 5];
    case 4: return e = r.g(), t.Dn(e, 3, o), [3, 5];
    case 5:
    case 6: return [3, 11];
    case 7: return r.M.push([7, 10, , 11]), c.componentWillUpdate ? [4, c.componentWillUpdate()] : [3, 9];
    case 8: r.g(), r.label = 9;
    case 9: return [3, 11];
    case 10: return i = r.g(), t.Dn(i, 5, o), [3, 11];
    case 11: (function (t, e, r, i) { try {
        var o = e.Fn.host, u = e.Fn.encapsulation, f = r;
        if (i.render || i.hostData || o) {
            t.Hn = !0;
            var c = i.render && i.render();
            t.Hn = !1;
            var a = n(null, void 0, c), s = t.qn.get(r) || {};
            s.t = f, t.qn.set(r, t.render(r, s, a, !1, u));
        }
        t.s && t.s.updateHost(r), r["s-rn"] = !0, r["s-rc"] && (r["s-rc"].forEach(function (n) { return n(); }), r["s-rc"] = null);
    }
    catch (n) {
        t.Hn = !1, t.Dn(n, 8, r, !0);
    } })(t, t.I(o), o, c), o["s-init"](), r.label = 12;
    case 12: return [2];
} }); }); }, E = function (n, t, e, r, i, o) { try {
    i = new (o = n.I(t).Fn), function (n, t, e, r) { n.Un.set(r, e), n.Bn.has(e) || n.Bn.set(e, {}), Object.entries(Object.assign({ color: { type: String } }, t.properties, { mode: { type: String } })).forEach(function (n) { n[0], n[1]; }); }(n, o, t, i);
}
catch (e) {
    i = {}, n.Dn(e, 7, t, !0);
} return n.Nn.set(t, i), i; }, j = function (n, t) { for (var e = 0; e < t.childNodes.length; e++) {
    var r = t.childNodes[e];
    if (1 === r.nodeType) {
        if (n.I(r) && !n.In.has(r))
            return !1;
        if (!j(n, r))
            return !1;
    }
} return !0; }, A = function (n, t, e, r, i, o) { if (n.Wn.delete(t), (i = n.Rn.get(t)) && ((r = i["s-ld"]) && ((e = r.indexOf(t)) > -1 && r.splice(e, 1), r.length || i["s-init"] && i["s-init"]()), n.Rn.delete(t)), n.Gn.length && !n.Wn.size)
    for (; o = n.Gn.shift();)
        o(); }, C = function (t, e, r, i, o, u) { var f = r.performance, a = { html: {} }, s = r[t] = r[t] || {}, l = function (n, t, e) { var r = new WeakMap, i = { Qn: e, Yn: !!e.documentElement.attachShadow, Zn: !1, ln: function (n) { return n.nodeType; }, en: function (n) { return e.createElement(n); }, tn: function (n, t) { return e.createElementNS(n, t); }, nn: function (n) { return e.createTextNode(n); }, zn: function (n) { return e.createComment(n); }, an: function (n, t, e) { return n.insertBefore(t, e); }, cn: function (n) { return n.remove(); }, on: function (n, t) { return n.appendChild(t); }, K: function (n, t) { if (n.classList)
        n.classList.add(t);
    else if ("svg" === n.nodeName.toLowerCase()) {
        var e = n.getAttribute("class") || "";
        e.split(" ").includes(t) || (e += " " + t), n.setAttribute("class", e.trim());
    } }, fn: function (n) { return n.childNodes; }, sn: function (n) { return n.parentNode; }, bn: function (n) { return n.nextSibling; }, Mn: function (n) { return n.previousSibling; }, yn: function (n) { return c(n.nodeName); }, pn: function (n) { return n.textContent; }, mn: function (n, t) { return n.textContent = t; }, vn: function (n, t) { return n.getAttribute(t); }, Jn: function (n, t, e) { return n.setAttribute(t, e); }, G: function (n, t) { return n.removeAttribute(t); }, Z: function (n, t) { return n.hasAttribute(t); }, Kn: function (t) { return t.getAttribute("mode") || (n.Context || {}).mode; }, Vn: function (n, r) { return "child" === r ? n.firstElementChild : "parent" === r ? i.wn(n) : "body" === r ? e.body : "document" === r ? e : "window" === r ? t : n; }, J: function (t, e, o, u, f, c, a, s, l, v) { var p = t, d = o, h = r.get(t); v = e + u, h && h[v] && h[v](), "object" == typeof a && (p = a), p && (s = i.Zn ? { capture: !!f, passive: !!c } : !!f, n.ael(p, e, d, s), h || r.set(t, h = {}), h[v] = function () { p && n.rel(p, e, d, s), h[v] = null; }); }, Xn: function (n, t, e, i) { (i = r.get(n)) && (t ? i[t + e] && i[t + e]() : Object.keys(i).forEach(function (n) { i[n] && i[n](); })); }, nt: function (n, e, r, i) { return i = new t.CustomEvent(e, r), n && n.dispatchEvent(i), i; }, wn: function (n, t) { return (t = i.sn(n)) && 11 === i.ln(t) ? t.host : t; }, tt: function (n, t, e, r) { return n.setAttributeNS(t, e, r); } }; return "function" != typeof t.CustomEvent && (t.CustomEvent = function (n, t, r) { return t = t || {}, (r = e.createEvent("CustomEvent")).initCustomEvent(n, t.bubbles, t.cancelable, t.detail), r; }, t.CustomEvent.prototype = t.Event.prototype), n.ael || (n.ael = function (n, t, e, r) { return n.addEventListener(t, e, r); }, n.rel = function (n, t, e, r) { return n.removeEventListener(t, e, r); }), i; }(s, r, i), v = l.Qn.documentElement, p = r["s-defined"] = r["s-defined"] || {}, d = { Y: l, o: function (n, t) { r.customElements.get(n.gn) || (function (n, t, e, r, i) { e.connectedCallback = function () { (function (n, t, e) { n.Tn.delete(e), n.In.has(e) || (n.et = !0, n.Wn.add(e), n.In.set(e, !0), function (n, t, e) { for (e = t; e = n.Y.wn(e);)
        if (n.rn(e)) {
            n.in.has(t) || (n.Rn.set(t, e), (e["s-ld"] = e["s-ld"] || []).push(t));
            break;
        } }(n, e), n.queue.tick(function () { n.Ln.set(e, function (n, t, e) { if (e.mode || (e.mode = n.Kn(e)), e["s-cr"] || n.vn(e, "ssrv") || n.Yn && 1 === t.En || (e["s-cr"] = n.nn(""), e["s-cr"]["s-cn"] = !0, n.an(e, e["s-cr"], n.fn(e)[0])), !n.Yn && 1 === t.En)
        try {
            !window.HTMLElement || "shadowRoot" in window.HTMLElement.prototype || (e.shadowRoot = e);
        }
        catch (n) { } return { rt: {} }; }(n.Y, t, e)), n.it(t, e); })); })(n, t, this); }, e.disconnectedCallback = function () { (function (n, t) { !n.un && function (n, t) { for (; t;) {
        if (!n.sn(t))
            return 9 !== n.ln(t);
        t = n.sn(t);
    } }(n.Y, t) && (n.Tn.set(t, !0), A(n, t), y(n.qn.get(t), !0), n.Y.Xn(t), n.ot.delete(t), n.s && n.s.removeHost(t), [n.Rn, n.ut, n.Ln].forEach(function (n) { return n.delete(t); })); })(n, this); }, e["s-init"] = function () { (function (n, t, e, r, i, o) { if (j(n, t) && n.Nn.get(t) && !n.Tn.has(t) && (!t["s-ld"] || !t["s-ld"].length)) {
        n.in.set(t, !0), n.ft.has(t) || (n.ft.set(t, !0), t["s-ld"] = void 0, n.Y.K(t, e));
        try {
            y(n.qn.get(t)), (o = n.ut.get(t)) && (o.forEach(function (n) { return n(t); }), n.ut.delete(t));
        }
        catch (e) {
            n.Dn(e, 4, t);
        }
        A(n, t);
    } })(n, this, r); }, e.forceUpdate = function () { k(n, this, i); }; }(d, a[n.gn] = n, t.prototype, u, f), r.customElements.define(n.gn, t)); }, I: function (n) { return a[l.yn(n)]; }, ct: function (n) { return e[n]; }, isClient: !0, rn: function (n) { return !(!p[l.yn(n)] && !d.I(n)); }, Dn: function (n, t, e) { return console.error(n, t, e && e.tagName); }, queue: e.queue = w(0, r), it: function (n, t) { var e = { mode: t.mode, scoped: !1 }; n.u(e).then(function (e) { try {
        n.Fn = e;
    }
    catch (t) {
        console.error(t), n.Fn = function r() { };
    } k(d, t, f); }); }, Hn: !1, On: !1, un: !1, at: void 0, Rn: new WeakMap, st: new WeakMap, In: new WeakMap, ot: new WeakMap, ft: new WeakMap, in: new WeakMap, Un: new WeakMap, Ln: new WeakMap, Nn: new WeakMap, Tn: new WeakMap, Pn: new WeakMap, ut: new WeakMap, lt: new WeakMap, qn: new WeakMap, Bn: new WeakMap, Wn: new Set, Gn: [] }; return e.isServer = e.isPrerender = !(e.isClient = !0), e.window = r, e.location = r.location, e.document = i, e.resourcesUrl = e.publicPath = o, s.h = n, s.Context = e, s.onReady = function () { return new Promise(function (n) { return d.queue.write(function () { return d.Wn.size ? d.Gn.push(n) : n(); }); }); }, d.render = h(d, l), v["s-ld"] = [], v["s-rn"] = !0, v["s-init"] = function () { d.in.set(v, s.loaded = d.On = !0), l.nt(r, "appload", { detail: { namespace: t } }); }, function (n, t, e, r, i, o) { if (t.componentOnReady = function (t, e) { if (!t.nodeName.includes("-"))
    return e(null), !1; var r = n.I(t); if (r)
    if (n.in.has(t))
        e(t);
    else {
        var i = n.ut.get(t) || [];
        i.push(e), n.ut.set(t, i);
    } return !!r; }, i) {
    for (o = i.length - 1; o >= 0; o--)
        t.componentOnReady(i[o][0], i[o][1]) && i.splice(o, 1);
    for (o = 0; o < r.length; o++)
        if (!e[r[o]].componentOnReady)
            return;
    for (o = 0; o < i.length; o++)
        i[o][1](null);
    i.length = 0;
} }(d, s, r, r["s-apps"], r["s-cr"]), s.initialized = !0, d; }, S = {}, _ = !1;