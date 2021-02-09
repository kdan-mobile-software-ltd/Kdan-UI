import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import Collapse from "./";

describe("Collapse", () => {
  afterEach(cleanup);

  test("open collapse", () => {
    const { container, getByText } = render(
      <Collapse trigger={<button>click</button>} defaultOpen>
        content
      </Collapse>
    );

    fireEvent.click(getByText("click"));

    expect(container).toMatchSnapshot();
  });
});
