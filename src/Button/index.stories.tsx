import React from "react";

import { Container } from "../component/Decorator";
import Button, { ButtonProps } from ".";
import Icon from "../Icon";

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

export const AnchorLink = (args: ButtonProps): React.ReactNode => (
  <Button {...args} />
);

AnchorLink.args = {
  variant: "text",
  children: "Link",
  isAnchor: true,
  href: "https://github.com/",
  target: "_blank",
  color: "brand",
  endIcon: <Icon glyph="link-arrow" />,
} as ButtonProps;

export const ButtonLink = (args: ButtonProps): React.ReactNode => (
  <Button {...args} />
);

ButtonLink.args = {
  variant: "contained",
  children: "Link",
  isAnchor: true,
  href: "https://github.com/",
  target: "_blank",
  color: "default",
  endIcon: <Icon glyph="link-arrow" />,
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

export const ButtonWithIcon = (args: ButtonProps): React.ReactNode => (
  <Button {...args} />
);

ButtonWithIcon.args = {
  variant: "text",
  children: "Products",
  endIcon: <Icon glyph="triangle-down" />,
} as ButtonProps;
