import React from 'react';
import PropTypes from 'prop-types';

import { BlockWrapper, BarIcon } from './styled';

const LanguageBarBlock = ({ value, isItem, onChange, ...otherProps }) => {
  return (
    <BlockWrapper isItem={isItem} onClick={onChange} {...otherProps}>
      {value}
      {!isItem && <BarIcon />}
    </BlockWrapper>
  );
};

LanguageBarBlock.defaultProps = {
  isItem: false,
  onChange: () => {}
};

LanguageBarBlock.prototype = {
  value: PropTypes.string.isRequired,
  isItem: PropTypes.bool,
  onChange: PropTypes.func
};

export default LanguageBarBlock;
