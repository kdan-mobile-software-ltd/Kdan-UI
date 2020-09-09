module.exports = (name) => {
  return `import React from 'react';
import { action } from '@storybook/addon-actions';

import ${name} from './';
import { Container } from '../Decorator';

export default {
  component: ${name},
  title: '${name}',
  decorators: [(story) => <Container styleType='middle'>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: 'Start description.'
      }
    }
  }
};

const actionsData = {
  onClick: action('onClick')
};

export const Base = (args) => <${name} {...args} />
Base.args = {
  ...actionsData
};
`;
};
