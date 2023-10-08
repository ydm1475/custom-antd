import React from "react";
import Button, { ButtonSizeEnum, ButtonType } from ".";
import { Meta } from "@storybook/react"

const buttonMeta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    id: 'Button',
}

export default buttonMeta;


export const Default = {
    args: {
        children: 'Default Button'
    },
    decorators: [
        (Story: any) => (
            <div style={{ margin: '50px' }}><Story /></div>
        )
    ]
};



export const Large = {
    args: {
        size: ButtonSizeEnum.Large,
        children: 'Large Button'
    },
};


export const Small = {
    args: {
        size: ButtonSizeEnum.Small,
        children: 'Small Button'
    },

};

export const Primary = {
    args: {
        btnType: ButtonType.Primary,
        children: 'Primary Button'
    },
};

export const Danger = {
    args: {
        btnType: ButtonType.Danger,
        children: 'Danger Button'
    },
};


export const Link = {
    args: {
        btnType: ButtonType.Link,
        href: "https://google.com",
        children: 'Link Button'
    },
};


