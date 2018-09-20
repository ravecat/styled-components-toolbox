const paths = require("../config/paths");
const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx|js|jsx)?$/,
    include: paths.appSrc,
    loader: "awesome-typescript-loader",
    options: {
      getCustomTransformers: require("../config/transformers.js")
    }
  });
  defaultConfig.resolve.modules.push("node_modules", paths.appSrc);

  return defaultConfig;
};
