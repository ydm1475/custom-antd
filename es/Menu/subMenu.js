import React, { cloneElement, useContext, useRef, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { CSSTransition } from "react-transition-group";
import { Icon } from "../index";
const SubMenu = (props) => {
    var _a;
    const { className, disabled, index, children, title } = props;
    const context = useContext(MenuContext);
    const isOpen = index && ((_a = context === null || context === void 0 ? void 0 : context.defaultOpenSubMenus) === null || _a === void 0 ? void 0 : _a.length) && context.mode === "vertical" ? (context === null || context === void 0 ? void 0 : context.defaultOpenSubMenus.indexOf(index.toString())) > -1 : false;
    const [menuOpen, setOpen] = useState(isOpen);
    const classes = classNames('menu-item submenu-wrap', className, {
        'is-disabled': disabled,
        'is-actived': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });
    const nodeRef = useRef(null);
    const renderChildren = () => {
        const submenuClasses = classNames('submenu', "zoom-in-top", {
            'menu-opend': menuOpen
        });
        const childrenCom = React.Children.map(children, (child, i) => {
            const childElement = child;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem') {
                return cloneElement(childElement, { index: `${index}-${i.toString()}` });
            }
            else {
                console.warn('Warning: SubMenu has a  child which is not a MenuItem');
            }
        });
        return (React.createElement(CSSTransition, { in: menuOpen, timeout: 300, className: "zoom-in-top", appear: true, nodeRef: nodeRef, unmountOnExit: true },
            React.createElement("div", { ref: nodeRef },
                React.createElement("ul", { className: submenuClasses }, childrenCom))));
    };
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    let timer;
    const handleMouse = (e, toggle) => {
        clearTimeout(timer);
        e.preventDefault();
        setTimeout(() => {
            setOpen(toggle);
        }, 300);
    };
    const clickEvent = context.mode === "vertical" ? {
        onClick: handleClick
    } : {};
    const mouseEvent = context.mode !== "vertical" ? {
        onMouseEnter: (e) => handleMouse(e, true),
        onMouseLeave: (e) => handleMouse(e, false),
    } : {};
    return React.createElement("li", Object.assign({ key: index, className: classes }, mouseEvent),
        React.createElement("div", Object.assign({ className: "submenu-title" }, clickEvent),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren());
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
