import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import { ClickAwayListener } from '../components/ClickAwayListener';

describe('ClickAwayListener', () => {
  test('should trigger onClick outside', () => {
    const fakeHandleClick = jest.fn();
    const { getByText } = render(
      <>
        <ClickAwayListener onClick={fakeHandleClick}>
          Hello World
        </ClickAwayListener>
        <button>button</button>
        <p>Hello Jay</p>
      </>
    );

    fireEvent.click(getByText(/button/i));
    fireEvent.click(getByText(/Hello Jay/i));
    fireEvent.click(getByText(/Hello World/i));
    expect(fakeHandleClick).toBeCalledTimes(2);
  });
});
