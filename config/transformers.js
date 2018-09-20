const styledComponentsTransformer = require("typescript-plugin-styled-components")
  .default;

const getCustomTransformers = () => ({
  before: [styledComponentsTransformer()]
});

module.exports = getCustomTransformers;
