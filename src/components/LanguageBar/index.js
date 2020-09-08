import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BarWrapper, Menu } from './styled';

import Block from './Block';
import ClickAwayListener from '../ClickAwayListener';

const LanguageBar = ({ options, value: defaultValue, onChange, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onChangeHandle = (option) => {
    onChange(option);
    setValue(option.value);
  };

  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <ClickAwayListener onClick={handleClickAway}>
      <BarWrapper onClick={() => setIsOpen(!isOpen)}>
        <Menu isOpen={isOpen}>
          {options.map((option, index) => (
            <Block
              theme={theme}
              isItem
              key={`${index}-${option.key}`}
              value={option.value}
              onChange={() => onChangeHandle(option)}
            />
          ))}
        </Menu>
        <Block value={value} theme={theme} isOpen={isOpen} />
      </BarWrapper>
    </ClickAwayListener>
  );
};

LanguageBar.defaultProps = {
  onChange: () => {},
  theme: 'default'
};

LanguageBar.propTypes = {
  options: PropTypes.array.isRequired,
  /**
    select 目前的值
  */
  value: PropTypes.string.isRequired,
  /**
    選擇後觸發事件，會回傳所選那個物件。
  */
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'dark'])
};

export default LanguageBar;
