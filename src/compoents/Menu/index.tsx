
import Menu, { MenuProps } from "./menu";
import SubMenu, { SubMenuProps } from "./subMenu";
import Item, { MenuItemProps } from './item';
import { FC } from "react";

export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>,
    SubMenu: FC<SubMenuProps>,
}

const TransMenu = Menu as IMenuComponent;

TransMenu.Item = Item;
TransMenu.SubMenu = SubMenu;

export default TransMenu;