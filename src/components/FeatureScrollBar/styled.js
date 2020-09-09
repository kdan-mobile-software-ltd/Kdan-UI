import styled, { css } from 'styled-components';
import { layout, space } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { colors, size } from '../../themes';

export const BarOuter = styled.div`
  width: 6px;
  height: ${size.bar_height}px;
  border: 0 solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);

  ${({ isFixed, top, left, right }) =>
    isFixed &&
    css`
      position: fixed;
      top: ${top};
      left: ${left};
      right: ${right};
    `}

  ${layout}
  ${space}
`;

export const Bar = styled.div`
  width: 6px;
  height: ${({ value }) => value + '%'};
  transition: height 0.8s;
  border: 0 solid ${colors.white};
  border-radius: 10px;
  background: ${colors.white};
`;

BarOuter.prototype = {
  ...propTypes.layout,
  ...propTypes.space
};
