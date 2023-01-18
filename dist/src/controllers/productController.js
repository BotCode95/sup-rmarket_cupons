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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.query;
    if (idUser) {
        const products = yield product_1.Product.find({ user: idUser }).populate('category', 'name').populate('user', 'email');
        res.json({ products });
    }
    else {
        const products = yield product_1.Product.find().populate('category', 'name');
        res.json({ products });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield product_1.Product.findById(id);
        res.json({
            product
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price_unit, image, barcode, stock, category, total, user, discount } = req.body;
    try {
        const product = new product_1.Product({ name, description, price_unit, image, barcode, stock, category, total, user, discount });
        yield product.save();
        res.json({
            msg: 'product Creado',
            product
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // eslint-disable-next-line no-unused-vars
    const _a = req.body, { _id } = _a, resto = __rest(_a, ["_id"]);
    try {
        const product = yield product_1.Product.findByIdAndUpdate(id, resto, { new: true });
        res.json({ product });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield product_1.Product.findByIdAndDelete(id);
        res.json({ product });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map