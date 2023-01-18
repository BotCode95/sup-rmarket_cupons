"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuponController_1 = require("../controllers/cuponController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', cuponController_1.getCupons);
router.get('/:id', cuponController_1.getCuponById);
router.post('/', cuponController_1.createCupon);
exports.default = router;
//# sourceMappingURL=cupon.js.map