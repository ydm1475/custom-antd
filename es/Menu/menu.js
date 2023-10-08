import React, { cloneElement, createContext, useState } from 'react';
import classNames from 'classnames';
const renderChildren = (chlidren) => {
    return React.Children.map(chlidren, (child, index) => {
        const childElement = child;
        const { displayName } = childElement.type;
        if (displayName === 'MenuItem' || displayName === 'SubMenu') {
            return cloneElement(child, { index: index.toString() });
        }
        else {
            console.warn('Warning: Menu has a  child which is not a MenuItem');
        }
    });
};
export const MenuContext = createContext({ index: "0", defaultOpenSubMenus: [] });
/**
 * Menu是页面中最常用的按钮元素
 * ### 引用方法
 * ```js
 * import {Menu} from 'ydmShip';
 * ```
 * @param props
 * @returns
 */
export const Menu = (props) => {
    const { className, mode, children, defaultIndex, onSelect, defaultOpenSubMenus } = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal'
    });
    const handleClick = (index) => {
        setActive(index);
        onSelect && onSelect(index);
    };
    const passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    };
    return (React.createElement("ul", { className: classes, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren(children))));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
};
export default Menu;
