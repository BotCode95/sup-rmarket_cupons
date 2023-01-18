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
exports.Product = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price_unit: { type: Number, required: true },
    total: { type: Number, required: false, default: 0 },
    stock: { type: Number, required: true, default: 5 },
    image: { type: String, required: false },
    barcode: { type: String, required: false },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    created_at: { type: Date, default: Date.now() },
    modified_at: { type: Date, default: Date.now() }
});
productSchema.methods.toJSON = function () {
    // eslint-disable-next-line no-unused-vars
    const _a = this.toObject(), { __v } = _a, product = __rest(_a, ["__v"]);
    return product;
};
// 3. Create a Model.
exports.Product = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=product.js.map