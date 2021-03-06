import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import Carousel from "./";

describe("Carousel", () => {
  afterEach(cleanup);

  test("match snapshot", () => {
    const { container } = render(<Carousel>{[<div key="1">1</div>]}</Carousel>);

    expect(container).toMatchSnapshot();
  });

  test("show dots", () => {
    const { getByTestId } = render(
      <Carousel showDot>
        {[<div key="1">1</div>, <div key="2">2</div>]}
      </Carousel>
    );

    expect(getByTestId("dots")).toBeInTheDocument();
  });
});
