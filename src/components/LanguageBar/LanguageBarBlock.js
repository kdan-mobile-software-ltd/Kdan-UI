import React from 'react';
import PropTypes from 'prop-types';

import { BlockWrapper, BarIcon } from './styled';

const LanguageBarBlock = ({ value, isItem, onChange }) => {
  return (
    <BlockWrapper isItem={isItem} onClick={onChange}>
      {value}
      {!isItem && <BarIcon />}
    </BlockWrapper>
  );
}

LanguageBarBlock.defaultProps = {
  isItem: false,
  onChange: () => {}
};

LanguageBarBlock.prototype = {
  value: PropTypes.string.isRequired,
  isItem: PropTypes.bool,
  onChange: PropTypes.func,
};

export default LanguageBarBlock;