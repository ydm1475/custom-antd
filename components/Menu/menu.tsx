import React, { FC, ReactNode, cloneElement, createContext, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './item';

type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    /** 设置默认展开，只有在mode为vertical时才会生效*/
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    children?: ReactNode,
    defaultOpenSubMenus?: string[];
}


interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode,
    defaultOpenSubMenus?: string[];
}

const renderChildren = (chlidren: any) => {
    return React.Children.map(chlidren, (child, index) => {
        const childElement = child as React.FunctionComponentElement<MenuItemProps>;
        const { displayName } = childElement.type;

        if (displayName === 'MenuItem' || displayName === 'SubMenu') {
            return cloneElement(child, { index: index.toString() });
        } else {
            console.warn('Warning: Menu has a  child which is not a MenuItem')
        }
    })
}

export const MenuContext = createContext<IMenuContext>({ index: "0", defaultOpenSubMenus: [] });

/**
 * Menu是页面中最常用的按钮元素
 * ### 引用方法
 * ```js
 * import {Menu} from 'ydmShip';
 * ```
 * @param props 
 * @returns 
 */
export const Menu: FC<MenuProps> = (props) => {
    const { className, mode, children, defaultIndex, onSelect, defaultOpenSubMenus } = props;
    const [currentActive, setActive] = useState(defaultIndex);

    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal'

    });
    const handleClick = (index: string) => {
        setActive(index);
        onSelect && onSelect(index);
    };
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }


    return (
        <ul className={classes} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren(children)}
            </MenuContext.Provider>
        </ul>
    )
}


Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu;