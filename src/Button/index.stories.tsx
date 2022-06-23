import React from 'react';

import { Container } from '../component/Decorator';
import Button, { ButtonProps } from '.';
import { LinkArrowIcon, TriangleDownIcon } from '../Icon';
import Box from '../Box';

export default {
  title: 'Button',
  component: Button,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '按鈕樣式',
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <>
    <Button id="test" size="small">
      Click
    </Button>
    &nbsp;
    <Button size="medium" color="light">
      Click
    </Button>
    &nbsp;
    <Button size="large" color="cheese">
      Click
    </Button>
    &nbsp;
    <Button size="large" color="#002080" backgroundColor="#ea560c">
      Click
    </Button>
    <hr />
    <Button variant="outlined" color="brand" size="small">
      Click
    </Button>
    &nbsp;
    <Button size="medium" variant="outlined">
      Click
    </Button>
    &nbsp;
    <Button variant="outlined" color="red" size="large">
      Click
    </Button>
    <hr />
    <Button variant="text" size="small">
      Click
    </Button>
    &nbsp;
    <Button variant="text" color="brand" size="medium">
      Click
    </Button>
    &nbsp;
    <Button variant="text" color="rgb(0, 32, 128)" size="large">
      Click
    </Button>
  </>
);

Basic.args = {} as ButtonProps;

export const CustomContent = (args: ButtonProps): React.ReactNode => <Button {...args} />;

CustomContent.args = {
  variant: 'contained',
  children: 'Button Content',
  size: 'large',
  color: 'default',
} as ButtonProps;

export const AnchorLink = (args: ButtonProps): React.ReactNode => (
  <div style={{ marginLeft: '10px' }}>
    <Button {...args} />
  </div>
);

AnchorLink.args = {
  variant: 'text',
  children: 'Link',
  isAnchor: true,
  href: 'https://github.com/',
  target: '_blank',
  color: 'brand',
  endIcon: <LinkArrowIcon />,
} as ButtonProps;

export const ButtonLink = (args: ButtonProps): React.ReactNode => <Button {...args} />;

ButtonLink.args = {
  variant: 'contained',
  children: 'Link',
  isAnchor: true,
  href: 'https://github.com/',
  target: '_blank',
  color: 'default',
  endIcon: <LinkArrowIcon />,
} as ButtonProps;

export const Disabled = (args: ButtonProps): React.ReactNode => <Button {...args} />;

Disabled.args = {
  children: 'Disabled',
  disabled: true,
  onClick: () => alert('123'),
} as ButtonProps;

export const FullWidth = (args: ButtonProps): React.ReactNode => <Button {...args} />;

FullWidth.args = {
  children: 'Full Width',
  fullWidth: true,
} as ButtonProps;

export const ButtonWithIcon = (args: ButtonProps): React.ReactNode => <Button {...args} />;

ButtonWithIcon.args = {
  variant: 'text',
  children: 'Products',
  endIcon: <TriangleDownIcon />,
} as ButtonProps;

export const ButtonGroup = (): React.ReactNode => (
  <Box display="flex" width="162px" justifyContent="space-around">
    <Button>Btn 1</Button>
    <Button variant="outlined">Btn 2</Button>
  </Box>
);
