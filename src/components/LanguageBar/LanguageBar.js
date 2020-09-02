import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BarWrapper, Menu } from './styled';

import LanguageBarBlock from './LanguageBarBlock';

const LanguageBar = ({
  options,
  value: defaultValue,
  onChange,
  ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onChangeHandle = (option) => {
    onChange(option);
    setValue(option.value);
  };

  return (
    <BarWrapper onClick={() => setIsOpen(!isOpen)}>
      <Menu isOpen={isOpen}>
        {options.map((option, index) => (
          <LanguageBarBlock
            isItem
            key={`${index}-${option.key}`}
            value={option.value}
            onChange={() => onChangeHandle(option)}
          />
        ))}
      </Menu>
      <LanguageBarBlock value={value} {...otherProps} />
    </BarWrapper>
  );
};

LanguageBar.defaultProps = {
  onChange: () => {}
};

LanguageBar.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export { LanguageBar };
