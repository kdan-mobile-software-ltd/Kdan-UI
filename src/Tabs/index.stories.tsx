import React from 'react';

import Tabs, { TabsProps } from './';
import { Container } from '../component/Decorator';
import colors from '../themes/colors';

export default {
  title: 'Tabs',
  component: Tabs,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: 'Tabs',
      },
    },
  },
};

const tabs = [
  {
    label: 'Simple Integration Process',
    content: 'content 1',
  },
  {
    label: 'Smooth and Secure Delivery Flow',
    content: 'content 2',
  },
  {
    label: 'Real-Time Tracking and Management',
    content: 'content 3',
  },
];

export const Basic = (props: TabsProps): React.ReactNode => <Tabs {...props} />;

Basic.args = {
  tabs,
} as TabsProps;

export const NoDecoration = (props: TabsProps): React.ReactNode => <Tabs {...props} />;

NoDecoration.args = {
  tabs,
  decoration: false,
} as TabsProps;

export const CustomStyle = (props: TabsProps): React.ReactNode => <Tabs {...props} />;

CustomStyle.args = {
  tabs,
  activeColor: colors.WO,
  borderColor: colors.secondary,
} as TabsProps;
