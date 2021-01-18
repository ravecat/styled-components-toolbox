module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "jsx-a11y"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [".config/tsconfig.eslint.json"],
    ecmaVersion: 2020,
    sourceType: "module",
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
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/strict",
  ],
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
    "max-len": ["error", { code: 110 }],
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
