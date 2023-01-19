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
exports.Pay = void 0;
const mongoose_1 = require("mongoose");
const paySchema = new mongoose_1.Schema({
    products: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
    client: { type: String, required: false },
    total: { type: Number, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    cupon_discount: { type: String, required: false },
    idCompra: { type: String, required: false, default: Date.now().toString() },
    created_at: { type: Date, default: Date.now() },
});
paySchema.methods.toJSON = function () {
    // eslint-disable-next-line no-unused-vars
    const _a = this.toObject(), { __v } = _a, pay = __rest(_a, ["__v"]);
    return pay;
};
exports.Pay = (0, mongoose_1.model)('Pay', paySchema);
//# sourceMappingURL=pay.js.map