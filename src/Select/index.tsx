import React, { useEffect, useState } from "react";

import Textfield from "../Textfield";
import ClickAwayListener from "../ClickAwayListener";

import {
  Wrapper,
  SelectController,
  MenuList,
  MenuItem,
  Triangle,
  Block,
  Selected,
} from "./styled";

import { InputLabel, HelpText, Required } from "../component/styled";

export type ItemType = {
  key: string | number;
  value: string;
};

export type SelectProps = {
  options: ItemType[];
  onChange?: (select: ItemType) => void;
  position?: "top" | "bottom";
  enabledInput?: boolean;
  defaultValue?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
};

export type RefType = HTMLInputElement;

const Select = React.forwardRef<RefType, SelectProps>(
  (
    {
      options,
      defaultValue,
      fullWidth = false,
      disabled = false,
      onChange,
      position = "bottom",
      className,
      enabledInput = false,
      placeholder,
      label,
      helperText,
      error,
      required,
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

    const handleSelect = (select: ItemType) => {
      setInputValue(select.value);
      setSelectValue(select.value);
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
      setInputValue(defaultValue as string);
      setSelectValue(defaultValue as string);
    }, [defaultValue]);

    return (
      <Wrapper className={className} fullWidth={!!fullWidth}>
        {label && (
          <InputLabel error={!!error}>
            {label}
            {required ? <Required>*</Required> : ""}
          </InputLabel>
        )}
        <SelectController>
          {!open || !enabledInput ? (
            <Selected
              data-testid="selected"
              isActive={open}
              onClick={handleClick}
              error={!!error}
              disabled={!!disabled}>
              {selectValue || <span>{placeholder}</span>}
            </Selected>
          ) : null}
          {open && enabledInput ? (
            <Textfield
              ref={ref}
              value={inputValue}
              onChange={handleInputChange}
              disabled={disabled}
              placeholder={placeholder}
              error={error}
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
                          handleSelect(item);
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
