import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Button, { ButtonSizeEnum, ButtonType } from "./index";

const testProps = {
  btnType: ButtonType.Primary,
  size: ButtonSizeEnum.Large,
  className: "klass",
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const mockOnClick = jest.fn().mockName("buttonClick");
    render(<Button onClick={mockOnClick}>Nice</Button>);
    const element = screen.queryByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    // expect(element).toBeDisabled();
    fireEvent.click(element);
    expect(mockOnClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const mockOnClick = jest.fn().mockName("buttonClick");
    render(
      <Button onClick={mockOnClick} {...testProps}>
        Nice
      </Button>
    );
    const element = screen.queryByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-lg klass btn-primary");
    fireEvent.click(element);
    expect(mockOnClick).toHaveBeenCalled();
  });
  it("should render a link when btnType equals link and href is provided", () => {
    const mockOnClick = jest.fn().mockName("buttonClick");
    render(
      <Button
        onClick={mockOnClick}
        btnType={ButtonType.Link}
        href="https:www.baidu.com"
      >
        Link
      </Button>
    );
    const element = screen.queryByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
    fireEvent.click(element);
    expect(mockOnClick).toHaveBeenCalled();
  });
  it("should render disabled button when disabled set to true", () => {
    const mockOnClick = jest.fn().mockName("buttonClick");
    render(
      <Button disabled onClick={mockOnClick}>
        Link
      </Button>
    );
    const element = screen.queryByText("Link");
    expect(element).toBeInTheDocument();
    expect(element).toBeDisabled();
    fireEvent.click(element);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
