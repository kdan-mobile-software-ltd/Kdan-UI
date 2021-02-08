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
  { key: 3, content: "345" },
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
          margin: 0,
        }}>
        {item.content}
      </p>
    ))}
  </Carousel>
);

Basic.args = {
  mode: "light",
  showDot: true,
  showBorder: true,
  showCount: 1,
} as CarouselProps;

export const ShowTwoItems = (props: CarouselProps): React.ReactNode => (
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
          margin: 0,
        }}>
        {item.content}
      </p>
    ))}
  </Carousel>
);

ShowTwoItems.args = {
  mode: "light",
  showDot: true,
  showCount: 2,
} as CarouselProps;
