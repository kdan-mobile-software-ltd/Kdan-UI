import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import LanguageBar from '../components/LanguageBar';

describe('LanguageBar', () => {
  afterEach(cleanup);

  const options = [
    {
      key: 'zh-tw',
      value: '中文'
    },
    {
      key: 'en',
      value: '英文'
    }
  ];
  const value = 'zh-tw';

  test('basic', () => {
    const { container } = render(
      <LanguageBar options={options} value={value} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should show menu on click', () => {
    const { container } = render(
      <LanguageBar options={options} value={value} />
    );
    fireEvent.click(container.querySelector('.sc-AxjAm'));
    expect(container.querySelector('.sc-AxhCb')).toHaveStyleRule(
      'display',
      'block'
    );
  });

  test('should change value on click', () => {
    const { container } = render(
      <LanguageBar options={options} value={value} />
    );
    fireEvent.click(container.querySelectorAll('.sc-AxiKw')[1]);
    expect(container.querySelector('.jXPJcR').textContent).toBe('英文');
  });
});
