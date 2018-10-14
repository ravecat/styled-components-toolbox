const paths = require("../config/paths");
const getCustomTransformers = require("../config/transformers.js");

module.exports = (defaultConfig, configType) => {
  defaultConfig.module.rules.push(
    {
      test: /\.(ts|tsx|js|jsx)?$/,
      include: paths.appSrc,
      loader: "awesome-typescript-loader",
      options: {
        getCustomTransformers: getCustomTransformers
      }
    },
    {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
      loader: require.resolve("url-loader"),
      options: {
        limit: 10000,
        name: "static/media/[name].[hash:8].[ext]"
      }
    }
  );
  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  defaultConfig.resolve.modules.unshift(paths.appSrc);

  return defaultConfig;
};
