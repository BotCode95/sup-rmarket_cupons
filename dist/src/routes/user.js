"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validators_1 = require("../utils/validators");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getUsers);
router.get('/:id', userController_1.getUserById);
router.post('/', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('lastName', 'El apellido es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contrasela debe ser mayor a 6 caracteres').isLength({ min: 6 }),
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('role').custom(validators_1.isRoleValidate),
], userController_1.createUser);
router.put('/:id', [
    (0, express_validator_1.check)('role').custom(validators_1.isRoleValidate),
], userController_1.updateUser);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
], userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map