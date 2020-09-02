import React from 'react';
import { action } from '@storybook/addon-actions';

import { LanguageBar } from '@components/LanguageBar';
import { Container } from '@components/Layout';

const langLabels = [
  {
    key: 'en',
    value: 'English',
  },
  {
    key: 'ja',
    value: '日本語',
  },
  {
    key: 'zh-tw',
    value: '中文（繁體）',
  },
  {
    key: 'zh-cn',
    value: '中文（简体）',
  },
];

export default {
  component: LanguageBar,
  title: 'LanguageBar',
  decorators: [(story) => <Container>{story()}</Container>],
};

const Template = (args) => <LanguageBar {...args} />

const actionsData = {
  onChange: action('onChange'),
};

export const demo = Template.bind({});
demo.args = {
  value: 'English',
  options: langLabels,
  ...actionsData,
};
