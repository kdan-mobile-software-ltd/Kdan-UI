import React from "react";

import Typography, { TypographyProps } from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Typography",
  component: Typography,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "文本樣式",
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <>
    <Typography variant="h1">H1 Welcome to Your Mobile Workspace</Typography>
    <hr />
    <Typography variant="h2">H2 Welcome to Your Mobile Workspace</Typography>
    <hr />
    <Typography variant="h3">H3 Welcome to Your Mobile Workspace</Typography>
    <hr />
    <Typography variant="h4">H4 Welcome to Your Mobile Workspace</Typography>
    <hr />
    <Typography variant="h5">H5 Welcome to Your Mobile Workspace</Typography>
    <hr />
    <Typography variant="h6">H6 Welcome to Your Mobile Workspace</Typography>
    <hr />
    <Typography variant="subtitle1">
      Subtitle1 Welcome to Your Mobile Workspace
    </Typography>
    <hr />
    <Typography variant="b1">
      B1 Kdan Mobile provides users with digital solutions to boost productivity
      and unleash creativity.
    </Typography>
    <hr />
    <Typography variant="b2">
      B2 Kdan Mobile provides users with digital solutions to boost productivity
      and unleash creativity.
    </Typography>
    <hr />
    <Typography variant="b3">
      B3 Kdan Mobile provides users with digital solutions to boost productivity
      and unleash creativity.
    </Typography>
    <hr />
    <Typography variant="b4">
      B4 Kdan Mobile provides users with digital solutions to boost productivity
      and unleash creativity.
    </Typography>
    <hr />
    <Typography variant="caption">
      Caption Kdan Mobile provides users with digital solutions to boost
      productivity and unleash creativity.
    </Typography>
  </>
);

Basic.args = {} as TypographyProps;

export const CustomContent = (args: TypographyProps): React.ReactNode => (
  <Typography {...args} />
);

CustomContent.args = {
  variant: "h1",
  children: "Test H1",
} as TypographyProps;

export const CustomColor = (args: TypographyProps): React.ReactNode => (
  <Typography {...args} />
);

CustomColor.args = {
  variant: "h1",
  children: "Color H1",
  color: "brand",
} as TypographyProps;

export const CustomHoverColor = (args: TypographyProps): React.ReactNode => (
  <Typography {...args} />
);

CustomHoverColor.args = {
  variant: "h1",
  children: "Hover H1",
  hoverColor: "brand",
} as TypographyProps;

export const SetInnerHTML = (args: TypographyProps): React.ReactNode => (
  <Typography {...args} />
);

SetInnerHTML.args = {
  variant: "b1",
  dangerouslySetInnerHTML: { __html: "Hello <strong>World</strong>!" },
} as TypographyProps;
