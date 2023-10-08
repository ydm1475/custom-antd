import { MenuProps } from "./menu";
import { SubMenuProps } from "./subMenu";
import { MenuItemProps } from './item';
import { FC } from "react";
export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
