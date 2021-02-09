import styled from "styled-components";

import colors from "../themes/colors";
import zIndex from "../themes/zIndex";
import { hexToRGBA } from "../helpers/utility";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ fullWidth }: { fullWidth: boolean }) =>
    fullWidth ? "100%" : "auto"};
`;

export const SelectController = styled.div`
  display: flex;
  position: relative;

  & > div,
  input {
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const MenuList = styled.div`
  position: absolute;
  background-color: ${colors.N0};
  left: 0;
  right: 0;
  border-radius: 4px;
  border: solid 1px ${colors.N15};
  padding: 8px 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  max-height: 360px;
  overflow-y: auto;
  z-index: ${zIndex.maximum};

  ${({ position }: { position: string }) =>
    position === "top"
      ? `
      bottom: 44px;
    `
      : `
      top: 44px;
    `}
`;

export const MenuItem = styled.div`
  padding: 8px;
  font-size: 14px;
  color: ${colors.N100};

  ${({ isSelected }: { isSelected: boolean }) =>
    isSelected
      ? `
      background-color: ${hexToRGBA(colors.N30, 0.6)};
    `
      : `
      :hover {
        background-color: ${hexToRGBA(colors.N10, 0.5)};
      }
    `}
`;

export const Triangle = styled.span`
  width: 0;
  height: 0;
  position: absolute;
  right: 12px;
  top: 14px;
  cursor: pointer;

  ${({ position }: { position: string }) =>
    position === "top"
      ? `
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid ${colors.N100};
  `
      : `
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid ${colors.N100};
  `}
`;

export const Block = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Selected = styled.div`
  font-size: 14px;
  color: ${colors.N100};
  min-height: 36px;
  padding: 9px 8px;
  border-radius: 2px;
  width: 100%;
  min-width: 164px;
  box-sizing: border-box;
  border: solid 1px ${colors.N15};
  cursor: pointer;
  background-color: ${colors.N0};

  ${({
    isActive,
    disabled,
    error,
  }: {
    isActive: boolean;
    disabled: boolean;
    error: boolean;
  }) => `
    border-color: ${isActive ? colors.B50 : colors.N15};
    background-color: ${disabled ? colors.N15 : colors.N0};

    ${
      error
        ? `
        border-color: ${colors.error};
      `
        : ""
    }
  `}

  :hover {
    background-color: ${colors.N10};
  }
`;
