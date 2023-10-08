import Menu from "./menu";
import SubMenu from "./subMenu";
import Item from './item';
const TransMenu = Menu;
TransMenu.Item = Item;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
