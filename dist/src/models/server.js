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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../database/config");
const product_1 = __importDefault(require("../routes/product"));
const category_1 = __importDefault(require("../routes/category"));
const cupon_1 = __importDefault(require("../routes/cupon"));
const user_1 = __importDefault(require("../routes/user"));
const auth_1 = __importDefault(require("../routes/auth"));
const role_1 = __importDefault(require("../routes/role"));
class Server {
    constructor() {
        this.apiPaths = {
            productsPath: '/api/products',
            categoriesPath: '/api/categories',
            cuponPath: '/api/cupons',
            authPath: '/api/auth',
            rolePath: '/api/role',
            userPath: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.NODE_ENV === 'dev' ? process.env.PORT_DEVELOPMENT : process.env.PORT;
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.productsPath, product_1.default);
        this.app.use(this.apiPaths.categoriesPath, category_1.default);
        this.app.use(this.apiPaths.cuponPath, cupon_1.default);
        this.app.use(this.apiPaths.authPath, auth_1.default);
        this.app.use(this.apiPaths.userPath, user_1.default);
        this.app.use(this.apiPaths.rolePath, role_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor Corriendo en el puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map