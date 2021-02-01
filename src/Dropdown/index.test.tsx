import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import Dropdown from "./";

describe("Dropdown", () => {
  afterEach(cleanup);

  test("open dropdown", () => {
    const { getByText } = render(
      <Dropdown trigger={<button>click</button>}>123</Dropdown>
    );

    fireEvent.click(getByText("click"));

    expect(getByText("123")).toBeInTheDocument();
  });
});
