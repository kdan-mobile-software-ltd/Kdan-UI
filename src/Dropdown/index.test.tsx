import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import Dropdown from './';

import { delay } from '../helpers/utility';

describe('Dropdown', () => {
  afterEach(cleanup);

  test('open dropdown', async () => {
    render(<Dropdown trigger={<button>click</button>}>123</Dropdown>);

    await screen.findByText('click');

    fireEvent.click(screen.getByText('click'));

    await delay(20);

    expect(screen.getByText('123')).toBeInTheDocument();
  });
});
