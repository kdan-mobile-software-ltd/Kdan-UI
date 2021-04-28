import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import Textfield from './';

describe('Textfield', () => {
  afterEach(cleanup);

  test('set default value', () => {
    const { container } = render(<Textfield defaultValue='123' />);

    expect(container.querySelector('input')).toHaveValue('123');
  });

  test('change value', () => {
    const { getByLabelText } = render(<Textfield />);

    fireEvent.change(getByLabelText('input'), {
      target: { value: '456' },
    });

    expect(getByLabelText('input')).toHaveValue('456');
  });

  test('disable input', () => {
    const { getByLabelText } = render(<Textfield disabled />);

    expect(getByLabelText('input')).toBeDisabled();
  });
});
