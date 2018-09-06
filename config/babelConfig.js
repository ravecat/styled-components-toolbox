const browsers = require("./browserslist");
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    [
      "env",
      {
        targets: {
          browsers
        },
        modules: false
      }
    ],
    "react-app"
  ],
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
