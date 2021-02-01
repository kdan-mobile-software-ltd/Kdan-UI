import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import Select from "./";

const options = [
  { key: "1", value: "1" },
  { key: "2", value: "2" },
];

describe("Select", () => {
  afterEach(cleanup);

  test("set default value", () => {
    const { getByTestId } = render(<Select options={options} value="1" />);

    expect(getByTestId("selected").innerHTML).toBe("1");
  });

  test("show menu", () => {
    const { getByTestId } = render(<Select options={options} />);

    fireEvent.click(getByTestId("selected"));

    expect(getByTestId("menu-list")).toBeInTheDocument();
  });

  test("select option", () => {
    const { getByTestId, getByText } = render(<Select options={options} />);

    fireEvent.click(getByTestId("selected"));
    fireEvent.click(getByText("2"));

    expect(getByTestId("selected").innerHTML).toBe("2");
  });

  test("disable input", () => {
    const { container, getByTestId } = render(
      <Select options={options} disabledInput />
    );

    fireEvent.click(getByTestId("selected"));

    expect(container.querySelector("input")).toBeNull();
  });
});
