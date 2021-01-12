import React from "react";
import { render, screen } from "@testing-library/react";

import Component from "./index";

describe("<Component />", () => {
  test("rendered text", () => {
    render(<Component title="title">sample component</Component>);
    expect(screen.getByText("sample component")).toBeDefined();
  });
});
