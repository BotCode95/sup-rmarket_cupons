"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listController_1 = require("../controllers/listController");
const router = (0, express_1.Router)();
router.get('/', listController_1.getLists);
router.post('/', listController_1.createList);
exports.default = router;
//# sourceMappingURL=list.js.map