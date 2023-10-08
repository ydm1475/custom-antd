import React, { FC, ReactNode, cloneElement, useContext, useRef, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./item";

import { CSSTransition } from "react-transition-group";
import { Icon } from "../index";
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    disabled?: boolean;
    children?: ReactNode

}

const SubMenu: FC<SubMenuProps> = (props) => {
    const { className, disabled, index, children, title } = props;
    const context = useContext(MenuContext);
    const isOpen = index && context?.defaultOpenSubMenus?.length && context.mode === "vertical" ? context?.defaultOpenSubMenus.indexOf(index.toString()) > -1 : false;
    const [menuOpen, setOpen] = useState(isOpen);

    const classes = classNames('menu-item submenu-wrap', className, {
        'is-disabled': disabled,
        'is-actived': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    })

    const nodeRef = useRef(null);
    const renderChildren = () => {
        const submenuClasses = classNames(
            'submenu',
            "zoom-in-top",
            {
                'menu-opend': menuOpen
            }
        )
        const childrenCom = React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;

            if (displayName === 'MenuItem') {
                return cloneElement(childElement, { index: `${index}-${i.toString()}` });
            } else {
                console.warn('Warning: SubMenu has a  child which is not a MenuItem')
            }
        });
        return (
            <CSSTransition in={menuOpen} timeout={300} className="zoom-in-top" appear nodeRef={nodeRef} unmountOnExit>
                <div ref={nodeRef}>
                    <ul className={submenuClasses}>
                        {childrenCom}
                    </ul>
                </div>
            </CSSTransition>

        )
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        setOpen(!menuOpen);
    }
    let timer: any;

    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        setTimeout(() => {
            setOpen(toggle);
        }, 300)
    }

    const clickEvent = context.mode === "vertical" ? {
        onClick: handleClick
    } : {};
    const mouseEvent = context.mode !== "vertical" ? {
        onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
        onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
    } : {};
    return <li key={index} className={classes} {...mouseEvent}>
        <div className="submenu-title" {...clickEvent} >{title}
            <Icon icon="angle-down" className="arrow-icon"></Icon>
        </div>
        {renderChildren()}
    </li >
}

SubMenu.displayName = 'SubMenu';
export default SubMenu;