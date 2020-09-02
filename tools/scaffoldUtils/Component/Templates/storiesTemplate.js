module.exports = (name) => {
  return `import React from 'react';
import { action } from '@storybook/addon-actions';

import { ${name} } from '@components/${name}';
import { Container } from '@components/Decorator';

export default {
  component: ${name},
  title: '${name}',
  decorators: [(story) => <Container styleType='middle'>{story()}</Container>]
};

const actionsData = {
  onClick: action('onClick')
};

const Template = (args) => <${name} {...args} />;

export const basic = Template.bind({});
basic.args = {
  ...actionsData
};
`;
};
