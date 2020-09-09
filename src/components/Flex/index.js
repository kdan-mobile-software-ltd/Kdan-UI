import styled from 'styled-components';
import { flexbox, layout } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${layout}
`;

Flex.displayName = 'Flex';

Flex.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.layout
};

export default Flex;
