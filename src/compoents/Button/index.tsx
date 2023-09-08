import React, { FC, ReactNode } from "react";
import classNames from "classnames";


export enum ButtonType {
    Primary = "primary",
    Defalut = "default",
    Danger = 'danger',
    Link = 'link'

}

export enum ButtonSizeEnum {
    Large = "lg",
    Normal = "nol",
    Small = "sm"
}

interface IButton {
    className?: string,
    disabled?: boolean,
    size?: ButtonSizeEnum,
    btnType?: ButtonType,
    children?: ReactNode,
    href?: string;
}

type NativeButtonProps = IButton & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IButton & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
    const { btnType, children, size, disabled, href, className, ...restProps } = props;

    const classes = classNames('btn', className, {
        [`btn-${size}`]: size,
        [`btn-${btnType}`]: btnType,
        'disabled': btnType === ButtonType.Link && disabled
    });

    if (btnType === ButtonType.Link && href) {
        return <a className={classes} href={href} {...restProps} target="_blank">{children}</a>
    }

    return (
        <button className={classes} disabled={disabled} {...restProps}>{children}</button>
    )
};


Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Defalut,
    size: ButtonSizeEnum.Normal
}

export default Button;