import React from "react";

import {
  ButtonRoot,
  ButtonLabel,
  ButtonStartIcon,
  ButtonEndIcon,
  Ripple,
} from "./styled";

export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isAnchor?: boolean;
  href?: string;
  color?:
    | "inherit"
    | "default"
    | "brand"
    | "primary"
    | "secondary"
    | "light"
    | "cheese"
    | string;
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  onClick?: (e: React.MouseEvent | React.TouchEvent) => void;
};

export type RefType = HTMLButtonElement;

const Button = React.forwardRef<RefType, ButtonProps>(
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
      isAnchor,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const component = isAnchor ? "a" : "button";

    const styleProps = {
      color,
      variant,
      disabled,
      fullWidth,
      size,
      href,
      isAnchor,
      ...rest,
    };

    const startIcon = startIconProp && (
      <ButtonStartIcon>{startIconProp}</ButtonStartIcon>
    );
    const endIcon = endIconProp && <ButtonEndIcon>{endIconProp}</ButtonEndIcon>;

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

export default Button;
