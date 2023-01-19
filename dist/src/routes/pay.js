"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payController_1 = require("../controllers/payController");
const router = (0, express_1.Router)();
router.post('/', payController_1.createPay);
exports.default = router;
//# sourceMappingURL=pay.js.map