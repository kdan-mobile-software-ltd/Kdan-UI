import React from 'react';

import { Container } from '../Decorator';
import FeatureScrollBar from './';

export default {
  component: FeatureScrollBar,
  title: 'FeatureScrollBar',
  decorators: [(story) => <Container styleType='middle'>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: 'FeatureBanner 裡面需要用到的 scroll bar。'
      }
    }
  }
};

export const Base = (args) => <FeatureScrollBar {...args} />;
Base.args = {
  isFixed: false,
  max: 3,
  now: 1,
  top: '0px',
  left: '0px'
};
