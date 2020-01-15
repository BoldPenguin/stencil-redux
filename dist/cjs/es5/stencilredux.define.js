"use strict";
// stencilredux: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var stencilredux_core_js_1 = require("./stencilredux.core.js");
var stencilredux_components_js_1 = require("./stencilredux.components.js");
function defineCustomElements(win, opts) {
    return stencilredux_core_js_1.defineCustomElement(win, stencilredux_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;