import React from 'react';

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

export const Basic = (): React.ReactNode => <Textfield label='Basic' required />;

Basic.args = {} as TextfieldProps;

export const CustomContent = (props: TextfieldProps): React.ReactNode => <Textfield {...props} />;

CustomContent.args = {} as TextfieldProps;
