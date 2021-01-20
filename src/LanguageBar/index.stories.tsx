import React from "react";
import { action } from "@storybook/addon-actions";

import LanguageBar from ".";
import { Container } from "../component/Decorator";

export type OptionType = {
  key: string | number;
  value: React.ReactNode;
};

const langLabels: OptionType[] = [
  {
    key: "en",
    value: "English",
  },
  {
    key: "ja",
    value: "日本語",
  },
  {
    key: "zh-tw",
    value: "中文（繁體）",
  },
  {
    key: "zh-cn",
    value: "中文（简体）",
  },
  {
    key: "es",
    value: "Español",
  },
  {
    key: "ko",
    value: "한국어",
  },
  {
    key: "it",
    value: "Italiano",
  },
];

export default {
  title: "LanguageBar",
  component: LanguageBar,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container size="middle">{story()}</Container>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: "下拉式語系選單。",
      },
    },
  },
};

type Args = {
  theme: "default" | "dark";
  value: string;
  options: OptionType[];
  onChange: () => void;
};

const defaultArgs: Args = {
  theme: "default",
  value: "English",
  options: langLabels,
  onChange: action("onChange"),
};

export const Basic = (args: Args): React.ReactNode => <LanguageBar {...args} />;

Basic.args = defaultArgs;
