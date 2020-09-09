import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import FeatureScrollBar from '../components/FeatureScrollBar';

describe('FeatureScrollBar', () => {
  afterEach(cleanup);

  test('basic', () => {
    const { container } = render(<FeatureScrollBar />);
    expect(container).toMatchSnapshot();
  });
});
