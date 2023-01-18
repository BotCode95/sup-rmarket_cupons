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
exports.Unit = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const unitSchema = new mongoose_1.Schema({
    tipo_unidad: { type: String, required: true },
    descripcion: { type: String, required: false }
});
unitSchema.methods.toJSON = function () {
    // eslint-disable-next-line no-unused-vars
    const _a = this.toObject(), { __v } = _a, unit = __rest(_a, ["__v"]);
    return unit;
};
// 3. Create a Model.
exports.Unit = (0, mongoose_1.model)('Unit', unitSchema);
//# sourceMappingURL=unit.js.map