import styled, { css } from 'styled-components';
import { color } from 'styled-system';
import colors from '../themes/colors';
import { TabsProps } from './index';

export const Wrapper = styled.div``;

type LabelProps = {
  isActive: boolean;
} & Pick<TabsProps, 'activeColor' | 'borderColor' | 'decoration'>;

export const Label = styled.span<LabelProps>`
  position: relative;
  min-width: 150px;
  width: 100%;
  text-align: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 0 8px 20px;
  margin-bottom: 16px;
  cursor: pointer;

  ${({ isActive, activeColor = colors.Y50, borderColor = colors.N35 }) => css`
    color: ${isActive ? activeColor : borderColor};
    border-bottom-style: solid;
    border-bottom-width: 4px;
    border-bottom-color: ${isActive ? activeColor : borderColor};

    :hover {
      color: ${activeColor};
    }

    :after {
      border-top-color: ${isActive ? activeColor : colors.Y50};
    }
  `}

  ${({ isActive, decoration }) =>
    decoration &&
    isActive &&
    css`
      :after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 7px 0 7px;
        border-left-color: transparent;
        border-right-color: transparent;
        left: 0;
        right: 0;
        bottom: -18px;
        margin: auto;
      }
    `}
`;

export const LabelGroup = styled.div`
  display: flex;
`;

export const LabelWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Panel = styled.div<{ isActive: boolean }>`
  display: none;

  ${({ isActive }) =>
    isActive &&
    `
      display: block;
    `}
`;

export const PanelGroup = styled.div`
  margin-top: 20px;
`;
