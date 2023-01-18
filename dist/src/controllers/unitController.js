"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.deleteUnit = exports.updateUnit = exports.getUnitById = exports.getUnits = exports.createUnit = void 0;
const unit_1 = require("../models/unit");
const createUnit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_unidad, descripcion } = req.body;
    try {
        const unit = new unit_1.Unit({ tipo_unidad, descripcion });
        yield unit.save();
        res.json({
            msg: 'unit Creado',
            unit
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createUnit = createUnit;
const getUnits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const units = yield unit_1.Unit.find();
    res.json({ units });
});
exports.getUnits = getUnits;
const getUnitById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const unit = yield unit_1.Unit.findById(id);
        res.json({
            unit
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
});
exports.getUnitById = getUnitById;
const updateUnit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id } = _a, resto = __rest(_a, ["_id"]);
    try {
        const unit = yield unit_1.Unit.findByIdAndUpdate(id, resto, { new: true });
        res.json({ unit });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.updateUnit = updateUnit;
const deleteUnit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield unit_1.Unit.findByIdAndDelete(id);
        res.json({ msg: 'Unidad eliminada' });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.deleteUnit = deleteUnit;
//# sourceMappingURL=unitController.js.map