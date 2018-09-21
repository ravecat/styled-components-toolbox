const paths = require("../config/paths");
const getCustomTransformers = require("../config/transformers.js");

// Probably something rules are redundant
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx|js|jsx)?$/,
    include: paths.appSrc,
    loader: "awesome-typescript-loader",
    options: {
      getCustomTransformers: getCustomTransformers
    }
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  defaultConfig.resolve.modules.unshift(paths.appSrc);

  return defaultConfig;
};
