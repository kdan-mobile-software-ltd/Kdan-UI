import React from "react";

import Logo from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Logo",
  component: Logo,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container size="middle">{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "Logo樣式",
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <>
    <Logo variant="logomark" />
    <hr />
    <Logo variant="wordmark" />
    <hr />
    <Logo variant="combine" />
  </>
);
