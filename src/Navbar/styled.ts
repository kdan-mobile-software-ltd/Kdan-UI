import styled from "styled-components";

import colors from "../themes/colors";
import breakpoints from "../themes/breakpoints";

export const Container = styled.nav`
  background: ${colors.N0};
  width: 100%;

  ${({ isFixed }: { isFixed: boolean }) =>
    isFixed
      ? `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        box-shadow:         
        0px 5px 7px 0px rgba(0, 0, 0, 0.15);      `
      : ""}
`;

export const Wrapper = styled.div`
  height: 70px;
  max-width: 1140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  box-sizing: border-box;
  margin: auto;

  @media ${breakpoints.up("md")} {
    height: 80px;
  }
`;

export const Menu = styled.div`
  display: inline-flex;
  overflow: hidden;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: ${colors.N0};
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${({ isCollapse }: { isCollapse: boolean }) =>
    isCollapse
      ? `
      height: 0;
    `
      : `
      height: 100vh;
    `}

  @media ${breakpoints.up("md")} {
    position: relative;
    height: auto;
    padding: 0;
    top: 0;
  }
`;

export const MenuWrapper = styled.div`
  margin: 16px;
  width: 100%;

  @media ${breakpoints.up("md")} {
    margin: 0;
  }
`;

export const MenuBtnWrapper = styled.span`
  display: inline-flex;

  @media ${breakpoints.up("md")} {
    display: none;
  }
`;
