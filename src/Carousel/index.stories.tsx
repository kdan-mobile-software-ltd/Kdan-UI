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
        component: 'ๅนป็็',
      },
    },
  },
};

const data = [
  { key: 1, content: '1' },
  { key: 2, content: '2' },
  { key: 3, content: '3' },
  { key: 4, content: '4' },
  { key: 5, content: '5' },
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
  loop: true,
  indicatorColor: '#000000',
  autoplay: 3000,
} as CarouselProps;

export const LoopTwoItems = (props: CarouselProps): React.ReactNode => (
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

LoopTwoItems.args = {
  mode: 'light',
  indicatorColor: '#000',
  showIndicators: true,
  loop: true,
  displayCount: 2,
} as CarouselProps;

export const ThreeItems = (props: CarouselProps): React.ReactNode => (
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

ThreeItems.args = {
  mode: 'light',
  indicatorColor: 'rgb(0, 0, 0)',
  showIndicators: true,
  displayCount: 3,
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
  indicatorColor: 'rgba(0, 0, 0, 1)',
  showIndicators: true,
} as CarouselProps;
