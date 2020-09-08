import React from 'react';
import PropTypes from 'prop-types';

import { BlockWrapper, Arrow } from './styled';

const Block = ({ value, isItem, onChange, isOpen, theme }) => {
  return (
    <BlockWrapper isItem={isItem} onClick={onChange} theme={theme}>
      {value}
      {!isItem && <Arrow isOpen={isOpen} />}
    </BlockWrapper>
  );
};

Block.defaultProps = {
  isItem: false,
  onChange: () => {},
  isOpen: false
};

Block.prototype = {
  value: PropTypes.string.isRequired,
  isItem: PropTypes.bool,
  onChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Block;
