import React, { useEffect, useState } from 'react';

import Textfield from '../Textfield';
import ClickAwayListener from '../ClickAwayListener';
import { delay } from '../helpers/utility';

import { Wrapper, SelectController, MenuList, MenuItem, Triangle, Block, Selected, NativeInput } from './styled';

import { InputLabel, HelperText, Required } from '../component/styled';

export type ItemType = {
  key: string | number;
  value: string;
};

export type SelectProps = {
  options: ItemType[];
  onChange?: (select: ItemType) => void;
  position?: 'top' | 'bottom';
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
  prefixClassName?: string;
};

export type RefType = HTMLInputElement;

const Select = React.forwardRef<RefType, SelectProps>(
  (
    {
      options,
      defaultValue = '',
      fullWidth = false,
      disabled = false,
      onChange,
      position = 'bottom',
      className,
      enabledInput = false,
      placeholder,
      label,
      helperText,
      error,
      required,
      prefixClassName = 'ku-select',
      ...rest
    }: SelectProps,
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [selectIndex, setSelectIndex] = useState(-1);

    const handleClick = async () => {
      await delay(10);
      setOpen((current) => !current);
      setInputValue('');
      setSelectIndex(-1);
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

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        setSelectIndex((current) => current + 1);
      } else if (event.key === 'ArrowUp') {
        setSelectIndex((current) => current - 1);
      } else if (event.key === 'Enter') {
        const filteredArray = options.filter((item: ItemType) =>
          inputValue ? item.value.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) : true,
        );
        handleSelect(filteredArray[selectIndex]);
      }
    };

    useEffect(() => {
      setInputValue(defaultValue as string);
      setSelectValue(defaultValue as string);
    }, [defaultValue]);

    return (
      <Wrapper className={className} fullWidth={!!fullWidth} tabIndex={0} onKeyDown={handleKeyDown}>
        {label && (
          <InputLabel className={`${prefixClassName}-label`} error={!!error}>
            {label}
            {required ? <Required className={`${prefixClassName}-required-icon`}>*</Required> : ''}
          </InputLabel>
        )}
        <SelectController>
          {!open || !enabledInput ? (
            <Selected
              data-testid="selected"
              className={`${prefixClassName}-selected`}
              isActive={open}
              onClick={!open ? handleClick : undefined}
              error={!!error}
              disabled={!!disabled}
            >
              {selectValue || <span>{placeholder}</span>}
            </Selected>
          ) : null}
          {open && enabledInput ? (
            <Textfield
              value={inputValue}
              onChange={handleInputChange}
              disabled={disabled}
              placeholder={placeholder}
              fullWidth={fullWidth}
              error={error}
              autoFocus
            />
          ) : null}
          <NativeInput
            ref={ref}
            aria-hidden="true"
            type="text"
            className={`${prefixClassName}-nativeInput`}
            value={selectValue}
            onChange={handleInputChange}
            tabIndex={-1}
            {...rest}
          />
          <Triangle className={`${prefixClassName}-arrow`} position={position} onClick={handleClick} />

          <ClickAwayListener onClick={open ? handleBlur : undefined}>
            {open && !disabled && (
              <MenuList data-testid="menu-list" position={position}>
                {options &&
                  options
                    .filter((item: ItemType) =>
                      inputValue ? item.value.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) : true,
                    )
                    .map((item: ItemType, index: number) => (
                      <MenuItem
                        key={item.key}
                        isSelected={selectValue === item.value}
                        onClick={() => {
                          handleSelect(item);
                        }}
                        isFocus={index === selectIndex}
                      >
                        {item.value}
                      </MenuItem>
                    ))}
              </MenuList>
            )}
          </ClickAwayListener>
        </SelectController>
        {helperText && (
          <HelperText className={`${prefixClassName}-helper-text`} error={!!error}>
            {helperText}
          </HelperText>
        )}
        {disabled && <Block />}
      </Wrapper>
    );
  },
);

Select.displayName = 'Select';

export default Select;
