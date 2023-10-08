"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var menu_1 = require("./menu");
var react_transition_group_1 = require("react-transition-group");
var index_1 = require("../index");
var SubMenu = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, index = props.index, children = props.children, title = props.title;
    var context = (0, react_1.useContext)(menu_1.MenuContext);
    var isOpen = index && ((_a = context === null || context === void 0 ? void 0 : context.defaultOpenSubMenus) === null || _a === void 0 ? void 0 : _a.length) && context.mode === "vertical" ? (context === null || context === void 0 ? void 0 : context.defaultOpenSubMenus.indexOf(index.toString())) > -1 : false;
    var _b = (0, react_1.useState)(isOpen), menuOpen = _b[0], setOpen = _b[1];
    var classes = (0, classnames_1.default)('menu-item submenu-wrap', className, {
        'is-disabled': disabled,
        'is-actived': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });
    var nodeRef = (0, react_1.useRef)(null);
    var renderChildren = function () {
        var submenuClasses = (0, classnames_1.default)('submenu', "zoom-in-top", {
            'menu-opend': menuOpen
        });
        var childrenCom = react_1.default.Children.map(children, function (child, i) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem') {
                return (0, react_1.cloneElement)(childElement, { index: "".concat(index, "-").concat(i.toString()) });
            }
            else {
                console.warn('Warning: SubMenu has a  child which is not a MenuItem');
            }
        });
        return (react_1.default.createElement(react_transition_group_1.CSSTransition, { in: menuOpen, timeout: 300, className: "zoom-in-top", appear: true, nodeRef: nodeRef, unmountOnExit: true },
            react_1.default.createElement("div", { ref: nodeRef },
                react_1.default.createElement("ul", { className: submenuClasses }, childrenCom))));
    };
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvent = context.mode === "vertical" ? {
        onClick: handleClick
    } : {};
    var mouseEvent = context.mode !== "vertical" ? {
        onMouseEnter: function (e) { return handleMouse(e, true); },
        onMouseLeave: function (e) { return handleMouse(e, false); },
    } : {};
    return react_1.default.createElement("li", __assign({ key: index, className: classes }, mouseEvent),
        react_1.default.createElement("div", __assign({ className: "submenu-title" }, clickEvent),
            title,
            react_1.default.createElement(index_1.Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren());
};
SubMenu.displayName = 'SubMenu';
exports.default = SubMenu;
