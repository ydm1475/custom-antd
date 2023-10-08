"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.Menu = exports.Button = void 0;
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var Button_1 = require("./Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return __importDefault(Button_1).default; } });
var Menu_1 = require("./Menu");
Object.defineProperty(exports, "Menu", { enumerable: true, get: function () { return __importDefault(Menu_1).default; } });
var Icon_1 = require("./Icon");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return __importDefault(Icon_1).default; } });
