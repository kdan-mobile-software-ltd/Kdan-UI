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
  height: 80px;
  max-width: 1160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  margin: auto;

  @media ${breakpoints.down("md")} {
    padding: 0 16px;
    height: 70px;
  }
`;

export const Menu = styled.div`
  display: inline-flex;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: ${colors.N0};
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 9999;

  @media ${breakpoints.down("md")} {
    ${({ isCollapse }: { isCollapse: boolean }) =>
      isCollapse
        ? `
      height: 0;
    `
        : `
      height: 100vh;
    `}

    position: fixed;
    padding: 0;
    top: 70px;
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
