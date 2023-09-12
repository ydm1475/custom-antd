import React from "react";

import { Meta, StoryFn } from "@storybook/react"
import Menu from ".";
import MenuItem from "./item";
import SubMenu from "./subMenu";
const meunMeta: Meta<typeof SubMenu> = {
    title: 'SubMenu',
    id: 'SubMenu',
    component: SubMenu,
}

export default meunMeta;


const Template: StoryFn<typeof SubMenu> = () => (
    <SubMenu title="dorpdown" >
        <MenuItem>下拉选项1</MenuItem>
        <MenuItem>下拉选项2</MenuItem>
        <MenuItem disabled>submenu disabled</MenuItem>
    </SubMenu>
)


export const Default = Template.bind({});
Default.storyName = "默认SubMenu";





