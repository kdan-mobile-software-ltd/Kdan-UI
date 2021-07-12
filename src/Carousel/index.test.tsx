import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import Carousel from './';

describe('Carousel', () => {
  afterEach(cleanup);

  test('match snapshot', () => {
    const { container } = render(<Carousel>{[<div key="1">1</div>]}</Carousel>);

    expect(container).toMatchSnapshot();
  });

  test('to have correct style', () => {
    const { getByTestId } = render(
      <Carousel>{[<div key="1">1</div>, <div key="2">2</div>, <div key="3">3</div>]}</Carousel>,
    );
    const nextBtn = getByTestId('next-btn');
    const carouselEl = getByTestId('carousel');
    fireEvent.click(nextBtn);
    expect(carouselEl).toHaveStyle('left:-200%');
  });

  test('show dots', () => {
    const { getByTestId } = render(<Carousel showIndicators>{[<div key="1">1</div>, <div key="2">2</div>]}</Carousel>);
    expect(getByTestId('dots')).toBeInTheDocument();
  });
});
