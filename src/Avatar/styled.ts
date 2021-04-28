import styled from 'styled-components';

import colors from '../themes/colors';
import fonts from '../themes/fonts';
import { pxToRem } from '../helpers/utility';

const sizeMap = {
  small: `
    width: 32px;
    height: 32px;
    font-size: ${pxToRem(16)};
  `,
  medium: `
    width: 48px;
    height: 48px;
    font-size: ${pxToRem(26)};
  `,
  large: `
    width: 60px;
    height: 60px;
    font-size: ${pxToRem(32)};
  `,
  xl: `
    width: 132px;
    height: 132px;
    font-size: ${pxToRem(48)};
  `,
};

export const Wrapper = styled.div<{
  size: 'small' | 'medium' | 'large' | 'xl';
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  font-family: ${fonts.typography};
  background-color: ${colors.N40};
  line-height: 1;

  ${({ size }) => sizeMap[size]}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
`;
