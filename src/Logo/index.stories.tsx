import React from 'react';

import Logo from '.';
import { Container } from '../component/Decorator';

export default {
  title: 'Logo',
  component: Logo,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: 'Logo樣式',
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <>
    <Logo variant="logomark" />
    <hr />
    <Logo variant="wordmark" />
    <hr />
    <Logo variant="combine" />
    <hr />
    <Logo variant="kc-logomark" />
    <hr />
    <Logo variant="kc-combine" />
    <hr />
    <Logo variant="pdf-reader" />
    <Logo variant="animation-desk" />
    <Logo variant="noteledge" />
    <Logo variant="writeon-video" />
    <Logo variant="markup" />
    <Logo variant="pocket-scanner" />
    <Logo variant="kdan-cloud" />
    <Logo variant="dottedsign" />
  </>
);
