import React from "react";

import { Meta, StoryFn } from "@storybook/react"
import Menu from ".";
import MenuItem from "./item";
import SubMenu from "./subMenu";
const meunMeta: Meta<typeof Menu> = {
    title: 'Menu',
    id: 'Menu',
    component: Menu,
    tags: ['autodocs'],

}

export default meunMeta;


const Template: StoryFn<typeof Menu> = (args) => (
    <Menu
        {...args}>
        <MenuItem >color link1</MenuItem>
        <MenuItem>color link2</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <SubMenu title="dorpdown">
            <MenuItem>下拉选项1</MenuItem>
            <MenuItem>下拉选项2</MenuItem>
            <MenuItem disabled>submenu disabled</MenuItem>
        </SubMenu>
    </Menu>
)


export const Default = Template.bind({});
Default.storyName = "默认menu";



export const ClickMenu = Template.bind({});
ClickMenu.storyName = "纵向的menu";

ClickMenu.parameters = {
    backgrounds: {
        values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
        ]
    }
}
ClickMenu.args = {
    defaultIndex: '1',
    mode: 'vertical'
}


