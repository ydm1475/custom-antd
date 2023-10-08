"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = __importDefault(require("./menu"));
var subMenu_1 = __importDefault(require("./subMenu"));
var item_1 = __importDefault(require("./item"));
var TransMenu = menu_1.default;
TransMenu.Item = item_1.default;
TransMenu.SubMenu = subMenu_1.default;
exports.default = TransMenu;
