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

const data = [
  { key: 1, content: "123" },
  { key: 2, content: "234" },
];

export const Basic = (props: CarouselProps): React.ReactNode => (
  <Carousel {...props}>
    {data.map((item) => (
      <p
        key={item.key}
        style={{
          minWidth: "275px",
          width: "100%",
          height: "250px",
          textAlign: "center",
          backgroundColor: "gray",
        }}>
        {item.content}
      </p>
    ))}
  </Carousel>
);

Basic.args = {
  mode: "light",
  showCount: 1,
} as CarouselProps;
