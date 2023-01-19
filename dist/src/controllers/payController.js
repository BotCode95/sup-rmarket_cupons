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
exports.createPay = void 0;
const pay_1 = require("../models/pay");
const cupon_1 = require("../models/cupon");
const createPay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { products, total, cupon_discount, client, user } = req.body;
    try {
        if (products) {
            let totalProducts = products.map((product) => product.total).reduce((a, b) => a + b);
            if ((cupon_discount === null || cupon_discount === void 0 ? void 0 : cupon_discount.length) > 0) {
                const cupon = yield cupon_1.Cupon.findOne({ name: cupon_discount });
                const discount = (totalProducts * ((_a = cupon === null || cupon === void 0 ? void 0 : cupon.discount) !== null && _a !== void 0 ? _a : 0)) / 100;
                totalProducts -= discount;
            }
            if (totalProducts === total) {
                const pay = new pay_1.Pay({ products, total, cupon_discount, client, user });
                yield pay.save();
                res.json({
                    msg: 'Pay succesfully',
                    idCompra: pay.idCompra
                });
            }
            else {
                throw new Error('El total es incorrecto');
            }
        }
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
exports.createPay = createPay;
//# sourceMappingURL=payController.js.map