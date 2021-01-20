import React from "react";

import Typography from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Typography",
  component: Typography,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container size="middle">{story()}</Container>
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

type Args = {
  variant: "h1" | "body1";
  children: React.ReactNode;
};

export const Basic = (): React.ReactNode => (
  <>
    <Typography variant="h1">Title H1</Typography>
    <hr />
    <Typography variant="h2">Title H2</Typography>
    <hr />
    <Typography variant="h3">Title H3</Typography>
    <hr />
    <Typography variant="h4">Title H4</Typography>
    <hr />
    <Typography variant="h5">Title H5</Typography>
    <hr />
    <Typography variant="h6">Title H6</Typography>
    <hr />
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <hr />
    <Typography variant="subtitle2">Subtitle 2</Typography>
    <hr />
    <Typography variant="body1">Body 1</Typography>
    <hr />
    <Typography variant="body2">Body 2</Typography>
  </>
);

export const CustomContent = (args: Args): React.ReactNode => (
  <Typography {...args} />
);

CustomContent.args = {
  variant: "h1",
  children: "Test H1",
} as Args;
