import React, { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((current) => !current);
  };

  return (
    <Collapse
      trigger={<Button onClick={handleClick}>Click</Button>}
      open={open}>
      <p style={{ backgroundColor: "white", height: "200px" }}>content</p>
    </Collapse>
  );
};

Basic.args = {} as CollapseProps;
