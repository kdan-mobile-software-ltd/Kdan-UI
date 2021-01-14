import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import LanguageBar from "./";

describe("Language Bar", () => {
  afterEach(cleanup);

  const options = [
    {
      key: "zh-tw",
      value: "中文",
    },
    {
      key: "en",
      value: "英文",
    },
  ];
  const value = "zh-tw";

  test("basic", () => {
    const { container } = render(
      <LanguageBar options={options} value={value} />
    );

    expect(container).toMatchSnapshot();
  });

  test("should show menu on click", () => {
    const { getByTestId } = render(
      <LanguageBar options={options} value={value} />
    );

    if (getByTestId("languageBar")) {
      fireEvent.click(getByTestId("languageBar"));
    }

    expect(getByTestId("languageBar")).toHaveStyleRule("display", "block");
  });

  test("should change value on click", () => {
    const { getByTestId, getByText } = render(
      <LanguageBar options={options} value={value} />
    );

    fireEvent.click(getByText("英文"));

    expect(getByTestId("languageBar").textContent).toBe("中文英文英文");
  });
});
