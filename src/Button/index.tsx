import React from "react";

import {
  ButtonRoot,
  ButtonLabel,
  ButtonStartIcon,
  ButtonEndIcon,
  Ripple,
} from "./styled";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  color?:
    | "inherit"
    | "default"
    | "brand"
    | "primary"
    | "secondary"
    | "light"
    | "cheese";
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  onClick?: (e: React.MouseEvent | React.TouchEvent) => void;
};

export type RefType = HTMLButtonElement;

const index = React.forwardRef<RefType, ButtonProps>(
  (
    {
      className,
      color = "default",
      children,
      disabled = false,
      fullWidth = false,
      href,
      startIcon: startIconProp,
      endIcon: endIconProp,
      size = "medium",
      variant = "contained",
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const component = href ? "a" : "button";

    const styleProps = {
      color,
      variant,
      disabled,
      fullWidth,
      size,
      href,
      ...rest,
    };

    const startIcon = startIconProp && (
      <ButtonStartIcon {...styleProps}>{startIconProp}</ButtonStartIcon>
    );
    const endIcon = startIconProp && (
      <ButtonEndIcon {...styleProps}>{endIconProp}</ButtonEndIcon>
    );

    return (
      <ButtonRoot
        as={component}
        className={className}
        ref={ref}
        {...styleProps}>
        <ButtonLabel>
          {startIcon}
          {children}
          {endIcon}
        </ButtonLabel>
        <Ripple />
      </ButtonRoot>
    );
  }
);

export default index;
