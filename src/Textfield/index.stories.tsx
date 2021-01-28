import React from "react";

import Textfield, { TextfieldProps } from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Textfield",
  component: Textfield,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "輸入框",
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <Textfield id="test-input" label="Title" required />
);

Basic.args = {} as TextfieldProps;
