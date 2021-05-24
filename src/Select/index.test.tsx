import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import Select from './';

import { delay } from '../helpers/utility';

const options = [
  { key: '1', value: '1' },
  { key: '2', value: '2' },
];

describe('Select', () => {
  afterEach(cleanup);

  test('set default value', () => {
    const { getByTestId } = render(<Select options={options} defaultValue="1" />);

    expect(getByTestId('selected').innerHTML).toBe('1');
  });

  test('show menu', async () => {
    const { getByTestId } = render(<Select options={options} />);

    fireEvent.click(getByTestId('selected'));

    await delay(20);

    expect(getByTestId('menu-list')).toBeInTheDocument();
  });

  test('select option', async () => {
    const { getByTestId, getByText } = render(<Select options={options} />);

    fireEvent.click(getByTestId('selected'));
    await delay(20);

    fireEvent.click(getByText('2'));
    await delay(20);

    expect(getByTestId('selected').innerHTML).toBe('2');
  });

  test('enable input', async () => {
    const { container, getByTestId } = render(<Select options={options} enabledInput />);

    fireEvent.click(getByTestId('selected'));

    await delay(20);

    expect(container.querySelector('input')).toBeInTheDocument();
  });
});
