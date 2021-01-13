import styled, { css, CSSObject } from "styled-components";
import { colors } from "../../themes";

type Theme = "default" | "dark";

type StyleType = {
  borderTop: string;
  color: string;
  backgroundColor: string;
  hover: CSSObject;
};

type ThemeHubType = {
  default: StyleType;
  dark: StyleType;
};

const themeHub: ThemeHubType = {
  default: {
    borderTop: `5px solid ${colors.N100}`,
    color: "rgb(64, 64, 64)",
    backgroundColor: colors.N0,
    hover: {
      color: "rgb(64, 64, 64)",
      backgroundColor: "#e6e6e6",
    },
  },
  dark: {
    borderTop: `5px solid ${colors.N0}`,
    color: colors.N0,
    backgroundColor: colors.N85,
    hover: {
      color: colors.N85,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
};

export const BarWrapper = styled.div`
  position: relative;
  display: block;
  margin: 15px auto 0;
  user-select: none;
  font-size: 0.8125rem;
`;

const BlockStyle = ({ isItem, theme }: { isItem: boolean; theme: Theme }) => {
  if (isItem) {
    return css`
      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:only-child {
        border-radius: 4px;
      }
      &:hover {
        color: ${themeHub[theme].hover.color};
        background-color: ${themeHub[theme].hover.backgroundColor};
      }
    `;
  } else {
    return css`
      border-radius: 4px;
    `;
  }
};

export const Arrow = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin: auto 0;

  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
      -moz-transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      -o-transform: rotate(-180deg);
      -ms-transform: rotate(-180deg);
      transform: rotate(-180deg);
    `};
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  padding: 5px 10px;
  margin: auto;
  font-size: 14px;
  cursor: pointer;

  color: ${({ theme }: { theme: Theme }) => themeHub[theme].color};
  background-color: ${({ theme }: { theme: Theme }) =>
    themeHub[theme].backgroundColor};

  ${BlockStyle};

  ${Arrow} {
    border-top: ${({ theme }: { theme: Theme }) => themeHub[theme].borderTop};
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  bottom: calc(100% + 3px);
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.N0};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;
