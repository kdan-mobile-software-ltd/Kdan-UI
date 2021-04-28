import React from 'react';

import { LinkArrowIcon, TriangleUpIcon, TriangleDownIcon, CheckedIcon } from './index';
import { Container } from '../component/Decorator';

export default {
  title: 'Icon',
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: 'Icon',
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <>
    <LinkArrowIcon />
    <TriangleUpIcon />
    <TriangleDownIcon />
    <CheckedIcon />
  </>
);

Basic.args = {};
