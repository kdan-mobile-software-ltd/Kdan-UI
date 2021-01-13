import React, { useState } from "react";

import { BarWrapper, Menu } from "./styled";

import Block from "./Block";
import ClickAwayListener from "../ClickAwayListener";

type OptionType = {
  key: string | number;
  value: React.ReactNode;
};

type Props = {
  options: OptionType[];
  value: React.ReactNode;
  onChange?: (value: OptionType) => void;
  theme?: "default" | "dark";
};

const LanguageBar: React.FC<Props> = ({
  options,
  value: defaultValue,
  onChange = () => {
    // do something;
  },
  theme = "default",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onChangeHandle = (option: OptionType) => {
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
      <BarWrapper onClick={() => setIsOpen(!isOpen)} data-testid="languageBar">
        <Menu isOpen={isOpen}>
          {options &&
            options.map((option, index) => (
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

export default LanguageBar;
