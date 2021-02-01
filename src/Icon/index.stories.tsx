import React from "react";

import Icon, { IconProps } from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Icon",
  component: Icon,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "Icon",
      },
    },
  },
};

export const Basic = (props: IconProps): React.ReactNode => <Icon {...props} />;

Basic.args = {
  glyph: "link-arrow",
} as IconProps;
