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
exports.deleteCategory = exports.updateCategory = exports.getCategoryById = exports.getCategories = exports.createCategory = void 0;
const category_1 = require("../models/category");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, descripcion } = req.body;
    try {
        const category = new category_1.Category({ name, descripcion });
        yield category.save();
        res.json({
            msg: 'category Creado',
            category
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createCategory = createCategory;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_1.Category.find();
    res.json({ categories });
});
exports.getCategories = getCategories;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield category_1.Category.findById(id);
        res.json({
            category
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
});
exports.getCategoryById = getCategoryById;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id } = _a, resto = __rest(_a, ["_id"]);
    try {
        const category = yield category_1.Category.findByIdAndUpdate(id, resto, { new: true });
        res.json({ category });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield category_1.Category.findByIdAndDelete(id);
        res.json({ msg: 'Categoria eliminada' });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categoryController.js.map