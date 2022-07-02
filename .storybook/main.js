module.exports = {
  stories: [
    "../app/stories/**/*.stories.@(tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6"
  ],
  "framework": "@storybook/react"
}