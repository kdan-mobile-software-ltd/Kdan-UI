import styled from 'styled-components';
import { layout, color, flexbox, space } from 'styled-system';

import propTypes from '@styled-system/prop-types';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-overflow-scrolling: touch;

  ${color}
  ${layout}
  ${flexbox}
  ${space}
`;

Container.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.space
};
