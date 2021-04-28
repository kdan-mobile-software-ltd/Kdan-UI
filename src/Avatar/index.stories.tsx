import React from 'react';

import Avatar, { AvatarProps } from './';
import { Container, Paper } from '../component/Decorator';

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '頭像',
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <Paper>
    <Avatar
      size='small'
      alt='Jolly'
      src='https://i0.wp.com/tw-blog.kdanmobile.com/wp-content/uploads/2019/04/Kdan-Jolly-02.jpg'
    />
    <Avatar alt='Jolly' src='https://i0.wp.com/tw-blog.kdanmobile.com/wp-content/uploads/2019/04/Kdan-Jolly-02.jpg' />
    <Avatar
      size='large'
      alt='Jolly'
      src='https://i0.wp.com/tw-blog.kdanmobile.com/wp-content/uploads/2019/04/Kdan-Jolly-02.jpg'
    />
    <Avatar
      size='xl'
      alt='Jolly'
      src='https://i0.wp.com/tw-blog.kdanmobile.com/wp-content/uploads/2019/04/Kdan-Jolly-02.jpg'
    />
  </Paper>
);

Basic.args = {} as AvatarProps;

export const Letter = (): React.ReactNode => (
  <Paper>
    <Avatar size='small'>R</Avatar>
    <Avatar>R</Avatar>
    <Avatar size='large'>R</Avatar>
    <Avatar size='xl'>R</Avatar>
  </Paper>
);
