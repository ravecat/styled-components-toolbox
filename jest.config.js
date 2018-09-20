module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx,mjs}"],
  setupFiles: ["<rootDir>/config/polyfills.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx,mjs}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx,mjs}"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  moduleDirectories: ["node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  moduleNameMapper: {
    "^react-native$": "react-native-web"
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "ts",
    "tsx",
    "node",
    "mjs"
  ],
  modulePaths: ["<rootDir>/src"]
};
