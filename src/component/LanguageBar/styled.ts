import styled, { css } from 'styled-components';
import { colors } from '../../themes';

const themeHub: Record<string, any> = {
  default: {
    borderTop: `5px solid ${colors.black}`,
    color: 'rgb(64, 64, 64)',
    backgroundColor: colors.white,
    hover: {
      color: 'rgb(64, 64, 64)',
      backgroundColor: '#e6e6e6'
    }
  },
  dark: {
    borderTop: `5px solid ${colors.white}`,
    color: colors.white,
    backgroundColor: colors.bunting,
    hover: {
      color: colors.bunting,
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  }
};

export const BarWrapper = styled.div`
  position: relative;
  display: block;
  margin: 15px auto 0;
  user-select: none;
  font-size: 0.8125rem;
`;

const BlockStyle = ({ isItem, theme }: { isItem: boolean, theme: string }) => {
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

  color: ${({ theme }) => themeHub[theme].color};
  background-color: ${({ theme }) => themeHub[theme].backgroundColor};

  ${BlockStyle};

  ${Arrow} {
    border-top: ${({ theme }) => themeHub[theme].borderTop};
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  bottom: calc(100% + 3px);
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;
