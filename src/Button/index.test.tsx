import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import Button from "./";
import colors from "../themes/colors";

describe("Button", () => {
  afterEach(cleanup);

  test("set content", () => {
    const { container } = render(<Button>Button</Button>);

    expect(container.textContent).toBe("Button");
  });

  test("is anchor", () => {
    const { container } = render(
      <Button href="http://github.com" isAnchor>
        Link
      </Button>
    );

    expect(container.querySelector("a")).toBeInTheDocument();
  });

  test("default style", () => {
    const { container } = render(<Button>Button</Button>);

    expect(container.querySelector("button")).toHaveStyle(`
      padding: 8px 18px;
      color: ${colors.N0};
      background-color: ${colors.N100};
    `);
  });

  test("clicked button", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Button</Button>);

    fireEvent.click(getByText("Button"));

    expect(onClick).toHaveBeenCalled();
  });

  test("disabled button", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick} disabled>
        Button
      </Button>
    );

    fireEvent.click(getByText("Button"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
