import React from "react";

import Tabs, { TabsProps } from "./";
import { Container } from "../component/Decorator";

export default {
  title: "Tabs",
  component: Tabs,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "Tabs",
      },
    },
  },
};

export const Basic = (props: TabsProps): React.ReactNode => <Tabs {...props} />;

Basic.args = {
  tabs: [
    {
      label: "Simple Integration Process",
      content: "content 1",
    },
    {
      label: "Smooth and Secure Delivery Flow",
      content: "content 2",
    },
    {
      label: "Real-Time Tracking and Management",
      content: "content 3",
    },
  ],
  onChange: () => {
    // something
  },
  defaultIndex: 0,
} as TabsProps;
