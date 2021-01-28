import styled from "styled-components";
import { rgba } from "polished";

import colors from "../themes/colors";
import { device } from "../themes/breakpoint";

export const Wrapper = styled.div`
  margin: auto;
  position: relative;
  max-width: 1080px;
  min-width: 275px;
  padding: 36px;
  display: inline-block;
`;

export const ArrowBtn = styled.span`
  padding: 0 6px;
  display: inline-flex;
  cursor: pointer;
  margin: 0 14px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const IconButton = styled.button`
  outline: none;
  border: 0;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.13),
    0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.05);
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: absolute;
  top: calc(50% - 36px);
  z-index: 10;

  ${({ isDisabled, mode }: { isDisabled?: boolean; mode: string }) =>
    isDisabled
      ? `
      background-color: ${colors.N10};
      cursor: default;
    `
      : `
      background-color: ${mode === "dark" ? colors.N100 : colors.P50};
      cursor: pointer;

      :hover {
        background-color: ${
          mode === "dark" ? rgba(colors.N100, 0.8) : rgba(colors.P50, 0.8)
        };
      }
    `}

  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const LeftBtn = styled(IconButton)`
  left: 0;
`;

export const RightBtn = styled(IconButton)`
  right: 0;
`;

export const ElementsContainer = styled.div`
  overflow: hidden;
  width: auto;
  height: 100%;
  max-width: ${({ width }: { width: number }) => width}px;
  margin: auto;
`;

export const ElementsOuter = styled.div`
  display: flex;
  width: fit-content;
  transform: ${({ move }: { move: number }) =>
    move ? `translateX(-${move}px)` : 0};
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const ElementWrapper = styled.div`
  width: 100%;
`;

export const DotWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  margin: 5px;

  background-color: ${({ isActive }: { isActive?: boolean }) =>
    isActive ? colors.N100 : colors.N10};
`;
