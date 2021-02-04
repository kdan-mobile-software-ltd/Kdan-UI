import React from "react";

import { FormControl, InputElement, InputLabel, HelpText } from "./styled";

export type TextfieldProps = {
  autoComplete?: "on" | "off";
  id?: string;
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
      color = "default",
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
    }: TextfieldProps,
    ref
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
    };

    return (
      <FormControl
        ref={ref}
        className={className}
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        color={color}>
        {label && (
          <InputLabel htmlFor={id}>
            {label} {required ? "*" : ""}
          </InputLabel>
        )}
        <InputElement
          as={multiline ? "textarea" : "input"}
          aria-label="input"
          {...InputProps}
        />
        {helperText && <HelpText>{helperText}</HelpText>}
      </FormControl>
    );
  }
);

export default Textfield;