import React, { FC, ReactNode } from 'react';
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    /** 设置默认展开，只有在mode为vertical时才会生效*/
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    children?: ReactNode;
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
/**
 * Menu是页面中最常用的按钮元素
 * ### 引用方法
 * ```js
 * import {Menu} from 'ydmShip';
 * ```
 * @param props
 * @returns
 */
export declare const Menu: FC<MenuProps>;
export default Menu;
