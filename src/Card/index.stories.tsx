import React from "react";

import Card, { CardProps } from ".";
import Typography from "../Typography";
import Button from "../Button";
import Box from "../Box";
import { Container } from "../component/Decorator";

export default {
  title: "Card",
  component: Card,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "卡片",
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <Card>
    <Typography variant="h5" display="block">
      Card
    </Typography>
    <Box mt={2}>
      <Typography variant="b3" display="block">
        Content
      </Typography>
    </Box>
  </Card>
);

Basic.args = {} as CardProps;

export const WithMedia = (): React.ReactNode => (
  <Card
    media={<img src="https://i.imgur.com/WG5ObiT.png" />}
    actions={<Button>Link</Button>}>
    <Typography variant="h5" display="block">
      Creativity 365
    </Typography>
    <Box mt={2}>
      <Typography variant="b3" display="block">
        Make information gathering and content creation simple and efficient
        with the Creativity 365 series, featuring Animation Desk, Write-on
        Video, NoteLedge, and Markup.
      </Typography>
    </Box>
  </Card>
);

WithMedia.args = {} as CardProps;
