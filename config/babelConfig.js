const isDevelopment = process.env.NODE_ENV === "development";

const babelConfig = {
  babelrc: false,
  presets: ["react-app"],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        displayName: isDevelopment,
        minify: false
      }
    ]
  ]
};

module.exports = babelConfig;
