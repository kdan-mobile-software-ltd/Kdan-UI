import styled, { css } from "styled-components";
import colors from "../../themes/colors";

export const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 4px;
`;

export const Bun = styled.span`
  display: block;
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: ${colors.N100};
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  position: relative;
  margin: auto;
  transform: scale(0.8);

  ${({ sequence, isActive }: { sequence: string; isActive: boolean }) => {
    if (sequence === "top") {
      return css`
        transform: ${isActive ? "rotate(45deg) translate(6px, 6px)" : ""};
        top: 4px;
      `;
    } else if (sequence === "middle") {
      return css`
        top: 9px;
        opacity: ${isActive ? 0 : 1};
      `;
    } else {
      return css`
        top: 14px;
        transform: ${isActive ? "rotate(-45deg) translate(6px, -6px)" : ""};
      `;
    }
  }}
`;
