import React, { useEffect, useState } from "react";

import { CheckedIcon } from "../Icon";
import { getRandomInt } from "../helpers/utility";

import { Wrapper, Box, Input, Label } from "./styled";
import { Required } from "../component/styled";

export type CheckboxProps = {
  checked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  className?: string;
  error?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  label,
  onChange,
  disabled = false,
  required = false,
  id,
  className,
  error = false,
}: CheckboxProps) => {
  const defaultId = `checkbox_${getRandomInt(10000)}`;
  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((current) => {
      onChange && onChange(!current);
      return !current;
    });
  };

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Wrapper className={className}>
      <Box isChecked={isChecked} isDisabled={disabled} error={error}>
        <Input
          id={id || defaultId}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          data-testid="checkbox"
        />
        {isChecked && CheckedIcon && <CheckedIcon />}
      </Box>
      {label && (
        <Label
          htmlFor={id || defaultId}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}
      {required && <Required>*</Required>}
    </Wrapper>
  );
};

export default Checkbox;
