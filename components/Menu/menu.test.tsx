/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import React, { FC } from "react";
import { RenderResult, fireEvent, render, screen, cleanup, waitFor } from "@testing-library/react";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import Menu, { MenuProps } from "./menu";
import MenuItem from "./item";
import SubMenu from "./subMenu";

library.add(fas);

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: "vertical",
  defaultOpenSubMenus: ['3']
};

const NiceMenu: FC<MenuProps> = (props) => {
  return <Menu {...props}>
    <MenuItem >active</MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem>
    <MenuItem >xyz</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>dropdown1</MenuItem>
      <MenuItem>dropdown2</MenuItem>
    </SubMenu>
  </Menu>;
};

let wrapper: RenderResult, menuELement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
const createStyleFile = () => {
  const cssFile: string = `
    .submenu{
      display:none;
    }
    .submenu.menu-opend{
      display:block
    }
  `;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssFile;

  return style;
}
describe("test Menu and MenuItem component", () => {

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    wrapper = render(<NiceMenu {...testProps} />);
    wrapper.container.append(createStyleFile());
    menuELement = screen.getByTestId('test-menu');
    activeElement = screen.getByText('active');
    disabledElement = screen.getByText('disabled');
  });
  it("should render the correct Menu and MenuItem based on default props", () => {

    expect(menuELement).toBeInTheDocument();
    expect(menuELement.tagName).toEqual("UL");
    expect(menuELement).toHaveClass("menu test");
    expect(menuELement.querySelectorAll(":scope > li").length).toEqual(4);

    expect(activeElement).toHaveClass("menu-item is-actived");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-actived')
    expect(activeElement).not.toHaveClass("is-actived");
    expect(testProps.onSelect).toHaveBeenCalledWith('2');

    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-actived");
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');

  });
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup();
    wrapper = render(<NiceMenu {...testVerProps} />);
    menuELement = screen.getByTestId('test-menu');
    expect(menuELement).toHaveClass('menu-vertical')
  });

  it('should show dropdown items when hover on Subment', async () => {
    // expect(wrapper.queryByText('dropdown1')).not.toBeVisible();
    const dropdownElement = wrapper.queryByText('dropdown');
    fireEvent.mouseEnter(dropdownElement!);
    await waitFor(() => {
      expect(wrapper.queryByText('dropdown1')).toBeVisible();
    })

    fireEvent.click(wrapper.getByText('dropdown1'));
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');

    fireEvent.mouseLeave(dropdownElement!);
    await waitFor(() => {
      expect(wrapper.queryByText('dropdown1')).not.toBeVisible();
    })
  })

  it('should drop', () => {
    cleanup();
    wrapper = render(<NiceMenu {...testVerProps} />);
    expect(wrapper.queryByText('dropdown1')).toBeVisible();
  })
});
