module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-docs",
      options: {
        sourceLoaderOptions: {
          parser: "typescript",
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
  ],
  webpackFinal: async (config) => { 
    const fileLoaderRule = config.module.rules.find(rule => RegExp(rule.test).test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  }
};
