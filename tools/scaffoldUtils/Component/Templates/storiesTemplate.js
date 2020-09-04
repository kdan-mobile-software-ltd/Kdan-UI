module.exports = (name) => {
  return `import React from 'react';
import { action } from '@storybook/addon-actions';

import { ${name} } from './${name}';
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

const Template = (args) => <${name} {...args} />;

export const base = Template.bind({});
base.args = {
  ...actionsData
};
`;
};
