import React from "react";

import TypographyRoot from "./styled";

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  b1: "p",
  b2: "p",
  b3: "p",
  b4: "p",
  caption: "p",
  inherit: "p",
};

export type TypographyProps = {
  variant:
    | "b1"
    | "b2"
    | "b3"
    | "b4"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "caption";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  paragraph?: boolean;
  color?: "default" | "brand" | "primary" | "secondary" | string;
  hoverColor?: "default" | "brand" | "primary" | "secondary" | string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  children?: React.ReactNode;
  className?: string;
  display?: "block" | "initial" | "inline";
  noWrap?: boolean;
  breakAll?: boolean;
  dangerouslySetInnerHTML?: { __html: string };
};

export type RefType = HTMLDivElement;

const Typography = React.forwardRef<RefType, TypographyProps>(
  (
    {
      component,
      variant = "b1",
      color = "default",
      hoverColor = "default",
      align = "inherit",
      children,
      className = "",
      paragraph = false,
      display = "initial",
      noWrap = false,
      breakAll = false,
      dangerouslySetInnerHTML,
    }: TypographyProps,
    ref
  ) => {
    const htmlElement =
      component || (paragraph ? "p" : variantMapping[variant]) || "span";

    const styleProps = {
      variant,
      color,
      align,
      className,
      display,
      noWrap,
      hoverColor,
      breakAll,
      dangerouslySetInnerHTML,
    };

    return (
      <TypographyRoot as={htmlElement as never} ref={ref} {...styleProps}>
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
