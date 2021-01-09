module.exports = {
  rootDir: "../",
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/src/**/*.d.ts"],
  setupFiles: ["react-app-polyfill/jsdom"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
  ],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  moduleDirectories: ["node_modules"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/.config/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/.config/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "web.jsx",
    "node",
    "mjs",
  ],
  modulePaths: ["<rootDir>/src"],
};
