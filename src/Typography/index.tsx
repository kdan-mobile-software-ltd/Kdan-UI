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
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
};

export type TypographyProps = {
  variant:
    | "body1"
    | "body2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2";
  paragraph?: boolean;
  color?: "inherit" | "brand" | "primary" | "secondary" | string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  children: React.ReactNode;
  className?: string;
  display?: "block" | "initial" | "inline";
  noWrap?: boolean;
};

export type RefType = HTMLDivElement;

const Typography = React.forwardRef<RefType, TypographyProps>(
  (
    {
      variant = "body1",
      color = "inherit",
      align = "inherit",
      children,
      className = "",
      paragraph = false,
      display = "initial",
      noWrap = false,
    }: TypographyProps,
    ref
  ) => {
    const component = (paragraph ? "p" : variantMapping[variant]) || "span";

    const styleProps = {
      variant,
      color,
      align,
      className,
      display,
      noWrap,
    };

    return (
      <TypographyRoot as={component as never} ref={ref} {...styleProps}>
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
