import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import FeatureBanner from '../components/FeatureBanner';

describe('FeatureBanner', () => {
  afterEach(cleanup);

  test('basic', () => {
    const { container } = render(<FeatureBanner />);
    expect(container).toMatchSnapshot();
  });
});
