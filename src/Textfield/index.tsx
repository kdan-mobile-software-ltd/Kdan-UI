import React from 'react';

import { FormControl, InputElement } from './styled';

import { InputLabel, HelperText, Required } from '../component/styled';

export type TextfieldProps = {
  autoComplete?: 'on' | 'off';
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  color?: string;
  type?: string;
  defaultValue?: string | number;
  helperText?: string;
  className?: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  error?: boolean;
  value?: string | number;
  placeholder?: string;
  autoFocus?: boolean;
  prefixClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RefType = HTMLInputElement;

const Textfield = React.forwardRef<RefType, TextfieldProps>(
  (
    {
      autoComplete,
      id,
      label,
      disabled = false,
      color = 'default',
      error,
      required = false,
      type,
      defaultValue,
      className,
      fullWidth = false,
      helperText,
      multiline,
      value,
      rows,
      onChange,
      onBlur,
      placeholder,
      autoFocus,
      prefixClassName = 'ku-textfield',
      ...rest
    }: TextfieldProps,
    ref,
  ) => {
    const InputProps = {
      autoComplete,
      id,
      disabled,
      defaultValue,
      rows,
      type,
      value,
      onChange,
      onBlur,
      placeholder,
      error,
      required,
      autoFocus,
      color,
      ...rest,
    };

    return (
      <FormControl ref={ref} className={className} fullWidth={fullWidth} disabled={disabled} error={error}>
        {label && (
          <InputLabel className={`${prefixClassName}-label`} error={!!error} htmlFor={id}>
            {label}
            {required ? <Required className={`${prefixClassName}-required-icon`}>*</Required> : ''}
          </InputLabel>
        )}
        <InputElement
          className={`${prefixClassName}-input`}
          as={multiline ? 'textarea' : 'input'}
          aria-label="input"
          {...InputProps}
        />
        {helperText && (
          <HelperText className={`${prefixClassName}-helper-text`} error={!!error}>
            {helperText}
          </HelperText>
        )}
      </FormControl>
    );
  },
);

Textfield.displayName = 'Textfield';

export default Textfield;
