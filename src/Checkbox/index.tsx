import React, { useEffect, useState } from 'react';

import { CheckedIcon } from '../Icon';
import { getRandomInt } from '../helpers/utility';

import { Wrapper, Box, Input, Label } from './styled';
import { Required } from '../component/styled';

export type CheckboxProps = {
  checked?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
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
  name = '',
  className,
  error = false,
}: CheckboxProps) => {
  const defaultId = `checkbox_${getRandomInt(10000)}`;
  const [isChecked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((current) => {
      onChange && onChange(e);
      return !current;
    });
  };

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Wrapper className={className}>
      <Box isDisabled={disabled} error={error}>
        <Input
          id={id || defaultId}
          name={name}
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          data-testid='checkbox'
        />
        {isChecked && CheckedIcon && <CheckedIcon />}
      </Box>
      {label && <Label htmlFor={id || defaultId} dangerouslySetInnerHTML={{ __html: label }} />}
      {required && <Required>*</Required>}
    </Wrapper>
  );
};

export default Checkbox;
