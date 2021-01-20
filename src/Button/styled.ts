import styled, { keyframes } from "styled-components";

import { ButtonProps } from "./index";
import fonts from "../themes/fonts";
import colors from "../themes/colors";
import { pxToRem, hexToRGBA } from "../helpers/utility";

const buildTheme = (color = "default", variant = "contained") => {
  if (color === "default" && variant === "contained") {
    return `
      color: ${colors.N0};
      background-color: ${colors.N100};

      :hover {
        color: ${colors.N0};
        background-color: ${hexToRGBA(colors.N100, 0.7)};
      }
    `;
  } else if (color === "light" && variant === "contained") {
    return `
      color: ${colors.N100};
      background-color: ${colors.N0};

      :hover {
        color: ${colors.N100};
        background-color: ${hexToRGBA(colors.N100, 0.1)};
      }
    `;
  } else if (color === "default" && variant === "outlined") {
    return `
      border-color: ${colors.N100};
      background-color: inherit;

      :hover {
        color: ${colors.N0};
        background-color: ${colors.N100};
      }
    `;
  } else if (color === "default" && variant === "text") {
    return `
      color: ${colors.N100};
      background-color: inherit;

      :hover {
        color: ${hexToRGBA(colors.N100, 0.7)};
      }
    `;
  } else if (color === "brand" && variant === "text") {
    return `
      color: ${colors.brand};
      background-color: inherit;

      :hover {
        color: ${hexToRGBA(colors.brand, 0.7)};
      }
    `;
  } else if (color === "cheese" && variant === "contained") {
    return `
      color: ${colors.N100};
      background-color: ${colors.Y50};
      
      :hover {
        background-color: ${hexToRGBA(colors.Y50, 0.7)};
      }
    `;
  }
};

const buildSize = (size = "medium") => {
  if (size === "small") {
    return `
      font-size: ${pxToRem(14)};
      padding: 4px 10px;
    `;
  } else if (size === "medium") {
    return `
      font-size: ${pxToRem(15)};
      padding: 6px 16px;
    `;
  } else {
    return `
      font-size: ${pxToRem(16)};
      padding: 8px 22px;
    `;
  }
};

const buildVariant = (size = "medium", variant = "contained") => {
  if (size === "small" && variant === "contained") {
    return `
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.13), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.05);
      padding: 4px 10px;
    `;
  } else if (size === "small" && variant === "outlined") {
    return `
      border: 2px solid;
      padding: 2px 8px;
    `;
  } else if (size === "medium" && variant === "contained") {
    return `
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.13), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.05);
      padding: 7px 17px;
    `;
  } else if (size === "medium" && variant === "outlined") {
    return `
      border: 2px solid;
      padding: 5px 15px;
    `;
  } else if (size === "large" && variant === "contained") {
    return `
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.13), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.05);
      padding: 9px 22px;
    `;
  } else if (size === "large" && variant === "outlined") {
    return `
      border: 2px solid;
      padding: 7px 20px;
    `;
  } else if (variant === "text") {
    return `padding: 1px;`;
  }
};

const buildDisabled = (isDisabled = false) =>
  isDisabled
    ? `
  color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: default;
`
    : "";

const activeAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  } 
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(5);
    opacity: 0;
  }
`;

export const ButtonRoot = styled.div`
  border-radius: 4px;
  outline: 0;
  border: 0;
  font-family: ${fonts.button};
  font-weight: 500;
  line-height: 1.5;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size, variant, color, disabled }: ButtonProps) =>
    `
    ${buildSize(size)}
    ${buildVariant(size, variant)}
    ${!disabled ? buildTheme(color, variant) : ""}
    ${buildDisabled(disabled)}
  `}

  :focus:not(:active) span::after {
    animation: ${activeAnimation} 0.4s linear;
  }
`;

export const Ripple = styled.span`
  display: block;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: calc(50% - 35px);
    left: calc(50% - 25px);
    background: rgba(255, 255, 255, 0.3);
    width: 50px;
    height: 50px;
    border-radius: 100%;
    transform: scale(0);
  }
`;

export const ButtonLabel = styled.span``;

export const ButtonStartIcon = styled.span``;

export const ButtonEndIcon = styled.span``;
