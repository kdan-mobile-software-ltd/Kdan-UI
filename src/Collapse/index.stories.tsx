import React from "react";

import Button from "../Button";
import Collapse, { CollapseProps } from "./";
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
    <Collapse trigger={<Button>Click</Button>}>
      <p style={{ backgroundColor: "white", height: "200px" }}>content</p>
    </Collapse>
  );
};

Basic.args = {} as CollapseProps;

export const PassFunctionToTrigger = ({}: CollapseProps): React.ReactNode => (
  <Collapse
    trigger={(open: boolean) => (
      <Button>Click {open ? "open" : "close"}</Button>
    )}>
    <p style={{ backgroundColor: "white", height: "200px" }}>content</p>
  </Collapse>
);

PassFunctionToTrigger.args = {} as CollapseProps;
