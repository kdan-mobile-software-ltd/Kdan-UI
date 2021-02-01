import React from "react";

import Carousel, { CarouselProps } from ".";
import { Container } from "../component/Decorator";

export default {
  title: "Carousel",
  component: Carousel,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container padding>{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "幻燈片",
      },
    },
  },
};

export const Basic = (props: CarouselProps): React.ReactNode => (
  <Carousel {...props} />
);

Basic.args = {
  mode: "light",
  showCount: 1,
  items: [
    {
      id: "news-1",
      element: (
        <p
          style={{
            height: "100px",
            width: "500px",
            backgroundColor: "yellow",
          }}>
          123
        </p>
      ),
    },
    {
      id: "news-2",
      element: (
        <p
          style={{
            height: "100px",
            width: "500px",
            backgroundColor: "yellow",
          }}>
          456
        </p>
      ),
    },
    {
      id: "news-3",
      element: (
        <p
          style={{
            height: "100px",
            width: "500px",
            backgroundColor: "yellow",
          }}>
          789
        </p>
      ),
    },
  ],
} as CarouselProps;
