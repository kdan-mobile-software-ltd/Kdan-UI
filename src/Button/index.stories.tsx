import React from "react";

import Button, { ButtonProps } from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Button",
  component: Button,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "按鈕樣式",
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <>
    <Button size="small">Click</Button>
    &nbsp;
    <Button size="medium" color="light">
      Click
    </Button>
    &nbsp;
    <Button size="large" color="cheese">
      Click
    </Button>
    <hr />
    <Button variant="outlined" size="small">
      Click
    </Button>
    &nbsp;
    <Button variant="outlined" size="medium">
      Click
    </Button>
    &nbsp;
    <Button variant="outlined" size="large">
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
    <Button variant="text" size="large">
      Click
    </Button>
  </>
);

Basic.args = {} as ButtonProps;

export const CustomContent = (args: ButtonProps): React.ReactNode => (
  <Button {...args} />
);

CustomContent.args = {
  variant: "contained",
  children: "Button Content",
  size: "large",
} as ButtonProps;

export const Link = (args: ButtonProps): React.ReactNode => (
  <Button {...args} />
);

Link.args = {
  variant: "text",
  children: "Link",
  href: "https://github.com/",
  target: "_blank",
} as ButtonProps;

export const Disabled = (args: ButtonProps): React.ReactNode => (
  <Button {...args} />
);

Disabled.args = {
  children: "Disabled",
  disabled: true,
  onClick: () => alert("123"),
} as ButtonProps;

export const FullWidth = (args: ButtonProps): React.ReactNode => (
  <Button {...args} />
);

FullWidth.args = {
  children: "Full Width",
  fullWidth: true,
} as ButtonProps;
