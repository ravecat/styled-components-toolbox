module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "jsx-a11y"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    // TODO Enable after develelopment ready state
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // "react-app/jest",
    // "plugin:jest/recommended",
    // "plugin:jsx-a11y/strict",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  // settings: {
  //   "import/resolver": {
  //     node: {
  //       extensions: [".js"],
  //       paths: ["src"],
  //     },
  //   },
  // },
  // env: {
  //   browser: true,
  //   es6: true,
  // },
  globals: {
    document: true,
    module: true,
    window: true,
    navigator: true,
    it: true,
    jest: true,
    expect: true,
    describe: true,
  },
  rules: {
    "eol-last": [2, "always"],
    "no-console": [2, { allow: ["warn", "error"] }],
    "import/order": [2, { "newlines-between": "always" }],
    "react/jsx-sort-props": [
      2,
      {
        noSortAlphabetically: false,
      },
    ],
    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: false,
      },
    ],
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "react/jsx-wrap-multilines": [
      2,
      {
        assignment: "parens-new-line",
        arrow: "parens-new-line",
      },
    ],
  },
};
