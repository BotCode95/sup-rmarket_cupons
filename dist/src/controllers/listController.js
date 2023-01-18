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
exports.createList = exports.getLists = void 0;
const list_1 = require("../models/list");
const getLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lists = yield list_1.List.find();
    res.json({ lists });
});
exports.getLists = getLists;
const createList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.body;
    try {
        const list = new list_1.List({ nombre });
        yield list.save();
        res.json({
            msg: 'List Creado',
            list
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createList = createList;
//# sourceMappingURL=listController.js.map