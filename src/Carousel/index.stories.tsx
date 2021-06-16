import React from 'react';

import Carousel, { CarouselProps } from '.';
import { Container } from '../component/Decorator';

export default {
  title: 'Carousel',
  component: Carousel,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '幻燈片',
      },
    },
  },
};

const data = [
  { key: 1, content: '1' },
  { key: 2, content: '2' },
  { key: 3, content: '3' },
];

export const Basic = (props: CarouselProps): React.ReactNode => (
  <div
    style={{
      width: '650px',
      margin: 'auto',
    }}
  >
    <Carousel {...props}>
      {data.map((item) => (
        <p
          key={item.key}
          style={{
            height: '250px',
            backgroundColor: 'gray',
            fontSize: '72px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
          }}
        >
          {item.content}
        </p>
      ))}
    </Carousel>
  </div>
);

Basic.args = {
  mode: 'light',
  showIndicators: true,
  showBorder: true,
  displayCount: 2,
  loop: true,
} as CarouselProps;

export const ShowTwoItems = (props: CarouselProps): React.ReactNode => (
  <div
    style={{
      width: '650px',
      margin: 'auto',
    }}
  >
    <Carousel {...props}>
      {data.map((item) => (
        <p
          key={item.key}
          style={{
            height: '250px',
            textAlign: 'center',
            backgroundColor: 'gray',
            margin: 0,
          }}
        >
          {item.content}
        </p>
      ))}
    </Carousel>
  </div>
);

ShowTwoItems.args = {
  mode: 'light',
  showIndicators: true,
  displayCount: 2,
} as CarouselProps;

export const OnlyOne = (props: CarouselProps): React.ReactNode => (
  <div
    style={{
      width: '650px',
      margin: 'auto',
    }}
  >
    <Carousel {...props}>
      {[
        <p
          key="one"
          style={{
            height: '250px',
            textAlign: 'center',
            backgroundColor: 'gray',
            margin: 0,
          }}
        >
          only one
        </p>,
      ]}
    </Carousel>
  </div>
);

OnlyOne.args = {
  mode: 'light',
  showIndicators: true,
} as CarouselProps;
