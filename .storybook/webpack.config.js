const paths = require("../config/paths");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx|js|jsx)?$/,
    include: paths.appSrc,
    loader: "awesome-typescript-loader"
  });
  defaultConfig.resolve.modules.push("node_modules", paths.appSrc);

  return defaultConfig;
};
