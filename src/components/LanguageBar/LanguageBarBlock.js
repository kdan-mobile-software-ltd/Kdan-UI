import React from 'react';
import PropTypes from 'prop-types';

import { BlockWrapper, Arrow } from './styled';

const LanguageBarBlock = ({ value, isItem, onChange, isOpen, theme }) => {
  return (
    <BlockWrapper isItem={isItem} onClick={onChange} theme={theme}>
      {value}
      {!isItem && <Arrow isOpen={isOpen} />}
    </BlockWrapper>
  );
};

LanguageBarBlock.defaultProps = {
  isItem: false,
  onChange: () => {},
  isOpen: false
};

LanguageBarBlock.prototype = {
  value: PropTypes.string.isRequired,
  isItem: PropTypes.bool,
  onChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default LanguageBarBlock;
