import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import Typography from "./";

describe("Typography", () => {
  afterEach(cleanup);

  test("set content", () => {
    const { container } = render(
      <Typography variant="h1">H1 Title</Typography>
    );

    expect(container.textContent).toBe("H1 Title");
  });

  test("default h1 style", () => {
    const { container } = render(
      <Typography variant="h1">H1 style</Typography>
    );

    expect(container.querySelector("h1")).toHaveStyleRule(
      "text-align",
      "inherit"
    );
    expect(container.querySelector("h1")).toHaveStyleRule("font-weight", "700");
  });

  test("set color and align, display", () => {
    const { container } = render(
      <Typography variant="b1" display="block" align="center" color="brand">
        body1
      </Typography>
    );

    expect(container.querySelector("p")).toHaveStyle(`
      text-align: center;
      display: block;
      color: #00a89b;
    `);
  });
});
