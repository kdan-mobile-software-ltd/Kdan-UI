import React from 'react';

import Navbar from '.';
import Logo from '../Logo';
import Button from '../Button';
import Box from '../Box';
import { Container } from '../component/Decorator';

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '導覽列',
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <>
    <Navbar isFixed brand={<Logo variant="combine" href="https://kdanmobile.com" />}>
      {<Button>Click</Button>}
    </Navbar>
  </>
);

export const WithHintBar = (): React.ReactNode => (
  <>
    <Box width="100%" height="70px" bg="bisque">
      這是一個Bar
    </Box>
    <Navbar isFixed brand={<Logo variant="combine" href="https://kdanmobile.com" />}>
      {<Button>Click</Button>}
    </Navbar>
  </>
);
