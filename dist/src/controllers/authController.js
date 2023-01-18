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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarTokenUsuario = exports.login = void 0;
const generar_jwt_1 = require("../utils/generar-jwt");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = require("../models/user");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'Email / passsword no son correctos - correo'
            });
        }
        if (!user.status) {
            return res.status(400).json({
                msg: 'El usuario se encuentra con estado desactivado'
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'La contraseña es incorrecta'
            });
        }
        //generar jwt
        const token = yield (0, generar_jwt_1.generarJWT)(user.id);
        res.json({
            user,
            token
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.login = login;
const validarTokenUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Generar el JWT
    const token = yield (0, generar_jwt_1.generarJWT)(req.user._id);
    res.json({
        user: req.user,
        token: token,
    });
});
exports.validarTokenUsuario = validarTokenUsuario;
//# sourceMappingURL=authController.js.map