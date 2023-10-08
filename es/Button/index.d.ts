import React, { FC, ReactNode } from "react";
export declare enum ButtonType {
    Primary = "primary",
    Defalut = "default",
    Danger = "danger",
    Link = "link"
}
export declare enum ButtonSizeEnum {
    Large = "lg",
    Normal = "nol",
    Small = "sm"
}
interface IButton {
    className?: string;
    disabled?: boolean;
    size?: ButtonSizeEnum;
    btnType?: ButtonType;
    children?: ReactNode;
    href?: string;
}
type NativeButtonProps = IButton & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IButton & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
