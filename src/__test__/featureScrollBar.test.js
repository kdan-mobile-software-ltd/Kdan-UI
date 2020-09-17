import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import FeatureScrollBar from '../components/FeatureScrollBar';

describe('FeatureScrollBar', () => {
  afterEach(cleanup);

  test('basic', () => {
    const { container } = render(<FeatureScrollBar />);
    expect(container).toMatchSnapshot();
  });

  test('should calculate the correct css height', () => {
    const params = {
      max: 10,
      now: 3
    };

    render(<FeatureScrollBar {...params} />);

    const height = (params.now / params.max) * 100 + '%';
    expect(screen.getByTestId('bar')).toHaveStyle({ height });
  });

  test('should show top、right and left css property if params isFixed is true', () => {
    const params = {
      isFixed: true,
      top: '0px',
      left: '2px',
      right: '3px'
    };
    const { top, left, right } = params;

    render(<FeatureScrollBar {...params} />);
    expect(screen.getByTestId('bar').parentNode).toHaveStyle({
      top,
      left,
      right
    });
  });
});
