"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.MenuContext = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var renderChildren = function (chlidren) {
    return react_1.default.Children.map(chlidren, function (child, index) {
        var childElement = child;
        var displayName = childElement.type.displayName;
        if (displayName === 'MenuItem' || displayName === 'SubMenu') {
            return (0, react_1.cloneElement)(child, { index: index.toString() });
        }
        else {
            console.warn('Warning: Menu has a  child which is not a MenuItem');
        }
    });
};
exports.MenuContext = (0, react_1.createContext)({ index: "0", defaultOpenSubMenus: [] });
/**
 * Menu是页面中最常用的按钮元素
 * ### 引用方法
 * ```js
 * import {Menu} from 'ydmShip';
 * ```
 * @param props
 * @returns
 */
var Menu = function (props) {
    var className = props.className, mode = props.mode, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = (0, react_1.useState)(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var classes = (0, classnames_1.default)('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal'
    });
    var handleClick = function (index) {
        setActive(index);
        onSelect && onSelect(index);
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    return (react_1.default.createElement("ul", { className: classes, "data-testid": "test-menu" },
        react_1.default.createElement(exports.MenuContext.Provider, { value: passedContext }, renderChildren(children))));
};
exports.Menu = Menu;
exports.Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
};
exports.default = exports.Menu;
