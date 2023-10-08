import { FC, ReactNode } from "react";
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    disabled?: boolean;
    children?: ReactNode;
}
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
