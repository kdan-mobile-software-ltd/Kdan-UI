module.exports = (name) => {
  return `import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import ${name} from '../components/${name}';

describe('${name}', () => {
  afterEach(cleanup);

  test('basic', () => {
    const { container } = render(<${name} />);
    expect(container).toMatchSnapshot();
  });
})
`;
};
