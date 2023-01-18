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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCuponById = exports.getCupons = exports.createCupon = void 0;
const cupon_1 = require("../models/cupon");
const createCupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, stock, status, discount } = req.body;
    try {
        const cupon = new cupon_1.Cupon({ name, stock, status, discount });
        yield cupon.save();
        res.json({
            msg: 'Cupon Create',
            cupon
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createCupon = createCupon;
const getCupons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        const cupon = yield cupon_1.Cupon.findOne({ name });
        if (name) {
            if (cupon && cupon.stock > 0) {
                cupon.stock--;
                yield cupon.save();
                res.json({
                    'cupon_name': cupon.name,
                    'discount': cupon.discount
                });
            }
            else {
                throw new Error('El cupon ha sido agotado');
            }
        }
        else {
            const cupons = yield cupon_1.Cupon.find();
            res.json({ cupons });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
});
exports.getCupons = getCupons;
const getCuponById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    console.log('name', name);
    try {
        const cupon = yield cupon_1.Cupon.findOne({ name });
        if (cupon) {
            cupon.stock--;
            yield cupon.save();
        }
        res.json({
            'cupon_name': cupon === null || cupon === void 0 ? void 0 : cupon.name
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
});
exports.getCuponById = getCuponById;
//# sourceMappingURL=cuponController.js.map