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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonSizeEnum = exports.ButtonType = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Defalut"] = "default";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
})(ButtonType || (exports.ButtonType = ButtonType = {}));
var ButtonSizeEnum;
(function (ButtonSizeEnum) {
    ButtonSizeEnum["Large"] = "lg";
    ButtonSizeEnum["Normal"] = "nol";
    ButtonSizeEnum["Small"] = "sm";
})(ButtonSizeEnum || (exports.ButtonSizeEnum = ButtonSizeEnum = {}));
var Button = function (props) {
    var _a;
    var btnType = props.btnType, children = props.children, size = props.size, disabled = props.disabled, href = props.href, className = props.className, restProps = __rest(props, ["btnType", "children", "size", "disabled", "href", "className"]);
    var classes = (0, classnames_1.default)('btn', className, (_a = {},
        _a["btn-".concat(size)] = size,
        _a["btn-".concat(btnType)] = btnType,
        _a['disabled'] = btnType === ButtonType.Link && disabled,
        _a));
    if (btnType === ButtonType.Link && href) {
        return react_1.default.createElement("a", __assign({ className: classes, href: href }, restProps, { target: "_blank" }), children);
    }
    return (react_1.default.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
};
exports.Button = Button;
exports.Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Defalut,
    size: ButtonSizeEnum.Normal
};
exports.default = exports.Button;
