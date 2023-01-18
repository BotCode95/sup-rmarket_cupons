"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cupon = void 0;
const mongoose_1 = require("mongoose");
const cuponSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    stock: { type: Number, required: false, default: 2 },
    status: { type: Boolean, required: false },
    discount: { type: Number, required: false }
});
cuponSchema.methods.toJSON = function () {
    // eslint-disable-next-line no-unused-vars
    const _a = this.toObject(), { __v } = _a, cupon = __rest(_a, ["__v"]);
    return cupon;
};
// 3. Create a Model.
exports.Cupon = (0, mongoose_1.model)('Cupon', cuponSchema);
//# sourceMappingURL=cupon.js.map