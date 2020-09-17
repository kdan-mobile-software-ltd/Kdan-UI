import React from 'react';
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import FeatureBanner from '../components/FeatureBanner';

describe('FeatureBanner', () => {
  afterEach(cleanup);
  const banners = [
    {
      name: 'Apple'
    },
    {
      name: 'Banana'
    }
  ];
  const backgroundColors = ['#000'];

  test('basic', () => {
    const { container } = render(
      <FeatureBanner banners={banners} backgroundColors={backgroundColors}>
        {({ banner }) => <div>{banner.name}</div>}
      </FeatureBanner>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render correct banners data', () => {
    render(
      <FeatureBanner banners={banners} backgroundColors={backgroundColors}>
        {({ banner }) => <div data-testid='banner'>{banner.name}</div>}
      </FeatureBanner>
    );

    expect(screen.getAllByTestId('banner').length).toBe(2);
    screen.getAllByTestId('banner').forEach((element, index) => {
      expect(element.textContent).toBe(banners[index].name);
    });
  });

  test('should render correct banners color if colors is only one', async () => {
    const { container } = render(
      <FeatureBanner banners={banners} backgroundColors={backgroundColors}>
        {() => <div />}
      </FeatureBanner>
    );

    const wrapper = container.querySelectorAll('.sc-AxirZ');
    expect(wrapper[0]).toHaveStyleRule('background', '#000');
    expect(wrapper[1]).toHaveStyleRule('background', '#000');
  });

  test('make sure the isFixed parameter is triggered by scrolling', async () => {
    render(
      <FeatureBanner banners={banners} backgroundColors={backgroundColors}>
        {({ isFixed }) => (
          <div data-testid='banner'>{isFixed ? 'isFixed' : ''}</div>
        )}
      </FeatureBanner>
    );

    fireEvent.scroll(window, { target: { scrollY: 1000 } });
    await waitFor(() => {
      screen.getAllByTestId('banner').forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
