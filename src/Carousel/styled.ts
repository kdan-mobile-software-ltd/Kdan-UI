import styled from "styled-components";

import { hexToRGBA } from "../helpers/utility";
import colors from "../themes/colors";
import breakpoints from "../themes/breakpoints";
import zIndex from "../themes/zIndex";

export const Wrapper = styled.div`
  margin: auto;
  position: relative;
  width: 100%;
  min-width: 275px;
  max-width: 1080px;
  padding: 36px;
  display: inline-block;

  @media ${breakpoints.down("lg")} {
    padding: 0 0 36px;
  }
  @media ${breakpoints.down("md")} {
    padding: 0 0 32px;
  }
`;

export const ArrowBtn = styled.span`
  padding: 0 6px;
  display: none;
  cursor: pointer;
  margin: 0 14px;

  @media ${breakpoints.down("lg")} {
    display: inline-flex;
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
  z-index: ${zIndex[2]};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isDisabled, mode }: { isDisabled?: boolean; mode: string }) =>
    isDisabled
      ? `
      background-color: ${colors.N15};
      cursor: default;
    `
      : `
      background-color: ${mode === "dark" ? colors.N100 : colors.P50};
      cursor: pointer;

      :hover {
        background-color: ${
          mode === "dark"
            ? hexToRGBA(colors.N100, 0.8)
            : hexToRGBA(colors.P50, 0.8)
        };
      }
    `}

  @media ${breakpoints.down("lg")} {
    display: none;
  }
`;

export const LeftBtn = styled(IconButton)`
  left: 0;
`;

export const RightBtn = styled(IconButton)`
  right: 0;
`;

export const ElementsContainer = styled.div<{
  showBorder: boolean;
  showShadow: boolean;
}>`
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: auto;
  border: ${({ showBorder }) =>
    showBorder ? `1px solid ${colors.N15}` : "none"};
  border-radius: 4px;
  box-shadow: ${({ showShadow }) =>
    showShadow ? "0 0 20px 0 rgba(130, 130, 130, 0.25)" : ""};
`;

export const ElementsOuter = styled.div<{
  width: string;
  move: number;
  playing: boolean;
}>`
  display: flex;
  transform: ${({ move }) => `translateX(${move}px)`};
  transition: ${({ playing }) =>
    playing ? "transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" : "unset"};
  width: ${({ width }) => width};
`;

export const ElementWrapper = styled.div`
  width: 100%;
`;

export const DotWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -20px;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  display: block;
  cursor: pointer;
  margin: 6px;

  background-color: ${({ isActive }: { isActive?: boolean }) =>
    isActive ? colors.N100 : colors.N15};
`;
