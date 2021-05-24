import React, { useState } from 'react';

import Checkbox, { CheckboxProps } from '.';
import { Container } from '../component/Decorator';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '復選框',
      },
    },
  },
};

export const Basic = (props: CheckboxProps): React.ReactNode => {
  const [isChecked, setChecked] = useState(false);
  return (
    <Checkbox
      {...props}
      onChange={() => {
        setChecked((current) => !current);
      }}
      checked={isChecked}
    />
  );
};

Basic.args = {
  label: 'test 123',
} as CheckboxProps;
