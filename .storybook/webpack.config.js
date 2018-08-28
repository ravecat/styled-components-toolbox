const paths = require("../config/paths");
const babelConfig = require("../config/babelConfig");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(js|jsx|mjs)$/,
    include: paths.appSrc,
    loader: require.resolve("babel-loader"),
    options: Object.assign({}, babelConfig, {
      cacheDirectory: true
    })
  });
  defaultConfig.resolve.modules.push("node_modules", paths.appSrc);

  return defaultConfig;
};
