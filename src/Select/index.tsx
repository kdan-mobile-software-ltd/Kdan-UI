import React, { useEffect, useState } from "react";

import Textfield, { TextfieldProps } from "../Textfield";
import ClickAwayListener from "../ClickAwayListener";

import {
  Wrapper,
  SelectController,
  MenuList,
  MenuItem,
  Triangle,
  Block,
  Selected,
  InputLabel,
  HelpText,
} from "./styled";

export type ItemType = {
  key: string | number;
  value: string;
};

export type SelectProps = TextfieldProps & {
  options: ItemType[];
  onChange?: (select: string) => void;
  position?: "top" | "bottom";
  disabledInput?: boolean;
};

export type RefType = HTMLInputElement;

const Select = React.forwardRef<RefType, SelectProps>(
  (
    {
      options,
      value,
      fullWidth,
      disabled,
      onChange,
      position = "bottom",
      className,
      disabledInput,
      placeholder,
      label,
      helperText,
      error,
      ...rest
    }: SelectProps,
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [selectValue, setSelectValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
      setOpen((current) => !current);
      setInputValue("");
    };

    const handleSelect = (select: string) => {
      setInputValue(select);
      setSelectValue(select);
      setOpen(false);
      onChange && onChange(select);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleBlur = () => {
      setOpen(false);
    };

    useEffect(() => {
      setInputValue(value as string);
      setSelectValue(value as string);
    }, [value]);

    return (
      <Wrapper className={className} fullWidth={!!fullWidth}>
        {label && <InputLabel error={!!error}>{label}</InputLabel>}
        <SelectController>
          {!open || disabledInput ? (
            <Selected
              data-testid="selected"
              isActive={open}
              onClick={handleClick}
              error={!!error}
              disabled={!!disabled}>
              {selectValue || placeholder}
            </Selected>
          ) : null}
          {open && !disabledInput ? (
            <Textfield
              ref={ref}
              value={inputValue}
              onChange={handleInputChange}
              disabled={disabled}
              placeholder={placeholder}
              error={error}
              fullWidth
              autoFocus
              {...rest}
            />
          ) : null}
          <Triangle position={position} onClick={handleClick} />

          {open && !disabled && (
            <ClickAwayListener onClick={handleBlur}>
              <MenuList data-testid="menu-list" position={position}>
                {options &&
                  options
                    .filter((item: ItemType) =>
                      inputValue
                        ? item.value
                            .toLocaleLowerCase()
                            .includes(inputValue.toLocaleLowerCase())
                        : true
                    )
                    .map((item: ItemType) => (
                      <MenuItem
                        key={item.key}
                        isSelected={selectValue === item.value}
                        onClick={() => {
                          handleSelect(item.value);
                        }}>
                        {item.value}
                      </MenuItem>
                    ))}
              </MenuList>
            </ClickAwayListener>
          )}
        </SelectController>
        {helperText && <HelpText>{helperText}</HelpText>}
        {disabled && <Block />}
      </Wrapper>
    );
  }
);

export default Select;
