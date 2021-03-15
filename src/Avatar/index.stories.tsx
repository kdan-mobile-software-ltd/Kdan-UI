import React from "react";

import Avatar, { AvatarProps } from "./";
import { Container, Paper } from "../component/Decorator";

import Joly from "../assets/icons/icon-144x144.png";

export default {
  title: "Avatar",
  component: Avatar,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "頭像",
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <Paper>
    <Avatar size="small" alt="Joly" src={Joly} />
    <Avatar alt="Joly" src={Joly} />
    <Avatar size="large" alt="Joly" src={Joly} />
    <Avatar size="xl" alt="Joly" src={Joly} />
  </Paper>
);

Basic.args = {} as AvatarProps;

export const Letter = (): React.ReactNode => (
  <Paper>
    <Avatar size="small">R</Avatar>
    <Avatar>R</Avatar>
    <Avatar size="large">R</Avatar>
    <Avatar size="xl">R</Avatar>
  </Paper>
);
