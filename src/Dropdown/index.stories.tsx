import React from "react";

import Button from "../Button";
import Dropdown, { DropdownProps } from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "下拉選單",
      },
    },
  },
};

export const Basic = ({
  position,
  fullWidth,
  defaultOpen,
}: DropdownProps): React.ReactNode => (
  <Dropdown
    trigger={<Button>Click</Button>}
    position={position}
    fullWidth={fullWidth}
    defaultOpen={defaultOpen}>
    <p
      style={{
        width: "400px",
        height: "300px",
        backgroundColor: "gray",
        margin: 0,
      }}>
      content
    </p>
  </Dropdown>
);

Basic.args = {
  position: "bottom right",
  fullWidth: false,
  defaultOpen: false,
} as DropdownProps;

export const PassFunctionToTrigger = ({
  position,
  fullWidth,
  defaultOpen,
}: DropdownProps): React.ReactNode => (
  <Dropdown
    trigger={(open: boolean) => (
      <Button>Click {open ? "open" : "close"}</Button>
    )}
    position={position}
    fullWidth={fullWidth}
    defaultOpen={defaultOpen}>
    <p
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "gray",
        margin: 0,
      }}>
      content
    </p>
  </Dropdown>
);

PassFunctionToTrigger.args = {
  position: "bottom right",
  fullWidth: false,
  defaultOpen: false,
} as DropdownProps;
