const paths = require("../config/paths");

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    modules: [paths.appNodeModules, paths.appSrc]
  },
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  }
};
