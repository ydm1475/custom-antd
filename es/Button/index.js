var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React from "react";
import classNames from "classnames";
export var ButtonType;
(function (ButtonType) {
  ButtonType["Primary"] = "primary";
  ButtonType["Defalut"] = "default";
  ButtonType["Danger"] = "danger";
  ButtonType["Link"] = "link";
})(ButtonType || (ButtonType = {}));
export var ButtonSizeEnum;
(function (ButtonSizeEnum) {
  ButtonSizeEnum["Large"] = "lg";
  ButtonSizeEnum["Normal"] = "nol";
  ButtonSizeEnum["Small"] = "sm";
})(ButtonSizeEnum || (ButtonSizeEnum = {}));
export const Button = (props) => {
  const { btnType, children, size, disabled, href, className } = props,
    restProps = __rest(props, [
      "btnType",
      "children",
      "size",
      "disabled",
      "href",
      "className",
    ]);
  const classes = classNames("btn", className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return React.createElement(
      "a",
      Object.assign({ className: classes, href: href }, restProps, {
        target: "_blank",
      }),
      children
    );
  }
  return React.createElement(
    "button",
    Object.assign({ className: classes, disabled: disabled }, restProps),
    children
  );
};
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Defalut,
  size: ButtonSizeEnum.Normal,
};
export default Button;
