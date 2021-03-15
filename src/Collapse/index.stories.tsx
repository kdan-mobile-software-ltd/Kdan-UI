import React from "react";

import Button from "../Button";
import Collapse, { CollapseProps } from "./";
import Box from "../Box";
import { Container } from "../component/Decorator";

export default {
  title: "Collapse",
  component: Collapse,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "展開項目",
      },
    },
  },
};

export const Basic = ({}: CollapseProps): React.ReactNode => {
  return (
    <Box maxWidth="200px">
      <Collapse trigger={<Button>Click</Button>}>
        <p style={{ backgroundColor: "white", height: "200px" }}>
          inside content
        </p>
      </Collapse>
      <p>outside content</p>
    </Box>
  );
};

Basic.args = {} as CollapseProps;

export const PassFunctionToTrigger = ({}: CollapseProps): React.ReactNode => (
  <Box maxWidth="200px">
    <Collapse
      trigger={(open: boolean) => (
        <Button>Click {open ? "open" : "close"}</Button>
      )}>
      <p style={{ backgroundColor: "white", height: "200px" }}>content</p>
    </Collapse>
  </Box>
);

PassFunctionToTrigger.args = {} as CollapseProps;
