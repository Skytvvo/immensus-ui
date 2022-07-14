const path = require("path");
module.exports = {
  stories: [
    "../app/stories/**/*.stories.@(tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
    "@storybook/addon-postcss"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@interfaces': path.resolve(__dirname, "../app/globals/interfaces"),
      '@collections': path.resolve(__dirname, "../app/globals/collections"),
      '@constants': path.resolve(__dirname, "../app/globals/constants"),
      '@stories': path.resolve(__dirname, "../app/stories"),
    };

    return config;
  }
}

