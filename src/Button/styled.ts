import styled, { keyframes } from 'styled-components';

import { ButtonProps } from './index';
import fonts from '../themes/fonts';
import colors from '../themes/colors';
import zIndex from '../themes/zIndex';
import breakpoints from '../themes/breakpoints';

import { pxToRem } from '../helpers/utility';

type buildThemeType = (color?: string, variant?: string, backgroundColor?: string) => string;

const buildTheme: buildThemeType = (color, variant, backgroundColor) => {
  if (color === 'default' && variant === 'contained') {
    return `
      color: ${colors.N0};
      background-color: ${colors.N100};

      :hover {
        opacity:0.7;
      }
    `;
  } else if (color === 'light' && variant === 'contained') {
    return `
      color: ${colors.N100};
      background-color: ${colors.N0};

      :hover {
        opacity:0.7;
      }
    `;
  } else if (color === 'default' && variant === 'outlined') {
    return `
      color: ${colors.N100};
      border-color: ${colors.N100};
      background-color: inherit;

      :hover {
        opacity:0.7;
      }
    `;
  } else if (color === 'default' && variant === 'text') {
    return `
      color: ${colors.N100};
      background-color: inherit;

      :hover {
        opacity:0.7;
      }
    `;
  } else if (color === 'brand' && variant === 'text') {
    return `
      color: ${colors.brand};
      background-color: inherit;

      :hover {
        opacity:0.7;
      }
    `;
  } else if (color === 'cheese' && variant === 'contained') {
    return `
      color: ${colors.N100};
      background-color: ${colors.Y50};
      
      :hover {
        opacity:0.7;
      }
    `;
  } else if (variant === 'outlined' || variant === 'text') {
    return `
      color: ${(color && colors[color]) || color};

      :hover {
        opacity:0.7;
      }
    `;
  } else {
    return `
      color: ${(color && colors[color]) || color};
      background-color: ${backgroundColor || colors.N100};

      :hover {
        opacity:0.7;
      }
    `;
  }
};

const buildSize = (size = 'medium', isAnchor = false) => {
  if (isAnchor) {
    if (size === 'small') {
      return `
        font-size: ${pxToRem(12)};
      `;
    } else if (size === 'medium') {
      return `
        font-size: ${pxToRem(16)};
      `;
    }
    return `
      font-size: ${pxToRem(20)};

      @media ${breakpoints.down('lg')} {
        font-size: ${pxToRem(16)};
      }
    `;
  } else if (size === 'small') {
    return `
      font-size: ${pxToRem(14)};
    `;
  } else if (size === 'medium') {
    return `
      font-size: ${pxToRem(16)};
    `;
  } else {
    return `
      font-size: ${pxToRem(22)};

      @media ${breakpoints.down('lg')} {
        font-size: ${pxToRem(16)};
      }
    `;
  }
};

const buildVariant = (size = 'medium', variant = 'contained') => {
  if (size === 'small' && variant === 'contained') {
    return `
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.13), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.05);
      padding: 5px 11px;
    `;
  } else if (size === 'small' && variant === 'outlined') {
    return `
      border: 2px solid;
      padding: 3px 9px;
    `;
  } else if (size === 'medium' && variant === 'contained') {
    return `
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.13), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.05);
      padding: 8px 18px;
    `;
  } else if (size === 'medium' && variant === 'outlined') {
    return `
      border: 2px solid;
      padding: 6px 16px;
    `;
  } else if (size === 'large' && variant === 'contained') {
    return `
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.13), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.05);
      padding: 10px 22px;
    `;
  } else if (size === 'large' && variant === 'outlined') {
    return `
      border: 2px solid;
      padding: 8px 20px;
    `;
  } else if (variant === 'text') {
    return `
      border-radius: 0;
      padding: 2px;
      line-height: 1.1;
    `;
  }
};

const buildDisabled = (isDisabled = false) =>
  isDisabled
    ? `
  color: ${colors.N10};
  box-shadow: none;
  background-color: ${colors.N30};
  cursor: default;
`
    : '';

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
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ size, variant, color, backgroundColor, disabled, isAnchor }: ButtonProps) =>
    `
    ${buildSize(size, isAnchor)}
    ${buildVariant(size, variant)}
    ${!disabled ? buildTheme(color, variant, backgroundColor) : ''}
    ${buildDisabled(disabled)}
    ${
      isAnchor
        ? `
        text-decoration: none;
        &:visited {
          color: none;
        }
      `
        : ''
    }
  `}

  :focus:not(:active) span::after {
    animation: ${activeAnimation} 0.4s linear;
  }
`;

export const Ripple = styled.span`
  display: block;
  position: relative;
  z-index: ${zIndex[1]};

  &::after {
    content: '';
    position: absolute;
    z-index: ${zIndex.minimum};
    top: calc(50% - 35px);
    left: calc(50% - 25px);
    background-color: rgba(255, 255, 255, 0.2);
    width: 50px;
    height: 50px;
    border-radius: 100%;
    transform: scale(0);
  }
`;

export const ButtonLabel = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const ButtonStartIcon = styled.span`
  margin-right: 8px;
  display: flex;
`;

export const ButtonEndIcon = styled.span`
  margin-left: 8px;
  display: flex;
`;
