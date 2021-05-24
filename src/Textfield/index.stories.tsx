import React from 'react';
import styled from 'styled-components';

import Textfield, { TextfieldProps } from '.';
import { Container } from '../component/Decorator';

export default {
  title: 'Textfield',
  component: Textfield,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '輸入框',
      },
    },
  },
};

export const Basic = (): React.ReactNode => <Textfield label="Basic" required />;

Basic.args = {} as TextfieldProps;

export const CustomContent = (props: TextfieldProps): React.ReactNode => <Textfield {...props} />;

CustomContent.args = {} as TextfieldProps;

const CustomWrapper = styled.div`
  .ku-textfield-label {
    color: blue;
  }
  .ku-textfield-required-icon {
    color: red;
  }
  .ku-textfield-input {
    color: saddlebrown;
  }
  .ku-textfield-helper-text {
    color: saddlebrown;
  }
`;

export const CustomStyle = (props: TextfieldProps): React.ReactNode => (
  <CustomWrapper>
    <Textfield {...props} />
  </CustomWrapper>
);

CustomStyle.args = {
  label: 'Custom Style',
  required: true,
  placeholder: 'placeholder',
  defaultValue: '123',
  helperText: '123',
} as TextfieldProps;
