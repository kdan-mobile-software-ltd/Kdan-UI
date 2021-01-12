import React from 'react';
import PropTypes from 'prop-types';

import { BlockWrapper, Arrow } from './styled';

type Props = {
  value: React.ReactNode;
  isItem?: boolean;
  onChange?: () => void;
  isOpen?: boolean;
  theme?: string;
};

const Block: React.FC<Props> = ({
  value,
  isItem = false,
  onChange = () => {},
  isOpen = false,
  theme,
}) => {
  return (
    <BlockWrapper isItem={isItem} onClick={onChange} theme={theme}>
      {value}
      {!isItem && <Arrow isOpen={isOpen} />}
    </BlockWrapper>
  );
};

export default Block;
